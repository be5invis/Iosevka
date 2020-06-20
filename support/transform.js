"use strict";

module.exports = class Transform {
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

	apply(pt) {
		return {
			x: pt.x * this.xx + pt.y * this.yx + this.x,
			y: pt.x * this.xy + pt.y * this.yy + this.y
		};
	}
	applyOffset(delta) {
		return {
			x: delta.x * this.xx + delta.y * this.yx,
			y: delta.x * this.xy + delta.y * this.yy
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
};
