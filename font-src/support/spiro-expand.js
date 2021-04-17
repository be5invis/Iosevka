const Transform = require("./transform");
const { linreg } = require("./utils");

class SpiroExpansionContext1 {
	constructor(gizmo) {
		this.gizmo = gizmo;
		this.controlKnots = [];
		this.defaultD1 = 0;
		this.defaultD2 = 0;
	}
	beginShape() {}
	endShape() {}
	moveTo(x, y, unimportant) {
		if (unimportant) return;
		if (!isFinite(x) || !isFinite(y)) throw new Error("NaN detected.");
		this.controlKnots.push({
			type: "g4",
			d1: this.defaultD1,
			d2: this.defaultD2,
			...this.gizmo.apply({ x, y })
		});
	}
	arcTo(arc, x, y) {
		if (!isFinite(x) || !isFinite(y)) throw new Error("NaN detected.");
		const k0 = this.controlKnots[this.controlKnots.length - 1];
		if (!k0) throw new Error("Unreachable: lineTo called before moveTo");
		if (k0.normalAngle == null) {
			const tfDerive0 = this.gizmo.applyOffset({ x: arc.deriveX0, y: arc.deriveY0 });
			k0.normalAngle = Math.PI / 2 + Math.atan2(tfDerive0.y, tfDerive0.x);
		}
		{
			const tfDerive1 = this.gizmo.applyOffset({ x: arc.deriveX1, y: arc.deriveY1 });
			this.controlKnots.push({
				type: "g4",
				d1: k0.d1,
				d2: k0.d2,
				...this.gizmo.apply({ x, y }),
				normalAngle: Math.PI / 2 + Math.atan2(tfDerive1.y, tfDerive1.x)
			});
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
		if (k0) k0.unimportant = true;
	}

	getPass2Knots(closed, contrast) {
		const expanded = this.expand(contrast);
		const middles = [];
		for (let j = 0; j + (closed ? 1 : 0) < this.controlKnots.length; j++) {
			middles[j] = {
				x: 0.5 * (expanded.lhs[j].x + expanded.rhs[j].x),
				y: 0.5 * (expanded.lhs[j].y + expanded.rhs[j].y),
				type: this.controlKnots[j].type,
				unimportant: this.controlKnots[j].unimportant
			};
		}
		return middles;
	}
	expand(contrast) {
		const lhs = [],
			rhs = [];

		// Create important knots
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
			if (knot.unimportant) continue;

			let dx, dy;
			if (knot.proposedNormal) {
				dx = knot.proposedNormal.x;
				dy = knot.proposedNormal.y;
			} else {
				dx = normalX(knot.normalAngle, contrast);
				dy = normalY(knot.normalAngle, contrast);
			}
			lhs[j] = {
				type: knot.type,
				x: knot.x + knot.d1 * dx,
				y: knot.y + knot.d1 * dy
			};
			rhs[j] = {
				type: reverseKnotType(knot.type),
				x: knot.x - knot.d2 * dx,
				y: knot.y - knot.d2 * dy
			};
		}
		this.interpolateUnimportantKnots(lhs, rhs);
		return { lhs, rhs };
	}
	interpolateUnimportantKnots(lhs, rhs) {
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
			if (!knot.unimportant) continue;
			let jBefore, jAfter;
			for (jBefore = j - 1; this.controlKnots[jBefore].unimportant; jBefore--);
			for (jAfter = j + 1; this.controlKnots[jAfter].unimportant; jAfter++);

			const knotBefore = this.gizmo.unapply(this.controlKnots[jBefore]),
				knotAfter = this.gizmo.unapply(this.controlKnots[jAfter]),
				ref = this.gizmo.unapply(knot),
				lhsBefore = this.gizmo.unapply(lhs[jBefore]),
				lhsAfter = this.gizmo.unapply(lhs[jAfter]),
				rhsBefore = this.gizmo.unapply(rhs[jBefore]),
				rhsAfter = this.gizmo.unapply(rhs[jAfter]);

			lhs[j] = {
				unimportant: true,
				type: knot.type,
				...this.gizmo.apply({
					x: linreg(knotBefore.x, lhsBefore.x, knotAfter.x, lhsAfter.x, ref.x),
					y: linreg(knotBefore.y, lhsBefore.y, knotAfter.y, lhsAfter.y, ref.y)
				})
			};
			rhs[j] = {
				unimportant: true,
				type: reverseKnotType(knot.type),
				...this.gizmo.apply({
					x: linreg(knotBefore.x, rhsBefore.x, knotAfter.x, rhsAfter.x, ref.x),
					y: linreg(knotBefore.y, rhsBefore.y, knotAfter.y, rhsAfter.y, ref.y)
				})
			};
		}
	}
}

class SpiroExpansionContext2 {
	constructor(stage1ControlKnots, gizmo) {
		this.gizmo = gizmo;
		this.controlKnots = stage1ControlKnots;
		this.nKnotsProcessed = 0;
	}

	beginShape() {}
	endShape() {}
	moveTo(x, y, unimportant) {
		if (unimportant) return;
		this.nKnotsProcessed += 1;
	}
	arcTo(arc, x, y) {
		if (this.nKnotsProcessed === 1) {
			const angle = computeNormalAngle(this.gizmo, arc.deriveX0, arc.deriveY0);
			if (isFinite(angle)) this.controlKnots[0].normalAngle = angle;
		}
		{
			const angle = computeNormalAngle(this.gizmo, arc.deriveX1, arc.deriveY1);
			if (isFinite(angle)) this.controlKnots[this.nKnotsProcessed].normalAngle = angle;
		}
		this.nKnotsProcessed += 1;
	}
}

function normalX(angle, contrast) {
	return Math.cos(angle) * contrast;
}
function normalY(angle) {
	return Math.sin(angle);
}
function reverseKnotType(ty) {
	return ty === "left" ? "right" : ty === "right" ? "left" : ty;
}
function computeNormalAngle(gizmo, x, y) {
	const tfd = gizmo.applyOffset({ x, y });
	return Math.PI / 2 + Math.atan2(tfd.y, tfd.x);
}

exports.SpiroExpansionContext1 = SpiroExpansionContext1;
exports.SpiroExpansionContext2 = SpiroExpansionContext2;
