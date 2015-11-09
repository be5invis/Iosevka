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
var CodeSnippet = Vue.component('snippet', {
	template: '#code-snippet-template',
	props: {
		id: String,
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
		snippet: 'javascript',
		theme: 'dark'
	}
});
codeArea.snippets = codeArea.$children.map(function(e){ return e.id }).filter(function(x){ return !!x });