var fs = require('fs');
var font  = require('./font.js');
var TTFWriter = require('node-sfnt').TTFWriter;
var TTF = require('node-sfnt').TTF;

/**
 * buffer转换成ArrayBuffer
 * 
 * @param {Buffer} buffer 缓冲数组
 * @return {ArrayBuffer} 
 */
function toArrayBuffer(buffer) {
    var length = buffer.length;
    var view = new DataView(new ArrayBuffer(length), 0, length);
    for (var i = 0, l = length; i < l; i++) {
        view.setUint8(i, buffer[i], false);
    }
    return view.buffer;
}

/**
 * ArrayBuffer转换成Buffer
 * 
 * @param {ArrayBuffer} arrayBuffer 缓冲数组
 * @return {Buffer} 
 */
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

function readttf(file) {
    var data = fs.readFileSync(file);
    var buffer = toArrayBuffer(data);
    var ttf = (new OTFReader(options)).read(buffer);
    return ttf;
}

function writettf(ttf, file){
    var buffer = new TTFWriter(options).write(ttf);
    fs.writeFileSync(file, toBuffer(buffer));
}

fs.writeFileSync(process.argv[2], toBuffer(new TTFWriter(options).write(font.font)));