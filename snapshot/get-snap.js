const { app, BrowserWindow } = require("electron");
var argv = require("yargs").argv;
var fs = require("fs");
var cp = require("child_process");

var mainWindow = null;
var allWindowClosed = false;
var pendingTasks = 0;
var zoom = 2;

function checkQuit() {
	if (allWindowClosed && pendingTasks == 0) app.quit();
}

app.on("window-all-closed", function() {
	allWindowClosed = true;
	checkQuit();
});

function combineImages(images, outfile, width, height, doubleTrim) {
	var command =
		"magick " +
		images.join(" ") +
		" -append -crop " +
		width +
		"x" +
		height +
		"+0+0 +repage -bordercolor #008000 -fuzz 5% -trim  " +
		(doubleTrim ? "-bordercolor " + doubleTrim + " -trim " : "") +
		outfile;
	console.log(command);
	cp.exec(command, function(err, stdout, stderr) {
		if (err) console.log(err);
		images.forEach(function(file) {
			fs.unlinkSync(file);
		});
		pendingTasks -= 1;
		checkQuit();
	});
}

var ipc = require("electron").ipcMain;
function GOTO(phase) {
	currentPhase = phase;
}
var phases = {
	prepare: function(event, arg) {
		console.log(arg);
		GOTO(phases["receive-rect"]);
	},
	"receive-rect": function(event, rect) {
		pendingTasks += 1;
		rect = JSON.parse(JSON.stringify(rect));
		var file = argv.dir + "/" + rect.name + ".png";
		var j = 0;
		var totalFiles = Math.ceil(rect.height / rect.windowHeight);
		var pendingFiles = totalFiles;
		function doneFileWrite() {
			pendingFiles -= 1;
			if (pendingFiles <= 0) {
				var images = [];
				for (var k = 0; k < j; k++) {
					images.push(argv.dir + "/" + rect.name + "." + k + ".png");
				}
				combineImages(
					images,
					file,
					rect.windowWidth * rect.dpi,
					rect.height * rect.dpi,
					rect.doubleTrim
				);
			}
		}
		function step() {
			event.sender.send("scroll", rect.y + j * rect.windowHeight);
			GOTO(function(event) {
				mainWindow.capturePage(function(image) {
					fs.writeFile(
						argv.dir + "/" + rect.name + "." + j + ".png",
						image.toPNG(),
						doneFileWrite
					);
					j += 1;
					if (j >= totalFiles) {
						// Move to next image
						event.sender.send("complete", file);
						GOTO(phases["receive-rect"]);
					} else {
						step();
					}
				});
			});
		}
		step();
	}
};
var currentPhase = phases["prepare"];
ipc.on("snapshot", function() {
	currentPhase.apply(this, arguments);
});
ipc.on("log", function(event, arg) {
	console.log(arg);
});

app.on("ready", function() {
	mainWindow = new BrowserWindow({
		width: 64 * 16 * zoom,
		height: 1024 * zoom,
		//x: 5000, y: 5000,
		webPreferences: {
			zoomFactor: zoom,
			nodeIntegration: true
		},
		show: false
	});
	mainWindow.showInactive();
	mainWindow.loadURL("file://" + __dirname + "/index.html");
	mainWindow.blurWebView();
	//mainWindow.hide();
});
