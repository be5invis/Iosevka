"use strict";

const Point = require("../../support/point");
const { AnyCv } = require("../../support/gr");

function autoref(glyphStore) {
	suppressNaN(glyphStore);
	hashContours(glyphStore);

	const glyphEntryList = getGlyphEntryList(glyphStore);
	linkRefl(glyphEntryList);
	linkComponent(glyphEntryList);
	unlinkHybrid(glyphStore);
}

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

function hashContours(glyphStore) {
	for (const g of glyphStore.glyphs()) {
		if (!g.contours) continue;
		for (let k = 0; k < g.contours.length; k++) {
			const contour = g.contours[k];
			contour.hash = contourHash(contour);
		}
	}
}
function contourHash(c) {
	if (!c || c.length < 2) return ".";
	let lx = c[0].x,
		ly = c[0].y;
	let buf = "";
	for (let j = 1; j < c.length; j++) {
		const z = c[j];
		buf += `${z.on ? "o" : "f"}${z.cubic ? "c" : "q"}${delta(z.x, lx)},${delta(z.y, ly)};`;
		(lx = z.x), (ly = z.y);
	}
	return buf;
}
function delta(a, b) {
	return Math.round((a - b) * 32);
}

function getGlyphEntryList(glyphStore) {
	const excludeUnicode = new Set();
	excludeUnicode.add(0x80);
	for (let c = 0x2500; c <= 0x259f; c++) excludeUnicode.add(c);

	for (const [j, gn, g] of glyphStore.indexedNamedEntries()) {
		if (AnyCv.query(g).length) g.autoRefPriority = -1;
		const us = glyphStore.queryUnicodeOf(g);
		if (us) {
			for (const u of us) if (excludeUnicode.has(u)) g.avoidBeingComposite = true;
		}
	}

	return Array.from(glyphStore.indexedNamedEntries()).sort(byGlyphPriority);
}

function byGlyphPriority([ja, gna, a], [jb, gnb, b]) {
	const pri1 = a.autoRefPriority || 0;
	const pri2 = b.autoRefPriority || 0;
	if (pri1 > pri2) return -1;
	if (pri1 < pri2) return 1;
	if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
	if (a.contours && b.contours && a.contours.length > b.contours.length) return -1;
	return 0;
}

function linkRefl(glyphEntryList) {
	for (let j = 0; j < glyphEntryList.length; j++) {
		const [, gnj, gj] = glyphEntryList[j];
		if (!gj.contours.length || (gj.references && gj.references.length)) continue;
		for (let k = j + 1; k < glyphEntryList.length; k++) {
			const [, gnk, gk] = glyphEntryList[k];
			if (gj.contours.length === gk.contours.length) {
				match(gnj, gj, gnk, gk);
			}
		}
	}
}
function linkComponent(glyphEntryList) {
	for (let j = 0; j < glyphEntryList.length; j++) {
		const [, gnj, gj] = glyphEntryList[j];
		if (gj.autoRefPriority < 0) continue;
		if (!gj.contours.length) continue;
		if (gj.references && gj.references.length) continue;
		for (let k = glyphEntryList.length - 1; k >= 0; k--) {
			const [, gnk, gk] = glyphEntryList[k];
			if (gj.contours.length > gk.contours.length) continue;
			if (
				gj.contours.length === gk.contours.length &&
				!(gk.references && gk.references.length)
			) {
				continue;
			}
			while (match(gnj, gj, gnk, gk)) "pass";
		}
	}
}
function match(gn1, g1, gn2, g2) {
	for (let j = 0; j + g1.contours.length <= g2.contours.length; j++) {
		let found = true;
		for (let k = j; k < g2.contours.length && k - j < g1.contours.length; k++) {
			if (
				g1.contours[k - j].hash !== g2.contours[k].hash ||
				!(
					k <= j ||
					(delta(g1.contours[k - j][0].x, g1.contours[k - j - 1][0].x) ===
						delta(g2.contours[k][0].x, g2.contours[k - 1][0].x) &&
						delta(g1.contours[k - j][0].y, g1.contours[k - j - 1][0].y) ===
							delta(g2.contours[k][0].y, g2.contours[k - 1][0].y))
				)
			) {
				found = false;
				break;
			}
		}
		if (found) {
			const refX = g2.contours[j][0].x - g1.contours[0][0].x || 0;
			const refY = g2.contours[j][0].y - g1.contours[0][0].y || 0;
			if (Math.abs(refY) > 1 && g1.advanceWidth > 1) {
				continue;
			}
			if (!g2.references) g2.references = [];
			g2.references.push({ glyph: gn1, x: refX, y: refY, roundToGrid: false });
			g2.contours.splice(j, g1.contours.length);
			return true;
		}
	}
	return false;
}

function unlinkHybrid(glyphStore) {
	for (const g of glyphStore.glyphs()) {
		if (!g.references || g.references.length === 0) continue;
		if (!g.avoidBeingComposite && g.contours.length === 0) continue;
		g.contours = unlinkRef(g, 0, 0, glyphStore);
		g.references = [];
	}
}

function unlinkRef(g, dx, dy, glyphStore) {
	let contours = g.contours.map(c => c.map(z => new Point(z.x + dx, z.y + dy, z.on, z.cubic)));
	if (g.references) {
		for (let r of g.references) {
			contours = contours.concat(
				unlinkRef(glyphStore.queryByName(r.glyph), r.x + dx, r.y + dy, glyphStore)
			);
		}
	}
	return contours;
}

module.exports = autoref;
