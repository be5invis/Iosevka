import * as Cv from "../data-import/cv";
import * as Gr from "../data-import/grades";
import * as Ligation from "../data-import/ligation";

export type CharacterVariantChoice = {
	readonly inherits?: Cv.StylisticSet;
	readonly design?: Cv.VariantComposition;
	readonly upright?: Cv.VariantComposition;
	readonly italic?: Cv.VariantComposition;
	readonly oblique?: Cv.VariantComposition;
};
export const DefaultCvChoice: CharacterVariantChoice = { inherits: Cv.NopStylisticSet };
export type ChoiceResolutionContext = {
	readonly isSlab: boolean;
	readonly slope: Gr.Slope;
};
export type Highlights = ReadonlyMap<string, Gr.FeatureAssignment>;

export type SlopeKey = "design" | "upright" | "italic" | "oblique";
export const SlopeKeys: SlopeKey[] = ["design", "upright", "italic", "oblique"];

export function variantChoiceIsDefault(uc: CharacterVariantChoice) {
	if (uc.inherits) return false;
	for (const k of SlopeKeys) {
		const dict = uc[k];
		if (dict && Object.keys(dict).length) return false;
	}
	return true;
}

export function resolveUserChoice(uc: CharacterVariantChoice, ctx: ChoiceResolutionContext) {
	const variantDefaults = styleSlopePick6(ctx.isSlab, ctx.slope, Cv.CharacterVariantDefaults);
	const ss = uc.inherits || null;
	const compositionInherited = !ss
		? null
		: styleSlopePick6(ctx.isSlab, ctx.slope, ss.composition);
	const resolvedCompositionInherited: Cv.VariantComposition = Object.assign(
		{},
		variantDefaults,
		ss?.rank ? compositionInherited : null,
	);

	const resolvedCompositionNS: Cv.VariantComposition = Object.assign(
		{},
		variantDefaults,
		compositionInherited,
		uc.design,
	);
	const resolvedComposition: Cv.VariantComposition = Object.assign(
		{},
		variantDefaults,
		compositionInherited,
		uc.design,
		slopePick3ABC(ctx.slope, uc.upright, uc.italic, uc.oblique),
	);

	const resolvedNonDefaultComposition: Cv.VariantCompositionW = {};
	const hotChars = new Map<string, Gr.FeatureAssignment>();
	const featureAssignment: Gr.FeatureAssignmentW = {};
	const nonDefaultFeatureAssignment: Gr.FeatureAssignmentW = {};
	const userFriendlyFeatureAssignment: Gr.FeatureAssignmentW = {};
	if (ss && ss.rank) userFriendlyFeatureAssignment[ss.tag] = 1;

	for (const k in resolvedComposition) {
		const prime = Cv.CharacterVariants.get(k);
		if (!prime || !prime.tag) continue;
		const variant = prime.variants.get(resolvedComposition[k]);
		if (!variant) continue;

		featureAssignment[prime.tag] = variant.rank || 0;
		if (resolvedComposition[k] !== variantDefaults[k]) {
			resolvedNonDefaultComposition[k] = resolvedComposition[k];
			nonDefaultFeatureAssignment[prime.tag] = variant.rank || 0;
			for (const hc of prime.hotChars) {
				hotChars.set(hc, { ...hotChars.get(hc), [prime.tag]: variant.rank || 0 });
			}
		}
		if (resolvedComposition[k] !== resolvedCompositionInherited[k]) {
			userFriendlyFeatureAssignment[prime.tag] = variant.rank || 0;
		}
	}

	const stepHotChars: Map<string, Gr.FeatureAssignment> = new Map(hotChars);
	for (const k in resolvedCompositionNS) {
		if (resolvedCompositionNS[k] !== resolvedCompositionInherited[k]) {
			const prime = Cv.CharacterVariants.get(k);
			if (!prime || !prime.tag) continue;
			const variant = prime.variants.get(resolvedComposition[k]);
			if (!variant) continue;
			for (const hc of prime.hotChars) {
				stepHotChars.set(hc, { ...stepHotChars.get(hc), [prime.tag]: variant.rank || 0 });
			}
		}
	}
	return {
		resolvedComposition,
		resolvedNonDefaultComposition,
		featureAssignment,
		nonDefaultFeatureAssignment,
		userFriendlyFeatureAssignment,
		hotChars,
		stepHotChars: stepHotChars,
	};
}

