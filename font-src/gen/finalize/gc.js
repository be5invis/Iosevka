"use strict";

const { Radical } = require("../../support/gr");

module.exports = function gcFont(glyphStore, excludedChars, restFont, cfg) {
	markSweepOtl(restFont.GSUB);
	markSweepOtl(restFont.GPOS);
	const sink = mark(glyphStore, excludedChars, restFont, cfg);
	return sweep(glyphStore, restFont, sink);
};

function markSweepOtl(table) {
	if (!table || !table.features || !table.lookups) return;
	const accessibleLookupsIds = new Set();
	markLookups(table, accessibleLookupsIds);
	let lookups1 = {};
	for (const l in table.lookups) {
		if (accessibleLookupsIds.has(l)) lookups1[l] = table.lookups[l];
	}
	table.lookups = lookups1;

	let features1 = {};
	for (let f in table.features) {
		const feature = table.features[f];
		if (!feature) continue;
		const featureFiltered = [];
		for (const l of feature) if (accessibleLookupsIds.has(l)) featureFiltered.push(l);
		if (!featureFiltered.length) continue;
		features1[f] = featureFiltered;
	}
	table.features = features1;
}
function markLookups(table, sink) {
	if (!table || !table.features) return;
	for (let f in table.features) {
		const feature = table.features[f];
		if (!feature) continue;
		for (const l of feature) sink.add(l);
	}
	let loop = 0,
		lookupSetChanged = false;
	do {
		lookupSetChanged = false;
		let sizeBefore = sink.size;
		for (const l of Array.from(sink)) {
			const lookup = table.lookups[l];
			if (!lookup || !lookup.subtables) continue;
			if (lookup.type === "gsub_chaining" || lookup.type === "gpos_chaining") {
				for (let st of lookup.subtables) {
					if (!st || !st.apply) continue;
					for (const app of st.apply) sink.add(app.lookup);
				}
			}
		}
		loop++;
		lookupSetChanged = sizeBefore !== sink.size;
	} while (loop < 0xff && lookupSetChanged);
}

function mark(glyphStore, excludedChars, restFont, cfg) {
	const sink = markInitial(glyphStore, excludedChars);
	while (markStep(sink, restFont, cfg));
	return sink;
}

function markInitial(glyphStore, excludedChars) {
	let sink = new Set();
	for (const [gName, g] of glyphStore.namedEntries()) {
		if (!g) continue;
		if (g.glyphRank > 0) sink.add(gName);
		if (Radical.get(g)) sink.add(gName);
		const unicodeSet = glyphStore.queryUnicodeOf(g);
		if (unicodeSet) {
			for (const u of unicodeSet) {
				if (!excludedChars.has(u)) sink.add(gName);
			}
		}
	}
	return sink;
}

function markStep(sink, restFont, cfg) {
	const glyphCount = sink.size;
	if (restFont.GSUB) {
		for (const l in restFont.GSUB.lookups) {
			const lookup = restFont.GSUB.lookups[l];
			if (!lookup || !lookup.subtables) continue;
			for (let st of lookup.subtables) {
				markSubtable(sink, lookup.type, st, cfg);
			}
		}
	}
	const glyphCount1 = sink.size;
	return glyphCount1 > glyphCount;
}

function markSubtable(sink, type, st, cfg) {
	switch (type) {
		case "gsub_single":
			for (const k in st) if (sink.has(k) && st[k]) sink.add(st[k]);
			break;
		case "gsub_multiple":
			for (const k in st) if (sink.has(k) && st[k]) for (const g of st[k]) sink.add(g);
			break;
		case "gsub_alternate":
			if (!cfg || !cfg.ignoreAltSub) {
				for (const k in st) if (sink.has(k) && st[k]) for (const g of st[k]) sink.add(g);
			}
			break;
		case "gsub_ligature":
			for (const sub of st.substitutions) {
				let check = true;
				for (const g of sub.from) if (!sink.has(g)) check = false;
				if (check && sub.to) sink.add(sub.to);
			}
			break;
		case "gsub_chaining":
			break;
		case "gsub_reverse":
			if (st.match && st.to) {
				const matchCoverage = st.match[st.inputIndex];
				for (let j = 0; j < matchCoverage.length; j++) {
					if (sink.has(matchCoverage[j]) && st.to[j]) sink.add(st.to[j]);
				}
			}
			break;
	}
}

