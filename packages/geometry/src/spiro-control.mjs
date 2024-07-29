// This class is used to "flatten" the spiro controls into a plain list of UserControlKnot
export class SpiroFlattener {
	constructor() {
		this.preControlFunctions = [];
		this.controls = [];
		this.postControls = [];
	}

	add(c) {
		if (Array.isArray(c)) {
			for (const item of c) this.add(item);
		} else if (c instanceof Function) {
			if (!this.controls.length) this.preControlFunctions.push(c);
			else throw new Error("Invalid spiro control sequence");
		} else if (c instanceof TerminateInstruction) {
			this.postControls.push(c);
		} else {
			if (this.postControls.length) throw new Error("Invalid spiro control sequence");
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
		for (const fn of this.preControlFunctions) fn.call(collector);
		for (const control of this.controls) collector.pushKnot(control);
		for (const postControl of this.postControls) postControl.applyTo(collector);
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

			const cHasDependency =
				c.getDependency(RES_DEP_STAGE_COORDINATE_PROPOGATION_X) ||
				c.getDependency(RES_DEP_STAGE_COORDINATE_PROPOGATION_Y) ||
				c.getDependency(RES_DEP_STAGE_INTERPOLATION);
			return cHasDependency ? 1 : 0;
		}
	}

	flattenImpl() {
		this.propagateCoordinates();
		return this.doInterpolate();
	}

