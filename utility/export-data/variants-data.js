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
	const defaults = getDefaultCompData(varDatParsed);
	const composites = getSsData(varDatParsed, defaults);

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

function getSsData(variants, defaultCompData) {
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
			hotCharSetUpright: uniqueHotChars(defaultCompData.sansUpright, upright.hotChars),
			hotCharSetItalic: uniqueHotChars(defaultCompData.sansItalic, italic.hotChars),
			hotCharSetOblique: uniqueHotChars(defaultCompData.sansOblique, oblique.hotChars)
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
function uniqueHotChars(cfgDefault, cfgSS) {
	let s = new Set();
	for (const [hc, v] of cfgSS) {
		if (cfgDefault.hotChars.get(hc) !== v) s.add(hc);
	}
	return Array.from(s);
}
