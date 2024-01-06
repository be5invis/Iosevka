import { Vec2 } from "./point.mjs";

export class Transform {
	constructor(xx, yx, xy, yy, x, y) {
		this.xx = xx;
		this.yx = yx;
		this.xy = xy;
		this.yy = yy;
		this.x = x;
		this.y = y;
	}
	static Id() {
		return new Transform(1, 0, 0, 1, 0, 0);
	}
	static Translate(x, y) {
		return new Transform(1, 0, 0, 1, x, y);
	}

	applyX(x, y) {
		return x * this.xx + y * this.yx + this.x;
	}
	applyY(x, y) {
		return x * this.xy + y * this.yy + this.y;
	}
	applyXY(x, y) {
		return new Vec2(this.applyX(x, y), this.applyY(x, y));
	}
	applyToSink(pt, sink) {
		sink.x = this.applyX(pt.x, pt.y);
		sink.y = this.applyY(pt.x, pt.y);
	}
	apply(pt) {
		return this.applyXY(pt.x, pt.y);
	}

	applyOffset(delta) {
		return this.applyOffsetXY(delta.x, delta.y);
	}
	applyOffsetXY(deltaX, deltaY) {
		return {
			x: deltaX * this.xx + deltaY * this.yx,
			y: deltaX * this.xy + deltaY * this.yy
		};
	}

	unapplyToSink(pt, sink) {
		const xx = pt.x - this.x;
		const yy = pt.y - this.y;
		const denom = this.xx * this.yy - this.xy * this.yx;
		sink.x = (xx * this.yy - yy * this.yx) / denom;
		sink.y = (yy * this.xx - xx * this.xy) / denom;
	}
	unapply(pt) {
		let sink = new Vec2(0, 0);
		this.unapplyToSink(pt, sink);
		return sink;
	}
	unapplyIfPresent(pt) {
		if (pt) return this.unapply(pt);
		else return null;
	}
	inverse() {
		const denom = this.xx * this.yy - this.xy * this.yx;
		return new Transform(
			this.yy / denom,
			-this.yx / denom,
			-this.xy / denom,
			this.xx / denom,
			-(this.x * this.yy - this.y * this.yx) / denom,
			-(-this.x * this.xy + this.y * this.xx) / denom
		);
	}

	toString() {
		return `[[${this.xx} ${this.xy}] [${this.yx} ${this.yy}]] + [[${this.x}] [${this.y}]]`;
	}
	static isTranslate(tfm) {
		return tfm.xx === 1 && tfm.yy === 1 && tfm.xy === 0 && tfm.yx === 0;
	}
	static isIdentity(tfm) {
		return this.isTranslate(tfm) && tfm.x === 0 && tfm.y === 0;
	}
	static isPositive(tfm) {
		return tfm.xx * tfm.yy - tfm.xy * tfm.yx > 0;
	}
	static Combine(...tfms) {
		let z00 = new Vec2(0, 0);
		let z10 = new Vec2(1, 0);
		let z01 = new Vec2(0, 1);
		for (const tfm of tfms) {
			z00 = tfm.apply(z00);
			z10 = tfm.apply(z10);
			z01 = tfm.apply(z01);
		}
		return new Transform(
			z10.x - z00.x,
			z01.x - z00.x,
			z10.y - z00.y,
			z01.y - z00.y,
			z00.x,
			z00.y
		);
	}
}
