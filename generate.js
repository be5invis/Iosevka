var fs = require('fs');
var path = require('path');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var argv = require('yargs').argv;
var toml = require('toml');

var parametersData = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8'));
var emptyFont      = toml.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), 'emptyfont.toml'), 'utf-8'));
var para = parameters.build(parametersData, argv._);

console.log(argv._ + ' : Start Building.');
var ttfFont = buildGlyphs.build.call(emptyFont, para);
console.log(argv._ + ' : Building Complete.');

if(argv.o) fs.writeFile(argv.o, JSON.stringify(ttfFont), function(err){
	if(err) throw err;
	console.log(argv.o + ' : File Saved.');
});