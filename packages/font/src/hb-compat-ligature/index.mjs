import { Ot } from "ot-builder";

import { buildTTF } from "../font-io/index.mjs";

export async function buildCompatLigatures(para, font) {
	// We need to fix the glyph order before building the TTF
	const glyphList = font.glyphs.decideOrder();
	const gsFixed = Ot.ListGlyphStoreFactory.createStoreFromList(Array.from(glyphList));
	font.glyphs = gsFixed;

	const completedCodePoints = new Set();

	// Build a provisional in-memory TTF for shaping
	const provisionalTtf = buildTTF(font);
	const hb = await (await import("harfbuzzjs")).default;

	// Setup HB objects
	const hbBlob = hb.createBlob(provisionalTtf);
	const hbFace = hb.createFace(hbBlob, 0);
	const hbFont = hb.createFont(hbFace);

	for (const entry of para.compatibilityLigatures) {
		if (completedCodePoints.has(entry.unicode)) continue;

		// Shape the text, produce the glyph list and their positions
		const buffer = hb.createBuffer();
		buffer.addText(entry.sequence);
		buffer.guessSegmentProperties();
		hb.shapeWithTrace(hbFont, buffer, entry.featureTag, 0xffff, 0);
		const shapingResults = buffer.json();
		buffer.destroy();

		// Create the ligature glyph
		const ligature = new Ot.Glyph();
		ligature.horizontal = { start: 0, end: 0 };
		ligature.geometry = new Ot.Glyph.GeometryList();
		ligature.name = `uni${entry.unicode.toString(16).toUpperCase().padStart(4, "0")}`;

		let xCursor = 0;
		let yCursor = 0;
		for (const component of shapingResults) {
			const x = xCursor + component.dx;
			const y = yCursor + component.dy;

			ligature.horizontal.end += component.ax;
			ligature.geometry.items.push(
				new Ot.Glyph.TtReference(
					glyphList.at(component.g),
					Ot.Glyph.Transform2X3.Translate(x, y),
				),
			);

			xCursor += component.ax;
			yCursor += component.ay;
		}

		// Save the ligature glyph
		font.glyphs.items.push(ligature);
		font.cmap.unicode.set(entry.unicode, ligature);
		if (font.gdef) font.gdef.glyphClassDef.set(ligature, Ot.Gdef.GlyphClass.Ligature);
		completedCodePoints.add(entry.unicode);
	}

	hbFont.destroy();
	hbFace.destroy();
	hbBlob.destroy();
}
