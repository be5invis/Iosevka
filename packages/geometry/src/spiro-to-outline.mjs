import * as SpiroJs from "spiro";
import * as TypoGeom from "typo-geom";

import * as CurveUtil from "./curve-util.mjs";
import { Vec2 } from "./point.mjs";

export function spiroToOutline(knots, fClosed, gizmo) {
	const s = new CurveUtil.BezToContoursSink(gizmo);
	SpiroJs.spiroToBezierOnContext(knots, fClosed, s, CurveUtil.GEOMETRY_PRECISION);
	return s.contours;
}

export function spiroToOutlineWithSimplification(knots, fClosed, gizmo) {
	const simplifier = new SpiroSimplifier(knots);
	SpiroJs.spiroToArcsOnContext(knots, fClosed, simplifier);
	const sink = new CurveUtil.BezToContoursSink(gizmo);
	TypoGeom.ShapeConv.transferGenericShapeAsBezier(
		[simplifier.combinedArcs],
		sink,
		CurveUtil.OCCURRENT_PRECISION,
	);
	return sink.contours;
}

class SpiroSimplifier {
	constructor(knots) {
		this.m_knots = knots;
		this.m_ongoingArcs = [];
		this.m_nKnotsProcessed = 0;

		this.combinedArcs = [];
	}
	beginShape() {}
	endShape() {
		this.flushArcs();
	}
	moveTo(x, y) {
		this.m_nKnotsProcessed += 1;
	}
	arcTo(arc) {
		this.m_ongoingArcs.push(arc);
		if (
			this.m_knots[this.m_nKnotsProcessed] &&
			!this.m_knots[this.m_nKnotsProcessed].unimportant
		) {
			this.flushArcs();
		}
		this.m_nKnotsProcessed += 1;
	}
	flushArcs() {
		if (!this.m_ongoingArcs.length) return;
		if (this.m_ongoingArcs.length === 1) {
			const arc = this.m_ongoingArcs[0];
			if (arc.arcLength > 1e-6) this.combinedArcs.push(arc);
		} else {
			const combined = new SpiroSequenceArc(this.m_ongoingArcs);
			if (combined.totalLength > 1e-6) this.combinedArcs.push(combined);
		}
		this.m_ongoingArcs = [];
	}
}

class SpiroSequenceArc {
	constructor(segments) {
		// Filter out zero-length segments
		let rear = 0;
		for (let j = 0; j < segments.length; j++) {
			if (segments[j].arcLength > 1e-6) {
				segments[rear++] = segments[j];
			}
		}
		segments.length = rear;

		// Compute total length and stops
		let totalLength = 0;
		let stops = [];
		for (let j = 0; j < segments.length; j++) {
			stops[j] = totalLength;
			totalLength += segments[j].arcLength;
		}
		for (let j = 0; j < segments.length; j++) {
			stops[j] = stops[j] / totalLength;
		}
		this.totalLength = totalLength;
		this.m_segments = segments;
		this.m_stops = stops;
	}

	eval(t) {
		const j = segTSearch(this.m_stops, t);
		const tBefore = this.m_stops[j];
		const tNext = j < this.m_stops.length - 1 ? this.m_stops[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return this.m_segments[j].eval(tRelative);
	}

	derivative(t) {
		const j = segTSearch(this.m_stops, t);
		const tBefore = this.m_stops[j];
		const tNext = j < this.m_stops.length - 1 ? this.m_stops[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return Vec2.scaleFrom(1 / (tNext - tBefore), this.m_segments[j].derivative(tRelative));
	}
}

function segTSearch(stops, t) {
	if (t < 0) return 0;
	let l = 0,
		r = stops.length;
	while (l < r) {
		let m = (l + r) >>> 1;
		if (stops[m] > t) r = m;
		else l = m + 1;
	}
	return r - 1;
}
