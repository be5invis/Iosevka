"use strict";

const Transform = require("./transform");
const Point = require("./point");
const Anchor = require("./anchor");
const Geom = require("./geometry");

module.exports = class Glyph {
	constructor(_identifier) {
		this._m_identifier = _identifier;
		this.geometry = new Geom.CombineGeometry();
		this.advanceWidth = 500;
		this.autoRefPriority = 0;
		this.markAnchors = {};
		this.baseAnchors = {};
		this.gizmo = Transform.Id();
		this.dependencies = [];
		this.ctxTag = null;
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
			return component.call(this, copyAnchors, copyWidth);
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

	includeGeometry(g) {
		if (this.ctxTag) g = new Geom.TaggedGeometry(g, this.ctxTag);
		this.geometry = Geom.combineWith(this.geometry, g);
	}
	includeGlyphImpl(g, shiftX, shiftY) {
		if (g._m_identifier) {
			this.includeGeometry(new Geom.ReferenceGeometry(g, shiftX, shiftY));
		} else {
			this.includeGeometry(
				new Geom.TransformedGeometry(g.geometry, Transform.Translate(shiftX, shiftY))
			);
		}
	}

	includeContours(cs, shiftX, shiftY) {
		let parts = [];
		for (const contour of cs) {
			let c = [];
			for (const z of contour) c.push(Point.translated(z, shiftX, shiftY));
			parts.push(new Geom.ContourGeometry(c));
		}
		this.includeGeometry(new Geom.CombineGeometry(parts));
	}

	applyTransform(tfm, alsoAnchors) {
		this.geometry = new Geom.TransformedGeometry(this.geometry, tfm);
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
		this.geometry = new Geom.CombineGeometry([new Geom.ReferenceGeometry(dst, 0, 0)]);
		rankSet.add(this);
	}
	clearGeometry() {
		this.geometry = new Geom.CombineGeometry();
	}
	ejectTagged(tag) {
		this.geometry = this.geometry.filterTag(t => tag !== t);
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
		if (isNaN(x - 0) || isNaN(y - 0)) throw new Error(`NaN found in anchor coord for ${id}`);
		this.baseAnchors[id] = new Anchor(x, y).transform(this.gizmo);
	}
	setMarkAnchor(id, x, y, mbx, mby) {
		if (isNaN(x - 0) || isNaN(y - 0)) throw new Error(`NaN found in anchor coord for ${id}`);
		this.markAnchors[id] = new Anchor(x, y).transform(this.gizmo);
		if (mbx != null && mby != null) {
			if (isNaN(mbx - 0) || isNaN(mby - 0))
				throw new Error(`NaN found in anchor coord for ${id}`);
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
