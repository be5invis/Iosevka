const blockData = require("./block-data");
const ucdNames = require("unicode-13.0.0/Names");
const ugc = require("unicode-13.0.0/General_Category");

module.exports = function (rawCov) {
	const result = [];
	const glyphNameMap = new Map();
	for (const [lchFont, [gn, tv, cv]] of rawCov) {
		glyphNameMap.set(lchFont, [gn, tv, cv]);
	}
	for (const [[lchBlockStart, lchBlockEnd], block] of blockData) {
		let blockResults = [];
		let processed = new Set();

		for (const [lchFont] of rawCov) {
			if (lchFont < 0x20 || lchFont < lchBlockStart || lchFont > lchBlockEnd) continue;
			const lchStart = (lchFont >>> 4) << 4;
			const lchEnd = lchStart + 0x10;
			for (let lch = lchStart; lch < lchEnd; lch++) {
				if (processed.has(lch)) continue;
				const chName = ucdNames.get(lch);
				const gc = ugc.get(lch);
				const inFont = glyphNameMap.get(lch);
				blockResults.push({
					lch,
					gc,
					charName: chName,
					glyphName: inFont ? inFont[0] : undefined,
					inFont: !!inFont,
					typographicVariants: inFont && inFont[1].length ? inFont[1] : undefined,
					charVariants: inFont && inFont[2].length ? inFont[2] : undefined,
				});
				processed.add(lch);
			}
		}
		if (blockResults.length) {
			result.push({
				name: block,
				characters: blockResults.sort((a, b) => a.lch - b.lch),
			});
		}
	}
	return result;
};
