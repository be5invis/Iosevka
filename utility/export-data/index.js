"use strict";

const fs = require("fs-extra");
const { parseVariantsData } = require("./variants-data");
const { parseLigationData } = require("./ligation-data");
const { getCharMapAndSupportedLanguageList } = require("./supported-languages");

const version = require("../../package.json").version;

///////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = async function main(argv) {
	const variantsData = await parseVariantsData();
	const ligationData = await parseLigationData();
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath
	);
	await fs.writeJson(
		argv.exportPathMeta,
		{
			version,
			variantsData,
			ligationData: {
				cherry: ligationData.cherry,
				samplesNarrow: ligationData.samplesNarrow,
				nonMergeSets: ligationData.nonMergeSets
			}
		},
		{ spaces: 2 }
	);
	await fs.writeJson(argv.exportPathCov, { version, ...cl }, { spaces: 2 });
};
