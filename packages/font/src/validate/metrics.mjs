// In FontConfig, a font is considered "monospace" if and only if all encoded non-combining
// characters (AW > 0) have the same width. We use this method to validate whether our
// "Fixed" subfamilies are properly built.
export function validateFontConfigMono(font) {
	let awSet = new Set();
	for (const [ch, g] of [...font.cmap.unicode.entries()]) {
		const aw = g.horizontal.end - g.horizontal.start;
		if (aw > 0) awSet.add(aw);
	}
	for (const [ch, vs, g] of [...font.cmap.vs.entries()]) {
		const aw = g.horizontal.end - g.horizontal.start;
		if (aw > 0) awSet.add(aw);
	}
	if (awSet.size > 1) {
		console.error("Fixed variant has wide characters");
	}
}
