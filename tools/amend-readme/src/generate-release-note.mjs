import fs from "fs";
import path from "path";
import url from "url";

import SemVer from "semver";

import { MdCol } from "./md-format-tools.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const ChangesFileDir = path.join(__dirname, "../../../changes");

///////////////////////////////////////////////////////////////////////////////////////////////////
// RELEASE NOTE

async function GenerateChangeList(argv, out) {
	const changeFiles = await fs.promises.readdir(ChangesFileDir);
	const fragments = new Map();
	for (const file of changeFiles) {
		const filePath = path.join(ChangesFileDir, file);
		const fileParts = path.parse(filePath);
		if (fileParts.ext !== ".md") continue;
		if (!SemVer.valid(fileParts.name) || SemVer.lt(argv.version, fileParts.name)) continue;
		fragments.set(fileParts.name, await fs.promises.readFile(filePath, "utf8"));
	}
	const sortedFragments = Array.from(fragments).sort((a, b) => SemVer.compare(b[0], a[0]));
	const latestMajor = SemVer.major(sortedFragments[0][0]);
	const latestMinor = SemVer.minor(sortedFragments[0][0]);
	for (const [version, notes] of sortedFragments) {
		const currentMajor = SemVer.major(version);
		const currentMinor = SemVer.minor(version);
		if (latestMajor !== currentMajor || latestMinor !== currentMinor) continue;
		out.log(``);
		out.log(`## Changes of version ${version}`);
		out.log(notes.trimEnd() + "\n");
	}
}
export default async function main(argv) {
	const out = new MdCol("Release-Note");
	const baseUrl = `https://github.com/be5invis/Iosevka/blob/v${argv.version}/doc`;
	const releaseUrl = `https://github.com/be5invis/Iosevka/releases/download/v${argv.version}`;

	out.log(
		`<table>\n` +
			`<tr><td align="center"><h1>` +
			`<a href="${baseUrl}/PACKAGE-LIST.md">View package list</a>` +
			`</h1></td></tr>\n` +
			`<tr><td align="center">` +
			`<a href="${releaseUrl}/SHA-256.txt">SHA-256 hashes</a>` +
			`</td></tr>\n` +
			`</table>\n`,
	);

	await GenerateChangeList(argv, out);

	await fs.promises.writeFile(argv.outputPath, out.data);
}
