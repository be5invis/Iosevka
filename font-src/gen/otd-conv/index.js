const Metadata = require("./metadata");
const convertGlyphs = require("./glyphs");
const convertName = require("./name");
const { convertGsub, convertGpos, convertGdef } = require("./layout");

module.exports = function (otdRestFont, gs) {
	const head = Metadata.convertHead(otdRestFont.head);
	const hhea = Metadata.convertHhea(otdRestFont.hhea);
	const post = Metadata.convertPost(otdRestFont.post);
	const maxp = Metadata.convertMaxp(otdRestFont.maxp);
	const os2 = Metadata.convertOs2(otdRestFont.OS_2);

	const name = convertName(otdRestFont.name);

	const { glyphs, cmap } = convertGlyphs(gs);

	const gsub = convertGsub(otdRestFont.GSUB, glyphs);
	const gpos = convertGpos(otdRestFont.GPOS, glyphs);
	const gdef = convertGdef(otdRestFont.GDEF, glyphs);

	return { glyphs, head, hhea, post, maxp, os2, name, cmap, gsub, gpos, gdef };
};
