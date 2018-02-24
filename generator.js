var fs = require("fs");
var path = require("path");

// var TTFWriter = require('node-sfnt').TTFWriter;
var argv = require("yargs").argv;
var buildGlyphs = require("./buildglyphs.js");
var parameters = require("./support/parameters");
var toml = require("toml");

var Glyph = require("./support/glyph");
var autoref = require("./support/autoref");
const objectAssign = require("object-assign");

var caryllShapeOps = require("caryll-shapeops");
var c2q = require("megaminx").geometry.c2q;

var remapLatin = require('./remap-latin');

function hasv(obj) {
	if (!obj) return false;
	for (var k in obj) if (obj[k]) return true;
	return false;
}

function mergeVSHive(_target, source) {
	if (!source) return _target;
	let __cvmap = objectAssign({}, _target.__cvmap, source.__cvmap);
	let target = objectAssign(_target, source);
	target.__cvmap = __cvmap;
	return target;
}
function produceComposite(vs, para, dflt, g) {
	let sel = objectAssign({}, dflt);
	if (g.design)
		for (let h of g.design) {
			sel = mergeVSHive(sel, vs[h]);
		}
	if (!para.isItalic && g.upright) {
		for (let h of g.upright) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	if (para.isItalic && g.italic) {
		for (let h of g.italic) {
			sel = mergeVSHive(sel, vs[h]);
		}
	}
	sel.__isComposite = true;
	return sel;
}
function formVariantData(data, para) {
	const vs = {};
	// simple selector
	for (let k in data.simple) {
		const hive = objectAssign({}, data.simple[k]);
		const tag = hive.tag;
		delete hive.tag;
		if (tag) {
			let __cvmap = {};
			for (let k in hive) __cvmap[k] = tag;
			hive.__cvmap = __cvmap;
		}
		vs[k] = hive;
		if (tag) vs[tag] = hive;
	}
	// default selector
	vs.default = produceComposite(vs, para, {}, data.default);
	// ss## selector
	for (let k in data.composite) {
		vs[k] = produceComposite(vs, para, vs.default, data.composite[k]);
	}
	return vs;
}

// Font building
const font = (function() {
	const parametersData = Object.assign(
		{},
		toml.parse(fs.readFileSync(path.join(__dirname, "parameters.toml"), "utf-8")),
		fs.existsSync(path.join(__dirname, "private.toml"))
			? toml.parse(fs.readFileSync(path.join(__dirname, "private.toml"), "utf-8"))
			: []
	);
	const variantData = toml.parse(fs.readFileSync(path.join(__dirname, "variants.toml"), "utf-8"));
	const emptyFont = toml.parse(fs.readFileSync(path.join(__dirname, "emptyfont.toml"), "utf-8"));

	const para = parameters.build(parametersData, argv._);
	const vsdata = formVariantData(variantData, para);
	para.variants = vsdata;
	para.variantSelector = parameters.build(vsdata, argv._);
	para.defaultVariant = vsdata.default;
	if (argv.family) para.family = argv.family;
	const fontUniqueName =
		para.family + " " + para.style + " " + para.version + " (" + para.codename + ")";

	const font = buildGlyphs.build.call(emptyFont, para);

	font.parameters = para;
	font.glyf = font.glyf
		.map(function(g, j) {
			remapLatin(g);
			g.gord = j;
			return g;
		})
		.sort(function(a, b) {
			const pri1 = a.cmpPriority || 0;
			const pri2 = b.cmpPriority || 0;
			if (pri1 > pri2) return -1;
			if (pri1 < pri2) return 1;
			if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
			if (a.contours && b.contours && a.contours.length > b.contours.length) return -1;
			if (a.advanceWidth < b.advanceWidth) return -1;
			if (a.advanceWidth > b.advanceWidth) return 1;
			if ((a.unicode && a.unicode[0] && !b.unicode) || !b.unicode[0]) return -1;
			if ((b.unicode && b.unicode[0] && !a.unicode) || !a.unicode[0]) return +1;
			if (
				a.unicode &&
				a.unicode[0] &&
				b.unicode &&
				b.unicode[0] &&
				a.unicode[0] < b.unicode[0]
			)
				return -1;
			if (
				a.unicode &&
				a.unicode[0] &&
				b.unicode &&
				b.unicode[0] &&
				a.unicode[0] > b.unicode[0]
			)
				return +1;
			return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
		});
	return font;
})();

if (argv.charmap) {
	fs.writeFileSync(
		argv.charmap,
		JSON.stringify(
			font.glyf.map(function(glyph) {
				return [
					glyph.name,
					glyph.unicode,
					glyph.advanceWidth === 0
						? hasv(glyph.anchors) ? 1 : glyph.contours && glyph.contours.length ? 2 : 0
						: 0
				];
			})
		),
		"utf8"
	);
}

if (argv.o) {
	var o_glyf = {};
	var cmap = {};
	var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
	// autoref
	autoref(font.glyf);
	// regulate
	font.glyf.forEach(g => {
		if (!g.contours) return;
		for (var k = 0; k < g.contours.length; k++) {
			var contour = g.contours[k];
			for (var p = 0; p < contour.length; p++) {
				contour[p].x += contour[p].y * skew;
				if (!contour[p].on) continue;
				contour[p].x = Math.round(contour[p].x);
			}
			var offJ = null,
				mx = null;
			for (var p = 0; p < contour.length; p++) {
				if (!contour[p].on) continue;
				if (offJ) {
					var origx = contour[p].x;
					var rx = Math.round(contour[p].x * 4) / 4;
					var origx0 = mx;
					var rx0 = contour[offJ - 1].x;
					if (origx === origx0) continue;
					for (var poff = offJ; poff < p; poff++) {
						contour[poff].x =
							(contour[poff].x - origx0) / (origx - origx0) * (rx - rx0) + rx0;
					}
				}
				mx = contour[p].x;
				contour[p].x = Math.round(contour[p].x * 4) / 4;
				offJ = p + 1;
			}
		}
		var c1 = [];
		for (var k = 0; k < g.contours.length; k++) {
			c1.push(Glyph.contourToStandardCubic(g.contours[k]));
		}
		g.contours = c1;
	});
	// overlap removal
	font.glyf.forEach(g => {
		if (g.contours) {
			g.contours = caryllShapeOps.removeOverlap(g.contours, 1, 256, true);
		}
	});
	// reorder
	font.glyf = font.glyf.sort((a, b) => a.gord - b.gord);
	// finalize
	font.glyf.forEach(g => {
		if (g.contours) {
			Glyph.prototype.cleanup.call(g, 0.1);
			g.contours = c2q.contours(g.contours);
			for (var k = 0; k < g.contours.length; k++) {
				var contour = g.contours[k];
				for (var p = 0; p < contour.length; p++) {
					contour[p].x -= contour[p].y * skew;
				}
			}
		}
		o_glyf[g.name] = g;
		if (g.unicode && g.unicode.length) {
			cmap[g.unicode[0]] = g.name;
		}
	});

	font.glyf = o_glyf;
	font.cmap = cmap;
	font.glyfMap = null;
	if (argv.o === "|") {
		process.stdout.write(JSON.stringify(font));
	} else {
		fs.writeFileSync(argv.o, JSON.stringify(font));
	}
}
