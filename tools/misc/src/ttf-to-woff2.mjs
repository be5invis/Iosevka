"use strict";

import fs from "fs";

import * as wawoff from "wawoff2";

export default async function (from, to) {
	const input = await fs.promises.readFile(from);
	const out = await wawoff.compress(input);
	await fs.promises.writeFile(to, out);
}
