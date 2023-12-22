import { mix } from "@iosevka/util";

export class CSegment {
	constructor(x1, y1, x2, y2) {
		this.x0 = x1;
		this.y0 = y1;
		this.x1 = x2;
		this.y1 = y2;
	}

	x(t) {
		return mix(this.x0, this.x1, t);
	}
	y(t) {
		return mix(this.y0, this.y1, t);
	}

	z(t, fn, ...additionalArgs) {
		return fn(this.x(t), this.y(t), ...additionalArgs);
	}
	zz(tx, ty, fn, ...additionalArgs) {
		return fn(this.x(tx), this.y(ty), ...additionalArgs);
	}
}

export function Seg(x0, y0, x1, y1) {
	return new CSegment(x0, y0, x1, y1);
}
