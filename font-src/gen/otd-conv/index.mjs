import { CliProc } from "ot-builder";

import { convertGlyphs } from "./glyphs.mjs";
import { convertGsub, convertGpos, convertGdef } from "./layout.mjs";

export function convertOtd(baseFont, otl, gs) {
	const { glyphs, cmap } = convertGlyphs(gs);
	const gsub = convertGsub(otl.GSUB, glyphs);
	const gpos = convertGpos(otl.GPOS, glyphs);
	const gdef = convertGdef(otl.GDEF, glyphs);

	const font = { ...baseFont, glyphs, cmap, gsub, gpos, gdef };
	CliProc.consolidateFont(font);
	return font;
}
