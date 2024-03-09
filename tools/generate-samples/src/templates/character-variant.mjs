import * as themes from "../themes/index.mjs";

export default (function (args) {
	const theme = themes[args.theme];
	const unitWidth = 128;
	let frames = [];
	for (const ch of args.hotChars) {
		const slopeClasses = args.slopeDependent ? ["normal", "italic"] : ["normal"];
		for (const slope of slopeClasses) {
			frames.push({
				left: unitWidth * frames.length,
				right: unitWidth * (1 + frames.length),
				"horizontal-align": "center",
				"vertical-align": "center",
				"line-height": 128 / 96,
				"baseline-offset": 0.85,
				contents: [
					{ "font-family": "Iosevka" },
					{ "font-size": 96 },
					{ "font-style": slope },
					{ "font-feature-settings": { ...args.fontFeatures, dlig: 1 } },
					{ color: theme.body },
					ch,
				],
			});
		}
	}
	return {
		width: unitWidth * frames.length,
		height: 160,
		frames,
	};
});
