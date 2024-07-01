import { mix } from "@iosevka/util";

export class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static from(z) {
		return new Vec2(z.x, z.y);
	}

	static scaleFrom(s, z) {
		return new Vec2(s * z.x, s * z.y);
	}
}

export class Point {
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
	mix(z2, t) {
		return new Point(this.type, mix(this.x, z2.x, t), mix(this.y, z2.y, t));
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
	static corner(x, y) {
		return new Point(Point.Type.Corner, x || 0, y || 0);
	}
	static withX(z, x) {
		return new Point(z.type, x || 0, z.y);
	}
	static withY(z, y) {
		return new Point(z.type, z.x, y || 0);
	}
	static transformed(tfm, z) {
		return Point.transformedXY(tfm, z.type, z.x, z.y);
	}
	static transformedXY(tfm, type, x, y) {
		return new Point(type, tfm.applyX(x, y), tfm.applyY(x, y));
	}
	static translated(z, dx, dy) {
		return new Point(z.type, z.x + dx || 0, z.y + dy || 0);
	}
	static mix(type, a, b, p) {
		return new Point(type, mix(a.x, b.x, p), mix(a.y, b.y, p));
	}
}
Point.Type = {
	Corner: 0,
	CubicStart: 1,
	CubicEnd: 2,
	Quadratic: 3,
};
