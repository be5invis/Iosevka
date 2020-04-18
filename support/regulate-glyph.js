"use strict";

const Glyph = require("./glyph");
const autoRef = require("./autoref");
const caryllShapeOps = require("caryll-shapeops");
const curveUtil = require("./curve-util");
const { fairifyQuad } = require("./fairify");
const Transform = require("./transform");

function regulateGlyph(g, skew) {
	if (!g.contours) return;

	// Regulate
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x += contour[p].y * skew;
		}
	}

	g.contours = simplifyContours(g.contours);

	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x -= contour[p].y * skew;
		}
	}
}

function simplifyContours(contours) {
	const gizmo = Transform.Id();
	const source = [];
	for (const contour of contours) {
		if (contour.length > 2) source.push(curveUtil.convertContourToCubic(contour));
	}
	const simplified = caryllShapeOps.removeOverlap(source, 1, 1 << 17, true);

	const result = [];
	for (const contour of simplified) {
		if (contour.length <= 2) continue;
		result.push(curveUtil.cleanupQuadContour(fairifyQuad(contour, gizmo)));
	}
	return result;
}

function byGlyphPriority(a, b) {
	const pri1 = a.cmpPriority || 0;
	const pri2 = b.cmpPriority || 0;
	if (pri1 > pri2) return -1;
	if (pri1 < pri2) return 1;
	if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
	if (a.contours && b.contours && a.contours.length > b.contours.length) return -1;
	if (a.advanceWidth < b.advanceWidth) return -1;
	if (a.advanceWidth > b.advanceWidth) return 1;
	if ((a.unicode && a.unicode[0] && !b.unicode) || !b.unicode[0]) return -1;
	if ((b.unicode && b.unicode[0] && !a.unicode) || !a.unicode[0]) return +1;
	if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] < b.unicode[0])
		return -1;
	if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] > b.unicode[0])
		return +1;
	return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

module.exports = function (gs, skew) {
	const excludeUnicode = new Set();
	excludeUnicode.add(0x80);
	for (let c = 0x2500; c <= 0x259f; c++) excludeUnicode.add(c);

	// autoref
	gs = gs.map((g, j) => ((g.glyphOrder = j), g)).sort(byGlyphPriority);
	autoRef(gs, excludeUnicode);

	// regulate
	for (let g of gs) regulateGlyph(g, skew);

	// reorder
	return gs.sort((a, b) => a.glyphOrder - b.glyphOrder);
};
