import { getCharMapAndSupportedLanguageList } from "@iosevka/data-export/supported-languages";

import { MdCol } from "../md-format-tools.mjs";

export default async function processCvInfluences(argv) {
	const cl = await getCharMapAndSupportedLanguageList(
		argv.charMapPath,
		argv.charMapItalicPath,
		argv.charMapObliquePath,
	);

	let m = {
		upright: new Map(),
		italic: new Map(),
	};

	for (const block of cl.unique.unicodeCoverage) {
		for (const ch of block.characters) {
			if (!ch.inFont) continue;
			addToCvInfluenceMap(
				cl.unique.featureSeries,
				m.upright,
				ch.lch,
				ch.cvFeatureSetsUpright,
			);
			addToCvInfluenceMap(cl.unique.featureSeries, m.italic, ch.lch, ch.cvFeatureSetsItalic);
		}
	}

	const md = new MdCol("Section-CV-Influences");
	md.log(`### Upright CV influences`);
	md.log(``);
	logCvInfluenceMap(md, m.upright);
	md.log(``);
	md.log(`### Italic CV influences`);
	md.log(``);
	logCvInfluenceMap(md, m.italic);
	md.log(``);
	return md;
}

function addToCvInfluenceMap(featureSeries, m, lch, ids) {
	if (!ids || !ids.length) return;
	for (const id of ids) {
		let fs = featureSeries[id];
		if (!fs) continue;
		let s = m.get(fs.name);
		if (!s) {
			s = new Set();
			m.set(fs.name, s);
		}
		s.add(lch);
	}
}

function logCvInfluenceMap(md, m) {
	let a = Array.from(m).sort((a, b) => a[0].toUpperCase().localeCompare(b[0].toUpperCase()));
	for (const [tag, chars] of a) {
		md.log(`- \`${tag}\`:`);
		md.log(``);
		md.log(`  ` + Array.from(chars).map(formatLch).join(", "));
		md.log(``);
	}
}

function formatLch(lch) {
	return mdEscape(lch) + " (`U+" + lch.toString(16).padStart(4, "0").toUpperCase() + "`)";
}

function mdEscape(lch) {
	let ch = String.fromCodePoint(lch);
	if (ch === "\\") return "\\\\";
	if (ch === "`") return "\\`";
	if (ch === "*") return "\\*";
	if (ch === "_") return "\\_";
	if (ch === "{") return "\\{";
	if (ch === "}") return "\\}";
	if (ch === "[") return "\\[";
	if (ch === "]") return "\\]";
	if (ch === "(") return "\\(";
	if (ch === ")") return "\\)";
	if (ch === "#") return "\\#";
	if (ch === "+") return "\\+";
	if (ch === "-") return "\\-";
	if (ch === ".") return "\\.";
	if (ch === "!") return "\\!";
	return ch;
}
