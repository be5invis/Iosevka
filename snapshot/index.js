/* eslint-env node, browser */

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const dpi = window.devicePixelRatio;
const ipc = require("electron").ipcRenderer;
const packagingTasks = require("./packaging-tasks.json");

let onScroll = function () {};
ipc.on("scroll", function () {
	onScroll.apply(this, arguments);
	setTimeout(function () {
		ipc.send("snapshot", "scroll-done");
	}, 500);
});
let onComplete = function () {};
ipc.on("complete", function () {
	onComplete.apply(this, arguments);
});

function captureElement(options, callback) {
	window.scroll(0, 0);
	setTimeout(function () {
		const element = document.querySelector(options.el);
		if (options.applyClass) element.className = options.applyClass;
		if (options.applyFeature) element.style = "font-feature-settings:" + options.applyFeature;

		const rect = element.getBoundingClientRect();
		onScroll = function (event, arg) {
			window.scrollTo(0, arg);
		};
		onComplete = function () {
			if (callback) callback();
			onComplete = function () {};
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

window.onload = function () {
	const snapshotTasks = [
		{ el: "#languages", name: "languages" },
		{ el: "#stylesets", name: "stylesets" },
		{ el: "#charvars", name: "charvars" },
		{ el: "#matrix", name: "matrix" },
		{ el: "#previews", name: "preview-all" },
		{ el: "#weights", name: "weights" },
		{ el: "#ligations", name: "ligations", doubleTrim: "white" },
		...packagingTasks
	];
	let current = 0;
	const step = function () {
		const doit = function () {
			captureElement(snapshotTasks[current], function () {
				current += 1;
				if (current >= snapshotTasks.length) window.close();
				else setTimeout(step, 100);
			});
		};
		setTimeout(doit, 100);
	};
	ipc.send("snapshot", "i am ready");
	console.log("I AM READY");
	setTimeout(step, 2000);
};
