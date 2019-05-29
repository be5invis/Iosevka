function padzero(s, n) {
	while (s.length < n) s = "0" + s;
	return s;
}
var BLOCKSIZE = 16 * 4;
var fonts = [
	[
		{ name: "iosevka-thin", cls: "thin", display: "Thin" },
		{ name: "iosevka-slab-thin", cls: "slab thin", display: "Slab Thin" },
		{ name: "iosevka-thinitalic", cls: "thin italic", display: "Thin Italic" },
		{ name: "iosevka-slab-thinitalic", cls: "slab thin italic", display: "Slab Thin Italic" },
		{ name: "iosevka-thinoblique", cls: "thin oblique", display: "Thin Oblique" },
		{ name: "iosevka-slab-thinoblique", cls: "slab thin oblique", display: "Slab Thin Oblique" }
	],
	[
		{ name: "iosevka-extralight", cls: "extralight", display: "Extralight" },
		{ name: "iosevka-slab-extralight", cls: "slab extralight", display: "Slab Extralight" },
		{
			name: "iosevka-extralightitalic",
			cls: "extralight italic",
			display: "Extralight Italic"
		},
		{
			name: "iosevka-slab-extralightitalic",
			cls: "slab extralight italic",
			display: "Slab Extralight Italic"
		},
		{
			name: "iosevka-extralightoblique",
			cls: "extralight oblique",
			display: "Extralight Oblique"
		},
		{
			name: "iosevka-slab-extralightoblique",
			cls: "slab extralight oblique",
			display: "Slab Extralight Oblique"
		}
	],
	[
		{ name: "iosevka-light", cls: "light", display: "Light" },
		{ name: "iosevka-slab-light", cls: "slab light", display: "Slab Light" },
		{ name: "iosevka-lightitalic", cls: "light italic", display: "Light Italic" },
		{
			name: "iosevka-slab-lightitalic",
			cls: "slab light italic",
			display: "Slab Light Italic"
		},
		{ name: "iosevka-lightoblique", cls: "light oblique", display: "Light Oblique" },
		{
			name: "iosevka-slab-lightoblique",
			cls: "slab light oblique",
			display: "Slab Light Oblique"
		}
	],
	[
		{ name: "iosevka-regular", cls: "", display: "Regular" },
		{ name: "iosevka-slab-regular", cls: "slab", display: "Slab" },
		{ name: "iosevka-italic", cls: "italic", display: "Italic" },
		{ name: "iosevka-slab-italic", cls: "slab italic", display: "Slab Italic" },
		{ name: "iosevka-oblique", cls: "oblique", display: "Oblique" },
		{ name: "iosevka-slab-oblique", cls: "slab oblique", display: "Slab Oblique" }
	],
	[
		{ name: "iosevka-medium", cls: "medium", display: "Medium" },
		{ name: "iosevka-slab-medium", cls: "slab medium", display: "Slab Medium" },
		{ name: "iosevka-mediumitalic", cls: "medium italic", display: "Medium Italic" },
		{
			name: "iosevka-slab-mediumitalic",
			cls: "slab medium italic",
			display: "Slab Medium Italic"
		},
		{ name: "iosevka-mediumoblique", cls: "medium oblique", display: "Medium Oblique" },
		{
			name: "iosevka-slab-mediumoblique",
			cls: "slab medium oblique",
			display: "Slab Medium Oblique"
		}
	],
	[
		{ name: "iosevka-semibold", cls: "semibold", display: "Semibold" },
		{ name: "iosevka-slab-semibold", cls: "slab semibold", display: "Slab Semibold" },
		{ name: "iosevka-semibolditalic", cls: "semibold italic", display: "Semibold Italic" },
		{
			name: "iosevka-slab-semibolditalic",
			cls: "slab semibold italic",
			display: "Slab Semibold Italic"
		},
		{ name: "iosevka-semiboldoblique", cls: "semibold oblique", display: "Semibold Oblique" },
		{
			name: "iosevka-slab-semiboldoblique",
			cls: "slab semibold oblique",
			display: "Slab Semibold Oblique"
		}
	],
	[
		{ name: "iosevka-bold", cls: "bold", display: "Bold" },
		{ name: "iosevka-slab-bold", cls: "slab bold", display: "Slab Bold" },
		{ name: "iosevka-bolditalic", cls: "bold italic", display: "Bold Italic" },
		{ name: "iosevka-slab-bolditalic", cls: "slab bold italic", display: "Slab Bold Italic" },
		{ name: "iosevka-boldoblique", cls: "bold oblique", display: "Bold Oblique" },
		{ name: "iosevka-slab-boldoblique", cls: "slab bold oblique", display: "Slab Bold Oblique" }
	],
	[
		{ name: "iosevka-extrabold", cls: "extrabold", display: "Extrabold" },
		{ name: "iosevka-slab-extrabold", cls: "slab extrabold", display: "Slab Extrabold" },
		{ name: "iosevka-extrabolditalic", cls: "extrabold italic", display: "Extrabold Italic" },
		{
			name: "iosevka-slab-extrabolditalic",
			cls: "slab extrabold italic",
			display: "Slab Extrabold Italic"
		},
		{
			name: "iosevka-extraboldoblique",
			cls: "extrabold oblique",
			display: "Extrabold Oblique"
		},
		{
			name: "iosevka-slab-extraboldoblique",
			cls: "slab extrabold oblique",
			display: "Slab Extrabold Oblique"
		}
	],
	[
		{ name: "iosevka-heavy", cls: "heavy", display: "Heavy" },
		{ name: "iosevka-slab-heavy", cls: "slab heavy", display: "Slab Heavy" },
		{ name: "iosevka-heavyitalic", cls: "heavy italic", display: "Heavy Italic" },
		{
			name: "iosevka-slab-heavyitalic",
			cls: "slab heavy italic",
			display: "Slab Heavy Italic"
		},
		{ name: "iosevka-heavyoblique", cls: "heavy oblique", display: "Heavy Oblique" },
		{
			name: "iosevka-slab-heavyoblique",
			cls: "slab heavy oblique",
			display: "Slab Heavy Oblique"
		}
	]
];
var REGULAR = 3;
var lipsums = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper ipsum quam, at molestie libero euismod vitae. Etiam vehicula felis mi, et ultricies libero consequat at. Donec consequat, nunc id elementum tempor, lectus orci vulputate leo, eget lobortis lectus nulla sed orci. Donec in dolor non orci aliquet gravida. Nulla volutpat magna et nulla pretium, quis consequat nibh euismod. Suspendisse eget metus enim. Fusce vulputate scelerisque eros et consequat. Quisque dapibus accumsan augue, et semper lectus vehicula sit amet. Ut ornare venenatis tortor, non gravida tellus mattis interdum. In hac habitasse platea dictumst. Donec interdum commodo ex eu tincidunt. Curabitur non fermentum enim. Proin luctus orci ut commodo auctor. Pellentesque accumsan id sem eu semper. Sed non pharetra nibh. Vivamus mattis luctus arcu, a rutrum dui venenatis sit amet. aja ojo ojoined",
	"Troh tper es sos, bo slisxil spôrtjư uzx, cxital posteluf hrvatzem ili bi. Tenis lubôvijm roksăfnâvơi da din. Bo cxtir dajte lubim onă, dev ti silăju môrkva vecxer. Din om leto glfădju problêm. Sâm slơzxju răzumim vnimanie na, vsê ăzia kưdrju prôgram nô. Slôzxju zavoduf nơ den, hcê licơ sxkol toplju so. Vi knigis sidili polozxij bil, ne polnfju ovơcxjư dla, es ônâ mamâ pisajut mălôstis.",
	"Жят эним либриз аюдиам ад. Мыа ан одео нонумй опортэры, но дуо вэре эчжынт ыпикурэи. Ан вим алёквюам пыртенакж. Эжт но оратио факэтэ, дольорэ индоктум дыфинитеоным эжт ты.",
	"Κυεμ ορατιο δολορες υσυ εα, θε φιξ βωνορυμ σωνσεπθαμ, αδχυς δεφινιθιονεμ ιν εσθ. Υθ εσε ινιμισυς περ, περ ποσθυλανθ ινστρυσθιορ εα. Ναμ μυνδι θαθιων φερθερεμ νο, εσε ινερμις περφεσθο ετ μεα. Θε νες θωτα ρεφορμιδανς, ινερμις φασιλισις ετ σεα. Μελ λυδυς ταντας δελενιτι υθ, φις λιβερ σονγυε ηομερω ατ. Σεδ θριθανι συαφιθαθε γυβεργρεν ευ, ινθελλεγαμ συσιπιαντυρ δεφινιθιονεμ εα υσυ, ει κυο θαλε φερι ινθελλεγαμ. Φερο ασεντιορ θε μει, μαιορυμ γυβεργρεν αδ φιξ."
];
var sampleSentences = [
	{
		code: "en",
		lang: "English",
		sample: "Provide examples of how Jacky cheated on the big quiz. 1234567890"
	},
	{
		lang: "Powerline",
		sample:
			'<span style="background:black;color:white"> NORMAL </span><span style="background:#ccc;color:black;font-style:normal">\uE0B0</span><span style="background:#ccc;color:black"> <span style="font-style:normal">\uE0A0</span> master <span style="font-style:normal">\uE0B1</span> glyphs/powerline.patel </span><span style="background:#eee;color:#ccc;font-style:normal">\uE0B0</span><span style="background:#eee;color:#555">      dos <span style="font-style:normal">\uE0B3</span> utf-8 <span style="font-style:normal">\uE0B3</span> PatEL </span><span style="background:#eee;color:#ccc;font-style:normal">\uE0B2</span><span style="background:#ccc;color:black"> 2% </span><span style="background:#ccc;color:black;font-style:normal">\uE0B2</span><span style="color:white;background:black"> \uE0A1 1:1 </span>'
	},
	{ lang: "IPA", sample: "[ɢʷɯʔ.nas.doːŋ.kʰlja] [ŋan.ȵʑi̯wo.ɕi̯uĕn.ɣwa]" },
	{
		code: "bg",
		lang: "Bulgarian",
		sample: "Я, пазачът Вальо уж бди, а скришом хапва кюфтенца зад щайгите."
	},
	{
		code: "cs",
		lang: "Czech",
		sample:
			"Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu."
	},
	{
		code: "fi",
		lang: "Finnish",
		sample: "Charles Darwin jammaili Åken hevixylofonilla Qatarin yöpub Zeligissä."
	},
	{
		code: "fr",
		lang: "French",
		sample: "Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi."
	},
	{
		code: "de",
		lang: "German",
		sample: "Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Waſſerschloſʒ"
	},
	{
		code: "el",
		lang: "Greek",
		sample: "Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός."
	},
	{
		code: "el",
		lang: "Ancient Greek",
		sample: "Ἄδμηθ’, ὁρᾷς γὰρ τἀμὰ πράγμαθ' ὡς ἔχει, λέξαι θέλω σοι πρὶν θανεῖν ἃ βούλομαι. "
	},
	{
		code: "gn",
		lang: "Guarani",
		sample:
			"Hĩlandiagua kuñanguéra oho peteĩ saʼyju ypaʼũme Gavõme omboʼe hag̃ua ingyleñeʼẽ mitãnguérare neʼẽndyʼỹ."
	},
	{
		code: "hu",
		lang: "Hungarian",
		sample: "Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít."
	},
	{
		code: "is",
		lang: "Icelandic",
		sample: "Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa."
	},
	{
		code: "ga",
		lang: "Irish",
		sample: "Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig."
	},
	{
		code: "lv",
		lang: "Latvian",
		sample: "Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku."
	},
	{
		code: "lt",
		lang: "Lithuanian",
		sample: "Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą."
	},
	{
		code: "mk",
		lang: "Macedonian",
		sample: "Ѕидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех."
	},
	{
		code: "nb",
		lang: "Norwegian",
		sample: "Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz"
	},
	{ code: "pl", lang: "Polish", sample: "Pchnąć w tę łódź jeża lub ośm skrzyń fig." },
	{
		code: "pt",
		lang: "Portuguese",
		sample:
			"Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português."
	},
	{
		code: "ro",
		lang: "Romanian",
		sample: "Înjurând pițigăiat, zoofobul comandă vexat whisky și tequila."
	},
	{
		code: "ru",
		lang: "Russian",
		sample:
			"Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства."
	},
	{
		code: "sr",
		lang: "Serbian",
		sample: "Ајшо, лепото и чежњо, за љубав срца мога дођи у Хаџиће на кафу.",
		comment: " # Yes, we have Serbian variants!"
	},
	{
		code: "es",
		lang: "Spainish",
		sample:
			"Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú."
	},
	{ code: "tr", lang: "Turkish", sample: "Pijamalı hasta yağız şoföre çabucak güvendi." },
	{
		code: "uk",
		lang: "Ukrainian",
		sample: "Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!"
	}
];

