"use strict";

const TypoGeom = require("typo-geom");
const Point = require("./point");
const Transform = require("./transform");

exports.GEOMETRY_PRECISION = 1 / 4;
exports.RECIP_GEOMETRY_PRECISION = 4;
exports.BOOLE_RESOLUTION = 0x4000;

exports.OffsetCurve = class OffsetCurve {
	constructor(bone, offset, contrast) {
		this.bone = bone;
		this.offset = offset;
		this.contrast = contrast;
	}
	eval(t) {
		const c = this.bone.eval(t);
		const d = this.bone.derivative(t);
		const absD = Math.hypot(d.x, d.y);
		return {
			x: c.x - (d.y / absD) * this.offset * this.contrast,
			y: c.y + (d.x / absD) * this.offset
		};
	}
	derivative(t) {
		const DELTA = 1 / 0x10000;
		const forward = this.eval(t + DELTA);
		const backward = this.eval(t - DELTA);
		return {
			x: (forward.x - backward.x) / (2 * DELTA),
			y: (forward.y - backward.y) / (2 * DELTA)
		};
	}
};

exports.convertContourToCubic = function convertContourToCubic(contour) {
	if (!contour || !contour.length) return [];

	const newContour = [];
	let z0 = contour[0];
	newContour.push(Point.cornerFrom(z0));

	for (let j = 1; j < contour.length; j++) {
		const z = contour[j];
		if (z.on) {
			newContour.push(Point.cornerFrom(z));
			z0 = z;
		} else if (z.cubic) {
			const z1 = z;
			const z2 = contour[j + 1];
			const z3 = contour[j + 2];

			newContour.push(Point.cubicOffFrom(z1));
			newContour.push(Point.cubicOffFrom(z2));
			newContour.push(Point.cornerFrom(z3));

			z0 = z3;
			j += 2;
		} else {
			const zc = z;
			let zf = contour[j + 1] || contour[0];
			const zfIsCorner = zf.on;
			if (!zfIsCorner) zf = Point.cornerFrom(zc).mix(0.5, zf);

			newContour.push(Point.cubicOffFrom(z0).mix(2 / 3, zc));
			newContour.push(Point.cubicOffFrom(zf).mix(2 / 3, zc));
			newContour.push(Point.cornerFrom(zf));

			z0 = zf;
			if (zfIsCorner) j++;
		}
	}

	return newContour;
};

exports.convertShapeToArcs = function convertShapeToArcs(shape) {
	return shape.map(convertContourToArcs);
};

function convertContourToArcs(contour) {
	if (!contour || !contour.length) return [];

	const newContour = [];
	let z0 = Point.cornerFrom(contour[0]);

	for (let j = 1; j < contour.length; j++) {
		const z = contour[j];
		if (z.on) {
			newContour.push(
				TypoGeom.Arcs.Bez3.fromStraightSegment(
					new TypoGeom.Arcs.StraightSegment(z0, Point.cornerFrom(z))
				)
			);
			z0 = z;
		} else if (z.cubic) {
			const z1 = z;
			const z2 = contour[j + 1];
			const z3 = contour[j + 2];
			newContour.push(
				new TypoGeom.Arcs.Bez3(
					z0,
					Point.cubicOffFrom(z1),
					Point.cubicOffFrom(z2),
					Point.cornerFrom(z3)
				)
			);
			z0 = z3;
			j += 2;
		} else {
			const zc = z;
			let zf = contour[j + 1] || contour[0];
			const zfIsCorner = zf.on;
			if (!zfIsCorner) zf = Point.cornerFrom(zc).mix(0.5, zf);

			newContour.push(
				new TypoGeom.Arcs.Bez3(
					z0,
					Point.cubicOffFrom(z0).mix(2 / 3, zc),
					Point.cubicOffFrom(zf).mix(2 / 3, zc),
					Point.cornerFrom(zf)
				)
			);

			z0 = zf;
			if (zfIsCorner) j++;
		}
	}

	return newContour;
}

exports.BezToContoursSink = class BezToContoursSink {
	constructor(gizmo) {
		this.gizmo = gizmo || Transform.Id();
		this.contours = [];
		this.lastContour = [];
	}
	beginShape() {}
	endShape() {
		if (this.lastContour.length) {
			this.contours.push(this.lastContour);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lastContour.push(Point.transformedXY(this.gizmo, x, y, true));
	}
	lineTo(x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, x, y, true));
	}
	curveTo(xc, yc, x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, xc, yc, false, false));
		this.lastContour.push(Point.transformedXY(this.gizmo, x, y, true));
	}
	cubicTo(x1, y1, x2, y2, x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, x1, y1, false, true));
		this.lastContour.push(Point.transformedXY(this.gizmo, x2, y2, false, true));
		this.lastContour.push(Point.transformedXY(this.gizmo, x, y, true));
	}
};
