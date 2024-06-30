import fs from "fs";
import zlib from "zlib";

import { decode } from "@msgpack/msgpack";
import cldr from "cldr";

import { gatherCoverageData } from "./coverage-export/gather-coverage-data.mjs";

// List all the languages that Iosevka supports, but cannot inferred from CLDR data.
const overrideSupportedLanguages = [];
const excludedSupportedLanguages = new Set(["Hinglish"]);

async function readMpCharMap(p) {
	return decode(zlib.gunzipSync(await fs.promises.readFile(p)));
}

function getSupportedLanguageSet(rawCoverage) {
	const supportLocaleSet = getSupportLocaleSet(rawCoverage);
	addSimilarLocales(supportLocaleSet);
	return getSupportedLangs(supportLocaleSet);
}

function getSupportLocaleSet(rawCoverage) {
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
			...(exemplar.punctuation || []),
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
	return supportLocaleSet;
}

function addSimilarLocales(supportLocaleSet) {
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
}

function getSupportedLangs(supportLocaleSet) {
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
		if (displayName && !excludedSupportedLanguages.has(displayName)) {
			supportLangSet.add(displayName);
		}
	}
	return supportLangSet;
}

function getRawCoverage(charMap) {
	const rawCoverage = new Map();
	for (const [gn, codes, tv, cv, cp] of charMap)
		for (const u of codes) rawCoverage.set(u, [gn, tv, cv, cp]);
	return rawCoverage;
}

export async function getCharMapAndSupportedLanguageList(cmpUpright, cmpItalic, cmpOblique) {
	const charMap = await readMpCharMap(cmpUpright);
	const charMapItalic = await readMpCharMap(cmpItalic);
	const charMapOblique = await readMpCharMap(cmpOblique);
	const rawCoverage = getRawCoverage(charMap);
	const rawCoverageItalic = getRawCoverage(charMapItalic);
	const rawCoverageOblique = getRawCoverage(charMapOblique);

	const covData = await gatherCoverageData(rawCoverage, rawCoverageItalic, rawCoverageOblique);

	return {
		unique: {
			featureSeries: covData.featureSeries,
			unicodeCoverage: covData.unicodeCoverage,
		},
		shared: {
			stats: {
				glyphCount: charMap.length,
				codePointCount: rawCoverage.size,
			},
			udatMap: covData.udatMap,
			languages: Array.from(getSupportedLanguageSet(rawCoverage)).sort(),
		},
	};
}
