import { mix } from "@iosevka/util";

export class Box {
	constructor(t, b, l, r) {
		this.top = t;
		this.bot = this.bottom = b;
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

	padLeft(d) {
		return new Box(this.top, this.bottom, this.left + d, this.right);
	}
	padRight(d) {
		return new Box(this.top, this.bottom, this.left, this.right - d);
	}
	padTop(d) {
		return new Box(this.top - d, this.bottom, this.left, this.right);
	}
	padBottom(d) {
		return new Box(this.top, this.bottom + d, this.left, this.right);
	}

	withXMix(pL, pR) {
		return new Box(
			this.top,
			this.bottom,
			mix(this.left, this.right, pL),
			mix(this.left, this.right, pR),
		);
	}
	withYMix(pT, pB) {
		return new Box(
			mix(this.bottom, this.top, pT),
			mix(this.bottom, this.top, pB),
			this.left,
			this.right,
		);
	}

	xp(t) {
		return this.mixX(t);
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

	yp(t) {
		return this.mixY(t);
	}
	mixY(t) {
		return mix(this.bottom, this.top, t);
	}
}
