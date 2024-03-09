"use strict";

import crypto from "crypto";
import fs from "fs";
import path from "path";

export default async function (out, archiveFiles) {
	const filesToAnalyze = Array.from(new Set(archiveFiles.map(f => f.full))).sort();

	let s = "";
	for (const filePath of filesToAnalyze) {
		s += `${await hashFile(filePath)}\t${path.basename(filePath)}\n`;
	}

	await fs.promises.writeFile(out, s);
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
