import crypto from "crypto";

import * as Format from "@iosevka/util/formatter";
import * as TypoGeom from "typo-geom";

import * as CurveUtil from "./curve-util.mjs";
import { Point } from "./point.mjs";
import { QuadifySink } from "./quadify.mjs";
import { SpiroExpander } from "./spiro-expand.mjs";
import { spiroToOutline } from "./spiro-to-outline.mjs";
import { strokeArcs } from "./stroke.mjs";
import { Transform } from "./transform.mjs";

export const CPLX_NON_EMPTY = 0x01; // A geometry tree that is not empty
export const CPLX_NON_SIMPLE = 0x02; // A geometry tree that contains non-simple contours
export const CPLX_BROKEN = 0x04; // A geometry tree that contains broken contours, like having points with NaN coordinates
export const CPLX_UNKNOWN = 0xff;

export class GeometryBase {
	toContours() {
		throw new Error("Unimplemented");
	}
	toReferences() {
		throw new Error("Unimplemented");
	}
	getDependencies() {
		throw new Error("Unimplemented");
	}
	unlinkReferences() {
		return this;
	}
	filterTag(fn) {
		return this;
	}
	measureComplexity() {
		return CPLX_UNKNOWN;
	}
	toShapeStringOrNull() {
		return null;
	}
}

export class InvalidGeometry extends GeometryBase {}

