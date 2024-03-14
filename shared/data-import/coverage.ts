import rawCoverage from "./raw/coverage.json";

export type SingleFeatureApp = {
    css: string;
    description?: string;
};
export type FeatureSeries = {
    name: string;
    size: number;
    groups: SingleFeatureApp[][];
};
export type CoverageBlock = {
    name: string;
    characters: CoverageCharacter[];
};
export type CoverageCharacter = {
    lch: number;
    charName?: string;
    glyphName?: string;
    gc: string;
    inFont: boolean;

    typographicFeatureSets?: number[];
    cvFeatureSetsUpright?: number[];
    cvFeatureSetsItalic?: number[];
    cvFeatureSetsOblique?: number[];
};

export const CovFeatureSeries = rawCoverage.featureSeries as FeatureSeries[];
export const CharacterCoverage = rawCoverage.unicodeCoverage as CoverageBlock[];
