import fs from "fs";
import path from "path";
import url from "url";

import * as Toml from "@iarna/toml";
import { FontIo, Ot, CliProc } from "ot-builder";

import { assignFontNames, createNamingDictFromArgv } from "./gen/meta/naming.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default main;
async function main(argv) {
	const font = await readTTF(argv);

	const naming = createNamingDictFromArgv(argv);
	assignFontNames(font, naming, false);

	switch (argv.shape.spacing) {
		case "term":
			await deriveTerm(font);
			break;
		case "fontconfig-mono":
			await deriveTerm(font);
			await deriveFixed_DropWideChars(font);
			await deriveFixed_DropFeatures(font, false);
			CliProc.gcFont(font, Ot.ListGlyphStoreFactory);
			break;
		case "fixed":
			await deriveTerm(font);
			await deriveFixed_DropWideChars(font);
			await deriveFixed_DropFeatures(font, true);
			CliProc.gcFont(font, Ot.ListGlyphStoreFactory);
			break;
	}

	await saveTTF(argv, font);
}

// To derive -Term variants, simply apply NWID
async function deriveTerm(font) {
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
async function deriveFixed_DropWideChars(font) {
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

async function deriveFixed_DropFeatures(font, fFixed) {
	if (!font.gsub) return;

	const dropFeatureTagSet = new Set();
	dropFeatureTagSet.add("NWID");
	dropFeatureTagSet.add("WWID");

	if (fFixed) {
		const LIGATIONS_TOML = path.resolve(__dirname, "../params/ligation-set.toml");
		const rawLigationData = Toml.parse(await fs.promises.readFile(LIGATIONS_TOML, "utf-8"));
		for (const [_, comp] of Object.entries(rawLigationData.composite)) {
			dropFeatureTagSet.add(comp.tag);
		}
	}

	for (const feature of font.gsub.features) {
		if (dropFeatureTagSet.has(feature.tag)) {
			feature.lookups.length = 0;
			feature.params = null;
		}
	}

	markSweepLookups(font.gsub);
}
function markSweepLookups(table) {
	let lookupSet = new Set();
	for (const feature of table.features) {
		for (const lookup of feature.lookups) {
			lookupSet.add(lookup);
		}
	}

	do {
		let sizeBefore = lookupSet.size;
		for (const lookup of table.lookups) {
			if (lookup instanceof Ot.Gsub.Chaining || lookup instanceof Ot.Gpos.Chaining) {
				for (const rule of lookup.rules) {
					for (const app of rule.applications) lookupSet.add(app.apply);
				}
			}
		}
		let sizeAfter = lookupSet.size;
		if (sizeBefore >= sizeAfter) break;
	} while (true);

	let front = 0;
	for (let rear = 0; rear < table.lookups.length; rear++) {
		if (lookupSet.has(table.lookups[rear])) {
			table.lookups[front++] = table.lookups[rear];
		}
	}
	table.lookups.length = front;

	return lookupSet;
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
