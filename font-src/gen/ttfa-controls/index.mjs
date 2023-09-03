import ttfaRanges from "../../generated/ttfa-ranges.mjs";
import * as Gr from "../../support/gr.mjs";
import { ArrayUtil } from "../../support/utils.mjs";

export async function generateTtfaControls(gsOrig, gs) {
	let ttfaControls = [`# Machine generated. Do not modify.`];

	for (const alignment of ttfaRanges) {
		generateTTFAAlignments(ttfaControls, alignment, gsOrig, gs);
	}

	return ttfaControls;
}

function generateTTFAAlignments(sink, alignment, gsOrig, gsTtf) {
	let allGlyphs = new Map();
	let defaultGlyphs = new Map();
	for (const [lo, hi] of alignment.ranges) {
		for (let lch = lo; lch <= hi; lch++) {
			const go = gsOrig.queryByUnicode(lch);
			if (!go) continue;
			const gd = gsTtf.queryBySourceGlyph(go);
			if (!gd) continue;
			allGlyphs.set(go, gd);
			defaultGlyphs.set(go, gd);
		}
	}

	for (;;) {
		let sizeBefore = allGlyphs.size;

		for (const [go, gd] of allGlyphs) {
			const cvs = Gr.AnyCv.query(go);
			for (const gr of cvs) {
				const gnLinked = gr.get(go);
				if (!gnLinked) continue;
				const goLinked = gsOrig.queryByName(gnLinked);
				if (!goLinked) continue;
				const gdLinked = gsTtf.queryBySourceGlyph(goLinked);
				if (!gdLinked) continue;
				allGlyphs.set(goLinked, gdLinked);
			}
		}

		let sizeAfter = allGlyphs.size;
		if (sizeAfter <= sizeBefore) break;
	}

	const gOrd = gsTtf.decideOrder();
	let nonDefaultGlyphIndices = [];
	for (const [go, gd] of allGlyphs) {
		if (defaultGlyphs.has(go)) continue;
		nonDefaultGlyphIndices.push(gOrd.reverse(gd));
	}

	if (!nonDefaultGlyphIndices.length) return;

	const glyphIndicesRangesStr = ArrayUtil.toRanges(nonDefaultGlyphIndices)
		.map(([lo, hi]) => (lo === hi ? `${lo}` : `${lo}-${hi}`))
		.join(", ");

	sink.push(`${alignment.scriptTag} ${alignment.featureTag} @ ${glyphIndicesRangesStr}`);
}
