var fs = require('fs');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var TTFWriter = require('node-sfnt').TTFWriter;
var TTF = require('node-sfnt').TTF;
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

var variant = process.argv[2];
var outputPath = process.argv[3];

var ttfFont = buildGlyphs.build(parameters[variant]);

fs.writeFileSync(outputPath, toBuffer(new TTFWriter(options).write(ttfFont)));