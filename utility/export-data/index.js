"use strict";

const fs = require("fs");
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
	await fs.promises.writeFile(
		argv.exportPathMeta,
		JSON.stringify(
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
		)
	);
	await fs.promises.writeFile(
		argv.exportPathCov,
		JSON.stringify({ version, ...cl }, { spaces: 2 })
	);
};
