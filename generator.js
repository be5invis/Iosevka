var fs = require("fs");
var path = require("path");

// var TTFWriter = require('node-sfnt').TTFWriter;
var argv = require("yargs").argv;
var buildGlyphs = require("./buildglyphs.js");
var parameters = require("./parameters");
var toml = require("toml");

var Glyph = require("./support/glyph");
var autoref = require("./support/autoref");

var caryllShapeOps = require("caryll-shapeops");
var c2q = require("otfcc-c2q");

function hasv(obj) {
	if (!obj) return false;
	for (var k in obj)
		if (obj[k]) return true;
	return false;
}

// Font building
var font = function () {
	var parametersData = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), "parameters.toml"), "utf-8"));
	var emptyFont = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), "emptyfont.toml"), "utf-8"));
	var para = parameters.build(parametersData, argv._);
	var fontUniqueName = para.family + " " + para.style + " " + para.version + " (" + para.codename + ")";

	console.log("    Start building font " + fontUniqueName);
	var font = buildGlyphs.build.call(emptyFont, para);
	console.log("    " + fontUniqueName + " Successfully built.");
	font.parameters = para;
	font.glyf = font.glyf.sort(function (a, b) {
		var pri1 = a.cmpPriority || 0;
		var pri2 = b.cmpPriority || 0;
		if (a.contours && b.contours && a.contours.length < b.contours.length) return 1;
		if (a.contours && b.contours && a.contours.length > b.contours.length) return (-1);
		if (a.unicode && a.unicode[0] && !b.unicode || !b.unicode[0]) return (-1);
		if (b.unicode && b.unicode[0] && !a.unicode || !a.unicode[0]) return (+1);
		if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] < b.unicode[0]) return (-1);
		if (a.unicode && a.unicode[0] && b.unicode && b.unicode[0] && a.unicode[0] > b.unicode[0]) return (+1);
		return (a.name < b.name) ? (-1) : (a.name > b.name) ? 1 : 0;
	});
	return font;
}();

if (argv.charmap) {
	(function () {
		console.log("    Writing character map -> " + argv.charmap);
		fs.writeFileSync(argv.charmap, JSON.stringify(font.glyf.map(function (glyph) {
			return [
				glyph.name,
				glyph.unicode,
				glyph.advanceWidth === 0 ? (hasv(glyph.anchors) ? 1 : (glyph.contours && glyph.contours.length) ? 2 : 0) : 0
			];
		})), "utf8");
	})();
}

if (argv.svg) {
	(function () {
		console.log("    Writing outline as SVG -> " + argv.svg);

		var foundNaN = false;
		var glyfname = "";
		function mix(a, b, p) {
			return a + (b - a) * p;
		}

		function toSVGPath(glyph) {
			var buf = "";
			foundNaN = false;
			glyfname = glyph.name;
			if (glyph.contours)
				for (var j = 0; j < glyph.contours.length; j++) {
					buf += Glyph.contourToSVGPath(glyph.contours[j], false);
			}
			return buf;
		}
		var svg = '<?xml version="1.0" encoding="utf-8"?>'
			+ '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >'
			+ '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">'
			+ '<defs><font id="' + font.name.postScriptName + '">';

		var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
		var scale = (argv.upm || 1000) / 1000;

		svg += '<font-face font-family="' + font.name.fontFamily
			+ '" font-weight="' + font.OS_2.usWeightClass
			+ '" font-stretch="normal" units-per-em="'
			+ (1000 * scale) + '"/>';

		for (var j = 0; j < font.glyf.length; j++) {
			var g = font.glyf[j];
			if (g.contours) {
				for (var k = 0; k < g.contours.length; k++) {
					var contour = g.contours[k];
					for (var p = 0; p < contour.length; p++) {
						contour[p].x += contour[p].y * skew;
						contour[p].x *= scale;
						contour[p].y *= scale;
					}
				}
				g.advanceWidth *= scale;
				Glyph.prototype.cleanup.call(g, 0.25);
			}
			var gd = "<" + (j === 0 ? "missing-glyph" : "glyph")
				+ ' glyph-name="' + g.name
				+ '" horiz-adv-x="' + g.advanceWidth + '" '
				+ (g.unicode && g.unicode.length ? 'unicode="&#x' + g.unicode[0].toString(16) + ';"' : "")
				+ ' d="' + toSVGPath(g) + '" />\n';
			svg += gd;
		}
		svg += "</font></defs></svg>";
		fs.writeFileSync(argv.svg, svg, "utf-8");
	})();
}

var StatusBar = function (message, n) {
	this.message = message;
	this.total = n;
	this.progress = 0;
	this.lastUpdate = new Date();
};
StatusBar.prototype.update = function (j) {
	var j0 = this.progress;
	var LEN = 25;
	this.progress = j;
	if (Math.round(this.progress / this.total * LEN) !== Math.round(j0 / this.total * LEN)) {
		var filled = Math.round(this.progress / this.total * LEN);
		var remain = LEN - filled;
		var pg = Array(filled + 1).join("#") + Array(remain + 1).join(" ");
		var d = new Date();
		if (!remain || d - this.lastUpdate > 500) {
			process.stderr.write("      [" + pg + "] " + this.message + "\n");
			this.lastUpdate = d;
		}
	}
};

StatusBar.each = function (message, a, f) {
	var bar = new StatusBar(message, a.length);
	a.forEach(function (x, j) {
		var r = f.apply(this, arguments);
		bar.update(j + 1);
		return r;
	});
};

if (argv.o) {
	console.log("    Writing output -> " + argv.o);
	var o_glyf = {};
	var cmap = {};
	var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
	// autoref
	autoref(font.glyf);
	// regulate
	StatusBar.each("Regulate", font.glyf, (g) => {
		if (g.contours) {
			for (var k = 0; k < g.contours.length; k++) {
				var contour = g.contours[k];
				for (var p = 0; p < contour.length; p++) {
					contour[p].x += contour[p].y * skew;
					if (contour[p].on) {
						contour[p].x = Math.round(contour[p].x);
					}
				}
				var offJ = null, mx = null;
				for (var p = 0; p < contour.length; p++) {
					if (contour[p].on) {
						if (offJ) {
							var origx = contour[p].x;
							var rx = Math.round(contour[p].x * 4) / 4;
							var origx0 = mx;
							var rx0 = contour[offJ - 1].x;
							if (origx != origx0) {
								for (var poff = offJ; poff < p; poff++) {
									contour[poff].x = (contour[poff].x - origx0) / (origx - origx0) * (rx - rx0) + rx0;
								}
							}
						}
						mx = contour[p].x;
						contour[p].x = Math.round(contour[p].x * 4) / 4;
						offJ = p + 1;
					}
				}
			}
			var c1 = [];
			for (var k = 0; k < g.contours.length; k++) {
				c1.push(Glyph.contourToStandardCubic(g.contours[k]));
			}
			g.contours = c1;
		}
	});
	StatusBar.each("Remove Overlap", font.glyf, (g) => {
		if (g.contours) {
			g.contours = caryllShapeOps.removeOverlap(g.contours, 1, 2048, true);
		}
	});
	StatusBar.each("Finalize", font.glyf, (g) => {
		if (g.contours) {
			Glyph.prototype.cleanup.call(g, 0.25);
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
	fs.writeFileSync(argv.o, JSON.stringify(font));
}

if (argv.meta) {
	(function () {
		console.log("    Writing metadata as JSON -> " + argv.meta);
		if (argv.svg) {
			font.glyf = null;
			font.glyfMap = null;
		}
		fs.writeFileSync(argv.meta, JSON.stringify(font));
	})();
}
