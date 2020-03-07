const ejs = require("ejs");
const fs = require("fs-extra");
const path = require("path");
const parseVariantsData = require("./parse-variants-data");
const getLigationData = require("./ligation-data");

main().catch(e => {
	console.error(e);
	process.exit(1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const weightGrades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const templatePath = path.join(__dirname, "templates/index.ejs");
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
	await fs.writeFile(path.join(__dirname, "../../snapshot/index.html"), html);
}
