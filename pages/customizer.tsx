import * as Toml from "@iarna/toml";
import { pascalCase } from "change-case";
import { produce } from "immer";
import Head from "next/head";
import React, { createContext, useContext } from "react";
import { useLifecycles } from "react-use";

import {
	ActiveVariantKind,
	CharacterVariantPicker,
} from "../shared/components/character-variant-picker";
import { CheckGroup } from "../shared/components/check-group";
import {
	ImportConfigurationPopup,
	ImportConfigurationPopupEnableButton,
	PopupUxProps,
} from "../shared/components/customizer-import-popup";
import { EnumSelect } from "../shared/components/enum-select";
import { Section } from "../shared/components/section";
import { TokenizedCode } from "../shared/components/tokenized-code";
import {
	CustomizerProps,
	defaultCustomizerProps,
	formatBuildPlan,
	resolveDisplayStyle,
} from "../shared/customizer";
import * as Cv from "../shared/data-import/cv";
import * as Gr from "../shared/data-import/grades";
import * as Ligation from "../shared/data-import/ligation";
import { LigationSamplerInnerImpl } from "../shared/index-parts/ligature-sampler";
import * as tokenizedSampleCode from "../shared/tokenized-sample-code";
import { joinCls } from "../shared/utils/join-classes";
import { Ptr, useStatePtr } from "../shared/utils/ptr";
import * as StyleHelper from "../shared/utils/style-helper";

