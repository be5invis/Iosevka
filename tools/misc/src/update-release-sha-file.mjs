"use strict";

import crypto from "crypto";
import fs from "fs";
import path from "path";

import { glob } from "glob";

setTimeout(
	() =>
		main().catch(e => {
			console.error(e);
			process.exit(1);
		}),
	0,
);

///////////////////////////////////////////////////////////////////////////////////////////////////

async function main() {
	const outMd = await glob("release-archives/*.md");
	if (outMd.length != 1) throw new Error("Expected exactly one .md file in release-archives");

	const o = fs.createWriteStream(outMd[0], { flags: "a" });

	o.write("\n\n## SHA256 checksums\n\n");
	o.write("<details>\n\n");
	const zipFilesToArchive = (await glob("release-archives/*.zip")).sort();
	for (const filePath of zipFilesToArchive) {
		console.log(`Checking ${filePath}...`);
		o.write(`* \`${await hashFile(filePath)}\` ${path.basename(filePath)}\n`);
	}
	o.write("</details>\n\n");

	o.end();
}

function hashFile(filePath) {
	return new Promise((resolve, reject) => {
		let sum = crypto.createHash("sha256");
		let fileStream = fs.createReadStream(filePath);
		fileStream.on("error", err => {
			return reject(err);
		});
		fileStream.on("data", chunk => {
			try {
				sum.update(chunk);
			} catch (ex) {
				return reject(ex);
			}
		});
		fileStream.on("end", () => {
			return resolve(sum.digest("hex"));
		});
	});
}
