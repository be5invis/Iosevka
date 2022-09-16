import fs from "fs";

import { FontIo, Ot } from "ot-builder";

import { assignFontNames, createNamingDictFromArgv } from "./gen/meta/naming.mjs";

export default main;

async function main(argv) {
	const font = await readTTF(argv);

	const naming = createNamingDictFromArgv(argv);
	assignFontNames(font, naming, false);

	switch (argv.shape.spacing) {
		case "term":
			deriveTerm(font);
			break;
		case "fixed":
			deriveTerm(font);
			deriveFixed(font);
			break;
	}

	await saveTTF(argv, font);
}

// To derive -Term variants, simply apply NWID
function deriveTerm(font) {
	const gsub = font.gsub;
	let nwidMap = new Map();
	for (const feature of gsub.features) {
		if (feature.tag !== "NWID") continue;
		for (const lookup of feature.lookups) {
			if (!(lookup instanceof Ot.Gsub.Single)) continue;
			for (const [from, to] of lookup.mapping) {
				nwidMap.set(from, to);
			}
		}
	}

	for (const [ch, g] of [...font.cmap.unicode.entries()]) {
		const narrow = nwidMap.get(g);
		if (narrow) font.cmap.unicode.set(ch, narrow);
	}
	for (const [ch, vs, g] of [...font.cmap.vs.entries()]) {
		const narrow = nwidMap.get(g);
		if (narrow) font.cmap.vs.set(ch, vs, narrow);
	}
}

// In FontConfig, a font is considered "monospace" if and only if all encoded non-combining
// characters  (AW > 0) have the same width. We use this method to validate whether our
// "Fixed" subfamilies are properly built.
function deriveFixed(font) {
	const unitWidth = font.os2.xAvgCharWidth;
	for (const [ch, g] of [...font.cmap.unicode.entries()]) {
		const advanceWidth = g.horizontal.end - g.horizontal.start;
		if (!(advanceWidth === 0 || advanceWidth === unitWidth)) font.cmap.unicode.delete(ch);
	}
	for (const [ch, vs, g] of [...font.cmap.vs.entries()]) {
		const advanceWidth = g.horizontal.end - g.horizontal.start;
		if (!(advanceWidth === 0 || advanceWidth === unitWidth)) font.cmap.vs.delete(ch, vs);
	}
}

async function readTTF(argv) {
	const buf = await fs.promises.readFile(argv.i);
	const sfnt = FontIo.readSfntOtf(buf);
	const font = FontIo.readFont(sfnt, Ot.ListGlyphStoreFactory);
	return font;
}
async function saveTTF(argv, font) {
	const sfnt = FontIo.writeFont(font, {
		glyphStore: { statOs2XAvgCharWidth: false },
		generateDummyDigitalSignature: true
	});
	const buf = FontIo.writeSfntOtf(sfnt);
	await fs.promises.writeFile(argv.o, buf);
}
