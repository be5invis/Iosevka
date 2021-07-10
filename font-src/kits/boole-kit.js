"use strict";

const TypoGeom = require("typo-geom");
const { BooleanGeometry, TransformedGeometry } = require("../support/geometry");

exports.SetupBuilders = function ({ Glyph, GlobalTransform }) {
	function impl(operator, operands) {
		return function () {
			const operandGeometries = [];
			const forwardGizmo = this.gizmo || GlobalTransform;
			const backwardGizmo = forwardGizmo.inverse();
			for (const operand of operands) {
				const g1 = new Glyph();
				g1.gizmo = forwardGizmo;
				g1.include(operand);
				operandGeometries.push(new TransformedGeometry(g1.geometry, backwardGizmo));
			}
			return this.includeGeometry(
				new TransformedGeometry(
					new BooleanGeometry(operator, operandGeometries),
					forwardGizmo
				)
			);
		};
	}
	const union = (...operands) => impl(TypoGeom.Boolean.ClipType.ctUnion, operands);
	const intersection = (...operands) => impl(TypoGeom.Boolean.ClipType.ctIntersection, operands);
	const difference = (...operands) => impl(TypoGeom.Boolean.ClipType.ctDifference, operands);
	return {
		union: union,
		intersection: intersection,
		difference: difference
	};
};
