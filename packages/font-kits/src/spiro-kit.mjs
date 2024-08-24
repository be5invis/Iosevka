import { DiSpiroGeometry, SpiroGeometry } from "@iosevka/geometry";
import {
	AfBase,
	InterpolatorBase,
	SpiroFlattener,
	TerminateInstruction,
	UserCloseKnotPair,
	UserControlKnot,
	VirtualControlKnot,
} from "@iosevka/geometry/spiro-control";
import { bez3, fallback, mix } from "@iosevka/util";
import { BiKnotCollector } from "../../geometry/src/spiro-expand.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////

class SpiroImplBase {
	constructor(bindings, controls) {
		this.bindings = bindings;
		this.controls = controls;
	}

	collectTo(collector) {
		const flattener = new SpiroFlattener();
		for (const control of this.controls) flattener.add(control);
		flattener.flatten();
		flattener.pipe(collector);
	}
}

class DispiroImpl extends SpiroImplBase {
	constructor(bindings, controls) {
		super(bindings, controls);
	}
	applyToGlyph(glyph) {
		const gizmo = glyph.gizmo || this.bindings.GlobalTransform;
		const collector = new BiKnotCollector(this.bindings.Contrast);
		this.collectTo(collector);
		const dsp = new DiSpiroProxy(gizmo, collector);
		glyph.includeGeometry(dsp.geometry);
		return dsp;
	}
}

class SpiroOutlineImpl extends SpiroImplBase {
	constructor(bindings, controls) {
		super(bindings, controls);
	}
	applyToGlyph(glyph) {
		const gizmo = glyph.gizmo || this.bindings.GlobalTransform;
		const collector = new BiKnotCollector(this.bindings.Contrast);
		this.collectTo(collector);
		return glyph.includeGeometry(
			new SpiroGeometry(gizmo, collector.closed, collector.getMonoKnots()),
		);
	}
}

class DiSpiroProxy {
	constructor(gizmo, collector) {
		this.geometry = new DiSpiroGeometry(
			gizmo,
			collector.contrast,
			collector.closed,
			collector.knots,
		);
		this.m_origKnots = collector.knots;
	}
	get knots() {
		return this.m_origKnots;
	}
	get lhsKnots() {
		return this.geometry.expand().lhsUntransformed;
	}
	get rhsKnots() {
		return this.geometry.expand().rhsUntransformed;
	}
}

/// The builder for directed knot pairs
function KnotType(type) {
	return (x, y, f) => {
		if (!UserControlKnot.isCoordinateValid(x)) throw new TypeError("NaN detected for X");
		if (!UserControlKnot.isCoordinateValid(y)) throw new TypeError("NaN detected for Y");
		return new UserControlKnot(type, x, y, f);
	};
}

function virtualKnot(x, y, f) {
	if (!UserControlKnot.isCoordinateValid(x)) throw new TypeError("NaN detected for X");
	if (!UserControlKnot.isCoordinateValid(y)) throw new TypeError("NaN detected for Y");
	return new VirtualControlKnot(x, y, f);
}

/// The builder for directed knot pairs
class DirectedKnotPairBuilder {
	constructor(bindings, kPre, kCenter, kPost, deltaX, deltaY) {
		const { TINY } = bindings;
		this.start = DirPairImpl(kPre, kCenter, kPost, deltaX, deltaY, 0, TINY);
		this.mid = DirPairImpl(kPre, kCenter, kPost, deltaX, deltaY, -0.5 * TINY, 0.5 * TINY);
		this.end = DirPairImpl(kPre, kCenter, kPost, deltaX, deltaY, -TINY, 0);
	}
}

function DirPairImpl(kPre, kCenter, kPost, dirX, dirY, dPre, dPost) {
	let tyPre = kPre(0, 0).type;
	let tyPost = kPost(0, 0).type;
	return (x, y, af) =>
		new UserCloseKnotPair(kCenter(x, y, af), tyPre, tyPost, dirX, dirY, dPre, dPost);
}

