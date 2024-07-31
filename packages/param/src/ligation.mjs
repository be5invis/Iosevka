export function applyLigationData(data, para, argv) {
	const simples = data.simple;
	const composites = { ...data.composite, ...argv.ligtionCompositesFromBuildPlan };

	const taggedBuildups = {};
	for (const [key, config] of Object.entries(data.composite)) {
		if (!config.tag) continue;
		taggedBuildups[config.tag] = createBuildupForComposite(simples, composites, config);
	}

	if (argv.ligations) {
		taggedBuildups["calt"] = createBuildupForComposite(simples, composites, argv.ligations);
	}
	if (argv.customLigationTags) {
		for (const [tag, config] of Object.entries(argv.customLigationTags)) {
			taggedBuildups[tag] = createBuildupForComposite(simples, composites, config);
		}
	}

	para.ligationBuildups = taggedBuildups;
}

export function createBuildupForComposite(simples, composites, config) {
	let sink = new Set();
	addComposite(sink, simples, composites, config);
	return Array.from(sink);
}
function addByKey(sink, simples, composites, key) {
	if (simples[key]) {
		addSimple(sink, simples, key);
	} else if (composites[key]) {
		addComposite(sink, simples, composites, composites[key]);
	} else {
		throw new Error("Cannot find ligation group " + key);
	}
}
function addComposite(sink, simples, composites, config) {
	if (config.inherits) {
		// "Inherits" will override the current sink data
		const newSink = new Set();
		addByKey(newSink, simples, composites, config.inherits);
		sink.clear();
		for (const item of newSink) sink.add(item);
	}
	if (config.enables) {
		for (const item of config.enables) addByKey(sink, simples, composites, item);
	}
	if (config.buildup) {
		for (const item of config.buildup) addByKey(sink, simples, composites, item);
	}
	if (config.disables) {
		const newSink = new Set();
		for (const item of config.disables) addByKey(newSink, simples, composites, item);
		for (const item of newSink) sink.delete(item);
	}
}
function addSimple(sink, simples, key) {
	const gr = simples[key];
	sink.add(key);
	if (gr.implies) {
		for (const imply of gr.implies) {
			addSimple(sink, simples, imply);
		}
	}
}
