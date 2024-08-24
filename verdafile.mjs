import * as FS from "fs";
import { randomUUID } from "node:crypto";
import * as Path from "path";

import * as toml from "@iarna/toml";
import deepEqual from "deep-equal";
import semver from "semver";
import * as uuid from "uuid";
import * as Verda from "verda";
import which from "which";

///////////////////////////////////////////////////////////

export const build = Verda.create();
const { task, file, oracle, computed } = build.ruleTypes;
const { de, fu, sfu, ofu } = build.rules;
const { run, node, cd, cp, rm, mv, fail, echo, silently, absolutelySilently } = build.actions;
const { FileList } = build.predefinedFuncs;

///////////////////////////////////////////////////////////

const BUILD = ".build";
const DIST = "dist";
const IMAGES = "images";

const PACKAGES = "packages";
const TOOLS = "tools";

const IMAGE_TASKS = ".build/image-tasks";
const GLYF_TTC = ".build/glyf-ttc";

const SHARED_CACHE = `${BUILD}/cache`;
const DIST_TTC = "dist/.ttc";
const DIST_SUPER_TTC = "dist/.super-ttc";
const ARCHIVE_DIR = "release-archives";

const PATEL_C = ["node", "node_modules/patel/bin/patel-c"];
const MAKE_TTC = ["node", "node_modules/otb-ttc-bundle/bin/otb-ttc-bundle"];
const SEVEN_ZIP = process.env.SEVEN_ZIP_PATH || "7z";
const TTFAUTOHINT = process.env.TTFAUTOHINT_PATH || "ttfautohint";

const defaultWebFontFormats = ["WOFF2", "TTF"];
const webfontFormatsFast = ["TTF"];
const webfontFormatsPages = ["WOFF2"];

const WIDTH_NORMAL = "Normal";
const WEIGHT_NORMAL = "Regular";
const SLOPE_NORMAL = "Upright";
const DEFAULT_SUBFAMILY = "Regular";

const BUILD_PLANS = "build-plans.toml";
const PRIVATE_BUILD_PLANS = "private-build-plans.toml";

// Save journal to build/
build.setJournal(`${BUILD}/.verda-build-journal`);
// Enable self-tracking
build.setSelfTracking();

///////////////////////////////////////////////////////////
//////                 Environment                   //////
///////////////////////////////////////////////////////////

const Version = computed(`env::version`, async target => {
	const [pjf] = await target.need(sfu`package.json`);
	const pj = JSON.parse(await FS.promises.readFile(pjf.full, "utf-8"));
	return pj.version;
});

const CheckTtfAutoHintExists = oracle(`oracle:check-ttfautohint-exists`, async target => {
	try {
		return await which(TTFAUTOHINT);
	} catch (e) {
		fail("External dependency <ttfautohint>, needed for building hinted font, does not exist.");
	}
});

const Dependencies = computed("env::dependencies", async target => {
	const [packageJsons] = await target.need(AllPackageJsons);
	const subGoals = [];
	for (const pjf of packageJsons) {
		subGoals.push(DependenciesFor(pjf));
	}
	return await target.need(subGoals);
});

const AllPackageJsons = computed("env::all-package-jsons", async target => {
	const [ppj, tpj] = await target.need(PackagesPackagesJsons, ToolPackagesJsons);
	return [`package.json`, ...ppj, ...tpj];
});
const PackagesPackagesJsons = computed("env::packages-packages-jsons", target =>
	FileList({ under: "packages", pattern: "*/package.json" })(target),
);
const ToolPackagesJsons = computed("env::tool-packages-jsons", target =>
	FileList({ under: "tools", pattern: "*/package.json" })(target),
);

const DependenciesFor = computed.make(
	pakcageJsonPath => `env::dependencies-for::${pakcageJsonPath}`,
	async (target, pakcageJsonPath) => {
		const [pjf] = await target.need(sfu(pakcageJsonPath));
		const pj = JSON.parse(await FS.promises.readFile(pjf.full, "utf-8"));
		let subGoals = [];
		for (const pkgName in pj.dependencies) {
			if (/^@iosevka/.test(pkgName)) continue;
			subGoals.push(InstalledVersion(pkgName, pj.dependencies[pkgName]));
		}
		const [actual] = await target.need(subGoals);
		return actual;
	},
);

const InstalledVersion = computed.make(
	(pkg, required) => `env::installed-version::${pkg}::${required}`,
	async (target, pkg, required) => {
		const [pj] = await target.need(sfu(`node_modules/${pkg}/package.json`));
		const depPkg = JSON.parse(await FS.promises.readFile(pj.full));
		if (!semver.satisfies(depPkg.version, required)) {
			fail(
				`Package version for ${pkg} is outdated:`,
				`Required ${required}, Installed ${depPkg.version}`,
			);
		}
		return { name: pkg, actual: depPkg.version, required };
	},
);

///////////////////////////////////////////////////////////
//////                    Plans                      //////
///////////////////////////////////////////////////////////

const RawPlans = computed(`metadata:raw-plans`, async target => {
	await target.need(sfu(BUILD_PLANS), ofu(PRIVATE_BUILD_PLANS), Version);

	const bp = await tryParseToml(BUILD_PLANS);
	bp.buildOptions = bp.buildOptions || {};

	if (FS.existsSync(PRIVATE_BUILD_PLANS)) {
		const privateBP = await tryParseToml(PRIVATE_BUILD_PLANS);
		Object.assign(bp.buildPlans, privateBP.buildPlans || {});
		Object.assign(bp.collectPlans, privateBP.collectPlans || {});
		Object.assign(bp.buildOptions, privateBP.buildOptions || {});
	}
	return bp;
});
async function tryParseToml(str) {
	try {
		return JSON.parse(JSON.stringify(toml.parse(FS.readFileSync(str, "utf-8"))));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\n` +
				`Please validate whether there's syntax error.\n` +
				`${e}`,
		);
	}
}

