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
var font = function () {
	var parametersData = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8'));
	var emptyFont = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'emptyfont.toml'), 'utf-8'));
	var para = parameters.build(parametersData, argv._);
	var fontUniqueName = para.family + ' ' + para.style + ' ' + para.version + ' (' + para.codename + ')'

	console.log('    Start building font ' + fontUniqueName);
	var font = buildGlyphs.build.call(emptyFont, para);
	console.log('    ' + fontUniqueName + " Successfully built.");
	font.features.sscompose = para.sscompose;
	font.parameters = para;
	font.glyf = font.glyf.sort(function(a, b){
		var pri1 = a.cmpPriority || 0;
		var pri2 = b.cmpPriority || 0;
		return (pri2 !== pri1 ? pri2 - pri1 : a.contours.length !== b.contours.length ? a.contours.length - b.contours.length : (a.unicode && b.unicode && a.unicode[0] !== b.unicode[0]) ? a.unicode[0] - b.unicode[0] : (a.name < b.name ) ? (-1) : (a.name > b.name) ? 1 : 0);
	})
	return font;
} ();

if (argv.charmap) (function () {
	console.log('    Writing character map -> ' + argv.charmap);
	fs.writeFileSync(argv.charmap, JSON.stringify(font.glyf.map(function (glyph) {
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 ? hasv(glyph.anchors) ? 1 : (glyph.contours && glyph.contours.length) ? 2 : 0 : 0
		]
	})), 'utf8')
})();

if (argv.feature) (function () {
	console.log('    Writing feature file -> ' + argv.feature);
	var featurefile = '\n\n';

	// MG groups
	for (var key in font.features.markGlyphs) {
		featurefile += '@MG_' + key + '= [' + font.features.markGlyphs[key].join(' ') + '];\n'
	}

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

if (argv.svg) (function () {
	console.log('    Writing outline as SVG -> ' + argv.svg);

	var foundNaN = false;
	var glyfname = '';
	function mix(a, b, p) { return a + (b - a) * p };

	function toSVGPath(glyph) {
		var buf = '';
		foundNaN = false;
		glyfname = glyph.name;
		if (glyph.contours) for (var j = 0; j < glyph.contours.length; j++) {
			buf += Glyph.contourToSVGPath(glyph.contours[j], false);
		}
		return buf;
	}
	var svg = '<?xml version="1.0" standalone="no"?>'
		+ '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >'
		+ '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">'
		+ '<defs><font id="' + font.name.postScriptName + '">';

	var skew = (argv.uprightify ? 1 : 0) * Math.tan((font.post.italicAngle || 0) / 180 * Math.PI);
	var scale = (argv.upm || 1000) / 1000;

	svg += '<font-face font-family="' + font.name.fontFamily
		+ '" font-weight="' + font.OS_2.usWeightClass
		+ '" font-stretch="normal" units-per-em="'
		+ (1000 * scale) + '"/>'

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
		var gd = '<' + (j === 0 ? 'missing-glyph' : 'glyph')
			+ ' glyph-name="' + g.name
			+ '" horiz-adv-x="' + g.advanceWidth + '" '
			+ (g.unicode && g.unicode.length ? 'unicode="&#x' + g.unicode[0].toString(16) + ';"' : '')
			+ ' d="' + toSVGPath(g) + '" />';
		svg += gd;
	}
	svg += '</font></defs></svg>'
	fs.writeFileSync(argv.svg, svg, 'utf-8')
})();

if (argv.meta) (function () {
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