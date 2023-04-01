import * as fs from "fs";
import * as path from "path";
import * as url from "url";

import * as Toml from "@iarna/toml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

main().catch(e => {
	console.error(e);
	process.exit(1);
});

async function main() {
	const paramsTomlPath = path.join(__dirname, "../params", "variants.toml");
	const tomlText = await fs.promises.readFile(paramsTomlPath, "utf8");
	const tomlData = Toml.parse(tomlText);

	const selector = process.argv[2];
	const vd = tomlData.prime[selector];

	const dimensions = (process.argv.length - 3) / 2;
	const variantsPerDimension = process.argv.slice(3, 3 + dimensions).map(x => parseInt(x, 10));

	const idMap = Array.from(Array(dimensions).keys());
	const transposedMap = process.argv
		.slice(3 + dimensions, 3 + 2 * dimensions)
		.map(x => parseInt(x, 10) - 1);

	let rankToDimensionMapOrig = [];
	populateRankToDimensionMap(rankToDimensionMapOrig, variantsPerDimension, idMap, 0, []);

	let rankToDimensionMapTransposed = [];
	populateRankToDimensionMap(
		rankToDimensionMapTransposed,
		variantsPerDimension,
		transposedMap,
		0,
		[]
	);

	const revMap = reverseMap(rankToDimensionMapTransposed);

	let rankedVariants = [];
	let variants1 = {};

	for (const [k, v] of Object.entries(vd.variants)) {
		const rank = v.rank;
		if (rank) {
			v.rank = revMap.get(rankToDimensionMapOrig[rank - 1]);
			if (!isFinite(v.rank)) throw new Error("Invalid rank");
			rankedVariants.push([v.rank, k, v]);
		} else {
			variants1[k] = v;
		}
	}
	rankedVariants.sort((a, b) => a[0] - b[0]);
	for (const [rank, k, v] of rankedVariants) {
		variants1[k] = v;
	}

	for (const [k, v] of Object.entries(variants1)) {
		console.log(`[prime.${selector}.variants.${k}]`);
		for (const [k1, v1] of Object.entries(v)) {
			if (k1 === "selector") continue;
			console.log(`${k1} = ${JSON.stringify(v1)}`);
		}

		for (const [selector, glyphSuffix] of Object.entries(v.selector)) {
			if (/^\w+$/.test(selector)) {
				console.log(`selector.${selector} = ${JSON.stringify(glyphSuffix)}`);
			} else {
				console.log(
					`selector.${JSON.stringify(selector)} = ${JSON.stringify(glyphSuffix)}`
				);
			}
		}
		console.log(``);
	}
}

function populateRankToDimensionMap(sink, variantsPerDimension, mapping, iDimension, acc) {
	if (iDimension === variantsPerDimension.length) {
		sink.push(acc.join(","));
		return;
	}
	const nVariants = variantsPerDimension[mapping[iDimension]];
	for (let iVariant = 0; iVariant < nVariants; iVariant++) {
		let acc1 = [...acc];
		acc1[mapping[iDimension]] = iVariant;
		populateRankToDimensionMap(sink, variantsPerDimension, mapping, iDimension + 1, acc1);
	}
}

function reverseMap(a) {
	const m = new Map();
	for (const [i, x] of a.entries()) {
		m.set(x, i + 1);
	}
	return m;
}
