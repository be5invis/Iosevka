import * as Parameters from "./parameters.mjs";

export function applyLigationData(data, para, argv) {
	const defaultBuildup = {};
	const hives = {};
	hives["default"] = { caltBuildup: [] };
	for (const gr in data.simple) {
		hives[`ligset-enable-${gr}`] = { appends: { caltBuildup: [data.simple[gr].ligGroup] } };
		hives[`ligset-disable-${gr}`] = { removes: { caltBuildup: [data.simple[gr].ligGroup] } };
	}
	for (const gr in data.composite) {
		const comp = data.composite[gr];
		if (!comp.tag) continue;
		const ligSets = createBuildup(data.simple, data.composite, comp.buildup);
		defaultBuildup[comp.tag] = ligSets;
		hives[`ligset-inherit-${gr}`] = { caltBuildup: ligSets };
	}
	para.ligation = {
		defaultBuildup,
		caltBuildup: []
	};
	if (argv.ligations) {
		if (argv.ligations.inherits)
			Parameters.apply(para.ligation, hives, [`ligset-inherit-${argv.ligations.inherits}`]);
		if (argv.ligations.disables)
			Parameters.apply(
				para.ligation,
				hives,
				argv.ligations.disables.map(x => `ligset-disable-${x}`)
			);
		if (argv.ligations.enables)
			Parameters.apply(
				para.ligation,
				hives,
				argv.ligations.enables.map(x => `ligset-enable-${x}`)
			);
	}
}

export function createBuildup(simple, composite, buildup) {
	let sink = new Set();
	createBuildupImpl(sink, simple, composite, buildup);
	return Array.from(sink);
}

function createBuildupImpl(sink, simple, composite, buildup) {
	for (const s of buildup) {
		if (simple[s]) {
			sink.add(simple[s].ligGroup);
		} else if (composite[s]) {
			createBuildupImpl(sink, simple, composite, composite[s].buildup);
		} else {
			throw new Error("Cannot find simple ligation group " + s);
		}
	}
}
