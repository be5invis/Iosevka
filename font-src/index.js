"use strict";

const fs = require("fs-extra");
const path = require("path");
const child_process = require("child_process");

const Toml = require("@iarna/toml");
const which = require("which");

const BuildFont = require("./gen/build-font.js");
const Parameters = require("./support/parameters");
const FormVariantData = require("./support/variant-data");
const FormLigationData = require("./support/ligation-data");
const { createGrDisplaySheet } = require("./support/gr");

module.exports = async function main(argv) {
	const para = await getParameters(argv);
	const { font, glyphStore } = BuildFont(para);
	if (argv.oCharMap) await saveCharMap(argv, glyphStore);
	if (argv.o) await saveTTF(argv, font);
};

// Parameter preparation
async function getParameters(argv) {
	const PARAMETERS_TOML = path.resolve(__dirname, "../params/parameters.toml");
	const WEIGHTS_TOML = path.resolve(__dirname, "../params/shape-weight.toml");
	const WIDTHS_TOML = path.resolve(__dirname, "../params/shape-width.toml");
	const PRIVATE_TOML = path.resolve(__dirname, "../params/private-parameters.toml");
	const VARIANTS_TOML = path.resolve(__dirname, "../params/variants.toml");
	const LIGATIONS_TOML = path.resolve(__dirname, "../params/ligation-set.toml");

	const parametersData = Object.assign(
		{},
		await tryParseToml(PARAMETERS_TOML),
		await tryParseToml(WEIGHTS_TOML),
		await tryParseToml(WIDTHS_TOML),
		fs.existsSync(PRIVATE_TOML) ? await tryParseToml(PRIVATE_TOML) : {}
	);
	const rawVariantsData = await tryParseToml(VARIANTS_TOML);
	const rawLigationData = await tryParseToml(LIGATIONS_TOML);

	let para = {};
	Parameters.apply(para, parametersData, ["iosevka"]);
	Parameters.apply(para, parametersData, argv.preHives);
	Parameters.apply(para, parametersData, ["shapeWeight"], { shapeWeight: argv.shape.weight });
	Parameters.apply(para, parametersData, ["shapeWidth"], { shapeWidth: argv.shape.width });
	Parameters.apply(para, parametersData, [`s-${argv.shape.slope}`]);
	Parameters.apply(para, parametersData, [`diversity-${argv.shape.quasiProportionalDiversity}`]);

	const variantsData = FormVariantData(rawVariantsData, para);
	para.variants = variantsData;
	para.variantSelector = {};
	Parameters.apply(para.variantSelector, variantsData, ["default", ...argv.preHives]);
	para.defaultVariant = variantsData.default;

	const ligationData = FormLigationData(rawLigationData, para);
	para.defaultBuildup = { ...ligationData.defaultBuildup };
	para.ligation = {};
	Parameters.apply(para.ligation, ligationData.hives, ["default", ...argv.preHives]);

	if (argv.excludedCharRanges) para.excludedCharRanges = argv.excludedCharRanges;
	if (argv.compatibilityLigatures) para.compLig = argv.compatibilityLigatures;
	if (argv.metricOverride) Parameters.applyMetricOverride(para, argv.metricOverride);

	para.naming = {
		...para.naming,
		family: argv.menu.family,
		version: argv.menu.version,
		weight: argv.menu.weight - 0,
		width: argv.menu.width - 0,
		slope: argv.menu.slope
	};
	return para;
}

async function tryParseToml(str) {
	try {
		return Toml.parse(await fs.readFile(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\nPlease validate whether there's syntax error.\n${e}`
		);
	}
}

// Save TTF
async function saveTTF(argv, font) {
	await otfccBuild(argv.o, JSON.stringify(font));
}
function otfccBuild(argvO, fontJson) {
	const otfccOptions = ["-O3", "--keep-average-char-width", "-q"];
	return new Promise((resolve, reject) => {
		const otfccBuild = which.sync("otfccbuild");
		const cp = child_process.spawn(otfccBuild, ["-o", argvO, ...otfccOptions]);
		cp.stdout.on("data", data => {
			console.log(`stdout: ${data}`);
		});
		cp.stderr.on("data", data => {
			console.error(`stderr: ${data}`);
		});
		cp.on("close", code => {
			if (code) reject(new Error("OTFCC returned with: " + code));
			else resolve(0);
		});
		cp.stdin.write(fontJson);
		cp.stdin.end();
	});
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
	await fs.writeFile(argv.oCharMap, JSON.stringify(charMap), "utf8");
}
