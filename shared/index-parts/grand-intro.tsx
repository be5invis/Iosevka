import { Section } from "../components/section";
import { DynamicStat, StaticStat } from "../components/stat";
import * as Gr from "../data-import/grades";
import Stats from "../data-import/stats";
import { joinCls } from "../utils/join-classes";

export function GrandIntro() {
	return (
		<Section className="grand-intro">
			<IntroText />
			<IntroFamily />
		</Section>
	);
}

function IntroText() {
	return (
		<div className="grand-intro-text">
			<strong>Iosevka</strong> is an <em>open-source</em>, <em>sans-serif</em>&nbsp;+&nbsp;
			<em>slab-serif</em>, <em>monospace</em>&nbsp;+&nbsp;
			<em>quasi&#8209;proportional</em> typeface family, designed for <em>writing code</em>,
			using in <em>terminals</em>, and preparing <em>technical documents</em>.
		</div>
	);
}

function IntroFamily() {
	const Mono = { ...Gr.DefaultFontStyle, weight: Gr.Weight.Light };
	const Slab = { ...Mono, style: Gr.Style.Slab };
	const Aile = { ...Mono, style: Gr.Style.Aile };
	const Etoile = { ...Mono, style: Gr.Style.Etoile };
	const IntroFamilyItems: IntroFamilyItemProps[] = [
		{
			fontStyle: Mono,
			familyName: "Iosevka",
			spacingType: "Monospace",
			hasWidth: true,
			hasLigation: true,
		},
		{
			fontStyle: Mono,
			familyName: "Iosevka Term",
			spacingType: "Monospace",
			hasWidth: true,
			hasLigation: true,
		},
		{
			fontStyle: Mono,
			familyName: "Iosevka Fixed",
			spacingType: "Monospace, Ligation Off",
			hasWidth: true,
		},
		{
			fontStyle: Slab,
			familyName: "Iosevka Slab",
			spacingType: "Monospace",
			hasWidth: true,
			hasLigation: true,
		},
		{
			fontStyle: Slab,
			familyName: "Iosevka Term Slab",
			spacingType: "Monospace",
			hasWidth: true,
			hasLigation: true,
		},
		{
			fontStyle: Slab,
			familyName: "Iosevka Fixed Slab",
			spacingType: "Monospace, Ligation Off",
			hasWidth: true,
		},
		{ fontStyle: Aile, familyName: "Iosevka Aile", spacingType: "Quasi-Proportional" },
		{ fontStyle: Etoile, familyName: "Iosevka Etoile", spacingType: "Quasi-Proportional" },
	];
	return (
		<div className="grand-intro-family">
			{IntroFamilyItems.map(item => (
				<IntroFamilyItem {...item} key={item.familyName} />
			))}
			<div className="family-item enumeration">
				<h3 className="family-name">{}</h3>
				<div className="stat refer">
					{Gr.DefaultWeightGrades.map((gr, f) => (
						<div className="enumeration-item" key={gr}>
							{f.display}
						</div>
					))}
				</div>
				<div className="stat static"></div>
				<div className="stat refer">
					{Gr.DefaultSlopeGrade.map((gr, f) => (
						<div className="enumeration-item" key={gr}>
							{f.display}
						</div>
					))}
				</div>
				<div className="stat static"></div>
				<div className="stat refer ext-4">
					{Gr.DefaultWidthGrade.map((gr, f) => (
						<div className="enumeration-item" key={gr}>
							{f.display}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

type IntroFamilyItemProps = {
	fontStyle: Gr.FontStyle;
	familyName: string;
	spacingType: string;
	hasWidth?: boolean;
	hasLigation?: boolean;
};
function IntroFamilyItem(props: IntroFamilyItemProps) {
	return (
		<div className="family-item">
			<h3 className={joinCls("family-name", Gr.fontStyleToCls(props.fontStyle))}>
				{props.familyName}
			</h3>
			<h4 className="spacing-type">{props.spacingType}</h4>
			<DynamicStat quantity={Stats.weightCount} description="Weights" />
			<StaticStat quantity="×" description=" " />
			<DynamicStat quantity={Stats.slopeCount} description="Slopes" />
			<StaticStat
				quantity="×"
				description=" "
				className={props.hasWidth ? "visible" : "hidden"}
			/>
			<DynamicStat
				quantity={Stats.widthCount}
				description="Widths"
				className={props.hasWidth ? "visible" : "hidden"}
			/>
		</div>
	);
}
