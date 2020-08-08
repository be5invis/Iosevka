const blockData = require("./block-data");
const ucdNames = require("unicode-13.0.0/Names");
const ugc = require("unicode-13.0.0/General_Category");

module.exports = function (covUpright, covItalic, covOblique) {
	const result = [];
	for (const [[lchBlockStart, lchBlockEnd], block] of blockData) {
		let blockResults = [];
		let lchFirst = 0,
			lchLast = 0;

		for (const [lchFont] of covUpright) {
			if (lchFont < 0x20 || lchFont < lchBlockStart || lchFont > lchBlockEnd) continue;
			if (!lchFirst || lchFont < lchFirst) lchFirst = lchFont;
			if (!lchLast || lchFont > lchLast) lchLast = lchFont;
		}
		if (!lchFirst || !lchLast) continue;

		if (lchBlockEnd - lchBlockStart <= 0x100 && lchBlockStart > 0xff) {
			(lchFirst = lchBlockStart), (lchLast = lchBlockEnd);
		}
		const lchStart = (lchFirst >>> 4) << 4;
		const lchEnd = ((lchLast >>> 4) << 4) + 0x10;

		for (let lch = lchStart; lch < lchEnd; lch++) {
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