const BuildPlans = computed("metadata:build-plans", async target => {
	const [rp] = await target.need(RawPlans);
	const rawBuildPlans = rp.buildPlans;

	// Initialize build plans
	const returnBuildPlans = {};
	for (const prefix in rawBuildPlans) {
		const bp = { ...rawBuildPlans[prefix] };
		validateBuildPlan(prefix, bp);
		bp.webfontFormats = bp.webfontFormats || defaultWebFontFormats;
		bp.targets = [];
		returnBuildPlans[prefix] = bp;
	}

	// Resolve WWS, including inheritance and default config
	for (const prefix in rawBuildPlans) {
		resolveWws(prefix, returnBuildPlans, rp);
	}

	// Create file name to BP mapping
	const fileNameToBpMap = {};
	for (const prefix in rawBuildPlans) {
		const bp = returnBuildPlans[prefix];
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
	linkSpacingDerivableBuildPlans(returnBuildPlans);
	return { fileNameToBpMap, buildPlans: returnBuildPlans };
});

function linkSpacingDerivableBuildPlans(bps) {
	for (const pfxTo in bps) {
		const bpTo = bps[pfxTo];
		if (blockSpacingDerivationTo(bpTo)) continue;
		if (!isDeriveToSpacing(bpTo.spacing)) continue;
		for (const pfxFrom in bps) {
			const bpFrom = bps[pfxFrom];
			if (!isDeriveFromSpacing(bpFrom.spacing)) continue;
			if (!spacingDeriveCompatible(pfxTo, bpTo, pfxFrom, bpFrom)) continue;
			bpTo.spacingDeriveFrom = pfxFrom;
		}
	}
}
function blockSpacingDerivationTo(bp) {
	return !!bp.compatibilityLigatures;
}
function isDeriveToSpacing(spacing) {
	return spacing === "term" || spacing === "fontconfig-mono" || spacing === "fixed";
}
function isDeriveFromSpacing(spacing) {
	return !spacing || spacing === "normal";
}
function spacingDeriveCompatible(pfxTo, bpTo, pfxFrom, bpFrom) {
	// If the two build plans are the same, then they are compatible.
	return deepEqual(rectifyPlanForSpacingDerive(bpTo), rectifyPlanForSpacingDerive(bpFrom));
}
function rectifyPlanForSpacingDerive(p) {
	return {
		...p,
		family: "#Validation",
		desc: "#Validation",
		spacing: "#Validation",
		buildCharMap: false,
		snapshotFamily: null,
		snapshotFeature: null,
		targets: null,
	};
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

const VariantCompositesFromBuildPlan = computed(
	`metadata:variant-composites-from-build-plan`,
	async target => {
		const [{ buildPlans }] = await target.need(BuildPlans);
		let data = {};
		for (const bpn in buildPlans) {
			let bp = buildPlans[bpn];
			if (bp.variants) {
				data[bpn] = bp.variants;
			}
		}
		return data;
	},
);

const LigtionCompositesFromBuildPlan = computed(
	`metadata:ligation-composites-from-build-plan`,
	async target => {
		const [{ buildPlans }] = await target.need(BuildPlans);
		let data = {};
		for (const bpn in buildPlans) {
			let bp = buildPlans[bpn];
			if (bp.ligations) {
				data[`buildPlans.${bpn}`] = bp.ligations;
			}
			if (bp.customLigationTags) {
				for (const [tag, config] of Object.entries(bp.customLigationTags)) {
					data[`buildPlans.${bpn}.${tag}`] = config;
				}
			}
		}
		return data;
	},
);

// eslint-disable-next-line complexity
const FontInfoOf = computed.group("metadata:font-info-of", async (target, fileName) => {
	const [{ fileNameToBpMap, buildPlans }] = await target.need(BuildPlans);
	const [version] = await target.need(Version);

	const fi0 = fileNameToBpMap[fileName];
	if (!fi0) fail(`Build plan for '${fileName}' not found.` + whyBuildPlanIsnNotThere(fileName));

	const bp = buildPlans[fi0.prefix];
	if (!bp) fail(`Build plan for '${fileName}' not found.` + whyBuildPlanIsnNotThere(fileName));

	const sfm = getSuffixMapping(bp.weights, bp.slopes, bp.widths);
	const sfi = sfm[fi0.suffix];
	const hintReferenceSuffix = fetchHintReferenceSuffix(sfm);

	let spacingDerive = null;
	if (bp.spacingDeriveFrom) {
		spacingDerive = {
			manner: bp.spacing,
			prefix: bp.spacingDeriveFrom,
			fileName: makeFileName(bp.spacingDeriveFrom, fi0.suffix),
		};
	}

	const [variantCompositesFromBuildPlan] = await target.need(VariantCompositesFromBuildPlan);
	const [ligtionCompositesFromBuildPlan] = await target.need(LigtionCompositesFromBuildPlan);

	return {
		name: fileName,
		variants: bp.variants || null,
		derivingVariants: bp.derivingVariants,
		buildCharMap: bp.buildCharMap,
		featureControl: {
			noCvSs: bp.noCvSs || false,
			noLigation: bp.noLigation || false,
			exportGlyphNames: bp.exportGlyphNames || false,
			buildTextureFeature: bp.buildTextureFeature || false,
		},
		// Ligations
		ligations: bp.ligations || null,
		customLigationTags: bp.customLigationTags || null,
		// Shape
		shape: {
			serifs: bp.serifs || "sans",
			spacing: bp.spacing || "normal",
			weight: sfi.shapeWeight,
			width: sfi.shapeWidth,
			slope: sfi.shapeSlope,
			slopeAngle: sfi.shapeSlopeAngle,
		},
		// Naming
		namingOverride: bp.namingOverride || null,
		// Menu
		menu: {
			family: bp.family,
			version: version,
			width: sfi.menuWidth,
			slope: sfi.menuSlope,
			weight: sfi.menuWeight,
		},
		// CSS
		css: {
			weight: sfi.cssWeight,
			stretch: sfi.cssStretch,
			style: sfi.cssStyle,
		},
		// Hinting
		hintParams: bp.hintParams || [],
		hintReference:
			!bp.metricOverride && hintReferenceSuffix !== fi0.suffix
				? makeFileName(fi0.prefix, hintReferenceSuffix)
				: null,

		// Other parameters
		compatibilityLigatures: bp.compatibilityLigatures || null,
		metricOverride: bp.metricOverride || null,
		excludedCharRanges: bp.excludeChars?.ranges,

		// Spacing derivation -- creating faster build for spacing variants
		spacingDerive,

		// Composite variants from build plan -- used for variant resolution when building fonts
		variantCompositesFromBuildPlan,
		ligtionCompositesFromBuildPlan,
	};
});

function fetchHintReferenceSuffix(sfm) {
	if (sfm["regular"]) return "regular";

	let bestSuffix = null,
		bestSfi = null;
	for (const [suffix, sfi] of Object.entries(sfm)) {
		if (
			!bestSfi ||
			Math.abs(sfi.shapeWeight - 400) < Math.abs(bestSfi.shapeWeight - 400) ||
			(Math.abs(sfi.shapeWeight - 400) === Math.abs(bestSfi.shapeWeight - 400) &&
				Math.abs(sfi.shapeSlopeAngle) < Math.abs(bestSfi.shapeSlopeAngle)) ||
			(Math.abs(sfi.shapeWeight - 400) === Math.abs(bestSfi.shapeWeight - 400) &&
				Math.abs(sfi.shapeSlopeAngle) === Math.abs(bestSfi.shapeSlopeAngle) &&
				Math.abs(sfi.shapeWidth - 500) < Math.abs(bestSfi.shapeWidth - 500))
		) {
			bestSuffix = suffix;
			bestSfi = sfi;
		}
	}
	return bestSuffix;
}

function getSuffixMapping(weights, slopes, widths) {
	const mapping = {};
	for (const w in weights) {
		validateRecommendedWeight(w, weights[w].menu, "Menu");
		validateRecommendedWeight(w, weights[w].css, "CSS");
		for (const s in slopes) {
			for (const wd in widths) {
				const suffix = makeSuffix(w, wd, s, DEFAULT_SUBFAMILY);
				mapping[suffix] = getSuffixMappingItem(weights, w, slopes, s, widths, wd);
			}
		}
	}
	return mapping;
}
function getSuffixMappingItem(weights, w, slopes, s, widths, wd) {
	const weightDef = wwsDefValidate("Weight definition of " + s, weights[w]);
	const widthDef = wwsDefValidate("Width definition of " + s, widths[wd]);
	const slopeDef = wwsDefValidate("Slope definition of " + s, slopes[s]);
	return {
		// Weights
		weight: w,
		shapeWeight: nValidate("Shape weight of " + w, weightDef.shape, VlShapeWeight),
		cssWeight: nValidate("CSS weight of " + w, weightDef.css, VlCssWeight),
		menuWeight: nValidate("Menu weight of " + w, weightDef.menu, VlMenuWeight),

		// Widths
		width: wd,
		shapeWidth: nValidate("Shape width of " + wd, widthDef.shape, VlShapeWidth),
		cssStretch: sValidate("CSS stretch of " + wd, widthDef.css, VlCssFontStretch),
		menuWidth: nValidate("Menu width of " + wd, widthDef.menu, VlMenuWidth),

		// Slopes
		slope: s,
		shapeSlope: sValidate("Shape slope of " + s, slopeDef.shape, VlShapeSlope),
		shapeSlopeAngle: nValidate("Angle of " + s, slopeDef.angle, VlSlopeAngle),
		cssStyle: sValidate("CSS style of " + s, slopeDef.css, VlCssStyle),
		menuSlope: sValidate("Menu slope of " + s, slopeDef.menu, VlShapeSlope),
	};
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

function whyBuildPlanIsnNotThere(gid) {
	if (!FS.existsSync(PRIVATE_BUILD_PLANS))
		return "\n        -- Possible reason: Config file 'private-build-plans.toml' does not exist.";
	return "";
}

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

const ageKey = uuid.v4();
const DistUnhintedTTF = file.make(
	(gr, fn) => `${DIST}/${gr}/TTF-Unhinted/${fn}.ttf`,
	async (target, out, gr, fn) => {
		await target.need(Scripts, Parameters, Dependencies, de(out.dir));
		const [fi] = await target.need(FontInfoOf(fn));

		const charMapPath = file.getPathOf(BuildCM(gr, fn));
		const ttfaControlsPath = file.getPathOf(BuildTtfaControls(gr, fn));

		if (fi.spacingDerive) {
			// The font is a spacing variant, and is derivable form an existing
			// normally-spaced variant.

			const noGcTtfPath = file.getPathOf(BuildNoGcUnhintedTtfImpl(gr, fn));

			const spD = fi.spacingDerive;
			const [deriveFrom] = await target.need(
				DistUnhintedTTF(spD.prefix, spD.fileName),
				de(charMapPath.dir),
			);

			echo.action(echo.hl.command(`Create TTF`), out.full);
			await silently.node(`packages/font/src/derive-spacing.mjs`, {
				i: deriveFrom.full,
				o: out.full,
				paramsDir: Path.resolve("params"),
				oNoGc: noGcTtfPath.full,
				...fi,
			});
		} else {
			// Ab-initio build
			const cacheFileName =
				`${Math.round(1000 * fi.shape.weight)}-${Math.round(1000 * fi.shape.width)}-` +
				`${Math.round(3600 * fi.shape.slopeAngle)}-${fi.shape.serifs}`;
			const cachePath = `${SHARED_CACHE}/${cacheFileName}.mpz`;
			const cacheDiffPath = `${charMapPath.dir}/${fn}.cache.mpz`;

			await target.need(de(charMapPath.dir), de(ttfaControlsPath.dir), de(SHARED_CACHE));

			echo.action(echo.hl.command(`Create TTF`), out.full);
			const { cacheUpdated } = await silently.node("packages/font/src/index.mjs", {
				// INPUT: font info
				...fi,
				// INPUT: path to parameters
				paramsDir: Path.resolve("params"),
				// TTF output. Optional.
				o: out.full,
				// Charmap output. Optional.
				...(fi.buildCharMap ? { oCharMap: charMapPath.full } : {}),
				// TTFAutohint controls output. Optional.
				oTtfaControls: ttfaControlsPath.full,

				// Geometry cache parameters. Optional.
				cache: {
					input: cachePath,
					output: cacheDiffPath,
					freshAgeKey: ageKey,
				},
			});

			if (cacheUpdated) {
				const lock = build.locks.alloc(cacheFileName);
				await lock.acquire();
				await silently.node(`packages/font/src/merge-cache.mjs`, {
					base: cachePath,
					diff: cacheDiffPath,
					version: fi.menu.version,
					freshAgeKey: ageKey,
				});
				lock.release();
			}
		}
	},
);

const BuildCM = file.make(
	(gr, f) => `${BUILD}/TTF/${gr}/${f}.charmap.mpz`,
	async (target, output, gr, f) => {
		await target.need(DistUnhintedTTF(gr, f));
	},
);
const BuildTtfaControls = file.make(
	(gr, f) => `${BUILD}/TTF/${gr}/${f}.ttfa.txt`,
	async (target, output, gr, f) => {
		await target.need(DistUnhintedTTF(gr, f));
	},
);
const BuildNoGcUnhintedTtfImpl = file.make(
	(gr, f) => `${BUILD}/TTF/${gr}/${f}.no-gc.ttf`,
	async (target, output, gr, f) => {
		await target.need(DistUnhintedTTF(gr, f));
	},
);
const BuildNoGcTtfImpl = file.make(
	(gr, f) => `${BUILD}/TTF/${gr}/${f}.no-gc.hinted.ttf`,
	async (target, output, gr, f) => {
		await target.need(DistHintedTTF(gr, f));
	},
);

const DistHintedTTF = file.make(
	(gr, fn) => `${DIST}/${gr}/TTF/${fn}.ttf`,
	async (target, out, gr, fn) => {
		const [fi, hint] = await target.need(
			FontInfoOf(fn),
			CheckTtfAutoHintExists,
			de`${out.dir}`,
		);
		if (fi.spacingDerive) {
			// The font is a spacing variant, and is derivable form an existing
			// normally-spaced variant.

			const spD = fi.spacingDerive;
			const noGcTtfPath = file.getPathOf(BuildNoGcTtfImpl(gr, fn));

			const [deriveFrom] = await target.need(
				DistHintedTTF(spD.prefix, spD.fileName),
				de(noGcTtfPath.dir),
			);

			echo.action(echo.hl.command(`Hint TTF`), out.full);
			await silently.node(`packages/font/src/derive-spacing.mjs`, {
				i: deriveFrom.full,
				oNoGc: noGcTtfPath.full,
				o: out.full,
				paramsDir: Path.resolve("params"),
				...fi,
			});
		} else {
			const [from, ttfaControls] = await target.need(
				DistUnhintedTTF(gr, fn),
				BuildTtfaControls(gr, fn),
			);
			echo.action(echo.hl.command(`Hint TTF`), out.full, echo.hl.operator("<-"), from.full);
			await silently.run(hint, fi.hintParams, "-m", ttfaControls.full, from.full, out.full);
		}
	},
);

const BuildNoGcTtf = task.make(
	(gr, fn) => `BuildNoGcTtf::${gr}/${fn}`,
	async (target, gr, fn) => {
		const [fi] = await target.need(FontInfoOf(fn));
		if (fi.spacingDerive) {
			const [noGc] = await target.need(BuildNoGcTtfImpl(gr, fn));
			return noGc;
		} else {
			const [distHinted] = await target.need(DistHintedTTF(gr, fn));
			return distHinted;
		}
	},
);

function formatSuffix(fmt, unhinted) {
	return fmt + (unhinted ? "-Unhinted" : "");
}
const DistWoff2 = file.make(
	(gr, fn, unhinted) => `${DIST}/${gr}/${formatSuffix("WOFF2", unhinted)}/${fn}.woff2`,
	async (target, out, group, f, unhinted) => {
		const [rp] = await target.need(RawPlans);
		const Ctor = unhinted ? DistUnhintedTTF : DistHintedTTF;
		const [from] = await target.need(Ctor(group, f), de`${out.dir}`);

		echo.action(echo.hl.command("Create WOFF2"), out.full, echo.hl.operator("<-"), from.full);
		if (rp.buildOptions && rp.buildOptions.woff2CompressApp) {
			// woff2_compress does not support specifying output file name.
			// Thus we need to move it after compression.
			await absolutelySilently.run(rp.buildOptions.woff2CompressApp, from.full);
			await mv(`${from.dir}/${from.name}.woff2`, out.full);
		} else {
			await silently.node(`tools/misc/src/ttf-to-woff2.mjs`, from.full, out.full);
		}
	},
);

///////////////////////////////////////////////////////////
//////              Font Distribution                //////
///////////////////////////////////////////////////////////

// Group-level entry points
const Entry_GroupContents = task.group("contents", async (target, gr) => {
	await target.need(Entry_GroupFonts(gr), Entry_GroupUnhintedFonts(gr));
	return gr;
});
const Entry_GroupTTFs = task.group("ttf", async (target, gr) => {
	await target.need(GroupTtfsImpl(gr, false));
});
const Entry_GroupUnhintedTTFs = task.group("ttf-unhinted", async (target, gr) => {
	await target.need(GroupTtfsImpl(gr, true));
});
const Entry_GroupWoff2s = task.group("woff2", async (target, gr) => {
	await target.need(GroupWoff2Impl(gr, false));
});
const Entry_GroupUnhintedWoff2s = task.group("woff2-unhinted", async (target, gr) => {
	await target.need(GroupWoff2Impl(gr, true));
});
const Entry_GroupWebFonts = task.group("webfont", async (target, gr) => {
	await target.need(GroupWebFontsImpl(gr, false));
});
const Entry_GroupUnhintedWebFonts = task.group("webfont-unhinted", async (target, gr) => {
	await target.need(GroupWebFontsImpl(gr, true));
});
const Entry_GroupFonts = task.group("fonts", async (target, gr) => {
	await target.need(GroupTtfsImpl(gr, false), GroupWebFontsImpl(gr, false));
});
const Entry_GroupUnhintedFonts = task.group("fonts-unhinted", async (target, gr) => {
	await target.need(GroupTtfsImpl(gr, true), GroupWebFontsImpl(gr, true));
});

// Webfont CSS
const DistWebFontCSS = file.make(
	(gr, unhinted) => `${DIST}/${gr}/${formatSuffix(gr, unhinted)}.css`,
	async (target, out, gr, unhinted) => {
		const [plan] = await target.need(BuildPlanOf(gr));
		await target.need(de(out.dir));
		await createWebFontCssImpl(target, out.full, gr, plan.webfontFormats, unhinted);
	},
);
async function createWebFontCssImpl(target, output, gr, formats, unhinted) {
	const [bp, ts] = await target.need(BuildPlanOf(gr), GroupFontsOf(gr));
	const hs = await target.need(...ts.map(FontInfoOf));
	echo.action(echo.hl.command(`Create WebFont CSS`), output, echo.hl.operator("<-"), gr);
	await silently.node(
		"tools/misc/src/make-webfont-css.mjs",
		output,
		bp.family,
		hs,
		formats,
		unhinted,
	);
}

// Content files
const GroupTtfsImpl = task.make(
	(gr, unhinted) => `group-${formatSuffix("TTFImpl", unhinted)}::${gr}`,
	async (target, gr, unhinted) => {
		const Ctor = unhinted ? DistUnhintedTTF : DistHintedTTF;
		const [ts] = await target.need(GroupFontsOf(gr));
		await target.need(ts.map(tn => Ctor(gr, tn)));
		return gr;
	},
);
const GroupWoff2Impl = task.make(
	(gr, unhinted) => `group-${formatSuffix("WOFF2Impl", unhinted)}::${gr}`,
	async (target, gr, unhinted) => {
		const [ts] = await target.need(GroupFontsOf(gr));
		await target.need(ts.map(tn => DistWoff2(gr, tn, unhinted)));
		return gr;
	},
);
const GroupWebFontsImpl = task.make(
	(gr, unhinted) => `group-${formatSuffix("WebFontImpl", unhinted)}::${gr}`,
	async (target, gr, unhinted) => {
		const [bp] = await target.need(BuildPlanOf(gr));
		const groupsNeeded = [];
		for (const ext of bp.webfontFormats) {
			switch (ext) {
				case "TTF":
					groupsNeeded.push(GroupTtfsImpl(gr, unhinted));
					break;
				case "WOFF2":
					groupsNeeded.push(GroupWoff2Impl(gr, unhinted));
					break;
			}
		}
		await target.need(groupsNeeded, DistWebFontCSS(gr, unhinted));
		return gr;
	},
);

///////////////////////////////////////////////////////////
//////            Font Collection Plans              //////
///////////////////////////////////////////////////////////

const CollectPlans = computed(`metadata:collect-plans`, async target => {
	const [rawPlans] = await target.need(RawPlans);
	return await getCollectPlans(target, rawPlans.collectPlans);
});

const SGR_PREFIX_PREFIX = "SGr-";

async function getCollectPlans(target, rawCollectPlans) {
	const plans = {};

	let allCollectableGroups = new Set();

	for (const collectPrefix in rawCollectPlans) {
		const collect = rawCollectPlans[collectPrefix];

		const glyfTtcComposition = {}; // Collect plan for glyf-sharing TTCs
		const ttcComposition = {}; // Collect plan for master TTCs
		const singleGroupTtcInfos = {}; // single-group TTCs

		const shouldProduceSgr = collect.release && collect.from.length > 1;

		if (shouldProduceSgr) {
			for (const prefix of collect.from) {
				const sgrPrefix = SGR_PREFIX_PREFIX + prefix;
				if (allCollectableGroups.has(sgrPrefix))
					throw new Error(`Group ${sgrPrefix} is already in another release plan.`);
				allCollectableGroups.add(sgrPrefix);
				singleGroupTtcInfos[sgrPrefix] = { from: prefix, comp: {} };
			}
		}

		if (!collect || !collect.from || !collect.from.length) continue;

		for (const prefix of collect.from) {
			const [gri] = await target.need(BuildPlanOf(prefix));
			const ttfFileNameSet = new Set(gri.targets);
			const suffixMap = getSuffixMapping(gri.weights, gri.slopes, gri.widths);
			for (const suffix in suffixMap) {
				const sfi = suffixMap[suffix];

				const ttfTargetName = makeFileName(prefix, suffix);
				if (!ttfFileNameSet.has(ttfTargetName)) continue;

				const glyfTtcFileName = fnStandardTtc(true, collectPrefix, suffixMap, sfi);
				if (!glyfTtcComposition[glyfTtcFileName]) glyfTtcComposition[glyfTtcFileName] = [];
				glyfTtcComposition[glyfTtcFileName].push({ dir: prefix, file: ttfTargetName });

				const ttcFileName = fnStandardTtc(false, collectPrefix, suffixMap, sfi);
				if (!ttcComposition[ttcFileName]) ttcComposition[ttcFileName] = [];
				ttcComposition[ttcFileName].push(glyfTtcFileName);

				if (shouldProduceSgr) {
					const sgrPrefix = SGR_PREFIX_PREFIX + prefix;
					const sgrTtcFileName = fnStandardTtc(false, sgrPrefix, suffixMap, sfi);
					const sgrInfo = singleGroupTtcInfos[sgrPrefix];
					if (!sgrInfo.comp[sgrTtcFileName]) sgrInfo.comp[sgrTtcFileName] = [];
					sgrInfo.comp[sgrTtcFileName].push(ttfTargetName);
				}
			}
		}
		plans[collectPrefix] = {
			glyfTtcComposition,
			ttcComposition,
			groupDecomposition: [...collect.from],
			singleGroupTtcInfos,
			inRelease: !!collect.release,
			isAmended: !!collect.isAmended,
		};
	}
	return plans;
}

function fnStandardTtc(fIsGlyfTtc, prefix, suffixMapping, sfi) {
	let optimalSfi = null,
		maxScore = 0;
	for (const ttcSuffix in suffixMapping) {
		const sfiT = suffixMapping[ttcSuffix];
		if (sfi.shapeWeight !== sfiT.shapeWeight) continue;
		if (fIsGlyfTtc && sfi.shapeWidth !== sfiT.shapeWidth) continue;
		if (fIsGlyfTtc && sfi.shapeSlopeAngle !== sfiT.shapeSlopeAngle) continue;
		const score =
			(sfiT.weight === WEIGHT_NORMAL ? 1 : 0) +
			(sfiT.width === WIDTH_NORMAL ? 1 : 0) +
			(sfiT.slope === SLOPE_NORMAL ? 1 : 0);
		if (!optimalSfi || score > maxScore) {
			maxScore = score;
			optimalSfi = sfiT;
		}
	}
	if (!optimalSfi) throw new Error("Unreachable: TTC name decision");
	return `${prefix}-${makeSuffix(
		optimalSfi.weight,
		optimalSfi.width,
		optimalSfi.slope,
		DEFAULT_SUBFAMILY,
	)}`;
}

///////////////////////////////////////////////////////////
//////               Font Collection                 //////
///////////////////////////////////////////////////////////

const SpecificTtc = task.group(`ttc`, async (target, cgr) => {
	const [cPlan] = await target.need(CollectPlans);
	const ttcFiles = Array.from(Object.keys(cPlan[cgr].ttcComposition));
	await target.need(ttcFiles.map(pt => CollectedTtcFile(cgr, pt)));
});
const SpecificSuperTtc = task.group(`super-ttc`, async (target, cgr) => {
	await target.need(CollectedSuperTtcFile(cgr));
});

const CollectedSuperTtcFile = file.make(
	cgr => `${DIST_SUPER_TTC}/${cgr}.ttc`,
	async (target, out, cgr) => {
		const [cp] = await target.need(CollectPlans, de(out.dir));
		const parts = Array.from(Object.keys(cp[cgr].glyfTtcComposition));
		const [inputs] = await target.need(parts.map(pt => GlyfTtc(cgr, pt)));
		await buildCompositeTtc(out, inputs);
	},
);
const CollectedTtcFile = file.make(
	(cgr, f) => `${DIST_TTC}/${cgr}/${f}.ttc`,
	async (target, out, cgr, f) => {
		const [cp] = await target.need(CollectPlans, de`${out.dir}`);
		const parts = Array.from(new Set(cp[cgr].ttcComposition[f]));
		const [inputs] = await target.need(parts.map(pt => GlyfTtc(cgr, pt)));
		await buildCompositeTtc(out, inputs);
	},
);

const SGrTtcFile = file.make(
	(cgr, sgr, f) => `${DIST_TTC}/${sgr}/${f}.ttc`,
	async (target, out, cgr, sgr, f) => {
		const [cp] = await target.need(CollectPlans, de`${out.dir}`);
		const sgrInfo = cp[cgr].singleGroupTtcInfos[sgr];
		const parts = Array.from(new Set(sgrInfo.comp[f] || []));
		const [inputs] = await target.need(parts.map(pt => DistHintedTTF(sgrInfo.from, pt)));
		await buildCompositeTtc(out, inputs);
	},
);
const SGrSuperTtcFile = file.make(
	(cgr, sgr) => `${DIST_SUPER_TTC}/${sgr}.ttc`,
	async (target, out, cgr, sgr) => {
		const [cp] = await target.need(CollectPlans, de`${out.dir}`);
		const sgrInfo = cp[cgr].singleGroupTtcInfos[sgr];
		const parts = Array.from(Object.keys(sgrInfo.comp));
		const [inputs] = await target.need(parts.map(pt => SGrTtcFile(cgr, sgr, pt)));
		await buildCompositeTtc(out, inputs);
	},
);
async function buildCompositeTtc(out, inputs) {
	const inputPaths = inputs.map(f => f.full);
	echo.action(echo.hl.command(`Create TTC`), out.full, echo.hl.operator("<-"), inputPaths);
	await foldWithTempFileRetryImpl(inputPaths, i =>
		absolutelySilently.run(MAKE_TTC, ["-o", out.full], i),
	);
}

// TTC for glyph sharing
const GlyfTtc = file.make(
	(cgr, f) => `${GLYF_TTC}/${cgr}/${f}.ttc`,
	async (target, out, cgr, f) => {
		const [cp] = await target.need(CollectPlans);
		const parts = cp[cgr].glyfTtcComposition[f];
		await buildGlyphSharingTtc(target, parts, out);
	},
);
async function buildGlyphSharingTtc(target, parts, out) {
	await target.need(de`${out.dir}`);
	const [ttfInputs] = await target.need(parts.map(part => BuildNoGcTtf(part.dir, part.file)));
	const ttfInputPaths = ttfInputs.map(p => p.full);
	echo.action(echo.hl.command(`Create TTC`), out.full, echo.hl.operator("<-"), ttfInputPaths);
	await foldWithTempFileRetryImpl(ttfInputPaths, i =>
		silently.run(MAKE_TTC, "-u", ["-o", out.full], i),
	);
}

async function foldWithTempFileRetryImpl(inputPaths, fn) {
	try {
		return await fn(inputPaths);
	} catch (e) {
		// Retry with temporary files
		const tempPaths = [];
		for (const input of inputPaths) {
			let tmp = `${BUILD}/${String(randomUUID())}.${Path.extname(input)}`;
			await cp(input, tmp);
			tempPaths.push(tmp);
		}
		await fn(tempPaths);
		for (const tmp of tempPaths) await rm(tmp);
	}
}

///////////////////////////////////////////////////////////
//////                   Archives                    //////
///////////////////////////////////////////////////////////

// Collection Archives
const TtcZip = file.make(
	(cgr, version) => `${ARCHIVE_DIR}/PkgTTC-${cgr}-${version}.zip`,
	async (target, out, cgr) => {
		const [cPlan] = await target.need(CollectPlans, de`${out.dir}`);
		const ttcFiles = Array.from(Object.keys(cPlan[cgr].ttcComposition));
		await target.need(ttcFiles.map(pt => CollectedTtcFile(cgr, pt)));
		await CreateGroupArchiveFile(`${DIST_TTC}/${cgr}`, out, `*.ttc`);
	},
);
const SuperTtcZip = file.make(
	(cgr, version) => `${ARCHIVE_DIR}/SuperTTC-${cgr}-${version}.zip`,
	async (target, out, cgr) => {
		await target.need(de`${out.dir}`, CollectedSuperTtcFile(cgr));
		await CreateGroupArchiveFile(DIST_SUPER_TTC, out, `${cgr}.ttc`);
	},
);
const SgrTtcZip = file.make(
	(cgr, sgr, version) => `${ARCHIVE_DIR}/PkgTTC-${sgr}-${version}.zip`,
	async (target, out, cgr, sgr) => {
		const [cPlan] = await target.need(CollectPlans, de`${out.dir}`);
		const ttcFiles = Array.from(Object.keys(cPlan[cgr].singleGroupTtcInfos[sgr].comp));
		await target.need(ttcFiles.map(pt => SGrTtcFile(cgr, sgr, pt)));
		await CreateGroupArchiveFile(`${DIST_TTC}/${sgr}`, out, `*.ttc`);
	},
);
const SgrSuperTtcZip = file.make(
	(cgr, sgr, version) => `${ARCHIVE_DIR}/SuperTTC-${sgr}-${version}.zip`,
	async (target, out, cgr, sgr) => {
		await target.need(de`${out.dir}`, SGrSuperTtcFile(cgr, sgr));
		await CreateGroupArchiveFile(DIST_SUPER_TTC, out, `${sgr}.ttc`);
	},
);

// Single-group Archives
const GroupTtfZip = file.make(
	(gr, version, unhinted) =>
		`${ARCHIVE_DIR}/${formatSuffix("PkgTTF", unhinted)}-${gr}-${version}.zip`,
	async (target, out, gr, _version_, unhinted) => {
		await target.need(de`${out.dir}`);
		await target.need(GroupTtfsImpl(gr, unhinted));
		await CreateGroupArchiveFile(
			`${DIST}/${gr}/${formatSuffix("TTF", unhinted)}`,
			out,
			"*.ttf",
		);
	},
);
const GroupWebZip = file.make(
	(gr, version, unhinted) =>
		`${ARCHIVE_DIR}/${formatSuffix("PkgWebFont", unhinted)}-${gr}-${version}.zip`,
	async (target, out, gr, _version_, unhinted) => {
		const [plan] = await target.need(BuildPlanOf(gr));
		await target.need(de`${out.dir}`);
		await target.need(GroupWebFontsImpl(gr, unhinted));
		await CreateGroupArchiveFile(
			`${DIST}/${gr}`,
			out,
			`${formatSuffix(gr, unhinted)}.css`,
			...plan.webfontFormats.map(format => formatSuffix(format, unhinted)),
		);
	},
);

async function CreateGroupArchiveFile(dir, out, ...files) {
	const relOut = Path.relative(dir, out.full);
	await rm(out.full);
	echo.action(echo.hl.command("Create Archive"), out.full);
	await cd(dir).silently.run(
		[SEVEN_ZIP, "a"],
		["-tzip", "-r", "-mx=9", "-mmt1"],
		relOut,
		...files,
	);
}

///////////////////////////////////////////////////////////
//////                    Exports                    //////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Sample Images

const Pages = task(`pages`, async t => {
	await t.need(
		PagesDataExport,
		PagesFontVersionSync,
		PagesAtlasExport(`Iosevka`),
		PagesAtlasExport(`IosevkaSlab`),
		PagesAtlasExport(`IosevkaAile`),
		PagesAtlasExport(`IosevkaEtoile`),
		PagesFontExport`Iosevka`,
		PagesFontExport`IosevkaSlab`,
		PagesFontExport`IosevkaAile`,
		PagesFontExport`IosevkaEtoile`,
		PagesFontExport`IosevkaQp`,
		PagesFontExport`IosevkaQpSlab`,
		PagesFontExport`IosevkaQpe`,
		PagesFontExport`IosevkaQpeSlab`,
	);
});

const PagesDir = oracle(`pages-dir-path`, async t => {
	const [rp] = await t.need(RawPlans);
	if (!rp.buildOptions || !rp.buildOptions.__pagesDir) fail("Pages directory not found");
	return rp.buildOptions.__pagesDir;
});

const PagesFontVersionSync = task(`pages:font-version-sync`, async t => {
	const [version] = await t.need(Version);
	const [pagesDir] = await t.need(PagesDir);
	const packageJson = JSON.parse(
		await FS.promises.readFile(Path.resolve(pagesDir, "package.json"), "utf-8"),
	);
	packageJson.version = version;
	await FS.promises.writeFile(
		Path.resolve(pagesDir, "package.json"),
		JSON.stringify(packageJson, null, "  "),
	);
});

const PagesDataExport = task(`pages:data-export`, async t => {
	const [version] = await t.need(Version);
	const [pagesDir] = await t.need(PagesDir, Parameters, UtilScripts);
	await node(`tools/generate-samples/src/tokenized-sample-code.mjs`, {
		output: Path.resolve(pagesDir, "shared/tokenized-sample-code/alphabet.txt.json"),
	});
	await node(`tools/data-export/src/meta.mjs`, {
		version,
		paramsDir: Path.resolve("params"),
		exportPathMeta: Path.resolve(pagesDir, "shared/data-import/raw/metadata.json"),
	});
});

const PagesAtlasExport = task.group(`pages:atlas-export`, async (t, gr) => {
	const [version] = await t.need(Version);
	const [pagesDir] = await t.need(PagesDir, Parameters, UtilScripts);
	const [cm, cmi, cmo] = await t.need(
		BuildCM(gr, `${gr}-Regular`),
		BuildCM(gr, `${gr}-Italic`),
		BuildCM(gr, `${gr}-Oblique`),
	);
	await node(`tools/data-export/src/atlas.mjs`, {
		version,
		charMapPath: cm.full,
		charMapItalicPath: cmi.full,
		charMapObliquePath: cmo.full,
		outputShared:
			gr === "Iosevka"
				? Path.resolve(pagesDir, "shared/data-import/raw/atlas-shared.json")
				: null,
		output: Path.resolve(pagesDir, `shared/data-import/raw/atlas-${gr}.json`),
	});
});

const PagesFontExport = task.group(`pages:font-export`, async (target, gr) => {
	target.is.volatile();
	const [pagesDir] = await target.need(PagesDir);
	if (!pagesDir) return;
	const outDir = Path.resolve(pagesDir, "shared/fonts/imports", gr);
	await target.need(GroupWebFontsImpl(gr, false), de(outDir));
	await cp(`${DIST}/${gr}/WOFF2`, Path.resolve(outDir, "WOFF2"));
	await createWebFontCssImpl(target, Path.resolve(outDir, `${gr}.css`), gr, webfontFormatsPages);
	await rm(Path.resolve(outDir, "TTF"));
});

const PagesFastFont = task.group(`pages:ff`, async (t, gr) => {
	await t.need(PagesDataExport, PagesAtlasExport(gr), PagesFastFontExportImpl(gr));
});
const PagesFastFontExportImpl = task.group(`pages:fast-font-export-impl`, async (target, gr) => {
	target.is.volatile();

	const [pagesDir] = await target.need(PagesDir);
	if (!pagesDir) return;
	const outDir = Path.resolve(pagesDir, "shared/fonts/imports", gr);
	await target.need(GroupTtfsImpl(gr, true), de(outDir));

	// Next.js 12 has some problem about refreshing fonts, so write an empty CSS first
	await createWebFontCssImpl(target, Path.resolve(outDir, `${gr}.css`), gr, null);
	await Delay(2000);

	// Then do the copy
	await cp(`${DIST}/${gr}/TTF-Unhinted`, Path.resolve(outDir, "TTF"));
	await createWebFontCssImpl(target, Path.resolve(outDir, `${gr}.css`), gr, webfontFormatsFast);
	await rm(Path.resolve(outDir, "WOFF2"));
});

///////////////////////////////////////////////////////////
// README

const AmendReadme = task("amend-readme", async target => {
	await target.need(
		AmendReadmeFor("README.md"),
		AmendReadmeFor("doc/stylistic-sets.md"),
		AmendReadmeFor("doc/character-variants.md"),
		AmendReadmeFor("doc/custom-build.md"),
		AmendReadmeFor("doc/language-specific-ligation-sets.md"),
		AmendReadmeFor("doc/cv-influences.md"),
		AmendReadmeFor("doc/PACKAGE-LIST.md"),
		AmendLicenseYear,
	);
});
const AmendReadmeFor = task.make(
	f => `amend-readme::for::${f}`,
	async (target, f) => {
		const [version] = await target.need(Version, Parameters, UtilScripts);
		const [rpFiles] = await target.need(ReleaseNotePackagesFile);
		const [cm, cmi, cmo] = await target.need(
			BuildCM("Iosevka", "Iosevka-Regular"),
			BuildCM("Iosevka", "Iosevka-Italic"),
			BuildCM("Iosevka", "Iosevka-Oblique"),
		);
		return node(`tools/amend-readme/src/index.mjs`, {
			version,
			projectRoot: Path.resolve("."),
			paramsDir: Path.resolve("params"),
			mdFilePath: f,
			releasePackagesJsonPath: rpFiles.full,
			charMapPath: cm.full,
			charMapItalicPath: cmi.full,
			charMapObliquePath: cmo.full,
		});
	},
);
const ReleaseNotePackagesFile = file(`${BUILD}/release-packages.json`, async (t, out) => {
	const [cp] = await t.need(CollectPlans);
	const [{ buildPlans }] = await t.need(BuildPlans);
	let releaseNoteGroups = {};
	for (const [k, plan] of Object.entries(cp)) {
		if (!plan.inRelease || plan.isAmended) continue;
		const primePlan = buildPlans[plan.groupDecomposition[0]];
		let subGroups = {};
		for (const gr of plan.groupDecomposition) {
			const bp = buildPlans[gr];
			subGroups[gr] = {
				family: bp.family,
				desc: bp.desc,
				spacing: buildPlans[gr].spacing || "type",
			};
		}
		releaseNoteGroups[k] = {
			subGroups,
			slab: primePlan.serifs === "slab",
			quasiProportional: primePlan.spacing === "quasi-proportional",
		};
	}
	await FS.promises.writeFile(out.full, JSON.stringify(releaseNoteGroups, null, "  "));
});
const AmendLicenseYear = task("amend-readme:license-year", async target => {
	return node(`tools/amend-readme/src/license-year.mjs`, {
		path: "LICENSE.md",
	});
});

///////////////////////////////////////////////////////////
// Sample Images

const SampleImages = task(`sample-images`, async target => {
	const [tasksToTake] = await target.need(SampleImagesPre, de(IMAGES));
	let tasks = [];
	for (const id of tasksToTake) tasks.push(ScreenShotImpl(id));
	await target.need(tasks);
});

const SampleImagesPre = task(`sample-images:pre`, async target => {
	const [version] = await target.need(Version, de(IMAGE_TASKS), UtilScripts);
	const fontGroups = await target.need(
		GroupTtfsImpl(`Iosevka`, false),
		GroupTtfsImpl(`IosevkaSlab`, false),
		GroupTtfsImpl(`IosevkaAile`, false),
		GroupTtfsImpl(`IosevkaEtoile`, false),
	);
	const [cm, cmi, cmo] = await target.need(
		BuildCM("Iosevka", "Iosevka-Regular"),
		BuildCM("Iosevka", "Iosevka-Italic"),
		BuildCM("Iosevka", "Iosevka-Oblique"),
	);
	return await node("tools/generate-samples/src/index.mjs", {
		version,
		paramsDir: Path.resolve("params"),
		outputDir: IMAGE_TASKS,
		packageSnapshotTasks: await PackageSnapshotConfig(target),
		fontGroups: fontGroups,
		charMapPath: cm.full,
		charMapItalicPath: cmi.full,
		charMapObliquePath: cmo.full,
	});
});
const PackageSnapshotConfig = async target => {
	const [plan] = await target.need(BuildPlans);
	const cfg = [];
	for (const key in plan.buildPlans) {
		const p = plan.buildPlans[key];
		if (!p || !p.snapshotFamily) continue;
		cfg.push({
			name: "package-sample-" + key,
			fontFamily: p.snapshotFamily,
			fontFeatures: p.snapshotFeature,
		});
	}
	return cfg;
};

const ScreenShotImpl = file.make(
	img => `${IMAGES}/${img}.svg`,
	async (target, out, id) => {
		const [rp] = await target.need(RawPlans);
		await target.need(SampleImagesPre, de(IMAGES));
		await run(rp.buildOptions.snapshotGeneratorApp, [
			`${IMAGE_TASKS}/${id}.json`,
			"-o",
			out.full,
		]);
	},
);

///////////////////////////////////////////////////////////
// Release notes

const ReleaseNotes = task(`release:release-note`, async t => {
	const [version] = await t.need(Version);
	await t.need(ReleaseNotesFile(version));
});
const ReleaseNotesFile = file.make(
	version => `${ARCHIVE_DIR}/release-notes-${version}.md`,
	async (t, out, version) => {
		await t.need(Version, UtilScripts, de(ARCHIVE_DIR));
		const [changeFiles] = await t.need(ChangeFileList());
		await t.need(changeFiles.map(fu));
		await node("tools/amend-readme/src/generate-release-note.mjs", {
			version,
			outputPath: out.full,
		});
	},
);

const ChangeLog = task(`release:change-log`, async t => {
	await t.need(ChangeLogMd);
});
const ChangeLogMd = file(`CHANGELOG.md`, async (t, out) => {
	const [version] = await t.need(Version);
	await t.need(UtilScripts, de(ARCHIVE_DIR));
	const [changeFiles] = await t.need(ChangeFileList());
	await t.need(changeFiles.map(fu));
	await node("tools/amend-readme/src/generate-change-log.mjs", { version, outputPath: out.full });
});
const ChangeFileList = oracle.make(
	() => `release:change-file-list`,
	target => FileList({ under: "changes", pattern: "*.md" })(target),
);

///////////////////////////////////////////////////////////
//////                   Entries                     //////
///////////////////////////////////////////////////////////

const Clean = task(`clean`, async () => {
	await rm(BUILD);
	await rm(DIST);
	await rm(ARCHIVE_DIR);
	build.deleteJournal();
});

const CleanDist = task(`clean-dist`, async () => {
	await rm(DIST);
	await rm(ARCHIVE_DIR);
});

const Release = task(`release`, async target => {
	await target.need(ReleaseAncillary);
	await target.need(ReleaseArchives, ReleaseSha256Text);
});

const ReleaseAncillary = task(`release:ancillary`, async target => {
	await target.need(SampleImages, Pages, AmendReadme, ReleaseNotes, ChangeLog);
});
const ReleaseArchives = task(`release:archives`, async target => {
	const [collectPlans] = await target.need(CollectPlans, UtilScripts);

	let goals = [];
	for (const [cgr, plan] of Object.entries(collectPlans)) {
		if (!plan.inRelease) continue;
		goals.push(ReleaseArchivesFor(cgr));
	}

	const [archiveFiles] = await target.need(goals);
	return archiveFiles.flat(1);
});
const ReleaseSha256Text = file(`${ARCHIVE_DIR}/SHA-256.txt`, async (target, out) => {
	const [files] = await target.need(ReleaseArchives);
	await node(
		`tools/misc/src/generate-release-sha-file.mjs`,
		files.map(f => f.full),
		out.full,
	);
});

const ReleaseArchivesFor = task.group(`release:archives-for`, async (target, cgr) => {
	const [version, collectPlans] = await target.need(Version, CollectPlans, UtilScripts);
	const plan = collectPlans[cgr];
	if (!plan || !plan.inRelease) throw new Error(`CollectGroup ${cgr} is not in release.`);

	let goals = [];

	goals.push(TtcZip(cgr, version));
	goals.push(SuperTtcZip(cgr, version));
	for (const sgr in plan.singleGroupTtcInfos) {
		goals.push(SgrTtcZip(cgr, sgr, version));
		goals.push(SgrSuperTtcZip(cgr, sgr, version));
	}

	const subGroups = collectPlans[cgr].groupDecomposition;
	for (const gr of subGroups) {
		goals.push(GroupTtfZip(gr, version, false));
		goals.push(GroupTtfZip(gr, version, true));
		goals.push(GroupWebZip(gr, version, false));
		goals.push(GroupWebZip(gr, version, true));
	}

	const [archiveFiles] = await target.need(goals);
	return archiveFiles;
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

const Scripts = task("scripts", async target => {
	const [jsFromPtlMap] = await target.need(JsFilesFromPtl);
	const [jsList] = await target.need(FindScriptsUnder(`mjs`, PACKAGES));
	const jsFromPtlSet = new Set(Object.keys(jsFromPtlMap));

	let subGoals = [];
	for (const js of jsFromPtlSet) subGoals.push(CompiledJsFromPtl(js));
	for (const js of jsList) if (!jsFromPtlSet.has(js)) subGoals.push(sfu(js));
	await target.need(subGoals);
});
const UtilScripts = task("util-scripts", async target => {
	const [mjs] = await target.need(FindScriptsUnder("mjs", TOOLS));
	const [md] = await target.need(FindScriptsUnder("md", TOOLS));
	await target.need(mjs.map(fu), md.map(fu));
});

const FindScriptsUnder = oracle.make(
	(ext, dir) => `${ext}-scripts-under::${dir}`,
	(target, ext, dir) => FileList({ under: dir, pattern: `**/*.${ext}` })(target),
);

const JsFilesFromPtl = computed("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(FindScriptsUnder(`ptl`, PACKAGES));
	return Object.fromEntries(ptl.map(compiledMjsPathFromPtlPath));
});
const MacroPtlFiles = computed("macro-ptl-files", async target => {
	const [jsFromPtlMap] = await target.need(JsFilesFromPtl);
	let macroGoals = [];
	for (const [mjs, { isMacro, fromPath }] of Object.entries(jsFromPtlMap)) {
		if (isMacro) macroGoals.push(sfu(fromPath));
	}
	await target.need(macroGoals);
});
function compiledMjsPathFromPtlPath(path) {
	const dirName = Path.dirname(path);
	const newDirName = dirName.replace(/packages\/([\w-]+)\/src(?=$|\/)/, "packages/$1/lib");
	const newFileName = Path.basename(path, Path.extname(path)) + ".mjs";
	const isMacro = Path.basename(path) === "macros.ptl";
	return [
		`${newDirName}/${newFileName}`,
		{ isMacro, fromPath: path, oldOutPath: `${dirName}/${newFileName}` },
	];
}

const CompiledJsFromPtl = file.make(
	p => p,
	async (target, out) => {
		const [jsFromPtlMap] = await target.need(JsFilesFromPtl);
		const ptl = jsFromPtlMap[out.full].fromPath;
		const oldOutPath = jsFromPtlMap[out.full].oldOutPath;

		await target.need(MacroPtlFiles, sfu(ptl));

		echo.action(echo.hl.command("Compile Script"), ptl);
		await rm(oldOutPath); // Remove old output file
		await target.need(de(Path.dirname(out.full))); // Create output directory
		await silently.run(PATEL_C, "--strict", "--esm", ptl, "-o", out.full);
	},
);

const Parameters = task(`meta:parameters`, async target => {
	await target.need(
		Version,
		sfu`params/parameters.toml`,
		sfu`params/shape-weight.toml`,
		sfu`params/shape-width.toml`,
		sfu`params/shape-slope.toml`,
		ofu`params/private-parameters.toml`,
		sfu`params/variants.toml`,
		sfu`params/ligation-set.toml`,
	);
});

///////////////////////////////////////////////////////////
//////              Config Validation                //////
///////////////////////////////////////////////////////////

// Build plan validation

function validateBuildPlan(prefix, bp) {
	if (!bp.family) fail(`Build plan for ${prefix} does not have a family name. Exit.`);
	failWithLegacyParamName(prefix, bp, `no-cv-ss`, `noCvSs`);
	failWithLegacyParamName(prefix, bp, `no-ligation`, `noLigation`);
	failWithLegacyParamName(prefix, bp, `export-glyph-names`, `exportGlyphNames`);
	failWithLegacyParamName(prefix, bp, `build-texture-feature`, `buildTextureFeature`);
	failWithLegacyParamName(prefix, bp, `metric-override`, `metricOverride`);
	failWithLegacyParamName(prefix, bp, `compatibility-ligatures`, `compatibilityLigatures`);
	failWithLegacyParamName(prefix, bp, `exclude-chars`, `excludeChars`);
}

function failWithLegacyParamName(prefix, bp, legacy, expected) {
	if (bp[legacy]) {
		fail(
			`Build plan for '${prefix}' contains legacy build parameter '${legacy}'. ` +
				`Please use '${expected}' instead.`,
		);
	}
}

function resolveWws(bpName, buildPlans, defaultConfig) {
	const bp = buildPlans[bpName];
	if (!bp) fail(`Build plan ${bpName} not found.`);

	if (!bp.slopes && bp.slants) {
		fail(
			`Build plan for ${bpName} uses legacy "slants" to define slopes. ` +
				`Use "slopes" instead.`,
		);
	}

	bp.weights = resolveWwsAspect("weights", bpName, buildPlans, defaultConfig, []);
	bp.widths = resolveWwsAspect("widths", bpName, buildPlans, defaultConfig, []);
	bp.slopes = resolveWwsAspect("slopes", bpName, buildPlans, defaultConfig, []);
}

function resolveWwsAspect(aspectName, bpName, buildPlans, defaultConfig, deps) {
	const bp = buildPlans[bpName];
	if (!bp) fail(`Build plan ${bpName} not found.`);
	if (deps.includes(bp)) {
		fail(`Circular dependency detected when resolving ${aspectName} of ${bp.family}.`);
	}
	const updatedDeps = [...deps, bpName];

	if (bp[aspectName]) {
		const aspect = bp[aspectName];
		if (typeof aspect.inherits == "string") {
			if (aspect.inherits === "default") {
				return defaultConfig[aspectName];
			} else {
				// Make sure it start with `buildPlans.`
				if (!aspect.inherits.startsWith("buildPlans.")) {
					fail(
						`Invalid \`inherits\`2 value for ${aspectName} in ${bpName}. ` +
							`It must be \`default\` or start with \`buildPlans.\`.`,
					);
				}
				const inheritedPlanName = aspect.inherits.slice("buildPlans.".length);
				return resolveWwsAspect(
					aspectName,
					inheritedPlanName,
					buildPlans,
					defaultConfig,
					updatedDeps,
				);
			}
		} else {
			return shimBpAspect(aspectName, bp[aspectName], defaultConfig[aspectName]);
		}
	} else if (bp[`${aspectName}-inherits`]) {
		echo.warn(
			`The ${aspectName}-inherits syntax is deprecated. ` +
				`Use the new syntax \`${aspectName}.inherits = "buildPlans.<plan name>\` instead.`,
		);
		const inheritedPlanName = bp[`${aspectName}-inherits`];
		return resolveWwsAspect(
			aspectName,
			inheritedPlanName,
			buildPlans,
			defaultConfig,
			updatedDeps,
		);
	} else {
		return defaultConfig[aspectName];
	}
}

function shimBpAspect(aspectName, aspect, defaultAspect) {
	if (!aspect) return defaultAspect;
	const result = {};
	for (const [k, v] of Object.entries(aspect)) {
		shimBpAspectKey(aspectName, result, k, v, defaultAspect);
	}
	return result;
}
function shimBpAspectKey(aspectName, sink, k, v, defaultAspect) {
	if (typeof v === "string") {
		if (!v.startsWith("default."))
			throw new Error(
				`Invalid configuration '${v}' for ${aspectName}.${k}'. ` +
					`It must start with 'default.'`,
			);
		const remappingKey = v.slice("default.".length);
		if (!defaultAspect[remappingKey])
			throw new Error(
				`Invalid configuration '${v}' for ${aspectName}.${k}'. ` +
					`The default aspect doesn't have a key '${remappingKey}'.`,
			);

		sink[k] = defaultAspect[remappingKey];
	} else {
		sink[k] = v;
	}
}

// Recommended weight validation
function validateRecommendedWeight(w, value, label) {
	const RecommendedMenuWeights = {
		thin: 100,
		extralight: 200,
		light: 300,
		semilight: 350,
		regular: 400,
		book: 450,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		heavy: 900,
	};
	if (RecommendedMenuWeights[w] && RecommendedMenuWeights[w] !== value) {
		echo.warn(
			`${label} weight settings of ${w} ( = ${value}) doesn't match ` +
				`the recommended value ( = ${RecommendedMenuWeights[w]}).`,
		);
	}
}

// Value validation
function wwsDefValidate(key, obj) {
	if (!obj || typeof obj === "string") {
		throw new TypeError(`${key} is invalid.`);
	}
	return obj;
}

function nValidate(key, v, validator) {
	if (validator.fixup) v = validator.fix(v);
	if (typeof v !== "number" || !isFinite(v) || !validator.validate(v)) {
		throw new TypeError(`${key} = ${v} is not a valid number.`);
	}
	return v;
}

const VlShapeWeight = { validate: x => x >= 100 && x <= 1000 };
const VlCssWeight = { validate: x => x > 0 && x <= 1000 };
const VlMenuWeight = VlCssWeight;

const g_widthFixupMemory = new Map();
const VlShapeWidth = {
	validate: x => x >= 416 && x <= 720,
	fix(x) {
		if (x >= 3 && x <= 9) {
			if (g_widthFixupMemory.has(x)) return g_widthFixupMemory.get(x);
			const xCorrected = Math.round(500 * Math.pow(Math.sqrt(600 / 500), x - 5));
			echo.warn(
				`The build plan is using legacy width grade ${x}. ` +
					`Converting to unit width ${xCorrected}.`,
			);
			g_widthFixupMemory.set(x, xCorrected);
			return xCorrected;
		} else {
			return x;
		}
	},
};
const VlMenuWidth = { validate: x => x >= 1 && x <= 9 && x % 1 === 0 };
const VlSlopeAngle = { validate: x => x >= 0 && x <= 15 };

function sValidate(key, v, validator) {
	if (validator.fixup) v = validator.fix(v);
	if (typeof v !== "string" || !validator.validate(v)) {
		throw new TypeError(`${key} = ${v} is not a valid string.`);
	}
	return v;
}
const VlShapeSlope = { validate: x => x === "upright" || x === "oblique" || x === "italic" };
const VlCssStyle = { validate: x => x === "normal" || x === "oblique" || x === "italic" };
const VlCssFontStretch = {
	validate: x =>
		x == "ultra-condensed" ||
		x == "extra-condensed" ||
		x == "condensed" ||
		x == "semi-condensed" ||
		x == "normal" ||
		x == "semi-expanded" ||
		x == "expanded" ||
		x == "extra-expanded" ||
		x == "ultra-expanded",
};

// Utilities

function Delay(t) {
	return new Promise(resolve => setTimeout(resolve, t));
}
