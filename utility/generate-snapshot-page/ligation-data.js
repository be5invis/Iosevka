function TAG(ltag) {
	return function(s) {
		return { ltag: ltag, s: s };
	};
}
const arw2 = TAG("arrow2");
const logc = TAG("logic");
const calt = TAG("calt");
const brst = TAG("brst");
const dopr = TAG("dotoper");

const ligationSamples = [
	[
		arw2("-<<"),
		arw2("-<"),
		arw2("-<-"),
		calt("<--"),
		calt("<---"),
		arw2("<<-"),
		calt("<-"),
		calt("->"),
		arw2("->>"),
		calt("-->"),
		calt("--->"),
		arw2("->-"),
		arw2(">-"),
		arw2(">>-"),
		calt("<->"),
		calt("<-->"),
		calt("<--->"),
		calt("<---->"),
		calt("<!--")
	],
	[
		arw2("=<<"),
		arw2("=<"),
		arw2("=<="),
		calt("<=="),
		calt("<==="),
		arw2("<<="),
		calt("<="),
		calt("=>"),
		arw2("=>>"),
		calt("==>"),
		calt("===>"),
		arw2("=>="),
		calt(">="),
		arw2(">>="),
		calt("<=>"),
		calt("<==>"),
		calt("<===>"),
		calt("<====>"),
		calt("<!---")
	],
	[
		calt("<----------------"),
		calt("---------------->"),
		calt("<===============>"),
		calt("a:b"),
		calt("a::b"),
		calt("a:::b"),
		logc("a\\/b"),
		logc("a/\\b")
	],
	[
		calt(":="),
		calt(":-"),
		calt(":+"),
		calt("<*"),
		calt("<*>"),
		calt("*>"),
		calt("<|"),
		calt("<|>"),
		calt("|>"),
		dopr("<."),
		dopr("<.>"),
		dopr(".>"),
		calt("+:"),
		calt("-:"),
		calt("=:"),
		calt("<******>"),
		brst("(* comm *)"),
		calt("=="),
		calt("!="),
		calt("==="),
		calt("!==")
	]
];
const ligationSets = [
	{ tag: "calt", switch: "off", desc: "Ligation Off", group: [] },
	{ tag: "calt", desc: "Default setting in text editors", group: ["calt"] },
	{ tag: "XJS0", tagName: "XJS0, XPHP", desc: "JavaScript, PHP", group: ["calt", "eeeq"] },
	{
		tag: "XFST",
		tagName: "XML0, XFS0, XFST",
		desc: "ML, OCaml, F#, F*",
		group: ["calt", "brst", "logic", "ml"]
	},
	{ tag: "SWFT", tagName: "SWFT, XPTL", desc: "Swift, PatEL", group: ["arrow2"] },
	{
		tag: "XHS0",
		tagName: "XHS0, XIDR, XELM, PURS",
		desc: "Haskell, Idris, Elm, PureScript",
		group: ["calt", "arrow2", "dotoper", "logic"]
	},
	{
		tag: "XV00",
		tagName: "XV00",
		desc: "Coq",
		group: ["calt", "arrow2", "dotoper", "logic", "brst"]
	}
];

module.exports = function getLigationData() {
	return { samples: ligationSamples, sets: ligationSets };
};
