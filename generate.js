var fs = require('fs');
var path = require('path');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var argv = require('yargs').argv;
var toml = require('toml');

var parametersData = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8'));
var emptyFont      = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'emptyfont.toml'), 'utf-8'));
var para = parameters.build(parametersData, argv._);
var fontUniqueName = para.family + ' ' + para.style + ' ' + para.version + ' (' + para.codename + ')'

console.log('    Start build font' + fontUniqueName);
var font = buildGlyphs.build.call(emptyFont, para);
console.log('    ' + fontUniqueName + " Successfully built.");

if(argv.o) fs.writeFileSync(argv.o, JSON.stringify(font));