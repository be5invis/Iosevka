"use strict";

const TypoGeom = require("typo-geom");
const Geom = require("../../support/geometry/index");
const Point = require("../../support/geometry/point");
const Transform = require("../../support/geometry/transform");
const CurveUtil = require("../../support/geometry/curve-util");

module.exports = finalizeGlyphs;
function finalizeGlyphs(cache, para, glyphStore) {
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

function memoSet(memo, g, v) {
	memo.set(g, v);
	return v;
}
function regulateCompositeGlyph(glyphStore, memo, g) {
	if (memo.has(g)) return memo.get(g);

	let refs = g.geometry.asReferences();
	if (!refs) return memoSet(memo, g, false);

	for (const sr of refs) {
		const gn = glyphStore.queryNameOf(sr.glyph);
		if (!gn) return memoSet(memo, g, false);
	}

	// De-doppelganger
	while (refs.length === 1 && regulateCompositeGlyph(glyphStore, memo, refs[0].glyph)) {
		const sr = refs[0];
		const targetRefs = sr.glyph.geometry.asReferences();
		g.clearGeometry();
		for (const tr of targetRefs) {
			g.includeGeometry(new Geom.ReferenceGeometry(tr.glyph, tr.x + sr.x, tr.y + sr.y));
		}
		refs = g.geometry.asReferences();
	}

	return memoSet(memo, g, true);
}

function flattenSimpleGlyph(cache, skew, g) {
	const ck = Geom.hashGeometry(g.geometry);
	const cached = cache.getGF(ck);
	if (ck && cached) {
		g.clearGeometry();
		g.includeContours(CurveUtil.repToShape(cached), 0, 0);
		cache.refreshGF(ck);
	} else {
		const tfBack = g.gizmo ? g.gizmo.inverse() : new Transform(1, -skew, 0, 1, 0, 0);
		const tfForward = g.gizmo ? g.gizmo : new Transform(1, +skew, 0, 1, 0, 0);
		const g1 = new Geom.TransformedGeometry(
			new SimplifyGeometry(new Geom.TransformedGeometry(g.geometry, tfBack)),
			tfForward
		);
		const cs = g1.asContours();
		g.clearGeometry();
		g.includeContours(cs, 0, 0);
		if (ck) cache.saveGF(ck, CurveUtil.shapeToRep(cs));
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

class SimplifyGeometry extends Geom.GeometryBase {
	constructor(g) {
		super();
		this.m_geom = g;
	}
	asContours() {
		const source = this.m_geom.asContours();
		const sink = new FairizedShapeSink();
		TypoGeom.ShapeConv.transferGenericShape(
			TypoGeom.Fairize.fairizeBezierShape(
				TypoGeom.Boolean.removeOverlap(
					CurveUtil.convertShapeToArcs(source),
					TypoGeom.Boolean.PolyFillType.pftNonZero,
					CurveUtil.BOOLE_RESOLUTION
				)
			),
			sink,
			CurveUtil.GEOMETRY_PRECISION
		);
		return sink.contours;
	}
	asReferences() {
		return null;
	}
	filterTag(fn) {
		return this.m_geom.filterTag(fn);
	}
	isEmpty() {
		return this.m_geom.isEmpty();
	}
	measureComplexity() {
		return this.m_geom.measureComplexity();
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.unlinkReferences().toShapeStringOrNull();
		if (!sTarget) return null;
		return `SimplifyGeometry{${sTarget}}`;
	}
}

class FairizedShapeSink {
	constructor() {
		this.contours = [];
		this.lastContour = [];
	}
	beginShape() {}
	endShape() {
		if (this.lastContour.length > 2) {
			// TT use CW for outline, being different from Clipper
			let c = this.lastContour.reverse();
			c = this.alignHVKnots(c);
			c = this.cleanupOccurrentKnots1(c);
			c = this.cleanupOccurrentKnots2(c);
			c = this.removeColinearKnots(c);
			this.contours.push(c);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lineTo(x, y);
	}
	lineTo(x, y) {
		this.lastContour.push(Point.fromXY(Point.Type.Corner, x, y));
	}
	arcTo(arc, x, y) {
		const offPoints = TypoGeom.Quadify.auto(arc, 1, 8);
		for (const z of offPoints) {
			this.lastContour.push(Point.from(Point.Type.Quadratic, z));
		}
		this.lineTo(x, y);
	}

	// Contour cleaning code
	alignHVKnots(c0) {
		const c = c0.slice(0);
		const alignX = new CoordinateAligner(c, GetX, SetX);
		const alignY = new CoordinateAligner(c, GetY, SetY);
		for (let i = 0; i < c.length; i++) {
			if (c[i].type === Point.Type.Corner) {
				alignX.tryAlign(i, (i + 1) % c.length);
				alignY.tryAlign(i, (i + 1) % c.length);
			}
		}
		for (let i = 0; i < c.length; i++) {
			const zCurr = c[i],
				zNext = c[(i + 1) % c.length];
			if (zCurr.type === Point.Type.Quadratic && zNext.type === Point.Type.Corner) {
				alignX.tryAlign(i, (i + 1) % c.length);
				alignY.tryAlign(i, (i + 1) % c.length);
			}
		}
		alignX.apply();
		alignY.apply();
		return c;
	}
	cleanupOccurrentKnots1(c0) {
		const c = [c0[0]];
		for (let i = 1; i < c0.length; i++) {
			if (
				!(
					c0[i].type === Point.Type.Corner &&
					c0[i - 1].type === Point.Type.Corner &&
					isOccurrent(c0[i], c0[i - 1])
				)
			) {
				c.push(c0[i]);
			}
		}
		return c;
	}
	cleanupOccurrentKnots2(c0) {
		const c = c0.slice(0);
		const zFirst = c[0],
			zLast = c[c.length - 1];
		if (isOccurrent(zFirst, zLast)) c.pop();
		return c;
	}
	removeColinearKnots(c0) {
		const c = c0.slice(0);
		let lengthBefore = c.length,
			lengthAfter = c.length;
		do {
			lengthBefore = c.length;
			const shouldRemove = [];
			for (let i = 0; i < c.length; i++) {
				const zPrev = c[(i - 1 + c.length) % c.length],
					zCurr = c[i],
					zNext = c[(i + 1) % c.length];
				if (zPrev.type === Point.Type.Corner && zNext.type === Point.Type.Corner) {
					if (aligned(zPrev.x, zCurr.x, zNext.x) && between(zPrev.y, zCurr.y, zNext.y))
						shouldRemove[i] = true;
					if (aligned(zPrev.y, zCurr.y, zNext.y) && between(zPrev.x, zCurr.x, zNext.x))
						shouldRemove[i] = true;
				}
			}
			let n = 0;
			for (let i = 0; i < c.length; i++) {
				if (!shouldRemove[i]) c[n++] = c[i];
			}
			c.length = n;
			lengthAfter = c.length;
		} while (lengthAfter < lengthBefore);

		return c;
	}
}

// Disjoint set for coordinate alignment
class CoordinateAligner {
	constructor(c, lens, lensSet) {
		this.c = c;
		this.lens = lens;
		this.lensSet = lensSet;
		this.rank = [];
		this.up = [];
		for (let i = 0; i < c.length; i++) {
			const x = lens(c[i]);
			this.up[i] = i;
			this.rank[i] = Math.abs(x - Math.round(x));
		}
	}
	find(i) {
		if (this.up[i] !== i) {
			this.up[i] = this.find(this.up[i]);
			return this.up[i];
		} else {
			return i;
		}
	}
	tryAlign(i, j) {
		if (occurrentPrecisionEqual(this.lens(this.c[i]), this.lens(this.c[j]))) {
			this.align(i, j);
		}
	}
	align(i, j) {
		i = this.find(i);
		j = this.find(j);
		if (this.rank[i] > this.rank[j]) [i, j] = [j, i];
		this.up[j] = i;
	}
	apply() {
		for (let i = 0; i < this.c.length; i++) {
			this.lensSet(this.c[i], this.lens(this.c[this.find(i)]));
		}
	}
}

const GetX = z => z.x;
const SetX = (z, x) => (z.x = x);
const GetY = z => z.y;
const SetY = (z, y) => (z.y = y);

function isOccurrent(zFirst, zLast) {
	return (
		zFirst.type === Point.Type.Corner &&
		zLast.type === Point.Type.Corner &&
		zFirst.x === zLast.x &&
		zFirst.y === zLast.y
	);
}
function occurrentPrecisionEqual(a, b) {
	return Math.abs(a - b) < CurveUtil.OCCURRENT_PRECISION;
}
function aligned(a, b, c) {
	return a === b && b === c;
}
function between(a, b, c) {
	return (a <= b && b <= c) || (a >= b && b >= c);
}
