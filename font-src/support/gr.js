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

const CvDecompose = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.CvDecompose;
		else return null;
	},
	set(glyph, composition) {
		if (!Array.isArray(composition)) throw new Error("Must supply a GID array");
		if (!glyph.related) glyph.related = {};
		glyph.related.CvDecompose = composition;
	}
};

const CcmpDecompose = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.CcmpDecompose;
		else return null;
	},
	set(glyph, composition) {
		if (!Array.isArray(composition)) throw new Error("Must supply a GID array");
		if (!glyph.related) glyph.related = {};
		glyph.related.CcmpDecompose = composition;
	}
};

const TieMark = {
	tag: "TMRK",
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.TieMark;
		else return null;
	},
	set(glyph, toGid) {
		if (typeof toGid !== "string") throw new Error("Must supply a GID instead of a glyph");
		if (!glyph.related) glyph.related = {};
		glyph.related.TieMark = toGid;
	},
	amendName(name) {
		return `TieMark{${name}}`;
	}
};

const TieGlyph = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.TieMark;
		else return null;
	},
	set(glyph) {
		if (!glyph.related) glyph.related = {};
		glyph.related.TieMark = true;
	}
};

const DoNotDeriveVariants = {
	get(glyph) {
		if (glyph && glyph.related) return !!glyph.related.DoNotDeriveVariants;
		else return false;
	},
	set(glyph) {
		if (!glyph.related) glyph.related = {};
		glyph.related.DoNotDeriveVariants = true;
	}
};

const Radical = {
	get(glyph) {
		if (glyph && glyph.related) return !!glyph.related.radical;
		else return false;
	},
	set(glyph) {
		if (!glyph.related) glyph.related = {};
		glyph.related.radical = true;
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

const AnyDerivingCv = {
	optional: false,
	query(glyph) {
		let ret = [];
		if (glyph && !DoNotDeriveVariants.get(glyph) && glyph.related && glyph.related.cv) {
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

function gidListSame(a, b) {
	for (let j = 0; j < a.length; j++) {
		if (a[j] !== b[j]) return false;
	}
	return true;
}
function gidListMap(gidList, gr, fnGidToGlyph) {
	let effective = false;
	const gidList1 = gidList.slice(0);
	for (let j = 0; j < gidList1.length; j++) {
		const g = fnGidToGlyph(gidList[j]);
		if (g && gr.get(g)) {
			gidList1[j] = gr.get(g);
			effective = true;
		}
	}
	if (effective) return gidList1;
	else return null;
}

function collectGidLists(gidListOrig, gidList, grl, excluded, fnGidToGlyph, sink) {
	if (!grl.length) {
		sink.push(gidList);
		return;
	} else {
		const gr = grl[0],
			grlRest = grl.slice(1);
		collectGidLists(gidListOrig, gidList, grlRest, excluded, fnGidToGlyph, sink);
		if (gr !== excluded) {
			const gidList1 = gidListMap(gidList, gr, fnGidToGlyph);
			if (gidList1 && !gidListSame(gidList, gidList1))
				collectGidLists(gidListOrig, gidList1, grlRest, excluded, fnGidToGlyph, sink);
		}
	}
}

function getGrMesh(gidList, grq, fnGidToGlyph) {
	if (typeof gidList === "string" || !Array.isArray(gidList))
		throw new TypeError(`glyphs must be a glyph array!`);

	const allGrSet = new Set();
	for (const g of gidList) {
		for (const gr of grq.query(fnGidToGlyph(g))) allGrSet.add(gr);
	}

	const allGrList = Array.from(allGrSet);
	let ret = [];
	for (const gr of allGrList) {
		const col = [];
		collectGidLists(gidList, gidList, allGrList, gr, fnGidToGlyph, col);
		if (!col.length) continue;
		for (const from of col) {
			const to = gidListMap(from, gr, fnGidToGlyph);
			if (to && !gidListSame(from, to)) {
				ret.push([gr, from, to]);
			}
		}
	}

	return ret;
}

function createGrDisplaySheet(glyphStore, gid) {
	const glyph = glyphStore.queryByName(gid);
	if (!glyph) return [];

	// Query selected typographic features -- mostly NWID and WWID
	let typographicFeatures = [];
	queryPairFeatureTags(gid, "NWID", "WWID", typographicFeatures);
	queryPairFeatureTags(gid, "lnum", "onum", typographicFeatures);

	let charVariantFeatures = [];
	const decomposition = CvDecompose.get(glyph);
	if (decomposition) {
		const variantFeatureSet = new Set();
		for (const componentGn of decomposition) {
			const component = glyphStore.queryByName(componentGn);
			if (!component) continue;
			const cvRow = queryCvFeatureTagsOf(componentGn, component, variantFeatureSet);
			if (cvRow.length) charVariantFeatures.push(cvRow);
		}
	} else {
		const cvRow = queryCvFeatureTagsOf(gid, glyph, null);
		if (cvRow.length) charVariantFeatures.push(cvRow);
	}

	return [typographicFeatures, charVariantFeatures];
}
function queryPairFeatureTags(gid, f1, f2, sink) {
	const glyphIsHidden = /^\./.test(gid);
	if (!glyphIsHidden) {
		const re1 = new RegExp(`\\.${f1}$`),
			re2 = new RegExp(`\\.${f2}$`);
		if (re1.test(gid) || re2.test(gid)) {
			sink.push(f1, f2);
		}
	}
}
function byTagPreference(a, b) {
	const ua = a.tag.toUpperCase(),
		ub = b.tag.toUpperCase();
	if (ua < ub) return -1;
	if (ua > ub) return 1;
	return 0;
}
function queryCvFeatureTagsOf(gid, glyph, vfs) {
	const cvs = AnyCv.query(glyph).sort(byTagPreference);
	let results = [];
	let existingGlyphs = new Set();
	for (const gr of cvs) {
		const tag = gr.tag;
		const target = gr.get(glyph);
		if (target === gid) continue;
		if (existingGlyphs.has(target)) continue;
		existingGlyphs.add(target);
		if (!vfs) results.push(tag);
		else if (!vfs.has(tag)) {
			results.push(tag);
			vfs.add(tag);
		}
	}
	return results;
}

exports.Dotless = Dotless;
exports.Cv = Cv;
exports.AnyCv = AnyCv;
exports.DotlessOrNot = DotlessOrNot;
exports.getGrTree = getGrTree;
exports.getGrMesh = getGrMesh;
exports.TieMark = TieMark;
exports.TieGlyph = TieGlyph;
exports.DoNotDeriveVariants = DoNotDeriveVariants;
exports.Radical = Radical;
exports.AnyDerivingCv = AnyDerivingCv;
exports.CcmpDecompose = CcmpDecompose;
exports.CvDecompose = CvDecompose;
exports.createGrDisplaySheet = createGrDisplaySheet;
