const blockData = require("./block-data");
const ucdNames = require("unicode-13.0.0/Names");
const ugc = require("unicode-13.0.0/General_Category");

module.exports = function(rawCov) {
	const result = [];
	const inFontCharSet = new Set(rawCov.keys());
	for (const [[lchBlockStart, lchBlockEnd], block] of blockData) {
		let blockResults = [];
		let processed = new Set();

		for (const [lchFont, [gn, ck]] of rawCov) {
			if (lchFont < 0x20 || lchFont < lchBlockStart || lchFont > lchBlockEnd) continue;
			const lchStart = (lchFont >>> 4) << 4;
			const lchEnd = lchStart + 0x10;
			for (let lch = lchStart; lch < lchEnd; lch++) {
				if (processed.has(lch)) continue;
				const chName = ucdNames.get(lch);
				const gc = ugc.get(lch);
				blockResults.push({
					lch,
					charName: chName,
					glyphName: inFontCharSet.has(lch) ? gn : undefined,
					gc,
					ck,
					inFont: inFontCharSet.has(lch)
				});
				processed.add(lch);
			}
		}
		if (blockResults.length) {
			result.push({
				name: block,
				characters: blockResults.sort((a, b) => a.lch - b.lch)
			});
		}
	}
	return result;
};
