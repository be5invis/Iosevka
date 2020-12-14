"use strict";

const finalizeGlyphs = require("./glyphs");
const gcFont = require("./gc");

module.exports = function finalizeFont(para, glyphStore, excludedCodePoints, restFont) {
	glyphStore = gcFont(glyphStore, excludedCodePoints, restFont, {});
	glyphStore = finalizeGlyphs(para, glyphStore);
	validateMonospace(para, glyphStore);
	return glyphStore;
};

// In FontConfig, a font is considered "monospace" if and only if all non-combining characters
//  (AW > 0) have the same width. We use this method to validate whether our "Fixed" subfamilies
//  are properly built.
function validateMonospace(para, glyphStore) {
	if (!para.forceMonospace) return;
	let awSet = new Set();
	for (const g of glyphStore.glyphs()) {
		const aw = Math.round(g.advanceWidth || 0);
		if (aw > 0) awSet.add(aw);
	}
	if (awSet.size > 1) throw new Error("Unreachable! Fixed variant has wide characters");
}
