// This class is used to "flatten" the spiro controls into a plain list of UserControlKnot
export class SpiroFlattener {
	constructor() {
		this.preControls = [];
		this.controls = [];
		this.postControls = [];
	}

	add(c) {
		if (Array.isArray(c)) {
			for (const item of c) this.add(item);
		} else if (c instanceof AfBase) {
			if (this.controls.length) {
				throw new Error(
					"Invalid spiro control sequence: pre-control functions must be added first",
				);
			}
			this.preControls.push(c);
		} else if (c instanceof TerminateInstruction) {
			this.postControls.push(c);
		} else {
			if (this.postControls.length) {
				throw new Error(
					"Invalid spiro control sequence: post-control functions must be added last",
				);
			}
			this.controls.push(c);
		}
	}

	flatten() {
		for (let cycle = 0; cycle < 32; cycle++) {
			const nd = this.flattenImpl();
			if (!nd) break;
		}

		let final = [];
		for (const c of this.controls) {
			this.addToSink(final, c.resolveNonInterpolated());
		}
		this.controls = final;
	}

	pipe(collector) {
		for (const fn of this.preControls) fn.applyTo(collector);
		for (const control of this.controls) collector.pushKnot(control);
		for (const postControl of this.postControls) postControl.applyTo(collector);
		collector.finish();
	}

	/// Add a control object (or list) to a sink
	/// Return the total number of items that may have dependencies
	addToSink(sink, c) {
		if (Array.isArray(c)) {
			let nd = 0;
			for (const item of c) nd += this.addToSink(sink, item);
			return nd;
		} else {
			if (!c.getDependency) {
				console.error(c);
			}
			sink.push(c);

			const cHasDependency = c.getDependency(RES_DEP_STAGE_INTERPOLATION);
			return cHasDependency ? 1 : 0;
		}
	}

	flattenImpl() {
		return this.doInterpolate();
	}

	doInterpolate() {
		let nd = 0;
		let sink = [];
		const dr = this.getDependenciesForInterpolation();
		for (let i = 0; i < this.controls.length; i++) {
			if (dr.deps[i] <= DEP_SKIP) {
				nd += this.addToSink(sink, this.controls[i]);
			} else {
				nd += this.addToSink(
					sink,
					this.controls[i].resolveInterpolation(
						this.controls[dr.prevNonDependentIdx[i]].getKernelKnot(),
						this.controls[dr.nextNonDependentIdx[i]].getKernelKnot(),
					),
				);
			}
		}
		this.controls = sink;
		return nd;
	}