var blockData = [
	{ from: 0x0000, to: 0x007f, name: "Basic Latin" },
	{ from: 0x0080, to: 0x00ff, name: "Latin‑1 Supplement" },
	{ from: 0x0100, to: 0x017f, name: "Latin Extended‑A" },
	{ from: 0x0180, to: 0x024f, name: "Latin Extended‑B" },
	{ from: 0x0250, to: 0x02af, name: "IPA Extensions" },
	{ from: 0x02b0, to: 0x02ff, name: "Spacing Modifier Letters" },
	{ from: 0x0300, to: 0x036f, name: "Combining Diacritical Marks" },
	{ from: 0x0370, to: 0x03ff, name: "Greek\xA0and Coptic" },
	{ from: 0x0400, to: 0x04ff, name: "Cyrillic" },
	{ from: 0x0500, to: 0x052f, name: "Cyrillic Supplement" },
	{ from: 0x0530, to: 0x058f, name: "Armenian" },
	{ from: 0x0590, to: 0x05ff, name: "Hebrew" },
	{ from: 0x0600, to: 0x06ff, name: "Arabic" },
	{ from: 0x0700, to: 0x074f, name: "Syriac" },
	{ from: 0x0750, to: 0x077f, name: "Arabic Supplement" },
	{ from: 0x0780, to: 0x07bf, name: "Thaana" },
	{ from: 0x07c0, to: 0x07ff, name: "NKo" },
	{ from: 0x0800, to: 0x083f, name: "Samaritan" },
	{ from: 0x0840, to: 0x085f, name: "Mandaic" },
	{ from: 0x08a0, to: 0x08ff, name: "Arabic Extended‑A" },
	{ from: 0x0900, to: 0x097f, name: "Devanagari" },
	{ from: 0x0980, to: 0x09ff, name: "Bengali" },
	{ from: 0x0a00, to: 0x0a7f, name: "Gurmukhi" },
	{ from: 0x0a80, to: 0x0aff, name: "Gujarati" },
	{ from: 0x0b00, to: 0x0b7f, name: "Oriya" },
	{ from: 0x0b80, to: 0x0bff, name: "Tamil" },
	{ from: 0x0c00, to: 0x0c7f, name: "Telugu" },
	{ from: 0x0c80, to: 0x0cff, name: "Kannada" },
	{ from: 0x0d00, to: 0x0d7f, name: "Malayalam" },
	{ from: 0x0d80, to: 0x0dff, name: "Sinhala" },
	{ from: 0x0e00, to: 0x0e7f, name: "Thai" },
	{ from: 0x0e80, to: 0x0eff, name: "Lao" },
	{ from: 0x0f00, to: 0x0fff, name: "Tibetan" },
	{ from: 0x1000, to: 0x109f, name: "Myanmar" },
	{ from: 0x10a0, to: 0x10ff, name: "Georgian" },
	{ from: 0x1100, to: 0x11ff, name: "Hangul Jamo" },
	{ from: 0x1200, to: 0x137f, name: "Ethiopic" },
	{ from: 0x1380, to: 0x139f, name: "Ethiopic Supplement" },
	{ from: 0x13a0, to: 0x13ff, name: "Cherokee" },
	{ from: 0x1400, to: 0x167f, name: "Unified Canadian Aboriginal Syllabics" },
	{ from: 0x1680, to: 0x169f, name: "Ogham" },
	{ from: 0x16a0, to: 0x16ff, name: "Runic" },
	{ from: 0x1700, to: 0x171f, name: "Tagalog" },
	{ from: 0x1720, to: 0x173f, name: "Hanunoo" },
	{ from: 0x1740, to: 0x175f, name: "Buhid" },
	{ from: 0x1760, to: 0x177f, name: "Tagbanwa" },
	{ from: 0x1780, to: 0x17ff, name: "Khmer" },
	{ from: 0x1800, to: 0x18af, name: "Mongolian" },
	{ from: 0x18b0, to: 0x18ff, name: "Unified Canadian Aboriginal Syllabics Extended" },
	{ from: 0x1900, to: 0x194f, name: "Limbu" },
	{ from: 0x1950, to: 0x197f, name: "Tai Le" },
	{ from: 0x1980, to: 0x19df, name: "New Tai Lue" },
	{ from: 0x19e0, to: 0x19ff, name: "Khmer Symbols" },
	{ from: 0x1a00, to: 0x1a1f, name: "Buginese" },
	{ from: 0x1a20, to: 0x1aaf, name: "Tai Tham" },
	{ from: 0x1ab0, to: 0x1aff, name: "Combining Diacritical Marks Extended" },
	{ from: 0x1b00, to: 0x1b7f, name: "Balinese" },
	{ from: 0x1b80, to: 0x1bbf, name: "Sundanese" },
	{ from: 0x1bc0, to: 0x1bff, name: "Batak" },
	{ from: 0x1c00, to: 0x1c4f, name: "Lepcha" },
	{ from: 0x1c50, to: 0x1c7f, name: "Ol Chiki" },
	{ from: 0x1cc0, to: 0x1ccf, name: "Sundanese Supplement" },
	{ from: 0x1cd0, to: 0x1cff, name: "Vedic Extensions" },
	{ from: 0x1d00, to: 0x1d7f, name: "Phonetic Extensions" },
	{ from: 0x1d80, to: 0x1dbf, name: "Phonetic Extensions Supplement" },
	{ from: 0x1dc0, to: 0x1dff, name: "Combining Diacritical Marks Supplement" },
	{ from: 0x1e00, to: 0x1eff, name: "Latin Extended Additional" },
	{ from: 0x1f00, to: 0x1fff, name: "Greek Extended" },
	{ from: 0x2000, to: 0x206f, name: "General Punctuation" },
	{ from: 0x2070, to: 0x209f, name: "Superscripts\xA0and Subscripts" },
	{ from: 0x20a0, to: 0x20cf, name: "Currency Symbols" },
	{ from: 0x20d0, to: 0x20ff, name: "Combining Diacritical Marks for Symbols" },
	{ from: 0x2100, to: 0x214f, name: "Letterlike Symbols" },
	{ from: 0x2150, to: 0x218f, name: "Number Forms" },
	{ from: 0x2190, to: 0x21ff, name: "Arrows" },
	{ from: 0x2200, to: 0x22ff, name: "Mathematical Operators" },
	{ from: 0x2300, to: 0x23ff, name: "Miscellaneous Technical" },
	{ from: 0x2400, to: 0x243f, name: "Control Pictures" },
	{ from: 0x2440, to: 0x245f, name: "Optical Character Recognition" },
	{ from: 0x2460, to: 0x24ff, name: "Enclosed Alphanumerics" },
	{ from: 0x2500, to: 0x257f, name: "Box Drawing" },
	{ from: 0x2580, to: 0x259f, name: "Block Elements" },
	{ from: 0x25a0, to: 0x25ff, name: "Geometric Shapes" },
	{ from: 0x2600, to: 0x26ff, name: "Miscellaneous Symbols" },
	{ from: 0x2700, to: 0x27bf, name: "Dingbats" },
	{ from: 0x27c0, to: 0x27ef, name: "Miscellaneous Mathematical Symbols‑A" },
	{ from: 0x27f0, to: 0x27ff, name: "Supplemental Arrows‑A" },
	{ from: 0x2800, to: 0x28ff, name: "Braille Patterns" },
	{ from: 0x2900, to: 0x297f, name: "Supplemental Arrows‑B" },
	{ from: 0x2980, to: 0x29ff, name: "Miscellaneous Mathematical Symbols‑B" },
	{ from: 0x2a00, to: 0x2aff, name: "Supplemental Mathematical Operators" },
	{ from: 0x2b00, to: 0x2bff, name: "Miscellaneous Symbols\xA0and Arrows" },
	{ from: 0x2c00, to: 0x2c5f, name: "Glagolitic" },
	{ from: 0x2c60, to: 0x2c7f, name: "Latin Extended‑C" },
	{ from: 0x2c80, to: 0x2cff, name: "Coptic" },
	{ from: 0x2d00, to: 0x2d2f, name: "Georgian Supplement" },
	{ from: 0x2d30, to: 0x2d7f, name: "Tifinagh" },
	{ from: 0x2d80, to: 0x2ddf, name: "Ethiopic Extended" },
	{ from: 0x2de0, to: 0x2dff, name: "Cyrillic Extended‑A" },
	{ from: 0x2e00, to: 0x2e7f, name: "Supplemental Punctuation" },
	{ from: 0x2e80, to: 0x2eff, name: "CJK Radicals Supplement" },
	{ from: 0x2f00, to: 0x2fdf, name: "Kangxi Radicals" },
	{ from: 0x2ff0, to: 0x2fff, name: "Ideographic Description Characters" },
	{ from: 0x3000, to: 0x303f, name: "CJK Symbols\xA0and Punctuation" },
	{ from: 0x3040, to: 0x309f, name: "Hiragana" },
	{ from: 0x30a0, to: 0x30ff, name: "Katakana" },
	{ from: 0x3100, to: 0x312f, name: "Bopomofo" },
	{ from: 0x3130, to: 0x318f, name: "Hangul Compatibility Jamo" },
	{ from: 0x3190, to: 0x319f, name: "Kanbun" },
	{ from: 0x31a0, to: 0x31bf, name: "Bopomofo Extended" },
	{ from: 0x31c0, to: 0x31ef, name: "CJK Strokes" },
	{ from: 0x31f0, to: 0x31ff, name: "Katakana Phonetic Extensions" },
	{ from: 0x3200, to: 0x32ff, name: "Enclosed CJK Letters\xA0and Months" },
	{ from: 0x3300, to: 0x33ff, name: "CJK Compatibility" },
	{ from: 0x3400, to: 0x4dbf, name: "CJK Unified Ideographs Extension A" },
	{ from: 0x4dc0, to: 0x4dff, name: "Yijing Hexagram Symbols" },
	{ from: 0x4e00, to: 0x9fff, name: "CJK Unified Ideographs" },
	{ from: 0xa000, to: 0xa48f, name: "Yi Syllables" },
	{ from: 0xa490, to: 0xa4cf, name: "Yi Radicals" },
	{ from: 0xa4d0, to: 0xa4ff, name: "Lisu" },
	{ from: 0xa500, to: 0xa63f, name: "Vai" },
	{ from: 0xa640, to: 0xa69f, name: "Cyrillic Extended‑B" },
	{ from: 0xa6a0, to: 0xa6ff, name: "Bamum" },
	{ from: 0xa700, to: 0xa71f, name: "Modifier Tone Letters" },
	{ from: 0xa720, to: 0xa7ff, name: "Latin Extended‑D" },
	{ from: 0xa800, to: 0xa82f, name: "Syloti Nagri" },
	{ from: 0xa830, to: 0xa83f, name: "Common Indic Number Forms" },
	{ from: 0xa840, to: 0xa87f, name: "Phags‑pa" },
	{ from: 0xa880, to: 0xa8df, name: "Saurashtra" },
	{ from: 0xa8e0, to: 0xa8ff, name: "Devanagari Extended" },
	{ from: 0xa900, to: 0xa92f, name: "Kayah Li" },
	{ from: 0xa930, to: 0xa95f, name: "Rejang" },
	{ from: 0xa960, to: 0xa97f, name: "Hangul Jamo Extended‑A" },
	{ from: 0xa980, to: 0xa9df, name: "Javanese" },
	{ from: 0xa9e0, to: 0xa9ff, name: "Myanmar Extended‑B" },
	{ from: 0xaa00, to: 0xaa5f, name: "Cham" },
	{ from: 0xaa60, to: 0xaa7f, name: "Myanmar Extended‑A" },
	{ from: 0xaa80, to: 0xaadf, name: "Tai Viet" },
	{ from: 0xaae0, to: 0xaaff, name: "Meetei Mayek Extensions" },
	{ from: 0xab00, to: 0xab2f, name: "Ethiopic Extended‑A" },
	{ from: 0xab30, to: 0xab6f, name: "Latin Extended‑E" },
	{ from: 0xab70, to: 0xabbf, name: "Cherokee Supplement" },
	{ from: 0xabc0, to: 0xabff, name: "Meetei Mayek" },
	{ from: 0xac00, to: 0xd7af, name: "Hangul Syllables" },
	{ from: 0xd7b0, to: 0xd7ff, name: "Hangul Jamo Extended‑B" },
	{ from: 0xd800, to: 0xdb7f, name: "High Surrogates" },
	{ from: 0xdb80, to: 0xdbff, name: "High Private Use Surrogates" },
	{ from: 0xdc00, to: 0xdfff, name: "Low Surrogates" },
	{ from: 0xe000, to: 0xf8ff, name: "Private Use Area", compact: true },
	{ from: 0xf900, to: 0xfaff, name: "CJK Compatibility Ideographs" },
	{ from: 0xfb00, to: 0xfb4f, name: "Alphabetic Presentation Forms" },
	{ from: 0xfb50, to: 0xfdff, name: "Arabic Presentation Forms‑A" },
	{ from: 0xfe00, to: 0xfe0f, name: "Variation Selectors" },
	{ from: 0xfe10, to: 0xfe1f, name: "Vertical Forms" },
	{ from: 0xfe20, to: 0xfe2f, name: "Combining Half Marks" },
	{ from: 0xfe30, to: 0xfe4f, name: "CJK Compatibility Forms" },
	{ from: 0xfe50, to: 0xfe6f, name: "Small Form Variants" },
	{ from: 0xfe70, to: 0xfeff, name: "Arabic Presentation Forms‑B" },
	{ from: 0xff00, to: 0xffef, name: "Halfwidth\xA0and Fullwidth Forms" },
	{ from: 0xfff0, to: 0xffff, name: "Specials" },
	{ from: 0x10000, to: 0x1007f, name: "Linear B Syllabary" },
	{ from: 0x10080, to: 0x100ff, name: "Linear B Ideograms" },
	{ from: 0x10100, to: 0x1013f, name: "Aegean Numbers" },
	{ from: 0x10140, to: 0x1018f, name: "Ancient Greek Numbers" },
	{ from: 0x10190, to: 0x101cf, name: "Ancient Symbols" },
	{ from: 0x101d0, to: 0x101ff, name: "Phaistos Disc" },
	{ from: 0x10280, to: 0x1029f, name: "Lycian" },
	{ from: 0x102a0, to: 0x102df, name: "Carian" },
	{ from: 0x102e0, to: 0x102ff, name: "Coptic Epact Numbers" },
	{ from: 0x10300, to: 0x1032f, name: "Old Italic" },
	{ from: 0x10330, to: 0x1034f, name: "Gothic" },
	{ from: 0x10350, to: 0x1037f, name: "Old Permic" },
	{ from: 0x10380, to: 0x1039f, name: "Ugaritic" },
	{ from: 0x103a0, to: 0x103df, name: "Old Persian" },
	{ from: 0x10400, to: 0x1044f, name: "Deseret" },
	{ from: 0x10450, to: 0x1047f, name: "Shavian" },
	{ from: 0x10480, to: 0x104af, name: "Osmanya" },
	{ from: 0x10500, to: 0x1052f, name: "Elbasan" },
	{ from: 0x10530, to: 0x1056f, name: "Caucasian Albanian" },
	{ from: 0x10600, to: 0x1077f, name: "Linear A" },
	{ from: 0x10800, to: 0x1083f, name: "Cypriot Syllabary" },
	{ from: 0x10840, to: 0x1085f, name: "Imperial Aramaic" },
	{ from: 0x10860, to: 0x1087f, name: "Palmyrene" },
	{ from: 0x10880, to: 0x108af, name: "Nabataean" },
	{ from: 0x108e0, to: 0x108ff, name: "Hatran" },
	{ from: 0x10900, to: 0x1091f, name: "Phoenician" },
	{ from: 0x10920, to: 0x1093f, name: "Lydian" },
	{ from: 0x10980, to: 0x1099f, name: "Meroitic Hieroglyphs" },
	{ from: 0x109a0, to: 0x109ff, name: "Meroitic Cursive" },
	{ from: 0x10a00, to: 0x10a5f, name: "Kharoshthi" },
	{ from: 0x10a60, to: 0x10a7f, name: "Old South Arabian" },
	{ from: 0x10a80, to: 0x10a9f, name: "Old North Arabian" },
	{ from: 0x10ac0, to: 0x10aff, name: "Manichaean" },
	{ from: 0x10b00, to: 0x10b3f, name: "Avestan" },
	{ from: 0x10b40, to: 0x10b5f, name: "Inscriptional Parthian" },
	{ from: 0x10b60, to: 0x10b7f, name: "Inscriptional Pahlavi" },
	{ from: 0x10b80, to: 0x10baf, name: "Psalter Pahlavi" },
	{ from: 0x10c00, to: 0x10c4f, name: "Old Turkic" },
	{ from: 0x10c80, to: 0x10cff, name: "Old Hungarian" },
	{ from: 0x10e60, to: 0x10e7f, name: "Rumi Numeral Symbols" },
	{ from: 0x11000, to: 0x1107f, name: "Brahmi" },
	{ from: 0x11080, to: 0x110cf, name: "Kaithi" },
	{ from: 0x110d0, to: 0x110ff, name: "Sora Sompeng" },
	{ from: 0x11100, to: 0x1114f, name: "Chakma" },
	{ from: 0x11150, to: 0x1117f, name: "Mahajani" },
	{ from: 0x11180, to: 0x111df, name: "Sharada" },
	{ from: 0x111e0, to: 0x111ff, name: "Sinhala Archaic Numbers" },
	{ from: 0x11200, to: 0x1124f, name: "Khojki" },
	{ from: 0x11280, to: 0x112af, name: "Multani" },
	{ from: 0x112b0, to: 0x112ff, name: "Khudawadi" },
	{ from: 0x11300, to: 0x1137f, name: "Grantha" },
	{ from: 0x11480, to: 0x114df, name: "Tirhuta" },
	{ from: 0x11580, to: 0x115ff, name: "Siddham" },
	{ from: 0x11600, to: 0x1165f, name: "Modi" },
	{ from: 0x11680, to: 0x116cf, name: "Takri" },
	{ from: 0x11700, to: 0x1173f, name: "Ahom" },
	{ from: 0x118a0, to: 0x118ff, name: "Warang Citi" },
	{ from: 0x11ac0, to: 0x11aff, name: "Pau Cin Hau" },
	{ from: 0x12000, to: 0x123ff, name: "Cuneiform" },
	{ from: 0x12400, to: 0x1247f, name: "Cuneiform Numbers\xA0and Punctuation" },
	{ from: 0x12480, to: 0x1254f, name: "Early Dynastic Cuneiform" },
	{ from: 0x13000, to: 0x1342f, name: "Egyptian Hieroglyphs" },
	{ from: 0x14400, to: 0x1467f, name: "Anatolian Hieroglyphs" },
	{ from: 0x16800, to: 0x16a3f, name: "Bamum Supplement" },
	{ from: 0x16a40, to: 0x16a6f, name: "Mro" },
	{ from: 0x16ad0, to: 0x16aff, name: "Bassa Vah" },
	{ from: 0x16b00, to: 0x16b8f, name: "Pahawh Hmong" },
	{ from: 0x16f00, to: 0x16f9f, name: "Miao" },
	{ from: 0x1b000, to: 0x1b0ff, name: "Kana Supplement" },
	{ from: 0x1bc00, to: 0x1bc9f, name: "Duployan" },
	{ from: 0x1bca0, to: 0x1bcaf, name: "Shorthand Format Controls" },
	{ from: 0x1d000, to: 0x1d0ff, name: "Byzantine Musical Symbols" },
	{ from: 0x1d100, to: 0x1d1ff, name: "Musical Symbols" },
	{ from: 0x1d200, to: 0x1d24f, name: "Ancient Greek Musical Notation" },
	{ from: 0x1d300, to: 0x1d35f, name: "Tai Xuan Jing Symbols" },
	{ from: 0x1d360, to: 0x1d37f, name: "Counting Rod Numerals" },
	{ from: 0x1d400, to: 0x1d7ff, name: "Mathematical Alphanumeric Symbols" },
	{ from: 0x1d800, to: 0x1daaf, name: "Sutton SignWriting" },
	{ from: 0x1e800, to: 0x1e8df, name: "Mende Kikakui" },
	{ from: 0x1ee00, to: 0x1eeff, name: "Arabic Mathematical Alphabetic Symbols" },
	{ from: 0x1f000, to: 0x1f02f, name: "Mahjong Tiles" },
	{ from: 0x1f030, to: 0x1f09f, name: "Domino Tiles" },
	{ from: 0x1f0a0, to: 0x1f0ff, name: "Playing Cards" },
	{ from: 0x1f100, to: 0x1f1ff, name: "Enclosed Alphanumeric Supplement" },
	{ from: 0x1f200, to: 0x1f2ff, name: "Enclosed Ideographic Supplement" },
	{ from: 0x1f300, to: 0x1f5ff, name: "Miscellaneous Symbols\xA0and Pictographs" },
	{ from: 0x1f600, to: 0x1f64f, name: "Emoticons" },
	{ from: 0x1f650, to: 0x1f67f, name: "Ornamental Dingbats" },
	{ from: 0x1f680, to: 0x1f6ff, name: "Transport\xA0and Map Symbols" },
	{ from: 0x1f700, to: 0x1f77f, name: "Alchemical Symbols" },
	{ from: 0x1f780, to: 0x1f7ff, name: "Geometric Shapes Extended" },
	{ from: 0x1f800, to: 0x1f8ff, name: "Supplemental Arrows‑C" },
	{ from: 0x1f900, to: 0x1f9ff, name: "Supplemental Symbols\xA0and Pictographs" },
	{ from: 0x20000, to: 0x2a6df, name: "CJK Unified Ideographs Extension B" },
	{ from: 0x2a700, to: 0x2b73f, name: "CJK Unified Ideographs Extension C" },
	{ from: 0x2b740, to: 0x2b81f, name: "CJK Unified Ideographs Extension D" },
	{ from: 0x2b820, to: 0x2ceaf, name: "CJK Unified Ideographs Extension E" },
	{ from: 0x2f800, to: 0x2fa1f, name: "CJK Compatibility Ideographs Supplement" },
	{ from: 0xe0000, to: 0xe007f, name: "Tags" },
	{ from: 0xe0100, to: 0xe01ef, name: "Variation Selectors Supplement" },
	{ from: 0xf0000, to: 0xfffff, name: "Supplementary Private Use Area‑A" },
	{ from: 0x100000, to: 0x10ffff, name: "Supplementary Private Use Area‑B" }
];

