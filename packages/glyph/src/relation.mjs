import crypto from "crypto";

export const Dotless = {
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
	},
};

export const LowerYDotAtBelow = LinkedGlyphProp("LowerYDotAtBelow");
export const DependentSelector = LinkedGlyphProp("DependentSelector");
export const MathSansSerif = LinkedGlyphProp("MathSansSerif");
export const VS01 = LinkedGlyphProp("VS01");
export const TieMark = LinkedGlyphProp("TieMark");
export const LeaningMark = LinkedGlyphProp("LeaningMark");
export const LeaningMarkSpacer = LinkedGlyphProp("LeaningMarkSpacer");

export const LocalizedForm = {
	SRB: {
		Upright: LinkedGlyphProp("SerbianLocUpright"),
		Italic: LinkedGlyphProp("SerbianLocItalic"),
	},
	BGR: LinkedGlyphProp("BulgarianLoc"),
	BSH: {
		Upright: LinkedGlyphProp("BashkirLocUpright"),
		Italic: LinkedGlyphProp("BashkirLocItalic"),
	},
	CHU: LinkedGlyphProp("ChuvashLoc"),
	IPPH: LinkedGlyphProp("IPALoc"),
};

export const Texture = {
	ExtL: LinkedGlyphProp("TextureExtL"),
	ExtR: LinkedGlyphProp("TextureExtR"),
	ExtLR: LinkedGlyphProp("TextureExtLR"),
	ShrL: LinkedGlyphProp("TextureShrL"),
	ShrR: LinkedGlyphProp("TextureShrR"),
	ShrLR: LinkedGlyphProp("TextureShrLR"),
};

function LinkedGlyphProp(key) {
	return {
		key,
		get(glyph) {
			if (glyph && glyph.related) return glyph.related[key];
			else return null;
		},
		set(glyph, toGid) {
			if (typeof toGid !== "string") throw new Error("Must supply a GID instead of a glyph");
			if (!glyph.related) glyph.related = {};
			glyph.related[key] = toGid;
		},
		amendName(name) {
			return `${key}{${name}}`;
		},
		amendOtName(name) {
			return `${name}.${key}`;
		},
	};
}

export const Nwid = OtlTaggedProp("Nwid", "NWID", "Wide cell");
export const Wwid = OtlTaggedProp("Wwid", "WWID", "Narrow cell");
export const Lnum = OtlTaggedProp("Lnum", "lnum", "Lining number");
export const Onum = OtlTaggedProp("Onum", "onum", "Old-style number");
export const Zero = OtlTaggedProp("Zero", "zero", "Slashed zero");
export const MosaicForm = OtlTaggedProp("MosaicForm", "MOSC", "Mosaic form");
export const AplForm = OtlTaggedProp("AplForm", "APLF", "APL form");
export const NumeratorForm = OtlTaggedProp("Numerator", "numr");
export const DenominatorForm = OtlTaggedProp("Denominator", "dnom");
function OtlTaggedProp(key, otlTag, description) {
	return { ...LinkedGlyphProp(key), tag: otlTag, otlTag, description };
}

export const CvDecompose = DecompositionProp("CvDecompose");
export const PseudoCvDecompose = DecompositionProp("PseudoCvDecompose");
function DecompositionProp(key) {
	return {
		get(glyph) {
			if (glyph && glyph.related) return glyph.related[key];
			else return null;
		},
		set(glyph, composition) {
			if (!Array.isArray(composition)) throw new Error("Must supply a GID array");
			if (!glyph.related) glyph.related = {};
			glyph.related[key] = composition;
		},
		amendOtName(baseName, index) {
			return `${baseName}.d${index}`;
		},
	};
}

export const TieGlyph = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.TieGlyph;
		else return null;
	},
	set(glyph) {
		if (!glyph.related) glyph.related = {};
		glyph.related.TieGlyph = true;
		Joining.or(glyph, Joining.Classes.Mid);
	},
};

function BoolProp(id) {
	return {
		get(glyph) {
			if (glyph && glyph.related) return !!glyph.related[id];
			else return false;
		},
		set(glyph) {
			if (!glyph.related) glyph.related = {};
			glyph.related[id] = true;
		},
	};
}

export const NeqLigationSlashDotted = BoolProp("NeqLigationSlashDotted");
export const OgonekTrY = BoolProp("OgonekTrY");
export const IsSuperscript = BoolProp("IsSuperscript");
export const IsSubscript = BoolProp("IsSubscript");
export const ScheduleLeaningMark = BoolProp("ScheduleLeaningMark");
export const IsCompositeOrLigature = BoolProp("IsCompositeOrLigature");

export const Joining = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.joining || 0;
		else return 0;
	},
	set(glyph, cls) {
		if (!glyph.related) glyph.related = {};
		glyph.related.joining = cls;
	},
	or(glyph, cls) {
		Joining.set(glyph, cls | Joining.get(glyph));
	},
	amendOtName(baseName, cl) {
		switch (cl) {
			case Joining.Classes.Left:
				return `${baseName}.join-l`;
			case Joining.Classes.Right:
				return `${baseName}.join-r`;
			case Joining.Classes.Mid:
				return `${baseName}.join-m`;
			default:
				return baseName;
		}
	},
	Classes: {
		Left: 1,
		Right: 2,
		Mid: 3,
	},
};

