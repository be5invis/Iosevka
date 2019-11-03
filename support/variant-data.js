const objectAssign = require("object-assign");

function mergeVSHive(_target, source) {
	if (!source) return _target;
	let __cvmap = objectAssign({}, _target.__cvmap, source.__cvmap);
	let target = objectAssign(_target, source);
	target.__cvmap = __cvmap;
	return target;
}

function produceComposite(vs, para, dflt, g) {
	let sel = objectAssign({}, dflt);
	if (g.design)
		for (let h of g.design) {
			sel = mergeVSHive(sel, vs[h]);
		}
	if (!para.isItalic && g.upright) {
		for (let h of g.upright) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	if (para.isItalic && g.italic) {
		for (let h of g.italic) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	sel.__isComposite = true;
	return sel;
}

module.exports = function formVariantData(data, para) {
	const vs = {};
	// simple selector
	for (let k in data.simple) {
		const hive = objectAssign({}, data.simple[k]);
		const tag = hive.tag;
		delete hive.tag;
		if (tag) {
			let __cvmap = {};
			for (let k in hive) __cvmap[k] = tag;
			hive.__cvmap = __cvmap;
		}
		vs[k] = hive;
		if (tag) vs[tag] = hive;
	}
	// default selector
	vs.default = produceComposite(vs, para, {}, data.default);
	// ss## selector
	for (let k in data.composite) {
		vs[k] = produceComposite(vs, para, vs.default, data.composite[k]);
	}
	return vs;
};
