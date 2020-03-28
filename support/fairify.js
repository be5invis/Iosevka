"use strict";

const Transform = require("./transform");
const typoGeom = require("typo-geom");
const Point = require("./point");
const curveUtil = require("./curve-util");

const SMALL = 1e-6;

function solveTS(a, b, c, out, flag) {
	const delta = b * b - 4 * a * c;
	if (delta > 0) {
		const t1 = (Math.sqrt(delta) - b) / (2 * a);
		const t2 = (-Math.sqrt(delta) - b) / (2 * a);
		if (flag) {
			if (t1 >= 0 && t1 <= 1) out.push(t1);
			if (t2 >= 0 && t2 <= 1) out.push(t2);
		} else {
			if (t1 > 0 && t1 < 1) out.push(t1);
			if (t2 > 0 && t2 < 1) out.push(t2);
		}
	} else if (delta === 0) {
		const t = -b / (2 * a);
		if (flag) {
			if (t >= 0 && t <= 1) out.push(t);
		} else {
			if (t > 0 && t < 1) out.push(t);
		}
	}
}
function findExtrema(z1, z2, z3, z4, out) {
	const a = 3 * (-z1 + 3 * z2 - 3 * z3 + z4);
	const b = 6 * (z1 - 2 * z2 + z3);
	const c = 3 * (z2 - z1);
	solveTS(a, b, c, out);
}

function ASCEND(a, b) {
	return a - b;
}
function fineAllExtrema(z1, z2, z3, z4) {
	let exs = [];
	findExtrema(z1.x, z2.x, z3.x, z4.x, exs);
	findExtrema(z1.y, z2.y, z3.y, z4.y, exs);

	return exs.sort(ASCEND);
}
function bez1(z1, z2, t) {
	if (t <= 0) return z1;
	if (t >= 1) return z2;
	let x = (1 - t) * z1.x + t * z2.x,
		y = (1 - t) * z1.y + t * z2.y;
	return { x: x, y: y };
}
function bez2(z1, z2, z3, t) {
	if (t <= 0) return z1;
	if (t >= 1) return z3;
	let c1 = (1 - t) * (1 - t),
		c2 = 2 * (1 - t) * t,
		c3 = t * t;
	return {
		x: c1 * z1.x + c2 * z2.x + c3 * z3.x,
		y: c1 * z1.y + c2 * z2.y + c3 * z3.y
	};
}
function bez3(z1, z2, z3, z4, t) {
	if (t <= 0) return z1;
	if (t >= 1) return z4;
	let c1 = (1 - t) * (1 - t) * (1 - t),
		c2 = 3 * t * (1 - t) * (1 - t),
		c3 = 3 * t * t * (1 - t),
		c4 = t * t * t;
	return {
		x: c1 * z1.x + c2 * z2.x + c3 * z3.x + c4 * z4.x,
		y: c1 * z1.y + c2 * z2.y + c3 * z3.y + c4 * z4.y
	};
}
function splitBefore(z1, z2, z3, z4, t) {
	return [z1, bez1(z1, z2, t), bez2(z1, z2, z3, t), bez3(z1, z2, z3, z4, t)];
}
function splitAfter(z1, z2, z3, z4, t) {
	return [bez3(z1, z2, z3, z4, t), bez2(z2, z3, z4, t), bez1(z3, z4, t), z4];
}
function splitAtExtrema(z1, z2, z3, z4, curve) {
	const ts = fineAllExtrema(z1, z2, z3, z4);
	if (ts[0] < SMALL) {
		ts[0] = 0;
	} else {
		ts.unshift(0);
	}
	if (ts[ts.length - 1] > 1 - SMALL) {
		ts[ts.length - 1] = 1;
	} else {
		ts.push(1);
	}
	for (let k = 0; k < ts.length; k++) {
		if (k > 0) {
			const t1 = ts[k - 1];
			const t2 = ts[k];
			const bef = splitBefore(z1, z2, z3, z4, t2);
			const seg = splitAfter(bef[0], bef[1], bef[2], bef[3], t1 / t2);
			seg[1].on = seg[2].on = false;
			seg[1].cubic = seg[2].cubic = true;
			seg[3].on = true;
			curve.push(seg[1], seg[2], seg[3]);
		}
	}
}

function veryClose(z1, z2) {
	return (z1.x - z2.x) * (z1.x - z2.x) + (z1.y - z2.y) * (z1.y - z2.y) <= SMALL;
}

