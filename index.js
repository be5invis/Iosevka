var CompactPicker = Vue.component('compact-picker', {
	template: '#compact-picker-template',
	props: {
		items: Array,
		current: String,
		cls: String
	},
	data: {},
	methods: {
		setItem: function (item) {
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
		toggle: function () {
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
		version: "1.8.6",
		codename: "Hermandine-6",
		themes: ['color-light', 'color-dark'],
		snippets: [],
		snippet: 'javascript',
		theme: 'color-dark',
		opentypeSamples: [
			{
				title: "Stylistic Sets",
				sampleText: "float Fox.quick(h){ *is_brown && it_jumps_over(doges.lazy) } 0123456789",
				stress: 'agil*0',
				type: 'wide',
				terms: [
					{tag:'off', desc:'Default'},
					{tag:'ss01', desc:'Andale Mono Style'},
					{tag:'ss02', desc:'Anonymous Pro Style'},
					{tag:'ss03', desc:'Consolas Style'},
					{tag:'ss04', desc:'Menlo Style'},
					{tag:'ss05', desc:'Fira Mono Style'},
					{tag:'ss06', desc:'Liberation Mono Style'},
					{tag:'ss07', desc:'Monaco Style'},
					{tag:'ss08', desc:'Pragmata Pro Style'},
					{tag:'ss09', desc:'Source Code Pro Style'}
				]
			},
			{
				title: "Character Variants",
				sampleText: "",
				stress: '?',
				type: 'narrow',
				terms: [
					{tag:'cv01', sample:'a'},
					{tag:'cv02', sample:'a'},
					{tag:'cv03', sample:'i'},
					{tag:'cv04', sample:'i'},
					{tag:'cv05', sample:'i'},
					{tag:'cv06', sample:'i'},
					{tag:'cv07', sample:'l'},
					{tag:'cv08', sample:'l'},
					{tag:'cv09', sample:'l'},
					{tag:'cv10', sample:'l'},
					{tag:'cv11', sample:'g'},
					{tag:'cv12', sample:'g'},
					{tag:'cv24', sample:'g'},
					{tag:'cv13', sample:'0'},
					{tag:'cv14', sample:'0'},
					{tag:'cv15', sample:'0'},
					{tag:'cv16', sample:'~'},
					{tag:'cv17', sample:'~'},
					{tag:'cv18', sample:'*'},
					{tag:'cv19', sample:'*'},
					{tag:'cv20', sample:'_'},
					{tag:'cv21', sample:'_'},
					{tag:'cv22', sample:'¶'},
					{tag:'cv23', sample:'¶'},
				]
			}
		],
		opentypeSample: [

			'Stylistic sets',
			['volatile', ['ss01', 'ss02', 'ss03'], 'sub', 'il'],
			['percentage', ['ss04', 'ss05'], 'sub', 'g'],
			['msk & 0xFF', ['ss06', 'ss07', 'ss08'], 'sub', '0'],
			['*p=~mask_0', ['ss09', 'ss10'], 'sub', '*~_'],

			'Character Variants',
			['variable', ['cv01', 'cv02'], 'sub', 'a'],
			['integer', ['cv03', 'cv04', 'cv05', 'cv06'], 'sub', 'i'],
			['long', ['cv07', 'cv08', 'cv09', 'cv10'], 'sub', 'l'],
			['git', ['cv11', 'cv12'], 'sub', 'g'],
			['0x1337F001', ['cv13', 'cv14', 'cv15'], 'sub', '0'],
			['~bitsRead', ['cv16', 'cv17'], 'sub', '~'],
			['*handler', ['cv18', 'cv19'], 'sub', '*'],
			['shared_ptr', ['cv20', 'cv21'], 'sub', '_'],
			['ref:¶1.1', ['cv22', 'cv23'], 'sub', '¶']
		].map(function (item) {
			if (item instanceof Array && item[3]) {
				return [item[0].replace(new RegExp('[' + item[3] + ']', 'g'), '<b>$&</b>'), item[1], item[2]]
			} else {
				return item;
			}
		}),
		isSlab: false,
		isBold: false,
		isItalic: false
	},
	methods:{
		stressSample: function(st, stress){
			return st.replace(new RegExp('[' + stress + ']', 'g'), '<b>$&</b>')
		}
	}
});
indexPage.snippets = indexPage.$children.map(function (e) { return e.name }).filter(function (x) { return !!x }).sort();
