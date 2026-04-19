import { buildGlyphs } from "@iosevka/font-glyphs";
import { copyFontMetrics } from "@iosevka/font-glyphs/aesthetics";
import { buildOtl } from "@iosevka/font-otl";
import { createGrDisplaySheet } from "@iosevka/glyph/relation";
import { createSubsetFilter } from "@iosevka/param";
import { TaskYield } from "@iosevka/util";

import { cleanupGlyphStore } from "../cleanup/index.mjs";
import { CreateEmptyFont } from "../font-io/index.mjs";
import { buildCompatLigatures } from "../hb-compat-ligature/index.mjs";
import { assignFontNames } from "../naming/index.mjs";
import { convertOtd } from "../otd-conv/index.mjs";
import { postProcessFont } from "../post-processing/index.mjs";
import { generateTtfaControls } from "../ttfa-controls/index.mjs";
import { validateFontConfigMono } from "../validate/metrics.mjs";

export async function buildFont(para, cache) {
	const baseFont = CreateEmptyFont(para);
	assignFontNames(baseFont, para.naming, para.isQuasiProportional);
	await TaskYield();

	// Build glyphs
	let { glyphStore, fontMetrics } = buildGlyphs(para);
	copyFontMetrics(fontMetrics, baseFont);
	await TaskYield();

	// Build OTL
	const otl = buildOtl(para, glyphStore);
	await TaskYield();

	// Regulate (like geometry conversion)
	const sf = await createSubsetFilter(para.subset, para.excludedCharRanges);
	glyphStore = cleanupGlyphStore(cache, para, glyphStore, sf, otl);
	await TaskYield();

	// Convert to TTF
	const font = convertOtd(baseFont, otl, glyphStore);
	await TaskYield();
	// Build compatibility ligatures
	if (para.compatibilityLigatures) await buildCompatLigatures(para, font);
	await TaskYield();
	// Apply post processing
	postProcessFont(para, font);
	await TaskYield();
	// Generate ttfaControls
	const ttfaControls = generateTtfaControls(glyphStore, font.glyphs);
	await TaskYield();
	// Generate charmap
	const charMap = getCharMap(glyphStore);
	await TaskYield();

	// Validation : Metrics
	if (para.forceMonospace) validateFontConfigMono(font);
	await TaskYield();

	return { font, charMap, cacheUpdated: cache?.isUpdated(), ttfaControls };
}

function getCharMap(glyphStore) {
	const charMap = [];
	for (const [gn] of glyphStore.namedEntries()) {
		charMap.push([
			gn,
			Array.from(glyphStore.queryUnicodeOfName(gn) || []),
			...createGrDisplaySheet(glyphStore, gn),
		]);
	}
	return charMap;
}
