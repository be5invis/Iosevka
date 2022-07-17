import * as Caching from "./gen/caching/index.mjs";

export default (async function main(argv) {
	await Caching.merge(argv.base, argv.diff, argv.version, argv.freshAgeKey);
});
