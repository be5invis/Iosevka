{
    var r0_Glyph, r0_Stroke, r0_mix, r0_linreg, r0_fallback, _r0_t0, _r0_t1, _r0_t2, _r0_t3;
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    r0_mix = function _r0_t0(r1_a, r1_b, r1_p) {
        var r1_a, r1_b, r1_p, _r1_t0, _r1_t1;
        return r1_a + (r1_b - r1_a) * r1_p;
    };
    r0_linreg = function _r0_t1(r2_x0, r2_y0, r2_x1, r2_y1, r2_x) {
        var r2_x0, r2_y0, r2_x1, r2_y1, r2_x, _r2_t0, _r2_t1;
        return r2_y0 + (r2_x - r2_x0) * (r2_y1 - r2_y0) / (r2_x1 - r2_x0);
    };
    r0_fallback = function _r0_t2() {
        var r3_j, _r3_t0, _r3_t1, _r3_t2, _r3_t3, _r3_t4;
        _r3_t1 = arguments;
        r3_j = 0;
        _r3_t2 = r3_j < _r3_t1['length'];
        for (; _r3_t2; _r3_t2 = r3_j < _r3_t1['length']) {
            if (_r3_t1[r3_j] !== void 0)
                return _r3_t1[r3_j];
            else
                _r3_t4 = void 0;
            _r3_t3 = r3_j = r3_j + 1;
        }
        return _r3_t3;
    };
    exports['build'] = function _r0_t3(r4_para) {
        var r4_para, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_BASE, r4_MARK, r4_MARKBASE, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210;
        r4_variantSelector = r4_para['variantSelector'];
        r4_font = require('./empty.json');
        r4_glyphList = r4_font['glyf'];
        r4_glyphs = { '.notdef': r4_glyphList[0] };
        r4_unicodeGlyphs = [];
        r4_globalTransform = {
            'xx': 1,
            'yx': Math['tan'](r4_para['italicangle'] / 180 * Math['PI']),
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        r4_ITALICCOR = 1 / Math['sqrt'](1 - r4_globalTransform['yx'] * r4_globalTransform['yx']);
        r4_UPWARD = {
            'x': -r4_ITALICCOR,
            'y': 0
        };
        r4_DOWNWARD = {
            'x': r4_ITALICCOR,
            'y': 0
        };
        r4_RIGHTWARD = {
            'x': r4_globalTransform['yx'],
            'y': 1
        };
        r4_LEFTWARD = {
            'x': -r4_globalTransform['yx'],
            'y': -1
        };
        r4_DESCENDER = r4_para['descender'];
        r4_WIDTH = r4_para['width'];
        r4_CAP = r4_para['cap'];
        r4_XH = r4_para['xheight'];
        r4_O = r4_para['o'];
        r4_OXHOOK = r4_para['oxhook'];
        r4_SB = r4_para['sb'];
        r4_HOOK = r4_para['hook'];
        r4_AHOOK = r4_para['ahook'];
        r4_SHOOK = r4_para['shook'];
        r4_RHOOK = r4_para['rhook'];
        r4_SMOOTH = r4_para['smooth'];
        r4_SMALLSMOOTH = r4_para['smallsmooth'];
        r4_STROKE = r4_para['stroke'];
        r4_DOTSIZE = r4_para['dotsize'];
        r4_PERIODSIZE = r4_para['periodsize'];
        r4_BARPOS = r4_para['barpos'];
        r4_GBARPOS = r4_para['gbarpos'];
        r4_FIVEBARPOS = r4_para['fivebarpos'];
        r4_LONGJUT = r4_para['longjut'];
        r4_ACCENT = r4_para['accent'];
        r4_ACCENTX = r4_para['accentx'];
        r4_XO = r4_XH - r4_O;
        r4_CAPO = r4_CAP - r4_O;
        r4_HALFSTROKE = r4_STROKE / 2;
        r4_RIGHTSB = r4_WIDTH - r4_SB;
        r4_MIDDLE = r4_WIDTH / 2;
        r4_CAPMIDDLE = r4_CAP / 2;
        r4_CAP_SMOOTH = r4_CAP - r4_SMOOTH;
        r4_DOTRADIUS = r4_DOTSIZE / 2;
        r4_PERIODRADIUS = r4_PERIODSIZE / 2;
        r4_SMOOTHA = r4_SMOOTH - r4_globalTransform['yx'] * r4_para['smoothadjust'];
        r4_SMOOTHB = r4_SMOOTH + r4_globalTransform['yx'] * r4_para['smoothadjust'];
        r4_SMALLSMOOTHA = r4_SMALLSMOOTH - r4_globalTransform['yx'] * r4_para['smoothadjust'];
        r4_SMALLSMOOTHB = r4_SMALLSMOOTH + r4_globalTransform['yx'] * r4_para['smoothadjust'];
        r4_ITALICCORS = r4_STROKE * r4_globalTransform['yx'];
        r4_EBARPOS = r4_para['ebarpos'] || r4_BARPOS;
        r4_KAPPA = r4_para['kappa'];
        r4_COKAPPA = 1 - r4_KAPPA;
        r4_BKAPPA = r4_para['bkappa'] || r4_KAPPA + 0.1;
        r4_CKAPPA = r4_para['ckappa'] || r4_BKAPPA;
        r4_COBKAPPA = 1 - r4_BKAPPA;
        r4_KAPPA_HOOK = r4_para['kappa_hook'] || r4_BKAPPA + 0.1;
        r4_KAPPA_AHOOK = r4_para['kappa_ahook'] || r4_KAPPA_HOOK;
        r4_TAILADJX = r4_WIDTH * 0.2;
        r4_TAILADJY = r4_XH * 0.25;
        r4_TAILADJKAPPA = 0.75;
        r4_TAILADJSX = r4_WIDTH * 0.2;
        r4_TAILADJSY = 0;
        r4_TAILADJSKAPPA = 0.75;
        r4_ILBALANCE = r4_LONGJUT * 0.04;
        r4_JBALANCE = r4_para['jbalance'] || r4_HALFSTROKE + r4_ILBALANCE;
        r4_TBALANCE = r4_para['tbalance'] || r4_JBALANCE;
        r4_TBALANCE2 = r4_para['tbalance2'] || r4_TBALANCE;
        r4_RBALANCE = r4_para['rbalance'] || r4_JBALANCE * 0.3;
        r4_BASE = 'base';
        r4_MARK = 'mark';
        r4_MARKBASE = 'markbase';
        r4_tm = function _r4_t15(r5_anchor) {
            var r5_anchor, _r5_t0, _r5_t1;
            return {
                'x': r5_anchor['x'] * r4_globalTransform['xx'] + r5_anchor['y'] * r4_globalTransform['yx'] + r4_globalTransform['x'],
                'y': r5_anchor['x'] * r4_globalTransform['xy'] + r5_anchor['y'] * r4_globalTransform['yy'] + r4_globalTransform['y'],
                'type': r5_anchor['type']
            };
        };
        r4_markAboveLower = {
            'anchors': {
                'above': r4_tm({
                    'x': r4_MIDDLE,
                    'y': r4_XH,
                    'type': r4_BASE
                })
            }
        };
        r4_markAboveCap = {
            'anchors': {
                'above': r4_tm({
                    'x': r4_MIDDLE,
                    'y': r4_CAP * 0.97,
                    'type': r4_BASE
                })
            }
        };
        r4_markBelowLower = {
            'anchors': {
                'below': r4_tm({
                    'x': r4_MIDDLE,
                    'y': r4_DESCENDER,
                    'type': r4_BASE
                })
            }
        };
        r4_markBelowZero = {
            'anchors': {
                'below': r4_tm({
                    'x': r4_MIDDLE,
                    'y': 0,
                    'type': r4_BASE
                })
            }
        };
        r4_capitalMarks = {
            'anchors': {
                'above': r4_markAboveCap['anchors']['above'],
                'below': r4_markBelowZero['anchors']['below']
            }
        };
        r4_bMarks = {
            'anchors': {
                'above': r4_markAboveCap['anchors']['above'],
                'below': r4_markBelowZero['anchors']['below']
            }
        };
        r4_eMarks = {
            'anchors': {
                'above': r4_markAboveLower['anchors']['above'],
                'below': r4_markBelowZero['anchors']['below']
            }
        };
        r4_pMarks = {
            'anchors': {
                'above': r4_markAboveLower['anchors']['above'],
                'below': r4_markBelowLower['anchors']['below']
            }
        };
        r4_ifMarks = {
            'anchors': {
                'above': r4_markAboveCap['anchors']['above'],
                'below': r4_markBelowLower['anchors']['below']
            }
        };
        r0_Stroke['bindParameters'](r4_para);
        r4_font['name']['fontFamily'] = r4_para['family'];
        r4_font['name']['fontSubFamily'] = r4_para['style'];
        r4_font['name']['preferredFamily'] = r4_para['family'];
        r4_font['name']['preferredSubFamily'] = r4_para['style'];
        r4_font['name']['uniqueSubFamily'] = r4_para['family'] + ' ' + r4_para['style'] + ' ' + r4_para['version'];
        r4_font['name']['version'] = r4_para['version'];
        _r4_t16 = r4_font['name'];
        _r4_t17 = 'fullName';
        if (r4_para['style'] !== 'Regular')
            _r4_t18 = r4_para['family'] + ' ' + r4_para['style'];
        else
            _r4_t18 = r4_para['family'];
        _r4_t16[_r4_t17] = _r4_t18;
        r4_font['name']['postScriptName'] = r4_font['name']['fullName']['replace'](/ /g, '-');
        r4_font['name']['copyright'] = r4_para['copyright'];
        r4_font['OS/2']['usWeightClass'] = r4_para['weight'];
        r4_font['OS/2']['bProportion'] = 9;
        r4_font['OS/2']['bWeight'] = 1 + r4_para['weight'] / 100;
        _r4_t19 = r4_font['OS/2'];
        _r4_t20 = 'fsSelection';
        if (r4_para['isBold'])
            _r4_t21 = 32;
        else
            _r4_t21 = 0;
        if (r4_para['isItalic'])
            _r4_t22 = 1;
        else
            _r4_t22 = 0;
        _r4_t23 = _r4_t21 + _r4_t22;
        if (!r4_para['isBold'] && !r4_para['isItalic'])
            _r4_t24 = 64;
        else
            _r4_t24 = 0;
        _r4_t25 = _r4_t23 + _r4_t24;
        _r4_t26 = 128;
        _r4_t19[_r4_t20] = _r4_t25 + _r4_t26;
        _r4_t27 = r4_font['head'];
        _r4_t28 = 'macStyle';
        if (r4_para['isBold'])
            _r4_t29 = 1;
        else
            _r4_t29 = 0;
        if (r4_para['isItalic'])
            _r4_t30 = 2;
        else
            _r4_t30 = 0;
        _r4_t27[_r4_t28] = _r4_t29 + _r4_t30;
        r4_upmscale = r0_fallback(r4_para['upmscale'], 1);
        r4_font['head']['unitsPerEm'] = r4_upmscale * 1000;
        r4_font['hhea']['ascent'] = r4_upmscale * r4_CAP;
        r4_font['OS/2']['usWinAscent'] = r4_upmscale * (r4_CAP + r4_CAP * 0.1);
        r4_font['OS/2']['sTypoAscender'] = r4_upmscale * r4_CAP;
        r4_font['hhea']['descent'] = r4_upmscale * r4_DESCENDER;
        r4_font['OS/2']['usWinDescent'] = r4_upmscale * (Math['abs'](r4_DESCENDER) + r4_CAP * 0.1);
        r4_font['OS/2']['sTypoDescender'] = r4_upmscale * r4_DESCENDER;
        r4_font['hhea']['lineGap'] = r4_upmscale * r4_CAP * 0.2;
        r4_font['OS/2']['sTypoLineGap'] = r4_upmscale * r4_CAP * 0.2;
        r4_font['OS/2']['sxHeight'] = r4_upmscale * r4_XH;
        r4_font['post']['italicAnvle'] = 0 - r4_para['italicangle'];
        r4_xn$createglyph$7Hrq = function _r4_t31(r10_name, r10_actions) {
            var r10_name, r10_actions, r10_glyphObject, _r10_t0, _r10_t1;
            r10_glyphObject = new r0_Glyph(r10_name);
            r4_glyphList['push'](r10_glyphObject);
            r4_glyphs[r10_name] = r10_glyphObject;
            r10_actions['call'](r10_glyphObject);
            return r10_glyphObject;
        };
        r4_xn$selectvariant$7Hrq = function _r4_t32(r11_glyphid, r11_unicode, r11_default) {
            var r11_glyphid, r11_unicode, r11_default, r11_variant, r11_chosenGlyph, _r11_t0, _r11_t1, _r11_t2;
            r11_variant = r4_variantSelector[r11_glyphid] || r11_default;
            r11_chosenGlyph = r4_glyphs[r11_glyphid + '.' + r11_variant];
            r4_glyphs[r11_glyphid] = r11_chosenGlyph;
            if (r11_unicode) {
                r11_chosenGlyph['assign-unicode'](r11_unicode);
                return r4_unicodeGlyphs[r11_chosenGlyph['unicode'][r11_chosenGlyph['unicode']['length'] - 1]] = r11_chosenGlyph;
            } else
                return void 0;
        };
        r4_xgrid = function _r4_t33(r12_p) {
            var r12_p, _r12_t0, _r12_t1;
            return r0_mix(r4_SB, r4_RIGHTSB, r12_p);
        };
        r4_xn$createglyph$7Hrq('space', function _r4_t34() {
            var r14_currentGlyph, r14_xn$setwidth$9Jrj, r14_xn$assignunicode$7Hrq, r14_xn$startfrom$1aao, r14_xn$lineto$5sIl, r14_xn$curveto$1aao, r14_xn$cubicto$1aao, r14_xn$putshapes$9Jrj, r14_xn$reverselast$3qIs, r14_include, r14_xn$createstroke$7Hrq, r14_xn$setanchor$9Jrj, _r14_t0, _r14_t1, _r14_t2;
            _r14_t0 = this;
            r14_currentGlyph = _r14_t0;
            r14_xn$setwidth$9Jrj = _r14_t0['set-width']['bind'](_r14_t0);
            r14_xn$assignunicode$7Hrq = function _r14_t2(r15_code) {
                var r15_code, _r15_t0, _r15_t1;
                r14_currentGlyph['assign-unicode'](r15_code);
                return r4_unicodeGlyphs[r14_currentGlyph['unicode'][r14_currentGlyph['unicode']['length'] - 1]] = r14_currentGlyph;
            };
            r14_xn$startfrom$1aao = _r14_t0['start-from']['bind'](_r14_t0);
            r14_xn$lineto$5sIl = _r14_t0['line-to']['bind'](_r14_t0);
            r14_xn$curveto$1aao = _r14_t0['curve-to']['bind'](_r14_t0);
            r14_xn$cubicto$1aao = _r14_t0['cubic-to']['bind'](_r14_t0);
            r14_xn$putshapes$9Jrj = _r14_t0['put-shapes']['bind'](_r14_t0);
            r14_xn$reverselast$3qIs = _r14_t0['reverse-last']['bind'](_r14_t0);
            r14_include = _r14_t0['include']['bind'](_r14_t0);
            r14_xn$createstroke$7Hrq = _r14_t0['create-stroke']['bind'](_r14_t0);
            r14_xn$setanchor$9Jrj = _r14_t0['set-anchor']['bind'](_r14_t0);
            _r14_t0['gizmo'] = r4_globalTransform;
            _r14_t0['set-width'](r4_WIDTH);
            r14_xn$setwidth$9Jrj(r4_WIDTH);
            r14_xn$assignunicode$7Hrq(' ');
            r14_include(r4_eMarks);
            return void 0;
        });
        r4_Ring = function _r4_t35(r16_u, r16_d, r16_l, r16_r) {
            var r16_u, r16_d, r16_l, r16_r, r16_my, r16_mx, r16_s, _r16_t0, _r16_t1;
            r16_my = (r16_u + r16_d) / 2;
            r16_mx = (r16_l + r16_r) / 2;
            r16_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r16_mx, r16_d)['cubic-to'](r16_mx + (r16_l - r16_mx) * r4_CKAPPA, r16_d, r16_l, r16_my + (r16_d - r16_my) * r4_CKAPPA, r16_l, r16_my)['cubic-to'](r16_l, r16_my + (r16_u - r16_my) * r4_CKAPPA, r16_mx + (r16_l - r16_mx) * r4_CKAPPA, r16_u, r16_mx, r16_u)['cubic-to'](r16_mx + (r16_r - r16_mx) * r4_CKAPPA, r16_u, r16_r, r16_my + (r16_u - r16_my) * r4_CKAPPA, r16_r, r16_my)['cubic-to'](r16_r, r16_my + (r16_d - r16_my) * r4_CKAPPA, r16_mx + (r16_r - r16_mx) * r4_CKAPPA, r16_d, r16_mx, r16_d);
            return r16_s['points'];
        };
        r4_ORing = function _r4_t36(r17_u, r17_d, r17_l, r17_r, r17_smooth) {
            var r17_u, r17_d, r17_l, r17_r, r17_smooth, r17_myu, r17_myd, r17_mx, r17_s, _r17_t0, _r17_t1;
            r17_myu = r17_u - r17_smooth;
            r17_myd = r17_d + r17_smooth;
            r17_mx = (r17_l + r17_r) / 2;
            r17_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r17_mx, r17_d)['cubic-to'](r17_mx + (r17_l - r17_mx) * r4_CKAPPA, r17_d, r17_l, r17_myd + (r17_d - r17_myd) * r4_CKAPPA, r17_l, r17_myd)['line-to'](r17_l, r17_myu)['cubic-to'](r17_l, r17_myu + (r17_u - r17_myu) * r4_CKAPPA, r17_mx + (r17_l - r17_mx) * r4_CKAPPA, r17_u, r17_mx, r17_u)['cubic-to'](r17_mx + (r17_r - r17_mx) * r4_CKAPPA, r17_u, r17_r, r17_myu + (r17_u - r17_myu) * r4_CKAPPA, r17_r, r17_myu)['line-to'](r17_r, r17_myd)['cubic-to'](r17_r, r17_myd + (r17_d - r17_myd) * r4_CKAPPA, r17_mx + (r17_r - r17_mx) * r4_CKAPPA, r17_d, r17_mx, r17_d);
            return r17_s['points'];
        };
        r4_leftwardTopSerif = function _r4_t37(r18_x, r18_y, r18_length) {
            var r18_x, r18_y, r18_length, _r18_t0, _r18_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r18_x + r4_HALFSTROKE, r18_y)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['line-to'](r18_x - r18_length - r4_globalTransform['yx'] * r4_STROKE, r18_y)['to-outline']();
        };
        r4_leftwardBottomSerif = function _r4_t38(r19_x, r19_y, r19_length) {
            var r19_x, r19_y, r19_length, _r19_t0, _r19_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r19_x + r4_HALFSTROKE, r19_y)['heads-to'](r4_LEFTWARD)['set-width'](0, r4_STROKE)['line-to'](r19_x - r19_length + r4_globalTransform['yx'] * r4_STROKE, r19_y)['to-outline']();
        };
        r4_rightwardTopSerif = function _r4_t39(r20_x, r20_y, r20_length) {
            var r20_x, r20_y, r20_length, _r20_t0, _r20_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r20_x - r4_HALFSTROKE, r20_y)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r20_x + r20_length - r4_globalTransform['yx'] * r4_STROKE, r20_y)['to-outline']();
        };
        r4_rightwardBottomSerif = function _r4_t40(r21_x, r21_y, r21_length) {
            var r21_x, r21_y, r21_length, _r21_t0, _r21_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r21_x - r4_HALFSTROKE, r21_y)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r21_x + r21_length + r4_globalTransform['yx'] * r4_STROKE, r21_y)['to-outline']();
        };
        r4_centerTopSerif = function _r4_t41(r22_x, r22_y, r22_length) {
            var r22_x, r22_y, r22_length, _r22_t0, _r22_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r22_x + r22_length - r4_globalTransform['yx'] * r4_STROKE, r22_y)['set-width'](r4_STROKE, 0)['line-to'](r22_x - r22_length - r4_globalTransform['yx'] * r4_STROKE, r22_y)['to-outline']();
        };
        r4_centerBottomSerif = function _r4_t42(r23_x, r23_y, r23_length) {
            var r23_x, r23_y, r23_length, _r23_t0, _r23_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r23_x + r23_length + r4_globalTransform['yx'] * r4_STROKE, r23_y)['set-width'](0, r4_STROKE)['line-to'](r23_x - r23_length + r4_globalTransform['yx'] * r4_STROKE, r23_y)['to-outline']();
        };
        r4_xsStrand = function _r4_t43(r24__xleft, r24_yleft, r24__xright, r24_yright, r24__halfstroke0, r24__halfstroke1, r24__ess, r24__expansion, r24__roundp) {
            var r24__xleft, r24_yleft, r24__xright, r24_yright, r24__halfstroke0, r24__halfstroke1, r24__ess, r24__expansion, r24__roundp, r24_expansion, r24_halfstroke0, r24_halfstroke1, r24_ess, r24_yItalicCorrection, r24_xItalicCorrection, r24_roundsize, r24_roundleft, r24_roundright, r24_xleft, r24_xright, r24_sxleft, r24_sxright, r24_syleft, r24_syright, _r24_t0, _r24_t1, _r24_t2, _r24_t3;
            r24_expansion = r24__expansion || 0.25;
            r24_halfstroke0 = r24__halfstroke0 || r4_HALFSTROKE;
            r24_halfstroke1 = r24__halfstroke1 || r4_HALFSTROKE;
            r24_ess = r24__ess || (r24_halfstroke0 + r24_halfstroke1) / 2;
            r24_yItalicCorrection = r4_globalTransform['yx'] * 0.985;
            r24_xItalicCorrection = 1 / Math['sqrt'](1 - r24_yItalicCorrection * r24_yItalicCorrection);
            _r24_t2 = r24__roundp || r4_SMOOTHA * 0.4;
            if (r24_yleft < r24_yright)
                _r24_t3 = -1;
            else
                _r24_t3 = 1;
            r24_roundsize = _r24_t2 * _r24_t3;
            r24_roundleft = r24_yleft - r24_roundsize;
            r24_roundright = r24_yright + r24_roundsize;
            r24_xleft = r24__xleft + r24_halfstroke0 * r24_xItalicCorrection;
            r24_xright = r24__xright - r24_halfstroke1 * r24_xItalicCorrection;
            r24_sxleft = r0_mix(r24_xleft, r24_xright, 0.5 - r24_expansion);
            r24_sxright = r0_mix(r24_xleft, r24_xright, 0.5 + r24_expansion);
            r24_syleft = r0_mix(r24_roundleft, r24_roundright, 0.5 - r24_expansion);
            r24_syright = r0_mix(r24_roundleft, r24_roundright, 0.5 + r24_expansion);
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r24_xleft, r24_yleft - r24_halfstroke0 * r24_yItalicCorrection)['set-width'](r24_halfstroke0, r24_halfstroke0)['curve-to'](r24_xleft, r24_roundleft, r24_sxleft, r24_syleft)['set-width'](r24_ess, r24_ess)['line-to'](r24_sxright, r24_syright)['curve-to'](r24_xright, r24_roundright, r24_xright, r24_yright + r24_halfstroke1 * r24_yItalicCorrection)['set-width'](r24_halfstroke1, r24_halfstroke1)['to-outline']();
        };
        r4_sStrand = function _r4_t44(r25_yleft, r25_yright, r25__expansion) {
            var r25_yleft, r25_yright, r25__expansion, _r25_t0, _r25_t1;
            return r4_xsStrand(r4_SB, r25_yleft, r4_RIGHTSB, r25_yright, r4_HALFSTROKE, r4_HALFSTROKE, r4_HALFSTROKE, r25__expansion, r4_SMOOTHA * 0.4);
        };
        r4_halfXStrand = function _r4_t45(r26__leftx, r26_lefty, r26_rightx, r26_righty, r26_turn, r26_straight, r26_tension, r26__fine) {
            var r26__leftx, r26_lefty, r26_rightx, r26_righty, r26_turn, r26_straight, r26_tension, r26__fine, r26_leftx, r26_fine, r26_turnyleft, r26_cyleft, r26_straightxleft, r26_straightyleft, _r26_t0, _r26_t1, _r26_t2, _r26_t3, _r26_t4, _r26_t5, _r26_t6, _r26_t7, _r26_t8, _r26_t9, _r26_t10, _r26_t11, _r26_t12, _r26_t13, _r26_t14, _r26_t15, _r26_t16, _r26_t17, _r26_t18, _r26_t19, _r26_t20, _r26_t21, _r26_t22, _r26_t23, _r26_t24, _r26_t25, _r26_t26, _r26_t27, _r26_t28, _r26_t29, _r26_t30, _r26_t31;
            _r26_t2 = r26__leftx;
            _r26_t3 = r4_HALFSTROKE;
            if (r26_rightx > r26__leftx)
                _r26_t4 = 1;
            else
                _r26_t4 = -1;
            _r26_t5 = _r26_t3 * _r26_t4;
            r26_leftx = _r26_t2 + _r26_t5;
            r26_fine = (r26__fine || r4_STROKE) * 0.5;
            r26_turnyleft = r0_mix(r26_lefty, r26_righty, r26_turn);
            r26_cyleft = r0_mix(r26_turnyleft, r26_righty, r26_tension);
            r26_straightxleft = r0_mix(r26_leftx, r26_rightx, r26_straight);
            r26_straightyleft = r0_mix(r26_cyleft, r26_righty, r26_straight);
            _r26_t6 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r26_leftx, r26_lefty)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE);
            _r26_t7 = _r26_t6['heads-to'];
            if (r26_lefty < r26_righty)
                _r26_t8 = r4_UPWARD;
            else
                _r26_t8 = r4_DOWNWARD;
            _r26_t9 = _r26_t7['call'](_r26_t6, _r26_t8);
            _r26_t10 = _r26_t9['line-to'];
            _r26_t11 = r26_leftx;
            _r26_t12 = r26_turnyleft;
            _r26_t13 = _r26_t10['call'](_r26_t9, _r26_t11, _r26_t12);
            _r26_t14 = _r26_t13['heads-to'];
            if (r26_lefty < r26_righty)
                _r26_t15 = r4_UPWARD;
            else
                _r26_t15 = r4_DOWNWARD;
            _r26_t16 = _r26_t14['call'](_r26_t13, _r26_t15);
            _r26_t17 = _r26_t16['curve-to'];
            _r26_t18 = r26_leftx;
            _r26_t19 = r26_cyleft;
            _r26_t20 = r26_straightxleft;
            _r26_t21 = r26_straightyleft;
            _r26_t22 = _r26_t17['call'](_r26_t16, _r26_t18, _r26_t19, _r26_t20, _r26_t21);
            _r26_t23 = _r26_t22['set-width'];
            _r26_t24 = r26_fine;
            _r26_t25 = r26_fine;
            _r26_t26 = _r26_t23['call'](_r26_t22, _r26_t24, _r26_t25);
            _r26_t27 = _r26_t26['line-to'];
            _r26_t28 = r26_rightx;
            _r26_t29 = r26_righty;
            _r26_t30 = _r26_t27['call'](_r26_t26, _r26_t28, _r26_t29);
            _r26_t31 = _r26_t30['to-outline'];
            return _r26_t31['call'](_r26_t30);
        };
        r4_xStrand = function _r4_t46(r27__leftx, r27_lefty, r27__rightx, r27_righty, r27_turn, r27_straight, r27_tension) {
            var r27__leftx, r27_lefty, r27__rightx, r27_righty, r27_turn, r27_straight, r27_tension, r27_middlex, r27_middley, _r27_t0, _r27_t1;
            r27_middlex = r0_mix(r27__leftx, r27__rightx, 0.5);
            r27_middley = r0_mix(r27_lefty, r27_righty, 0.5);
            return r4_halfXStrand(r27__leftx, r27_lefty, r27_middlex, r27_middley, r27_turn, r27_straight, r27_tension)['concat'](r4_halfXStrand(r27__rightx, r27_righty, r27_middlex, r27_middley, r27_turn, r27_straight, r27_tension));
        };
        r4_nBowl = function _r4_t47(r28_left, r28_middle, r28_right, r28_fine) {
            var r28_left, r28_middle, r28_right, r28_fine, r28_bandLeft, r28_bandRight, _r28_t0, _r28_t1;
            r28_bandLeft = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r28_right, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r28_right, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r28_middle, r4_XO)['heads-to'](r4_LEFTWARD)['to-outline']();
            r28_bandRight = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r28_middle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r28_left, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r28_fine)['to-outline']();
            return r28_bandLeft['concat'](r28_bandRight);
        };
        r4_sHookUpper = function _r4_t48(r29_top, r29_smooth, r29_hook, r29__middle) {
            var r29_top, r29_smooth, r29_hook, r29__middle, r29_middle, _r29_t0, _r29_t1;
            r29_middle = r29__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB - r4_OXHOOK, r29_top - r29_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r29_middle, r4_RIGHTSB, r4_KAPPA_HOOK), r29_top - r4_O, r29_middle, r29_top - r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r29_top - r29_smooth)['to-outline']();
        };
        r4_twoHookUpper = function _r4_t49(r30_top, r30_smooth, r30_hook, r30__middle) {
            var r30_top, r30_smooth, r30_hook, r30__middle, r30_middle, _r30_t0, _r30_t1;
            r30_middle = r30__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r30_top - r30_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r30_middle, r4_SB, r4_KAPPA_HOOK), r30_top - r4_O, r30_middle, r30_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r30_top - r30_smooth)['to-outline']();
        };
        r4_sHookLower = function _r4_t50(r31_bottom, r31_smooth, r31_hook, r31__middle) {
            var r31_bottom, r31_smooth, r31_hook, r31__middle, r31_middle, _r31_t0, _r31_t1;
            r31_middle = r31__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB, r31_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r31_middle, r31_bottom + r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r0_mix(r31_middle, r4_SB, r4_KAPPA_HOOK), r31_bottom + r4_O, r4_SB + r4_OXHOOK, r31_bottom + r31_hook)['to-outline']();
        };
        r4_smallo = function _r4_t51(r32_u, r32_d, r32_l, r32_r) {
            var r32_u, r32_d, r32_l, r32_r, r32_middle, r32_ymiddlea, r32_ymiddleb, _r32_t0, _r32_t1, _r32_t2;
            r32_middle = (r32_l + r32_r) / 2;
            if (r32_u - r32_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB)
                return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r32_middle, r32_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r32_l + r4_O, r32_u - r4_SMALLSMOOTHA)['line-to'](r32_l + r4_O, r32_d + r4_SMALLSMOOTHB)['arc-vh-to'](r32_middle, r32_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r32_r - r4_O, r32_d + r4_SMALLSMOOTHA)['line-to'](r32_r - r4_O, r32_u - r4_SMALLSMOOTHB)['arc-vh-to'](r32_middle, r32_u - r4_O)['heads-to'](r4_LEFTWARD)['to-outline']();
            else {
                r32_ymiddlea = (r32_u - r4_SMALLSMOOTHA + r32_d + r4_SMALLSMOOTHB) / 2;
                r32_ymiddleb = (r32_u - r4_SMALLSMOOTHB + r32_d + r4_SMALLSMOOTHA) / 2;
                return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r32_middle, r32_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r32_l + r4_O, r32_ymiddlea)['arc-vh-to'](r32_middle, r32_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r32_r - r4_O, r32_ymiddleb)['arc-vh-to'](r32_middle, r32_u - r4_O)['heads-to'](r4_LEFTWARD)['to-outline']();
            }
        };
        r4_hbar = function _r4_t52(r33_xleft, r33_xright, r33_y, r33__fine) {
            var r33_xleft, r33_xright, r33_y, r33__fine, r33_fine, _r33_t0, _r33_t1;
            r33_fine = (r33__fine || r4_STROKE) / 2;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r33_xleft, r33_y)['heads-to'](r4_RIGHTWARD)['set-width'](r33_fine, r33_fine)['line-to'](r33_xright, r33_y)['heads-to'](r4_RIGHTWARD)['to-outline']();
        };
        r4_vbar = function _r4_t53(r34_x, r34_ydown, r34_yup, r34__fine) {
            var r34_x, r34_ydown, r34_yup, r34__fine, r34_fine, _r34_t0, _r34_t1, _r34_t2, _r34_t3, _r34_t4, _r34_t5, _r34_t6, _r34_t7, _r34_t8, _r34_t9, _r34_t10, _r34_t11, _r34_t12, _r34_t13, _r34_t14, _r34_t15, _r34_t16, _r34_t17;
            r34_fine = (r34__fine || r4_STROKE) / 2;
            _r34_t2 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r34_x, r34_ydown);
            _r34_t3 = _r34_t2['heads-to'];
            if (r34_ydown < r34_yup)
                _r34_t4 = r4_UPWARD;
            else
                _r34_t4 = r4_DOWNWARD;
            _r34_t5 = _r34_t3['call'](_r34_t2, _r34_t4);
            _r34_t6 = _r34_t5['set-width'];
            _r34_t7 = r34_fine;
            _r34_t8 = r34_fine;
            _r34_t9 = _r34_t6['call'](_r34_t5, _r34_t7, _r34_t8);
            _r34_t10 = _r34_t9['line-to'];
            _r34_t11 = r34_x;
            _r34_t12 = r34_yup;
            _r34_t13 = _r34_t10['call'](_r34_t9, _r34_t11, _r34_t12);
            _r34_t14 = _r34_t13['heads-to'];
            if (r34_ydown < r34_yup)
                _r34_t15 = r4_UPWARD;
            else
                _r34_t15 = r4_DOWNWARD;
            _r34_t16 = _r34_t14['call'](_r34_t13, _r34_t15);
            _r34_t17 = _r34_t16['to-outline'];
            return _r34_t17['call'](_r34_t16);
        };
        r4_markExtend = r4_ACCENTX * 0.5;
        r4_markStress = 0.5 * Math['min'](r4_STROKE, r4_ACCENT * 0.6);
        r4_markFine = r4_markStress * 0.8;
        r4_markHalfStroke = r0_mix(r4_markFine, r4_markStress, 0.5);
        r4_markMiddle = -r4_MIDDLE;
        r4_markDotsRadius = r4_DOTRADIUS * r4_markStress / r4_HALFSTROKE;
        r4_aboveMarkTop = r4_XH + r4_ACCENT * 1.375;
        r4_aboveMarkBot = r4_XH + r4_ACCENT * 0.35;
        r4_belowMarkBot = 0 - r4_ACCENT * 1.375;
        r4_belowMarkTop = 0 - r4_ACCENT * 0.35;
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t54() {
            var r36_currentGlyph, r36_xn$setwidth$9Jrj, r36_xn$assignunicode$7Hrq, r36_xn$startfrom$1aao, r36_xn$lineto$5sIl, r36_xn$curveto$1aao, r36_xn$cubicto$1aao, r36_xn$putshapes$9Jrj, r36_xn$reverselast$3qIs, r36_include, r36_xn$createstroke$7Hrq, r36_xn$setanchor$9Jrj, _r36_t0, _r36_t1, _r36_t2;
            _r36_t0 = this;
            r36_currentGlyph = _r36_t0;
            r36_xn$setwidth$9Jrj = _r36_t0['set-width']['bind'](_r36_t0);
            r36_xn$assignunicode$7Hrq = function _r36_t2(r37_code) {
                var r37_code, _r37_t0, _r37_t1;
                r36_currentGlyph['assign-unicode'](r37_code);
                return r4_unicodeGlyphs[r36_currentGlyph['unicode'][r36_currentGlyph['unicode']['length'] - 1]] = r36_currentGlyph;
            };
            r36_xn$startfrom$1aao = _r36_t0['start-from']['bind'](_r36_t0);
            r36_xn$lineto$5sIl = _r36_t0['line-to']['bind'](_r36_t0);
            r36_xn$curveto$1aao = _r36_t0['curve-to']['bind'](_r36_t0);
            r36_xn$cubicto$1aao = _r36_t0['cubic-to']['bind'](_r36_t0);
            r36_xn$putshapes$9Jrj = _r36_t0['put-shapes']['bind'](_r36_t0);
            r36_xn$reverselast$3qIs = _r36_t0['reverse-last']['bind'](_r36_t0);
            r36_include = _r36_t0['include']['bind'](_r36_t0);
            r36_xn$createstroke$7Hrq = _r36_t0['create-stroke']['bind'](_r36_t0);
            r36_xn$setanchor$9Jrj = _r36_t0['set-anchor']['bind'](_r36_t0);
            _r36_t0['gizmo'] = r4_globalTransform;
            _r36_t0['set-width'](r4_WIDTH);
            r36_xn$setwidth$9Jrj(0);
            r36_xn$assignunicode$7Hrq(775);
            r36_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r36_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t55() {
            var r39_currentGlyph, r39_xn$setwidth$9Jrj, r39_xn$assignunicode$7Hrq, r39_xn$startfrom$1aao, r39_xn$lineto$5sIl, r39_xn$curveto$1aao, r39_xn$cubicto$1aao, r39_xn$putshapes$9Jrj, r39_xn$reverselast$3qIs, r39_include, r39_xn$createstroke$7Hrq, r39_xn$setanchor$9Jrj, _r39_t0, _r39_t1, _r39_t2;
            _r39_t0 = this;
            r39_currentGlyph = _r39_t0;
            r39_xn$setwidth$9Jrj = _r39_t0['set-width']['bind'](_r39_t0);
            r39_xn$assignunicode$7Hrq = function _r39_t2(r40_code) {
                var r40_code, _r40_t0, _r40_t1;
                r39_currentGlyph['assign-unicode'](r40_code);
                return r4_unicodeGlyphs[r39_currentGlyph['unicode'][r39_currentGlyph['unicode']['length'] - 1]] = r39_currentGlyph;
            };
            r39_xn$startfrom$1aao = _r39_t0['start-from']['bind'](_r39_t0);
            r39_xn$lineto$5sIl = _r39_t0['line-to']['bind'](_r39_t0);
            r39_xn$curveto$1aao = _r39_t0['curve-to']['bind'](_r39_t0);
            r39_xn$cubicto$1aao = _r39_t0['cubic-to']['bind'](_r39_t0);
            r39_xn$putshapes$9Jrj = _r39_t0['put-shapes']['bind'](_r39_t0);
            r39_xn$reverselast$3qIs = _r39_t0['reverse-last']['bind'](_r39_t0);
            r39_include = _r39_t0['include']['bind'](_r39_t0);
            r39_xn$createstroke$7Hrq = _r39_t0['create-stroke']['bind'](_r39_t0);
            r39_xn$setanchor$9Jrj = _r39_t0['set-anchor']['bind'](_r39_t0);
            _r39_t0['gizmo'] = r4_globalTransform;
            _r39_t0['set-width'](r4_WIDTH);
            r39_xn$setwidth$9Jrj(0);
            r39_xn$assignunicode$7Hrq(776);
            r39_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r39_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t56() {
            var r42_currentGlyph, r42_xn$setwidth$9Jrj, r42_xn$assignunicode$7Hrq, r42_xn$startfrom$1aao, r42_xn$lineto$5sIl, r42_xn$curveto$1aao, r42_xn$cubicto$1aao, r42_xn$putshapes$9Jrj, r42_xn$reverselast$3qIs, r42_include, r42_xn$createstroke$7Hrq, r42_xn$setanchor$9Jrj, r42_radiusOut, r42_radiusIn, _r42_t0, _r42_t1, _r42_t2;
            _r42_t0 = this;
            r42_currentGlyph = _r42_t0;
            r42_xn$setwidth$9Jrj = _r42_t0['set-width']['bind'](_r42_t0);
            r42_xn$assignunicode$7Hrq = function _r42_t2(r43_code) {
                var r43_code, _r43_t0, _r43_t1;
                r42_currentGlyph['assign-unicode'](r43_code);
                return r4_unicodeGlyphs[r42_currentGlyph['unicode'][r42_currentGlyph['unicode']['length'] - 1]] = r42_currentGlyph;
            };
            r42_xn$startfrom$1aao = _r42_t0['start-from']['bind'](_r42_t0);
            r42_xn$lineto$5sIl = _r42_t0['line-to']['bind'](_r42_t0);
            r42_xn$curveto$1aao = _r42_t0['curve-to']['bind'](_r42_t0);
            r42_xn$cubicto$1aao = _r42_t0['cubic-to']['bind'](_r42_t0);
            r42_xn$putshapes$9Jrj = _r42_t0['put-shapes']['bind'](_r42_t0);
            r42_xn$reverselast$3qIs = _r42_t0['reverse-last']['bind'](_r42_t0);
            r42_include = _r42_t0['include']['bind'](_r42_t0);
            r42_xn$createstroke$7Hrq = _r42_t0['create-stroke']['bind'](_r42_t0);
            r42_xn$setanchor$9Jrj = _r42_t0['set-anchor']['bind'](_r42_t0);
            _r42_t0['gizmo'] = r4_globalTransform;
            _r42_t0['set-width'](r4_WIDTH);
            r42_xn$setwidth$9Jrj(0);
            r42_xn$assignunicode$7Hrq(778);
            r42_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r42_radiusOut = r4_DOTRADIUS * 1.5;
            r42_radiusIn = r4_DOTRADIUS * 0.7;
            r42_include([
                r4_Ring(r4_XH + r4_ACCENT + r42_radiusOut, r4_XH + r4_ACCENT - r42_radiusOut, r4_markMiddle - r42_radiusOut, r4_markMiddle + r42_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r42_radiusIn, r4_XH + r4_ACCENT - r42_radiusIn, r4_markMiddle - r42_radiusIn, r4_markMiddle + r42_radiusIn)
            ]);
            r42_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t57() {
            var r45_currentGlyph, r45_xn$setwidth$9Jrj, r45_xn$assignunicode$7Hrq, r45_xn$startfrom$1aao, r45_xn$lineto$5sIl, r45_xn$curveto$1aao, r45_xn$cubicto$1aao, r45_xn$putshapes$9Jrj, r45_xn$reverselast$3qIs, r45_include, r45_xn$createstroke$7Hrq, r45_xn$setanchor$9Jrj, _r45_t0, _r45_t1, _r45_t2;
            _r45_t0 = this;
            r45_currentGlyph = _r45_t0;
            r45_xn$setwidth$9Jrj = _r45_t0['set-width']['bind'](_r45_t0);
            r45_xn$assignunicode$7Hrq = function _r45_t2(r46_code) {
                var r46_code, _r46_t0, _r46_t1;
                r45_currentGlyph['assign-unicode'](r46_code);
                return r4_unicodeGlyphs[r45_currentGlyph['unicode'][r45_currentGlyph['unicode']['length'] - 1]] = r45_currentGlyph;
            };
            r45_xn$startfrom$1aao = _r45_t0['start-from']['bind'](_r45_t0);
            r45_xn$lineto$5sIl = _r45_t0['line-to']['bind'](_r45_t0);
            r45_xn$curveto$1aao = _r45_t0['curve-to']['bind'](_r45_t0);
            r45_xn$cubicto$1aao = _r45_t0['cubic-to']['bind'](_r45_t0);
            r45_xn$putshapes$9Jrj = _r45_t0['put-shapes']['bind'](_r45_t0);
            r45_xn$reverselast$3qIs = _r45_t0['reverse-last']['bind'](_r45_t0);
            r45_include = _r45_t0['include']['bind'](_r45_t0);
            r45_xn$createstroke$7Hrq = _r45_t0['create-stroke']['bind'](_r45_t0);
            r45_xn$setanchor$9Jrj = _r45_t0['set-anchor']['bind'](_r45_t0);
            _r45_t0['gizmo'] = r4_globalTransform;
            _r45_t0['set-width'](r4_WIDTH);
            r45_xn$setwidth$9Jrj(0);
            r45_xn$assignunicode$7Hrq(768);
            r45_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r45_include(r45_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t58() {
            var r48_currentGlyph, r48_xn$setwidth$9Jrj, r48_xn$assignunicode$7Hrq, r48_xn$startfrom$1aao, r48_xn$lineto$5sIl, r48_xn$curveto$1aao, r48_xn$cubicto$1aao, r48_xn$putshapes$9Jrj, r48_xn$reverselast$3qIs, r48_include, r48_xn$createstroke$7Hrq, r48_xn$setanchor$9Jrj, _r48_t0, _r48_t1, _r48_t2;
            _r48_t0 = this;
            r48_currentGlyph = _r48_t0;
            r48_xn$setwidth$9Jrj = _r48_t0['set-width']['bind'](_r48_t0);
            r48_xn$assignunicode$7Hrq = function _r48_t2(r49_code) {
                var r49_code, _r49_t0, _r49_t1;
                r48_currentGlyph['assign-unicode'](r49_code);
                return r4_unicodeGlyphs[r48_currentGlyph['unicode'][r48_currentGlyph['unicode']['length'] - 1]] = r48_currentGlyph;
            };
            r48_xn$startfrom$1aao = _r48_t0['start-from']['bind'](_r48_t0);
            r48_xn$lineto$5sIl = _r48_t0['line-to']['bind'](_r48_t0);
            r48_xn$curveto$1aao = _r48_t0['curve-to']['bind'](_r48_t0);
            r48_xn$cubicto$1aao = _r48_t0['cubic-to']['bind'](_r48_t0);
            r48_xn$putshapes$9Jrj = _r48_t0['put-shapes']['bind'](_r48_t0);
            r48_xn$reverselast$3qIs = _r48_t0['reverse-last']['bind'](_r48_t0);
            r48_include = _r48_t0['include']['bind'](_r48_t0);
            r48_xn$createstroke$7Hrq = _r48_t0['create-stroke']['bind'](_r48_t0);
            r48_xn$setanchor$9Jrj = _r48_t0['set-anchor']['bind'](_r48_t0);
            _r48_t0['gizmo'] = r4_globalTransform;
            _r48_t0['set-width'](r4_WIDTH);
            r48_xn$setwidth$9Jrj(0);
            r48_xn$assignunicode$7Hrq(769);
            r48_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r48_include(r48_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t59() {
            var r51_currentGlyph, r51_xn$setwidth$9Jrj, r51_xn$assignunicode$7Hrq, r51_xn$startfrom$1aao, r51_xn$lineto$5sIl, r51_xn$curveto$1aao, r51_xn$cubicto$1aao, r51_xn$putshapes$9Jrj, r51_xn$reverselast$3qIs, r51_include, r51_xn$createstroke$7Hrq, r51_xn$setanchor$9Jrj, _r51_t0, _r51_t1, _r51_t2;
            _r51_t0 = this;
            r51_currentGlyph = _r51_t0;
            r51_xn$setwidth$9Jrj = _r51_t0['set-width']['bind'](_r51_t0);
            r51_xn$assignunicode$7Hrq = function _r51_t2(r52_code) {
                var r52_code, _r52_t0, _r52_t1;
                r51_currentGlyph['assign-unicode'](r52_code);
                return r4_unicodeGlyphs[r51_currentGlyph['unicode'][r51_currentGlyph['unicode']['length'] - 1]] = r51_currentGlyph;
            };
            r51_xn$startfrom$1aao = _r51_t0['start-from']['bind'](_r51_t0);
            r51_xn$lineto$5sIl = _r51_t0['line-to']['bind'](_r51_t0);
            r51_xn$curveto$1aao = _r51_t0['curve-to']['bind'](_r51_t0);
            r51_xn$cubicto$1aao = _r51_t0['cubic-to']['bind'](_r51_t0);
            r51_xn$putshapes$9Jrj = _r51_t0['put-shapes']['bind'](_r51_t0);
            r51_xn$reverselast$3qIs = _r51_t0['reverse-last']['bind'](_r51_t0);
            r51_include = _r51_t0['include']['bind'](_r51_t0);
            r51_xn$createstroke$7Hrq = _r51_t0['create-stroke']['bind'](_r51_t0);
            r51_xn$setanchor$9Jrj = _r51_t0['set-anchor']['bind'](_r51_t0);
            _r51_t0['gizmo'] = r4_globalTransform;
            _r51_t0['set-width'](r4_WIDTH);
            r51_xn$setwidth$9Jrj(0);
            r51_xn$assignunicode$7Hrq(770);
            r51_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r51_include(r51_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r51_include(r51_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t60() {
            var r54_currentGlyph, r54_xn$setwidth$9Jrj, r54_xn$assignunicode$7Hrq, r54_xn$startfrom$1aao, r54_xn$lineto$5sIl, r54_xn$curveto$1aao, r54_xn$cubicto$1aao, r54_xn$putshapes$9Jrj, r54_xn$reverselast$3qIs, r54_include, r54_xn$createstroke$7Hrq, r54_xn$setanchor$9Jrj, _r54_t0, _r54_t1, _r54_t2;
            _r54_t0 = this;
            r54_currentGlyph = _r54_t0;
            r54_xn$setwidth$9Jrj = _r54_t0['set-width']['bind'](_r54_t0);
            r54_xn$assignunicode$7Hrq = function _r54_t2(r55_code) {
                var r55_code, _r55_t0, _r55_t1;
                r54_currentGlyph['assign-unicode'](r55_code);
                return r4_unicodeGlyphs[r54_currentGlyph['unicode'][r54_currentGlyph['unicode']['length'] - 1]] = r54_currentGlyph;
            };
            r54_xn$startfrom$1aao = _r54_t0['start-from']['bind'](_r54_t0);
            r54_xn$lineto$5sIl = _r54_t0['line-to']['bind'](_r54_t0);
            r54_xn$curveto$1aao = _r54_t0['curve-to']['bind'](_r54_t0);
            r54_xn$cubicto$1aao = _r54_t0['cubic-to']['bind'](_r54_t0);
            r54_xn$putshapes$9Jrj = _r54_t0['put-shapes']['bind'](_r54_t0);
            r54_xn$reverselast$3qIs = _r54_t0['reverse-last']['bind'](_r54_t0);
            r54_include = _r54_t0['include']['bind'](_r54_t0);
            r54_xn$createstroke$7Hrq = _r54_t0['create-stroke']['bind'](_r54_t0);
            r54_xn$setanchor$9Jrj = _r54_t0['set-anchor']['bind'](_r54_t0);
            _r54_t0['gizmo'] = r4_globalTransform;
            _r54_t0['set-width'](r4_WIDTH);
            r54_xn$setwidth$9Jrj(0);
            r54_xn$assignunicode$7Hrq(780);
            r54_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r54_include(r54_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r54_include(r54_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t61() {
            var r57_currentGlyph, r57_xn$setwidth$9Jrj, r57_xn$assignunicode$7Hrq, r57_xn$startfrom$1aao, r57_xn$lineto$5sIl, r57_xn$curveto$1aao, r57_xn$cubicto$1aao, r57_xn$putshapes$9Jrj, r57_xn$reverselast$3qIs, r57_include, r57_xn$createstroke$7Hrq, r57_xn$setanchor$9Jrj, r57_leftEnd, r57_rightEnd, r57_ttop, r57_tbot, r57_top, r57_bot, r57_tildeWave, r57_tildeWaveX, r57_tildeWaveEnd, _r57_t0, _r57_t1, _r57_t2;
            _r57_t0 = this;
            r57_currentGlyph = _r57_t0;
            r57_xn$setwidth$9Jrj = _r57_t0['set-width']['bind'](_r57_t0);
            r57_xn$assignunicode$7Hrq = function _r57_t2(r58_code) {
                var r58_code, _r58_t0, _r58_t1;
                r57_currentGlyph['assign-unicode'](r58_code);
                return r4_unicodeGlyphs[r57_currentGlyph['unicode'][r57_currentGlyph['unicode']['length'] - 1]] = r57_currentGlyph;
            };
            r57_xn$startfrom$1aao = _r57_t0['start-from']['bind'](_r57_t0);
            r57_xn$lineto$5sIl = _r57_t0['line-to']['bind'](_r57_t0);
            r57_xn$curveto$1aao = _r57_t0['curve-to']['bind'](_r57_t0);
            r57_xn$cubicto$1aao = _r57_t0['cubic-to']['bind'](_r57_t0);
            r57_xn$putshapes$9Jrj = _r57_t0['put-shapes']['bind'](_r57_t0);
            r57_xn$reverselast$3qIs = _r57_t0['reverse-last']['bind'](_r57_t0);
            r57_include = _r57_t0['include']['bind'](_r57_t0);
            r57_xn$createstroke$7Hrq = _r57_t0['create-stroke']['bind'](_r57_t0);
            r57_xn$setanchor$9Jrj = _r57_t0['set-anchor']['bind'](_r57_t0);
            _r57_t0['gizmo'] = r4_globalTransform;
            _r57_t0['set-width'](r4_WIDTH);
            r57_xn$setwidth$9Jrj(0);
            r57_xn$assignunicode$7Hrq(771);
            r57_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r57_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r57_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r57_ttop = r4_aboveMarkTop;
            r57_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r57_top = r57_ttop + r4_markFine * 2;
            r57_bot = r57_tbot - r4_markFine * 2;
            r57_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r57_tildeWaveX = 0.52;
            r57_tildeWaveEnd = 0;
            r57_include(r57_xn$createstroke$7Hrq()['start-from'](r57_leftEnd, r0_mix(r57_tbot, r57_ttop, r57_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r57_leftEnd, r57_rightEnd, r57_tildeWaveX), r0_mix(r57_bot, r57_top, r57_tildeWave), r0_mix(r57_leftEnd, r57_rightEnd, 1 - r57_tildeWaveX), r0_mix(r57_bot, r57_top, 1 - r57_tildeWave), r57_rightEnd, r0_mix(r57_tbot, r57_ttop, 1 - r57_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t62() {
            var r60_currentGlyph, r60_xn$setwidth$9Jrj, r60_xn$assignunicode$7Hrq, r60_xn$startfrom$1aao, r60_xn$lineto$5sIl, r60_xn$curveto$1aao, r60_xn$cubicto$1aao, r60_xn$putshapes$9Jrj, r60_xn$reverselast$3qIs, r60_include, r60_xn$createstroke$7Hrq, r60_xn$setanchor$9Jrj, r60_leftEnd, r60_rightEnd, _r60_t0, _r60_t1, _r60_t2;
            _r60_t0 = this;
            r60_currentGlyph = _r60_t0;
            r60_xn$setwidth$9Jrj = _r60_t0['set-width']['bind'](_r60_t0);
            r60_xn$assignunicode$7Hrq = function _r60_t2(r61_code) {
                var r61_code, _r61_t0, _r61_t1;
                r60_currentGlyph['assign-unicode'](r61_code);
                return r4_unicodeGlyphs[r60_currentGlyph['unicode'][r60_currentGlyph['unicode']['length'] - 1]] = r60_currentGlyph;
            };
            r60_xn$startfrom$1aao = _r60_t0['start-from']['bind'](_r60_t0);
            r60_xn$lineto$5sIl = _r60_t0['line-to']['bind'](_r60_t0);
            r60_xn$curveto$1aao = _r60_t0['curve-to']['bind'](_r60_t0);
            r60_xn$cubicto$1aao = _r60_t0['cubic-to']['bind'](_r60_t0);
            r60_xn$putshapes$9Jrj = _r60_t0['put-shapes']['bind'](_r60_t0);
            r60_xn$reverselast$3qIs = _r60_t0['reverse-last']['bind'](_r60_t0);
            r60_include = _r60_t0['include']['bind'](_r60_t0);
            r60_xn$createstroke$7Hrq = _r60_t0['create-stroke']['bind'](_r60_t0);
            r60_xn$setanchor$9Jrj = _r60_t0['set-anchor']['bind'](_r60_t0);
            _r60_t0['gizmo'] = r4_globalTransform;
            _r60_t0['set-width'](r4_WIDTH);
            r60_xn$setwidth$9Jrj(0);
            r60_xn$assignunicode$7Hrq(772);
            r60_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r60_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r60_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r60_include(r60_xn$createstroke$7Hrq()['start-from'](r60_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r60_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t63() {
            var r63_currentGlyph, r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, r63_include, r63_xn$createstroke$7Hrq, r63_xn$setanchor$9Jrj, r63_leftEnd, r63_rightEnd, _r63_t0, _r63_t1, _r63_t2;
            _r63_t0 = this;
            r63_currentGlyph = _r63_t0;
            r63_xn$setwidth$9Jrj = _r63_t0['set-width']['bind'](_r63_t0);
            r63_xn$assignunicode$7Hrq = function _r63_t2(r64_code) {
                var r64_code, _r64_t0, _r64_t1;
                r63_currentGlyph['assign-unicode'](r64_code);
                return r4_unicodeGlyphs[r63_currentGlyph['unicode'][r63_currentGlyph['unicode']['length'] - 1]] = r63_currentGlyph;
            };
            r63_xn$startfrom$1aao = _r63_t0['start-from']['bind'](_r63_t0);
            r63_xn$lineto$5sIl = _r63_t0['line-to']['bind'](_r63_t0);
            r63_xn$curveto$1aao = _r63_t0['curve-to']['bind'](_r63_t0);
            r63_xn$cubicto$1aao = _r63_t0['cubic-to']['bind'](_r63_t0);
            r63_xn$putshapes$9Jrj = _r63_t0['put-shapes']['bind'](_r63_t0);
            r63_xn$reverselast$3qIs = _r63_t0['reverse-last']['bind'](_r63_t0);
            r63_include = _r63_t0['include']['bind'](_r63_t0);
            r63_xn$createstroke$7Hrq = _r63_t0['create-stroke']['bind'](_r63_t0);
            r63_xn$setanchor$9Jrj = _r63_t0['set-anchor']['bind'](_r63_t0);
            _r63_t0['gizmo'] = r4_globalTransform;
            _r63_t0['set-width'](r4_WIDTH);
            r63_xn$setwidth$9Jrj(0);
            r63_xn$assignunicode$7Hrq(774);
            r63_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r63_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r63_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r63_include(r63_xn$createstroke$7Hrq()['start-from'](r63_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r63_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t64() {
            var r66_currentGlyph, r66_xn$setwidth$9Jrj, r66_xn$assignunicode$7Hrq, r66_xn$startfrom$1aao, r66_xn$lineto$5sIl, r66_xn$curveto$1aao, r66_xn$cubicto$1aao, r66_xn$putshapes$9Jrj, r66_xn$reverselast$3qIs, r66_include, r66_xn$createstroke$7Hrq, r66_xn$setanchor$9Jrj, _r66_t0, _r66_t1, _r66_t2;
            _r66_t0 = this;
            r66_currentGlyph = _r66_t0;
            r66_xn$setwidth$9Jrj = _r66_t0['set-width']['bind'](_r66_t0);
            r66_xn$assignunicode$7Hrq = function _r66_t2(r67_code) {
                var r67_code, _r67_t0, _r67_t1;
                r66_currentGlyph['assign-unicode'](r67_code);
                return r4_unicodeGlyphs[r66_currentGlyph['unicode'][r66_currentGlyph['unicode']['length'] - 1]] = r66_currentGlyph;
            };
            r66_xn$startfrom$1aao = _r66_t0['start-from']['bind'](_r66_t0);
            r66_xn$lineto$5sIl = _r66_t0['line-to']['bind'](_r66_t0);
            r66_xn$curveto$1aao = _r66_t0['curve-to']['bind'](_r66_t0);
            r66_xn$cubicto$1aao = _r66_t0['cubic-to']['bind'](_r66_t0);
            r66_xn$putshapes$9Jrj = _r66_t0['put-shapes']['bind'](_r66_t0);
            r66_xn$reverselast$3qIs = _r66_t0['reverse-last']['bind'](_r66_t0);
            r66_include = _r66_t0['include']['bind'](_r66_t0);
            r66_xn$createstroke$7Hrq = _r66_t0['create-stroke']['bind'](_r66_t0);
            r66_xn$setanchor$9Jrj = _r66_t0['set-anchor']['bind'](_r66_t0);
            _r66_t0['gizmo'] = r4_globalTransform;
            _r66_t0['set-width'](r4_WIDTH);
            r66_xn$setwidth$9Jrj(0);
            r66_xn$assignunicode$7Hrq(803);
            r66_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r66_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t65() {
            var r69_currentGlyph, r69_xn$setwidth$9Jrj, r69_xn$assignunicode$7Hrq, r69_xn$startfrom$1aao, r69_xn$lineto$5sIl, r69_xn$curveto$1aao, r69_xn$cubicto$1aao, r69_xn$putshapes$9Jrj, r69_xn$reverselast$3qIs, r69_include, r69_xn$createstroke$7Hrq, r69_xn$setanchor$9Jrj, r69_fine, r69_cedillaTop, r69_cedillaBot, _r69_t0, _r69_t1, _r69_t2;
            _r69_t0 = this;
            r69_currentGlyph = _r69_t0;
            r69_xn$setwidth$9Jrj = _r69_t0['set-width']['bind'](_r69_t0);
            r69_xn$assignunicode$7Hrq = function _r69_t2(r70_code) {
                var r70_code, _r70_t0, _r70_t1;
                r69_currentGlyph['assign-unicode'](r70_code);
                return r4_unicodeGlyphs[r69_currentGlyph['unicode'][r69_currentGlyph['unicode']['length'] - 1]] = r69_currentGlyph;
            };
            r69_xn$startfrom$1aao = _r69_t0['start-from']['bind'](_r69_t0);
            r69_xn$lineto$5sIl = _r69_t0['line-to']['bind'](_r69_t0);
            r69_xn$curveto$1aao = _r69_t0['curve-to']['bind'](_r69_t0);
            r69_xn$cubicto$1aao = _r69_t0['cubic-to']['bind'](_r69_t0);
            r69_xn$putshapes$9Jrj = _r69_t0['put-shapes']['bind'](_r69_t0);
            r69_xn$reverselast$3qIs = _r69_t0['reverse-last']['bind'](_r69_t0);
            r69_include = _r69_t0['include']['bind'](_r69_t0);
            r69_xn$createstroke$7Hrq = _r69_t0['create-stroke']['bind'](_r69_t0);
            r69_xn$setanchor$9Jrj = _r69_t0['set-anchor']['bind'](_r69_t0);
            _r69_t0['gizmo'] = r4_globalTransform;
            _r69_t0['set-width'](r4_WIDTH);
            r69_xn$setwidth$9Jrj(0);
            r69_xn$assignunicode$7Hrq(807);
            r69_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r69_fine = Math['min'](r4_markHalfStroke, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r69_cedillaTop = r4_belowMarkTop + r69_fine * 0.85;
            r69_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r69_include(r69_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r69_fine * r4_ITALICCOR, r69_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r69_fine * 2)['line-to'](r4_markMiddle + r69_fine * 0.5, r69_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r69_cedillaTop, r69_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r69_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r69_cedillaBot)['heads-to'](r4_LEFTWARD));
            r69_include(r69_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r69_fine, r69_fine)['line-to'](r4_markMiddle, r69_cedillaTop - r69_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t66() {
            var r72_currentGlyph, r72_xn$setwidth$9Jrj, r72_xn$assignunicode$7Hrq, r72_xn$startfrom$1aao, r72_xn$lineto$5sIl, r72_xn$curveto$1aao, r72_xn$cubicto$1aao, r72_xn$putshapes$9Jrj, r72_xn$reverselast$3qIs, r72_include, r72_xn$createstroke$7Hrq, r72_xn$setanchor$9Jrj, r72_TURN, _r72_t0, _r72_t1, _r72_t2;
            _r72_t0 = this;
            r72_currentGlyph = _r72_t0;
            r72_xn$setwidth$9Jrj = _r72_t0['set-width']['bind'](_r72_t0);
            r72_xn$assignunicode$7Hrq = function _r72_t2(r73_code) {
                var r73_code, _r73_t0, _r73_t1;
                r72_currentGlyph['assign-unicode'](r73_code);
                return r4_unicodeGlyphs[r72_currentGlyph['unicode'][r72_currentGlyph['unicode']['length'] - 1]] = r72_currentGlyph;
            };
            r72_xn$startfrom$1aao = _r72_t0['start-from']['bind'](_r72_t0);
            r72_xn$lineto$5sIl = _r72_t0['line-to']['bind'](_r72_t0);
            r72_xn$curveto$1aao = _r72_t0['curve-to']['bind'](_r72_t0);
            r72_xn$cubicto$1aao = _r72_t0['cubic-to']['bind'](_r72_t0);
            r72_xn$putshapes$9Jrj = _r72_t0['put-shapes']['bind'](_r72_t0);
            r72_xn$reverselast$3qIs = _r72_t0['reverse-last']['bind'](_r72_t0);
            r72_include = _r72_t0['include']['bind'](_r72_t0);
            r72_xn$createstroke$7Hrq = _r72_t0['create-stroke']['bind'](_r72_t0);
            r72_xn$setanchor$9Jrj = _r72_t0['set-anchor']['bind'](_r72_t0);
            _r72_t0['gizmo'] = r4_globalTransform;
            _r72_t0['set-width'](r4_WIDTH);
            r72_xn$setwidth$9Jrj(r4_WIDTH);
            r72_xn$assignunicode$7Hrq('A');
            r72_include(r4_capitalMarks);
            r72_TURN = r4_XH * 0.1;
            r72_include(r72_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r72_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r72_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r72_include(r72_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r72_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r72_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r72_include(r72_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r72_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r72_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r72_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t67() {
            var r75_currentGlyph, r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_include, r75_xn$createstroke$7Hrq, r75_xn$setanchor$9Jrj, r75_TURN, _r75_t0, _r75_t1, _r75_t2;
            _r75_t0 = this;
            r75_currentGlyph = _r75_t0;
            r75_xn$setwidth$9Jrj = _r75_t0['set-width']['bind'](_r75_t0);
            r75_xn$assignunicode$7Hrq = function _r75_t2(r76_code) {
                var r76_code, _r76_t0, _r76_t1;
                r75_currentGlyph['assign-unicode'](r76_code);
                return r4_unicodeGlyphs[r75_currentGlyph['unicode'][r75_currentGlyph['unicode']['length'] - 1]] = r75_currentGlyph;
            };
            r75_xn$startfrom$1aao = _r75_t0['start-from']['bind'](_r75_t0);
            r75_xn$lineto$5sIl = _r75_t0['line-to']['bind'](_r75_t0);
            r75_xn$curveto$1aao = _r75_t0['curve-to']['bind'](_r75_t0);
            r75_xn$cubicto$1aao = _r75_t0['cubic-to']['bind'](_r75_t0);
            r75_xn$putshapes$9Jrj = _r75_t0['put-shapes']['bind'](_r75_t0);
            r75_xn$reverselast$3qIs = _r75_t0['reverse-last']['bind'](_r75_t0);
            r75_include = _r75_t0['include']['bind'](_r75_t0);
            r75_xn$createstroke$7Hrq = _r75_t0['create-stroke']['bind'](_r75_t0);
            r75_xn$setanchor$9Jrj = _r75_t0['set-anchor']['bind'](_r75_t0);
            _r75_t0['gizmo'] = r4_globalTransform;
            _r75_t0['set-width'](r4_WIDTH);
            r75_xn$setwidth$9Jrj(r4_WIDTH);
            r75_xn$assignunicode$7Hrq('V');
            r75_include(r4_capitalMarks);
            r75_TURN = r4_CAP * 0.9;
            r75_include(r75_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r75_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r75_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r75_include(r75_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r75_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r75_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r75_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r75_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r75_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t68() {
            var r78_currentGlyph, r78_xn$setwidth$9Jrj, r78_xn$assignunicode$7Hrq, r78_xn$startfrom$1aao, r78_xn$lineto$5sIl, r78_xn$curveto$1aao, r78_xn$cubicto$1aao, r78_xn$putshapes$9Jrj, r78_xn$reverselast$3qIs, r78_include, r78_xn$createstroke$7Hrq, r78_xn$setanchor$9Jrj, r78_TURN, r78_turn2, r78_wheight, r78_bottomStroke, r78_m1, r78_m2, _r78_t0, _r78_t1, _r78_t2;
            _r78_t0 = this;
            r78_currentGlyph = _r78_t0;
            r78_xn$setwidth$9Jrj = _r78_t0['set-width']['bind'](_r78_t0);
            r78_xn$assignunicode$7Hrq = function _r78_t2(r79_code) {
                var r79_code, _r79_t0, _r79_t1;
                r78_currentGlyph['assign-unicode'](r79_code);
                return r4_unicodeGlyphs[r78_currentGlyph['unicode'][r78_currentGlyph['unicode']['length'] - 1]] = r78_currentGlyph;
            };
            r78_xn$startfrom$1aao = _r78_t0['start-from']['bind'](_r78_t0);
            r78_xn$lineto$5sIl = _r78_t0['line-to']['bind'](_r78_t0);
            r78_xn$curveto$1aao = _r78_t0['curve-to']['bind'](_r78_t0);
            r78_xn$cubicto$1aao = _r78_t0['cubic-to']['bind'](_r78_t0);
            r78_xn$putshapes$9Jrj = _r78_t0['put-shapes']['bind'](_r78_t0);
            r78_xn$reverselast$3qIs = _r78_t0['reverse-last']['bind'](_r78_t0);
            r78_include = _r78_t0['include']['bind'](_r78_t0);
            r78_xn$createstroke$7Hrq = _r78_t0['create-stroke']['bind'](_r78_t0);
            r78_xn$setanchor$9Jrj = _r78_t0['set-anchor']['bind'](_r78_t0);
            _r78_t0['gizmo'] = r4_globalTransform;
            _r78_t0['set-width'](r4_WIDTH);
            r78_xn$setwidth$9Jrj(r4_WIDTH);
            r78_xn$assignunicode$7Hrq('W');
            r78_include(r4_capitalMarks);
            r78_TURN = r4_CAP * 0.75;
            r78_turn2 = r4_CAP * 0.59;
            r78_wheight = r4_CAP * 0.6;
            r78_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r78_m1 = r4_WIDTH * 0.3;
            r78_m2 = r4_WIDTH * 0.7;
            r78_include(r78_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r78_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r78_TURN, r78_m1 - r78_bottomStroke / 2, 0)['set-width'](r78_bottomStroke, 0));
            r78_include(r78_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r78_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r78_TURN, r78_m2 + r78_bottomStroke / 2, 0)['set-width'](0, r78_bottomStroke));
            r78_include(r78_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r78_bottomStroke / 2, r78_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r78_bottomStroke)['line-to'](r4_MIDDLE + r78_bottomStroke / 2, r78_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r78_bottomStroke / 2, (1 - 0.1) * r78_turn2, r78_m1 + r78_bottomStroke / 2, 0)['set-width'](0, r78_bottomStroke));
            r78_include(r78_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r78_bottomStroke / 2, r78_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r78_bottomStroke, 0)['line-to'](r4_MIDDLE - r78_bottomStroke / 2, r78_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r78_bottomStroke / 2, (1 - 0.1) * r78_turn2, r78_m2 - r78_bottomStroke / 2, 0)['set-width'](r78_bottomStroke, 0));
            r78_xn$startfrom$1aao(r78_m1 + r78_bottomStroke / 2, 0);
            r78_xn$lineto$5sIl(r78_m1 - r78_bottomStroke / 2, 0);
            r78_xn$lineto$5sIl(r78_m1, r78_bottomStroke);
            r78_xn$startfrom$1aao(r78_m2 + r78_bottomStroke / 2, 0);
            r78_xn$lineto$5sIl(r78_m2 - r78_bottomStroke / 2, 0);
            r78_xn$lineto$5sIl(r78_m2, r78_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t69() {
            var r81_currentGlyph, r81_xn$setwidth$9Jrj, r81_xn$assignunicode$7Hrq, r81_xn$startfrom$1aao, r81_xn$lineto$5sIl, r81_xn$curveto$1aao, r81_xn$cubicto$1aao, r81_xn$putshapes$9Jrj, r81_xn$reverselast$3qIs, r81_include, r81_xn$createstroke$7Hrq, r81_xn$setanchor$9Jrj, _r81_t0, _r81_t1, _r81_t2;
            _r81_t0 = this;
            r81_currentGlyph = _r81_t0;
            r81_xn$setwidth$9Jrj = _r81_t0['set-width']['bind'](_r81_t0);
            r81_xn$assignunicode$7Hrq = function _r81_t2(r82_code) {
                var r82_code, _r82_t0, _r82_t1;
                r81_currentGlyph['assign-unicode'](r82_code);
                return r4_unicodeGlyphs[r81_currentGlyph['unicode'][r81_currentGlyph['unicode']['length'] - 1]] = r81_currentGlyph;
            };
            r81_xn$startfrom$1aao = _r81_t0['start-from']['bind'](_r81_t0);
            r81_xn$lineto$5sIl = _r81_t0['line-to']['bind'](_r81_t0);
            r81_xn$curveto$1aao = _r81_t0['curve-to']['bind'](_r81_t0);
            r81_xn$cubicto$1aao = _r81_t0['cubic-to']['bind'](_r81_t0);
            r81_xn$putshapes$9Jrj = _r81_t0['put-shapes']['bind'](_r81_t0);
            r81_xn$reverselast$3qIs = _r81_t0['reverse-last']['bind'](_r81_t0);
            r81_include = _r81_t0['include']['bind'](_r81_t0);
            r81_xn$createstroke$7Hrq = _r81_t0['create-stroke']['bind'](_r81_t0);
            r81_xn$setanchor$9Jrj = _r81_t0['set-anchor']['bind'](_r81_t0);
            _r81_t0['gizmo'] = r4_globalTransform;
            _r81_t0['set-width'](r4_WIDTH);
            r81_xn$setwidth$9Jrj(r4_WIDTH);
            r81_xn$assignunicode$7Hrq('X');
            r81_include(r4_capitalMarks);
            r81_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r81_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t70() {
            var r84_currentGlyph, r84_xn$setwidth$9Jrj, r84_xn$assignunicode$7Hrq, r84_xn$startfrom$1aao, r84_xn$lineto$5sIl, r84_xn$curveto$1aao, r84_xn$cubicto$1aao, r84_xn$putshapes$9Jrj, r84_xn$reverselast$3qIs, r84_include, r84_xn$createstroke$7Hrq, r84_xn$setanchor$9Jrj, r84_cross, _r84_t0, _r84_t1, _r84_t2;
            _r84_t0 = this;
            r84_currentGlyph = _r84_t0;
            r84_xn$setwidth$9Jrj = _r84_t0['set-width']['bind'](_r84_t0);
            r84_xn$assignunicode$7Hrq = function _r84_t2(r85_code) {
                var r85_code, _r85_t0, _r85_t1;
                r84_currentGlyph['assign-unicode'](r85_code);
                return r4_unicodeGlyphs[r84_currentGlyph['unicode'][r84_currentGlyph['unicode']['length'] - 1]] = r84_currentGlyph;
            };
            r84_xn$startfrom$1aao = _r84_t0['start-from']['bind'](_r84_t0);
            r84_xn$lineto$5sIl = _r84_t0['line-to']['bind'](_r84_t0);
            r84_xn$curveto$1aao = _r84_t0['curve-to']['bind'](_r84_t0);
            r84_xn$cubicto$1aao = _r84_t0['cubic-to']['bind'](_r84_t0);
            r84_xn$putshapes$9Jrj = _r84_t0['put-shapes']['bind'](_r84_t0);
            r84_xn$reverselast$3qIs = _r84_t0['reverse-last']['bind'](_r84_t0);
            r84_include = _r84_t0['include']['bind'](_r84_t0);
            r84_xn$createstroke$7Hrq = _r84_t0['create-stroke']['bind'](_r84_t0);
            r84_xn$setanchor$9Jrj = _r84_t0['set-anchor']['bind'](_r84_t0);
            _r84_t0['gizmo'] = r4_globalTransform;
            _r84_t0['set-width'](r4_WIDTH);
            r84_xn$setwidth$9Jrj(r4_WIDTH);
            r84_xn$assignunicode$7Hrq('Y');
            r84_include(r4_capitalMarks);
            r84_cross = r4_CAP * 0.4;
            r84_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r84_cross, 0.1, 0.4, 0.28));
            r84_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r84_cross, 0.1, 0.4, 0.28));
            r84_include(r84_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r84_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t71() {
            var r87_currentGlyph, r87_xn$setwidth$9Jrj, r87_xn$assignunicode$7Hrq, r87_xn$startfrom$1aao, r87_xn$lineto$5sIl, r87_xn$curveto$1aao, r87_xn$cubicto$1aao, r87_xn$putshapes$9Jrj, r87_xn$reverselast$3qIs, r87_include, r87_xn$createstroke$7Hrq, r87_xn$setanchor$9Jrj, r87_TURN, r87_rturn, r87_right, r87_fine, _r87_t0, _r87_t1, _r87_t2;
            _r87_t0 = this;
            r87_currentGlyph = _r87_t0;
            r87_xn$setwidth$9Jrj = _r87_t0['set-width']['bind'](_r87_t0);
            r87_xn$assignunicode$7Hrq = function _r87_t2(r88_code) {
                var r88_code, _r88_t0, _r88_t1;
                r87_currentGlyph['assign-unicode'](r88_code);
                return r4_unicodeGlyphs[r87_currentGlyph['unicode'][r87_currentGlyph['unicode']['length'] - 1]] = r87_currentGlyph;
            };
            r87_xn$startfrom$1aao = _r87_t0['start-from']['bind'](_r87_t0);
            r87_xn$lineto$5sIl = _r87_t0['line-to']['bind'](_r87_t0);
            r87_xn$curveto$1aao = _r87_t0['curve-to']['bind'](_r87_t0);
            r87_xn$cubicto$1aao = _r87_t0['cubic-to']['bind'](_r87_t0);
            r87_xn$putshapes$9Jrj = _r87_t0['put-shapes']['bind'](_r87_t0);
            r87_xn$reverselast$3qIs = _r87_t0['reverse-last']['bind'](_r87_t0);
            r87_include = _r87_t0['include']['bind'](_r87_t0);
            r87_xn$createstroke$7Hrq = _r87_t0['create-stroke']['bind'](_r87_t0);
            r87_xn$setanchor$9Jrj = _r87_t0['set-anchor']['bind'](_r87_t0);
            _r87_t0['gizmo'] = r4_globalTransform;
            _r87_t0['set-width'](r4_WIDTH);
            r87_xn$setwidth$9Jrj(r4_WIDTH);
            r87_xn$assignunicode$7Hrq('K');
            r87_include(r4_capitalMarks);
            r87_TURN = r4_CAP * 0.95;
            r87_rturn = r4_XH * 0.1;
            r87_right = r4_RIGHTSB - r4_O;
            r87_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r87_include(r87_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r87_include(r87_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r87_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r87_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r87_fine));
            r87_include(r87_xn$createstroke$7Hrq()['start-from'](r87_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r87_right - r4_HALFSTROKE, r87_rturn + 0.2 * (r4_XH - r87_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r87_fine / 2, r87_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t72() {
            var r90_currentGlyph, r90_xn$setwidth$9Jrj, r90_xn$assignunicode$7Hrq, r90_xn$startfrom$1aao, r90_xn$lineto$5sIl, r90_xn$curveto$1aao, r90_xn$cubicto$1aao, r90_xn$putshapes$9Jrj, r90_xn$reverselast$3qIs, r90_include, r90_xn$createstroke$7Hrq, r90_xn$setanchor$9Jrj, r90_bowl, r90_tkappa, r90_bkappa, r90_turntop, r90_turnbottom, _r90_t0, _r90_t1, _r90_t2;
            _r90_t0 = this;
            r90_currentGlyph = _r90_t0;
            r90_xn$setwidth$9Jrj = _r90_t0['set-width']['bind'](_r90_t0);
            r90_xn$assignunicode$7Hrq = function _r90_t2(r91_code) {
                var r91_code, _r91_t0, _r91_t1;
                r90_currentGlyph['assign-unicode'](r91_code);
                return r4_unicodeGlyphs[r90_currentGlyph['unicode'][r90_currentGlyph['unicode']['length'] - 1]] = r90_currentGlyph;
            };
            r90_xn$startfrom$1aao = _r90_t0['start-from']['bind'](_r90_t0);
            r90_xn$lineto$5sIl = _r90_t0['line-to']['bind'](_r90_t0);
            r90_xn$curveto$1aao = _r90_t0['curve-to']['bind'](_r90_t0);
            r90_xn$cubicto$1aao = _r90_t0['cubic-to']['bind'](_r90_t0);
            r90_xn$putshapes$9Jrj = _r90_t0['put-shapes']['bind'](_r90_t0);
            r90_xn$reverselast$3qIs = _r90_t0['reverse-last']['bind'](_r90_t0);
            r90_include = _r90_t0['include']['bind'](_r90_t0);
            r90_xn$createstroke$7Hrq = _r90_t0['create-stroke']['bind'](_r90_t0);
            r90_xn$setanchor$9Jrj = _r90_t0['set-anchor']['bind'](_r90_t0);
            _r90_t0['gizmo'] = r4_globalTransform;
            _r90_t0['set-width'](r4_WIDTH);
            r90_xn$setwidth$9Jrj(r4_WIDTH);
            r90_xn$assignunicode$7Hrq('B');
            r90_include(r4_capitalMarks);
            r90_bowl = 451;
            r90_tkappa = r4_COKAPPA - 0.22;
            r90_bkappa = r4_COKAPPA - 0.2;
            r90_turntop = (r4_CAP + (r90_bowl - r4_STROKE)) / 2;
            r90_turnbottom = r90_bowl / 2;
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r90_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r90_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r90_turnbottom, r90_bowl - r4_STROKE)['line-to'](r4_SB, r90_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r90_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r90_turnbottom)['arc-vh-to'](r4_RIGHTSB - r90_turnbottom, r90_bowl)['line-to'](r4_SB, r90_bowl)['heads-to'](r4_LEFTWARD));
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t73() {
            var r93_currentGlyph, r93_xn$setwidth$9Jrj, r93_xn$assignunicode$7Hrq, r93_xn$startfrom$1aao, r93_xn$lineto$5sIl, r93_xn$curveto$1aao, r93_xn$cubicto$1aao, r93_xn$putshapes$9Jrj, r93_xn$reverselast$3qIs, r93_include, r93_xn$createstroke$7Hrq, r93_xn$setanchor$9Jrj, r93_dsmooth, r93_bsmooth, _r93_t0, _r93_t1, _r93_t2;
            _r93_t0 = this;
            r93_currentGlyph = _r93_t0;
            r93_xn$setwidth$9Jrj = _r93_t0['set-width']['bind'](_r93_t0);
            r93_xn$assignunicode$7Hrq = function _r93_t2(r94_code) {
                var r94_code, _r94_t0, _r94_t1;
                r93_currentGlyph['assign-unicode'](r94_code);
                return r4_unicodeGlyphs[r93_currentGlyph['unicode'][r93_currentGlyph['unicode']['length'] - 1]] = r93_currentGlyph;
            };
            r93_xn$startfrom$1aao = _r93_t0['start-from']['bind'](_r93_t0);
            r93_xn$lineto$5sIl = _r93_t0['line-to']['bind'](_r93_t0);
            r93_xn$curveto$1aao = _r93_t0['curve-to']['bind'](_r93_t0);
            r93_xn$cubicto$1aao = _r93_t0['cubic-to']['bind'](_r93_t0);
            r93_xn$putshapes$9Jrj = _r93_t0['put-shapes']['bind'](_r93_t0);
            r93_xn$reverselast$3qIs = _r93_t0['reverse-last']['bind'](_r93_t0);
            r93_include = _r93_t0['include']['bind'](_r93_t0);
            r93_xn$createstroke$7Hrq = _r93_t0['create-stroke']['bind'](_r93_t0);
            r93_xn$setanchor$9Jrj = _r93_t0['set-anchor']['bind'](_r93_t0);
            _r93_t0['gizmo'] = r4_globalTransform;
            _r93_t0['set-width'](r4_WIDTH);
            r93_xn$setwidth$9Jrj(r4_WIDTH);
            r93_xn$assignunicode$7Hrq('D');
            r93_include(r4_capitalMarks);
            r93_dsmooth = r4_SMOOTH * 1.35;
            r93_bsmooth = r4_SMOOTH * 1.1;
            r93_include(r93_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r93_include(r93_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r93_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r93_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r93_dsmooth)['arc-vh-to'](r4_RIGHTSB - r93_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t74() {
            var r96_currentGlyph, r96_xn$setwidth$9Jrj, r96_xn$assignunicode$7Hrq, r96_xn$startfrom$1aao, r96_xn$lineto$5sIl, r96_xn$curveto$1aao, r96_xn$cubicto$1aao, r96_xn$putshapes$9Jrj, r96_xn$reverselast$3qIs, r96_include, r96_xn$createstroke$7Hrq, r96_xn$setanchor$9Jrj, r96_bowl, r96_bkappa, r96_turntop, r96_turnbottom, _r96_t0, _r96_t1, _r96_t2;
            _r96_t0 = this;
            r96_currentGlyph = _r96_t0;
            r96_xn$setwidth$9Jrj = _r96_t0['set-width']['bind'](_r96_t0);
            r96_xn$assignunicode$7Hrq = function _r96_t2(r97_code) {
                var r97_code, _r97_t0, _r97_t1;
                r96_currentGlyph['assign-unicode'](r97_code);
                return r4_unicodeGlyphs[r96_currentGlyph['unicode'][r96_currentGlyph['unicode']['length'] - 1]] = r96_currentGlyph;
            };
            r96_xn$startfrom$1aao = _r96_t0['start-from']['bind'](_r96_t0);
            r96_xn$lineto$5sIl = _r96_t0['line-to']['bind'](_r96_t0);
            r96_xn$curveto$1aao = _r96_t0['curve-to']['bind'](_r96_t0);
            r96_xn$cubicto$1aao = _r96_t0['cubic-to']['bind'](_r96_t0);
            r96_xn$putshapes$9Jrj = _r96_t0['put-shapes']['bind'](_r96_t0);
            r96_xn$reverselast$3qIs = _r96_t0['reverse-last']['bind'](_r96_t0);
            r96_include = _r96_t0['include']['bind'](_r96_t0);
            r96_xn$createstroke$7Hrq = _r96_t0['create-stroke']['bind'](_r96_t0);
            r96_xn$setanchor$9Jrj = _r96_t0['set-anchor']['bind'](_r96_t0);
            _r96_t0['gizmo'] = r4_globalTransform;
            _r96_t0['set-width'](r4_WIDTH);
            r96_xn$setwidth$9Jrj(r4_WIDTH);
            r96_xn$assignunicode$7Hrq('P');
            r96_include(r4_capitalMarks);
            r96_bowl = r4_CAPMIDDLE;
            r96_bkappa = r4_COKAPPA - 0.2;
            r96_turntop = (r4_CAP + (r96_bowl - r4_HALFSTROKE)) / 2;
            r96_turnbottom = r96_bowl / 2;
            r96_include(r96_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r96_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_O, r96_turntop)['arc-vh-to'](r4_RIGHTSB - r96_turnbottom, r96_bowl - r4_HALFSTROKE)['line-to'](r4_SB * 1.25, r96_bowl - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r96_include(r96_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t75() {
            var r99_currentGlyph, r99_xn$setwidth$9Jrj, r99_xn$assignunicode$7Hrq, r99_xn$startfrom$1aao, r99_xn$lineto$5sIl, r99_xn$curveto$1aao, r99_xn$cubicto$1aao, r99_xn$putshapes$9Jrj, r99_xn$reverselast$3qIs, r99_include, r99_xn$createstroke$7Hrq, r99_xn$setanchor$9Jrj, r99_TURN, r99_right, _r99_t0, _r99_t1, _r99_t2;
            _r99_t0 = this;
            r99_currentGlyph = _r99_t0;
            r99_xn$setwidth$9Jrj = _r99_t0['set-width']['bind'](_r99_t0);
            r99_xn$assignunicode$7Hrq = function _r99_t2(r100_code) {
                var r100_code, _r100_t0, _r100_t1;
                r99_currentGlyph['assign-unicode'](r100_code);
                return r4_unicodeGlyphs[r99_currentGlyph['unicode'][r99_currentGlyph['unicode']['length'] - 1]] = r99_currentGlyph;
            };
            r99_xn$startfrom$1aao = _r99_t0['start-from']['bind'](_r99_t0);
            r99_xn$lineto$5sIl = _r99_t0['line-to']['bind'](_r99_t0);
            r99_xn$curveto$1aao = _r99_t0['curve-to']['bind'](_r99_t0);
            r99_xn$cubicto$1aao = _r99_t0['cubic-to']['bind'](_r99_t0);
            r99_xn$putshapes$9Jrj = _r99_t0['put-shapes']['bind'](_r99_t0);
            r99_xn$reverselast$3qIs = _r99_t0['reverse-last']['bind'](_r99_t0);
            r99_include = _r99_t0['include']['bind'](_r99_t0);
            r99_xn$createstroke$7Hrq = _r99_t0['create-stroke']['bind'](_r99_t0);
            r99_xn$setanchor$9Jrj = _r99_t0['set-anchor']['bind'](_r99_t0);
            _r99_t0['gizmo'] = r4_globalTransform;
            _r99_t0['set-width'](r4_WIDTH);
            r99_xn$setwidth$9Jrj(r4_WIDTH);
            r99_xn$assignunicode$7Hrq('R');
            r99_include(r4_glyphs['P'], true);
            r99_TURN = r4_XH * 0.1;
            r99_right = r4_RIGHTSB - r4_O;
            r99_include(r99_xn$createstroke$7Hrq()['start-from'](r99_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r99_right - r4_HALFSTROKE, r99_TURN + 0.2 * (r4_XH - r99_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t76() {
            var r102_currentGlyph, r102_xn$setwidth$9Jrj, r102_xn$assignunicode$7Hrq, r102_xn$startfrom$1aao, r102_xn$lineto$5sIl, r102_xn$curveto$1aao, r102_xn$cubicto$1aao, r102_xn$putshapes$9Jrj, r102_xn$reverselast$3qIs, r102_include, r102_xn$createstroke$7Hrq, r102_xn$setanchor$9Jrj, _r102_t0, _r102_t1, _r102_t2;
            _r102_t0 = this;
            r102_currentGlyph = _r102_t0;
            r102_xn$setwidth$9Jrj = _r102_t0['set-width']['bind'](_r102_t0);
            r102_xn$assignunicode$7Hrq = function _r102_t2(r103_code) {
                var r103_code, _r103_t0, _r103_t1;
                r102_currentGlyph['assign-unicode'](r103_code);
                return r4_unicodeGlyphs[r102_currentGlyph['unicode'][r102_currentGlyph['unicode']['length'] - 1]] = r102_currentGlyph;
            };
            r102_xn$startfrom$1aao = _r102_t0['start-from']['bind'](_r102_t0);
            r102_xn$lineto$5sIl = _r102_t0['line-to']['bind'](_r102_t0);
            r102_xn$curveto$1aao = _r102_t0['curve-to']['bind'](_r102_t0);
            r102_xn$cubicto$1aao = _r102_t0['cubic-to']['bind'](_r102_t0);
            r102_xn$putshapes$9Jrj = _r102_t0['put-shapes']['bind'](_r102_t0);
            r102_xn$reverselast$3qIs = _r102_t0['reverse-last']['bind'](_r102_t0);
            r102_include = _r102_t0['include']['bind'](_r102_t0);
            r102_xn$createstroke$7Hrq = _r102_t0['create-stroke']['bind'](_r102_t0);
            r102_xn$setanchor$9Jrj = _r102_t0['set-anchor']['bind'](_r102_t0);
            _r102_t0['gizmo'] = r4_globalTransform;
            _r102_t0['set-width'](r4_WIDTH);
            r102_xn$setwidth$9Jrj(r4_WIDTH);
            r102_xn$assignunicode$7Hrq('C');
            r102_include(r4_capitalMarks);
            r102_include(r102_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t77() {
            var r105_currentGlyph, r105_xn$setwidth$9Jrj, r105_xn$assignunicode$7Hrq, r105_xn$startfrom$1aao, r105_xn$lineto$5sIl, r105_xn$curveto$1aao, r105_xn$cubicto$1aao, r105_xn$putshapes$9Jrj, r105_xn$reverselast$3qIs, r105_include, r105_xn$createstroke$7Hrq, r105_xn$setanchor$9Jrj, _r105_t0, _r105_t1, _r105_t2;
            _r105_t0 = this;
            r105_currentGlyph = _r105_t0;
            r105_xn$setwidth$9Jrj = _r105_t0['set-width']['bind'](_r105_t0);
            r105_xn$assignunicode$7Hrq = function _r105_t2(r106_code) {
                var r106_code, _r106_t0, _r106_t1;
                r105_currentGlyph['assign-unicode'](r106_code);
                return r4_unicodeGlyphs[r105_currentGlyph['unicode'][r105_currentGlyph['unicode']['length'] - 1]] = r105_currentGlyph;
            };
            r105_xn$startfrom$1aao = _r105_t0['start-from']['bind'](_r105_t0);
            r105_xn$lineto$5sIl = _r105_t0['line-to']['bind'](_r105_t0);
            r105_xn$curveto$1aao = _r105_t0['curve-to']['bind'](_r105_t0);
            r105_xn$cubicto$1aao = _r105_t0['cubic-to']['bind'](_r105_t0);
            r105_xn$putshapes$9Jrj = _r105_t0['put-shapes']['bind'](_r105_t0);
            r105_xn$reverselast$3qIs = _r105_t0['reverse-last']['bind'](_r105_t0);
            r105_include = _r105_t0['include']['bind'](_r105_t0);
            r105_xn$createstroke$7Hrq = _r105_t0['create-stroke']['bind'](_r105_t0);
            r105_xn$setanchor$9Jrj = _r105_t0['set-anchor']['bind'](_r105_t0);
            _r105_t0['gizmo'] = r4_globalTransform;
            _r105_t0['set-width'](r4_WIDTH);
            r105_xn$setwidth$9Jrj(r4_WIDTH);
            r105_xn$assignunicode$7Hrq('G');
            r105_include(r4_capitalMarks);
            r105_include(r105_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r105_include(r105_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t78() {
            var r108_currentGlyph, r108_xn$setwidth$9Jrj, r108_xn$assignunicode$7Hrq, r108_xn$startfrom$1aao, r108_xn$lineto$5sIl, r108_xn$curveto$1aao, r108_xn$cubicto$1aao, r108_xn$putshapes$9Jrj, r108_xn$reverselast$3qIs, r108_include, r108_xn$createstroke$7Hrq, r108_xn$setanchor$9Jrj, _r108_t0, _r108_t1, _r108_t2;
            _r108_t0 = this;
            r108_currentGlyph = _r108_t0;
            r108_xn$setwidth$9Jrj = _r108_t0['set-width']['bind'](_r108_t0);
            r108_xn$assignunicode$7Hrq = function _r108_t2(r109_code) {
                var r109_code, _r109_t0, _r109_t1;
                r108_currentGlyph['assign-unicode'](r109_code);
                return r4_unicodeGlyphs[r108_currentGlyph['unicode'][r108_currentGlyph['unicode']['length'] - 1]] = r108_currentGlyph;
            };
            r108_xn$startfrom$1aao = _r108_t0['start-from']['bind'](_r108_t0);
            r108_xn$lineto$5sIl = _r108_t0['line-to']['bind'](_r108_t0);
            r108_xn$curveto$1aao = _r108_t0['curve-to']['bind'](_r108_t0);
            r108_xn$cubicto$1aao = _r108_t0['cubic-to']['bind'](_r108_t0);
            r108_xn$putshapes$9Jrj = _r108_t0['put-shapes']['bind'](_r108_t0);
            r108_xn$reverselast$3qIs = _r108_t0['reverse-last']['bind'](_r108_t0);
            r108_include = _r108_t0['include']['bind'](_r108_t0);
            r108_xn$createstroke$7Hrq = _r108_t0['create-stroke']['bind'](_r108_t0);
            r108_xn$setanchor$9Jrj = _r108_t0['set-anchor']['bind'](_r108_t0);
            _r108_t0['gizmo'] = r4_globalTransform;
            _r108_t0['set-width'](r4_WIDTH);
            r108_xn$setwidth$9Jrj(r4_WIDTH);
            r108_xn$assignunicode$7Hrq('O');
            r108_include(r4_capitalMarks);
            r108_include(r108_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t79() {
            var r111_currentGlyph, r111_xn$setwidth$9Jrj, r111_xn$assignunicode$7Hrq, r111_xn$startfrom$1aao, r111_xn$lineto$5sIl, r111_xn$curveto$1aao, r111_xn$cubicto$1aao, r111_xn$putshapes$9Jrj, r111_xn$reverselast$3qIs, r111_include, r111_xn$createstroke$7Hrq, r111_xn$setanchor$9Jrj, _r111_t0, _r111_t1, _r111_t2;
            _r111_t0 = this;
            r111_currentGlyph = _r111_t0;
            r111_xn$setwidth$9Jrj = _r111_t0['set-width']['bind'](_r111_t0);
            r111_xn$assignunicode$7Hrq = function _r111_t2(r112_code) {
                var r112_code, _r112_t0, _r112_t1;
                r111_currentGlyph['assign-unicode'](r112_code);
                return r4_unicodeGlyphs[r111_currentGlyph['unicode'][r111_currentGlyph['unicode']['length'] - 1]] = r111_currentGlyph;
            };
            r111_xn$startfrom$1aao = _r111_t0['start-from']['bind'](_r111_t0);
            r111_xn$lineto$5sIl = _r111_t0['line-to']['bind'](_r111_t0);
            r111_xn$curveto$1aao = _r111_t0['curve-to']['bind'](_r111_t0);
            r111_xn$cubicto$1aao = _r111_t0['cubic-to']['bind'](_r111_t0);
            r111_xn$putshapes$9Jrj = _r111_t0['put-shapes']['bind'](_r111_t0);
            r111_xn$reverselast$3qIs = _r111_t0['reverse-last']['bind'](_r111_t0);
            r111_include = _r111_t0['include']['bind'](_r111_t0);
            r111_xn$createstroke$7Hrq = _r111_t0['create-stroke']['bind'](_r111_t0);
            r111_xn$setanchor$9Jrj = _r111_t0['set-anchor']['bind'](_r111_t0);
            _r111_t0['gizmo'] = r4_globalTransform;
            _r111_t0['set-width'](r4_WIDTH);
            r111_xn$setwidth$9Jrj(r4_WIDTH);
            r111_xn$assignunicode$7Hrq('Q');
            r111_include(r4_glyphs['O'], true);
            r111_xn$startfrom$1aao(r4_MIDDLE, 0);
            r111_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r111_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r111_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r111_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r111_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t80() {
            var r114_currentGlyph, r114_xn$setwidth$9Jrj, r114_xn$assignunicode$7Hrq, r114_xn$startfrom$1aao, r114_xn$lineto$5sIl, r114_xn$curveto$1aao, r114_xn$cubicto$1aao, r114_xn$putshapes$9Jrj, r114_xn$reverselast$3qIs, r114_include, r114_xn$createstroke$7Hrq, r114_xn$setanchor$9Jrj, _r114_t0, _r114_t1, _r114_t2;
            _r114_t0 = this;
            r114_currentGlyph = _r114_t0;
            r114_xn$setwidth$9Jrj = _r114_t0['set-width']['bind'](_r114_t0);
            r114_xn$assignunicode$7Hrq = function _r114_t2(r115_code) {
                var r115_code, _r115_t0, _r115_t1;
                r114_currentGlyph['assign-unicode'](r115_code);
                return r4_unicodeGlyphs[r114_currentGlyph['unicode'][r114_currentGlyph['unicode']['length'] - 1]] = r114_currentGlyph;
            };
            r114_xn$startfrom$1aao = _r114_t0['start-from']['bind'](_r114_t0);
            r114_xn$lineto$5sIl = _r114_t0['line-to']['bind'](_r114_t0);
            r114_xn$curveto$1aao = _r114_t0['curve-to']['bind'](_r114_t0);
            r114_xn$cubicto$1aao = _r114_t0['cubic-to']['bind'](_r114_t0);
            r114_xn$putshapes$9Jrj = _r114_t0['put-shapes']['bind'](_r114_t0);
            r114_xn$reverselast$3qIs = _r114_t0['reverse-last']['bind'](_r114_t0);
            r114_include = _r114_t0['include']['bind'](_r114_t0);
            r114_xn$createstroke$7Hrq = _r114_t0['create-stroke']['bind'](_r114_t0);
            r114_xn$setanchor$9Jrj = _r114_t0['set-anchor']['bind'](_r114_t0);
            _r114_t0['gizmo'] = r4_globalTransform;
            _r114_t0['set-width'](r4_WIDTH);
            r114_xn$setwidth$9Jrj(r4_WIDTH);
            r114_xn$assignunicode$7Hrq('U');
            r114_include(r4_capitalMarks);
            r114_include(r114_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('F', function _r4_t81() {
            var r117_currentGlyph, r117_xn$setwidth$9Jrj, r117_xn$assignunicode$7Hrq, r117_xn$startfrom$1aao, r117_xn$lineto$5sIl, r117_xn$curveto$1aao, r117_xn$cubicto$1aao, r117_xn$putshapes$9Jrj, r117_xn$reverselast$3qIs, r117_include, r117_xn$createstroke$7Hrq, r117_xn$setanchor$9Jrj, _r117_t0, _r117_t1, _r117_t2;
            _r117_t0 = this;
            r117_currentGlyph = _r117_t0;
            r117_xn$setwidth$9Jrj = _r117_t0['set-width']['bind'](_r117_t0);
            r117_xn$assignunicode$7Hrq = function _r117_t2(r118_code) {
                var r118_code, _r118_t0, _r118_t1;
                r117_currentGlyph['assign-unicode'](r118_code);
                return r4_unicodeGlyphs[r117_currentGlyph['unicode'][r117_currentGlyph['unicode']['length'] - 1]] = r117_currentGlyph;
            };
            r117_xn$startfrom$1aao = _r117_t0['start-from']['bind'](_r117_t0);
            r117_xn$lineto$5sIl = _r117_t0['line-to']['bind'](_r117_t0);
            r117_xn$curveto$1aao = _r117_t0['curve-to']['bind'](_r117_t0);
            r117_xn$cubicto$1aao = _r117_t0['cubic-to']['bind'](_r117_t0);
            r117_xn$putshapes$9Jrj = _r117_t0['put-shapes']['bind'](_r117_t0);
            r117_xn$reverselast$3qIs = _r117_t0['reverse-last']['bind'](_r117_t0);
            r117_include = _r117_t0['include']['bind'](_r117_t0);
            r117_xn$createstroke$7Hrq = _r117_t0['create-stroke']['bind'](_r117_t0);
            r117_xn$setanchor$9Jrj = _r117_t0['set-anchor']['bind'](_r117_t0);
            _r117_t0['gizmo'] = r4_globalTransform;
            _r117_t0['set-width'](r4_WIDTH);
            r117_xn$setwidth$9Jrj(r4_WIDTH);
            r117_xn$assignunicode$7Hrq('F');
            r117_include(r4_capitalMarks);
            r117_include(r117_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
            r117_include(r117_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r117_include(r117_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t82() {
            var r120_currentGlyph, r120_xn$setwidth$9Jrj, r120_xn$assignunicode$7Hrq, r120_xn$startfrom$1aao, r120_xn$lineto$5sIl, r120_xn$curveto$1aao, r120_xn$cubicto$1aao, r120_xn$putshapes$9Jrj, r120_xn$reverselast$3qIs, r120_include, r120_xn$createstroke$7Hrq, r120_xn$setanchor$9Jrj, _r120_t0, _r120_t1, _r120_t2;
            _r120_t0 = this;
            r120_currentGlyph = _r120_t0;
            r120_xn$setwidth$9Jrj = _r120_t0['set-width']['bind'](_r120_t0);
            r120_xn$assignunicode$7Hrq = function _r120_t2(r121_code) {
                var r121_code, _r121_t0, _r121_t1;
                r120_currentGlyph['assign-unicode'](r121_code);
                return r4_unicodeGlyphs[r120_currentGlyph['unicode'][r120_currentGlyph['unicode']['length'] - 1]] = r120_currentGlyph;
            };
            r120_xn$startfrom$1aao = _r120_t0['start-from']['bind'](_r120_t0);
            r120_xn$lineto$5sIl = _r120_t0['line-to']['bind'](_r120_t0);
            r120_xn$curveto$1aao = _r120_t0['curve-to']['bind'](_r120_t0);
            r120_xn$cubicto$1aao = _r120_t0['cubic-to']['bind'](_r120_t0);
            r120_xn$putshapes$9Jrj = _r120_t0['put-shapes']['bind'](_r120_t0);
            r120_xn$reverselast$3qIs = _r120_t0['reverse-last']['bind'](_r120_t0);
            r120_include = _r120_t0['include']['bind'](_r120_t0);
            r120_xn$createstroke$7Hrq = _r120_t0['create-stroke']['bind'](_r120_t0);
            r120_xn$setanchor$9Jrj = _r120_t0['set-anchor']['bind'](_r120_t0);
            _r120_t0['gizmo'] = r4_globalTransform;
            _r120_t0['set-width'](r4_WIDTH);
            r120_xn$setwidth$9Jrj(r4_WIDTH);
            r120_xn$assignunicode$7Hrq('E');
            r120_include(r4_glyphs['F'], true);
            r120_include(r120_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t83() {
            var r123_currentGlyph, r123_xn$setwidth$9Jrj, r123_xn$assignunicode$7Hrq, r123_xn$startfrom$1aao, r123_xn$lineto$5sIl, r123_xn$curveto$1aao, r123_xn$cubicto$1aao, r123_xn$putshapes$9Jrj, r123_xn$reverselast$3qIs, r123_include, r123_xn$createstroke$7Hrq, r123_xn$setanchor$9Jrj, _r123_t0, _r123_t1, _r123_t2;
            _r123_t0 = this;
            r123_currentGlyph = _r123_t0;
            r123_xn$setwidth$9Jrj = _r123_t0['set-width']['bind'](_r123_t0);
            r123_xn$assignunicode$7Hrq = function _r123_t2(r124_code) {
                var r124_code, _r124_t0, _r124_t1;
                r123_currentGlyph['assign-unicode'](r124_code);
                return r4_unicodeGlyphs[r123_currentGlyph['unicode'][r123_currentGlyph['unicode']['length'] - 1]] = r123_currentGlyph;
            };
            r123_xn$startfrom$1aao = _r123_t0['start-from']['bind'](_r123_t0);
            r123_xn$lineto$5sIl = _r123_t0['line-to']['bind'](_r123_t0);
            r123_xn$curveto$1aao = _r123_t0['curve-to']['bind'](_r123_t0);
            r123_xn$cubicto$1aao = _r123_t0['cubic-to']['bind'](_r123_t0);
            r123_xn$putshapes$9Jrj = _r123_t0['put-shapes']['bind'](_r123_t0);
            r123_xn$reverselast$3qIs = _r123_t0['reverse-last']['bind'](_r123_t0);
            r123_include = _r123_t0['include']['bind'](_r123_t0);
            r123_xn$createstroke$7Hrq = _r123_t0['create-stroke']['bind'](_r123_t0);
            r123_xn$setanchor$9Jrj = _r123_t0['set-anchor']['bind'](_r123_t0);
            _r123_t0['gizmo'] = r4_globalTransform;
            _r123_t0['set-width'](r4_WIDTH);
            r123_xn$setwidth$9Jrj(r4_WIDTH);
            r123_xn$assignunicode$7Hrq('H');
            r123_include(r4_capitalMarks);
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t84() {
            var r126_currentGlyph, r126_xn$setwidth$9Jrj, r126_xn$assignunicode$7Hrq, r126_xn$startfrom$1aao, r126_xn$lineto$5sIl, r126_xn$curveto$1aao, r126_xn$cubicto$1aao, r126_xn$putshapes$9Jrj, r126_xn$reverselast$3qIs, r126_include, r126_xn$createstroke$7Hrq, r126_xn$setanchor$9Jrj, _r126_t0, _r126_t1, _r126_t2;
            _r126_t0 = this;
            r126_currentGlyph = _r126_t0;
            r126_xn$setwidth$9Jrj = _r126_t0['set-width']['bind'](_r126_t0);
            r126_xn$assignunicode$7Hrq = function _r126_t2(r127_code) {
                var r127_code, _r127_t0, _r127_t1;
                r126_currentGlyph['assign-unicode'](r127_code);
                return r4_unicodeGlyphs[r126_currentGlyph['unicode'][r126_currentGlyph['unicode']['length'] - 1]] = r126_currentGlyph;
            };
            r126_xn$startfrom$1aao = _r126_t0['start-from']['bind'](_r126_t0);
            r126_xn$lineto$5sIl = _r126_t0['line-to']['bind'](_r126_t0);
            r126_xn$curveto$1aao = _r126_t0['curve-to']['bind'](_r126_t0);
            r126_xn$cubicto$1aao = _r126_t0['cubic-to']['bind'](_r126_t0);
            r126_xn$putshapes$9Jrj = _r126_t0['put-shapes']['bind'](_r126_t0);
            r126_xn$reverselast$3qIs = _r126_t0['reverse-last']['bind'](_r126_t0);
            r126_include = _r126_t0['include']['bind'](_r126_t0);
            r126_xn$createstroke$7Hrq = _r126_t0['create-stroke']['bind'](_r126_t0);
            r126_xn$setanchor$9Jrj = _r126_t0['set-anchor']['bind'](_r126_t0);
            _r126_t0['gizmo'] = r4_globalTransform;
            _r126_t0['set-width'](r4_WIDTH);
            r126_xn$setwidth$9Jrj(r4_WIDTH);
            r126_xn$assignunicode$7Hrq('L');
            r126_include(r4_capitalMarks);
            r126_include(r126_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r126_include(r126_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessI.straight', function _r4_t85() {
            var r129_currentGlyph, r129_xn$setwidth$9Jrj, r129_xn$assignunicode$7Hrq, r129_xn$startfrom$1aao, r129_xn$lineto$5sIl, r129_xn$curveto$1aao, r129_xn$cubicto$1aao, r129_xn$putshapes$9Jrj, r129_xn$reverselast$3qIs, r129_include, r129_xn$createstroke$7Hrq, r129_xn$setanchor$9Jrj, _r129_t0, _r129_t1, _r129_t2;
            _r129_t0 = this;
            r129_currentGlyph = _r129_t0;
            r129_xn$setwidth$9Jrj = _r129_t0['set-width']['bind'](_r129_t0);
            r129_xn$assignunicode$7Hrq = function _r129_t2(r130_code) {
                var r130_code, _r130_t0, _r130_t1;
                r129_currentGlyph['assign-unicode'](r130_code);
                return r4_unicodeGlyphs[r129_currentGlyph['unicode'][r129_currentGlyph['unicode']['length'] - 1]] = r129_currentGlyph;
            };
            r129_xn$startfrom$1aao = _r129_t0['start-from']['bind'](_r129_t0);
            r129_xn$lineto$5sIl = _r129_t0['line-to']['bind'](_r129_t0);
            r129_xn$curveto$1aao = _r129_t0['curve-to']['bind'](_r129_t0);
            r129_xn$cubicto$1aao = _r129_t0['cubic-to']['bind'](_r129_t0);
            r129_xn$putshapes$9Jrj = _r129_t0['put-shapes']['bind'](_r129_t0);
            r129_xn$reverselast$3qIs = _r129_t0['reverse-last']['bind'](_r129_t0);
            r129_include = _r129_t0['include']['bind'](_r129_t0);
            r129_xn$createstroke$7Hrq = _r129_t0['create-stroke']['bind'](_r129_t0);
            r129_xn$setanchor$9Jrj = _r129_t0['set-anchor']['bind'](_r129_t0);
            _r129_t0['gizmo'] = r4_globalTransform;
            _r129_t0['set-width'](r4_WIDTH);
            r129_include(r129_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessI.symmetric', function _r4_t86() {
            var r132_currentGlyph, r132_xn$setwidth$9Jrj, r132_xn$assignunicode$7Hrq, r132_xn$startfrom$1aao, r132_xn$lineto$5sIl, r132_xn$curveto$1aao, r132_xn$cubicto$1aao, r132_xn$putshapes$9Jrj, r132_xn$reverselast$3qIs, r132_include, r132_xn$createstroke$7Hrq, r132_xn$setanchor$9Jrj, _r132_t0, _r132_t1, _r132_t2;
            _r132_t0 = this;
            r132_currentGlyph = _r132_t0;
            r132_xn$setwidth$9Jrj = _r132_t0['set-width']['bind'](_r132_t0);
            r132_xn$assignunicode$7Hrq = function _r132_t2(r133_code) {
                var r133_code, _r133_t0, _r133_t1;
                r132_currentGlyph['assign-unicode'](r133_code);
                return r4_unicodeGlyphs[r132_currentGlyph['unicode'][r132_currentGlyph['unicode']['length'] - 1]] = r132_currentGlyph;
            };
            r132_xn$startfrom$1aao = _r132_t0['start-from']['bind'](_r132_t0);
            r132_xn$lineto$5sIl = _r132_t0['line-to']['bind'](_r132_t0);
            r132_xn$curveto$1aao = _r132_t0['curve-to']['bind'](_r132_t0);
            r132_xn$cubicto$1aao = _r132_t0['cubic-to']['bind'](_r132_t0);
            r132_xn$putshapes$9Jrj = _r132_t0['put-shapes']['bind'](_r132_t0);
            r132_xn$reverselast$3qIs = _r132_t0['reverse-last']['bind'](_r132_t0);
            r132_include = _r132_t0['include']['bind'](_r132_t0);
            r132_xn$createstroke$7Hrq = _r132_t0['create-stroke']['bind'](_r132_t0);
            r132_xn$setanchor$9Jrj = _r132_t0['set-anchor']['bind'](_r132_t0);
            _r132_t0['gizmo'] = r4_globalTransform;
            _r132_t0['set-width'](r4_WIDTH);
            r132_include(r4_glyphs['dotlessI.straight']);
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I', function _r4_t87() {
            var r135_currentGlyph, r135_xn$setwidth$9Jrj, r135_xn$assignunicode$7Hrq, r135_xn$startfrom$1aao, r135_xn$lineto$5sIl, r135_xn$curveto$1aao, r135_xn$cubicto$1aao, r135_xn$putshapes$9Jrj, r135_xn$reverselast$3qIs, r135_include, r135_xn$createstroke$7Hrq, r135_xn$setanchor$9Jrj, _r135_t0, _r135_t1, _r135_t2;
            _r135_t0 = this;
            r135_currentGlyph = _r135_t0;
            r135_xn$setwidth$9Jrj = _r135_t0['set-width']['bind'](_r135_t0);
            r135_xn$assignunicode$7Hrq = function _r135_t2(r136_code) {
                var r136_code, _r136_t0, _r136_t1;
                r135_currentGlyph['assign-unicode'](r136_code);
                return r4_unicodeGlyphs[r135_currentGlyph['unicode'][r135_currentGlyph['unicode']['length'] - 1]] = r135_currentGlyph;
            };
            r135_xn$startfrom$1aao = _r135_t0['start-from']['bind'](_r135_t0);
            r135_xn$lineto$5sIl = _r135_t0['line-to']['bind'](_r135_t0);
            r135_xn$curveto$1aao = _r135_t0['curve-to']['bind'](_r135_t0);
            r135_xn$cubicto$1aao = _r135_t0['cubic-to']['bind'](_r135_t0);
            r135_xn$putshapes$9Jrj = _r135_t0['put-shapes']['bind'](_r135_t0);
            r135_xn$reverselast$3qIs = _r135_t0['reverse-last']['bind'](_r135_t0);
            r135_include = _r135_t0['include']['bind'](_r135_t0);
            r135_xn$createstroke$7Hrq = _r135_t0['create-stroke']['bind'](_r135_t0);
            r135_xn$setanchor$9Jrj = _r135_t0['set-anchor']['bind'](_r135_t0);
            _r135_t0['gizmo'] = r4_globalTransform;
            _r135_t0['set-width'](r4_WIDTH);
            r135_xn$setwidth$9Jrj(r4_WIDTH);
            r135_xn$assignunicode$7Hrq('I');
            r135_include(r4_capitalMarks);
            r135_include(r4_glyphs['dotlessI.symmetric']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('T', function _r4_t88() {
            var r138_currentGlyph, r138_xn$setwidth$9Jrj, r138_xn$assignunicode$7Hrq, r138_xn$startfrom$1aao, r138_xn$lineto$5sIl, r138_xn$curveto$1aao, r138_xn$cubicto$1aao, r138_xn$putshapes$9Jrj, r138_xn$reverselast$3qIs, r138_include, r138_xn$createstroke$7Hrq, r138_xn$setanchor$9Jrj, _r138_t0, _r138_t1, _r138_t2;
            _r138_t0 = this;
            r138_currentGlyph = _r138_t0;
            r138_xn$setwidth$9Jrj = _r138_t0['set-width']['bind'](_r138_t0);
            r138_xn$assignunicode$7Hrq = function _r138_t2(r139_code) {
                var r139_code, _r139_t0, _r139_t1;
                r138_currentGlyph['assign-unicode'](r139_code);
                return r4_unicodeGlyphs[r138_currentGlyph['unicode'][r138_currentGlyph['unicode']['length'] - 1]] = r138_currentGlyph;
            };
            r138_xn$startfrom$1aao = _r138_t0['start-from']['bind'](_r138_t0);
            r138_xn$lineto$5sIl = _r138_t0['line-to']['bind'](_r138_t0);
            r138_xn$curveto$1aao = _r138_t0['curve-to']['bind'](_r138_t0);
            r138_xn$cubicto$1aao = _r138_t0['cubic-to']['bind'](_r138_t0);
            r138_xn$putshapes$9Jrj = _r138_t0['put-shapes']['bind'](_r138_t0);
            r138_xn$reverselast$3qIs = _r138_t0['reverse-last']['bind'](_r138_t0);
            r138_include = _r138_t0['include']['bind'](_r138_t0);
            r138_xn$createstroke$7Hrq = _r138_t0['create-stroke']['bind'](_r138_t0);
            r138_xn$setanchor$9Jrj = _r138_t0['set-anchor']['bind'](_r138_t0);
            _r138_t0['gizmo'] = r4_globalTransform;
            _r138_t0['set-width'](r4_WIDTH);
            r138_xn$setwidth$9Jrj(r4_WIDTH);
            r138_xn$assignunicode$7Hrq('T');
            r138_include(r4_capitalMarks);
            r138_include(r138_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r138_include(r138_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t89() {
            var r141_currentGlyph, r141_xn$setwidth$9Jrj, r141_xn$assignunicode$7Hrq, r141_xn$startfrom$1aao, r141_xn$lineto$5sIl, r141_xn$curveto$1aao, r141_xn$cubicto$1aao, r141_xn$putshapes$9Jrj, r141_xn$reverselast$3qIs, r141_include, r141_xn$createstroke$7Hrq, r141_xn$setanchor$9Jrj, r141_cor, _r141_t0, _r141_t1, _r141_t2;
            _r141_t0 = this;
            r141_currentGlyph = _r141_t0;
            r141_xn$setwidth$9Jrj = _r141_t0['set-width']['bind'](_r141_t0);
            r141_xn$assignunicode$7Hrq = function _r141_t2(r142_code) {
                var r142_code, _r142_t0, _r142_t1;
                r141_currentGlyph['assign-unicode'](r142_code);
                return r4_unicodeGlyphs[r141_currentGlyph['unicode'][r141_currentGlyph['unicode']['length'] - 1]] = r141_currentGlyph;
            };
            r141_xn$startfrom$1aao = _r141_t0['start-from']['bind'](_r141_t0);
            r141_xn$lineto$5sIl = _r141_t0['line-to']['bind'](_r141_t0);
            r141_xn$curveto$1aao = _r141_t0['curve-to']['bind'](_r141_t0);
            r141_xn$cubicto$1aao = _r141_t0['cubic-to']['bind'](_r141_t0);
            r141_xn$putshapes$9Jrj = _r141_t0['put-shapes']['bind'](_r141_t0);
            r141_xn$reverselast$3qIs = _r141_t0['reverse-last']['bind'](_r141_t0);
            r141_include = _r141_t0['include']['bind'](_r141_t0);
            r141_xn$createstroke$7Hrq = _r141_t0['create-stroke']['bind'](_r141_t0);
            r141_xn$setanchor$9Jrj = _r141_t0['set-anchor']['bind'](_r141_t0);
            _r141_t0['gizmo'] = r4_globalTransform;
            _r141_t0['set-width'](r4_WIDTH);
            r141_xn$setwidth$9Jrj(r4_WIDTH);
            r141_xn$assignunicode$7Hrq('Z');
            r141_include(r4_capitalMarks);
            r141_cor = 1.15;
            r141_include(r141_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r141_include(r141_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r141_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r141_xn$lineto$5sIl(r4_SB + r4_STROKE * r141_cor, r4_STROKE);
            r141_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r141_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r141_cor, r4_CAP - r4_STROKE);
            r141_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t90() {
            var r144_currentGlyph, r144_xn$setwidth$9Jrj, r144_xn$assignunicode$7Hrq, r144_xn$startfrom$1aao, r144_xn$lineto$5sIl, r144_xn$curveto$1aao, r144_xn$cubicto$1aao, r144_xn$putshapes$9Jrj, r144_xn$reverselast$3qIs, r144_include, r144_xn$createstroke$7Hrq, r144_xn$setanchor$9Jrj, r144_slope, r144_expand, r144_coexpand, r144_kappa, r144_smooth, r144_hookx, _r144_t0, _r144_t1, _r144_t2;
            _r144_t0 = this;
            r144_currentGlyph = _r144_t0;
            r144_xn$setwidth$9Jrj = _r144_t0['set-width']['bind'](_r144_t0);
            r144_xn$assignunicode$7Hrq = function _r144_t2(r145_code) {
                var r145_code, _r145_t0, _r145_t1;
                r144_currentGlyph['assign-unicode'](r145_code);
                return r4_unicodeGlyphs[r144_currentGlyph['unicode'][r144_currentGlyph['unicode']['length'] - 1]] = r144_currentGlyph;
            };
            r144_xn$startfrom$1aao = _r144_t0['start-from']['bind'](_r144_t0);
            r144_xn$lineto$5sIl = _r144_t0['line-to']['bind'](_r144_t0);
            r144_xn$curveto$1aao = _r144_t0['curve-to']['bind'](_r144_t0);
            r144_xn$cubicto$1aao = _r144_t0['cubic-to']['bind'](_r144_t0);
            r144_xn$putshapes$9Jrj = _r144_t0['put-shapes']['bind'](_r144_t0);
            r144_xn$reverselast$3qIs = _r144_t0['reverse-last']['bind'](_r144_t0);
            r144_include = _r144_t0['include']['bind'](_r144_t0);
            r144_xn$createstroke$7Hrq = _r144_t0['create-stroke']['bind'](_r144_t0);
            r144_xn$setanchor$9Jrj = _r144_t0['set-anchor']['bind'](_r144_t0);
            _r144_t0['gizmo'] = r4_globalTransform;
            _r144_t0['set-width'](r4_WIDTH);
            r144_xn$setwidth$9Jrj(r4_WIDTH);
            r144_include(r4_capitalMarks);
            r144_slope = r4_STROKE * 0.00092;
            r144_expand = 0.35;
            r144_coexpand = (1 - r144_expand) / 2;
            r144_kappa = r4_KAPPA_HOOK;
            r144_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r144_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r144_smooth)['arc-vh-to'](r0_mix(r144_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r144_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r144_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t91() {
            var r147_currentGlyph, r147_xn$setwidth$9Jrj, r147_xn$assignunicode$7Hrq, r147_xn$startfrom$1aao, r147_xn$lineto$5sIl, r147_xn$curveto$1aao, r147_xn$cubicto$1aao, r147_xn$putshapes$9Jrj, r147_xn$reverselast$3qIs, r147_include, r147_xn$createstroke$7Hrq, r147_xn$setanchor$9Jrj, _r147_t0, _r147_t1, _r147_t2;
            _r147_t0 = this;
            r147_currentGlyph = _r147_t0;
            r147_xn$setwidth$9Jrj = _r147_t0['set-width']['bind'](_r147_t0);
            r147_xn$assignunicode$7Hrq = function _r147_t2(r148_code) {
                var r148_code, _r148_t0, _r148_t1;
                r147_currentGlyph['assign-unicode'](r148_code);
                return r4_unicodeGlyphs[r147_currentGlyph['unicode'][r147_currentGlyph['unicode']['length'] - 1]] = r147_currentGlyph;
            };
            r147_xn$startfrom$1aao = _r147_t0['start-from']['bind'](_r147_t0);
            r147_xn$lineto$5sIl = _r147_t0['line-to']['bind'](_r147_t0);
            r147_xn$curveto$1aao = _r147_t0['curve-to']['bind'](_r147_t0);
            r147_xn$cubicto$1aao = _r147_t0['cubic-to']['bind'](_r147_t0);
            r147_xn$putshapes$9Jrj = _r147_t0['put-shapes']['bind'](_r147_t0);
            r147_xn$reverselast$3qIs = _r147_t0['reverse-last']['bind'](_r147_t0);
            r147_include = _r147_t0['include']['bind'](_r147_t0);
            r147_xn$createstroke$7Hrq = _r147_t0['create-stroke']['bind'](_r147_t0);
            r147_xn$setanchor$9Jrj = _r147_t0['set-anchor']['bind'](_r147_t0);
            _r147_t0['gizmo'] = r4_globalTransform;
            _r147_t0['set-width'](r4_WIDTH);
            r147_xn$setwidth$9Jrj(r4_WIDTH);
            r147_include(r4_glyphs['J.straight'], r4_BASE);
            r147_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t92() {
            var r150_currentGlyph, r150_xn$setwidth$9Jrj, r150_xn$assignunicode$7Hrq, r150_xn$startfrom$1aao, r150_xn$lineto$5sIl, r150_xn$curveto$1aao, r150_xn$cubicto$1aao, r150_xn$putshapes$9Jrj, r150_xn$reverselast$3qIs, r150_include, r150_xn$createstroke$7Hrq, r150_xn$setanchor$9Jrj, r150_topstroke, r150_halftopstroke, _r150_t0, _r150_t1, _r150_t2;
            _r150_t0 = this;
            r150_currentGlyph = _r150_t0;
            r150_xn$setwidth$9Jrj = _r150_t0['set-width']['bind'](_r150_t0);
            r150_xn$assignunicode$7Hrq = function _r150_t2(r151_code) {
                var r151_code, _r151_t0, _r151_t1;
                r150_currentGlyph['assign-unicode'](r151_code);
                return r4_unicodeGlyphs[r150_currentGlyph['unicode'][r150_currentGlyph['unicode']['length'] - 1]] = r150_currentGlyph;
            };
            r150_xn$startfrom$1aao = _r150_t0['start-from']['bind'](_r150_t0);
            r150_xn$lineto$5sIl = _r150_t0['line-to']['bind'](_r150_t0);
            r150_xn$curveto$1aao = _r150_t0['curve-to']['bind'](_r150_t0);
            r150_xn$cubicto$1aao = _r150_t0['cubic-to']['bind'](_r150_t0);
            r150_xn$putshapes$9Jrj = _r150_t0['put-shapes']['bind'](_r150_t0);
            r150_xn$reverselast$3qIs = _r150_t0['reverse-last']['bind'](_r150_t0);
            r150_include = _r150_t0['include']['bind'](_r150_t0);
            r150_xn$createstroke$7Hrq = _r150_t0['create-stroke']['bind'](_r150_t0);
            r150_xn$setanchor$9Jrj = _r150_t0['set-anchor']['bind'](_r150_t0);
            _r150_t0['gizmo'] = r4_globalTransform;
            _r150_t0['set-width'](r4_WIDTH);
            r150_xn$setwidth$9Jrj(r4_WIDTH);
            r150_xn$assignunicode$7Hrq('N');
            r150_include(r4_capitalMarks);
            r150_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.24);
            r150_halftopstroke = r150_topstroke / 2;
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r150_topstroke));
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r150_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_SB + r150_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r150_topstroke, 0)['line-to'](r4_RIGHTSB - r150_topstroke - r150_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t93() {
            var r153_currentGlyph, r153_xn$setwidth$9Jrj, r153_xn$assignunicode$7Hrq, r153_xn$startfrom$1aao, r153_xn$lineto$5sIl, r153_xn$curveto$1aao, r153_xn$cubicto$1aao, r153_xn$putshapes$9Jrj, r153_xn$reverselast$3qIs, r153_include, r153_xn$createstroke$7Hrq, r153_xn$setanchor$9Jrj, r153_topstroke, r153_halftopstroke, _r153_t0, _r153_t1, _r153_t2;
            _r153_t0 = this;
            r153_currentGlyph = _r153_t0;
            r153_xn$setwidth$9Jrj = _r153_t0['set-width']['bind'](_r153_t0);
            r153_xn$assignunicode$7Hrq = function _r153_t2(r154_code) {
                var r154_code, _r154_t0, _r154_t1;
                r153_currentGlyph['assign-unicode'](r154_code);
                return r4_unicodeGlyphs[r153_currentGlyph['unicode'][r153_currentGlyph['unicode']['length'] - 1]] = r153_currentGlyph;
            };
            r153_xn$startfrom$1aao = _r153_t0['start-from']['bind'](_r153_t0);
            r153_xn$lineto$5sIl = _r153_t0['line-to']['bind'](_r153_t0);
            r153_xn$curveto$1aao = _r153_t0['curve-to']['bind'](_r153_t0);
            r153_xn$cubicto$1aao = _r153_t0['cubic-to']['bind'](_r153_t0);
            r153_xn$putshapes$9Jrj = _r153_t0['put-shapes']['bind'](_r153_t0);
            r153_xn$reverselast$3qIs = _r153_t0['reverse-last']['bind'](_r153_t0);
            r153_include = _r153_t0['include']['bind'](_r153_t0);
            r153_xn$createstroke$7Hrq = _r153_t0['create-stroke']['bind'](_r153_t0);
            r153_xn$setanchor$9Jrj = _r153_t0['set-anchor']['bind'](_r153_t0);
            _r153_t0['gizmo'] = r4_globalTransform;
            _r153_t0['set-width'](r4_WIDTH);
            r153_xn$setwidth$9Jrj(r4_WIDTH);
            r153_xn$assignunicode$7Hrq('M');
            r153_include(r4_capitalMarks);
            r153_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.175);
            r153_halftopstroke = r153_topstroke / 2;
            r153_include(r153_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r153_topstroke));
            r153_include(r153_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r153_topstroke, 0));
            r153_include(r153_xn$createstroke$7Hrq()['start-from'](r4_SB + r153_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r153_topstroke, 0)['line-to'](r4_MIDDLE - r153_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r153_include(r153_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r153_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r153_topstroke, 0)['line-to'](r4_RIGHTSB - r153_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t94() {
            var r156_currentGlyph, r156_xn$setwidth$9Jrj, r156_xn$assignunicode$7Hrq, r156_xn$startfrom$1aao, r156_xn$lineto$5sIl, r156_xn$curveto$1aao, r156_xn$cubicto$1aao, r156_xn$putshapes$9Jrj, r156_xn$reverselast$3qIs, r156_include, r156_xn$createstroke$7Hrq, r156_xn$setanchor$9Jrj, _r156_t0, _r156_t1, _r156_t2;
            _r156_t0 = this;
            r156_currentGlyph = _r156_t0;
            r156_xn$setwidth$9Jrj = _r156_t0['set-width']['bind'](_r156_t0);
            r156_xn$assignunicode$7Hrq = function _r156_t2(r157_code) {
                var r157_code, _r157_t0, _r157_t1;
                r156_currentGlyph['assign-unicode'](r157_code);
                return r4_unicodeGlyphs[r156_currentGlyph['unicode'][r156_currentGlyph['unicode']['length'] - 1]] = r156_currentGlyph;
            };
            r156_xn$startfrom$1aao = _r156_t0['start-from']['bind'](_r156_t0);
            r156_xn$lineto$5sIl = _r156_t0['line-to']['bind'](_r156_t0);
            r156_xn$curveto$1aao = _r156_t0['curve-to']['bind'](_r156_t0);
            r156_xn$cubicto$1aao = _r156_t0['cubic-to']['bind'](_r156_t0);
            r156_xn$putshapes$9Jrj = _r156_t0['put-shapes']['bind'](_r156_t0);
            r156_xn$reverselast$3qIs = _r156_t0['reverse-last']['bind'](_r156_t0);
            r156_include = _r156_t0['include']['bind'](_r156_t0);
            r156_xn$createstroke$7Hrq = _r156_t0['create-stroke']['bind'](_r156_t0);
            r156_xn$setanchor$9Jrj = _r156_t0['set-anchor']['bind'](_r156_t0);
            _r156_t0['gizmo'] = r4_globalTransform;
            _r156_t0['set-width'](r4_WIDTH);
            r156_xn$setwidth$9Jrj(r4_WIDTH);
            r156_xn$assignunicode$7Hrq('S');
            r156_include(r4_capitalMarks);
            r156_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r156_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r156_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('fbar', function _r4_t95() {
            var r159_currentGlyph, r159_xn$setwidth$9Jrj, r159_xn$assignunicode$7Hrq, r159_xn$startfrom$1aao, r159_xn$lineto$5sIl, r159_xn$curveto$1aao, r159_xn$cubicto$1aao, r159_xn$putshapes$9Jrj, r159_xn$reverselast$3qIs, r159_include, r159_xn$createstroke$7Hrq, r159_xn$setanchor$9Jrj, _r159_t0, _r159_t1, _r159_t2;
            _r159_t0 = this;
            r159_currentGlyph = _r159_t0;
            r159_xn$setwidth$9Jrj = _r159_t0['set-width']['bind'](_r159_t0);
            r159_xn$assignunicode$7Hrq = function _r159_t2(r160_code) {
                var r160_code, _r160_t0, _r160_t1;
                r159_currentGlyph['assign-unicode'](r160_code);
                return r4_unicodeGlyphs[r159_currentGlyph['unicode'][r159_currentGlyph['unicode']['length'] - 1]] = r159_currentGlyph;
            };
            r159_xn$startfrom$1aao = _r159_t0['start-from']['bind'](_r159_t0);
            r159_xn$lineto$5sIl = _r159_t0['line-to']['bind'](_r159_t0);
            r159_xn$curveto$1aao = _r159_t0['curve-to']['bind'](_r159_t0);
            r159_xn$cubicto$1aao = _r159_t0['cubic-to']['bind'](_r159_t0);
            r159_xn$putshapes$9Jrj = _r159_t0['put-shapes']['bind'](_r159_t0);
            r159_xn$reverselast$3qIs = _r159_t0['reverse-last']['bind'](_r159_t0);
            r159_include = _r159_t0['include']['bind'](_r159_t0);
            r159_xn$createstroke$7Hrq = _r159_t0['create-stroke']['bind'](_r159_t0);
            r159_xn$setanchor$9Jrj = _r159_t0['set-anchor']['bind'](_r159_t0);
            _r159_t0['gizmo'] = r4_globalTransform;
            _r159_t0['set-width'](r4_WIDTH);
            r159_include(r159_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t96() {
            var r162_currentGlyph, r162_xn$setwidth$9Jrj, r162_xn$assignunicode$7Hrq, r162_xn$startfrom$1aao, r162_xn$lineto$5sIl, r162_xn$curveto$1aao, r162_xn$cubicto$1aao, r162_xn$putshapes$9Jrj, r162_xn$reverselast$3qIs, r162_include, r162_xn$createstroke$7Hrq, r162_xn$setanchor$9Jrj, _r162_t0, _r162_t1, _r162_t2;
            _r162_t0 = this;
            r162_currentGlyph = _r162_t0;
            r162_xn$setwidth$9Jrj = _r162_t0['set-width']['bind'](_r162_t0);
            r162_xn$assignunicode$7Hrq = function _r162_t2(r163_code) {
                var r163_code, _r163_t0, _r163_t1;
                r162_currentGlyph['assign-unicode'](r163_code);
                return r4_unicodeGlyphs[r162_currentGlyph['unicode'][r162_currentGlyph['unicode']['length'] - 1]] = r162_currentGlyph;
            };
            r162_xn$startfrom$1aao = _r162_t0['start-from']['bind'](_r162_t0);
            r162_xn$lineto$5sIl = _r162_t0['line-to']['bind'](_r162_t0);
            r162_xn$curveto$1aao = _r162_t0['curve-to']['bind'](_r162_t0);
            r162_xn$cubicto$1aao = _r162_t0['cubic-to']['bind'](_r162_t0);
            r162_xn$putshapes$9Jrj = _r162_t0['put-shapes']['bind'](_r162_t0);
            r162_xn$reverselast$3qIs = _r162_t0['reverse-last']['bind'](_r162_t0);
            r162_include = _r162_t0['include']['bind'](_r162_t0);
            r162_xn$createstroke$7Hrq = _r162_t0['create-stroke']['bind'](_r162_t0);
            r162_xn$setanchor$9Jrj = _r162_t0['set-anchor']['bind'](_r162_t0);
            _r162_t0['gizmo'] = r4_globalTransform;
            _r162_t0['set-width'](r4_WIDTH);
            r162_xn$setwidth$9Jrj(r4_WIDTH);
            r162_xn$assignunicode$7Hrq('o');
            r162_include(r4_eMarks);
            r162_include(r162_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.left', function _r4_t97() {
            var r165_currentGlyph, r165_xn$setwidth$9Jrj, r165_xn$assignunicode$7Hrq, r165_xn$startfrom$1aao, r165_xn$lineto$5sIl, r165_xn$curveto$1aao, r165_xn$cubicto$1aao, r165_xn$putshapes$9Jrj, r165_xn$reverselast$3qIs, r165_include, r165_xn$createstroke$7Hrq, r165_xn$setanchor$9Jrj, _r165_t0, _r165_t1, _r165_t2;
            _r165_t0 = this;
            r165_currentGlyph = _r165_t0;
            r165_xn$setwidth$9Jrj = _r165_t0['set-width']['bind'](_r165_t0);
            r165_xn$assignunicode$7Hrq = function _r165_t2(r166_code) {
                var r166_code, _r166_t0, _r166_t1;
                r165_currentGlyph['assign-unicode'](r166_code);
                return r4_unicodeGlyphs[r165_currentGlyph['unicode'][r165_currentGlyph['unicode']['length'] - 1]] = r165_currentGlyph;
            };
            r165_xn$startfrom$1aao = _r165_t0['start-from']['bind'](_r165_t0);
            r165_xn$lineto$5sIl = _r165_t0['line-to']['bind'](_r165_t0);
            r165_xn$curveto$1aao = _r165_t0['curve-to']['bind'](_r165_t0);
            r165_xn$cubicto$1aao = _r165_t0['cubic-to']['bind'](_r165_t0);
            r165_xn$putshapes$9Jrj = _r165_t0['put-shapes']['bind'](_r165_t0);
            r165_xn$reverselast$3qIs = _r165_t0['reverse-last']['bind'](_r165_t0);
            r165_include = _r165_t0['include']['bind'](_r165_t0);
            r165_xn$createstroke$7Hrq = _r165_t0['create-stroke']['bind'](_r165_t0);
            r165_xn$setanchor$9Jrj = _r165_t0['set-anchor']['bind'](_r165_t0);
            _r165_t0['gizmo'] = r4_globalTransform;
            _r165_t0['set-width'](r4_WIDTH);
            r165_xn$setwidth$9Jrj(r4_WIDTH);
            r165_include(r165_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
            r165_include(r165_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.right', function _r4_t98() {
            var r168_currentGlyph, r168_xn$setwidth$9Jrj, r168_xn$assignunicode$7Hrq, r168_xn$startfrom$1aao, r168_xn$lineto$5sIl, r168_xn$curveto$1aao, r168_xn$cubicto$1aao, r168_xn$putshapes$9Jrj, r168_xn$reverselast$3qIs, r168_include, r168_xn$createstroke$7Hrq, r168_xn$setanchor$9Jrj, _r168_t0, _r168_t1, _r168_t2;
            _r168_t0 = this;
            r168_currentGlyph = _r168_t0;
            r168_xn$setwidth$9Jrj = _r168_t0['set-width']['bind'](_r168_t0);
            r168_xn$assignunicode$7Hrq = function _r168_t2(r169_code) {
                var r169_code, _r169_t0, _r169_t1;
                r168_currentGlyph['assign-unicode'](r169_code);
                return r4_unicodeGlyphs[r168_currentGlyph['unicode'][r168_currentGlyph['unicode']['length'] - 1]] = r168_currentGlyph;
            };
            r168_xn$startfrom$1aao = _r168_t0['start-from']['bind'](_r168_t0);
            r168_xn$lineto$5sIl = _r168_t0['line-to']['bind'](_r168_t0);
            r168_xn$curveto$1aao = _r168_t0['curve-to']['bind'](_r168_t0);
            r168_xn$cubicto$1aao = _r168_t0['cubic-to']['bind'](_r168_t0);
            r168_xn$putshapes$9Jrj = _r168_t0['put-shapes']['bind'](_r168_t0);
            r168_xn$reverselast$3qIs = _r168_t0['reverse-last']['bind'](_r168_t0);
            r168_include = _r168_t0['include']['bind'](_r168_t0);
            r168_xn$createstroke$7Hrq = _r168_t0['create-stroke']['bind'](_r168_t0);
            r168_xn$setanchor$9Jrj = _r168_t0['set-anchor']['bind'](_r168_t0);
            _r168_t0['gizmo'] = r4_globalTransform;
            _r168_t0['set-width'](r4_WIDTH);
            r168_xn$setwidth$9Jrj(r4_WIDTH);
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('p', function _r4_t99() {
            var r171_currentGlyph, r171_xn$setwidth$9Jrj, r171_xn$assignunicode$7Hrq, r171_xn$startfrom$1aao, r171_xn$lineto$5sIl, r171_xn$curveto$1aao, r171_xn$cubicto$1aao, r171_xn$putshapes$9Jrj, r171_xn$reverselast$3qIs, r171_include, r171_xn$createstroke$7Hrq, r171_xn$setanchor$9Jrj, _r171_t0, _r171_t1, _r171_t2;
            _r171_t0 = this;
            r171_currentGlyph = _r171_t0;
            r171_xn$setwidth$9Jrj = _r171_t0['set-width']['bind'](_r171_t0);
            r171_xn$assignunicode$7Hrq = function _r171_t2(r172_code) {
                var r172_code, _r172_t0, _r172_t1;
                r171_currentGlyph['assign-unicode'](r172_code);
                return r4_unicodeGlyphs[r171_currentGlyph['unicode'][r171_currentGlyph['unicode']['length'] - 1]] = r171_currentGlyph;
            };
            r171_xn$startfrom$1aao = _r171_t0['start-from']['bind'](_r171_t0);
            r171_xn$lineto$5sIl = _r171_t0['line-to']['bind'](_r171_t0);
            r171_xn$curveto$1aao = _r171_t0['curve-to']['bind'](_r171_t0);
            r171_xn$cubicto$1aao = _r171_t0['cubic-to']['bind'](_r171_t0);
            r171_xn$putshapes$9Jrj = _r171_t0['put-shapes']['bind'](_r171_t0);
            r171_xn$reverselast$3qIs = _r171_t0['reverse-last']['bind'](_r171_t0);
            r171_include = _r171_t0['include']['bind'](_r171_t0);
            r171_xn$createstroke$7Hrq = _r171_t0['create-stroke']['bind'](_r171_t0);
            r171_xn$setanchor$9Jrj = _r171_t0['set-anchor']['bind'](_r171_t0);
            _r171_t0['gizmo'] = r4_globalTransform;
            _r171_t0['set-width'](r4_WIDTH);
            r171_xn$setwidth$9Jrj(r4_WIDTH);
            r171_xn$assignunicode$7Hrq('p');
            r171_include(r4_eMarks);
            r171_include(r4_glyphs['o.left']);
            r171_include(r171_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t100() {
            var r174_currentGlyph, r174_xn$setwidth$9Jrj, r174_xn$assignunicode$7Hrq, r174_xn$startfrom$1aao, r174_xn$lineto$5sIl, r174_xn$curveto$1aao, r174_xn$cubicto$1aao, r174_xn$putshapes$9Jrj, r174_xn$reverselast$3qIs, r174_include, r174_xn$createstroke$7Hrq, r174_xn$setanchor$9Jrj, _r174_t0, _r174_t1, _r174_t2;
            _r174_t0 = this;
            r174_currentGlyph = _r174_t0;
            r174_xn$setwidth$9Jrj = _r174_t0['set-width']['bind'](_r174_t0);
            r174_xn$assignunicode$7Hrq = function _r174_t2(r175_code) {
                var r175_code, _r175_t0, _r175_t1;
                r174_currentGlyph['assign-unicode'](r175_code);
                return r4_unicodeGlyphs[r174_currentGlyph['unicode'][r174_currentGlyph['unicode']['length'] - 1]] = r174_currentGlyph;
            };
            r174_xn$startfrom$1aao = _r174_t0['start-from']['bind'](_r174_t0);
            r174_xn$lineto$5sIl = _r174_t0['line-to']['bind'](_r174_t0);
            r174_xn$curveto$1aao = _r174_t0['curve-to']['bind'](_r174_t0);
            r174_xn$cubicto$1aao = _r174_t0['cubic-to']['bind'](_r174_t0);
            r174_xn$putshapes$9Jrj = _r174_t0['put-shapes']['bind'](_r174_t0);
            r174_xn$reverselast$3qIs = _r174_t0['reverse-last']['bind'](_r174_t0);
            r174_include = _r174_t0['include']['bind'](_r174_t0);
            r174_xn$createstroke$7Hrq = _r174_t0['create-stroke']['bind'](_r174_t0);
            r174_xn$setanchor$9Jrj = _r174_t0['set-anchor']['bind'](_r174_t0);
            _r174_t0['gizmo'] = r4_globalTransform;
            _r174_t0['set-width'](r4_WIDTH);
            r174_xn$setwidth$9Jrj(r4_WIDTH);
            r174_xn$assignunicode$7Hrq('b');
            r174_include(r4_bMarks);
            r174_xn$putshapes$9Jrj(r4_glyphs['o.left']['contours']);
            r174_include(r174_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t101() {
            var r177_currentGlyph, r177_xn$setwidth$9Jrj, r177_xn$assignunicode$7Hrq, r177_xn$startfrom$1aao, r177_xn$lineto$5sIl, r177_xn$curveto$1aao, r177_xn$cubicto$1aao, r177_xn$putshapes$9Jrj, r177_xn$reverselast$3qIs, r177_include, r177_xn$createstroke$7Hrq, r177_xn$setanchor$9Jrj, _r177_t0, _r177_t1, _r177_t2;
            _r177_t0 = this;
            r177_currentGlyph = _r177_t0;
            r177_xn$setwidth$9Jrj = _r177_t0['set-width']['bind'](_r177_t0);
            r177_xn$assignunicode$7Hrq = function _r177_t2(r178_code) {
                var r178_code, _r178_t0, _r178_t1;
                r177_currentGlyph['assign-unicode'](r178_code);
                return r4_unicodeGlyphs[r177_currentGlyph['unicode'][r177_currentGlyph['unicode']['length'] - 1]] = r177_currentGlyph;
            };
            r177_xn$startfrom$1aao = _r177_t0['start-from']['bind'](_r177_t0);
            r177_xn$lineto$5sIl = _r177_t0['line-to']['bind'](_r177_t0);
            r177_xn$curveto$1aao = _r177_t0['curve-to']['bind'](_r177_t0);
            r177_xn$cubicto$1aao = _r177_t0['cubic-to']['bind'](_r177_t0);
            r177_xn$putshapes$9Jrj = _r177_t0['put-shapes']['bind'](_r177_t0);
            r177_xn$reverselast$3qIs = _r177_t0['reverse-last']['bind'](_r177_t0);
            r177_include = _r177_t0['include']['bind'](_r177_t0);
            r177_xn$createstroke$7Hrq = _r177_t0['create-stroke']['bind'](_r177_t0);
            r177_xn$setanchor$9Jrj = _r177_t0['set-anchor']['bind'](_r177_t0);
            _r177_t0['gizmo'] = r4_globalTransform;
            _r177_t0['set-width'](r4_WIDTH);
            r177_xn$setwidth$9Jrj(r4_WIDTH);
            r177_xn$assignunicode$7Hrq('q');
            r177_include(r4_eMarks);
            r177_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r177_include(r177_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t102() {
            var r180_currentGlyph, r180_xn$setwidth$9Jrj, r180_xn$assignunicode$7Hrq, r180_xn$startfrom$1aao, r180_xn$lineto$5sIl, r180_xn$curveto$1aao, r180_xn$cubicto$1aao, r180_xn$putshapes$9Jrj, r180_xn$reverselast$3qIs, r180_include, r180_xn$createstroke$7Hrq, r180_xn$setanchor$9Jrj, _r180_t0, _r180_t1, _r180_t2;
            _r180_t0 = this;
            r180_currentGlyph = _r180_t0;
            r180_xn$setwidth$9Jrj = _r180_t0['set-width']['bind'](_r180_t0);
            r180_xn$assignunicode$7Hrq = function _r180_t2(r181_code) {
                var r181_code, _r181_t0, _r181_t1;
                r180_currentGlyph['assign-unicode'](r181_code);
                return r4_unicodeGlyphs[r180_currentGlyph['unicode'][r180_currentGlyph['unicode']['length'] - 1]] = r180_currentGlyph;
            };
            r180_xn$startfrom$1aao = _r180_t0['start-from']['bind'](_r180_t0);
            r180_xn$lineto$5sIl = _r180_t0['line-to']['bind'](_r180_t0);
            r180_xn$curveto$1aao = _r180_t0['curve-to']['bind'](_r180_t0);
            r180_xn$cubicto$1aao = _r180_t0['cubic-to']['bind'](_r180_t0);
            r180_xn$putshapes$9Jrj = _r180_t0['put-shapes']['bind'](_r180_t0);
            r180_xn$reverselast$3qIs = _r180_t0['reverse-last']['bind'](_r180_t0);
            r180_include = _r180_t0['include']['bind'](_r180_t0);
            r180_xn$createstroke$7Hrq = _r180_t0['create-stroke']['bind'](_r180_t0);
            r180_xn$setanchor$9Jrj = _r180_t0['set-anchor']['bind'](_r180_t0);
            _r180_t0['gizmo'] = r4_globalTransform;
            _r180_t0['set-width'](r4_WIDTH);
            r180_xn$setwidth$9Jrj(r4_WIDTH);
            r180_xn$assignunicode$7Hrq('d');
            r180_include(r4_bMarks);
            r180_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r180_include(r180_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t103() {
            var r183_currentGlyph, r183_xn$setwidth$9Jrj, r183_xn$assignunicode$7Hrq, r183_xn$startfrom$1aao, r183_xn$lineto$5sIl, r183_xn$curveto$1aao, r183_xn$cubicto$1aao, r183_xn$putshapes$9Jrj, r183_xn$reverselast$3qIs, r183_include, r183_xn$createstroke$7Hrq, r183_xn$setanchor$9Jrj, r183_gleftx, r183_grightx, r183_groundy, _r183_t0, _r183_t1, _r183_t2;
            _r183_t0 = this;
            r183_currentGlyph = _r183_t0;
            r183_xn$setwidth$9Jrj = _r183_t0['set-width']['bind'](_r183_t0);
            r183_xn$assignunicode$7Hrq = function _r183_t2(r184_code) {
                var r184_code, _r184_t0, _r184_t1;
                r183_currentGlyph['assign-unicode'](r184_code);
                return r4_unicodeGlyphs[r183_currentGlyph['unicode'][r183_currentGlyph['unicode']['length'] - 1]] = r183_currentGlyph;
            };
            r183_xn$startfrom$1aao = _r183_t0['start-from']['bind'](_r183_t0);
            r183_xn$lineto$5sIl = _r183_t0['line-to']['bind'](_r183_t0);
            r183_xn$curveto$1aao = _r183_t0['curve-to']['bind'](_r183_t0);
            r183_xn$cubicto$1aao = _r183_t0['cubic-to']['bind'](_r183_t0);
            r183_xn$putshapes$9Jrj = _r183_t0['put-shapes']['bind'](_r183_t0);
            r183_xn$reverselast$3qIs = _r183_t0['reverse-last']['bind'](_r183_t0);
            r183_include = _r183_t0['include']['bind'](_r183_t0);
            r183_xn$createstroke$7Hrq = _r183_t0['create-stroke']['bind'](_r183_t0);
            r183_xn$setanchor$9Jrj = _r183_t0['set-anchor']['bind'](_r183_t0);
            _r183_t0['gizmo'] = r4_globalTransform;
            _r183_t0['set-width'](r4_WIDTH);
            r183_xn$setwidth$9Jrj(r4_WIDTH);
            r183_xn$assignunicode$7Hrq('g');
            r183_include(r4_pMarks);
            r183_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r183_xn$reverselast$3qIs();
            r183_gleftx = r4_SB * 0.8 + r4_O;
            r183_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r183_groundy = r4_O - r4_DESCENDER * 0.85;
            r183_include(r183_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r183_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r183_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r183_groundy)['arc-hv-to'](r183_grightx, r0_mix(r4_DESCENDER + r4_O, r183_groundy, 0.53))['arc-vh-to'](r0_mix(r183_gleftx, r183_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r183_gleftx, r0_mix(r4_DESCENDER + r4_O, r183_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r183_groundy));
            r183_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r183_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r183_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r183_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t104() {
            var r186_currentGlyph, r186_xn$setwidth$9Jrj, r186_xn$assignunicode$7Hrq, r186_xn$startfrom$1aao, r186_xn$lineto$5sIl, r186_xn$curveto$1aao, r186_xn$cubicto$1aao, r186_xn$putshapes$9Jrj, r186_xn$reverselast$3qIs, r186_include, r186_xn$createstroke$7Hrq, r186_xn$setanchor$9Jrj, _r186_t0, _r186_t1, _r186_t2;
            _r186_t0 = this;
            r186_currentGlyph = _r186_t0;
            r186_xn$setwidth$9Jrj = _r186_t0['set-width']['bind'](_r186_t0);
            r186_xn$assignunicode$7Hrq = function _r186_t2(r187_code) {
                var r187_code, _r187_t0, _r187_t1;
                r186_currentGlyph['assign-unicode'](r187_code);
                return r4_unicodeGlyphs[r186_currentGlyph['unicode'][r186_currentGlyph['unicode']['length'] - 1]] = r186_currentGlyph;
            };
            r186_xn$startfrom$1aao = _r186_t0['start-from']['bind'](_r186_t0);
            r186_xn$lineto$5sIl = _r186_t0['line-to']['bind'](_r186_t0);
            r186_xn$curveto$1aao = _r186_t0['curve-to']['bind'](_r186_t0);
            r186_xn$cubicto$1aao = _r186_t0['cubic-to']['bind'](_r186_t0);
            r186_xn$putshapes$9Jrj = _r186_t0['put-shapes']['bind'](_r186_t0);
            r186_xn$reverselast$3qIs = _r186_t0['reverse-last']['bind'](_r186_t0);
            r186_include = _r186_t0['include']['bind'](_r186_t0);
            r186_xn$createstroke$7Hrq = _r186_t0['create-stroke']['bind'](_r186_t0);
            r186_xn$setanchor$9Jrj = _r186_t0['set-anchor']['bind'](_r186_t0);
            _r186_t0['gizmo'] = r4_globalTransform;
            _r186_t0['set-width'](r4_WIDTH);
            r186_xn$setwidth$9Jrj(r4_WIDTH);
            r186_xn$assignunicode$7Hrq('c');
            r186_include(r4_eMarks);
            r186_include(r186_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t105() {
            var r189_currentGlyph, r189_xn$setwidth$9Jrj, r189_xn$assignunicode$7Hrq, r189_xn$startfrom$1aao, r189_xn$lineto$5sIl, r189_xn$curveto$1aao, r189_xn$cubicto$1aao, r189_xn$putshapes$9Jrj, r189_xn$reverselast$3qIs, r189_include, r189_xn$createstroke$7Hrq, r189_xn$setanchor$9Jrj, r189_barbottom, r189_hookx, r189_hookmiddle, _r189_t0, _r189_t1, _r189_t2;
            _r189_t0 = this;
            r189_currentGlyph = _r189_t0;
            r189_xn$setwidth$9Jrj = _r189_t0['set-width']['bind'](_r189_t0);
            r189_xn$assignunicode$7Hrq = function _r189_t2(r190_code) {
                var r190_code, _r190_t0, _r190_t1;
                r189_currentGlyph['assign-unicode'](r190_code);
                return r4_unicodeGlyphs[r189_currentGlyph['unicode'][r189_currentGlyph['unicode']['length'] - 1]] = r189_currentGlyph;
            };
            r189_xn$startfrom$1aao = _r189_t0['start-from']['bind'](_r189_t0);
            r189_xn$lineto$5sIl = _r189_t0['line-to']['bind'](_r189_t0);
            r189_xn$curveto$1aao = _r189_t0['curve-to']['bind'](_r189_t0);
            r189_xn$cubicto$1aao = _r189_t0['cubic-to']['bind'](_r189_t0);
            r189_xn$putshapes$9Jrj = _r189_t0['put-shapes']['bind'](_r189_t0);
            r189_xn$reverselast$3qIs = _r189_t0['reverse-last']['bind'](_r189_t0);
            r189_include = _r189_t0['include']['bind'](_r189_t0);
            r189_xn$createstroke$7Hrq = _r189_t0['create-stroke']['bind'](_r189_t0);
            r189_xn$setanchor$9Jrj = _r189_t0['set-anchor']['bind'](_r189_t0);
            _r189_t0['gizmo'] = r4_globalTransform;
            _r189_t0['set-width'](r4_WIDTH);
            r189_xn$setwidth$9Jrj(r4_WIDTH);
            r189_barbottom = r4_XH * r4_EBARPOS;
            r189_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r189_hookmiddle = r0_mix(r4_SB + r4_O, r189_hookx, 0.55);
            r189_include(r189_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r189_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r189_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r189_hookmiddle, r189_hookx, r4_KAPPA_HOOK), r4_O, r189_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r189_include(r189_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r189_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r189_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t106() {
            var r192_currentGlyph, r192_xn$setwidth$9Jrj, r192_xn$assignunicode$7Hrq, r192_xn$startfrom$1aao, r192_xn$lineto$5sIl, r192_xn$curveto$1aao, r192_xn$cubicto$1aao, r192_xn$putshapes$9Jrj, r192_xn$reverselast$3qIs, r192_include, r192_xn$createstroke$7Hrq, r192_xn$setanchor$9Jrj, r192_barbottom, _r192_t0, _r192_t1, _r192_t2;
            _r192_t0 = this;
            r192_currentGlyph = _r192_t0;
            r192_xn$setwidth$9Jrj = _r192_t0['set-width']['bind'](_r192_t0);
            r192_xn$assignunicode$7Hrq = function _r192_t2(r193_code) {
                var r193_code, _r193_t0, _r193_t1;
                r192_currentGlyph['assign-unicode'](r193_code);
                return r4_unicodeGlyphs[r192_currentGlyph['unicode'][r192_currentGlyph['unicode']['length'] - 1]] = r192_currentGlyph;
            };
            r192_xn$startfrom$1aao = _r192_t0['start-from']['bind'](_r192_t0);
            r192_xn$lineto$5sIl = _r192_t0['line-to']['bind'](_r192_t0);
            r192_xn$curveto$1aao = _r192_t0['curve-to']['bind'](_r192_t0);
            r192_xn$cubicto$1aao = _r192_t0['cubic-to']['bind'](_r192_t0);
            r192_xn$putshapes$9Jrj = _r192_t0['put-shapes']['bind'](_r192_t0);
            r192_xn$reverselast$3qIs = _r192_t0['reverse-last']['bind'](_r192_t0);
            r192_include = _r192_t0['include']['bind'](_r192_t0);
            r192_xn$createstroke$7Hrq = _r192_t0['create-stroke']['bind'](_r192_t0);
            r192_xn$setanchor$9Jrj = _r192_t0['set-anchor']['bind'](_r192_t0);
            _r192_t0['gizmo'] = r4_globalTransform;
            _r192_t0['set-width'](r4_WIDTH);
            r192_xn$setwidth$9Jrj(r4_WIDTH);
            r192_barbottom = r4_XH * (r4_BARPOS - 0.04);
            r192_include(r192_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r192_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t107() {
            var r195_currentGlyph, r195_xn$setwidth$9Jrj, r195_xn$assignunicode$7Hrq, r195_xn$startfrom$1aao, r195_xn$lineto$5sIl, r195_xn$curveto$1aao, r195_xn$cubicto$1aao, r195_xn$putshapes$9Jrj, r195_xn$reverselast$3qIs, r195_include, r195_xn$createstroke$7Hrq, r195_xn$setanchor$9Jrj, _r195_t0, _r195_t1, _r195_t2;
            _r195_t0 = this;
            r195_currentGlyph = _r195_t0;
            r195_xn$setwidth$9Jrj = _r195_t0['set-width']['bind'](_r195_t0);
            r195_xn$assignunicode$7Hrq = function _r195_t2(r196_code) {
                var r196_code, _r196_t0, _r196_t1;
                r195_currentGlyph['assign-unicode'](r196_code);
                return r4_unicodeGlyphs[r195_currentGlyph['unicode'][r195_currentGlyph['unicode']['length'] - 1]] = r195_currentGlyph;
            };
            r195_xn$startfrom$1aao = _r195_t0['start-from']['bind'](_r195_t0);
            r195_xn$lineto$5sIl = _r195_t0['line-to']['bind'](_r195_t0);
            r195_xn$curveto$1aao = _r195_t0['curve-to']['bind'](_r195_t0);
            r195_xn$cubicto$1aao = _r195_t0['cubic-to']['bind'](_r195_t0);
            r195_xn$putshapes$9Jrj = _r195_t0['put-shapes']['bind'](_r195_t0);
            r195_xn$reverselast$3qIs = _r195_t0['reverse-last']['bind'](_r195_t0);
            r195_include = _r195_t0['include']['bind'](_r195_t0);
            r195_xn$createstroke$7Hrq = _r195_t0['create-stroke']['bind'](_r195_t0);
            r195_xn$setanchor$9Jrj = _r195_t0['set-anchor']['bind'](_r195_t0);
            _r195_t0['gizmo'] = r4_globalTransform;
            _r195_t0['set-width'](r4_WIDTH);
            r195_xn$setwidth$9Jrj(r4_WIDTH);
            r195_xn$assignunicode$7Hrq('e');
            r195_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r195_include(r4_glyphs['e.italic']);
            } else {
                r195_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t108() {
            var r198_currentGlyph, r198_xn$setwidth$9Jrj, r198_xn$assignunicode$7Hrq, r198_xn$startfrom$1aao, r198_xn$lineto$5sIl, r198_xn$curveto$1aao, r198_xn$cubicto$1aao, r198_xn$putshapes$9Jrj, r198_xn$reverselast$3qIs, r198_include, r198_xn$createstroke$7Hrq, r198_xn$setanchor$9Jrj, r198_center, r198_hookx, r198_turn, r198_smb, _r198_t0, _r198_t1, _r198_t2;
            _r198_t0 = this;
            r198_currentGlyph = _r198_t0;
            r198_xn$setwidth$9Jrj = _r198_t0['set-width']['bind'](_r198_t0);
            r198_xn$assignunicode$7Hrq = function _r198_t2(r199_code) {
                var r199_code, _r199_t0, _r199_t1;
                r198_currentGlyph['assign-unicode'](r199_code);
                return r4_unicodeGlyphs[r198_currentGlyph['unicode'][r198_currentGlyph['unicode']['length'] - 1]] = r198_currentGlyph;
            };
            r198_xn$startfrom$1aao = _r198_t0['start-from']['bind'](_r198_t0);
            r198_xn$lineto$5sIl = _r198_t0['line-to']['bind'](_r198_t0);
            r198_xn$curveto$1aao = _r198_t0['curve-to']['bind'](_r198_t0);
            r198_xn$cubicto$1aao = _r198_t0['cubic-to']['bind'](_r198_t0);
            r198_xn$putshapes$9Jrj = _r198_t0['put-shapes']['bind'](_r198_t0);
            r198_xn$reverselast$3qIs = _r198_t0['reverse-last']['bind'](_r198_t0);
            r198_include = _r198_t0['include']['bind'](_r198_t0);
            r198_xn$createstroke$7Hrq = _r198_t0['create-stroke']['bind'](_r198_t0);
            r198_xn$setanchor$9Jrj = _r198_t0['set-anchor']['bind'](_r198_t0);
            _r198_t0['gizmo'] = r4_globalTransform;
            _r198_t0['set-width'](r4_WIDTH);
            r198_xn$setwidth$9Jrj(r4_WIDTH);
            r198_xn$assignunicode$7Hrq('t');
            r198_include(r4_bMarks);
            r198_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r198_hookx = r198_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r198_turn = r0_mix(r198_center, r198_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r198_smb = (r198_turn - r198_center) * 1.1;
            r198_include(r198_xn$createstroke$7Hrq()['start-from'](r198_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r198_center, r198_smb)['arc-vh-to'](r198_turn, r4_O)['curve-to'](r198_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r198_hookx - r198_turn), r4_O, r198_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r198_include(r198_xn$createstroke$7Hrq()['start-from'](r198_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r198_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t109() {
            var r201_currentGlyph, r201_xn$setwidth$9Jrj, r201_xn$assignunicode$7Hrq, r201_xn$startfrom$1aao, r201_xn$lineto$5sIl, r201_xn$curveto$1aao, r201_xn$cubicto$1aao, r201_xn$putshapes$9Jrj, r201_xn$reverselast$3qIs, r201_include, r201_xn$createstroke$7Hrq, r201_xn$setanchor$9Jrj, r201_bartop, r201_lowmiddle, r201_barsmooth, _r201_t0, _r201_t1, _r201_t2;
            _r201_t0 = this;
            r201_currentGlyph = _r201_t0;
            r201_xn$setwidth$9Jrj = _r201_t0['set-width']['bind'](_r201_t0);
            r201_xn$assignunicode$7Hrq = function _r201_t2(r202_code) {
                var r202_code, _r202_t0, _r202_t1;
                r201_currentGlyph['assign-unicode'](r202_code);
                return r4_unicodeGlyphs[r201_currentGlyph['unicode'][r201_currentGlyph['unicode']['length'] - 1]] = r201_currentGlyph;
            };
            r201_xn$startfrom$1aao = _r201_t0['start-from']['bind'](_r201_t0);
            r201_xn$lineto$5sIl = _r201_t0['line-to']['bind'](_r201_t0);
            r201_xn$curveto$1aao = _r201_t0['curve-to']['bind'](_r201_t0);
            r201_xn$cubicto$1aao = _r201_t0['cubic-to']['bind'](_r201_t0);
            r201_xn$putshapes$9Jrj = _r201_t0['put-shapes']['bind'](_r201_t0);
            r201_xn$reverselast$3qIs = _r201_t0['reverse-last']['bind'](_r201_t0);
            r201_include = _r201_t0['include']['bind'](_r201_t0);
            r201_xn$createstroke$7Hrq = _r201_t0['create-stroke']['bind'](_r201_t0);
            r201_xn$setanchor$9Jrj = _r201_t0['set-anchor']['bind'](_r201_t0);
            _r201_t0['gizmo'] = r4_globalTransform;
            _r201_t0['set-width'](r4_WIDTH);
            r201_xn$setwidth$9Jrj(r4_WIDTH);
            r201_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r201_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r201_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r201_include(r201_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r201_include(r201_xn$createstroke$7Hrq()['start-from'](r201_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r201_bartop * 0.45)['arc-vh-to'](r201_barsmooth, r201_bartop)['line-to'](r4_RIGHTSB, r201_bartop)['heads-to'](r4_RIGHTWARD));
            r201_include(r201_xn$createstroke$7Hrq()['start-from'](r201_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t110() {
            var r204_currentGlyph, r204_xn$setwidth$9Jrj, r204_xn$assignunicode$7Hrq, r204_xn$startfrom$1aao, r204_xn$lineto$5sIl, r204_xn$curveto$1aao, r204_xn$cubicto$1aao, r204_xn$putshapes$9Jrj, r204_xn$reverselast$3qIs, r204_include, r204_xn$createstroke$7Hrq, r204_xn$setanchor$9Jrj, _r204_t0, _r204_t1, _r204_t2;
            _r204_t0 = this;
            r204_currentGlyph = _r204_t0;
            r204_xn$setwidth$9Jrj = _r204_t0['set-width']['bind'](_r204_t0);
            r204_xn$assignunicode$7Hrq = function _r204_t2(r205_code) {
                var r205_code, _r205_t0, _r205_t1;
                r204_currentGlyph['assign-unicode'](r205_code);
                return r4_unicodeGlyphs[r204_currentGlyph['unicode'][r204_currentGlyph['unicode']['length'] - 1]] = r204_currentGlyph;
            };
            r204_xn$startfrom$1aao = _r204_t0['start-from']['bind'](_r204_t0);
            r204_xn$lineto$5sIl = _r204_t0['line-to']['bind'](_r204_t0);
            r204_xn$curveto$1aao = _r204_t0['curve-to']['bind'](_r204_t0);
            r204_xn$cubicto$1aao = _r204_t0['cubic-to']['bind'](_r204_t0);
            r204_xn$putshapes$9Jrj = _r204_t0['put-shapes']['bind'](_r204_t0);
            r204_xn$reverselast$3qIs = _r204_t0['reverse-last']['bind'](_r204_t0);
            r204_include = _r204_t0['include']['bind'](_r204_t0);
            r204_xn$createstroke$7Hrq = _r204_t0['create-stroke']['bind'](_r204_t0);
            r204_xn$setanchor$9Jrj = _r204_t0['set-anchor']['bind'](_r204_t0);
            _r204_t0['gizmo'] = r4_globalTransform;
            _r204_t0['set-width'](r4_WIDTH);
            r204_xn$setwidth$9Jrj(r4_WIDTH);
            r204_include(r4_glyphs['o.right']);
            r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t111() {
            var r207_currentGlyph, r207_xn$setwidth$9Jrj, r207_xn$assignunicode$7Hrq, r207_xn$startfrom$1aao, r207_xn$lineto$5sIl, r207_xn$curveto$1aao, r207_xn$cubicto$1aao, r207_xn$putshapes$9Jrj, r207_xn$reverselast$3qIs, r207_include, r207_xn$createstroke$7Hrq, r207_xn$setanchor$9Jrj, _r207_t0, _r207_t1, _r207_t2;
            _r207_t0 = this;
            r207_currentGlyph = _r207_t0;
            r207_xn$setwidth$9Jrj = _r207_t0['set-width']['bind'](_r207_t0);
            r207_xn$assignunicode$7Hrq = function _r207_t2(r208_code) {
                var r208_code, _r208_t0, _r208_t1;
                r207_currentGlyph['assign-unicode'](r208_code);
                return r4_unicodeGlyphs[r207_currentGlyph['unicode'][r207_currentGlyph['unicode']['length'] - 1]] = r207_currentGlyph;
            };
            r207_xn$startfrom$1aao = _r207_t0['start-from']['bind'](_r207_t0);
            r207_xn$lineto$5sIl = _r207_t0['line-to']['bind'](_r207_t0);
            r207_xn$curveto$1aao = _r207_t0['curve-to']['bind'](_r207_t0);
            r207_xn$cubicto$1aao = _r207_t0['cubic-to']['bind'](_r207_t0);
            r207_xn$putshapes$9Jrj = _r207_t0['put-shapes']['bind'](_r207_t0);
            r207_xn$reverselast$3qIs = _r207_t0['reverse-last']['bind'](_r207_t0);
            r207_include = _r207_t0['include']['bind'](_r207_t0);
            r207_xn$createstroke$7Hrq = _r207_t0['create-stroke']['bind'](_r207_t0);
            r207_xn$setanchor$9Jrj = _r207_t0['set-anchor']['bind'](_r207_t0);
            _r207_t0['gizmo'] = r4_globalTransform;
            _r207_t0['set-width'](r4_WIDTH);
            r207_xn$setwidth$9Jrj(r4_WIDTH);
            r207_xn$assignunicode$7Hrq('a');
            r207_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r207_include(r4_glyphs['a.italic']);
            } else {
                r207_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t112() {
            var r210_currentGlyph, r210_xn$setwidth$9Jrj, r210_xn$assignunicode$7Hrq, r210_xn$startfrom$1aao, r210_xn$lineto$5sIl, r210_xn$curveto$1aao, r210_xn$cubicto$1aao, r210_xn$putshapes$9Jrj, r210_xn$reverselast$3qIs, r210_include, r210_xn$createstroke$7Hrq, r210_xn$setanchor$9Jrj, _r210_t0, _r210_t1, _r210_t2;
            _r210_t0 = this;
            r210_currentGlyph = _r210_t0;
            r210_xn$setwidth$9Jrj = _r210_t0['set-width']['bind'](_r210_t0);
            r210_xn$assignunicode$7Hrq = function _r210_t2(r211_code) {
                var r211_code, _r211_t0, _r211_t1;
                r210_currentGlyph['assign-unicode'](r211_code);
                return r4_unicodeGlyphs[r210_currentGlyph['unicode'][r210_currentGlyph['unicode']['length'] - 1]] = r210_currentGlyph;
            };
            r210_xn$startfrom$1aao = _r210_t0['start-from']['bind'](_r210_t0);
            r210_xn$lineto$5sIl = _r210_t0['line-to']['bind'](_r210_t0);
            r210_xn$curveto$1aao = _r210_t0['curve-to']['bind'](_r210_t0);
            r210_xn$cubicto$1aao = _r210_t0['cubic-to']['bind'](_r210_t0);
            r210_xn$putshapes$9Jrj = _r210_t0['put-shapes']['bind'](_r210_t0);
            r210_xn$reverselast$3qIs = _r210_t0['reverse-last']['bind'](_r210_t0);
            r210_include = _r210_t0['include']['bind'](_r210_t0);
            r210_xn$createstroke$7Hrq = _r210_t0['create-stroke']['bind'](_r210_t0);
            r210_xn$setanchor$9Jrj = _r210_t0['set-anchor']['bind'](_r210_t0);
            _r210_t0['gizmo'] = r4_globalTransform;
            _r210_t0['set-width'](r4_WIDTH);
            r210_xn$setwidth$9Jrj(r4_WIDTH);
            r210_xn$assignunicode$7Hrq('u');
            r210_include(r4_eMarks);
            r210_include(r210_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r210_include(r210_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r210_include(r210_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t113() {
            var r213_currentGlyph, r213_xn$setwidth$9Jrj, r213_xn$assignunicode$7Hrq, r213_xn$startfrom$1aao, r213_xn$lineto$5sIl, r213_xn$curveto$1aao, r213_xn$cubicto$1aao, r213_xn$putshapes$9Jrj, r213_xn$reverselast$3qIs, r213_include, r213_xn$createstroke$7Hrq, r213_xn$setanchor$9Jrj, _r213_t0, _r213_t1, _r213_t2;
            _r213_t0 = this;
            r213_currentGlyph = _r213_t0;
            r213_xn$setwidth$9Jrj = _r213_t0['set-width']['bind'](_r213_t0);
            r213_xn$assignunicode$7Hrq = function _r213_t2(r214_code) {
                var r214_code, _r214_t0, _r214_t1;
                r213_currentGlyph['assign-unicode'](r214_code);
                return r4_unicodeGlyphs[r213_currentGlyph['unicode'][r213_currentGlyph['unicode']['length'] - 1]] = r213_currentGlyph;
            };
            r213_xn$startfrom$1aao = _r213_t0['start-from']['bind'](_r213_t0);
            r213_xn$lineto$5sIl = _r213_t0['line-to']['bind'](_r213_t0);
            r213_xn$curveto$1aao = _r213_t0['curve-to']['bind'](_r213_t0);
            r213_xn$cubicto$1aao = _r213_t0['cubic-to']['bind'](_r213_t0);
            r213_xn$putshapes$9Jrj = _r213_t0['put-shapes']['bind'](_r213_t0);
            r213_xn$reverselast$3qIs = _r213_t0['reverse-last']['bind'](_r213_t0);
            r213_include = _r213_t0['include']['bind'](_r213_t0);
            r213_xn$createstroke$7Hrq = _r213_t0['create-stroke']['bind'](_r213_t0);
            r213_xn$setanchor$9Jrj = _r213_t0['set-anchor']['bind'](_r213_t0);
            _r213_t0['gizmo'] = r4_globalTransform;
            _r213_t0['set-width'](r4_WIDTH);
            r213_xn$setwidth$9Jrj(r4_WIDTH);
            r213_xn$assignunicode$7Hrq('n');
            r213_include(r4_eMarks);
            r213_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r213_include(r213_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t114() {
            var r216_currentGlyph, r216_xn$setwidth$9Jrj, r216_xn$assignunicode$7Hrq, r216_xn$startfrom$1aao, r216_xn$lineto$5sIl, r216_xn$curveto$1aao, r216_xn$cubicto$1aao, r216_xn$putshapes$9Jrj, r216_xn$reverselast$3qIs, r216_include, r216_xn$createstroke$7Hrq, r216_xn$setanchor$9Jrj, _r216_t0, _r216_t1, _r216_t2;
            _r216_t0 = this;
            r216_currentGlyph = _r216_t0;
            r216_xn$setwidth$9Jrj = _r216_t0['set-width']['bind'](_r216_t0);
            r216_xn$assignunicode$7Hrq = function _r216_t2(r217_code) {
                var r217_code, _r217_t0, _r217_t1;
                r216_currentGlyph['assign-unicode'](r217_code);
                return r4_unicodeGlyphs[r216_currentGlyph['unicode'][r216_currentGlyph['unicode']['length'] - 1]] = r216_currentGlyph;
            };
            r216_xn$startfrom$1aao = _r216_t0['start-from']['bind'](_r216_t0);
            r216_xn$lineto$5sIl = _r216_t0['line-to']['bind'](_r216_t0);
            r216_xn$curveto$1aao = _r216_t0['curve-to']['bind'](_r216_t0);
            r216_xn$cubicto$1aao = _r216_t0['cubic-to']['bind'](_r216_t0);
            r216_xn$putshapes$9Jrj = _r216_t0['put-shapes']['bind'](_r216_t0);
            r216_xn$reverselast$3qIs = _r216_t0['reverse-last']['bind'](_r216_t0);
            r216_include = _r216_t0['include']['bind'](_r216_t0);
            r216_xn$createstroke$7Hrq = _r216_t0['create-stroke']['bind'](_r216_t0);
            r216_xn$setanchor$9Jrj = _r216_t0['set-anchor']['bind'](_r216_t0);
            _r216_t0['gizmo'] = r4_globalTransform;
            _r216_t0['set-width'](r4_WIDTH);
            r216_xn$setwidth$9Jrj(r4_WIDTH);
            r216_xn$assignunicode$7Hrq('h');
            r216_include(r4_bMarks);
            r216_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t115() {
            var r219_currentGlyph, r219_xn$setwidth$9Jrj, r219_xn$assignunicode$7Hrq, r219_xn$startfrom$1aao, r219_xn$lineto$5sIl, r219_xn$curveto$1aao, r219_xn$cubicto$1aao, r219_xn$putshapes$9Jrj, r219_xn$reverselast$3qIs, r219_include, r219_xn$createstroke$7Hrq, r219_xn$setanchor$9Jrj, r219_sw, r219_m1, r219_m2, _r219_t0, _r219_t1, _r219_t2;
            _r219_t0 = this;
            r219_currentGlyph = _r219_t0;
            r219_xn$setwidth$9Jrj = _r219_t0['set-width']['bind'](_r219_t0);
            r219_xn$assignunicode$7Hrq = function _r219_t2(r220_code) {
                var r220_code, _r220_t0, _r220_t1;
                r219_currentGlyph['assign-unicode'](r220_code);
                return r4_unicodeGlyphs[r219_currentGlyph['unicode'][r219_currentGlyph['unicode']['length'] - 1]] = r219_currentGlyph;
            };
            r219_xn$startfrom$1aao = _r219_t0['start-from']['bind'](_r219_t0);
            r219_xn$lineto$5sIl = _r219_t0['line-to']['bind'](_r219_t0);
            r219_xn$curveto$1aao = _r219_t0['curve-to']['bind'](_r219_t0);
            r219_xn$cubicto$1aao = _r219_t0['cubic-to']['bind'](_r219_t0);
            r219_xn$putshapes$9Jrj = _r219_t0['put-shapes']['bind'](_r219_t0);
            r219_xn$reverselast$3qIs = _r219_t0['reverse-last']['bind'](_r219_t0);
            r219_include = _r219_t0['include']['bind'](_r219_t0);
            r219_xn$createstroke$7Hrq = _r219_t0['create-stroke']['bind'](_r219_t0);
            r219_xn$setanchor$9Jrj = _r219_t0['set-anchor']['bind'](_r219_t0);
            _r219_t0['gizmo'] = r4_globalTransform;
            _r219_t0['set-width'](r4_WIDTH);
            r219_xn$setwidth$9Jrj(r4_WIDTH);
            r219_xn$assignunicode$7Hrq('m');
            r219_include(r4_eMarks);
            r219_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.26);
            r219_m1 = (r4_MIDDLE + r4_SB + r219_sw * 0.25) / 2;
            r219_m2 = r219_m1 + (r4_MIDDLE - r219_sw / 2 - r4_SB);
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r219_sw / 2, 0)['set-width'](0, r219_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r219_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r219_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r219_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r219_sw * 0.4));
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r219_sw - r4_O, 0)['set-width'](0, r219_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r219_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r219_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r219_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r219_sw * 0.4));
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r219_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t116() {
            var r222_currentGlyph, r222_xn$setwidth$9Jrj, r222_xn$assignunicode$7Hrq, r222_xn$startfrom$1aao, r222_xn$lineto$5sIl, r222_xn$curveto$1aao, r222_xn$cubicto$1aao, r222_xn$putshapes$9Jrj, r222_xn$reverselast$3qIs, r222_include, r222_xn$createstroke$7Hrq, r222_xn$setanchor$9Jrj, _r222_t0, _r222_t1, _r222_t2;
            _r222_t0 = this;
            r222_currentGlyph = _r222_t0;
            r222_xn$setwidth$9Jrj = _r222_t0['set-width']['bind'](_r222_t0);
            r222_xn$assignunicode$7Hrq = function _r222_t2(r223_code) {
                var r223_code, _r223_t0, _r223_t1;
                r222_currentGlyph['assign-unicode'](r223_code);
                return r4_unicodeGlyphs[r222_currentGlyph['unicode'][r222_currentGlyph['unicode']['length'] - 1]] = r222_currentGlyph;
            };
            r222_xn$startfrom$1aao = _r222_t0['start-from']['bind'](_r222_t0);
            r222_xn$lineto$5sIl = _r222_t0['line-to']['bind'](_r222_t0);
            r222_xn$curveto$1aao = _r222_t0['curve-to']['bind'](_r222_t0);
            r222_xn$cubicto$1aao = _r222_t0['cubic-to']['bind'](_r222_t0);
            r222_xn$putshapes$9Jrj = _r222_t0['put-shapes']['bind'](_r222_t0);
            r222_xn$reverselast$3qIs = _r222_t0['reverse-last']['bind'](_r222_t0);
            r222_include = _r222_t0['include']['bind'](_r222_t0);
            r222_xn$createstroke$7Hrq = _r222_t0['create-stroke']['bind'](_r222_t0);
            r222_xn$setanchor$9Jrj = _r222_t0['set-anchor']['bind'](_r222_t0);
            _r222_t0['gizmo'] = r4_globalTransform;
            _r222_t0['set-width'](r4_WIDTH);
            r222_include(r4_eMarks);
            r222_include(r222_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t117() {
            var r225_currentGlyph, r225_xn$setwidth$9Jrj, r225_xn$assignunicode$7Hrq, r225_xn$startfrom$1aao, r225_xn$lineto$5sIl, r225_xn$curveto$1aao, r225_xn$cubicto$1aao, r225_xn$putshapes$9Jrj, r225_xn$reverselast$3qIs, r225_include, r225_xn$createstroke$7Hrq, r225_xn$setanchor$9Jrj, _r225_t0, _r225_t1, _r225_t2;
            _r225_t0 = this;
            r225_currentGlyph = _r225_t0;
            r225_xn$setwidth$9Jrj = _r225_t0['set-width']['bind'](_r225_t0);
            r225_xn$assignunicode$7Hrq = function _r225_t2(r226_code) {
                var r226_code, _r226_t0, _r226_t1;
                r225_currentGlyph['assign-unicode'](r226_code);
                return r4_unicodeGlyphs[r225_currentGlyph['unicode'][r225_currentGlyph['unicode']['length'] - 1]] = r225_currentGlyph;
            };
            r225_xn$startfrom$1aao = _r225_t0['start-from']['bind'](_r225_t0);
            r225_xn$lineto$5sIl = _r225_t0['line-to']['bind'](_r225_t0);
            r225_xn$curveto$1aao = _r225_t0['curve-to']['bind'](_r225_t0);
            r225_xn$cubicto$1aao = _r225_t0['cubic-to']['bind'](_r225_t0);
            r225_xn$putshapes$9Jrj = _r225_t0['put-shapes']['bind'](_r225_t0);
            r225_xn$reverselast$3qIs = _r225_t0['reverse-last']['bind'](_r225_t0);
            r225_include = _r225_t0['include']['bind'](_r225_t0);
            r225_xn$createstroke$7Hrq = _r225_t0['create-stroke']['bind'](_r225_t0);
            r225_xn$setanchor$9Jrj = _r225_t0['set-anchor']['bind'](_r225_t0);
            _r225_t0['gizmo'] = r4_globalTransform;
            _r225_t0['set-width'](r4_WIDTH);
            r225_include(r4_glyphs['dotlessi.straight'], true);
            r225_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t118() {
            var r228_currentGlyph, r228_xn$setwidth$9Jrj, r228_xn$assignunicode$7Hrq, r228_xn$startfrom$1aao, r228_xn$lineto$5sIl, r228_xn$curveto$1aao, r228_xn$cubicto$1aao, r228_xn$putshapes$9Jrj, r228_xn$reverselast$3qIs, r228_include, r228_xn$createstroke$7Hrq, r228_xn$setanchor$9Jrj, _r228_t0, _r228_t1, _r228_t2;
            _r228_t0 = this;
            r228_currentGlyph = _r228_t0;
            r228_xn$setwidth$9Jrj = _r228_t0['set-width']['bind'](_r228_t0);
            r228_xn$assignunicode$7Hrq = function _r228_t2(r229_code) {
                var r229_code, _r229_t0, _r229_t1;
                r228_currentGlyph['assign-unicode'](r229_code);
                return r4_unicodeGlyphs[r228_currentGlyph['unicode'][r228_currentGlyph['unicode']['length'] - 1]] = r228_currentGlyph;
            };
            r228_xn$startfrom$1aao = _r228_t0['start-from']['bind'](_r228_t0);
            r228_xn$lineto$5sIl = _r228_t0['line-to']['bind'](_r228_t0);
            r228_xn$curveto$1aao = _r228_t0['curve-to']['bind'](_r228_t0);
            r228_xn$cubicto$1aao = _r228_t0['cubic-to']['bind'](_r228_t0);
            r228_xn$putshapes$9Jrj = _r228_t0['put-shapes']['bind'](_r228_t0);
            r228_xn$reverselast$3qIs = _r228_t0['reverse-last']['bind'](_r228_t0);
            r228_include = _r228_t0['include']['bind'](_r228_t0);
            r228_xn$createstroke$7Hrq = _r228_t0['create-stroke']['bind'](_r228_t0);
            r228_xn$setanchor$9Jrj = _r228_t0['set-anchor']['bind'](_r228_t0);
            _r228_t0['gizmo'] = r4_globalTransform;
            _r228_t0['set-width'](r4_WIDTH);
            r228_include(r4_glyphs['dotlessi.hooky'], true);
            r228_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t119() {
            var r231_currentGlyph, r231_xn$setwidth$9Jrj, r231_xn$assignunicode$7Hrq, r231_xn$startfrom$1aao, r231_xn$lineto$5sIl, r231_xn$curveto$1aao, r231_xn$cubicto$1aao, r231_xn$putshapes$9Jrj, r231_xn$reverselast$3qIs, r231_include, r231_xn$createstroke$7Hrq, r231_xn$setanchor$9Jrj, r231_balance, _r231_t0, _r231_t1, _r231_t2;
            _r231_t0 = this;
            r231_currentGlyph = _r231_t0;
            r231_xn$setwidth$9Jrj = _r231_t0['set-width']['bind'](_r231_t0);
            r231_xn$assignunicode$7Hrq = function _r231_t2(r232_code) {
                var r232_code, _r232_t0, _r232_t1;
                r231_currentGlyph['assign-unicode'](r232_code);
                return r4_unicodeGlyphs[r231_currentGlyph['unicode'][r231_currentGlyph['unicode']['length'] - 1]] = r231_currentGlyph;
            };
            r231_xn$startfrom$1aao = _r231_t0['start-from']['bind'](_r231_t0);
            r231_xn$lineto$5sIl = _r231_t0['line-to']['bind'](_r231_t0);
            r231_xn$curveto$1aao = _r231_t0['curve-to']['bind'](_r231_t0);
            r231_xn$cubicto$1aao = _r231_t0['cubic-to']['bind'](_r231_t0);
            r231_xn$putshapes$9Jrj = _r231_t0['put-shapes']['bind'](_r231_t0);
            r231_xn$reverselast$3qIs = _r231_t0['reverse-last']['bind'](_r231_t0);
            r231_include = _r231_t0['include']['bind'](_r231_t0);
            r231_xn$createstroke$7Hrq = _r231_t0['create-stroke']['bind'](_r231_t0);
            r231_xn$setanchor$9Jrj = _r231_t0['set-anchor']['bind'](_r231_t0);
            _r231_t0['gizmo'] = r4_globalTransform;
            _r231_t0['set-width'](r4_WIDTH);
            r231_include(r4_eMarks);
            r231_balance = r4_ILBALANCE;
            r231_include(r231_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r231_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r231_balance, r4_XH)['heads-to'](r4_UPWARD));
            r231_include(r4_leftwardTopSerif(r4_MIDDLE + r231_balance, r4_XH, r4_LONGJUT - r231_balance));
            r231_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r231_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t120() {
            var r234_currentGlyph, r234_xn$setwidth$9Jrj, r234_xn$assignunicode$7Hrq, r234_xn$startfrom$1aao, r234_xn$lineto$5sIl, r234_xn$curveto$1aao, r234_xn$cubicto$1aao, r234_xn$putshapes$9Jrj, r234_xn$reverselast$3qIs, r234_include, r234_xn$createstroke$7Hrq, r234_xn$setanchor$9Jrj, _r234_t0, _r234_t1, _r234_t2;
            _r234_t0 = this;
            r234_currentGlyph = _r234_t0;
            r234_xn$setwidth$9Jrj = _r234_t0['set-width']['bind'](_r234_t0);
            r234_xn$assignunicode$7Hrq = function _r234_t2(r235_code) {
                var r235_code, _r235_t0, _r235_t1;
                r234_currentGlyph['assign-unicode'](r235_code);
                return r4_unicodeGlyphs[r234_currentGlyph['unicode'][r234_currentGlyph['unicode']['length'] - 1]] = r234_currentGlyph;
            };
            r234_xn$startfrom$1aao = _r234_t0['start-from']['bind'](_r234_t0);
            r234_xn$lineto$5sIl = _r234_t0['line-to']['bind'](_r234_t0);
            r234_xn$curveto$1aao = _r234_t0['curve-to']['bind'](_r234_t0);
            r234_xn$cubicto$1aao = _r234_t0['cubic-to']['bind'](_r234_t0);
            r234_xn$putshapes$9Jrj = _r234_t0['put-shapes']['bind'](_r234_t0);
            r234_xn$reverselast$3qIs = _r234_t0['reverse-last']['bind'](_r234_t0);
            r234_include = _r234_t0['include']['bind'](_r234_t0);
            r234_xn$createstroke$7Hrq = _r234_t0['create-stroke']['bind'](_r234_t0);
            r234_xn$setanchor$9Jrj = _r234_t0['set-anchor']['bind'](_r234_t0);
            _r234_t0['gizmo'] = r4_globalTransform;
            _r234_t0['set-width'](r4_WIDTH);
            r234_xn$setwidth$9Jrj(r4_WIDTH);
            r234_xn$assignunicode$7Hrq('i');
            r234_include(r4_glyphs['dotlessi'], r4_BASE);
            r234_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t121() {
            var r237_currentGlyph, r237_xn$setwidth$9Jrj, r237_xn$assignunicode$7Hrq, r237_xn$startfrom$1aao, r237_xn$lineto$5sIl, r237_xn$curveto$1aao, r237_xn$cubicto$1aao, r237_xn$putshapes$9Jrj, r237_xn$reverselast$3qIs, r237_include, r237_xn$createstroke$7Hrq, r237_xn$setanchor$9Jrj, _r237_t0, _r237_t1, _r237_t2;
            _r237_t0 = this;
            r237_currentGlyph = _r237_t0;
            r237_xn$setwidth$9Jrj = _r237_t0['set-width']['bind'](_r237_t0);
            r237_xn$assignunicode$7Hrq = function _r237_t2(r238_code) {
                var r238_code, _r238_t0, _r238_t1;
                r237_currentGlyph['assign-unicode'](r238_code);
                return r4_unicodeGlyphs[r237_currentGlyph['unicode'][r237_currentGlyph['unicode']['length'] - 1]] = r237_currentGlyph;
            };
            r237_xn$startfrom$1aao = _r237_t0['start-from']['bind'](_r237_t0);
            r237_xn$lineto$5sIl = _r237_t0['line-to']['bind'](_r237_t0);
            r237_xn$curveto$1aao = _r237_t0['curve-to']['bind'](_r237_t0);
            r237_xn$cubicto$1aao = _r237_t0['cubic-to']['bind'](_r237_t0);
            r237_xn$putshapes$9Jrj = _r237_t0['put-shapes']['bind'](_r237_t0);
            r237_xn$reverselast$3qIs = _r237_t0['reverse-last']['bind'](_r237_t0);
            r237_include = _r237_t0['include']['bind'](_r237_t0);
            r237_xn$createstroke$7Hrq = _r237_t0['create-stroke']['bind'](_r237_t0);
            r237_xn$setanchor$9Jrj = _r237_t0['set-anchor']['bind'](_r237_t0);
            _r237_t0['gizmo'] = r4_globalTransform;
            _r237_t0['set-width'](r4_WIDTH);
            r237_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r237_include(r237_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t122() {
            var r240_currentGlyph, r240_xn$setwidth$9Jrj, r240_xn$assignunicode$7Hrq, r240_xn$startfrom$1aao, r240_xn$lineto$5sIl, r240_xn$curveto$1aao, r240_xn$cubicto$1aao, r240_xn$putshapes$9Jrj, r240_xn$reverselast$3qIs, r240_include, r240_xn$createstroke$7Hrq, r240_xn$setanchor$9Jrj, _r240_t0, _r240_t1, _r240_t2;
            _r240_t0 = this;
            r240_currentGlyph = _r240_t0;
            r240_xn$setwidth$9Jrj = _r240_t0['set-width']['bind'](_r240_t0);
            r240_xn$assignunicode$7Hrq = function _r240_t2(r241_code) {
                var r241_code, _r241_t0, _r241_t1;
                r240_currentGlyph['assign-unicode'](r241_code);
                return r4_unicodeGlyphs[r240_currentGlyph['unicode'][r240_currentGlyph['unicode']['length'] - 1]] = r240_currentGlyph;
            };
            r240_xn$startfrom$1aao = _r240_t0['start-from']['bind'](_r240_t0);
            r240_xn$lineto$5sIl = _r240_t0['line-to']['bind'](_r240_t0);
            r240_xn$curveto$1aao = _r240_t0['curve-to']['bind'](_r240_t0);
            r240_xn$cubicto$1aao = _r240_t0['cubic-to']['bind'](_r240_t0);
            r240_xn$putshapes$9Jrj = _r240_t0['put-shapes']['bind'](_r240_t0);
            r240_xn$reverselast$3qIs = _r240_t0['reverse-last']['bind'](_r240_t0);
            r240_include = _r240_t0['include']['bind'](_r240_t0);
            r240_xn$createstroke$7Hrq = _r240_t0['create-stroke']['bind'](_r240_t0);
            r240_xn$setanchor$9Jrj = _r240_t0['set-anchor']['bind'](_r240_t0);
            _r240_t0['gizmo'] = r4_globalTransform;
            _r240_t0['set-width'](r4_WIDTH);
            r240_include(r4_glyphs['dotlessj.straight'], r4_BASE);
            r240_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t123() {
            var r243_currentGlyph, r243_xn$setwidth$9Jrj, r243_xn$assignunicode$7Hrq, r243_xn$startfrom$1aao, r243_xn$lineto$5sIl, r243_xn$curveto$1aao, r243_xn$cubicto$1aao, r243_xn$putshapes$9Jrj, r243_xn$reverselast$3qIs, r243_include, r243_xn$createstroke$7Hrq, r243_xn$setanchor$9Jrj, _r243_t0, _r243_t1, _r243_t2;
            _r243_t0 = this;
            r243_currentGlyph = _r243_t0;
            r243_xn$setwidth$9Jrj = _r243_t0['set-width']['bind'](_r243_t0);
            r243_xn$assignunicode$7Hrq = function _r243_t2(r244_code) {
                var r244_code, _r244_t0, _r244_t1;
                r243_currentGlyph['assign-unicode'](r244_code);
                return r4_unicodeGlyphs[r243_currentGlyph['unicode'][r243_currentGlyph['unicode']['length'] - 1]] = r243_currentGlyph;
            };
            r243_xn$startfrom$1aao = _r243_t0['start-from']['bind'](_r243_t0);
            r243_xn$lineto$5sIl = _r243_t0['line-to']['bind'](_r243_t0);
            r243_xn$curveto$1aao = _r243_t0['curve-to']['bind'](_r243_t0);
            r243_xn$cubicto$1aao = _r243_t0['cubic-to']['bind'](_r243_t0);
            r243_xn$putshapes$9Jrj = _r243_t0['put-shapes']['bind'](_r243_t0);
            r243_xn$reverselast$3qIs = _r243_t0['reverse-last']['bind'](_r243_t0);
            r243_include = _r243_t0['include']['bind'](_r243_t0);
            r243_xn$createstroke$7Hrq = _r243_t0['create-stroke']['bind'](_r243_t0);
            r243_xn$setanchor$9Jrj = _r243_t0['set-anchor']['bind'](_r243_t0);
            _r243_t0['gizmo'] = r4_globalTransform;
            _r243_t0['set-width'](r4_WIDTH);
            r243_xn$setwidth$9Jrj(r4_WIDTH);
            r243_xn$assignunicode$7Hrq('j');
            r243_include(r4_glyphs['dotlessj'], r4_BASE);
            r243_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t124() {
            var r246_currentGlyph, r246_xn$setwidth$9Jrj, r246_xn$assignunicode$7Hrq, r246_xn$startfrom$1aao, r246_xn$lineto$5sIl, r246_xn$curveto$1aao, r246_xn$cubicto$1aao, r246_xn$putshapes$9Jrj, r246_xn$reverselast$3qIs, r246_include, r246_xn$createstroke$7Hrq, r246_xn$setanchor$9Jrj, _r246_t0, _r246_t1, _r246_t2;
            _r246_t0 = this;
            r246_currentGlyph = _r246_t0;
            r246_xn$setwidth$9Jrj = _r246_t0['set-width']['bind'](_r246_t0);
            r246_xn$assignunicode$7Hrq = function _r246_t2(r247_code) {
                var r247_code, _r247_t0, _r247_t1;
                r246_currentGlyph['assign-unicode'](r247_code);
                return r4_unicodeGlyphs[r246_currentGlyph['unicode'][r246_currentGlyph['unicode']['length'] - 1]] = r246_currentGlyph;
            };
            r246_xn$startfrom$1aao = _r246_t0['start-from']['bind'](_r246_t0);
            r246_xn$lineto$5sIl = _r246_t0['line-to']['bind'](_r246_t0);
            r246_xn$curveto$1aao = _r246_t0['curve-to']['bind'](_r246_t0);
            r246_xn$cubicto$1aao = _r246_t0['cubic-to']['bind'](_r246_t0);
            r246_xn$putshapes$9Jrj = _r246_t0['put-shapes']['bind'](_r246_t0);
            r246_xn$reverselast$3qIs = _r246_t0['reverse-last']['bind'](_r246_t0);
            r246_include = _r246_t0['include']['bind'](_r246_t0);
            r246_xn$createstroke$7Hrq = _r246_t0['create-stroke']['bind'](_r246_t0);
            r246_xn$setanchor$9Jrj = _r246_t0['set-anchor']['bind'](_r246_t0);
            _r246_t0['gizmo'] = r4_globalTransform;
            _r246_t0['set-width'](r4_WIDTH);
            r246_include(r4_bMarks);
            r246_include(r246_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t125() {
            var r249_currentGlyph, r249_xn$setwidth$9Jrj, r249_xn$assignunicode$7Hrq, r249_xn$startfrom$1aao, r249_xn$lineto$5sIl, r249_xn$curveto$1aao, r249_xn$cubicto$1aao, r249_xn$putshapes$9Jrj, r249_xn$reverselast$3qIs, r249_include, r249_xn$createstroke$7Hrq, r249_xn$setanchor$9Jrj, _r249_t0, _r249_t1, _r249_t2;
            _r249_t0 = this;
            r249_currentGlyph = _r249_t0;
            r249_xn$setwidth$9Jrj = _r249_t0['set-width']['bind'](_r249_t0);
            r249_xn$assignunicode$7Hrq = function _r249_t2(r250_code) {
                var r250_code, _r250_t0, _r250_t1;
                r249_currentGlyph['assign-unicode'](r250_code);
                return r4_unicodeGlyphs[r249_currentGlyph['unicode'][r249_currentGlyph['unicode']['length'] - 1]] = r249_currentGlyph;
            };
            r249_xn$startfrom$1aao = _r249_t0['start-from']['bind'](_r249_t0);
            r249_xn$lineto$5sIl = _r249_t0['line-to']['bind'](_r249_t0);
            r249_xn$curveto$1aao = _r249_t0['curve-to']['bind'](_r249_t0);
            r249_xn$cubicto$1aao = _r249_t0['cubic-to']['bind'](_r249_t0);
            r249_xn$putshapes$9Jrj = _r249_t0['put-shapes']['bind'](_r249_t0);
            r249_xn$reverselast$3qIs = _r249_t0['reverse-last']['bind'](_r249_t0);
            r249_include = _r249_t0['include']['bind'](_r249_t0);
            r249_xn$createstroke$7Hrq = _r249_t0['create-stroke']['bind'](_r249_t0);
            r249_xn$setanchor$9Jrj = _r249_t0['set-anchor']['bind'](_r249_t0);
            _r249_t0['gizmo'] = r4_globalTransform;
            _r249_t0['set-width'](r4_WIDTH);
            r249_include(r4_bMarks);
            r249_include(r4_glyphs['l.straight']);
            r249_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t126() {
            var r252_currentGlyph, r252_xn$setwidth$9Jrj, r252_xn$assignunicode$7Hrq, r252_xn$startfrom$1aao, r252_xn$lineto$5sIl, r252_xn$curveto$1aao, r252_xn$cubicto$1aao, r252_xn$putshapes$9Jrj, r252_xn$reverselast$3qIs, r252_include, r252_xn$createstroke$7Hrq, r252_xn$setanchor$9Jrj, _r252_t0, _r252_t1, _r252_t2;
            _r252_t0 = this;
            r252_currentGlyph = _r252_t0;
            r252_xn$setwidth$9Jrj = _r252_t0['set-width']['bind'](_r252_t0);
            r252_xn$assignunicode$7Hrq = function _r252_t2(r253_code) {
                var r253_code, _r253_t0, _r253_t1;
                r252_currentGlyph['assign-unicode'](r253_code);
                return r4_unicodeGlyphs[r252_currentGlyph['unicode'][r252_currentGlyph['unicode']['length'] - 1]] = r252_currentGlyph;
            };
            r252_xn$startfrom$1aao = _r252_t0['start-from']['bind'](_r252_t0);
            r252_xn$lineto$5sIl = _r252_t0['line-to']['bind'](_r252_t0);
            r252_xn$curveto$1aao = _r252_t0['curve-to']['bind'](_r252_t0);
            r252_xn$cubicto$1aao = _r252_t0['cubic-to']['bind'](_r252_t0);
            r252_xn$putshapes$9Jrj = _r252_t0['put-shapes']['bind'](_r252_t0);
            r252_xn$reverselast$3qIs = _r252_t0['reverse-last']['bind'](_r252_t0);
            r252_include = _r252_t0['include']['bind'](_r252_t0);
            r252_xn$createstroke$7Hrq = _r252_t0['create-stroke']['bind'](_r252_t0);
            r252_xn$setanchor$9Jrj = _r252_t0['set-anchor']['bind'](_r252_t0);
            _r252_t0['gizmo'] = r4_globalTransform;
            _r252_t0['set-width'](r4_WIDTH);
            r252_include(r4_bMarks);
            r252_include(r4_glyphs['l.hooky']);
            r252_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t127() {
            var r255_currentGlyph, r255_xn$setwidth$9Jrj, r255_xn$assignunicode$7Hrq, r255_xn$startfrom$1aao, r255_xn$lineto$5sIl, r255_xn$curveto$1aao, r255_xn$cubicto$1aao, r255_xn$putshapes$9Jrj, r255_xn$reverselast$3qIs, r255_include, r255_xn$createstroke$7Hrq, r255_xn$setanchor$9Jrj, r255_balance, _r255_t0, _r255_t1, _r255_t2;
            _r255_t0 = this;
            r255_currentGlyph = _r255_t0;
            r255_xn$setwidth$9Jrj = _r255_t0['set-width']['bind'](_r255_t0);
            r255_xn$assignunicode$7Hrq = function _r255_t2(r256_code) {
                var r256_code, _r256_t0, _r256_t1;
                r255_currentGlyph['assign-unicode'](r256_code);
                return r4_unicodeGlyphs[r255_currentGlyph['unicode'][r255_currentGlyph['unicode']['length'] - 1]] = r255_currentGlyph;
            };
            r255_xn$startfrom$1aao = _r255_t0['start-from']['bind'](_r255_t0);
            r255_xn$lineto$5sIl = _r255_t0['line-to']['bind'](_r255_t0);
            r255_xn$curveto$1aao = _r255_t0['curve-to']['bind'](_r255_t0);
            r255_xn$cubicto$1aao = _r255_t0['cubic-to']['bind'](_r255_t0);
            r255_xn$putshapes$9Jrj = _r255_t0['put-shapes']['bind'](_r255_t0);
            r255_xn$reverselast$3qIs = _r255_t0['reverse-last']['bind'](_r255_t0);
            r255_include = _r255_t0['include']['bind'](_r255_t0);
            r255_xn$createstroke$7Hrq = _r255_t0['create-stroke']['bind'](_r255_t0);
            r255_xn$setanchor$9Jrj = _r255_t0['set-anchor']['bind'](_r255_t0);
            _r255_t0['gizmo'] = r4_globalTransform;
            _r255_t0['set-width'](r4_WIDTH);
            r255_include(r4_bMarks);
            r255_balance = r4_ILBALANCE;
            r255_include(r255_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r255_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r255_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r255_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r255_balance, r4_CAP, r4_LONGJUT - r255_balance));
            r255_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t128() {
            var r258_currentGlyph, r258_xn$setwidth$9Jrj, r258_xn$assignunicode$7Hrq, r258_xn$startfrom$1aao, r258_xn$lineto$5sIl, r258_xn$curveto$1aao, r258_xn$cubicto$1aao, r258_xn$putshapes$9Jrj, r258_xn$reverselast$3qIs, r258_include, r258_xn$createstroke$7Hrq, r258_xn$setanchor$9Jrj, r258_TURN, _r258_t0, _r258_t1, _r258_t2;
            _r258_t0 = this;
            r258_currentGlyph = _r258_t0;
            r258_xn$setwidth$9Jrj = _r258_t0['set-width']['bind'](_r258_t0);
            r258_xn$assignunicode$7Hrq = function _r258_t2(r259_code) {
                var r259_code, _r259_t0, _r259_t1;
                r258_currentGlyph['assign-unicode'](r259_code);
                return r4_unicodeGlyphs[r258_currentGlyph['unicode'][r258_currentGlyph['unicode']['length'] - 1]] = r258_currentGlyph;
            };
            r258_xn$startfrom$1aao = _r258_t0['start-from']['bind'](_r258_t0);
            r258_xn$lineto$5sIl = _r258_t0['line-to']['bind'](_r258_t0);
            r258_xn$curveto$1aao = _r258_t0['curve-to']['bind'](_r258_t0);
            r258_xn$cubicto$1aao = _r258_t0['cubic-to']['bind'](_r258_t0);
            r258_xn$putshapes$9Jrj = _r258_t0['put-shapes']['bind'](_r258_t0);
            r258_xn$reverselast$3qIs = _r258_t0['reverse-last']['bind'](_r258_t0);
            r258_include = _r258_t0['include']['bind'](_r258_t0);
            r258_xn$createstroke$7Hrq = _r258_t0['create-stroke']['bind'](_r258_t0);
            r258_xn$setanchor$9Jrj = _r258_t0['set-anchor']['bind'](_r258_t0);
            _r258_t0['gizmo'] = r4_globalTransform;
            _r258_t0['set-width'](r4_WIDTH);
            r258_xn$setwidth$9Jrj(r4_WIDTH);
            r258_xn$assignunicode$7Hrq('x');
            r258_include(r4_eMarks);
            r258_TURN = r4_XH * 0.1;
            r258_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r258_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t129() {
            var r261_currentGlyph, r261_xn$setwidth$9Jrj, r261_xn$assignunicode$7Hrq, r261_xn$startfrom$1aao, r261_xn$lineto$5sIl, r261_xn$curveto$1aao, r261_xn$cubicto$1aao, r261_xn$putshapes$9Jrj, r261_xn$reverselast$3qIs, r261_include, r261_xn$createstroke$7Hrq, r261_xn$setanchor$9Jrj, r261_TURN, _r261_t0, _r261_t1, _r261_t2;
            _r261_t0 = this;
            r261_currentGlyph = _r261_t0;
            r261_xn$setwidth$9Jrj = _r261_t0['set-width']['bind'](_r261_t0);
            r261_xn$assignunicode$7Hrq = function _r261_t2(r262_code) {
                var r262_code, _r262_t0, _r262_t1;
                r261_currentGlyph['assign-unicode'](r262_code);
                return r4_unicodeGlyphs[r261_currentGlyph['unicode'][r261_currentGlyph['unicode']['length'] - 1]] = r261_currentGlyph;
            };
            r261_xn$startfrom$1aao = _r261_t0['start-from']['bind'](_r261_t0);
            r261_xn$lineto$5sIl = _r261_t0['line-to']['bind'](_r261_t0);
            r261_xn$curveto$1aao = _r261_t0['curve-to']['bind'](_r261_t0);
            r261_xn$cubicto$1aao = _r261_t0['cubic-to']['bind'](_r261_t0);
            r261_xn$putshapes$9Jrj = _r261_t0['put-shapes']['bind'](_r261_t0);
            r261_xn$reverselast$3qIs = _r261_t0['reverse-last']['bind'](_r261_t0);
            r261_include = _r261_t0['include']['bind'](_r261_t0);
            r261_xn$createstroke$7Hrq = _r261_t0['create-stroke']['bind'](_r261_t0);
            r261_xn$setanchor$9Jrj = _r261_t0['set-anchor']['bind'](_r261_t0);
            _r261_t0['gizmo'] = r4_globalTransform;
            _r261_t0['set-width'](r4_WIDTH);
            r261_xn$setwidth$9Jrj(r4_WIDTH);
            r261_xn$assignunicode$7Hrq('v');
            r261_include(r4_eMarks);
            r261_TURN = r4_XH * 0.9;
            r261_include(r261_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r261_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r261_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r261_include(r261_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r261_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r261_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r261_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r261_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r261_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t130() {
            var r264_currentGlyph, r264_xn$setwidth$9Jrj, r264_xn$assignunicode$7Hrq, r264_xn$startfrom$1aao, r264_xn$lineto$5sIl, r264_xn$curveto$1aao, r264_xn$cubicto$1aao, r264_xn$putshapes$9Jrj, r264_xn$reverselast$3qIs, r264_include, r264_xn$createstroke$7Hrq, r264_xn$setanchor$9Jrj, r264_TURN, r264_turn2, r264_wheight, r264_bottomStroke, r264_m1, r264_m2, _r264_t0, _r264_t1, _r264_t2;
            _r264_t0 = this;
            r264_currentGlyph = _r264_t0;
            r264_xn$setwidth$9Jrj = _r264_t0['set-width']['bind'](_r264_t0);
            r264_xn$assignunicode$7Hrq = function _r264_t2(r265_code) {
                var r265_code, _r265_t0, _r265_t1;
                r264_currentGlyph['assign-unicode'](r265_code);
                return r4_unicodeGlyphs[r264_currentGlyph['unicode'][r264_currentGlyph['unicode']['length'] - 1]] = r264_currentGlyph;
            };
            r264_xn$startfrom$1aao = _r264_t0['start-from']['bind'](_r264_t0);
            r264_xn$lineto$5sIl = _r264_t0['line-to']['bind'](_r264_t0);
            r264_xn$curveto$1aao = _r264_t0['curve-to']['bind'](_r264_t0);
            r264_xn$cubicto$1aao = _r264_t0['cubic-to']['bind'](_r264_t0);
            r264_xn$putshapes$9Jrj = _r264_t0['put-shapes']['bind'](_r264_t0);
            r264_xn$reverselast$3qIs = _r264_t0['reverse-last']['bind'](_r264_t0);
            r264_include = _r264_t0['include']['bind'](_r264_t0);
            r264_xn$createstroke$7Hrq = _r264_t0['create-stroke']['bind'](_r264_t0);
            r264_xn$setanchor$9Jrj = _r264_t0['set-anchor']['bind'](_r264_t0);
            _r264_t0['gizmo'] = r4_globalTransform;
            _r264_t0['set-width'](r4_WIDTH);
            r264_xn$setwidth$9Jrj(r4_WIDTH);
            r264_xn$assignunicode$7Hrq('w');
            r264_include(r4_eMarks);
            r264_TURN = r4_XH * 0.75;
            r264_turn2 = r4_XH * 0.59;
            r264_wheight = r4_XH * 0.6;
            r264_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r264_m1 = r4_WIDTH * 0.325;
            r264_m2 = r4_WIDTH * 0.675;
            r264_include(r264_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r264_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r264_TURN, r264_m1 - r264_bottomStroke / 2, 0)['set-width'](r264_bottomStroke, 0));
            r264_include(r264_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r264_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r264_TURN, r264_m2 + r264_bottomStroke / 2, 0)['set-width'](0, r264_bottomStroke));
            r264_include(r264_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r264_bottomStroke / 2, r264_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r264_bottomStroke)['line-to'](r4_MIDDLE + r264_bottomStroke / 2, r264_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r264_bottomStroke / 2, (1 - 0.1) * r264_turn2, r264_m1 + r264_bottomStroke / 2, 0)['set-width'](0, r264_bottomStroke));
            r264_include(r264_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r264_bottomStroke / 2, r264_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r264_bottomStroke, 0)['line-to'](r4_MIDDLE - r264_bottomStroke / 2, r264_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r264_bottomStroke / 2, (1 - 0.1) * r264_turn2, r264_m2 - r264_bottomStroke / 2, 0)['set-width'](r264_bottomStroke, 0));
            r264_xn$startfrom$1aao(r264_m1 + r264_bottomStroke / 2, 0);
            r264_xn$lineto$5sIl(r264_m1 - r264_bottomStroke / 2, 0);
            r264_xn$lineto$5sIl(r264_m1, r264_bottomStroke);
            r264_xn$startfrom$1aao(r264_m2 + r264_bottomStroke / 2, 0);
            r264_xn$lineto$5sIl(r264_m2 - r264_bottomStroke / 2, 0);
            r264_xn$lineto$5sIl(r264_m2, r264_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t131() {
            var r267_currentGlyph, r267_xn$setwidth$9Jrj, r267_xn$assignunicode$7Hrq, r267_xn$startfrom$1aao, r267_xn$lineto$5sIl, r267_xn$curveto$1aao, r267_xn$cubicto$1aao, r267_xn$putshapes$9Jrj, r267_xn$reverselast$3qIs, r267_include, r267_xn$createstroke$7Hrq, r267_xn$setanchor$9Jrj, r267_xbottom, r267_turnp, r267_xb, r267_yb, _r267_t0, _r267_t1, _r267_t2;
            _r267_t0 = this;
            r267_currentGlyph = _r267_t0;
            r267_xn$setwidth$9Jrj = _r267_t0['set-width']['bind'](_r267_t0);
            r267_xn$assignunicode$7Hrq = function _r267_t2(r268_code) {
                var r268_code, _r268_t0, _r268_t1;
                r267_currentGlyph['assign-unicode'](r268_code);
                return r4_unicodeGlyphs[r267_currentGlyph['unicode'][r267_currentGlyph['unicode']['length'] - 1]] = r267_currentGlyph;
            };
            r267_xn$startfrom$1aao = _r267_t0['start-from']['bind'](_r267_t0);
            r267_xn$lineto$5sIl = _r267_t0['line-to']['bind'](_r267_t0);
            r267_xn$curveto$1aao = _r267_t0['curve-to']['bind'](_r267_t0);
            r267_xn$cubicto$1aao = _r267_t0['cubic-to']['bind'](_r267_t0);
            r267_xn$putshapes$9Jrj = _r267_t0['put-shapes']['bind'](_r267_t0);
            r267_xn$reverselast$3qIs = _r267_t0['reverse-last']['bind'](_r267_t0);
            r267_include = _r267_t0['include']['bind'](_r267_t0);
            r267_xn$createstroke$7Hrq = _r267_t0['create-stroke']['bind'](_r267_t0);
            r267_xn$setanchor$9Jrj = _r267_t0['set-anchor']['bind'](_r267_t0);
            _r267_t0['gizmo'] = r4_globalTransform;
            _r267_t0['set-width'](r4_WIDTH);
            r267_xn$setwidth$9Jrj(r4_WIDTH);
            r267_xn$assignunicode$7Hrq('y');
            r267_include(r4_pMarks);
            r267_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r267_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r267_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r267_yb = r0_mix(0, r4_XH, 0.1 * r267_turnp);
            r267_include(r4_xStrand(r267_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r267_include(r4_halfXStrand(r4_SB, r4_XH, r267_xb, r267_yb, 0.1 * r267_turnp, 0.4, 0.14 * r267_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t132() {
            var r270_currentGlyph, r270_xn$setwidth$9Jrj, r270_xn$assignunicode$7Hrq, r270_xn$startfrom$1aao, r270_xn$lineto$5sIl, r270_xn$curveto$1aao, r270_xn$cubicto$1aao, r270_xn$putshapes$9Jrj, r270_xn$reverselast$3qIs, r270_include, r270_xn$createstroke$7Hrq, r270_xn$setanchor$9Jrj, r270_cor, _r270_t0, _r270_t1, _r270_t2;
            _r270_t0 = this;
            r270_currentGlyph = _r270_t0;
            r270_xn$setwidth$9Jrj = _r270_t0['set-width']['bind'](_r270_t0);
            r270_xn$assignunicode$7Hrq = function _r270_t2(r271_code) {
                var r271_code, _r271_t0, _r271_t1;
                r270_currentGlyph['assign-unicode'](r271_code);
                return r4_unicodeGlyphs[r270_currentGlyph['unicode'][r270_currentGlyph['unicode']['length'] - 1]] = r270_currentGlyph;
            };
            r270_xn$startfrom$1aao = _r270_t0['start-from']['bind'](_r270_t0);
            r270_xn$lineto$5sIl = _r270_t0['line-to']['bind'](_r270_t0);
            r270_xn$curveto$1aao = _r270_t0['curve-to']['bind'](_r270_t0);
            r270_xn$cubicto$1aao = _r270_t0['cubic-to']['bind'](_r270_t0);
            r270_xn$putshapes$9Jrj = _r270_t0['put-shapes']['bind'](_r270_t0);
            r270_xn$reverselast$3qIs = _r270_t0['reverse-last']['bind'](_r270_t0);
            r270_include = _r270_t0['include']['bind'](_r270_t0);
            r270_xn$createstroke$7Hrq = _r270_t0['create-stroke']['bind'](_r270_t0);
            r270_xn$setanchor$9Jrj = _r270_t0['set-anchor']['bind'](_r270_t0);
            _r270_t0['gizmo'] = r4_globalTransform;
            _r270_t0['set-width'](r4_WIDTH);
            r270_xn$setwidth$9Jrj(r4_WIDTH);
            r270_xn$assignunicode$7Hrq('z');
            r270_include(r4_eMarks);
            r270_cor = 1.2;
            r270_include(r270_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r270_include(r270_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r270_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r270_xn$lineto$5sIl(r4_SB + r4_STROKE * r270_cor, r4_STROKE);
            r270_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r270_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r270_cor, r4_XH - r4_STROKE);
            r270_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t133() {
            var r273_currentGlyph, r273_xn$setwidth$9Jrj, r273_xn$assignunicode$7Hrq, r273_xn$startfrom$1aao, r273_xn$lineto$5sIl, r273_xn$curveto$1aao, r273_xn$cubicto$1aao, r273_xn$putshapes$9Jrj, r273_xn$reverselast$3qIs, r273_include, r273_xn$createstroke$7Hrq, r273_xn$setanchor$9Jrj, r273_TURN, r273_rturn, r273_right, r273_attach, r273_attach2, r273_fine, _r273_t0, _r273_t1, _r273_t2;
            _r273_t0 = this;
            r273_currentGlyph = _r273_t0;
            r273_xn$setwidth$9Jrj = _r273_t0['set-width']['bind'](_r273_t0);
            r273_xn$assignunicode$7Hrq = function _r273_t2(r274_code) {
                var r274_code, _r274_t0, _r274_t1;
                r273_currentGlyph['assign-unicode'](r274_code);
                return r4_unicodeGlyphs[r273_currentGlyph['unicode'][r273_currentGlyph['unicode']['length'] - 1]] = r273_currentGlyph;
            };
            r273_xn$startfrom$1aao = _r273_t0['start-from']['bind'](_r273_t0);
            r273_xn$lineto$5sIl = _r273_t0['line-to']['bind'](_r273_t0);
            r273_xn$curveto$1aao = _r273_t0['curve-to']['bind'](_r273_t0);
            r273_xn$cubicto$1aao = _r273_t0['cubic-to']['bind'](_r273_t0);
            r273_xn$putshapes$9Jrj = _r273_t0['put-shapes']['bind'](_r273_t0);
            r273_xn$reverselast$3qIs = _r273_t0['reverse-last']['bind'](_r273_t0);
            r273_include = _r273_t0['include']['bind'](_r273_t0);
            r273_xn$createstroke$7Hrq = _r273_t0['create-stroke']['bind'](_r273_t0);
            r273_xn$setanchor$9Jrj = _r273_t0['set-anchor']['bind'](_r273_t0);
            _r273_t0['gizmo'] = r4_globalTransform;
            _r273_t0['set-width'](r4_WIDTH);
            r273_xn$setwidth$9Jrj(r4_WIDTH);
            r273_xn$assignunicode$7Hrq('k');
            r273_include(r4_bMarks);
            r273_TURN = r4_XH * 0.99;
            r273_rturn = r4_XH * 0.1;
            r273_right = r4_RIGHTSB - r4_O;
            r273_attach = r4_XH * 0.4;
            r273_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r273_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r273_include(r273_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r273_include(r273_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r273_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r273_TURN, r4_SB + r4_STROKE, r273_attach)['set-width'](0, r273_fine));
            r273_include(r273_xn$createstroke$7Hrq()['start-from'](r273_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r273_right - r4_HALFSTROKE, r273_rturn + 0.05 * (r4_XH - r273_rturn), r273_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r273_fine / 2, r273_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t134() {
            var r276_currentGlyph, r276_xn$setwidth$9Jrj, r276_xn$assignunicode$7Hrq, r276_xn$startfrom$1aao, r276_xn$lineto$5sIl, r276_xn$curveto$1aao, r276_xn$cubicto$1aao, r276_xn$putshapes$9Jrj, r276_xn$reverselast$3qIs, r276_include, r276_xn$createstroke$7Hrq, r276_xn$setanchor$9Jrj, _r276_t0, _r276_t1, _r276_t2;
            _r276_t0 = this;
            r276_currentGlyph = _r276_t0;
            r276_xn$setwidth$9Jrj = _r276_t0['set-width']['bind'](_r276_t0);
            r276_xn$assignunicode$7Hrq = function _r276_t2(r277_code) {
                var r277_code, _r277_t0, _r277_t1;
                r276_currentGlyph['assign-unicode'](r277_code);
                return r4_unicodeGlyphs[r276_currentGlyph['unicode'][r276_currentGlyph['unicode']['length'] - 1]] = r276_currentGlyph;
            };
            r276_xn$startfrom$1aao = _r276_t0['start-from']['bind'](_r276_t0);
            r276_xn$lineto$5sIl = _r276_t0['line-to']['bind'](_r276_t0);
            r276_xn$curveto$1aao = _r276_t0['curve-to']['bind'](_r276_t0);
            r276_xn$cubicto$1aao = _r276_t0['cubic-to']['bind'](_r276_t0);
            r276_xn$putshapes$9Jrj = _r276_t0['put-shapes']['bind'](_r276_t0);
            r276_xn$reverselast$3qIs = _r276_t0['reverse-last']['bind'](_r276_t0);
            r276_include = _r276_t0['include']['bind'](_r276_t0);
            r276_xn$createstroke$7Hrq = _r276_t0['create-stroke']['bind'](_r276_t0);
            r276_xn$setanchor$9Jrj = _r276_t0['set-anchor']['bind'](_r276_t0);
            _r276_t0['gizmo'] = r4_globalTransform;
            _r276_t0['set-width'](r4_WIDTH);
            r276_xn$setwidth$9Jrj(r4_WIDTH);
            r276_xn$assignunicode$7Hrq('s');
            r276_include(r4_eMarks);
            r276_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r276_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r276_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t135() {
            var r279_currentGlyph, r279_xn$setwidth$9Jrj, r279_xn$assignunicode$7Hrq, r279_xn$startfrom$1aao, r279_xn$lineto$5sIl, r279_xn$curveto$1aao, r279_xn$cubicto$1aao, r279_xn$putshapes$9Jrj, r279_xn$reverselast$3qIs, r279_include, r279_xn$createstroke$7Hrq, r279_xn$setanchor$9Jrj, r279_slope, r279_expand, r279_coexpand, r279_rhookx, r279_rmiddle, _r279_t0, _r279_t1, _r279_t2;
            _r279_t0 = this;
            r279_currentGlyph = _r279_t0;
            r279_xn$setwidth$9Jrj = _r279_t0['set-width']['bind'](_r279_t0);
            r279_xn$assignunicode$7Hrq = function _r279_t2(r280_code) {
                var r280_code, _r280_t0, _r280_t1;
                r279_currentGlyph['assign-unicode'](r280_code);
                return r4_unicodeGlyphs[r279_currentGlyph['unicode'][r279_currentGlyph['unicode']['length'] - 1]] = r279_currentGlyph;
            };
            r279_xn$startfrom$1aao = _r279_t0['start-from']['bind'](_r279_t0);
            r279_xn$lineto$5sIl = _r279_t0['line-to']['bind'](_r279_t0);
            r279_xn$curveto$1aao = _r279_t0['curve-to']['bind'](_r279_t0);
            r279_xn$cubicto$1aao = _r279_t0['cubic-to']['bind'](_r279_t0);
            r279_xn$putshapes$9Jrj = _r279_t0['put-shapes']['bind'](_r279_t0);
            r279_xn$reverselast$3qIs = _r279_t0['reverse-last']['bind'](_r279_t0);
            r279_include = _r279_t0['include']['bind'](_r279_t0);
            r279_xn$createstroke$7Hrq = _r279_t0['create-stroke']['bind'](_r279_t0);
            r279_xn$setanchor$9Jrj = _r279_t0['set-anchor']['bind'](_r279_t0);
            _r279_t0['gizmo'] = r4_globalTransform;
            _r279_t0['set-width'](r4_WIDTH);
            r279_xn$setwidth$9Jrj(r4_WIDTH);
            r279_xn$assignunicode$7Hrq('r');
            r279_include(r4_eMarks);
            r279_slope = 0.015;
            r279_expand = 0.175;
            r279_coexpand = (1 - r279_expand) / 2;
            r279_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r279_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r279_rhookx - r4_HALFSTROKE, 0.5);
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r279_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r279_rmiddle, r279_rhookx, r4_KAPPA_AHOOK), r4_XO, r279_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r279_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f.upright', function _r4_t136() {
            var r282_currentGlyph, r282_xn$setwidth$9Jrj, r282_xn$assignunicode$7Hrq, r282_xn$startfrom$1aao, r282_xn$lineto$5sIl, r282_xn$curveto$1aao, r282_xn$cubicto$1aao, r282_xn$putshapes$9Jrj, r282_xn$reverselast$3qIs, r282_include, r282_xn$createstroke$7Hrq, r282_xn$setanchor$9Jrj, _r282_t0, _r282_t1, _r282_t2;
            _r282_t0 = this;
            r282_currentGlyph = _r282_t0;
            r282_xn$setwidth$9Jrj = _r282_t0['set-width']['bind'](_r282_t0);
            r282_xn$assignunicode$7Hrq = function _r282_t2(r283_code) {
                var r283_code, _r283_t0, _r283_t1;
                r282_currentGlyph['assign-unicode'](r283_code);
                return r4_unicodeGlyphs[r282_currentGlyph['unicode'][r282_currentGlyph['unicode']['length'] - 1]] = r282_currentGlyph;
            };
            r282_xn$startfrom$1aao = _r282_t0['start-from']['bind'](_r282_t0);
            r282_xn$lineto$5sIl = _r282_t0['line-to']['bind'](_r282_t0);
            r282_xn$curveto$1aao = _r282_t0['curve-to']['bind'](_r282_t0);
            r282_xn$cubicto$1aao = _r282_t0['cubic-to']['bind'](_r282_t0);
            r282_xn$putshapes$9Jrj = _r282_t0['put-shapes']['bind'](_r282_t0);
            r282_xn$reverselast$3qIs = _r282_t0['reverse-last']['bind'](_r282_t0);
            r282_include = _r282_t0['include']['bind'](_r282_t0);
            r282_xn$createstroke$7Hrq = _r282_t0['create-stroke']['bind'](_r282_t0);
            r282_xn$setanchor$9Jrj = _r282_t0['set-anchor']['bind'](_r282_t0);
            _r282_t0['gizmo'] = r4_globalTransform;
            _r282_t0['set-width'](r4_WIDTH);
            r282_xn$setwidth$9Jrj(r4_WIDTH);
            r282_include(r4_bMarks);
            r282_include(r282_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            r282_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f.italic', function _r4_t137() {
            var r285_currentGlyph, r285_xn$setwidth$9Jrj, r285_xn$assignunicode$7Hrq, r285_xn$startfrom$1aao, r285_xn$lineto$5sIl, r285_xn$curveto$1aao, r285_xn$cubicto$1aao, r285_xn$putshapes$9Jrj, r285_xn$reverselast$3qIs, r285_include, r285_xn$createstroke$7Hrq, r285_xn$setanchor$9Jrj, _r285_t0, _r285_t1, _r285_t2;
            _r285_t0 = this;
            r285_currentGlyph = _r285_t0;
            r285_xn$setwidth$9Jrj = _r285_t0['set-width']['bind'](_r285_t0);
            r285_xn$assignunicode$7Hrq = function _r285_t2(r286_code) {
                var r286_code, _r286_t0, _r286_t1;
                r285_currentGlyph['assign-unicode'](r286_code);
                return r4_unicodeGlyphs[r285_currentGlyph['unicode'][r285_currentGlyph['unicode']['length'] - 1]] = r285_currentGlyph;
            };
            r285_xn$startfrom$1aao = _r285_t0['start-from']['bind'](_r285_t0);
            r285_xn$lineto$5sIl = _r285_t0['line-to']['bind'](_r285_t0);
            r285_xn$curveto$1aao = _r285_t0['curve-to']['bind'](_r285_t0);
            r285_xn$cubicto$1aao = _r285_t0['cubic-to']['bind'](_r285_t0);
            r285_xn$putshapes$9Jrj = _r285_t0['put-shapes']['bind'](_r285_t0);
            r285_xn$reverselast$3qIs = _r285_t0['reverse-last']['bind'](_r285_t0);
            r285_include = _r285_t0['include']['bind'](_r285_t0);
            r285_xn$createstroke$7Hrq = _r285_t0['create-stroke']['bind'](_r285_t0);
            r285_xn$setanchor$9Jrj = _r285_t0['set-anchor']['bind'](_r285_t0);
            _r285_t0['gizmo'] = r4_globalTransform;
            _r285_t0['set-width'](r4_WIDTH);
            r285_xn$setwidth$9Jrj(r4_WIDTH);
            r285_include(r4_ifMarks);
            r285_include(r285_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            r285_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t138() {
            var r288_currentGlyph, r288_xn$setwidth$9Jrj, r288_xn$assignunicode$7Hrq, r288_xn$startfrom$1aao, r288_xn$lineto$5sIl, r288_xn$curveto$1aao, r288_xn$cubicto$1aao, r288_xn$putshapes$9Jrj, r288_xn$reverselast$3qIs, r288_include, r288_xn$createstroke$7Hrq, r288_xn$setanchor$9Jrj, _r288_t0, _r288_t1, _r288_t2;
            _r288_t0 = this;
            r288_currentGlyph = _r288_t0;
            r288_xn$setwidth$9Jrj = _r288_t0['set-width']['bind'](_r288_t0);
            r288_xn$assignunicode$7Hrq = function _r288_t2(r289_code) {
                var r289_code, _r289_t0, _r289_t1;
                r288_currentGlyph['assign-unicode'](r289_code);
                return r4_unicodeGlyphs[r288_currentGlyph['unicode'][r288_currentGlyph['unicode']['length'] - 1]] = r288_currentGlyph;
            };
            r288_xn$startfrom$1aao = _r288_t0['start-from']['bind'](_r288_t0);
            r288_xn$lineto$5sIl = _r288_t0['line-to']['bind'](_r288_t0);
            r288_xn$curveto$1aao = _r288_t0['curve-to']['bind'](_r288_t0);
            r288_xn$cubicto$1aao = _r288_t0['cubic-to']['bind'](_r288_t0);
            r288_xn$putshapes$9Jrj = _r288_t0['put-shapes']['bind'](_r288_t0);
            r288_xn$reverselast$3qIs = _r288_t0['reverse-last']['bind'](_r288_t0);
            r288_include = _r288_t0['include']['bind'](_r288_t0);
            r288_xn$createstroke$7Hrq = _r288_t0['create-stroke']['bind'](_r288_t0);
            r288_xn$setanchor$9Jrj = _r288_t0['set-anchor']['bind'](_r288_t0);
            _r288_t0['gizmo'] = r4_globalTransform;
            _r288_t0['set-width'](r4_WIDTH);
            r288_xn$setwidth$9Jrj(r4_WIDTH);
            r288_xn$assignunicode$7Hrq('f');
            if (r4_para['italicangle'] > 0) {
                r288_include(r4_glyphs['f.italic'], true);
            } else {
                r288_include(r4_glyphs['f.upright'], true);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t139() {
            var r291_currentGlyph, r291_xn$setwidth$9Jrj, r291_xn$assignunicode$7Hrq, r291_xn$startfrom$1aao, r291_xn$lineto$5sIl, r291_xn$curveto$1aao, r291_xn$cubicto$1aao, r291_xn$putshapes$9Jrj, r291_xn$reverselast$3qIs, r291_include, r291_xn$createstroke$7Hrq, r291_xn$setanchor$9Jrj, r291_sw, r291_eleft, r291_turn, _r291_t0, _r291_t1, _r291_t2;
            _r291_t0 = this;
            r291_currentGlyph = _r291_t0;
            r291_xn$setwidth$9Jrj = _r291_t0['set-width']['bind'](_r291_t0);
            r291_xn$assignunicode$7Hrq = function _r291_t2(r292_code) {
                var r292_code, _r292_t0, _r292_t1;
                r291_currentGlyph['assign-unicode'](r292_code);
                return r4_unicodeGlyphs[r291_currentGlyph['unicode'][r291_currentGlyph['unicode']['length'] - 1]] = r291_currentGlyph;
            };
            r291_xn$startfrom$1aao = _r291_t0['start-from']['bind'](_r291_t0);
            r291_xn$lineto$5sIl = _r291_t0['line-to']['bind'](_r291_t0);
            r291_xn$curveto$1aao = _r291_t0['curve-to']['bind'](_r291_t0);
            r291_xn$cubicto$1aao = _r291_t0['cubic-to']['bind'](_r291_t0);
            r291_xn$putshapes$9Jrj = _r291_t0['put-shapes']['bind'](_r291_t0);
            r291_xn$reverselast$3qIs = _r291_t0['reverse-last']['bind'](_r291_t0);
            r291_include = _r291_t0['include']['bind'](_r291_t0);
            r291_xn$createstroke$7Hrq = _r291_t0['create-stroke']['bind'](_r291_t0);
            r291_xn$setanchor$9Jrj = _r291_t0['set-anchor']['bind'](_r291_t0);
            _r291_t0['gizmo'] = r4_globalTransform;
            _r291_t0['set-width'](r4_WIDTH);
            r291_xn$setwidth$9Jrj(r4_WIDTH);
            r291_xn$assignunicode$7Hrq(198);
            r291_include(r4_capitalMarks);
            r291_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r291_eleft = r4_MIDDLE - r291_sw * 0.25;
            r291_turn = r4_XH * 0.1;
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r291_sw)['line-to'](r4_SB, r291_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r291_turn, r4_CAP, 0.27), r291_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r291_sw * 0.8));
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r4_SB + r291_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r291_sw)['line-to'](r291_eleft + r291_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r291_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r291_sw)['line-to'](r291_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r291_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r291_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r291_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r291_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t140() {
            var r294_currentGlyph, r294_xn$setwidth$9Jrj, r294_xn$assignunicode$7Hrq, r294_xn$startfrom$1aao, r294_xn$lineto$5sIl, r294_xn$curveto$1aao, r294_xn$cubicto$1aao, r294_xn$putshapes$9Jrj, r294_xn$reverselast$3qIs, r294_include, r294_xn$createstroke$7Hrq, r294_xn$setanchor$9Jrj, r294_sw, r294_eleft, _r294_t0, _r294_t1, _r294_t2;
            _r294_t0 = this;
            r294_currentGlyph = _r294_t0;
            r294_xn$setwidth$9Jrj = _r294_t0['set-width']['bind'](_r294_t0);
            r294_xn$assignunicode$7Hrq = function _r294_t2(r295_code) {
                var r295_code, _r295_t0, _r295_t1;
                r294_currentGlyph['assign-unicode'](r295_code);
                return r4_unicodeGlyphs[r294_currentGlyph['unicode'][r294_currentGlyph['unicode']['length'] - 1]] = r294_currentGlyph;
            };
            r294_xn$startfrom$1aao = _r294_t0['start-from']['bind'](_r294_t0);
            r294_xn$lineto$5sIl = _r294_t0['line-to']['bind'](_r294_t0);
            r294_xn$curveto$1aao = _r294_t0['curve-to']['bind'](_r294_t0);
            r294_xn$cubicto$1aao = _r294_t0['cubic-to']['bind'](_r294_t0);
            r294_xn$putshapes$9Jrj = _r294_t0['put-shapes']['bind'](_r294_t0);
            r294_xn$reverselast$3qIs = _r294_t0['reverse-last']['bind'](_r294_t0);
            r294_include = _r294_t0['include']['bind'](_r294_t0);
            r294_xn$createstroke$7Hrq = _r294_t0['create-stroke']['bind'](_r294_t0);
            r294_xn$setanchor$9Jrj = _r294_t0['set-anchor']['bind'](_r294_t0);
            _r294_t0['gizmo'] = r4_globalTransform;
            _r294_t0['set-width'](r4_WIDTH);
            r294_xn$setwidth$9Jrj(r4_WIDTH);
            r294_xn$assignunicode$7Hrq(338);
            r294_include(r4_capitalMarks);
            r294_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r294_eleft = r4_MIDDLE;
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r294_eleft + 1, r4_CAP)['set-width'](r294_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r294_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r294_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r294_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r294_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r294_sw)['line-to'](r294_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r294_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r294_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r294_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r294_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t141() {
            var r297_currentGlyph, r297_xn$setwidth$9Jrj, r297_xn$assignunicode$7Hrq, r297_xn$startfrom$1aao, r297_xn$lineto$5sIl, r297_xn$curveto$1aao, r297_xn$cubicto$1aao, r297_xn$putshapes$9Jrj, r297_xn$reverselast$3qIs, r297_include, r297_xn$createstroke$7Hrq, r297_xn$setanchor$9Jrj, r297_sw, r297_eLeft, r297_eMiddle, r297_barbottom, r297_hookx, r297_eHookMiddle, r297_sma, r297_smb, _r297_t0, _r297_t1, _r297_t2;
            _r297_t0 = this;
            r297_currentGlyph = _r297_t0;
            r297_xn$setwidth$9Jrj = _r297_t0['set-width']['bind'](_r297_t0);
            r297_xn$assignunicode$7Hrq = function _r297_t2(r298_code) {
                var r298_code, _r298_t0, _r298_t1;
                r297_currentGlyph['assign-unicode'](r298_code);
                return r4_unicodeGlyphs[r297_currentGlyph['unicode'][r297_currentGlyph['unicode']['length'] - 1]] = r297_currentGlyph;
            };
            r297_xn$startfrom$1aao = _r297_t0['start-from']['bind'](_r297_t0);
            r297_xn$lineto$5sIl = _r297_t0['line-to']['bind'](_r297_t0);
            r297_xn$curveto$1aao = _r297_t0['curve-to']['bind'](_r297_t0);
            r297_xn$cubicto$1aao = _r297_t0['cubic-to']['bind'](_r297_t0);
            r297_xn$putshapes$9Jrj = _r297_t0['put-shapes']['bind'](_r297_t0);
            r297_xn$reverselast$3qIs = _r297_t0['reverse-last']['bind'](_r297_t0);
            r297_include = _r297_t0['include']['bind'](_r297_t0);
            r297_xn$createstroke$7Hrq = _r297_t0['create-stroke']['bind'](_r297_t0);
            r297_xn$setanchor$9Jrj = _r297_t0['set-anchor']['bind'](_r297_t0);
            _r297_t0['gizmo'] = r4_globalTransform;
            _r297_t0['set-width'](r4_WIDTH);
            r297_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r297_eLeft = r4_MIDDLE - r297_sw / 2 * r4_ITALICCOR;
            r297_eMiddle = r0_mix(r297_eLeft, r4_RIGHTSB, 0.5);
            r297_barbottom = r4_XH * r4_EBARPOS;
            r297_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r297_eHookMiddle = r0_mix(r297_eLeft, r297_hookx, 0.5);
            r297_sma = r4_SMALLSMOOTHA * 0.6;
            r297_smb = r4_SMALLSMOOTHB * 0.6;
            r297_include(r297_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r297_barbottom)['heads-to'](r4_UPWARD)['set-width'](r297_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r297_smb)['arc-vh-to'](r297_eMiddle, r4_XO)['arc-hv-to'](r297_eLeft, r4_XH - r297_sma)['line-to'](r297_eLeft, r297_smb)['arc-vh-to'](r297_eHookMiddle, r4_O)['curve-to'](r0_mix(r297_eHookMiddle, r297_hookx, r4_KAPPA_HOOK), r4_O, r297_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r297_include(r297_xn$createstroke$7Hrq()['start-from'](r297_eLeft + r297_sw / 2, r297_barbottom)['set-width'](r297_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r297_sw / 2, r297_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t142() {
            var r300_currentGlyph, r300_xn$setwidth$9Jrj, r300_xn$assignunicode$7Hrq, r300_xn$startfrom$1aao, r300_xn$lineto$5sIl, r300_xn$curveto$1aao, r300_xn$cubicto$1aao, r300_xn$putshapes$9Jrj, r300_xn$reverselast$3qIs, r300_include, r300_xn$createstroke$7Hrq, r300_xn$setanchor$9Jrj, r300_sw, r300_bartop, r300_abarRight, r300_m1, r300_lowmiddle, r300_barsmooth, r300_sma, r300_smb, _r300_t0, _r300_t1, _r300_t2;
            _r300_t0 = this;
            r300_currentGlyph = _r300_t0;
            r300_xn$setwidth$9Jrj = _r300_t0['set-width']['bind'](_r300_t0);
            r300_xn$assignunicode$7Hrq = function _r300_t2(r301_code) {
                var r301_code, _r301_t0, _r301_t1;
                r300_currentGlyph['assign-unicode'](r301_code);
                return r4_unicodeGlyphs[r300_currentGlyph['unicode'][r300_currentGlyph['unicode']['length'] - 1]] = r300_currentGlyph;
            };
            r300_xn$startfrom$1aao = _r300_t0['start-from']['bind'](_r300_t0);
            r300_xn$lineto$5sIl = _r300_t0['line-to']['bind'](_r300_t0);
            r300_xn$curveto$1aao = _r300_t0['curve-to']['bind'](_r300_t0);
            r300_xn$cubicto$1aao = _r300_t0['cubic-to']['bind'](_r300_t0);
            r300_xn$putshapes$9Jrj = _r300_t0['put-shapes']['bind'](_r300_t0);
            r300_xn$reverselast$3qIs = _r300_t0['reverse-last']['bind'](_r300_t0);
            r300_include = _r300_t0['include']['bind'](_r300_t0);
            r300_xn$createstroke$7Hrq = _r300_t0['create-stroke']['bind'](_r300_t0);
            r300_xn$setanchor$9Jrj = _r300_t0['set-anchor']['bind'](_r300_t0);
            _r300_t0['gizmo'] = r4_globalTransform;
            _r300_t0['set-width'](r4_WIDTH);
            r300_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r300_bartop = r4_XH * r4_BARPOS + r300_sw;
            r300_abarRight = r4_MIDDLE + r300_sw / 2 * r4_ITALICCOR;
            r300_m1 = r0_mix(r4_SB, r300_abarRight, 0.5);
            r300_lowmiddle = r0_mix(r4_SB, r300_abarRight - r300_sw, 0.7);
            r300_barsmooth = r0_mix(r4_SB, r300_abarRight, 0.6);
            r300_sma = r4_SMALLSMOOTHA * 0.6;
            r300_smb = r4_SMALLSMOOTHB * 0.6;
            r300_include(r300_xn$createstroke$7Hrq()['start-from'](r300_abarRight, r4_XH - r300_sma)['set-width'](r300_sw, 0)['arc-vh-to'](r300_m1, r4_XO)['curve-to'](r0_mix(r300_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r300_include(r300_xn$createstroke$7Hrq()['start-from'](r300_abarRight, r300_smb)['set-width'](0, r300_sw)['arc-vh-to'](r300_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r300_bartop, r300_smb / (r300_sma + r300_smb)))['arc-vh-to'](r300_barsmooth, r300_bartop)['line-to'](r300_abarRight, r300_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t143() {
            var r303_currentGlyph, r303_xn$setwidth$9Jrj, r303_xn$assignunicode$7Hrq, r303_xn$startfrom$1aao, r303_xn$lineto$5sIl, r303_xn$curveto$1aao, r303_xn$cubicto$1aao, r303_xn$putshapes$9Jrj, r303_xn$reverselast$3qIs, r303_include, r303_xn$createstroke$7Hrq, r303_xn$setanchor$9Jrj, r303_sw, r303_bartop, r303_abarRight, r303_m1, r303_lowmiddle, r303_barsmooth, r303_sma, r303_smb, _r303_t0, _r303_t1, _r303_t2;
            _r303_t0 = this;
            r303_currentGlyph = _r303_t0;
            r303_xn$setwidth$9Jrj = _r303_t0['set-width']['bind'](_r303_t0);
            r303_xn$assignunicode$7Hrq = function _r303_t2(r304_code) {
                var r304_code, _r304_t0, _r304_t1;
                r303_currentGlyph['assign-unicode'](r304_code);
                return r4_unicodeGlyphs[r303_currentGlyph['unicode'][r303_currentGlyph['unicode']['length'] - 1]] = r303_currentGlyph;
            };
            r303_xn$startfrom$1aao = _r303_t0['start-from']['bind'](_r303_t0);
            r303_xn$lineto$5sIl = _r303_t0['line-to']['bind'](_r303_t0);
            r303_xn$curveto$1aao = _r303_t0['curve-to']['bind'](_r303_t0);
            r303_xn$cubicto$1aao = _r303_t0['cubic-to']['bind'](_r303_t0);
            r303_xn$putshapes$9Jrj = _r303_t0['put-shapes']['bind'](_r303_t0);
            r303_xn$reverselast$3qIs = _r303_t0['reverse-last']['bind'](_r303_t0);
            r303_include = _r303_t0['include']['bind'](_r303_t0);
            r303_xn$createstroke$7Hrq = _r303_t0['create-stroke']['bind'](_r303_t0);
            r303_xn$setanchor$9Jrj = _r303_t0['set-anchor']['bind'](_r303_t0);
            _r303_t0['gizmo'] = r4_globalTransform;
            _r303_t0['set-width'](r4_WIDTH);
            r303_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r303_bartop = r4_XH * r4_BARPOS + r303_sw;
            r303_abarRight = r4_MIDDLE + r303_sw / 2 * r4_ITALICCOR;
            r303_m1 = r0_mix(r4_SB, r303_abarRight, 0.5);
            r303_lowmiddle = r0_mix(r4_SB, r303_abarRight - r303_sw, 0.7);
            r303_barsmooth = r0_mix(r4_SB, r303_abarRight, 0.6);
            r303_sma = r4_SMALLSMOOTHA * 0.6;
            r303_smb = r4_SMALLSMOOTHB * 0.6;
            r303_include(r303_xn$createstroke$7Hrq()['start-from'](r303_abarRight, r303_smb)['set-width'](0, r303_sw)['arc-vh-to'](r303_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r303_smb)['line-to'](r4_SB + r4_O, r4_XH - r303_sma)['arc-vh-to'](r303_lowmiddle, r4_XH - r4_O)['arc-hv-to'](r303_abarRight, r4_XH - r303_smb)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t144() {
            var r306_currentGlyph, r306_xn$setwidth$9Jrj, r306_xn$assignunicode$7Hrq, r306_xn$startfrom$1aao, r306_xn$lineto$5sIl, r306_xn$curveto$1aao, r306_xn$cubicto$1aao, r306_xn$putshapes$9Jrj, r306_xn$reverselast$3qIs, r306_include, r306_xn$createstroke$7Hrq, r306_xn$setanchor$9Jrj, _r306_t0, _r306_t1, _r306_t2;
            _r306_t0 = this;
            r306_currentGlyph = _r306_t0;
            r306_xn$setwidth$9Jrj = _r306_t0['set-width']['bind'](_r306_t0);
            r306_xn$assignunicode$7Hrq = function _r306_t2(r307_code) {
                var r307_code, _r307_t0, _r307_t1;
                r306_currentGlyph['assign-unicode'](r307_code);
                return r4_unicodeGlyphs[r306_currentGlyph['unicode'][r306_currentGlyph['unicode']['length'] - 1]] = r306_currentGlyph;
            };
            r306_xn$startfrom$1aao = _r306_t0['start-from']['bind'](_r306_t0);
            r306_xn$lineto$5sIl = _r306_t0['line-to']['bind'](_r306_t0);
            r306_xn$curveto$1aao = _r306_t0['curve-to']['bind'](_r306_t0);
            r306_xn$cubicto$1aao = _r306_t0['cubic-to']['bind'](_r306_t0);
            r306_xn$putshapes$9Jrj = _r306_t0['put-shapes']['bind'](_r306_t0);
            r306_xn$reverselast$3qIs = _r306_t0['reverse-last']['bind'](_r306_t0);
            r306_include = _r306_t0['include']['bind'](_r306_t0);
            r306_xn$createstroke$7Hrq = _r306_t0['create-stroke']['bind'](_r306_t0);
            r306_xn$setanchor$9Jrj = _r306_t0['set-anchor']['bind'](_r306_t0);
            _r306_t0['gizmo'] = r4_globalTransform;
            _r306_t0['set-width'](r4_WIDTH);
            r306_xn$setwidth$9Jrj(r4_WIDTH);
            r306_xn$assignunicode$7Hrq(230);
            r306_include(r4_eMarks);
            r306_include(r4_glyphs['ae-epart']);
            r306_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t145() {
            var r309_currentGlyph, r309_xn$setwidth$9Jrj, r309_xn$assignunicode$7Hrq, r309_xn$startfrom$1aao, r309_xn$lineto$5sIl, r309_xn$curveto$1aao, r309_xn$cubicto$1aao, r309_xn$putshapes$9Jrj, r309_xn$reverselast$3qIs, r309_include, r309_xn$createstroke$7Hrq, r309_xn$setanchor$9Jrj, _r309_t0, _r309_t1, _r309_t2;
            _r309_t0 = this;
            r309_currentGlyph = _r309_t0;
            r309_xn$setwidth$9Jrj = _r309_t0['set-width']['bind'](_r309_t0);
            r309_xn$assignunicode$7Hrq = function _r309_t2(r310_code) {
                var r310_code, _r310_t0, _r310_t1;
                r309_currentGlyph['assign-unicode'](r310_code);
                return r4_unicodeGlyphs[r309_currentGlyph['unicode'][r309_currentGlyph['unicode']['length'] - 1]] = r309_currentGlyph;
            };
            r309_xn$startfrom$1aao = _r309_t0['start-from']['bind'](_r309_t0);
            r309_xn$lineto$5sIl = _r309_t0['line-to']['bind'](_r309_t0);
            r309_xn$curveto$1aao = _r309_t0['curve-to']['bind'](_r309_t0);
            r309_xn$cubicto$1aao = _r309_t0['cubic-to']['bind'](_r309_t0);
            r309_xn$putshapes$9Jrj = _r309_t0['put-shapes']['bind'](_r309_t0);
            r309_xn$reverselast$3qIs = _r309_t0['reverse-last']['bind'](_r309_t0);
            r309_include = _r309_t0['include']['bind'](_r309_t0);
            r309_xn$createstroke$7Hrq = _r309_t0['create-stroke']['bind'](_r309_t0);
            r309_xn$setanchor$9Jrj = _r309_t0['set-anchor']['bind'](_r309_t0);
            _r309_t0['gizmo'] = r4_globalTransform;
            _r309_t0['set-width'](r4_WIDTH);
            r309_xn$setwidth$9Jrj(r4_WIDTH);
            r309_xn$assignunicode$7Hrq(339);
            r309_include(r4_eMarks);
            r309_include(r4_glyphs['ae-epart']);
            r309_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t146() {
            var r312_currentGlyph, r312_xn$setwidth$9Jrj, r312_xn$assignunicode$7Hrq, r312_xn$startfrom$1aao, r312_xn$lineto$5sIl, r312_xn$curveto$1aao, r312_xn$cubicto$1aao, r312_xn$putshapes$9Jrj, r312_xn$reverselast$3qIs, r312_include, r312_xn$createstroke$7Hrq, r312_xn$setanchor$9Jrj, _r312_t0, _r312_t1, _r312_t2;
            _r312_t0 = this;
            r312_currentGlyph = _r312_t0;
            r312_xn$setwidth$9Jrj = _r312_t0['set-width']['bind'](_r312_t0);
            r312_xn$assignunicode$7Hrq = function _r312_t2(r313_code) {
                var r313_code, _r313_t0, _r313_t1;
                r312_currentGlyph['assign-unicode'](r313_code);
                return r4_unicodeGlyphs[r312_currentGlyph['unicode'][r312_currentGlyph['unicode']['length'] - 1]] = r312_currentGlyph;
            };
            r312_xn$startfrom$1aao = _r312_t0['start-from']['bind'](_r312_t0);
            r312_xn$lineto$5sIl = _r312_t0['line-to']['bind'](_r312_t0);
            r312_xn$curveto$1aao = _r312_t0['curve-to']['bind'](_r312_t0);
            r312_xn$cubicto$1aao = _r312_t0['cubic-to']['bind'](_r312_t0);
            r312_xn$putshapes$9Jrj = _r312_t0['put-shapes']['bind'](_r312_t0);
            r312_xn$reverselast$3qIs = _r312_t0['reverse-last']['bind'](_r312_t0);
            r312_include = _r312_t0['include']['bind'](_r312_t0);
            r312_xn$createstroke$7Hrq = _r312_t0['create-stroke']['bind'](_r312_t0);
            r312_xn$setanchor$9Jrj = _r312_t0['set-anchor']['bind'](_r312_t0);
            _r312_t0['gizmo'] = r4_globalTransform;
            _r312_t0['set-width'](r4_WIDTH);
            r312_xn$assignunicode$7Hrq(208);
            r312_include(r4_glyphs['D'], r4_BASE);
            r312_include(r312_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.4), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t147() {
            var r315_currentGlyph, r315_xn$setwidth$9Jrj, r315_xn$assignunicode$7Hrq, r315_xn$startfrom$1aao, r315_xn$lineto$5sIl, r315_xn$curveto$1aao, r315_xn$cubicto$1aao, r315_xn$putshapes$9Jrj, r315_xn$reverselast$3qIs, r315_include, r315_xn$createstroke$7Hrq, r315_xn$setanchor$9Jrj, _r315_t0, _r315_t1, _r315_t2;
            _r315_t0 = this;
            r315_currentGlyph = _r315_t0;
            r315_xn$setwidth$9Jrj = _r315_t0['set-width']['bind'](_r315_t0);
            r315_xn$assignunicode$7Hrq = function _r315_t2(r316_code) {
                var r316_code, _r316_t0, _r316_t1;
                r315_currentGlyph['assign-unicode'](r316_code);
                return r4_unicodeGlyphs[r315_currentGlyph['unicode'][r315_currentGlyph['unicode']['length'] - 1]] = r315_currentGlyph;
            };
            r315_xn$startfrom$1aao = _r315_t0['start-from']['bind'](_r315_t0);
            r315_xn$lineto$5sIl = _r315_t0['line-to']['bind'](_r315_t0);
            r315_xn$curveto$1aao = _r315_t0['curve-to']['bind'](_r315_t0);
            r315_xn$cubicto$1aao = _r315_t0['cubic-to']['bind'](_r315_t0);
            r315_xn$putshapes$9Jrj = _r315_t0['put-shapes']['bind'](_r315_t0);
            r315_xn$reverselast$3qIs = _r315_t0['reverse-last']['bind'](_r315_t0);
            r315_include = _r315_t0['include']['bind'](_r315_t0);
            r315_xn$createstroke$7Hrq = _r315_t0['create-stroke']['bind'](_r315_t0);
            r315_xn$setanchor$9Jrj = _r315_t0['set-anchor']['bind'](_r315_t0);
            _r315_t0['gizmo'] = r4_globalTransform;
            _r315_t0['set-width'](r4_WIDTH);
            r315_xn$assignunicode$7Hrq(272);
            r315_include(r4_glyphs['Eth'], r4_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t148() {
            var r318_currentGlyph, r318_xn$setwidth$9Jrj, r318_xn$assignunicode$7Hrq, r318_xn$startfrom$1aao, r318_xn$lineto$5sIl, r318_xn$curveto$1aao, r318_xn$cubicto$1aao, r318_xn$putshapes$9Jrj, r318_xn$reverselast$3qIs, r318_include, r318_xn$createstroke$7Hrq, r318_xn$setanchor$9Jrj, r318_ymiddlea, _r318_t0, _r318_t1, _r318_t2;
            _r318_t0 = this;
            r318_currentGlyph = _r318_t0;
            r318_xn$setwidth$9Jrj = _r318_t0['set-width']['bind'](_r318_t0);
            r318_xn$assignunicode$7Hrq = function _r318_t2(r319_code) {
                var r319_code, _r319_t0, _r319_t1;
                r318_currentGlyph['assign-unicode'](r319_code);
                return r4_unicodeGlyphs[r318_currentGlyph['unicode'][r318_currentGlyph['unicode']['length'] - 1]] = r318_currentGlyph;
            };
            r318_xn$startfrom$1aao = _r318_t0['start-from']['bind'](_r318_t0);
            r318_xn$lineto$5sIl = _r318_t0['line-to']['bind'](_r318_t0);
            r318_xn$curveto$1aao = _r318_t0['curve-to']['bind'](_r318_t0);
            r318_xn$cubicto$1aao = _r318_t0['cubic-to']['bind'](_r318_t0);
            r318_xn$putshapes$9Jrj = _r318_t0['put-shapes']['bind'](_r318_t0);
            r318_xn$reverselast$3qIs = _r318_t0['reverse-last']['bind'](_r318_t0);
            r318_include = _r318_t0['include']['bind'](_r318_t0);
            r318_xn$createstroke$7Hrq = _r318_t0['create-stroke']['bind'](_r318_t0);
            r318_xn$setanchor$9Jrj = _r318_t0['set-anchor']['bind'](_r318_t0);
            _r318_t0['gizmo'] = r4_globalTransform;
            _r318_t0['set-width'](r4_WIDTH);
            r318_xn$setwidth$9Jrj(r4_WIDTH);
            r318_xn$assignunicode$7Hrq(240);
            r318_include(r4_bMarks);
            r318_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r318_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r318_include(r318_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r318_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r318_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r318_include(r318_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, 0))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.4)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t149() {
            var r321_currentGlyph, r321_xn$setwidth$9Jrj, r321_xn$assignunicode$7Hrq, r321_xn$startfrom$1aao, r321_xn$lineto$5sIl, r321_xn$curveto$1aao, r321_xn$cubicto$1aao, r321_xn$putshapes$9Jrj, r321_xn$reverselast$3qIs, r321_include, r321_xn$createstroke$7Hrq, r321_xn$setanchor$9Jrj, _r321_t0, _r321_t1, _r321_t2;
            _r321_t0 = this;
            r321_currentGlyph = _r321_t0;
            r321_xn$setwidth$9Jrj = _r321_t0['set-width']['bind'](_r321_t0);
            r321_xn$assignunicode$7Hrq = function _r321_t2(r322_code) {
                var r322_code, _r322_t0, _r322_t1;
                r321_currentGlyph['assign-unicode'](r322_code);
                return r4_unicodeGlyphs[r321_currentGlyph['unicode'][r321_currentGlyph['unicode']['length'] - 1]] = r321_currentGlyph;
            };
            r321_xn$startfrom$1aao = _r321_t0['start-from']['bind'](_r321_t0);
            r321_xn$lineto$5sIl = _r321_t0['line-to']['bind'](_r321_t0);
            r321_xn$curveto$1aao = _r321_t0['curve-to']['bind'](_r321_t0);
            r321_xn$cubicto$1aao = _r321_t0['cubic-to']['bind'](_r321_t0);
            r321_xn$putshapes$9Jrj = _r321_t0['put-shapes']['bind'](_r321_t0);
            r321_xn$reverselast$3qIs = _r321_t0['reverse-last']['bind'](_r321_t0);
            r321_include = _r321_t0['include']['bind'](_r321_t0);
            r321_xn$createstroke$7Hrq = _r321_t0['create-stroke']['bind'](_r321_t0);
            r321_xn$setanchor$9Jrj = _r321_t0['set-anchor']['bind'](_r321_t0);
            _r321_t0['gizmo'] = r4_globalTransform;
            _r321_t0['set-width'](r4_WIDTH);
            r321_xn$assignunicode$7Hrq(273);
            r321_include(r4_glyphs['d'], r4_BASE);
            r321_include(r321_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.6), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t150() {
            var r324_currentGlyph, r324_xn$setwidth$9Jrj, r324_xn$assignunicode$7Hrq, r324_xn$startfrom$1aao, r324_xn$lineto$5sIl, r324_xn$curveto$1aao, r324_xn$cubicto$1aao, r324_xn$putshapes$9Jrj, r324_xn$reverselast$3qIs, r324_include, r324_xn$createstroke$7Hrq, r324_xn$setanchor$9Jrj, _r324_t0, _r324_t1, _r324_t2;
            _r324_t0 = this;
            r324_currentGlyph = _r324_t0;
            r324_xn$setwidth$9Jrj = _r324_t0['set-width']['bind'](_r324_t0);
            r324_xn$assignunicode$7Hrq = function _r324_t2(r325_code) {
                var r325_code, _r325_t0, _r325_t1;
                r324_currentGlyph['assign-unicode'](r325_code);
                return r4_unicodeGlyphs[r324_currentGlyph['unicode'][r324_currentGlyph['unicode']['length'] - 1]] = r324_currentGlyph;
            };
            r324_xn$startfrom$1aao = _r324_t0['start-from']['bind'](_r324_t0);
            r324_xn$lineto$5sIl = _r324_t0['line-to']['bind'](_r324_t0);
            r324_xn$curveto$1aao = _r324_t0['curve-to']['bind'](_r324_t0);
            r324_xn$cubicto$1aao = _r324_t0['cubic-to']['bind'](_r324_t0);
            r324_xn$putshapes$9Jrj = _r324_t0['put-shapes']['bind'](_r324_t0);
            r324_xn$reverselast$3qIs = _r324_t0['reverse-last']['bind'](_r324_t0);
            r324_include = _r324_t0['include']['bind'](_r324_t0);
            r324_xn$createstroke$7Hrq = _r324_t0['create-stroke']['bind'](_r324_t0);
            r324_xn$setanchor$9Jrj = _r324_t0['set-anchor']['bind'](_r324_t0);
            _r324_t0['gizmo'] = r4_globalTransform;
            _r324_t0['set-width'](r4_WIDTH);
            r324_xn$setwidth$9Jrj(r4_WIDTH);
            r324_xn$putshapes$9Jrj(r4_glyphs['O']['contours']);
            r324_include(r324_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.7))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.7));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t151() {
            var r327_currentGlyph, r327_xn$setwidth$9Jrj, r327_xn$assignunicode$7Hrq, r327_xn$startfrom$1aao, r327_xn$lineto$5sIl, r327_xn$curveto$1aao, r327_xn$cubicto$1aao, r327_xn$putshapes$9Jrj, r327_xn$reverselast$3qIs, r327_include, r327_xn$createstroke$7Hrq, r327_xn$setanchor$9Jrj, _r327_t0, _r327_t1, _r327_t2;
            _r327_t0 = this;
            r327_currentGlyph = _r327_t0;
            r327_xn$setwidth$9Jrj = _r327_t0['set-width']['bind'](_r327_t0);
            r327_xn$assignunicode$7Hrq = function _r327_t2(r328_code) {
                var r328_code, _r328_t0, _r328_t1;
                r327_currentGlyph['assign-unicode'](r328_code);
                return r4_unicodeGlyphs[r327_currentGlyph['unicode'][r327_currentGlyph['unicode']['length'] - 1]] = r327_currentGlyph;
            };
            r327_xn$startfrom$1aao = _r327_t0['start-from']['bind'](_r327_t0);
            r327_xn$lineto$5sIl = _r327_t0['line-to']['bind'](_r327_t0);
            r327_xn$curveto$1aao = _r327_t0['curve-to']['bind'](_r327_t0);
            r327_xn$cubicto$1aao = _r327_t0['cubic-to']['bind'](_r327_t0);
            r327_xn$putshapes$9Jrj = _r327_t0['put-shapes']['bind'](_r327_t0);
            r327_xn$reverselast$3qIs = _r327_t0['reverse-last']['bind'](_r327_t0);
            r327_include = _r327_t0['include']['bind'](_r327_t0);
            r327_xn$createstroke$7Hrq = _r327_t0['create-stroke']['bind'](_r327_t0);
            r327_xn$setanchor$9Jrj = _r327_t0['set-anchor']['bind'](_r327_t0);
            _r327_t0['gizmo'] = r4_globalTransform;
            _r327_t0['set-width'](r4_WIDTH);
            r327_include(r4_glyphs['O']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t152() {
            var r330_currentGlyph, r330_xn$setwidth$9Jrj, r330_xn$assignunicode$7Hrq, r330_xn$startfrom$1aao, r330_xn$lineto$5sIl, r330_xn$curveto$1aao, r330_xn$cubicto$1aao, r330_xn$putshapes$9Jrj, r330_xn$reverselast$3qIs, r330_include, r330_xn$createstroke$7Hrq, r330_xn$setanchor$9Jrj, _r330_t0, _r330_t1, _r330_t2;
            _r330_t0 = this;
            r330_currentGlyph = _r330_t0;
            r330_xn$setwidth$9Jrj = _r330_t0['set-width']['bind'](_r330_t0);
            r330_xn$assignunicode$7Hrq = function _r330_t2(r331_code) {
                var r331_code, _r331_t0, _r331_t1;
                r330_currentGlyph['assign-unicode'](r331_code);
                return r4_unicodeGlyphs[r330_currentGlyph['unicode'][r330_currentGlyph['unicode']['length'] - 1]] = r330_currentGlyph;
            };
            r330_xn$startfrom$1aao = _r330_t0['start-from']['bind'](_r330_t0);
            r330_xn$lineto$5sIl = _r330_t0['line-to']['bind'](_r330_t0);
            r330_xn$curveto$1aao = _r330_t0['curve-to']['bind'](_r330_t0);
            r330_xn$cubicto$1aao = _r330_t0['cubic-to']['bind'](_r330_t0);
            r330_xn$putshapes$9Jrj = _r330_t0['put-shapes']['bind'](_r330_t0);
            r330_xn$reverselast$3qIs = _r330_t0['reverse-last']['bind'](_r330_t0);
            r330_include = _r330_t0['include']['bind'](_r330_t0);
            r330_xn$createstroke$7Hrq = _r330_t0['create-stroke']['bind'](_r330_t0);
            r330_xn$setanchor$9Jrj = _r330_t0['set-anchor']['bind'](_r330_t0);
            _r330_t0['gizmo'] = r4_globalTransform;
            _r330_t0['set-width'](r4_WIDTH);
            r330_include(r4_glyphs['O']);
            r330_xn$putshapes$9Jrj([r4_Ring(r4_CAPMIDDLE + r4_DOTRADIUS, r4_CAPMIDDLE - r4_DOTRADIUS, r4_MIDDLE + r4_DOTRADIUS, r4_MIDDLE - r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero', function _r4_t153() {
            var r333_currentGlyph, r333_xn$setwidth$9Jrj, r333_xn$assignunicode$7Hrq, r333_xn$startfrom$1aao, r333_xn$lineto$5sIl, r333_xn$curveto$1aao, r333_xn$cubicto$1aao, r333_xn$putshapes$9Jrj, r333_xn$reverselast$3qIs, r333_include, r333_xn$createstroke$7Hrq, r333_xn$setanchor$9Jrj, r333_otherwise, _r333_t0, _r333_t1, _r333_t2, _r333_t3, _r333_t4, _r333_t5, _r333_t6, _r333_t7, _r333_t8, _r333_t9;
            _r333_t1 = this;
            r333_currentGlyph = _r333_t1;
            r333_xn$setwidth$9Jrj = _r333_t1['set-width']['bind'](_r333_t1);
            r333_xn$assignunicode$7Hrq = function _r333_t3(r334_code) {
                var r334_code, _r334_t0, _r334_t1;
                r333_currentGlyph['assign-unicode'](r334_code);
                return r4_unicodeGlyphs[r333_currentGlyph['unicode'][r333_currentGlyph['unicode']['length'] - 1]] = r333_currentGlyph;
            };
            r333_xn$startfrom$1aao = _r333_t1['start-from']['bind'](_r333_t1);
            r333_xn$lineto$5sIl = _r333_t1['line-to']['bind'](_r333_t1);
            r333_xn$curveto$1aao = _r333_t1['curve-to']['bind'](_r333_t1);
            r333_xn$cubicto$1aao = _r333_t1['cubic-to']['bind'](_r333_t1);
            r333_xn$putshapes$9Jrj = _r333_t1['put-shapes']['bind'](_r333_t1);
            r333_xn$reverselast$3qIs = _r333_t1['reverse-last']['bind'](_r333_t1);
            r333_include = _r333_t1['include']['bind'](_r333_t1);
            r333_xn$createstroke$7Hrq = _r333_t1['create-stroke']['bind'](_r333_t1);
            r333_xn$setanchor$9Jrj = _r333_t1['set-anchor']['bind'](_r333_t1);
            _r333_t1['gizmo'] = r4_globalTransform;
            _r333_t1['set-width'](r4_WIDTH);
            r333_xn$setwidth$9Jrj(r4_WIDTH);
            r333_xn$assignunicode$7Hrq('0');
            _r333_t4 = r333_include;
            _r333_t5 = r4_glyphs;
            _r333_t0 = r4_variantSelector['zero'];
            if ('slashed' === _r333_t0) {
                _r333_t6 = 'zero.slashed';
            } else {
                if ('dotted' === _r333_t0) {
                    _r333_t7 = 'zero.dotted';
                } else {
                    if ('unslahsed' === _r333_t0) {
                        _r333_t8 = 'zero.unslashed';
                    } else {
                        r333_otherwise = _r333_t0;
                        _r333_t8 = 'zero.slashed';
                    }
                    _r333_t7 = _r333_t8;
                }
                _r333_t6 = _r333_t7;
            }
            _r333_t9 = _r333_t5[_r333_t6];
            _r333_t4(_r333_t9);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('one', function _r4_t154() {
            var r336_currentGlyph, r336_xn$setwidth$9Jrj, r336_xn$assignunicode$7Hrq, r336_xn$startfrom$1aao, r336_xn$lineto$5sIl, r336_xn$curveto$1aao, r336_xn$cubicto$1aao, r336_xn$putshapes$9Jrj, r336_xn$reverselast$3qIs, r336_include, r336_xn$createstroke$7Hrq, r336_xn$setanchor$9Jrj, _r336_t0, _r336_t1, _r336_t2;
            _r336_t0 = this;
            r336_currentGlyph = _r336_t0;
            r336_xn$setwidth$9Jrj = _r336_t0['set-width']['bind'](_r336_t0);
            r336_xn$assignunicode$7Hrq = function _r336_t2(r337_code) {
                var r337_code, _r337_t0, _r337_t1;
                r336_currentGlyph['assign-unicode'](r337_code);
                return r4_unicodeGlyphs[r336_currentGlyph['unicode'][r336_currentGlyph['unicode']['length'] - 1]] = r336_currentGlyph;
            };
            r336_xn$startfrom$1aao = _r336_t0['start-from']['bind'](_r336_t0);
            r336_xn$lineto$5sIl = _r336_t0['line-to']['bind'](_r336_t0);
            r336_xn$curveto$1aao = _r336_t0['curve-to']['bind'](_r336_t0);
            r336_xn$cubicto$1aao = _r336_t0['cubic-to']['bind'](_r336_t0);
            r336_xn$putshapes$9Jrj = _r336_t0['put-shapes']['bind'](_r336_t0);
            r336_xn$reverselast$3qIs = _r336_t0['reverse-last']['bind'](_r336_t0);
            r336_include = _r336_t0['include']['bind'](_r336_t0);
            r336_xn$createstroke$7Hrq = _r336_t0['create-stroke']['bind'](_r336_t0);
            r336_xn$setanchor$9Jrj = _r336_t0['set-anchor']['bind'](_r336_t0);
            _r336_t0['gizmo'] = r4_globalTransform;
            _r336_t0['set-width'](r4_WIDTH);
            r336_xn$setwidth$9Jrj(r4_WIDTH);
            r336_xn$assignunicode$7Hrq('1');
            r336_xn$putshapes$9Jrj(r336_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            r336_xn$putshapes$9Jrj(r336_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t155() {
            var r339_currentGlyph, r339_xn$setwidth$9Jrj, r339_xn$assignunicode$7Hrq, r339_xn$startfrom$1aao, r339_xn$lineto$5sIl, r339_xn$curveto$1aao, r339_xn$cubicto$1aao, r339_xn$putshapes$9Jrj, r339_xn$reverselast$3qIs, r339_include, r339_xn$createstroke$7Hrq, r339_xn$setanchor$9Jrj, _r339_t0, _r339_t1, _r339_t2;
            _r339_t0 = this;
            r339_currentGlyph = _r339_t0;
            r339_xn$setwidth$9Jrj = _r339_t0['set-width']['bind'](_r339_t0);
            r339_xn$assignunicode$7Hrq = function _r339_t2(r340_code) {
                var r340_code, _r340_t0, _r340_t1;
                r339_currentGlyph['assign-unicode'](r340_code);
                return r4_unicodeGlyphs[r339_currentGlyph['unicode'][r339_currentGlyph['unicode']['length'] - 1]] = r339_currentGlyph;
            };
            r339_xn$startfrom$1aao = _r339_t0['start-from']['bind'](_r339_t0);
            r339_xn$lineto$5sIl = _r339_t0['line-to']['bind'](_r339_t0);
            r339_xn$curveto$1aao = _r339_t0['curve-to']['bind'](_r339_t0);
            r339_xn$cubicto$1aao = _r339_t0['cubic-to']['bind'](_r339_t0);
            r339_xn$putshapes$9Jrj = _r339_t0['put-shapes']['bind'](_r339_t0);
            r339_xn$reverselast$3qIs = _r339_t0['reverse-last']['bind'](_r339_t0);
            r339_include = _r339_t0['include']['bind'](_r339_t0);
            r339_xn$createstroke$7Hrq = _r339_t0['create-stroke']['bind'](_r339_t0);
            r339_xn$setanchor$9Jrj = _r339_t0['set-anchor']['bind'](_r339_t0);
            _r339_t0['gizmo'] = r4_globalTransform;
            _r339_t0['set-width'](r4_WIDTH);
            r339_xn$setwidth$9Jrj(r4_WIDTH);
            r339_xn$assignunicode$7Hrq('2');
            r339_xn$putshapes$9Jrj(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r339_xn$putshapes$9Jrj(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r339_xn$putshapes$9Jrj(r339_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t156() {
            var r342_currentGlyph, r342_xn$setwidth$9Jrj, r342_xn$assignunicode$7Hrq, r342_xn$startfrom$1aao, r342_xn$lineto$5sIl, r342_xn$curveto$1aao, r342_xn$cubicto$1aao, r342_xn$putshapes$9Jrj, r342_xn$reverselast$3qIs, r342_include, r342_xn$createstroke$7Hrq, r342_xn$setanchor$9Jrj, r342_threeRadius, _r342_t0, _r342_t1, _r342_t2;
            _r342_t0 = this;
            r342_currentGlyph = _r342_t0;
            r342_xn$setwidth$9Jrj = _r342_t0['set-width']['bind'](_r342_t0);
            r342_xn$assignunicode$7Hrq = function _r342_t2(r343_code) {
                var r343_code, _r343_t0, _r343_t1;
                r342_currentGlyph['assign-unicode'](r343_code);
                return r4_unicodeGlyphs[r342_currentGlyph['unicode'][r342_currentGlyph['unicode']['length'] - 1]] = r342_currentGlyph;
            };
            r342_xn$startfrom$1aao = _r342_t0['start-from']['bind'](_r342_t0);
            r342_xn$lineto$5sIl = _r342_t0['line-to']['bind'](_r342_t0);
            r342_xn$curveto$1aao = _r342_t0['curve-to']['bind'](_r342_t0);
            r342_xn$cubicto$1aao = _r342_t0['cubic-to']['bind'](_r342_t0);
            r342_xn$putshapes$9Jrj = _r342_t0['put-shapes']['bind'](_r342_t0);
            r342_xn$reverselast$3qIs = _r342_t0['reverse-last']['bind'](_r342_t0);
            r342_include = _r342_t0['include']['bind'](_r342_t0);
            r342_xn$createstroke$7Hrq = _r342_t0['create-stroke']['bind'](_r342_t0);
            r342_xn$setanchor$9Jrj = _r342_t0['set-anchor']['bind'](_r342_t0);
            _r342_t0['gizmo'] = r4_globalTransform;
            _r342_t0['set-width'](r4_WIDTH);
            r342_xn$setwidth$9Jrj(r4_WIDTH);
            r342_xn$assignunicode$7Hrq('3');
            r342_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r342_xn$putshapes$9Jrj(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r342_xn$putshapes$9Jrj(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r342_xn$putshapes$9Jrj(r342_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r342_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            r342_xn$putshapes$9Jrj(r342_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r342_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t157() {
            var r345_currentGlyph, r345_xn$setwidth$9Jrj, r345_xn$assignunicode$7Hrq, r345_xn$startfrom$1aao, r345_xn$lineto$5sIl, r345_xn$curveto$1aao, r345_xn$cubicto$1aao, r345_xn$putshapes$9Jrj, r345_xn$reverselast$3qIs, r345_include, r345_xn$createstroke$7Hrq, r345_xn$setanchor$9Jrj, r345_bar, r345_vert, _r345_t0, _r345_t1, _r345_t2;
            _r345_t0 = this;
            r345_currentGlyph = _r345_t0;
            r345_xn$setwidth$9Jrj = _r345_t0['set-width']['bind'](_r345_t0);
            r345_xn$assignunicode$7Hrq = function _r345_t2(r346_code) {
                var r346_code, _r346_t0, _r346_t1;
                r345_currentGlyph['assign-unicode'](r346_code);
                return r4_unicodeGlyphs[r345_currentGlyph['unicode'][r345_currentGlyph['unicode']['length'] - 1]] = r345_currentGlyph;
            };
            r345_xn$startfrom$1aao = _r345_t0['start-from']['bind'](_r345_t0);
            r345_xn$lineto$5sIl = _r345_t0['line-to']['bind'](_r345_t0);
            r345_xn$curveto$1aao = _r345_t0['curve-to']['bind'](_r345_t0);
            r345_xn$cubicto$1aao = _r345_t0['cubic-to']['bind'](_r345_t0);
            r345_xn$putshapes$9Jrj = _r345_t0['put-shapes']['bind'](_r345_t0);
            r345_xn$reverselast$3qIs = _r345_t0['reverse-last']['bind'](_r345_t0);
            r345_include = _r345_t0['include']['bind'](_r345_t0);
            r345_xn$createstroke$7Hrq = _r345_t0['create-stroke']['bind'](_r345_t0);
            r345_xn$setanchor$9Jrj = _r345_t0['set-anchor']['bind'](_r345_t0);
            _r345_t0['gizmo'] = r4_globalTransform;
            _r345_t0['set-width'](r4_WIDTH);
            r345_xn$setwidth$9Jrj(r4_WIDTH);
            r345_xn$assignunicode$7Hrq('4');
            r345_bar = r4_CAP * 0.4;
            r345_vert = r4_WIDTH * 0.55;
            r345_xn$putshapes$9Jrj(r345_xn$createstroke$7Hrq()['start-from'](r4_SB, r345_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r345_bar)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r345_xn$putshapes$9Jrj(r345_xn$createstroke$7Hrq()['start-from'](r345_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r345_vert, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            r345_xn$putshapes$9Jrj(r345_xn$createstroke$7Hrq()['start-from'](r4_SB, r345_bar)['set-width'](0, r4_STROKE)['line-to'](r345_vert, r4_CAP)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t158() {
            var r348_currentGlyph, r348_xn$setwidth$9Jrj, r348_xn$assignunicode$7Hrq, r348_xn$startfrom$1aao, r348_xn$lineto$5sIl, r348_xn$curveto$1aao, r348_xn$cubicto$1aao, r348_xn$putshapes$9Jrj, r348_xn$reverselast$3qIs, r348_include, r348_xn$createstroke$7Hrq, r348_xn$setanchor$9Jrj, _r348_t0, _r348_t1, _r348_t2;
            _r348_t0 = this;
            r348_currentGlyph = _r348_t0;
            r348_xn$setwidth$9Jrj = _r348_t0['set-width']['bind'](_r348_t0);
            r348_xn$assignunicode$7Hrq = function _r348_t2(r349_code) {
                var r349_code, _r349_t0, _r349_t1;
                r348_currentGlyph['assign-unicode'](r349_code);
                return r4_unicodeGlyphs[r348_currentGlyph['unicode'][r348_currentGlyph['unicode']['length'] - 1]] = r348_currentGlyph;
            };
            r348_xn$startfrom$1aao = _r348_t0['start-from']['bind'](_r348_t0);
            r348_xn$lineto$5sIl = _r348_t0['line-to']['bind'](_r348_t0);
            r348_xn$curveto$1aao = _r348_t0['curve-to']['bind'](_r348_t0);
            r348_xn$cubicto$1aao = _r348_t0['cubic-to']['bind'](_r348_t0);
            r348_xn$putshapes$9Jrj = _r348_t0['put-shapes']['bind'](_r348_t0);
            r348_xn$reverselast$3qIs = _r348_t0['reverse-last']['bind'](_r348_t0);
            r348_include = _r348_t0['include']['bind'](_r348_t0);
            r348_xn$createstroke$7Hrq = _r348_t0['create-stroke']['bind'](_r348_t0);
            r348_xn$setanchor$9Jrj = _r348_t0['set-anchor']['bind'](_r348_t0);
            _r348_t0['gizmo'] = r4_globalTransform;
            _r348_t0['set-width'](r4_WIDTH);
            r348_xn$setwidth$9Jrj(r4_WIDTH);
            r348_xn$assignunicode$7Hrq('5');
            r348_xn$putshapes$9Jrj(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r348_xn$putshapes$9Jrj(r348_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            r348_xn$putshapes$9Jrj(r348_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r348_xn$putshapes$9Jrj(r348_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t159() {
            var r351_currentGlyph, r351_xn$setwidth$9Jrj, r351_xn$assignunicode$7Hrq, r351_xn$startfrom$1aao, r351_xn$lineto$5sIl, r351_xn$curveto$1aao, r351_xn$cubicto$1aao, r351_xn$putshapes$9Jrj, r351_xn$reverselast$3qIs, r351_include, r351_xn$createstroke$7Hrq, r351_xn$setanchor$9Jrj, r351_ymiddlea, _r351_t0, _r351_t1, _r351_t2;
            _r351_t0 = this;
            r351_currentGlyph = _r351_t0;
            r351_xn$setwidth$9Jrj = _r351_t0['set-width']['bind'](_r351_t0);
            r351_xn$assignunicode$7Hrq = function _r351_t2(r352_code) {
                var r352_code, _r352_t0, _r352_t1;
                r351_currentGlyph['assign-unicode'](r352_code);
                return r4_unicodeGlyphs[r351_currentGlyph['unicode'][r351_currentGlyph['unicode']['length'] - 1]] = r351_currentGlyph;
            };
            r351_xn$startfrom$1aao = _r351_t0['start-from']['bind'](_r351_t0);
            r351_xn$lineto$5sIl = _r351_t0['line-to']['bind'](_r351_t0);
            r351_xn$curveto$1aao = _r351_t0['curve-to']['bind'](_r351_t0);
            r351_xn$cubicto$1aao = _r351_t0['cubic-to']['bind'](_r351_t0);
            r351_xn$putshapes$9Jrj = _r351_t0['put-shapes']['bind'](_r351_t0);
            r351_xn$reverselast$3qIs = _r351_t0['reverse-last']['bind'](_r351_t0);
            r351_include = _r351_t0['include']['bind'](_r351_t0);
            r351_xn$createstroke$7Hrq = _r351_t0['create-stroke']['bind'](_r351_t0);
            r351_xn$setanchor$9Jrj = _r351_t0['set-anchor']['bind'](_r351_t0);
            _r351_t0['gizmo'] = r4_globalTransform;
            _r351_t0['set-width'](r4_WIDTH);
            r351_xn$setwidth$9Jrj(r4_WIDTH);
            r351_xn$assignunicode$7Hrq('6');
            r351_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r351_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r351_include(r351_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r351_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r351_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t160() {
            var r354_currentGlyph, r354_xn$setwidth$9Jrj, r354_xn$assignunicode$7Hrq, r354_xn$startfrom$1aao, r354_xn$lineto$5sIl, r354_xn$curveto$1aao, r354_xn$cubicto$1aao, r354_xn$putshapes$9Jrj, r354_xn$reverselast$3qIs, r354_include, r354_xn$createstroke$7Hrq, r354_xn$setanchor$9Jrj, r354_cor, r354_x, _r354_t0, _r354_t1, _r354_t2;
            _r354_t0 = this;
            r354_currentGlyph = _r354_t0;
            r354_xn$setwidth$9Jrj = _r354_t0['set-width']['bind'](_r354_t0);
            r354_xn$assignunicode$7Hrq = function _r354_t2(r355_code) {
                var r355_code, _r355_t0, _r355_t1;
                r354_currentGlyph['assign-unicode'](r355_code);
                return r4_unicodeGlyphs[r354_currentGlyph['unicode'][r354_currentGlyph['unicode']['length'] - 1]] = r354_currentGlyph;
            };
            r354_xn$startfrom$1aao = _r354_t0['start-from']['bind'](_r354_t0);
            r354_xn$lineto$5sIl = _r354_t0['line-to']['bind'](_r354_t0);
            r354_xn$curveto$1aao = _r354_t0['curve-to']['bind'](_r354_t0);
            r354_xn$cubicto$1aao = _r354_t0['cubic-to']['bind'](_r354_t0);
            r354_xn$putshapes$9Jrj = _r354_t0['put-shapes']['bind'](_r354_t0);
            r354_xn$reverselast$3qIs = _r354_t0['reverse-last']['bind'](_r354_t0);
            r354_include = _r354_t0['include']['bind'](_r354_t0);
            r354_xn$createstroke$7Hrq = _r354_t0['create-stroke']['bind'](_r354_t0);
            r354_xn$setanchor$9Jrj = _r354_t0['set-anchor']['bind'](_r354_t0);
            _r354_t0['gizmo'] = r4_globalTransform;
            _r354_t0['set-width'](r4_WIDTH);
            r354_xn$setwidth$9Jrj(r4_WIDTH);
            r354_xn$assignunicode$7Hrq('7');
            r354_xn$putshapes$9Jrj(r354_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r354_cor = 1.15;
            r354_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r354_xn$startfrom$1aao(r354_x, 0);
            r354_xn$lineto$5sIl(r354_x + r4_STROKE * r354_cor, 0);
            r354_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r354_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r354_cor, r4_CAP - r4_STROKE);
            r354_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t161() {
            var r357_currentGlyph, r357_xn$setwidth$9Jrj, r357_xn$assignunicode$7Hrq, r357_xn$startfrom$1aao, r357_xn$lineto$5sIl, r357_xn$curveto$1aao, r357_xn$cubicto$1aao, r357_xn$putshapes$9Jrj, r357_xn$reverselast$3qIs, r357_include, r357_xn$createstroke$7Hrq, r357_xn$setanchor$9Jrj, r357_sma, r357_smb, r357_p, _r357_t0, _r357_t1, _r357_t2;
            _r357_t0 = this;
            r357_currentGlyph = _r357_t0;
            r357_xn$setwidth$9Jrj = _r357_t0['set-width']['bind'](_r357_t0);
            r357_xn$assignunicode$7Hrq = function _r357_t2(r358_code) {
                var r358_code, _r358_t0, _r358_t1;
                r357_currentGlyph['assign-unicode'](r358_code);
                return r4_unicodeGlyphs[r357_currentGlyph['unicode'][r357_currentGlyph['unicode']['length'] - 1]] = r357_currentGlyph;
            };
            r357_xn$startfrom$1aao = _r357_t0['start-from']['bind'](_r357_t0);
            r357_xn$lineto$5sIl = _r357_t0['line-to']['bind'](_r357_t0);
            r357_xn$curveto$1aao = _r357_t0['curve-to']['bind'](_r357_t0);
            r357_xn$cubicto$1aao = _r357_t0['cubic-to']['bind'](_r357_t0);
            r357_xn$putshapes$9Jrj = _r357_t0['put-shapes']['bind'](_r357_t0);
            r357_xn$reverselast$3qIs = _r357_t0['reverse-last']['bind'](_r357_t0);
            r357_include = _r357_t0['include']['bind'](_r357_t0);
            r357_xn$createstroke$7Hrq = _r357_t0['create-stroke']['bind'](_r357_t0);
            r357_xn$setanchor$9Jrj = _r357_t0['set-anchor']['bind'](_r357_t0);
            _r357_t0['gizmo'] = r4_globalTransform;
            _r357_t0['set-width'](r4_WIDTH);
            r357_xn$setwidth$9Jrj(r4_WIDTH);
            r357_xn$assignunicode$7Hrq('8');
            r357_sma = r4_SMOOTHA * 0.975;
            r357_smb = r4_SMOOTHB * 0.975;
            r357_p = 0.95;
            r357_xn$putshapes$9Jrj(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r357_p), r4_CAP - r357_sma * r357_p, r4_RIGHTSB, r357_sma));
            r357_xn$putshapes$9Jrj(r4_xsStrand(r4_SB, r357_smb, r0_mix(r4_SB, r4_RIGHTSB, r357_p), r4_CAP - r357_smb * r357_p));
            r357_xn$putshapes$9Jrj(r357_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r357_p), r4_CAP - r357_smb * r357_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP - r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r357_p), r4_CAP - r357_sma * r357_p)['to-outline']());
            r357_xn$putshapes$9Jrj(r357_xn$createstroke$7Hrq()['start-from'](r4_SB, r357_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r357_sma)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t162() {
            var r360_currentGlyph, r360_xn$setwidth$9Jrj, r360_xn$assignunicode$7Hrq, r360_xn$startfrom$1aao, r360_xn$lineto$5sIl, r360_xn$curveto$1aao, r360_xn$cubicto$1aao, r360_xn$putshapes$9Jrj, r360_xn$reverselast$3qIs, r360_include, r360_xn$createstroke$7Hrq, r360_xn$setanchor$9Jrj, r360_ymiddlea, _r360_t0, _r360_t1, _r360_t2;
            _r360_t0 = this;
            r360_currentGlyph = _r360_t0;
            r360_xn$setwidth$9Jrj = _r360_t0['set-width']['bind'](_r360_t0);
            r360_xn$assignunicode$7Hrq = function _r360_t2(r361_code) {
                var r361_code, _r361_t0, _r361_t1;
                r360_currentGlyph['assign-unicode'](r361_code);
                return r4_unicodeGlyphs[r360_currentGlyph['unicode'][r360_currentGlyph['unicode']['length'] - 1]] = r360_currentGlyph;
            };
            r360_xn$startfrom$1aao = _r360_t0['start-from']['bind'](_r360_t0);
            r360_xn$lineto$5sIl = _r360_t0['line-to']['bind'](_r360_t0);
            r360_xn$curveto$1aao = _r360_t0['curve-to']['bind'](_r360_t0);
            r360_xn$cubicto$1aao = _r360_t0['cubic-to']['bind'](_r360_t0);
            r360_xn$putshapes$9Jrj = _r360_t0['put-shapes']['bind'](_r360_t0);
            r360_xn$reverselast$3qIs = _r360_t0['reverse-last']['bind'](_r360_t0);
            r360_include = _r360_t0['include']['bind'](_r360_t0);
            r360_xn$createstroke$7Hrq = _r360_t0['create-stroke']['bind'](_r360_t0);
            r360_xn$setanchor$9Jrj = _r360_t0['set-anchor']['bind'](_r360_t0);
            _r360_t0['gizmo'] = r4_globalTransform;
            _r360_t0['set-width'](r4_WIDTH);
            r360_xn$setwidth$9Jrj(r4_WIDTH);
            r360_xn$assignunicode$7Hrq('9');
            r360_xn$putshapes$9Jrj(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r360_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r360_xn$putshapes$9Jrj(r360_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r360_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4)['to-outline']());
            r360_xn$putshapes$9Jrj(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t163() {
            var r363_currentGlyph, r363_xn$setwidth$9Jrj, r363_xn$assignunicode$7Hrq, r363_xn$startfrom$1aao, r363_xn$lineto$5sIl, r363_xn$curveto$1aao, r363_xn$cubicto$1aao, r363_xn$putshapes$9Jrj, r363_xn$reverselast$3qIs, r363_include, r363_xn$createstroke$7Hrq, r363_xn$setanchor$9Jrj, _r363_t0, _r363_t1, _r363_t2;
            _r363_t0 = this;
            r363_currentGlyph = _r363_t0;
            r363_xn$setwidth$9Jrj = _r363_t0['set-width']['bind'](_r363_t0);
            r363_xn$assignunicode$7Hrq = function _r363_t2(r364_code) {
                var r364_code, _r364_t0, _r364_t1;
                r363_currentGlyph['assign-unicode'](r364_code);
                return r4_unicodeGlyphs[r363_currentGlyph['unicode'][r363_currentGlyph['unicode']['length'] - 1]] = r363_currentGlyph;
            };
            r363_xn$startfrom$1aao = _r363_t0['start-from']['bind'](_r363_t0);
            r363_xn$lineto$5sIl = _r363_t0['line-to']['bind'](_r363_t0);
            r363_xn$curveto$1aao = _r363_t0['curve-to']['bind'](_r363_t0);
            r363_xn$cubicto$1aao = _r363_t0['cubic-to']['bind'](_r363_t0);
            r363_xn$putshapes$9Jrj = _r363_t0['put-shapes']['bind'](_r363_t0);
            r363_xn$reverselast$3qIs = _r363_t0['reverse-last']['bind'](_r363_t0);
            r363_include = _r363_t0['include']['bind'](_r363_t0);
            r363_xn$createstroke$7Hrq = _r363_t0['create-stroke']['bind'](_r363_t0);
            r363_xn$setanchor$9Jrj = _r363_t0['set-anchor']['bind'](_r363_t0);
            _r363_t0['gizmo'] = r4_globalTransform;
            _r363_t0['set-width'](r4_WIDTH);
            r363_xn$setwidth$9Jrj(r4_WIDTH);
            r363_xn$assignunicode$7Hrq('$');
            r363_include(r4_glyphs['S']);
            r363_include(r363_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r363_include(r363_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t164() {
            var r366_currentGlyph, r366_xn$setwidth$9Jrj, r366_xn$assignunicode$7Hrq, r366_xn$startfrom$1aao, r366_xn$lineto$5sIl, r366_xn$curveto$1aao, r366_xn$cubicto$1aao, r366_xn$putshapes$9Jrj, r366_xn$reverselast$3qIs, r366_include, r366_xn$createstroke$7Hrq, r366_xn$setanchor$9Jrj, r366_fine, r366_p, r366_l, r366_pr, r366_q, r366_r, r366_s, _r366_t0, _r366_t1, _r366_t2;
            _r366_t0 = this;
            r366_currentGlyph = _r366_t0;
            r366_xn$setwidth$9Jrj = _r366_t0['set-width']['bind'](_r366_t0);
            r366_xn$assignunicode$7Hrq = function _r366_t2(r367_code) {
                var r367_code, _r367_t0, _r367_t1;
                r366_currentGlyph['assign-unicode'](r367_code);
                return r4_unicodeGlyphs[r366_currentGlyph['unicode'][r366_currentGlyph['unicode']['length'] - 1]] = r366_currentGlyph;
            };
            r366_xn$startfrom$1aao = _r366_t0['start-from']['bind'](_r366_t0);
            r366_xn$lineto$5sIl = _r366_t0['line-to']['bind'](_r366_t0);
            r366_xn$curveto$1aao = _r366_t0['curve-to']['bind'](_r366_t0);
            r366_xn$cubicto$1aao = _r366_t0['cubic-to']['bind'](_r366_t0);
            r366_xn$putshapes$9Jrj = _r366_t0['put-shapes']['bind'](_r366_t0);
            r366_xn$reverselast$3qIs = _r366_t0['reverse-last']['bind'](_r366_t0);
            r366_include = _r366_t0['include']['bind'](_r366_t0);
            r366_xn$createstroke$7Hrq = _r366_t0['create-stroke']['bind'](_r366_t0);
            r366_xn$setanchor$9Jrj = _r366_t0['set-anchor']['bind'](_r366_t0);
            _r366_t0['gizmo'] = r4_globalTransform;
            _r366_t0['set-width'](r4_WIDTH);
            r366_xn$setwidth$9Jrj(r4_WIDTH);
            r366_xn$assignunicode$7Hrq('&');
            r366_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r366_p = 0.85;
            r366_l = 0.05;
            r366_pr = 0.9;
            r366_q = 0.45;
            r366_r = 1.1;
            r366_s = 0;
            r366_include(r366_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r366_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r366_p), r4_CAP - r4_SMOOTHB * r366_pr, r4_HALFSTROKE, r366_fine / 2));
            r366_include(r366_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r366_p), r4_CAP - r4_SMOOTHB * r366_pr)['set-width'](r366_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r366_p, r366_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r366_l), r4_CAP - r4_SMOOTHA * r366_pr));
            r366_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r366_l), r4_CAP - r4_SMOOTHA * r366_pr, r0_mix(r4_SB, r4_RIGHTSB, r366_r), r4_SMOOTHA * r366_s, r366_fine / 2, r366_fine / 2, null, null, r4_SMOOTHA * r366_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t165() {
            var r369_currentGlyph, r369_xn$setwidth$9Jrj, r369_xn$assignunicode$7Hrq, r369_xn$startfrom$1aao, r369_xn$lineto$5sIl, r369_xn$curveto$1aao, r369_xn$cubicto$1aao, r369_xn$putshapes$9Jrj, r369_xn$reverselast$3qIs, r369_include, r369_xn$createstroke$7Hrq, r369_xn$setanchor$9Jrj, r369_top, r369_bot, r369_otop, r369_obot, r369_sw, r369_m1, r369_m2, r369_sma, r369_smb, _r369_t0, _r369_t1, _r369_t2;
            _r369_t0 = this;
            r369_currentGlyph = _r369_t0;
            r369_xn$setwidth$9Jrj = _r369_t0['set-width']['bind'](_r369_t0);
            r369_xn$assignunicode$7Hrq = function _r369_t2(r370_code) {
                var r370_code, _r370_t0, _r370_t1;
                r369_currentGlyph['assign-unicode'](r370_code);
                return r4_unicodeGlyphs[r369_currentGlyph['unicode'][r369_currentGlyph['unicode']['length'] - 1]] = r369_currentGlyph;
            };
            r369_xn$startfrom$1aao = _r369_t0['start-from']['bind'](_r369_t0);
            r369_xn$lineto$5sIl = _r369_t0['line-to']['bind'](_r369_t0);
            r369_xn$curveto$1aao = _r369_t0['curve-to']['bind'](_r369_t0);
            r369_xn$cubicto$1aao = _r369_t0['cubic-to']['bind'](_r369_t0);
            r369_xn$putshapes$9Jrj = _r369_t0['put-shapes']['bind'](_r369_t0);
            r369_xn$reverselast$3qIs = _r369_t0['reverse-last']['bind'](_r369_t0);
            r369_include = _r369_t0['include']['bind'](_r369_t0);
            r369_xn$createstroke$7Hrq = _r369_t0['create-stroke']['bind'](_r369_t0);
            r369_xn$setanchor$9Jrj = _r369_t0['set-anchor']['bind'](_r369_t0);
            _r369_t0['gizmo'] = r4_globalTransform;
            _r369_t0['set-width'](r4_WIDTH);
            r369_xn$setwidth$9Jrj(r4_WIDTH);
            r369_xn$assignunicode$7Hrq('@');
            r369_top = r4_CAP + r4_HALFSTROKE;
            r369_bot = r4_DESCENDER + r4_HALFSTROKE;
            r369_otop = r0_mix(r369_bot, r369_top, 0.75);
            r369_obot = r0_mix(r369_top, r369_bot, 0.8);
            r369_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r369_m1 = r0_mix(r4_SB + r369_sw, r4_RIGHTSB - r369_sw, 0.47) - r369_sw / 2;
            r369_m2 = r0_mix(r369_m1, r4_RIGHTSB, 0.5);
            r369_sma = r4_SMOOTHA * ((r4_RIGHTSB - r369_m1) / (r4_RIGHTSB - r4_SB));
            r369_smb = r4_SMOOTHB * ((r4_RIGHTSB - r369_m1) / (r4_RIGHTSB - r4_SB));
            r369_include(r369_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r369_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r369_sw, 0)['line-to'](r369_m2, r369_otop - r4_O)['arc-hv-to'](r369_m1, r369_otop - r369_sma)['line-to'](r369_m1, r369_obot + r369_smb)['arc-vh-to'](r369_m2 + r4_STROKE * r4_globalTransform['yx'], r369_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r369_obot + r369_sma)['line-to'](r4_RIGHTSB, r369_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r369_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r369_top - r4_SMOOTHA)['set-width'](r369_sw, 0)['line-to'](r4_SB, r369_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r369_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r369_bot + r4_O)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_hyphenCenter = r4_XH * 0.6;
        r4_parenTop = r4_hyphenCenter + (r4_CAP - r4_XH) * 2.3;
        r4_parenBot = r4_hyphenCenter - (r4_CAP - r4_XH) * 2.3;
        r4_parenMid = r0_mix(r4_parenTop, r4_parenBot, 0.5);
        r4_parenOutside = 0.15;
        r4_parenInside = 0.65;
        r4_bracketOutside = 0.15;
        r4_bracketInside = 0.9;
        r4_braceOutside = 0.1;
        r4_braceInside = 0.9;
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t166() {
            var r372_currentGlyph, r372_xn$setwidth$9Jrj, r372_xn$assignunicode$7Hrq, r372_xn$startfrom$1aao, r372_xn$lineto$5sIl, r372_xn$curveto$1aao, r372_xn$cubicto$1aao, r372_xn$putshapes$9Jrj, r372_xn$reverselast$3qIs, r372_include, r372_xn$createstroke$7Hrq, r372_xn$setanchor$9Jrj, r372_p, _r372_t0, _r372_t1, _r372_t2;
            _r372_t0 = this;
            r372_currentGlyph = _r372_t0;
            r372_xn$setwidth$9Jrj = _r372_t0['set-width']['bind'](_r372_t0);
            r372_xn$assignunicode$7Hrq = function _r372_t2(r373_code) {
                var r373_code, _r373_t0, _r373_t1;
                r372_currentGlyph['assign-unicode'](r373_code);
                return r4_unicodeGlyphs[r372_currentGlyph['unicode'][r372_currentGlyph['unicode']['length'] - 1]] = r372_currentGlyph;
            };
            r372_xn$startfrom$1aao = _r372_t0['start-from']['bind'](_r372_t0);
            r372_xn$lineto$5sIl = _r372_t0['line-to']['bind'](_r372_t0);
            r372_xn$curveto$1aao = _r372_t0['curve-to']['bind'](_r372_t0);
            r372_xn$cubicto$1aao = _r372_t0['cubic-to']['bind'](_r372_t0);
            r372_xn$putshapes$9Jrj = _r372_t0['put-shapes']['bind'](_r372_t0);
            r372_xn$reverselast$3qIs = _r372_t0['reverse-last']['bind'](_r372_t0);
            r372_include = _r372_t0['include']['bind'](_r372_t0);
            r372_xn$createstroke$7Hrq = _r372_t0['create-stroke']['bind'](_r372_t0);
            r372_xn$setanchor$9Jrj = _r372_t0['set-anchor']['bind'](_r372_t0);
            _r372_t0['gizmo'] = r4_globalTransform;
            _r372_t0['set-width'](r4_WIDTH);
            r372_xn$setwidth$9Jrj(r4_WIDTH);
            r372_xn$assignunicode$7Hrq('(');
            r372_p = 0.6;
            r372_include(r372_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r372_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r372_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t167() {
            var r375_currentGlyph, r375_xn$setwidth$9Jrj, r375_xn$assignunicode$7Hrq, r375_xn$startfrom$1aao, r375_xn$lineto$5sIl, r375_xn$curveto$1aao, r375_xn$cubicto$1aao, r375_xn$putshapes$9Jrj, r375_xn$reverselast$3qIs, r375_include, r375_xn$createstroke$7Hrq, r375_xn$setanchor$9Jrj, r375_p, _r375_t0, _r375_t1, _r375_t2;
            _r375_t0 = this;
            r375_currentGlyph = _r375_t0;
            r375_xn$setwidth$9Jrj = _r375_t0['set-width']['bind'](_r375_t0);
            r375_xn$assignunicode$7Hrq = function _r375_t2(r376_code) {
                var r376_code, _r376_t0, _r376_t1;
                r375_currentGlyph['assign-unicode'](r376_code);
                return r4_unicodeGlyphs[r375_currentGlyph['unicode'][r375_currentGlyph['unicode']['length'] - 1]] = r375_currentGlyph;
            };
            r375_xn$startfrom$1aao = _r375_t0['start-from']['bind'](_r375_t0);
            r375_xn$lineto$5sIl = _r375_t0['line-to']['bind'](_r375_t0);
            r375_xn$curveto$1aao = _r375_t0['curve-to']['bind'](_r375_t0);
            r375_xn$cubicto$1aao = _r375_t0['cubic-to']['bind'](_r375_t0);
            r375_xn$putshapes$9Jrj = _r375_t0['put-shapes']['bind'](_r375_t0);
            r375_xn$reverselast$3qIs = _r375_t0['reverse-last']['bind'](_r375_t0);
            r375_include = _r375_t0['include']['bind'](_r375_t0);
            r375_xn$createstroke$7Hrq = _r375_t0['create-stroke']['bind'](_r375_t0);
            r375_xn$setanchor$9Jrj = _r375_t0['set-anchor']['bind'](_r375_t0);
            _r375_t0['gizmo'] = r4_globalTransform;
            _r375_t0['set-width'](r4_WIDTH);
            r375_xn$setwidth$9Jrj(r4_WIDTH);
            r375_xn$assignunicode$7Hrq(')');
            r375_p = 0.6;
            r375_include(r375_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r375_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r375_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t168() {
            var r378_currentGlyph, r378_xn$setwidth$9Jrj, r378_xn$assignunicode$7Hrq, r378_xn$startfrom$1aao, r378_xn$lineto$5sIl, r378_xn$curveto$1aao, r378_xn$cubicto$1aao, r378_xn$putshapes$9Jrj, r378_xn$reverselast$3qIs, r378_include, r378_xn$createstroke$7Hrq, r378_xn$setanchor$9Jrj, _r378_t0, _r378_t1, _r378_t2;
            _r378_t0 = this;
            r378_currentGlyph = _r378_t0;
            r378_xn$setwidth$9Jrj = _r378_t0['set-width']['bind'](_r378_t0);
            r378_xn$assignunicode$7Hrq = function _r378_t2(r379_code) {
                var r379_code, _r379_t0, _r379_t1;
                r378_currentGlyph['assign-unicode'](r379_code);
                return r4_unicodeGlyphs[r378_currentGlyph['unicode'][r378_currentGlyph['unicode']['length'] - 1]] = r378_currentGlyph;
            };
            r378_xn$startfrom$1aao = _r378_t0['start-from']['bind'](_r378_t0);
            r378_xn$lineto$5sIl = _r378_t0['line-to']['bind'](_r378_t0);
            r378_xn$curveto$1aao = _r378_t0['curve-to']['bind'](_r378_t0);
            r378_xn$cubicto$1aao = _r378_t0['cubic-to']['bind'](_r378_t0);
            r378_xn$putshapes$9Jrj = _r378_t0['put-shapes']['bind'](_r378_t0);
            r378_xn$reverselast$3qIs = _r378_t0['reverse-last']['bind'](_r378_t0);
            r378_include = _r378_t0['include']['bind'](_r378_t0);
            r378_xn$createstroke$7Hrq = _r378_t0['create-stroke']['bind'](_r378_t0);
            r378_xn$setanchor$9Jrj = _r378_t0['set-anchor']['bind'](_r378_t0);
            _r378_t0['gizmo'] = r4_globalTransform;
            _r378_t0['set-width'](r4_WIDTH);
            r378_xn$setwidth$9Jrj(r4_WIDTH);
            r378_xn$assignunicode$7Hrq('[');
            r378_include(r378_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r378_include(r378_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r378_include(r378_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t169() {
            var r381_currentGlyph, r381_xn$setwidth$9Jrj, r381_xn$assignunicode$7Hrq, r381_xn$startfrom$1aao, r381_xn$lineto$5sIl, r381_xn$curveto$1aao, r381_xn$cubicto$1aao, r381_xn$putshapes$9Jrj, r381_xn$reverselast$3qIs, r381_include, r381_xn$createstroke$7Hrq, r381_xn$setanchor$9Jrj, _r381_t0, _r381_t1, _r381_t2;
            _r381_t0 = this;
            r381_currentGlyph = _r381_t0;
            r381_xn$setwidth$9Jrj = _r381_t0['set-width']['bind'](_r381_t0);
            r381_xn$assignunicode$7Hrq = function _r381_t2(r382_code) {
                var r382_code, _r382_t0, _r382_t1;
                r381_currentGlyph['assign-unicode'](r382_code);
                return r4_unicodeGlyphs[r381_currentGlyph['unicode'][r381_currentGlyph['unicode']['length'] - 1]] = r381_currentGlyph;
            };
            r381_xn$startfrom$1aao = _r381_t0['start-from']['bind'](_r381_t0);
            r381_xn$lineto$5sIl = _r381_t0['line-to']['bind'](_r381_t0);
            r381_xn$curveto$1aao = _r381_t0['curve-to']['bind'](_r381_t0);
            r381_xn$cubicto$1aao = _r381_t0['cubic-to']['bind'](_r381_t0);
            r381_xn$putshapes$9Jrj = _r381_t0['put-shapes']['bind'](_r381_t0);
            r381_xn$reverselast$3qIs = _r381_t0['reverse-last']['bind'](_r381_t0);
            r381_include = _r381_t0['include']['bind'](_r381_t0);
            r381_xn$createstroke$7Hrq = _r381_t0['create-stroke']['bind'](_r381_t0);
            r381_xn$setanchor$9Jrj = _r381_t0['set-anchor']['bind'](_r381_t0);
            _r381_t0['gizmo'] = r4_globalTransform;
            _r381_t0['set-width'](r4_WIDTH);
            r381_xn$setwidth$9Jrj(r4_WIDTH);
            r381_xn$assignunicode$7Hrq(']');
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t170() {
            var r384_currentGlyph, r384_xn$setwidth$9Jrj, r384_xn$assignunicode$7Hrq, r384_xn$startfrom$1aao, r384_xn$lineto$5sIl, r384_xn$curveto$1aao, r384_xn$cubicto$1aao, r384_xn$putshapes$9Jrj, r384_xn$reverselast$3qIs, r384_include, r384_xn$createstroke$7Hrq, r384_xn$setanchor$9Jrj, r384_parenCenter, r384_radius, _r384_t0, _r384_t1, _r384_t2;
            _r384_t0 = this;
            r384_currentGlyph = _r384_t0;
            r384_xn$setwidth$9Jrj = _r384_t0['set-width']['bind'](_r384_t0);
            r384_xn$assignunicode$7Hrq = function _r384_t2(r385_code) {
                var r385_code, _r385_t0, _r385_t1;
                r384_currentGlyph['assign-unicode'](r385_code);
                return r4_unicodeGlyphs[r384_currentGlyph['unicode'][r384_currentGlyph['unicode']['length'] - 1]] = r384_currentGlyph;
            };
            r384_xn$startfrom$1aao = _r384_t0['start-from']['bind'](_r384_t0);
            r384_xn$lineto$5sIl = _r384_t0['line-to']['bind'](_r384_t0);
            r384_xn$curveto$1aao = _r384_t0['curve-to']['bind'](_r384_t0);
            r384_xn$cubicto$1aao = _r384_t0['cubic-to']['bind'](_r384_t0);
            r384_xn$putshapes$9Jrj = _r384_t0['put-shapes']['bind'](_r384_t0);
            r384_xn$reverselast$3qIs = _r384_t0['reverse-last']['bind'](_r384_t0);
            r384_include = _r384_t0['include']['bind'](_r384_t0);
            r384_xn$createstroke$7Hrq = _r384_t0['create-stroke']['bind'](_r384_t0);
            r384_xn$setanchor$9Jrj = _r384_t0['set-anchor']['bind'](_r384_t0);
            _r384_t0['gizmo'] = r4_globalTransform;
            _r384_t0['set-width'](r4_WIDTH);
            r384_xn$setwidth$9Jrj(r4_WIDTH);
            r384_xn$assignunicode$7Hrq('{');
            r384_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r384_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r384_parenCenter;
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r384_parenCenter, r4_parenTop - r384_radius)['line-to'](r384_parenCenter, r4_parenMid + r384_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r384_parenCenter, r4_parenBot + r384_radius)['line-to'](r384_parenCenter, r4_parenMid - r384_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t171() {
            var r387_currentGlyph, r387_xn$setwidth$9Jrj, r387_xn$assignunicode$7Hrq, r387_xn$startfrom$1aao, r387_xn$lineto$5sIl, r387_xn$curveto$1aao, r387_xn$cubicto$1aao, r387_xn$putshapes$9Jrj, r387_xn$reverselast$3qIs, r387_include, r387_xn$createstroke$7Hrq, r387_xn$setanchor$9Jrj, r387_parenCenter, r387_radius, _r387_t0, _r387_t1, _r387_t2;
            _r387_t0 = this;
            r387_currentGlyph = _r387_t0;
            r387_xn$setwidth$9Jrj = _r387_t0['set-width']['bind'](_r387_t0);
            r387_xn$assignunicode$7Hrq = function _r387_t2(r388_code) {
                var r388_code, _r388_t0, _r388_t1;
                r387_currentGlyph['assign-unicode'](r388_code);
                return r4_unicodeGlyphs[r387_currentGlyph['unicode'][r387_currentGlyph['unicode']['length'] - 1]] = r387_currentGlyph;
            };
            r387_xn$startfrom$1aao = _r387_t0['start-from']['bind'](_r387_t0);
            r387_xn$lineto$5sIl = _r387_t0['line-to']['bind'](_r387_t0);
            r387_xn$curveto$1aao = _r387_t0['curve-to']['bind'](_r387_t0);
            r387_xn$cubicto$1aao = _r387_t0['cubic-to']['bind'](_r387_t0);
            r387_xn$putshapes$9Jrj = _r387_t0['put-shapes']['bind'](_r387_t0);
            r387_xn$reverselast$3qIs = _r387_t0['reverse-last']['bind'](_r387_t0);
            r387_include = _r387_t0['include']['bind'](_r387_t0);
            r387_xn$createstroke$7Hrq = _r387_t0['create-stroke']['bind'](_r387_t0);
            r387_xn$setanchor$9Jrj = _r387_t0['set-anchor']['bind'](_r387_t0);
            _r387_t0['gizmo'] = r4_globalTransform;
            _r387_t0['set-width'](r4_WIDTH);
            r387_xn$setwidth$9Jrj(r4_WIDTH);
            r387_xn$assignunicode$7Hrq('}');
            r387_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r387_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r387_parenCenter;
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r387_parenCenter, r4_parenTop - r387_radius)['line-to'](r387_parenCenter, r4_parenMid + r387_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r387_parenCenter, r4_parenBot + r387_radius)['line-to'](r387_parenCenter, r4_parenMid - r387_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t172() {
            var r390_currentGlyph, r390_xn$setwidth$9Jrj, r390_xn$assignunicode$7Hrq, r390_xn$startfrom$1aao, r390_xn$lineto$5sIl, r390_xn$curveto$1aao, r390_xn$cubicto$1aao, r390_xn$putshapes$9Jrj, r390_xn$reverselast$3qIs, r390_include, r390_xn$createstroke$7Hrq, r390_xn$setanchor$9Jrj, _r390_t0, _r390_t1, _r390_t2;
            _r390_t0 = this;
            r390_currentGlyph = _r390_t0;
            r390_xn$setwidth$9Jrj = _r390_t0['set-width']['bind'](_r390_t0);
            r390_xn$assignunicode$7Hrq = function _r390_t2(r391_code) {
                var r391_code, _r391_t0, _r391_t1;
                r390_currentGlyph['assign-unicode'](r391_code);
                return r4_unicodeGlyphs[r390_currentGlyph['unicode'][r390_currentGlyph['unicode']['length'] - 1]] = r390_currentGlyph;
            };
            r390_xn$startfrom$1aao = _r390_t0['start-from']['bind'](_r390_t0);
            r390_xn$lineto$5sIl = _r390_t0['line-to']['bind'](_r390_t0);
            r390_xn$curveto$1aao = _r390_t0['curve-to']['bind'](_r390_t0);
            r390_xn$cubicto$1aao = _r390_t0['cubic-to']['bind'](_r390_t0);
            r390_xn$putshapes$9Jrj = _r390_t0['put-shapes']['bind'](_r390_t0);
            r390_xn$reverselast$3qIs = _r390_t0['reverse-last']['bind'](_r390_t0);
            r390_include = _r390_t0['include']['bind'](_r390_t0);
            r390_xn$createstroke$7Hrq = _r390_t0['create-stroke']['bind'](_r390_t0);
            r390_xn$setanchor$9Jrj = _r390_t0['set-anchor']['bind'](_r390_t0);
            _r390_t0['gizmo'] = r4_globalTransform;
            _r390_t0['set-width'](r4_WIDTH);
            r390_xn$setwidth$9Jrj(r4_WIDTH);
            r390_xn$assignunicode$7Hrq('.');
            r390_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t173() {
            var r393_currentGlyph, r393_xn$setwidth$9Jrj, r393_xn$assignunicode$7Hrq, r393_xn$startfrom$1aao, r393_xn$lineto$5sIl, r393_xn$curveto$1aao, r393_xn$cubicto$1aao, r393_xn$putshapes$9Jrj, r393_xn$reverselast$3qIs, r393_include, r393_xn$createstroke$7Hrq, r393_xn$setanchor$9Jrj, _r393_t0, _r393_t1, _r393_t2;
            _r393_t0 = this;
            r393_currentGlyph = _r393_t0;
            r393_xn$setwidth$9Jrj = _r393_t0['set-width']['bind'](_r393_t0);
            r393_xn$assignunicode$7Hrq = function _r393_t2(r394_code) {
                var r394_code, _r394_t0, _r394_t1;
                r393_currentGlyph['assign-unicode'](r394_code);
                return r4_unicodeGlyphs[r393_currentGlyph['unicode'][r393_currentGlyph['unicode']['length'] - 1]] = r393_currentGlyph;
            };
            r393_xn$startfrom$1aao = _r393_t0['start-from']['bind'](_r393_t0);
            r393_xn$lineto$5sIl = _r393_t0['line-to']['bind'](_r393_t0);
            r393_xn$curveto$1aao = _r393_t0['curve-to']['bind'](_r393_t0);
            r393_xn$cubicto$1aao = _r393_t0['cubic-to']['bind'](_r393_t0);
            r393_xn$putshapes$9Jrj = _r393_t0['put-shapes']['bind'](_r393_t0);
            r393_xn$reverselast$3qIs = _r393_t0['reverse-last']['bind'](_r393_t0);
            r393_include = _r393_t0['include']['bind'](_r393_t0);
            r393_xn$createstroke$7Hrq = _r393_t0['create-stroke']['bind'](_r393_t0);
            r393_xn$setanchor$9Jrj = _r393_t0['set-anchor']['bind'](_r393_t0);
            _r393_t0['gizmo'] = r4_globalTransform;
            _r393_t0['set-width'](r4_WIDTH);
            r393_xn$setwidth$9Jrj(r4_WIDTH);
            r393_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t174() {
            var r396_currentGlyph, r396_xn$setwidth$9Jrj, r396_xn$assignunicode$7Hrq, r396_xn$startfrom$1aao, r396_xn$lineto$5sIl, r396_xn$curveto$1aao, r396_xn$cubicto$1aao, r396_xn$putshapes$9Jrj, r396_xn$reverselast$3qIs, r396_include, r396_xn$createstroke$7Hrq, r396_xn$setanchor$9Jrj, r396_sw, _r396_t0, _r396_t1, _r396_t2;
            _r396_t0 = this;
            r396_currentGlyph = _r396_t0;
            r396_xn$setwidth$9Jrj = _r396_t0['set-width']['bind'](_r396_t0);
            r396_xn$assignunicode$7Hrq = function _r396_t2(r397_code) {
                var r397_code, _r397_t0, _r397_t1;
                r396_currentGlyph['assign-unicode'](r397_code);
                return r4_unicodeGlyphs[r396_currentGlyph['unicode'][r396_currentGlyph['unicode']['length'] - 1]] = r396_currentGlyph;
            };
            r396_xn$startfrom$1aao = _r396_t0['start-from']['bind'](_r396_t0);
            r396_xn$lineto$5sIl = _r396_t0['line-to']['bind'](_r396_t0);
            r396_xn$curveto$1aao = _r396_t0['curve-to']['bind'](_r396_t0);
            r396_xn$cubicto$1aao = _r396_t0['cubic-to']['bind'](_r396_t0);
            r396_xn$putshapes$9Jrj = _r396_t0['put-shapes']['bind'](_r396_t0);
            r396_xn$reverselast$3qIs = _r396_t0['reverse-last']['bind'](_r396_t0);
            r396_include = _r396_t0['include']['bind'](_r396_t0);
            r396_xn$createstroke$7Hrq = _r396_t0['create-stroke']['bind'](_r396_t0);
            r396_xn$setanchor$9Jrj = _r396_t0['set-anchor']['bind'](_r396_t0);
            _r396_t0['gizmo'] = r4_globalTransform;
            _r396_t0['set-width'](r4_WIDTH);
            r396_xn$setwidth$9Jrj(r4_WIDTH);
            r396_xn$assignunicode$7Hrq(',');
            r396_include(r4_glyphs['period']);
            r396_sw = r4_PERIODSIZE * 0.5;
            r396_include(r396_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r396_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t175() {
            var r399_currentGlyph, r399_xn$setwidth$9Jrj, r399_xn$assignunicode$7Hrq, r399_xn$startfrom$1aao, r399_xn$lineto$5sIl, r399_xn$curveto$1aao, r399_xn$cubicto$1aao, r399_xn$putshapes$9Jrj, r399_xn$reverselast$3qIs, r399_include, r399_xn$createstroke$7Hrq, r399_xn$setanchor$9Jrj, _r399_t0, _r399_t1, _r399_t2;
            _r399_t0 = this;
            r399_currentGlyph = _r399_t0;
            r399_xn$setwidth$9Jrj = _r399_t0['set-width']['bind'](_r399_t0);
            r399_xn$assignunicode$7Hrq = function _r399_t2(r400_code) {
                var r400_code, _r400_t0, _r400_t1;
                r399_currentGlyph['assign-unicode'](r400_code);
                return r4_unicodeGlyphs[r399_currentGlyph['unicode'][r399_currentGlyph['unicode']['length'] - 1]] = r399_currentGlyph;
            };
            r399_xn$startfrom$1aao = _r399_t0['start-from']['bind'](_r399_t0);
            r399_xn$lineto$5sIl = _r399_t0['line-to']['bind'](_r399_t0);
            r399_xn$curveto$1aao = _r399_t0['curve-to']['bind'](_r399_t0);
            r399_xn$cubicto$1aao = _r399_t0['cubic-to']['bind'](_r399_t0);
            r399_xn$putshapes$9Jrj = _r399_t0['put-shapes']['bind'](_r399_t0);
            r399_xn$reverselast$3qIs = _r399_t0['reverse-last']['bind'](_r399_t0);
            r399_include = _r399_t0['include']['bind'](_r399_t0);
            r399_xn$createstroke$7Hrq = _r399_t0['create-stroke']['bind'](_r399_t0);
            r399_xn$setanchor$9Jrj = _r399_t0['set-anchor']['bind'](_r399_t0);
            _r399_t0['gizmo'] = r4_globalTransform;
            _r399_t0['set-width'](r4_WIDTH);
            r399_xn$setwidth$9Jrj(r4_WIDTH);
            r399_xn$assignunicode$7Hrq(':');
            r399_include(r4_glyphs['period']);
            r399_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t176() {
            var r402_currentGlyph, r402_xn$setwidth$9Jrj, r402_xn$assignunicode$7Hrq, r402_xn$startfrom$1aao, r402_xn$lineto$5sIl, r402_xn$curveto$1aao, r402_xn$cubicto$1aao, r402_xn$putshapes$9Jrj, r402_xn$reverselast$3qIs, r402_include, r402_xn$createstroke$7Hrq, r402_xn$setanchor$9Jrj, _r402_t0, _r402_t1, _r402_t2;
            _r402_t0 = this;
            r402_currentGlyph = _r402_t0;
            r402_xn$setwidth$9Jrj = _r402_t0['set-width']['bind'](_r402_t0);
            r402_xn$assignunicode$7Hrq = function _r402_t2(r403_code) {
                var r403_code, _r403_t0, _r403_t1;
                r402_currentGlyph['assign-unicode'](r403_code);
                return r4_unicodeGlyphs[r402_currentGlyph['unicode'][r402_currentGlyph['unicode']['length'] - 1]] = r402_currentGlyph;
            };
            r402_xn$startfrom$1aao = _r402_t0['start-from']['bind'](_r402_t0);
            r402_xn$lineto$5sIl = _r402_t0['line-to']['bind'](_r402_t0);
            r402_xn$curveto$1aao = _r402_t0['curve-to']['bind'](_r402_t0);
            r402_xn$cubicto$1aao = _r402_t0['cubic-to']['bind'](_r402_t0);
            r402_xn$putshapes$9Jrj = _r402_t0['put-shapes']['bind'](_r402_t0);
            r402_xn$reverselast$3qIs = _r402_t0['reverse-last']['bind'](_r402_t0);
            r402_include = _r402_t0['include']['bind'](_r402_t0);
            r402_xn$createstroke$7Hrq = _r402_t0['create-stroke']['bind'](_r402_t0);
            r402_xn$setanchor$9Jrj = _r402_t0['set-anchor']['bind'](_r402_t0);
            _r402_t0['gizmo'] = r4_globalTransform;
            _r402_t0['set-width'](r4_WIDTH);
            r402_xn$setwidth$9Jrj(r4_WIDTH);
            r402_xn$assignunicode$7Hrq(';');
            r402_include(r4_glyphs['comma']);
            r402_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t177() {
            var r405_currentGlyph, r405_xn$setwidth$9Jrj, r405_xn$assignunicode$7Hrq, r405_xn$startfrom$1aao, r405_xn$lineto$5sIl, r405_xn$curveto$1aao, r405_xn$cubicto$1aao, r405_xn$putshapes$9Jrj, r405_xn$reverselast$3qIs, r405_include, r405_xn$createstroke$7Hrq, r405_xn$setanchor$9Jrj, _r405_t0, _r405_t1, _r405_t2;
            _r405_t0 = this;
            r405_currentGlyph = _r405_t0;
            r405_xn$setwidth$9Jrj = _r405_t0['set-width']['bind'](_r405_t0);
            r405_xn$assignunicode$7Hrq = function _r405_t2(r406_code) {
                var r406_code, _r406_t0, _r406_t1;
                r405_currentGlyph['assign-unicode'](r406_code);
                return r4_unicodeGlyphs[r405_currentGlyph['unicode'][r405_currentGlyph['unicode']['length'] - 1]] = r405_currentGlyph;
            };
            r405_xn$startfrom$1aao = _r405_t0['start-from']['bind'](_r405_t0);
            r405_xn$lineto$5sIl = _r405_t0['line-to']['bind'](_r405_t0);
            r405_xn$curveto$1aao = _r405_t0['curve-to']['bind'](_r405_t0);
            r405_xn$cubicto$1aao = _r405_t0['cubic-to']['bind'](_r405_t0);
            r405_xn$putshapes$9Jrj = _r405_t0['put-shapes']['bind'](_r405_t0);
            r405_xn$reverselast$3qIs = _r405_t0['reverse-last']['bind'](_r405_t0);
            r405_include = _r405_t0['include']['bind'](_r405_t0);
            r405_xn$createstroke$7Hrq = _r405_t0['create-stroke']['bind'](_r405_t0);
            r405_xn$setanchor$9Jrj = _r405_t0['set-anchor']['bind'](_r405_t0);
            _r405_t0['gizmo'] = r4_globalTransform;
            _r405_t0['set-width'](r4_WIDTH);
            r405_xn$setwidth$9Jrj(r4_WIDTH);
            r405_xn$assignunicode$7Hrq('?');
            r405_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r405_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r405_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t178() {
            var r408_currentGlyph, r408_xn$setwidth$9Jrj, r408_xn$assignunicode$7Hrq, r408_xn$startfrom$1aao, r408_xn$lineto$5sIl, r408_xn$curveto$1aao, r408_xn$cubicto$1aao, r408_xn$putshapes$9Jrj, r408_xn$reverselast$3qIs, r408_include, r408_xn$createstroke$7Hrq, r408_xn$setanchor$9Jrj, _r408_t0, _r408_t1, _r408_t2;
            _r408_t0 = this;
            r408_currentGlyph = _r408_t0;
            r408_xn$setwidth$9Jrj = _r408_t0['set-width']['bind'](_r408_t0);
            r408_xn$assignunicode$7Hrq = function _r408_t2(r409_code) {
                var r409_code, _r409_t0, _r409_t1;
                r408_currentGlyph['assign-unicode'](r409_code);
                return r4_unicodeGlyphs[r408_currentGlyph['unicode'][r408_currentGlyph['unicode']['length'] - 1]] = r408_currentGlyph;
            };
            r408_xn$startfrom$1aao = _r408_t0['start-from']['bind'](_r408_t0);
            r408_xn$lineto$5sIl = _r408_t0['line-to']['bind'](_r408_t0);
            r408_xn$curveto$1aao = _r408_t0['curve-to']['bind'](_r408_t0);
            r408_xn$cubicto$1aao = _r408_t0['cubic-to']['bind'](_r408_t0);
            r408_xn$putshapes$9Jrj = _r408_t0['put-shapes']['bind'](_r408_t0);
            r408_xn$reverselast$3qIs = _r408_t0['reverse-last']['bind'](_r408_t0);
            r408_include = _r408_t0['include']['bind'](_r408_t0);
            r408_xn$createstroke$7Hrq = _r408_t0['create-stroke']['bind'](_r408_t0);
            r408_xn$setanchor$9Jrj = _r408_t0['set-anchor']['bind'](_r408_t0);
            _r408_t0['gizmo'] = r4_globalTransform;
            _r408_t0['set-width'](r4_WIDTH);
            r408_xn$setwidth$9Jrj(r4_WIDTH);
            r408_xn$assignunicode$7Hrq('!');
            r408_include(r408_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r408_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t179() {
            var r411_currentGlyph, r411_xn$setwidth$9Jrj, r411_xn$assignunicode$7Hrq, r411_xn$startfrom$1aao, r411_xn$lineto$5sIl, r411_xn$curveto$1aao, r411_xn$cubicto$1aao, r411_xn$putshapes$9Jrj, r411_xn$reverselast$3qIs, r411_include, r411_xn$createstroke$7Hrq, r411_xn$setanchor$9Jrj, _r411_t0, _r411_t1, _r411_t2;
            _r411_t0 = this;
            r411_currentGlyph = _r411_t0;
            r411_xn$setwidth$9Jrj = _r411_t0['set-width']['bind'](_r411_t0);
            r411_xn$assignunicode$7Hrq = function _r411_t2(r412_code) {
                var r412_code, _r412_t0, _r412_t1;
                r411_currentGlyph['assign-unicode'](r412_code);
                return r4_unicodeGlyphs[r411_currentGlyph['unicode'][r411_currentGlyph['unicode']['length'] - 1]] = r411_currentGlyph;
            };
            r411_xn$startfrom$1aao = _r411_t0['start-from']['bind'](_r411_t0);
            r411_xn$lineto$5sIl = _r411_t0['line-to']['bind'](_r411_t0);
            r411_xn$curveto$1aao = _r411_t0['curve-to']['bind'](_r411_t0);
            r411_xn$cubicto$1aao = _r411_t0['cubic-to']['bind'](_r411_t0);
            r411_xn$putshapes$9Jrj = _r411_t0['put-shapes']['bind'](_r411_t0);
            r411_xn$reverselast$3qIs = _r411_t0['reverse-last']['bind'](_r411_t0);
            r411_include = _r411_t0['include']['bind'](_r411_t0);
            r411_xn$createstroke$7Hrq = _r411_t0['create-stroke']['bind'](_r411_t0);
            r411_xn$setanchor$9Jrj = _r411_t0['set-anchor']['bind'](_r411_t0);
            _r411_t0['gizmo'] = r4_globalTransform;
            _r411_t0['set-width'](r4_WIDTH);
            r411_xn$setwidth$9Jrj(r4_WIDTH);
            r411_xn$assignunicode$7Hrq('_');
            r411_include(r411_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t180() {
            var r414_currentGlyph, r414_xn$setwidth$9Jrj, r414_xn$assignunicode$7Hrq, r414_xn$startfrom$1aao, r414_xn$lineto$5sIl, r414_xn$curveto$1aao, r414_xn$cubicto$1aao, r414_xn$putshapes$9Jrj, r414_xn$reverselast$3qIs, r414_include, r414_xn$createstroke$7Hrq, r414_xn$setanchor$9Jrj, _r414_t0, _r414_t1, _r414_t2;
            _r414_t0 = this;
            r414_currentGlyph = _r414_t0;
            r414_xn$setwidth$9Jrj = _r414_t0['set-width']['bind'](_r414_t0);
            r414_xn$assignunicode$7Hrq = function _r414_t2(r415_code) {
                var r415_code, _r415_t0, _r415_t1;
                r414_currentGlyph['assign-unicode'](r415_code);
                return r4_unicodeGlyphs[r414_currentGlyph['unicode'][r414_currentGlyph['unicode']['length'] - 1]] = r414_currentGlyph;
            };
            r414_xn$startfrom$1aao = _r414_t0['start-from']['bind'](_r414_t0);
            r414_xn$lineto$5sIl = _r414_t0['line-to']['bind'](_r414_t0);
            r414_xn$curveto$1aao = _r414_t0['curve-to']['bind'](_r414_t0);
            r414_xn$cubicto$1aao = _r414_t0['cubic-to']['bind'](_r414_t0);
            r414_xn$putshapes$9Jrj = _r414_t0['put-shapes']['bind'](_r414_t0);
            r414_xn$reverselast$3qIs = _r414_t0['reverse-last']['bind'](_r414_t0);
            r414_include = _r414_t0['include']['bind'](_r414_t0);
            r414_xn$createstroke$7Hrq = _r414_t0['create-stroke']['bind'](_r414_t0);
            r414_xn$setanchor$9Jrj = _r414_t0['set-anchor']['bind'](_r414_t0);
            _r414_t0['gizmo'] = r4_globalTransform;
            _r414_t0['set-width'](r4_WIDTH);
            r414_xn$setwidth$9Jrj(r4_WIDTH);
            r414_xn$assignunicode$7Hrq('-');
            r414_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t181() {
            var r417_currentGlyph, r417_xn$setwidth$9Jrj, r417_xn$assignunicode$7Hrq, r417_xn$startfrom$1aao, r417_xn$lineto$5sIl, r417_xn$curveto$1aao, r417_xn$cubicto$1aao, r417_xn$putshapes$9Jrj, r417_xn$reverselast$3qIs, r417_include, r417_xn$createstroke$7Hrq, r417_xn$setanchor$9Jrj, _r417_t0, _r417_t1, _r417_t2;
            _r417_t0 = this;
            r417_currentGlyph = _r417_t0;
            r417_xn$setwidth$9Jrj = _r417_t0['set-width']['bind'](_r417_t0);
            r417_xn$assignunicode$7Hrq = function _r417_t2(r418_code) {
                var r418_code, _r418_t0, _r418_t1;
                r417_currentGlyph['assign-unicode'](r418_code);
                return r4_unicodeGlyphs[r417_currentGlyph['unicode'][r417_currentGlyph['unicode']['length'] - 1]] = r417_currentGlyph;
            };
            r417_xn$startfrom$1aao = _r417_t0['start-from']['bind'](_r417_t0);
            r417_xn$lineto$5sIl = _r417_t0['line-to']['bind'](_r417_t0);
            r417_xn$curveto$1aao = _r417_t0['curve-to']['bind'](_r417_t0);
            r417_xn$cubicto$1aao = _r417_t0['cubic-to']['bind'](_r417_t0);
            r417_xn$putshapes$9Jrj = _r417_t0['put-shapes']['bind'](_r417_t0);
            r417_xn$reverselast$3qIs = _r417_t0['reverse-last']['bind'](_r417_t0);
            r417_include = _r417_t0['include']['bind'](_r417_t0);
            r417_xn$createstroke$7Hrq = _r417_t0['create-stroke']['bind'](_r417_t0);
            r417_xn$setanchor$9Jrj = _r417_t0['set-anchor']['bind'](_r417_t0);
            _r417_t0['gizmo'] = r4_globalTransform;
            _r417_t0['set-width'](r4_WIDTH);
            r417_xn$setwidth$9Jrj(r4_WIDTH);
            r417_xn$assignunicode$7Hrq('+');
            r417_include(r4_glyphs['hyphen']);
            r417_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t182() {
            var r420_currentGlyph, r420_xn$setwidth$9Jrj, r420_xn$assignunicode$7Hrq, r420_xn$startfrom$1aao, r420_xn$lineto$5sIl, r420_xn$curveto$1aao, r420_xn$cubicto$1aao, r420_xn$putshapes$9Jrj, r420_xn$reverselast$3qIs, r420_include, r420_xn$createstroke$7Hrq, r420_xn$setanchor$9Jrj, _r420_t0, _r420_t1, _r420_t2;
            _r420_t0 = this;
            r420_currentGlyph = _r420_t0;
            r420_xn$setwidth$9Jrj = _r420_t0['set-width']['bind'](_r420_t0);
            r420_xn$assignunicode$7Hrq = function _r420_t2(r421_code) {
                var r421_code, _r421_t0, _r421_t1;
                r420_currentGlyph['assign-unicode'](r421_code);
                return r4_unicodeGlyphs[r420_currentGlyph['unicode'][r420_currentGlyph['unicode']['length'] - 1]] = r420_currentGlyph;
            };
            r420_xn$startfrom$1aao = _r420_t0['start-from']['bind'](_r420_t0);
            r420_xn$lineto$5sIl = _r420_t0['line-to']['bind'](_r420_t0);
            r420_xn$curveto$1aao = _r420_t0['curve-to']['bind'](_r420_t0);
            r420_xn$cubicto$1aao = _r420_t0['cubic-to']['bind'](_r420_t0);
            r420_xn$putshapes$9Jrj = _r420_t0['put-shapes']['bind'](_r420_t0);
            r420_xn$reverselast$3qIs = _r420_t0['reverse-last']['bind'](_r420_t0);
            r420_include = _r420_t0['include']['bind'](_r420_t0);
            r420_xn$createstroke$7Hrq = _r420_t0['create-stroke']['bind'](_r420_t0);
            r420_xn$setanchor$9Jrj = _r420_t0['set-anchor']['bind'](_r420_t0);
            _r420_t0['gizmo'] = r4_globalTransform;
            _r420_t0['set-width'](r4_WIDTH);
            r420_xn$setwidth$9Jrj(r4_WIDTH);
            r420_xn$assignunicode$7Hrq('=');
            r420_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r420_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t183() {
            var r423_currentGlyph, r423_xn$setwidth$9Jrj, r423_xn$assignunicode$7Hrq, r423_xn$startfrom$1aao, r423_xn$lineto$5sIl, r423_xn$curveto$1aao, r423_xn$cubicto$1aao, r423_xn$putshapes$9Jrj, r423_xn$reverselast$3qIs, r423_include, r423_xn$createstroke$7Hrq, r423_xn$setanchor$9Jrj, _r423_t0, _r423_t1, _r423_t2;
            _r423_t0 = this;
            r423_currentGlyph = _r423_t0;
            r423_xn$setwidth$9Jrj = _r423_t0['set-width']['bind'](_r423_t0);
            r423_xn$assignunicode$7Hrq = function _r423_t2(r424_code) {
                var r424_code, _r424_t0, _r424_t1;
                r423_currentGlyph['assign-unicode'](r424_code);
                return r4_unicodeGlyphs[r423_currentGlyph['unicode'][r423_currentGlyph['unicode']['length'] - 1]] = r423_currentGlyph;
            };
            r423_xn$startfrom$1aao = _r423_t0['start-from']['bind'](_r423_t0);
            r423_xn$lineto$5sIl = _r423_t0['line-to']['bind'](_r423_t0);
            r423_xn$curveto$1aao = _r423_t0['curve-to']['bind'](_r423_t0);
            r423_xn$cubicto$1aao = _r423_t0['cubic-to']['bind'](_r423_t0);
            r423_xn$putshapes$9Jrj = _r423_t0['put-shapes']['bind'](_r423_t0);
            r423_xn$reverselast$3qIs = _r423_t0['reverse-last']['bind'](_r423_t0);
            r423_include = _r423_t0['include']['bind'](_r423_t0);
            r423_xn$createstroke$7Hrq = _r423_t0['create-stroke']['bind'](_r423_t0);
            r423_xn$setanchor$9Jrj = _r423_t0['set-anchor']['bind'](_r423_t0);
            _r423_t0['gizmo'] = r4_globalTransform;
            _r423_t0['set-width'](r4_WIDTH);
            r423_xn$setwidth$9Jrj(r4_WIDTH);
            r423_xn$assignunicode$7Hrq('|');
            r423_include(r423_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t184() {
            var r426_currentGlyph, r426_xn$setwidth$9Jrj, r426_xn$assignunicode$7Hrq, r426_xn$startfrom$1aao, r426_xn$lineto$5sIl, r426_xn$curveto$1aao, r426_xn$cubicto$1aao, r426_xn$putshapes$9Jrj, r426_xn$reverselast$3qIs, r426_include, r426_xn$createstroke$7Hrq, r426_xn$setanchor$9Jrj, r426_cor, _r426_t0, _r426_t1, _r426_t2;
            _r426_t0 = this;
            r426_currentGlyph = _r426_t0;
            r426_xn$setwidth$9Jrj = _r426_t0['set-width']['bind'](_r426_t0);
            r426_xn$assignunicode$7Hrq = function _r426_t2(r427_code) {
                var r427_code, _r427_t0, _r427_t1;
                r426_currentGlyph['assign-unicode'](r427_code);
                return r4_unicodeGlyphs[r426_currentGlyph['unicode'][r426_currentGlyph['unicode']['length'] - 1]] = r426_currentGlyph;
            };
            r426_xn$startfrom$1aao = _r426_t0['start-from']['bind'](_r426_t0);
            r426_xn$lineto$5sIl = _r426_t0['line-to']['bind'](_r426_t0);
            r426_xn$curveto$1aao = _r426_t0['curve-to']['bind'](_r426_t0);
            r426_xn$cubicto$1aao = _r426_t0['cubic-to']['bind'](_r426_t0);
            r426_xn$putshapes$9Jrj = _r426_t0['put-shapes']['bind'](_r426_t0);
            r426_xn$reverselast$3qIs = _r426_t0['reverse-last']['bind'](_r426_t0);
            r426_include = _r426_t0['include']['bind'](_r426_t0);
            r426_xn$createstroke$7Hrq = _r426_t0['create-stroke']['bind'](_r426_t0);
            r426_xn$setanchor$9Jrj = _r426_t0['set-anchor']['bind'](_r426_t0);
            _r426_t0['gizmo'] = r4_globalTransform;
            _r426_t0['set-width'](r4_WIDTH);
            r426_xn$setwidth$9Jrj(r4_WIDTH);
            r426_xn$assignunicode$7Hrq('/');
            r426_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r426_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r426_xn$lineto$5sIl(r4_SB + r4_STROKE * r426_cor, r4_parenBot);
            r426_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r426_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r426_cor, r4_parenTop);
            r426_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t185() {
            var r429_currentGlyph, r429_xn$setwidth$9Jrj, r429_xn$assignunicode$7Hrq, r429_xn$startfrom$1aao, r429_xn$lineto$5sIl, r429_xn$curveto$1aao, r429_xn$cubicto$1aao, r429_xn$putshapes$9Jrj, r429_xn$reverselast$3qIs, r429_include, r429_xn$createstroke$7Hrq, r429_xn$setanchor$9Jrj, r429_cor, _r429_t0, _r429_t1, _r429_t2;
            _r429_t0 = this;
            r429_currentGlyph = _r429_t0;
            r429_xn$setwidth$9Jrj = _r429_t0['set-width']['bind'](_r429_t0);
            r429_xn$assignunicode$7Hrq = function _r429_t2(r430_code) {
                var r430_code, _r430_t0, _r430_t1;
                r429_currentGlyph['assign-unicode'](r430_code);
                return r4_unicodeGlyphs[r429_currentGlyph['unicode'][r429_currentGlyph['unicode']['length'] - 1]] = r429_currentGlyph;
            };
            r429_xn$startfrom$1aao = _r429_t0['start-from']['bind'](_r429_t0);
            r429_xn$lineto$5sIl = _r429_t0['line-to']['bind'](_r429_t0);
            r429_xn$curveto$1aao = _r429_t0['curve-to']['bind'](_r429_t0);
            r429_xn$cubicto$1aao = _r429_t0['cubic-to']['bind'](_r429_t0);
            r429_xn$putshapes$9Jrj = _r429_t0['put-shapes']['bind'](_r429_t0);
            r429_xn$reverselast$3qIs = _r429_t0['reverse-last']['bind'](_r429_t0);
            r429_include = _r429_t0['include']['bind'](_r429_t0);
            r429_xn$createstroke$7Hrq = _r429_t0['create-stroke']['bind'](_r429_t0);
            r429_xn$setanchor$9Jrj = _r429_t0['set-anchor']['bind'](_r429_t0);
            _r429_t0['gizmo'] = r4_globalTransform;
            _r429_t0['set-width'](r4_WIDTH);
            r429_xn$setwidth$9Jrj(r4_WIDTH);
            r429_xn$assignunicode$7Hrq('\\');
            r429_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r429_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r429_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r429_cor, r4_parenBot);
            r429_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r429_xn$lineto$5sIl(r4_SB + r4_STROKE * r429_cor, r4_parenTop);
            r429_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t186() {
            var r432_currentGlyph, r432_xn$setwidth$9Jrj, r432_xn$assignunicode$7Hrq, r432_xn$startfrom$1aao, r432_xn$lineto$5sIl, r432_xn$curveto$1aao, r432_xn$cubicto$1aao, r432_xn$putshapes$9Jrj, r432_xn$reverselast$3qIs, r432_include, r432_xn$createstroke$7Hrq, r432_xn$setanchor$9Jrj, r432_fine, _r432_t0, _r432_t1, _r432_t2;
            _r432_t0 = this;
            r432_currentGlyph = _r432_t0;
            r432_xn$setwidth$9Jrj = _r432_t0['set-width']['bind'](_r432_t0);
            r432_xn$assignunicode$7Hrq = function _r432_t2(r433_code) {
                var r433_code, _r433_t0, _r433_t1;
                r432_currentGlyph['assign-unicode'](r433_code);
                return r4_unicodeGlyphs[r432_currentGlyph['unicode'][r432_currentGlyph['unicode']['length'] - 1]] = r432_currentGlyph;
            };
            r432_xn$startfrom$1aao = _r432_t0['start-from']['bind'](_r432_t0);
            r432_xn$lineto$5sIl = _r432_t0['line-to']['bind'](_r432_t0);
            r432_xn$curveto$1aao = _r432_t0['curve-to']['bind'](_r432_t0);
            r432_xn$cubicto$1aao = _r432_t0['cubic-to']['bind'](_r432_t0);
            r432_xn$putshapes$9Jrj = _r432_t0['put-shapes']['bind'](_r432_t0);
            r432_xn$reverselast$3qIs = _r432_t0['reverse-last']['bind'](_r432_t0);
            r432_include = _r432_t0['include']['bind'](_r432_t0);
            r432_xn$createstroke$7Hrq = _r432_t0['create-stroke']['bind'](_r432_t0);
            r432_xn$setanchor$9Jrj = _r432_t0['set-anchor']['bind'](_r432_t0);
            _r432_t0['gizmo'] = r4_globalTransform;
            _r432_t0['set-width'](r4_WIDTH);
            r432_xn$setwidth$9Jrj(r4_WIDTH);
            r432_xn$assignunicode$7Hrq('#');
            r432_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r432_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r432_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r432_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r432_fine, r4_parenTop - r432_fine, r432_fine));
            r432_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r432_fine, r4_parenTop - r432_fine, r432_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t187() {
            var r435_currentGlyph, r435_xn$setwidth$9Jrj, r435_xn$assignunicode$7Hrq, r435_xn$startfrom$1aao, r435_xn$lineto$5sIl, r435_xn$curveto$1aao, r435_xn$cubicto$1aao, r435_xn$putshapes$9Jrj, r435_xn$reverselast$3qIs, r435_include, r435_xn$createstroke$7Hrq, r435_xn$setanchor$9Jrj, r435_top, r435_bot, _r435_t0, _r435_t1, _r435_t2;
            _r435_t0 = this;
            r435_currentGlyph = _r435_t0;
            r435_xn$setwidth$9Jrj = _r435_t0['set-width']['bind'](_r435_t0);
            r435_xn$assignunicode$7Hrq = function _r435_t2(r436_code) {
                var r436_code, _r436_t0, _r436_t1;
                r435_currentGlyph['assign-unicode'](r436_code);
                return r4_unicodeGlyphs[r435_currentGlyph['unicode'][r435_currentGlyph['unicode']['length'] - 1]] = r435_currentGlyph;
            };
            r435_xn$startfrom$1aao = _r435_t0['start-from']['bind'](_r435_t0);
            r435_xn$lineto$5sIl = _r435_t0['line-to']['bind'](_r435_t0);
            r435_xn$curveto$1aao = _r435_t0['curve-to']['bind'](_r435_t0);
            r435_xn$cubicto$1aao = _r435_t0['cubic-to']['bind'](_r435_t0);
            r435_xn$putshapes$9Jrj = _r435_t0['put-shapes']['bind'](_r435_t0);
            r435_xn$reverselast$3qIs = _r435_t0['reverse-last']['bind'](_r435_t0);
            r435_include = _r435_t0['include']['bind'](_r435_t0);
            r435_xn$createstroke$7Hrq = _r435_t0['create-stroke']['bind'](_r435_t0);
            r435_xn$setanchor$9Jrj = _r435_t0['set-anchor']['bind'](_r435_t0);
            _r435_t0['gizmo'] = r4_globalTransform;
            _r435_t0['set-width'](r4_WIDTH);
            r435_xn$setwidth$9Jrj(r4_WIDTH);
            r435_xn$assignunicode$7Hrq('<');
            r435_top = r0_mix(0, r4_CAP, 0.75);
            r435_bot = r0_mix(0, r4_CAP, 0.1);
            r435_include(r435_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r435_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r435_top, r435_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r435_include(r435_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r435_top, r435_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r435_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t188() {
            var r438_currentGlyph, r438_xn$setwidth$9Jrj, r438_xn$assignunicode$7Hrq, r438_xn$startfrom$1aao, r438_xn$lineto$5sIl, r438_xn$curveto$1aao, r438_xn$cubicto$1aao, r438_xn$putshapes$9Jrj, r438_xn$reverselast$3qIs, r438_include, r438_xn$createstroke$7Hrq, r438_xn$setanchor$9Jrj, r438_top, r438_bot, _r438_t0, _r438_t1, _r438_t2;
            _r438_t0 = this;
            r438_currentGlyph = _r438_t0;
            r438_xn$setwidth$9Jrj = _r438_t0['set-width']['bind'](_r438_t0);
            r438_xn$assignunicode$7Hrq = function _r438_t2(r439_code) {
                var r439_code, _r439_t0, _r439_t1;
                r438_currentGlyph['assign-unicode'](r439_code);
                return r4_unicodeGlyphs[r438_currentGlyph['unicode'][r438_currentGlyph['unicode']['length'] - 1]] = r438_currentGlyph;
            };
            r438_xn$startfrom$1aao = _r438_t0['start-from']['bind'](_r438_t0);
            r438_xn$lineto$5sIl = _r438_t0['line-to']['bind'](_r438_t0);
            r438_xn$curveto$1aao = _r438_t0['curve-to']['bind'](_r438_t0);
            r438_xn$cubicto$1aao = _r438_t0['cubic-to']['bind'](_r438_t0);
            r438_xn$putshapes$9Jrj = _r438_t0['put-shapes']['bind'](_r438_t0);
            r438_xn$reverselast$3qIs = _r438_t0['reverse-last']['bind'](_r438_t0);
            r438_include = _r438_t0['include']['bind'](_r438_t0);
            r438_xn$createstroke$7Hrq = _r438_t0['create-stroke']['bind'](_r438_t0);
            r438_xn$setanchor$9Jrj = _r438_t0['set-anchor']['bind'](_r438_t0);
            _r438_t0['gizmo'] = r4_globalTransform;
            _r438_t0['set-width'](r4_WIDTH);
            r438_xn$setwidth$9Jrj(r4_WIDTH);
            r438_xn$assignunicode$7Hrq('>');
            r438_top = r0_mix(0, r4_CAP, 0.75);
            r438_bot = r0_mix(0, r4_CAP, 0.1);
            r438_include(r438_xn$createstroke$7Hrq()['start-from'](r4_SB, r438_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r438_top, r438_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r438_include(r438_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r438_top, r438_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r438_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t189() {
            var r441_currentGlyph, r441_xn$setwidth$9Jrj, r441_xn$assignunicode$7Hrq, r441_xn$startfrom$1aao, r441_xn$lineto$5sIl, r441_xn$curveto$1aao, r441_xn$cubicto$1aao, r441_xn$putshapes$9Jrj, r441_xn$reverselast$3qIs, r441_include, r441_xn$createstroke$7Hrq, r441_xn$setanchor$9Jrj, _r441_t0, _r441_t1, _r441_t2;
            _r441_t0 = this;
            r441_currentGlyph = _r441_t0;
            r441_xn$setwidth$9Jrj = _r441_t0['set-width']['bind'](_r441_t0);
            r441_xn$assignunicode$7Hrq = function _r441_t2(r442_code) {
                var r442_code, _r442_t0, _r442_t1;
                r441_currentGlyph['assign-unicode'](r442_code);
                return r4_unicodeGlyphs[r441_currentGlyph['unicode'][r441_currentGlyph['unicode']['length'] - 1]] = r441_currentGlyph;
            };
            r441_xn$startfrom$1aao = _r441_t0['start-from']['bind'](_r441_t0);
            r441_xn$lineto$5sIl = _r441_t0['line-to']['bind'](_r441_t0);
            r441_xn$curveto$1aao = _r441_t0['curve-to']['bind'](_r441_t0);
            r441_xn$cubicto$1aao = _r441_t0['cubic-to']['bind'](_r441_t0);
            r441_xn$putshapes$9Jrj = _r441_t0['put-shapes']['bind'](_r441_t0);
            r441_xn$reverselast$3qIs = _r441_t0['reverse-last']['bind'](_r441_t0);
            r441_include = _r441_t0['include']['bind'](_r441_t0);
            r441_xn$createstroke$7Hrq = _r441_t0['create-stroke']['bind'](_r441_t0);
            r441_xn$setanchor$9Jrj = _r441_t0['set-anchor']['bind'](_r441_t0);
            _r441_t0['gizmo'] = r4_globalTransform;
            _r441_t0['set-width'](r4_WIDTH);
            r441_xn$setwidth$9Jrj(r4_WIDTH);
            r441_xn$assignunicode$7Hrq(39);
            r441_include(r441_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t190() {
            var r444_currentGlyph, r444_xn$setwidth$9Jrj, r444_xn$assignunicode$7Hrq, r444_xn$startfrom$1aao, r444_xn$lineto$5sIl, r444_xn$curveto$1aao, r444_xn$cubicto$1aao, r444_xn$putshapes$9Jrj, r444_xn$reverselast$3qIs, r444_include, r444_xn$createstroke$7Hrq, r444_xn$setanchor$9Jrj, _r444_t0, _r444_t1, _r444_t2;
            _r444_t0 = this;
            r444_currentGlyph = _r444_t0;
            r444_xn$setwidth$9Jrj = _r444_t0['set-width']['bind'](_r444_t0);
            r444_xn$assignunicode$7Hrq = function _r444_t2(r445_code) {
                var r445_code, _r445_t0, _r445_t1;
                r444_currentGlyph['assign-unicode'](r445_code);
                return r4_unicodeGlyphs[r444_currentGlyph['unicode'][r444_currentGlyph['unicode']['length'] - 1]] = r444_currentGlyph;
            };
            r444_xn$startfrom$1aao = _r444_t0['start-from']['bind'](_r444_t0);
            r444_xn$lineto$5sIl = _r444_t0['line-to']['bind'](_r444_t0);
            r444_xn$curveto$1aao = _r444_t0['curve-to']['bind'](_r444_t0);
            r444_xn$cubicto$1aao = _r444_t0['cubic-to']['bind'](_r444_t0);
            r444_xn$putshapes$9Jrj = _r444_t0['put-shapes']['bind'](_r444_t0);
            r444_xn$reverselast$3qIs = _r444_t0['reverse-last']['bind'](_r444_t0);
            r444_include = _r444_t0['include']['bind'](_r444_t0);
            r444_xn$createstroke$7Hrq = _r444_t0['create-stroke']['bind'](_r444_t0);
            r444_xn$setanchor$9Jrj = _r444_t0['set-anchor']['bind'](_r444_t0);
            _r444_t0['gizmo'] = r4_globalTransform;
            _r444_t0['set-width'](r4_WIDTH);
            r444_xn$setwidth$9Jrj(r4_WIDTH);
            r444_xn$assignunicode$7Hrq(34);
            r444_include(r444_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r444_include(r444_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t191() {
            var r447_currentGlyph, r447_xn$setwidth$9Jrj, r447_xn$assignunicode$7Hrq, r447_xn$startfrom$1aao, r447_xn$lineto$5sIl, r447_xn$curveto$1aao, r447_xn$cubicto$1aao, r447_xn$putshapes$9Jrj, r447_xn$reverselast$3qIs, r447_include, r447_xn$createstroke$7Hrq, r447_xn$setanchor$9Jrj, r447_radius, r447_centery, r447_fine, r447_final, r447_j, _r447_t0, _r447_t1, _r447_t2, _r447_t3, _r447_t4;
            _r447_t2 = this;
            r447_currentGlyph = _r447_t2;
            r447_xn$setwidth$9Jrj = _r447_t2['set-width']['bind'](_r447_t2);
            r447_xn$assignunicode$7Hrq = function _r447_t4(r448_code) {
                var r448_code, _r448_t0, _r448_t1;
                r447_currentGlyph['assign-unicode'](r448_code);
                return r4_unicodeGlyphs[r447_currentGlyph['unicode'][r447_currentGlyph['unicode']['length'] - 1]] = r447_currentGlyph;
            };
            r447_xn$startfrom$1aao = _r447_t2['start-from']['bind'](_r447_t2);
            r447_xn$lineto$5sIl = _r447_t2['line-to']['bind'](_r447_t2);
            r447_xn$curveto$1aao = _r447_t2['curve-to']['bind'](_r447_t2);
            r447_xn$cubicto$1aao = _r447_t2['cubic-to']['bind'](_r447_t2);
            r447_xn$putshapes$9Jrj = _r447_t2['put-shapes']['bind'](_r447_t2);
            r447_xn$reverselast$3qIs = _r447_t2['reverse-last']['bind'](_r447_t2);
            r447_include = _r447_t2['include']['bind'](_r447_t2);
            r447_xn$createstroke$7Hrq = _r447_t2['create-stroke']['bind'](_r447_t2);
            r447_xn$setanchor$9Jrj = _r447_t2['set-anchor']['bind'](_r447_t2);
            _r447_t2['gizmo'] = r4_globalTransform;
            _r447_t2['set-width'](r4_WIDTH);
            r447_xn$setwidth$9Jrj(r4_WIDTH);
            r447_xn$assignunicode$7Hrq('*');
            r447_radius = r4_LONGJUT * 1.2;
            r447_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r447_fine = r4_STROKE * 0.4;
            r447_final = 0.5 * Math['min'](r4_STROKE, r447_radius * Math['PI'] * 2 / 10);
            _r447_t0 = 0;
            _r447_t1 = 5;
            r447_j = _r447_t0;
            for (; r447_j < _r447_t1; r447_j = r447_j + 1) {
                r447_include(r447_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r447_centery)['set-width'](r447_fine, r447_fine)['line-to'](r4_MIDDLE + r447_radius * Math['sin'](r447_j / 5 * Math['PI'] * 2), r447_centery + r447_radius * Math['cos'](r447_j / 5 * Math['PI'] * 2))['set-width'](r447_final, r447_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t192() {
            var r451_currentGlyph, r451_xn$setwidth$9Jrj, r451_xn$assignunicode$7Hrq, r451_xn$startfrom$1aao, r451_xn$lineto$5sIl, r451_xn$curveto$1aao, r451_xn$cubicto$1aao, r451_xn$putshapes$9Jrj, r451_xn$reverselast$3qIs, r451_include, r451_xn$createstroke$7Hrq, r451_xn$setanchor$9Jrj, r451_percentDotSize, r451_cor, _r451_t0, _r451_t1, _r451_t2;
            _r451_t0 = this;
            r451_currentGlyph = _r451_t0;
            r451_xn$setwidth$9Jrj = _r451_t0['set-width']['bind'](_r451_t0);
            r451_xn$assignunicode$7Hrq = function _r451_t2(r452_code) {
                var r452_code, _r452_t0, _r452_t1;
                r451_currentGlyph['assign-unicode'](r452_code);
                return r4_unicodeGlyphs[r451_currentGlyph['unicode'][r451_currentGlyph['unicode']['length'] - 1]] = r451_currentGlyph;
            };
            r451_xn$startfrom$1aao = _r451_t0['start-from']['bind'](_r451_t0);
            r451_xn$lineto$5sIl = _r451_t0['line-to']['bind'](_r451_t0);
            r451_xn$curveto$1aao = _r451_t0['curve-to']['bind'](_r451_t0);
            r451_xn$cubicto$1aao = _r451_t0['cubic-to']['bind'](_r451_t0);
            r451_xn$putshapes$9Jrj = _r451_t0['put-shapes']['bind'](_r451_t0);
            r451_xn$reverselast$3qIs = _r451_t0['reverse-last']['bind'](_r451_t0);
            r451_include = _r451_t0['include']['bind'](_r451_t0);
            r451_xn$createstroke$7Hrq = _r451_t0['create-stroke']['bind'](_r451_t0);
            r451_xn$setanchor$9Jrj = _r451_t0['set-anchor']['bind'](_r451_t0);
            _r451_t0['gizmo'] = r4_globalTransform;
            _r451_t0['set-width'](r4_WIDTH);
            r451_xn$setwidth$9Jrj(r4_WIDTH);
            r451_xn$assignunicode$7Hrq('%');
            r451_percentDotSize = 0.3;
            r451_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r451_xn$startfrom$1aao(r4_SB, 0);
            r451_xn$lineto$5sIl(r4_SB + r4_STROKE * r451_cor, 0);
            r451_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r451_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r451_cor, r4_CAP);
            r451_include(r451_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r451_include(r451_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_isAboveMark = function _r4_t193(r453_mark) {
            var r453_mark, _r453_t0, _r453_t1;
            return r453_mark && r453_mark['anchors'] && r453_mark['anchors']['above'] && r453_mark['anchors']['above']['type'] === r4_MARK;
        };
        _r4_t0 = 160;
        _r4_t1 = 65535;
        r4_code = _r4_t0;
        for (; r4_code < _r4_t1; r4_code = r4_code + 1) {
            if (!r4_unicodeGlyphs[r4_code]) {
                r4_str = String['fromCharCode'](r4_code);
                r4_nfd = r4_str['normalize']('NFD');
                if (r4_nfd['length'] > 1) {
                    r4_parts = [];
                    r4_allFound = true;
                    r4_hasMarkAbove = false;
                    _r4_t2 = 0;
                    _r4_t3 = r4_nfd['length'];
                    r4_j = _r4_t2;
                    for (; r4_j < _r4_t3; r4_j = r4_j + 1) {
                        r4_parts[r4_j] = r4_unicodeGlyphs[r4_nfd['charCodeAt'](r4_j)];
                        if (!r4_parts[r4_j])
                            _r4_t201 = r4_allFound = false;
                        else
                            _r4_t201 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t202 = r4_hasMarkAbove = true;
                        else
                            _r4_t202 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t204 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t204 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t205 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t205 = void 0;
                        _r4_t203 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t206(r456_part) {
                            var r456_part, _r456_t0, _r456_t1;
                            return r456_part['name'];
                        })['join']('_'), function _r4_t207() {
                            var r458_currentGlyph, r458_xn$setwidth$9Jrj, r458_xn$assignunicode$7Hrq, r458_xn$startfrom$1aao, r458_xn$lineto$5sIl, r458_xn$curveto$1aao, r458_xn$cubicto$1aao, r458_xn$putshapes$9Jrj, r458_xn$reverselast$3qIs, r458_include, r458_xn$createstroke$7Hrq, r458_xn$setanchor$9Jrj, r458_part, _r458_t0, _r458_t1, _r458_t2, _r458_t3, _r458_t4, _r458_t5;
                            _r458_t3 = this;
                            r458_currentGlyph = _r458_t3;
                            r458_xn$setwidth$9Jrj = _r458_t3['set-width']['bind'](_r458_t3);
                            r458_xn$assignunicode$7Hrq = function _r458_t5(r459_code) {
                                var r459_code, _r459_t0, _r459_t1;
                                r458_currentGlyph['assign-unicode'](r459_code);
                                return r4_unicodeGlyphs[r458_currentGlyph['unicode'][r458_currentGlyph['unicode']['length'] - 1]] = r458_currentGlyph;
                            };
                            r458_xn$startfrom$1aao = _r458_t3['start-from']['bind'](_r458_t3);
                            r458_xn$lineto$5sIl = _r458_t3['line-to']['bind'](_r458_t3);
                            r458_xn$curveto$1aao = _r458_t3['curve-to']['bind'](_r458_t3);
                            r458_xn$cubicto$1aao = _r458_t3['cubic-to']['bind'](_r458_t3);
                            r458_xn$putshapes$9Jrj = _r458_t3['put-shapes']['bind'](_r458_t3);
                            r458_xn$reverselast$3qIs = _r458_t3['reverse-last']['bind'](_r458_t3);
                            r458_include = _r458_t3['include']['bind'](_r458_t3);
                            r458_xn$createstroke$7Hrq = _r458_t3['create-stroke']['bind'](_r458_t3);
                            r458_xn$setanchor$9Jrj = _r458_t3['set-anchor']['bind'](_r458_t3);
                            _r458_t3['gizmo'] = r4_globalTransform;
                            _r458_t3['set-width'](r4_WIDTH);
                            r458_xn$assignunicode$7Hrq(r4_code);
                            r458_include(r4_parts[0], r4_BASE);
                            _r458_t0 = r4_parts['slice'](1);
                            _r458_t1 = _r458_t0['length'];
                            _r458_t2 = 0;
                            for (; _r458_t2 < _r458_t1; _r458_t2 = _r458_t2 + 1) {
                                r458_part = _r458_t0[_r458_t2];
                                r458_include(r458_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t195 = _r4_t203;
                }
                _r4_t194 = _r4_t195;
            } else
                _r4_t194 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t196() {
            var r462_currentGlyph, r462_xn$setwidth$9Jrj, r462_xn$assignunicode$7Hrq, r462_xn$startfrom$1aao, r462_xn$lineto$5sIl, r462_xn$curveto$1aao, r462_xn$cubicto$1aao, r462_xn$putshapes$9Jrj, r462_xn$reverselast$3qIs, r462_include, r462_xn$createstroke$7Hrq, r462_xn$setanchor$9Jrj, _r462_t0, _r462_t1, _r462_t2;
            _r462_t0 = this;
            r462_currentGlyph = _r462_t0;
            r462_xn$setwidth$9Jrj = _r462_t0['set-width']['bind'](_r462_t0);
            r462_xn$assignunicode$7Hrq = function _r462_t2(r463_code) {
                var r463_code, _r463_t0, _r463_t1;
                r462_currentGlyph['assign-unicode'](r463_code);
                return r4_unicodeGlyphs[r462_currentGlyph['unicode'][r462_currentGlyph['unicode']['length'] - 1]] = r462_currentGlyph;
            };
            r462_xn$startfrom$1aao = _r462_t0['start-from']['bind'](_r462_t0);
            r462_xn$lineto$5sIl = _r462_t0['line-to']['bind'](_r462_t0);
            r462_xn$curveto$1aao = _r462_t0['curve-to']['bind'](_r462_t0);
            r462_xn$cubicto$1aao = _r462_t0['cubic-to']['bind'](_r462_t0);
            r462_xn$putshapes$9Jrj = _r462_t0['put-shapes']['bind'](_r462_t0);
            r462_xn$reverselast$3qIs = _r462_t0['reverse-last']['bind'](_r462_t0);
            r462_include = _r462_t0['include']['bind'](_r462_t0);
            r462_xn$createstroke$7Hrq = _r462_t0['create-stroke']['bind'](_r462_t0);
            r462_xn$setanchor$9Jrj = _r462_t0['set-anchor']['bind'](_r462_t0);
            _r462_t0['gizmo'] = r4_globalTransform;
            _r462_t0['set-width'](r4_WIDTH);
            r462_xn$assignunicode$7Hrq('`');
            r462_include(r4_glyphs['space'], r4_BASE);
            r462_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t197() {
            var r465_currentGlyph, r465_xn$setwidth$9Jrj, r465_xn$assignunicode$7Hrq, r465_xn$startfrom$1aao, r465_xn$lineto$5sIl, r465_xn$curveto$1aao, r465_xn$cubicto$1aao, r465_xn$putshapes$9Jrj, r465_xn$reverselast$3qIs, r465_include, r465_xn$createstroke$7Hrq, r465_xn$setanchor$9Jrj, _r465_t0, _r465_t1, _r465_t2;
            _r465_t0 = this;
            r465_currentGlyph = _r465_t0;
            r465_xn$setwidth$9Jrj = _r465_t0['set-width']['bind'](_r465_t0);
            r465_xn$assignunicode$7Hrq = function _r465_t2(r466_code) {
                var r466_code, _r466_t0, _r466_t1;
                r465_currentGlyph['assign-unicode'](r466_code);
                return r4_unicodeGlyphs[r465_currentGlyph['unicode'][r465_currentGlyph['unicode']['length'] - 1]] = r465_currentGlyph;
            };
            r465_xn$startfrom$1aao = _r465_t0['start-from']['bind'](_r465_t0);
            r465_xn$lineto$5sIl = _r465_t0['line-to']['bind'](_r465_t0);
            r465_xn$curveto$1aao = _r465_t0['curve-to']['bind'](_r465_t0);
            r465_xn$cubicto$1aao = _r465_t0['cubic-to']['bind'](_r465_t0);
            r465_xn$putshapes$9Jrj = _r465_t0['put-shapes']['bind'](_r465_t0);
            r465_xn$reverselast$3qIs = _r465_t0['reverse-last']['bind'](_r465_t0);
            r465_include = _r465_t0['include']['bind'](_r465_t0);
            r465_xn$createstroke$7Hrq = _r465_t0['create-stroke']['bind'](_r465_t0);
            r465_xn$setanchor$9Jrj = _r465_t0['set-anchor']['bind'](_r465_t0);
            _r465_t0['gizmo'] = r4_globalTransform;
            _r465_t0['set-width'](r4_WIDTH);
            r465_xn$assignunicode$7Hrq(180);
            r465_include(r4_glyphs['space'], r4_BASE);
            r465_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t198() {
            var r468_currentGlyph, r468_xn$setwidth$9Jrj, r468_xn$assignunicode$7Hrq, r468_xn$startfrom$1aao, r468_xn$lineto$5sIl, r468_xn$curveto$1aao, r468_xn$cubicto$1aao, r468_xn$putshapes$9Jrj, r468_xn$reverselast$3qIs, r468_include, r468_xn$createstroke$7Hrq, r468_xn$setanchor$9Jrj, _r468_t0, _r468_t1, _r468_t2;
            _r468_t0 = this;
            r468_currentGlyph = _r468_t0;
            r468_xn$setwidth$9Jrj = _r468_t0['set-width']['bind'](_r468_t0);
            r468_xn$assignunicode$7Hrq = function _r468_t2(r469_code) {
                var r469_code, _r469_t0, _r469_t1;
                r468_currentGlyph['assign-unicode'](r469_code);
                return r4_unicodeGlyphs[r468_currentGlyph['unicode'][r468_currentGlyph['unicode']['length'] - 1]] = r468_currentGlyph;
            };
            r468_xn$startfrom$1aao = _r468_t0['start-from']['bind'](_r468_t0);
            r468_xn$lineto$5sIl = _r468_t0['line-to']['bind'](_r468_t0);
            r468_xn$curveto$1aao = _r468_t0['curve-to']['bind'](_r468_t0);
            r468_xn$cubicto$1aao = _r468_t0['cubic-to']['bind'](_r468_t0);
            r468_xn$putshapes$9Jrj = _r468_t0['put-shapes']['bind'](_r468_t0);
            r468_xn$reverselast$3qIs = _r468_t0['reverse-last']['bind'](_r468_t0);
            r468_include = _r468_t0['include']['bind'](_r468_t0);
            r468_xn$createstroke$7Hrq = _r468_t0['create-stroke']['bind'](_r468_t0);
            r468_xn$setanchor$9Jrj = _r468_t0['set-anchor']['bind'](_r468_t0);
            _r468_t0['gizmo'] = r4_globalTransform;
            _r468_t0['set-width'](r4_WIDTH);
            r468_xn$setwidth$9Jrj(r4_WIDTH);
            r468_xn$assignunicode$7Hrq(94);
            r468_include(r4_glyphs['space'], r4_BASE);
            r468_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t199() {
            var r471_currentGlyph, r471_xn$setwidth$9Jrj, r471_xn$assignunicode$7Hrq, r471_xn$startfrom$1aao, r471_xn$lineto$5sIl, r471_xn$curveto$1aao, r471_xn$cubicto$1aao, r471_xn$putshapes$9Jrj, r471_xn$reverselast$3qIs, r471_include, r471_xn$createstroke$7Hrq, r471_xn$setanchor$9Jrj, _r471_t0, _r471_t1, _r471_t2;
            _r471_t0 = this;
            r471_currentGlyph = _r471_t0;
            r471_xn$setwidth$9Jrj = _r471_t0['set-width']['bind'](_r471_t0);
            r471_xn$assignunicode$7Hrq = function _r471_t2(r472_code) {
                var r472_code, _r472_t0, _r472_t1;
                r471_currentGlyph['assign-unicode'](r472_code);
                return r4_unicodeGlyphs[r471_currentGlyph['unicode'][r471_currentGlyph['unicode']['length'] - 1]] = r471_currentGlyph;
            };
            r471_xn$startfrom$1aao = _r471_t0['start-from']['bind'](_r471_t0);
            r471_xn$lineto$5sIl = _r471_t0['line-to']['bind'](_r471_t0);
            r471_xn$curveto$1aao = _r471_t0['curve-to']['bind'](_r471_t0);
            r471_xn$cubicto$1aao = _r471_t0['cubic-to']['bind'](_r471_t0);
            r471_xn$putshapes$9Jrj = _r471_t0['put-shapes']['bind'](_r471_t0);
            r471_xn$reverselast$3qIs = _r471_t0['reverse-last']['bind'](_r471_t0);
            r471_include = _r471_t0['include']['bind'](_r471_t0);
            r471_xn$createstroke$7Hrq = _r471_t0['create-stroke']['bind'](_r471_t0);
            r471_xn$setanchor$9Jrj = _r471_t0['set-anchor']['bind'](_r471_t0);
            _r471_t0['gizmo'] = r4_globalTransform;
            _r471_t0['set-width'](r4_WIDTH);
            r471_xn$setwidth$9Jrj(r4_WIDTH);
            r471_xn$assignunicode$7Hrq('~');
            r471_include(r4_glyphs['space'], r4_BASE);
            r471_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t200() {
            var r474_currentGlyph, r474_xn$setwidth$9Jrj, r474_xn$assignunicode$7Hrq, r474_xn$startfrom$1aao, r474_xn$lineto$5sIl, r474_xn$curveto$1aao, r474_xn$cubicto$1aao, r474_xn$putshapes$9Jrj, r474_xn$reverselast$3qIs, r474_include, r474_xn$createstroke$7Hrq, r474_xn$setanchor$9Jrj, _r474_t0, _r474_t1, _r474_t2;
            _r474_t0 = this;
            r474_currentGlyph = _r474_t0;
            r474_xn$setwidth$9Jrj = _r474_t0['set-width']['bind'](_r474_t0);
            r474_xn$assignunicode$7Hrq = function _r474_t2(r475_code) {
                var r475_code, _r475_t0, _r475_t1;
                r474_currentGlyph['assign-unicode'](r475_code);
                return r4_unicodeGlyphs[r474_currentGlyph['unicode'][r474_currentGlyph['unicode']['length'] - 1]] = r474_currentGlyph;
            };
            r474_xn$startfrom$1aao = _r474_t0['start-from']['bind'](_r474_t0);
            r474_xn$lineto$5sIl = _r474_t0['line-to']['bind'](_r474_t0);
            r474_xn$curveto$1aao = _r474_t0['curve-to']['bind'](_r474_t0);
            r474_xn$cubicto$1aao = _r474_t0['cubic-to']['bind'](_r474_t0);
            r474_xn$putshapes$9Jrj = _r474_t0['put-shapes']['bind'](_r474_t0);
            r474_xn$reverselast$3qIs = _r474_t0['reverse-last']['bind'](_r474_t0);
            r474_include = _r474_t0['include']['bind'](_r474_t0);
            r474_xn$createstroke$7Hrq = _r474_t0['create-stroke']['bind'](_r474_t0);
            r474_xn$setanchor$9Jrj = _r474_t0['set-anchor']['bind'](_r474_t0);
            _r474_t0['gizmo'] = r4_globalTransform;
            _r474_t0['set-width'](r4_WIDTH);
            r474_xn$setwidth$9Jrj(r4_WIDTH);
            r474_xn$assignunicode$7Hrq(168);
            r474_include(r4_glyphs['space'], r4_BASE);
            r474_include(r4_glyphs['dieresisAbove']);
            return void 0;
        });
        _r4_t4 = r4_glyphList;
        _r4_t5 = _r4_t4['length'];
        _r4_t6 = 0;
        for (; _r4_t6 < _r4_t5; _r4_t6 = _r4_t6 + 1) {
            r4_glyph = _r4_t4[_r4_t6];
            r4_glyph['advanceWidth'] = r4_glyph['advanceWidth'] * r4_upmscale;
            if (r4_glyph['contours']) {
                _r4_t7 = r4_glyph['contours'];
                _r4_t8 = _r4_t7['length'];
                _r4_t9 = 0;
                _r4_t209 = _r4_t9 < _r4_t8;
                for (; _r4_t209; _r4_t209 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t210 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t208 = _r4_t210;
            } else
                _r4_t208 = void 0;
        }
        return r4_font;
    };
}
