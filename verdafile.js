"use strict";

const build = require("verda").create();
const { task, tasks, file, files, oracle, oracles, computed, computes, phony } = build.ruleTypes;
const { de, fu } = build.rules;
const { run, node, cd, cp, rm } = build.actions;
const { FileList } = build.predefinedFuncs;
module.exports = build;

///////////////////////////////////////////////////////////

const fs = require("fs");
const path = require("path");
const toml = require("toml");

const BUILD = "build";
const DIST = "dist";
const ARCHIVE_DIR = "release-archives";

const PATEL_C = ["node", "./node_modules/patel/bin/patel-c"];
const GENERATE = ["node", "gen/generator"];
const GC = ["node", "gen/gc"];
const webfontFormats = [["woff2", "woff2"], ["woff", "woff"], ["ttf", "truetype"]];

const BUILD_PLANS = path.relative(__dirname, path.resolve(__dirname, "./build-plans.toml"));
const PRIVATE_BUILD_PLANS = path.relative(
	__dirname,
	path.resolve(__dirname, "./private-build-plans.toml")
);

// Save journal to build/
build.setJournal(`${BUILD}/.verda-build-journal`);
// Enable self-tracking
build.setSelfTracking();

///////////////////////////////////////////////////////////
//////                   Oracles                     //////
///////////////////////////////////////////////////////////

const Version = oracle(`version`, async () => {
	const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
	return package_json.version;
});

const RawPlans = oracle(`raw-plans`, async target => {
	await target.need(fu(BUILD_PLANS));
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		await target.need(fu(PRIVATE_BUILD_PLANS));
	}

	const t = toml.parse(fs.readFileSync(BUILD_PLANS, "utf-8"));
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		Object.assign(
			t.buildPlans,
			toml.parse(fs.readFileSync(PRIVATE_BUILD_PLANS, "utf-8")).buildPlans
		);
	}
	for (const prefix in t.buildPlans) {
		const plan = t.buildPlans[prefix];
		plan.prefix = prefix;

		// Style groups
		if (!plan.pre) plan.pre = {};
		if (!plan.post) plan.post = {};

		if (!plan.pre.design) plan.pre.design = plan.design || [];
		if (!plan.pre.upright) plan.pre.upright = plan.upright || [];
		if (!plan.pre.oblique) plan.pre.oblique = plan.oblique || [];
		if (!plan.pre.italic) plan.pre.italic = plan.italic || [];

		if (!plan.post.design) plan.post.design = [];
		if (!plan.post.upright) plan.post.upright = [];
		if (!plan.post.oblique) plan.post.oblique = [];
		if (!plan.post.italic) plan.post.italic = [];
	}
	for (const prefix in t.collectPlans) {
		t.collectPlans[prefix].prefix = prefix;
	}
	return t;
});

const BuildPlans = computed("build-plans", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.buildPlans;
});
const ExportPlans = computed("export-plans", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.exportPlans;
});
const RawCollectPlans = computed("raw-collect-plans", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.collectPlans;
});
const Weights = computed("weights", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.weights;
});
const Slants = computed("slants", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.slants;
});

function getSuffixSet(weights, slants) {
	const mapping = {};
	for (const w in weights) {
		for (const s in slants) {
			const suffix =
				(w === "regular" ? (s === "upright" ? "regular" : "") : w) +
				(s === "upright" ? "" : s);
			mapping[suffix] = {
				hives: [`w-${weights[w].shape}`, `s-${s}`],
				weight: w,
				cssWeight: weights[w].css || w,
				menuWeight: weights[w].menu || weights[w].css || w,
				slant: s,
				cssStyle: slants[s] || s,
				menuStyle: slants[s] || s
			};
		}
	}
	return mapping;
}

const Suffixes = computed(`suffixes`, async target => {
	const [weights, slants] = await target.need(Weights, Slants);
	return getSuffixSet(weights, slants);
});

