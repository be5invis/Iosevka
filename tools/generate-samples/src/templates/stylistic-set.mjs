import themes from "../themes/index.mjs";

import { ssStrings } from "./package-sample.mjs";

function* makeSample(theme, lbm, features, hotChars) {
	const hotCharSet = new Set(hotChars);
	for (const row of ssStrings) {
		for (const colStr of row) {
			for (const ch of colStr) {
				if (hotCharSet.has(ch)) {
					yield [{ "font-feature-settings": features, color: theme.stress }, ch];
				} else {
					yield ch;
				}
			}
			if (lbm === "each-column") {
				yield "\n";
			} else {
				yield "    ";
			}
		}
		if (lbm !== "each-column") {
			yield "\n";
		}
	}
}
function trimNewline(xs) {
	while (xs.length && xs[xs.length - 1] === "\n") xs.pop();
	return xs;
}
export default args => {
	const theme = themes[args.theme];
	return {
		width: 600 * args.hSize,
		height: 200 * args.vSize,
		frames: [
			{
				"horizontal-align": "center",
				"vertical-align": "center",
				"line-height": 1.25,
				contents: [
					{ "font-family": args.fontFamily, "font-style": args.fontStyle },
					{ "font-size": 24, color: theme.body },
					{ "font-feature-settings": { calt: 1 } },
					trimNewline([
						...makeSample(theme, args.lineBreakMode, args.fontFeatures, args.hotChars),
					]),
				],
			},
		],
	};
};
