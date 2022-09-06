import fs from "fs";
import path from "path";
import * as url from "url";

import { parseLigationData } from "../export-data/ligation-data.mjs";
import { getCharMapAndSupportedLanguageList } from "../export-data/supported-languages.mjs";
import { parseVariantsData } from "../export-data/variants-data.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default main;
async function main(argv) {
	let readme = await fs.promises.readFile(argv.mdFilePath, "utf-8");
	const dirs = {
		images: path.posix.relative(path.dirname(argv.mdFilePath), "images")
	};
	readme = (await processSsOt(dirs)).apply(readme);
	readme = (await processCherryPickingStyles(dirs)).apply(readme);
	readme = (await processSsStyles()).apply(readme);
	readme = (await processCvOt(dirs)).apply(readme);
	readme = (await processLigSetCherryPicking()).apply(readme);
	readme = (await processLigSetPreDef()).apply(readme);
	readme = (await processLigSetOt(dirs, 1, g => !isLanguageSpecificLigTag(g.tag))).apply(readme);
	readme = (await processLigSetOt(dirs, 2, g => isLanguageSpecificLigTag(g.tag))).apply(readme);
	readme = (await processLangList(argv)).apply(readme);
	readme = (await processPrivateBuildPlans()).apply(readme);
	await fs.promises.writeFile(argv.mdFilePath, readme);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function processSsOt(dirs) {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-OT-Stylistic-Sets");
	md.log(`<table>`);
	for (const ss of variantsData.composites) {
		if (!ss.rank) continue;
		{
			md.log(`<tr>`);
			md.log(`<td colspan="2"><code>${ss.tag}</code> — ${ss.description}</td>`);
			md.log(`</tr>`);
		}
		{
			md.log(
				`<tr>`,
				`<td>${ImgX(`${dirs.images}/ss-u-${ss.tag}-${ss.rank}`)}</td>`,
				`<td>${ImgX(`${dirs.images}/ss-i-${ss.tag}-${ss.rank}`)}</td>`,
				`</tr>`
			);
		}
	}
	md.log(`</table>`);
	return md;
}

async function processCvOt(dirs) {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-OT-Character-Variants");
	const TableColumns = 12;
	md.log(`<table>`);
	for (const cv of variantsData.primes) {
		if (!cv.tag) continue;
		let effVariants = [];
		for (const cvv of cv.variants) if (cvv.rank) effVariants.push(cvv);
		const entryWidth = sampleImageCountEmOfCv(cv);
		const imgWidth = 32 * entryWidth;
		const entriesPerRow = Math.floor(TableColumns / entryWidth);
		const rowsNeeded = Math.ceil(effVariants.length / entriesPerRow);
		const itemColSpanHtml = entryWidth > 1 ? ` colspan="${entryWidth}"` : ``;
		for (let rid = 0; rid < rowsNeeded; rid++) {
			const entriesInThisRow = Math.min(
				entriesPerRow,
				effVariants.length - rid * entriesPerRow
			);
			const tailBlankColumnsCount = TableColumns - entryWidth * entriesInThisRow;
			// Image row
			md.log(`<tr>`);
			if (rid === 0) md.log(`<td rowspan="${2 * rowsNeeded}"><code>${cv.tag}</code></td>`);
			for (let cid = 0; cid < entriesPerRow; cid++) {
				const iCvv = rid * entriesPerRow + cid;
				if (iCvv >= effVariants.length) continue;
				const cvv = effVariants[iCvv];
				const imageID = `${dirs.images}/cv-${cv.key}-${cvv.key}`;
				const image = ImgX(imageID, imgWidth);
				md.log(`<td${itemColSpanHtml}>${image}</td>`);
			}
			if (tailBlankColumnsCount > 0) md.log(`<td colspan="${tailBlankColumnsCount}"> </td>`);
			md.log(`</tr>`);
			// CV ID row
			md.log(`<tr>`);
			for (let cid = 0; cid < entriesPerRow; cid++) {
				const iCvv = rid * entriesPerRow + cid;
				if (iCvv >= effVariants.length) continue;
				const cvv = effVariants[iCvv];
				md.log(`<td${itemColSpanHtml}>${cvv.rank}</td>`);
			}
			if (tailBlankColumnsCount > 0) md.log(`<td colspan="${tailBlankColumnsCount}"> </td>`);
			md.log(`</tr>`);
		}
	}
	md.log(`</table>`);
	return md;
}

async function processSsStyles() {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-Stylistic-Sets");
	const headerPath = path.resolve(__dirname, "fragments/description-stylistic-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr of variantsData.composites) {
		if (!gr.rank) continue;
		md.log(`  - \`${gr.tag}\`: Set character variant to “${gr.description}”.`);
	}
	return md;
}

async function processCherryPickingStyles(dirs) {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-Cherry-Picking-Styles");
	const headerPath = path.resolve(__dirname, "fragments/description-cheery-picking-styles.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const cv of [...variantsData.specials, ...variantsData.primes]) {
		if (!cv.tag && !cv.isSpecial) continue;
		const sampleText = cv.descSampleText
			.map(c => (c === "`" ? "`` ` ``" : `\`${c}\``))
			.join(", ");
		const explainText = cv.samplerExplain ? ` (${cv.samplerExplain})` : ``;
		const info = {
			introMD: cv.description || `Styles for ${sampleText + explainText}`,
			sampleImageCountEm: sampleImageCountEmOfCv(cv),
			alternatives: []
		};
		const defaults = figureOutDefaults(variantsData, cv);
		for (const cvv of cv.variants) {
			if (!cvv.rank && !cv.isSpecial) continue;
			if (cv.tag) {
				info.alternatives.push({
					imageId: `${cv.key}-${cvv.key}`,
					selectors: [`${cv.key} = '${cvv.key}'`, `${cv.tag} = ${cvv.rank}`],
					description:
						formatDescription(cvv.description) + formatDefaults(cvv.key, defaults)
				});
			} else {
				info.alternatives.push({
					imageId: `${cv.key}-${cvv.key}`,
					selectors: [`${cv.key} = '${cvv.key}'`],
					description:
						formatDescription(cvv.description) + formatDefaults(cvv.key, defaults)
				});
			}
		}
		formatCv(md, dirs, info);
	}
	return md;
}
function sampleImageCountEmOfCv(cv) {
	return cv.hotChars.length * (cv.slopeDependent ? 2 : 1);
}
function formatCv(md, dirs, info) {
	md.log(`  - ${info.introMD}:`);
	const imgWidth = 32 * info.sampleImageCountEm;
	let sTable = "     <table>";
	for (const alt of info.alternatives) {
		const imageId = `${dirs.images}/cv-${alt.imageId}`;
		const image = ImgX(imageId, imgWidth);
		const selectorText = alt.selectors.map(x => `<code>${x}</code>`).join(", ");
		sTable +=
			`<tr><td rowspan="2" width="${2 * 14 + imgWidth}">${image}</td>` +
			`<td>${selectorText}</td></tr>`;
		sTable += `<tr><td>${alt.description}</td></tr>`;
	}
	sTable += "</table>";
	md.log(sTable);
}
function formatDescription(s) {
	return s
		.replace(/`` (\S+?) ``/g, ($0, $1) => `<code>${escapeHtml($1)}</code>`)
		.replace(/`([^`]+?)`/g, ($0, $1) => `<code>${escapeHtml($1)}</code>`);
}
function escapeHtml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
async function processPrivateBuildPlans() {
	const md = new MdCol("Section-Private-Build-Plan-Sample");
	const tomlPath = path.resolve(__dirname, "../../private-build-plans.sample.toml");
	const toml = await fs.promises.readFile(tomlPath, "utf-8");
	md.log("```toml\n" + toml + "```");
	return md;
}
function formatDefaults(selector, defaults) {
	let dcs = [],
		mask = 0;
	for (const dc of defaults) {
		if (dc.result !== selector) continue;
		dcs.push(dc);
		mask |= dc.mask;
	}
	if (!dcs.length) return "";
	if (mask === 0xf) return ` (default)`;
	if (mask === 0x5) return ` (default for Upright)`;
	if (mask === 0xa) return ` (default for Italic)`;
	if (mask === 0x3) return ` (default for Sans)`;
	if (mask === 0xc) return ` (default for Slab)`;
	return ` (default for ${dcs.map(x => x.desc).join(", ")})`;
}
function figureOutDefaults(variantsData, gr) {
	const defaultConfigs = [
		{
			desc: "Sans Upright",
			mask: 1,
			result: null,
			composition: { ...variantsData.defaults.sans.upright }
		},
		{
			desc: "Sans Italic",
			mask: 2,
			result: null,
			composition: { ...variantsData.defaults.sans.italic }
		},
		{
			desc: "Slab Upright",
			mask: 4,
			result: null,
			composition: { ...variantsData.defaults.slab.upright }
		},
		{
			desc: "Slab Italic",
			mask: 8,
			result: null,
			composition: { ...variantsData.defaults.slab.italic }
		}
	];
	for (const variant of gr.variants) {
		for (const dc of defaultConfigs) {
			if (variant.key === dc.composition[gr.key]) dc.result = variant.key;
		}
	}
	return defaultConfigs;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function processLigSetCherryPicking() {
	const ligData = await parseLigationData();
	const md = new MdCol("Section-Cherry-Picking-Ligation-Sets");
	const headerPath = path.resolve(
		__dirname,
		"fragments/description-cherry-picking-ligation-sets.md"
	);
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr in ligData.cherry) {
		md.log(`  - \`${gr}\`: ${ligData.cherry[gr].desc}.`);
	}
	return md;
}