const FontBuildingParameters = computed(`font-building-parameters`, async target => {
	const [buildPlans, defaultWeights, defaultSlants] = await target.need(
		BuildPlans,
		Weights,
		Slants
	);
	const fontInfos = {};
	const bp = {};
	for (const p in buildPlans) {
		const { pre, post, prefix, family, weights, slants } = buildPlans[p];
		const targets = [];
		const suffixMapping = getSuffixSet(weights || defaultWeights, slants || defaultSlants);
		for (const suffix in suffixMapping) {
			if (weights && !weights[suffixMapping[suffix].weight]) continue;
			if (slants && !slants[suffixMapping[suffix].slant]) continue;
			const fileName = [prefix, suffix].join("-");
			const preHives = [...pre.design, ...pre[suffixMapping[suffix].slant]];
			const postHives = [...post.design, ...post[suffixMapping[suffix].slant]];
			fontInfos[fileName] = {
				name: fileName,
				family,
				hives: ["iosevka", ...preHives, ...suffixMapping[suffix].hives, ...postHives],
				menuWeight: suffixMapping[suffix].menuWeight,
				menuStyle: suffixMapping[suffix].menuStyle,
				cssWeight: suffixMapping[suffix].cssWeight,
				cssStyle: suffixMapping[suffix].cssStyle
			};
			targets.push(fileName);
		}
		bp[prefix] = {
			family,
			prefix,
			targets
		};
	}
	return { fontInfos, buildPlans: bp };
});

const CollectPlans = computed(`collect-plans`, async target => {
	const [rawCollectPlans, suffixMapping] = await target.need(RawCollectPlans, Suffixes);
	const composition = {},
		groups = {};
	for (const gid in rawCollectPlans) {
		groups[gid] = [];
		const collect = rawCollectPlans[gid];
		for (const suffix in suffixMapping) {
			const fileName = `${collect.prefix}-${suffix}`;
			composition[fileName] = [];
			for (const prefix of collect.from) {
				composition[fileName].push({
					dir: prefix,
					file: `${prefix}-${suffix}`
				});
			}
			groups[gid].push(fileName);
		}
	}
	return { composition, groups };
});

const HivesOf = computes.group("hives-of", async (target, gid) => {
	const [{ fontInfos }] = await target.need(FontBuildingParameters);
	return fontInfos[gid];
});

const GroupInfo = computes.group("group-info", async (target, gid) => {
	const [{ buildPlans }] = await target.need(FontBuildingParameters);
	return buildPlans[gid];
});

const GroupFontsOf = computes.group("group-fonts-of", async (target, gid) => {
	const [plan] = await target.need(GroupInfo(gid));
	return plan.targets;
});

const CollectionPartsOf = computes.group("collection-parts-of", async (target, id) => {
	const [{ composition }] = await target.need(CollectPlans);
	return composition[id];
});

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

const BuildTTF = files(`${BUILD}/*/*.ttf`, async (target, path) => {
	const [, suffix] = path.$;
	const [{ hives, family, menuWeight, menuStyle }, version] = await target.need(
		HivesOf(suffix),
		Version
	);
	const otd = path.dir + "/" + path.name + ".otd";
	const ttfTmp = path.dir + "/" + path.name + ".tmp.ttf";
	const otdTmp = path.dir + "/" + path.name + ".tmp.otd";
	const charmap = path.dir + "/" + path.name + ".charmap";
	await target.need(Scripts, fu`parameters.toml`, de`${path.dir}`);
	await run(
		GENERATE,
		["-o", otdTmp],
		["--charmap", charmap],
		["--family", family],
		["--ver", version],
		["--menu-weight", menuWeight],
		["--menu-slant", menuStyle],
		hives
	);
	await run("otfccbuild", otdTmp, "-o", ttfTmp, "-O3", "--keep-average-char-width");
	await run(GC, ["-i", ttfTmp], ["-o", otd]);
	await run("otfccbuild", otd, "-o", path.full, "-O3", "--keep-average-char-width", "-q");
	await rm(otdTmp);
	await rm(otd);
});
const BuildCM = files(`${BUILD}/*/*.charmap`, async (target, path) => {
	await target.need(BuildTTF(path.dir + "/" + path.name + ".ttf"));
});

///////////////////////////////////////////////////////////
//////              Font Distribution                //////
///////////////////////////////////////////////////////////

// Per group file
const DistUnhintedTTF = files(`${DIST}/*/ttf-unhinted/*.ttf`, async (target, path) => {
	const [gr, f] = path.$;
	const [from] = await target.need(BuildTTF`${BUILD}/${gr}/${f}.ttf`, de`${path.dir}`);
	await cp(from.full, path.full);
});
const DistHintedTTF = files(`${DIST}/*/ttf/*.ttf`, async (target, path) => {
	const [gr, f] = path.$;
	const [from] = await target.need(BuildTTF`${BUILD}/${gr}/${f}.ttf`, de`${path.dir}`);
	await run("ttfautohint", from.full, path.full);
});
const DistWoff = files(`${DIST}/*/woff/*.woff`, async (target, path) => {
	const [group, f] = path.$;
	const [from] = await target.need(DistHintedTTF`${DIST}/${group}/ttf/${f}.ttf`, de`${path.dir}`);
	await node(`utility/ttf-to-woff.js`, from.full, path.full);
});
const DistWoff2 = files(`${DIST}/*/woff2/*.woff2`, async (target, path) => {
	const [group, f] = path.$;
	const [from] = await target.need(DistHintedTTF`${DIST}/${group}/ttf/${f}.ttf`, de`${path.dir}`);
	await node(`utility/ttf-to-woff2.js`, from.full, path.full);
});

