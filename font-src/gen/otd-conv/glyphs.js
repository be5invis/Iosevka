const { Ot } = require("ot-builder");
const Point = require("../../support/point");

class NamedGlyphStore {
	constructor() {
		this.m_mapping = new Map();
	}
	declare(name) {
		const g = new Ot.Glyph();
		g.name = name;
		this.m_mapping.set(name, g);
	}
	query(name) {
		return this.m_mapping.get(name);
	}

	decideOrder() {
		const gs = Ot.ListGlyphStoreFactory.createStoreFromList([...this.m_mapping.values()]);
		return gs.decideOrder();
	}
	fill(name, data) {
		const g = this.query(name);
		if (!g) return;

		g.horizontal = { start: 0, end: data.advanceWidth };
		if (data.references && data.references.length) {
			this.fillReferences(g, data);
		} else if (data.contours && data.contours.length) {
			this.fillContours(g, data);
		}
	}

	fillReferences(g, data) {
		const gl = new Ot.Glyph.GeometryList();
		for (const ref of data.references) {
			const target = this.query(ref.glyph);
			if (!target) continue;
			const tfm = Ot.Glyph.Transform2X3.Translate(ref.x, ref.y);
			gl.items.push(new Ot.Glyph.TtReference(target, tfm));
		}
		g.geometry = gl;
	}
	fillContours(g, data) {
		const cs = new Ot.Glyph.ContourSet();
		for (const c of data.contours) {
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

	const gs = new NamedGlyphStore();
	const cmap = new Ot.Cmap.Table();

	for (const [origIndex, name, uOrd, g] of sortedEntries) {
		gs.declare(name);
		const us = gsOrig.queryUnicodeOf(g);
		if (us) {
			for (const u of us) {
				if (isFinite(u - 0) && u) {
					cmap.unicode.set(u, gs.query(name));
				}
			}
		}
	}
	for (const [origIndex, name, uOrd, g] of sortedEntries) gs.fill(name, g);

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
