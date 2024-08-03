import * as SpiroJs from "spiro";
import * as TypoGeom from "typo-geom";

import * as CurveUtil from "./curve-util.mjs";

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

///////////////////////////////////////////////////////////////////////////////////////////////////

export class MonoKnot {
	constructor(type, unimportant, x, y) {
		this.type = type;
		this.unimportant = unimportant;
		this.x = x;
		this.y = y;
	}
	clone() {
		return new MonoKnot(this.type, this.unimportant, this.x, this.y);
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
			if (!combined.isEmpty() && combined.totalLength > 1e-6) {
				this.combinedArcs.push(combined);
			}
		}
		this.m_ongoingArcs = [];
	}
}

const SpiroMeasurer = {
	measureLength(a) {
		return a.arcLength;
	},
};
class SpiroSequenceArc extends TypoGeom.Arcs.CombinedArc {
	constructor(segments) {
		super(SpiroMeasurer, segments);
	}
}
