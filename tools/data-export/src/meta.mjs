import fs from "fs";

import { parseLigationData } from "./ligation-data.mjs";
import { parseVariantsData } from "./variants-data.mjs";

export default main;
async function main(argv) {
	const variantsData = await parseVariantsData(argv);
	const ligationData = await parseLigationData(argv);
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
}
