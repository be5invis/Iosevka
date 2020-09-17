"use strict";

const fs = require("fs");
const build = require("verda").create();
const { task, file, oracle, computed, phony } = build.ruleTypes;
const { de, fu, sfu, ofu } = build.rules;
const { run, node, cd, cp, rm, mv, fail, echo } = build.actions;
const { FileList } = build.predefinedFuncs;
const which = require("which");

module.exports = build;

///////////////////////////////////////////////////////////

const path = require("path");
const toml = require("@iarna/toml");

const BUILD = ".build";
const DIST = "dist";
const SNAPSHOT_TMP = ".build/snapshot";
const DIST_SUPER_TTC = "dist/.super-ttc";
const ARCHIVE_DIR = "release-archives";

const OTF2OTC = "otf2otc";
const OTFCC_BUILD = "otfccbuild";
const TTX = "ttx";
const PATEL_C = ["node", "./node_modules/patel/bin/patel-c"];
const TTCIZE = ["node", "./node_modules/otfcc-ttcize/bin/_startup"];
const webfontFormats = [
	["woff2", "woff2"],
	["woff", "woff"],
	["ttf", "truetype"]
];

const SINGLE_GROUP_EXPORT_PREFIX = `ttf`;
const COLLECTION_EXPORT_PREFIX = `pkg`;
const TTC_ONLY_COLLECTION_EXPORT_PREFIX = `ttc`;

const WIDTH_NORMAL = "normal";
const WEIGHT_NORMAL = "regular";
const SLOPE_NORMAL = "upright";
const DEFAULT_SUBFAMILY = "regular";

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

const Version = oracle(`oracle:version`, async () => {
	const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
	return package_json.version;
});

const HasTtx = oracle(`oracle:has-ttx`, async () => {
	try {
		const cmd = await which(TTX);
		return !!cmd;
	} catch (e) {
		return false;
	}
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

const RawPlans = computed(`metadata:raw-plans`, async target => {
	await target.need(sfu(BUILD_PLANS), ofu(PRIVATE_BUILD_PLANS));

	const bp = await tryParseToml(BUILD_PLANS);
	bp.buildOptions = bp.buildOptions || {};

	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		const privateBP = await tryParseToml(PRIVATE_BUILD_PLANS);
		Object.assign(bp.buildPlans, privateBP.buildPlans);
		Object.assign(bp.buildOptions, privateBP.buildOptions || {});
	}
	return bp;
});
const OptimizeWithTtx = computed("metadata:optimize-with-ttx", async target => {
	const [hasTtx, rp] = await target.need(HasTtx, RawPlans);
	return hasTtx && !!rp.buildOptions.optimizeWithTtx;
});
const OptimizeWithFilter = computed("metadata:optimize-with-filter", async target => {
	const [rp] = await target.need(RawPlans);
	return rp.buildOptions.optimizeWithFilter;
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
		validateAndShimBuildPlans(prefix, bp, rp.weights, rp.slopes, rp.widths);

		bp.targets = [];
		const weights = bp.weights,
			slopes = bp.slopes,
			widths = bp.widths;
		const suffixMapping = getSuffixMapping(weights, slopes, widths);
		for (const suffix in suffixMapping) {
			const sfi = suffixMapping[suffix];
			if (weights && !weights[sfi.weight]) continue;
			if (slopes && !slopes[sfi.slope]) continue;
			const fileName = makeFileName(prefix, suffix);
			bp.targets.push(fileName);
			fileNameToBpMap[fileName] = { prefix, suffix };
		}
		returnBuildPlans[prefix] = bp;
	}
	return { fileNameToBpMap, buildPlans: returnBuildPlans };
});

