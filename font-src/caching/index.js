"use strict";

const fs = require("fs-extra");
const zlib = require("zlib");

const Edition = 1;

class Cache {
	constructor() {
		this.gfSource = {};
		this.gfSink = {};
	}
	loadRep(version, rep) {
		if (!rep || rep.version !== version + "@" + Edition) return;
		this.gfSource = rep.gf || {};
	}
	toRep(version) {
		return { version: version + "@" + Edition, gf: this.gfSink };
	}

	// Geometry flattening conversion cache
	getGF(ck) {
		return this.gfSource[ck];
	}
	saveGF(ck, val) {
		this.gfSink[ck] = val;
	}
}

exports.load = async function (argv) {
	let cache = new Cache();
	if (argv.oCache && fs.existsSync(argv.oCache)) {
		cache.loadRep(argv.menu.version, unzip(await fs.readFile(argv.oCache)));
	}
	return cache;
};

exports.save = async function savePTCache(argv, cache) {
	if (argv.oCache) await fs.writeFile(argv.oCache, zip(cache.toRep(argv.menu.version)));
};

function unzip(buf) {
	return JSON.parse(zlib.gunzipSync(buf));
}
function zip(obj) {
	return zlib.gzipSync(Buffer.from(JSON.stringify(obj), "utf-8"));
}
