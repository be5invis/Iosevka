import * as Geom from "@iosevka/geometry";
import { BufferReader, BufferWriter } from "@iosevka/geometry/encoding";
import { Point } from "@iosevka/geometry/point";
import { Ot } from "ot-builder";

///////////////////////////////////////////////////////////////////////////////////////////////////

export function convertGlyphGeometryToProxy(cache, para, glyphStore) {
	const converter = new GemetryConverter(cache, para);
	for (const g of glyphStore.glyphs()) converter.analyze(g);
	for (const g of glyphStore.glyphs()) converter.fill(g);
}

class GemetryConverter {
	constructor(cache, para) {
		this.cache = cache;
		this.para = para;
		this.resultMap = new WeakMap();
	}
	analyze(g) {
		if (!(g.geometry.measureComplexity() & Geom.CPLX_NON_EMPTY)) return;
		const refs = g.geometry.toReferences();
		if (refs) {
			this.resultMap.set(g, new TrueTypeReferenceProxy(refs));
		} else {
			this.resultMap.set(g, this.#convertSimpleGeometry(g));
		}
	}
	fill(g) {
		const mapped = this.resultMap.get(g);
		if (mapped) g.geometry = mapped;
		else g.geometry = new TrueTypeSpaceProxy();
	}

	#convertSimpleGeometry(g) {
		const cacheKey = TrueTypeOutlineCodec.hashSource(g.geometry);
		const existing = this.cache.getGF(cacheKey, TrueTypeOutlineCodec);
		if (existing) {
			this.cache.refreshGF(cacheKey);
			return existing;
		}

		const calculated = this.#convertSimpleGeometryImpl(g);
		this.cache.saveGF(cacheKey, TrueTypeOutlineCodec, calculated);
		return calculated;
	}

	#convertSimpleGeometryImpl(g) {
		try {
			if (!g.gizmo) throw new TypeError("No gizmo");
			const gSimplified = new Geom.SimplifyGeometry(g.geometry, g.gizmo);
			return TrueTypeContourSetProxy.FromGeomContours(
				gSimplified.toContours({ cache: this.cache }),
			);
		} catch (e) {
			console.error(
				`Detected broken geometry when processing ${g._m_identifier} in ${this.para.naming.family} ${this.para.naming.weight} ${this.para.naming.width} ${this.para.naming.slope}`,
			);
			console.error(e);
			return new TrueTypeSpaceProxy();
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export class TrueTypeGeometryProxy extends Geom.GeometryBase {}

export class TrueTypeSpaceProxy extends TrueTypeGeometryProxy {}
export class TrueTypeReferenceProxy extends TrueTypeGeometryProxy {
	constructor(refs) {
		super();

		// we do not have the internal-to-ot gyph map yet, so keep the original reference list
		this.refs = refs;
	}
}
export class TrueTypeContourSetProxy extends TrueTypeGeometryProxy {
	constructor(contours) {
		super();
		this.contourSet = contours;
	}

	static FromGeomContours(contours) {
		const otContours = new Ot.Glyph.ContourSet();
		for (const contour of contours) {
			const otContour = [];
			for (const z of contour) {
				otContour.push(
					Ot.Glyph.Point.create(
						Math.round(z.x),
						Math.round(z.y),
						z.type === Point.Type.Quadratic
							? Ot.Glyph.PointType.Quad
							: Ot.Glyph.PointType.Corner,
					),
				);
			}
			otContours.contours.push(otContour);
		}
		return new TrueTypeContourSetProxy(otContours);
	}
}

const TrueTypeOutlineCodec = {
	hashSource(geom) {
		return `t/${Geom.hashGeometry(geom)}`;
	},

	// Packed point representation
	//  - 2 bit for type
	//  - signed 14 bit for x
	//  - signed 14 bit for y

	encode(proxy) {
		if (!(proxy instanceof TrueTypeContourSetProxy)) throw new TypeError("Invalid proxy type");
		const writer = new BufferWriter();
		writer.writeUInt32(proxy.contourSet.contours.length);
		for (const contour of proxy.contourSet.contours) {
			writer.writeUInt32(contour.length);
			for (const z of contour) {
				if (z.x < -0x2000 || z.x >= 0x2000 || z.y < -0x2000 || z.y >= 0x2000) {
					throw new RangeError(`Point coordinate out of range: (${z.x}, ${z.y})`);
				}
				const xCode = Math.round(z.x) & 0x3fff;
				const yCode = Math.round(z.y) & 0x3fff;
				const zRep = (z.kind << 28) | (xCode << 14) | yCode;
				writer.writeUInt32(zRep);
			}
		}

		return writer.getResult();
	},

	decode(buffer) {
		const reader = new BufferReader(buffer);
		const numContours = reader.nextUInt32();
		const contours = [];
		for (let i = 0; i < numContours; i++) {
			const numPoints = reader.nextUInt32();
			const contour = [];
			for (let j = 0; j < numPoints; j++) {
				const zRep = reader.nextUInt32();
				const kind = (zRep >>> 28) & 0x3;
				const x = (((zRep >>> 14) & 0x3fff) << 18) >> 18;
				const y = ((zRep & 0x3fff) << 18) >> 18;

				contour.push(Ot.Glyph.Point.create(x, y, kind));
			}
			contours.push(contour);
		}
		return new TrueTypeContourSetProxy(new Ot.Glyph.ContourSet(contours));
	},
};
