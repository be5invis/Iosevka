import { buildGlyphs } from "@iosevka/font-glyphs";
import { copyFontMetrics } from "@iosevka/font-glyphs/aesthetics";
import { buildOtl } from "@iosevka/font-otl";

import { cleanupGlyphStore } from "../cleanup/index.mjs";
import { CreateEmptyFont } from "../font-io/index.mjs";
import { buildCompatLigatures } from "../hb-compat-ligature/index.mjs";
import { assignFontNames } from "../naming/index.mjs";
import { convertOtd } from "../otd-conv/index.mjs";
import { generateTtfaControls } from "../ttfa-controls/index.mjs";
import { validateFontConfigMono } from "../validate/metrics.mjs";

export async function buildFont(para, cache) {
	const baseFont = CreateEmptyFont(para);
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
	const cleanGs = cleanupGlyphStore(cache, para, gs.glyphStore, excludeChars, otl);

	// Convert to TTF
	const font = await convertOtd(baseFont, otl, cleanGs);
	// Build compatibility ligatures
	if (para.compatibilityLigatures) await buildCompatLigatures(para, font);
	// Generate ttfaControls
	const ttfaControls = await generateTtfaControls(cleanGs, font.glyphs);

	// Validation : Metrics
	if (para.forceMonospace) validateFontConfigMono(font);

	return { font, glyphStore: cleanGs, cacheUpdated: cache && cache.isUpdated(), ttfaControls };
}
