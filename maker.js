const fs = require("fs");
const path = require("path");
const argv = require("yargs").argv;
const pad = require("pad");

const possibleWeights = new Set(["thin", "extralight", "light", "book", "medium", "bold", "heavy"]);
const weights = argv.weights
	? argv.weights.split(/ +/g).filter(w => possibleWeights.has(w))
	: [...possibleWeights];
const slantnesses = ["upright", "italic", "oblique"];
const widths = ["term", "normal", "cc"];
const designs = ["sans", "slab"];

function present(x) {
	return !!x;
}

function tofn(a) {
	return a.filter(present).join("-");
}

function getMapping(options) {
	options = options || {
		design: [],
		width: "normal",
		weight: "book",
		slantness: "upright",
		styles: {},
		dirPrefix: "",
		dirSuffix: "",
		filePrefix: "",
		infix: "",
		fileSuffix: ""
	};
	let design = options.design || [];
	let prestyle = options.prestyle || [];
	let weight = options.weight || "book";
	let slantness = options.slantness || "upright";
	let hives = ["cyriosevka"].concat(
		prestyle,
		["w-" + weight, "s-" + slantness],
		(options.styles || {})[slantness] || [],
		design
	);
	let dir = [
		options.dirPrefix || "",
		"cyriosevka",
		options.infix || tofn(design),
		options.dirSuffix || ""
	]
		.filter(present)
		.join("-");
	let filename = [
		options.filePrefix || "",
		"cyriosevka",
		options.infix || tofn(design),
		options.fileSuffix || "",
		(weight === "book" ? (slantness === "upright" ? "regular" : "") : weight) +
			(slantness === "upright" ? "" : slantness)
	]
		.filter(present)
		.join("-");
	return { hives, dir, filename, custom: options.custom };
}

let definedBuildSeqs = {};

function createMake(mapping) {
	const { hives, dir, filename, cm, custom } = mapping;
	const tfname = `$(BUILD)/${filename}.0.otd`;
	const cmTarget = `$(BUILD)/${filename}.charmap`;

	const target = `$(DIST)/${dir}/ttf/${filename}.ttf`;
	const woffTarget = `$(DIST)/${dir}/woff/${filename}.woff`;
	const woff2Target = `$(DIST)/${dir}/woff2/${filename}.woff2`;

	let buf = "";
	if (!definedBuildSeqs[tfname]) {
		const output = `-o $@`;
		const charmapOutput = cm ? "--charmap $(BUILD)/" + filename + ".charmap" : "";
		const familyDirective = argv.family ? `--family '${argv.family}'` : "";

		buf += `
${tfname} : ${custom || ""} $(SCRIPTS) | $(BUILD) $(DIST)/${dir}/
	@echo Building ${filename}, with ${hives.join(" ")}
	$(GENERATE) ${hives.join(" ")} ${familyDirective} ${output} ${charmapOutput}
`;
		definedBuildSeqs[tfname] = true;
	}
	buf += `
${target} : ${tfname} | $(DIST)/${dir}/ttf/
	@echo Hinting and optimizing ${tfname} '->' $@
	@otfccbuild ${tfname} -o $(BUILD)/${filename}.1.ttf -O3 --keep-average-char-width
	@ttfautohint $(BUILD)/${filename}.1.ttf $@
	@rm $(BUILD)/${filename}.1.ttf
`;

	buf += `
${woffTarget} : ${target} | $(DIST)/${dir}/woff/
	sfnt2woff $<
	mv $(subst .ttf,.woff,$<) $@`;
	buf += `
${woff2Target} : ${target} | $(DIST)/${dir}/woff2/
	woff2_compress $<
	mv $(subst .ttf,.woff2,$<) $@`;

	return { buf, target, woffTarget, woff2Target, cmTarget };
}

let designGroups = [];
if (argv.custom) {
	designGroups = [
		{
			custom: "$(BUILD)/targets-" + argv.custom + ".mk",
			name: "customized-" + argv.custom,
			design: argv.design.trim().split(/ +/),
			prestyle: argv.prestyle.trim().split(/ +/),
			width: argv.width,
			infix: argv.custom,
			styles: {
				upright: argv.upright.trim().split(/ +/),
				italic: argv.italic.trim().split(/ +/),
				oblique: argv.oblique.trim().split(/ +/)
			}
		}
	];
} else {
	designGroups = [
		{ name: "sans", design: [], dirPrefix: "" },
		{ name: "slab", design: ["slab"], dirPrefix: "" },
		{ name: "r-sans", design: [], dirPrefix: "01" },
		{ name: "r-sans-term", design: ["term"], dirPrefix: "02" },
		{ name: "r-sans-type", design: ["type"], dirPrefix: "03" },
		{ name: "r-sans-cc", design: ["cc"], dirPrefix: "04" },
		{ name: "r-slab", design: ["slab"], dirPrefix: "05" },
		{ name: "r-slab-term", design: ["term", "slab"], dirPrefix: "06" },
		{ name: "r-slab-type", design: ["type", "slab"], dirPrefix: "07" },
		{ name: "r-slab-cc", design: ["cc", "slab"], dirPrefix: "08" }
	];
	for (let j = 1; j <= 11; j++) {
		const tag = "ss" + pad(2, "" + j, "0");
		designGroups.push({
			name: `r-sans-${tag}`,
			design: [tag],
			dirPrefix: ``
		});
		designGroups.push({
			name: `r-sans-term-${tag}`,
			design: ["term", tag],
			dirPrefix: ``
		});
	}
}

