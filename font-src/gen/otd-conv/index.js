const { convertGlyphs } = require("./glyphs");
const { convertGsub, convertGpos, convertGdef } = require("./layout");

exports.convertOtd = function convertOtd(baseFont, otl, gs) {
	const { glyphs, cmap } = convertGlyphs(gs);

	const gsub = convertGsub(otl.GSUB, glyphs);
	const gpos = convertGpos(otl.GPOS, glyphs);
	const gdef = convertGdef(otl.GDEF, glyphs);

	return { ...baseFont, glyphs, cmap, gsub, gpos, gdef };
};
