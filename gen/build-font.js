"use strict";

const EmptyFont = require("./empty-font.js");
const buildGlyphs = require("./build-glyphs.js");

const { buildOtl } = require("../otl/index");
const { assignFontNames } = require("../meta/naming");
const { setFontMetrics } = require("../meta/aesthetics");

const regulateGlyphs = require("../support/regulate-glyph");
const gcFont = require("./gc");

module.exports = function(para) {
	const font = EmptyFont();
	const gs = buildGlyphs(para);

	assignFontNames(para, gs.metrics, font);
	setFontMetrics(para, gs.metrics, font);

	const otl = buildOtl(para, gs.glyphs, gs.glyphList, gs.unicodeGlyphs);
	font.GSUB = otl.GSUB;
	font.GPOS = otl.GPOS;
	font.GDEF = otl.GDEF;

	// Filtering
	if (para.forceMonospace && para.spacing == 0) {
		gs.glyphList = gs.glyphList.filter(g => !(g.advanceWidth > para.width));
	}

	// Regulate
	const skew = Math.tan(((font.post.italicAngle || 0) / 180) * Math.PI);
	const glyphList = regulateGlyphs(gs.glyphList, skew);

	// finalize
	const excludedCodePoints = new Set();
	if (para.excludedCodePointRanges) {
		for (const [start, end] of para.excludedCodePointRanges) {
			for (let p = start; p <= end; p++) excludedCodePoints.add(p);
		}
	}
	const { glyf, cmap } = extractGlyfAndCmap(glyphList, excludedCodePoints);
	font.glyf = glyf;
	font.cmap = cmap;

	gcFont(font);

	return font;
};

function extractGlyfAndCmap(glyphList, excludedCodePoints) {
	const glyf = {};
	const cmap = {};
	for (let g of glyphList) {
		glyf[g.name] = g;

		if (!g.unicode) continue;
		for (let u of g.unicode) {
			if (!excludedCodePoints.has(u - 0)) cmap[u] = g.name;
		}
	}

	return { glyf, cmap };
}
