const fs = require("fs-extra");
const path = require("path");
const parseVariantsData = require("../generate-snapshot-page/parse-variants-data");
const parseLigationData = require("../generate-snapshot-page/ligation-data");
const getCharMapAndSupportedLanguageList = require("../generate-supported-languages/proc");

const charMapPath = process.argv[2];
const exportPath = process.argv[3];
main().catch(e => {
	console.error(e);
	process.exit(1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
async function main() {
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const cl = await getCharMapAndSupportedLanguageList(charMapPath);
	await fs.writeJson(exportPath, { variantsData, ligationData, ...cl }, { spaces: 2 });
}
