import * as themes from "../themes/index.mjs";

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 48;
	const elementWidth = 2.75 * EM;
	const elementHeight = 1.5 * EM;
	const canvasWidth = 30 * EM;
	const canvasHeight = 12 * EM;
	const lineConfig = [
		[-(1 / 4), "Iosevka", "normal"],
		[+(1 / 4), "Iosevka Slab", "normal"],
		[-(1 / 4), "Iosevka", "oblique"],
		[+(1 / 4), "Iosevka Slab", "oblique"],
		[-(1 / 4), "Iosevka", "italic"],
		[+(1 / 4), "Iosevka Slab", "italic"]
	];
	const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	let frames = [];
	for (const [iLine, [pOffset, family, slope]] of lineConfig.entries()) {
		for (const [iWeight, weight] of weights.entries()) {
			const left = canvasWidth / 2 + elementWidth * (iWeight + pOffset - weights.length / 2);
			const top = canvasHeight / 2 + elementHeight * (iLine - lineConfig.length / 2);
			frames.push({
				left,
				top,
				right: left + elementWidth,
				bottom: top + elementHeight,
				"horizontal-align": "center",
				"vertical-align": "center",
				contents: [
					{
						"font-family": family,
						"font-weight": weight,
						"font-style": slope,
						"font-size": EM,
						color: theme.body
					},
					"Mag"
				]
			});
		}
	}
	return { width: canvasWidth, height: canvasHeight, frames };
});
