"use strict";

class Point {
	constructor(type, x, y) {
		this.type = type;
		this.x = x;
		this.y = y;
	}
	get on() {
		throw new Error("Unreachable");
	}
	get cubic() {
		throw new Error("Unreachable");
	}
	add(z2) {
		return this.addScale(1, z2);
	}
	addScale(scale, z2) {
		return new Point(this.type, this.x + scale * z2.x, this.y + scale * z2.y);
	}
	mix(scale, z2) {
		return new Point(
			this.type,
			this.x + scale * (z2.x - this.x),
			this.y + scale * (z2.y - this.y)
		);
	}
	scale(t) {
		return new Point(this.type, t * this.x, t * this.y);
	}
	round(d) {
		return new Point(this.type, Math.round(d * this.x) / d, Math.round(d * this.y) / d);
	}

	static from(type, z) {
		return new Point(type, z.x || 0, z.y || 0);
	}
	static fromXY(type, x, y) {
		return new Point(type, x || 0, y || 0);
	}
	static transformed(tfm, z) {
		return Point.transformedXY(tfm, z.type, z.x, z.y);
	}
	static transformedXY(tfm, type, x, y) {
		return new Point(
			type,
			x * tfm.xx + y * tfm.yx + tfm.x || 0,
			x * tfm.xy + y * tfm.yy + tfm.y || 0
		);
	}
	static translated(z, dx, dy) {
		return new Point(z.type, z.x + dx || 0, z.y + dy || 0);
	}
}

Point.Type = {
	Corner: 0,
	CubicStart: 1,
	CubicEnd: 2,
	Quadratic: 3
};

module.exports = Point;
