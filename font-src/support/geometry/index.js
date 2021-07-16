"use strict";

const crypto = require("crypto");
const TypoGeom = require("typo-geom");
const SpiroJs = require("spiro");

const Point = require("./point");
const Transform = require("./transform");
const CurveUtil = require("./curve-util");
const { SpiroExpander } = require("./spiro-expand");
const Format = require("../util/formatter");

class GeometryBase {
	asContours() {
		throw new Error("Unimplemented");
	}
	asReferences() {
		throw new Error("Unimplemented");
	}
	unlinkReferences() {
		return this;
	}
	filterTag(fn) {
		return this;
	}
	isEmpty() {
		return true;
	}
	measureComplexity() {
		return 0;
	}
	toShapeStringOrNull() {
		return null;
	}
}

class ContourGeometry extends GeometryBase {
	constructor(points) {
		super();
		this.m_points = [];
		for (const z of points) {
			this.m_points.push(Point.from(z.type, z));
		}
	}
	asContours() {
		if (this.isEmpty()) return [];
		let c1 = [];
		for (const z of this.m_points) c1.push(Point.from(z.type, z));
		return [c1];
	}
	asReferences() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	isEmpty() {
		return !this.m_points.length;
	}
	measureComplexity() {
		for (const z of this.m_points) {
			if (!isFinite(z.x) || !isFinite(z.y)) return 0xffff;
		}
		return this.m_points.length;
	}
	toShapeStringOrNull() {
		return Format.struct(`ContourGeometry`, Format.list(this.m_points.map(Format.typedPoint)));
	}
}

class SpiroGeometry extends GeometryBase {
	constructor(gizmo, closed, knots) {
		super();
		this.m_knots = [];
		for (const k of knots) {
			this.m_knots.push({ type: k.type, x: k.x, y: k.y });
		}
		this.m_closed = closed;
		this.m_gizmo = gizmo;
		this.m_cachedContours = null;
	}
	asContours() {
		if (this.m_cachedContours) return this.m_cachedContours;
		const s = new CurveUtil.BezToContoursSink(this.m_gizmo);
		SpiroJs.spiroToBezierOnContext(this.m_knots, this.m_closed, s, CurveUtil.SPIRO_PRECISION);
		this.m_cachedContours = s.contours;
		return this.m_cachedContours;
	}
	asReferences() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	isEmpty() {
		return !this.m_knots.length;
	}
	measureComplexity() {
		for (const z of this.m_knots) {
			if (!isFinite(z.x) || !isFinite(z.y)) return 0xffff;
		}
		return this.m_knots.length;
	}
	toShapeStringOrNull() {
		return Format.struct(
			"SpiroGeometry",
			Format.gizmo(this.m_gizmo),
			this.m_closed,
			Format.list(this.m_knots.map(Format.typedPoint))
		);
	}
}

class DiSpiroGeometry extends GeometryBase {
	constructor(gizmo, contrast, closed, biKnots) {
		super();

		this.m_biKnots = [];
		for (const k of biKnots) this.m_biKnots.push(k.clone());

		this.m_closed = closed;
		this.m_gizmo = gizmo;
		this.m_contrast = contrast;

		this.m_cachedExpansionResults = null;
		this.m_cachedContours = null;
	}

	asContours() {
		if (this.m_cachedContours) return this.m_cachedContours;
		const { lhs, rhs } = this.expand();

		let rawGeometry;
		if (this.m_closed) {
			rawGeometry = new CombineGeometry([
				new SpiroGeometry(Transform.Id(), this.m_closed, lhs.slice(0, -1)),
				new SpiroGeometry(Transform.Id(), this.m_closed, rhs.reverse().slice(0, -1))
			]);
		} else {
			lhs[0].type = lhs[lhs.length - 1].type = "corner";
			rhs[0].type = rhs[rhs.length - 1].type = "corner";
			const allKnots = lhs.concat(rhs.reverse());
			rawGeometry = new SpiroGeometry(Transform.Id(), true, allKnots);
		}
		this.m_cachedContours = rawGeometry.asContours();
		return this.m_cachedContours;
	}
	expand() {
		if (this.m_cachedExpansionResults) return this.m_cachedExpansionResults;
		const expander = new SpiroExpander(
			this.m_gizmo,
			this.m_contrast,
			this.m_closed,
			this.m_biKnots.map(k => k.clone())
		);
		expander.initializeNormals();
		expander.iterateNormals();
		expander.iterateNormals();
		this.m_cachedExpansionResults = expander.expand();
		return this.m_cachedExpansionResults;
	}

	asReferences() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	isEmpty() {
		return !this.m_biKnots.length;
	}
	measureComplexity() {
		for (const z of this.m_biKnots) {
			if (!isFinite(z.x) || !isFinite(z.y)) return 0xffff;
		}
		return this.m_biKnots.length;
	}

