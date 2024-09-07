import * as themes from "../themes/index.mjs";

// prettier-ignore
const languages = [
    { lang: 'English',       sample: 'Shaw, those twelve beige hooks are joined if I patch a young, gooey mouth.' },
    { lang: 'IPA',           sample: '[liə̯bə̆ ɡʷɯ̹ʔ̚ daŋ˕ sŋə̆r̥ra] [ʔɹie˦ na˦ ɡɨ˨ tɕie˦] [ʔɣɛw˦˨ tɕi˦˨ ʔɨwk˦ ʔɨwk˦] [jaw⁴ tsɨ³ tʂɨ¹ ʋu² tʂi¹]', localeId :'und-fonipa' },
    { lang: 'Azerbaijani',   sample: 'Zəfər, jaketini də papağını da götür, bu axşam hava çox soyuq olacaq.', localeId :'az' },
    { lang: 'Belarusian',    sample: 'У Іўі худы жвавы чорт у зялёнай камізэльцы пабег пад’есці фаршу з юшкай.' },
    { lang: 'Breton',        sample: 'Yec’hed mat Jakez ! Skarzhit ar gwerennoù-mañ, kavet e vo gwin betek fin ho puhez.' },
    { lang: 'Bulgarian',     sample: 'Я, пазачът Вальо уж бди, а скришом хапва кюфтенца зад щайгите.', localeId :'bg' },
    { lang: 'Catalan',       sample: '«Dóna amor que seràs feliç!». Això, iŀlús company geniüt, ja és un lluït rètol blavís d’onze kWh.' },
    { lang: 'Croatian',      sample: 'Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje.' },
    { lang: 'Czech',         sample: 'Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.' },
    { lang: 'Danish',        sample: 'Quizdeltagerne spiste jordbær med fløde, mens cirkusklovnen Walther spillede på xylofon.' },
    { lang: 'Dutch',         sample: 'Pa’s wĳze lynx bezag vroom het fikse aquaduct.' },
    { lang: 'Esperanto',     sample: 'Eble ĉiu kvazaŭ-deca fuŝĥoraĵo ĝojigos homtipon.' },
    { lang: 'Estonian',      sample: 'Põdur Zagrebi tšellomängija-följetonist Ciqo külmetas kehvas garaažis.' },
    { lang: 'Finnish',       sample: 'Charles Darwin jammaili Åken hevixylofonilla Qatarin yöpub Zeligissä.' },
    { lang: 'French',        sample: 'Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi.' },
    { lang: 'German',        sample: 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.' },
    { lang: 'Greek',         sample: 'Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός.' },
    { lang: 'Ancient Greek', sample: 'Ἄδμηθ’, ὁρᾷς γὰρ τἀμὰ πράγμαθ’ ὡς ἔχει, λέξαι θέλω σοι πρὶν θανεῖν ἃ βούλομαι.' },
    { lang: 'Hungarian',     sample: 'Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít.' },
    { lang: 'Icelandic',     sample: 'Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa.' },
    { lang: 'Irish',         sample: 'Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig.' },
    { lang: 'Kurdish',       sample: 'Cem vî Feqoyê pîs zêdetir ji çar gulên xweşik hebûn.' },
    { lang: 'Latvian',       sample: 'Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku.' },
    { lang: 'Lithuanian',    sample: 'Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą.' },
    { lang: 'Macedonian',    sample: 'Ѕидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех.', localeId :'mk' },
    { lang: 'Maltese',       sample: 'Kien liebes gozz ħwejjeġ u ċraret vera qodma u m’għażluhx fil-pront.' },
    { lang: 'Norwegian',     sample: 'Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz.' },
    { lang: 'Polish',        sample: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig.', localeId: 'pl' },
    { lang: 'Portuguese',    sample: 'Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.' },
    { lang: 'Romanian',      sample: 'Înjurând pițigăiat, zoofobul comandă vexat whisky și tequila.', localeId :'ro' },
    { lang: 'Russian',       sample: 'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства.' },
    { lang: 'Serbian',       sample: 'Ајшо, лепото и чежњо, за љубав срца мога дођи у Хаџиће на кафу.', localeId: 'sr' },
    { lang: 'Slovak',        sample: 'Kŕdeľ šťastných ďatľov učí pri ústí Váhu mĺkveho koňa obhrýzať kôru a žrať čerstvé mäso.' },
    { lang: 'Slovenian',     sample: 'V kožuščku hudobnega fanta stopiclja mizar.' },
    { lang: 'Spanish',       sample: 'Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú.' },
    { lang: 'Swedish',       sample: 'Yxmördaren Julia Blomqvist på fäktning i Schweiz.' },
    { lang: 'Turkish',       sample: 'Pijamalı hasta yağız şoföre çabucak güvendi.', localeId :'tr' },
    { lang: 'Ukrainian',     sample: 'Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!' },
    { lang: 'Vietnamese',    sample: 'Do bạch kim rất quý nên sẽ dùng để lắp vô xương.', localeId :'vi' },
    { lang: 'Volapük',       sample: 'Ꞝrꞛtom jofazaris hodagudik ꞟf binoy ve cꞛl ad xilapel.' },
    { lang: 'Welsh',         sample: 'Parciais fy jac codi baw hud llawn dŵr ger tŷ Mabon.' }
];

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 24;
	const elementHeight = 1.5 * EM;
	const canvasWidth = 62 * EM;
	const canvasHeight = (2 + languages.length) * elementHeight;
	const xSplit = 11 * EM;
	let frames = [];
	for (const [j, { lang, sample, localeId }] of languages.entries()) {
		const top = canvasHeight / 2 + elementHeight * (j - languages.length / 2);
		frames.push({
			top,
			bottom: top + elementHeight,
			left: EM,
			right: xSplit,
			"horizontal-align": "left",
			"vertical-align": "center",
			contents: [
				{
					"font-family": "Iosevka",
					"font-size": EM,
					"font-weight": 600,
					"font-style": "italic",
					color: theme.title,
				},
				lang,
			],
		});
		frames.push({
			top,
			bottom: top + elementHeight,
			left: xSplit,
			right: canvasWidth - EM,
			"horizontal-align": "left",
			"vertical-align": "center",
			contents: [
				{
					"font-family": "Iosevka",
					"font-size": EM,
					...(localeId ? { lang: localeId } : {}),
					color: theme.body,
				},
				sample,
			],
		});
	}
	return { width: canvasWidth, height: canvasHeight, frames };
});
