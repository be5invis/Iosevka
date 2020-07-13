const fs = require("fs-extra");
const path = require("path");
const toml = require("@iarna/toml");

module.exports = async function () {
	const variantsToml = await fs.readFile(
		path.join(__dirname, "../../params/variants.toml"),
		"utf8"
	);
	const variants = toml.parse(variantsToml);

	const cvData = getCvData(variants);
	const ssData = getSsData(variants, cvData);

	return {
		cvData,
		ssData,
		default: variants.default,
		slabDefaultOverride: variants.composite.slab
	};
};

function getCvData(variants) {
	const samplerGroups = new Map();
	for (const selector in variants.simple) {
		let config = variants.simple[selector];
		if (!config.sampler) continue;
		config = { selector, ...config };
		let gr = samplerGroups.get(config.sampler);
		if (!gr) {
			gr = { configs: [] };
			samplerGroups.set(config.sampler, gr);
		}
		gr.configs.push({
			selector,
			tag: config.tag || null,
			tagUpright: config.tagUpright || null,
			tagItalic: config.tagItalic || null,
			slopeHetero: !config.variant,
			sampler: config.sampler,
			description: config.description
		});
	}

	for (const [sampler, gr] of samplerGroups) {
		gr.ligatureSampler = / /.test(sampler);
		gr.descSampleText = gr.ligatureSampler ? sampler.split(" ") : [...sampler];
		gr.configs.sort((a, b) => {
			const ta = (a.tag || a.tagUpright || a.tagItalic || "").toLowerCase();
			const tb = (b.tag || b.tagUpright || b.tagItalic || "").toLowerCase();
			if (ta < tb) return -1;
			if (ta > tb) return 1;
			return 0;
		});
		gr.rank = rankOf(gr.descSampleText[0][0]);
	}
	return [...samplerGroups.values()].sort(compareSamplerGr);
}

function rankOf(initialChar) {
	if ("a" <= initialChar && initialChar <= "z") return 3;
	if ("A" <= initialChar && initialChar <= "Z") return 2;
	if ("0" <= initialChar && initialChar <= "9") return 1;
	return 0;
}
function compareSamplerGr(a, b) {
	if (b.rank !== a.rank) return b.rank - a.rank;
	if (a.rank) {
		if (a.descSampleText[0][0] < b.descSampleText[0][0]) return -1;
		if (a.descSampleText[0][0] > b.descSampleText[0][0]) return +1;
	}
	return 0;
}

function getSsData(variants, cvData) {
	const result = [
		{
			tag: "off",
			effective: false,
			description: "Default",
			uprightComposition: [],
			italicComposition: [],
			hotCharSetUpright: [],
			hotCharSetItalic: []
		}
	];
	const defaultUpright = buildupComposite(
		cvData,
		...variants.default.design,
		...variants.default.upright
	);
	const defaultItalic = buildupComposite(
		cvData,
		...variants.default.design,
		...variants.default.italic
	);
	for (const tag in variants.composite) {
		if (!/^ss\d\d$/.test(tag)) continue;
		const composition = variants.composite[tag];
		const upright = buildupComposite(
			cvData,
			...(composition.design || []),
			...(composition.upright || [])
		);
		const italic = buildupComposite(
			cvData,
			...(composition.design || []),
			...(composition.italic || [])
		);
		result.push({
			tag,
			effective: true,
			description: composition.description,
			uprightComposition: Array.from(upright.composition),
			italicComposition: Array.from(italic.composition),
			hotCharSetUpright: Array.from(uniqueHotChars(defaultUpright, upright.hotChars)),
			hotCharSetItalic: Array.from(uniqueHotChars(defaultItalic, italic.hotChars))
		});
	}
	return result;
}
function buildupComposite(cvData, ..._cfg) {
	const hch = new Map();
	const cfg = new Set(_cfg);
	for (const gr of cvData) {
		if (gr.ligatureSampler) continue;
		for (const config of gr.configs) {
			if (cfg.has(config.selector)) {
				for (const ch of gr.descSampleText) hch.set(ch, config.selector);
			}
		}
	}
	return {
		composition: [...cfg],
		hotChars: hch
	};
}
function* uniqueHotChars(cfgDefault, cfgSS) {
	for (const [hc, v] of cfgSS) {
		if (cfgDefault.hotChars.get(hc) !== v) yield hc;
	}
}
