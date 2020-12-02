"use strict";

const FgRed = "\x1b[31m";
const FgYellow = "\x1b[33m";
const Reset = "\x1b[0m";

const os = require("os");
const shellWord = os.platform() === "win32" ? "command prompt" : "shell";

// Check packages are present
try {
	require("verda/package.json");
	require("semver/package.json");
	require("which/package.json");
	require("@iarna/toml/package.json");
} catch (e) {
	console.error(`${FgRed}It looks like you forgot to run "npm install" before building.${Reset}`);
	console.error(`"npm install" sets up dependencies required to build the fonts.`);
	console.error(`Run the following command in your ${shellWord} and retry:`);
	console.error(`    ${FgYellow}npm install${Reset}`);
	console.error();
	process.exit(1);
}
