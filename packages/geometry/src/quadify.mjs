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
		let c = this.lastContour;
		this.lastContour = [];
		if (c.length <= 2) return;

		c = this.alignHVKnots(c);
		this.#inPlaceDropDuplicateFirstLast(c);
		this.#inPlaceCleanupOccurrentKnots1(c);
		c = this.#cleanupOccurrentKnots2(c);
		this.#inPlaceCleanupOccurrentKnots1(c);
		this.#inPlaceRemoveColinearArc(c);
		this.#inPlaceRemoveColinearCorners(c);
		this.#inPlaceCleanupOccurrentKnots1(c);
		this.#inPlaceRoundCoordinates(c);
		if (c.length <= 2) return;

		this.#inPlaceRotateToOptimizedStart(c);
		this.contours.push(c);
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
	#inPlaceDropDuplicateFirstLast(c) {
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
	}

	// Occurrent cleanup -- corner-corner
	#inPlaceCleanupOccurrentKnots1(c) {
		const drops = [];
		for (let i = 0; i < c.length; i++) drops[i] = false;
		for (let i = 0; i < c.length; i++) {
			const iPost = (i + 1) % c.length;
			const pre = c[i],
				post = c[iPost];
			if (
				iPost > 0 &&
				pre.type === Point.Type.Corner &&
				post.type === Point.Type.Corner &&
				isOccurrent(pre, post)
			) {
				drops[iPost] = true;
			}
		}

		dropBy(c, drops);
	}

	// Occurrent cleanup -- off points
	// This function actually **INSERTS** points for occurrent off knots.
	#cleanupOccurrentKnots2(c0) {
		const insertAfter = [];
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

		const c1 = [];
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

	#inPlaceRemoveColinearCorners(c) {
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
	}

	#inPlaceRemoveColinearArc(c) {
		if (c[0].type !== Point.Type.Corner) throw new Error("Unreachable");

		let front = 0,
			shouldRemove = [],
			middlePoints = [];
		for (let rear = 1; rear <= c.length; rear++) {
			const zFront = c[front],
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

		dropBy(c, shouldRemove);
	}

	#inPlaceRoundCoordinates(c) {
		for (const z of c) {
			z.x = Math.round(z.x);
			z.y = Math.round(z.y);
		}
	}

	#inPlaceRotateToOptimizedStart(c) {
		let lastX = 0;
		let lastY = 0;
		if (this.contours.length > 0) {
			const lastContour = this.contours[this.contours.length - 1];
			// all the contours we add into this.contours are guaranteed to have at least 3 points
			// so we can safely access lastContour[lastContour.length - 1]
			lastX = lastContour[lastContour.length - 1].x;
			lastY = lastContour[lastContour.length - 1].y;
		}

		let minId = 0;
		const minX = c[0].x;
		const minY = c[0].y;
		let minCost = this.#estimateByteCostOfDelta(c[0], lastX, lastY);

		for (let i = 1; i < c.length; i++) {
			const z = c[i];
			if (z.type !== Point.Type.Corner) continue;
			const costT = this.#estimateByteCostOfDelta(z, lastX, lastY);
			if (
				costT < minCost ||
				(costT === minCost && z.y < minY) ||
				(costT === minCost && z.y === minY && z.x < minX)
			) {
				minCost = costT;
				minId = i;
			}
		}

		if (minId > 0) {
			const rotated = c.splice(0, minId);
			c.push(...rotated);
		}
	}

	#estimateByteCostOfDelta(z, lastX, lastY) {
		const deltaX = z.x - lastX;
		const deltaY = z.y - lastY;
		const costX = deltaX === 0 ? 0 : Math.abs(deltaX) < 128 ? 1 : 2;
		const costY = deltaY === 0 ? 0 : Math.abs(deltaY) < 128 ? 1 : 2;
		return costX + costY;
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
