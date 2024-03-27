import * as Gr from "@iosevka/glyph/relation";
import { ArrayUtil } from "@iosevka/util";

import ttfaRanges from "../generated/ttfa-ranges.mjs";

export async function generateTtfaControls(gsOrig, gsTtf) {
	let ttfaControls = [`# Machine generated. Do not modify.`];

	let alignments = [];
	for (const cfg of ttfaRanges) {
		const alignment = new Alignment(cfg.scriptTag, cfg.featureTag, cfg.ranges);
		alignment.collectDefault(gsOrig, gsTtf);
		alignments.push(alignment);
	}

	for (const go of gsOrig.glyphs()) {
		const hc = Gr.HintClass.get(go);
		if (!hc) continue;
		const gd = gsTtf.queryBySourceGlyph(go);
		if (!gd) continue;
		const [s, f] = hc;
		for (const alignment of alignments) {
			if (s === alignment.scriptTag && f === alignment.featureTag)
				alignment.allGlyphs.set(go, gd);
		}
	}

	for (const alignment of alignments) {
		alignment.extend(gsOrig, gsTtf);
		alignment.write(ttfaControls, gsTtf);
	}

	return ttfaControls.join("\n") + "\n";
}

class Alignment {
	constructor(scriptTag, featureTag, ranges) {
		this.scriptTag = scriptTag;
		this.featureTag = featureTag;
		this.ranges = ranges;

		this.defaultGlyphs = new Map();
		this.allGlyphs = new Map();
	}

	collectDefault(gsOrig, gsTtf) {
		for (const [lo, hi] of this.ranges) {
			for (let lch = lo; lch <= hi; lch++) {
				const go = gsOrig.queryByUnicode(lch);
				if (!go) continue;
				const gd = gsTtf.queryBySourceGlyph(go);
				if (!gd) continue;
				this.allGlyphs.set(go, gd);
				this.defaultGlyphs.set(go, gd);
			}
		}
	}

	extend(gsOrig, gsTtf) {
		for (;;) {
			let sizeBefore = this.allGlyphs.size;

			for (const [go, gd] of this.allGlyphs) {
				const cvs = [
					...Gr.AnyCvOrCherryPicking.query(go),
					Gr.Texture.ExtL,
					Gr.Texture.ExtR,
					Gr.Texture.ExtLR,
					Gr.Texture.ShrL,
					Gr.Texture.ShrR,
					Gr.Texture.ShrLR,
				];
				for (const gr of cvs) {
					const gnLinked = gr.get(go);
					if (!gnLinked) continue;
					const goLinked = gsOrig.queryByName(gnLinked);
					if (!goLinked) continue;
					const gdLinked = gsTtf.queryBySourceGlyph(goLinked);
					if (!gdLinked) continue;
					this.allGlyphs.set(goLinked, gdLinked);
				}
			}

			let sizeAfter = this.allGlyphs.size;
			if (sizeAfter <= sizeBefore) break;
		}
	}

	write(sink, gsTtf) {
		const gOrd = gsTtf.decideOrder();
		let nonDefaultGlyphIndices = [];
		for (const [go, gd] of this.allGlyphs) {
			if (this.defaultGlyphs.has(go)) continue;
			nonDefaultGlyphIndices.push(gOrd.reverse(gd));
		}

		if (!nonDefaultGlyphIndices.length) return;

		const glyphIndicesRangesStr = ArrayUtil.toRanges(nonDefaultGlyphIndices)
			.map(([lo, hi]) => (lo === hi ? `${lo}` : `${lo}-${hi}`))
			.join(", ");

		sink.push(`${this.scriptTag} ${this.featureTag} @ ${glyphIndicesRangesStr}`);
	}
}
