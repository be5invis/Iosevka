console.log("I AN IN ELECTRON");
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var dpi = window.devicePixelRatio;
var ipc = require("electron").ipcRenderer;

var onScroll = function() {};
ipc.on("scroll", function() {
	onScroll.apply(this, arguments);
	setTimeout(function() {
		ipc.send("snapshot", "scroll-done");
	}, 500);
});
var onComplete = function() {};
ipc.on("complete", function() {
	onComplete.apply(this, arguments);
});

function captureElement(options, callback) {
	window.scroll(0, 0);
	setTimeout(function() {
		var rect = options.el.getBoundingClientRect();
		onScroll = function(event, arg) {
			window.scrollTo(0, arg);
		};
		onComplete = function() {
			if (callback) callback();
			onComplete = function() {};
		};
		ipc.send("snapshot", {
			name: options.name,
			windowWidth: windowWidth,
			windowHeight: windowHeight,
			doubleTrim: options.doubleTrim,
			dpi: dpi,
			x: rect.left | 0,
			y: rect.top | 0,
			width: rect.width | 0,
			height: rect.height | 0
		});
	}, 10);
}

window.onload = function() {
	var snapshotTasks = [
		{
			el: document.querySelector("#downloadoptions"),
			name: "download-options",
			doubleTrim: "white"
		},
		{
			el: document.querySelector("#languages"),
			name: "languages"
		},
		{
			el: document.querySelector("#variants"),
			name: "variants"
		},
		{
			el: document.querySelector("#stylesets"),
			name: "stylesets"
		},
		{
			el: document.querySelector("#charvars"),
			name: "charvars"
		},
		{
			el: document.querySelector("#matrix"),
			name: "matrix"
		},
		{
			el: document.querySelector("#family"),
			name: "family"
		},
		{
			el: document.querySelector("#previews"),
			name: "preview-all"
		},
		{
			el: document.querySelector("#weights"),
			name: "weights"
		},
		{
			el: document.querySelector("#ligations"),
			name: "ligations",
			doubleTrim: "white"
		}
	];
	current = 0;
	var step = function() {
		var doit = function() {
			captureElement(snapshotTasks[current], function() {
				current += 1;
				if (current >= snapshotTasks.length) window.close();
				else setTimeout(step, 100);
			});
		};
		if (snapshotTasks[current].prepare) snapshotTasks[current].prepare(doit);
		else setTimeout(doit, 100);
	};
	ipc.send("snapshot", "i am ready");
	console.log("I AM READY");
	setTimeout(step, 2000);
};
