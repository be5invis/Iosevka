import { parseLigationData } from "@iosevka/data-export/ligation-data";

import { ImgX, MdCol } from "../md-format-tools.mjs";

export default async function processLigSetOt(argv, dirs, index, fn) {
	const ligData = await parseLigationData(argv);
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

export function isLanguageSpecificLigTag(tag) {
	return tag !== "calt" && tag !== "dlig";
}
