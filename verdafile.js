const {
	want,
	rule: { task, file, variable },
	macro: { FileList },
	action: { run },
	journal,
	argv
} = require("verda");
const path = require("path");

journal("build/.verda-journal.json");
want(...argv._);

const PATEL_C = ["node", "./node_modules/patel/bin/patel-c"];
const GENERATE = ["node", "--expose-gc", "generator"];
const WEIGHTS = ["thin", "extralight", "light", "book", "medium", "bold", "extrabold", "heavy"];
const SLANTS = ["upright", "italic", "oblique"];

const weightSlantMap = (function() {
	let o = {};
	for (const w of WEIGHTS) {
		for (const s of SLANTS) {
			const suffix =
				(w === "book" ? (s === "upright" ? "regular" : "") : w) +
				(s === "upright" ? "" : s);
			o[suffix] = { weight: w, slant: s };
		}
	}
	return o;
})();

//////////////////////////
////// Font building
//////////////////////////

file("build/iosevka-*-*.otd").def(async (target, width, suffix) => {
	const { weight, slant } = weightSlantMap[suffix];
	await target.need("scripts", "dir:build", "parameters.toml");
	await run(GENERATE, "iosevka", width, `w-${weight}`, `s-${slant}`, "-o", target);
});
file("build/iosevka-*-*.ttf").def(async (target, width, suffix) => {
	const [otd] = await target.need(`build/iosevka-${width}-${suffix}.otd`);
	await run("otfccbuild", otd.path, "-o", target);
});
task("default").def(async target => {
	await target.need(
		Object.keys(weightSlantMap).map(suffix => `build/iosevka-normal-${suffix}.ttf`)
	);
});

//////////////////////////
////// Script building
//////////////////////////

variable("files:PTL").def(
	FileList({
		under: ".",
		pattern: "*.ptl|glyphs/**/*.ptl|support/**/*.ptl|meta/**/*.ptl"
	})
);

variable("files:JS").def(
	FileList({
		under: ".",
		pattern: "*.js|glyphs/**/*.js|support/**/*.js|meta/**/*.js"
	})
);

variable("files:JS_FROM_PTL").def(async target => {
	const [ptl] = await target.need("files:PTL");
	return target.trackModification(ptl.map(x => x.replace(/\.ptl$/g, ".js")));
});

file("*.js|glyphs/**/*.js|support/**/*.js|meta/**/*.js").def(async target => {
	const [jsFromPtl] = await target.need("files:JS_FROM_PTL");
	if (jsFromPtl.indexOf(target.id) >= 0) {
		const ptl = target.id.replace(/\.js$/g, ".ptl");
		await target.need(`file-updated:${ptl}`);
		await run(PATEL_C, "--optimize", "--strict", ptl, "-o", target.id);
	} else {
		await target.need(`file-updated:${target.id}`);
	}
});
task("scripts").def(async target => {
	const [jsFromPtl] = await target.need("files:JS_FROM_PTL");
	await target.need(jsFromPtl);
	const [js] = await target.need("files:JS");
	await target.need(js);
});

task("wrong").def(async target => {
	throw new Error("Wrong!");
});
