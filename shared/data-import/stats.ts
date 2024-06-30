import { CharacterVariants, StylisticSets } from "./cv";
import SupportedLanguages from "./languages";
import { AvailableLigationSets } from "./ligation";
import rawAtlasShared from "./raw/atlas-shared.json";

const Stats = {
    ...rawAtlasShared.stats,
    supportedLanguages: SupportedLanguages.length,
    characterVariants: Array.from(CharacterVariants).length,
    stylisticSets: Array.from(StylisticSets).filter(([k, ss]) => ss.rank && ss.tag).length,
    ligationSets: AvailableLigationSets.filter((lig) => !!lig.rank).length,
    extraOtFeatures: 2,
    weightCount: 9,
    slopeCount: 3,
    widthCount: 2,
};

export default Stats;