function validateAndShimBuildPlans(prefix, bp, dWeights, dSlopes, dWidths) {
	if (!bp.family) {
		fail(`Build plan for ${prefix} does not have a family name. Exit.`);
	}
	if (!bp.slopes && bp.slants) {
		echo.warn(
			`Build plan for ${prefix} uses legacy "slants" to define slopes. ` +
				`Use "slopes" instead.`
		);
	}

	if (!bp.pre) bp.pre = {};

	if (!bp.pre.design) bp.pre.design = bp.design || [];
	if (!bp.pre.upright) bp.pre.upright = bp.upright || [];
	if (!bp.pre.oblique) bp.pre.oblique = bp.oblique || [];
	if (!bp.pre.italic) bp.pre.italic = bp.italic || [];

	bp.weights = bp.weights || dWeights;
	bp.slopes = bp.slopes || bp.slants || dSlopes;
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

	const sfi = getSuffixMapping(bp.weights, bp.slopes, bp.widths)[fi0.suffix];
	const preHives = [...bp.pre.design, ...bp.pre[sfi.slope]];

	return {
		name: fileName,
		// Hives
		preHives,
		// Shape
		shape: {
			weight: sfi.shapeWeight,
			slope: sfi.slope,
			width: sfi.shapeWidth,
			quasiProportionalDiversity: bp["quasiProportionalDiversity"] || 0
		},
		// Menu
		menu: {
			family: bp.family,
			version: version,
			width: sfi.menuWidth,
			slope: sfi.menuSlope,
			weight: sfi.menuWeight
		},
		// CSS
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

function getSuffixMapping(weights, slopes, widths) {
	const mapping = {};
	for (const w in weights) {
		validateRecommendedWeight(w, weights[w].menu, "Menu");
		validateRecommendedWeight(w, weights[w].css, "CSS");
		for (const s in slopes) {
			for (const wd in widths) {
				const suffix = makeSuffix(w, wd, s, DEFAULT_SUBFAMILY);
				mapping[suffix] = {
					weight: w,
					shapeWeight: nValidate("Shape weight of " + w, weights[w].shape, vlShapeWeight),
					cssWeight: nValidate("CSS weight of " + w, weights[w].css, vlCssWeight),
					menuWeight: nValidate("Menu weight of " + w, weights[w].menu, vlMenuWeight),
					width: wd,
					shapeWidth: nValidate(
						"Shape width of " + wd,
						widths[wd].shape,
						vlShapeWidth,
						fixShapeWidth
					),
					cssStretch: widths[wd].css || wd,
					menuWidth: nValidate("Menu width of " + wd, widths[wd].menu, vlMenuWidth),
					slope: s,
					cssStyle: slopes[s] || s,
					menuSlope: slopes[s] || s
				};
			}
		}
	}
	return mapping;
}

function makeFileName(prefix, suffix) {
	return prefix + "-" + suffix;
}
function makeSuffix(w, wd, s, fallback) {
	return (
		(wd === WIDTH_NORMAL ? "" : wd) +
			(w === WEIGHT_NORMAL ? "" : w) +
			(s === SLOPE_NORMAL ? "" : s) || fallback
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

function nValidate(key, v, f, ft) {
	if (ft) v = ft(v);
	if (typeof v !== "number" || !isFinite(v) || (f && !f(v))) {
		throw new TypeError(`${key} = ${v} is not a valid number.`);
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
const g_widthFixupMemory = new Map();
function fixShapeWidth(x) {
	if (x >= 3 && x <= 9) {
		if (g_widthFixupMemory.has(x)) return g_widthFixupMemory.get(x);
		const xCorrected = Math.round(500 * Math.pow(Math.sqrt(576 / 500), x - 5));
		echo.warn(
			`The build plan is using legacy width grade ${x}. ` +
				`Converting to unit width ${xCorrected}.`
		);
		g_widthFixupMemory.set(x, xCorrected);
		return xCorrected;
	} else {
		return x;
	}
}
function vlShapeWidth(x) {
	return x >= 433 && x <= 665;
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
	return getSuffixMapping(rp.weights, rp.slopes, rp.widths);
});

async function getCollectPlans(target, rawCollectPlans, suffixMapping, config, fnFileName) {
	const glyfTtcComposition = {},
		ttcComposition = {},
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
				const sfi = suffixMapping[suffix];
				const ttcFileName = fnFileName(
					config,
					collectPrefix,
					sfi.weight,
					sfi.width,
					sfi.slope
				);
				const glyfTtcFileName = fnFileName(
					{ ...config, distinguishWidths: true },
					collectPrefix,
					sfi.weight,
					sfi.width,
					sfi.slope
				);

				const ttfTargetName = makeFileName(prefix, suffix);
				if (!ttfFileNameSet.has(ttfTargetName)) continue;

				if (!glyfTtcComposition[glyfTtcFileName]) glyfTtcComposition[glyfTtcFileName] = [];
				glyfTtcComposition[glyfTtcFileName].push({ dir: prefix, file: ttfTargetName });
				if (!ttcComposition[ttcFileName]) ttcComposition[ttcFileName] = [];
				ttcComposition[ttcFileName].push(glyfTtcFileName);

				groupFileList.add(ttcFileName);
			}
		}
		ttcContents[collectPrefix] = [...groupFileList];
		groupDecomposition[collectPrefix] = [...collect.from];
	}
	return { glyfTtcComposition, ttcComposition, ttcContents, groupDecomposition };
}
function fnStandardTtc(collectConfig, prefix, w, wd, s) {
	const ttcSuffix = makeSuffix(
		collectConfig.distinguishWeights ? w : WEIGHT_NORMAL,
		collectConfig.distinguishWidths ? wd : WIDTH_NORMAL,
		collectConfig.distinguishSlope ? s : SLOPE_NORMAL,
		DEFAULT_SUBFAMILY
	);
	return `${prefix}-${ttcSuffix}`;
}

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

const BuildRawTtf = file.make(
	(gr, fn) => `${BUILD}/ttf/${gr}/${fn}.raw.ttf`,
	async (target, output, gr, fn) => {
		const [fi] = await target.need(FontInfoOf(fn), Version);
		const charmap = output.dir + "/" + fn + ".charmap";
		await target.need(Scripts, Parameters, de`${output.dir}`);
		const otdPath = `${output.dir}/${output.name}.otd`;
		await node("font-src/index", { o: otdPath, oCharMap: charmap, ...fi });
		await optimizedOtfcc(otdPath, output.full);
		await rm(otdPath);
	}
);
function optimizedOtfcc(from, to) {
	return run(OTFCC_BUILD, from, ["-o", `${to}`], ["-O3", "--keep-average-char-width", "-q"]);
}

const BuildTTF = file.make(
	(gr, fn) => `${BUILD}/ttf/${gr}/${fn}.ttf`,
	async (target, output, gr, fn) => {
		const [useFilter, useTtx] = await target.need(
			OptimizeWithFilter,
			OptimizeWithTtx,
			de`${output.dir}`
		);
		await target.needed(FontInfoOf(fn), Version, Scripts, Parameters);
		const [rawTtf] = await target.order(BuildRawTtf(gr, fn));
		if (useFilter) {
			const filterArgs = useFilter.split(/ +/g);
			await run(filterArgs, rawTtf.full, output.full);
			await rm(rawTtf.full);
		} else if (useTtx) {
			const ttxPath = `${output.dir}/${output.name}.temp.ttx`;
			await run(TTX, "-q", ["-o", ttxPath], rawTtf.full);
			await rm(rawTtf.full);
			await run(TTX, "-q", ["-o", output.full], ttxPath);
			await rm(ttxPath);
		} else {
			await mv(rawTtf.full, output.full);
		}
	}
);

const BuildCM = file.make(
	(gr, f) => `${BUILD}/ttf/${gr}/${f}.charmap`,
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

const GroupContents = task.group("contents", async (target, gr) => {
	await target.need(GroupFonts(gr), DistWebFontCSS(gr));
	return gr;
});

// TTC
const ExportTtcFile = file.make(
	(gr, f) => `${BUILD}/ttc-collect/${gr}/ttc/${f}.ttc`,
	async (target, out, gr, f) => {
		const [cp] = await target.need(CollectPlans, de`${out.dir}`);
		const parts = Array.from(new Set(cp.ttcComposition[f]));
		const [inputs] = await target.need(parts.map(pt => glyfTtc(gr, pt)));
		await buildCompositeTtc(out, inputs);
	}
);
const glyfTtc = file.make(
	(gr, f) => `${BUILD}/glyf-ttc/${gr}/${f}.ttc`,
	async (target, out, gr, f) => {
		const [cp] = await target.need(CollectPlans);
		const parts = cp.glyfTtcComposition[f];
		await buildGlyfTtc(target, parts, out);
	}
);

async function buildGlyfTtc(target, parts, out) {
	const [useFilter, useTtx] = await target.need(
		OptimizeWithFilter,
		OptimizeWithTtx,
		de`${out.dir}`
	);
	const [ttfInputs] = await target.need(parts.map(part => BuildTTF(part.dir, part.file)));
	const tmpTtc = `${out.dir}/${out.name}.unhinted.ttc`;
	const ttfInputPaths = ttfInputs.map(p => p.full);
	const optimization = useFilter ? ["--filter-loop", useFilter] : useTtx ? ["--ttx-loop"] : [];
	await run(TTCIZE, optimization, ["-o", tmpTtc], ttfInputPaths);
	await run("ttfautohint", tmpTtc, out.full);
	await rm(tmpTtc);
}
async function buildCompositeTtc(out, inputs) {
	await run(
		OTF2OTC,
		["-o", out.full],
		inputs.map(f => f.full)
	);
}

const ExportSuperTtc = file.make(
	gr => `${DIST_SUPER_TTC}/${gr}.ttc`,
	async (target, out, gr) => {
		const [cp] = await target.need(CollectPlans, de(out.dir));
		const parts = Array.from(new Set(cp.ttcContents[gr]));
		const [inputs] = await target.need(parts.map(pt => ExportTtcFile(gr, pt)));
		await buildCompositeTtc(out, inputs);
	}
);
const CollectionArchiveFile = file.make(
	(gr, version) => `${ARCHIVE_DIR}/${COLLECTION_EXPORT_PREFIX}-${gr}-${version}.zip`,
	async (target, out, gr) => {
		const [collectPlans] = await target.need(CollectPlans, de`${out.dir}`);
		const sourceGroups = collectPlans.groupDecomposition[gr];
		const ttcFiles = Array.from(new Set(collectPlans.ttcContents[gr]));
		await target.need(sourceGroups.map(g => GroupContents(g)));
		await target.need(ttcFiles.map(pt => ExportTtcFile(gr, pt)));

		// Packaging
		await rm(out.full);
		for (const g of sourceGroups) {
			await cd(`${DIST}/${g}`).run(
				["7z", "a"],
				["-tzip", "-r", "-mx=9"],
				`../../${out.full}`,
				`./`
			);
		}
		await cd(`${BUILD}/ttc-collect/${gr}`).run(
			["7z", "a"],
			["-tzip", "-r", "-mx=9"],
			`../../../${out.full}`,
			`./`
		);
	}
);
const TtcOnlyCollectionArchiveFile = file.make(
	(gr, version) => `${ARCHIVE_DIR}/${TTC_ONLY_COLLECTION_EXPORT_PREFIX}-${gr}-${version}.zip`,
	async (target, out, gr) => {
		const [collectPlans] = await target.need(CollectPlans, de`${out.dir}`);
		const ttcFiles = Array.from(new Set(collectPlans.ttcContents[gr]));
		await target.need(ttcFiles.map(pt => ExportTtcFile(gr, pt)));

		// Packaging
		await rm(out.full);
		await cd(`${BUILD}/ttc-collect/${gr}/ttc`).run(
			["7z", "a"],
			["-tzip", "-r", "-mx=9"],
			`../../../../${out.full}`,
			`./`
		);
	}
);
const CollectionArchive = task.group(`collection-archive`, async (target, cid) => {
	const [version] = await target.need(Version);
	await target.need(CollectionArchiveFile(cid, version));
});
const TtcOnlyCollectionArchive = task.group(`ttc-only-collection-archive`, async (target, cid) => {
	const [version] = await target.need(Version);
	await target.need(TtcOnlyCollectionArchiveFile(cid, version));
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
	await target.need(Parameters, UtilScripts);
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
	const [sans, slab, aile, etoile, sparkle] = await target.need(
		GroupContents`iosevka`,
		GroupContents`iosevka-slab`,
		GroupContents`iosevka-aile`,
		GroupContents`iosevka-etoile`,
		GroupContents`iosevka-sparkle`,
		SnapShotStatic("index.js"),
		SnapShotStatic("get-snap.js"),
		SnapShotJson,
		SnapShotCSS,
		SnapShotHtml,
		de`images`,
		de(SNAPSHOT_TMP)
	);
	await cp(`${DIST}/${sans}`, `${SNAPSHOT_TMP}/${sans}`);
	await cp(`${DIST}/${slab}`, `${SNAPSHOT_TMP}/${slab}`);
	await cp(`${DIST}/${aile}`, `${SNAPSHOT_TMP}/${aile}`);
	await cp(`${DIST}/${etoile}`, `${SNAPSHOT_TMP}/${etoile}`);
	await cp(`${DIST}/${sparkle}`, `${SNAPSHOT_TMP}/${sparkle}`);
});

const PackageSnapshotConfig = computed(`package-snapshot-image-config`, async target => {
	const [plan] = await target.need(BuildPlans);
	const cfg = [];
	for (const key in plan.buildPlans) {
		const p = plan.buildPlans[key];
		if (!p || !p.snapshotFamily) continue;
		cfg.push({
			el: "#packaging-sampler",
			applyClass: p.snapshotFamily,
			applyFeature: p.snapshotFeature,
			name: key
		});
	}
	return cfg;
});
const SnapShotJson = file(`${SNAPSHOT_TMP}/packaging-tasks.json`, async (target, out) => {
	const [cfg] = await target.need(PackageSnapshotConfig, de(out.dir));
	fs.writeFileSync(out.full, JSON.stringify(cfg, null, "  "));
});
const SnapShotHtml = file(`${SNAPSHOT_TMP}/index.html`, async (target, out) => {
	await target.need(Parameters, UtilScripts, SnapshotTemplates, de(out.dir));
	const [cm] = await target.need(BuildCM("iosevka", "iosevka-regular"));
	const [cmi] = await target.need(BuildCM("iosevka", "iosevka-italic"));
	const [cmo] = await target.need(BuildCM("iosevka", "iosevka-oblique"));
	await run(
		`node`,
		`utility/generate-snapshot-page/index.js`,
		"snapshot-src/templates",
		out.full
	);
	await run(`node`, `utility/amend-readme/index`, cm.full, cmi.full, cmo.full);
});
const SnapShotStatic = file.make(
	x => `${SNAPSHOT_TMP}/${x}`,
	async (target, out) => {
		const [$1] = await target.need(sfu`snapshot-src/${out.base}`, de(out.dir));
		await cp($1.full, `${out.dir}/${$1.base}`);
	}
);
const SnapShotCSS = file(`${SNAPSHOT_TMP}/index.css`, async (target, out) => {
	const [$1] = await target.need(sfu`snapshot-src/index.styl`, de(out.dir));
	await cp($1.full, `${out.dir}/${$1.base}`);
	await run(`npx`, `stylus`, `${out.dir}/${$1.base}`, `-c`);
});
const TakeSampleImages = task(`sample-images:take`, async target => {
	await target.need(SampleImagesPre);
	await cd(SNAPSHOT_TMP).run("npx", "electron", "get-snap.js", "../../images");
});
const ScreenShot = file.glob(`images/*.png`, async (target, { full }) => {
	await target.need(TakeSampleImages);
	await run("optipng", full);
});

const SampleImages = task(`sample-images`, async target => {
	const [cfg] = await target.need(PackageSnapshotConfig, TakeSampleImages);
	await target.need(
		ScreenShot`images/charvars.png`,
		ScreenShot`images/languages.png`,
		ScreenShot`images/ligations.png`,
		ScreenShot`images/matrix.png`,
		ScreenShot`images/preview-all.png`,
		ScreenShot`images/stylesets.png`,
		ScreenShot`images/weights.png`,
		cfg.map(opt => ScreenShot`images/${opt.name}.png`)
	);
});

const AllTtfArchives = task(`all:ttf`, async target => {
	const [exportPlans] = await target.need(ExportPlans);
	await target.need(Object.keys(exportPlans).map(GroupArchive));
});

const CollectionArchives = task(`all:pkg`, async target => {
	const [collectPlans] = await target.need(CollectPlans);
	await target.need(Object.keys(collectPlans.groupDecomposition).map(CollectionArchive));
});

const AllTtcArchives = task(`all:ttc`, async target => {
	const [collectPlans] = await target.need(CollectPlans);
	await target.need(Object.keys(collectPlans.groupDecomposition).map(TtcOnlyCollectionArchive));
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
	await rm(BUILD);
	await rm(DIST);
	await rm(ARCHIVE_DIR);
	build.deleteJournal();
});
phony(`release`, async target => {
	await target.need(AllTtfArchives, CollectionArchives, AllTtcArchives);
	await target.need(SampleImages, Pages, ReleaseNotes);
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

const MARCOS = [fu`font-src/meta/macros.ptl`];
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
const SnapshotTemplateFiles = computed("snapshot-templates", async target => {
	const [js, ejs, md] = await target.need(
		ScriptsUnder("js", "snapshot-src"),
		ScriptsUnder("ejs", "snapshot-src"),
		ScriptsUnder("md", "snapshot-src")
	);
	return [...js, ...ejs, ...md];
});
const ScriptFiles = computed.group("script-files", async (target, ext) => {
	const [ss] = await target.need(ScriptsUnder(ext, `font-src`));
	return ss;
});
const JavaScriptFromPtl = computed("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(ScriptFiles("ptl"));
	return ptl.map(x => x.replace(/\.ptl$/g, ".js"));
});

const ScriptJS = file.glob(`font-src/**/*.js`, async (target, path) => {
	const [jsFromPtl] = await target.need(JavaScriptFromPtl);
	if (jsFromPtl.indexOf(path.full) >= 0) {
		const ptl = path.full.replace(/\.js$/g, ".ptl");
		if (/\/glyphs\//.test(path.full)) {
			await target.need(MARCOS);
		}
		await target.need(fu`${ptl}`);
		await run(PATEL_C, "--strict", ptl, "-o", path.full);
	} else {
		await target.need(fu`${path.full}`);
	}
});
const Scripts = task("scripts", async target => {
	await target.need(Parameters);
	const [jsFromPtl] = await target.need(JavaScriptFromPtl);
	await target.need(jsFromPtl);
	const [js] = await target.need(ScriptFiles("js"));
	await target.need(js.map(ScriptJS));
});
const UtilScripts = task("util-scripts", async target => {
	const [files] = await target.need(UtilScriptFiles);
	await target.need(files.map(fu));
});
const SnapshotTemplates = task("snapshot-templates", async target => {
	const [files] = await target.need(SnapshotTemplateFiles);
	await target.need(files.map(fu));
});
const Parameters = task(`meta:parameters`, async target => {
	await target.need(
		sfu`params/parameters.toml`,
		sfu`params/shape-weight.toml`,
		sfu`params/shape-width.toml`,
		ofu`params/private-parameters.toml`,
		sfu`params/variants.toml`,
		sfu`params/ligation-set.toml`
	);
});
