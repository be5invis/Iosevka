var CompactPicker = Vue.component('compact-picker', {
	template: '#compact-picker-template',
	props: {
		items: Array,
		current: String
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
		on: Boolean
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

var codeArea = new Vue({
	el: 'body',
	data: {
		themes: ['light', 'dark'],
		snippets: [],
		snippet: 'js',
		theme: 'dark',
		isSlab: false
	}
});
codeArea.snippets = codeArea.$children.map(function(e){ return e.name }).filter(function(x){ return !!x });