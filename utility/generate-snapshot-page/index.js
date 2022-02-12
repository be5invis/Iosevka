"use strict";

const ejs = require("ejs");
const fs = require("fs-extra");
const path = require("path");
const { parseVariantsData } = require("../export-data/variants-data");
const { parseLigationData } = require("../export-data/ligation-data");

///////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = async function main(argv) {
	const weightGrades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const templatePath = path.join(argv.inputPath, "index.ejs");
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const html = await ejs.renderFile(templatePath, {
		...variantsData,
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
	await fs.writeFile(argv.outputPath, html);

	for (let i = 0; i < argv.parallel; i++) {
		await generateTaskFile(
			argv.outputTaskFilePrefix,
			i,
			argv.parallel,
			variantsData,
			ligationData
		);
	}

	await fs.writeJson(
		argv.outputDataPath,
		{ ligationSamples: ligationData.samples, ligationCherry: ligationData.cherry },
		{ spaces: "  " }
	);
};

async function generateTaskFile(prefix, ith, total, variantsData, ligationData) {
	let readmeSnapshotTasks = [];
	{
		readmeSnapshotTasks.push({ el: "#languages", name: "languages" });
		readmeSnapshotTasks.push({ el: "#matrix", name: "matrix" });
		readmeSnapshotTasks.push({ el: "#previews", name: "preview-all" });
		readmeSnapshotTasks.push({ el: "#weights", name: "weights" });
	}
	{
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
	}
	{
		for (const ss of variantsData.composites) {
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
	}
	{
		for (const cv of [...variantsData.primes, ...variantsData.specials]) {
			if (!cv.tag && !cv.isSpecial) continue;
			for (const variant of cv.variants) {
				readmeSnapshotTasks.push({
					el: "#cv-sampler",
					applyClass: "cv-sampler",
					applyFeature:
						variant.snapshotFeatureApplication || `'${cv.tag}' ${variant.rank}`,
					name: `character-variant-${cv.key}-${variant.key}`,
					applyCallback: `cbAmendCharacterVariantContents`,
					applyCallbackArgs: {
						hotChars: cv.hotChars,
						slopeDependent: !!cv.slopeDependent
					}
				});
			}
		}
	}

	let filteredTasks = [];
	for (let i = 0; i < readmeSnapshotTasks.length; i++) {
		if (i % total === ith) filteredTasks.push(readmeSnapshotTasks[i]);
	}
	await fs.writeJson(prefix + "-" + ith + ".json", filteredTasks);
}
