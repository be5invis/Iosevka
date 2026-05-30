import { Anchor } from "@iosevka/geometry/anchor";
import { Box } from "@iosevka/geometry/box";
import { mix } from "@iosevka/util";

export function SetupBuilders(bindings) {
	const F = (_adws, _hPack, _sbMul, _mvs, _ox) =>
		new DivFrame(bindings, _adws, _hPack, _sbMul, _mvs, _ox);

	F.fromParams = params =>
		new DivFrame(bindings, params.adws, params.hPack, params.sbMul, params.mvs, params.ox);

	return F;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
////// Div Frame

class DivFrame {
	constructor(bindings, _adws, _hPack, _sbMul, _mvs, _ox) {
		const ox = _ox ?? 0;
		const adws = _adws ?? 1;
		const hPack = Math.max(1, _hPack ?? 0);
		const mvs = _mvs ?? (_hPack ? bindings.AdviceStroke(_hPack, adws) : bindings.Stroke);
		const sbMul =
			_sbMul ??
			Math.min(1, (bindings.Width * adws - hPack * mvs) / (2 * hPack * bindings.SB));

		this.bindings = bindings;
		this.params = { adws, hPack, sbMul, mvs, ox };
		this.adws = adws;
		this.hPack = hPack;
		this.width = bindings.Width * adws;
		this.middle = 0.5 * this.width;
		this.sb = sbMul * bindings.SB;
		this.leftSB = this.sb;
		this.rightSB = this.width - this.sb;
		this.mvs = mvs;
		this.shoulderFine = (bindings.ShoulderFine * mvs) / bindings.Stroke;
		this.markSet = new MarksetDiv(bindings, this);

		this.ox = ox;
		this.widthNoOvershoot = this.width - ox;
		this.divNoOvershoot = this.widthNoOvershoot / bindings.Width;

		this.archDepth = this.archDepthOf(bindings.ArchDepth, mvs);
		this.archDepthA = this.archDepthAOf(bindings.ArchDepth, mvs);
		this.archDepthB = this.archDepthBOf(bindings.ArchDepth, mvs);

		this.smallArchDepth = this.archDepthOf(bindings.SmallArchDepth, mvs);
		this.smallArchDepthA = this.archDepthAOf(bindings.SmallArchDepth, mvs);
		this.smallArchDepthB = this.archDepthBOf(bindings.SmallArchDepth, mvs);
	}

	archDepthOf(d, _stroke) {
		return Math.max(d * this.divNoOvershoot, 1.125 * (_stroke ?? this.mvs));
	}
	archDepthAOf(d, _stroke) {
		return this.bindings.ArchDepthAOf(this.archDepthOf(d, _stroke), this.widthNoOvershoot);
	}
	archDepthBOf(d, _stroke) {
		return this.bindings.ArchDepthBOf(this.archDepthOf(d, _stroke), this.widthNoOvershoot);
	}

	slice(_hpk, _keeps, _o) {
		const hpk = _hpk ?? this.hPack;
		const keeps = _keeps ?? 2;
		const o = _o ?? 0;

		return this.sliceFine(hpk, keeps, (keeps - 1) / (hpk - 1), 0, o);
	}

	sliceFine(hpk, keeps, pGap, _extraGap, _o) {
		const o = _o ?? 0;
		const extraGap = _extraGap ?? 0;

		const oneStroke = this.bindings.HVContrast * this.mvs;
		const totalGap = this.rightSB - this.leftSB - hpk * oneStroke - 2 * o;

		const subDfWidth = 2 * this.sb + 2 * o + totalGap * pGap + extraGap + oneStroke * keeps;
		const subDfDiv = subDfWidth / this.bindings.Width;

		return new DivFrame(
			this.bindings,
			subDfDiv,
			keeps,
			this.leftSB / this.bindings.SB,
			this.mvs,
			o,
		);
	}

	rest(sub, _hPack) {
		return new DivFrame(
			this.bindings,
			(this.width - sub.width) / this.bindings.Width,
			_hPack ?? this.hPack - sub.hPack + 1,
			this.leftSB / this.bindings.SB,
			this.mvs,
			this.ox,
		);
	}

	restCompact(kKern, sub, _hPack) {
		const kern = kKern * (this.width - this.rightSB + sub.leftSB);
		return new DivFrame(
			this.bindings,
			(this.width - sub.width + kern) / this.bindings.Width,
			_hPack ?? this.hPack - sub.hPack + 1,
			this.leftSB / this.bindings.SB,
			this.mvs,
			this.ox,
		);
	}

	applyToGlyph(g) {
		g.setWidth(this.width);
		g.divFrameParams = this.params;
		return this;
	}

	adviceStroke(c) {
		return this.bindings.AdviceStroke(c, this.adws);
	}
	adviceStroke2(c, d, h) {
		return this.bindings.AdviceStroke2(c, d, h, this.adws);
	}

	frameBox(t, b) {
		return new Box(t, b, 0, this.width);
	}
	bodyBox(t, b) {
		return new Box(t, b, this.leftSB, this.rightSB);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
////// MARK SETS

class ZoneMarkSet {
	constructor(markAnchors, baseAnchors) {
		this.markAnchors = markAnchors;
		this.baseAnchors = baseAnchors;
	}
	applyToGlyph(g) {
		g.clearAnchors();
		g.copyAnchors(this);
	}
}
function compositeBaseAnchors(...anchorSets) {
	const baseAnchorSink = {};
	for (const a of anchorSets) {
		for (const [k, v] of Object.entries(a)) {
			baseAnchorSink[k] = new Anchor(v.x, v.y, v.type, v.mbx, v.mby);
		}
	}
	return new ZoneMarkSet(null, baseAnchorSink);
}

function CreateMarkSetBuilder(bindings, df) {
	function ta(anchor) {
		return new Anchor(
			bindings.GlobalTransform.applyX(anchor.x, anchor.y),
			bindings.GlobalTransform.applyY(anchor.x, anchor.y),
		);
	}

	const MarkAbove = zone => ({ above: ta(new Anchor(df.middle, zone.top)) });
	const MarkBelow = zone => ({ below: ta(new Anchor(df.middle, zone.bot)) });
	const MarkTopLeft = zone => ({ topLeft: ta(new Anchor(df.leftSB, zone.top)) });
	const MarkTopRight = zone => ({ topRight: ta(new Anchor(df.rightSB, zone.top)) });
	const MarkBottomLeft = zone => ({ bottomLeft: ta(new Anchor(df.leftSB, zone.bot)) });
	const MarkBottomRight = zone => ({ bottomRight: ta(new Anchor(df.rightSB, zone.bot)) });

	const markTieAbove = {
		tieAbove: ta(new Anchor(df.width, bindings.XH + bindings.AccentStackOffset * 1.38)),
	};
	const markTieBelow = {
		tieBelow: ta(new Anchor(df.width, bindings.Descender)),
	};

	function buildStandardMarkSet(zone) {
		return () => {
			const a = compositeBaseAnchors(
				MarkAbove(zone),
				MarkBelow(zone),
				MarkTopLeft(zone),
				MarkTopRight(zone),
				MarkBottomLeft(zone),
				MarkBottomRight(zone),
				markTieAbove,
				markTieBelow,
			);

			// Overlay on stems
			a.baseAnchors.overlay = new Anchor(
				mix(a.baseAnchors.below.x, a.baseAnchors.above.x, bindings.OverlayPos),
				mix(a.baseAnchors.below.y, a.baseAnchors.above.y, bindings.OverlayPos),
			);
			// Slash over entire letter
			a.baseAnchors.slash = new Anchor(
				mix(a.baseAnchors.below.x, a.baseAnchors.above.x, 0.5),
				mix(a.baseAnchors.below.y, a.baseAnchors.above.y, 0.5),
			);
			// Horizontal or near-horizontal strike on letter counter or bowl
			a.baseAnchors.strike = new Anchor(
				mix(a.baseAnchors.below.x, a.baseAnchors.above.x, 0.5),
				mix(a.baseAnchors.below.y, a.baseAnchors.above.y, 0.5),
			);

			return a;
		};
	}

	return buildStandardMarkSet;
}

class MarksetDiv {
	constructor(bindings, df) {
		const builder = CreateMarkSetBuilder(bindings, df);
		this.OfZone = builder;

		this.capital = builder({ top: bindings.CAP, bot: 0 });
		this.b = builder({ top: bindings.Ascender, bot: 0 });
		this.e = builder({ top: bindings.XH, bot: 0 });
		this.p = builder({ top: bindings.XH, bot: bindings.Descender });
		this.oper = builder({ top: bindings.OperTop, bot: bindings.OperBot });
		this.tack = builder({ top: bindings.TackTop, bot: bindings.TackBot });
		this.plus = builder({ top: bindings.PlusTop, bot: bindings.PlusBot });
		this.bp = builder({ top: bindings.Ascender, bot: bindings.Descender });
		this.capDesc = builder({ top: bindings.CAP, bot: bindings.Descender });
	}
}
