var app = require('app');
var BrowserWindow = require('browser-window');
var argv = require('yargs').argv;
var fs = require('fs');
var cp = require('child_process');

var mainWindow = null;
var allWindowClosed = false;
var pendingTasks = 0;

function checkQuit(){
	if(pendingTasks == 0) app.quit();
}

app.on('window-all-closed', function() {
	allWindowClosed = true;
	checkQuit()
});

function combineImages(images, outfile, width, height){
	pendingTasks += 1
	var command = 'convert ' + images.join(' ') + ' -append -crop ' + width + 'x' + height + '+0+0 +repage -trim ' + outfile;
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
		var file = argv[rect.name];
		var j = 0;
		function step(){
			event.sender.send('scroll', rect.y + j * rect.windowHeight);
			GOTO(function(event){
				mainWindow.capturePage(function(image){
					fs.writeFileSync(file + '.' + j + '.png', image.toPng())
					j += 1;
					if(j * rect.windowHeight >= rect.height) {
						// done
						event.sender.send('complete', file);
						GOTO(phases['receive-rect']);
						var images = [];
						for(var k = 0; k < j; k++){
							images.push(file + '.' + k + '.png')
						}
						combineImages(images, file, rect.windowWidth * rect.dpi, rect.height * rect.dpi);
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
	mainWindow = new BrowserWindow({width: 64 * 16, height: 750, x:5000, y:5000});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	//mainWindow.hide();
	mainWindow.on('page-title-updated', function(){
		console.log('load')
	})
});