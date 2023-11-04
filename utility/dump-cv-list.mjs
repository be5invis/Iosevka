import { parseVariantsData } from "./export-data/variants-data.mjs";

main().catch(e => {
	console.error(e);
	process.exit(1);
});

async function main() {
	const selector = process.argv[2];
	const variantsData = await parseVariantsData();

	for (const item of variantsData.primes) {
		if (item.key !== selector) continue;
		for (const v of item.variants) {
			console.log(v.rank, v.key, "|", v.description);
		}
	}
}
