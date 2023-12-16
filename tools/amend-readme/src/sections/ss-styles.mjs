import fs from "fs";
import path from "path";

import { parseVariantsData } from "@iosevka/data-export/variants-data";

import { MdCol } from "../md-format-tools.mjs";

export default async function processSsStyles(argv, dirs) {
	const variantsData = await parseVariantsData(argv);
	const md = new MdCol("Section-Stylistic-Sets");
	const headerPath = path.resolve(dirs.fragments, "description-stylistic-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr of variantsData.composites) {
		if (!gr.rank) continue;
		md.log(`  - \`${gr.tag}\`: Set character variant to “${gr.description}”.`);
	}
	md.log(`  - Other build plans’ configuration, using \`inherits = "buildPlans.<Plan name>"\`.`);
	return md;
}