export function cvSort(subject: Cv.VariantComposition): Cv.VariantComposition {
	const out: Cv.VariantCompositionW = {};
	for (const [k, _] of Cv.CharacterVariants) {
		if (subject[k]) out[k] = subject[k];
	}
	return out;
}

export function getCompositionOverride(
	subject: Cv.VariantComposition,
	defaultComp: Cv.VariantComposition,
): null | Cv.VariantComposition {
	let empty = true;
	const out: Cv.VariantCompositionW = {};

	for (const k in subject) {
		if (subject[k] != defaultComp[k]) {
			out[k] = subject[k];
			empty = false;
		}
	}
	if (empty) {
		return null;
	} else {
		return cvSort(out);
	}
}

function styleSlopePick6<T>(fSlab: boolean, slope: Gr.Slope, ss: Cv.PerStyleSlope<T>) {
	if (fSlab) return slopePick3(slope, ss.slab);
	else return slopePick3(slope, ss.sans);
}
function slopePick3<T>(slope: Gr.Slope, a: Cv.PerSlope<T>): T {
	switch (slope) {
		case Gr.Slope.Upright:
			return a.upright;
		case Gr.Slope.Italic:
			return a.italic;
		case Gr.Slope.Oblique:
			return a.oblique;
		default:
			return a.upright;
	}
}
function slopePick3ABC<T>(slope: Gr.Slope, a: T, b: T, c: T): T {
	switch (slope) {
		case Gr.Slope.Upright:
			return a;
		case Gr.Slope.Italic:
			return b;
		case Gr.Slope.Oblique:
			return c;
		default:
			return a;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export type DeliverableCustomizerProps = {
	readonly serifStyle: Gr.SerifStyle;
	readonly charVariants: CharacterVariantChoice;
	readonly ligationSet: Ligation.LigationSet;
};

export function createCustomizerPropsFromUrl<T extends DeliverableCustomizerProps>(st0: T): T {
	let st = { ...st0 };
	if (!globalThis || !globalThis.location) return st;
	const urlParams = new URLSearchParams(globalThis.location.search);

	if (urlParams.get("slab")) {
		st = { ...st, serifStyle: Gr.SerifStyle.Slab };
	}

	if (urlParams.get("ss-inherits")) {
		const ss = urlParams.get("ss-inherits");
		if (ss && Cv.StylisticSets.has(ss))
			st = { ...st, charVariants: { inherits: Cv.StylisticSets.get(ss) } };
	}

	const designOverride: { [k: string]: string } = {};
	for (const [k0, v] of urlParams) {
		if (k0.slice(0, 3) !== "cv-") continue;
		const k = k0.slice(3);
		if (Cv.CharacterVariants.get(k)) designOverride[k] = v;
	}
	if (Object.keys(designOverride).length) {
		st = { ...st, charVariants: { ...st.charVariants, design: designOverride } };
	}

	if (urlParams.get("ligation-off") === "true") {
		st = { ...st, ligationSet: Ligation.AvailableLigationSets[0] };
	} else {
		const lsUser = urlParams.get("ligations");
		for (const ls of Ligation.AvailableLigationSets) {
			if (lsUser && ls.selector && ls.selector === lsUser) st = { ...st, ligationSet: ls };
		}
	}

	setTimeout(() => {
		globalThis.history.pushState(
			null,
			"Iosevka Customizer",
			globalThis.location.origin + globalThis.location.pathname,
		);
	}, 0);

	return st;
}

export function createUrlFromCustomizerProps<T extends DeliverableCustomizerProps>(st: T) {
	let s = "";
	if (st.serifStyle === Gr.SerifStyle.Slab) {
		s += (s ? "&" : "") + `slab=1`;
	}
	if (st.charVariants.inherits && st.charVariants.inherits !== Cv.NopStylisticSet) {
		s += (s ? "&" : "") + `ss-inherits=${st.charVariants.inherits.key}`;
	}
	if (st.charVariants.design) {
		for (const key in st.charVariants.design) {
			s +=
				(s ? "&" : "") +
				"cv-" +
				key +
				"=" +
				encodeURIComponent(st.charVariants.design[key]);
		}
	}
	if (st.ligationSet.selector) {
		s += (s ? "&" : "") + `ligations=${st.ligationSet.selector}`;
	} else {
		s += (s ? "&" : "") + `ligation-off=true`;
	}
	return s;
}
