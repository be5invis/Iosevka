const fs = require("fs-extra");
const path = require("path");
const toml = require("@iarna/toml");

function TAG(...ltag) {
	return function (s) {
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
const eqexeq = TAG("eqexeq", "eqexeq", "eqexeq-dl");
const eqslasheq = TAG("slasheq", "eqslasheq");
const slasheq = TAG("slasheq");
const tildeeq = TAG("tildeeq");
const ineq = TAG("ineq");
const logc = TAG("logic");
const brst = TAG("brst");
const trig = TAG("trig");
const ltgt = TAG("ltgt-diamond", "ltgt-ne");
const llggeq_a = TAG("arrow", "llggeq");
const llggeq_b = TAG("arrow2", "llggeq");
const dotOper = TAG("dotoper");
const kernDotty = TAG("kern-dotty");
const htmlComment = TAG("html-comment");
const plusPlus = TAG("plusplus");
const colonGt = TAG("colon-greater");

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
		llggeq_a("<<="),
		ineq("<="),
		arrow("=>"),
		arrow("=>>"),
		arrow("==>"),
		arrow("===>"),
		arrow2("=>="),
		ineq(">="),
		llggeq_b(">>="),
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
		kernDotty("::"),
		kernDotty(":::"),
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
		centerOps("<***>"),
		colonGt(":>"),
		brst("(* comm *)"),
		plusPlus("++"),
		plusPlus("+++"),
		logc("|-"),
		logc("-|")
	]
];

const ligationSamplesNarrow = [
	[
		arrow("<--"),
		arrow("<---"),
		arrow("<<-"),
		arrow("<-"),
		arrow("<->"),
		arrow("->"),
		arrow("->>"),
		arrow("-->"),
		arrow("--->"),
		htmlComment("<!--")
	],
	[
		arrow2("-<<"),
		arrow2("-<"),
		arrow2("-<-"),
		arrow2("->-"),
		arrow2(">-"),
		arrow2(">>-"),
		arrow("<-->"),
		arrow("<--->"),
		arrow("<---->")
	],
	[
		arrow("<=="),
		arrow("<==="),
		llggeq_a("<<="),
		ineq("<="),
		arrow("<=>"),
		arrow("=>"),
		arrow("=>>"),
		arrow("==>"),
		arrow("===>"),
		htmlComment("<!---")
	],
	[
		arrow2("=<<"),
		arrow2("=<"),
		arrow2("=<="),
		arrow2("=>="),
		ineq(">="),
		llggeq_b(">>="),
		arrow("<==>"),
		arrow("<===>"),
		arrow("<====>")
	],
	[
		arrow("<-------"),
		arrow("------->"),
		arrow("<======>"),
		arrow("<~~"),
		arrow("<~"),
		arrow("~>"),
		arrow("~~>")
	],
	[
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
		centerOps("+:"),
		centerOps("-:"),
		centerOps("=:")
	],
	[
		kernDotty("::"),
		kernDotty(":::"),
		dotOper("<."),
		dotOper("<.>"),
		dotOper(".>"),
		brst("(* *)"),
		colonGt(":>"),
		plusPlus("++"),
		plusPlus("+++"),
		logc("|-"),
		logc("-|")
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
		["*off", { tag: "calt", switch: "off", desc: "Ligation Off", brief: "Off", ligSets: [] }]
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
				tag: comp.tag,
				ligSets: [...ligSets],
				tagName: comp.tag,
				desc: comp.desc,
				brief: comp.brief || comp.desc
			};
			ligationSets.set(key, item);
		} else {
			item.tagName += ", " + comp.tag;
			item.desc += ", " + comp.desc;
			item.brief += ", " + comp.brief;
		}
	}
	return ligationSets;
}
