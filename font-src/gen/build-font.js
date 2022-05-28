"use strict";

const { CreateEmptyFont } = require("./empty-font");
const { buildGlyphs } = require("../glyphs/index");
const { finalizeFont } = require("./finalize/index");
const { convertOtd } = require("./otd-conv/index");
const Caching = require("./caching/index");

const { buildOtl } = require("../otl/index");
const { assignFontNames } = require("../meta/naming");
const { copyFontMetrics } = require("../meta/aesthetics");

exports.buildFont = async function buildFont(argv, para) {
	const gs = buildGlyphs(para);

	const baseFont = CreateEmptyFont(argv);
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

	// Finalize (like geometry conversion)
	const cache = await Caching.load(argv.iCache, argv.menu.version, argv.cacheFreshAgeKey);
	const finalGs = finalizeFont(cache, para, gs.glyphStore, excludeChars, otl);
	if (cache.isUpdated()) {
		await Caching.save(argv.oCache, argv.menu.version, cache, true);
	}

	const font = convertOtd(baseFont, otl, finalGs);
	return { font, glyphStore: finalGs, cacheUpdated: cache.isUpdated() };
};
