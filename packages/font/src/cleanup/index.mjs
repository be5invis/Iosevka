import { Nwid, Wwid } from "@iosevka/glyph/relation";

import { gcFont } from "./gc.mjs";

export function cleanupGlyphStore(glyphStore, subsetFilter, restFont) {
	assignGrAndCodeRank(glyphStore, Wwid, Nwid);
	assignSubRank(glyphStore);
	glyphStore = gcFont(glyphStore, subsetFilter, restFont);
	return glyphStore;
}

// The following glyph ordering is optimized for file size. We use this following order:
//  - .notdef and .null
//  - ASCII and Latin-1 mapped glyphs
//  - Glyphs sorted by advance width, from less frequent to more frequent (saving HMTX bytes)
//    - In each chunk
//      - Glyphs sorted by code point, from less to more (saving cmap bytes)

function assignGrAndCodeRank(glyphStore, ...flatteners) {
	const ms = new MetricFrequencyStat();
	for (const g of glyphStore.glyphs()) ms.add(g);
	ms.sort();

	for (const g of glyphStore.glyphs()) {
		g.codeRankHi = 0xffffffff;
		g.codeRankLo = 0xffffffff;
		for (const c of glyphStore.flattenCodes(g, flatteners)) {
			if (c < 0x100) {
				if (c < g.codeRankHi) g.codeRankHi = c;
			} else {
				if (c < g.codeRankLo) g.codeRankLo = c;
			}
		}

		g.metricRank = ms.getRank(g.advanceWidth);
	}
}
function assignSubRank(glyphStore) {
	let sr = 0;
	for (const g of glyphStore.glyphs()) g.subRank = sr++;
}

class MetricFrequencyStat {
	constructor() {
		this.m = new Map();
		this.sortedMap = new Map(); // metric -> freq index
	}
	add(glyph) {
		glyph.advanceWidth = Math.round(glyph.advanceWidth);
		const m = glyph.advanceWidth;
		this.m.set(m, (this.m.get(m) || 0) + 1);
	}
	sort() {
		const sortedMapEntriesList = [...this.m.entries()].sort((a, b) => a[1] - b[1]);
		for (let i = 0; i < sortedMapEntriesList.length; i++) {
			const [m] = sortedMapEntriesList[i];
			this.sortedMap.set(m, i);
		}
	}
	getRank(m) {
		return this.sortedMap.get(m) ?? 0xffffffff;
	}
}
