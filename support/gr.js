"use strict";

const Dotless = {
	tag: "dtls",
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.dotless;
		else return null;
	},
	set(glyph, toGid) {
		if (typeof toGid !== "string") throw new Error("Must supply a GID instead of a glyph");
		if (!glyph.related) glyph.related = {};
		glyph.related.dotless = toGid;
	},
	amendName(name) {
		return name + ".dotless";
	}
};

const CvTagCache = new Map();
function Cv(tag) {
	if (CvTagCache.has(tag)) return CvTagCache.get(tag);
	const rel = {
		tag,
		get(glyph) {
			if (glyph && glyph.related && glyph.related.cv) return glyph.related.cv[tag];
			else return null;
		},
		set(glyph, toGid) {
			if (typeof toGid !== "string") throw new Error("Must supply a GID instead of a glyph");
			if (!glyph.related) glyph.related = {};
			if (!glyph.related.cv) glyph.related.cv = {};
			glyph.related.cv[tag] = toGid;
		},
		amendName(name) {
			return name + "." + tag;
		}
	};
	CvTagCache.set(tag, rel);
	return rel;
}

const DotlessOrNot = {
	optional: true,
	query(glyph) {
		if (Dotless.get(glyph)) return [Dotless];
		return null;
	}
};

const AnyCv = {
	optional: false,
	query(glyph) {
		let ret = [];
		if (glyph && glyph.related && glyph.related.cv) {
			for (const tag in glyph.related.cv) {
				const rel = Cv(tag);
				if (rel.get(glyph)) ret.push(rel);
			}
		}
		return ret;
	}
};

function getGrTreeImpl(gid, grSetList, fnGidToGlyph, sink) {
	if (!grSetList.length) return;
	const g = fnGidToGlyph(gid);
	if (!g) return;
	const grq = grSetList[0];
	const grs = grq.query(g);
	if ((!grs || !grs.length) && grq.optional) {
		getGrTreeImpl(gid, grSetList.slice(1), fnGidToGlyph, sink);
	} else if (grs && grs.length) {
		if (grq.optional) {
			getGrTreeImpl(gid, grSetList.slice(1), fnGidToGlyph, sink);
		}
		for (const gr of grs) {
			sink.push([gr, gid, gr.get(g)]);
			getGrTreeImpl(gr.get(g), grSetList.slice(1), fnGidToGlyph, sink);
		}
	}
}
function getGrTree(gid, grSetList, fnGidToGlyph) {
	if (typeof gid !== "string") throw new TypeError("Must supply a GID");
	let sink = [];
	getGrTreeImpl(gid, grSetList, fnGidToGlyph, sink);
	return sink;
}

function getMesh(glyphs, grs) {
	if (typeof glyphs === "string" || !Array.isArray(glyphs))
		throw new TypeError(`glyphs must be a glyph array!`);
	const relSet = new Set();
	for (const g of glyphs) for (const gr of grs.query(g)) relSet.add(gr);
}

exports.Dotless = Dotless;
exports.Cv = Cv;
exports.AnyCv = AnyCv;
exports.DotlessOrNot = DotlessOrNot;
exports.getGrTree = getGrTree;
