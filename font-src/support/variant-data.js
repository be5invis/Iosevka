"use strict";

const objectAssign = require("object-assign");

function mergeVSHive(_target, source) {
	if (!source) return _target;
	let __cvmap = objectAssign({}, _target.__cvmap, source.__cvmap);
	let target = objectAssign(_target, source);
	target.__cvmap = __cvmap;
	return target;
}

function produceComposite(vs, para, g) {
	let sel = {};
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
		const varDef = data.simple[k];
		if (!varDef.variant) throw new Error("Unreachable! Variant definition is invalid");
		const hive = { ...varDef.variant };
		vs[k] = hive;

		const tag = varDef.tag;
		const tagUpright = varDef.tagUpright;
		const tagItalic = varDef.tagItalic;
		if (tag) {
			let __cvmap = {};
			for (let k in hive) __cvmap[k] = tag;
			hive.__cvmap = __cvmap;
			vs[tag] = hive;
		} else {
			if (tagItalic && para.isItalic) {
				let __cvmap = {};
				for (let k in hive) __cvmap[k] = tagItalic;
				hive.__cvmap = __cvmap;
				vs[tagItalic] = hive;
			}
			if (tagUpright && !para.isItalic) {
				let __cvmap = {};
				for (let k in hive) __cvmap[k] = tagUpright;
				hive.__cvmap = __cvmap;
				vs[tagUpright] = hive;
			}
		}
	}
	// default selector
	vs.default = produceComposite(vs, para, data.default);
	// ss## selector
	for (let k in data.composite) vs[k] = produceComposite(vs, para, data.composite[k]);

	return vs;
};
