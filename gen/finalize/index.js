"use strict";

const autoRef = require("./autoref");
const TypoGeom = require("typo-geom");
const CurveUtil = require("../../support/curve-util");
const { fairifyQuad } = require("../../support/fairify");
const { AnyCv } = require("../../support/gr");
const gcFont = require("./gc");
const { SpiroContourContext } = require("../../support/spiroexpand");

function regulateGlyph(g, skew) {
	if (!g.contours) return;

	// Regulate
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x -= contour[p].y * skew;
		}
	}

	g.contours = simplifyContours(g.contours);

	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x += contour[p].y * skew;
		}
	}
}

function simplifyContours(source) {
	const simplifiedArcs = TypoGeom.Boolean.removeOverlap(
		CurveUtil.convertShapeToArcs(source),
		TypoGeom.Boolean.PolyFillType.pftNonZero,
		1 << 17
	);

	const sc = new SpiroContourContext();
	TypoGeom.transferBezArcShape(simplifiedArcs, sc);

	const result = [];
	for (const contour of sc.contours) {
		if (contour.length <= 2) continue;
		result.push(CurveUtil.cleanupQuadContour(fairifyQuad(contour)));
	}
	return result;
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

function regulateGlyphList(para, gs) {
	const skew = Math.tan(((para.italicAngle || 0) / 180) * Math.PI);

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

function filterWideGlyphs(para, glyphList) {
	if (para.forceMonospace && para.spacing == 0) {
		for (const g of glyphList) g.advanceWidth = Math.round(g.advanceWidth || 0);
		return glyphList.filter(g => !(g.advanceWidth > Math.round(para.width)));
	}
	return glyphList;
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

module.exports = function finalizeFont(para, rawGlyphList, excludedCodePoints, font) {
	const glyphList = filterWideGlyphs(para, rawGlyphList);
	gcFont(glyphList, excludedCodePoints, font, {});
	extractGlyfCmap(regulateGlyphList(para, glyphList), font);
};
