"use strict";

const build = require("verda").create();
const { task, file, oracle, computed, phony } = build.ruleTypes;
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
const webfontFormats = [
	["woff2", "woff2"],
	["woff", "woff"],
	["ttf", "truetype"]
];

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

async function tryParseToml(str) {
	try {
		return toml.parse(fs.readFileSync(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\n` +
				`Please validate whether there's syntax error.\n` +
				`${e}`
		);
	}
}

const RawPlans = oracle(`raw-plans`, async target => {
	await target.need(fu(BUILD_PLANS));
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		await target.need(fu(PRIVATE_BUILD_PLANS));
	}

	const bp = await tryParseToml(BUILD_PLANS);
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		const privateBP = await tryParseToml(PRIVATE_BUILD_PLANS);
		Object.assign(bp.buildPlans, privateBP.buildPlans);
	}
	for (const prefix in bp.buildPlans) {
		const plan = bp.buildPlans[prefix];
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
	for (const prefix in bp.collectPlans) {
		bp.collectPlans[prefix].prefix = prefix;
	}
	return bp;
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
		const { pre, post, prefix, family, weights, slants, hintParams } = buildPlans[p];
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
				cssStyle: suffixMapping[suffix].cssStyle,
				hintParams: hintParams || []
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

const HivesOf = computed.group("hives-of", async (target, gid) => {
	const [{ fontInfos }] = await target.need(FontBuildingParameters);
	return fontInfos[gid];
});

const GroupInfo = computed.group("group-info", async (target, gid) => {
	const [{ buildPlans }] = await target.need(FontBuildingParameters);
	return buildPlans[gid];
});

const GroupFontsOf = computed.group("group-fonts-of", async (target, gid) => {
	const [plan] = await target.need(GroupInfo(gid));
	return plan.targets;
});

const CollectionPartsOf = computed.group("collection-parts-of", async (target, id) => {
	const [{ composition }] = await target.need(CollectPlans);
	return composition[id];
});

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

const BuildTTF = file.make(
	(gr, fn) => `${BUILD}/${gr}/${fn}.ttf`,
	async (target, output, _gr, fn) => {
		const [{ hives, family, menuWeight, menuStyle }, version] = await target.need(
			HivesOf(fn),
			Version
		);
		const otd = output.dir + "/" + output.name + ".otd";
		const ttfTmp = output.dir + "/" + output.name + ".tmp.ttf";
		const otdTmp = output.dir + "/" + output.name + ".tmp.otd";
		const charmap = output.dir + "/" + output.name + ".charmap";
		await target.need(Scripts, fu`parameters.toml`, de`${output.dir}`);
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
		await run("otfccbuild", otd, "-o", output.full, "-O3", "--keep-average-char-width", "-q");
		await rm(otdTmp);
		await rm(ttfTmp);
		await rm(otd);
	}
);
const BuildCM = file.make(
	(gr, f) => `${BUILD}/${gr}/${f}.charmap`,
	async (target, output, gr, f) => {
		await target.need(BuildTTF(gr, f));
	}
);

///////////////////////////////////////////////////////////
//////              Font Distribution                //////
///////////////////////////////////////////////////////////

// Per group file
const DistUnhintedTTF = file.make(
	(gr, fn) => `${DIST}/${gr}/ttf-unhinted/${fn}.ttf`,
	async (target, path, gr, f) => {
		const [from] = await target.need(BuildTTF(gr, f), de`${path.dir}`);
		await cp(from.full, path.full);
	}
);
const DistHintedTTF = file.make(
	(gr, fn) => `${DIST}/${gr}/ttf/${fn}.ttf`,
	async (target, path, gr, f) => {
		const [{ hintParams }] = await target.need(HivesOf(f));
		const [from] = await target.need(BuildTTF(gr, f), de`${path.dir}`);
		await run("ttfautohint", hintParams, from.full, path.full);
	}
);
const DistWoff = file.make(
	(gr, fn) => `${DIST}/${gr}/woff/${fn}.woff`,
	async (target, path, group, f) => {
		const [from] = await target.need(DistHintedTTF(group, f), de`${path.dir}`);
		await node(`utility/ttf-to-woff.js`, from.full, path.full);
	}
);
const DistWoff2 = file.make(
	(gr, fn) => `${DIST}/${gr}/woff2/${fn}.woff2`,
	async (target, path, group, f) => {
		const [from] = await target.need(DistHintedTTF(group, f), de`${path.dir}`);
		await node(`utility/ttf-to-woff2.js`, from.full, path.full);
	}
);

// TTC
const DistTTC = file.make(
	(gr, f) => `${DIST}/collections/${gr}/${f}.ttc`,
	async (target, { full, dir }, gr, f) => {
		const [parts] = await target.need(CollectionPartsOf(f));
		await target.need(de`${dir}`);
		const [ttfs] = await target.need(parts.map(part => DistHintedTTF(part.dir, part.file)));
		await run(
			`otfcc-ttcize`,
			ttfs.map(p => p.full),
			"-o",
			full,
			"-h",
			"--common-width=500"
		);
	}
);

// Group-level
const GroupTTFs = task.group("ttf", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistHintedTTF(gid, tn)));
});
const GroupUnhintedTTFs = task.group("ttf-unhinted", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistUnhintedTTF(gid, tn)));
});
const GroupWoffs = task.group("woff", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistWoff(gid, tn)));
});
const GroupWoff2s = task.group("woff2", async (target, gid) => {
	const [ts] = await target.need(GroupFontsOf(gid));
	await target.need(ts.map(tn => DistWoff2(gid, tn)));
});
const GroupFonts = task.group("fonts", async (target, gid) => {
	await target.need(GroupTTFs(gid), GroupUnhintedTTFs(gid), GroupWoffs(gid), GroupWoff2s(gid));
});