export const HintClass = {
	get(glyph) {
		if (glyph && glyph.related) return glyph.related.hintClass;
		else return null;
	},
	set(glyph, script, style) {
		if (!glyph.related) glyph.related = {};
		glyph.related.hintClass = [script, style];
	},
};

///////////////////////////////////////////////////////////////////////////////////////////////////

export const DotlessOrNot = {
	query(glyph) {
		if (Dotless.get(glyph)) return [Dotless];
		return null;
	},
};

export const AnyLocalizedForm = {
	query(glyph) {
		let grs = [];
		if (LocalizedForm.SRB.Upright.get(glyph)) grs.push(LocalizedForm.SRB.Upright);
		if (LocalizedForm.SRB.Italic.get(glyph)) grs.push(LocalizedForm.SRB.Italic);
		if (LocalizedForm.BGR.get(glyph)) grs.push(LocalizedForm.BGR);
		if (LocalizedForm.BSH.Upright.get(glyph)) grs.push(LocalizedForm.BSH.Upright);
		if (LocalizedForm.BSH.Italic.get(glyph)) grs.push(LocalizedForm.BSH.Italic);
		if (LocalizedForm.CHU.get(glyph)) grs.push(LocalizedForm.CHU);
		if (LocalizedForm.IPPH.get(glyph)) grs.push(LocalizedForm.IPPH);
		if (grs.length) return grs;
		return null;
	},
};

export const AnyCv = {
	query(glyph) {
		let ret = [];
		if (glyph && glyph.related && glyph.related.cv) {
			for (const [cv, dst] of glyph.related.cv) {
				ret.push(cv);
			}
		}
		return ret;
	},
	compare(a, b) {
		const ua = a.tag.toUpperCase(),
			ub = b.tag.toUpperCase();
		if (ua < ub) return -1;
		if (ua > ub) return 1;
		return a.rank - b.rank;
	},
};

export const AnyDerivingCv = {
	query(glyph) {
		let ret = [];
		if (glyph && glyph.related && glyph.related.cv) {
			for (const [cv, dst] of glyph.related.cv) {
				if (glyph.related.preventCvDeriving && glyph.related.preventCvDeriving.has(cv))
					continue;
				ret.push(cv);
			}
		}
		return ret;
	},
	hasNonDerivingVariants(glyph) {
		if (glyph && glyph.related && glyph.related.preventCvDeriving) {
			return glyph.related.preventCvDeriving.size > 0;
		}
		return false;
	},
};

export const AnyCvOrCherryPicking = {
	query(glyph) {
		let ret = AnyCv.query(glyph);
		if (Zero.get(glyph)) ret.push(Zero);
		return ret;
	},
};

///////////////////////////////////////////////////////////////////////////////////////////////////

export function getGrTree(gid, grSetList, fnGidToGlyph) {
	if (typeof gid !== "string") throw new TypeError("Must supply a GID");
	let sink = [];
	getGrTreeImpl(gid, grSetList, fnGidToGlyph, sink);
	return sink;
}

