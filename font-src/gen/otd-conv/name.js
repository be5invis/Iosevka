const { Ot } = require("ot-builder");

module.exports = convertName;
function convertName(otdName) {
	const name = new Ot.Name.Table();
	for (const entry of otdName) {
		name.records.push({
			platformID: entry.platformID,
			encodingID: entry.encodingID,
			languageID: entry.languageID,
			nameID: entry.nameID,
			value:
				entry.platformID === 3 && entry.encodingID === 1
					? entry.nameString
					: Buffer.from(entry.nameString, "utf-8")
		});
	}

	return name;
}
