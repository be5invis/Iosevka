const { mix } = require("./utils");

class Box {
	constructor(t, b, l, r) {
		this.top = t;
		this.bottom = b;
		this.left = l;
		this.right = r;
		this.xMid = this.xMiddle = mix(l, r, 0.5);
		this.yMid = this.yMiddle = mix(b, t, 0.5);
	}

	withTop(t) {
		return new Box(t, this.bottom, this.left, this.right);
	}
	withBottom(b) {
		return new Box(this.top, b, this.left, this.right);
	}
	withLeft(l) {
		return new Box(this.top, this.bottom, l, this.right);
	}
	withRight(r) {
		return new Box(this.top, this.bottom, this.left, r);
	}

	withXPadding(d) {
		return new Box(this.top, this.bottom, this.left + d, this.right - d);
	}
	withYPadding(d) {
		return new Box(this.top - d, this.bottom + d, this.left, this.right);
	}

	mixX(t) {
		return mix(this.left, this.right, t);
	}
	mixXMidLeft(t) {
		return mix(this.xMid, this.left, t);
	}
	mixXMidRight(t) {
		return mix(this.xMid, this.right, t);
	}
	mixY(t) {
		return mix(this.bottom, this.top, t);
	}
}

exports.Box = Box;
