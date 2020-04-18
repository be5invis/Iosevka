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

exports.curveToContour = function (curve, segments) {
	const z0 = curve.eval(0);
	const z1 = curve.eval(1);
	const offPoints = fixedCubify(curve, segments || 16);
	return [Point.cornerFrom(z0), ...offPoints, Point.cornerFrom(z1)];
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
		let zPre, z, zPost;
		for (let j = 1; j < contour.length; j++) {
			if (j < contour.length - 1) {
				zPre = contour[j - 1];
				z = contour[j];
				zPost = contour[j + 1];
			} else {
				zPre = contour[last];
				z = contour[0];
				zPost = contour[1];
			}
			// if (!zPre || !zPost) continue;
			const mx = zPre.x + zPost.x;
			const my = zPre.y + zPost.y;
			const dx = zPre.x - zPost.x;
			const dy = zPre.y - zPost.y;

			if (!zPre.on && z.on && !zPost.on) {
				if (Math.abs(dy) >= 1 && Math.abs(z.x * 2 - mx) < 1 && Math.abs(z.y * 2 - my) < 1) {
					z.rem = true;
				}
			} else if (!zPre.rem && zPre.on && z.on && !zPost.rem && zPost.on) {
				if (Math.abs(dy) >= 1 && Math.abs(z.x * 2 - mx) < 1 && Math.abs(dx) < 1) {
					z.rem = true;
				} else if (Math.abs(dx) >= 1 && Math.abs(z.y * 2 - my) < 1 && Math.abs(dy) < 1) {
					z.rem = true;
				}
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
	const points = _points.reverse();
	let jm = 0;
	for (var j = 0; j < points.length * 2; j++) {
		if (extPrior(points[j % points.length], points[jm])) {
			jm = j % points.length;
		}
	}
	return points.slice(jm).concat(points.slice(0, jm));
}

function cleanupQuadContour(c) {
	return canonicalStart(removeMids(c));
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
}

function autoCubify(arc, err) {
	const MaxSegments = 16;
	const Hits = 64;
	let offPoints = [];
	for (let nSeg = 1; nSeg <= MaxSegments; nSeg++) {
		const perSegHits = Math.ceil(Hits / nSeg);
		offPoints.length = 0;
		let good = true;
		out: for (let s = 0; s < nSeg; s++) {
			const tBefore = s / nSeg;
			const tAfter = (s + 1) / nSeg;
			const z0 = Point.cornerFrom(arc.eval(tBefore));
			const z3 = Point.cornerFrom(arc.eval(tAfter));
			const z1 = Point.cubicOffFrom(z0).addScale(1 / (3 * nSeg), arc.derivative(tBefore));
			const z2 = Point.cubicOffFrom(z3).addScale(-1 / (3 * nSeg), arc.derivative(tAfter));

			if (s > 0) offPoints.push(z0);
			offPoints.push(z1, z2);

			const bezArc = new typoGeom.Curve.Bez3(z0, z1, z2, z3);

			for (let k = 1; k < perSegHits; k++) {
				const tk = k / perSegHits;
				const zTest = arc.eval(mix(tBefore, tAfter, tk));
				const zBez = bezArc.eval(tk);
				if (Math.hypot(zTest.x - zBez.x, zTest.y - zBez.y) > err) {
					good = false;
					break out;
				}
			}
		}
		if (good) break;
	}
	return offPoints;
}

function fixedCubify(arc, nSeg) {
	let offPoints = [];
	for (let s = 0; s < nSeg; s++) {
		const tBefore = s / nSeg;
		const tAfter = (s + 1) / nSeg;
		const z0 = Point.cornerFrom(arc.eval(tBefore));
		const z3 = Point.cornerFrom(arc.eval(tAfter));
		const z1 = Point.cubicOffFrom(z0).addScale(1 / (3 * nSeg), arc.derivative(tBefore));
		const z2 = Point.cubicOffFrom(z3).addScale(-1 / (3 * nSeg), arc.derivative(tAfter));

		if (s > 0) offPoints.push(z0);
		offPoints.push(z1, z2);
	}
	return offPoints;
}

exports.cleanupQuadContour = cleanupQuadContour;
exports.convertContourToCubic = convertContourToCubic;
exports.autoCubify = autoCubify;
exports.fixedCubify = fixedCubify;
