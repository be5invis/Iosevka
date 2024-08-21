import * as SpiroJs from "spiro";

import { linreg } from "@iosevka/util";
import * as CurveUtil from "./curve-util.mjs";
import { Point } from "./point.mjs";
import { MonoKnot } from "./spiro-to-outline.mjs";

export class PenKnotCollector {
	constructor(gizmo, defaultProfile, fProfileFixed) {
		this.gizmo = gizmo;
		this.m_profile = defaultProfile;
		this.m_lastKnot = null;
		this.m_finished = false;
		this.m_profileFixed = fProfileFixed;

		this.knots = [];
		this.closed = false;
	}
	finish() {
		this.m_finished = true;
	}
	pushKnot(c) {
		if (this.m_finished) throw new Error("Cannot push knot after finish");
		let k = new PenKnot(c.type, c.x, c.y, this.m_profile);
		this.knots.push(k);
		this.m_lastKnot = k;

		c.applyTo(this);
	}

	setWidth() {}
	headsTo() {}
	setUnimportant() {
		if (this.m_lastKnot) this.m_lastKnot.profile = null;
	}
	setImportant() {} // Not used
	setContrast() {}

	setProfile(profile) {
		if (this.m_profileFixed) return;
		if (profile.length !== this.m_profile.length)
			throw new Error("Pen profile length mismatch");
		if (this.m_lastKnot) this.m_lastKnot.profile = profile;
		this.m_profile = profile;
	}
}

export class PenKnot {
	constructor(type, x, y, profile) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.profile = profile;
	}
	clone() {
		const k1 = new PenKnot(this.type, this.x, this.y, this.profile);
		return k1;
	}
	withGizmo(gizmo) {
		const tfZ = gizmo.applyXY(this.x, this.y);
		const k1 = new PenKnot(this.type, tfZ.x, tfZ.y, this.profile);
		return k1;
	}
	hash(h) {
		h.beginStruct("PenKnot");
		h.str(this.type);
		h.f64(this.x);
		h.f64(this.y);
		h.bool(this.profile != null);
		if (this.profile) {
			h.beginArray(this.profile.length);
			for (let i = 0; i < this.profile.length; i++) {
				h.f64(this.profile[i].x);
				h.f64(this.profile[i].y);
			}
			h.endArray();
		}
		h.endStruct();
	}
}

export class PenSpiroExpander {
	constructor(gizmo, profile, closed, knots) {
		this.m_gizmo = gizmo;
		this.m_closed = closed;
		this.m_knotsU = Array.from(knots);
		this.m_knotsT = knots.map(k => k.withGizmo(gizmo));
		this.m_profileEdges = profile.length;

		this.m_traces = [];
	}

	getGeometry() {
		this.traceAll();

		const contours = [];
		for (let i = 0; i < this.m_traces.length; i++) {
			const iNext = (i + 1) % this.m_traces.length;
			if (this.m_traces[i].length !== this.m_traces[iNext].length) {
				throw new Error("Different number of arcs in traces");
			}
			for (let j = 0; j < this.m_traces[i].length; j++) {
				const arcForward = this.m_traces[i][j];
				const arcBackward = this.m_traces[iNext][j];
				makeProfiledStroke(contours, arcForward, arcBackward);
			}
		}

		return contours;
	}

