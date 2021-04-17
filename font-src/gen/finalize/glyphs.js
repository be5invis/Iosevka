"use strict";

const TypoGeom = require("typo-geom");
const Point = require("../../support/point");
const CurveUtil = require("../../support/curve-util");
const util = require("util");

module.exports = finalizeGlyphs;
function finalizeGlyphs(para, glyphStore) {
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);
	regulateGlyphStore(skew, glyphStore);
	return glyphStore;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateGlyphStore(skew, glyphStore) {
	for (const g of glyphStore.glyphs()) {
		if (g.geometry.isEmpty()) continue;
		if (!regulateCompositeGlyph(glyphStore, g)) {
			const cs = g.geometry.asContours();
			g.clearGeometry();
			g.includeContours(cs, 0, 0);
		}
	}
	for (const g of glyphStore.glyphs()) {
		if (!g.geometry.asReferences()) regulateSimpleGlyph(g, skew);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function regulateCompositeGlyph(glyphStore, g) {
	const refs = g.geometry.asReferences();
	if (!refs) return false;
	for (const sr of refs) {
		const gn = glyphStore.queryNameOf(sr.glyph);
		if (!gn || sr.glyph.autoRefPriority < 0) return false;
	}
	return true;
}

function regulateSimpleGlyph(g, skew) {
	let cs = g.geometry.asContours();
	for (const contour of cs) for (const z of contour) z.x -= z.y * skew;
	cs = simplifyContours(cs);
	for (const contour of cs) for (const z of contour) z.x += z.y * skew;

	g.clearGeometry();
	g.includeContours(cs, 0, 0);
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
			// TT use CW for outline, being different from Clipper
			const c = this.lastContour.reverse();
			const zFirst = c[0],
				zLast = c[c.length - 1];
			if (isOccurrent(zFirst, zLast)) c.pop();
			this.contours.push(c);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lineTo(x, y);
	}
	lineTo(x, y) {
		const z = Point.fromXY(Point.Type.Corner, x, y).round(1);
		this.popOccurrentKnots(z);
		this.popColinearKnots(z);
		this.lastContour.push(z);
	}
	arcTo(arc, x, y) {
		const offPoints = TypoGeom.Quadify.auto(arc, 1, 8);
		for (const z of offPoints) {
			this.lastContour.push(Point.from(Point.Type.Quadratic, z).round(1));
		}
		this.lineTo(x, y);
	}
	popOccurrentKnots(z) {
		if (this.lastContour.length <= 0) return;
		const last = this.lastContour[this.lastContour.length - 1];
		if (last.type === Point.Type.Corner && last.x === z.x && last.y === z.y) {
			this.lastContour.pop();
		}
	}
	popColinearKnots(z) {
		let kArcStart = this.lastContour.length - 2;
		if (kArcStart >= 0) {
			const kLast = kArcStart + 1;
			if (
				this.lastContour[kArcStart].type !== Point.Type.Corner &&
				this.lastContour[kLast].type === Point.Type.Corner
			) {
				return;
			}
		}
		while (kArcStart >= 0 && this.lastContour[kArcStart].type !== Point.Type.Corner)
			kArcStart--;
		if (kArcStart >= 0) {
			const a = this.lastContour[kArcStart];
			let fColinearH = true;
			let fColinearV = true;
			for (let m = kArcStart + 1; m < this.lastContour.length; m++) {
				const b = this.lastContour[m];
				if (!(aligned(a.y, b.y, z.y) && between(a.x, b.x, z.x))) fColinearH = false;
				if (!(aligned(a.x, b.x, z.x) && between(a.y, b.y, z.y))) fColinearV = false;
			}
			if (fColinearH || fColinearV) this.lastContour.length = kArcStart + 1;
		}
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
function geometryPrecisionEqual(a, b) {
	return Math.round(a) === Math.round(b);
}
function aligned(a, b, c) {
	return geometryPrecisionEqual(a, b) && geometryPrecisionEqual(b, c);
}
function between(a, b, c) {
	return (a <= b && b <= c) || (a >= b && b >= c);
}
