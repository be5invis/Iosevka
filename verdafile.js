"use strict";

const fs = require("fs");
const build = require("verda").create();
const { task, file, oracle, computed, phony } = build.ruleTypes;
const { de, fu, sfu, ofu } = build.rules;
const { run, node, cd, cp, rm, fail, echo } = build.actions;
const { FileList } = build.predefinedFuncs;
module.exports = build;

///////////////////////////////////////////////////////////

const path = require("path");
const toml = require("toml");

const BUILD = "build";
const DIST = "dist";
const ARCHIVE_DIR = "release-archives";

const OTF2OTC = "otf2otc";
const PATEL_C = ["node", "./node_modules/patel/bin/patel-c"];
const TTCIZE = ["node", "./node_modules/otfcc-ttcize/bin/_startup"];
const webfontFormats = [
	["woff2", "woff2"],
	["woff", "woff"],
	["ttf", "truetype"]
];

const SINGLE_GROUP_EXPORT_PREFIX = `ttf`;
const COLLECTION_EXPORT_PREFIX = `pkg`;

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

const Version = oracle(`metadata:version`, async () => {
	const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
	return package_json.version;
});

async function tryParseToml(str) {
	try {
		return JSON.parse(JSON.stringify(toml.parse(fs.readFileSync(str, "utf-8"))));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\n` +
				`Please validate whether there's syntax error.\n` +
				`${e}`
		);
	}
}

const RawPlans = oracle(`metadata:raw-plans`, async target => {
	await target.need(sfu(BUILD_PLANS), ofu(PRIVATE_BUILD_PLANS));

	const bp = await tryParseToml(BUILD_PLANS);
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		const privateBP = await tryParseToml(PRIVATE_BUILD_PLANS);
		Object.assign(bp.buildPlans, privateBP.buildPlans);
	}
	return bp;
});

const RawCollectPlans = computed("metadata:raw-collect-plans", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.collectPlans;
});
const CollectConfig = computed("metadata:collect-config", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.collectConfig;
});
const ExportPlans = computed("metadata:export-plans", async target => {
	const [rp] = await target.need(RawCollectPlans);
	let result = {};
	for (const collection in rp) {
		for (const s of rp[collection].from) result[s] = s;
	}
	return result;
});

const BuildPlans = computed("metadata:build-plans", async target => {
	const [rp] = await target.need(RawPlans);
	const rawBuildPlans = rp.buildPlans;

	const returnBuildPlans = {};
	const fileNameToBpMap = {};
	for (const prefix in rawBuildPlans) {
		const bp = { ...rawBuildPlans[prefix] };
		shimBuildPlans(bp, rp.weights, rp.slants, rp.widths);

		bp.targets = [];
		const suffixMapping = getSuffixMapping(bp.weights, bp.slants, bp.widths);
		for (const suffix in suffixMapping) {
			const sfi = suffixMapping[suffix];
			if (bp.weights && !bp.weights[sfi.weight]) continue;
			if (bp.slants && !bp.slants[sfi.slant]) continue;
			const fileName = [prefix, suffix].join("-");
			bp.targets.push(fileName);
			fileNameToBpMap[fileName] = { prefix, suffix };
		}
		returnBuildPlans[prefix] = bp;
	}
	return { fileNameToBpMap, buildPlans: returnBuildPlans };
});

function shimBuildPlans(bp, dWeights, dSlants, dWidths) {
	if (!bp.pre) bp.pre = {};
	if (!bp.post) bp.post = {};

	if (!bp.pre.design) bp.pre.design = bp.design || [];
	if (!bp.pre.upright) bp.pre.upright = bp.upright || [];
	if (!bp.pre.oblique) bp.pre.oblique = bp.oblique || [];
	if (!bp.pre.italic) bp.pre.italic = bp.italic || [];

	if (!bp.post.design) bp.post.design = [];
	if (!bp.post.upright) bp.post.upright = [];
	if (!bp.post.oblique) bp.post.oblique = [];
	if (!bp.post.italic) bp.post.italic = [];

	bp.weights = bp.weights || dWeights;
	bp.slants = bp.slants || dSlants;
	bp.widths = bp.widths || dWidths;
}