	toShapeStringOrNull() {
		return Format.struct(
			Format.gizmo(this.m_gizmo),
			Format.n(this.m_contrast),
			this.m_closed,
			Format.list(this.m_biKnots.map(z => z.toShapeString()))
		);
	}
}

class ReferenceGeometry extends GeometryBase {
	constructor(glyph, x, y) {
		super();
		if (!glyph || !glyph.geometry) throw new TypeError("Invalid glyph");
		this.m_glyph = glyph;
		this.m_x = x || 0;
		this.m_y = y || 0;
	}
	unwrap() {
		return new TransformedGeometry(
			this.m_glyph.geometry,
			Transform.Translate(this.m_x, this.m_y)
		);
	}
	asContours() {
		if (this.isEmpty()) return [];
		return this.unwrap().asContours();
	}
	asReferences() {
		if (this.isEmpty()) return [];
		return [{ glyph: this.m_glyph, x: this.m_x, y: this.m_y }];
	}
	filterTag(fn) {
		if (this.isEmpty()) return null;
		return this.unwrap().filterTag(fn);
	}
	isEmpty() {
		if (!this.m_glyph || !this.m_glyph.geometry) return true;
		return this.m_glyph.geometry.isEmpty();
	}
	measureComplexity() {
		return this.m_glyph.geometry.measureComplexity();
	}
	unlinkReferences() {
		return this.unwrap().unlinkReferences();
	}
	toShapeStringOrNull() {
		let sTarget = this.m_glyph.geometry.toShapeStringOrNull();
		if (!sTarget) return null;
		return Format.struct("ReferenceGeometry", sTarget, Format.n(this.m_x), Format.n(this.m_y));
	}
}

class TaggedGeometry extends GeometryBase {
	constructor(g, tag) {
		super();
		this.m_geom = g;
		this.m_tag = tag;
	}
	asContours() {
		return this.m_geom.asContours();
	}
	asReferences() {
		return this.m_geom.asReferences();
	}
	filterTag(fn) {
		if (!fn(this.m_tag)) return null;
		else return new TaggedGeometry(this.m_geom.filterTag(fn), this.m_tag);
	}
	isEmpty() {
		return this.m_geom.isEmpty();
	}
	measureComplexity() {
		return this.m_geom.measureComplexity();
	}
	unlinkReferences() {
		return this.m_geom.unlinkReferences();
	}
	toShapeStringOrNull() {
		return this.m_geom.toShapeStringOrNull();
	}
}

class TransformedGeometry extends GeometryBase {
	constructor(g, tfm) {
		super();
		this.m_geom = g;
		this.m_transform = tfm;
	}
	asContours() {
		let result = [];
		for (const c of this.m_geom.asContours()) {
			let c1 = [];
			for (const z of c) c1.push(Point.transformed(this.m_transform, z));
			result.push(c1);
		}
		return result;
	}
	asReferences() {
		if (!Transform.isTranslate(this.m_transform)) return null;
		const rs = this.m_geom.asReferences();
		if (!rs) return null;

		let result = [];
		for (const { glyph, x, y } of rs)
			result.push({ glyph, x: x + this.m_transform.x, y: y + this.m_transform.y });
		return result;
	}
	filterTag(fn) {
		const e = this.m_geom.filterTag(fn);
		if (!e) return null;
		return new TransformedGeometry(e, this.m_transform);
	}
	isEmpty() {
		return this.m_geom.isEmpty();
	}
	measureComplexity() {
		return this.m_geom.measureComplexity();
	}
	unlinkReferences() {
		const unwrapped = this.m_geom.unlinkReferences();
		if (Transform.isIdentity(this.m_transform)) {
			return unwrapped;
		} else if (
			unwrapped instanceof TransformedGeometry &&
			Transform.isTranslate(this.m_transform) &&
			Transform.isTranslate(unwrapped.m_transform)
		) {
			return new TransformedGeometry(
				unwrapped.m_geom,
				Transform.Translate(
					this.m_transform.x + unwrapped.m_transform.x,
					this.m_transform.y + unwrapped.m_transform.y
				)
			);
		} else {
			return new TransformedGeometry(unwrapped, this.m_transform);
		}
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.toShapeStringOrNull();
		if (!sTarget) return null;
		return Format.struct(TransformedGeometry, sTarget, Format.gizmo(this.m_transform));
	}
}

