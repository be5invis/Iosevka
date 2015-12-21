var fs = require('fs');
var TTFReader = require('node-sfnt').TTFReader;
var TTFWriter = require('node-sfnt').TTFWriter;

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

var options = {preserveOS2Version: true, preserveXAvgCharWidth: true, writeUnknownTables: true, hinting: true}

function readttf(file) {
	var data = fs.readFileSync(file);
	var buffer = toArrayBuffer(data);
	var ttf = (new TTFReader(options)).read(buffer);
	return ttf;
}

function writettf(ttf, file){
	var buffer = new TTFWriter(options).write(ttf);
	fs.writeFileSync(file, toBuffer(buffer));
}
function mix(a, b, p){ return a + (b - a) * p }
function ratio(l, m, r){
	if(l === r) return 0;
	return (m - l) / (r - l);
}
function colinear(a, b, c){
	return Math.abs(((c.y - a.y) * (b.x - a.x) - (c.x - a.x) * (b.y - a.y))) <= 1e-5
}
var glyfsource = readttf(argv._[0]);
var ttf = JSON.parse(fs.readFileSync(argv._[1], 'utf-8'));
ttf.glyf = glyfsource.glyf;
fs.writeFileSync(argv.o, toBuffer(new TTFWriter(options).write(ttf)));