const BuildPlanOf = computed.group("metadata:build-plan-of", async (target, gid) => {
	const [{ buildPlans }] = await target.need(BuildPlans);
	const plan = buildPlans[gid];
	if (!plan) fail(`Build plan for '${gid}' not found.` + whyBuildPlanIsnNotThere(gid));
	return plan;
});

const GroupFontsOf = computed.group("metadata:group-fonts-of", async (target, gid) => {
	const [plan] = await target.need(BuildPlanOf(gid));
	return plan.targets;
});

const FontInfoOf = computed.group("metadata:font-info-of", async (target, fileName) => {
	const [{ fileNameToBpMap, buildPlans }] = await target.need(BuildPlans);
	const [version] = await target.need(Version);

	const fi0 = fileNameToBpMap[fileName];
	if (!fi0) fail(`Build plan for '${fileName}' not found.` + whyBuildPlanIsnNotThere(fileName));

	const bp = buildPlans[fi0.prefix];
	if (!bp) fail(`Build plan for '${fileName}' not found.` + whyBuildPlanIsnNotThere(fileName));

	const sfi = getSuffixMapping(bp.weights, bp.slants, bp.widths)[fi0.suffix];
	const preHives = [...bp.pre.design, ...bp.pre[sfi.slant]];
	const postHives = [...bp.post.design, ...bp.post[sfi.slant]];
	return {
		name: fileName,
		hives: ["iosevka", ...preHives, ...sfi.hives, ...postHives],
		shape: {
			weight: sfi.shapeWeight,
			width: sfi.shapeWidth
		},
		menu: {
			family: bp.family,
			version: version,
			width: sfi.menuWidth,
			slant: sfi.menuSlant,
			weight: sfi.menuWeight
		},
		css: {
			weight: sfi.cssWeight,
			stretch: sfi.cssStretch,
			style: sfi.cssStyle
		},
		hintParams: bp.hintParams || [],
		compatibilityLigatures: bp["compatibility-ligatures"] || null,
		metricOverride: bp["metric-override"] || null,
		excludedCharRanges: bp["exclude-chars"] ? bp["exclude-chars"].ranges || null : null
	};
});

function getSuffixMapping(weights, slants, widths) {
	const mapping = {};
	for (const w in weights) {
		validateRecommendedWeight(w, weights[w].menu, "Menu");
		validateRecommendedWeight(w, weights[w].css, "CSS");
		for (const s in slants) {
			for (const wd in widths) {
				const suffix = makeSuffix(w, wd, s, "regular");
				mapping[suffix] = {
					hives: [`shapeWeight`, `s-${s}`, `wd-${widths[wd].shape}`],
					weight: w,
					shapeWeight: nValidate("Shape weight of " + w, weights[w].shape, vlShapeWeight),
					cssWeight: nValidate("CSS weight of " + w, weights[w].css, vlCssWeight),
					menuWeight: nValidate("Menu weight of " + w, weights[w].menu, vlMenuWeight),
					width: wd,
					shapeWidth: nValidate("Shape width of " + wd, widths[wd].shape, vlShapeWidth),
					cssStretch: widths[wd].css || wd,
					menuWidth: nValidate("Menu width of " + wd, widths[wd].menu, vlMenuWidth),
					slant: s,
					cssStyle: slants[s] || s,
					menuSlant: slants[s] || s
				};
			}
		}
	}
	return mapping;
}

function makeSuffix(w, wd, s, fallback) {
	return (
		(wd === "normal" ? "" : wd) + (w === "regular" ? "" : w) + (s === "upright" ? "" : s) ||
		fallback
	);
}

function validateRecommendedWeight(w, value, label) {
	if (recommendedMenuWeights[w] && recommendedMenuWeights[w] !== value) {
		echo.warn(
			`${label} weight settings of ${w} ( = ${value}) doesn't match ` +
				`the recommended value ( = ${recommendedMenuWeights[w]}).`
		);
	}
}

