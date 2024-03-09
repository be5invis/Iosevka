import { parseVariantsData } from "@iosevka/data-export/variants-data";

import { ImgX, MdCol } from "../md-format-tools.mjs";

export default async function processSsOt(argv, dirs) {
	const variantsData = await parseVariantsData(argv);
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
				`</tr>`,
			);
		}
	}
	md.log(`</table>`);
	return md;
}
