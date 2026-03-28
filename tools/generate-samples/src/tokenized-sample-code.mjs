import fs from "node:fs";

import { ssStrings } from "./templates/package-sample.mjs";

export default main;

async function main(args) {
	const out = { tokens: [] };
	for (const line of ssStrings) {
		const outLine = [];
		for (const [id, token] of line.entries()) {
			if (id > 0) {
				outLine.push({ text: " ", scopes: [] });
			}
			const combined = Array.from(token).join("");
			outLine.push({ text: combined, scopes: ["dim"] });
		}
		out.tokens.push(outLine);
	}

	await fs.promises.writeFile(args.output, JSON.stringify(out, null, "  "));
}
