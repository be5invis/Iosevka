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
		projectRoot: path.resolve(__dirname, "../../"),
		images: path.posix.relative(path.dirname(argv.mdFilePath), "images"),
		fragments: path.resolve(__dirname, "fragments")
	};
	readme = (await processSsOt(dirs)).apply(readme);
	readme = (await processCherryPickingStyles(dirs)).apply(readme);
	readme = (await processSsStyles(dirs)).apply(readme);
	readme = (await processCvOt(dirs)).apply(readme);
	readme = (await processLigSetCherryPicking(dirs)).apply(readme);
	readme = (await processLigSetPreDef(dirs)).apply(readme);
	readme = (await processLigSetOt(dirs, 1, g => !isLanguageSpecificLigTag(g.tag))).apply(readme);
	readme = (await processLigSetOt(dirs, 2, g => isLanguageSpecificLigTag(g.tag))).apply(readme);
	readme = (await processLangList(argv)).apply(readme);
	readme = (await processPrivateBuildPlans(dirs)).apply(readme);
	readme = (await processCvInfluences(argv)).apply(readme);
	readme = (await processPackageList(argv, dirs)).apply(readme);
	await fs.promises.writeFile(argv.mdFilePath, readme);
}
