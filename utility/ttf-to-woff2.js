"use strict";

const fs = require("fs");
const wawoff = require("wawoff2");

module.exports = async function (from, to) {
	const input = await fs.promises.readFile(from);
	const out = await wawoff.compress(input);
	await fs.promises.writeFile(to, out);
};
