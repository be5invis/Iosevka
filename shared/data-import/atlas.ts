import rawAtlas_Sans from "./raw/atlas-Iosevka.json";
import rawAtlas_Aile from "./raw/atlas-IosevkaAile.json";
import rawAtlas_Etoile from "./raw/atlas-IosevkaEtoile.json";
import rawAtlas_Slab from "./raw/atlas-IosevkaSlab.json";

export type SingleFeatureApp = {
	css: string;
	description?: string;
};
export type FeatureSeries = {
	name: string;
	size: number;
	groups: SingleFeatureApp[][];
};
export type Block = {
	name: string;
	characters: Character[];
};
export type Character = {
	lch: number;
	inFont: boolean;
	isCompositeOrLigature?: boolean;
	typographicFeatureSets?: number[];
	cvFeatureSetsUpright?: number[];
	cvFeatureSetsItalic?: number[];
	cvFeatureSetsOblique?: number[];
};

export type Atlas = {
	featureSeries: FeatureSeries[];
	unicodeCoverage: Block[];
};

export const Atlas_Sans = rawAtlas_Sans as Atlas;
export const Atlas_Slab = rawAtlas_Slab as Atlas;
export const Atlas_Aile = rawAtlas_Aile as Atlas;
export const Atlas_Etoile = rawAtlas_Etoile as Atlas;