// Charmap (for specimen)
const DistCharMaps = file.make(
	(gid, suffix) => `${DIST}/${gid}/${suffix}.charmap`,
	async (target, { full, dir }, gid, suffix) => {
		const [src] = await target.need(BuildCM(gid, suffix), de`${dir}`);
		await cp(src.full, full);
	}
);

// Webfont CSS
const DistWebFontCSS = file.make(
	gid => `${DIST}/${gid}/webfont.css`,
	async (target, { dir }, gid) => {
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
	}
);

const GroupContents = task.group("contents", async (target, gid) => {
	const [gr] = await target.need(GroupInfo(gid));
	await target.need(
		GroupFonts(gid),
		DistWebFontCSS(gid),
		DistCharMaps(gid, `${gr.prefix}-regular`)
	);
	return gid;
});

// Archive
const ArchiveFile = file.make(
	(gid, version) => `${ARCHIVE_DIR}/${gid}-${version}.zip`,
	async (target, { dir, full }, gid, version) => {
		// Note: this target does NOT depend on the font files.
		const [exportPlans] = await target.need(ExportPlans, de`${dir}`);
		await target.need(GroupContents(exportPlans[gid]));
		await cd(`${DIST}/${exportPlans[gid]}`).run(
			["7z", "a"],
			["-tzip", "-r", "-mx=9"],
			`../../${full}`,
			`./`
		);
	}
);
const GroupArchives = task.group(`archive`, async (target, gid) => {
	const [version] = await target.need(Version);
	await target.need(ArchiveFile(gid, version));
});

// Collection-level
const CollectionFontsOf = task.group("collection-fonts", async (target, cid) => {
	const [{ groups }] = await target.need(CollectPlans);
	await target.need(groups[cid].map(file => DistTTC(cid, file)));
});
const TTCArchiveFile = file.make(
	(cid, version) => `${ARCHIVE_DIR}/ttc-${cid}-${version}.zip`,
	async (target, { dir, full }, cid) => {
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
const CollectionArchive = task.group(`collection-archive`, async (target, cid) => {
	const [version] = await target.need(Version);
	await target.need(TTCArchiveFile(cid, version));
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
const ScreenShot = file.glob(`images/*.png`, async (target, { full }) => {
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
const ScriptsUnder = oracle.make(
	(ext, dir) => `${ext}-scripts-under::${dir}`,
	(target, ext, dir) => FileList({ under: dir, pattern: `**/*.${ext}` })(target)
);
const ScriptFiles = computed.group("script-files", async (target, ext) => {
	const [gen, meta, glyphs, support] = await target.need(
		ScriptsUnder(ext, `gen`),
		ScriptsUnder(ext, `meta`),
		ScriptsUnder(ext, `glyphs`),
		ScriptsUnder(ext, `support`)
	);
	return [...gen, ...meta, ...glyphs, ...support];
});
const JavaScriptFromPtl = computed("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(ScriptFiles("ptl"));
	return ptl.map(x => x.replace(/\.ptl$/g, ".js"));
});

const ScriptJS = file.glob(`{gen|glyphs|support|meta}/**/*.js`, async (target, path) => {
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
	const [js] = await target.need(ScriptFiles("js"));
	await target.need(js.map(ScriptJS));
	await target.need(fu`parameters.toml`, fu`variants.toml`, fu`emptyfont.toml`);
});
