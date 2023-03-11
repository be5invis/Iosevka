import * as SpiroJs from "spiro";

import { linreg } from "../utils.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////

export class SpiroExpander {
	constructor(gizmo, contrast, closed, biKnots) {
		this.m_gizmo = gizmo;
		this.m_contrast = contrast;
		this.m_closed = closed;
		this.m_biKnots = [];
		for (const knot of biKnots) {
			this.m_biKnots.push(knot.withGizmo(gizmo));
		}
	}
	initializeNormals() {
		const normalRectifier = new NormalRectifier(this.m_biKnots, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(this.m_biKnots, this.m_closed, normalRectifier);
	}
	iterateNormals() {
		const centerBone = this.getPass2Knots();
		const normalRectifier = new NormalRectifier(this.m_biKnots, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(centerBone, this.m_closed, normalRectifier);
	}
	getPass2Knots() {
		const expanded = this.expand(this.m_contrast);
		const middles = [];
		for (let j = 0; j < this.m_biKnots.length; j++) {
			const lhs = this.m_gizmo.unapply(expanded.lhs[j]);
			const rhs = this.m_gizmo.unapply(expanded.rhs[j]);
			middles[j] = {
				x: 0.5 * (lhs.x + rhs.x),
				y: 0.5 * (lhs.y + rhs.y),
				type: this.m_biKnots[j].type,
				unimportant: this.m_biKnots[j].unimportant
			};
		}
		return middles;
	}
	expand() {
		const lhs = [],
			rhs = [];
		// Initialize knots
		for (let j = 0; j < this.m_biKnots.length; j++) {
			const knot = this.m_biKnots[j];
			lhs[j] = {
				type: knot.type,
				unimportant: knot.unimportant,
				x: 0,
				y: 0
			};
			rhs[j] = {
				type: reverseKnotType(knot.type),
				unimportant: knot.unimportant,
				x: 0,
				y: 0
			};
		}
		// Create important knots
		for (let j = 0; j < this.m_biKnots.length; j++) {
			const knot = this.m_biKnots[j];
			if (knot.unimportant) continue;
			let dx, dy;
			if (knot.proposedNormal) {
				dx = knot.proposedNormal.x;
				dy = knot.proposedNormal.y;
			} else {
				dx = normalX(knot.origTangent, this.m_contrast);
				dy = normalY(knot.origTangent, this.m_contrast);
			}
			lhs[j].x = knot.x + knot.d1 * dx;
			lhs[j].y = knot.y + knot.d1 * dy;
			rhs[j].x = knot.x - knot.d2 * dx;
			rhs[j].y = knot.y - knot.d2 * dy;
		}
		this.interpolateUnimportantKnots(lhs, rhs);

		const lhsUntransformed = [],
			rhsUntransformed = [];
		for (const z of lhs) {
			const u = this.m_gizmo.unapply(z);
			lhsUntransformed.push({ type: z.type, x: u.x, y: u.y });
		}
		for (const z of rhs) {
			const u = this.m_gizmo.unapply(z);
			rhsUntransformed.push({ type: z.type, x: u.x, y: u.y });
		}
		return { lhs, rhs, lhsUntransformed, rhsUntransformed };
	}
	interpolateUnimportantKnots(lhs, rhs) {
		for (let j = 0; j < this.m_biKnots.length; j++) {
			const knot = this.m_biKnots[j];
			if (!knot.unimportant) continue;
			let jBefore, jAfter;
			for (jBefore = j - 1; cyNth(this.m_biKnots, jBefore).unimportant; jBefore--);
			for (jAfter = j + 1; cyNth(this.m_biKnots, jAfter).unimportant; jAfter++);
			const knotBefore = this.m_gizmo.unapply(cyNth(this.m_biKnots, jBefore)),
				knotAfter = this.m_gizmo.unapply(cyNth(this.m_biKnots, jAfter)),
				ref = this.m_gizmo.unapply(knot),
				lhsBefore = this.m_gizmo.unapply(cyNth(lhs, jBefore)),
				lhsAfter = this.m_gizmo.unapply(cyNth(lhs, jAfter)),
				rhsBefore = this.m_gizmo.unapply(cyNth(rhs, jBefore)),
				rhsAfter = this.m_gizmo.unapply(cyNth(rhs, jAfter));
			const lhsTf = this.m_gizmo.applyXY(
				linreg(knotBefore.x, lhsBefore.x, knotAfter.x, lhsAfter.x, ref.x),
				linreg(knotBefore.y, lhsBefore.y, knotAfter.y, lhsAfter.y, ref.y)
			);
			const rhsTf = this.m_gizmo.applyXY(
				linreg(knotBefore.x, rhsBefore.x, knotAfter.x, rhsAfter.x, ref.x),
				linreg(knotBefore.y, rhsBefore.y, knotAfter.y, rhsAfter.y, ref.y)
			);
			(lhs[j].x = lhsTf.x), (lhs[j].y = lhsTf.y);
			(rhs[j].x = rhsTf.x), (rhs[j].y = rhsTf.y);
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
			const d = this.m_gizmo.applyOffsetXY(arc.deriveX0, arc.deriveY0);
			if (isTangentValid(d)) {
				this.m_biKnots[0].origTangent = d;
			} else {
				throw new Error("NaN angle detected.");
			}
		}
		if (this.m_biKnots[this.m_nKnotsProcessed]) {
			const d = this.m_gizmo.applyOffsetXY(arc.deriveX1, arc.deriveY1);
			if (isTangentValid(d)) {
				this.m_biKnots[this.m_nKnotsProcessed].origTangent = d;
			} else {
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
