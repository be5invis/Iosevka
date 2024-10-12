import * as Gr from "../data-import/grades";

export type FeatureUsageShowerProps = {
	directives: Gr.FeatureAssignment;
};
export function FeatureUsageShower(props: FeatureUsageShowerProps) {
	const fontFeatureSettingsCss: JSX.Element[] = [];
	for (const [tag, on] of Object.entries(props.directives)) {
		const space =
			fontFeatureSettingsCss.length % 5 === 0
				? "\n" + " ".repeat(4 + "font-feature-settings: ".length)
				: " ";
		fontFeatureSettingsCss.push(
			<span key={fontFeatureSettingsCss.length}>
				{!fontFeatureSettingsCss.length ? null : (
					<span className="token dim">,{space}</span>
				)}
				<span className="token string">"{tag}"</span>{" "}
				<span className="token keyword">{on}</span>
			</span>,
		);
	}
	if (!fontFeatureSettingsCss.length) return null;

	return (
		<div className="feature-usage-shower">
			<h3>Use this variant in CSS</h3>
			<pre className="sample-code">
				your-selector <span className="token dim">{"{"}</span>
				{"\n"}
				{"    "}
				<span className="token entity">font-feature-settings</span>
				<span className="token dim">:</span> {fontFeatureSettingsCss}
				<span className="token dim">;</span>
				{"\n"}
				<span className="token dim">{"}"}</span>
			</pre>
		</div>
	);
}