	traceAll() {
		for (let i = 0; i < this.m_profileEdges; i++) {
			this.calculateShiftedProfile(i);
		}
	}
	calculateShiftedProfile(iEdge) {
		let traceT = [],
			traceU = [];
		for (let i = 0; i < this.m_knotsT.length; i++) {
			const trT = this.getTrace(this.m_knotsT[i], iEdge);
			const trU = trT.clone();
			this.m_gizmo.unapplyToSink(trT, trU);
			traceT.push(trT), traceU.push(trU);
		}
		this.interpolateUnimportantTraceKnots(traceU, traceT);

		let arcc = new SimplyCollectArcs();
		SpiroJs.spiroToArcsOnContext(traceT, this.m_closed, arcc);
		this.m_traces.push(arcc.arcs);
	}
	getTrace(k, iEdge) {
		if (k.profile) {
			return new MonoKnot(k.type, false, k.x + k.profile[iEdge].x, k.y + k.profile[iEdge].y);
		} else {
			return new MonoKnot(k.type, true, k.x, k.y);
		}
	}
	interpolateUnimportantTraceKnots(traceU, traceT) {
		let firstImportantIdx = -1;
		let lastImportantIdx = -1;

		for (let i = 0; i < traceU.length; i++) {
			if (traceU[i].unimportant) continue;

			if (lastImportantIdx !== -1) {
				this.interpolateUnimportantTraceKnotsRg(traceU, traceT, lastImportantIdx, i);
			}

			if (firstImportantIdx === -1) firstImportantIdx = i;
			lastImportantIdx = i;
		}

		if (firstImportantIdx !== -1 && lastImportantIdx !== -1) {
			this.interpolateUnimportantTraceKnotsRg(
				traceU,
				traceT,
				lastImportantIdx,
				firstImportantIdx,
			);
		}
	}
	interpolateUnimportantTraceKnotsRg(traceU, traceT, last, next) {
		let count = next > last ? next - last : traceU.length - last + next;
		for (let offset = 1; offset < count; offset++) {
			let i = (last + offset) % traceU.length;
			this.interpolateKnot(
				this.m_knotsU[last],
				traceU[last],
				this.m_knotsU[i],
				traceU[i],
				traceT[i],
				this.m_knotsU[next],
				traceU[next],
			);
		}
	}
	interpolateKnot(rBefore, uBefore, rCurr, uCurr, tCurr, rAfter, uAfter) {
		uCurr.x = linreg(rBefore.x, uBefore.x, rAfter.x, uAfter.x, rCurr.x);
		uCurr.y = linreg(rBefore.y, uBefore.y, rAfter.y, uAfter.y, rCurr.y);
		this.m_gizmo.applyToSink(uCurr, tCurr);
	}
}

class SimplyCollectArcs {
	constructor() {
		this.arcs = [];
	}
	beginShape() {}
	endShape() {}
	moveTo() {}
	arcTo(arc) {
		this.arcs.push(arc);
	}
}

// arcForward and arcBackward must be spiro arcs.
function makeProfiledStroke(contours, arcForward, arcBackward) {
	const [subdividesForward, subdividesBackward] = subdivideKnotPair(
		arcForward,
		arcBackward,
		CurveUtil.GEOMETRY_PRECISION,
	);
	for (let i = 0; i < subdividesForward.length; i++) {
		const [a1, b1, c1, d1] = subdividesForward[i].toCubicBezier();
		const [a2, b2, c2, d2] = subdividesBackward[i].toCubicBezier();
		contours.push([
			Point.from(Point.Type.Corner, a1),
			Point.from(Point.Type.CubicStart, b1),
			Point.from(Point.Type.CubicEnd, c1),
			Point.from(Point.Type.Corner, d1),
			Point.from(Point.Type.Corner, d2),
			Point.from(Point.Type.CubicStart, c2),
			Point.from(Point.Type.CubicEnd, b2),
			Point.from(Point.Type.Corner, a2),
		]);
	}
}

function subdivideKnotPair(arcForward, arcBackward, delta) {
	const MAX_STOPS = 16;

	let sinkForward = [],
		sinkBackward = [];
	for (let stops = 1; stops < MAX_STOPS; stops++) {
		sinkForward.length = 0;
		sinkBackward.length = 0;

		uniformSubdivide(arcForward, stops, sinkForward);
		uniformSubdivide(arcBackward, stops, sinkBackward);

		let flatEnough = true;
		for (const fwd of sinkForward) if (fwd.bend > delta) flatEnough = false;
		for (const bwd of sinkBackward) if (bwd.bend > delta) flatEnough = false;

		if (flatEnough) break;
	}
	return [sinkForward, sinkBackward];
}
function uniformSubdivide(arc, stops, sink) {
	for (; stops > 1; stops--) {
		const f = arc.subdivide(1 / stops);
		sink.push(f[0]), (arc = f[1]);
	}
	sink.push(arc);
}
