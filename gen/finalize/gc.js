"use strict";

module.exports = function gcFont(gs, excludedChars, restFont, cfg) {
	markSweepOtl(restFont.GSUB);
	markSweepOtl(restFont.GPOS);
	const sink = mark(gs, excludedChars, restFont, cfg);
	sweep(gs, restFont, sink);
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

function mark(gs, excludedChars, restFont, cfg) {
	const sink = markInitial(gs, excludedChars);
	while (markStep(sink, restFont, cfg));
	return sink;
}

function markInitial(gs, excludedChars) {
	let sink = new Set();
	for (const g of gs) {
		if (g.glyphRank > 0) sink.add(g.name);
		if (!g || !g.unicode) continue;
		for (const u of g.unicode) if (!excludedChars.has(u)) sink.add(g.name);
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

function sweep(gs, restFont, sink) {
	filterInPlace(gs, g => sink.has(g.name));
	sweepOtl(restFont.GSUB, sink);
}

function sweepOtl(gsub, sink) {
	if (!gsub || !gsub.lookups) return;
	for (const lid in gsub.lookups) {
		const lookup = gsub.lookups[lid];
		if (!lookup.subtables) continue;
		const newSubtables = [];
		for (const st of lookup.subtables) {
			const keep = sweepSubtable(st, lookup.type, sink);
			if (keep) newSubtables.push(st);
		}
		lookup.subtables = newSubtables;
	}
}

function sweepSubtable(st, type, gs) {
	switch (type) {
		case "gsub_single":
			return sweep_GsubSingle(st, gs);
		case "gsub_multiple":
			return sweep_GsubMultiple(st, gs);
		case "gsub_ligature":
			return sweep_GsubLigature(st, gs);
		case "gsub_chaining":
			return sweep_GsubChaining(st, gs);
		case "gsub_reverse":
			return sweep_gsubReverse(st, gs);
		default:
			return true;
	}
}

function sweep_GsubSingle(st, gs) {
	let nonEmpty = false;
	let from = Object.keys(st);
	for (const gidFrom of from) {
		if (!gs.has(gidFrom) || !gs.has(st[gidFrom])) {
			delete st[gidFrom];
		} else {
			nonEmpty = true;
		}
	}
	return nonEmpty;
}

function sweep_GsubMultiple(st, gs) {
	let nonEmpty = false;
	let from = Object.keys(st);
	for (const gidFrom of from) {
		let include = gs.has(gidFrom);
		if (st[gidFrom]) {
			for (const gidTo of st[gidFrom]) {
				include = include && gs.has(gidTo);
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

function sweep_GsubLigature(st, gs) {
	if (!st.substitutions) return false;
	let newSubst = [];
	for (const rule of st.substitutions) {
		let include = true;
		if (!gs.has(rule.to)) include = false;
		for (const from of rule.from) if (!gs.has(from)) include = false;
		if (include) newSubst.push(rule);
	}
	st.substitutions = newSubst;
	return true;
}

function sweep_GsubChaining(st, gs) {
	const newMatch = [];
	for (let j = 0; j < st.match.length; j++) {
		newMatch[j] = [];
		for (let k = 0; k < st.match[j].length; k++) {
			const gidFrom = st.match[j][k];
			if (gs.has(gidFrom)) {
				newMatch[j].push(gidFrom);
			}
		}
		if (!newMatch[j].length) return false;
	}
	st.match = newMatch;
	return true;
}

function sweep_gsubReverse(st, gs) {
	const newMatch = [],
		newTo = [];
	for (let j = 0; j < st.match.length; j++) {
		newMatch[j] = [];
		for (let k = 0; k < st.match[j].length; k++) {
			const gidFrom = st.match[j][k];
			let include = gs.has(gidFrom);
			if (j === st.inputIndex) {
				include = include && gs.has(st.to[k]);
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

function filterInPlace(a, condition) {
	let i = 0,
		j = 0;

	while (i < a.length) {
		const val = a[i];
		if (condition(val, i, a)) a[j++] = val;
		i++;
	}

	a.length = j;
	return a;
}
