import * as React from "react";
import { createContext, useContext, useState } from "react";

import { ActiveVariantKind, CharacterVariantPicker } from "../components/character-variant-picker";
import { FeatureUsageShower } from "../components/feature-usage-shower";
import { PickerFrame } from "../components/picker-frame";
import { Section } from "../components/section";
import { TokenizedCode } from "../components/tokenized-code";
import { ToolsPanelsT } from "../components/tools-panels-t";
import * as Cv from "../data-import/cv";
import * as Gr from "../data-import/grades";
import * as Ligation from "../data-import/ligation";
import Stats from "../data-import/stats";
import * as tokenizedSampleCode from "../tokenized-sample-code";
import { joinCls } from "../utils/join-classes";
import {
	CharacterVariantChoice,
	createUrlFromCustomizerProps,
	DefaultCvChoice,
	resolveUserChoice,
} from "../utils/style-helper";

type CvSamplerContextSourceProps = {
	readonly currentChoice: CharacterVariantChoice;
	readonly setChoice: (choice: CharacterVariantChoice) => void;
	readonly isSlab: boolean;
	readonly slope: Gr.Slope;
};
type CvSamplerContextProps = CvSamplerContextSourceProps & {
	readonly resolvedComposition: Cv.VariantComposition;
	readonly resolvedNonDefaultComposition: Cv.VariantComposition;
	readonly featureAssignment: Gr.FeatureAssignment;
	readonly nonDefaultFeatureAssignment: Gr.FeatureAssignment;
	readonly userFriendlyFeatureAssignment: Gr.FeatureAssignment;
	readonly hotChars: ReadonlyMap<string, Gr.FeatureAssignment>;
};
const CharacterVariantSamplerContext = createContext<CvSamplerContextProps>({
	currentChoice: DefaultCvChoice,
	setChoice: () => {},
	isSlab: false,
	slope: Gr.Slope.Upright,
	resolvedComposition: {},
	resolvedNonDefaultComposition: {},
	featureAssignment: {},
	nonDefaultFeatureAssignment: {},
	userFriendlyFeatureAssignment: {},
	hotChars: new Map(),
});

function createCtxProps(sp: CvSamplerContextSourceProps): CvSamplerContextProps {
	return {
		...sp,
		...resolveUserChoice(sp.currentChoice, sp),
	};
}

export function CharacterVariantSampler() {
	const [isSlab, setIsSlab] = useState<boolean>(false);
	const [slope, setSlope] = useState<Gr.Slope>(Gr.Slope.Upright);
	const [currentChoice, setCurrentChoice] = useState<CharacterVariantChoice>(DefaultCvChoice);

	const ctxProps = createCtxProps({ currentChoice, setChoice: setCurrentChoice, isSlab, slope });
	const onFontSet = (fs: Gr.FontStyle) => {
		setSlope(fs.slope || Gr.Slope.Upright);
		setIsSlab(fs.style === Gr.Style.Slab || fs.style === Gr.Style.Etoile);
	};
	const customizerPageHashT = () =>
		createUrlFromCustomizerProps({
			serifStyle: isSlab ? Gr.SerifStyle.Slab : Gr.SerifStyle.Sans,
			charVariants: currentChoice,
			ligationSet: Ligation.AvailableLigationSets[1],
		});

	return (
		<CharacterVariantSamplerContext.Provider value={ctxProps}>
			<Section>
				<Desc />
				<div className="character-variant-sampler-body">
					<div className="preview">
						<PickerFrame
							styleGrades={[Gr.Style.Sans, Gr.Style.Slab]}
							disableWidth
							content={Inner}
							defaultFontStyle={Gr.DefaultFontStyle}
							onFontSet={onFontSet}
						/>
					</div>
					<ToolsPanelsT
						usageAvailable={ctxProps.currentChoice.inherits !== Cv.NopStylisticSet}
						mainPanel={MainPanels}
						usagePanel={UsagePanel}
						customizerPageHashT={customizerPageHashT}
					/>
				</div>
			</Section>
		</CharacterVariantSamplerContext.Provider>
	);
}

