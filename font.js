{
    var r0_font, r0_glyphList, r0_glyphs, r0_Glyph, r0_Stroke, r0_para, r0_variantSelector, r0_DESCENDER, r0_WIDTH, r0_CAP, r0_XH, r0_O, r0_SB, r0_HOOK, r0_SMOOTH, r0_SMALLSMOOTH, r0_STROKE, r0_DOTSIZE, r0_XO, r0_CAPO, r0_HALFSTROKE, r0_RIGHTSB, r0_MIDDLE, r0_CAPMIDDLE, r0_CAP_SMOOTH, r0_DOTRADIUS, r0_KAPPA, r0_COKAPPA, r0_COBKAPPA, r0_BKAPPA, r0_KAPPA_HOOK, r0_Ring, r0_ORing, r0_xn$createglyph$7Hrq, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21, _r0_t22, _r0_t23, _r0_t24, _r0_t25, _r0_t26, _r0_t27, _r0_t28, _r0_t29, _r0_t30, _r0_t31, _r0_t32, _r0_t33, _r0_t34, _r0_t35;
    r0_font = require('./empty.json');
    r0_glyphList = r0_font['glyf'];
    r0_glyphs = { '.notdef': r0_glyphList[0] };
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    r0_para = {
        'width': 500,
        'stroke': 85,
        'dotsize': 100,
        'sb': 50,
        'cap': 771,
        'xheight': 572,
        'hook': 135,
        'smooth': 192,
        'smallsmooth': 242,
        'o': -8,
        'descender': -178,
        'kappa': 0.51
    };
    r0_variantSelector = { 'zero': 'slashed' };
    r0_DESCENDER = r0_para['descender'];
    r0_WIDTH = r0_para['width'];
    r0_CAP = r0_para['cap'];
    r0_XH = r0_para['xheight'];
    r0_O = r0_para['o'];
    r0_SB = r0_para['sb'];
    r0_HOOK = r0_para['hook'];
    r0_SMOOTH = r0_para['smooth'];
    r0_SMALLSMOOTH = r0_para['smallsmooth'];
    r0_STROKE = r0_para['stroke'];
    r0_DOTSIZE = r0_para['dotsize'];
    r0_XO = r0_XH - r0_O;
    r0_CAPO = r0_CAP - r0_O;
    r0_HALFSTROKE = r0_STROKE / 2;
    r0_RIGHTSB = r0_WIDTH - r0_SB;
    r0_MIDDLE = r0_WIDTH / 2;
    r0_CAPMIDDLE = r0_CAP / 2;
    r0_CAP_SMOOTH = r0_CAP - r0_SMOOTH;
    r0_DOTRADIUS = r0_para['dotsize'] / 2;
    r0_KAPPA = r0_para['kappa'];
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_KAPPA_HOOK = 0.7;
    r0_Stroke['bindParameters'](r0_para);
    r0_Ring = function _r0_t0(r1_u, r1_d, r1_l, r1_r) {
        var r1_u, r1_d, r1_l, r1_r, r1_my, r1_mx, r1_s;
        r1_my = (r1_u + r1_d) / 2;
        r1_mx = (r1_l + r1_r) / 2;
        r1_s = new r0_Stroke()['start-from'](r1_mx, r1_d)['cubic-to'](r1_mx + (r1_l - r1_mx) * r0_BKAPPA, r1_d, r1_l, r1_my + (r1_d - r1_my) * r0_BKAPPA, r1_l, r1_my)['cubic-to'](r1_l, r1_my + (r1_u - r1_my) * r0_BKAPPA, r1_mx + (r1_l - r1_mx) * r0_BKAPPA, r1_u, r1_mx, r1_u)['cubic-to'](r1_mx + (r1_r - r1_mx) * r0_BKAPPA, r1_u, r1_r, r1_my + (r1_u - r1_my) * r0_BKAPPA, r1_r, r1_my)['cubic-to'](r1_r, r1_my + (r1_d - r1_my) * r0_BKAPPA, r1_mx + (r1_r - r1_mx) * r0_BKAPPA, r1_d, r1_mx, r1_d);
        return r1_s['points'];
    };
    r0_ORing = function _r0_t1(r2_u, r2_d, r2_l, r2_r, r2_smooth) {
        var r2_u, r2_d, r2_l, r2_r, r2_smooth, r2_myu, r2_myd, r2_mx, r2_s;
        r2_myu = r2_u - r2_smooth;
        r2_myd = r2_d + r2_smooth;
        r2_mx = (r2_l + r2_r) / 2;
        r2_s = new r0_Stroke()['start-from'](r2_mx, r2_d)['cubic-to'](r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_d, r2_l, r2_myd + (r2_d - r2_myd) * r0_BKAPPA, r2_l, r2_myd)['line-to'](r2_l, r2_myu)['cubic-to'](r2_l, r2_myu + (r2_u - r2_myu) * r0_BKAPPA, r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_u, r2_mx, r2_u)['cubic-to'](r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_u, r2_r, r2_myu + (r2_u - r2_myu) * r0_BKAPPA, r2_r, r2_myu)['line-to'](r2_r, r2_myd)['cubic-to'](r2_r, r2_myd + (r2_d - r2_myd) * r0_BKAPPA, r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_d, r2_mx, r2_d);
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
        var r9_xn$setwidth$9Jrj, r9_xn$assignunicode$7Hrq, r9_xn$startfrom$1aao, r9_xn$lineto$5sIl, r9_xn$curveto$1aao, r9_xn$cubicto$1aao, r9_xn$putshapes$9Jrj, r9_xn$reverselast$3qIs, r9_xn$includeglyph$3qIs, _r9_t0;
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
        r9_xn$setwidth$9Jrj(r0_WIDTH);
        r9_xn$assignunicode$7Hrq(' ');
        return void 0;
    });
    r0_xn$createglyph$7Hrq('bar', function _r0_t4() {
        var r11_xn$setwidth$9Jrj, r11_xn$assignunicode$7Hrq, r11_xn$startfrom$1aao, r11_xn$lineto$5sIl, r11_xn$curveto$1aao, r11_xn$cubicto$1aao, r11_xn$putshapes$9Jrj, r11_xn$reverselast$3qIs, r11_xn$includeglyph$3qIs, _r11_t0;
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
        r11_xn$setwidth$9Jrj(r0_WIDTH);
        r11_xn$assignunicode$7Hrq('|');
        r11_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('A', function _r0_t5() {
        var r13_xn$setwidth$9Jrj, r13_xn$assignunicode$7Hrq, r13_xn$startfrom$1aao, r13_xn$lineto$5sIl, r13_xn$curveto$1aao, r13_xn$cubicto$1aao, r13_xn$putshapes$9Jrj, r13_xn$reverselast$3qIs, r13_xn$includeglyph$3qIs, r13_TURN, r13_leftbar, r13_rightbar, r13_hbar, _r13_t0;
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
        r13_xn$setwidth$9Jrj(r0_WIDTH);
        r13_xn$assignunicode$7Hrq('A');
        r13_TURN = r0_XH * 0.1;
        r13_leftbar = new r0_Stroke();
        r13_leftbar['start-from'](r0_SB, 0)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r13_TURN)['curve-to'](r0_SB, r13_TURN + 0.27 * (r0_CAP - r13_TURN), r0_MIDDLE - r0_STROKE / 2, r0_CAP)['set-width'](0, r0_STROKE * 0.8);
        r13_rightbar = new r0_Stroke();
        r13_rightbar['start-from'](r0_RIGHTSB, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r13_TURN)['curve-to'](r0_RIGHTSB, r13_TURN + 0.27 * (r0_CAP - r13_TURN), r0_MIDDLE + r0_STROKE / 2, r0_CAP)['set-width'](r0_STROKE * 0.8, 0);
        r13_hbar = new r0_Stroke()['start-from'](r0_SB + r0_STROKE, r0_XH / 2)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH / 2);
        r13_xn$putshapes$9Jrj(r13_leftbar['form-stroke']());
        r13_xn$putshapes$9Jrj(r13_hbar['form-stroke']());
        r13_xn$putshapes$9Jrj(r13_rightbar['form-stroke']());
        r13_xn$startfrom$1aao(r0_MIDDLE - r0_STROKE / 2, r0_CAP);
        r13_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, r0_CAP);
        r13_xn$lineto$5sIl(r0_MIDDLE, r0_CAP - r0_STROKE);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('X', function _r0_t6() {
        var r15_xn$setwidth$9Jrj, r15_xn$assignunicode$7Hrq, r15_xn$startfrom$1aao, r15_xn$lineto$5sIl, r15_xn$curveto$1aao, r15_xn$cubicto$1aao, r15_xn$putshapes$9Jrj, r15_xn$reverselast$3qIs, r15_xn$includeglyph$3qIs, r15_TURN, r15_straight, r15_strench, r15_barone, r15_bartwo, _r15_t0, _r15_t1;
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
        r15_xn$setwidth$9Jrj(r0_WIDTH);
        r15_xn$assignunicode$7Hrq('X');
        r15_TURN = r0_XH * 0.05;
        r15_straight = 0.6;
        r15_strench = 0.125;
        r15_barone = new r0_Stroke()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_SB + r0_HALFSTROKE, r15_TURN)['curve-to'](r0_SB + r0_HALFSTROKE, r15_TURN + r15_strench * (r0_CAP - r15_TURN), r0_MIDDLE + r15_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r15_TURN + r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r15_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r15_straight * (r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN) - r0_CAPMIDDLE))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r15_TURN - r15_strench * (r0_CAP - r15_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r15_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['form-stroke']();
        r15_bartwo = [r15_barone[0]['map'](function _r15_t1(r16_pt) {
                var r16_pt;
                return {
                    'x': r0_WIDTH - r16_pt['x'],
                    'y': r16_pt['y'],
                    'onCurve': r16_pt['onCurve'],
                    'cubic': r16_pt['cubic']
                };
            })['reverse']()];
        r15_xn$putshapes$9Jrj(r15_barone);
        r15_xn$putshapes$9Jrj(r15_bartwo);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Y', function _r0_t7() {
        var r18_xn$setwidth$9Jrj, r18_xn$assignunicode$7Hrq, r18_xn$startfrom$1aao, r18_xn$lineto$5sIl, r18_xn$curveto$1aao, r18_xn$cubicto$1aao, r18_xn$putshapes$9Jrj, r18_xn$reverselast$3qIs, r18_xn$includeglyph$3qIs, r18_TURN, r18_straight, r18_strench, r18_cross, r18_barone, r18_bartwo, _r18_t0, _r18_t1;
        _r18_t0 = this;
        r18_xn$setwidth$9Jrj = _r18_t0['set-width']['bind'](_r18_t0);
        r18_xn$assignunicode$7Hrq = _r18_t0['assign-unicode']['bind'](_r18_t0);
        r18_xn$startfrom$1aao = _r18_t0['start-from']['bind'](_r18_t0);
        r18_xn$lineto$5sIl = _r18_t0['line-to']['bind'](_r18_t0);
        r18_xn$curveto$1aao = _r18_t0['curve-to']['bind'](_r18_t0);
        r18_xn$cubicto$1aao = _r18_t0['cubic-to']['bind'](_r18_t0);
        r18_xn$putshapes$9Jrj = _r18_t0['put-shapes']['bind'](_r18_t0);
        r18_xn$reverselast$3qIs = _r18_t0['reverse-last']['bind'](_r18_t0);
        r18_xn$includeglyph$3qIs = _r18_t0['include-glyph']['bind'](_r18_t0);
        r18_xn$setwidth$9Jrj(r0_WIDTH);
        r18_xn$assignunicode$7Hrq('Y');
        r18_TURN = r0_XH * 0.05;
        r18_straight = 0.6;
        r18_strench = 0.15;
        r18_cross = r0_CAP * 0.4;
        r18_barone = new r0_Stroke()['start-from'](r0_MIDDLE, r18_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r18_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r18_cross + r18_straight * (r0_CAP - r18_TURN - r18_strench * (r0_CAP - r18_TURN) - r18_cross))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r18_TURN - r18_strench * (r0_CAP - r18_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r18_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['form-stroke']();
        r18_bartwo = [r18_barone[0]['map'](function _r18_t1(r19_pt) {
                var r19_pt;
                return {
                    'x': r0_WIDTH - r19_pt['x'],
                    'y': r19_pt['y'],
                    'onCurve': r19_pt['onCurve'],
                    'cubic': r19_pt['cubic']
                };
            })['reverse']()];
        r18_xn$putshapes$9Jrj(r18_barone);
        r18_xn$putshapes$9Jrj(r18_bartwo);
        r18_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r18_cross + r0_HALFSTROKE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('B', function _r0_t8() {
        var r21_xn$setwidth$9Jrj, r21_xn$assignunicode$7Hrq, r21_xn$startfrom$1aao, r21_xn$lineto$5sIl, r21_xn$curveto$1aao, r21_xn$cubicto$1aao, r21_xn$putshapes$9Jrj, r21_xn$reverselast$3qIs, r21_xn$includeglyph$3qIs, r21_bowl, r21_tkappa, r21_bkappa, r21_turntop, r21_turnbottom, r21_topbowl, r21_bottombowl, r21_leftbar, _r21_t0;
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
        r21_xn$setwidth$9Jrj(r0_WIDTH);
        r21_xn$assignunicode$7Hrq('B');
        r21_bowl = 451;
        r21_tkappa = r0_COKAPPA - 0.22;
        r21_bkappa = r0_COKAPPA - 0.2;
        r21_turntop = (r0_CAP + (r21_bowl - r0_STROKE)) / 2;
        r21_turnbottom = r21_bowl / 2;
        r21_topbowl = new r0_Stroke();
        r21_topbowl['start-from'](r0_SB, r0_CAP)['line-to'](r0_RIGHTSB - r0_SB * 0.5 - r21_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5 - r21_tkappa * r21_turnbottom, r0_CAP, r0_RIGHTSB - r0_SB * 0.5, r21_turntop + (r0_CAP - r21_turntop) * r0_KAPPA, r0_RIGHTSB - r0_SB * 0.5, r21_turntop)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5, r21_turntop + r0_KAPPA * (r21_bowl - r0_STROKE - r21_turntop), r0_RIGHTSB - r0_SB * 0.5 - r21_tkappa * r21_turnbottom, r21_bowl - r0_STROKE, r0_RIGHTSB - r0_SB * 0.5 - r21_turnbottom, r21_bowl - r0_STROKE)['line-to'](r0_SB, r21_bowl - r0_STROKE);
        r21_bottombowl = new r0_Stroke();
        r21_bottombowl['start-from'](r0_SB, 0)['line-to'](r0_RIGHTSB - r21_turnbottom, 0)['cubic-to'](r0_RIGHTSB - r21_bkappa * r21_turnbottom, 0, r0_RIGHTSB, r21_turnbottom * r0_KAPPA, r0_RIGHTSB, r21_turnbottom)['cubic-to'](r0_RIGHTSB, r21_turnbottom + r0_KAPPA * (r21_bowl - r21_turnbottom), r0_RIGHTSB - r21_bkappa * r21_turnbottom, r21_bowl, r0_RIGHTSB - r21_turnbottom, r21_bowl)['line-to'](r0_SB, r21_bowl);
        r21_leftbar = new r0_Stroke()['start-from'](r0_SB, 0)['line-to'](r0_SB, r0_CAP);
        r21_xn$putshapes$9Jrj(r21_topbowl['form-stroke'](0, r0_STROKE));
        r21_xn$putshapes$9Jrj(r21_bottombowl['form-stroke'](r0_STROKE, 0));
        r21_xn$putshapes$9Jrj(r21_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('D', function _r0_t9() {
        var r23_xn$setwidth$9Jrj, r23_xn$assignunicode$7Hrq, r23_xn$startfrom$1aao, r23_xn$lineto$5sIl, r23_xn$curveto$1aao, r23_xn$cubicto$1aao, r23_xn$putshapes$9Jrj, r23_xn$reverselast$3qIs, r23_xn$includeglyph$3qIs, r23_dsmooth, r23_bsmooth, r23_bkappa, r23_leftbar, r23_bowl, _r23_t0;
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
        r23_xn$setwidth$9Jrj(r0_WIDTH);
        r23_xn$assignunicode$7Hrq('D');
        r23_dsmooth = r0_SMOOTH * 1.55;
        r23_bsmooth = r0_SMOOTH * 1.3;
        r23_bkappa = r0_COKAPPA - 0.2;
        r23_leftbar = new r0_Stroke()['start-from'](r0_SB, 0)['line-to'](r0_SB, r0_CAP);
        r23_bowl = new r0_Stroke();
        r23_bowl['start-from'](r0_SB, 0)['line-to'](r0_RIGHTSB - r23_bsmooth, 0)['cubic-to'](r0_RIGHTSB - r23_bkappa * r23_bsmooth, 0, r0_RIGHTSB, r0_COBKAPPA * r23_dsmooth, r0_RIGHTSB, r23_dsmooth)['line-to'](r0_RIGHTSB, r0_CAP - r23_dsmooth)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r23_dsmooth, r0_RIGHTSB - r23_bkappa * r23_bsmooth, r0_CAP, r0_RIGHTSB - r23_bsmooth, r0_CAP)['line-to'](r0_SB, r0_CAP);
        r23_xn$putshapes$9Jrj(r23_bowl['form-stroke'](r0_STROKE, 0));
        r23_xn$putshapes$9Jrj(r23_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('P', function _r0_t10() {
        var r25_xn$setwidth$9Jrj, r25_xn$assignunicode$7Hrq, r25_xn$startfrom$1aao, r25_xn$lineto$5sIl, r25_xn$curveto$1aao, r25_xn$cubicto$1aao, r25_xn$putshapes$9Jrj, r25_xn$reverselast$3qIs, r25_xn$includeglyph$3qIs, r25_bowl, r25_bkappa, r25_turntop, r25_turnbottom, r25_topbowl, r25_leftbar, _r25_t0;
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
        r25_xn$setwidth$9Jrj(r0_WIDTH);
        r25_xn$assignunicode$7Hrq('P');
        r25_bowl = r0_CAPMIDDLE;
        r25_bkappa = r0_COKAPPA - 0.2;
        r25_turntop = (r0_CAP + (r25_bowl - r0_HALFSTROKE)) / 2;
        r25_turnbottom = r25_bowl / 2;
        r25_topbowl = new r0_Stroke();
        r25_topbowl['start-from'](r0_SB, r0_CAP)['line-to'](r0_RIGHTSB - r25_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r25_bkappa * r25_turnbottom, r0_CAP, r0_RIGHTSB, r25_turntop + (r0_CAP - r25_turntop) * r0_KAPPA, r0_RIGHTSB, r25_turntop)['cubic-to'](r0_RIGHTSB, r25_turntop + r0_KAPPA * (r25_bowl - r0_HALFSTROKE - r25_turntop), r0_RIGHTSB - r25_bkappa * r25_turnbottom, r25_bowl - r0_HALFSTROKE, r0_RIGHTSB - r25_turnbottom, r25_bowl - r0_HALFSTROKE)['line-to'](r0_SB, r25_bowl - r0_HALFSTROKE);
        r25_leftbar = new r0_Stroke()['start-from'](r0_SB, 0)['line-to'](r0_SB, r0_CAP);
        r25_xn$putshapes$9Jrj(r25_topbowl['form-stroke'](0, r0_STROKE));
        r25_xn$putshapes$9Jrj(r25_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('R', function _r0_t11() {
        var r27_xn$setwidth$9Jrj, r27_xn$assignunicode$7Hrq, r27_xn$startfrom$1aao, r27_xn$lineto$5sIl, r27_xn$curveto$1aao, r27_xn$cubicto$1aao, r27_xn$putshapes$9Jrj, r27_xn$reverselast$3qIs, r27_xn$includeglyph$3qIs, r27_TURN, r27_right, _r27_t0;
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
        r27_xn$setwidth$9Jrj(r0_WIDTH);
        r27_xn$assignunicode$7Hrq('R');
        r27_xn$includeglyph$3qIs(r0_glyphs['P']);
        r27_TURN = r0_XH * 0.1;
        r27_right = r0_RIGHTSB + r0_O;
        r27_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r27_right - r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['curve-to'](r27_right - r0_HALFSTROKE, r27_TURN + 0.1 * (r0_XH - r27_TURN), r0_MIDDLE, r0_CAPMIDDLE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('C', function _r0_t12() {
        var r29_xn$setwidth$9Jrj, r29_xn$assignunicode$7Hrq, r29_xn$startfrom$1aao, r29_xn$lineto$5sIl, r29_xn$curveto$1aao, r29_xn$cubicto$1aao, r29_xn$putshapes$9Jrj, r29_xn$reverselast$3qIs, r29_xn$includeglyph$3qIs, r29_outline, _r29_t0;
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
        r29_xn$setwidth$9Jrj(r0_WIDTH);
        r29_xn$assignunicode$7Hrq('C');
        r29_outline = new r0_Stroke();
        r29_outline['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_SB * 0.1, r0_HOOK);
        r29_xn$putshapes$9Jrj(r29_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('G', function _r0_t13() {
        var r31_xn$setwidth$9Jrj, r31_xn$assignunicode$7Hrq, r31_xn$startfrom$1aao, r31_xn$lineto$5sIl, r31_xn$curveto$1aao, r31_xn$cubicto$1aao, r31_xn$putshapes$9Jrj, r31_xn$reverselast$3qIs, r31_xn$includeglyph$3qIs, r31_outline, r31_bar, _r31_t0;
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
        r31_xn$setwidth$9Jrj(r0_WIDTH);
        r31_xn$assignunicode$7Hrq('G');
        r31_outline = new r0_Stroke();
        r31_outline['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['cubic-to'](r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_RIGHTSB, r0_SMOOTH)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2);
        r31_xn$putshapes$9Jrj(r31_outline['form-stroke'](r0_STROKE, 0));
        r31_bar = new r0_Stroke()['start-from'](r0_MIDDLE, r0_CAP / 2 + r0_STROKE / 2)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2);
        r31_xn$putshapes$9Jrj(r31_bar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('O', function _r0_t14() {
        var r33_xn$setwidth$9Jrj, r33_xn$assignunicode$7Hrq, r33_xn$startfrom$1aao, r33_xn$lineto$5sIl, r33_xn$curveto$1aao, r33_xn$cubicto$1aao, r33_xn$putshapes$9Jrj, r33_xn$reverselast$3qIs, r33_xn$includeglyph$3qIs, r33_outline, _r33_t0;
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
        r33_xn$setwidth$9Jrj(r0_WIDTH);
        r33_xn$assignunicode$7Hrq('O');
        r33_outline = new r0_Stroke();
        r33_outline['start-from'](r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP - r0_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['cubic-to'](r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_RIGHTSB, r0_SMOOTH)['line-to'](r0_RIGHTSB, r0_CAP - r0_SMOOTH)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_CAPO, r0_MIDDLE, r0_CAPO);
        r33_xn$putshapes$9Jrj(r33_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.slashed', function _r0_t15() {
        var r35_xn$setwidth$9Jrj, r35_xn$assignunicode$7Hrq, r35_xn$startfrom$1aao, r35_xn$lineto$5sIl, r35_xn$curveto$1aao, r35_xn$cubicto$1aao, r35_xn$putshapes$9Jrj, r35_xn$reverselast$3qIs, r35_xn$includeglyph$3qIs, r35_bar, _r35_t0;
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
        r35_xn$setwidth$9Jrj(r0_WIDTH);
        r35_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r35_bar = new r0_Stroke()['start-from'](r0_SB + r0_STROKE / 2, r0_CAP * (1 - 0.65))['line-to'](r0_RIGHTSB - r0_STROKE / 2, r0_CAP * 0.65);
        r35_xn$putshapes$9Jrj(r35_bar['form-stroke'](r0_STROKE / 2, r0_STROKE / 2));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.unslashed', function _r0_t16() {
        var r37_xn$setwidth$9Jrj, r37_xn$assignunicode$7Hrq, r37_xn$startfrom$1aao, r37_xn$lineto$5sIl, r37_xn$curveto$1aao, r37_xn$cubicto$1aao, r37_xn$putshapes$9Jrj, r37_xn$reverselast$3qIs, r37_xn$includeglyph$3qIs, _r37_t0;
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
        r37_xn$includeglyph$3qIs(r0_glyphs['O']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.dotted', function _r0_t17() {
        var r39_xn$setwidth$9Jrj, r39_xn$assignunicode$7Hrq, r39_xn$startfrom$1aao, r39_xn$lineto$5sIl, r39_xn$curveto$1aao, r39_xn$cubicto$1aao, r39_xn$putshapes$9Jrj, r39_xn$reverselast$3qIs, r39_xn$includeglyph$3qIs, _r39_t0;
        _r39_t0 = this;
        r39_xn$setwidth$9Jrj = _r39_t0['set-width']['bind'](_r39_t0);
        r39_xn$assignunicode$7Hrq = _r39_t0['assign-unicode']['bind'](_r39_t0);
        r39_xn$startfrom$1aao = _r39_t0['start-from']['bind'](_r39_t0);
        r39_xn$lineto$5sIl = _r39_t0['line-to']['bind'](_r39_t0);
        r39_xn$curveto$1aao = _r39_t0['curve-to']['bind'](_r39_t0);
        r39_xn$cubicto$1aao = _r39_t0['cubic-to']['bind'](_r39_t0);
        r39_xn$putshapes$9Jrj = _r39_t0['put-shapes']['bind'](_r39_t0);
        r39_xn$reverselast$3qIs = _r39_t0['reverse-last']['bind'](_r39_t0);
        r39_xn$includeglyph$3qIs = _r39_t0['include-glyph']['bind'](_r39_t0);
        r39_xn$includeglyph$3qIs(r0_glyphs['O']);
        r39_xn$putshapes$9Jrj([r0_Ring(r0_CAPMIDDLE + r0_DOTRADIUS, r0_CAPMIDDLE - r0_DOTRADIUS, r0_MIDDLE + r0_DOTRADIUS, r0_MIDDLE - r0_DOTRADIUS)]);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero', function _r0_t18() {
        var r41_xn$setwidth$9Jrj, r41_xn$assignunicode$7Hrq, r41_xn$startfrom$1aao, r41_xn$lineto$5sIl, r41_xn$curveto$1aao, r41_xn$cubicto$1aao, r41_xn$putshapes$9Jrj, r41_xn$reverselast$3qIs, r41_xn$includeglyph$3qIs, r41_otherwise, _r41_t0, _r41_t1, _r41_t2, _r41_t3, _r41_t4, _r41_t5, _r41_t6, _r41_t7;
        _r41_t1 = this;
        r41_xn$setwidth$9Jrj = _r41_t1['set-width']['bind'](_r41_t1);
        r41_xn$assignunicode$7Hrq = _r41_t1['assign-unicode']['bind'](_r41_t1);
        r41_xn$startfrom$1aao = _r41_t1['start-from']['bind'](_r41_t1);
        r41_xn$lineto$5sIl = _r41_t1['line-to']['bind'](_r41_t1);
        r41_xn$curveto$1aao = _r41_t1['curve-to']['bind'](_r41_t1);
        r41_xn$cubicto$1aao = _r41_t1['cubic-to']['bind'](_r41_t1);
        r41_xn$putshapes$9Jrj = _r41_t1['put-shapes']['bind'](_r41_t1);
        r41_xn$reverselast$3qIs = _r41_t1['reverse-last']['bind'](_r41_t1);
        r41_xn$includeglyph$3qIs = _r41_t1['include-glyph']['bind'](_r41_t1);
        r41_xn$setwidth$9Jrj(r0_WIDTH);
        r41_xn$assignunicode$7Hrq('0');
        _r41_t2 = r41_xn$includeglyph$3qIs;
        _r41_t3 = r0_glyphs;
        _r41_t0 = r0_variantSelector['zero'];
        if ('slashed' === _r41_t0) {
            _r41_t4 = 'zero.slashed';
        } else {
            if ('dotted' === _r41_t0) {
                _r41_t5 = 'zero.dotted';
            } else {
                if ('unslahsed' === _r41_t0) {
                    _r41_t6 = 'zero.unslashed';
                } else {
                    r41_otherwise = _r41_t0;
                    _r41_t6 = 'zero.slashed';
                }
                _r41_t5 = _r41_t6;
            }
            _r41_t4 = _r41_t5;
        }
        _r41_t7 = _r41_t3[_r41_t4];
        _r41_t2(_r41_t7);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Q', function _r0_t19() {
        var r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_xn$includeglyph$3qIs, _r43_t0;
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
        r43_xn$setwidth$9Jrj(r0_WIDTH);
        r43_xn$assignunicode$7Hrq('Q');
        r43_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r43_xn$startfrom$1aao(r0_MIDDLE, 0);
        r43_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, -r0_CAP * 0.2);
        r43_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2 + r0_STROKE, -r0_CAP * 0.2);
        r43_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE, 0);
        r43_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE * (1 - 0.5 / 3), r0_STROKE * 0.5);
        r43_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('H', function _r0_t20() {
        var r45_xn$setwidth$9Jrj, r45_xn$assignunicode$7Hrq, r45_xn$startfrom$1aao, r45_xn$lineto$5sIl, r45_xn$curveto$1aao, r45_xn$cubicto$1aao, r45_xn$putshapes$9Jrj, r45_xn$reverselast$3qIs, r45_xn$includeglyph$3qIs, _r45_t0;
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
        r45_xn$setwidth$9Jrj(r0_WIDTH);
        r45_xn$assignunicode$7Hrq('H');
        r45_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, 0)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['form-stroke']());
        r45_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['form-stroke']());
        r45_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, r0_CAP / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_RIGHTSB, r0_CAP / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('L', function _r0_t21() {
        var r47_xn$setwidth$9Jrj, r47_xn$assignunicode$7Hrq, r47_xn$startfrom$1aao, r47_xn$lineto$5sIl, r47_xn$curveto$1aao, r47_xn$cubicto$1aao, r47_xn$putshapes$9Jrj, r47_xn$reverselast$3qIs, r47_xn$includeglyph$3qIs, _r47_t0;
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
        r47_xn$setwidth$9Jrj(r0_WIDTH);
        r47_xn$assignunicode$7Hrq('L');
        r47_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB * 1.5, r0_CAP)['line-to'](r0_SB * 1.5, 0)['line-to'](r0_RIGHTSB, 0)['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.straight', function _r0_t22() {
        var r49_xn$setwidth$9Jrj, r49_xn$assignunicode$7Hrq, r49_xn$startfrom$1aao, r49_xn$lineto$5sIl, r49_xn$curveto$1aao, r49_xn$cubicto$1aao, r49_xn$putshapes$9Jrj, r49_xn$reverselast$3qIs, r49_xn$includeglyph$3qIs, _r49_t0;
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
        r49_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.symmetric', function _r0_t23() {
        var r51_xn$setwidth$9Jrj, r51_xn$assignunicode$7Hrq, r51_xn$startfrom$1aao, r51_xn$lineto$5sIl, r51_xn$curveto$1aao, r51_xn$cubicto$1aao, r51_xn$putshapes$9Jrj, r51_xn$reverselast$3qIs, r51_xn$includeglyph$3qIs, _r51_t0;
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
        r51_xn$includeglyph$3qIs(r0_glyphs['dotlessI.straight']);
        r51_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26, r0_CAP)['set-width'](0, r0_STROKE)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26, r0_CAP)['form-stroke']());
        r51_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26, 0)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('I', function _r0_t24() {
        var r53_xn$setwidth$9Jrj, r53_xn$assignunicode$7Hrq, r53_xn$startfrom$1aao, r53_xn$lineto$5sIl, r53_xn$curveto$1aao, r53_xn$cubicto$1aao, r53_xn$putshapes$9Jrj, r53_xn$reverselast$3qIs, r53_xn$includeglyph$3qIs, _r53_t0;
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
        r53_xn$setwidth$9Jrj(r0_WIDTH);
        r53_xn$assignunicode$7Hrq('I');
        r53_xn$includeglyph$3qIs(r0_glyphs['dotlessI.symmetric']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('S', function _r0_t25() {
        var r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_xn$includeglyph$3qIs, r55_slope, r55_bowltop, r55_strokemiddle, r55_bowlbottom, _r55_t0;
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
        r55_xn$setwidth$9Jrj(r0_WIDTH);
        r55_xn$assignunicode$7Hrq('S');
        r55_slope = 0.11;
        r55_bowltop = new r0_Stroke();
        r55_bowltop['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH);
        r55_strokemiddle = new r0_Stroke();
        r55_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_CAP_SMOOTH)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r55_slope) * r0_CAP + 2 * r55_slope * r0_CAP / (0.4 * r0_WIDTH) * (0.3 * r0_WIDTH - r0_SB - r0_STROKE / 2), 0.3 * r0_WIDTH, (0.5 + r55_slope) * r0_CAP)['line-to'](0.7 * r0_WIDTH, (0.5 - r55_slope) * r0_CAP)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r55_slope) * r0_CAP - 2 * r55_slope * r0_CAP / (0.4 * r0_WIDTH) * (0.3 * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r0_SMOOTH);
        r55_bowlbottom = new r0_Stroke();
        r55_bowlbottom['start-from'](r0_RIGHTSB, r0_SMOOTH)['set-width'](0, r0_STROKE)['cubic-to'](r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_MIDDLE, r0_O)['curve-to'](r0_MIDDLE - r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB * 1.1, r0_HOOK);
        r55_xn$putshapes$9Jrj(r55_bowltop['form-stroke']());
        r55_xn$putshapes$9Jrj(r55_strokemiddle['form-stroke']());
        r55_xn$putshapes$9Jrj(r55_bowlbottom['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dollar', function _r0_t26() {
        var r57_xn$setwidth$9Jrj, r57_xn$assignunicode$7Hrq, r57_xn$startfrom$1aao, r57_xn$lineto$5sIl, r57_xn$curveto$1aao, r57_xn$cubicto$1aao, r57_xn$putshapes$9Jrj, r57_xn$reverselast$3qIs, r57_xn$includeglyph$3qIs, _r57_t0;
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
        r57_xn$setwidth$9Jrj(r0_WIDTH);
        r57_xn$assignunicode$7Hrq('$');
        r57_xn$putshapes$9Jrj(r0_glyphs['S']['contours']);
        r57_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_CAP)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        r57_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, 0)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o', function _r0_t27() {
        var r59_xn$setwidth$9Jrj, r59_xn$assignunicode$7Hrq, r59_xn$startfrom$1aao, r59_xn$lineto$5sIl, r59_xn$curveto$1aao, r59_xn$cubicto$1aao, r59_xn$putshapes$9Jrj, r59_xn$reverselast$3qIs, r59_xn$includeglyph$3qIs, _r59_t0;
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
        r59_xn$setwidth$9Jrj(r0_WIDTH);
        r59_xn$assignunicode$7Hrq('o');
        r59_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB, r0_RIGHTSB, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r59_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.left', function _r0_t28() {
        var r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_xn$includeglyph$3qIs, _r61_t0;
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
        r61_xn$setwidth$9Jrj(r0_WIDTH);
        r61_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB + r0_STROKE / 2, r0_RIGHTSB, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r61_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.right', function _r0_t29() {
        var r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, r63_xn$includeglyph$3qIs, _r63_t0;
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
        r63_xn$setwidth$9Jrj(r0_WIDTH);
        r63_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB, r0_RIGHTSB - r0_STROKE / 2, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r63_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('p', function _r0_t30() {
        var r65_xn$setwidth$9Jrj, r65_xn$assignunicode$7Hrq, r65_xn$startfrom$1aao, r65_xn$lineto$5sIl, r65_xn$curveto$1aao, r65_xn$cubicto$1aao, r65_xn$putshapes$9Jrj, r65_xn$reverselast$3qIs, r65_xn$includeglyph$3qIs, _r65_t0;
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
        r65_xn$setwidth$9Jrj(r0_WIDTH);
        r65_xn$assignunicode$7Hrq('p');
        r65_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r65_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, r0_XH)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_DESCENDER)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('b', function _r0_t31() {
        var r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, r67_xn$includeglyph$3qIs, _r67_t0;
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
        r67_xn$setwidth$9Jrj(r0_WIDTH);
        r67_xn$assignunicode$7Hrq('b');
        r67_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r67_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, 0)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('q', function _r0_t32() {
        var r69_xn$setwidth$9Jrj, r69_xn$assignunicode$7Hrq, r69_xn$startfrom$1aao, r69_xn$lineto$5sIl, r69_xn$curveto$1aao, r69_xn$cubicto$1aao, r69_xn$putshapes$9Jrj, r69_xn$reverselast$3qIs, r69_xn$includeglyph$3qIs, _r69_t0;
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
        r69_xn$setwidth$9Jrj(r0_WIDTH);
        r69_xn$assignunicode$7Hrq('q');
        r69_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r69_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, r0_XH)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB, r0_DESCENDER)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('d', function _r0_t33() {
        var r71_xn$setwidth$9Jrj, r71_xn$assignunicode$7Hrq, r71_xn$startfrom$1aao, r71_xn$lineto$5sIl, r71_xn$curveto$1aao, r71_xn$cubicto$1aao, r71_xn$putshapes$9Jrj, r71_xn$reverselast$3qIs, r71_xn$includeglyph$3qIs, _r71_t0;
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
        r71_xn$setwidth$9Jrj(r0_WIDTH);
        r71_xn$assignunicode$7Hrq('d');
        r71_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r71_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('g', function _r0_t34() {
        var r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, r73_xn$includeglyph$3qIs, r73_MODDLE, _r73_t0;
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
        r73_xn$setwidth$9Jrj(r0_WIDTH);
        r73_xn$assignunicode$7Hrq('g');
        r73_xn$putshapes$9Jrj([
            r0_Ring(r0_XO, r0_XH * 0.4, r0_SB * 1.5, r0_RIGHTSB - 0.5 * r0_SB, r0_SMALLSMOOTH),
            r0_Ring(r0_XO - r0_STROKE, r0_XH * 0.4 + r0_STROKE, r0_SB * 1.5 + r0_STROKE, r0_RIGHTSB - 0.5 * r0_SB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r73_xn$reverselast$3qIs();
        r73_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_XH * 0.4)['set-width'](0, r0_STROKE * 0.75)['arc-hv-to'](r0_SB * 1.5 + r0_STROKE, (r0_O - r0_DESCENDER * 0.85 + r0_XH * 0.4) / 2)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['line-to'](r0_MIDDLE - r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['arc-hv-to'](r0_RIGHTSB - r0_O * 2, 0)['arc-vh-to'](r0_MIDDLE, r0_DESCENDER + r0_O)['arc-hv-to'](r0_SB, r0_DESCENDER * 0.1)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['form-stroke']());
        r73_xn$startfrom$1aao(r0_RIGHTSB, r0_XH);
        r73_xn$lineto$5sIl(r0_RIGHTSB, r0_XH - r0_STROKE);
        r73_xn$lineto$5sIl(r0_MIDDLE, r0_XH - r0_STROKE - r0_O);
        r73_xn$lineto$5sIl(r73_MODDLE, r0_XH);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('x', function _r0_t35() {
        var r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_xn$includeglyph$3qIs, r75_TURN, r75_barone, r75_bartwo, _r75_t0, _r75_t1;
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
        r75_xn$setwidth$9Jrj(r0_WIDTH);
        r75_xn$assignunicode$7Hrq('x');
        r75_TURN = r0_XH * 0.1;
        r75_barone = new r0_Stroke()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_SB + r0_HALFSTROKE, r75_TURN + 0.17 * (r0_XH - r75_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_XH - r75_TURN - 0.17 * (r0_XH - r75_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_XH)['form-stroke']();
        r75_bartwo = [r75_barone[0]['map'](function _r75_t1(r76_pt) {
                var r76_pt;
                return {
                    'x': r0_WIDTH - r76_pt['x'],
                    'y': r76_pt['y'],
                    'onCurve': r76_pt['onCurve'],
                    'cubic': r76_pt['cubic']
                };
            })['reverse']()];
        r75_xn$putshapes$9Jrj(r75_barone);
        r75_xn$putshapes$9Jrj(r75_bartwo);
        return void 0;
    });
    exports['font'] = r0_font;
}
