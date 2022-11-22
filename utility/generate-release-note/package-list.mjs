import fs from "fs";
import path from "path";
import url from "url";

import { Output } from "./shared/index.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

///////////////////////////////////////////////////////////////////////////////////////////////////
// Copy Markdown
async function CopyMarkdown(out, name) {
	const content = await fs.promises.readFile(
		path.resolve(__dirname, `release-note-fragments/${name}`),
		"utf8"
	);
	out.log(content);
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
const ImagePrefixNoVersion = `https://raw.githubusercontent.com/be5invis/Iosevka`;
const DownloadLinkPrefixNoVersion = `https://github.com/be5invis/Iosevka/releases/download`;
async function GeneratePackageList(argv, out) {
	const imagePrefix = `${ImagePrefixNoVersion}/v${argv.version}/images`;
	const pkgShapesData = JSON.parse(await fs.promises.readFile(argv.releasePackagesJsonPath));
	const DownloadLinkPrefix = `${DownloadLinkPrefixNoVersion}/v${argv.version}`;
	out.log(`<table>`);
	for (let [groupID, gr] of Object.entries(pkgShapesData)) {
		const prime = gr.subGroups[groupID];
		const familyName = buildName("\u00a0", ...prime.family.split(" "));
		const sTtcName = buildName("-", "super-ttc", groupID, argv.version);
		const ttcName = buildName("-", "ttc", groupID, argv.version);
		const sTtcLink = `${DownloadLinkPrefix}/${sTtcName}.zip`;
		const ttcLink = `${DownloadLinkPrefix}/${ttcName}.zip`;
		const proportionPrefix = gr.quasiProportional ? "Quasi-proportional" : "Monospace";
		const desc = `<i>${proportionPrefix}, ${prime.desc}</i>`;
		const img = ImgX(`${imagePrefix}/${groupID}`);
		out.log(
			`<tr>`,
			`<td colspan="3"><b>&#x1F4E6; ${familyName}</b> — ${desc}</td>`,
			`<td><b><a href="${sTtcLink}">Super\u00A0TTC</b></td>`,
			`<td><b><a href="${ttcLink}">TTC</b></td>`,
			`<td colspan="2">&nbsp;</td>`,
			`</tr>`
		);
		out.log(
			`<tr>`,
			`<td><b>&nbsp;&nbsp;└ Sub-packages</b></td>`,
			`<td><b>Spacing</b></td>`,
			`<td><b>Ligatures</b></td>`,
			`<td colspan="4"><b>Downloads</b></td>`,
			`</tr>`
		);
		let lastSubGroupID = null;
		for (const [subGroupID, subGr] of Object.entries(gr.subGroups)) {
			lastSubGroupID = subGroupID;
		}
		for (const [subGroupID, subGr] of Object.entries(gr.subGroups)) {
			const [spacingDesc, ligation] = Spacings[subGr.spacing];
			const createLink = (label, prefix) => {
				const fileName = buildName("-", prefix, subGroupID, argv.version);
				const downloadLink = `${DownloadLinkPrefix}/${fileName}.zip`;
				return `<b><a href="${downloadLink}">${label}</a></b>`;
			};
			const leader = "&nbsp;&nbsp;&nbsp;&nbsp;" + (subGroupID === lastSubGroupID ? "└" : "├");
			out.log(
				`<tr>`,
				`<td>${leader}&nbsp;<b>${noBreak(subGr.family)}</b></td>`,
				`<td>${spacingDesc}</td>`,
				`<td>${flag(ligation)}</td>`,
				`<td>${createLink("Super\u00A0TTC", "super-ttc-sgr")}</td>`,
				`<td>${createLink("TTC", "ttc-sgr")}</td>`,
				`<td>${createLink("TTF", "ttf")}&nbsp;` +
					`(${createLink("Unhinted", "ttf-unhinted")})</td>`,
				`<td>${createLink("WebFont", "webfont")}&nbsp;` +
					`(${createLink("Unhinted", "webfont-unhinted")})</td>`,
				`</tr>`
			);
		}
		out.log(`<tr>`, `<td colspan="8">${img}</td>`, `</tr>`);
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
function ImgX(path, w) {
	const widthProp = w ? ` width=${w}` : ``;
	return (
		`<img src="${path}.light.svg#gh-light-mode-only"${widthProp}/>` +
		`<img src="${path}.dark.svg#gh-dark-mode-only"${widthProp}/>`
	);
}
export default (async function main(argv) {
	const out = new Output();
	out.log(`# Package list of Release ${argv.version}`);
	await CopyMarkdown(out, "packages-desc.md");
	await GeneratePackageList(argv, out);
	await fs.promises.writeFile(argv.outputPath, out.buffer);
});
