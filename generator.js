var fs = require('fs');
var path = require('path');

var TTFWriter = require('node-sfnt').TTFWriter;
var argv = require('yargs').argv;
var buildGlyphs = require('./buildglyphs.js');
var parameters = require('./parameters');
var toml = require('toml');

var Glyph = require('./support/glyph');

function hasv(obj) {
	if (!obj) return false;
	for (var k in obj) if (obj[k]) return true;
	return false;
}

// Font building
var font = function() {
	var parametersData = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8'));
	var emptyFont = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'emptyfont.toml'), 'utf-8'));
	var para = parameters.build(parametersData, argv._);
	var fontUniqueName = para.family + ' ' + para.style + ' ' + para.version + ' (' + para.codename + ')'

	console.log('    Start building font ' + fontUniqueName);
	var font = buildGlyphs.build.call(emptyFont, para);
	console.log('    ' + fontUniqueName + " Successfully built.");
	font.features.sscompose = para.sscompose;
	font.parameters = para;
	return font;
} ();

if (argv.charmap) (function() {
	console.log('    Writing character map -> ' + argv.charmap);
	fs.writeFileSync(argv.charmap, JSON.stringify(font.glyf.map(function(glyph) {
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 ? hasv(glyph.anchors) ? 1 : (glyph.contours && glyph.contours.length) ? 2 : 0 : 0
		]
	})), 'utf8')
})();

if (argv.feature) (function() {
	console.log('    Writing feature file -> ' + argv.feature);
	var featurefile = '\n\n';
	// markGlyphs
	for (var feature in font.features.cv) {
		var base = [], replace = [];
		for (var key in font.features.cv[feature]) {
			base.push(key);
			replace.push(font.features.cv[feature][key]);
		};
		var lookupName = feature + 'Auto';
		featurefile += 'lookup ' + lookupName + ' { sub [' + base.join(' ') + '] by [' + replace.join(' ') + '];} ' + lookupName + ';\n\n';
		featurefile += 'feature ' + feature + ' { script latn; lookup ' + lookupName + '; script grek; lookup ' + lookupName + '; script cyrl; lookup ' + lookupName + '; script DFLT; lookup ' + lookupName + '; } ' + feature + ';\n\n';
	}
	for (var feature in font.features.sscompose) {
		var stmt = font.features.sscompose[feature].map(function(lookup) { return 'lookup ' + lookup + 'Auto' }).join(';')
		featurefile += 'feature ' + feature + ' { script latn; ' + stmt + '; script grek; ' + stmt + '; script cyrl; ' + stmt + '; script DFLT; ' + stmt + '; } ' + feature + ';\n\n';
	}
	for (var key in font.features.markGlyphs) {
		featurefile += '@MG_' + key + '= [' + font.features.markGlyphs[key].join(' ') + '];\n'
	}
	// mark
	var mark = font.features.mark;
	for (var id in mark) {
		var lookup = mark[id];
		var lookupName = 'markAuto_' + id;
		featurefile += 'lookup ' + lookupName + ' {' + lookup.marks.join(';\n') + ';\n'
			+ lookup.bases.join(';\n') + ';} ' + lookupName + ';'
	}

	// mkmk
	var mkmk = font.features.mkmk;
	featurefile += 'lookup mkmkAuto {' + mkmk.marks.join(';\n') + ';\n'
		+ mkmk.bases.join(';\n') + ';} mkmkAuto;'

	// gdef
	var gdef = font.features.gdef;
	featurefile += '@GDEF_Simple = [' + gdef.simple.join(' \n') + '];\n'
		+ '@GDEF_Ligature =[' + gdef.ligature.join(' \n') + '];\n'
		+ '@GDEF_Mark = [' + gdef.mark.join(' \n') + '];\n'
		+ 'table GDEF { GlyphClassDef @GDEF_Simple, @GDEF_Ligature, @GDEF_Mark, ;} GDEF;'

	featurefile += fs.readFileSync(__dirname + '/features/common.fea', 'utf-8');
	featurefile += fs.readFileSync(__dirname + '/features/' + (font.parameters.isItalic ? 'italiconly.fea' : 'uprightonly.fea'), 'utf-8');
	if (font.parameters.spacing > 0) {
		featurefile += fs.readFileSync(__dirname + '/features/ligation.fea', 'utf-8');
	}
	fs.writeFileSync(argv.feature, featurefile, 'utf-8');
})();

