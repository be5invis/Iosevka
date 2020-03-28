"use strict";

const path = require("path");
const fs = require("fs-extra");
const semver = require("semver");

const ChangeFileDir = path.join(__dirname, "../../changes");
const ModifiedSinceVersion = "2.x";
const Version = process.argv[2];
const outputPath = process.argv[3];

class Output {
	constructor() {
		this.buffer = "";
	}
	log(...s) {
		this.buffer += s.join("") + "\n";
	}
}

async function main() {
	const out = new Output();

	await CopyMarkdown(out, "packages-desc.md");
	await GeneratePackageList(out);
	await CopyMarkdown(out, "style-set-sample-image.md");
	await CopyMarkdown(out, "package-reorg.md");
	await GenerateChangeList(out);

	await fs.ensureDir(path.join(__dirname, `../../release-archives/`));
	await fs.writeFile(outputPath, out.buffer);
}

main().catch(e => {
	console.error(e);
	process.exit(1);
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Copy Markdown

async function CopyMarkdown(out, name) {
	const content = await fs.readFile(
		path.resolve(__dirname, `release-note-fragments/${name}`),
		"utf8"
	);
	out.log(content);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGE LIST

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
		out.log(` * **${version}**`);
		out.log((notes.trim() + "\n").replace(/^/gm, "   "));
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// PACKAGE LIST

const PackageShapes = {
	// shapeDesc, shapeNameSuffix, slab, count, nospace
	"": ["Default", "", false, true],
	slab: ["Slab", "Slab", true, true],
	curly: ["Curly", "Curly", false, true],
	"curly-slab": ["Curly Slab", "Curly Slab", true, true],
	ss01: ["Andale Mono Style", "SS01"],
	ss02: ["Anonymous Pro Style", "SS02"],
	ss03: ["Consolas Style", "SS03"],
	ss04: ["Menlo Style", "SS04"],
	ss05: ["Fira Mono Style", "SS05"],
	ss06: ["Liberation Mono Style", "SS06"],
	ss07: ["Monaco Style", "SS07"],
	ss08: ["Pragmata Pro Style", "SS08"],
	ss09: ["Source Code Pro Style", "SS09"],
	ss10: ["Envy Code R Style", "SS10"],
	ss11: ["X Windows Fixed Style", "SS11"],
	ss12: ["Ubuntu Mono Style", "SS12"],
	ss13: ["Lucida Style", "SS13"],
	ss14: ["JetBrains Mono Style", "SS14"],
	aile: ["Quasi-proportional", "Aile", false, false, true],
	etoile: ["Quasi-proportional slab-serif", "Etoile", false, false, true],
	sparkle: ["Quasi-proportional family — like iA Writer’s Duo.", "Sparkle", false, false, true]
};

const PackageSpacings = {
	// spacingDesc, ligation, spacingNameSuffix
	"": ["Default", true, ""],
	fixed: ["Fixed", false, "Fixed"],
	term: ["Terminal", true, "Term"]
};

async function GeneratePackageList(out) {
	let nr = 1;
	out.log(`### Packages`);
	out.log(`| Package | Description |\n| --- | --- |`);
	for (let shape in PackageShapes) {
		const [shapeDesc, shapeNameSuffix, , count, nospace] = PackageShapes[shape];
		for (let spacing in PackageSpacings) {
			if (nospace && spacing) continue;
			const [spacingDesc, ligation, spacingNameSuffix] = PackageSpacings[spacing];
			const fileName = buildName(
				"-",
				count ? pad(nr, 2, "0") : "",
				"iosevka",
				spacing,
				shape,
				Version
			);
			const familyName = buildName(" ", "Iosevka", spacingNameSuffix, shapeNameSuffix);
			const desc = nospace
				? `_${shapeDesc}_`
				: `**Shape**: _${shapeDesc}_; **Spacing**: _${spacingDesc}_ <br/>` +
				  `**Ligation**: ${flag(ligation)}`;
			if (count) nr++;
			out.log(`| \`${fileName}\`<br/>**Menu Name**: \`${familyName}\` | ${desc} |`);
		}
	}
	out.log();
}

function pad(s, n, p) {
	s = "" + s;
	while (s.length < n) s = p + s;
	return s;
}

function buildName(j, ...parts) {
	return parts.filter(x => !!x).join(j);
}

function flag(f) {
	return f ? "**Yes**" : "No";
}
