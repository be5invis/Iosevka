import * as themes from "../themes/index.mjs";

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 240;
	return {
		width: 5 * EM,
		height: 2 * EM,
		frames: [
			{
				"horizontal-align": "center",
				"vertical-align": "center",
				contents: [
					{
						"font-family": "Iosevka",
						"font-weight": 100,
						"font-size": EM,
						color: theme.body,
					},
					"Iosevka",
				],
			},
		],
	};
});
