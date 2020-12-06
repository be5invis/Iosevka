"use strict";

const TypoGeom = require("typo-geom");
const Point = require("../../support/point");
const CurveUtil = require("../../support/curve-util");

module.exports = finalizeGlyphs;
function finalizeGlyphs(para, glyphStore) {
	suppressNaN(glyphStore);
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);
	regulateGlyphStore(skew, glyphStore);
	return glyphStore;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function suppressNaN(glyphStore) {
	for (const g of glyphStore.glyphs()) {
		if (!g.contours) continue;
		for (let k = 0; k < g.contours.length; k++) {
			let contour = g.contours[k];
			for (let z of contour) {
				if (!isFinite(z.x)) z.x = 0;
				if (!isFinite(z.y)) z.y = 0;
			}
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateGlyphStore(skew, glyphStore) {
	for (const g of glyphStore.glyphs()) {
		if (!g.semanticInclusions || !g.contours) continue;
		if (g.isPureComposite()) regulateCompositeGlyph(glyphStore, g);
	}
	for (const g of glyphStore.glyphs()) regulateSimpleGlyph(g, skew);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateCompositeGlyph(glyphStore, g) {
	const references = [];
	for (const sr of g.semanticInclusions) {
		const gn = glyphStore.queryNameOf(sr.glyph);
		if (!gn || sr.glyph.autoRefPriority < 0) return;
		references.push({ glyph: gn, x: sr.x, y: sr.y });
	}

	g.semanticInclusions = [];
	g.contours = [];
	g.references = references;
}

function regulateSimpleGlyph(g, skew) {
	if (!g.contours || !g.contours.length) return;
	for (const contour of g.contours) for (const z of contour) z.x -= z.y * skew;
	g.contours = simplifyContours(g.contours);
	for (const contour of g.contours) for (const z of contour) z.x += z.y * skew;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function simplifyContours(source) {
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

class FairizedShapeSink {
	constructor() {
		this.contours = [];
		this.lastContour = [];
	}
	beginShape() {}
	endShape() {
		if (this.lastContour.length > 2) {
			const zFirst = this.lastContour[0],
				zLast = this.lastContour[this.lastContour.length - 1];
			if (isOccurrent(zFirst, zLast)) this.lastContour.pop();
			this.contours.push(this.lastContour);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lineTo(x, y);
	}
	lineTo(x, y) {
		const z = Point.fromXY(Point.Type.Corner, x, y).round(CurveUtil.RECIP_GEOMETRY_PRECISION);
		while (this.lastContour.length >= 2) {
			const a = this.lastContour[this.lastContour.length - 2],
				b = this.lastContour[this.lastContour.length - 1];
			if (isLineExtend(a, b, z)) {
				this.lastContour.pop();
			} else {
				break;
			}
		}
		this.lastContour.push(z);
	}
	arcTo(arc, x, y) {
		const offPoints = TypoGeom.Quadify.auto(arc, 1, 16);
		if (offPoints) {
			for (const z of offPoints)
				this.lastContour.push(
					Point.from(Point.Type.Quadratic, z).round(CurveUtil.RECIP_GEOMETRY_PRECISION)
				);
		}
		this.lineTo(x, y);
	}
}
function isOccurrent(zFirst, zLast) {
	return (
		zFirst.type === Point.Type.Corner &&
		zLast.type === Point.Type.Corner &&
		zFirst.x === zLast.x &&
		zFirst.y === zLast.y
	);
}
function isLineExtend(a, b, c) {
	return (
		a.type === Point.Type.Corner &&
		c.type === Point.Type.Corner &&
		((aligned(a.x, b.x, c.x) && between(a.y, b.y, c.y)) ||
			(aligned(a.y, b.y, c.y) && between(a.x, b.x, c.x)))
	);
}
function geometryPrecisionEqual(a, b) {
	return (
		Math.round(a * CurveUtil.RECIP_GEOMETRY_PRECISION) ===
		Math.round(b * CurveUtil.RECIP_GEOMETRY_PRECISION)
	);
}
function aligned(a, b, c) {
	return geometryPrecisionEqual(a, b) && geometryPrecisionEqual(b, c);
}
function between(a, b, c) {
	return (a <= b && b <= c) || (a >= b && b >= c);
}
