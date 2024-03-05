import { Vec2 } from "@iosevka/geometry/point";
import { Ot } from "ot-builder";

export function convertGsub(table, glyphs) {
	return ConvertGsubGposImpl(GsubHandlers, Ot.Gsub.Table, table, glyphs);
}
export function convertGpos(table, glyphs) {
	return ConvertGsubGposImpl(GposHandlers, Ot.Gpos.Table, table, glyphs);
}
export function convertGdef(otdGdef, glyphs) {
	const gdef = new Ot.Gdef.Table();
	gdef.glyphClassDef = new Map();
	for (const gn in otdGdef.glyphClassDef) {
		const g = glyphs.queryByName(gn);
		if (g) gdef.glyphClassDef.set(g, otdGdef.glyphClassDef[gn]);
	}

	gdef.markAttachClassDef = new Map();
	for (const gn in otdGdef.markAttachClassDef) {
		const g = glyphs.queryByName(gn);
		if (g) gdef.markAttachClassDef.set(g, otdGdef.markAttachClassDef[gn]);
	}

	gdef.markGlyphSets = [];
	for (const s of otdGdef.markGlyphSets) {
		const result = new Set();
		for (const gn of s) {
			const g = glyphs.queryByName(gn);
			if (g) result.add(g);
		}
		if (result.size) gdef.markGlyphSets.push(result);
	}
	return gdef;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function ConvertGsubGposImpl(handlers, T, table, glyphs) {
	if (!table) return null;
	const ls = new LookupStore(handlers, glyphs);
	if (table.lookups) {
		if (table.lookupOrder) {
			for (const l of table.lookupOrder) {
				if (!table.lookups[l]) throw new Error(`Cannot find lookup '${l}'`);
				ls.declare(l, table.lookups[l]);
			}
		}
		for (const l in table.lookups) {
			if (!ls.query(l)) throw new Error("Unreachable: lookupOrder must contain everything");
		}
		for (const l in table.lookups) ls.fill(l, table.lookups[l]);
	}
	const fs = new FeatureStore(ls);
	if (table.features) {
		for (const f in table.features) fs.fill(f, table.features[f]);
	}
	const ss = new ScriptLanguageStore(fs);
	if (table.languages) {
		for (const sl in table.languages) ss.fill(sl, table.languages[sl]);
	}
	return new T(ss.extract(), fs.extract(), ls.extract());
}

class ScriptLanguageStore {
	constructor(features) {
		this.featureStore = features;
		this.m_scriptMapping = new Map();
	}
	extract() {
		return this.m_scriptMapping;
	}
	fill(id, data) {
		const scriptTag = id.slice(0, 4);
		const languageTag = id.slice(5, 9).padEnd(4);
		let sr = this.m_scriptMapping.get(scriptTag);
		if (!sr) {
			sr = { defaultLanguage: null, languages: new Map() };
			this.m_scriptMapping.set(scriptTag, sr);
		}
		const lr = this.createLanguageRecord(data);
		if (languageTag === "dflt" || languageTag === "DFLT") sr.defaultLanguage = lr;
		else sr.languages.set(languageTag, lr);
	}
	createLanguageRecord(data) {
		const features = [];
		for (const fid of data.features) {
			const feature = this.featureStore.query(fid);
			if (feature) features.push(feature);
		}
		return {
			requiredFeature: this.featureStore.query(data.requiredFeature) || null,
			features: features,
		};
	}
}
class FeatureStore {
	constructor(lookups) {
		this.lookupStore = lookups;
		this.m_mapping = new Map();
	}
	extract() {
		return Array.from(this.m_mapping.values());
	}
	query(id) {
		return this.m_mapping.get(id);
	}
	fill(id, data) {
		const tag = data.tag;
		const lookups = [];
		for (const lid of data.lookups) {
			const lookup = this.lookupStore.query(lid);
			if (lookup) lookups.push(lookup);
		}
		this.m_mapping.set(id, { tag, lookups });
	}
}
class LookupStore {
	constructor(handlers, glyphs) {
		this.glyphs = glyphs;
		this.m_handlers = handlers;
		this.m_mapping = new Map();
	}
	extract() {
		return Array.from(this.m_mapping.values());
	}
	query(id) {
		return this.m_mapping.get(id);
	}
	declare(id, otdLookup) {
		if (this.m_mapping.has(id)) return;
		const handler = this.m_handlers[otdLookup.type];
		if (!handler) return;
		this.m_mapping.set(id, handler.init());
	}
	fill(id, otdLookup) {
		const dst = this.query(id);
		const handler = this.m_handlers[otdLookup.type];
		if (!dst || !handler) return;
		if (otdLookup.subtables) throw new Error("Unreachable.");
		if (otdLookup.ignoreGlyphs) {
			let s = new Set();
			for (const gn of otdLookup.ignoreGlyphs) {
				const g = this.glyphs.queryByName(gn);
				if (g) s.add(g);
			}
			if (s.size) dst.ignoreGlyphs = s;
		}
		handler.fill(dst, otdLookup, this);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const GsubSingleHandler = {
	init() {
		return new Ot.Gsub.Single();
	},
	fill(dst, src, store) {
		const st = src.substitutions;
		for (const k in st) {
			const from = store.glyphs.queryByName(k);
			const to = store.glyphs.queryByName(st[k]);
			if (from && to) dst.mapping.set(from, to);
		}
	},
};
const GsubMultipleHandler = {
	init() {
		return new Ot.Gsub.Multiple();
	},
	fill(dst, src, store) {
		const st = src.substitutions;
		for (const k in st) {
			const from = store.glyphs.queryByName(k);
			const to = mapGlyphListAll(st[k], store);
			if (!from || !to) continue;
			dst.mapping.set(from, to);
		}
	},
};
const GsubAlternateHandler = {
	init() {
		return new Ot.Gsub.Alternate();
	},
	fill: GsubMultipleHandler.fill,
};
const GsubLigatureHandler = {
	init() {
		return new Ot.Gsub.Ligature();
	},
	fill(dst, src, store) {
		const st = src.substitutions;
		for (const { from: _from, to: _to } of st) {
			const to = store.glyphs.queryByName(_to);
			const from = mapGlyphListAll(_from, store);
			if (!from || !to) continue;
			dst.mapping.push({ from, to });
		}
	},
};
const GsubChainingHandler = {
	init() {
		return new Ot.Gsub.Chaining();
	},
	fill(dst, src, store) {
		out: for (const st of src.rules) {
			const match = [];
			for (const m of st.match) {
				const m1 = mapGlyphListSome(m, store);
				if (!m1) continue out;
				match.push(new Set(m1));
			}
			const inputBegins = st.inputBegins;
			const inputEnds = st.inputEnds;
			const applications = [];
			for (const ap of st.apply) {
				if (!ap.lookup.name) throw new Error("Unreachable: lookup name must not be null");
				const lookup = store.query(ap.lookup.name);
				if (!lookup) throw new Error(`Cannot find lookup '${ap.lookup.name}'`);
				applications.push({ at: ap.at - inputBegins, apply: lookup });
			}
			dst.rules.push({ match, inputBegins, inputEnds, applications });
		}
	},
};
const GsubReverseHandler = {
	init() {
		return new Ot.Gsub.ReverseSub();
	},
	fill(dst, src, store) {
		out: for (const st of src.rules) {
			const match = [];
			const doSubAt = st.inputIndex;
			const replacement = new Map();
			for (let j = 0; j < st.match.length; j++) {
				{
					const m1 = new Set();
					for (let k = 0; k < st.match[j].length; k++) {
						const gFrom = store.glyphs.queryByName(st.match[j][k]);
						if (gFrom) m1.add(gFrom);
					}
					if (!m1.size) continue out;
					match.push(m1);
				}
				if (j === doSubAt) {
					for (let k = 0; k < st.match[j].length; k++) {
						const gFrom = store.glyphs.queryByName(st.match[j][k]);
						const gTo = store.glyphs.queryByName(st.to[k]);
						if (!gFrom) continue;
						if (gTo) {
							replacement.set(gFrom, gTo);
						} else {
							replacement.set(gFrom, gFrom);
						}
					}
				}
			}
			dst.rules.push({ match, doSubAt, replacement });
		}
	},
};

function mapGlyphListAll(gl, store) {
	const out = [];
	for (const item of gl) {
		const fg = store.glyphs.queryByName(item);
		if (!fg) return null;
		out.push(fg);
	}
	return out;
}
function mapGlyphListSome(gl, store) {
	const out = [];
	for (const item of gl) {
		const fg = store.glyphs.queryByName(item);
		if (!fg) continue;
		out.push(fg);
	}
	if (!out.length) return null;
	return out;
}
const GsubHandlers = {
	gsub_single: GsubSingleHandler,
	gsub_multiple: GsubMultipleHandler,
	gsub_alternate: GsubAlternateHandler,
	gsub_ligature: GsubLigatureHandler,
	gsub_chaining: GsubChainingHandler,
	gsub_reverse: GsubReverseHandler,
};

///////////////////////////////////////////////////////////////////////////////////////////////////

const GposMarkToBaseHandler = {
	init() {
		return new Ot.Gpos.MarkToBase();
	},
	fill(dst, src, store) {
		const mm = collectClassMap(src.marks);
		dst.marks = convertMarkRecords(src.marks, mm, store);
		dst.bases = convertBaseRecords(src.bases, mm, store);
	},
};
const GposMarkToMarkHandler = {
	init() {
		return new Ot.Gpos.MarkToMark();
	},
	fill(dst, src, store) {
		const mm = collectClassMap(src.marks);
		dst.marks = convertMarkRecords(src.marks, mm, store);
		dst.baseMarks = convertBaseRecords(src.bases, mm, store);
	},
};
function collectClassMap(marks) {
	let n = 0;
	const m = new Map();
	for (const gn in marks) {
		const mark = marks[gn];
		if (!m.has(mark.class)) {
			m.set(mark.class, n);
			n++;
		}
	}
	return m;
}
function convertMarkRecords(marks, mm, store) {
	const out = new Map();
	for (const gn in marks) {
		const mark = marks[gn];
		const g = store.glyphs.queryByName(gn);
		if (!g) continue;
		let markAnchors = [];
		markAnchors[mm.get(mark.class)] = Vec2.from(mark);
		out.set(g, { markAnchors: markAnchors });
	}
	return out;
}
function convertBaseRecords(bases, mm, store) {
	const out = new Map();
	for (const gn in bases) {
		const baseObj = bases[gn];
		const g = store.glyphs.queryByName(gn);
		if (!g) continue;
		const baseArray = [];
		for (const bkStr in baseObj) {
			baseArray[mm.get(bkStr)] = baseObj[bkStr];
		}
		out.set(g, { baseAnchors: baseArray });
	}
	return out;
}
const GposHandlers = {
	gpos_mark_to_base: GposMarkToBaseHandler,
	gpos_mark_to_mark: GposMarkToMarkHandler,
};
