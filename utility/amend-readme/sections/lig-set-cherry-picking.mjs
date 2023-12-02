import fs from "fs";
import path from "path";

import { parseLigationData } from "../../export-data/ligation-data.mjs";
import { MdCol } from "../md-format-tools.mjs";

export default async function processLigSetCherryPicking(dirs) {
	const ligData = await parseLigationData();
	const md = new MdCol("Section-Cherry-Picking-Ligation-Sets");
	const headerPath = path.resolve(dirs.fragments, "description-cherry-picking-ligation-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr in ligData.cherry) {
		md.log(`  - \`${gr}\`: ${ligData.cherry[gr].desc}.`);
	}
	return md;
}
