/// A generic buffer writer helper class
export class BufferWriter {
	constructor() {
		this.buffer = Buffer.alloc(0x1000);
		this.capacity = 0x1000;
		this.length = 0;
	}
	grow(sizeToAdd) {
		let newCapacity = this.capacity;
		while (newCapacity < this.length + sizeToAdd) newCapacity *= 2;
		if (newCapacity > this.capacity) {
			const newBuffer = Buffer.alloc(newCapacity);
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
export class BufferReader {
	constructor(buffer) {
		this.buffer = buffer;
		this.cursor = 0;
	}

	nextUInt8() {
		return this.buffer.readUInt8(this.cursor++);
	}
	nextUInt32() {
		const value = this.buffer.readUInt32LE(this.cursor);
		this.cursor += 4;
		return value;
	}
	nextFloat64() {
		const value = this.buffer.readDoubleLE(this.cursor);
		this.cursor += 8;
		return value;
	}
}
