import * as SpiroJs from "spiro";
import * as CurveUtil from "./curve-util.mjs";

import { Point } from "./point.mjs";

export function createSpiroPenGeometry(gizmo, closed, knots, pen) {
	const collector = new ArcCollector(gizmo, pen);
	SpiroJs.spiroToBezierOnContext(knots, closed, collector, CurveUtil.GEOMETRY_PRECISION);
	return collector.contoursCollected;
}

class ArcCollector {
	constructor(gizmo, pen) {
		this.gizmo = gizmo;
		this.lastX = 0;
		this.lastY = 0;
		this.m_pen = pen;
		this.contoursCollected = [];
	}

	beginShape() {}
	endShape() {}

	moveTo(x, y) {
		const lastTf = this.gizmo.applyXY(x, y);
		this.lastX = lastTf.x;
		this.lastY = lastTf.y;
		this.addPenProfileAt(this.lastX, this.lastY);
	}

	lineTo(x1, y1) {
		const z1 = this.gizmo.applyXY(x1, y1);
		for (let i = 0; i < this.m_pen.length; i++) {
			let penPrev = this.m_pen[i];
			let penNext = this.m_pen[(i + 1) % this.m_pen.length];

			const l1 = new Point(Point.Type.Corner, this.lastX + penPrev.x, this.lastY + penPrev.y);
			const l2 = new Point(Point.Type.Corner, z1.x + penPrev.x, z1.y + penPrev.y);
			const r2 = new Point(Point.Type.Corner, z1.x + penNext.x, z1.y + penNext.y);
			const r1 = new Point(Point.Type.Corner, this.lastX + penNext.x, this.lastY + penNext.y);

			this.contoursCollected.push([l1, l2, r2, r1]);
		}
		this.lastX = z1.x;
		this.lastY = z1.y;
		this.addPenProfileAt(this.lastX, this.lastY);
	}

	cubicTo(x2, y2, x3, y3, x4, y4) {
		const z2 = this.gizmo.applyXY(x2, y2);
		const z3 = this.gizmo.applyXY(x3, y3);
		const z4 = this.gizmo.applyXY(x4, y4);
		for (let i = 0; i < this.m_pen.length; i++) {
			let penPrev = this.m_pen[i];
			let penNext = this.m_pen[(i + 1) % this.m_pen.length];

			const l1 = new Point(Point.Type.Corner, this.lastX + penPrev.x, this.lastY + penPrev.y);
			const l2 = new Point(Point.Type.CubicStart, z2.x + penPrev.x, z2.y + penPrev.y);
			const l3 = new Point(Point.Type.CubicEnd, z3.x + penPrev.x, z3.y + penPrev.y);
			const l4 = new Point(Point.Type.Corner, z4.x + penPrev.x, z4.y + penPrev.y);
			const r4 = new Point(Point.Type.Corner, z4.x + penNext.x, z4.y + penNext.y);
			const r3 = new Point(Point.Type.CubicStart, z3.x + penNext.x, z3.y + penNext.y);
			const r2 = new Point(Point.Type.CubicEnd, z2.x + penNext.x, z2.y + penNext.y);
			const r1 = new Point(Point.Type.Corner, this.lastX + penNext.x, this.lastY + penNext.y);

			this.contoursCollected.push([l1, l2, l3, l4, r4, r3, r2, r1]);
		}
		this.lastX = z4.x;
		this.lastY = z4.y;
		this.addPenProfileAt(this.lastX, this.lastY);
	}

	addPenProfileAt(x, y) {
		let c = [];
		for (let i = 0; i < this.m_pen.length; i++) {
			let pen = this.m_pen[i];
			c.push(new Point(Point.Type.Corner, x + pen.x, y + pen.y));
		}
		this.contoursCollected.push(c);
	}
}
