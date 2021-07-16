"use strict";

module.exports = class Anchor {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	transform(tfm) {
		return Anchor.transform(tfm, this);
	}
	static transform(tfm, a) {
		const x = a.x * tfm.xx + a.y * tfm.yx + tfm.x;
		const y = a.x * tfm.xy + a.y * tfm.yy + tfm.y;
		return new Anchor(x, y);
	}
};
