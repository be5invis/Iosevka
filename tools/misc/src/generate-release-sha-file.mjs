import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export default async function main(fromPaths, outPath) {
	const o = fs.createWriteStream(outPath);

	for (const filePath of fromPaths) {
		console.log(`Checking ${filePath}...`);
		o.write(`${await hashFile(filePath)}  ${path.basename(filePath)}\n`);
	}

	o.end();
}

function hashFile(filePath) {
	return new Promise((resolve, reject) => {
		const sum = crypto.createHash("sha256");
		const fileStream = fs.createReadStream(filePath);
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
