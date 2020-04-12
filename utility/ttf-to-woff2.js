"use strict";
const fs = require("fs");
const ttf2woff2 = require("ttf2woff2");

module.exports = function (from, to) {
	const input = fs.readFileSync(from);
	const woff = ttf2woff2(input);
	fs.writeFileSync(to, woff);
};
