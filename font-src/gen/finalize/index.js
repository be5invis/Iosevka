"use strict";

const autoRef = require("./autoref");
const TypoGeom = require("typo-geom");
const Point = require("../../support/point");

const CurveUtil = require("../../support/curve-util");
const { AnyCv } = require("../../support/gr");
const gcFont = require("./gc");

module.exports = function finalizeFont(para, glyphList, excludedCodePoints, font) {
	forceMonospaceIfNeeded(para, glyphList);
	gcFont(glyphList, excludedCodePoints, font, {});
	extractGlyfCmap(regulateGlyphList(para, glyphList), font);
};

function forceMonospaceIfNeeded(para, glyphList) {
	if (!para.forceMonospace || para.spacing > 0) return;
	const unitWidth = Math.round(para.width);
	let i = 0,
		j = 0;
	for (; i < glyphList.length; i++) {
		const g = glyphList[i];
		g.advanceWidth = Math.round(g.advanceWidth || 0);
		if (g.advanceWidth === 0 || g.advanceWidth === unitWidth) glyphList[j++] = g;
	}
	glyphList.length = j;
}

function extractGlyfCmap(glyphList, font) {
	const glyf = {};
	const cmap = {};
	for (let g of glyphList) {
		glyf[g.name] = g;
		if (!g.unicode) continue;

		for (let u of g.unicode) {
			if (isFinite(u - 0)) cmap[u] = g.name;
		}
	}
	font.glyf = glyf;
	font.cmap = cmap;
}

function regulateGlyphList(para, gs) {
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);

	const excludeUnicode = new Set();
	excludeUnicode.add(0x80);
	for (let c = 0x2500; c <= 0x259f; c++) excludeUnicode.add(c);

	// autoref
	for (let j = 0; j < gs.length; j++) {
		gs[j].glyphOrder = j;
		if (AnyCv.query(gs[j]).length) gs[j].autoRefPriority = -1;
		if (gs[j].unicode) {
			for (const u of gs[j].unicode) {
				if (excludeUnicode.has(u)) gs[j].avoidBeingComposite = true;
			}
		}
	}
	gs.sort(byGlyphPriority);
	autoRef(gs, excludeUnicode);

	// regulate
	for (let g of gs) regulateGlyph(g, skew);

	// reorder
	return gs.sort(byRank);
}

function byGlyphPriority(a, b) {
	const pri1 = a.autoRefPriority || 0;
	const pri2 = b.autoRefPriority || 0;
	if (pri1 > pri2) return -1;
	if (pri1 < pri2) return 1;
	if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
	if (a.contours && b.contours && a.contours.length > b.contours.length) return -1;
	return 0;
}

function byRank(a, b) {
	return (b.glyphRank || 0) - (a.glyphRank || 0) || (a.glyphOrder || 0) - (b.glyphOrder || 0);
}

function regulateGlyph(g, skew) {
	if (!g.contours || !g.contours.length) return;
	for (const contour of g.contours) for (const z of contour) z.x -= z.y * skew;
	g.contours = simplifyContours(g.contours);
	for (const contour of g.contours) for (const z of contour) z.x += z.y * skew;
}

function simplifyContours(source) {
	const sink = new FairizedShapeSink();

	TypoGeom.transferGenericShape(
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
			if (zFirst.on && zLast.on && zFirst.x === zLast.x && zFirst.y === zLast.y) {
				this.lastContour.pop();
			}
			this.contours.push(this.lastContour);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lineTo(x, y);
	}
	lineTo(x, y) {
		const z = Point.cornerFromXY(x, y).round(CurveUtil.RECIP_GEOMETRY_PRECISION);
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
				this.lastContour.push(Point.offFrom(z).round(CurveUtil.RECIP_GEOMETRY_PRECISION));
		}
		this.lineTo(x, y);
	}
}
function isLineExtend(a, b, c) {
	return (
		a.on &&
		c.on &&
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
