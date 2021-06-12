"use strict";

const finalizeGlyphs = require("./glyphs");
const gcFont = require("./gc");
const { Nwid, Wwid } = require("../../support/gr");

module.exports = function finalizeFont(cache, para, glyphStore, excludedCodePoints, restFont) {
	assignGrAndCodeRank(glyphStore, Nwid, Wwid);
	assignSubRank(glyphStore);
	glyphStore = gcFont(glyphStore, excludedCodePoints, restFont, {});
	glyphStore = finalizeGlyphs(cache, para, glyphStore);
	validateMonospace(para, glyphStore);
	return glyphStore;
};

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

// In FontConfig, a font is considered "monospace" if and only if all non-combining characters
//  (AW > 0) have the same width. We use this method to validate whether our "Fixed" subfamilies
//  are properly built.
function validateMonospace(para, glyphStore) {
	if (!para.forceMonospace) return;
	let awSet = new Set();
	for (const [u, g] of glyphStore.encodedEntries()) {
		const aw = Math.round(g.advanceWidth || 0);
		if (aw > 0) awSet.add(aw);
	}
	if (awSet.size > 1) throw new Error("Unreachable! Fixed variant has wide characters");
}
