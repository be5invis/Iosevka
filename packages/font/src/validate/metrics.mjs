import isInCi from "is-in-ci";

// In FontConfig, a font is considered "monospace" if and only if all encoded non-combining
// characters (AW > 0) have the same width. We use this method to validate whether our
// "Fixed" subfamilies are properly built.
export function validateFontConfigMono(font) {
	let awSet = new Map(); // advance width to unicodes
	for (const [ch, g] of [...font.cmap.unicode.entries()]) {
		const aw = g.horizontal.end - g.horizontal.start;
		if (aw > 0) {
			const s = awSet.get(aw);
			if (s) s.add(ch);
			else awSet.set(aw, new Set([ch]));
		}
	}
	for (const [ch, vs, g] of [...font.cmap.vs.entries()]) {
		const aw = g.horizontal.end - g.horizontal.start;
		if (aw > 0) {
			const s = awSet.get(aw);
			if (s) s.add(ch);
			else awSet.set(aw, new Set([ch]));
		}
	}
	if (awSet.size > 1) {
		console.error("Fixed variant has wide characters");
		const sortedAsc = [...awSet.entries()].sort((a, b) => a[0] - b[0]);
		for (const [aw, s] of sortedAsc.slice(1)) {
			console.error(
				`  ${aw}: ${[...s].map(ch => `U+${ch.toString(16).toUpperCase()}`).join(", ")}`,
			);
		}

		if (isInCi) {
			throw new Error("FontConfig Mono validation failed");
		}
	}
}
