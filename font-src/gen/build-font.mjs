import { buildGlyphs } from "../glyphs/index.mjs";
import { copyFontMetrics } from "../meta/aesthetics.mjs";
import { assignFontNames } from "../meta/naming.mjs";
import { buildOtl } from "../otl/index.mjs";

import * as Caching from "./caching/index.mjs";
import { CreateEmptyFont } from "./empty-font.mjs";
import { finalizeFont } from "./finalize/index.mjs";
import { convertOtd } from "./otd-conv/index.mjs";

("use strict");
export async function buildFont(argv, para) {
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
}
