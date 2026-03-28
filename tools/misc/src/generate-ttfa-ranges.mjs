import fs from "node:fs";

import { ArrayUtil } from "@iosevka/util";
import { format, resolveConfig } from "prettier";

///////////////////////////////////////////////////////////////////////////////////////////////////

export default async function main(argv) {
	for (const target of Targets) {
		await target.filter.load();
	}

	const results = new Map();

	nextChar: for (let lch = 0; lch < 0x20000; lch++) {
		for (const target of Targets) {
			if (target.filter.has(lch)) {
				const resultKey = `${target.scriptTag}-${target.featureTag}`;
				let result = results.get(resultKey);
				if (!result) {
					result = [];
					results.set(resultKey, result);
				}
				result.push(lch);

				continue nextChar;
			}
		}
	}

	const out = [];

	for (const [key, value] of results) {
		out.push({
			scriptTag: key.split("-")[0],
			featureTag: key.split("-")[1],
			ranges: ArrayUtil.toRanges(value),
		});
	}

	// Perform codegen
	const options = await resolveConfig(argv.out);
	const sourceRaw =
		`// Machine generated. Do not modify.\n` +
		`export default ` +
		JSON.stringify(out, null, "\t") +
		";\n";
	const sourceFormatted = await format(sourceRaw, { ...options, parser: "babel" });

	await fs.promises.writeFile(argv.out, sourceFormatted);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

class InUnicodeDataSet {
	constructor(subpath) {
		this.subpath = subpath;
		this.dataset = null;
	}

	async load() {
		if (this.dataset) return;
		const d = (await import(`@unicode/unicode-17.0.0/${this.subpath}/code-points.js`)).default;
		this.dataset = new Set(d);
	}

	has(lch) {
		return this.dataset.has(lch);
	}
}

class InScriptDataSet extends InUnicodeDataSet {
	constructor(script) {
		super(`Script/${script}`);
	}
}

class InBlockDataSet extends InUnicodeDataSet {
	constructor(block) {
		super(`Block/${block}`);
	}
}

class InGeneralCategoryDataSet extends InUnicodeDataSet {
	constructor(general_category) {
		super(`General_Category/${general_category}`);
	}
}

class InString {
	constructor(s) {
		this.s = s;
		this.dataset = null;
	}

	async load() {
		if (this.dataset) return;
		this.dataset = new Set(this.s);
	}

	has(lch) {
		return this.dataset.has(String.fromCodePoint(lch));
	}
}

class Negation {
	constructor(operand) {
		this.operand = operand;
	}
	async load() {
		await this.operand.load();
	}
	has(lch) {
		return !this.operand.has(lch);
	}
}

class Conjunct {
	constructor(operands) {
		this.operands = operands;
	}
	async load() {
		for (const operand of this.operands) await operand.load();
	}
	has(lch) {
		for (const operand of this.operands) if (!operand.has(lch)) return false;
		return true;
	}
}

class Disjunct {
	constructor(operands) {
		this.operands = operands;
	}
	async load() {
		for (const operand of this.operands) await operand.load();
	}
	has(lch) {
		for (const operand of this.operands) if (operand.has(lch)) return true;
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const Script = s => new InScriptDataSet(s);
const Block = b => new InBlockDataSet(b);
const GeneralCategory = gc => new InGeneralCategoryDataSet(gc);
const In = s => new InString(s);

const All = (...operands) => new Conjunct(operands);
const Either = (...operands) => new Disjunct(operands);
const Not = operand => new Negation(operand);

///////////////////////////////////////////////////////////////////////////////////////////////////

const LatinBase = {
	scriptTag: "latn",
	featureTag: "dflt",
	filter: Either(
		All(
			Script("Latin"),
			Either(GeneralCategory("Uppercase_Letter"), GeneralCategory("Lowercase_Letter")),
			Not(Block("Halfwidth_And_Fullwidth_Forms")),
		),
		Block("Currency_Symbols"),
		All(Block("Letterlike_Symbols"), Not(In("℀℁⅍℠℡™℻"))),
	),
};
const CyrillicBase = {
	scriptTag: "cyrl",
	featureTag: "dflt",
	filter: All(
		Script("Cyrillic"),
		Either(GeneralCategory("Uppercase_Letter"), GeneralCategory("Lowercase_Letter")),
	),
};
const GreekBase = {
	scriptTag: "grek",
	featureTag: "dflt",
	filter: All(
		Script("Greek"),
		Either(GeneralCategory("Uppercase_Letter"), GeneralCategory("Lowercase_Letter")),
	),
};
const DigitBase = {
	scriptTag: "latn",
	featureTag: "dflt",
	filter: Either(In("0123456789")),
};

const LatinSubscript = {
	scriptTag: "latb",
	featureTag: "dflt",
	filter: Either(In("ₐₑₔₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ")),
};
const GreekSubscript = {
	scriptTag: "latb",
	featureTag: "dflt",
	filter: Either(In("ᵦᵧᵨᵩᵪ")),
};
const CyrillicSubscript = {
	scriptTag: "latb",
	featureTag: "dflt",
	filter: Either(In("𞁑𞁒𞁓𞁔𞁧𞁕𞁖𞁗𞁘𞁩𞁙𞁨𞁚𞁛𞁜𞁝𞁞𞁟𞁠𞁡𞁢𞁣𞁪𞁤𞁥𞁦")),
};
const DigitSubscript = {
	scriptTag: "latb",
	featureTag: "dflt",
	filter: Either(In("₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎")),
};

const LatinSuperscript = {
	scriptTag: "latp",
	featureTag: "dflt",
	filter: Either(In("ªº"), All(Script("Latin"), Either(GeneralCategory("Modifier_Letter")))),
};
const GreekSuperscript = {
	scriptTag: "latp",
	featureTag: "dflt",
	filter: All(Script("Greek"), Either(GeneralCategory("Modifier_Letter"))),
};
const CyrillicSuperscript = {
	scriptTag: "latp",
	featureTag: "dflt",
	filter: All(Script("Cyrillic"), Either(GeneralCategory("Modifier_Letter"))),
};
const DigitSuperscript = {
	scriptTag: "latp",
	featureTag: "dflt",
	filter: Either(In("⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾")),
};

const LatinPunctuation = {
	scriptTag: "latn",
	featureTag: "dflt",
	filter: Either(
		Block("Basic_Latin"),
		Block("Latin_1_Supplement"),
		Block("General_Punctuation"),
		Block("Supplemental_Punctuation"),
	),
};

const Targets = [
	LatinBase,
	LatinSubscript,
	LatinSuperscript,
	GreekBase,
	GreekSubscript,
	GreekSuperscript,
	CyrillicBase,
	CyrillicSubscript,
	CyrillicSuperscript,
	DigitBase,
	DigitSubscript,
	DigitSuperscript,
	LatinPunctuation,
];
