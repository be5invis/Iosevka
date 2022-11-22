import * as themes from "../themes/index.mjs";

// prettier-ignore
const languages = [
    { lang: 'English', sample: 'Shaw, those twelve beige hooks are joined if I patch a young, gooey mouth.' },
    { lang: 'IPA', sample: '[ɢʷɯʔ.nas.doːŋ.kʰlja] [ŋan.ȵʑi̯wo.ɕi̯uĕn.ɣwa]' },
    { lang: 'Bulgarian', sample: 'Я, пазачът Вальо уж бди, а скришом хапва кюфтенца зад щайгите.', localeId :'bg' },
    { lang: 'Czech', sample: 'Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.' },
    { lang: 'Finnish', sample: 'Charles Darwin jammaili Åken hevixylofonilla Qatarin yöpub Zeligissä.' },
    { lang: 'French', sample: 'Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi.' },
    { lang: 'German', sample: 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.' },
    { lang: 'Greek', sample: 'Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός.' },
    { lang: 'Ancient Greek', sample: 'Ἄδμηθ’, ὁρᾷς γὰρ τἀμὰ πράγμαθ’ ὡς ἔχει, λέξαι θέλω σοι πρὶν θανεῖν ἃ βούλομαι.' },
    { lang: 'Hungarian', sample: 'Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít.' },
    { lang: 'Icelandic', sample: 'Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa.' },
    { lang: 'Irish', sample: 'Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig.' },
    { lang: 'Latvian', sample: 'Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku.' },
    { lang: 'Lithuanian', sample: 'Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą.' },
    { lang: 'Macedonian', sample: 'Ѕидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех.' },
    { lang: 'Norwegian', sample: 'Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz' },
    { lang: 'Polish', sample: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig.' },
    { lang: 'Portuguese', sample: 'Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.' },
    { lang: 'Romanian', sample: 'Înjurând pițigăiat, zoofobul comandă vexat whisky și tequila.' },
    { lang: 'Russian', sample: 'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства.' },
    { lang: 'Serbian', sample: 'Ајшо, лепото и чежњо, за љубав срца мога дођи у Хаџиће на кафу.', localeId: 'sr' },
    { lang: 'Spanish', sample: 'Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú.' },
    { lang: 'Turkish', sample: 'Pijamalı hasta yağız şoföre çabucak güvendi.' },
    { lang: 'Ukrainian', sample: 'Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!' }
];

export default (function (args) {
	const theme = themes[args.theme];
	const EM = 24;
	const elementHeight = 1.5 * EM;
	const canvasWidth = 60 * EM;
	const canvasHeight = 40 * EM;
	const xSplit = 10 * EM;
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
					color: theme.title
				},
				lang
			]
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
					"font-style": "italic",
					...(localeId ? { lang: localeId } : {}),
					color: theme.body
				},
				sample
			]
		});
	}
	return { width: canvasWidth, height: canvasHeight, frames };
});
