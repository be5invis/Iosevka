"use strict";

module.exports = function formVariantData(data, para) {
	const defaultBuildup = {};

	const hives = {};
	hives["default"] = { caltBuildup: [] };
	for (const gr in data.simple) {
		hives[gr] = { appends: { caltBuildup: [data.simple[gr].ligGroup] } };
	}
	for (const gr in data.composite) {
		const comp = data.composite[gr];
		if (!comp.tag) continue;
		defaultBuildup[comp.tag] = comp.buildup;
		if (!comp.disableHives) {
			hives[gr] = { caltBuildup: [...comp.buildup] };
		}
	}

	return { defaultBuildup, hives };
};