function toSpansForm(sourceCurve, fSplit) {
	const curve = [sourceCurve[0]];
	let last = sourceCurve[0];
	for (let j = 1; j < sourceCurve.length; j++) {
		if (sourceCurve[j].on) {
			const z1 = last,
				z4 = sourceCurve[j];
			if (!veryClose(z1, z4)) {
				curve.push(z4);
				last = z4;
			}
		} else if (sourceCurve[j].cubic) {
			const z1 = last,
				z2 = sourceCurve[j],
				z3 = sourceCurve[(j + 1) % sourceCurve.length],
				z4 = sourceCurve[(j + 2) % sourceCurve.length];
			if (!(veryClose(z1, z2) && veryClose(z2, z3) && veryClose(z3, z4))) {
				if (fSplit) {
					splitAtExtrema(z1, z2, z3, z4, curve);
				} else {
					curve.push(z2, z3, z4);
				}
				last = z4;
			}
			j += 2;
		} else {
			throw new Error("Unreachable.");
		}
	}
	return curve;
}

function cross(z1, z2, z3) {
	return (z2.x - z1.x) * (z3.y - z1.y) - (z3.x - z1.x) * (z2.y - z1.y);
}
function dot(z1, z2, z3) {
	return (z2.x - z1.x) * (z3.x - z1.x) + (z3.y - z1.y) * (z2.y - z1.y);
}

function markCorners(curve) {
	for (const z of curve) z.mark = 0;
	for (let j = 0; j < curve.length; j++) {
		if (!curve[j].on) continue;
		const z1 = curve[j],
			z0 = curve[(j - 1 + curve.length) % curve.length],
			z2 = curve[(j + 1) % curve.length];

		const almostLinear = Math.abs(cross(z1, z0, z2)) < SMALL;
		const inBetween = dot(z1, z0, z2) < 0;
		if (z0.on && z2.on && almostLinear && inBetween) {
			z1.mark = 0;
		} else if (z0.on || z2.on) {
			z1.mark = 1;
		} else if (almostLinear && inBetween) {
			// Z0 -- Z1 -- Z2 are linear
			const angle = Math.abs(Math.atan2(z2.y - z0.y, z2.x - z0.x)) % Math.PI;
			if (Math.abs(angle) <= SMALL || Math.abs(angle - Math.PI) <= SMALL) {
				z1.mark = 4;
			} else if (Math.abs(angle - Math.PI / 2) <= SMALL) {
				z1.mark = 2;
			}
		} else {
			z1.mark = 1;
		}
	}
}

function canonicalStart(curve) {
	let jm = 0,
		rank = 0;
	for (let j = 0; j < curve.length; j++) {
		const zRank = (curve[j].on ? 1 : 0) + (2 * curve[j].mark || 0);
		if (zRank > rank) {
			jm = j;
			rank = zRank;
		}
	}

	return toSpansForm(curve.slice(jm).concat(curve.slice(0, jm)), false);
}

