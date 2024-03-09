import fs from "fs";

import { parseLigationData } from "./ligation-data.mjs";
import { getCharMapAndSupportedLanguageList } from "./supported-languages.mjs";
import { parseVariantsData } from "./variants-data.mjs";

export default main;
async function main(argv) {
	const variantsData = await parseVariantsData(argv);
	const ligationData = await parseLigationData(argv);
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath,
	);
	await fs.promises.writeFile(
		argv.exportPathMeta,
		JSON.stringify(
			{
				version: argv.version,
				variantsData,
				ligationData: {
					cherry: ligationData.cherry,
					samplesNarrow: ligationData.samplesNarrow,
					nonMergeSets: ligationData.nonMergeSets,
				},
			},
			null,
			2,
		),
	);
	await fs.promises.writeFile(
		argv.exportPathCov,
		JSON.stringify({ version: argv.version, ...cl }, null, 2),
	);
}
