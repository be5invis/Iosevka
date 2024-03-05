import * as SpiroJs from "spiro";

import * as CurveUtil from "./curve-util.mjs";

export function spiroToOutline(knots, fClosed, gizmo) {
	const s = new CurveUtil.BezToContoursSink(gizmo);
	SpiroJs.spiroToBezierOnContext(knots, fClosed, s, CurveUtil.GEOMETRY_PRECISION);
	return s.contours;
}
