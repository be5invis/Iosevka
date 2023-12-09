import fs from "fs";
import path from "path";

import { parseLigationData } from "@iosevka/data-export/ligation-data";

import { MdCol } from "../md-format-tools.mjs";

export default async function processLigSetCherryPicking(argv, dirs) {
	const ligData = await parseLigationData(argv);
	const md = new MdCol("Section-Cherry-Picking-Ligation-Sets");
	const headerPath = path.resolve(dirs.fragments, "description-cherry-picking-ligation-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr in ligData.cherry) {
		md.log(`  - \`${gr}\`: ${ligData.cherry[gr].desc}.`);
	}
	return md;
}
