import fs from "fs";
import { setTimeout } from "node:timers/promises";
import zlib from "zlib";

import * as CurveUtil from "@iosevka/geometry/curve-util";
import { encode, decode } from "@msgpack/msgpack";

const Edition = 45;
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
			if (ageKeySet.has(e.age))
				this.gf.set(k, new GfEntry(e.age, CurveUtil.repToShape(e.value)));
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
			gf: gfRep,
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
export async function load(path, version, freshAgeKey) {
	let cache = new Cache(freshAgeKey);
	if (path && fs.existsSync(path)) {
		let loadAttempt = 0;
		while (loadAttempt < 3) {
			try {
				const buf = zlib.gunzipSync(await fs.promises.readFile(path));
				cache.loadRep(version, decode(buf));
				loadAttempt += 1;
				break;
			} catch (e) {
				if (loadAttempt < 2) {
					await setTimeout(500);
				} else {
					console.error("Error loading cache. Treat as empty.");
					console.error(e);
				}
				loadAttempt += 1;
			}
		}
	}
	return cache;
}
export async function save(path, version, cache, diffOnly) {
	if (path) {
		const buf = encode(cache.toRep(version, diffOnly));
		const bufZip = zlib.gzipSync(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
		await fs.promises.writeFile(path, bufZip);
	}
}
export async function merge(base, diff, version, freshAgeKey) {
	const cacheDiff = await load(diff, version, freshAgeKey);
	if (!cacheDiff.isEmpty()) {
		const cacheBase = await load(base, version, freshAgeKey);
		cacheBase.merge(cacheDiff);
		await save(base, version, cacheBase, false);
	}
	if (fs.existsSync(diff)) await fs.promises.rm(diff);
}
