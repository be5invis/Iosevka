import themes from "../themes/index.mjs";

// prettier-ignore
export const ssStrings = [
	["ABC.DEF.GHI.JKL.MNO.PQRS.TUV.WXYZ", "abc.def.ghi.jkl.mno.pqrs.tuv.wxyz"],
	["!iIlL17|¦ ¢coO08BDQ $5SZ2zs ∂96µm", "float il1[]={1-2/3.4,5+6=7/8%90};"],
	["1234567890 ,._-+= >< «¯-¬_» ~–÷+×", "{*}[]()<>`+-=$/#_%^@\\&|~?'\" !,.;:"],
	["g9q¶ Þẞðþſß ΓΔΛαβγδηθικλμνξπτυφχψ", [..."ЖЗКНРУЭЯавжзклмнруфчьыэя ", "<=", " ", "!=", " ", "=="]]
];

function* makeSample(lbm, hotChars) {
	for (const row of ssStrings) {
		for (const colStr of row) {
			yield [...colStr].join("");
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
					{ "font-feature-settings": { calt: 1, ...args.fontFeatures } },
					trimNewline([...makeSample(args.lineBreakMode, args.hotChars)]),
				],
			},
		],
	};
});
