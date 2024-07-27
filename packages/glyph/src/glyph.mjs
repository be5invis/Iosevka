import * as util from "util";

import * as Geom from "@iosevka/geometry";
import { Anchor } from "@iosevka/geometry/anchor";
import { Vec2 } from "@iosevka/geometry/point";
import { Transform } from "@iosevka/geometry/transform";

import { ScheduleLeaningMark } from "./relation.mjs";

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
		this.divFrameParams = null;
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
	hasDependency(other) {
		if (!this._m_dependencyManager) return false;
		return this._m_dependencyManager.hasGlyphToGlyphDependency(this, other);
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
		if (!component) throw new Error("Unreachable: Attempt to include a Null or Undefined");
		return component.applyToGlyph(this, copyAnchors, copyWidth);
	}

	// Glyph inclusion
	applyToGlyph(g, copyAnchors, copyWidth) {
		g.includeGlyph(this, copyAnchors, copyWidth);
	}
	includeGlyph(g, copyAnchors, copyWidth) {
		if (g instanceof Function) throw new Error("Unreachable");
		if (g.isMarkSet) throw new Error("Invalid component to be introduced.");
		// Combine anchors and get offset
		let shift = new Vec2(0, 0);
		this.combineMarks(g, shift);
		this.includeGlyphImpl(g, shift.x, shift.y);
		if (copyAnchors) this.copyAnchors(g);
		if (copyWidth && g.advanceWidth >= 0) this.advanceWidth = g.advanceWidth;
	}
	includeMarkWithLeaningSupport(g, lm) {
		let shift = new Vec2(0, 0);
		this.combineMarks(g, shift, lm);
		this.includeGlyphImpl(g, shift.x, shift.y);
	}
	includeGlyphImpl(g, shiftX, shiftY) {
		if (g._m_identifier) {
			this.includeGeometry(new Geom.ReferenceGeometry(g, shiftX, shiftY));
		} else {
			this.includeGeometry(
				Geom.TransformedGeometry.create(Transform.Translate(shiftX, shiftY), g.geometry),
			);
		}
	}

	// Geometry inclusion
	includeGeometry(g) {
		let deps = g.getDependencies();
		if (deps && deps.length) for (const dep of deps) this.dependsOn(dep);
		if (this.ctxTag) g = new Geom.TaggedGeometry(g, this.ctxTag);
		this.geometry = Geom.combineWith(this.geometry, g);
	}
	includeContours(cs) {
		this.includeGeometry(new Geom.ContourSetGeometry(cs));
	}

	// Transform inclusion
	applyTransform(tfm, alsoAnchors) {
		this.geometry = Geom.TransformedGeometry.create(tfm, this.geometry);
		if (alsoAnchors) {
			for (const k in this.baseAnchors)
				this.baseAnchors[k] = Anchor.transform(tfm, this.baseAnchors[k]);
			for (const k in this.markAnchors)
				this.markAnchors[k] = Anchor.transform(tfm, this.markAnchors[k]);
		}
	}

	tryBecomeMirrorOf(dst, rankSet) {
		if (rankSet.has(this) || rankSet.has(dst)) return;
		if (dst.hasDependency(this)) return;
		const csThis = Geom.hashGeometry(this.geometry);
		const csDst = Geom.hashGeometry(dst.geometry);
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
	combineMarks(g, shift, lm) {
		if (!g.markAnchors) return;
		const fScheduledLeaning = lm && ScheduleLeaningMark.get(g);
		for (const mk in g.markAnchors) {
			// Find the base mark class and anchor
			const baseThisN = this.baseAnchors[mk];
			if (!baseThisN) continue;

			// Find the leaning base mark class and anchor, if any
			let mkLeaning = mk;
			if (fScheduledLeaning) {
				for (const [mkT, mkLeaningT] of lm)
					if (mk === mkT && this.baseAnchors[mkLeaningT]) mkLeaning = mkLeaningT;
			}
			const baseThisL = this.baseAnchors[mkLeaning];
			if (!baseThisL) continue;

			// Find the mark anchor in mark glyph
			const markThat = g.markAnchors[mk];

			// Calculate the shift
			shift.x = baseThisL.x - markThat.x;
			shift.y = baseThisL.y - markThat.y;

			// Place anchors from mark glyph to current glyph
			let fSuppress = true;
			if (g.baseAnchors) {
				for (const mkNewMark in g.baseAnchors) {
					const baseDerived = g.baseAnchors[mkNewMark];
					this.baseAnchors[mkNewMark] = new Anchor(
						baseThisN.x - markThat.x + baseDerived.x,
						baseThisN.y - markThat.y + baseDerived.y,
					);
					if (mkNewMark === mk) {
						fSuppress = false;
						if (mkLeaning !== mk) {
							this.baseAnchors[mkLeaning] = new Anchor(
								baseThisL.x - markThat.x + baseDerived.x,
								baseThisL.y - markThat.y + baseDerived.y,
							);
						}
					}
				}
			}
			if (fSuppress) delete this.baseAnchors[mk];
			break;
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

export class GlyphProc {
	constructor(fn) {
		this.m_fn = fn;
	}
	applyToGlyph(g, copyAnchors, copyWidth) {
		return this.m_fn.call(null, g, copyAnchors, copyWidth);
	}
}

export class ForkGlyphProc {
	constructor(fromGlyph, component) {
		this.m_fromGlyph = fromGlyph;
		this.m_component = component;
	}
	applyToGlyph(g) {
		g.include(this.m_fromGlyph, true, true);
		g.cloneRankFromGlyph(this.m_fromGlyph);
		if (this.m_component) g.include(this.m_component, true, true);
	}
}
