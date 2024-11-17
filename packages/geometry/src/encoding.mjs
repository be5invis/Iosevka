import { Point } from "./point.mjs";

/// A generic buffer writer helper class
class BufferWriter {
	constructor() {
		this.buffer = Buffer.alloc(0x1000);
		this.capacity = 0x1000;
		this.length = 0;
	}
	grow(sizeToAdd) {
		let newCapacity = this.capacity;
		while (newCapacity < this.length + sizeToAdd) newCapacity *= 2;
		if (newCapacity > this.capacity) {
			let newBuffer = Buffer.alloc(newCapacity);
			this.buffer.copy(newBuffer);
			this.buffer = newBuffer;
			this.capacity = newCapacity;
		}
	}

	writeUInt8(value) {
		this.grow(1);
		this.buffer.writeUInt8(value, this.length);
		this.length += 1;
	}
	writeUInt32(value) {
		this.grow(4);
		this.buffer.writeUInt32LE(value, this.length);
		this.length += 4;
	}
	writeFloat64(value) {
		this.grow(8);
		this.buffer.writeDoubleLE(value, this.length);
		this.length += 8;
	}

	getResult() {
		return this.buffer.subarray(0, this.length);
	}
}

/// A generic buffer reader helper class
class BufferReader {
	constructor(buffer) {
		this.buffer = buffer;
		this.cursor = 0;
	}

	nextUInt8() {
		return this.buffer.readUInt8(this.cursor++);
	}
	nextUInt32() {
		let value = this.buffer.readUInt32LE(this.cursor);
		this.cursor += 4;
		return value;
	}
	nextFloat64() {
		let value = this.buffer.readDoubleLE(this.cursor);
		this.cursor += 8;
		return value;
	}
}

/// Encode a contour set to a buffer
/// Encoding schema:
///  - 4 bytes: number of contours
///  - 4 bytes: total number of points
///  - 4 bytes per contour: number of points in each contour
///  - N bytes: point types, each point type is a byte
///  - 16 bytes per point: x and y coordinates, each coordinate is a float64
export function encode(cs) {
	let totalPoints = 0;
	let contourPointCounts = [];
	for (const contour of cs) {
		totalPoints += contour.length;
		contourPointCounts.push(contour.length);
	}

	const writer = new BufferWriter();

	// Write the header
	writer.writeUInt32(cs.length);
	writer.writeUInt32(totalPoints);
	for (const count of contourPointCounts) writer.writeUInt32(count);

	// Write the points' type
	for (const contour of cs) {
		for (const z of contour) {
			writer.writeUInt8(z.type);
		}
	}

	// Write the points' coordinates
	for (const contour of cs) {
		for (const z of contour) {
			writer.writeFloat64(z.x);
			writer.writeFloat64(z.y);
		}
	}

	return writer.getResult();
}

/// Decode a contour set from a buffer
export function decode(buf) {
	const reader = new BufferReader(buf);
	const numContours = reader.nextUInt32();
	const numPoints = reader.nextUInt32();
	const contourPointCounts = [];
	for (let i = 0; i < numContours; i++) {
		contourPointCounts.push(reader.nextUInt32());
	}

	// Read the points' type, set up the contour set
	const cs = [];
	for (let i = 0; i < numContours; i++) {
		const contour = [];
		for (let j = 0; j < contourPointCounts[i]; j++) {
			const type = reader.nextUInt8();
			contour.push(Point.fromXY(type, 0, 0));
		}
		cs.push(contour);
	}

	// Read the points' coordinates, set the coordinates properly
	for (let i = 0; i < numContours; i++) {
		const contour = cs[i];
		for (let j = 0; j < contourPointCounts[i]; j++) {
			const z = contour[j];
			z.x = reader.nextFloat64();
			z.y = reader.nextFloat64();
		}
	}

	return cs;
}
