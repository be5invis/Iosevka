import crypto from "crypto";

const TAG_INVALID = 0x11000000;
const TAG_BEGIN_STRUCT = 0x12340001;
const TAG_END_STRUCT = 0x12340002;
const TAG_BEGIN_ARRAY = 0x12340003;
const TAG_END_ARRAY = 0x12340004;
const TAG_BEGIN_STR = 0x12340005;
const TAG_END_STR = 0x12340006;
const TAG_BEGIN_STRUCT_TYPE = 0x12340007;
const TAG_END_STRUCT_TYPE = 0x12340008;

const TAG_TYPED_POINT = 0x12340010;
const TAG_GIZMO = 0x12340011;
const TAG_LIST_LENGTH = 0x12340012;
const POINT = 0x12340013;

const TAG_EMBED_BEGIN = 0x12340020;
const TAG_EMBED_END = 0x12340021;

export class Hasher {
	constructor() {
		this.hash = crypto.createHash("sha256");
		this.buf4 = Buffer.alloc(4);
		this.buf8 = Buffer.alloc(8);
	}

	digest() {
		return this.hash.digest("hex");
	}

	invalid() {
		this.u32(TAG_INVALID);
		return this;
	}
	beginStruct(typeStr) {
		this.u32(TAG_BEGIN_STRUCT);
		if (typeStr) {
			this.u32(TAG_BEGIN_STRUCT_TYPE);
			this.hash.update(typeStr);
			this.u32(TAG_END_STRUCT_TYPE);
		}
		return this;
	}
	endStruct() {
		this.u32(TAG_END_STRUCT);
		return this;
	}
	beginArray(n) {
		this.u32(TAG_BEGIN_ARRAY);
		this.u32(TAG_LIST_LENGTH);
		this.u32(n);
		return this;
	}
	endArray() {
		this.u32(TAG_END_ARRAY);
		return this;
	}
	str(s) {
		this.u32(TAG_BEGIN_STR);
		this.hash.update(s);
		this.u32(TAG_END_STR);
		return this;
	}
	embed(other) {
		this.u32(TAG_EMBED_BEGIN);
		other.hash(this);
		this.u32(TAG_EMBED_END);
		return this;
	}

	bool(x) {
		this.u32(x ? 1 : 0);
		return this;
	}
	u32(x) {
		this.buf4.writeUInt32LE(x, 0);
		this.hash.update(this.buf4);
		return this;
	}
	i32(x) {
		this.buf4.writeInt32LE(x, 0);
		this.hash.update(this.buf4);
		return this;
	}
	f64(x) {
		this.buf8.writeDoubleLE(x, 0);
		this.hash.update(this.buf8);
		return this;
	}

	point(z) {
		this.u32(TAG_TYPED_POINT);
		this.f64(z.x);
		this.f64(z.y);
		return this;
	}
	typedPoint(z) {
		this.u32(TAG_TYPED_POINT);
		this.u32(z.type);
		this.f64(z.x);
		this.f64(z.y);
		return this;
	}
	gizmo(g) {
		this.u32(TAG_GIZMO);
		this.f64(g.xx);
		this.f64(g.xy);
		this.f64(g.yx);
		this.f64(g.yy);
		this.f64(g.tx);
		this.f64(g.ty);
		return this;
	}
}