	getDependenciesForInterpolation() {
		let nNonDependent = 0;
		let nDependent = 0;
		let deps = [];
		/// Index to the next non-dependent control
		let nextNonDependentIdx = [];
		let prevNonDependentIdx = [];

		for (let i = 0; i < this.controls.length; i++) {
			let s = this.controls[i].getDependency(RES_DEP_STAGE_INTERPOLATION);
			if (s) {
				nDependent += 1;
			} else {
				nNonDependent += 1;
			}
			deps.push(s);
			nextNonDependentIdx.push(-1);
			prevNonDependentIdx.push(-1);
		}

		let iFirstNonDependent = -1;
		let iLastNonDependent = -1;
		for (let i = 0; i < this.controls.length; i++) {
			if (deps[i] === 0) {
				if (iFirstNonDependent < 0) iFirstNonDependent = i;
				if (iLastNonDependent >= 0) {
					nextNonDependentIdx[iLastNonDependent] = i;
					prevNonDependentIdx[i] = iLastNonDependent;
				}
				iLastNonDependent = i;
			} else if (iLastNonDependent >= 0) {
				prevNonDependentIdx[i] = iLastNonDependent;
			}
		}
		if (iFirstNonDependent < 0 || iLastNonDependent < 0) {
			console.log(this.controls, deps);
			throw new Error("A control sequence must have at least one non-dependent control");
		} else {
			nextNonDependentIdx[iLastNonDependent] = iFirstNonDependent;
			prevNonDependentIdx[iFirstNonDependent] = iLastNonDependent;
		}

		for (let i = 0; i < iFirstNonDependent; i++) {
			prevNonDependentIdx[i] = iLastNonDependent;
		}
		for (let i = 0; i < this.controls.length; i++) {
			if (deps[i] != 0) {
				nextNonDependentIdx[i] = nextNonDependentIdx[prevNonDependentIdx[i]];
			}
		}

		return { nDependent, deps, prevNonDependentIdx, nextNonDependentIdx };
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/** The "amendmend function" */
export class AfBase {
	applyTo() {
		throw new Error("Unimplemented");
	}
}

export class AfCombine extends AfBase {
	constructor(af1, af2) {
		super();
		this.af1 = af1;
		this.af2 = af2;
	}
	applyTo(target) {
		if (this.af1) this.af1.applyTo(target);
		if (this.af2) this.af2.applyTo(target);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const RES_DEP_STAGE_INTERPOLATION = 1;

export const DEP_SKIP = 0x1;
export const DEP_PRE_X = 0x2;
export const DEP_PRE_Y = 0x4;
export const DEP_SAME_X = 0x8;
export const DEP_SAME_Y = 0x10;
export const DEP_POST_X = 0x20;
export const DEP_POST_Y = 0x40;

const DEP_PRE = DEP_PRE_X | DEP_PRE_Y;
const DEP_POST = DEP_POST_X | DEP_POST_Y;

export class UserControlKnot {
	constructor(type, x, y, af) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.af = af;
	}
	applyTo(ctx) {
		if (this.af) this.af.applyTo(ctx);
	}

	getDependency() {
		return 0;
	}

	getKernelKnot() {
		return this;
	}
	resolveCoordiantePropogation(ic, pre, post) {
		switch (ic) {
			case 0:
				this.x = this.x.resolveX(pre, this, post);
				break;
			case 1:
				this.y = this.y.resolveY(pre, this, post);
				break;
		}
	}

	resolveNonInterpolated() {
		return this;
	}
	resolveInterpolation() {
		throw new Error("Unreachable");
	}

	static isCoordinateValid(x) {
		return isFinite(x);
	}
}

export class UserCloseKnotPair {
	constructor(center, tyPre, tyPost, dirX, dirY, dPre, dPost) {
		this.center = center;
		this.tyPre = tyPre;
		this.tyPost = tyPost;
		this.dirX = dirX;
		this.dirY = dirY;
		this.dPre = dPre;
		this.dPost = dPost;
	}

	getDependency(stage) {
		return this.center.getDependency(stage);
	}

	getKernelKnot() {
		return this.center.getKernelKnot();
	}
	resolveCoordiantePropogation(ic, pre, post) {
		this.center.resolveCoordiantePropogation(ic, pre, post);
	}

	resolveNonInterpolated() {
		return [
			new UserControlKnot(
				this.tyPre,
				this.center.x + this.dirX * this.dPre,
				this.center.y + this.dirY * this.dPre,
				this.center.af,
			),
			new UserControlKnot(
				this.tyPost,
				this.center.x + this.dirX * this.dPost,
				this.center.y + this.dirY * this.dPost,
				this.center.af,
			),
		];
	}
	resolveInterpolation() {
		throw new Error("Unreachable");
	}
}

export class VirtualControlKnot {
	constructor(x, y, af) {
		this.center = new UserControlKnot("corner", x, y, af);
	}

	getDependency(stage) {
		return this.center.getDependency(stage);
	}
	getKernelKnot() {
		return this.center.getKernelKnot();
	}
	resolveCoordiantePropogation(ic, pre, post) {
		this.center.resolveCoordiantePropogation(ic, pre, post);
	}
	resolveNonInterpolated() {
		return [];
	}
	resolveInterpolation() {
		throw new Error("Unreachable");
	}
}

export class InterpolatorBase {
	constructor() {}

	getDependency(stage) {
		switch (stage) {
			case RES_DEP_STAGE_INTERPOLATION:
				return DEP_PRE | DEP_POST;
			default:
				return 0;
		}
	}
	getKernelKnot() {
		throw new Error("Unreachable");
	}
	resolveCoordiantePropogation() {
		throw new Error("Unreachable");
	}

	resolveNonInterpolated() {
		throw new Error("Unreachable: All interpolations shall be resolved now");
	}
	resolveInterpolation(pre, post) {
		throw new Error("Unimplemented");
	}
}

/**
 * Used in [decor@] (and thus operator (~~~)).
 * Make a list of control items "delayed" till resolution of interpolator.
 * Useful for specifying the decoration features of a path.
 */
export class DecorInterpolator extends InterpolatorBase {
	constructor(items) {
		super();
		this.items = items;
	}
	resolveInterpolation(pre, post) {
		return this.items;
	}
}

export class FunctionInterpolator extends InterpolatorBase {
	constructor(blendFn, extraArgs) {
		super();
		this.blendFn = blendFn;
		this.extraArgs = extraArgs;
	}
	resolveInterpolation(pre, post) {
		return this.blendFn(pre, post, this.extraArgs);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export class TerminateInstruction {
	constructor(type, af) {
		this.type = type;
		this.af = af;
	}
	applyTo(ctx) {
		if (this.type === "close") ctx.closed = true;
		if (this.af) throw new Error("Unreachable");
	}
}