function sweep(glyphStore, restFont, gnSet) {
	sweepOtl(restFont.GSUB, gnSet);
	sweepOtl(restFont.GPOS, gnSet);
	return glyphStore.filterByName(gnSet);
}

function sweepOtl(table, gnSet) {
	if (!table || !table.lookups) return;
	for (const lid in table.lookups) {
		const lookup = table.lookups[lid];
		if (!lookup.subtables) continue;
		const newSubtables = [];
		for (const st of lookup.subtables) {
			const keep = sweepSubtable(st, lookup.type, gnSet);
			if (keep) newSubtables.push(st);
		}
		lookup.subtables = newSubtables;
	}
}

function sweepSubtable(st, type, gnSet) {
	switch (type) {
		case "gsub_single":
			return sweep_GsubSingle(st, gnSet);
		case "gsub_multiple":
		case "gsub_alternate":
			return sweep_GsubMultiple(st, gnSet);
		case "gsub_ligature":
			return sweep_GsubLigature(st, gnSet);
		case "gsub_chaining":
			return sweep_GsubChaining(st, gnSet);
		case "gsub_reverse":
			return sweep_gsubReverse(st, gnSet);
		case "gpos_mark_to_base":
		case "gpos_mark_to_mark":
			return sweep_gposMark(st, gnSet);
		default:
			return true;
	}
}

function sweep_GsubSingle(st, gnSet) {
	let nonEmpty = false;
	let from = Object.keys(st);
	for (const gidFrom of from) {
		if (!gnSet.has(gidFrom) || !gnSet.has(st[gidFrom])) {
			delete st[gidFrom];
		} else {
			nonEmpty = true;
		}
	}
	return nonEmpty;
}

function sweep_GsubMultiple(st, gnSet) {
	let nonEmpty = false;
	let from = Object.keys(st);
	for (const gidFrom of from) {
		let include = gnSet.has(gidFrom);
		if (st[gidFrom]) {
			for (const gidTo of st[gidFrom]) {
				include = include && gnSet.has(gidTo);
			}
		} else {
			include = false;
		}
		if (!include) {
			delete st[gidFrom];
		} else {
			nonEmpty = true;
		}
	}
	return nonEmpty;
}

function sweep_GsubLigature(st, gnSet) {
	if (!st.substitutions) return false;
	let newSubst = [];
	for (const rule of st.substitutions) {
		let include = true;
		if (!gnSet.has(rule.to)) include = false;
		for (const from of rule.from) if (!gnSet.has(from)) include = false;
		if (include) newSubst.push(rule);
	}
	st.substitutions = newSubst;
	return true;
}

function sweep_GsubChaining(st, gnSet) {
	const newMatch = [];
	for (let j = 0; j < st.match.length; j++) {
		newMatch[j] = [];
		for (let k = 0; k < st.match[j].length; k++) {
			const gidFrom = st.match[j][k];
			if (gnSet.has(gidFrom)) {
				newMatch[j].push(gidFrom);
			}
		}
		if (!newMatch[j].length) return false;
	}
	st.match = newMatch;
	return true;
}

function sweep_gsubReverse(st, gnSet) {
	const newMatch = [],
		newTo = [];
	for (let j = 0; j < st.match.length; j++) {
		newMatch[j] = [];
		for (let k = 0; k < st.match[j].length; k++) {
			const gidFrom = st.match[j][k];
			let include = gnSet.has(gidFrom);
			if (j === st.inputIndex) {
				include = include && gnSet.has(st.to[k]);
				if (include) {
					newMatch[j].push(gidFrom);
					newTo.push(st.to[k]);
				}
			} else {
				if (include) newMatch[j].push(gidFrom);
			}
		}
		if (!newMatch[j].length) return false;
	}
	st.match = newMatch;
	st.to = newTo;
	return true;
}

function sweep_gposMark(st, gnSet) {
	let marks = st.marks || {},
		newMarks = {},
		hasMarks = false;
	let bases = st.bases || {},
		newBases = {},
		hasBases = true;

	for (const gid in marks) {
		if (gnSet.has(gid) && marks[gid]) {
			newMarks[gid] = marks[gid];
			hasMarks = true;
		}
	}
	for (const gid in bases) {
		if (gnSet.has(gid) && bases[gid]) {
			newBases[gid] = bases[gid];
			hasBases = true;
		}
	}
	st.marks = newMarks;
	st.bases = newBases;
	return hasMarks && hasBases;
}
