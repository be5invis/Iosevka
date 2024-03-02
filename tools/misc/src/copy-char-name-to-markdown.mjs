"use strict";

import ucdNames from "@unicode/unicode-15.1.0/Names/index.js";

const codes = process.argv
	.slice(2)
	.map(x => parseInt(x, 16))
	.sort((a, b) => a - b);

for (const lch of codes) {
	const name = ucdNames.get(lch);
	console.log("  -", name, `(\`U+${lch.toString(16).toUpperCase().padStart(4, "0")}\`).`);
}