function nValidate(key, v, f) {
	if (typeof v !== "number" || !isFinite(v) || (f && !f(v))) {
		throw new TypeError(`${key} = "${v}" is not a valid number.`);
	}
	return v;
}
function vlShapeWeight(x) {
	return x >= 100 && x <= 900;
}
function vlCssWeight(x) {
	return x > 0 && x < 1000;
}
function vlMenuWeight(x) {
	return vlCssWeight(x);
}
function vlShapeWidth(x) {
	return x === 3 || x === 5 || x === 7;
}
function vlMenuWidth(x) {
	return x >= 1 && x <= 9 && x % 1 === 0;
}
const recommendedMenuWeights = {
	thin: 100,
	extralight: 200,
	light: 300,
	regular: 400,
	book: 450,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	heavy: 900
};

function whyBuildPlanIsnNotThere(gid) {
	if (!fs.existsSync(PRIVATE_BUILD_PLANS))
		return "\n        -- Possible reason: Config file 'private-build-plans.toml' does not exist.";
	return "";
}

const CollectPlans = computed(`metadata:collect-plans`, async target => {
	const [rawCollectPlans, suffixMapping, collectConfig] = await target.need(
		RawCollectPlans,
		StandardSuffixes,
		CollectConfig
	);
	return await getCollectPlans(
		target,
		rawCollectPlans,
		suffixMapping,
		collectConfig,
		fnStandardTtc
	);
});

const StandardSuffixes = computed(`metadata:standard-suffixes`, async target => {
	const [rp] = await target.need(RawPlans);
	return getSuffixMapping(rp.weights, rp.slants, rp.widths);
});

async function getCollectPlans(target, rawCollectPlans, suffixMapping, config, fnFileName) {
	const ttcComposition = {},
		ttcContents = {},
		groupDecomposition = {};
	for (const collectPrefix in rawCollectPlans) {
		const groupFileList = new Set();
		const collect = rawCollectPlans[collectPrefix];
		if (!collect || !collect.from || !collect.from.length) continue;

		for (const prefix of collect.from) {
			const [gri] = await target.need(BuildPlanOf(prefix));
			const ttfFileNameSet = new Set(gri.targets);
			for (const suffix in suffixMapping) {
				const gr = suffixMapping[suffix];
				const ttcFileName = fnFileName(
					config,
					collectPrefix,
					gr.weight,
					gr.width,
					gr.slant
				);
				const ttfTargetName = `${prefix}-${suffix}`;

				if (!ttfFileNameSet.has(ttfTargetName)) continue;
				if (!ttcComposition[ttcFileName]) ttcComposition[ttcFileName] = [];
				ttcComposition[ttcFileName].push({ dir: prefix, file: ttfTargetName });
				groupFileList.add(ttcFileName);
			}
		}
		ttcContents[collectPrefix] = [...groupFileList];
		groupDecomposition[collectPrefix] = [...collect.from];
	}
	return { ttcComposition, ttcContents, groupDecomposition };
}
function fnStandardTtc(collectConfig, prefix, w, wd, s) {
	const ttcSuffix = makeSuffix(
		collectConfig.distinguishWeights ? w : "regular",
		collectConfig.distinguishWidths ? wd : "normal",
		collectConfig.distinguishSlant ? s : "upright",
		"regular"
	);
	return `${prefix}-${ttcSuffix}`;
}

const CollectionPartsOf = computed.group("metadata:collection-parts-of", async (target, id) => {
	const [{ ttcComposition }] = await target.need(CollectPlans);
	return ttcComposition[id];
});

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

const BuildOTD = file.make(
	(gr, fn) => `${BUILD}/${gr}/${fn}.otd`,
	async (target, output, gr, fn) => {
		const [fi] = await target.need(FontInfoOf(fn), Version);
		const charmap = output.dir + "/" + output.name + ".charmap";
		await target.need(Scripts, fu`parameters.toml`, de`${output.dir}`);
		await node("gen/index", { o: output.full, oCharMap: charmap, ...fi });
	}
);

