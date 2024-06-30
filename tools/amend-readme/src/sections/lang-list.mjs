import { getCharMapAndSupportedLanguageList } from "@iosevka/data-export/supported-languages";

import { MdCol } from "../md-format-tools.mjs";

export default async function processLangList(argv) {
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath,
	);
	const md = new MdCol("Section-Language-List");
	md.log(`${cl.shared.languages.length} Supported Languages: \n`);
	md.log(cl.shared.languages.join(", "));
	return md;
}
