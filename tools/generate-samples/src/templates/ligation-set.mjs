import * as themes from "../themes/index.mjs";

function* makeSample(theme, args) {
	const groupSet = new Set(args.ligSets);
	for (const row of args.ligationSamples) {
		for (const sampleStr of row) {
			let sat = [];

			for (const [lgName, lg] of Object.entries(args.ligationCherry)) {
				if (!new Set(lg.samples || []).has(sampleStr)) continue;
				const rankT = lg.sampleRank || 1;

				if (!sat[rankT]) {
					sat[rankT] = { required: 1, satisfied: 0 };
				} else {
					sat[rankT].required += 1;
				}
				if (groupSet.has(lgName)) {
					sat[rankT].satisfied += 1;
				}
			}

			let rank = sat.length - 1;
			for (; rank >= 1 && (!sat[rank] || sat[rank].satisfied < sat[rank].required); rank--);

			yield [{ color: theme[rank > 1 ? "stress" : rank > 0 ? "body" : "dimmed"] }, sampleStr];
			yield " ";
		}
		yield "\n";
	}
}
function trimNewline(xs) {
	while (xs.length && xs[xs.length - 1] === "\n") xs.pop();
	return xs;
}
export default (function (args) {
	const theme = themes[args.theme];
	return {
		width: 1200,
		height: 300,
		frames: [
			{
				"horizontal-align": "center",
				"vertical-align": "center",
				"line-height": 1.25,
				contents: [
					{ "font-family": args.fontFamily, "font-style": args.fontStyle },
					{ "font-size": 24, color: theme.body },
					{ "font-feature-settings": { [args.tag]: args.rank } },
					trimNewline([...makeSample(theme, args)]),
				],
			},
		],
	};
});
