"use strict";

const Transform = require("./transform");
const Point = require("./point");
const Anchor = require("./anchor");

module.exports = class Glyph {
	constructor(_identifier) {
		this._m_identifier = _identifier;
		this.contours = [];
		this.advanceWidth = 500;
		this.autoRefPriority = 0;
		this.markAnchors = {};
		this.baseAnchors = {};
		this.gizmo = Transform.Id();
		this.semanticInclusions = [];
		this.dependencies = [];
		this.defaultTag = null;
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
		this.semanticInclusions = [];
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

	isPureComposite() {
		if (!this.semanticInclusions || !this.semanticInclusions.length) return false;
		const origContourSet = new Set(this.contours);
		let handledContours = new Set();
		for (const sr of this.semanticInclusions) {
			for (const c of sr.contours) {
				if (!origContourSet.has(c) || handledContours.has(c)) return false;
				handledContours.add(c);
			}
		}
		for (const c of this.contours) if (!handledContours.has(c)) return false;
		return true;
	}

	includeGlyphImpl(g, shiftX, shiftY) {
		if (g._m_identifier) {
			this.includeGlyphComponentImpl(g, shiftX, shiftY);
		} else {
			this.includeGeometry(g, shiftX, shiftY);
		}
	}
	includeGlyphComponentImpl(g, shiftX, shiftY) {
		const newContours = this.includeGeometry(g, shiftX, shiftY);
		if (newContours && newContours.length) {
			this.semanticInclusions.push({
				glyph: g,
				x: shiftX,
				y: shiftY,
				contours: newContours
			});
		}
	}

	includeGeometry(geom, shiftX, shiftY) {
		if (!geom || !geom.contours || !geom.contours.length) return null;
		return this.includeContours(geom.contours, shiftX, shiftY);
	}
	includeContours(contours, shiftX, shiftY) {
		let newContours = [];
		for (const contour of contours) {
			let c = [];
			c.tag = contour.tag || contours.tag || this.defaultTag;
			for (const z of contour) c.push(Point.translated(z, shiftX, shiftY));
			this.contours.push(c);
			newContours.push(c);
		}
		return newContours;
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
		for (const c of this.contours) {
			for (let k = 0; k < c.length; k++) {
				c[k] = Point.transformed(tfm, c[k]);
			}
		}
		if (Transform.isTranslate(tfm)) {
			for (const sr of this.semanticInclusions) {
				sr.x += tfm.x;
				sr.y += tfm.y;
			}
		} else {
			// Applying a non-trivial inclusion will unlink all the SIs
			this.semanticInclusions = [];
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
		if (this.contours.length !== dst.contours.length) return;
		for (let j = 0; j < this.contours.length; j++) {
			const c1 = this.contours[j],
				c2 = dst.contours[j];
			if (c1.length !== c2.length) return;
		}
		for (let j = 0; j < this.contours.length; j++) {
			const c1 = this.contours[j],
				c2 = dst.contours[j];
			for (let k = 0; k < c1.length; k++) {
				const z1 = c1[k],
					z2 = c2[k];
				if (z1.x !== z2.x || z1.y !== z2.y || z1.type !== z2.type) return;
			}
		}
		this.semanticInclusions = [
			{
				glyph: dst,
				x: 0,
				y: 0,
				contours: [...this.contours]
			}
		];
		rankSet.add(this);
	}
	clearGeometry() {
		this.contours = [];
		this.semanticInclusions = [];
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
