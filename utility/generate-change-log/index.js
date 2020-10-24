"use strict";

const path = require("path");
const fs = require("fs-extra");
const semver = require("semver");
const execMain = require("../shared/execMain");

const ChangeFileDir = path.join(__dirname, "../../changes");
const ModifiedSinceVersion = "2.x";
const Version = process.argv[2];
const outputPath = process.argv[3];

execMain(main);

///////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const out = new Output();
	await GenerateChangeList(out);
	await fs.writeFile(outputPath, out.buffer);
}

class Output {
	constructor() {
		this.buffer = "";
	}
	log(...s) {
		this.buffer += s.join("") + "\n";
	}
}

async function GenerateChangeList(out) {
	const changeFiles = await fs.readdir(ChangeFileDir);
	const fragments = new Map();
	for (const file of changeFiles) {
		const filePath = path.join(ChangeFileDir, file);
		const fileParts = path.parse(filePath);
		if (fileParts.ext !== ".md") continue;
		if (!semver.valid(fileParts.name) || semver.lt(Version, fileParts.name)) continue;
		fragments.set(fileParts.name, await fs.readFile(filePath, "utf8"));
	}
	const sortedFragments = Array.from(fragments).sort((a, b) => semver.compare(b[0], a[0]));

	out.log(`## Modifications since version ${ModifiedSinceVersion}`);
	for (const [version, notes] of sortedFragments) {
		out.log(`\n### ${version}\n`);
		out.log(notes.trimEnd() + "\n");
	}
}
