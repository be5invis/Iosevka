import { collectBlockData } from "./block-data.mjs";
import { createCharDataLookup } from "./char-data.mjs";

function findFirstLastChar(lchBlockStart, lchBlockEnd, cov) {
	let lchFirst = 0,
		lchLast = 0;
	for (const [lchFont] of cov) {
		if (lchFont < 0x20 || lchFont < lchBlockStart || lchFont > lchBlockEnd) continue;
		if (!lchFirst || lchFont < lchFirst) lchFirst = lchFont;
		if (!lchLast || lchFont > lchLast) lchLast = lchFont;
	}
	if (!lchFirst || !lchLast) return [0, 0];
	if (lchBlockEnd - lchBlockStart <= 0x100 && lchBlockStart > 0xff) {
		lchFirst = lchBlockStart;
		lchLast = lchBlockEnd;
	}
	const lchStart = (lchFirst >>> 4) << 4;
	const lchEnd = ((lchLast >>> 4) << 4) + 0x10;
	return [lchStart, lchEnd];
}

export async function gatherCoverageData(covUpright, covItalic, covOblique) {
	const featureSeriesStore = new Map();
	const unicodeCoverage = [];

	const lookup = await createCharDataLookup();

	for (const [[lchBlockStart, lchBlockEnd], block] of await collectBlockData()) {
		let blockResults = [];
		const [lchStart, lchEnd] = findFirstLastChar(lchBlockStart, lchBlockEnd, covUpright);
		if (!lchStart || !lchEnd) continue;
		for (let lch = lchStart; lch < lchEnd; lch++) {
			const { gc, charName } = lookup.lookup(lch);
			const cdUpright = covUpright.get(lch);
			const cdItalic = covItalic.get(lch);
			const cdOblique = covOblique.get(lch);
			if (cdUpright && cdItalic && cdOblique) {
				const [glyphName, typoFs, uprightFs, charProps] = cdUpright;
				const [, , italicFs] = cdItalic;
				const [, , obliqueFs] = cdOblique;

				blockResults.push({
					lch,
					gc,
					charName,
					inFont: true,
					glyphName: glyphName,
					...charProps,
					...putFeatSeries(featureSeriesStore, "typographicFeatureSets", typoFs),
					...putFeatSeries(featureSeriesStore, "cvFeatureSetsUpright", uprightFs),
					...putFeatSeries(featureSeriesStore, "cvFeatureSetsItalic", italicFs),
					...putFeatSeries(featureSeriesStore, "cvFeatureSetsOblique", obliqueFs),
				});
			} else {
				blockResults.push({ lch, gc, charName, inFont: false, glyphName: undefined });
			}
		}
		if (blockResults.length) {
			unicodeCoverage.push({
				name: block,
				characters: blockResults.sort((a, b) => a.lch - b.lch),
			});
		}
	}

	let featureSeries = [];
	for (const [id, x] of featureSeriesStore.values()) {
		for (let gr of x.groups) gr.sort((a, b) => a.css.localeCompare(b.css));
		featureSeries[id] = x;
	}

	return { unicodeCoverage, featureSeries };
}

function putFeatSeries(store, k, featSeriesList) {
	if (!featSeriesList) return null;

	let reduced = [];
	for (const _featSeries of featSeriesList) {
		const featSeries = ValidateFeatureSeries(_featSeries);

		const key =
			featSeries.name +
			";;" +
			featSeries.groups.map(g => g.map(a => a.css).join(";;")).join(";;");

		let vs = store.get(key);
		if (vs) {
			reduced.push(vs[0]);
		} else {
			const idNeo = store.size;
			if (!featSeries) continue;
			store.set(key, [idNeo, featSeries]);
			reduced.push(idNeo);
		}
	}

	if (!reduced || !reduced.length) return null;
	return { [k]: reduced };
}

function ValidateFeatureSeries(s) {
	let size = 0;
	let reducedGroups = [];
	for (const g of s.groups) {
		if (!g || !g.length) continue;
		reducedGroups.push(g);
		size += g.length;
	}
	if (!size) return null;
	return { name: s.name, size, groups: reducedGroups };
}
