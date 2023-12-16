import * as Caching from "@iosevka/geometry-cache";

export default async function main(argv) {
	await Caching.merge(argv.base, argv.diff, argv.version, argv.freshAgeKey);
}
