import { monotonicInterpolate } from "@iosevka/util/monotonic-interpolate";

export function init(data, argv) {
	let para = {};
	apply(para, data, ["iosevka"]);
	if (argv.shape.serifs) apply(para, data, ["serifs-" + argv.shape.serifs]);
	if (argv.shape.spacing) apply(para, data, ["spacing-" + argv.shape.spacing]);
	applyBlendingParam(argv, para, data, "shapeWeight", "weight");
	applyBlendingParam(argv, para, data, "shapeWidth", "width");
	applyBlendingParam(argv, para, data, "shapeSlopeAngle", "slopeAngle");
	applyAlternatesParam(argv, para, data, "slope", "slope");
	if (argv.featureControl.noCvSs) para.enableCvSs = false;
	if (argv.featureControl.noLigation) para.enableLigation = false;
	if (argv.featureControl.buildTextureFeature) para.buildTextureFeature = true;
	if (argv.featureControl.exportGlyphNames) para.exportGlyphNames = true;
	return para;
}
function applyBlendingParam(argv, para, data, key, keyArgv) {
	applySingleBlendingParam(argv, para, data, key, keyArgv);
	if (argv.shape.serifs)
		applySingleBlendingParam(argv, para, data, `${key}-serifs-${argv.shape.serifs}`, keyArgv);
	if (argv.shape.spacing)
		applySingleBlendingParam(argv, para, data, `${key}-spacing-${argv.shape.spacing}`, keyArgv);
}
function applySingleBlendingParam(argv, para, data, key, keyArgv) {
	apply(para, data, [key], { [key]: argv.shape[keyArgv] });
}
function applyAlternatesParam(argv, para, data, key, keyArgv) {
	const kBase = `${key}-${argv.shape[keyArgv]}`;
	apply(para, data, [kBase]);
	if (argv.shape.serifs) apply(para, data, [`${kBase}-serifs-${argv.shape.serifs}`]);
	if (argv.shape.spacing) apply(para, data, [`${kBase}-spacing-${argv.shape.spacing}`]);
}

export function apply(sink, parametersData, styles, blendArgs) {
	if (!styles) return;
	for (const item of styles) intro(parametersData, item, blendArgs, sink);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

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
	const block = hive.blend;
	delete hive.blend;
	const generatedHive = { ...hive };
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
