"use strict";

const monotonicInterpolate = require("./monotonic-interpolate");

exports.init = initPara;
function initPara(data, argv) {
	let para = {};
	apply(para, data, ["iosevka"]);
	if (argv.shape.serifs) apply(para, data, ["serifs-" + argv.shape.serifs]);
	if (argv.shape.spacing) apply(para, data, ["spacing-" + argv.shape.spacing]);
	apply(para, data, ["shapeWeight"], { shapeWeight: argv.shape.weight });
	apply(para, data, ["shapeWidth"], { shapeWidth: argv.shape.width });
	apply(para, data, [`s-${argv.shape.slope}`]);
	if (argv.featureControl.noCvSs) para.enableCvSs = false;
	if (argv.featureControl.noLigation) para.enableLigation = false;
	return para;
}

exports.apply = apply;
function apply(sink, parametersData, styles, blendArgs) {
	if (!styles) return;
	for (const item of styles) intro(parametersData, item, blendArgs, sink);
}

// eslint-disable-next-line complexity
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
	if (hive.removes) {
		const mu = hive.removes;
		for (const k in mu) {
			const s = new Set(mu[k]);
			sink[k] = [...(sink[k] || [])].filter(x => !s.has(x));
		}
		delete hive.removes;
	}

	hive = hiveBlend(hive, getBlendArg(blendArgs, style));
	for (const k in hive) sink[k] = hive[k];
}

function getBlendArg(blendArgs, style) {
	if (!blendArgs) return undefined;
	return blendArgs[style];
}

function hiveBlend(hive, value) {
	if (!hive || !hive.blend || value == null) return hive;

	const generatedHive = {};
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
		generatedHive[key] = monotonicInterpolate(xs, ys)(value);
	}
	return generatedHive;
}

exports.applyMetricOverride = applyMetricOverride;
function applyMetricOverride(para, mo) {
	const overrideObj = { metricOverride: {} };
	createMetricDataSet(overrideObj.metricOverride, mo);
	apply(para, overrideObj, ["metricOverride"]);
}

function createMetricDataSet(sink, mo) {
	for (const key in mo) {
		if (metricOverrideHandlers[key]) {
			metricOverrideHandlers[key](sink, key, mo[key]);
		} else {
			console.error(`Metric override key ${key} is not supported. Skipping it.`);
		}
	}
}

function numericFieldHandler(sink, key, x) {
	if (x != null && isFinite(x)) sink[key] = x;
}
function subObjectHandler(sink, key, obj) {
	sink[key] = {};
	createMetricDataSet(sink[key], obj);
}
const metricOverrideHandlers = {
	cap: numericFieldHandler,
	xheight: numericFieldHandler,
	sb: numericFieldHandler,
	leading: numericFieldHandler,
	winMetricAscenderPad: numericFieldHandler,
	winMetricDescenderPad: numericFieldHandler,
	symbolMid: numericFieldHandler,
	parenSize: numericFieldHandler,
	powerlineScaleY: numericFieldHandler,
	powerlineScaleX: numericFieldHandler,
	powerlineShiftY: numericFieldHandler,
	powerlineShiftX: numericFieldHandler,
	onumZeroHeightRatio: numericFieldHandler,
	multiplies: subObjectHandler,
	adds: subObjectHandler
};
