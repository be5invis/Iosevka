const { app, BrowserWindow } = require("electron");
let argDir = process.argv[2];
let fs = require("fs");
let cp = require("child_process");

let mainWindow = null;
let allWindowClosed = false;
let pendingTasks = 0;
let zoom = 2;

function checkQuit() {
	if (allWindowClosed && pendingTasks == 0) app.quit();
}

app.on("window-all-closed", function () {
	allWindowClosed = true;
	checkQuit();
});

function combineImages(images, outfile, width, height, doubleTrim) {
	let command =
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
	cp.exec(command, function (err, stdout, stderr) {
		if (err) console.log(err);
		images.forEach(function (file) {
			fs.unlinkSync(file);
		});
		pendingTasks -= 1;
		checkQuit();
	});
}

let ipc = require("electron").ipcMain;
function GOTO(phase) {
	currentPhase = phase;
}
const phases = {
	prepare: function (event, arg) {
		console.log(arg);
		GOTO(phases["receive-rect"]);
	},
	"receive-rect": function (event, rect) {
		pendingTasks += 1;
		console.log("Received rect.");
		rect = JSON.parse(JSON.stringify(rect));
		let file = argDir + "/" + rect.name + ".png";
		let j = 0;
		let totalFiles = Math.ceil(rect.height / rect.windowHeight);
		let pendingFiles = totalFiles;
		step();

		function doneFileWrite() {
			pendingFiles -= 1;
			if (pendingFiles <= 0) {
				let images = [];
				for (let k = 0; k < j; k++) {
					images.push(argDir + "/" + rect.name + "." + k + ".png");
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
			GOTO(function (event) {
				mainWindow.capturePage().then(function (image) {
					fs.writeFile(
						argDir + "/" + rect.name + "." + j + ".png",
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
	}
};
let currentPhase = phases["prepare"];
ipc.on("snapshot", function () {
	currentPhase.apply(this, arguments);
});
ipc.on("log", function (event, arg) {
	console.log(arg);
});

app.on("ready", function () {
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
