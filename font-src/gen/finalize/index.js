"use strict";

const autoRef = require("./autoref");
const TypoGeom = require("typo-geom");
const Point = require("../../support/point");

const CurveUtil = require("../../support/curve-util");
const gcFont = require("./gc");

module.exports = function finalizeFont(para, glyphStore, excludedCodePoints, font) {
	glyphStore = forceMonospaceIfNeeded(para, glyphStore);
	glyphStore = gcFont(glyphStore, excludedCodePoints, font, {});
	glyphStore = regulateGlyphStore(para, glyphStore);
	extractGlyfCmap(glyphStore, font);
	return glyphStore;
};

function forceMonospaceIfNeeded(para, glyphStore) {
	const unitWidth = Math.round(para.width);
	if (!para.forceMonospace || para.spacing > 0) return glyphStore;
	return glyphStore.filterByGlyph({
		has: g => {
			const gw = Math.round(g.advanceWidth || 0);
			return gw === 0 || gw === unitWidth;
		}
	});
}

function extractGlyfCmap(glyphStore, font) {
	const glyf = {};
	const cmap = {};
	const sortedEntries = Array.from(glyphStore.indexedNamedEntries()).sort(byRank);
	for (const [origIndex, name, g] of sortedEntries) {
		glyf[name] = g;
		const us = glyphStore.queryUnicodeOf(g);
		if (us) {
			for (const u of us) if (isFinite(u - 0) && u) cmap[u] = name;
		}
	}
	font.glyf = glyf;
	font.cmap = cmap;
}

function regulateGlyphStore(para, glyphStore) {
	autoRef(glyphStore);

	// regulate
	const skew = Math.tan(((para.slopeAngle || 0) / 180) * Math.PI);
	for (let g of glyphStore.glyphs()) regulateGlyph(g, skew);

	return glyphStore;
}

function byRank([ja, gna, a], [jb, gnb, b]) {
	return (b.glyphRank || 0) - (a.glyphRank || 0) || (ja || 0) - (jb || 0);
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
