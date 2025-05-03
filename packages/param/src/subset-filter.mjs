import fs from "fs";

export class SubsetFilter {
	constructor() {
		this.includeCharSet = new Set();
		this.excludeCharSet = new Set();
	}
	isCharacterIncluded(character) {
		if (this.includeCharSet.size > 0 && !this.includeCharSet.has(character)) return false;
		if (this.excludeCharSet.has(character)) return false;
		return true;
	}
}

export async function createSubsetFilter(directives, legacyExcludedCharRangesDirective) {
	const sf = new SubsetFilter();
	if (!directives) return sf;

	await parseDirectives(directives.include, sf.includeCharSet);

	await parseDirectives(directives.exclude, sf.excludeCharSet);
	await parseDirectives({ ranges: legacyExcludedCharRangesDirective }, sf.excludeCharSet);

	return sf;
}

async function parseDirectives(directives, sinkCharset) {
	if (!directives) return;
	if (directives.textFile) {
		// Read the text file and add the characters to the sinkCharset
		const fileContent = await fs.promises.readFile(directives.textFile, "utf-8");
		addStringToSinkCharset(sinkCharset, fileContent);
	} else if (directives.text) {
		// Put the text into the sinkCharset. No comments are allowed
		addStringToSinkCharset(sinkCharset, directives.text);
	} else if (directives.ranges) {
		for (const [lo, hi] of directives.ranges) {
			if (lo > hi) continue;
			for (let i = lo; i <= hi; i++) {
				sinkCharset.add(i);
			}
		}
	}
}

function addStringToSinkCharset(sinkCharset, str) {
	if (!str) return;
	for (const char of str) {
		const codePoint = char.codePointAt(0);
		if (codePoint) sinkCharset.add(codePoint);
	}
}
