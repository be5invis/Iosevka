var path = require('path');
var fs = require('fs');
var TTFReader = require('node-sfnt').TTFReader;
var TTFWriter = require('node-sfnt').TTFWriter;
var toml = require('toml');
var argv = require('yargs').argv;

var param = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8'))

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

var options = { preserveOS2Version: true, preserveXAvgCharWidth: true, writeUnknownTables: true, hinting: true }

function readttf(file) {
	var data = fs.readFileSync(file);
	var buffer = toArrayBuffer(data);
	var ttf = (new TTFReader(options)).read(buffer);
	return ttf;
}

function writettf(ttf, file) {
	var buffer = new TTFWriter(options).write(ttf);
	fs.writeFileSync(file, toBuffer(buffer));
}

var glyfsource = readttf(argv._[0]);
var ttf = JSON.parse(fs.readFileSync(argv._[1], 'utf-8'));

ttf.post.format = 3
ttf.DSIG = {                                         // add a dummy SDIG
	name: 'DSIG',
	content: [0, 0, 0, 1, 0, 0, 0, 0]
}
ttf.glyf = glyfsource.glyf;
ttf.GDEF = glyfsource.GDEF;
ttf.GSUB = glyfsource.GSUB;
ttf.GPOS = glyfsource.GPOS;
fs.writeFileSync(argv.o, toBuffer(new TTFWriter(options).write(ttf)));