import * as Geom from "@iosevka/geometry";
import { Transform } from "@iosevka/geometry/transform";

///////////////////////////////////////////////////////////////////////////////////////////////////

export function finalizeGlyphs(cache, para, glyphStore) {
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);
	regulateGlyphStore(cache, skew, glyphStore);
	return glyphStore;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateGlyphStore(cache, skew, glyphStore) {
	const compositeMemo = new Map();
	for (const g of glyphStore.glyphs()) {
		if (g.geometry.isEmpty()) continue;
		if (!regulateCompositeGlyph(glyphStore, compositeMemo, g)) {
			g.geometry = g.geometry.unlinkReferences();
		}
	}
	for (const g of glyphStore.glyphs()) {
		if (!compositeMemo.get(g)) flattenSimpleGlyph(cache, skew, g);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateCompositeGlyph(glyphStore, memo, g) {
	if (memo.has(g)) return memo.get(g);

	let refs = g.geometry.asReferences();
	if (!refs) return memoSet(memo, g, false);

	for (const sr of refs) {
		const gn = glyphStore.queryNameOf(sr.glyph);
		if (!gn) return memoSet(memo, g, false);
	}

	let refGeometries = [];
	for (const sr of refs) refGeometries.push(new Geom.ReferenceGeometry(sr.glyph, sr.x, sr.y));
	g.geometry = new Geom.CombineGeometry(refGeometries);
	return memoSet(memo, g, true);
}

function memoSet(memo, g, v) {
	memo.set(g, v);
	return v;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function flattenSimpleGlyph(cache, skew, g) {
	const ck = Geom.hashGeometry(g.geometry);
	const cached = cache.getGF(ck);
	if (ck && cached) {
		g.clearGeometry();
		g.includeContours(cached);
		cache.refreshGF(ck);
	} else {
		try {
			let gSimplified;
			if (skew) {
				const tfBack = g.gizmo ? g.gizmo.inverse() : new Transform(1, -skew, 0, 1, 0, 0);
				const tfForward = g.gizmo ? g.gizmo : new Transform(1, +skew, 0, 1, 0, 0);
				gSimplified = new Geom.TransformedGeometry(
					new Geom.SimplifyGeometry(new Geom.TransformedGeometry(g.geometry, tfBack)),
					tfForward
				);
			} else {
				gSimplified = new Geom.SimplifyGeometry(g.geometry);
			}

			const cs = gSimplified.asContours();
			g.clearGeometry();
			g.includeContours(cs);
			if (ck) cache.saveGF(ck, cs);
		} catch (e) {
			console.error("Detected broken geometry when processing", g._m_identifier);
			throw e;
		}
	}
}
