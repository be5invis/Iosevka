import fs from "fs";

import { FontIo, Ot } from "ot-builder";

export function CreateEmptyFont(para) {
	let font = {
		head: new Ot.Head.Table(),
		hhea: new Ot.MetricHead.Hhea(),
		os2: new Ot.Os2.Table(4),
		post: new Ot.Post.Table(para.exportGlyphNames ? 2 : 3, 0),
		maxp: Ot.Maxp.Table.TrueType(),
		name: new Ot.Name.Table(),
	};
	if (process.env.SOURCE_DATE_EPOCH) {
		font.head.created = new Date(process.env.SOURCE_DATE_EPOCH * 1000);
		font.head.modified = new Date(process.env.SOURCE_DATE_EPOCH * 1000);
	}
	return font;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export async function readTTF(input) {
	const buf = await fs.promises.readFile(input);
	return parseTTF(buf);
}

export function parseTTF(buf) {
	const sfnt = FontIo.readSfntOtf(buf);
	const font = FontIo.readFont(sfnt, Ot.ListGlyphStoreFactory);
	return font;
}

export function buildTTF(font) {
	const sfnt = FontIo.writeFont(font, {
		glyphStore: { statOs2XAvgCharWidth: false },
		generateDummyDigitalSignature: true,
	});
	const buf = FontIo.writeSfntOtf(sfnt);
	return buf;
}

export async function saveTTF(output, font) {
	await fs.promises.writeFile(output, buildTTF(font));
}