const BuildTTF = file.make(
	(gr, fn) => `${BUILD}/${gr}/${fn}.ttf`,
	async (target, output, gr, fn) => {
		const [otd] = await target.need(BuildOTD(gr, fn), de`${output.dir}`);
		await run(
			"otfccbuild",
			otd.full,
			["-o", `${output.full}`],
			["-O3", "--keep-average-char-width", "-q"]
		);
	}
);

const BuildCM = file.make(
	(gr, f) => `${BUILD}/${gr}/${f}.charmap`,
	async (target, output, gr, f) => {
		await target.need(BuildOTD(gr, f));
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
		const [{ hintParams }] = await target.need(FontInfoOf(f));
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

// Webfont CSS
const DistWebFontCSS = file.make(
	gid => `${DIST}/${gid}/${gid}.css`,
	async (target, out, gid) => {
		// Note: this target does NOT depend on the font files.
		const [gr, ts] = await target.need(BuildPlanOf(gid), GroupFontsOf(gid), de(out.dir));
		const hs = await target.need(...ts.map(FontInfoOf));
		await node("utility/make-webfont-css.js", out.full, gr.family, hs, webfontFormats);
	}
);

const GroupContents = task.group("contents", async (target, gid) => {
	await target.need(GroupFonts(gid), DistWebFontCSS(gid));
	return gid;
});

// TTC
const ExportTtcSet = task.group("collection-fonts", async (target, cid) => {
	const [{ ttcContents }] = await target.need(CollectPlans);
	const [files] = await target.need(ttcContents[cid].map(file => ExportTtc(cid, file)));
	return files;
});
const ExportSuperTtc = file.make(
	f => `${DIST}/super-ttc/${f}.ttc`,
	async (target, out, f) => {
		await target.need(de(out.dir));
		const [inputs] = await target.need(ExportTtcSet(f));
		await run(
			OTF2OTC,
			["-o", out.full],
			inputs.map(f => f.full)
		);
	}
);
const ExportTtc = file.make(
	(gr, f) => `${DIST}/export/${gr}/ttc/${f}.ttc`,
	async (target, out, gr, f) => {
		const [parts] = await target.need(CollectionPartsOf(f));
		await buildTtcForFile(target, parts, out);
	}
);
async function buildTtcForFile(target, parts, out) {
	await target.need(de`${out.dir}`);
	const [ttfs] = await target.need(parts.map(part => BuildTTF(part.dir, part.file)));
	const tmpTtc = `${out.dir}/${out.name}.unhinted.ttc`;
	const ttfInputPaths = ttfs.map(p => p.full);
	await run(TTCIZE, ttfInputPaths, ["-o", tmpTtc]);
	await run("ttfautohint", tmpTtc, out.full);
	await rm(tmpTtc);
}

// Collection Export
const CollectionExport = task.group("collection-export", async (target, gr) => {
	// Note: this target does NOT depend on the font files.
	const [collectPlans] = await target.need(CollectPlans);
	const sourceGroups = collectPlans.groupDecomposition[gr];
	await target.need(
		de`${DIST}/export/${gr}`,
		sourceGroups.map(g => GroupContents(g)),
		ExportTtcSet(gr)
	);
	for (const g of sourceGroups) await cp(`${DIST}/${g}`, `${DIST}/export/${gr}`);
});
const CollectionArchiveFile = file.make(
	(gr, version) => `${ARCHIVE_DIR}/${COLLECTION_EXPORT_PREFIX}-${gr}-${version}.zip`,
	async (target, out, gr) => {
		await target.need(de`${out.dir}`, CollectionExport(gr));
		await rm(out.full);
		await cd(`${DIST}/export/${gr}`).run(
			["7z", "a"],
			["-tzip", "-r", "-mx=9"],
			`../../../${out.full}`,
			`./`
		);
	}
);
const CollectionArchive = task.group(`collection-archive`, async (target, cid) => {
	const [version] = await target.need(Version);
	await target.need(CollectionArchiveFile(cid, version));
});

// Single-group export
const GroupArchiveFile = file.make(
	(gid, version) => `${ARCHIVE_DIR}/${SINGLE_GROUP_EXPORT_PREFIX}-${gid}-${version}.zip`,
	async (target, { dir, full }, gid, version) => {
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
const GroupArchive = task.group(`archive`, async (target, gid) => {
	const [version] = await target.need(Version);
	await target.need(GroupArchiveFile(gid, version));
});

///////////////////////////////////////////////////////////
//////                  Root Tasks                   //////
///////////////////////////////////////////////////////////

const PagesDir = oracle(`pages-dir-path`, async target => {
	const pagesDir = path.resolve(__dirname, "../Iosevka-Pages");
	if (!fs.existsSync(pagesDir)) {
		return "";
	} else {
		return pagesDir;
	}
});

const PagesDataExport = task(`pages:data-export`, async target => {
	target.is.volatile();
	const [version, pagesDir] = await target.need(Version, PagesDir);
	if (!pagesDir) return;
	await target.need(sfu`variants.toml`, sfu`ligation-set.toml`, UtilScripts);
	const [cm] = await target.need(BuildCM("iosevka", "iosevka-regular"));
	const [cmi] = await target.need(BuildCM("iosevka", "iosevka-italic"));
	const [cmo] = await target.need(BuildCM("iosevka", "iosevka-oblique"));
	await run(
		`node`,
		`utility/export-data/index`,
		cm.full,
		cmi.full,
		cmo.full,
		path.resolve(pagesDir, "shared/data-import/iosevka.json")
	);
});

const PagesFontExport = task(`pages:font-export`, async target => {
	const [pagesDir] = await target.need(PagesDir);
	if (!pagesDir) return;
	const dirs = await target.need(
		GroupContents`iosevka`,
		GroupContents`iosevka-slab`,
		GroupContents`iosevka-aile`,
		GroupContents`iosevka-etoile`,
		GroupContents`iosevka-sparkle`
	);
	for (const dir of dirs) {
		await cp(`${DIST}/${dir}`, path.resolve(pagesDir, "shared/font-import", dir));
	}
});

const PagesFastFontExport = task(`pages:fast-font-export`, async target => {
	const [pagesDir] = await target.need(PagesDir);
	if (!pagesDir) return;
	const dirs = await target.need(GroupContents`iosevka`);
	for (const dir of dirs) {
		await cp(`${DIST}/${dir}`, path.resolve(pagesDir, "shared/font-import", dir));
	}
});

const Pages = task(`pages`, async target => {
	await target.need(PagesDataExport, PagesFontExport);
});
const PagesFast = task(`pages-fast`, async target => {
	await target.need(PagesDataExport, PagesFastFontExport);
});

const SampleImagesPre = task(`sample-images:pre`, async target => {
	const [sans, slab] = await target.need(
		GroupContents`iosevka`,
		GroupContents`iosevka-slab`,
		SnapShotCSS,
		SnapShotHtml,
		de`images`
	);
	await cp(`${DIST}/${sans}`, `snapshot/${sans}`);
	await cp(`${DIST}/${slab}`, `snapshot/${slab}`);
});
const SnapShotHtml = file(`snapshot/index.html`, async target => {
	await target.need(sfu`variants.toml`, sfu`ligation-set.toml`, UtilScripts);
	const [cm] = await target.need(BuildCM("iosevka", "iosevka-regular"));
	const [cmi] = await target.need(BuildCM("iosevka", "iosevka-italic"));
	const [cmo] = await target.need(BuildCM("iosevka", "iosevka-oblique"));
	await run(`node`, `utility/generate-snapshot-page/index.js`);
	await run(`node`, `utility/amend-readme/index`, cm.full, cmi.full, cmo.full);
});
const SnapShotCSS = file(`snapshot/index.css`, async target => {
	await target.need(sfu`snapshot/index.styl`);
	await run(`npx`, `stylus`, `snapshot/index.styl`, `-c`);
});
const TakeSampleImages = task(`sample-images:take`, async target => {
	await target.need(SampleImagesPre);
	await cd(`snapshot`).run("npx", "electron", "get-snap.js", "../images");
});
const ScreenShot = file.glob(`images/*.png`, async (target, { full }) => {
	await target.need(TakeSampleImages);
	await run("optipng", full);
});

const SampleImages = task(`sample-images`, async target => {
	await target.need(TakeSampleImages);
	await target.need(
		ScreenShot`images/charvars.png`,
		ScreenShot`images/languages.png`,
		ScreenShot`images/ligations.png`,
		ScreenShot`images/matrix.png`,
		ScreenShot`images/preview-all.png`,
		ScreenShot`images/stylesets.png`,
		ScreenShot`images/weights.png`
	);
});

const AllTtfArchives = task(`all:ttf`, async target => {
	const [exportPlans] = await target.need(ExportPlans);
	await target.need(Object.keys(exportPlans).map(GroupArchive));
});

const AllTtcArchives = task(`all:ttc`, async target => {
	const [collectPlans] = await target.need(CollectPlans);
	await target.need(Object.keys(collectPlans.groupDecomposition).map(CollectionArchive));
});

const SpecificSuperTtc = task.group(`super-ttc`, async (target, gr) => {
	await target.need(ExportSuperTtc(gr));
});

const ChangeFileList = oracle.make(
	() => `release:change-file-list`,
	target => FileList({ under: "changes", pattern: "*.md" })(target)
);
const ReleaseNotesFile = file.make(
	version => `${ARCHIVE_DIR}/release-notes-${version}.md`,
	async (t, out, version) => {
		await t.need(UtilScripts, de(ARCHIVE_DIR));
		const [changeFiles] = await t.need(ChangeFileList());
		await t.need(changeFiles.map(fu));
		await run("node", "utility/generate-release-note/index", version, out.full);
	}
);
const ReleaseNotes = task(`release:release-note`, async t => {
	const [version] = await t.need(Version);
	await t.need(ReleaseNotesFile(version));
});

phony(`clean`, async () => {
	await rm(`build`);
	await rm(`dist`);
	await rm(`release-archives`);
	build.deleteJournal();
});
phony(`release`, async target => {
	await target.need(AllTtfArchives, AllTtcArchives);
	await target.need(SampleImages, Pages, ReleaseNotes);
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

const MARCOS = [fu`meta/macros.ptl`];
const ScriptsUnder = oracle.make(
	(ext, dir) => `${ext}-scripts-under::${dir}`,
	(target, ext, dir) => FileList({ under: dir, pattern: `**/*.${ext}` })(target)
);
const UtilScriptFiles = computed("util-script-files", async target => {
	const [js, ejs, md] = await target.need(
		ScriptsUnder("js", "utility"),
		ScriptsUnder("ejs", "utility"),
		ScriptsUnder("md", "utility")
	);
	return [...js, ...ejs, ...md];
});
const ScriptFiles = computed.group("script-files", async (target, ext) => {
	const ss = await target.need(
		ScriptsUnder(ext, `gen`),
		ScriptsUnder(ext, `glyphs`),
		ScriptsUnder(ext, `meta`),
		ScriptsUnder(ext, `otl`),
		ScriptsUnder(ext, `support`)
	);
	return ss.reduce((a, b) => [...a, ...b]);
});
const JavaScriptFromPtl = computed("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(ScriptFiles("ptl"));
	return ptl.map(x => x.replace(/\.ptl$/g, ".js"));
});

const ScriptJS = file.glob(`{gen|glyphs|meta|otl|support}/**/*.js`, async (target, path) => {
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
	await target.need(sfu`parameters.toml`, sfu`variants.toml`, sfu`ligation-set.toml`);
	const [jsFromPtl] = await target.need(JavaScriptFromPtl);
	await target.need(jsFromPtl);
	const [js] = await target.need(ScriptFiles("js"));
	await target.need(js.map(ScriptJS));
});
const UtilScripts = task("util-scripts", async target => {
	const [files] = await target.need(UtilScriptFiles);
	await target.need(files.map(f => fu`${f}`));
});