async function processLigSetPreDef() {
	const ligData = await parseLigationData();
	const md = new MdCol("Section-Predefined-Ligation-Sets");
	const headerPath = path.resolve(__dirname, "fragments/description-predefined-ligation-sets.md");
	md.log(await fs.promises.readFile(headerPath, "utf-8"));
	for (const gr in ligData.rawSets) {
		const readmeDesc =
			ligData.rawSets[gr].readmeDesc ||
			`Default ligation set would be assigned to ${ligData.rawSets[gr].desc}`;
		md.log(`  - \`${gr}\`: ${readmeDesc}.`);
	}
	return md;
}

async function processLigSetOt(dirs, index, fn) {
	const ligData = await parseLigationData();
	const md = new MdCol(`Section-OT-Ligation-Tags-${index}`);
	md.log(`<table>`);
	for (const ls of ligData.sets) {
		if (!fn(ls)) continue;
		{
			md.log(`<tr>`);
			if (ls.tagName)
				md.log(`<td>${ls.tagName.map(x => `<code>${x}</code>`).join("; ")}</td>`);
			else md.log(`<td><code>${ls.tag} off</td>`);
			md.log(`<td>${ls.desc}</td>`);
			md.log(`</tr>`);
		}
		{
			const imageId = `${dirs.images}/ligset-${ls.tag}-${ls.rank}`;
			md.log(`<tr>`);
			md.log(`<td colspan="2">${ImgX(imageId)}</td>`);
			md.log(`</tr>`);
		}
	}
	md.log(`</table>`);
	return md;
}

