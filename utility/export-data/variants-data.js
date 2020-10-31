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

	const primes = getCvData(varDatParsed);
	const composites = getSsData(varDatParsed);
	const defaults = getDefaultCompData(varDatParsed);

	return {
		primes,
		composites,
		defaults: defaults
	};
};

function getCvData(parsed) {
	const samplerGroups = new Map();
	for (const [_keyPrime, prime] of parsed.primes) {
		if (!prime.sampler) continue;
		samplerGroups.set(prime.key, prime.toJson());
	}
	return Array.from(samplerGroups.values());
}

const UPRIGHT = {};
const OBLIQUE = { isOblique: true };
const ITALIC = { isItalic: true };

function getSsData(variants) {
	const result = [
		{
			key: "off",
			tag: "off",
			rank: 0,
			description: "Default",
			uprightComposition: {},
			italicComposition: {},
			obliqueComposition: {},
			hotCharSetUpright: [],
			hotCharSetItalic: [],
			hotCharSetOblique: []
		}
	];

	const hcSansUpright = buildupComposite(variants, UPRIGHT, variants.defaultComposite).hotChars;
	const hcSansItalic = buildupComposite(variants, ITALIC, variants.defaultComposite).hotChars;
	const hcSansOblique = buildupComposite(variants, OBLIQUE, variants.defaultComposite).hotChars;

	for (const [key, composite] of variants.composites) {
		if (!composite.tag) continue;
		const upright = buildupComposite(variants, UPRIGHT, composite);
		const oblique = buildupComposite(variants, OBLIQUE, composite);
		const italic = buildupComposite(variants, ITALIC, composite);

		result.push({
			key,
			tag: composite.tag,
			rank: 1,
			description: composite.description,
			uprightComposition: upright.composition,
			italicComposition: italic.composition,
			obliqueComposition: oblique.composition,
			hotCharSetUpright: uniqueHotChars(hcSansUpright, upright.hotChars),
			hotCharSetItalic: uniqueHotChars(hcSansItalic, italic.hotChars),
			hotCharSetOblique: uniqueHotChars(hcSansOblique, oblique.hotChars)
		});
	}
	return result;
}

function getDefaultCompData(variants) {
	const cDefault = variants.defaultComposite;
	const cSlab = variants.composites.get("slab");
	return {
		sansUpright: buildupComposite(variants, UPRIGHT, cDefault).composition,
		sansItalic: buildupComposite(variants, ITALIC, cDefault).composition,
		sansOblique: buildupComposite(variants, OBLIQUE, cDefault).composition,
		slabUpright: buildupComposite(variants, UPRIGHT, cDefault, cSlab).composition,
		slabItalic: buildupComposite(variants, ITALIC, cDefault, cSlab).composition,
		slabOblique: buildupComposite(variants, OBLIQUE, cDefault, cSlab).composition
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
			if (!prime.sampler) continue;
			const key = getSelectorKey(prime, variant);
			for (const ch of prime.sampler) hotChars.set(ch, key);
			compositionMap.set(prime.key, variant.key);
		}
	}
	return { composition: Object.fromEntries(compositionMap), hotChars };
}
function uniqueHotChars(cfgDefault, cfgSS) {
	let s = new Set();
	for (const [hc, v] of cfgSS) {
		if (cfgDefault.get(hc) !== v) s.add(hc);
	}
	return Array.from(s);
}
