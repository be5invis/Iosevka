export type FeatureAssignment = { readonly [tag: string]: number };
export type FeatureAssignmentW = { [tag: string]: number };

export type FontStyle = {
	// Font selection (to CSS classes)
	style?: null | undefined | Style;
	weight?: null | undefined | Weight;
	width?: null | undefined | Width;
	slope?: null | undefined | Slope;

	// OT
	spacingTag?: null | undefined | string;
	ligationTag?: null | undefined | string;
	ligationRank?: null | undefined | number;
	charVarTags?: null | undefined | FeatureAssignment;

	// Decoration
	markingsVisible?: boolean;
};

export type GradeFormat = { display: string };
export class GradeRepository<E extends number, F extends GradeFormat = GradeFormat> {
	private m_grades = new Map<E, F>();
	[Symbol.iterator]() {
		return this.m_grades[Symbol.iterator]();
	}
	get(gr: E) {
		return this.m_grades.get(gr);
	}
	has(gr: E) {
		return this.m_grades.has(gr);
	}
	keys() {
		return Array.from(this.m_grades.keys());
	}
	add(grade: E, format: F) {
		this.m_grades.set(grade, format);
		return this;
	}
	clone() {
		const duplicate = new GradeRepository<E, F>();
		duplicate.m_grades = new Map(this.m_grades);
		return duplicate;
	}

