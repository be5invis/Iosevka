import * as util from "util";

import * as Geom from "@iosevka/geometry";
import { Anchor } from "@iosevka/geometry/anchor";
import { Point, Vec2 } from "@iosevka/geometry/point";
import { Transform } from "@iosevka/geometry/transform";

export class Glyph {
	constructor(identifier) {
		this._m_identifier = identifier;
		// Ranks
		this.glyphRank = 0;
		this.grRank = 0;
		this.codeRank = 0xffffffff;
		this.subRank = 0xffffffff;
		// Geometry
		this.geometry = new Geom.CombineGeometry();
		this.gizmo = Transform.Id();
		// Metrics
		this.advanceWidth = 500;
		this.markAnchors = {};
		this.baseAnchors = {};
		// Tracking
		this._m_dependencyManager = null;
		this.ctxTag = null;
	}

	[util.inspect.custom](depth, options) {
		return options.stylize(this.toString(), "special");
	}

	toString() {
		return `<Glyph ${this._m_identifier}>`;
	}

	get identifier() {
		return this._m_identifier;
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
		if (!this._m_dependencyManager) return;
		this._m_dependencyManager.addDependency(this, glyph);
	}

	// Copying
	cloneFromGlyph(g) {
		this.includeGlyph(g, true, true);
		this.cloneRelationFromGlyph(g);
		this.cloneRankFromGlyph(g);
	}
	cloneRelationFromGlyph(g) {
		this.related = g.related;
	}
	cloneRankFromGlyph(g) {
		this.glyphRank = g.glyphRank;
		this.avoidBeingComposite = g.avoidBeingComposite;
	}

	// Inclusion
	include(component, copyAnchors, copyWidth) {
		if (!component) {
			throw new Error("Unreachable: Attempt to include a Null or Undefined");
		} else if (component.applyToGlyph instanceof Function) {
			return component.applyToGlyph(this, copyAnchors, copyWidth);
		} else if (component instanceof Function) {
			return component.call(this, copyAnchors, copyWidth);
		} else if (component instanceof Transform) {
			return this.applyTransform(component, copyAnchors);
		} else if (component instanceof Glyph) {
			return this.includeGlyph(component, copyAnchors, copyWidth);
		} else if (component.__isNoShape) {
			// Do nothing. By design.
		} else {
			throw new Error("Invalid component to be introduced.");
		}
	}
	includeGlyph(g, copyAnchors, copyWidth) {
		if (g instanceof Function) throw new Error("Unreachable");
		// Combine anchors and get offset
		let shift = new Vec2(0, 0);
		this.combineMarks(g, shift);
		this.includeGlyphImpl(g, shift.x, shift.y);
		if (g.isMarkSet) throw new Error("Invalid component to be introduced.");
		if (copyAnchors) this.copyAnchors(g);
		if (copyWidth && g.advanceWidth >= 0) this.advanceWidth = g.advanceWidth;
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
	includeGeometry(g) {
		let deps = g.getDependencies();
		if (deps && deps.length) for (const dep of deps) this.dependsOn(dep);
		if (this.ctxTag) g = new Geom.TaggedGeometry(g, this.ctxTag);
		this.geometry = Geom.combineWith(this.geometry, g);
	}
	includeContours(cs) {
		this.includeGeometry(new Geom.ContourSetGeometry(cs));
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
		const csThis = this.geometry.unlinkReferences().toShapeStringOrNull();
		const csDst = dst.geometry.unlinkReferences().toShapeStringOrNull();
		if (csThis && csDst && csThis === csDst) {
			this.geometry = new Geom.CombineGeometry([new Geom.ReferenceGeometry(dst, 0, 0)]);
			rankSet.add(this);
		}
	}
	clearGeometry() {
		this.geometry = new Geom.CombineGeometry();
	}
	ejectTagged(tag) {
		this.geometry = this.geometry.filterTag(t => tag !== t);
	}
	// Anchors
	combineMarks(g, shift) {
		if (!g.markAnchors) return;
		for (const m in g.markAnchors) {
			const markThat = g.markAnchors[m];
			const baseThis = this.baseAnchors[m];
			if (!baseThis) continue;
			shift.x = baseThis.x - markThat.x;
			shift.y = baseThis.y - markThat.y;
			let fSuppress = true;
			if (g.baseAnchors) {
				for (const m2 in g.baseAnchors) {
					if (m2 === m) fSuppress = false;
					const baseDerived = g.baseAnchors[m2];
					this.baseAnchors[m2] = new Anchor(
						shift.x + baseDerived.x,
						shift.y + baseDerived.y
					);
				}
			}
			if (fSuppress) delete this.baseAnchors[m];
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
	copyBaseAnchorIfAbsent(to, from) {
		if (this.baseAnchors[from] && !this.baseAnchors[to]) {
			this.baseAnchors[to] = new Anchor(this.baseAnchors[from].x, this.baseAnchors[from].y);
		}
	}
	clearAnchors() {
		this.baseAnchors = {};
		this.markAnchors = {};
	}
	deleteBaseAnchor(id) {
		delete this.baseAnchors[id];
	}
	deleteMarkAnchor(id) {
		delete this.markAnchors[id];
	}
}
