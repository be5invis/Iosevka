/* eslint-disable @typescript-eslint/no-explicit-any */
import rawMetadata from "./raw/metadata.json";

export type RawPrime = {
    readonly key: string;
    readonly sampler: string;
    readonly samplerExplain?: string;
    readonly tag?: string;
    readonly slopeDependent?: boolean;
    readonly ligatureSampler: boolean;
    readonly descSampleText: string[];
    readonly hotChars: string[];
    readonly variants: PrimeVariant[];
};
export type Prime = {
    readonly key: string;
    readonly sampler: string;
    readonly samplerExplain?: string;
    readonly tag?: string;
    readonly slopeDependent?: boolean;
    readonly ligatureSampler: boolean;
    readonly descSampleText: string[];
    readonly hotChars: string[];
    readonly variants: ReadonlyMap<string, PrimeVariant>;
};
export type PrimeVariant = {
    readonly key: string;
    readonly rank?: number;
    readonly groupRank?: number;
    readonly description?: string;
};
export type VariantComposition = { readonly [kPrime: string]: string };
export type VariantCompositionW = { [kPrime: string]: string };
export type PerSlope<T> = { readonly upright: T; readonly italic: T; readonly oblique: T };
export type PerStyleSlope<T> = { readonly sans: PerSlope<T>; readonly slab: PerSlope<T> };
export type StylisticSet = {
    readonly key: string;
    readonly tag: string;
    readonly rank: number;
    readonly description: string;
    readonly composition: PerStyleSlope<VariantComposition>;
};
export type VariantDefaults = PerStyleSlope<VariantComposition>;

export const CharacterVariants = parsePrimeMaps(rawMetadata.variantsData.primes);
export const StylisticSets = parseStylisticSets(rawMetadata.variantsData.composites as any);
export const CharacterVariantDefaults: VariantDefaults = rawMetadata.variantsData.defaults as any;
export const NopStylisticSet: StylisticSet = (rawMetadata.variantsData.composites as any)[0];

function parsePrimeMaps(raw: RawPrime[]) {
    const m = new Map<string, Prime>();
    for (const rp of raw) {
        const m1 = new Map<string, PrimeVariant>();
        for (const pv of rp.variants) {
            m1.set(pv.key, pv);
        }
        const prime: Prime = {
            key: rp.key,
            tag: rp.tag,
            sampler: rp.sampler,
            samplerExplain: rp.samplerExplain,
            slopeDependent: rp.slopeDependent,
            ligatureSampler: rp.ligatureSampler,
            descSampleText: rp.descSampleText,
            hotChars: rp.hotChars,
            variants: m1,
        };
        m.set(prime.key, prime);
    }
    return m;
}

function parseStylisticSets(raw: StylisticSet[]) {
    const m = new Map<string, StylisticSet>();
    for (const ss of raw) m.set(ss.key, ss);
    return m;
}
