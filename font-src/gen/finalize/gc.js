"use strict";

const { Radical } = require("../../support/gr");

module.exports = function gcFont(glyphStore, excludedChars, restFont, cfg) {
	markSweepOtl(restFont.GSUB);
	markSweepOtl(restFont.GPOS);
	const sink = mark(glyphStore, excludedChars, restFont, cfg);
	return sweep(glyphStore, sink);
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

function mark(glyphStore, excludedChars, restFont, cfg) {
	const sink = markInitial(glyphStore, excludedChars);
	while (markStep(glyphStore, sink, restFont, cfg));
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

function markStep(glyphStore, sink, restFont, cfg) {
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

function sweep(glyphStore, gnSet) {
	return glyphStore.filterByName(gnSet);
}