function isLanguageSpecificLigTag(tag) {
	return tag !== "calt" && tag !== "dlig";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function processLangList(argv) {
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath
	);
	const md = new MdCol("Section-Language-List");
	md.log(`${cl.languages.length} Supported Languages: \n`);
	md.log(cl.languages.join(", "));
	return md;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

class MdCol {
	constructor(sectionName) {
		this.data = "";
		this.sectionName = sectionName;
		this.matchRegex = new RegExp(
			`^([ \\t]*)<!-- BEGIN ${sectionName} -->\\n[\\s\\S]*?<!-- END ${sectionName} -->\\n`,
			`m`
		);
	}
	log(...s) {
		this.data += s.join("") + "\n";
	}
	apply(s) {
		return s.replace(this.matchRegex, (m, $1) => {
			return (
				`<!-- BEGIN ${this.sectionName} -->\n` +
				`<!-- THIS SECTION IS AUTOMATICALLY GENERATED. DO NOT EDIT. -->\n\n` +
				this.data +
				`\n<!-- END ${this.sectionName} -->\n`
			).replace(/^/gm, $1);
		});
	}
}

function ImgX(path, w) {
	const widthProp = w ? ` width=${w}` : ``;
	return (
		`<img src="${path}.light.svg#gh-light-mode-only"${widthProp}/>` +
		`<img src="${path}.dark.svg#gh-dark-mode-only"${widthProp}/>`
	);
}
