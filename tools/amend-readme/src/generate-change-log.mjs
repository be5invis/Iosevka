import fs from "fs";
import path from "path";
import url from "url";

import semver from "semver";

import { MdCol } from "./md-format-tools.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const ChangesFileDir = path.join(__dirname, "../../../changes");

///////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGE LIST

async function GenerateChangeList(argv, out) {
	const changeFiles = await fs.promises.readdir(ChangesFileDir);
	const fragments = new Map();
	for (const file of changeFiles) {
		const filePath = path.join(ChangesFileDir, file);
		const fileParts = path.parse(filePath);
		if (fileParts.ext !== ".md") continue;
		if (!semver.valid(fileParts.name) || semver.lt(argv.version, fileParts.name)) continue;
		fragments.set(fileParts.name, await fs.promises.readFile(filePath, "utf8"));
	}
	const sortedFragments = Array.from(fragments).sort((a, b) => semver.compare(b[0], a[0]));
	out.log(`## Modifications since last major version`);
	for (const [version, notes] of sortedFragments) {
		out.log(`\n### ${version}\n`);
		out.log(notes.trimEnd() + "\n");
	}
}
export default async function main(argv) {
	const out = new MdCol();
	await GenerateChangeList(argv, out);
	await fs.promises.writeFile(argv.outputPath, out.data);
}
