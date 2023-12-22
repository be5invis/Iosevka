import * as TypoGeom from "typo-geom";

import * as CurveUtil from "./curve-util.mjs";
import { Point } from "./point.mjs";

export class QuadifySink {
	constructor() {
		this.contours = [];
		this.lastContour = [];
	}
	beginShape() {}
	endShape() {
		if (this.lastContour.length > 2) {
			let c = this.lastContour;
			c = this.alignHVKnots(c);
			c = this.dropDuplicateFirstLast(c);
			c = this.cleanupOccurrentKnots1(c);
			c = this.cleanupOccurrentKnots2(c);
			c = this.cleanupOccurrentKnots1(c);
			c = this.removeColinearArc(c);
			c = this.removeColinearCorners(c);
			c = this.cleanupOccurrentKnots1(c);
			if (c.length > 2) this.contours.push(c);
		}
		this.lastContour = [];
	}
	moveTo(x, y) {
		this.endShape();
		this.lineTo(x, y);
	}
	lineTo(x, y) {
		this.lastContour.push(Point.fromXY(Point.Type.Corner, x, y));
	}
	arcTo(arc, x, y) {
		const offPoints = TypoGeom.Quadify.auto(arc, 1, 8);
		for (const z of offPoints) {
			this.lastContour.push(Point.from(Point.Type.Quadratic, z));
		}
		this.lineTo(x, y);
	}

	// Contour cleaning code
	alignHVKnots(c0) {
		const c = c0.slice(0);
		const alignX = new CoordinateAligner(c, GetX, SetX);
		const alignY = new CoordinateAligner(c, GetY, SetY);

		for (let i = 0; i < c.length; i++) {
			const iNext = (i + 1) % c.length,
				zCurr = c[i],
				zNext = c[iNext];
			if (zCurr.type === Point.Type.Quadratic && zNext.type === Point.Type.Corner) {
				alignX.tryAlign(i, iNext);
				alignY.tryAlign(i, iNext);
			} else {
				alignX.tryAlign(iNext, i);
				alignY.tryAlign(iNext, i);
			}
		}

		alignX.apply();
		alignY.apply();
		return c;
	}

	// Drop the duplicate point (first-last)
	dropDuplicateFirstLast(c) {
		while (c.length > 1) {
			const first = c[0],
				last = c[c.length - 1];
			if (
				first.type === Point.Type.Corner &&
				last.type === Point.Type.Corner &&
				isOccurrent(first, last)
			) {
				c.pop();
			} else {
				break;
			}
		}
		return c;
	}

	// Occurrent cleanup -- corner-corner
	cleanupOccurrentKnots1(c0) {
		let drops = [];
		for (let i = 0; i < c0.length; i++) drops[i] = false;
		for (let i = 0; i < c0.length; i++) {
			const iPost = (i + 1) % c0.length;
			const pre = c0[i],
				post = c0[iPost];
			if (
				iPost > 0 &&
				pre.type === Point.Type.Corner &&
				post.type === Point.Type.Corner &&
				isOccurrent(pre, post)
			) {
				drops[iPost] = true;
			}
		}

		return dropBy(c0, drops);
	}

	// Occurrent cleanup -- off points
	// This function actually **INSERTS** points for occurrent off knots.
	cleanupOccurrentKnots2(c0) {
		let insertAfter = [];
		for (let i = 0; i < c0.length; i++) insertAfter[i] = false;
		for (let i = 0; i < c0.length; i++) {
			const cur = c0[i];
			if (cur.type !== Point.Type.Quadratic) continue;

			const iPre = (i - 1 + c0.length) % c0.length;
			const iPost = (i + 1) % c0.length;
			const pre = c0[iPre];
			const post = c0[iPost];

			if (isOccurrent(pre, cur) && post.type === Point.Type.Quadratic) {
				insertAfter[i] = true;
			}
			if (isOccurrent(cur, post) && pre.type === Point.Type.Quadratic) {
				insertAfter[iPre] = true;
			}
		}

		let c1 = [];
		for (let i = 0; i < c0.length; i++) {
			const cur = c0[i];
			c1.push(cur);
			if (insertAfter[i]) {
				const iPost = (i + 1) % c0.length;
				const post = c0[iPost];
				c1.push(Point.mix(Point.Type.Corner, cur, post, 0.5));
			}
		}

		return c1;
	}

