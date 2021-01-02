"use strict";

const path = require("path");
const fs = require("fs-extra");
const semver = require("semver");
const execMain = require("../shared/execMain");

const ChangeFileDir = path.join(__dirname, "../../changes");
const Version = process.argv[2];
const releasePackagesJsonPath = process.argv[3];
const outputPath = process.argv[4];

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

const Spacings = {
	// spacingDesc, ligation
	type: ["Default", true],
	term: ["Terminal", true],
	fixed: ["Fixed", false],
	"quasi-proportional": ["Default", false]
};

const imagePrefix = `https://raw.githubusercontent.com/be5invis/Iosevka/v${Version}/images`;

async function GeneratePackageList(out) {
	const pkgShapesData = await fs.readJson(releasePackagesJsonPath);
	const DownloadLinkPrefix = `https://github.com/be5invis/Iosevka/releases/download/v${Version}`;

	out.log(`<table>`);
	for (let [groupID, gr] of Object.entries(pkgShapesData)) {
		const prime = gr.subGroups[groupID];

		const familyName = buildName("\u00a0", ...prime.family.split(" "));
		const sTtcName = buildName("-", "super-ttc", groupID, Version);
		const ttcName = buildName("-", "ttc", groupID, Version);
		const sTtcLink = `${DownloadLinkPrefix}/${sTtcName}.zip`;
		const ttcLink = `${DownloadLinkPrefix}/${ttcName}.zip`;

		const proportionPrefix = gr.quasiProportional ? "Quasi-proportional" : "Monospace";
		const desc = `<i>${proportionPrefix}, ${prime.desc}</i>`;
		const img = `<img src="${imagePrefix}/${groupID}.png"/>`;
		out.log(
			`<tr>`,
			`<td colspan="4"><b>&#x1F4E6; ${familyName}</b> — ${desc}</td>`,
			`<td><b><a href="${sTtcLink}">Super-TTC</b></td>`,
			`<td><b><a href="${ttcLink}">TTC</b></td>`,
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
		let lastSubGroupID = null;
		for (const [subGroupID, subGr] of Object.entries(gr.subGroups)) {
			lastSubGroupID = subGroupID;
		}
		for (const [subGroupID, subGr] of Object.entries(gr.subGroups)) {
			const [spacingDesc, ligation] = Spacings[subGr.spacing];
			const createLink = (label, prefix) => {
				const fileName = buildName("-", prefix, subGroupID, Version);
				const downloadLink = `${DownloadLinkPrefix}/${fileName}.zip`;
				return `<b><a href="${downloadLink}">${label}</a></b>`;
			};
			const leader = "&nbsp;&nbsp;&nbsp;&nbsp;" + (subGroupID === lastSubGroupID ? "└" : "├");
			out.log(
				`<tr>`,
				`<td>${leader}&nbsp;<b>${noBreak(subGr.family)}</b></td>`,
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