let makes = [];

for (let dg of designGroups) {
	let groupTargets = {
		ttf: [],
		upright: [],
		italic: [],
		oblique: [],
		woff: [],
		woff2: []
	};
	const groupMapping = getMapping(dg);
	makes.push(
		`
$(DIST)/${groupMapping.dir}/ : | $(DIST)/
	-@mkdir -p $@`
	);
	makes.push(
		`
$(DIST)/${groupMapping.dir}/ttf/ : | $(DIST)/${groupMapping.dir}/
	-@mkdir -p $@`
	);
	makes.push(
		`
$(DIST)/${groupMapping.dir}/woff/ : | $(DIST)/${groupMapping.dir}/
	-@mkdir -p $@`
	);
	makes.push(
		`
$(DIST)/${groupMapping.dir}/woff2/ : | $(DIST)/${groupMapping.dir}/
	-@mkdir -p $@`
	);
	for (let weight of weights)
		for (let slantness of slantnesses) {
			let config = Object.create(dg);
			config.weight = weight;
			config.slantness = slantness;
			const mapping = getMapping(config);
			if (weight === "book" && slantness === "upright") {
				mapping.cm = true;
			}

			let { buf, target, woffTarget, woff2Target, cmTarget } = createMake(mapping);
			makes.push(buf);
			groupTargets.ttf.push(target);
			groupTargets[slantness].push(target);
			groupTargets.woff.push(woffTarget);
			groupTargets.woff2.push(woff2Target);
		}

	makes.push(`fonts-${dg.name} : ${groupTargets.ttf.join(" ")}`);
	makes.push(`fonts-${dg.name}-upright : ${groupTargets.upright.join(" ")}`);
	makes.push(`fonts-${dg.name}-italic  : ${groupTargets.italic.join(" ")}`);
	makes.push(`fonts-${dg.name}-oblique : ${groupTargets.oblique.join(" ")}`);
	makes.push(`web-${dg.name} : ${groupTargets.woff.join(" ")} ${groupTargets.woff2.join(" ")}`);
	makes.push(
		`$(ARCHIVEDIR)/${groupMapping.dir}-$(VERSION).zip : fonts-${dg.name} web-${
			dg.name
		} | $(ARCHIVEDIR)/
	cd $(DIST)/${groupMapping.dir}/ && 7z a -tzip -r -mx=9 ../../$@ ./`
	);
	makes.push(`archive-${dg.name} : $(ARCHIVEDIR)/${groupMapping.dir}-$(VERSION).zip`);
}

if (argv.custom) {
} else {
	const ttcgroups = [
		{ groups: [designGroups[2], designGroups[3], designGroups[4], designGroups[5]] },
		{ groups: [designGroups[6], designGroups[7], designGroups[8], designGroups[9]] }
	];
	// ttc
	let ttcs = [];
	makes.push(
		`
$(DIST)/ttc/ : | $(DIST)/
	-@mkdir -p $@`
	);
	for (let tg of ttcgroups) {
		for (let weight of weights) {
			let ttctargets = [];
			for (let slantness of slantnesses) {
				for (let dg of tg.groups) {
					let config = Object.create(dg);
					config.weight = weight;
					config.slantness = slantness;
					const mapping = getMapping(config);
					ttctargets.push(createMake(mapping).target);
				}
			}
			let config = Object.create(tg.groups[0]);
			config.weight = weight;
			config.slantness = "upright";
			const mapping = getMapping(config);
			ttcs.push(`$(DIST)/ttc/${mapping.filename}.ttc`);
			makes.push(
				`
$(DIST)/ttc/${mapping.filename}.ttc : ${ttctargets.join(" ")} | $(DIST)/ttc/
	otfcc-ttcize -o $@ ${ttctargets.join(" ")}
`
			);
		}
	}

	makes.push(`ttc : ${ttcs.join(" ")}`);
	makes.push(
		`$(ARCHIVEDIR)/cyriosevka-pack-$(VERSION).zip : ttc | $(ARCHIVEDIR)/
	cd $(DIST)/ttc/ && 7z a -tzip -mx=9 ../../$@ ./*.ttc`
	);
	makes.push(`archive-ttc : $(ARCHIVEDIR)/cyriosevka-pack-$(VERSION).zip`);
	makes.push(`__default : fonts-sans fonts-slab`);
	makes.push(`__release : archive-ttc ${designGroups.map(g => "archive-" + g.name).join(" ")}`);
}

console.log(makes.join("\n\n"));
