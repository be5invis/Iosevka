"use strict";
const {
	want,
	rule: { task, file, oracle, phony },
	macro: { FileList },
	action: { run, node, cd, cp, rm },
	journal,
	argv
} = require("verda");
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
journal(`${BUILD}/.verda-journal`);
want(...argv._);

///////////////////////////////////////////////////////////
//////                   Oracles                     //////
///////////////////////////////////////////////////////////

oracle(`o:version`).def(async () => {
	const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));
	return package_json.version;
});

oracle(`o:raw-plans`).def(async () => {
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

oracle("o:build-plans").def(async target => {
	const [rp] = await target.need(`o:raw-plans`);
	return rp.buildPlans;
});
oracle("o:export-plans").def(async target => {
	const [rp] = await target.need(`o:raw-plans`);
	return rp.exportPlans;
});
oracle("o:raw-collect-plans").def(async target => {
	const [rp] = await target.need(`o:raw-plans`);
	return rp.collectPlans;
});
oracle("o:weights").def(async target => {
	const [rp] = await target.need(`o:raw-plans`);
	return rp.weights;
});
oracle("o:slants").def(async target => {
	const [rp] = await target.need(`o:raw-plans`);
	return rp.slants;
});

oracle(`o:suffixes`).def(async target => {
	const [weights, slants] = await target.need(`o:weights`, `o:slants`);
	const mapping = {};
	for (const w in weights) {
		for (const s in slants) {
			const suffix =
				(w === "regular" ? (s === "upright" ? "regular" : "") : w) +
				(s === "upright" ? "" : s);
			mapping[suffix] = {
				hives: [`w-${weights[w].shape}`, `s-${s}`],
				weight: w,
				slant: s,
				cssWeight: weights[w].css,
				cssStyle: slants[s]
			};
		}
	}
	return mapping;
});

oracle(`o:font-building-parameters`).def(async target => {
	const [buildPlans, suffixMapping] = await target.need(`o:build-plans`, `o:suffixes`);
	const fontInfos = {};
	const bp = {};
	for (const p in buildPlans) {
		const { pre, post, prefix, family, weights, slants } = buildPlans[p];
		const targets = [];
		for (const suffix in suffixMapping) {
			if (weights && !weights.includes(suffixMapping[suffix].weight)) continue;
			if (slants && !slants.includes(suffixMapping[suffix].slant)) continue;
			const fileName = [prefix, suffix].join("-");
			const preHives = [...pre.design, ...pre[suffixMapping[suffix].slant]];
			const postHives = [...post.design, ...post[suffixMapping[suffix].slant]];
			fontInfos[fileName] = {
				name: fileName,
				family,
				hives: ["iosevka", ...preHives, ...suffixMapping[suffix].hives, ...postHives],
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

oracle(`o:collect-plans`).def(async target => {
	const [rawCollectPlans, suffixMapping] = await target.need(`o:raw-collect-plans`, `o:suffixes`);
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

oracle("hives-of:***").def(async (target, gid) => {
	const [{ fontInfos }] = await target.need("o:font-building-parameters");
	return fontInfos[gid];
});

oracle("group-info:***").def(async (target, gid) => {
	const [{ buildPlans }] = await target.need("o:font-building-parameters");
	return buildPlans[gid];
});

oracle("group-fonts-of:***").def(async (target, gid) => {
	const [plan] = await target.need(`group-info:${gid}`);
	return plan.targets;
});

oracle("collection-parts-of:*").def(async (target, id) => {
	const [{ composition }] = await target.need("o:collect-plans");
	return composition[id];
});

///////////////////////////////////////////////////////////
//////                Font Building                  //////
///////////////////////////////////////////////////////////

file(`${BUILD}/*/*.ttf`).def(async (target, prefix, suffix) => {
	const [{ hives, family, cssWeight, cssStyle }, version] = await target.need(
		`hives-of:${suffix}`,
		`o:version`
	);
	const otd = target.path.dir + "/" + target.path.name + ".otd";
	const charmap = target.path.dir + "/" + target.path.name + ".charmap";
	await target.need("scripts", "parameters.toml", `dir:${target.path.dir}`);
	await run(
		GENERATE,
		["-o", otd],
		["--charmap", charmap],
		["--family", family],
		["--ver", version],
		["--weight", cssWeight],
		["--slant", cssStyle],
		hives
	);
	await run("otfccbuild", otd, "-o", target.path.full, "-O3", "--keep-average-char-width");
	await rm(otd);
});

file(`${BUILD}/*/*.charmap`).def(async target => {
	await target.need(target.path.dir + "/" + target.path.name + ".ttf");
});

///////////////////////////////////////////////////////////
//////              Font Distribution                //////
///////////////////////////////////////////////////////////

// Per group file
file(`${DIST}/*/ttf-unhinted/*.ttf`).def(async (target, dir, file) => {
	const [from] = await target.need(`${BUILD}/${dir}/${file}.ttf`, `dir:${target.path.dir}`);
	await cp(from.full, target.path.full);
});
file(`${DIST}/*/ttf/*.ttf`).def(async (target, dir, file) => {
	const [from] = await target.need(
		`${DIST}/${dir}/ttf-unhinted/${file}.ttf`,
		`dir:${target.path.dir}`
	);
	await run("ttfautohint", "-c", from.full, target.path.full);
});
file(`${DIST}/*/woff/*.woff`).def(async (target, dir, file) => {
	const [from] = await target.need(`${DIST}/${dir}/ttf/${file}.ttf`, `dir:${target.path.dir}`);
	await node(`utility/ttf-to-woff.js`, from.full, target.path.full);
});
file(`${DIST}/*/woff2/*.woff2`).def(async (target, dir, file) => {
	const [from] = await target.need(`${DIST}/${dir}/ttf/${file}.ttf`, `dir:${target.path.dir}`);
	await node(`utility/ttf-to-woff2.js`, from.full, target.path.full);
});

// TTC
file(`${DIST}/collections/*/*.ttc`).def(async (target, cid, fileName) => {
	const [parts] = await target.need(`collection-parts-of:${fileName}`);
	await target.need(`dir:${target.path.dir}`);
	const [ttfs] = await target.need(parts.map(part => `${DIST}/${part.dir}/ttf/${part.file}.ttf`));
	await run(`otfcc-ttcize`, ttfs.map(p => p.full), "-o", target.path.full);
});

// Group-level
task("ttf:***").def(async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/ttf/${tn}.ttf`));
});
task("ttf-unhinted:***").def(async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/ttf-unhinted/${tn}.ttf`));
});
task("woff:***").def(async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/woff/${tn}.woff`));
});
task("woff2:***").def(async (target, gid) => {
	const [ts] = await target.need(`group-fonts-of:${gid}`);
	await target.need(ts.map(tn => `${DIST}/${gid}/woff2/${tn}.woff2`));
});
task("fonts:***").def(async (target, gid) => {
	await target.need(`ttf:${gid}`, `ttf-unhinted:${gid}`, `woff:${gid}`, `woff2:${gid}`);
});

// Charmap (for specimen)
file(`${DIST}/*/*.charmap`).def(async (target, gid, suffix) => {
	const [src] = await target.need(`${BUILD}/${gid}/${suffix}.charmap`, `dir:${target.path.dir}`);
	await cp(src.full, target.path.full);
});

// Webfont CSS
file(`${DIST}/*/webfont.css`).def(async (target, gid) => {
	// Note: this target does NOT depend on the font files.
	const [gr, ts] = await target.need(
		`group-info:${gid}`,
		`group-fonts-of:${gid}`,
		`dir:${target.path.dir}`
	);
	const hs = await target.need(...ts.map(t => `hives-of:${t}`));
	await node(
		"utility/make-webfont-css.js",
		`${DIST}/${gid}/webfont.css`,
		gr.family,
		hs,
		webfontFormats
	);
});

task("contents:***").def(async (target, gid) => {
	const [gr] = await target.need(`group-info:${gid}`);
	await target.need(
		`fonts:${gid}`,
		`${DIST}/${gid}/webfont.css`,
		`${DIST}/${gid}/${gr.prefix}-regular.charmap`
	);
	return gid;
});

// Archive
task(`${ARCHIVE_DIR}/*-*.zip`).def(async (target, gid) => {
	// Note: this target does NOT depend on the font files.
	const [exportPlans] = await target.need(`o:export-plans`, `dir:${target.path.dir}`);
	await target.need(`contents:${exportPlans[gid]}`);
	await cd(`${DIST}/${exportPlans[gid]}`).run(
		["7z", "a"],
		["-tzip", "-r", "-mx=9"],
		`../../${target.path.full}`,
		`./`
	);
});
task(`archive:***`).def(async (target, gid) => {
	const [version] = await target.need(`o:version`);
	await target.need(`${ARCHIVE_DIR}/${gid}-${version}.zip`);
});

// Collection-level
task("collection-fonts:***").def(async (target, cid) => {
	const [{ groups }] = await target.need("o:collect-plans");
	await target.need(groups[cid].map(file => `${DIST}/collections/${cid}/${file}.ttc`));
});
task(`${ARCHIVE_DIR}/ttc-*-*.zip`).def(async (target, cid) => {
	// Note: this target does NOT depend on the font files.
	await target.need(`dir:${target.path.dir}`);
	await target.need(`collection-fonts:${cid}`);
	await cd(`${DIST}/collections/${cid}`).run(
		["7z", "a"],
		["-tzip", "-r", "-mx=9"],
		`../../../${target.path.full}`,
		`./`
	);
});
task(`collection-archive:***`).def(async (target, cid) => {
	const [version] = await target.need(`o:version`);
	await target.need(`${ARCHIVE_DIR}/ttc-${cid}-${version}.zip`);
});

///////////////////////////////////////////////////////////
//////                  Root Tasks                   //////
///////////////////////////////////////////////////////////

task(`pages`).def(async target => {
	const [sans, slab] = await target.need(`contents:iosevka`, `contents:iosevka-slab`);
	await cp(`${DIST}/${sans}`, `pages/${sans}`);
	await cp(`${DIST}/${slab}`, `pages/${slab}`);
});

task(`sample-images:pre`).def(async target => {
	const [sans, slab] = await target.need(`contents:iosevka`, `contents:iosevka-slab`);
	await cp(`${DIST}/${sans}`, `snapshot/${sans}`);
	await cp(`${DIST}/${slab}`, `snapshot/${slab}`);
});
file(`snapshot/index.css`).def(async target => {
	await target.need(`snapshot/index.styl`);
	await cd(`snapshot`).run(`stylus`, `index.styl`, `-c`);
});
task(`sample-images:take`).def(async target => {
	await target.need(`sample-images:pre`, `snapshot/index.css`);
	await cd(`snapshot`).run("npx", "electron", "get-snap.js", ["--dir", "../images"]);
});
file(`images/*.png`).def(async target => {
	await target.need(`sample-images:take`);
	await run("optipng", target.path.full);
});
task(`sample-images`).def(async target => {
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

task(`all:archives`).def(async target => {
	const [exportPlans, collectPlans] = await target.need("o:export-plans", "o:collect-plans");
	await target.need(
		Object.keys(exportPlans).map(gid => `archive:${gid}`),
		Object.keys(collectPlans.groups).map(cid => `collection-archive:${cid}`)
	);
});

phony(`clean`).def(async () => {
	await rm(`build`);
	await rm(`dist`);
	await rm(`release-archives`);
});
phony(`release`).def(async target => {
	await target.need(`all:archives`, `sample-images`, `pages`);
});

///////////////////////////////////////////////////////////
//////               Script Building                 //////
///////////////////////////////////////////////////////////

oracle("{ptl|js}-scripts-under:***").def((target, $ext, $1) =>
	FileList({ under: $1, pattern: `**/*.${$ext}` })(target)
);
oracle("scripts:{ptl|js}").def(async (target, ext) => {
	const [gen, meta, glyphs, support] = await target.need(
		`${ext}-scripts-under:gen`,
		`${ext}-scripts-under:meta`,
		`${ext}-scripts-under:glyphs`,
		`${ext}-scripts-under:support`
	);
	return [...gen, ...meta, ...glyphs, ...support];
});
oracle("scripts:js-from-ptl").def(async target => {
	const [ptl] = await target.need("scripts:ptl");
	return target.trackModification(ptl.map(x => x.replace(/\.ptl$/g, ".js")));
});

file(`{gen|glyphs|support|meta}/**/*.js`).def(async target => {
	const [jsFromPtl] = await target.need("scripts:js-from-ptl");
	if (jsFromPtl.indexOf(target.path.full) >= 0) {
		const ptl = target.path.full.replace(/\.js$/g, ".ptl");
		await target.need(`file-updated:${ptl}`);
		await run(PATEL_C, "--optimize", "--strict", ptl, "-o", target.path.full);
	} else {
		await target.need(`file-updated:${target.path.full}`);
	}
});
task("scripts").def(async target => {
	const [jsFromPtl] = await target.need("scripts:js-from-ptl");
	await target.need(jsFromPtl);
	const [js] = await target.need("scripts:js");
	await target.need(js);
	await target.need(`parameters.toml`, `variants.toml`, `emptyfont.toml`);
});
