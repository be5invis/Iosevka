{
    var r0_Glyph, r0_Stroke, r0_tp, r0_mix, r0_linreg, r0_fallback, _r0_t0, _r0_t1, _r0_t2, _r0_t3;
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    r0_tp = require('./support/transform')['transformPoint'];
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
        var r4_para, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_WHITENESS, r4_adviceBlackness, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_XSHookUpper, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_XSHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_eshHook, r4_ezhshape, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219, _r4_t220, _r4_t221, _r4_t222, _r4_t223, _r4_t224, _r4_t225, _r4_t226, _r4_t227, _r4_t228, _r4_t229, _r4_t230, _r4_t231, _r4_t232, _r4_t233, _r4_t234;
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
        r4_WHITENESS = (r4_XH - r4_STROKE * 2.5) * (r4_RIGHTSB - r4_SB) * (1 / 3) / (r4_XH * (r4_RIGHTSB - r4_SB));
        r4_adviceBlackness = function _r4_t15(r5_m) {
            var r5_m, _r5_t0, _r5_t1;
            return Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * (1 - r4_WHITENESS) / r5_m);
        };
        r4_BASE = 'base';
        r4_MARK = 'mark';
        r4_MARKBASE = 'markbase';
        r4_AS_BASE = 'AS-BASE';
        r4_tm = function _r4_t16(r6_anchor) {
            var r6_anchor, _r6_t0, _r6_t1;
            return {
                'x': r6_anchor['x'] * r4_globalTransform['xx'] + r6_anchor['y'] * r4_globalTransform['yx'] + r4_globalTransform['x'],
                'y': r6_anchor['x'] * r4_globalTransform['xy'] + r6_anchor['y'] * r4_globalTransform['yy'] + r4_globalTransform['y'],
                'type': r6_anchor['type']
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
        _r4_t17 = r4_font['name'];
        _r4_t18 = 'fullName';
        if (r4_para['style'] !== 'Regular')
            _r4_t19 = r4_para['family'] + ' ' + r4_para['style'];
        else
            _r4_t19 = r4_para['family'];
        _r4_t17[_r4_t18] = _r4_t19;
        r4_font['name']['postScriptName'] = r4_font['name']['fullName']['replace'](/ /g, '-');
        r4_font['name']['copyright'] = r4_para['copyright'];
        r4_font['OS/2']['usWeightClass'] = r4_para['weight'];
        r4_font['OS/2']['bProportion'] = 9;
        r4_font['OS/2']['bWeight'] = 1 + r4_para['weight'] / 100;
        _r4_t20 = r4_font['OS/2'];
        _r4_t21 = 'fsSelection';
        if (r4_para['isBold'])
            _r4_t22 = 32;
        else
            _r4_t22 = 0;
        if (r4_para['isItalic'])
            _r4_t23 = 1;
        else
            _r4_t23 = 0;
        _r4_t24 = _r4_t22 + _r4_t23;
        if (!r4_para['isBold'] && !r4_para['isItalic'])
            _r4_t25 = 64;
        else
            _r4_t25 = 0;
        _r4_t26 = _r4_t24 + _r4_t25;
        _r4_t27 = 128;
        _r4_t20[_r4_t21] = _r4_t26 + _r4_t27;
        _r4_t28 = r4_font['head'];
        _r4_t29 = 'macStyle';
        if (r4_para['isBold'])
            _r4_t30 = 1;
        else
            _r4_t30 = 0;
        if (r4_para['isItalic'])
            _r4_t31 = 2;
        else
            _r4_t31 = 0;
        _r4_t28[_r4_t29] = _r4_t30 + _r4_t31;
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
        r4_xn$createglyph$7Hrq = function _r4_t32(r11_name, r11_actions) {
            var r11_name, r11_actions, r11_glyphObject, _r11_t0, _r11_t1;
            console['log']('Building /' + r11_name);
            r11_glyphObject = new r0_Glyph(r11_name);
            r4_glyphList['push'](r11_glyphObject);
            r4_glyphs[r11_name] = r11_glyphObject;
            r11_actions['call'](r11_glyphObject);
            return r11_glyphObject;
        };
        r4_xn$selectvariant$7Hrq = function _r4_t33(r12_glyphid, r12_unicode, r12_default) {
            var r12_glyphid, r12_unicode, r12_default, r12_variant, r12_chosenGlyph, _r12_t0, _r12_t1, _r12_t2;
            r12_variant = r4_variantSelector[r12_glyphid] || r12_default;
            r12_chosenGlyph = r4_glyphs[r12_glyphid + '.' + r12_variant];
            r4_glyphs[r12_glyphid] = r12_chosenGlyph;
            if (r12_unicode) {
                r12_chosenGlyph['assign-unicode'](r12_unicode);
                r12_chosenGlyph['dontExport'] = false;
                return r4_unicodeGlyphs[r12_chosenGlyph['unicode'][r12_chosenGlyph['unicode']['length'] - 1]] = r12_chosenGlyph;
            } else
                return void 0;
        };
        r4_xgrid = function _r4_t34(r13_p) {
            var r13_p, _r13_t0, _r13_t1;
            return r0_mix(r4_SB, r4_RIGHTSB, r13_p);
        };
        r4_xn$createglyph$7Hrq('space', function _r4_t35() {
            var r15_currentGlyph, r15_xn$setwidth$9Jrj, r15_xn$assignunicode$7Hrq, r15_xn$startfrom$1aao, r15_xn$lineto$5sIl, r15_xn$curveto$1aao, r15_xn$cubicto$1aao, r15_xn$putshapes$9Jrj, r15_xn$reverselast$3qIs, r15_include, r15_xn$createstroke$7Hrq, r15_xn$setanchor$9Jrj, r15_xn$dontexport$5sIl, _r15_t0, _r15_t1, _r15_t2, _r15_t3;
            _r15_t0 = this;
            r15_currentGlyph = _r15_t0;
            r15_xn$setwidth$9Jrj = _r15_t0['set-width']['bind'](_r15_t0);
            r15_xn$assignunicode$7Hrq = function _r15_t2(r16_code) {
                var r16_code, _r16_t0, _r16_t1;
                r15_currentGlyph['assign-unicode'](r16_code);
                return r4_unicodeGlyphs[r15_currentGlyph['unicode'][r15_currentGlyph['unicode']['length'] - 1]] = r15_currentGlyph;
            };
            r15_xn$startfrom$1aao = _r15_t0['start-from']['bind'](_r15_t0);
            r15_xn$lineto$5sIl = _r15_t0['line-to']['bind'](_r15_t0);
            r15_xn$curveto$1aao = _r15_t0['curve-to']['bind'](_r15_t0);
            r15_xn$cubicto$1aao = _r15_t0['cubic-to']['bind'](_r15_t0);
            r15_xn$putshapes$9Jrj = _r15_t0['put-shapes']['bind'](_r15_t0);
            r15_xn$reverselast$3qIs = _r15_t0['reverse-last']['bind'](_r15_t0);
            r15_include = _r15_t0['include']['bind'](_r15_t0);
            r15_xn$createstroke$7Hrq = _r15_t0['create-stroke']['bind'](_r15_t0);
            r15_xn$setanchor$9Jrj = _r15_t0['set-anchor']['bind'](_r15_t0);
            r15_xn$dontexport$5sIl = function _r15_t3() {
                var _r17_t0, _r17_t1;
                return r15_currentGlyph['dontExport'] = true;
            };
            _r15_t0['gizmo'] = r4_globalTransform;
            _r15_t0['set-width'](r4_WIDTH);
            r15_xn$setwidth$9Jrj(r4_WIDTH);
            r15_xn$assignunicode$7Hrq(' ');
            r15_include(r4_eMarks);
            return void 0;
        });
        r4_Ring = function _r4_t36(r18_u, r18_d, r18_l, r18_r) {
            var r18_u, r18_d, r18_l, r18_r, r18_my, r18_mx, r18_s, _r18_t0, _r18_t1;
            r18_my = (r18_u + r18_d) / 2;
            r18_mx = (r18_l + r18_r) / 2;
            r18_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r18_mx, r18_d)['cubic-to'](r18_mx + (r18_l - r18_mx) * r4_CKAPPA, r18_d, r18_l, r18_my + (r18_d - r18_my) * r4_CKAPPA, r18_l, r18_my)['cubic-to'](r18_l, r18_my + (r18_u - r18_my) * r4_CKAPPA, r18_mx + (r18_l - r18_mx) * r4_CKAPPA, r18_u, r18_mx, r18_u)['cubic-to'](r18_mx + (r18_r - r18_mx) * r4_CKAPPA, r18_u, r18_r, r18_my + (r18_u - r18_my) * r4_CKAPPA, r18_r, r18_my)['cubic-to'](r18_r, r18_my + (r18_d - r18_my) * r4_CKAPPA, r18_mx + (r18_r - r18_mx) * r4_CKAPPA, r18_d, r18_mx, r18_d);
            return r18_s['points'];
        };
        r4_ORing = function _r4_t37(r19_u, r19_d, r19_l, r19_r, r19_smooth) {
            var r19_u, r19_d, r19_l, r19_r, r19_smooth, r19_myu, r19_myd, r19_mx, r19_s, _r19_t0, _r19_t1;
            r19_myu = r19_u - r19_smooth;
            r19_myd = r19_d + r19_smooth;
            r19_mx = (r19_l + r19_r) / 2;
            r19_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r19_mx, r19_d)['cubic-to'](r19_mx + (r19_l - r19_mx) * r4_CKAPPA, r19_d, r19_l, r19_myd + (r19_d - r19_myd) * r4_CKAPPA, r19_l, r19_myd)['line-to'](r19_l, r19_myu)['cubic-to'](r19_l, r19_myu + (r19_u - r19_myu) * r4_CKAPPA, r19_mx + (r19_l - r19_mx) * r4_CKAPPA, r19_u, r19_mx, r19_u)['cubic-to'](r19_mx + (r19_r - r19_mx) * r4_CKAPPA, r19_u, r19_r, r19_myu + (r19_u - r19_myu) * r4_CKAPPA, r19_r, r19_myu)['line-to'](r19_r, r19_myd)['cubic-to'](r19_r, r19_myd + (r19_d - r19_myd) * r4_CKAPPA, r19_mx + (r19_r - r19_mx) * r4_CKAPPA, r19_d, r19_mx, r19_d);
            return r19_s['points'];
        };
        r4_leftwardTopSerif = function _r4_t38(r20_x, r20_y, r20_length) {
            var r20_x, r20_y, r20_length, _r20_t0, _r20_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r20_x + r4_HALFSTROKE, r20_y)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['line-to'](r20_x - r20_length - r4_globalTransform['yx'] * r4_STROKE, r20_y)['to-outline']();
        };
        r4_leftwardBottomSerif = function _r4_t39(r21_x, r21_y, r21_length) {
            var r21_x, r21_y, r21_length, _r21_t0, _r21_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r21_x + r4_HALFSTROKE, r21_y)['heads-to'](r4_LEFTWARD)['set-width'](0, r4_STROKE)['line-to'](r21_x - r21_length + r4_globalTransform['yx'] * r4_STROKE, r21_y)['to-outline']();
        };
        r4_rightwardTopSerif = function _r4_t40(r22_x, r22_y, r22_length) {
            var r22_x, r22_y, r22_length, _r22_t0, _r22_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r22_x - r4_HALFSTROKE, r22_y)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r22_x + r22_length - r4_globalTransform['yx'] * r4_STROKE, r22_y)['to-outline']();
        };
        r4_rightwardBottomSerif = function _r4_t41(r23_x, r23_y, r23_length) {
            var r23_x, r23_y, r23_length, _r23_t0, _r23_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r23_x - r4_HALFSTROKE, r23_y)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r23_x + r23_length + r4_globalTransform['yx'] * r4_STROKE, r23_y)['to-outline']();
        };
        r4_centerTopSerif = function _r4_t42(r24_x, r24_y, r24_length) {
            var r24_x, r24_y, r24_length, _r24_t0, _r24_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r24_x + r24_length - r4_globalTransform['yx'] * r4_STROKE, r24_y)['set-width'](r4_STROKE, 0)['line-to'](r24_x - r24_length - r4_globalTransform['yx'] * r4_STROKE, r24_y)['to-outline']();
        };
        r4_centerBottomSerif = function _r4_t43(r25_x, r25_y, r25_length) {
            var r25_x, r25_y, r25_length, _r25_t0, _r25_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r25_x + r25_length + r4_globalTransform['yx'] * r4_STROKE, r25_y)['set-width'](0, r4_STROKE)['line-to'](r25_x - r25_length + r4_globalTransform['yx'] * r4_STROKE, r25_y)['to-outline']();
        };
        r4_xsStrand = function _r4_t44(r26__xleft, r26_yleft, r26__xright, r26_yright, r26__halfstroke0, r26__halfstroke1, r26__ess, r26__expansion, r26__roundp) {
            var r26__xleft, r26_yleft, r26__xright, r26_yright, r26__halfstroke0, r26__halfstroke1, r26__ess, r26__expansion, r26__roundp, r26_expansion, r26_halfstroke0, r26_halfstroke1, r26_ess, r26_yItalicCorrection, r26_xItalicCorrection, r26_roundsize, r26_roundleft, r26_roundright, r26_xleft, r26_xright, r26_sxleft, r26_sxright, r26_syleft, r26_syright, _r26_t0, _r26_t1, _r26_t2, _r26_t3;
            r26_expansion = r26__expansion || 0.25;
            r26_halfstroke0 = r26__halfstroke0 || r4_HALFSTROKE;
            r26_halfstroke1 = r26__halfstroke1 || r4_HALFSTROKE;
            r26_ess = r26__ess || (r26_halfstroke0 + r26_halfstroke1) / 2;
            r26_yItalicCorrection = r4_globalTransform['yx'] * 0.985;
            r26_xItalicCorrection = 1 / Math['sqrt'](1 - r26_yItalicCorrection * r26_yItalicCorrection);
            _r26_t2 = r26__roundp || r4_SMOOTHA * 0.4;
            if (r26_yleft < r26_yright)
                _r26_t3 = -1;
            else
                _r26_t3 = 1;
            r26_roundsize = _r26_t2 * _r26_t3;
            r26_roundleft = r26_yleft - r26_roundsize;
            r26_roundright = r26_yright + r26_roundsize;
            r26_xleft = r26__xleft + r26_halfstroke0 * r26_xItalicCorrection;
            r26_xright = r26__xright - r26_halfstroke1 * r26_xItalicCorrection;
            r26_sxleft = r0_mix(r26_xleft, r26_xright, 0.5 - r26_expansion);
            r26_sxright = r0_mix(r26_xleft, r26_xright, 0.5 + r26_expansion);
            r26_syleft = r0_mix(r26_roundleft, r26_roundright, 0.5 - r26_expansion);
            r26_syright = r0_mix(r26_roundleft, r26_roundright, 0.5 + r26_expansion);
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r26_xleft, r26_yleft - r26_halfstroke0 * r26_yItalicCorrection)['set-width'](r26_halfstroke0, r26_halfstroke0)['curve-to'](r26_xleft, r26_roundleft, r26_sxleft, r26_syleft)['set-width'](r26_ess, r26_ess)['line-to'](r26_sxright, r26_syright)['curve-to'](r26_xright, r26_roundright, r26_xright, r26_yright + r26_halfstroke1 * r26_yItalicCorrection)['set-width'](r26_halfstroke1, r26_halfstroke1)['to-outline']();
        };
        r4_sStrand = function _r4_t45(r27_yleft, r27_yright, r27__expansion) {
            var r27_yleft, r27_yright, r27__expansion, _r27_t0, _r27_t1;
            return r4_xsStrand(r4_SB, r27_yleft, r4_RIGHTSB, r27_yright, r4_HALFSTROKE, r4_HALFSTROKE, r4_HALFSTROKE, r27__expansion, r4_SMOOTHA * 0.4);
        };
        r4_halfXStrand = function _r4_t46(r28__leftx, r28_lefty, r28_rightx, r28_righty, r28_turn, r28_straight, r28_tension, r28__fine) {
            var r28__leftx, r28_lefty, r28_rightx, r28_righty, r28_turn, r28_straight, r28_tension, r28__fine, r28_leftx, r28_fine, r28_turnyleft, r28_cyleft, r28_straightxleft, r28_straightyleft, _r28_t0, _r28_t1, _r28_t2, _r28_t3, _r28_t4, _r28_t5, _r28_t6, _r28_t7, _r28_t8, _r28_t9, _r28_t10, _r28_t11, _r28_t12, _r28_t13, _r28_t14, _r28_t15, _r28_t16, _r28_t17, _r28_t18, _r28_t19, _r28_t20, _r28_t21, _r28_t22, _r28_t23, _r28_t24, _r28_t25, _r28_t26, _r28_t27, _r28_t28, _r28_t29, _r28_t30, _r28_t31;
            _r28_t2 = r28__leftx;
            _r28_t3 = r4_HALFSTROKE;
            if (r28_rightx > r28__leftx)
                _r28_t4 = 1;
            else
                _r28_t4 = -1;
            _r28_t5 = _r28_t3 * _r28_t4;
            r28_leftx = _r28_t2 + _r28_t5;
            r28_fine = (r28__fine || r4_STROKE) * 0.5;
            r28_turnyleft = r0_mix(r28_lefty, r28_righty, r28_turn);
            r28_cyleft = r0_mix(r28_turnyleft, r28_righty, r28_tension);
            r28_straightxleft = r0_mix(r28_leftx, r28_rightx, r28_straight);
            r28_straightyleft = r0_mix(r28_cyleft, r28_righty, r28_straight);
            _r28_t6 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r28_leftx, r28_lefty)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE);
            _r28_t7 = _r28_t6['heads-to'];
            if (r28_lefty < r28_righty)
                _r28_t8 = r4_UPWARD;
            else
                _r28_t8 = r4_DOWNWARD;
            _r28_t9 = _r28_t7['call'](_r28_t6, _r28_t8);
            _r28_t10 = _r28_t9['line-to'];
            _r28_t11 = r28_leftx;
            _r28_t12 = r28_turnyleft;
            _r28_t13 = _r28_t10['call'](_r28_t9, _r28_t11, _r28_t12);
            _r28_t14 = _r28_t13['heads-to'];
            if (r28_lefty < r28_righty)
                _r28_t15 = r4_UPWARD;
            else
                _r28_t15 = r4_DOWNWARD;
            _r28_t16 = _r28_t14['call'](_r28_t13, _r28_t15);
            _r28_t17 = _r28_t16['curve-to'];
            _r28_t18 = r28_leftx;
            _r28_t19 = r28_cyleft;
            _r28_t20 = r28_straightxleft;
            _r28_t21 = r28_straightyleft;
            _r28_t22 = _r28_t17['call'](_r28_t16, _r28_t18, _r28_t19, _r28_t20, _r28_t21);
            _r28_t23 = _r28_t22['set-width'];
            _r28_t24 = r28_fine;
            _r28_t25 = r28_fine;
            _r28_t26 = _r28_t23['call'](_r28_t22, _r28_t24, _r28_t25);
            _r28_t27 = _r28_t26['line-to'];
            _r28_t28 = r28_rightx;
            _r28_t29 = r28_righty;
            _r28_t30 = _r28_t27['call'](_r28_t26, _r28_t28, _r28_t29);
            _r28_t31 = _r28_t30['to-outline'];
            return _r28_t31['call'](_r28_t30);
        };
        r4_xStrand = function _r4_t47(r29__leftx, r29_lefty, r29__rightx, r29_righty, r29_turn, r29_straight, r29_tension) {
            var r29__leftx, r29_lefty, r29__rightx, r29_righty, r29_turn, r29_straight, r29_tension, r29_middlex, r29_middley, _r29_t0, _r29_t1;
            r29_middlex = r0_mix(r29__leftx, r29__rightx, 0.5);
            r29_middley = r0_mix(r29_lefty, r29_righty, 0.5);
            return r4_halfXStrand(r29__leftx, r29_lefty, r29_middlex, r29_middley, r29_turn, r29_straight, r29_tension)['concat'](r4_halfXStrand(r29__rightx, r29_righty, r29_middlex, r29_middley, r29_turn, r29_straight, r29_tension));
        };
        r4_nBowl = function _r4_t48(r30_left, r30_middle, r30_right, r30_fine) {
            var r30_left, r30_middle, r30_right, r30_fine, r30_bandLeft, r30_bandRight, _r30_t0, _r30_t1;
            r30_bandLeft = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r30_right, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r30_right, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r30_middle, r4_XO)['heads-to'](r4_LEFTWARD)['to-outline']();
            r30_bandRight = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r30_middle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r30_left, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r30_fine)['to-outline']();
            return r30_bandLeft['concat'](r30_bandRight);
        };
        r4_XSHookUpper = function _r4_t49(r31_top, r31_left, r31_middle, r31_right, r31_smooth, r31_hook) {
            var r31_top, r31_left, r31_middle, r31_right, r31_smooth, r31_hook, _r31_t0, _r31_t1, _r31_t2;
            return function _r31_t2() {
                var r33_currentGlyph, r33_xn$setwidth$9Jrj, r33_xn$assignunicode$7Hrq, r33_xn$startfrom$1aao, r33_xn$lineto$5sIl, r33_xn$curveto$1aao, r33_xn$cubicto$1aao, r33_xn$putshapes$9Jrj, r33_xn$reverselast$3qIs, r33_include, r33_xn$createstroke$7Hrq, r33_xn$setanchor$9Jrj, r33_xn$dontexport$5sIl, _r33_t0, _r33_t1, _r33_t2, _r33_t3, _r33_t4, _r33_t5, _r33_t6, _r33_t7, _r33_t8, _r33_t9, _r33_t10, _r33_t11, _r33_t12;
                _r33_t0 = this;
                r33_currentGlyph = _r33_t0;
                r33_xn$setwidth$9Jrj = _r33_t0['set-width']['bind'](_r33_t0);
                r33_xn$assignunicode$7Hrq = function _r33_t2(r34_code) {
                    var r34_code, _r34_t0, _r34_t1;
                    r33_currentGlyph['assign-unicode'](r34_code);
                    return r4_unicodeGlyphs[r33_currentGlyph['unicode'][r33_currentGlyph['unicode']['length'] - 1]] = r33_currentGlyph;
                };
                r33_xn$startfrom$1aao = _r33_t0['start-from']['bind'](_r33_t0);
                r33_xn$lineto$5sIl = _r33_t0['line-to']['bind'](_r33_t0);
                r33_xn$curveto$1aao = _r33_t0['curve-to']['bind'](_r33_t0);
                r33_xn$cubicto$1aao = _r33_t0['cubic-to']['bind'](_r33_t0);
                r33_xn$putshapes$9Jrj = _r33_t0['put-shapes']['bind'](_r33_t0);
                r33_xn$reverselast$3qIs = _r33_t0['reverse-last']['bind'](_r33_t0);
                r33_include = _r33_t0['include']['bind'](_r33_t0);
                r33_xn$createstroke$7Hrq = _r33_t0['create-stroke']['bind'](_r33_t0);
                r33_xn$setanchor$9Jrj = _r33_t0['set-anchor']['bind'](_r33_t0);
                r33_xn$dontexport$5sIl = function _r33_t3() {
                    var _r35_t0, _r35_t1;
                    return r33_currentGlyph['dontExport'] = true;
                };
                _r33_t0['gizmo'] = r4_globalTransform;
                _r33_t0['set-width'](r4_WIDTH);
                _r33_t4 = r33_include;
                _r33_t5 = r33_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r31_right - r4_OXHOOK, r31_top - r31_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r31_middle, r31_right, r4_KAPPA_HOOK), r31_top - r4_O, r31_middle, r31_top - r4_O);
                _r33_t6 = _r33_t5['heads-to'];
                if (r31_left < r31_right)
                    _r33_t7 = r4_LEFTWARD;
                else
                    _r33_t7 = r4_RIGHTWARD;
                _r33_t8 = _r33_t6['call'](_r33_t5, _r33_t7);
                _r33_t9 = _r33_t8['arc-hv-to'];
                _r33_t10 = r31_left;
                _r33_t11 = r31_top - r31_smooth;
                _r33_t12 = _r33_t9['call'](_r33_t8, _r33_t10, _r33_t11);
                _r33_t4(_r33_t12);
                return void 0;
            };
        };
        r4_sHookUpper = function _r4_t50(r36_top, r36_smooth, r36_hook, r36__middle) {
            var r36_top, r36_smooth, r36_hook, r36__middle, _r36_t0, _r36_t1, _r36_t2;
            return function _r36_t2() {
                var r38_currentGlyph, r38_xn$setwidth$9Jrj, r38_xn$assignunicode$7Hrq, r38_xn$startfrom$1aao, r38_xn$lineto$5sIl, r38_xn$curveto$1aao, r38_xn$cubicto$1aao, r38_xn$putshapes$9Jrj, r38_xn$reverselast$3qIs, r38_include, r38_xn$createstroke$7Hrq, r38_xn$setanchor$9Jrj, r38_xn$dontexport$5sIl, _r38_t0, _r38_t1, _r38_t2, _r38_t3;
                _r38_t0 = this;
                r38_currentGlyph = _r38_t0;
                r38_xn$setwidth$9Jrj = _r38_t0['set-width']['bind'](_r38_t0);
                r38_xn$assignunicode$7Hrq = function _r38_t2(r39_code) {
                    var r39_code, _r39_t0, _r39_t1;
                    r38_currentGlyph['assign-unicode'](r39_code);
                    return r4_unicodeGlyphs[r38_currentGlyph['unicode'][r38_currentGlyph['unicode']['length'] - 1]] = r38_currentGlyph;
                };
                r38_xn$startfrom$1aao = _r38_t0['start-from']['bind'](_r38_t0);
                r38_xn$lineto$5sIl = _r38_t0['line-to']['bind'](_r38_t0);
                r38_xn$curveto$1aao = _r38_t0['curve-to']['bind'](_r38_t0);
                r38_xn$cubicto$1aao = _r38_t0['cubic-to']['bind'](_r38_t0);
                r38_xn$putshapes$9Jrj = _r38_t0['put-shapes']['bind'](_r38_t0);
                r38_xn$reverselast$3qIs = _r38_t0['reverse-last']['bind'](_r38_t0);
                r38_include = _r38_t0['include']['bind'](_r38_t0);
                r38_xn$createstroke$7Hrq = _r38_t0['create-stroke']['bind'](_r38_t0);
                r38_xn$setanchor$9Jrj = _r38_t0['set-anchor']['bind'](_r38_t0);
                r38_xn$dontexport$5sIl = function _r38_t3() {
                    var _r40_t0, _r40_t1;
                    return r38_currentGlyph['dontExport'] = true;
                };
                _r38_t0['gizmo'] = r4_globalTransform;
                _r38_t0['set-width'](r4_WIDTH);
                r38_include(r4_XSHookUpper(r36_top, r4_SB, r0_fallback(r36__middle, r4_MIDDLE), r4_RIGHTSB, r36_smooth, r36_hook));
                return void 0;
            };
        };
        r4_twoHookUpper = function _r4_t51(r41_top, r41_smooth, r41_hook, r41__middle) {
            var r41_top, r41_smooth, r41_hook, r41__middle, _r41_t0, _r41_t1, _r41_t2;
            return function _r41_t2() {
                var r43_currentGlyph, r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_include, r43_xn$createstroke$7Hrq, r43_xn$setanchor$9Jrj, r43_xn$dontexport$5sIl, r43_middle, _r43_t0, _r43_t1, _r43_t2, _r43_t3;
                _r43_t0 = this;
                r43_currentGlyph = _r43_t0;
                r43_xn$setwidth$9Jrj = _r43_t0['set-width']['bind'](_r43_t0);
                r43_xn$assignunicode$7Hrq = function _r43_t2(r44_code) {
                    var r44_code, _r44_t0, _r44_t1;
                    r43_currentGlyph['assign-unicode'](r44_code);
                    return r4_unicodeGlyphs[r43_currentGlyph['unicode'][r43_currentGlyph['unicode']['length'] - 1]] = r43_currentGlyph;
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
                r43_xn$dontexport$5sIl = function _r43_t3() {
                    var _r45_t0, _r45_t1;
                    return r43_currentGlyph['dontExport'] = true;
                };
                _r43_t0['gizmo'] = r4_globalTransform;
                _r43_t0['set-width'](r4_WIDTH);
                r43_middle = r41__middle || r4_MIDDLE;
                r43_include(r43_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r41_top - r41_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r43_middle, r4_SB, r4_KAPPA_HOOK), r41_top - r4_O, r43_middle, r41_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r41_top - r41_smooth));
                return void 0;
            };
        };
        r4_sHookLower = function _r4_t52(r46_bottom, r46_smooth, r46_hook, r46__middle) {
            var r46_bottom, r46_smooth, r46_hook, r46__middle, _r46_t0, _r46_t1, _r46_t2;
            return function _r46_t2() {
                var r48_currentGlyph, r48_xn$setwidth$9Jrj, r48_xn$assignunicode$7Hrq, r48_xn$startfrom$1aao, r48_xn$lineto$5sIl, r48_xn$curveto$1aao, r48_xn$cubicto$1aao, r48_xn$putshapes$9Jrj, r48_xn$reverselast$3qIs, r48_include, r48_xn$createstroke$7Hrq, r48_xn$setanchor$9Jrj, r48_xn$dontexport$5sIl, _r48_t0, _r48_t1, _r48_t2, _r48_t3;
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
                r48_xn$dontexport$5sIl = function _r48_t3() {
                    var _r50_t0, _r50_t1;
                    return r48_currentGlyph['dontExport'] = true;
                };
                _r48_t0['gizmo'] = r4_globalTransform;
                _r48_t0['set-width'](r4_WIDTH);
                r48_include(r4_XSHookLower(r46_bottom, r4_SB, r0_fallback(r46__middle, r4_MIDDLE), r4_RIGHTSB, r46_smooth, r46_hook));
                return void 0;
            };
        };
        r4_XSHookLower = function _r4_t53(r51_bottom, r51_left, r51_middle, r51_right, r51_smooth, r51_hook) {
            var r51_bottom, r51_left, r51_middle, r51_right, r51_smooth, r51_hook, _r51_t0, _r51_t1, _r51_t2;
            return function _r51_t2() {
                var r53_currentGlyph, r53_xn$setwidth$9Jrj, r53_xn$assignunicode$7Hrq, r53_xn$startfrom$1aao, r53_xn$lineto$5sIl, r53_xn$curveto$1aao, r53_xn$cubicto$1aao, r53_xn$putshapes$9Jrj, r53_xn$reverselast$3qIs, r53_include, r53_xn$createstroke$7Hrq, r53_xn$setanchor$9Jrj, r53_xn$dontexport$5sIl, _r53_t0, _r53_t1, _r53_t2, _r53_t3, _r53_t4, _r53_t5, _r53_t6, _r53_t7, _r53_t8, _r53_t9, _r53_t10, _r53_t11, _r53_t12, _r53_t13, _r53_t14;
                _r53_t0 = this;
                r53_currentGlyph = _r53_t0;
                r53_xn$setwidth$9Jrj = _r53_t0['set-width']['bind'](_r53_t0);
                r53_xn$assignunicode$7Hrq = function _r53_t2(r54_code) {
                    var r54_code, _r54_t0, _r54_t1;
                    r53_currentGlyph['assign-unicode'](r54_code);
                    return r4_unicodeGlyphs[r53_currentGlyph['unicode'][r53_currentGlyph['unicode']['length'] - 1]] = r53_currentGlyph;
                };
                r53_xn$startfrom$1aao = _r53_t0['start-from']['bind'](_r53_t0);
                r53_xn$lineto$5sIl = _r53_t0['line-to']['bind'](_r53_t0);
                r53_xn$curveto$1aao = _r53_t0['curve-to']['bind'](_r53_t0);
                r53_xn$cubicto$1aao = _r53_t0['cubic-to']['bind'](_r53_t0);
                r53_xn$putshapes$9Jrj = _r53_t0['put-shapes']['bind'](_r53_t0);
                r53_xn$reverselast$3qIs = _r53_t0['reverse-last']['bind'](_r53_t0);
                r53_include = _r53_t0['include']['bind'](_r53_t0);
                r53_xn$createstroke$7Hrq = _r53_t0['create-stroke']['bind'](_r53_t0);
                r53_xn$setanchor$9Jrj = _r53_t0['set-anchor']['bind'](_r53_t0);
                r53_xn$dontexport$5sIl = function _r53_t3() {
                    var _r55_t0, _r55_t1;
                    return r53_currentGlyph['dontExport'] = true;
                };
                _r53_t0['gizmo'] = r4_globalTransform;
                _r53_t0['set-width'](r4_WIDTH);
                _r53_t4 = r53_include;
                _r53_t5 = r53_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r51_right, r51_bottom + r51_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r51_middle, r51_bottom + r4_O);
                _r53_t6 = _r53_t5['heads-to'];
                if (r51_left < r51_right)
                    _r53_t7 = r4_LEFTWARD;
                else
                    _r53_t7 = r4_RIGHTWARD;
                _r53_t8 = _r53_t6['call'](_r53_t5, _r53_t7);
                _r53_t9 = _r53_t8['curve-to'];
                _r53_t10 = r0_mix(r51_middle, r51_left, r4_KAPPA_HOOK);
                _r53_t11 = r51_bottom + r4_O;
                _r53_t12 = r51_left + r4_OXHOOK;
                _r53_t13 = r51_bottom + r51_hook;
                _r53_t14 = _r53_t9['call'](_r53_t8, _r53_t10, _r53_t11, _r53_t12, _r53_t13);
                _r53_t4(_r53_t14);
                return void 0;
            };
        };
        r4_smallo = function _r4_t54(r56_u, r56_d, r56_l, r56_r) {
            var r56_u, r56_d, r56_l, r56_r, _r56_t0, _r56_t1, _r56_t2;
            return function _r56_t2() {
                var r58_currentGlyph, r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, r58_xn$dontexport$5sIl, r58_middle, r58_ymiddlea, r58_ymiddleb, _r58_t0, _r58_t1, _r58_t2, _r58_t3;
                _r58_t0 = this;
                r58_currentGlyph = _r58_t0;
                r58_xn$setwidth$9Jrj = _r58_t0['set-width']['bind'](_r58_t0);
                r58_xn$assignunicode$7Hrq = function _r58_t2(r59_code) {
                    var r59_code, _r59_t0, _r59_t1;
                    r58_currentGlyph['assign-unicode'](r59_code);
                    return r4_unicodeGlyphs[r58_currentGlyph['unicode'][r58_currentGlyph['unicode']['length'] - 1]] = r58_currentGlyph;
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
                r58_xn$dontexport$5sIl = function _r58_t3() {
                    var _r60_t0, _r60_t1;
                    return r58_currentGlyph['dontExport'] = true;
                };
                _r58_t0['gizmo'] = r4_globalTransform;
                _r58_t0['set-width'](r4_WIDTH);
                r58_middle = (r56_l + r56_r) / 2;
                if (r56_u - r56_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) {
                    r58_include(r58_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r58_middle, r56_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r56_l + r4_O, r56_u - r4_SMALLSMOOTHA)['line-to'](r56_l + r4_O, r56_d + r4_SMALLSMOOTHB)['arc-vh-to'](r58_middle, r56_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r56_r - r4_O, r56_d + r4_SMALLSMOOTHA)['line-to'](r56_r - r4_O, r56_u - r4_SMALLSMOOTHB)['arc-vh-to'](r58_middle, r56_u - r4_O)['heads-to'](r4_LEFTWARD));
                } else {
                    r58_ymiddlea = (r56_u - r4_SMALLSMOOTHA + r56_d + r4_SMALLSMOOTHB) / 2;
                    r58_ymiddleb = (r56_u - r4_SMALLSMOOTHB + r56_d + r4_SMALLSMOOTHA) / 2;
                    r58_include(r58_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r58_middle, r56_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r56_l + r4_O, r58_ymiddlea)['arc-vh-to'](r58_middle, r56_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r56_r - r4_O, r58_ymiddleb)['arc-vh-to'](r58_middle, r56_u - r4_O)['heads-to'](r4_LEFTWARD));
                }
                return void 0;
            };
        };
        r4_hbar = function _r4_t55(r61_xleft, r61_xright, r61_y, r61__fine) {
            var r61_xleft, r61_xright, r61_y, r61__fine, _r61_t0, _r61_t1, _r61_t2;
            return function _r61_t2() {
                var r63_currentGlyph, r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, r63_include, r63_xn$createstroke$7Hrq, r63_xn$setanchor$9Jrj, r63_xn$dontexport$5sIl, r63_fine, _r63_t0, _r63_t1, _r63_t2, _r63_t3;
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
                r63_xn$dontexport$5sIl = function _r63_t3() {
                    var _r65_t0, _r65_t1;
                    return r63_currentGlyph['dontExport'] = true;
                };
                _r63_t0['gizmo'] = r4_globalTransform;
                _r63_t0['set-width'](r4_WIDTH);
                r63_fine = (r61__fine || r4_STROKE) / 2;
                r63_include(r63_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r61_xleft, r61_y)['heads-to'](r4_RIGHTWARD)['set-width'](r63_fine, r63_fine)['line-to'](r61_xright, r61_y)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_vbar = function _r4_t56(r66_x, r66_ydown, r66_yup, r66__fine) {
            var r66_x, r66_ydown, r66_yup, r66__fine, _r66_t0, _r66_t1, _r66_t2;
            return function _r66_t2() {
                var r68_currentGlyph, r68_xn$setwidth$9Jrj, r68_xn$assignunicode$7Hrq, r68_xn$startfrom$1aao, r68_xn$lineto$5sIl, r68_xn$curveto$1aao, r68_xn$cubicto$1aao, r68_xn$putshapes$9Jrj, r68_xn$reverselast$3qIs, r68_include, r68_xn$createstroke$7Hrq, r68_xn$setanchor$9Jrj, r68_xn$dontexport$5sIl, r68_fine, _r68_t0, _r68_t1, _r68_t2, _r68_t3, _r68_t4, _r68_t5, _r68_t6, _r68_t7, _r68_t8, _r68_t9, _r68_t10, _r68_t11, _r68_t12, _r68_t13, _r68_t14, _r68_t15, _r68_t16, _r68_t17, _r68_t18, _r68_t19;
                _r68_t0 = this;
                r68_currentGlyph = _r68_t0;
                r68_xn$setwidth$9Jrj = _r68_t0['set-width']['bind'](_r68_t0);
                r68_xn$assignunicode$7Hrq = function _r68_t2(r69_code) {
                    var r69_code, _r69_t0, _r69_t1;
                    r68_currentGlyph['assign-unicode'](r69_code);
                    return r4_unicodeGlyphs[r68_currentGlyph['unicode'][r68_currentGlyph['unicode']['length'] - 1]] = r68_currentGlyph;
                };
                r68_xn$startfrom$1aao = _r68_t0['start-from']['bind'](_r68_t0);
                r68_xn$lineto$5sIl = _r68_t0['line-to']['bind'](_r68_t0);
                r68_xn$curveto$1aao = _r68_t0['curve-to']['bind'](_r68_t0);
                r68_xn$cubicto$1aao = _r68_t0['cubic-to']['bind'](_r68_t0);
                r68_xn$putshapes$9Jrj = _r68_t0['put-shapes']['bind'](_r68_t0);
                r68_xn$reverselast$3qIs = _r68_t0['reverse-last']['bind'](_r68_t0);
                r68_include = _r68_t0['include']['bind'](_r68_t0);
                r68_xn$createstroke$7Hrq = _r68_t0['create-stroke']['bind'](_r68_t0);
                r68_xn$setanchor$9Jrj = _r68_t0['set-anchor']['bind'](_r68_t0);
                r68_xn$dontexport$5sIl = function _r68_t3() {
                    var _r70_t0, _r70_t1;
                    return r68_currentGlyph['dontExport'] = true;
                };
                _r68_t0['gizmo'] = r4_globalTransform;
                _r68_t0['set-width'](r4_WIDTH);
                r68_fine = (r66__fine || r4_STROKE) / 2;
                _r68_t4 = r68_include;
                _r68_t5 = r68_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r66_x, r66_ydown);
                _r68_t6 = _r68_t5['heads-to'];
                if (r66_ydown < r66_yup)
                    _r68_t7 = r4_UPWARD;
                else
                    _r68_t7 = r4_DOWNWARD;
                _r68_t8 = _r68_t6['call'](_r68_t5, _r68_t7);
                _r68_t9 = _r68_t8['set-width'];
                _r68_t10 = r68_fine;
                _r68_t11 = r68_fine;
                _r68_t12 = _r68_t9['call'](_r68_t8, _r68_t10, _r68_t11);
                _r68_t13 = _r68_t12['line-to'];
                _r68_t14 = r66_x;
                _r68_t15 = r66_yup;
                _r68_t16 = _r68_t13['call'](_r68_t12, _r68_t14, _r68_t15);
                _r68_t17 = _r68_t16['heads-to'];
                if (r66_ydown < r66_yup)
                    _r68_t18 = r4_UPWARD;
                else
                    _r68_t18 = r4_DOWNWARD;
                _r68_t19 = _r68_t17['call'](_r68_t16, _r68_t18);
                _r68_t4(_r68_t19);
                return void 0;
            };
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t57() {
            var r72_currentGlyph, r72_xn$setwidth$9Jrj, r72_xn$assignunicode$7Hrq, r72_xn$startfrom$1aao, r72_xn$lineto$5sIl, r72_xn$curveto$1aao, r72_xn$cubicto$1aao, r72_xn$putshapes$9Jrj, r72_xn$reverselast$3qIs, r72_include, r72_xn$createstroke$7Hrq, r72_xn$setanchor$9Jrj, r72_xn$dontexport$5sIl, _r72_t0, _r72_t1, _r72_t2, _r72_t3;
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
            r72_xn$dontexport$5sIl = function _r72_t3() {
                var _r74_t0, _r74_t1;
                return r72_currentGlyph['dontExport'] = true;
            };
            _r72_t0['gizmo'] = r4_globalTransform;
            _r72_t0['set-width'](r4_WIDTH);
            r72_xn$setwidth$9Jrj(0);
            r72_xn$assignunicode$7Hrq(775);
            r72_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r72_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t58() {
            var r76_currentGlyph, r76_xn$setwidth$9Jrj, r76_xn$assignunicode$7Hrq, r76_xn$startfrom$1aao, r76_xn$lineto$5sIl, r76_xn$curveto$1aao, r76_xn$cubicto$1aao, r76_xn$putshapes$9Jrj, r76_xn$reverselast$3qIs, r76_include, r76_xn$createstroke$7Hrq, r76_xn$setanchor$9Jrj, r76_xn$dontexport$5sIl, _r76_t0, _r76_t1, _r76_t2, _r76_t3;
            _r76_t0 = this;
            r76_currentGlyph = _r76_t0;
            r76_xn$setwidth$9Jrj = _r76_t0['set-width']['bind'](_r76_t0);
            r76_xn$assignunicode$7Hrq = function _r76_t2(r77_code) {
                var r77_code, _r77_t0, _r77_t1;
                r76_currentGlyph['assign-unicode'](r77_code);
                return r4_unicodeGlyphs[r76_currentGlyph['unicode'][r76_currentGlyph['unicode']['length'] - 1]] = r76_currentGlyph;
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
            r76_xn$dontexport$5sIl = function _r76_t3() {
                var _r78_t0, _r78_t1;
                return r76_currentGlyph['dontExport'] = true;
            };
            _r76_t0['gizmo'] = r4_globalTransform;
            _r76_t0['set-width'](r4_WIDTH);
            r76_xn$setwidth$9Jrj(0);
            r76_xn$assignunicode$7Hrq(776);
            r76_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r76_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t59() {
            var r80_currentGlyph, r80_xn$setwidth$9Jrj, r80_xn$assignunicode$7Hrq, r80_xn$startfrom$1aao, r80_xn$lineto$5sIl, r80_xn$curveto$1aao, r80_xn$cubicto$1aao, r80_xn$putshapes$9Jrj, r80_xn$reverselast$3qIs, r80_include, r80_xn$createstroke$7Hrq, r80_xn$setanchor$9Jrj, r80_xn$dontexport$5sIl, r80_radiusOut, r80_radiusIn, _r80_t0, _r80_t1, _r80_t2, _r80_t3;
            _r80_t0 = this;
            r80_currentGlyph = _r80_t0;
            r80_xn$setwidth$9Jrj = _r80_t0['set-width']['bind'](_r80_t0);
            r80_xn$assignunicode$7Hrq = function _r80_t2(r81_code) {
                var r81_code, _r81_t0, _r81_t1;
                r80_currentGlyph['assign-unicode'](r81_code);
                return r4_unicodeGlyphs[r80_currentGlyph['unicode'][r80_currentGlyph['unicode']['length'] - 1]] = r80_currentGlyph;
            };
            r80_xn$startfrom$1aao = _r80_t0['start-from']['bind'](_r80_t0);
            r80_xn$lineto$5sIl = _r80_t0['line-to']['bind'](_r80_t0);
            r80_xn$curveto$1aao = _r80_t0['curve-to']['bind'](_r80_t0);
            r80_xn$cubicto$1aao = _r80_t0['cubic-to']['bind'](_r80_t0);
            r80_xn$putshapes$9Jrj = _r80_t0['put-shapes']['bind'](_r80_t0);
            r80_xn$reverselast$3qIs = _r80_t0['reverse-last']['bind'](_r80_t0);
            r80_include = _r80_t0['include']['bind'](_r80_t0);
            r80_xn$createstroke$7Hrq = _r80_t0['create-stroke']['bind'](_r80_t0);
            r80_xn$setanchor$9Jrj = _r80_t0['set-anchor']['bind'](_r80_t0);
            r80_xn$dontexport$5sIl = function _r80_t3() {
                var _r82_t0, _r82_t1;
                return r80_currentGlyph['dontExport'] = true;
            };
            _r80_t0['gizmo'] = r4_globalTransform;
            _r80_t0['set-width'](r4_WIDTH);
            r80_xn$setwidth$9Jrj(0);
            r80_xn$assignunicode$7Hrq(778);
            r80_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r80_radiusOut = r4_DOTRADIUS * 1.5;
            r80_radiusIn = r4_DOTRADIUS * 0.7;
            r80_include([
                r4_Ring(r4_XH + r4_ACCENT + r80_radiusOut, r4_XH + r4_ACCENT - r80_radiusOut, r4_markMiddle - r80_radiusOut, r4_markMiddle + r80_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r80_radiusIn, r4_XH + r4_ACCENT - r80_radiusIn, r4_markMiddle - r80_radiusIn, r4_markMiddle + r80_radiusIn)
            ]);
            r80_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t60() {
            var r84_currentGlyph, r84_xn$setwidth$9Jrj, r84_xn$assignunicode$7Hrq, r84_xn$startfrom$1aao, r84_xn$lineto$5sIl, r84_xn$curveto$1aao, r84_xn$cubicto$1aao, r84_xn$putshapes$9Jrj, r84_xn$reverselast$3qIs, r84_include, r84_xn$createstroke$7Hrq, r84_xn$setanchor$9Jrj, r84_xn$dontexport$5sIl, _r84_t0, _r84_t1, _r84_t2, _r84_t3;
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
            r84_xn$dontexport$5sIl = function _r84_t3() {
                var _r86_t0, _r86_t1;
                return r84_currentGlyph['dontExport'] = true;
            };
            _r84_t0['gizmo'] = r4_globalTransform;
            _r84_t0['set-width'](r4_WIDTH);
            r84_xn$setwidth$9Jrj(0);
            r84_xn$assignunicode$7Hrq(768);
            r84_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r84_include(r84_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t61() {
            var r88_currentGlyph, r88_xn$setwidth$9Jrj, r88_xn$assignunicode$7Hrq, r88_xn$startfrom$1aao, r88_xn$lineto$5sIl, r88_xn$curveto$1aao, r88_xn$cubicto$1aao, r88_xn$putshapes$9Jrj, r88_xn$reverselast$3qIs, r88_include, r88_xn$createstroke$7Hrq, r88_xn$setanchor$9Jrj, r88_xn$dontexport$5sIl, _r88_t0, _r88_t1, _r88_t2, _r88_t3;
            _r88_t0 = this;
            r88_currentGlyph = _r88_t0;
            r88_xn$setwidth$9Jrj = _r88_t0['set-width']['bind'](_r88_t0);
            r88_xn$assignunicode$7Hrq = function _r88_t2(r89_code) {
                var r89_code, _r89_t0, _r89_t1;
                r88_currentGlyph['assign-unicode'](r89_code);
                return r4_unicodeGlyphs[r88_currentGlyph['unicode'][r88_currentGlyph['unicode']['length'] - 1]] = r88_currentGlyph;
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
            r88_xn$dontexport$5sIl = function _r88_t3() {
                var _r90_t0, _r90_t1;
                return r88_currentGlyph['dontExport'] = true;
            };
            _r88_t0['gizmo'] = r4_globalTransform;
            _r88_t0['set-width'](r4_WIDTH);
            r88_xn$setwidth$9Jrj(0);
            r88_xn$assignunicode$7Hrq(769);
            r88_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r88_include(r88_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t62() {
            var r92_currentGlyph, r92_xn$setwidth$9Jrj, r92_xn$assignunicode$7Hrq, r92_xn$startfrom$1aao, r92_xn$lineto$5sIl, r92_xn$curveto$1aao, r92_xn$cubicto$1aao, r92_xn$putshapes$9Jrj, r92_xn$reverselast$3qIs, r92_include, r92_xn$createstroke$7Hrq, r92_xn$setanchor$9Jrj, r92_xn$dontexport$5sIl, _r92_t0, _r92_t1, _r92_t2, _r92_t3;
            _r92_t0 = this;
            r92_currentGlyph = _r92_t0;
            r92_xn$setwidth$9Jrj = _r92_t0['set-width']['bind'](_r92_t0);
            r92_xn$assignunicode$7Hrq = function _r92_t2(r93_code) {
                var r93_code, _r93_t0, _r93_t1;
                r92_currentGlyph['assign-unicode'](r93_code);
                return r4_unicodeGlyphs[r92_currentGlyph['unicode'][r92_currentGlyph['unicode']['length'] - 1]] = r92_currentGlyph;
            };
            r92_xn$startfrom$1aao = _r92_t0['start-from']['bind'](_r92_t0);
            r92_xn$lineto$5sIl = _r92_t0['line-to']['bind'](_r92_t0);
            r92_xn$curveto$1aao = _r92_t0['curve-to']['bind'](_r92_t0);
            r92_xn$cubicto$1aao = _r92_t0['cubic-to']['bind'](_r92_t0);
            r92_xn$putshapes$9Jrj = _r92_t0['put-shapes']['bind'](_r92_t0);
            r92_xn$reverselast$3qIs = _r92_t0['reverse-last']['bind'](_r92_t0);
            r92_include = _r92_t0['include']['bind'](_r92_t0);
            r92_xn$createstroke$7Hrq = _r92_t0['create-stroke']['bind'](_r92_t0);
            r92_xn$setanchor$9Jrj = _r92_t0['set-anchor']['bind'](_r92_t0);
            r92_xn$dontexport$5sIl = function _r92_t3() {
                var _r94_t0, _r94_t1;
                return r92_currentGlyph['dontExport'] = true;
            };
            _r92_t0['gizmo'] = r4_globalTransform;
            _r92_t0['set-width'](r4_WIDTH);
            r92_xn$setwidth$9Jrj(0);
            r92_xn$assignunicode$7Hrq(770);
            r92_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r92_include(r92_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r92_include(r92_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t63() {
            var r96_currentGlyph, r96_xn$setwidth$9Jrj, r96_xn$assignunicode$7Hrq, r96_xn$startfrom$1aao, r96_xn$lineto$5sIl, r96_xn$curveto$1aao, r96_xn$cubicto$1aao, r96_xn$putshapes$9Jrj, r96_xn$reverselast$3qIs, r96_include, r96_xn$createstroke$7Hrq, r96_xn$setanchor$9Jrj, r96_xn$dontexport$5sIl, _r96_t0, _r96_t1, _r96_t2, _r96_t3;
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
            r96_xn$dontexport$5sIl = function _r96_t3() {
                var _r98_t0, _r98_t1;
                return r96_currentGlyph['dontExport'] = true;
            };
            _r96_t0['gizmo'] = r4_globalTransform;
            _r96_t0['set-width'](r4_WIDTH);
            r96_xn$setwidth$9Jrj(0);
            r96_xn$assignunicode$7Hrq(780);
            r96_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r96_include(r96_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r96_include(r96_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t64() {
            var r100_currentGlyph, r100_xn$setwidth$9Jrj, r100_xn$assignunicode$7Hrq, r100_xn$startfrom$1aao, r100_xn$lineto$5sIl, r100_xn$curveto$1aao, r100_xn$cubicto$1aao, r100_xn$putshapes$9Jrj, r100_xn$reverselast$3qIs, r100_include, r100_xn$createstroke$7Hrq, r100_xn$setanchor$9Jrj, r100_xn$dontexport$5sIl, r100_leftEnd, r100_rightEnd, r100_ttop, r100_tbot, r100_top, r100_bot, r100_tildeWave, r100_tildeWaveX, r100_tildeWaveEnd, _r100_t0, _r100_t1, _r100_t2, _r100_t3;
            _r100_t0 = this;
            r100_currentGlyph = _r100_t0;
            r100_xn$setwidth$9Jrj = _r100_t0['set-width']['bind'](_r100_t0);
            r100_xn$assignunicode$7Hrq = function _r100_t2(r101_code) {
                var r101_code, _r101_t0, _r101_t1;
                r100_currentGlyph['assign-unicode'](r101_code);
                return r4_unicodeGlyphs[r100_currentGlyph['unicode'][r100_currentGlyph['unicode']['length'] - 1]] = r100_currentGlyph;
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
            r100_xn$dontexport$5sIl = function _r100_t3() {
                var _r102_t0, _r102_t1;
                return r100_currentGlyph['dontExport'] = true;
            };
            _r100_t0['gizmo'] = r4_globalTransform;
            _r100_t0['set-width'](r4_WIDTH);
            r100_xn$setwidth$9Jrj(0);
            r100_xn$assignunicode$7Hrq(771);
            r100_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r100_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r100_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r100_ttop = r4_aboveMarkTop;
            r100_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r100_top = r100_ttop + r4_markFine * 2;
            r100_bot = r100_tbot - r4_markFine * 2;
            r100_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r100_tildeWaveX = 0.52;
            r100_tildeWaveEnd = 0;
            r100_include(r100_xn$createstroke$7Hrq()['start-from'](r100_leftEnd, r0_mix(r100_tbot, r100_ttop, r100_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r100_leftEnd, r100_rightEnd, r100_tildeWaveX), r0_mix(r100_bot, r100_top, r100_tildeWave), r0_mix(r100_leftEnd, r100_rightEnd, 1 - r100_tildeWaveX), r0_mix(r100_bot, r100_top, 1 - r100_tildeWave), r100_rightEnd, r0_mix(r100_tbot, r100_ttop, 1 - r100_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t65() {
            var r104_currentGlyph, r104_xn$setwidth$9Jrj, r104_xn$assignunicode$7Hrq, r104_xn$startfrom$1aao, r104_xn$lineto$5sIl, r104_xn$curveto$1aao, r104_xn$cubicto$1aao, r104_xn$putshapes$9Jrj, r104_xn$reverselast$3qIs, r104_include, r104_xn$createstroke$7Hrq, r104_xn$setanchor$9Jrj, r104_xn$dontexport$5sIl, r104_leftEnd, r104_rightEnd, _r104_t0, _r104_t1, _r104_t2, _r104_t3;
            _r104_t0 = this;
            r104_currentGlyph = _r104_t0;
            r104_xn$setwidth$9Jrj = _r104_t0['set-width']['bind'](_r104_t0);
            r104_xn$assignunicode$7Hrq = function _r104_t2(r105_code) {
                var r105_code, _r105_t0, _r105_t1;
                r104_currentGlyph['assign-unicode'](r105_code);
                return r4_unicodeGlyphs[r104_currentGlyph['unicode'][r104_currentGlyph['unicode']['length'] - 1]] = r104_currentGlyph;
            };
            r104_xn$startfrom$1aao = _r104_t0['start-from']['bind'](_r104_t0);
            r104_xn$lineto$5sIl = _r104_t0['line-to']['bind'](_r104_t0);
            r104_xn$curveto$1aao = _r104_t0['curve-to']['bind'](_r104_t0);
            r104_xn$cubicto$1aao = _r104_t0['cubic-to']['bind'](_r104_t0);
            r104_xn$putshapes$9Jrj = _r104_t0['put-shapes']['bind'](_r104_t0);
            r104_xn$reverselast$3qIs = _r104_t0['reverse-last']['bind'](_r104_t0);
            r104_include = _r104_t0['include']['bind'](_r104_t0);
            r104_xn$createstroke$7Hrq = _r104_t0['create-stroke']['bind'](_r104_t0);
            r104_xn$setanchor$9Jrj = _r104_t0['set-anchor']['bind'](_r104_t0);
            r104_xn$dontexport$5sIl = function _r104_t3() {
                var _r106_t0, _r106_t1;
                return r104_currentGlyph['dontExport'] = true;
            };
            _r104_t0['gizmo'] = r4_globalTransform;
            _r104_t0['set-width'](r4_WIDTH);
            r104_xn$setwidth$9Jrj(0);
            r104_xn$assignunicode$7Hrq(772);
            r104_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r104_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r104_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r104_include(r104_xn$createstroke$7Hrq()['start-from'](r104_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r104_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t66() {
            var r108_currentGlyph, r108_xn$setwidth$9Jrj, r108_xn$assignunicode$7Hrq, r108_xn$startfrom$1aao, r108_xn$lineto$5sIl, r108_xn$curveto$1aao, r108_xn$cubicto$1aao, r108_xn$putshapes$9Jrj, r108_xn$reverselast$3qIs, r108_include, r108_xn$createstroke$7Hrq, r108_xn$setanchor$9Jrj, r108_xn$dontexport$5sIl, r108_leftEnd, r108_rightEnd, _r108_t0, _r108_t1, _r108_t2, _r108_t3;
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
            r108_xn$dontexport$5sIl = function _r108_t3() {
                var _r110_t0, _r110_t1;
                return r108_currentGlyph['dontExport'] = true;
            };
            _r108_t0['gizmo'] = r4_globalTransform;
            _r108_t0['set-width'](r4_WIDTH);
            r108_xn$setwidth$9Jrj(0);
            r108_xn$assignunicode$7Hrq(774);
            r108_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r108_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r108_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r108_include(r108_xn$createstroke$7Hrq()['start-from'](r108_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r108_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('archAbove', function _r4_t67() {
            var r112_currentGlyph, r112_xn$setwidth$9Jrj, r112_xn$assignunicode$7Hrq, r112_xn$startfrom$1aao, r112_xn$lineto$5sIl, r112_xn$curveto$1aao, r112_xn$cubicto$1aao, r112_xn$putshapes$9Jrj, r112_xn$reverselast$3qIs, r112_include, r112_xn$createstroke$7Hrq, r112_xn$setanchor$9Jrj, r112_xn$dontexport$5sIl, r112_leftEnd, r112_rightEnd, _r112_t0, _r112_t1, _r112_t2, _r112_t3;
            _r112_t0 = this;
            r112_currentGlyph = _r112_t0;
            r112_xn$setwidth$9Jrj = _r112_t0['set-width']['bind'](_r112_t0);
            r112_xn$assignunicode$7Hrq = function _r112_t2(r113_code) {
                var r113_code, _r113_t0, _r113_t1;
                r112_currentGlyph['assign-unicode'](r113_code);
                return r4_unicodeGlyphs[r112_currentGlyph['unicode'][r112_currentGlyph['unicode']['length'] - 1]] = r112_currentGlyph;
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
            r112_xn$dontexport$5sIl = function _r112_t3() {
                var _r114_t0, _r114_t1;
                return r112_currentGlyph['dontExport'] = true;
            };
            _r112_t0['gizmo'] = r4_globalTransform;
            _r112_t0['set-width'](r4_WIDTH);
            r112_xn$setwidth$9Jrj(0);
            r112_xn$assignunicode$7Hrq(785);
            r112_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r112_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r112_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r112_include(r112_xn$createstroke$7Hrq()['start-from'](r112_leftEnd, r4_aboveMarkBot)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_UPWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkTop - r4_markHalfStroke)['arc-hv-to'](r112_rightEnd, r4_aboveMarkBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t68() {
            var r116_currentGlyph, r116_xn$setwidth$9Jrj, r116_xn$assignunicode$7Hrq, r116_xn$startfrom$1aao, r116_xn$lineto$5sIl, r116_xn$curveto$1aao, r116_xn$cubicto$1aao, r116_xn$putshapes$9Jrj, r116_xn$reverselast$3qIs, r116_include, r116_xn$createstroke$7Hrq, r116_xn$setanchor$9Jrj, r116_xn$dontexport$5sIl, r116_fine, r116_hookBot, r116_hookTop, _r116_t0, _r116_t1, _r116_t2, _r116_t3;
            _r116_t0 = this;
            r116_currentGlyph = _r116_t0;
            r116_xn$setwidth$9Jrj = _r116_t0['set-width']['bind'](_r116_t0);
            r116_xn$assignunicode$7Hrq = function _r116_t2(r117_code) {
                var r117_code, _r117_t0, _r117_t1;
                r116_currentGlyph['assign-unicode'](r117_code);
                return r4_unicodeGlyphs[r116_currentGlyph['unicode'][r116_currentGlyph['unicode']['length'] - 1]] = r116_currentGlyph;
            };
            r116_xn$startfrom$1aao = _r116_t0['start-from']['bind'](_r116_t0);
            r116_xn$lineto$5sIl = _r116_t0['line-to']['bind'](_r116_t0);
            r116_xn$curveto$1aao = _r116_t0['curve-to']['bind'](_r116_t0);
            r116_xn$cubicto$1aao = _r116_t0['cubic-to']['bind'](_r116_t0);
            r116_xn$putshapes$9Jrj = _r116_t0['put-shapes']['bind'](_r116_t0);
            r116_xn$reverselast$3qIs = _r116_t0['reverse-last']['bind'](_r116_t0);
            r116_include = _r116_t0['include']['bind'](_r116_t0);
            r116_xn$createstroke$7Hrq = _r116_t0['create-stroke']['bind'](_r116_t0);
            r116_xn$setanchor$9Jrj = _r116_t0['set-anchor']['bind'](_r116_t0);
            r116_xn$dontexport$5sIl = function _r116_t3() {
                var _r118_t0, _r118_t1;
                return r116_currentGlyph['dontExport'] = true;
            };
            _r116_t0['gizmo'] = r4_globalTransform;
            _r116_t0['set-width'](r4_WIDTH);
            r116_xn$setwidth$9Jrj(0);
            r116_xn$assignunicode$7Hrq(777);
            r116_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r116_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r116_hookBot = r4_aboveMarkBot - r116_fine / 2;
            r116_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r116_fine / 2;
            r116_include(r116_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r116_fine * r4_ITALICCOR, r116_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r116_fine * 2, 0)['line-to'](r4_markMiddle + r116_fine * 0.5, r116_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r116_hookBot, r116_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r116_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r116_fine, r116_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleGraveAbove', function _r4_t69() {
            var r120_currentGlyph, r120_xn$setwidth$9Jrj, r120_xn$assignunicode$7Hrq, r120_xn$startfrom$1aao, r120_xn$lineto$5sIl, r120_xn$curveto$1aao, r120_xn$cubicto$1aao, r120_xn$putshapes$9Jrj, r120_xn$reverselast$3qIs, r120_include, r120_xn$createstroke$7Hrq, r120_xn$setanchor$9Jrj, r120_xn$dontexport$5sIl, r120_m1, r120_m2, _r120_t0, _r120_t1, _r120_t2, _r120_t3;
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
            r120_xn$dontexport$5sIl = function _r120_t3() {
                var _r122_t0, _r122_t1;
                return r120_currentGlyph['dontExport'] = true;
            };
            _r120_t0['gizmo'] = r4_globalTransform;
            _r120_t0['set-width'](r4_WIDTH);
            r120_xn$setwidth$9Jrj(0);
            r120_xn$assignunicode$7Hrq(783);
            r120_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r120_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r120_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r120_include(r120_xn$createstroke$7Hrq()['start-from'](r120_m1 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r120_m1 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r120_include(r120_xn$createstroke$7Hrq()['start-from'](r120_m2 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r120_m2 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleAcuteAbove', function _r4_t70() {
            var r124_currentGlyph, r124_xn$setwidth$9Jrj, r124_xn$assignunicode$7Hrq, r124_xn$startfrom$1aao, r124_xn$lineto$5sIl, r124_xn$curveto$1aao, r124_xn$cubicto$1aao, r124_xn$putshapes$9Jrj, r124_xn$reverselast$3qIs, r124_include, r124_xn$createstroke$7Hrq, r124_xn$setanchor$9Jrj, r124_xn$dontexport$5sIl, r124_m1, r124_m2, _r124_t0, _r124_t1, _r124_t2, _r124_t3;
            _r124_t0 = this;
            r124_currentGlyph = _r124_t0;
            r124_xn$setwidth$9Jrj = _r124_t0['set-width']['bind'](_r124_t0);
            r124_xn$assignunicode$7Hrq = function _r124_t2(r125_code) {
                var r125_code, _r125_t0, _r125_t1;
                r124_currentGlyph['assign-unicode'](r125_code);
                return r4_unicodeGlyphs[r124_currentGlyph['unicode'][r124_currentGlyph['unicode']['length'] - 1]] = r124_currentGlyph;
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
            r124_xn$dontexport$5sIl = function _r124_t3() {
                var _r126_t0, _r126_t1;
                return r124_currentGlyph['dontExport'] = true;
            };
            _r124_t0['gizmo'] = r4_globalTransform;
            _r124_t0['set-width'](r4_WIDTH);
            r124_xn$setwidth$9Jrj(0);
            r124_xn$assignunicode$7Hrq(779);
            r124_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r124_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r124_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r124_include(r124_xn$createstroke$7Hrq()['start-from'](r124_m1 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r124_m1 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r124_include(r124_xn$createstroke$7Hrq()['start-from'](r124_m2 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r124_m2 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t71() {
            var r128_currentGlyph, r128_xn$setwidth$9Jrj, r128_xn$assignunicode$7Hrq, r128_xn$startfrom$1aao, r128_xn$lineto$5sIl, r128_xn$curveto$1aao, r128_xn$cubicto$1aao, r128_xn$putshapes$9Jrj, r128_xn$reverselast$3qIs, r128_include, r128_xn$createstroke$7Hrq, r128_xn$setanchor$9Jrj, r128_xn$dontexport$5sIl, _r128_t0, _r128_t1, _r128_t2, _r128_t3;
            _r128_t0 = this;
            r128_currentGlyph = _r128_t0;
            r128_xn$setwidth$9Jrj = _r128_t0['set-width']['bind'](_r128_t0);
            r128_xn$assignunicode$7Hrq = function _r128_t2(r129_code) {
                var r129_code, _r129_t0, _r129_t1;
                r128_currentGlyph['assign-unicode'](r129_code);
                return r4_unicodeGlyphs[r128_currentGlyph['unicode'][r128_currentGlyph['unicode']['length'] - 1]] = r128_currentGlyph;
            };
            r128_xn$startfrom$1aao = _r128_t0['start-from']['bind'](_r128_t0);
            r128_xn$lineto$5sIl = _r128_t0['line-to']['bind'](_r128_t0);
            r128_xn$curveto$1aao = _r128_t0['curve-to']['bind'](_r128_t0);
            r128_xn$cubicto$1aao = _r128_t0['cubic-to']['bind'](_r128_t0);
            r128_xn$putshapes$9Jrj = _r128_t0['put-shapes']['bind'](_r128_t0);
            r128_xn$reverselast$3qIs = _r128_t0['reverse-last']['bind'](_r128_t0);
            r128_include = _r128_t0['include']['bind'](_r128_t0);
            r128_xn$createstroke$7Hrq = _r128_t0['create-stroke']['bind'](_r128_t0);
            r128_xn$setanchor$9Jrj = _r128_t0['set-anchor']['bind'](_r128_t0);
            r128_xn$dontexport$5sIl = function _r128_t3() {
                var _r130_t0, _r130_t1;
                return r128_currentGlyph['dontExport'] = true;
            };
            _r128_t0['gizmo'] = r4_globalTransform;
            _r128_t0['set-width'](r4_WIDTH);
            r128_xn$setwidth$9Jrj(0);
            r128_xn$assignunicode$7Hrq(803);
            r128_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r128_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t72() {
            var r132_currentGlyph, r132_xn$setwidth$9Jrj, r132_xn$assignunicode$7Hrq, r132_xn$startfrom$1aao, r132_xn$lineto$5sIl, r132_xn$curveto$1aao, r132_xn$cubicto$1aao, r132_xn$putshapes$9Jrj, r132_xn$reverselast$3qIs, r132_include, r132_xn$createstroke$7Hrq, r132_xn$setanchor$9Jrj, r132_xn$dontexport$5sIl, r132_fine, r132_cedillaTop, r132_cedillaBot, _r132_t0, _r132_t1, _r132_t2, _r132_t3;
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
            r132_xn$dontexport$5sIl = function _r132_t3() {
                var _r134_t0, _r134_t1;
                return r132_currentGlyph['dontExport'] = true;
            };
            _r132_t0['gizmo'] = r4_globalTransform;
            _r132_t0['set-width'](r4_WIDTH);
            r132_xn$setwidth$9Jrj(0);
            r132_xn$assignunicode$7Hrq(807);
            r132_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r132_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r132_cedillaTop = r4_belowMarkTop + r132_fine * 0.85;
            r132_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r132_fine * r4_ITALICCOR, r132_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r132_fine * 2)['line-to'](r4_markMiddle + r132_fine * 0.5, r132_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r132_cedillaTop, r132_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r132_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r132_cedillaBot)['heads-to'](r4_LEFTWARD));
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r132_fine, r132_fine)['line-to'](r4_markMiddle, r132_cedillaTop - r132_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t73() {
            var r136_currentGlyph, r136_xn$setwidth$9Jrj, r136_xn$assignunicode$7Hrq, r136_xn$startfrom$1aao, r136_xn$lineto$5sIl, r136_xn$curveto$1aao, r136_xn$cubicto$1aao, r136_xn$putshapes$9Jrj, r136_xn$reverselast$3qIs, r136_include, r136_xn$createstroke$7Hrq, r136_xn$setanchor$9Jrj, r136_xn$dontexport$5sIl, r136_TURN, _r136_t0, _r136_t1, _r136_t2, _r136_t3;
            _r136_t0 = this;
            r136_currentGlyph = _r136_t0;
            r136_xn$setwidth$9Jrj = _r136_t0['set-width']['bind'](_r136_t0);
            r136_xn$assignunicode$7Hrq = function _r136_t2(r137_code) {
                var r137_code, _r137_t0, _r137_t1;
                r136_currentGlyph['assign-unicode'](r137_code);
                return r4_unicodeGlyphs[r136_currentGlyph['unicode'][r136_currentGlyph['unicode']['length'] - 1]] = r136_currentGlyph;
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
            r136_xn$dontexport$5sIl = function _r136_t3() {
                var _r138_t0, _r138_t1;
                return r136_currentGlyph['dontExport'] = true;
            };
            _r136_t0['gizmo'] = r4_globalTransform;
            _r136_t0['set-width'](r4_WIDTH);
            r136_xn$setwidth$9Jrj(r4_WIDTH);
            r136_xn$assignunicode$7Hrq('A');
            r136_include(r4_capitalMarks);
            r136_TURN = r4_XH * 0.1;
            r136_include(r136_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r136_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r136_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r136_include(r136_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r136_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r136_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r136_include(r136_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r136_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r136_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r136_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t74() {
            var r140_currentGlyph, r140_xn$setwidth$9Jrj, r140_xn$assignunicode$7Hrq, r140_xn$startfrom$1aao, r140_xn$lineto$5sIl, r140_xn$curveto$1aao, r140_xn$cubicto$1aao, r140_xn$putshapes$9Jrj, r140_xn$reverselast$3qIs, r140_include, r140_xn$createstroke$7Hrq, r140_xn$setanchor$9Jrj, r140_xn$dontexport$5sIl, r140_TURN, _r140_t0, _r140_t1, _r140_t2, _r140_t3;
            _r140_t0 = this;
            r140_currentGlyph = _r140_t0;
            r140_xn$setwidth$9Jrj = _r140_t0['set-width']['bind'](_r140_t0);
            r140_xn$assignunicode$7Hrq = function _r140_t2(r141_code) {
                var r141_code, _r141_t0, _r141_t1;
                r140_currentGlyph['assign-unicode'](r141_code);
                return r4_unicodeGlyphs[r140_currentGlyph['unicode'][r140_currentGlyph['unicode']['length'] - 1]] = r140_currentGlyph;
            };
            r140_xn$startfrom$1aao = _r140_t0['start-from']['bind'](_r140_t0);
            r140_xn$lineto$5sIl = _r140_t0['line-to']['bind'](_r140_t0);
            r140_xn$curveto$1aao = _r140_t0['curve-to']['bind'](_r140_t0);
            r140_xn$cubicto$1aao = _r140_t0['cubic-to']['bind'](_r140_t0);
            r140_xn$putshapes$9Jrj = _r140_t0['put-shapes']['bind'](_r140_t0);
            r140_xn$reverselast$3qIs = _r140_t0['reverse-last']['bind'](_r140_t0);
            r140_include = _r140_t0['include']['bind'](_r140_t0);
            r140_xn$createstroke$7Hrq = _r140_t0['create-stroke']['bind'](_r140_t0);
            r140_xn$setanchor$9Jrj = _r140_t0['set-anchor']['bind'](_r140_t0);
            r140_xn$dontexport$5sIl = function _r140_t3() {
                var _r142_t0, _r142_t1;
                return r140_currentGlyph['dontExport'] = true;
            };
            _r140_t0['gizmo'] = r4_globalTransform;
            _r140_t0['set-width'](r4_WIDTH);
            r140_xn$setwidth$9Jrj(r4_WIDTH);
            r140_xn$assignunicode$7Hrq('V');
            r140_include(r4_capitalMarks);
            r140_TURN = r4_CAP * 0.9;
            r140_include(r140_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r140_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r140_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r140_include(r140_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r140_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r140_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r140_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r140_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r140_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t75() {
            var r144_currentGlyph, r144_xn$setwidth$9Jrj, r144_xn$assignunicode$7Hrq, r144_xn$startfrom$1aao, r144_xn$lineto$5sIl, r144_xn$curveto$1aao, r144_xn$cubicto$1aao, r144_xn$putshapes$9Jrj, r144_xn$reverselast$3qIs, r144_include, r144_xn$createstroke$7Hrq, r144_xn$setanchor$9Jrj, r144_xn$dontexport$5sIl, r144_TURN, r144_turn2, r144_wheight, r144_bottomStroke, r144_m1, r144_m2, _r144_t0, _r144_t1, _r144_t2, _r144_t3;
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
            r144_xn$dontexport$5sIl = function _r144_t3() {
                var _r146_t0, _r146_t1;
                return r144_currentGlyph['dontExport'] = true;
            };
            _r144_t0['gizmo'] = r4_globalTransform;
            _r144_t0['set-width'](r4_WIDTH);
            r144_xn$setwidth$9Jrj(r4_WIDTH);
            r144_xn$assignunicode$7Hrq('W');
            r144_include(r4_capitalMarks);
            r144_TURN = r4_CAP * 0.75;
            r144_turn2 = r4_CAP * 0.59;
            r144_wheight = r4_CAP * 0.6;
            r144_bottomStroke = r4_adviceBlackness(5.2);
            r144_m1 = r4_WIDTH * 0.3;
            r144_m2 = r4_WIDTH * 0.7;
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r144_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r144_TURN, r144_m1 - r144_bottomStroke / 2, 0)['set-width'](r144_bottomStroke, 0));
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r144_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r144_TURN, r144_m2 + r144_bottomStroke / 2, 0)['set-width'](0, r144_bottomStroke));
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r144_bottomStroke / 2, r144_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r144_bottomStroke)['line-to'](r4_MIDDLE + r144_bottomStroke / 2, r144_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r144_bottomStroke / 2, (1 - 0.1) * r144_turn2, r144_m1 + r144_bottomStroke / 2, 0)['set-width'](0, r144_bottomStroke));
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r144_bottomStroke / 2, r144_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r144_bottomStroke, 0)['line-to'](r4_MIDDLE - r144_bottomStroke / 2, r144_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r144_bottomStroke / 2, (1 - 0.1) * r144_turn2, r144_m2 - r144_bottomStroke / 2, 0)['set-width'](r144_bottomStroke, 0));
            r144_xn$startfrom$1aao(r144_m1 + r144_bottomStroke / 2, 0);
            r144_xn$lineto$5sIl(r144_m1 - r144_bottomStroke / 2, 0);
            r144_xn$lineto$5sIl(r144_m1, r144_bottomStroke);
            r144_xn$startfrom$1aao(r144_m2 + r144_bottomStroke / 2, 0);
            r144_xn$lineto$5sIl(r144_m2 - r144_bottomStroke / 2, 0);
            r144_xn$lineto$5sIl(r144_m2, r144_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t76() {
            var r148_currentGlyph, r148_xn$setwidth$9Jrj, r148_xn$assignunicode$7Hrq, r148_xn$startfrom$1aao, r148_xn$lineto$5sIl, r148_xn$curveto$1aao, r148_xn$cubicto$1aao, r148_xn$putshapes$9Jrj, r148_xn$reverselast$3qIs, r148_include, r148_xn$createstroke$7Hrq, r148_xn$setanchor$9Jrj, r148_xn$dontexport$5sIl, _r148_t0, _r148_t1, _r148_t2, _r148_t3;
            _r148_t0 = this;
            r148_currentGlyph = _r148_t0;
            r148_xn$setwidth$9Jrj = _r148_t0['set-width']['bind'](_r148_t0);
            r148_xn$assignunicode$7Hrq = function _r148_t2(r149_code) {
                var r149_code, _r149_t0, _r149_t1;
                r148_currentGlyph['assign-unicode'](r149_code);
                return r4_unicodeGlyphs[r148_currentGlyph['unicode'][r148_currentGlyph['unicode']['length'] - 1]] = r148_currentGlyph;
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
            r148_xn$dontexport$5sIl = function _r148_t3() {
                var _r150_t0, _r150_t1;
                return r148_currentGlyph['dontExport'] = true;
            };
            _r148_t0['gizmo'] = r4_globalTransform;
            _r148_t0['set-width'](r4_WIDTH);
            r148_xn$setwidth$9Jrj(r4_WIDTH);
            r148_xn$assignunicode$7Hrq('X');
            r148_include(r4_capitalMarks);
            r148_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r148_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t77() {
            var r152_currentGlyph, r152_xn$setwidth$9Jrj, r152_xn$assignunicode$7Hrq, r152_xn$startfrom$1aao, r152_xn$lineto$5sIl, r152_xn$curveto$1aao, r152_xn$cubicto$1aao, r152_xn$putshapes$9Jrj, r152_xn$reverselast$3qIs, r152_include, r152_xn$createstroke$7Hrq, r152_xn$setanchor$9Jrj, r152_xn$dontexport$5sIl, r152_cross, _r152_t0, _r152_t1, _r152_t2, _r152_t3;
            _r152_t0 = this;
            r152_currentGlyph = _r152_t0;
            r152_xn$setwidth$9Jrj = _r152_t0['set-width']['bind'](_r152_t0);
            r152_xn$assignunicode$7Hrq = function _r152_t2(r153_code) {
                var r153_code, _r153_t0, _r153_t1;
                r152_currentGlyph['assign-unicode'](r153_code);
                return r4_unicodeGlyphs[r152_currentGlyph['unicode'][r152_currentGlyph['unicode']['length'] - 1]] = r152_currentGlyph;
            };
            r152_xn$startfrom$1aao = _r152_t0['start-from']['bind'](_r152_t0);
            r152_xn$lineto$5sIl = _r152_t0['line-to']['bind'](_r152_t0);
            r152_xn$curveto$1aao = _r152_t0['curve-to']['bind'](_r152_t0);
            r152_xn$cubicto$1aao = _r152_t0['cubic-to']['bind'](_r152_t0);
            r152_xn$putshapes$9Jrj = _r152_t0['put-shapes']['bind'](_r152_t0);
            r152_xn$reverselast$3qIs = _r152_t0['reverse-last']['bind'](_r152_t0);
            r152_include = _r152_t0['include']['bind'](_r152_t0);
            r152_xn$createstroke$7Hrq = _r152_t0['create-stroke']['bind'](_r152_t0);
            r152_xn$setanchor$9Jrj = _r152_t0['set-anchor']['bind'](_r152_t0);
            r152_xn$dontexport$5sIl = function _r152_t3() {
                var _r154_t0, _r154_t1;
                return r152_currentGlyph['dontExport'] = true;
            };
            _r152_t0['gizmo'] = r4_globalTransform;
            _r152_t0['set-width'](r4_WIDTH);
            r152_xn$setwidth$9Jrj(r4_WIDTH);
            r152_xn$assignunicode$7Hrq('Y');
            r152_include(r4_capitalMarks);
            r152_cross = r4_CAP * 0.4;
            r152_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r152_cross, 0.1, 0.4, 0.28));
            r152_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r152_cross, 0.1, 0.4, 0.28));
            r152_include(r152_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r152_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t78() {
            var r156_currentGlyph, r156_xn$setwidth$9Jrj, r156_xn$assignunicode$7Hrq, r156_xn$startfrom$1aao, r156_xn$lineto$5sIl, r156_xn$curveto$1aao, r156_xn$cubicto$1aao, r156_xn$putshapes$9Jrj, r156_xn$reverselast$3qIs, r156_include, r156_xn$createstroke$7Hrq, r156_xn$setanchor$9Jrj, r156_xn$dontexport$5sIl, r156_TURN, r156_rturn, r156_right, r156_fine, _r156_t0, _r156_t1, _r156_t2, _r156_t3;
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
            r156_xn$dontexport$5sIl = function _r156_t3() {
                var _r158_t0, _r158_t1;
                return r156_currentGlyph['dontExport'] = true;
            };
            _r156_t0['gizmo'] = r4_globalTransform;
            _r156_t0['set-width'](r4_WIDTH);
            r156_xn$setwidth$9Jrj(r4_WIDTH);
            r156_xn$assignunicode$7Hrq('K');
            r156_include(r4_capitalMarks);
            r156_TURN = r4_CAP * 0.95;
            r156_rturn = r4_XH * 0.1;
            r156_right = r4_RIGHTSB - r4_O;
            r156_fine = r4_adviceBlackness(3.5);
            r156_include(r156_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r156_include(r156_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r156_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r156_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r156_fine));
            r156_include(r156_xn$createstroke$7Hrq()['start-from'](r156_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r156_right - r4_HALFSTROKE, r156_rturn + 0.2 * (r4_XH - r156_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r156_fine / 2, r156_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t79() {
            var r160_currentGlyph, r160_xn$setwidth$9Jrj, r160_xn$assignunicode$7Hrq, r160_xn$startfrom$1aao, r160_xn$lineto$5sIl, r160_xn$curveto$1aao, r160_xn$cubicto$1aao, r160_xn$putshapes$9Jrj, r160_xn$reverselast$3qIs, r160_include, r160_xn$createstroke$7Hrq, r160_xn$setanchor$9Jrj, r160_xn$dontexport$5sIl, r160_bowl, r160_tkappa, r160_bkappa, r160_turntop, r160_turnbottom, _r160_t0, _r160_t1, _r160_t2, _r160_t3;
            _r160_t0 = this;
            r160_currentGlyph = _r160_t0;
            r160_xn$setwidth$9Jrj = _r160_t0['set-width']['bind'](_r160_t0);
            r160_xn$assignunicode$7Hrq = function _r160_t2(r161_code) {
                var r161_code, _r161_t0, _r161_t1;
                r160_currentGlyph['assign-unicode'](r161_code);
                return r4_unicodeGlyphs[r160_currentGlyph['unicode'][r160_currentGlyph['unicode']['length'] - 1]] = r160_currentGlyph;
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
            r160_xn$dontexport$5sIl = function _r160_t3() {
                var _r162_t0, _r162_t1;
                return r160_currentGlyph['dontExport'] = true;
            };
            _r160_t0['gizmo'] = r4_globalTransform;
            _r160_t0['set-width'](r4_WIDTH);
            r160_xn$setwidth$9Jrj(r4_WIDTH);
            r160_xn$assignunicode$7Hrq('B');
            r160_include(r4_capitalMarks);
            r160_bowl = 451;
            r160_tkappa = r4_COKAPPA - 0.22;
            r160_bkappa = r4_COKAPPA - 0.2;
            r160_turntop = (r4_CAP + (r160_bowl - r4_STROKE)) / 2;
            r160_turnbottom = r160_bowl / 2;
            r160_include(r160_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r160_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r160_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r160_turnbottom, r160_bowl - r4_STROKE)['line-to'](r4_SB, r160_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r160_include(r160_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r160_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r160_turnbottom)['arc-vh-to'](r4_RIGHTSB - r160_turnbottom, r160_bowl)['line-to'](r4_SB, r160_bowl)['heads-to'](r4_LEFTWARD));
            r160_include(r160_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t80() {
            var r164_currentGlyph, r164_xn$setwidth$9Jrj, r164_xn$assignunicode$7Hrq, r164_xn$startfrom$1aao, r164_xn$lineto$5sIl, r164_xn$curveto$1aao, r164_xn$cubicto$1aao, r164_xn$putshapes$9Jrj, r164_xn$reverselast$3qIs, r164_include, r164_xn$createstroke$7Hrq, r164_xn$setanchor$9Jrj, r164_xn$dontexport$5sIl, r164_dsmooth, r164_bsmooth, _r164_t0, _r164_t1, _r164_t2, _r164_t3;
            _r164_t0 = this;
            r164_currentGlyph = _r164_t0;
            r164_xn$setwidth$9Jrj = _r164_t0['set-width']['bind'](_r164_t0);
            r164_xn$assignunicode$7Hrq = function _r164_t2(r165_code) {
                var r165_code, _r165_t0, _r165_t1;
                r164_currentGlyph['assign-unicode'](r165_code);
                return r4_unicodeGlyphs[r164_currentGlyph['unicode'][r164_currentGlyph['unicode']['length'] - 1]] = r164_currentGlyph;
            };
            r164_xn$startfrom$1aao = _r164_t0['start-from']['bind'](_r164_t0);
            r164_xn$lineto$5sIl = _r164_t0['line-to']['bind'](_r164_t0);
            r164_xn$curveto$1aao = _r164_t0['curve-to']['bind'](_r164_t0);
            r164_xn$cubicto$1aao = _r164_t0['cubic-to']['bind'](_r164_t0);
            r164_xn$putshapes$9Jrj = _r164_t0['put-shapes']['bind'](_r164_t0);
            r164_xn$reverselast$3qIs = _r164_t0['reverse-last']['bind'](_r164_t0);
            r164_include = _r164_t0['include']['bind'](_r164_t0);
            r164_xn$createstroke$7Hrq = _r164_t0['create-stroke']['bind'](_r164_t0);
            r164_xn$setanchor$9Jrj = _r164_t0['set-anchor']['bind'](_r164_t0);
            r164_xn$dontexport$5sIl = function _r164_t3() {
                var _r166_t0, _r166_t1;
                return r164_currentGlyph['dontExport'] = true;
            };
            _r164_t0['gizmo'] = r4_globalTransform;
            _r164_t0['set-width'](r4_WIDTH);
            r164_xn$setwidth$9Jrj(r4_WIDTH);
            r164_xn$assignunicode$7Hrq('D');
            r164_include(r4_capitalMarks);
            r164_dsmooth = r4_SMOOTH * 1.35;
            r164_bsmooth = r4_SMOOTH * 1.1;
            r164_include(r164_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r164_include(r164_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r164_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r164_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r164_dsmooth)['arc-vh-to'](r4_RIGHTSB - r164_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t81() {
            var r168_currentGlyph, r168_xn$setwidth$9Jrj, r168_xn$assignunicode$7Hrq, r168_xn$startfrom$1aao, r168_xn$lineto$5sIl, r168_xn$curveto$1aao, r168_xn$cubicto$1aao, r168_xn$putshapes$9Jrj, r168_xn$reverselast$3qIs, r168_include, r168_xn$createstroke$7Hrq, r168_xn$setanchor$9Jrj, r168_xn$dontexport$5sIl, r168_bowlTop, r168_bowlBottom, r168_bkappa, r168_turn, r168_turnRadius, _r168_t0, _r168_t1, _r168_t2, _r168_t3;
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
            r168_xn$dontexport$5sIl = function _r168_t3() {
                var _r170_t0, _r170_t1;
                return r168_currentGlyph['dontExport'] = true;
            };
            _r168_t0['gizmo'] = r4_globalTransform;
            _r168_t0['set-width'](r4_WIDTH);
            r168_xn$setwidth$9Jrj(r4_WIDTH);
            r168_xn$assignunicode$7Hrq('P');
            r168_include(r4_capitalMarks);
            r168_bowlTop = r4_CAP * 1;
            r168_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r168_bkappa = r4_COKAPPA - 0.2;
            r168_turn = r0_mix(r168_bowlTop, r168_bowlBottom, 0.5);
            r168_turnRadius = (r168_bowlTop - r168_bowlBottom) / 2;
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r168_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r168_turnRadius, r168_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r168_turn)['arc-vh-to'](r4_RIGHTSB - r168_turnRadius, r168_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r168_bowlBottom)['heads-to'](r4_LEFTWARD));
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t82() {
            var r172_currentGlyph, r172_xn$setwidth$9Jrj, r172_xn$assignunicode$7Hrq, r172_xn$startfrom$1aao, r172_xn$lineto$5sIl, r172_xn$curveto$1aao, r172_xn$cubicto$1aao, r172_xn$putshapes$9Jrj, r172_xn$reverselast$3qIs, r172_include, r172_xn$createstroke$7Hrq, r172_xn$setanchor$9Jrj, r172_xn$dontexport$5sIl, r172_TURN, r172_right, _r172_t0, _r172_t1, _r172_t2, _r172_t3;
            _r172_t0 = this;
            r172_currentGlyph = _r172_t0;
            r172_xn$setwidth$9Jrj = _r172_t0['set-width']['bind'](_r172_t0);
            r172_xn$assignunicode$7Hrq = function _r172_t2(r173_code) {
                var r173_code, _r173_t0, _r173_t1;
                r172_currentGlyph['assign-unicode'](r173_code);
                return r4_unicodeGlyphs[r172_currentGlyph['unicode'][r172_currentGlyph['unicode']['length'] - 1]] = r172_currentGlyph;
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
            r172_xn$dontexport$5sIl = function _r172_t3() {
                var _r174_t0, _r174_t1;
                return r172_currentGlyph['dontExport'] = true;
            };
            _r172_t0['gizmo'] = r4_globalTransform;
            _r172_t0['set-width'](r4_WIDTH);
            r172_xn$setwidth$9Jrj(r4_WIDTH);
            r172_xn$assignunicode$7Hrq('R');
            r172_include(r4_glyphs['P'], r4_AS_BASE);
            r172_TURN = r4_XH * 0.1;
            r172_right = r4_RIGHTSB - r4_O;
            r172_include(r172_xn$createstroke$7Hrq()['start-from'](r172_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r172_right - r4_HALFSTROKE, r172_TURN + 0.2 * (r4_XH - r172_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t83() {
            var r176_currentGlyph, r176_xn$setwidth$9Jrj, r176_xn$assignunicode$7Hrq, r176_xn$startfrom$1aao, r176_xn$lineto$5sIl, r176_xn$curveto$1aao, r176_xn$cubicto$1aao, r176_xn$putshapes$9Jrj, r176_xn$reverselast$3qIs, r176_include, r176_xn$createstroke$7Hrq, r176_xn$setanchor$9Jrj, r176_xn$dontexport$5sIl, _r176_t0, _r176_t1, _r176_t2, _r176_t3;
            _r176_t0 = this;
            r176_currentGlyph = _r176_t0;
            r176_xn$setwidth$9Jrj = _r176_t0['set-width']['bind'](_r176_t0);
            r176_xn$assignunicode$7Hrq = function _r176_t2(r177_code) {
                var r177_code, _r177_t0, _r177_t1;
                r176_currentGlyph['assign-unicode'](r177_code);
                return r4_unicodeGlyphs[r176_currentGlyph['unicode'][r176_currentGlyph['unicode']['length'] - 1]] = r176_currentGlyph;
            };
            r176_xn$startfrom$1aao = _r176_t0['start-from']['bind'](_r176_t0);
            r176_xn$lineto$5sIl = _r176_t0['line-to']['bind'](_r176_t0);
            r176_xn$curveto$1aao = _r176_t0['curve-to']['bind'](_r176_t0);
            r176_xn$cubicto$1aao = _r176_t0['cubic-to']['bind'](_r176_t0);
            r176_xn$putshapes$9Jrj = _r176_t0['put-shapes']['bind'](_r176_t0);
            r176_xn$reverselast$3qIs = _r176_t0['reverse-last']['bind'](_r176_t0);
            r176_include = _r176_t0['include']['bind'](_r176_t0);
            r176_xn$createstroke$7Hrq = _r176_t0['create-stroke']['bind'](_r176_t0);
            r176_xn$setanchor$9Jrj = _r176_t0['set-anchor']['bind'](_r176_t0);
            r176_xn$dontexport$5sIl = function _r176_t3() {
                var _r178_t0, _r178_t1;
                return r176_currentGlyph['dontExport'] = true;
            };
            _r176_t0['gizmo'] = r4_globalTransform;
            _r176_t0['set-width'](r4_WIDTH);
            r176_xn$setwidth$9Jrj(r4_WIDTH);
            r176_xn$assignunicode$7Hrq('C');
            r176_include(r4_capitalMarks);
            r176_include(r176_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t84() {
            var r180_currentGlyph, r180_xn$setwidth$9Jrj, r180_xn$assignunicode$7Hrq, r180_xn$startfrom$1aao, r180_xn$lineto$5sIl, r180_xn$curveto$1aao, r180_xn$cubicto$1aao, r180_xn$putshapes$9Jrj, r180_xn$reverselast$3qIs, r180_include, r180_xn$createstroke$7Hrq, r180_xn$setanchor$9Jrj, r180_xn$dontexport$5sIl, _r180_t0, _r180_t1, _r180_t2, _r180_t3;
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
            r180_xn$dontexport$5sIl = function _r180_t3() {
                var _r182_t0, _r182_t1;
                return r180_currentGlyph['dontExport'] = true;
            };
            _r180_t0['gizmo'] = r4_globalTransform;
            _r180_t0['set-width'](r4_WIDTH);
            r180_xn$setwidth$9Jrj(r4_WIDTH);
            r180_xn$assignunicode$7Hrq('G');
            r180_include(r4_capitalMarks);
            r180_include(r180_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r180_include(r180_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t85() {
            var r184_currentGlyph, r184_xn$setwidth$9Jrj, r184_xn$assignunicode$7Hrq, r184_xn$startfrom$1aao, r184_xn$lineto$5sIl, r184_xn$curveto$1aao, r184_xn$cubicto$1aao, r184_xn$putshapes$9Jrj, r184_xn$reverselast$3qIs, r184_include, r184_xn$createstroke$7Hrq, r184_xn$setanchor$9Jrj, r184_xn$dontexport$5sIl, _r184_t0, _r184_t1, _r184_t2, _r184_t3;
            _r184_t0 = this;
            r184_currentGlyph = _r184_t0;
            r184_xn$setwidth$9Jrj = _r184_t0['set-width']['bind'](_r184_t0);
            r184_xn$assignunicode$7Hrq = function _r184_t2(r185_code) {
                var r185_code, _r185_t0, _r185_t1;
                r184_currentGlyph['assign-unicode'](r185_code);
                return r4_unicodeGlyphs[r184_currentGlyph['unicode'][r184_currentGlyph['unicode']['length'] - 1]] = r184_currentGlyph;
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
            r184_xn$dontexport$5sIl = function _r184_t3() {
                var _r186_t0, _r186_t1;
                return r184_currentGlyph['dontExport'] = true;
            };
            _r184_t0['gizmo'] = r4_globalTransform;
            _r184_t0['set-width'](r4_WIDTH);
            r184_xn$setwidth$9Jrj(r4_WIDTH);
            r184_xn$assignunicode$7Hrq('O');
            r184_include(r4_capitalMarks);
            r184_include(r184_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t86() {
            var r188_currentGlyph, r188_xn$setwidth$9Jrj, r188_xn$assignunicode$7Hrq, r188_xn$startfrom$1aao, r188_xn$lineto$5sIl, r188_xn$curveto$1aao, r188_xn$cubicto$1aao, r188_xn$putshapes$9Jrj, r188_xn$reverselast$3qIs, r188_include, r188_xn$createstroke$7Hrq, r188_xn$setanchor$9Jrj, r188_xn$dontexport$5sIl, _r188_t0, _r188_t1, _r188_t2, _r188_t3;
            _r188_t0 = this;
            r188_currentGlyph = _r188_t0;
            r188_xn$setwidth$9Jrj = _r188_t0['set-width']['bind'](_r188_t0);
            r188_xn$assignunicode$7Hrq = function _r188_t2(r189_code) {
                var r189_code, _r189_t0, _r189_t1;
                r188_currentGlyph['assign-unicode'](r189_code);
                return r4_unicodeGlyphs[r188_currentGlyph['unicode'][r188_currentGlyph['unicode']['length'] - 1]] = r188_currentGlyph;
            };
            r188_xn$startfrom$1aao = _r188_t0['start-from']['bind'](_r188_t0);
            r188_xn$lineto$5sIl = _r188_t0['line-to']['bind'](_r188_t0);
            r188_xn$curveto$1aao = _r188_t0['curve-to']['bind'](_r188_t0);
            r188_xn$cubicto$1aao = _r188_t0['cubic-to']['bind'](_r188_t0);
            r188_xn$putshapes$9Jrj = _r188_t0['put-shapes']['bind'](_r188_t0);
            r188_xn$reverselast$3qIs = _r188_t0['reverse-last']['bind'](_r188_t0);
            r188_include = _r188_t0['include']['bind'](_r188_t0);
            r188_xn$createstroke$7Hrq = _r188_t0['create-stroke']['bind'](_r188_t0);
            r188_xn$setanchor$9Jrj = _r188_t0['set-anchor']['bind'](_r188_t0);
            r188_xn$dontexport$5sIl = function _r188_t3() {
                var _r190_t0, _r190_t1;
                return r188_currentGlyph['dontExport'] = true;
            };
            _r188_t0['gizmo'] = r4_globalTransform;
            _r188_t0['set-width'](r4_WIDTH);
            r188_xn$setwidth$9Jrj(r4_WIDTH);
            r188_xn$assignunicode$7Hrq('Q');
            r188_include(r4_glyphs['O'], r4_AS_BASE);
            r188_xn$startfrom$1aao(r4_MIDDLE, 0);
            r188_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r188_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r188_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r188_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r188_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t87() {
            var r192_currentGlyph, r192_xn$setwidth$9Jrj, r192_xn$assignunicode$7Hrq, r192_xn$startfrom$1aao, r192_xn$lineto$5sIl, r192_xn$curveto$1aao, r192_xn$cubicto$1aao, r192_xn$putshapes$9Jrj, r192_xn$reverselast$3qIs, r192_include, r192_xn$createstroke$7Hrq, r192_xn$setanchor$9Jrj, r192_xn$dontexport$5sIl, _r192_t0, _r192_t1, _r192_t2, _r192_t3;
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
            r192_xn$dontexport$5sIl = function _r192_t3() {
                var _r194_t0, _r194_t1;
                return r192_currentGlyph['dontExport'] = true;
            };
            _r192_t0['gizmo'] = r4_globalTransform;
            _r192_t0['set-width'](r4_WIDTH);
            r192_xn$setwidth$9Jrj(r4_WIDTH);
            r192_xn$assignunicode$7Hrq('U');
            r192_include(r4_capitalMarks);
            r192_include(r192_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('F', function _r4_t88() {
            var r196_currentGlyph, r196_xn$setwidth$9Jrj, r196_xn$assignunicode$7Hrq, r196_xn$startfrom$1aao, r196_xn$lineto$5sIl, r196_xn$curveto$1aao, r196_xn$cubicto$1aao, r196_xn$putshapes$9Jrj, r196_xn$reverselast$3qIs, r196_include, r196_xn$createstroke$7Hrq, r196_xn$setanchor$9Jrj, r196_xn$dontexport$5sIl, _r196_t0, _r196_t1, _r196_t2, _r196_t3;
            _r196_t0 = this;
            r196_currentGlyph = _r196_t0;
            r196_xn$setwidth$9Jrj = _r196_t0['set-width']['bind'](_r196_t0);
            r196_xn$assignunicode$7Hrq = function _r196_t2(r197_code) {
                var r197_code, _r197_t0, _r197_t1;
                r196_currentGlyph['assign-unicode'](r197_code);
                return r4_unicodeGlyphs[r196_currentGlyph['unicode'][r196_currentGlyph['unicode']['length'] - 1]] = r196_currentGlyph;
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
            r196_xn$dontexport$5sIl = function _r196_t3() {
                var _r198_t0, _r198_t1;
                return r196_currentGlyph['dontExport'] = true;
            };
            _r196_t0['gizmo'] = r4_globalTransform;
            _r196_t0['set-width'](r4_WIDTH);
            r196_xn$setwidth$9Jrj(r4_WIDTH);
            r196_xn$assignunicode$7Hrq('F');
            r196_include(r4_capitalMarks);
            r196_include(r196_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
            r196_include(r196_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r196_include(r196_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t89() {
            var r200_currentGlyph, r200_xn$setwidth$9Jrj, r200_xn$assignunicode$7Hrq, r200_xn$startfrom$1aao, r200_xn$lineto$5sIl, r200_xn$curveto$1aao, r200_xn$cubicto$1aao, r200_xn$putshapes$9Jrj, r200_xn$reverselast$3qIs, r200_include, r200_xn$createstroke$7Hrq, r200_xn$setanchor$9Jrj, r200_xn$dontexport$5sIl, _r200_t0, _r200_t1, _r200_t2, _r200_t3;
            _r200_t0 = this;
            r200_currentGlyph = _r200_t0;
            r200_xn$setwidth$9Jrj = _r200_t0['set-width']['bind'](_r200_t0);
            r200_xn$assignunicode$7Hrq = function _r200_t2(r201_code) {
                var r201_code, _r201_t0, _r201_t1;
                r200_currentGlyph['assign-unicode'](r201_code);
                return r4_unicodeGlyphs[r200_currentGlyph['unicode'][r200_currentGlyph['unicode']['length'] - 1]] = r200_currentGlyph;
            };
            r200_xn$startfrom$1aao = _r200_t0['start-from']['bind'](_r200_t0);
            r200_xn$lineto$5sIl = _r200_t0['line-to']['bind'](_r200_t0);
            r200_xn$curveto$1aao = _r200_t0['curve-to']['bind'](_r200_t0);
            r200_xn$cubicto$1aao = _r200_t0['cubic-to']['bind'](_r200_t0);
            r200_xn$putshapes$9Jrj = _r200_t0['put-shapes']['bind'](_r200_t0);
            r200_xn$reverselast$3qIs = _r200_t0['reverse-last']['bind'](_r200_t0);
            r200_include = _r200_t0['include']['bind'](_r200_t0);
            r200_xn$createstroke$7Hrq = _r200_t0['create-stroke']['bind'](_r200_t0);
            r200_xn$setanchor$9Jrj = _r200_t0['set-anchor']['bind'](_r200_t0);
            r200_xn$dontexport$5sIl = function _r200_t3() {
                var _r202_t0, _r202_t1;
                return r200_currentGlyph['dontExport'] = true;
            };
            _r200_t0['gizmo'] = r4_globalTransform;
            _r200_t0['set-width'](r4_WIDTH);
            r200_xn$setwidth$9Jrj(r4_WIDTH);
            r200_xn$assignunicode$7Hrq('E');
            r200_include(r4_glyphs['F'], r4_AS_BASE);
            r200_include(r200_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t90() {
            var r204_currentGlyph, r204_xn$setwidth$9Jrj, r204_xn$assignunicode$7Hrq, r204_xn$startfrom$1aao, r204_xn$lineto$5sIl, r204_xn$curveto$1aao, r204_xn$cubicto$1aao, r204_xn$putshapes$9Jrj, r204_xn$reverselast$3qIs, r204_include, r204_xn$createstroke$7Hrq, r204_xn$setanchor$9Jrj, r204_xn$dontexport$5sIl, _r204_t0, _r204_t1, _r204_t2, _r204_t3;
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
            r204_xn$dontexport$5sIl = function _r204_t3() {
                var _r206_t0, _r206_t1;
                return r204_currentGlyph['dontExport'] = true;
            };
            _r204_t0['gizmo'] = r4_globalTransform;
            _r204_t0['set-width'](r4_WIDTH);
            r204_xn$setwidth$9Jrj(r4_WIDTH);
            r204_xn$assignunicode$7Hrq('H');
            r204_include(r4_capitalMarks);
            r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t91() {
            var r208_currentGlyph, r208_xn$setwidth$9Jrj, r208_xn$assignunicode$7Hrq, r208_xn$startfrom$1aao, r208_xn$lineto$5sIl, r208_xn$curveto$1aao, r208_xn$cubicto$1aao, r208_xn$putshapes$9Jrj, r208_xn$reverselast$3qIs, r208_include, r208_xn$createstroke$7Hrq, r208_xn$setanchor$9Jrj, r208_xn$dontexport$5sIl, _r208_t0, _r208_t1, _r208_t2, _r208_t3;
            _r208_t0 = this;
            r208_currentGlyph = _r208_t0;
            r208_xn$setwidth$9Jrj = _r208_t0['set-width']['bind'](_r208_t0);
            r208_xn$assignunicode$7Hrq = function _r208_t2(r209_code) {
                var r209_code, _r209_t0, _r209_t1;
                r208_currentGlyph['assign-unicode'](r209_code);
                return r4_unicodeGlyphs[r208_currentGlyph['unicode'][r208_currentGlyph['unicode']['length'] - 1]] = r208_currentGlyph;
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
            r208_xn$dontexport$5sIl = function _r208_t3() {
                var _r210_t0, _r210_t1;
                return r208_currentGlyph['dontExport'] = true;
            };
            _r208_t0['gizmo'] = r4_globalTransform;
            _r208_t0['set-width'](r4_WIDTH);
            r208_xn$setwidth$9Jrj(r4_WIDTH);
            r208_xn$assignunicode$7Hrq('L');
            r208_include(r4_capitalMarks);
            r208_include(r208_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r208_include(r208_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t92() {
            var r212_currentGlyph, r212_xn$setwidth$9Jrj, r212_xn$assignunicode$7Hrq, r212_xn$startfrom$1aao, r212_xn$lineto$5sIl, r212_xn$curveto$1aao, r212_xn$cubicto$1aao, r212_xn$putshapes$9Jrj, r212_xn$reverselast$3qIs, r212_include, r212_xn$createstroke$7Hrq, r212_xn$setanchor$9Jrj, r212_xn$dontexport$5sIl, _r212_t0, _r212_t1, _r212_t2, _r212_t3;
            _r212_t0 = this;
            r212_currentGlyph = _r212_t0;
            r212_xn$setwidth$9Jrj = _r212_t0['set-width']['bind'](_r212_t0);
            r212_xn$assignunicode$7Hrq = function _r212_t2(r213_code) {
                var r213_code, _r213_t0, _r213_t1;
                r212_currentGlyph['assign-unicode'](r213_code);
                return r4_unicodeGlyphs[r212_currentGlyph['unicode'][r212_currentGlyph['unicode']['length'] - 1]] = r212_currentGlyph;
            };
            r212_xn$startfrom$1aao = _r212_t0['start-from']['bind'](_r212_t0);
            r212_xn$lineto$5sIl = _r212_t0['line-to']['bind'](_r212_t0);
            r212_xn$curveto$1aao = _r212_t0['curve-to']['bind'](_r212_t0);
            r212_xn$cubicto$1aao = _r212_t0['cubic-to']['bind'](_r212_t0);
            r212_xn$putshapes$9Jrj = _r212_t0['put-shapes']['bind'](_r212_t0);
            r212_xn$reverselast$3qIs = _r212_t0['reverse-last']['bind'](_r212_t0);
            r212_include = _r212_t0['include']['bind'](_r212_t0);
            r212_xn$createstroke$7Hrq = _r212_t0['create-stroke']['bind'](_r212_t0);
            r212_xn$setanchor$9Jrj = _r212_t0['set-anchor']['bind'](_r212_t0);
            r212_xn$dontexport$5sIl = function _r212_t3() {
                var _r214_t0, _r214_t1;
                return r212_currentGlyph['dontExport'] = true;
            };
            _r212_t0['gizmo'] = r4_globalTransform;
            _r212_t0['set-width'](r4_WIDTH);
            r212_xn$dontexport$5sIl();
            r212_include(r4_capitalMarks);
            r212_include(r212_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t93() {
            var r216_currentGlyph, r216_xn$setwidth$9Jrj, r216_xn$assignunicode$7Hrq, r216_xn$startfrom$1aao, r216_xn$lineto$5sIl, r216_xn$curveto$1aao, r216_xn$cubicto$1aao, r216_xn$putshapes$9Jrj, r216_xn$reverselast$3qIs, r216_include, r216_xn$createstroke$7Hrq, r216_xn$setanchor$9Jrj, r216_xn$dontexport$5sIl, _r216_t0, _r216_t1, _r216_t2, _r216_t3;
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
            r216_xn$dontexport$5sIl = function _r216_t3() {
                var _r218_t0, _r218_t1;
                return r216_currentGlyph['dontExport'] = true;
            };
            _r216_t0['gizmo'] = r4_globalTransform;
            _r216_t0['set-width'](r4_WIDTH);
            r216_xn$dontexport$5sIl();
            r216_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t94() {
            var r220_currentGlyph, r220_xn$setwidth$9Jrj, r220_xn$assignunicode$7Hrq, r220_xn$startfrom$1aao, r220_xn$lineto$5sIl, r220_xn$curveto$1aao, r220_xn$cubicto$1aao, r220_xn$putshapes$9Jrj, r220_xn$reverselast$3qIs, r220_include, r220_xn$createstroke$7Hrq, r220_xn$setanchor$9Jrj, r220_xn$dontexport$5sIl, _r220_t0, _r220_t1, _r220_t2, _r220_t3;
            _r220_t0 = this;
            r220_currentGlyph = _r220_t0;
            r220_xn$setwidth$9Jrj = _r220_t0['set-width']['bind'](_r220_t0);
            r220_xn$assignunicode$7Hrq = function _r220_t2(r221_code) {
                var r221_code, _r221_t0, _r221_t1;
                r220_currentGlyph['assign-unicode'](r221_code);
                return r4_unicodeGlyphs[r220_currentGlyph['unicode'][r220_currentGlyph['unicode']['length'] - 1]] = r220_currentGlyph;
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
            r220_xn$dontexport$5sIl = function _r220_t3() {
                var _r222_t0, _r222_t1;
                return r220_currentGlyph['dontExport'] = true;
            };
            _r220_t0['gizmo'] = r4_globalTransform;
            _r220_t0['set-width'](r4_WIDTH);
            r220_xn$setwidth$9Jrj(r4_WIDTH);
            r220_xn$assignunicode$7Hrq('T');
            r220_include(r4_capitalMarks);
            r220_include(r220_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r220_include(r220_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t95() {
            var r224_currentGlyph, r224_xn$setwidth$9Jrj, r224_xn$assignunicode$7Hrq, r224_xn$startfrom$1aao, r224_xn$lineto$5sIl, r224_xn$curveto$1aao, r224_xn$cubicto$1aao, r224_xn$putshapes$9Jrj, r224_xn$reverselast$3qIs, r224_include, r224_xn$createstroke$7Hrq, r224_xn$setanchor$9Jrj, r224_xn$dontexport$5sIl, r224_cor, _r224_t0, _r224_t1, _r224_t2, _r224_t3;
            _r224_t0 = this;
            r224_currentGlyph = _r224_t0;
            r224_xn$setwidth$9Jrj = _r224_t0['set-width']['bind'](_r224_t0);
            r224_xn$assignunicode$7Hrq = function _r224_t2(r225_code) {
                var r225_code, _r225_t0, _r225_t1;
                r224_currentGlyph['assign-unicode'](r225_code);
                return r4_unicodeGlyphs[r224_currentGlyph['unicode'][r224_currentGlyph['unicode']['length'] - 1]] = r224_currentGlyph;
            };
            r224_xn$startfrom$1aao = _r224_t0['start-from']['bind'](_r224_t0);
            r224_xn$lineto$5sIl = _r224_t0['line-to']['bind'](_r224_t0);
            r224_xn$curveto$1aao = _r224_t0['curve-to']['bind'](_r224_t0);
            r224_xn$cubicto$1aao = _r224_t0['cubic-to']['bind'](_r224_t0);
            r224_xn$putshapes$9Jrj = _r224_t0['put-shapes']['bind'](_r224_t0);
            r224_xn$reverselast$3qIs = _r224_t0['reverse-last']['bind'](_r224_t0);
            r224_include = _r224_t0['include']['bind'](_r224_t0);
            r224_xn$createstroke$7Hrq = _r224_t0['create-stroke']['bind'](_r224_t0);
            r224_xn$setanchor$9Jrj = _r224_t0['set-anchor']['bind'](_r224_t0);
            r224_xn$dontexport$5sIl = function _r224_t3() {
                var _r226_t0, _r226_t1;
                return r224_currentGlyph['dontExport'] = true;
            };
            _r224_t0['gizmo'] = r4_globalTransform;
            _r224_t0['set-width'](r4_WIDTH);
            r224_xn$setwidth$9Jrj(r4_WIDTH);
            r224_xn$assignunicode$7Hrq('Z');
            r224_include(r4_capitalMarks);
            r224_cor = 1.15;
            r224_include(r224_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r224_include(r224_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r224_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r224_xn$lineto$5sIl(r4_SB + r4_STROKE * r224_cor, r4_STROKE);
            r224_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r224_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r224_cor, r4_CAP - r4_STROKE);
            r224_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t96() {
            var r228_currentGlyph, r228_xn$setwidth$9Jrj, r228_xn$assignunicode$7Hrq, r228_xn$startfrom$1aao, r228_xn$lineto$5sIl, r228_xn$curveto$1aao, r228_xn$cubicto$1aao, r228_xn$putshapes$9Jrj, r228_xn$reverselast$3qIs, r228_include, r228_xn$createstroke$7Hrq, r228_xn$setanchor$9Jrj, r228_xn$dontexport$5sIl, r228_slope, r228_expand, r228_coexpand, r228_kappa, r228_smooth, r228_hookx, _r228_t0, _r228_t1, _r228_t2, _r228_t3;
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
            r228_xn$dontexport$5sIl = function _r228_t3() {
                var _r230_t0, _r230_t1;
                return r228_currentGlyph['dontExport'] = true;
            };
            _r228_t0['gizmo'] = r4_globalTransform;
            _r228_t0['set-width'](r4_WIDTH);
            r228_xn$setwidth$9Jrj(r4_WIDTH);
            r228_xn$dontexport$5sIl();
            r228_include(r4_capitalMarks);
            r228_slope = r4_STROKE * 0.00092;
            r228_expand = 0.35;
            r228_coexpand = (1 - r228_expand) / 2;
            r228_kappa = r4_KAPPA_HOOK;
            r228_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r228_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r228_include(r228_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r228_smooth)['arc-vh-to'](r0_mix(r228_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r228_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r228_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t97() {
            var r232_currentGlyph, r232_xn$setwidth$9Jrj, r232_xn$assignunicode$7Hrq, r232_xn$startfrom$1aao, r232_xn$lineto$5sIl, r232_xn$curveto$1aao, r232_xn$cubicto$1aao, r232_xn$putshapes$9Jrj, r232_xn$reverselast$3qIs, r232_include, r232_xn$createstroke$7Hrq, r232_xn$setanchor$9Jrj, r232_xn$dontexport$5sIl, _r232_t0, _r232_t1, _r232_t2, _r232_t3;
            _r232_t0 = this;
            r232_currentGlyph = _r232_t0;
            r232_xn$setwidth$9Jrj = _r232_t0['set-width']['bind'](_r232_t0);
            r232_xn$assignunicode$7Hrq = function _r232_t2(r233_code) {
                var r233_code, _r233_t0, _r233_t1;
                r232_currentGlyph['assign-unicode'](r233_code);
                return r4_unicodeGlyphs[r232_currentGlyph['unicode'][r232_currentGlyph['unicode']['length'] - 1]] = r232_currentGlyph;
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
            r232_xn$dontexport$5sIl = function _r232_t3() {
                var _r234_t0, _r234_t1;
                return r232_currentGlyph['dontExport'] = true;
            };
            _r232_t0['gizmo'] = r4_globalTransform;
            _r232_t0['set-width'](r4_WIDTH);
            r232_xn$setwidth$9Jrj(r4_WIDTH);
            r232_xn$dontexport$5sIl();
            r232_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r232_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t98() {
            var r236_currentGlyph, r236_xn$setwidth$9Jrj, r236_xn$assignunicode$7Hrq, r236_xn$startfrom$1aao, r236_xn$lineto$5sIl, r236_xn$curveto$1aao, r236_xn$cubicto$1aao, r236_xn$putshapes$9Jrj, r236_xn$reverselast$3qIs, r236_include, r236_xn$createstroke$7Hrq, r236_xn$setanchor$9Jrj, r236_xn$dontexport$5sIl, r236_topstroke, r236_halftopstroke, _r236_t0, _r236_t1, _r236_t2, _r236_t3;
            _r236_t0 = this;
            r236_currentGlyph = _r236_t0;
            r236_xn$setwidth$9Jrj = _r236_t0['set-width']['bind'](_r236_t0);
            r236_xn$assignunicode$7Hrq = function _r236_t2(r237_code) {
                var r237_code, _r237_t0, _r237_t1;
                r236_currentGlyph['assign-unicode'](r237_code);
                return r4_unicodeGlyphs[r236_currentGlyph['unicode'][r236_currentGlyph['unicode']['length'] - 1]] = r236_currentGlyph;
            };
            r236_xn$startfrom$1aao = _r236_t0['start-from']['bind'](_r236_t0);
            r236_xn$lineto$5sIl = _r236_t0['line-to']['bind'](_r236_t0);
            r236_xn$curveto$1aao = _r236_t0['curve-to']['bind'](_r236_t0);
            r236_xn$cubicto$1aao = _r236_t0['cubic-to']['bind'](_r236_t0);
            r236_xn$putshapes$9Jrj = _r236_t0['put-shapes']['bind'](_r236_t0);
            r236_xn$reverselast$3qIs = _r236_t0['reverse-last']['bind'](_r236_t0);
            r236_include = _r236_t0['include']['bind'](_r236_t0);
            r236_xn$createstroke$7Hrq = _r236_t0['create-stroke']['bind'](_r236_t0);
            r236_xn$setanchor$9Jrj = _r236_t0['set-anchor']['bind'](_r236_t0);
            r236_xn$dontexport$5sIl = function _r236_t3() {
                var _r238_t0, _r238_t1;
                return r236_currentGlyph['dontExport'] = true;
            };
            _r236_t0['gizmo'] = r4_globalTransform;
            _r236_t0['set-width'](r4_WIDTH);
            r236_xn$setwidth$9Jrj(r4_WIDTH);
            r236_xn$assignunicode$7Hrq('N');
            r236_include(r4_capitalMarks);
            r236_topstroke = r4_adviceBlackness(4);
            r236_halftopstroke = r236_topstroke / 2;
            r236_include(r236_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r236_topstroke));
            r236_include(r236_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r236_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r236_include(r236_xn$createstroke$7Hrq()['start-from'](r4_SB + r236_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r236_topstroke, 0)['line-to'](r4_RIGHTSB - r236_topstroke - r236_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t99() {
            var r240_currentGlyph, r240_xn$setwidth$9Jrj, r240_xn$assignunicode$7Hrq, r240_xn$startfrom$1aao, r240_xn$lineto$5sIl, r240_xn$curveto$1aao, r240_xn$cubicto$1aao, r240_xn$putshapes$9Jrj, r240_xn$reverselast$3qIs, r240_include, r240_xn$createstroke$7Hrq, r240_xn$setanchor$9Jrj, r240_xn$dontexport$5sIl, r240_topstroke, r240_halftopstroke, _r240_t0, _r240_t1, _r240_t2, _r240_t3;
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
            r240_xn$dontexport$5sIl = function _r240_t3() {
                var _r242_t0, _r242_t1;
                return r240_currentGlyph['dontExport'] = true;
            };
            _r240_t0['gizmo'] = r4_globalTransform;
            _r240_t0['set-width'](r4_WIDTH);
            r240_xn$setwidth$9Jrj(r4_WIDTH);
            r240_xn$assignunicode$7Hrq('M');
            r240_include(r4_capitalMarks);
            r240_topstroke = r4_adviceBlackness(5);
            r240_halftopstroke = r240_topstroke / 2;
            r240_include(r240_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r240_topstroke));
            r240_include(r240_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r240_topstroke, 0));
            r240_include(r240_xn$createstroke$7Hrq()['start-from'](r4_SB + r240_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r240_topstroke, 0)['line-to'](r4_MIDDLE - r240_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r240_include(r240_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r240_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r240_topstroke, 0)['line-to'](r4_RIGHTSB - r240_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t100() {
            var r244_currentGlyph, r244_xn$setwidth$9Jrj, r244_xn$assignunicode$7Hrq, r244_xn$startfrom$1aao, r244_xn$lineto$5sIl, r244_xn$curveto$1aao, r244_xn$cubicto$1aao, r244_xn$putshapes$9Jrj, r244_xn$reverselast$3qIs, r244_include, r244_xn$createstroke$7Hrq, r244_xn$setanchor$9Jrj, r244_xn$dontexport$5sIl, _r244_t0, _r244_t1, _r244_t2, _r244_t3;
            _r244_t0 = this;
            r244_currentGlyph = _r244_t0;
            r244_xn$setwidth$9Jrj = _r244_t0['set-width']['bind'](_r244_t0);
            r244_xn$assignunicode$7Hrq = function _r244_t2(r245_code) {
                var r245_code, _r245_t0, _r245_t1;
                r244_currentGlyph['assign-unicode'](r245_code);
                return r4_unicodeGlyphs[r244_currentGlyph['unicode'][r244_currentGlyph['unicode']['length'] - 1]] = r244_currentGlyph;
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
            r244_xn$dontexport$5sIl = function _r244_t3() {
                var _r246_t0, _r246_t1;
                return r244_currentGlyph['dontExport'] = true;
            };
            _r244_t0['gizmo'] = r4_globalTransform;
            _r244_t0['set-width'](r4_WIDTH);
            r244_xn$setwidth$9Jrj(r4_WIDTH);
            r244_xn$assignunicode$7Hrq('S');
            r244_include(r4_capitalMarks);
            r244_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r244_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r244_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t101() {
            var r248_currentGlyph, r248_xn$setwidth$9Jrj, r248_xn$assignunicode$7Hrq, r248_xn$startfrom$1aao, r248_xn$lineto$5sIl, r248_xn$curveto$1aao, r248_xn$cubicto$1aao, r248_xn$putshapes$9Jrj, r248_xn$reverselast$3qIs, r248_include, r248_xn$createstroke$7Hrq, r248_xn$setanchor$9Jrj, r248_xn$dontexport$5sIl, _r248_t0, _r248_t1, _r248_t2, _r248_t3;
            _r248_t0 = this;
            r248_currentGlyph = _r248_t0;
            r248_xn$setwidth$9Jrj = _r248_t0['set-width']['bind'](_r248_t0);
            r248_xn$assignunicode$7Hrq = function _r248_t2(r249_code) {
                var r249_code, _r249_t0, _r249_t1;
                r248_currentGlyph['assign-unicode'](r249_code);
                return r4_unicodeGlyphs[r248_currentGlyph['unicode'][r248_currentGlyph['unicode']['length'] - 1]] = r248_currentGlyph;
            };
            r248_xn$startfrom$1aao = _r248_t0['start-from']['bind'](_r248_t0);
            r248_xn$lineto$5sIl = _r248_t0['line-to']['bind'](_r248_t0);
            r248_xn$curveto$1aao = _r248_t0['curve-to']['bind'](_r248_t0);
            r248_xn$cubicto$1aao = _r248_t0['cubic-to']['bind'](_r248_t0);
            r248_xn$putshapes$9Jrj = _r248_t0['put-shapes']['bind'](_r248_t0);
            r248_xn$reverselast$3qIs = _r248_t0['reverse-last']['bind'](_r248_t0);
            r248_include = _r248_t0['include']['bind'](_r248_t0);
            r248_xn$createstroke$7Hrq = _r248_t0['create-stroke']['bind'](_r248_t0);
            r248_xn$setanchor$9Jrj = _r248_t0['set-anchor']['bind'](_r248_t0);
            r248_xn$dontexport$5sIl = function _r248_t3() {
                var _r250_t0, _r250_t1;
                return r248_currentGlyph['dontExport'] = true;
            };
            _r248_t0['gizmo'] = r4_globalTransform;
            _r248_t0['set-width'](r4_WIDTH);
            r248_xn$setwidth$9Jrj(r4_WIDTH);
            r248_xn$assignunicode$7Hrq('o');
            r248_include(r4_eMarks);
            r248_include(r248_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.left', function _r4_t102() {
            var r252_currentGlyph, r252_xn$setwidth$9Jrj, r252_xn$assignunicode$7Hrq, r252_xn$startfrom$1aao, r252_xn$lineto$5sIl, r252_xn$curveto$1aao, r252_xn$cubicto$1aao, r252_xn$putshapes$9Jrj, r252_xn$reverselast$3qIs, r252_include, r252_xn$createstroke$7Hrq, r252_xn$setanchor$9Jrj, r252_xn$dontexport$5sIl, _r252_t0, _r252_t1, _r252_t2, _r252_t3;
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
            r252_xn$dontexport$5sIl = function _r252_t3() {
                var _r254_t0, _r254_t1;
                return r252_currentGlyph['dontExport'] = true;
            };
            _r252_t0['gizmo'] = r4_globalTransform;
            _r252_t0['set-width'](r4_WIDTH);
            r252_xn$dontexport$5sIl();
            r252_xn$setwidth$9Jrj(r4_WIDTH);
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.right', function _r4_t103() {
            var r256_currentGlyph, r256_xn$setwidth$9Jrj, r256_xn$assignunicode$7Hrq, r256_xn$startfrom$1aao, r256_xn$lineto$5sIl, r256_xn$curveto$1aao, r256_xn$cubicto$1aao, r256_xn$putshapes$9Jrj, r256_xn$reverselast$3qIs, r256_include, r256_xn$createstroke$7Hrq, r256_xn$setanchor$9Jrj, r256_xn$dontexport$5sIl, _r256_t0, _r256_t1, _r256_t2, _r256_t3;
            _r256_t0 = this;
            r256_currentGlyph = _r256_t0;
            r256_xn$setwidth$9Jrj = _r256_t0['set-width']['bind'](_r256_t0);
            r256_xn$assignunicode$7Hrq = function _r256_t2(r257_code) {
                var r257_code, _r257_t0, _r257_t1;
                r256_currentGlyph['assign-unicode'](r257_code);
                return r4_unicodeGlyphs[r256_currentGlyph['unicode'][r256_currentGlyph['unicode']['length'] - 1]] = r256_currentGlyph;
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
            r256_xn$dontexport$5sIl = function _r256_t3() {
                var _r258_t0, _r258_t1;
                return r256_currentGlyph['dontExport'] = true;
            };
            _r256_t0['gizmo'] = r4_globalTransform;
            _r256_t0['set-width'](r4_WIDTH);
            r256_xn$dontexport$5sIl();
            r256_xn$setwidth$9Jrj(r4_WIDTH);
            r256_include(r256_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r256_include(r256_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('p', function _r4_t104() {
            var r260_currentGlyph, r260_xn$setwidth$9Jrj, r260_xn$assignunicode$7Hrq, r260_xn$startfrom$1aao, r260_xn$lineto$5sIl, r260_xn$curveto$1aao, r260_xn$cubicto$1aao, r260_xn$putshapes$9Jrj, r260_xn$reverselast$3qIs, r260_include, r260_xn$createstroke$7Hrq, r260_xn$setanchor$9Jrj, r260_xn$dontexport$5sIl, _r260_t0, _r260_t1, _r260_t2, _r260_t3;
            _r260_t0 = this;
            r260_currentGlyph = _r260_t0;
            r260_xn$setwidth$9Jrj = _r260_t0['set-width']['bind'](_r260_t0);
            r260_xn$assignunicode$7Hrq = function _r260_t2(r261_code) {
                var r261_code, _r261_t0, _r261_t1;
                r260_currentGlyph['assign-unicode'](r261_code);
                return r4_unicodeGlyphs[r260_currentGlyph['unicode'][r260_currentGlyph['unicode']['length'] - 1]] = r260_currentGlyph;
            };
            r260_xn$startfrom$1aao = _r260_t0['start-from']['bind'](_r260_t0);
            r260_xn$lineto$5sIl = _r260_t0['line-to']['bind'](_r260_t0);
            r260_xn$curveto$1aao = _r260_t0['curve-to']['bind'](_r260_t0);
            r260_xn$cubicto$1aao = _r260_t0['cubic-to']['bind'](_r260_t0);
            r260_xn$putshapes$9Jrj = _r260_t0['put-shapes']['bind'](_r260_t0);
            r260_xn$reverselast$3qIs = _r260_t0['reverse-last']['bind'](_r260_t0);
            r260_include = _r260_t0['include']['bind'](_r260_t0);
            r260_xn$createstroke$7Hrq = _r260_t0['create-stroke']['bind'](_r260_t0);
            r260_xn$setanchor$9Jrj = _r260_t0['set-anchor']['bind'](_r260_t0);
            r260_xn$dontexport$5sIl = function _r260_t3() {
                var _r262_t0, _r262_t1;
                return r260_currentGlyph['dontExport'] = true;
            };
            _r260_t0['gizmo'] = r4_globalTransform;
            _r260_t0['set-width'](r4_WIDTH);
            r260_xn$setwidth$9Jrj(r4_WIDTH);
            r260_xn$assignunicode$7Hrq('p');
            r260_include(r4_eMarks);
            r260_include(r4_glyphs['o.left']);
            r260_include(r260_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t105() {
            var r264_currentGlyph, r264_xn$setwidth$9Jrj, r264_xn$assignunicode$7Hrq, r264_xn$startfrom$1aao, r264_xn$lineto$5sIl, r264_xn$curveto$1aao, r264_xn$cubicto$1aao, r264_xn$putshapes$9Jrj, r264_xn$reverselast$3qIs, r264_include, r264_xn$createstroke$7Hrq, r264_xn$setanchor$9Jrj, r264_xn$dontexport$5sIl, _r264_t0, _r264_t1, _r264_t2, _r264_t3;
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
            r264_xn$dontexport$5sIl = function _r264_t3() {
                var _r266_t0, _r266_t1;
                return r264_currentGlyph['dontExport'] = true;
            };
            _r264_t0['gizmo'] = r4_globalTransform;
            _r264_t0['set-width'](r4_WIDTH);
            r264_xn$setwidth$9Jrj(r4_WIDTH);
            r264_xn$assignunicode$7Hrq('b');
            r264_include(r4_bMarks);
            r264_xn$putshapes$9Jrj(r4_glyphs['o.left']['contours']);
            r264_include(r264_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t106() {
            var r268_currentGlyph, r268_xn$setwidth$9Jrj, r268_xn$assignunicode$7Hrq, r268_xn$startfrom$1aao, r268_xn$lineto$5sIl, r268_xn$curveto$1aao, r268_xn$cubicto$1aao, r268_xn$putshapes$9Jrj, r268_xn$reverselast$3qIs, r268_include, r268_xn$createstroke$7Hrq, r268_xn$setanchor$9Jrj, r268_xn$dontexport$5sIl, _r268_t0, _r268_t1, _r268_t2, _r268_t3;
            _r268_t0 = this;
            r268_currentGlyph = _r268_t0;
            r268_xn$setwidth$9Jrj = _r268_t0['set-width']['bind'](_r268_t0);
            r268_xn$assignunicode$7Hrq = function _r268_t2(r269_code) {
                var r269_code, _r269_t0, _r269_t1;
                r268_currentGlyph['assign-unicode'](r269_code);
                return r4_unicodeGlyphs[r268_currentGlyph['unicode'][r268_currentGlyph['unicode']['length'] - 1]] = r268_currentGlyph;
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
            r268_xn$dontexport$5sIl = function _r268_t3() {
                var _r270_t0, _r270_t1;
                return r268_currentGlyph['dontExport'] = true;
            };
            _r268_t0['gizmo'] = r4_globalTransform;
            _r268_t0['set-width'](r4_WIDTH);
            r268_xn$setwidth$9Jrj(r4_WIDTH);
            r268_xn$assignunicode$7Hrq('q');
            r268_include(r4_eMarks);
            r268_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r268_include(r268_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t107() {
            var r272_currentGlyph, r272_xn$setwidth$9Jrj, r272_xn$assignunicode$7Hrq, r272_xn$startfrom$1aao, r272_xn$lineto$5sIl, r272_xn$curveto$1aao, r272_xn$cubicto$1aao, r272_xn$putshapes$9Jrj, r272_xn$reverselast$3qIs, r272_include, r272_xn$createstroke$7Hrq, r272_xn$setanchor$9Jrj, r272_xn$dontexport$5sIl, _r272_t0, _r272_t1, _r272_t2, _r272_t3;
            _r272_t0 = this;
            r272_currentGlyph = _r272_t0;
            r272_xn$setwidth$9Jrj = _r272_t0['set-width']['bind'](_r272_t0);
            r272_xn$assignunicode$7Hrq = function _r272_t2(r273_code) {
                var r273_code, _r273_t0, _r273_t1;
                r272_currentGlyph['assign-unicode'](r273_code);
                return r4_unicodeGlyphs[r272_currentGlyph['unicode'][r272_currentGlyph['unicode']['length'] - 1]] = r272_currentGlyph;
            };
            r272_xn$startfrom$1aao = _r272_t0['start-from']['bind'](_r272_t0);
            r272_xn$lineto$5sIl = _r272_t0['line-to']['bind'](_r272_t0);
            r272_xn$curveto$1aao = _r272_t0['curve-to']['bind'](_r272_t0);
            r272_xn$cubicto$1aao = _r272_t0['cubic-to']['bind'](_r272_t0);
            r272_xn$putshapes$9Jrj = _r272_t0['put-shapes']['bind'](_r272_t0);
            r272_xn$reverselast$3qIs = _r272_t0['reverse-last']['bind'](_r272_t0);
            r272_include = _r272_t0['include']['bind'](_r272_t0);
            r272_xn$createstroke$7Hrq = _r272_t0['create-stroke']['bind'](_r272_t0);
            r272_xn$setanchor$9Jrj = _r272_t0['set-anchor']['bind'](_r272_t0);
            r272_xn$dontexport$5sIl = function _r272_t3() {
                var _r274_t0, _r274_t1;
                return r272_currentGlyph['dontExport'] = true;
            };
            _r272_t0['gizmo'] = r4_globalTransform;
            _r272_t0['set-width'](r4_WIDTH);
            r272_xn$setwidth$9Jrj(r4_WIDTH);
            r272_xn$assignunicode$7Hrq('d');
            r272_include(r4_bMarks);
            r272_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r272_include(r272_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t108() {
            var r276_currentGlyph, r276_xn$setwidth$9Jrj, r276_xn$assignunicode$7Hrq, r276_xn$startfrom$1aao, r276_xn$lineto$5sIl, r276_xn$curveto$1aao, r276_xn$cubicto$1aao, r276_xn$putshapes$9Jrj, r276_xn$reverselast$3qIs, r276_include, r276_xn$createstroke$7Hrq, r276_xn$setanchor$9Jrj, r276_xn$dontexport$5sIl, r276_gleftx, r276_grightx, r276_groundy, _r276_t0, _r276_t1, _r276_t2, _r276_t3;
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
            r276_xn$dontexport$5sIl = function _r276_t3() {
                var _r278_t0, _r278_t1;
                return r276_currentGlyph['dontExport'] = true;
            };
            _r276_t0['gizmo'] = r4_globalTransform;
            _r276_t0['set-width'](r4_WIDTH);
            r276_xn$setwidth$9Jrj(r4_WIDTH);
            r276_xn$assignunicode$7Hrq('g');
            r276_include(r4_pMarks);
            r276_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r276_xn$reverselast$3qIs();
            r276_gleftx = r4_SB * 0.8 + r4_O;
            r276_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r276_groundy = r0_mix(r4_DESCENDER, r4_XH * r4_GBARPOS, 0.7) + r4_HALFSTROKE;
            r276_include(r276_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r276_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r276_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r276_groundy)['arc-hv-to'](r276_grightx, r0_mix(r4_DESCENDER + r4_O, r276_groundy, 0.53))['arc-vh-to'](r0_mix(r276_gleftx, r276_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r276_gleftx, r0_mix(r4_DESCENDER + r4_O, r276_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r276_groundy));
            r276_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r276_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r276_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r276_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t109() {
            var r280_currentGlyph, r280_xn$setwidth$9Jrj, r280_xn$assignunicode$7Hrq, r280_xn$startfrom$1aao, r280_xn$lineto$5sIl, r280_xn$curveto$1aao, r280_xn$cubicto$1aao, r280_xn$putshapes$9Jrj, r280_xn$reverselast$3qIs, r280_include, r280_xn$createstroke$7Hrq, r280_xn$setanchor$9Jrj, r280_xn$dontexport$5sIl, _r280_t0, _r280_t1, _r280_t2, _r280_t3;
            _r280_t0 = this;
            r280_currentGlyph = _r280_t0;
            r280_xn$setwidth$9Jrj = _r280_t0['set-width']['bind'](_r280_t0);
            r280_xn$assignunicode$7Hrq = function _r280_t2(r281_code) {
                var r281_code, _r281_t0, _r281_t1;
                r280_currentGlyph['assign-unicode'](r281_code);
                return r4_unicodeGlyphs[r280_currentGlyph['unicode'][r280_currentGlyph['unicode']['length'] - 1]] = r280_currentGlyph;
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
            r280_xn$dontexport$5sIl = function _r280_t3() {
                var _r282_t0, _r282_t1;
                return r280_currentGlyph['dontExport'] = true;
            };
            _r280_t0['gizmo'] = r4_globalTransform;
            _r280_t0['set-width'](r4_WIDTH);
            r280_xn$setwidth$9Jrj(r4_WIDTH);
            r280_xn$assignunicode$7Hrq('c');
            r280_include(r4_eMarks);
            r280_include(r280_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t110() {
            var r284_currentGlyph, r284_xn$setwidth$9Jrj, r284_xn$assignunicode$7Hrq, r284_xn$startfrom$1aao, r284_xn$lineto$5sIl, r284_xn$curveto$1aao, r284_xn$cubicto$1aao, r284_xn$putshapes$9Jrj, r284_xn$reverselast$3qIs, r284_include, r284_xn$createstroke$7Hrq, r284_xn$setanchor$9Jrj, r284_xn$dontexport$5sIl, r284_barbottom, r284_hookx, r284_hookmiddle, _r284_t0, _r284_t1, _r284_t2, _r284_t3;
            _r284_t0 = this;
            r284_currentGlyph = _r284_t0;
            r284_xn$setwidth$9Jrj = _r284_t0['set-width']['bind'](_r284_t0);
            r284_xn$assignunicode$7Hrq = function _r284_t2(r285_code) {
                var r285_code, _r285_t0, _r285_t1;
                r284_currentGlyph['assign-unicode'](r285_code);
                return r4_unicodeGlyphs[r284_currentGlyph['unicode'][r284_currentGlyph['unicode']['length'] - 1]] = r284_currentGlyph;
            };
            r284_xn$startfrom$1aao = _r284_t0['start-from']['bind'](_r284_t0);
            r284_xn$lineto$5sIl = _r284_t0['line-to']['bind'](_r284_t0);
            r284_xn$curveto$1aao = _r284_t0['curve-to']['bind'](_r284_t0);
            r284_xn$cubicto$1aao = _r284_t0['cubic-to']['bind'](_r284_t0);
            r284_xn$putshapes$9Jrj = _r284_t0['put-shapes']['bind'](_r284_t0);
            r284_xn$reverselast$3qIs = _r284_t0['reverse-last']['bind'](_r284_t0);
            r284_include = _r284_t0['include']['bind'](_r284_t0);
            r284_xn$createstroke$7Hrq = _r284_t0['create-stroke']['bind'](_r284_t0);
            r284_xn$setanchor$9Jrj = _r284_t0['set-anchor']['bind'](_r284_t0);
            r284_xn$dontexport$5sIl = function _r284_t3() {
                var _r286_t0, _r286_t1;
                return r284_currentGlyph['dontExport'] = true;
            };
            _r284_t0['gizmo'] = r4_globalTransform;
            _r284_t0['set-width'](r4_WIDTH);
            r284_xn$setwidth$9Jrj(r4_WIDTH);
            r284_xn$dontexport$5sIl();
            r284_barbottom = r4_XH * r4_EBARPOS;
            r284_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r284_hookmiddle = r0_mix(r4_SB + r4_O, r284_hookx, 0.55);
            r284_include(r284_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r284_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r284_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r284_hookmiddle, r284_hookx, r4_KAPPA_HOOK), r4_O, r284_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r284_include(r284_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r284_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r284_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t111() {
            var r288_currentGlyph, r288_xn$setwidth$9Jrj, r288_xn$assignunicode$7Hrq, r288_xn$startfrom$1aao, r288_xn$lineto$5sIl, r288_xn$curveto$1aao, r288_xn$cubicto$1aao, r288_xn$putshapes$9Jrj, r288_xn$reverselast$3qIs, r288_include, r288_xn$createstroke$7Hrq, r288_xn$setanchor$9Jrj, r288_xn$dontexport$5sIl, r288_barbottom, _r288_t0, _r288_t1, _r288_t2, _r288_t3;
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
            r288_xn$dontexport$5sIl = function _r288_t3() {
                var _r290_t0, _r290_t1;
                return r288_currentGlyph['dontExport'] = true;
            };
            _r288_t0['gizmo'] = r4_globalTransform;
            _r288_t0['set-width'](r4_WIDTH);
            r288_xn$setwidth$9Jrj(r4_WIDTH);
            r288_xn$dontexport$5sIl();
            r288_barbottom = r4_XH * r4_EBARPOS;
            r288_include(r288_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r288_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t112() {
            var r292_currentGlyph, r292_xn$setwidth$9Jrj, r292_xn$assignunicode$7Hrq, r292_xn$startfrom$1aao, r292_xn$lineto$5sIl, r292_xn$curveto$1aao, r292_xn$cubicto$1aao, r292_xn$putshapes$9Jrj, r292_xn$reverselast$3qIs, r292_include, r292_xn$createstroke$7Hrq, r292_xn$setanchor$9Jrj, r292_xn$dontexport$5sIl, _r292_t0, _r292_t1, _r292_t2, _r292_t3;
            _r292_t0 = this;
            r292_currentGlyph = _r292_t0;
            r292_xn$setwidth$9Jrj = _r292_t0['set-width']['bind'](_r292_t0);
            r292_xn$assignunicode$7Hrq = function _r292_t2(r293_code) {
                var r293_code, _r293_t0, _r293_t1;
                r292_currentGlyph['assign-unicode'](r293_code);
                return r4_unicodeGlyphs[r292_currentGlyph['unicode'][r292_currentGlyph['unicode']['length'] - 1]] = r292_currentGlyph;
            };
            r292_xn$startfrom$1aao = _r292_t0['start-from']['bind'](_r292_t0);
            r292_xn$lineto$5sIl = _r292_t0['line-to']['bind'](_r292_t0);
            r292_xn$curveto$1aao = _r292_t0['curve-to']['bind'](_r292_t0);
            r292_xn$cubicto$1aao = _r292_t0['cubic-to']['bind'](_r292_t0);
            r292_xn$putshapes$9Jrj = _r292_t0['put-shapes']['bind'](_r292_t0);
            r292_xn$reverselast$3qIs = _r292_t0['reverse-last']['bind'](_r292_t0);
            r292_include = _r292_t0['include']['bind'](_r292_t0);
            r292_xn$createstroke$7Hrq = _r292_t0['create-stroke']['bind'](_r292_t0);
            r292_xn$setanchor$9Jrj = _r292_t0['set-anchor']['bind'](_r292_t0);
            r292_xn$dontexport$5sIl = function _r292_t3() {
                var _r294_t0, _r294_t1;
                return r292_currentGlyph['dontExport'] = true;
            };
            _r292_t0['gizmo'] = r4_globalTransform;
            _r292_t0['set-width'](r4_WIDTH);
            r292_xn$setwidth$9Jrj(r4_WIDTH);
            r292_xn$assignunicode$7Hrq('e');
            r292_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r292_include(r4_glyphs['e.italic']);
            } else {
                r292_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t113() {
            var r296_currentGlyph, r296_xn$setwidth$9Jrj, r296_xn$assignunicode$7Hrq, r296_xn$startfrom$1aao, r296_xn$lineto$5sIl, r296_xn$curveto$1aao, r296_xn$cubicto$1aao, r296_xn$putshapes$9Jrj, r296_xn$reverselast$3qIs, r296_include, r296_xn$createstroke$7Hrq, r296_xn$setanchor$9Jrj, r296_xn$dontexport$5sIl, r296_center, r296_hookx, r296_turn, r296_smb, _r296_t0, _r296_t1, _r296_t2, _r296_t3;
            _r296_t0 = this;
            r296_currentGlyph = _r296_t0;
            r296_xn$setwidth$9Jrj = _r296_t0['set-width']['bind'](_r296_t0);
            r296_xn$assignunicode$7Hrq = function _r296_t2(r297_code) {
                var r297_code, _r297_t0, _r297_t1;
                r296_currentGlyph['assign-unicode'](r297_code);
                return r4_unicodeGlyphs[r296_currentGlyph['unicode'][r296_currentGlyph['unicode']['length'] - 1]] = r296_currentGlyph;
            };
            r296_xn$startfrom$1aao = _r296_t0['start-from']['bind'](_r296_t0);
            r296_xn$lineto$5sIl = _r296_t0['line-to']['bind'](_r296_t0);
            r296_xn$curveto$1aao = _r296_t0['curve-to']['bind'](_r296_t0);
            r296_xn$cubicto$1aao = _r296_t0['cubic-to']['bind'](_r296_t0);
            r296_xn$putshapes$9Jrj = _r296_t0['put-shapes']['bind'](_r296_t0);
            r296_xn$reverselast$3qIs = _r296_t0['reverse-last']['bind'](_r296_t0);
            r296_include = _r296_t0['include']['bind'](_r296_t0);
            r296_xn$createstroke$7Hrq = _r296_t0['create-stroke']['bind'](_r296_t0);
            r296_xn$setanchor$9Jrj = _r296_t0['set-anchor']['bind'](_r296_t0);
            r296_xn$dontexport$5sIl = function _r296_t3() {
                var _r298_t0, _r298_t1;
                return r296_currentGlyph['dontExport'] = true;
            };
            _r296_t0['gizmo'] = r4_globalTransform;
            _r296_t0['set-width'](r4_WIDTH);
            r296_xn$setwidth$9Jrj(r4_WIDTH);
            r296_xn$assignunicode$7Hrq('t');
            r296_include(r4_bMarks);
            r296_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r296_hookx = r296_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r296_turn = r0_mix(r296_center, r296_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r296_smb = (r296_turn - r296_center) * 1.1;
            r296_include(r296_xn$createstroke$7Hrq()['start-from'](r296_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r296_center, r296_smb)['arc-vh-to'](r296_turn, r4_O)['curve-to'](r296_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r296_hookx - r296_turn), r4_O, r296_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r296_include(r296_xn$createstroke$7Hrq()['start-from'](r296_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r296_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t114() {
            var r300_currentGlyph, r300_xn$setwidth$9Jrj, r300_xn$assignunicode$7Hrq, r300_xn$startfrom$1aao, r300_xn$lineto$5sIl, r300_xn$curveto$1aao, r300_xn$cubicto$1aao, r300_xn$putshapes$9Jrj, r300_xn$reverselast$3qIs, r300_include, r300_xn$createstroke$7Hrq, r300_xn$setanchor$9Jrj, r300_xn$dontexport$5sIl, r300_bartop, r300_lowmiddle, r300_barsmooth, _r300_t0, _r300_t1, _r300_t2, _r300_t3;
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
            r300_xn$dontexport$5sIl = function _r300_t3() {
                var _r302_t0, _r302_t1;
                return r300_currentGlyph['dontExport'] = true;
            };
            _r300_t0['gizmo'] = r4_globalTransform;
            _r300_t0['set-width'](r4_WIDTH);
            r300_xn$setwidth$9Jrj(r4_WIDTH);
            r300_xn$dontexport$5sIl();
            r300_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r300_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r300_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r300_include(r300_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r300_include(r300_xn$createstroke$7Hrq()['start-from'](r300_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r300_bartop * 0.45)['arc-vh-to'](r300_barsmooth, r300_bartop)['line-to'](r4_RIGHTSB, r300_bartop)['heads-to'](r4_RIGHTWARD));
            r300_include(r300_xn$createstroke$7Hrq()['start-from'](r300_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t115() {
            var r304_currentGlyph, r304_xn$setwidth$9Jrj, r304_xn$assignunicode$7Hrq, r304_xn$startfrom$1aao, r304_xn$lineto$5sIl, r304_xn$curveto$1aao, r304_xn$cubicto$1aao, r304_xn$putshapes$9Jrj, r304_xn$reverselast$3qIs, r304_include, r304_xn$createstroke$7Hrq, r304_xn$setanchor$9Jrj, r304_xn$dontexport$5sIl, _r304_t0, _r304_t1, _r304_t2, _r304_t3;
            _r304_t0 = this;
            r304_currentGlyph = _r304_t0;
            r304_xn$setwidth$9Jrj = _r304_t0['set-width']['bind'](_r304_t0);
            r304_xn$assignunicode$7Hrq = function _r304_t2(r305_code) {
                var r305_code, _r305_t0, _r305_t1;
                r304_currentGlyph['assign-unicode'](r305_code);
                return r4_unicodeGlyphs[r304_currentGlyph['unicode'][r304_currentGlyph['unicode']['length'] - 1]] = r304_currentGlyph;
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
            r304_xn$dontexport$5sIl = function _r304_t3() {
                var _r306_t0, _r306_t1;
                return r304_currentGlyph['dontExport'] = true;
            };
            _r304_t0['gizmo'] = r4_globalTransform;
            _r304_t0['set-width'](r4_WIDTH);
            r304_xn$setwidth$9Jrj(r4_WIDTH);
            r304_xn$dontexport$5sIl();
            r304_include(r4_glyphs['o.right']);
            r304_include(r304_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t116() {
            var r308_currentGlyph, r308_xn$setwidth$9Jrj, r308_xn$assignunicode$7Hrq, r308_xn$startfrom$1aao, r308_xn$lineto$5sIl, r308_xn$curveto$1aao, r308_xn$cubicto$1aao, r308_xn$putshapes$9Jrj, r308_xn$reverselast$3qIs, r308_include, r308_xn$createstroke$7Hrq, r308_xn$setanchor$9Jrj, r308_xn$dontexport$5sIl, _r308_t0, _r308_t1, _r308_t2, _r308_t3;
            _r308_t0 = this;
            r308_currentGlyph = _r308_t0;
            r308_xn$setwidth$9Jrj = _r308_t0['set-width']['bind'](_r308_t0);
            r308_xn$assignunicode$7Hrq = function _r308_t2(r309_code) {
                var r309_code, _r309_t0, _r309_t1;
                r308_currentGlyph['assign-unicode'](r309_code);
                return r4_unicodeGlyphs[r308_currentGlyph['unicode'][r308_currentGlyph['unicode']['length'] - 1]] = r308_currentGlyph;
            };
            r308_xn$startfrom$1aao = _r308_t0['start-from']['bind'](_r308_t0);
            r308_xn$lineto$5sIl = _r308_t0['line-to']['bind'](_r308_t0);
            r308_xn$curveto$1aao = _r308_t0['curve-to']['bind'](_r308_t0);
            r308_xn$cubicto$1aao = _r308_t0['cubic-to']['bind'](_r308_t0);
            r308_xn$putshapes$9Jrj = _r308_t0['put-shapes']['bind'](_r308_t0);
            r308_xn$reverselast$3qIs = _r308_t0['reverse-last']['bind'](_r308_t0);
            r308_include = _r308_t0['include']['bind'](_r308_t0);
            r308_xn$createstroke$7Hrq = _r308_t0['create-stroke']['bind'](_r308_t0);
            r308_xn$setanchor$9Jrj = _r308_t0['set-anchor']['bind'](_r308_t0);
            r308_xn$dontexport$5sIl = function _r308_t3() {
                var _r310_t0, _r310_t1;
                return r308_currentGlyph['dontExport'] = true;
            };
            _r308_t0['gizmo'] = r4_globalTransform;
            _r308_t0['set-width'](r4_WIDTH);
            r308_xn$setwidth$9Jrj(r4_WIDTH);
            r308_xn$assignunicode$7Hrq('a');
            r308_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r308_include(r4_glyphs['a.italic']);
            } else {
                r308_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t117() {
            var r312_currentGlyph, r312_xn$setwidth$9Jrj, r312_xn$assignunicode$7Hrq, r312_xn$startfrom$1aao, r312_xn$lineto$5sIl, r312_xn$curveto$1aao, r312_xn$cubicto$1aao, r312_xn$putshapes$9Jrj, r312_xn$reverselast$3qIs, r312_include, r312_xn$createstroke$7Hrq, r312_xn$setanchor$9Jrj, r312_xn$dontexport$5sIl, _r312_t0, _r312_t1, _r312_t2, _r312_t3;
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
            r312_xn$dontexport$5sIl = function _r312_t3() {
                var _r314_t0, _r314_t1;
                return r312_currentGlyph['dontExport'] = true;
            };
            _r312_t0['gizmo'] = r4_globalTransform;
            _r312_t0['set-width'](r4_WIDTH);
            r312_xn$setwidth$9Jrj(r4_WIDTH);
            r312_xn$assignunicode$7Hrq('u');
            r312_include(r4_eMarks);
            r312_include(r312_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r312_include(r312_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r312_include(r312_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t118() {
            var r316_currentGlyph, r316_xn$setwidth$9Jrj, r316_xn$assignunicode$7Hrq, r316_xn$startfrom$1aao, r316_xn$lineto$5sIl, r316_xn$curveto$1aao, r316_xn$cubicto$1aao, r316_xn$putshapes$9Jrj, r316_xn$reverselast$3qIs, r316_include, r316_xn$createstroke$7Hrq, r316_xn$setanchor$9Jrj, r316_xn$dontexport$5sIl, _r316_t0, _r316_t1, _r316_t2, _r316_t3;
            _r316_t0 = this;
            r316_currentGlyph = _r316_t0;
            r316_xn$setwidth$9Jrj = _r316_t0['set-width']['bind'](_r316_t0);
            r316_xn$assignunicode$7Hrq = function _r316_t2(r317_code) {
                var r317_code, _r317_t0, _r317_t1;
                r316_currentGlyph['assign-unicode'](r317_code);
                return r4_unicodeGlyphs[r316_currentGlyph['unicode'][r316_currentGlyph['unicode']['length'] - 1]] = r316_currentGlyph;
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
            r316_xn$dontexport$5sIl = function _r316_t3() {
                var _r318_t0, _r318_t1;
                return r316_currentGlyph['dontExport'] = true;
            };
            _r316_t0['gizmo'] = r4_globalTransform;
            _r316_t0['set-width'](r4_WIDTH);
            r316_xn$setwidth$9Jrj(r4_WIDTH);
            r316_xn$assignunicode$7Hrq('n');
            r316_include(r4_eMarks);
            r316_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r316_include(r316_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t119() {
            var r320_currentGlyph, r320_xn$setwidth$9Jrj, r320_xn$assignunicode$7Hrq, r320_xn$startfrom$1aao, r320_xn$lineto$5sIl, r320_xn$curveto$1aao, r320_xn$cubicto$1aao, r320_xn$putshapes$9Jrj, r320_xn$reverselast$3qIs, r320_include, r320_xn$createstroke$7Hrq, r320_xn$setanchor$9Jrj, r320_xn$dontexport$5sIl, _r320_t0, _r320_t1, _r320_t2, _r320_t3;
            _r320_t0 = this;
            r320_currentGlyph = _r320_t0;
            r320_xn$setwidth$9Jrj = _r320_t0['set-width']['bind'](_r320_t0);
            r320_xn$assignunicode$7Hrq = function _r320_t2(r321_code) {
                var r321_code, _r321_t0, _r321_t1;
                r320_currentGlyph['assign-unicode'](r321_code);
                return r4_unicodeGlyphs[r320_currentGlyph['unicode'][r320_currentGlyph['unicode']['length'] - 1]] = r320_currentGlyph;
            };
            r320_xn$startfrom$1aao = _r320_t0['start-from']['bind'](_r320_t0);
            r320_xn$lineto$5sIl = _r320_t0['line-to']['bind'](_r320_t0);
            r320_xn$curveto$1aao = _r320_t0['curve-to']['bind'](_r320_t0);
            r320_xn$cubicto$1aao = _r320_t0['cubic-to']['bind'](_r320_t0);
            r320_xn$putshapes$9Jrj = _r320_t0['put-shapes']['bind'](_r320_t0);
            r320_xn$reverselast$3qIs = _r320_t0['reverse-last']['bind'](_r320_t0);
            r320_include = _r320_t0['include']['bind'](_r320_t0);
            r320_xn$createstroke$7Hrq = _r320_t0['create-stroke']['bind'](_r320_t0);
            r320_xn$setanchor$9Jrj = _r320_t0['set-anchor']['bind'](_r320_t0);
            r320_xn$dontexport$5sIl = function _r320_t3() {
                var _r322_t0, _r322_t1;
                return r320_currentGlyph['dontExport'] = true;
            };
            _r320_t0['gizmo'] = r4_globalTransform;
            _r320_t0['set-width'](r4_WIDTH);
            r320_xn$setwidth$9Jrj(r4_WIDTH);
            r320_xn$assignunicode$7Hrq('h');
            r320_include(r4_bMarks);
            r320_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r320_include(r320_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t120() {
            var r324_currentGlyph, r324_xn$setwidth$9Jrj, r324_xn$assignunicode$7Hrq, r324_xn$startfrom$1aao, r324_xn$lineto$5sIl, r324_xn$curveto$1aao, r324_xn$cubicto$1aao, r324_xn$putshapes$9Jrj, r324_xn$reverselast$3qIs, r324_include, r324_xn$createstroke$7Hrq, r324_xn$setanchor$9Jrj, r324_xn$dontexport$5sIl, r324_sw, r324_m1, r324_m2, _r324_t0, _r324_t1, _r324_t2, _r324_t3;
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
            r324_xn$dontexport$5sIl = function _r324_t3() {
                var _r326_t0, _r326_t1;
                return r324_currentGlyph['dontExport'] = true;
            };
            _r324_t0['gizmo'] = r4_globalTransform;
            _r324_t0['set-width'](r4_WIDTH);
            r324_xn$setwidth$9Jrj(r4_WIDTH);
            r324_xn$assignunicode$7Hrq('m');
            r324_include(r4_eMarks);
            r324_sw = r4_adviceBlackness(3.5);
            r324_m1 = (r4_MIDDLE + r4_SB + r324_sw * 0.25) / 2;
            r324_m2 = r324_m1 + (r4_MIDDLE - r324_sw / 2 - r4_SB);
            r324_include(r324_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r324_sw / 2, 0)['set-width'](0, r324_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r324_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r324_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r324_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r324_sw * 0.4));
            r324_include(r324_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r324_sw - r4_O, 0)['set-width'](0, r324_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r324_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r324_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r324_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r324_sw * 0.4));
            r324_include(r324_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r324_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t121() {
            var r328_currentGlyph, r328_xn$setwidth$9Jrj, r328_xn$assignunicode$7Hrq, r328_xn$startfrom$1aao, r328_xn$lineto$5sIl, r328_xn$curveto$1aao, r328_xn$cubicto$1aao, r328_xn$putshapes$9Jrj, r328_xn$reverselast$3qIs, r328_include, r328_xn$createstroke$7Hrq, r328_xn$setanchor$9Jrj, r328_xn$dontexport$5sIl, _r328_t0, _r328_t1, _r328_t2, _r328_t3;
            _r328_t0 = this;
            r328_currentGlyph = _r328_t0;
            r328_xn$setwidth$9Jrj = _r328_t0['set-width']['bind'](_r328_t0);
            r328_xn$assignunicode$7Hrq = function _r328_t2(r329_code) {
                var r329_code, _r329_t0, _r329_t1;
                r328_currentGlyph['assign-unicode'](r329_code);
                return r4_unicodeGlyphs[r328_currentGlyph['unicode'][r328_currentGlyph['unicode']['length'] - 1]] = r328_currentGlyph;
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
            r328_xn$dontexport$5sIl = function _r328_t3() {
                var _r330_t0, _r330_t1;
                return r328_currentGlyph['dontExport'] = true;
            };
            _r328_t0['gizmo'] = r4_globalTransform;
            _r328_t0['set-width'](r4_WIDTH);
            r328_xn$dontexport$5sIl();
            r328_include(r4_eMarks);
            r328_include(r328_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t122() {
            var r332_currentGlyph, r332_xn$setwidth$9Jrj, r332_xn$assignunicode$7Hrq, r332_xn$startfrom$1aao, r332_xn$lineto$5sIl, r332_xn$curveto$1aao, r332_xn$cubicto$1aao, r332_xn$putshapes$9Jrj, r332_xn$reverselast$3qIs, r332_include, r332_xn$createstroke$7Hrq, r332_xn$setanchor$9Jrj, r332_xn$dontexport$5sIl, _r332_t0, _r332_t1, _r332_t2, _r332_t3;
            _r332_t0 = this;
            r332_currentGlyph = _r332_t0;
            r332_xn$setwidth$9Jrj = _r332_t0['set-width']['bind'](_r332_t0);
            r332_xn$assignunicode$7Hrq = function _r332_t2(r333_code) {
                var r333_code, _r333_t0, _r333_t1;
                r332_currentGlyph['assign-unicode'](r333_code);
                return r4_unicodeGlyphs[r332_currentGlyph['unicode'][r332_currentGlyph['unicode']['length'] - 1]] = r332_currentGlyph;
            };
            r332_xn$startfrom$1aao = _r332_t0['start-from']['bind'](_r332_t0);
            r332_xn$lineto$5sIl = _r332_t0['line-to']['bind'](_r332_t0);
            r332_xn$curveto$1aao = _r332_t0['curve-to']['bind'](_r332_t0);
            r332_xn$cubicto$1aao = _r332_t0['cubic-to']['bind'](_r332_t0);
            r332_xn$putshapes$9Jrj = _r332_t0['put-shapes']['bind'](_r332_t0);
            r332_xn$reverselast$3qIs = _r332_t0['reverse-last']['bind'](_r332_t0);
            r332_include = _r332_t0['include']['bind'](_r332_t0);
            r332_xn$createstroke$7Hrq = _r332_t0['create-stroke']['bind'](_r332_t0);
            r332_xn$setanchor$9Jrj = _r332_t0['set-anchor']['bind'](_r332_t0);
            r332_xn$dontexport$5sIl = function _r332_t3() {
                var _r334_t0, _r334_t1;
                return r332_currentGlyph['dontExport'] = true;
            };
            _r332_t0['gizmo'] = r4_globalTransform;
            _r332_t0['set-width'](r4_WIDTH);
            r332_xn$dontexport$5sIl();
            r332_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r332_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t123() {
            var r336_currentGlyph, r336_xn$setwidth$9Jrj, r336_xn$assignunicode$7Hrq, r336_xn$startfrom$1aao, r336_xn$lineto$5sIl, r336_xn$curveto$1aao, r336_xn$cubicto$1aao, r336_xn$putshapes$9Jrj, r336_xn$reverselast$3qIs, r336_include, r336_xn$createstroke$7Hrq, r336_xn$setanchor$9Jrj, r336_xn$dontexport$5sIl, _r336_t0, _r336_t1, _r336_t2, _r336_t3;
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
            r336_xn$dontexport$5sIl = function _r336_t3() {
                var _r338_t0, _r338_t1;
                return r336_currentGlyph['dontExport'] = true;
            };
            _r336_t0['gizmo'] = r4_globalTransform;
            _r336_t0['set-width'](r4_WIDTH);
            r336_xn$dontexport$5sIl();
            r336_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r336_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t124() {
            var r340_currentGlyph, r340_xn$setwidth$9Jrj, r340_xn$assignunicode$7Hrq, r340_xn$startfrom$1aao, r340_xn$lineto$5sIl, r340_xn$curveto$1aao, r340_xn$cubicto$1aao, r340_xn$putshapes$9Jrj, r340_xn$reverselast$3qIs, r340_include, r340_xn$createstroke$7Hrq, r340_xn$setanchor$9Jrj, r340_xn$dontexport$5sIl, r340_balance, _r340_t0, _r340_t1, _r340_t2, _r340_t3;
            _r340_t0 = this;
            r340_currentGlyph = _r340_t0;
            r340_xn$setwidth$9Jrj = _r340_t0['set-width']['bind'](_r340_t0);
            r340_xn$assignunicode$7Hrq = function _r340_t2(r341_code) {
                var r341_code, _r341_t0, _r341_t1;
                r340_currentGlyph['assign-unicode'](r341_code);
                return r4_unicodeGlyphs[r340_currentGlyph['unicode'][r340_currentGlyph['unicode']['length'] - 1]] = r340_currentGlyph;
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
            r340_xn$dontexport$5sIl = function _r340_t3() {
                var _r342_t0, _r342_t1;
                return r340_currentGlyph['dontExport'] = true;
            };
            _r340_t0['gizmo'] = r4_globalTransform;
            _r340_t0['set-width'](r4_WIDTH);
            r340_xn$dontexport$5sIl();
            r340_include(r4_eMarks);
            r340_balance = r4_ILBALANCE;
            r340_include(r340_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r340_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r340_balance, r4_XH)['heads-to'](r4_UPWARD));
            r340_include(r4_leftwardTopSerif(r4_MIDDLE + r340_balance, r4_XH, r4_LONGJUT - r340_balance));
            r340_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r340_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t125() {
            var r344_currentGlyph, r344_xn$setwidth$9Jrj, r344_xn$assignunicode$7Hrq, r344_xn$startfrom$1aao, r344_xn$lineto$5sIl, r344_xn$curveto$1aao, r344_xn$cubicto$1aao, r344_xn$putshapes$9Jrj, r344_xn$reverselast$3qIs, r344_include, r344_xn$createstroke$7Hrq, r344_xn$setanchor$9Jrj, r344_xn$dontexport$5sIl, _r344_t0, _r344_t1, _r344_t2, _r344_t3;
            _r344_t0 = this;
            r344_currentGlyph = _r344_t0;
            r344_xn$setwidth$9Jrj = _r344_t0['set-width']['bind'](_r344_t0);
            r344_xn$assignunicode$7Hrq = function _r344_t2(r345_code) {
                var r345_code, _r345_t0, _r345_t1;
                r344_currentGlyph['assign-unicode'](r345_code);
                return r4_unicodeGlyphs[r344_currentGlyph['unicode'][r344_currentGlyph['unicode']['length'] - 1]] = r344_currentGlyph;
            };
            r344_xn$startfrom$1aao = _r344_t0['start-from']['bind'](_r344_t0);
            r344_xn$lineto$5sIl = _r344_t0['line-to']['bind'](_r344_t0);
            r344_xn$curveto$1aao = _r344_t0['curve-to']['bind'](_r344_t0);
            r344_xn$cubicto$1aao = _r344_t0['cubic-to']['bind'](_r344_t0);
            r344_xn$putshapes$9Jrj = _r344_t0['put-shapes']['bind'](_r344_t0);
            r344_xn$reverselast$3qIs = _r344_t0['reverse-last']['bind'](_r344_t0);
            r344_include = _r344_t0['include']['bind'](_r344_t0);
            r344_xn$createstroke$7Hrq = _r344_t0['create-stroke']['bind'](_r344_t0);
            r344_xn$setanchor$9Jrj = _r344_t0['set-anchor']['bind'](_r344_t0);
            r344_xn$dontexport$5sIl = function _r344_t3() {
                var _r346_t0, _r346_t1;
                return r344_currentGlyph['dontExport'] = true;
            };
            _r344_t0['gizmo'] = r4_globalTransform;
            _r344_t0['set-width'](r4_WIDTH);
            r344_xn$setwidth$9Jrj(r4_WIDTH);
            r344_xn$assignunicode$7Hrq('i');
            r344_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r344_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t126() {
            var r348_currentGlyph, r348_xn$setwidth$9Jrj, r348_xn$assignunicode$7Hrq, r348_xn$startfrom$1aao, r348_xn$lineto$5sIl, r348_xn$curveto$1aao, r348_xn$cubicto$1aao, r348_xn$putshapes$9Jrj, r348_xn$reverselast$3qIs, r348_include, r348_xn$createstroke$7Hrq, r348_xn$setanchor$9Jrj, r348_xn$dontexport$5sIl, _r348_t0, _r348_t1, _r348_t2, _r348_t3;
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
            r348_xn$dontexport$5sIl = function _r348_t3() {
                var _r350_t0, _r350_t1;
                return r348_currentGlyph['dontExport'] = true;
            };
            _r348_t0['gizmo'] = r4_globalTransform;
            _r348_t0['set-width'](r4_WIDTH);
            r348_xn$dontexport$5sIl();
            r348_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r348_include(r348_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t127() {
            var r352_currentGlyph, r352_xn$setwidth$9Jrj, r352_xn$assignunicode$7Hrq, r352_xn$startfrom$1aao, r352_xn$lineto$5sIl, r352_xn$curveto$1aao, r352_xn$cubicto$1aao, r352_xn$putshapes$9Jrj, r352_xn$reverselast$3qIs, r352_include, r352_xn$createstroke$7Hrq, r352_xn$setanchor$9Jrj, r352_xn$dontexport$5sIl, _r352_t0, _r352_t1, _r352_t2, _r352_t3;
            _r352_t0 = this;
            r352_currentGlyph = _r352_t0;
            r352_xn$setwidth$9Jrj = _r352_t0['set-width']['bind'](_r352_t0);
            r352_xn$assignunicode$7Hrq = function _r352_t2(r353_code) {
                var r353_code, _r353_t0, _r353_t1;
                r352_currentGlyph['assign-unicode'](r353_code);
                return r4_unicodeGlyphs[r352_currentGlyph['unicode'][r352_currentGlyph['unicode']['length'] - 1]] = r352_currentGlyph;
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
            r352_xn$dontexport$5sIl = function _r352_t3() {
                var _r354_t0, _r354_t1;
                return r352_currentGlyph['dontExport'] = true;
            };
            _r352_t0['gizmo'] = r4_globalTransform;
            _r352_t0['set-width'](r4_WIDTH);
            r352_xn$dontexport$5sIl();
            r352_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r352_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t128() {
            var r356_currentGlyph, r356_xn$setwidth$9Jrj, r356_xn$assignunicode$7Hrq, r356_xn$startfrom$1aao, r356_xn$lineto$5sIl, r356_xn$curveto$1aao, r356_xn$cubicto$1aao, r356_xn$putshapes$9Jrj, r356_xn$reverselast$3qIs, r356_include, r356_xn$createstroke$7Hrq, r356_xn$setanchor$9Jrj, r356_xn$dontexport$5sIl, _r356_t0, _r356_t1, _r356_t2, _r356_t3;
            _r356_t0 = this;
            r356_currentGlyph = _r356_t0;
            r356_xn$setwidth$9Jrj = _r356_t0['set-width']['bind'](_r356_t0);
            r356_xn$assignunicode$7Hrq = function _r356_t2(r357_code) {
                var r357_code, _r357_t0, _r357_t1;
                r356_currentGlyph['assign-unicode'](r357_code);
                return r4_unicodeGlyphs[r356_currentGlyph['unicode'][r356_currentGlyph['unicode']['length'] - 1]] = r356_currentGlyph;
            };
            r356_xn$startfrom$1aao = _r356_t0['start-from']['bind'](_r356_t0);
            r356_xn$lineto$5sIl = _r356_t0['line-to']['bind'](_r356_t0);
            r356_xn$curveto$1aao = _r356_t0['curve-to']['bind'](_r356_t0);
            r356_xn$cubicto$1aao = _r356_t0['cubic-to']['bind'](_r356_t0);
            r356_xn$putshapes$9Jrj = _r356_t0['put-shapes']['bind'](_r356_t0);
            r356_xn$reverselast$3qIs = _r356_t0['reverse-last']['bind'](_r356_t0);
            r356_include = _r356_t0['include']['bind'](_r356_t0);
            r356_xn$createstroke$7Hrq = _r356_t0['create-stroke']['bind'](_r356_t0);
            r356_xn$setanchor$9Jrj = _r356_t0['set-anchor']['bind'](_r356_t0);
            r356_xn$dontexport$5sIl = function _r356_t3() {
                var _r358_t0, _r358_t1;
                return r356_currentGlyph['dontExport'] = true;
            };
            _r356_t0['gizmo'] = r4_globalTransform;
            _r356_t0['set-width'](r4_WIDTH);
            r356_xn$setwidth$9Jrj(r4_WIDTH);
            r356_xn$assignunicode$7Hrq('j');
            r356_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r356_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t129() {
            var r360_currentGlyph, r360_xn$setwidth$9Jrj, r360_xn$assignunicode$7Hrq, r360_xn$startfrom$1aao, r360_xn$lineto$5sIl, r360_xn$curveto$1aao, r360_xn$cubicto$1aao, r360_xn$putshapes$9Jrj, r360_xn$reverselast$3qIs, r360_include, r360_xn$createstroke$7Hrq, r360_xn$setanchor$9Jrj, r360_xn$dontexport$5sIl, _r360_t0, _r360_t1, _r360_t2, _r360_t3;
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
            r360_xn$dontexport$5sIl = function _r360_t3() {
                var _r362_t0, _r362_t1;
                return r360_currentGlyph['dontExport'] = true;
            };
            _r360_t0['gizmo'] = r4_globalTransform;
            _r360_t0['set-width'](r4_WIDTH);
            r360_include(r4_bMarks);
            r360_xn$dontexport$5sIl();
            r360_include(r360_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t130() {
            var r364_currentGlyph, r364_xn$setwidth$9Jrj, r364_xn$assignunicode$7Hrq, r364_xn$startfrom$1aao, r364_xn$lineto$5sIl, r364_xn$curveto$1aao, r364_xn$cubicto$1aao, r364_xn$putshapes$9Jrj, r364_xn$reverselast$3qIs, r364_include, r364_xn$createstroke$7Hrq, r364_xn$setanchor$9Jrj, r364_xn$dontexport$5sIl, _r364_t0, _r364_t1, _r364_t2, _r364_t3;
            _r364_t0 = this;
            r364_currentGlyph = _r364_t0;
            r364_xn$setwidth$9Jrj = _r364_t0['set-width']['bind'](_r364_t0);
            r364_xn$assignunicode$7Hrq = function _r364_t2(r365_code) {
                var r365_code, _r365_t0, _r365_t1;
                r364_currentGlyph['assign-unicode'](r365_code);
                return r4_unicodeGlyphs[r364_currentGlyph['unicode'][r364_currentGlyph['unicode']['length'] - 1]] = r364_currentGlyph;
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
            r364_xn$dontexport$5sIl = function _r364_t3() {
                var _r366_t0, _r366_t1;
                return r364_currentGlyph['dontExport'] = true;
            };
            _r364_t0['gizmo'] = r4_globalTransform;
            _r364_t0['set-width'](r4_WIDTH);
            r364_include(r4_bMarks);
            r364_xn$dontexport$5sIl();
            r364_include(r4_glyphs['l.straight']);
            r364_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t131() {
            var r368_currentGlyph, r368_xn$setwidth$9Jrj, r368_xn$assignunicode$7Hrq, r368_xn$startfrom$1aao, r368_xn$lineto$5sIl, r368_xn$curveto$1aao, r368_xn$cubicto$1aao, r368_xn$putshapes$9Jrj, r368_xn$reverselast$3qIs, r368_include, r368_xn$createstroke$7Hrq, r368_xn$setanchor$9Jrj, r368_xn$dontexport$5sIl, _r368_t0, _r368_t1, _r368_t2, _r368_t3;
            _r368_t0 = this;
            r368_currentGlyph = _r368_t0;
            r368_xn$setwidth$9Jrj = _r368_t0['set-width']['bind'](_r368_t0);
            r368_xn$assignunicode$7Hrq = function _r368_t2(r369_code) {
                var r369_code, _r369_t0, _r369_t1;
                r368_currentGlyph['assign-unicode'](r369_code);
                return r4_unicodeGlyphs[r368_currentGlyph['unicode'][r368_currentGlyph['unicode']['length'] - 1]] = r368_currentGlyph;
            };
            r368_xn$startfrom$1aao = _r368_t0['start-from']['bind'](_r368_t0);
            r368_xn$lineto$5sIl = _r368_t0['line-to']['bind'](_r368_t0);
            r368_xn$curveto$1aao = _r368_t0['curve-to']['bind'](_r368_t0);
            r368_xn$cubicto$1aao = _r368_t0['cubic-to']['bind'](_r368_t0);
            r368_xn$putshapes$9Jrj = _r368_t0['put-shapes']['bind'](_r368_t0);
            r368_xn$reverselast$3qIs = _r368_t0['reverse-last']['bind'](_r368_t0);
            r368_include = _r368_t0['include']['bind'](_r368_t0);
            r368_xn$createstroke$7Hrq = _r368_t0['create-stroke']['bind'](_r368_t0);
            r368_xn$setanchor$9Jrj = _r368_t0['set-anchor']['bind'](_r368_t0);
            r368_xn$dontexport$5sIl = function _r368_t3() {
                var _r370_t0, _r370_t1;
                return r368_currentGlyph['dontExport'] = true;
            };
            _r368_t0['gizmo'] = r4_globalTransform;
            _r368_t0['set-width'](r4_WIDTH);
            r368_include(r4_bMarks);
            r368_xn$dontexport$5sIl();
            r368_include(r4_glyphs['l.hooky']);
            r368_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t132() {
            var r372_currentGlyph, r372_xn$setwidth$9Jrj, r372_xn$assignunicode$7Hrq, r372_xn$startfrom$1aao, r372_xn$lineto$5sIl, r372_xn$curveto$1aao, r372_xn$cubicto$1aao, r372_xn$putshapes$9Jrj, r372_xn$reverselast$3qIs, r372_include, r372_xn$createstroke$7Hrq, r372_xn$setanchor$9Jrj, r372_xn$dontexport$5sIl, r372_balance, _r372_t0, _r372_t1, _r372_t2, _r372_t3;
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
            r372_xn$dontexport$5sIl = function _r372_t3() {
                var _r374_t0, _r374_t1;
                return r372_currentGlyph['dontExport'] = true;
            };
            _r372_t0['gizmo'] = r4_globalTransform;
            _r372_t0['set-width'](r4_WIDTH);
            r372_include(r4_bMarks);
            r372_xn$dontexport$5sIl();
            r372_balance = r4_ILBALANCE;
            r372_include(r372_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r372_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r372_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r372_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r372_balance, r4_CAP, r4_LONGJUT - r372_balance));
            r372_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t133() {
            var r376_currentGlyph, r376_xn$setwidth$9Jrj, r376_xn$assignunicode$7Hrq, r376_xn$startfrom$1aao, r376_xn$lineto$5sIl, r376_xn$curveto$1aao, r376_xn$cubicto$1aao, r376_xn$putshapes$9Jrj, r376_xn$reverselast$3qIs, r376_include, r376_xn$createstroke$7Hrq, r376_xn$setanchor$9Jrj, r376_xn$dontexport$5sIl, r376_TURN, _r376_t0, _r376_t1, _r376_t2, _r376_t3;
            _r376_t0 = this;
            r376_currentGlyph = _r376_t0;
            r376_xn$setwidth$9Jrj = _r376_t0['set-width']['bind'](_r376_t0);
            r376_xn$assignunicode$7Hrq = function _r376_t2(r377_code) {
                var r377_code, _r377_t0, _r377_t1;
                r376_currentGlyph['assign-unicode'](r377_code);
                return r4_unicodeGlyphs[r376_currentGlyph['unicode'][r376_currentGlyph['unicode']['length'] - 1]] = r376_currentGlyph;
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
            r376_xn$dontexport$5sIl = function _r376_t3() {
                var _r378_t0, _r378_t1;
                return r376_currentGlyph['dontExport'] = true;
            };
            _r376_t0['gizmo'] = r4_globalTransform;
            _r376_t0['set-width'](r4_WIDTH);
            r376_xn$setwidth$9Jrj(r4_WIDTH);
            r376_xn$assignunicode$7Hrq('x');
            r376_include(r4_eMarks);
            r376_TURN = r4_XH * 0.1;
            r376_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r376_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t134() {
            var r380_currentGlyph, r380_xn$setwidth$9Jrj, r380_xn$assignunicode$7Hrq, r380_xn$startfrom$1aao, r380_xn$lineto$5sIl, r380_xn$curveto$1aao, r380_xn$cubicto$1aao, r380_xn$putshapes$9Jrj, r380_xn$reverselast$3qIs, r380_include, r380_xn$createstroke$7Hrq, r380_xn$setanchor$9Jrj, r380_xn$dontexport$5sIl, r380_TURN, _r380_t0, _r380_t1, _r380_t2, _r380_t3;
            _r380_t0 = this;
            r380_currentGlyph = _r380_t0;
            r380_xn$setwidth$9Jrj = _r380_t0['set-width']['bind'](_r380_t0);
            r380_xn$assignunicode$7Hrq = function _r380_t2(r381_code) {
                var r381_code, _r381_t0, _r381_t1;
                r380_currentGlyph['assign-unicode'](r381_code);
                return r4_unicodeGlyphs[r380_currentGlyph['unicode'][r380_currentGlyph['unicode']['length'] - 1]] = r380_currentGlyph;
            };
            r380_xn$startfrom$1aao = _r380_t0['start-from']['bind'](_r380_t0);
            r380_xn$lineto$5sIl = _r380_t0['line-to']['bind'](_r380_t0);
            r380_xn$curveto$1aao = _r380_t0['curve-to']['bind'](_r380_t0);
            r380_xn$cubicto$1aao = _r380_t0['cubic-to']['bind'](_r380_t0);
            r380_xn$putshapes$9Jrj = _r380_t0['put-shapes']['bind'](_r380_t0);
            r380_xn$reverselast$3qIs = _r380_t0['reverse-last']['bind'](_r380_t0);
            r380_include = _r380_t0['include']['bind'](_r380_t0);
            r380_xn$createstroke$7Hrq = _r380_t0['create-stroke']['bind'](_r380_t0);
            r380_xn$setanchor$9Jrj = _r380_t0['set-anchor']['bind'](_r380_t0);
            r380_xn$dontexport$5sIl = function _r380_t3() {
                var _r382_t0, _r382_t1;
                return r380_currentGlyph['dontExport'] = true;
            };
            _r380_t0['gizmo'] = r4_globalTransform;
            _r380_t0['set-width'](r4_WIDTH);
            r380_xn$setwidth$9Jrj(r4_WIDTH);
            r380_xn$assignunicode$7Hrq('v');
            r380_include(r4_eMarks);
            r380_TURN = r4_XH * 0.9;
            r380_include(r380_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r380_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r380_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r380_include(r380_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r380_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r380_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r380_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r380_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r380_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t135() {
            var r384_currentGlyph, r384_xn$setwidth$9Jrj, r384_xn$assignunicode$7Hrq, r384_xn$startfrom$1aao, r384_xn$lineto$5sIl, r384_xn$curveto$1aao, r384_xn$cubicto$1aao, r384_xn$putshapes$9Jrj, r384_xn$reverselast$3qIs, r384_include, r384_xn$createstroke$7Hrq, r384_xn$setanchor$9Jrj, r384_xn$dontexport$5sIl, r384_TURN, r384_turn2, r384_wheight, r384_bottomStroke, r384_m1, r384_m2, _r384_t0, _r384_t1, _r384_t2, _r384_t3;
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
            r384_xn$dontexport$5sIl = function _r384_t3() {
                var _r386_t0, _r386_t1;
                return r384_currentGlyph['dontExport'] = true;
            };
            _r384_t0['gizmo'] = r4_globalTransform;
            _r384_t0['set-width'](r4_WIDTH);
            r384_xn$setwidth$9Jrj(r4_WIDTH);
            r384_xn$assignunicode$7Hrq('w');
            r384_include(r4_eMarks);
            r384_TURN = r4_XH * 0.75;
            r384_turn2 = r4_XH * 0.59;
            r384_wheight = r4_XH * 0.6;
            r384_bottomStroke = r4_adviceBlackness(5.2);
            r384_m1 = r4_WIDTH * 0.325;
            r384_m2 = r4_WIDTH * 0.675;
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r384_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r384_TURN, r384_m1 - r384_bottomStroke / 2, 0)['set-width'](r384_bottomStroke, 0));
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r384_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r384_TURN, r384_m2 + r384_bottomStroke / 2, 0)['set-width'](0, r384_bottomStroke));
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r384_bottomStroke / 2, r384_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r384_bottomStroke)['line-to'](r4_MIDDLE + r384_bottomStroke / 2, r384_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r384_bottomStroke / 2, (1 - 0.1) * r384_turn2, r384_m1 + r384_bottomStroke / 2, 0)['set-width'](0, r384_bottomStroke));
            r384_include(r384_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r384_bottomStroke / 2, r384_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r384_bottomStroke, 0)['line-to'](r4_MIDDLE - r384_bottomStroke / 2, r384_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r384_bottomStroke / 2, (1 - 0.1) * r384_turn2, r384_m2 - r384_bottomStroke / 2, 0)['set-width'](r384_bottomStroke, 0));
            r384_xn$startfrom$1aao(r384_m1 + r384_bottomStroke / 2, 0);
            r384_xn$lineto$5sIl(r384_m1 - r384_bottomStroke / 2, 0);
            r384_xn$lineto$5sIl(r384_m1, r384_bottomStroke);
            r384_xn$startfrom$1aao(r384_m2 + r384_bottomStroke / 2, 0);
            r384_xn$lineto$5sIl(r384_m2 - r384_bottomStroke / 2, 0);
            r384_xn$lineto$5sIl(r384_m2, r384_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t136() {
            var r388_currentGlyph, r388_xn$setwidth$9Jrj, r388_xn$assignunicode$7Hrq, r388_xn$startfrom$1aao, r388_xn$lineto$5sIl, r388_xn$curveto$1aao, r388_xn$cubicto$1aao, r388_xn$putshapes$9Jrj, r388_xn$reverselast$3qIs, r388_include, r388_xn$createstroke$7Hrq, r388_xn$setanchor$9Jrj, r388_xn$dontexport$5sIl, r388_xbottom, r388_turnp, r388_xb, r388_yb, _r388_t0, _r388_t1, _r388_t2, _r388_t3;
            _r388_t0 = this;
            r388_currentGlyph = _r388_t0;
            r388_xn$setwidth$9Jrj = _r388_t0['set-width']['bind'](_r388_t0);
            r388_xn$assignunicode$7Hrq = function _r388_t2(r389_code) {
                var r389_code, _r389_t0, _r389_t1;
                r388_currentGlyph['assign-unicode'](r389_code);
                return r4_unicodeGlyphs[r388_currentGlyph['unicode'][r388_currentGlyph['unicode']['length'] - 1]] = r388_currentGlyph;
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
            r388_xn$dontexport$5sIl = function _r388_t3() {
                var _r390_t0, _r390_t1;
                return r388_currentGlyph['dontExport'] = true;
            };
            _r388_t0['gizmo'] = r4_globalTransform;
            _r388_t0['set-width'](r4_WIDTH);
            r388_xn$setwidth$9Jrj(r4_WIDTH);
            r388_xn$assignunicode$7Hrq('y');
            r388_include(r4_pMarks);
            r388_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r388_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r388_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r388_yb = r0_mix(0, r4_XH, 0.05 * r388_turnp);
            r388_include(r4_xStrand(r388_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r388_include(r4_halfXStrand(r4_SB, r4_XH, r388_xb, r388_yb, 0.1 * r388_turnp, 0.4, 0.14 * r388_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t137() {
            var r392_currentGlyph, r392_xn$setwidth$9Jrj, r392_xn$assignunicode$7Hrq, r392_xn$startfrom$1aao, r392_xn$lineto$5sIl, r392_xn$curveto$1aao, r392_xn$cubicto$1aao, r392_xn$putshapes$9Jrj, r392_xn$reverselast$3qIs, r392_include, r392_xn$createstroke$7Hrq, r392_xn$setanchor$9Jrj, r392_xn$dontexport$5sIl, r392_cor, _r392_t0, _r392_t1, _r392_t2, _r392_t3;
            _r392_t0 = this;
            r392_currentGlyph = _r392_t0;
            r392_xn$setwidth$9Jrj = _r392_t0['set-width']['bind'](_r392_t0);
            r392_xn$assignunicode$7Hrq = function _r392_t2(r393_code) {
                var r393_code, _r393_t0, _r393_t1;
                r392_currentGlyph['assign-unicode'](r393_code);
                return r4_unicodeGlyphs[r392_currentGlyph['unicode'][r392_currentGlyph['unicode']['length'] - 1]] = r392_currentGlyph;
            };
            r392_xn$startfrom$1aao = _r392_t0['start-from']['bind'](_r392_t0);
            r392_xn$lineto$5sIl = _r392_t0['line-to']['bind'](_r392_t0);
            r392_xn$curveto$1aao = _r392_t0['curve-to']['bind'](_r392_t0);
            r392_xn$cubicto$1aao = _r392_t0['cubic-to']['bind'](_r392_t0);
            r392_xn$putshapes$9Jrj = _r392_t0['put-shapes']['bind'](_r392_t0);
            r392_xn$reverselast$3qIs = _r392_t0['reverse-last']['bind'](_r392_t0);
            r392_include = _r392_t0['include']['bind'](_r392_t0);
            r392_xn$createstroke$7Hrq = _r392_t0['create-stroke']['bind'](_r392_t0);
            r392_xn$setanchor$9Jrj = _r392_t0['set-anchor']['bind'](_r392_t0);
            r392_xn$dontexport$5sIl = function _r392_t3() {
                var _r394_t0, _r394_t1;
                return r392_currentGlyph['dontExport'] = true;
            };
            _r392_t0['gizmo'] = r4_globalTransform;
            _r392_t0['set-width'](r4_WIDTH);
            r392_xn$setwidth$9Jrj(r4_WIDTH);
            r392_xn$assignunicode$7Hrq('z');
            r392_include(r4_eMarks);
            r392_cor = 1.2;
            r392_include(r392_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r392_include(r392_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r392_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r392_xn$lineto$5sIl(r4_SB + r4_STROKE * r392_cor, r4_STROKE);
            r392_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r392_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r392_cor, r4_XH - r4_STROKE);
            r392_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t138() {
            var r396_currentGlyph, r396_xn$setwidth$9Jrj, r396_xn$assignunicode$7Hrq, r396_xn$startfrom$1aao, r396_xn$lineto$5sIl, r396_xn$curveto$1aao, r396_xn$cubicto$1aao, r396_xn$putshapes$9Jrj, r396_xn$reverselast$3qIs, r396_include, r396_xn$createstroke$7Hrq, r396_xn$setanchor$9Jrj, r396_xn$dontexport$5sIl, r396_TURN, r396_rturn, r396_right, r396_attach, r396_attach2, r396_fine, _r396_t0, _r396_t1, _r396_t2, _r396_t3;
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
            r396_xn$dontexport$5sIl = function _r396_t3() {
                var _r398_t0, _r398_t1;
                return r396_currentGlyph['dontExport'] = true;
            };
            _r396_t0['gizmo'] = r4_globalTransform;
            _r396_t0['set-width'](r4_WIDTH);
            r396_xn$setwidth$9Jrj(r4_WIDTH);
            r396_xn$assignunicode$7Hrq('k');
            r396_include(r4_bMarks);
            r396_TURN = r4_XH * 0.99;
            r396_rturn = r4_XH * 0.1;
            r396_right = r4_RIGHTSB - r4_O;
            r396_attach = r4_XH * 0.4;
            r396_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r396_fine = r4_adviceBlackness(3.5);
            r396_include(r396_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r396_include(r396_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r396_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r396_TURN, r4_SB + r4_STROKE, r396_attach)['set-width'](0, r396_fine));
            r396_include(r396_xn$createstroke$7Hrq()['start-from'](r396_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r396_right - r4_HALFSTROKE, r396_rturn + 0.05 * (r4_XH - r396_rturn), r396_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r396_fine / 2, r396_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t139() {
            var r400_currentGlyph, r400_xn$setwidth$9Jrj, r400_xn$assignunicode$7Hrq, r400_xn$startfrom$1aao, r400_xn$lineto$5sIl, r400_xn$curveto$1aao, r400_xn$cubicto$1aao, r400_xn$putshapes$9Jrj, r400_xn$reverselast$3qIs, r400_include, r400_xn$createstroke$7Hrq, r400_xn$setanchor$9Jrj, r400_xn$dontexport$5sIl, _r400_t0, _r400_t1, _r400_t2, _r400_t3;
            _r400_t0 = this;
            r400_currentGlyph = _r400_t0;
            r400_xn$setwidth$9Jrj = _r400_t0['set-width']['bind'](_r400_t0);
            r400_xn$assignunicode$7Hrq = function _r400_t2(r401_code) {
                var r401_code, _r401_t0, _r401_t1;
                r400_currentGlyph['assign-unicode'](r401_code);
                return r4_unicodeGlyphs[r400_currentGlyph['unicode'][r400_currentGlyph['unicode']['length'] - 1]] = r400_currentGlyph;
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
            r400_xn$dontexport$5sIl = function _r400_t3() {
                var _r402_t0, _r402_t1;
                return r400_currentGlyph['dontExport'] = true;
            };
            _r400_t0['gizmo'] = r4_globalTransform;
            _r400_t0['set-width'](r4_WIDTH);
            r400_xn$setwidth$9Jrj(r4_WIDTH);
            r400_xn$assignunicode$7Hrq('s');
            r400_include(r4_eMarks);
            r400_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r400_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r400_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t140() {
            var r404_currentGlyph, r404_xn$setwidth$9Jrj, r404_xn$assignunicode$7Hrq, r404_xn$startfrom$1aao, r404_xn$lineto$5sIl, r404_xn$curveto$1aao, r404_xn$cubicto$1aao, r404_xn$putshapes$9Jrj, r404_xn$reverselast$3qIs, r404_include, r404_xn$createstroke$7Hrq, r404_xn$setanchor$9Jrj, r404_xn$dontexport$5sIl, r404_slope, r404_expand, r404_coexpand, r404_rhookx, r404_rmiddle, _r404_t0, _r404_t1, _r404_t2, _r404_t3;
            _r404_t0 = this;
            r404_currentGlyph = _r404_t0;
            r404_xn$setwidth$9Jrj = _r404_t0['set-width']['bind'](_r404_t0);
            r404_xn$assignunicode$7Hrq = function _r404_t2(r405_code) {
                var r405_code, _r405_t0, _r405_t1;
                r404_currentGlyph['assign-unicode'](r405_code);
                return r4_unicodeGlyphs[r404_currentGlyph['unicode'][r404_currentGlyph['unicode']['length'] - 1]] = r404_currentGlyph;
            };
            r404_xn$startfrom$1aao = _r404_t0['start-from']['bind'](_r404_t0);
            r404_xn$lineto$5sIl = _r404_t0['line-to']['bind'](_r404_t0);
            r404_xn$curveto$1aao = _r404_t0['curve-to']['bind'](_r404_t0);
            r404_xn$cubicto$1aao = _r404_t0['cubic-to']['bind'](_r404_t0);
            r404_xn$putshapes$9Jrj = _r404_t0['put-shapes']['bind'](_r404_t0);
            r404_xn$reverselast$3qIs = _r404_t0['reverse-last']['bind'](_r404_t0);
            r404_include = _r404_t0['include']['bind'](_r404_t0);
            r404_xn$createstroke$7Hrq = _r404_t0['create-stroke']['bind'](_r404_t0);
            r404_xn$setanchor$9Jrj = _r404_t0['set-anchor']['bind'](_r404_t0);
            r404_xn$dontexport$5sIl = function _r404_t3() {
                var _r406_t0, _r406_t1;
                return r404_currentGlyph['dontExport'] = true;
            };
            _r404_t0['gizmo'] = r4_globalTransform;
            _r404_t0['set-width'](r4_WIDTH);
            r404_xn$setwidth$9Jrj(r4_WIDTH);
            r404_xn$assignunicode$7Hrq('r');
            r404_include(r4_eMarks);
            r404_slope = 0.015;
            r404_expand = 0.175;
            r404_coexpand = (1 - r404_expand) / 2;
            r404_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r404_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r404_rhookx - r4_HALFSTROKE, 0.5);
            r404_include(r404_xn$createstroke$7Hrq()['start-from'](r404_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r404_rmiddle, r404_rhookx, r4_KAPPA_AHOOK), r4_XO, r404_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r404_include(r404_xn$createstroke$7Hrq()['start-from'](r404_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r404_include(r404_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('fbar', function _r4_t141() {
            var r408_currentGlyph, r408_xn$setwidth$9Jrj, r408_xn$assignunicode$7Hrq, r408_xn$startfrom$1aao, r408_xn$lineto$5sIl, r408_xn$curveto$1aao, r408_xn$cubicto$1aao, r408_xn$putshapes$9Jrj, r408_xn$reverselast$3qIs, r408_include, r408_xn$createstroke$7Hrq, r408_xn$setanchor$9Jrj, r408_xn$dontexport$5sIl, _r408_t0, _r408_t1, _r408_t2, _r408_t3;
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
            r408_xn$dontexport$5sIl = function _r408_t3() {
                var _r410_t0, _r410_t1;
                return r408_currentGlyph['dontExport'] = true;
            };
            _r408_t0['gizmo'] = r4_globalTransform;
            _r408_t0['set-width'](r4_WIDTH);
            r408_xn$dontexport$5sIl();
            r408_include(r408_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('longs.upright', function _r4_t142() {
            var r412_currentGlyph, r412_xn$setwidth$9Jrj, r412_xn$assignunicode$7Hrq, r412_xn$startfrom$1aao, r412_xn$lineto$5sIl, r412_xn$curveto$1aao, r412_xn$cubicto$1aao, r412_xn$putshapes$9Jrj, r412_xn$reverselast$3qIs, r412_include, r412_xn$createstroke$7Hrq, r412_xn$setanchor$9Jrj, r412_xn$dontexport$5sIl, _r412_t0, _r412_t1, _r412_t2, _r412_t3;
            _r412_t0 = this;
            r412_currentGlyph = _r412_t0;
            r412_xn$setwidth$9Jrj = _r412_t0['set-width']['bind'](_r412_t0);
            r412_xn$assignunicode$7Hrq = function _r412_t2(r413_code) {
                var r413_code, _r413_t0, _r413_t1;
                r412_currentGlyph['assign-unicode'](r413_code);
                return r4_unicodeGlyphs[r412_currentGlyph['unicode'][r412_currentGlyph['unicode']['length'] - 1]] = r412_currentGlyph;
            };
            r412_xn$startfrom$1aao = _r412_t0['start-from']['bind'](_r412_t0);
            r412_xn$lineto$5sIl = _r412_t0['line-to']['bind'](_r412_t0);
            r412_xn$curveto$1aao = _r412_t0['curve-to']['bind'](_r412_t0);
            r412_xn$cubicto$1aao = _r412_t0['cubic-to']['bind'](_r412_t0);
            r412_xn$putshapes$9Jrj = _r412_t0['put-shapes']['bind'](_r412_t0);
            r412_xn$reverselast$3qIs = _r412_t0['reverse-last']['bind'](_r412_t0);
            r412_include = _r412_t0['include']['bind'](_r412_t0);
            r412_xn$createstroke$7Hrq = _r412_t0['create-stroke']['bind'](_r412_t0);
            r412_xn$setanchor$9Jrj = _r412_t0['set-anchor']['bind'](_r412_t0);
            r412_xn$dontexport$5sIl = function _r412_t3() {
                var _r414_t0, _r414_t1;
                return r412_currentGlyph['dontExport'] = true;
            };
            _r412_t0['gizmo'] = r4_globalTransform;
            _r412_t0['set-width'](r4_WIDTH);
            r412_xn$setwidth$9Jrj(r4_WIDTH);
            r412_xn$dontexport$5sIl();
            r412_include(r4_bMarks);
            r412_include(r412_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_eshHook = function _r4_t143(r415_attach) {
            var r415_attach, _r415_t0, _r415_t1, _r415_t2;
            return function _r415_t2() {
                var r417_currentGlyph, r417_xn$setwidth$9Jrj, r417_xn$assignunicode$7Hrq, r417_xn$startfrom$1aao, r417_xn$lineto$5sIl, r417_xn$curveto$1aao, r417_xn$cubicto$1aao, r417_xn$putshapes$9Jrj, r417_xn$reverselast$3qIs, r417_include, r417_xn$createstroke$7Hrq, r417_xn$setanchor$9Jrj, r417_xn$dontexport$5sIl, _r417_t0, _r417_t1, _r417_t2, _r417_t3;
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
                r417_xn$dontexport$5sIl = function _r417_t3() {
                    var _r419_t0, _r419_t1;
                    return r417_currentGlyph['dontExport'] = true;
                };
                _r417_t0['gizmo'] = r4_globalTransform;
                _r417_t0['set-width'](r4_WIDTH);
                r417_include(r417_xn$createstroke$7Hrq()['start-from'](r415_attach['x'] - r4_SHOOK * 2, r415_attach['y'] + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r415_attach['x'], r415_attach['y'])['line-to'](r415_attach['x'], r415_attach['y'] + r4_STROKE));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('longs.italic', function _r4_t144() {
            var r421_currentGlyph, r421_xn$setwidth$9Jrj, r421_xn$assignunicode$7Hrq, r421_xn$startfrom$1aao, r421_xn$lineto$5sIl, r421_xn$curveto$1aao, r421_xn$cubicto$1aao, r421_xn$putshapes$9Jrj, r421_xn$reverselast$3qIs, r421_include, r421_xn$createstroke$7Hrq, r421_xn$setanchor$9Jrj, r421_xn$dontexport$5sIl, _r421_t0, _r421_t1, _r421_t2, _r421_t3;
            _r421_t0 = this;
            r421_currentGlyph = _r421_t0;
            r421_xn$setwidth$9Jrj = _r421_t0['set-width']['bind'](_r421_t0);
            r421_xn$assignunicode$7Hrq = function _r421_t2(r422_code) {
                var r422_code, _r422_t0, _r422_t1;
                r421_currentGlyph['assign-unicode'](r422_code);
                return r4_unicodeGlyphs[r421_currentGlyph['unicode'][r421_currentGlyph['unicode']['length'] - 1]] = r421_currentGlyph;
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
            r421_xn$dontexport$5sIl = function _r421_t3() {
                var _r423_t0, _r423_t1;
                return r421_currentGlyph['dontExport'] = true;
            };
            _r421_t0['gizmo'] = r4_globalTransform;
            _r421_t0['set-width'](r4_WIDTH);
            r421_xn$setwidth$9Jrj(r4_WIDTH);
            r421_xn$dontexport$5sIl();
            r421_include(r4_ifMarks);
            r421_include(r421_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('longs', function _r4_t145() {
            var r425_currentGlyph, r425_xn$setwidth$9Jrj, r425_xn$assignunicode$7Hrq, r425_xn$startfrom$1aao, r425_xn$lineto$5sIl, r425_xn$curveto$1aao, r425_xn$cubicto$1aao, r425_xn$putshapes$9Jrj, r425_xn$reverselast$3qIs, r425_include, r425_xn$createstroke$7Hrq, r425_xn$setanchor$9Jrj, r425_xn$dontexport$5sIl, _r425_t0, _r425_t1, _r425_t2, _r425_t3;
            _r425_t0 = this;
            r425_currentGlyph = _r425_t0;
            r425_xn$setwidth$9Jrj = _r425_t0['set-width']['bind'](_r425_t0);
            r425_xn$assignunicode$7Hrq = function _r425_t2(r426_code) {
                var r426_code, _r426_t0, _r426_t1;
                r425_currentGlyph['assign-unicode'](r426_code);
                return r4_unicodeGlyphs[r425_currentGlyph['unicode'][r425_currentGlyph['unicode']['length'] - 1]] = r425_currentGlyph;
            };
            r425_xn$startfrom$1aao = _r425_t0['start-from']['bind'](_r425_t0);
            r425_xn$lineto$5sIl = _r425_t0['line-to']['bind'](_r425_t0);
            r425_xn$curveto$1aao = _r425_t0['curve-to']['bind'](_r425_t0);
            r425_xn$cubicto$1aao = _r425_t0['cubic-to']['bind'](_r425_t0);
            r425_xn$putshapes$9Jrj = _r425_t0['put-shapes']['bind'](_r425_t0);
            r425_xn$reverselast$3qIs = _r425_t0['reverse-last']['bind'](_r425_t0);
            r425_include = _r425_t0['include']['bind'](_r425_t0);
            r425_xn$createstroke$7Hrq = _r425_t0['create-stroke']['bind'](_r425_t0);
            r425_xn$setanchor$9Jrj = _r425_t0['set-anchor']['bind'](_r425_t0);
            r425_xn$dontexport$5sIl = function _r425_t3() {
                var _r427_t0, _r427_t1;
                return r425_currentGlyph['dontExport'] = true;
            };
            _r425_t0['gizmo'] = r4_globalTransform;
            _r425_t0['set-width'](r4_WIDTH);
            r425_xn$setwidth$9Jrj(r4_WIDTH);
            r425_xn$assignunicode$7Hrq(383);
            if (r4_para['italicangle'] > 0) {
                r425_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            } else {
                r425_include(r4_glyphs['longs.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t146() {
            var r429_currentGlyph, r429_xn$setwidth$9Jrj, r429_xn$assignunicode$7Hrq, r429_xn$startfrom$1aao, r429_xn$lineto$5sIl, r429_xn$curveto$1aao, r429_xn$cubicto$1aao, r429_xn$putshapes$9Jrj, r429_xn$reverselast$3qIs, r429_include, r429_xn$createstroke$7Hrq, r429_xn$setanchor$9Jrj, r429_xn$dontexport$5sIl, _r429_t0, _r429_t1, _r429_t2, _r429_t3;
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
            r429_xn$dontexport$5sIl = function _r429_t3() {
                var _r431_t0, _r431_t1;
                return r429_currentGlyph['dontExport'] = true;
            };
            _r429_t0['gizmo'] = r4_globalTransform;
            _r429_t0['set-width'](r4_WIDTH);
            r429_xn$setwidth$9Jrj(r4_WIDTH);
            r429_xn$assignunicode$7Hrq('f');
            r429_include(r4_glyphs['longs'], r4_AS_BASE);
            r429_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t147() {
            var r433_currentGlyph, r433_xn$setwidth$9Jrj, r433_xn$assignunicode$7Hrq, r433_xn$startfrom$1aao, r433_xn$lineto$5sIl, r433_xn$curveto$1aao, r433_xn$cubicto$1aao, r433_xn$putshapes$9Jrj, r433_xn$reverselast$3qIs, r433_include, r433_xn$createstroke$7Hrq, r433_xn$setanchor$9Jrj, r433_xn$dontexport$5sIl, r433_sw, r433_eleft, r433_turn, _r433_t0, _r433_t1, _r433_t2, _r433_t3;
            _r433_t0 = this;
            r433_currentGlyph = _r433_t0;
            r433_xn$setwidth$9Jrj = _r433_t0['set-width']['bind'](_r433_t0);
            r433_xn$assignunicode$7Hrq = function _r433_t2(r434_code) {
                var r434_code, _r434_t0, _r434_t1;
                r433_currentGlyph['assign-unicode'](r434_code);
                return r4_unicodeGlyphs[r433_currentGlyph['unicode'][r433_currentGlyph['unicode']['length'] - 1]] = r433_currentGlyph;
            };
            r433_xn$startfrom$1aao = _r433_t0['start-from']['bind'](_r433_t0);
            r433_xn$lineto$5sIl = _r433_t0['line-to']['bind'](_r433_t0);
            r433_xn$curveto$1aao = _r433_t0['curve-to']['bind'](_r433_t0);
            r433_xn$cubicto$1aao = _r433_t0['cubic-to']['bind'](_r433_t0);
            r433_xn$putshapes$9Jrj = _r433_t0['put-shapes']['bind'](_r433_t0);
            r433_xn$reverselast$3qIs = _r433_t0['reverse-last']['bind'](_r433_t0);
            r433_include = _r433_t0['include']['bind'](_r433_t0);
            r433_xn$createstroke$7Hrq = _r433_t0['create-stroke']['bind'](_r433_t0);
            r433_xn$setanchor$9Jrj = _r433_t0['set-anchor']['bind'](_r433_t0);
            r433_xn$dontexport$5sIl = function _r433_t3() {
                var _r435_t0, _r435_t1;
                return r433_currentGlyph['dontExport'] = true;
            };
            _r433_t0['gizmo'] = r4_globalTransform;
            _r433_t0['set-width'](r4_WIDTH);
            r433_xn$setwidth$9Jrj(r4_WIDTH);
            r433_xn$assignunicode$7Hrq(198);
            r433_include(r4_capitalMarks);
            r433_sw = r4_adviceBlackness(3.5);
            r433_eleft = r4_MIDDLE - r433_sw * 0.25;
            r433_turn = r4_XH * 0.1;
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r433_sw)['line-to'](r4_SB, r433_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r433_turn, r4_CAP, 0.27), r433_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r433_sw * 0.8));
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r4_SB + r433_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r433_sw)['line-to'](r433_eleft + r433_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r433_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r433_sw)['line-to'](r433_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r433_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r433_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r433_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r433_include(r433_xn$createstroke$7Hrq()['start-from'](r433_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t148() {
            var r437_currentGlyph, r437_xn$setwidth$9Jrj, r437_xn$assignunicode$7Hrq, r437_xn$startfrom$1aao, r437_xn$lineto$5sIl, r437_xn$curveto$1aao, r437_xn$cubicto$1aao, r437_xn$putshapes$9Jrj, r437_xn$reverselast$3qIs, r437_include, r437_xn$createstroke$7Hrq, r437_xn$setanchor$9Jrj, r437_xn$dontexport$5sIl, r437_sw, r437_eleft, _r437_t0, _r437_t1, _r437_t2, _r437_t3;
            _r437_t0 = this;
            r437_currentGlyph = _r437_t0;
            r437_xn$setwidth$9Jrj = _r437_t0['set-width']['bind'](_r437_t0);
            r437_xn$assignunicode$7Hrq = function _r437_t2(r438_code) {
                var r438_code, _r438_t0, _r438_t1;
                r437_currentGlyph['assign-unicode'](r438_code);
                return r4_unicodeGlyphs[r437_currentGlyph['unicode'][r437_currentGlyph['unicode']['length'] - 1]] = r437_currentGlyph;
            };
            r437_xn$startfrom$1aao = _r437_t0['start-from']['bind'](_r437_t0);
            r437_xn$lineto$5sIl = _r437_t0['line-to']['bind'](_r437_t0);
            r437_xn$curveto$1aao = _r437_t0['curve-to']['bind'](_r437_t0);
            r437_xn$cubicto$1aao = _r437_t0['cubic-to']['bind'](_r437_t0);
            r437_xn$putshapes$9Jrj = _r437_t0['put-shapes']['bind'](_r437_t0);
            r437_xn$reverselast$3qIs = _r437_t0['reverse-last']['bind'](_r437_t0);
            r437_include = _r437_t0['include']['bind'](_r437_t0);
            r437_xn$createstroke$7Hrq = _r437_t0['create-stroke']['bind'](_r437_t0);
            r437_xn$setanchor$9Jrj = _r437_t0['set-anchor']['bind'](_r437_t0);
            r437_xn$dontexport$5sIl = function _r437_t3() {
                var _r439_t0, _r439_t1;
                return r437_currentGlyph['dontExport'] = true;
            };
            _r437_t0['gizmo'] = r4_globalTransform;
            _r437_t0['set-width'](r4_WIDTH);
            r437_xn$setwidth$9Jrj(r4_WIDTH);
            r437_xn$assignunicode$7Hrq(338);
            r437_include(r4_capitalMarks);
            r437_sw = r4_adviceBlackness(3.5);
            r437_eleft = r4_MIDDLE;
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r437_eleft + 1, r4_CAP)['set-width'](r437_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r437_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r437_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r437_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r437_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r437_sw)['line-to'](r437_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r437_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r437_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r437_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r437_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t149() {
            var r441_currentGlyph, r441_xn$setwidth$9Jrj, r441_xn$assignunicode$7Hrq, r441_xn$startfrom$1aao, r441_xn$lineto$5sIl, r441_xn$curveto$1aao, r441_xn$cubicto$1aao, r441_xn$putshapes$9Jrj, r441_xn$reverselast$3qIs, r441_include, r441_xn$createstroke$7Hrq, r441_xn$setanchor$9Jrj, r441_xn$dontexport$5sIl, r441_sw, r441_eLeft, r441_eMiddle, r441_barbottom, r441_hookx, r441_eHookMiddle, r441_sma, r441_smb, _r441_t0, _r441_t1, _r441_t2, _r441_t3;
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
            r441_xn$dontexport$5sIl = function _r441_t3() {
                var _r443_t0, _r443_t1;
                return r441_currentGlyph['dontExport'] = true;
            };
            _r441_t0['gizmo'] = r4_globalTransform;
            _r441_t0['set-width'](r4_WIDTH);
            r441_xn$dontexport$5sIl();
            r441_sw = r4_adviceBlackness(3.5);
            r441_eLeft = r4_MIDDLE - r441_sw / 2 * r4_ITALICCOR;
            r441_eMiddle = r0_mix(r441_eLeft, r4_RIGHTSB - r4_O, 0.5) - r441_sw * r4_globalTransform['yx'];
            r441_barbottom = r4_XH * r4_EBARPOS;
            r441_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r441_eHookMiddle = r0_mix(r441_eLeft, r441_hookx, 0.5);
            r441_sma = r4_SMALLSMOOTHA * 0.6;
            r441_smb = r4_SMALLSMOOTHB * 0.6;
            r441_include(r441_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r441_barbottom)['heads-to'](r4_UPWARD)['set-width'](r441_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r441_smb)['arc-vh-to'](r441_eMiddle, r4_XO)['arc-hv-to'](r441_eLeft, r4_XH - r441_sma)['line-to'](r441_eLeft, r441_smb)['arc-vh-to'](r441_eHookMiddle, r4_O)['curve-to'](r0_mix(r441_eHookMiddle, r441_hookx, r4_KAPPA_HOOK), r4_O, r441_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r441_include(r441_xn$createstroke$7Hrq()['start-from'](r441_eLeft + r441_sw / 2, r441_barbottom)['set-width'](r441_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r441_sw / 2, r441_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t150() {
            var r445_currentGlyph, r445_xn$setwidth$9Jrj, r445_xn$assignunicode$7Hrq, r445_xn$startfrom$1aao, r445_xn$lineto$5sIl, r445_xn$curveto$1aao, r445_xn$cubicto$1aao, r445_xn$putshapes$9Jrj, r445_xn$reverselast$3qIs, r445_include, r445_xn$createstroke$7Hrq, r445_xn$setanchor$9Jrj, r445_xn$dontexport$5sIl, r445_sw, r445_bartop, r445_abarRight, r445_m1, r445_lowmiddle, r445_barsmooth, r445_sma, r445_smb, _r445_t0, _r445_t1, _r445_t2, _r445_t3;
            _r445_t0 = this;
            r445_currentGlyph = _r445_t0;
            r445_xn$setwidth$9Jrj = _r445_t0['set-width']['bind'](_r445_t0);
            r445_xn$assignunicode$7Hrq = function _r445_t2(r446_code) {
                var r446_code, _r446_t0, _r446_t1;
                r445_currentGlyph['assign-unicode'](r446_code);
                return r4_unicodeGlyphs[r445_currentGlyph['unicode'][r445_currentGlyph['unicode']['length'] - 1]] = r445_currentGlyph;
            };
            r445_xn$startfrom$1aao = _r445_t0['start-from']['bind'](_r445_t0);
            r445_xn$lineto$5sIl = _r445_t0['line-to']['bind'](_r445_t0);
            r445_xn$curveto$1aao = _r445_t0['curve-to']['bind'](_r445_t0);
            r445_xn$cubicto$1aao = _r445_t0['cubic-to']['bind'](_r445_t0);
            r445_xn$putshapes$9Jrj = _r445_t0['put-shapes']['bind'](_r445_t0);
            r445_xn$reverselast$3qIs = _r445_t0['reverse-last']['bind'](_r445_t0);
            r445_include = _r445_t0['include']['bind'](_r445_t0);
            r445_xn$createstroke$7Hrq = _r445_t0['create-stroke']['bind'](_r445_t0);
            r445_xn$setanchor$9Jrj = _r445_t0['set-anchor']['bind'](_r445_t0);
            r445_xn$dontexport$5sIl = function _r445_t3() {
                var _r447_t0, _r447_t1;
                return r445_currentGlyph['dontExport'] = true;
            };
            _r445_t0['gizmo'] = r4_globalTransform;
            _r445_t0['set-width'](r4_WIDTH);
            r445_xn$dontexport$5sIl();
            r445_sw = r4_adviceBlackness(3.5);
            r445_bartop = r4_XH * r4_BARPOS + r445_sw;
            r445_abarRight = r4_MIDDLE + r445_sw / 2 * r4_ITALICCOR;
            r445_m1 = r0_mix(r4_SB + r4_OXHOOK, r445_abarRight, 0.5);
            r445_lowmiddle = r0_mix(r4_SB + r445_sw, r445_abarRight - r445_sw, 0.5) + r445_sw * r4_globalTransform['yx'];
            r445_barsmooth = r0_mix(r4_SB, r445_abarRight, 0.6);
            r445_sma = r4_SMALLSMOOTHA * 0.6;
            r445_smb = r4_SMALLSMOOTHB * 0.6;
            r445_include(r445_xn$createstroke$7Hrq()['start-from'](r445_abarRight, r4_XH - r445_sma)['set-width'](r445_sw, 0)['arc-vh-to'](r445_m1, r4_XO)['curve-to'](r0_mix(r445_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r445_include(r445_xn$createstroke$7Hrq()['start-from'](r445_abarRight, r445_smb)['set-width'](0, r445_sw)['arc-vh-to'](r445_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r445_bartop, r445_smb / (r445_sma + r445_smb)))['arc-vh-to'](r445_barsmooth, r445_bartop)['line-to'](r445_abarRight, r445_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t151() {
            var r449_currentGlyph, r449_xn$setwidth$9Jrj, r449_xn$assignunicode$7Hrq, r449_xn$startfrom$1aao, r449_xn$lineto$5sIl, r449_xn$curveto$1aao, r449_xn$cubicto$1aao, r449_xn$putshapes$9Jrj, r449_xn$reverselast$3qIs, r449_include, r449_xn$createstroke$7Hrq, r449_xn$setanchor$9Jrj, r449_xn$dontexport$5sIl, r449_sw, r449_abarRight, r449_m1, r449_sma, r449_smb, _r449_t0, _r449_t1, _r449_t2, _r449_t3;
            _r449_t0 = this;
            r449_currentGlyph = _r449_t0;
            r449_xn$setwidth$9Jrj = _r449_t0['set-width']['bind'](_r449_t0);
            r449_xn$assignunicode$7Hrq = function _r449_t2(r450_code) {
                var r450_code, _r450_t0, _r450_t1;
                r449_currentGlyph['assign-unicode'](r450_code);
                return r4_unicodeGlyphs[r449_currentGlyph['unicode'][r449_currentGlyph['unicode']['length'] - 1]] = r449_currentGlyph;
            };
            r449_xn$startfrom$1aao = _r449_t0['start-from']['bind'](_r449_t0);
            r449_xn$lineto$5sIl = _r449_t0['line-to']['bind'](_r449_t0);
            r449_xn$curveto$1aao = _r449_t0['curve-to']['bind'](_r449_t0);
            r449_xn$cubicto$1aao = _r449_t0['cubic-to']['bind'](_r449_t0);
            r449_xn$putshapes$9Jrj = _r449_t0['put-shapes']['bind'](_r449_t0);
            r449_xn$reverselast$3qIs = _r449_t0['reverse-last']['bind'](_r449_t0);
            r449_include = _r449_t0['include']['bind'](_r449_t0);
            r449_xn$createstroke$7Hrq = _r449_t0['create-stroke']['bind'](_r449_t0);
            r449_xn$setanchor$9Jrj = _r449_t0['set-anchor']['bind'](_r449_t0);
            r449_xn$dontexport$5sIl = function _r449_t3() {
                var _r451_t0, _r451_t1;
                return r449_currentGlyph['dontExport'] = true;
            };
            _r449_t0['gizmo'] = r4_globalTransform;
            _r449_t0['set-width'](r4_WIDTH);
            r449_xn$dontexport$5sIl();
            r449_sw = r4_adviceBlackness(3.5);
            r449_abarRight = r4_MIDDLE + r449_sw / 2 * r4_ITALICCOR;
            r449_m1 = r0_mix(r4_SB + r4_O, r449_abarRight, 0.5);
            r449_sma = r4_SMALLSMOOTHA * 0.6;
            r449_smb = r4_SMALLSMOOTHB * 0.6;
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r449_abarRight, r449_smb)['set-width'](0, r449_sw)['arc-vh-to'](r449_m1 + r449_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r449_smb)['line-to'](r4_SB + r4_O, r4_XH - r449_sma)['arc-vh-to'](r449_m1 - r449_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r449_abarRight, r4_XH - r449_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t152() {
            var r453_currentGlyph, r453_xn$setwidth$9Jrj, r453_xn$assignunicode$7Hrq, r453_xn$startfrom$1aao, r453_xn$lineto$5sIl, r453_xn$curveto$1aao, r453_xn$cubicto$1aao, r453_xn$putshapes$9Jrj, r453_xn$reverselast$3qIs, r453_include, r453_xn$createstroke$7Hrq, r453_xn$setanchor$9Jrj, r453_xn$dontexport$5sIl, _r453_t0, _r453_t1, _r453_t2, _r453_t3;
            _r453_t0 = this;
            r453_currentGlyph = _r453_t0;
            r453_xn$setwidth$9Jrj = _r453_t0['set-width']['bind'](_r453_t0);
            r453_xn$assignunicode$7Hrq = function _r453_t2(r454_code) {
                var r454_code, _r454_t0, _r454_t1;
                r453_currentGlyph['assign-unicode'](r454_code);
                return r4_unicodeGlyphs[r453_currentGlyph['unicode'][r453_currentGlyph['unicode']['length'] - 1]] = r453_currentGlyph;
            };
            r453_xn$startfrom$1aao = _r453_t0['start-from']['bind'](_r453_t0);
            r453_xn$lineto$5sIl = _r453_t0['line-to']['bind'](_r453_t0);
            r453_xn$curveto$1aao = _r453_t0['curve-to']['bind'](_r453_t0);
            r453_xn$cubicto$1aao = _r453_t0['cubic-to']['bind'](_r453_t0);
            r453_xn$putshapes$9Jrj = _r453_t0['put-shapes']['bind'](_r453_t0);
            r453_xn$reverselast$3qIs = _r453_t0['reverse-last']['bind'](_r453_t0);
            r453_include = _r453_t0['include']['bind'](_r453_t0);
            r453_xn$createstroke$7Hrq = _r453_t0['create-stroke']['bind'](_r453_t0);
            r453_xn$setanchor$9Jrj = _r453_t0['set-anchor']['bind'](_r453_t0);
            r453_xn$dontexport$5sIl = function _r453_t3() {
                var _r455_t0, _r455_t1;
                return r453_currentGlyph['dontExport'] = true;
            };
            _r453_t0['gizmo'] = r4_globalTransform;
            _r453_t0['set-width'](r4_WIDTH);
            r453_xn$setwidth$9Jrj(r4_WIDTH);
            r453_xn$assignunicode$7Hrq(230);
            r453_include(r4_eMarks);
            r453_include(r4_glyphs['ae-epart']);
            r453_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t153() {
            var r457_currentGlyph, r457_xn$setwidth$9Jrj, r457_xn$assignunicode$7Hrq, r457_xn$startfrom$1aao, r457_xn$lineto$5sIl, r457_xn$curveto$1aao, r457_xn$cubicto$1aao, r457_xn$putshapes$9Jrj, r457_xn$reverselast$3qIs, r457_include, r457_xn$createstroke$7Hrq, r457_xn$setanchor$9Jrj, r457_xn$dontexport$5sIl, _r457_t0, _r457_t1, _r457_t2, _r457_t3;
            _r457_t0 = this;
            r457_currentGlyph = _r457_t0;
            r457_xn$setwidth$9Jrj = _r457_t0['set-width']['bind'](_r457_t0);
            r457_xn$assignunicode$7Hrq = function _r457_t2(r458_code) {
                var r458_code, _r458_t0, _r458_t1;
                r457_currentGlyph['assign-unicode'](r458_code);
                return r4_unicodeGlyphs[r457_currentGlyph['unicode'][r457_currentGlyph['unicode']['length'] - 1]] = r457_currentGlyph;
            };
            r457_xn$startfrom$1aao = _r457_t0['start-from']['bind'](_r457_t0);
            r457_xn$lineto$5sIl = _r457_t0['line-to']['bind'](_r457_t0);
            r457_xn$curveto$1aao = _r457_t0['curve-to']['bind'](_r457_t0);
            r457_xn$cubicto$1aao = _r457_t0['cubic-to']['bind'](_r457_t0);
            r457_xn$putshapes$9Jrj = _r457_t0['put-shapes']['bind'](_r457_t0);
            r457_xn$reverselast$3qIs = _r457_t0['reverse-last']['bind'](_r457_t0);
            r457_include = _r457_t0['include']['bind'](_r457_t0);
            r457_xn$createstroke$7Hrq = _r457_t0['create-stroke']['bind'](_r457_t0);
            r457_xn$setanchor$9Jrj = _r457_t0['set-anchor']['bind'](_r457_t0);
            r457_xn$dontexport$5sIl = function _r457_t3() {
                var _r459_t0, _r459_t1;
                return r457_currentGlyph['dontExport'] = true;
            };
            _r457_t0['gizmo'] = r4_globalTransform;
            _r457_t0['set-width'](r4_WIDTH);
            r457_xn$setwidth$9Jrj(r4_WIDTH);
            r457_xn$assignunicode$7Hrq(339);
            r457_include(r4_eMarks);
            r457_include(r4_glyphs['ae-epart']);
            r457_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t154() {
            var r461_currentGlyph, r461_xn$setwidth$9Jrj, r461_xn$assignunicode$7Hrq, r461_xn$startfrom$1aao, r461_xn$lineto$5sIl, r461_xn$curveto$1aao, r461_xn$cubicto$1aao, r461_xn$putshapes$9Jrj, r461_xn$reverselast$3qIs, r461_include, r461_xn$createstroke$7Hrq, r461_xn$setanchor$9Jrj, r461_xn$dontexport$5sIl, _r461_t0, _r461_t1, _r461_t2, _r461_t3;
            _r461_t0 = this;
            r461_currentGlyph = _r461_t0;
            r461_xn$setwidth$9Jrj = _r461_t0['set-width']['bind'](_r461_t0);
            r461_xn$assignunicode$7Hrq = function _r461_t2(r462_code) {
                var r462_code, _r462_t0, _r462_t1;
                r461_currentGlyph['assign-unicode'](r462_code);
                return r4_unicodeGlyphs[r461_currentGlyph['unicode'][r461_currentGlyph['unicode']['length'] - 1]] = r461_currentGlyph;
            };
            r461_xn$startfrom$1aao = _r461_t0['start-from']['bind'](_r461_t0);
            r461_xn$lineto$5sIl = _r461_t0['line-to']['bind'](_r461_t0);
            r461_xn$curveto$1aao = _r461_t0['curve-to']['bind'](_r461_t0);
            r461_xn$cubicto$1aao = _r461_t0['cubic-to']['bind'](_r461_t0);
            r461_xn$putshapes$9Jrj = _r461_t0['put-shapes']['bind'](_r461_t0);
            r461_xn$reverselast$3qIs = _r461_t0['reverse-last']['bind'](_r461_t0);
            r461_include = _r461_t0['include']['bind'](_r461_t0);
            r461_xn$createstroke$7Hrq = _r461_t0['create-stroke']['bind'](_r461_t0);
            r461_xn$setanchor$9Jrj = _r461_t0['set-anchor']['bind'](_r461_t0);
            r461_xn$dontexport$5sIl = function _r461_t3() {
                var _r463_t0, _r463_t1;
                return r461_currentGlyph['dontExport'] = true;
            };
            _r461_t0['gizmo'] = r4_globalTransform;
            _r461_t0['set-width'](r4_WIDTH);
            r461_xn$assignunicode$7Hrq(208);
            r461_include(r4_glyphs['D'], r4_AS_BASE);
            r461_include(r461_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.55), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t155() {
            var r465_currentGlyph, r465_xn$setwidth$9Jrj, r465_xn$assignunicode$7Hrq, r465_xn$startfrom$1aao, r465_xn$lineto$5sIl, r465_xn$curveto$1aao, r465_xn$cubicto$1aao, r465_xn$putshapes$9Jrj, r465_xn$reverselast$3qIs, r465_include, r465_xn$createstroke$7Hrq, r465_xn$setanchor$9Jrj, r465_xn$dontexport$5sIl, _r465_t0, _r465_t1, _r465_t2, _r465_t3;
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
            r465_xn$dontexport$5sIl = function _r465_t3() {
                var _r467_t0, _r467_t1;
                return r465_currentGlyph['dontExport'] = true;
            };
            _r465_t0['gizmo'] = r4_globalTransform;
            _r465_t0['set-width'](r4_WIDTH);
            r465_xn$assignunicode$7Hrq(272);
            r465_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t156() {
            var r469_currentGlyph, r469_xn$setwidth$9Jrj, r469_xn$assignunicode$7Hrq, r469_xn$startfrom$1aao, r469_xn$lineto$5sIl, r469_xn$curveto$1aao, r469_xn$cubicto$1aao, r469_xn$putshapes$9Jrj, r469_xn$reverselast$3qIs, r469_include, r469_xn$createstroke$7Hrq, r469_xn$setanchor$9Jrj, r469_xn$dontexport$5sIl, r469_ymiddlea, r469_sw, _r469_t0, _r469_t1, _r469_t2, _r469_t3;
            _r469_t0 = this;
            r469_currentGlyph = _r469_t0;
            r469_xn$setwidth$9Jrj = _r469_t0['set-width']['bind'](_r469_t0);
            r469_xn$assignunicode$7Hrq = function _r469_t2(r470_code) {
                var r470_code, _r470_t0, _r470_t1;
                r469_currentGlyph['assign-unicode'](r470_code);
                return r4_unicodeGlyphs[r469_currentGlyph['unicode'][r469_currentGlyph['unicode']['length'] - 1]] = r469_currentGlyph;
            };
            r469_xn$startfrom$1aao = _r469_t0['start-from']['bind'](_r469_t0);
            r469_xn$lineto$5sIl = _r469_t0['line-to']['bind'](_r469_t0);
            r469_xn$curveto$1aao = _r469_t0['curve-to']['bind'](_r469_t0);
            r469_xn$cubicto$1aao = _r469_t0['cubic-to']['bind'](_r469_t0);
            r469_xn$putshapes$9Jrj = _r469_t0['put-shapes']['bind'](_r469_t0);
            r469_xn$reverselast$3qIs = _r469_t0['reverse-last']['bind'](_r469_t0);
            r469_include = _r469_t0['include']['bind'](_r469_t0);
            r469_xn$createstroke$7Hrq = _r469_t0['create-stroke']['bind'](_r469_t0);
            r469_xn$setanchor$9Jrj = _r469_t0['set-anchor']['bind'](_r469_t0);
            r469_xn$dontexport$5sIl = function _r469_t3() {
                var _r471_t0, _r471_t1;
                return r469_currentGlyph['dontExport'] = true;
            };
            _r469_t0['gizmo'] = r4_globalTransform;
            _r469_t0['set-width'](r4_WIDTH);
            r469_xn$setwidth$9Jrj(r4_WIDTH);
            r469_xn$assignunicode$7Hrq(240);
            r469_include(r4_bMarks);
            r469_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r469_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r469_include(r469_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r469_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r469_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r469_sw = 0.5 * r4_adviceBlackness(4);
            r469_include(r469_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, -0.1))['set-width'](r469_sw, r469_sw)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.3)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t157() {
            var r473_currentGlyph, r473_xn$setwidth$9Jrj, r473_xn$assignunicode$7Hrq, r473_xn$startfrom$1aao, r473_xn$lineto$5sIl, r473_xn$curveto$1aao, r473_xn$cubicto$1aao, r473_xn$putshapes$9Jrj, r473_xn$reverselast$3qIs, r473_include, r473_xn$createstroke$7Hrq, r473_xn$setanchor$9Jrj, r473_xn$dontexport$5sIl, r473_sw, _r473_t0, _r473_t1, _r473_t2, _r473_t3;
            _r473_t0 = this;
            r473_currentGlyph = _r473_t0;
            r473_xn$setwidth$9Jrj = _r473_t0['set-width']['bind'](_r473_t0);
            r473_xn$assignunicode$7Hrq = function _r473_t2(r474_code) {
                var r474_code, _r474_t0, _r474_t1;
                r473_currentGlyph['assign-unicode'](r474_code);
                return r4_unicodeGlyphs[r473_currentGlyph['unicode'][r473_currentGlyph['unicode']['length'] - 1]] = r473_currentGlyph;
            };
            r473_xn$startfrom$1aao = _r473_t0['start-from']['bind'](_r473_t0);
            r473_xn$lineto$5sIl = _r473_t0['line-to']['bind'](_r473_t0);
            r473_xn$curveto$1aao = _r473_t0['curve-to']['bind'](_r473_t0);
            r473_xn$cubicto$1aao = _r473_t0['cubic-to']['bind'](_r473_t0);
            r473_xn$putshapes$9Jrj = _r473_t0['put-shapes']['bind'](_r473_t0);
            r473_xn$reverselast$3qIs = _r473_t0['reverse-last']['bind'](_r473_t0);
            r473_include = _r473_t0['include']['bind'](_r473_t0);
            r473_xn$createstroke$7Hrq = _r473_t0['create-stroke']['bind'](_r473_t0);
            r473_xn$setanchor$9Jrj = _r473_t0['set-anchor']['bind'](_r473_t0);
            r473_xn$dontexport$5sIl = function _r473_t3() {
                var _r475_t0, _r475_t1;
                return r473_currentGlyph['dontExport'] = true;
            };
            _r473_t0['gizmo'] = r4_globalTransform;
            _r473_t0['set-width'](r4_WIDTH);
            r473_xn$assignunicode$7Hrq(273);
            r473_include(r4_glyphs['d'], r4_AS_BASE);
            r473_sw = 0.5 * r4_adviceBlackness(5);
            r473_include(r473_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.5), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r473_sw, r473_sw)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t158() {
            var r477_currentGlyph, r477_xn$setwidth$9Jrj, r477_xn$assignunicode$7Hrq, r477_xn$startfrom$1aao, r477_xn$lineto$5sIl, r477_xn$curveto$1aao, r477_xn$cubicto$1aao, r477_xn$putshapes$9Jrj, r477_xn$reverselast$3qIs, r477_include, r477_xn$createstroke$7Hrq, r477_xn$setanchor$9Jrj, r477_xn$dontexport$5sIl, r477_fine, _r477_t0, _r477_t1, _r477_t2, _r477_t3;
            _r477_t0 = this;
            r477_currentGlyph = _r477_t0;
            r477_xn$setwidth$9Jrj = _r477_t0['set-width']['bind'](_r477_t0);
            r477_xn$assignunicode$7Hrq = function _r477_t2(r478_code) {
                var r478_code, _r478_t0, _r478_t1;
                r477_currentGlyph['assign-unicode'](r478_code);
                return r4_unicodeGlyphs[r477_currentGlyph['unicode'][r477_currentGlyph['unicode']['length'] - 1]] = r477_currentGlyph;
            };
            r477_xn$startfrom$1aao = _r477_t0['start-from']['bind'](_r477_t0);
            r477_xn$lineto$5sIl = _r477_t0['line-to']['bind'](_r477_t0);
            r477_xn$curveto$1aao = _r477_t0['curve-to']['bind'](_r477_t0);
            r477_xn$cubicto$1aao = _r477_t0['cubic-to']['bind'](_r477_t0);
            r477_xn$putshapes$9Jrj = _r477_t0['put-shapes']['bind'](_r477_t0);
            r477_xn$reverselast$3qIs = _r477_t0['reverse-last']['bind'](_r477_t0);
            r477_include = _r477_t0['include']['bind'](_r477_t0);
            r477_xn$createstroke$7Hrq = _r477_t0['create-stroke']['bind'](_r477_t0);
            r477_xn$setanchor$9Jrj = _r477_t0['set-anchor']['bind'](_r477_t0);
            r477_xn$dontexport$5sIl = function _r477_t3() {
                var _r479_t0, _r479_t1;
                return r477_currentGlyph['dontExport'] = true;
            };
            _r477_t0['gizmo'] = r4_globalTransform;
            _r477_t0['set-width'](r4_WIDTH);
            r477_xn$assignunicode$7Hrq(216);
            r477_fine = r4_adviceBlackness(10);
            r477_include(r4_glyphs['O'], r4_AS_BASE);
            r477_include(r477_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r477_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r477_fine, r477_fine)['line-to'](r4_RIGHTSB - r4_O - r477_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t159() {
            var r481_currentGlyph, r481_xn$setwidth$9Jrj, r481_xn$assignunicode$7Hrq, r481_xn$startfrom$1aao, r481_xn$lineto$5sIl, r481_xn$curveto$1aao, r481_xn$cubicto$1aao, r481_xn$putshapes$9Jrj, r481_xn$reverselast$3qIs, r481_include, r481_xn$createstroke$7Hrq, r481_xn$setanchor$9Jrj, r481_xn$dontexport$5sIl, r481_fine, _r481_t0, _r481_t1, _r481_t2, _r481_t3;
            _r481_t0 = this;
            r481_currentGlyph = _r481_t0;
            r481_xn$setwidth$9Jrj = _r481_t0['set-width']['bind'](_r481_t0);
            r481_xn$assignunicode$7Hrq = function _r481_t2(r482_code) {
                var r482_code, _r482_t0, _r482_t1;
                r481_currentGlyph['assign-unicode'](r482_code);
                return r4_unicodeGlyphs[r481_currentGlyph['unicode'][r481_currentGlyph['unicode']['length'] - 1]] = r481_currentGlyph;
            };
            r481_xn$startfrom$1aao = _r481_t0['start-from']['bind'](_r481_t0);
            r481_xn$lineto$5sIl = _r481_t0['line-to']['bind'](_r481_t0);
            r481_xn$curveto$1aao = _r481_t0['curve-to']['bind'](_r481_t0);
            r481_xn$cubicto$1aao = _r481_t0['cubic-to']['bind'](_r481_t0);
            r481_xn$putshapes$9Jrj = _r481_t0['put-shapes']['bind'](_r481_t0);
            r481_xn$reverselast$3qIs = _r481_t0['reverse-last']['bind'](_r481_t0);
            r481_include = _r481_t0['include']['bind'](_r481_t0);
            r481_xn$createstroke$7Hrq = _r481_t0['create-stroke']['bind'](_r481_t0);
            r481_xn$setanchor$9Jrj = _r481_t0['set-anchor']['bind'](_r481_t0);
            r481_xn$dontexport$5sIl = function _r481_t3() {
                var _r483_t0, _r483_t1;
                return r481_currentGlyph['dontExport'] = true;
            };
            _r481_t0['gizmo'] = r4_globalTransform;
            _r481_t0['set-width'](r4_WIDTH);
            r481_xn$assignunicode$7Hrq(248);
            r481_fine = r4_adviceBlackness(10);
            r481_include(r4_glyphs['o'], r4_AS_BASE);
            r481_include(r481_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r481_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r481_fine, r481_fine)['line-to'](r4_RIGHTSB - r4_O - r481_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t160() {
            var r485_currentGlyph, r485_xn$setwidth$9Jrj, r485_xn$assignunicode$7Hrq, r485_xn$startfrom$1aao, r485_xn$lineto$5sIl, r485_xn$curveto$1aao, r485_xn$cubicto$1aao, r485_xn$putshapes$9Jrj, r485_xn$reverselast$3qIs, r485_include, r485_xn$createstroke$7Hrq, r485_xn$setanchor$9Jrj, r485_xn$dontexport$5sIl, r485_bowlTop, r485_bowlBottom, r485_bkappa, r485_turn, r485_turnRadius, _r485_t0, _r485_t1, _r485_t2, _r485_t3;
            _r485_t0 = this;
            r485_currentGlyph = _r485_t0;
            r485_xn$setwidth$9Jrj = _r485_t0['set-width']['bind'](_r485_t0);
            r485_xn$assignunicode$7Hrq = function _r485_t2(r486_code) {
                var r486_code, _r486_t0, _r486_t1;
                r485_currentGlyph['assign-unicode'](r486_code);
                return r4_unicodeGlyphs[r485_currentGlyph['unicode'][r485_currentGlyph['unicode']['length'] - 1]] = r485_currentGlyph;
            };
            r485_xn$startfrom$1aao = _r485_t0['start-from']['bind'](_r485_t0);
            r485_xn$lineto$5sIl = _r485_t0['line-to']['bind'](_r485_t0);
            r485_xn$curveto$1aao = _r485_t0['curve-to']['bind'](_r485_t0);
            r485_xn$cubicto$1aao = _r485_t0['cubic-to']['bind'](_r485_t0);
            r485_xn$putshapes$9Jrj = _r485_t0['put-shapes']['bind'](_r485_t0);
            r485_xn$reverselast$3qIs = _r485_t0['reverse-last']['bind'](_r485_t0);
            r485_include = _r485_t0['include']['bind'](_r485_t0);
            r485_xn$createstroke$7Hrq = _r485_t0['create-stroke']['bind'](_r485_t0);
            r485_xn$setanchor$9Jrj = _r485_t0['set-anchor']['bind'](_r485_t0);
            r485_xn$dontexport$5sIl = function _r485_t3() {
                var _r487_t0, _r487_t1;
                return r485_currentGlyph['dontExport'] = true;
            };
            _r485_t0['gizmo'] = r4_globalTransform;
            _r485_t0['set-width'](r4_WIDTH);
            r485_xn$setwidth$9Jrj(r4_WIDTH);
            r485_xn$assignunicode$7Hrq(222);
            r485_include(r4_capitalMarks);
            r485_bowlTop = r4_CAP * 0.77;
            r485_bowlBottom = r4_CAP * 0.23;
            r485_bkappa = r4_COKAPPA - 0.2;
            r485_turn = r0_mix(r485_bowlTop, r485_bowlBottom, 0.5);
            r485_turnRadius = (r485_bowlTop - r485_bowlBottom) / 2;
            r485_include(r485_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r485_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r485_turnRadius, r485_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r485_turn)['arc-vh-to'](r4_RIGHTSB - r485_turnRadius, r485_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r485_bowlBottom)['heads-to'](r4_LEFTWARD));
            r485_include(r485_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t161() {
            var r489_currentGlyph, r489_xn$setwidth$9Jrj, r489_xn$assignunicode$7Hrq, r489_xn$startfrom$1aao, r489_xn$lineto$5sIl, r489_xn$curveto$1aao, r489_xn$cubicto$1aao, r489_xn$putshapes$9Jrj, r489_xn$reverselast$3qIs, r489_include, r489_xn$createstroke$7Hrq, r489_xn$setanchor$9Jrj, r489_xn$dontexport$5sIl, _r489_t0, _r489_t1, _r489_t2, _r489_t3;
            _r489_t0 = this;
            r489_currentGlyph = _r489_t0;
            r489_xn$setwidth$9Jrj = _r489_t0['set-width']['bind'](_r489_t0);
            r489_xn$assignunicode$7Hrq = function _r489_t2(r490_code) {
                var r490_code, _r490_t0, _r490_t1;
                r489_currentGlyph['assign-unicode'](r490_code);
                return r4_unicodeGlyphs[r489_currentGlyph['unicode'][r489_currentGlyph['unicode']['length'] - 1]] = r489_currentGlyph;
            };
            r489_xn$startfrom$1aao = _r489_t0['start-from']['bind'](_r489_t0);
            r489_xn$lineto$5sIl = _r489_t0['line-to']['bind'](_r489_t0);
            r489_xn$curveto$1aao = _r489_t0['curve-to']['bind'](_r489_t0);
            r489_xn$cubicto$1aao = _r489_t0['cubic-to']['bind'](_r489_t0);
            r489_xn$putshapes$9Jrj = _r489_t0['put-shapes']['bind'](_r489_t0);
            r489_xn$reverselast$3qIs = _r489_t0['reverse-last']['bind'](_r489_t0);
            r489_include = _r489_t0['include']['bind'](_r489_t0);
            r489_xn$createstroke$7Hrq = _r489_t0['create-stroke']['bind'](_r489_t0);
            r489_xn$setanchor$9Jrj = _r489_t0['set-anchor']['bind'](_r489_t0);
            r489_xn$dontexport$5sIl = function _r489_t3() {
                var _r491_t0, _r491_t1;
                return r489_currentGlyph['dontExport'] = true;
            };
            _r489_t0['gizmo'] = r4_globalTransform;
            _r489_t0['set-width'](r4_WIDTH);
            r489_xn$assignunicode$7Hrq(254);
            r489_include(r4_glyphs['b'], r4_AS_BASE);
            r489_include(r4_glyphs['p']);
            r489_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t162() {
            var r493_currentGlyph, r493_xn$setwidth$9Jrj, r493_xn$assignunicode$7Hrq, r493_xn$startfrom$1aao, r493_xn$lineto$5sIl, r493_xn$curveto$1aao, r493_xn$cubicto$1aao, r493_xn$putshapes$9Jrj, r493_xn$reverselast$3qIs, r493_include, r493_xn$createstroke$7Hrq, r493_xn$setanchor$9Jrj, r493_xn$dontexport$5sIl, r493_yTopTurn, r493_yBottomTurn, r493_xTopTurn, r493_xMiddleTurn, r493_xBottomTurn, r493_xBottomFinal, _r493_t0, _r493_t1, _r493_t2, _r493_t3;
            _r493_t0 = this;
            r493_currentGlyph = _r493_t0;
            r493_xn$setwidth$9Jrj = _r493_t0['set-width']['bind'](_r493_t0);
            r493_xn$assignunicode$7Hrq = function _r493_t2(r494_code) {
                var r494_code, _r494_t0, _r494_t1;
                r493_currentGlyph['assign-unicode'](r494_code);
                return r4_unicodeGlyphs[r493_currentGlyph['unicode'][r493_currentGlyph['unicode']['length'] - 1]] = r493_currentGlyph;
            };
            r493_xn$startfrom$1aao = _r493_t0['start-from']['bind'](_r493_t0);
            r493_xn$lineto$5sIl = _r493_t0['line-to']['bind'](_r493_t0);
            r493_xn$curveto$1aao = _r493_t0['curve-to']['bind'](_r493_t0);
            r493_xn$cubicto$1aao = _r493_t0['cubic-to']['bind'](_r493_t0);
            r493_xn$putshapes$9Jrj = _r493_t0['put-shapes']['bind'](_r493_t0);
            r493_xn$reverselast$3qIs = _r493_t0['reverse-last']['bind'](_r493_t0);
            r493_include = _r493_t0['include']['bind'](_r493_t0);
            r493_xn$createstroke$7Hrq = _r493_t0['create-stroke']['bind'](_r493_t0);
            r493_xn$setanchor$9Jrj = _r493_t0['set-anchor']['bind'](_r493_t0);
            r493_xn$dontexport$5sIl = function _r493_t3() {
                var _r495_t0, _r495_t1;
                return r493_currentGlyph['dontExport'] = true;
            };
            _r493_t0['gizmo'] = r4_globalTransform;
            _r493_t0['set-width'](r4_WIDTH);
            r493_xn$setwidth$9Jrj(r4_WIDTH);
            r493_xn$dontexport$5sIl();
            r493_include(r4_bMarks);
            r493_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r493_yBottomTurn = r4_CAP * 0.41;
            r493_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r493_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r493_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r493_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r493_include(r493_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r493_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r493_xTopTurn, r493_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r493_xTopTurn, r493_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r493_include(r493_xn$createstroke$7Hrq()['start-from'](r493_xTopTurn + r4_HALFSTROKE, r493_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r493_xMiddleTurn + (r493_yTopTurn - r493_yBottomTurn) / 2, r493_yTopTurn)['arc-hv-to'](r493_xMiddleTurn, r0_mix(r493_yTopTurn, r493_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r493_xMiddleTurn, r493_xBottomTurn, 0.5), r493_yBottomTurn)['arc-hv-to'](r493_xBottomTurn, r0_mix(r493_yBottomTurn + r4_HALFSTROKE, 0, 0.475))['arc-vh-to'](r493_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r493_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t163() {
            var r497_currentGlyph, r497_xn$setwidth$9Jrj, r497_xn$assignunicode$7Hrq, r497_xn$startfrom$1aao, r497_xn$lineto$5sIl, r497_xn$curveto$1aao, r497_xn$cubicto$1aao, r497_xn$putshapes$9Jrj, r497_xn$reverselast$3qIs, r497_include, r497_xn$createstroke$7Hrq, r497_xn$setanchor$9Jrj, r497_xn$dontexport$5sIl, _r497_t0, _r497_t1, _r497_t2, _r497_t3;
            _r497_t0 = this;
            r497_currentGlyph = _r497_t0;
            r497_xn$setwidth$9Jrj = _r497_t0['set-width']['bind'](_r497_t0);
            r497_xn$assignunicode$7Hrq = function _r497_t2(r498_code) {
                var r498_code, _r498_t0, _r498_t1;
                r497_currentGlyph['assign-unicode'](r498_code);
                return r4_unicodeGlyphs[r497_currentGlyph['unicode'][r497_currentGlyph['unicode']['length'] - 1]] = r497_currentGlyph;
            };
            r497_xn$startfrom$1aao = _r497_t0['start-from']['bind'](_r497_t0);
            r497_xn$lineto$5sIl = _r497_t0['line-to']['bind'](_r497_t0);
            r497_xn$curveto$1aao = _r497_t0['curve-to']['bind'](_r497_t0);
            r497_xn$cubicto$1aao = _r497_t0['cubic-to']['bind'](_r497_t0);
            r497_xn$putshapes$9Jrj = _r497_t0['put-shapes']['bind'](_r497_t0);
            r497_xn$reverselast$3qIs = _r497_t0['reverse-last']['bind'](_r497_t0);
            r497_include = _r497_t0['include']['bind'](_r497_t0);
            r497_xn$createstroke$7Hrq = _r497_t0['create-stroke']['bind'](_r497_t0);
            r497_xn$setanchor$9Jrj = _r497_t0['set-anchor']['bind'](_r497_t0);
            r497_xn$dontexport$5sIl = function _r497_t3() {
                var _r499_t0, _r499_t1;
                return r497_currentGlyph['dontExport'] = true;
            };
            _r497_t0['gizmo'] = r4_globalTransform;
            _r497_t0['set-width'](r4_WIDTH);
            r497_xn$setwidth$9Jrj(r4_WIDTH);
            r497_xn$dontexport$5sIl();
            r497_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r497_include(r4_ifMarks);
            r497_include(r4_eshHook(r4_glyphs['eszet.upright']['italicHookAttachPoint']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t164() {
            var r501_currentGlyph, r501_xn$setwidth$9Jrj, r501_xn$assignunicode$7Hrq, r501_xn$startfrom$1aao, r501_xn$lineto$5sIl, r501_xn$curveto$1aao, r501_xn$cubicto$1aao, r501_xn$putshapes$9Jrj, r501_xn$reverselast$3qIs, r501_include, r501_xn$createstroke$7Hrq, r501_xn$setanchor$9Jrj, r501_xn$dontexport$5sIl, _r501_t0, _r501_t1, _r501_t2, _r501_t3;
            _r501_t0 = this;
            r501_currentGlyph = _r501_t0;
            r501_xn$setwidth$9Jrj = _r501_t0['set-width']['bind'](_r501_t0);
            r501_xn$assignunicode$7Hrq = function _r501_t2(r502_code) {
                var r502_code, _r502_t0, _r502_t1;
                r501_currentGlyph['assign-unicode'](r502_code);
                return r4_unicodeGlyphs[r501_currentGlyph['unicode'][r501_currentGlyph['unicode']['length'] - 1]] = r501_currentGlyph;
            };
            r501_xn$startfrom$1aao = _r501_t0['start-from']['bind'](_r501_t0);
            r501_xn$lineto$5sIl = _r501_t0['line-to']['bind'](_r501_t0);
            r501_xn$curveto$1aao = _r501_t0['curve-to']['bind'](_r501_t0);
            r501_xn$cubicto$1aao = _r501_t0['cubic-to']['bind'](_r501_t0);
            r501_xn$putshapes$9Jrj = _r501_t0['put-shapes']['bind'](_r501_t0);
            r501_xn$reverselast$3qIs = _r501_t0['reverse-last']['bind'](_r501_t0);
            r501_include = _r501_t0['include']['bind'](_r501_t0);
            r501_xn$createstroke$7Hrq = _r501_t0['create-stroke']['bind'](_r501_t0);
            r501_xn$setanchor$9Jrj = _r501_t0['set-anchor']['bind'](_r501_t0);
            r501_xn$dontexport$5sIl = function _r501_t3() {
                var _r503_t0, _r503_t1;
                return r501_currentGlyph['dontExport'] = true;
            };
            _r501_t0['gizmo'] = r4_globalTransform;
            _r501_t0['set-width'](r4_WIDTH);
            r501_xn$setwidth$9Jrj(r4_WIDTH);
            r501_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r501_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r501_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_ezhshape = function _r4_t165(r504_top, r504_bot) {
            var r504_top, r504_bot, _r504_t0, _r504_t1, _r504_t2;
            return function _r504_t2() {
                var r506_currentGlyph, r506_xn$setwidth$9Jrj, r506_xn$assignunicode$7Hrq, r506_xn$startfrom$1aao, r506_xn$lineto$5sIl, r506_xn$curveto$1aao, r506_xn$cubicto$1aao, r506_xn$putshapes$9Jrj, r506_xn$reverselast$3qIs, r506_include, r506_xn$createstroke$7Hrq, r506_xn$setanchor$9Jrj, r506_xn$dontexport$5sIl, r506_cor, r506_yMidBar, r506_ezhLeft, r506_ezhRight, _r506_t0, _r506_t1, _r506_t2, _r506_t3;
                _r506_t0 = this;
                r506_currentGlyph = _r506_t0;
                r506_xn$setwidth$9Jrj = _r506_t0['set-width']['bind'](_r506_t0);
                r506_xn$assignunicode$7Hrq = function _r506_t2(r507_code) {
                    var r507_code, _r507_t0, _r507_t1;
                    r506_currentGlyph['assign-unicode'](r507_code);
                    return r4_unicodeGlyphs[r506_currentGlyph['unicode'][r506_currentGlyph['unicode']['length'] - 1]] = r506_currentGlyph;
                };
                r506_xn$startfrom$1aao = _r506_t0['start-from']['bind'](_r506_t0);
                r506_xn$lineto$5sIl = _r506_t0['line-to']['bind'](_r506_t0);
                r506_xn$curveto$1aao = _r506_t0['curve-to']['bind'](_r506_t0);
                r506_xn$cubicto$1aao = _r506_t0['cubic-to']['bind'](_r506_t0);
                r506_xn$putshapes$9Jrj = _r506_t0['put-shapes']['bind'](_r506_t0);
                r506_xn$reverselast$3qIs = _r506_t0['reverse-last']['bind'](_r506_t0);
                r506_include = _r506_t0['include']['bind'](_r506_t0);
                r506_xn$createstroke$7Hrq = _r506_t0['create-stroke']['bind'](_r506_t0);
                r506_xn$setanchor$9Jrj = _r506_t0['set-anchor']['bind'](_r506_t0);
                r506_xn$dontexport$5sIl = function _r506_t3() {
                    var _r508_t0, _r508_t1;
                    return r506_currentGlyph['dontExport'] = true;
                };
                _r506_t0['gizmo'] = r4_globalTransform;
                _r506_t0['set-width'](r4_WIDTH);
                r506_cor = 1.2;
                r506_yMidBar = r0_mix(r504_bot, r504_top, 0.6);
                r506_ezhLeft = r0_mix(r4_SB, r4_RIGHTSB, 0.2);
                r506_ezhRight = r0_mix(r4_SB, r4_RIGHTSB, 0.925);
                r506_include(r506_xn$createstroke$7Hrq()['start-from'](r4_SB, r504_top)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r506_ezhRight, r504_top)['heads-to'](r4_RIGHTWARD)['to-outline']());
                r506_include(r506_xn$createstroke$7Hrq()['start-from'](r506_ezhLeft, r506_yMidBar)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE, r506_yMidBar)['arc-hv-to'](r4_RIGHTSB, r0_mix(r506_yMidBar, r504_bot, 0.5))['to-outline']());
                r506_include(r4_XSHookLower(r504_bot, r4_SB, r0_mix(r4_SB, r4_RIGHTSB, 0.465), r4_RIGHTSB, (r506_yMidBar - r504_bot) / 2, r4_SHOOK));
                r506_xn$startfrom$1aao(r506_ezhLeft, r506_yMidBar);
                r506_xn$lineto$5sIl(r506_ezhLeft + r4_STROKE * r506_cor, r506_yMidBar);
                r506_xn$lineto$5sIl(r506_ezhRight, r504_top - r4_STROKE);
                r506_xn$lineto$5sIl(r506_ezhRight - r4_STROKE * r506_cor, r504_top - r4_STROKE);
                r506_xn$reverselast$3qIs();
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('Ezh', function _r4_t166() {
            var r510_currentGlyph, r510_xn$setwidth$9Jrj, r510_xn$assignunicode$7Hrq, r510_xn$startfrom$1aao, r510_xn$lineto$5sIl, r510_xn$curveto$1aao, r510_xn$cubicto$1aao, r510_xn$putshapes$9Jrj, r510_xn$reverselast$3qIs, r510_include, r510_xn$createstroke$7Hrq, r510_xn$setanchor$9Jrj, r510_xn$dontexport$5sIl, _r510_t0, _r510_t1, _r510_t2, _r510_t3;
            _r510_t0 = this;
            r510_currentGlyph = _r510_t0;
            r510_xn$setwidth$9Jrj = _r510_t0['set-width']['bind'](_r510_t0);
            r510_xn$assignunicode$7Hrq = function _r510_t2(r511_code) {
                var r511_code, _r511_t0, _r511_t1;
                r510_currentGlyph['assign-unicode'](r511_code);
                return r4_unicodeGlyphs[r510_currentGlyph['unicode'][r510_currentGlyph['unicode']['length'] - 1]] = r510_currentGlyph;
            };
            r510_xn$startfrom$1aao = _r510_t0['start-from']['bind'](_r510_t0);
            r510_xn$lineto$5sIl = _r510_t0['line-to']['bind'](_r510_t0);
            r510_xn$curveto$1aao = _r510_t0['curve-to']['bind'](_r510_t0);
            r510_xn$cubicto$1aao = _r510_t0['cubic-to']['bind'](_r510_t0);
            r510_xn$putshapes$9Jrj = _r510_t0['put-shapes']['bind'](_r510_t0);
            r510_xn$reverselast$3qIs = _r510_t0['reverse-last']['bind'](_r510_t0);
            r510_include = _r510_t0['include']['bind'](_r510_t0);
            r510_xn$createstroke$7Hrq = _r510_t0['create-stroke']['bind'](_r510_t0);
            r510_xn$setanchor$9Jrj = _r510_t0['set-anchor']['bind'](_r510_t0);
            r510_xn$dontexport$5sIl = function _r510_t3() {
                var _r512_t0, _r512_t1;
                return r510_currentGlyph['dontExport'] = true;
            };
            _r510_t0['gizmo'] = r4_globalTransform;
            _r510_t0['set-width'](r4_WIDTH);
            r510_xn$setwidth$9Jrj(r4_WIDTH);
            r510_xn$assignunicode$7Hrq(439);
            r510_include(r4_capitalMarks);
            r510_include(r4_ezhshape(r4_CAP, 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ezh', function _r4_t167() {
            var r514_currentGlyph, r514_xn$setwidth$9Jrj, r514_xn$assignunicode$7Hrq, r514_xn$startfrom$1aao, r514_xn$lineto$5sIl, r514_xn$curveto$1aao, r514_xn$cubicto$1aao, r514_xn$putshapes$9Jrj, r514_xn$reverselast$3qIs, r514_include, r514_xn$createstroke$7Hrq, r514_xn$setanchor$9Jrj, r514_xn$dontexport$5sIl, _r514_t0, _r514_t1, _r514_t2, _r514_t3;
            _r514_t0 = this;
            r514_currentGlyph = _r514_t0;
            r514_xn$setwidth$9Jrj = _r514_t0['set-width']['bind'](_r514_t0);
            r514_xn$assignunicode$7Hrq = function _r514_t2(r515_code) {
                var r515_code, _r515_t0, _r515_t1;
                r514_currentGlyph['assign-unicode'](r515_code);
                return r4_unicodeGlyphs[r514_currentGlyph['unicode'][r514_currentGlyph['unicode']['length'] - 1]] = r514_currentGlyph;
            };
            r514_xn$startfrom$1aao = _r514_t0['start-from']['bind'](_r514_t0);
            r514_xn$lineto$5sIl = _r514_t0['line-to']['bind'](_r514_t0);
            r514_xn$curveto$1aao = _r514_t0['curve-to']['bind'](_r514_t0);
            r514_xn$cubicto$1aao = _r514_t0['cubic-to']['bind'](_r514_t0);
            r514_xn$putshapes$9Jrj = _r514_t0['put-shapes']['bind'](_r514_t0);
            r514_xn$reverselast$3qIs = _r514_t0['reverse-last']['bind'](_r514_t0);
            r514_include = _r514_t0['include']['bind'](_r514_t0);
            r514_xn$createstroke$7Hrq = _r514_t0['create-stroke']['bind'](_r514_t0);
            r514_xn$setanchor$9Jrj = _r514_t0['set-anchor']['bind'](_r514_t0);
            r514_xn$dontexport$5sIl = function _r514_t3() {
                var _r516_t0, _r516_t1;
                return r514_currentGlyph['dontExport'] = true;
            };
            _r514_t0['gizmo'] = r4_globalTransform;
            _r514_t0['set-width'](r4_WIDTH);
            r514_xn$setwidth$9Jrj(r4_WIDTH);
            r514_xn$assignunicode$7Hrq(658);
            r514_include(r4_pMarks);
            r514_include(r4_ezhshape(r4_XH, r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh', function _r4_t168() {
            var r518_currentGlyph, r518_xn$setwidth$9Jrj, r518_xn$assignunicode$7Hrq, r518_xn$startfrom$1aao, r518_xn$lineto$5sIl, r518_xn$curveto$1aao, r518_xn$cubicto$1aao, r518_xn$putshapes$9Jrj, r518_xn$reverselast$3qIs, r518_include, r518_xn$createstroke$7Hrq, r518_xn$setanchor$9Jrj, r518_xn$dontexport$5sIl, _r518_t0, _r518_t1, _r518_t2, _r518_t3;
            _r518_t0 = this;
            r518_currentGlyph = _r518_t0;
            r518_xn$setwidth$9Jrj = _r518_t0['set-width']['bind'](_r518_t0);
            r518_xn$assignunicode$7Hrq = function _r518_t2(r519_code) {
                var r519_code, _r519_t0, _r519_t1;
                r518_currentGlyph['assign-unicode'](r519_code);
                return r4_unicodeGlyphs[r518_currentGlyph['unicode'][r518_currentGlyph['unicode']['length'] - 1]] = r518_currentGlyph;
            };
            r518_xn$startfrom$1aao = _r518_t0['start-from']['bind'](_r518_t0);
            r518_xn$lineto$5sIl = _r518_t0['line-to']['bind'](_r518_t0);
            r518_xn$curveto$1aao = _r518_t0['curve-to']['bind'](_r518_t0);
            r518_xn$cubicto$1aao = _r518_t0['cubic-to']['bind'](_r518_t0);
            r518_xn$putshapes$9Jrj = _r518_t0['put-shapes']['bind'](_r518_t0);
            r518_xn$reverselast$3qIs = _r518_t0['reverse-last']['bind'](_r518_t0);
            r518_include = _r518_t0['include']['bind'](_r518_t0);
            r518_xn$createstroke$7Hrq = _r518_t0['create-stroke']['bind'](_r518_t0);
            r518_xn$setanchor$9Jrj = _r518_t0['set-anchor']['bind'](_r518_t0);
            r518_xn$dontexport$5sIl = function _r518_t3() {
                var _r520_t0, _r520_t1;
                return r518_currentGlyph['dontExport'] = true;
            };
            _r518_t0['gizmo'] = r4_globalTransform;
            _r518_t0['set-width'](r4_WIDTH);
            r518_xn$assignunicode$7Hrq(643);
            r518_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t169() {
            var r522_currentGlyph, r522_xn$setwidth$9Jrj, r522_xn$assignunicode$7Hrq, r522_xn$startfrom$1aao, r522_xn$lineto$5sIl, r522_xn$curveto$1aao, r522_xn$cubicto$1aao, r522_xn$putshapes$9Jrj, r522_xn$reverselast$3qIs, r522_include, r522_xn$createstroke$7Hrq, r522_xn$setanchor$9Jrj, r522_xn$dontexport$5sIl, r522_fine, _r522_t0, _r522_t1, _r522_t2, _r522_t3;
            _r522_t0 = this;
            r522_currentGlyph = _r522_t0;
            r522_xn$setwidth$9Jrj = _r522_t0['set-width']['bind'](_r522_t0);
            r522_xn$assignunicode$7Hrq = function _r522_t2(r523_code) {
                var r523_code, _r523_t0, _r523_t1;
                r522_currentGlyph['assign-unicode'](r523_code);
                return r4_unicodeGlyphs[r522_currentGlyph['unicode'][r522_currentGlyph['unicode']['length'] - 1]] = r522_currentGlyph;
            };
            r522_xn$startfrom$1aao = _r522_t0['start-from']['bind'](_r522_t0);
            r522_xn$lineto$5sIl = _r522_t0['line-to']['bind'](_r522_t0);
            r522_xn$curveto$1aao = _r522_t0['curve-to']['bind'](_r522_t0);
            r522_xn$cubicto$1aao = _r522_t0['cubic-to']['bind'](_r522_t0);
            r522_xn$putshapes$9Jrj = _r522_t0['put-shapes']['bind'](_r522_t0);
            r522_xn$reverselast$3qIs = _r522_t0['reverse-last']['bind'](_r522_t0);
            r522_include = _r522_t0['include']['bind'](_r522_t0);
            r522_xn$createstroke$7Hrq = _r522_t0['create-stroke']['bind'](_r522_t0);
            r522_xn$setanchor$9Jrj = _r522_t0['set-anchor']['bind'](_r522_t0);
            r522_xn$dontexport$5sIl = function _r522_t3() {
                var _r524_t0, _r524_t1;
                return r522_currentGlyph['dontExport'] = true;
            };
            _r522_t0['gizmo'] = r4_globalTransform;
            _r522_t0['set-width'](r4_WIDTH);
            r522_xn$setwidth$9Jrj(r4_WIDTH);
            r522_xn$dontexport$5sIl();
            r522_include(r4_glyphs['O']);
            r522_fine = r4_adviceBlackness(9);
            r522_include(r522_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.77))['set-width'](r522_fine, r522_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.77));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t170() {
            var r526_currentGlyph, r526_xn$setwidth$9Jrj, r526_xn$assignunicode$7Hrq, r526_xn$startfrom$1aao, r526_xn$lineto$5sIl, r526_xn$curveto$1aao, r526_xn$cubicto$1aao, r526_xn$putshapes$9Jrj, r526_xn$reverselast$3qIs, r526_include, r526_xn$createstroke$7Hrq, r526_xn$setanchor$9Jrj, r526_xn$dontexport$5sIl, _r526_t0, _r526_t1, _r526_t2, _r526_t3;
            _r526_t0 = this;
            r526_currentGlyph = _r526_t0;
            r526_xn$setwidth$9Jrj = _r526_t0['set-width']['bind'](_r526_t0);
            r526_xn$assignunicode$7Hrq = function _r526_t2(r527_code) {
                var r527_code, _r527_t0, _r527_t1;
                r526_currentGlyph['assign-unicode'](r527_code);
                return r4_unicodeGlyphs[r526_currentGlyph['unicode'][r526_currentGlyph['unicode']['length'] - 1]] = r526_currentGlyph;
            };
            r526_xn$startfrom$1aao = _r526_t0['start-from']['bind'](_r526_t0);
            r526_xn$lineto$5sIl = _r526_t0['line-to']['bind'](_r526_t0);
            r526_xn$curveto$1aao = _r526_t0['curve-to']['bind'](_r526_t0);
            r526_xn$cubicto$1aao = _r526_t0['cubic-to']['bind'](_r526_t0);
            r526_xn$putshapes$9Jrj = _r526_t0['put-shapes']['bind'](_r526_t0);
            r526_xn$reverselast$3qIs = _r526_t0['reverse-last']['bind'](_r526_t0);
            r526_include = _r526_t0['include']['bind'](_r526_t0);
            r526_xn$createstroke$7Hrq = _r526_t0['create-stroke']['bind'](_r526_t0);
            r526_xn$setanchor$9Jrj = _r526_t0['set-anchor']['bind'](_r526_t0);
            r526_xn$dontexport$5sIl = function _r526_t3() {
                var _r528_t0, _r528_t1;
                return r526_currentGlyph['dontExport'] = true;
            };
            _r526_t0['gizmo'] = r4_globalTransform;
            _r526_t0['set-width'](r4_WIDTH);
            r526_xn$setwidth$9Jrj(r4_WIDTH);
            r526_xn$dontexport$5sIl();
            r526_include(r4_glyphs['O']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t171() {
            var r530_currentGlyph, r530_xn$setwidth$9Jrj, r530_xn$assignunicode$7Hrq, r530_xn$startfrom$1aao, r530_xn$lineto$5sIl, r530_xn$curveto$1aao, r530_xn$cubicto$1aao, r530_xn$putshapes$9Jrj, r530_xn$reverselast$3qIs, r530_include, r530_xn$createstroke$7Hrq, r530_xn$setanchor$9Jrj, r530_xn$dontexport$5sIl, r530_radius, _r530_t0, _r530_t1, _r530_t2, _r530_t3;
            _r530_t0 = this;
            r530_currentGlyph = _r530_t0;
            r530_xn$setwidth$9Jrj = _r530_t0['set-width']['bind'](_r530_t0);
            r530_xn$assignunicode$7Hrq = function _r530_t2(r531_code) {
                var r531_code, _r531_t0, _r531_t1;
                r530_currentGlyph['assign-unicode'](r531_code);
                return r4_unicodeGlyphs[r530_currentGlyph['unicode'][r530_currentGlyph['unicode']['length'] - 1]] = r530_currentGlyph;
            };
            r530_xn$startfrom$1aao = _r530_t0['start-from']['bind'](_r530_t0);
            r530_xn$lineto$5sIl = _r530_t0['line-to']['bind'](_r530_t0);
            r530_xn$curveto$1aao = _r530_t0['curve-to']['bind'](_r530_t0);
            r530_xn$cubicto$1aao = _r530_t0['cubic-to']['bind'](_r530_t0);
            r530_xn$putshapes$9Jrj = _r530_t0['put-shapes']['bind'](_r530_t0);
            r530_xn$reverselast$3qIs = _r530_t0['reverse-last']['bind'](_r530_t0);
            r530_include = _r530_t0['include']['bind'](_r530_t0);
            r530_xn$createstroke$7Hrq = _r530_t0['create-stroke']['bind'](_r530_t0);
            r530_xn$setanchor$9Jrj = _r530_t0['set-anchor']['bind'](_r530_t0);
            r530_xn$dontexport$5sIl = function _r530_t3() {
                var _r532_t0, _r532_t1;
                return r530_currentGlyph['dontExport'] = true;
            };
            _r530_t0['gizmo'] = r4_globalTransform;
            _r530_t0['set-width'](r4_WIDTH);
            r530_xn$setwidth$9Jrj(r4_WIDTH);
            r530_xn$dontexport$5sIl();
            r530_include(r4_glyphs['O']);
            r530_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r530_include([r4_Ring(r4_CAPMIDDLE + r530_radius, r4_CAPMIDDLE - r530_radius, r4_MIDDLE + r530_radius, r4_MIDDLE - r530_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t172() {
            var r534_currentGlyph, r534_xn$setwidth$9Jrj, r534_xn$assignunicode$7Hrq, r534_xn$startfrom$1aao, r534_xn$lineto$5sIl, r534_xn$curveto$1aao, r534_xn$cubicto$1aao, r534_xn$putshapes$9Jrj, r534_xn$reverselast$3qIs, r534_include, r534_xn$createstroke$7Hrq, r534_xn$setanchor$9Jrj, r534_xn$dontexport$5sIl, _r534_t0, _r534_t1, _r534_t2, _r534_t3;
            _r534_t0 = this;
            r534_currentGlyph = _r534_t0;
            r534_xn$setwidth$9Jrj = _r534_t0['set-width']['bind'](_r534_t0);
            r534_xn$assignunicode$7Hrq = function _r534_t2(r535_code) {
                var r535_code, _r535_t0, _r535_t1;
                r534_currentGlyph['assign-unicode'](r535_code);
                return r4_unicodeGlyphs[r534_currentGlyph['unicode'][r534_currentGlyph['unicode']['length'] - 1]] = r534_currentGlyph;
            };
            r534_xn$startfrom$1aao = _r534_t0['start-from']['bind'](_r534_t0);
            r534_xn$lineto$5sIl = _r534_t0['line-to']['bind'](_r534_t0);
            r534_xn$curveto$1aao = _r534_t0['curve-to']['bind'](_r534_t0);
            r534_xn$cubicto$1aao = _r534_t0['cubic-to']['bind'](_r534_t0);
            r534_xn$putshapes$9Jrj = _r534_t0['put-shapes']['bind'](_r534_t0);
            r534_xn$reverselast$3qIs = _r534_t0['reverse-last']['bind'](_r534_t0);
            r534_include = _r534_t0['include']['bind'](_r534_t0);
            r534_xn$createstroke$7Hrq = _r534_t0['create-stroke']['bind'](_r534_t0);
            r534_xn$setanchor$9Jrj = _r534_t0['set-anchor']['bind'](_r534_t0);
            r534_xn$dontexport$5sIl = function _r534_t3() {
                var _r536_t0, _r536_t1;
                return r534_currentGlyph['dontExport'] = true;
            };
            _r534_t0['gizmo'] = r4_globalTransform;
            _r534_t0['set-width'](r4_WIDTH);
            r534_xn$setwidth$9Jrj(r4_WIDTH);
            r534_xn$assignunicode$7Hrq('1');
            r534_include(r534_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD));
            r534_include(r534_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t173() {
            var r538_currentGlyph, r538_xn$setwidth$9Jrj, r538_xn$assignunicode$7Hrq, r538_xn$startfrom$1aao, r538_xn$lineto$5sIl, r538_xn$curveto$1aao, r538_xn$cubicto$1aao, r538_xn$putshapes$9Jrj, r538_xn$reverselast$3qIs, r538_include, r538_xn$createstroke$7Hrq, r538_xn$setanchor$9Jrj, r538_xn$dontexport$5sIl, _r538_t0, _r538_t1, _r538_t2, _r538_t3;
            _r538_t0 = this;
            r538_currentGlyph = _r538_t0;
            r538_xn$setwidth$9Jrj = _r538_t0['set-width']['bind'](_r538_t0);
            r538_xn$assignunicode$7Hrq = function _r538_t2(r539_code) {
                var r539_code, _r539_t0, _r539_t1;
                r538_currentGlyph['assign-unicode'](r539_code);
                return r4_unicodeGlyphs[r538_currentGlyph['unicode'][r538_currentGlyph['unicode']['length'] - 1]] = r538_currentGlyph;
            };
            r538_xn$startfrom$1aao = _r538_t0['start-from']['bind'](_r538_t0);
            r538_xn$lineto$5sIl = _r538_t0['line-to']['bind'](_r538_t0);
            r538_xn$curveto$1aao = _r538_t0['curve-to']['bind'](_r538_t0);
            r538_xn$cubicto$1aao = _r538_t0['cubic-to']['bind'](_r538_t0);
            r538_xn$putshapes$9Jrj = _r538_t0['put-shapes']['bind'](_r538_t0);
            r538_xn$reverselast$3qIs = _r538_t0['reverse-last']['bind'](_r538_t0);
            r538_include = _r538_t0['include']['bind'](_r538_t0);
            r538_xn$createstroke$7Hrq = _r538_t0['create-stroke']['bind'](_r538_t0);
            r538_xn$setanchor$9Jrj = _r538_t0['set-anchor']['bind'](_r538_t0);
            r538_xn$dontexport$5sIl = function _r538_t3() {
                var _r540_t0, _r540_t1;
                return r538_currentGlyph['dontExport'] = true;
            };
            _r538_t0['gizmo'] = r4_globalTransform;
            _r538_t0['set-width'](r4_WIDTH);
            r538_xn$setwidth$9Jrj(r4_WIDTH);
            r538_xn$assignunicode$7Hrq('2');
            r538_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r538_include(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r538_include(r538_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t174() {
            var r542_currentGlyph, r542_xn$setwidth$9Jrj, r542_xn$assignunicode$7Hrq, r542_xn$startfrom$1aao, r542_xn$lineto$5sIl, r542_xn$curveto$1aao, r542_xn$cubicto$1aao, r542_xn$putshapes$9Jrj, r542_xn$reverselast$3qIs, r542_include, r542_xn$createstroke$7Hrq, r542_xn$setanchor$9Jrj, r542_xn$dontexport$5sIl, r542_threeRadius, _r542_t0, _r542_t1, _r542_t2, _r542_t3;
            _r542_t0 = this;
            r542_currentGlyph = _r542_t0;
            r542_xn$setwidth$9Jrj = _r542_t0['set-width']['bind'](_r542_t0);
            r542_xn$assignunicode$7Hrq = function _r542_t2(r543_code) {
                var r543_code, _r543_t0, _r543_t1;
                r542_currentGlyph['assign-unicode'](r543_code);
                return r4_unicodeGlyphs[r542_currentGlyph['unicode'][r542_currentGlyph['unicode']['length'] - 1]] = r542_currentGlyph;
            };
            r542_xn$startfrom$1aao = _r542_t0['start-from']['bind'](_r542_t0);
            r542_xn$lineto$5sIl = _r542_t0['line-to']['bind'](_r542_t0);
            r542_xn$curveto$1aao = _r542_t0['curve-to']['bind'](_r542_t0);
            r542_xn$cubicto$1aao = _r542_t0['cubic-to']['bind'](_r542_t0);
            r542_xn$putshapes$9Jrj = _r542_t0['put-shapes']['bind'](_r542_t0);
            r542_xn$reverselast$3qIs = _r542_t0['reverse-last']['bind'](_r542_t0);
            r542_include = _r542_t0['include']['bind'](_r542_t0);
            r542_xn$createstroke$7Hrq = _r542_t0['create-stroke']['bind'](_r542_t0);
            r542_xn$setanchor$9Jrj = _r542_t0['set-anchor']['bind'](_r542_t0);
            r542_xn$dontexport$5sIl = function _r542_t3() {
                var _r544_t0, _r544_t1;
                return r542_currentGlyph['dontExport'] = true;
            };
            _r542_t0['gizmo'] = r4_globalTransform;
            _r542_t0['set-width'](r4_WIDTH);
            r542_xn$setwidth$9Jrj(r4_WIDTH);
            r542_xn$assignunicode$7Hrq('3');
            r542_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r542_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r542_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r542_include(r542_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r542_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r542_include(r542_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r542_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t175() {
            var r546_currentGlyph, r546_xn$setwidth$9Jrj, r546_xn$assignunicode$7Hrq, r546_xn$startfrom$1aao, r546_xn$lineto$5sIl, r546_xn$curveto$1aao, r546_xn$cubicto$1aao, r546_xn$putshapes$9Jrj, r546_xn$reverselast$3qIs, r546_include, r546_xn$createstroke$7Hrq, r546_xn$setanchor$9Jrj, r546_xn$dontexport$5sIl, r546_bar, r546_vert, _r546_t0, _r546_t1, _r546_t2, _r546_t3;
            _r546_t0 = this;
            r546_currentGlyph = _r546_t0;
            r546_xn$setwidth$9Jrj = _r546_t0['set-width']['bind'](_r546_t0);
            r546_xn$assignunicode$7Hrq = function _r546_t2(r547_code) {
                var r547_code, _r547_t0, _r547_t1;
                r546_currentGlyph['assign-unicode'](r547_code);
                return r4_unicodeGlyphs[r546_currentGlyph['unicode'][r546_currentGlyph['unicode']['length'] - 1]] = r546_currentGlyph;
            };
            r546_xn$startfrom$1aao = _r546_t0['start-from']['bind'](_r546_t0);
            r546_xn$lineto$5sIl = _r546_t0['line-to']['bind'](_r546_t0);
            r546_xn$curveto$1aao = _r546_t0['curve-to']['bind'](_r546_t0);
            r546_xn$cubicto$1aao = _r546_t0['cubic-to']['bind'](_r546_t0);
            r546_xn$putshapes$9Jrj = _r546_t0['put-shapes']['bind'](_r546_t0);
            r546_xn$reverselast$3qIs = _r546_t0['reverse-last']['bind'](_r546_t0);
            r546_include = _r546_t0['include']['bind'](_r546_t0);
            r546_xn$createstroke$7Hrq = _r546_t0['create-stroke']['bind'](_r546_t0);
            r546_xn$setanchor$9Jrj = _r546_t0['set-anchor']['bind'](_r546_t0);
            r546_xn$dontexport$5sIl = function _r546_t3() {
                var _r548_t0, _r548_t1;
                return r546_currentGlyph['dontExport'] = true;
            };
            _r546_t0['gizmo'] = r4_globalTransform;
            _r546_t0['set-width'](r4_WIDTH);
            r546_xn$setwidth$9Jrj(r4_WIDTH);
            r546_xn$assignunicode$7Hrq('4');
            r546_bar = r4_CAP * 0.4;
            r546_vert = r4_WIDTH * 0.55;
            r546_include(r546_xn$createstroke$7Hrq()['start-from'](r4_SB, r546_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r546_bar)['heads-to'](r4_RIGHTWARD));
            r546_include(r546_xn$createstroke$7Hrq()['start-from'](r546_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r546_vert, r4_CAP)['heads-to'](r4_UPWARD));
            r546_include(r546_xn$createstroke$7Hrq()['start-from'](r4_SB, r546_bar)['set-width'](0, r4_STROKE)['line-to'](r546_vert, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t176() {
            var r550_currentGlyph, r550_xn$setwidth$9Jrj, r550_xn$assignunicode$7Hrq, r550_xn$startfrom$1aao, r550_xn$lineto$5sIl, r550_xn$curveto$1aao, r550_xn$cubicto$1aao, r550_xn$putshapes$9Jrj, r550_xn$reverselast$3qIs, r550_include, r550_xn$createstroke$7Hrq, r550_xn$setanchor$9Jrj, r550_xn$dontexport$5sIl, _r550_t0, _r550_t1, _r550_t2, _r550_t3;
            _r550_t0 = this;
            r550_currentGlyph = _r550_t0;
            r550_xn$setwidth$9Jrj = _r550_t0['set-width']['bind'](_r550_t0);
            r550_xn$assignunicode$7Hrq = function _r550_t2(r551_code) {
                var r551_code, _r551_t0, _r551_t1;
                r550_currentGlyph['assign-unicode'](r551_code);
                return r4_unicodeGlyphs[r550_currentGlyph['unicode'][r550_currentGlyph['unicode']['length'] - 1]] = r550_currentGlyph;
            };
            r550_xn$startfrom$1aao = _r550_t0['start-from']['bind'](_r550_t0);
            r550_xn$lineto$5sIl = _r550_t0['line-to']['bind'](_r550_t0);
            r550_xn$curveto$1aao = _r550_t0['curve-to']['bind'](_r550_t0);
            r550_xn$cubicto$1aao = _r550_t0['cubic-to']['bind'](_r550_t0);
            r550_xn$putshapes$9Jrj = _r550_t0['put-shapes']['bind'](_r550_t0);
            r550_xn$reverselast$3qIs = _r550_t0['reverse-last']['bind'](_r550_t0);
            r550_include = _r550_t0['include']['bind'](_r550_t0);
            r550_xn$createstroke$7Hrq = _r550_t0['create-stroke']['bind'](_r550_t0);
            r550_xn$setanchor$9Jrj = _r550_t0['set-anchor']['bind'](_r550_t0);
            r550_xn$dontexport$5sIl = function _r550_t3() {
                var _r552_t0, _r552_t1;
                return r550_currentGlyph['dontExport'] = true;
            };
            _r550_t0['gizmo'] = r4_globalTransform;
            _r550_t0['set-width'](r4_WIDTH);
            r550_xn$setwidth$9Jrj(r4_WIDTH);
            r550_xn$assignunicode$7Hrq('5');
            r550_include(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r550_include(r550_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD));
            r550_include(r550_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r550_include(r550_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t177() {
            var r554_currentGlyph, r554_xn$setwidth$9Jrj, r554_xn$assignunicode$7Hrq, r554_xn$startfrom$1aao, r554_xn$lineto$5sIl, r554_xn$curveto$1aao, r554_xn$cubicto$1aao, r554_xn$putshapes$9Jrj, r554_xn$reverselast$3qIs, r554_include, r554_xn$createstroke$7Hrq, r554_xn$setanchor$9Jrj, r554_xn$dontexport$5sIl, r554_ymiddlea, _r554_t0, _r554_t1, _r554_t2, _r554_t3;
            _r554_t0 = this;
            r554_currentGlyph = _r554_t0;
            r554_xn$setwidth$9Jrj = _r554_t0['set-width']['bind'](_r554_t0);
            r554_xn$assignunicode$7Hrq = function _r554_t2(r555_code) {
                var r555_code, _r555_t0, _r555_t1;
                r554_currentGlyph['assign-unicode'](r555_code);
                return r4_unicodeGlyphs[r554_currentGlyph['unicode'][r554_currentGlyph['unicode']['length'] - 1]] = r554_currentGlyph;
            };
            r554_xn$startfrom$1aao = _r554_t0['start-from']['bind'](_r554_t0);
            r554_xn$lineto$5sIl = _r554_t0['line-to']['bind'](_r554_t0);
            r554_xn$curveto$1aao = _r554_t0['curve-to']['bind'](_r554_t0);
            r554_xn$cubicto$1aao = _r554_t0['cubic-to']['bind'](_r554_t0);
            r554_xn$putshapes$9Jrj = _r554_t0['put-shapes']['bind'](_r554_t0);
            r554_xn$reverselast$3qIs = _r554_t0['reverse-last']['bind'](_r554_t0);
            r554_include = _r554_t0['include']['bind'](_r554_t0);
            r554_xn$createstroke$7Hrq = _r554_t0['create-stroke']['bind'](_r554_t0);
            r554_xn$setanchor$9Jrj = _r554_t0['set-anchor']['bind'](_r554_t0);
            r554_xn$dontexport$5sIl = function _r554_t3() {
                var _r556_t0, _r556_t1;
                return r554_currentGlyph['dontExport'] = true;
            };
            _r554_t0['gizmo'] = r4_globalTransform;
            _r554_t0['set-width'](r4_WIDTH);
            r554_xn$setwidth$9Jrj(r4_WIDTH);
            r554_xn$assignunicode$7Hrq('6');
            r554_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r554_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r554_include(r554_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r554_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r554_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t178() {
            var r558_currentGlyph, r558_xn$setwidth$9Jrj, r558_xn$assignunicode$7Hrq, r558_xn$startfrom$1aao, r558_xn$lineto$5sIl, r558_xn$curveto$1aao, r558_xn$cubicto$1aao, r558_xn$putshapes$9Jrj, r558_xn$reverselast$3qIs, r558_include, r558_xn$createstroke$7Hrq, r558_xn$setanchor$9Jrj, r558_xn$dontexport$5sIl, r558_cor, r558_x, _r558_t0, _r558_t1, _r558_t2, _r558_t3;
            _r558_t0 = this;
            r558_currentGlyph = _r558_t0;
            r558_xn$setwidth$9Jrj = _r558_t0['set-width']['bind'](_r558_t0);
            r558_xn$assignunicode$7Hrq = function _r558_t2(r559_code) {
                var r559_code, _r559_t0, _r559_t1;
                r558_currentGlyph['assign-unicode'](r559_code);
                return r4_unicodeGlyphs[r558_currentGlyph['unicode'][r558_currentGlyph['unicode']['length'] - 1]] = r558_currentGlyph;
            };
            r558_xn$startfrom$1aao = _r558_t0['start-from']['bind'](_r558_t0);
            r558_xn$lineto$5sIl = _r558_t0['line-to']['bind'](_r558_t0);
            r558_xn$curveto$1aao = _r558_t0['curve-to']['bind'](_r558_t0);
            r558_xn$cubicto$1aao = _r558_t0['cubic-to']['bind'](_r558_t0);
            r558_xn$putshapes$9Jrj = _r558_t0['put-shapes']['bind'](_r558_t0);
            r558_xn$reverselast$3qIs = _r558_t0['reverse-last']['bind'](_r558_t0);
            r558_include = _r558_t0['include']['bind'](_r558_t0);
            r558_xn$createstroke$7Hrq = _r558_t0['create-stroke']['bind'](_r558_t0);
            r558_xn$setanchor$9Jrj = _r558_t0['set-anchor']['bind'](_r558_t0);
            r558_xn$dontexport$5sIl = function _r558_t3() {
                var _r560_t0, _r560_t1;
                return r558_currentGlyph['dontExport'] = true;
            };
            _r558_t0['gizmo'] = r4_globalTransform;
            _r558_t0['set-width'](r4_WIDTH);
            r558_xn$setwidth$9Jrj(r4_WIDTH);
            r558_xn$assignunicode$7Hrq('7');
            r558_include(r558_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r558_cor = 1.15;
            r558_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r558_xn$startfrom$1aao(r558_x, 0);
            r558_xn$lineto$5sIl(r558_x + r4_STROKE * r558_cor, 0);
            r558_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r558_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r558_cor, r4_CAP - r4_STROKE);
            r558_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t179() {
            var r562_currentGlyph, r562_xn$setwidth$9Jrj, r562_xn$assignunicode$7Hrq, r562_xn$startfrom$1aao, r562_xn$lineto$5sIl, r562_xn$curveto$1aao, r562_xn$cubicto$1aao, r562_xn$putshapes$9Jrj, r562_xn$reverselast$3qIs, r562_include, r562_xn$createstroke$7Hrq, r562_xn$setanchor$9Jrj, r562_xn$dontexport$5sIl, r562_sma, r562_smb, r562_p, _r562_t0, _r562_t1, _r562_t2, _r562_t3;
            _r562_t0 = this;
            r562_currentGlyph = _r562_t0;
            r562_xn$setwidth$9Jrj = _r562_t0['set-width']['bind'](_r562_t0);
            r562_xn$assignunicode$7Hrq = function _r562_t2(r563_code) {
                var r563_code, _r563_t0, _r563_t1;
                r562_currentGlyph['assign-unicode'](r563_code);
                return r4_unicodeGlyphs[r562_currentGlyph['unicode'][r562_currentGlyph['unicode']['length'] - 1]] = r562_currentGlyph;
            };
            r562_xn$startfrom$1aao = _r562_t0['start-from']['bind'](_r562_t0);
            r562_xn$lineto$5sIl = _r562_t0['line-to']['bind'](_r562_t0);
            r562_xn$curveto$1aao = _r562_t0['curve-to']['bind'](_r562_t0);
            r562_xn$cubicto$1aao = _r562_t0['cubic-to']['bind'](_r562_t0);
            r562_xn$putshapes$9Jrj = _r562_t0['put-shapes']['bind'](_r562_t0);
            r562_xn$reverselast$3qIs = _r562_t0['reverse-last']['bind'](_r562_t0);
            r562_include = _r562_t0['include']['bind'](_r562_t0);
            r562_xn$createstroke$7Hrq = _r562_t0['create-stroke']['bind'](_r562_t0);
            r562_xn$setanchor$9Jrj = _r562_t0['set-anchor']['bind'](_r562_t0);
            r562_xn$dontexport$5sIl = function _r562_t3() {
                var _r564_t0, _r564_t1;
                return r562_currentGlyph['dontExport'] = true;
            };
            _r562_t0['gizmo'] = r4_globalTransform;
            _r562_t0['set-width'](r4_WIDTH);
            r562_xn$setwidth$9Jrj(r4_WIDTH);
            r562_xn$assignunicode$7Hrq('8');
            r562_sma = r4_SMOOTHA * 0.975;
            r562_smb = r4_SMOOTHB * 0.975;
            r562_p = 0.96;
            r562_include(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r562_p), r4_CAP - r562_sma * r562_p, r4_RIGHTSB, r562_sma));
            r562_include(r4_xsStrand(r4_SB, r562_smb, r0_mix(r4_SB, r4_RIGHTSB, r562_p), r4_CAP - r562_smb * r562_p));
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r562_p), r4_CAP - r562_smb * r562_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r562_p), r4_CAP - r562_sma * r562_p));
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r4_SB, r562_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r562_sma));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t180() {
            var r566_currentGlyph, r566_xn$setwidth$9Jrj, r566_xn$assignunicode$7Hrq, r566_xn$startfrom$1aao, r566_xn$lineto$5sIl, r566_xn$curveto$1aao, r566_xn$cubicto$1aao, r566_xn$putshapes$9Jrj, r566_xn$reverselast$3qIs, r566_include, r566_xn$createstroke$7Hrq, r566_xn$setanchor$9Jrj, r566_xn$dontexport$5sIl, r566_ymiddlea, _r566_t0, _r566_t1, _r566_t2, _r566_t3;
            _r566_t0 = this;
            r566_currentGlyph = _r566_t0;
            r566_xn$setwidth$9Jrj = _r566_t0['set-width']['bind'](_r566_t0);
            r566_xn$assignunicode$7Hrq = function _r566_t2(r567_code) {
                var r567_code, _r567_t0, _r567_t1;
                r566_currentGlyph['assign-unicode'](r567_code);
                return r4_unicodeGlyphs[r566_currentGlyph['unicode'][r566_currentGlyph['unicode']['length'] - 1]] = r566_currentGlyph;
            };
            r566_xn$startfrom$1aao = _r566_t0['start-from']['bind'](_r566_t0);
            r566_xn$lineto$5sIl = _r566_t0['line-to']['bind'](_r566_t0);
            r566_xn$curveto$1aao = _r566_t0['curve-to']['bind'](_r566_t0);
            r566_xn$cubicto$1aao = _r566_t0['cubic-to']['bind'](_r566_t0);
            r566_xn$putshapes$9Jrj = _r566_t0['put-shapes']['bind'](_r566_t0);
            r566_xn$reverselast$3qIs = _r566_t0['reverse-last']['bind'](_r566_t0);
            r566_include = _r566_t0['include']['bind'](_r566_t0);
            r566_xn$createstroke$7Hrq = _r566_t0['create-stroke']['bind'](_r566_t0);
            r566_xn$setanchor$9Jrj = _r566_t0['set-anchor']['bind'](_r566_t0);
            r566_xn$dontexport$5sIl = function _r566_t3() {
                var _r568_t0, _r568_t1;
                return r566_currentGlyph['dontExport'] = true;
            };
            _r566_t0['gizmo'] = r4_globalTransform;
            _r566_t0['set-width'](r4_WIDTH);
            r566_xn$setwidth$9Jrj(r4_WIDTH);
            r566_xn$assignunicode$7Hrq('9');
            r566_include(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r566_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r566_include(r566_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r566_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4));
            r566_include(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t181() {
            var r570_currentGlyph, r570_xn$setwidth$9Jrj, r570_xn$assignunicode$7Hrq, r570_xn$startfrom$1aao, r570_xn$lineto$5sIl, r570_xn$curveto$1aao, r570_xn$cubicto$1aao, r570_xn$putshapes$9Jrj, r570_xn$reverselast$3qIs, r570_include, r570_xn$createstroke$7Hrq, r570_xn$setanchor$9Jrj, r570_xn$dontexport$5sIl, _r570_t0, _r570_t1, _r570_t2, _r570_t3;
            _r570_t0 = this;
            r570_currentGlyph = _r570_t0;
            r570_xn$setwidth$9Jrj = _r570_t0['set-width']['bind'](_r570_t0);
            r570_xn$assignunicode$7Hrq = function _r570_t2(r571_code) {
                var r571_code, _r571_t0, _r571_t1;
                r570_currentGlyph['assign-unicode'](r571_code);
                return r4_unicodeGlyphs[r570_currentGlyph['unicode'][r570_currentGlyph['unicode']['length'] - 1]] = r570_currentGlyph;
            };
            r570_xn$startfrom$1aao = _r570_t0['start-from']['bind'](_r570_t0);
            r570_xn$lineto$5sIl = _r570_t0['line-to']['bind'](_r570_t0);
            r570_xn$curveto$1aao = _r570_t0['curve-to']['bind'](_r570_t0);
            r570_xn$cubicto$1aao = _r570_t0['cubic-to']['bind'](_r570_t0);
            r570_xn$putshapes$9Jrj = _r570_t0['put-shapes']['bind'](_r570_t0);
            r570_xn$reverselast$3qIs = _r570_t0['reverse-last']['bind'](_r570_t0);
            r570_include = _r570_t0['include']['bind'](_r570_t0);
            r570_xn$createstroke$7Hrq = _r570_t0['create-stroke']['bind'](_r570_t0);
            r570_xn$setanchor$9Jrj = _r570_t0['set-anchor']['bind'](_r570_t0);
            r570_xn$dontexport$5sIl = function _r570_t3() {
                var _r572_t0, _r572_t1;
                return r570_currentGlyph['dontExport'] = true;
            };
            _r570_t0['gizmo'] = r4_globalTransform;
            _r570_t0['set-width'](r4_WIDTH);
            r570_xn$setwidth$9Jrj(r4_WIDTH);
            r570_xn$assignunicode$7Hrq('$');
            r570_include(r4_glyphs['S']);
            r570_include(r570_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r570_include(r570_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t182() {
            var r574_currentGlyph, r574_xn$setwidth$9Jrj, r574_xn$assignunicode$7Hrq, r574_xn$startfrom$1aao, r574_xn$lineto$5sIl, r574_xn$curveto$1aao, r574_xn$cubicto$1aao, r574_xn$putshapes$9Jrj, r574_xn$reverselast$3qIs, r574_include, r574_xn$createstroke$7Hrq, r574_xn$setanchor$9Jrj, r574_xn$dontexport$5sIl, r574_fine, r574_p, r574_l, r574_pr, r574_q, r574_r, r574_s, _r574_t0, _r574_t1, _r574_t2, _r574_t3;
            _r574_t0 = this;
            r574_currentGlyph = _r574_t0;
            r574_xn$setwidth$9Jrj = _r574_t0['set-width']['bind'](_r574_t0);
            r574_xn$assignunicode$7Hrq = function _r574_t2(r575_code) {
                var r575_code, _r575_t0, _r575_t1;
                r574_currentGlyph['assign-unicode'](r575_code);
                return r4_unicodeGlyphs[r574_currentGlyph['unicode'][r574_currentGlyph['unicode']['length'] - 1]] = r574_currentGlyph;
            };
            r574_xn$startfrom$1aao = _r574_t0['start-from']['bind'](_r574_t0);
            r574_xn$lineto$5sIl = _r574_t0['line-to']['bind'](_r574_t0);
            r574_xn$curveto$1aao = _r574_t0['curve-to']['bind'](_r574_t0);
            r574_xn$cubicto$1aao = _r574_t0['cubic-to']['bind'](_r574_t0);
            r574_xn$putshapes$9Jrj = _r574_t0['put-shapes']['bind'](_r574_t0);
            r574_xn$reverselast$3qIs = _r574_t0['reverse-last']['bind'](_r574_t0);
            r574_include = _r574_t0['include']['bind'](_r574_t0);
            r574_xn$createstroke$7Hrq = _r574_t0['create-stroke']['bind'](_r574_t0);
            r574_xn$setanchor$9Jrj = _r574_t0['set-anchor']['bind'](_r574_t0);
            r574_xn$dontexport$5sIl = function _r574_t3() {
                var _r576_t0, _r576_t1;
                return r574_currentGlyph['dontExport'] = true;
            };
            _r574_t0['gizmo'] = r4_globalTransform;
            _r574_t0['set-width'](r4_WIDTH);
            r574_xn$setwidth$9Jrj(r4_WIDTH);
            r574_xn$assignunicode$7Hrq('&');
            r574_fine = r4_adviceBlackness(3.5);
            r574_p = 0.85;
            r574_l = 0.05;
            r574_pr = 0.9;
            r574_q = 0.45;
            r574_r = 1.1;
            r574_s = 0;
            r574_include(r574_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r574_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r574_p), r4_CAP - r4_SMOOTHB * r574_pr, r4_HALFSTROKE, r574_fine / 2));
            r574_include(r574_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r574_p), r4_CAP - r4_SMOOTHB * r574_pr)['set-width'](r574_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r574_p, r574_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r574_l), r4_CAP - r4_SMOOTHA * r574_pr));
            r574_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r574_l), r4_CAP - r4_SMOOTHA * r574_pr, r0_mix(r4_SB, r4_RIGHTSB, r574_r), r4_SMOOTHA * r574_s, r574_fine / 2, r574_fine / 2, null, null, r4_SMOOTHA * r574_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t183() {
            var r578_currentGlyph, r578_xn$setwidth$9Jrj, r578_xn$assignunicode$7Hrq, r578_xn$startfrom$1aao, r578_xn$lineto$5sIl, r578_xn$curveto$1aao, r578_xn$cubicto$1aao, r578_xn$putshapes$9Jrj, r578_xn$reverselast$3qIs, r578_include, r578_xn$createstroke$7Hrq, r578_xn$setanchor$9Jrj, r578_xn$dontexport$5sIl, r578_top, r578_bot, r578_otop, r578_obot, r578_sw, r578_m1, r578_m2, r578_sma, r578_smb, _r578_t0, _r578_t1, _r578_t2, _r578_t3;
            _r578_t0 = this;
            r578_currentGlyph = _r578_t0;
            r578_xn$setwidth$9Jrj = _r578_t0['set-width']['bind'](_r578_t0);
            r578_xn$assignunicode$7Hrq = function _r578_t2(r579_code) {
                var r579_code, _r579_t0, _r579_t1;
                r578_currentGlyph['assign-unicode'](r579_code);
                return r4_unicodeGlyphs[r578_currentGlyph['unicode'][r578_currentGlyph['unicode']['length'] - 1]] = r578_currentGlyph;
            };
            r578_xn$startfrom$1aao = _r578_t0['start-from']['bind'](_r578_t0);
            r578_xn$lineto$5sIl = _r578_t0['line-to']['bind'](_r578_t0);
            r578_xn$curveto$1aao = _r578_t0['curve-to']['bind'](_r578_t0);
            r578_xn$cubicto$1aao = _r578_t0['cubic-to']['bind'](_r578_t0);
            r578_xn$putshapes$9Jrj = _r578_t0['put-shapes']['bind'](_r578_t0);
            r578_xn$reverselast$3qIs = _r578_t0['reverse-last']['bind'](_r578_t0);
            r578_include = _r578_t0['include']['bind'](_r578_t0);
            r578_xn$createstroke$7Hrq = _r578_t0['create-stroke']['bind'](_r578_t0);
            r578_xn$setanchor$9Jrj = _r578_t0['set-anchor']['bind'](_r578_t0);
            r578_xn$dontexport$5sIl = function _r578_t3() {
                var _r580_t0, _r580_t1;
                return r578_currentGlyph['dontExport'] = true;
            };
            _r578_t0['gizmo'] = r4_globalTransform;
            _r578_t0['set-width'](r4_WIDTH);
            r578_xn$setwidth$9Jrj(r4_WIDTH);
            r578_xn$assignunicode$7Hrq('@');
            r578_top = r4_CAP + r4_HALFSTROKE;
            r578_bot = r4_DESCENDER + r4_HALFSTROKE;
            r578_otop = r0_mix(r578_bot, r578_top, 0.75);
            r578_obot = r0_mix(r578_top, r578_bot, 0.8);
            r578_sw = r4_adviceBlackness(3.5);
            r578_m1 = r0_mix(r4_SB + r578_sw, r4_RIGHTSB - r578_sw, 0.47) - r578_sw / 2;
            r578_m2 = r0_mix(r578_m1, r4_RIGHTSB, 0.5);
            r578_sma = r4_SMOOTHA * ((r4_RIGHTSB - r578_m1) / (r4_RIGHTSB - r4_SB));
            r578_smb = r4_SMOOTHB * ((r4_RIGHTSB - r578_m1) / (r4_RIGHTSB - r4_SB));
            r578_include(r578_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r578_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r578_sw, 0)['line-to'](r578_m2, r578_otop - r4_O)['arc-hv-to'](r578_m1, r578_otop - r578_sma)['line-to'](r578_m1, r578_obot + r578_smb)['arc-vh-to'](r578_m2 + r4_STROKE * r4_globalTransform['yx'], r578_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r578_obot + r578_sma)['line-to'](r4_RIGHTSB, r578_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r578_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r578_top - r4_SMOOTHA)['set-width'](r578_sw, 0)['line-to'](r4_SB, r578_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r578_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r578_bot + r4_O)['heads-to'](r4_RIGHTWARD)['set-samples'](4));
            return void 0;
        });
        r4_hyphenCenter = r4_XH * 0.625;
        r4_parenTop = r4_hyphenCenter + (r4_CAP - r4_XH) * 2.5;
        r4_parenBot = r4_hyphenCenter - (r4_CAP - r4_XH) * 2.5;
        r4_parenMid = r0_mix(r4_parenTop, r4_parenBot, 0.5);
        r4_parenOutside = 0.15;
        r4_parenInside = 0.65;
        r4_bracketOutside = 0.15;
        r4_bracketInside = 0.9;
        r4_braceOutside = 0.1;
        r4_braceInside = 0.9;
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t184() {
            var r582_currentGlyph, r582_xn$setwidth$9Jrj, r582_xn$assignunicode$7Hrq, r582_xn$startfrom$1aao, r582_xn$lineto$5sIl, r582_xn$curveto$1aao, r582_xn$cubicto$1aao, r582_xn$putshapes$9Jrj, r582_xn$reverselast$3qIs, r582_include, r582_xn$createstroke$7Hrq, r582_xn$setanchor$9Jrj, r582_xn$dontexport$5sIl, r582_p, _r582_t0, _r582_t1, _r582_t2, _r582_t3;
            _r582_t0 = this;
            r582_currentGlyph = _r582_t0;
            r582_xn$setwidth$9Jrj = _r582_t0['set-width']['bind'](_r582_t0);
            r582_xn$assignunicode$7Hrq = function _r582_t2(r583_code) {
                var r583_code, _r583_t0, _r583_t1;
                r582_currentGlyph['assign-unicode'](r583_code);
                return r4_unicodeGlyphs[r582_currentGlyph['unicode'][r582_currentGlyph['unicode']['length'] - 1]] = r582_currentGlyph;
            };
            r582_xn$startfrom$1aao = _r582_t0['start-from']['bind'](_r582_t0);
            r582_xn$lineto$5sIl = _r582_t0['line-to']['bind'](_r582_t0);
            r582_xn$curveto$1aao = _r582_t0['curve-to']['bind'](_r582_t0);
            r582_xn$cubicto$1aao = _r582_t0['cubic-to']['bind'](_r582_t0);
            r582_xn$putshapes$9Jrj = _r582_t0['put-shapes']['bind'](_r582_t0);
            r582_xn$reverselast$3qIs = _r582_t0['reverse-last']['bind'](_r582_t0);
            r582_include = _r582_t0['include']['bind'](_r582_t0);
            r582_xn$createstroke$7Hrq = _r582_t0['create-stroke']['bind'](_r582_t0);
            r582_xn$setanchor$9Jrj = _r582_t0['set-anchor']['bind'](_r582_t0);
            r582_xn$dontexport$5sIl = function _r582_t3() {
                var _r584_t0, _r584_t1;
                return r582_currentGlyph['dontExport'] = true;
            };
            _r582_t0['gizmo'] = r4_globalTransform;
            _r582_t0['set-width'](r4_WIDTH);
            r582_xn$setwidth$9Jrj(r4_WIDTH);
            r582_xn$assignunicode$7Hrq('(');
            r582_p = 0.6;
            r582_include(r582_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r582_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r582_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t185() {
            var r586_currentGlyph, r586_xn$setwidth$9Jrj, r586_xn$assignunicode$7Hrq, r586_xn$startfrom$1aao, r586_xn$lineto$5sIl, r586_xn$curveto$1aao, r586_xn$cubicto$1aao, r586_xn$putshapes$9Jrj, r586_xn$reverselast$3qIs, r586_include, r586_xn$createstroke$7Hrq, r586_xn$setanchor$9Jrj, r586_xn$dontexport$5sIl, r586_p, _r586_t0, _r586_t1, _r586_t2, _r586_t3;
            _r586_t0 = this;
            r586_currentGlyph = _r586_t0;
            r586_xn$setwidth$9Jrj = _r586_t0['set-width']['bind'](_r586_t0);
            r586_xn$assignunicode$7Hrq = function _r586_t2(r587_code) {
                var r587_code, _r587_t0, _r587_t1;
                r586_currentGlyph['assign-unicode'](r587_code);
                return r4_unicodeGlyphs[r586_currentGlyph['unicode'][r586_currentGlyph['unicode']['length'] - 1]] = r586_currentGlyph;
            };
            r586_xn$startfrom$1aao = _r586_t0['start-from']['bind'](_r586_t0);
            r586_xn$lineto$5sIl = _r586_t0['line-to']['bind'](_r586_t0);
            r586_xn$curveto$1aao = _r586_t0['curve-to']['bind'](_r586_t0);
            r586_xn$cubicto$1aao = _r586_t0['cubic-to']['bind'](_r586_t0);
            r586_xn$putshapes$9Jrj = _r586_t0['put-shapes']['bind'](_r586_t0);
            r586_xn$reverselast$3qIs = _r586_t0['reverse-last']['bind'](_r586_t0);
            r586_include = _r586_t0['include']['bind'](_r586_t0);
            r586_xn$createstroke$7Hrq = _r586_t0['create-stroke']['bind'](_r586_t0);
            r586_xn$setanchor$9Jrj = _r586_t0['set-anchor']['bind'](_r586_t0);
            r586_xn$dontexport$5sIl = function _r586_t3() {
                var _r588_t0, _r588_t1;
                return r586_currentGlyph['dontExport'] = true;
            };
            _r586_t0['gizmo'] = r4_globalTransform;
            _r586_t0['set-width'](r4_WIDTH);
            r586_xn$setwidth$9Jrj(r4_WIDTH);
            r586_xn$assignunicode$7Hrq(')');
            r586_p = 0.6;
            r586_include(r586_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r586_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r586_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t186() {
            var r590_currentGlyph, r590_xn$setwidth$9Jrj, r590_xn$assignunicode$7Hrq, r590_xn$startfrom$1aao, r590_xn$lineto$5sIl, r590_xn$curveto$1aao, r590_xn$cubicto$1aao, r590_xn$putshapes$9Jrj, r590_xn$reverselast$3qIs, r590_include, r590_xn$createstroke$7Hrq, r590_xn$setanchor$9Jrj, r590_xn$dontexport$5sIl, _r590_t0, _r590_t1, _r590_t2, _r590_t3;
            _r590_t0 = this;
            r590_currentGlyph = _r590_t0;
            r590_xn$setwidth$9Jrj = _r590_t0['set-width']['bind'](_r590_t0);
            r590_xn$assignunicode$7Hrq = function _r590_t2(r591_code) {
                var r591_code, _r591_t0, _r591_t1;
                r590_currentGlyph['assign-unicode'](r591_code);
                return r4_unicodeGlyphs[r590_currentGlyph['unicode'][r590_currentGlyph['unicode']['length'] - 1]] = r590_currentGlyph;
            };
            r590_xn$startfrom$1aao = _r590_t0['start-from']['bind'](_r590_t0);
            r590_xn$lineto$5sIl = _r590_t0['line-to']['bind'](_r590_t0);
            r590_xn$curveto$1aao = _r590_t0['curve-to']['bind'](_r590_t0);
            r590_xn$cubicto$1aao = _r590_t0['cubic-to']['bind'](_r590_t0);
            r590_xn$putshapes$9Jrj = _r590_t0['put-shapes']['bind'](_r590_t0);
            r590_xn$reverselast$3qIs = _r590_t0['reverse-last']['bind'](_r590_t0);
            r590_include = _r590_t0['include']['bind'](_r590_t0);
            r590_xn$createstroke$7Hrq = _r590_t0['create-stroke']['bind'](_r590_t0);
            r590_xn$setanchor$9Jrj = _r590_t0['set-anchor']['bind'](_r590_t0);
            r590_xn$dontexport$5sIl = function _r590_t3() {
                var _r592_t0, _r592_t1;
                return r590_currentGlyph['dontExport'] = true;
            };
            _r590_t0['gizmo'] = r4_globalTransform;
            _r590_t0['set-width'](r4_WIDTH);
            r590_xn$setwidth$9Jrj(r4_WIDTH);
            r590_xn$assignunicode$7Hrq('[');
            r590_include(r590_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r590_include(r590_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r590_include(r590_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t187() {
            var r594_currentGlyph, r594_xn$setwidth$9Jrj, r594_xn$assignunicode$7Hrq, r594_xn$startfrom$1aao, r594_xn$lineto$5sIl, r594_xn$curveto$1aao, r594_xn$cubicto$1aao, r594_xn$putshapes$9Jrj, r594_xn$reverselast$3qIs, r594_include, r594_xn$createstroke$7Hrq, r594_xn$setanchor$9Jrj, r594_xn$dontexport$5sIl, _r594_t0, _r594_t1, _r594_t2, _r594_t3;
            _r594_t0 = this;
            r594_currentGlyph = _r594_t0;
            r594_xn$setwidth$9Jrj = _r594_t0['set-width']['bind'](_r594_t0);
            r594_xn$assignunicode$7Hrq = function _r594_t2(r595_code) {
                var r595_code, _r595_t0, _r595_t1;
                r594_currentGlyph['assign-unicode'](r595_code);
                return r4_unicodeGlyphs[r594_currentGlyph['unicode'][r594_currentGlyph['unicode']['length'] - 1]] = r594_currentGlyph;
            };
            r594_xn$startfrom$1aao = _r594_t0['start-from']['bind'](_r594_t0);
            r594_xn$lineto$5sIl = _r594_t0['line-to']['bind'](_r594_t0);
            r594_xn$curveto$1aao = _r594_t0['curve-to']['bind'](_r594_t0);
            r594_xn$cubicto$1aao = _r594_t0['cubic-to']['bind'](_r594_t0);
            r594_xn$putshapes$9Jrj = _r594_t0['put-shapes']['bind'](_r594_t0);
            r594_xn$reverselast$3qIs = _r594_t0['reverse-last']['bind'](_r594_t0);
            r594_include = _r594_t0['include']['bind'](_r594_t0);
            r594_xn$createstroke$7Hrq = _r594_t0['create-stroke']['bind'](_r594_t0);
            r594_xn$setanchor$9Jrj = _r594_t0['set-anchor']['bind'](_r594_t0);
            r594_xn$dontexport$5sIl = function _r594_t3() {
                var _r596_t0, _r596_t1;
                return r594_currentGlyph['dontExport'] = true;
            };
            _r594_t0['gizmo'] = r4_globalTransform;
            _r594_t0['set-width'](r4_WIDTH);
            r594_xn$setwidth$9Jrj(r4_WIDTH);
            r594_xn$assignunicode$7Hrq(']');
            r594_include(r594_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r594_include(r594_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r594_include(r594_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t188() {
            var r598_currentGlyph, r598_xn$setwidth$9Jrj, r598_xn$assignunicode$7Hrq, r598_xn$startfrom$1aao, r598_xn$lineto$5sIl, r598_xn$curveto$1aao, r598_xn$cubicto$1aao, r598_xn$putshapes$9Jrj, r598_xn$reverselast$3qIs, r598_include, r598_xn$createstroke$7Hrq, r598_xn$setanchor$9Jrj, r598_xn$dontexport$5sIl, r598_parenCenter, r598_radius, _r598_t0, _r598_t1, _r598_t2, _r598_t3;
            _r598_t0 = this;
            r598_currentGlyph = _r598_t0;
            r598_xn$setwidth$9Jrj = _r598_t0['set-width']['bind'](_r598_t0);
            r598_xn$assignunicode$7Hrq = function _r598_t2(r599_code) {
                var r599_code, _r599_t0, _r599_t1;
                r598_currentGlyph['assign-unicode'](r599_code);
                return r4_unicodeGlyphs[r598_currentGlyph['unicode'][r598_currentGlyph['unicode']['length'] - 1]] = r598_currentGlyph;
            };
            r598_xn$startfrom$1aao = _r598_t0['start-from']['bind'](_r598_t0);
            r598_xn$lineto$5sIl = _r598_t0['line-to']['bind'](_r598_t0);
            r598_xn$curveto$1aao = _r598_t0['curve-to']['bind'](_r598_t0);
            r598_xn$cubicto$1aao = _r598_t0['cubic-to']['bind'](_r598_t0);
            r598_xn$putshapes$9Jrj = _r598_t0['put-shapes']['bind'](_r598_t0);
            r598_xn$reverselast$3qIs = _r598_t0['reverse-last']['bind'](_r598_t0);
            r598_include = _r598_t0['include']['bind'](_r598_t0);
            r598_xn$createstroke$7Hrq = _r598_t0['create-stroke']['bind'](_r598_t0);
            r598_xn$setanchor$9Jrj = _r598_t0['set-anchor']['bind'](_r598_t0);
            r598_xn$dontexport$5sIl = function _r598_t3() {
                var _r600_t0, _r600_t1;
                return r598_currentGlyph['dontExport'] = true;
            };
            _r598_t0['gizmo'] = r4_globalTransform;
            _r598_t0['set-width'](r4_WIDTH);
            r598_xn$setwidth$9Jrj(r4_WIDTH);
            r598_xn$assignunicode$7Hrq('{');
            r598_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r598_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r598_parenCenter;
            r598_include(r598_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r598_parenCenter, r4_parenTop - r598_radius)['line-to'](r598_parenCenter, r4_parenMid + r598_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r598_include(r598_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r598_parenCenter, r4_parenBot + r598_radius)['line-to'](r598_parenCenter, r4_parenMid - r598_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t189() {
            var r602_currentGlyph, r602_xn$setwidth$9Jrj, r602_xn$assignunicode$7Hrq, r602_xn$startfrom$1aao, r602_xn$lineto$5sIl, r602_xn$curveto$1aao, r602_xn$cubicto$1aao, r602_xn$putshapes$9Jrj, r602_xn$reverselast$3qIs, r602_include, r602_xn$createstroke$7Hrq, r602_xn$setanchor$9Jrj, r602_xn$dontexport$5sIl, r602_parenCenter, r602_radius, _r602_t0, _r602_t1, _r602_t2, _r602_t3;
            _r602_t0 = this;
            r602_currentGlyph = _r602_t0;
            r602_xn$setwidth$9Jrj = _r602_t0['set-width']['bind'](_r602_t0);
            r602_xn$assignunicode$7Hrq = function _r602_t2(r603_code) {
                var r603_code, _r603_t0, _r603_t1;
                r602_currentGlyph['assign-unicode'](r603_code);
                return r4_unicodeGlyphs[r602_currentGlyph['unicode'][r602_currentGlyph['unicode']['length'] - 1]] = r602_currentGlyph;
            };
            r602_xn$startfrom$1aao = _r602_t0['start-from']['bind'](_r602_t0);
            r602_xn$lineto$5sIl = _r602_t0['line-to']['bind'](_r602_t0);
            r602_xn$curveto$1aao = _r602_t0['curve-to']['bind'](_r602_t0);
            r602_xn$cubicto$1aao = _r602_t0['cubic-to']['bind'](_r602_t0);
            r602_xn$putshapes$9Jrj = _r602_t0['put-shapes']['bind'](_r602_t0);
            r602_xn$reverselast$3qIs = _r602_t0['reverse-last']['bind'](_r602_t0);
            r602_include = _r602_t0['include']['bind'](_r602_t0);
            r602_xn$createstroke$7Hrq = _r602_t0['create-stroke']['bind'](_r602_t0);
            r602_xn$setanchor$9Jrj = _r602_t0['set-anchor']['bind'](_r602_t0);
            r602_xn$dontexport$5sIl = function _r602_t3() {
                var _r604_t0, _r604_t1;
                return r602_currentGlyph['dontExport'] = true;
            };
            _r602_t0['gizmo'] = r4_globalTransform;
            _r602_t0['set-width'](r4_WIDTH);
            r602_xn$setwidth$9Jrj(r4_WIDTH);
            r602_xn$assignunicode$7Hrq('}');
            r602_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r602_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r602_parenCenter;
            r602_include(r602_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r602_parenCenter, r4_parenTop - r602_radius)['line-to'](r602_parenCenter, r4_parenMid + r602_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r602_include(r602_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r602_parenCenter, r4_parenBot + r602_radius)['line-to'](r602_parenCenter, r4_parenMid - r602_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t190() {
            var r606_currentGlyph, r606_xn$setwidth$9Jrj, r606_xn$assignunicode$7Hrq, r606_xn$startfrom$1aao, r606_xn$lineto$5sIl, r606_xn$curveto$1aao, r606_xn$cubicto$1aao, r606_xn$putshapes$9Jrj, r606_xn$reverselast$3qIs, r606_include, r606_xn$createstroke$7Hrq, r606_xn$setanchor$9Jrj, r606_xn$dontexport$5sIl, _r606_t0, _r606_t1, _r606_t2, _r606_t3;
            _r606_t0 = this;
            r606_currentGlyph = _r606_t0;
            r606_xn$setwidth$9Jrj = _r606_t0['set-width']['bind'](_r606_t0);
            r606_xn$assignunicode$7Hrq = function _r606_t2(r607_code) {
                var r607_code, _r607_t0, _r607_t1;
                r606_currentGlyph['assign-unicode'](r607_code);
                return r4_unicodeGlyphs[r606_currentGlyph['unicode'][r606_currentGlyph['unicode']['length'] - 1]] = r606_currentGlyph;
            };
            r606_xn$startfrom$1aao = _r606_t0['start-from']['bind'](_r606_t0);
            r606_xn$lineto$5sIl = _r606_t0['line-to']['bind'](_r606_t0);
            r606_xn$curveto$1aao = _r606_t0['curve-to']['bind'](_r606_t0);
            r606_xn$cubicto$1aao = _r606_t0['cubic-to']['bind'](_r606_t0);
            r606_xn$putshapes$9Jrj = _r606_t0['put-shapes']['bind'](_r606_t0);
            r606_xn$reverselast$3qIs = _r606_t0['reverse-last']['bind'](_r606_t0);
            r606_include = _r606_t0['include']['bind'](_r606_t0);
            r606_xn$createstroke$7Hrq = _r606_t0['create-stroke']['bind'](_r606_t0);
            r606_xn$setanchor$9Jrj = _r606_t0['set-anchor']['bind'](_r606_t0);
            r606_xn$dontexport$5sIl = function _r606_t3() {
                var _r608_t0, _r608_t1;
                return r606_currentGlyph['dontExport'] = true;
            };
            _r606_t0['gizmo'] = r4_globalTransform;
            _r606_t0['set-width'](r4_WIDTH);
            r606_xn$setwidth$9Jrj(r4_WIDTH);
            r606_xn$assignunicode$7Hrq('.');
            r606_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t191() {
            var r610_currentGlyph, r610_xn$setwidth$9Jrj, r610_xn$assignunicode$7Hrq, r610_xn$startfrom$1aao, r610_xn$lineto$5sIl, r610_xn$curveto$1aao, r610_xn$cubicto$1aao, r610_xn$putshapes$9Jrj, r610_xn$reverselast$3qIs, r610_include, r610_xn$createstroke$7Hrq, r610_xn$setanchor$9Jrj, r610_xn$dontexport$5sIl, _r610_t0, _r610_t1, _r610_t2, _r610_t3;
            _r610_t0 = this;
            r610_currentGlyph = _r610_t0;
            r610_xn$setwidth$9Jrj = _r610_t0['set-width']['bind'](_r610_t0);
            r610_xn$assignunicode$7Hrq = function _r610_t2(r611_code) {
                var r611_code, _r611_t0, _r611_t1;
                r610_currentGlyph['assign-unicode'](r611_code);
                return r4_unicodeGlyphs[r610_currentGlyph['unicode'][r610_currentGlyph['unicode']['length'] - 1]] = r610_currentGlyph;
            };
            r610_xn$startfrom$1aao = _r610_t0['start-from']['bind'](_r610_t0);
            r610_xn$lineto$5sIl = _r610_t0['line-to']['bind'](_r610_t0);
            r610_xn$curveto$1aao = _r610_t0['curve-to']['bind'](_r610_t0);
            r610_xn$cubicto$1aao = _r610_t0['cubic-to']['bind'](_r610_t0);
            r610_xn$putshapes$9Jrj = _r610_t0['put-shapes']['bind'](_r610_t0);
            r610_xn$reverselast$3qIs = _r610_t0['reverse-last']['bind'](_r610_t0);
            r610_include = _r610_t0['include']['bind'](_r610_t0);
            r610_xn$createstroke$7Hrq = _r610_t0['create-stroke']['bind'](_r610_t0);
            r610_xn$setanchor$9Jrj = _r610_t0['set-anchor']['bind'](_r610_t0);
            r610_xn$dontexport$5sIl = function _r610_t3() {
                var _r612_t0, _r612_t1;
                return r610_currentGlyph['dontExport'] = true;
            };
            _r610_t0['gizmo'] = r4_globalTransform;
            _r610_t0['set-width'](r4_WIDTH);
            r610_xn$setwidth$9Jrj(r4_WIDTH);
            r610_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t192() {
            var r614_currentGlyph, r614_xn$setwidth$9Jrj, r614_xn$assignunicode$7Hrq, r614_xn$startfrom$1aao, r614_xn$lineto$5sIl, r614_xn$curveto$1aao, r614_xn$cubicto$1aao, r614_xn$putshapes$9Jrj, r614_xn$reverselast$3qIs, r614_include, r614_xn$createstroke$7Hrq, r614_xn$setanchor$9Jrj, r614_xn$dontexport$5sIl, r614_sw, _r614_t0, _r614_t1, _r614_t2, _r614_t3;
            _r614_t0 = this;
            r614_currentGlyph = _r614_t0;
            r614_xn$setwidth$9Jrj = _r614_t0['set-width']['bind'](_r614_t0);
            r614_xn$assignunicode$7Hrq = function _r614_t2(r615_code) {
                var r615_code, _r615_t0, _r615_t1;
                r614_currentGlyph['assign-unicode'](r615_code);
                return r4_unicodeGlyphs[r614_currentGlyph['unicode'][r614_currentGlyph['unicode']['length'] - 1]] = r614_currentGlyph;
            };
            r614_xn$startfrom$1aao = _r614_t0['start-from']['bind'](_r614_t0);
            r614_xn$lineto$5sIl = _r614_t0['line-to']['bind'](_r614_t0);
            r614_xn$curveto$1aao = _r614_t0['curve-to']['bind'](_r614_t0);
            r614_xn$cubicto$1aao = _r614_t0['cubic-to']['bind'](_r614_t0);
            r614_xn$putshapes$9Jrj = _r614_t0['put-shapes']['bind'](_r614_t0);
            r614_xn$reverselast$3qIs = _r614_t0['reverse-last']['bind'](_r614_t0);
            r614_include = _r614_t0['include']['bind'](_r614_t0);
            r614_xn$createstroke$7Hrq = _r614_t0['create-stroke']['bind'](_r614_t0);
            r614_xn$setanchor$9Jrj = _r614_t0['set-anchor']['bind'](_r614_t0);
            r614_xn$dontexport$5sIl = function _r614_t3() {
                var _r616_t0, _r616_t1;
                return r614_currentGlyph['dontExport'] = true;
            };
            _r614_t0['gizmo'] = r4_globalTransform;
            _r614_t0['set-width'](r4_WIDTH);
            r614_xn$setwidth$9Jrj(r4_WIDTH);
            r614_xn$assignunicode$7Hrq(',');
            r614_include(r4_glyphs['period']);
            r614_sw = r4_PERIODSIZE * 0.5;
            r614_include(r614_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r614_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t193() {
            var r618_currentGlyph, r618_xn$setwidth$9Jrj, r618_xn$assignunicode$7Hrq, r618_xn$startfrom$1aao, r618_xn$lineto$5sIl, r618_xn$curveto$1aao, r618_xn$cubicto$1aao, r618_xn$putshapes$9Jrj, r618_xn$reverselast$3qIs, r618_include, r618_xn$createstroke$7Hrq, r618_xn$setanchor$9Jrj, r618_xn$dontexport$5sIl, _r618_t0, _r618_t1, _r618_t2, _r618_t3;
            _r618_t0 = this;
            r618_currentGlyph = _r618_t0;
            r618_xn$setwidth$9Jrj = _r618_t0['set-width']['bind'](_r618_t0);
            r618_xn$assignunicode$7Hrq = function _r618_t2(r619_code) {
                var r619_code, _r619_t0, _r619_t1;
                r618_currentGlyph['assign-unicode'](r619_code);
                return r4_unicodeGlyphs[r618_currentGlyph['unicode'][r618_currentGlyph['unicode']['length'] - 1]] = r618_currentGlyph;
            };
            r618_xn$startfrom$1aao = _r618_t0['start-from']['bind'](_r618_t0);
            r618_xn$lineto$5sIl = _r618_t0['line-to']['bind'](_r618_t0);
            r618_xn$curveto$1aao = _r618_t0['curve-to']['bind'](_r618_t0);
            r618_xn$cubicto$1aao = _r618_t0['cubic-to']['bind'](_r618_t0);
            r618_xn$putshapes$9Jrj = _r618_t0['put-shapes']['bind'](_r618_t0);
            r618_xn$reverselast$3qIs = _r618_t0['reverse-last']['bind'](_r618_t0);
            r618_include = _r618_t0['include']['bind'](_r618_t0);
            r618_xn$createstroke$7Hrq = _r618_t0['create-stroke']['bind'](_r618_t0);
            r618_xn$setanchor$9Jrj = _r618_t0['set-anchor']['bind'](_r618_t0);
            r618_xn$dontexport$5sIl = function _r618_t3() {
                var _r620_t0, _r620_t1;
                return r618_currentGlyph['dontExport'] = true;
            };
            _r618_t0['gizmo'] = r4_globalTransform;
            _r618_t0['set-width'](r4_WIDTH);
            r618_xn$setwidth$9Jrj(r4_WIDTH);
            r618_xn$assignunicode$7Hrq(':');
            r618_include(r4_glyphs['period']);
            r618_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t194() {
            var r622_currentGlyph, r622_xn$setwidth$9Jrj, r622_xn$assignunicode$7Hrq, r622_xn$startfrom$1aao, r622_xn$lineto$5sIl, r622_xn$curveto$1aao, r622_xn$cubicto$1aao, r622_xn$putshapes$9Jrj, r622_xn$reverselast$3qIs, r622_include, r622_xn$createstroke$7Hrq, r622_xn$setanchor$9Jrj, r622_xn$dontexport$5sIl, _r622_t0, _r622_t1, _r622_t2, _r622_t3;
            _r622_t0 = this;
            r622_currentGlyph = _r622_t0;
            r622_xn$setwidth$9Jrj = _r622_t0['set-width']['bind'](_r622_t0);
            r622_xn$assignunicode$7Hrq = function _r622_t2(r623_code) {
                var r623_code, _r623_t0, _r623_t1;
                r622_currentGlyph['assign-unicode'](r623_code);
                return r4_unicodeGlyphs[r622_currentGlyph['unicode'][r622_currentGlyph['unicode']['length'] - 1]] = r622_currentGlyph;
            };
            r622_xn$startfrom$1aao = _r622_t0['start-from']['bind'](_r622_t0);
            r622_xn$lineto$5sIl = _r622_t0['line-to']['bind'](_r622_t0);
            r622_xn$curveto$1aao = _r622_t0['curve-to']['bind'](_r622_t0);
            r622_xn$cubicto$1aao = _r622_t0['cubic-to']['bind'](_r622_t0);
            r622_xn$putshapes$9Jrj = _r622_t0['put-shapes']['bind'](_r622_t0);
            r622_xn$reverselast$3qIs = _r622_t0['reverse-last']['bind'](_r622_t0);
            r622_include = _r622_t0['include']['bind'](_r622_t0);
            r622_xn$createstroke$7Hrq = _r622_t0['create-stroke']['bind'](_r622_t0);
            r622_xn$setanchor$9Jrj = _r622_t0['set-anchor']['bind'](_r622_t0);
            r622_xn$dontexport$5sIl = function _r622_t3() {
                var _r624_t0, _r624_t1;
                return r622_currentGlyph['dontExport'] = true;
            };
            _r622_t0['gizmo'] = r4_globalTransform;
            _r622_t0['set-width'](r4_WIDTH);
            r622_xn$setwidth$9Jrj(r4_WIDTH);
            r622_xn$assignunicode$7Hrq(';');
            r622_include(r4_glyphs['comma']);
            r622_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t195() {
            var r626_currentGlyph, r626_xn$setwidth$9Jrj, r626_xn$assignunicode$7Hrq, r626_xn$startfrom$1aao, r626_xn$lineto$5sIl, r626_xn$curveto$1aao, r626_xn$cubicto$1aao, r626_xn$putshapes$9Jrj, r626_xn$reverselast$3qIs, r626_include, r626_xn$createstroke$7Hrq, r626_xn$setanchor$9Jrj, r626_xn$dontexport$5sIl, _r626_t0, _r626_t1, _r626_t2, _r626_t3;
            _r626_t0 = this;
            r626_currentGlyph = _r626_t0;
            r626_xn$setwidth$9Jrj = _r626_t0['set-width']['bind'](_r626_t0);
            r626_xn$assignunicode$7Hrq = function _r626_t2(r627_code) {
                var r627_code, _r627_t0, _r627_t1;
                r626_currentGlyph['assign-unicode'](r627_code);
                return r4_unicodeGlyphs[r626_currentGlyph['unicode'][r626_currentGlyph['unicode']['length'] - 1]] = r626_currentGlyph;
            };
            r626_xn$startfrom$1aao = _r626_t0['start-from']['bind'](_r626_t0);
            r626_xn$lineto$5sIl = _r626_t0['line-to']['bind'](_r626_t0);
            r626_xn$curveto$1aao = _r626_t0['curve-to']['bind'](_r626_t0);
            r626_xn$cubicto$1aao = _r626_t0['cubic-to']['bind'](_r626_t0);
            r626_xn$putshapes$9Jrj = _r626_t0['put-shapes']['bind'](_r626_t0);
            r626_xn$reverselast$3qIs = _r626_t0['reverse-last']['bind'](_r626_t0);
            r626_include = _r626_t0['include']['bind'](_r626_t0);
            r626_xn$createstroke$7Hrq = _r626_t0['create-stroke']['bind'](_r626_t0);
            r626_xn$setanchor$9Jrj = _r626_t0['set-anchor']['bind'](_r626_t0);
            r626_xn$dontexport$5sIl = function _r626_t3() {
                var _r628_t0, _r628_t1;
                return r626_currentGlyph['dontExport'] = true;
            };
            _r626_t0['gizmo'] = r4_globalTransform;
            _r626_t0['set-width'](r4_WIDTH);
            r626_xn$setwidth$9Jrj(r4_WIDTH);
            r626_xn$assignunicode$7Hrq('?');
            r626_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r626_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r626_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t196() {
            var r630_currentGlyph, r630_xn$setwidth$9Jrj, r630_xn$assignunicode$7Hrq, r630_xn$startfrom$1aao, r630_xn$lineto$5sIl, r630_xn$curveto$1aao, r630_xn$cubicto$1aao, r630_xn$putshapes$9Jrj, r630_xn$reverselast$3qIs, r630_include, r630_xn$createstroke$7Hrq, r630_xn$setanchor$9Jrj, r630_xn$dontexport$5sIl, _r630_t0, _r630_t1, _r630_t2, _r630_t3;
            _r630_t0 = this;
            r630_currentGlyph = _r630_t0;
            r630_xn$setwidth$9Jrj = _r630_t0['set-width']['bind'](_r630_t0);
            r630_xn$assignunicode$7Hrq = function _r630_t2(r631_code) {
                var r631_code, _r631_t0, _r631_t1;
                r630_currentGlyph['assign-unicode'](r631_code);
                return r4_unicodeGlyphs[r630_currentGlyph['unicode'][r630_currentGlyph['unicode']['length'] - 1]] = r630_currentGlyph;
            };
            r630_xn$startfrom$1aao = _r630_t0['start-from']['bind'](_r630_t0);
            r630_xn$lineto$5sIl = _r630_t0['line-to']['bind'](_r630_t0);
            r630_xn$curveto$1aao = _r630_t0['curve-to']['bind'](_r630_t0);
            r630_xn$cubicto$1aao = _r630_t0['cubic-to']['bind'](_r630_t0);
            r630_xn$putshapes$9Jrj = _r630_t0['put-shapes']['bind'](_r630_t0);
            r630_xn$reverselast$3qIs = _r630_t0['reverse-last']['bind'](_r630_t0);
            r630_include = _r630_t0['include']['bind'](_r630_t0);
            r630_xn$createstroke$7Hrq = _r630_t0['create-stroke']['bind'](_r630_t0);
            r630_xn$setanchor$9Jrj = _r630_t0['set-anchor']['bind'](_r630_t0);
            r630_xn$dontexport$5sIl = function _r630_t3() {
                var _r632_t0, _r632_t1;
                return r630_currentGlyph['dontExport'] = true;
            };
            _r630_t0['gizmo'] = r4_globalTransform;
            _r630_t0['set-width'](r4_WIDTH);
            r630_xn$setwidth$9Jrj(r4_WIDTH);
            r630_xn$assignunicode$7Hrq('!');
            r630_include(r630_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r630_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t197() {
            var r634_currentGlyph, r634_xn$setwidth$9Jrj, r634_xn$assignunicode$7Hrq, r634_xn$startfrom$1aao, r634_xn$lineto$5sIl, r634_xn$curveto$1aao, r634_xn$cubicto$1aao, r634_xn$putshapes$9Jrj, r634_xn$reverselast$3qIs, r634_include, r634_xn$createstroke$7Hrq, r634_xn$setanchor$9Jrj, r634_xn$dontexport$5sIl, _r634_t0, _r634_t1, _r634_t2, _r634_t3;
            _r634_t0 = this;
            r634_currentGlyph = _r634_t0;
            r634_xn$setwidth$9Jrj = _r634_t0['set-width']['bind'](_r634_t0);
            r634_xn$assignunicode$7Hrq = function _r634_t2(r635_code) {
                var r635_code, _r635_t0, _r635_t1;
                r634_currentGlyph['assign-unicode'](r635_code);
                return r4_unicodeGlyphs[r634_currentGlyph['unicode'][r634_currentGlyph['unicode']['length'] - 1]] = r634_currentGlyph;
            };
            r634_xn$startfrom$1aao = _r634_t0['start-from']['bind'](_r634_t0);
            r634_xn$lineto$5sIl = _r634_t0['line-to']['bind'](_r634_t0);
            r634_xn$curveto$1aao = _r634_t0['curve-to']['bind'](_r634_t0);
            r634_xn$cubicto$1aao = _r634_t0['cubic-to']['bind'](_r634_t0);
            r634_xn$putshapes$9Jrj = _r634_t0['put-shapes']['bind'](_r634_t0);
            r634_xn$reverselast$3qIs = _r634_t0['reverse-last']['bind'](_r634_t0);
            r634_include = _r634_t0['include']['bind'](_r634_t0);
            r634_xn$createstroke$7Hrq = _r634_t0['create-stroke']['bind'](_r634_t0);
            r634_xn$setanchor$9Jrj = _r634_t0['set-anchor']['bind'](_r634_t0);
            r634_xn$dontexport$5sIl = function _r634_t3() {
                var _r636_t0, _r636_t1;
                return r634_currentGlyph['dontExport'] = true;
            };
            _r634_t0['gizmo'] = r4_globalTransform;
            _r634_t0['set-width'](r4_WIDTH);
            r634_xn$setwidth$9Jrj(r4_WIDTH);
            r634_xn$assignunicode$7Hrq('_');
            r634_include(r634_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t198() {
            var r638_currentGlyph, r638_xn$setwidth$9Jrj, r638_xn$assignunicode$7Hrq, r638_xn$startfrom$1aao, r638_xn$lineto$5sIl, r638_xn$curveto$1aao, r638_xn$cubicto$1aao, r638_xn$putshapes$9Jrj, r638_xn$reverselast$3qIs, r638_include, r638_xn$createstroke$7Hrq, r638_xn$setanchor$9Jrj, r638_xn$dontexport$5sIl, _r638_t0, _r638_t1, _r638_t2, _r638_t3;
            _r638_t0 = this;
            r638_currentGlyph = _r638_t0;
            r638_xn$setwidth$9Jrj = _r638_t0['set-width']['bind'](_r638_t0);
            r638_xn$assignunicode$7Hrq = function _r638_t2(r639_code) {
                var r639_code, _r639_t0, _r639_t1;
                r638_currentGlyph['assign-unicode'](r639_code);
                return r4_unicodeGlyphs[r638_currentGlyph['unicode'][r638_currentGlyph['unicode']['length'] - 1]] = r638_currentGlyph;
            };
            r638_xn$startfrom$1aao = _r638_t0['start-from']['bind'](_r638_t0);
            r638_xn$lineto$5sIl = _r638_t0['line-to']['bind'](_r638_t0);
            r638_xn$curveto$1aao = _r638_t0['curve-to']['bind'](_r638_t0);
            r638_xn$cubicto$1aao = _r638_t0['cubic-to']['bind'](_r638_t0);
            r638_xn$putshapes$9Jrj = _r638_t0['put-shapes']['bind'](_r638_t0);
            r638_xn$reverselast$3qIs = _r638_t0['reverse-last']['bind'](_r638_t0);
            r638_include = _r638_t0['include']['bind'](_r638_t0);
            r638_xn$createstroke$7Hrq = _r638_t0['create-stroke']['bind'](_r638_t0);
            r638_xn$setanchor$9Jrj = _r638_t0['set-anchor']['bind'](_r638_t0);
            r638_xn$dontexport$5sIl = function _r638_t3() {
                var _r640_t0, _r640_t1;
                return r638_currentGlyph['dontExport'] = true;
            };
            _r638_t0['gizmo'] = r4_globalTransform;
            _r638_t0['set-width'](r4_WIDTH);
            r638_xn$setwidth$9Jrj(r4_WIDTH);
            r638_xn$assignunicode$7Hrq('-');
            r638_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t199() {
            var r642_currentGlyph, r642_xn$setwidth$9Jrj, r642_xn$assignunicode$7Hrq, r642_xn$startfrom$1aao, r642_xn$lineto$5sIl, r642_xn$curveto$1aao, r642_xn$cubicto$1aao, r642_xn$putshapes$9Jrj, r642_xn$reverselast$3qIs, r642_include, r642_xn$createstroke$7Hrq, r642_xn$setanchor$9Jrj, r642_xn$dontexport$5sIl, _r642_t0, _r642_t1, _r642_t2, _r642_t3;
            _r642_t0 = this;
            r642_currentGlyph = _r642_t0;
            r642_xn$setwidth$9Jrj = _r642_t0['set-width']['bind'](_r642_t0);
            r642_xn$assignunicode$7Hrq = function _r642_t2(r643_code) {
                var r643_code, _r643_t0, _r643_t1;
                r642_currentGlyph['assign-unicode'](r643_code);
                return r4_unicodeGlyphs[r642_currentGlyph['unicode'][r642_currentGlyph['unicode']['length'] - 1]] = r642_currentGlyph;
            };
            r642_xn$startfrom$1aao = _r642_t0['start-from']['bind'](_r642_t0);
            r642_xn$lineto$5sIl = _r642_t0['line-to']['bind'](_r642_t0);
            r642_xn$curveto$1aao = _r642_t0['curve-to']['bind'](_r642_t0);
            r642_xn$cubicto$1aao = _r642_t0['cubic-to']['bind'](_r642_t0);
            r642_xn$putshapes$9Jrj = _r642_t0['put-shapes']['bind'](_r642_t0);
            r642_xn$reverselast$3qIs = _r642_t0['reverse-last']['bind'](_r642_t0);
            r642_include = _r642_t0['include']['bind'](_r642_t0);
            r642_xn$createstroke$7Hrq = _r642_t0['create-stroke']['bind'](_r642_t0);
            r642_xn$setanchor$9Jrj = _r642_t0['set-anchor']['bind'](_r642_t0);
            r642_xn$dontexport$5sIl = function _r642_t3() {
                var _r644_t0, _r644_t1;
                return r642_currentGlyph['dontExport'] = true;
            };
            _r642_t0['gizmo'] = r4_globalTransform;
            _r642_t0['set-width'](r4_WIDTH);
            r642_xn$setwidth$9Jrj(r4_WIDTH);
            r642_xn$assignunicode$7Hrq('+');
            r642_include(r4_glyphs['hyphen']);
            r642_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t200() {
            var r646_currentGlyph, r646_xn$setwidth$9Jrj, r646_xn$assignunicode$7Hrq, r646_xn$startfrom$1aao, r646_xn$lineto$5sIl, r646_xn$curveto$1aao, r646_xn$cubicto$1aao, r646_xn$putshapes$9Jrj, r646_xn$reverselast$3qIs, r646_include, r646_xn$createstroke$7Hrq, r646_xn$setanchor$9Jrj, r646_xn$dontexport$5sIl, _r646_t0, _r646_t1, _r646_t2, _r646_t3;
            _r646_t0 = this;
            r646_currentGlyph = _r646_t0;
            r646_xn$setwidth$9Jrj = _r646_t0['set-width']['bind'](_r646_t0);
            r646_xn$assignunicode$7Hrq = function _r646_t2(r647_code) {
                var r647_code, _r647_t0, _r647_t1;
                r646_currentGlyph['assign-unicode'](r647_code);
                return r4_unicodeGlyphs[r646_currentGlyph['unicode'][r646_currentGlyph['unicode']['length'] - 1]] = r646_currentGlyph;
            };
            r646_xn$startfrom$1aao = _r646_t0['start-from']['bind'](_r646_t0);
            r646_xn$lineto$5sIl = _r646_t0['line-to']['bind'](_r646_t0);
            r646_xn$curveto$1aao = _r646_t0['curve-to']['bind'](_r646_t0);
            r646_xn$cubicto$1aao = _r646_t0['cubic-to']['bind'](_r646_t0);
            r646_xn$putshapes$9Jrj = _r646_t0['put-shapes']['bind'](_r646_t0);
            r646_xn$reverselast$3qIs = _r646_t0['reverse-last']['bind'](_r646_t0);
            r646_include = _r646_t0['include']['bind'](_r646_t0);
            r646_xn$createstroke$7Hrq = _r646_t0['create-stroke']['bind'](_r646_t0);
            r646_xn$setanchor$9Jrj = _r646_t0['set-anchor']['bind'](_r646_t0);
            r646_xn$dontexport$5sIl = function _r646_t3() {
                var _r648_t0, _r648_t1;
                return r646_currentGlyph['dontExport'] = true;
            };
            _r646_t0['gizmo'] = r4_globalTransform;
            _r646_t0['set-width'](r4_WIDTH);
            r646_xn$setwidth$9Jrj(r4_WIDTH);
            r646_xn$assignunicode$7Hrq('=');
            r646_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r646_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t201() {
            var r650_currentGlyph, r650_xn$setwidth$9Jrj, r650_xn$assignunicode$7Hrq, r650_xn$startfrom$1aao, r650_xn$lineto$5sIl, r650_xn$curveto$1aao, r650_xn$cubicto$1aao, r650_xn$putshapes$9Jrj, r650_xn$reverselast$3qIs, r650_include, r650_xn$createstroke$7Hrq, r650_xn$setanchor$9Jrj, r650_xn$dontexport$5sIl, _r650_t0, _r650_t1, _r650_t2, _r650_t3;
            _r650_t0 = this;
            r650_currentGlyph = _r650_t0;
            r650_xn$setwidth$9Jrj = _r650_t0['set-width']['bind'](_r650_t0);
            r650_xn$assignunicode$7Hrq = function _r650_t2(r651_code) {
                var r651_code, _r651_t0, _r651_t1;
                r650_currentGlyph['assign-unicode'](r651_code);
                return r4_unicodeGlyphs[r650_currentGlyph['unicode'][r650_currentGlyph['unicode']['length'] - 1]] = r650_currentGlyph;
            };
            r650_xn$startfrom$1aao = _r650_t0['start-from']['bind'](_r650_t0);
            r650_xn$lineto$5sIl = _r650_t0['line-to']['bind'](_r650_t0);
            r650_xn$curveto$1aao = _r650_t0['curve-to']['bind'](_r650_t0);
            r650_xn$cubicto$1aao = _r650_t0['cubic-to']['bind'](_r650_t0);
            r650_xn$putshapes$9Jrj = _r650_t0['put-shapes']['bind'](_r650_t0);
            r650_xn$reverselast$3qIs = _r650_t0['reverse-last']['bind'](_r650_t0);
            r650_include = _r650_t0['include']['bind'](_r650_t0);
            r650_xn$createstroke$7Hrq = _r650_t0['create-stroke']['bind'](_r650_t0);
            r650_xn$setanchor$9Jrj = _r650_t0['set-anchor']['bind'](_r650_t0);
            r650_xn$dontexport$5sIl = function _r650_t3() {
                var _r652_t0, _r652_t1;
                return r650_currentGlyph['dontExport'] = true;
            };
            _r650_t0['gizmo'] = r4_globalTransform;
            _r650_t0['set-width'](r4_WIDTH);
            r650_xn$setwidth$9Jrj(r4_WIDTH);
            r650_xn$assignunicode$7Hrq('|');
            r650_include(r650_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t202() {
            var r654_currentGlyph, r654_xn$setwidth$9Jrj, r654_xn$assignunicode$7Hrq, r654_xn$startfrom$1aao, r654_xn$lineto$5sIl, r654_xn$curveto$1aao, r654_xn$cubicto$1aao, r654_xn$putshapes$9Jrj, r654_xn$reverselast$3qIs, r654_include, r654_xn$createstroke$7Hrq, r654_xn$setanchor$9Jrj, r654_xn$dontexport$5sIl, r654_cor, _r654_t0, _r654_t1, _r654_t2, _r654_t3;
            _r654_t0 = this;
            r654_currentGlyph = _r654_t0;
            r654_xn$setwidth$9Jrj = _r654_t0['set-width']['bind'](_r654_t0);
            r654_xn$assignunicode$7Hrq = function _r654_t2(r655_code) {
                var r655_code, _r655_t0, _r655_t1;
                r654_currentGlyph['assign-unicode'](r655_code);
                return r4_unicodeGlyphs[r654_currentGlyph['unicode'][r654_currentGlyph['unicode']['length'] - 1]] = r654_currentGlyph;
            };
            r654_xn$startfrom$1aao = _r654_t0['start-from']['bind'](_r654_t0);
            r654_xn$lineto$5sIl = _r654_t0['line-to']['bind'](_r654_t0);
            r654_xn$curveto$1aao = _r654_t0['curve-to']['bind'](_r654_t0);
            r654_xn$cubicto$1aao = _r654_t0['cubic-to']['bind'](_r654_t0);
            r654_xn$putshapes$9Jrj = _r654_t0['put-shapes']['bind'](_r654_t0);
            r654_xn$reverselast$3qIs = _r654_t0['reverse-last']['bind'](_r654_t0);
            r654_include = _r654_t0['include']['bind'](_r654_t0);
            r654_xn$createstroke$7Hrq = _r654_t0['create-stroke']['bind'](_r654_t0);
            r654_xn$setanchor$9Jrj = _r654_t0['set-anchor']['bind'](_r654_t0);
            r654_xn$dontexport$5sIl = function _r654_t3() {
                var _r656_t0, _r656_t1;
                return r654_currentGlyph['dontExport'] = true;
            };
            _r654_t0['gizmo'] = r4_globalTransform;
            _r654_t0['set-width'](r4_WIDTH);
            r654_xn$setwidth$9Jrj(r4_WIDTH);
            r654_xn$assignunicode$7Hrq('/');
            r654_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r654_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r654_xn$lineto$5sIl(r4_SB + r4_STROKE * r654_cor, r4_parenBot);
            r654_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r654_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r654_cor, r4_parenTop);
            r654_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t203() {
            var r658_currentGlyph, r658_xn$setwidth$9Jrj, r658_xn$assignunicode$7Hrq, r658_xn$startfrom$1aao, r658_xn$lineto$5sIl, r658_xn$curveto$1aao, r658_xn$cubicto$1aao, r658_xn$putshapes$9Jrj, r658_xn$reverselast$3qIs, r658_include, r658_xn$createstroke$7Hrq, r658_xn$setanchor$9Jrj, r658_xn$dontexport$5sIl, r658_cor, _r658_t0, _r658_t1, _r658_t2, _r658_t3;
            _r658_t0 = this;
            r658_currentGlyph = _r658_t0;
            r658_xn$setwidth$9Jrj = _r658_t0['set-width']['bind'](_r658_t0);
            r658_xn$assignunicode$7Hrq = function _r658_t2(r659_code) {
                var r659_code, _r659_t0, _r659_t1;
                r658_currentGlyph['assign-unicode'](r659_code);
                return r4_unicodeGlyphs[r658_currentGlyph['unicode'][r658_currentGlyph['unicode']['length'] - 1]] = r658_currentGlyph;
            };
            r658_xn$startfrom$1aao = _r658_t0['start-from']['bind'](_r658_t0);
            r658_xn$lineto$5sIl = _r658_t0['line-to']['bind'](_r658_t0);
            r658_xn$curveto$1aao = _r658_t0['curve-to']['bind'](_r658_t0);
            r658_xn$cubicto$1aao = _r658_t0['cubic-to']['bind'](_r658_t0);
            r658_xn$putshapes$9Jrj = _r658_t0['put-shapes']['bind'](_r658_t0);
            r658_xn$reverselast$3qIs = _r658_t0['reverse-last']['bind'](_r658_t0);
            r658_include = _r658_t0['include']['bind'](_r658_t0);
            r658_xn$createstroke$7Hrq = _r658_t0['create-stroke']['bind'](_r658_t0);
            r658_xn$setanchor$9Jrj = _r658_t0['set-anchor']['bind'](_r658_t0);
            r658_xn$dontexport$5sIl = function _r658_t3() {
                var _r660_t0, _r660_t1;
                return r658_currentGlyph['dontExport'] = true;
            };
            _r658_t0['gizmo'] = r4_globalTransform;
            _r658_t0['set-width'](r4_WIDTH);
            r658_xn$setwidth$9Jrj(r4_WIDTH);
            r658_xn$assignunicode$7Hrq('\\');
            r658_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r658_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r658_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r658_cor, r4_parenBot);
            r658_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r658_xn$lineto$5sIl(r4_SB + r4_STROKE * r658_cor, r4_parenTop);
            r658_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t204() {
            var r662_currentGlyph, r662_xn$setwidth$9Jrj, r662_xn$assignunicode$7Hrq, r662_xn$startfrom$1aao, r662_xn$lineto$5sIl, r662_xn$curveto$1aao, r662_xn$cubicto$1aao, r662_xn$putshapes$9Jrj, r662_xn$reverselast$3qIs, r662_include, r662_xn$createstroke$7Hrq, r662_xn$setanchor$9Jrj, r662_xn$dontexport$5sIl, r662_fine, _r662_t0, _r662_t1, _r662_t2, _r662_t3;
            _r662_t0 = this;
            r662_currentGlyph = _r662_t0;
            r662_xn$setwidth$9Jrj = _r662_t0['set-width']['bind'](_r662_t0);
            r662_xn$assignunicode$7Hrq = function _r662_t2(r663_code) {
                var r663_code, _r663_t0, _r663_t1;
                r662_currentGlyph['assign-unicode'](r663_code);
                return r4_unicodeGlyphs[r662_currentGlyph['unicode'][r662_currentGlyph['unicode']['length'] - 1]] = r662_currentGlyph;
            };
            r662_xn$startfrom$1aao = _r662_t0['start-from']['bind'](_r662_t0);
            r662_xn$lineto$5sIl = _r662_t0['line-to']['bind'](_r662_t0);
            r662_xn$curveto$1aao = _r662_t0['curve-to']['bind'](_r662_t0);
            r662_xn$cubicto$1aao = _r662_t0['cubic-to']['bind'](_r662_t0);
            r662_xn$putshapes$9Jrj = _r662_t0['put-shapes']['bind'](_r662_t0);
            r662_xn$reverselast$3qIs = _r662_t0['reverse-last']['bind'](_r662_t0);
            r662_include = _r662_t0['include']['bind'](_r662_t0);
            r662_xn$createstroke$7Hrq = _r662_t0['create-stroke']['bind'](_r662_t0);
            r662_xn$setanchor$9Jrj = _r662_t0['set-anchor']['bind'](_r662_t0);
            r662_xn$dontexport$5sIl = function _r662_t3() {
                var _r664_t0, _r664_t1;
                return r662_currentGlyph['dontExport'] = true;
            };
            _r662_t0['gizmo'] = r4_globalTransform;
            _r662_t0['set-width'](r4_WIDTH);
            r662_xn$setwidth$9Jrj(r4_WIDTH);
            r662_xn$assignunicode$7Hrq('#');
            r662_fine = r4_adviceBlackness(4);
            r662_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r662_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r662_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r662_fine, r4_parenTop - r662_fine, r662_fine));
            r662_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r662_fine, r4_parenTop - r662_fine, r662_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t205() {
            var r666_currentGlyph, r666_xn$setwidth$9Jrj, r666_xn$assignunicode$7Hrq, r666_xn$startfrom$1aao, r666_xn$lineto$5sIl, r666_xn$curveto$1aao, r666_xn$cubicto$1aao, r666_xn$putshapes$9Jrj, r666_xn$reverselast$3qIs, r666_include, r666_xn$createstroke$7Hrq, r666_xn$setanchor$9Jrj, r666_xn$dontexport$5sIl, r666_top, r666_bot, _r666_t0, _r666_t1, _r666_t2, _r666_t3;
            _r666_t0 = this;
            r666_currentGlyph = _r666_t0;
            r666_xn$setwidth$9Jrj = _r666_t0['set-width']['bind'](_r666_t0);
            r666_xn$assignunicode$7Hrq = function _r666_t2(r667_code) {
                var r667_code, _r667_t0, _r667_t1;
                r666_currentGlyph['assign-unicode'](r667_code);
                return r4_unicodeGlyphs[r666_currentGlyph['unicode'][r666_currentGlyph['unicode']['length'] - 1]] = r666_currentGlyph;
            };
            r666_xn$startfrom$1aao = _r666_t0['start-from']['bind'](_r666_t0);
            r666_xn$lineto$5sIl = _r666_t0['line-to']['bind'](_r666_t0);
            r666_xn$curveto$1aao = _r666_t0['curve-to']['bind'](_r666_t0);
            r666_xn$cubicto$1aao = _r666_t0['cubic-to']['bind'](_r666_t0);
            r666_xn$putshapes$9Jrj = _r666_t0['put-shapes']['bind'](_r666_t0);
            r666_xn$reverselast$3qIs = _r666_t0['reverse-last']['bind'](_r666_t0);
            r666_include = _r666_t0['include']['bind'](_r666_t0);
            r666_xn$createstroke$7Hrq = _r666_t0['create-stroke']['bind'](_r666_t0);
            r666_xn$setanchor$9Jrj = _r666_t0['set-anchor']['bind'](_r666_t0);
            r666_xn$dontexport$5sIl = function _r666_t3() {
                var _r668_t0, _r668_t1;
                return r666_currentGlyph['dontExport'] = true;
            };
            _r666_t0['gizmo'] = r4_globalTransform;
            _r666_t0['set-width'](r4_WIDTH);
            r666_xn$setwidth$9Jrj(r4_WIDTH);
            r666_xn$assignunicode$7Hrq('<');
            r666_top = r0_mix(0, r4_CAP, 0.75);
            r666_bot = r0_mix(0, r4_CAP, 0.1);
            r666_include(r666_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r666_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r666_top, r666_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r666_include(r666_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r666_top, r666_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r666_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t206() {
            var r670_currentGlyph, r670_xn$setwidth$9Jrj, r670_xn$assignunicode$7Hrq, r670_xn$startfrom$1aao, r670_xn$lineto$5sIl, r670_xn$curveto$1aao, r670_xn$cubicto$1aao, r670_xn$putshapes$9Jrj, r670_xn$reverselast$3qIs, r670_include, r670_xn$createstroke$7Hrq, r670_xn$setanchor$9Jrj, r670_xn$dontexport$5sIl, r670_top, r670_bot, _r670_t0, _r670_t1, _r670_t2, _r670_t3;
            _r670_t0 = this;
            r670_currentGlyph = _r670_t0;
            r670_xn$setwidth$9Jrj = _r670_t0['set-width']['bind'](_r670_t0);
            r670_xn$assignunicode$7Hrq = function _r670_t2(r671_code) {
                var r671_code, _r671_t0, _r671_t1;
                r670_currentGlyph['assign-unicode'](r671_code);
                return r4_unicodeGlyphs[r670_currentGlyph['unicode'][r670_currentGlyph['unicode']['length'] - 1]] = r670_currentGlyph;
            };
            r670_xn$startfrom$1aao = _r670_t0['start-from']['bind'](_r670_t0);
            r670_xn$lineto$5sIl = _r670_t0['line-to']['bind'](_r670_t0);
            r670_xn$curveto$1aao = _r670_t0['curve-to']['bind'](_r670_t0);
            r670_xn$cubicto$1aao = _r670_t0['cubic-to']['bind'](_r670_t0);
            r670_xn$putshapes$9Jrj = _r670_t0['put-shapes']['bind'](_r670_t0);
            r670_xn$reverselast$3qIs = _r670_t0['reverse-last']['bind'](_r670_t0);
            r670_include = _r670_t0['include']['bind'](_r670_t0);
            r670_xn$createstroke$7Hrq = _r670_t0['create-stroke']['bind'](_r670_t0);
            r670_xn$setanchor$9Jrj = _r670_t0['set-anchor']['bind'](_r670_t0);
            r670_xn$dontexport$5sIl = function _r670_t3() {
                var _r672_t0, _r672_t1;
                return r670_currentGlyph['dontExport'] = true;
            };
            _r670_t0['gizmo'] = r4_globalTransform;
            _r670_t0['set-width'](r4_WIDTH);
            r670_xn$setwidth$9Jrj(r4_WIDTH);
            r670_xn$assignunicode$7Hrq('>');
            r670_top = r0_mix(0, r4_CAP, 0.75);
            r670_bot = r0_mix(0, r4_CAP, 0.1);
            r670_include(r670_xn$createstroke$7Hrq()['start-from'](r4_SB, r670_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r670_top, r670_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r670_include(r670_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r670_top, r670_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r670_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t207() {
            var r674_currentGlyph, r674_xn$setwidth$9Jrj, r674_xn$assignunicode$7Hrq, r674_xn$startfrom$1aao, r674_xn$lineto$5sIl, r674_xn$curveto$1aao, r674_xn$cubicto$1aao, r674_xn$putshapes$9Jrj, r674_xn$reverselast$3qIs, r674_include, r674_xn$createstroke$7Hrq, r674_xn$setanchor$9Jrj, r674_xn$dontexport$5sIl, _r674_t0, _r674_t1, _r674_t2, _r674_t3;
            _r674_t0 = this;
            r674_currentGlyph = _r674_t0;
            r674_xn$setwidth$9Jrj = _r674_t0['set-width']['bind'](_r674_t0);
            r674_xn$assignunicode$7Hrq = function _r674_t2(r675_code) {
                var r675_code, _r675_t0, _r675_t1;
                r674_currentGlyph['assign-unicode'](r675_code);
                return r4_unicodeGlyphs[r674_currentGlyph['unicode'][r674_currentGlyph['unicode']['length'] - 1]] = r674_currentGlyph;
            };
            r674_xn$startfrom$1aao = _r674_t0['start-from']['bind'](_r674_t0);
            r674_xn$lineto$5sIl = _r674_t0['line-to']['bind'](_r674_t0);
            r674_xn$curveto$1aao = _r674_t0['curve-to']['bind'](_r674_t0);
            r674_xn$cubicto$1aao = _r674_t0['cubic-to']['bind'](_r674_t0);
            r674_xn$putshapes$9Jrj = _r674_t0['put-shapes']['bind'](_r674_t0);
            r674_xn$reverselast$3qIs = _r674_t0['reverse-last']['bind'](_r674_t0);
            r674_include = _r674_t0['include']['bind'](_r674_t0);
            r674_xn$createstroke$7Hrq = _r674_t0['create-stroke']['bind'](_r674_t0);
            r674_xn$setanchor$9Jrj = _r674_t0['set-anchor']['bind'](_r674_t0);
            r674_xn$dontexport$5sIl = function _r674_t3() {
                var _r676_t0, _r676_t1;
                return r674_currentGlyph['dontExport'] = true;
            };
            _r674_t0['gizmo'] = r4_globalTransform;
            _r674_t0['set-width'](r4_WIDTH);
            r674_xn$setwidth$9Jrj(r4_WIDTH);
            r674_xn$assignunicode$7Hrq(39);
            r674_include(r674_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t208() {
            var r678_currentGlyph, r678_xn$setwidth$9Jrj, r678_xn$assignunicode$7Hrq, r678_xn$startfrom$1aao, r678_xn$lineto$5sIl, r678_xn$curveto$1aao, r678_xn$cubicto$1aao, r678_xn$putshapes$9Jrj, r678_xn$reverselast$3qIs, r678_include, r678_xn$createstroke$7Hrq, r678_xn$setanchor$9Jrj, r678_xn$dontexport$5sIl, _r678_t0, _r678_t1, _r678_t2, _r678_t3;
            _r678_t0 = this;
            r678_currentGlyph = _r678_t0;
            r678_xn$setwidth$9Jrj = _r678_t0['set-width']['bind'](_r678_t0);
            r678_xn$assignunicode$7Hrq = function _r678_t2(r679_code) {
                var r679_code, _r679_t0, _r679_t1;
                r678_currentGlyph['assign-unicode'](r679_code);
                return r4_unicodeGlyphs[r678_currentGlyph['unicode'][r678_currentGlyph['unicode']['length'] - 1]] = r678_currentGlyph;
            };
            r678_xn$startfrom$1aao = _r678_t0['start-from']['bind'](_r678_t0);
            r678_xn$lineto$5sIl = _r678_t0['line-to']['bind'](_r678_t0);
            r678_xn$curveto$1aao = _r678_t0['curve-to']['bind'](_r678_t0);
            r678_xn$cubicto$1aao = _r678_t0['cubic-to']['bind'](_r678_t0);
            r678_xn$putshapes$9Jrj = _r678_t0['put-shapes']['bind'](_r678_t0);
            r678_xn$reverselast$3qIs = _r678_t0['reverse-last']['bind'](_r678_t0);
            r678_include = _r678_t0['include']['bind'](_r678_t0);
            r678_xn$createstroke$7Hrq = _r678_t0['create-stroke']['bind'](_r678_t0);
            r678_xn$setanchor$9Jrj = _r678_t0['set-anchor']['bind'](_r678_t0);
            r678_xn$dontexport$5sIl = function _r678_t3() {
                var _r680_t0, _r680_t1;
                return r678_currentGlyph['dontExport'] = true;
            };
            _r678_t0['gizmo'] = r4_globalTransform;
            _r678_t0['set-width'](r4_WIDTH);
            r678_xn$setwidth$9Jrj(r4_WIDTH);
            r678_xn$assignunicode$7Hrq(34);
            r678_include(r678_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r678_include(r678_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t209() {
            var r682_currentGlyph, r682_xn$setwidth$9Jrj, r682_xn$assignunicode$7Hrq, r682_xn$startfrom$1aao, r682_xn$lineto$5sIl, r682_xn$curveto$1aao, r682_xn$cubicto$1aao, r682_xn$putshapes$9Jrj, r682_xn$reverselast$3qIs, r682_include, r682_xn$createstroke$7Hrq, r682_xn$setanchor$9Jrj, r682_xn$dontexport$5sIl, r682_radius, r682_centery, r682_fine, r682_final, r682_j, _r682_t0, _r682_t1, _r682_t2, _r682_t3, _r682_t4, _r682_t5;
            _r682_t2 = this;
            r682_currentGlyph = _r682_t2;
            r682_xn$setwidth$9Jrj = _r682_t2['set-width']['bind'](_r682_t2);
            r682_xn$assignunicode$7Hrq = function _r682_t4(r683_code) {
                var r683_code, _r683_t0, _r683_t1;
                r682_currentGlyph['assign-unicode'](r683_code);
                return r4_unicodeGlyphs[r682_currentGlyph['unicode'][r682_currentGlyph['unicode']['length'] - 1]] = r682_currentGlyph;
            };
            r682_xn$startfrom$1aao = _r682_t2['start-from']['bind'](_r682_t2);
            r682_xn$lineto$5sIl = _r682_t2['line-to']['bind'](_r682_t2);
            r682_xn$curveto$1aao = _r682_t2['curve-to']['bind'](_r682_t2);
            r682_xn$cubicto$1aao = _r682_t2['cubic-to']['bind'](_r682_t2);
            r682_xn$putshapes$9Jrj = _r682_t2['put-shapes']['bind'](_r682_t2);
            r682_xn$reverselast$3qIs = _r682_t2['reverse-last']['bind'](_r682_t2);
            r682_include = _r682_t2['include']['bind'](_r682_t2);
            r682_xn$createstroke$7Hrq = _r682_t2['create-stroke']['bind'](_r682_t2);
            r682_xn$setanchor$9Jrj = _r682_t2['set-anchor']['bind'](_r682_t2);
            r682_xn$dontexport$5sIl = function _r682_t5() {
                var _r684_t0, _r684_t1;
                return r682_currentGlyph['dontExport'] = true;
            };
            _r682_t2['gizmo'] = r4_globalTransform;
            _r682_t2['set-width'](r4_WIDTH);
            r682_xn$setwidth$9Jrj(r4_WIDTH);
            r682_xn$assignunicode$7Hrq('*');
            r682_radius = r4_LONGJUT * 1.2;
            r682_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r682_fine = r4_STROKE * 0.4;
            r682_final = 0.5 * Math['min'](r4_STROKE, r682_radius * Math['PI'] * 2 / 10);
            _r682_t0 = 0;
            _r682_t1 = 5;
            r682_j = _r682_t0;
            for (; r682_j < _r682_t1; r682_j = r682_j + 1) {
                r682_include(r682_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r682_centery)['set-width'](r682_fine, r682_fine)['line-to'](r4_MIDDLE + r682_radius * Math['sin'](r682_j / 5 * Math['PI'] * 2), r682_centery + r682_radius * Math['cos'](r682_j / 5 * Math['PI'] * 2))['set-width'](r682_final, r682_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t210() {
            var r687_currentGlyph, r687_xn$setwidth$9Jrj, r687_xn$assignunicode$7Hrq, r687_xn$startfrom$1aao, r687_xn$lineto$5sIl, r687_xn$curveto$1aao, r687_xn$cubicto$1aao, r687_xn$putshapes$9Jrj, r687_xn$reverselast$3qIs, r687_include, r687_xn$createstroke$7Hrq, r687_xn$setanchor$9Jrj, r687_xn$dontexport$5sIl, r687_percentDotSize, r687_cor, _r687_t0, _r687_t1, _r687_t2, _r687_t3;
            _r687_t0 = this;
            r687_currentGlyph = _r687_t0;
            r687_xn$setwidth$9Jrj = _r687_t0['set-width']['bind'](_r687_t0);
            r687_xn$assignunicode$7Hrq = function _r687_t2(r688_code) {
                var r688_code, _r688_t0, _r688_t1;
                r687_currentGlyph['assign-unicode'](r688_code);
                return r4_unicodeGlyphs[r687_currentGlyph['unicode'][r687_currentGlyph['unicode']['length'] - 1]] = r687_currentGlyph;
            };
            r687_xn$startfrom$1aao = _r687_t0['start-from']['bind'](_r687_t0);
            r687_xn$lineto$5sIl = _r687_t0['line-to']['bind'](_r687_t0);
            r687_xn$curveto$1aao = _r687_t0['curve-to']['bind'](_r687_t0);
            r687_xn$cubicto$1aao = _r687_t0['cubic-to']['bind'](_r687_t0);
            r687_xn$putshapes$9Jrj = _r687_t0['put-shapes']['bind'](_r687_t0);
            r687_xn$reverselast$3qIs = _r687_t0['reverse-last']['bind'](_r687_t0);
            r687_include = _r687_t0['include']['bind'](_r687_t0);
            r687_xn$createstroke$7Hrq = _r687_t0['create-stroke']['bind'](_r687_t0);
            r687_xn$setanchor$9Jrj = _r687_t0['set-anchor']['bind'](_r687_t0);
            r687_xn$dontexport$5sIl = function _r687_t3() {
                var _r689_t0, _r689_t1;
                return r687_currentGlyph['dontExport'] = true;
            };
            _r687_t0['gizmo'] = r4_globalTransform;
            _r687_t0['set-width'](r4_WIDTH);
            r687_xn$setwidth$9Jrj(r4_WIDTH);
            r687_xn$assignunicode$7Hrq('%');
            r687_percentDotSize = 0.3;
            r687_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r687_xn$startfrom$1aao(r4_SB, 0);
            r687_xn$lineto$5sIl(r4_SB + r4_STROKE * r687_cor, 0);
            r687_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r687_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r687_cor, r4_CAP);
            r687_include(r687_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r687_include(r687_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cent', function _r4_t211() {
            var r691_currentGlyph, r691_xn$setwidth$9Jrj, r691_xn$assignunicode$7Hrq, r691_xn$startfrom$1aao, r691_xn$lineto$5sIl, r691_xn$curveto$1aao, r691_xn$cubicto$1aao, r691_xn$putshapes$9Jrj, r691_xn$reverselast$3qIs, r691_include, r691_xn$createstroke$7Hrq, r691_xn$setanchor$9Jrj, r691_xn$dontexport$5sIl, _r691_t0, _r691_t1, _r691_t2, _r691_t3;
            _r691_t0 = this;
            r691_currentGlyph = _r691_t0;
            r691_xn$setwidth$9Jrj = _r691_t0['set-width']['bind'](_r691_t0);
            r691_xn$assignunicode$7Hrq = function _r691_t2(r692_code) {
                var r692_code, _r692_t0, _r692_t1;
                r691_currentGlyph['assign-unicode'](r692_code);
                return r4_unicodeGlyphs[r691_currentGlyph['unicode'][r691_currentGlyph['unicode']['length'] - 1]] = r691_currentGlyph;
            };
            r691_xn$startfrom$1aao = _r691_t0['start-from']['bind'](_r691_t0);
            r691_xn$lineto$5sIl = _r691_t0['line-to']['bind'](_r691_t0);
            r691_xn$curveto$1aao = _r691_t0['curve-to']['bind'](_r691_t0);
            r691_xn$cubicto$1aao = _r691_t0['cubic-to']['bind'](_r691_t0);
            r691_xn$putshapes$9Jrj = _r691_t0['put-shapes']['bind'](_r691_t0);
            r691_xn$reverselast$3qIs = _r691_t0['reverse-last']['bind'](_r691_t0);
            r691_include = _r691_t0['include']['bind'](_r691_t0);
            r691_xn$createstroke$7Hrq = _r691_t0['create-stroke']['bind'](_r691_t0);
            r691_xn$setanchor$9Jrj = _r691_t0['set-anchor']['bind'](_r691_t0);
            r691_xn$dontexport$5sIl = function _r691_t3() {
                var _r693_t0, _r693_t1;
                return r691_currentGlyph['dontExport'] = true;
            };
            _r691_t0['gizmo'] = r4_globalTransform;
            _r691_t0['set-width'](r4_WIDTH);
            r691_xn$assignunicode$7Hrq(162);
            r691_include(r4_glyphs['c'], r4_AS_BASE);
            r691_include(r691_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_DESCENDER / 2));
            r691_include(r691_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('yen', function _r4_t212() {
            var r695_currentGlyph, r695_xn$setwidth$9Jrj, r695_xn$assignunicode$7Hrq, r695_xn$startfrom$1aao, r695_xn$lineto$5sIl, r695_xn$curveto$1aao, r695_xn$cubicto$1aao, r695_xn$putshapes$9Jrj, r695_xn$reverselast$3qIs, r695_include, r695_xn$createstroke$7Hrq, r695_xn$setanchor$9Jrj, r695_xn$dontexport$5sIl, _r695_t0, _r695_t1, _r695_t2, _r695_t3;
            _r695_t0 = this;
            r695_currentGlyph = _r695_t0;
            r695_xn$setwidth$9Jrj = _r695_t0['set-width']['bind'](_r695_t0);
            r695_xn$assignunicode$7Hrq = function _r695_t2(r696_code) {
                var r696_code, _r696_t0, _r696_t1;
                r695_currentGlyph['assign-unicode'](r696_code);
                return r4_unicodeGlyphs[r695_currentGlyph['unicode'][r695_currentGlyph['unicode']['length'] - 1]] = r695_currentGlyph;
            };
            r695_xn$startfrom$1aao = _r695_t0['start-from']['bind'](_r695_t0);
            r695_xn$lineto$5sIl = _r695_t0['line-to']['bind'](_r695_t0);
            r695_xn$curveto$1aao = _r695_t0['curve-to']['bind'](_r695_t0);
            r695_xn$cubicto$1aao = _r695_t0['cubic-to']['bind'](_r695_t0);
            r695_xn$putshapes$9Jrj = _r695_t0['put-shapes']['bind'](_r695_t0);
            r695_xn$reverselast$3qIs = _r695_t0['reverse-last']['bind'](_r695_t0);
            r695_include = _r695_t0['include']['bind'](_r695_t0);
            r695_xn$createstroke$7Hrq = _r695_t0['create-stroke']['bind'](_r695_t0);
            r695_xn$setanchor$9Jrj = _r695_t0['set-anchor']['bind'](_r695_t0);
            r695_xn$dontexport$5sIl = function _r695_t3() {
                var _r697_t0, _r697_t1;
                return r695_currentGlyph['dontExport'] = true;
            };
            _r695_t0['gizmo'] = r4_globalTransform;
            _r695_t0['set-width'](r4_WIDTH);
            r695_xn$assignunicode$7Hrq(165);
            r695_include(r4_glyphs['Y'], r4_AS_BASE);
            r695_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.45));
            r695_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.25));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('section', function _r4_t213() {
            var r699_currentGlyph, r699_xn$setwidth$9Jrj, r699_xn$assignunicode$7Hrq, r699_xn$startfrom$1aao, r699_xn$lineto$5sIl, r699_xn$curveto$1aao, r699_xn$cubicto$1aao, r699_xn$putshapes$9Jrj, r699_xn$reverselast$3qIs, r699_include, r699_xn$createstroke$7Hrq, r699_xn$setanchor$9Jrj, r699_xn$dontexport$5sIl, r699_top, r699_bot, r699_sma, r699_extension1, r699_extension2, r699_extension3x, r699_extension3y, _r699_t0, _r699_t1, _r699_t2, _r699_t3;
            _r699_t0 = this;
            r699_currentGlyph = _r699_t0;
            r699_xn$setwidth$9Jrj = _r699_t0['set-width']['bind'](_r699_t0);
            r699_xn$assignunicode$7Hrq = function _r699_t2(r700_code) {
                var r700_code, _r700_t0, _r700_t1;
                r699_currentGlyph['assign-unicode'](r700_code);
                return r4_unicodeGlyphs[r699_currentGlyph['unicode'][r699_currentGlyph['unicode']['length'] - 1]] = r699_currentGlyph;
            };
            r699_xn$startfrom$1aao = _r699_t0['start-from']['bind'](_r699_t0);
            r699_xn$lineto$5sIl = _r699_t0['line-to']['bind'](_r699_t0);
            r699_xn$curveto$1aao = _r699_t0['curve-to']['bind'](_r699_t0);
            r699_xn$cubicto$1aao = _r699_t0['cubic-to']['bind'](_r699_t0);
            r699_xn$putshapes$9Jrj = _r699_t0['put-shapes']['bind'](_r699_t0);
            r699_xn$reverselast$3qIs = _r699_t0['reverse-last']['bind'](_r699_t0);
            r699_include = _r699_t0['include']['bind'](_r699_t0);
            r699_xn$createstroke$7Hrq = _r699_t0['create-stroke']['bind'](_r699_t0);
            r699_xn$setanchor$9Jrj = _r699_t0['set-anchor']['bind'](_r699_t0);
            r699_xn$dontexport$5sIl = function _r699_t3() {
                var _r701_t0, _r701_t1;
                return r699_currentGlyph['dontExport'] = true;
            };
            _r699_t0['gizmo'] = r4_globalTransform;
            _r699_t0['set-width'](r4_WIDTH);
            r699_xn$assignunicode$7Hrq(167);
            r699_top = r4_parenTop;
            r699_bot = r4_parenBot;
            r699_sma = r4_SMOOTHA * 0.85;
            r699_extension1 = 0.5;
            r699_extension2 = 0.625;
            r699_extension3x = 0.5;
            r699_extension3y = r0_mix(r699_extension1, 1 - r699_sma / (r699_top - r699_bot), 0.5);
            r699_include(r4_XSHookUpper(r699_top, r4_SB, r4_MIDDLE, r4_RIGHTSB, r699_sma, r4_HOOK));
            r699_include(r4_sStrand(r699_top - r699_sma, r0_mix(r699_bot, r699_top, r699_extension1)));
            r699_include(r4_sStrand(r0_mix(r699_top, r699_bot, r699_extension1), r699_bot + r699_sma));
            r699_include(r4_XSHookLower(r699_bot, r4_SB, r4_MIDDLE, r4_RIGHTSB, r699_sma, r4_HOOK));
            r699_include(r699_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r0_mix(r699_top, r699_bot, r699_extension1) - r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_SB + r4_HALFSTROKE, r0_mix(r699_bot, r699_top, r699_extension2), r0_mix(r4_SB + r4_HALFSTROKE, r4_RIGHTSB - r4_HALFSTROKE, r699_extension3x), r0_mix(r699_bot, r699_top, r699_extension3y)));
            r699_include(r699_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r699_bot, r699_top, r699_extension1) + r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r699_top, r699_bot, r699_extension2), r0_mix(r4_RIGHTSB - r4_HALFSTROKE, r4_SB + r4_HALFSTROKE, r699_extension3x), r0_mix(r699_top, r699_bot, r699_extension3y)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plusminus', function _r4_t214() {
            var r703_currentGlyph, r703_xn$setwidth$9Jrj, r703_xn$assignunicode$7Hrq, r703_xn$startfrom$1aao, r703_xn$lineto$5sIl, r703_xn$curveto$1aao, r703_xn$cubicto$1aao, r703_xn$putshapes$9Jrj, r703_xn$reverselast$3qIs, r703_include, r703_xn$createstroke$7Hrq, r703_xn$setanchor$9Jrj, r703_xn$dontexport$5sIl, _r703_t0, _r703_t1, _r703_t2, _r703_t3;
            _r703_t0 = this;
            r703_currentGlyph = _r703_t0;
            r703_xn$setwidth$9Jrj = _r703_t0['set-width']['bind'](_r703_t0);
            r703_xn$assignunicode$7Hrq = function _r703_t2(r704_code) {
                var r704_code, _r704_t0, _r704_t1;
                r703_currentGlyph['assign-unicode'](r704_code);
                return r4_unicodeGlyphs[r703_currentGlyph['unicode'][r703_currentGlyph['unicode']['length'] - 1]] = r703_currentGlyph;
            };
            r703_xn$startfrom$1aao = _r703_t0['start-from']['bind'](_r703_t0);
            r703_xn$lineto$5sIl = _r703_t0['line-to']['bind'](_r703_t0);
            r703_xn$curveto$1aao = _r703_t0['curve-to']['bind'](_r703_t0);
            r703_xn$cubicto$1aao = _r703_t0['cubic-to']['bind'](_r703_t0);
            r703_xn$putshapes$9Jrj = _r703_t0['put-shapes']['bind'](_r703_t0);
            r703_xn$reverselast$3qIs = _r703_t0['reverse-last']['bind'](_r703_t0);
            r703_include = _r703_t0['include']['bind'](_r703_t0);
            r703_xn$createstroke$7Hrq = _r703_t0['create-stroke']['bind'](_r703_t0);
            r703_xn$setanchor$9Jrj = _r703_t0['set-anchor']['bind'](_r703_t0);
            r703_xn$dontexport$5sIl = function _r703_t3() {
                var _r705_t0, _r705_t1;
                return r703_currentGlyph['dontExport'] = true;
            };
            _r703_t0['gizmo'] = r4_globalTransform;
            _r703_t0['set-width'](r4_WIDTH);
            r703_xn$assignunicode$7Hrq(177);
            r703_include(r4_glyphs['underscore']);
            r703_include(r4_glyphs['plus']);
            return void 0;
        });
        r4_isAboveMark = function _r4_t215(r706_mark) {
            var r706_mark, _r706_t0, _r706_t1;
            return r706_mark && r706_mark['anchors'] && r706_mark['anchors']['above'] && r706_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t224 = r4_allFound = false;
                        else
                            _r4_t224 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t225 = r4_hasMarkAbove = true;
                        else
                            _r4_t225 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t227 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t227 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t228 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t228 = void 0;
                        _r4_t226 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t229(r709_part) {
                            var r709_part, _r709_t0, _r709_t1;
                            return r709_part['name'];
                        })['join']('_'), function _r4_t230() {
                            var r711_currentGlyph, r711_xn$setwidth$9Jrj, r711_xn$assignunicode$7Hrq, r711_xn$startfrom$1aao, r711_xn$lineto$5sIl, r711_xn$curveto$1aao, r711_xn$cubicto$1aao, r711_xn$putshapes$9Jrj, r711_xn$reverselast$3qIs, r711_include, r711_xn$createstroke$7Hrq, r711_xn$setanchor$9Jrj, r711_xn$dontexport$5sIl, r711_part, _r711_t0, _r711_t1, _r711_t2, _r711_t3, _r711_t4, _r711_t5, _r711_t6;
                            _r711_t3 = this;
                            r711_currentGlyph = _r711_t3;
                            r711_xn$setwidth$9Jrj = _r711_t3['set-width']['bind'](_r711_t3);
                            r711_xn$assignunicode$7Hrq = function _r711_t5(r712_code) {
                                var r712_code, _r712_t0, _r712_t1;
                                r711_currentGlyph['assign-unicode'](r712_code);
                                return r4_unicodeGlyphs[r711_currentGlyph['unicode'][r711_currentGlyph['unicode']['length'] - 1]] = r711_currentGlyph;
                            };
                            r711_xn$startfrom$1aao = _r711_t3['start-from']['bind'](_r711_t3);
                            r711_xn$lineto$5sIl = _r711_t3['line-to']['bind'](_r711_t3);
                            r711_xn$curveto$1aao = _r711_t3['curve-to']['bind'](_r711_t3);
                            r711_xn$cubicto$1aao = _r711_t3['cubic-to']['bind'](_r711_t3);
                            r711_xn$putshapes$9Jrj = _r711_t3['put-shapes']['bind'](_r711_t3);
                            r711_xn$reverselast$3qIs = _r711_t3['reverse-last']['bind'](_r711_t3);
                            r711_include = _r711_t3['include']['bind'](_r711_t3);
                            r711_xn$createstroke$7Hrq = _r711_t3['create-stroke']['bind'](_r711_t3);
                            r711_xn$setanchor$9Jrj = _r711_t3['set-anchor']['bind'](_r711_t3);
                            r711_xn$dontexport$5sIl = function _r711_t6() {
                                var _r713_t0, _r713_t1;
                                return r711_currentGlyph['dontExport'] = true;
                            };
                            _r711_t3['gizmo'] = r4_globalTransform;
                            _r711_t3['set-width'](r4_WIDTH);
                            r711_xn$assignunicode$7Hrq(r4_code);
                            r711_include(r4_parts[0], r4_AS_BASE);
                            _r711_t0 = r4_parts['slice'](1);
                            _r711_t1 = _r711_t0['length'];
                            _r711_t2 = 0;
                            for (; _r711_t2 < _r711_t1; _r711_t2 = _r711_t2 + 1) {
                                r711_part = _r711_t0[_r711_t2];
                                r711_include(r711_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t217 = _r4_t226;
                }
                _r4_t216 = _r4_t217;
            } else
                _r4_t216 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t218() {
            var r716_currentGlyph, r716_xn$setwidth$9Jrj, r716_xn$assignunicode$7Hrq, r716_xn$startfrom$1aao, r716_xn$lineto$5sIl, r716_xn$curveto$1aao, r716_xn$cubicto$1aao, r716_xn$putshapes$9Jrj, r716_xn$reverselast$3qIs, r716_include, r716_xn$createstroke$7Hrq, r716_xn$setanchor$9Jrj, r716_xn$dontexport$5sIl, _r716_t0, _r716_t1, _r716_t2, _r716_t3;
            _r716_t0 = this;
            r716_currentGlyph = _r716_t0;
            r716_xn$setwidth$9Jrj = _r716_t0['set-width']['bind'](_r716_t0);
            r716_xn$assignunicode$7Hrq = function _r716_t2(r717_code) {
                var r717_code, _r717_t0, _r717_t1;
                r716_currentGlyph['assign-unicode'](r717_code);
                return r4_unicodeGlyphs[r716_currentGlyph['unicode'][r716_currentGlyph['unicode']['length'] - 1]] = r716_currentGlyph;
            };
            r716_xn$startfrom$1aao = _r716_t0['start-from']['bind'](_r716_t0);
            r716_xn$lineto$5sIl = _r716_t0['line-to']['bind'](_r716_t0);
            r716_xn$curveto$1aao = _r716_t0['curve-to']['bind'](_r716_t0);
            r716_xn$cubicto$1aao = _r716_t0['cubic-to']['bind'](_r716_t0);
            r716_xn$putshapes$9Jrj = _r716_t0['put-shapes']['bind'](_r716_t0);
            r716_xn$reverselast$3qIs = _r716_t0['reverse-last']['bind'](_r716_t0);
            r716_include = _r716_t0['include']['bind'](_r716_t0);
            r716_xn$createstroke$7Hrq = _r716_t0['create-stroke']['bind'](_r716_t0);
            r716_xn$setanchor$9Jrj = _r716_t0['set-anchor']['bind'](_r716_t0);
            r716_xn$dontexport$5sIl = function _r716_t3() {
                var _r718_t0, _r718_t1;
                return r716_currentGlyph['dontExport'] = true;
            };
            _r716_t0['gizmo'] = r4_globalTransform;
            _r716_t0['set-width'](r4_WIDTH);
            r716_xn$assignunicode$7Hrq('`');
            r716_include(r4_glyphs['space'], r4_AS_BASE);
            r716_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t219() {
            var r720_currentGlyph, r720_xn$setwidth$9Jrj, r720_xn$assignunicode$7Hrq, r720_xn$startfrom$1aao, r720_xn$lineto$5sIl, r720_xn$curveto$1aao, r720_xn$cubicto$1aao, r720_xn$putshapes$9Jrj, r720_xn$reverselast$3qIs, r720_include, r720_xn$createstroke$7Hrq, r720_xn$setanchor$9Jrj, r720_xn$dontexport$5sIl, _r720_t0, _r720_t1, _r720_t2, _r720_t3;
            _r720_t0 = this;
            r720_currentGlyph = _r720_t0;
            r720_xn$setwidth$9Jrj = _r720_t0['set-width']['bind'](_r720_t0);
            r720_xn$assignunicode$7Hrq = function _r720_t2(r721_code) {
                var r721_code, _r721_t0, _r721_t1;
                r720_currentGlyph['assign-unicode'](r721_code);
                return r4_unicodeGlyphs[r720_currentGlyph['unicode'][r720_currentGlyph['unicode']['length'] - 1]] = r720_currentGlyph;
            };
            r720_xn$startfrom$1aao = _r720_t0['start-from']['bind'](_r720_t0);
            r720_xn$lineto$5sIl = _r720_t0['line-to']['bind'](_r720_t0);
            r720_xn$curveto$1aao = _r720_t0['curve-to']['bind'](_r720_t0);
            r720_xn$cubicto$1aao = _r720_t0['cubic-to']['bind'](_r720_t0);
            r720_xn$putshapes$9Jrj = _r720_t0['put-shapes']['bind'](_r720_t0);
            r720_xn$reverselast$3qIs = _r720_t0['reverse-last']['bind'](_r720_t0);
            r720_include = _r720_t0['include']['bind'](_r720_t0);
            r720_xn$createstroke$7Hrq = _r720_t0['create-stroke']['bind'](_r720_t0);
            r720_xn$setanchor$9Jrj = _r720_t0['set-anchor']['bind'](_r720_t0);
            r720_xn$dontexport$5sIl = function _r720_t3() {
                var _r722_t0, _r722_t1;
                return r720_currentGlyph['dontExport'] = true;
            };
            _r720_t0['gizmo'] = r4_globalTransform;
            _r720_t0['set-width'](r4_WIDTH);
            r720_xn$assignunicode$7Hrq(180);
            r720_include(r4_glyphs['space'], r4_AS_BASE);
            r720_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t220() {
            var r724_currentGlyph, r724_xn$setwidth$9Jrj, r724_xn$assignunicode$7Hrq, r724_xn$startfrom$1aao, r724_xn$lineto$5sIl, r724_xn$curveto$1aao, r724_xn$cubicto$1aao, r724_xn$putshapes$9Jrj, r724_xn$reverselast$3qIs, r724_include, r724_xn$createstroke$7Hrq, r724_xn$setanchor$9Jrj, r724_xn$dontexport$5sIl, _r724_t0, _r724_t1, _r724_t2, _r724_t3;
            _r724_t0 = this;
            r724_currentGlyph = _r724_t0;
            r724_xn$setwidth$9Jrj = _r724_t0['set-width']['bind'](_r724_t0);
            r724_xn$assignunicode$7Hrq = function _r724_t2(r725_code) {
                var r725_code, _r725_t0, _r725_t1;
                r724_currentGlyph['assign-unicode'](r725_code);
                return r4_unicodeGlyphs[r724_currentGlyph['unicode'][r724_currentGlyph['unicode']['length'] - 1]] = r724_currentGlyph;
            };
            r724_xn$startfrom$1aao = _r724_t0['start-from']['bind'](_r724_t0);
            r724_xn$lineto$5sIl = _r724_t0['line-to']['bind'](_r724_t0);
            r724_xn$curveto$1aao = _r724_t0['curve-to']['bind'](_r724_t0);
            r724_xn$cubicto$1aao = _r724_t0['cubic-to']['bind'](_r724_t0);
            r724_xn$putshapes$9Jrj = _r724_t0['put-shapes']['bind'](_r724_t0);
            r724_xn$reverselast$3qIs = _r724_t0['reverse-last']['bind'](_r724_t0);
            r724_include = _r724_t0['include']['bind'](_r724_t0);
            r724_xn$createstroke$7Hrq = _r724_t0['create-stroke']['bind'](_r724_t0);
            r724_xn$setanchor$9Jrj = _r724_t0['set-anchor']['bind'](_r724_t0);
            r724_xn$dontexport$5sIl = function _r724_t3() {
                var _r726_t0, _r726_t1;
                return r724_currentGlyph['dontExport'] = true;
            };
            _r724_t0['gizmo'] = r4_globalTransform;
            _r724_t0['set-width'](r4_WIDTH);
            r724_xn$setwidth$9Jrj(r4_WIDTH);
            r724_xn$assignunicode$7Hrq(94);
            r724_include(r4_glyphs['space'], r4_AS_BASE);
            r724_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t221() {
            var r728_currentGlyph, r728_xn$setwidth$9Jrj, r728_xn$assignunicode$7Hrq, r728_xn$startfrom$1aao, r728_xn$lineto$5sIl, r728_xn$curveto$1aao, r728_xn$cubicto$1aao, r728_xn$putshapes$9Jrj, r728_xn$reverselast$3qIs, r728_include, r728_xn$createstroke$7Hrq, r728_xn$setanchor$9Jrj, r728_xn$dontexport$5sIl, _r728_t0, _r728_t1, _r728_t2, _r728_t3;
            _r728_t0 = this;
            r728_currentGlyph = _r728_t0;
            r728_xn$setwidth$9Jrj = _r728_t0['set-width']['bind'](_r728_t0);
            r728_xn$assignunicode$7Hrq = function _r728_t2(r729_code) {
                var r729_code, _r729_t0, _r729_t1;
                r728_currentGlyph['assign-unicode'](r729_code);
                return r4_unicodeGlyphs[r728_currentGlyph['unicode'][r728_currentGlyph['unicode']['length'] - 1]] = r728_currentGlyph;
            };
            r728_xn$startfrom$1aao = _r728_t0['start-from']['bind'](_r728_t0);
            r728_xn$lineto$5sIl = _r728_t0['line-to']['bind'](_r728_t0);
            r728_xn$curveto$1aao = _r728_t0['curve-to']['bind'](_r728_t0);
            r728_xn$cubicto$1aao = _r728_t0['cubic-to']['bind'](_r728_t0);
            r728_xn$putshapes$9Jrj = _r728_t0['put-shapes']['bind'](_r728_t0);
            r728_xn$reverselast$3qIs = _r728_t0['reverse-last']['bind'](_r728_t0);
            r728_include = _r728_t0['include']['bind'](_r728_t0);
            r728_xn$createstroke$7Hrq = _r728_t0['create-stroke']['bind'](_r728_t0);
            r728_xn$setanchor$9Jrj = _r728_t0['set-anchor']['bind'](_r728_t0);
            r728_xn$dontexport$5sIl = function _r728_t3() {
                var _r730_t0, _r730_t1;
                return r728_currentGlyph['dontExport'] = true;
            };
            _r728_t0['gizmo'] = r4_globalTransform;
            _r728_t0['set-width'](r4_WIDTH);
            r728_xn$setwidth$9Jrj(r4_WIDTH);
            r728_xn$assignunicode$7Hrq('~');
            r728_include(r4_glyphs['space'], r4_AS_BASE);
            r728_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t222() {
            var r732_currentGlyph, r732_xn$setwidth$9Jrj, r732_xn$assignunicode$7Hrq, r732_xn$startfrom$1aao, r732_xn$lineto$5sIl, r732_xn$curveto$1aao, r732_xn$cubicto$1aao, r732_xn$putshapes$9Jrj, r732_xn$reverselast$3qIs, r732_include, r732_xn$createstroke$7Hrq, r732_xn$setanchor$9Jrj, r732_xn$dontexport$5sIl, _r732_t0, _r732_t1, _r732_t2, _r732_t3;
            _r732_t0 = this;
            r732_currentGlyph = _r732_t0;
            r732_xn$setwidth$9Jrj = _r732_t0['set-width']['bind'](_r732_t0);
            r732_xn$assignunicode$7Hrq = function _r732_t2(r733_code) {
                var r733_code, _r733_t0, _r733_t1;
                r732_currentGlyph['assign-unicode'](r733_code);
                return r4_unicodeGlyphs[r732_currentGlyph['unicode'][r732_currentGlyph['unicode']['length'] - 1]] = r732_currentGlyph;
            };
            r732_xn$startfrom$1aao = _r732_t0['start-from']['bind'](_r732_t0);
            r732_xn$lineto$5sIl = _r732_t0['line-to']['bind'](_r732_t0);
            r732_xn$curveto$1aao = _r732_t0['curve-to']['bind'](_r732_t0);
            r732_xn$cubicto$1aao = _r732_t0['cubic-to']['bind'](_r732_t0);
            r732_xn$putshapes$9Jrj = _r732_t0['put-shapes']['bind'](_r732_t0);
            r732_xn$reverselast$3qIs = _r732_t0['reverse-last']['bind'](_r732_t0);
            r732_include = _r732_t0['include']['bind'](_r732_t0);
            r732_xn$createstroke$7Hrq = _r732_t0['create-stroke']['bind'](_r732_t0);
            r732_xn$setanchor$9Jrj = _r732_t0['set-anchor']['bind'](_r732_t0);
            r732_xn$dontexport$5sIl = function _r732_t3() {
                var _r734_t0, _r734_t1;
                return r732_currentGlyph['dontExport'] = true;
            };
            _r732_t0['gizmo'] = r4_globalTransform;
            _r732_t0['set-width'](r4_WIDTH);
            r732_xn$setwidth$9Jrj(r4_WIDTH);
            r732_xn$assignunicode$7Hrq(168);
            r732_include(r4_glyphs['space'], r4_AS_BASE);
            r732_include(r4_glyphs['dieresisAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1cedilla', function _r4_t223() {
            var r736_currentGlyph, r736_xn$setwidth$9Jrj, r736_xn$assignunicode$7Hrq, r736_xn$startfrom$1aao, r736_xn$lineto$5sIl, r736_xn$curveto$1aao, r736_xn$cubicto$1aao, r736_xn$putshapes$9Jrj, r736_xn$reverselast$3qIs, r736_include, r736_xn$createstroke$7Hrq, r736_xn$setanchor$9Jrj, r736_xn$dontexport$5sIl, _r736_t0, _r736_t1, _r736_t2, _r736_t3;
            _r736_t0 = this;
            r736_currentGlyph = _r736_t0;
            r736_xn$setwidth$9Jrj = _r736_t0['set-width']['bind'](_r736_t0);
            r736_xn$assignunicode$7Hrq = function _r736_t2(r737_code) {
                var r737_code, _r737_t0, _r737_t1;
                r736_currentGlyph['assign-unicode'](r737_code);
                return r4_unicodeGlyphs[r736_currentGlyph['unicode'][r736_currentGlyph['unicode']['length'] - 1]] = r736_currentGlyph;
            };
            r736_xn$startfrom$1aao = _r736_t0['start-from']['bind'](_r736_t0);
            r736_xn$lineto$5sIl = _r736_t0['line-to']['bind'](_r736_t0);
            r736_xn$curveto$1aao = _r736_t0['curve-to']['bind'](_r736_t0);
            r736_xn$cubicto$1aao = _r736_t0['cubic-to']['bind'](_r736_t0);
            r736_xn$putshapes$9Jrj = _r736_t0['put-shapes']['bind'](_r736_t0);
            r736_xn$reverselast$3qIs = _r736_t0['reverse-last']['bind'](_r736_t0);
            r736_include = _r736_t0['include']['bind'](_r736_t0);
            r736_xn$createstroke$7Hrq = _r736_t0['create-stroke']['bind'](_r736_t0);
            r736_xn$setanchor$9Jrj = _r736_t0['set-anchor']['bind'](_r736_t0);
            r736_xn$dontexport$5sIl = function _r736_t3() {
                var _r738_t0, _r738_t1;
                return r736_currentGlyph['dontExport'] = true;
            };
            _r736_t0['gizmo'] = r4_globalTransform;
            _r736_t0['set-width'](r4_WIDTH);
            r736_xn$setwidth$9Jrj(r4_WIDTH);
            r736_xn$assignunicode$7Hrq(184);
            r736_include(r4_glyphs['space'], r4_AS_BASE);
            r736_include(r4_glyphs['cedillaBelow']);
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
                _r4_t233 = _r4_t9 < _r4_t8;
                for (; _r4_t233; _r4_t233 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t234 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t232 = _r4_t234;
            } else
                _r4_t232 = void 0;
        }
        r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t231(r742_glyph) {
            var r742_glyph, _r742_t0, _r742_t1;
            return r742_glyph && !r742_glyph['dontExport'];
        });
        return r4_font;
    };
}
