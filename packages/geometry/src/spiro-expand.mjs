import { linreg, mix } from "@iosevka/util";
import * as SpiroJs from "spiro";

import { Vec2 } from "./point.mjs";
import { MonoKnot } from "./spiro-control.mjs";

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
		return normalRectifier.totalDelta / normalRectifier.nKnotsProcessed;
	}
	getPass2Knots() {
		const expanded = this.expand(this.m_contrast);
		const middles = [];
		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const lhs = expanded.lhs[j];
			const rhs = expanded.rhs[j];
			middles[j] = new MonoKnot(
				this.m_biKnotsT[j].type,
				this.m_biKnotsT[j].unimportant,
				mix(lhs.x, rhs.x, 0.5),
				mix(lhs.y, rhs.y, 0.5),
			);
		}
		return middles;
	}
	expand() {
		const lhsT = [], // transformed LHS
			rhsT = [], // transformed RHS
			lhsU = [], // untransformed LHS
			rhsU = []; // untransformed RHS

		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const bk = this.m_biKnotsT[j];
			lhsT[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			rhsT[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			lhsU[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			rhsU[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
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
			lhsT[j].x = knotT.x + knotT.d1 * dx;
			lhsT[j].y = knotT.y + knotT.d1 * dy;
			rhsT[j].x = knotT.x - knotT.d2 * dx;
			rhsT[j].y = knotT.y - knotT.d2 * dy;

			this.m_gizmo.unapplyToSink(lhsT[j], lhsU[j]);
			this.m_gizmo.unapplyToSink(rhsT[j], rhsU[j]);
		}

		this.interpolateUnimportantKnots(lhsT, rhsT, lhsU, rhsU);
		return { lhs: lhsT, rhs: rhsT, lhsUntransformed: lhsU, rhsUntransformed: rhsU };
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

		this.nKnotsProcessed = 0;
		this.totalDelta = 0;
	}
	beginShape() {}
	endShape() {}
	moveTo(x, y) {
		this.nKnotsProcessed += 1;
	}
	arcTo(arc, x, y) {
		if (this.nKnotsProcessed === 1) {
			const d = new Vec2(arc.deriveX0, arc.deriveY0);
			if (isTangentValid(d)) {
				this.updateKnotTangent(this.m_biKnots[0], d);
			} else {
				throw new Error("NaN angle detected.");
			}
		}
		if (this.m_biKnots[this.nKnotsProcessed]) {
			const d = new Vec2(arc.deriveX1, arc.deriveY1);
			if (isTangentValid(d)) {
				this.updateKnotTangent(this.m_biKnots[this.nKnotsProcessed], d);
			} else {
				throw new Error("NaN angle detected.");
			}
		}
		this.nKnotsProcessed += 1;
	}

	updateKnotTangent(knot, d) {
		if (isTangentValid(knot.origTangent)) {
			this.totalDelta +=
				(d.x - knot.origTangent.x) * (d.x - knot.origTangent.x) +
				(d.y - knot.origTangent.y) * (d.y - knot.origTangent.y);
		} else {
			this.totalDelta += 4;
		}
		knot.origTangent = d;
	}
}

function isTangentValid(d) {
	return d && isFinite(d.x) && isFinite(d.y);
}

function normalX(tangent, contrast) {
	return contrast * (-tangent.y / Math.hypot(tangent.x, tangent.y));
}
function normalY(tangent) {
	return tangent.x / Math.hypot(tangent.x, tangent.y);
}

function cyNth(a, j) {
	return a[j % a.length];
}
