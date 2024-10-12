import * as React from "react";
import { createContext, useContext, useState } from "react";

import { FeatureUsageShower } from "../components/feature-usage-shower";
import { PickerFrame } from "../components/picker-frame";
import { Section } from "../components/section";
import { ToolsPanelsT } from "../components/tools-panels-t";
import * as Gr from "../data-import/grades";
import * as Ligation from "../data-import/ligation";
import { joinCls } from "../utils/join-classes";
import { createUrlFromCustomizerProps } from "../utils/style-helper";

const ligationOff = Ligation.AvailableLigationSets[0];
const ligationDefault = Ligation.AvailableLigationSets[1];

type LigationSamplerContextProps = {
	setCurrent: (choice: Ligation.LigationSet) => void;
	currentLigationSet: Ligation.LigationSet;
	availableLigations: Ligation.LigationSet[];
};
const LigationSampleContext = createContext<LigationSamplerContextProps>({
	setCurrent: () => {},
	currentLigationSet: ligationOff,
	availableLigations: [],
});

export function LigationSampler() {
	const [isSlab, setIsSlab] = useState<boolean>(false);
	const [current, setCurrent] = useState<Ligation.LigationSet>(ligationDefault);

	const ctxProps: LigationSamplerContextProps = {
		setCurrent: setCurrent,
		currentLigationSet: current,
		availableLigations: Ligation.AvailableLigationSets,
	};

	const customizerPageHashT = () =>
		createUrlFromCustomizerProps({
			serifStyle: isSlab ? Gr.SerifStyle.Slab : Gr.SerifStyle.Sans,
			charVariants: {},
			ligationSet: current,
		});

	const onFontSet = (fs: Gr.FontStyle) => {
		setIsSlab(fs.style === Gr.Style.Slab || fs.style === Gr.Style.Etoile);
	};

	return (
		<LigationSampleContext.Provider value={ctxProps}>
			<Section>
				<Desc />
				<div className="ligation-sampler-body">
					<div className="preview">
						<PickerFrame
							content={LigationSamplerInner}
							defaultFontStyle={Gr.DefaultFontStyle}
							onFontSet={onFontSet}
						/>
					</div>
					<ToolsPanelsT
						usageAvailable
						usagePanel={UsagePanel}
						mainPanel={LigationSamplerSwitches}
						customizerPageHashT={customizerPageHashT}
					/>
				</div>
			</Section>
		</LigationSampleContext.Provider>
	);
}

function Desc() {
	return (
		<div className="section-introduction">
			<h2 className="header">Coding Ligations</h2>
			<div className="content">
				<p>
					Iosevka’s monospace families supports not only one <em>ligation set</em>, but
					also <em>language-specific ligations</em>. Enable the corresponded OpenType
					feature in your editor, and the correct ligation will appear.
				</p>
				<p>
					Leveraging advanced OpenType techniques, Iosevka also supports{" "}
					<em>long ligatures</em> like long arrows or horizontal bars built up with equal
					signs.
				</p>
			</div>
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function UsagePanel() {
	return (
		<div className="panel usage">
			<h3>Usage</h3>
			<TagShower />
		</div>
	);
}

function LigationSamplerSwitches() {
	const ctx = useContext(LigationSampleContext);
	return (
		<div className="panel ligation-set-switches">
			<h3>Ligation Set</h3>
			<div className="switches">
				{ctx.availableLigations.map((ls, id) => (
					<LigationSamplerSwitch ligationSet={ls} key={id} />
				))}
			</div>
		</div>
	);
}

type LigationSamplerSwitchProps = {
	ligationSet: Ligation.LigationSet;
};
function LigationSamplerSwitch(props: LigationSamplerSwitchProps) {
	const ctx = useContext(LigationSampleContext);
	const fActive =
		ctx.currentLigationSet.tag === props.ligationSet.tag &&
		ctx.currentLigationSet.rank === props.ligationSet.rank;
	return (
		<a
			className={joinCls(
				"switch",
				fActive ? "active" : null,
				props.ligationSet.rank ? "on" : "off",
			)}
			onClick={() => ctx.setCurrent(props.ligationSet)}
		>
			<span className="tag">{props.ligationSet.tag}</span>
			<span className="brief">{props.ligationSet.brief}</span>
		</a>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function LigationSamplerInner(props: { fontStyle: Gr.FontStyle }) {
	const ctx = useContext(LigationSampleContext);
	return (
		<LigationSamplerInnerImpl
			{...props}
			displayCSS
			currentLigationSet={ctx.currentLigationSet}
			ligationCherry={Ligation.LigationCherryData}
			ligationSamples={Ligation.LigationSamples}
		/>
	);
}

export function LigationSamplerInnerImpl(props: {
	fontStyle: Gr.FontStyle;
	currentLigationSet: Ligation.LigationSet;
	ligationCherry: Ligation.LigationCherryDict;
	ligationSamples: string[][];
	displayCSS?: boolean;
}) {
	const buildUpSet = new Set(props.currentLigationSet.ligSets);
	const finalFont: Gr.FontStyle = {
		...props.fontStyle,
		ligationRank: props.currentLigationSet.rank,
		ligationTag: props.currentLigationSet.tag,
	};
	const items = props.ligationSamples.map((ls, index) => {
		const runs: React.ReactNode[] = [];
		for (let j = 0; j < ls.length; j++) {
			const sample = ls[j];
			if (j) runs.push(<span key={"gap " + j}> </span>);

			const sat: { required: number; satisfied: number }[] = [];

			for (const [lgName, lg] of Object.entries(props.ligationCherry)) {
				if (!new Set(lg.samples).has(sample)) continue;
				const rankT = lg.sampleRank || 1;

				if (!sat[rankT]) {
					sat[rankT] = { required: 1, satisfied: 0 };
				} else {
					sat[rankT].required += 1;
				}
				if (buildUpSet.has(lgName)) {
					sat[rankT].satisfied += 1;
				}
			}

			let rank = sat.length - 1;
			for (; rank >= 1 && (!sat[rank] || sat[rank].satisfied < sat[rank].required); rank--);

			runs.push(
				<span key={"item " + j} className={"rank-" + rank}>
					{sample}
				</span>,
			);
		}
		return (
			<pre
				key={index}
				style={Gr.fontStyleToOtStyle(finalFont)}
				className={joinCls("sample-text", Gr.fontStyleToCls(finalFont))}
			>
				{runs}
			</pre>
		);
	});
	return <div className="sample-text-list">{items}</div>;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function TagShower() {
	const ctx = useContext(LigationSampleContext);

	const directives: Gr.FeatureAssignmentW = {};
	if (ctx.currentLigationSet.rank && ctx.currentLigationSet.tag !== "calt") {
		directives["calt"] = 0;
	}
	directives[ctx.currentLigationSet.tag] = ctx.currentLigationSet.rank;
	return <FeatureUsageShower directives={directives} />;
}
