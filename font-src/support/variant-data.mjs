import { joinCamel } from "./utils.mjs";

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
		composites: parsed.composites
	};
	para.variantSelector = variantSelector;
}

export function parse(data, argv) {
	const primes = new Map();
	const selectorTree = new SelectorTree();
	for (const k in data.prime) {
		const p = new Prime(k, data.prime[k]);
		p.register(selectorTree);
		primes.set(k, p);
	}
	const defaultComposite = new Composite("{default}", data.default);
	const composites = new Map();
	for (const k in data.composite) {
		const comp = new Composite(k, data.composite[k]);
		composites.set(k, comp);
	}
	if (argv && argv.compositesFromBuildPlan) {
		for (const k in argv.compositesFromBuildPlan) {
			const key = `buildPlans.${k}`;
			const comp = new Composite(key, argv.compositesFromBuildPlan[k]);
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

class Prime {
	constructor(key, cfg) {
		this.key = key;
		this.sampler = cfg.sampler;
		this.samplerExplain = cfg.samplerExplain;
		this.isSpecial = cfg.isSpecial || false;
		this.description = cfg.description || null;
		this.ligatureSampler = / /.test(cfg.sampler || "");
		this.descSampleText = this.ligatureSampler
			? cfg.sampler.split(" ").filter(x => !!x.trim())
			: [...(cfg.sampler || "")];
		this.tag = cfg.tag;
		this.slopeDependent = !!cfg.slopeDependent;
		this.hotChars = cfg.hotChars ? [...cfg.hotChars] : this.descSampleText;

		this.variants = new Map();

		let variantConfig = cfg.variants;
		if (!variantConfig && cfg["variants-buildup"]) {
			const vb = new VariantBuilder(cfg["variants-buildup"]);
			variantConfig = vb.process();
		}
		if (!variantConfig) throw new Error(`Missing variants in ${key}`);
		for (const varKey in variantConfig) {
			const variant = variantConfig[varKey];
			this.variants.set(varKey, new PrimeVariant(varKey, cfg.tag, variant));
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
			variants: []
		};
		for (const variant of this.variants.values()) {
			gr.variants.push({
				key: variant.key,
				rank: variant.rank,
				rankGroup: variant.rankGroup,
				description: variant.description,
				snapshotFeatureApplication: variant.snapshotFeatureApplication
			});
		}
		gr.variants.sort((a, b) => (a.rank || 0x7fffffff) - (b.rank || 0x7fffffff));
		return gr;
	}
}

class PrimeVariant {
	constructor(key, tag, cfg) {
		this.key = key;
		this.tag = tag;
		this.description = cfg.description;
		this.rank = cfg.rank;
		this.rankGroup = cfg.rankGroup || 0;
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
			italic: slabOverrideCfg.italic
		};
	}
	decompose(para, selTree) {
		const ans = [];
		const cfg = Object.assign(
			{},
			this.design,
			this.decomposeSlope(this, para),
			!para.slab ? {} : this.slabOverride.design,
			!para.slab ? {} : this.decomposeSlope(this.slabOverride, para)
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
		const globalState = new VbGlobalState(this.stages);
		const localState = new VbLocalState();
		localState.descriptionLeader = this.descriptionLeader;
		globalState.stages.get(this.entry).accept(globalState, localState);
		let ans = {};
		for (const item of globalState.sink) {
			let cfg = item.createPrimeVariant();
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
		this.next = raw.next;
		this.keySuffix = raw.keySuffix;
		this.descriptionSuffix = raw.descriptionSuffix;
		this.descriptionJoiner = raw.descriptionJoiner || "with";
		this.disableIf = raw.disableIf;
		this.selectorSuffix = raw.selectorSuffix;
	}
	fallback(defaultAlternative) {
		this.next = this.next || defaultAlternative.next;
		this.keySuffix = this.keySuffix || defaultAlternative.keySuffix;
		this.descriptionSuffix = this.descriptionSuffix || defaultAlternative.descriptionSuffix;
		this.descriptionJoiner = this.descriptionJoiner || defaultAlternative.descriptionJoiner;
		this.disableIf = this.disableIf || defaultAlternative.disableIf;
		this.selectorSuffix = this.selectorSuffix || defaultAlternative.selectorSuffix;
	}

	tryAccept(globalState, localState) {
		// Detect whether this alternative is applicable.
		if (this.disableIf) {
			for (const branch of this.disableIf) {
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
				if (statementMatches) return null;
			}
		}

		// Accept this alternative.
		const ans = localState.clone();
		ans.stage = this.next;
		ans.assignments.set(this.stage, this.key);
		if (this.keySuffix) ans.key.push(this.keySuffix);
		if (this.descriptionJoiner && this.descriptionSuffix)
			ans.addDescription(this.descriptionJoiner, this.descriptionSuffix);
		if (this.selectorSuffix)
			for (const [selector, suffix] of Object.entries(this.selectorSuffix))
				ans.addSelector(selector, suffix);

		if (!this.next) {
			ans.rank = ++globalState.rank;
			globalState.sink.push(ans);
			return null;
		} else {
			return ans;
		}
	}
}

class VbGlobalState {
	constructor(stages) {
		this.stages = stages;
		this.rank = 0;
		this.sink = [];
	}
}

class VbLocalState {
	constructor() {
		this.stage = ".start";
		this.rank = 0;
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
		ans.descriptionLeader = this.descriptionLeader;
		ans.assignments = new Map(this.assignments);
		ans.key = [...this.key];
		ans.selector = new Map(this.selector);
		ans.descriptions = new Map();
		for (const [k, v] of this.descriptions) ans.descriptions.set(k, [...v]);
		return ans;
	}

	addDescription(joiner, segment) {
		if (!this.descriptions.has(joiner)) this.descriptions.set(joiner, []);
		this.descriptions.get(joiner).push(segment);
	}
	addSelector(selector, value) {
		this.selector.set(selector, joinCamel(this.selector.get(selector), value));
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
			description: this.produceDescription(),
			selector: Object.fromEntries(this.selector)
		};
	}
}

function arrayToSentence(arr) {
	if (arr.length == 1) return arr[0];
	let last = arr.pop();
	return arr.join(", ") + " and " + last;
}
