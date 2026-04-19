import { CliProc } from "ot-builder";

import { convertGlyphGeometryToProxy } from "./geometry.mjs";
import { convertGlyphs } from "./glyphs.mjs";
import { convertGdef, convertGpos, convertGsub } from "./layout.mjs";

export function convertOtd(cache, para, baseFont, otl, gs) {
	convertGlyphGeometryToProxy(cache, para, gs);
	const { glyphs, cmap } = convertGlyphs(gs);
	const gsub = convertGsub(otl.GSUB, glyphs);
	const gpos = convertGpos(otl.GPOS, glyphs);
	const gdef = convertGdef(otl.GDEF, glyphs);

	const font = { ...baseFont, glyphs, cmap, gsub, gpos, gdef };
	CliProc.consolidateFont(font);
	return font;
}
