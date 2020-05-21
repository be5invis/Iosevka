const fs = require("fs-extra");
const path = require("path");
const toml = require("toml");

module.exports = async function () {
	const variantsToml = await fs.readFile(path.join(__dirname, "../../variants.toml"), "utf8");
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
			sampler: config.sampler,
			description: config.description
		});
	}

	for (const [sampler, gr] of samplerGroups) {
		gr.ligatureSampler = / /.test(sampler);
		gr.descSampleText = gr.ligatureSampler ? sampler.split(" ") : [...sampler];
		gr.configs.sort((a, b) => (a.tag < b.tag ? -1 : a.tag > b.tag ? 1 : 0));
		gr.rank = rankOf(gr.descSampleText[0][0]);
	}
	return [...samplerGroups.values()].sort((a, b) => b.rank - a.rank);
}

function rankOf(initialChar) {
	if ("a" <= initialChar && initialChar <= "z") return 3;
	if ("A" <= initialChar && initialChar <= "Z") return 2;
	if ("0" <= initialChar && initialChar <= "9") return 1;
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
	for (const tag in variants.composite) {
		if (!/^ss\d\d$/.test(tag)) continue;
		const composition = variants.composite[tag];
		const uprightCfg = new Set([...(composition.design || []), ...(composition.upright || [])]);
		const italicCfg = new Set([...(composition.design || []), ...(composition.italic || [])]);
		const hotCharSetUpright = new Set();
		const hotCharSetItalic = new Set();
		for (const gr of cvData) {
			if (gr.ligatureSampler) continue;
			for (const config of gr.configs) {
				if (uprightCfg.has(config.selector))
					for (const ch of gr.descSampleText) hotCharSetUpright.add(ch);
				if (italicCfg.has(config.selector))
					for (const ch of gr.descSampleText) hotCharSetItalic.add(ch);
			}
		}
		result.push({
			tag,
			effective: true,
			description: composition.description,
			uprightComposition: Array.from(uprightCfg),
			italicComposition: Array.from(italicCfg),
			hotCharSetUpright: Array.from(hotCharSetUpright),
			hotCharSetItalic: Array.from(hotCharSetItalic)
		});
	}
	return result;
}
