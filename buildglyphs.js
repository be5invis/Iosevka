{
    var r0_Glyph, r0_Stroke, _r0_t0;
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    exports['build'] = function _r0_t0(r1_para) {
        var r1_para, r1_variantSelector, r1_font, r1_glyphList, r1_glyphs, r1_unicodeGlyphs, r1_globalTransform, r1_ITALICCOR, r1_UPWARD, r1_DOWNWARD, r1_RIGHTWARD, r1_LEFTWARD, r1_DESCENDER, r1_WIDTH, r1_CAP, r1_XH, r1_O, r1_OXHOOK, r1_SB, r1_HOOK, r1_AHOOK, r1_SHOOK, r1_RHOOK, r1_SMOOTH, r1_SMALLSMOOTH, r1_STROKE, r1_DOTSIZE, r1_PERIODSIZE, r1_BARPOS, r1_GBARPOS, r1_FIVEBARPOS, r1_LONGJUT, r1_ACCENT, r1_ACCENTX, r1_XO, r1_CAPO, r1_HALFSTROKE, r1_RIGHTSB, r1_MIDDLE, r1_CAPMIDDLE, r1_CAP_SMOOTH, r1_DOTRADIUS, r1_PERIODRADIUS, r1_SMOOTHA, r1_SMOOTHB, r1_SMALLSMOOTHA, r1_SMALLSMOOTHB, r1_ITALICCORS, r1_EBARPOS, r1_KAPPA, r1_COKAPPA, r1_BKAPPA, r1_CKAPPA, r1_COBKAPPA, r1_KAPPA_HOOK, r1_KAPPA_AHOOK, r1_TAILADJX, r1_TAILADJY, r1_TAILADJKAPPA, r1_TAILADJSX, r1_TAILADJSY, r1_TAILADJSKAPPA, r1_ILBALANCE, r1_JBALANCE, r1_TBALANCE, r1_TBALANCE2, r1_RBALANCE, r1_BASE, r1_MARK, r1_MARKBASE, r1_tm, r1_markAboveLower, r1_markAboveCap, r1_markBelowLower, r1_markBelowZero, r1_capitalMarks, r1_bMarks, r1_eMarks, r1_pMarks, r1_ifMarks, r1_xn$createglyph$7Hrq, r1_xn$selectvariant$7Hrq, r1_mix, r1_xgrid, r1_linreg, r1_fallback, r1_Ring, r1_ORing, r1_leftwardTopSerif, r1_leftwardBottomSerif, r1_rightwardTopSerif, r1_rightwardBottomSerif, r1_xsStrand, r1_sStrand, r1_halfXStrand, r1_xStrand, r1_nBowl, r1_sHookUpper, r1_twoHookUpper, r1_sHookLower, r1_smallo, r1_hbar, r1_vbar, r1_markExtend, r1_markHalfStroke, r1_markFine, r1_markMiddle, r1_markDotsRadius, r1_aboveMarkTop, r1_aboveMarkBot, r1_hyphenCenter, r1_parenTop, r1_parenBot, r1_parenMid, r1_parenOutside, r1_parenInside, r1_bracketOutside, r1_bracketInside, r1_braceOutside, r1_braceInside, r1_isAboveMark, r1_code, r1_str, r1_nfd, r1_base, r1_mark, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16, _r1_t17, _r1_t18, _r1_t19, _r1_t20, _r1_t21, _r1_t22, _r1_t23, _r1_t24, _r1_t25, _r1_t26, _r1_t27, _r1_t28, _r1_t29, _r1_t30, _r1_t31, _r1_t32, _r1_t33, _r1_t34, _r1_t35, _r1_t36, _r1_t37, _r1_t38, _r1_t39, _r1_t40, _r1_t41, _r1_t42, _r1_t43, _r1_t44, _r1_t45, _r1_t46, _r1_t47, _r1_t48, _r1_t49, _r1_t50, _r1_t51, _r1_t52, _r1_t53, _r1_t54, _r1_t55, _r1_t56, _r1_t57, _r1_t58, _r1_t59, _r1_t60, _r1_t61, _r1_t62, _r1_t63, _r1_t64, _r1_t65, _r1_t66, _r1_t67, _r1_t68, _r1_t69, _r1_t70, _r1_t71, _r1_t72, _r1_t73, _r1_t74, _r1_t75, _r1_t76, _r1_t77, _r1_t78, _r1_t79, _r1_t80, _r1_t81, _r1_t82, _r1_t83, _r1_t84, _r1_t85, _r1_t86, _r1_t87, _r1_t88, _r1_t89, _r1_t90, _r1_t91, _r1_t92, _r1_t93, _r1_t94, _r1_t95, _r1_t96, _r1_t97, _r1_t98, _r1_t99, _r1_t100, _r1_t101, _r1_t102, _r1_t103, _r1_t104, _r1_t105, _r1_t106, _r1_t107, _r1_t108, _r1_t109, _r1_t110, _r1_t111, _r1_t112, _r1_t113, _r1_t114, _r1_t115, _r1_t116, _r1_t117, _r1_t118, _r1_t119, _r1_t120, _r1_t121, _r1_t122, _r1_t123, _r1_t124, _r1_t125, _r1_t126, _r1_t127, _r1_t128, _r1_t129, _r1_t130, _r1_t131, _r1_t132, _r1_t133, _r1_t134, _r1_t135, _r1_t136, _r1_t137, _r1_t138, _r1_t139, _r1_t140, _r1_t141, _r1_t142, _r1_t143, _r1_t144, _r1_t145, _r1_t146, _r1_t147, _r1_t148, _r1_t149, _r1_t150, _r1_t151, _r1_t152, _r1_t153, _r1_t154, _r1_t155, _r1_t156, _r1_t157, _r1_t158, _r1_t159, _r1_t160, _r1_t161, _r1_t162, _r1_t163, _r1_t164, _r1_t165, _r1_t166, _r1_t167, _r1_t168, _r1_t169, _r1_t170, _r1_t171, _r1_t172, _r1_t173, _r1_t174, _r1_t175, _r1_t176, _r1_t177, _r1_t178, _r1_t179;
        r1_variantSelector = r1_para['variantSelector'];
        r1_font = require('./empty.json');
        r1_glyphList = r1_font['glyf'];
        r1_glyphs = { '.notdef': r1_glyphList[0] };
        r1_unicodeGlyphs = [];
        r1_globalTransform = {
            'xx': 1,
            'yx': Math['tan'](r1_para['italicangle'] / 180 * Math['PI']),
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        r1_ITALICCOR = 1 / Math['sqrt'](1 - r1_globalTransform['yx'] * r1_globalTransform['yx']);
        r1_UPWARD = {
            'x': -r1_ITALICCOR,
            'y': 0
        };
        r1_DOWNWARD = {
            'x': r1_ITALICCOR,
            'y': 0
        };
        r1_RIGHTWARD = {
            'x': r1_globalTransform['yx'],
            'y': 1
        };
        r1_LEFTWARD = {
            'x': -r1_globalTransform['yx'],
            'y': -1
        };
        r1_DESCENDER = r1_para['descender'];
        r1_WIDTH = r1_para['width'];
        r1_CAP = r1_para['cap'];
        r1_XH = r1_para['xheight'];
        r1_O = r1_para['o'];
        r1_OXHOOK = r1_para['oxhook'];
        r1_SB = r1_para['sb'];
        r1_HOOK = r1_para['hook'];
        r1_AHOOK = r1_para['ahook'];
        r1_SHOOK = r1_para['shook'];
        r1_RHOOK = r1_para['rhook'];
        r1_SMOOTH = r1_para['smooth'];
        r1_SMALLSMOOTH = r1_para['smallsmooth'];
        r1_STROKE = r1_para['stroke'];
        r1_DOTSIZE = r1_para['dotsize'];
        r1_PERIODSIZE = r1_para['periodsize'];
        r1_BARPOS = r1_para['barpos'];
        r1_GBARPOS = r1_para['gbarpos'];
        r1_FIVEBARPOS = r1_para['fivebarpos'];
        r1_LONGJUT = r1_para['longjut'];
        r1_ACCENT = r1_para['accent'];
        r1_ACCENTX = r1_para['accentx'];
        r1_XO = r1_XH - r1_O;
        r1_CAPO = r1_CAP - r1_O;
        r1_HALFSTROKE = r1_STROKE / 2;
        r1_RIGHTSB = r1_WIDTH - r1_SB;
        r1_MIDDLE = r1_WIDTH / 2;
        r1_CAPMIDDLE = r1_CAP / 2;
        r1_CAP_SMOOTH = r1_CAP - r1_SMOOTH;
        r1_DOTRADIUS = r1_DOTSIZE / 2;
        r1_PERIODRADIUS = r1_PERIODSIZE / 2;
        r1_SMOOTHA = r1_SMOOTH - r1_globalTransform['yx'] * r1_para['smoothadjust'];
        r1_SMOOTHB = r1_SMOOTH + r1_globalTransform['yx'] * r1_para['smoothadjust'];
        r1_SMALLSMOOTHA = r1_SMALLSMOOTH - r1_globalTransform['yx'] * r1_para['smoothadjust'];
        r1_SMALLSMOOTHB = r1_SMALLSMOOTH + r1_globalTransform['yx'] * r1_para['smoothadjust'];
        r1_ITALICCORS = r1_STROKE * r1_globalTransform['yx'];
        r1_EBARPOS = r1_para['ebarpos'] || r1_BARPOS;
        r1_KAPPA = r1_para['kappa'];
        r1_COKAPPA = 1 - r1_KAPPA;
        r1_BKAPPA = r1_para['bkappa'] || r1_KAPPA + 0.1;
        r1_CKAPPA = r1_para['ckappa'] || r1_BKAPPA;
        r1_COBKAPPA = 1 - r1_BKAPPA;
        r1_KAPPA_HOOK = r1_para['kappa_hook'] || r1_BKAPPA + 0.1;
        r1_KAPPA_AHOOK = r1_para['kappa_ahook'] || r1_KAPPA_HOOK;
        r1_TAILADJX = r1_WIDTH * 0.2;
        r1_TAILADJY = r1_XH * 0.25;
        r1_TAILADJKAPPA = 0.75;
        r1_TAILADJSX = r1_WIDTH * 0.2;
        r1_TAILADJSY = 0;
        r1_TAILADJSKAPPA = 0.75;
        r1_ILBALANCE = r1_LONGJUT * 0.04;
        r1_JBALANCE = r1_para['jbalance'] || r1_HALFSTROKE + r1_ILBALANCE;
        r1_TBALANCE = r1_para['tbalance'] || r1_JBALANCE;
        r1_TBALANCE2 = r1_para['tbalance2'] || r1_TBALANCE;
        r1_RBALANCE = r1_para['rbalance'] || r1_JBALANCE * 0.3;
        r1_BASE = 'base';
        r1_MARK = 'mark';
        r1_MARKBASE = 'markbase';
        r1_tm = function _r1_t2(r2_anchor) {
            var r2_anchor;
            return {
                'x': r2_anchor['x'] * r1_globalTransform['xx'] + r2_anchor['y'] * r1_globalTransform['yx'] + r1_globalTransform['x'],
                'y': r2_anchor['x'] * r1_globalTransform['xy'] + r2_anchor['y'] * r1_globalTransform['yy'] + r1_globalTransform['y'],
                'type': r2_anchor['type']
            };
        };
        r1_markAboveLower = {
            'anchors': {
                'above': r1_tm({
                    'x': r1_MIDDLE,
                    'y': r1_XH,
                    'type': r1_BASE
                })
            }
        };
        r1_markAboveCap = {
            'anchors': {
                'above': r1_tm({
                    'x': r1_MIDDLE,
                    'y': r1_CAP,
                    'type': r1_BASE
                })
            }
        };
        r1_markBelowLower = {
            'anchors': {
                'below': r1_tm({
                    'x': r1_MIDDLE,
                    'y': r1_DESCENDER,
                    'type': r1_BASE
                })
            }
        };
        r1_markBelowZero = {
            'anchors': {
                'below': r1_tm({
                    'x': r1_MIDDLE,
                    'y': 0,
                    'type': r1_BASE
                })
            }
        };
        r1_capitalMarks = {
            'anchors': {
                'above': r1_markAboveCap['anchors']['above'],
                'below': r1_markBelowZero['anchors']['below']
            }
        };
        r1_bMarks = {
            'anchors': {
                'above': r1_markAboveCap['anchors']['above'],
                'below': r1_markBelowZero['anchors']['below']
            }
        };
        r1_eMarks = {
            'anchors': {
                'above': r1_markAboveLower['anchors']['above'],
                'below': r1_markBelowZero['anchors']['below']
            }
        };
        r1_pMarks = {
            'anchors': {
                'above': r1_markAboveLower['anchors']['above'],
                'below': r1_markBelowLower['anchors']['below']
            }
        };
        r1_ifMarks = {
            'anchors': {
                'above': r1_markAboveCap['anchors']['above'],
                'below': r1_markBelowLower['anchors']['below']
            }
        };
        r0_Stroke['bindParameters'](r1_para);
        r1_font['name']['fontFamily'] = r1_para['family'];
        r1_font['name']['fontSubFamily'] = r1_para['style'];
        r1_font['name']['preferredFamily'] = r1_para['family'];
        r1_font['name']['preferredSubFamily'] = r1_para['style'];
        r1_font['name']['uniqueSubFamily'] = r1_para['family'] + ' ' + r1_para['style'] + ' ' + r1_para['version'];
        r1_font['name']['version'] = r1_para['version'];
        _r1_t3 = r1_font['name'];
        _r1_t4 = 'fullName';
        if (r1_para['style'] !== 'Regular')
            _r1_t5 = r1_para['family'] + ' ' + r1_para['style'];
        else
            _r1_t5 = r1_para['family'];
        _r1_t3[_r1_t4] = _r1_t5;
        r1_font['name']['postScriptName'] = r1_font['name']['fullName']['replace'](/ /g, '-');
        r1_font['name']['copyright'] = r1_para['copyright'];
        r1_font['OS/2']['usWeightClass'] = r1_para['weight'];
        r1_font['OS/2']['bProportion'] = 9;
        r1_font['OS/2']['bWeight'] = 1 + r1_para['weight'] / 100;
        _r1_t6 = r1_font['OS/2'];
        _r1_t7 = 'fsSelection';
        if (r1_para['isBold'])
            _r1_t8 = 32;
        else
            _r1_t8 = 0;
        if (r1_para['isItalic'])
            _r1_t9 = 1;
        else
            _r1_t9 = 0;
        _r1_t10 = _r1_t8 + _r1_t9;
        if (!r1_para['isBold'] && !r1_para['isItalic'])
            _r1_t11 = 64;
        else
            _r1_t11 = 0;
        _r1_t12 = _r1_t10 + _r1_t11;
        _r1_t13 = 128;
        _r1_t6[_r1_t7] = _r1_t12 + _r1_t13;
        _r1_t14 = r1_font['head'];
        _r1_t15 = 'macStyle';
        if (r1_para['isBold'])
            _r1_t16 = 1;
        else
            _r1_t16 = 0;
        if (r1_para['isItalic'])
            _r1_t17 = 2;
        else
            _r1_t17 = 0;
        _r1_t14[_r1_t15] = _r1_t16 + _r1_t17;
        r1_font['hhea']['ascent'] = r1_CAP;
        r1_font['OS/2']['usWinAscent'] = r1_CAP + r1_CAP * 0.1;
        r1_font['OS/2']['sTypoAscender'] = r1_CAP;
        r1_font['hhea']['descent'] = r1_DESCENDER;
        r1_font['OS/2']['usWinDescent'] = Math['abs'](r1_DESCENDER) + r1_CAP * 0.1;
        r1_font['OS/2']['sTypoDescender'] = r1_DESCENDER;
        r1_font['hhea']['lineGap'] = r1_CAP * 0.2;
        r1_font['OS/2']['sTypoLineGap'] = r1_CAP * 0.2;
        r1_font['OS/2']['sxHeight'] = r1_XH;
        r1_font['post']['italicAnvle'] = 0 - r1_para['italicangle'];
        r1_xn$createglyph$7Hrq = function _r1_t18(r7_name, r7_actions) {
            var r7_name, r7_actions, r7_glyphObject;
            r7_glyphObject = new r0_Glyph(r7_name);
            r1_glyphList['push'](r7_glyphObject);
            r1_glyphs[r7_name] = r7_glyphObject;
            r7_actions['call'](r7_glyphObject);
            return r7_glyphObject;
        };
        r1_xn$selectvariant$7Hrq = function _r1_t19(r8_glyphid, r8_unicode, r8_default) {
            var r8_glyphid, r8_unicode, r8_default, r8_variant, r8_chosenGlyph, _r8_t0;
            r8_variant = r1_variantSelector[r8_glyphid] || r8_default;
            r8_chosenGlyph = r1_glyphs[r8_glyphid + '.' + r8_variant];
            r1_glyphs[r8_glyphid] = r8_chosenGlyph;
            if (r8_unicode)
                return r8_chosenGlyph['assign-unicode'](r8_unicode);
            else
                return void 0;
        };
        r1_xn$createglyph$7Hrq('space', function _r1_t20() {
            var r10_currentGlyph, r10_xn$setwidth$9Jrj, r10_xn$assignunicode$7Hrq, r10_xn$startfrom$1aao, r10_xn$lineto$5sIl, r10_xn$curveto$1aao, r10_xn$cubicto$1aao, r10_xn$putshapes$9Jrj, r10_xn$reverselast$3qIs, r10_include, r10_xn$createstroke$7Hrq, r10_xn$setanchor$9Jrj, _r10_t0, _r10_t1;
            _r10_t0 = this;
            r10_currentGlyph = _r10_t0;
            r10_xn$setwidth$9Jrj = _r10_t0['set-width']['bind'](_r10_t0);
            r10_xn$assignunicode$7Hrq = function _r10_t1(r11_code) {
                var r11_code;
                r10_currentGlyph['assign-unicode'](r11_code);
                return r1_unicodeGlyphs[[r10_currentGlyph['unicode'][r10_currentGlyph['unicode']['length'] - 1]]] = r10_currentGlyph;
            };
            r10_xn$startfrom$1aao = _r10_t0['start-from']['bind'](_r10_t0);
            r10_xn$lineto$5sIl = _r10_t0['line-to']['bind'](_r10_t0);
            r10_xn$curveto$1aao = _r10_t0['curve-to']['bind'](_r10_t0);
            r10_xn$cubicto$1aao = _r10_t0['cubic-to']['bind'](_r10_t0);
            r10_xn$putshapes$9Jrj = _r10_t0['put-shapes']['bind'](_r10_t0);
            r10_xn$reverselast$3qIs = _r10_t0['reverse-last']['bind'](_r10_t0);
            r10_include = _r10_t0['include']['bind'](_r10_t0);
            r10_xn$createstroke$7Hrq = _r10_t0['create-stroke']['bind'](_r10_t0);
            r10_xn$setanchor$9Jrj = _r10_t0['set-anchor']['bind'](_r10_t0);
            _r10_t0['gizmo'] = r1_globalTransform;
            _r10_t0['set-width'](r1_WIDTH);
            r10_xn$setwidth$9Jrj(r1_WIDTH);
            r10_xn$assignunicode$7Hrq(' ');
            r10_include(r1_eMarks);
            return void 0;
        });
        r1_mix = function _r1_t21(r12_a, r12_b, r12_p) {
            var r12_a, r12_b, r12_p;
            return r12_a + (r12_b - r12_a) * r12_p;
        };
        r1_xgrid = function _r1_t22(r13_p) {
            var r13_p;
            return r1_mix(r1_SB, r1_RIGHTSB, r13_p);
        };
        r1_linreg = function _r1_t23(r14_x0, r14_y0, r14_x1, r14_y1, r14_x) {
            var r14_x0, r14_y0, r14_x1, r14_y1, r14_x;
            return r14_y0 + (r14_x - r14_x0) * (r14_y1 - r14_y0) / (r14_x1 - r14_x0);
        };
        r1_fallback = function _r1_t24() {
            var r15_j, _r15_t0, _r15_t1, _r15_t2, _r15_t3;
            _r15_t0 = arguments;
            r15_j = 0;
            _r15_t1 = r15_j < _r15_t0['length'];
            for (; _r15_t1; _r15_t1 = r15_j < _r15_t0['length']) {
                if (_r15_t0[r15_j] !== void 0)
                    return _r15_t0[r15_j];
                else
                    _r15_t3 = void 0;
                _r15_t2 = r15_j = r15_j + 1;
            }
            return _r15_t2;
        };
        r1_Ring = function _r1_t25(r16_u, r16_d, r16_l, r16_r) {
            var r16_u, r16_d, r16_l, r16_r, r16_my, r16_mx, r16_s;
            r16_my = (r16_u + r16_d) / 2;
            r16_mx = (r16_l + r16_r) / 2;
            r16_s = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r16_mx, r16_d)['cubic-to'](r16_mx + (r16_l - r16_mx) * r1_CKAPPA, r16_d, r16_l, r16_my + (r16_d - r16_my) * r1_CKAPPA, r16_l, r16_my)['cubic-to'](r16_l, r16_my + (r16_u - r16_my) * r1_CKAPPA, r16_mx + (r16_l - r16_mx) * r1_CKAPPA, r16_u, r16_mx, r16_u)['cubic-to'](r16_mx + (r16_r - r16_mx) * r1_CKAPPA, r16_u, r16_r, r16_my + (r16_u - r16_my) * r1_CKAPPA, r16_r, r16_my)['cubic-to'](r16_r, r16_my + (r16_d - r16_my) * r1_CKAPPA, r16_mx + (r16_r - r16_mx) * r1_CKAPPA, r16_d, r16_mx, r16_d);
            return r16_s['points'];
        };
        r1_ORing = function _r1_t26(r17_u, r17_d, r17_l, r17_r, r17_smooth) {
            var r17_u, r17_d, r17_l, r17_r, r17_smooth, r17_myu, r17_myd, r17_mx, r17_s;
            r17_myu = r17_u - r17_smooth;
            r17_myd = r17_d + r17_smooth;
            r17_mx = (r17_l + r17_r) / 2;
            r17_s = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r17_mx, r17_d)['cubic-to'](r17_mx + (r17_l - r17_mx) * r1_CKAPPA, r17_d, r17_l, r17_myd + (r17_d - r17_myd) * r1_CKAPPA, r17_l, r17_myd)['line-to'](r17_l, r17_myu)['cubic-to'](r17_l, r17_myu + (r17_u - r17_myu) * r1_CKAPPA, r17_mx + (r17_l - r17_mx) * r1_CKAPPA, r17_u, r17_mx, r17_u)['cubic-to'](r17_mx + (r17_r - r17_mx) * r1_CKAPPA, r17_u, r17_r, r17_myu + (r17_u - r17_myu) * r1_CKAPPA, r17_r, r17_myu)['line-to'](r17_r, r17_myd)['cubic-to'](r17_r, r17_myd + (r17_d - r17_myd) * r1_CKAPPA, r17_mx + (r17_r - r17_mx) * r1_CKAPPA, r17_d, r17_mx, r17_d);
            return r17_s['points'];
        };
        r1_leftwardTopSerif = function _r1_t27(r18_x, r18_y, r18_length) {
            var r18_x, r18_y, r18_length;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r18_x + r1_HALFSTROKE, r18_y)['heads-to'](r1_LEFTWARD)['set-width'](r1_STROKE, 0)['line-to'](r18_x - r18_length - r1_globalTransform['yx'] * r1_STROKE, r18_y)['to-outline']();
        };
        r1_leftwardBottomSerif = function _r1_t28(r19_x, r19_y, r19_length) {
            var r19_x, r19_y, r19_length;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r19_x + r1_HALFSTROKE, r19_y)['heads-to'](r1_LEFTWARD)['set-width'](0, r1_STROKE)['line-to'](r19_x - r19_length + r1_globalTransform['yx'] * r1_STROKE, r19_y)['to-outline']();
        };
        r1_rightwardTopSerif = function _r1_t29(r20_x, r20_y, r20_length) {
            var r20_x, r20_y, r20_length;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r20_x - r1_HALFSTROKE, r20_y)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r20_x + r20_length - r1_globalTransform['yx'] * r1_STROKE, r20_y)['to-outline']();
        };
        r1_rightwardBottomSerif = function _r1_t30(r21_x, r21_y, r21_length) {
            var r21_x, r21_y, r21_length;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r21_x - r1_HALFSTROKE, r21_y)['heads-to'](r1_RIGHTWARD)['set-width'](r1_STROKE, 0)['line-to'](r21_x + r21_length + r1_globalTransform['yx'] * r1_STROKE, r21_y)['to-outline']();
        };
        r1_xsStrand = function _r1_t31(r22__xleft, r22_yleft, r22__xright, r22_yright, r22__halfstroke0, r22__halfstroke1, r22__ess, r22__expansion, r22__roundp) {
            var r22__xleft, r22_yleft, r22__xright, r22_yright, r22__halfstroke0, r22__halfstroke1, r22__ess, r22__expansion, r22__roundp, r22_expansion, r22_halfstroke0, r22_halfstroke1, r22_ess, r22_yItalicCorrection, r22_xItalicCorrection, r22_roundsize, r22_roundleft, r22_roundright, r22_xleft, r22_xright, r22_sxleft, r22_sxright, r22_syleft, r22_syright, _r22_t0, _r22_t1;
            r22_expansion = r22__expansion || 0.25;
            r22_halfstroke0 = r22__halfstroke0 || r1_HALFSTROKE;
            r22_halfstroke1 = r22__halfstroke1 || r1_HALFSTROKE;
            r22_ess = r22__ess || (r22_halfstroke0 + r22_halfstroke1) / 2;
            r22_yItalicCorrection = r1_globalTransform['yx'] * 0.985;
            r22_xItalicCorrection = 1 / Math['sqrt'](1 - r22_yItalicCorrection * r22_yItalicCorrection);
            _r22_t0 = r22__roundp || r1_SMOOTHA * 0.4;
            if (r22_yleft < r22_yright)
                _r22_t1 = -1;
            else
                _r22_t1 = 1;
            r22_roundsize = _r22_t0 * _r22_t1;
            r22_roundleft = r22_yleft - r22_roundsize;
            r22_roundright = r22_yright + r22_roundsize;
            r22_xleft = r22__xleft + r22_halfstroke0 * r22_xItalicCorrection;
            r22_xright = r22__xright - r22_halfstroke1 * r22_xItalicCorrection;
            r22_sxleft = r1_mix(r22_xleft, r22_xright, 0.5 - r22_expansion);
            r22_sxright = r1_mix(r22_xleft, r22_xright, 0.5 + r22_expansion);
            r22_syleft = r1_mix(r22_roundleft, r22_roundright, 0.5 - r22_expansion);
            r22_syright = r1_mix(r22_roundleft, r22_roundright, 0.5 + r22_expansion);
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r22_xleft, r22_yleft - r22_halfstroke0 * r22_yItalicCorrection)['set-width'](r22_halfstroke0, r22_halfstroke0)['curve-to'](r22_xleft, r22_roundleft, r22_sxleft, r22_syleft)['set-width'](r22_ess, r22_ess)['line-to'](r22_sxright, r22_syright)['curve-to'](r22_xright, r22_roundright, r22_xright, r22_yright + r22_halfstroke1 * r22_yItalicCorrection)['set-width'](r22_halfstroke1, r22_halfstroke1)['to-outline']();
        };
        r1_sStrand = function _r1_t32(r23_yleft, r23_yright, r23__expansion) {
            var r23_yleft, r23_yright, r23__expansion;
            return r1_xsStrand(r1_SB, r23_yleft, r1_RIGHTSB, r23_yright, r1_HALFSTROKE, r1_HALFSTROKE, r1_HALFSTROKE, r23__expansion, r1_SMOOTHA * 0.4);
        };
        r1_halfXStrand = function _r1_t33(r24__leftx, r24_lefty, r24_rightx, r24_righty, r24_turn, r24_straight, r24_tension, r24__fine) {
            var r24__leftx, r24_lefty, r24_rightx, r24_righty, r24_turn, r24_straight, r24_tension, r24__fine, r24_leftx, r24_fine, r24_turnyleft, r24_cyleft, r24_straightxleft, r24_straightyleft, _r24_t0, _r24_t1, _r24_t2, _r24_t3, _r24_t4, _r24_t5, _r24_t6, _r24_t7, _r24_t8, _r24_t9, _r24_t10, _r24_t11, _r24_t12, _r24_t13, _r24_t14, _r24_t15, _r24_t16, _r24_t17, _r24_t18, _r24_t19, _r24_t20, _r24_t21, _r24_t22, _r24_t23, _r24_t24, _r24_t25, _r24_t26, _r24_t27, _r24_t28, _r24_t29;
            _r24_t0 = r24__leftx;
            _r24_t1 = r1_HALFSTROKE;
            if (r24_rightx > r24__leftx)
                _r24_t2 = 1;
            else
                _r24_t2 = -1;
            _r24_t3 = _r24_t1 * _r24_t2;
            r24_leftx = _r24_t0 + _r24_t3;
            r24_fine = (r24__fine || r1_STROKE) * 0.5;
            r24_turnyleft = r1_mix(r24_lefty, r24_righty, r24_turn);
            r24_cyleft = r1_mix(r24_turnyleft, r24_righty, r24_tension);
            r24_straightxleft = r1_mix(r24_leftx, r24_rightx, r24_straight);
            r24_straightyleft = r1_mix(r24_cyleft, r24_righty, r24_straight);
            _r24_t4 = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r24_leftx, r24_lefty)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE);
            _r24_t5 = _r24_t4['heads-to'];
            if (r24_lefty < r24_righty)
                _r24_t6 = r1_UPWARD;
            else
                _r24_t6 = r1_DOWNWARD;
            _r24_t7 = _r24_t5['call'](_r24_t4, _r24_t6);
            _r24_t8 = _r24_t7['line-to'];
            _r24_t9 = r24_leftx;
            _r24_t10 = r24_turnyleft;
            _r24_t11 = _r24_t8['call'](_r24_t7, _r24_t9, _r24_t10);
            _r24_t12 = _r24_t11['heads-to'];
            if (r24_lefty < r24_righty)
                _r24_t13 = r1_UPWARD;
            else
                _r24_t13 = r1_DOWNWARD;
            _r24_t14 = _r24_t12['call'](_r24_t11, _r24_t13);
            _r24_t15 = _r24_t14['curve-to'];
            _r24_t16 = r24_leftx;
            _r24_t17 = r24_cyleft;
            _r24_t18 = r24_straightxleft;
            _r24_t19 = r24_straightyleft;
            _r24_t20 = _r24_t15['call'](_r24_t14, _r24_t16, _r24_t17, _r24_t18, _r24_t19);
            _r24_t21 = _r24_t20['set-width'];
            _r24_t22 = r24_fine;
            _r24_t23 = r24_fine;
            _r24_t24 = _r24_t21['call'](_r24_t20, _r24_t22, _r24_t23);
            _r24_t25 = _r24_t24['line-to'];
            _r24_t26 = r24_rightx;
            _r24_t27 = r24_righty;
            _r24_t28 = _r24_t25['call'](_r24_t24, _r24_t26, _r24_t27);
            _r24_t29 = _r24_t28['to-outline'];
            return _r24_t29['call'](_r24_t28);
        };
        r1_xStrand = function _r1_t34(r25__leftx, r25_lefty, r25__rightx, r25_righty, r25_turn, r25_straight, r25_tension) {
            var r25__leftx, r25_lefty, r25__rightx, r25_righty, r25_turn, r25_straight, r25_tension, r25_middlex, r25_middley;
            r25_middlex = r1_mix(r25__leftx, r25__rightx, 0.5);
            r25_middley = r1_mix(r25_lefty, r25_righty, 0.5);
            return r1_halfXStrand(r25__leftx, r25_lefty, r25_middlex, r25_middley, r25_turn, r25_straight, r25_tension)['concat'](r1_halfXStrand(r25__rightx, r25_righty, r25_middlex, r25_middley, r25_turn, r25_straight, r25_tension));
        };
        r1_nBowl = function _r1_t35(r26_left, r26_middle, r26_right, r26_fine) {
            var r26_left, r26_middle, r26_right, r26_fine, r26_bandLeft, r26_bandRight;
            r26_bandLeft = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r26_right, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r26_right, r1_XH - r1_SMALLSMOOTHB)['arc-vh-to'](r26_middle, r1_XO)['heads-to'](r1_LEFTWARD)['to-outline']();
            r26_bandRight = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r26_middle, r1_XO - r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r26_left, r1_XH - r1_SMALLSMOOTHA)['heads-to'](r1_DOWNWARD)['set-width'](0, r26_fine)['to-outline']();
            return r26_bandLeft['concat'](r26_bandRight);
        };
        r1_sHookUpper = function _r1_t36(r27_top, r27_smooth, r27_hook, r27__middle) {
            var r27_top, r27_smooth, r27_hook, r27__middle, r27_middle;
            r27_middle = r27__middle || r1_MIDDLE;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r1_RIGHTSB - r1_OXHOOK, r27_top - r27_hook)['set-width'](r1_STROKE, 0)['curve-to'](r1_mix(r27_middle, r1_RIGHTSB, r1_KAPPA_HOOK), r27_top - r1_O, r27_middle, r27_top - r1_O)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB, r27_top - r27_smooth)['to-outline']();
        };
        r1_twoHookUpper = function _r1_t37(r28_top, r28_smooth, r28_hook, r28__middle) {
            var r28_top, r28_smooth, r28_hook, r28__middle, r28_middle;
            r28_middle = r28__middle || r1_MIDDLE;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r1_SB + r1_OXHOOK, r28_top - r28_hook)['set-width'](0, r1_STROKE)['curve-to'](r1_mix(r28_middle, r1_SB, r1_KAPPA_HOOK), r28_top - r1_O, r28_middle, r28_top - r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB, r28_top - r28_smooth)['to-outline']();
        };
        r1_sHookLower = function _r1_t38(r29_bottom, r29_smooth, r29_hook, r29__middle) {
            var r29_bottom, r29_smooth, r29_hook, r29__middle, r29_middle;
            r29_middle = r29__middle || r1_MIDDLE;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r1_RIGHTSB, r29_smooth)['set-width'](0, r1_STROKE)['arc-vh-to'](r29_middle, r29_bottom + r1_O)['heads-to'](r1_LEFTWARD)['curve-to'](r1_mix(r29_middle, r1_SB, r1_KAPPA_HOOK), r29_bottom + r1_O, r1_SB + r1_OXHOOK, r29_bottom + r29_hook)['to-outline']();
        };
        r1_smallo = function _r1_t39(r30_u, r30_d, r30_l, r30_r) {
            var r30_u, r30_d, r30_l, r30_r, r30_middle, r30_ymiddlea, r30_ymiddleb, _r30_t0;
            r30_middle = (r30_l + r30_r) / 2;
            if (r30_u - r30_d > r1_SMALLSMOOTHA + r1_SMALLSMOOTHB)
                return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r30_middle, r30_u - r1_O)['set-width'](r1_STROKE, 0)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r30_l + r1_O, r30_u - r1_SMALLSMOOTHA)['line-to'](r30_l + r1_O, r30_d + r1_SMALLSMOOTHB)['arc-vh-to'](r30_middle, r30_d + r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r30_r - r1_O, r30_d + r1_SMALLSMOOTHA)['line-to'](r30_r - r1_O, r30_u - r1_SMALLSMOOTHB)['arc-vh-to'](r30_middle, r30_u - r1_O)['heads-to'](r1_LEFTWARD)['to-outline']();
            else {
                r30_ymiddlea = (r30_u - r1_SMALLSMOOTHA + r30_d + r1_SMALLSMOOTHB) / 2;
                r30_ymiddleb = (r30_u - r1_SMALLSMOOTHB + r30_d + r1_SMALLSMOOTHA) / 2;
                return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r30_middle, r30_u - r1_O)['set-width'](r1_STROKE, 0)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r30_l + r1_O, r30_ymiddlea)['arc-vh-to'](r30_middle, r30_d + r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r30_r - r1_O, r30_ymiddleb)['arc-vh-to'](r30_middle, r30_u - r1_O)['heads-to'](r1_LEFTWARD)['to-outline']();
            }
        };
        r1_hbar = function _r1_t40(r31_xleft, r31_xright, r31_y, r31__fine) {
            var r31_xleft, r31_xright, r31_y, r31__fine, r31_fine;
            r31_fine = (r31__fine || r1_STROKE) / 2;
            return new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r31_xleft, r31_y)['heads-to'](r1_RIGHTWARD)['set-width'](r31_fine, r31_fine)['line-to'](r31_xright, r31_y)['heads-to'](r1_RIGHTWARD)['to-outline']();
        };
        r1_vbar = function _r1_t41(r32_x, r32_ydown, r32_yup, r32__fine) {
            var r32_x, r32_ydown, r32_yup, r32__fine, r32_fine, _r32_t0, _r32_t1, _r32_t2, _r32_t3, _r32_t4, _r32_t5, _r32_t6, _r32_t7, _r32_t8, _r32_t9, _r32_t10, _r32_t11, _r32_t12, _r32_t13, _r32_t14, _r32_t15;
            r32_fine = (r32__fine || r1_STROKE) / 2;
            _r32_t0 = new r0_Stroke()['set-transform'](r1_globalTransform)['start-from'](r32_x, r32_ydown);
            _r32_t1 = _r32_t0['heads-to'];
            if (r32_ydown < r32_yup)
                _r32_t2 = r1_UPWARD;
            else
                _r32_t2 = r1_DOWNWARD;
            _r32_t3 = _r32_t1['call'](_r32_t0, _r32_t2);
            _r32_t4 = _r32_t3['set-width'];
            _r32_t5 = r32_fine;
            _r32_t6 = r32_fine;
            _r32_t7 = _r32_t4['call'](_r32_t3, _r32_t5, _r32_t6);
            _r32_t8 = _r32_t7['line-to'];
            _r32_t9 = r32_x;
            _r32_t10 = r32_yup;
            _r32_t11 = _r32_t8['call'](_r32_t7, _r32_t9, _r32_t10);
            _r32_t12 = _r32_t11['heads-to'];
            if (r32_ydown < r32_yup)
                _r32_t13 = r1_UPWARD;
            else
                _r32_t13 = r1_DOWNWARD;
            _r32_t14 = _r32_t12['call'](_r32_t11, _r32_t13);
            _r32_t15 = _r32_t14['to-outline'];
            return _r32_t15['call'](_r32_t14);
        };
        r1_markExtend = r1_ACCENTX * 0.5;
        r1_markHalfStroke = 0.5 * Math['min'](r1_STROKE, r1_ACCENT * 0.6);
        r1_markFine = r1_markHalfStroke * 0.8;
        r1_markMiddle = -r1_MIDDLE;
        r1_markDotsRadius = r1_DOTRADIUS * r1_markHalfStroke / r1_HALFSTROKE;
        r1_aboveMarkTop = r1_XH + r1_ACCENT * 1.6 - r1_HALFSTROKE;
        r1_aboveMarkBot = r1_XH + r1_ACCENT - r1_STROKE;
        r1_xn$createglyph$7Hrq('dotAbove', function _r1_t42() {
            var r34_currentGlyph, r34_xn$setwidth$9Jrj, r34_xn$assignunicode$7Hrq, r34_xn$startfrom$1aao, r34_xn$lineto$5sIl, r34_xn$curveto$1aao, r34_xn$cubicto$1aao, r34_xn$putshapes$9Jrj, r34_xn$reverselast$3qIs, r34_include, r34_xn$createstroke$7Hrq, r34_xn$setanchor$9Jrj, _r34_t0, _r34_t1;
            _r34_t0 = this;
            r34_currentGlyph = _r34_t0;
            r34_xn$setwidth$9Jrj = _r34_t0['set-width']['bind'](_r34_t0);
            r34_xn$assignunicode$7Hrq = function _r34_t1(r35_code) {
                var r35_code;
                r34_currentGlyph['assign-unicode'](r35_code);
                return r1_unicodeGlyphs[[r34_currentGlyph['unicode'][r34_currentGlyph['unicode']['length'] - 1]]] = r34_currentGlyph;
            };
            r34_xn$startfrom$1aao = _r34_t0['start-from']['bind'](_r34_t0);
            r34_xn$lineto$5sIl = _r34_t0['line-to']['bind'](_r34_t0);
            r34_xn$curveto$1aao = _r34_t0['curve-to']['bind'](_r34_t0);
            r34_xn$cubicto$1aao = _r34_t0['cubic-to']['bind'](_r34_t0);
            r34_xn$putshapes$9Jrj = _r34_t0['put-shapes']['bind'](_r34_t0);
            r34_xn$reverselast$3qIs = _r34_t0['reverse-last']['bind'](_r34_t0);
            r34_include = _r34_t0['include']['bind'](_r34_t0);
            r34_xn$createstroke$7Hrq = _r34_t0['create-stroke']['bind'](_r34_t0);
            r34_xn$setanchor$9Jrj = _r34_t0['set-anchor']['bind'](_r34_t0);
            _r34_t0['gizmo'] = r1_globalTransform;
            _r34_t0['set-width'](r1_WIDTH);
            r34_xn$setwidth$9Jrj(0);
            r34_xn$assignunicode$7Hrq(775);
            r34_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r34_xn$putshapes$9Jrj([r1_Ring(r1_XH + r1_ACCENT + r1_DOTRADIUS, r1_XH + r1_ACCENT - r1_DOTRADIUS, r1_markMiddle - r1_DOTRADIUS, r1_markMiddle + r1_DOTRADIUS)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dieresisAbove', function _r1_t43() {
            var r37_currentGlyph, r37_xn$setwidth$9Jrj, r37_xn$assignunicode$7Hrq, r37_xn$startfrom$1aao, r37_xn$lineto$5sIl, r37_xn$curveto$1aao, r37_xn$cubicto$1aao, r37_xn$putshapes$9Jrj, r37_xn$reverselast$3qIs, r37_include, r37_xn$createstroke$7Hrq, r37_xn$setanchor$9Jrj, _r37_t0, _r37_t1;
            _r37_t0 = this;
            r37_currentGlyph = _r37_t0;
            r37_xn$setwidth$9Jrj = _r37_t0['set-width']['bind'](_r37_t0);
            r37_xn$assignunicode$7Hrq = function _r37_t1(r38_code) {
                var r38_code;
                r37_currentGlyph['assign-unicode'](r38_code);
                return r1_unicodeGlyphs[[r37_currentGlyph['unicode'][r37_currentGlyph['unicode']['length'] - 1]]] = r37_currentGlyph;
            };
            r37_xn$startfrom$1aao = _r37_t0['start-from']['bind'](_r37_t0);
            r37_xn$lineto$5sIl = _r37_t0['line-to']['bind'](_r37_t0);
            r37_xn$curveto$1aao = _r37_t0['curve-to']['bind'](_r37_t0);
            r37_xn$cubicto$1aao = _r37_t0['cubic-to']['bind'](_r37_t0);
            r37_xn$putshapes$9Jrj = _r37_t0['put-shapes']['bind'](_r37_t0);
            r37_xn$reverselast$3qIs = _r37_t0['reverse-last']['bind'](_r37_t0);
            r37_include = _r37_t0['include']['bind'](_r37_t0);
            r37_xn$createstroke$7Hrq = _r37_t0['create-stroke']['bind'](_r37_t0);
            r37_xn$setanchor$9Jrj = _r37_t0['set-anchor']['bind'](_r37_t0);
            _r37_t0['gizmo'] = r1_globalTransform;
            _r37_t0['set-width'](r1_WIDTH);
            r37_xn$setwidth$9Jrj(0);
            r37_xn$assignunicode$7Hrq(776);
            r37_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r37_xn$putshapes$9Jrj([
                r1_Ring(r1_XH + r1_ACCENT + r1_markDotsRadius, r1_XH + r1_ACCENT - r1_markDotsRadius, r1_markMiddle - r1_markDotsRadius - r1_markExtend, r1_markMiddle + r1_markDotsRadius - r1_markExtend),
                r1_Ring(r1_XH + r1_ACCENT + r1_markDotsRadius, r1_XH + r1_ACCENT - r1_markDotsRadius, r1_markMiddle - r1_markDotsRadius + r1_markExtend, r1_markMiddle + r1_markDotsRadius + r1_markExtend)
            ]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('ringAbove', function _r1_t44() {
            var r40_currentGlyph, r40_xn$setwidth$9Jrj, r40_xn$assignunicode$7Hrq, r40_xn$startfrom$1aao, r40_xn$lineto$5sIl, r40_xn$curveto$1aao, r40_xn$cubicto$1aao, r40_xn$putshapes$9Jrj, r40_xn$reverselast$3qIs, r40_include, r40_xn$createstroke$7Hrq, r40_xn$setanchor$9Jrj, r40_radiusOut, r40_radiusIn, _r40_t0, _r40_t1;
            _r40_t0 = this;
            r40_currentGlyph = _r40_t0;
            r40_xn$setwidth$9Jrj = _r40_t0['set-width']['bind'](_r40_t0);
            r40_xn$assignunicode$7Hrq = function _r40_t1(r41_code) {
                var r41_code;
                r40_currentGlyph['assign-unicode'](r41_code);
                return r1_unicodeGlyphs[[r40_currentGlyph['unicode'][r40_currentGlyph['unicode']['length'] - 1]]] = r40_currentGlyph;
            };
            r40_xn$startfrom$1aao = _r40_t0['start-from']['bind'](_r40_t0);
            r40_xn$lineto$5sIl = _r40_t0['line-to']['bind'](_r40_t0);
            r40_xn$curveto$1aao = _r40_t0['curve-to']['bind'](_r40_t0);
            r40_xn$cubicto$1aao = _r40_t0['cubic-to']['bind'](_r40_t0);
            r40_xn$putshapes$9Jrj = _r40_t0['put-shapes']['bind'](_r40_t0);
            r40_xn$reverselast$3qIs = _r40_t0['reverse-last']['bind'](_r40_t0);
            r40_include = _r40_t0['include']['bind'](_r40_t0);
            r40_xn$createstroke$7Hrq = _r40_t0['create-stroke']['bind'](_r40_t0);
            r40_xn$setanchor$9Jrj = _r40_t0['set-anchor']['bind'](_r40_t0);
            _r40_t0['gizmo'] = r1_globalTransform;
            _r40_t0['set-width'](r1_WIDTH);
            r40_xn$setwidth$9Jrj(0);
            r40_xn$assignunicode$7Hrq(778);
            r40_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r40_radiusOut = r1_DOTRADIUS * 1.5;
            r40_radiusIn = r1_DOTRADIUS * 0.7;
            r40_xn$putshapes$9Jrj([
                r1_Ring(r1_XH + r1_ACCENT + r40_radiusOut, r1_XH + r1_ACCENT - r40_radiusOut, r1_markMiddle - r40_radiusOut, r1_markMiddle + r40_radiusOut),
                r1_Ring(r1_XH + r1_ACCENT + r40_radiusIn, r1_XH + r1_ACCENT - r40_radiusIn, r1_markMiddle - r40_radiusIn, r1_markMiddle + r40_radiusIn)
            ]);
            r40_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('graveAbove', function _r1_t45() {
            var r43_currentGlyph, r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_include, r43_xn$createstroke$7Hrq, r43_xn$setanchor$9Jrj, _r43_t0, _r43_t1;
            _r43_t0 = this;
            r43_currentGlyph = _r43_t0;
            r43_xn$setwidth$9Jrj = _r43_t0['set-width']['bind'](_r43_t0);
            r43_xn$assignunicode$7Hrq = function _r43_t1(r44_code) {
                var r44_code;
                r43_currentGlyph['assign-unicode'](r44_code);
                return r1_unicodeGlyphs[[r43_currentGlyph['unicode'][r43_currentGlyph['unicode']['length'] - 1]]] = r43_currentGlyph;
            };
            r43_xn$startfrom$1aao = _r43_t0['start-from']['bind'](_r43_t0);
            r43_xn$lineto$5sIl = _r43_t0['line-to']['bind'](_r43_t0);
            r43_xn$curveto$1aao = _r43_t0['curve-to']['bind'](_r43_t0);
            r43_xn$cubicto$1aao = _r43_t0['cubic-to']['bind'](_r43_t0);
            r43_xn$putshapes$9Jrj = _r43_t0['put-shapes']['bind'](_r43_t0);
            r43_xn$reverselast$3qIs = _r43_t0['reverse-last']['bind'](_r43_t0);
            r43_include = _r43_t0['include']['bind'](_r43_t0);
            r43_xn$createstroke$7Hrq = _r43_t0['create-stroke']['bind'](_r43_t0);
            r43_xn$setanchor$9Jrj = _r43_t0['set-anchor']['bind'](_r43_t0);
            _r43_t0['gizmo'] = r1_globalTransform;
            _r43_t0['set-width'](r1_WIDTH);
            r43_xn$setwidth$9Jrj(0);
            r43_xn$assignunicode$7Hrq(768);
            r43_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r43_xn$putshapes$9Jrj(r43_xn$createstroke$7Hrq()['start-from'](r1_markMiddle + r1_markHalfStroke, r1_aboveMarkBot)['set-width'](r1_markFine, r1_markFine)['line-to'](r1_markMiddle - r1_markExtend, r1_aboveMarkTop)['set-width'](r1_markHalfStroke, r1_markHalfStroke)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('acuteAbove', function _r1_t46() {
            var r46_currentGlyph, r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_include, r46_xn$createstroke$7Hrq, r46_xn$setanchor$9Jrj, _r46_t0, _r46_t1;
            _r46_t0 = this;
            r46_currentGlyph = _r46_t0;
            r46_xn$setwidth$9Jrj = _r46_t0['set-width']['bind'](_r46_t0);
            r46_xn$assignunicode$7Hrq = function _r46_t1(r47_code) {
                var r47_code;
                r46_currentGlyph['assign-unicode'](r47_code);
                return r1_unicodeGlyphs[[r46_currentGlyph['unicode'][r46_currentGlyph['unicode']['length'] - 1]]] = r46_currentGlyph;
            };
            r46_xn$startfrom$1aao = _r46_t0['start-from']['bind'](_r46_t0);
            r46_xn$lineto$5sIl = _r46_t0['line-to']['bind'](_r46_t0);
            r46_xn$curveto$1aao = _r46_t0['curve-to']['bind'](_r46_t0);
            r46_xn$cubicto$1aao = _r46_t0['cubic-to']['bind'](_r46_t0);
            r46_xn$putshapes$9Jrj = _r46_t0['put-shapes']['bind'](_r46_t0);
            r46_xn$reverselast$3qIs = _r46_t0['reverse-last']['bind'](_r46_t0);
            r46_include = _r46_t0['include']['bind'](_r46_t0);
            r46_xn$createstroke$7Hrq = _r46_t0['create-stroke']['bind'](_r46_t0);
            r46_xn$setanchor$9Jrj = _r46_t0['set-anchor']['bind'](_r46_t0);
            _r46_t0['gizmo'] = r1_globalTransform;
            _r46_t0['set-width'](r1_WIDTH);
            r46_xn$setwidth$9Jrj(0);
            r46_xn$assignunicode$7Hrq(769);
            r46_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r46_xn$putshapes$9Jrj(r46_xn$createstroke$7Hrq()['start-from'](r1_markMiddle - r1_markHalfStroke, r1_aboveMarkBot)['set-width'](r1_markFine, r1_markFine)['line-to'](r1_markMiddle + r1_markExtend, r1_aboveMarkTop)['set-width'](r1_markHalfStroke, r1_markHalfStroke)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('circumflexAbove', function _r1_t47() {
            var r49_currentGlyph, r49_xn$setwidth$9Jrj, r49_xn$assignunicode$7Hrq, r49_xn$startfrom$1aao, r49_xn$lineto$5sIl, r49_xn$curveto$1aao, r49_xn$cubicto$1aao, r49_xn$putshapes$9Jrj, r49_xn$reverselast$3qIs, r49_include, r49_xn$createstroke$7Hrq, r49_xn$setanchor$9Jrj, _r49_t0, _r49_t1;
            _r49_t0 = this;
            r49_currentGlyph = _r49_t0;
            r49_xn$setwidth$9Jrj = _r49_t0['set-width']['bind'](_r49_t0);
            r49_xn$assignunicode$7Hrq = function _r49_t1(r50_code) {
                var r50_code;
                r49_currentGlyph['assign-unicode'](r50_code);
                return r1_unicodeGlyphs[[r49_currentGlyph['unicode'][r49_currentGlyph['unicode']['length'] - 1]]] = r49_currentGlyph;
            };
            r49_xn$startfrom$1aao = _r49_t0['start-from']['bind'](_r49_t0);
            r49_xn$lineto$5sIl = _r49_t0['line-to']['bind'](_r49_t0);
            r49_xn$curveto$1aao = _r49_t0['curve-to']['bind'](_r49_t0);
            r49_xn$cubicto$1aao = _r49_t0['cubic-to']['bind'](_r49_t0);
            r49_xn$putshapes$9Jrj = _r49_t0['put-shapes']['bind'](_r49_t0);
            r49_xn$reverselast$3qIs = _r49_t0['reverse-last']['bind'](_r49_t0);
            r49_include = _r49_t0['include']['bind'](_r49_t0);
            r49_xn$createstroke$7Hrq = _r49_t0['create-stroke']['bind'](_r49_t0);
            r49_xn$setanchor$9Jrj = _r49_t0['set-anchor']['bind'](_r49_t0);
            _r49_t0['gizmo'] = r1_globalTransform;
            _r49_t0['set-width'](r1_WIDTH);
            r49_xn$setwidth$9Jrj(0);
            r49_xn$assignunicode$7Hrq(770);
            r49_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()['start-from'](r1_markMiddle - r1_markExtend - r1_markHalfStroke, r1_aboveMarkBot)['set-width'](r1_markHalfStroke, r1_markHalfStroke)['line-to'](r1_markMiddle, r1_aboveMarkTop + r1_markFine * 0.7)['heads-to'](r1_UPWARD)['to-outline']());
            r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()['start-from'](r1_markMiddle + r1_markExtend + r1_markHalfStroke, r1_aboveMarkBot)['set-width'](r1_markHalfStroke, r1_markHalfStroke)['line-to'](r1_markMiddle, r1_aboveMarkTop + r1_markFine * 0.7)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('tildeAbove', function _r1_t48() {
            var r52_currentGlyph, r52_xn$setwidth$9Jrj, r52_xn$assignunicode$7Hrq, r52_xn$startfrom$1aao, r52_xn$lineto$5sIl, r52_xn$curveto$1aao, r52_xn$cubicto$1aao, r52_xn$putshapes$9Jrj, r52_xn$reverselast$3qIs, r52_include, r52_xn$createstroke$7Hrq, r52_xn$setanchor$9Jrj, r52_leftEnd, r52_rightEnd, r52_ttop, r52_tbot, r52_top, r52_bot, r52_tildeWave, r52_tildeWaveX, r52_tildeWaveEnd, _r52_t0, _r52_t1;
            _r52_t0 = this;
            r52_currentGlyph = _r52_t0;
            r52_xn$setwidth$9Jrj = _r52_t0['set-width']['bind'](_r52_t0);
            r52_xn$assignunicode$7Hrq = function _r52_t1(r53_code) {
                var r53_code;
                r52_currentGlyph['assign-unicode'](r53_code);
                return r1_unicodeGlyphs[[r52_currentGlyph['unicode'][r52_currentGlyph['unicode']['length'] - 1]]] = r52_currentGlyph;
            };
            r52_xn$startfrom$1aao = _r52_t0['start-from']['bind'](_r52_t0);
            r52_xn$lineto$5sIl = _r52_t0['line-to']['bind'](_r52_t0);
            r52_xn$curveto$1aao = _r52_t0['curve-to']['bind'](_r52_t0);
            r52_xn$cubicto$1aao = _r52_t0['cubic-to']['bind'](_r52_t0);
            r52_xn$putshapes$9Jrj = _r52_t0['put-shapes']['bind'](_r52_t0);
            r52_xn$reverselast$3qIs = _r52_t0['reverse-last']['bind'](_r52_t0);
            r52_include = _r52_t0['include']['bind'](_r52_t0);
            r52_xn$createstroke$7Hrq = _r52_t0['create-stroke']['bind'](_r52_t0);
            r52_xn$setanchor$9Jrj = _r52_t0['set-anchor']['bind'](_r52_t0);
            _r52_t0['gizmo'] = r1_globalTransform;
            _r52_t0['set-width'](r1_WIDTH);
            r52_xn$setwidth$9Jrj(0);
            r52_xn$assignunicode$7Hrq(771);
            r52_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r52_leftEnd = r1_markMiddle - r1_markExtend * 1.5;
            r52_rightEnd = r1_markMiddle + r1_markExtend * 1.5;
            r52_ttop = r1_aboveMarkTop;
            r52_tbot = r1_aboveMarkBot + r1_markFine / 2;
            r52_top = r52_ttop + r1_markFine * 2;
            r52_bot = r52_tbot - r1_markFine * 2;
            r52_tildeWave = r1_linreg(40, 1.45, 52, 1.33, r1_markHalfStroke);
            r52_tildeWaveX = 0.52;
            r52_tildeWaveEnd = 0;
            r52_xn$putshapes$9Jrj(r52_xn$createstroke$7Hrq()['start-from'](r52_leftEnd, r1_mix(r52_tbot, r52_ttop, r52_tildeWaveEnd))['set-width'](r1_markHalfStroke, r1_markHalfStroke)['cubic-to'](r1_mix(r52_leftEnd, r52_rightEnd, r52_tildeWaveX), r1_mix(r52_bot, r52_top, r52_tildeWave), r1_mix(r52_leftEnd, r52_rightEnd, 1 - r52_tildeWaveX), r1_mix(r52_bot, r52_top, 1 - r52_tildeWave), r52_rightEnd, r1_mix(r52_tbot, r52_ttop, 1 - r52_tildeWaveEnd))['to-outline'](0, 0, 11));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('macronAbove', function _r1_t49() {
            var r55_currentGlyph, r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_include, r55_xn$createstroke$7Hrq, r55_xn$setanchor$9Jrj, r55_leftEnd, r55_rightEnd, _r55_t0, _r55_t1;
            _r55_t0 = this;
            r55_currentGlyph = _r55_t0;
            r55_xn$setwidth$9Jrj = _r55_t0['set-width']['bind'](_r55_t0);
            r55_xn$assignunicode$7Hrq = function _r55_t1(r56_code) {
                var r56_code;
                r55_currentGlyph['assign-unicode'](r56_code);
                return r1_unicodeGlyphs[[r55_currentGlyph['unicode'][r55_currentGlyph['unicode']['length'] - 1]]] = r55_currentGlyph;
            };
            r55_xn$startfrom$1aao = _r55_t0['start-from']['bind'](_r55_t0);
            r55_xn$lineto$5sIl = _r55_t0['line-to']['bind'](_r55_t0);
            r55_xn$curveto$1aao = _r55_t0['curve-to']['bind'](_r55_t0);
            r55_xn$cubicto$1aao = _r55_t0['cubic-to']['bind'](_r55_t0);
            r55_xn$putshapes$9Jrj = _r55_t0['put-shapes']['bind'](_r55_t0);
            r55_xn$reverselast$3qIs = _r55_t0['reverse-last']['bind'](_r55_t0);
            r55_include = _r55_t0['include']['bind'](_r55_t0);
            r55_xn$createstroke$7Hrq = _r55_t0['create-stroke']['bind'](_r55_t0);
            r55_xn$setanchor$9Jrj = _r55_t0['set-anchor']['bind'](_r55_t0);
            _r55_t0['gizmo'] = r1_globalTransform;
            _r55_t0['set-width'](r1_WIDTH);
            r55_xn$setwidth$9Jrj(0);
            r55_xn$assignunicode$7Hrq(772);
            r55_xn$setanchor$9Jrj('above', r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop);
            r55_leftEnd = r1_markMiddle - r1_markExtend * 1.5;
            r55_rightEnd = r1_markMiddle + r1_markExtend * 1.5;
            r55_xn$putshapes$9Jrj(r55_xn$createstroke$7Hrq()['start-from'](r55_leftEnd, r1_mix(r1_aboveMarkTop, r1_aboveMarkBot, 0.5))['set-width'](r1_markHalfStroke, r1_markHalfStroke)['heads-to'](r1_RIGHTWARD)['line-to'](r55_rightEnd, r1_mix(r1_aboveMarkTop, r1_aboveMarkBot, 0.5))['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('A', function _r1_t50() {
            var r58_currentGlyph, r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, r58_TURN, r58_leftbar, r58_rightbar, r58_hbar, _r58_t0, _r58_t1;
            _r58_t0 = this;
            r58_currentGlyph = _r58_t0;
            r58_xn$setwidth$9Jrj = _r58_t0['set-width']['bind'](_r58_t0);
            r58_xn$assignunicode$7Hrq = function _r58_t1(r59_code) {
                var r59_code;
                r58_currentGlyph['assign-unicode'](r59_code);
                return r1_unicodeGlyphs[[r58_currentGlyph['unicode'][r58_currentGlyph['unicode']['length'] - 1]]] = r58_currentGlyph;
            };
            r58_xn$startfrom$1aao = _r58_t0['start-from']['bind'](_r58_t0);
            r58_xn$lineto$5sIl = _r58_t0['line-to']['bind'](_r58_t0);
            r58_xn$curveto$1aao = _r58_t0['curve-to']['bind'](_r58_t0);
            r58_xn$cubicto$1aao = _r58_t0['cubic-to']['bind'](_r58_t0);
            r58_xn$putshapes$9Jrj = _r58_t0['put-shapes']['bind'](_r58_t0);
            r58_xn$reverselast$3qIs = _r58_t0['reverse-last']['bind'](_r58_t0);
            r58_include = _r58_t0['include']['bind'](_r58_t0);
            r58_xn$createstroke$7Hrq = _r58_t0['create-stroke']['bind'](_r58_t0);
            r58_xn$setanchor$9Jrj = _r58_t0['set-anchor']['bind'](_r58_t0);
            _r58_t0['gizmo'] = r1_globalTransform;
            _r58_t0['set-width'](r1_WIDTH);
            r58_xn$setwidth$9Jrj(r1_WIDTH);
            r58_xn$assignunicode$7Hrq('A');
            r58_include(r1_capitalMarks);
            r58_TURN = r1_XH * 0.1;
            r58_leftbar = r58_xn$createstroke$7Hrq();
            r58_leftbar['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r58_TURN)['heads-to'](r1_UPWARD)['curve-to'](r1_SB, r58_TURN + 0.27 * (r1_CAP - r58_TURN), r1_MIDDLE - r1_STROKE / 2, r1_CAP)['set-width'](0, r1_STROKE * 0.8);
            r58_rightbar = r58_xn$createstroke$7Hrq();
            r58_rightbar['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r58_TURN)['heads-to'](r1_UPWARD)['curve-to'](r1_RIGHTSB, r58_TURN + 0.27 * (r1_CAP - r58_TURN), r1_MIDDLE + r1_STROKE / 2, r1_CAP)['set-width'](r1_STROKE * 0.8, 0);
            r58_hbar = r58_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_STROKE, r1_XH / 2)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB - r1_STROKE, r1_XH / 2)['heads-to'](r1_RIGHTWARD);
            r58_xn$putshapes$9Jrj(r58_leftbar['to-outline']());
            r58_xn$putshapes$9Jrj(r58_hbar['to-outline']());
            r58_xn$putshapes$9Jrj(r58_rightbar['to-outline']());
            r58_xn$startfrom$1aao(r1_MIDDLE - r1_STROKE / 2, r1_CAP);
            r58_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2, r1_CAP);
            r58_xn$lineto$5sIl(r1_MIDDLE, r1_CAP - r1_STROKE);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('V', function _r1_t51() {
            var r61_currentGlyph, r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_include, r61_xn$createstroke$7Hrq, r61_xn$setanchor$9Jrj, r61_TURN, r61_leftbar, r61_rightbar, _r61_t0, _r61_t1;
            _r61_t0 = this;
            r61_currentGlyph = _r61_t0;
            r61_xn$setwidth$9Jrj = _r61_t0['set-width']['bind'](_r61_t0);
            r61_xn$assignunicode$7Hrq = function _r61_t1(r62_code) {
                var r62_code;
                r61_currentGlyph['assign-unicode'](r62_code);
                return r1_unicodeGlyphs[[r61_currentGlyph['unicode'][r61_currentGlyph['unicode']['length'] - 1]]] = r61_currentGlyph;
            };
            r61_xn$startfrom$1aao = _r61_t0['start-from']['bind'](_r61_t0);
            r61_xn$lineto$5sIl = _r61_t0['line-to']['bind'](_r61_t0);
            r61_xn$curveto$1aao = _r61_t0['curve-to']['bind'](_r61_t0);
            r61_xn$cubicto$1aao = _r61_t0['cubic-to']['bind'](_r61_t0);
            r61_xn$putshapes$9Jrj = _r61_t0['put-shapes']['bind'](_r61_t0);
            r61_xn$reverselast$3qIs = _r61_t0['reverse-last']['bind'](_r61_t0);
            r61_include = _r61_t0['include']['bind'](_r61_t0);
            r61_xn$createstroke$7Hrq = _r61_t0['create-stroke']['bind'](_r61_t0);
            r61_xn$setanchor$9Jrj = _r61_t0['set-anchor']['bind'](_r61_t0);
            _r61_t0['gizmo'] = r1_globalTransform;
            _r61_t0['set-width'](r1_WIDTH);
            r61_xn$setwidth$9Jrj(r1_WIDTH);
            r61_xn$assignunicode$7Hrq('V');
            r61_include(r1_capitalMarks);
            r61_TURN = r1_CAP * 0.9;
            r61_leftbar = r61_xn$createstroke$7Hrq();
            r61_leftbar['start-from'](r1_SB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r61_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_SB, (1 - 0.27) * r61_TURN, r1_MIDDLE - r1_STROKE / 2, 0)['set-width'](r1_STROKE * 0.8, 0);
            r61_rightbar = r61_xn$createstroke$7Hrq();
            r61_rightbar['start-from'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r61_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.27) * r61_TURN, r1_MIDDLE + r1_STROKE / 2, 0)['set-width'](0, r1_STROKE * 0.8);
            r61_xn$putshapes$9Jrj(r61_leftbar['to-outline']());
            r61_xn$putshapes$9Jrj(r61_rightbar['to-outline']());
            r61_xn$startfrom$1aao(r1_MIDDLE + r1_STROKE / 2, 0);
            r61_xn$lineto$5sIl(r1_MIDDLE - r1_STROKE / 2, 0);
            r61_xn$lineto$5sIl(r1_MIDDLE, r1_STROKE);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('W', function _r1_t52() {
            var r64_currentGlyph, r64_xn$setwidth$9Jrj, r64_xn$assignunicode$7Hrq, r64_xn$startfrom$1aao, r64_xn$lineto$5sIl, r64_xn$curveto$1aao, r64_xn$cubicto$1aao, r64_xn$putshapes$9Jrj, r64_xn$reverselast$3qIs, r64_include, r64_xn$createstroke$7Hrq, r64_xn$setanchor$9Jrj, r64_TURN, r64_turn2, r64_wheight, r64_bottomStroke, r64_m1, r64_m2, _r64_t0, _r64_t1;
            _r64_t0 = this;
            r64_currentGlyph = _r64_t0;
            r64_xn$setwidth$9Jrj = _r64_t0['set-width']['bind'](_r64_t0);
            r64_xn$assignunicode$7Hrq = function _r64_t1(r65_code) {
                var r65_code;
                r64_currentGlyph['assign-unicode'](r65_code);
                return r1_unicodeGlyphs[[r64_currentGlyph['unicode'][r64_currentGlyph['unicode']['length'] - 1]]] = r64_currentGlyph;
            };
            r64_xn$startfrom$1aao = _r64_t0['start-from']['bind'](_r64_t0);
            r64_xn$lineto$5sIl = _r64_t0['line-to']['bind'](_r64_t0);
            r64_xn$curveto$1aao = _r64_t0['curve-to']['bind'](_r64_t0);
            r64_xn$cubicto$1aao = _r64_t0['cubic-to']['bind'](_r64_t0);
            r64_xn$putshapes$9Jrj = _r64_t0['put-shapes']['bind'](_r64_t0);
            r64_xn$reverselast$3qIs = _r64_t0['reverse-last']['bind'](_r64_t0);
            r64_include = _r64_t0['include']['bind'](_r64_t0);
            r64_xn$createstroke$7Hrq = _r64_t0['create-stroke']['bind'](_r64_t0);
            r64_xn$setanchor$9Jrj = _r64_t0['set-anchor']['bind'](_r64_t0);
            _r64_t0['gizmo'] = r1_globalTransform;
            _r64_t0['set-width'](r1_WIDTH);
            r64_xn$setwidth$9Jrj(r1_WIDTH);
            r64_xn$assignunicode$7Hrq('W');
            r64_include(r1_capitalMarks);
            r64_TURN = r1_CAP * 0.75;
            r64_turn2 = r1_CAP * 0.59;
            r64_wheight = r1_CAP * 0.6;
            r64_bottomStroke = Math['min'](r1_STROKE * 0.8, (r1_WIDTH - r1_SB * 2) * 0.175);
            r64_m1 = r1_WIDTH * 0.3;
            r64_m2 = r1_WIDTH * 0.7;
            r64_xn$putshapes$9Jrj(r64_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r64_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_SB, (1 - 0.27) * r64_TURN, r64_m1 - r64_bottomStroke / 2, 0)['set-width'](r64_bottomStroke, 0)['to-outline']());
            r64_xn$putshapes$9Jrj(r64_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r64_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.27) * r64_TURN, r64_m2 + r64_bottomStroke / 2, 0)['set-width'](0, r64_bottomStroke)['to-outline']());
            r64_xn$putshapes$9Jrj(r64_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r64_bottomStroke / 2, r64_wheight)['heads-to'](r1_DOWNWARD)['set-width'](0, r64_bottomStroke)['line-to'](r1_MIDDLE + r64_bottomStroke / 2, r64_turn2)['heads-to'](r1_DOWNWARD)['curve-to'](r1_MIDDLE + r64_bottomStroke / 2, (1 - 0.1) * r64_turn2, r64_m1 + r64_bottomStroke / 2, 0)['set-width'](0, r64_bottomStroke)['to-outline']());
            r64_xn$putshapes$9Jrj(r64_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r64_bottomStroke / 2, r64_wheight)['heads-to'](r1_DOWNWARD)['set-width'](r64_bottomStroke, 0)['line-to'](r1_MIDDLE - r64_bottomStroke / 2, r64_turn2)['heads-to'](r1_DOWNWARD)['curve-to'](r1_MIDDLE - r64_bottomStroke / 2, (1 - 0.1) * r64_turn2, r64_m2 - r64_bottomStroke / 2, 0)['set-width'](r64_bottomStroke, 0)['to-outline']());
            r64_xn$startfrom$1aao(r64_m1 + r64_bottomStroke / 2, 0);
            r64_xn$lineto$5sIl(r64_m1 - r64_bottomStroke / 2, 0);
            r64_xn$lineto$5sIl(r64_m1, r64_bottomStroke);
            r64_xn$startfrom$1aao(r64_m2 + r64_bottomStroke / 2, 0);
            r64_xn$lineto$5sIl(r64_m2 - r64_bottomStroke / 2, 0);
            r64_xn$lineto$5sIl(r64_m2, r64_bottomStroke);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('X', function _r1_t53() {
            var r67_currentGlyph, r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, r67_include, r67_xn$createstroke$7Hrq, r67_xn$setanchor$9Jrj, _r67_t0, _r67_t1;
            _r67_t0 = this;
            r67_currentGlyph = _r67_t0;
            r67_xn$setwidth$9Jrj = _r67_t0['set-width']['bind'](_r67_t0);
            r67_xn$assignunicode$7Hrq = function _r67_t1(r68_code) {
                var r68_code;
                r67_currentGlyph['assign-unicode'](r68_code);
                return r1_unicodeGlyphs[[r67_currentGlyph['unicode'][r67_currentGlyph['unicode']['length'] - 1]]] = r67_currentGlyph;
            };
            r67_xn$startfrom$1aao = _r67_t0['start-from']['bind'](_r67_t0);
            r67_xn$lineto$5sIl = _r67_t0['line-to']['bind'](_r67_t0);
            r67_xn$curveto$1aao = _r67_t0['curve-to']['bind'](_r67_t0);
            r67_xn$cubicto$1aao = _r67_t0['cubic-to']['bind'](_r67_t0);
            r67_xn$putshapes$9Jrj = _r67_t0['put-shapes']['bind'](_r67_t0);
            r67_xn$reverselast$3qIs = _r67_t0['reverse-last']['bind'](_r67_t0);
            r67_include = _r67_t0['include']['bind'](_r67_t0);
            r67_xn$createstroke$7Hrq = _r67_t0['create-stroke']['bind'](_r67_t0);
            r67_xn$setanchor$9Jrj = _r67_t0['set-anchor']['bind'](_r67_t0);
            _r67_t0['gizmo'] = r1_globalTransform;
            _r67_t0['set-width'](r1_WIDTH);
            r67_xn$setwidth$9Jrj(r1_WIDTH);
            r67_xn$assignunicode$7Hrq('X');
            r67_include(r1_capitalMarks);
            r67_xn$putshapes$9Jrj(r1_xStrand(r1_SB, 0, r1_RIGHTSB, r1_CAP, 0.1, 0.4, 0.28));
            r67_xn$putshapes$9Jrj(r1_xStrand(r1_SB, r1_CAP, r1_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('Y', function _r1_t54() {
            var r70_currentGlyph, r70_xn$setwidth$9Jrj, r70_xn$assignunicode$7Hrq, r70_xn$startfrom$1aao, r70_xn$lineto$5sIl, r70_xn$curveto$1aao, r70_xn$cubicto$1aao, r70_xn$putshapes$9Jrj, r70_xn$reverselast$3qIs, r70_include, r70_xn$createstroke$7Hrq, r70_xn$setanchor$9Jrj, r70_cross, _r70_t0, _r70_t1;
            _r70_t0 = this;
            r70_currentGlyph = _r70_t0;
            r70_xn$setwidth$9Jrj = _r70_t0['set-width']['bind'](_r70_t0);
            r70_xn$assignunicode$7Hrq = function _r70_t1(r71_code) {
                var r71_code;
                r70_currentGlyph['assign-unicode'](r71_code);
                return r1_unicodeGlyphs[[r70_currentGlyph['unicode'][r70_currentGlyph['unicode']['length'] - 1]]] = r70_currentGlyph;
            };
            r70_xn$startfrom$1aao = _r70_t0['start-from']['bind'](_r70_t0);
            r70_xn$lineto$5sIl = _r70_t0['line-to']['bind'](_r70_t0);
            r70_xn$curveto$1aao = _r70_t0['curve-to']['bind'](_r70_t0);
            r70_xn$cubicto$1aao = _r70_t0['cubic-to']['bind'](_r70_t0);
            r70_xn$putshapes$9Jrj = _r70_t0['put-shapes']['bind'](_r70_t0);
            r70_xn$reverselast$3qIs = _r70_t0['reverse-last']['bind'](_r70_t0);
            r70_include = _r70_t0['include']['bind'](_r70_t0);
            r70_xn$createstroke$7Hrq = _r70_t0['create-stroke']['bind'](_r70_t0);
            r70_xn$setanchor$9Jrj = _r70_t0['set-anchor']['bind'](_r70_t0);
            _r70_t0['gizmo'] = r1_globalTransform;
            _r70_t0['set-width'](r1_WIDTH);
            r70_xn$setwidth$9Jrj(r1_WIDTH);
            r70_xn$assignunicode$7Hrq('Y');
            r70_include(r1_capitalMarks);
            r70_cross = r1_CAP * 0.4;
            r70_xn$putshapes$9Jrj(r1_halfXStrand(r1_SB, r1_CAP, r1_MIDDLE, r70_cross, 0.1, 0.4, 0.28));
            r70_xn$putshapes$9Jrj(r1_halfXStrand(r1_RIGHTSB, r1_CAP, r1_MIDDLE, r70_cross, 0.1, 0.4, 0.28));
            r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_UPWARD)['line-to'](r1_MIDDLE, r70_cross + r1_HALFSTROKE)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('K', function _r1_t55() {
            var r73_currentGlyph, r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, r73_include, r73_xn$createstroke$7Hrq, r73_xn$setanchor$9Jrj, r73_TURN, r73_rturn, r73_right, r73_fine, _r73_t0, _r73_t1;
            _r73_t0 = this;
            r73_currentGlyph = _r73_t0;
            r73_xn$setwidth$9Jrj = _r73_t0['set-width']['bind'](_r73_t0);
            r73_xn$assignunicode$7Hrq = function _r73_t1(r74_code) {
                var r74_code;
                r73_currentGlyph['assign-unicode'](r74_code);
                return r1_unicodeGlyphs[[r73_currentGlyph['unicode'][r73_currentGlyph['unicode']['length'] - 1]]] = r73_currentGlyph;
            };
            r73_xn$startfrom$1aao = _r73_t0['start-from']['bind'](_r73_t0);
            r73_xn$lineto$5sIl = _r73_t0['line-to']['bind'](_r73_t0);
            r73_xn$curveto$1aao = _r73_t0['curve-to']['bind'](_r73_t0);
            r73_xn$cubicto$1aao = _r73_t0['cubic-to']['bind'](_r73_t0);
            r73_xn$putshapes$9Jrj = _r73_t0['put-shapes']['bind'](_r73_t0);
            r73_xn$reverselast$3qIs = _r73_t0['reverse-last']['bind'](_r73_t0);
            r73_include = _r73_t0['include']['bind'](_r73_t0);
            r73_xn$createstroke$7Hrq = _r73_t0['create-stroke']['bind'](_r73_t0);
            r73_xn$setanchor$9Jrj = _r73_t0['set-anchor']['bind'](_r73_t0);
            _r73_t0['gizmo'] = r1_globalTransform;
            _r73_t0['set-width'](r1_WIDTH);
            r73_xn$setwidth$9Jrj(r1_WIDTH);
            r73_xn$assignunicode$7Hrq('K');
            r73_include(r1_capitalMarks);
            r73_TURN = r1_CAP * 0.95;
            r73_rturn = r1_XH * 0.1;
            r73_right = r1_RIGHTSB - r1_O;
            r73_fine = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.25);
            r73_xn$putshapes$9Jrj(r73_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['set-width'](0, r1_STROKE)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r73_xn$putshapes$9Jrj(r73_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r73_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.18) * r73_TURN, r1_SB + r1_STROKE, r1_CAP * 0.35)['set-width'](0, r73_fine)['to-outline']());
            r73_xn$putshapes$9Jrj(r73_xn$createstroke$7Hrq()['start-from'](r73_right - r1_HALFSTROKE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['curve-to'](r73_right - r1_HALFSTROKE, r73_rturn + 0.2 * (r1_XH - r73_rturn), r1_MIDDLE, r1_CAPMIDDLE + r1_HALFSTROKE)['set-width'](r73_fine / 2, r73_fine / 2)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('B', function _r1_t56() {
            var r76_currentGlyph, r76_xn$setwidth$9Jrj, r76_xn$assignunicode$7Hrq, r76_xn$startfrom$1aao, r76_xn$lineto$5sIl, r76_xn$curveto$1aao, r76_xn$cubicto$1aao, r76_xn$putshapes$9Jrj, r76_xn$reverselast$3qIs, r76_include, r76_xn$createstroke$7Hrq, r76_xn$setanchor$9Jrj, r76_bowl, r76_tkappa, r76_bkappa, r76_turntop, r76_turnbottom, r76_topbowl, r76_bottombowl, r76_leftbar, _r76_t0, _r76_t1;
            _r76_t0 = this;
            r76_currentGlyph = _r76_t0;
            r76_xn$setwidth$9Jrj = _r76_t0['set-width']['bind'](_r76_t0);
            r76_xn$assignunicode$7Hrq = function _r76_t1(r77_code) {
                var r77_code;
                r76_currentGlyph['assign-unicode'](r77_code);
                return r1_unicodeGlyphs[[r76_currentGlyph['unicode'][r76_currentGlyph['unicode']['length'] - 1]]] = r76_currentGlyph;
            };
            r76_xn$startfrom$1aao = _r76_t0['start-from']['bind'](_r76_t0);
            r76_xn$lineto$5sIl = _r76_t0['line-to']['bind'](_r76_t0);
            r76_xn$curveto$1aao = _r76_t0['curve-to']['bind'](_r76_t0);
            r76_xn$cubicto$1aao = _r76_t0['cubic-to']['bind'](_r76_t0);
            r76_xn$putshapes$9Jrj = _r76_t0['put-shapes']['bind'](_r76_t0);
            r76_xn$reverselast$3qIs = _r76_t0['reverse-last']['bind'](_r76_t0);
            r76_include = _r76_t0['include']['bind'](_r76_t0);
            r76_xn$createstroke$7Hrq = _r76_t0['create-stroke']['bind'](_r76_t0);
            r76_xn$setanchor$9Jrj = _r76_t0['set-anchor']['bind'](_r76_t0);
            _r76_t0['gizmo'] = r1_globalTransform;
            _r76_t0['set-width'](r1_WIDTH);
            r76_xn$setwidth$9Jrj(r1_WIDTH);
            r76_xn$assignunicode$7Hrq('B');
            r76_include(r1_capitalMarks);
            r76_bowl = 451;
            r76_tkappa = r1_COKAPPA - 0.22;
            r76_bkappa = r1_COKAPPA - 0.2;
            r76_turntop = (r1_CAP + (r76_bowl - r1_STROKE)) / 2;
            r76_turnbottom = r76_bowl / 2;
            r76_topbowl = r76_xn$createstroke$7Hrq();
            r76_topbowl['start-from'](r1_SB, r1_CAP)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r1_SB * 0.5 - r76_turnbottom, r1_CAP)['cubic-to'](r1_RIGHTSB - r1_SB * 0.5 - r76_tkappa * r76_turnbottom, r1_CAP, r1_RIGHTSB - r1_SB * 0.5, r76_turntop + (r1_CAP - r76_turntop) * r1_KAPPA, r1_RIGHTSB - r1_SB * 0.5, r76_turntop)['cubic-to'](r1_RIGHTSB - r1_SB * 0.5, r76_turntop + r1_KAPPA * (r76_bowl - r1_STROKE - r76_turntop), r1_RIGHTSB - r1_SB * 0.5 - r76_tkappa * r76_turnbottom, r76_bowl - r1_STROKE, r1_RIGHTSB - r1_SB * 0.5 - r76_turnbottom, r76_bowl - r1_STROKE)['line-to'](r1_SB, r76_bowl - r1_STROKE)['heads-to'](r1_LEFTWARD);
            r76_bottombowl = r76_xn$createstroke$7Hrq();
            r76_bottombowl['start-from'](r1_SB, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r76_turnbottom, 0)['cubic-to'](r1_RIGHTSB - r76_bkappa * r76_turnbottom, 0, r1_RIGHTSB, r76_turnbottom * r1_KAPPA, r1_RIGHTSB, r76_turnbottom)['cubic-to'](r1_RIGHTSB, r76_turnbottom + r1_KAPPA * (r76_bowl - r76_turnbottom), r1_RIGHTSB - r76_bkappa * r76_turnbottom, r76_bowl, r1_RIGHTSB - r76_turnbottom, r76_bowl)['line-to'](r1_SB, r76_bowl)['heads-to'](r1_LEFTWARD);
            r76_leftbar = r76_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD);
            r76_xn$putshapes$9Jrj(r76_topbowl['to-outline'](0, r1_STROKE));
            r76_xn$putshapes$9Jrj(r76_bottombowl['to-outline'](r1_STROKE, 0));
            r76_xn$putshapes$9Jrj(r76_leftbar['to-outline'](0, r1_STROKE));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('D', function _r1_t57() {
            var r79_currentGlyph, r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, r79_include, r79_xn$createstroke$7Hrq, r79_xn$setanchor$9Jrj, r79_dsmooth, r79_bsmooth, r79_leftbar, r79_bowl, _r79_t0, _r79_t1;
            _r79_t0 = this;
            r79_currentGlyph = _r79_t0;
            r79_xn$setwidth$9Jrj = _r79_t0['set-width']['bind'](_r79_t0);
            r79_xn$assignunicode$7Hrq = function _r79_t1(r80_code) {
                var r80_code;
                r79_currentGlyph['assign-unicode'](r80_code);
                return r1_unicodeGlyphs[[r79_currentGlyph['unicode'][r79_currentGlyph['unicode']['length'] - 1]]] = r79_currentGlyph;
            };
            r79_xn$startfrom$1aao = _r79_t0['start-from']['bind'](_r79_t0);
            r79_xn$lineto$5sIl = _r79_t0['line-to']['bind'](_r79_t0);
            r79_xn$curveto$1aao = _r79_t0['curve-to']['bind'](_r79_t0);
            r79_xn$cubicto$1aao = _r79_t0['cubic-to']['bind'](_r79_t0);
            r79_xn$putshapes$9Jrj = _r79_t0['put-shapes']['bind'](_r79_t0);
            r79_xn$reverselast$3qIs = _r79_t0['reverse-last']['bind'](_r79_t0);
            r79_include = _r79_t0['include']['bind'](_r79_t0);
            r79_xn$createstroke$7Hrq = _r79_t0['create-stroke']['bind'](_r79_t0);
            r79_xn$setanchor$9Jrj = _r79_t0['set-anchor']['bind'](_r79_t0);
            _r79_t0['gizmo'] = r1_globalTransform;
            _r79_t0['set-width'](r1_WIDTH);
            r79_xn$setwidth$9Jrj(r1_WIDTH);
            r79_xn$assignunicode$7Hrq('D');
            r79_include(r1_capitalMarks);
            r79_dsmooth = r1_SMOOTH * 1.35;
            r79_bsmooth = r1_SMOOTH * 1.1;
            r79_leftbar = r79_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD);
            r79_bowl = r79_xn$createstroke$7Hrq();
            r79_bowl['start-from'](r1_SB, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r79_bsmooth, 0)['cubic-to'](r1_RIGHTSB - r1_BKAPPA * r79_bsmooth, 0, r1_RIGHTSB, r1_COBKAPPA * r79_dsmooth, r1_RIGHTSB, r79_dsmooth)['line-to'](r1_RIGHTSB, r1_CAP - r79_dsmooth)['cubic-to'](r1_RIGHTSB, r1_CAP - r1_COBKAPPA * r79_dsmooth, r1_RIGHTSB - r1_BKAPPA * r79_bsmooth, r1_CAP, r1_RIGHTSB - r79_bsmooth, r1_CAP)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_LEFTWARD);
            r79_xn$putshapes$9Jrj(r79_bowl['to-outline'](r1_STROKE, 0));
            r79_xn$putshapes$9Jrj(r79_leftbar['to-outline'](0, r1_STROKE));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('P', function _r1_t58() {
            var r82_currentGlyph, r82_xn$setwidth$9Jrj, r82_xn$assignunicode$7Hrq, r82_xn$startfrom$1aao, r82_xn$lineto$5sIl, r82_xn$curveto$1aao, r82_xn$cubicto$1aao, r82_xn$putshapes$9Jrj, r82_xn$reverselast$3qIs, r82_include, r82_xn$createstroke$7Hrq, r82_xn$setanchor$9Jrj, r82_bowl, r82_bkappa, r82_turntop, r82_turnbottom, r82_topbowl, r82_leftbar, _r82_t0, _r82_t1;
            _r82_t0 = this;
            r82_currentGlyph = _r82_t0;
            r82_xn$setwidth$9Jrj = _r82_t0['set-width']['bind'](_r82_t0);
            r82_xn$assignunicode$7Hrq = function _r82_t1(r83_code) {
                var r83_code;
                r82_currentGlyph['assign-unicode'](r83_code);
                return r1_unicodeGlyphs[[r82_currentGlyph['unicode'][r82_currentGlyph['unicode']['length'] - 1]]] = r82_currentGlyph;
            };
            r82_xn$startfrom$1aao = _r82_t0['start-from']['bind'](_r82_t0);
            r82_xn$lineto$5sIl = _r82_t0['line-to']['bind'](_r82_t0);
            r82_xn$curveto$1aao = _r82_t0['curve-to']['bind'](_r82_t0);
            r82_xn$cubicto$1aao = _r82_t0['cubic-to']['bind'](_r82_t0);
            r82_xn$putshapes$9Jrj = _r82_t0['put-shapes']['bind'](_r82_t0);
            r82_xn$reverselast$3qIs = _r82_t0['reverse-last']['bind'](_r82_t0);
            r82_include = _r82_t0['include']['bind'](_r82_t0);
            r82_xn$createstroke$7Hrq = _r82_t0['create-stroke']['bind'](_r82_t0);
            r82_xn$setanchor$9Jrj = _r82_t0['set-anchor']['bind'](_r82_t0);
            _r82_t0['gizmo'] = r1_globalTransform;
            _r82_t0['set-width'](r1_WIDTH);
            r82_xn$setwidth$9Jrj(r1_WIDTH);
            r82_xn$assignunicode$7Hrq('P');
            r82_include(r1_capitalMarks);
            r82_bowl = r1_CAPMIDDLE;
            r82_bkappa = r1_COKAPPA - 0.2;
            r82_turntop = (r1_CAP + (r82_bowl - r1_HALFSTROKE)) / 2;
            r82_turnbottom = r82_bowl / 2;
            r82_topbowl = r82_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.25, r1_CAP)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r82_turnbottom, r1_CAP)['arc-hv-to'](r1_RIGHTSB - r1_O, r82_turntop)['arc-vh-to'](r1_RIGHTSB - r82_turnbottom, r82_bowl - r1_HALFSTROKE)['line-to'](r1_SB * 1.25, r82_bowl - r1_HALFSTROKE)['heads-to'](r1_LEFTWARD);
            r82_leftbar = r82_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.25, 0)['heads-to'](r1_UPWARD)['line-to'](r1_SB * 1.25, r1_CAP)['heads-to'](r1_UPWARD);
            r82_xn$putshapes$9Jrj(r82_topbowl['to-outline'](0, r1_STROKE));
            r82_xn$putshapes$9Jrj(r82_leftbar['to-outline'](0, r1_STROKE));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('R', function _r1_t59() {
            var r85_currentGlyph, r85_xn$setwidth$9Jrj, r85_xn$assignunicode$7Hrq, r85_xn$startfrom$1aao, r85_xn$lineto$5sIl, r85_xn$curveto$1aao, r85_xn$cubicto$1aao, r85_xn$putshapes$9Jrj, r85_xn$reverselast$3qIs, r85_include, r85_xn$createstroke$7Hrq, r85_xn$setanchor$9Jrj, r85_TURN, r85_right, _r85_t0, _r85_t1;
            _r85_t0 = this;
            r85_currentGlyph = _r85_t0;
            r85_xn$setwidth$9Jrj = _r85_t0['set-width']['bind'](_r85_t0);
            r85_xn$assignunicode$7Hrq = function _r85_t1(r86_code) {
                var r86_code;
                r85_currentGlyph['assign-unicode'](r86_code);
                return r1_unicodeGlyphs[[r85_currentGlyph['unicode'][r85_currentGlyph['unicode']['length'] - 1]]] = r85_currentGlyph;
            };
            r85_xn$startfrom$1aao = _r85_t0['start-from']['bind'](_r85_t0);
            r85_xn$lineto$5sIl = _r85_t0['line-to']['bind'](_r85_t0);
            r85_xn$curveto$1aao = _r85_t0['curve-to']['bind'](_r85_t0);
            r85_xn$cubicto$1aao = _r85_t0['cubic-to']['bind'](_r85_t0);
            r85_xn$putshapes$9Jrj = _r85_t0['put-shapes']['bind'](_r85_t0);
            r85_xn$reverselast$3qIs = _r85_t0['reverse-last']['bind'](_r85_t0);
            r85_include = _r85_t0['include']['bind'](_r85_t0);
            r85_xn$createstroke$7Hrq = _r85_t0['create-stroke']['bind'](_r85_t0);
            r85_xn$setanchor$9Jrj = _r85_t0['set-anchor']['bind'](_r85_t0);
            _r85_t0['gizmo'] = r1_globalTransform;
            _r85_t0['set-width'](r1_WIDTH);
            r85_xn$setwidth$9Jrj(r1_WIDTH);
            r85_xn$assignunicode$7Hrq('R');
            r85_include(r1_glyphs['P'], true);
            r85_TURN = r1_XH * 0.1;
            r85_right = r1_RIGHTSB - r1_O;
            r85_xn$putshapes$9Jrj(r85_xn$createstroke$7Hrq()['start-from'](r85_right - r1_HALFSTROKE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['curve-to'](r85_right - r1_HALFSTROKE, r85_TURN + 0.2 * (r1_XH - r85_TURN), r1_MIDDLE, r1_CAPMIDDLE)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('C', function _r1_t60() {
            var r88_currentGlyph, r88_xn$setwidth$9Jrj, r88_xn$assignunicode$7Hrq, r88_xn$startfrom$1aao, r88_xn$lineto$5sIl, r88_xn$curveto$1aao, r88_xn$cubicto$1aao, r88_xn$putshapes$9Jrj, r88_xn$reverselast$3qIs, r88_include, r88_xn$createstroke$7Hrq, r88_xn$setanchor$9Jrj, r88_outline, _r88_t0, _r88_t1;
            _r88_t0 = this;
            r88_currentGlyph = _r88_t0;
            r88_xn$setwidth$9Jrj = _r88_t0['set-width']['bind'](_r88_t0);
            r88_xn$assignunicode$7Hrq = function _r88_t1(r89_code) {
                var r89_code;
                r88_currentGlyph['assign-unicode'](r89_code);
                return r1_unicodeGlyphs[[r88_currentGlyph['unicode'][r88_currentGlyph['unicode']['length'] - 1]]] = r88_currentGlyph;
            };
            r88_xn$startfrom$1aao = _r88_t0['start-from']['bind'](_r88_t0);
            r88_xn$lineto$5sIl = _r88_t0['line-to']['bind'](_r88_t0);
            r88_xn$curveto$1aao = _r88_t0['curve-to']['bind'](_r88_t0);
            r88_xn$cubicto$1aao = _r88_t0['cubic-to']['bind'](_r88_t0);
            r88_xn$putshapes$9Jrj = _r88_t0['put-shapes']['bind'](_r88_t0);
            r88_xn$reverselast$3qIs = _r88_t0['reverse-last']['bind'](_r88_t0);
            r88_include = _r88_t0['include']['bind'](_r88_t0);
            r88_xn$createstroke$7Hrq = _r88_t0['create-stroke']['bind'](_r88_t0);
            r88_xn$setanchor$9Jrj = _r88_t0['set-anchor']['bind'](_r88_t0);
            _r88_t0['gizmo'] = r1_globalTransform;
            _r88_t0['set-width'](r1_WIDTH);
            r88_xn$setwidth$9Jrj(r1_WIDTH);
            r88_xn$assignunicode$7Hrq('C');
            r88_include(r1_capitalMarks);
            r88_outline = r88_xn$createstroke$7Hrq();
            r88_outline['start-from'](r1_RIGHTSB - r1_OXHOOK, r1_CAP - r1_HOOK)['curve-to'](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para['sb']), r1_CAPO, r1_MIDDLE, r1_CAPO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB, r1_CAP - r1_SMOOTHA)['line-to'](r1_SB, r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['curve-to'](r1_MIDDLE + r1_ITALICCORS + r1_KAPPA_HOOK * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK, r1_HOOK);
            r88_xn$putshapes$9Jrj(r88_outline['to-outline'](r1_STROKE, 0));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('G', function _r1_t61() {
            var r91_currentGlyph, r91_xn$setwidth$9Jrj, r91_xn$assignunicode$7Hrq, r91_xn$startfrom$1aao, r91_xn$lineto$5sIl, r91_xn$curveto$1aao, r91_xn$cubicto$1aao, r91_xn$putshapes$9Jrj, r91_xn$reverselast$3qIs, r91_include, r91_xn$createstroke$7Hrq, r91_xn$setanchor$9Jrj, r91_outline, r91_bar, _r91_t0, _r91_t1;
            _r91_t0 = this;
            r91_currentGlyph = _r91_t0;
            r91_xn$setwidth$9Jrj = _r91_t0['set-width']['bind'](_r91_t0);
            r91_xn$assignunicode$7Hrq = function _r91_t1(r92_code) {
                var r92_code;
                r91_currentGlyph['assign-unicode'](r92_code);
                return r1_unicodeGlyphs[[r91_currentGlyph['unicode'][r91_currentGlyph['unicode']['length'] - 1]]] = r91_currentGlyph;
            };
            r91_xn$startfrom$1aao = _r91_t0['start-from']['bind'](_r91_t0);
            r91_xn$lineto$5sIl = _r91_t0['line-to']['bind'](_r91_t0);
            r91_xn$curveto$1aao = _r91_t0['curve-to']['bind'](_r91_t0);
            r91_xn$cubicto$1aao = _r91_t0['cubic-to']['bind'](_r91_t0);
            r91_xn$putshapes$9Jrj = _r91_t0['put-shapes']['bind'](_r91_t0);
            r91_xn$reverselast$3qIs = _r91_t0['reverse-last']['bind'](_r91_t0);
            r91_include = _r91_t0['include']['bind'](_r91_t0);
            r91_xn$createstroke$7Hrq = _r91_t0['create-stroke']['bind'](_r91_t0);
            r91_xn$setanchor$9Jrj = _r91_t0['set-anchor']['bind'](_r91_t0);
            _r91_t0['gizmo'] = r1_globalTransform;
            _r91_t0['set-width'](r1_WIDTH);
            r91_xn$setwidth$9Jrj(r1_WIDTH);
            r91_xn$assignunicode$7Hrq('G');
            r91_include(r1_capitalMarks);
            r91_outline = r91_xn$createstroke$7Hrq();
            r91_outline['start-from'](r1_RIGHTSB - r1_OXHOOK, r1_CAP - r1_HOOK)['curve-to'](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para['sb']), r1_CAPO, r1_MIDDLE, r1_CAPO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB, r1_CAP - r1_SMOOTHA)['line-to'](r1_SB, r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB, r1_SMOOTHA)['line-to'](r1_RIGHTSB, r1_CAP / 2 + r1_STROKE / 2)['heads-to'](r1_UPWARD);
            r91_xn$putshapes$9Jrj(r91_outline['to-outline'](r1_STROKE, 0));
            r91_bar = r91_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_CAP / 2 + r1_STROKE / 2)['line-to'](r1_RIGHTSB, r1_CAP / 2 + r1_STROKE / 2)['heads-to'](r1_RIGHTWARD);
            r91_xn$putshapes$9Jrj(r91_bar['to-outline'](0, r1_STROKE));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('O', function _r1_t62() {
            var r94_currentGlyph, r94_xn$setwidth$9Jrj, r94_xn$assignunicode$7Hrq, r94_xn$startfrom$1aao, r94_xn$lineto$5sIl, r94_xn$curveto$1aao, r94_xn$cubicto$1aao, r94_xn$putshapes$9Jrj, r94_xn$reverselast$3qIs, r94_include, r94_xn$createstroke$7Hrq, r94_xn$setanchor$9Jrj, r94_outline, _r94_t0, _r94_t1;
            _r94_t0 = this;
            r94_currentGlyph = _r94_t0;
            r94_xn$setwidth$9Jrj = _r94_t0['set-width']['bind'](_r94_t0);
            r94_xn$assignunicode$7Hrq = function _r94_t1(r95_code) {
                var r95_code;
                r94_currentGlyph['assign-unicode'](r95_code);
                return r1_unicodeGlyphs[[r94_currentGlyph['unicode'][r94_currentGlyph['unicode']['length'] - 1]]] = r94_currentGlyph;
            };
            r94_xn$startfrom$1aao = _r94_t0['start-from']['bind'](_r94_t0);
            r94_xn$lineto$5sIl = _r94_t0['line-to']['bind'](_r94_t0);
            r94_xn$curveto$1aao = _r94_t0['curve-to']['bind'](_r94_t0);
            r94_xn$cubicto$1aao = _r94_t0['cubic-to']['bind'](_r94_t0);
            r94_xn$putshapes$9Jrj = _r94_t0['put-shapes']['bind'](_r94_t0);
            r94_xn$reverselast$3qIs = _r94_t0['reverse-last']['bind'](_r94_t0);
            r94_include = _r94_t0['include']['bind'](_r94_t0);
            r94_xn$createstroke$7Hrq = _r94_t0['create-stroke']['bind'](_r94_t0);
            r94_xn$setanchor$9Jrj = _r94_t0['set-anchor']['bind'](_r94_t0);
            _r94_t0['gizmo'] = r1_globalTransform;
            _r94_t0['set-width'](r1_WIDTH);
            r94_xn$setwidth$9Jrj(r1_WIDTH);
            r94_xn$assignunicode$7Hrq('O');
            r94_include(r1_capitalMarks);
            r94_outline = r94_xn$createstroke$7Hrq();
            r94_outline['start-from'](r1_MIDDLE, r1_CAPO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB, r1_CAP - r1_SMOOTHA)['line-to'](r1_SB, r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB, r1_SMOOTHA)['line-to'](r1_RIGHTSB, r1_CAP - r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_CAPO)['heads-to'](r1_LEFTWARD);
            r94_xn$putshapes$9Jrj(r94_outline['to-outline'](r1_STROKE, 0));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('Q', function _r1_t63() {
            var r97_currentGlyph, r97_xn$setwidth$9Jrj, r97_xn$assignunicode$7Hrq, r97_xn$startfrom$1aao, r97_xn$lineto$5sIl, r97_xn$curveto$1aao, r97_xn$cubicto$1aao, r97_xn$putshapes$9Jrj, r97_xn$reverselast$3qIs, r97_include, r97_xn$createstroke$7Hrq, r97_xn$setanchor$9Jrj, _r97_t0, _r97_t1;
            _r97_t0 = this;
            r97_currentGlyph = _r97_t0;
            r97_xn$setwidth$9Jrj = _r97_t0['set-width']['bind'](_r97_t0);
            r97_xn$assignunicode$7Hrq = function _r97_t1(r98_code) {
                var r98_code;
                r97_currentGlyph['assign-unicode'](r98_code);
                return r1_unicodeGlyphs[[r97_currentGlyph['unicode'][r97_currentGlyph['unicode']['length'] - 1]]] = r97_currentGlyph;
            };
            r97_xn$startfrom$1aao = _r97_t0['start-from']['bind'](_r97_t0);
            r97_xn$lineto$5sIl = _r97_t0['line-to']['bind'](_r97_t0);
            r97_xn$curveto$1aao = _r97_t0['curve-to']['bind'](_r97_t0);
            r97_xn$cubicto$1aao = _r97_t0['cubic-to']['bind'](_r97_t0);
            r97_xn$putshapes$9Jrj = _r97_t0['put-shapes']['bind'](_r97_t0);
            r97_xn$reverselast$3qIs = _r97_t0['reverse-last']['bind'](_r97_t0);
            r97_include = _r97_t0['include']['bind'](_r97_t0);
            r97_xn$createstroke$7Hrq = _r97_t0['create-stroke']['bind'](_r97_t0);
            r97_xn$setanchor$9Jrj = _r97_t0['set-anchor']['bind'](_r97_t0);
            _r97_t0['gizmo'] = r1_globalTransform;
            _r97_t0['set-width'](r1_WIDTH);
            r97_xn$setwidth$9Jrj(r1_WIDTH);
            r97_xn$assignunicode$7Hrq('Q');
            r97_include(r1_glyphs['O'], true);
            r97_xn$startfrom$1aao(r1_MIDDLE, 0);
            r97_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2, -r1_CAP * 0.2);
            r97_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2 + r1_STROKE, -r1_CAP * 0.2);
            r97_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE, 0);
            r97_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE * (1 - 0.5 / 3), r1_STROKE * 0.5);
            r97_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('U', function _r1_t64() {
            var r100_currentGlyph, r100_xn$setwidth$9Jrj, r100_xn$assignunicode$7Hrq, r100_xn$startfrom$1aao, r100_xn$lineto$5sIl, r100_xn$curveto$1aao, r100_xn$cubicto$1aao, r100_xn$putshapes$9Jrj, r100_xn$reverselast$3qIs, r100_include, r100_xn$createstroke$7Hrq, r100_xn$setanchor$9Jrj, r100_outline, _r100_t0, _r100_t1;
            _r100_t0 = this;
            r100_currentGlyph = _r100_t0;
            r100_xn$setwidth$9Jrj = _r100_t0['set-width']['bind'](_r100_t0);
            r100_xn$assignunicode$7Hrq = function _r100_t1(r101_code) {
                var r101_code;
                r100_currentGlyph['assign-unicode'](r101_code);
                return r1_unicodeGlyphs[[r100_currentGlyph['unicode'][r100_currentGlyph['unicode']['length'] - 1]]] = r100_currentGlyph;
            };
            r100_xn$startfrom$1aao = _r100_t0['start-from']['bind'](_r100_t0);
            r100_xn$lineto$5sIl = _r100_t0['line-to']['bind'](_r100_t0);
            r100_xn$curveto$1aao = _r100_t0['curve-to']['bind'](_r100_t0);
            r100_xn$cubicto$1aao = _r100_t0['cubic-to']['bind'](_r100_t0);
            r100_xn$putshapes$9Jrj = _r100_t0['put-shapes']['bind'](_r100_t0);
            r100_xn$reverselast$3qIs = _r100_t0['reverse-last']['bind'](_r100_t0);
            r100_include = _r100_t0['include']['bind'](_r100_t0);
            r100_xn$createstroke$7Hrq = _r100_t0['create-stroke']['bind'](_r100_t0);
            r100_xn$setanchor$9Jrj = _r100_t0['set-anchor']['bind'](_r100_t0);
            _r100_t0['gizmo'] = r1_globalTransform;
            _r100_t0['set-width'](r1_WIDTH);
            r100_xn$setwidth$9Jrj(r1_WIDTH);
            r100_xn$assignunicode$7Hrq('U');
            r100_include(r1_capitalMarks);
            r100_outline = r100_xn$createstroke$7Hrq();
            r100_outline['start-from'](r1_SB, r1_CAP)['heads-to'](r1_DOWNWARD)['line-to'](r1_SB, r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB, r1_SMOOTHA)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_UPWARD);
            r100_xn$putshapes$9Jrj(r100_outline['to-outline'](r1_STROKE, 0));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('F', function _r1_t65() {
            var r103_currentGlyph, r103_xn$setwidth$9Jrj, r103_xn$assignunicode$7Hrq, r103_xn$startfrom$1aao, r103_xn$lineto$5sIl, r103_xn$curveto$1aao, r103_xn$cubicto$1aao, r103_xn$putshapes$9Jrj, r103_xn$reverselast$3qIs, r103_include, r103_xn$createstroke$7Hrq, r103_xn$setanchor$9Jrj, _r103_t0, _r103_t1;
            _r103_t0 = this;
            r103_currentGlyph = _r103_t0;
            r103_xn$setwidth$9Jrj = _r103_t0['set-width']['bind'](_r103_t0);
            r103_xn$assignunicode$7Hrq = function _r103_t1(r104_code) {
                var r104_code;
                r103_currentGlyph['assign-unicode'](r104_code);
                return r1_unicodeGlyphs[[r103_currentGlyph['unicode'][r103_currentGlyph['unicode']['length'] - 1]]] = r103_currentGlyph;
            };
            r103_xn$startfrom$1aao = _r103_t0['start-from']['bind'](_r103_t0);
            r103_xn$lineto$5sIl = _r103_t0['line-to']['bind'](_r103_t0);
            r103_xn$curveto$1aao = _r103_t0['curve-to']['bind'](_r103_t0);
            r103_xn$cubicto$1aao = _r103_t0['cubic-to']['bind'](_r103_t0);
            r103_xn$putshapes$9Jrj = _r103_t0['put-shapes']['bind'](_r103_t0);
            r103_xn$reverselast$3qIs = _r103_t0['reverse-last']['bind'](_r103_t0);
            r103_include = _r103_t0['include']['bind'](_r103_t0);
            r103_xn$createstroke$7Hrq = _r103_t0['create-stroke']['bind'](_r103_t0);
            r103_xn$setanchor$9Jrj = _r103_t0['set-anchor']['bind'](_r103_t0);
            _r103_t0['gizmo'] = r1_globalTransform;
            _r103_t0['set-width'](r1_WIDTH);
            r103_xn$setwidth$9Jrj(r1_WIDTH);
            r103_xn$assignunicode$7Hrq('F');
            r103_include(r1_capitalMarks);
            r103_xn$putshapes$9Jrj(r103_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB * 1.5, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r103_xn$putshapes$9Jrj(r103_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, r1_CAP)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r103_xn$putshapes$9Jrj(r103_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, r1_CAP * 0.54)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r1_HALFSTROKE, r1_CAP * 0.54)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('E', function _r1_t66() {
            var r106_currentGlyph, r106_xn$setwidth$9Jrj, r106_xn$assignunicode$7Hrq, r106_xn$startfrom$1aao, r106_xn$lineto$5sIl, r106_xn$curveto$1aao, r106_xn$cubicto$1aao, r106_xn$putshapes$9Jrj, r106_xn$reverselast$3qIs, r106_include, r106_xn$createstroke$7Hrq, r106_xn$setanchor$9Jrj, _r106_t0, _r106_t1;
            _r106_t0 = this;
            r106_currentGlyph = _r106_t0;
            r106_xn$setwidth$9Jrj = _r106_t0['set-width']['bind'](_r106_t0);
            r106_xn$assignunicode$7Hrq = function _r106_t1(r107_code) {
                var r107_code;
                r106_currentGlyph['assign-unicode'](r107_code);
                return r1_unicodeGlyphs[[r106_currentGlyph['unicode'][r106_currentGlyph['unicode']['length'] - 1]]] = r106_currentGlyph;
            };
            r106_xn$startfrom$1aao = _r106_t0['start-from']['bind'](_r106_t0);
            r106_xn$lineto$5sIl = _r106_t0['line-to']['bind'](_r106_t0);
            r106_xn$curveto$1aao = _r106_t0['curve-to']['bind'](_r106_t0);
            r106_xn$cubicto$1aao = _r106_t0['cubic-to']['bind'](_r106_t0);
            r106_xn$putshapes$9Jrj = _r106_t0['put-shapes']['bind'](_r106_t0);
            r106_xn$reverselast$3qIs = _r106_t0['reverse-last']['bind'](_r106_t0);
            r106_include = _r106_t0['include']['bind'](_r106_t0);
            r106_xn$createstroke$7Hrq = _r106_t0['create-stroke']['bind'](_r106_t0);
            r106_xn$setanchor$9Jrj = _r106_t0['set-anchor']['bind'](_r106_t0);
            _r106_t0['gizmo'] = r1_globalTransform;
            _r106_t0['set-width'](r1_WIDTH);
            r106_xn$setwidth$9Jrj(r1_WIDTH);
            r106_xn$assignunicode$7Hrq('E');
            r106_include(r1_glyphs['F'], true);
            r106_xn$putshapes$9Jrj(r106_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, 0)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('H', function _r1_t67() {
            var r109_currentGlyph, r109_xn$setwidth$9Jrj, r109_xn$assignunicode$7Hrq, r109_xn$startfrom$1aao, r109_xn$lineto$5sIl, r109_xn$curveto$1aao, r109_xn$cubicto$1aao, r109_xn$putshapes$9Jrj, r109_xn$reverselast$3qIs, r109_include, r109_xn$createstroke$7Hrq, r109_xn$setanchor$9Jrj, _r109_t0, _r109_t1;
            _r109_t0 = this;
            r109_currentGlyph = _r109_t0;
            r109_xn$setwidth$9Jrj = _r109_t0['set-width']['bind'](_r109_t0);
            r109_xn$assignunicode$7Hrq = function _r109_t1(r110_code) {
                var r110_code;
                r109_currentGlyph['assign-unicode'](r110_code);
                return r1_unicodeGlyphs[[r109_currentGlyph['unicode'][r109_currentGlyph['unicode']['length'] - 1]]] = r109_currentGlyph;
            };
            r109_xn$startfrom$1aao = _r109_t0['start-from']['bind'](_r109_t0);
            r109_xn$lineto$5sIl = _r109_t0['line-to']['bind'](_r109_t0);
            r109_xn$curveto$1aao = _r109_t0['curve-to']['bind'](_r109_t0);
            r109_xn$cubicto$1aao = _r109_t0['cubic-to']['bind'](_r109_t0);
            r109_xn$putshapes$9Jrj = _r109_t0['put-shapes']['bind'](_r109_t0);
            r109_xn$reverselast$3qIs = _r109_t0['reverse-last']['bind'](_r109_t0);
            r109_include = _r109_t0['include']['bind'](_r109_t0);
            r109_xn$createstroke$7Hrq = _r109_t0['create-stroke']['bind'](_r109_t0);
            r109_xn$setanchor$9Jrj = _r109_t0['set-anchor']['bind'](_r109_t0);
            _r109_t0['gizmo'] = r1_globalTransform;
            _r109_t0['set-width'](r1_WIDTH);
            r109_xn$setwidth$9Jrj(r1_WIDTH);
            r109_xn$assignunicode$7Hrq('H');
            r109_include(r1_capitalMarks);
            r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP / 2)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, r1_CAP / 2)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('L', function _r1_t68() {
            var r112_currentGlyph, r112_xn$setwidth$9Jrj, r112_xn$assignunicode$7Hrq, r112_xn$startfrom$1aao, r112_xn$lineto$5sIl, r112_xn$curveto$1aao, r112_xn$cubicto$1aao, r112_xn$putshapes$9Jrj, r112_xn$reverselast$3qIs, r112_include, r112_xn$createstroke$7Hrq, r112_xn$setanchor$9Jrj, _r112_t0, _r112_t1;
            _r112_t0 = this;
            r112_currentGlyph = _r112_t0;
            r112_xn$setwidth$9Jrj = _r112_t0['set-width']['bind'](_r112_t0);
            r112_xn$assignunicode$7Hrq = function _r112_t1(r113_code) {
                var r113_code;
                r112_currentGlyph['assign-unicode'](r113_code);
                return r1_unicodeGlyphs[[r112_currentGlyph['unicode'][r112_currentGlyph['unicode']['length'] - 1]]] = r112_currentGlyph;
            };
            r112_xn$startfrom$1aao = _r112_t0['start-from']['bind'](_r112_t0);
            r112_xn$lineto$5sIl = _r112_t0['line-to']['bind'](_r112_t0);
            r112_xn$curveto$1aao = _r112_t0['curve-to']['bind'](_r112_t0);
            r112_xn$cubicto$1aao = _r112_t0['cubic-to']['bind'](_r112_t0);
            r112_xn$putshapes$9Jrj = _r112_t0['put-shapes']['bind'](_r112_t0);
            r112_xn$reverselast$3qIs = _r112_t0['reverse-last']['bind'](_r112_t0);
            r112_include = _r112_t0['include']['bind'](_r112_t0);
            r112_xn$createstroke$7Hrq = _r112_t0['create-stroke']['bind'](_r112_t0);
            r112_xn$setanchor$9Jrj = _r112_t0['set-anchor']['bind'](_r112_t0);
            _r112_t0['gizmo'] = r1_globalTransform;
            _r112_t0['set-width'](r1_WIDTH);
            r112_xn$setwidth$9Jrj(r1_WIDTH);
            r112_xn$assignunicode$7Hrq('L');
            r112_include(r1_capitalMarks);
            r112_xn$putshapes$9Jrj(r112_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, r1_CAP)['set-width'](r1_STROKE, 0)['heads-to'](r1_DOWNWARD)['line-to'](r1_SB * 1.5, 0)['heads-to'](r1_DOWNWARD)['to-outline']());
            r112_xn$putshapes$9Jrj(r112_xn$createstroke$7Hrq()['start-from'](r1_SB * 1.5, 0)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessI.straight', function _r1_t69() {
            var r115_currentGlyph, r115_xn$setwidth$9Jrj, r115_xn$assignunicode$7Hrq, r115_xn$startfrom$1aao, r115_xn$lineto$5sIl, r115_xn$curveto$1aao, r115_xn$cubicto$1aao, r115_xn$putshapes$9Jrj, r115_xn$reverselast$3qIs, r115_include, r115_xn$createstroke$7Hrq, r115_xn$setanchor$9Jrj, _r115_t0, _r115_t1;
            _r115_t0 = this;
            r115_currentGlyph = _r115_t0;
            r115_xn$setwidth$9Jrj = _r115_t0['set-width']['bind'](_r115_t0);
            r115_xn$assignunicode$7Hrq = function _r115_t1(r116_code) {
                var r116_code;
                r115_currentGlyph['assign-unicode'](r116_code);
                return r1_unicodeGlyphs[[r115_currentGlyph['unicode'][r115_currentGlyph['unicode']['length'] - 1]]] = r115_currentGlyph;
            };
            r115_xn$startfrom$1aao = _r115_t0['start-from']['bind'](_r115_t0);
            r115_xn$lineto$5sIl = _r115_t0['line-to']['bind'](_r115_t0);
            r115_xn$curveto$1aao = _r115_t0['curve-to']['bind'](_r115_t0);
            r115_xn$cubicto$1aao = _r115_t0['cubic-to']['bind'](_r115_t0);
            r115_xn$putshapes$9Jrj = _r115_t0['put-shapes']['bind'](_r115_t0);
            r115_xn$reverselast$3qIs = _r115_t0['reverse-last']['bind'](_r115_t0);
            r115_include = _r115_t0['include']['bind'](_r115_t0);
            r115_xn$createstroke$7Hrq = _r115_t0['create-stroke']['bind'](_r115_t0);
            r115_xn$setanchor$9Jrj = _r115_t0['set-anchor']['bind'](_r115_t0);
            _r115_t0['gizmo'] = r1_globalTransform;
            _r115_t0['set-width'](r1_WIDTH);
            r115_xn$putshapes$9Jrj(r115_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessI.symmetric', function _r1_t70() {
            var r118_currentGlyph, r118_xn$setwidth$9Jrj, r118_xn$assignunicode$7Hrq, r118_xn$startfrom$1aao, r118_xn$lineto$5sIl, r118_xn$curveto$1aao, r118_xn$cubicto$1aao, r118_xn$putshapes$9Jrj, r118_xn$reverselast$3qIs, r118_include, r118_xn$createstroke$7Hrq, r118_xn$setanchor$9Jrj, _r118_t0, _r118_t1;
            _r118_t0 = this;
            r118_currentGlyph = _r118_t0;
            r118_xn$setwidth$9Jrj = _r118_t0['set-width']['bind'](_r118_t0);
            r118_xn$assignunicode$7Hrq = function _r118_t1(r119_code) {
                var r119_code;
                r118_currentGlyph['assign-unicode'](r119_code);
                return r1_unicodeGlyphs[[r118_currentGlyph['unicode'][r118_currentGlyph['unicode']['length'] - 1]]] = r118_currentGlyph;
            };
            r118_xn$startfrom$1aao = _r118_t0['start-from']['bind'](_r118_t0);
            r118_xn$lineto$5sIl = _r118_t0['line-to']['bind'](_r118_t0);
            r118_xn$curveto$1aao = _r118_t0['curve-to']['bind'](_r118_t0);
            r118_xn$cubicto$1aao = _r118_t0['cubic-to']['bind'](_r118_t0);
            r118_xn$putshapes$9Jrj = _r118_t0['put-shapes']['bind'](_r118_t0);
            r118_xn$reverselast$3qIs = _r118_t0['reverse-last']['bind'](_r118_t0);
            r118_include = _r118_t0['include']['bind'](_r118_t0);
            r118_xn$createstroke$7Hrq = _r118_t0['create-stroke']['bind'](_r118_t0);
            r118_xn$setanchor$9Jrj = _r118_t0['set-anchor']['bind'](_r118_t0);
            _r118_t0['gizmo'] = r1_globalTransform;
            _r118_t0['set-width'](r1_WIDTH);
            r118_include(r1_glyphs['dotlessI.straight']);
            r118_xn$putshapes$9Jrj(r118_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r1_WIDTH * 0.26 - r1_STROKE * r1_globalTransform['yx'], r1_CAP)['set-width'](0, r1_STROKE)['line-to'](r1_MIDDLE + r1_WIDTH * 0.26 - r1_STROKE * r1_globalTransform['yx'], r1_CAP)['to-outline']());
            r118_xn$putshapes$9Jrj(r118_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r1_WIDTH * 0.26 + r1_STROKE * r1_globalTransform['yx'], 0)['set-width'](r1_STROKE, 0)['line-to'](r1_MIDDLE + r1_WIDTH * 0.26 + r1_STROKE * r1_globalTransform['yx'], 0)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('I', function _r1_t71() {
            var r121_currentGlyph, r121_xn$setwidth$9Jrj, r121_xn$assignunicode$7Hrq, r121_xn$startfrom$1aao, r121_xn$lineto$5sIl, r121_xn$curveto$1aao, r121_xn$cubicto$1aao, r121_xn$putshapes$9Jrj, r121_xn$reverselast$3qIs, r121_include, r121_xn$createstroke$7Hrq, r121_xn$setanchor$9Jrj, _r121_t0, _r121_t1;
            _r121_t0 = this;
            r121_currentGlyph = _r121_t0;
            r121_xn$setwidth$9Jrj = _r121_t0['set-width']['bind'](_r121_t0);
            r121_xn$assignunicode$7Hrq = function _r121_t1(r122_code) {
                var r122_code;
                r121_currentGlyph['assign-unicode'](r122_code);
                return r1_unicodeGlyphs[[r121_currentGlyph['unicode'][r121_currentGlyph['unicode']['length'] - 1]]] = r121_currentGlyph;
            };
            r121_xn$startfrom$1aao = _r121_t0['start-from']['bind'](_r121_t0);
            r121_xn$lineto$5sIl = _r121_t0['line-to']['bind'](_r121_t0);
            r121_xn$curveto$1aao = _r121_t0['curve-to']['bind'](_r121_t0);
            r121_xn$cubicto$1aao = _r121_t0['cubic-to']['bind'](_r121_t0);
            r121_xn$putshapes$9Jrj = _r121_t0['put-shapes']['bind'](_r121_t0);
            r121_xn$reverselast$3qIs = _r121_t0['reverse-last']['bind'](_r121_t0);
            r121_include = _r121_t0['include']['bind'](_r121_t0);
            r121_xn$createstroke$7Hrq = _r121_t0['create-stroke']['bind'](_r121_t0);
            r121_xn$setanchor$9Jrj = _r121_t0['set-anchor']['bind'](_r121_t0);
            _r121_t0['gizmo'] = r1_globalTransform;
            _r121_t0['set-width'](r1_WIDTH);
            r121_xn$setwidth$9Jrj(r1_WIDTH);
            r121_xn$assignunicode$7Hrq('I');
            r121_include(r1_capitalMarks);
            r121_include(r1_glyphs['dotlessI.symmetric']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('T', function _r1_t72() {
            var r124_currentGlyph, r124_xn$setwidth$9Jrj, r124_xn$assignunicode$7Hrq, r124_xn$startfrom$1aao, r124_xn$lineto$5sIl, r124_xn$curveto$1aao, r124_xn$cubicto$1aao, r124_xn$putshapes$9Jrj, r124_xn$reverselast$3qIs, r124_include, r124_xn$createstroke$7Hrq, r124_xn$setanchor$9Jrj, _r124_t0, _r124_t1;
            _r124_t0 = this;
            r124_currentGlyph = _r124_t0;
            r124_xn$setwidth$9Jrj = _r124_t0['set-width']['bind'](_r124_t0);
            r124_xn$assignunicode$7Hrq = function _r124_t1(r125_code) {
                var r125_code;
                r124_currentGlyph['assign-unicode'](r125_code);
                return r1_unicodeGlyphs[[r124_currentGlyph['unicode'][r124_currentGlyph['unicode']['length'] - 1]]] = r124_currentGlyph;
            };
            r124_xn$startfrom$1aao = _r124_t0['start-from']['bind'](_r124_t0);
            r124_xn$lineto$5sIl = _r124_t0['line-to']['bind'](_r124_t0);
            r124_xn$curveto$1aao = _r124_t0['curve-to']['bind'](_r124_t0);
            r124_xn$cubicto$1aao = _r124_t0['cubic-to']['bind'](_r124_t0);
            r124_xn$putshapes$9Jrj = _r124_t0['put-shapes']['bind'](_r124_t0);
            r124_xn$reverselast$3qIs = _r124_t0['reverse-last']['bind'](_r124_t0);
            r124_include = _r124_t0['include']['bind'](_r124_t0);
            r124_xn$createstroke$7Hrq = _r124_t0['create-stroke']['bind'](_r124_t0);
            r124_xn$setanchor$9Jrj = _r124_t0['set-anchor']['bind'](_r124_t0);
            _r124_t0['gizmo'] = r1_globalTransform;
            _r124_t0['set-width'](r1_WIDTH);
            r124_xn$setwidth$9Jrj(r1_WIDTH);
            r124_xn$assignunicode$7Hrq('T');
            r124_include(r1_capitalMarks);
            r124_xn$putshapes$9Jrj(r124_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r124_xn$putshapes$9Jrj(r124_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('Z', function _r1_t73() {
            var r127_currentGlyph, r127_xn$setwidth$9Jrj, r127_xn$assignunicode$7Hrq, r127_xn$startfrom$1aao, r127_xn$lineto$5sIl, r127_xn$curveto$1aao, r127_xn$cubicto$1aao, r127_xn$putshapes$9Jrj, r127_xn$reverselast$3qIs, r127_include, r127_xn$createstroke$7Hrq, r127_xn$setanchor$9Jrj, r127_cor, _r127_t0, _r127_t1;
            _r127_t0 = this;
            r127_currentGlyph = _r127_t0;
            r127_xn$setwidth$9Jrj = _r127_t0['set-width']['bind'](_r127_t0);
            r127_xn$assignunicode$7Hrq = function _r127_t1(r128_code) {
                var r128_code;
                r127_currentGlyph['assign-unicode'](r128_code);
                return r1_unicodeGlyphs[[r127_currentGlyph['unicode'][r127_currentGlyph['unicode']['length'] - 1]]] = r127_currentGlyph;
            };
            r127_xn$startfrom$1aao = _r127_t0['start-from']['bind'](_r127_t0);
            r127_xn$lineto$5sIl = _r127_t0['line-to']['bind'](_r127_t0);
            r127_xn$curveto$1aao = _r127_t0['curve-to']['bind'](_r127_t0);
            r127_xn$cubicto$1aao = _r127_t0['cubic-to']['bind'](_r127_t0);
            r127_xn$putshapes$9Jrj = _r127_t0['put-shapes']['bind'](_r127_t0);
            r127_xn$reverselast$3qIs = _r127_t0['reverse-last']['bind'](_r127_t0);
            r127_include = _r127_t0['include']['bind'](_r127_t0);
            r127_xn$createstroke$7Hrq = _r127_t0['create-stroke']['bind'](_r127_t0);
            r127_xn$setanchor$9Jrj = _r127_t0['set-anchor']['bind'](_r127_t0);
            _r127_t0['gizmo'] = r1_globalTransform;
            _r127_t0['set-width'](r1_WIDTH);
            r127_xn$setwidth$9Jrj(r1_WIDTH);
            r127_xn$assignunicode$7Hrq('Z');
            r127_include(r1_capitalMarks);
            r127_cor = 1.15;
            r127_xn$putshapes$9Jrj(r127_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r127_xn$putshapes$9Jrj(r127_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_RIGHTWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r127_xn$startfrom$1aao(r1_SB, r1_STROKE);
            r127_xn$lineto$5sIl(r1_SB + r1_STROKE * r127_cor, r1_STROKE);
            r127_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP - r1_STROKE);
            r127_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r127_cor, r1_CAP - r1_STROKE);
            r127_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('J.straight', function _r1_t74() {
            var r130_currentGlyph, r130_xn$setwidth$9Jrj, r130_xn$assignunicode$7Hrq, r130_xn$startfrom$1aao, r130_xn$lineto$5sIl, r130_xn$curveto$1aao, r130_xn$cubicto$1aao, r130_xn$putshapes$9Jrj, r130_xn$reverselast$3qIs, r130_include, r130_xn$createstroke$7Hrq, r130_xn$setanchor$9Jrj, r130_slope, r130_expand, r130_coexpand, r130_kappa, r130_smooth, r130_hookx, _r130_t0, _r130_t1;
            _r130_t0 = this;
            r130_currentGlyph = _r130_t0;
            r130_xn$setwidth$9Jrj = _r130_t0['set-width']['bind'](_r130_t0);
            r130_xn$assignunicode$7Hrq = function _r130_t1(r131_code) {
                var r131_code;
                r130_currentGlyph['assign-unicode'](r131_code);
                return r1_unicodeGlyphs[[r130_currentGlyph['unicode'][r130_currentGlyph['unicode']['length'] - 1]]] = r130_currentGlyph;
            };
            r130_xn$startfrom$1aao = _r130_t0['start-from']['bind'](_r130_t0);
            r130_xn$lineto$5sIl = _r130_t0['line-to']['bind'](_r130_t0);
            r130_xn$curveto$1aao = _r130_t0['curve-to']['bind'](_r130_t0);
            r130_xn$cubicto$1aao = _r130_t0['cubic-to']['bind'](_r130_t0);
            r130_xn$putshapes$9Jrj = _r130_t0['put-shapes']['bind'](_r130_t0);
            r130_xn$reverselast$3qIs = _r130_t0['reverse-last']['bind'](_r130_t0);
            r130_include = _r130_t0['include']['bind'](_r130_t0);
            r130_xn$createstroke$7Hrq = _r130_t0['create-stroke']['bind'](_r130_t0);
            r130_xn$setanchor$9Jrj = _r130_t0['set-anchor']['bind'](_r130_t0);
            _r130_t0['gizmo'] = r1_globalTransform;
            _r130_t0['set-width'](r1_WIDTH);
            r130_xn$setwidth$9Jrj(r1_WIDTH);
            r130_include(r1_capitalMarks);
            r130_slope = r1_STROKE * 0.00092;
            r130_expand = 0.35;
            r130_coexpand = (1 - r130_expand) / 2;
            r130_kappa = r1_KAPPA_HOOK;
            r130_smooth = r1_HOOK + 0.75 * r1_STROKE;
            r130_hookx = 0.5 * r1_SB + r1_OXHOOK;
            r130_xn$putshapes$9Jrj(r130_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB - r1_JBALANCE, r1_CAP)['set-width'](0, r1_STROKE)['heads-to'](r1_DOWNWARD)['line-to'](r1_RIGHTSB - r1_JBALANCE, r130_smooth)['arc-vh-to'](r1_mix(r130_hookx, r1_RIGHTSB - r1_JBALANCE, 0.5), r1_O)['heads-to'](r1_LEFTWARD)['curve-to'](r1_MIDDLE - r130_kappa * (r1_MIDDLE - r1_SB) - r1_SB * 0.5, r1_O, r130_hookx, r1_HOOK)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('J.serifed', function _r1_t75() {
            var r133_currentGlyph, r133_xn$setwidth$9Jrj, r133_xn$assignunicode$7Hrq, r133_xn$startfrom$1aao, r133_xn$lineto$5sIl, r133_xn$curveto$1aao, r133_xn$cubicto$1aao, r133_xn$putshapes$9Jrj, r133_xn$reverselast$3qIs, r133_include, r133_xn$createstroke$7Hrq, r133_xn$setanchor$9Jrj, _r133_t0, _r133_t1;
            _r133_t0 = this;
            r133_currentGlyph = _r133_t0;
            r133_xn$setwidth$9Jrj = _r133_t0['set-width']['bind'](_r133_t0);
            r133_xn$assignunicode$7Hrq = function _r133_t1(r134_code) {
                var r134_code;
                r133_currentGlyph['assign-unicode'](r134_code);
                return r1_unicodeGlyphs[[r133_currentGlyph['unicode'][r133_currentGlyph['unicode']['length'] - 1]]] = r133_currentGlyph;
            };
            r133_xn$startfrom$1aao = _r133_t0['start-from']['bind'](_r133_t0);
            r133_xn$lineto$5sIl = _r133_t0['line-to']['bind'](_r133_t0);
            r133_xn$curveto$1aao = _r133_t0['curve-to']['bind'](_r133_t0);
            r133_xn$cubicto$1aao = _r133_t0['cubic-to']['bind'](_r133_t0);
            r133_xn$putshapes$9Jrj = _r133_t0['put-shapes']['bind'](_r133_t0);
            r133_xn$reverselast$3qIs = _r133_t0['reverse-last']['bind'](_r133_t0);
            r133_include = _r133_t0['include']['bind'](_r133_t0);
            r133_xn$createstroke$7Hrq = _r133_t0['create-stroke']['bind'](_r133_t0);
            r133_xn$setanchor$9Jrj = _r133_t0['set-anchor']['bind'](_r133_t0);
            _r133_t0['gizmo'] = r1_globalTransform;
            _r133_t0['set-width'](r1_WIDTH);
            r133_xn$setwidth$9Jrj(r1_WIDTH);
            r133_include(r1_glyphs['J.straight'], r1_BASE);
            r133_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_RIGHTSB - r1_HALFSTROKE - r1_JBALANCE, r1_CAP, r1_LONGJUT));
            return void 0;
        });
        r1_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r1_xn$createglyph$7Hrq('N', function _r1_t76() {
            var r136_currentGlyph, r136_xn$setwidth$9Jrj, r136_xn$assignunicode$7Hrq, r136_xn$startfrom$1aao, r136_xn$lineto$5sIl, r136_xn$curveto$1aao, r136_xn$cubicto$1aao, r136_xn$putshapes$9Jrj, r136_xn$reverselast$3qIs, r136_include, r136_xn$createstroke$7Hrq, r136_xn$setanchor$9Jrj, r136_topstroke, r136_halftopstroke, _r136_t0, _r136_t1;
            _r136_t0 = this;
            r136_currentGlyph = _r136_t0;
            r136_xn$setwidth$9Jrj = _r136_t0['set-width']['bind'](_r136_t0);
            r136_xn$assignunicode$7Hrq = function _r136_t1(r137_code) {
                var r137_code;
                r136_currentGlyph['assign-unicode'](r137_code);
                return r1_unicodeGlyphs[[r136_currentGlyph['unicode'][r136_currentGlyph['unicode']['length'] - 1]]] = r136_currentGlyph;
            };
            r136_xn$startfrom$1aao = _r136_t0['start-from']['bind'](_r136_t0);
            r136_xn$lineto$5sIl = _r136_t0['line-to']['bind'](_r136_t0);
            r136_xn$curveto$1aao = _r136_t0['curve-to']['bind'](_r136_t0);
            r136_xn$cubicto$1aao = _r136_t0['cubic-to']['bind'](_r136_t0);
            r136_xn$putshapes$9Jrj = _r136_t0['put-shapes']['bind'](_r136_t0);
            r136_xn$reverselast$3qIs = _r136_t0['reverse-last']['bind'](_r136_t0);
            r136_include = _r136_t0['include']['bind'](_r136_t0);
            r136_xn$createstroke$7Hrq = _r136_t0['create-stroke']['bind'](_r136_t0);
            r136_xn$setanchor$9Jrj = _r136_t0['set-anchor']['bind'](_r136_t0);
            _r136_t0['gizmo'] = r1_globalTransform;
            _r136_t0['set-width'](r1_WIDTH);
            r136_xn$setwidth$9Jrj(r1_WIDTH);
            r136_xn$assignunicode$7Hrq('N');
            r136_include(r1_capitalMarks);
            r136_topstroke = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.24);
            r136_halftopstroke = r136_topstroke / 2;
            r136_xn$putshapes$9Jrj(r136_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_CAP * 0.4)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['set-width'](0, r136_topstroke)['to-outline']());
            r136_xn$putshapes$9Jrj(r136_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r136_topstroke, 0)['line-to'](r1_RIGHTSB, r1_CAP * 0.6)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r136_xn$putshapes$9Jrj(r136_xn$createstroke$7Hrq()['start-from'](r1_SB + r136_halftopstroke, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r136_topstroke, 0)['line-to'](r1_RIGHTSB - r136_topstroke - r136_halftopstroke, 0)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('M', function _r1_t77() {
            var r139_currentGlyph, r139_xn$setwidth$9Jrj, r139_xn$assignunicode$7Hrq, r139_xn$startfrom$1aao, r139_xn$lineto$5sIl, r139_xn$curveto$1aao, r139_xn$cubicto$1aao, r139_xn$putshapes$9Jrj, r139_xn$reverselast$3qIs, r139_include, r139_xn$createstroke$7Hrq, r139_xn$setanchor$9Jrj, r139_topstroke, r139_halftopstroke, _r139_t0, _r139_t1;
            _r139_t0 = this;
            r139_currentGlyph = _r139_t0;
            r139_xn$setwidth$9Jrj = _r139_t0['set-width']['bind'](_r139_t0);
            r139_xn$assignunicode$7Hrq = function _r139_t1(r140_code) {
                var r140_code;
                r139_currentGlyph['assign-unicode'](r140_code);
                return r1_unicodeGlyphs[[r139_currentGlyph['unicode'][r139_currentGlyph['unicode']['length'] - 1]]] = r139_currentGlyph;
            };
            r139_xn$startfrom$1aao = _r139_t0['start-from']['bind'](_r139_t0);
            r139_xn$lineto$5sIl = _r139_t0['line-to']['bind'](_r139_t0);
            r139_xn$curveto$1aao = _r139_t0['curve-to']['bind'](_r139_t0);
            r139_xn$cubicto$1aao = _r139_t0['cubic-to']['bind'](_r139_t0);
            r139_xn$putshapes$9Jrj = _r139_t0['put-shapes']['bind'](_r139_t0);
            r139_xn$reverselast$3qIs = _r139_t0['reverse-last']['bind'](_r139_t0);
            r139_include = _r139_t0['include']['bind'](_r139_t0);
            r139_xn$createstroke$7Hrq = _r139_t0['create-stroke']['bind'](_r139_t0);
            r139_xn$setanchor$9Jrj = _r139_t0['set-anchor']['bind'](_r139_t0);
            _r139_t0['gizmo'] = r1_globalTransform;
            _r139_t0['set-width'](r1_WIDTH);
            r139_xn$setwidth$9Jrj(r1_WIDTH);
            r139_xn$assignunicode$7Hrq('M');
            r139_include(r1_capitalMarks);
            r139_topstroke = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.175);
            r139_halftopstroke = r139_topstroke / 2;
            r139_xn$putshapes$9Jrj(r139_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_CAP * 0.2)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['set-width'](0, r139_topstroke)['to-outline']());
            r139_xn$putshapes$9Jrj(r139_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_CAP * 0.2)['heads-to'](r1_UPWARD)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_UPWARD)['set-width'](r139_topstroke, 0)['to-outline']());
            r139_xn$putshapes$9Jrj(r139_xn$createstroke$7Hrq()['start-from'](r1_SB + r139_halftopstroke, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r139_topstroke, 0)['line-to'](r1_MIDDLE - r139_halftopstroke, r1_CAP * 0.3)['heads-to'](r1_DOWNWARD)['to-outline']());
            r139_xn$putshapes$9Jrj(r139_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r139_halftopstroke, r1_CAP * 0.3)['heads-to'](r1_UPWARD)['set-width'](r139_topstroke, 0)['line-to'](r1_RIGHTSB - r139_halftopstroke, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('S', function _r1_t78() {
            var r142_currentGlyph, r142_xn$setwidth$9Jrj, r142_xn$assignunicode$7Hrq, r142_xn$startfrom$1aao, r142_xn$lineto$5sIl, r142_xn$curveto$1aao, r142_xn$cubicto$1aao, r142_xn$putshapes$9Jrj, r142_xn$reverselast$3qIs, r142_include, r142_xn$createstroke$7Hrq, r142_xn$setanchor$9Jrj, _r142_t0, _r142_t1;
            _r142_t0 = this;
            r142_currentGlyph = _r142_t0;
            r142_xn$setwidth$9Jrj = _r142_t0['set-width']['bind'](_r142_t0);
            r142_xn$assignunicode$7Hrq = function _r142_t1(r143_code) {
                var r143_code;
                r142_currentGlyph['assign-unicode'](r143_code);
                return r1_unicodeGlyphs[[r142_currentGlyph['unicode'][r142_currentGlyph['unicode']['length'] - 1]]] = r142_currentGlyph;
            };
            r142_xn$startfrom$1aao = _r142_t0['start-from']['bind'](_r142_t0);
            r142_xn$lineto$5sIl = _r142_t0['line-to']['bind'](_r142_t0);
            r142_xn$curveto$1aao = _r142_t0['curve-to']['bind'](_r142_t0);
            r142_xn$cubicto$1aao = _r142_t0['cubic-to']['bind'](_r142_t0);
            r142_xn$putshapes$9Jrj = _r142_t0['put-shapes']['bind'](_r142_t0);
            r142_xn$reverselast$3qIs = _r142_t0['reverse-last']['bind'](_r142_t0);
            r142_include = _r142_t0['include']['bind'](_r142_t0);
            r142_xn$createstroke$7Hrq = _r142_t0['create-stroke']['bind'](_r142_t0);
            r142_xn$setanchor$9Jrj = _r142_t0['set-anchor']['bind'](_r142_t0);
            _r142_t0['gizmo'] = r1_globalTransform;
            _r142_t0['set-width'](r1_WIDTH);
            r142_xn$setwidth$9Jrj(r1_WIDTH);
            r142_xn$assignunicode$7Hrq('S');
            r142_include(r1_capitalMarks);
            r142_xn$putshapes$9Jrj(r1_sHookUpper(r1_CAP, r1_SMOOTHA, r1_HOOK));
            r142_xn$putshapes$9Jrj(r1_sHookLower(0, r1_SMOOTHA, r1_HOOK));
            r142_xn$putshapes$9Jrj(r1_sStrand(r1_CAP - r1_SMOOTHA, r1_SMOOTHA));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('fbar', function _r1_t79() {
            var r145_currentGlyph, r145_xn$setwidth$9Jrj, r145_xn$assignunicode$7Hrq, r145_xn$startfrom$1aao, r145_xn$lineto$5sIl, r145_xn$curveto$1aao, r145_xn$cubicto$1aao, r145_xn$putshapes$9Jrj, r145_xn$reverselast$3qIs, r145_include, r145_xn$createstroke$7Hrq, r145_xn$setanchor$9Jrj, _r145_t0, _r145_t1;
            _r145_t0 = this;
            r145_currentGlyph = _r145_t0;
            r145_xn$setwidth$9Jrj = _r145_t0['set-width']['bind'](_r145_t0);
            r145_xn$assignunicode$7Hrq = function _r145_t1(r146_code) {
                var r146_code;
                r145_currentGlyph['assign-unicode'](r146_code);
                return r1_unicodeGlyphs[[r145_currentGlyph['unicode'][r145_currentGlyph['unicode']['length'] - 1]]] = r145_currentGlyph;
            };
            r145_xn$startfrom$1aao = _r145_t0['start-from']['bind'](_r145_t0);
            r145_xn$lineto$5sIl = _r145_t0['line-to']['bind'](_r145_t0);
            r145_xn$curveto$1aao = _r145_t0['curve-to']['bind'](_r145_t0);
            r145_xn$cubicto$1aao = _r145_t0['cubic-to']['bind'](_r145_t0);
            r145_xn$putshapes$9Jrj = _r145_t0['put-shapes']['bind'](_r145_t0);
            r145_xn$reverselast$3qIs = _r145_t0['reverse-last']['bind'](_r145_t0);
            r145_include = _r145_t0['include']['bind'](_r145_t0);
            r145_xn$createstroke$7Hrq = _r145_t0['create-stroke']['bind'](_r145_t0);
            r145_xn$setanchor$9Jrj = _r145_t0['set-anchor']['bind'](_r145_t0);
            _r145_t0['gizmo'] = r1_globalTransform;
            _r145_t0['set-width'](r1_WIDTH);
            r145_xn$putshapes$9Jrj(r145_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r1_LONGJUT, r1_XH)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_MIDDLE + r1_LONGJUT, r1_XH)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('o', function _r1_t80() {
            var r148_currentGlyph, r148_xn$setwidth$9Jrj, r148_xn$assignunicode$7Hrq, r148_xn$startfrom$1aao, r148_xn$lineto$5sIl, r148_xn$curveto$1aao, r148_xn$cubicto$1aao, r148_xn$putshapes$9Jrj, r148_xn$reverselast$3qIs, r148_include, r148_xn$createstroke$7Hrq, r148_xn$setanchor$9Jrj, r148_outline, _r148_t0, _r148_t1;
            _r148_t0 = this;
            r148_currentGlyph = _r148_t0;
            r148_xn$setwidth$9Jrj = _r148_t0['set-width']['bind'](_r148_t0);
            r148_xn$assignunicode$7Hrq = function _r148_t1(r149_code) {
                var r149_code;
                r148_currentGlyph['assign-unicode'](r149_code);
                return r1_unicodeGlyphs[[r148_currentGlyph['unicode'][r148_currentGlyph['unicode']['length'] - 1]]] = r148_currentGlyph;
            };
            r148_xn$startfrom$1aao = _r148_t0['start-from']['bind'](_r148_t0);
            r148_xn$lineto$5sIl = _r148_t0['line-to']['bind'](_r148_t0);
            r148_xn$curveto$1aao = _r148_t0['curve-to']['bind'](_r148_t0);
            r148_xn$cubicto$1aao = _r148_t0['cubic-to']['bind'](_r148_t0);
            r148_xn$putshapes$9Jrj = _r148_t0['put-shapes']['bind'](_r148_t0);
            r148_xn$reverselast$3qIs = _r148_t0['reverse-last']['bind'](_r148_t0);
            r148_include = _r148_t0['include']['bind'](_r148_t0);
            r148_xn$createstroke$7Hrq = _r148_t0['create-stroke']['bind'](_r148_t0);
            r148_xn$setanchor$9Jrj = _r148_t0['set-anchor']['bind'](_r148_t0);
            _r148_t0['gizmo'] = r1_globalTransform;
            _r148_t0['set-width'](r1_WIDTH);
            r148_xn$setwidth$9Jrj(r1_WIDTH);
            r148_xn$assignunicode$7Hrq('o');
            r148_include(r1_eMarks);
            r148_outline = r148_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_XO)['set-width'](r1_STROKE, 0)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)['line-to'](r1_SB + r1_O, r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB - r1_O, r1_SMALLSMOOTHA)['line-to'](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD);
            r148_xn$putshapes$9Jrj(r148_outline['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('o.left', function _r1_t81() {
            var r151_currentGlyph, r151_xn$setwidth$9Jrj, r151_xn$assignunicode$7Hrq, r151_xn$startfrom$1aao, r151_xn$lineto$5sIl, r151_xn$curveto$1aao, r151_xn$cubicto$1aao, r151_xn$putshapes$9Jrj, r151_xn$reverselast$3qIs, r151_include, r151_xn$createstroke$7Hrq, r151_xn$setanchor$9Jrj, _r151_t0, _r151_t1;
            _r151_t0 = this;
            r151_currentGlyph = _r151_t0;
            r151_xn$setwidth$9Jrj = _r151_t0['set-width']['bind'](_r151_t0);
            r151_xn$assignunicode$7Hrq = function _r151_t1(r152_code) {
                var r152_code;
                r151_currentGlyph['assign-unicode'](r152_code);
                return r1_unicodeGlyphs[[r151_currentGlyph['unicode'][r151_currentGlyph['unicode']['length'] - 1]]] = r151_currentGlyph;
            };
            r151_xn$startfrom$1aao = _r151_t0['start-from']['bind'](_r151_t0);
            r151_xn$lineto$5sIl = _r151_t0['line-to']['bind'](_r151_t0);
            r151_xn$curveto$1aao = _r151_t0['curve-to']['bind'](_r151_t0);
            r151_xn$cubicto$1aao = _r151_t0['cubic-to']['bind'](_r151_t0);
            r151_xn$putshapes$9Jrj = _r151_t0['put-shapes']['bind'](_r151_t0);
            r151_xn$reverselast$3qIs = _r151_t0['reverse-last']['bind'](_r151_t0);
            r151_include = _r151_t0['include']['bind'](_r151_t0);
            r151_xn$createstroke$7Hrq = _r151_t0['create-stroke']['bind'](_r151_t0);
            r151_xn$setanchor$9Jrj = _r151_t0['set-anchor']['bind'](_r151_t0);
            _r151_t0['gizmo'] = r1_globalTransform;
            _r151_t0['set-width'](r1_WIDTH);
            r151_xn$setwidth$9Jrj(r1_WIDTH);
            r151_xn$putshapes$9Jrj(r151_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_XO)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['arc-hv-to'](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)['line-to'](r1_RIGHTSB - r1_O, r1_SMALLSMOOTHA)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_LEFTWARD)['to-outline']());
            r151_xn$putshapes$9Jrj(r151_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_O + r1_STROKE)['heads-to'](r1_LEFTWARD)['set-width'](r1_STROKE, 0)['arc-hv-to'](r1_SB + r1_STROKE, r1_SMALLSMOOTHB - r1_STROKE * 0.05)['set-width'](r1_HALFSTROKE, 0)['line-to'](r1_SB + r1_STROKE, r1_XH - r1_SMALLSMOOTHA + r1_STROKE * 0.05)['set-width'](r1_HALFSTROKE, 0)['arc-vh-to'](r1_MIDDLE, r1_XO - r1_STROKE)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('o.right', function _r1_t82() {
            var r154_currentGlyph, r154_xn$setwidth$9Jrj, r154_xn$assignunicode$7Hrq, r154_xn$startfrom$1aao, r154_xn$lineto$5sIl, r154_xn$curveto$1aao, r154_xn$cubicto$1aao, r154_xn$putshapes$9Jrj, r154_xn$reverselast$3qIs, r154_include, r154_xn$createstroke$7Hrq, r154_xn$setanchor$9Jrj, _r154_t0, _r154_t1;
            _r154_t0 = this;
            r154_currentGlyph = _r154_t0;
            r154_xn$setwidth$9Jrj = _r154_t0['set-width']['bind'](_r154_t0);
            r154_xn$assignunicode$7Hrq = function _r154_t1(r155_code) {
                var r155_code;
                r154_currentGlyph['assign-unicode'](r155_code);
                return r1_unicodeGlyphs[[r154_currentGlyph['unicode'][r154_currentGlyph['unicode']['length'] - 1]]] = r154_currentGlyph;
            };
            r154_xn$startfrom$1aao = _r154_t0['start-from']['bind'](_r154_t0);
            r154_xn$lineto$5sIl = _r154_t0['line-to']['bind'](_r154_t0);
            r154_xn$curveto$1aao = _r154_t0['curve-to']['bind'](_r154_t0);
            r154_xn$cubicto$1aao = _r154_t0['cubic-to']['bind'](_r154_t0);
            r154_xn$putshapes$9Jrj = _r154_t0['put-shapes']['bind'](_r154_t0);
            r154_xn$reverselast$3qIs = _r154_t0['reverse-last']['bind'](_r154_t0);
            r154_include = _r154_t0['include']['bind'](_r154_t0);
            r154_xn$createstroke$7Hrq = _r154_t0['create-stroke']['bind'](_r154_t0);
            r154_xn$setanchor$9Jrj = _r154_t0['set-anchor']['bind'](_r154_t0);
            _r154_t0['gizmo'] = r1_globalTransform;
            _r154_t0['set-width'](r1_WIDTH);
            r154_xn$setwidth$9Jrj(r1_WIDTH);
            r154_xn$putshapes$9Jrj(r154_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD)['set-width'](r1_STROKE, 0)['arc-hv-to'](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)['line-to'](r1_SB + r1_O, r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r154_xn$putshapes$9Jrj(r154_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_O + r1_STROKE)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['arc-hv-to'](r1_RIGHTSB - r1_STROKE, r1_SMALLSMOOTHA - r1_STROKE * 0.05)['set-width'](0, r1_HALFSTROKE)['line-to'](r1_RIGHTSB - r1_STROKE, r1_XH - r1_SMALLSMOOTHB + r1_STROKE * 0.05)['set-width'](0, r1_HALFSTROKE)['arc-vh-to'](r1_MIDDLE, r1_XO - r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('p', function _r1_t83() {
            var r157_currentGlyph, r157_xn$setwidth$9Jrj, r157_xn$assignunicode$7Hrq, r157_xn$startfrom$1aao, r157_xn$lineto$5sIl, r157_xn$curveto$1aao, r157_xn$cubicto$1aao, r157_xn$putshapes$9Jrj, r157_xn$reverselast$3qIs, r157_include, r157_xn$createstroke$7Hrq, r157_xn$setanchor$9Jrj, _r157_t0, _r157_t1;
            _r157_t0 = this;
            r157_currentGlyph = _r157_t0;
            r157_xn$setwidth$9Jrj = _r157_t0['set-width']['bind'](_r157_t0);
            r157_xn$assignunicode$7Hrq = function _r157_t1(r158_code) {
                var r158_code;
                r157_currentGlyph['assign-unicode'](r158_code);
                return r1_unicodeGlyphs[[r157_currentGlyph['unicode'][r157_currentGlyph['unicode']['length'] - 1]]] = r157_currentGlyph;
            };
            r157_xn$startfrom$1aao = _r157_t0['start-from']['bind'](_r157_t0);
            r157_xn$lineto$5sIl = _r157_t0['line-to']['bind'](_r157_t0);
            r157_xn$curveto$1aao = _r157_t0['curve-to']['bind'](_r157_t0);
            r157_xn$cubicto$1aao = _r157_t0['cubic-to']['bind'](_r157_t0);
            r157_xn$putshapes$9Jrj = _r157_t0['put-shapes']['bind'](_r157_t0);
            r157_xn$reverselast$3qIs = _r157_t0['reverse-last']['bind'](_r157_t0);
            r157_include = _r157_t0['include']['bind'](_r157_t0);
            r157_xn$createstroke$7Hrq = _r157_t0['create-stroke']['bind'](_r157_t0);
            r157_xn$setanchor$9Jrj = _r157_t0['set-anchor']['bind'](_r157_t0);
            _r157_t0['gizmo'] = r1_globalTransform;
            _r157_t0['set-width'](r1_WIDTH);
            r157_xn$setwidth$9Jrj(r1_WIDTH);
            r157_xn$assignunicode$7Hrq('p');
            r157_include(r1_eMarks);
            r157_include(r1_glyphs['o.left']);
            r157_xn$putshapes$9Jrj(r157_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r1_DESCENDER)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('b', function _r1_t84() {
            var r160_currentGlyph, r160_xn$setwidth$9Jrj, r160_xn$assignunicode$7Hrq, r160_xn$startfrom$1aao, r160_xn$lineto$5sIl, r160_xn$curveto$1aao, r160_xn$cubicto$1aao, r160_xn$putshapes$9Jrj, r160_xn$reverselast$3qIs, r160_include, r160_xn$createstroke$7Hrq, r160_xn$setanchor$9Jrj, _r160_t0, _r160_t1;
            _r160_t0 = this;
            r160_currentGlyph = _r160_t0;
            r160_xn$setwidth$9Jrj = _r160_t0['set-width']['bind'](_r160_t0);
            r160_xn$assignunicode$7Hrq = function _r160_t1(r161_code) {
                var r161_code;
                r160_currentGlyph['assign-unicode'](r161_code);
                return r1_unicodeGlyphs[[r160_currentGlyph['unicode'][r160_currentGlyph['unicode']['length'] - 1]]] = r160_currentGlyph;
            };
            r160_xn$startfrom$1aao = _r160_t0['start-from']['bind'](_r160_t0);
            r160_xn$lineto$5sIl = _r160_t0['line-to']['bind'](_r160_t0);
            r160_xn$curveto$1aao = _r160_t0['curve-to']['bind'](_r160_t0);
            r160_xn$cubicto$1aao = _r160_t0['cubic-to']['bind'](_r160_t0);
            r160_xn$putshapes$9Jrj = _r160_t0['put-shapes']['bind'](_r160_t0);
            r160_xn$reverselast$3qIs = _r160_t0['reverse-last']['bind'](_r160_t0);
            r160_include = _r160_t0['include']['bind'](_r160_t0);
            r160_xn$createstroke$7Hrq = _r160_t0['create-stroke']['bind'](_r160_t0);
            r160_xn$setanchor$9Jrj = _r160_t0['set-anchor']['bind'](_r160_t0);
            _r160_t0['gizmo'] = r1_globalTransform;
            _r160_t0['set-width'](r1_WIDTH);
            r160_xn$setwidth$9Jrj(r1_WIDTH);
            r160_xn$assignunicode$7Hrq('b');
            r160_include(r1_bMarks);
            r160_xn$putshapes$9Jrj(r1_glyphs['o.left']['contours']);
            r160_xn$putshapes$9Jrj(r160_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('q', function _r1_t85() {
            var r163_currentGlyph, r163_xn$setwidth$9Jrj, r163_xn$assignunicode$7Hrq, r163_xn$startfrom$1aao, r163_xn$lineto$5sIl, r163_xn$curveto$1aao, r163_xn$cubicto$1aao, r163_xn$putshapes$9Jrj, r163_xn$reverselast$3qIs, r163_include, r163_xn$createstroke$7Hrq, r163_xn$setanchor$9Jrj, _r163_t0, _r163_t1;
            _r163_t0 = this;
            r163_currentGlyph = _r163_t0;
            r163_xn$setwidth$9Jrj = _r163_t0['set-width']['bind'](_r163_t0);
            r163_xn$assignunicode$7Hrq = function _r163_t1(r164_code) {
                var r164_code;
                r163_currentGlyph['assign-unicode'](r164_code);
                return r1_unicodeGlyphs[[r163_currentGlyph['unicode'][r163_currentGlyph['unicode']['length'] - 1]]] = r163_currentGlyph;
            };
            r163_xn$startfrom$1aao = _r163_t0['start-from']['bind'](_r163_t0);
            r163_xn$lineto$5sIl = _r163_t0['line-to']['bind'](_r163_t0);
            r163_xn$curveto$1aao = _r163_t0['curve-to']['bind'](_r163_t0);
            r163_xn$cubicto$1aao = _r163_t0['cubic-to']['bind'](_r163_t0);
            r163_xn$putshapes$9Jrj = _r163_t0['put-shapes']['bind'](_r163_t0);
            r163_xn$reverselast$3qIs = _r163_t0['reverse-last']['bind'](_r163_t0);
            r163_include = _r163_t0['include']['bind'](_r163_t0);
            r163_xn$createstroke$7Hrq = _r163_t0['create-stroke']['bind'](_r163_t0);
            r163_xn$setanchor$9Jrj = _r163_t0['set-anchor']['bind'](_r163_t0);
            _r163_t0['gizmo'] = r1_globalTransform;
            _r163_t0['set-width'](r1_WIDTH);
            r163_xn$setwidth$9Jrj(r1_WIDTH);
            r163_xn$assignunicode$7Hrq('q');
            r163_include(r1_eMarks);
            r163_xn$putshapes$9Jrj(r1_glyphs['o.right']['contours']);
            r163_xn$putshapes$9Jrj(r163_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_DESCENDER)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('d', function _r1_t86() {
            var r166_currentGlyph, r166_xn$setwidth$9Jrj, r166_xn$assignunicode$7Hrq, r166_xn$startfrom$1aao, r166_xn$lineto$5sIl, r166_xn$curveto$1aao, r166_xn$cubicto$1aao, r166_xn$putshapes$9Jrj, r166_xn$reverselast$3qIs, r166_include, r166_xn$createstroke$7Hrq, r166_xn$setanchor$9Jrj, _r166_t0, _r166_t1;
            _r166_t0 = this;
            r166_currentGlyph = _r166_t0;
            r166_xn$setwidth$9Jrj = _r166_t0['set-width']['bind'](_r166_t0);
            r166_xn$assignunicode$7Hrq = function _r166_t1(r167_code) {
                var r167_code;
                r166_currentGlyph['assign-unicode'](r167_code);
                return r1_unicodeGlyphs[[r166_currentGlyph['unicode'][r166_currentGlyph['unicode']['length'] - 1]]] = r166_currentGlyph;
            };
            r166_xn$startfrom$1aao = _r166_t0['start-from']['bind'](_r166_t0);
            r166_xn$lineto$5sIl = _r166_t0['line-to']['bind'](_r166_t0);
            r166_xn$curveto$1aao = _r166_t0['curve-to']['bind'](_r166_t0);
            r166_xn$cubicto$1aao = _r166_t0['cubic-to']['bind'](_r166_t0);
            r166_xn$putshapes$9Jrj = _r166_t0['put-shapes']['bind'](_r166_t0);
            r166_xn$reverselast$3qIs = _r166_t0['reverse-last']['bind'](_r166_t0);
            r166_include = _r166_t0['include']['bind'](_r166_t0);
            r166_xn$createstroke$7Hrq = _r166_t0['create-stroke']['bind'](_r166_t0);
            r166_xn$setanchor$9Jrj = _r166_t0['set-anchor']['bind'](_r166_t0);
            _r166_t0['gizmo'] = r1_globalTransform;
            _r166_t0['set-width'](r1_WIDTH);
            r166_xn$setwidth$9Jrj(r1_WIDTH);
            r166_xn$assignunicode$7Hrq('d');
            r166_include(r1_bMarks);
            r166_xn$putshapes$9Jrj(r1_glyphs['o.right']['contours']);
            r166_xn$putshapes$9Jrj(r166_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('g', function _r1_t87() {
            var r169_currentGlyph, r169_xn$setwidth$9Jrj, r169_xn$assignunicode$7Hrq, r169_xn$startfrom$1aao, r169_xn$lineto$5sIl, r169_xn$curveto$1aao, r169_xn$cubicto$1aao, r169_xn$putshapes$9Jrj, r169_xn$reverselast$3qIs, r169_include, r169_xn$createstroke$7Hrq, r169_xn$setanchor$9Jrj, r169_grightx, _r169_t0, _r169_t1;
            _r169_t0 = this;
            r169_currentGlyph = _r169_t0;
            r169_xn$setwidth$9Jrj = _r169_t0['set-width']['bind'](_r169_t0);
            r169_xn$assignunicode$7Hrq = function _r169_t1(r170_code) {
                var r170_code;
                r169_currentGlyph['assign-unicode'](r170_code);
                return r1_unicodeGlyphs[[r169_currentGlyph['unicode'][r169_currentGlyph['unicode']['length'] - 1]]] = r169_currentGlyph;
            };
            r169_xn$startfrom$1aao = _r169_t0['start-from']['bind'](_r169_t0);
            r169_xn$lineto$5sIl = _r169_t0['line-to']['bind'](_r169_t0);
            r169_xn$curveto$1aao = _r169_t0['curve-to']['bind'](_r169_t0);
            r169_xn$cubicto$1aao = _r169_t0['cubic-to']['bind'](_r169_t0);
            r169_xn$putshapes$9Jrj = _r169_t0['put-shapes']['bind'](_r169_t0);
            r169_xn$reverselast$3qIs = _r169_t0['reverse-last']['bind'](_r169_t0);
            r169_include = _r169_t0['include']['bind'](_r169_t0);
            r169_xn$createstroke$7Hrq = _r169_t0['create-stroke']['bind'](_r169_t0);
            r169_xn$setanchor$9Jrj = _r169_t0['set-anchor']['bind'](_r169_t0);
            _r169_t0['gizmo'] = r1_globalTransform;
            _r169_t0['set-width'](r1_WIDTH);
            r169_xn$setwidth$9Jrj(r1_WIDTH);
            r169_xn$assignunicode$7Hrq('g');
            r169_include(r1_pMarks);
            r169_xn$putshapes$9Jrj([
                r1_Ring(r1_XO, r1_XH * r1_GBARPOS, r1_SB * 1.25, r1_RIGHTSB - 0.25 * r1_SB, r1_SMALLSMOOTH),
                r1_Ring(r1_XO - r1_STROKE, r1_XH * r1_GBARPOS + r1_STROKE, r1_SB * 1.25 + r1_STROKE, r1_RIGHTSB - 0.25 * r1_SB - r1_STROKE, r1_SMALLSMOOTH - r1_STROKE)
            ]);
            r169_xn$reverselast$3qIs();
            r169_grightx = r1_RIGHTSB - r1_O * 4;
            r169_xn$putshapes$9Jrj(r169_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_XH * r1_GBARPOS)['set-width'](0, r1_STROKE * 0.75)['arc-hv-to'](r1_SB * 1.5 + r1_STROKE, (r1_O - r1_DESCENDER * 0.85 + r1_XH * r1_GBARPOS) * 0.47)['set-width'](0, r1_STROKE)['arc-vh-to'](r1_MIDDLE + r1_DESCENDER * 0.15, r1_O - r1_DESCENDER * 0.85)['line-to'](r1_MIDDLE - r1_DESCENDER * 0.15, r1_O - r1_DESCENDER * 0.85)['arc-hv-to'](r169_grightx, -r1_STROKE * r1_globalTransform['yx'] * 2)['arc-vh-to'](r1_mix(r1_SB, r169_grightx, 0.5), r1_DESCENDER + r1_O)['arc-hv-to'](r1_SB, r1_DESCENDER * 0.1)['arc-vh-to'](r1_MIDDLE + r1_DESCENDER * 0.15, r1_O - r1_DESCENDER * 0.85)['to-outline']());
            r169_xn$startfrom$1aao(r1_RIGHTSB + 0.5 * r1_SB, r1_XH);
            r169_xn$lineto$5sIl(r1_RIGHTSB + 0.5 * r1_SB, r1_XH - r1_STROKE);
            r169_xn$lineto$5sIl(r1_MIDDLE, r1_XH - r1_STROKE - r1_O);
            r169_xn$lineto$5sIl(r1_MIDDLE, r1_XH);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('c', function _r1_t88() {
            var r172_currentGlyph, r172_xn$setwidth$9Jrj, r172_xn$assignunicode$7Hrq, r172_xn$startfrom$1aao, r172_xn$lineto$5sIl, r172_xn$curveto$1aao, r172_xn$cubicto$1aao, r172_xn$putshapes$9Jrj, r172_xn$reverselast$3qIs, r172_include, r172_xn$createstroke$7Hrq, r172_xn$setanchor$9Jrj, r172_outline, _r172_t0, _r172_t1;
            _r172_t0 = this;
            r172_currentGlyph = _r172_t0;
            r172_xn$setwidth$9Jrj = _r172_t0['set-width']['bind'](_r172_t0);
            r172_xn$assignunicode$7Hrq = function _r172_t1(r173_code) {
                var r173_code;
                r172_currentGlyph['assign-unicode'](r173_code);
                return r1_unicodeGlyphs[[r172_currentGlyph['unicode'][r172_currentGlyph['unicode']['length'] - 1]]] = r172_currentGlyph;
            };
            r172_xn$startfrom$1aao = _r172_t0['start-from']['bind'](_r172_t0);
            r172_xn$lineto$5sIl = _r172_t0['line-to']['bind'](_r172_t0);
            r172_xn$curveto$1aao = _r172_t0['curve-to']['bind'](_r172_t0);
            r172_xn$cubicto$1aao = _r172_t0['cubic-to']['bind'](_r172_t0);
            r172_xn$putshapes$9Jrj = _r172_t0['put-shapes']['bind'](_r172_t0);
            r172_xn$reverselast$3qIs = _r172_t0['reverse-last']['bind'](_r172_t0);
            r172_include = _r172_t0['include']['bind'](_r172_t0);
            r172_xn$createstroke$7Hrq = _r172_t0['create-stroke']['bind'](_r172_t0);
            r172_xn$setanchor$9Jrj = _r172_t0['set-anchor']['bind'](_r172_t0);
            _r172_t0['gizmo'] = r1_globalTransform;
            _r172_t0['set-width'](r1_WIDTH);
            r172_xn$setwidth$9Jrj(r1_WIDTH);
            r172_xn$assignunicode$7Hrq('c');
            r172_include(r1_eMarks);
            r172_outline = r172_xn$createstroke$7Hrq();
            r172_outline['start-from'](r1_RIGHTSB - r1_OXHOOK, r1_XH - r1_HOOK)['curve-to'](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para['sb']), r1_XO, r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)['line-to'](r1_SB + r1_O, r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['curve-to'](r1_MIDDLE + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform['yx']) * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform['yx'], r1_HOOK - r1_TAILADJY * r1_globalTransform['yx']);
            r172_xn$putshapes$9Jrj(r172_outline['to-outline'](r1_STROKE, 0));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('e.upright', function _r1_t89() {
            var r175_currentGlyph, r175_xn$setwidth$9Jrj, r175_xn$assignunicode$7Hrq, r175_xn$startfrom$1aao, r175_xn$lineto$5sIl, r175_xn$curveto$1aao, r175_xn$cubicto$1aao, r175_xn$putshapes$9Jrj, r175_xn$reverselast$3qIs, r175_include, r175_xn$createstroke$7Hrq, r175_xn$setanchor$9Jrj, r175_barbottom, r175_hookx, r175_hookmiddle, r175_outline, r175_bar, _r175_t0, _r175_t1;
            _r175_t0 = this;
            r175_currentGlyph = _r175_t0;
            r175_xn$setwidth$9Jrj = _r175_t0['set-width']['bind'](_r175_t0);
            r175_xn$assignunicode$7Hrq = function _r175_t1(r176_code) {
                var r176_code;
                r175_currentGlyph['assign-unicode'](r176_code);
                return r1_unicodeGlyphs[[r175_currentGlyph['unicode'][r175_currentGlyph['unicode']['length'] - 1]]] = r175_currentGlyph;
            };
            r175_xn$startfrom$1aao = _r175_t0['start-from']['bind'](_r175_t0);
            r175_xn$lineto$5sIl = _r175_t0['line-to']['bind'](_r175_t0);
            r175_xn$curveto$1aao = _r175_t0['curve-to']['bind'](_r175_t0);
            r175_xn$cubicto$1aao = _r175_t0['cubic-to']['bind'](_r175_t0);
            r175_xn$putshapes$9Jrj = _r175_t0['put-shapes']['bind'](_r175_t0);
            r175_xn$reverselast$3qIs = _r175_t0['reverse-last']['bind'](_r175_t0);
            r175_include = _r175_t0['include']['bind'](_r175_t0);
            r175_xn$createstroke$7Hrq = _r175_t0['create-stroke']['bind'](_r175_t0);
            r175_xn$setanchor$9Jrj = _r175_t0['set-anchor']['bind'](_r175_t0);
            _r175_t0['gizmo'] = r1_globalTransform;
            _r175_t0['set-width'](r1_WIDTH);
            r175_xn$setwidth$9Jrj(r1_WIDTH);
            r175_barbottom = r1_XH * r1_EBARPOS;
            r175_hookx = r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform['yx'];
            r175_hookmiddle = r1_mix(r1_SB + r1_O, r175_hookx, 0.55);
            r175_outline = r175_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB - r1_O, r175_barbottom)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)['line-to'](r1_SB + r1_O, r1_SMALLSMOOTHB)['arc-vh-to'](r175_hookmiddle, r1_O)['heads-to'](r1_RIGHTWARD)['curve-to'](r1_mix(r175_hookmiddle, r175_hookx, r1_KAPPA_HOOK), r1_O, r175_hookx, r1_SHOOK - r1_TAILADJY * r1_globalTransform['yx']);
            r175_bar = r175_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_HALFSTROKE, r175_barbottom)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r1_HALFSTROKE, r175_barbottom)['heads-to'](r1_RIGHTWARD);
            r175_xn$putshapes$9Jrj(r175_outline['to-outline']());
            r175_xn$putshapes$9Jrj(r175_bar['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('e.italic', function _r1_t90() {
            var r178_currentGlyph, r178_xn$setwidth$9Jrj, r178_xn$assignunicode$7Hrq, r178_xn$startfrom$1aao, r178_xn$lineto$5sIl, r178_xn$curveto$1aao, r178_xn$cubicto$1aao, r178_xn$putshapes$9Jrj, r178_xn$reverselast$3qIs, r178_include, r178_xn$createstroke$7Hrq, r178_xn$setanchor$9Jrj, r178_barbottom, _r178_t0, _r178_t1;
            _r178_t0 = this;
            r178_currentGlyph = _r178_t0;
            r178_xn$setwidth$9Jrj = _r178_t0['set-width']['bind'](_r178_t0);
            r178_xn$assignunicode$7Hrq = function _r178_t1(r179_code) {
                var r179_code;
                r178_currentGlyph['assign-unicode'](r179_code);
                return r1_unicodeGlyphs[[r178_currentGlyph['unicode'][r178_currentGlyph['unicode']['length'] - 1]]] = r178_currentGlyph;
            };
            r178_xn$startfrom$1aao = _r178_t0['start-from']['bind'](_r178_t0);
            r178_xn$lineto$5sIl = _r178_t0['line-to']['bind'](_r178_t0);
            r178_xn$curveto$1aao = _r178_t0['curve-to']['bind'](_r178_t0);
            r178_xn$cubicto$1aao = _r178_t0['cubic-to']['bind'](_r178_t0);
            r178_xn$putshapes$9Jrj = _r178_t0['put-shapes']['bind'](_r178_t0);
            r178_xn$reverselast$3qIs = _r178_t0['reverse-last']['bind'](_r178_t0);
            r178_include = _r178_t0['include']['bind'](_r178_t0);
            r178_xn$createstroke$7Hrq = _r178_t0['create-stroke']['bind'](_r178_t0);
            r178_xn$setanchor$9Jrj = _r178_t0['set-anchor']['bind'](_r178_t0);
            _r178_t0['gizmo'] = r1_globalTransform;
            _r178_t0['set-width'](r1_WIDTH);
            r178_xn$setwidth$9Jrj(r1_WIDTH);
            r178_barbottom = r1_XH * (r1_BARPOS - 0.04);
            r178_xn$putshapes$9Jrj(r178_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_O + r1_STROKE, r178_barbottom)['set-width'](r1_STROKE, 0)['arc-hv-to'](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB * 0.95)['arc-vh-to'](r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)['line-to'](r1_SB + r1_O, r1_SMALLSMOOTHB)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['curve-to'](r1_MIDDLE + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform['yx']) * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform['yx'], r1_HOOK - r1_TAILADJY * r1_globalTransform['yx'])['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('e', function _r1_t91() {
            var r181_currentGlyph, r181_xn$setwidth$9Jrj, r181_xn$assignunicode$7Hrq, r181_xn$startfrom$1aao, r181_xn$lineto$5sIl, r181_xn$curveto$1aao, r181_xn$cubicto$1aao, r181_xn$putshapes$9Jrj, r181_xn$reverselast$3qIs, r181_include, r181_xn$createstroke$7Hrq, r181_xn$setanchor$9Jrj, _r181_t0, _r181_t1;
            _r181_t0 = this;
            r181_currentGlyph = _r181_t0;
            r181_xn$setwidth$9Jrj = _r181_t0['set-width']['bind'](_r181_t0);
            r181_xn$assignunicode$7Hrq = function _r181_t1(r182_code) {
                var r182_code;
                r181_currentGlyph['assign-unicode'](r182_code);
                return r1_unicodeGlyphs[[r181_currentGlyph['unicode'][r181_currentGlyph['unicode']['length'] - 1]]] = r181_currentGlyph;
            };
            r181_xn$startfrom$1aao = _r181_t0['start-from']['bind'](_r181_t0);
            r181_xn$lineto$5sIl = _r181_t0['line-to']['bind'](_r181_t0);
            r181_xn$curveto$1aao = _r181_t0['curve-to']['bind'](_r181_t0);
            r181_xn$cubicto$1aao = _r181_t0['cubic-to']['bind'](_r181_t0);
            r181_xn$putshapes$9Jrj = _r181_t0['put-shapes']['bind'](_r181_t0);
            r181_xn$reverselast$3qIs = _r181_t0['reverse-last']['bind'](_r181_t0);
            r181_include = _r181_t0['include']['bind'](_r181_t0);
            r181_xn$createstroke$7Hrq = _r181_t0['create-stroke']['bind'](_r181_t0);
            r181_xn$setanchor$9Jrj = _r181_t0['set-anchor']['bind'](_r181_t0);
            _r181_t0['gizmo'] = r1_globalTransform;
            _r181_t0['set-width'](r1_WIDTH);
            r181_xn$setwidth$9Jrj(r1_WIDTH);
            r181_xn$assignunicode$7Hrq('e');
            r181_include(r1_eMarks);
            if (r1_para['italicangle'] > 0) {
                r181_include(r1_glyphs['e.italic']);
            } else {
                r181_include(r1_glyphs['e.upright']);
            }
            return void 0;
        });
        r1_xn$createglyph$7Hrq('t', function _r1_t92() {
            var r184_currentGlyph, r184_xn$setwidth$9Jrj, r184_xn$assignunicode$7Hrq, r184_xn$startfrom$1aao, r184_xn$lineto$5sIl, r184_xn$curveto$1aao, r184_xn$cubicto$1aao, r184_xn$putshapes$9Jrj, r184_xn$reverselast$3qIs, r184_include, r184_xn$createstroke$7Hrq, r184_xn$setanchor$9Jrj, r184_center, r184_hookx, r184_turn, r184_smb, _r184_t0, _r184_t1;
            _r184_t0 = this;
            r184_currentGlyph = _r184_t0;
            r184_xn$setwidth$9Jrj = _r184_t0['set-width']['bind'](_r184_t0);
            r184_xn$assignunicode$7Hrq = function _r184_t1(r185_code) {
                var r185_code;
                r184_currentGlyph['assign-unicode'](r185_code);
                return r1_unicodeGlyphs[[r184_currentGlyph['unicode'][r184_currentGlyph['unicode']['length'] - 1]]] = r184_currentGlyph;
            };
            r184_xn$startfrom$1aao = _r184_t0['start-from']['bind'](_r184_t0);
            r184_xn$lineto$5sIl = _r184_t0['line-to']['bind'](_r184_t0);
            r184_xn$curveto$1aao = _r184_t0['curve-to']['bind'](_r184_t0);
            r184_xn$cubicto$1aao = _r184_t0['cubic-to']['bind'](_r184_t0);
            r184_xn$putshapes$9Jrj = _r184_t0['put-shapes']['bind'](_r184_t0);
            r184_xn$reverselast$3qIs = _r184_t0['reverse-last']['bind'](_r184_t0);
            r184_include = _r184_t0['include']['bind'](_r184_t0);
            r184_xn$createstroke$7Hrq = _r184_t0['create-stroke']['bind'](_r184_t0);
            r184_xn$setanchor$9Jrj = _r184_t0['set-anchor']['bind'](_r184_t0);
            _r184_t0['gizmo'] = r1_globalTransform;
            _r184_t0['set-width'](r1_WIDTH);
            r184_xn$setwidth$9Jrj(r1_WIDTH);
            r184_xn$assignunicode$7Hrq('t');
            r184_include(r1_bMarks);
            r184_center = r1_MIDDLE - r1_TBALANCE - r1_HALFSTROKE;
            r184_hookx = r184_center + (r1_WIDTH - r1_SB * 2) * 0.78 - r1_OXHOOK + r1_TAILADJX * r1_globalTransform['yx'];
            r184_turn = r1_mix(r184_center, r184_hookx, 0.5 + r1_globalTransform['yx'] * 0.5);
            r184_smb = r184_turn - r184_center;
            r184_xn$putshapes$9Jrj(r184_xn$createstroke$7Hrq()['start-from'](r184_center, r1_CAP)['set-width'](r1_STROKE, 0)['heads-to'](r1_DOWNWARD)['line-to'](r184_center, r184_smb)['arc-vh-to'](r184_turn, r1_O)['curve-to'](r184_turn + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform['yx'] + 0.1) * (r184_hookx - r184_turn), r1_O, r184_hookx, r1_HOOK - r1_TAILADJY * r1_globalTransform['yx'])['to-outline']());
            r184_xn$putshapes$9Jrj(r184_xn$createstroke$7Hrq()['start-from'](r184_center + r1_HALFSTROKE - r1_LONGJUT + r1_TBALANCE2, r1_XH)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r184_center + r1_HALFSTROKE + r1_LONGJUT + r1_TBALANCE2, r1_XH)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('a.upright', function _r1_t93() {
            var r187_currentGlyph, r187_xn$setwidth$9Jrj, r187_xn$assignunicode$7Hrq, r187_xn$startfrom$1aao, r187_xn$lineto$5sIl, r187_xn$curveto$1aao, r187_xn$cubicto$1aao, r187_xn$putshapes$9Jrj, r187_xn$reverselast$3qIs, r187_include, r187_xn$createstroke$7Hrq, r187_xn$setanchor$9Jrj, r187_bartop, _r187_t0, _r187_t1;
            _r187_t0 = this;
            r187_currentGlyph = _r187_t0;
            r187_xn$setwidth$9Jrj = _r187_t0['set-width']['bind'](_r187_t0);
            r187_xn$assignunicode$7Hrq = function _r187_t1(r188_code) {
                var r188_code;
                r187_currentGlyph['assign-unicode'](r188_code);
                return r1_unicodeGlyphs[[r187_currentGlyph['unicode'][r187_currentGlyph['unicode']['length'] - 1]]] = r187_currentGlyph;
            };
            r187_xn$startfrom$1aao = _r187_t0['start-from']['bind'](_r187_t0);
            r187_xn$lineto$5sIl = _r187_t0['line-to']['bind'](_r187_t0);
            r187_xn$curveto$1aao = _r187_t0['curve-to']['bind'](_r187_t0);
            r187_xn$cubicto$1aao = _r187_t0['cubic-to']['bind'](_r187_t0);
            r187_xn$putshapes$9Jrj = _r187_t0['put-shapes']['bind'](_r187_t0);
            r187_xn$reverselast$3qIs = _r187_t0['reverse-last']['bind'](_r187_t0);
            r187_include = _r187_t0['include']['bind'](_r187_t0);
            r187_xn$createstroke$7Hrq = _r187_t0['create-stroke']['bind'](_r187_t0);
            r187_xn$setanchor$9Jrj = _r187_t0['set-anchor']['bind'](_r187_t0);
            _r187_t0['gizmo'] = r1_globalTransform;
            _r187_t0['set-width'](r1_WIDTH);
            r187_xn$setwidth$9Jrj(r1_WIDTH);
            r187_bartop = r1_XH * r1_BARPOS + r1_STROKE;
            r187_xn$putshapes$9Jrj(r187_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_XH - r1_SMOOTHA)['arc-vh-to'](r1_MIDDLE, r1_XO)['heads-to'](r1_LEFTWARD)['curve-to'](r1_MIDDLE - r1_KAPPA_HOOK * (r1_MIDDLE - r1_SB), r1_XO, r1_SB + r1_OXHOOK, r1_XH - r1_AHOOK)['to-outline']());
            r187_xn$putshapes$9Jrj(r187_xn$createstroke$7Hrq()['start-from'](r1_WIDTH * 0.47, r1_O)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r187_bartop * 0.45)['arc-vh-to'](r1_WIDTH * 0.6, r187_bartop)['line-to'](r1_RIGHTSB, r187_bartop)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r187_xn$putshapes$9Jrj(r187_xn$createstroke$7Hrq()['start-from'](r1_WIDTH * 0.47, r1_O + r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB - r1_STROKE, r1_SMALLSMOOTHA * 0.65)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE * 0.4)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('a.italic', function _r1_t94() {
            var r190_currentGlyph, r190_xn$setwidth$9Jrj, r190_xn$assignunicode$7Hrq, r190_xn$startfrom$1aao, r190_xn$lineto$5sIl, r190_xn$curveto$1aao, r190_xn$cubicto$1aao, r190_xn$putshapes$9Jrj, r190_xn$reverselast$3qIs, r190_include, r190_xn$createstroke$7Hrq, r190_xn$setanchor$9Jrj, _r190_t0, _r190_t1;
            _r190_t0 = this;
            r190_currentGlyph = _r190_t0;
            r190_xn$setwidth$9Jrj = _r190_t0['set-width']['bind'](_r190_t0);
            r190_xn$assignunicode$7Hrq = function _r190_t1(r191_code) {
                var r191_code;
                r190_currentGlyph['assign-unicode'](r191_code);
                return r1_unicodeGlyphs[[r190_currentGlyph['unicode'][r190_currentGlyph['unicode']['length'] - 1]]] = r190_currentGlyph;
            };
            r190_xn$startfrom$1aao = _r190_t0['start-from']['bind'](_r190_t0);
            r190_xn$lineto$5sIl = _r190_t0['line-to']['bind'](_r190_t0);
            r190_xn$curveto$1aao = _r190_t0['curve-to']['bind'](_r190_t0);
            r190_xn$cubicto$1aao = _r190_t0['cubic-to']['bind'](_r190_t0);
            r190_xn$putshapes$9Jrj = _r190_t0['put-shapes']['bind'](_r190_t0);
            r190_xn$reverselast$3qIs = _r190_t0['reverse-last']['bind'](_r190_t0);
            r190_include = _r190_t0['include']['bind'](_r190_t0);
            r190_xn$createstroke$7Hrq = _r190_t0['create-stroke']['bind'](_r190_t0);
            r190_xn$setanchor$9Jrj = _r190_t0['set-anchor']['bind'](_r190_t0);
            _r190_t0['gizmo'] = r1_globalTransform;
            _r190_t0['set-width'](r1_WIDTH);
            r190_xn$setwidth$9Jrj(r1_WIDTH);
            r190_include(r1_glyphs['o.right']);
            r190_xn$putshapes$9Jrj(r190_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('a', function _r1_t95() {
            var r193_currentGlyph, r193_xn$setwidth$9Jrj, r193_xn$assignunicode$7Hrq, r193_xn$startfrom$1aao, r193_xn$lineto$5sIl, r193_xn$curveto$1aao, r193_xn$cubicto$1aao, r193_xn$putshapes$9Jrj, r193_xn$reverselast$3qIs, r193_include, r193_xn$createstroke$7Hrq, r193_xn$setanchor$9Jrj, _r193_t0, _r193_t1;
            _r193_t0 = this;
            r193_currentGlyph = _r193_t0;
            r193_xn$setwidth$9Jrj = _r193_t0['set-width']['bind'](_r193_t0);
            r193_xn$assignunicode$7Hrq = function _r193_t1(r194_code) {
                var r194_code;
                r193_currentGlyph['assign-unicode'](r194_code);
                return r1_unicodeGlyphs[[r193_currentGlyph['unicode'][r193_currentGlyph['unicode']['length'] - 1]]] = r193_currentGlyph;
            };
            r193_xn$startfrom$1aao = _r193_t0['start-from']['bind'](_r193_t0);
            r193_xn$lineto$5sIl = _r193_t0['line-to']['bind'](_r193_t0);
            r193_xn$curveto$1aao = _r193_t0['curve-to']['bind'](_r193_t0);
            r193_xn$cubicto$1aao = _r193_t0['cubic-to']['bind'](_r193_t0);
            r193_xn$putshapes$9Jrj = _r193_t0['put-shapes']['bind'](_r193_t0);
            r193_xn$reverselast$3qIs = _r193_t0['reverse-last']['bind'](_r193_t0);
            r193_include = _r193_t0['include']['bind'](_r193_t0);
            r193_xn$createstroke$7Hrq = _r193_t0['create-stroke']['bind'](_r193_t0);
            r193_xn$setanchor$9Jrj = _r193_t0['set-anchor']['bind'](_r193_t0);
            _r193_t0['gizmo'] = r1_globalTransform;
            _r193_t0['set-width'](r1_WIDTH);
            r193_xn$setwidth$9Jrj(r1_WIDTH);
            r193_xn$assignunicode$7Hrq('a');
            r193_include(r1_eMarks);
            if (r1_para['italicangle'] > 0) {
                r193_include(r1_glyphs['a.italic']);
            } else {
                r193_include(r1_glyphs['a.upright']);
            }
            return void 0;
        });
        r1_xn$createglyph$7Hrq('u', function _r1_t96() {
            var r196_currentGlyph, r196_xn$setwidth$9Jrj, r196_xn$assignunicode$7Hrq, r196_xn$startfrom$1aao, r196_xn$lineto$5sIl, r196_xn$curveto$1aao, r196_xn$cubicto$1aao, r196_xn$putshapes$9Jrj, r196_xn$reverselast$3qIs, r196_include, r196_xn$createstroke$7Hrq, r196_xn$setanchor$9Jrj, _r196_t0, _r196_t1;
            _r196_t0 = this;
            r196_currentGlyph = _r196_t0;
            r196_xn$setwidth$9Jrj = _r196_t0['set-width']['bind'](_r196_t0);
            r196_xn$assignunicode$7Hrq = function _r196_t1(r197_code) {
                var r197_code;
                r196_currentGlyph['assign-unicode'](r197_code);
                return r1_unicodeGlyphs[[r196_currentGlyph['unicode'][r196_currentGlyph['unicode']['length'] - 1]]] = r196_currentGlyph;
            };
            r196_xn$startfrom$1aao = _r196_t0['start-from']['bind'](_r196_t0);
            r196_xn$lineto$5sIl = _r196_t0['line-to']['bind'](_r196_t0);
            r196_xn$curveto$1aao = _r196_t0['curve-to']['bind'](_r196_t0);
            r196_xn$cubicto$1aao = _r196_t0['cubic-to']['bind'](_r196_t0);
            r196_xn$putshapes$9Jrj = _r196_t0['put-shapes']['bind'](_r196_t0);
            r196_xn$reverselast$3qIs = _r196_t0['reverse-last']['bind'](_r196_t0);
            r196_include = _r196_t0['include']['bind'](_r196_t0);
            r196_xn$createstroke$7Hrq = _r196_t0['create-stroke']['bind'](_r196_t0);
            r196_xn$setanchor$9Jrj = _r196_t0['set-anchor']['bind'](_r196_t0);
            _r196_t0['gizmo'] = r1_globalTransform;
            _r196_t0['set-width'](r1_WIDTH);
            r196_xn$setwidth$9Jrj(r1_WIDTH);
            r196_xn$assignunicode$7Hrq('u');
            r196_include(r1_eMarks);
            r196_xn$putshapes$9Jrj(r196_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r1_SMALLSMOOTHA)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r196_xn$putshapes$9Jrj(r196_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_O + r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB - r1_STROKE * r1_ITALICCOR, r1_SMALLSMOOTHA)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE * 0.4)['to-outline']());
            r196_xn$putshapes$9Jrj(r196_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('n', function _r1_t97() {
            var r199_currentGlyph, r199_xn$setwidth$9Jrj, r199_xn$assignunicode$7Hrq, r199_xn$startfrom$1aao, r199_xn$lineto$5sIl, r199_xn$curveto$1aao, r199_xn$cubicto$1aao, r199_xn$putshapes$9Jrj, r199_xn$reverselast$3qIs, r199_include, r199_xn$createstroke$7Hrq, r199_xn$setanchor$9Jrj, _r199_t0, _r199_t1;
            _r199_t0 = this;
            r199_currentGlyph = _r199_t0;
            r199_xn$setwidth$9Jrj = _r199_t0['set-width']['bind'](_r199_t0);
            r199_xn$assignunicode$7Hrq = function _r199_t1(r200_code) {
                var r200_code;
                r199_currentGlyph['assign-unicode'](r200_code);
                return r1_unicodeGlyphs[[r199_currentGlyph['unicode'][r199_currentGlyph['unicode']['length'] - 1]]] = r199_currentGlyph;
            };
            r199_xn$startfrom$1aao = _r199_t0['start-from']['bind'](_r199_t0);
            r199_xn$lineto$5sIl = _r199_t0['line-to']['bind'](_r199_t0);
            r199_xn$curveto$1aao = _r199_t0['curve-to']['bind'](_r199_t0);
            r199_xn$cubicto$1aao = _r199_t0['cubic-to']['bind'](_r199_t0);
            r199_xn$putshapes$9Jrj = _r199_t0['put-shapes']['bind'](_r199_t0);
            r199_xn$reverselast$3qIs = _r199_t0['reverse-last']['bind'](_r199_t0);
            r199_include = _r199_t0['include']['bind'](_r199_t0);
            r199_xn$createstroke$7Hrq = _r199_t0['create-stroke']['bind'](_r199_t0);
            r199_xn$setanchor$9Jrj = _r199_t0['set-anchor']['bind'](_r199_t0);
            _r199_t0['gizmo'] = r1_globalTransform;
            _r199_t0['set-width'](r1_WIDTH);
            r199_xn$setwidth$9Jrj(r1_WIDTH);
            r199_xn$assignunicode$7Hrq('n');
            r199_include(r1_eMarks);
            r199_xn$putshapes$9Jrj(r1_nBowl(r1_SB + r1_STROKE * r1_ITALICCOR, r1_MIDDLE, r1_RIGHTSB, r1_STROKE * 0.4));
            r199_xn$putshapes$9Jrj(r199_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('h', function _r1_t98() {
            var r202_currentGlyph, r202_xn$setwidth$9Jrj, r202_xn$assignunicode$7Hrq, r202_xn$startfrom$1aao, r202_xn$lineto$5sIl, r202_xn$curveto$1aao, r202_xn$cubicto$1aao, r202_xn$putshapes$9Jrj, r202_xn$reverselast$3qIs, r202_include, r202_xn$createstroke$7Hrq, r202_xn$setanchor$9Jrj, _r202_t0, _r202_t1;
            _r202_t0 = this;
            r202_currentGlyph = _r202_t0;
            r202_xn$setwidth$9Jrj = _r202_t0['set-width']['bind'](_r202_t0);
            r202_xn$assignunicode$7Hrq = function _r202_t1(r203_code) {
                var r203_code;
                r202_currentGlyph['assign-unicode'](r203_code);
                return r1_unicodeGlyphs[[r202_currentGlyph['unicode'][r202_currentGlyph['unicode']['length'] - 1]]] = r202_currentGlyph;
            };
            r202_xn$startfrom$1aao = _r202_t0['start-from']['bind'](_r202_t0);
            r202_xn$lineto$5sIl = _r202_t0['line-to']['bind'](_r202_t0);
            r202_xn$curveto$1aao = _r202_t0['curve-to']['bind'](_r202_t0);
            r202_xn$cubicto$1aao = _r202_t0['cubic-to']['bind'](_r202_t0);
            r202_xn$putshapes$9Jrj = _r202_t0['put-shapes']['bind'](_r202_t0);
            r202_xn$reverselast$3qIs = _r202_t0['reverse-last']['bind'](_r202_t0);
            r202_include = _r202_t0['include']['bind'](_r202_t0);
            r202_xn$createstroke$7Hrq = _r202_t0['create-stroke']['bind'](_r202_t0);
            r202_xn$setanchor$9Jrj = _r202_t0['set-anchor']['bind'](_r202_t0);
            _r202_t0['gizmo'] = r1_globalTransform;
            _r202_t0['set-width'](r1_WIDTH);
            r202_xn$setwidth$9Jrj(r1_WIDTH);
            r202_xn$assignunicode$7Hrq('h');
            r202_include(r1_bMarks);
            r202_xn$putshapes$9Jrj(r1_nBowl(r1_SB + r1_STROKE * r1_ITALICCOR, r1_MIDDLE, r1_RIGHTSB, r1_STROKE * 0.4));
            r202_xn$putshapes$9Jrj(r202_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('m', function _r1_t99() {
            var r205_currentGlyph, r205_xn$setwidth$9Jrj, r205_xn$assignunicode$7Hrq, r205_xn$startfrom$1aao, r205_xn$lineto$5sIl, r205_xn$curveto$1aao, r205_xn$cubicto$1aao, r205_xn$putshapes$9Jrj, r205_xn$reverselast$3qIs, r205_include, r205_xn$createstroke$7Hrq, r205_xn$setanchor$9Jrj, r205_sw, r205_m1, r205_m2, _r205_t0, _r205_t1;
            _r205_t0 = this;
            r205_currentGlyph = _r205_t0;
            r205_xn$setwidth$9Jrj = _r205_t0['set-width']['bind'](_r205_t0);
            r205_xn$assignunicode$7Hrq = function _r205_t1(r206_code) {
                var r206_code;
                r205_currentGlyph['assign-unicode'](r206_code);
                return r1_unicodeGlyphs[[r205_currentGlyph['unicode'][r205_currentGlyph['unicode']['length'] - 1]]] = r205_currentGlyph;
            };
            r205_xn$startfrom$1aao = _r205_t0['start-from']['bind'](_r205_t0);
            r205_xn$lineto$5sIl = _r205_t0['line-to']['bind'](_r205_t0);
            r205_xn$curveto$1aao = _r205_t0['curve-to']['bind'](_r205_t0);
            r205_xn$cubicto$1aao = _r205_t0['cubic-to']['bind'](_r205_t0);
            r205_xn$putshapes$9Jrj = _r205_t0['put-shapes']['bind'](_r205_t0);
            r205_xn$reverselast$3qIs = _r205_t0['reverse-last']['bind'](_r205_t0);
            r205_include = _r205_t0['include']['bind'](_r205_t0);
            r205_xn$createstroke$7Hrq = _r205_t0['create-stroke']['bind'](_r205_t0);
            r205_xn$setanchor$9Jrj = _r205_t0['set-anchor']['bind'](_r205_t0);
            _r205_t0['gizmo'] = r1_globalTransform;
            _r205_t0['set-width'](r1_WIDTH);
            r205_xn$setwidth$9Jrj(r1_WIDTH);
            r205_xn$assignunicode$7Hrq('m');
            r205_include(r1_eMarks);
            r205_sw = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.26);
            r205_m1 = (r1_MIDDLE + r1_SB + r205_sw * 0.25) / 2;
            r205_m2 = r205_m1 + (r1_MIDDLE - r205_sw / 2 - r1_SB);
            r205_xn$putshapes$9Jrj(r205_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r205_sw / 2, 0)['set-width'](0, r205_sw)['heads-to'](r1_UPWARD)['line-to'](r1_MIDDLE - r205_sw / 2, r1_XH - r1_SMALLSMOOTHA)['arc-vh-to'](r205_m1, r1_XO - r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r205_sw * 0.75, r1_XH - r1_SMALLSMOOTHA)['heads-to'](r1_DOWNWARD)['set-width'](0, r205_sw * 0.4)['to-outline']());
            r205_xn$putshapes$9Jrj(r205_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB - r205_sw - r1_O, 0)['set-width'](0, r205_sw)['heads-to'](r1_UPWARD)['line-to'](r1_RIGHTSB - r205_sw - r1_O, r1_XH - r1_SMALLSMOOTHA)['arc-vh-to'](r205_m2, r1_XO - r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_MIDDLE + r205_sw * 0.25, r1_XH - r1_SMALLSMOOTHA)['heads-to'](r1_DOWNWARD)['set-width'](0, r205_sw * 0.4)['to-outline']());
            r205_xn$putshapes$9Jrj(r205_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_O, 0)['heads-to'](r1_UPWARD)['set-width'](0, r205_sw)['line-to'](r1_SB + r1_O, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessi.straight', function _r1_t100() {
            var r208_currentGlyph, r208_xn$setwidth$9Jrj, r208_xn$assignunicode$7Hrq, r208_xn$startfrom$1aao, r208_xn$lineto$5sIl, r208_xn$curveto$1aao, r208_xn$cubicto$1aao, r208_xn$putshapes$9Jrj, r208_xn$reverselast$3qIs, r208_include, r208_xn$createstroke$7Hrq, r208_xn$setanchor$9Jrj, _r208_t0, _r208_t1;
            _r208_t0 = this;
            r208_currentGlyph = _r208_t0;
            r208_xn$setwidth$9Jrj = _r208_t0['set-width']['bind'](_r208_t0);
            r208_xn$assignunicode$7Hrq = function _r208_t1(r209_code) {
                var r209_code;
                r208_currentGlyph['assign-unicode'](r209_code);
                return r1_unicodeGlyphs[[r208_currentGlyph['unicode'][r208_currentGlyph['unicode']['length'] - 1]]] = r208_currentGlyph;
            };
            r208_xn$startfrom$1aao = _r208_t0['start-from']['bind'](_r208_t0);
            r208_xn$lineto$5sIl = _r208_t0['line-to']['bind'](_r208_t0);
            r208_xn$curveto$1aao = _r208_t0['curve-to']['bind'](_r208_t0);
            r208_xn$cubicto$1aao = _r208_t0['cubic-to']['bind'](_r208_t0);
            r208_xn$putshapes$9Jrj = _r208_t0['put-shapes']['bind'](_r208_t0);
            r208_xn$reverselast$3qIs = _r208_t0['reverse-last']['bind'](_r208_t0);
            r208_include = _r208_t0['include']['bind'](_r208_t0);
            r208_xn$createstroke$7Hrq = _r208_t0['create-stroke']['bind'](_r208_t0);
            r208_xn$setanchor$9Jrj = _r208_t0['set-anchor']['bind'](_r208_t0);
            _r208_t0['gizmo'] = r1_globalTransform;
            _r208_t0['set-width'](r1_WIDTH);
            r208_include(r1_eMarks);
            r208_xn$putshapes$9Jrj(r208_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessi.hooky', function _r1_t101() {
            var r211_currentGlyph, r211_xn$setwidth$9Jrj, r211_xn$assignunicode$7Hrq, r211_xn$startfrom$1aao, r211_xn$lineto$5sIl, r211_xn$curveto$1aao, r211_xn$cubicto$1aao, r211_xn$putshapes$9Jrj, r211_xn$reverselast$3qIs, r211_include, r211_xn$createstroke$7Hrq, r211_xn$setanchor$9Jrj, _r211_t0, _r211_t1;
            _r211_t0 = this;
            r211_currentGlyph = _r211_t0;
            r211_xn$setwidth$9Jrj = _r211_t0['set-width']['bind'](_r211_t0);
            r211_xn$assignunicode$7Hrq = function _r211_t1(r212_code) {
                var r212_code;
                r211_currentGlyph['assign-unicode'](r212_code);
                return r1_unicodeGlyphs[[r211_currentGlyph['unicode'][r211_currentGlyph['unicode']['length'] - 1]]] = r211_currentGlyph;
            };
            r211_xn$startfrom$1aao = _r211_t0['start-from']['bind'](_r211_t0);
            r211_xn$lineto$5sIl = _r211_t0['line-to']['bind'](_r211_t0);
            r211_xn$curveto$1aao = _r211_t0['curve-to']['bind'](_r211_t0);
            r211_xn$cubicto$1aao = _r211_t0['cubic-to']['bind'](_r211_t0);
            r211_xn$putshapes$9Jrj = _r211_t0['put-shapes']['bind'](_r211_t0);
            r211_xn$reverselast$3qIs = _r211_t0['reverse-last']['bind'](_r211_t0);
            r211_include = _r211_t0['include']['bind'](_r211_t0);
            r211_xn$createstroke$7Hrq = _r211_t0['create-stroke']['bind'](_r211_t0);
            r211_xn$setanchor$9Jrj = _r211_t0['set-anchor']['bind'](_r211_t0);
            _r211_t0['gizmo'] = r1_globalTransform;
            _r211_t0['set-width'](r1_WIDTH);
            r211_include(r1_glyphs['dotlessi.straight'], true);
            r211_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE, r1_XH, r1_LONGJUT));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessi.zshaped', function _r1_t102() {
            var r214_currentGlyph, r214_xn$setwidth$9Jrj, r214_xn$assignunicode$7Hrq, r214_xn$startfrom$1aao, r214_xn$lineto$5sIl, r214_xn$curveto$1aao, r214_xn$cubicto$1aao, r214_xn$putshapes$9Jrj, r214_xn$reverselast$3qIs, r214_include, r214_xn$createstroke$7Hrq, r214_xn$setanchor$9Jrj, _r214_t0, _r214_t1;
            _r214_t0 = this;
            r214_currentGlyph = _r214_t0;
            r214_xn$setwidth$9Jrj = _r214_t0['set-width']['bind'](_r214_t0);
            r214_xn$assignunicode$7Hrq = function _r214_t1(r215_code) {
                var r215_code;
                r214_currentGlyph['assign-unicode'](r215_code);
                return r1_unicodeGlyphs[[r214_currentGlyph['unicode'][r214_currentGlyph['unicode']['length'] - 1]]] = r214_currentGlyph;
            };
            r214_xn$startfrom$1aao = _r214_t0['start-from']['bind'](_r214_t0);
            r214_xn$lineto$5sIl = _r214_t0['line-to']['bind'](_r214_t0);
            r214_xn$curveto$1aao = _r214_t0['curve-to']['bind'](_r214_t0);
            r214_xn$cubicto$1aao = _r214_t0['cubic-to']['bind'](_r214_t0);
            r214_xn$putshapes$9Jrj = _r214_t0['put-shapes']['bind'](_r214_t0);
            r214_xn$reverselast$3qIs = _r214_t0['reverse-last']['bind'](_r214_t0);
            r214_include = _r214_t0['include']['bind'](_r214_t0);
            r214_xn$createstroke$7Hrq = _r214_t0['create-stroke']['bind'](_r214_t0);
            r214_xn$setanchor$9Jrj = _r214_t0['set-anchor']['bind'](_r214_t0);
            _r214_t0['gizmo'] = r1_globalTransform;
            _r214_t0['set-width'](r1_WIDTH);
            r214_include(r1_glyphs['dotlessi.hooky'], true);
            r214_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessi.serifed', function _r1_t103() {
            var r217_currentGlyph, r217_xn$setwidth$9Jrj, r217_xn$assignunicode$7Hrq, r217_xn$startfrom$1aao, r217_xn$lineto$5sIl, r217_xn$curveto$1aao, r217_xn$cubicto$1aao, r217_xn$putshapes$9Jrj, r217_xn$reverselast$3qIs, r217_include, r217_xn$createstroke$7Hrq, r217_xn$setanchor$9Jrj, r217_balance, _r217_t0, _r217_t1;
            _r217_t0 = this;
            r217_currentGlyph = _r217_t0;
            r217_xn$setwidth$9Jrj = _r217_t0['set-width']['bind'](_r217_t0);
            r217_xn$assignunicode$7Hrq = function _r217_t1(r218_code) {
                var r218_code;
                r217_currentGlyph['assign-unicode'](r218_code);
                return r1_unicodeGlyphs[[r217_currentGlyph['unicode'][r217_currentGlyph['unicode']['length'] - 1]]] = r217_currentGlyph;
            };
            r217_xn$startfrom$1aao = _r217_t0['start-from']['bind'](_r217_t0);
            r217_xn$lineto$5sIl = _r217_t0['line-to']['bind'](_r217_t0);
            r217_xn$curveto$1aao = _r217_t0['curve-to']['bind'](_r217_t0);
            r217_xn$cubicto$1aao = _r217_t0['cubic-to']['bind'](_r217_t0);
            r217_xn$putshapes$9Jrj = _r217_t0['put-shapes']['bind'](_r217_t0);
            r217_xn$reverselast$3qIs = _r217_t0['reverse-last']['bind'](_r217_t0);
            r217_include = _r217_t0['include']['bind'](_r217_t0);
            r217_xn$createstroke$7Hrq = _r217_t0['create-stroke']['bind'](_r217_t0);
            r217_xn$setanchor$9Jrj = _r217_t0['set-anchor']['bind'](_r217_t0);
            _r217_t0['gizmo'] = r1_globalTransform;
            _r217_t0['set-width'](r1_WIDTH);
            r217_include(r1_eMarks);
            r217_balance = r1_ILBALANCE;
            r217_xn$putshapes$9Jrj(r217_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r217_balance, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE + r217_balance, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            r217_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r217_balance, r1_XH, r1_LONGJUT - r217_balance));
            r217_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            r217_xn$putshapes$9Jrj(r1_leftwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            return void 0;
        });
        r1_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r1_xn$createglyph$7Hrq('i', function _r1_t104() {
            var r220_currentGlyph, r220_xn$setwidth$9Jrj, r220_xn$assignunicode$7Hrq, r220_xn$startfrom$1aao, r220_xn$lineto$5sIl, r220_xn$curveto$1aao, r220_xn$cubicto$1aao, r220_xn$putshapes$9Jrj, r220_xn$reverselast$3qIs, r220_include, r220_xn$createstroke$7Hrq, r220_xn$setanchor$9Jrj, _r220_t0, _r220_t1;
            _r220_t0 = this;
            r220_currentGlyph = _r220_t0;
            r220_xn$setwidth$9Jrj = _r220_t0['set-width']['bind'](_r220_t0);
            r220_xn$assignunicode$7Hrq = function _r220_t1(r221_code) {
                var r221_code;
                r220_currentGlyph['assign-unicode'](r221_code);
                return r1_unicodeGlyphs[[r220_currentGlyph['unicode'][r220_currentGlyph['unicode']['length'] - 1]]] = r220_currentGlyph;
            };
            r220_xn$startfrom$1aao = _r220_t0['start-from']['bind'](_r220_t0);
            r220_xn$lineto$5sIl = _r220_t0['line-to']['bind'](_r220_t0);
            r220_xn$curveto$1aao = _r220_t0['curve-to']['bind'](_r220_t0);
            r220_xn$cubicto$1aao = _r220_t0['cubic-to']['bind'](_r220_t0);
            r220_xn$putshapes$9Jrj = _r220_t0['put-shapes']['bind'](_r220_t0);
            r220_xn$reverselast$3qIs = _r220_t0['reverse-last']['bind'](_r220_t0);
            r220_include = _r220_t0['include']['bind'](_r220_t0);
            r220_xn$createstroke$7Hrq = _r220_t0['create-stroke']['bind'](_r220_t0);
            r220_xn$setanchor$9Jrj = _r220_t0['set-anchor']['bind'](_r220_t0);
            _r220_t0['gizmo'] = r1_globalTransform;
            _r220_t0['set-width'](r1_WIDTH);
            r220_xn$setwidth$9Jrj(r1_WIDTH);
            r220_xn$assignunicode$7Hrq('i');
            r220_include(r1_glyphs['dotlessi'], r1_BASE);
            r220_include(r1_glyphs['dotAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessj.straight', function _r1_t105() {
            var r223_currentGlyph, r223_xn$setwidth$9Jrj, r223_xn$assignunicode$7Hrq, r223_xn$startfrom$1aao, r223_xn$lineto$5sIl, r223_xn$curveto$1aao, r223_xn$cubicto$1aao, r223_xn$putshapes$9Jrj, r223_xn$reverselast$3qIs, r223_include, r223_xn$createstroke$7Hrq, r223_xn$setanchor$9Jrj, _r223_t0, _r223_t1;
            _r223_t0 = this;
            r223_currentGlyph = _r223_t0;
            r223_xn$setwidth$9Jrj = _r223_t0['set-width']['bind'](_r223_t0);
            r223_xn$assignunicode$7Hrq = function _r223_t1(r224_code) {
                var r224_code;
                r223_currentGlyph['assign-unicode'](r224_code);
                return r1_unicodeGlyphs[[r223_currentGlyph['unicode'][r223_currentGlyph['unicode']['length'] - 1]]] = r223_currentGlyph;
            };
            r223_xn$startfrom$1aao = _r223_t0['start-from']['bind'](_r223_t0);
            r223_xn$lineto$5sIl = _r223_t0['line-to']['bind'](_r223_t0);
            r223_xn$curveto$1aao = _r223_t0['curve-to']['bind'](_r223_t0);
            r223_xn$cubicto$1aao = _r223_t0['cubic-to']['bind'](_r223_t0);
            r223_xn$putshapes$9Jrj = _r223_t0['put-shapes']['bind'](_r223_t0);
            r223_xn$reverselast$3qIs = _r223_t0['reverse-last']['bind'](_r223_t0);
            r223_include = _r223_t0['include']['bind'](_r223_t0);
            r223_xn$createstroke$7Hrq = _r223_t0['create-stroke']['bind'](_r223_t0);
            r223_xn$setanchor$9Jrj = _r223_t0['set-anchor']['bind'](_r223_t0);
            _r223_t0['gizmo'] = r1_globalTransform;
            _r223_t0['set-width'](r1_WIDTH);
            r223_xn$setanchor$9Jrj('above', r1_BASE, r1_MIDDLE + r1_JBALANCE, r1_XH);
            r223_xn$putshapes$9Jrj(r223_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r1_JBALANCE, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE + r1_JBALANCE, 0)['arc-vh-to'](r1_MIDDLE + r1_DESCENDER, r1_DESCENDER + r1_HALFSTROKE)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dotlessj.serifed', function _r1_t106() {
            var r226_currentGlyph, r226_xn$setwidth$9Jrj, r226_xn$assignunicode$7Hrq, r226_xn$startfrom$1aao, r226_xn$lineto$5sIl, r226_xn$curveto$1aao, r226_xn$cubicto$1aao, r226_xn$putshapes$9Jrj, r226_xn$reverselast$3qIs, r226_include, r226_xn$createstroke$7Hrq, r226_xn$setanchor$9Jrj, _r226_t0, _r226_t1;
            _r226_t0 = this;
            r226_currentGlyph = _r226_t0;
            r226_xn$setwidth$9Jrj = _r226_t0['set-width']['bind'](_r226_t0);
            r226_xn$assignunicode$7Hrq = function _r226_t1(r227_code) {
                var r227_code;
                r226_currentGlyph['assign-unicode'](r227_code);
                return r1_unicodeGlyphs[[r226_currentGlyph['unicode'][r226_currentGlyph['unicode']['length'] - 1]]] = r226_currentGlyph;
            };
            r226_xn$startfrom$1aao = _r226_t0['start-from']['bind'](_r226_t0);
            r226_xn$lineto$5sIl = _r226_t0['line-to']['bind'](_r226_t0);
            r226_xn$curveto$1aao = _r226_t0['curve-to']['bind'](_r226_t0);
            r226_xn$cubicto$1aao = _r226_t0['cubic-to']['bind'](_r226_t0);
            r226_xn$putshapes$9Jrj = _r226_t0['put-shapes']['bind'](_r226_t0);
            r226_xn$reverselast$3qIs = _r226_t0['reverse-last']['bind'](_r226_t0);
            r226_include = _r226_t0['include']['bind'](_r226_t0);
            r226_xn$createstroke$7Hrq = _r226_t0['create-stroke']['bind'](_r226_t0);
            r226_xn$setanchor$9Jrj = _r226_t0['set-anchor']['bind'](_r226_t0);
            _r226_t0['gizmo'] = r1_globalTransform;
            _r226_t0['set-width'](r1_WIDTH);
            r226_include(r1_glyphs['dotlessj.straight'], r1_BASE);
            r226_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r1_JBALANCE, r1_XH, r1_LONGJUT));
            return void 0;
        });
        r1_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r1_xn$createglyph$7Hrq('j', function _r1_t107() {
            var r229_currentGlyph, r229_xn$setwidth$9Jrj, r229_xn$assignunicode$7Hrq, r229_xn$startfrom$1aao, r229_xn$lineto$5sIl, r229_xn$curveto$1aao, r229_xn$cubicto$1aao, r229_xn$putshapes$9Jrj, r229_xn$reverselast$3qIs, r229_include, r229_xn$createstroke$7Hrq, r229_xn$setanchor$9Jrj, _r229_t0, _r229_t1;
            _r229_t0 = this;
            r229_currentGlyph = _r229_t0;
            r229_xn$setwidth$9Jrj = _r229_t0['set-width']['bind'](_r229_t0);
            r229_xn$assignunicode$7Hrq = function _r229_t1(r230_code) {
                var r230_code;
                r229_currentGlyph['assign-unicode'](r230_code);
                return r1_unicodeGlyphs[[r229_currentGlyph['unicode'][r229_currentGlyph['unicode']['length'] - 1]]] = r229_currentGlyph;
            };
            r229_xn$startfrom$1aao = _r229_t0['start-from']['bind'](_r229_t0);
            r229_xn$lineto$5sIl = _r229_t0['line-to']['bind'](_r229_t0);
            r229_xn$curveto$1aao = _r229_t0['curve-to']['bind'](_r229_t0);
            r229_xn$cubicto$1aao = _r229_t0['cubic-to']['bind'](_r229_t0);
            r229_xn$putshapes$9Jrj = _r229_t0['put-shapes']['bind'](_r229_t0);
            r229_xn$reverselast$3qIs = _r229_t0['reverse-last']['bind'](_r229_t0);
            r229_include = _r229_t0['include']['bind'](_r229_t0);
            r229_xn$createstroke$7Hrq = _r229_t0['create-stroke']['bind'](_r229_t0);
            r229_xn$setanchor$9Jrj = _r229_t0['set-anchor']['bind'](_r229_t0);
            _r229_t0['gizmo'] = r1_globalTransform;
            _r229_t0['set-width'](r1_WIDTH);
            r229_xn$setwidth$9Jrj(r1_WIDTH);
            r229_xn$assignunicode$7Hrq('j');
            r229_include(r1_glyphs['dotlessj'], r1_BASE);
            r229_include(r1_glyphs['dotAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('l.straight', function _r1_t108() {
            var r232_currentGlyph, r232_xn$setwidth$9Jrj, r232_xn$assignunicode$7Hrq, r232_xn$startfrom$1aao, r232_xn$lineto$5sIl, r232_xn$curveto$1aao, r232_xn$cubicto$1aao, r232_xn$putshapes$9Jrj, r232_xn$reverselast$3qIs, r232_include, r232_xn$createstroke$7Hrq, r232_xn$setanchor$9Jrj, _r232_t0, _r232_t1;
            _r232_t0 = this;
            r232_currentGlyph = _r232_t0;
            r232_xn$setwidth$9Jrj = _r232_t0['set-width']['bind'](_r232_t0);
            r232_xn$assignunicode$7Hrq = function _r232_t1(r233_code) {
                var r233_code;
                r232_currentGlyph['assign-unicode'](r233_code);
                return r1_unicodeGlyphs[[r232_currentGlyph['unicode'][r232_currentGlyph['unicode']['length'] - 1]]] = r232_currentGlyph;
            };
            r232_xn$startfrom$1aao = _r232_t0['start-from']['bind'](_r232_t0);
            r232_xn$lineto$5sIl = _r232_t0['line-to']['bind'](_r232_t0);
            r232_xn$curveto$1aao = _r232_t0['curve-to']['bind'](_r232_t0);
            r232_xn$cubicto$1aao = _r232_t0['cubic-to']['bind'](_r232_t0);
            r232_xn$putshapes$9Jrj = _r232_t0['put-shapes']['bind'](_r232_t0);
            r232_xn$reverselast$3qIs = _r232_t0['reverse-last']['bind'](_r232_t0);
            r232_include = _r232_t0['include']['bind'](_r232_t0);
            r232_xn$createstroke$7Hrq = _r232_t0['create-stroke']['bind'](_r232_t0);
            r232_xn$setanchor$9Jrj = _r232_t0['set-anchor']['bind'](_r232_t0);
            _r232_t0['gizmo'] = r1_globalTransform;
            _r232_t0['set-width'](r1_WIDTH);
            r232_include(r1_bMarks);
            r232_xn$putshapes$9Jrj(r232_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('l.hooky', function _r1_t109() {
            var r235_currentGlyph, r235_xn$setwidth$9Jrj, r235_xn$assignunicode$7Hrq, r235_xn$startfrom$1aao, r235_xn$lineto$5sIl, r235_xn$curveto$1aao, r235_xn$cubicto$1aao, r235_xn$putshapes$9Jrj, r235_xn$reverselast$3qIs, r235_include, r235_xn$createstroke$7Hrq, r235_xn$setanchor$9Jrj, _r235_t0, _r235_t1;
            _r235_t0 = this;
            r235_currentGlyph = _r235_t0;
            r235_xn$setwidth$9Jrj = _r235_t0['set-width']['bind'](_r235_t0);
            r235_xn$assignunicode$7Hrq = function _r235_t1(r236_code) {
                var r236_code;
                r235_currentGlyph['assign-unicode'](r236_code);
                return r1_unicodeGlyphs[[r235_currentGlyph['unicode'][r235_currentGlyph['unicode']['length'] - 1]]] = r235_currentGlyph;
            };
            r235_xn$startfrom$1aao = _r235_t0['start-from']['bind'](_r235_t0);
            r235_xn$lineto$5sIl = _r235_t0['line-to']['bind'](_r235_t0);
            r235_xn$curveto$1aao = _r235_t0['curve-to']['bind'](_r235_t0);
            r235_xn$cubicto$1aao = _r235_t0['cubic-to']['bind'](_r235_t0);
            r235_xn$putshapes$9Jrj = _r235_t0['put-shapes']['bind'](_r235_t0);
            r235_xn$reverselast$3qIs = _r235_t0['reverse-last']['bind'](_r235_t0);
            r235_include = _r235_t0['include']['bind'](_r235_t0);
            r235_xn$createstroke$7Hrq = _r235_t0['create-stroke']['bind'](_r235_t0);
            r235_xn$setanchor$9Jrj = _r235_t0['set-anchor']['bind'](_r235_t0);
            _r235_t0['gizmo'] = r1_globalTransform;
            _r235_t0['set-width'](r1_WIDTH);
            r235_include(r1_bMarks);
            r235_include(r1_glyphs['l.straight']);
            r235_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE, r1_CAP, r1_LONGJUT));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('l.zshaped', function _r1_t110() {
            var r238_currentGlyph, r238_xn$setwidth$9Jrj, r238_xn$assignunicode$7Hrq, r238_xn$startfrom$1aao, r238_xn$lineto$5sIl, r238_xn$curveto$1aao, r238_xn$cubicto$1aao, r238_xn$putshapes$9Jrj, r238_xn$reverselast$3qIs, r238_include, r238_xn$createstroke$7Hrq, r238_xn$setanchor$9Jrj, _r238_t0, _r238_t1;
            _r238_t0 = this;
            r238_currentGlyph = _r238_t0;
            r238_xn$setwidth$9Jrj = _r238_t0['set-width']['bind'](_r238_t0);
            r238_xn$assignunicode$7Hrq = function _r238_t1(r239_code) {
                var r239_code;
                r238_currentGlyph['assign-unicode'](r239_code);
                return r1_unicodeGlyphs[[r238_currentGlyph['unicode'][r238_currentGlyph['unicode']['length'] - 1]]] = r238_currentGlyph;
            };
            r238_xn$startfrom$1aao = _r238_t0['start-from']['bind'](_r238_t0);
            r238_xn$lineto$5sIl = _r238_t0['line-to']['bind'](_r238_t0);
            r238_xn$curveto$1aao = _r238_t0['curve-to']['bind'](_r238_t0);
            r238_xn$cubicto$1aao = _r238_t0['cubic-to']['bind'](_r238_t0);
            r238_xn$putshapes$9Jrj = _r238_t0['put-shapes']['bind'](_r238_t0);
            r238_xn$reverselast$3qIs = _r238_t0['reverse-last']['bind'](_r238_t0);
            r238_include = _r238_t0['include']['bind'](_r238_t0);
            r238_xn$createstroke$7Hrq = _r238_t0['create-stroke']['bind'](_r238_t0);
            r238_xn$setanchor$9Jrj = _r238_t0['set-anchor']['bind'](_r238_t0);
            _r238_t0['gizmo'] = r1_globalTransform;
            _r238_t0['set-width'](r1_WIDTH);
            r238_include(r1_bMarks);
            r238_include(r1_glyphs['l.hooky']);
            r238_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('l.serifed', function _r1_t111() {
            var r241_currentGlyph, r241_xn$setwidth$9Jrj, r241_xn$assignunicode$7Hrq, r241_xn$startfrom$1aao, r241_xn$lineto$5sIl, r241_xn$curveto$1aao, r241_xn$cubicto$1aao, r241_xn$putshapes$9Jrj, r241_xn$reverselast$3qIs, r241_include, r241_xn$createstroke$7Hrq, r241_xn$setanchor$9Jrj, r241_balance, _r241_t0, _r241_t1;
            _r241_t0 = this;
            r241_currentGlyph = _r241_t0;
            r241_xn$setwidth$9Jrj = _r241_t0['set-width']['bind'](_r241_t0);
            r241_xn$assignunicode$7Hrq = function _r241_t1(r242_code) {
                var r242_code;
                r241_currentGlyph['assign-unicode'](r242_code);
                return r1_unicodeGlyphs[[r241_currentGlyph['unicode'][r241_currentGlyph['unicode']['length'] - 1]]] = r241_currentGlyph;
            };
            r241_xn$startfrom$1aao = _r241_t0['start-from']['bind'](_r241_t0);
            r241_xn$lineto$5sIl = _r241_t0['line-to']['bind'](_r241_t0);
            r241_xn$curveto$1aao = _r241_t0['curve-to']['bind'](_r241_t0);
            r241_xn$cubicto$1aao = _r241_t0['cubic-to']['bind'](_r241_t0);
            r241_xn$putshapes$9Jrj = _r241_t0['put-shapes']['bind'](_r241_t0);
            r241_xn$reverselast$3qIs = _r241_t0['reverse-last']['bind'](_r241_t0);
            r241_include = _r241_t0['include']['bind'](_r241_t0);
            r241_xn$createstroke$7Hrq = _r241_t0['create-stroke']['bind'](_r241_t0);
            r241_xn$setanchor$9Jrj = _r241_t0['set-anchor']['bind'](_r241_t0);
            _r241_t0['gizmo'] = r1_globalTransform;
            _r241_t0['set-width'](r1_WIDTH);
            r241_include(r1_bMarks);
            r241_balance = r1_ILBALANCE;
            r241_xn$putshapes$9Jrj(r241_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r241_balance, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE + r241_balance, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r241_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r241_balance, r1_CAP, r1_LONGJUT - r241_balance));
            r241_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            r241_xn$putshapes$9Jrj(r1_leftwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
            return void 0;
        });
        r1_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r1_xn$createglyph$7Hrq('x', function _r1_t112() {
            var r244_currentGlyph, r244_xn$setwidth$9Jrj, r244_xn$assignunicode$7Hrq, r244_xn$startfrom$1aao, r244_xn$lineto$5sIl, r244_xn$curveto$1aao, r244_xn$cubicto$1aao, r244_xn$putshapes$9Jrj, r244_xn$reverselast$3qIs, r244_include, r244_xn$createstroke$7Hrq, r244_xn$setanchor$9Jrj, r244_TURN, r244_barone, r244_bartwo, _r244_t0, _r244_t1;
            _r244_t0 = this;
            r244_currentGlyph = _r244_t0;
            r244_xn$setwidth$9Jrj = _r244_t0['set-width']['bind'](_r244_t0);
            r244_xn$assignunicode$7Hrq = function _r244_t1(r245_code) {
                var r245_code;
                r244_currentGlyph['assign-unicode'](r245_code);
                return r1_unicodeGlyphs[[r244_currentGlyph['unicode'][r244_currentGlyph['unicode']['length'] - 1]]] = r244_currentGlyph;
            };
            r244_xn$startfrom$1aao = _r244_t0['start-from']['bind'](_r244_t0);
            r244_xn$lineto$5sIl = _r244_t0['line-to']['bind'](_r244_t0);
            r244_xn$curveto$1aao = _r244_t0['curve-to']['bind'](_r244_t0);
            r244_xn$cubicto$1aao = _r244_t0['cubic-to']['bind'](_r244_t0);
            r244_xn$putshapes$9Jrj = _r244_t0['put-shapes']['bind'](_r244_t0);
            r244_xn$reverselast$3qIs = _r244_t0['reverse-last']['bind'](_r244_t0);
            r244_include = _r244_t0['include']['bind'](_r244_t0);
            r244_xn$createstroke$7Hrq = _r244_t0['create-stroke']['bind'](_r244_t0);
            r244_xn$setanchor$9Jrj = _r244_t0['set-anchor']['bind'](_r244_t0);
            _r244_t0['gizmo'] = r1_globalTransform;
            _r244_t0['set-width'](r1_WIDTH);
            r244_xn$setwidth$9Jrj(r1_WIDTH);
            r244_xn$assignunicode$7Hrq('x');
            r244_include(r1_eMarks);
            r244_TURN = r1_XH * 0.1;
            r244_barone = r244_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_HALFSTROKE + r1_O, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['cubic-to'](r1_SB + r1_HALFSTROKE + r1_O, r244_TURN + 0.17 * (r1_XH - r244_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH - r244_TURN - 0.17 * (r1_XH - r244_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH)['heads-to'](r1_UPWARD);
            r244_bartwo = r244_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB - r1_HALFSTROKE - r1_O, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['cubic-to'](r1_RIGHTSB - r1_HALFSTROKE - r1_O, r244_TURN + 0.17 * (r1_XH - r244_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH - r244_TURN - 0.17 * (r1_XH - r244_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH)['heads-to'](r1_UPWARD);
            r244_xn$putshapes$9Jrj(r244_barone['to-outline']());
            r244_xn$putshapes$9Jrj(r244_bartwo['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('v', function _r1_t113() {
            var r247_currentGlyph, r247_xn$setwidth$9Jrj, r247_xn$assignunicode$7Hrq, r247_xn$startfrom$1aao, r247_xn$lineto$5sIl, r247_xn$curveto$1aao, r247_xn$cubicto$1aao, r247_xn$putshapes$9Jrj, r247_xn$reverselast$3qIs, r247_include, r247_xn$createstroke$7Hrq, r247_xn$setanchor$9Jrj, r247_TURN, r247_leftbar, r247_rightbar, _r247_t0, _r247_t1;
            _r247_t0 = this;
            r247_currentGlyph = _r247_t0;
            r247_xn$setwidth$9Jrj = _r247_t0['set-width']['bind'](_r247_t0);
            r247_xn$assignunicode$7Hrq = function _r247_t1(r248_code) {
                var r248_code;
                r247_currentGlyph['assign-unicode'](r248_code);
                return r1_unicodeGlyphs[[r247_currentGlyph['unicode'][r247_currentGlyph['unicode']['length'] - 1]]] = r247_currentGlyph;
            };
            r247_xn$startfrom$1aao = _r247_t0['start-from']['bind'](_r247_t0);
            r247_xn$lineto$5sIl = _r247_t0['line-to']['bind'](_r247_t0);
            r247_xn$curveto$1aao = _r247_t0['curve-to']['bind'](_r247_t0);
            r247_xn$cubicto$1aao = _r247_t0['cubic-to']['bind'](_r247_t0);
            r247_xn$putshapes$9Jrj = _r247_t0['put-shapes']['bind'](_r247_t0);
            r247_xn$reverselast$3qIs = _r247_t0['reverse-last']['bind'](_r247_t0);
            r247_include = _r247_t0['include']['bind'](_r247_t0);
            r247_xn$createstroke$7Hrq = _r247_t0['create-stroke']['bind'](_r247_t0);
            r247_xn$setanchor$9Jrj = _r247_t0['set-anchor']['bind'](_r247_t0);
            _r247_t0['gizmo'] = r1_globalTransform;
            _r247_t0['set-width'](r1_WIDTH);
            r247_xn$setwidth$9Jrj(r1_WIDTH);
            r247_xn$assignunicode$7Hrq('v');
            r247_include(r1_eMarks);
            r247_TURN = r1_XH * 0.9;
            r247_leftbar = r247_xn$createstroke$7Hrq();
            r247_leftbar['start-from'](r1_SB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r247_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_SB, (1 - 0.27) * r247_TURN, r1_MIDDLE - r1_STROKE / 2, 0)['set-width'](r1_STROKE * 0.8, 0);
            r247_rightbar = r247_xn$createstroke$7Hrq();
            r247_rightbar['start-from'](r1_RIGHTSB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r247_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.27) * r247_TURN, r1_MIDDLE + r1_STROKE / 2, 0)['set-width'](0, r1_STROKE * 0.8);
            r247_xn$putshapes$9Jrj(r247_leftbar['to-outline']());
            r247_xn$putshapes$9Jrj(r247_rightbar['to-outline']());
            r247_xn$startfrom$1aao(r1_MIDDLE + r1_STROKE / 2, 0);
            r247_xn$lineto$5sIl(r1_MIDDLE - r1_STROKE / 2, 0);
            r247_xn$lineto$5sIl(r1_MIDDLE, r1_STROKE);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('w', function _r1_t114() {
            var r250_currentGlyph, r250_xn$setwidth$9Jrj, r250_xn$assignunicode$7Hrq, r250_xn$startfrom$1aao, r250_xn$lineto$5sIl, r250_xn$curveto$1aao, r250_xn$cubicto$1aao, r250_xn$putshapes$9Jrj, r250_xn$reverselast$3qIs, r250_include, r250_xn$createstroke$7Hrq, r250_xn$setanchor$9Jrj, r250_TURN, r250_turn2, r250_wheight, r250_bottomStroke, r250_m1, r250_m2, _r250_t0, _r250_t1;
            _r250_t0 = this;
            r250_currentGlyph = _r250_t0;
            r250_xn$setwidth$9Jrj = _r250_t0['set-width']['bind'](_r250_t0);
            r250_xn$assignunicode$7Hrq = function _r250_t1(r251_code) {
                var r251_code;
                r250_currentGlyph['assign-unicode'](r251_code);
                return r1_unicodeGlyphs[[r250_currentGlyph['unicode'][r250_currentGlyph['unicode']['length'] - 1]]] = r250_currentGlyph;
            };
            r250_xn$startfrom$1aao = _r250_t0['start-from']['bind'](_r250_t0);
            r250_xn$lineto$5sIl = _r250_t0['line-to']['bind'](_r250_t0);
            r250_xn$curveto$1aao = _r250_t0['curve-to']['bind'](_r250_t0);
            r250_xn$cubicto$1aao = _r250_t0['cubic-to']['bind'](_r250_t0);
            r250_xn$putshapes$9Jrj = _r250_t0['put-shapes']['bind'](_r250_t0);
            r250_xn$reverselast$3qIs = _r250_t0['reverse-last']['bind'](_r250_t0);
            r250_include = _r250_t0['include']['bind'](_r250_t0);
            r250_xn$createstroke$7Hrq = _r250_t0['create-stroke']['bind'](_r250_t0);
            r250_xn$setanchor$9Jrj = _r250_t0['set-anchor']['bind'](_r250_t0);
            _r250_t0['gizmo'] = r1_globalTransform;
            _r250_t0['set-width'](r1_WIDTH);
            r250_xn$setwidth$9Jrj(r1_WIDTH);
            r250_xn$assignunicode$7Hrq('w');
            r250_include(r1_eMarks);
            r250_TURN = r1_XH * 0.75;
            r250_turn2 = r1_XH * 0.59;
            r250_wheight = r1_XH * 0.6;
            r250_bottomStroke = Math['min'](r1_STROKE * 0.8, (r1_WIDTH - r1_SB * 2) * 0.175);
            r250_m1 = r1_WIDTH * 0.325;
            r250_m2 = r1_WIDTH * 0.675;
            r250_xn$putshapes$9Jrj(r250_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_SB, r250_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_SB, (1 - 0.27) * r250_TURN, r250_m1 - r250_bottomStroke / 2, 0)['set-width'](r250_bottomStroke, 0)['to-outline']());
            r250_xn$putshapes$9Jrj(r250_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r250_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.27) * r250_TURN, r250_m2 + r250_bottomStroke / 2, 0)['set-width'](0, r250_bottomStroke)['to-outline']());
            r250_xn$putshapes$9Jrj(r250_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r250_bottomStroke / 2, r250_wheight)['heads-to'](r1_DOWNWARD)['set-width'](0, r250_bottomStroke)['line-to'](r1_MIDDLE + r250_bottomStroke / 2, r250_turn2)['heads-to'](r1_DOWNWARD)['curve-to'](r1_MIDDLE + r250_bottomStroke / 2, (1 - 0.1) * r250_turn2, r250_m1 + r250_bottomStroke / 2, 0)['set-width'](0, r250_bottomStroke)['to-outline']());
            r250_xn$putshapes$9Jrj(r250_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r250_bottomStroke / 2, r250_wheight)['heads-to'](r1_DOWNWARD)['set-width'](r250_bottomStroke, 0)['line-to'](r1_MIDDLE - r250_bottomStroke / 2, r250_turn2)['heads-to'](r1_DOWNWARD)['curve-to'](r1_MIDDLE - r250_bottomStroke / 2, (1 - 0.1) * r250_turn2, r250_m2 - r250_bottomStroke / 2, 0)['set-width'](r250_bottomStroke, 0)['to-outline']());
            r250_xn$startfrom$1aao(r250_m1 + r250_bottomStroke / 2, 0);
            r250_xn$lineto$5sIl(r250_m1 - r250_bottomStroke / 2, 0);
            r250_xn$lineto$5sIl(r250_m1, r250_bottomStroke);
            r250_xn$startfrom$1aao(r250_m2 + r250_bottomStroke / 2, 0);
            r250_xn$lineto$5sIl(r250_m2 - r250_bottomStroke / 2, 0);
            r250_xn$lineto$5sIl(r250_m2, r250_bottomStroke);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('y.upright', function _r1_t115() {
            var r253_currentGlyph, r253_xn$setwidth$9Jrj, r253_xn$assignunicode$7Hrq, r253_xn$startfrom$1aao, r253_xn$lineto$5sIl, r253_xn$curveto$1aao, r253_xn$cubicto$1aao, r253_xn$putshapes$9Jrj, r253_xn$reverselast$3qIs, r253_include, r253_xn$createstroke$7Hrq, r253_xn$setanchor$9Jrj, r253_xbottom, r253_turnp, r253_xb, r253_yb, _r253_t0, _r253_t1;
            _r253_t0 = this;
            r253_currentGlyph = _r253_t0;
            r253_xn$setwidth$9Jrj = _r253_t0['set-width']['bind'](_r253_t0);
            r253_xn$assignunicode$7Hrq = function _r253_t1(r254_code) {
                var r254_code;
                r253_currentGlyph['assign-unicode'](r254_code);
                return r1_unicodeGlyphs[[r253_currentGlyph['unicode'][r253_currentGlyph['unicode']['length'] - 1]]] = r253_currentGlyph;
            };
            r253_xn$startfrom$1aao = _r253_t0['start-from']['bind'](_r253_t0);
            r253_xn$lineto$5sIl = _r253_t0['line-to']['bind'](_r253_t0);
            r253_xn$curveto$1aao = _r253_t0['curve-to']['bind'](_r253_t0);
            r253_xn$cubicto$1aao = _r253_t0['cubic-to']['bind'](_r253_t0);
            r253_xn$putshapes$9Jrj = _r253_t0['put-shapes']['bind'](_r253_t0);
            r253_xn$reverselast$3qIs = _r253_t0['reverse-last']['bind'](_r253_t0);
            r253_include = _r253_t0['include']['bind'](_r253_t0);
            r253_xn$createstroke$7Hrq = _r253_t0['create-stroke']['bind'](_r253_t0);
            r253_xn$setanchor$9Jrj = _r253_t0['set-anchor']['bind'](_r253_t0);
            _r253_t0['gizmo'] = r1_globalTransform;
            _r253_t0['set-width'](r1_WIDTH);
            r253_xn$setwidth$9Jrj(r1_WIDTH);
            r253_include(r1_pMarks);
            r253_xbottom = r1_mix(r1_SB, r1_RIGHTSB, 0.28);
            r253_turnp = r1_XH / (r1_XH - r1_DESCENDER);
            r253_xb = r1_mix(r1_SB, r1_RIGHTSB, 0.51);
            r253_yb = r1_mix(0, r1_XH, 0.1 * r253_turnp);
            r253_xn$putshapes$9Jrj(r1_xStrand(r253_xbottom, r1_DESCENDER, r1_RIGHTSB, r1_XH, 0.1, 0.6, 0.14));
            r253_xn$putshapes$9Jrj(r1_halfXStrand(r1_SB, r1_XH, r253_xb, r253_yb, 0.1 * r253_turnp, 0.4, 0.14 * r253_turnp));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('y.italic', function _r1_t116() {
            var r256_currentGlyph, r256_xn$setwidth$9Jrj, r256_xn$assignunicode$7Hrq, r256_xn$startfrom$1aao, r256_xn$lineto$5sIl, r256_xn$curveto$1aao, r256_xn$cubicto$1aao, r256_xn$putshapes$9Jrj, r256_xn$reverselast$3qIs, r256_include, r256_xn$createstroke$7Hrq, r256_xn$setanchor$9Jrj, r256_TURN, r256_cross, r256_xbottom, r256_barone, r256_bartwo, _r256_t0, _r256_t1;
            _r256_t0 = this;
            r256_currentGlyph = _r256_t0;
            r256_xn$setwidth$9Jrj = _r256_t0['set-width']['bind'](_r256_t0);
            r256_xn$assignunicode$7Hrq = function _r256_t1(r257_code) {
                var r257_code;
                r256_currentGlyph['assign-unicode'](r257_code);
                return r1_unicodeGlyphs[[r256_currentGlyph['unicode'][r256_currentGlyph['unicode']['length'] - 1]]] = r256_currentGlyph;
            };
            r256_xn$startfrom$1aao = _r256_t0['start-from']['bind'](_r256_t0);
            r256_xn$lineto$5sIl = _r256_t0['line-to']['bind'](_r256_t0);
            r256_xn$curveto$1aao = _r256_t0['curve-to']['bind'](_r256_t0);
            r256_xn$cubicto$1aao = _r256_t0['cubic-to']['bind'](_r256_t0);
            r256_xn$putshapes$9Jrj = _r256_t0['put-shapes']['bind'](_r256_t0);
            r256_xn$reverselast$3qIs = _r256_t0['reverse-last']['bind'](_r256_t0);
            r256_include = _r256_t0['include']['bind'](_r256_t0);
            r256_xn$createstroke$7Hrq = _r256_t0['create-stroke']['bind'](_r256_t0);
            r256_xn$setanchor$9Jrj = _r256_t0['set-anchor']['bind'](_r256_t0);
            _r256_t0['gizmo'] = r1_globalTransform;
            _r256_t0['set-width'](r1_WIDTH);
            r256_xn$setwidth$9Jrj(r1_WIDTH);
            r256_include(r1_pMarks);
            r256_TURN = r1_XH * 0.1;
            r256_cross = r1_XH * 0.15;
            r256_xbottom = r1_WIDTH * 0.4;
            r256_barone = r256_xn$createstroke$7Hrq()['start-from'](r256_xbottom, r1_DESCENDER)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['cubic-to'](r256_xbottom, r256_TURN + 0.17 * (r1_XH - r256_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH - r256_TURN - 0.17 * (r1_XH - r256_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH)['heads-to'](r1_UPWARD);
            r256_bartwo = r256_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r256_cross)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['curve-to'](r1_SB + r1_HALFSTROKE + r1_O, r1_XH - r256_TURN - 0.17 * (r1_XH - r256_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH)['heads-to'](r1_UPWARD);
            r256_xn$putshapes$9Jrj(r256_barone['to-outline']());
            r256_xn$putshapes$9Jrj(r256_bartwo['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('y', function _r1_t117() {
            var r259_currentGlyph, r259_xn$setwidth$9Jrj, r259_xn$assignunicode$7Hrq, r259_xn$startfrom$1aao, r259_xn$lineto$5sIl, r259_xn$curveto$1aao, r259_xn$cubicto$1aao, r259_xn$putshapes$9Jrj, r259_xn$reverselast$3qIs, r259_include, r259_xn$createstroke$7Hrq, r259_xn$setanchor$9Jrj, _r259_t0, _r259_t1;
            _r259_t0 = this;
            r259_currentGlyph = _r259_t0;
            r259_xn$setwidth$9Jrj = _r259_t0['set-width']['bind'](_r259_t0);
            r259_xn$assignunicode$7Hrq = function _r259_t1(r260_code) {
                var r260_code;
                r259_currentGlyph['assign-unicode'](r260_code);
                return r1_unicodeGlyphs[[r259_currentGlyph['unicode'][r259_currentGlyph['unicode']['length'] - 1]]] = r259_currentGlyph;
            };
            r259_xn$startfrom$1aao = _r259_t0['start-from']['bind'](_r259_t0);
            r259_xn$lineto$5sIl = _r259_t0['line-to']['bind'](_r259_t0);
            r259_xn$curveto$1aao = _r259_t0['curve-to']['bind'](_r259_t0);
            r259_xn$cubicto$1aao = _r259_t0['cubic-to']['bind'](_r259_t0);
            r259_xn$putshapes$9Jrj = _r259_t0['put-shapes']['bind'](_r259_t0);
            r259_xn$reverselast$3qIs = _r259_t0['reverse-last']['bind'](_r259_t0);
            r259_include = _r259_t0['include']['bind'](_r259_t0);
            r259_xn$createstroke$7Hrq = _r259_t0['create-stroke']['bind'](_r259_t0);
            r259_xn$setanchor$9Jrj = _r259_t0['set-anchor']['bind'](_r259_t0);
            _r259_t0['gizmo'] = r1_globalTransform;
            _r259_t0['set-width'](r1_WIDTH);
            r259_xn$setwidth$9Jrj(r1_WIDTH);
            r259_xn$assignunicode$7Hrq('y');
            if (r1_para['italicangle'] > 0) {
                r259_include(r1_glyphs['y.italic'], true);
            } else {
                r259_include(r1_glyphs['y.upright'], true);
            }
            return void 0;
        });
        r1_xn$createglyph$7Hrq('z', function _r1_t118() {
            var r262_currentGlyph, r262_xn$setwidth$9Jrj, r262_xn$assignunicode$7Hrq, r262_xn$startfrom$1aao, r262_xn$lineto$5sIl, r262_xn$curveto$1aao, r262_xn$cubicto$1aao, r262_xn$putshapes$9Jrj, r262_xn$reverselast$3qIs, r262_include, r262_xn$createstroke$7Hrq, r262_xn$setanchor$9Jrj, r262_cor, _r262_t0, _r262_t1;
            _r262_t0 = this;
            r262_currentGlyph = _r262_t0;
            r262_xn$setwidth$9Jrj = _r262_t0['set-width']['bind'](_r262_t0);
            r262_xn$assignunicode$7Hrq = function _r262_t1(r263_code) {
                var r263_code;
                r262_currentGlyph['assign-unicode'](r263_code);
                return r1_unicodeGlyphs[[r262_currentGlyph['unicode'][r262_currentGlyph['unicode']['length'] - 1]]] = r262_currentGlyph;
            };
            r262_xn$startfrom$1aao = _r262_t0['start-from']['bind'](_r262_t0);
            r262_xn$lineto$5sIl = _r262_t0['line-to']['bind'](_r262_t0);
            r262_xn$curveto$1aao = _r262_t0['curve-to']['bind'](_r262_t0);
            r262_xn$cubicto$1aao = _r262_t0['cubic-to']['bind'](_r262_t0);
            r262_xn$putshapes$9Jrj = _r262_t0['put-shapes']['bind'](_r262_t0);
            r262_xn$reverselast$3qIs = _r262_t0['reverse-last']['bind'](_r262_t0);
            r262_include = _r262_t0['include']['bind'](_r262_t0);
            r262_xn$createstroke$7Hrq = _r262_t0['create-stroke']['bind'](_r262_t0);
            r262_xn$setanchor$9Jrj = _r262_t0['set-anchor']['bind'](_r262_t0);
            _r262_t0['gizmo'] = r1_globalTransform;
            _r262_t0['set-width'](r1_WIDTH);
            r262_xn$setwidth$9Jrj(r1_WIDTH);
            r262_xn$assignunicode$7Hrq('z');
            r262_include(r1_eMarks);
            r262_cor = 1.2;
            r262_xn$putshapes$9Jrj(r262_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_XH)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_XH)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r262_xn$putshapes$9Jrj(r262_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_RIGHTWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r262_xn$startfrom$1aao(r1_SB, r1_STROKE);
            r262_xn$lineto$5sIl(r1_SB + r1_STROKE * r262_cor, r1_STROKE);
            r262_xn$lineto$5sIl(r1_RIGHTSB, r1_XH - r1_STROKE);
            r262_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r262_cor, r1_XH - r1_STROKE);
            r262_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('k', function _r1_t119() {
            var r265_currentGlyph, r265_xn$setwidth$9Jrj, r265_xn$assignunicode$7Hrq, r265_xn$startfrom$1aao, r265_xn$lineto$5sIl, r265_xn$curveto$1aao, r265_xn$cubicto$1aao, r265_xn$putshapes$9Jrj, r265_xn$reverselast$3qIs, r265_include, r265_xn$createstroke$7Hrq, r265_xn$setanchor$9Jrj, r265_TURN, r265_rturn, r265_right, r265_attach, r265_attach2, r265_fine, _r265_t0, _r265_t1;
            _r265_t0 = this;
            r265_currentGlyph = _r265_t0;
            r265_xn$setwidth$9Jrj = _r265_t0['set-width']['bind'](_r265_t0);
            r265_xn$assignunicode$7Hrq = function _r265_t1(r266_code) {
                var r266_code;
                r265_currentGlyph['assign-unicode'](r266_code);
                return r1_unicodeGlyphs[[r265_currentGlyph['unicode'][r265_currentGlyph['unicode']['length'] - 1]]] = r265_currentGlyph;
            };
            r265_xn$startfrom$1aao = _r265_t0['start-from']['bind'](_r265_t0);
            r265_xn$lineto$5sIl = _r265_t0['line-to']['bind'](_r265_t0);
            r265_xn$curveto$1aao = _r265_t0['curve-to']['bind'](_r265_t0);
            r265_xn$cubicto$1aao = _r265_t0['cubic-to']['bind'](_r265_t0);
            r265_xn$putshapes$9Jrj = _r265_t0['put-shapes']['bind'](_r265_t0);
            r265_xn$reverselast$3qIs = _r265_t0['reverse-last']['bind'](_r265_t0);
            r265_include = _r265_t0['include']['bind'](_r265_t0);
            r265_xn$createstroke$7Hrq = _r265_t0['create-stroke']['bind'](_r265_t0);
            r265_xn$setanchor$9Jrj = _r265_t0['set-anchor']['bind'](_r265_t0);
            _r265_t0['gizmo'] = r1_globalTransform;
            _r265_t0['set-width'](r1_WIDTH);
            r265_xn$setwidth$9Jrj(r1_WIDTH);
            r265_xn$assignunicode$7Hrq('k');
            r265_include(r1_bMarks);
            r265_TURN = r1_XH * 0.99;
            r265_rturn = r1_XH * 0.1;
            r265_right = r1_RIGHTSB - r1_O;
            r265_attach = r1_XH * 0.4;
            r265_attach2 = r1_MIDDLE - r1_WIDTH * 0.1;
            r265_fine = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.25);
            r265_xn$putshapes$9Jrj(r265_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['set-width'](0, r1_STROKE)['heads-to'](r1_UPWARD)['line-to'](r1_SB, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r265_xn$putshapes$9Jrj(r265_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_XH)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r265_TURN)['heads-to'](r1_DOWNWARD)['curve-to'](r1_RIGHTSB, (1 - 0.18) * r265_TURN, r1_SB + r1_STROKE, r265_attach)['set-width'](0, r265_fine)['to-outline']());
            r265_xn$putshapes$9Jrj(r265_xn$createstroke$7Hrq()['start-from'](r265_right - r1_HALFSTROKE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['curve-to'](r265_right - r1_HALFSTROKE, r265_rturn + 0.05 * (r1_XH - r265_rturn), r265_attach2, r1_XH * 0.5 + r1_HALFSTROKE)['set-width'](r265_fine / 2, r265_fine / 2)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('s', function _r1_t120() {
            var r268_currentGlyph, r268_xn$setwidth$9Jrj, r268_xn$assignunicode$7Hrq, r268_xn$startfrom$1aao, r268_xn$lineto$5sIl, r268_xn$curveto$1aao, r268_xn$cubicto$1aao, r268_xn$putshapes$9Jrj, r268_xn$reverselast$3qIs, r268_include, r268_xn$createstroke$7Hrq, r268_xn$setanchor$9Jrj, _r268_t0, _r268_t1;
            _r268_t0 = this;
            r268_currentGlyph = _r268_t0;
            r268_xn$setwidth$9Jrj = _r268_t0['set-width']['bind'](_r268_t0);
            r268_xn$assignunicode$7Hrq = function _r268_t1(r269_code) {
                var r269_code;
                r268_currentGlyph['assign-unicode'](r269_code);
                return r1_unicodeGlyphs[[r268_currentGlyph['unicode'][r268_currentGlyph['unicode']['length'] - 1]]] = r268_currentGlyph;
            };
            r268_xn$startfrom$1aao = _r268_t0['start-from']['bind'](_r268_t0);
            r268_xn$lineto$5sIl = _r268_t0['line-to']['bind'](_r268_t0);
            r268_xn$curveto$1aao = _r268_t0['curve-to']['bind'](_r268_t0);
            r268_xn$cubicto$1aao = _r268_t0['cubic-to']['bind'](_r268_t0);
            r268_xn$putshapes$9Jrj = _r268_t0['put-shapes']['bind'](_r268_t0);
            r268_xn$reverselast$3qIs = _r268_t0['reverse-last']['bind'](_r268_t0);
            r268_include = _r268_t0['include']['bind'](_r268_t0);
            r268_xn$createstroke$7Hrq = _r268_t0['create-stroke']['bind'](_r268_t0);
            r268_xn$setanchor$9Jrj = _r268_t0['set-anchor']['bind'](_r268_t0);
            _r268_t0['gizmo'] = r1_globalTransform;
            _r268_t0['set-width'](r1_WIDTH);
            r268_xn$setwidth$9Jrj(r1_WIDTH);
            r268_xn$assignunicode$7Hrq('s');
            r268_include(r1_eMarks);
            r268_xn$putshapes$9Jrj(r1_sHookUpper(r1_XH, r1_SMOOTHA * 0.87, r1_SHOOK));
            r268_xn$putshapes$9Jrj(r1_sHookLower(0, r1_SMOOTHA * 0.87, r1_SHOOK));
            r268_xn$putshapes$9Jrj(r1_sStrand(r1_XH - r1_SMOOTHA * 0.87, r1_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('r', function _r1_t121() {
            var r271_currentGlyph, r271_xn$setwidth$9Jrj, r271_xn$assignunicode$7Hrq, r271_xn$startfrom$1aao, r271_xn$lineto$5sIl, r271_xn$curveto$1aao, r271_xn$cubicto$1aao, r271_xn$putshapes$9Jrj, r271_xn$reverselast$3qIs, r271_include, r271_xn$createstroke$7Hrq, r271_xn$setanchor$9Jrj, r271_slope, r271_expand, r271_coexpand, r271_ssmootha, _r271_t0, _r271_t1;
            _r271_t0 = this;
            r271_currentGlyph = _r271_t0;
            r271_xn$setwidth$9Jrj = _r271_t0['set-width']['bind'](_r271_t0);
            r271_xn$assignunicode$7Hrq = function _r271_t1(r272_code) {
                var r272_code;
                r271_currentGlyph['assign-unicode'](r272_code);
                return r1_unicodeGlyphs[[r271_currentGlyph['unicode'][r271_currentGlyph['unicode']['length'] - 1]]] = r271_currentGlyph;
            };
            r271_xn$startfrom$1aao = _r271_t0['start-from']['bind'](_r271_t0);
            r271_xn$lineto$5sIl = _r271_t0['line-to']['bind'](_r271_t0);
            r271_xn$curveto$1aao = _r271_t0['curve-to']['bind'](_r271_t0);
            r271_xn$cubicto$1aao = _r271_t0['cubic-to']['bind'](_r271_t0);
            r271_xn$putshapes$9Jrj = _r271_t0['put-shapes']['bind'](_r271_t0);
            r271_xn$reverselast$3qIs = _r271_t0['reverse-last']['bind'](_r271_t0);
            r271_include = _r271_t0['include']['bind'](_r271_t0);
            r271_xn$createstroke$7Hrq = _r271_t0['create-stroke']['bind'](_r271_t0);
            r271_xn$setanchor$9Jrj = _r271_t0['set-anchor']['bind'](_r271_t0);
            _r271_t0['gizmo'] = r1_globalTransform;
            _r271_t0['set-width'](r1_WIDTH);
            r271_xn$setwidth$9Jrj(r1_WIDTH);
            r271_xn$assignunicode$7Hrq('r');
            r271_include(r1_eMarks);
            r271_slope = 0.015;
            r271_expand = 0.175;
            r271_coexpand = (1 - r271_expand) / 2;
            r271_ssmootha = r1_SMOOTHA * 0.87;
            r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB + r1_JBALANCE / 2, r1_XH - r1_RHOOK)['set-width'](r1_STROKE, 0)['curve-to'](r1_MIDDLE + r1_KAPPA_AHOOK * (r1_MIDDLE - r1_para['sb']) + r1_JBALANCE / 2, r1_XO, r1_MIDDLE + r1_JBALANCE * 0.75, r1_XO)['heads-to'](r1_LEFTWARD)['to-outline']());
            r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r1_JBALANCE * 0.75, r1_XO - r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_STROKE * r1_ITALICCOR + r1_RBALANCE, r1_XH - r1_SMALLSMOOTHA)['heads-to'](r1_DOWNWARD)['set-width'](0, r1_STROKE * 0.4)['to-outline']());
            r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_RBALANCE, 0)['heads-to'](r1_UPWARD)['set-width'](0, r1_STROKE)['line-to'](r1_SB + r1_RBALANCE, r1_XH)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('f.upright', function _r1_t122() {
            var r274_currentGlyph, r274_xn$setwidth$9Jrj, r274_xn$assignunicode$7Hrq, r274_xn$startfrom$1aao, r274_xn$lineto$5sIl, r274_xn$curveto$1aao, r274_xn$cubicto$1aao, r274_xn$putshapes$9Jrj, r274_xn$reverselast$3qIs, r274_include, r274_xn$createstroke$7Hrq, r274_xn$setanchor$9Jrj, _r274_t0, _r274_t1;
            _r274_t0 = this;
            r274_currentGlyph = _r274_t0;
            r274_xn$setwidth$9Jrj = _r274_t0['set-width']['bind'](_r274_t0);
            r274_xn$assignunicode$7Hrq = function _r274_t1(r275_code) {
                var r275_code;
                r274_currentGlyph['assign-unicode'](r275_code);
                return r1_unicodeGlyphs[[r274_currentGlyph['unicode'][r274_currentGlyph['unicode']['length'] - 1]]] = r274_currentGlyph;
            };
            r274_xn$startfrom$1aao = _r274_t0['start-from']['bind'](_r274_t0);
            r274_xn$lineto$5sIl = _r274_t0['line-to']['bind'](_r274_t0);
            r274_xn$curveto$1aao = _r274_t0['curve-to']['bind'](_r274_t0);
            r274_xn$cubicto$1aao = _r274_t0['cubic-to']['bind'](_r274_t0);
            r274_xn$putshapes$9Jrj = _r274_t0['put-shapes']['bind'](_r274_t0);
            r274_xn$reverselast$3qIs = _r274_t0['reverse-last']['bind'](_r274_t0);
            r274_include = _r274_t0['include']['bind'](_r274_t0);
            r274_xn$createstroke$7Hrq = _r274_t0['create-stroke']['bind'](_r274_t0);
            r274_xn$setanchor$9Jrj = _r274_t0['set-anchor']['bind'](_r274_t0);
            _r274_t0['gizmo'] = r1_globalTransform;
            _r274_t0['set-width'](r1_WIDTH);
            r274_xn$setwidth$9Jrj(r1_WIDTH);
            r274_include(r1_bMarks);
            r274_xn$putshapes$9Jrj(r274_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, 0)['heads-to'](r1_UPWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_CAP - r1_SHOOK * 1.4)['arc-vh-to'](r1_MIDDLE + r1_SHOOK * 2, r1_CAP - r1_HALFSTROKE - r1_O * 6)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r274_include(r1_glyphs['fbar']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('f.italic', function _r1_t123() {
            var r277_currentGlyph, r277_xn$setwidth$9Jrj, r277_xn$assignunicode$7Hrq, r277_xn$startfrom$1aao, r277_xn$lineto$5sIl, r277_xn$curveto$1aao, r277_xn$cubicto$1aao, r277_xn$putshapes$9Jrj, r277_xn$reverselast$3qIs, r277_include, r277_xn$createstroke$7Hrq, r277_xn$setanchor$9Jrj, _r277_t0, _r277_t1;
            _r277_t0 = this;
            r277_currentGlyph = _r277_t0;
            r277_xn$setwidth$9Jrj = _r277_t0['set-width']['bind'](_r277_t0);
            r277_xn$assignunicode$7Hrq = function _r277_t1(r278_code) {
                var r278_code;
                r277_currentGlyph['assign-unicode'](r278_code);
                return r1_unicodeGlyphs[[r277_currentGlyph['unicode'][r277_currentGlyph['unicode']['length'] - 1]]] = r277_currentGlyph;
            };
            r277_xn$startfrom$1aao = _r277_t0['start-from']['bind'](_r277_t0);
            r277_xn$lineto$5sIl = _r277_t0['line-to']['bind'](_r277_t0);
            r277_xn$curveto$1aao = _r277_t0['curve-to']['bind'](_r277_t0);
            r277_xn$cubicto$1aao = _r277_t0['cubic-to']['bind'](_r277_t0);
            r277_xn$putshapes$9Jrj = _r277_t0['put-shapes']['bind'](_r277_t0);
            r277_xn$reverselast$3qIs = _r277_t0['reverse-last']['bind'](_r277_t0);
            r277_include = _r277_t0['include']['bind'](_r277_t0);
            r277_xn$createstroke$7Hrq = _r277_t0['create-stroke']['bind'](_r277_t0);
            r277_xn$setanchor$9Jrj = _r277_t0['set-anchor']['bind'](_r277_t0);
            _r277_t0['gizmo'] = r1_globalTransform;
            _r277_t0['set-width'](r1_WIDTH);
            r277_xn$setwidth$9Jrj(r1_WIDTH);
            r277_include(r1_ifMarks);
            r277_xn$putshapes$9Jrj(r277_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r1_SHOOK * 2, r1_HALFSTROKE + r1_O * 6 - r1_SHOOK)['heads-to'](r1_RIGHTWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['arc-hv-to'](r1_MIDDLE, 0)['line-to'](r1_MIDDLE, r1_CAP - r1_SHOOK)['arc-vh-to'](r1_MIDDLE + r1_SHOOK * 2, r1_CAP - r1_HALFSTROKE - r1_O * 6)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r277_include(r1_glyphs['fbar']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('f', function _r1_t124() {
            var r280_currentGlyph, r280_xn$setwidth$9Jrj, r280_xn$assignunicode$7Hrq, r280_xn$startfrom$1aao, r280_xn$lineto$5sIl, r280_xn$curveto$1aao, r280_xn$cubicto$1aao, r280_xn$putshapes$9Jrj, r280_xn$reverselast$3qIs, r280_include, r280_xn$createstroke$7Hrq, r280_xn$setanchor$9Jrj, _r280_t0, _r280_t1;
            _r280_t0 = this;
            r280_currentGlyph = _r280_t0;
            r280_xn$setwidth$9Jrj = _r280_t0['set-width']['bind'](_r280_t0);
            r280_xn$assignunicode$7Hrq = function _r280_t1(r281_code) {
                var r281_code;
                r280_currentGlyph['assign-unicode'](r281_code);
                return r1_unicodeGlyphs[[r280_currentGlyph['unicode'][r280_currentGlyph['unicode']['length'] - 1]]] = r280_currentGlyph;
            };
            r280_xn$startfrom$1aao = _r280_t0['start-from']['bind'](_r280_t0);
            r280_xn$lineto$5sIl = _r280_t0['line-to']['bind'](_r280_t0);
            r280_xn$curveto$1aao = _r280_t0['curve-to']['bind'](_r280_t0);
            r280_xn$cubicto$1aao = _r280_t0['cubic-to']['bind'](_r280_t0);
            r280_xn$putshapes$9Jrj = _r280_t0['put-shapes']['bind'](_r280_t0);
            r280_xn$reverselast$3qIs = _r280_t0['reverse-last']['bind'](_r280_t0);
            r280_include = _r280_t0['include']['bind'](_r280_t0);
            r280_xn$createstroke$7Hrq = _r280_t0['create-stroke']['bind'](_r280_t0);
            r280_xn$setanchor$9Jrj = _r280_t0['set-anchor']['bind'](_r280_t0);
            _r280_t0['gizmo'] = r1_globalTransform;
            _r280_t0['set-width'](r1_WIDTH);
            r280_xn$setwidth$9Jrj(r1_WIDTH);
            r280_xn$assignunicode$7Hrq('f');
            if (r1_para['italicangle'] > 0) {
                r280_include(r1_glyphs['f.italic'], true);
            } else {
                r280_include(r1_glyphs['f.upright'], true);
            }
            return void 0;
        });
        r1_xn$createglyph$7Hrq('zero.slashed', function _r1_t125() {
            var r283_currentGlyph, r283_xn$setwidth$9Jrj, r283_xn$assignunicode$7Hrq, r283_xn$startfrom$1aao, r283_xn$lineto$5sIl, r283_xn$curveto$1aao, r283_xn$cubicto$1aao, r283_xn$putshapes$9Jrj, r283_xn$reverselast$3qIs, r283_include, r283_xn$createstroke$7Hrq, r283_xn$setanchor$9Jrj, r283_bar, _r283_t0, _r283_t1;
            _r283_t0 = this;
            r283_currentGlyph = _r283_t0;
            r283_xn$setwidth$9Jrj = _r283_t0['set-width']['bind'](_r283_t0);
            r283_xn$assignunicode$7Hrq = function _r283_t1(r284_code) {
                var r284_code;
                r283_currentGlyph['assign-unicode'](r284_code);
                return r1_unicodeGlyphs[[r283_currentGlyph['unicode'][r283_currentGlyph['unicode']['length'] - 1]]] = r283_currentGlyph;
            };
            r283_xn$startfrom$1aao = _r283_t0['start-from']['bind'](_r283_t0);
            r283_xn$lineto$5sIl = _r283_t0['line-to']['bind'](_r283_t0);
            r283_xn$curveto$1aao = _r283_t0['curve-to']['bind'](_r283_t0);
            r283_xn$cubicto$1aao = _r283_t0['cubic-to']['bind'](_r283_t0);
            r283_xn$putshapes$9Jrj = _r283_t0['put-shapes']['bind'](_r283_t0);
            r283_xn$reverselast$3qIs = _r283_t0['reverse-last']['bind'](_r283_t0);
            r283_include = _r283_t0['include']['bind'](_r283_t0);
            r283_xn$createstroke$7Hrq = _r283_t0['create-stroke']['bind'](_r283_t0);
            r283_xn$setanchor$9Jrj = _r283_t0['set-anchor']['bind'](_r283_t0);
            _r283_t0['gizmo'] = r1_globalTransform;
            _r283_t0['set-width'](r1_WIDTH);
            r283_xn$setwidth$9Jrj(r1_WIDTH);
            r283_xn$putshapes$9Jrj(r1_glyphs['O']['contours']);
            r283_bar = r283_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_STROKE / 2, r1_CAP * (1 - 0.65))['line-to'](r1_RIGHTSB - r1_STROKE / 2, r1_CAP * 0.65);
            r283_xn$putshapes$9Jrj(r283_bar['to-outline'](r1_STROKE / 2, r1_STROKE / 2));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('zero.unslashed', function _r1_t126() {
            var r286_currentGlyph, r286_xn$setwidth$9Jrj, r286_xn$assignunicode$7Hrq, r286_xn$startfrom$1aao, r286_xn$lineto$5sIl, r286_xn$curveto$1aao, r286_xn$cubicto$1aao, r286_xn$putshapes$9Jrj, r286_xn$reverselast$3qIs, r286_include, r286_xn$createstroke$7Hrq, r286_xn$setanchor$9Jrj, _r286_t0, _r286_t1;
            _r286_t0 = this;
            r286_currentGlyph = _r286_t0;
            r286_xn$setwidth$9Jrj = _r286_t0['set-width']['bind'](_r286_t0);
            r286_xn$assignunicode$7Hrq = function _r286_t1(r287_code) {
                var r287_code;
                r286_currentGlyph['assign-unicode'](r287_code);
                return r1_unicodeGlyphs[[r286_currentGlyph['unicode'][r286_currentGlyph['unicode']['length'] - 1]]] = r286_currentGlyph;
            };
            r286_xn$startfrom$1aao = _r286_t0['start-from']['bind'](_r286_t0);
            r286_xn$lineto$5sIl = _r286_t0['line-to']['bind'](_r286_t0);
            r286_xn$curveto$1aao = _r286_t0['curve-to']['bind'](_r286_t0);
            r286_xn$cubicto$1aao = _r286_t0['cubic-to']['bind'](_r286_t0);
            r286_xn$putshapes$9Jrj = _r286_t0['put-shapes']['bind'](_r286_t0);
            r286_xn$reverselast$3qIs = _r286_t0['reverse-last']['bind'](_r286_t0);
            r286_include = _r286_t0['include']['bind'](_r286_t0);
            r286_xn$createstroke$7Hrq = _r286_t0['create-stroke']['bind'](_r286_t0);
            r286_xn$setanchor$9Jrj = _r286_t0['set-anchor']['bind'](_r286_t0);
            _r286_t0['gizmo'] = r1_globalTransform;
            _r286_t0['set-width'](r1_WIDTH);
            r286_include(r1_glyphs['O']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('zero.dotted', function _r1_t127() {
            var r289_currentGlyph, r289_xn$setwidth$9Jrj, r289_xn$assignunicode$7Hrq, r289_xn$startfrom$1aao, r289_xn$lineto$5sIl, r289_xn$curveto$1aao, r289_xn$cubicto$1aao, r289_xn$putshapes$9Jrj, r289_xn$reverselast$3qIs, r289_include, r289_xn$createstroke$7Hrq, r289_xn$setanchor$9Jrj, _r289_t0, _r289_t1;
            _r289_t0 = this;
            r289_currentGlyph = _r289_t0;
            r289_xn$setwidth$9Jrj = _r289_t0['set-width']['bind'](_r289_t0);
            r289_xn$assignunicode$7Hrq = function _r289_t1(r290_code) {
                var r290_code;
                r289_currentGlyph['assign-unicode'](r290_code);
                return r1_unicodeGlyphs[[r289_currentGlyph['unicode'][r289_currentGlyph['unicode']['length'] - 1]]] = r289_currentGlyph;
            };
            r289_xn$startfrom$1aao = _r289_t0['start-from']['bind'](_r289_t0);
            r289_xn$lineto$5sIl = _r289_t0['line-to']['bind'](_r289_t0);
            r289_xn$curveto$1aao = _r289_t0['curve-to']['bind'](_r289_t0);
            r289_xn$cubicto$1aao = _r289_t0['cubic-to']['bind'](_r289_t0);
            r289_xn$putshapes$9Jrj = _r289_t0['put-shapes']['bind'](_r289_t0);
            r289_xn$reverselast$3qIs = _r289_t0['reverse-last']['bind'](_r289_t0);
            r289_include = _r289_t0['include']['bind'](_r289_t0);
            r289_xn$createstroke$7Hrq = _r289_t0['create-stroke']['bind'](_r289_t0);
            r289_xn$setanchor$9Jrj = _r289_t0['set-anchor']['bind'](_r289_t0);
            _r289_t0['gizmo'] = r1_globalTransform;
            _r289_t0['set-width'](r1_WIDTH);
            r289_include(r1_glyphs['O']);
            r289_xn$putshapes$9Jrj([r1_Ring(r1_CAPMIDDLE + r1_DOTRADIUS, r1_CAPMIDDLE - r1_DOTRADIUS, r1_MIDDLE + r1_DOTRADIUS, r1_MIDDLE - r1_DOTRADIUS)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('zero', function _r1_t128() {
            var r292_currentGlyph, r292_xn$setwidth$9Jrj, r292_xn$assignunicode$7Hrq, r292_xn$startfrom$1aao, r292_xn$lineto$5sIl, r292_xn$curveto$1aao, r292_xn$cubicto$1aao, r292_xn$putshapes$9Jrj, r292_xn$reverselast$3qIs, r292_include, r292_xn$createstroke$7Hrq, r292_xn$setanchor$9Jrj, r292_otherwise, _r292_t0, _r292_t1, _r292_t2, _r292_t3, _r292_t4, _r292_t5, _r292_t6, _r292_t7, _r292_t8;
            _r292_t1 = this;
            r292_currentGlyph = _r292_t1;
            r292_xn$setwidth$9Jrj = _r292_t1['set-width']['bind'](_r292_t1);
            r292_xn$assignunicode$7Hrq = function _r292_t2(r293_code) {
                var r293_code;
                r292_currentGlyph['assign-unicode'](r293_code);
                return r1_unicodeGlyphs[[r292_currentGlyph['unicode'][r292_currentGlyph['unicode']['length'] - 1]]] = r292_currentGlyph;
            };
            r292_xn$startfrom$1aao = _r292_t1['start-from']['bind'](_r292_t1);
            r292_xn$lineto$5sIl = _r292_t1['line-to']['bind'](_r292_t1);
            r292_xn$curveto$1aao = _r292_t1['curve-to']['bind'](_r292_t1);
            r292_xn$cubicto$1aao = _r292_t1['cubic-to']['bind'](_r292_t1);
            r292_xn$putshapes$9Jrj = _r292_t1['put-shapes']['bind'](_r292_t1);
            r292_xn$reverselast$3qIs = _r292_t1['reverse-last']['bind'](_r292_t1);
            r292_include = _r292_t1['include']['bind'](_r292_t1);
            r292_xn$createstroke$7Hrq = _r292_t1['create-stroke']['bind'](_r292_t1);
            r292_xn$setanchor$9Jrj = _r292_t1['set-anchor']['bind'](_r292_t1);
            _r292_t1['gizmo'] = r1_globalTransform;
            _r292_t1['set-width'](r1_WIDTH);
            r292_xn$setwidth$9Jrj(r1_WIDTH);
            r292_xn$assignunicode$7Hrq('0');
            _r292_t3 = r292_include;
            _r292_t4 = r1_glyphs;
            _r292_t0 = r1_variantSelector['zero'];
            if ('slashed' === _r292_t0) {
                _r292_t5 = 'zero.slashed';
            } else {
                if ('dotted' === _r292_t0) {
                    _r292_t6 = 'zero.dotted';
                } else {
                    if ('unslahsed' === _r292_t0) {
                        _r292_t7 = 'zero.unslashed';
                    } else {
                        r292_otherwise = _r292_t0;
                        _r292_t7 = 'zero.slashed';
                    }
                    _r292_t6 = _r292_t7;
                }
                _r292_t5 = _r292_t6;
            }
            _r292_t8 = _r292_t4[_r292_t5];
            _r292_t3(_r292_t8);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('one', function _r1_t129() {
            var r295_currentGlyph, r295_xn$setwidth$9Jrj, r295_xn$assignunicode$7Hrq, r295_xn$startfrom$1aao, r295_xn$lineto$5sIl, r295_xn$curveto$1aao, r295_xn$cubicto$1aao, r295_xn$putshapes$9Jrj, r295_xn$reverselast$3qIs, r295_include, r295_xn$createstroke$7Hrq, r295_xn$setanchor$9Jrj, _r295_t0, _r295_t1;
            _r295_t0 = this;
            r295_currentGlyph = _r295_t0;
            r295_xn$setwidth$9Jrj = _r295_t0['set-width']['bind'](_r295_t0);
            r295_xn$assignunicode$7Hrq = function _r295_t1(r296_code) {
                var r296_code;
                r295_currentGlyph['assign-unicode'](r296_code);
                return r1_unicodeGlyphs[[r295_currentGlyph['unicode'][r295_currentGlyph['unicode']['length'] - 1]]] = r295_currentGlyph;
            };
            r295_xn$startfrom$1aao = _r295_t0['start-from']['bind'](_r295_t0);
            r295_xn$lineto$5sIl = _r295_t0['line-to']['bind'](_r295_t0);
            r295_xn$curveto$1aao = _r295_t0['curve-to']['bind'](_r295_t0);
            r295_xn$cubicto$1aao = _r295_t0['cubic-to']['bind'](_r295_t0);
            r295_xn$putshapes$9Jrj = _r295_t0['put-shapes']['bind'](_r295_t0);
            r295_xn$reverselast$3qIs = _r295_t0['reverse-last']['bind'](_r295_t0);
            r295_include = _r295_t0['include']['bind'](_r295_t0);
            r295_xn$createstroke$7Hrq = _r295_t0['create-stroke']['bind'](_r295_t0);
            r295_xn$setanchor$9Jrj = _r295_t0['set-anchor']['bind'](_r295_t0);
            _r295_t0['gizmo'] = r1_globalTransform;
            _r295_t0['set-width'](r1_WIDTH);
            r295_xn$setwidth$9Jrj(r1_WIDTH);
            r295_xn$assignunicode$7Hrq('1');
            r295_xn$putshapes$9Jrj(r295_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r1_JBALANCE * 0.6, 0)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_UPWARD)['line-to'](r1_MIDDLE + r1_JBALANCE * 0.6, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r295_xn$putshapes$9Jrj(r295_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE - r1_HALFSTROKE + r1_JBALANCE * 0.6, r1_CAP)['set-width'](r1_STROKE, 0)['line-to'](r1_MIDDLE - r1_HOOK * 1.5 + r1_JBALANCE * 0.5, r1_CAP - r1_HOOK * 0.75)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('two', function _r1_t130() {
            var r298_currentGlyph, r298_xn$setwidth$9Jrj, r298_xn$assignunicode$7Hrq, r298_xn$startfrom$1aao, r298_xn$lineto$5sIl, r298_xn$curveto$1aao, r298_xn$cubicto$1aao, r298_xn$putshapes$9Jrj, r298_xn$reverselast$3qIs, r298_include, r298_xn$createstroke$7Hrq, r298_xn$setanchor$9Jrj, _r298_t0, _r298_t1;
            _r298_t0 = this;
            r298_currentGlyph = _r298_t0;
            r298_xn$setwidth$9Jrj = _r298_t0['set-width']['bind'](_r298_t0);
            r298_xn$assignunicode$7Hrq = function _r298_t1(r299_code) {
                var r299_code;
                r298_currentGlyph['assign-unicode'](r299_code);
                return r1_unicodeGlyphs[[r298_currentGlyph['unicode'][r298_currentGlyph['unicode']['length'] - 1]]] = r298_currentGlyph;
            };
            r298_xn$startfrom$1aao = _r298_t0['start-from']['bind'](_r298_t0);
            r298_xn$lineto$5sIl = _r298_t0['line-to']['bind'](_r298_t0);
            r298_xn$curveto$1aao = _r298_t0['curve-to']['bind'](_r298_t0);
            r298_xn$cubicto$1aao = _r298_t0['cubic-to']['bind'](_r298_t0);
            r298_xn$putshapes$9Jrj = _r298_t0['put-shapes']['bind'](_r298_t0);
            r298_xn$reverselast$3qIs = _r298_t0['reverse-last']['bind'](_r298_t0);
            r298_include = _r298_t0['include']['bind'](_r298_t0);
            r298_xn$createstroke$7Hrq = _r298_t0['create-stroke']['bind'](_r298_t0);
            r298_xn$setanchor$9Jrj = _r298_t0['set-anchor']['bind'](_r298_t0);
            _r298_t0['gizmo'] = r1_globalTransform;
            _r298_t0['set-width'](r1_WIDTH);
            r298_xn$setwidth$9Jrj(r1_WIDTH);
            r298_xn$assignunicode$7Hrq('2');
            r298_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK));
            r298_xn$putshapes$9Jrj(r1_sStrand(r1_STROKE, r1_CAP - r1_SMOOTHB));
            r298_xn$putshapes$9Jrj(r298_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('three', function _r1_t131() {
            var r301_currentGlyph, r301_xn$setwidth$9Jrj, r301_xn$assignunicode$7Hrq, r301_xn$startfrom$1aao, r301_xn$lineto$5sIl, r301_xn$curveto$1aao, r301_xn$cubicto$1aao, r301_xn$putshapes$9Jrj, r301_xn$reverselast$3qIs, r301_include, r301_xn$createstroke$7Hrq, r301_xn$setanchor$9Jrj, r301_threeRadius, _r301_t0, _r301_t1;
            _r301_t0 = this;
            r301_currentGlyph = _r301_t0;
            r301_xn$setwidth$9Jrj = _r301_t0['set-width']['bind'](_r301_t0);
            r301_xn$assignunicode$7Hrq = function _r301_t1(r302_code) {
                var r302_code;
                r301_currentGlyph['assign-unicode'](r302_code);
                return r1_unicodeGlyphs[[r301_currentGlyph['unicode'][r301_currentGlyph['unicode']['length'] - 1]]] = r301_currentGlyph;
            };
            r301_xn$startfrom$1aao = _r301_t0['start-from']['bind'](_r301_t0);
            r301_xn$lineto$5sIl = _r301_t0['line-to']['bind'](_r301_t0);
            r301_xn$curveto$1aao = _r301_t0['curve-to']['bind'](_r301_t0);
            r301_xn$cubicto$1aao = _r301_t0['cubic-to']['bind'](_r301_t0);
            r301_xn$putshapes$9Jrj = _r301_t0['put-shapes']['bind'](_r301_t0);
            r301_xn$reverselast$3qIs = _r301_t0['reverse-last']['bind'](_r301_t0);
            r301_include = _r301_t0['include']['bind'](_r301_t0);
            r301_xn$createstroke$7Hrq = _r301_t0['create-stroke']['bind'](_r301_t0);
            r301_xn$setanchor$9Jrj = _r301_t0['set-anchor']['bind'](_r301_t0);
            _r301_t0['gizmo'] = r1_globalTransform;
            _r301_t0['set-width'](r1_WIDTH);
            r301_xn$setwidth$9Jrj(r1_WIDTH);
            r301_xn$assignunicode$7Hrq('3');
            r301_threeRadius = r1_CAPMIDDLE + r1_HALFSTROKE - r1_SMOOTH;
            r301_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK));
            r301_xn$putshapes$9Jrj(r1_sHookLower(0, r1_SMOOTHA, r1_HOOK));
            r301_xn$putshapes$9Jrj(r301_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_CAP - r1_SMOOTHB)['set-width'](0, r1_STROKE)['arc-vh-to'](r1_RIGHTSB - r301_threeRadius, r1_CAPMIDDLE - r1_HALFSTROKE)['heads-to'](r1_LEFTWARD)['to-outline']());
            r301_xn$putshapes$9Jrj(r301_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_SMOOTHA)['set-width'](r1_STROKE, 0)['arc-vh-to'](r1_RIGHTSB - r301_threeRadius, r1_CAPMIDDLE + r1_HALFSTROKE)['heads-to'](r1_LEFTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('four', function _r1_t132() {
            var r304_currentGlyph, r304_xn$setwidth$9Jrj, r304_xn$assignunicode$7Hrq, r304_xn$startfrom$1aao, r304_xn$lineto$5sIl, r304_xn$curveto$1aao, r304_xn$cubicto$1aao, r304_xn$putshapes$9Jrj, r304_xn$reverselast$3qIs, r304_include, r304_xn$createstroke$7Hrq, r304_xn$setanchor$9Jrj, r304_bar, r304_vert, _r304_t0, _r304_t1;
            _r304_t0 = this;
            r304_currentGlyph = _r304_t0;
            r304_xn$setwidth$9Jrj = _r304_t0['set-width']['bind'](_r304_t0);
            r304_xn$assignunicode$7Hrq = function _r304_t1(r305_code) {
                var r305_code;
                r304_currentGlyph['assign-unicode'](r305_code);
                return r1_unicodeGlyphs[[r304_currentGlyph['unicode'][r304_currentGlyph['unicode']['length'] - 1]]] = r304_currentGlyph;
            };
            r304_xn$startfrom$1aao = _r304_t0['start-from']['bind'](_r304_t0);
            r304_xn$lineto$5sIl = _r304_t0['line-to']['bind'](_r304_t0);
            r304_xn$curveto$1aao = _r304_t0['curve-to']['bind'](_r304_t0);
            r304_xn$cubicto$1aao = _r304_t0['cubic-to']['bind'](_r304_t0);
            r304_xn$putshapes$9Jrj = _r304_t0['put-shapes']['bind'](_r304_t0);
            r304_xn$reverselast$3qIs = _r304_t0['reverse-last']['bind'](_r304_t0);
            r304_include = _r304_t0['include']['bind'](_r304_t0);
            r304_xn$createstroke$7Hrq = _r304_t0['create-stroke']['bind'](_r304_t0);
            r304_xn$setanchor$9Jrj = _r304_t0['set-anchor']['bind'](_r304_t0);
            _r304_t0['gizmo'] = r1_globalTransform;
            _r304_t0['set-width'](r1_WIDTH);
            r304_xn$setwidth$9Jrj(r1_WIDTH);
            r304_xn$assignunicode$7Hrq('4');
            r304_bar = r1_CAP * 0.4;
            r304_vert = r1_WIDTH * 0.55;
            r304_xn$putshapes$9Jrj(r304_xn$createstroke$7Hrq()['start-from'](r1_SB, r304_bar)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, r304_bar)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r304_xn$putshapes$9Jrj(r304_xn$createstroke$7Hrq()['start-from'](r304_vert, 0)['set-width'](0, r1_STROKE)['heads-to'](r1_UPWARD)['line-to'](r304_vert, r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            r304_xn$putshapes$9Jrj(r304_xn$createstroke$7Hrq()['start-from'](r1_SB, r304_bar)['set-width'](0, r1_STROKE)['line-to'](r304_vert, r1_CAP)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('five', function _r1_t133() {
            var r307_currentGlyph, r307_xn$setwidth$9Jrj, r307_xn$assignunicode$7Hrq, r307_xn$startfrom$1aao, r307_xn$lineto$5sIl, r307_xn$curveto$1aao, r307_xn$cubicto$1aao, r307_xn$putshapes$9Jrj, r307_xn$reverselast$3qIs, r307_include, r307_xn$createstroke$7Hrq, r307_xn$setanchor$9Jrj, _r307_t0, _r307_t1;
            _r307_t0 = this;
            r307_currentGlyph = _r307_t0;
            r307_xn$setwidth$9Jrj = _r307_t0['set-width']['bind'](_r307_t0);
            r307_xn$assignunicode$7Hrq = function _r307_t1(r308_code) {
                var r308_code;
                r307_currentGlyph['assign-unicode'](r308_code);
                return r1_unicodeGlyphs[[r307_currentGlyph['unicode'][r307_currentGlyph['unicode']['length'] - 1]]] = r307_currentGlyph;
            };
            r307_xn$startfrom$1aao = _r307_t0['start-from']['bind'](_r307_t0);
            r307_xn$lineto$5sIl = _r307_t0['line-to']['bind'](_r307_t0);
            r307_xn$curveto$1aao = _r307_t0['curve-to']['bind'](_r307_t0);
            r307_xn$cubicto$1aao = _r307_t0['cubic-to']['bind'](_r307_t0);
            r307_xn$putshapes$9Jrj = _r307_t0['put-shapes']['bind'](_r307_t0);
            r307_xn$reverselast$3qIs = _r307_t0['reverse-last']['bind'](_r307_t0);
            r307_include = _r307_t0['include']['bind'](_r307_t0);
            r307_xn$createstroke$7Hrq = _r307_t0['create-stroke']['bind'](_r307_t0);
            r307_xn$setanchor$9Jrj = _r307_t0['set-anchor']['bind'](_r307_t0);
            _r307_t0['gizmo'] = r1_globalTransform;
            _r307_t0['set-width'](r1_WIDTH);
            r307_xn$setwidth$9Jrj(r1_WIDTH);
            r307_xn$assignunicode$7Hrq('5');
            r307_xn$putshapes$9Jrj(r1_sHookLower(0, (r1_CAP * r1_FIVEBARPOS + r1_STROKE) / 2, r1_HOOK));
            r307_xn$putshapes$9Jrj(r307_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, (r1_CAP * r1_FIVEBARPOS + r1_STROKE) / 2)['set-width'](r1_STROKE, 0)['arc-vh-to'](r1_MIDDLE, r1_CAP * r1_FIVEBARPOS + r1_STROKE)['line-to'](r1_SB + r1_TBALANCE * (0.6 - r1_globalTransform['yx'] * 2), r1_CAP * r1_FIVEBARPOS + r1_STROKE)['heads-to'](r1_LEFTWARD)['to-outline']());
            r307_xn$putshapes$9Jrj(r307_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_TBALANCE * (0.6 - r1_globalTransform['yx'] * 2), r1_CAP)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r1_TBALANCE / 2, r1_CAP)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r307_xn$putshapes$9Jrj(r307_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_TBALANCE * (0.6 - r1_globalTransform['yx'] * 2), r1_CAP * r1_FIVEBARPOS + r1_STROKE)['set-width'](0, r1_STROKE)['heads-to'](r1_UPWARD)['line-to'](r1_SB + r1_TBALANCE * (0.6 - r1_globalTransform['yx'] * 2), r1_CAP)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('six', function _r1_t134() {
            var r310_currentGlyph, r310_xn$setwidth$9Jrj, r310_xn$assignunicode$7Hrq, r310_xn$startfrom$1aao, r310_xn$lineto$5sIl, r310_xn$curveto$1aao, r310_xn$cubicto$1aao, r310_xn$putshapes$9Jrj, r310_xn$reverselast$3qIs, r310_include, r310_xn$createstroke$7Hrq, r310_xn$setanchor$9Jrj, r310_ymiddlea, _r310_t0, _r310_t1;
            _r310_t0 = this;
            r310_currentGlyph = _r310_t0;
            r310_xn$setwidth$9Jrj = _r310_t0['set-width']['bind'](_r310_t0);
            r310_xn$assignunicode$7Hrq = function _r310_t1(r311_code) {
                var r311_code;
                r310_currentGlyph['assign-unicode'](r311_code);
                return r1_unicodeGlyphs[[r310_currentGlyph['unicode'][r310_currentGlyph['unicode']['length'] - 1]]] = r310_currentGlyph;
            };
            r310_xn$startfrom$1aao = _r310_t0['start-from']['bind'](_r310_t0);
            r310_xn$lineto$5sIl = _r310_t0['line-to']['bind'](_r310_t0);
            r310_xn$curveto$1aao = _r310_t0['curve-to']['bind'](_r310_t0);
            r310_xn$cubicto$1aao = _r310_t0['cubic-to']['bind'](_r310_t0);
            r310_xn$putshapes$9Jrj = _r310_t0['put-shapes']['bind'](_r310_t0);
            r310_xn$reverselast$3qIs = _r310_t0['reverse-last']['bind'](_r310_t0);
            r310_include = _r310_t0['include']['bind'](_r310_t0);
            r310_xn$createstroke$7Hrq = _r310_t0['create-stroke']['bind'](_r310_t0);
            r310_xn$setanchor$9Jrj = _r310_t0['set-anchor']['bind'](_r310_t0);
            _r310_t0['gizmo'] = r1_globalTransform;
            _r310_t0['set-width'](r1_WIDTH);
            r310_xn$setwidth$9Jrj(r1_WIDTH);
            r310_xn$assignunicode$7Hrq('6');
            r310_xn$putshapes$9Jrj(r1_smallo(r1_CAP * 0.6, 0, r1_SB, r1_RIGHTSB));
            r310_ymiddlea = (r1_CAP * 0.6 - r1_SMALLSMOOTHA + r1_SMALLSMOOTHB) / 2;
            r310_xn$putshapes$9Jrj(r310_xn$createstroke$7Hrq()['start-from'](r1_SB + r1_O, r310_ymiddlea)['set-width'](0, r1_STROKE)['curve-to'](r1_SB + r1_O, r1_mix(r310_ymiddlea, r1_CAP, 0.8), r1_RIGHTSB - r1_STROKE * 1.1, r1_CAP)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('seven', function _r1_t135() {
            var r313_currentGlyph, r313_xn$setwidth$9Jrj, r313_xn$assignunicode$7Hrq, r313_xn$startfrom$1aao, r313_xn$lineto$5sIl, r313_xn$curveto$1aao, r313_xn$cubicto$1aao, r313_xn$putshapes$9Jrj, r313_xn$reverselast$3qIs, r313_include, r313_xn$createstroke$7Hrq, r313_xn$setanchor$9Jrj, r313_cor, r313_x, _r313_t0, _r313_t1;
            _r313_t0 = this;
            r313_currentGlyph = _r313_t0;
            r313_xn$setwidth$9Jrj = _r313_t0['set-width']['bind'](_r313_t0);
            r313_xn$assignunicode$7Hrq = function _r313_t1(r314_code) {
                var r314_code;
                r313_currentGlyph['assign-unicode'](r314_code);
                return r1_unicodeGlyphs[[r313_currentGlyph['unicode'][r313_currentGlyph['unicode']['length'] - 1]]] = r313_currentGlyph;
            };
            r313_xn$startfrom$1aao = _r313_t0['start-from']['bind'](_r313_t0);
            r313_xn$lineto$5sIl = _r313_t0['line-to']['bind'](_r313_t0);
            r313_xn$curveto$1aao = _r313_t0['curve-to']['bind'](_r313_t0);
            r313_xn$cubicto$1aao = _r313_t0['cubic-to']['bind'](_r313_t0);
            r313_xn$putshapes$9Jrj = _r313_t0['put-shapes']['bind'](_r313_t0);
            r313_xn$reverselast$3qIs = _r313_t0['reverse-last']['bind'](_r313_t0);
            r313_include = _r313_t0['include']['bind'](_r313_t0);
            r313_xn$createstroke$7Hrq = _r313_t0['create-stroke']['bind'](_r313_t0);
            r313_xn$setanchor$9Jrj = _r313_t0['set-anchor']['bind'](_r313_t0);
            _r313_t0['gizmo'] = r1_globalTransform;
            _r313_t0['set-width'](r1_WIDTH);
            r313_xn$setwidth$9Jrj(r1_WIDTH);
            r313_xn$assignunicode$7Hrq('7');
            r313_xn$putshapes$9Jrj(r313_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP)['heads-to'](r1_RIGHTWARD)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_CAP)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r313_cor = 1.15;
            r313_x = r1_mix(r1_SB, r1_RIGHTSB, 0.15);
            r313_xn$startfrom$1aao(r313_x, 0);
            r313_xn$lineto$5sIl(r313_x + r1_STROKE * r313_cor, 0);
            r313_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP - r1_STROKE);
            r313_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r313_cor, r1_CAP - r1_STROKE);
            r313_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('eight', function _r1_t136() {
            var r316_currentGlyph, r316_xn$setwidth$9Jrj, r316_xn$assignunicode$7Hrq, r316_xn$startfrom$1aao, r316_xn$lineto$5sIl, r316_xn$curveto$1aao, r316_xn$cubicto$1aao, r316_xn$putshapes$9Jrj, r316_xn$reverselast$3qIs, r316_include, r316_xn$createstroke$7Hrq, r316_xn$setanchor$9Jrj, r316_sma, r316_smb, r316_p, _r316_t0, _r316_t1;
            _r316_t0 = this;
            r316_currentGlyph = _r316_t0;
            r316_xn$setwidth$9Jrj = _r316_t0['set-width']['bind'](_r316_t0);
            r316_xn$assignunicode$7Hrq = function _r316_t1(r317_code) {
                var r317_code;
                r316_currentGlyph['assign-unicode'](r317_code);
                return r1_unicodeGlyphs[[r316_currentGlyph['unicode'][r316_currentGlyph['unicode']['length'] - 1]]] = r316_currentGlyph;
            };
            r316_xn$startfrom$1aao = _r316_t0['start-from']['bind'](_r316_t0);
            r316_xn$lineto$5sIl = _r316_t0['line-to']['bind'](_r316_t0);
            r316_xn$curveto$1aao = _r316_t0['curve-to']['bind'](_r316_t0);
            r316_xn$cubicto$1aao = _r316_t0['cubic-to']['bind'](_r316_t0);
            r316_xn$putshapes$9Jrj = _r316_t0['put-shapes']['bind'](_r316_t0);
            r316_xn$reverselast$3qIs = _r316_t0['reverse-last']['bind'](_r316_t0);
            r316_include = _r316_t0['include']['bind'](_r316_t0);
            r316_xn$createstroke$7Hrq = _r316_t0['create-stroke']['bind'](_r316_t0);
            r316_xn$setanchor$9Jrj = _r316_t0['set-anchor']['bind'](_r316_t0);
            _r316_t0['gizmo'] = r1_globalTransform;
            _r316_t0['set-width'](r1_WIDTH);
            r316_xn$setwidth$9Jrj(r1_WIDTH);
            r316_xn$assignunicode$7Hrq('8');
            r316_sma = r1_SMOOTHA * 0.975;
            r316_smb = r1_SMOOTHB * 0.975;
            r316_p = 0.95;
            r316_xn$putshapes$9Jrj(r1_xsStrand(r1_mix(r1_RIGHTSB, r1_SB, r316_p), r1_CAP - r316_sma * r316_p, r1_RIGHTSB, r316_sma));
            r316_xn$putshapes$9Jrj(r1_xsStrand(r1_SB, r316_smb, r1_mix(r1_SB, r1_RIGHTSB, r316_p), r1_CAP - r316_smb * r316_p));
            r316_xn$putshapes$9Jrj(r316_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r316_p), r1_CAP - r316_smb * r316_p)['set-width'](r1_STROKE, 0)['arc-vh-to'](r1_MIDDLE, r1_CAP - r1_O)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_mix(r1_RIGHTSB, r1_SB, r316_p), r1_CAP - r316_sma * r316_p)['to-outline']());
            r316_xn$putshapes$9Jrj(r316_xn$createstroke$7Hrq()['start-from'](r1_SB, r316_smb)['set-width'](r1_STROKE, 0)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r1_RIGHTSB, r316_sma)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('nine', function _r1_t137() {
            var r319_currentGlyph, r319_xn$setwidth$9Jrj, r319_xn$assignunicode$7Hrq, r319_xn$startfrom$1aao, r319_xn$lineto$5sIl, r319_xn$curveto$1aao, r319_xn$cubicto$1aao, r319_xn$putshapes$9Jrj, r319_xn$reverselast$3qIs, r319_include, r319_xn$createstroke$7Hrq, r319_xn$setanchor$9Jrj, r319_ymiddlea, _r319_t0, _r319_t1;
            _r319_t0 = this;
            r319_currentGlyph = _r319_t0;
            r319_xn$setwidth$9Jrj = _r319_t0['set-width']['bind'](_r319_t0);
            r319_xn$assignunicode$7Hrq = function _r319_t1(r320_code) {
                var r320_code;
                r319_currentGlyph['assign-unicode'](r320_code);
                return r1_unicodeGlyphs[[r319_currentGlyph['unicode'][r319_currentGlyph['unicode']['length'] - 1]]] = r319_currentGlyph;
            };
            r319_xn$startfrom$1aao = _r319_t0['start-from']['bind'](_r319_t0);
            r319_xn$lineto$5sIl = _r319_t0['line-to']['bind'](_r319_t0);
            r319_xn$curveto$1aao = _r319_t0['curve-to']['bind'](_r319_t0);
            r319_xn$cubicto$1aao = _r319_t0['cubic-to']['bind'](_r319_t0);
            r319_xn$putshapes$9Jrj = _r319_t0['put-shapes']['bind'](_r319_t0);
            r319_xn$reverselast$3qIs = _r319_t0['reverse-last']['bind'](_r319_t0);
            r319_include = _r319_t0['include']['bind'](_r319_t0);
            r319_xn$createstroke$7Hrq = _r319_t0['create-stroke']['bind'](_r319_t0);
            r319_xn$setanchor$9Jrj = _r319_t0['set-anchor']['bind'](_r319_t0);
            _r319_t0['gizmo'] = r1_globalTransform;
            _r319_t0['set-width'](r1_WIDTH);
            r319_xn$setwidth$9Jrj(r1_WIDTH);
            r319_xn$assignunicode$7Hrq('9');
            r319_xn$putshapes$9Jrj(r1_smallo(r1_CAP, r1_CAP * 0.4, r1_SB, r1_RIGHTSB + r1_O));
            r319_ymiddlea = (r1_CAP - r1_SMALLSMOOTHB + r1_CAP * 0.4 + r1_SMALLSMOOTHA) / 2;
            r319_xn$putshapes$9Jrj(r319_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r319_ymiddlea)['set-width'](0, r1_STROKE)['line-to'](r1_RIGHTSB, r1_CAP * 0.4)['to-outline']());
            r319_xn$putshapes$9Jrj(r1_sHookLower(0, r1_CAP * 0.4, r1_HOOK, r1_xgrid(0.48)));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('dollar', function _r1_t138() {
            var r322_currentGlyph, r322_xn$setwidth$9Jrj, r322_xn$assignunicode$7Hrq, r322_xn$startfrom$1aao, r322_xn$lineto$5sIl, r322_xn$curveto$1aao, r322_xn$cubicto$1aao, r322_xn$putshapes$9Jrj, r322_xn$reverselast$3qIs, r322_include, r322_xn$createstroke$7Hrq, r322_xn$setanchor$9Jrj, _r322_t0, _r322_t1;
            _r322_t0 = this;
            r322_currentGlyph = _r322_t0;
            r322_xn$setwidth$9Jrj = _r322_t0['set-width']['bind'](_r322_t0);
            r322_xn$assignunicode$7Hrq = function _r322_t1(r323_code) {
                var r323_code;
                r322_currentGlyph['assign-unicode'](r323_code);
                return r1_unicodeGlyphs[[r322_currentGlyph['unicode'][r322_currentGlyph['unicode']['length'] - 1]]] = r322_currentGlyph;
            };
            r322_xn$startfrom$1aao = _r322_t0['start-from']['bind'](_r322_t0);
            r322_xn$lineto$5sIl = _r322_t0['line-to']['bind'](_r322_t0);
            r322_xn$curveto$1aao = _r322_t0['curve-to']['bind'](_r322_t0);
            r322_xn$cubicto$1aao = _r322_t0['cubic-to']['bind'](_r322_t0);
            r322_xn$putshapes$9Jrj = _r322_t0['put-shapes']['bind'](_r322_t0);
            r322_xn$reverselast$3qIs = _r322_t0['reverse-last']['bind'](_r322_t0);
            r322_include = _r322_t0['include']['bind'](_r322_t0);
            r322_xn$createstroke$7Hrq = _r322_t0['create-stroke']['bind'](_r322_t0);
            r322_xn$setanchor$9Jrj = _r322_t0['set-anchor']['bind'](_r322_t0);
            _r322_t0['gizmo'] = r1_globalTransform;
            _r322_t0['set-width'](r1_WIDTH);
            r322_xn$setwidth$9Jrj(r1_WIDTH);
            r322_xn$assignunicode$7Hrq('$');
            r322_include(r1_glyphs['S']);
            r322_xn$putshapes$9Jrj(r322_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_CAP - r1_HALFSTROKE)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_CAP - r1_DESCENDER / 2)['to-outline']());
            r322_xn$putshapes$9Jrj(r322_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_DESCENDER / 2)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_HALFSTROKE)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('ampersand', function _r1_t139() {
            var r325_currentGlyph, r325_xn$setwidth$9Jrj, r325_xn$assignunicode$7Hrq, r325_xn$startfrom$1aao, r325_xn$lineto$5sIl, r325_xn$curveto$1aao, r325_xn$cubicto$1aao, r325_xn$putshapes$9Jrj, r325_xn$reverselast$3qIs, r325_include, r325_xn$createstroke$7Hrq, r325_xn$setanchor$9Jrj, r325_fine, r325_p, r325_l, r325_pr, r325_q, r325_r, r325_s, _r325_t0, _r325_t1;
            _r325_t0 = this;
            r325_currentGlyph = _r325_t0;
            r325_xn$setwidth$9Jrj = _r325_t0['set-width']['bind'](_r325_t0);
            r325_xn$assignunicode$7Hrq = function _r325_t1(r326_code) {
                var r326_code;
                r325_currentGlyph['assign-unicode'](r326_code);
                return r1_unicodeGlyphs[[r325_currentGlyph['unicode'][r325_currentGlyph['unicode']['length'] - 1]]] = r325_currentGlyph;
            };
            r325_xn$startfrom$1aao = _r325_t0['start-from']['bind'](_r325_t0);
            r325_xn$lineto$5sIl = _r325_t0['line-to']['bind'](_r325_t0);
            r325_xn$curveto$1aao = _r325_t0['curve-to']['bind'](_r325_t0);
            r325_xn$cubicto$1aao = _r325_t0['cubic-to']['bind'](_r325_t0);
            r325_xn$putshapes$9Jrj = _r325_t0['put-shapes']['bind'](_r325_t0);
            r325_xn$reverselast$3qIs = _r325_t0['reverse-last']['bind'](_r325_t0);
            r325_include = _r325_t0['include']['bind'](_r325_t0);
            r325_xn$createstroke$7Hrq = _r325_t0['create-stroke']['bind'](_r325_t0);
            r325_xn$setanchor$9Jrj = _r325_t0['set-anchor']['bind'](_r325_t0);
            _r325_t0['gizmo'] = r1_globalTransform;
            _r325_t0['set-width'](r1_WIDTH);
            r325_xn$setwidth$9Jrj(r1_WIDTH);
            r325_xn$assignunicode$7Hrq('&');
            r325_fine = Math['min'](r1_STROKE, (r1_RIGHTSB - r1_SB) * 0.25);
            r325_p = 0.85;
            r325_l = 0.05;
            r325_pr = 0.9;
            r325_q = 0.45;
            r325_r = 1.1;
            r325_s = 0;
            r325_xn$putshapes$9Jrj(r325_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB - r1_O, r1_CAPMIDDLE)['set-width'](0, r1_STROKE)['heads-to'](r1_DOWNWARD)['line-to'](r1_RIGHTSB - r1_O, r1_SMOOTHA)['arc-vh-to'](r1_MIDDLE, r1_O)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_SB + r1_O, r1_SMOOTHB)['to-outline']());
            r325_xn$putshapes$9Jrj(r1_xsStrand(r1_SB + r1_O, r1_SMOOTHB, r1_mix(r1_SB, r1_RIGHTSB, r325_p), r1_CAP - r1_SMOOTHB * r325_pr, r1_HALFSTROKE, r325_fine / 2));
            r325_xn$putshapes$9Jrj(r325_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r325_p), r1_CAP - r1_SMOOTHB * r325_pr)['set-width'](r325_fine, 0)['arc-vh-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_mix(r325_p, r325_l, 0.5)), r1_CAPO)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r1_mix(r1_SB, r1_RIGHTSB, r325_l), r1_CAP - r1_SMOOTHA * r325_pr)['to-outline']());
            r325_xn$putshapes$9Jrj(r1_xsStrand(r1_mix(r1_SB, r1_RIGHTSB, r325_l), r1_CAP - r1_SMOOTHA * r325_pr, r1_mix(r1_SB, r1_RIGHTSB, r325_r), r1_SMOOTHA * r325_s, r325_fine / 2, r325_fine / 2, null, null, r1_SMOOTHA * r325_pr * 0.6));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('at', function _r1_t140() {
            var r328_currentGlyph, r328_xn$setwidth$9Jrj, r328_xn$assignunicode$7Hrq, r328_xn$startfrom$1aao, r328_xn$lineto$5sIl, r328_xn$curveto$1aao, r328_xn$cubicto$1aao, r328_xn$putshapes$9Jrj, r328_xn$reverselast$3qIs, r328_include, r328_xn$createstroke$7Hrq, r328_xn$setanchor$9Jrj, r328_top, r328_bot, r328_otop, r328_obot, r328_sw, r328_m1, r328_m2, r328_sma, r328_smb, _r328_t0, _r328_t1;
            _r328_t0 = this;
            r328_currentGlyph = _r328_t0;
            r328_xn$setwidth$9Jrj = _r328_t0['set-width']['bind'](_r328_t0);
            r328_xn$assignunicode$7Hrq = function _r328_t1(r329_code) {
                var r329_code;
                r328_currentGlyph['assign-unicode'](r329_code);
                return r1_unicodeGlyphs[[r328_currentGlyph['unicode'][r328_currentGlyph['unicode']['length'] - 1]]] = r328_currentGlyph;
            };
            r328_xn$startfrom$1aao = _r328_t0['start-from']['bind'](_r328_t0);
            r328_xn$lineto$5sIl = _r328_t0['line-to']['bind'](_r328_t0);
            r328_xn$curveto$1aao = _r328_t0['curve-to']['bind'](_r328_t0);
            r328_xn$cubicto$1aao = _r328_t0['cubic-to']['bind'](_r328_t0);
            r328_xn$putshapes$9Jrj = _r328_t0['put-shapes']['bind'](_r328_t0);
            r328_xn$reverselast$3qIs = _r328_t0['reverse-last']['bind'](_r328_t0);
            r328_include = _r328_t0['include']['bind'](_r328_t0);
            r328_xn$createstroke$7Hrq = _r328_t0['create-stroke']['bind'](_r328_t0);
            r328_xn$setanchor$9Jrj = _r328_t0['set-anchor']['bind'](_r328_t0);
            _r328_t0['gizmo'] = r1_globalTransform;
            _r328_t0['set-width'](r1_WIDTH);
            r328_xn$setwidth$9Jrj(r1_WIDTH);
            r328_xn$assignunicode$7Hrq('@');
            r328_top = r1_CAP + r1_HALFSTROKE;
            r328_bot = r1_DESCENDER + r1_HALFSTROKE;
            r328_otop = r1_mix(r328_bot, r328_top, 0.75);
            r328_obot = r1_mix(r328_top, r328_bot, 0.8);
            r328_sw = Math['min'](r1_STROKE, (r1_WIDTH - r1_SB * 2) * 0.25);
            r328_m1 = r1_mix(r1_SB + r328_sw, r1_RIGHTSB - r328_sw, 0.47) - r328_sw / 2;
            r328_m2 = r1_mix(r328_m1, r1_RIGHTSB, 0.5);
            r328_sma = r1_SMOOTHA * ((r1_RIGHTSB - r328_m1) / (r1_RIGHTSB - r1_SB));
            r328_smb = r1_SMOOTHB * ((r1_RIGHTSB - r328_m1) / (r1_RIGHTSB - r1_SB));
            r328_xn$putshapes$9Jrj(r328_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r328_otop - r1_O)['heads-to'](r1_LEFTWARD)['set-width'](r328_sw, 0)['line-to'](r328_m2, r328_otop - r1_O)['arc-hv-to'](r328_m1, r328_otop - r328_sma)['line-to'](r328_m1, r328_obot + r328_smb)['arc-vh-to'](r328_m2 + r1_STROKE * r1_globalTransform['yx'], r328_obot + r1_O)['arc-hv-to'](r1_RIGHTSB, r328_obot + r328_sma)['line-to'](r1_RIGHTSB, r328_top - r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r328_top - r1_O)['set-width'](r1_STROKE, 0)['arc-hv-to'](r1_SB, r328_top - r1_SMOOTHA)['set-width'](r328_sw, 0)['line-to'](r1_SB, r328_bot + r1_SMOOTHB)['arc-vh-to'](r1_MIDDLE, r328_bot + r1_O)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB - r1_HALFSTROKE, r328_bot + r1_O)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_hyphenCenter = r1_XH * 0.6;
        r1_parenTop = r1_hyphenCenter + (r1_CAP - r1_XH) * 2.3;
        r1_parenBot = r1_hyphenCenter - (r1_CAP - r1_XH) * 2.3;
        r1_parenMid = r1_mix(r1_parenTop, r1_parenBot, 0.5);
        r1_parenOutside = 0.15;
        r1_parenInside = 0.65;
        r1_bracketOutside = 0.15;
        r1_bracketInside = 0.9;
        r1_braceOutside = 0.1;
        r1_braceInside = 0.9;
        r1_xn$createglyph$7Hrq('parenleft', function _r1_t141() {
            var r331_currentGlyph, r331_xn$setwidth$9Jrj, r331_xn$assignunicode$7Hrq, r331_xn$startfrom$1aao, r331_xn$lineto$5sIl, r331_xn$curveto$1aao, r331_xn$cubicto$1aao, r331_xn$putshapes$9Jrj, r331_xn$reverselast$3qIs, r331_include, r331_xn$createstroke$7Hrq, r331_xn$setanchor$9Jrj, r331_p, _r331_t0, _r331_t1;
            _r331_t0 = this;
            r331_currentGlyph = _r331_t0;
            r331_xn$setwidth$9Jrj = _r331_t0['set-width']['bind'](_r331_t0);
            r331_xn$assignunicode$7Hrq = function _r331_t1(r332_code) {
                var r332_code;
                r331_currentGlyph['assign-unicode'](r332_code);
                return r1_unicodeGlyphs[[r331_currentGlyph['unicode'][r331_currentGlyph['unicode']['length'] - 1]]] = r331_currentGlyph;
            };
            r331_xn$startfrom$1aao = _r331_t0['start-from']['bind'](_r331_t0);
            r331_xn$lineto$5sIl = _r331_t0['line-to']['bind'](_r331_t0);
            r331_xn$curveto$1aao = _r331_t0['curve-to']['bind'](_r331_t0);
            r331_xn$cubicto$1aao = _r331_t0['cubic-to']['bind'](_r331_t0);
            r331_xn$putshapes$9Jrj = _r331_t0['put-shapes']['bind'](_r331_t0);
            r331_xn$reverselast$3qIs = _r331_t0['reverse-last']['bind'](_r331_t0);
            r331_include = _r331_t0['include']['bind'](_r331_t0);
            r331_xn$createstroke$7Hrq = _r331_t0['create-stroke']['bind'](_r331_t0);
            r331_xn$setanchor$9Jrj = _r331_t0['set-anchor']['bind'](_r331_t0);
            _r331_t0['gizmo'] = r1_globalTransform;
            _r331_t0['set-width'](r1_WIDTH);
            r331_xn$setwidth$9Jrj(r1_WIDTH);
            r331_xn$assignunicode$7Hrq('(');
            r331_p = 0.6;
            r331_xn$putshapes$9Jrj(r331_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_parenInside), r1_parenTop)['set-width'](r1_STROKE, 0)['curve-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenTop, r331_p), r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_parenMid)['curve-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenBot, r331_p), r1_mix(r1_SB, r1_RIGHTSB, r1_parenInside), r1_parenBot)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('parenright', function _r1_t142() {
            var r334_currentGlyph, r334_xn$setwidth$9Jrj, r334_xn$assignunicode$7Hrq, r334_xn$startfrom$1aao, r334_xn$lineto$5sIl, r334_xn$curveto$1aao, r334_xn$cubicto$1aao, r334_xn$putshapes$9Jrj, r334_xn$reverselast$3qIs, r334_include, r334_xn$createstroke$7Hrq, r334_xn$setanchor$9Jrj, r334_p, _r334_t0, _r334_t1;
            _r334_t0 = this;
            r334_currentGlyph = _r334_t0;
            r334_xn$setwidth$9Jrj = _r334_t0['set-width']['bind'](_r334_t0);
            r334_xn$assignunicode$7Hrq = function _r334_t1(r335_code) {
                var r335_code;
                r334_currentGlyph['assign-unicode'](r335_code);
                return r1_unicodeGlyphs[[r334_currentGlyph['unicode'][r334_currentGlyph['unicode']['length'] - 1]]] = r334_currentGlyph;
            };
            r334_xn$startfrom$1aao = _r334_t0['start-from']['bind'](_r334_t0);
            r334_xn$lineto$5sIl = _r334_t0['line-to']['bind'](_r334_t0);
            r334_xn$curveto$1aao = _r334_t0['curve-to']['bind'](_r334_t0);
            r334_xn$cubicto$1aao = _r334_t0['cubic-to']['bind'](_r334_t0);
            r334_xn$putshapes$9Jrj = _r334_t0['put-shapes']['bind'](_r334_t0);
            r334_xn$reverselast$3qIs = _r334_t0['reverse-last']['bind'](_r334_t0);
            r334_include = _r334_t0['include']['bind'](_r334_t0);
            r334_xn$createstroke$7Hrq = _r334_t0['create-stroke']['bind'](_r334_t0);
            r334_xn$setanchor$9Jrj = _r334_t0['set-anchor']['bind'](_r334_t0);
            _r334_t0['gizmo'] = r1_globalTransform;
            _r334_t0['set-width'](r1_WIDTH);
            r334_xn$setwidth$9Jrj(r1_WIDTH);
            r334_xn$assignunicode$7Hrq(')');
            r334_p = 0.6;
            r334_xn$putshapes$9Jrj(r334_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_parenInside), r1_parenTop)['set-width'](0, r1_STROKE)['curve-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenTop, r334_p), r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_parenMid)['curve-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenBot, r334_p), r1_mix(r1_RIGHTSB, r1_SB, r1_parenInside), r1_parenBot)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('bracketleft', function _r1_t143() {
            var r337_currentGlyph, r337_xn$setwidth$9Jrj, r337_xn$assignunicode$7Hrq, r337_xn$startfrom$1aao, r337_xn$lineto$5sIl, r337_xn$curveto$1aao, r337_xn$cubicto$1aao, r337_xn$putshapes$9Jrj, r337_xn$reverselast$3qIs, r337_include, r337_xn$createstroke$7Hrq, r337_xn$setanchor$9Jrj, _r337_t0, _r337_t1;
            _r337_t0 = this;
            r337_currentGlyph = _r337_t0;
            r337_xn$setwidth$9Jrj = _r337_t0['set-width']['bind'](_r337_t0);
            r337_xn$assignunicode$7Hrq = function _r337_t1(r338_code) {
                var r338_code;
                r337_currentGlyph['assign-unicode'](r338_code);
                return r1_unicodeGlyphs[[r337_currentGlyph['unicode'][r337_currentGlyph['unicode']['length'] - 1]]] = r337_currentGlyph;
            };
            r337_xn$startfrom$1aao = _r337_t0['start-from']['bind'](_r337_t0);
            r337_xn$lineto$5sIl = _r337_t0['line-to']['bind'](_r337_t0);
            r337_xn$curveto$1aao = _r337_t0['curve-to']['bind'](_r337_t0);
            r337_xn$cubicto$1aao = _r337_t0['cubic-to']['bind'](_r337_t0);
            r337_xn$putshapes$9Jrj = _r337_t0['put-shapes']['bind'](_r337_t0);
            r337_xn$reverselast$3qIs = _r337_t0['reverse-last']['bind'](_r337_t0);
            r337_include = _r337_t0['include']['bind'](_r337_t0);
            r337_xn$createstroke$7Hrq = _r337_t0['create-stroke']['bind'](_r337_t0);
            r337_xn$setanchor$9Jrj = _r337_t0['set-anchor']['bind'](_r337_t0);
            _r337_t0['gizmo'] = r1_globalTransform;
            _r337_t0['set-width'](r1_WIDTH);
            r337_xn$setwidth$9Jrj(r1_WIDTH);
            r337_xn$assignunicode$7Hrq('[');
            r337_xn$putshapes$9Jrj(r337_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenBot)['set-width'](r1_STROKE, 0)['heads-to'](r1_RIGHTWARD)['line-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketInside), r1_parenBot)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r337_xn$putshapes$9Jrj(r337_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenTop)['set-width'](0, r1_STROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketInside), r1_parenTop)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r337_xn$putshapes$9Jrj(r337_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenBot)['set-width'](0, r1_STROKE)['heads-to'](r1_UPWARD)['line-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenTop)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('parenright', function _r1_t144() {
            var r340_currentGlyph, r340_xn$setwidth$9Jrj, r340_xn$assignunicode$7Hrq, r340_xn$startfrom$1aao, r340_xn$lineto$5sIl, r340_xn$curveto$1aao, r340_xn$cubicto$1aao, r340_xn$putshapes$9Jrj, r340_xn$reverselast$3qIs, r340_include, r340_xn$createstroke$7Hrq, r340_xn$setanchor$9Jrj, _r340_t0, _r340_t1;
            _r340_t0 = this;
            r340_currentGlyph = _r340_t0;
            r340_xn$setwidth$9Jrj = _r340_t0['set-width']['bind'](_r340_t0);
            r340_xn$assignunicode$7Hrq = function _r340_t1(r341_code) {
                var r341_code;
                r340_currentGlyph['assign-unicode'](r341_code);
                return r1_unicodeGlyphs[[r340_currentGlyph['unicode'][r340_currentGlyph['unicode']['length'] - 1]]] = r340_currentGlyph;
            };
            r340_xn$startfrom$1aao = _r340_t0['start-from']['bind'](_r340_t0);
            r340_xn$lineto$5sIl = _r340_t0['line-to']['bind'](_r340_t0);
            r340_xn$curveto$1aao = _r340_t0['curve-to']['bind'](_r340_t0);
            r340_xn$cubicto$1aao = _r340_t0['cubic-to']['bind'](_r340_t0);
            r340_xn$putshapes$9Jrj = _r340_t0['put-shapes']['bind'](_r340_t0);
            r340_xn$reverselast$3qIs = _r340_t0['reverse-last']['bind'](_r340_t0);
            r340_include = _r340_t0['include']['bind'](_r340_t0);
            r340_xn$createstroke$7Hrq = _r340_t0['create-stroke']['bind'](_r340_t0);
            r340_xn$setanchor$9Jrj = _r340_t0['set-anchor']['bind'](_r340_t0);
            _r340_t0['gizmo'] = r1_globalTransform;
            _r340_t0['set-width'](r1_WIDTH);
            r340_xn$setwidth$9Jrj(r1_WIDTH);
            r340_xn$assignunicode$7Hrq(']');
            r340_xn$putshapes$9Jrj(r340_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenBot)['set-width'](0, r1_STROKE)['heads-to'](r1_LEFTWARD)['line-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketInside), r1_parenBot)['heads-to'](r1_LEFTWARD)['to-outline']());
            r340_xn$putshapes$9Jrj(r340_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenTop)['set-width'](r1_STROKE, 0)['heads-to'](r1_LEFTWARD)['line-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketInside), r1_parenTop)['heads-to'](r1_LEFTWARD)['to-outline']());
            r340_xn$putshapes$9Jrj(r340_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenBot)['set-width'](r1_STROKE, 0)['heads-to'](r1_UPWARD)['line-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenTop)['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('braceleft', function _r1_t145() {
            var r343_currentGlyph, r343_xn$setwidth$9Jrj, r343_xn$assignunicode$7Hrq, r343_xn$startfrom$1aao, r343_xn$lineto$5sIl, r343_xn$curveto$1aao, r343_xn$cubicto$1aao, r343_xn$putshapes$9Jrj, r343_xn$reverselast$3qIs, r343_include, r343_xn$createstroke$7Hrq, r343_xn$setanchor$9Jrj, r343_parenCenter, r343_radius, _r343_t0, _r343_t1;
            _r343_t0 = this;
            r343_currentGlyph = _r343_t0;
            r343_xn$setwidth$9Jrj = _r343_t0['set-width']['bind'](_r343_t0);
            r343_xn$assignunicode$7Hrq = function _r343_t1(r344_code) {
                var r344_code;
                r343_currentGlyph['assign-unicode'](r344_code);
                return r1_unicodeGlyphs[[r343_currentGlyph['unicode'][r343_currentGlyph['unicode']['length'] - 1]]] = r343_currentGlyph;
            };
            r343_xn$startfrom$1aao = _r343_t0['start-from']['bind'](_r343_t0);
            r343_xn$lineto$5sIl = _r343_t0['line-to']['bind'](_r343_t0);
            r343_xn$curveto$1aao = _r343_t0['curve-to']['bind'](_r343_t0);
            r343_xn$cubicto$1aao = _r343_t0['cubic-to']['bind'](_r343_t0);
            r343_xn$putshapes$9Jrj = _r343_t0['put-shapes']['bind'](_r343_t0);
            r343_xn$reverselast$3qIs = _r343_t0['reverse-last']['bind'](_r343_t0);
            r343_include = _r343_t0['include']['bind'](_r343_t0);
            r343_xn$createstroke$7Hrq = _r343_t0['create-stroke']['bind'](_r343_t0);
            r343_xn$setanchor$9Jrj = _r343_t0['set-anchor']['bind'](_r343_t0);
            _r343_t0['gizmo'] = r1_globalTransform;
            _r343_t0['set-width'](r1_WIDTH);
            r343_xn$setwidth$9Jrj(r1_WIDTH);
            r343_xn$assignunicode$7Hrq('{');
            r343_parenCenter = r1_mix(r1_SB, r1_RIGHTSB, r1_mix(r1_braceInside, r1_braceOutside, 0.5));
            r343_radius = r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside) - r343_parenCenter;
            r343_xn$putshapes$9Jrj(r343_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside), r1_parenTop - r1_HALFSTROKE)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r343_parenCenter, r1_parenTop - r343_radius)['line-to'](r343_parenCenter, r1_parenMid + r343_radius)['arc-vh-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_braceOutside), r1_parenMid)['heads-to'](r1_LEFTWARD)['to-outline']());
            r343_xn$putshapes$9Jrj(r343_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside), r1_parenBot + r1_HALFSTROKE)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_LEFTWARD)['arc-hv-to'](r343_parenCenter, r1_parenBot + r343_radius)['line-to'](r343_parenCenter, r1_parenMid - r343_radius)['arc-vh-to'](r1_mix(r1_SB, r1_RIGHTSB, r1_braceOutside), r1_parenMid)['heads-to'](r1_LEFTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('braceright', function _r1_t146() {
            var r346_currentGlyph, r346_xn$setwidth$9Jrj, r346_xn$assignunicode$7Hrq, r346_xn$startfrom$1aao, r346_xn$lineto$5sIl, r346_xn$curveto$1aao, r346_xn$cubicto$1aao, r346_xn$putshapes$9Jrj, r346_xn$reverselast$3qIs, r346_include, r346_xn$createstroke$7Hrq, r346_xn$setanchor$9Jrj, r346_parenCenter, r346_radius, _r346_t0, _r346_t1;
            _r346_t0 = this;
            r346_currentGlyph = _r346_t0;
            r346_xn$setwidth$9Jrj = _r346_t0['set-width']['bind'](_r346_t0);
            r346_xn$assignunicode$7Hrq = function _r346_t1(r347_code) {
                var r347_code;
                r346_currentGlyph['assign-unicode'](r347_code);
                return r1_unicodeGlyphs[[r346_currentGlyph['unicode'][r346_currentGlyph['unicode']['length'] - 1]]] = r346_currentGlyph;
            };
            r346_xn$startfrom$1aao = _r346_t0['start-from']['bind'](_r346_t0);
            r346_xn$lineto$5sIl = _r346_t0['line-to']['bind'](_r346_t0);
            r346_xn$curveto$1aao = _r346_t0['curve-to']['bind'](_r346_t0);
            r346_xn$cubicto$1aao = _r346_t0['cubic-to']['bind'](_r346_t0);
            r346_xn$putshapes$9Jrj = _r346_t0['put-shapes']['bind'](_r346_t0);
            r346_xn$reverselast$3qIs = _r346_t0['reverse-last']['bind'](_r346_t0);
            r346_include = _r346_t0['include']['bind'](_r346_t0);
            r346_xn$createstroke$7Hrq = _r346_t0['create-stroke']['bind'](_r346_t0);
            r346_xn$setanchor$9Jrj = _r346_t0['set-anchor']['bind'](_r346_t0);
            _r346_t0['gizmo'] = r1_globalTransform;
            _r346_t0['set-width'](r1_WIDTH);
            r346_xn$setwidth$9Jrj(r1_WIDTH);
            r346_xn$assignunicode$7Hrq('}');
            r346_parenCenter = r1_mix(r1_RIGHTSB, r1_SB, r1_mix(r1_braceInside, r1_braceOutside, 0.5));
            r346_radius = r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside) - r346_parenCenter;
            r346_xn$putshapes$9Jrj(r346_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_braceInside), r1_parenTop - r1_HALFSTROKE)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r346_parenCenter, r1_parenTop - r346_radius)['line-to'](r346_parenCenter, r1_parenMid + r346_radius)['arc-vh-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside), r1_parenMid)['heads-to'](r1_RIGHTWARD)['to-outline']());
            r346_xn$putshapes$9Jrj(r346_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_RIGHTSB, r1_SB, r1_braceInside), r1_parenBot + r1_HALFSTROKE)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_RIGHTWARD)['arc-hv-to'](r346_parenCenter, r1_parenBot + r346_radius)['line-to'](r346_parenCenter, r1_parenMid - r346_radius)['arc-vh-to'](r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside), r1_parenMid)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('period', function _r1_t147() {
            var r349_currentGlyph, r349_xn$setwidth$9Jrj, r349_xn$assignunicode$7Hrq, r349_xn$startfrom$1aao, r349_xn$lineto$5sIl, r349_xn$curveto$1aao, r349_xn$cubicto$1aao, r349_xn$putshapes$9Jrj, r349_xn$reverselast$3qIs, r349_include, r349_xn$createstroke$7Hrq, r349_xn$setanchor$9Jrj, _r349_t0, _r349_t1;
            _r349_t0 = this;
            r349_currentGlyph = _r349_t0;
            r349_xn$setwidth$9Jrj = _r349_t0['set-width']['bind'](_r349_t0);
            r349_xn$assignunicode$7Hrq = function _r349_t1(r350_code) {
                var r350_code;
                r349_currentGlyph['assign-unicode'](r350_code);
                return r1_unicodeGlyphs[[r349_currentGlyph['unicode'][r349_currentGlyph['unicode']['length'] - 1]]] = r349_currentGlyph;
            };
            r349_xn$startfrom$1aao = _r349_t0['start-from']['bind'](_r349_t0);
            r349_xn$lineto$5sIl = _r349_t0['line-to']['bind'](_r349_t0);
            r349_xn$curveto$1aao = _r349_t0['curve-to']['bind'](_r349_t0);
            r349_xn$cubicto$1aao = _r349_t0['cubic-to']['bind'](_r349_t0);
            r349_xn$putshapes$9Jrj = _r349_t0['put-shapes']['bind'](_r349_t0);
            r349_xn$reverselast$3qIs = _r349_t0['reverse-last']['bind'](_r349_t0);
            r349_include = _r349_t0['include']['bind'](_r349_t0);
            r349_xn$createstroke$7Hrq = _r349_t0['create-stroke']['bind'](_r349_t0);
            r349_xn$setanchor$9Jrj = _r349_t0['set-anchor']['bind'](_r349_t0);
            _r349_t0['gizmo'] = r1_globalTransform;
            _r349_t0['set-width'](r1_WIDTH);
            r349_xn$setwidth$9Jrj(r1_WIDTH);
            r349_xn$assignunicode$7Hrq('.');
            r349_xn$putshapes$9Jrj([r1_Ring(r1_PERIODSIZE - r1_O, r1_O, r1_MIDDLE - r1_PERIODRADIUS + r1_O, r1_MIDDLE + r1_PERIODRADIUS - r1_O)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('xhdot', function _r1_t148() {
            var r352_currentGlyph, r352_xn$setwidth$9Jrj, r352_xn$assignunicode$7Hrq, r352_xn$startfrom$1aao, r352_xn$lineto$5sIl, r352_xn$curveto$1aao, r352_xn$cubicto$1aao, r352_xn$putshapes$9Jrj, r352_xn$reverselast$3qIs, r352_include, r352_xn$createstroke$7Hrq, r352_xn$setanchor$9Jrj, _r352_t0, _r352_t1;
            _r352_t0 = this;
            r352_currentGlyph = _r352_t0;
            r352_xn$setwidth$9Jrj = _r352_t0['set-width']['bind'](_r352_t0);
            r352_xn$assignunicode$7Hrq = function _r352_t1(r353_code) {
                var r353_code;
                r352_currentGlyph['assign-unicode'](r353_code);
                return r1_unicodeGlyphs[[r352_currentGlyph['unicode'][r352_currentGlyph['unicode']['length'] - 1]]] = r352_currentGlyph;
            };
            r352_xn$startfrom$1aao = _r352_t0['start-from']['bind'](_r352_t0);
            r352_xn$lineto$5sIl = _r352_t0['line-to']['bind'](_r352_t0);
            r352_xn$curveto$1aao = _r352_t0['curve-to']['bind'](_r352_t0);
            r352_xn$cubicto$1aao = _r352_t0['cubic-to']['bind'](_r352_t0);
            r352_xn$putshapes$9Jrj = _r352_t0['put-shapes']['bind'](_r352_t0);
            r352_xn$reverselast$3qIs = _r352_t0['reverse-last']['bind'](_r352_t0);
            r352_include = _r352_t0['include']['bind'](_r352_t0);
            r352_xn$createstroke$7Hrq = _r352_t0['create-stroke']['bind'](_r352_t0);
            r352_xn$setanchor$9Jrj = _r352_t0['set-anchor']['bind'](_r352_t0);
            _r352_t0['gizmo'] = r1_globalTransform;
            _r352_t0['set-width'](r1_WIDTH);
            r352_xn$setwidth$9Jrj(r1_WIDTH);
            r352_xn$putshapes$9Jrj([r1_Ring(r1_XH - r1_O, r1_XH - r1_PERIODSIZE + r1_O, r1_MIDDLE - r1_PERIODRADIUS + r1_O, r1_MIDDLE + r1_PERIODRADIUS - r1_O)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('comma', function _r1_t149() {
            var r355_currentGlyph, r355_xn$setwidth$9Jrj, r355_xn$assignunicode$7Hrq, r355_xn$startfrom$1aao, r355_xn$lineto$5sIl, r355_xn$curveto$1aao, r355_xn$cubicto$1aao, r355_xn$putshapes$9Jrj, r355_xn$reverselast$3qIs, r355_include, r355_xn$createstroke$7Hrq, r355_xn$setanchor$9Jrj, r355_sw, _r355_t0, _r355_t1;
            _r355_t0 = this;
            r355_currentGlyph = _r355_t0;
            r355_xn$setwidth$9Jrj = _r355_t0['set-width']['bind'](_r355_t0);
            r355_xn$assignunicode$7Hrq = function _r355_t1(r356_code) {
                var r356_code;
                r355_currentGlyph['assign-unicode'](r356_code);
                return r1_unicodeGlyphs[[r355_currentGlyph['unicode'][r355_currentGlyph['unicode']['length'] - 1]]] = r355_currentGlyph;
            };
            r355_xn$startfrom$1aao = _r355_t0['start-from']['bind'](_r355_t0);
            r355_xn$lineto$5sIl = _r355_t0['line-to']['bind'](_r355_t0);
            r355_xn$curveto$1aao = _r355_t0['curve-to']['bind'](_r355_t0);
            r355_xn$cubicto$1aao = _r355_t0['cubic-to']['bind'](_r355_t0);
            r355_xn$putshapes$9Jrj = _r355_t0['put-shapes']['bind'](_r355_t0);
            r355_xn$reverselast$3qIs = _r355_t0['reverse-last']['bind'](_r355_t0);
            r355_include = _r355_t0['include']['bind'](_r355_t0);
            r355_xn$createstroke$7Hrq = _r355_t0['create-stroke']['bind'](_r355_t0);
            r355_xn$setanchor$9Jrj = _r355_t0['set-anchor']['bind'](_r355_t0);
            _r355_t0['gizmo'] = r1_globalTransform;
            _r355_t0['set-width'](r1_WIDTH);
            r355_xn$setwidth$9Jrj(r1_WIDTH);
            r355_xn$assignunicode$7Hrq(',');
            r355_include(r1_glyphs['period']);
            r355_sw = r1_PERIODSIZE * 0.5;
            r355_xn$putshapes$9Jrj(r355_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE + r1_PERIODRADIUS - r1_O, r1_mix(r1_O, r1_PERIODSIZE - r1_O, 0.5))['set-width'](0, r355_sw)['curve-to'](r1_MIDDLE + r1_PERIODRADIUS - r1_O, r1_mix(r1_mix(r1_O, r1_PERIODSIZE - r1_O, 0.5), r1_DESCENDER, 0.5), r1_mix(r1_MIDDLE, r1_MIDDLE - r1_PERIODRADIUS, 0.3), r1_DESCENDER)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('colon', function _r1_t150() {
            var r358_currentGlyph, r358_xn$setwidth$9Jrj, r358_xn$assignunicode$7Hrq, r358_xn$startfrom$1aao, r358_xn$lineto$5sIl, r358_xn$curveto$1aao, r358_xn$cubicto$1aao, r358_xn$putshapes$9Jrj, r358_xn$reverselast$3qIs, r358_include, r358_xn$createstroke$7Hrq, r358_xn$setanchor$9Jrj, _r358_t0, _r358_t1;
            _r358_t0 = this;
            r358_currentGlyph = _r358_t0;
            r358_xn$setwidth$9Jrj = _r358_t0['set-width']['bind'](_r358_t0);
            r358_xn$assignunicode$7Hrq = function _r358_t1(r359_code) {
                var r359_code;
                r358_currentGlyph['assign-unicode'](r359_code);
                return r1_unicodeGlyphs[[r358_currentGlyph['unicode'][r358_currentGlyph['unicode']['length'] - 1]]] = r358_currentGlyph;
            };
            r358_xn$startfrom$1aao = _r358_t0['start-from']['bind'](_r358_t0);
            r358_xn$lineto$5sIl = _r358_t0['line-to']['bind'](_r358_t0);
            r358_xn$curveto$1aao = _r358_t0['curve-to']['bind'](_r358_t0);
            r358_xn$cubicto$1aao = _r358_t0['cubic-to']['bind'](_r358_t0);
            r358_xn$putshapes$9Jrj = _r358_t0['put-shapes']['bind'](_r358_t0);
            r358_xn$reverselast$3qIs = _r358_t0['reverse-last']['bind'](_r358_t0);
            r358_include = _r358_t0['include']['bind'](_r358_t0);
            r358_xn$createstroke$7Hrq = _r358_t0['create-stroke']['bind'](_r358_t0);
            r358_xn$setanchor$9Jrj = _r358_t0['set-anchor']['bind'](_r358_t0);
            _r358_t0['gizmo'] = r1_globalTransform;
            _r358_t0['set-width'](r1_WIDTH);
            r358_xn$setwidth$9Jrj(r1_WIDTH);
            r358_xn$assignunicode$7Hrq(':');
            r358_include(r1_glyphs['period']);
            r358_include(r1_glyphs['xhdot']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('semicolon', function _r1_t151() {
            var r361_currentGlyph, r361_xn$setwidth$9Jrj, r361_xn$assignunicode$7Hrq, r361_xn$startfrom$1aao, r361_xn$lineto$5sIl, r361_xn$curveto$1aao, r361_xn$cubicto$1aao, r361_xn$putshapes$9Jrj, r361_xn$reverselast$3qIs, r361_include, r361_xn$createstroke$7Hrq, r361_xn$setanchor$9Jrj, _r361_t0, _r361_t1;
            _r361_t0 = this;
            r361_currentGlyph = _r361_t0;
            r361_xn$setwidth$9Jrj = _r361_t0['set-width']['bind'](_r361_t0);
            r361_xn$assignunicode$7Hrq = function _r361_t1(r362_code) {
                var r362_code;
                r361_currentGlyph['assign-unicode'](r362_code);
                return r1_unicodeGlyphs[[r361_currentGlyph['unicode'][r361_currentGlyph['unicode']['length'] - 1]]] = r361_currentGlyph;
            };
            r361_xn$startfrom$1aao = _r361_t0['start-from']['bind'](_r361_t0);
            r361_xn$lineto$5sIl = _r361_t0['line-to']['bind'](_r361_t0);
            r361_xn$curveto$1aao = _r361_t0['curve-to']['bind'](_r361_t0);
            r361_xn$cubicto$1aao = _r361_t0['cubic-to']['bind'](_r361_t0);
            r361_xn$putshapes$9Jrj = _r361_t0['put-shapes']['bind'](_r361_t0);
            r361_xn$reverselast$3qIs = _r361_t0['reverse-last']['bind'](_r361_t0);
            r361_include = _r361_t0['include']['bind'](_r361_t0);
            r361_xn$createstroke$7Hrq = _r361_t0['create-stroke']['bind'](_r361_t0);
            r361_xn$setanchor$9Jrj = _r361_t0['set-anchor']['bind'](_r361_t0);
            _r361_t0['gizmo'] = r1_globalTransform;
            _r361_t0['set-width'](r1_WIDTH);
            r361_xn$setwidth$9Jrj(r1_WIDTH);
            r361_xn$assignunicode$7Hrq(';');
            r361_include(r1_glyphs['comma']);
            r361_include(r1_glyphs['xhdot']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('question', function _r1_t152() {
            var r364_currentGlyph, r364_xn$setwidth$9Jrj, r364_xn$assignunicode$7Hrq, r364_xn$startfrom$1aao, r364_xn$lineto$5sIl, r364_xn$curveto$1aao, r364_xn$cubicto$1aao, r364_xn$putshapes$9Jrj, r364_xn$reverselast$3qIs, r364_include, r364_xn$createstroke$7Hrq, r364_xn$setanchor$9Jrj, _r364_t0, _r364_t1;
            _r364_t0 = this;
            r364_currentGlyph = _r364_t0;
            r364_xn$setwidth$9Jrj = _r364_t0['set-width']['bind'](_r364_t0);
            r364_xn$assignunicode$7Hrq = function _r364_t1(r365_code) {
                var r365_code;
                r364_currentGlyph['assign-unicode'](r365_code);
                return r1_unicodeGlyphs[[r364_currentGlyph['unicode'][r364_currentGlyph['unicode']['length'] - 1]]] = r364_currentGlyph;
            };
            r364_xn$startfrom$1aao = _r364_t0['start-from']['bind'](_r364_t0);
            r364_xn$lineto$5sIl = _r364_t0['line-to']['bind'](_r364_t0);
            r364_xn$curveto$1aao = _r364_t0['curve-to']['bind'](_r364_t0);
            r364_xn$cubicto$1aao = _r364_t0['cubic-to']['bind'](_r364_t0);
            r364_xn$putshapes$9Jrj = _r364_t0['put-shapes']['bind'](_r364_t0);
            r364_xn$reverselast$3qIs = _r364_t0['reverse-last']['bind'](_r364_t0);
            r364_include = _r364_t0['include']['bind'](_r364_t0);
            r364_xn$createstroke$7Hrq = _r364_t0['create-stroke']['bind'](_r364_t0);
            r364_xn$setanchor$9Jrj = _r364_t0['set-anchor']['bind'](_r364_t0);
            _r364_t0['gizmo'] = r1_globalTransform;
            _r364_t0['set-width'](r1_WIDTH);
            r364_xn$setwidth$9Jrj(r1_WIDTH);
            r364_xn$assignunicode$7Hrq('?');
            r364_xn$putshapes$9Jrj(r1_xsStrand(r1_MIDDLE - r1_HALFSTROKE, r1_mix(r1_DOTSIZE + r1_STROKE, r1_XH / 2, 0.5), r1_RIGHTSB, r1_CAP - r1_SMOOTHB));
            r364_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK));
            r364_xn$putshapes$9Jrj([r1_Ring(r1_DOTSIZE - r1_O, r1_O, r1_MIDDLE - r1_DOTRADIUS + r1_O, r1_MIDDLE + r1_DOTRADIUS - r1_O)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('exclam', function _r1_t153() {
            var r367_currentGlyph, r367_xn$setwidth$9Jrj, r367_xn$assignunicode$7Hrq, r367_xn$startfrom$1aao, r367_xn$lineto$5sIl, r367_xn$curveto$1aao, r367_xn$cubicto$1aao, r367_xn$putshapes$9Jrj, r367_xn$reverselast$3qIs, r367_include, r367_xn$createstroke$7Hrq, r367_xn$setanchor$9Jrj, _r367_t0, _r367_t1;
            _r367_t0 = this;
            r367_currentGlyph = _r367_t0;
            r367_xn$setwidth$9Jrj = _r367_t0['set-width']['bind'](_r367_t0);
            r367_xn$assignunicode$7Hrq = function _r367_t1(r368_code) {
                var r368_code;
                r367_currentGlyph['assign-unicode'](r368_code);
                return r1_unicodeGlyphs[[r367_currentGlyph['unicode'][r367_currentGlyph['unicode']['length'] - 1]]] = r367_currentGlyph;
            };
            r367_xn$startfrom$1aao = _r367_t0['start-from']['bind'](_r367_t0);
            r367_xn$lineto$5sIl = _r367_t0['line-to']['bind'](_r367_t0);
            r367_xn$curveto$1aao = _r367_t0['curve-to']['bind'](_r367_t0);
            r367_xn$cubicto$1aao = _r367_t0['cubic-to']['bind'](_r367_t0);
            r367_xn$putshapes$9Jrj = _r367_t0['put-shapes']['bind'](_r367_t0);
            r367_xn$reverselast$3qIs = _r367_t0['reverse-last']['bind'](_r367_t0);
            r367_include = _r367_t0['include']['bind'](_r367_t0);
            r367_xn$createstroke$7Hrq = _r367_t0['create-stroke']['bind'](_r367_t0);
            r367_xn$setanchor$9Jrj = _r367_t0['set-anchor']['bind'](_r367_t0);
            _r367_t0['gizmo'] = r1_globalTransform;
            _r367_t0['set-width'](r1_WIDTH);
            r367_xn$setwidth$9Jrj(r1_WIDTH);
            r367_xn$assignunicode$7Hrq('!');
            r367_xn$putshapes$9Jrj(r367_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_CAP)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_DOWNWARD)['line-to'](r1_MIDDLE, r1_mix(r1_DOTSIZE + r1_STROKE, r1_XH / 2, 0.5))['heads-to'](r1_DOWNWARD)['to-outline']());
            r367_xn$putshapes$9Jrj([r1_Ring(r1_DOTSIZE - r1_O, r1_O, r1_MIDDLE - r1_DOTRADIUS + r1_O, r1_MIDDLE + r1_DOTRADIUS - r1_O)]);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('underscore', function _r1_t154() {
            var r370_currentGlyph, r370_xn$setwidth$9Jrj, r370_xn$assignunicode$7Hrq, r370_xn$startfrom$1aao, r370_xn$lineto$5sIl, r370_xn$curveto$1aao, r370_xn$cubicto$1aao, r370_xn$putshapes$9Jrj, r370_xn$reverselast$3qIs, r370_include, r370_xn$createstroke$7Hrq, r370_xn$setanchor$9Jrj, _r370_t0, _r370_t1;
            _r370_t0 = this;
            r370_currentGlyph = _r370_t0;
            r370_xn$setwidth$9Jrj = _r370_t0['set-width']['bind'](_r370_t0);
            r370_xn$assignunicode$7Hrq = function _r370_t1(r371_code) {
                var r371_code;
                r370_currentGlyph['assign-unicode'](r371_code);
                return r1_unicodeGlyphs[[r370_currentGlyph['unicode'][r370_currentGlyph['unicode']['length'] - 1]]] = r370_currentGlyph;
            };
            r370_xn$startfrom$1aao = _r370_t0['start-from']['bind'](_r370_t0);
            r370_xn$lineto$5sIl = _r370_t0['line-to']['bind'](_r370_t0);
            r370_xn$curveto$1aao = _r370_t0['curve-to']['bind'](_r370_t0);
            r370_xn$cubicto$1aao = _r370_t0['cubic-to']['bind'](_r370_t0);
            r370_xn$putshapes$9Jrj = _r370_t0['put-shapes']['bind'](_r370_t0);
            r370_xn$reverselast$3qIs = _r370_t0['reverse-last']['bind'](_r370_t0);
            r370_include = _r370_t0['include']['bind'](_r370_t0);
            r370_xn$createstroke$7Hrq = _r370_t0['create-stroke']['bind'](_r370_t0);
            r370_xn$setanchor$9Jrj = _r370_t0['set-anchor']['bind'](_r370_t0);
            _r370_t0['gizmo'] = r1_globalTransform;
            _r370_t0['set-width'](r1_WIDTH);
            r370_xn$setwidth$9Jrj(r1_WIDTH);
            r370_xn$assignunicode$7Hrq('_');
            r370_xn$putshapes$9Jrj(r370_xn$createstroke$7Hrq()['start-from'](r1_SB, 0)['heads-to'](r1_RIGHTWARD)['set-width'](r1_STROKE, 0)['line-to'](r1_RIGHTSB, 0)['heads-to'](r1_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('hyphen', function _r1_t155() {
            var r373_currentGlyph, r373_xn$setwidth$9Jrj, r373_xn$assignunicode$7Hrq, r373_xn$startfrom$1aao, r373_xn$lineto$5sIl, r373_xn$curveto$1aao, r373_xn$cubicto$1aao, r373_xn$putshapes$9Jrj, r373_xn$reverselast$3qIs, r373_include, r373_xn$createstroke$7Hrq, r373_xn$setanchor$9Jrj, _r373_t0, _r373_t1;
            _r373_t0 = this;
            r373_currentGlyph = _r373_t0;
            r373_xn$setwidth$9Jrj = _r373_t0['set-width']['bind'](_r373_t0);
            r373_xn$assignunicode$7Hrq = function _r373_t1(r374_code) {
                var r374_code;
                r373_currentGlyph['assign-unicode'](r374_code);
                return r1_unicodeGlyphs[[r373_currentGlyph['unicode'][r373_currentGlyph['unicode']['length'] - 1]]] = r373_currentGlyph;
            };
            r373_xn$startfrom$1aao = _r373_t0['start-from']['bind'](_r373_t0);
            r373_xn$lineto$5sIl = _r373_t0['line-to']['bind'](_r373_t0);
            r373_xn$curveto$1aao = _r373_t0['curve-to']['bind'](_r373_t0);
            r373_xn$cubicto$1aao = _r373_t0['cubic-to']['bind'](_r373_t0);
            r373_xn$putshapes$9Jrj = _r373_t0['put-shapes']['bind'](_r373_t0);
            r373_xn$reverselast$3qIs = _r373_t0['reverse-last']['bind'](_r373_t0);
            r373_include = _r373_t0['include']['bind'](_r373_t0);
            r373_xn$createstroke$7Hrq = _r373_t0['create-stroke']['bind'](_r373_t0);
            r373_xn$setanchor$9Jrj = _r373_t0['set-anchor']['bind'](_r373_t0);
            _r373_t0['gizmo'] = r1_globalTransform;
            _r373_t0['set-width'](r1_WIDTH);
            r373_xn$setwidth$9Jrj(r1_WIDTH);
            r373_xn$assignunicode$7Hrq('-');
            r373_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('plus', function _r1_t156() {
            var r376_currentGlyph, r376_xn$setwidth$9Jrj, r376_xn$assignunicode$7Hrq, r376_xn$startfrom$1aao, r376_xn$lineto$5sIl, r376_xn$curveto$1aao, r376_xn$cubicto$1aao, r376_xn$putshapes$9Jrj, r376_xn$reverselast$3qIs, r376_include, r376_xn$createstroke$7Hrq, r376_xn$setanchor$9Jrj, _r376_t0, _r376_t1;
            _r376_t0 = this;
            r376_currentGlyph = _r376_t0;
            r376_xn$setwidth$9Jrj = _r376_t0['set-width']['bind'](_r376_t0);
            r376_xn$assignunicode$7Hrq = function _r376_t1(r377_code) {
                var r377_code;
                r376_currentGlyph['assign-unicode'](r377_code);
                return r1_unicodeGlyphs[[r376_currentGlyph['unicode'][r376_currentGlyph['unicode']['length'] - 1]]] = r376_currentGlyph;
            };
            r376_xn$startfrom$1aao = _r376_t0['start-from']['bind'](_r376_t0);
            r376_xn$lineto$5sIl = _r376_t0['line-to']['bind'](_r376_t0);
            r376_xn$curveto$1aao = _r376_t0['curve-to']['bind'](_r376_t0);
            r376_xn$cubicto$1aao = _r376_t0['cubic-to']['bind'](_r376_t0);
            r376_xn$putshapes$9Jrj = _r376_t0['put-shapes']['bind'](_r376_t0);
            r376_xn$reverselast$3qIs = _r376_t0['reverse-last']['bind'](_r376_t0);
            r376_include = _r376_t0['include']['bind'](_r376_t0);
            r376_xn$createstroke$7Hrq = _r376_t0['create-stroke']['bind'](_r376_t0);
            r376_xn$setanchor$9Jrj = _r376_t0['set-anchor']['bind'](_r376_t0);
            _r376_t0['gizmo'] = r1_globalTransform;
            _r376_t0['set-width'](r1_WIDTH);
            r376_xn$setwidth$9Jrj(r1_WIDTH);
            r376_xn$assignunicode$7Hrq('+');
            r376_include(r1_glyphs['hyphen']);
            r376_xn$putshapes$9Jrj(r1_vbar(r1_MIDDLE, r1_hyphenCenter - (r1_RIGHTSB - r1_SB) * 0.55, r1_hyphenCenter + (r1_RIGHTSB - r1_SB) * 0.55));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('equal', function _r1_t157() {
            var r379_currentGlyph, r379_xn$setwidth$9Jrj, r379_xn$assignunicode$7Hrq, r379_xn$startfrom$1aao, r379_xn$lineto$5sIl, r379_xn$curveto$1aao, r379_xn$cubicto$1aao, r379_xn$putshapes$9Jrj, r379_xn$reverselast$3qIs, r379_include, r379_xn$createstroke$7Hrq, r379_xn$setanchor$9Jrj, _r379_t0, _r379_t1;
            _r379_t0 = this;
            r379_currentGlyph = _r379_t0;
            r379_xn$setwidth$9Jrj = _r379_t0['set-width']['bind'](_r379_t0);
            r379_xn$assignunicode$7Hrq = function _r379_t1(r380_code) {
                var r380_code;
                r379_currentGlyph['assign-unicode'](r380_code);
                return r1_unicodeGlyphs[[r379_currentGlyph['unicode'][r379_currentGlyph['unicode']['length'] - 1]]] = r379_currentGlyph;
            };
            r379_xn$startfrom$1aao = _r379_t0['start-from']['bind'](_r379_t0);
            r379_xn$lineto$5sIl = _r379_t0['line-to']['bind'](_r379_t0);
            r379_xn$curveto$1aao = _r379_t0['curve-to']['bind'](_r379_t0);
            r379_xn$cubicto$1aao = _r379_t0['cubic-to']['bind'](_r379_t0);
            r379_xn$putshapes$9Jrj = _r379_t0['put-shapes']['bind'](_r379_t0);
            r379_xn$reverselast$3qIs = _r379_t0['reverse-last']['bind'](_r379_t0);
            r379_include = _r379_t0['include']['bind'](_r379_t0);
            r379_xn$createstroke$7Hrq = _r379_t0['create-stroke']['bind'](_r379_t0);
            r379_xn$setanchor$9Jrj = _r379_t0['set-anchor']['bind'](_r379_t0);
            _r379_t0['gizmo'] = r1_globalTransform;
            _r379_t0['set-width'](r1_WIDTH);
            r379_xn$setwidth$9Jrj(r1_WIDTH);
            r379_xn$assignunicode$7Hrq('=');
            r379_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter - r1_XH * 0.2));
            r379_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter + r1_XH * 0.2));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('bar', function _r1_t158() {
            var r382_currentGlyph, r382_xn$setwidth$9Jrj, r382_xn$assignunicode$7Hrq, r382_xn$startfrom$1aao, r382_xn$lineto$5sIl, r382_xn$curveto$1aao, r382_xn$cubicto$1aao, r382_xn$putshapes$9Jrj, r382_xn$reverselast$3qIs, r382_include, r382_xn$createstroke$7Hrq, r382_xn$setanchor$9Jrj, _r382_t0, _r382_t1;
            _r382_t0 = this;
            r382_currentGlyph = _r382_t0;
            r382_xn$setwidth$9Jrj = _r382_t0['set-width']['bind'](_r382_t0);
            r382_xn$assignunicode$7Hrq = function _r382_t1(r383_code) {
                var r383_code;
                r382_currentGlyph['assign-unicode'](r383_code);
                return r1_unicodeGlyphs[[r382_currentGlyph['unicode'][r382_currentGlyph['unicode']['length'] - 1]]] = r382_currentGlyph;
            };
            r382_xn$startfrom$1aao = _r382_t0['start-from']['bind'](_r382_t0);
            r382_xn$lineto$5sIl = _r382_t0['line-to']['bind'](_r382_t0);
            r382_xn$curveto$1aao = _r382_t0['curve-to']['bind'](_r382_t0);
            r382_xn$cubicto$1aao = _r382_t0['cubic-to']['bind'](_r382_t0);
            r382_xn$putshapes$9Jrj = _r382_t0['put-shapes']['bind'](_r382_t0);
            r382_xn$reverselast$3qIs = _r382_t0['reverse-last']['bind'](_r382_t0);
            r382_include = _r382_t0['include']['bind'](_r382_t0);
            r382_xn$createstroke$7Hrq = _r382_t0['create-stroke']['bind'](_r382_t0);
            r382_xn$setanchor$9Jrj = _r382_t0['set-anchor']['bind'](_r382_t0);
            _r382_t0['gizmo'] = r1_globalTransform;
            _r382_t0['set-width'](r1_WIDTH);
            r382_xn$setwidth$9Jrj(r1_WIDTH);
            r382_xn$assignunicode$7Hrq('|');
            r382_xn$putshapes$9Jrj(r382_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_parenTop)['heads-to'](r1_DOWNWARD)['set-width'](r1_STROKE / 2, r1_STROKE / 2)['line-to'](r1_MIDDLE, r1_parenBot)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('slash', function _r1_t159() {
            var r385_currentGlyph, r385_xn$setwidth$9Jrj, r385_xn$assignunicode$7Hrq, r385_xn$startfrom$1aao, r385_xn$lineto$5sIl, r385_xn$curveto$1aao, r385_xn$cubicto$1aao, r385_xn$putshapes$9Jrj, r385_xn$reverselast$3qIs, r385_include, r385_xn$createstroke$7Hrq, r385_xn$setanchor$9Jrj, r385_cor, _r385_t0, _r385_t1;
            _r385_t0 = this;
            r385_currentGlyph = _r385_t0;
            r385_xn$setwidth$9Jrj = _r385_t0['set-width']['bind'](_r385_t0);
            r385_xn$assignunicode$7Hrq = function _r385_t1(r386_code) {
                var r386_code;
                r385_currentGlyph['assign-unicode'](r386_code);
                return r1_unicodeGlyphs[[r385_currentGlyph['unicode'][r385_currentGlyph['unicode']['length'] - 1]]] = r385_currentGlyph;
            };
            r385_xn$startfrom$1aao = _r385_t0['start-from']['bind'](_r385_t0);
            r385_xn$lineto$5sIl = _r385_t0['line-to']['bind'](_r385_t0);
            r385_xn$curveto$1aao = _r385_t0['curve-to']['bind'](_r385_t0);
            r385_xn$cubicto$1aao = _r385_t0['cubic-to']['bind'](_r385_t0);
            r385_xn$putshapes$9Jrj = _r385_t0['put-shapes']['bind'](_r385_t0);
            r385_xn$reverselast$3qIs = _r385_t0['reverse-last']['bind'](_r385_t0);
            r385_include = _r385_t0['include']['bind'](_r385_t0);
            r385_xn$createstroke$7Hrq = _r385_t0['create-stroke']['bind'](_r385_t0);
            r385_xn$setanchor$9Jrj = _r385_t0['set-anchor']['bind'](_r385_t0);
            _r385_t0['gizmo'] = r1_globalTransform;
            _r385_t0['set-width'](r1_WIDTH);
            r385_xn$setwidth$9Jrj(r1_WIDTH);
            r385_xn$assignunicode$7Hrq('/');
            r385_cor = 1 / Math['sqrt'](1 - Math['pow']((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_parenTop - r1_parenBot), 2));
            r385_xn$startfrom$1aao(r1_SB, r1_parenBot);
            r385_xn$lineto$5sIl(r1_SB + r1_STROKE * r385_cor, r1_parenBot);
            r385_xn$lineto$5sIl(r1_RIGHTSB, r1_parenTop);
            r385_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r385_cor, r1_parenTop);
            r385_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('backslash', function _r1_t160() {
            var r388_currentGlyph, r388_xn$setwidth$9Jrj, r388_xn$assignunicode$7Hrq, r388_xn$startfrom$1aao, r388_xn$lineto$5sIl, r388_xn$curveto$1aao, r388_xn$cubicto$1aao, r388_xn$putshapes$9Jrj, r388_xn$reverselast$3qIs, r388_include, r388_xn$createstroke$7Hrq, r388_xn$setanchor$9Jrj, r388_cor, _r388_t0, _r388_t1;
            _r388_t0 = this;
            r388_currentGlyph = _r388_t0;
            r388_xn$setwidth$9Jrj = _r388_t0['set-width']['bind'](_r388_t0);
            r388_xn$assignunicode$7Hrq = function _r388_t1(r389_code) {
                var r389_code;
                r388_currentGlyph['assign-unicode'](r389_code);
                return r1_unicodeGlyphs[[r388_currentGlyph['unicode'][r388_currentGlyph['unicode']['length'] - 1]]] = r388_currentGlyph;
            };
            r388_xn$startfrom$1aao = _r388_t0['start-from']['bind'](_r388_t0);
            r388_xn$lineto$5sIl = _r388_t0['line-to']['bind'](_r388_t0);
            r388_xn$curveto$1aao = _r388_t0['curve-to']['bind'](_r388_t0);
            r388_xn$cubicto$1aao = _r388_t0['cubic-to']['bind'](_r388_t0);
            r388_xn$putshapes$9Jrj = _r388_t0['put-shapes']['bind'](_r388_t0);
            r388_xn$reverselast$3qIs = _r388_t0['reverse-last']['bind'](_r388_t0);
            r388_include = _r388_t0['include']['bind'](_r388_t0);
            r388_xn$createstroke$7Hrq = _r388_t0['create-stroke']['bind'](_r388_t0);
            r388_xn$setanchor$9Jrj = _r388_t0['set-anchor']['bind'](_r388_t0);
            _r388_t0['gizmo'] = r1_globalTransform;
            _r388_t0['set-width'](r1_WIDTH);
            r388_xn$setwidth$9Jrj(r1_WIDTH);
            r388_xn$assignunicode$7Hrq('\\');
            r388_cor = 1 / Math['sqrt'](1 - Math['pow']((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_parenTop - r1_parenBot), 2));
            r388_xn$startfrom$1aao(r1_RIGHTSB, r1_parenBot);
            r388_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r388_cor, r1_parenBot);
            r388_xn$lineto$5sIl(r1_SB, r1_parenTop);
            r388_xn$lineto$5sIl(r1_SB + r1_STROKE * r388_cor, r1_parenTop);
            r388_xn$reverselast$3qIs();
            return void 0;
        });
        r1_xn$createglyph$7Hrq('numbersign', function _r1_t161() {
            var r391_currentGlyph, r391_xn$setwidth$9Jrj, r391_xn$assignunicode$7Hrq, r391_xn$startfrom$1aao, r391_xn$lineto$5sIl, r391_xn$curveto$1aao, r391_xn$cubicto$1aao, r391_xn$putshapes$9Jrj, r391_xn$reverselast$3qIs, r391_include, r391_xn$createstroke$7Hrq, r391_xn$setanchor$9Jrj, r391_fine, _r391_t0, _r391_t1;
            _r391_t0 = this;
            r391_currentGlyph = _r391_t0;
            r391_xn$setwidth$9Jrj = _r391_t0['set-width']['bind'](_r391_t0);
            r391_xn$assignunicode$7Hrq = function _r391_t1(r392_code) {
                var r392_code;
                r391_currentGlyph['assign-unicode'](r392_code);
                return r1_unicodeGlyphs[[r391_currentGlyph['unicode'][r391_currentGlyph['unicode']['length'] - 1]]] = r391_currentGlyph;
            };
            r391_xn$startfrom$1aao = _r391_t0['start-from']['bind'](_r391_t0);
            r391_xn$lineto$5sIl = _r391_t0['line-to']['bind'](_r391_t0);
            r391_xn$curveto$1aao = _r391_t0['curve-to']['bind'](_r391_t0);
            r391_xn$cubicto$1aao = _r391_t0['cubic-to']['bind'](_r391_t0);
            r391_xn$putshapes$9Jrj = _r391_t0['put-shapes']['bind'](_r391_t0);
            r391_xn$reverselast$3qIs = _r391_t0['reverse-last']['bind'](_r391_t0);
            r391_include = _r391_t0['include']['bind'](_r391_t0);
            r391_xn$createstroke$7Hrq = _r391_t0['create-stroke']['bind'](_r391_t0);
            r391_xn$setanchor$9Jrj = _r391_t0['set-anchor']['bind'](_r391_t0);
            _r391_t0['gizmo'] = r1_globalTransform;
            _r391_t0['set-width'](r1_WIDTH);
            r391_xn$setwidth$9Jrj(r1_WIDTH);
            r391_xn$assignunicode$7Hrq('#');
            r391_fine = Math['min'](r1_STROKE, (r1_RIGHTSB - r1_SB) * 0.25);
            r391_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_mix(r1_parenTop, r1_parenBot, 0.33)));
            r391_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_mix(r1_parenTop, r1_parenBot, 0.67)));
            r391_xn$putshapes$9Jrj(r1_vbar(r1_mix(r1_SB, r1_RIGHTSB, 0.3), r1_parenBot + r391_fine, r1_parenTop - r391_fine, r391_fine));
            r391_xn$putshapes$9Jrj(r1_vbar(r1_mix(r1_SB, r1_RIGHTSB, 0.7), r1_parenBot + r391_fine, r1_parenTop - r391_fine, r391_fine));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('less', function _r1_t162() {
            var r394_currentGlyph, r394_xn$setwidth$9Jrj, r394_xn$assignunicode$7Hrq, r394_xn$startfrom$1aao, r394_xn$lineto$5sIl, r394_xn$curveto$1aao, r394_xn$cubicto$1aao, r394_xn$putshapes$9Jrj, r394_xn$reverselast$3qIs, r394_include, r394_xn$createstroke$7Hrq, r394_xn$setanchor$9Jrj, r394_top, r394_bot, _r394_t0, _r394_t1;
            _r394_t0 = this;
            r394_currentGlyph = _r394_t0;
            r394_xn$setwidth$9Jrj = _r394_t0['set-width']['bind'](_r394_t0);
            r394_xn$assignunicode$7Hrq = function _r394_t1(r395_code) {
                var r395_code;
                r394_currentGlyph['assign-unicode'](r395_code);
                return r1_unicodeGlyphs[[r394_currentGlyph['unicode'][r394_currentGlyph['unicode']['length'] - 1]]] = r394_currentGlyph;
            };
            r394_xn$startfrom$1aao = _r394_t0['start-from']['bind'](_r394_t0);
            r394_xn$lineto$5sIl = _r394_t0['line-to']['bind'](_r394_t0);
            r394_xn$curveto$1aao = _r394_t0['curve-to']['bind'](_r394_t0);
            r394_xn$cubicto$1aao = _r394_t0['cubic-to']['bind'](_r394_t0);
            r394_xn$putshapes$9Jrj = _r394_t0['put-shapes']['bind'](_r394_t0);
            r394_xn$reverselast$3qIs = _r394_t0['reverse-last']['bind'](_r394_t0);
            r394_include = _r394_t0['include']['bind'](_r394_t0);
            r394_xn$createstroke$7Hrq = _r394_t0['create-stroke']['bind'](_r394_t0);
            r394_xn$setanchor$9Jrj = _r394_t0['set-anchor']['bind'](_r394_t0);
            _r394_t0['gizmo'] = r1_globalTransform;
            _r394_t0['set-width'](r1_WIDTH);
            r394_xn$setwidth$9Jrj(r1_WIDTH);
            r394_xn$assignunicode$7Hrq('<');
            r394_top = r1_mix(0, r1_CAP, 0.75);
            r394_bot = r1_mix(0, r1_CAP, 0.1);
            r394_xn$putshapes$9Jrj(r394_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r394_top)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_SB, r1_mix(r394_top, r394_bot, 0.5))['heads-to'](r1_LEFTWARD)['to-outline'](0, 0, 1, true));
            r394_xn$putshapes$9Jrj(r394_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_mix(r394_top, r394_bot, 0.5))['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_RIGHTWARD)['line-to'](r1_RIGHTSB, r394_bot)['to-outline'](0, 0, 1, true));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('greater', function _r1_t163() {
            var r397_currentGlyph, r397_xn$setwidth$9Jrj, r397_xn$assignunicode$7Hrq, r397_xn$startfrom$1aao, r397_xn$lineto$5sIl, r397_xn$curveto$1aao, r397_xn$cubicto$1aao, r397_xn$putshapes$9Jrj, r397_xn$reverselast$3qIs, r397_include, r397_xn$createstroke$7Hrq, r397_xn$setanchor$9Jrj, r397_top, r397_bot, _r397_t0, _r397_t1;
            _r397_t0 = this;
            r397_currentGlyph = _r397_t0;
            r397_xn$setwidth$9Jrj = _r397_t0['set-width']['bind'](_r397_t0);
            r397_xn$assignunicode$7Hrq = function _r397_t1(r398_code) {
                var r398_code;
                r397_currentGlyph['assign-unicode'](r398_code);
                return r1_unicodeGlyphs[[r397_currentGlyph['unicode'][r397_currentGlyph['unicode']['length'] - 1]]] = r397_currentGlyph;
            };
            r397_xn$startfrom$1aao = _r397_t0['start-from']['bind'](_r397_t0);
            r397_xn$lineto$5sIl = _r397_t0['line-to']['bind'](_r397_t0);
            r397_xn$curveto$1aao = _r397_t0['curve-to']['bind'](_r397_t0);
            r397_xn$cubicto$1aao = _r397_t0['cubic-to']['bind'](_r397_t0);
            r397_xn$putshapes$9Jrj = _r397_t0['put-shapes']['bind'](_r397_t0);
            r397_xn$reverselast$3qIs = _r397_t0['reverse-last']['bind'](_r397_t0);
            r397_include = _r397_t0['include']['bind'](_r397_t0);
            r397_xn$createstroke$7Hrq = _r397_t0['create-stroke']['bind'](_r397_t0);
            r397_xn$setanchor$9Jrj = _r397_t0['set-anchor']['bind'](_r397_t0);
            _r397_t0['gizmo'] = r1_globalTransform;
            _r397_t0['set-width'](r1_WIDTH);
            r397_xn$setwidth$9Jrj(r1_WIDTH);
            r397_xn$assignunicode$7Hrq('>');
            r397_top = r1_mix(0, r1_CAP, 0.75);
            r397_bot = r1_mix(0, r1_CAP, 0.1);
            r397_xn$putshapes$9Jrj(r397_xn$createstroke$7Hrq()['start-from'](r1_SB, r397_top)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_RIGHTSB, r1_mix(r397_top, r397_bot, 0.5))['heads-to'](r1_RIGHTWARD)['to-outline'](0, 0, 1, true));
            r397_xn$putshapes$9Jrj(r397_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, r1_mix(r397_top, r397_bot, 0.5))['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['heads-to'](r1_LEFTWARD)['line-to'](r1_SB, r397_bot)['to-outline'](0, 0, 1, true));
            return void 0;
        });
        r1_xn$createglyph$7Hrq('quotesingle', function _r1_t164() {
            var r400_currentGlyph, r400_xn$setwidth$9Jrj, r400_xn$assignunicode$7Hrq, r400_xn$startfrom$1aao, r400_xn$lineto$5sIl, r400_xn$curveto$1aao, r400_xn$cubicto$1aao, r400_xn$putshapes$9Jrj, r400_xn$reverselast$3qIs, r400_include, r400_xn$createstroke$7Hrq, r400_xn$setanchor$9Jrj, _r400_t0, _r400_t1;
            _r400_t0 = this;
            r400_currentGlyph = _r400_t0;
            r400_xn$setwidth$9Jrj = _r400_t0['set-width']['bind'](_r400_t0);
            r400_xn$assignunicode$7Hrq = function _r400_t1(r401_code) {
                var r401_code;
                r400_currentGlyph['assign-unicode'](r401_code);
                return r1_unicodeGlyphs[[r400_currentGlyph['unicode'][r400_currentGlyph['unicode']['length'] - 1]]] = r400_currentGlyph;
            };
            r400_xn$startfrom$1aao = _r400_t0['start-from']['bind'](_r400_t0);
            r400_xn$lineto$5sIl = _r400_t0['line-to']['bind'](_r400_t0);
            r400_xn$curveto$1aao = _r400_t0['curve-to']['bind'](_r400_t0);
            r400_xn$cubicto$1aao = _r400_t0['cubic-to']['bind'](_r400_t0);
            r400_xn$putshapes$9Jrj = _r400_t0['put-shapes']['bind'](_r400_t0);
            r400_xn$reverselast$3qIs = _r400_t0['reverse-last']['bind'](_r400_t0);
            r400_include = _r400_t0['include']['bind'](_r400_t0);
            r400_xn$createstroke$7Hrq = _r400_t0['create-stroke']['bind'](_r400_t0);
            r400_xn$setanchor$9Jrj = _r400_t0['set-anchor']['bind'](_r400_t0);
            _r400_t0['gizmo'] = r1_globalTransform;
            _r400_t0['set-width'](r1_WIDTH);
            r400_xn$setwidth$9Jrj(r1_WIDTH);
            r400_xn$assignunicode$7Hrq(39);
            r400_xn$putshapes$9Jrj(r400_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_MIDDLE, r1_XH - r1_HALFSTROKE)['set-width'](r1_STROKE * 0.4, r1_STROKE * 0.4)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('quotedouble', function _r1_t165() {
            var r403_currentGlyph, r403_xn$setwidth$9Jrj, r403_xn$assignunicode$7Hrq, r403_xn$startfrom$1aao, r403_xn$lineto$5sIl, r403_xn$curveto$1aao, r403_xn$cubicto$1aao, r403_xn$putshapes$9Jrj, r403_xn$reverselast$3qIs, r403_include, r403_xn$createstroke$7Hrq, r403_xn$setanchor$9Jrj, _r403_t0, _r403_t1;
            _r403_t0 = this;
            r403_currentGlyph = _r403_t0;
            r403_xn$setwidth$9Jrj = _r403_t0['set-width']['bind'](_r403_t0);
            r403_xn$assignunicode$7Hrq = function _r403_t1(r404_code) {
                var r404_code;
                r403_currentGlyph['assign-unicode'](r404_code);
                return r1_unicodeGlyphs[[r403_currentGlyph['unicode'][r403_currentGlyph['unicode']['length'] - 1]]] = r403_currentGlyph;
            };
            r403_xn$startfrom$1aao = _r403_t0['start-from']['bind'](_r403_t0);
            r403_xn$lineto$5sIl = _r403_t0['line-to']['bind'](_r403_t0);
            r403_xn$curveto$1aao = _r403_t0['curve-to']['bind'](_r403_t0);
            r403_xn$cubicto$1aao = _r403_t0['cubic-to']['bind'](_r403_t0);
            r403_xn$putshapes$9Jrj = _r403_t0['put-shapes']['bind'](_r403_t0);
            r403_xn$reverselast$3qIs = _r403_t0['reverse-last']['bind'](_r403_t0);
            r403_include = _r403_t0['include']['bind'](_r403_t0);
            r403_xn$createstroke$7Hrq = _r403_t0['create-stroke']['bind'](_r403_t0);
            r403_xn$setanchor$9Jrj = _r403_t0['set-anchor']['bind'](_r403_t0);
            _r403_t0['gizmo'] = r1_globalTransform;
            _r403_t0['set-width'](r1_WIDTH);
            r403_xn$setwidth$9Jrj(r1_WIDTH);
            r403_xn$assignunicode$7Hrq(34);
            r403_xn$putshapes$9Jrj(r403_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, 0.25), r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_mix(r1_SB, r1_RIGHTSB, 0.25), r1_XH - r1_HALFSTROKE)['set-width'](r1_STROKE * 0.4, r1_STROKE * 0.4)['heads-to'](r1_DOWNWARD)['to-outline']());
            r403_xn$putshapes$9Jrj(r403_xn$createstroke$7Hrq()['start-from'](r1_mix(r1_SB, r1_RIGHTSB, 0.75), r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](r1_HALFSTROKE, r1_HALFSTROKE)['line-to'](r1_mix(r1_SB, r1_RIGHTSB, 0.75), r1_XH - r1_HALFSTROKE)['set-width'](r1_STROKE * 0.4, r1_STROKE * 0.4)['heads-to'](r1_DOWNWARD)['to-outline']());
            return void 0;
        });
        r1_xn$createglyph$7Hrq('asterisk', function _r1_t166() {
            var r406_currentGlyph, r406_xn$setwidth$9Jrj, r406_xn$assignunicode$7Hrq, r406_xn$startfrom$1aao, r406_xn$lineto$5sIl, r406_xn$curveto$1aao, r406_xn$cubicto$1aao, r406_xn$putshapes$9Jrj, r406_xn$reverselast$3qIs, r406_include, r406_xn$createstroke$7Hrq, r406_xn$setanchor$9Jrj, r406_radius, r406_centery, r406_fine, r406_final, r406_j, _r406_t0, _r406_t1, _r406_t2, _r406_t3;
            _r406_t2 = this;
            r406_currentGlyph = _r406_t2;
            r406_xn$setwidth$9Jrj = _r406_t2['set-width']['bind'](_r406_t2);
            r406_xn$assignunicode$7Hrq = function _r406_t3(r407_code) {
                var r407_code;
                r406_currentGlyph['assign-unicode'](r407_code);
                return r1_unicodeGlyphs[[r406_currentGlyph['unicode'][r406_currentGlyph['unicode']['length'] - 1]]] = r406_currentGlyph;
            };
            r406_xn$startfrom$1aao = _r406_t2['start-from']['bind'](_r406_t2);
            r406_xn$lineto$5sIl = _r406_t2['line-to']['bind'](_r406_t2);
            r406_xn$curveto$1aao = _r406_t2['curve-to']['bind'](_r406_t2);
            r406_xn$cubicto$1aao = _r406_t2['cubic-to']['bind'](_r406_t2);
            r406_xn$putshapes$9Jrj = _r406_t2['put-shapes']['bind'](_r406_t2);
            r406_xn$reverselast$3qIs = _r406_t2['reverse-last']['bind'](_r406_t2);
            r406_include = _r406_t2['include']['bind'](_r406_t2);
            r406_xn$createstroke$7Hrq = _r406_t2['create-stroke']['bind'](_r406_t2);
            r406_xn$setanchor$9Jrj = _r406_t2['set-anchor']['bind'](_r406_t2);
            _r406_t2['gizmo'] = r1_globalTransform;
            _r406_t2['set-width'](r1_WIDTH);
            r406_xn$setwidth$9Jrj(r1_WIDTH);
            r406_xn$assignunicode$7Hrq('*');
            r406_radius = r1_LONGJUT * 1.2;
            r406_centery = r1_parenTop - r1_LONGJUT * 1.5;
            r406_fine = r1_STROKE * 0.4;
            r406_final = 0.5 * Math['min'](r1_STROKE, r406_radius * Math['PI'] * 2 / 10);
            _r406_t0 = 0;
            _r406_t1 = 5;
            r406_j = _r406_t0;
            for (; r406_j < _r406_t1; r406_j = r406_j + 1) {
                r406_xn$putshapes$9Jrj(r406_xn$createstroke$7Hrq()['start-from'](r1_MIDDLE, r406_centery)['set-width'](r406_fine, r406_fine)['line-to'](r1_MIDDLE + r406_radius * Math['sin'](r406_j / 5 * Math['PI'] * 2), r406_centery + r406_radius * Math['cos'](r406_j / 5 * Math['PI'] * 2))['set-width'](r406_final, r406_final)['to-outline'](0, 0, 1, true));
            }
            return void 0;
        });
        r1_xn$createglyph$7Hrq('percent', function _r1_t167() {
            var r410_currentGlyph, r410_xn$setwidth$9Jrj, r410_xn$assignunicode$7Hrq, r410_xn$startfrom$1aao, r410_xn$lineto$5sIl, r410_xn$curveto$1aao, r410_xn$cubicto$1aao, r410_xn$putshapes$9Jrj, r410_xn$reverselast$3qIs, r410_include, r410_xn$createstroke$7Hrq, r410_xn$setanchor$9Jrj, r410_percentDotSize, r410_cor, _r410_t0, _r410_t1;
            _r410_t0 = this;
            r410_currentGlyph = _r410_t0;
            r410_xn$setwidth$9Jrj = _r410_t0['set-width']['bind'](_r410_t0);
            r410_xn$assignunicode$7Hrq = function _r410_t1(r411_code) {
                var r411_code;
                r410_currentGlyph['assign-unicode'](r411_code);
                return r1_unicodeGlyphs[[r410_currentGlyph['unicode'][r410_currentGlyph['unicode']['length'] - 1]]] = r410_currentGlyph;
            };
            r410_xn$startfrom$1aao = _r410_t0['start-from']['bind'](_r410_t0);
            r410_xn$lineto$5sIl = _r410_t0['line-to']['bind'](_r410_t0);
            r410_xn$curveto$1aao = _r410_t0['curve-to']['bind'](_r410_t0);
            r410_xn$cubicto$1aao = _r410_t0['cubic-to']['bind'](_r410_t0);
            r410_xn$putshapes$9Jrj = _r410_t0['put-shapes']['bind'](_r410_t0);
            r410_xn$reverselast$3qIs = _r410_t0['reverse-last']['bind'](_r410_t0);
            r410_include = _r410_t0['include']['bind'](_r410_t0);
            r410_xn$createstroke$7Hrq = _r410_t0['create-stroke']['bind'](_r410_t0);
            r410_xn$setanchor$9Jrj = _r410_t0['set-anchor']['bind'](_r410_t0);
            _r410_t0['gizmo'] = r1_globalTransform;
            _r410_t0['set-width'](r1_WIDTH);
            r410_xn$setwidth$9Jrj(r1_WIDTH);
            r410_xn$assignunicode$7Hrq('%');
            r410_percentDotSize = 0.3;
            r410_cor = 1 / Math['sqrt'](1 - Math['pow']((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_CAP - 0), 2));
            r410_xn$startfrom$1aao(r1_SB, 0);
            r410_xn$lineto$5sIl(r1_SB + r1_STROKE * r410_cor, 0);
            r410_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP);
            r410_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r410_cor, r1_CAP);
            r410_xn$putshapes$9Jrj(r410_xn$createstroke$7Hrq()['start-from'](r1_SB, r1_CAP)['heads-to'](r1_DOWNWARD)['set-width'](Math['min']((r1_RIGHTSB - r1_SB) * 0.33, r1_STROKE * 1.5), 0)['line-to'](r1_SB, r1_mix(r1_CAP, 0, 0.3))['heads-to'](r1_DOWNWARD)['to-outline']());
            r410_xn$putshapes$9Jrj(r410_xn$createstroke$7Hrq()['start-from'](r1_RIGHTSB, 0)['heads-to'](r1_UPWARD)['set-width'](Math['min']((r1_RIGHTSB - r1_SB) * 0.33, r1_STROKE * 1.5), 0)['line-to'](r1_RIGHTSB, r1_mix(0, r1_CAP, 0.3))['heads-to'](r1_UPWARD)['to-outline']());
            return void 0;
        });
        r1_isAboveMark = function _r1_t168(r412_mark) {
            var r412_mark;
            return r412_mark && r412_mark['anchors'] && r412_mark['anchors']['above'] && r412_mark['anchors']['above']['type'] === r1_MARK;
        };
        _r1_t0 = 160;
        _r1_t1 = 65535;
        r1_code = _r1_t0;
        for (; r1_code < _r1_t1; r1_code = r1_code + 1) {
            if (!r1_unicodeGlyphs[r1_code]) {
                r1_str = String['fromCharCode'](r1_code);
                r1_nfd = r1_str['normalize']('NFD');
                if (r1_nfd['length'] === 2) {
                    r1_base = r1_unicodeGlyphs[r1_nfd['charCodeAt'](0)];
                    r1_mark = r1_unicodeGlyphs[r1_nfd['charCodeAt'](1)];
                    if (r1_base === r1_glyphs['i'] && r1_isAboveMark(r1_mark))
                        _r1_t171 = r1_base = r1_glyphs['dotlessi'];
                    else
                        _r1_t171 = void 0;
                    if (r1_base === r1_glyphs['j'] && r1_isAboveMark(r1_mark))
                        _r1_t172 = r1_base = r1_glyphs['dotlessj'];
                    else
                        _r1_t172 = void 0;
                    if (r1_base && r1_mark)
                        _r1_t173 = r1_xn$createglyph$7Hrq(r1_base['name'] + '_' + r1_mark['name'], function _r1_t174() {
                            var r415_currentGlyph, r415_xn$setwidth$9Jrj, r415_xn$assignunicode$7Hrq, r415_xn$startfrom$1aao, r415_xn$lineto$5sIl, r415_xn$curveto$1aao, r415_xn$cubicto$1aao, r415_xn$putshapes$9Jrj, r415_xn$reverselast$3qIs, r415_include, r415_xn$createstroke$7Hrq, r415_xn$setanchor$9Jrj, _r415_t0, _r415_t1;
                            _r415_t0 = this;
                            r415_currentGlyph = _r415_t0;
                            r415_xn$setwidth$9Jrj = _r415_t0['set-width']['bind'](_r415_t0);
                            r415_xn$assignunicode$7Hrq = function _r415_t1(r416_code) {
                                var r416_code;
                                r415_currentGlyph['assign-unicode'](r416_code);
                                return r1_unicodeGlyphs[[r415_currentGlyph['unicode'][r415_currentGlyph['unicode']['length'] - 1]]] = r415_currentGlyph;
                            };
                            r415_xn$startfrom$1aao = _r415_t0['start-from']['bind'](_r415_t0);
                            r415_xn$lineto$5sIl = _r415_t0['line-to']['bind'](_r415_t0);
                            r415_xn$curveto$1aao = _r415_t0['curve-to']['bind'](_r415_t0);
                            r415_xn$cubicto$1aao = _r415_t0['cubic-to']['bind'](_r415_t0);
                            r415_xn$putshapes$9Jrj = _r415_t0['put-shapes']['bind'](_r415_t0);
                            r415_xn$reverselast$3qIs = _r415_t0['reverse-last']['bind'](_r415_t0);
                            r415_include = _r415_t0['include']['bind'](_r415_t0);
                            r415_xn$createstroke$7Hrq = _r415_t0['create-stroke']['bind'](_r415_t0);
                            r415_xn$setanchor$9Jrj = _r415_t0['set-anchor']['bind'](_r415_t0);
                            _r415_t0['gizmo'] = r1_globalTransform;
                            _r415_t0['set-width'](r1_WIDTH);
                            r415_xn$assignunicode$7Hrq(r1_code);
                            r415_include(r1_base, true);
                            r415_include(r1_mark);
                            return void 0;
                        });
                    _r1_t170 = _r1_t173;
                }
                _r1_t169 = _r1_t170;
            } else
                _r1_t169 = void 0;
        }
        r1_xn$createglyph$7Hrq('grave', function _r1_t175() {
            var r418_currentGlyph, r418_xn$setwidth$9Jrj, r418_xn$assignunicode$7Hrq, r418_xn$startfrom$1aao, r418_xn$lineto$5sIl, r418_xn$curveto$1aao, r418_xn$cubicto$1aao, r418_xn$putshapes$9Jrj, r418_xn$reverselast$3qIs, r418_include, r418_xn$createstroke$7Hrq, r418_xn$setanchor$9Jrj, _r418_t0, _r418_t1;
            _r418_t0 = this;
            r418_currentGlyph = _r418_t0;
            r418_xn$setwidth$9Jrj = _r418_t0['set-width']['bind'](_r418_t0);
            r418_xn$assignunicode$7Hrq = function _r418_t1(r419_code) {
                var r419_code;
                r418_currentGlyph['assign-unicode'](r419_code);
                return r1_unicodeGlyphs[[r418_currentGlyph['unicode'][r418_currentGlyph['unicode']['length'] - 1]]] = r418_currentGlyph;
            };
            r418_xn$startfrom$1aao = _r418_t0['start-from']['bind'](_r418_t0);
            r418_xn$lineto$5sIl = _r418_t0['line-to']['bind'](_r418_t0);
            r418_xn$curveto$1aao = _r418_t0['curve-to']['bind'](_r418_t0);
            r418_xn$cubicto$1aao = _r418_t0['cubic-to']['bind'](_r418_t0);
            r418_xn$putshapes$9Jrj = _r418_t0['put-shapes']['bind'](_r418_t0);
            r418_xn$reverselast$3qIs = _r418_t0['reverse-last']['bind'](_r418_t0);
            r418_include = _r418_t0['include']['bind'](_r418_t0);
            r418_xn$createstroke$7Hrq = _r418_t0['create-stroke']['bind'](_r418_t0);
            r418_xn$setanchor$9Jrj = _r418_t0['set-anchor']['bind'](_r418_t0);
            _r418_t0['gizmo'] = r1_globalTransform;
            _r418_t0['set-width'](r1_WIDTH);
            r418_xn$assignunicode$7Hrq('`');
            r418_include(r1_glyphs['space'], r1_BASE);
            r418_include(r1_glyphs['graveAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('acute', function _r1_t176() {
            var r421_currentGlyph, r421_xn$setwidth$9Jrj, r421_xn$assignunicode$7Hrq, r421_xn$startfrom$1aao, r421_xn$lineto$5sIl, r421_xn$curveto$1aao, r421_xn$cubicto$1aao, r421_xn$putshapes$9Jrj, r421_xn$reverselast$3qIs, r421_include, r421_xn$createstroke$7Hrq, r421_xn$setanchor$9Jrj, _r421_t0, _r421_t1;
            _r421_t0 = this;
            r421_currentGlyph = _r421_t0;
            r421_xn$setwidth$9Jrj = _r421_t0['set-width']['bind'](_r421_t0);
            r421_xn$assignunicode$7Hrq = function _r421_t1(r422_code) {
                var r422_code;
                r421_currentGlyph['assign-unicode'](r422_code);
                return r1_unicodeGlyphs[[r421_currentGlyph['unicode'][r421_currentGlyph['unicode']['length'] - 1]]] = r421_currentGlyph;
            };
            r421_xn$startfrom$1aao = _r421_t0['start-from']['bind'](_r421_t0);
            r421_xn$lineto$5sIl = _r421_t0['line-to']['bind'](_r421_t0);
            r421_xn$curveto$1aao = _r421_t0['curve-to']['bind'](_r421_t0);
            r421_xn$cubicto$1aao = _r421_t0['cubic-to']['bind'](_r421_t0);
            r421_xn$putshapes$9Jrj = _r421_t0['put-shapes']['bind'](_r421_t0);
            r421_xn$reverselast$3qIs = _r421_t0['reverse-last']['bind'](_r421_t0);
            r421_include = _r421_t0['include']['bind'](_r421_t0);
            r421_xn$createstroke$7Hrq = _r421_t0['create-stroke']['bind'](_r421_t0);
            r421_xn$setanchor$9Jrj = _r421_t0['set-anchor']['bind'](_r421_t0);
            _r421_t0['gizmo'] = r1_globalTransform;
            _r421_t0['set-width'](r1_WIDTH);
            r421_xn$assignunicode$7Hrq(180);
            r421_include(r1_glyphs['space'], r1_BASE);
            r421_include(r1_glyphs['acuteAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('asciicircum', function _r1_t177() {
            var r424_currentGlyph, r424_xn$setwidth$9Jrj, r424_xn$assignunicode$7Hrq, r424_xn$startfrom$1aao, r424_xn$lineto$5sIl, r424_xn$curveto$1aao, r424_xn$cubicto$1aao, r424_xn$putshapes$9Jrj, r424_xn$reverselast$3qIs, r424_include, r424_xn$createstroke$7Hrq, r424_xn$setanchor$9Jrj, _r424_t0, _r424_t1;
            _r424_t0 = this;
            r424_currentGlyph = _r424_t0;
            r424_xn$setwidth$9Jrj = _r424_t0['set-width']['bind'](_r424_t0);
            r424_xn$assignunicode$7Hrq = function _r424_t1(r425_code) {
                var r425_code;
                r424_currentGlyph['assign-unicode'](r425_code);
                return r1_unicodeGlyphs[[r424_currentGlyph['unicode'][r424_currentGlyph['unicode']['length'] - 1]]] = r424_currentGlyph;
            };
            r424_xn$startfrom$1aao = _r424_t0['start-from']['bind'](_r424_t0);
            r424_xn$lineto$5sIl = _r424_t0['line-to']['bind'](_r424_t0);
            r424_xn$curveto$1aao = _r424_t0['curve-to']['bind'](_r424_t0);
            r424_xn$cubicto$1aao = _r424_t0['cubic-to']['bind'](_r424_t0);
            r424_xn$putshapes$9Jrj = _r424_t0['put-shapes']['bind'](_r424_t0);
            r424_xn$reverselast$3qIs = _r424_t0['reverse-last']['bind'](_r424_t0);
            r424_include = _r424_t0['include']['bind'](_r424_t0);
            r424_xn$createstroke$7Hrq = _r424_t0['create-stroke']['bind'](_r424_t0);
            r424_xn$setanchor$9Jrj = _r424_t0['set-anchor']['bind'](_r424_t0);
            _r424_t0['gizmo'] = r1_globalTransform;
            _r424_t0['set-width'](r1_WIDTH);
            r424_xn$setwidth$9Jrj(r1_WIDTH);
            r424_xn$assignunicode$7Hrq(94);
            r424_include(r1_glyphs['space'], r1_BASE);
            r424_include(r1_glyphs['circumflexAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('asciitilde', function _r1_t178() {
            var r427_currentGlyph, r427_xn$setwidth$9Jrj, r427_xn$assignunicode$7Hrq, r427_xn$startfrom$1aao, r427_xn$lineto$5sIl, r427_xn$curveto$1aao, r427_xn$cubicto$1aao, r427_xn$putshapes$9Jrj, r427_xn$reverselast$3qIs, r427_include, r427_xn$createstroke$7Hrq, r427_xn$setanchor$9Jrj, _r427_t0, _r427_t1;
            _r427_t0 = this;
            r427_currentGlyph = _r427_t0;
            r427_xn$setwidth$9Jrj = _r427_t0['set-width']['bind'](_r427_t0);
            r427_xn$assignunicode$7Hrq = function _r427_t1(r428_code) {
                var r428_code;
                r427_currentGlyph['assign-unicode'](r428_code);
                return r1_unicodeGlyphs[[r427_currentGlyph['unicode'][r427_currentGlyph['unicode']['length'] - 1]]] = r427_currentGlyph;
            };
            r427_xn$startfrom$1aao = _r427_t0['start-from']['bind'](_r427_t0);
            r427_xn$lineto$5sIl = _r427_t0['line-to']['bind'](_r427_t0);
            r427_xn$curveto$1aao = _r427_t0['curve-to']['bind'](_r427_t0);
            r427_xn$cubicto$1aao = _r427_t0['cubic-to']['bind'](_r427_t0);
            r427_xn$putshapes$9Jrj = _r427_t0['put-shapes']['bind'](_r427_t0);
            r427_xn$reverselast$3qIs = _r427_t0['reverse-last']['bind'](_r427_t0);
            r427_include = _r427_t0['include']['bind'](_r427_t0);
            r427_xn$createstroke$7Hrq = _r427_t0['create-stroke']['bind'](_r427_t0);
            r427_xn$setanchor$9Jrj = _r427_t0['set-anchor']['bind'](_r427_t0);
            _r427_t0['gizmo'] = r1_globalTransform;
            _r427_t0['set-width'](r1_WIDTH);
            r427_xn$setwidth$9Jrj(r1_WIDTH);
            r427_xn$assignunicode$7Hrq('~');
            r427_include(r1_glyphs['space'], r1_BASE);
            r427_include(r1_glyphs['tildeAbove']);
            return void 0;
        });
        r1_xn$createglyph$7Hrq('latin1dieresis', function _r1_t179() {
            var r430_currentGlyph, r430_xn$setwidth$9Jrj, r430_xn$assignunicode$7Hrq, r430_xn$startfrom$1aao, r430_xn$lineto$5sIl, r430_xn$curveto$1aao, r430_xn$cubicto$1aao, r430_xn$putshapes$9Jrj, r430_xn$reverselast$3qIs, r430_include, r430_xn$createstroke$7Hrq, r430_xn$setanchor$9Jrj, _r430_t0, _r430_t1;
            _r430_t0 = this;
            r430_currentGlyph = _r430_t0;
            r430_xn$setwidth$9Jrj = _r430_t0['set-width']['bind'](_r430_t0);
            r430_xn$assignunicode$7Hrq = function _r430_t1(r431_code) {
                var r431_code;
                r430_currentGlyph['assign-unicode'](r431_code);
                return r1_unicodeGlyphs[[r430_currentGlyph['unicode'][r430_currentGlyph['unicode']['length'] - 1]]] = r430_currentGlyph;
            };
            r430_xn$startfrom$1aao = _r430_t0['start-from']['bind'](_r430_t0);
            r430_xn$lineto$5sIl = _r430_t0['line-to']['bind'](_r430_t0);
            r430_xn$curveto$1aao = _r430_t0['curve-to']['bind'](_r430_t0);
            r430_xn$cubicto$1aao = _r430_t0['cubic-to']['bind'](_r430_t0);
            r430_xn$putshapes$9Jrj = _r430_t0['put-shapes']['bind'](_r430_t0);
            r430_xn$reverselast$3qIs = _r430_t0['reverse-last']['bind'](_r430_t0);
            r430_include = _r430_t0['include']['bind'](_r430_t0);
            r430_xn$createstroke$7Hrq = _r430_t0['create-stroke']['bind'](_r430_t0);
            r430_xn$setanchor$9Jrj = _r430_t0['set-anchor']['bind'](_r430_t0);
            _r430_t0['gizmo'] = r1_globalTransform;
            _r430_t0['set-width'](r1_WIDTH);
            r430_xn$setwidth$9Jrj(r1_WIDTH);
            r430_xn$assignunicode$7Hrq(168);
            r430_include(r1_glyphs['space'], r1_BASE);
            r430_include(r1_glyphs['dieresisAbove']);
            return void 0;
        });
        return r1_font;
    };
}
