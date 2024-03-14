import * as Toml from "@iarna/toml";

import * as Cv from "../data-import/cv";
import * as Gr from "../data-import/grades";
import * as Ligation from "../data-import/ligation";
import * as StyleHelper from "../utils/style-helper";

export type CustomizerProps = StyleHelper.DeliverableCustomizerProps & {
    readonly family: string;
    readonly serifStyle: Gr.SerifStyle;
    readonly spacing: Gr.Spacing;
    readonly defaultWidthAtExpanded: boolean;
    readonly weightGradesIncluded: Set<Gr.Weight>;
    readonly widthGradesIncluded: Set<Gr.Width>;
    readonly slopeGradesIncluded: Set<Gr.Slope>;
    readonly fDisplayHighlight: boolean;
    readonly fExportCvSs: boolean;
    readonly fExportGlyphNames: boolean;
};

export const defaultCustomizerProps: CustomizerProps = {
    family: "Iosevka Custom",
    serifStyle: Gr.SerifStyle.Sans,
    spacing: Gr.Spacing.Normal,
    defaultWidthAtExpanded: false,
    charVariants: {},
    weightGradesIncluded: new Set(Gr.DefaultWeightGrades.keys()),
    widthGradesIncluded: new Set(Gr.DefaultWidthGrade.keys()),
    slopeGradesIncluded: new Set(Gr.DefaultSlopeGrade.keys()),
    ligationSet: Ligation.AvailableLigationSets[1],
    fDisplayHighlight: true,
    fExportCvSs: false,
    fExportGlyphNames: false,
};

///////////////////////////////////////////////////////////////////////////////////////////////////

export function parseCustomization(tomlText: string, sink: CustomizerProps) {
    const toml = Toml.parse(tomlText);
    if (!isJsonMap(toml.buildPlans)) return sink;
    for (const [key, plan] of Object.entries(toml.buildPlans)) {
        if (!isJsonMap(plan)) continue;
        if (typeof plan.family === "string") sink = { ...sink, family: plan.family };
        if (typeof plan.spacing === "string")
            sink = { ...sink, spacing: parseSpacingGrade(plan.spacing) };
        if (typeof plan.serifs === "string")
            sink = { ...sink, serifStyle: parseSerifsGrade(plan.serifs) };
        if (typeof plan.noCvSs === "boolean") sink = { ...sink, fExportCvSs: !plan["noCvSs"] };
        if (typeof plan.exportGlyphNames === "boolean")
            sink = { ...sink, fExportGlyphNames: plan.exportGlyphNames };

        if (isJsonMap(plan.ligations)) sink = parseLigations(plan.ligations, sink);
        if (isJsonMap(plan.variants)) sink = parseCharVariants(plan.variants, sink);
        if (isJsonMap(plan.weights)) sink = parseWeights(plan.weights, sink);
        if (isJsonMap(plan.widths)) sink = parseWidths(plan.widths, sink);
        if (isJsonMap(plan.slopes)) sink = parseSlopes(plan.slopes, sink);
    }
    return sink;
}

function isJsonMap(x: unknown): x is Toml.JsonMap {
    if (!x) return false;
    if (typeof x !== "object") return false;
    if (x instanceof Array) return false;
    if (x instanceof Date) return false;
    return true;
}

function parseSpacingGrade(gr: string) {
    return Gr.SpacingGrades.find(Gr.Spacing.Normal, (g, f) => f.internal === gr);
}
function parseSerifsGrade(gr: string) {
    return Gr.DefaultSerifStyleGrades.find(Gr.SerifStyle.Sans, (g, f) => f.internal === gr);
}

function parseWeights(toml: Toml.JsonMap, sink: CustomizerProps) {
    const weights: Set<Gr.Weight> = new Set();
    for (const [k, v] of Object.entries(toml)) {
        if (!isJsonMap(v)) continue;
        if (typeof v.shape !== "number") continue;
        for (const [gr, f] of Gr.DefaultWeightGrades) if (gr === v.shape) weights.add(gr);
    }
    sink = { ...sink, weightGradesIncluded: weights };
    return sink;
}