class BezierCurveCluster {
	constructor(zs) {
		let segments = [];
		let lengths = [];
		let last = zs[0];
		for (let j = 1; j < zs.length; j++) {
			if (zs[j].on) {
				const z1 = last,
					z4 = zs[j];
				const seg = new typoGeom.Curve.StraightSegment(z1, z4);
				segments.push(seg);
				lengths.push(this.measureLength(seg));
				last = z4;
			} else if (zs[j].cubic) {
				const z1 = last,
					z2 = zs[j],
					z3 = zs[j + 1],
					z4 = zs[j + 2];
				const seg = new typoGeom.Curve.Bez3(z1, z2, z3, z4);
				segments.push(seg);
				lengths.push(this.measureLength(seg));
				last = z4;
				j += 2;
			} else {
				throw new Error("Unreachable.");
			}
		}

		let totalLength = 0;
		for (let j = 0; j < lengths.length; j++) totalLength += lengths[j];
		let lengthSofar = 0;
		for (let j = 0; j < lengths.length; j++) {
			let segLen = lengths[j];
			lengths[j] = lengthSofar / totalLength;
			lengthSofar += segLen;
		}
		this.segments = segments;
		this.lengths = lengths;
	}
	measureLength(c) {
		const N = 16;
		let z0 = c.eval(0);
		let d = 0;
		for (let t = 1; t <= N; t++) {
			const z = c.eval(t / N);
			d += Math.hypot(z.x - z0.x, z.y - z0.y);
			z0 = z;
		}
		return d;
	}
	getIndex(t) {
		let j = this.lengths.length - 1;
		while (j > 0 && this.lengths[j] > t) j--;
		return j;
	}
	eval(t) {
		const j = this.getIndex(t);
		const tBefore = this.lengths[j];
		const tNext = j < this.lengths.length - 1 ? this.lengths[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return this.segments[j].eval(tRelative);
	}
	derivative(t) {
		const j = this.getIndex(t);
		const tBefore = this.lengths[j];
		const tNext = j < this.lengths.length - 1 ? this.lengths[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		const d = this.segments[j].derivative(tRelative);
		d.x /= tNext - tBefore;
		d.y /= tNext - tBefore;
		return d;
	}

	inRange(err, a, b, c) {
		if (a <= c) return b >= a - err && b <= c + err;
		else return b >= c - err && b <= a + err;
	}
	colinear(err, a, b, c) {
		if (!this.inRange(err, a.x, b.x, c.x)) return false;
		if (!this.inRange(err, a.y, b.y, c.y)) return false;
		const det = (b.y - a.y) * (c.x - b.x) - (c.y - b.y) * (b.x - a.x);
		return det < err * err && det > -err * err;
	}
	isAlmostLinear(err) {
		const N = 64;
		let z0 = this.eval(0);
		let z1 = this.eval(1);
		for (let k = 1; k < N; k++) {
			const zt = this.eval(k / N);
			if (!this.colinear(err, z0, zt, z1)) return false;
		}
		return true;
	}
}

const QuadBuilder = {
	corner(sink, gizmo, z) {
		sink.push(Transform.transformPoint(gizmo, Point.cornerFrom(z)).round(1024));
	},
	arc(sink, gizmo, arc) {
		if (arc.isAlmostLinear(1 / 4)) return;
		const offPoints = typoGeom.Quadify.auto(arc, 1 / 4);
		if (!offPoints) return;
		for (const z of offPoints) {
			sink.push(Transform.transformPoint(gizmo, Point.offFrom(z)).round(1024));
		}
	},
	split: true,
	canonicalStart: true,
	duplicateStart: true
};

const SpiroBuilder = {
	corner(sink, gizmo, z) {
		sink.push(Transform.transformPoint(gizmo, Point.cornerFrom(z)));
	},
	arc(sink, gizmo, arc) {
		if (arc.isAlmostLinear(1 / 4)) return;
		const offPoints = curveUtil.fixedCubify(arc, 12);
		for (const z of offPoints) {
			sink.push(Transform.transformPoint(gizmo, z));
		}
	},
	split: true,
	canonicalStart: false,
	duplicateStart: false
};

function buildCurve(curve, gizmo, builder) {
	let sink = [];
	for (let j = 0; j < curve.length; j++) {
		if (!curve[j].mark) continue;
		builder.corner(sink, gizmo, curve[j]);

		let k = j;
		for (; k < curve.length && (k === j || !curve[k].mark); k++);
		const pts = curve.slice(j, k + 1);
		if (pts.length > 1) builder.arc(sink, gizmo, new BezierCurveCluster(pts));
		j = k - 1;
	}
	return sink;
}

function fairifyImpl(sourceCubicContour, gizmo, builder) {
	for (let j = 0; j < sourceCubicContour.length; j++) {
		if (!isFinite(sourceCubicContour[j].x)) sourceCubicContour[j].x = 0;
		if (!isFinite(sourceCubicContour[j].y)) sourceCubicContour[j].y = 0;
		sourceCubicContour[j] = Transform.unTransform(gizmo, sourceCubicContour[j]);
	}
	let splitContour = toSpansForm(sourceCubicContour, builder.split);
	markCorners(splitContour);
	if (builder.canonicalStart) {
		splitContour = canonicalStart(splitContour);
		markCorners(splitContour);
	}
	return buildCurve(splitContour, gizmo, builder);
}

exports.fairifyQuad = function(sourceCubicContour, gizmo) {
	return fairifyImpl(sourceCubicContour, gizmo, QuadBuilder);
};
exports.fairifySpiro = function(sourceCubicContour, gizmo) {
	return fairifyImpl(sourceCubicContour, gizmo, SpiroBuilder);
};
