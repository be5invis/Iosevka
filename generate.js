var fs = require('fs');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
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

var variant = argv._[0]
var outputPath = argv._[1]

var ttfFont = buildGlyphs.build(parameters[variant]);

ttfFont.glyf = [ttfFont.glyf[0]].concat(ttfFont.glyf.slice(1).sort(function(a, b){
	if(a.unicode && b.unicode && a.unicode[0] && b.unicode[0]) return a.unicode[0] - b.unicode[0]
	else if(a.unicode && a.unicode[0]) return -1
	else if(b.unicode && b.unicode[0]) return 1
	else return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
}));

if(outputPath) fs.writeFileSync(outputPath, toBuffer(new TTFWriter(options).write(ttfFont)));
if(argv.dumpmap) {
	fs.writeFileSync(argv.dumpmap, JSON.stringify(ttfFont.glyf.map(function(glyph){ return [glyph.name, glyph.unicode, glyph.advanceWidth === 0 && glyph.anchors && Object.keys(glyph.anchors).length > 0]})), 'utf8')
};
if(argv.dumpfeature) {
	var featurefile = '\n\n';
	// ccmp
	// var ccmp = ttfFont.features.ccmp;
	// featurefile += 'lookup ccmpAuto {' + ccmp.join(';\n') + ';} ccmpAuto;';

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

	fs.writeFileSync(argv.dumpfeature, featurefile, 'utf8');
};