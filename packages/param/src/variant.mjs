import { joinCamel } from "@iosevka/util";

export function apply(data, para, argv) {
	const parsed = parse(data, argv);
	let tagSet = new Set();
	for (const prime of parsed.primes.values()) {
		if (!prime.tag) continue;
		if (!tagSet.has(prime.tag)) tagSet.add(prime.tag);
		else throw new Error(`CV tag conflict: ${prime.tag}`);
	}
	const variantSelector = {};
	parsed.defaultComposite.resolve(para, parsed.selectorTree, parsed.composites, variantSelector);
	if (argv.shape.serifs === "slab") {
		const slabComp = parsed.composites.get("slab");
		slabComp.resolve(para, parsed.selectorTree, parsed.composites, variantSelector);
	}
	if (argv.variants) {
		const userComposite = new Composite("{user}", argv.variants);
		userComposite.resolve(para, parsed.selectorTree, parsed.composites, variantSelector);
	}
	para.variants = {
		selectorTree: parsed.selectorTree,
		primes: parsed.primes,
		composites: parsed.composites,
	};
	para.variantSelector = variantSelector;
}

export function parse(data, argv) {
	const primes = new Map();
	const selectorTree = new SelectorTree();
	const ta = new CvTagAllocator();
	for (const k in data.prime) {
		const p = new Prime(k, data.prime[k], ta);
		p.register(selectorTree);
		primes.set(k, p);
	}
	const defaultComposite = new Composite("{default}", data.default);
	const composites = new Map();
	for (const k in data.composite) {
		const comp = new Composite(k, data.composite[k]);
		composites.set(k, comp);
	}
	if (argv && argv.variantCompositesFromBuildPlan) {
		for (const k in argv.variantCompositesFromBuildPlan) {
			const key = `buildPlans.${k}`;
			const comp = new Composite(key, argv.variantCompositesFromBuildPlan[k]);
			composites.set(key, comp);
		}
	}
	return { selectorTree: selectorTree, primes, composites, defaultComposite };
}

class SelectorTree {
	constructor() {
		this.m_mapping = new Map();
	}
	get(kPrime, kVariant) {
		if (!this.m_mapping.has(kPrime)) return undefined;
		return this.m_mapping.get(kPrime).get(kVariant);
	}
	set(kPrime, kVariant, prime, variant) {
		if (!this.m_mapping.has(kPrime)) this.m_mapping.set(kPrime, new Map());
		this.m_mapping.get(kPrime).set(kVariant, [prime, variant]);
	}
	*[Symbol.iterator]() {
		for (const m of this.m_mapping.values()) yield* m.values();
	}
}

class CvTagAllocator {
	constructor() {
		this.cvCount = 1;
		this.kindWiseCount = new Map();
	}

	createTag(kind) {
		if (this.cvCount <= 99) {
			return `cv${String(this.cvCount++).padStart(2, "0")}`;
		} else {
			let n = this.kindWiseCount.get(kind) || 0;
			this.kindWiseCount.set(kind, ++n);
			return `${this.mapKindToTag(kind)}${this.mapNumberToLetter(n - 1)}`;
		}
	}

	mapKindToTag(kind) {
		switch (kind) {
			case "letter":
				return "VA";
			case "digit":
				return "VN";
			case "dot":
				return "VD";
			case "symbol":
				return "VS";
			case "ligature":
				return "VL";
		}
	}

	// map number from 0 1 2 3 ... to AA AB AC ...
	// 0 => AA, 1 => AB, ... 25 => BA, 26 => BB, ...
	// Result should be at least 2 characters
	mapNumberToLetter(n) {
		let ans = "";
		do {
			ans += String.fromCharCode((n % 26) + 0x41);
			n = Math.floor(n / 26);
		} while (n > 0);
		while (ans.length < 2) ans = "A" + ans;
		return ans;
	}
}

