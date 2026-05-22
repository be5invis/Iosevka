#!/usr/bin/env bun
import { $ } from "bun";
import toml from "@iarna/toml";
import ucdNames from "@unicode/unicode-17.0.0/Names/index.js";
import cpControl from "@unicode/unicode-17.0.0/General_Category/Control/code-points.js";
import cpFormat from "@unicode/unicode-17.0.0/General_Category/Format/code-points.js";
import cpSurrogate from "@unicode/unicode-17.0.0/General_Category/Surrogate/code-points.js";
import cpPrivateUse from "@unicode/unicode-17.0.0/General_Category/Private_Use/code-points.js";
import cpUnassigned from "@unicode/unicode-17.0.0/General_Category/Unassigned/code-points.js";

const NON_PRINTABLE = new Set([
	...cpControl,
	...cpFormat,
	...cpSurrogate,
	...cpPrivateUse,
	...cpUnassigned,
]);

const PROJECTS_FILE = "tools2/collect-chars.toml";

interface Project {
	id: string;
	url: string;
	branch: string;
	dir: string;
}

function formatRow(cp: number, count: number): string {
	const ch = String.fromCodePoint(cp);
	const hex = cp.toString(16).toUpperCase().padStart(4, "0");
	const name = ucdNames.get(cp) ?? "";
	return `${ch},U+${hex},${name},${count}`;
}

async function collectChars(project: Project): Promise<Map<number, number>> {
	const { id, url, branch, dir } = project;
	const tarballUrl = `${url}/archive/refs/heads/${branch}.tar.gz`;
	const tmpDir = `.tmp/${id}`;
	const outFile = `sample-text/${id}.csv`;

	await $`rm -rf ${tmpDir}`;
	await $`mkdir -p ${tmpDir}`;

	const tarball = `${tmpDir}/archive.tar.gz`;
	console.log(`[${id}] Downloading ${tarballUrl} ...`);
	await $`curl -fL -o ${tarball} ${tarballUrl}`;
	await $`tar -xz -C ${tmpDir} -f ${tarball} --strip-components=1`;
	await $`rm ${tarball}`;

	const scanDir = `${tmpDir}/${dir}`;
	console.log(`[${id}] Collecting characters in ${scanDir} ...`);

	const glob = new Bun.Glob("**/*");
	const charCount = new Map<number, number>();

	for await (const file of glob.scan({ cwd: scanDir, onlyFiles: true })) {
		const text = await Bun.file(`${scanDir}/${file}`)
			.text()
			.catch(() => null);
		if (text == null) continue;
		for (const ch of text) {
			const cp = ch.codePointAt(0)!;
			if (NON_PRINTABLE.has(cp)) continue;
			charCount.set(cp, (charCount.get(cp) ?? 0) + 1);
		}
	}

	const sorted = [...charCount.entries()].sort((a, b) => a[0] - b[0]);
	const header = "char,codepoint,name,count";
	const lines = sorted.map(([cp, count]) => formatRow(cp, count));

	await Bun.write(outFile, [header, ...lines].join("\n") + "\n");
	console.log(`[${id}] Written ${sorted.length} characters to ${outFile}`);
	return charCount;
}

async function main() {
	const config = toml.parse(await Bun.file(PROJECTS_FILE).text()) as {
		projects: Project[];
	};

	const allCounts = new Map<number, number>();

	for (const project of config.projects) {
		const counts = await collectChars(project);
		for (const [cp, count] of counts) {
			allCounts.set(cp, (allCounts.get(cp) ?? 0) + count);
		}
	}

	const sorted = [...allCounts.entries()].sort((a, b) => a[0] - b[0]);
	const header = "char,codepoint,name,count";
	const lines = sorted.map(([cp, count]) => formatRow(cp, count));

	await Bun.write(
		"sample-text/all.csv",
		[header, ...lines].join("\n") + "\n",
	);
	console.log(
		`[all] Written ${sorted.length} characters to sample-text/all.csv`,
	);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
