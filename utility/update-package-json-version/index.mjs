import fs from "fs";
import path from "path";
import url from "url";

import semver from "semver";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const ChangeFileDir = path.join(__dirname, "../../changes");
const PackageJsonPath = path.join(__dirname, "../../package.json");

setTimeout(
	() =>
		main().catch(e => {
			console.error(e);
			process.exit(1);
		}),
	0
);

///////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const version = await GetLatestVersion();
	const packageJson = JSON.parse(await fs.promises.readFile(PackageJsonPath));
	packageJson.version = version;
	await fs.promises.writeFile(PackageJsonPath, JSON.stringify(packageJson, null, "  ") + "\n");
}
async function GetLatestVersion() {
	const changeFiles = await fs.promises.readdir(ChangeFileDir);
	const versions = new Set();
	for (const file of changeFiles) {
		const filePath = path.join(ChangeFileDir, file);
		const fileParts = path.parse(filePath);
		if (fileParts.ext !== ".md") continue;
		if (!semver.valid(fileParts.name)) continue;
		versions.add(fileParts.name);
	}
	const sortedVersions = Array.from(versions).sort((a, b) => semver.compare(b, a));
	return sortedVersions[0];
}
