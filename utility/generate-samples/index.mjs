import fs from "fs";
import path from "path";

import { parseLigationData } from "../export-data/ligation-data.mjs";
import { parseVariantsData } from "../export-data/variants-data.mjs";

import Button from "./templates/button.mjs";
import CharVariant from "./templates/character-variant.mjs";
import GrandTitle from "./templates/grand-title.mjs";
import Languages from "./templates/languages.mjs";
import LigationSet from "./templates/ligation-set.mjs";
import Matrix from "./templates/matrix.mjs";
import PackageSample from "./templates/package-sample.mjs";
import StylisticSet from "./templates/stylistic-set.mjs";
import Weights from "./templates/weights.mjs";

class Generator {
	constructor(outputDir, fontFiles) {
		this.outputDir = outputDir;
		this.fontFiles = fontFiles;
		this.tasksGenerated = [];
	}
	async add(name, template, args) {
		for (const theme of ["light", "dark"]) {
			const fullName = name + "." + theme;
			const argsWithTheme = { ...args, theme };
			const generated = template(argsWithTheme);
			generated.fontFiles = this.fontFiles;
			let jsonPath = path.join(this.outputDir, fullName + ".json");
			await fs.promises.writeFile(jsonPath, JSON.stringify(generated, null, "  "));
			this.tasksGenerated.push(fullName);
		}
	}
}
export default (async function main(argv) {
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const tasks = new Generator(
		argv.outputDir,
		argv.fontGroups.map(fg => path.resolve(process.cwd(), "dist", fg, "ttf", "*.ttf"))
	);
	await tasks.add("grand-title", GrandTitle, {});
	await tasks.add("button-release", Button, { text: "Release ", stressText: argv.version });
	await tasks.add("button-customize", Button, { text: "Customize" });
	await tasks.add("button-specimen", Button, { text: "Specimen" });
	await tasks.add("matrix", Matrix, {});
	await tasks.add("languages", Languages, {});
	await tasks.add("weights", Weights, {});
	// Packages
	for (const pst of argv.packageSnapshotTasks) {
		await tasks.add(pst.name, PackageSample, {
			hSize: 2,
			vSize: 1,
			lineBreakMode: "each-row",
			fontFamily: pst.fontFamily,
			fontStyle: "normal",
			fontFeatures: pst.fontFeatures
		});
	}
	// Ligation sets
	for (const ls of ligationData.nonMergeSets) {
		await tasks.add(`ligset-${ls.tag}-${ls.rank}`, LigationSet, {
			fontFamily: "Iosevka",
			fontStyle: "normal",
			ligationSamples: ligationData.samplesNarrow,
			ligationCherry: ligationData.cherry,
			tag: ls.tag,
			rank: ls.rank,
			ligSets: ls.ligSets
		});
	}
	// SS
	for (const ss of variantsData.composites) {
		await tasks.add(`ss-u-${ss.tag}-${ss.rank}`, StylisticSet, {
			hSize: 1,
			vSize: 2,
			lineBreakMode: "each-column",
			fontFamily: "Iosevka",
			fontStyle: "normal",
			fontFeatures: { [ss.tag]: ss.rank },
			hotChars: ss.hotChars.sans.upright
		});
		await tasks.add(`ss-i-${ss.tag}-${ss.rank}`, StylisticSet, {
			hSize: 1,
			vSize: 2,
			lineBreakMode: "each-column",
			fontFamily: "Iosevka",
			fontStyle: "italic",
			fontFeatures: { [ss.tag]: ss.rank },
			hotChars: ss.hotChars.sans.italic
		});
	}
	// CV
	for (const cv of [...variantsData.specials, ...variantsData.primes]) {
		if (!cv.tag && !cv.isSpecial) continue;
		for (const variant of cv.variants) {
			await tasks.add(`cv-${cv.key}-${variant.key}`, CharVariant, {
				fontFeatures: variant.snapshotFeatureApplication || { [cv.tag]: variant.rank },
				slopeDependent: !!cv.slopeDependent,
				hotChars: cv.hotChars
			});
		}
	}
	return tasks.tasksGenerated;
});
