{
    var r0_regular, r0_bold, r0_italic, r0_bolditalic;
    r0_regular = {
        'width': 500,
        'stroke': 80,
        'dotsize': 125,
        'sb': 60,
        'cap': 771,
        'descender': -178,
        'xheight': 560,
        'barpos': 0.45,
        'gbarpos': 0.37,
        'fivebarpos': 0.48,
        'hook': 145,
        'ahook': 135,
        'shook': 100,
        'rhook': 75,
        'smooth': 192,
        'smallsmooth': 242,
        'smoothadjust': 100,
        'o': -8,
        'oxhook': 0,
        'kappa': 0.515,
        'italicangle': 0,
        'longjut': 175,
        'accent': 175,
        'tbalance': 70,
        'tbalance2': 30,
        'rbalance': 25,
        'family': 'Codex HW',
        'style': 'Regular',
        'weight': 400,
        'version': 'r0.0.1',
        'variantSelector': {},
        'copyright': 'Copyright (c) 2015 Belleve Invis.'
    };
    r0_bold = Object['create'](r0_regular);
    r0_bold['sb'] = 50;
    r0_bold['stroke'] = 120;
    r0_bold['dotsize'] = 160;
    r0_bold['barpos'] = 0.42;
    r0_bold['hook'] = 150;
    r0_bold['ahook'] = 100;
    r0_bold['smooth'] = 200;
    r0_bold['oxhook'] = 0;
    r0_bold['kappa_hook'] = 0.7;
    r0_bold['kappa_ahook'] = 0.6;
    r0_bold['jbalance'] = 60;
    r0_bold['tbalance'] = 60;
    r0_bold['rbalance'] = 18;
    r0_bold['style'] = 'Bold';
    r0_bold['weight'] = 600;
    r0_bold['bkappa'] = 0.5;
    r0_bold['ckappa'] = 0.528;
    r0_italic = Object['create'](r0_regular);
    r0_italic['italicangle'] = 10;
    r0_italic['tbalance'] = 70;
    r0_italic['rbalance'] = 30;
    r0_italic['style'] = 'Italic';
    r0_bolditalic = Object['create'](r0_bold);
    r0_bolditalic['italicangle'] = 10;
    r0_bolditalic['tbalance'] = 90;
    r0_bolditalic['style'] = 'BoldItalic';
    exports['regular'] = r0_regular;
    exports['bold'] = r0_bold;
    exports['italic'] = r0_italic;
    exports['bolditalic'] = r0_bolditalic;
}
