import crypto from "crypto";
import fs from "fs";

function hashFile(path) {
	return new Promise((resolve, reject) => {
		let sum = crypto.createHash("sha256");
		let fileStream = fs.createReadStream(path);
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
export default (async function (out, archiveFiles) {
	let s = "";
	for (const file of archiveFiles) {
		s += `${file.base}\t${await hashFile(file.full)}\n`;
	}
	await fs.promises.writeFile(out, s);
});