function getGrTreeImpl(gid, grSetList, fnGidToGlyph, sink) {
	if (!grSetList.length) return;
	const g = fnGidToGlyph(gid);
	if (!g) return;
	const grs = grSetList[0].query(g);
	getGrTreeImpl(gid, grSetList.slice(1), fnGidToGlyph, sink);
	if (grs && grs.length) {
		for (const gr of grs) {
			sink.push([gr, gid, gr.get(g)]);
			getGrTreeImpl(gr.get(g), grSetList, fnGidToGlyph, sink);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function getGrMesh(gidList, grq, fnGidToGlyph) {
	if (typeof gidList === "string" || !Array.isArray(gidList))
		throw new TypeError(`glyphs must be a glyph array!`);

	const allGrSet = new Set();
	for (const g of gidList) {
		for (const gr of grq.query(fnGidToGlyph(g))) allGrSet.add(gr);
	}
	const allGrList = Array.from(allGrSet).sort(AnyCv.compare).reverse();

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

///////////////////////////////////////////////////////////////////////////////////////////////////

export function createGrDisplaySheet(glyphStore, gn) {
	const glyph = glyphStore.queryByName(gn);
	if (!glyph) return [];
	const glyphIsHidden = /^\./.test(gn);
	if (glyphIsHidden) return [];

	// Query selected typographic features -- mostly NWID and WWID
	let typographicFeatures = [];
	displayQueryPairFeatures(glyph, "Width", Nwid, Wwid, typographicFeatures);
	displayQueryPairFeatures(glyph, "Number Form", Lnum, Onum, typographicFeatures);
	displayQuerySingleFeature(glyph, AplForm, typographicFeatures);
	displayQuerySingleFeature(glyph, MosaicForm, typographicFeatures);
	for (const gr of CvCherryPickingGrs) displayQuerySingleFeature(glyph, gr, typographicFeatures);

	// Query selected character variants
	let charVariantFeatures = [];
	const decomposition = CvDecompose.get(glyph) || PseudoCvDecompose.get(glyph);
	if (decomposition) {
		const tagSet = new Set();
		for (const componentGn of decomposition) {
			const component = glyphStore.queryByName(componentGn);
			if (!component) continue;

			for (const gr of CvCherryPickingGrs)
				displayQuerySingleFeature(component, gr, typographicFeatures);
			queryCvFeatureTagsOf(charVariantFeatures, componentGn, component, tagSet);
		}
	} else {
		queryCvFeatureTagsOf(charVariantFeatures, gn, glyph, null);
	}

	sortFeatureDisplaySheet(typographicFeatures);
	sortFeatureDisplaySheet(charVariantFeatures);

	let charProps = {};
	if (IsCompositeOrLigature.get(glyph)) charProps.isCompositeOrLigature = true;
	return [typographicFeatures, charVariantFeatures, charProps];
}

function sortFeatureDisplaySheet(sheet) {
	return sheet.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
}

function FeatureSeries(name, groups) {
	return { name, groups };
}

function displayQueryPairFeatures(g, name, grCis, grTrans, sink) {
	if (grCis.get(g) || grTrans.get(g)) {
		sink.push(
			FeatureSeries(name, [
				[
					{ css: `'${grCis.otlTag}' 1`, description: grCis.description },
					{ css: `'${grTrans.otlTag}' 1`, description: grTrans.description },
				],
			]),
		);
	}
}
function displayQuerySingleFeature(g, grCis, sink) {
	if (grCis.get(g)) {
		sink.push(
			FeatureSeries(grCis.description, [
				[
					{ css: `'${grCis.otlTag}' 0`, description: grCis.description + " disabled" },
					{ css: `'${grCis.otlTag}' 1`, description: grCis.description + " enabled" },
				],
			]),
		);
	}
}

function queryCvFeatureTagsOf(sink, gid, glyph, tagSet) {
	const cvs = AnyCv.query(glyph).sort(AnyCv.compare);

	let existingFeatures = new Map();
	let existingTargets = new Set();

	for (const gr of cvs) {
		const target = gr.get(glyph);
		if (target === gid) continue;

		if (existingTargets.has(target)) continue;
		existingTargets.add(target);

		let series = existingFeatures.get(gr.tag);
		if (!series) {
			if (tagSet) {
				if (tagSet.has(gr.tag)) continue;
				tagSet.add(gr.tag);
			}
			series = FeatureSeries(gr.tag, [[]]);
			existingFeatures.set(gr.tag, series);
		}

		const featureApp = {
			css: `'${gr.tag}' ${String(gr.rank).padStart(2)}`,
			description: gr.description,
		};
		if (!series.groups[gr.groupRank]) series.groups[gr.groupRank] = [];
		series.groups[gr.groupRank].push(featureApp);
	}
	for (const g of existingFeatures.values()) sink.push(g);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function linkSuffixGr(gs, suffix, gr) {
	const reSuffix = new RegExp("\\." + suffix + "$");
	for (const [gnSuffixed, gSuffixed] of gs.namedEntries()) {
		if (reSuffix.test(gnSuffixed) && !/^\./.test(gnSuffixed)) {
			const gnOriginal = gnSuffixed.replace(reSuffix, "");
			const gOriginal = gs.queryByName(gnOriginal);
			if (!gOriginal) continue;
			gr.set(gOriginal, gnSuffixed);
		}
	}
}

export function linkSuffixPairGr(gs, tagCis, tagTrans, grCis, grTrans) {
	const reTagCis = new RegExp("\\." + tagCis + "$");
	for (const [gnCis, gCis] of gs.namedEntries()) {
		if (reTagCis.test(gnCis) && !/^\./.test(gnCis)) {
			const gnTrans = gnCis.replace(reTagCis, "." + tagTrans);
			const gTrans = gs.queryByName(gnTrans);
			if (!gTrans) continue;
			grTrans.set(gCis, gnTrans);
			grCis.set(gTrans, gnCis);
		}
	}
}

export function linkSingleGlyphPairGr(gs, fromName, toName, gr) {
	const gFrom = gs.queryByName(fromName);
	if (!gFrom) return;
	const gTo = gs.queryByName(toName);
	if (!gTo) return;
	gr.set(gFrom, toName);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function hashCv(g) {
	const hasher = crypto.createHash("sha256");
	for (const gr of AnyCv.query(g)) {
		hasher.update(`${gr.tag}/${gr.rank}:${gr.get(g)}\n`);
	}
	return hasher.digest("hex");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export const SvInheritableRelations = [
	DependentSelector,
	Joining,
	NeqLigationSlashDotted,
	OgonekTrY,
	ScheduleLeaningMark,
];

export const CvCherryPickingGrs = [Zero];
