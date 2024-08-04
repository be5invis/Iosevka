import * as themes from "../themes/index.mjs";

// prettier-ignore
const ssStrings = [
	["ABC.DEF.GHI.JKL.MNO.PQRS.TUV.WXYZ", "abc.def.ghi.jkl.mno.pqrs.tuv.wxyz"],
	["!iIlL17|¦ ¢coO08BDQ $5SZ2zs ∂96µm", "float il1[]={1-2/3.4,5+6=7/8%90};"],
	["1234567890 ,._-+= >< «¯-¬_» ~–÷+×", "{*}[]()<>`+-=$/#_%^@\\&|~?'\" !,.;:"],
	["G6Qg9q¶ Þẞðþſß ΓΔΛαβγδιλμνξπτυφχψ", [..."ЖЗКНРУЭЯавжзклмнруфчьыэя ", "<=", " ", "!=", " ", "=="]]
];

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
export default (function (args) {
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
});
