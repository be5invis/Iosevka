import fs from "fs";
import path from "path";

import * as toml from "@iarna/toml";
import * as VariantDataParser from "@iosevka/param/variant";

function getCvData(parsed) {
	const samplerGroups = new Map();
	for (const [_keyPrime, prime] of parsed.primes) {
		if (!prime.sampler) continue;
		samplerGroups.set(prime.key, prime.toJson());
	}
	return Array.from(samplerGroups.values());
}
function getSpecialVariantsData(parsed) {
	let result = new Map();
	for (const [keyPrime, prime] of parsed.primes) {
		if (!prime.isSpecial) continue;
		result.set(prime.key, prime.toJson());
	}
	return Array.from(result.values());
}
const mockPara = {
	sans: {
		upright: {},
		oblique: { isOblique: true },
		italic: { isItalic: true },
	},
	slab: {
		upright: { slab: 2 },
		oblique: { slab: 2, isOblique: true },
		italic: { slab: 2, isItalic: true },
	},
};
function getSsData(variants) {
	const result = [
		{
			key: "off",
			tag: "off",
			rank: 0,
			description: "Default",
			composition: {
				sans: { upright: {}, italic: {}, oblique: {} },
				slab: { upright: {}, italic: {}, oblique: {} },
			},
			hotChars: {
				sans: { upright: [], italic: [], oblique: [] },
				slab: { upright: [], italic: [], oblique: [] },
			},
		},
	];
	const hcDefault = getCompWithLens(variants, null, x => x.hotChars);
	for (const [key, composite] of variants.composites) {
		if (!composite.tag) continue;
		result.push({
			key,
			tag: composite.tag,
			rank: 1,
			description: composite.description,
			composition: getCompWithLens(variants, composite, x => x.composition),
			hotChars: getCompWithLens(variants, composite, (x, style, slope) =>
				uniqueHotChars(x.hotChars, hcDefault[style][slope]),
			),
		});
	}
	return result;
}
function getCompWithLens(variants, c, lens) {
	const cDefault = variants.defaultComposite;
	const cSlab = variants.composites.get("slab");
	return {
		sans: {
			upright: lens(
				buildupComposite(variants, mockPara.sans.upright, cDefault, c),
				"sans",
				"upright",
			),
			italic: lens(
				buildupComposite(variants, mockPara.sans.italic, cDefault, c),
				"sans",
				"italic",
			),
			oblique: lens(
				buildupComposite(variants, mockPara.sans.oblique, cDefault, c),
				"sans",
				"oblique",
			),
		},
		slab: {
			upright: lens(
				buildupComposite(variants, mockPara.slab.upright, cDefault, cSlab, c),
				"slab",
				"upright",
			),
			italic: lens(
				buildupComposite(variants, mockPara.slab.italic, cDefault, cSlab, c),
				"slab",
				"italic",
			),
			oblique: lens(
				buildupComposite(variants, mockPara.slab.oblique, cDefault, cSlab, c),
				"slab",
				"oblique",
			),
		},
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
		if (!composite) continue;
		for (const [prime, variant] of composite.decompose(para, variants.selectorTree)) {
			if (!prime.sampler) continue;
			const key = getSelectorKey(prime, variant);
			if (prime.hotChars) {
				for (const ch of prime.hotChars) hotChars.set(ch, key);
			} else if (isLigatureSampler(prime)) {
				for (const ch of prime.sampler.split(" ")) hotChars.set(ch, key);
			} else {
				for (const ch of prime.sampler) hotChars.set(ch, key);
			}
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

export async function parseVariantsData(argv) {
	const variantsToml = await fs.promises.readFile(
		path.join(argv.paramsDir, argv.paramsFileName || "variants.toml"),
		"utf8",
	);
	const varDatRaw = toml.parse(variantsToml);
	const varDatParsed = VariantDataParser.parse(varDatRaw);
	const primes = getCvData(varDatParsed);
	const specials = getSpecialVariantsData(varDatParsed);
	const composites = getSsData(varDatParsed);
	const defaults = getCompWithLens(varDatParsed, null, x => x.composition);
	return { primes, composites, specials, defaults };
}
