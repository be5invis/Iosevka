import { parseVariantsData } from "@iosevka/data-export/variants-data";

import { ImgX, MdCol } from "../md-format-tools.mjs";

export default async function processCvOt(argv, dirs) {
	const variantsData = await parseVariantsData(argv);
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
				effVariants.length - rid * entriesPerRow,
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

export function sampleImageCountEmOfCv(cv) {
	return cv.hotChars.length * (cv.slopeDependent ? 2 : 1);
}
