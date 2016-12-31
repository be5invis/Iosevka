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
		version: "1.10.2",
		codename: "Juno-2",
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
					{ tag: 'off', desc: 'Default' },
					{ tag: 'ss01', desc: 'Andale Mono Style' },
					{ tag: 'ss02', desc: 'Anonymous Pro Style' },
					{ tag: 'ss03', desc: 'Consolas Style' },
					{ tag: 'ss04', desc: 'Menlo Style' },
					{ tag: 'ss05', desc: 'Fira Mono Style' },
					{ tag: 'ss06', desc: 'Liberation Mono Style' },
					{ tag: 'ss07', desc: 'Monaco Style' },
					{ tag: 'ss08', desc: 'Pragmata Pro Style' },
					{ tag: 'ss09', desc: 'Source Code Pro Style' }
				]
			},
			{
				title: "Character Variants",
				sampleText: "",
				stress: '?',
				type: 'narrow',
				terms: [
					{ tag: 'cv01', sample: 'a' },
					{ tag: 'cv02', sample: 'a' },
					{ tag: 'cv03', sample: 'i' },
					{ tag: 'cv04', sample: 'i' },
					{ tag: 'cv05', sample: 'i' },
					{ tag: 'cv06', sample: 'i' },
					{ tag: 'cv07', sample: 'l' },
					{ tag: 'cv08', sample: 'l' },
					{ tag: 'cv09', sample: 'l' },
					{ tag: 'cv10', sample: 'l' },
					{ tag: 'cv11', sample: 'g' },
					{ tag: 'cv12', sample: 'g' },
					{ tag: 'cv13', sample: '0' },
					{ tag: 'cv14', sample: '0' },
					{ tag: 'cv15', sample: '0' },
					{ tag: 'cv16', sample: '~' },
					{ tag: 'cv17', sample: '~' },
					{ tag: 'cv18', sample: '*' },
					{ tag: 'cv19', sample: '*' },
					{ tag: 'cv20', sample: '_' },
					{ tag: 'cv21', sample: '_' },
					{ tag: 'cv22', sample: '¶' },
					{ tag: 'cv23', sample: '¶' },
					{ tag: 'cv24', sample: 'g' },
					{ tag: 'cv25', sample: 'm' },
					{ tag: 'cv26', sample: 'm' },
					{ tag: 'cv27', sample: 'l' },
					{ tag: 'cv28', sample: 'l' },
					{ tag: 'cv29', sample: '^' },
					{ tag: 'cv30', sample: '^' },
					{ tag: 'cv31', sample: '@' },
					{ tag: 'cv32', sample: '@' },
					{ tag: 'cv33', sample: '@' }
				]
			}
		],
		isSlab: false,
		isBold: false,
		isItalic: false
	},
	methods: {
		stressSample: function (st, stress) {
			return st.replace(new RegExp('[' + stress + ']', 'g'), '<b>$&</b>')
		}
	}
});
indexPage.snippets = indexPage.$children.map(function (e) { return e.name }).filter(function (x) { return !!x }).sort();
