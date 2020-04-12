"use strict";
const fs = require("fs");
const ttf2woff = require("ttf2woff");

module.exports = function (from, to) {
	const input = fs.readFileSync(from);
	const ttf = new Uint8Array(input);
	const woff = Buffer.from(ttf2woff(ttf, {}).buffer);
	fs.writeFileSync(to, woff);
};
