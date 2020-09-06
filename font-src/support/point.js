"use strict";

module.exports = class Point {
	constructor(x, y, on, cubic) {
		this.x = x;
		this.y = y;
		this.on = on;
		this.cubic = cubic;
	}
	add(z2) {
		return this.addScale(1, z2);
	}
	addScale(scale, z2) {
		return new Point(this.x + scale * z2.x, this.y + scale * z2.y, this.on, this.cubic);
	}
	mix(scale, z2) {
		return new Point(
			this.x + scale * (z2.x - this.x),
			this.y + scale * (z2.y - this.y),
			this.on,
			this.cubic
		);
	}
	scale(t) {
		return new Point(t * this.x, t * this.y, this.on, this.cubic);
	}
	round(d) {
		return new Point(
			Math.round(d * this.x) / d,
			Math.round(d * this.y) / d,
			this.on,
			this.cubic
		);
	}

	static from(z, on, cubic) {
		return new Point(z.x || 0, z.y || 0, on, cubic);
	}
	static cornerFrom(z) {
		return new Point(z.x || 0, z.y || 0, true, false);
	}
	static offFrom(z) {
		return new Point(z.x || 0, z.y || 0, false, false);
	}
	static cubicOffFrom(z) {
		return new Point(z.x || 0, z.y || 0, false, true);
	}
	static cornerFromXY(x, y) {
		return new Point(x || 0, y || 0, true, false);
	}
	static offFromXY(x, y) {
		return new Point(x || 0, y || 0, false, false);
	}
	static cubicOffFromXY(x, y) {
		return new Point(x || 0, y || 0, false, true);
	}
	static transformed(tfm, z) {
		return Point.transformedXY(tfm, z.x, z.y, z.on, z.cubic);
	}
	static transformedXY(tfm, x, y, on, cubic) {
		return new Point(
			x * tfm.xx + y * tfm.yx + tfm.x || 0,
			x * tfm.xy + y * tfm.yy + tfm.y || 0,
			on,
			cubic
		);
	}
	static translated(z, dx, dy) {
		return new Point(z.x + dx || 0, z.y + dy || 0, z.on, z.cubic);
	}
};
