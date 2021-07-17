"use strict";

const SpiroJs = require("spiro");

const { linreg } = require("../utils");
const Format = require("../util/formatter");

class BiKnot {
	constructor(type, x, y, d1, d2) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.d1 = d1;
		this.d2 = d2;
		this.origTangent = null;
		this.proposedNormal = null;
		this.unimportant = 0;
	}
	clone() {
		const k1 = new BiKnot(this.type, this.x, this.y, this.d1, this.d2);
		k1.origTangent = this.origTangent;
		k1.proposedNormal = this.proposedNormal;
		k1.unimportant = this.unimportant;
		return k1;
	}

	toShapeString() {
		return Format.tuple(
			this.type,
			Format.n(this.x),
			Format.n(this.y),
			this.d1 == null ? "" : Format.n(this.d1),
			this.d2 == null ? "" : Format.n(this.d2),
			this.origTangent
				? Format.tuple(Format.n(this.origTangent.x), Format.n(this.origTangent.y))
				: "",
			this.proposedNormal
				? Format.tuple(Format.n(this.proposedNormal.x), Format.n(this.proposedNormal.y))
				: "",
			this.unimportant
		);
	}
}

class BiKnotCollector {
	constructor(gizmo, contrast) {
		this.gizmo = gizmo;
		this.contrast = contrast;

		this.controlKnots = [];
		this.defaultD1 = 0;
		this.defaultD2 = 0;
	}

	pushKnot(type, x, y) {
		const tfZ = this.gizmo.applyXY(x, y);
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (k0) {
			this.controlKnots.push(new BiKnot(type, tfZ.x, tfZ.y, k0.d1, k0.d2));
		} else {
			this.controlKnots.push(new BiKnot(type, tfZ.x, tfZ.y, this.defaultD1, this.defaultD2));
		}
	}

	setWidth(l, r) {
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (k0) {
			(k0.d1 = l), (k0.d2 = r);
		} else {
			(this.defaultD1 = l), (this.defaultD2 = r);
		}
	}
	headsTo(direction) {
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (k0) k0.proposedNormal = direction;
	}
	setType(type) {
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (k0) k0.type = type;
	}
	setUnimportant() {
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (k0) k0.unimportant = 1;
	}
}

class SpiroExpander {
	constructor(gizmo, contrast, closed, cks) {
		this.gizmo = gizmo;
		this.contrast = contrast;
		this.closed = closed;
		this.controlKnots = cks;
	}

	initializeNormals() {
		const normalRectifier = new NormalRectifier(this.controlKnots, this.gizmo);
		SpiroJs.spiroToArcsOnContext(this.controlKnots, this.closed, normalRectifier);
	}

	iterateNormals() {
		const centerBone = this.getPass2Knots();
		const normalRectifier = new NormalRectifier(this.controlKnots, this.gizmo);
		SpiroJs.spiroToArcsOnContext(centerBone, this.closed, normalRectifier);
	}
	getPass2Knots() {
		const expanded = this.expand(this.contrast);
		const middles = [];
		for (let j = 0; j < this.controlKnots.length; j++) {
			const lhs = this.gizmo.unapply(expanded.lhs[j]);
			const rhs = this.gizmo.unapply(expanded.rhs[j]);
			middles[j] = {
				x: 0.5 * (lhs.x + rhs.x),
				y: 0.5 * (lhs.y + rhs.y),
				type: this.controlKnots[j].type,
				unimportant: this.controlKnots[j].unimportant
			};
		}
		return middles;
	}

	expand() {
		const lhs = [],
			rhs = [];
		// Initialize knots
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
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
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
			if (knot.unimportant) continue;

			let dx, dy;
			if (knot.proposedNormal) {
				dx = knot.proposedNormal.x;
				dy = knot.proposedNormal.y;
			} else {
				dx = normalX(knot.origTangent, this.contrast);
				dy = normalY(knot.origTangent, this.contrast);
			}
			lhs[j].x = knot.x + knot.d1 * dx;
			lhs[j].y = knot.y + knot.d1 * dy;

			rhs[j].x = knot.x - knot.d2 * dx;
			rhs[j].y = knot.y - knot.d2 * dy;
		}
		this.interpolateUnimportantKnots(lhs, rhs);
		return { lhs, rhs };
	}

	interpolateUnimportantKnots(lhs, rhs) {
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
			if (!knot.unimportant) continue;
			let jBefore, jAfter;
			for (jBefore = j - 1; cyNth(this.controlKnots, jBefore).unimportant; jBefore--);
			for (jAfter = j + 1; cyNth(this.controlKnots, jAfter).unimportant; jAfter++);

			const knotBefore = this.gizmo.unapply(cyNth(this.controlKnots, jBefore)),
				knotAfter = this.gizmo.unapply(cyNth(this.controlKnots, jAfter)),
				ref = this.gizmo.unapply(knot),
				lhsBefore = this.gizmo.unapply(cyNth(lhs, jBefore)),
				lhsAfter = this.gizmo.unapply(cyNth(lhs, jAfter)),
				rhsBefore = this.gizmo.unapply(cyNth(rhs, jBefore)),
				rhsAfter = this.gizmo.unapply(cyNth(rhs, jAfter));

			const lhsTf = this.gizmo.applyXY(
				linreg(knotBefore.x, lhsBefore.x, knotAfter.x, lhsAfter.x, ref.x),
				linreg(knotBefore.y, lhsBefore.y, knotAfter.y, lhsAfter.y, ref.y)
			);
			const rhsTf = this.gizmo.applyXY(
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
		this.gizmo = gizmo;
		this.controlKnots = stage1ControlKnots;
		this.nKnotsProcessed = 0;
	}

	beginShape() {}
	endShape() {}
	moveTo(x, y) {
		this.nKnotsProcessed += 1;
	}
	arcTo(arc, x, y) {
		if (this.nKnotsProcessed === 1) {
			const d = this.gizmo.applyOffsetXY(arc.deriveX0, arc.deriveY0);
			if (isTangentValid(d)) this.controlKnots[0].origTangent = d;
			else throw new Error("NaN angle detected.");
		}
		if (this.controlKnots[this.nKnotsProcessed]) {
			const d = this.gizmo.applyOffsetXY(arc.deriveX1, arc.deriveY1);
			if (isTangentValid(d)) this.controlKnots[this.nKnotsProcessed].origTangent = d;
			else throw new Error("NaN angle detected.");
		}
		this.nKnotsProcessed += 1;
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

exports.BiKnotCollector = BiKnotCollector;
exports.SpiroExpander = SpiroExpander;
