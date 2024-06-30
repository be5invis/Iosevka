import fs from "fs";

import { getCharMapAndSupportedLanguageList } from "./supported-languages.mjs";

export default main;
async function main(argv) {
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath,
	);

	if (argv.outputShared) {
		await fs.promises.writeFile(argv.outputShared, JSON.stringify(cl.shared, null, 2));
	}

	{
		delete cl.udatMap;
		await fs.promises.writeFile(
			argv.output,
			JSON.stringify({ version: argv.version, ...cl.unique }, null, 2),
		);
	}
}
