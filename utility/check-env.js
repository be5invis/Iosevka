"use strict";

const which = require("which");
const colors = require("colors/safe");

console.log("Checking External Dependencies");
check("otfccdump");
check("otfccbuild");
check("ttfautohint");
check("otf2otc");
checkOptional("ttx");

function check(util) {
	try {
		which.sync(util);
		console.error(colors.green(` * External dependency <${util}> is present.`));
	} catch (e) {
		console.error(colors.red(` * External dependency <${util}> is not found.`));
	}
}
function checkOptional(util) {
	try {
		which.sync(util);
		console.error(colors.green(` * Optional external dependency <${util}> is present.`));
	} catch (e) {
		console.error(colors.yellow(` * Optional external dependency <${util}> is not found.`));
	}
}
