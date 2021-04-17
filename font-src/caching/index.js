"use strict";

const fs = require("fs-extra");
const zlib = require("zlib");

const EDITION = "Iosevka.PTCache.1";

class Cache {
	constructor() {
		this.ptSource = {};
		this.ptSink = {};
	}
	loadRep(rep) {
		if (!rep || rep.edition !== EDITION) return;
		this.ptSource = rep.pt;
	}
	toRep() {
		return { edition: EDITION, pt: this.ptSink };
	}
	// Path conversion cache
	getPT(ck) {
		return this.ptSource[ck];
	}
	savePT(ck, val) {
		this.ptSink[ck] = val;
	}
}

exports.load = async function (argv) {
	let cache = new Cache();
	if (argv.oCache && fs.existsSync(argv.oCache)) {
		cache.loadRep(unzip(await fs.readFile(argv.oCache)));
	}
	return cache;
};

exports.save = async function savePTCache(argv, cache) {
	if (argv.oCache) await fs.writeFile(argv.oCache, zip(cache.toRep()));
};

function unzip(buf) {
	return JSON.parse(zlib.gunzipSync(buf));
}
function zip(obj) {
	return zlib.gzipSync(Buffer.from(JSON.stringify(obj), "utf-8"));
}