var display = new Vue({
	el: "#display",
	data: {
		charsHTML: "",
		samples: (function(ss) {
			var langlen = 0;
			for (var j = 0; j < ss.length; j++) {
				if (ss[j].lang.length > langlen) langlen = ss[j].lang.length;
			}
			for (var j = 0; j < ss.length; j++) {
				ss[j].spaces = new Array(langlen - ss[j].lang.length + 2).join(" ");
			}
			return ss;
		})(sampleSentences),
		currentFont: fonts[REGULAR][0],
		waterfall: [36, 28, 24, 20, 18, 16, 14, 12, 11, 10],
		blocks: [],
		waiting: 0
	},
	methods: {
		updateFont: function(item) {
			this.waiting += 1;
			display.currentFont = item;
			var nblocks = 0;
			var t = this;
			requestAnimationFrame(function fn() {
				if (nblocks < t.blocks.length) {
					t.blocks[nblocks].font = item;
					nblocks += 1;
					requestAnimationFrame(fn);
				} else {
					t.waiting -= 1;
				}
			});
		}
	},
	created: function() {
		console.log("Ready to show up.");
		this.waiting += 1;
		var t = this;
		fetch("iosevka/iosevka-regular.charmap")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var blocks = [];
				var uhash = [];
				var whash = [];
				for (var j = 0; j < data.length; j++) {
					var unicodes = data[j][1];
					if (unicodes && unicodes.length)
						for (var k = 0; k < unicodes.length; k++) {
							uhash[unicodes[k]] = data[j][0].trim();
							whash[unicodes[k]] = data[j][2];
						}
				}
				for (var blockid = 0; blockid < blockData.length; blockid++) {
					var block = blockData[blockid];
					var hasGlyphInThisBlock = false;
					var min = block.to;
					var max = block.from;
					for (var j = block.from; j <= block.to; j++)
						if (uhash[j]) {
							hasGlyphInThisBlock = true;
							if (j < min) min = j;
							if (j > max) max = j;
						}
					if (!hasGlyphInThisBlock) continue;
					var bs = Math.floor((block.compact ? min : block.from) / 16) * 16;
					var be = Math.floor((block.compact ? max : block.to) / 16) * 16 + 0x10;
					var rows = [];
					var row = null;
					for (var j = bs; j < be; j++) {
						if (j % 16 === 0) {
							if (row) rows.push(row);
							row = {
								startIndex: padzero(j.toString(16).toUpperCase(), 4),
								chars: []
							};
						}
						row.chars.push({
							name: uhash[j],
							char: (whash[j] === 1 ? "\u00A0" : "") + String.fromCodePoint(j),
							isMark: whash[j] === 1,
							isTie: whash[j] === 2
						});
					}
					if (row) rows.push(row);
					var block = {
						name: block.name,
						rows: rows,
						font: display.currentFont
					};
					blocks.push(block);
				}

				var nblocks = 0;
				requestAnimationFrame(function fn() {
					if (nblocks < blocks.length) {
						Vue.set(t.blocks, nblocks, blocks[nblocks]);
						nblocks += 1;
						requestAnimationFrame(fn);
					} else {
						t.waiting -= 1;
					}
				});
			});
	}
});
var picker = new Vue({
	el: "#picker",
	data: {
		fonts: fonts,
		current: fonts[REGULAR][0] // regular
	},
	methods: {
		choose: function(item) {
			this.current = item;
			display.updateFont(item);
		}
	}
});
