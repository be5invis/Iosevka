function padzero(s, n){
	while(s.length < n) s = '0' + s;
	return s;
}
var BLOCKSIZE = 16 * 4;
var fonts = [
	[	{name: 'iosevka-thin', cls: 'thin', display: 'Thin'}, {name: 'iosevka-slab-thin', cls: 'slab thin', display: 'Slab Thin'},
		{name: 'iosevka-thinitalic', cls:'thin italic', display: 'Thin Italic'}, {name: 'iosevka-slab-thinitalic', cls:'slab thin italic', display: 'Slab Thin Italic'},
		{name: 'iosevka-thinoblique', cls:'thin oblique', display: 'Thin Oblique'}, {name: 'iosevka-slab-thinoblique', cls:'slab thin oblique', display: 'Slab Thin Oblique'}
	],
	[	{name: 'iosevka-extralight', cls: 'extralight', display: 'Extralight'}, {name: 'iosevka-slab-extralight', cls: 'slab extralight', display: 'Slab Extralight'},
		{name: 'iosevka-extralightitalic', cls:'extralight italic', display: 'Extralight Italic'}, {name: 'iosevka-slab-extralightitalic', cls:'slab extralight italic', display: 'Slab Extralight Italic'},
		{name: 'iosevka-extralightoblique', cls:'extralight oblique', display: 'Extralight Oblique'}, {name: 'iosevka-slab-extralightoblique', cls:'slab extralight oblique', display: 'Slab Extralight Oblique'}
	],
	[	{name: 'iosevka-light', cls: 'light', display: 'Light'}, {name: 'iosevka-slab-light', cls: 'slab light', display: 'Slab Light'},
		{name: 'iosevka-lightitalic', cls:'light italic', display: 'Light Italic'}, {name: 'iosevka-slab-lightitalic', cls:'slab light italic', display: 'Slab Light Italic'},
		{name: 'iosevka-lightoblique', cls:'light oblique', display: 'Light Oblique'}, {name: 'iosevka-slab-lightoblique', cls:'slab light oblique', display: 'Slab Light Oblique'}
	],
	[	{name: 'iosevka-regular', cls: '', display: 'Regular'}, {name: 'iosevka-slab-regular', cls: 'slab', display: 'Slab'},
		{name: 'iosevka-italic', cls:'italic', display: 'Italic'}, {name: 'iosevka-slab-italic', cls:'slab italic', display: 'Slab Italic'},
		{name: 'iosevka-oblique', cls:'oblique', display: 'Oblique'}, {name: 'iosevka-slab-oblique', cls:'slab oblique', display: 'Slab Oblique'}
	],
	[	{name: 'iosevka-medium', cls: 'medium', display: 'Medium'}, {name: 'iosevka-slab-medium', cls: 'slab medium', display: 'Slab Medium'},
		{name: 'iosevkamediumitalic', cls:'medium italic', display: 'Medium Italic'}, {name: 'iosevka-slab-mediumitalic', cls:'slab medium italic', display: 'Slab Medium Italic'},
		{name: 'iosevkamediumoblique', cls:'medium oblique', display: 'Medium Oblique'}, {name: 'iosevka-slab-mediumoblique', cls:'slab medium oblique', display: 'Slab Medium Oblique'}
	],
	[	{name: 'iosevka-bold', cls: 'bold', display: 'Bold'}, {name: 'iosevka-slab-bold', cls: 'slab bold', display: 'Slab Bold'},
		{name: 'iosevka-bolditalic', cls:'bold italic', display: 'Bold Italic'}, {name: 'iosevka-slab-bolditalic', cls:'slab bold italic', display: 'Slab Bold Italic'},
		{name: 'iosevka-boldoblique', cls:'bold oblique', display: 'Bold Oblique'}, {name: 'iosevka-slab-boldoblique', cls:'slab bold oblique', display: 'Slab Bold Oblique'}
	],
	[	{name: 'iosevka-heavy', cls: 'heavy', display: 'Heavy'}, {name: 'iosevka-slab-heavy', cls: 'slab heavy', display: 'Slab Heavy'},
		{name: 'iosevka-heavyitalic', cls:'heavy italic', display: 'Heavy Italic'}, {name: 'iosevka-slab-heavyitalic', cls:'slab heavy italic', display: 'Slab Heavy Italic'},
		{name: 'iosevka-heavyoblique', cls:'heavy oblique', display: 'Heavy Oblique'}, {name: 'iosevka-slab-heavyoblique', cls:'slab heavy oblique', display: 'Slab Heavy Oblique'}
	]
];
var REGULAR = 3;
var lipsums = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper ipsum quam, at molestie libero euismod vitae. Etiam vehicula felis mi, et ultricies libero consequat at. Donec consequat, nunc id elementum tempor, lectus orci vulputate leo, eget lobortis lectus nulla sed orci. Donec in dolor non orci aliquet gravida. Nulla volutpat magna et nulla pretium, quis consequat nibh euismod. Suspendisse eget metus enim. Fusce vulputate scelerisque eros et consequat. Quisque dapibus accumsan augue, et semper lectus vehicula sit amet. Ut ornare venenatis tortor, non gravida tellus mattis interdum. In hac habitasse platea dictumst. Donec interdum commodo ex eu tincidunt. Curabitur non fermentum enim. Proin luctus orci ut commodo auctor. Pellentesque accumsan id sem eu semper. Sed non pharetra nibh. Vivamus mattis luctus arcu, a rutrum dui venenatis sit amet. aja ojo ojoined',
'Troh tper es sos, bo slisxil spôrtjư uzx, cxital posteluf hrvatzem ili bi. Tenis lubôvijm roksăfnâvơi da din. Bo cxtir dajte lubim onă, dev ti silăju môrkva vecxer. Din om leto glfădju problêm. Sâm slơzxju răzumim vnimanie na, vsê ăzia kưdrju prôgram nô. Slôzxju zavoduf nơ den, hcê licơ sxkol toplju so. Vi knigis sidili polozxij bil, ne polnfju ovơcxjư dla, es ônâ mamâ pisajut mălôstis.',
'Жят эним либриз аюдиам ад. Мыа ан одео нонумй опортэры, но дуо вэре эчжынт ыпикурэи. Ан вим алёквюам пыртенакж. Эжт но оратио факэтэ, дольорэ индоктум дыфинитеоным эжт ты.',
'Κυεμ ορατιο δολορες υσυ εα, θε φιξ βωνορυμ σωνσεπθαμ, αδχυς δεφινιθιονεμ ιν εσθ. Υθ εσε ινιμισυς περ, περ ποσθυλανθ ινστρυσθιορ εα. Ναμ μυνδι θαθιων φερθερεμ νο, εσε ινερμις περφεσθο ετ μεα. Θε νες θωτα ρεφορμιδανς, ινερμις φασιλισις ετ σεα. Μελ λυδυς ταντας δελενιτι υθ, φις λιβερ σονγυε ηομερω ατ. Σεδ θριθανι συαφιθαθε γυβεργρεν ευ, ινθελλεγαμ συσιπιαντυρ δεφινιθιονεμ εα υσυ, ει κυο θαλε φερι ινθελλεγαμ. Φερο ασεντιορ θε μει, μαιορυμ γυβεργρεν αδ φιξ.'];
var sampleSentences = [
	{code: 'en', lang: 'English', sample: 'Shaw, those twelve beige hooks are joined if I patch a young, gooey mouth.'},
	{lang: 'Powerline', sample: '<span style="background:black;color:white"> NORMAL </span><span style="background:#ccc;color:black;font-style:normal">\uE0B0</span><span style="background:#ccc;color:black"> <span style="font-style:normal">\uE0A0</span> master <span style="font-style:normal">\uE0B1</span> glyphs/powerline.patel </span><span style="background:#eee;color:#ccc;font-style:normal">\uE0B0</span><span style="background:#eee;color:#555">      dos <span style="font-style:normal">\uE0B3</span> utf-8 <span style="font-style:normal">\uE0B3</span> PatEL </span><span style="background:#eee;color:#ccc;font-style:normal">\uE0B2</span><span style="background:#ccc;color:black"> 2% </span><span style="background:#ccc;color:black;font-style:normal">\uE0B2</span><span style="color:white;background:black"> \uE0A1 1:1 </span>'},
	{lang: 'IPA', sample: '[ɢʷɯʔ.nas.doːŋ.kʰlja] [ŋan.ȵʑi̯wo.ɕi̯uĕn.ɣwa]'},
	{code: 'bg', lang: 'Bulgarian', sample: 'Я, пазачът Вальо уж бди, а скришом хапва кюфтенца зад щайгите.'},
	{code: 'cs', lang: 'Czech', sample: 'Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.'},
	{code: 'fi', lang: 'Finnish', sample: 'Charles Darwin jammaili Åken hevixylofonilla Qatarin yöpub Zeligissä.'},
	{code: 'fr', lang: 'French', sample: 'Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi.'},
	{code: 'de', lang: 'German', sample: 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.'},
	{code: 'el', lang: 'Greek', sample: 'Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός.'},
	{code: 'el', lang: 'Ancient Greek', sample: 'Ἄδμηθ’, ὁρᾷς γὰρ τἀμὰ πράγμαθ\' ὡς ἔχει, λέξαι θέλω σοι πρὶν θανεῖν ἃ βούλομαι. '},
	{code: 'hu', lang: 'Hungarian', sample: 'Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít.'},
	{code: 'is', lang: 'Icelandic', sample: 'Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa.'},
	{code: 'ga', lang: 'Irish', sample: 'Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig.'},
	{code: 'lv', lang: 'Latvian', sample: 'Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku.'},
	{code: 'lt', lang: 'Lithuanian', sample: 'Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą.'},
	{code: 'mk', lang: 'Macedonian', sample: 'Ѕидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех.'},
	{code: 'nb', lang: 'Norwegian', sample: 'Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz'},
	{code: 'pl', lang: 'Polish', sample: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig.'},
	{code: 'pt', lang: 'Portuguese', sample: 'Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.'},
	{code: 'ro', lang: 'Romanian', sample: 'Înjurând pițigăiat, zoofobul comandă vexat whisky și tequila.'},
	{code: 'ru', lang: 'Russian', sample: 'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства.'},
	{code: 'sr', lang: 'Serbian', sample: 'Ајшо, лепото и чежњо, за љубав срца мога дођи у Хаџиће на кафу.', comment:' # Yes, we have Serbian variants!'},
	{code: 'es', lang: 'Spainish', sample: 'Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú.'},
	{code: 'tr', lang: 'Turkish', sample: 'Pijamalı hasta yağız şoföre çabucak güvendi.'},
	{code: 'uk', lang: 'Ukranian', sample: 'Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!'}
]

var display = new Vue({
	el: '#display',
	data: {
		charsHTML: '',
		lipsums: [], //lipsums,
		samples: (function(ss){
			var langlen = 0;
			for(var j = 0; j < ss.length; j++){ if(ss[j].lang.length > langlen) langlen = ss[j].lang.length };
			for(var j = 0; j < ss.length; j++){ ss[j].spaces = new Array(langlen - ss[j].lang.length + 2).join(' ') };
			return ss;
		})(sampleSentences),
		currentFont: fonts[REGULAR][0],
		waterfall: [36, 28, 24, 20, 18, 16, 14, 12, 11, 10],
		sampleRows: []
	},
	ready: function(){
		this.$http.get('assets/' + this.currentFont.name + '.charmap', function(data){
			var rows = [];
			var row = null;
			var uhash = [];
			var whash = [];
			for(var j = 0; j < data.length; j++) {
				var unicodes = data[j][1];
				if(unicodes && unicodes.length) for(var k = 0; k < unicodes.length; k++){
					uhash[unicodes[k]] = data[j][0].trim()
					whash[unicodes[k]] = data[j][2]
				}
			}
			for(var block = 0; block < (65536 / BLOCKSIZE); block++) {
				var hasGlyphInThisBlock = false;
				for(j = block * BLOCKSIZE; j < (block + 1) * BLOCKSIZE; j++) if(uhash[j]){
					hasGlyphInThisBlock = true;
				}
				if(hasGlyphInThisBlock) {
					for(j = block * BLOCKSIZE; j < (block + 1) * BLOCKSIZE; j++) {
						if(j % 16 === 0) {
							if(row) rows.push(row);
							row = {startIndex : padzero(j.toString(16).toUpperCase(), 4), chars: []}
						};
						row.chars.push({
							name: uhash[j],
							char: (whash[j] ? '\u25CC' : '') + String.fromCharCode(j),
							isMark: whash[j]
						});
					}
				}
			};
			if(row) rows.push(row);
			this.sampleRows = rows;
		});
	}
});
var picker = new Vue({
	el: '#picker',
	data: {
		fonts: fonts,
		current: fonts[REGULAR][0]
	},
	methods: {
		choose: function(item){
			this.current = item;
			display.currentFont = item;
		}
	}
});