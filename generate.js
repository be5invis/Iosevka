var fs = require('fs');
var path = require('path');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var argv = require('yargs').argv;
var toml = require('toml');

fs.readFile(path.join(path.dirname(require.main.filename), 'parameters.toml'), 'utf-8', function(err, content){
	var parametersData = toml.parse(content);
	var para = parameters.build(parametersData, argv._);
	console.log(argv._ + ' : Start Building.');
	var ttfFont = buildGlyphs.build(para);
	console.log(argv._ + ' : Building Complete.');
	if(argv.o) fs.writeFile(argv.o, JSON.stringify(ttfFont), function(err){
		if(err) throw err;
		console.log(argv.o + ' : File Saved.');
	});
});