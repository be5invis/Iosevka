import rawMetadata from "./raw/metadata.json";

export type LigationCherry = {
	samples: string[];
	sampleRank?: number;
};
export type LigationCherryDict = { [key: string]: LigationCherry };
export type LigationSet = {
	readonly selector?: string;
	readonly tag: string;
	readonly rank: number;
	readonly brief: string;
	readonly desc: string;
	readonly ligSets: string[];
};

export const LigationSamples: string[][] = rawMetadata.ligationData.samplesNarrow;
export const AvailableLigationSets: LigationSet[] = rawMetadata.ligationData.nonMergeSets;
export const LigationCherryData: LigationCherryDict = rawMetadata.ligationData.cherry;
