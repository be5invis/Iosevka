import fs from "fs";
import path from "path";

import { parseLigationData } from "@iosevka/data-export/ligation-data";

import { MdCol } from "../md-format-tools.mjs";

export default async function processLigSetPreDef(argv, dirs) {
	const ligData = await parseLigationData(argv);
	const md = new MdCol("Section-Predefined-Ligation-Sets");
	const headerPath = path.resolve(dirs.fragments, "description-predefined-ligation-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr in ligData.rawSets) {
		if (!ligData.rawSets[gr].desc) continue;
		const readmeDesc =
			ligData.rawSets[gr].readmeDesc ||
			`Default ligation set would be assigned to ${ligData.rawSets[gr].desc}`;
		md.log(`  - \`${gr}\`: ${readmeDesc}.`);
	}
	return md;
}
