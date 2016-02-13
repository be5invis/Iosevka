var app = require('app');
var BrowserWindow = require('browser-window');
var argv = require('yargs').argv;
var fs = require('fs');
var cp = require('child_process');

var mainWindow = null;
var allWindowClosed = false;
var pendingTasks = 0;
var zoom = 1.5

function checkQuit(){
	if(allWindowClosed && pendingTasks == 0) app.quit();
}

app.on('window-all-closed', function() {
	allWindowClosed = true;
	checkQuit()
});

function combineImages(images, outfile, width, height, background, padding){
	pendingTasks += 1
	var command = 'convert ' + images.join(' ') + ' -append -crop ' + width + 'x' + height + '+0+0 +repage -gravity South -background red -splice 0x1 -background blue -splice 0x1 -trim +repage -chop 0x1 -gravity North -background red -splice 0x1 -background blue -splice 0x1 -trim +repage -chop 0x1 -bordercolor ' + background + ' -border 0x' + padding +' ' + outfile;
	console.log(command);
	cp.exec(command, function(err, stdout, stderr){
		images.forEach(function(file){
			fs.unlinkSync(file);
		});
		pendingTasks -= 1;
		checkQuit();
	})
}

var ipc = require('electron').ipcMain;
function GOTO(phase){ currentPhase = phase };
var phases = {
	prepare : function(event, arg){
		console.log(arg);
		GOTO(phases['receive-rect']);
	},
	'receive-rect' : function(event, rect){
		rect = JSON.parse(JSON.stringify(rect));
		var file = argv.dir + '/' + rect.name + '.png';
		var j = 0;
		function step(){
			event.sender.send('scroll', rect.y + j * rect.windowHeight);
			GOTO(function(event){
				mainWindow.capturePage(function(image){
					fs.writeFileSync(argv.dir + '/' + rect.name + '.' + j + '.png', image.toPng())
					j += 1;
					if(j * rect.windowHeight >= rect.height) {
						// done
						event.sender.send('complete', file);
						GOTO(phases['receive-rect']);
						var images = [];
						for(var k = 0; k < j; k++){
							images.push(argv.dir + '/' + rect.name + '.' + k + '.png')
						}
						combineImages(images, file, rect.windowWidth * rect.dpi, rect.height * rect.dpi, rect.background, rect.padding);
					} else {
						step()
					}
				})
			})
		};
		step()
	}
};
var currentPhase = phases['prepare'];
ipc.on('snapshot', function(){
	currentPhase.apply(this, arguments)
});
ipc.on('log', function(event, arg){
	console.log(arg);
})

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 64 * 16 * zoom, height: 750 * zoom, x: 5000, y: 5000, zoomFactor: zoom});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	//mainWindow.hide();
});