import * as Toml from "@iarna/toml";
import { produce } from "immer";
import Head from "next/head";
import { createContext, useContext } from "react";

import {
	ActiveVariantKind,
	CharacterVariantPicker,
} from "../shared/components/character-variant-picker";
import {
	ImportConfigurationPopup,
	ImportConfigurationPopupEnableButton,
	PopupUxProps,
} from "../shared/components/customizer-import-popup";
import { EnumSelect } from "../shared/components/enum-select";
import { Section } from "../shared/components/section";
import {
	CustomizerProps,
	defaultCustomizerProps,
	getResolvedBuildPlanCharVariants,
	resolveDisplayStyle,
	slopeToCustomizerStyleKey,
} from "../shared/customizer";
import * as Cv from "../shared/data-import/cv";
import * as Gr from "../shared/data-import/grades";
import { Ptr, useStatePtr } from "../shared/utils/ptr";
import * as StyleHelper from "../shared/utils/style-helper";

type StyleMatcherProps = {
	name: null | string;
	displayName: null | string;
	loading: boolean;
	matchSlope: Gr.Slope;
	popup: PopupUxProps;
};
const defaultStyleMatcherProps: StyleMatcherProps = {
	popup: { popupVisible: false },
	name: null,
	displayName: null,
	loading: false,
	matchSlope: Gr.Slope.Upright,
};

const StyleMatcherCtx = createContext(Ptr.Default(defaultStyleMatcherProps));
const CustomizerCtx = createContext(Ptr.Default(defaultCustomizerProps));

export default function StyleMatchTool() {
	const pCc = useStatePtr<CustomizerProps>(defaultCustomizerProps);
	const pSm = useStatePtr<StyleMatcherProps>(defaultStyleMatcherProps);
	return (
		<CustomizerCtx.Provider value={{ ...pCc }}>
			<StyleMatcherCtx.Provider value={{ ...pSm }}>
				<Head>
					<title>Style Matching Tool</title>
				</Head>
				<div className="page">
					<Section className="customizer">
						<SettingsPanel />
					</Section>
					<Section className="customizer">
						<div className="style-matcher-panel style-matcher-cv-panel">
							<EditPanel />
						</div>
					</Section>
					<Section className="customizer">
						<div className="result-panel">
							<ResultsPanel />
						</div>
					</Section>
				</div>
				<ImportConfigurationPopup dropInheritedCvs pCc={pCc} pUx={Ptr.Lens(pSm, "popup")} />
			</StyleMatcherCtx.Provider>
		</CustomizerCtx.Provider>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function SettingsPanel() {
	const pCc = useContext(CustomizerCtx);
	const pSm = useContext(StyleMatcherCtx);

	const pSerifStyle = Ptr.Lens(pCc, "serifStyle");
	const pSlope = Ptr.Lens(pSm, "matchSlope");

	return (
		<>
			<div className="config-panel">
				<h2>
					<em>01</em> Style Matcher
				</h2>
				<div className="customizer-body">
					<dl>
						<dd>
							<ReferenceFontUploader />
						</dd>
					</dl>
				</div>
			</div>
			<div className="config-co-panel">
				<div className="customizer-body">
					<dl>
						<dt>Match Serifs</dt>
						<dd>
							<EnumSelect
								options={Gr.DefaultSerifStyleGrades}
								value={pSerifStyle.val}
								onChange={pSerifStyle.set}
							/>
						</dd>
					</dl>
					<dl>
						<dt>Match Slope</dt>
						<dd>
							<EnumSelect
								options={Gr.AllSlopeGrades}
								value={pSlope.val}
								onChange={pSlope.set}
							/>
						</dd>
					</dl>
					<dl>
						<dt></dt>
						<dd>
							<ImportConfigurationPopupEnableButton {...Ptr.Lens(pSm, "popup")} />
						</dd>
					</dl>
				</div>
			</div>
		</>
	);
}

function ReferenceFontUploader() {
	const pSm = useContext(StyleMatcherCtx);

	const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e?.target?.files?.[0];
		if (!file) return;

		pSm.set(
			produce(draft => {
				draft.name = null;
				draft.loading = true;
			}),
		);

		const fileName = file?.name || "";
		const fontName =
			"TARGET-FONT-" + (fileName.replace(/\.[^/.]+$/, "") || "").replace(/\s/g, "-");
		await loadFont(fontName, file);

		pSm.set(
			produce(tf => {
				tf.displayName = fileName;
				tf.name = fontName;
				tf.loading = false;
			}),
		);
	};

	const label = pSm.val.loading
		? "Loading..."
		: "📁 " + (pSm.val.displayName || "Load reference font...");

	const input = pSm.val.loading ? null : (
		<input type="file" accept=".ttf,.otf,.woff,woff2" onChange={onFileUpload} />
	);

	return (
		<label className="file-upload" title="Load reference font...">
			{label}
			{input}
		</label>
	);
}

async function loadFont(name: string, src: File) {
	const fontAlreadyLoaded = document.fonts.check(`10px "${name}"`);
	if (!fontAlreadyLoaded) {
		const fontFace = new FontFace(name, await src.arrayBuffer());
		try {
			await fontFace.load();
			document.fonts.add(fontFace);
		} catch (_e) {
			console.error(`Font ${name} failed to load`);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const CvArray = Array.from(Cv.CharacterVariants.values());

function EditPanel() {
	const pCc = useContext(CustomizerCtx);
	const pSm = useContext(StyleMatcherCtx);
	const cc = pCc.val;

	const targetSlope = pSm.val.matchSlope;
	const slopeKey = slopeToCustomizerStyleKey(pSm.val.matchSlope);

	const fs: Gr.FontStyle = { style: resolveDisplayStyle(cc), slope: targetSlope };
	const resolved = StyleHelper.resolveUserChoice(cc.charVariants, {
		isSlab: cc.serifStyle === Gr.SerifStyle.Slab,
		slope: targetSlope,
	});

	return CvArray.map(prime => (
		<div className="cv-item" key={prime.key}>
			<TargetFontSample text={prime.descSampleText[0]} />
			<CharacterVariantPicker
				className="large"
				prime={prime}
				fontStyle={fs}
				onItemSelect={CvSink(prime, slopeKey, pCc)}
				onItemClear={CvClearSink(prime, slopeKey, pCc)}
				activeVariantKey={resolved.resolvedComposition[prime.key]}
				activeVariantKind={
					cc.charVariants[slopeKey] && prime.key in cc.charVariants[slopeKey]!
						? ActiveVariantKind.NonDefault
						: ActiveVariantKind.Default
				}
			/>
		</div>
	));
}

type TargetFontSampleProps = {
	text: string;
};

function TargetFontSample(props: TargetFontSampleProps) {
	const pSm = useContext(StyleMatcherCtx);
	if (pSm.val.loading || !pSm.val.name) return null;

	return (
		<div
			className="target-sample"
			style={{
				fontFamily: pSm.val.name,
				fontStyle: Gr.AllSlopeGrades.get(pSm.val.matchSlope)!.css,
			}}
		>
			{props.text}
		</div>
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

///////////////////////////////////////////////////////////////////////////////////////////////////

function ResultsPanel() {
	const { val: cc } = useContext(CustomizerCtx);

	return <pre>{Toml.stringify({ variants: getResolvedBuildPlanCharVariants(cc, true) })}</pre>;
}