class Prime {
	constructor(key, cfg, ta) {
		this.key = key;
		if (cfg.nonBreakingTagForNewVariantSelector) {
			this.tag = cfg.nonBreakingTagForNewVariantSelector;
		} else if (cfg.tagKind) {
			this.tag = ta.createTag(cfg.tagKind);
		}
		this.sampler = cfg.sampler;
		this.samplerExplain = cfg.samplerExplain;

		this.isSpecial = cfg.isSpecial || false;
		this.description = cfg.description || null;
		this.ligatureSampler = / /.test(cfg.sampler || "");
		this.descSampleText = this.ligatureSampler
			? cfg.sampler.split(" ").filter(x => !!x.trim())
			: [...(cfg.sampler || "")];

		this.slopeDependent = !!cfg.slopeDependent;
		this.hotChars = cfg.hotChars ? [...cfg.hotChars] : this.descSampleText;

		this.cherryPicking = cfg.cherryPicking;

		this.variants = new Map();

		let variantConfig = cfg.variants;
		if (!variantConfig && cfg["variants-buildup"]) {
			const vb = new VariantBuilder(cfg["variants-buildup"]);
			variantConfig = vb.process();
		}
		if (!variantConfig) throw new Error(`Missing variants in ${key}`);
		for (const varKey in variantConfig) {
			const variant = variantConfig[varKey];
			this.variants.set(varKey, new PrimeVariant(varKey, this.tag, variant));
		}
	}
	register(tree) {
		for (const [k, v] of this.variants) tree.set(this.key, k, this, v);
		if (this.tag) {
			for (const v of this.variants.values()) if (v.rank) tree.set(this.tag, v.rank, this, v);
		}
	}
	toJson() {
		const gr = {
			key: this.key,
			sampler: this.sampler,
			samplerExplain: this.samplerExplain,
			isSpecial: this.isSpecial,
			description: this.description,
			tag: this.tag,
			slopeDependent: this.slopeDependent,
			ligatureSampler: this.ligatureSampler,
			descSampleText: this.descSampleText,
			hotChars: this.hotChars,
			variants: [],
		};
		for (const variant of this.variants.values()) {
			gr.variants.push({
				key: variant.key,
				rank: variant.rank,
				groupRank: variant.groupRank,
				description: variant.description,
				snapshotFeatureApplication: variant.snapshotFeatureApplication,
			});
		}
		gr.variants.sort((a, b) => (a.rank || 0x7fffffff) - (b.rank || 0x7fffffff));
		return gr;
	}
}

export class PrimeVariant {
	constructor(key, tag, cfg) {
		this.key = key;
		this.tag = tag;
		this.description = cfg.description;
		this.rank = cfg.rank;
		this.groupRank = cfg.groupRank || 0;
		this.selector = cfg.selector;
		this.nonDeriving = cfg.nonDeriving;
		this.snapshotFeatureApplication = cfg.snapshotFeatureApplication;
	}
	resolveFor(para, gn) {
		let vs = {};
		this.resolve(para, vs);
		return vs[gn];
	}
	resolve(para, vs) {
		Object.assign(vs, this.selector);
	}

	// Gr methods
	get(glyph) {
		if (glyph && glyph.related && glyph.related.cv) return glyph.related.cv.get(this);
		else return null;
	}
	set(glyph, toGid) {
		if (typeof toGid !== "string") throw new Error("Must supply a GID instead of a glyph");
		if (!glyph.related) glyph.related = {};
		if (!glyph.related.cv) glyph.related.cv = new Map();
		glyph.related.cv.set(this, toGid);
	}
	getPreventDeriving(glyph) {
		return (
			glyph.related &&
			glyph.related.preventCvDeriving &&
			!!glyph.related.preventCvDeriving.has(this)
		);
	}
	setPreventDeriving(glyph) {
		if (!glyph.related) glyph.related = {};
		if (!glyph.related.preventCvDeriving) glyph.related.preventCvDeriving = new Set();
		glyph.related.preventCvDeriving.add(this);
	}
	amendName(name) {
		return name + "." + this.tag + "-" + this.rank;
	}
	amendOtName(name) {
		return this.amendName(name);
	}
}

