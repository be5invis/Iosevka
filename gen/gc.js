"use strict";

module.exports = function gcFont(font, cfg) {
	markSweepOtl(font.GSUB);
	markSweepOtl(font.GPOS);
	const sink = mark(font, cfg);
	sweep(font, sink);
};

function mark(font, cfg) {
	let sink = new Set();
	let glyphCount = 0;

	sink.add(".notdef");
	if (font.glyph_order) {
		for (let idx = 0; idx < font.glyph_order.length; idx++) {
			const g = font.glyph_order[idx];
			if (idx === 0 || /\.notdef$/.test(g)) sink.add(g);
		}
	}

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
						markSubtable(sink, lookup.type, st, cfg);
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
	return sink;
}

function markSweepOtl(table) {
	if (!table || !table.features || !table.lookups) return;
	const accessibleLookupsIds = new Set();
	markLookups(table, accessibleLookupsIds);

	let lookups1 = {};
	for (const l in table.lookups) {
		if (accessibleLookupsIds.has(l)) lookups1[l] = table.lookups[l];
	}
	table.lookups = lookups1;

	let features1 = {};
	for (let f in table.features) {
		const feature = table.features[f];
		if (!feature) continue;
		const featureFiltered = [];
		for (const l of feature) if (accessibleLookupsIds.has(l)) featureFiltered.push(l);
		if (!featureFiltered.length) continue;
		features1[f] = featureFiltered;
	}
	table.features = features1;
}
function markLookups(gsub, sink) {
	if (!gsub || !gsub.features) return;
	for (let f in gsub.features) {
		const feature = gsub.features[f];
		if (!feature) continue;
		for (const l of feature) sink.add(l);
	}
	let loop = 0,
		lookupSetChanged = false;
	do {
		lookupSetChanged = false;
		let sizeBefore = sink.size;
		for (const l of Array.from(sink)) {
			const lookup = gsub.lookups[l];
			if (!lookup || !lookup.subtables) continue;
			if (lookup.type === "gsub_chaining" || lookup.type === "gpos_chaining") {
				for (let st of lookup.subtables) {
					if (!st || !st.apply) continue;
					for (const app of st.apply) sink.add(app.lookup);
				}
			}
		}
		loop++;
		lookupSetChanged = sizeBefore !== sink.size;
	} while (loop < 0xff && lookupSetChanged);
}

function markSubtable(sink, type, st, cfg) {
	switch (type) {
		case "gsub_single":
		case "gsub_multi":
			for (const k in st) if (sink.has(k) && st[k]) sink.add(st[k]);
			break;
		case "gsub_alternate":
			if (!cfg || !cfg.ignoreAltSub) {
				for (const k in st) if (sink.has(k) && st[k]) sink.add(st[k]);
			}
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

function sweep(font, sink) {
	// glyf
	if (font.glyf) {
		const filteredGlyf = {};
		for (const key in font.glyf) {
			if (sink.has(key)) filteredGlyf[key] = font.glyf[key];
		}
		font.glyf = filteredGlyf;
	} else {
		font.glyf = {};
	}

	// GSUB
	sweepOtl(font.GSUB, sink);
}

function sweepOtl(gsub, sink) {
	if (!gsub || !gsub.lookups) return;
	for (const lid in gsub.lookups) {
		const lookup = gsub.lookups[lid];
		if (!lookup.subtables) continue;
		const newSubtables = [];
		for (const st of lookup.subtables) {
			const keep = sweepSubtable(st, lookup.type, sink);
			if (keep) newSubtables.push(st);
		}
		lookup.subtables = newSubtables;
	}
}

function sweepSubtable(st, type, sink) {
	switch (type) {
		case "gsub_ligature": {
			if (!st.substitutions) return false;
			let newSubst = [];
			for (const rule of st.substitutions) {
				let include = true;
				if (!sink.has(rule.to)) include = false;
				for (const from of rule.from) if (!sink.has(from)) include = false;
				if (include) newSubst.push(rule);
			}
			st.substitutions = newSubst;
			return true;
		}
		default: {
			return true;
		}
	}
}
