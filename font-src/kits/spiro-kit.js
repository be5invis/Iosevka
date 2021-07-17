"use strict";

const CurveUtil = require("../support/geometry/curve-util");
const { BiKnotCollector } = require("../support/geometry/spiro-expand");
const { fallback, mix, bez3 } = require("../support/utils");
const { SpiroGeometry, DiSpiroGeometry } = require("../support/geometry/index");

exports.SetupBuilders = function (bindings) {
	const { Contrast, GlobalTransform, Stroke, Superness } = bindings;
	const g4 = (x, y, f) => ({ x, y, type: "g4", af: f });
	const g2 = (x, y, f) => ({ x, y, type: "g2", af: f });
	const corner = (x, y, f) => ({ x, y, type: "corner", af: f });
	const flat = (x, y, f) => ({ x, y, type: "left", af: f });
	const curl = (x, y, f) => ({ x, y, type: "right", af: f });
	const close = f => ({ type: "close", af: f });
	const end = f => ({ type: "end", af: f });

	const straight = { l: flat, r: curl };
	{
		let directions = [
			{ name: "up", x: 0, y: 1 },
			{ name: "down", x: 0, y: -1 },
			{ name: "left", x: -1, y: 0 },
			{ name: "right", x: 1, y: 0 }
		];
		let adhesions = [
			{ name: "start", l: 0, r: 0.01 },
			{ name: "mid", l: -0.005, r: 0.005 },
			{ name: "end", l: -0.01, r: 0 }
		];
		let knotTypes = [
			[g4, g4, g4],
			[g2, g2, g2],
			[corner, corner, corner],
			[straight, flat, curl]
		];
		for (const [sink, kl, kr] of knotTypes) {
			for (const d of directions) {
				sink[d.name] = {};
				for (const a of adhesions) {
					sink[d.name][a.name] = (x, y, af) => [
						kl(x + d.x * a.l, y + d.y * a.l, af),
						kr(x + d.x * a.r, y + d.y * a.r, af)
					];
				}
			}
		}
	}

	function widths(l, r) {
		return function () {
			return this.setWidth ? this.setWidth(l, r) : void 0;
		};
	}
	widths.lhs = function (w) {
		return widths(fallback(w, Stroke), 0);
	};
	widths.rhs = function (w) {
		return widths(0, fallback(w, Stroke));
	};
	widths.center = function (w) {
		return widths(fallback(w, Stroke) / 2, fallback(w, Stroke) / 2);
	};

	function heading(d) {
		return function () {
			return this.headsTo ? this.headsTo(d) : void 0;
		};
	}
	widths.heading = function (l, r, d) {
		return function () {
			if (this.setWidth) this.setWidth(l, r);
			return this.headsTo ? this.headsTo(d) : void 0;
		};
	};
	widths.lhs.heading = function (w, d) {
		return function () {
			if (this.setWidth) this.setWidth(fallback(w, Stroke), 0);
			return this.headsTo ? this.headsTo(d) : void 0;
		};
	};
	widths.rhs.heading = function (w, d) {
		return function () {
			if (this.setWidth) this.setWidth(0, fallback(w, Stroke));
			return this.headsTo ? this.headsTo(d) : void 0;
		};
	};
	widths.center.heading = function (w, d) {
		return function () {
			if (this.setWidth) this.setWidth(fallback(w, Stroke) / 2, fallback(w, Stroke) / 2);
			return this.headsTo ? this.headsTo(d) : void 0;
		};
	};

	function disableContrast() {
		return function () {
			return (this.contrast = 1);
		};
	}
	function unimportant() {
		return this.setUnimportant ? this.setUnimportant() : void 0;
	}
	function important() {
		return void 0;
	}
	function afInterpolate(before, after, args) {
		return g4(
			mix(before.x, after.x, args.rx),
			mix(before.y, after.y, args.ry),
			fallback(args.raf, unimportant)
		);
	}
	function afInterpolateG2(before, after, args) {
		return g2(
			mix(before.x, after.x, args.rx),
			mix(before.y, after.y, args.ry),
			fallback(args.raf, unimportant)
		);
	}
	function afInterpolateThem(before, after, args) {
		let innerKnots = [];
		for (const [rx, ry, rt] of args.rs) {
			innerKnots.push(
				fallback(args.ty, g2)(
					mix(before.x, after.x, rx),
					mix(before.y, after.y, ry),
					args.raf && args.raf.blend && rt !== void 0
						? args.raf.blend(rt)
						: args.raf
						? args.raf
						: unimportant
				)
			);
		}
		return innerKnots;
	}
	function alsoThru(rx, ry, raf) {
		return { type: "interpolate", rx, ry, raf, blender: afInterpolate };
	}
	alsoThru.g2 = function (rx, ry, raf) {
		return { type: "interpolate", rx, ry, raf, blender: afInterpolateG2 };
	};
	function alsoThruThem(es, raf, ty) {
		return { type: "interpolate", rs: es, raf, ty, blender: afInterpolateThem };
	}
	function bezControlsImpl(x1, y1, x2, y2, samples, raf, ty) {
		let rs = [];
		for (let j = 1; j < samples; j = j + 1)
			rs.push([
				bez3(0, x1, x2, 1, j / samples),
				bez3(0, y1, y2, 1, j / samples),
				j / samples
			]);
		return alsoThruThem(rs, raf);
	}
	function bezControls(x1, y1, x2, y2, _samples, raf) {
		return bezControlsImpl(x1, y1, x2, y2, fallback(_samples, 3), raf);
	}
	function quadControls(x1, y1, _samples, raf) {
		return bezControlsImpl(
			(x1 * 2) / 3,
			(y1 * 2) / 3,
			mix(1, x1, 2 / 3),
			mix(1, y1, 2 / 3),
			fallback(_samples, 3),
			raf
		);
	}

	let DEFAULT_STEPS = 6;

	let [buildHV, buildVH] = (function (cache) {
		function build(samples, _superness) {
			const superness = fallback(_superness, Superness);
			let hv = [];
			let vh = [];
			for (let j = 1; j < samples; j = j + 1) {
				const theta = (((j + 1) / (samples + 2)) * Math.PI) / 2;
				const c = Math.pow(Math.cos(theta), 2 / superness);
				const s = Math.pow(Math.sin(theta), 2 / superness);
				hv.push([s, 1 - c]);
				vh.push([1 - c, s]);
			}
			return { hv, vh: vh };
		}
		function buildHVImpl(samples, _superness) {
			if (_superness) return build(samples, _superness).hv;
			if (!cache[samples]) cache[samples] = build(samples, _superness);
			return cache[samples].hv;
		}
		function buildVHImpl(samples, _superness) {
			if (_superness) return build(samples, _superness).vh;
			if (!cache[samples]) cache[samples] = build(samples, _superness);
			return cache[samples].vh;
		}
		return [buildHVImpl, buildVHImpl];
	})([]);

	function archv(samples, superness) {
		return alsoThruThem(buildHV(fallback(samples, DEFAULT_STEPS), superness));
	}
	archv.superness = function (s) {
		return archv(DEFAULT_STEPS, s);
	};
	function arcvh(samples, superness) {
		return alsoThruThem(buildVH(fallback(samples, DEFAULT_STEPS), superness));
	}
	arcvh.superness = function (s) {
		return arcvh(DEFAULT_STEPS, s);
	};
	function flattenImpl(sink, knots) {
		for (const p of knots) {
			if (p instanceof Array) flattenImpl(sink, p);
			else sink.push(p);
		}
	}
	function nCyclic(p, n) {
		return (p + n + n) % n;
	}
	function flatten(s, knots0) {
		let knots = [];
		flattenImpl(knots, knots0);
		let unwrapped = false;
		for (let j = 0; j < knots.length; j = j + 1)
			if (knots[j] && knots[j].type === "interpolate") {
				const kBefore = knots[nCyclic(j - 1, knots.length)];
				const kAfter = knots[nCyclic(j + 1, knots.length)];
				knots[j] = knots[j].blender(kBefore, kAfter, knots[j]);
				unwrapped = true;
			}
		if (unwrapped) return flatten(s, knots);
		return knots;
	}
	function dropTailKnot(knots) {
		let last = knots[knots.length - 1];
		if (last && (last.type === "close" || last.type === "end")) {
			knots.length = knots.length - 1;
			return last.type === "close";
		} else {
			return false;
		}
	}
	function prepareSpiroKnots(_knots, s) {
		let knots = _knots;
		while (knots[0] && knots[0] instanceof Function) {
			knots[0].call(s);
			knots.splice(0, 1);
		}
		const closed = dropTailKnot(knots);
		knots = flatten(s, knots);
		return { knots, closed };
	}

	class DiSpiroProxy {
		constructor(closed, collector, origKnots) {
			this.geometry = new DiSpiroGeometry(
				collector.gizmo,
				collector.contrast,
				closed,
				collector.controlKnots
			);
			this.m_origKnots = origKnots;
		}

		get knots() {
			return this.m_origKnots;
		}
		get lhsKnots() {
			return this.geometry.expand().lhs;
		}
		get rhsKnots() {
			return this.geometry.expand().rhs;
		}
	}

	function dispiro(...args) {
		return function () {
			const gizmo = this.gizmo || GlobalTransform;
			const collector = new BiKnotCollector(gizmo, Contrast);
			const { knots, closed } = prepareSpiroKnots([].slice.call(args, 0), collector);
			for (const knot of knots) {
				collector.pushKnot(knot.type, knot.x, knot.y);
				if (knot.af) knot.af.call(collector);
			}

			const dsp = new DiSpiroProxy(closed, collector, knots);
			this.includeGeometry(dsp.geometry);
			return dsp;
		};
	}

	function spiroOutline(...args) {
		return function () {
			const gizmo = this.gizmo || GlobalTransform;
			const g = new CurveUtil.BezToContoursSink(gizmo);
			const { knots, closed } = prepareSpiroKnots(args, g);
			return this.includeGeometry(new SpiroGeometry(gizmo, closed, knots));
		};
	}
	return {
		g4,
		g2,
		corner,
		flat,
		curl,
		close,
		end,
		straight,
		widths,
		heading,
		"disable-contrast": disableContrast,
		unimportant,
		important,
		alsoThru,
		alsoThruThem,
		bezControls,
		quadControls,
		archv,
		arcvh,
		dispiro,
		"spiro-outline": spiroOutline
	};
};
