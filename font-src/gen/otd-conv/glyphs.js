const { Ot } = require("ot-builder");
const Point = require("../../support/point");
const { Joining } = require("../../support/gr");

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
		this.m_primaryUnicodeMapping.set(source, u);
	}
	queryBySourceGlyph(source) {
		return this.m_mapping.get(source);
	}
	queryByName(name) {
		return this.m_nameMapping.get(name);
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
		if (source.geometry.isEmpty()) return;
		const rs = source.geometry.asReferences();
		if (rs) {
			this.fillReferences(g, rs);
		} else {
			this.fillContours(g, source.geometry.asContours());
		}
	}
	fillOtGlyphNames() {
		let gid = 0;
		let conflictSet = new Set();
		for (const [gSrc, gOt] of this.m_mapping) {
			gOt.name = this.nameSingleGlyph(gid, gSrc, conflictSet);
			gid++;
		}
	}

	nameSingleGlyph(gid, gSrc, conflictSet) {
		if (gid === 0) return ".notdef";
		if (gid === 1) return ".null";

		let preferredName = null;
		let primaryUnicode = this.m_primaryUnicodeMapping.get(gSrc);
		if (primaryUnicode) {
			preferredName = `u${formatCodePointHex(primaryUnicode)}`;
		}
		if (preferredName && !conflictSet.has(preferredName)) {
			conflictSet.add(preferredName);
		} else {
			preferredName = `.gid${gid}`;
		}

		preferredName = Joining.amendOtName(preferredName, Joining.get(gSrc));
		return preferredName;
	}

	fillReferences(g, rs) {
		const gl = new Ot.Glyph.GeometryList();
		for (const ref of rs) {
			const target = this.queryBySourceGlyph(ref.glyph);
			if (!target) throw new Error("Unreachable");
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
							: Ot.Glyph.PointType.Corner
					)
				);
			}
			cs.contours.push(c1);
		}
		g.geometry = cs;
	}
}

module.exports = convertGlyphs;
function convertGlyphs(gsOrig) {
	const sortedEntries = Array.from(gsOrig.indexedNamedEntries())
		.map(([j, gn, g]) => [j, gn, queryOrderingUnicode(gsOrig, g), g])
		.sort(byRank);

	const gs = new MappedGlyphStore();
	const cmap = new Ot.Cmap.Table();

	for (const [origIndex, name, uOrd, gSrc] of sortedEntries) {
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
	for (const [origIndex, name, uOrd, gSrc] of sortedEntries) gs.fill(name, gSrc);
	gs.fillOtGlyphNames();
	return { glyphs: gs, cmap };
}
function queryOrderingUnicode(gs, g) {
	const us = gs.queryUnicodeOf(g);
	if (us && us.size) return Array.from(us).sort((a, b) => a - b)[0];
	else return 0xffffff;
}
function byRank([ja, gna, ua, a], [jb, gnb, ub, b]) {
	return (
		(b.glyphRank || 0) - (a.glyphRank || 0) || (ua || 0) - (ub || 0) || (ja || 0) - (jb || 0)
	);
}

function formatCodePointHex(u) {
	return u.toString(16).padStart(4, "0").toUpperCase();
}
