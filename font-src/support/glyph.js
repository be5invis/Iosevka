"use strict";

const Transform = require("./transform");
const Point = require("./point");
const Anchor = require("./anchor");

module.exports = class Glyph {
	constructor(name) {
		Object.defineProperty(this, "name", { value: name, writable: false });
		this.unicode = [];
		this.contours = [];
		this.advanceWidth = 500;
		this.autoRefPriority = 0;
		this.markAnchors = {};
		this.baseAnchors = {};
		this.gizmo = Transform.Id();
		this.dependencies = [];
		this.defaultTag = null;
	}
	// PTL pattern matching
	static unapply(obj, arity) {
		if (obj instanceof Glyph) return [obj];
		else return null;
	}
	// Metrics
	setWidth(w) {
		this.advanceWidth = w;
	}
	// Encoding
	assignUnicode(u) {
		if (typeof u === "string") this.unicode.push(u.codePointAt(0));
		else this.unicode.push(u);
	}
	// Dependency
	dependsOn(glyph) {
		if (glyph.name) this.dependencies.push(glyph.name);
		if (glyph.dependencies) for (const dep of glyph.dependencies) this.dependencies.push(dep);
	}
	// Contour Tagging
	reTagContour(oldTag, newTag) {
		for (const c of this.contours) if (c.tag === oldTag) c.tag = newTag;
	}
	ejectContour(tag) {
		let i = 0,
			j = 0;
		for (; i < this.contours.length; i++) {
			if (!this.contours[i].tag || this.contours[i].tag !== tag)
				this.contours[j++] = this.contours[i];
		}
		this.contours.length = j;
	}
	// Inclusion
	include(component, copyAnchors, copyWidth) {
		if (component instanceof Function) {
			const t = this.defaultTag;
			if (component.tag) this.defaultTag = component.tag;
			component.call(this, copyAnchors, copyWidth);
			this.defaultTag = t;
			return;
		} else if (component instanceof Transform) {
			this.applyTransform(component, copyAnchors);
		} else if (component instanceof Array) {
			throw new Error("Attempt to include an array.");
		} else {
			this.includeGlyph(component, copyAnchors, copyWidth);
		}
	}
	includeGlyph(g, copyAnchors, copyWidth) {
		if (g instanceof Function) throw new Error("Unreachable");

		// Combine anchors and get offset
		let shift = { x: 0, y: 0 };
		if (g.markAnchors) {
			for (const m in this.baseAnchors) {
				this.combineAnchor(shift, this.baseAnchors[m], g.markAnchors[m], g.baseAnchors);
			}
		}

		this.includeGeometry(g, shift.x, shift.y);
		if (copyAnchors || g.isMarkSet) this.copyAnchors(g);
		if (copyWidth && g.advanceWidth >= 0) this.advanceWidth = g.advanceWidth;
		this.dependsOn(g);
	}
	includeGeometry(geom, shiftX, shiftY) {
		if (!geom || !geom.contours) return;
		for (const contour of geom.contours) {
			let c = [];
			c.tag = contour.tag || geom.tag || this.defaultTag;
			for (const z of contour) c.push(Point.translated(z, shiftX, shiftY));
			this.contours.push(c);
		}
	}
	combineAnchor(shift, baseThis, markThat, basesThat) {
		if (!baseThis || !markThat) return;
		shift.x = baseThis.x - markThat.x;
		shift.y = baseThis.y - markThat.y;
		if (basesThat) {
			for (const bk in basesThat) {
				this.baseAnchors[bk] = new Anchor(
					shift.x + basesThat[bk].x,
					shift.y + basesThat[bk].y
				);
			}
		}
	}
	copyAnchors(g) {
		if (g.markAnchors) for (const k in g.markAnchors) this.markAnchors[k] = g.markAnchors[k];
		if (g.baseAnchors) for (const k in g.baseAnchors) this.baseAnchors[k] = g.baseAnchors[k];
	}
	applyTransform(tfm, alsoAnchors) {
		for (const c of this.contours)
			for (let j = 0; j < c.length; j++) {
				c[j] = Point.transformed(tfm, c[j]);
			}
		if (alsoAnchors) {
			for (const k in this.baseAnchors)
				this.baseAnchors[k] = Anchor.transform(tfm, this.baseAnchors[k]);
			for (const k in this.markAnchors)
				this.markAnchors[k] = Anchor.transform(tfm, this.markAnchors[k]);
		}
	}
	// Anchors
	setBaseAnchor(id, x, y) {
		this.baseAnchors[id] = new Anchor(x, y).transform(this.gizmo);
	}
	setMarkAnchor(id, x, y, mbx, mby) {
		this.markAnchors[id] = new Anchor(x, y).transform(this.gizmo);
		if (mbx != null && mby != null) {
			this.baseAnchors[id] = new Anchor(mbx, mby).transform(this.gizmo);
		}
	}
	deleteBaseAnchor(id) {
		delete this.baseAnchors[id];
	}
	deleteMarkAnchor(id) {
		delete this.markAnchors[id];
	}
};
