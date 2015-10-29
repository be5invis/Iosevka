var fs = require('fs');
var buildGlyphs  = require('./buildglyphs.js');
var parameters = require('./parameters');
var argv = require('yargs').argv;
var ttfFont = buildGlyphs.build(parameters.build(argv._));
if(argv.o) fs.writeFileSync(argv.o, JSON.stringify(ttfFont));