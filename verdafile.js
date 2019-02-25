"use strict";

const build = require("verda").create();
const { task, file, oracle, phony } = build.ruleTypes;
const { de, fu } = build.rules;
const { run, node, cd, cp, rm } = build.actions;
const { FileList } = build.predefinedFuncs;
module.exports = build;

///////////////////////////////////////////////////////////

const fs = require("fs");
const path = require("path");
const toml = require("toml");

const BUILD = "build";
const DIST = "dist";
const ARCHIVE_DIR = "release-archives";

const PATEL_C = ["node", "./node_modules/patel/bin/patel-c"];
const GENERATE = ["node", "gen/generator"];
const webfontFormats = [["woff2", "woff2"], ["woff", "woff"], ["ttf", "truetype"]];

const BUILD_PLANS = path.resolve(__dirname, "./build-plans.toml");
const PRIVATE_BUILD_PLANS = path.resolve(__dirname, "./private-build-plans.toml");

// Save journal to build/
build.setJournal(`${BUILD}/.verda-journal`);
build.setSelfTracking();

///////////////////////////////////////////////////////////
//////                   Oracles                     //////
///////////////////////////////////////////////////////////

const o_version = oracle.plain(`version`, async () => {
	const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
	return package_json.version;
});

const o_rawPlans = oracle.plain(`raw-plans`, async target => {
	await target.need(BUILD_PLANS);
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		await target.need(PRIVATE_BUILD_PLANS);
	}

	const t = toml.parse(fs.readFileSync(BUILD_PLANS, "utf-8"));
	if (fs.existsSync(PRIVATE_BUILD_PLANS)) {
		Object.assign(
			t.buildPlans,
			toml.parse(fs.readFileSync(PRIVATE_BUILD_PLANS, "utf-8")).buildPlans
		);
	}
	for (const prefix in t.buildPlans) {
		const plan = t.buildPlans[prefix];
		plan.prefix = prefix;

		// Style groups
		if (!plan.pre) plan.pre = {};
		if (!plan.post) plan.post = {};
		if (!plan.pre.design) plan.pre.design = plan.design || [];
		if (!plan.pre.upright) plan.pre.upright = plan.upright || [];
		if (!plan.pre.italic) plan.pre.italic = plan.italic || [];
		if (!plan.pre.oblique) plan.pre.oblique = plan.oblique || [];
		if (!plan.post.design) plan.post.design = [];
		if (!plan.post.upright) plan.post.upright = [];
		if (!plan.post.italic) plan.post.italic = [];
		if (!plan.post.oblique) plan.post.oblique = [];
	}
	for (const prefix in t.collectPlans) {
		t.collectPlans[prefix].prefix = prefix;
	}
	return t;
});

const o_buildPlans = oracle.plain("build-plans", async target => {
	const [rp] = await target.need(o_rawPlans);
	return rp.buildPlans;
});
const o_exportPlans = oracle.plain("export-plans", async target => {
	const [rp] = await target.need(o_rawPlans);
	return rp.exportPlans;
});
const o_rawCollectPlans = oracle.plain("raw-collect-plans", async target => {
	const [rp] = await target.need(o_rawPlans);
	return rp.collectPlans;
});
const o_weights = oracle.plain("weights", async target => {
	const [rp] = await target.need(o_rawPlans);
	return rp.weights;
});
const o_slants = oracle.plain("slants", async target => {
	const [rp] = await target.need(o_rawPlans);
	return rp.slants;
});

function getSuffixSet(weights, slants) {
	const mapping = {};
	for (const w in weights) {
		for (const s in slants) {
			const suffix =
				(w === "regular" ? (s === "upright" ? "regular" : "") : w) +
				(s === "upright" ? "" : s);
			mapping[suffix] = {
				hives: [`w-${weights[w].shape}`, `s-${s}`],
				weight: w,
				cssWeight: weights[w].css || w,
				menuWeight: weights[w].menu || weights[w].css || w,
				slant: s,
				cssStyle: slants[s] || s,
				menuStyle: slants[s] || s
			};
		}
	}
	return mapping;
}

const o_suffixes = oracle.plain(`suffixes`, async target => {
	const [weights, slants] = await target.need(o_weights, o_slants);
	return getSuffixSet(weights, slants);
});

