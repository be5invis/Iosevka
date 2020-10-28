"use strict";

const fs = require("fs-extra");
const path = require("path");
const toml = require("@iarna/toml");

const VariantDataParser = require("../../font-src/support/variant-data");

module.exports = async function () {
	const variantsToml = await fs.readFile(
		path.join(__dirname, "../../params/variants.toml"),
		"utf8"
	);
	const varDatRaw = toml.parse(variantsToml);
	const varDatParsed = VariantDataParser.parse(varDatRaw);

	const cvData = getCvData(varDatParsed);
	const ssData = getSsData(varDatParsed);
	const defaultCompData = getDefaultCompData(varDatParsed);

	return {
		cvData,
		ssData,
		defaults: defaultCompData
	};
};

function getCvData(parsed) {
	const samplerGroups = new Map();
	for (const [_keyPrime, prime] of parsed.primes) {
		if (!prime.sampler) continue;
		let gr = samplerGroups.get(prime.key);
		if (!gr) {
			gr = {
				key: prime.key,
				sampler: prime.sampler,
				tag: prime.tag,
				ligatureSampler: isLigatureSampler(prime),
				descSampleText: isLigatureSampler(prime)
					? prime.sampler.split(" ")
					: [...prime.sampler],
				variants: []
			};
			samplerGroups.set(prime.key, gr);
		}
		for (const variant of prime.variants.values()) {
			gr.variants.push({
				selector: variant.key,
				fullSelector: getSelectorKey(prime, variant),
				rank: variant.rank,
				description: variant.description
			});
		}
		gr.variants.sort((a, b) => (a.rank || 0x7fffffff) - (b.rank || 0x7fffffff));
	}

	return Array.from(samplerGroups.values());
}

const UPRIGHT = {};
const OBLIQUE = { isOblique: true };
const ITALIC = { isItalic: true };

function getSsData(variants) {
	const result = [
		{
			tag: "off",
			effective: false,
			description: "Default",
			uprightComposition: [],
			italicComposition: [],
			obliqueComposition: [],
			hotCharSetUpright: [],
			hotCharSetItalic: [],
			hotCharSetOblique: []
		}
	];
	const defaultUpright = buildupComposite(variants, UPRIGHT, variants.defaultComposite);
	const defaultOblique = buildupComposite(variants, OBLIQUE, variants.defaultComposite);
	const defaultItalic = buildupComposite(variants, ITALIC, variants.defaultComposite);

	for (const [key, composite] of variants.composites) {
		if (!composite.tag) continue;
		const upright = buildupComposite(variants, UPRIGHT, composite);
		const oblique = buildupComposite(variants, OBLIQUE, composite);
		const italic = buildupComposite(variants, ITALIC, composite);

		result.push({
			tag: composite.tag,
			effective: true,
			description: composite.description,
			uprightComposition: upright.composition,
			italicComposition: italic.composition,
			obliqueComposition: oblique.composition,
			hotCharSetUpright: Array.from(uniqueHotChars(defaultUpright, upright.hotChars)),
			hotCharSetItalic: Array.from(uniqueHotChars(defaultItalic, italic.hotChars)),
			hotCharSetOblique: Array.from(uniqueHotChars(defaultOblique, oblique.hotChars))
		});
	}
	return result;
}

function getDefaultCompData(variants) {
	return {
		sansUpright: buildupComposite(variants, UPRIGHT, variants.defaultComposite),
		sansItalic: buildupComposite(variants, ITALIC, variants.defaultComposite),
		sansOblique: buildupComposite(variants, OBLIQUE, variants.defaultComposite),
		slabUpright: buildupComposite(
			variants,
			UPRIGHT,
			variants.defaultComposite,
			variants.composites.get("slab")
		),
		slabItalic: buildupComposite(
			variants,
			ITALIC,
			variants.defaultComposite,
			variants.composites.get("slab")
		),
		slabOblique: buildupComposite(
			variants,
			OBLIQUE,
			variants.defaultComposite,
			variants.composites.get("slab")
		)
	};
}

function getSelectorKey(prime, variant) {
	return prime.key + "#" + variant.key;
}

function isLigatureSampler(prime) {
	return / /.test(prime.sampler);
}

function buildupComposite(variants, para, ...composites) {
	let compositionMap = new Map();
	let hotChars = new Map();
	for (const composite of composites) {
		for (const [prime, variant] of composite.decompose(para, variants.selectorTree)) {
			if (!prime.sampler || isLigatureSampler(prime)) continue;
			const key = getSelectorKey(prime, variant);
			for (const ch of prime.sampler) hotChars.set(ch, key);
			compositionMap.set(prime.key, key);
		}
	}
	return { composition: Array.from(compositionMap.values()), hotChars };
}
function* uniqueHotChars(cfgDefault, cfgSS) {
	for (const [hc, v] of cfgSS) {
		if (cfgDefault.hotChars.get(hc) !== v) yield hc;
	}
}