export class ContourSetGeometry extends GeometryBase {
	constructor(contours) {
		super();
		this.m_contours = contours;
	}
	toContours() {
		return this.m_contours;
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	measureComplexity() {
		let cp = this.m_contours.length > 0 ? CPLX_NON_EMPTY : 0;
		for (const c of this.m_contours) {
			for (const z of c) {
				if (!isFinite(z.x) || !isFinite(z.y)) cp |= CPLX_BROKEN;
			}
		}
		return cp;
	}
	toShapeStringOrNull() {
		return Format.struct(
			`ContourSetGeometry`,
			Format.list(this.m_contours.map(c => Format.list(c.map(Format.typedPoint)))),
		);
	}
}

export class SpiroGeometry extends GeometryBase {
	constructor(gizmo, closed, knots) {
		super();
		this.m_knots = knots;
		this.m_closed = closed;
		this.m_gizmo = gizmo;
		this.m_cachedContours = null;
	}
	toContours() {
		if (this.m_cachedContours) return this.m_cachedContours;
		this.m_cachedContours = spiroToOutline(this.m_knots, this.m_closed, this.m_gizmo);
		return this.m_cachedContours;
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	measureComplexity() {
		let cplx = CPLX_NON_EMPTY | CPLX_NON_SIMPLE;
		for (const z of this.m_knots) {
			if (!isFinite(z.x) || !isFinite(z.y)) cplx |= CPLX_BROKEN;
		}
		return cplx;
	}
	toShapeStringOrNull() {
		return Format.struct(
			"SpiroGeometry",
			Format.gizmo(this.m_gizmo),
			this.m_closed,
			Format.list(this.m_knots.map(k => k.toShapeString())),
		);
	}
}

export class DiSpiroGeometry extends GeometryBase {
	constructor(gizmo, contrast, closed, biKnots) {
		super();
		this.m_biKnots = biKnots; // untransformed
		this.m_closed = closed;
		this.m_gizmo = gizmo;
		this.m_contrast = contrast;
		this.m_cachedExpansionResults = null;
		this.m_cachedContours = null;
	}
	toContours() {
		if (this.m_cachedContours) return this.m_cachedContours;
		const expandResult = this.expand();
		const lhs = [...expandResult.lhsUntransformed];
		const rhs = [...expandResult.rhsUntransformed];
		// Reverse the RHS
		for (const k of rhs) k.reverseType();
		rhs.reverse();

		let outlineGeometry;
		if (this.m_closed) {
			outlineGeometry = new CombineGeometry([
				new SpiroGeometry(this.m_gizmo, true, lhs),
				new SpiroGeometry(this.m_gizmo, true, rhs),
			]);
		} else {
			lhs[0].type = lhs[lhs.length - 1].type = "corner";
			rhs[0].type = rhs[rhs.length - 1].type = "corner";
			const allKnots = lhs.concat(rhs);
			outlineGeometry = new SpiroGeometry(this.m_gizmo, true, allKnots);
		}
		this.m_cachedContours = outlineGeometry.toContours();
		return this.m_cachedContours;
	}
	expand() {
		if (this.m_cachedExpansionResults) return this.m_cachedExpansionResults;
		const expander = new SpiroExpander(
			this.m_gizmo,
			this.m_contrast,
			this.m_closed,
			this.m_biKnots,
		);
		expander.initializeNormals();
		expander.iterateNormals();
		expander.iterateNormals();
		expander.iterateNormals();
		expander.iterateNormals();
		this.m_cachedExpansionResults = expander.expand();
		return this.m_cachedExpansionResults;
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return null;
	}
	filterTag(fn) {
		return this;
	}
	measureComplexity() {
		let cplx = CPLX_NON_EMPTY | CPLX_NON_SIMPLE;
		for (const z of this.m_biKnots) {
			if (!isFinite(z.x) || !isFinite(z.y)) cplx |= CPLX_BROKEN;
		}
		return cplx;
	}
	toShapeStringOrNull() {
		return Format.struct(
			"DiSpiroGeometry",
			Format.gizmo(this.m_gizmo),
			Format.n(this.m_contrast),
			this.m_closed,
			Format.list(this.m_biKnots.map(z => z.toShapeString())),
		);
	}
}

export class ReferenceGeometry extends GeometryBase {
	constructor(glyph, x, y) {
		super();
		if (!glyph || !glyph.geometry) throw new TypeError("Invalid glyph");
		this.m_glyph = glyph;
		this.m_x = x || 0;
		this.m_y = y || 0;
	}
	unwrap() {
		return new TransformedGeometry(
			Transform.Translate(this.m_x, this.m_y),
			this.m_glyph.geometry,
		);
	}
	toContours() {
		return this.unwrap().toContours();
	}
	toReferences() {
		if (this.m_glyph.geometry.measureComplexity() & CPLX_NON_EMPTY) {
			return [{ glyph: this.m_glyph, x: this.m_x, y: this.m_y }];
		} else {
			// A reference to a space is meaningless, thus return nothing
			return [];
		}
	}
	getDependencies() {
		return [this.m_glyph];
	}
	filterTag(fn) {
		return this.unwrap().filterTag(fn);
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

export class TaggedGeometry extends GeometryBase {
	constructor(g, tag) {
		super();
		this.m_geom = g;
		this.m_tag = tag;
	}
	toContours() {
		return this.m_geom.toContours();
	}
	toReferences() {
		return this.m_geom.toReferences();
	}
	getDependencies() {
		return this.m_geom.getDependencies();
	}
	filterTag(fn) {
		if (!fn(this.m_tag)) return null;
		else return new TaggedGeometry(this.m_geom.filterTag(fn), this.m_tag);
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

export class TransformedGeometry extends GeometryBase {
	constructor(tfm, g) {
		super();
		this.m_transform = tfm;
		this.m_geom = g;
	}

	withTransform(tfm) {
		return new TransformedGeometry(Transform.Combine(this.m_transform, tfm), this.m_geom);
	}

	toContours() {
		let result = [];
		for (const c of this.m_geom.toContours()) {
			let c1 = [];
			for (const z of c) c1.push(Point.transformed(this.m_transform, z));
			result.push(c1);
		}
		return result;
	}
	toReferences() {
		if (!Transform.isTranslate(this.m_transform)) return null;
		const rs = this.m_geom.toReferences();
		if (!rs) return null;
		let result = [];
		for (const { glyph, x, y } of rs)
			result.push({ glyph, x: x + this.m_transform.tx, y: y + this.m_transform.ty });
		return result;
	}
	getDependencies() {
		return this.m_geom.getDependencies();
	}
	filterTag(fn) {
		const e = this.m_geom.filterTag(fn);
		if (!e) return null;
		return new TransformedGeometry(this.m_transform, e);
	}
	measureComplexity() {
		return (
			(Transform.isPositive(this.m_transform) ? 0 : CPLX_NON_SIMPLE) |
			this.m_geom.measureComplexity()
		);
	}
	unlinkReferences() {
		const unwrapped = this.m_geom.unlinkReferences();
		if (Transform.isIdentity(this.m_transform)) {
			return unwrapped;
		} else if (unwrapped instanceof TransformedGeometry) {
			return unwrapped.withTransform(this.m_transform);
		} else {
			return new TransformedGeometry(this.m_transform, unwrapped);
		}
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.toShapeStringOrNull();
		if (!sTarget) return null;
		return Format.struct("TransformedGeometry", Format.gizmo(this.m_transform), sTarget);
	}
}

export class RadicalGeometry extends GeometryBase {
	constructor(g) {
		super();
		this.m_geom = g;
	}
	toContours() {
		return this.m_geom.toContours();
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return this.m_geom.getDependencies();
	}
	filterTag(fn) {
		const e = this.m_geom.filterTag(fn);
		if (!e) return null;
		return new RadicalGeometry(e);
	}
	measureComplexity() {
		return this.m_geom.measureComplexity();
	}
	unlinkReferences() {
		return this.m_geom.unlinkReferences();
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.toShapeStringOrNull();
		if (!sTarget) return null;
		return Format.struct("RadicalGeometry", sTarget);
	}
}

export class CombineGeometry extends GeometryBase {
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
	toContours() {
		let results = [];
		for (const part of this.m_parts) {
			for (const c of part.toContours()) {
				results.push(c);
			}
		}
		return results;
	}
	toReferences() {
		let results = [];
		for (const part of this.m_parts) {
			const rs = part.toReferences();
			if (!rs) return null;
			for (const c of rs) {
				results.push(c);
			}
		}
		return results;
	}
	getDependencies() {
		let results = [];
		for (const part of this.m_parts) {
			const rs = part.getDependencies();
			if (!rs) continue;
			for (const c of rs) results.push(c);
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
	measureComplexity() {
		let s = 0;
		for (const part of this.m_parts) s |= part.measureComplexity();
		return s;
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

export class BooleanGeometry extends GeometryBase {
	constructor(operator, operands) {
		super();
		this.m_operator = operator;
		this.m_operands = operands;
		this.m_resolved = null;
	}
	toContours() {
		if (this.m_resolved) return this.m_resolved;
		this.m_resolved = this.asContoursImpl();
		return this.m_resolved;
	}
	asContoursImpl() {
		if (this.m_operands.length === 0) return [];

		const stack = [];
		this.asOpStackImpl(stack);
		const arcs = TypoGeom.Boolean.combineStack(stack, CurveUtil.BOOLE_RESOLUTION);
		const ctx = new CurveUtil.BezToContoursSink();
		TypoGeom.ShapeConv.transferBezArcShape(arcs, ctx);
		return ctx.contours;
	}
	asOpStackImpl(sink) {
		if (this.m_operands.length === 0) {
			sink.push({
				type: "operand",
				fillType: TypoGeom.Boolean.PolyFillType.pftNonZero,
				shape: [],
			});
			return;
		}

		for (const [i, operand] of this.m_operands.entries()) {
			// Push operand
			if (operand instanceof BooleanGeometry) {
				operand.asOpStackImpl(sink);
			} else {
				sink.push({
					type: "operand",
					fillType: TypoGeom.Boolean.PolyFillType.pftNonZero,
					shape: CurveUtil.convertShapeToArcs(operand.toContours()),
				});
			}
			// Push operator if i > 0
			if (i > 0) sink.push({ type: "operator", operator: this.m_operator });
		}
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		let results = [];
		for (const part of this.m_operands) {
			const rs = part.getDependencies();
			if (!rs) continue;
			for (const c of rs) results.push(c);
		}
		return results;
	}
	filterTag(fn) {
		let filtered = [];
		for (const operand of this.m_operands) {
			const fp = operand.filterTag(fn);
			if (fp) filtered.push(fp);
		}
		return new BooleanGeometry(this.m_operator, filtered);
	}
	measureComplexity() {
		let s = CPLX_NON_SIMPLE;
		for (const operand of this.m_operands) s |= operand.measureComplexity();
		return s;
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

export class StrokeGeometry extends GeometryBase {
	constructor(geom, gizmo, radius, contrast, fInside) {
		super();
		this.m_geom = geom;
		this.m_gizmo = gizmo;
		this.m_radius = radius;
		this.m_contrast = contrast;
		this.m_fInside = fInside;
	}

	toContours() {
		// Produce simplified arcs
		const nonTransformedGeometry = new TransformedGeometry(this.m_gizmo.inverse(), this.m_geom);
		let arcs = TypoGeom.Boolean.removeOverlap(
			CurveUtil.convertShapeToArcs(nonTransformedGeometry.toContours()),
			TypoGeom.Boolean.PolyFillType.pftNonZero,
			CurveUtil.BOOLE_RESOLUTION,
		);

		// Fairize to get get some arcs that are simple enough
		const fairizedArcs = TypoGeom.Fairize.fairizeBezierShape(arcs);

		// Stroke the arcs
		const strokedArcs = strokeArcs(
			fairizedArcs,
			this.m_radius,
			this.m_contrast,
			this.m_fInside,
		);

		// Convert to Iosevka format
		let sink = new CurveUtil.BezToContoursSink(this.m_gizmo);
		TypoGeom.ShapeConv.transferBezArcShape(strokedArcs, sink, CurveUtil.GEOMETRY_PRECISION);

		return sink.contours;
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return this.m_geom.getDependencies();
	}
	unlinkReferences() {
		return new StrokeGeometry(
			this.m_geom.unlinkReferences(),
			this.m_gizmo,
			this.m_radius,
			this.m_contrast,
			this.m_fInside,
		);
	}
	filterTag(fn) {
		return new StrokeGeometry(
			this.m_geom.filterTag(fn),
			this.m_gizmo,
			this.m_radius,
			this.m_contrast,
			this.m_fInside,
		);
	}
	measureComplexity() {
		return this.m_geom.measureComplexity() | CPLX_NON_SIMPLE;
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.unlinkReferences().toShapeStringOrNull();
		if (!sTarget) return null;
		return Format.struct(
			`StrokeGeometry`,
			sTarget,
			Format.gizmo(this.m_gizmo),
			Format.n(this.m_radius),
			Format.n(this.m_contrast),
			this.m_fInside,
		);
	}
}

// This special geometry type is used in the finalization phase to create TTF contours.
export class SimplifyGeometry extends GeometryBase {
	constructor(g) {
		super();
		this.m_geom = g;
	}
	toContours() {
		// Produce simplified arcs
		let arcs = CurveUtil.convertShapeToArcs(this.m_geom.toContours());
		if (this.m_geom.measureComplexity() & CPLX_NON_SIMPLE) {
			arcs = TypoGeom.Boolean.removeOverlap(
				arcs,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				CurveUtil.BOOLE_RESOLUTION,
			);
		}

		// Convert to TT curves
		const sink = new QuadifySink();
		TypoGeom.ShapeConv.transferGenericShape(
			TypoGeom.Fairize.fairizeBezierShape(arcs),
			sink,
			CurveUtil.GEOMETRY_PRECISION,
		);
		return sink.contours;
	}
	toReferences() {
		return null;
	}
	getDependencies() {
		return this.m_geom.getDependencies();
	}
	unlinkReferences() {
		return new SimplifyGeometry(this.m_geom.unlinkReferences());
	}
	filterTag(fn) {
		return new SimplifyGeometry(this.m_geom.filterTag(fn));
	}
	measureComplexity() {
		return this.m_geom.measureComplexity();
	}
	toShapeStringOrNull() {
		const sTarget = this.m_geom.unlinkReferences().toShapeStringOrNull();
		if (!sTarget) return null;
		return `SimplifyGeometry{${sTarget}}`;
	}
}

// Utility functions
export function combineWith(a, b) {
	if (a instanceof CombineGeometry) {
		return a.with(b);
	} else {
		return new CombineGeometry([a, b]);
	}
}

export function hashGeometry(geom) {
	const s = geom.toShapeStringOrNull();
	if (!s) return null;
	return crypto.createHash("sha256").update(s).digest("hex");
}