class Composite {
	constructor(key, cfg) {
		this.key = key;
		this.tag = cfg.tag;
		this.description = cfg.description;
		this.inherits = cfg.inherits;
		this.design = cfg.design;
		this.upright = cfg.upright || cfg["upright-oblique"];
		this.oblique = cfg.oblique || cfg["upright-oblique"];
		this.italic = cfg.italic;
		const slabOverrideCfg = cfg["slab-override"] || {};
		this.slabOverride = {
			design: slabOverrideCfg.design,
			override: slabOverrideCfg.upright || slabOverrideCfg["upright-oblique"],
			oblique: slabOverrideCfg.oblique || slabOverrideCfg["upright-oblique"],
			italic: slabOverrideCfg.italic,
		};
	}
	decompose(para, selTree) {
		const ans = [];
		const cfg = Object.assign(
			{},
			this.design,
			this.decomposeSlope(this, para),
			!para.slab ? {} : this.slabOverride.design,
			!para.slab ? {} : this.decomposeSlope(this.slabOverride, para),
		);
		for (const [k, v] of Object.entries(cfg)) {
			const pv = selTree.get(k, v);
			if (!pv) throw new Error(`Composite ${this.key} cannot be resolved: ${[k, v]}.`);
			ans.push(pv);
		}
		return ans;
	}
	decomposeSlope(base, para) {
		return para.isItalic ? base.italic : para.isOblique ? base.oblique : base.upright;
	}
	resolve(para, selTree, catalog, vs) {
		if (this.inherits) {
			if (!catalog.has(this.inherits)) {
				throw new Error(`Cannot find composite variant: ${this.inherits}`);
			}
			catalog.get(this.inherits).resolve(para, selTree, catalog, vs);
		}
		for (const [prime, variant] of this.decompose(para, selTree)) {
			variant.resolve(para, vs);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///
/// Systematic Variant Building
///

class VariantBuilder {
	constructor(cfg) {
		this.entry = cfg.entry;
		this.descriptionLeader = cfg.descriptionLeader;
		this.stages = new Map();
		for (const [key, stage] of Object.entries(cfg.stages)) {
			this.stages.set(key, new VbStage(key, stage));
		}
	}
	process() {
		const globalState = new VbGlobalState(this.entry, this.stages);
		const localState = new VbLocalState();
		localState.descriptionLeader = this.descriptionLeader;

		globalState.stages.get(this.entry).accept(globalState, localState);

		globalState.sink.sort(
			(a, b) =>
				a.nonBreakingVariantAdditionPriority - b.nonBreakingVariantAdditionPriority ||
				a.rank - b.rank,
		);

		let ans = {};
		let itemRank = 0;
		for (const item of globalState.sink) {
			let cfg = item.createPrimeVariant();
			cfg.rank = ++itemRank;
			if (!cfg.key) throw new Error("Invalid variant key");
			if (ans[cfg.key]) throw new Error("Duplicate variant : " + cfg.key);
			ans[cfg.key] = cfg;
		}
		return ans;
	}
}

class VbStage {
	constructor(stage, raw) {
		this.stage = stage;
		this.defaultAlternative = new VbStageAlternative(this.stage, "*", {});
		this.alternatives = new Map();
		for (const k in raw) {
			if (k === "*") {
				this.defaultAlternative = new VbStageAlternative(this.stage, "*", raw[k]);
			} else {
				this.alternatives.set(k, new VbStageAlternative(this.stage, k, raw[k]));
			}
		}

		for (const v of this.alternatives.values()) v.fallback(this.defaultAlternative);
	}
	accept(globalState, localState) {
		let variantList = Array.from(this.alternatives.values());
		variantList.sort((a, b) => (a.rank || 0) - (b.rank || 0));
		for (const v of variantList) {
			const ans = v.tryAccept(globalState, localState);
			if (ans) globalState.stages.get(ans.stage).accept(globalState, ans);
		}
	}
}

class VbStageAlternative {
	constructor(stage, key, raw) {
		this.stage = stage;
		this.key = key;
		this.rank = raw.rank;
		this.groupRank = raw.groupRank;
		this.nonBreakingVariantAdditionPriority = raw.nonBreakingVariantAdditionPriority || 0;
		this.next = raw.next;
		this.mode = raw.mode;
		this.enableIf = raw.enableIf;
		this.disableIf = raw.disableIf;
		if (key !== "*") this.keyAffix = raw.keyAffix ?? key;
		this.descriptionAffix = raw.descriptionAffix;
		this.descriptionJoiner = raw.descriptionJoiner || "with";
		this.selectorAffix = raw.selectorAffix;
	}
	fallback(defaultAlternative) {
		this.next = this.next || defaultAlternative.next;
		this.mode = this.mode || defaultAlternative.mode || "append";
		this.keyAffix = this.keyAffix || defaultAlternative.keyAffix;
		this.descriptionAffix = this.descriptionAffix || defaultAlternative.descriptionAffix;
		this.descriptionJoiner = this.descriptionJoiner || defaultAlternative.descriptionJoiner;
	}

	tryAccept(globalState, localState) {
		// Reject if disable conditions match
		if (this.enableIf && !this.evalCondition(this.enableIf, localState)) return null;
		if (this.disableIf && this.evalCondition(this.disableIf, localState)) return null;

		// Accept this alternative.
		const ans = localState.clone();
		ans.stage = this.next;
		ans.assignments.set(this.stage, this.key);

		// RankGroup
		if (this.groupRank) ans.groupRank += this.evalValue(this.groupRank, localState);
		else if (this.stage === globalState.entry) ans.groupRank += this.rank;

		// nonBreakingVariantAdditionPriority
		if (this.nonBreakingVariantAdditionPriority) {
			const p = this.evalValue(this.nonBreakingVariantAdditionPriority, localState);
			ans.nonBreakingVariantAdditionPriority += p;
		}

		if (this.keyAffix) ans.addKeyAffix(this.mode, this.evalValue(this.keyAffix, localState));
		if (this.descriptionJoiner && this.descriptionAffix) {
			ans.addDescription(
				this.mode,
				this.evalValue(this.descriptionJoiner, localState),
				this.evalValue(this.descriptionAffix, localState),
			);
		}
		if (this.selectorAffix) {
			for (const [selector, suffix] of Object.entries(this.selectorAffix))
				ans.addSelectorAffix(this.mode, selector, this.evalValue(suffix, localState));
		}

		if (!this.next || this.next === "END") {
			ans.rank = ++globalState.rank;
			globalState.sink.push(ans);
			return null;
		} else {
			return ans;
		}
	}

	evalValue(expr, localState) {
		if (typeof expr === "number") return expr;
		if (typeof expr === "string") return expr;
		if (expr.if) {
			const condition = this.evalCondition(expr.if, localState);
			if (condition) {
				return this.evalValue(expr.then, localState);
			} else {
				return this.evalValue(expr.else, localState);
			}
		}
		throw new Error(`Invalid value expression: ${expr}`);
	}

	evalCondition(expr, localState) {
		if (!expr) return false;

		for (const branch of expr) {
			let statementMatches = true;
			for (let [k, v] of Object.entries(branch)) {
				v = v.trim();
				if (/^NOT(?=\s)/.test(v)) {
					v = v.slice(3).trim();
					if (localState.assignments.get(k) === v) {
						statementMatches = false;
						break;
					}
				} else {
					if (localState.assignments.get(k) !== v) {
						statementMatches = false;
						break;
					}
				}
			}
			if (statementMatches) return true;
		}
		return false;
	}
}

class VbGlobalState {
	constructor(entry, stages) {
		this.entry = entry;
		this.stages = stages;
		this.rank = 0;
		this.sink = [];
	}
}

class VbLocalState {
	constructor() {
		this.stage = ".start";
		this.rank = 0;
		this.groupRank = 0;
		this.nonBreakingVariantAdditionPriority = 0;
		this.descriptionLeader = "";

		this.assignments = new Map();
		this.key = [];
		this.descriptions = new Map();
		this.selector = new Map();
	}

	clone() {
		const ans = new VbLocalState();
		ans.stage = this.stage;
		ans.rank = this.rank;
		ans.groupRank = this.groupRank;
		ans.nonBreakingVariantAdditionPriority = this.nonBreakingVariantAdditionPriority;
		ans.descriptionLeader = this.descriptionLeader;
		ans.assignments = new Map(this.assignments);
		ans.key = [...this.key];
		ans.selector = new Map(this.selector);
		ans.descriptions = new Map();
		for (const [k, v] of this.descriptions) ans.descriptions.set(k, [...v]);
		return ans;
	}

	addKeyAffix(mode, segment) {
		switch (mode) {
			case "append":
				this.key.push(segment);
				return;
			case "prepend":
				this.key.unshift(segment);
				return;
			case "replace":
				this.key = [segment];
				return;
			default:
				throw new Error(`Invalid key affix mode: ${mode}`);
		}
	}

	addDescription(mode, joiner, segment) {
		if (!segment) return;
		if (!this.descriptions.has(joiner)) this.descriptions.set(joiner, []);

		let descriptionSentence = this.descriptions.get(joiner);
		switch (mode) {
			case "append":
				descriptionSentence.push(segment);
				return;
			case "prepend":
				descriptionSentence.unshift(segment);
				return;
			case "replace":
				descriptionSentence.length = 0;
				descriptionSentence.push(segment);
				return;
			default:
				throw new Error(`Invalid description affix mode: ${mode}`);
		}
	}
	addSelectorAffix(mode, selector, value) {
		switch (mode) {
			case "append":
				this.selector.set(selector, joinCamel(this.selector.get(selector), value));
				return;
			case "prepend":
				this.selector.set(selector, joinCamel(value, this.selector.get(selector)));
				return;
			case "replace":
				this.selector.set(selector, value);
				return;
			default:
				throw new Error(`Invalid selector affix mode: ${mode}`);
		}
	}

	produceKey() {
		return this.key.join("-");
	}
	produceDescription() {
		let desc = [];
		for (const [joiner, segments] of this.descriptions) {
			if (!segments.length) continue;
			desc.push(`${joiner} ${arrayToSentence(segments)}`);
		}
		return this.descriptionLeader + " " + desc.join("; ");
	}

	createPrimeVariant() {
		return {
			key: this.produceKey(),
			rank: this.rank,
			groupRank: this.groupRank,
			description: this.produceDescription(),
			selector: Object.fromEntries(this.selector),
		};
	}
}

function arrayToSentence(arr) {
	if (arr.length == 1) return arr[0];
	let last = arr.pop();
	return arr.join(", ") + ", and " + last;
}
