"use strict";

const ejs = require("ejs");
const fs = require("fs-extra");
const path = require("path");
const parseVariantsData = require("../export-data/variants-data");
const getLigationData = require("../export-data/ligation-data");
const execMain = require("../shared/execMain");

const inputPath = process.argv[2];
const outputPath = process.argv[3];
const outputDataPath = process.argv[4];

execMain(main);

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const weightGrades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const templatePath = path.join(inputPath, "index.ejs");
	const variationData = await await parseVariantsData();
	const ligationData = await getLigationData();
	const html = await ejs.renderFile(templatePath, {
		...variationData,
		ligation: ligationData,
		weights: weightGrades,
		buildSsHtml(body, hc) {
			const hcs = new Set(hc);
			return [...body]
				.map(ch => (hcs.has(ch) ? `<b>${ch}</b>` : ch))
				.join("")
				.replace(/\n/g, "<br/>");
		}
	});
	await fs.writeFile(outputPath, html);

	let readmeSnapshotTasks = [
		{ el: "#languages", name: "languages" },
		{ el: "#matrix", name: "matrix" },
		{ el: "#previews", name: "preview-all" },
		{ el: "#weights", name: "weights" }
	];
	for (const ls of ligationData.nonMergeSets) {
		readmeSnapshotTasks.push({
			el: "#ligation-sampler",
			applyClass: "iosevka",
			applyFeature: `'${ls.tag}' ${ls.rank}`,
			name: `ligset-${ls.tag}-${ls.rank}`,
			applyCallback: `cbAmendLigsetSamplerContents`,
			applyCallbackArgs: ls
		});
	}
	for (const ss of variationData.composites) {
		readmeSnapshotTasks.push({
			el: "#packaging-sampler",
			applyClass: "scl iosevka",
			applyFeature: `'${ss.tag}' ${ss.rank}`,
			name: `stylistic-set-u-${ss.tag}-${ss.rank}`,
			applyCallback: `cbAmendStylisticSetContents`,
			applyCallbackArgs: { hotChars: ss.hotChars.sans.upright }
		});
		readmeSnapshotTasks.push({
			el: "#packaging-sampler",
			applyClass: "scl iosevka italic",
			applyFeature: `'${ss.tag}' ${ss.rank}`,
			name: `stylistic-set-i-${ss.tag}-${ss.rank}`,
			applyCallback: `cbAmendStylisticSetContents`,
			applyCallbackArgs: { hotChars: ss.hotChars.sans.italic }
		});
	}
	readmeSnapshotTasks.push({
		el: "#cv-sampler",
		applyClass: "cv-sampler",
		applyFeature: "'lnum' on",
		name: "character-variant-lnum",
		applyCallback: `cbAmendCharacterVariantContents`,
		applyCallbackArgs: {
			hotChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
			slopeDependent: false
		}
	});
	readmeSnapshotTasks.push({
		el: "#cv-sampler",
		applyClass: "cv-sampler",
		applyFeature: "'onum' on",
		name: "character-variant-onum",
		applyCallback: `cbAmendCharacterVariantContents`,
		applyCallbackArgs: {
			hotChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
			slopeDependent: false
		}
	});
	for (const cv of variationData.primes) {
		if (!cv.tag) continue;
		for (const variant of cv.variants) {
			readmeSnapshotTasks.push({
				el: "#cv-sampler",
				applyClass: "cv-sampler",
				applyFeature: `'${cv.tag}' ${variant.rank}`,
				name: `character-variant-${cv.tag}-${variant.rank}`,
				applyCallback: `cbAmendCharacterVariantContents`,
				applyCallbackArgs: {
					hotChars: cv.hotChars,
					slopeDependent: !!cv.slopeDependent
				}
			});
		}
	}

	await fs.writeJson(
		outputDataPath,
		{
			readmeSnapshotTasks,
			ligationSamples: ligationData.samples,
			ligationCherry: ligationData.cherry
		},
		{ spaces: "  " }
	);
}
