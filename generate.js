var fs = require('fs');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var TTFWriter = require('node-sfnt').TTFWriter;
var TTF = require('node-sfnt').TTF;

var argv = require('yargs').argv;

function toArrayBuffer(buffer) {
	var length = buffer.length;
	var view = new DataView(new ArrayBuffer(length), 0, length);
	for (var i = 0, l = length; i < l; i++) {
		view.setUint8(i, buffer[i], false);
	}
	return view.buffer;
}
function toBuffer(arrayBuffer) {
	var length = arrayBuffer.byteLength;
	var view = new DataView(arrayBuffer, 0, length);
	var buffer = new Buffer(length);
	for (var i = 0, l = length; i < l; i++) {
		buffer[i] = view.getUint8(i, false);
	}
	return buffer;
}

var options = {preserveOS2Version: true}

var variant = argv._[0]
var outputPath = argv._[1]

var ttfFont = buildGlyphs.build(parameters[variant]);

if(outputPath) fs.writeFileSync(outputPath, toBuffer(new TTFWriter(options).write(ttfFont)));
if(argv.dumpmap) {
	fs.writeFileSync(argv.dumpmap, JSON.stringify(ttfFont.glyf.map(function(glyph){ return [glyph.name, glyph.unicode]})), 'utf8')
}