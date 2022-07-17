import fs from "fs";
import { parseVariantsData } from "./variants-data.mjs";
import { parseLigationData } from "./ligation-data.mjs";
import { getCharMapAndSupportedLanguageList } from "./supported-languages.mjs";
import package$0 from "../../package.json" assert { type: "json" };

const version = package$0.version;
export default (async function main(argv) {
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath
	);
	await fs.promises.writeFile(
		argv.exportPathMeta,
		JSON.stringify(
			{
				version,
				variantsData,
				ligationData: {
					cherry: ligationData.cherry,
					samplesNarrow: ligationData.samplesNarrow,
					nonMergeSets: ligationData.nonMergeSets
				}
			},
			{ spaces: 2 }
		)
	);
	await fs.promises.writeFile(
		argv.exportPathCov,
		JSON.stringify({ version, ...cl }, { spaces: 2 })
	);
});
