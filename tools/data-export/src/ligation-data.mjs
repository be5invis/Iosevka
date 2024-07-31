import fs from "fs";
import path from "path";

import * as toml from "@iarna/toml";
import { createBuildupForComposite } from "@iosevka/param/ligation";

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
		">>-",
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
	],
	["<->", "<-->", "<--->", "<---->", "<=>", "<==>", "<===>", "<====>", "::", ":::", "__"],
	[
		"<~~",
		"</",
		"</>",
		"/>",
		"~~>",
		"==",
		"!=",
		"/=",
		`~=`,
		`<>`,
		"===",
		"!==",
		"!===",
		"=/=",
		"=!=",
	],
	[
		"<:",
		":=",
		"*=",
		"*+",
		"<*",
		"<*>",
		"*>",
		"<|",
		"<|>",
		"|>",
		"<.",
		"<.>",
		".>",
		"+*",
		"=*",
		"=:",
		":>",
	],
	[
		"(*",
		"*)",
		"/*",
		"*/",
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
	],
];

function buildLigationSet(ligData, getKey) {
	const ligationSets = new Map([
		["*off", { tag: "calt", rank: 0, desc: "Ligation Off", brief: "Off", ligSets: [] }],
	]);
	for (const sel in ligData.composite) {
		const comp = ligData.composite[sel];
		if (!comp.tag || !comp.desc) continue;
		const key = getKey(comp);
		let item = ligationSets.get(key);
		if (!item) {
			let ligSets = createBuildupForComposite(ligData.simple, ligData.composite, comp);
			item = {
				selector: sel,
				tag: comp.tag,
				rank: 1,
				ligSets,
				tagName: [comp.tag],
				desc: comp.desc,
				brief: comp.brief || comp.desc,
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

export async function parseLigationData(argv) {
	const ligToml = await fs.promises.readFile(
		path.join(argv.paramsDir, "ligation-set.toml"),
		"utf8",
	);
	const ligData = toml.parse(ligToml);
	const ligationSets = buildLigationSet(ligData, comp => comp.buildup.join(","));
	const nonMergeLigationSets = buildLigationSet(
		ligData,
		comp => comp.tag + comp.buildup.join(","),
	);
	return {
		samplesNarrow: ligationSamplesNarrow,
		cherry: ligData.simple,
		rawSets: ligData.composite,
		sets: [...ligationSets.values()],
		nonMergeSets: [...nonMergeLigationSets.values()],
	};
}
