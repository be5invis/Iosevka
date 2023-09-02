import ttfaRanges from "../../generated/ttfa-ranges.mjs";
import * as Gr from "../../support/gr.mjs";
import { ArrayUtil } from "../../support/utils.mjs";

export async function generateTtfaControls(gsOrig, gs) {
	let ttfaControls = [];

	for (const alignment of ttfaRanges) {
		ttfaControls.push(generateTTFAAlignments(alignment, gsOrig, gs));
	}

	return ttfaControls;
}

function generateTTFAAlignments(alignment, gsOrig, gsTtf) {
	let collectedGlyphs = new Map();
	for (const [lo, hi] of alignment.ranges) {
		for (let lch = lo; lch <= hi; lch++) {
			const go = gsOrig.queryByUnicode(lch);
			if (!go) continue;
			const gd = gsTtf.queryBySourceGlyph(go);
			if (!gd) continue;
			collectedGlyphs.set(go, gd);
		}
	}

	for (;;) {
		let sizeBefore = collectedGlyphs.size;

		for (const [go, gd] of collectedGlyphs) {
			const cvs = Gr.AnyCv.query(go);
			for (const gr of cvs) {
				const gnLinked = gr.get(go);
				if (!gnLinked) continue;
				const goLinked = gsOrig.queryByName(gnLinked);
				if (!goLinked) continue;
				const gdLinked = gsTtf.queryBySourceGlyph(goLinked);
				if (!gdLinked) continue;
				collectedGlyphs.set(goLinked, gdLinked);
			}
		}

		let sizeAfter = collectedGlyphs.size;
		if (sizeAfter <= sizeBefore) break;
	}

	const gOrd = gsTtf.decideOrder();
	const glyphIndices = Array.from(collectedGlyphs.values()).map(gd => gOrd.reverse(gd));
	const glyphIndicesRangesStr = ArrayUtil.toRanges(glyphIndices)
		.map(([lo, hi]) => (lo === hi ? `${lo}` : `${lo}-${hi}`))
		.join(", ");

	const styleAdjustLine = `${alignment.scriptTag} ${alignment.featureTag} @ ${glyphIndicesRangesStr}`;

	return styleAdjustLine;
}
