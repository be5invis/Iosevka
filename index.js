var CompactPicker = Vue.component('compact-picker', {
	template: '#compact-picker-template',
	props: {
		items: Array,
		current: String,
		cls: String
	},
	data: {},
	methods: {
		setItem: function(item){
			this.current = item;
			return false;
		}
	}
});
var CompactToggle = Vue.component('compact-toggle', {
	template: '#compact-toggle-template',
	props: {
		label: String,
		on: Boolean,
		cls: String
	},
	data: {},
	methods: {
		toggle: function(){
			this.on = !this.on
			console.log(this.on)
			return false;
		}
	}
});
var CodeSnippet = Vue.component('snippet', {
	template: '#code-snippet-template',
	props: {
		name: String,
		current: String
	},
	data: {},
	methods: {}
});

var indexPage = new Vue({
	el: 'body',
	data: {
		version: "1.7.4",
		codename: "Galanodel-4",
		themes: ['color-light', 'color-dark'],
		snippets: [],
		snippet: 'javascript',
		theme: 'color-dark',
		opentypeSamples: [
			
			'Stylistic sets',
			['volatile',['ss01','ss02','ss03'], 'sub', 'il'],
			['percentage',['ss04','ss05'], 'sub', 'g'],
			['msk & 0xFF',['ss06','ss07','ss08'], 'sub', '0'],
			['*p=~mask_0',['ss09','ss10'], 'sub', '*~_'],
			
			'Character Variants',
			['variable', ['cv01', 'cv02'], 'sub', 'a'],
			['integer', ['cv03', 'cv04', 'cv05', 'cv06'], 'sub', 'i'],
			['long',['cv07','cv08','cv09','cv10'], 'sub', 'l'],
			['git',['cv11','cv12'], 'sub', 'g'],
			['0x1337F001',['cv13','cv14','cv15'], 'sub', '0'],
			['~bitsRead',['cv16','cv17'], 'sub', '~'],
			['*handler',['cv18','cv19'], 'sub', '*'],
			['shared_ptr',['cv20','cv21'], 'sub', '_']
		].map(function(item){
			if(item instanceof Array && item[3]){
				return [item[0].replace(new RegExp('[' + item[3] + ']', 'g'), '<b>$&</b>'), item[1], item[2]]
			} else {
				return item;
			}
		}),
		isSlab: false,
		isBold: false,
		isItalic: false
	}
});
indexPage.snippets = indexPage.$children.map(function(e){ return e.name }).filter(function(x){ return !!x }).sort();

// The getsnap initiates an Electron instance to get snapshots from the page
if(window && window.process && window.process.type && process.versions['electron']) (function(){
	console.log('I AN IN ELECTRON');
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var dpi = window.devicePixelRatio;
	var ipc = require('electron').ipcRenderer;
	
	// hide scroll bar
	var sheet = (function() {
		var style = document.createElement("style");
		style.appendChild(document.createTextNode(""));
		document.head.appendChild(style);
		return style.sheet;
	})();
	sheet.insertRule('::-webkit-scrollbar {display: none;}');
	sheet.insertRule('#preview-toolbar{display:none}');
	sheet.insertRule('#opentype>h2{display:none}');
	sheet.insertRule('#opentype:before{display:none}');
	document.querySelector('#preview').style.paddingBottom = windowHeight * 2 + 'px';

	var onScroll = function(){};
	ipc.on('scroll', function(){
		onScroll.apply(this, arguments);
		setTimeout(function(){ ipc.send('snapshot', 'scroll-done') }, 100);
	});
	var onComplete = function(){};
	ipc.on('complete', function(){ onComplete.apply(this, arguments) });
	
	function captureElement(el, name, callback){
		window.scroll(0, 0);
		var rect = el.getBoundingClientRect();
		ipc.send('snapshot', {
			name: name,
			windowWidth: windowWidth,
			windowHeight: windowHeight,
			dpi: dpi,
			x: rect.left | 0,
			y: rect.top | 0,
			width: rect.width | 0,
			height: rect.height | 0
		});
		onScroll = function(event, arg){
			window.scrollTo(0, arg)
		};
		onComplete = function(){
			if(callback) callback();
		}
	}
	
	window.onload = function(){
		ipc.send('snapshot', 'i am ready');
		console.log('I AM READY');
		setTimeout(function(){
			captureElement(document.querySelector('#opentype'), 'opentype', function(){
				captureElement(document.querySelector('#preview>pre#javascript'), 'languages', function(){
					window.close()
				})
			})
		}, 1000)
	}
})()