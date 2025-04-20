import * as React from "react";
import { createContext, useContext, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import * as Cv from "../data-import/cv";
import * as Gr from "../data-import/grades";
import { joinCls } from "../utils/join-classes";
import { Ptr } from "../utils/ptr";

export enum ActiveVariantKind {
	Default = 0,
	NonDefault = 1,
}
export type CvPanelGroupProps = {
	className?: string;
	prime: Cv.Prime;
	fontStyle?: Gr.FontStyle;
	onItemSelect?: (kVariant: string) => void;
	onItemClear?: () => void;
	activeVariantKey?: string;
	activeVariantKind?: ActiveVariantKind;
};

const DropdownContext = createContext<Ptr<boolean>>({ val: false, set: () => {} });

export function CharacterVariantPicker(props: CvPanelGroupProps) {
	const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
	const dropdownContext: Ptr<boolean> = {
		val: dropdownVisible,
		set: x => setDropdownVisible(x),
	};
	const prime = props.prime;
	const ref = React.useRef<HTMLDivElement>(null);
	useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => dropdownContext.set(false));

	let samplerInTitle = prime.hotChars.map(x => `⟦${x}⟧`).join(", ");
	if (prime.samplerExplain) samplerInTitle += ` (${prime.samplerExplain})`;

	return (
		<DropdownContext.Provider value={dropdownContext}>
			<div
				ref={ref}
				className={joinCls(
					"character-variant-picker-group",
					props.className,
					dropdownVisible ? "dropdown-visible" : "dropdown-hidden",
				)}
				onContextMenu={e => {
					e.preventDefault();
					e.stopPropagation();
					if (props.onItemClear) props.onItemClear();
				}}
				title={`Set variant for ${samplerInTitle};\nRight click to reset.`}
			>
				<CvPanelGroupHeader {...props} />
				<CharacterVariantOptionsList {...props} />
			</div>
		</DropdownContext.Provider>
	);
}

export function CharacterVariantOptionsList(props: CvPanelGroupProps) {
	const prime = props.prime;

	const groups: React.ReactElement[][] = [];
	let maxItems = 0;
	for (const variant of prime.variants.values()) {
		const groupRank = variant.groupRank || 0;
		if (!groups[groupRank]) groups[groupRank] = [];
		groups[groupRank].push(
			<CvPanelOption {...props} primeVariant={variant} key={variant.key} />,
		);
		if (groups[groupRank].length > maxItems) maxItems = groups[groupRank].length;
	}

	return (
		<div className="options" style={{ width: 1.75 * Math.min(9, maxItems) + "rem" }}>
			{groups.map((gr, idx) =>
				gr && gr.length ? (
					<div className="group" key={idx}>
						{gr}
					</div>
				) : null,
			)}
		</div>
	);
}

function CvPanelGroupHeader(props: CvPanelGroupProps) {
	const pDropdownVisible = useContext(DropdownContext);

	const prime = props.prime;

	const activeVariant = props.activeVariantKey
		? prime.variants.get(props.activeVariantKey)
		: undefined;
	const fNonDefault = activeVariant && props.activeVariantKind === ActiveVariantKind.NonDefault;
	const activeCvAssignment: null | Gr.FeatureAssignment =
		activeVariant && prime.tag ? { [prime.tag]: activeVariant.rank || 0 } : null;

	const fs: Gr.FontStyle = {
		...props.fontStyle,
		charVarTags: activeCvAssignment,
		ligationTag: "dlig",
		ligationRank: 1,
	};

	return (
		<a
			className={joinCls("option", "header", fNonDefault ? "non-default" : null)}
			style={Gr.fontStyleToOtStyle(fs)}
			onClick={() => pDropdownVisible.set(true)}
		>
			<span className={joinCls("upright-sample", Gr.fontStyleToCls(fs))}>
				{prime.descSampleText[0]}
			</span>
			<span className="dropdown-icon">{"▼"}</span>
		</a>
	);
}

type CvPanelOptionProps = CvPanelGroupProps & {
	primeVariant: Cv.PrimeVariant;
};
function CvPanelOption(props: CvPanelOptionProps) {
	const { prime, primeVariant } = props;
	if (!prime.tag || !primeVariant.rank) return null;

	const fActive = props.activeVariantKey === primeVariant.key;
	const fNonDefault = props.activeVariantKind === ActiveVariantKind.NonDefault;
	const cvAssignment: null | Gr.FeatureAssignment = { [prime.tag]: primeVariant.rank };
	const title =
		`CSS: '${prime.tag}' ${primeVariant.rank}\n` +
		`TOML: ${prime.key} = '${primeVariant.key}'\n` +
		`${primeVariant.description}`;
	const fs: Gr.FontStyle = {
		...props.fontStyle,
		charVarTags: cvAssignment,
		ligationTag: "dlig",
		ligationRank: 1,
	};

	return (
		<a
			className={joinCls(
				"option",
				Gr.fontStyleToCls(fs),
				fActive ? "active" : "inactive",
				fNonDefault ? "non-default" : null,
			)}
			style={Gr.fontStyleToOtStyle(fs)}
			onClick={() => {
				if (props.onItemSelect) props.onItemSelect(primeVariant.key);
			}}
			title={title}
		>
			<span className="upright-sample">{prime.descSampleText[0]}</span>
		</a>
	);
}