class CombineGeometry extends GeometryBase {
	constructor(parts) {
		super();
		this.m_parts = parts || [];
	}
	with(g) {
		if (g instanceof CombineGeometry) {
			return new CombineGeometry([...this.m_parts, ...g.m_parts]);
		} else {
			return new CombineGeometry([...this.m_parts, g]);
		}
	}
	asContours() {
		let results = [];
		for (const part of this.m_parts) {
			for (const c of part.asContours()) {
				results.push(c);
			}
		}
		return results;
	}
	asReferences() {
		let results = [];
		for (const part of this.m_parts) {
			const rs = part.asReferences();
			if (!rs) return null;
			for (const c of rs) {
				results.push(c);
			}
		}
		return results;
	}
	filterTag(fn) {
		let filtered = [];
		for (const part of this.m_parts) {
			const fp = part.filterTag(fn);
			if (fp) filtered.push(fp);
		}
		return new CombineGeometry(filtered);
	}
	isEmpty() {
		for (const part of this.m_parts) if (!part.isEmpty()) return false;
		return true;
	}
	measureComplexity() {
		let s = 0;
		for (const part of this.m_parts) s += part.measureComplexity();
	}

	unlinkReferences() {
		let parts = [];
		for (const part of this.m_parts) {
			const unwrapped = part.unlinkReferences();
			if (unwrapped instanceof CombineGeometry) {
				for (const p of unwrapped.m_parts) parts.push(p);
			} else {
				parts.push(unwrapped);
			}
		}
		return new CombineGeometry(parts);
	}
	toShapeStringOrNull() {
		let sParts = [];
		for (const item of this.m_parts) {
			const sPart = item.toShapeStringOrNull();
			if (!sPart) return null;
			sParts.push(sPart);
		}
		return Format.struct("CombineGeometry", Format.list(sParts));
	}
}

class BooleanGeometry extends GeometryBase {
	constructor(operator, operands) {
		super();
		this.m_operator = operator;
		this.m_operands = operands;
		this.m_resolved = null;
	}
	asContours() {
		if (this.m_resolved) return this.m_resolved;
		this.m_resolved = this.asContoursImpl();
		return this.m_resolved;
	}
	asContoursImpl() {
		if (this.m_operands.length === 0) return [];

		let arcs = CurveUtil.convertShapeToArcs(this.m_operands[0].asContours());
		if (this.m_operands.length === 1) {
			arcs = TypoGeom.Boolean.removeOverlap(
				arcs,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				CurveUtil.BOOLE_RESOLUTION
			);
		}
		for (let j = 1; j < this.m_operands.length; j++) {
			arcs = TypoGeom.Boolean.combine(
				this.m_operator,
				arcs,
				CurveUtil.convertShapeToArcs(this.m_operands[j].asContours()),
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				CurveUtil.BOOLE_RESOLUTION
			);
		}
		const ctx = new CurveUtil.BezToContoursSink();
		TypoGeom.ShapeConv.transferBezArcShape(arcs, ctx);
		return ctx.contours;
	}
	asReferences() {
		return null;
	}
	filterTag(fn) {
		let filtered = [];
		for (const operand of this.m_operands) {
			const fp = operand.filterTag(fn);
			if (fp) filtered.push(fp);
		}
		return new BooleanGeometry(this.m_operator, filtered);
	}
	isEmpty() {
		for (const operand of this.m_operands) if (!operand.isEmpty()) return false;
		return true;
	}
	measureComplexity() {
		let s = 0;
		for (const operand of this.m_operands) s += operand.measureComplexity();
	}
	unlinkReferences() {
		if (this.m_operands.length === 0) return new CombineGeometry([]);
		if (this.m_operands.length === 1) return this.m_operands[0].unlinkReferences();

		let operands = [];
		for (const operand of this.m_operands) {
			operands.push(operand.unlinkReferences());
		}
		return new BooleanGeometry(this.m_operator, operands);
	}
	toShapeStringOrNull() {
		let sParts = [];
		for (const item of this.m_operands) {
			const sPart = item.toShapeStringOrNull();
			if (!sPart) return null;
			sParts.push(sPart);
		}
		return Format.struct("BooleanGeometry", this.m_operator, Format.list(sParts));
	}
}

exports.hashGeometry = function (geom) {
	const s = geom.toShapeStringOrNull();
	if (!s) return null;
	return crypto.createHash("sha256").update(s).digest("hex");
};

function combineWith(a, b) {
	if (a instanceof CombineGeometry) {
		return a.with(b);
	} else {
		return new CombineGeometry([a, b]);
	}
}

exports.GeometryBase = GeometryBase;
exports.SpiroGeometry = SpiroGeometry;
exports.DiSpiroGeometry = DiSpiroGeometry;
exports.ContourGeometry = ContourGeometry;
exports.ReferenceGeometry = ReferenceGeometry;
exports.TaggedGeometry = TaggedGeometry;
exports.TransformedGeometry = TransformedGeometry;
exports.CombineGeometry = CombineGeometry;
exports.BooleanGeometry = BooleanGeometry;

exports.combineWith = combineWith;