function Desc() {
	return (
		<div className="section-introduction">
			<h2 className="header">Variants à&nbsp;la&nbsp;Carte</h2>
			<div className="content">
				<p>
					Iosevka provides <em>{Stats.characterVariants}</em> configurable characters with{" "}
					<em>{Stats.stylisticSets}</em> stylistic sets, which gives you incredible
					ability to customize one variant that fills exactly what you need. You can
					either select one pre-defined stylistic set, or cherry-pick your flavor.
				</p>
			</div>
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function MainPanels() {
	return (
		<>
			<SsPanel />
			<CvPanel />
		</>
	);
}

function SsPanel() {
	return (
		<div className="panel ss">
			<h3>Stylistic Sets</h3>
			<div className="groups">
				{Array.from(Cv.StylisticSets.values()).map(item => (
					<SsPanelOption stylisticSet={item} key={item.key} />
				))}
			</div>
		</div>
	);
}

type SsPanelOptionProps = {
	stylisticSet: Cv.StylisticSet;
};
function SsPanelOption(props: SsPanelOptionProps) {
	const ss = props.stylisticSet;
	const ctx = useContext(CharacterVariantSamplerContext);

	const fActive = ctx.currentChoice.inherits === ss;
	return (
		<a
			className={joinCls(
				"option",
				fActive ? "active" : null,
				props.stylisticSet.rank ? "substantial" : "default",
			)}
			onClick={() => ctx.setChoice({ inherits: ss })}
		>
			<span className="tag">{ss.tag}</span>
			<span className="brief">{ss.description}</span>
		</a>
	);
}

function CvPanel() {
	const ctx = useContext(CharacterVariantSamplerContext);
	const fs = { slope: ctx.slope, style: ctx.isSlab ? Gr.Style.Slab : Gr.Style.Sans };
	const setDesignChoices = (cv: Cv.VariantComposition) => {
		if (Object.keys(cv).length) {
			ctx.setChoice({ design: cv });
		} else {
			ctx.setChoice({ inherits: Cv.NopStylisticSet });
		}
	};
	return (
		<div className="panel cv">
			<h3>Cherry-Picking</h3>
			<div className="groups">
				{Array.from(Cv.CharacterVariants.values()).map(prime => (
					<CharacterVariantPicker
						className="large"
						prime={prime}
						key={prime.key}
						fontStyle={fs}
						onItemSelect={kVariant =>
							setDesignChoices({
								...ctx.resolvedNonDefaultComposition,
								[prime.key]: kVariant,
							})
						}
						onItemClear={() => {
							const d = { ...ctx.resolvedNonDefaultComposition };
							delete d[prime.key];
							setDesignChoices(d);
						}}
						activeVariantKey={ctx.resolvedComposition[prime.key]}
						activeVariantKind={
							ctx.resolvedNonDefaultComposition[prime.key]
								? ActiveVariantKind.NonDefault
								: ActiveVariantKind.Default
						}
					/>
				))}
			</div>
		</div>
	);
}

function UsagePanel() {
	return (
		<div className="panel usage">
			<h3>Usage</h3>
			<TagShower />
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function Inner(props: { fontStyle: Gr.FontStyle }) {
	const ctx = useContext(CharacterVariantSamplerContext);

	const finalFont: Gr.FontStyle = {
		...props.fontStyle,
		charVarTags: ctx.userFriendlyFeatureAssignment,
	};

	return (
		<TokenizedCode
			fontStyle={finalFont}
			code={tokenizedSampleCode.Alphabet}
			highlightCharSet={ctx.hotChars}
		/>
	);
}

function TagShower() {
	const ctx = useContext(CharacterVariantSamplerContext);
	return <FeatureUsageShower directives={ctx.userFriendlyFeatureAssignment} />;
}
