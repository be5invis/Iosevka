const Transform = require("./transform");
const { linreg } = require("./utils");

module.exports = class SpiroExpansionContext {
	constructor() {
		this.gizmo = Transform.Id();
		this.controlKnots = [];
		this.defaultD1 = 0;
		this.defaultD2 = 0;
	}
	beginShape() {}
	endShape() {}
	moveTo(x, y, unimportant) {
		if (unimportant) return;
		this.controlKnots.push({
			type: "g4",
			d1: this.defaultD1,
			d2: this.defaultD2,
			...this.gizmo.apply({ x, y })
		});
	}
	arcTo(arc, x, y) {
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
	expand(contrast) {
		if (contrast == null) contrast = 1 / 0.9;
		const lhs = [],
			rhs = [];

		// Create important knots
		for (let j = 0; j < this.controlKnots.length; j++) {
			const knot = this.controlKnots[j];
			if (knot.unimportant) continue;

			let dx = 0,
				dy = 0;
			if (knot.proposedNormal) {
				dx = knot.proposedNormal.x - normalX(knot.normalAngle, contrast);
				dy = knot.proposedNormal.y - normalY(knot.normalAngle, contrast);
			}
			lhs[j] = {
				type: knot.type,
				x: knot.x + knot.d1 * (dx + normalX(knot.normalAngle, contrast)),
				y: knot.y + knot.d1 * (dy + normalY(knot.normalAngle, contrast))
			};
			rhs[j] = {
				type: reverseKnotType(knot.type),
				x: knot.x - knot.d2 * (dx + normalX(knot.normalAngle, contrast)),
				y: knot.y - knot.d2 * (dy + normalY(knot.normalAngle, contrast))
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
				type: knot.type,
				...this.gizmo.apply({
					x: linreg(knotBefore.x, lhsBefore.x, knotAfter.x, lhsAfter.x, ref.x),
					y: linreg(knotBefore.y, lhsBefore.y, knotAfter.y, lhsAfter.y, ref.y)
				})
			};
			rhs[j] = {
				type: reverseKnotType(knot.type),
				...this.gizmo.apply({
					x: linreg(knotBefore.x, rhsBefore.x, knotAfter.x, rhsAfter.x, ref.x),
					y: linreg(knotBefore.y, rhsBefore.y, knotAfter.y, rhsAfter.y, ref.y)
				})
			};
		}
	}
};
function normalX(angle, contrast) {
	return Math.cos(angle) * contrast;
}
function normalY(angle) {
	return Math.sin(angle);
}
function reverseKnotType(ty) {
	return ty === "left" ? "right" : ty === "right" ? "left" : ty;
}
