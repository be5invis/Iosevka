import * as Geom from "@iosevka/geometry";
import { Transform } from "@iosevka/geometry/transform";

///////////////////////////////////////////////////////////////////////////////////////////////////

export function finalizeGlyphs(cache, para, glyphStore) {
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);
	regulateGlyphStore(cache, para, skew, glyphStore);
	return glyphStore;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateGlyphStore(cache, para, skew, glyphStore) {
	const simplifiedResultMap = new Map();
	for (const g of glyphStore.glyphs()) {
		if (!(g.geometry.measureComplexity() & Geom.CPLX_NON_EMPTY)) continue;
		if (!g.geometry.toReferences()) {
			simplifiedResultMap.set(g, flattenSimpleGlyph(cache, para, skew, g));
		}
	}
	for (const [g, sr] of simplifiedResultMap) {
		g.gizmo = Transform.Id();
		g.geometry = new Geom.ContourSetGeometry(sr);
	}
}

function flattenSimpleGlyph(cache, para, skew, g) {
	try {
		if (!g.gizmo) throw new TypeError("No gizmo");
		const gSimplified = Geom.SimplifyGeometry.wrapWithGizmo(g.geometry, g.gizmo);
		return gSimplified.toContours({ cache });
	} catch (e) {
		console.error("Detected broken geometry when processing", g._m_identifier);
		console.error(e);
		console.error(
			`${para.naming.family} ${para.naming.weight} ${para.naming.width} ${para.naming.slope}`,
		);
		return [];
	}
}
