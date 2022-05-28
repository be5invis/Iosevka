"use strict";

const fs = require("fs-extra");
const zlib = require("zlib");
const { encode, decode } = require("@msgpack/msgpack");

const Edition = 20;
const MAX_AGE = 16;

class GfEntry {
	constructor(age, value) {
		this.age = age;
		this.value = value;
	}
}

class Cache {
	constructor(freshAgeKey) {
		this.freshAgeKey = freshAgeKey;
		this.historyAgeKeys = [];
		this.gf = new Map();
		this.diff = new Set();
	}
	loadRep(version, rep) {
		if (!rep || rep.version !== version + "@" + Edition) return;
		this.historyAgeKeys = rep.ageKeys.slice(0, MAX_AGE);
		const ageKeySet = new Set(this.historyAgeKeys);
		for (const [k, e] of Object.entries(rep.gf)) {
			if (ageKeySet.has(e.age)) this.gf.set(k, new GfEntry(e.age, e.value));
		}
	}
	toRep(version, diffOnly) {
		let gfRep = {};
		for (const [k, e] of this.gf) {
			if (!diffOnly || this.diff.has(k)) {
				gfRep[k] = { age: e.age, value: e.value };
			}
		}
		const mergedAgeKeys =
			this.historyAgeKeys[0] === this.freshAgeKey
				? this.historyAgeKeys
				: [this.freshAgeKey, ...this.historyAgeKeys];

		return {
			version: version + "@" + Edition,
			ageKeys: mergedAgeKeys,
			gf: gfRep
		};
	}

	isEmpty() {
		return this.gf.size == 0;
	}
	isUpdated() {
		return this.diff.size != 0;
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
		if (entry.age != this.freshAgeKey) {
			this.diff.add(k);
			entry.age = this.freshAgeKey;
		}
	}
	saveGF(k, v) {
		this.gf.set(k, new GfEntry(this.freshAgeKey, v));
		this.diff.add(k);
	}
	merge(other) {
		for (const [k, e] of other.gf) {
			this.gf.set(k, e);
		}
	}
}

exports.load = async function (path, version, freshAgeKey) {
	let cache = new Cache(freshAgeKey);
	if (path && fs.existsSync(path)) {
		const buf = zlib.gunzipSync(await fs.readFile(path));
		cache.loadRep(version, decode(buf));
	}
	return cache;
};

exports.save = async function savePTCache(path, version, cache, diffOnly) {
	if (path) {
		const buf = encode(cache.toRep(version, diffOnly));
		const bufZip = zlib.gzipSync(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
		await fs.writeFile(path, bufZip);
	}
};

exports.merge = async function (base, diff, version, freshAgeKey) {
	const cacheDiff = await exports.load(diff, version, freshAgeKey);
	if (!cacheDiff.isEmpty()) {
		const cacheBase = await exports.load(base, version, freshAgeKey);
		cacheBase.merge(cacheDiff);
		await exports.save(base, version, cacheBase, false);
	}
	if (fs.existsSync(diff)) await fs.rm(diff);
};
