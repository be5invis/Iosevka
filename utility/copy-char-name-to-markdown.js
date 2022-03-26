const ucdNames = require("@unicode/unicode-14.0.0/Names");

for (let i = 2; i < process.argv.length; i++) {
	const lch = parseInt(process.argv[i], 16);
	const name = ucdNames.get(lch);
	console.log("  -", name, `(\`U+${lch.toString(16).toUpperCase().padStart(4, "0")}\`);`);
}
