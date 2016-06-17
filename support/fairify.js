var Transform = require('./transform.js');

var ANGLES = 12;
var VERYCROWD = 2;
var SMALLANGLE = 0.05;
var SMALLANGLE_CLEANMORE = 0.075;
var CROWD = 4;
var LOOSE = 6;
var SMALL = 1e-4;
var CLOSE = 1;
function cross(z1, z2, z3) {
	return (z2.x - z1.x) * (z3.y - z1.y) - (z3.x - z1.x) * (z2.y - z1.y);
}
function dot(z1, z2, z3) {
	return (z2.x - z1.x) * (z3.x - z1.x) + (z3.y - z1.y) * (z2.y - z1.y);
}
function solveTS(a, b, c, out, flag) {
	var delta = b * b - 4 * a * c;
	if (delta > 0) {
		var t1 = (Math.sqrt(delta) - b) / (2 * a);
		var t2 = (-Math.sqrt(delta) - b) / (2 * a);
		if (flag) {
			if (t1 >= 0 && t1 <= 1) out.push(t1);
			if (t2 >= 0 && t2 <= 1) out.push(t2);
		} else {
			if (t1 > 0 && t1 < 1) out.push(t1);
			if (t2 > 0 && t2 < 1) out.push(t2);
		}
	} else if (delta === 0) {
		var t = -b / (2 * a);
		if (flag) {
			if (t >= 0 && t <= 1) out.push(t);
		} else {
			if (t > 0 && t < 1) out.push(t);
		}
	}
}
function findExtrema(z1, z2, z3, z4, out) {
	var a = 3 * (-z1.y + 3 * z2.y - 3 * z3.y + z4.y);
	var b = 6 * (z1.y - 2 * z2.y + z3.y);
	var c = 3 * (z2.y - z1.y);
	solveTS(a, b, c, out);
}
function findInflections(z1, z2, z3, z4, out) {
	var ax = z2.x - z1.x;
	var ay = z2.y - z1.y;
	var bx = z3.x - z2.x - ax;
	var by = z3.y - z2.y - ay;
	var cx = z4.x - z3.x - ax - 2 * bx;
	var cy = z4.y - z3.y - ay - 2 * by;
	solveTS(bx * cy - by * cx, ax * cy - ay * cx, ax * by - ay * bx, out, true);
}
function rotate(z, angle) {
	var c = Math.cos(angle),
		s = Math.sin(angle);
	return {
		x: c * z.x + s * z.y,
		y: -s * z.x + c * z.y
	};
}
function ASCEND(a, b) {
	return a - b;
}
function fineAllExtremae(z1, z2, z3, z4, angles) {
	var exs = [];
	findInflections(z1, z2, z3, z4, exs);
	for (var a = 0; a < angles; a += 1) {
		findExtrema(z1, z2, z3, z4, exs);
		z1 = rotate(z1, Math.PI / angles);
		z2 = rotate(z2, Math.PI / angles);
		z3 = rotate(z3, Math.PI / angles);
		z4 = rotate(z4, Math.PI / angles);
	}
	return exs.sort(ASCEND);
}
function mix(z1, z2, t) {
	return {
		x: (1 - t) * z1.x + t * z2.x,
		y: (1 - t) * z1.y + t * z2.y
	};
}
function bez2(z1, z2, z3, t) {
	return {
		x: (1 - t) * (1 - t) * z1.x + 2 * (1 - t) * t * z2.x + t * t * z3.x,
		y: (1 - t) * (1 - t) * z1.y + 2 * (1 - t) * t * z2.y + t * t * z3.y
	};
}
function bez3(z1, z2, z3, z4, t) {
	return {
		x: (1 - t) * (1 - t) * (1 - t) * z1.x
		+ 3 * t * (1 - t) * (1 - t) * z2.x
		+ 3 * t * t * (1 - t) * z3.x
		+ t * t * t * z4.x,
		y: (1 - t) * (1 - t) * (1 - t) * z1.y
		+ 3 * t * (1 - t) * (1 - t) * z2.y
		+ 3 * t * t * (1 - t) * z3.y
		+ t * t * t * z4.y
	};
}
function splitBefore(z1, z2, z3, z4, t) {
	return [z1, mix(z1, z2, t), bez2(z1, z2, z3, t), bez3(z1, z2, z3, z4, t)];
}
function splitAfter(z1, z2, z3, z4, t) {
	return [bez3(z1, z2, z3, z4, t), bez2(z2, z3, z4, t), mix(z3, z4, t), z4];
}
function splitAtExtremae(z1, z2, z3, z4, angles, splitpoints) {
	var ts = fineAllExtremae(z1, z2, z3, z4, angles);
	if (ts[0] < SMALL) {
		ts[0] = 0;
	} else {
		ts.unshift(0);
	}
	if (ts[ts.length - 1] > 1 - SMALL) {
		ts[ts.length - 1] = 1;
	} else {
		ts.push(1);
	}
	for (var k = 0; k < ts.length; k++) {
		if (k > 0) {
			var t1 = ts[k - 1];
			var t2 = ts[k];
			var bef = splitBefore(z1, z2, z3, z4, t2);
			var seg = splitAfter(bef[0], bef[1], bef[2], bef[3], t1 / t2);
			seg[1].onCurve = seg[2].onCurve = false;
			seg[1].cubic = seg[2].cubic = true;
			seg[3].onCurve = true;
			splitpoints.push(seg[1], seg[2], seg[3]);
		}
	}
}
function splitSegment(z1, z2, z3, z4, angles, splitpoints) {
	var ts = [];
	var inflectAtEnd = false;
	findInflections(z1, z2, z3, z4, ts);
	ts = ts.sort(ASCEND);
	if (ts[0] < SMALL) {
		ts[0] = 0;
		splitpoints[splitpoints.length - 1].inflect = true;
	} else {
		ts.unshift(0);
	}
	if (ts[ts.length - 1] > 1 - SMALL) {
		inflectAtEnd = true;
		ts[ts.length - 1] = 1;
	} else {
		ts.push(1);
	}
	for (var k = 0; k < ts.length; k++) {
		if (k > 0) {
			var t1 = ts[k - 1];
			var t2 = ts[k];
			var bef = splitBefore(z1, z2, z3, z4, t2);
			var seg = splitAfter(bef[0], bef[1], bef[2], bef[3], t1 / t2);
			splitAtExtremae(seg[0], seg[1], seg[2], seg[3], angles, splitpoints);
			if (t2 < 1 || inflectAtEnd)
				splitpoints[splitpoints.length - 1].inflect = true;
		}
	}
}
function fitpts(p1, c1, c2, p2) {
	var d1 = {
		x: c1.x - p1.x,
		y: c1.y - p1.y
	};
	var d2 = {
		x: c2.x - p2.x,
		y: c2.y - p2.y
	};

	var det = d2.x * d1.y - d2.y * d1.x;
	if (Math.abs(det) < 1e-6) return null;
	var u = ((p2.y - p1.y) * d2.x - (p2.x - p1.x) * d2.y) / det;
	var v = ((p2.y - p1.y) * d1.x - (p2.x - p1.x) * d1.y) / det;
	if (u <= 0 || v <= 0) return null;
	var mid = {
		x: p1.x + d1.x * u,
		y: p1.y + d1.y * u
	};
	return [mix(mid, p1, 1 / 3), mix(mid, p2, 1 / 3)];
}
function distance(z1, z2) {
	return Math.sqrt((z1.x - z2.x) * (z1.x - z2.x) + (z1.y - z2.y) * (z1.y - z2.y));
}
function veryclose(z1, z2) {
	return (z1.x - z2.x) * (z1.x - z2.x) + (z1.y - z2.y) * (z1.y - z2.y) <= SMALL;
}
function angleBetween(z1, z2, z3, z4) {
	return (Math.atan2(z2.y - z1.y, z2.x - z1.x) - Math.atan2(z4.y - z3.y, z4.x - z3.x)) % Math.PI;
}
function pldistance(z1, z2, z) {
	return Math.abs((z2.y - z1.y) * z.x - (z2.x - z1.x) * z.y + z2.x * z1.y - z2.y * z1.x) / Math.sqrt((z2.x - z1.x) * (z2.x - z1.x) + (z2.y - z1.y) * (z2.y - z1.y));
}
function estimateSegments(z1, z2) {
	var hspan = Math.abs(z1.x - z2.x);
	var vspan = Math.abs(z1.y - z2.y);
	return hspan <= 5 * CROWD || vspan <= 5 * CROWD ? VERYCROWD : hspan <= 10 * LOOSE || vspan <= 10 * LOOSE ? CROWD : LOOSE;
}
function enoughRotate(bef, z0, z1, z2, aft, cleanMore, flagl, flagr) {
	var angleRotatedBefore = Math.abs(angleBetween(bef.next || z1, bef, z1, z0));
	var angleRotatedAfter = Math.abs(angleBetween(aft.prev || z1, aft, z1, z2));
	var smallanglel = (cleanMore ? SMALLANGLE_CLEANMORE : SMALLANGLE) * (flagl && cleanMore ? 1 : 2);
	var smallangler = (cleanMore ? SMALLANGLE_CLEANMORE : SMALLANGLE) * (flagr && cleanMore ? 1 : 2);
	return !((angleRotatedBefore < smallanglel || angleRotatedBefore > Math.PI - smallanglel) && pldistance(z1, z0, bef) <= CLOSE && distance(z1, bef) <= 5 * CROWD
		|| (flagr ? false : (angleRotatedAfter < smallangler || angleRotatedAfter > Math.PI - smallangler) && pldistance(z1, z2, aft) <= CLOSE && distance(z1, aft) <= 5 * CROWD));
}
function fairify(scurve, gizmo, denseQ, cleanMore) {
	for (var j = 0; j < scurve.length; j++) {
		scurve[j] = Transform.untransform(gizmo, scurve[j]);
	}
	var splitpoints = [scurve[0]];
	var last = scurve[0];
	for (var j = 1; j < scurve.length; j++) {
		if (scurve[j].onCurve) {
			splitpoints.push(last = scurve[j]);
		} else if (scurve[j].cubic) {
			var z1 = last,
				z2 = scurve[j],
				z3 = scurve[j + 1],
				z4 = scurve[j + 2];
			if (!(veryclose(z1, z2) && veryclose(z2, z3) && veryclose(z3, z4))) {
				splitSegment(z1, z2, z3, z4, ANGLES, splitpoints);
				last = z4;
			}
			j += 2;
		} else {
			var z1 = last,
				zm = scurve[j],
				z4 = scurve[j + 1];
			if (!(veryclose(z1, zm) && veryclose(zm, z4))) {
				var z2 = mix(zm, z1, 1 / 3);
				var z3 = mix(zm, z4, 1 / 3);
				splitSegment(z1, z2, z3, z4, ANGLES, splitpoints);
				last = z4;
			}
			j += 1;
		}
	}
	// Mark corners and extremae
	for (var j = 1; j < splitpoints.length - 1; j++) {
		if (splitpoints[j].onCurve && !splitpoints[j - 1].onCurve) {
			splitpoints[j].prev = splitpoints[j - 1];
		}
		if (splitpoints[j].onCurve && !splitpoints[j + 1].onCurve) {
			splitpoints[j].next = splitpoints[j + 1];
		}
		if (splitpoints[j].onCurve && !splitpoints[j - 1].onCurve && !splitpoints[j + 1].onCurve) {
			var z1 = splitpoints[j],
				z0 = splitpoints[j - 1],
				z2 = splitpoints[j + 1];
			if (cross(z1, z0, z2) < 1e-6 && dot(z1, z0, z2) < 0) {
				var angle0 = Math.atan2(z2.y - z0.y, z2.x - z0.x);
				var angle = Math.abs(angle0 / Math.PI * 2 % 1);
				if (Math.abs(Math.abs(angle0) - Math.PI / 2) <= SMALL || angle <= SMALL || angle >= 1 - SMALL) {
					z1.mark = true; // extrema
					z1.inflect = false;
				} else {
					var isInflection = false;
					if (j > 2 && j < splitpoints.length - 2) {
						var za = bez3(z1, z0, splitpoints[j - 2], splitpoints[j - 3], SMALL);
						var zb = bez3(z1, z2, splitpoints[j + 2], splitpoints[j + 3], SMALL);
						var inflect = ((z0.y - z2.y) * (za.x - z0.x) + (z2.x - z0.x) * (za.y - z0.y))
							* ((z0.y - z2.y) * (zb.x - z0.x) + (z2.x - z0.x) * (zb.y - z0.y));
						if (inflect < 0)
							isInflection = true;
					}
					if (z1.inflect || isInflection) {
						z1.mark = true;
						z1.asinflect = true;
					}
				}
			} else {
				z1.mark = true; // also corner
			}
		} else if (splitpoints[j].onCurve) {
			splitpoints[j].mark = true; // corner
		}
	}
	splitpoints[0].mark = splitpoints[splitpoints.length - 1].mark = true;
	// Mark cleanup inflections
	for (var pass = 0; pass < 2; pass++) {
		for (var j = 1; j < splitpoints.length - 1; j++) {
			if (splitpoints[j].mark) {
				for (var k = j - 1; k >= 0 && !splitpoints[k].mark; k--)
					lastmark = splitpoints[k];
				for (var k = j + 1; k < splitpoints.length && !splitpoints[k].mark; k++)
					nextmark = splitpoints[k];
			}
			if (splitpoints[j].mark && splitpoints[j].asinflect) {
				var z1 = splitpoints[j],
					z0 = splitpoints[j - 1],
					z2 = splitpoints[j + 1];
				if (!(denseQ || enoughRotate(lastmark, z0, z1, z2, nextmark, cleanMore, lastmark.asinflect, nextmark.asinflect))) {
					//z1.mark = false;
					z0.remove = z1.remove = z2.remove = true;
				}
			}
		}
		for (var j = 0; j < splitpoints.length; j++) if (splitpoints[j].remove)
			splitpoints[j].mark = false;
	}
	// Mark diagonals
	var lastmark = splitpoints[0];
	for (var k = 1; k < splitpoints.length && !splitpoints[k].mark; k++)
		var nextmark = splitpoints[k];
	var segments = estimateSegments(lastmark, nextmark);
	for (var j = 1; j < splitpoints.length - 1; j++) {
		if (splitpoints[j].mark) {
			lastmark = splitpoints[j];
			for (var k = j + 1; k < splitpoints.length && !splitpoints[k].mark; k++)
				nextmark = splitpoints[k];
			segments = estimateSegments(lastmark, nextmark);
		}
		if (splitpoints[j].onCurve && !splitpoints[j].mark) {
			var z1 = splitpoints[j],
				z0 = splitpoints[j - 1],
				z2 = splitpoints[j + 1];
			var angle0 = Math.atan2(z2.y - z0.y, z2.x - z0.x);
			var angle = Math.abs(angle0 / Math.PI * segments % 1);
			var angleRotatedBefore = Math.abs(angleBetween(z1, lastmark, z1, z0));
			var angleRotatedAfter = Math.abs(angleBetween(z1, nextmark, z1, z2));
			if (!(Math.abs(Math.abs(angle0) - Math.PI / 2) <= SMALL || angle <= SMALL || angle >= 1 - SMALL)
				|| !(denseQ || enoughRotate(lastmark, z0, z1, z2, nextmark))) {
				z1.remove = z0.remove = z2.remove = true;
			}
		}
	}
	// Rebuild curve
	for (var j = 0; j < splitpoints.length; j++) if (splitpoints[j].onCurve && !splitpoints[j].remove && splitpoints[j + 1] && !splitpoints[j + 1].onCurve) {
		for (var k = j + 2; k < splitpoints.length && splitpoints[k].remove; k++)
			if (k - j > 2) {
				var zs = fitpts(splitpoints[j], splitpoints[j + 1], splitpoints[k], splitpoints[k + 1]);
				if (zs) {
					zs[0].onCurve = zs[1].onCurve = false;
					zs[0].cubic = zs[1].cubic = true;
					splitpoints[j + 1] = zs[0];
					splitpoints[k] = zs[1];
				}
			}
		j = k;
	}
	var ans = [];
	for (var j = 0; j < splitpoints.length; j++)
		if (splitpoints[j] && !splitpoints[j].remove) {
			ans.push(Transform.transformPoint(gizmo, splitpoints[j]));
		}
	return ans;
}
module.exports = fairify;