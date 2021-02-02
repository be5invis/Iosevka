"use strict";

const Transform = require("./transform");
const Point = require("./point");
const Anchor = require("./anchor");

module.exports = class Glyph {
	constructor(_identifier) {
		this._m_identifier = _identifier;
		this.geometry = new GeometryStore();
		this.advanceWidth = 500;
		this.autoRefPriority = 0;
		this.markAnchors = {};
		this.baseAnchors = {};
		this.gizmo = Transform.Id();
		this.dependencies = [];
		this.defaultTag = null;
	}

	get contours() {
		throw new TypeError("Glyph::contours has been deprecated");
	}
	get semanticInclusions() {
		throw new TypeError("Glyph::semanticInclusions has been deprecated");
	}

	get name() {
		throw new TypeError("Glyph::name has been deprecated");
	}
	get unicode() {
		throw new TypeError("Glyph::unicode has been deprecated");
	}
	set unicode(x) {
		throw new TypeError("Glyph::unicode has been deprecated");
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
	// Dependency
	dependsOn(glyph) {
		if (glyph._m_identifier) this.dependencies.push(glyph._m_identifier);
		if (glyph.dependencies) for (const dep of glyph.dependencies) this.dependencies.push(dep);
	}
	// Inclusion
	include(component, copyAnchors, copyWidth) {
		if (!component) {
			throw new Error("Unreachable: Attempt to include a Null or Undefined");
		} else if (component instanceof Function) {
			const t = this.defaultTag;
			if (component.tag) this.defaultTag = component.tag;
			let ret = component.call(this, copyAnchors, copyWidth);
			this.defaultTag = t;
			return ret;
		} else if (component instanceof Transform) {
			return this.applyTransform(component, copyAnchors);
		} else if (component.isMarkSet) {
			return this.copyAnchors(component);
		} else if (component instanceof Glyph) {
			return this.includeGlyph(component, copyAnchors, copyWidth);
		} else {
			throw new Error("Invalid component to be introduced.");
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

		this.includeGlyphImpl(g, shift.x, shift.y);
		if (copyAnchors || g.isMarkSet) this.copyAnchors(g);
		if (copyWidth && g.advanceWidth >= 0) this.advanceWidth = g.advanceWidth;
		this.dependsOn(g);
	}
	cloneFromGlyph(g) {
		this.includeGlyph(g, true, true);
		this.cloneRelationFromGlyph(g);
		this.cloneRankFromGlyph(g);
	}
	cloneRelationFromGlyph(g) {
		this.shortName = g.shortName;
		this.related = g.related;
	}
	cloneRankFromGlyph(g) {
		this.autoRefPriority = g.autoRefPriority;
		this.glyphRank = g.glyphRank;
		this.avoidBeingComposite = g.avoidBeingComposite;
	}

	includeGlyphImpl(g, shiftX, shiftY) {
		if (g._m_identifier) {
			if (!g.geometry.isEmpty()) this.geometry.addReference(g, shiftX, shiftY);
		} else if (!g._m_identifier && g.geometry.asReferences()) {
			for (const sr of g.geometry.asReferences()) {
				if (!sr.glyph.geometry.isEmpty())
					this.geometry.addReference(sr.glyph, sr.x + shiftX, sr.y + shiftY);
			}
		} else {
			this.includeContours(g.geometry.asContours(), shiftX, shiftY);
		}
	}

	includeContours(cs, shiftX, shiftY) {
		for (const contour of cs) {
			let c = [];
			c.tag = contour.tag || cs.tag || this.defaultTag;
			for (const z of contour) c.push(Point.translated(z, shiftX, shiftY));
			this.geometry.addContour(c);
		}
	}

	applyTransform(tfm, alsoAnchors) {
		if (Transform.isTranslate(tfm)) {
			this.geometry.applyTranslate(tfm.x, tfm.y);
		} else {
			this.geometry.applyTransform(tfm);
		}
		if (alsoAnchors) {
			for (const k in this.baseAnchors)
				this.baseAnchors[k] = Anchor.transform(tfm, this.baseAnchors[k]);
			for (const k in this.markAnchors)
				this.markAnchors[k] = Anchor.transform(tfm, this.markAnchors[k]);
		}
	}

	tryBecomeMirrorOf(dst, rankSet) {
		if (rankSet.has(this) || rankSet.has(dst)) return;
		const csThis = this.geometry.asContours();
		const csDst = dst.geometry.asContours();
		if (csThis.length !== csDst.length) return;
		for (let j = 0; j < csThis.length; j++) {
			const c1 = csThis[j],
				c2 = csDst[j];
			if (c1.length !== c2.length) return;
		}
		for (let j = 0; j < csThis.length; j++) {
			const c1 = csThis[j],
				c2 = csDst[j];
			for (let k = 0; k < c1.length; k++) {
				const z1 = c1[k],
					z2 = c2[k];
				if (z1.x !== z2.x || z1.y !== z2.y || z1.type !== z2.type) return;
			}
		}
		this.geometry = new GeometryStore();
		this.geometry.addReference(dst, 0, 0);
		rankSet.add(this);
	}
	clearGeometry() {
		this.geometry = new GeometryStore();
	}

	// Anchors
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

class GeometryStore {
	constructor() {
		this.m_contours = [];
		this.m_references = [];
	}

	addContour(c) {
		this.m_contours.push(c);
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
}
