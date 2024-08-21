import { linreg, mix } from "@iosevka/util";
import * as SpiroJs from "spiro";

import { Vec2 } from "./point.mjs";
import { MonoKnot } from "./spiro-to-outline.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////

export class BiKnotCollector {
	constructor(contrast) {
		this.contrast = contrast; // stroke contrast
		this.defaultD1 = 0; // default LHS
		this.defaultD2 = 0; // default RHS sw
		this.lastKnot = null; // last knot in the processed items

		this.knots = []; // all the control items
		this.closed = false; // whether the shape is closed

		this.m_finished = false;
	}

	get controls() {
		throw new Error("Not implemented");
	}

	finish() {
		this.m_finished = true;
	}
	pushKnot(c) {
		if (this.m_finished) throw new Error("Cannot push knot after finish");

		let k;
		if (this.lastKnot) {
			k = new BiKnot(c.type, c.x, c.y, this.lastKnot.d1, this.lastKnot.d2);
		} else {
			k = new BiKnot(c.type, c.x, c.y, this.defaultD1, this.defaultD2);
		}

		this.knots.push(k);
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
	setImportant() {
		if (this.lastKnot) {
			this.lastKnot.unimportant = 0;
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

	getMonoKnots() {
		let a = [];
		for (const c of this.knots) {
			a.push(c.toMono());
		}
		return a;
	}
}

export class BiKnot {
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

///////////////////////////////////////////////////////////////////////////////////////////////////

export class SpiroExpander {
	constructor(gizmo, contrast, closed, biKnots) {
		this.m_gizmo = gizmo;
		this.m_contrast = contrast;
		this.m_closed = closed;

		this.m_biKnotsU = Array.from(biKnots);
		this.m_biKnotsT = biKnots.map(k => k.withGizmo(gizmo));
	}
	initializeNormals() {
		const normalRectifier = new NormalRectifier(this.m_biKnotsT, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(this.m_biKnotsT, this.m_closed, normalRectifier);
	}
	iterateNormals() {
		const centerBone = this.getPass2Knots();
		const normalRectifier = new NormalRectifier(this.m_biKnotsT, this.m_gizmo);
		SpiroJs.spiroToArcsOnContext(centerBone, this.m_closed, normalRectifier);
		return normalRectifier.totalDelta / normalRectifier.nKnotsProcessed;
	}
	getPass2Knots() {
		const expanded = this.expand(this.m_contrast);
		const middles = [];
		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const lhs = expanded.lhs[j];
			const rhs = expanded.rhs[j];
			middles[j] = new MonoKnot(
				this.m_biKnotsT[j].type,
				this.m_biKnotsT[j].unimportant,
				mix(lhs.x, rhs.x, 0.5),
				mix(lhs.y, rhs.y, 0.5),
			);
		}
		return middles;
	}
	expand() {
		const lhsT = [], // transformed LHS
			rhsT = [], // transformed RHS
			lhsU = [], // untransformed LHS
			rhsU = []; // untransformed RHS

		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const bk = this.m_biKnotsT[j];
			lhsT[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			rhsT[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			lhsU[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
			rhsU[j] = new MonoKnot(bk.type, bk.unimportant, 0, 0);
		}

		for (let j = 0; j < this.m_biKnotsT.length; j++) {
			const knotT = this.m_biKnotsT[j];
			if (knotT.unimportant) continue;
			let dx, dy;
			if (knotT.proposedNormal) {
				dx = knotT.proposedNormal.x;
				dy = knotT.proposedNormal.y;
			} else {
				dx = normalX(knotT.origTangent, this.m_contrast);
				dy = normalY(knotT.origTangent, this.m_contrast);
			}
			lhsT[j].x = knotT.x + knotT.d1 * dx;
			lhsT[j].y = knotT.y + knotT.d1 * dy;
			rhsT[j].x = knotT.x - knotT.d2 * dx;
			rhsT[j].y = knotT.y - knotT.d2 * dy;

			this.m_gizmo.unapplyToSink(lhsT[j], lhsU[j]);
			this.m_gizmo.unapplyToSink(rhsT[j], rhsU[j]);
		}

		this.interpolateUnimportantKnots(lhsT, rhsT, lhsU, rhsU);
		return { lhs: lhsT, rhs: rhsT, lhsUntransformed: lhsU, rhsUntransformed: rhsU };
	}
	interpolateUnimportantKnots(lhsT, rhsT, lhsU, rhsU) {
		let firstImportantIdx = -1;
		let lastImportantIdx = -1;

		for (let j = 0; j < this.m_biKnotsU.length; j++) {
			// If the current knot is unimportant, skip it
			if (this.m_biKnotsU[j].unimportant) continue;

			// If we've scanned an important knot before, interpolate the unimportant knots between
			if (lastImportantIdx !== -1) {
				this.interpolateUnimportantKnotsRg(lhsT, rhsT, lhsU, rhsU, lastImportantIdx, j);
			}

			if (firstImportantIdx === -1) firstImportantIdx = j;
			lastImportantIdx = j;
		}

		// Handle the last important ... first important wraparound
		if (firstImportantIdx !== -1 && lastImportantIdx !== -1) {
			this.interpolateUnimportantKnotsRg(
				lhsT,
				rhsT,
				lhsU,
				rhsU,
				lastImportantIdx,
				firstImportantIdx,
			);
		}
	}

	interpolateUnimportantKnotsRg(lhsT, rhsT, lhsU, rhsU, jBefore, jAfter) {
		let count = jAfter > jBefore ? jAfter - jBefore : lhsT.length - jBefore + jAfter;
		for (let offset = 1; offset < count; offset++) {
			let j = (jBefore + offset) % lhsT.length;

			const knotUBefore = this.m_biKnotsU[jBefore],
				knotU = this.m_biKnotsU[j],
				knotUAfter = this.m_biKnotsU[jAfter],
				lhsUBefore = lhsU[jBefore],
				lhsUAfter = lhsU[jAfter],
				rhsUBefore = rhsU[jBefore],
				rhsUAfter = rhsU[jAfter];

			lhsU[j].x = linreg(knotUBefore.x, lhsUBefore.x, knotUAfter.x, lhsUAfter.x, knotU.x);
			lhsU[j].y = linreg(knotUBefore.y, lhsUBefore.y, knotUAfter.y, lhsUAfter.y, knotU.y);
			rhsU[j].x = linreg(knotUBefore.x, rhsUBefore.x, knotUAfter.x, rhsUAfter.x, knotU.x);
			rhsU[j].y = linreg(knotUBefore.y, rhsUBefore.y, knotUAfter.y, rhsUAfter.y, knotU.y);

			this.m_gizmo.applyToSink(lhsU[j], lhsT[j]);
			this.m_gizmo.applyToSink(rhsU[j], rhsT[j]);
		}
	}
}
class NormalRectifier {
	constructor(stage1ControlKnots, gizmo) {
		this.m_gizmo = gizmo;
		this.m_biKnots = stage1ControlKnots;

		this.nKnotsProcessed = 0;
		this.totalDelta = 0;
	}
	beginShape() {}
	endShape() {}
	moveTo(x, y) {
		this.nKnotsProcessed += 1;
	}
	arcTo(arc, x, y) {
		if (this.nKnotsProcessed === 1) {
			const d = new Vec2(arc.deriveX0, arc.deriveY0);
			if (isTangentValid(d)) {
				this.updateKnotTangent(this.m_biKnots[0], d);
			} else {
				throw new Error("NaN angle detected.");
			}
		}
		if (this.m_biKnots[this.nKnotsProcessed]) {
			const d = new Vec2(arc.deriveX1, arc.deriveY1);
			if (isTangentValid(d)) {
				this.updateKnotTangent(this.m_biKnots[this.nKnotsProcessed], d);
			} else {
				throw new Error("NaN angle detected.");
			}
		}
		this.nKnotsProcessed += 1;
	}

	updateKnotTangent(knot, d) {
		if (isTangentValid(knot.origTangent)) {
			this.totalDelta +=
				(d.x - knot.origTangent.x) * (d.x - knot.origTangent.x) +
				(d.y - knot.origTangent.y) * (d.y - knot.origTangent.y);
		} else {
			this.totalDelta += 4;
		}
		knot.origTangent = d;
	}
}

function isTangentValid(d) {
	return d && isFinite(d.x) && isFinite(d.y);
}

function normalX(tangent, contrast) {
	return contrast * (-tangent.y / Math.hypot(tangent.x, tangent.y));
}
function normalY(tangent) {
	return tangent.x / Math.hypot(tangent.x, tangent.y);
}

function cyNth(a, j) {
	return a[j % a.length];
}
