import fs from "fs";

export default main;
async function main(argv) {
	let readme = await fs.promises.readFile(argv.path, "utf-8");
	const currentYear = String(new Date().getFullYear());
	readme = readme.replace(/Copyright \(c\) \d{4}-\d{4}/, `Copyright (c) 2015-${currentYear}`);
	await fs.promises.writeFile(argv.path, readme);
}
