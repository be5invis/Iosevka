import { getCharMapAndSupportedLanguageList } from "../../export-data/supported-languages.mjs";
import { MdCol } from "../md-format-tools.mjs";

export default async function processLangList(argv) {
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath
	);
	const md = new MdCol("Section-Language-List");
	md.log(`${cl.languages.length} Supported Languages: \n`);
	md.log(cl.languages.join(", "));
	return md;
}
