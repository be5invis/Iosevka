import { Ot } from "ot-builder";

import { buildTTF } from "../font-io/index.mjs";

export async function buildCompatLigatures(para, font) {
	// MappedGlyphStore is append-only, so we do not need to worry about the order of glyphs
	const glyphList = font.glyphs.decideOrder();

	const completedCodePoints = new Set();
	const jobs = [];

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
		jobs.push({ name: ligature.name, unicode: entry.unicode, glyph: ligature });
		completedCodePoints.add(entry.unicode);
	}

	// Commit jobs
	for (const job of jobs) {
		font.glyphs.addOtGlyph(job.name, job.glyph);
		font.cmap.unicode.set(job.unicode, job.glyph);
		if (font.gdef) font.gdef.glyphClassDef.set(job.glyph, Ot.Gdef.GlyphClass.Ligature);
	}

	hbFont.destroy();
	hbFace.destroy();
	hbBlob.destroy();
}
