const fs = require("fs-extra");
const path = require("path");
const toml = require("toml");

function TAG(...ltag) {
	return function(s) {
		return { tags: ltag, s: s };
	};
}
const arrow = TAG("arrow");
const arrow2 = TAG("arrow2");
const centerOps = TAG("center-ops");
const eqeq = TAG("eqeq");
const exeq = TAG("exeq");
const eqeqeq = TAG("eqeq", "eqeqeq");
const exeqeq = TAG("exeq", "exeqeq");
const eqexeq = TAG("eqexeq", "eqexeq");
const eqslasheq = TAG("slasheq", "eqslasheq");
const slasheq = TAG("slasheq");
const tildeeq = TAG("tildeeq");
const ineq = TAG("ineq");
const logc = TAG("logic");
const brst = TAG("brst");
const trig = TAG("trig");
const ltgt = TAG("ltgt-diamond", "ltgt-ne");
const dotOper = TAG("dotoper");
const colons = TAG("colons");
const htmlComment = TAG("html-comment");
const plusplus = TAG("plusplus");

const ligationSamples = [
	[
		arrow2("-<<"),
		arrow2("-<"),
		arrow2("-<-"),
		arrow("<--"),
		arrow("<---"),
		arrow("<<-"),
		arrow("<-"),
		arrow("->"),
		arrow("->>"),
		arrow("-->"),
		arrow("--->"),
		arrow2("->-"),
		arrow2(">-"),
		arrow2(">>-"),
		arrow("<->"),
		arrow("<-->"),
		arrow("<--->"),
		arrow("<---->"),
		htmlComment("<!--")
	],
	[
		arrow2("=<<"),
		arrow2("=<"),
		arrow2("=<="),
		arrow("<=="),
		arrow("<==="),
		arrow("<<="),
		ineq("<="),
		arrow("=>"),
		arrow("=>>"),
		arrow("==>"),
		arrow("===>"),
		arrow2("=>="),
		ineq(">="),
		arrow2(">>="),
		arrow("<=>"),
		arrow("<==>"),
		arrow("<===>"),
		arrow("<====>"),
		htmlComment("<!---")
	],
	[
		arrow("<------"),
		arrow("------>"),
		arrow("<=====>"),
		arrow("<~~"),
		arrow("<~"),
		arrow("~>"),
		arrow("~~>"),
		colons("::"),
		colons(":::"),
		logc("\\/"),
		logc("/\\"),
		eqeq("=="),
		exeq("!="),
		slasheq("/="),
		tildeeq(`~=`),
		ltgt(`<>`),
		eqeqeq("==="),
		exeqeq("!=="),
		eqslasheq("=/="),
		eqexeq("=!=")
	],
	[
		centerOps(":="),
		centerOps(":-"),
		centerOps(":+"),
		centerOps("<*"),
		centerOps("<*>"),
		centerOps("*>"),
		trig("<|"),
		trig("<|>"),
		trig("|>"),
		dotOper("<."),
		dotOper("<.>"),
		dotOper(".>"),
		centerOps("+:"),
		centerOps("-:"),
		centerOps("=:"),
		centerOps("<******>"),
		brst("(* comm *)"),
		plusplus("++"),
		plusplus("+++"),
		logc("|-"),
		logc("-|")
	]
];

module.exports = async function getLigationData() {
	const ligToml = await fs.readFile(path.join(__dirname, "../../ligation-set.toml"), "utf8");
	const ligData = toml.parse(ligToml);

	const ligationSets = new Map();
	for (const sel in ligData.composite) {
		const comp = ligData.composite[sel];
		if (!comp.tag) continue;
		const key = comp.buildup.join(",");
		let item = ligationSets.get(key);
		if (!item) {
			item = { tag: comp.tag, buildup: comp.buildup, tagName: comp.tag, desc: comp.desc };
			ligationSets.set(key, item);
		} else {
			item.tagName += ", " + comp.tag;
			item.desc += ", " + comp.desc;
		}
	}

	return {
		samples: ligationSamples,
		cherry: ligData.simple,
		rawSets: ligData.composite,
		sets: [
			{ tag: "calt", switch: "off", desc: "Ligation Off", buildup: [] },
			...ligationSets.values()
		]
	};
};