	removeColinearCorners(c0) {
		const c = c0.slice(0);
		let found = false;
		do {
			found = false;
			for (let i = 0; i < c.length; i++) {
				const zPrev = c[(i - 1 + c.length) % c.length],
					zCurr = c[i],
					zNext = c[(i + 1) % c.length];
				if (
					zPrev.type === Point.Type.Corner &&
					zNext.type === Point.Type.Corner &&
					(pointsHVColinear(zPrev, zCurr, zNext) || pointsColinear(zPrev, zCurr, zNext))
				) {
					found = true;
					c.splice(i, 1);
					break;
				}
			}
		} while (found);
		return c;
	}

	removeColinearArc(c) {
		if (c[0].type !== Point.Type.Corner) throw new Error("Unreachable");

		let front = 0,
			shouldRemove = [],
			middlePoints = [];
		for (let rear = 1; rear <= c.length; rear++) {
			let zFront = c[front],
				zRear = c[rear % c.length];
			if (zRear.type === Point.Type.Corner) {
				let allColinear = true;
				for (const z of middlePoints) {
					if (!pointsHVColinear(zFront, z, zRear)) allColinear = false;
				}

				if (allColinear) for (let i = front + 1; i < rear; i++) shouldRemove[i] = true;

				front = rear;
				middlePoints.length = 0;
			} else {
				middlePoints.push(zRear);
			}
		}

		return dropBy(c, shouldRemove);
	}
}

// Disjoint set for coordinate alignment
class CoordinateAligner {
	constructor(c, lens, lensSet) {
		this.c = c;
		this.lens = lens;
		this.lensSet = lensSet;
		this.rank = [];
		this.up = [];
		for (let i = 0; i < c.length; i++) {
			const x = lens(c[i]);
			this.up[i] = i;
			this.rank[i] = Math.abs(x - Math.round(x));
		}
	}
	find(i) {
		if (this.up[i] !== i) {
			this.up[i] = this.find(this.up[i]);
			return this.up[i];
		} else {
			return i;
		}
	}
	tryAlign(i, j) {
		if (occurrentPrecisionEqual(this.lens(this.c[i]), this.lens(this.c[j]))) {
			this.align(i, j);
		}
	}
	align(i, j) {
		i = this.find(i);
		j = this.find(j);
		if (this.rank[i] > this.rank[j]) [i, j] = [j, i];
		this.up[j] = i;
	}
	apply() {
		for (let i = 0; i < this.c.length; i++) {
			this.lensSet(this.c[i], Math.round(this.lens(this.c[this.find(i)])));
		}
	}
}

// Lenses used by aligner
const GetX = z => z.x;
const SetX = (z, x) => (z.x = x);
const GetY = z => z.y;
const SetY = (z, y) => (z.y = y);

function isOccurrent(zFirst, zLast) {
	return zFirst.x === zLast.x && zFirst.y === zLast.y;
}
function occurrentPrecisionEqual(a, b) {
	return Math.abs(a - b) < CurveUtil.OCCURRENT_PRECISION;
}
function aligned(a, b, c) {
	return a === b && b === c;
}

function pointsHVColinear(zPrev, zCurr, zNext) {
	// No need to check in-between-ness, we can safely remove the corner
	if (aligned(zPrev.x, zCurr.x, zNext.x)) return true;
	if (aligned(zPrev.y, zCurr.y, zNext.y)) return true;
	return false;
}

function inBetween(a, b, c) {
	return (a <= b && b <= c) || (c <= b && b <= a);
}
function pointsColinear(zPrev, zCurr, zNext) {
	// If zCurr is not in between zPrev and zNext, they are not colinear
	if (!inBetween(zPrev.x, zCurr.x, zNext.x)) return false;
	if (!inBetween(zPrev.y, zCurr.y, zNext.y)) return false;

	// Measure the distance of zCurr to the line zPrev--zNext
	// If it is less than OCCURRENT_PRECISION, then we think it is colinear
	// Use squared distance to avoid sqrt
	const dx = zNext.x - zPrev.x,
		dy = zNext.y - zPrev.y;
	const t = (zCurr.y - zPrev.y) * dx - (zCurr.x - zPrev.x) * dy;
	return (
		t * t < CurveUtil.GEOMETRY_PRECISION * CurveUtil.GEOMETRY_PRECISION * (dx * dx + dy * dy)
	);
}

// Dropping helper
function dropBy(c, shouldRemove) {
	let n = 0;
	for (let i = 0; i < c.length; i++) {
		if (!shouldRemove[i]) c[n++] = c[i];
	}
	c.length = n;
	return c;
}
