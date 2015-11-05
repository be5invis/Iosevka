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
var ttf = readttf(argv._[0]);
var targetupm = argv.upm - 0 || 1000;
var upm = ttf.head.unitsPerEm - 0;
var skew = Math.tan(ttf.post.italicAngle / 180 * Math.PI);
for(var j = 0; j < ttf.glyf.length; j++){
	var glyph = ttf.glyf[j];
	if(glyph.contours && glyph.contours.length > 0) for(var k = 0; k < glyph.contours.length; k++) if(glyph.contours[k].length > 0) {
		var c = glyph.contours[k];
		for(var l = 0; l < c.length; l++){
			c[l].x += skew * c[l].y
		}
		var xs = c.map(function(p){ return p.x });
		var ys = c.map(function(p){ return p.y });
		var xmin = Math.min.apply(null, xs);
		var xmax = Math.max.apply(null, xs);
		var ymin = Math.min.apply(null, ys);
		var ymax = Math.max.apply(null, ys);
		var rxmin = (upm / targetupm) * Math.round(xmin * targetupm / upm);
		var rxmax = (upm / targetupm) * Math.round(xmax * targetupm / upm);
		var rymin = (upm / targetupm) * Math.round(ymin * targetupm / upm);
		var rymax = (upm / targetupm) * Math.round(ymax * targetupm / upm);
		for(var l = 0; l < c.length; l++){
			c[l].y = (upm / targetupm) * (mix(rymin, rymax, ratio(ymin, c[l].y, ymax)) * targetupm / upm)
			c[l].x = (upm / targetupm) * ((mix(rxmin, rxmax, ratio(xmin, c[l].x, xmax)) - c[l].y * skew) * targetupm / upm)
		}
		glyph.contours[k] = c.filter(function(p){ return !p.removable })
	}
}
fs.writeFileSync(argv._[1], toBuffer(new TTFWriter(options).write(ttf)));