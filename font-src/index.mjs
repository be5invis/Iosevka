import fs from "fs";
import path from "path";
import url from "url";
import zlib from "zlib";

import * as Toml from "@iarna/toml";
import { encode } from "@msgpack/msgpack";
import { FontIo } from "ot-builder";

import { buildFont } from "./gen/build-font.mjs";
import { createNamingDictFromArgv } from "./gen/meta/naming.mjs";
import { createGrDisplaySheet } from "./support/gr.mjs";
import { applyLigationData } from "./support/ligation-data.mjs";
import { applyMetricOverride } from "./support/metric-override.mjs";
import * as Parameters from "./support/parameters.mjs";
import * as VariantData from "./support/variant-data.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Parameter preparation
async function getParameters() {
	const PARAMETERS_TOML = path.resolve(__dirname, "../params/parameters.toml");
	const WEIGHTS_TOML = path.resolve(__dirname, "../params/shape-weight.toml");
	const WIDTHS_TOML = path.resolve(__dirname, "../params/shape-width.toml");
	const SLOPES_TOML = path.resolve(__dirname, "../params/shape-slope.toml");
	const PRIVATE_TOML = path.resolve(__dirname, "../params/private-parameters.toml");
	const VARIANTS_TOML = path.resolve(__dirname, "../params/variants.toml");
	const LIGATIONS_TOML = path.resolve(__dirname, "../params/ligation-set.toml");
	const parametersData = Object.assign(
		{},
		await tryParseToml(PARAMETERS_TOML),
		await tryParseToml(WEIGHTS_TOML),
		await tryParseToml(WIDTHS_TOML),
		await tryParseToml(SLOPES_TOML),
		fs.existsSync(PRIVATE_TOML) ? await tryParseToml(PRIVATE_TOML) : {}
	);
	const rawVariantsData = await tryParseToml(VARIANTS_TOML);
	const rawLigationData = await tryParseToml(LIGATIONS_TOML);
	function createParaImpl(argv) {
		let para = Parameters.init(deepClone(parametersData), argv);
		VariantData.apply(deepClone(rawVariantsData), para, argv);
		applyLigationData(deepClone(rawLigationData), para, argv);
		if (argv.excludedCharRanges) para.excludedCharRanges = argv.excludedCharRanges;
		if (argv.compatibilityLigatures) para.compLig = argv.compatibilityLigatures;
		if (argv.metricOverride) applyMetricOverride(para, argv.metricOverride, argv);
		para.naming = {
			miscNames: para.naming,
			...createNamingDictFromArgv(argv)
		};
		return para;
	}
	function reinit(argv) {
		const para = createParaImpl(argv);
		para.reinit = function (tf) {
			const argv1 = deepClone(argv);
			tf(argv1, argv);
			return reinit(argv1);
		};
		return para;
	}
	return reinit;
}
async function tryParseToml(str) {
	try {
		return Toml.parse(await fs.promises.readFile(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\nPlease validate whether there's syntax error.\n${e}`
		);
	}
}
function deepClone(pod) {
	return JSON.parse(JSON.stringify(pod));
}
// Save TTF
async function saveTTF(argv, font) {
	const sfnt = FontIo.writeFont(font, {
		glyphStore: { statOs2XAvgCharWidth: false },
		generateDummyDigitalSignature: true
	});
	const buf = FontIo.writeSfntOtf(sfnt);
	await fs.promises.writeFile(argv.o, buf);
}
// Save character map file
async function saveCharMap(argv, glyphStore) {
	let charMap = [];
	for (const [gn] of glyphStore.namedEntries()) {
		charMap.push([
			gn,
			Array.from(glyphStore.queryUnicodeOfName(gn) || []),
			...createGrDisplaySheet(glyphStore, gn)
		]);
	}
	await fs.promises.writeFile(argv.oCharMap, zlib.gzipSync(encode(charMap)));
}
export default (async function main(argv) {
	const paraT = await getParameters();
	const { font, glyphStore, cacheUpdated } = await buildFont(argv, paraT(argv));
	if (argv.oCharMap) await saveCharMap(argv, glyphStore);
	if (argv.o) await saveTTF(argv, font);
	return { cacheUpdated };
});
