const cldr = require("cldr");
const fs = require("fs-extra");
const gatherCov = require("./coverage-export/gather-coverage-data");

// List all the languages that Iosevka supports, but cannot inferred from CLDR data.
const overrideSupportedLanguages = [];

module.exports = async function (charMapPath) {
	const charMap = await fs.readJson(charMapPath);

	const supportLocaleSet = new Set();
	const codePointSet = new Set();
	for (const ch of charMap) for (const unicode of ch[1]) codePointSet.add(unicode);

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
			if (!codePointSet.has(ch.codePointAt(0))) basicSupport = false;
		}
		for (const ch of fullChars) {
			if (!codePointSet.has(ch.codePointAt(0))) fullSupport = false;
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

	const rawCoverage = new Map();
	for (const [gn, codes, tv, cv] of charMap)
		for (const u of codes) rawCoverage.set(u, [gn, tv, cv]);

	return {
		stats: {
			glyphCount: charMap.length,
			codePointCount: rawCoverage.size
		},
		unicodeCoverage: gatherCov(rawCoverage),
		languages: Array.from(supportLangSet).sort()
	};
};
