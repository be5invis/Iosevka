import {
	DecorInterpolator,
	DEP_POST_X,
	DEP_POST_Y,
	DEP_PRE_X,
	DEP_PRE_Y,
	DEP_SAME_X,
	DEP_SAME_Y,
	DerivedCoordinateBase,
} from "@iosevka/geometry/spiro-control";

const TINY = 1 / 128;

export function SetupBuilders(_bindings) {
	return {
		// Derived coordinates
		// pre@, post@: copy or ade delta to the pre or post point's X or Y coordinate
		// use with pre@ or like (pre@ <+> delta)
		"pre@": new CDeltaPre(0),
		"post@": new CDeltaPost(0),

		// "Tangent" derived cooredinates, which is simply a tiny delta.
		"pre@tang-out": s => new CDeltaPre(TINY * s),
		"post@tang-out": s => new CDeltaPost(TINY * s),
		"pre@tang-in": s => new CDeltaPre(-TINY * s),
		"post@tang-in": s => new CDeltaPost(-TINY * s),

		// pre@mix@post: mix between pre and post point's X or Y coordinates
		// usage [pre@mix@post proportion] or [pre@mix@post proportion delta]
		"pre@mix@post": (p, delta) => new CMixCoord(p, delta),
		"post@mix@pre": (p, delta) => new CMixCoord(1 - p, delta),

		// pre@slope, post@slope: Get the coordiante using the pre/post point's coordinate and a
		// slope. An optional delta can be added to the result. See the definitions for more
		// details.
		"pre@slope": (s, delta) => new CAtSlopePre(s, delta),
		"post@slope": (s, delta) => new CAtSlopePost(s, delta),

		// Min and max derived coordinates
		"min@": (...args) => new CMathFold(Math.min, args),
		"max@": (...args) => new CMathFold(Math.max, args),

		// Interpolators
		// decor@, decor@@, decor@@@: Add a "delay" to the thing inside when resolving the spiro
		// controls. This is a very useful utility for coordinate propagation, which allow us to
		// "skip" the current point and go to the next or previous point. The number of @'s
		// determines the number of times the delay is applied.
		"decor@": x => new DecorInterpolator(x),
		"decor@@": x => new DecorInterpolator(new DecorInterpolator(x)),
		"decor@@@": x => new DecorInterpolator(new DecorInterpolator(new DecorInterpolator(x))),
	};
}

class CDeltaPre extends DerivedCoordinateBase {
	constructor(delta) {
		super();
		this.delta = delta;
	}
	op_add(delta) {
		return new CDeltaPre(this.delta + delta);
	}
	op_sub(delta) {
		return new CDeltaPre(this.delta - delta);
	}
	getDependencyForX() {
		return DEP_PRE_X;
	}
	getDependencyForY() {
		return DEP_PRE_Y;
	}
	resolveX(pre, curr, post) {
		return pre.x + this.delta;
	}
	resolveY(pre, curr, post) {
		return pre.y + this.delta;
	}
}

class CDeltaPost extends DerivedCoordinateBase {
	constructor(delta) {
		super();
		this.delta = delta;
	}
	op_add(delta) {
		return new CDeltaPost(this.delta + delta);
	}
	op_sub(delta) {
		return new CDeltaPost(this.delta - delta);
	}
	getDependencyForX() {
		return DEP_POST_X;
	}
	getDependencyForY() {
		return DEP_POST_Y;
	}
	resolveX(pre, curr, post) {
		return post.x + this.delta;
	}
	resolveY(pre, curr, post) {
		return post.y + this.delta;
	}
}

