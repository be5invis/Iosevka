import fs from "fs";
import path from "path";

import { ImgX, MdCol } from "../md-format-tools.mjs";

const ImagePrefixNoVersion = `https://raw.githubusercontent.com/be5invis/Iosevka`;
const DownloadLinkPrefixNoVersion = `https://github.com/be5invis/Iosevka/releases/download`;

export default async function processPackageList(argv, dirs) {
	const imagePrefix = `${ImagePrefixNoVersion}/v${argv.version}/images`;
	const pkgShapesData = JSON.parse(await fs.promises.readFile(argv.releasePackagesJsonPath));
	const DownloadLinkPrefix = `${DownloadLinkPrefixNoVersion}/v${argv.version}`;

	const md = new MdCol("Section-Package-List");
	md.log(`# Package list of Release ${argv.version}`);

	const headerPath = path.resolve(dirs.fragments, "packages-desc.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));

	md.log(`<table>`);
	for (let [groupID, gr] of Object.entries(pkgShapesData)) {
		const prime = gr.subGroups[groupID];
		const familyName = buildName("\u00a0", ...prime.family.split(" "));
		const sTtcName = buildName("-", "SuperTTC", groupID, argv.version);
		const ttcName = buildName("-", "PkgTTC", groupID, argv.version);
		const proportionPrefix = gr.quasiProportional ? "Quasi-proportional" : "Monospace";
		const desc = `<i>${proportionPrefix}, ${prime.desc}</i>`;
		const img = ImgX(`${imagePrefix}/package-sample-${groupID}`);

		let ttcCells = [`<td colspan="4">&nbsp;</td>`];
		const hasSpacings = Object.entries(gr.subGroups).length > 1;
		if (hasSpacings) {
			const sTtcLink = `${DownloadLinkPrefix}/${sTtcName}.zip`;
			const ttcLink = `${DownloadLinkPrefix}/${ttcName}.zip`;
			ttcCells = [
				`<td><b><a href="${sTtcLink}">Super\u00A0TTC</b></td>`,
				`<td><b><a href="${ttcLink}">TTC</b></td>`,
				`<td colspan="2">&nbsp;</td>`,
			];
		}

		md.log(
			`<tr>`,
			`<td colspan="3"><b>&#x1F4E6; ${familyName}</b> — ${desc}</td>`,
			...ttcCells,
			`</tr>`,
		);
		md.log(
			`<tr>`,
			`<td><b>&nbsp;&nbsp;└ Sub-packages</b></td>`,
			`<td><b>Spacing</b></td>`,
			`<td><b>Ligatures</b></td>`,
			`<td colspan="4"><b>Downloads</b></td>`,
			`</tr>`,
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
			const superTtcPrefix = hasSpacings ? "SuperTTC-SGr" : "SuperTTC";
			const ttcPrefix = hasSpacings ? "PkgTTC-SGr" : "PkgTTC";
			md.log(
				`<tr>`,
				`<td>${leader}&nbsp;<b>${noBreak(subGr.family)}</b></td>`,
				`<td>${spacingDesc}</td>`,
				`<td>${flag(ligation)}</td>`,
				`<td>${createLink("Super\u00A0TTC", superTtcPrefix)}</td>`,
				`<td>${createLink("TTC", ttcPrefix)}</td>`,
				`<td>${createLink("TTF", "PkgTTF")}&nbsp;` +
					`(${createLink("Unhinted", "PkgTTF-Unhinted")})</td>`,
				`<td>${createLink("WebFont", "PkgWebFont")}&nbsp;` +
					`(${createLink("Unhinted", "PkgWebFont-Unhinted")})</td>`,
				`</tr>`,
			);
		}
		md.log(`<tr>`, `<td colspan="8">${img}</td>`, `</tr>`);
	}
	md.log(`</table>\n`);

	return md;
}
function buildName(j, ...parts) {
	return parts.filter(x => !!x).join(j);
}
function noBreak(s) {
	return s.replace(/ /g, "\u00a0");
}
const Spacings = {
	// spacingDesc, ligation
	type: ["Default", true],
	term: ["Terminal", true],
	fixed: ["Fixed", false],
	"quasi-proportional": ["Default", false],
};
function flag(f) {
	return f ? "<b>Yes</b>" : "No";
}
