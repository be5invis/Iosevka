"use strict";

const fs = require("fs");
const path = require("path");

// let TTFWriter = require('node-sfnt').TTFWriter;
const argv = require("yargs").argv;
const buildGlyphs = require("./buildglyphs.js");
const parameters = require("../support/parameters");
const toml = require("toml");

const Glyph = require("../support/glyph");
const autoref = require("../support/autoref");
const objectAssign = require("object-assign");

const caryllShapeOps = require("caryll-shapeops");
const c2q = require("megaminx").geometry.c2q;

function hasv(obj) {
	if (!obj) return false;
	for (let k in obj) if (obj[k]) return true;
	return false;
}

function mergeVSHive(_target, source) {
	if (!source) return _target;
	let __cvmap = objectAssign({}, _target.__cvmap, source.__cvmap);
	let target = objectAssign(_target, source);
	target.__cvmap = __cvmap;
	return target;
}
function produceComposite(vs, para, dflt, g) {
	let sel = objectAssign({}, dflt);
	if (g.design)
		for (let h of g.design) {
			sel = mergeVSHive(sel, vs[h]);
		}
	if (!para.isItalic && g.upright) {
		for (let h of g.upright) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	if (para.isItalic && g.italic) {
		for (let h of g.italic) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	sel.__isComposite = true;
	return sel;
}
function formVariantData(data, para) {
	const vs = {};
	// simple selector
	for (let k in data.simple) {
		const hive = objectAssign({}, data.simple[k]);
		const tag = hive.tag;
		delete hive.tag;
		if (tag) {
			let __cvmap = {};
			for (let k in hive) __cvmap[k] = tag;
			hive.__cvmap = __cvmap;
		}
		vs[k] = hive;
		if (tag) vs[tag] = hive;
	}
	// default selector
	vs.default = produceComposite(vs, para, {}, data.default);
	// ss## selector
	for (let k in data.composite) {
		vs[k] = produceComposite(vs, para, vs.default, data.composite[k]);
	}
	return vs;
}

function byGlyphPriority(a, b) {
	const pri1 = a.cmpPriority || 0;
	const pri2 = b.cmpPriority || 0;
	if (pri1 > pri2) return -1;
	if (pri1 < pri2) return 1;
	if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
	if (a.contours && b.contours && a.contours.length > b.contours.length) return -1;
	if (a.advanceWidth < b.advanceWidth) return -1;
	if (a.advanceWidth > b.advanceWidth) return 1;
	if ((a.unicode && a.unicode[0] && !b.unicode) || !b.unicode[0]) return -1;
	if ((b.unicode && b.unicode[0] && !a.unicode) || !a.unicode[0]) return +1;
	if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] < b.unicode[0])
		return -1;
	if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] > b.unicode[0])
		return +1;
	return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

const PARAMETERS_TOML = path.resolve(__dirname, "../parameters.toml");
const PRIVATE_TOML = path.resolve(__dirname, "../private.toml");
const VARIANTS_TOML = path.resolve(__dirname, "../variants.toml");
const EMPTYFONT_TOML = path.resolve(__dirname, "../emptyfont.toml");

function getParameters(argv) {
	const parametersData = Object.assign(
		{},
		toml.parse(fs.readFileSync(PARAMETERS_TOML, "utf-8")),
		fs.existsSync(PRIVATE_TOML) ? toml.parse(fs.readFileSync(PRIVATE_TOML, "utf-8")) : []
	);
	const variantData = toml.parse(fs.readFileSync(VARIANTS_TOML, "utf-8"));

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
	const emptyFont = toml.parse(fs.readFileSync(EMPTYFONT_TOML, "utf-8"));
	const para = getParameters(argv);
	const font = buildGlyphs.build.call(emptyFont, para);

	font.parameters = para;
	font.glyf = font.glyf
		.map(function(g, j) {
			g.gord = j;
			return g;
		})
		.sort(byGlyphPriority);
	return font;
})();

if (argv.charmap) {
	const charmap = font.glyf.map(function(glyph) {
		const isSpace = glyph.contours && glyph.contours.length ? 2 : 0;
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 ? (hasv(glyph.anchors) ? 1 : isSpace ? 2 : 0) : 0
		];
	});
	fs.writeFileSync(argv.charmap, JSON.stringify(charmap), "utf8");
}

function regulateGlyph(g, skew) {
	if (!g.contours) return;

	// Regulate
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x += contour[p].y * skew;
			if (!contour[p].on) continue;
			contour[p].x = Math.round(contour[p].x);
		}
		let offJ = null,
			mx = null;
		for (let p = 0; p < contour.length; p++) {
			if (!contour[p].on) continue;
			if (offJ) {
				const origx = contour[p].x;
				const rx = Math.round(contour[p].x * 4) / 4;
				const origx0 = mx;
				const rx0 = contour[offJ - 1].x;
				if (origx === origx0) continue;
				for (let poff = offJ; poff < p; poff++) {
					contour[poff].x =
						((contour[poff].x - origx0) / (origx - origx0)) * (rx - rx0) + rx0;
				}
			}
			mx = contour[p].x;
			contour[p].x = Math.round(contour[p].x * 4) / 4;
			offJ = p + 1;
		}
	}
	const c1 = [];
	for (let k = 0; k < g.contours.length; k++) {
		c1.push(Glyph.contourToStandardCubic(g.contours[k]));
	}

	// De-overlap
	g.contours = caryllShapeOps.removeOverlap(c1, 1, 256, true);

	// Finalize
	g.contours = c2q.contours(g.contours);
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x -= contour[p].y * skew;
		}
	}
}

if (argv.o) {
	const skew =
		(argv.uprightify ? 1 : 0) * Math.tan(((font.post.italicAngle || 0) / 180) * Math.PI);
	const excludeUnicodes = new Set();
	excludeUnicodes.add(0x80);
	for (let c = 0x2500; c <= 0x259f; c++) excludeUnicodes.add(c);
	// autoref
	autoref(font.glyf, excludeUnicodes);
	// regulate
	for (let g of font.glyf) regulateGlyph(g, skew);

	// reorder
	font.glyf = font.glyf.sort((a, b) => a.gord - b.gord);

	// finalize
	const o_glyf = {};
	const o_cmap = {};
	for (let g of font.glyf) {
		o_glyf[g.name] = g;
		if (!g.unicode) continue;
		for (let u of g.unicode) o_cmap[u] = g.name;
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
