"use strict";

const blend = require("./monotonic-interpolate");

module.exports = function (aspect, hive, params, sink) {
	if (!hive || !hive.blend || !params) return;

	const block = hive.blend;
	let keys = new Set();
	for (const grade in block) {
		if (!isFinite(parseFloat(grade))) continue;
		for (const key in block[grade]) {
			if (block[grade][key] == null) continue;
			keys.add(key);
		}
	}

	for (const key of keys) {
		let xs = [],
			ys = [];
		for (const grade in block) {
			if (!isFinite(parseFloat(grade))) continue;
			if (block[grade][key] == null) continue;
			xs.push(grade);
			ys.push(block[grade][key]);
		}
		const fn = blend(xs, ys);
		sink[key] = fn(params[aspect]);
	}
};
