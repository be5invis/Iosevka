"use strict";
const fs = require("fs");
const ttf2woff = require("ttf2woff");

module.exports = function(from, to) {
	const input = fs.readFileSync(from);
	var ttf = new Uint8Array(input);
	var woff = new Buffer(ttf2woff(ttf, {}).buffer);
	fs.writeFileSync(to, woff);
};
