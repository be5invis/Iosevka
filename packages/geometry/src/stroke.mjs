import * as TypoGeom from "typo-geom";

import {
	BOOLE_RESOLUTION,
	GEOMETRY_PRECISION,
	OCCURRENT_PRECISION,
	OffsetCurve,
	RoundCapCurve,
} from "./curve-util.mjs";

export function strokeArcs(arcs, radius, contrast, fInside) {
	let currentArcs = null;
	for (const contour of arcs) {
		let leftSide = offsetContour(contour, -radius, contrast);
		let rightSide = offsetContour(contour, radius, contrast);
		let bezs = TypoGeom.ShapeConv.convertShapeToBez3([leftSide, rightSide], GEOMETRY_PRECISION);

		if (!currentArcs) {
			currentArcs = bezs;
		} else {
			currentArcs = TypoGeom.Boolean.combine(
				TypoGeom.Boolean.ClipType.ctUnion,
				currentArcs,
				bezs,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				BOOLE_RESOLUTION,
			);
		}
	}

	if (currentArcs) {
		if (fInside) {
			return TypoGeom.Boolean.combine(
				TypoGeom.Boolean.ClipType.ctIntersection,
				TypoGeom.ShapeConv.convertShapeToBez3(arcs, GEOMETRY_PRECISION),
				currentArcs,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				TypoGeom.Boolean.PolyFillType.pftNonZero,
				BOOLE_RESOLUTION,
			);
		} else {
			return currentArcs;
		}
	} else {
		return [];
	}
}

function offsetContour(arcs, distance, contrast) {
	// The arcs here are guaranteed to be simple, i.e. no self-intersections.
	const fReverse = distance < 0;
	let offsetArcs = [];
	let prevOffsetedArc = new OffsetCurve(arcs[arcs.length - 1], distance, contrast);
	for (let i = 0; i < arcs.length; i++) {
		const current = arcs[i];
		const currentOffsetedArc = new OffsetCurve(current, distance, contrast);

		// Evaluate the previous' end and the current's start, determine whether they are close enough
		const prevEnd = prevOffsetedArc.eval(1);
		const currentStart = currentOffsetedArc.eval(0);
		if (
			Math.abs(prevEnd.x - currentStart.x) > OCCURRENT_PRECISION ||
			Math.abs(prevEnd.y - currentStart.y) > OCCURRENT_PRECISION
		) {
			offsetArcs.push(
				createCap(
					distance < 0,
					contrast,
					prevOffsetedArc.bone.eval(1),
					prevEnd,
					prevOffsetedArc.derivative(1),
					currentOffsetedArc.bone.eval(0),
					currentStart,
					currentOffsetedArc.derivative(0),
				),
			);
			// offsetArcs.push(Bez3FromHermite(prevEnd, dPrevEnd, currentStart, dCurrentStart));
		}

		// Push the current arc
		offsetArcs.push(currentOffsetedArc);

		prevOffsetedArc = currentOffsetedArc;
	}

	if (fReverse) {
		offsetArcs.reverse();
		for (let i = 0; i < offsetArcs.length; i++) {
			offsetArcs[i] = new TypoGeom.Arcs.Reverted(offsetArcs[i]);
		}
	}
	return offsetArcs;
}

function createCap(
	side,
	contrast,
	prevEndNoOffset, // Previous non-offseted curve's end point
	prevEnd, // Previous offseted curve's end point
	dPrevEnd, // Previous offseted curve's end point's derivative
	currentStartNoOffset, // Current non-offseted curve's start point
	currentStart, // Current offseted curve's start point
	dCurrentStart, // Current offseted curve's start point's derivative
) {
	return new RoundCapCurve(
		side,
		contrast,
		prevEndNoOffset,
		prevEnd,
		currentStartNoOffset,
		currentStart,
	);
}
