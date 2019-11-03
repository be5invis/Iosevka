const Glyph = require("./glyph");
const autoRef = require("./autoref");
const caryllShapeOps = require("caryll-shapeops");
const c2q = require("megaminx").geometry.c2q;

function regulateGlyph(g, skew) {
	if (!g.contours) return;

	// Regulate
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x += contour[p].y * skew;
			if (!contour[p].on) continue;
			contour[p].x = Math.round(contour[p].x);
		}
		let offJ = null,
			mx = null;
		for (let p = 0; p < contour.length; p++) {
			if (!contour[p].on) continue;
			if (offJ) {
				const origX = contour[p].x;
				const rx = Math.round(contour[p].x * 4) / 4;
				const origX0 = mx;
				const rx0 = contour[offJ - 1].x;
				if (origX === origX0) continue;
				for (let pOff = offJ; pOff < p; pOff++) {
					contour[pOff].x =
						((contour[pOff].x - origX0) / (origX - origX0)) * (rx - rx0) + rx0;
				}
			}
			mx = contour[p].x;
			contour[p].x = Math.round(contour[p].x * 4) / 4;
			offJ = p + 1;
		}
	}
	const c1 = [];
	for (let k = 0; k < g.contours.length; k++) {
		c1.push(Glyph.contourToStandardCubic(g.contours[k]));
	}

	// De-overlap
	g.contours = caryllShapeOps.removeOverlap(c1, 1, 256, true);

	// Finalize
	g.contours = c2q.contours(g.contours);
	for (let k = 0; k < g.contours.length; k++) {
		const contour = g.contours[k];
		for (let p = 0; p < contour.length; p++) {
			contour[p].x -= contour[p].y * skew;
		}
	}
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

module.exports = function(font, skew) {
	const excludeUnicode = new Set();
	excludeUnicode.add(0x80);
	for (let c = 0x2500; c <= 0x259f; c++) excludeUnicode.add(c);

	// autoref
	font.glyf = font.glyf.map((g, j) => ((g.glyphOrder = j), g)).sort(byGlyphPriority);
	autoRef(font.glyf, excludeUnicode);
	// regulate
	for (let g of font.glyf) regulateGlyph(g, skew);

	// reorder
	font.glyf = font.glyf.sort((a, b) => a.glyphOrder - b.glyphOrder);
};
