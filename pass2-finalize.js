var path = require('path');
var fs = require('fs');
var toml = require('toml');
var argv = require('yargs').argv;

var glyfsource = '';
process.stdin.resume();
process.stdin.on('data', function (buf) { glyfsource += buf.toString(); });
process.stdin.on('end', function () {
	var ttf = JSON.parse(fs.readFileSync(argv._[0], 'utf-8'));
	if(glyfsource[0] == '\uFEFF') glyfsource = glyfsource.slice(1);
	var glyfs = JSON.parse(glyfsource);
	ttf.post.format = 3.0;
	ttf.cmap = glyfs.cmap;
	ttf.glyf = glyfs.glyf;
	ttf.prep = glyfs.prep;
	ttf.fpgm = glyfs.fpgm;
	ttf.cvt_ = glyfs.cvt_;
	ttf.maxp = glyfs.maxp;
	ttf.gasp = glyfs.gasp;
	process.stdout.write(JSON.stringify(ttf));
});