function parseWidths(toml: Toml.JsonMap, sink: CustomizerProps) {
    const widths: Set<Gr.Width> = new Set();
    let defaultWidthAtExpanded = false;
    for (const [k, v] of Object.entries(toml)) {
        if (!isJsonMap(v)) continue;
        if (typeof v.shape !== "number") continue;
        if (typeof v.css !== "string") continue;

        // Find a grade matches the config's shape width.
        // If the CSS assignment mismatches, then we think defaultWidthAtExpanded switch is set
        for (const [gr, f] of Gr.CustomizerWidthGrade) {
            if (gr === v.shape) {
                widths.add(gr);
                if (v.css !== f.css) defaultWidthAtExpanded = true;
            }
        }
    }

    if (defaultWidthAtExpanded) {
        widths.add(Gr.Width.Expanded);
    } else {
        widths.add(Gr.Width.Normal);
    }

    return { ...sink, defaultWidthAtExpanded, widthGradesIncluded: widths };
}

function parseSlopes(toml: Toml.JsonMap, sink: CustomizerProps) {
    const slopes: Set<Gr.Slope> = new Set();
    for (const [k, v] of Object.entries(toml)) {
        if (!isJsonMap(v)) continue;
        if (typeof v.shape !== "string") continue;
        for (const [gr, f] of Gr.DefaultSlopeGrade) {
            if (f.shape === v.shape) slopes.add(gr);
        }
    }
    sink = { ...sink, slopeGradesIncluded: slopes };
    return sink;
}

function parseLigations(toml: Toml.JsonMap, sink: CustomizerProps) {
    if (typeof toml.inherits === "string") {
        for (const ligSet of Ligation.AvailableLigationSets) {
            if (ligSet.selector && ligSet.selector === toml.inherits) {
                sink = { ...sink, ligationSet: ligSet };
                return sink;
            }
        }
    }
    return sink;
}

