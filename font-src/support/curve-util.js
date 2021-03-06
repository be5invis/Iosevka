"use strict";

const TypoGeom = require("typo-geom");
const Point = require("./point");
const Transform = require("./transform");

exports.SPIRO_PRECISION = 1 / 2;
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

exports.ReverseCurve = class ReverseCurve {
	constructor(original) {
		this.m_original = original;
	}
	eval(t) {
		return this.m_original.eval(1 - t);
	}
	derivative(t) {
		return -this.m_original.derivative(1 - t);
	}
};

exports.convertShapeToArcs = function convertShapeToArcs(shape) {
	return shape.map(convertContourToArcs);
};

function convertContourToArcs(contour) {
	if (!contour || !contour.length) return [];

	const newContour = [];
	let z0 = Point.from(Point.Type.Corner, contour[0]);

	for (let j = 1; j < contour.length; j++) {
		const z = contour[j];
		switch (z.type) {
			case Point.Type.CubicStart: {
				const z1 = z;
				const z2 = contour[j + 1];
				const z3 = contour[j + 2];
				newContour.push(
					new TypoGeom.Arcs.Bez3(
						z0,
						Point.from(Point.Type.CubicStart, z1),
						Point.from(Point.Type.CubicEnd, z2),
						Point.from(Point.Type.Corner, z3)
					)
				);
				z0 = z3;
				j += 2;
				break;
			}
			case Point.Type.Quadratic: {
				const zc = z;
				let zf = contour[j + 1] || contour[0];
				const zfIsCorner = zf.type === Point.Type.contour;
				if (!zfIsCorner) zf = Point.from(Point.Type.Corner, zc).mix(0.5, zf);

				newContour.push(
					new TypoGeom.Arcs.Bez3(
						z0,
						Point.from(Point.Type.CubicStart, z0).mix(2 / 3, zc),
						Point.from(Point.Type.CubicEnd, zf).mix(2 / 3, zc),
						Point.from(Point.Type.Corner, zf)
					)
				);

				z0 = zf;
				if (zfIsCorner) j++;
				break;
			}
			default: {
				newContour.push(
					TypoGeom.Arcs.Bez3.fromStraightSegment(
						new TypoGeom.Arcs.StraightSegment(z0, Point.from(Point.Type.Corner, z))
					)
				);
				z0 = z;
				break;
			}
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
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.Corner, x, y));
	}
	lineTo(x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.Corner, x, y));
	}
	curveTo(xc, yc, x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.Quadratic, xc, yc));
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.Corner, x, y));
	}
	cubicTo(x1, y1, x2, y2, x, y) {
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.CubicStart, x1, y1));
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.CubicEnd, x2, y2));
		this.lastContour.push(Point.transformedXY(this.gizmo, Point.Type.Corner, x, y));
	}
};
