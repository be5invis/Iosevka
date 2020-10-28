"use strict";

const fs = require("fs-extra");
const parseVariantsData = require("./variants-data");
const parseLigationData = require("./ligation-data");
const getCharMapAndSupportedLanguageList = require("./supported-languages");
const execMain = require("../shared/execMain");

const version = require("../../package.json").version;

const charMapPath = process.argv[2];
const charMapItalicPath = process.argv[3];
const charMapObliquePath = process.argv[4];
const exportPathMeta = process.argv[5];
const exportPathCov = process.argv[6];

execMain(main);

/////////////////////////////////////////////////////////////////////////////////////////////////////
async function main() {
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const cl = await getCharMapAndSupportedLanguageList(
		charMapPath,
		charMapItalicPath,
		charMapObliquePath
	);
	await fs.writeJson(
		exportPathMeta,
		{
			version,
			variantsData,
			ligationData: {
				samplesNarrow: ligationData.samplesNarrow,
				nonMergeSets: ligationData.nonMergeSets
			}
		},
		{ spaces: 2 }
	);
	await fs.writeJson(exportPathCov, { version, ...cl }, { spaces: 2 });
}
