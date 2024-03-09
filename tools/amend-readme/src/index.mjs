import fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import processCherryPickingStyles from "./sections/cherry-picking-styles.mjs";
import processCvInfluences from "./sections/cv-influences.mjs";
import processCvOt from "./sections/cv-ot.mjs";
import processLangList from "./sections/lang-list.mjs";
import processLigSetCherryPicking from "./sections/lig-set-cherry-picking.mjs";
import processLigSetOt, { isLanguageSpecificLigTag } from "./sections/lig-set-ot.mjs";
import processLigSetPreDef from "./sections/lig-set-pre-def.mjs";
import processPackageList from "./sections/package-list.mjs";
import processPrivateBuildPlans from "./sections/private-build-plans.mjs";
import processSsOt from "./sections/ss-ot.mjs";
import processSsStyles from "./sections/ss-styles.mjs";

export default main;
async function main(argv) {
	let readme = await fs.promises.readFile(argv.mdFilePath, "utf-8");
	const dirs = {
		images: path.posix.relative(path.dirname(argv.mdFilePath), "images"),
		fragments: path.resolve(__dirname, "fragments"),
	};
	readme = (await processSsOt(argv, dirs)).apply(readme);
	readme = (await processCherryPickingStyles(argv, dirs)).apply(readme);
	readme = (await processSsStyles(argv, dirs)).apply(readme);
	readme = (await processCvOt(argv, dirs)).apply(readme);
	readme = (await processLigSetCherryPicking(argv, dirs)).apply(readme);
	readme = (await processLigSetPreDef(argv, dirs)).apply(readme);
	readme = (await processLigSetOt(argv, dirs, 1, g => !isLanguageSpecificLigTag(g.tag))).apply(
		readme,
	);
	readme = (await processLigSetOt(argv, dirs, 2, g => isLanguageSpecificLigTag(g.tag))).apply(
		readme,
	);
	readme = (await processLangList(argv)).apply(readme);
	readme = (await processPrivateBuildPlans(argv, dirs)).apply(readme);
	readme = (await processCvInfluences(argv)).apply(readme);
	readme = (await processPackageList(argv, dirs)).apply(readme);
	await fs.promises.writeFile(argv.mdFilePath, readme);
}
