var fs = require('fs');
var TTFWriter = require('node-sfnt').TTFWriter;
var TTF = require('node-sfnt').TTF;
var argv = require('yargs').argv;

var Glyph = require('./support/glyph');

function toBuffer(arrayBuffer) {
	var length = arrayBuffer.byteLength;
	var view = new DataView(arrayBuffer, 0, length);
	var buffer = new Buffer(length);
	for (var i = 0, l = length; i < l; i++) {
		buffer[i] = view.getUint8(i, false);
	}
	return buffer;
}
function pad(s, n){ while(s.length < n) s = '0' + s; return s; }


var options = { preserveOS2Version: true };
var font = JSON.parse(fs.readFileSync(argv._[0], 'utf-8'));
if(argv.charmap) {
	fs.writeFileSync(argv.charmap, JSON.stringify(font.glyf.map(function(glyph){
		return [
			glyph.name,
			glyph.unicode,
			glyph.advanceWidth === 0 && glyph.anchors && Object.keys(glyph.anchors).length > 0
		]
	})), 'utf8')
};
if(argv.feature) {
	var featurefile = '\n\n';

	// markGlyphs
	for(var key in font.features.markGlyphs){
		featurefile += '@MG_' + key + '= [' + font.features.markGlyphs[key].join(' ') + '];\n'
	}
	// mark
	var mark = font.features.mark;
	for(var id in mark) {
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

	fs.writeFileSync(argv.feature, featurefile, 'utf8');
};

if(argv.ttf) {
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
}