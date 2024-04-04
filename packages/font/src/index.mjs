import fs from "fs";
import path from "path";
import zlib from "zlib";

import * as Toml from "@iarna/toml";
import * as Caching from "@iosevka/geometry-cache";
import { createGrDisplaySheet } from "@iosevka/glyph/relation";
import * as Parameters from "@iosevka/param";
import { applyLigationData } from "@iosevka/param/ligation";
import { applyMetricOverride } from "@iosevka/param/metric-override";
import * as VariantData from "@iosevka/param/variant";
import { encode } from "@msgpack/msgpack";

import { buildFont } from "./build-font/index.mjs";
import { saveTTF } from "./font-io/index.mjs";
import { createNamingDictFromArgv } from "./naming/index.mjs";

export default main;
async function main(argv) {
	// Set up parameters
	const paraT = await getParametersT(argv);
	const para = paraT(argv);

	// Set up cache
	const cache = argv.cache
		? await Caching.load(argv.cache.input, argv.menu.version, argv.cache.freshAgeKey)
		: null;
	// Build font
	const { font, glyphStore, cacheUpdated, ttfaControls } = await buildFont(para, cache);

	// Save charmap
	if (argv.oCharMap) await saveCharMap(argv, glyphStore);
	// Save ttfaControls
	if (argv.oTtfaControls) await fs.promises.writeFile(argv.oTtfaControls, ttfaControls);
	// Save TTF
	if (argv.o) await saveTTF(argv.o, font);
	// Save cache
	if (argv.cache && cache && cache.isUpdated()) {
		await Caching.save(argv.cache.output, argv.menu.version, cache, true);
	}

	return { cacheUpdated };
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Parameter preparation
async function getParametersT(argv) {
	const PARAMETERS_TOML = path.resolve(argv.paramsDir, "./parameters.toml");
	const WEIGHTS_TOML = path.resolve(argv.paramsDir, "./shape-weight.toml");
	const WIDTHS_TOML = path.resolve(argv.paramsDir, "./shape-width.toml");
	const SLOPES_TOML = path.resolve(argv.paramsDir, "./shape-slope.toml");
	const PRIVATE_TOML = path.resolve(argv.paramsDir, "./private-parameters.toml");
	const VARIANTS_TOML = path.resolve(argv.paramsDir, "./variants.toml");
	const LIGATIONS_TOML = path.resolve(argv.paramsDir, "./ligation-set.toml");
	const parametersData = Object.assign(
		{},
		await tryParseToml(PARAMETERS_TOML),
		await tryParseToml(WEIGHTS_TOML),
		await tryParseToml(WIDTHS_TOML),
		await tryParseToml(SLOPES_TOML),
		fs.existsSync(PRIVATE_TOML) ? await tryParseToml(PRIVATE_TOML) : {},
	);
	const rawVariantsData = await tryParseToml(VARIANTS_TOML);
	const rawLigationData = await tryParseToml(LIGATIONS_TOML);
	function createParaImpl(argv) {
		let para = Parameters.init(deepClone(parametersData), argv);
		VariantData.apply(deepClone(rawVariantsData), para, argv);
		applyLigationData(deepClone(rawLigationData), para, argv);
		if (argv.excludedCharRanges) para.excludedCharRanges = argv.excludedCharRanges;
		if (argv.compatibilityLigatures) para.compatibilityLigatures = argv.compatibilityLigatures;
		if (argv.metricOverride) applyMetricOverride(para, argv.metricOverride, argv);
		para.naming = { ...para.naming, ...createNamingDictFromArgv(argv) };
		return para;
	}
	function paraT(argv) {
		const para = createParaImpl(argv);
		para.createFork = function (tf) {
			const argv1 = deepClone(argv);
			tf(argv1, argv);
			return paraT(argv1);
		};
		return para;
	}
	return paraT;
}
async function tryParseToml(str) {
	try {
		return Toml.parse(await fs.promises.readFile(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\nPlease validate whether there's syntax error.\n${e}`,
		);
	}
}
function deepClone(pod) {
	return JSON.parse(JSON.stringify(pod));
}

// Save character map file
async function saveCharMap(argv, glyphStore) {
	let charMap = [];
	for (const [gn] of glyphStore.namedEntries()) {
		charMap.push([
			gn,
			Array.from(glyphStore.queryUnicodeOfName(gn) || []),
			...createGrDisplaySheet(glyphStore, gn),
		]);
	}
	await fs.promises.writeFile(argv.oCharMap, zlib.gzipSync(encode(charMap)));
}