const o_fontBuildingParameters = oracle.plain(`font-building-parameters`, async target => {
	const [buildPlans, defaultWeights, defaultSlants] = await target.need(
		o_buildPlans,
		o_weights,
		o_slants
	);
	const fontInfos = {};
	const bp = {};
	for (const p in buildPlans) {
		const { pre, post, prefix, family, weights, slants } = buildPlans[p];
		const targets = [];
		const suffixMapping = getSuffixSet(weights || defaultWeights, slants || defaultSlants);
		for (const suffix in suffixMapping) {
			if (weights && !weights[suffixMapping[suffix].weight]) continue;
			if (slants && !slants[suffixMapping[suffix].slant]) continue;
			const fileName = [prefix, suffix].join("-");
			const preHives = [...pre.design, ...pre[suffixMapping[suffix].slant]];
			const postHives = [...post.design, ...post[suffixMapping[suffix].slant]];
			fontInfos[fileName] = {
				name: fileName,
				family,
				hives: ["iosevka", ...preHives, ...suffixMapping[suffix].hives, ...postHives],
				menuWeight: suffixMapping[suffix].menuWeight,
				menuStyle: suffixMapping[suffix].menuStyle,
				cssWeight: suffixMapping[suffix].cssWeight,
				cssStyle: suffixMapping[suffix].cssStyle
			};
			targets.push(fileName);
		}
		bp[prefix] = {
			family,
			prefix,
			targets
		};
	}
	return { fontInfos, buildPlans: bp };
});

const o_collectPlans = oracle.plain(`collect-plans`, async target => {
	const [rawCollectPlans, suffixMapping] = await target.need(o_rawCollectPlans, o_suffixes);
	const composition = {},
		groups = {};
	for (const gid in rawCollectPlans) {
		groups[gid] = [];
		const collect = rawCollectPlans[gid];
		for (const suffix in suffixMapping) {
			const fileName = `${collect.prefix}-${suffix}`;
			composition[fileName] = [];
			for (const prefix of collect.from) {
				composition[fileName].push({
					dir: prefix,
					file: `${prefix}-${suffix}`
				});
			}
			groups[gid].push(fileName);
		}
	}
	return { composition, groups };
});

oracle("hives-of:***", async (target, gid) => {
	const [{ fontInfos }] = await target.need(o_fontBuildingParameters);
	return fontInfos[gid];
});

oracle("group-info:***", async (target, gid) => {
	const [{ buildPlans }] = await target.need(o_fontBuildingParameters);
	return buildPlans[gid];
});

oracle("group-fonts-of:***", async (target, gid) => {
	const [plan] = await target.need(`group-info:${gid}`);
	return plan.targets;
});

oracle("collection-parts-of:*", async (target, id) => {
	const [{ composition }] = await target.need(o_collectPlans);
	return composition[id];
});

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

file(`${BUILD}/*/*.ttf`, async (target, path) => {
	const [, suffix] = path.$;
	const [{ hives, family, menuWeight, menuStyle }, version] = await target.need(
		`hives-of:${suffix}`,
		o_version
	);
	const otd = path.dir + "/" + path.name + ".otd";
	const charmap = path.dir + "/" + path.name + ".charmap";
	await target.need("scripts", "parameters.toml", de`${path.dir}`);
	await run(
		GENERATE,
		["-o", otd],
		["--charmap", charmap],
		["--family", family],
		["--ver", version],
		["--menu-weight", menuWeight],
		["--menu-slant", menuStyle],
		hives
	);
	await run("otfccbuild", otd, "-o", path.full, "-O3", "--keep-average-char-width");
	await rm(otd);
});

const buildCM = file(`${BUILD}/*/*.charmap`, async (target, path) => {
	await target.need(path.dir + "/" + path.name + ".ttf");
});

///////////////////////////////////////////////////////////
//////              Font Distribution                //////
///////////////////////////////////////////////////////////

