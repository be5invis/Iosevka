"use strict";

const fs = require("fs-extra");
const path = require("path");

const argv = require("yargs").argv;
const buildGlyphs = require("./build-glyphs.js");
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
	const font = await buildFont();
	if (argv.charmap) await saveCharMap(font);
	if (argv.o) await saveFont(font);
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

// Font building
async function buildFont() {
	const emptyFont = EmptyFont();
	const para = await getParameters(argv);
	const font = buildGlyphs.build(emptyFont, para);
	font.parameters = para;
	return font;
}

// Save char map
function objHashNonEmpty(obj) {
	if (!obj) return false;
	for (let k in obj) if (obj[k]) return true;
	return false;
}
async function saveCharMap(font) {
	const charmap = font.glyf.map(function(glyph) {
		const isSpace = glyph.contours && glyph.contours.length ? 2 : 0;
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 ? (objHashNonEmpty(glyph.anchors) ? 1 : isSpace ? 2 : 0) : 0
		];
	});
	await fs.writeFile(argv.charmap, JSON.stringify(charmap), "utf8");
}

async function saveFont(font) {
	const skew = Math.tan(((font.post.italicAngle || 0) / 180) * Math.PI);

	regulateGlyphs(font, skew);

	// finalize
	const excludedCodePoints = new Set();
	if (font.parameters.excludedCodePointRanges) {
		for (const [start, end] of font.parameters.excludedCodePointRanges) {
			for (let p = start; p <= end; p++) excludedCodePoints.add(p);
		}
	}

	const o_glyf = {};
	const o_cmap = {};
	for (let g of font.glyf) {
		o_glyf[g.name] = g;

		if (!g.unicode) continue;
		for (let u of g.unicode) {
			if (!excludedCodePoints.has(u - 0)) o_cmap[u] = g.name;
		}
	}

	// Prepare OTD
	const otd = Object.assign({}, font);
	otd.glyf = o_glyf;
	otd.cmap = o_cmap;
	otd.glyfMap = null;
	if (argv.o === "|") {
		process.stdout.write(JSON.stringify(otd));
	} else {
		await fs.writeFile(argv.o, JSON.stringify(otd, null, "    "));
	}
}
