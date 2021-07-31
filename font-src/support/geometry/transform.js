"use strict";

exports.Transform = class Transform {
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

	apply(pt) {
		return this.applyXY(pt.x, pt.y);
	}
	applyXY(x, y) {
		return {
			x: x * this.xx + y * this.yx + this.x,
			y: x * this.xy + y * this.yy + this.y
		};
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
	unapply(pt) {
		const xx = pt.x - this.x;
		const yy = pt.y - this.y;
		const denom = this.xx * this.yy - this.xy * this.yx;
		return {
			x: (xx * this.yy - yy * this.yx) / denom,
			y: (yy * this.xx - xx * this.xy) / denom
		};
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
	static Combine(...tfms) {
		let z00 = { x: 0, y: 0 };
		let z10 = { x: 1, y: 0 };
		let z01 = { x: 0, y: 1 };
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
};