/*
// Currently unused
if(argv.ttf) (function(){
	function toBuffer(arrayBuffer) {
		var length = arrayBuffer.byteLength;
		var view = new DataView(arrayBuffer, 0, length);
		var buffer = new Buffer(length);
		for (var i = 0, l = length; i < l; i++) {
			buffer[i] = view.getUint8(i, false);
		}
		return buffer;
	};
	var options = { preserveOS2Version: true };
	var upm = (argv.upm - 0) || 1000;
	var upmscale = upm / font.head.unitsPerEm;
	var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
	for(var j = 0; j < font.glyf.length; j++){
		var g = font.glyf[j];
		g.advanceWidth *= upmscale;
		if(g.contours) {
			for(var k = 0; k < g.contours.length; k++) {
				var contour = g.contours[k];
				for(var p = 0; p < contour.length; p++) {
					contour[p].y *= upmscale;
					contour[p].x = contour[p].x * upmscale + contour[p].y * skew;
				}
			}
			Glyph.prototype.cleanup.call(g, 1);
		}
	}
	font.head.unitsPerEm        *= upmscale;
	font.hhea.ascent            *= upmscale;
	font['OS/2'].usWinAscent    *= upmscale;
	font['OS/2'].sTypoAscender  *= upmscale;
	font.hhea.descent           *= upmscale;
	font['OS/2'].usWinDescent   *= upmscale;
	font['OS/2'].sTypoDescender *= upmscale;
	font.hhea.lineGap           *= upmscale;
	font['OS/2'].sTypoLineGap   *= upmscale;
	font['OS/2'].sxHeight       *= upmscale;
	font['OS/2'].sCapHeight     *= upmscale;
	
	fs.writeFileSync(argv.ttf, toBuffer(new TTFWriter(options).write(font)));
})();
*/

if (argv.svg) (function() {
	console.log('    Writing outline as SVG -> ' + argv.svg);

	var foundNaN = false;
	var glyfname = '';
	function cov(x) {
		if (!isFinite(x)) {
			if (!foundNaN) {
				console.log("*** NaN value found in " + argv.svg + '(' + glyfname + ')' + " ***")
				foundNaN = true
			}
			return 0
		}
		return Math.round(x * 10000) / 10000
	};
	function mix(a, b, p) { return a + (b - a) * p };

	function toSVGPath(glyph) {
		var buf = '';
		foundNaN = false;
		glyfname = glyph.name;
		if (glyph.contours) for (var j = 0; j < glyph.contours.length; j++) {
			var contour = glyph.contours[j];
			var lx = 0;
			var ly = 0;
			if (contour.length) {
				lx = contour[0].x;
				ly = contour[0].y;
				buf += 'M' + cov(lx) + ' ' + cov(ly);
				for (var k = 1; k < contour.length; k++) if (contour[k].onCurve) {
					lx = contour[k].x;
					ly = contour[k].y;
					buf += 'L' + cov(lx) + ' ' + cov(ly);
				} else if (contour[k].cubic) {
					var rx = contour[k + 2].x;
					var ry = contour[k + 2].y;
					buf += 'C' + [contour[k].x, contour[k].y, contour[k + 1].x, contour[k + 1].y, rx, ry].map(cov).join(' ');
					lx = rx;
					ly = ry;
					k += 2;
				} else if (contour[k + 1]) {
					if (contour[k + 1].onCurve) {
						var rx = contour[k + 1].x;
						var ry = contour[k + 1].y;
					} else {
						var rx = (contour[k].x + contour[k + 1].x) / 2;
						var ry = (contour[k].y + contour[k + 1].y) / 2;
					}
					var x1 = mix(lx, contour[k].x, 2 / 3);
					var y1 = mix(ly, contour[k].y, 2 / 3);
					var x2 = mix(rx, contour[k].x, 2 / 3);
					var y2 = mix(ry, contour[k].y, 2 / 3);

					buf += 'C' + [cov(x1), cov(y1), cov(x2), cov(y2), cov(rx), cov(ry)].join(' ');
					lx = rx;
					ly = ry;
					if (contour[k + 1].onCurve) k += 1;
				} else {
					var rx = contour[0].x;
					var ry = contour[0].y;
					buf += 'Q' + cov(contour[k].x) + ' ' + cov(contour[k].y) + ' ' + cov(contour[0].x) + ' ' + cov(contour[0].y);
					lx = rx;
					ly = ry;
				}
				buf += 'Z\n'
			}
		}
		return buf;
	}
	var svg = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><font id="' + font.name.postScriptName + '">'

	var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
	var scale = (argv.upm || 1000) / 1000;

	svg += '<font-face font-family="' + font.name.fontFamily + '" font-weight="' + font.OS_2.usWeightClass + '" font-stretch="normal" units-per-em="' + (1000 * scale) + '"/>'

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
			//Glyph.prototype.cleanup.call(g, 0.25);
		}
		var gd = '<' + (j === 0 ? 'missing-glyph' : 'glyph') + ' glyph-name="' + g.name + '" horiz-adv-x="' + g.advanceWidth + '" ' + (g.unicode && g.unicode.length ? 'unicode="&#x' + g.unicode[0].toString(16) + ';"' : '') + ' d="' + toSVGPath(g) + '" />'
		svg += gd;
	}
	svg += '</font></defs></svg>'
	fs.writeFileSync(argv.svg, svg, 'utf-8')
})();

if (argv.meta) (function() {
	console.log('    Writing metadata as JSON -> ' + argv.meta);
	if (argv.svg) {
		font.glyf = null;
		font.glyfMap = null;
	}
	if (argv.feature) {
		font.features = null;
	}
	fs.writeFileSync(argv.meta, JSON.stringify(font));
})();