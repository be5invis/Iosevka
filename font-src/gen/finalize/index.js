"use strict";

const finalizeGlyphs = require("./glyphs");
const gcFont = require("./gc");

module.exports = function finalizeFont(para, glyphStore, excludedCodePoints, restFont) {
	glyphStore = forceMonospaceIfNeeded(para, glyphStore);
	glyphStore = gcFont(glyphStore, excludedCodePoints, restFont, {});
	glyphStore = finalizeGlyphs(para, glyphStore);
	return glyphStore;
};

function forceMonospaceIfNeeded(para, glyphStore) {
	const unitWidth = Math.round(para.width);
	if (!para.forceMonospace || para.spacing > 0) return glyphStore;
	return glyphStore.filterByGlyph({
		has: g => {
			const gw = Math.round(g.advanceWidth || 0);
			return gw === 0 || gw === unitWidth;
		}
	});
}
