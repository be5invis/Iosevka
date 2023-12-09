import { buildGlyphs } from "@iosevka/font-glyphs";
import { copyFontMetrics } from "@iosevka/font-glyphs/aesthetics";
import { buildOtl } from "@iosevka/font-otl";
import * as Caching from "@iosevka/geometry-cache";

import { finalizeFont } from "./finalize/index.mjs";
import { CreateEmptyFont } from "./font-io/index.mjs";
import { assignFontNames } from "./naming/index.mjs";
import { convertOtd } from "./otd-conv/index.mjs";
import { generateTtfaControls } from "./ttfa-controls/index.mjs";

export async function buildFont(argv, para) {
	const baseFont = CreateEmptyFont(argv);
	assignFontNames(baseFont, para.naming, para.isQuasiProportional);

	// Build glyphs
	const gs = buildGlyphs(para);
	copyFontMetrics(gs.fontMetrics, baseFont);

	// Build OTL
	const otl = buildOtl(para, gs.glyphStore);

	// Regulate (like geometry conversion)
	const excludeChars = new Set();
	if (para.excludedCharRanges) {
		for (const [start, end] of para.excludedCharRanges) {
			for (let p = start; p <= end; p++) excludeChars.add(p);
		}
	}
	const cache = await Caching.load(argv.iCache, argv.menu.version, argv.cacheFreshAgeKey);
	const finalGs = finalizeFont(cache, para, gs.glyphStore, excludeChars, otl);
	if (cache.isUpdated()) await Caching.save(argv.oCache, argv.menu.version, cache, true);

	// Convert to TTF
	const font = await convertOtd(baseFont, otl, finalGs);
	const ttfaControls = await generateTtfaControls(finalGs, font.glyphs);
	return { font, glyphStore: finalGs, cacheUpdated: cache.isUpdated(), ttfaControls };
}
