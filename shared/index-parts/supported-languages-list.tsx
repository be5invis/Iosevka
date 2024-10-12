import { Section } from "../components/section";
import SupportedLanguages from "../data-import/languages";
import Stats from "../data-import/stats";

export function SupportedLanguagesList() {
	return (
		<Section className="secondary">
			<h3>{Stats.supportedLanguages} Languages Supported</h3>
			<ul className="enumeration supported-languages">
				{SupportedLanguages.map(lang => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
		</Section>
	);
}