// TTC
const DistTTC = files(`${DIST}/collections/*/*.ttc`, async (target, { full, dir, $: [, f] }) => {
	const [parts] = await target.need(CollectionPartsOf(f));
	await target.need(de`${dir}`);
	const [ttfs] = await target.need(
		parts.map(part => DistHintedTTF`${DIST}/${part.dir}/ttf/${part.file}.ttf`)
	);
	await run(`otfcc-ttcize`, ttfs.map(p => p.full), "-o", full);
});

// Group-level
const GroupTTFs = tasks.group("ttf", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistHintedTTF`${DIST}/${gid}/ttf/${tn}.ttf`));
});
const GroupUnhintedTTFs = tasks.group("ttf-unhinted", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistUnhintedTTF`${DIST}/${gid}/ttf-unhinted/${tn}.ttf`));
});
const GroupWoffs = tasks.group("woff", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistWoff`${DIST}/${gid}/woff/${tn}.woff`));
});
const GroupWoff2s = tasks.group("woff2", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistWoff2`${DIST}/${gid}/woff2/${tn}.woff2`));
});
const GroupFonts = tasks.group("fonts", async (target, gid) => {
	await target.need(GroupTTFs(gid), GroupUnhintedTTFs(gid), GroupWoffs(gid), GroupWoff2s(gid));
});

// Charmap (for specimen)
const DistCharMaps = files(
	`${DIST}/*/*.charmap`,
	async (target, { full, dir, $: [gid, suffix] }) => {
		const [src] = await target.need(BuildCM`${BUILD}/${gid}/${suffix}.charmap`, de`${dir}`);
		await cp(src.full, full);
	}
);

// Webfont CSS
const DistWebFontCSS = files(`${DIST}/*/webfont.css`, async (target, { dir, $: [gid] }) => {
	// Note: this target does NOT depend on the font files.
	const [gr, ts] = await target.need(GroupInfo(gid), GroupFontsOf(gid), de(dir));
	const hs = await target.need(...ts.map(HivesOf));
	await node(
		"utility/make-webfont-css.js",
		`${DIST}/${gid}/webfont.css`,
		gr.family,
		hs,
		webfontFormats
	);
});

const GroupContents = tasks.group("contents", async (target, gid) => {
	const [gr] = await target.need(GroupInfo(gid));
	await target.need(
		GroupFonts(gid),
		DistWebFontCSS`${DIST}/${gid}/webfont.css`,
		DistCharMaps`${DIST}/${gid}/${gr.prefix}-regular.charmap`
	);
	return gid;
});

// Archive
const ArchiveFile = files(`${ARCHIVE_DIR}/*-*.zip`, async (target, { dir, full, $: [gid] }) => {
	// Note: this target does NOT depend on the font files.
	const [exportPlans] = await target.need(ExportPlans, de`${dir}`);
	await target.need(GroupContents(exportPlans[gid]));
	await cd(`${DIST}/${exportPlans[gid]}`).run(
		["7z", "a"],
		["-tzip", "-r", "-mx=9"],
		`../../${full}`,
		`./`
	);
});
const GroupArchives = tasks.group(`archive`, async (target, gid) => {
	const [version] = await target.need(Version);
	await target.need(ArchiveFile`${ARCHIVE_DIR}/${gid}-${version}.zip`);
});

// Collection-level
const CollectionFontsOf = tasks.group("collection-fonts", async (target, cid) => {
	const [{ groups }] = await target.need(CollectPlans);
	await target.need(groups[cid].map(file => DistTTC`${DIST}/collections/${cid}/${file}.ttc`));
});
const TTCArchiveFile = files(
	`${ARCHIVE_DIR}/ttc-*-*.zip`,
	async (target, { dir, full, $: [cid] }) => {
		// Note: this target does NOT depend on the font files.
		await target.need(de`${dir}`);
		await target.need(CollectionFontsOf(cid));
		await cd(`${DIST}/collections/${cid}`).run(
			["7z", "a"],
			["-tzip", "-r", "-mx=9"],
			`../../../${full}`,
			`./`
		);
	}
);
const CollectionArchive = tasks.group(`collection-archive`, async (target, cid) => {
	const [version] = await target.need(Version);
	await target.need(TTCArchiveFile`${ARCHIVE_DIR}/ttc-${cid}-${version}.zip`);
});

