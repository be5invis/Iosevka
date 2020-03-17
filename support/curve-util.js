"use strict";

const quadify = require("primitive-quadify-off-curves");

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

exports.curveToContour = function(curve, err) {
	let exitPoints = [];
	const z0 = curve.eval(0);
	const z1 = curve.eval(1);
	exitPoints.push({
		x: z0.x,
		y: z0.y,
		cubic: false,
		on: true
	});
	const offPoints = quadify.autoQuadify(curve, err || 1);
	for (let k = 0; k < offPoints.length; k++) {
		const z = offPoints[k];
		if (k > 0) {
			const z0 = offPoints[k - 1];
			exitPoints.push({
				x: (z.x + z0.x) / 2,
				y: (z.y + z0.y) / 2,
				on: true
			});
		}
		exitPoints.push({
			x: z.x,
			y: z.y,
			cubic: false,
			on: false
		});
	}
	exitPoints.push({
		x: z1.x,
		y: z1.y,
		cubic: false,
		on: true
	});
	return exitPoints;
};
