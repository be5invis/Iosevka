import * as themes from "../themes/index.mjs";

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 48;
	const elementHeight = 1.5 * EM;
	const canvasWidth = 30 * EM;
	const canvasHeight = 15 * EM;
	const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	let frames = [];
	for (const [iWeight, weight] of weights.entries()) {
		const top = canvasHeight / 2 + elementHeight * (iWeight - weights.length / 2);
		frames.push({
			top,
			bottom: top + elementHeight,
			"horizontal-align": "center",
			"vertical-align": "center",
			contents: [
				{
					"font-family": "Iosevka",
					"font-weight": weight,
					"font-size": EM,
					color: theme.body,
				},
				[{ color: theme.title }, "float"],
				" Fox.quick(h){ is_brown ",
				[{ color: theme.stress }, "&&"],
				" it_jumps_over(dogs.lazy); }",
			],
		});
	}
	return { width: canvasWidth, height: canvasHeight, frames };
});
