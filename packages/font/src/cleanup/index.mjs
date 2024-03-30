import { Nwid, Wwid } from "@iosevka/glyph/relation";

import { gcFont } from "./gc.mjs";
import { finalizeGlyphs } from "./glyphs.mjs";

export function cleanupGlyphStore(cache, para, glyphStore, excludedCodePoints, restFont) {
	assignGrAndCodeRank(glyphStore, Wwid, Nwid);
	assignSubRank(glyphStore);
	glyphStore = gcFont(glyphStore, excludedCodePoints, restFont);
	glyphStore = finalizeGlyphs(cache, para, glyphStore);
	return glyphStore;
}

function assignGrAndCodeRank(glyphStore, ...flatteners) {
	for (const g of glyphStore.glyphs()) {
		g.codeRank = 0xffffffff;
		for (const c of glyphStore.flattenCodes(g, flatteners)) if (c < g.codeRank) g.codeRank = c;
		g.grRank = 0;
		for (let i = 0; i < flatteners.length; i++) if (flatteners[i].get(g)) g.grRank |= 1 << i;
	}
}
function assignSubRank(glyphStore) {
	let sr = 0;
	for (const g of glyphStore.glyphs()) g.subRank = sr++;
}
