"use strict";

const fs = require("fs-extra");
const zlib = require("zlib");
const { encode, decode } = require("@msgpack/msgpack");

const Edition = 4;
const MAX_AGE = 5;

class GfEntry {
	constructor(age, value) {
		this.age = age;
		this.value = value;
	}
}

class Cache {
	constructor() {
		this.gf = new Map();
	}
	loadRep(version, rep) {
		if (!rep || rep.version !== version + "@" + Edition) return;
		for (const [k, e] of Object.entries(rep.gf)) {
			this.gf.set(k, new GfEntry((e.age || 0) + 1, e.value));
		}
	}
	toRep(version) {
		let gfRep = {};
		for (const [k, e] of this.gf) {
			if (e.age < MAX_AGE) gfRep[k] = { age: e.age, value: e.value };
		}
		return { version: version + "@" + Edition, gf: gfRep };
	}

	// Geometry flattening conversion cache
	getGF(k) {
		const entry = this.gf.get(k);
		if (!entry) return undefined;
		else return entry.value;
	}
	refreshGF(k) {
		const entry = this.gf.get(k);
		if (!entry) return;
		entry.age = 0;
	}
	saveGF(k, v) {
		this.gf.set(k, new GfEntry(0, v));
	}
}

exports.load = async function (argv) {
	let cache = new Cache();
	if (argv.oCache && fs.existsSync(argv.oCache)) {
		const buf = zlib.gunzipSync(await fs.readFile(argv.oCache));
		cache.loadRep(argv.menu.version, decode(buf));
	}
	return cache;
};

exports.save = async function savePTCache(argv, cache) {
	if (argv.oCache) {
		const buf = encode(cache.toRep(argv.menu.version));
		const bufZip = zlib.gzipSync(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
		await fs.writeFile(argv.oCache, bufZip);
	}
};
