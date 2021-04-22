"use strict";

const fs = require("fs-extra");
const wawoff = require("wawoff2");

module.exports = async function (from, to) {
	const input = await fs.readFile(from);
	const out = await wawoff.compress(input);
	await fs.writeFile(to, out);
};
