import rawAtlasShared from "./raw/atlas-shared.json";

type RawUnicodeDataMap = [number, string, string][];
const rawUnicodeDataMap = rawAtlasShared.udatMap as RawUnicodeDataMap;

export const unicodeGcMap = new Map();
export const unicodeNameMap = new Map();

for (const [u, gc, name] of rawUnicodeDataMap) {
    unicodeGcMap.set(u, gc);
    unicodeNameMap.set(u, name);
}
