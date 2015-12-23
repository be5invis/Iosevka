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
		themes: ['color-light', 'color-dark'],
		snippets: [],
		snippet: 'javascript',
		theme: 'color-dark',
		opentypeSamples: ['cv01','cv02','cv03','cv04','cv05','cv06','cv07','cv08','cv09','cv10'],
		isSlab: false,
		isBold: false,
		isItalic: false,
		version: "1.5.0",
		codename: "Elvirel"
	}
});
indexPage.snippets = indexPage.$children.map(function(e){ return e.name }).filter(function(x){ return !!x }).sort();