// Per group file
file(`${DIST}/*/ttf-unhinted/*.ttf`, async (target, path) => {
	const [gr, f] = path.$;
	const [from] = await target.need(`${BUILD}/${gr}/${f}.ttf`, de`${path.dir}`);
	await cp(from.full, path.full);
});
file(`${DIST}/*/ttf/*.ttf`, async (target, path) => {
	const [group, f] = path.$;
	const [from] = await target.need(`${DIST}/${group}/ttf-unhinted/${f}.ttf`, de`${path.dir}`);
	await run("ttfautohint", from.full, path.full);
});
file(`${DIST}/*/woff/*.woff`, async (target, path) => {
	const [group, f] = path.$;
	const [from] = await target.need(`${DIST}/${group}/ttf/${f}.ttf`, de`${path.dir}`);
	await node(`utility/ttf-to-woff.js`, from.full, path.full);
});
file(`${DIST}/*/woff2/*.woff2`, async (target, path) => {
	const [group, f] = path.$;
	const [from] = await target.need(`${DIST}/${group}/ttf/${f}.ttf`, de`${path.dir}`);
	await node(`utility/ttf-to-woff2.js`, from.full, path.full);
});

// TTC
file(`${DIST}/collections/*/*.ttc`, async (target, { full, dir, $: [, f] }) => {
	const [parts] = await target.need(`collection-parts-of:${f}`);
	await target.need(de`${dir}`);
	const [ttfs] = await target.need(parts.map(part => `${DIST}/${part.dir}/ttf/${part.file}.ttf`));
	await run(`otfcc-ttcize`, ttfs.map(p => p.full), "-o", full);
});

// Group-level
task("ttf:***", async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/ttf/${tn}.ttf`));
});
task("ttf-unhinted:***", async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/ttf-unhinted/${tn}.ttf`));
});
task("woff:***", async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/woff/${tn}.woff`));
});
task("woff2:***", async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/woff2/${tn}.woff2`));
});
task("fonts:***", async (target, gid) => {
	await target.need(`ttf:${gid}`, `ttf-unhinted:${gid}`, `woff:${gid}`, `woff2:${gid}`);
});

// Charmap (for specimen)
file(`${DIST}/*/*.charmap`, async (target, { full, dir, $: [gid, suffix] }) => {
	const [src] = await target.need(buildCM`${BUILD}/${gid}/${suffix}.charmap`, de`${dir}`);
	await cp(src.full, full);
});

// Webfont CSS
file(`${DIST}/*/webfont.css`, async (target, { dir, $: [gid] }) => {
	// Note: this target does NOT depend on the font files.
	const [gr, ts] = await target.need(`group-info:${gid}`, `group-fonts-of:${gid}`, de`${dir}`);
	const hs = await target.need(...ts.map(t => `hives-of:${t}`));
	await node(
		"utility/make-webfont-css.js",
		`${DIST}/${gid}/webfont.css`,
		gr.family,
		hs,
		webfontFormats
	);
});

task("contents:***", async (target, gid) => {
	const [gr] = await target.need(`group-info:${gid}`);
	await target.need(
		`fonts:${gid}`,
		`${DIST}/${gid}/webfont.css`,
		`${DIST}/${gid}/${gr.prefix}-regular.charmap`
	);
	return gid;
});

// Archive
task(`${ARCHIVE_DIR}/*-*.zip`, async (target, { dir, full, $: [gid] }) => {
	// Note: this target does NOT depend on the font files.
	const [exportPlans] = await target.need(o_exportPlans, de`${dir}`);
	await target.need(`contents:${exportPlans[gid]}`);
	await cd(`${DIST}/${exportPlans[gid]}`).run(
		["7z", "a"],
		["-tzip", "-r", "-mx=9"],
		`../../${full}`,
		`./`
	);
});
task(`archive:***`, async (target, gid) => {
	const [version] = await target.need(`o:version`);
	await target.need(`${ARCHIVE_DIR}/${gid}-${version}.zip`);
});

// Collection-level
task("collection-fonts:***", async (target, { $: [cid] }) => {
	const [{ groups }] = await target.need(o_collectPlans);
	await target.need(groups[cid].map(file => `${DIST}/collections/${cid}/${file}.ttc`));
});
task(`${ARCHIVE_DIR}/ttc-*-*.zip`, async (target, { dir, full, $: [cid] }) => {
	// Note: this target does NOT depend on the font files.
	await target.need(de`${dir}`);
	await target.need(`collection-fonts:${cid}`);
	await cd(`${DIST}/collections/${cid}`).run(
		["7z", "a"],
		["-tzip", "-r", "-mx=9"],
		`../../../${full}`,
		`./`
	);
});
task(`collection-archive:***`, async (target, cid) => {
	const [version] = await target.need(`o:version`);
	await target.need(`${ARCHIVE_DIR}/ttc-${cid}-${version}.zip`);
});

