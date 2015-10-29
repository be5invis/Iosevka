var fs = require('fs');
var TTFWriter = require('node-sfnt').TTFWriter;
var TTF = require('node-sfnt').TTF;
var argv = require('yargs').argv;

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

var options = {preserveOS2Version: true}

var ttfFont = JSON.parse(fs.readFileSync(argv._[0], 'utf-8'));

if(argv.charmap) {
	fs.writeFileSync(argv.charmap, JSON.stringify(ttfFont.glyf.map(function(glyph){ return [glyph.name, glyph.unicode, glyph.advanceWidth === 0 && glyph.anchors && Object.keys(glyph.anchors).length > 0]})), 'utf8')
};
if(argv.feature) {
	var featurefile = '\n\n';

	// markGlyphs
	for(var key in ttfFont.features.markGlyphs){
		featurefile += '@MG_' + key + '= [' + ttfFont.features.markGlyphs[key].join(' ') + '];\n'
	}
	// mark
	var mark = ttfFont.features.mark;
	for(var id in mark) {
		var lookup = mark[id];
		var lookupName = 'markAuto_' + id;
		featurefile += 'lookup ' + lookupName + ' {' + lookup.marks.join(';\n') + ';\n' + lookup.bases.join(';\n') + ';} ' + lookupName + ';'
	}
	
	// mkmk
	var mkmk = ttfFont.features.mkmk;
	featurefile += 'lookup mkmkAuto {' + mkmk.marks.join(';\n') + ';\n' + mkmk.bases.join(';\n') + ';} mkmkAuto;'
	
	// gdef
	var gdef = ttfFont.features.gdef;
	featurefile += '@GDEF_Simple = [' + gdef.simple.join(' \n') + '];\n@GDEF_Ligature =[' + gdef.ligature.join(' \n') + '];\n@GDEF_Mark = [' + gdef.mark.join(' \n') + '];\ntable GDEF { GlyphClassDef @GDEF_Simple, @GDEF_Ligature, @GDEF_Mark, ;} GDEF;'

	fs.writeFileSync(argv.feature, featurefile, 'utf8');
};

if(argv.ttf) fs.writeFileSync(argv.ttf, toBuffer(new TTFWriter(options).write(ttfFont)));