export default function Customizer() {
	const pCC = useStatePtr(defaultCustomizerProps);
	const pUx = useStatePtr(defaultUxProps);
	useLifecycles(
		() => {
			setTimeout(() => {
				pCC.set(StyleHelper.createCustomizerPropsFromUrl(pCC.val));
			}, 0);
		},
		() => {},
	);

	return (
		<CustomizerCtx.Provider value={pCC}>
			<UxContext.Provider value={pUx}>
				<div className="page">
					<Head>
						<title>Iosevka Customizer</title>
					</Head>
					<Section className="customizer">
						<div className="config-panel introduction">
							<h1>Iosevka Customizer</h1>
							<CustomizerBanner />
						</div>
					</Section>
					<Section className="customizer">
						<div className="config-panel">
							<CustomizerHeader index={1}>Basics</CustomizerHeader>
							<BasicsPanel />
						</div>
						<div className="config-co-panel">
							<BasicsPanel2 />
						</div>
					</Section>
					<Section className="customizer">
						<div className="config-panel">
							<CustomizerHeader index={2}>Variants</CustomizerHeader>
							<VariantsPanel />
						</div>
						<FloatingPreview />
					</Section>
					<Section className="customizer">
						<div className="config-panel">
							<CustomizerHeader index={3}>Ligations</CustomizerHeader>
							<LigationPanel />
							<LigationPreview />
						</div>
					</Section>
					<Section className="customizer">
						<div className="result-panel">
							<CustomizerHeader index={4}>Your Config</CustomizerHeader>
							<TomlResultPanel />
							<BuildInstructionsPanel />
						</div>
					</Section>
					<ImportConfigurationPopup pCc={pCC} pUx={pUx} />
				</div>
			</UxContext.Provider>
		</CustomizerCtx.Provider>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Customizer properties

const CustomizerCtx = createContext(Ptr.Default(defaultCustomizerProps));

// UX properties
type UxProps = PopupUxProps;
const defaultUxProps: UxProps = { popupVisible: false };
const UxContext = createContext(Ptr.Default(defaultUxProps));

///////////////////////////////////////////////////////////////////////////////////////////////////

function CustomizerBanner() {
	return (
		<p>
			Iosevka Customizer is a tool help creating{" "}
			<a href="https://github.com/be5invis/Iosevka/blob/master/doc/custom-build.md">
				Iosevka custom build configurations
			</a>
			.
		</p>
	);
}

type CustomizerHeaderProps = {
	index: number;
	children: string;
};
function CustomizerHeader(props: CustomizerHeaderProps) {
	return (
		<h2>
			<em>{String(props.index).padStart(2, "0")}</em> {props.children}
		</h2>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function BasicsPanel() {
	const pCc = useContext(CustomizerCtx);
	const pUx = useContext(UxContext);

	const pSerifStyle = Ptr.Lens(pCc, "serifStyle");

	return (
		<div className="customizer-body">
			<dl>
				<dt>Family Name</dt>
				<dd>
					<input
						type="text"
						value={pCc.val.family}
						onChange={x => Ptr.Lens(pCc, "family").set(x.target.value)}
					/>
				</dd>
			</dl>
			<dl>
				<dt>Serifs</dt>
				<dd>
					<EnumSelect
						options={Gr.DefaultSerifStyleGrades}
						value={pSerifStyle.val}
						onChange={pSerifStyle.set}
					/>
				</dd>
			</dl>
			<dl>
				<dt>Spacing</dt>
				<dd>
					<EnumSelect
						value={pCc.val.spacing}
						options={Gr.SpacingGrades}
						onChange={Ptr.Lens(pCc, "spacing").set}
					/>
				</dd>
			</dl>
			<dl>
				<dt></dt>
				<dd>
					<ImportConfigurationPopupEnableButton {...pUx} />
				</dd>
			</dl>
		</div>
	);
}
function BasicsPanel2() {
	const pCc = useContext(CustomizerCtx);
	const { val: cc, set: setCC } = pCc;

	const pfExportCvSs = Ptr.Lens(pCc, "fExportCvSs");
	const pfExportGlyphNames = Ptr.Lens(pCc, "fExportGlyphNames");
	return (
		<div className="customizer-body">
			<dl>
				<dt>Weights</dt>
				<GradeCheckBoxList
					source={Gr.DefaultWeightGrades.keys()}
					fEnabled={x => cc.weightGradesIncluded.has(x)}
					formatter={WeightGradeFormatter}
					fInteractive={x => x !== Gr.Weight.Regular}
					sink={(a, c) => {
						const s = new Set(cc.weightGradesIncluded);
						if (c) s.delete(a);
						else s.add(a);
						setCC({ ...cc, weightGradesIncluded: s });
					}}
				/>
			</dl>
			<dl>
				<dt>Widths</dt>
				<GradeCheckBoxList
					dummies={2}
					source={Gr.CustomizerWidthGrade.keys()}
					fEnabled={x => cc.widthGradesIncluded.has(x)}
					formatter={WidthGradeFormatter}
					fInteractive={x =>
						x !== (cc.defaultWidthAtExpanded ? Gr.Width.Expanded : Gr.Width.Normal)
					}
					sink={(a, c) => {
						const s = new Set(cc.widthGradesIncluded);
						if (c) s.delete(a);
						else s.add(a);
						setCC({ ...cc, widthGradesIncluded: s });
					}}
				/>
			</dl>
			<dl>
				<dt>Slopes</dt>
				<GradeCheckBoxList
					source={Gr.DefaultSlopeGrade.keys()}
					fEnabled={x => cc.slopeGradesIncluded.has(x)}
					formatter={SlopeGradeFormatter}
					fInteractive={x => x !== Gr.Slope.Upright}
					sink={(a, c) => {
						const s = new Set(cc.slopeGradesIncluded);
						if (c) s.delete(a);
						else s.add(a);
						setCC({ ...cc, slopeGradesIncluded: s });
					}}
				/>
			</dl>
			<dl>
				<dt></dt>
				<dd>
					<CheckGroup
						label="Default width being 600"
						value={cc.defaultWidthAtExpanded}
						onChange={x => {
							// Ensure the default width is included
							const s = new Set(cc.widthGradesIncluded);
							if (x) s.add(Gr.Width.Expanded);
							else s.add(Gr.Width.Normal);
							setCC({ ...cc, defaultWidthAtExpanded: x, widthGradesIncluded: s });
						}}
					/>
				</dd>
			</dl>
			<dl>
				<dt></dt>
				<dd>
					<CheckGroup
						label="Export cv## / ss## OpenType features"
						value={pfExportCvSs.val}
						onChange={pfExportCvSs.set}
					/>
				</dd>
			</dl>
			<dl>
				<dt></dt>
				<dd>
					<CheckGroup
						label={
							<>
								Export glyph names for{" "}
								<a href="https://sw.kovidgoyal.net/kitty/">Kitty</a>
							</>
						}
						value={pfExportGlyphNames.val}
						onChange={pfExportGlyphNames.set}
					/>
				</dd>
			</dl>
		</div>
	);
}

type GradesFormatter<E> = {
	order(a: E, b: E): number;
	identifier(value: E): string;
	display(value: E): string;
	titleT(value: E, i: boolean): string;
	getFontStyle(values: E): Gr.FontStyle;
};
type GradeCheckBoxListProps<E> = {
	dummies?: number;
	className?: string;
	source: Iterable<E>;
	fEnabled: (item: E) => boolean;
	sink: (item: E, currentlyEnabled: boolean) => void;
	fInteractive: (item: E) => boolean;
	formatter: GradesFormatter<E>;
};
function GradeCheckBoxList<E>(props: GradeCheckBoxListProps<E>) {
	const a: React.ReactElement[] = [];
	const sorted = Array.from(props.source).sort(props.formatter.order);
	if (props.dummies) {
		for (let i = 0; i < props.dummies; i++) {
			a.push(<GradeCheckBoxDummy key={`dummy-${i}`} />);
		}
	}
	for (const item of sorted) {
		const interactive = props.fInteractive(item);
		a.push(
			<GradeCheckBox
				{...props}
				grade={item}
				key={props.formatter.identifier(item)}
				interactive={interactive}
				title={props.formatter.titleT(item, interactive)}
			/>,
		);
	}
	return <dd className={joinCls("grade-list", props.className)}>{a}</dd>;
}

function GradeCheckBoxDummy() {
	return <button disabled={true} className="thumb-check-box grade-button weight dummy" />;
}

type GradeCheckBoxProps<E> = GradeCheckBoxListProps<E> & {
	grade: E;
	interactive: boolean;
	title?: string;
};
function GradeCheckBox<E>(props: GradeCheckBoxProps<E>) {
	return (
		<button
			className={joinCls(
				"thumb-check-box grade-button weight",
				props.fEnabled(props.grade) ? "checked" : "unchecked",
				props.interactive ? "interactive" : "non-interactive",
				Gr.fontStyleToCls(props.formatter.getFontStyle(props.grade)),
			)}
			title={props.title}
			onClick={e => {
				if (props.interactive) props.sink(props.grade, props.fEnabled(props.grade));
				e.preventDefault();
				e.stopPropagation();
			}}
		>
			<span className="label">{props.formatter.display(props.grade)}</span>
		</button>
	);
}

const WeightGradeFormatter: GradesFormatter<Gr.Weight> = {
	order: (a, b) => a - b,
	identifier: a => `weight-${a}`,
	display: a => String(a),
	titleT: (a, i) => {
		const d = Gr.DefaultWeightGrades.get(a)!.display;
		return i
			? `Click to toggle whether weight ${d} is included.`
			: `Weight ${d} is always included and cannot be disabled.`;
	},
	getFontStyle: a => ({ ...Gr.DefaultFontStyle, weight: a }),
};
const WidthGradeFormatter: GradesFormatter<Gr.Width> = {
	order: (a, b) => a - b,
	identifier: a => `width-${a}`,
	display: a => String(a),
	titleT: (a, i) => {
		const d = Gr.CustomizerWidthGrade.get(a)!.display;
		return i
			? `Click to toggle whether weight ${d} is included.`
			: `Weight ${d} is always included and cannot be disabled.`;
	},
	getFontStyle: a => ({ ...Gr.DefaultFontStyle, width: a }),
};
const SlopeGradeFormatter: GradesFormatter<Gr.Slope> = {
	order: (a, b) => a - b,
	identifier: a => `slope-${a}`,
	display: a => Gr.Slope[a],
	titleT: (a, i) => {
		const d = Gr.DefaultSlopeGrade.get(a)!.display;
		return i
			? `Click to toggle whether slope ${d} is included.`
			: `Slope ${d} is always included and cannot be disabled.`;
	},
	getFontStyle: a => ({ ...Gr.DefaultFontStyle, slope: a }),
};

///////////////////////////////////////////////////////////////////////////////////////////////////

function SinkInheritance(pCC: Ptr<CustomizerProps>, k: Cv.StylisticSet) {
	pCC.set(
		produce(cc => {
			cc.charVariants.inherits = k === Cv.NopStylisticSet ? undefined : k;
		}),
	);
}
function CvSink(prime: Cv.Prime, into: StyleHelper.SlopeKey, pCC: Ptr<CustomizerProps>) {
	return (k: string) =>
		pCC.set(
			produce(cc => {
				if (!cc.charVariants[into]) cc.charVariants[into] = {};
				cc.charVariants[into]![prime.key] = k;
			}),
		);
}
function CvClearSink(prime: Cv.Prime, into: StyleHelper.SlopeKey, pCC: Ptr<CustomizerProps>) {
	return () =>
		pCC.set(
			produce(cc => {
				const cv = cc.charVariants[into] || {};
				delete cv[prime.key];
				cc.charVariants[into] = cv;
			}),
		);
}
function enableOverrideGroup(sk: StyleHelper.SlopeKey, pCC: Ptr<CustomizerProps>) {
	pCC.set(
		produce(cc => {
			cc.charVariants[sk] = { ...cc.charVariants.design };
		}),
	);
}
function clearOverrideGroup(sk: StyleHelper.SlopeKey, pCC: Ptr<CustomizerProps>) {
	pCC.set(
		produce(cc => {
			delete cc.charVariants[sk];
		}),
	);
}

function VariantsPanel() {
	const pCC = useContext(CustomizerCtx);

	return (
		<div className="customizer-body variants">
			<VariantsInheritanceField />
			<VariantGroup slopeKey="design" visible={true} />

			<CheckGroup
				label="Override Italics"
				value={Boolean(pCC.val.charVariants.italic)}
				onChange={x => {
					if (x) enableOverrideGroup("italic", pCC);
					else clearOverrideGroup("italic", pCC);
				}}
			/>
			<VariantGroup slopeKey="italic" visible={Boolean(pCC.val.charVariants.italic)} />

			<CheckGroup
				label="Override Oblique"
				value={Boolean(pCC.val.charVariants.oblique)}
				onChange={x => {
					if (x) enableOverrideGroup("oblique", pCC);
					else clearOverrideGroup("oblique", pCC);
				}}
			/>
			<VariantGroup slopeKey="oblique" visible={Boolean(pCC.val.charVariants.oblique)} />
		</div>
	);
}

function VariantsInheritanceField() {
	const pCC = useContext(CustomizerCtx);

	return (
		<dl>
			<dt>Inherits</dt>
			<dd>
				<select
					value={(pCC.val.charVariants.inherits || Cv.NopStylisticSet).key}
					onChange={x =>
						SinkInheritance(
							pCC,
							Cv.StylisticSets.get(x.target.value) || Cv.NopStylisticSet,
						)
					}
				>
					{Array.from(Cv.StylisticSets.values()).map(x => (
						<option key={x.key} value={x.key}>
							{x.description + (x.tag && x.rank ? " (" + x.tag + ")" : "")}
						</option>
					))}
				</select>
			</dd>
		</dl>
	);
}

type VariantGroupProps = { slopeKey: StyleHelper.SlopeKey; visible: boolean };
function VariantGroup(props: VariantGroupProps) {
	if (!props.visible) return null;
	const pCC = useContext(CustomizerCtx);
	const cc = pCC.val;

	const targetSlope =
		props.slopeKey === "italic"
			? Gr.Slope.Italic
			: props.slopeKey === "oblique"
				? Gr.Slope.Oblique
				: Gr.Slope.Upright;
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: targetSlope,
	});
	const fs: Gr.FontStyle = { style: resolveDisplayStyle(cc), slope: targetSlope };
	return (
		<div className="group">
			{Array.from(Cv.CharacterVariants.values()).map(prime => (
				<CharacterVariantPicker
					className="large"
					prime={prime}
					key={prime.key}
					fontStyle={fs}
					onItemSelect={CvSink(prime, props.slopeKey, pCC)}
					onItemClear={CvClearSink(prime, props.slopeKey, pCC)}
					activeVariantKey={resolved.resolvedComposition[prime.key]}
					activeVariantKind={
						cc.charVariants[props.slopeKey] &&
						prime.key in cc.charVariants[props.slopeKey]!
							? ActiveVariantKind.NonDefault
							: ActiveVariantKind.Default
					}
				/>
			))}
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function FloatingPreview() {
	const { val: cc } = useContext(CustomizerCtx);
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: Gr.Slope.Upright,
	});
	const fs: Gr.FontStyle = {
		style: resolveDisplayStyle(cc),
		spacingTag: cc.spacing ? "NWID" : "",
		width: cc.defaultWidthAtExpanded ? Gr.Width.Expanded : Gr.Width.Normal,
		charVarTags: resolved.userFriendlyFeatureAssignment,
	};
	return (
		<div className="preview-panel customizer-preview">
			<div className="inner">
				<HighlightsToggle />
				<CharGridPreview fs={fs} />
			</div>
		</div>
	);
}

function HighlightsToggle() {
	const pCC = useContext(CustomizerCtx);

	return (
		<label className="highlight-toggle toggle-group">
			<input
				type="checkbox"
				checked={pCC.val.fDisplayHighlight}
				onChange={e => pCC.set({ ...pCC.val, fDisplayHighlight: e.target.checked })}
			/>{" "}
			<span className="check-mark"></span>
			Highlight Customized Characters
		</label>
	);
}

type PreviewProps = {
	fs: Gr.FontStyle;
};

const sampleAscii = ["✳", ...lchRangeToStr(0x21, 0x7e), "🮲🮳"];
const sampleSymbolRow = "← ↑ → ↓ ■ □ ▲ △ ◇ ◈ <= >= λ ß ≨ ∑".split(" ");
function CharGridPreview(props: PreviewProps) {
	return (
		<ol className="grid-preview">
			<GridPreviewCodeRows {...props} slope={Gr.Slope.Upright} />
			<GridPreviewCodeRows {...props} slope={Gr.Slope.Italic} />
			<GridPreviewCodeRows {...props} slope={Gr.Slope.Oblique} />
			<GridPreviewCharRows {...props} sample={sampleAscii} />
			<GridPreviewCharRows {...props} sample={sampleSymbolRow} />
		</ol>
	);
}
function lchRangeToStr(lchFirst: number, lchLast: number) {
	let s = "";
	for (let lch = lchFirst; lch <= lchLast; lch++) {
		s += String.fromCodePoint(lch);
	}
	return s;
}
type GridPreviewCharRowsProps = PreviewProps & {
	sample: Iterable<string>;
};
function GridPreviewCharRows(props: GridPreviewCharRowsProps) {
	const items: React.ReactNode[] = [];
	const { val: cc } = useContext(CustomizerCtx);
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: Gr.Slope.Upright,
	});
	for (const s of props.sample) {
		const f = resolved.hotChars.get(s);
		// We apply the "matching" feature for each highlighted character
		// since Chromium may have problem when many features utilizing
		// GSUB alternate is applied.
		const style = f
			? {
					fontFeatureSettings: Array.from(Object.entries(f))
						.map(([k, v]) => `'${k}' ${v}`)
						.join(","),
				}
			: {};
		items.push(
			<li
				key={s}
				className={joinCls("cell", "single-char", Gr.fontStyleToCls(props.fs))}
				style={style}
			>
				{s}
			</li>,
		);
	}
	return <>{items}</>;
}

