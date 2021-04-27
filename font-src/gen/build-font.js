"use strict";

const EmptyFont = require("./empty-font");
const buildGlyphs = require("../glyphs/index");
const finalizeFont = require("./finalize/index");
const convertOtd = require("./otd-conv/index");
const Caching = require("./caching/index");

const { buildOtl } = require("../otl/index");
const { assignFontNames } = require("../meta/naming");
const { copyFontMetrics } = require("../meta/aesthetics");

module.exports = async function (argv, para) {
	const gs = buildGlyphs(para);

	const baseFont = EmptyFont();
	assignFontNames(para, baseFont);
	copyFontMetrics(gs.fontMetrics, baseFont);

	const otl = buildOtl(para, gs.glyphStore);

	// Regulate
	const excludeChars = new Set();
	if (para.excludedCharRanges) {
		for (const [start, end] of para.excludedCharRanges) {
			for (let p = start; p <= end; p++) excludeChars.add(p);
		}
	}

	const cache = await Caching.load(argv);
	const finalGs = finalizeFont(cache, para, gs.glyphStore, excludeChars, otl);
	await Caching.save(argv, cache);

	const font = convertOtd(baseFont, otl, finalGs);
	return { font, glyphStore: finalGs };
};
