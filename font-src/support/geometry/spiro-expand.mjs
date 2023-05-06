import * as SpiroJs from "spiro";

import { linreg, mix } from "../utils.mjs";

import { Vec2 } from "./point.mjs";
import { ControlKnot } from "./spiro-control.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////

export class SpiroExpander {
	constructor(gizmo, contrast, closed, biKnots) {
		this.m_gizmo = gizmo;
		this.m_contrast = contrast;
		this.m_closed = closed;

		this.m_biKnotsU = Array.from(biKnots);
		this.m_biKnotsT = biKnots.map(k => k.withGizmo(gizmo));
	}
	initializeNormals() {
		const normalRectifier = new NormalRectifier(this.m_biKnotsT, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(this.m_biKnotsT, this.m_closed, normalRectifier);
	}
	iterateNormals() {
		const centerBone = this.getPass2Knots();
		const normalRectifier = new NormalRectifier(this.m_biKnotsT, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(centerBone, this.m_closed, normalRectifier);
	}
	getPass2Knots() {
		const expanded = this.expand(this.m_contrast);
		const middles = [];
		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const lhs = expanded.lhs[j];
			const rhs = expanded.rhs[j];
			middles[j] = new ControlKnot(
				this.m_biKnotsT[j].type,
				mix(lhs.x, rhs.x, 0.5),
				mix(lhs.y, rhs.y, 0.5)
			);
		}
		return middles;
	}
	expand() {
		const lhs = [],
			rhs = [],
			lhsUntransformed = [],
			rhsUntransformed = [];

		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const knot = this.m_biKnotsT[j];
			lhs[j] = new ControlKnot(knot.type, 0, 0);
			rhs[j] = new ControlKnot(reverseKnotType(knot.type), 0, 0);
			lhsUntransformed[j] = new ControlKnot(knot.type, 0, 0);
			rhsUntransformed[j] = new ControlKnot(reverseKnotType(knot.type), 0, 0);
		}

		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const knotT = this.m_biKnotsT[j];
			if (knotT.unimportant) continue;
			let dx, dy;
			if (knotT.proposedNormal) {
				dx = knotT.proposedNormal.x;
				dy = knotT.proposedNormal.y;
			} else {
				dx = normalX(knotT.origTangent, this.m_contrast);
				dy = normalY(knotT.origTangent, this.m_contrast);
			}
			lhs[j].x = knotT.x + knotT.d1 * dx;
			lhs[j].y = knotT.y + knotT.d1 * dy;
			rhs[j].x = knotT.x - knotT.d2 * dx;
			rhs[j].y = knotT.y - knotT.d2 * dy;

			this.m_gizmo.unapplyToSink(lhs[j], lhsUntransformed[j]);
			this.m_gizmo.unapplyToSink(rhs[j], rhsUntransformed[j]);
		}

		this.interpolateUnimportantKnots(lhs, rhs, lhsUntransformed, rhsUntransformed);
		return { lhs, rhs, lhsUntransformed, rhsUntransformed };
	}
	interpolateUnimportantKnots(lhsT, rhsT, lhsU, rhsU) {
		for (let j = 0; j < this.m_biKnotsU.length; j++) {
			const knotU = this.m_biKnotsU[j];
			if (!knotU.unimportant) continue;
			let jBefore, jAfter;
			for (jBefore = j - 1; cyNth(this.m_biKnotsU, jBefore).unimportant; jBefore--);
			for (jAfter = j + 1; cyNth(this.m_biKnotsU, jAfter).unimportant; jAfter++);

			const knotUBefore = cyNth(this.m_biKnotsU, jBefore),
				knotUAfter = cyNth(this.m_biKnotsU, jAfter),
				lhsUBefore = cyNth(lhsU, jBefore),
				lhsUAfter = cyNth(lhsU, jAfter),
				rhsUBefore = cyNth(rhsU, jBefore),
				rhsUAfter = cyNth(rhsU, jAfter);

			lhsU[j].x = linreg(knotUBefore.x, lhsUBefore.x, knotUAfter.x, lhsUAfter.x, knotU.x);
			lhsU[j].y = linreg(knotUBefore.y, lhsUBefore.y, knotUAfter.y, lhsUAfter.y, knotU.y);
			rhsU[j].x = linreg(knotUBefore.x, rhsUBefore.x, knotUAfter.x, rhsUAfter.x, knotU.x);
			rhsU[j].y = linreg(knotUBefore.y, rhsUBefore.y, knotUAfter.y, rhsUAfter.y, knotU.y);

			this.m_gizmo.applyToSink(lhsU[j], lhsT[j]);
			this.m_gizmo.applyToSink(rhsU[j], rhsT[j]);
		}
	}
}
class NormalRectifier {
	constructor(stage1ControlKnots, gizmo) {
		this.m_gizmo = gizmo;
		this.m_biKnots = stage1ControlKnots;
		this.m_nKnotsProcessed = 0;
	}
	beginShape() {}
	endShape() {}
	moveTo(x, y) {
		this.m_nKnotsProcessed += 1;
	}
	arcTo(arc, x, y) {
		if (this.m_nKnotsProcessed === 1) {
			const d = new Vec2(arc.deriveX0, arc.deriveY0);
			if (isTangentValid(d)) {
				this.m_biKnots[0].origTangent = d;
			} else {
				console.error(this.m_biKnots);
				throw new Error("NaN angle detected.");
			}
		}
		if (this.m_biKnots[this.m_nKnotsProcessed]) {
			const d = new Vec2(arc.deriveX1, arc.deriveY1);
			if (isTangentValid(d)) {
				this.m_biKnots[this.m_nKnotsProcessed].origTangent = d;
			} else {
				console.error(this.m_biKnots);
				throw new Error("NaN angle detected.");
			}
		}
		this.m_nKnotsProcessed += 1;
	}
}

function isTangentValid(d) {
	return isFinite(d.x) && isFinite(d.y);
}

function normalX(tangent, contrast) {
	return contrast * (-tangent.y / Math.hypot(tangent.x, tangent.y));
}
function normalY(tangent) {
	return tangent.x / Math.hypot(tangent.x, tangent.y);
}

function reverseKnotType(ty) {
	return ty === "left" ? "right" : ty === "right" ? "left" : ty;
}
function cyNth(a, j) {
	return a[j % a.length];
}