///////////////////////////////////////////////////////////
//////                  Root Tasks                   //////
///////////////////////////////////////////////////////////

task(`pages`, async target => {
	const [sans, slab] = await target.need(`contents:iosevka`, `contents:iosevka-slab`);
	await cp(`${DIST}/${sans}`, `pages/${sans}`);
	await cp(`${DIST}/${slab}`, `pages/${slab}`);
});

task(`sample-images:pre`, async target => {
	const [sans, slab] = await target.need(`contents:iosevka`, `contents:iosevka-slab`);
	await cp(`${DIST}/${sans}`, `snapshot/${sans}`);
	await cp(`${DIST}/${slab}`, `snapshot/${slab}`);
});
file(`snapshot/index.css`, async target => {
	await target.need(`snapshot/index.styl`);
	await cd(`snapshot`).run(`stylus`, `index.styl`, `-c`);
});
task(`sample-images:take`, async target => {
	await target.need(`sample-images:pre`, `snapshot/index.css`);
	await cd(`snapshot`).run("npx", "electron", "get-snap.js", ["--dir", "../images"]);
});
file(`images/*.png`, async (target, { full }) => {
	await target.need(`sample-images:take`);
	await run("optipng", full);
});
task(`sample-images`, async target => {
	await target.need(`sample-images:take`);
	await target.need(
		`images/charvars.png`,
		`images/download-options.png`,
		`images/family.png`,
		`images/languages.png`,
		`images/ligations.png`,
		`images/matrix.png`,
		`images/preview-all.png`,
		`images/stylesets.png`,
		`images/variants.png`,
		`images/weights.png`
	);
});

task(`all:archives`, async target => {
	const [exportPlans, collectPlans] = await target.need(o_exportPlans, o_collectPlans);
	await target.need(
		Object.keys(exportPlans).map(gid => `archive:${gid}`),
		Object.keys(collectPlans.groups).map(cid => `collection-archive:${cid}`)
	);
});

phony(`clean`, async () => {
	await rm(`build`);
	await rm(`dist`);
	await rm(`release-archives`);
});
phony(`release`, async target => {
	await target.need(`all:archives`, `sample-images`, `pages`);
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

const MARCOS = [fu`meta/macros.ptl`];
oracle("{ptl|js}-scripts-under::***", (target, $ext, $1) =>
	FileList({ under: $1, pattern: `**/*.${$ext}` })(target)
);
const o_scripts = oracle.prefix("scripts", async (target, ext) => {
	const [gen, meta, glyphs, support] = await target.need(
		`${ext}-scripts-under::gen`,
		`${ext}-scripts-under::meta`,
		`${ext}-scripts-under::glyphs`,
		`${ext}-scripts-under::support`
	);
	return [...gen, ...meta, ...glyphs, ...support];
});
const o_jsonFromPtl = oracle.plain("scripts-js-from-ptl", async target => {
	const [ptl] = await target.need(o_scripts`ptl`);
	return ptl.map(x => x.replace(/\.ptl$/g, ".js"));
});

file(`{gen|glyphs|support|meta}/**/*.js`, async (target, path) => {
	const [jsFromPtl] = await target.need(o_jsonFromPtl);
	if (jsFromPtl.indexOf(path.full) >= 0) {
		const ptl = path.full.replace(/\.js$/g, ".ptl");
		if (/^glyphs\//.test(path.full)) {
			await target.need(MARCOS);
		}
		await target.need(fu`${ptl}`);
		await run(PATEL_C, "--strict", ptl, "-o", path.full);
	} else {
		await target.need(fu`${path.full}`);
	}
});
task("scripts", async target => {
	const [jsFromPtl] = await target.need(o_jsonFromPtl);
	await target.need(jsFromPtl);
	const [js] = await target.need(o_scripts`js`);
	await target.need(js);
	await target.need(fu`parameters.toml`, fu`variants.toml`, fu`emptyfont.toml`);
});