export function SetupBuilders(bindings) {
	const { Stroke, Superness } = bindings;

	// Simple knot types
	const g4 = KnotType("g4");
	const g2 = KnotType("g2");
	const corner = KnotType("corner");
	const flat = KnotType("left");
	const curl = KnotType("right");
	const virt = virtualKnot;
	const close = f => new TerminateInstruction("close", f);
	const end = f => new TerminateInstruction("end", f);

	// Pair knots
	const straight = { l: flat, r: curl };
	const g2c = { l: g2, r: corner };
	const cg2 = { l: corner, r: g2 };
	const flatc = { l: flat, r: corner };
	const ccurl = { l: corner, r: curl };

	// Add the directed/heading knot builders
	{
		// prettier-ignore
		let knotTypes = [
			[ g4,       g4,     g4,     g4     ],
			[ g2,       g2,     g2,     g2     ],
			[ corner,   corner, corner, corner ],
			[ straight, flat,   g2,     curl   ],
			[ g2c,      g2,     corner, corner ],
			[ cg2,      corner, corner, g2     ],
			[ flatc,    flat,   corner, corner ],
			[ ccurl,    corner, corner, curl   ],
		];
		let directions = [
			// Straights
			{ name: "up", x: 0, y: 1 },
			{ name: "down", x: 0, y: -1 },
			{ name: "left", x: -1, y: 0 },
			{ name: "right", x: 1, y: 0 },
			{ name: "u", x: 0, y: 1 },
			{ name: "d", x: 0, y: -1 },
			{ name: "l", x: -1, y: 0 },
			{ name: "r", x: 1, y: 0 },

			// Diagonals
			{ name: "ru", x: 1, y: 1 },
			{ name: "rd", x: 1, y: -1 },
			{ name: "lu", x: -1, y: 1 },
			{ name: "ld", x: -1, y: -1 },
		];
		for (const [sink, kl, kc, kr] of knotTypes) {
			sink.sl = s => new DirectedKnotPairBuilder(bindings, kl, kc, kr, -1, -s);
			sink.sr = s => new DirectedKnotPairBuilder(bindings, kl, kc, kr, 1, s);
			sink.dir = (dx, dy) => new DirectedKnotPairBuilder(bindings, kl, kc, kr, dx, dy);
			for (const d of directions) {
				sink[d.name] = new DirectedKnotPairBuilder(bindings, kl, kc, kr, d.x, d.y);
			}
		}
	}

	class AfSetWidths extends AfBase {
		constructor(l, r) {
			super();
			this.l = l;
			this.r = r;
		}
		applyTo(target) {
			target.setWidth(this.l, this.r);
		}
	}

	function widths(l, r) {
		if (!isFinite(l)) throw new TypeError("NaN detected for left width");
		if (!isFinite(r)) throw new TypeError("NaN detected for right width");
		return new AfSetWidths(l, r);
	}
	widths.lhs = function (w) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		return widths(w, 0);
	};
	widths.rhs = function (w) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		return widths(0, w);
	};
	widths.center = function (w) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		return widths(w / 2, w / 2);
	};

	class AfHeading extends AfBase {
		constructor(d) {
			super();
			this.d = d;
		}
		applyTo(target) {
			target.headsTo(this.d);
		}
	}
	function heading(d) {
		if (!isFinite(d.x) || !isFinite(d.y))
			throw new TypeError("NaN detected for heading directions");
		return new AfHeading(d);
	}

	class AfWidthsHeading extends AfBase {
		constructor(l, r, d) {
			super();
			this.l = l;
			this.r = r;
			this.d = d;
		}
		applyTo(target) {
			target.setWidth(this.l, this.r);
			target.headsTo(this.d);
		}
	}

	widths.heading = function (l, r, d) {
		if (!isFinite(l)) throw new TypeError("NaN detected for left width");
		if (!isFinite(r)) throw new TypeError("NaN detected for left width");
		if (!isFinite(d.x) || !isFinite(d.y))
			throw new TypeError("NaN detected for heading directions");
		return new AfWidthsHeading(l, r, d);
	};
	widths.lhs.heading = function (w, d) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		if (!isFinite(d.x) || !isFinite(d.y))
			throw new TypeError("NaN detected for heading directions");
		return new AfWidthsHeading(w, 0, d);
	};
	widths.rhs.heading = function (w, d) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		if (!isFinite(d.x) || !isFinite(d.y))
			throw new TypeError("NaN detected for heading directions");
		return new AfWidthsHeading(0, w, d);
	};
	widths.center.heading = function (w, d) {
		w = fallback(w, Stroke);
		if (!isFinite(w)) throw new TypeError("NaN detected for left width");
		if (!isFinite(d.x) || !isFinite(d.y))
			throw new TypeError("NaN detected for heading directions");
		return new AfWidthsHeading(w / 2, w / 2, d);
	};

	class AfDisableContrast extends AfBase {
		applyTo(target) {
			target.setContrast(1);
		}
	}
	function disableContrast() {
		return new AfDisableContrast();
	}

	class AfUnimportant extends AfBase {
		applyTo(target) {
			target.setUnimportant();
		}
	}
	const unimportant = new AfUnimportant();

	class AfImportant extends AfBase {
		applyTo(target) {
			target.setImportant();
		}
	}
	const important = new AfImportant();

	/// Simple (single mix) interpolator
	class SimpleMixInterpolator extends InterpolatorBase {
		constructor(ty, rx, ry, deltaX, deltaY, raf) {
			super();
			this.ty = ty;
			this.rx = rx;
			this.ry = ry;
			this.deltaX = deltaX;
			this.deltaY = deltaY;
			this.raf = fallback(raf, unimportant);
		}
		resolveInterpolation(before, after) {
			return this.ty(
				mix(before.x, after.x, this.rx) + this.deltaX,
				mix(before.y, after.y, this.ry) + this.deltaY,
				this.raf,
			);
		}
	}

	function alsoThru(rx, ry, raf) {
		return new SimpleMixInterpolator(g4, rx, ry, 0, 0, raf);
	}
	alsoThru.withOffset = function (rx, ry, deltaX, deltaY, raf) {
		return new SimpleMixInterpolator(g4, rx, ry, deltaX, deltaY, raf);
	};
	alsoThru.g2 = function (rx, ry, raf) {
		return new SimpleMixInterpolator(g2, rx, ry, 0, 0, raf);
	};

	/// Multi-mix interpolator
	class MultiMixInterpolator extends InterpolatorBase {
		constructor(rs, raf, ty) {
			super();
			this.rs = rs;
			this.raf = raf;
			this.ty = fallback(ty, g2);
		}
		resolveInterpolation(before, after) {
			let innerKnots = [];
			for (const [rx, ry, rt] of this.rs) {
				const x = mix(before.x, after.x, rx);
				const y = mix(before.y, after.y, ry);
				const af =
					this.raf && this.raf.blend && rt !== void 0
						? this.raf.blend(rt)
						: this.raf
							? this.raf
							: unimportant;
				innerKnots.push(this.ty(x, y, af));
			}
			return innerKnots;
		}
	}
	function alsoThruThem(rs, raf, ty) {
		return new MultiMixInterpolator(rs, raf, ty);
	}

	/// Multi-mix interpolator that use function set to compute proportion/deltas
	class MultiMixComputeInterpolator extends InterpolatorBase {
		constructor(rs, raf, ty) {
			super();
			this.rs = rs;
			this.raf = raf;
			this.ty = fallback(ty, g2);
		}
		resolveInterpolation(before, after) {
			let innerKnots = [];
			for (const rt of this.rs) {
				innerKnots.push(
					this.ty(
						mix(before.x, after.x, this.raf.rx(rt)) + this.raf.deltaX(rt),
						mix(before.y, after.y, this.raf.ry(rt)) + this.raf.deltaY(rt),
						this.raf.modifier(rt),
					),
				);
			}
			return innerKnots;
		}
	}
	alsoThruThem.computed = function (rs, raf, ty) {
		return new MultiMixComputeInterpolator(rs, raf, ty);
	};

	// Bezier control interpolator

	function bezControlsImpl(x1, y1, x2, y2, samples, raf, ty) {
		let rs = [];
		for (let j = 1; j < samples; j = j + 1)
			rs.push([
				bez3(0, x1, x2, 1, j / samples),
				bez3(0, y1, y2, 1, j / samples),
				j / samples,
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
			raf,
		);
	}

	// ArcHV and ArcVH interpolators
	class ArcHvInterpolator extends InterpolatorBase {
		constructor(steps, superness) {
			super();
			this.steps = steps;
			this.superness = superness;
		}
		resolveInterpolation(before, after) {
			let innerKnots = [];
			for (let j = 1; j < this.steps; j++) {
				const theta = (((j + 1) / (this.steps + 2)) * Math.PI) / 2;
				const c = Math.pow(Math.cos(theta), 2 / this.superness);
				const s = Math.pow(Math.sin(theta), 2 / this.superness);
				const x = mix(before.x, after.x, s);
				const y = mix(before.y, after.y, 1 - c);
				innerKnots.push(g2(x, y, unimportant));
			}
			return innerKnots;
		}
	}
	class ArcVhInterpolator extends InterpolatorBase {
		constructor(steps, superness) {
			super();
			this.steps = steps;
			this.superness = superness;
		}
		resolveInterpolation(before, after) {
			let innerKnots = [];
			for (let j = 1; j < this.steps; j++) {
				const theta = (((j + 1) / (this.steps + 2)) * Math.PI) / 2;
				const c = Math.pow(Math.cos(theta), 2 / this.superness);
				const s = Math.pow(Math.sin(theta), 2 / this.superness);
				const x = mix(before.x, after.x, 1 - c);
				const y = mix(before.y, after.y, s);
				innerKnots.push(g2(x, y, unimportant));
			}
			return innerKnots;
		}
	}

	let DEFAULT_STEPS = 6;
	function archv(samples, superness) {
		return new ArcHvInterpolator(
			fallback(samples, DEFAULT_STEPS),
			fallback(superness, Superness),
		);
	}
	archv.superness = function (s) {
		return new ArcHvInterpolator(DEFAULT_STEPS, s);
	};
	function arcvh(samples, superness) {
		return new ArcVhInterpolator(
			fallback(samples, DEFAULT_STEPS),
			fallback(superness, Superness),
		);
	}
	arcvh.superness = function (s) {
		return new ArcVhInterpolator(DEFAULT_STEPS, s);
	};
	archv.yFromX = function (px, _s) {
		const s = fallback(_s, Superness);
		return 1 - Math.pow(1 - Math.pow(px, s), 1 / s);
	};
	archv.sCos = function (angle, _s) {
		return Math.pow(Math.cos((angle / 180) * Math.PI), 2 / fallback(_s, Superness));
	};
	archv.sSin = function (angle, _s) {
		return Math.pow(Math.sin((angle / 180) * Math.PI), 2 / fallback(_s, Superness));
	};

	function dispiro(...controls) {
		return new DispiroImpl(bindings, controls);
	}
	function spiroOutline(...controls) {
		return new SpiroOutlineImpl(bindings, controls);
	}
	function spiroCollect(collector, ...controls) {
		const spb = new SpiroImplBase(bindings, controls);
		return spb.collectTo(collector);
	}

	return {
		g4,
		g2,
		corner,
		flat,
		curl,
		virt,
		close,
		end,
		straight,
		g2c,
		cg2,
		flatc,
		ccurl,
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
		"spiro-outline": spiroOutline,
		"spiro-collect": spiroCollect,
	};
}
