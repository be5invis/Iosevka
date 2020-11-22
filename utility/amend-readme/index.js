"use strict";

const fs = require("fs-extra");
const path = require("path");
const parseVariantsData = require("../export-data/variants-data");
const parseLigationData = require("../export-data/ligation-data");
const getCharMapAndSupportedLanguageList = require("../export-data/supported-languages");
const execMain = require("../shared/execMain");

const charMapPath = process.argv[2];
const charMapItalicPath = process.argv[3];
const charMapObliquePath = process.argv[4];

execMain(main);

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const readmePath = path.resolve(__dirname, "../../README.md");
	let readme = await fs.readFile(readmePath, "utf-8");
	readme = (await processSsOt()).apply(readme);
	readme = (await processCv()).apply(readme);
	readme = (await processSs()).apply(readme);
	readme = (await processLigSetCherryPicking()).apply(readme);
	readme = (await processLigSetPreDef()).apply(readme);
	readme = (await processLigSetOt(1, g => g.tag === "calt")).apply(readme);
	readme = (await processLigSetOt(2, g => g.tag !== "calt")).apply(readme);
	readme = (await processLangList()).apply(readme);
	readme = (await processPrivateBuildPlans()).apply(readme);
	await fs.writeFile(readmePath, readme);
}

async function processSsOt() {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-OT-Stylistic-Sets");
	md.log(`<table>`);
	for (const ss of variantsData.composites) {
		if (!ss.rank) continue;
		{
			md.log(`<tr>`);
			md.log(`<td><code>${ss.tag}</code></td>`);
			md.log(`<td>${ss.description}</td>`);
			md.log(`</tr>`);
		}
		{
			md.log(`<tr>`);
			md.log(
				`<td colspan="2"><img src="images/stylistic-set-${ss.tag}-${ss.rank}.png"/></td>`
			);
			md.log(`</tr>`);
		}
	}
	md.log(`</table>`);
	return md;
}
async function processSs() {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-Stylistic-Sets");
	const headerPath = path.resolve(__dirname, "fragments/description-stylistic-sets.md");
	md.log(await fs.readFile(headerPath, "utf-8"));
	for (const gr of variantsData.composites) {
		if (!gr.rank) continue;
		md.log(`  - \`${gr.tag}\`: Set character variant to “${gr.description}”.`);
	}
	return md;
}
async function processCv() {
	const variantsData = await parseVariantsData();
	const md = new MdCol("Section-Cherry-Picking-Styles");

	const headerPath = path.resolve(__dirname, "fragments/description-cheery-picking-styles.md");
	md.log(await fs.readFile(headerPath, "utf-8"));

	const cvDigitFormPath = path.resolve(__dirname, "fragments/special-variant-digit-form.md");
	md.log(await fs.readFile(cvDigitFormPath, "utf-8"));

	for (const gr of variantsData.primes) {
		const sampleText = gr.descSampleText
			.map(c => (c === "`" ? "`` ` ``" : `\`${c}\``))
			.join(", ");
		md.log(`  - Styles for ${sampleText}:`);
		const defaults = figureOutDefaults(variantsData, gr);
		for (const config of gr.variants) {
			if (!config.rank) continue;
			let selectorText = `\`${gr.key} = '${config.key}'\``;
			if (gr.tag && config.rank) {
				selectorText += `, \`${gr.tag} = ${config.rank}\``;
			}
			md.log(
				`    + ${selectorText}: ` +
					`${config.description}${formatDefaults(config.key, defaults)}.`
			);
		}
	}
	return md;
}

async function processPrivateBuildPlans() {
	const md = new MdCol("Section-Private-Build-Plan-Sample");
	const tomlPath = path.resolve(__dirname, "../../private-build-plans.sample.toml");
	const toml = await fs.readFile(tomlPath, "utf-8");
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
			composition: { ...variantsData.defaults.sansUpright }
		},
		{
			desc: "Sans Italic",
			mask: 2,
			result: null,
			composition: { ...variantsData.defaults.sansItalic }
		},
		{
			desc: "Slab Upright",
			mask: 4,
			result: null,
			composition: { ...variantsData.defaults.slabUpright }
		},
		{
			desc: "Slab Italic",
			mask: 8,
			result: null,
			composition: { ...variantsData.defaults.slabItalic }
		}
	];

	for (const variant of gr.variants) {
		for (const dc of defaultConfigs) {
			if (variant.key === dc.composition[gr.key]) dc.result = variant.key;
		}
	}
	return defaultConfigs;
}

async function processLigSetCherryPicking() {
	const ligData = await parseLigationData();
	const md = new MdCol("Section-Cherry-Picking-Ligation-Sets");
	const headerPath = path.resolve(
		__dirname,
		"fragments/description-cherry-picking-ligation-sets.md"
	);
	md.log(await fs.readFile(headerPath, "utf-8"));

	for (const gr in ligData.cherry) {
		md.log(`  - \`${gr}\`: ${ligData.cherry[gr].desc}.`);
	}
	return md;
}

async function processLigSetPreDef() {
	const ligData = await parseLigationData();
	const md = new MdCol("Section-Predefined-Ligation-Sets");
	const headerPath = path.resolve(__dirname, "fragments/description-predefined-ligation-sets.md");
	md.log(await fs.readFile(headerPath, "utf-8"));
	for (const gr in ligData.rawSets) {
		const readmeDesc =
			ligData.rawSets[gr].readmeDesc ||
			`Default ligation set would be assigned to ${ligData.rawSets[gr].desc}`;
		md.log(`  - \`${gr}\`: ${readmeDesc}.`);
	}
	return md;
}

async function processLigSetOt(index, fn) {
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
			md.log(`<tr>`);
			md.log(`<td colspan="2"><img src="images/ligset-${ls.tag}-${ls.rank}.png"/></td>`);
			md.log(`</tr>`);
		}
	}
	md.log(`</table>`);
	return md;
}

async function processLangList() {
	const cl = await getCharMapAndSupportedLanguageList(
		charMapPath,
		charMapItalicPath,
		charMapObliquePath
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
