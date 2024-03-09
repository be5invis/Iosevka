import * as themes from "../themes/index.mjs";

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 16;
	return {
		width: (2 + (args.text.length + (args.stressText || "").length) * 0.6) * EM,
		height: 2.5 * EM,
		frames: [
			{
				"horizontal-align": "center",
				"vertical-align": "center",
				contents: [
					{
						"font-family": "Iosevka",
						"font-weight": 500,
						"font-width": 6,
						"font-size": EM,
					},
					[{ color: theme.body }, args.text],
					[{ color: theme.stress }, args.stressText || ""],
				],
			},
		],
	};
});
