"use strict";

module.exports = function formVariantData(data, para) {
	const optInBuildup = {};
	const optOutBuildup = {};

	const hives = {};
	hives["default"] = { caltBuildup: [] };
	for (const gr in data.simple) {
		hives[gr] = { appends: { caltBuildup: [data.simple[gr].ligGroup] } };
	}
	for (const gr in data.composite) {
		const comp = data.composite[gr];
		if (!comp.tag) continue;
		if (comp.isOptOut) {
			optOutBuildup[comp.tag] = comp.buildup;
		} else {
			optInBuildup[comp.tag] = comp.buildup;
		}
		if (!comp.isOptOut) {
			hives[gr] = { caltBuildup: [...comp.buildup] };
		}
	}

	return { defaultBuildup: { ...optInBuildup, ...optOutBuildup }, hives };
};
