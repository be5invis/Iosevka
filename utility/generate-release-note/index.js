"use strict";

const path = require("path");
const fs = require("fs-extra");
const semver = require("semver");
const execMain = require("../shared/execMain");

const ChangeFileDir = path.join(__dirname, "../../changes");
const Version = process.argv[2];
const outputPath = process.argv[3];

execMain(main);

///////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const out = new Output();

	await GenerateChangeList(out);
	await CopyMarkdown(out, "packages-desc.md");
	await GeneratePackageList(out);

	await fs.ensureDir(path.join(__dirname, `../../release-archives/`));
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

	const [version, notes] = sortedFragments[0];
	out.log(``);
	out.log(`## Changes of version ${version}`);
	out.log(notes.trimEnd() + "\n");
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// PACKAGE LIST

const PackageShapes = {
	// shapeDesc, shapeNameSuffix, slab, count, nospace
	"": ["Monospace, Default", "", false, true],
	slab: ["Monospace, Slab", "Slab", true, true],
	curly: ["Monospace, Curly", "Curly", false, true],
	"curly-slab": ["Monospace, Curly Slab", "Curly Slab", true, true],
	ss01: ["Monospace, Andale Mono Style", "SS01"],
	ss02: ["Monospace, Anonymous Pro Style", "SS02"],
	ss03: ["Monospace, Consolas Style", "SS03"],
	ss04: ["Monospace, Menlo Style", "SS04"],
	ss05: ["Monospace, Fira Mono Style", "SS05"],
	ss06: ["Monospace, Liberation Mono Style", "SS06"],
	ss07: ["Monospace, Monaco Style", "SS07"],
	ss08: ["Monospace, Pragmata Pro Style", "SS08"],
	ss09: ["Monospace, Source Code Pro Style", "SS09"],
	ss10: ["Monospace, Envy Code R Style", "SS10"],
	ss11: ["Monospace, X Windows Fixed Style", "SS11"],
	ss12: ["Monospace, Ubuntu Mono Style", "SS12"],
	ss13: ["Monospace, Lucida Style", "SS13"],
	ss14: ["Monospace, JetBrains Mono Style", "SS14"],
	aile: ["Quasi-proportional, Sans-serif", "Aile", false, false, true],
	etoile: ["Quasi-proportional, Slab-serif", "Etoile", false, false, true],
	sparkle: ["Quasi-proportional Hybrid, like iA Writer’s Duo.", "Sparkle", false, false, true]
};

const MonospaceSpacings = {
	// spacingDesc, ligation, spacingNameSuffix
	"": ["Default", true, ""],
	term: ["Terminal", true, "Term"],
	fixed: ["Fixed", false, "Fixed"]
};
const ProportionalSpacings = {
	"": ["Default", false, ""]
};

const imagePrefix = `https://raw.githubusercontent.com/be5invis/Iosevka/v${Version}/images`;

async function GeneratePackageList(out) {
	const MockRows = 4;

	out.log(`<table>`);
	for (let shape in PackageShapes) {
		const [shapeDesc, shapeNameSuffix, , count, proportional] = PackageShapes[shape];
		const spacings = proportional ? ProportionalSpacings : MonospaceSpacings;
		const spacingKeys = Object.keys(spacings);

		const familyName = buildName("\u00a0", "Iosevka", shapeNameSuffix);
		const imageName = buildName("-", "iosevka", shape);
		const fileName = buildName("-", "ttc", "iosevka", shape, Version);
		const downloadLink = `https://github.com/be5invis/Iosevka/releases/download/v${Version}/${fileName}.zip`;

		const desc = `<i>${shapeDesc}</i>`;
		const img = `<img src="${imagePrefix}/${imageName}.png"/>`;
		out.log(
			`<tr>`,
			`<td colspan="5"><b>&#x1F4E6; ${familyName}</b> — ${desc}</td>`,
			`<td><b><a href="${downloadLink}">TTC</b></td>`,
			`</tr>`
		);

		out.log(
			`<tr>`,
			`<td><b>&nbsp;&nbsp;└ Sub-packages</b></td>`,
			`<td><b>Spacing</b></td>`,
			`<td><b>Ligatures</b></td>`,
			`<td colspan="3"><b>Downloads</b></td>`,
			`</tr>`
		);
		for (let spacing of spacingKeys) {
			const [spacingDesc, ligation, spacingNameSuffix] = spacings[spacing];
			const familyName = buildName(" ", "Iosevka", spacingNameSuffix, shapeNameSuffix);
			const createLink = (label, prefix) => {
				const fileName = buildName("-", prefix, "iosevka", spacing, shape, Version);
				const downloadLink = `https://github.com/be5invis/Iosevka/releases/download/v${Version}/${fileName}.zip`;
				return `<b><a href="${downloadLink}">${label}</a></b>`;
			};
			const leader =
				"&nbsp;&nbsp;&nbsp;&nbsp;" +
				(spacing === spacingKeys[spacingKeys.length - 1] ? "└" : "├");
			out.log(
				`<tr>`,
				`<td>${leader}&nbsp;<b>${noBreak(familyName)}</b></td>`,
				`<td>${spacingDesc}</td>`,
				`<td>${flag(ligation)}</td>`,
				`<td>${createLink("TTF", "ttf")}</td>`,
				`<td>${createLink("Unhinted", "ttf-unhinted")}</td>`,
				`<td>${createLink("WebFont", "webfont")}</td>`,
				`</tr>`
			);
		}

		out.log(`<tr>`, `<td colspan="6">${img}</td>`, `<tr/>`);
	}
	out.log(`</table>\n`);
}

function noBreak(s) {
	return s.replace(/ /g, "\u00a0");
}

function buildName(j, ...parts) {
	return parts.filter(x => !!x).join(j);
}

function flag(f) {
	return f ? "<b>Yes</b>" : "No";
}
