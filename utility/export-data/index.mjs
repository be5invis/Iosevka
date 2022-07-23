import fs from "fs";
import path from "path";
import * as url from "url";

import { parseLigationData } from "./ligation-data.mjs";
import { getCharMapAndSupportedLanguageList } from "./supported-languages.mjs";
import { parseVariantsData } from "./variants-data.mjs";

export default main;
async function main(argv) {
	const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
	const packageJson = JSON.parse(
		await fs.promises.readFile(path.join(__dirname, "../../package.json"))
	);
	const version = packageJson.version;

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
}
