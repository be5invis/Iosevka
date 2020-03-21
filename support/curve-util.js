"use strict";

const typoGeom = require("typo-geom");
const Point = require("./point");
const { mix } = require("./utils");

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
	const offPoints = typoGeom.Quadify.auto(curve, err || 1);
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

function removeMids(contour) {
	for (let rounds = 0; rounds < 255; rounds++) {
		const n0 = contour.length;
		let last = contour.length - 1;
		for (let j = 0; j < contour.length - 1; j++) {
			if (
				Math.abs(contour[j].x - contour[j + 1].x) < 1 &&
				Math.abs(contour[j].y - contour[j + 1].y) < 1
			) {
				contour[j + 1].rem = true;
				contour[j].on = true;
			}
		}
		while (
			last > 0 &&
			Math.abs(contour[0].x - contour[last].x) < 1 &&
			Math.abs(contour[0].y - contour[last].y) < 1
		) {
			contour[last].rem = true;
			contour[0].on = true;
			last -= 1;
		}
		contour = contour.filter(x => !x.rem);

		last = contour.length - 1;
		for (let j = 1; j < contour.length - 1; j++) {
			if (!contour[j - 1].on && contour[j].on && !contour[j + 1].on) {
				const mx = contour[j - 1].x + contour[j + 1].x;
				const my = contour[j - 1].y + contour[j + 1].y;
				const dy = contour[j - 1].y - contour[j + 1].y;
				if (
					Math.abs(dy) >= 1 &&
					Math.abs(contour[j].x * 2 - mx) < 1 &&
					Math.abs(contour[j].y * 2 - my) < 1
				) {
					contour[j].rem = true;
				}
			}
		}
		if (!contour[last].rem && !contour[last].on && contour[0].on && !contour[1].on) {
			const mx = contour[last].x + contour[1].x;
			const my = contour[last].y + contour[1].y;
			if (Math.abs(contour[0].x * 2 - mx) < 1 && Math.abs(contour[0].y * 2 - my) < 1) {
				contour[0].rem = true;
			}
		}
		contour = contour.filter(x => !x.rem);
		const n = contour.length;
		if (n >= n0) break;
	}
	return contour;
}
function extPrior(a, b) {
	return a.y < b.y || (a.y === b.y && ((a.on && !b.on) || (a.on === b.on && a.x < b.x)));
}

function canonicalStart(_points) {
	const points = _points.reverse().map(z => {
		z.x = Math.round(z.x * 1024) / 1024;
		z.y = Math.round(z.y * 1024) / 1024;
		return z;
	});
	let jm = 0;
	for (var j = 0; j < points.length * 2; j++) {
		if (extPrior(points[j % points.length], points[jm])) {
			jm = j % points.length;
		}
	}
	return points.slice(jm).concat(points.slice(0, jm));
}

function colinear(x1, y1, x2, y2, x3, y3, err) {
	const det = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
	return det <= err && det >= -err;
}

function inspan(a, b, c) {
	if (a > c) return inspan(c, b, a);
	return a <= b && b <= c;
}

function handle(z1, z2, z3, z4, err) {
	if (
		colinear(z1.x, z1.y, z2.x, z2.y, z4.x, z4.y, err) &&
		colinear(z1.x, z1.y, z3.x, z3.y, z4.x, z4.y, err) &&
		inspan(z1.x, z2.x, z4.x) &&
		inspan(z1.y, z2.y, z4.y) &&
		inspan(z1.x, z3.x, z4.x) &&
		inspan(z1.y, z3.y, z4.y)
	) {
		return [];
	}

	const curve = new typoGeom.Curve.Bez3(z1, z2, z3, z4);
	const offPoints = typoGeom.Quadify.auto(curve, err);
	const ans = [];
	for (const z of offPoints) {
		ans.push(Point.offFrom(z));
	}
	return ans;
}

function convertContourToTt(contour, err) {
	if (contour.length === 0) return [];
	if (contour.length === 1) return [contour[0]];
	err = err || 1 / 4;

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
			const quadZs = handle(z0, z1, z2, z3, err);
			for (const z of quadZs) newContour.push(z);
			newContour.push(Point.cornerFrom(z3));
			z0 = z3;
			j += 2;
		} else {
			const zc = z;
			let zf = contour[j + 1] ? contour[j + 1] : contour[0];
			if (!zf.on) {
				zf = Point.cornerFromXY(mix(zc.x, zf.x, 0.5), mix(zc.y, zf.y, 0.5));
			}
			newContour.push(Point.offFrom(zc));
			newContour.push(Point.cornerFrom(zf));
			z0 = zf;
			j++;
		}
	}
	return newContour;
}

function byFirstPointCoord(a, b) {
	if (!a.length) return -1;
	if (!b.length) return 1;
	let z1 = a[0];
	let z2 = b[0];
	return z1.y !== z2.y
		? z1.y - z2.y
		: z1.x !== z2.x
		? z1.x - z2.x
		: byFirstPointCoord(a.slice(1), b.slice(1));
}
function convertContourListToTt(contours, err) {
	err = err || 1 / 4;
	let ans = [];
	for (let c of contours) {
		ans.push(canonicalStart(removeMids(convertContourToTt(c, err))));
	}
	return ans.sort(byFirstPointCoord);
}

function convertContourToCubic(contour) {
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
			let zf = contour[j + 1] ? contour[j + 1] : contour[0];
			if (!zf.on) {
				zf = Point.cornerFromXY(mix(zc.x, zf.x, 0.5), mix(zc.y, zf.y, 0.5));
			}

			const x1 = mix(z0.x, zc.x, 2 / 3);
			const y1 = mix(z0.y, zc.y, 2 / 3);
			const x2 = mix(zf.x, zc.x, 2 / 3);
			const y2 = mix(zf.y, zc.y, 2 / 3);

			newContour.push(Point.cubicOffFromXY(x1, y1));
			newContour.push(Point.cubicOffFromXY(x2, y2));
			newContour.push(Point.cornerFrom(zf));
			z0 = zf;
			j++;
		}
	}

	return newContour;
}

exports.convertContourToTt = convertContourToTt;
exports.convertContourToCubic = convertContourToCubic;
exports.convertContourListToTt = convertContourListToTt;
