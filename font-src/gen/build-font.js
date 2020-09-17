"use strict";

const EmptyFont = require("./empty-font.js");
const buildGlyphs = require("./build-glyphs.js");
const finalizeFont = require("./finalize/index");

const { buildOtl } = require("../otl/index");
const { assignFontNames } = require("../meta/naming");
const { setFontMetrics } = require("../meta/aesthetics");

module.exports = function (para) {
	const font = EmptyFont();
	const gs = buildGlyphs(para);

	assignFontNames(para, gs.metrics, font);
	setFontMetrics(para, gs.metrics, font);

	const otl = buildOtl(para, gs.glyphStore);
	font.GSUB = otl.GSUB;
	font.GPOS = otl.GPOS;
	font.GDEF = otl.GDEF;

	// Regulate
	const excludeChars = new Set();
	if (para.excludedCharRanges) {
		for (const [start, end] of para.excludedCharRanges) {
			for (let p = start; p <= end; p++) excludeChars.add(p);
		}
	}

	const finalGs = finalizeFont(para, gs.glyphStore, excludeChars, font);
	return { font, glyphStore: finalGs };
};
