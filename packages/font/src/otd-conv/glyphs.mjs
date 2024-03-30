import * as Geom from "@iosevka/geometry";
import { Point } from "@iosevka/geometry/point";
import { Glyph } from "@iosevka/glyph";
import * as Gr from "@iosevka/glyph/relation";
import { Ot } from "ot-builder";

import * as GlyphName from "./glyph-name.mjs";

export function convertGlyphs(gsOrig) {
	const sortedEntries = Array.from(gsOrig.namedEntries(Gr.Nwid, Gr.Wwid)).sort(byRank);
	const gs = new MappedGlyphStore();
	const cmap = new Ot.Cmap.Table();

	// initialize
	for (const [name, gSrc] of sortedEntries) {
		gs.declare(name, gSrc);
		const us = gsOrig.queryUnicodeOf(gSrc);
		if (us) {
			for (const u of us) {
				if (!(isFinite(u - 0) && u)) continue;
				cmap.unicode.set(u, gs.queryBySourceGlyph(gSrc));
				gs.setPrimaryUnicode(gSrc, u);
			}
		}
	}

	// fill geometry
	for (const [name, gSrc] of sortedEntries) gs.fill(name, gSrc);

	// fill VS
	addVsLinks(gsOrig, gs, cmap, Gr.VS01, 0xfe00);

	// fill glyph names
	gs.fillOtGlyphNames();

	return { glyphs: gs, cmap };
}

class MappedGlyphStore {
	constructor() {
		this.m_nameMapping = new Map();
		this.m_mapping = new Map();
		this.m_primaryUnicodeMapping = new Map();
	}
	declare(name, source) {
		const g = new Ot.Glyph();
		this.m_nameMapping.set(name, g);
		this.m_mapping.set(source, g);
	}
	setPrimaryUnicode(source, u) {
		this.m_primaryUnicodeMapping.set(u, source);
	}
	queryBySourceGlyph(source) {
		if (!source) return undefined;
		return this.m_mapping.get(source);
	}
	queryByName(name) {
		if (!name) return undefined;
		return this.m_nameMapping.get(name);
	}

	// Add directly from Ot.Glyphs
	addOtGlyph(name, g) {
		this.m_nameMapping.set(name, g);
		this.m_mapping.set(new Glyph(name), g);
	}

	decideOrder() {
		const gs = Ot.ListGlyphStoreFactory.createStoreFromList([...this.m_mapping.values()]);
		return gs.decideOrder();
	}
	fill(name, source) {
		const g = this.queryBySourceGlyph(source);
		if (!g) throw new Error("Unreachable");

		// Fill metrics
		g.horizontal = { start: 0, end: source.advanceWidth };

		// Fill Geometry
		if (source.geometry.measureComplexity() & Geom.CPLX_NON_EMPTY) {
			const rs = source.geometry.toReferences();
			if (rs) {
				this.fillReferences(g, rs);
			} else {
				this.fillContours(g, source.geometry.toContours());
			}
		}
	}
	fillOtGlyphNames() {
		let conflictSet = new Set();
		let rev = new Map();
		for (const [u, g] of this.m_primaryUnicodeMapping) rev.set(g, u);
		const glyphsInBuildOrder = Array.from(this.m_mapping).sort(
			([a], [b]) => a.subRank - b.subRank,
		);
		for (const [gSrc, gOt] of glyphsInBuildOrder) gOt.name = undefined;

		// Name by Unicode
		for (const [gSrc, gOt] of glyphsInBuildOrder) {
			gOt.name = GlyphName.byCode(gSrc, rev.get(gSrc), conflictSet);
		}

		// Name by NWID/WWID
		let nNewNames = 0;
		do {
			nNewNames = 0;
			for (const [gSrcBase, gOtBase] of glyphsInBuildOrder) {
				nNewNames += GlyphName.bySpacing(
					gSrcBase,
					gOtBase,
					this.m_nameMapping,
					conflictSet,
				);
			}
		} while (nNewNames > 0);

		// Name by decompose
		do {
			nNewNames = 0;
			for (const [gSrcBase, gOtBase] of glyphsInBuildOrder) {
				nNewNames += GlyphName.byDecompose(
					gSrcBase,
					gOtBase,
					this.m_nameMapping,
					conflictSet,
				);
			}
		} while (nNewNames > 0);

		// Name by Gr
		do {
			nNewNames = 0;
			for (const [gSrcBase, gOtBase] of glyphsInBuildOrder) {
				nNewNames += GlyphName.byGr(gSrcBase, gOtBase, this.m_nameMapping, conflictSet);
			}
		} while (nNewNames > 0);

		// Name rest
		for (const [gSrc, gOt] of glyphsInBuildOrder) {
			gOt.name = GlyphName.byBuildOrder(gSrc.subRank, gSrc, gOt.name);
		}

		// validate
		{
			let gnSet = new Set();
			for (const [gSrc, gOt] of this.m_mapping) {
				if (gnSet.has(gOt.name)) throw new Error("Unreachable! duplicate name " + gOt.name);
				gnSet.add(gOt.name);
			}
		}
	}
	fillReferences(g, rs) {
		const gl = new Ot.Glyph.GeometryList();
		for (const ref of rs) {
			const target = this.queryBySourceGlyph(ref.glyph);
			if (!target) throw new Error("Unreachable: glyph not found");
			const tfm = Ot.Glyph.Transform2X3.Translate(ref.x, ref.y);
			gl.items.push(new Ot.Glyph.TtReference(target, tfm));
		}
		g.geometry = gl;
	}
	fillContours(g, contours) {
		const cs = new Ot.Glyph.ContourSet();
		for (const c of contours) {
			const c1 = [];
			for (const z of c) {
				c1.push(
					Ot.Glyph.Point.create(
						z.x,
						z.y,
						z.type === Point.Type.Quadratic
							? Ot.Glyph.PointType.Quad
							: Ot.Glyph.PointType.Corner,
					),
				);
			}
			cs.contours.push(c1);
		}
		g.geometry = cs;
	}
}

function addVsLinks(gsOrig, gs, cmap, gr, vs) {
	for (const gSrc of gsOrig.glyphs()) {
		const us = gsOrig.queryUnicodeOf(gSrc);
		if (!us) continue;

		const gnSrcLinked = gr.get(gSrc);
		if (!gnSrcLinked) continue;

		const gSrcLinked = gsOrig.queryByName(gnSrcLinked);
		if (!gSrcLinked) continue;

		const gDstLinked = gs.queryBySourceGlyph(gSrcLinked);
		if (!gDstLinked) continue;

		for (const u of us) {
			if (!(isFinite(u - 0) && u)) continue;
			cmap.vs.set(u, vs, gDstLinked);
		}
	}
}

function byRank([gna, a], [gnb, b]) {
	return (
		b.glyphRank - a.glyphRank ||
		a.grRank - b.grRank ||
		a.codeRank - b.codeRank ||
		a.subRank - b.subRank
	);
}
