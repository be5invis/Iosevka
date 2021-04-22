"use strict";

const crypto = require("crypto");
const TypoGeom = require("typo-geom");

const Point = require("./point");
const Transform = require("./transform");
const CurveUtil = require("./curve-util");

class GeometryBase {
	asContours() {
		throw new Error("Unimplemented");
	}
	asReferences() {
		throw new Error("Unimplemented");
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
		let s = "ContourGeometry{";
		for (const z of this.m_points) {
			s += `(${z.type};${formatN(z.x)};${formatN(z.y)})`;
		}
		s += "}";
		return s;
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
	toShapeStringOrNull() {
		let sTarget = this.m_glyph.geometry.toShapeStringOrNull();
		if (!sTarget) return null;
		return `ReferenceGeometry{${sTarget};${formatN(this.m_x)};${formatN(this.m_y)}}`;
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
	toShapeStringOrNull() {
		const sTarget = this.m_geom.toShapeStringOrNull();
		if (!sTarget) return null;
		return (
			`TransformedGeometry{${sTarget};` +
			`${formatN(this.m_transform.xx)},${formatN(this.m_transform.xy)},` +
			`${formatN(this.m_transform.yx)},${formatN(this.m_transform.yy)},` +
			`${formatN(this.m_transform.x)},${formatN(this.m_transform.y)}` +
			`}`
		);
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
	toShapeStringOrNull() {
		let sParts = [];
		for (const item of this.m_parts) {
			const sPart = item.toShapeStringOrNull();
			if (!sPart) return null;
			sParts.push(sPart);
		}
		return `CombineGeometry{${sParts.join(",")}}`;
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
		let arcs = CurveUtil.convertShapeToArcs(this.m_operands[0].asContours());
		if (this.m_operands.length < 2) {
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
	toShapeStringOrNull() {
		let sParts = [];
		for (const item of this.m_operands) {
			const sPart = item.toShapeStringOrNull();
			if (!sPart) return null;
			sParts.push(sPart);
		}
		return `BooleanGeometry{${this.m_operator};${sParts.join(",")}}`;
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

function formatN(x) {
	return `${Math.round(x * 0x10000)}`;
}

exports.GeometryBase = GeometryBase;
exports.ContourGeometry = ContourGeometry;
exports.ReferenceGeometry = ReferenceGeometry;
exports.TaggedGeometry = TaggedGeometry;
exports.TransformedGeometry = TransformedGeometry;
exports.CombineGeometry = CombineGeometry;
exports.BooleanGeometry = BooleanGeometry;

exports.combineWith = combineWith;