type GridPreviewCodeRowsProps = PreviewProps & {
	slope: Gr.Slope;
};
function GridPreviewCodeRows(props: GridPreviewCodeRowsProps) {
	const { val: cc } = useContext(CustomizerCtx);
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: props.slope,
	});
	const fs: Gr.FontStyle = {
		style: resolveDisplayStyle(cc),
		slope: props.slope,
		spacingTag: cc.spacing ? "NWID" : "",
		width: cc.defaultWidthAtExpanded ? Gr.Width.Expanded : Gr.Width.Normal,
	};
	return (
		<li
			className={joinCls(
				"cell",
				"code-sample",
				cc.slopeGradesIncluded.has(props.slope) ? "included" : "excluded",
				cc.fDisplayHighlight ? "display-highlight" : "ignore-highlight",
			)}
		>
			<div className="header">{Gr.Slope[props.slope]}</div>
			<TokenizedCode
				fontStyle={fs}
				code={tokenizedSampleCode.Alphabet}
				highlightCharSet={resolved.stepHotChars}
			/>
		</li>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function LigationPanel() {
	const pCC = useContext(CustomizerCtx);
	const setLigSet = (val: string) => {
		pCC.set(
			produce(cc => {
				for (const ls of Ligation.AvailableLigationSets) {
					if (ls.selector === val) {
						cc.ligationSet = ls;
						return;
					}
				}
				cc.ligationSet = Ligation.AvailableLigationSets[0];
			}),
		);
	};
	const ligationDisabled = pCC.val.spacing === Gr.Spacing.Fixed;
	return (
		<div className="customizer-body">
			<select
				disabled={ligationDisabled}
				value={ligationDisabled ? ".disabled" : pCC.val.ligationSet.selector || ".disabled"}
				onChange={e => setLigSet(e.target.value)}
			>
				{Ligation.AvailableLigationSets.map(ls => (
					<option key={ls.selector || ".disabled"} value={ls.selector || ".disabled"}>
						{ligationDisabled ? "Ligation Disabled in Fixed" : ls.desc || ls.brief}
					</option>
				))}
			</select>
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function LigationPreview() {
	const { val: cc } = useContext(CustomizerCtx);
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: Gr.Slope.Upright,
	});
	const fs: Gr.FontStyle = {
		style: resolveDisplayStyle(cc),
		spacingTag: cc.spacing ? "NWID" : "",
		width: cc.defaultWidthAtExpanded ? Gr.Width.Expanded : Gr.Width.Normal,
		charVarTags: resolved.userFriendlyFeatureAssignment,
	};
	return (
		<div className="customizer-body ligation-sampler">
			<LigationSamplerInnerImpl
				fontStyle={fs}
				currentLigationSet={
					cc.spacing === Gr.Spacing.Fixed
						? Ligation.AvailableLigationSets[0]
						: cc.ligationSet
				}
				ligationCherry={Ligation.LigationCherryData}
				ligationSamples={Ligation.LigationSamples}
			/>
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function TomlResultPanel() {
	const { val: cc } = useContext(CustomizerCtx);
	const kPlan = pascalCase(cc.family);
	const cfg = { buildPlans: { [kPlan]: formatBuildPlan(cc) } };

	return (
		<dl className="custom-build-commands">
			<dt>
				Your <code>private-build-plans.toml</code>:
			</dt>
			<dd className="custom-config-source">{Toml.stringify(cfg)}</dd>
		</dl>
	);
}

function BuildInstructionsPanel() {
	const { val: cc } = useContext(CustomizerCtx);
	const kPlan = pascalCase(cc.family);
	return (
		<dl className="custom-build-commands">
			<dt>Command to build TTF + Web Font:</dt>
			<dd>npm run build -- contents::{kPlan}</dd>
			<dt>Command to build TTF:</dt>
			<dd>npm run build -- ttf::{kPlan}</dd>
			<dt>Command to build TTF Unhinted:</dt>
			<dd>npm run build -- ttf-unhinted::{kPlan}</dd>
			<dt>
				For further information, see{" "}
				<a href="https://github.com/be5invis/Iosevka/blob/master/doc/custom-build.md">
					here
				</a>
				.
			</dt>
		</dl>
	);
}
