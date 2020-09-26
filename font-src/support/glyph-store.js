"use strict";

class GlyphStore {
	constructor() {
		this.nameForward = new Map();
		this.nameBackward = new Map();
		this.encodingForward = new Map();
		this.encodingBackward = new Map();
	}

	glyphs() {
		return this.nameForward.values();
	}
	namedEntries() {
		return this.nameForward.entries();
	}
	*indexedNamedEntries() {
		let i = 0;
		for (const [name, g] of this.nameForward.entries()) {
			yield [i, name, g];
			i++;
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
	queryNameOfUnicode(u) {
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
	filterByGlyph(glyphSet) {
		const gs1 = new GlyphStore();
		for (const [name, g] of this.nameForward) {
			if (!glyphSet.has(g)) continue;
			gs1.addGlyph(name, g);
			const us = this.encodingBackward.get(g);
			if (us) for (const u of us) gs1.encodeGlyph(u, g);
		}
		return gs1;
	}
}

module.exports = GlyphStore;
