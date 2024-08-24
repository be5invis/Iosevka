export class GlyphStore {
	constructor() {
		this.nameForward = new Map();
		this.nameBackward = new Map();
		this.encodingForward = new Map();
		this.encodingBackward = new Map();
	}
	get size() {
		return this.nameForward.size;
	}
	glyphs() {
		return this.nameForward.values();
	}
	namedEntries() {
		return this.nameForward.entries();
	}
	*namedEntriesWithFilter(fn) {
		for (const [name, g] of this.nameForward.entries()) {
			if (fn(name, g)) yield [name, g];
		}
	}
	glyphNames() {
		return this.nameForward.keys();
	}
	*encodedEntries() {
		for (const [u, g] of this.encodingForward.entries()) {
			const name = this.nameBackward.get(g);
			if (name) yield [u, name, g];
		}
	}
	*flattenCodes(g, flatteners) {
		{
			const codes = this.encodingBackward.get(g);
			if (codes) for (const c of codes) yield c;
		}
		for (const gr of flatteners) {
			const gn = gr.get(g);
			if (!gn) continue;
			const g2 = this.nameForward.get(gn);
			if (!g2) continue;
			const codes2 = this.encodingBackward.get(g2);
			if (codes2) for (const c of codes2) yield c;
		}
	}
	addGlyph(name, g) {
		this.nameForward.set(name, g);
		this.nameBackward.set(g, name);
	}
	queryByName(name) {
		return this.nameForward.get(name);
	}
	queryByNameEnsured(name) {
		const g = this.nameForward.get(name);
		if (!g) throw new Error(`Glyph ${name} doesn't exist.`);
		return g;
	}
	ensureExists(name) {
		const g = this.nameForward.get(name);
		if (!g) throw new Error(`Glyph ${name} doesn't exist.`);
		return name;
	}
	queryNameOf(g) {
		return this.nameBackward.get(g);
	}
	deleteGlyph(g) {
		const name = this.nameBackward.get(g);
		this.nameBackward.delete(g);
		if (name) this.nameForward.delete(g);
		this.deleteUnicodeAssignmentsOf(g);
	}
	deleteGlyphByName(name) {
		const g = this.nameForward.get(name);
		this.nameForward.delete(g);
		if (g) {
			this.nameBackward.delete(g);
			this.deleteUnicodeAssignmentsOf(g);
		}
	}
	encodeGlyph(u, g) {
		this.encodingForward.set(u, g);
		let s = this.encodingBackward.get(g);
		if (!s) {
			s = new Set();
			this.encodingBackward.set(g, s);
		}
		s.add(u);
	}
	queryByUnicode(u) {
		return this.encodingForward.get(u);
	}
	queryNameByUnicode(u) {
		const g = this.queryByUnicode(u);
		if (!g) return undefined;
		return this.queryNameOf(g);
	}
	queryUnicodeOf(g) {
		const s = this.encodingBackward.get(g);
		if (!s || !s.size) return null;
		return s;
	}
	queryUnicodeOfName(name) {
		const g = this.queryByName(name);
		if (!g) return undefined;
		return this.queryUnicodeOf(g);
	}
	queryUnicodeArrayOfName(name) {
		return [...this.queryUnicodeOfName(name)];
	}
	deleteUnicodeAssignmentsOf(g) {
		const s = this.nameBackward.get(g);
		if (s) for (const u of s) this.encodingForward.delete(u);
		this.encodingBackward.delete(g);
	}
	filterByName(nameSet) {
		const gs1 = new GlyphStore();
		for (const [name, g] of this.nameForward) {
			if (!nameSet.has(name)) continue;
			gs1.addGlyph(name, g);
			const us = this.encodingBackward.get(g);
			if (us) for (const u of us) gs1.encodeGlyph(u, g);
		}
		return gs1;
	}
}
