import fs from "fs";
import path from "path";

import { MdCol } from "../md-format-tools.mjs";

export default async function processPrivateBuildPlans(argv, dirs) {
	const md = new MdCol("Section-Private-Build-Plan-Sample");
	const tomlPath = path.resolve(argv.projectRoot, "private-build-plans.sample.toml");
	const toml = await fs.promises.readFile(tomlPath, "utf-8");
	md.log("```toml\n" + toml + "```");
	return md;
}
