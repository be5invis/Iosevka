"use strict";

import fs from "fs";
import path from "path";
import url from "url";

import semver from "semver";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const ChangeFileDir = path.join(__dirname, "../../../changes");
const PackageJsonPath = path.join(__dirname, "../../../package.json");
const PACKAGES_DIR = path.join(__dirname, "../../../packages");
const TOOLS_DIR = path.join(__dirname, "../../../tools");

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
	const version = await GetLatestVersion();
	await updateMainJsonVersion(version);

	const packages = await collectPackages();
	await updateSubPackagesVersion(packages, version);
}

async function GetLatestVersion() {
	const changeFiles = await fs.promises.readdir(ChangeFileDir);
	const versions = new Set();
	for (const file of changeFiles) {
		const filePath = path.join(ChangeFileDir, file);
		const fileParts = path.parse(filePath);
		if (fileParts.ext !== ".md") continue;
		if (!semver.valid(fileParts.name)) continue;
		versions.add(fileParts.name);
	}
	const sortedVersions = Array.from(versions).sort((a, b) => semver.compare(b, a));
	return sortedVersions[0];
}

async function updateMainJsonVersion(version) {
	const packageJson = JSON.parse(await fs.promises.readFile(PackageJsonPath));
	packageJson.version = version;
	await fs.promises.writeFile(PackageJsonPath, JSON.stringify(packageJson, null, "  ") + "\n");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

async function collectPackages() {
	const packages = new Map();
	for (const dir of [PACKAGES_DIR, TOOLS_DIR]) {
		for (const packageItem of await fs.promises.readdir(dir)) {
			const pkgPath = path.join(dir, packageItem);
			const jsonPath = path.resolve(pkgPath, "package.json");
			const stat = await fs.promises.stat(pkgPath);
			if (stat.isDirectory() && (await exists(jsonPath))) {
				const packageJson = JSON.parse(await fs.promises.readFile(jsonPath, "utf-8"));
				packages.set(packageJson.name, jsonPath);
			}
		}
	}
	return packages;
}

async function exists(fileName) {
	try {
		await fs.promises.access(fileName);
		return true;
	} catch (e) {
		return false;
	}
}

async function updateSubPackagesVersion(internalPackages, version) {
	for (const [pkgName, pkgJsonPath] of internalPackages) {
		const packageJson = JSON.parse(await fs.promises.readFile(pkgJsonPath));
		packageJson.version = version;
		if (packageJson.dependencies) {
			for (const [depName, depVersion] of Object.entries(packageJson.dependencies)) {
				if (internalPackages.has(depName)) packageJson.dependencies[depName] = version;
			}
		}
		await fs.promises.writeFile(pkgJsonPath, JSON.stringify(packageJson, null, "  ") + "\n");
	}
}