	find(defaultValue: E, fn: (gr: E, fmt: F) => boolean): E {
		for (const [gr, f] of this.m_grades) {
			if (fn(gr, f)) {
				return gr;
			}
		}
		return defaultValue;
	}
	subset(col: Iterable<E>) {
		const s = new Set(col);
		const gr = new GradeRepository<E>();
		for (const [k, v] of this.m_grades) {
			if (s.has(k)) gr.add(k, v);
		}
		return gr;
	}
	mapG(f: (k: E, v: F) => F) {
		const gr = new GradeRepository<E>();
		for (const [k, v] of this.m_grades) {
			gr.add(k, f(k, v));
		}
		return gr;
	}
	map<T>(f: (k: E, v: F) => T) {
		const result: T[] = [];
		for (const [k, v] of this.m_grades) {
			result.push(f(k, v));
		}
		return result;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum Spacing {
	Normal = 0,
	Term = 1,
	FontConfigMono = 2,
	Fixed = 3,
	QuasiProportional = 4,
	QuasiProportionalExtOnly = 6,
}
export type SpacingFormat = GradeFormat & { internal: string };
export const SpacingGrades = new GradeRepository<Spacing, SpacingFormat>()
	.add(Spacing.Normal, { display: "Normal", internal: "normal" })
	.add(Spacing.Term, { display: "Terminal", internal: "term" })
	.add(Spacing.FontConfigMono, { display: "FontConfig Mono", internal: "fontconfig-mono" })
	.add(Spacing.Fixed, { display: "Fixed", internal: "fixed" })
	.add(Spacing.QuasiProportional, {
		display: "Quasi-Proportional",
		internal: "quasi-proportional",
	})
	.add(Spacing.QuasiProportionalExtOnly, {
		display: "Quasi-Proportional (Extension Only)",
		internal: "quasi-proportional-extension-only",
	});

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum Style {
	Sans = 0x01,
	Slab = 0x02,
	QP = 0x03,
	QPSlab = 0x04,
	QPE = 0x05,
	QPESlab = 0x06,
	Aile = 0x07,
	Etoile = 0x08,
	FiraCode = 0x10,
	IbmPlex = 0x11,
}
export const DefaultStyleGrades = new GradeRepository<Style, SpacingFormat>()
	.add(Style.Sans, { display: "Sans", internal: "sans" })
	.add(Style.Slab, { display: "Slab", internal: "slab" });

export function styleHasWidth(sg: Style) {
	return sg === Style.Sans || sg === Style.Slab;
}
export function styleHasCvSs(_sg: Style) {
	return true;
}
export function styleHasOblique(_sg: Style) {
	return true;
}
export function styleReduceSlope(sg: Style, lg: null | undefined | Slope) {
	if (sg === Style.Aile && lg === Slope.Oblique) return Slope.Italic;
	else return lg ?? Slope.Upright;
}
export function styleReduceWidth(sg: Style, _wg: null | undefined | Width) {
	if (sg === Style.Etoile || sg === Style.Aile) return Width.Expanded;
	else return Width.Normal;
}
export function styleIsQp(sg: null | undefined | Style) {
	return (
		sg &&
		(sg === Style.Aile ||
			sg === Style.Etoile ||
			sg === Style.QP ||
			sg === Style.QPE ||
			sg === Style.QPSlab ||
			sg === Style.QPESlab)
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum SerifStyle {
	Sans = 0x01,
	Slab = 0x02,
}
export const DefaultSerifStyleGrades = new GradeRepository<SerifStyle, SpacingFormat>()
	.add(SerifStyle.Sans, { display: "Sans", internal: "sans" })
	.add(SerifStyle.Slab, { display: "Slab", internal: "slab" });

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum Weight {
	Thin = 100,
	ExtraLight = 200,
	Light = 300,
	Regular = 400,
	Book = 450,
	Medium = 500,
	SemiBold = 600,
	Bold = 700,
	ExtraBold = 800,
	Heavy = 900,
}
export type WeightFormat = { display: string };
export const DefaultWeightGrades = new GradeRepository<Weight, WeightFormat>()
	.add(Weight.Regular, { display: "Regular" })
	.add(Weight.Bold, { display: "Bold" });
export const AllWeightGrades = DefaultWeightGrades.clone()
	.add(Weight.Thin, { display: "Thin" })
	.add(Weight.ExtraLight, { display: "ExtraLight" })
	.add(Weight.Light, { display: "Light" })
	.add(Weight.Medium, { display: "Medium" })
	.add(Weight.SemiBold, { display: "SemiBold" })
	.add(Weight.ExtraBold, { display: "ExtraBold" })
	.add(Weight.Heavy, { display: "Heavy" });

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum Width {
	UltraCondensed = 348,
	ExtraCondensed = 380,
	Condensed = 416,
	SemiCondensed = 456,
	Normal = 500,
	SemiExpanded = 548,
	Expanded = 600,
	ExtraExpanded = 658,
	UltraExpanded = 720,
}
export type WidthFormat = {
	display: string;
	menu: number;
	css: string;
};
export const DefaultWidthGrades = new GradeRepository<Width, WidthFormat>()
	.add(Width.Normal, { display: "Normal", menu: 5, css: "normal" })
	.add(Width.Expanded, { display: "Extended", menu: 7, css: "expanded" });

export const AllWidthGrades = DefaultWidthGrades.clone()
	.add(Width.Condensed, { display: "Condensed", menu: 3, css: "condensed" })
	.add(Width.SemiCondensed, { display: "SemiCondensed", menu: 4, css: "semi-condensed" })
	.add(Width.SemiExpanded, { display: "SemiExtended", menu: 6, css: "semi-expanded" })
	.add(Width.ExtraExpanded, { display: "ExtraExtended", menu: 8, css: "extra-expanded" })
	.add(Width.UltraExpanded, { display: "UltraExtended", menu: 9, css: "ultra-expanded" });

///////////////////////////////////////////////////////////////////////////////////////////////////

export enum Slope {
	Upright = 1,
	Oblique = 2,
	Italic = 3,
}
export type SlopeFormat = GradeFormat & { angle: number; shape: string; css: string };
export const DefaultSlopeGrades = new GradeRepository<Slope, SlopeFormat>()
	.add(Slope.Upright, { display: "Upright", shape: "upright", angle: 0, css: "normal" })
	.add(Slope.Italic, { display: "Italic", shape: "italic", angle: 9.4, css: "italic" });
export const AllSlopeGrades = DefaultSlopeGrades.clone().add(Slope.Oblique, {
	display: "Oblique",
	shape: "oblique",
	angle: 9.4,
	css: "oblique",
});

///////////////////////////////////////////////////////////////////////////////////////////////////

export const DefaultFontStyle: FontStyle = {
	style: Style.Sans,
	weight: Weight.Regular,
	width: Width.Normal,
	slope: Slope.Upright,
};
export const DefaultSubtitleStyle: FontStyle = {
	...DefaultFontStyle,
	weight: Weight.Light,
};
export function fontStyleToCls(fs: FontStyle) {
	const classes: string[] = [];
	if (fs.style === Style.Sans) classes.push("sans");
	if (fs.style === Style.Slab) classes.push("slab");
	if (fs.style === Style.Aile) classes.push("aile");
	if (fs.style === Style.Etoile) classes.push("etoile");
	if (fs.style === Style.QP) classes.push("qp");
	if (fs.style === Style.QPSlab) classes.push("qp-slab");
	if (fs.style === Style.QPE) classes.push("qpe");
	if (fs.style === Style.QPESlab) classes.push("qpe-slab");
	if (fs.style === Style.FiraCode) classes.push("fira-code");
	if (fs.style === Style.IbmPlex) classes.push("ibm-plex");
	if (fs.weight) classes.push("w-" + fs.weight);
	if (fs.width) classes.push("wd-" + fs.width);
	if (fs.slope) classes.push("s-" + fs.slope);
	return classes.join(" ");
}
export function fontStyleToOtStyle(fs: FontStyle) {
	const s: string[] = [];
	if (fs.spacingTag && isValidTag(fs.spacingTag)) {
		s.push(`'${fs.spacingTag}' on`);
	}
	if (fs.ligationTag && isValidTag(fs.ligationTag)) {
		if (fs.ligationTag !== "calt") s.push(`'calt' off`);
		s.push(`'${fs.ligationTag}' ${fs.ligationRank || 0}`);
	}
	if (fs.charVarTags) {
		for (const tag in fs.charVarTags) {
			if (isValidTag(tag)) s.push(`'${tag}' ${fs.charVarTags[tag]}`);
		}
	}
	if (s.length) {
		return { fontFeatureSettings: s.join(", ") };
	} else {
		return {};
	}
}
function isValidTag(tag: string) {
	return tag && tag.length === 4;
}
