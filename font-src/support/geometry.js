"use strict";

const Transform = require("./transform");
const Point = require("./point");
const Anchor = require("./anchor");

module.exports = class GeometryStore {
	constructor() {
		this.m_contours = [];
		this.m_references = [];
	}

	addContour(c, tag) {
		if (tag) {
			const zs = [...c];
			zs.tag = tag;
			this.m_contours.push(zs);
		} else {
			this.m_contours.push(c);
		}
	}
	addReference(glyph, x, y) {
		this.m_references.push({ glyph, x, y });
	}
	asContours() {
		let result = [];
		for (const c of this.m_contours) {
			const c1 = [...c];
			if (c.tag) c1.tag = c.tag;
			result.push(c1);
		}
		for (const r of this.m_references) {
			for (const c of r.glyph.geometry.asContours()) {
				let c1 = [];
				for (const z of c) c1.push(Point.fromXY(z.type, z.x + r.x, z.y + r.y));
				if (c.tag) c1.tag = c.tag;
				result.push(c1);
			}
		}
		return result;
	}
	asReferences() {
		if (this.m_contours && this.m_contours.length) return null;
		if (!this.m_references.length) return null;
		return this.m_references;
	}

	applyTranslate(shiftX, shiftY) {
		for (const c of this.m_contours) {
			for (let k = 0; k < c.length; k++) {
				c[k] = Point.translated(c[k], shiftX, shiftY);
			}
		}
		for (const r of this.m_references) {
			r.x += shiftX;
			r.y += shiftY;
		}
	}
	applyTransform(tfm) {
		const cs = this.asContours();
		for (const c of cs) {
			for (let k = 0; k < c.length; k++) {
				c[k] = Point.transformed(tfm, c[k]);
			}
		}
		this.m_contours = cs;
		this.m_references.length = 0;
	}

	reTagContour(oldTag, newTag) {
		for (const c of this.m_contours) {
			if (c.tag === oldTag) c.tag = newTag;
		}
	}
	ejectContour(tag) {
		const cs = this.asContours();
		let i = 0,
			j = 0;
		for (; i < cs.length; i++) if (!cs[i].tag || cs[i].tag !== tag) cs[j++] = cs[i];
		cs.length = j;
		this.m_contours = cs;
		this.m_references = [];
	}

	suppressNaN() {
		let broken = false,
			complexity = 0;
		for (const c of this.m_contours) {
			for (const z of c) {
				complexity++;
				if (!isFinite(z.x)) {
					broken = true;
					z.x = 0;
				}
				if (!isFinite(z.y)) {
					broken = true;
					z.y = 0;
				}
			}
		}
		return broken ? 0xffff : complexity;
	}

	isEmpty() {
		return !this.m_contours.length && !this.m_references.length;
	}
};
