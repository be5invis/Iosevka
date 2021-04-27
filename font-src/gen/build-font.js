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
	const otd = EmptyFont();
	const gs = buildGlyphs(para);

	assignFontNames(para, otd);
	copyFontMetrics(gs.fontMetrics, otd);

	const otl = buildOtl(para, gs.glyphStore);
	otd.GSUB = otl.GSUB;
	otd.GPOS = otl.GPOS;
	otd.GDEF = otl.GDEF;

	// Regulate
	const excludeChars = new Set();
	if (para.excludedCharRanges) {
		for (const [start, end] of para.excludedCharRanges) {
			for (let p = start; p <= end; p++) excludeChars.add(p);
		}
	}

	const cache = await Caching.load(argv);
	const finalGs = finalizeFont(cache, para, gs.glyphStore, excludeChars, otd);
	await Caching.save(argv, cache);

	const font = convertOtd(otd, finalGs);
	return { font, glyphStore: finalGs };
};
