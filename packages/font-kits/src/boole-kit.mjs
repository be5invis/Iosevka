import { BooleanGeometry, TransformedGeometry } from "@iosevka/geometry";
import { Glyph } from "@iosevka/glyph";
import * as TypoGeom from "typo-geom";

///////////////////////////////////////////////////////////////////////////////////////////////////
class BooleImpl {
	constructor(bindings, operator, operands) {
		this.bindings = bindings;
		this.operator = operator;
		this.operands = operands;
	}
	applyToGlyph(glyph) {
		const operandGeometries = [];
		const forwardGizmo = glyph.gizmo || this.bindings.GlobalTransform;
		const backwardGizmo = forwardGizmo.inverse();
		for (const operand of this.operands) {
			const g1 = new Glyph();
			g1.gizmo = forwardGizmo;
			g1.include(operand);
			operandGeometries.push(TransformedGeometry.create(backwardGizmo, g1.geometry));
		}
		return glyph.includeGeometry(
			TransformedGeometry.create(
				forwardGizmo,
				new BooleanGeometry(this.operator, operandGeometries),
			),
		);
	}
}
export function SetupBuilders(bindings) {
	const union = (...operands) =>
		new BooleImpl(bindings, TypoGeom.Boolean.ClipType.ctUnion, operands);
	const intersection = (...operands) =>
		new BooleImpl(bindings, TypoGeom.Boolean.ClipType.ctIntersection, operands);
	const difference = (...operands) =>
		new BooleImpl(bindings, TypoGeom.Boolean.ClipType.ctDifference, operands);
	const withKnockout = (mask, ...operands) => difference(union(...operands), mask);
	return {
		union: union,
		intersection: intersection,
		difference: difference,
		"with-knockout": withKnockout,
	};
}
