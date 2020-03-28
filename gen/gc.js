"use strict";

module.exports = function gcFont(font) {
	let sink = new Set();
	let glyphCount = 0;

	sink.add(".notdef", ".null");

	if (font.cmap) {
		for (const k in font.cmap) {
			if (font.cmap[k]) sink.add(font.cmap[k]);
		}
	}
	if (font.cmap_uvs) {
		for (const k in font.cmap_uvs) {
			if (font.cmap_uvs[k]) sink.add(font.cmap_uvs[k]);
		}
	}

	do {
		glyphCount = sink.size;

		if (font.GSUB) {
			for (const l in font.GSUB.lookups) {
				const lookup = font.GSUB.lookups[l];
				if (!lookup || !lookup.subtables) continue;
				if (lookup && lookup.subtables) {
					for (let st of lookup.subtables) {
						markSubtable(sink, lookup.type, st);
					}
				}
			}
		}

		if (font.glyf) {
			for (const g in font.glyf) {
				const glyph = font.glyf[g];
				if (!glyph || !glyph.references) continue;
				for (const ref of glyph.references) if (ref && ref.glyph) sink.add(ref.glyph);
			}
		}

		let glyphCount1 = sink.size;
		if (glyphCount1 === glyphCount) break;
	} while (true);

	if (font.glyf) {
		const filteredGlyf = {};
		for (const key in font.glyf) {
			if (sink.has(key)) filteredGlyf[key] = font.glyf[key];
		}
		font.glyf = filteredGlyf;
	} else {
		font.glyf = {};
	}
};

function markSubtable(sink, type, st) {
	switch (type) {
		case "gsub_single":
		case "gsub_multi":
		case "gsub_alternate":
			for (const k in st) if (sink.has(k) && st[k]) sink.add(st[k]);
			break;
		case "gsub_ligature":
			for (const sub of st.substitutions) {
				let check = true;
				for (const g of sub.from) if (!sink.has(g)) check = false;
				if (check && sub.to) sink.add(sub.to);
			}
			break;
		case "gsub_chaining":
			break;
		case "gsub_reverse":
			if (st.match && st.to) {
				const matchCoverage = st.match[st.inputIndex];
				for (let j = 0; j < matchCoverage.length; j++) {
					if (sink.has(matchCoverage[j]) && st.to[j]) sink.add(st.to[j]);
				}
			}
			break;
	}
}
