"use strict";

const fs = require("fs-extra");
const path = require("path");
const toml = require("@iarna/toml");

const ligationSamples = [
	[
		"-<<",
		"-<",
		"-<-",
		"<--",
		"<---",
		"<<-",
		"<-",
		"->",
		"->>",
		"-->",
		"--->",
		"->-",
		">-",
		">>-",
		"<->",
		"<-->",
		"<--->",
		"<---->",
		"<!--"
	],
	[
		"=<<",
		"=<",
		"=<=",
		"<==",
		"<===",
		"<<=",
		"<=",
		"=>",
		"=>>",
		"==>",
		"===>",
		"=>=",
		">=",
		">>=",
		"<=>",
		"<==>",
		"<===>",
		"<====>",
		"<!---"
	],
	[
		"[|",
		"|]",
		"{|",
		"|}",
		"<=<",
		">=>",
		"<~~",
		"<~",
		"~>",
		"~~>",
		"::",
		":::",
		"\\/",
		"/\\",
		"==",
		"!=",
		"/=",
		`~=`,
		`<>`,
		"===",
		"!==",
		"=/=",
		"=!=",
		":>"
	],
	[
		":=",
		":-",
		":+",
		"<*",
		"<*>",
		"*>",
		"<|",
		"<|>",
		"|>",
		"<.",
		"<.>",
		".>",
		"+:",
		"-:",
		"=:",
		"<***>",
		"__",
		"(* comm *)",
		"++",
		"+++",
		"|-",
		"-|"
	]
];

const ligationSamplesNarrow = [
	[
		"-<<",
		"-<",
		"-<-",
		"<--",
		"<---",
		"<<-",
		"<-",
		"->",
		"->>",
		"-->",
		"--->",
		"->-",
		">-",
		">>-"
	],
	[
		"=<<",
		"=<",
		"=<=",
		"<==",
		"<===",
		"<<=",
		"<=",
		"=>",
		"=>>",
		"==>",
		"===>",
		"=>=",
		">=",
		">>="
	],
	["<->", "<-->", "<--->", "<---->", "<=>", "<==>", "<===>", "<====>", "-------->"],
	[
		"<~~",
		"<~",
		"~>",
		"~~>",
		"::",
		":::",
		"==",
		"!=",
		"/=",
		`~=`,
		`<>`,
		"===",
		"!==",
		"=/=",
		"=!="
	],
	[
		":=",
		":-",
		":+",
		"<*",
		"<*>",
		"*>",
		"<|",
		"<|>",
		"|>",
		"<.",
		"<.>",
		".>",
		"+:",
		"-:",
		"=:",
		":>",
		"__"
	],
	[
		"(*",
		"*)",
		"[|",
		"|]",
		"{|",
		"|}",
		"++",
		"+++",
		"\\/",
		"/\\",
		"|-",
		"-|",
		"<!--",
		"<!---",
		"<***>"
	]
];

module.exports = async function getLigationData() {
	const ligToml = await fs.readFile(
		path.join(__dirname, "../../params/ligation-set.toml"),
		"utf8"
	);
	const ligData = toml.parse(ligToml);

	const ligationSets = buildLigationSet(ligData, comp => comp.buildup.join(","));
	const nonMergeLigationSets = buildLigationSet(
		ligData,
		comp => comp.tag + comp.buildup.join(",")
	);

	return {
		samples: ligationSamples,
		samplesNarrow: ligationSamplesNarrow,
		cherry: ligData.simple,
		rawSets: ligData.composite,
		sets: [...ligationSets.values()],
		nonMergeSets: [...nonMergeLigationSets.values()]
	};
};

function buildLigationSet(ligData, getKey) {
	const ligationSets = new Map([
		["*off", { tag: "calt", rank: 0, desc: "Ligation Off", brief: "Off", ligSets: [] }]
	]);
	for (const sel in ligData.composite) {
		const comp = ligData.composite[sel];
		if (!comp.tag) continue;
		const key = getKey(comp);
		let item = ligationSets.get(key);
		if (!item) {
			let ligSets = new Set();
			for (const s of comp.buildup) {
				ligSets.add(ligData.simple[s].ligGroup);
			}
			item = {
				selector: sel,
				tag: comp.tag,
				rank: 1,
				ligSets: [...ligSets],
				tagName: [comp.tag],
				desc: comp.desc,
				brief: comp.brief || comp.desc
			};
			ligationSets.set(key, item);
		} else {
			item.tagName = [...item.tagName, comp.tag];
			item.desc += ", " + comp.desc;
			item.brief += ", " + comp.brief;
		}
	}
	return ligationSets;
}
