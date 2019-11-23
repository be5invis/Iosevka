"use strict";

const fs = require("fs");
const path = require("path");

const argv = require("yargs").argv;
const buildGlyphs = require("./build-glyphs.js");
const parameters = require("../support/parameters");
const formVariantData = require("../support/variant-data");
const regulateGlyphs = require("../support/regulate-glyph");
const toml = require("toml");

function objHashNonEmpty(obj) {
	if (!obj) return false;
	for (let k in obj) if (obj[k]) return true;
	return false;
}

const PARAMETERS_TOML = path.resolve(__dirname, "../parameters.toml");
const PRIVATE_TOML = path.resolve(__dirname, "../private.toml");
const VARIANTS_TOML = path.resolve(__dirname, "../variants.toml");
const EMPTY_FONT_TOML = path.resolve(__dirname, "../empty-font.toml");

function tryParseToml(str) {
	try {
		return toml.parse(fs.readFileSync(str, "utf-8"));
	} catch (e) {
		throw new Error(
			`Failed to parse configuration file ${str}.\nPlease validate whether there's syntax error.\n${e}`
		);
	}
}

function getParameters(argv) {
	const parametersData = Object.assign(
		{},
		tryParseToml(PARAMETERS_TOML),
		fs.existsSync(PRIVATE_TOML) ? tryParseToml(PRIVATE_TOML) : []
	);
	const variantData = tryParseToml(VARIANTS_TOML);

	const para = parameters.build(parametersData, argv._);
	const variantsData = formVariantData(variantData, para);
	para.variants = variantsData;
	para.variantSelector = parameters.build(variantsData, argv._);
	para.defaultVariant = variantsData.default;

	para.naming = {
		family: argv.family,
		version: argv.ver,
		weight: argv["menu-weight"] - 0,
		slant: argv["menu-slant"]
	};

	return para;
}

// Font building
const font = (function() {
	const emptyFont = tryParseToml(EMPTY_FONT_TOML);
	const para = getParameters(argv);
	const font = buildGlyphs.build.call(emptyFont, para);
	font.parameters = para;
	return font;
})();

if (argv.charmap) {
	const charmap = font.glyf.map(function(glyph) {
		const isSpace = glyph.contours && glyph.contours.length ? 2 : 0;
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 ? (objHashNonEmpty(glyph.anchors) ? 1 : isSpace ? 2 : 0) : 0
		];
	});
	fs.writeFileSync(argv.charmap, JSON.stringify(charmap), "utf8");
}

if (argv.o) {
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
		fs.writeFileSync(argv.o, JSON.stringify(otd, null, "    "));
	}
}
