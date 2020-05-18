const cldr = require("cldr");
const fs = require("fs-extra");
const gatherCov = require("./coverage-export/gather-coverage-data");

// List all the languages that Iosevka supports, but cannot inferred from CLDR data.
const overrideSupportedLanguages = [];

module.exports = async function (charMapPath, charMapItalicPath, charMapObliquePath) {
	const charMap = await fs.readJson(charMapPath);
	const charMapItalic = await fs.readJson(charMapItalicPath);
	const charMapOblique = await fs.readJson(charMapObliquePath);

	const rawCoverage = getRawCoverage(charMap);
	const rawCoverageItalic = getRawCoverage(charMapItalic);
	const rawCoverageOblique = getRawCoverage(charMapOblique);

	return {
		stats: {
			glyphCount: charMap.length,
			codePointCount: rawCoverage.size
		},
		unicodeCoverage: gatherCov(rawCoverage, rawCoverageItalic, rawCoverageOblique),
		languages: Array.from(getSupportedLanguageSet(rawCoverage)).sort()
	};
};

function getSupportedLanguageSet(rawCoverage) {
	const supportLocaleSet = new Set();

	for (const locale of cldr.localeIds) {
		const exemplar = cldr.extractCharacters(locale).exemplar;
		if (!exemplar) continue;
		const basicChars = [...(exemplar.default || [])];
		const fullChars = [
			...basicChars,
			...(exemplar.auxiliary || []),
			...(exemplar.index || []),
			...(exemplar.numbers || []),
			...(exemplar.punctuation || [])
		].join("");

		let fullSupport = true;
		let basicSupport = true;
		for (const ch of basicChars) {
			if (!rawCoverage.has(ch.codePointAt(0))) basicSupport = false;
		}
		for (const ch of fullChars) {
			if (!rawCoverage.has(ch.codePointAt(0))) fullSupport = false;
		}

		if (basicSupport) {
			supportLocaleSet.add(locale);
		}
	}
	for (const loc of supportLocaleSet) {
		const seg = loc.split("_");
		if (seg.length < 2) continue;
		for (let m = 1; m < seg.length; m++) {
			const upperLoc = seg.slice(0, m).join("_");
			if (upperLoc && supportLocaleSet.has(upperLoc)) {
				supportLocaleSet.delete(loc);
			}
		}
	}
	const supportLangSet = new Set(overrideSupportedLanguages);
	for (const loc of supportLocaleSet) {
		const seg = loc.split("_");
		let displayName = null;
		for (let m = 1; m <= seg.length; m++) {
			const upperLoc = seg.slice(0, m).join("_");
			const subDisplayName = cldr.extractLanguageDisplayNames("en")[upperLoc];
			if (subDisplayName)
				displayName = subDisplayName + (upperLoc === loc ? "" : "\u00A0(" + loc + ")");
		}
		if (displayName) supportLangSet.add(displayName);
	}

	return supportLangSet;
}

function getRawCoverage(charMap) {
	const rawCoverage = new Map();
	for (const [gn, codes, tv, cv] of charMap)
		for (const u of codes) rawCoverage.set(u, [gn, tv, cv]);
	return rawCoverage;
}
