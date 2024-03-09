export class Anchor {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	transform(tfm) {
		return Anchor.transform(tfm, this);
	}
	static transform(tfm, a) {
		return new Anchor(tfm.applyX(a.x, a.y), tfm.applyY(a.x, a.y));
	}
}
