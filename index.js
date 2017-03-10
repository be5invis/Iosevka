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

var escapeHTML = function () {
	'use strict';
	var matchHtmlRegExp = /["'&<>]/;
	function escapeHTML(string) {
		var str = '' + string;
		var match = matchHtmlRegExp.exec(str);

		if (!match) {
			return str;
		}

		var escape;
		var html = '';
		var index = 0;
		var lastIndex = 0;

		for (index = match.index; index < str.length; index++) {
			switch (str.charCodeAt(index)) {
				case 34: // "
					escape = '&quot;';
					break;
				case 38: // &
					escape = '&amp;';
					break;
				case 39: // '
					escape = '&#39;';
					break;
				case 60: // <
					escape = '&lt;';
					break;
				case 62: // >
					escape = '&gt;';
					break;
				default:
					continue;
			}

			if (lastIndex !== index) {
				html += str.substring(lastIndex, index);
			}

			lastIndex = index + 1;
			html += escape;
		}

		return lastIndex !== index
			? html + str.substring(lastIndex, index)
			: html;
	}
	return escapeHTML;
}();


function TAG(ltag) { return function (s) { return { ltag: ltag, s: s } } }
var arw2 = TAG('arrow2');
var logc = TAG('logic');
var cmpr = TAG('cmpr');
var brst = TAG('brst');
var dopr = TAG('dotoper');

var indexPage = new Vue({
	el: 'body',
	data: {
		version: "1.11.2",
		codename: "Klaes-2",
		themes: ['color-light', 'color-dark'],
		snippets: [],
		snippet: 'javascript',
		theme: 'color-dark',
		ligationSamples: [
			[arw2('-<<'), arw2('-<'), arw2('-<-'), '<--', '<---', arw2('<<-'), '<-', '->', arw2('->>'), '-->', '--->', arw2('->-'), arw2('>-'), arw2('>>-'), '<->', '<-->', '<--->', '<---->', '<!--'],
			[arw2('=<<'), arw2('=<'), arw2('=<='), '<==', '<===', arw2('<<='), cmpr('<='), '=>', arw2('=>>'), '==>', '===>', arw2('=>='), cmpr('>='), arw2('>>='), '<=>', '<==>', '<===>', '<====>', '<!---'],
			['<----------------', '---------------->', '<===============>', 'a:b', 'a::b', 'a:::b', logc('a\\/b'), logc('a/\\b')],
			[':=', ':-', ':+', '<*', '<*>', '*>', dopr('<.'), dopr('<.>'), dopr('.>'), '+:', '-:', '=:', '<******>', brst('(* comm *)')]
		],
		ligationSets: [
			{ tag: 'calt', desc: 'Default setting in text editors', group: [] },
			{ tag: 'XFST', tagName: 'XML0, XFS0, XFST', desc: 'ML, OCaml, F#, F*', group: ['brst', 'logic', 'ml'] },
			{ tag: 'SWFT', tagName: 'SWFT, XPTL', desc: 'Swift, PatEL', group: ['arrow2'] },
			{
				tag: 'XHS0', tagName: 'XHS0, XIDR, XELM, PURS',
				desc: 'Haskell, Idris, Elm, PureScript', group: ['arrow2', 'dotoper', 'logic']
			},
			{
				tag: 'XV00', tagName: 'XV00',
				desc: 'Coq', group: ['arrow2', 'dotoper', 'logic', 'brst']
			}
		],
		opentypeSamples: [
			{
				title: "Stylistic Sets",
				sampleText: "@real fox.quick(h){ *is_brown && it_jumps_over(doges.lazy) } 0123456789",
				stress: 'agil*0_{}@',
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
					{ tag: 'cv33', sample: '@' },
					{ tag: 'cv34', sample: 'ß' },
					{ tag: 'cv35', sample: 'ß' },
					{ tag: 'cv36', sample: '{' },
					{ tag: 'cv37', sample: '{' }
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
		},
		elabSample: function (g, s) {
			if (typeof s === 'string') {
				return '<em>' + escapeHTML(s) + '</em>'
			} else if (s.ltag && g.indexOf(s.ltag) >= 0) {
				return '<em>' + escapeHTML(s.s) + '</em>'
			} else {
				return '<s>' + escapeHTML(s.s) + '</s>'
			}
		}
	}
});
indexPage.snippets = indexPage.$children.map(function (e) { return e.name }).filter(function (x) { return !!x }).sort();