///////////////////////////////////////////////////////////
//////                  Root Tasks                   //////
///////////////////////////////////////////////////////////

const Pages = task(`pages`, async target => {
	const [sans, slab] = await target.need(GroupContents`iosevka`, GroupContents`iosevka-slab`);
	await cp(`${DIST}/${sans}`, `pages/${sans}`);
	await cp(`${DIST}/${slab}`, `pages/${slab}`);
});

const SampleImagesPre = task(`sample-images:pre`, async target => {
	const [sans, slab] = await target.need(
		GroupContents`iosevka`,
		GroupContents`iosevka-slab`,
		de`images`
	);
	await cp(`${DIST}/${sans}`, `snapshot/${sans}`);
	await cp(`${DIST}/${slab}`, `snapshot/${slab}`);
});
const SnapShotCSS = file(`snapshot/index.css`, async target => {
	await target.need(fu`snapshot/index.styl`);
	await run(`npm`, `run`, `stylus`, `snapshot/index.styl`, `-c`);
});
const TakeSampleImages = task(`sample-images:take`, async target => {
	await target.need(SampleImagesPre, SnapShotCSS);
	await cd(`snapshot`).run("npx", "electron", "get-snap.js", ["--dir", "../images"]);
});
const ScreenShot = files(`images/*.png`, async (target, { full }) => {
	await target.need(TakeSampleImages);
	await run("optipng", full);
});

const SampleImages = task(`sample-images`, async target => {
	await target.need(TakeSampleImages);
	await target.need(
		ScreenShot`images/charvars.png`,
		ScreenShot`images/download-options.png`,
		ScreenShot`images/family.png`,
		ScreenShot`images/languages.png`,
		ScreenShot`images/ligations.png`,
		ScreenShot`images/matrix.png`,
		ScreenShot`images/preview-all.png`,
		ScreenShot`images/stylesets.png`,
		ScreenShot`images/variants.png`,
		ScreenShot`images/weights.png`
	);
});

const AllArchives = task(`all:archives`, async target => {
	const [exportPlans, collectPlans] = await target.need(ExportPlans, CollectPlans);
	await target.need(
		Object.keys(exportPlans).map(GroupArchives),
		Object.keys(collectPlans.groups).map(CollectionArchive)
	);
});

phony(`clean`, async () => {
	await rm(`build`);
	await rm(`dist`);
	await rm(`release-archives`);
	build.deleteJournal(); // Disable journal
});
phony(`release`, async target => {
	await target.need(AllArchives);
	await target.need(SampleImages, Pages);
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

const MARCOS = [fu`meta/macros.ptl`];
const ScriptsUnder = oracles("{ptl|js}-scripts-under::***", (target, $ext, $1) =>
	FileList({ under: $1, pattern: `**/*.${$ext}` })(target)
);
const ScriptFiles = computes.group("script-files", async (target, ext) => {
	const [gen, meta, glyphs, support] = await target.need(
		ScriptsUnder`${ext}-scripts-under::gen`,
		ScriptsUnder`${ext}-scripts-under::meta`,
		ScriptsUnder`${ext}-scripts-under::glyphs`,
		ScriptsUnder`${ext}-scripts-under::support`
	);
	return [...gen, ...meta, ...glyphs, ...support];
});
const JavaScriptFromPtl = computed("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(ScriptFiles`ptl`);
	return ptl.map(x => x.replace(/\.ptl$/g, ".js"));
});

const ScriptJS = files(`{gen|glyphs|support|meta}/**/*.js`, async (target, path) => {
	const [jsFromPtl] = await target.need(JavaScriptFromPtl);
	if (jsFromPtl.indexOf(path.full) >= 0) {
		const ptl = path.full.replace(/\.js$/g, ".ptl");
		if (/^glyphs\//.test(path.full)) {
			await target.need(MARCOS);
		}
		await target.need(fu`${ptl}`);
		await run(PATEL_C, "--strict", ptl, "-o", path.full);
	} else {
		await target.need(fu`${path.full}`);
	}
});
const Scripts = task("scripts", async target => {
	const [jsFromPtl] = await target.need(JavaScriptFromPtl);
	await target.need(jsFromPtl);
	const [js] = await target.need(ScriptFiles`js`);
	await target.need(js.map(ScriptJS));
	await target.need(fu`parameters.toml`, fu`variants.toml`, fu`emptyfont.toml`);
});
