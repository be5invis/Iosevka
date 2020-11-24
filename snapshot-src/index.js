/* eslint-env node, browser */

"use strict";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const dpi = window.devicePixelRatio;
const ipc = require("electron").ipcRenderer;
const packagingTasks = require("./packaging-tasks.json");
const auxData = require("./index.data.json");

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

const captureCallbacks = {
	cbAmendLigsetSamplerContents,
	cbAmendStylisticSetContents
};

const ssString = "@real fox.quick(h){ *is_brown && it_jumps_over(dogs.lazy) } 0123456789 ABCKRWXYZ";
function cbAmendStylisticSetContents(element, p) {
	element.innerHTML = "";
	const cfg = [
		["upright", "hotCharSetUpright"],
		["italic", "hotCharSetItalic"]
	];
	for (const [cls, kHC] of cfg) {
		const line = document.createElement("div");
		line.className = cls;
		element.appendChild(line);
		const sHC = new Set(p[kHC]);
		for (const lch of ssString) {
			if (sHC.has(lch)) {
				const b = document.createElement("b");
				b.appendChild(document.createTextNode(lch));
				line.appendChild(b);
			} else {
				line.append(document.createTextNode(lch));
			}
		}
	}
}

function cbAmendLigsetSamplerContents(element, p) {
	element.innerHTML = "";
	if (p.tag === "calt") element.style.fontFeatureSettings = `'${p.tag}' ${p.rank}`;
	else element.style.fontFeatureSettings = `'calt' off, '${p.tag}' ${p.rank}`;

	const groupSet = new Set(p.ligSets);
	for (const row of auxData.ligationSamples) {
		const line = document.createElement("div");
		element.appendChild(line);
		for (let m = 0; m < row.length; m++) {
			if (m > 0) line.appendChild(document.createTextNode(" "));
			const item = row[m];
			let rank = 0;
			for (let k = item.tags.length; k-- > 0; ) {
				if (groupSet.has(item.tags[k])) {
					rank = k + 1;
					break;
				}
			}
			if (rank) {
				const run = document.createElement("em");
				run.appendChild(document.createTextNode(item.s));
				run.className = `rank-${rank}`;
				line.appendChild(run);
			} else {
				const run = document.createElement("s");
				run.appendChild(document.createTextNode(item.s));
				run.className = `rank-${rank}`;
				line.appendChild(run);
			}
		}
	}
}

function captureElement(options, callback) {
	window.scroll(0, 0);
	setTimeout(function () {
		const element = document.querySelector(options.el);
		if (options.applyClass) element.className = options.applyClass;
		if (options.applyFeature) element.style = "font-feature-settings:" + options.applyFeature;
		if (options.applyCallback) {
			captureCallbacks[options.applyCallback](element, options.applyCallbackArgs);
		}
		const rect = element.getBoundingClientRect();
		onScroll = function (event, arg) {
			window.scrollTo(0, arg);
		};
		onComplete = function () {
			if (callback) callback();
			onComplete = function () {};
		};
		ipc.send("log", {
			x: rect.left | 0,
			y: rect.top | 0,
			width: rect.width | 0,
			height: rect.height | 0
		});
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
	const snapshotTasks = [...auxData.readmeSnapshotTasks, ...packagingTasks];
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