function parseCharVariants(toml: Toml.JsonMap, sink: CustomizerProps) {
    let cvc: StyleHelper.CharacterVariantChoice = {};

    if (typeof toml.inherits === "string") {
        for (const [k, ss] of Cv.StylisticSets) {
            if (ss.key === toml.inherits) {
                cvc = { ...cvc, inherits: ss };
            }
        }
    }
    for (const slopeKey of StyleHelper.SlopeKeys) {
        const cfg = toml[slopeKey];
        if (!isJsonMap(cfg)) continue;
        const targetDict: Cv.VariantCompositionW = {};
        for (const [char, variant] of Object.entries(cfg)) {
            if (typeof variant !== "string") continue;
            targetDict[char] = variant;
        }
        cvc = { ...cvc, [slopeKey]: targetDict };
    }

    sink = { ...sink, charVariants: cvc };
    return sink;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function formatBuildPlan(cc: CustomizerProps) {
    const plan: Toml.JsonMap = {
        family: cc.family,
        spacing: Gr.SpacingGrades.get(cc.spacing)!.internal,
        serifs: Gr.DefaultSerifStyleGrades.get(cc.serifStyle)!.internal,
        noCvSs: !cc.fExportCvSs,
        exportGlyphNames: cc.fExportGlyphNames,
    };
    if (!cc.ligationSet.selector) plan.noLigation = true;
    formatVariants(cc, plan);
    formatLigations(cc, plan);
    formatWeights(cc, plan);
    formatWidths(cc, plan);
    formatSlopes(cc, plan);
    return plan;
}

function formatVariants(cc: CustomizerProps, plan: Toml.JsonMap) {
    const variants: Toml.JsonMap = {};
    if (cc.charVariants.inherits) variants.inherits = cc.charVariants.inherits.key;
    for (const k of StyleHelper.SlopeKeys) {
        const dict = cc.charVariants[k];
        if (!dict || !Object.keys(dict).length) continue;
        const targetDict: Cv.VariantCompositionW = {};
        for (const [k, p] of Cv.CharacterVariants) {
            if (dict[k]) targetDict[k] = dict[k];
        }
        variants[k] = targetDict;
    }
    if (Object.keys(variants).length) plan.variants = variants;
}

function formatLigations(cc: CustomizerProps, plan: Toml.JsonMap) {
    if (!cc.ligationSet.selector) return;
    if (cc.ligationSet === Ligation.AvailableLigationSets[1]) return;
    plan.ligations = { inherits: cc.ligationSet.selector };
}

function formatWeights(cc: CustomizerProps, plan: Toml.JsonMap) {
    let trivial = true;
    const weights: Toml.JsonMap = {};
    for (const [w, f] of Gr.DefaultWeightGrades) {
        if (!cc.weightGradesIncluded.has(w)) {
            trivial = false;
        } else {
            weights[f.display] = { shape: w, menu: w, css: w };
        }
    }
    if (!trivial) plan.weights = weights;
}

function formatWidths(cc: CustomizerProps, plan: Toml.JsonMap) {
    let trivial = !cc.defaultWidthAtExpanded;
    const widths: Toml.JsonMap = {};

    for (const [wd, f] of Gr.CustomizerWidthGrade) {
        if (cc.widthGradesIncluded.has(wd) !== Gr.DefaultWidthGrade.has(wd)) {
            trivial = false;
        }
        if (cc.widthGradesIncluded.has(wd)) {
            const adjustedWidth = wd * (cc.defaultWidthAtExpanded ? 500 / 600 : 1);
            let matchingWidth = Gr.Width.Normal;
            let matchingFmt = Gr.AllWidthGrade.get(matchingWidth)!;

            for (const [gr, fmt] of Gr.AllWidthGrade) {
                if (Math.abs(gr - adjustedWidth) < Math.abs(matchingWidth - adjustedWidth)) {
                    matchingWidth = gr;
                    matchingFmt = fmt;
                }
            }

            widths[matchingFmt.display] = {
                shape: wd,
                menu: matchingFmt.menu,
                css: matchingFmt.css,
            };
        }
    }

    if (!trivial) plan.widths = widths;
}
function formatSlopes(cc: CustomizerProps, plan: Toml.JsonMap) {
    let trivial = true;
    const slopes: Toml.JsonMap = {};
    for (const [w, f] of Gr.DefaultSlopeGrade) {
        if (!cc.slopeGradesIncluded.has(w)) {
            trivial = false;
        } else {
            slopes[f.display] = {
                angle: f.angle,
                shape: f.shape,
                menu: f.shape,
                css: f.css,
            };
        }
    }
    if (!trivial) plan.slopes = slopes;
}

export function resolveDisplayStyle(cc: CustomizerProps) {
    switch (cc.serifStyle) {
        case Gr.SerifStyle.Sans:
            if (cc.spacing === Gr.Spacing.QuasiProportional) return Gr.Style.QP;
            else if (cc.spacing === Gr.Spacing.QuasiProportionalExtOnly) return Gr.Style.QPE;
            else return Gr.Style.Sans;
        case Gr.SerifStyle.Slab:
            if (cc.spacing === Gr.Spacing.QuasiProportional) return Gr.Style.QPSlab;
            else if (cc.spacing === Gr.Spacing.QuasiProportionalExtOnly) return Gr.Style.QPESlab;
            else return Gr.Style.Slab;
    }
}

export function slopeToCustomizerStyleKey(s: Gr.Slope): StyleHelper.SlopeKey {
    switch (s) {
        case Gr.Slope.Upright:
            return "design";
        case Gr.Slope.Italic:
            return "italic";
        case Gr.Slope.Oblique:
            return "oblique";
        default:
            return "design";
    }
}

export function getResolvedBuildPlanCharVariants(
    cc: CustomizerProps,
    fReduce: boolean,
): StyleHelper.CharacterVariantChoice {
    const upright = StyleHelper.resolveUserChoice(cc.charVariants, {
        isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
        slope: Gr.Slope.Upright,
    });
    const italic = StyleHelper.resolveUserChoice(cc.charVariants, {
        isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
        slope: Gr.Slope.Italic,
    });
    const oblique = StyleHelper.resolveUserChoice(cc.charVariants, {
        isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
        slope: Gr.Slope.Oblique,
    });

    if (fReduce) {
        const planItalic = StyleHelper.getCompositionOverride(
            italic.resolvedComposition,
            upright.resolvedComposition,
        );

        const planOblique = StyleHelper.getCompositionOverride(
            oblique.resolvedComposition,
            upright.resolvedComposition,
        );

        const plan = {
            design: StyleHelper.cvSort(upright.resolvedNonDefaultComposition),
            ...(planItalic ? { italic: planItalic } : {}),
            ...(planOblique ? { oblique: planOblique } : {}),
        };

        return plan;
    } else {
        return {
            design: upright.resolvedNonDefaultComposition,
            italic: italic.resolvedNonDefaultComposition,
            oblique: oblique.resolvedNonDefaultComposition,
        };
    }
}

export function dropInheritedCvs(cc: CustomizerProps): CustomizerProps {
    return {
        ...cc,
        charVariants: getResolvedBuildPlanCharVariants(cc, false),
    };
}
