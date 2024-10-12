import { Section } from "../components/section";
import { DynamicStat } from "../components/stat";
import Stats from "../data-import/stats";

export function StatDashboard() {
	return (
		<Section className="stat-dashboard-section">
			<StatDashboardInner />
		</Section>
	);
}

function StatDashboardInner() {
	return (
		<div className="stat-dashboard">
			<DynamicStat quantity={Stats.codePointCount} description="Characters Covered" />
			<DynamicStat quantity={Stats.glyphCount} description="Glyphs Included" />
			<DynamicStat quantity={Stats.supportedLanguages} description="Languages Supported" />
			<DynamicStat
				quantity={Stats.characterVariants}
				description="Character Variant Features"
			/>
			<DynamicStat quantity={Stats.stylisticSets} description="Stylistic Set Features" />
			<DynamicStat quantity={Stats.ligationSets} description="Ligation Sets" />
		</div>
	);
}
