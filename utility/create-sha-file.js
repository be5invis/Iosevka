const fs = require("fs");
const crypto = require("crypto");

module.exports = async function (out, archiveFiles) {
	let s = "";
	for (const file of archiveFiles) {
		s += `${file.base}\t${await hashFile(file.full)}\n`;
	}
	await fs.promises.writeFile(out, s);
};

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