	propagateCoordinates() {
		const propagator = new CoordinatePropagator(this.controls);
		if (!propagator.nDependencies) return;
		propagator.solveAll();
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

	getDependenciesForInterpolation(skipKind) {
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

/// Utility class to propagate coordinates
class CoordinatePropagator {
	constructor(subjects) {
		this.nDependencies = 0;
		this.subjects = [];
		this.depX = [];
		this.stateX = [];
		this.depY = [];
		this.stateY = [];

		for (const subject of subjects) {
			let dx = subject.getDependency(RES_DEP_STAGE_COORDINATE_PROPOGATION_X);
			let dy = subject.getDependency(RES_DEP_STAGE_COORDINATE_PROPOGATION_Y);
			if (dx === DEP_SKIP && dy === DEP_SKIP) continue;

			this.subjects.push(subject);
			this.depX.push(dx), this.depY.push(dy);
			this.stateX.push(dx > DEP_SKIP ? CR_UNRESOLVED : CR_RESOLVED);
			this.stateY.push(dy > DEP_SKIP ? CR_UNRESOLVED : CR_RESOLVED);
			if (dx > DEP_SKIP) this.nDependencies += 1;
			if (dy > DEP_SKIP) this.nDependencies += 1;
		}
	}

	solveAll() {
		for (let i = 0; i < this.subjects.length; i++) {
			this.solve(i, 0);
			this.solve(i, 1);
		}
	}
	solve(i, ic) {
		const depC = ic ? this.depY : this.depX;
		const stateC = ic ? this.stateY : this.stateX;

		if (stateC[i] === CR_RESOLVED) return;
		if (stateC[i] === CR_RESOLVING) throw new Error("Circular dependency detected");

		stateC[i] = CR_RESOLVING;

		if (depC[i] & DEP_PRE_X) this.solve(this.cycI(i - 1), 0);
		if (depC[i] & DEP_PRE_Y) this.solve(this.cycI(i - 1), 1);
		if (depC[i] & DEP_POST_X) this.solve(this.cycI(i + 1), 0);
		if (depC[i] & DEP_POST_Y) this.solve(this.cycI(i + 1), 1);

		// console.log(i, ic, this);
		this.subjects[i].resolveCoordiantePropogation(
			ic,
			this.subjects[this.cycI(i - 1)].getKernelKnot(),
			this.subjects[this.cycI(i + 1)].getKernelKnot(),
		);

		stateC[i] = CR_RESOLVED;
	}

	cycI(i) {
		return (i + this.subjects.length) % this.subjects.length;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const RES_DEP_STAGE_COORDINATE_PROPOGATION_X = 0;
const RES_DEP_STAGE_COORDINATE_PROPOGATION_Y = 1;
const RES_DEP_STAGE_INTERPOLATION = 2;

export const DEP_SKIP = 0x1;
export const DEP_PRE_X = 0x2;
export const DEP_PRE_Y = 0x4;
export const DEP_POST_X = 0x8;
export const DEP_POST_Y = 0x10;

const DEP_PRE = DEP_PRE_X | DEP_PRE_Y;
const DEP_POST = DEP_POST_X | DEP_POST_Y;

const CR_UNRESOLVED = 0;
const CR_RESOLVING = 1;
const CR_RESOLVED = 2;

export class UserControlKnot {
	constructor(type, x, y, af) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.af = af;
	}
	applyTo(ctx) {
		if (this.af) this.af.call(ctx);
	}

	getDependency(stage) {
		switch (stage) {
			case RES_DEP_STAGE_COORDINATE_PROPOGATION_X:
				return typeof this.x === "number" ? 0 : this.x.getDependency(stage);
			case RES_DEP_STAGE_COORDINATE_PROPOGATION_Y:
				return typeof this.y === "number" ? 0 : this.y.getDependency(stage);
			case RES_DEP_STAGE_INTERPOLATION:
				return 0;
			default:
				return 0;
		}
	}

	getKernelKnot() {
		return this;
	}
	resolveCoordiantePropogation(ic, pre, post) {
		// console.log(this, ic, pre, post);
		switch (ic) {
			case 0:
				this.x = this.x.resolve(pre, this, post);
				break;
			case 1:
				this.y = this.y.resolve(pre, this, post);
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
		return (typeof x === "number" && isFinite(x)) || x instanceof DerivedCoordinateBase;
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
		return this.center;
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

export class InterpolatorBase {
	constructor() {}

	getDependency(stage) {
		switch (stage) {
			case RES_DEP_STAGE_COORDINATE_PROPOGATION_X:
			case RES_DEP_STAGE_COORDINATE_PROPOGATION_Y:
				return DEP_SKIP;
			case RES_DEP_STAGE_INTERPOLATION:
				return DEP_PRE | DEP_POST;
			default:
				return 0;
		}
	}

	getKernelKnot() {
		throw new Error("Unreachable");
	}
	resolveCoordiantePropogation(pre, post) {
		throw new Error("Unreachable");
	}

	resolveNonInterpolated() {
		throw new Error("Unreachable: All interpolations shall be resolved now");
	}
	resolveInterpolation(pre, post) {
		throw new Error("Unimplemented");
	}
}

class FunctionInterpolator extends InterpolatorBase {
	constructor(blendFn, extraArgs) {
		super();
		this.blendFn = blendFn;
		this.extraArgs = extraArgs;
	}
	resolveInterpolation(pre, post) {
		return this.blendFn(pre, post, this.extraArgs);
	}
}
export function Interpolator(blender, restParameters) {
	return new FunctionInterpolator(blender, restParameters);
}

export class TerminateInstruction {
	constructor(type, af) {
		this.type = type;
		this.af = af;
	}
	applyTo(ctx) {
		if (this.type === "close") ctx.closed = true;
		if (this.af) throw new Error("Unreachable");
		// if (this.af) this.af.call(ctx);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export class DerivedCoordinateBase {
	getDependency() {
		throw new Error("Unimplemented");
	}
	resolve(pre, curr, post) {
		throw new Error("Unimplemented");
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export class BiKnotCollector {
	constructor(contrast) {
		this.contrast = contrast; // stroke contrast
		this.defaultD1 = 0; // default LHS
		this.defaultD2 = 0; // default RHS sw
		this.lastKnot = null; // last knot in the processed items

		this.controls = []; // all the control items
		this.closed = false; // whether the shape is closed
	}

	pushKnot(c) {
		let k;
		if (this.lastKnot) {
			k = new BiKnot(c.type, c.x, c.y, this.lastKnot.d1, this.lastKnot.d2);
		} else {
			k = new BiKnot(c.type, c.x, c.y, this.defaultD1, this.defaultD2);
		}

		this.controls.push(k);
		this.lastKnot = k;

		c.applyTo(this);
	}
	setWidth(l, r) {
		if (this.lastKnot) {
			this.lastKnot.d1 = l;
			this.lastKnot.d2 = r;
		} else {
			this.defaultD1 = l;
			this.defaultD2 = r;
		}
	}
	headsTo(direction) {
		if (this.lastKnot) {
			this.lastKnot.proposedNormal = direction;
		}
	}
	setUnimportant() {
		if (this.lastKnot) {
			this.lastKnot.unimportant = 1;
		}
	}
	setContrast(c) {
		this.contrast = c;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export class MonoKnot {
	constructor(type, unimportant, x, y) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.unimportant = unimportant;
	}
	clone() {
		const k1 = new MonoKnot(this.type, this.x, this.y, this.unimportant);
		return k1;
	}
	hash(h) {
		h.beginStruct("MonoKnot");
		h.str(this.type);
		h.bool(this.unimportant);
		h.f64(this.x);
		h.f64(this.y);
		h.endStruct();
	}

	reverseType() {
		if (this.type === "left") {
			this.type = "right";
		} else if (this.type === "right") {
			this.type = "left";
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

class BiKnot {
	constructor(type, x, y, d1, d2) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.d1 = d1;
		this.d2 = d2;
		this.proposedNormal = null;
		this.unimportant = 0;

		// Derived properties
		this.origTangent = null;
	}
	clone() {
		const k1 = new BiKnot(this.type, this.x, this.y, this.d1, this.d2);
		k1.origTangent = this.origTangent;
		k1.proposedNormal = this.proposedNormal;
		k1.unimportant = this.unimportant;
		return k1;
	}
	withGizmo(gizmo) {
		const tfZ = gizmo.applyXY(this.x, this.y);
		const k1 = new BiKnot(this.type, tfZ.x, tfZ.y, this.d1, this.d2);
		k1.origTangent = this.origTangent ? gizmo.applyOffset(this.origTangent) : null;
		k1.proposedNormal = this.proposedNormal ? gizmo.applyOffset(this.proposedNormal) : null;
		k1.unimportant = this.unimportant;
		return k1;
	}
	hash(h) {
		h.beginStruct("BiKnot");
		h.str(this.type);
		h.bool(this.unimportant);
		h.f64(this.x);
		h.f64(this.y);

		h.bool(this.d1 != null);
		if (this.d1 != null) h.f64(this.d1);
		h.bool(this.d2 != null);
		if (this.d2 != null) h.f64(this.d2);

		h.bool(this.proposedNormal != null);
		if (this.proposedNormal) {
			h.f64(this.proposedNormal.x);
			h.f64(this.proposedNormal.y);
		}
		h.endStruct();
	}

	toMono() {
		return new MonoKnot(this.type, this.unimportant, this.x, this.y);
	}
}
