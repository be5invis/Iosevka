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
	const sourcesPattern = process.argv[2];
	const outPath = process.argv[3];

	const o = fs.createWriteStream(outPath);

	const zipFilesToArchive = (await glob(sourcesPattern)).sort();
	for (const filePath of zipFilesToArchive) {
		console.log(`Checking ${filePath}...`);
		o.write(`${await hashFile(filePath)}\t${path.basename(filePath)}\n`);
	}

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
