"use strict";

const monotonicInterpolate = require("./monotonic-interpolate");

function build(parametersData, styles, blendArgs) {
	const sink = {};
	for (const item of styles) intro(parametersData, item, blendArgs, sink);
	return sink;
}
exports.build = build;

function intro(source, style, blendArgs, sink) {
	let hive = source[style];
	if (!hive) return;
	hive = { ...hive };

	if (hive.inherits) {
		for (const hn of hive.inherits) intro(source, hn, blendArgs, sink);
		delete hive.inherits;
	}
	if (hive.multiplies) {
		const mu = hiveBlend(hive.multiplies, getBlendArg(blendArgs, style), sink);
		for (const k in mu) sink[k] = (sink[k] || 0) * mu[k];
		delete hive.multiplies;
	}
	if (hive.adds) {
		const mu = hiveBlend(hive.adds, getBlendArg(blendArgs, style), sink);
		for (const k in mu) sink[k] = (sink[k] || 0) + mu[k];
		delete hive.adds;
	}
	if (hive.appends) {
		const mu = hive.appends;
		for (const k in mu) sink[k] = [...(sink[k] || []), ...mu[k]];
		delete hive.appends;
	}
	hive = hiveBlend(hive, getBlendArg(blendArgs, style), sink);
	for (const k in hive) sink[k] = hive[k];
}

function getBlendArg(blendArgs, style) {
	if (!blendArgs) return undefined;
	return blendArgs[style];
}

function hiveBlend(hive, value, sink) {
	if (!hive || !hive.blend || value == null) return hive;

	const generatedHive = {};
	const block = hive.blend;
	let keys = new Set();
	for (const grade in block) {
		sink[grade] = block[grade];
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
		generatedHive[key] = monotonicInterpolate(xs, ys)(value);
	}
	return generatedHive;
}

function numericConfigExists(x) {
	return x != null && isFinite(x);
}
function applyMetricOverride(para, mo) {
	if (numericConfigExists(mo.leading)) {
		para.leading = mo.leading;
	}
	if (numericConfigExists(mo.winMetricAscenderPad)) {
		para.winMetricAscenderPad = mo.winMetricAscenderPad;
	}
	if (numericConfigExists(mo.winMetricDescenderPad)) {
		para.winMetricDescenderPad = mo.winMetricDescenderPad;
	}
	if (numericConfigExists(mo.powerlineScaleY)) {
		para.powerlineScaleY = mo.powerlineScaleY;
	}
	if (numericConfigExists(mo.powerlineScaleX)) {
		para.powerlineScaleX = mo.powerlineScaleX;
	}
	if (numericConfigExists(mo.powerlineShiftY)) {
		para.powerlineShiftY = mo.powerlineShiftY;
	}
	if (numericConfigExists(mo.powerlineShiftX)) {
		para.powerlineShiftX = mo.powerlineShiftX;
	}
}
exports.applyMetricOverride = applyMetricOverride;
