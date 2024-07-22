import { Vec2 } from "./point.mjs";

export class Transform {
	constructor(xx, xy, yx, yy, tx, ty) {
		this.xx = xx;
		this.xy = xy;
		this.yx = yx;
		this.yy = yy;
		this.tx = tx;
		this.ty = ty;
	}
	static Id() {
		return new Transform(1, 0, 0, 1, 0, 0);
	}
	static Translate(x, y) {
		return new Transform(1, 0, 0, 1, x, y);
	}

	applyX(x, y) {
		return x * this.xx + y * this.xy + this.tx;
	}
	applyY(x, y) {
		return x * this.yx + y * this.yy + this.ty;
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
			x: deltaX * this.xx + deltaY * this.xy,
			y: deltaX * this.yx + deltaY * this.yy,
		};
	}

	unapplyToSink(pt, sink) {
		const xx = pt.x - this.tx;
		const yy = pt.y - this.ty;
		const denom = this.xx * this.yy - this.yx * this.xy;
		sink.x = (xx * this.yy - yy * this.xy) / denom;
		sink.y = (yy * this.xx - xx * this.yx) / denom;
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
		const denom = this.xx * this.yy - this.yx * this.xy;
		return new Transform(
			this.yy / denom,
			-this.xy / denom,
			-this.yx / denom,
			this.xx / denom,
			-(this.tx * this.yy - this.ty * this.xy) / denom,
			-(-this.tx * this.yx + this.ty * this.xx) / denom,
		);
	}

	applyToGlyph(g, alsoAnchors) {
		g.applyTransform(this, alsoAnchors);
	}

	toString() {
		return `[[${this.xx} ${this.yx}] [${this.xy} ${this.yy}]] + [[${this.tx}] [${this.ty}]]`;
	}
	static isTranslate(tfm) {
		return tfm.xx === 1 && tfm.yy === 1 && tfm.xy === 0 && tfm.yx === 0;
	}
	static isIdentity(tfm) {
		return this.isTranslate(tfm) && tfm.tx === 0 && tfm.ty === 0;
	}
	static isPositive(tfm) {
		return tfm.xx * tfm.yy - tfm.xy * tfm.yx > 0;
	}
	static Scale(sx, sy) {
		return new Transform(sx, 0, 0, sy, 0, 0);
	}

	/** Combine the transfoems, in application order */
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
			z00.y,
		);
	}
}