class CMathFold extends DerivedCoordinateBase {
	constructor(operator, args) {
		super();
		this.operator = operator;
		this.args = args;
	}
	getDependencyForX() {
		let flag = 0;
		for (const item of this.args) {
			if (typeof item === "number") continue;
			flag |= item.getDependencyForX();
		}
		return flag;
	}
	getDependencyForY() {
		let flag = 0;
		for (const item of this.args) {
			if (typeof item === "number") continue;
			flag |= item.getDependencyForY();
		}
		return flag;
	}
	resolveX(pre, curr, post) {
		let result =
			typeof this.args[0] === "number"
				? this.args[0]
				: this.args[0].resolveX(pre, curr, post);
		for (let i = 1; i < this.args.length; i++) {
			const item = this.args[i];
			const value = typeof item === "number" ? item : item.resolveX(pre, curr, post);
			result = this.operator(result, value);
		}
		return result;
	}
	resolveY(pre, curr, post) {
		let result =
			typeof this.args[0] === "number"
				? this.args[0]
				: this.args[0].resolveY(pre, curr, post);
		for (let i = 1; i < this.args.length; i++) {
			const item = this.args[i];
			const value = typeof item === "number" ? item : item.resolveY(pre, curr, post);
			result = this.operator(result, value);
		}
		return result;
	}
}

export class CMixCoord extends DerivedCoordinateBase {
	constructor(proportion, delta, mockPre, mockPost) {
		super();
		this.proportion = proportion;
		this.delta = delta || 0;
		this.mockPre = mockPre || null;
		this.mockPost = mockPost || null;
	}
	getDependencyForX() {
		let f = 0;
		if (!this.mockPre) f |= DEP_PRE_X;
		if (!this.mockPost) f |= DEP_POST_X;
		return f;
	}
	getDependencyForY() {
		let f = 0;
		if (!this.mockPre) f |= DEP_PRE_Y;
		if (!this.mockPost) f |= DEP_POST_Y;
		return f;
	}
	resolveX(_pre, curr, _post) {
		const pre = this.mockPre || _pre;
		const post = this.mockPost || _post;
		return pre.x + this.proportion * (post.x - pre.x) + this.delta;
	}
	resolveY(_pre, curr, _post) {
		const pre = this.mockPre || _pre;
		const post = this.mockPost || _post;
		return pre.y + this.proportion * (post.y - pre.y) + this.delta;
	}
}

class CAtSlopePre extends DerivedCoordinateBase {
	constructor(slope, delta) {
		super();
		this.slope = slope;
		this.delta = delta || 0;
	}
	getDependencyForX() {
		return DEP_PRE_X | DEP_PRE_Y | DEP_SAME_Y;
	}
	getDependencyForY() {
		return DEP_PRE_X | DEP_PRE_Y | DEP_SAME_X;
	}
	resolveY(pre, curr, post) {
		return pre.y + this.slope * (curr.x - pre.x) + this.delta;
	}
	resolveX(pre, curr, post) {
		return pre.x + (curr.y - pre.y) / this.slope + this.delta;
	}
}

class CAtSlopePost extends DerivedCoordinateBase {
	constructor(slope, delta) {
		super();
		this.slope = slope;
		this.delta = delta || 0;
	}
	getDependencyForX() {
		return DEP_POST_X | DEP_POST_Y | DEP_SAME_Y;
	}
	getDependencyForY() {
		return DEP_POST_X | DEP_POST_Y | DEP_SAME_X;
	}
	resolveY(pre, curr, post) {
		return post.y + this.slope * (curr.x - post.x) + this.delta;
	}
	resolveX(pre, curr, post) {
		return post.x + (curr.y - post.y) / this.slope + this.delta;
	}
}

const KBP_X = 1;
const KBP_Y = 2;
export class CopyBackKnotProxy {
	constructor(delegate, bag, options) {
		this.delegate = delegate;
		this.bag = bag;
		this.options = options;
	}

	getDependency(stage) {
		return this.delegate.getDependency(stage);
	}
	getKernelKnot() {
		return this.delegate.getKernelKnot();
	}
	resolveCoordiantePropogation(ic, pre, post) {
		let r = this.delegate.resolveCoordiantePropogation(ic, pre, post);
		if (this.options & KBP_X) this.bag.x = this.delegate.x;
		if (this.options & KBP_Y) this.bag.y = this.delegate.y;
		return r;
	}
	resolveInterpolation() {
		return this.delegate.resolveInterpolation();
	}
}
