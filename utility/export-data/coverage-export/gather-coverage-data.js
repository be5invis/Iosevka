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
					const interleaved = interleaveCharacterVariants(
						new Set(charVariantsUpright),
						new Set(charVariantsItalic),
						new Set(charVariantsOblique)
					);
					blockResults.push({
						lch,
						gc,
						charName: chName,
						inFont: true,
						glyphName: glyphName,
						typographicVariants: typographicVariants,
						charVariants: interleaved.common,
						charVariantsUpright: interleaved.uprightSpecific,
						charVariantsItalic: interleaved.italicSpecific,
						charVariantsOblique: interleaved.obliqueSpecific
					});
				} else {
					blockResults.push({
						lch,
						gc,
						charName: chName,
						inFont: false,
						glyphName: undefined,
						typographicVariants: undefined,
						charVariants: undefined,
						charVariantsUpright: undefined,
						charVariantsItalic: undefined,
						charVariantsOblique: undefined
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

function interleaveCharacterVariants(up, it, ob) {
	const common = new Set();
	for (const cv of up) {
		if (it.has(cv) && ob.has(cv)) common.add(cv);
	}
	const upS = new Set(),
		itS = new Set(),
		obS = new Set();
	for (const cv of up) if (!common.has(cv)) upS.add(cv);
	for (const cv of it) if (!common.has(cv)) itS.add(cv);
	for (const cv of ob) if (!common.has(cv)) obS.add(cv);

	return {
		common: [...common],
		uprightSpecific: [...upS],
		italicSpecific: [...itS],
		obliqueSpecific: [...obS]
	};
}
