import fs from "fs";
import path from "path";

import * as Toml from "@iarna/toml";
import { CliProc, Ot } from "ot-builder";

import { readTTF, saveTTF } from "./font-io/index.mjs";
import { assignFontNames, createNamingDictFromArgv } from "./naming/index.mjs";
import { validateFontConfigMono } from "./validate/metrics.mjs";

export default main;
async function main(argv) {
	const font = await readTTF(argv.i);

	const naming = createNamingDictFromArgv(argv);
	assignFontNames(font, naming, false);

	switch (argv.shape.spacing) {
		case "term":
			await deriveTerm(font);
			break;
		case "fontconfig-mono":
			await deriveTerm(font);
			await deriveFixed_DropWideChars(font);
			await deriveFixed_DropFeatures(font, argv, false);
			break;
		case "fixed":
			await deriveTerm(font);
			await deriveFixed_DropWideChars(font);
			await deriveFixed_DropFeatures(font, argv, true);
			break;
	}

	await saveTTF(argv.oNoGc, font);

	switch (argv.shape.spacing) {
		case "fontconfig-mono":
		case "fixed":
			CliProc.gcFont(font, Ot.ListGlyphStoreFactory);
			validateFontConfigMono(font);
			await saveTTF(argv.o, font);
			break;
		default:
			await fs.promises.copyFile(argv.oNoGc, argv.o);
			break;
	}
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

// Drop the following "long" characters.
async function deriveFixed_DropWideChars(font) {
	const longCharCodes = [
		0x27f5, // LONG LEFTWARDS ARROW
		0x27f6, // LONG RIGHTWARDS ARROW
		0x27f7, // LONG LEFT RIGHT ARROW
		0x27f8, // LONG LEFTWARDS DOUBLE ARROW
		0x27f9, // LONG RIGHTWARDS DOUBLE ARROW
		0x27fa, // LONG LEFT RIGHT DOUBLE ARROW
		0x27fb, // LONG LEFTWARDS ARROW FROM BAR
		0x27fc, // LONG RIGHTWARDS ARROW FROM BAR
		0x27fd, // LONG LEFTWARDS DOUBLE ARROW FROM BAR
		0x27fe, // LONG RIGHTWARDS DOUBLE ARROW FROM BAR
		0x27ff, // LONG RIGHTWARDS SQUIGGLE ARROW
		0x2b33, // LONG LEFTWARDS SQUIGGLE ARROW
	];
	for (const ch of longCharCodes) {
		font.cmap.unicode.delete(ch);
	}
}

async function deriveFixed_DropFeatures(font, argv, fFixed) {
	if (!font.gsub) return;

	const dropFeatureTagSet = new Set();
	dropFeatureTagSet.add("NWID");
	dropFeatureTagSet.add("WWID");

	if (fFixed) {
		const LIGATIONS_TOML = path.resolve(argv.paramsDir, "ligation-set.toml");
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
}
