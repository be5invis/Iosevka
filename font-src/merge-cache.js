"use strict";

const Caching = require("./gen/caching/index");

module.exports = async function main(argv) {
	await Caching.merge(argv.base, argv.diff, argv.version, argv.freshAgeKey);
};
