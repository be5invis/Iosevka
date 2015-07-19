{
    var r0_font, r0_glyphList, r0_glyphs, r0_Glyph, r0_Stroke, r0_para, r0_variantSelector, r0_globalTransform, r0_UPWARD, r0_DOWNWARD, r0_RIGHTWARD, r0_LEFTWARD, r0_DESCENDER, r0_WIDTH, r0_CAP, r0_XH, r0_O, r0_OXHOOK, r0_SB, r0_HOOK, r0_AHOOK, r0_SHOOK, r0_SMOOTH, r0_SMALLSMOOTH, r0_STROKE, r0_DOTSIZE, r0_BARPOS, r0_GBARPOS, r0_LONGSERIF, r0_ACCENT, r0_XO, r0_CAPO, r0_HALFSTROKE, r0_RIGHTSB, r0_MIDDLE, r0_CAPMIDDLE, r0_CAP_SMOOTH, r0_DOTRADIUS, r0_SMOOTHA, r0_SMOOTHB, r0_SMALLSMOOTHA, r0_SMALLSMOOTHB, r0_ITALICCORS, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_KAPPA_HOOK, r0_KAPPA_AHOOK, r0_Ring, r0_ORing, r0_xn$createglyph$7Hrq, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21, _r0_t22, _r0_t23, _r0_t24, _r0_t25, _r0_t26, _r0_t27, _r0_t28, _r0_t29, _r0_t30, _r0_t31, _r0_t32, _r0_t33, _r0_t34, _r0_t35, _r0_t36, _r0_t37, _r0_t38, _r0_t39, _r0_t40, _r0_t41, _r0_t42, _r0_t43, _r0_t44, _r0_t45, _r0_t46, _r0_t47, _r0_t48, _r0_t49, _r0_t50, _r0_t51, _r0_t52, _r0_t53, _r0_t54, _r0_t55, _r0_t56, _r0_t57;
    r0_font = require('./empty.json');
    r0_glyphList = r0_font['glyf'];
    r0_glyphs = { '.notdef': r0_glyphList[0] };
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    r0_para = {
        'width': 500,
        'stroke': 80,
        'dotsize': 125,
        'sb': 50,
        'cap': 771,
        'xheight': 560,
        'hook': 145,
        'ahook': 125,
        'shook': 100,
        'smooth': 192,
        'smallsmooth': 242,
        'smoothadjust': 100,
        'o': -8,
        'oxhook': 0,
        'descender': -178,
        'kappa': 0.515,
        'italicangle': 10,
        'barpos': 0.44,
        'gbarpos': 0.37,
        'longserif': 175,
        'accent': 175
    };
    r0_variantSelector = { 'zero': 'slashed' };
    r0_globalTransform = {
        'xx': 1,
        'yx': Math['tan'](r0_para['italicangle'] / 180 * Math['PI']),
        'xy': 0,
        'yy': 1,
        'x': 0,
        'y': 0
    };
    r0_UPWARD = {
        'x': -1,
        'y': 0
    };
    r0_DOWNWARD = {
        'x': 1,
        'y': 0
    };
    r0_RIGHTWARD = {
        'x': r0_globalTransform['yx'],
        'y': 1
    };
    r0_LEFTWARD = {
        'x': -r0_globalTransform['yx'],
        'y': -1
    };
    r0_DESCENDER = r0_para['descender'];
    r0_WIDTH = r0_para['width'];
    r0_CAP = r0_para['cap'];
    r0_XH = r0_para['xheight'];
    r0_O = r0_para['o'];
    r0_OXHOOK = r0_para['oxhook'];
    r0_SB = r0_para['sb'];
    r0_HOOK = r0_para['hook'];
    r0_AHOOK = r0_para['ahook'];
    r0_SHOOK = r0_para['shook'];
    r0_SMOOTH = r0_para['smooth'];
    r0_SMALLSMOOTH = r0_para['smallsmooth'];
    r0_STROKE = r0_para['stroke'];
    r0_DOTSIZE = r0_para['dotsize'];
    r0_BARPOS = r0_para['barpos'];
    r0_GBARPOS = r0_para['gbarpos'];
    r0_LONGSERIF = r0_para['longserif'];
    r0_ACCENT = r0_para['accent'];
    r0_XO = r0_XH - r0_O;
    r0_CAPO = r0_CAP - r0_O;
    r0_HALFSTROKE = r0_STROKE / 2;
    r0_RIGHTSB = r0_WIDTH - r0_SB;
    r0_MIDDLE = r0_WIDTH / 2;
    r0_CAPMIDDLE = r0_CAP / 2;
    r0_CAP_SMOOTH = r0_CAP - r0_SMOOTH;
    r0_DOTRADIUS = r0_para['dotsize'] / 2;
    r0_SMOOTHA = r0_SMOOTH - r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMOOTHB = r0_SMOOTH + r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMALLSMOOTHA = r0_SMALLSMOOTH - r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMALLSMOOTHB = r0_SMALLSMOOTH + r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_ITALICCORS = r0_STROKE * r0_globalTransform['yx'];
    r0_KAPPA = r0_para['kappa'];
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = 1 - r0_BKAPPA;
    r0_KAPPA_HOOK = 0.7;
    r0_KAPPA_AHOOK = r0_BKAPPA;
    r0_Stroke['bindParameters'](r0_para);
    r0_Ring = function _r0_t0(r1_u, r1_d, r1_l, r1_r) {
        var r1_u, r1_d, r1_l, r1_r, r1_my, r1_mx, r1_s;
        r1_my = (r1_u + r1_d) / 2;
        r1_mx = (r1_l + r1_r) / 2;
        r1_s = new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r1_mx, r1_d)['cubic-to'](r1_mx + (r1_l - r1_mx) * r0_BKAPPA, r1_d, r1_l, r1_my + (r1_d - r1_my) * r0_BKAPPA, r1_l, r1_my)['cubic-to'](r1_l, r1_my + (r1_u - r1_my) * r0_BKAPPA, r1_mx + (r1_l - r1_mx) * r0_BKAPPA, r1_u, r1_mx, r1_u)['cubic-to'](r1_mx + (r1_r - r1_mx) * r0_BKAPPA, r1_u, r1_r, r1_my + (r1_u - r1_my) * r0_BKAPPA, r1_r, r1_my)['cubic-to'](r1_r, r1_my + (r1_d - r1_my) * r0_BKAPPA, r1_mx + (r1_r - r1_mx) * r0_BKAPPA, r1_d, r1_mx, r1_d);
        return r1_s['points'];
    };
    r0_ORing = function _r0_t1(r2_u, r2_d, r2_l, r2_r, r2_smooth) {
        var r2_u, r2_d, r2_l, r2_r, r2_smooth, r2_myu, r2_myd, r2_mx, r2_s;
        r2_myu = r2_u - r2_smooth;
        r2_myd = r2_d + r2_smooth;
        r2_mx = (r2_l + r2_r) / 2;
        r2_s = new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r2_mx, r2_d)['cubic-to'](r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_d, r2_l, r2_myd + (r2_d - r2_myd) * r0_BKAPPA, r2_l, r2_myd)['line-to'](r2_l, r2_myu)['cubic-to'](r2_l, r2_myu + (r2_u - r2_myu) * r0_BKAPPA, r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_u, r2_mx, r2_u)['cubic-to'](r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_u, r2_r, r2_myu + (r2_u - r2_myu) * r0_BKAPPA, r2_r, r2_myu)['line-to'](r2_r, r2_myd)['cubic-to'](r2_r, r2_myd + (r2_d - r2_myd) * r0_BKAPPA, r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_d, r2_mx, r2_d);
        return r2_s['points'];
    };
    r0_xn$createglyph$7Hrq = function _r0_t2(r7_name, r7_actions) {
        var r7_name, r7_actions, r7_glyphObject;
        r7_glyphObject = new r0_Glyph(r7_name);
        r0_glyphList['push'](r7_glyphObject);
        r0_glyphs[r7_name] = r7_glyphObject;
        r7_actions['call'](r7_glyphObject);
        return r7_glyphObject;
    };
    r0_xn$createglyph$7Hrq('space', function _r0_t3() {
        var r9_xn$setwidth$9Jrj, r9_xn$assignunicode$7Hrq, r9_xn$startfrom$1aao, r9_xn$lineto$5sIl, r9_xn$curveto$1aao, r9_xn$cubicto$1aao, r9_xn$putshapes$9Jrj, r9_xn$reverselast$3qIs, r9_xn$includeglyph$3qIs, r9_xn$createstroke$7Hrq, _r9_t0;
        _r9_t0 = this;
        r9_xn$setwidth$9Jrj = _r9_t0['set-width']['bind'](_r9_t0);
        r9_xn$assignunicode$7Hrq = _r9_t0['assign-unicode']['bind'](_r9_t0);
        r9_xn$startfrom$1aao = _r9_t0['start-from']['bind'](_r9_t0);
        r9_xn$lineto$5sIl = _r9_t0['line-to']['bind'](_r9_t0);
        r9_xn$curveto$1aao = _r9_t0['curve-to']['bind'](_r9_t0);
        r9_xn$cubicto$1aao = _r9_t0['cubic-to']['bind'](_r9_t0);
        r9_xn$putshapes$9Jrj = _r9_t0['put-shapes']['bind'](_r9_t0);
        r9_xn$reverselast$3qIs = _r9_t0['reverse-last']['bind'](_r9_t0);
        r9_xn$includeglyph$3qIs = _r9_t0['include-glyph']['bind'](_r9_t0);
        r9_xn$createstroke$7Hrq = _r9_t0['create-stroke']['bind'](_r9_t0);
        _r9_t0['gizmo'] = r0_globalTransform;
        _r9_t0['set-width'](r0_WIDTH);
        r9_xn$setwidth$9Jrj(r0_WIDTH);
        r9_xn$assignunicode$7Hrq(' ');
        return void 0;
    });
    r0_xn$createglyph$7Hrq('bar', function _r0_t4() {
        var r11_xn$setwidth$9Jrj, r11_xn$assignunicode$7Hrq, r11_xn$startfrom$1aao, r11_xn$lineto$5sIl, r11_xn$curveto$1aao, r11_xn$cubicto$1aao, r11_xn$putshapes$9Jrj, r11_xn$reverselast$3qIs, r11_xn$includeglyph$3qIs, r11_xn$createstroke$7Hrq, _r11_t0;
        _r11_t0 = this;
        r11_xn$setwidth$9Jrj = _r11_t0['set-width']['bind'](_r11_t0);
        r11_xn$assignunicode$7Hrq = _r11_t0['assign-unicode']['bind'](_r11_t0);
        r11_xn$startfrom$1aao = _r11_t0['start-from']['bind'](_r11_t0);
        r11_xn$lineto$5sIl = _r11_t0['line-to']['bind'](_r11_t0);
        r11_xn$curveto$1aao = _r11_t0['curve-to']['bind'](_r11_t0);
        r11_xn$cubicto$1aao = _r11_t0['cubic-to']['bind'](_r11_t0);
        r11_xn$putshapes$9Jrj = _r11_t0['put-shapes']['bind'](_r11_t0);
        r11_xn$reverselast$3qIs = _r11_t0['reverse-last']['bind'](_r11_t0);
        r11_xn$includeglyph$3qIs = _r11_t0['include-glyph']['bind'](_r11_t0);
        r11_xn$createstroke$7Hrq = _r11_t0['create-stroke']['bind'](_r11_t0);
        _r11_t0['gizmo'] = r0_globalTransform;
        _r11_t0['set-width'](r0_WIDTH);
        r11_xn$setwidth$9Jrj(r0_WIDTH);
        r11_xn$assignunicode$7Hrq('|');
        r11_xn$putshapes$9Jrj(r11_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('A', function _r0_t5() {
        var r13_xn$setwidth$9Jrj, r13_xn$assignunicode$7Hrq, r13_xn$startfrom$1aao, r13_xn$lineto$5sIl, r13_xn$curveto$1aao, r13_xn$cubicto$1aao, r13_xn$putshapes$9Jrj, r13_xn$reverselast$3qIs, r13_xn$includeglyph$3qIs, r13_xn$createstroke$7Hrq, r13_TURN, r13_leftbar, r13_rightbar, r13_hbar, _r13_t0;
        _r13_t0 = this;
        r13_xn$setwidth$9Jrj = _r13_t0['set-width']['bind'](_r13_t0);
        r13_xn$assignunicode$7Hrq = _r13_t0['assign-unicode']['bind'](_r13_t0);
        r13_xn$startfrom$1aao = _r13_t0['start-from']['bind'](_r13_t0);
        r13_xn$lineto$5sIl = _r13_t0['line-to']['bind'](_r13_t0);
        r13_xn$curveto$1aao = _r13_t0['curve-to']['bind'](_r13_t0);
        r13_xn$cubicto$1aao = _r13_t0['cubic-to']['bind'](_r13_t0);
        r13_xn$putshapes$9Jrj = _r13_t0['put-shapes']['bind'](_r13_t0);
        r13_xn$reverselast$3qIs = _r13_t0['reverse-last']['bind'](_r13_t0);
        r13_xn$includeglyph$3qIs = _r13_t0['include-glyph']['bind'](_r13_t0);
        r13_xn$createstroke$7Hrq = _r13_t0['create-stroke']['bind'](_r13_t0);
        _r13_t0['gizmo'] = r0_globalTransform;
        _r13_t0['set-width'](r0_WIDTH);
        r13_xn$setwidth$9Jrj(r0_WIDTH);
        r13_xn$assignunicode$7Hrq('A');
        r13_TURN = r0_XH * 0.1;
        r13_leftbar = r13_xn$createstroke$7Hrq();
        r13_leftbar['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r13_TURN)['pen-direction'](r0_UPWARD)['curve-to'](r0_SB, r13_TURN + 0.27 * (r0_CAP - r13_TURN), r0_MIDDLE - r0_STROKE / 2, r0_CAP)['set-width'](0, r0_STROKE * 0.8);
        r13_rightbar = r13_xn$createstroke$7Hrq();
        r13_rightbar['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r13_TURN)['pen-direction'](r0_UPWARD)['curve-to'](r0_RIGHTSB, r13_TURN + 0.27 * (r0_CAP - r13_TURN), r0_MIDDLE + r0_STROKE / 2, r0_CAP)['set-width'](r0_STROKE * 0.8, 0);
        r13_hbar = r13_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_STROKE, r0_XH / 2)['pen-direction'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH / 2)['pen-direction'](r0_RIGHTWARD);
        r13_xn$putshapes$9Jrj(r13_leftbar['form-stroke']());
        r13_xn$putshapes$9Jrj(r13_hbar['form-stroke']());
        r13_xn$putshapes$9Jrj(r13_rightbar['form-stroke']());
        r13_xn$startfrom$1aao(r0_MIDDLE - r0_STROKE / 2, r0_CAP);
        r13_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, r0_CAP);
        r13_xn$lineto$5sIl(r0_MIDDLE, r0_CAP - r0_STROKE);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('X', function _r0_t6() {
        var r15_xn$setwidth$9Jrj, r15_xn$assignunicode$7Hrq, r15_xn$startfrom$1aao, r15_xn$lineto$5sIl, r15_xn$curveto$1aao, r15_xn$cubicto$1aao, r15_xn$putshapes$9Jrj, r15_xn$reverselast$3qIs, r15_xn$includeglyph$3qIs, r15_xn$createstroke$7Hrq, r15_TURN, r15_straight, r15_strench, r15_barone, r15_bartwo, _r15_t0;
        _r15_t0 = this;
        r15_xn$setwidth$9Jrj = _r15_t0['set-width']['bind'](_r15_t0);
        r15_xn$assignunicode$7Hrq = _r15_t0['assign-unicode']['bind'](_r15_t0);
        r15_xn$startfrom$1aao = _r15_t0['start-from']['bind'](_r15_t0);
        r15_xn$lineto$5sIl = _r15_t0['line-to']['bind'](_r15_t0);
        r15_xn$curveto$1aao = _r15_t0['curve-to']['bind'](_r15_t0);
        r15_xn$cubicto$1aao = _r15_t0['cubic-to']['bind'](_r15_t0);
        r15_xn$putshapes$9Jrj = _r15_t0['put-shapes']['bind'](_r15_t0);
        r15_xn$reverselast$3qIs = _r15_t0['reverse-last']['bind'](_r15_t0);
        r15_xn$includeglyph$3qIs = _r15_t0['include-glyph']['bind'](_r15_t0);
        r15_xn$createstroke$7Hrq = _r15_t0['create-stroke']['bind'](_r15_t0);
        _r15_t0['gizmo'] = r0_globalTransform;
        _r15_t0['set-width'](r0_WIDTH);
        r15_xn$setwidth$9Jrj(r0_WIDTH);
        r15_xn$assignunicode$7Hrq('X');
        r15_TURN = r0_XH * 0.05;
        r15_straight = 0.6;
        r15_strench = 0.125;
        r15_barone = r15_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['pen-direction'](r0_UPWARD)['line-to'](r0_SB + r0_HALFSTROKE, r15_TURN)['curve-to'](r0_SB + r0_HALFSTROKE, r15_TURN + r15_strench * (r0_CAP - r15_TURN), r0_MIDDLE + r15_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r15_TURN + r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r15_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r15_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['pen-direction'](r0_UPWARD);
        r15_bartwo = r15_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['pen-direction'](r0_UPWARD)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r15_TURN)['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r15_TURN + r15_strench * (r0_CAP - r15_TURN), r0_MIDDLE + r15_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r15_TURN + r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r15_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['curve-to'](r0_SB + r0_HALFSTROKE, r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN), r0_SB + r0_HALFSTROKE, r0_CAP - r15_TURN)['line-to'](r0_SB + r0_HALFSTROKE, r0_CAP)['pen-direction'](r0_UPWARD);
        r15_xn$putshapes$9Jrj(r15_barone['form-stroke']());
        r15_xn$putshapes$9Jrj(r15_bartwo['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Y', function _r0_t7() {
        var r17_xn$setwidth$9Jrj, r17_xn$assignunicode$7Hrq, r17_xn$startfrom$1aao, r17_xn$lineto$5sIl, r17_xn$curveto$1aao, r17_xn$cubicto$1aao, r17_xn$putshapes$9Jrj, r17_xn$reverselast$3qIs, r17_xn$includeglyph$3qIs, r17_xn$createstroke$7Hrq, r17_TURN, r17_straight, r17_strench, r17_cross, r17_barone, r17_bartwo, _r17_t0;
        _r17_t0 = this;
        r17_xn$setwidth$9Jrj = _r17_t0['set-width']['bind'](_r17_t0);
        r17_xn$assignunicode$7Hrq = _r17_t0['assign-unicode']['bind'](_r17_t0);
        r17_xn$startfrom$1aao = _r17_t0['start-from']['bind'](_r17_t0);
        r17_xn$lineto$5sIl = _r17_t0['line-to']['bind'](_r17_t0);
        r17_xn$curveto$1aao = _r17_t0['curve-to']['bind'](_r17_t0);
        r17_xn$cubicto$1aao = _r17_t0['cubic-to']['bind'](_r17_t0);
        r17_xn$putshapes$9Jrj = _r17_t0['put-shapes']['bind'](_r17_t0);
        r17_xn$reverselast$3qIs = _r17_t0['reverse-last']['bind'](_r17_t0);
        r17_xn$includeglyph$3qIs = _r17_t0['include-glyph']['bind'](_r17_t0);
        r17_xn$createstroke$7Hrq = _r17_t0['create-stroke']['bind'](_r17_t0);
        _r17_t0['gizmo'] = r0_globalTransform;
        _r17_t0['set-width'](r0_WIDTH);
        r17_xn$setwidth$9Jrj(r0_WIDTH);
        r17_xn$assignunicode$7Hrq('Y');
        r17_TURN = r0_XH * 0.05;
        r17_straight = 0.6;
        r17_strench = 0.15;
        r17_cross = r0_CAP * 0.4;
        r17_barone = r17_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r17_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r17_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r17_cross + r17_straight * (r0_CAP - r17_TURN - r17_strench * (r0_CAP - r17_TURN) - r17_cross))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r17_TURN - r17_strench * (r0_CAP - r17_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r17_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['pen-direction'](r0_UPWARD);
        r17_bartwo = r17_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r17_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r17_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r17_cross + r17_straight * (r0_CAP - r17_TURN - r17_strench * (r0_CAP - r17_TURN) - r17_cross))['curve-to'](r0_SB + r0_HALFSTROKE, r0_CAP - r17_TURN - r17_strench * (r0_CAP - r17_TURN), r0_SB + r0_HALFSTROKE, r0_CAP - r17_TURN)['line-to'](r0_SB + r0_HALFSTROKE, r0_CAP)['pen-direction'](r0_UPWARD);
        r17_xn$putshapes$9Jrj(r17_barone['form-stroke']());
        r17_xn$putshapes$9Jrj(r17_bartwo['form-stroke']());
        r17_xn$putshapes$9Jrj(r17_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['pen-direction'](r0_UPWARD)['line-to'](r0_MIDDLE, r17_cross + r0_HALFSTROKE)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('B', function _r0_t8() {
        var r19_xn$setwidth$9Jrj, r19_xn$assignunicode$7Hrq, r19_xn$startfrom$1aao, r19_xn$lineto$5sIl, r19_xn$curveto$1aao, r19_xn$cubicto$1aao, r19_xn$putshapes$9Jrj, r19_xn$reverselast$3qIs, r19_xn$includeglyph$3qIs, r19_xn$createstroke$7Hrq, r19_bowl, r19_tkappa, r19_bkappa, r19_turntop, r19_turnbottom, r19_topbowl, r19_bottombowl, r19_leftbar, _r19_t0;
        _r19_t0 = this;
        r19_xn$setwidth$9Jrj = _r19_t0['set-width']['bind'](_r19_t0);
        r19_xn$assignunicode$7Hrq = _r19_t0['assign-unicode']['bind'](_r19_t0);
        r19_xn$startfrom$1aao = _r19_t0['start-from']['bind'](_r19_t0);
        r19_xn$lineto$5sIl = _r19_t0['line-to']['bind'](_r19_t0);
        r19_xn$curveto$1aao = _r19_t0['curve-to']['bind'](_r19_t0);
        r19_xn$cubicto$1aao = _r19_t0['cubic-to']['bind'](_r19_t0);
        r19_xn$putshapes$9Jrj = _r19_t0['put-shapes']['bind'](_r19_t0);
        r19_xn$reverselast$3qIs = _r19_t0['reverse-last']['bind'](_r19_t0);
        r19_xn$includeglyph$3qIs = _r19_t0['include-glyph']['bind'](_r19_t0);
        r19_xn$createstroke$7Hrq = _r19_t0['create-stroke']['bind'](_r19_t0);
        _r19_t0['gizmo'] = r0_globalTransform;
        _r19_t0['set-width'](r0_WIDTH);
        r19_xn$setwidth$9Jrj(r0_WIDTH);
        r19_xn$assignunicode$7Hrq('B');
        r19_bowl = 451;
        r19_tkappa = r0_COKAPPA - 0.22;
        r19_bkappa = r0_COKAPPA - 0.2;
        r19_turntop = (r0_CAP + (r19_bowl - r0_STROKE)) / 2;
        r19_turnbottom = r19_bowl / 2;
        r19_topbowl = r19_xn$createstroke$7Hrq();
        r19_topbowl['start-from'](r0_SB, r0_CAP)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_SB * 0.5 - r19_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5 - r19_tkappa * r19_turnbottom, r0_CAP, r0_RIGHTSB - r0_SB * 0.5, r19_turntop + (r0_CAP - r19_turntop) * r0_KAPPA, r0_RIGHTSB - r0_SB * 0.5, r19_turntop)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5, r19_turntop + r0_KAPPA * (r19_bowl - r0_STROKE - r19_turntop), r0_RIGHTSB - r0_SB * 0.5 - r19_tkappa * r19_turnbottom, r19_bowl - r0_STROKE, r0_RIGHTSB - r0_SB * 0.5 - r19_turnbottom, r19_bowl - r0_STROKE)['line-to'](r0_SB, r19_bowl - r0_STROKE)['pen-direction'](r0_LEFTWARD);
        r19_bottombowl = r19_xn$createstroke$7Hrq();
        r19_bottombowl['start-from'](r0_SB, 0)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r19_turnbottom, 0)['cubic-to'](r0_RIGHTSB - r19_bkappa * r19_turnbottom, 0, r0_RIGHTSB, r19_turnbottom * r0_KAPPA, r0_RIGHTSB, r19_turnbottom)['cubic-to'](r0_RIGHTSB, r19_turnbottom + r0_KAPPA * (r19_bowl - r19_turnbottom), r0_RIGHTSB - r19_bkappa * r19_turnbottom, r19_bowl, r0_RIGHTSB - r19_turnbottom, r19_bowl)['line-to'](r0_SB, r19_bowl)['pen-direction'](r0_LEFTWARD);
        r19_leftbar = r19_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD);
        r19_xn$putshapes$9Jrj(r19_topbowl['form-stroke'](0, r0_STROKE));
        r19_xn$putshapes$9Jrj(r19_bottombowl['form-stroke'](r0_STROKE, 0));
        r19_xn$putshapes$9Jrj(r19_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('D', function _r0_t9() {
        var r21_xn$setwidth$9Jrj, r21_xn$assignunicode$7Hrq, r21_xn$startfrom$1aao, r21_xn$lineto$5sIl, r21_xn$curveto$1aao, r21_xn$cubicto$1aao, r21_xn$putshapes$9Jrj, r21_xn$reverselast$3qIs, r21_xn$includeglyph$3qIs, r21_xn$createstroke$7Hrq, r21_dsmooth, r21_bsmooth, r21_bkappa, r21_leftbar, r21_bowl, _r21_t0;
        _r21_t0 = this;
        r21_xn$setwidth$9Jrj = _r21_t0['set-width']['bind'](_r21_t0);
        r21_xn$assignunicode$7Hrq = _r21_t0['assign-unicode']['bind'](_r21_t0);
        r21_xn$startfrom$1aao = _r21_t0['start-from']['bind'](_r21_t0);
        r21_xn$lineto$5sIl = _r21_t0['line-to']['bind'](_r21_t0);
        r21_xn$curveto$1aao = _r21_t0['curve-to']['bind'](_r21_t0);
        r21_xn$cubicto$1aao = _r21_t0['cubic-to']['bind'](_r21_t0);
        r21_xn$putshapes$9Jrj = _r21_t0['put-shapes']['bind'](_r21_t0);
        r21_xn$reverselast$3qIs = _r21_t0['reverse-last']['bind'](_r21_t0);
        r21_xn$includeglyph$3qIs = _r21_t0['include-glyph']['bind'](_r21_t0);
        r21_xn$createstroke$7Hrq = _r21_t0['create-stroke']['bind'](_r21_t0);
        _r21_t0['gizmo'] = r0_globalTransform;
        _r21_t0['set-width'](r0_WIDTH);
        r21_xn$setwidth$9Jrj(r0_WIDTH);
        r21_xn$assignunicode$7Hrq('D');
        r21_dsmooth = r0_SMOOTH * 1.55;
        r21_bsmooth = r0_SMOOTH * 1.3;
        r21_bkappa = r0_COKAPPA - 0.2;
        r21_leftbar = r21_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD);
        r21_bowl = r21_xn$createstroke$7Hrq();
        r21_bowl['start-from'](r0_SB, 0)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r21_bsmooth, 0)['cubic-to'](r0_RIGHTSB - r21_bkappa * r21_bsmooth, 0, r0_RIGHTSB, r0_COBKAPPA * r21_dsmooth, r0_RIGHTSB, r21_dsmooth)['line-to'](r0_RIGHTSB, r0_CAP - r21_dsmooth)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r21_dsmooth, r0_RIGHTSB - r21_bkappa * r21_bsmooth, r0_CAP, r0_RIGHTSB - r21_bsmooth, r0_CAP)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_LEFTWARD);
        r21_xn$putshapes$9Jrj(r21_bowl['form-stroke'](r0_STROKE, 0));
        r21_xn$putshapes$9Jrj(r21_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('P', function _r0_t10() {
        var r23_xn$setwidth$9Jrj, r23_xn$assignunicode$7Hrq, r23_xn$startfrom$1aao, r23_xn$lineto$5sIl, r23_xn$curveto$1aao, r23_xn$cubicto$1aao, r23_xn$putshapes$9Jrj, r23_xn$reverselast$3qIs, r23_xn$includeglyph$3qIs, r23_xn$createstroke$7Hrq, r23_bowl, r23_bkappa, r23_turntop, r23_turnbottom, r23_topbowl, r23_leftbar, _r23_t0;
        _r23_t0 = this;
        r23_xn$setwidth$9Jrj = _r23_t0['set-width']['bind'](_r23_t0);
        r23_xn$assignunicode$7Hrq = _r23_t0['assign-unicode']['bind'](_r23_t0);
        r23_xn$startfrom$1aao = _r23_t0['start-from']['bind'](_r23_t0);
        r23_xn$lineto$5sIl = _r23_t0['line-to']['bind'](_r23_t0);
        r23_xn$curveto$1aao = _r23_t0['curve-to']['bind'](_r23_t0);
        r23_xn$cubicto$1aao = _r23_t0['cubic-to']['bind'](_r23_t0);
        r23_xn$putshapes$9Jrj = _r23_t0['put-shapes']['bind'](_r23_t0);
        r23_xn$reverselast$3qIs = _r23_t0['reverse-last']['bind'](_r23_t0);
        r23_xn$includeglyph$3qIs = _r23_t0['include-glyph']['bind'](_r23_t0);
        r23_xn$createstroke$7Hrq = _r23_t0['create-stroke']['bind'](_r23_t0);
        _r23_t0['gizmo'] = r0_globalTransform;
        _r23_t0['set-width'](r0_WIDTH);
        r23_xn$setwidth$9Jrj(r0_WIDTH);
        r23_xn$assignunicode$7Hrq('P');
        r23_bowl = r0_CAPMIDDLE;
        r23_bkappa = r0_COKAPPA - 0.2;
        r23_turntop = (r0_CAP + (r23_bowl - r0_HALFSTROKE)) / 2;
        r23_turnbottom = r23_bowl / 2;
        r23_topbowl = r23_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_CAP)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r23_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r23_bkappa * r23_turnbottom, r0_CAP, r0_RIGHTSB, r23_turntop + (r0_CAP - r23_turntop) * r0_KAPPA, r0_RIGHTSB, r23_turntop)['cubic-to'](r0_RIGHTSB, r23_turntop + r0_KAPPA * (r23_bowl - r0_HALFSTROKE - r23_turntop), r0_RIGHTSB - r23_bkappa * r23_turnbottom, r23_bowl - r0_HALFSTROKE, r0_RIGHTSB - r23_turnbottom, r23_bowl - r0_HALFSTROKE)['line-to'](r0_SB, r23_bowl - r0_HALFSTROKE)['pen-direction'](r0_LEFTWARD);
        r23_leftbar = r23_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD);
        r23_xn$putshapes$9Jrj(r23_topbowl['form-stroke'](0, r0_STROKE));
        r23_xn$putshapes$9Jrj(r23_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('R', function _r0_t11() {
        var r25_xn$setwidth$9Jrj, r25_xn$assignunicode$7Hrq, r25_xn$startfrom$1aao, r25_xn$lineto$5sIl, r25_xn$curveto$1aao, r25_xn$cubicto$1aao, r25_xn$putshapes$9Jrj, r25_xn$reverselast$3qIs, r25_xn$includeglyph$3qIs, r25_xn$createstroke$7Hrq, r25_TURN, r25_right, _r25_t0;
        _r25_t0 = this;
        r25_xn$setwidth$9Jrj = _r25_t0['set-width']['bind'](_r25_t0);
        r25_xn$assignunicode$7Hrq = _r25_t0['assign-unicode']['bind'](_r25_t0);
        r25_xn$startfrom$1aao = _r25_t0['start-from']['bind'](_r25_t0);
        r25_xn$lineto$5sIl = _r25_t0['line-to']['bind'](_r25_t0);
        r25_xn$curveto$1aao = _r25_t0['curve-to']['bind'](_r25_t0);
        r25_xn$cubicto$1aao = _r25_t0['cubic-to']['bind'](_r25_t0);
        r25_xn$putshapes$9Jrj = _r25_t0['put-shapes']['bind'](_r25_t0);
        r25_xn$reverselast$3qIs = _r25_t0['reverse-last']['bind'](_r25_t0);
        r25_xn$includeglyph$3qIs = _r25_t0['include-glyph']['bind'](_r25_t0);
        r25_xn$createstroke$7Hrq = _r25_t0['create-stroke']['bind'](_r25_t0);
        _r25_t0['gizmo'] = r0_globalTransform;
        _r25_t0['set-width'](r0_WIDTH);
        r25_xn$setwidth$9Jrj(r0_WIDTH);
        r25_xn$assignunicode$7Hrq('R');
        r25_xn$includeglyph$3qIs(r0_glyphs['P']);
        r25_TURN = r0_XH * 0.1;
        r25_right = r0_RIGHTSB + r0_O;
        r25_xn$putshapes$9Jrj(r25_xn$createstroke$7Hrq()['start-from'](r25_right - r0_HALFSTROKE, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['curve-to'](r25_right - r0_HALFSTROKE, r25_TURN + 0.1 * (r0_XH - r25_TURN), r0_MIDDLE, r0_CAPMIDDLE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('C', function _r0_t12() {
        var r27_xn$setwidth$9Jrj, r27_xn$assignunicode$7Hrq, r27_xn$startfrom$1aao, r27_xn$lineto$5sIl, r27_xn$curveto$1aao, r27_xn$cubicto$1aao, r27_xn$putshapes$9Jrj, r27_xn$reverselast$3qIs, r27_xn$includeglyph$3qIs, r27_xn$createstroke$7Hrq, r27_outline, _r27_t0;
        _r27_t0 = this;
        r27_xn$setwidth$9Jrj = _r27_t0['set-width']['bind'](_r27_t0);
        r27_xn$assignunicode$7Hrq = _r27_t0['assign-unicode']['bind'](_r27_t0);
        r27_xn$startfrom$1aao = _r27_t0['start-from']['bind'](_r27_t0);
        r27_xn$lineto$5sIl = _r27_t0['line-to']['bind'](_r27_t0);
        r27_xn$curveto$1aao = _r27_t0['curve-to']['bind'](_r27_t0);
        r27_xn$cubicto$1aao = _r27_t0['cubic-to']['bind'](_r27_t0);
        r27_xn$putshapes$9Jrj = _r27_t0['put-shapes']['bind'](_r27_t0);
        r27_xn$reverselast$3qIs = _r27_t0['reverse-last']['bind'](_r27_t0);
        r27_xn$includeglyph$3qIs = _r27_t0['include-glyph']['bind'](_r27_t0);
        r27_xn$createstroke$7Hrq = _r27_t0['create-stroke']['bind'](_r27_t0);
        _r27_t0['gizmo'] = r0_globalTransform;
        _r27_t0['set-width'](r0_WIDTH);
        r27_xn$setwidth$9Jrj(r0_WIDTH);
        r27_xn$assignunicode$7Hrq('C');
        r27_outline = r27_xn$createstroke$7Hrq();
        r27_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + r0_ITALICCORS + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK, r0_HOOK);
        r27_xn$putshapes$9Jrj(r27_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('G', function _r0_t13() {
        var r29_xn$setwidth$9Jrj, r29_xn$assignunicode$7Hrq, r29_xn$startfrom$1aao, r29_xn$lineto$5sIl, r29_xn$curveto$1aao, r29_xn$cubicto$1aao, r29_xn$putshapes$9Jrj, r29_xn$reverselast$3qIs, r29_xn$includeglyph$3qIs, r29_xn$createstroke$7Hrq, r29_outline, r29_bar, _r29_t0;
        _r29_t0 = this;
        r29_xn$setwidth$9Jrj = _r29_t0['set-width']['bind'](_r29_t0);
        r29_xn$assignunicode$7Hrq = _r29_t0['assign-unicode']['bind'](_r29_t0);
        r29_xn$startfrom$1aao = _r29_t0['start-from']['bind'](_r29_t0);
        r29_xn$lineto$5sIl = _r29_t0['line-to']['bind'](_r29_t0);
        r29_xn$curveto$1aao = _r29_t0['curve-to']['bind'](_r29_t0);
        r29_xn$cubicto$1aao = _r29_t0['cubic-to']['bind'](_r29_t0);
        r29_xn$putshapes$9Jrj = _r29_t0['put-shapes']['bind'](_r29_t0);
        r29_xn$reverselast$3qIs = _r29_t0['reverse-last']['bind'](_r29_t0);
        r29_xn$includeglyph$3qIs = _r29_t0['include-glyph']['bind'](_r29_t0);
        r29_xn$createstroke$7Hrq = _r29_t0['create-stroke']['bind'](_r29_t0);
        _r29_t0['gizmo'] = r0_globalTransform;
        _r29_t0['set-width'](r0_WIDTH);
        r29_xn$setwidth$9Jrj(r0_WIDTH);
        r29_xn$assignunicode$7Hrq('G');
        r29_outline = r29_xn$createstroke$7Hrq();
        r29_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2)['pen-direction'](r0_UPWARD);
        r29_xn$putshapes$9Jrj(r29_outline['form-stroke'](r0_STROKE, 0));
        r29_bar = r29_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_CAP / 2 + r0_STROKE / 2)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2)['pen-direction'](r0_RIGHTWARD);
        r29_xn$putshapes$9Jrj(r29_bar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('O', function _r0_t14() {
        var r31_xn$setwidth$9Jrj, r31_xn$assignunicode$7Hrq, r31_xn$startfrom$1aao, r31_xn$lineto$5sIl, r31_xn$curveto$1aao, r31_xn$cubicto$1aao, r31_xn$putshapes$9Jrj, r31_xn$reverselast$3qIs, r31_xn$includeglyph$3qIs, r31_xn$createstroke$7Hrq, r31_outline, _r31_t0;
        _r31_t0 = this;
        r31_xn$setwidth$9Jrj = _r31_t0['set-width']['bind'](_r31_t0);
        r31_xn$assignunicode$7Hrq = _r31_t0['assign-unicode']['bind'](_r31_t0);
        r31_xn$startfrom$1aao = _r31_t0['start-from']['bind'](_r31_t0);
        r31_xn$lineto$5sIl = _r31_t0['line-to']['bind'](_r31_t0);
        r31_xn$curveto$1aao = _r31_t0['curve-to']['bind'](_r31_t0);
        r31_xn$cubicto$1aao = _r31_t0['cubic-to']['bind'](_r31_t0);
        r31_xn$putshapes$9Jrj = _r31_t0['put-shapes']['bind'](_r31_t0);
        r31_xn$reverselast$3qIs = _r31_t0['reverse-last']['bind'](_r31_t0);
        r31_xn$includeglyph$3qIs = _r31_t0['include-glyph']['bind'](_r31_t0);
        r31_xn$createstroke$7Hrq = _r31_t0['create-stroke']['bind'](_r31_t0);
        _r31_t0['gizmo'] = r0_globalTransform;
        _r31_t0['set-width'](r0_WIDTH);
        r31_xn$setwidth$9Jrj(r0_WIDTH);
        r31_xn$assignunicode$7Hrq('O');
        r31_outline = r31_xn$createstroke$7Hrq();
        r31_outline['start-from'](r0_MIDDLE, r0_CAPO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP - r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_CAPO)['pen-direction'](r0_LEFTWARD);
        r31_xn$putshapes$9Jrj(r31_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.slashed', function _r0_t15() {
        var r33_xn$setwidth$9Jrj, r33_xn$assignunicode$7Hrq, r33_xn$startfrom$1aao, r33_xn$lineto$5sIl, r33_xn$curveto$1aao, r33_xn$cubicto$1aao, r33_xn$putshapes$9Jrj, r33_xn$reverselast$3qIs, r33_xn$includeglyph$3qIs, r33_xn$createstroke$7Hrq, r33_bar, _r33_t0;
        _r33_t0 = this;
        r33_xn$setwidth$9Jrj = _r33_t0['set-width']['bind'](_r33_t0);
        r33_xn$assignunicode$7Hrq = _r33_t0['assign-unicode']['bind'](_r33_t0);
        r33_xn$startfrom$1aao = _r33_t0['start-from']['bind'](_r33_t0);
        r33_xn$lineto$5sIl = _r33_t0['line-to']['bind'](_r33_t0);
        r33_xn$curveto$1aao = _r33_t0['curve-to']['bind'](_r33_t0);
        r33_xn$cubicto$1aao = _r33_t0['cubic-to']['bind'](_r33_t0);
        r33_xn$putshapes$9Jrj = _r33_t0['put-shapes']['bind'](_r33_t0);
        r33_xn$reverselast$3qIs = _r33_t0['reverse-last']['bind'](_r33_t0);
        r33_xn$includeglyph$3qIs = _r33_t0['include-glyph']['bind'](_r33_t0);
        r33_xn$createstroke$7Hrq = _r33_t0['create-stroke']['bind'](_r33_t0);
        _r33_t0['gizmo'] = r0_globalTransform;
        _r33_t0['set-width'](r0_WIDTH);
        r33_xn$setwidth$9Jrj(r0_WIDTH);
        r33_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r33_bar = r33_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_STROKE / 2, r0_CAP * (1 - 0.65))['line-to'](r0_RIGHTSB - r0_STROKE / 2, r0_CAP * 0.65);
        r33_xn$putshapes$9Jrj(r33_bar['form-stroke'](r0_STROKE / 2, r0_STROKE / 2));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.unslashed', function _r0_t16() {
        var r35_xn$setwidth$9Jrj, r35_xn$assignunicode$7Hrq, r35_xn$startfrom$1aao, r35_xn$lineto$5sIl, r35_xn$curveto$1aao, r35_xn$cubicto$1aao, r35_xn$putshapes$9Jrj, r35_xn$reverselast$3qIs, r35_xn$includeglyph$3qIs, r35_xn$createstroke$7Hrq, _r35_t0;
        _r35_t0 = this;
        r35_xn$setwidth$9Jrj = _r35_t0['set-width']['bind'](_r35_t0);
        r35_xn$assignunicode$7Hrq = _r35_t0['assign-unicode']['bind'](_r35_t0);
        r35_xn$startfrom$1aao = _r35_t0['start-from']['bind'](_r35_t0);
        r35_xn$lineto$5sIl = _r35_t0['line-to']['bind'](_r35_t0);
        r35_xn$curveto$1aao = _r35_t0['curve-to']['bind'](_r35_t0);
        r35_xn$cubicto$1aao = _r35_t0['cubic-to']['bind'](_r35_t0);
        r35_xn$putshapes$9Jrj = _r35_t0['put-shapes']['bind'](_r35_t0);
        r35_xn$reverselast$3qIs = _r35_t0['reverse-last']['bind'](_r35_t0);
        r35_xn$includeglyph$3qIs = _r35_t0['include-glyph']['bind'](_r35_t0);
        r35_xn$createstroke$7Hrq = _r35_t0['create-stroke']['bind'](_r35_t0);
        _r35_t0['gizmo'] = r0_globalTransform;
        _r35_t0['set-width'](r0_WIDTH);
        r35_xn$includeglyph$3qIs(r0_glyphs['O']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.dotted', function _r0_t17() {
        var r37_xn$setwidth$9Jrj, r37_xn$assignunicode$7Hrq, r37_xn$startfrom$1aao, r37_xn$lineto$5sIl, r37_xn$curveto$1aao, r37_xn$cubicto$1aao, r37_xn$putshapes$9Jrj, r37_xn$reverselast$3qIs, r37_xn$includeglyph$3qIs, r37_xn$createstroke$7Hrq, _r37_t0;
        _r37_t0 = this;
        r37_xn$setwidth$9Jrj = _r37_t0['set-width']['bind'](_r37_t0);
        r37_xn$assignunicode$7Hrq = _r37_t0['assign-unicode']['bind'](_r37_t0);
        r37_xn$startfrom$1aao = _r37_t0['start-from']['bind'](_r37_t0);
        r37_xn$lineto$5sIl = _r37_t0['line-to']['bind'](_r37_t0);
        r37_xn$curveto$1aao = _r37_t0['curve-to']['bind'](_r37_t0);
        r37_xn$cubicto$1aao = _r37_t0['cubic-to']['bind'](_r37_t0);
        r37_xn$putshapes$9Jrj = _r37_t0['put-shapes']['bind'](_r37_t0);
        r37_xn$reverselast$3qIs = _r37_t0['reverse-last']['bind'](_r37_t0);
        r37_xn$includeglyph$3qIs = _r37_t0['include-glyph']['bind'](_r37_t0);
        r37_xn$createstroke$7Hrq = _r37_t0['create-stroke']['bind'](_r37_t0);
        _r37_t0['gizmo'] = r0_globalTransform;
        _r37_t0['set-width'](r0_WIDTH);
        r37_xn$includeglyph$3qIs(r0_glyphs['O']);
        r37_xn$putshapes$9Jrj([r0_Ring(r0_CAPMIDDLE + r0_DOTRADIUS, r0_CAPMIDDLE - r0_DOTRADIUS, r0_MIDDLE + r0_DOTRADIUS, r0_MIDDLE - r0_DOTRADIUS)]);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero', function _r0_t18() {
        var r39_xn$setwidth$9Jrj, r39_xn$assignunicode$7Hrq, r39_xn$startfrom$1aao, r39_xn$lineto$5sIl, r39_xn$curveto$1aao, r39_xn$cubicto$1aao, r39_xn$putshapes$9Jrj, r39_xn$reverselast$3qIs, r39_xn$includeglyph$3qIs, r39_xn$createstroke$7Hrq, r39_otherwise, _r39_t0, _r39_t1, _r39_t2, _r39_t3, _r39_t4, _r39_t5, _r39_t6, _r39_t7;
        _r39_t1 = this;
        r39_xn$setwidth$9Jrj = _r39_t1['set-width']['bind'](_r39_t1);
        r39_xn$assignunicode$7Hrq = _r39_t1['assign-unicode']['bind'](_r39_t1);
        r39_xn$startfrom$1aao = _r39_t1['start-from']['bind'](_r39_t1);
        r39_xn$lineto$5sIl = _r39_t1['line-to']['bind'](_r39_t1);
        r39_xn$curveto$1aao = _r39_t1['curve-to']['bind'](_r39_t1);
        r39_xn$cubicto$1aao = _r39_t1['cubic-to']['bind'](_r39_t1);
        r39_xn$putshapes$9Jrj = _r39_t1['put-shapes']['bind'](_r39_t1);
        r39_xn$reverselast$3qIs = _r39_t1['reverse-last']['bind'](_r39_t1);
        r39_xn$includeglyph$3qIs = _r39_t1['include-glyph']['bind'](_r39_t1);
        r39_xn$createstroke$7Hrq = _r39_t1['create-stroke']['bind'](_r39_t1);
        _r39_t1['gizmo'] = r0_globalTransform;
        _r39_t1['set-width'](r0_WIDTH);
        r39_xn$setwidth$9Jrj(r0_WIDTH);
        r39_xn$assignunicode$7Hrq('0');
        _r39_t2 = r39_xn$includeglyph$3qIs;
        _r39_t3 = r0_glyphs;
        _r39_t0 = r0_variantSelector['zero'];
        if ('slashed' === _r39_t0) {
            _r39_t4 = 'zero.slashed';
        } else {
            if ('dotted' === _r39_t0) {
                _r39_t5 = 'zero.dotted';
            } else {
                if ('unslahsed' === _r39_t0) {
                    _r39_t6 = 'zero.unslashed';
                } else {
                    r39_otherwise = _r39_t0;
                    _r39_t6 = 'zero.slashed';
                }
                _r39_t5 = _r39_t6;
            }
            _r39_t4 = _r39_t5;
        }
        _r39_t7 = _r39_t3[_r39_t4];
        _r39_t2(_r39_t7);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Q', function _r0_t19() {
        var r41_xn$setwidth$9Jrj, r41_xn$assignunicode$7Hrq, r41_xn$startfrom$1aao, r41_xn$lineto$5sIl, r41_xn$curveto$1aao, r41_xn$cubicto$1aao, r41_xn$putshapes$9Jrj, r41_xn$reverselast$3qIs, r41_xn$includeglyph$3qIs, r41_xn$createstroke$7Hrq, _r41_t0;
        _r41_t0 = this;
        r41_xn$setwidth$9Jrj = _r41_t0['set-width']['bind'](_r41_t0);
        r41_xn$assignunicode$7Hrq = _r41_t0['assign-unicode']['bind'](_r41_t0);
        r41_xn$startfrom$1aao = _r41_t0['start-from']['bind'](_r41_t0);
        r41_xn$lineto$5sIl = _r41_t0['line-to']['bind'](_r41_t0);
        r41_xn$curveto$1aao = _r41_t0['curve-to']['bind'](_r41_t0);
        r41_xn$cubicto$1aao = _r41_t0['cubic-to']['bind'](_r41_t0);
        r41_xn$putshapes$9Jrj = _r41_t0['put-shapes']['bind'](_r41_t0);
        r41_xn$reverselast$3qIs = _r41_t0['reverse-last']['bind'](_r41_t0);
        r41_xn$includeglyph$3qIs = _r41_t0['include-glyph']['bind'](_r41_t0);
        r41_xn$createstroke$7Hrq = _r41_t0['create-stroke']['bind'](_r41_t0);
        _r41_t0['gizmo'] = r0_globalTransform;
        _r41_t0['set-width'](r0_WIDTH);
        r41_xn$setwidth$9Jrj(r0_WIDTH);
        r41_xn$assignunicode$7Hrq('Q');
        r41_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r41_xn$startfrom$1aao(r0_MIDDLE, 0);
        r41_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, -r0_CAP * 0.2);
        r41_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2 + r0_STROKE, -r0_CAP * 0.2);
        r41_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE, 0);
        r41_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE * (1 - 0.5 / 3), r0_STROKE * 0.5);
        r41_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('U', function _r0_t20() {
        var r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_xn$includeglyph$3qIs, r43_xn$createstroke$7Hrq, r43_outline, _r43_t0;
        _r43_t0 = this;
        r43_xn$setwidth$9Jrj = _r43_t0['set-width']['bind'](_r43_t0);
        r43_xn$assignunicode$7Hrq = _r43_t0['assign-unicode']['bind'](_r43_t0);
        r43_xn$startfrom$1aao = _r43_t0['start-from']['bind'](_r43_t0);
        r43_xn$lineto$5sIl = _r43_t0['line-to']['bind'](_r43_t0);
        r43_xn$curveto$1aao = _r43_t0['curve-to']['bind'](_r43_t0);
        r43_xn$cubicto$1aao = _r43_t0['cubic-to']['bind'](_r43_t0);
        r43_xn$putshapes$9Jrj = _r43_t0['put-shapes']['bind'](_r43_t0);
        r43_xn$reverselast$3qIs = _r43_t0['reverse-last']['bind'](_r43_t0);
        r43_xn$includeglyph$3qIs = _r43_t0['include-glyph']['bind'](_r43_t0);
        r43_xn$createstroke$7Hrq = _r43_t0['create-stroke']['bind'](_r43_t0);
        _r43_t0['gizmo'] = r0_globalTransform;
        _r43_t0['set-width'](r0_WIDTH);
        r43_xn$setwidth$9Jrj(r0_WIDTH);
        r43_xn$assignunicode$7Hrq('U');
        r43_outline = r43_xn$createstroke$7Hrq();
        r43_outline['start-from'](r0_SB, r0_CAP)['pen-direction'](r0_DOWNWARD)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP)['pen-direction'](r0_UPWARD);
        r43_xn$putshapes$9Jrj(r43_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('F', function _r0_t21() {
        var r45_xn$setwidth$9Jrj, r45_xn$assignunicode$7Hrq, r45_xn$startfrom$1aao, r45_xn$lineto$5sIl, r45_xn$curveto$1aao, r45_xn$cubicto$1aao, r45_xn$putshapes$9Jrj, r45_xn$reverselast$3qIs, r45_xn$includeglyph$3qIs, r45_xn$createstroke$7Hrq, _r45_t0;
        _r45_t0 = this;
        r45_xn$setwidth$9Jrj = _r45_t0['set-width']['bind'](_r45_t0);
        r45_xn$assignunicode$7Hrq = _r45_t0['assign-unicode']['bind'](_r45_t0);
        r45_xn$startfrom$1aao = _r45_t0['start-from']['bind'](_r45_t0);
        r45_xn$lineto$5sIl = _r45_t0['line-to']['bind'](_r45_t0);
        r45_xn$curveto$1aao = _r45_t0['curve-to']['bind'](_r45_t0);
        r45_xn$cubicto$1aao = _r45_t0['cubic-to']['bind'](_r45_t0);
        r45_xn$putshapes$9Jrj = _r45_t0['put-shapes']['bind'](_r45_t0);
        r45_xn$reverselast$3qIs = _r45_t0['reverse-last']['bind'](_r45_t0);
        r45_xn$includeglyph$3qIs = _r45_t0['include-glyph']['bind'](_r45_t0);
        r45_xn$createstroke$7Hrq = _r45_t0['create-stroke']['bind'](_r45_t0);
        _r45_t0['gizmo'] = r0_globalTransform;
        _r45_t0['set-width'](r0_WIDTH);
        r45_xn$setwidth$9Jrj(r0_WIDTH);
        r45_xn$assignunicode$7Hrq('F');
        r45_xn$putshapes$9Jrj(r45_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        r45_xn$putshapes$9Jrj(r45_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_CAP)['set-width'](0, r0_STROKE)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, r0_CAP)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        r45_xn$putshapes$9Jrj(r45_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_CAPMIDDLE)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_STROKE, r0_CAPMIDDLE)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('E', function _r0_t22() {
        var r47_xn$setwidth$9Jrj, r47_xn$assignunicode$7Hrq, r47_xn$startfrom$1aao, r47_xn$lineto$5sIl, r47_xn$curveto$1aao, r47_xn$cubicto$1aao, r47_xn$putshapes$9Jrj, r47_xn$reverselast$3qIs, r47_xn$includeglyph$3qIs, r47_xn$createstroke$7Hrq, _r47_t0;
        _r47_t0 = this;
        r47_xn$setwidth$9Jrj = _r47_t0['set-width']['bind'](_r47_t0);
        r47_xn$assignunicode$7Hrq = _r47_t0['assign-unicode']['bind'](_r47_t0);
        r47_xn$startfrom$1aao = _r47_t0['start-from']['bind'](_r47_t0);
        r47_xn$lineto$5sIl = _r47_t0['line-to']['bind'](_r47_t0);
        r47_xn$curveto$1aao = _r47_t0['curve-to']['bind'](_r47_t0);
        r47_xn$cubicto$1aao = _r47_t0['cubic-to']['bind'](_r47_t0);
        r47_xn$putshapes$9Jrj = _r47_t0['put-shapes']['bind'](_r47_t0);
        r47_xn$reverselast$3qIs = _r47_t0['reverse-last']['bind'](_r47_t0);
        r47_xn$includeglyph$3qIs = _r47_t0['include-glyph']['bind'](_r47_t0);
        r47_xn$createstroke$7Hrq = _r47_t0['create-stroke']['bind'](_r47_t0);
        _r47_t0['gizmo'] = r0_globalTransform;
        _r47_t0['set-width'](r0_WIDTH);
        r47_xn$setwidth$9Jrj(r0_WIDTH);
        r47_xn$assignunicode$7Hrq('E');
        r47_xn$includeglyph$3qIs(r0_glyphs['F']);
        r47_xn$putshapes$9Jrj(r47_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['set-width'](r0_STROKE, 0)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, 0)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('H', function _r0_t23() {
        var r49_xn$setwidth$9Jrj, r49_xn$assignunicode$7Hrq, r49_xn$startfrom$1aao, r49_xn$lineto$5sIl, r49_xn$curveto$1aao, r49_xn$cubicto$1aao, r49_xn$putshapes$9Jrj, r49_xn$reverselast$3qIs, r49_xn$includeglyph$3qIs, r49_xn$createstroke$7Hrq, _r49_t0;
        _r49_t0 = this;
        r49_xn$setwidth$9Jrj = _r49_t0['set-width']['bind'](_r49_t0);
        r49_xn$assignunicode$7Hrq = _r49_t0['assign-unicode']['bind'](_r49_t0);
        r49_xn$startfrom$1aao = _r49_t0['start-from']['bind'](_r49_t0);
        r49_xn$lineto$5sIl = _r49_t0['line-to']['bind'](_r49_t0);
        r49_xn$curveto$1aao = _r49_t0['curve-to']['bind'](_r49_t0);
        r49_xn$cubicto$1aao = _r49_t0['cubic-to']['bind'](_r49_t0);
        r49_xn$putshapes$9Jrj = _r49_t0['put-shapes']['bind'](_r49_t0);
        r49_xn$reverselast$3qIs = _r49_t0['reverse-last']['bind'](_r49_t0);
        r49_xn$includeglyph$3qIs = _r49_t0['include-glyph']['bind'](_r49_t0);
        r49_xn$createstroke$7Hrq = _r49_t0['create-stroke']['bind'](_r49_t0);
        _r49_t0['gizmo'] = r0_globalTransform;
        _r49_t0['set-width'](r0_WIDTH);
        r49_xn$setwidth$9Jrj(r0_WIDTH);
        r49_xn$assignunicode$7Hrq('H');
        r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_CAP / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, r0_CAP / 2)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('L', function _r0_t24() {
        var r51_xn$setwidth$9Jrj, r51_xn$assignunicode$7Hrq, r51_xn$startfrom$1aao, r51_xn$lineto$5sIl, r51_xn$curveto$1aao, r51_xn$cubicto$1aao, r51_xn$putshapes$9Jrj, r51_xn$reverselast$3qIs, r51_xn$includeglyph$3qIs, r51_xn$createstroke$7Hrq, _r51_t0;
        _r51_t0 = this;
        r51_xn$setwidth$9Jrj = _r51_t0['set-width']['bind'](_r51_t0);
        r51_xn$assignunicode$7Hrq = _r51_t0['assign-unicode']['bind'](_r51_t0);
        r51_xn$startfrom$1aao = _r51_t0['start-from']['bind'](_r51_t0);
        r51_xn$lineto$5sIl = _r51_t0['line-to']['bind'](_r51_t0);
        r51_xn$curveto$1aao = _r51_t0['curve-to']['bind'](_r51_t0);
        r51_xn$cubicto$1aao = _r51_t0['cubic-to']['bind'](_r51_t0);
        r51_xn$putshapes$9Jrj = _r51_t0['put-shapes']['bind'](_r51_t0);
        r51_xn$reverselast$3qIs = _r51_t0['reverse-last']['bind'](_r51_t0);
        r51_xn$includeglyph$3qIs = _r51_t0['include-glyph']['bind'](_r51_t0);
        r51_xn$createstroke$7Hrq = _r51_t0['create-stroke']['bind'](_r51_t0);
        _r51_t0['gizmo'] = r0_globalTransform;
        _r51_t0['set-width'](r0_WIDTH);
        r51_xn$setwidth$9Jrj(r0_WIDTH);
        r51_xn$assignunicode$7Hrq('L');
        r51_xn$putshapes$9Jrj(r51_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, r0_CAP)['set-width'](r0_STROKE, 0)['pen-direction'](r0_DOWNWARD)['line-to'](r0_SB * 1.5, 0)['pen-direction'](r0_DOWNWARD)['form-stroke']());
        r51_xn$putshapes$9Jrj(r51_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, 0)['set-width'](r0_STROKE, 0)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, 0)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.straight', function _r0_t25() {
        var r53_xn$setwidth$9Jrj, r53_xn$assignunicode$7Hrq, r53_xn$startfrom$1aao, r53_xn$lineto$5sIl, r53_xn$curveto$1aao, r53_xn$cubicto$1aao, r53_xn$putshapes$9Jrj, r53_xn$reverselast$3qIs, r53_xn$includeglyph$3qIs, r53_xn$createstroke$7Hrq, _r53_t0;
        _r53_t0 = this;
        r53_xn$setwidth$9Jrj = _r53_t0['set-width']['bind'](_r53_t0);
        r53_xn$assignunicode$7Hrq = _r53_t0['assign-unicode']['bind'](_r53_t0);
        r53_xn$startfrom$1aao = _r53_t0['start-from']['bind'](_r53_t0);
        r53_xn$lineto$5sIl = _r53_t0['line-to']['bind'](_r53_t0);
        r53_xn$curveto$1aao = _r53_t0['curve-to']['bind'](_r53_t0);
        r53_xn$cubicto$1aao = _r53_t0['cubic-to']['bind'](_r53_t0);
        r53_xn$putshapes$9Jrj = _r53_t0['put-shapes']['bind'](_r53_t0);
        r53_xn$reverselast$3qIs = _r53_t0['reverse-last']['bind'](_r53_t0);
        r53_xn$includeglyph$3qIs = _r53_t0['include-glyph']['bind'](_r53_t0);
        r53_xn$createstroke$7Hrq = _r53_t0['create-stroke']['bind'](_r53_t0);
        _r53_t0['gizmo'] = r0_globalTransform;
        _r53_t0['set-width'](r0_WIDTH);
        r53_xn$putshapes$9Jrj(r53_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.symmetric', function _r0_t26() {
        var r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_xn$includeglyph$3qIs, r55_xn$createstroke$7Hrq, _r55_t0;
        _r55_t0 = this;
        r55_xn$setwidth$9Jrj = _r55_t0['set-width']['bind'](_r55_t0);
        r55_xn$assignunicode$7Hrq = _r55_t0['assign-unicode']['bind'](_r55_t0);
        r55_xn$startfrom$1aao = _r55_t0['start-from']['bind'](_r55_t0);
        r55_xn$lineto$5sIl = _r55_t0['line-to']['bind'](_r55_t0);
        r55_xn$curveto$1aao = _r55_t0['curve-to']['bind'](_r55_t0);
        r55_xn$cubicto$1aao = _r55_t0['cubic-to']['bind'](_r55_t0);
        r55_xn$putshapes$9Jrj = _r55_t0['put-shapes']['bind'](_r55_t0);
        r55_xn$reverselast$3qIs = _r55_t0['reverse-last']['bind'](_r55_t0);
        r55_xn$includeglyph$3qIs = _r55_t0['include-glyph']['bind'](_r55_t0);
        r55_xn$createstroke$7Hrq = _r55_t0['create-stroke']['bind'](_r55_t0);
        _r55_t0['gizmo'] = r0_globalTransform;
        _r55_t0['set-width'](r0_WIDTH);
        r55_xn$includeglyph$3qIs(r0_glyphs['dotlessI.straight']);
        r55_xn$putshapes$9Jrj(r55_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26 - r0_STROKE * r0_globalTransform['yx'], r0_CAP)['set-width'](0, r0_STROKE)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26 - r0_STROKE * r0_globalTransform['yx'], r0_CAP)['form-stroke']());
        r55_xn$putshapes$9Jrj(r55_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26 + r0_STROKE * r0_globalTransform['yx'], 0)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26 + r0_STROKE * r0_globalTransform['yx'], 0)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('I', function _r0_t27() {
        var r57_xn$setwidth$9Jrj, r57_xn$assignunicode$7Hrq, r57_xn$startfrom$1aao, r57_xn$lineto$5sIl, r57_xn$curveto$1aao, r57_xn$cubicto$1aao, r57_xn$putshapes$9Jrj, r57_xn$reverselast$3qIs, r57_xn$includeglyph$3qIs, r57_xn$createstroke$7Hrq, _r57_t0;
        _r57_t0 = this;
        r57_xn$setwidth$9Jrj = _r57_t0['set-width']['bind'](_r57_t0);
        r57_xn$assignunicode$7Hrq = _r57_t0['assign-unicode']['bind'](_r57_t0);
        r57_xn$startfrom$1aao = _r57_t0['start-from']['bind'](_r57_t0);
        r57_xn$lineto$5sIl = _r57_t0['line-to']['bind'](_r57_t0);
        r57_xn$curveto$1aao = _r57_t0['curve-to']['bind'](_r57_t0);
        r57_xn$cubicto$1aao = _r57_t0['cubic-to']['bind'](_r57_t0);
        r57_xn$putshapes$9Jrj = _r57_t0['put-shapes']['bind'](_r57_t0);
        r57_xn$reverselast$3qIs = _r57_t0['reverse-last']['bind'](_r57_t0);
        r57_xn$includeglyph$3qIs = _r57_t0['include-glyph']['bind'](_r57_t0);
        r57_xn$createstroke$7Hrq = _r57_t0['create-stroke']['bind'](_r57_t0);
        _r57_t0['gizmo'] = r0_globalTransform;
        _r57_t0['set-width'](r0_WIDTH);
        r57_xn$setwidth$9Jrj(r0_WIDTH);
        r57_xn$assignunicode$7Hrq('I');
        r57_xn$includeglyph$3qIs(r0_glyphs['dotlessI.symmetric']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('S', function _r0_t28() {
        var r59_xn$setwidth$9Jrj, r59_xn$assignunicode$7Hrq, r59_xn$startfrom$1aao, r59_xn$lineto$5sIl, r59_xn$curveto$1aao, r59_xn$cubicto$1aao, r59_xn$putshapes$9Jrj, r59_xn$reverselast$3qIs, r59_xn$includeglyph$3qIs, r59_xn$createstroke$7Hrq, r59_slope, r59_expand, r59_coexpand, r59_ssmootha, r59_bowltop, r59_strokemiddle, r59_bowlbottom, _r59_t0;
        _r59_t0 = this;
        r59_xn$setwidth$9Jrj = _r59_t0['set-width']['bind'](_r59_t0);
        r59_xn$assignunicode$7Hrq = _r59_t0['assign-unicode']['bind'](_r59_t0);
        r59_xn$startfrom$1aao = _r59_t0['start-from']['bind'](_r59_t0);
        r59_xn$lineto$5sIl = _r59_t0['line-to']['bind'](_r59_t0);
        r59_xn$curveto$1aao = _r59_t0['curve-to']['bind'](_r59_t0);
        r59_xn$cubicto$1aao = _r59_t0['cubic-to']['bind'](_r59_t0);
        r59_xn$putshapes$9Jrj = _r59_t0['put-shapes']['bind'](_r59_t0);
        r59_xn$reverselast$3qIs = _r59_t0['reverse-last']['bind'](_r59_t0);
        r59_xn$includeglyph$3qIs = _r59_t0['include-glyph']['bind'](_r59_t0);
        r59_xn$createstroke$7Hrq = _r59_t0['create-stroke']['bind'](_r59_t0);
        _r59_t0['gizmo'] = r0_globalTransform;
        _r59_t0['set-width'](r0_WIDTH);
        r59_xn$setwidth$9Jrj(r0_WIDTH);
        r59_xn$assignunicode$7Hrq('S');
        r59_slope = r0_STROKE * 0.00092;
        r59_expand = 0.35;
        r59_coexpand = (1 - r59_expand) / 2;
        r59_ssmootha = r0_SMOOTHA;
        r59_bowltop = r59_xn$createstroke$7Hrq();
        r59_bowltop['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r59_ssmootha);
        r59_strokemiddle = r59_xn$createstroke$7Hrq();
        r59_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_CAP - r59_ssmootha)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r59_slope) * r0_CAP + 2 * r59_slope * r0_CAP / (r59_expand * r0_WIDTH) * (r59_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r59_coexpand * r0_WIDTH, (0.5 + r59_slope) * r0_CAP)['line-to']((1 - r59_coexpand) * r0_WIDTH, (0.5 - r59_slope) * r0_CAP)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r59_slope) * r0_CAP - 2 * r59_slope * r0_CAP / (r59_expand * r0_WIDTH) * (r59_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r59_ssmootha);
        r59_bowlbottom = r59_xn$createstroke$7Hrq();
        r59_bowlbottom['start-from'](r0_RIGHTSB, r59_ssmootha)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB + r0_OXHOOK, r0_HOOK);
        r59_xn$putshapes$9Jrj(r59_bowltop['form-stroke']());
        r59_xn$putshapes$9Jrj(r59_strokemiddle['form-stroke']());
        r59_xn$putshapes$9Jrj(r59_bowlbottom['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dollar', function _r0_t29() {
        var r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_xn$includeglyph$3qIs, r61_xn$createstroke$7Hrq, _r61_t0;
        _r61_t0 = this;
        r61_xn$setwidth$9Jrj = _r61_t0['set-width']['bind'](_r61_t0);
        r61_xn$assignunicode$7Hrq = _r61_t0['assign-unicode']['bind'](_r61_t0);
        r61_xn$startfrom$1aao = _r61_t0['start-from']['bind'](_r61_t0);
        r61_xn$lineto$5sIl = _r61_t0['line-to']['bind'](_r61_t0);
        r61_xn$curveto$1aao = _r61_t0['curve-to']['bind'](_r61_t0);
        r61_xn$cubicto$1aao = _r61_t0['cubic-to']['bind'](_r61_t0);
        r61_xn$putshapes$9Jrj = _r61_t0['put-shapes']['bind'](_r61_t0);
        r61_xn$reverselast$3qIs = _r61_t0['reverse-last']['bind'](_r61_t0);
        r61_xn$includeglyph$3qIs = _r61_t0['include-glyph']['bind'](_r61_t0);
        r61_xn$createstroke$7Hrq = _r61_t0['create-stroke']['bind'](_r61_t0);
        _r61_t0['gizmo'] = r0_globalTransform;
        _r61_t0['set-width'](r0_WIDTH);
        r61_xn$setwidth$9Jrj(r0_WIDTH);
        r61_xn$assignunicode$7Hrq('$');
        r61_xn$putshapes$9Jrj(r0_glyphs['S']['contours']);
        r61_xn$putshapes$9Jrj(r61_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_CAP - r0_HALFSTROKE)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        r61_xn$putshapes$9Jrj(r61_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_HALFSTROKE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o', function _r0_t30() {
        var r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, r63_xn$includeglyph$3qIs, r63_xn$createstroke$7Hrq, r63_outline, _r63_t0;
        _r63_t0 = this;
        r63_xn$setwidth$9Jrj = _r63_t0['set-width']['bind'](_r63_t0);
        r63_xn$assignunicode$7Hrq = _r63_t0['assign-unicode']['bind'](_r63_t0);
        r63_xn$startfrom$1aao = _r63_t0['start-from']['bind'](_r63_t0);
        r63_xn$lineto$5sIl = _r63_t0['line-to']['bind'](_r63_t0);
        r63_xn$curveto$1aao = _r63_t0['curve-to']['bind'](_r63_t0);
        r63_xn$cubicto$1aao = _r63_t0['cubic-to']['bind'](_r63_t0);
        r63_xn$putshapes$9Jrj = _r63_t0['put-shapes']['bind'](_r63_t0);
        r63_xn$reverselast$3qIs = _r63_t0['reverse-last']['bind'](_r63_t0);
        r63_xn$includeglyph$3qIs = _r63_t0['include-glyph']['bind'](_r63_t0);
        r63_xn$createstroke$7Hrq = _r63_t0['create-stroke']['bind'](_r63_t0);
        _r63_t0['gizmo'] = r0_globalTransform;
        _r63_t0['set-width'](r0_WIDTH);
        r63_xn$setwidth$9Jrj(r0_WIDTH);
        r63_xn$assignunicode$7Hrq('o');
        r63_outline = r63_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['set-width'](r0_STROKE, 0)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_O, r0_SMALLSMOOTHA)['line-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD);
        r63_xn$putshapes$9Jrj(r63_outline['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.left', function _r0_t31() {
        var r65_xn$setwidth$9Jrj, r65_xn$assignunicode$7Hrq, r65_xn$startfrom$1aao, r65_xn$lineto$5sIl, r65_xn$curveto$1aao, r65_xn$cubicto$1aao, r65_xn$putshapes$9Jrj, r65_xn$reverselast$3qIs, r65_xn$includeglyph$3qIs, r65_xn$createstroke$7Hrq, _r65_t0;
        _r65_t0 = this;
        r65_xn$setwidth$9Jrj = _r65_t0['set-width']['bind'](_r65_t0);
        r65_xn$assignunicode$7Hrq = _r65_t0['assign-unicode']['bind'](_r65_t0);
        r65_xn$startfrom$1aao = _r65_t0['start-from']['bind'](_r65_t0);
        r65_xn$lineto$5sIl = _r65_t0['line-to']['bind'](_r65_t0);
        r65_xn$curveto$1aao = _r65_t0['curve-to']['bind'](_r65_t0);
        r65_xn$cubicto$1aao = _r65_t0['cubic-to']['bind'](_r65_t0);
        r65_xn$putshapes$9Jrj = _r65_t0['put-shapes']['bind'](_r65_t0);
        r65_xn$reverselast$3qIs = _r65_t0['reverse-last']['bind'](_r65_t0);
        r65_xn$includeglyph$3qIs = _r65_t0['include-glyph']['bind'](_r65_t0);
        r65_xn$createstroke$7Hrq = _r65_t0['create-stroke']['bind'](_r65_t0);
        _r65_t0['gizmo'] = r0_globalTransform;
        _r65_t0['set-width'](r0_WIDTH);
        r65_xn$setwidth$9Jrj(r0_WIDTH);
        r65_xn$putshapes$9Jrj(r65_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['pen-direction'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['arc-hv-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['line-to'](r0_RIGHTSB - r0_O, r0_SMALLSMOOTHA)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        r65_xn$putshapes$9Jrj(r65_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['pen-direction'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['arc-hv-to'](r0_SB + r0_STROKE, r0_SMALLSMOOTHB - r0_STROKE * 0.05)['set-width'](r0_HALFSTROKE, 0)['line-to'](r0_SB + r0_STROKE, r0_XH - r0_SMALLSMOOTHA + r0_STROKE * 0.05)['set-width'](r0_HALFSTROKE, 0)['arc-vh-to'](r0_MIDDLE, r0_XO - r0_STROKE)['set-width'](r0_STROKE, 0)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.right', function _r0_t32() {
        var r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, r67_xn$includeglyph$3qIs, r67_xn$createstroke$7Hrq, _r67_t0;
        _r67_t0 = this;
        r67_xn$setwidth$9Jrj = _r67_t0['set-width']['bind'](_r67_t0);
        r67_xn$assignunicode$7Hrq = _r67_t0['assign-unicode']['bind'](_r67_t0);
        r67_xn$startfrom$1aao = _r67_t0['start-from']['bind'](_r67_t0);
        r67_xn$lineto$5sIl = _r67_t0['line-to']['bind'](_r67_t0);
        r67_xn$curveto$1aao = _r67_t0['curve-to']['bind'](_r67_t0);
        r67_xn$cubicto$1aao = _r67_t0['cubic-to']['bind'](_r67_t0);
        r67_xn$putshapes$9Jrj = _r67_t0['put-shapes']['bind'](_r67_t0);
        r67_xn$reverselast$3qIs = _r67_t0['reverse-last']['bind'](_r67_t0);
        r67_xn$includeglyph$3qIs = _r67_t0['include-glyph']['bind'](_r67_t0);
        r67_xn$createstroke$7Hrq = _r67_t0['create-stroke']['bind'](_r67_t0);
        _r67_t0['gizmo'] = r0_globalTransform;
        _r67_t0['set-width'](r0_WIDTH);
        r67_xn$setwidth$9Jrj(r0_WIDTH);
        r67_xn$putshapes$9Jrj(r67_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        r67_xn$putshapes$9Jrj(r67_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['pen-direction'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['arc-hv-to'](r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTHA - r0_STROKE * 0.05)['set-width'](0, r0_HALFSTROKE)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH - r0_SMALLSMOOTHB + r0_STROKE * 0.05)['set-width'](0, r0_HALFSTROKE)['arc-vh-to'](r0_MIDDLE, r0_XO - r0_STROKE)['set-width'](0, r0_STROKE)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('p', function _r0_t33() {
        var r69_xn$setwidth$9Jrj, r69_xn$assignunicode$7Hrq, r69_xn$startfrom$1aao, r69_xn$lineto$5sIl, r69_xn$curveto$1aao, r69_xn$cubicto$1aao, r69_xn$putshapes$9Jrj, r69_xn$reverselast$3qIs, r69_xn$includeglyph$3qIs, r69_xn$createstroke$7Hrq, _r69_t0;
        _r69_t0 = this;
        r69_xn$setwidth$9Jrj = _r69_t0['set-width']['bind'](_r69_t0);
        r69_xn$assignunicode$7Hrq = _r69_t0['assign-unicode']['bind'](_r69_t0);
        r69_xn$startfrom$1aao = _r69_t0['start-from']['bind'](_r69_t0);
        r69_xn$lineto$5sIl = _r69_t0['line-to']['bind'](_r69_t0);
        r69_xn$curveto$1aao = _r69_t0['curve-to']['bind'](_r69_t0);
        r69_xn$cubicto$1aao = _r69_t0['cubic-to']['bind'](_r69_t0);
        r69_xn$putshapes$9Jrj = _r69_t0['put-shapes']['bind'](_r69_t0);
        r69_xn$reverselast$3qIs = _r69_t0['reverse-last']['bind'](_r69_t0);
        r69_xn$includeglyph$3qIs = _r69_t0['include-glyph']['bind'](_r69_t0);
        r69_xn$createstroke$7Hrq = _r69_t0['create-stroke']['bind'](_r69_t0);
        _r69_t0['gizmo'] = r0_globalTransform;
        _r69_t0['set-width'](r0_WIDTH);
        r69_xn$setwidth$9Jrj(r0_WIDTH);
        r69_xn$assignunicode$7Hrq('p');
        r69_xn$includeglyph$3qIs(r0_glyphs['o.left']);
        r69_xn$putshapes$9Jrj(r69_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_XH)['pen-direction'](r0_DOWNWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_DESCENDER)['pen-direction'](r0_DOWNWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('b', function _r0_t34() {
        var r71_xn$setwidth$9Jrj, r71_xn$assignunicode$7Hrq, r71_xn$startfrom$1aao, r71_xn$lineto$5sIl, r71_xn$curveto$1aao, r71_xn$cubicto$1aao, r71_xn$putshapes$9Jrj, r71_xn$reverselast$3qIs, r71_xn$includeglyph$3qIs, r71_xn$createstroke$7Hrq, _r71_t0;
        _r71_t0 = this;
        r71_xn$setwidth$9Jrj = _r71_t0['set-width']['bind'](_r71_t0);
        r71_xn$assignunicode$7Hrq = _r71_t0['assign-unicode']['bind'](_r71_t0);
        r71_xn$startfrom$1aao = _r71_t0['start-from']['bind'](_r71_t0);
        r71_xn$lineto$5sIl = _r71_t0['line-to']['bind'](_r71_t0);
        r71_xn$curveto$1aao = _r71_t0['curve-to']['bind'](_r71_t0);
        r71_xn$cubicto$1aao = _r71_t0['cubic-to']['bind'](_r71_t0);
        r71_xn$putshapes$9Jrj = _r71_t0['put-shapes']['bind'](_r71_t0);
        r71_xn$reverselast$3qIs = _r71_t0['reverse-last']['bind'](_r71_t0);
        r71_xn$includeglyph$3qIs = _r71_t0['include-glyph']['bind'](_r71_t0);
        r71_xn$createstroke$7Hrq = _r71_t0['create-stroke']['bind'](_r71_t0);
        _r71_t0['gizmo'] = r0_globalTransform;
        _r71_t0['set-width'](r0_WIDTH);
        r71_xn$setwidth$9Jrj(r0_WIDTH);
        r71_xn$assignunicode$7Hrq('b');
        r71_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r71_xn$putshapes$9Jrj(r71_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('q', function _r0_t35() {
        var r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, r73_xn$includeglyph$3qIs, r73_xn$createstroke$7Hrq, _r73_t0;
        _r73_t0 = this;
        r73_xn$setwidth$9Jrj = _r73_t0['set-width']['bind'](_r73_t0);
        r73_xn$assignunicode$7Hrq = _r73_t0['assign-unicode']['bind'](_r73_t0);
        r73_xn$startfrom$1aao = _r73_t0['start-from']['bind'](_r73_t0);
        r73_xn$lineto$5sIl = _r73_t0['line-to']['bind'](_r73_t0);
        r73_xn$curveto$1aao = _r73_t0['curve-to']['bind'](_r73_t0);
        r73_xn$cubicto$1aao = _r73_t0['cubic-to']['bind'](_r73_t0);
        r73_xn$putshapes$9Jrj = _r73_t0['put-shapes']['bind'](_r73_t0);
        r73_xn$reverselast$3qIs = _r73_t0['reverse-last']['bind'](_r73_t0);
        r73_xn$includeglyph$3qIs = _r73_t0['include-glyph']['bind'](_r73_t0);
        r73_xn$createstroke$7Hrq = _r73_t0['create-stroke']['bind'](_r73_t0);
        _r73_t0['gizmo'] = r0_globalTransform;
        _r73_t0['set-width'](r0_WIDTH);
        r73_xn$setwidth$9Jrj(r0_WIDTH);
        r73_xn$assignunicode$7Hrq('q');
        r73_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r73_xn$putshapes$9Jrj(r73_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, r0_XH)['pen-direction'](r0_DOWNWARD)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB, r0_DESCENDER)['pen-direction'](r0_DOWNWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('d', function _r0_t36() {
        var r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_xn$includeglyph$3qIs, r75_xn$createstroke$7Hrq, _r75_t0;
        _r75_t0 = this;
        r75_xn$setwidth$9Jrj = _r75_t0['set-width']['bind'](_r75_t0);
        r75_xn$assignunicode$7Hrq = _r75_t0['assign-unicode']['bind'](_r75_t0);
        r75_xn$startfrom$1aao = _r75_t0['start-from']['bind'](_r75_t0);
        r75_xn$lineto$5sIl = _r75_t0['line-to']['bind'](_r75_t0);
        r75_xn$curveto$1aao = _r75_t0['curve-to']['bind'](_r75_t0);
        r75_xn$cubicto$1aao = _r75_t0['cubic-to']['bind'](_r75_t0);
        r75_xn$putshapes$9Jrj = _r75_t0['put-shapes']['bind'](_r75_t0);
        r75_xn$reverselast$3qIs = _r75_t0['reverse-last']['bind'](_r75_t0);
        r75_xn$includeglyph$3qIs = _r75_t0['include-glyph']['bind'](_r75_t0);
        r75_xn$createstroke$7Hrq = _r75_t0['create-stroke']['bind'](_r75_t0);
        _r75_t0['gizmo'] = r0_globalTransform;
        _r75_t0['set-width'](r0_WIDTH);
        r75_xn$setwidth$9Jrj(r0_WIDTH);
        r75_xn$assignunicode$7Hrq('d');
        r75_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r75_xn$putshapes$9Jrj(r75_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('g', function _r0_t37() {
        var r77_xn$setwidth$9Jrj, r77_xn$assignunicode$7Hrq, r77_xn$startfrom$1aao, r77_xn$lineto$5sIl, r77_xn$curveto$1aao, r77_xn$cubicto$1aao, r77_xn$putshapes$9Jrj, r77_xn$reverselast$3qIs, r77_xn$includeglyph$3qIs, r77_xn$createstroke$7Hrq, _r77_t0;
        _r77_t0 = this;
        r77_xn$setwidth$9Jrj = _r77_t0['set-width']['bind'](_r77_t0);
        r77_xn$assignunicode$7Hrq = _r77_t0['assign-unicode']['bind'](_r77_t0);
        r77_xn$startfrom$1aao = _r77_t0['start-from']['bind'](_r77_t0);
        r77_xn$lineto$5sIl = _r77_t0['line-to']['bind'](_r77_t0);
        r77_xn$curveto$1aao = _r77_t0['curve-to']['bind'](_r77_t0);
        r77_xn$cubicto$1aao = _r77_t0['cubic-to']['bind'](_r77_t0);
        r77_xn$putshapes$9Jrj = _r77_t0['put-shapes']['bind'](_r77_t0);
        r77_xn$reverselast$3qIs = _r77_t0['reverse-last']['bind'](_r77_t0);
        r77_xn$includeglyph$3qIs = _r77_t0['include-glyph']['bind'](_r77_t0);
        r77_xn$createstroke$7Hrq = _r77_t0['create-stroke']['bind'](_r77_t0);
        _r77_t0['gizmo'] = r0_globalTransform;
        _r77_t0['set-width'](r0_WIDTH);
        r77_xn$setwidth$9Jrj(r0_WIDTH);
        r77_xn$assignunicode$7Hrq('g');
        r77_xn$putshapes$9Jrj([
            r0_Ring(r0_XO, r0_XH * r0_GBARPOS, r0_SB * 1.25, r0_RIGHTSB - 0.25 * r0_SB, r0_SMALLSMOOTH),
            r0_Ring(r0_XO - r0_STROKE, r0_XH * r0_GBARPOS + r0_STROKE, r0_SB * 1.25 + r0_STROKE, r0_RIGHTSB - 0.25 * r0_SB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r77_xn$reverselast$3qIs();
        r77_xn$putshapes$9Jrj(r77_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XH * r0_GBARPOS)['set-width'](0, r0_STROKE * 0.75)['arc-hv-to'](r0_SB * 1.5 + r0_STROKE, (r0_O - r0_DESCENDER * 0.85 + r0_XH * r0_GBARPOS) * 0.47)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['line-to'](r0_MIDDLE - r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['arc-hv-to'](r0_RIGHTSB - r0_O * 2, -r0_STROKE * r0_globalTransform['yx'] * 2)['arc-vh-to'](r0_MIDDLE, r0_DESCENDER + r0_O)['arc-hv-to'](r0_SB, r0_DESCENDER * 0.1)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['form-stroke']());
        r77_xn$startfrom$1aao(r0_RIGHTSB + 0.5 * r0_SB, r0_XH);
        r77_xn$lineto$5sIl(r0_RIGHTSB + 0.5 * r0_SB, r0_XH - r0_STROKE);
        r77_xn$lineto$5sIl(r0_MIDDLE, r0_XH - r0_STROKE - r0_O);
        r77_xn$lineto$5sIl(r0_MIDDLE, r0_XH);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('c', function _r0_t38() {
        var r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, r79_xn$includeglyph$3qIs, r79_xn$createstroke$7Hrq, r79_outline, _r79_t0;
        _r79_t0 = this;
        r79_xn$setwidth$9Jrj = _r79_t0['set-width']['bind'](_r79_t0);
        r79_xn$assignunicode$7Hrq = _r79_t0['assign-unicode']['bind'](_r79_t0);
        r79_xn$startfrom$1aao = _r79_t0['start-from']['bind'](_r79_t0);
        r79_xn$lineto$5sIl = _r79_t0['line-to']['bind'](_r79_t0);
        r79_xn$curveto$1aao = _r79_t0['curve-to']['bind'](_r79_t0);
        r79_xn$cubicto$1aao = _r79_t0['cubic-to']['bind'](_r79_t0);
        r79_xn$putshapes$9Jrj = _r79_t0['put-shapes']['bind'](_r79_t0);
        r79_xn$reverselast$3qIs = _r79_t0['reverse-last']['bind'](_r79_t0);
        r79_xn$includeglyph$3qIs = _r79_t0['include-glyph']['bind'](_r79_t0);
        r79_xn$createstroke$7Hrq = _r79_t0['create-stroke']['bind'](_r79_t0);
        _r79_t0['gizmo'] = r0_globalTransform;
        _r79_t0['set-width'](r0_WIDTH);
        r79_xn$setwidth$9Jrj(r0_WIDTH);
        r79_xn$assignunicode$7Hrq('c');
        r79_outline = r79_xn$createstroke$7Hrq();
        r79_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_XH - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_XO, r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK, r0_HOOK);
        r79_xn$putshapes$9Jrj(r79_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('e', function _r0_t39() {
        var r81_xn$setwidth$9Jrj, r81_xn$assignunicode$7Hrq, r81_xn$startfrom$1aao, r81_xn$lineto$5sIl, r81_xn$curveto$1aao, r81_xn$cubicto$1aao, r81_xn$putshapes$9Jrj, r81_xn$reverselast$3qIs, r81_xn$includeglyph$3qIs, r81_xn$createstroke$7Hrq, r81_barbottom, r81_outline, r81_bar, _r81_t0;
        _r81_t0 = this;
        r81_xn$setwidth$9Jrj = _r81_t0['set-width']['bind'](_r81_t0);
        r81_xn$assignunicode$7Hrq = _r81_t0['assign-unicode']['bind'](_r81_t0);
        r81_xn$startfrom$1aao = _r81_t0['start-from']['bind'](_r81_t0);
        r81_xn$lineto$5sIl = _r81_t0['line-to']['bind'](_r81_t0);
        r81_xn$curveto$1aao = _r81_t0['curve-to']['bind'](_r81_t0);
        r81_xn$cubicto$1aao = _r81_t0['cubic-to']['bind'](_r81_t0);
        r81_xn$putshapes$9Jrj = _r81_t0['put-shapes']['bind'](_r81_t0);
        r81_xn$reverselast$3qIs = _r81_t0['reverse-last']['bind'](_r81_t0);
        r81_xn$includeglyph$3qIs = _r81_t0['include-glyph']['bind'](_r81_t0);
        r81_xn$createstroke$7Hrq = _r81_t0['create-stroke']['bind'](_r81_t0);
        _r81_t0['gizmo'] = r0_globalTransform;
        _r81_t0['set-width'](r0_WIDTH);
        r81_xn$setwidth$9Jrj(r0_WIDTH);
        r81_xn$assignunicode$7Hrq('e');
        r81_barbottom = r0_XH * r0_BARPOS;
        r81_outline = r81_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_O, r81_barbottom)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK, r0_HOOK);
        r81_bar = r81_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE, r81_barbottom)['set-width'](r0_STROKE, 0)['pen-direction'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r81_barbottom)['pen-direction'](r0_RIGHTWARD);
        r81_xn$putshapes$9Jrj(r81_outline['form-stroke']());
        r81_xn$putshapes$9Jrj(r81_bar['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a.upright', function _r0_t40() {
        var r83_xn$setwidth$9Jrj, r83_xn$assignunicode$7Hrq, r83_xn$startfrom$1aao, r83_xn$lineto$5sIl, r83_xn$curveto$1aao, r83_xn$cubicto$1aao, r83_xn$putshapes$9Jrj, r83_xn$reverselast$3qIs, r83_xn$includeglyph$3qIs, r83_xn$createstroke$7Hrq, r83_bartop, _r83_t0;
        _r83_t0 = this;
        r83_xn$setwidth$9Jrj = _r83_t0['set-width']['bind'](_r83_t0);
        r83_xn$assignunicode$7Hrq = _r83_t0['assign-unicode']['bind'](_r83_t0);
        r83_xn$startfrom$1aao = _r83_t0['start-from']['bind'](_r83_t0);
        r83_xn$lineto$5sIl = _r83_t0['line-to']['bind'](_r83_t0);
        r83_xn$curveto$1aao = _r83_t0['curve-to']['bind'](_r83_t0);
        r83_xn$cubicto$1aao = _r83_t0['cubic-to']['bind'](_r83_t0);
        r83_xn$putshapes$9Jrj = _r83_t0['put-shapes']['bind'](_r83_t0);
        r83_xn$reverselast$3qIs = _r83_t0['reverse-last']['bind'](_r83_t0);
        r83_xn$includeglyph$3qIs = _r83_t0['include-glyph']['bind'](_r83_t0);
        r83_xn$createstroke$7Hrq = _r83_t0['create-stroke']['bind'](_r83_t0);
        _r83_t0['gizmo'] = r0_globalTransform;
        _r83_t0['set-width'](r0_WIDTH);
        r83_xn$setwidth$9Jrj(r0_WIDTH);
        r83_bartop = r0_XH * r0_BARPOS + r0_STROKE;
        r83_xn$putshapes$9Jrj(r83_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH - r0_SMOOTHA)['arc-vh-to'](r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_AHOOK * (r0_MIDDLE - r0_SB), r0_XO, r0_SB + r0_OXHOOK, r0_XH - r0_AHOOK)['form-stroke']());
        r83_xn$putshapes$9Jrj(r83_xn$createstroke$7Hrq()['start-from'](r0_WIDTH * 0.47, r0_O)['set-width'](0, r0_STROKE)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r83_bartop * 0.45)['arc-vh-to'](r0_WIDTH * 0.6, r83_bartop)['line-to'](r0_RIGHTSB, r83_bartop)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        r83_xn$putshapes$9Jrj(r83_xn$createstroke$7Hrq()['start-from'](r0_WIDTH * 0.47, r0_O + r0_STROKE)['set-width'](0, r0_STROKE)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTHA * 0.65)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE * 0.4)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a.italic', function _r0_t41() {
        var r85_xn$setwidth$9Jrj, r85_xn$assignunicode$7Hrq, r85_xn$startfrom$1aao, r85_xn$lineto$5sIl, r85_xn$curveto$1aao, r85_xn$cubicto$1aao, r85_xn$putshapes$9Jrj, r85_xn$reverselast$3qIs, r85_xn$includeglyph$3qIs, r85_xn$createstroke$7Hrq, _r85_t0;
        _r85_t0 = this;
        r85_xn$setwidth$9Jrj = _r85_t0['set-width']['bind'](_r85_t0);
        r85_xn$assignunicode$7Hrq = _r85_t0['assign-unicode']['bind'](_r85_t0);
        r85_xn$startfrom$1aao = _r85_t0['start-from']['bind'](_r85_t0);
        r85_xn$lineto$5sIl = _r85_t0['line-to']['bind'](_r85_t0);
        r85_xn$curveto$1aao = _r85_t0['curve-to']['bind'](_r85_t0);
        r85_xn$cubicto$1aao = _r85_t0['cubic-to']['bind'](_r85_t0);
        r85_xn$putshapes$9Jrj = _r85_t0['put-shapes']['bind'](_r85_t0);
        r85_xn$reverselast$3qIs = _r85_t0['reverse-last']['bind'](_r85_t0);
        r85_xn$includeglyph$3qIs = _r85_t0['include-glyph']['bind'](_r85_t0);
        r85_xn$createstroke$7Hrq = _r85_t0['create-stroke']['bind'](_r85_t0);
        _r85_t0['gizmo'] = r0_globalTransform;
        _r85_t0['set-width'](r0_WIDTH);
        r85_xn$setwidth$9Jrj(r0_WIDTH);
        r85_xn$includeglyph$3qIs(r0_glyphs['o.right']);
        r85_xn$putshapes$9Jrj(r85_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a', function _r0_t42() {
        var r87_xn$setwidth$9Jrj, r87_xn$assignunicode$7Hrq, r87_xn$startfrom$1aao, r87_xn$lineto$5sIl, r87_xn$curveto$1aao, r87_xn$cubicto$1aao, r87_xn$putshapes$9Jrj, r87_xn$reverselast$3qIs, r87_xn$includeglyph$3qIs, r87_xn$createstroke$7Hrq, _r87_t0;
        _r87_t0 = this;
        r87_xn$setwidth$9Jrj = _r87_t0['set-width']['bind'](_r87_t0);
        r87_xn$assignunicode$7Hrq = _r87_t0['assign-unicode']['bind'](_r87_t0);
        r87_xn$startfrom$1aao = _r87_t0['start-from']['bind'](_r87_t0);
        r87_xn$lineto$5sIl = _r87_t0['line-to']['bind'](_r87_t0);
        r87_xn$curveto$1aao = _r87_t0['curve-to']['bind'](_r87_t0);
        r87_xn$cubicto$1aao = _r87_t0['cubic-to']['bind'](_r87_t0);
        r87_xn$putshapes$9Jrj = _r87_t0['put-shapes']['bind'](_r87_t0);
        r87_xn$reverselast$3qIs = _r87_t0['reverse-last']['bind'](_r87_t0);
        r87_xn$includeglyph$3qIs = _r87_t0['include-glyph']['bind'](_r87_t0);
        r87_xn$createstroke$7Hrq = _r87_t0['create-stroke']['bind'](_r87_t0);
        _r87_t0['gizmo'] = r0_globalTransform;
        _r87_t0['set-width'](r0_WIDTH);
        r87_xn$setwidth$9Jrj(r0_WIDTH);
        r87_xn$assignunicode$7Hrq('a');
        if (r0_para['italicangle'] > 0) {
            r87_xn$includeglyph$3qIs(r0_glyphs['a.italic']);
        } else {
            r87_xn$includeglyph$3qIs(r0_glyphs['a.upright']);
        }
        return void 0;
    });
    r0_xn$createglyph$7Hrq('u', function _r0_t43() {
        var r89_xn$setwidth$9Jrj, r89_xn$assignunicode$7Hrq, r89_xn$startfrom$1aao, r89_xn$lineto$5sIl, r89_xn$curveto$1aao, r89_xn$cubicto$1aao, r89_xn$putshapes$9Jrj, r89_xn$reverselast$3qIs, r89_xn$includeglyph$3qIs, r89_xn$createstroke$7Hrq, _r89_t0;
        _r89_t0 = this;
        r89_xn$setwidth$9Jrj = _r89_t0['set-width']['bind'](_r89_t0);
        r89_xn$assignunicode$7Hrq = _r89_t0['assign-unicode']['bind'](_r89_t0);
        r89_xn$startfrom$1aao = _r89_t0['start-from']['bind'](_r89_t0);
        r89_xn$lineto$5sIl = _r89_t0['line-to']['bind'](_r89_t0);
        r89_xn$curveto$1aao = _r89_t0['curve-to']['bind'](_r89_t0);
        r89_xn$cubicto$1aao = _r89_t0['cubic-to']['bind'](_r89_t0);
        r89_xn$putshapes$9Jrj = _r89_t0['put-shapes']['bind'](_r89_t0);
        r89_xn$reverselast$3qIs = _r89_t0['reverse-last']['bind'](_r89_t0);
        r89_xn$includeglyph$3qIs = _r89_t0['include-glyph']['bind'](_r89_t0);
        r89_xn$createstroke$7Hrq = _r89_t0['create-stroke']['bind'](_r89_t0);
        _r89_t0['gizmo'] = r0_globalTransform;
        _r89_t0['set-width'](r0_WIDTH);
        r89_xn$setwidth$9Jrj(r0_WIDTH);
        r89_xn$assignunicode$7Hrq('u');
        r89_xn$putshapes$9Jrj(r89_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_XH)['pen-direction'](r0_DOWNWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        r89_xn$putshapes$9Jrj(r89_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['set-width'](0, r0_STROKE)['pen-direction'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTHA)['pen-direction'](r0_UPWARD)['set-width'](0, r0_STROKE * 0.4)['form-stroke']());
        r89_xn$putshapes$9Jrj(r89_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.straight', function _r0_t44() {
        var r91_xn$setwidth$9Jrj, r91_xn$assignunicode$7Hrq, r91_xn$startfrom$1aao, r91_xn$lineto$5sIl, r91_xn$curveto$1aao, r91_xn$cubicto$1aao, r91_xn$putshapes$9Jrj, r91_xn$reverselast$3qIs, r91_xn$includeglyph$3qIs, r91_xn$createstroke$7Hrq, _r91_t0;
        _r91_t0 = this;
        r91_xn$setwidth$9Jrj = _r91_t0['set-width']['bind'](_r91_t0);
        r91_xn$assignunicode$7Hrq = _r91_t0['assign-unicode']['bind'](_r91_t0);
        r91_xn$startfrom$1aao = _r91_t0['start-from']['bind'](_r91_t0);
        r91_xn$lineto$5sIl = _r91_t0['line-to']['bind'](_r91_t0);
        r91_xn$curveto$1aao = _r91_t0['curve-to']['bind'](_r91_t0);
        r91_xn$cubicto$1aao = _r91_t0['cubic-to']['bind'](_r91_t0);
        r91_xn$putshapes$9Jrj = _r91_t0['put-shapes']['bind'](_r91_t0);
        r91_xn$reverselast$3qIs = _r91_t0['reverse-last']['bind'](_r91_t0);
        r91_xn$includeglyph$3qIs = _r91_t0['include-glyph']['bind'](_r91_t0);
        r91_xn$createstroke$7Hrq = _r91_t0['create-stroke']['bind'](_r91_t0);
        _r91_t0['gizmo'] = r0_globalTransform;
        _r91_t0['set-width'](r0_WIDTH);
        r91_xn$putshapes$9Jrj(r91_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_XH)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.hooky', function _r0_t45() {
        var r93_xn$setwidth$9Jrj, r93_xn$assignunicode$7Hrq, r93_xn$startfrom$1aao, r93_xn$lineto$5sIl, r93_xn$curveto$1aao, r93_xn$cubicto$1aao, r93_xn$putshapes$9Jrj, r93_xn$reverselast$3qIs, r93_xn$includeglyph$3qIs, r93_xn$createstroke$7Hrq, _r93_t0;
        _r93_t0 = this;
        r93_xn$setwidth$9Jrj = _r93_t0['set-width']['bind'](_r93_t0);
        r93_xn$assignunicode$7Hrq = _r93_t0['assign-unicode']['bind'](_r93_t0);
        r93_xn$startfrom$1aao = _r93_t0['start-from']['bind'](_r93_t0);
        r93_xn$lineto$5sIl = _r93_t0['line-to']['bind'](_r93_t0);
        r93_xn$curveto$1aao = _r93_t0['curve-to']['bind'](_r93_t0);
        r93_xn$cubicto$1aao = _r93_t0['cubic-to']['bind'](_r93_t0);
        r93_xn$putshapes$9Jrj = _r93_t0['put-shapes']['bind'](_r93_t0);
        r93_xn$reverselast$3qIs = _r93_t0['reverse-last']['bind'](_r93_t0);
        r93_xn$includeglyph$3qIs = _r93_t0['include-glyph']['bind'](_r93_t0);
        r93_xn$createstroke$7Hrq = _r93_t0['create-stroke']['bind'](_r93_t0);
        _r93_t0['gizmo'] = r0_globalTransform;
        _r93_t0['set-width'](r0_WIDTH);
        r93_xn$includeglyph$3qIs(r0_glyphs['dotlessi.straight']);
        r93_xn$putshapes$9Jrj(r93_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r0_HALFSTROKE, r0_XH)['pen-direction'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE - r0_LONGSERIF, r0_XH)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.zshaped', function _r0_t46() {
        var r95_xn$setwidth$9Jrj, r95_xn$assignunicode$7Hrq, r95_xn$startfrom$1aao, r95_xn$lineto$5sIl, r95_xn$curveto$1aao, r95_xn$cubicto$1aao, r95_xn$putshapes$9Jrj, r95_xn$reverselast$3qIs, r95_xn$includeglyph$3qIs, r95_xn$createstroke$7Hrq, _r95_t0;
        _r95_t0 = this;
        r95_xn$setwidth$9Jrj = _r95_t0['set-width']['bind'](_r95_t0);
        r95_xn$assignunicode$7Hrq = _r95_t0['assign-unicode']['bind'](_r95_t0);
        r95_xn$startfrom$1aao = _r95_t0['start-from']['bind'](_r95_t0);
        r95_xn$lineto$5sIl = _r95_t0['line-to']['bind'](_r95_t0);
        r95_xn$curveto$1aao = _r95_t0['curve-to']['bind'](_r95_t0);
        r95_xn$cubicto$1aao = _r95_t0['cubic-to']['bind'](_r95_t0);
        r95_xn$putshapes$9Jrj = _r95_t0['put-shapes']['bind'](_r95_t0);
        r95_xn$reverselast$3qIs = _r95_t0['reverse-last']['bind'](_r95_t0);
        r95_xn$includeglyph$3qIs = _r95_t0['include-glyph']['bind'](_r95_t0);
        r95_xn$createstroke$7Hrq = _r95_t0['create-stroke']['bind'](_r95_t0);
        _r95_t0['gizmo'] = r0_globalTransform;
        _r95_t0['set-width'](r0_WIDTH);
        r95_xn$includeglyph$3qIs(r0_glyphs['dotlessi.hooky']);
        r95_xn$putshapes$9Jrj(r95_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_HALFSTROKE, 0)['pen-direction'](r0_RIGHTWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE + r0_LONGSERIF, 0)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.serifed', function _r0_t47() {
        var r97_xn$setwidth$9Jrj, r97_xn$assignunicode$7Hrq, r97_xn$startfrom$1aao, r97_xn$lineto$5sIl, r97_xn$curveto$1aao, r97_xn$cubicto$1aao, r97_xn$putshapes$9Jrj, r97_xn$reverselast$3qIs, r97_xn$includeglyph$3qIs, r97_xn$createstroke$7Hrq, _r97_t0;
        _r97_t0 = this;
        r97_xn$setwidth$9Jrj = _r97_t0['set-width']['bind'](_r97_t0);
        r97_xn$assignunicode$7Hrq = _r97_t0['assign-unicode']['bind'](_r97_t0);
        r97_xn$startfrom$1aao = _r97_t0['start-from']['bind'](_r97_t0);
        r97_xn$lineto$5sIl = _r97_t0['line-to']['bind'](_r97_t0);
        r97_xn$curveto$1aao = _r97_t0['curve-to']['bind'](_r97_t0);
        r97_xn$cubicto$1aao = _r97_t0['cubic-to']['bind'](_r97_t0);
        r97_xn$putshapes$9Jrj = _r97_t0['put-shapes']['bind'](_r97_t0);
        r97_xn$reverselast$3qIs = _r97_t0['reverse-last']['bind'](_r97_t0);
        r97_xn$includeglyph$3qIs = _r97_t0['include-glyph']['bind'](_r97_t0);
        r97_xn$createstroke$7Hrq = _r97_t0['create-stroke']['bind'](_r97_t0);
        _r97_t0['gizmo'] = r0_globalTransform;
        _r97_t0['set-width'](r0_WIDTH);
        r97_xn$includeglyph$3qIs(r0_glyphs['dotlessi.zshaped']);
        r97_xn$putshapes$9Jrj(r97_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r0_HALFSTROKE, 0)['pen-direction'](r0_LEFTWARD)['set-width'](0, r0_STROKE)['line-to'](r0_MIDDLE - r0_LONGSERIF, 0)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi', function _r0_t48() {
        var r99_xn$setwidth$9Jrj, r99_xn$assignunicode$7Hrq, r99_xn$startfrom$1aao, r99_xn$lineto$5sIl, r99_xn$curveto$1aao, r99_xn$cubicto$1aao, r99_xn$putshapes$9Jrj, r99_xn$reverselast$3qIs, r99_xn$includeglyph$3qIs, r99_xn$createstroke$7Hrq, r99_otherwise, _r99_t0, _r99_t1, _r99_t2, _r99_t3, _r99_t4, _r99_t5, _r99_t6, _r99_t7, _r99_t8;
        _r99_t1 = this;
        r99_xn$setwidth$9Jrj = _r99_t1['set-width']['bind'](_r99_t1);
        r99_xn$assignunicode$7Hrq = _r99_t1['assign-unicode']['bind'](_r99_t1);
        r99_xn$startfrom$1aao = _r99_t1['start-from']['bind'](_r99_t1);
        r99_xn$lineto$5sIl = _r99_t1['line-to']['bind'](_r99_t1);
        r99_xn$curveto$1aao = _r99_t1['curve-to']['bind'](_r99_t1);
        r99_xn$cubicto$1aao = _r99_t1['cubic-to']['bind'](_r99_t1);
        r99_xn$putshapes$9Jrj = _r99_t1['put-shapes']['bind'](_r99_t1);
        r99_xn$reverselast$3qIs = _r99_t1['reverse-last']['bind'](_r99_t1);
        r99_xn$includeglyph$3qIs = _r99_t1['include-glyph']['bind'](_r99_t1);
        r99_xn$createstroke$7Hrq = _r99_t1['create-stroke']['bind'](_r99_t1);
        _r99_t1['gizmo'] = r0_globalTransform;
        _r99_t1['set-width'](r0_WIDTH);
        r99_xn$setwidth$9Jrj(r0_WIDTH);
        r99_xn$assignunicode$7Hrq(305);
        _r99_t2 = r99_xn$includeglyph$3qIs;
        _r99_t3 = r0_glyphs;
        _r99_t0 = r0_variantSelector['zero'];
        if ('straight' === _r99_t0) {
            _r99_t4 = 'dotlessi.straight';
        } else {
            if ('hooky' === _r99_t0) {
                _r99_t5 = 'dotlessi.hooky';
            } else {
                if ('zshaped' === _r99_t0) {
                    _r99_t6 = 'dotlessi.zshaped';
                } else {
                    if ('serifed' === _r99_t0) {
                        _r99_t7 = 'dotlessi.serifed';
                    } else {
                        r99_otherwise = _r99_t0;
                        _r99_t7 = 'dotlessi.zshaped';
                    }
                    _r99_t6 = _r99_t7;
                }
                _r99_t5 = _r99_t6;
            }
            _r99_t4 = _r99_t5;
        }
        _r99_t8 = _r99_t3[_r99_t4];
        _r99_t2(_r99_t8);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotaccent', function _r0_t49() {
        var r101_xn$setwidth$9Jrj, r101_xn$assignunicode$7Hrq, r101_xn$startfrom$1aao, r101_xn$lineto$5sIl, r101_xn$curveto$1aao, r101_xn$cubicto$1aao, r101_xn$putshapes$9Jrj, r101_xn$reverselast$3qIs, r101_xn$includeglyph$3qIs, r101_xn$createstroke$7Hrq, _r101_t0;
        _r101_t0 = this;
        r101_xn$setwidth$9Jrj = _r101_t0['set-width']['bind'](_r101_t0);
        r101_xn$assignunicode$7Hrq = _r101_t0['assign-unicode']['bind'](_r101_t0);
        r101_xn$startfrom$1aao = _r101_t0['start-from']['bind'](_r101_t0);
        r101_xn$lineto$5sIl = _r101_t0['line-to']['bind'](_r101_t0);
        r101_xn$curveto$1aao = _r101_t0['curve-to']['bind'](_r101_t0);
        r101_xn$cubicto$1aao = _r101_t0['cubic-to']['bind'](_r101_t0);
        r101_xn$putshapes$9Jrj = _r101_t0['put-shapes']['bind'](_r101_t0);
        r101_xn$reverselast$3qIs = _r101_t0['reverse-last']['bind'](_r101_t0);
        r101_xn$includeglyph$3qIs = _r101_t0['include-glyph']['bind'](_r101_t0);
        r101_xn$createstroke$7Hrq = _r101_t0['create-stroke']['bind'](_r101_t0);
        _r101_t0['gizmo'] = r0_globalTransform;
        _r101_t0['set-width'](r0_WIDTH);
        r101_xn$setwidth$9Jrj(r0_WIDTH);
        r101_xn$putshapes$9Jrj([r0_Ring(r0_XH + r0_ACCENT + r0_DOTRADIUS, r0_XH + r0_ACCENT - r0_DOTRADIUS, r0_MIDDLE - r0_DOTRADIUS, r0_MIDDLE + r0_DOTRADIUS)]);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('i', function _r0_t50() {
        var r103_xn$setwidth$9Jrj, r103_xn$assignunicode$7Hrq, r103_xn$startfrom$1aao, r103_xn$lineto$5sIl, r103_xn$curveto$1aao, r103_xn$cubicto$1aao, r103_xn$putshapes$9Jrj, r103_xn$reverselast$3qIs, r103_xn$includeglyph$3qIs, r103_xn$createstroke$7Hrq, _r103_t0;
        _r103_t0 = this;
        r103_xn$setwidth$9Jrj = _r103_t0['set-width']['bind'](_r103_t0);
        r103_xn$assignunicode$7Hrq = _r103_t0['assign-unicode']['bind'](_r103_t0);
        r103_xn$startfrom$1aao = _r103_t0['start-from']['bind'](_r103_t0);
        r103_xn$lineto$5sIl = _r103_t0['line-to']['bind'](_r103_t0);
        r103_xn$curveto$1aao = _r103_t0['curve-to']['bind'](_r103_t0);
        r103_xn$cubicto$1aao = _r103_t0['cubic-to']['bind'](_r103_t0);
        r103_xn$putshapes$9Jrj = _r103_t0['put-shapes']['bind'](_r103_t0);
        r103_xn$reverselast$3qIs = _r103_t0['reverse-last']['bind'](_r103_t0);
        r103_xn$includeglyph$3qIs = _r103_t0['include-glyph']['bind'](_r103_t0);
        r103_xn$createstroke$7Hrq = _r103_t0['create-stroke']['bind'](_r103_t0);
        _r103_t0['gizmo'] = r0_globalTransform;
        _r103_t0['set-width'](r0_WIDTH);
        r103_xn$setwidth$9Jrj(r0_WIDTH);
        r103_xn$assignunicode$7Hrq('i');
        r103_xn$includeglyph$3qIs(r0_glyphs['dotlessi']);
        r103_xn$includeglyph$3qIs(r0_glyphs['dotaccent']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.straight', function _r0_t51() {
        var r105_xn$setwidth$9Jrj, r105_xn$assignunicode$7Hrq, r105_xn$startfrom$1aao, r105_xn$lineto$5sIl, r105_xn$curveto$1aao, r105_xn$cubicto$1aao, r105_xn$putshapes$9Jrj, r105_xn$reverselast$3qIs, r105_xn$includeglyph$3qIs, r105_xn$createstroke$7Hrq, _r105_t0;
        _r105_t0 = this;
        r105_xn$setwidth$9Jrj = _r105_t0['set-width']['bind'](_r105_t0);
        r105_xn$assignunicode$7Hrq = _r105_t0['assign-unicode']['bind'](_r105_t0);
        r105_xn$startfrom$1aao = _r105_t0['start-from']['bind'](_r105_t0);
        r105_xn$lineto$5sIl = _r105_t0['line-to']['bind'](_r105_t0);
        r105_xn$curveto$1aao = _r105_t0['curve-to']['bind'](_r105_t0);
        r105_xn$cubicto$1aao = _r105_t0['cubic-to']['bind'](_r105_t0);
        r105_xn$putshapes$9Jrj = _r105_t0['put-shapes']['bind'](_r105_t0);
        r105_xn$reverselast$3qIs = _r105_t0['reverse-last']['bind'](_r105_t0);
        r105_xn$includeglyph$3qIs = _r105_t0['include-glyph']['bind'](_r105_t0);
        r105_xn$createstroke$7Hrq = _r105_t0['create-stroke']['bind'](_r105_t0);
        _r105_t0['gizmo'] = r0_globalTransform;
        _r105_t0['set-width'](r0_WIDTH);
        r105_xn$putshapes$9Jrj(r105_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP)['pen-direction'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.hooky', function _r0_t52() {
        var r107_xn$setwidth$9Jrj, r107_xn$assignunicode$7Hrq, r107_xn$startfrom$1aao, r107_xn$lineto$5sIl, r107_xn$curveto$1aao, r107_xn$cubicto$1aao, r107_xn$putshapes$9Jrj, r107_xn$reverselast$3qIs, r107_xn$includeglyph$3qIs, r107_xn$createstroke$7Hrq, _r107_t0;
        _r107_t0 = this;
        r107_xn$setwidth$9Jrj = _r107_t0['set-width']['bind'](_r107_t0);
        r107_xn$assignunicode$7Hrq = _r107_t0['assign-unicode']['bind'](_r107_t0);
        r107_xn$startfrom$1aao = _r107_t0['start-from']['bind'](_r107_t0);
        r107_xn$lineto$5sIl = _r107_t0['line-to']['bind'](_r107_t0);
        r107_xn$curveto$1aao = _r107_t0['curve-to']['bind'](_r107_t0);
        r107_xn$cubicto$1aao = _r107_t0['cubic-to']['bind'](_r107_t0);
        r107_xn$putshapes$9Jrj = _r107_t0['put-shapes']['bind'](_r107_t0);
        r107_xn$reverselast$3qIs = _r107_t0['reverse-last']['bind'](_r107_t0);
        r107_xn$includeglyph$3qIs = _r107_t0['include-glyph']['bind'](_r107_t0);
        r107_xn$createstroke$7Hrq = _r107_t0['create-stroke']['bind'](_r107_t0);
        _r107_t0['gizmo'] = r0_globalTransform;
        _r107_t0['set-width'](r0_WIDTH);
        r107_xn$includeglyph$3qIs(r0_glyphs['l.straight']);
        r107_xn$putshapes$9Jrj(r107_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r0_HALFSTROKE, r0_CAP)['pen-direction'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE - r0_LONGSERIF, r0_CAP)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.zshaped', function _r0_t53() {
        var r109_xn$setwidth$9Jrj, r109_xn$assignunicode$7Hrq, r109_xn$startfrom$1aao, r109_xn$lineto$5sIl, r109_xn$curveto$1aao, r109_xn$cubicto$1aao, r109_xn$putshapes$9Jrj, r109_xn$reverselast$3qIs, r109_xn$includeglyph$3qIs, r109_xn$createstroke$7Hrq, _r109_t0;
        _r109_t0 = this;
        r109_xn$setwidth$9Jrj = _r109_t0['set-width']['bind'](_r109_t0);
        r109_xn$assignunicode$7Hrq = _r109_t0['assign-unicode']['bind'](_r109_t0);
        r109_xn$startfrom$1aao = _r109_t0['start-from']['bind'](_r109_t0);
        r109_xn$lineto$5sIl = _r109_t0['line-to']['bind'](_r109_t0);
        r109_xn$curveto$1aao = _r109_t0['curve-to']['bind'](_r109_t0);
        r109_xn$cubicto$1aao = _r109_t0['cubic-to']['bind'](_r109_t0);
        r109_xn$putshapes$9Jrj = _r109_t0['put-shapes']['bind'](_r109_t0);
        r109_xn$reverselast$3qIs = _r109_t0['reverse-last']['bind'](_r109_t0);
        r109_xn$includeglyph$3qIs = _r109_t0['include-glyph']['bind'](_r109_t0);
        r109_xn$createstroke$7Hrq = _r109_t0['create-stroke']['bind'](_r109_t0);
        _r109_t0['gizmo'] = r0_globalTransform;
        _r109_t0['set-width'](r0_WIDTH);
        r109_xn$includeglyph$3qIs(r0_glyphs['l.hooky']);
        r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_HALFSTROKE, 0)['pen-direction'](r0_RIGHTWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE + r0_LONGSERIF, 0)['pen-direction'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.serifed', function _r0_t54() {
        var r111_xn$setwidth$9Jrj, r111_xn$assignunicode$7Hrq, r111_xn$startfrom$1aao, r111_xn$lineto$5sIl, r111_xn$curveto$1aao, r111_xn$cubicto$1aao, r111_xn$putshapes$9Jrj, r111_xn$reverselast$3qIs, r111_xn$includeglyph$3qIs, r111_xn$createstroke$7Hrq, _r111_t0;
        _r111_t0 = this;
        r111_xn$setwidth$9Jrj = _r111_t0['set-width']['bind'](_r111_t0);
        r111_xn$assignunicode$7Hrq = _r111_t0['assign-unicode']['bind'](_r111_t0);
        r111_xn$startfrom$1aao = _r111_t0['start-from']['bind'](_r111_t0);
        r111_xn$lineto$5sIl = _r111_t0['line-to']['bind'](_r111_t0);
        r111_xn$curveto$1aao = _r111_t0['curve-to']['bind'](_r111_t0);
        r111_xn$cubicto$1aao = _r111_t0['cubic-to']['bind'](_r111_t0);
        r111_xn$putshapes$9Jrj = _r111_t0['put-shapes']['bind'](_r111_t0);
        r111_xn$reverselast$3qIs = _r111_t0['reverse-last']['bind'](_r111_t0);
        r111_xn$includeglyph$3qIs = _r111_t0['include-glyph']['bind'](_r111_t0);
        r111_xn$createstroke$7Hrq = _r111_t0['create-stroke']['bind'](_r111_t0);
        _r111_t0['gizmo'] = r0_globalTransform;
        _r111_t0['set-width'](r0_WIDTH);
        r111_xn$includeglyph$3qIs(r0_glyphs['l.zshaped']);
        r111_xn$putshapes$9Jrj(r111_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r0_HALFSTROKE, 0)['pen-direction'](r0_LEFTWARD)['set-width'](0, r0_STROKE)['line-to'](r0_MIDDLE - r0_LONGSERIF, 0)['pen-direction'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l', function _r0_t55() {
        var r113_xn$setwidth$9Jrj, r113_xn$assignunicode$7Hrq, r113_xn$startfrom$1aao, r113_xn$lineto$5sIl, r113_xn$curveto$1aao, r113_xn$cubicto$1aao, r113_xn$putshapes$9Jrj, r113_xn$reverselast$3qIs, r113_xn$includeglyph$3qIs, r113_xn$createstroke$7Hrq, r113_otherwise, _r113_t0, _r113_t1, _r113_t2, _r113_t3, _r113_t4, _r113_t5, _r113_t6, _r113_t7, _r113_t8;
        _r113_t1 = this;
        r113_xn$setwidth$9Jrj = _r113_t1['set-width']['bind'](_r113_t1);
        r113_xn$assignunicode$7Hrq = _r113_t1['assign-unicode']['bind'](_r113_t1);
        r113_xn$startfrom$1aao = _r113_t1['start-from']['bind'](_r113_t1);
        r113_xn$lineto$5sIl = _r113_t1['line-to']['bind'](_r113_t1);
        r113_xn$curveto$1aao = _r113_t1['curve-to']['bind'](_r113_t1);
        r113_xn$cubicto$1aao = _r113_t1['cubic-to']['bind'](_r113_t1);
        r113_xn$putshapes$9Jrj = _r113_t1['put-shapes']['bind'](_r113_t1);
        r113_xn$reverselast$3qIs = _r113_t1['reverse-last']['bind'](_r113_t1);
        r113_xn$includeglyph$3qIs = _r113_t1['include-glyph']['bind'](_r113_t1);
        r113_xn$createstroke$7Hrq = _r113_t1['create-stroke']['bind'](_r113_t1);
        _r113_t1['gizmo'] = r0_globalTransform;
        _r113_t1['set-width'](r0_WIDTH);
        r113_xn$setwidth$9Jrj(r0_WIDTH);
        r113_xn$assignunicode$7Hrq('l');
        _r113_t2 = r113_xn$includeglyph$3qIs;
        _r113_t3 = r0_glyphs;
        _r113_t0 = r0_variantSelector['zero'];
        if ('straight' === _r113_t0) {
            _r113_t4 = 'l.straight';
        } else {
            if ('hooky' === _r113_t0) {
                _r113_t5 = 'l.hooky';
            } else {
                if ('zshaped' === _r113_t0) {
                    _r113_t6 = 'l.zshaped';
                } else {
                    if ('serifed' === _r113_t0) {
                        _r113_t7 = 'l.serifed';
                    } else {
                        r113_otherwise = _r113_t0;
                        _r113_t7 = 'l.zshaped';
                    }
                    _r113_t6 = _r113_t7;
                }
                _r113_t5 = _r113_t6;
            }
            _r113_t4 = _r113_t5;
        }
        _r113_t8 = _r113_t3[_r113_t4];
        _r113_t2(_r113_t8);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('x', function _r0_t56() {
        var r115_xn$setwidth$9Jrj, r115_xn$assignunicode$7Hrq, r115_xn$startfrom$1aao, r115_xn$lineto$5sIl, r115_xn$curveto$1aao, r115_xn$cubicto$1aao, r115_xn$putshapes$9Jrj, r115_xn$reverselast$3qIs, r115_xn$includeglyph$3qIs, r115_xn$createstroke$7Hrq, r115_TURN, r115_barone, r115_bartwo, _r115_t0;
        _r115_t0 = this;
        r115_xn$setwidth$9Jrj = _r115_t0['set-width']['bind'](_r115_t0);
        r115_xn$assignunicode$7Hrq = _r115_t0['assign-unicode']['bind'](_r115_t0);
        r115_xn$startfrom$1aao = _r115_t0['start-from']['bind'](_r115_t0);
        r115_xn$lineto$5sIl = _r115_t0['line-to']['bind'](_r115_t0);
        r115_xn$curveto$1aao = _r115_t0['curve-to']['bind'](_r115_t0);
        r115_xn$cubicto$1aao = _r115_t0['cubic-to']['bind'](_r115_t0);
        r115_xn$putshapes$9Jrj = _r115_t0['put-shapes']['bind'](_r115_t0);
        r115_xn$reverselast$3qIs = _r115_t0['reverse-last']['bind'](_r115_t0);
        r115_xn$includeglyph$3qIs = _r115_t0['include-glyph']['bind'](_r115_t0);
        r115_xn$createstroke$7Hrq = _r115_t0['create-stroke']['bind'](_r115_t0);
        _r115_t0['gizmo'] = r0_globalTransform;
        _r115_t0['set-width'](r0_WIDTH);
        r115_xn$setwidth$9Jrj(r0_WIDTH);
        r115_xn$assignunicode$7Hrq('x');
        r115_TURN = r0_XH * 0.1;
        r115_barone = r115_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE + r0_O, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_SB + r0_HALFSTROKE + r0_O, r115_TURN + 0.17 * (r0_XH - r115_TURN), r0_RIGHTSB - r0_HALFSTROKE - r0_O, r0_XH - r115_TURN - 0.17 * (r0_XH - r115_TURN), r0_RIGHTSB - r0_HALFSTROKE - r0_O, r0_XH)['pen-direction'](r0_UPWARD);
        r115_bartwo = r115_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_HALFSTROKE - r0_O, 0)['pen-direction'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_RIGHTSB - r0_HALFSTROKE - r0_O, r115_TURN + 0.17 * (r0_XH - r115_TURN), r0_SB + r0_HALFSTROKE + r0_O, r0_XH - r115_TURN - 0.17 * (r0_XH - r115_TURN), r0_SB + r0_HALFSTROKE + r0_O, r0_XH)['pen-direction'](r0_UPWARD);
        r115_xn$putshapes$9Jrj(r115_barone['form-stroke']());
        r115_xn$putshapes$9Jrj(r115_bartwo['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('s', function _r0_t57() {
        var r117_xn$setwidth$9Jrj, r117_xn$assignunicode$7Hrq, r117_xn$startfrom$1aao, r117_xn$lineto$5sIl, r117_xn$curveto$1aao, r117_xn$cubicto$1aao, r117_xn$putshapes$9Jrj, r117_xn$reverselast$3qIs, r117_xn$includeglyph$3qIs, r117_xn$createstroke$7Hrq, r117_slope, r117_expand, r117_coexpand, r117_ssmootha, r117_bowltop, r117_strokemiddle, r117_bowlbottom, _r117_t0;
        _r117_t0 = this;
        r117_xn$setwidth$9Jrj = _r117_t0['set-width']['bind'](_r117_t0);
        r117_xn$assignunicode$7Hrq = _r117_t0['assign-unicode']['bind'](_r117_t0);
        r117_xn$startfrom$1aao = _r117_t0['start-from']['bind'](_r117_t0);
        r117_xn$lineto$5sIl = _r117_t0['line-to']['bind'](_r117_t0);
        r117_xn$curveto$1aao = _r117_t0['curve-to']['bind'](_r117_t0);
        r117_xn$cubicto$1aao = _r117_t0['cubic-to']['bind'](_r117_t0);
        r117_xn$putshapes$9Jrj = _r117_t0['put-shapes']['bind'](_r117_t0);
        r117_xn$reverselast$3qIs = _r117_t0['reverse-last']['bind'](_r117_t0);
        r117_xn$includeglyph$3qIs = _r117_t0['include-glyph']['bind'](_r117_t0);
        r117_xn$createstroke$7Hrq = _r117_t0['create-stroke']['bind'](_r117_t0);
        _r117_t0['gizmo'] = r0_globalTransform;
        _r117_t0['set-width'](r0_WIDTH);
        r117_xn$setwidth$9Jrj(r0_WIDTH);
        r117_xn$assignunicode$7Hrq('s');
        r117_slope = 0.015;
        r117_expand = 0.175;
        r117_coexpand = (1 - r117_expand) / 2;
        r117_ssmootha = r0_SMOOTHA * 0.87;
        r117_bowltop = r117_xn$createstroke$7Hrq();
        r117_bowltop['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_XH - r0_SHOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_AHOOK * (r0_MIDDLE - r0_para['sb']), r0_XO, r0_MIDDLE, r0_XO)['pen-direction'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_XH - r117_ssmootha);
        r117_strokemiddle = r117_xn$createstroke$7Hrq();
        r117_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_XH - r117_ssmootha)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r117_slope) * r0_XH + 2 * r117_slope * r0_XH / (r117_expand * r0_WIDTH) * (r117_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r117_coexpand * r0_WIDTH, (0.5 + r117_slope) * r0_XH)['line-to']((1 - r117_coexpand) * r0_WIDTH, (0.5 - r117_slope) * r0_XH)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r117_slope) * r0_XH - 2 * r117_slope * r0_XH / (r117_expand * r0_WIDTH) * (r117_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r117_ssmootha);
        r117_bowlbottom = r117_xn$createstroke$7Hrq();
        r117_bowlbottom['start-from'](r0_RIGHTSB, r117_ssmootha)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE, r0_O)['pen-direction'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_AHOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB + r0_OXHOOK, r0_SHOOK);
        r117_xn$putshapes$9Jrj(r117_bowltop['form-stroke']());
        r117_xn$putshapes$9Jrj(r117_strokemiddle['form-stroke']());
        r117_xn$putshapes$9Jrj(r117_bowlbottom['form-stroke']());
        return void 0;
    });
    exports['font'] = r0_font;
}
