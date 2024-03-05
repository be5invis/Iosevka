import fs from "fs";
import path from "path";
import url from "url";

import ugc from "@unicode/unicode-15.1.0/General_Category/index.js";
import ucdNames from "@unicode/unicode-15.1.0/Names/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

class CharDataLookup {
	constructor() {
		this.overrides = new Map();
	}

	lookup(lch) {
		if (this.overrides.has(lch)) {
			return this.overrides.get(lch);
		} else {
			return {
				gc: ugc.get(lch),
				charName: ucdNames.get(lch),
			};
		}
	}
}

export async function createCharDataLookup() {
	const lookup = new CharDataLookup();

	const additionalDataTxt = await fs.promises.readFile(
		path.join(__dirname, "additional-char-data.txt"),
		"utf-8",
	);

	let nameSuffix = "";

	for (let line of additionalDataTxt.split("\n")) {
		line = line.trim();
		if (!line || line[0] === "#") continue;
		if (line[0] === "!") {
			const [command, ...args] = line.slice(1).trim().split(";");
			switch (command) {
				case "NameSuffix": {
					nameSuffix = args[0];
					break;
				}
			}
		} else {
			const parts = line.split(";");
			const lch = parseInt(parts[0], 16);
			const name = parts[1] + nameSuffix;
			const gc = parts[2];

			lookup.overrides.set(lch, { gc, charName: name });
		}
	}

	return lookup;
}
