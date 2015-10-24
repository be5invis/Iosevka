var path = require('path');
var fs = require('fs');
var TTFReader = require('node-sfnt').TTFReader;
var TTFWriter = require('node-sfnt').TTFWriter;
var toml = require('toml');

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

var ttf = readttf(process.argv[2]);
// Fixes xAvgCharWidth
ttf['OS/2'].xAvgCharWidth = ttf.head.unitsPerEm / 2; // 0.5em
ttf['OS/2'].sxHeight = param.iosevka.xheight
ttf['OS/2'].sCapHeight = param.iosevka.cap
ttf['OS/2'].fsSelection |= (ttf['OS/2'].usWeightClass > 400 ? 1 << 5 : 0) | (ttf.post.italicAngle ? 1 : 0)
ttf.head.macStyle |= (ttf['OS/2'].usWeightClass > 400 ? 1 : 0) | (ttf.post.italicAngle ? 2 : 0)
ttf.post.isFixedPitch = 1                            // mono
ttf.DSIG = {                                         // add a dummy SDIG
    name: 'DSIG',
    content: [0, 1, 0, 0]
}
fs.writeFileSync(process.argv[3], toBuffer(new TTFWriter(options).write(ttf)));