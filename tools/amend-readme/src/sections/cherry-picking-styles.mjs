import fs from "fs";
import path from "path";

import { parseVariantsData } from "@iosevka/data-export/variants-data";

import { ImgX, MdCol } from "../md-format-tools.mjs";

import { sampleImageCountEmOfCv } from "./cv-ot.mjs";

export default async function processCherryPickingStyles(argv, dirs) {
	const variantsData = await parseVariantsData(argv);
	const md = new MdCol("Section-Cherry-Picking-Styles");
	const headerPath = path.resolve(dirs.fragments, "description-cherry-picking-styles.md");
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
			alternatives: [],
		};
		const defaults = figureOutDefaults(variantsData, cv);
		for (const cvv of cv.variants) {
			if (!cvv.rank && !cv.isSpecial) continue;
			if (cv.tag) {
				info.alternatives.push({
					imageId: `${cv.key}-${cvv.key}`,
					selectors: [`${cv.key} = '${cvv.key}'`, `${cv.tag} = ${cvv.rank}`],
					description:
						formatDescription(cvv.description) + formatDefaults(cvv.key, defaults),
				});
			} else {
				info.alternatives.push({
					imageId: `${cv.key}-${cvv.key}`,
					selectors: [`${cv.key} = '${cvv.key}'`],
					description:
						formatDescription(cvv.description) + formatDefaults(cvv.key, defaults),
				});
			}
		}
		formatCv(md, dirs, info);
	}
	return md;
}

function formatCv(md, dirs, info) {
	const INDENT = `    `;
	md.log(`  - ${info.introMD}`);
	md.log(`${INDENT}<details><summary>${info.alternatives.length} variants</summary>`);
	const imgWidth = 32 * info.sampleImageCountEm;
	let sTable = INDENT + "<table>" + "\n";
	for (const alt of info.alternatives) {
		const imageId = `${dirs.images}/cv-${alt.imageId}`;
		const image = ImgX(imageId, imgWidth);
		const selectorText = alt.selectors.map(x => `<code>${x}</code>`).join(", ");
		sTable +=
			INDENT +
			`<tr><td rowspan="2" width="${2 * 14 + imgWidth}">${image}</td>` +
			`<td>${selectorText}</td></tr>\n`;
		sTable += INDENT + `<tr><td>${alt.description}</td></tr>\n`;
	}
	sTable += INDENT + "</table></details>";
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
			composition: { ...variantsData.defaults.sans.upright },
		},
		{
			desc: "Sans Italic",
			mask: 2,
			result: null,
			composition: { ...variantsData.defaults.sans.italic },
		},
		{
			desc: "Slab Upright",
			mask: 4,
			result: null,
			composition: { ...variantsData.defaults.slab.upright },
		},
		{
			desc: "Slab Italic",
			mask: 8,
			result: null,
			composition: { ...variantsData.defaults.slab.italic },
		},
	];
	for (const variant of gr.variants) {
		for (const dc of defaultConfigs) {
			if (variant.key === dc.composition[gr.key]) dc.result = variant.key;
		}
	}
	return defaultConfigs;
}
