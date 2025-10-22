import Head from "next/head";
import { createContext, useContext, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOnClickOutside } from "usehooks-ts";

import { PickerFrame } from "../shared/components/picker-frame";
import { Section } from "../shared/components/section";
import * as Coverage from "../shared/data-import/atlas";
import * as Gr from "../shared/data-import/grades";
import { unicodeGcMap, unicodeNameMap } from "../shared/data-import/unicode-data-map";
import { joinCls } from "../shared/utils/join-classes";
import { Ptr } from "../shared/utils/ptr";

export default function Specimen() {
	return (
		<div className="page">
			<Head>
				<title>Iosevka Specimen</title>
			</Head>
			<CharacterSpecimen />
		</div>
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

type SimpFeaturePair = string;
type Standout = {
	blockName: string;
	char: Coverage.Character;
	variantOverride?: string;
	specificSlopeOnly?: Gr.Slope;
};

type SpecimenContextProps = {
	atlas: Coverage.Atlas;
	standouts: Standout[];
};
const SpecimenContext = createContext<Ptr<SpecimenContextProps>>({
	val: {
		atlas: Coverage.Atlas_Sans,
		standouts: [],
	},
	set: () => {},
});

function CharacterSpecimen() {
	const [scp, setScp] = useState<SpecimenContextProps>({
		atlas: Coverage.Atlas_Sans,
		standouts: [],
	});
	function setStyle(newFs: Gr.Style) {
		let atlas = Coverage.Atlas_Sans;
		switch (newFs) {
			case Gr.Style.Slab:
				atlas = Coverage.Atlas_Slab;
				break;
			case Gr.Style.Aile:
				atlas = Coverage.Atlas_Aile;
				break;
			case Gr.Style.Etoile:
				atlas = Coverage.Atlas_Etoile;
				break;
		}
		setScp({ atlas, standouts: [] });
	}
	return (
		<SpecimenContext.Provider value={{ val: scp, set: setScp }}>
			<Section withToolbar id="character-specimen">
				<h1>Iosevka Specimen</h1>
				<NavigatorPanel />
				<PickerFrame
					wholeSection
					enableSpacing
					enableMarkings
					content={CharacterSpecimenInner}
					styleGrades={[Gr.Style.Sans, Gr.Style.Slab, Gr.Style.Aile, Gr.Style.Etoile]}
					onFontStyleChange={setStyle}
					defaultFontStyle={{ style: Gr.Style.Sans }}
				/>
			</Section>
		</SpecimenContext.Provider>
	);
}

const NavigationContext = createContext<Ptr<string>>({ val: "", set: () => {} });

function NavigatorPanel() {
	const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
	const [currentHoverBlock, setCurrentHoverBlock] = useState<string>("");

	const ref = useRef<HTMLDivElement>(null);
	useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => {
		setDropdownVisible(false);
		setCurrentHoverBlock("");
	});

	const showDropdown = () => setDropdownVisible(true);
	return (
		<div
			id="navigator-panel"
			className={joinCls(dropdownVisible ? "dropdown-visible" : null)}
			ref={ref}
		>
			<div className="button" onClick={showDropdown}>
				🮲🮳
			</div>
			<NavigationContext.Provider
				value={{ val: currentHoverBlock, set: setCurrentHoverBlock }}
			>
				<NavigationDropdown />
			</NavigationContext.Provider>
		</div>
	);
}

function NavigationDropdown() {
	let rows: StripRow[] = [];

	let curStrip = 0;

	const ctx = useContext(SpecimenContext);
	for (const block of ctx.val.atlas.unicodeCoverage) {
		const lchMin = block.characters[0].lch;
		const lchMax = block.characters[block.characters.length - 1].lch;

		const stripMin = lchMin >> 4;
		const stripMax = (lchMax + 1) >> 4;

		advanceStrip(rows, BlankProducer, curStrip, stripMin);
		advanceStrip(rows, BlockProducer(block.name), stripMin, stripMax);

		curStrip = stripMax;
	}

	rows = rows.filter(r => r.elements.length);

	return (
		<div className="navigation-dropdown">
			<NavBlocksPanel />
			<NavStripsPanel />
		</div>
	);
}
function NavBlocksPanel() {
	const ctx = useContext(SpecimenContext);
	return (
		<div className="navigation-panel blocks-panel">
			<ol>
				{ctx.val.atlas.unicodeCoverage.map(block => (
					<NavBlocksPanelItem
						name={block.name}
						key={block.name}
						code={block.characters[0].lch}
					/>
				))}
			</ol>
		</div>
	);
}
function NavBlocksPanelItem(props: { name: string; code: number }) {
	const pHoverBlock = useContext(NavigationContext);
	const onMouseEnter = () => pHoverBlock.set(props.name);
	const onMouseLeave = () => pHoverBlock.set("");

	const onClick = () => {
		const e = document.getElementById(`specimen-anchor--${formatUnicode(props.code)}`);
		if (e) e.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<li
			className={joinCls(props.name === pHoverBlock.val ? "hovered" : "")}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{props.name}
		</li>
	);
}

function NavStripsPanel() {
	let rows: StripRow[] = [];
	let curStrip = 0;

	const ctx = useContext(SpecimenContext);
	for (const block of ctx.val.atlas.unicodeCoverage) {
		const lchMin = block.characters[0].lch;
		const lchMax = block.characters[block.characters.length - 1].lch;

		const stripMin = lchMin >> 4;
		const stripMax = (lchMax + 1) >> 4;

		advanceStrip(rows, BlankProducer, curStrip, stripMin);
		advanceStrip(rows, BlockProducer(block.name), stripMin, stripMax);

		curStrip = stripMax;
	}

	rows = rows.filter(r => r.elements.length);

	return (
		<div className="navigation-panel strips-panel">
			<StripHeader />
			{rows.map((row, iRow) => (
				<div className="row" key={iRow}>
					<div className="start">
						{(row.start >> 4).toString(16).padStart(2, "0").toUpperCase()}
					</div>
					<div className="columns">{row.elements}</div>
				</div>
			))}
		</div>
	);
}

type StripRow = {
	start: number;
	elements: React.ReactElement[];
};
function createStripRowFromLow(n: number) {
	return { start: n, elements: [] };
}

const STRIPS_PER_ROW = 16;
enum StripMode {
	EntireLine,
	LineStart,
	LineEnd,
	InLine,
}
interface StripProducer {
	createStrip(mode: StripMode, low: number, high: number): null | React.ReactElement;
}
const BlankProducer: StripProducer = {
	createStrip(mode, low, high) {
		if (mode === StripMode.EntireLine || high - low >= STRIPS_PER_ROW) return null;
		return <BlankStrip key={`strip-blank-${low}`} low={low} high={high} />;
	},
};
function BlockProducer(name: string): StripProducer {
	return {
		createStrip(mode, low, high) {
			const flex = mode === StripMode.EntireLine ? STRIPS_PER_ROW : high - low;
			return (
				<FilledStrip
					key={`strip-filled-${low}`}
					name={name}
					flex={flex}
					low={low}
					high={high}
				/>
			);
		},
	};
}
function StripHeader() {
	return (
		<div className="row">
			<div className="start"></div>
			<div className="columns">
				<div className="strip" style={{ width: "100%" }}>
					<span>0</span>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
					<span>A</span>
					<span>B</span>
					<span>C</span>
					<span>D</span>
					<span>E</span>
					<span>F</span>
				</div>
			</div>
		</div>
	);
}
function BlankStrip(props: { low: number; high: number }) {
	const width = `${((props.high - props.low) / STRIPS_PER_ROW) * 100}%`;
	return <div className="strip blank" style={{ width }}></div>;
}
function FilledStrip(props: { name: string; flex: number; low: number; high: number }) {
	const width = `${(props.flex / STRIPS_PER_ROW) * 100}%`;

	const pHoverBlock = useContext(NavigationContext);
	const onMouseEnter = () => pHoverBlock.set(props.name);
	const onMouseLeave = () => pHoverBlock.set("");

	const subBlocks: React.ReactElement[] = [];
	for (let i = props.low; i < props.high; i++) {
		subBlocks.push(<FilledStripInnerButton key={i} name={props.name} code={i * 16} />);
	}

	return (
		<div
			className={joinCls("strip", "filled", props.name === pHoverBlock.val ? "hovered" : "")}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			title={props.name}
			style={{ width }}
		>
			{subBlocks}
		</div>
	);
}
function FilledStripInnerButton(props: { name: string; code: number }) {
	const title = formatUnicode(props.code) + "\n" + props.name;
	const onClick = () => {
		const e = document.getElementById(`specimen-anchor--${formatUnicode(props.code)}`);
		if (e) e.scrollIntoView({ behavior: "smooth" });
	};
	return <span title={title} onClick={onClick}></span>;
}

function advanceStrip(rows: StripRow[], producer: StripProducer, low: number, high: number) {
	if (high <= low) return;

	let currentRow: StripRow;
	const lowCol = low % STRIPS_PER_ROW;
	const lowRowStart = low - lowCol;
	if (!lowCol) {
		currentRow = createStripRowFromLow(low);
		rows.push(currentRow);
	} else {
		currentRow = rows[rows.length - 1];
	}

	if (high - lowRowStart <= STRIPS_PER_ROW) {
		const e = producer.createStrip(StripMode.InLine, low, high);
		if (e) currentRow.elements.push(e);
		return;
	}

	let lowRowEnd: number;
	if (low > lowRowStart) {
		lowRowEnd = lowRowStart + STRIPS_PER_ROW;
		const e = producer.createStrip(StripMode.LineStart, low, lowRowEnd);
		if (e) currentRow.elements.push(e);
	} else {
		lowRowEnd = lowRowStart;
	}

	const highCol = high % STRIPS_PER_ROW;
	const highRowStart = high - highCol;

	if (highRowStart > lowRowEnd) {
		for (let i = lowRowEnd; i < highRowStart; i += STRIPS_PER_ROW) {
			currentRow = createStripRowFromLow(i);
			rows.push(currentRow);
			const e = producer.createStrip(StripMode.EntireLine, i, i + STRIPS_PER_ROW);
			if (e) currentRow.elements.push(e);
		}
	}
	if (high > highRowStart) {
		currentRow = createStripRowFromLow(highRowStart);
		rows.push(currentRow);
		const e = producer.createStrip(StripMode.LineEnd, highRowStart, high);
		if (e) currentRow.elements.push(e);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function CharacterSpecimenInner(props: { fontStyle: Gr.FontStyle }) {
	const ctx = useContext(SpecimenContext);
	return (
		<>
			<>
				{ctx.val.atlas.unicodeCoverage.map(block => (
					<SpecimenBlock
						key={`block-` + block.name}
						block={block}
						fontStyle={props.fontStyle}
					/>
				))}
			</>
			{ctx.val.standouts.length ? (
				<div className="standouts">
					{ctx.val.standouts.map((s, index) => (
						<Standout
							fontStyle={props.fontStyle}
							index={index}
							standout={s}
							key={`standout-${index}`}
						/>
					))}
				</div>
			) : null}
		</>
	);
}

type SpecimenBlockProps = {
	block: Coverage.Block;
	fontStyle: Gr.FontStyle;
};
function SpecimenBlock(props: SpecimenBlockProps) {
	const [ref, inView] = useInView();
	const sampleChars = !inView
		? null
		: props.block.characters.map(c => (
				<SpecimenCharacter
					blockName={props.block.name}
					char={c}
					fontStyle={props.fontStyle}
					key={c.lch}
				/>
			));

	const anchors: React.ReactElement[] = [];
	const iLow = props.block.characters[0].lch;
	const iHigh = props.block.characters[props.block.characters.length - 1].lch + 1;
	for (let i = iLow; i < iHigh; i += 16) {
		anchors.push(<div id={`specimen-anchor--${formatUnicode(i)}`} key={i} />);
	}

	return (
		<div
			className="specimen-block"
			id={`specimen-block--${props.block.name.replace(/ /g, "--")}`}
		>
			<h3>{props.block.name}</h3>
			<div className="anchors">{anchors}</div>
			<div
				className={joinCls("specimen-block-body", inView ? "visible" : "virtualized")}
				style={{ height: (props.block.characters.length / 16) * 4 + "rem" }}
				ref={ref}
			>
				{sampleChars}
			</div>
		</div>
	);
}

type SpecimenCharacterProps = Standout & { fontStyle: Gr.FontStyle };
function SpecimenCharacter(props: SpecimenCharacterProps) {
	const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);
	useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => setDropdownVisible(false));
	const gc = unicodeGcMap.get(props.char.lch) || "?";
	return (
		<div
			ref={ref}
			className={joinCls(
				"specimen-character",
				props.char.inFont ? "in-font" : gc === "Unassigned" ? "unassigned" : "not-in-font",
				`column-${props.char.lch % 16}`,
				dropdownVisible ? "variant-menu-visible" : null,
			)}
			data-unicode-label={formatUnicode(props.char.lch)}
			onClick={() => setDropdownVisible(true)}
		>
			<SpecimenCharacterImpl {...props} allowCreateStandout={true} />
			<SpecimenCharacterVariantsMarker {...props} />
			{dropdownVisible ? <SpecimenCharacterVariants {...props} /> : null}
		</div>
	);
}

function gatherCharFeatures(hasCvSs: boolean, ch: Coverage.Character, slope: Gr.Slope) {
	if (!hasCvSs) return [];
	switch (slope) {
		case Gr.Slope.Upright:
			return ch.cvFeatureSetsUpright || [];
		case Gr.Slope.Italic:
			return ch.cvFeatureSetsItalic || [];
		case Gr.Slope.Oblique:
			return ch.cvFeatureSetsOblique || [];
	}
}
function queryCvList(atlas: Coverage.Atlas, n: number) {
	return atlas.featureSeries[n];
}

function charHasVariants(atlas: Coverage.Atlas, props: SpecimenCharacterProps) {
	const hasCvSs = Gr.styleHasCvSs(props.fontStyle.style || Gr.Style.Sans);
	const charFeatures = gatherCharFeatures(
		hasCvSs,
		props.char,
		props.fontStyle.slope || Gr.Slope.Upright,
	);
	for (const id of charFeatures) if (queryCvList(atlas, id).size > 1) return true;

	if (
		!(Gr.styleIsQp(props.fontStyle.style) && props.char.isCompositeOrLigature) &&
		props.char.typographicFeatureSets
	) {
		for (const id of props.char.typographicFeatureSets)
			if (queryCvList(atlas, id).size > 1) return true;
	}

	return false;
}

function charIsSpecial(lch: number) {
	return lch < 0x0020 || (lch >= 0xfff0 && lch <= 0xffff) || lch === 0x034f || lch === 0xfeff;
}

function SpecimenCharacterVariantsMarker(props: SpecimenCharacterProps) {
	const ctx = useContext(SpecimenContext);
	if (!props.char.inFont) return null;
	if (charIsSpecial(props.char.lch)) return null;
	if (!charHasVariants(ctx.val.atlas, props)) return null;
	return <div className="has-variant-marker" />;
}

function SpecimenCharacterVariants(props: SpecimenCharacterProps) {
	const ctx = useContext(SpecimenContext);
	if (!props.char.inFont) return null;
	if (charIsSpecial(props.char.lch)) return null;
	if (!charHasVariants(ctx.val.atlas, props)) return null;

	return <CharVariantsImpl {...props} />;
}

function CharVariantsImpl(props: SpecimenCharacterProps) {
	const ctx = useContext(SpecimenContext);
	const [currentSelection, setCurrentSelection] = useState<SimpFeaturePair[]>([]);
	const variantRows: React.ReactElement[] = [];

	const hasCvSs = Gr.styleHasCvSs(props.fontStyle.style || Gr.Style.Sans);
	const fontSlope = props.fontStyle.slope || Gr.Slope.Upright;
	const charFeatures = gatherCharFeatures(hasCvSs, props.char, fontSlope);
	const typographicFeatures =
		Gr.styleIsQp(props.fontStyle.style) && props.char.isCompositeOrLigature
			? []
			: props.char.typographicFeatureSets || [];

	const rows = [...typographicFeatures, ...charFeatures];
	for (let iGroup = 0; iGroup < rows.length; iGroup++) {
		const fs = queryCvList(ctx.val.atlas, rows[iGroup]);
		if (fs.size <= 1) continue;
		const subgroups: React.ReactElement[] = [];

		for (let iSubgroup = 0; iSubgroup < fs.groups.length; iSubgroup++) {
			const columns: React.ReactElement[] = [];
			for (let iCol = 0; iCol < fs.groups[iSubgroup].length; iCol++) {
				const variant = fs.groups[iSubgroup][iCol];
				const fCurrent = currentSelection[iGroup] === variant.css;
				const c = [...currentSelection];
				c[iGroup] = variant.css;
				const variantOverride = c.filter(x => !!x).join(", ");

				columns.push(
					<SpecimenCharacterImpl
						key={iCol}
						{...props}
						extraClassName={fCurrent ? "current-selection" : undefined}
						fontStyle={props.fontStyle}
						variantOverride={variantOverride}
						allowCreateStandout={true}
						titleOverride={variant.description}
						onClick={() => {
							setCurrentSelection(c);
						}}
					/>,
				);
			}
			subgroups.push(
				<div
					className="subgroup"
					key={iSubgroup}
					style={{ width: `${2 * Math.min(10, fs.groups[iSubgroup].length)}em` }}
				>
					{columns}
				</div>,
			);
		}

		variantRows.push(
			<div className="group" key={iGroup}>
				<div className="group-name">{fs.name}</div>
				{subgroups}
			</div>,
		);
	}

	return <div className={joinCls("character-sample-variants")}>{variantRows}</div>;
}

type SpecimenCharacterImplProps = SpecimenCharacterProps & {
	titleOverride?: string;
	extraClassName?: string;
	allowCreateStandout?: boolean;
	onClick?: () => void;
};
function SpecimenCharacterImpl(props: SpecimenCharacterImplProps) {
	const pCtx = useContext(SpecimenContext);
	const gc = unicodeGcMap.get(props.char.lch) || "?";
	const isMark = charIsMark(props.char, gc);
	const isSpace =
		props.char.inFont &&
		(gc === "Space_Separator" ||
			gc === "Format" ||
			gc === "Line_Separator" ||
			gc === "Paragraph_Separator");
	const isMosaic =
		props.char.inFont &&
		(props.blockName === "Private Use Area" ||
			props.blockName === "Box Drawing" ||
			props.blockName === "Block Elements" ||
			props.blockName === "Symbols for Legacy Computing" ||
			props.blockName === "Symbols for Legacy Computing Supplement" ||
			props.blockName === "Symbols for Legacy Computing Supplement (Purposed)");
	const isLetter =
		props.char.inFont &&
		!isMosaic &&
		(gc === "Decimal_Number" ||
			gc === "Uppercase_Letter" ||
			gc === "Lowercase_Letter" ||
			gc === "Titlecase_Letter" ||
			gc === "Other_Letter" ||
			props.blockName === "Currency Symbols" ||
			props.blockName === "Mathematical Alphanumeric Symbols");
	return (
		<div
			className={joinCls(
				"character-sample",
				Gr.fontStyleToCls(props.fontStyle),
				props.fontStyle.markingsVisible || isMark || isSpace
					? "markings-visible"
					: "markings-hidden",
				props.extraClassName,
			)}
			style={
				props.variantOverride
					? {
							fontFeatureSettings:
								props.variantOverride + (isMark ? ', "NWID" on' : ""),
						}
					: isMark
						? { fontFeatureSettings: "'NWID' on" }
						: Gr.fontStyleToOtStyle(props.fontStyle)
			}
			title={formatCharInfo(props.char, props.titleOverride, props.variantOverride)}
			onClick={() => {
				if (props.onClick) props.onClick();
			}}
			onDoubleClick={() => {
				if (props.allowCreateStandout)
					pCtx.set({ ...pCtx.val, standouts: [...pCtx.val.standouts, props] });
			}}
		>
			<SpecimenCharacterPreBg
				char={props.char}
				isMark={isMark}
				isLetter={isLetter}
				isMosaic={isMosaic}
			/>
			<span className="character-sample-inner">
				<span className="pre">
					{(isMark ? "\uEF0E" : "") + String.fromCodePoint(props.char.lch)}
				</span>
				<SpecimenCharacterUnderBg
					char={props.char}
					isMark={isMark}
					isLetter={isLetter}
					isMosaic={isMosaic}
				/>
			</span>
			<SpecimenCharacterPostBg
				char={props.char}
				isMark={isMark}
				isLetter={isLetter}
				isMosaic={isMosaic}
			/>
		</div>
	);
}

function charIsMark(ch: Coverage.Character, gc: string) {
	return ch.inFont && (gc === "Nonspacing_Mark" || gc === "Enclosing_Mark" || ch.lch === 0x55f);
}

function formatUnicode(lch: number) {
	return lch.toString(16).toUpperCase().padStart(4, "0");
}

function formatCharInfo(ch: Coverage.Character, titleOverride?: string, variantOverride?: string) {
	const charName = unicodeNameMap.get(ch.lch) || "?";
	const gc = unicodeGcMap.get(ch.lch) || "?";
	const charSamp =
		"\u200b" +
		(gc === "Nonspacing_Mark" || gc === "Enclosing_Mark" ? "◌" : "") +
		String.fromCodePoint(ch.lch) +
		"\u200b";
	return (
		`U+${formatUnicode(ch.lch)} ⟦${charSamp}⟧\n${charName || ""}\n(${gc})` +
		(titleOverride ? "\n" + titleOverride : "") +
		(variantOverride ? "\n" + variantOverride : "")
	);
}

type SpecimenCharacterBgProps = {
	char: Coverage.Character;
	isMark: boolean;
	isLetter: boolean;
	isMosaic: boolean;
};
function SpecimenCharacterPreBg(props: SpecimenCharacterBgProps) {
	if (!props.char.inFont) return null;
	if (props.isMark) return <span className="background mark-base"></span>;
	else if (props.isLetter) return <span className="background pre-letter"></span>;
	else if (props.isMosaic) return <span className="background pre-mosaic"></span>;
	else return <span className="background pre-symbol"></span>;
}
function SpecimenCharacterUnderBg(props: SpecimenCharacterBgProps) {
	if (props.char.inFont && props.isLetter)
		return <span className="background under-letter"></span>;
	else return null;
}
function SpecimenCharacterPostBg(props: SpecimenCharacterBgProps) {
	if (!props.char.inFont || props.isMark) return null;
	else if (props.isLetter) return <span className="background post-letter"></span>;
	else if (props.isMosaic) return <span className="background post-mosaic"></span>;
	else return <span className="background post-symbol"></span>;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

type StandoutProps = { fontStyle: Gr.FontStyle; index: number; standout: Standout };
function Standout(props: StandoutProps) {
	const pCtx = useContext(SpecimenContext);
	return (
		<div
			className={joinCls("standout", props.standout.char.inFont ? "in-font" : "outside-font")}
		>
			<button
				className="close"
				onClick={e => {
					const a = pCtx.val.standouts;
					a.splice(props.index, 1);
					pCtx.set({ ...pCtx.val, standouts: a });
					e.preventDefault();
					e.stopPropagation();
					requestAnimationFrame(() => {
						if (window.getSelection) {
							const sel = window.getSelection();
							if (sel) sel.removeAllRanges();
						}
					});
				}}
			>
				✕
			</button>
			<SpecimenCharacterImpl
				{...props.standout}
				fontStyle={{ ...props.fontStyle }}
				allowCreateStandout={false}
			/>
		</div>
	);
}
