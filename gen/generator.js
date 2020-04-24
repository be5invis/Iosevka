"use strict";

const fs = require("fs-extra");
const path = require("path");

const argv = require("yargs").argv;
const buildFont = require("./build-font.js");
const EmptyFont = require("./empty-font.js");
const parameters = require("../support/parameters");
const formVariantData = require("../support/variant-data");
const formLigationData = require("../support/ligation-data");
const regulateGlyphs = require("../support/regulate-glyph");
const toml = require("toml");

main().catch(e => {
	console.error(e);
	process.exit(1);
});

///////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const para = await getParameters(argv);
	const font = buildFont(para);
	if (argv.charmap) await saveCharMap(font);
	if (argv.o) await saveOtd(font);
}

// Parameter preparation
async function getParameters(argv) {
	const PARAMETERS_TOML = path.resolve(__dirname, "../parameters.toml");
	const PRIVATE_TOML = path.resolve(__dirname, "../private.toml");
	const VARIANTS_TOML = path.resolve(__dirname, "../variants.toml");
	const LIGATIONS_TOML = path.resolve(__dirname, "../ligation-set.toml");

	const parametersData = Object.assign(
		{},
		await tryParseToml(PARAMETERS_TOML),
		(await fs.exists(PRIVATE_TOML)) ? await tryParseToml(PRIVATE_TOML) : []
	);
	const rawVariantsData = await tryParseToml(VARIANTS_TOML);
	const rawLigationData = await tryParseToml(LIGATIONS_TOML);

	const para = parameters.build(parametersData, argv._, { "shape-weight": argv["shape-weight"] });

	const variantsData = formVariantData(rawVariantsData, para);
	para.variants = variantsData;
	para.variantSelector = parameters.build(variantsData, ["default", ...argv._]);
	para.defaultVariant = variantsData.default;

	const ligationData = formLigationData(rawLigationData, para);
	para.defaultBuildup = ligationData.defaultBuildup;
	para.ligation = parameters.build(ligationData.hives, ["default", ...argv._]);

	para.naming = {
		family: argv.family,
		version: argv.ver,
		weight: argv["menu-weight"] - 0,
		width: argv["menu-width"] - 0,
		slant: argv["menu-slant"]
	};

	return para;
}

async function tryParseToml(str) {
	try {
		return toml.parse(await fs.readFile(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\nPlease validate whether there's syntax error.\n${e}`
		);
	}
}

// Save OTD
async function saveOtd(font) {
	if (argv.o === "|") {
		process.stdout.write(JSON.stringify(font));
	} else {
		await fs.writeFile(argv.o, JSON.stringify(font, null, "    "));
	}
}

// Save char map
function objHashNonEmpty(obj) {
	if (!obj) return false;
	for (let k in obj) if (obj[k]) return true;
	return false;
}

async function saveCharMap(font) {
	let charMap = [];
	for (const gid in font.glyf) {
		const glyph = font.glyf[gid];
		if (!glyph) continue;

		const glyphIsHidden = /^\./.test(gid);
		const typographicFeatures = [];
		if (!glyphIsHidden) {
			if (/\.NWID$/.test(gid) || /\.WWID$/.test(gid))
				typographicFeatures.push("NWID", "WWID");
			if (/\.lnum$/.test(gid) || /\.onum$/.test(gid))
				typographicFeatures.push("lnum", "onum");
		}

		charMap.push([
			glyph.name,
			glyph.unicode,
			typographicFeatures,
			glyph.featureSelector ? Object.keys(glyph.featureSelector) : []
		]);
	}
	await fs.writeFile(argv.charmap, JSON.stringify(charMap), "utf8");
}
