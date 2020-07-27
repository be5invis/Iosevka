const blockData = require("./block-data");
const ucdNames = require("unicode-13.0.0/Names");
const ugc = require("unicode-13.0.0/General_Category");

module.exports = function (covUpright, covItalic, covOblique) {
	const result = [];
	for (const [[lchBlockStart, lchBlockEnd], block] of blockData) {
		let blockResults = [];
		let processed = new Set();

		for (const [lchFont] of covUpright) {
			if (lchFont < 0x20 || lchFont < lchBlockStart || lchFont > lchBlockEnd) continue;
			const lchStart = (lchFont >>> 4) << 4;
			const lchEnd = lchStart + 0x10;
			for (let lch = lchStart; lch < lchEnd; lch++) {
				if (processed.has(lch)) continue;
				const chName = ucdNames.get(lch);
				const gc = ugc.get(lch);
				const cdUpright = covUpright.get(lch);
				const cdItalic = covItalic.get(lch);
				const cdOblique = covOblique.get(lch);
				if (cdUpright && cdItalic && cdOblique) {
					const [glyphName, typographicVariants, charVariantsUpright] = cdUpright;
					const [, , charVariantsItalic] = cdItalic;
					const [, , charVariantsOblique] = cdOblique;
					blockResults.push({
						lch,
						gc,
						charName: chName,
						inFont: true,
						glyphName: glyphName,
						typographicVariants: typographicVariants,
						charVariantsUpright,
						charVariantsItalic,
						charVariantsOblique
					});
				} else {
					blockResults.push({
						lch,
						gc,
						charName: chName,
						inFont: false,
						glyphName: undefined
					});
				}
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
