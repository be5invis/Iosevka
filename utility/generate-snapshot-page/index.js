const ejs = require("ejs");
const fs = require("fs-extra");
const path = require("path");
const parseVariantsData = require("../export-data/parse-variants-data");
const getLigationData = require("../export-data/ligation-data");

const inputPath = process.argv[2];
const outputPath = process.argv[3];

main().catch(e => {
	console.error(e);
	process.exit(1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const weightGrades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const templatePath = path.join(inputPath, "index.ejs");
	const html = await ejs.renderFile(templatePath, {
		...(await parseVariantsData()),
		ligation: await getLigationData(),
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
}
