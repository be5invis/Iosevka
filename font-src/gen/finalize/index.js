"use strict";

const finalizeGlyphs = require("./glyphs");
const gcFont = require("./gc");

module.exports = function finalizeFont(para, glyphStore, excludedCodePoints, restFont) {
	glyphStore = gcFont(glyphStore, excludedCodePoints, restFont, {});
	glyphStore = finalizeGlyphs(para, glyphStore);
	validateMonospace(para, glyphStore);
	return glyphStore;
};

function validateMonospace(para, glyphStore) {
	if (!para.forceMonospace) return;
	let awSet = new Set();
	for (const g of glyphStore.glyphs()) {
		awSet.add(Math.round(g.advanceWidth || 0));
	}
	if (awSet.size > 2) {
		throw new Error("Unreachable! Fixed variant has wide characters");
	}
}
