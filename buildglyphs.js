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
        var r4_para, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_WHITENESS, r4_adviceBlackness, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_XSHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_eshHook, r4_ezhshape, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219, _r4_t220, _r4_t221, _r4_t222, _r4_t223, _r4_t224;
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
        r4_sHookUpper = function _r4_t49(r31_top, r31_smooth, r31_hook, r31__middle) {
            var r31_top, r31_smooth, r31_hook, r31__middle, _r31_t0, _r31_t1, _r31_t2;
            return function _r31_t2() {
                var r33_currentGlyph, r33_xn$setwidth$9Jrj, r33_xn$assignunicode$7Hrq, r33_xn$startfrom$1aao, r33_xn$lineto$5sIl, r33_xn$curveto$1aao, r33_xn$cubicto$1aao, r33_xn$putshapes$9Jrj, r33_xn$reverselast$3qIs, r33_include, r33_xn$createstroke$7Hrq, r33_xn$setanchor$9Jrj, r33_xn$dontexport$5sIl, r33_middle, _r33_t0, _r33_t1, _r33_t2, _r33_t3;
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
                r33_middle = r31__middle || r4_MIDDLE;
                r33_include(r33_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB - r4_OXHOOK, r31_top - r31_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r33_middle, r4_RIGHTSB, r4_KAPPA_HOOK), r31_top - r4_O, r33_middle, r31_top - r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r31_top - r31_smooth));
                return void 0;
            };
        };
        r4_twoHookUpper = function _r4_t50(r36_top, r36_smooth, r36_hook, r36__middle) {
            var r36_top, r36_smooth, r36_hook, r36__middle, _r36_t0, _r36_t1, _r36_t2;
            return function _r36_t2() {
                var r38_currentGlyph, r38_xn$setwidth$9Jrj, r38_xn$assignunicode$7Hrq, r38_xn$startfrom$1aao, r38_xn$lineto$5sIl, r38_xn$curveto$1aao, r38_xn$cubicto$1aao, r38_xn$putshapes$9Jrj, r38_xn$reverselast$3qIs, r38_include, r38_xn$createstroke$7Hrq, r38_xn$setanchor$9Jrj, r38_xn$dontexport$5sIl, r38_middle, _r38_t0, _r38_t1, _r38_t2, _r38_t3;
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
                r38_middle = r36__middle || r4_MIDDLE;
                r38_include(r38_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r36_top - r36_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r38_middle, r4_SB, r4_KAPPA_HOOK), r36_top - r4_O, r38_middle, r36_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r36_top - r36_smooth));
                return void 0;
            };
        };
        r4_sHookLower = function _r4_t51(r41_bottom, r41_smooth, r41_hook, r41__middle) {
            var r41_bottom, r41_smooth, r41_hook, r41__middle, _r41_t0, _r41_t1, _r41_t2;
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
                r43_include(r43_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB, r41_bottom + r41_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r43_middle, r41_bottom + r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r0_mix(r43_middle, r4_SB, r4_KAPPA_HOOK), r41_bottom + r4_O, r4_SB + r4_OXHOOK, r41_bottom + r41_hook));
                return void 0;
            };
        };
        r4_XSHookLower = function _r4_t52(r46_bottom, r46_left, r46_middle, r46_right, r46_smooth, r46_hook) {
            var r46_bottom, r46_left, r46_middle, r46_right, r46_smooth, r46_hook, _r46_t0, _r46_t1, _r46_t2;
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
                r48_include(r48_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r46_right, r46_bottom + r46_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r46_middle, r46_bottom + r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r0_mix(r46_middle, r46_left, r4_KAPPA_HOOK), r46_bottom + r4_O, r46_left + r4_OXHOOK, r46_bottom + r46_hook));
                return void 0;
            };
        };
        r4_smallo = function _r4_t53(r51_u, r51_d, r51_l, r51_r) {
            var r51_u, r51_d, r51_l, r51_r, _r51_t0, _r51_t1, _r51_t2;
            return function _r51_t2() {
                var r53_currentGlyph, r53_xn$setwidth$9Jrj, r53_xn$assignunicode$7Hrq, r53_xn$startfrom$1aao, r53_xn$lineto$5sIl, r53_xn$curveto$1aao, r53_xn$cubicto$1aao, r53_xn$putshapes$9Jrj, r53_xn$reverselast$3qIs, r53_include, r53_xn$createstroke$7Hrq, r53_xn$setanchor$9Jrj, r53_xn$dontexport$5sIl, r53_middle, r53_ymiddlea, r53_ymiddleb, _r53_t0, _r53_t1, _r53_t2, _r53_t3;
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
                r53_middle = (r51_l + r51_r) / 2;
                if (r51_u - r51_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) {
                    r53_include(r53_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r53_middle, r51_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r51_l + r4_O, r51_u - r4_SMALLSMOOTHA)['line-to'](r51_l + r4_O, r51_d + r4_SMALLSMOOTHB)['arc-vh-to'](r53_middle, r51_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r51_r - r4_O, r51_d + r4_SMALLSMOOTHA)['line-to'](r51_r - r4_O, r51_u - r4_SMALLSMOOTHB)['arc-vh-to'](r53_middle, r51_u - r4_O)['heads-to'](r4_LEFTWARD));
                } else {
                    r53_ymiddlea = (r51_u - r4_SMALLSMOOTHA + r51_d + r4_SMALLSMOOTHB) / 2;
                    r53_ymiddleb = (r51_u - r4_SMALLSMOOTHB + r51_d + r4_SMALLSMOOTHA) / 2;
                    r53_include(r53_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r53_middle, r51_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r51_l + r4_O, r53_ymiddlea)['arc-vh-to'](r53_middle, r51_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r51_r - r4_O, r53_ymiddleb)['arc-vh-to'](r53_middle, r51_u - r4_O)['heads-to'](r4_LEFTWARD));
                }
                return void 0;
            };
        };
        r4_hbar = function _r4_t54(r56_xleft, r56_xright, r56_y, r56__fine) {
            var r56_xleft, r56_xright, r56_y, r56__fine, _r56_t0, _r56_t1, _r56_t2;
            return function _r56_t2() {
                var r58_currentGlyph, r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, r58_xn$dontexport$5sIl, r58_fine, _r58_t0, _r58_t1, _r58_t2, _r58_t3;
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
                r58_fine = (r56__fine || r4_STROKE) / 2;
                r58_include(r58_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r56_xleft, r56_y)['heads-to'](r4_RIGHTWARD)['set-width'](r58_fine, r58_fine)['line-to'](r56_xright, r56_y)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_vbar = function _r4_t55(r61_x, r61_ydown, r61_yup, r61__fine) {
            var r61_x, r61_ydown, r61_yup, r61__fine, _r61_t0, _r61_t1, _r61_t2;
            return function _r61_t2() {
                var r63_currentGlyph, r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, r63_include, r63_xn$createstroke$7Hrq, r63_xn$setanchor$9Jrj, r63_xn$dontexport$5sIl, r63_fine, _r63_t0, _r63_t1, _r63_t2, _r63_t3, _r63_t4, _r63_t5, _r63_t6, _r63_t7, _r63_t8, _r63_t9, _r63_t10, _r63_t11, _r63_t12, _r63_t13, _r63_t14, _r63_t15, _r63_t16, _r63_t17, _r63_t18, _r63_t19;
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
                _r63_t4 = r63_include;
                _r63_t5 = r63_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r61_x, r61_ydown);
                _r63_t6 = _r63_t5['heads-to'];
                if (r61_ydown < r61_yup)
                    _r63_t7 = r4_UPWARD;
                else
                    _r63_t7 = r4_DOWNWARD;
                _r63_t8 = _r63_t6['call'](_r63_t5, _r63_t7);
                _r63_t9 = _r63_t8['set-width'];
                _r63_t10 = r63_fine;
                _r63_t11 = r63_fine;
                _r63_t12 = _r63_t9['call'](_r63_t8, _r63_t10, _r63_t11);
                _r63_t13 = _r63_t12['line-to'];
                _r63_t14 = r61_x;
                _r63_t15 = r61_yup;
                _r63_t16 = _r63_t13['call'](_r63_t12, _r63_t14, _r63_t15);
                _r63_t17 = _r63_t16['heads-to'];
                if (r61_ydown < r61_yup)
                    _r63_t18 = r4_UPWARD;
                else
                    _r63_t18 = r4_DOWNWARD;
                _r63_t19 = _r63_t17['call'](_r63_t16, _r63_t18);
                _r63_t4(_r63_t19);
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t56() {
            var r67_currentGlyph, r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, r67_include, r67_xn$createstroke$7Hrq, r67_xn$setanchor$9Jrj, r67_xn$dontexport$5sIl, _r67_t0, _r67_t1, _r67_t2, _r67_t3;
            _r67_t0 = this;
            r67_currentGlyph = _r67_t0;
            r67_xn$setwidth$9Jrj = _r67_t0['set-width']['bind'](_r67_t0);
            r67_xn$assignunicode$7Hrq = function _r67_t2(r68_code) {
                var r68_code, _r68_t0, _r68_t1;
                r67_currentGlyph['assign-unicode'](r68_code);
                return r4_unicodeGlyphs[r67_currentGlyph['unicode'][r67_currentGlyph['unicode']['length'] - 1]] = r67_currentGlyph;
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
            r67_xn$dontexport$5sIl = function _r67_t3() {
                var _r69_t0, _r69_t1;
                return r67_currentGlyph['dontExport'] = true;
            };
            _r67_t0['gizmo'] = r4_globalTransform;
            _r67_t0['set-width'](r4_WIDTH);
            r67_xn$setwidth$9Jrj(0);
            r67_xn$assignunicode$7Hrq(775);
            r67_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r67_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t57() {
            var r71_currentGlyph, r71_xn$setwidth$9Jrj, r71_xn$assignunicode$7Hrq, r71_xn$startfrom$1aao, r71_xn$lineto$5sIl, r71_xn$curveto$1aao, r71_xn$cubicto$1aao, r71_xn$putshapes$9Jrj, r71_xn$reverselast$3qIs, r71_include, r71_xn$createstroke$7Hrq, r71_xn$setanchor$9Jrj, r71_xn$dontexport$5sIl, _r71_t0, _r71_t1, _r71_t2, _r71_t3;
            _r71_t0 = this;
            r71_currentGlyph = _r71_t0;
            r71_xn$setwidth$9Jrj = _r71_t0['set-width']['bind'](_r71_t0);
            r71_xn$assignunicode$7Hrq = function _r71_t2(r72_code) {
                var r72_code, _r72_t0, _r72_t1;
                r71_currentGlyph['assign-unicode'](r72_code);
                return r4_unicodeGlyphs[r71_currentGlyph['unicode'][r71_currentGlyph['unicode']['length'] - 1]] = r71_currentGlyph;
            };
            r71_xn$startfrom$1aao = _r71_t0['start-from']['bind'](_r71_t0);
            r71_xn$lineto$5sIl = _r71_t0['line-to']['bind'](_r71_t0);
            r71_xn$curveto$1aao = _r71_t0['curve-to']['bind'](_r71_t0);
            r71_xn$cubicto$1aao = _r71_t0['cubic-to']['bind'](_r71_t0);
            r71_xn$putshapes$9Jrj = _r71_t0['put-shapes']['bind'](_r71_t0);
            r71_xn$reverselast$3qIs = _r71_t0['reverse-last']['bind'](_r71_t0);
            r71_include = _r71_t0['include']['bind'](_r71_t0);
            r71_xn$createstroke$7Hrq = _r71_t0['create-stroke']['bind'](_r71_t0);
            r71_xn$setanchor$9Jrj = _r71_t0['set-anchor']['bind'](_r71_t0);
            r71_xn$dontexport$5sIl = function _r71_t3() {
                var _r73_t0, _r73_t1;
                return r71_currentGlyph['dontExport'] = true;
            };
            _r71_t0['gizmo'] = r4_globalTransform;
            _r71_t0['set-width'](r4_WIDTH);
            r71_xn$setwidth$9Jrj(0);
            r71_xn$assignunicode$7Hrq(776);
            r71_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r71_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t58() {
            var r75_currentGlyph, r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_include, r75_xn$createstroke$7Hrq, r75_xn$setanchor$9Jrj, r75_xn$dontexport$5sIl, r75_radiusOut, r75_radiusIn, _r75_t0, _r75_t1, _r75_t2, _r75_t3;
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
            r75_xn$dontexport$5sIl = function _r75_t3() {
                var _r77_t0, _r77_t1;
                return r75_currentGlyph['dontExport'] = true;
            };
            _r75_t0['gizmo'] = r4_globalTransform;
            _r75_t0['set-width'](r4_WIDTH);
            r75_xn$setwidth$9Jrj(0);
            r75_xn$assignunicode$7Hrq(778);
            r75_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r75_radiusOut = r4_DOTRADIUS * 1.5;
            r75_radiusIn = r4_DOTRADIUS * 0.7;
            r75_include([
                r4_Ring(r4_XH + r4_ACCENT + r75_radiusOut, r4_XH + r4_ACCENT - r75_radiusOut, r4_markMiddle - r75_radiusOut, r4_markMiddle + r75_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r75_radiusIn, r4_XH + r4_ACCENT - r75_radiusIn, r4_markMiddle - r75_radiusIn, r4_markMiddle + r75_radiusIn)
            ]);
            r75_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t59() {
            var r79_currentGlyph, r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, r79_include, r79_xn$createstroke$7Hrq, r79_xn$setanchor$9Jrj, r79_xn$dontexport$5sIl, _r79_t0, _r79_t1, _r79_t2, _r79_t3;
            _r79_t0 = this;
            r79_currentGlyph = _r79_t0;
            r79_xn$setwidth$9Jrj = _r79_t0['set-width']['bind'](_r79_t0);
            r79_xn$assignunicode$7Hrq = function _r79_t2(r80_code) {
                var r80_code, _r80_t0, _r80_t1;
                r79_currentGlyph['assign-unicode'](r80_code);
                return r4_unicodeGlyphs[r79_currentGlyph['unicode'][r79_currentGlyph['unicode']['length'] - 1]] = r79_currentGlyph;
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
            r79_xn$dontexport$5sIl = function _r79_t3() {
                var _r81_t0, _r81_t1;
                return r79_currentGlyph['dontExport'] = true;
            };
            _r79_t0['gizmo'] = r4_globalTransform;
            _r79_t0['set-width'](r4_WIDTH);
            r79_xn$setwidth$9Jrj(0);
            r79_xn$assignunicode$7Hrq(768);
            r79_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r79_include(r79_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t60() {
            var r83_currentGlyph, r83_xn$setwidth$9Jrj, r83_xn$assignunicode$7Hrq, r83_xn$startfrom$1aao, r83_xn$lineto$5sIl, r83_xn$curveto$1aao, r83_xn$cubicto$1aao, r83_xn$putshapes$9Jrj, r83_xn$reverselast$3qIs, r83_include, r83_xn$createstroke$7Hrq, r83_xn$setanchor$9Jrj, r83_xn$dontexport$5sIl, _r83_t0, _r83_t1, _r83_t2, _r83_t3;
            _r83_t0 = this;
            r83_currentGlyph = _r83_t0;
            r83_xn$setwidth$9Jrj = _r83_t0['set-width']['bind'](_r83_t0);
            r83_xn$assignunicode$7Hrq = function _r83_t2(r84_code) {
                var r84_code, _r84_t0, _r84_t1;
                r83_currentGlyph['assign-unicode'](r84_code);
                return r4_unicodeGlyphs[r83_currentGlyph['unicode'][r83_currentGlyph['unicode']['length'] - 1]] = r83_currentGlyph;
            };
            r83_xn$startfrom$1aao = _r83_t0['start-from']['bind'](_r83_t0);
            r83_xn$lineto$5sIl = _r83_t0['line-to']['bind'](_r83_t0);
            r83_xn$curveto$1aao = _r83_t0['curve-to']['bind'](_r83_t0);
            r83_xn$cubicto$1aao = _r83_t0['cubic-to']['bind'](_r83_t0);
            r83_xn$putshapes$9Jrj = _r83_t0['put-shapes']['bind'](_r83_t0);
            r83_xn$reverselast$3qIs = _r83_t0['reverse-last']['bind'](_r83_t0);
            r83_include = _r83_t0['include']['bind'](_r83_t0);
            r83_xn$createstroke$7Hrq = _r83_t0['create-stroke']['bind'](_r83_t0);
            r83_xn$setanchor$9Jrj = _r83_t0['set-anchor']['bind'](_r83_t0);
            r83_xn$dontexport$5sIl = function _r83_t3() {
                var _r85_t0, _r85_t1;
                return r83_currentGlyph['dontExport'] = true;
            };
            _r83_t0['gizmo'] = r4_globalTransform;
            _r83_t0['set-width'](r4_WIDTH);
            r83_xn$setwidth$9Jrj(0);
            r83_xn$assignunicode$7Hrq(769);
            r83_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r83_include(r83_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t61() {
            var r87_currentGlyph, r87_xn$setwidth$9Jrj, r87_xn$assignunicode$7Hrq, r87_xn$startfrom$1aao, r87_xn$lineto$5sIl, r87_xn$curveto$1aao, r87_xn$cubicto$1aao, r87_xn$putshapes$9Jrj, r87_xn$reverselast$3qIs, r87_include, r87_xn$createstroke$7Hrq, r87_xn$setanchor$9Jrj, r87_xn$dontexport$5sIl, _r87_t0, _r87_t1, _r87_t2, _r87_t3;
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
            r87_xn$dontexport$5sIl = function _r87_t3() {
                var _r89_t0, _r89_t1;
                return r87_currentGlyph['dontExport'] = true;
            };
            _r87_t0['gizmo'] = r4_globalTransform;
            _r87_t0['set-width'](r4_WIDTH);
            r87_xn$setwidth$9Jrj(0);
            r87_xn$assignunicode$7Hrq(770);
            r87_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r87_include(r87_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r87_include(r87_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t62() {
            var r91_currentGlyph, r91_xn$setwidth$9Jrj, r91_xn$assignunicode$7Hrq, r91_xn$startfrom$1aao, r91_xn$lineto$5sIl, r91_xn$curveto$1aao, r91_xn$cubicto$1aao, r91_xn$putshapes$9Jrj, r91_xn$reverselast$3qIs, r91_include, r91_xn$createstroke$7Hrq, r91_xn$setanchor$9Jrj, r91_xn$dontexport$5sIl, _r91_t0, _r91_t1, _r91_t2, _r91_t3;
            _r91_t0 = this;
            r91_currentGlyph = _r91_t0;
            r91_xn$setwidth$9Jrj = _r91_t0['set-width']['bind'](_r91_t0);
            r91_xn$assignunicode$7Hrq = function _r91_t2(r92_code) {
                var r92_code, _r92_t0, _r92_t1;
                r91_currentGlyph['assign-unicode'](r92_code);
                return r4_unicodeGlyphs[r91_currentGlyph['unicode'][r91_currentGlyph['unicode']['length'] - 1]] = r91_currentGlyph;
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
            r91_xn$dontexport$5sIl = function _r91_t3() {
                var _r93_t0, _r93_t1;
                return r91_currentGlyph['dontExport'] = true;
            };
            _r91_t0['gizmo'] = r4_globalTransform;
            _r91_t0['set-width'](r4_WIDTH);
            r91_xn$setwidth$9Jrj(0);
            r91_xn$assignunicode$7Hrq(780);
            r91_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r91_include(r91_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r91_include(r91_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t63() {
            var r95_currentGlyph, r95_xn$setwidth$9Jrj, r95_xn$assignunicode$7Hrq, r95_xn$startfrom$1aao, r95_xn$lineto$5sIl, r95_xn$curveto$1aao, r95_xn$cubicto$1aao, r95_xn$putshapes$9Jrj, r95_xn$reverselast$3qIs, r95_include, r95_xn$createstroke$7Hrq, r95_xn$setanchor$9Jrj, r95_xn$dontexport$5sIl, r95_leftEnd, r95_rightEnd, r95_ttop, r95_tbot, r95_top, r95_bot, r95_tildeWave, r95_tildeWaveX, r95_tildeWaveEnd, _r95_t0, _r95_t1, _r95_t2, _r95_t3;
            _r95_t0 = this;
            r95_currentGlyph = _r95_t0;
            r95_xn$setwidth$9Jrj = _r95_t0['set-width']['bind'](_r95_t0);
            r95_xn$assignunicode$7Hrq = function _r95_t2(r96_code) {
                var r96_code, _r96_t0, _r96_t1;
                r95_currentGlyph['assign-unicode'](r96_code);
                return r4_unicodeGlyphs[r95_currentGlyph['unicode'][r95_currentGlyph['unicode']['length'] - 1]] = r95_currentGlyph;
            };
            r95_xn$startfrom$1aao = _r95_t0['start-from']['bind'](_r95_t0);
            r95_xn$lineto$5sIl = _r95_t0['line-to']['bind'](_r95_t0);
            r95_xn$curveto$1aao = _r95_t0['curve-to']['bind'](_r95_t0);
            r95_xn$cubicto$1aao = _r95_t0['cubic-to']['bind'](_r95_t0);
            r95_xn$putshapes$9Jrj = _r95_t0['put-shapes']['bind'](_r95_t0);
            r95_xn$reverselast$3qIs = _r95_t0['reverse-last']['bind'](_r95_t0);
            r95_include = _r95_t0['include']['bind'](_r95_t0);
            r95_xn$createstroke$7Hrq = _r95_t0['create-stroke']['bind'](_r95_t0);
            r95_xn$setanchor$9Jrj = _r95_t0['set-anchor']['bind'](_r95_t0);
            r95_xn$dontexport$5sIl = function _r95_t3() {
                var _r97_t0, _r97_t1;
                return r95_currentGlyph['dontExport'] = true;
            };
            _r95_t0['gizmo'] = r4_globalTransform;
            _r95_t0['set-width'](r4_WIDTH);
            r95_xn$setwidth$9Jrj(0);
            r95_xn$assignunicode$7Hrq(771);
            r95_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r95_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r95_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r95_ttop = r4_aboveMarkTop;
            r95_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r95_top = r95_ttop + r4_markFine * 2;
            r95_bot = r95_tbot - r4_markFine * 2;
            r95_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r95_tildeWaveX = 0.52;
            r95_tildeWaveEnd = 0;
            r95_include(r95_xn$createstroke$7Hrq()['start-from'](r95_leftEnd, r0_mix(r95_tbot, r95_ttop, r95_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r95_leftEnd, r95_rightEnd, r95_tildeWaveX), r0_mix(r95_bot, r95_top, r95_tildeWave), r0_mix(r95_leftEnd, r95_rightEnd, 1 - r95_tildeWaveX), r0_mix(r95_bot, r95_top, 1 - r95_tildeWave), r95_rightEnd, r0_mix(r95_tbot, r95_ttop, 1 - r95_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t64() {
            var r99_currentGlyph, r99_xn$setwidth$9Jrj, r99_xn$assignunicode$7Hrq, r99_xn$startfrom$1aao, r99_xn$lineto$5sIl, r99_xn$curveto$1aao, r99_xn$cubicto$1aao, r99_xn$putshapes$9Jrj, r99_xn$reverselast$3qIs, r99_include, r99_xn$createstroke$7Hrq, r99_xn$setanchor$9Jrj, r99_xn$dontexport$5sIl, r99_leftEnd, r99_rightEnd, _r99_t0, _r99_t1, _r99_t2, _r99_t3;
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
            r99_xn$dontexport$5sIl = function _r99_t3() {
                var _r101_t0, _r101_t1;
                return r99_currentGlyph['dontExport'] = true;
            };
            _r99_t0['gizmo'] = r4_globalTransform;
            _r99_t0['set-width'](r4_WIDTH);
            r99_xn$setwidth$9Jrj(0);
            r99_xn$assignunicode$7Hrq(772);
            r99_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r99_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r99_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r99_include(r99_xn$createstroke$7Hrq()['start-from'](r99_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r99_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t65() {
            var r103_currentGlyph, r103_xn$setwidth$9Jrj, r103_xn$assignunicode$7Hrq, r103_xn$startfrom$1aao, r103_xn$lineto$5sIl, r103_xn$curveto$1aao, r103_xn$cubicto$1aao, r103_xn$putshapes$9Jrj, r103_xn$reverselast$3qIs, r103_include, r103_xn$createstroke$7Hrq, r103_xn$setanchor$9Jrj, r103_xn$dontexport$5sIl, r103_leftEnd, r103_rightEnd, _r103_t0, _r103_t1, _r103_t2, _r103_t3;
            _r103_t0 = this;
            r103_currentGlyph = _r103_t0;
            r103_xn$setwidth$9Jrj = _r103_t0['set-width']['bind'](_r103_t0);
            r103_xn$assignunicode$7Hrq = function _r103_t2(r104_code) {
                var r104_code, _r104_t0, _r104_t1;
                r103_currentGlyph['assign-unicode'](r104_code);
                return r4_unicodeGlyphs[r103_currentGlyph['unicode'][r103_currentGlyph['unicode']['length'] - 1]] = r103_currentGlyph;
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
            r103_xn$dontexport$5sIl = function _r103_t3() {
                var _r105_t0, _r105_t1;
                return r103_currentGlyph['dontExport'] = true;
            };
            _r103_t0['gizmo'] = r4_globalTransform;
            _r103_t0['set-width'](r4_WIDTH);
            r103_xn$setwidth$9Jrj(0);
            r103_xn$assignunicode$7Hrq(774);
            r103_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r103_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r103_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r103_include(r103_xn$createstroke$7Hrq()['start-from'](r103_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r103_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t66() {
            var r107_currentGlyph, r107_xn$setwidth$9Jrj, r107_xn$assignunicode$7Hrq, r107_xn$startfrom$1aao, r107_xn$lineto$5sIl, r107_xn$curveto$1aao, r107_xn$cubicto$1aao, r107_xn$putshapes$9Jrj, r107_xn$reverselast$3qIs, r107_include, r107_xn$createstroke$7Hrq, r107_xn$setanchor$9Jrj, r107_xn$dontexport$5sIl, r107_fine, r107_hookBot, r107_hookTop, _r107_t0, _r107_t1, _r107_t2, _r107_t3;
            _r107_t0 = this;
            r107_currentGlyph = _r107_t0;
            r107_xn$setwidth$9Jrj = _r107_t0['set-width']['bind'](_r107_t0);
            r107_xn$assignunicode$7Hrq = function _r107_t2(r108_code) {
                var r108_code, _r108_t0, _r108_t1;
                r107_currentGlyph['assign-unicode'](r108_code);
                return r4_unicodeGlyphs[r107_currentGlyph['unicode'][r107_currentGlyph['unicode']['length'] - 1]] = r107_currentGlyph;
            };
            r107_xn$startfrom$1aao = _r107_t0['start-from']['bind'](_r107_t0);
            r107_xn$lineto$5sIl = _r107_t0['line-to']['bind'](_r107_t0);
            r107_xn$curveto$1aao = _r107_t0['curve-to']['bind'](_r107_t0);
            r107_xn$cubicto$1aao = _r107_t0['cubic-to']['bind'](_r107_t0);
            r107_xn$putshapes$9Jrj = _r107_t0['put-shapes']['bind'](_r107_t0);
            r107_xn$reverselast$3qIs = _r107_t0['reverse-last']['bind'](_r107_t0);
            r107_include = _r107_t0['include']['bind'](_r107_t0);
            r107_xn$createstroke$7Hrq = _r107_t0['create-stroke']['bind'](_r107_t0);
            r107_xn$setanchor$9Jrj = _r107_t0['set-anchor']['bind'](_r107_t0);
            r107_xn$dontexport$5sIl = function _r107_t3() {
                var _r109_t0, _r109_t1;
                return r107_currentGlyph['dontExport'] = true;
            };
            _r107_t0['gizmo'] = r4_globalTransform;
            _r107_t0['set-width'](r4_WIDTH);
            r107_xn$setwidth$9Jrj(0);
            r107_xn$assignunicode$7Hrq(777);
            r107_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r107_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r107_hookBot = r4_aboveMarkBot - r107_fine / 2;
            r107_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r107_fine / 2;
            r107_include(r107_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r107_fine * r4_ITALICCOR, r107_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r107_fine * 2, 0)['line-to'](r4_markMiddle + r107_fine * 0.5, r107_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r107_hookBot, r107_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r107_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r107_fine, r107_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t67() {
            var r111_currentGlyph, r111_xn$setwidth$9Jrj, r111_xn$assignunicode$7Hrq, r111_xn$startfrom$1aao, r111_xn$lineto$5sIl, r111_xn$curveto$1aao, r111_xn$cubicto$1aao, r111_xn$putshapes$9Jrj, r111_xn$reverselast$3qIs, r111_include, r111_xn$createstroke$7Hrq, r111_xn$setanchor$9Jrj, r111_xn$dontexport$5sIl, _r111_t0, _r111_t1, _r111_t2, _r111_t3;
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
            r111_xn$dontexport$5sIl = function _r111_t3() {
                var _r113_t0, _r113_t1;
                return r111_currentGlyph['dontExport'] = true;
            };
            _r111_t0['gizmo'] = r4_globalTransform;
            _r111_t0['set-width'](r4_WIDTH);
            r111_xn$setwidth$9Jrj(0);
            r111_xn$assignunicode$7Hrq(803);
            r111_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r111_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t68() {
            var r115_currentGlyph, r115_xn$setwidth$9Jrj, r115_xn$assignunicode$7Hrq, r115_xn$startfrom$1aao, r115_xn$lineto$5sIl, r115_xn$curveto$1aao, r115_xn$cubicto$1aao, r115_xn$putshapes$9Jrj, r115_xn$reverselast$3qIs, r115_include, r115_xn$createstroke$7Hrq, r115_xn$setanchor$9Jrj, r115_xn$dontexport$5sIl, r115_fine, r115_cedillaTop, r115_cedillaBot, _r115_t0, _r115_t1, _r115_t2, _r115_t3;
            _r115_t0 = this;
            r115_currentGlyph = _r115_t0;
            r115_xn$setwidth$9Jrj = _r115_t0['set-width']['bind'](_r115_t0);
            r115_xn$assignunicode$7Hrq = function _r115_t2(r116_code) {
                var r116_code, _r116_t0, _r116_t1;
                r115_currentGlyph['assign-unicode'](r116_code);
                return r4_unicodeGlyphs[r115_currentGlyph['unicode'][r115_currentGlyph['unicode']['length'] - 1]] = r115_currentGlyph;
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
            r115_xn$dontexport$5sIl = function _r115_t3() {
                var _r117_t0, _r117_t1;
                return r115_currentGlyph['dontExport'] = true;
            };
            _r115_t0['gizmo'] = r4_globalTransform;
            _r115_t0['set-width'](r4_WIDTH);
            r115_xn$setwidth$9Jrj(0);
            r115_xn$assignunicode$7Hrq(807);
            r115_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r115_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r115_cedillaTop = r4_belowMarkTop + r115_fine * 0.85;
            r115_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r115_include(r115_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r115_fine * r4_ITALICCOR, r115_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r115_fine * 2)['line-to'](r4_markMiddle + r115_fine * 0.5, r115_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r115_cedillaTop, r115_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r115_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r115_cedillaBot)['heads-to'](r4_LEFTWARD));
            r115_include(r115_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r115_fine, r115_fine)['line-to'](r4_markMiddle, r115_cedillaTop - r115_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t69() {
            var r119_currentGlyph, r119_xn$setwidth$9Jrj, r119_xn$assignunicode$7Hrq, r119_xn$startfrom$1aao, r119_xn$lineto$5sIl, r119_xn$curveto$1aao, r119_xn$cubicto$1aao, r119_xn$putshapes$9Jrj, r119_xn$reverselast$3qIs, r119_include, r119_xn$createstroke$7Hrq, r119_xn$setanchor$9Jrj, r119_xn$dontexport$5sIl, r119_TURN, _r119_t0, _r119_t1, _r119_t2, _r119_t3;
            _r119_t0 = this;
            r119_currentGlyph = _r119_t0;
            r119_xn$setwidth$9Jrj = _r119_t0['set-width']['bind'](_r119_t0);
            r119_xn$assignunicode$7Hrq = function _r119_t2(r120_code) {
                var r120_code, _r120_t0, _r120_t1;
                r119_currentGlyph['assign-unicode'](r120_code);
                return r4_unicodeGlyphs[r119_currentGlyph['unicode'][r119_currentGlyph['unicode']['length'] - 1]] = r119_currentGlyph;
            };
            r119_xn$startfrom$1aao = _r119_t0['start-from']['bind'](_r119_t0);
            r119_xn$lineto$5sIl = _r119_t0['line-to']['bind'](_r119_t0);
            r119_xn$curveto$1aao = _r119_t0['curve-to']['bind'](_r119_t0);
            r119_xn$cubicto$1aao = _r119_t0['cubic-to']['bind'](_r119_t0);
            r119_xn$putshapes$9Jrj = _r119_t0['put-shapes']['bind'](_r119_t0);
            r119_xn$reverselast$3qIs = _r119_t0['reverse-last']['bind'](_r119_t0);
            r119_include = _r119_t0['include']['bind'](_r119_t0);
            r119_xn$createstroke$7Hrq = _r119_t0['create-stroke']['bind'](_r119_t0);
            r119_xn$setanchor$9Jrj = _r119_t0['set-anchor']['bind'](_r119_t0);
            r119_xn$dontexport$5sIl = function _r119_t3() {
                var _r121_t0, _r121_t1;
                return r119_currentGlyph['dontExport'] = true;
            };
            _r119_t0['gizmo'] = r4_globalTransform;
            _r119_t0['set-width'](r4_WIDTH);
            r119_xn$setwidth$9Jrj(r4_WIDTH);
            r119_xn$assignunicode$7Hrq('A');
            r119_include(r4_capitalMarks);
            r119_TURN = r4_XH * 0.1;
            r119_include(r119_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r119_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r119_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r119_include(r119_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r119_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r119_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r119_include(r119_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r119_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r119_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r119_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t70() {
            var r123_currentGlyph, r123_xn$setwidth$9Jrj, r123_xn$assignunicode$7Hrq, r123_xn$startfrom$1aao, r123_xn$lineto$5sIl, r123_xn$curveto$1aao, r123_xn$cubicto$1aao, r123_xn$putshapes$9Jrj, r123_xn$reverselast$3qIs, r123_include, r123_xn$createstroke$7Hrq, r123_xn$setanchor$9Jrj, r123_xn$dontexport$5sIl, r123_TURN, _r123_t0, _r123_t1, _r123_t2, _r123_t3;
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
            r123_xn$dontexport$5sIl = function _r123_t3() {
                var _r125_t0, _r125_t1;
                return r123_currentGlyph['dontExport'] = true;
            };
            _r123_t0['gizmo'] = r4_globalTransform;
            _r123_t0['set-width'](r4_WIDTH);
            r123_xn$setwidth$9Jrj(r4_WIDTH);
            r123_xn$assignunicode$7Hrq('V');
            r123_include(r4_capitalMarks);
            r123_TURN = r4_CAP * 0.9;
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r123_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r123_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r123_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r123_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r123_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r123_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r123_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t71() {
            var r127_currentGlyph, r127_xn$setwidth$9Jrj, r127_xn$assignunicode$7Hrq, r127_xn$startfrom$1aao, r127_xn$lineto$5sIl, r127_xn$curveto$1aao, r127_xn$cubicto$1aao, r127_xn$putshapes$9Jrj, r127_xn$reverselast$3qIs, r127_include, r127_xn$createstroke$7Hrq, r127_xn$setanchor$9Jrj, r127_xn$dontexport$5sIl, r127_TURN, r127_turn2, r127_wheight, r127_bottomStroke, r127_m1, r127_m2, _r127_t0, _r127_t1, _r127_t2, _r127_t3;
            _r127_t0 = this;
            r127_currentGlyph = _r127_t0;
            r127_xn$setwidth$9Jrj = _r127_t0['set-width']['bind'](_r127_t0);
            r127_xn$assignunicode$7Hrq = function _r127_t2(r128_code) {
                var r128_code, _r128_t0, _r128_t1;
                r127_currentGlyph['assign-unicode'](r128_code);
                return r4_unicodeGlyphs[r127_currentGlyph['unicode'][r127_currentGlyph['unicode']['length'] - 1]] = r127_currentGlyph;
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
            r127_xn$dontexport$5sIl = function _r127_t3() {
                var _r129_t0, _r129_t1;
                return r127_currentGlyph['dontExport'] = true;
            };
            _r127_t0['gizmo'] = r4_globalTransform;
            _r127_t0['set-width'](r4_WIDTH);
            r127_xn$setwidth$9Jrj(r4_WIDTH);
            r127_xn$assignunicode$7Hrq('W');
            r127_include(r4_capitalMarks);
            r127_TURN = r4_CAP * 0.75;
            r127_turn2 = r4_CAP * 0.59;
            r127_wheight = r4_CAP * 0.6;
            r127_bottomStroke = r4_adviceBlackness(5.2);
            r127_m1 = r4_WIDTH * 0.3;
            r127_m2 = r4_WIDTH * 0.7;
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r127_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r127_TURN, r127_m1 - r127_bottomStroke / 2, 0)['set-width'](r127_bottomStroke, 0));
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r127_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r127_TURN, r127_m2 + r127_bottomStroke / 2, 0)['set-width'](0, r127_bottomStroke));
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r127_bottomStroke / 2, r127_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r127_bottomStroke)['line-to'](r4_MIDDLE + r127_bottomStroke / 2, r127_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r127_bottomStroke / 2, (1 - 0.1) * r127_turn2, r127_m1 + r127_bottomStroke / 2, 0)['set-width'](0, r127_bottomStroke));
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r127_bottomStroke / 2, r127_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r127_bottomStroke, 0)['line-to'](r4_MIDDLE - r127_bottomStroke / 2, r127_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r127_bottomStroke / 2, (1 - 0.1) * r127_turn2, r127_m2 - r127_bottomStroke / 2, 0)['set-width'](r127_bottomStroke, 0));
            r127_xn$startfrom$1aao(r127_m1 + r127_bottomStroke / 2, 0);
            r127_xn$lineto$5sIl(r127_m1 - r127_bottomStroke / 2, 0);
            r127_xn$lineto$5sIl(r127_m1, r127_bottomStroke);
            r127_xn$startfrom$1aao(r127_m2 + r127_bottomStroke / 2, 0);
            r127_xn$lineto$5sIl(r127_m2 - r127_bottomStroke / 2, 0);
            r127_xn$lineto$5sIl(r127_m2, r127_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t72() {
            var r131_currentGlyph, r131_xn$setwidth$9Jrj, r131_xn$assignunicode$7Hrq, r131_xn$startfrom$1aao, r131_xn$lineto$5sIl, r131_xn$curveto$1aao, r131_xn$cubicto$1aao, r131_xn$putshapes$9Jrj, r131_xn$reverselast$3qIs, r131_include, r131_xn$createstroke$7Hrq, r131_xn$setanchor$9Jrj, r131_xn$dontexport$5sIl, _r131_t0, _r131_t1, _r131_t2, _r131_t3;
            _r131_t0 = this;
            r131_currentGlyph = _r131_t0;
            r131_xn$setwidth$9Jrj = _r131_t0['set-width']['bind'](_r131_t0);
            r131_xn$assignunicode$7Hrq = function _r131_t2(r132_code) {
                var r132_code, _r132_t0, _r132_t1;
                r131_currentGlyph['assign-unicode'](r132_code);
                return r4_unicodeGlyphs[r131_currentGlyph['unicode'][r131_currentGlyph['unicode']['length'] - 1]] = r131_currentGlyph;
            };
            r131_xn$startfrom$1aao = _r131_t0['start-from']['bind'](_r131_t0);
            r131_xn$lineto$5sIl = _r131_t0['line-to']['bind'](_r131_t0);
            r131_xn$curveto$1aao = _r131_t0['curve-to']['bind'](_r131_t0);
            r131_xn$cubicto$1aao = _r131_t0['cubic-to']['bind'](_r131_t0);
            r131_xn$putshapes$9Jrj = _r131_t0['put-shapes']['bind'](_r131_t0);
            r131_xn$reverselast$3qIs = _r131_t0['reverse-last']['bind'](_r131_t0);
            r131_include = _r131_t0['include']['bind'](_r131_t0);
            r131_xn$createstroke$7Hrq = _r131_t0['create-stroke']['bind'](_r131_t0);
            r131_xn$setanchor$9Jrj = _r131_t0['set-anchor']['bind'](_r131_t0);
            r131_xn$dontexport$5sIl = function _r131_t3() {
                var _r133_t0, _r133_t1;
                return r131_currentGlyph['dontExport'] = true;
            };
            _r131_t0['gizmo'] = r4_globalTransform;
            _r131_t0['set-width'](r4_WIDTH);
            r131_xn$setwidth$9Jrj(r4_WIDTH);
            r131_xn$assignunicode$7Hrq('X');
            r131_include(r4_capitalMarks);
            r131_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r131_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t73() {
            var r135_currentGlyph, r135_xn$setwidth$9Jrj, r135_xn$assignunicode$7Hrq, r135_xn$startfrom$1aao, r135_xn$lineto$5sIl, r135_xn$curveto$1aao, r135_xn$cubicto$1aao, r135_xn$putshapes$9Jrj, r135_xn$reverselast$3qIs, r135_include, r135_xn$createstroke$7Hrq, r135_xn$setanchor$9Jrj, r135_xn$dontexport$5sIl, r135_cross, _r135_t0, _r135_t1, _r135_t2, _r135_t3;
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
            r135_xn$dontexport$5sIl = function _r135_t3() {
                var _r137_t0, _r137_t1;
                return r135_currentGlyph['dontExport'] = true;
            };
            _r135_t0['gizmo'] = r4_globalTransform;
            _r135_t0['set-width'](r4_WIDTH);
            r135_xn$setwidth$9Jrj(r4_WIDTH);
            r135_xn$assignunicode$7Hrq('Y');
            r135_include(r4_capitalMarks);
            r135_cross = r4_CAP * 0.4;
            r135_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r135_cross, 0.1, 0.4, 0.28));
            r135_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r135_cross, 0.1, 0.4, 0.28));
            r135_include(r135_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r135_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t74() {
            var r139_currentGlyph, r139_xn$setwidth$9Jrj, r139_xn$assignunicode$7Hrq, r139_xn$startfrom$1aao, r139_xn$lineto$5sIl, r139_xn$curveto$1aao, r139_xn$cubicto$1aao, r139_xn$putshapes$9Jrj, r139_xn$reverselast$3qIs, r139_include, r139_xn$createstroke$7Hrq, r139_xn$setanchor$9Jrj, r139_xn$dontexport$5sIl, r139_TURN, r139_rturn, r139_right, r139_fine, _r139_t0, _r139_t1, _r139_t2, _r139_t3;
            _r139_t0 = this;
            r139_currentGlyph = _r139_t0;
            r139_xn$setwidth$9Jrj = _r139_t0['set-width']['bind'](_r139_t0);
            r139_xn$assignunicode$7Hrq = function _r139_t2(r140_code) {
                var r140_code, _r140_t0, _r140_t1;
                r139_currentGlyph['assign-unicode'](r140_code);
                return r4_unicodeGlyphs[r139_currentGlyph['unicode'][r139_currentGlyph['unicode']['length'] - 1]] = r139_currentGlyph;
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
            r139_xn$dontexport$5sIl = function _r139_t3() {
                var _r141_t0, _r141_t1;
                return r139_currentGlyph['dontExport'] = true;
            };
            _r139_t0['gizmo'] = r4_globalTransform;
            _r139_t0['set-width'](r4_WIDTH);
            r139_xn$setwidth$9Jrj(r4_WIDTH);
            r139_xn$assignunicode$7Hrq('K');
            r139_include(r4_capitalMarks);
            r139_TURN = r4_CAP * 0.95;
            r139_rturn = r4_XH * 0.1;
            r139_right = r4_RIGHTSB - r4_O;
            r139_fine = r4_adviceBlackness(3.5);
            r139_include(r139_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r139_include(r139_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r139_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r139_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r139_fine));
            r139_include(r139_xn$createstroke$7Hrq()['start-from'](r139_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r139_right - r4_HALFSTROKE, r139_rturn + 0.2 * (r4_XH - r139_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r139_fine / 2, r139_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t75() {
            var r143_currentGlyph, r143_xn$setwidth$9Jrj, r143_xn$assignunicode$7Hrq, r143_xn$startfrom$1aao, r143_xn$lineto$5sIl, r143_xn$curveto$1aao, r143_xn$cubicto$1aao, r143_xn$putshapes$9Jrj, r143_xn$reverselast$3qIs, r143_include, r143_xn$createstroke$7Hrq, r143_xn$setanchor$9Jrj, r143_xn$dontexport$5sIl, r143_bowl, r143_tkappa, r143_bkappa, r143_turntop, r143_turnbottom, _r143_t0, _r143_t1, _r143_t2, _r143_t3;
            _r143_t0 = this;
            r143_currentGlyph = _r143_t0;
            r143_xn$setwidth$9Jrj = _r143_t0['set-width']['bind'](_r143_t0);
            r143_xn$assignunicode$7Hrq = function _r143_t2(r144_code) {
                var r144_code, _r144_t0, _r144_t1;
                r143_currentGlyph['assign-unicode'](r144_code);
                return r4_unicodeGlyphs[r143_currentGlyph['unicode'][r143_currentGlyph['unicode']['length'] - 1]] = r143_currentGlyph;
            };
            r143_xn$startfrom$1aao = _r143_t0['start-from']['bind'](_r143_t0);
            r143_xn$lineto$5sIl = _r143_t0['line-to']['bind'](_r143_t0);
            r143_xn$curveto$1aao = _r143_t0['curve-to']['bind'](_r143_t0);
            r143_xn$cubicto$1aao = _r143_t0['cubic-to']['bind'](_r143_t0);
            r143_xn$putshapes$9Jrj = _r143_t0['put-shapes']['bind'](_r143_t0);
            r143_xn$reverselast$3qIs = _r143_t0['reverse-last']['bind'](_r143_t0);
            r143_include = _r143_t0['include']['bind'](_r143_t0);
            r143_xn$createstroke$7Hrq = _r143_t0['create-stroke']['bind'](_r143_t0);
            r143_xn$setanchor$9Jrj = _r143_t0['set-anchor']['bind'](_r143_t0);
            r143_xn$dontexport$5sIl = function _r143_t3() {
                var _r145_t0, _r145_t1;
                return r143_currentGlyph['dontExport'] = true;
            };
            _r143_t0['gizmo'] = r4_globalTransform;
            _r143_t0['set-width'](r4_WIDTH);
            r143_xn$setwidth$9Jrj(r4_WIDTH);
            r143_xn$assignunicode$7Hrq('B');
            r143_include(r4_capitalMarks);
            r143_bowl = 451;
            r143_tkappa = r4_COKAPPA - 0.22;
            r143_bkappa = r4_COKAPPA - 0.2;
            r143_turntop = (r4_CAP + (r143_bowl - r4_STROKE)) / 2;
            r143_turnbottom = r143_bowl / 2;
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r143_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r143_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r143_turnbottom, r143_bowl - r4_STROKE)['line-to'](r4_SB, r143_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r143_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r143_turnbottom)['arc-vh-to'](r4_RIGHTSB - r143_turnbottom, r143_bowl)['line-to'](r4_SB, r143_bowl)['heads-to'](r4_LEFTWARD));
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t76() {
            var r147_currentGlyph, r147_xn$setwidth$9Jrj, r147_xn$assignunicode$7Hrq, r147_xn$startfrom$1aao, r147_xn$lineto$5sIl, r147_xn$curveto$1aao, r147_xn$cubicto$1aao, r147_xn$putshapes$9Jrj, r147_xn$reverselast$3qIs, r147_include, r147_xn$createstroke$7Hrq, r147_xn$setanchor$9Jrj, r147_xn$dontexport$5sIl, r147_dsmooth, r147_bsmooth, _r147_t0, _r147_t1, _r147_t2, _r147_t3;
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
            r147_xn$dontexport$5sIl = function _r147_t3() {
                var _r149_t0, _r149_t1;
                return r147_currentGlyph['dontExport'] = true;
            };
            _r147_t0['gizmo'] = r4_globalTransform;
            _r147_t0['set-width'](r4_WIDTH);
            r147_xn$setwidth$9Jrj(r4_WIDTH);
            r147_xn$assignunicode$7Hrq('D');
            r147_include(r4_capitalMarks);
            r147_dsmooth = r4_SMOOTH * 1.35;
            r147_bsmooth = r4_SMOOTH * 1.1;
            r147_include(r147_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r147_include(r147_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r147_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r147_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r147_dsmooth)['arc-vh-to'](r4_RIGHTSB - r147_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t77() {
            var r151_currentGlyph, r151_xn$setwidth$9Jrj, r151_xn$assignunicode$7Hrq, r151_xn$startfrom$1aao, r151_xn$lineto$5sIl, r151_xn$curveto$1aao, r151_xn$cubicto$1aao, r151_xn$putshapes$9Jrj, r151_xn$reverselast$3qIs, r151_include, r151_xn$createstroke$7Hrq, r151_xn$setanchor$9Jrj, r151_xn$dontexport$5sIl, r151_bowlTop, r151_bowlBottom, r151_bkappa, r151_turn, r151_turnRadius, _r151_t0, _r151_t1, _r151_t2, _r151_t3;
            _r151_t0 = this;
            r151_currentGlyph = _r151_t0;
            r151_xn$setwidth$9Jrj = _r151_t0['set-width']['bind'](_r151_t0);
            r151_xn$assignunicode$7Hrq = function _r151_t2(r152_code) {
                var r152_code, _r152_t0, _r152_t1;
                r151_currentGlyph['assign-unicode'](r152_code);
                return r4_unicodeGlyphs[r151_currentGlyph['unicode'][r151_currentGlyph['unicode']['length'] - 1]] = r151_currentGlyph;
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
            r151_xn$dontexport$5sIl = function _r151_t3() {
                var _r153_t0, _r153_t1;
                return r151_currentGlyph['dontExport'] = true;
            };
            _r151_t0['gizmo'] = r4_globalTransform;
            _r151_t0['set-width'](r4_WIDTH);
            r151_xn$setwidth$9Jrj(r4_WIDTH);
            r151_xn$assignunicode$7Hrq('P');
            r151_include(r4_capitalMarks);
            r151_bowlTop = r4_CAP * 1;
            r151_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r151_bkappa = r4_COKAPPA - 0.2;
            r151_turn = r0_mix(r151_bowlTop, r151_bowlBottom, 0.5);
            r151_turnRadius = (r151_bowlTop - r151_bowlBottom) / 2;
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r151_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r151_turnRadius, r151_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r151_turn)['arc-vh-to'](r4_RIGHTSB - r151_turnRadius, r151_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r151_bowlBottom)['heads-to'](r4_LEFTWARD));
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t78() {
            var r155_currentGlyph, r155_xn$setwidth$9Jrj, r155_xn$assignunicode$7Hrq, r155_xn$startfrom$1aao, r155_xn$lineto$5sIl, r155_xn$curveto$1aao, r155_xn$cubicto$1aao, r155_xn$putshapes$9Jrj, r155_xn$reverselast$3qIs, r155_include, r155_xn$createstroke$7Hrq, r155_xn$setanchor$9Jrj, r155_xn$dontexport$5sIl, r155_TURN, r155_right, _r155_t0, _r155_t1, _r155_t2, _r155_t3;
            _r155_t0 = this;
            r155_currentGlyph = _r155_t0;
            r155_xn$setwidth$9Jrj = _r155_t0['set-width']['bind'](_r155_t0);
            r155_xn$assignunicode$7Hrq = function _r155_t2(r156_code) {
                var r156_code, _r156_t0, _r156_t1;
                r155_currentGlyph['assign-unicode'](r156_code);
                return r4_unicodeGlyphs[r155_currentGlyph['unicode'][r155_currentGlyph['unicode']['length'] - 1]] = r155_currentGlyph;
            };
            r155_xn$startfrom$1aao = _r155_t0['start-from']['bind'](_r155_t0);
            r155_xn$lineto$5sIl = _r155_t0['line-to']['bind'](_r155_t0);
            r155_xn$curveto$1aao = _r155_t0['curve-to']['bind'](_r155_t0);
            r155_xn$cubicto$1aao = _r155_t0['cubic-to']['bind'](_r155_t0);
            r155_xn$putshapes$9Jrj = _r155_t0['put-shapes']['bind'](_r155_t0);
            r155_xn$reverselast$3qIs = _r155_t0['reverse-last']['bind'](_r155_t0);
            r155_include = _r155_t0['include']['bind'](_r155_t0);
            r155_xn$createstroke$7Hrq = _r155_t0['create-stroke']['bind'](_r155_t0);
            r155_xn$setanchor$9Jrj = _r155_t0['set-anchor']['bind'](_r155_t0);
            r155_xn$dontexport$5sIl = function _r155_t3() {
                var _r157_t0, _r157_t1;
                return r155_currentGlyph['dontExport'] = true;
            };
            _r155_t0['gizmo'] = r4_globalTransform;
            _r155_t0['set-width'](r4_WIDTH);
            r155_xn$setwidth$9Jrj(r4_WIDTH);
            r155_xn$assignunicode$7Hrq('R');
            r155_include(r4_glyphs['P'], r4_AS_BASE);
            r155_TURN = r4_XH * 0.1;
            r155_right = r4_RIGHTSB - r4_O;
            r155_include(r155_xn$createstroke$7Hrq()['start-from'](r155_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r155_right - r4_HALFSTROKE, r155_TURN + 0.2 * (r4_XH - r155_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t79() {
            var r159_currentGlyph, r159_xn$setwidth$9Jrj, r159_xn$assignunicode$7Hrq, r159_xn$startfrom$1aao, r159_xn$lineto$5sIl, r159_xn$curveto$1aao, r159_xn$cubicto$1aao, r159_xn$putshapes$9Jrj, r159_xn$reverselast$3qIs, r159_include, r159_xn$createstroke$7Hrq, r159_xn$setanchor$9Jrj, r159_xn$dontexport$5sIl, _r159_t0, _r159_t1, _r159_t2, _r159_t3;
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
            r159_xn$dontexport$5sIl = function _r159_t3() {
                var _r161_t0, _r161_t1;
                return r159_currentGlyph['dontExport'] = true;
            };
            _r159_t0['gizmo'] = r4_globalTransform;
            _r159_t0['set-width'](r4_WIDTH);
            r159_xn$setwidth$9Jrj(r4_WIDTH);
            r159_xn$assignunicode$7Hrq('C');
            r159_include(r4_capitalMarks);
            r159_include(r159_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t80() {
            var r163_currentGlyph, r163_xn$setwidth$9Jrj, r163_xn$assignunicode$7Hrq, r163_xn$startfrom$1aao, r163_xn$lineto$5sIl, r163_xn$curveto$1aao, r163_xn$cubicto$1aao, r163_xn$putshapes$9Jrj, r163_xn$reverselast$3qIs, r163_include, r163_xn$createstroke$7Hrq, r163_xn$setanchor$9Jrj, r163_xn$dontexport$5sIl, _r163_t0, _r163_t1, _r163_t2, _r163_t3;
            _r163_t0 = this;
            r163_currentGlyph = _r163_t0;
            r163_xn$setwidth$9Jrj = _r163_t0['set-width']['bind'](_r163_t0);
            r163_xn$assignunicode$7Hrq = function _r163_t2(r164_code) {
                var r164_code, _r164_t0, _r164_t1;
                r163_currentGlyph['assign-unicode'](r164_code);
                return r4_unicodeGlyphs[r163_currentGlyph['unicode'][r163_currentGlyph['unicode']['length'] - 1]] = r163_currentGlyph;
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
            r163_xn$dontexport$5sIl = function _r163_t3() {
                var _r165_t0, _r165_t1;
                return r163_currentGlyph['dontExport'] = true;
            };
            _r163_t0['gizmo'] = r4_globalTransform;
            _r163_t0['set-width'](r4_WIDTH);
            r163_xn$setwidth$9Jrj(r4_WIDTH);
            r163_xn$assignunicode$7Hrq('G');
            r163_include(r4_capitalMarks);
            r163_include(r163_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r163_include(r163_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t81() {
            var r167_currentGlyph, r167_xn$setwidth$9Jrj, r167_xn$assignunicode$7Hrq, r167_xn$startfrom$1aao, r167_xn$lineto$5sIl, r167_xn$curveto$1aao, r167_xn$cubicto$1aao, r167_xn$putshapes$9Jrj, r167_xn$reverselast$3qIs, r167_include, r167_xn$createstroke$7Hrq, r167_xn$setanchor$9Jrj, r167_xn$dontexport$5sIl, _r167_t0, _r167_t1, _r167_t2, _r167_t3;
            _r167_t0 = this;
            r167_currentGlyph = _r167_t0;
            r167_xn$setwidth$9Jrj = _r167_t0['set-width']['bind'](_r167_t0);
            r167_xn$assignunicode$7Hrq = function _r167_t2(r168_code) {
                var r168_code, _r168_t0, _r168_t1;
                r167_currentGlyph['assign-unicode'](r168_code);
                return r4_unicodeGlyphs[r167_currentGlyph['unicode'][r167_currentGlyph['unicode']['length'] - 1]] = r167_currentGlyph;
            };
            r167_xn$startfrom$1aao = _r167_t0['start-from']['bind'](_r167_t0);
            r167_xn$lineto$5sIl = _r167_t0['line-to']['bind'](_r167_t0);
            r167_xn$curveto$1aao = _r167_t0['curve-to']['bind'](_r167_t0);
            r167_xn$cubicto$1aao = _r167_t0['cubic-to']['bind'](_r167_t0);
            r167_xn$putshapes$9Jrj = _r167_t0['put-shapes']['bind'](_r167_t0);
            r167_xn$reverselast$3qIs = _r167_t0['reverse-last']['bind'](_r167_t0);
            r167_include = _r167_t0['include']['bind'](_r167_t0);
            r167_xn$createstroke$7Hrq = _r167_t0['create-stroke']['bind'](_r167_t0);
            r167_xn$setanchor$9Jrj = _r167_t0['set-anchor']['bind'](_r167_t0);
            r167_xn$dontexport$5sIl = function _r167_t3() {
                var _r169_t0, _r169_t1;
                return r167_currentGlyph['dontExport'] = true;
            };
            _r167_t0['gizmo'] = r4_globalTransform;
            _r167_t0['set-width'](r4_WIDTH);
            r167_xn$setwidth$9Jrj(r4_WIDTH);
            r167_xn$assignunicode$7Hrq('O');
            r167_include(r4_capitalMarks);
            r167_include(r167_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t82() {
            var r171_currentGlyph, r171_xn$setwidth$9Jrj, r171_xn$assignunicode$7Hrq, r171_xn$startfrom$1aao, r171_xn$lineto$5sIl, r171_xn$curveto$1aao, r171_xn$cubicto$1aao, r171_xn$putshapes$9Jrj, r171_xn$reverselast$3qIs, r171_include, r171_xn$createstroke$7Hrq, r171_xn$setanchor$9Jrj, r171_xn$dontexport$5sIl, _r171_t0, _r171_t1, _r171_t2, _r171_t3;
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
            r171_xn$dontexport$5sIl = function _r171_t3() {
                var _r173_t0, _r173_t1;
                return r171_currentGlyph['dontExport'] = true;
            };
            _r171_t0['gizmo'] = r4_globalTransform;
            _r171_t0['set-width'](r4_WIDTH);
            r171_xn$setwidth$9Jrj(r4_WIDTH);
            r171_xn$assignunicode$7Hrq('Q');
            r171_include(r4_glyphs['O'], r4_AS_BASE);
            r171_xn$startfrom$1aao(r4_MIDDLE, 0);
            r171_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r171_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r171_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r171_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r171_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t83() {
            var r175_currentGlyph, r175_xn$setwidth$9Jrj, r175_xn$assignunicode$7Hrq, r175_xn$startfrom$1aao, r175_xn$lineto$5sIl, r175_xn$curveto$1aao, r175_xn$cubicto$1aao, r175_xn$putshapes$9Jrj, r175_xn$reverselast$3qIs, r175_include, r175_xn$createstroke$7Hrq, r175_xn$setanchor$9Jrj, r175_xn$dontexport$5sIl, _r175_t0, _r175_t1, _r175_t2, _r175_t3;
            _r175_t0 = this;
            r175_currentGlyph = _r175_t0;
            r175_xn$setwidth$9Jrj = _r175_t0['set-width']['bind'](_r175_t0);
            r175_xn$assignunicode$7Hrq = function _r175_t2(r176_code) {
                var r176_code, _r176_t0, _r176_t1;
                r175_currentGlyph['assign-unicode'](r176_code);
                return r4_unicodeGlyphs[r175_currentGlyph['unicode'][r175_currentGlyph['unicode']['length'] - 1]] = r175_currentGlyph;
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
            r175_xn$dontexport$5sIl = function _r175_t3() {
                var _r177_t0, _r177_t1;
                return r175_currentGlyph['dontExport'] = true;
            };
            _r175_t0['gizmo'] = r4_globalTransform;
            _r175_t0['set-width'](r4_WIDTH);
            r175_xn$setwidth$9Jrj(r4_WIDTH);
            r175_xn$assignunicode$7Hrq('U');
            r175_include(r4_capitalMarks);
            r175_include(r175_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('F', function _r4_t84() {
            var r179_currentGlyph, r179_xn$setwidth$9Jrj, r179_xn$assignunicode$7Hrq, r179_xn$startfrom$1aao, r179_xn$lineto$5sIl, r179_xn$curveto$1aao, r179_xn$cubicto$1aao, r179_xn$putshapes$9Jrj, r179_xn$reverselast$3qIs, r179_include, r179_xn$createstroke$7Hrq, r179_xn$setanchor$9Jrj, r179_xn$dontexport$5sIl, _r179_t0, _r179_t1, _r179_t2, _r179_t3;
            _r179_t0 = this;
            r179_currentGlyph = _r179_t0;
            r179_xn$setwidth$9Jrj = _r179_t0['set-width']['bind'](_r179_t0);
            r179_xn$assignunicode$7Hrq = function _r179_t2(r180_code) {
                var r180_code, _r180_t0, _r180_t1;
                r179_currentGlyph['assign-unicode'](r180_code);
                return r4_unicodeGlyphs[r179_currentGlyph['unicode'][r179_currentGlyph['unicode']['length'] - 1]] = r179_currentGlyph;
            };
            r179_xn$startfrom$1aao = _r179_t0['start-from']['bind'](_r179_t0);
            r179_xn$lineto$5sIl = _r179_t0['line-to']['bind'](_r179_t0);
            r179_xn$curveto$1aao = _r179_t0['curve-to']['bind'](_r179_t0);
            r179_xn$cubicto$1aao = _r179_t0['cubic-to']['bind'](_r179_t0);
            r179_xn$putshapes$9Jrj = _r179_t0['put-shapes']['bind'](_r179_t0);
            r179_xn$reverselast$3qIs = _r179_t0['reverse-last']['bind'](_r179_t0);
            r179_include = _r179_t0['include']['bind'](_r179_t0);
            r179_xn$createstroke$7Hrq = _r179_t0['create-stroke']['bind'](_r179_t0);
            r179_xn$setanchor$9Jrj = _r179_t0['set-anchor']['bind'](_r179_t0);
            r179_xn$dontexport$5sIl = function _r179_t3() {
                var _r181_t0, _r181_t1;
                return r179_currentGlyph['dontExport'] = true;
            };
            _r179_t0['gizmo'] = r4_globalTransform;
            _r179_t0['set-width'](r4_WIDTH);
            r179_xn$setwidth$9Jrj(r4_WIDTH);
            r179_xn$assignunicode$7Hrq('F');
            r179_include(r4_capitalMarks);
            r179_include(r179_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
            r179_include(r179_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r179_include(r179_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t85() {
            var r183_currentGlyph, r183_xn$setwidth$9Jrj, r183_xn$assignunicode$7Hrq, r183_xn$startfrom$1aao, r183_xn$lineto$5sIl, r183_xn$curveto$1aao, r183_xn$cubicto$1aao, r183_xn$putshapes$9Jrj, r183_xn$reverselast$3qIs, r183_include, r183_xn$createstroke$7Hrq, r183_xn$setanchor$9Jrj, r183_xn$dontexport$5sIl, _r183_t0, _r183_t1, _r183_t2, _r183_t3;
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
            r183_xn$dontexport$5sIl = function _r183_t3() {
                var _r185_t0, _r185_t1;
                return r183_currentGlyph['dontExport'] = true;
            };
            _r183_t0['gizmo'] = r4_globalTransform;
            _r183_t0['set-width'](r4_WIDTH);
            r183_xn$setwidth$9Jrj(r4_WIDTH);
            r183_xn$assignunicode$7Hrq('E');
            r183_include(r4_glyphs['F'], r4_AS_BASE);
            r183_include(r183_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t86() {
            var r187_currentGlyph, r187_xn$setwidth$9Jrj, r187_xn$assignunicode$7Hrq, r187_xn$startfrom$1aao, r187_xn$lineto$5sIl, r187_xn$curveto$1aao, r187_xn$cubicto$1aao, r187_xn$putshapes$9Jrj, r187_xn$reverselast$3qIs, r187_include, r187_xn$createstroke$7Hrq, r187_xn$setanchor$9Jrj, r187_xn$dontexport$5sIl, _r187_t0, _r187_t1, _r187_t2, _r187_t3;
            _r187_t0 = this;
            r187_currentGlyph = _r187_t0;
            r187_xn$setwidth$9Jrj = _r187_t0['set-width']['bind'](_r187_t0);
            r187_xn$assignunicode$7Hrq = function _r187_t2(r188_code) {
                var r188_code, _r188_t0, _r188_t1;
                r187_currentGlyph['assign-unicode'](r188_code);
                return r4_unicodeGlyphs[r187_currentGlyph['unicode'][r187_currentGlyph['unicode']['length'] - 1]] = r187_currentGlyph;
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
            r187_xn$dontexport$5sIl = function _r187_t3() {
                var _r189_t0, _r189_t1;
                return r187_currentGlyph['dontExport'] = true;
            };
            _r187_t0['gizmo'] = r4_globalTransform;
            _r187_t0['set-width'](r4_WIDTH);
            r187_xn$setwidth$9Jrj(r4_WIDTH);
            r187_xn$assignunicode$7Hrq('H');
            r187_include(r4_capitalMarks);
            r187_include(r187_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r187_include(r187_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r187_include(r187_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t87() {
            var r191_currentGlyph, r191_xn$setwidth$9Jrj, r191_xn$assignunicode$7Hrq, r191_xn$startfrom$1aao, r191_xn$lineto$5sIl, r191_xn$curveto$1aao, r191_xn$cubicto$1aao, r191_xn$putshapes$9Jrj, r191_xn$reverselast$3qIs, r191_include, r191_xn$createstroke$7Hrq, r191_xn$setanchor$9Jrj, r191_xn$dontexport$5sIl, _r191_t0, _r191_t1, _r191_t2, _r191_t3;
            _r191_t0 = this;
            r191_currentGlyph = _r191_t0;
            r191_xn$setwidth$9Jrj = _r191_t0['set-width']['bind'](_r191_t0);
            r191_xn$assignunicode$7Hrq = function _r191_t2(r192_code) {
                var r192_code, _r192_t0, _r192_t1;
                r191_currentGlyph['assign-unicode'](r192_code);
                return r4_unicodeGlyphs[r191_currentGlyph['unicode'][r191_currentGlyph['unicode']['length'] - 1]] = r191_currentGlyph;
            };
            r191_xn$startfrom$1aao = _r191_t0['start-from']['bind'](_r191_t0);
            r191_xn$lineto$5sIl = _r191_t0['line-to']['bind'](_r191_t0);
            r191_xn$curveto$1aao = _r191_t0['curve-to']['bind'](_r191_t0);
            r191_xn$cubicto$1aao = _r191_t0['cubic-to']['bind'](_r191_t0);
            r191_xn$putshapes$9Jrj = _r191_t0['put-shapes']['bind'](_r191_t0);
            r191_xn$reverselast$3qIs = _r191_t0['reverse-last']['bind'](_r191_t0);
            r191_include = _r191_t0['include']['bind'](_r191_t0);
            r191_xn$createstroke$7Hrq = _r191_t0['create-stroke']['bind'](_r191_t0);
            r191_xn$setanchor$9Jrj = _r191_t0['set-anchor']['bind'](_r191_t0);
            r191_xn$dontexport$5sIl = function _r191_t3() {
                var _r193_t0, _r193_t1;
                return r191_currentGlyph['dontExport'] = true;
            };
            _r191_t0['gizmo'] = r4_globalTransform;
            _r191_t0['set-width'](r4_WIDTH);
            r191_xn$setwidth$9Jrj(r4_WIDTH);
            r191_xn$assignunicode$7Hrq('L');
            r191_include(r4_capitalMarks);
            r191_include(r191_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r191_include(r191_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t88() {
            var r195_currentGlyph, r195_xn$setwidth$9Jrj, r195_xn$assignunicode$7Hrq, r195_xn$startfrom$1aao, r195_xn$lineto$5sIl, r195_xn$curveto$1aao, r195_xn$cubicto$1aao, r195_xn$putshapes$9Jrj, r195_xn$reverselast$3qIs, r195_include, r195_xn$createstroke$7Hrq, r195_xn$setanchor$9Jrj, r195_xn$dontexport$5sIl, _r195_t0, _r195_t1, _r195_t2, _r195_t3;
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
            r195_xn$dontexport$5sIl = function _r195_t3() {
                var _r197_t0, _r197_t1;
                return r195_currentGlyph['dontExport'] = true;
            };
            _r195_t0['gizmo'] = r4_globalTransform;
            _r195_t0['set-width'](r4_WIDTH);
            r195_xn$dontexport$5sIl();
            r195_include(r4_capitalMarks);
            r195_include(r195_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t89() {
            var r199_currentGlyph, r199_xn$setwidth$9Jrj, r199_xn$assignunicode$7Hrq, r199_xn$startfrom$1aao, r199_xn$lineto$5sIl, r199_xn$curveto$1aao, r199_xn$cubicto$1aao, r199_xn$putshapes$9Jrj, r199_xn$reverselast$3qIs, r199_include, r199_xn$createstroke$7Hrq, r199_xn$setanchor$9Jrj, r199_xn$dontexport$5sIl, _r199_t0, _r199_t1, _r199_t2, _r199_t3;
            _r199_t0 = this;
            r199_currentGlyph = _r199_t0;
            r199_xn$setwidth$9Jrj = _r199_t0['set-width']['bind'](_r199_t0);
            r199_xn$assignunicode$7Hrq = function _r199_t2(r200_code) {
                var r200_code, _r200_t0, _r200_t1;
                r199_currentGlyph['assign-unicode'](r200_code);
                return r4_unicodeGlyphs[r199_currentGlyph['unicode'][r199_currentGlyph['unicode']['length'] - 1]] = r199_currentGlyph;
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
            r199_xn$dontexport$5sIl = function _r199_t3() {
                var _r201_t0, _r201_t1;
                return r199_currentGlyph['dontExport'] = true;
            };
            _r199_t0['gizmo'] = r4_globalTransform;
            _r199_t0['set-width'](r4_WIDTH);
            r199_xn$dontexport$5sIl();
            r199_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r199_include(r199_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r199_include(r199_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t90() {
            var r203_currentGlyph, r203_xn$setwidth$9Jrj, r203_xn$assignunicode$7Hrq, r203_xn$startfrom$1aao, r203_xn$lineto$5sIl, r203_xn$curveto$1aao, r203_xn$cubicto$1aao, r203_xn$putshapes$9Jrj, r203_xn$reverselast$3qIs, r203_include, r203_xn$createstroke$7Hrq, r203_xn$setanchor$9Jrj, r203_xn$dontexport$5sIl, _r203_t0, _r203_t1, _r203_t2, _r203_t3;
            _r203_t0 = this;
            r203_currentGlyph = _r203_t0;
            r203_xn$setwidth$9Jrj = _r203_t0['set-width']['bind'](_r203_t0);
            r203_xn$assignunicode$7Hrq = function _r203_t2(r204_code) {
                var r204_code, _r204_t0, _r204_t1;
                r203_currentGlyph['assign-unicode'](r204_code);
                return r4_unicodeGlyphs[r203_currentGlyph['unicode'][r203_currentGlyph['unicode']['length'] - 1]] = r203_currentGlyph;
            };
            r203_xn$startfrom$1aao = _r203_t0['start-from']['bind'](_r203_t0);
            r203_xn$lineto$5sIl = _r203_t0['line-to']['bind'](_r203_t0);
            r203_xn$curveto$1aao = _r203_t0['curve-to']['bind'](_r203_t0);
            r203_xn$cubicto$1aao = _r203_t0['cubic-to']['bind'](_r203_t0);
            r203_xn$putshapes$9Jrj = _r203_t0['put-shapes']['bind'](_r203_t0);
            r203_xn$reverselast$3qIs = _r203_t0['reverse-last']['bind'](_r203_t0);
            r203_include = _r203_t0['include']['bind'](_r203_t0);
            r203_xn$createstroke$7Hrq = _r203_t0['create-stroke']['bind'](_r203_t0);
            r203_xn$setanchor$9Jrj = _r203_t0['set-anchor']['bind'](_r203_t0);
            r203_xn$dontexport$5sIl = function _r203_t3() {
                var _r205_t0, _r205_t1;
                return r203_currentGlyph['dontExport'] = true;
            };
            _r203_t0['gizmo'] = r4_globalTransform;
            _r203_t0['set-width'](r4_WIDTH);
            r203_xn$setwidth$9Jrj(r4_WIDTH);
            r203_xn$assignunicode$7Hrq('T');
            r203_include(r4_capitalMarks);
            r203_include(r203_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r203_include(r203_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t91() {
            var r207_currentGlyph, r207_xn$setwidth$9Jrj, r207_xn$assignunicode$7Hrq, r207_xn$startfrom$1aao, r207_xn$lineto$5sIl, r207_xn$curveto$1aao, r207_xn$cubicto$1aao, r207_xn$putshapes$9Jrj, r207_xn$reverselast$3qIs, r207_include, r207_xn$createstroke$7Hrq, r207_xn$setanchor$9Jrj, r207_xn$dontexport$5sIl, r207_cor, _r207_t0, _r207_t1, _r207_t2, _r207_t3;
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
            r207_xn$dontexport$5sIl = function _r207_t3() {
                var _r209_t0, _r209_t1;
                return r207_currentGlyph['dontExport'] = true;
            };
            _r207_t0['gizmo'] = r4_globalTransform;
            _r207_t0['set-width'](r4_WIDTH);
            r207_xn$setwidth$9Jrj(r4_WIDTH);
            r207_xn$assignunicode$7Hrq('Z');
            r207_include(r4_capitalMarks);
            r207_cor = 1.15;
            r207_include(r207_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r207_include(r207_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r207_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r207_xn$lineto$5sIl(r4_SB + r4_STROKE * r207_cor, r4_STROKE);
            r207_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r207_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r207_cor, r4_CAP - r4_STROKE);
            r207_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t92() {
            var r211_currentGlyph, r211_xn$setwidth$9Jrj, r211_xn$assignunicode$7Hrq, r211_xn$startfrom$1aao, r211_xn$lineto$5sIl, r211_xn$curveto$1aao, r211_xn$cubicto$1aao, r211_xn$putshapes$9Jrj, r211_xn$reverselast$3qIs, r211_include, r211_xn$createstroke$7Hrq, r211_xn$setanchor$9Jrj, r211_xn$dontexport$5sIl, r211_slope, r211_expand, r211_coexpand, r211_kappa, r211_smooth, r211_hookx, _r211_t0, _r211_t1, _r211_t2, _r211_t3;
            _r211_t0 = this;
            r211_currentGlyph = _r211_t0;
            r211_xn$setwidth$9Jrj = _r211_t0['set-width']['bind'](_r211_t0);
            r211_xn$assignunicode$7Hrq = function _r211_t2(r212_code) {
                var r212_code, _r212_t0, _r212_t1;
                r211_currentGlyph['assign-unicode'](r212_code);
                return r4_unicodeGlyphs[r211_currentGlyph['unicode'][r211_currentGlyph['unicode']['length'] - 1]] = r211_currentGlyph;
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
            r211_xn$dontexport$5sIl = function _r211_t3() {
                var _r213_t0, _r213_t1;
                return r211_currentGlyph['dontExport'] = true;
            };
            _r211_t0['gizmo'] = r4_globalTransform;
            _r211_t0['set-width'](r4_WIDTH);
            r211_xn$setwidth$9Jrj(r4_WIDTH);
            r211_xn$dontexport$5sIl();
            r211_include(r4_capitalMarks);
            r211_slope = r4_STROKE * 0.00092;
            r211_expand = 0.35;
            r211_coexpand = (1 - r211_expand) / 2;
            r211_kappa = r4_KAPPA_HOOK;
            r211_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r211_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r211_include(r211_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r211_smooth)['arc-vh-to'](r0_mix(r211_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r211_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r211_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t93() {
            var r215_currentGlyph, r215_xn$setwidth$9Jrj, r215_xn$assignunicode$7Hrq, r215_xn$startfrom$1aao, r215_xn$lineto$5sIl, r215_xn$curveto$1aao, r215_xn$cubicto$1aao, r215_xn$putshapes$9Jrj, r215_xn$reverselast$3qIs, r215_include, r215_xn$createstroke$7Hrq, r215_xn$setanchor$9Jrj, r215_xn$dontexport$5sIl, _r215_t0, _r215_t1, _r215_t2, _r215_t3;
            _r215_t0 = this;
            r215_currentGlyph = _r215_t0;
            r215_xn$setwidth$9Jrj = _r215_t0['set-width']['bind'](_r215_t0);
            r215_xn$assignunicode$7Hrq = function _r215_t2(r216_code) {
                var r216_code, _r216_t0, _r216_t1;
                r215_currentGlyph['assign-unicode'](r216_code);
                return r4_unicodeGlyphs[r215_currentGlyph['unicode'][r215_currentGlyph['unicode']['length'] - 1]] = r215_currentGlyph;
            };
            r215_xn$startfrom$1aao = _r215_t0['start-from']['bind'](_r215_t0);
            r215_xn$lineto$5sIl = _r215_t0['line-to']['bind'](_r215_t0);
            r215_xn$curveto$1aao = _r215_t0['curve-to']['bind'](_r215_t0);
            r215_xn$cubicto$1aao = _r215_t0['cubic-to']['bind'](_r215_t0);
            r215_xn$putshapes$9Jrj = _r215_t0['put-shapes']['bind'](_r215_t0);
            r215_xn$reverselast$3qIs = _r215_t0['reverse-last']['bind'](_r215_t0);
            r215_include = _r215_t0['include']['bind'](_r215_t0);
            r215_xn$createstroke$7Hrq = _r215_t0['create-stroke']['bind'](_r215_t0);
            r215_xn$setanchor$9Jrj = _r215_t0['set-anchor']['bind'](_r215_t0);
            r215_xn$dontexport$5sIl = function _r215_t3() {
                var _r217_t0, _r217_t1;
                return r215_currentGlyph['dontExport'] = true;
            };
            _r215_t0['gizmo'] = r4_globalTransform;
            _r215_t0['set-width'](r4_WIDTH);
            r215_xn$setwidth$9Jrj(r4_WIDTH);
            r215_xn$dontexport$5sIl();
            r215_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r215_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t94() {
            var r219_currentGlyph, r219_xn$setwidth$9Jrj, r219_xn$assignunicode$7Hrq, r219_xn$startfrom$1aao, r219_xn$lineto$5sIl, r219_xn$curveto$1aao, r219_xn$cubicto$1aao, r219_xn$putshapes$9Jrj, r219_xn$reverselast$3qIs, r219_include, r219_xn$createstroke$7Hrq, r219_xn$setanchor$9Jrj, r219_xn$dontexport$5sIl, r219_topstroke, r219_halftopstroke, _r219_t0, _r219_t1, _r219_t2, _r219_t3;
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
            r219_xn$dontexport$5sIl = function _r219_t3() {
                var _r221_t0, _r221_t1;
                return r219_currentGlyph['dontExport'] = true;
            };
            _r219_t0['gizmo'] = r4_globalTransform;
            _r219_t0['set-width'](r4_WIDTH);
            r219_xn$setwidth$9Jrj(r4_WIDTH);
            r219_xn$assignunicode$7Hrq('N');
            r219_include(r4_capitalMarks);
            r219_topstroke = r4_adviceBlackness(4);
            r219_halftopstroke = r219_topstroke / 2;
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r219_topstroke));
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r219_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r219_include(r219_xn$createstroke$7Hrq()['start-from'](r4_SB + r219_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r219_topstroke, 0)['line-to'](r4_RIGHTSB - r219_topstroke - r219_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t95() {
            var r223_currentGlyph, r223_xn$setwidth$9Jrj, r223_xn$assignunicode$7Hrq, r223_xn$startfrom$1aao, r223_xn$lineto$5sIl, r223_xn$curveto$1aao, r223_xn$cubicto$1aao, r223_xn$putshapes$9Jrj, r223_xn$reverselast$3qIs, r223_include, r223_xn$createstroke$7Hrq, r223_xn$setanchor$9Jrj, r223_xn$dontexport$5sIl, r223_topstroke, r223_halftopstroke, _r223_t0, _r223_t1, _r223_t2, _r223_t3;
            _r223_t0 = this;
            r223_currentGlyph = _r223_t0;
            r223_xn$setwidth$9Jrj = _r223_t0['set-width']['bind'](_r223_t0);
            r223_xn$assignunicode$7Hrq = function _r223_t2(r224_code) {
                var r224_code, _r224_t0, _r224_t1;
                r223_currentGlyph['assign-unicode'](r224_code);
                return r4_unicodeGlyphs[r223_currentGlyph['unicode'][r223_currentGlyph['unicode']['length'] - 1]] = r223_currentGlyph;
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
            r223_xn$dontexport$5sIl = function _r223_t3() {
                var _r225_t0, _r225_t1;
                return r223_currentGlyph['dontExport'] = true;
            };
            _r223_t0['gizmo'] = r4_globalTransform;
            _r223_t0['set-width'](r4_WIDTH);
            r223_xn$setwidth$9Jrj(r4_WIDTH);
            r223_xn$assignunicode$7Hrq('M');
            r223_include(r4_capitalMarks);
            r223_topstroke = r4_adviceBlackness(5);
            r223_halftopstroke = r223_topstroke / 2;
            r223_include(r223_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r223_topstroke));
            r223_include(r223_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r223_topstroke, 0));
            r223_include(r223_xn$createstroke$7Hrq()['start-from'](r4_SB + r223_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r223_topstroke, 0)['line-to'](r4_MIDDLE - r223_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r223_include(r223_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r223_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r223_topstroke, 0)['line-to'](r4_RIGHTSB - r223_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t96() {
            var r227_currentGlyph, r227_xn$setwidth$9Jrj, r227_xn$assignunicode$7Hrq, r227_xn$startfrom$1aao, r227_xn$lineto$5sIl, r227_xn$curveto$1aao, r227_xn$cubicto$1aao, r227_xn$putshapes$9Jrj, r227_xn$reverselast$3qIs, r227_include, r227_xn$createstroke$7Hrq, r227_xn$setanchor$9Jrj, r227_xn$dontexport$5sIl, _r227_t0, _r227_t1, _r227_t2, _r227_t3;
            _r227_t0 = this;
            r227_currentGlyph = _r227_t0;
            r227_xn$setwidth$9Jrj = _r227_t0['set-width']['bind'](_r227_t0);
            r227_xn$assignunicode$7Hrq = function _r227_t2(r228_code) {
                var r228_code, _r228_t0, _r228_t1;
                r227_currentGlyph['assign-unicode'](r228_code);
                return r4_unicodeGlyphs[r227_currentGlyph['unicode'][r227_currentGlyph['unicode']['length'] - 1]] = r227_currentGlyph;
            };
            r227_xn$startfrom$1aao = _r227_t0['start-from']['bind'](_r227_t0);
            r227_xn$lineto$5sIl = _r227_t0['line-to']['bind'](_r227_t0);
            r227_xn$curveto$1aao = _r227_t0['curve-to']['bind'](_r227_t0);
            r227_xn$cubicto$1aao = _r227_t0['cubic-to']['bind'](_r227_t0);
            r227_xn$putshapes$9Jrj = _r227_t0['put-shapes']['bind'](_r227_t0);
            r227_xn$reverselast$3qIs = _r227_t0['reverse-last']['bind'](_r227_t0);
            r227_include = _r227_t0['include']['bind'](_r227_t0);
            r227_xn$createstroke$7Hrq = _r227_t0['create-stroke']['bind'](_r227_t0);
            r227_xn$setanchor$9Jrj = _r227_t0['set-anchor']['bind'](_r227_t0);
            r227_xn$dontexport$5sIl = function _r227_t3() {
                var _r229_t0, _r229_t1;
                return r227_currentGlyph['dontExport'] = true;
            };
            _r227_t0['gizmo'] = r4_globalTransform;
            _r227_t0['set-width'](r4_WIDTH);
            r227_xn$setwidth$9Jrj(r4_WIDTH);
            r227_xn$assignunicode$7Hrq('S');
            r227_include(r4_capitalMarks);
            r227_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r227_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r227_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t97() {
            var r231_currentGlyph, r231_xn$setwidth$9Jrj, r231_xn$assignunicode$7Hrq, r231_xn$startfrom$1aao, r231_xn$lineto$5sIl, r231_xn$curveto$1aao, r231_xn$cubicto$1aao, r231_xn$putshapes$9Jrj, r231_xn$reverselast$3qIs, r231_include, r231_xn$createstroke$7Hrq, r231_xn$setanchor$9Jrj, r231_xn$dontexport$5sIl, _r231_t0, _r231_t1, _r231_t2, _r231_t3;
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
            r231_xn$dontexport$5sIl = function _r231_t3() {
                var _r233_t0, _r233_t1;
                return r231_currentGlyph['dontExport'] = true;
            };
            _r231_t0['gizmo'] = r4_globalTransform;
            _r231_t0['set-width'](r4_WIDTH);
            r231_xn$setwidth$9Jrj(r4_WIDTH);
            r231_xn$assignunicode$7Hrq('o');
            r231_include(r4_eMarks);
            r231_include(r231_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.left', function _r4_t98() {
            var r235_currentGlyph, r235_xn$setwidth$9Jrj, r235_xn$assignunicode$7Hrq, r235_xn$startfrom$1aao, r235_xn$lineto$5sIl, r235_xn$curveto$1aao, r235_xn$cubicto$1aao, r235_xn$putshapes$9Jrj, r235_xn$reverselast$3qIs, r235_include, r235_xn$createstroke$7Hrq, r235_xn$setanchor$9Jrj, r235_xn$dontexport$5sIl, _r235_t0, _r235_t1, _r235_t2, _r235_t3;
            _r235_t0 = this;
            r235_currentGlyph = _r235_t0;
            r235_xn$setwidth$9Jrj = _r235_t0['set-width']['bind'](_r235_t0);
            r235_xn$assignunicode$7Hrq = function _r235_t2(r236_code) {
                var r236_code, _r236_t0, _r236_t1;
                r235_currentGlyph['assign-unicode'](r236_code);
                return r4_unicodeGlyphs[r235_currentGlyph['unicode'][r235_currentGlyph['unicode']['length'] - 1]] = r235_currentGlyph;
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
            r235_xn$dontexport$5sIl = function _r235_t3() {
                var _r237_t0, _r237_t1;
                return r235_currentGlyph['dontExport'] = true;
            };
            _r235_t0['gizmo'] = r4_globalTransform;
            _r235_t0['set-width'](r4_WIDTH);
            r235_xn$dontexport$5sIl();
            r235_xn$setwidth$9Jrj(r4_WIDTH);
            r235_include(r235_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
            r235_include(r235_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.right', function _r4_t99() {
            var r239_currentGlyph, r239_xn$setwidth$9Jrj, r239_xn$assignunicode$7Hrq, r239_xn$startfrom$1aao, r239_xn$lineto$5sIl, r239_xn$curveto$1aao, r239_xn$cubicto$1aao, r239_xn$putshapes$9Jrj, r239_xn$reverselast$3qIs, r239_include, r239_xn$createstroke$7Hrq, r239_xn$setanchor$9Jrj, r239_xn$dontexport$5sIl, _r239_t0, _r239_t1, _r239_t2, _r239_t3;
            _r239_t0 = this;
            r239_currentGlyph = _r239_t0;
            r239_xn$setwidth$9Jrj = _r239_t0['set-width']['bind'](_r239_t0);
            r239_xn$assignunicode$7Hrq = function _r239_t2(r240_code) {
                var r240_code, _r240_t0, _r240_t1;
                r239_currentGlyph['assign-unicode'](r240_code);
                return r4_unicodeGlyphs[r239_currentGlyph['unicode'][r239_currentGlyph['unicode']['length'] - 1]] = r239_currentGlyph;
            };
            r239_xn$startfrom$1aao = _r239_t0['start-from']['bind'](_r239_t0);
            r239_xn$lineto$5sIl = _r239_t0['line-to']['bind'](_r239_t0);
            r239_xn$curveto$1aao = _r239_t0['curve-to']['bind'](_r239_t0);
            r239_xn$cubicto$1aao = _r239_t0['cubic-to']['bind'](_r239_t0);
            r239_xn$putshapes$9Jrj = _r239_t0['put-shapes']['bind'](_r239_t0);
            r239_xn$reverselast$3qIs = _r239_t0['reverse-last']['bind'](_r239_t0);
            r239_include = _r239_t0['include']['bind'](_r239_t0);
            r239_xn$createstroke$7Hrq = _r239_t0['create-stroke']['bind'](_r239_t0);
            r239_xn$setanchor$9Jrj = _r239_t0['set-anchor']['bind'](_r239_t0);
            r239_xn$dontexport$5sIl = function _r239_t3() {
                var _r241_t0, _r241_t1;
                return r239_currentGlyph['dontExport'] = true;
            };
            _r239_t0['gizmo'] = r4_globalTransform;
            _r239_t0['set-width'](r4_WIDTH);
            r239_xn$dontexport$5sIl();
            r239_xn$setwidth$9Jrj(r4_WIDTH);
            r239_include(r239_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r239_include(r239_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('p', function _r4_t100() {
            var r243_currentGlyph, r243_xn$setwidth$9Jrj, r243_xn$assignunicode$7Hrq, r243_xn$startfrom$1aao, r243_xn$lineto$5sIl, r243_xn$curveto$1aao, r243_xn$cubicto$1aao, r243_xn$putshapes$9Jrj, r243_xn$reverselast$3qIs, r243_include, r243_xn$createstroke$7Hrq, r243_xn$setanchor$9Jrj, r243_xn$dontexport$5sIl, _r243_t0, _r243_t1, _r243_t2, _r243_t3;
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
            r243_xn$dontexport$5sIl = function _r243_t3() {
                var _r245_t0, _r245_t1;
                return r243_currentGlyph['dontExport'] = true;
            };
            _r243_t0['gizmo'] = r4_globalTransform;
            _r243_t0['set-width'](r4_WIDTH);
            r243_xn$setwidth$9Jrj(r4_WIDTH);
            r243_xn$assignunicode$7Hrq('p');
            r243_include(r4_eMarks);
            r243_include(r4_glyphs['o.left']);
            r243_include(r243_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t101() {
            var r247_currentGlyph, r247_xn$setwidth$9Jrj, r247_xn$assignunicode$7Hrq, r247_xn$startfrom$1aao, r247_xn$lineto$5sIl, r247_xn$curveto$1aao, r247_xn$cubicto$1aao, r247_xn$putshapes$9Jrj, r247_xn$reverselast$3qIs, r247_include, r247_xn$createstroke$7Hrq, r247_xn$setanchor$9Jrj, r247_xn$dontexport$5sIl, _r247_t0, _r247_t1, _r247_t2, _r247_t3;
            _r247_t0 = this;
            r247_currentGlyph = _r247_t0;
            r247_xn$setwidth$9Jrj = _r247_t0['set-width']['bind'](_r247_t0);
            r247_xn$assignunicode$7Hrq = function _r247_t2(r248_code) {
                var r248_code, _r248_t0, _r248_t1;
                r247_currentGlyph['assign-unicode'](r248_code);
                return r4_unicodeGlyphs[r247_currentGlyph['unicode'][r247_currentGlyph['unicode']['length'] - 1]] = r247_currentGlyph;
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
            r247_xn$dontexport$5sIl = function _r247_t3() {
                var _r249_t0, _r249_t1;
                return r247_currentGlyph['dontExport'] = true;
            };
            _r247_t0['gizmo'] = r4_globalTransform;
            _r247_t0['set-width'](r4_WIDTH);
            r247_xn$setwidth$9Jrj(r4_WIDTH);
            r247_xn$assignunicode$7Hrq('b');
            r247_include(r4_bMarks);
            r247_xn$putshapes$9Jrj(r4_glyphs['o.left']['contours']);
            r247_include(r247_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t102() {
            var r251_currentGlyph, r251_xn$setwidth$9Jrj, r251_xn$assignunicode$7Hrq, r251_xn$startfrom$1aao, r251_xn$lineto$5sIl, r251_xn$curveto$1aao, r251_xn$cubicto$1aao, r251_xn$putshapes$9Jrj, r251_xn$reverselast$3qIs, r251_include, r251_xn$createstroke$7Hrq, r251_xn$setanchor$9Jrj, r251_xn$dontexport$5sIl, _r251_t0, _r251_t1, _r251_t2, _r251_t3;
            _r251_t0 = this;
            r251_currentGlyph = _r251_t0;
            r251_xn$setwidth$9Jrj = _r251_t0['set-width']['bind'](_r251_t0);
            r251_xn$assignunicode$7Hrq = function _r251_t2(r252_code) {
                var r252_code, _r252_t0, _r252_t1;
                r251_currentGlyph['assign-unicode'](r252_code);
                return r4_unicodeGlyphs[r251_currentGlyph['unicode'][r251_currentGlyph['unicode']['length'] - 1]] = r251_currentGlyph;
            };
            r251_xn$startfrom$1aao = _r251_t0['start-from']['bind'](_r251_t0);
            r251_xn$lineto$5sIl = _r251_t0['line-to']['bind'](_r251_t0);
            r251_xn$curveto$1aao = _r251_t0['curve-to']['bind'](_r251_t0);
            r251_xn$cubicto$1aao = _r251_t0['cubic-to']['bind'](_r251_t0);
            r251_xn$putshapes$9Jrj = _r251_t0['put-shapes']['bind'](_r251_t0);
            r251_xn$reverselast$3qIs = _r251_t0['reverse-last']['bind'](_r251_t0);
            r251_include = _r251_t0['include']['bind'](_r251_t0);
            r251_xn$createstroke$7Hrq = _r251_t0['create-stroke']['bind'](_r251_t0);
            r251_xn$setanchor$9Jrj = _r251_t0['set-anchor']['bind'](_r251_t0);
            r251_xn$dontexport$5sIl = function _r251_t3() {
                var _r253_t0, _r253_t1;
                return r251_currentGlyph['dontExport'] = true;
            };
            _r251_t0['gizmo'] = r4_globalTransform;
            _r251_t0['set-width'](r4_WIDTH);
            r251_xn$setwidth$9Jrj(r4_WIDTH);
            r251_xn$assignunicode$7Hrq('q');
            r251_include(r4_eMarks);
            r251_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r251_include(r251_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t103() {
            var r255_currentGlyph, r255_xn$setwidth$9Jrj, r255_xn$assignunicode$7Hrq, r255_xn$startfrom$1aao, r255_xn$lineto$5sIl, r255_xn$curveto$1aao, r255_xn$cubicto$1aao, r255_xn$putshapes$9Jrj, r255_xn$reverselast$3qIs, r255_include, r255_xn$createstroke$7Hrq, r255_xn$setanchor$9Jrj, r255_xn$dontexport$5sIl, _r255_t0, _r255_t1, _r255_t2, _r255_t3;
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
            r255_xn$dontexport$5sIl = function _r255_t3() {
                var _r257_t0, _r257_t1;
                return r255_currentGlyph['dontExport'] = true;
            };
            _r255_t0['gizmo'] = r4_globalTransform;
            _r255_t0['set-width'](r4_WIDTH);
            r255_xn$setwidth$9Jrj(r4_WIDTH);
            r255_xn$assignunicode$7Hrq('d');
            r255_include(r4_bMarks);
            r255_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r255_include(r255_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t104() {
            var r259_currentGlyph, r259_xn$setwidth$9Jrj, r259_xn$assignunicode$7Hrq, r259_xn$startfrom$1aao, r259_xn$lineto$5sIl, r259_xn$curveto$1aao, r259_xn$cubicto$1aao, r259_xn$putshapes$9Jrj, r259_xn$reverselast$3qIs, r259_include, r259_xn$createstroke$7Hrq, r259_xn$setanchor$9Jrj, r259_xn$dontexport$5sIl, r259_gleftx, r259_grightx, r259_groundy, _r259_t0, _r259_t1, _r259_t2, _r259_t3;
            _r259_t0 = this;
            r259_currentGlyph = _r259_t0;
            r259_xn$setwidth$9Jrj = _r259_t0['set-width']['bind'](_r259_t0);
            r259_xn$assignunicode$7Hrq = function _r259_t2(r260_code) {
                var r260_code, _r260_t0, _r260_t1;
                r259_currentGlyph['assign-unicode'](r260_code);
                return r4_unicodeGlyphs[r259_currentGlyph['unicode'][r259_currentGlyph['unicode']['length'] - 1]] = r259_currentGlyph;
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
            r259_xn$dontexport$5sIl = function _r259_t3() {
                var _r261_t0, _r261_t1;
                return r259_currentGlyph['dontExport'] = true;
            };
            _r259_t0['gizmo'] = r4_globalTransform;
            _r259_t0['set-width'](r4_WIDTH);
            r259_xn$setwidth$9Jrj(r4_WIDTH);
            r259_xn$assignunicode$7Hrq('g');
            r259_include(r4_pMarks);
            r259_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r259_xn$reverselast$3qIs();
            r259_gleftx = r4_SB * 0.8 + r4_O;
            r259_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r259_groundy = r0_mix(r4_DESCENDER, r4_XH * r4_GBARPOS, 0.7) + r4_HALFSTROKE;
            r259_include(r259_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r259_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r259_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r259_groundy)['arc-hv-to'](r259_grightx, r0_mix(r4_DESCENDER + r4_O, r259_groundy, 0.53))['arc-vh-to'](r0_mix(r259_gleftx, r259_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r259_gleftx, r0_mix(r4_DESCENDER + r4_O, r259_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r259_groundy));
            r259_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r259_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r259_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r259_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t105() {
            var r263_currentGlyph, r263_xn$setwidth$9Jrj, r263_xn$assignunicode$7Hrq, r263_xn$startfrom$1aao, r263_xn$lineto$5sIl, r263_xn$curveto$1aao, r263_xn$cubicto$1aao, r263_xn$putshapes$9Jrj, r263_xn$reverselast$3qIs, r263_include, r263_xn$createstroke$7Hrq, r263_xn$setanchor$9Jrj, r263_xn$dontexport$5sIl, _r263_t0, _r263_t1, _r263_t2, _r263_t3;
            _r263_t0 = this;
            r263_currentGlyph = _r263_t0;
            r263_xn$setwidth$9Jrj = _r263_t0['set-width']['bind'](_r263_t0);
            r263_xn$assignunicode$7Hrq = function _r263_t2(r264_code) {
                var r264_code, _r264_t0, _r264_t1;
                r263_currentGlyph['assign-unicode'](r264_code);
                return r4_unicodeGlyphs[r263_currentGlyph['unicode'][r263_currentGlyph['unicode']['length'] - 1]] = r263_currentGlyph;
            };
            r263_xn$startfrom$1aao = _r263_t0['start-from']['bind'](_r263_t0);
            r263_xn$lineto$5sIl = _r263_t0['line-to']['bind'](_r263_t0);
            r263_xn$curveto$1aao = _r263_t0['curve-to']['bind'](_r263_t0);
            r263_xn$cubicto$1aao = _r263_t0['cubic-to']['bind'](_r263_t0);
            r263_xn$putshapes$9Jrj = _r263_t0['put-shapes']['bind'](_r263_t0);
            r263_xn$reverselast$3qIs = _r263_t0['reverse-last']['bind'](_r263_t0);
            r263_include = _r263_t0['include']['bind'](_r263_t0);
            r263_xn$createstroke$7Hrq = _r263_t0['create-stroke']['bind'](_r263_t0);
            r263_xn$setanchor$9Jrj = _r263_t0['set-anchor']['bind'](_r263_t0);
            r263_xn$dontexport$5sIl = function _r263_t3() {
                var _r265_t0, _r265_t1;
                return r263_currentGlyph['dontExport'] = true;
            };
            _r263_t0['gizmo'] = r4_globalTransform;
            _r263_t0['set-width'](r4_WIDTH);
            r263_xn$setwidth$9Jrj(r4_WIDTH);
            r263_xn$assignunicode$7Hrq('c');
            r263_include(r4_eMarks);
            r263_include(r263_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t106() {
            var r267_currentGlyph, r267_xn$setwidth$9Jrj, r267_xn$assignunicode$7Hrq, r267_xn$startfrom$1aao, r267_xn$lineto$5sIl, r267_xn$curveto$1aao, r267_xn$cubicto$1aao, r267_xn$putshapes$9Jrj, r267_xn$reverselast$3qIs, r267_include, r267_xn$createstroke$7Hrq, r267_xn$setanchor$9Jrj, r267_xn$dontexport$5sIl, r267_barbottom, r267_hookx, r267_hookmiddle, _r267_t0, _r267_t1, _r267_t2, _r267_t3;
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
            r267_xn$dontexport$5sIl = function _r267_t3() {
                var _r269_t0, _r269_t1;
                return r267_currentGlyph['dontExport'] = true;
            };
            _r267_t0['gizmo'] = r4_globalTransform;
            _r267_t0['set-width'](r4_WIDTH);
            r267_xn$setwidth$9Jrj(r4_WIDTH);
            r267_xn$dontexport$5sIl();
            r267_barbottom = r4_XH * r4_EBARPOS;
            r267_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r267_hookmiddle = r0_mix(r4_SB + r4_O, r267_hookx, 0.55);
            r267_include(r267_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r267_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r267_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r267_hookmiddle, r267_hookx, r4_KAPPA_HOOK), r4_O, r267_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r267_include(r267_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r267_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r267_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t107() {
            var r271_currentGlyph, r271_xn$setwidth$9Jrj, r271_xn$assignunicode$7Hrq, r271_xn$startfrom$1aao, r271_xn$lineto$5sIl, r271_xn$curveto$1aao, r271_xn$cubicto$1aao, r271_xn$putshapes$9Jrj, r271_xn$reverselast$3qIs, r271_include, r271_xn$createstroke$7Hrq, r271_xn$setanchor$9Jrj, r271_xn$dontexport$5sIl, r271_barbottom, _r271_t0, _r271_t1, _r271_t2, _r271_t3;
            _r271_t0 = this;
            r271_currentGlyph = _r271_t0;
            r271_xn$setwidth$9Jrj = _r271_t0['set-width']['bind'](_r271_t0);
            r271_xn$assignunicode$7Hrq = function _r271_t2(r272_code) {
                var r272_code, _r272_t0, _r272_t1;
                r271_currentGlyph['assign-unicode'](r272_code);
                return r4_unicodeGlyphs[r271_currentGlyph['unicode'][r271_currentGlyph['unicode']['length'] - 1]] = r271_currentGlyph;
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
            r271_xn$dontexport$5sIl = function _r271_t3() {
                var _r273_t0, _r273_t1;
                return r271_currentGlyph['dontExport'] = true;
            };
            _r271_t0['gizmo'] = r4_globalTransform;
            _r271_t0['set-width'](r4_WIDTH);
            r271_xn$setwidth$9Jrj(r4_WIDTH);
            r271_xn$dontexport$5sIl();
            r271_barbottom = r4_XH * r4_EBARPOS;
            r271_include(r271_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r271_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t108() {
            var r275_currentGlyph, r275_xn$setwidth$9Jrj, r275_xn$assignunicode$7Hrq, r275_xn$startfrom$1aao, r275_xn$lineto$5sIl, r275_xn$curveto$1aao, r275_xn$cubicto$1aao, r275_xn$putshapes$9Jrj, r275_xn$reverselast$3qIs, r275_include, r275_xn$createstroke$7Hrq, r275_xn$setanchor$9Jrj, r275_xn$dontexport$5sIl, _r275_t0, _r275_t1, _r275_t2, _r275_t3;
            _r275_t0 = this;
            r275_currentGlyph = _r275_t0;
            r275_xn$setwidth$9Jrj = _r275_t0['set-width']['bind'](_r275_t0);
            r275_xn$assignunicode$7Hrq = function _r275_t2(r276_code) {
                var r276_code, _r276_t0, _r276_t1;
                r275_currentGlyph['assign-unicode'](r276_code);
                return r4_unicodeGlyphs[r275_currentGlyph['unicode'][r275_currentGlyph['unicode']['length'] - 1]] = r275_currentGlyph;
            };
            r275_xn$startfrom$1aao = _r275_t0['start-from']['bind'](_r275_t0);
            r275_xn$lineto$5sIl = _r275_t0['line-to']['bind'](_r275_t0);
            r275_xn$curveto$1aao = _r275_t0['curve-to']['bind'](_r275_t0);
            r275_xn$cubicto$1aao = _r275_t0['cubic-to']['bind'](_r275_t0);
            r275_xn$putshapes$9Jrj = _r275_t0['put-shapes']['bind'](_r275_t0);
            r275_xn$reverselast$3qIs = _r275_t0['reverse-last']['bind'](_r275_t0);
            r275_include = _r275_t0['include']['bind'](_r275_t0);
            r275_xn$createstroke$7Hrq = _r275_t0['create-stroke']['bind'](_r275_t0);
            r275_xn$setanchor$9Jrj = _r275_t0['set-anchor']['bind'](_r275_t0);
            r275_xn$dontexport$5sIl = function _r275_t3() {
                var _r277_t0, _r277_t1;
                return r275_currentGlyph['dontExport'] = true;
            };
            _r275_t0['gizmo'] = r4_globalTransform;
            _r275_t0['set-width'](r4_WIDTH);
            r275_xn$setwidth$9Jrj(r4_WIDTH);
            r275_xn$assignunicode$7Hrq('e');
            r275_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r275_include(r4_glyphs['e.italic']);
            } else {
                r275_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t109() {
            var r279_currentGlyph, r279_xn$setwidth$9Jrj, r279_xn$assignunicode$7Hrq, r279_xn$startfrom$1aao, r279_xn$lineto$5sIl, r279_xn$curveto$1aao, r279_xn$cubicto$1aao, r279_xn$putshapes$9Jrj, r279_xn$reverselast$3qIs, r279_include, r279_xn$createstroke$7Hrq, r279_xn$setanchor$9Jrj, r279_xn$dontexport$5sIl, r279_center, r279_hookx, r279_turn, r279_smb, _r279_t0, _r279_t1, _r279_t2, _r279_t3;
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
            r279_xn$dontexport$5sIl = function _r279_t3() {
                var _r281_t0, _r281_t1;
                return r279_currentGlyph['dontExport'] = true;
            };
            _r279_t0['gizmo'] = r4_globalTransform;
            _r279_t0['set-width'](r4_WIDTH);
            r279_xn$setwidth$9Jrj(r4_WIDTH);
            r279_xn$assignunicode$7Hrq('t');
            r279_include(r4_bMarks);
            r279_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r279_hookx = r279_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r279_turn = r0_mix(r279_center, r279_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r279_smb = (r279_turn - r279_center) * 1.1;
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r279_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r279_center, r279_smb)['arc-vh-to'](r279_turn, r4_O)['curve-to'](r279_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r279_hookx - r279_turn), r4_O, r279_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r279_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r279_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t110() {
            var r283_currentGlyph, r283_xn$setwidth$9Jrj, r283_xn$assignunicode$7Hrq, r283_xn$startfrom$1aao, r283_xn$lineto$5sIl, r283_xn$curveto$1aao, r283_xn$cubicto$1aao, r283_xn$putshapes$9Jrj, r283_xn$reverselast$3qIs, r283_include, r283_xn$createstroke$7Hrq, r283_xn$setanchor$9Jrj, r283_xn$dontexport$5sIl, r283_bartop, r283_lowmiddle, r283_barsmooth, _r283_t0, _r283_t1, _r283_t2, _r283_t3;
            _r283_t0 = this;
            r283_currentGlyph = _r283_t0;
            r283_xn$setwidth$9Jrj = _r283_t0['set-width']['bind'](_r283_t0);
            r283_xn$assignunicode$7Hrq = function _r283_t2(r284_code) {
                var r284_code, _r284_t0, _r284_t1;
                r283_currentGlyph['assign-unicode'](r284_code);
                return r4_unicodeGlyphs[r283_currentGlyph['unicode'][r283_currentGlyph['unicode']['length'] - 1]] = r283_currentGlyph;
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
            r283_xn$dontexport$5sIl = function _r283_t3() {
                var _r285_t0, _r285_t1;
                return r283_currentGlyph['dontExport'] = true;
            };
            _r283_t0['gizmo'] = r4_globalTransform;
            _r283_t0['set-width'](r4_WIDTH);
            r283_xn$setwidth$9Jrj(r4_WIDTH);
            r283_xn$dontexport$5sIl();
            r283_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r283_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r283_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r283_include(r283_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r283_include(r283_xn$createstroke$7Hrq()['start-from'](r283_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r283_bartop * 0.45)['arc-vh-to'](r283_barsmooth, r283_bartop)['line-to'](r4_RIGHTSB, r283_bartop)['heads-to'](r4_RIGHTWARD));
            r283_include(r283_xn$createstroke$7Hrq()['start-from'](r283_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t111() {
            var r287_currentGlyph, r287_xn$setwidth$9Jrj, r287_xn$assignunicode$7Hrq, r287_xn$startfrom$1aao, r287_xn$lineto$5sIl, r287_xn$curveto$1aao, r287_xn$cubicto$1aao, r287_xn$putshapes$9Jrj, r287_xn$reverselast$3qIs, r287_include, r287_xn$createstroke$7Hrq, r287_xn$setanchor$9Jrj, r287_xn$dontexport$5sIl, _r287_t0, _r287_t1, _r287_t2, _r287_t3;
            _r287_t0 = this;
            r287_currentGlyph = _r287_t0;
            r287_xn$setwidth$9Jrj = _r287_t0['set-width']['bind'](_r287_t0);
            r287_xn$assignunicode$7Hrq = function _r287_t2(r288_code) {
                var r288_code, _r288_t0, _r288_t1;
                r287_currentGlyph['assign-unicode'](r288_code);
                return r4_unicodeGlyphs[r287_currentGlyph['unicode'][r287_currentGlyph['unicode']['length'] - 1]] = r287_currentGlyph;
            };
            r287_xn$startfrom$1aao = _r287_t0['start-from']['bind'](_r287_t0);
            r287_xn$lineto$5sIl = _r287_t0['line-to']['bind'](_r287_t0);
            r287_xn$curveto$1aao = _r287_t0['curve-to']['bind'](_r287_t0);
            r287_xn$cubicto$1aao = _r287_t0['cubic-to']['bind'](_r287_t0);
            r287_xn$putshapes$9Jrj = _r287_t0['put-shapes']['bind'](_r287_t0);
            r287_xn$reverselast$3qIs = _r287_t0['reverse-last']['bind'](_r287_t0);
            r287_include = _r287_t0['include']['bind'](_r287_t0);
            r287_xn$createstroke$7Hrq = _r287_t0['create-stroke']['bind'](_r287_t0);
            r287_xn$setanchor$9Jrj = _r287_t0['set-anchor']['bind'](_r287_t0);
            r287_xn$dontexport$5sIl = function _r287_t3() {
                var _r289_t0, _r289_t1;
                return r287_currentGlyph['dontExport'] = true;
            };
            _r287_t0['gizmo'] = r4_globalTransform;
            _r287_t0['set-width'](r4_WIDTH);
            r287_xn$setwidth$9Jrj(r4_WIDTH);
            r287_xn$dontexport$5sIl();
            r287_include(r4_glyphs['o.right']);
            r287_include(r287_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t112() {
            var r291_currentGlyph, r291_xn$setwidth$9Jrj, r291_xn$assignunicode$7Hrq, r291_xn$startfrom$1aao, r291_xn$lineto$5sIl, r291_xn$curveto$1aao, r291_xn$cubicto$1aao, r291_xn$putshapes$9Jrj, r291_xn$reverselast$3qIs, r291_include, r291_xn$createstroke$7Hrq, r291_xn$setanchor$9Jrj, r291_xn$dontexport$5sIl, _r291_t0, _r291_t1, _r291_t2, _r291_t3;
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
            r291_xn$dontexport$5sIl = function _r291_t3() {
                var _r293_t0, _r293_t1;
                return r291_currentGlyph['dontExport'] = true;
            };
            _r291_t0['gizmo'] = r4_globalTransform;
            _r291_t0['set-width'](r4_WIDTH);
            r291_xn$setwidth$9Jrj(r4_WIDTH);
            r291_xn$assignunicode$7Hrq('a');
            r291_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r291_include(r4_glyphs['a.italic']);
            } else {
                r291_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t113() {
            var r295_currentGlyph, r295_xn$setwidth$9Jrj, r295_xn$assignunicode$7Hrq, r295_xn$startfrom$1aao, r295_xn$lineto$5sIl, r295_xn$curveto$1aao, r295_xn$cubicto$1aao, r295_xn$putshapes$9Jrj, r295_xn$reverselast$3qIs, r295_include, r295_xn$createstroke$7Hrq, r295_xn$setanchor$9Jrj, r295_xn$dontexport$5sIl, _r295_t0, _r295_t1, _r295_t2, _r295_t3;
            _r295_t0 = this;
            r295_currentGlyph = _r295_t0;
            r295_xn$setwidth$9Jrj = _r295_t0['set-width']['bind'](_r295_t0);
            r295_xn$assignunicode$7Hrq = function _r295_t2(r296_code) {
                var r296_code, _r296_t0, _r296_t1;
                r295_currentGlyph['assign-unicode'](r296_code);
                return r4_unicodeGlyphs[r295_currentGlyph['unicode'][r295_currentGlyph['unicode']['length'] - 1]] = r295_currentGlyph;
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
            r295_xn$dontexport$5sIl = function _r295_t3() {
                var _r297_t0, _r297_t1;
                return r295_currentGlyph['dontExport'] = true;
            };
            _r295_t0['gizmo'] = r4_globalTransform;
            _r295_t0['set-width'](r4_WIDTH);
            r295_xn$setwidth$9Jrj(r4_WIDTH);
            r295_xn$assignunicode$7Hrq('u');
            r295_include(r4_eMarks);
            r295_include(r295_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r295_include(r295_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r295_include(r295_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t114() {
            var r299_currentGlyph, r299_xn$setwidth$9Jrj, r299_xn$assignunicode$7Hrq, r299_xn$startfrom$1aao, r299_xn$lineto$5sIl, r299_xn$curveto$1aao, r299_xn$cubicto$1aao, r299_xn$putshapes$9Jrj, r299_xn$reverselast$3qIs, r299_include, r299_xn$createstroke$7Hrq, r299_xn$setanchor$9Jrj, r299_xn$dontexport$5sIl, _r299_t0, _r299_t1, _r299_t2, _r299_t3;
            _r299_t0 = this;
            r299_currentGlyph = _r299_t0;
            r299_xn$setwidth$9Jrj = _r299_t0['set-width']['bind'](_r299_t0);
            r299_xn$assignunicode$7Hrq = function _r299_t2(r300_code) {
                var r300_code, _r300_t0, _r300_t1;
                r299_currentGlyph['assign-unicode'](r300_code);
                return r4_unicodeGlyphs[r299_currentGlyph['unicode'][r299_currentGlyph['unicode']['length'] - 1]] = r299_currentGlyph;
            };
            r299_xn$startfrom$1aao = _r299_t0['start-from']['bind'](_r299_t0);
            r299_xn$lineto$5sIl = _r299_t0['line-to']['bind'](_r299_t0);
            r299_xn$curveto$1aao = _r299_t0['curve-to']['bind'](_r299_t0);
            r299_xn$cubicto$1aao = _r299_t0['cubic-to']['bind'](_r299_t0);
            r299_xn$putshapes$9Jrj = _r299_t0['put-shapes']['bind'](_r299_t0);
            r299_xn$reverselast$3qIs = _r299_t0['reverse-last']['bind'](_r299_t0);
            r299_include = _r299_t0['include']['bind'](_r299_t0);
            r299_xn$createstroke$7Hrq = _r299_t0['create-stroke']['bind'](_r299_t0);
            r299_xn$setanchor$9Jrj = _r299_t0['set-anchor']['bind'](_r299_t0);
            r299_xn$dontexport$5sIl = function _r299_t3() {
                var _r301_t0, _r301_t1;
                return r299_currentGlyph['dontExport'] = true;
            };
            _r299_t0['gizmo'] = r4_globalTransform;
            _r299_t0['set-width'](r4_WIDTH);
            r299_xn$setwidth$9Jrj(r4_WIDTH);
            r299_xn$assignunicode$7Hrq('n');
            r299_include(r4_eMarks);
            r299_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r299_include(r299_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t115() {
            var r303_currentGlyph, r303_xn$setwidth$9Jrj, r303_xn$assignunicode$7Hrq, r303_xn$startfrom$1aao, r303_xn$lineto$5sIl, r303_xn$curveto$1aao, r303_xn$cubicto$1aao, r303_xn$putshapes$9Jrj, r303_xn$reverselast$3qIs, r303_include, r303_xn$createstroke$7Hrq, r303_xn$setanchor$9Jrj, r303_xn$dontexport$5sIl, _r303_t0, _r303_t1, _r303_t2, _r303_t3;
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
            r303_xn$dontexport$5sIl = function _r303_t3() {
                var _r305_t0, _r305_t1;
                return r303_currentGlyph['dontExport'] = true;
            };
            _r303_t0['gizmo'] = r4_globalTransform;
            _r303_t0['set-width'](r4_WIDTH);
            r303_xn$setwidth$9Jrj(r4_WIDTH);
            r303_xn$assignunicode$7Hrq('h');
            r303_include(r4_bMarks);
            r303_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r303_include(r303_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t116() {
            var r307_currentGlyph, r307_xn$setwidth$9Jrj, r307_xn$assignunicode$7Hrq, r307_xn$startfrom$1aao, r307_xn$lineto$5sIl, r307_xn$curveto$1aao, r307_xn$cubicto$1aao, r307_xn$putshapes$9Jrj, r307_xn$reverselast$3qIs, r307_include, r307_xn$createstroke$7Hrq, r307_xn$setanchor$9Jrj, r307_xn$dontexport$5sIl, r307_sw, r307_m1, r307_m2, _r307_t0, _r307_t1, _r307_t2, _r307_t3;
            _r307_t0 = this;
            r307_currentGlyph = _r307_t0;
            r307_xn$setwidth$9Jrj = _r307_t0['set-width']['bind'](_r307_t0);
            r307_xn$assignunicode$7Hrq = function _r307_t2(r308_code) {
                var r308_code, _r308_t0, _r308_t1;
                r307_currentGlyph['assign-unicode'](r308_code);
                return r4_unicodeGlyphs[r307_currentGlyph['unicode'][r307_currentGlyph['unicode']['length'] - 1]] = r307_currentGlyph;
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
            r307_xn$dontexport$5sIl = function _r307_t3() {
                var _r309_t0, _r309_t1;
                return r307_currentGlyph['dontExport'] = true;
            };
            _r307_t0['gizmo'] = r4_globalTransform;
            _r307_t0['set-width'](r4_WIDTH);
            r307_xn$setwidth$9Jrj(r4_WIDTH);
            r307_xn$assignunicode$7Hrq('m');
            r307_include(r4_eMarks);
            r307_sw = r4_adviceBlackness(3.5);
            r307_m1 = (r4_MIDDLE + r4_SB + r307_sw * 0.25) / 2;
            r307_m2 = r307_m1 + (r4_MIDDLE - r307_sw / 2 - r4_SB);
            r307_include(r307_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r307_sw / 2, 0)['set-width'](0, r307_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r307_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r307_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r307_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r307_sw * 0.4));
            r307_include(r307_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r307_sw - r4_O, 0)['set-width'](0, r307_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r307_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r307_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r307_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r307_sw * 0.4));
            r307_include(r307_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r307_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t117() {
            var r311_currentGlyph, r311_xn$setwidth$9Jrj, r311_xn$assignunicode$7Hrq, r311_xn$startfrom$1aao, r311_xn$lineto$5sIl, r311_xn$curveto$1aao, r311_xn$cubicto$1aao, r311_xn$putshapes$9Jrj, r311_xn$reverselast$3qIs, r311_include, r311_xn$createstroke$7Hrq, r311_xn$setanchor$9Jrj, r311_xn$dontexport$5sIl, _r311_t0, _r311_t1, _r311_t2, _r311_t3;
            _r311_t0 = this;
            r311_currentGlyph = _r311_t0;
            r311_xn$setwidth$9Jrj = _r311_t0['set-width']['bind'](_r311_t0);
            r311_xn$assignunicode$7Hrq = function _r311_t2(r312_code) {
                var r312_code, _r312_t0, _r312_t1;
                r311_currentGlyph['assign-unicode'](r312_code);
                return r4_unicodeGlyphs[r311_currentGlyph['unicode'][r311_currentGlyph['unicode']['length'] - 1]] = r311_currentGlyph;
            };
            r311_xn$startfrom$1aao = _r311_t0['start-from']['bind'](_r311_t0);
            r311_xn$lineto$5sIl = _r311_t0['line-to']['bind'](_r311_t0);
            r311_xn$curveto$1aao = _r311_t0['curve-to']['bind'](_r311_t0);
            r311_xn$cubicto$1aao = _r311_t0['cubic-to']['bind'](_r311_t0);
            r311_xn$putshapes$9Jrj = _r311_t0['put-shapes']['bind'](_r311_t0);
            r311_xn$reverselast$3qIs = _r311_t0['reverse-last']['bind'](_r311_t0);
            r311_include = _r311_t0['include']['bind'](_r311_t0);
            r311_xn$createstroke$7Hrq = _r311_t0['create-stroke']['bind'](_r311_t0);
            r311_xn$setanchor$9Jrj = _r311_t0['set-anchor']['bind'](_r311_t0);
            r311_xn$dontexport$5sIl = function _r311_t3() {
                var _r313_t0, _r313_t1;
                return r311_currentGlyph['dontExport'] = true;
            };
            _r311_t0['gizmo'] = r4_globalTransform;
            _r311_t0['set-width'](r4_WIDTH);
            r311_xn$dontexport$5sIl();
            r311_include(r4_eMarks);
            r311_include(r311_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t118() {
            var r315_currentGlyph, r315_xn$setwidth$9Jrj, r315_xn$assignunicode$7Hrq, r315_xn$startfrom$1aao, r315_xn$lineto$5sIl, r315_xn$curveto$1aao, r315_xn$cubicto$1aao, r315_xn$putshapes$9Jrj, r315_xn$reverselast$3qIs, r315_include, r315_xn$createstroke$7Hrq, r315_xn$setanchor$9Jrj, r315_xn$dontexport$5sIl, _r315_t0, _r315_t1, _r315_t2, _r315_t3;
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
            r315_xn$dontexport$5sIl = function _r315_t3() {
                var _r317_t0, _r317_t1;
                return r315_currentGlyph['dontExport'] = true;
            };
            _r315_t0['gizmo'] = r4_globalTransform;
            _r315_t0['set-width'](r4_WIDTH);
            r315_xn$dontexport$5sIl();
            r315_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r315_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t119() {
            var r319_currentGlyph, r319_xn$setwidth$9Jrj, r319_xn$assignunicode$7Hrq, r319_xn$startfrom$1aao, r319_xn$lineto$5sIl, r319_xn$curveto$1aao, r319_xn$cubicto$1aao, r319_xn$putshapes$9Jrj, r319_xn$reverselast$3qIs, r319_include, r319_xn$createstroke$7Hrq, r319_xn$setanchor$9Jrj, r319_xn$dontexport$5sIl, _r319_t0, _r319_t1, _r319_t2, _r319_t3;
            _r319_t0 = this;
            r319_currentGlyph = _r319_t0;
            r319_xn$setwidth$9Jrj = _r319_t0['set-width']['bind'](_r319_t0);
            r319_xn$assignunicode$7Hrq = function _r319_t2(r320_code) {
                var r320_code, _r320_t0, _r320_t1;
                r319_currentGlyph['assign-unicode'](r320_code);
                return r4_unicodeGlyphs[r319_currentGlyph['unicode'][r319_currentGlyph['unicode']['length'] - 1]] = r319_currentGlyph;
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
            r319_xn$dontexport$5sIl = function _r319_t3() {
                var _r321_t0, _r321_t1;
                return r319_currentGlyph['dontExport'] = true;
            };
            _r319_t0['gizmo'] = r4_globalTransform;
            _r319_t0['set-width'](r4_WIDTH);
            r319_xn$dontexport$5sIl();
            r319_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r319_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t120() {
            var r323_currentGlyph, r323_xn$setwidth$9Jrj, r323_xn$assignunicode$7Hrq, r323_xn$startfrom$1aao, r323_xn$lineto$5sIl, r323_xn$curveto$1aao, r323_xn$cubicto$1aao, r323_xn$putshapes$9Jrj, r323_xn$reverselast$3qIs, r323_include, r323_xn$createstroke$7Hrq, r323_xn$setanchor$9Jrj, r323_xn$dontexport$5sIl, r323_balance, _r323_t0, _r323_t1, _r323_t2, _r323_t3;
            _r323_t0 = this;
            r323_currentGlyph = _r323_t0;
            r323_xn$setwidth$9Jrj = _r323_t0['set-width']['bind'](_r323_t0);
            r323_xn$assignunicode$7Hrq = function _r323_t2(r324_code) {
                var r324_code, _r324_t0, _r324_t1;
                r323_currentGlyph['assign-unicode'](r324_code);
                return r4_unicodeGlyphs[r323_currentGlyph['unicode'][r323_currentGlyph['unicode']['length'] - 1]] = r323_currentGlyph;
            };
            r323_xn$startfrom$1aao = _r323_t0['start-from']['bind'](_r323_t0);
            r323_xn$lineto$5sIl = _r323_t0['line-to']['bind'](_r323_t0);
            r323_xn$curveto$1aao = _r323_t0['curve-to']['bind'](_r323_t0);
            r323_xn$cubicto$1aao = _r323_t0['cubic-to']['bind'](_r323_t0);
            r323_xn$putshapes$9Jrj = _r323_t0['put-shapes']['bind'](_r323_t0);
            r323_xn$reverselast$3qIs = _r323_t0['reverse-last']['bind'](_r323_t0);
            r323_include = _r323_t0['include']['bind'](_r323_t0);
            r323_xn$createstroke$7Hrq = _r323_t0['create-stroke']['bind'](_r323_t0);
            r323_xn$setanchor$9Jrj = _r323_t0['set-anchor']['bind'](_r323_t0);
            r323_xn$dontexport$5sIl = function _r323_t3() {
                var _r325_t0, _r325_t1;
                return r323_currentGlyph['dontExport'] = true;
            };
            _r323_t0['gizmo'] = r4_globalTransform;
            _r323_t0['set-width'](r4_WIDTH);
            r323_xn$dontexport$5sIl();
            r323_include(r4_eMarks);
            r323_balance = r4_ILBALANCE;
            r323_include(r323_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r323_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r323_balance, r4_XH)['heads-to'](r4_UPWARD));
            r323_include(r4_leftwardTopSerif(r4_MIDDLE + r323_balance, r4_XH, r4_LONGJUT - r323_balance));
            r323_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r323_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t121() {
            var r327_currentGlyph, r327_xn$setwidth$9Jrj, r327_xn$assignunicode$7Hrq, r327_xn$startfrom$1aao, r327_xn$lineto$5sIl, r327_xn$curveto$1aao, r327_xn$cubicto$1aao, r327_xn$putshapes$9Jrj, r327_xn$reverselast$3qIs, r327_include, r327_xn$createstroke$7Hrq, r327_xn$setanchor$9Jrj, r327_xn$dontexport$5sIl, _r327_t0, _r327_t1, _r327_t2, _r327_t3;
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
            r327_xn$dontexport$5sIl = function _r327_t3() {
                var _r329_t0, _r329_t1;
                return r327_currentGlyph['dontExport'] = true;
            };
            _r327_t0['gizmo'] = r4_globalTransform;
            _r327_t0['set-width'](r4_WIDTH);
            r327_xn$setwidth$9Jrj(r4_WIDTH);
            r327_xn$assignunicode$7Hrq('i');
            r327_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r327_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t122() {
            var r331_currentGlyph, r331_xn$setwidth$9Jrj, r331_xn$assignunicode$7Hrq, r331_xn$startfrom$1aao, r331_xn$lineto$5sIl, r331_xn$curveto$1aao, r331_xn$cubicto$1aao, r331_xn$putshapes$9Jrj, r331_xn$reverselast$3qIs, r331_include, r331_xn$createstroke$7Hrq, r331_xn$setanchor$9Jrj, r331_xn$dontexport$5sIl, _r331_t0, _r331_t1, _r331_t2, _r331_t3;
            _r331_t0 = this;
            r331_currentGlyph = _r331_t0;
            r331_xn$setwidth$9Jrj = _r331_t0['set-width']['bind'](_r331_t0);
            r331_xn$assignunicode$7Hrq = function _r331_t2(r332_code) {
                var r332_code, _r332_t0, _r332_t1;
                r331_currentGlyph['assign-unicode'](r332_code);
                return r4_unicodeGlyphs[r331_currentGlyph['unicode'][r331_currentGlyph['unicode']['length'] - 1]] = r331_currentGlyph;
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
            r331_xn$dontexport$5sIl = function _r331_t3() {
                var _r333_t0, _r333_t1;
                return r331_currentGlyph['dontExport'] = true;
            };
            _r331_t0['gizmo'] = r4_globalTransform;
            _r331_t0['set-width'](r4_WIDTH);
            r331_xn$dontexport$5sIl();
            r331_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r331_include(r331_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t123() {
            var r335_currentGlyph, r335_xn$setwidth$9Jrj, r335_xn$assignunicode$7Hrq, r335_xn$startfrom$1aao, r335_xn$lineto$5sIl, r335_xn$curveto$1aao, r335_xn$cubicto$1aao, r335_xn$putshapes$9Jrj, r335_xn$reverselast$3qIs, r335_include, r335_xn$createstroke$7Hrq, r335_xn$setanchor$9Jrj, r335_xn$dontexport$5sIl, _r335_t0, _r335_t1, _r335_t2, _r335_t3;
            _r335_t0 = this;
            r335_currentGlyph = _r335_t0;
            r335_xn$setwidth$9Jrj = _r335_t0['set-width']['bind'](_r335_t0);
            r335_xn$assignunicode$7Hrq = function _r335_t2(r336_code) {
                var r336_code, _r336_t0, _r336_t1;
                r335_currentGlyph['assign-unicode'](r336_code);
                return r4_unicodeGlyphs[r335_currentGlyph['unicode'][r335_currentGlyph['unicode']['length'] - 1]] = r335_currentGlyph;
            };
            r335_xn$startfrom$1aao = _r335_t0['start-from']['bind'](_r335_t0);
            r335_xn$lineto$5sIl = _r335_t0['line-to']['bind'](_r335_t0);
            r335_xn$curveto$1aao = _r335_t0['curve-to']['bind'](_r335_t0);
            r335_xn$cubicto$1aao = _r335_t0['cubic-to']['bind'](_r335_t0);
            r335_xn$putshapes$9Jrj = _r335_t0['put-shapes']['bind'](_r335_t0);
            r335_xn$reverselast$3qIs = _r335_t0['reverse-last']['bind'](_r335_t0);
            r335_include = _r335_t0['include']['bind'](_r335_t0);
            r335_xn$createstroke$7Hrq = _r335_t0['create-stroke']['bind'](_r335_t0);
            r335_xn$setanchor$9Jrj = _r335_t0['set-anchor']['bind'](_r335_t0);
            r335_xn$dontexport$5sIl = function _r335_t3() {
                var _r337_t0, _r337_t1;
                return r335_currentGlyph['dontExport'] = true;
            };
            _r335_t0['gizmo'] = r4_globalTransform;
            _r335_t0['set-width'](r4_WIDTH);
            r335_xn$dontexport$5sIl();
            r335_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r335_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t124() {
            var r339_currentGlyph, r339_xn$setwidth$9Jrj, r339_xn$assignunicode$7Hrq, r339_xn$startfrom$1aao, r339_xn$lineto$5sIl, r339_xn$curveto$1aao, r339_xn$cubicto$1aao, r339_xn$putshapes$9Jrj, r339_xn$reverselast$3qIs, r339_include, r339_xn$createstroke$7Hrq, r339_xn$setanchor$9Jrj, r339_xn$dontexport$5sIl, _r339_t0, _r339_t1, _r339_t2, _r339_t3;
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
            r339_xn$dontexport$5sIl = function _r339_t3() {
                var _r341_t0, _r341_t1;
                return r339_currentGlyph['dontExport'] = true;
            };
            _r339_t0['gizmo'] = r4_globalTransform;
            _r339_t0['set-width'](r4_WIDTH);
            r339_xn$setwidth$9Jrj(r4_WIDTH);
            r339_xn$assignunicode$7Hrq('j');
            r339_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r339_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t125() {
            var r343_currentGlyph, r343_xn$setwidth$9Jrj, r343_xn$assignunicode$7Hrq, r343_xn$startfrom$1aao, r343_xn$lineto$5sIl, r343_xn$curveto$1aao, r343_xn$cubicto$1aao, r343_xn$putshapes$9Jrj, r343_xn$reverselast$3qIs, r343_include, r343_xn$createstroke$7Hrq, r343_xn$setanchor$9Jrj, r343_xn$dontexport$5sIl, _r343_t0, _r343_t1, _r343_t2, _r343_t3;
            _r343_t0 = this;
            r343_currentGlyph = _r343_t0;
            r343_xn$setwidth$9Jrj = _r343_t0['set-width']['bind'](_r343_t0);
            r343_xn$assignunicode$7Hrq = function _r343_t2(r344_code) {
                var r344_code, _r344_t0, _r344_t1;
                r343_currentGlyph['assign-unicode'](r344_code);
                return r4_unicodeGlyphs[r343_currentGlyph['unicode'][r343_currentGlyph['unicode']['length'] - 1]] = r343_currentGlyph;
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
            r343_xn$dontexport$5sIl = function _r343_t3() {
                var _r345_t0, _r345_t1;
                return r343_currentGlyph['dontExport'] = true;
            };
            _r343_t0['gizmo'] = r4_globalTransform;
            _r343_t0['set-width'](r4_WIDTH);
            r343_include(r4_bMarks);
            r343_xn$dontexport$5sIl();
            r343_include(r343_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t126() {
            var r347_currentGlyph, r347_xn$setwidth$9Jrj, r347_xn$assignunicode$7Hrq, r347_xn$startfrom$1aao, r347_xn$lineto$5sIl, r347_xn$curveto$1aao, r347_xn$cubicto$1aao, r347_xn$putshapes$9Jrj, r347_xn$reverselast$3qIs, r347_include, r347_xn$createstroke$7Hrq, r347_xn$setanchor$9Jrj, r347_xn$dontexport$5sIl, _r347_t0, _r347_t1, _r347_t2, _r347_t3;
            _r347_t0 = this;
            r347_currentGlyph = _r347_t0;
            r347_xn$setwidth$9Jrj = _r347_t0['set-width']['bind'](_r347_t0);
            r347_xn$assignunicode$7Hrq = function _r347_t2(r348_code) {
                var r348_code, _r348_t0, _r348_t1;
                r347_currentGlyph['assign-unicode'](r348_code);
                return r4_unicodeGlyphs[r347_currentGlyph['unicode'][r347_currentGlyph['unicode']['length'] - 1]] = r347_currentGlyph;
            };
            r347_xn$startfrom$1aao = _r347_t0['start-from']['bind'](_r347_t0);
            r347_xn$lineto$5sIl = _r347_t0['line-to']['bind'](_r347_t0);
            r347_xn$curveto$1aao = _r347_t0['curve-to']['bind'](_r347_t0);
            r347_xn$cubicto$1aao = _r347_t0['cubic-to']['bind'](_r347_t0);
            r347_xn$putshapes$9Jrj = _r347_t0['put-shapes']['bind'](_r347_t0);
            r347_xn$reverselast$3qIs = _r347_t0['reverse-last']['bind'](_r347_t0);
            r347_include = _r347_t0['include']['bind'](_r347_t0);
            r347_xn$createstroke$7Hrq = _r347_t0['create-stroke']['bind'](_r347_t0);
            r347_xn$setanchor$9Jrj = _r347_t0['set-anchor']['bind'](_r347_t0);
            r347_xn$dontexport$5sIl = function _r347_t3() {
                var _r349_t0, _r349_t1;
                return r347_currentGlyph['dontExport'] = true;
            };
            _r347_t0['gizmo'] = r4_globalTransform;
            _r347_t0['set-width'](r4_WIDTH);
            r347_include(r4_bMarks);
            r347_xn$dontexport$5sIl();
            r347_include(r4_glyphs['l.straight']);
            r347_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t127() {
            var r351_currentGlyph, r351_xn$setwidth$9Jrj, r351_xn$assignunicode$7Hrq, r351_xn$startfrom$1aao, r351_xn$lineto$5sIl, r351_xn$curveto$1aao, r351_xn$cubicto$1aao, r351_xn$putshapes$9Jrj, r351_xn$reverselast$3qIs, r351_include, r351_xn$createstroke$7Hrq, r351_xn$setanchor$9Jrj, r351_xn$dontexport$5sIl, _r351_t0, _r351_t1, _r351_t2, _r351_t3;
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
            r351_xn$dontexport$5sIl = function _r351_t3() {
                var _r353_t0, _r353_t1;
                return r351_currentGlyph['dontExport'] = true;
            };
            _r351_t0['gizmo'] = r4_globalTransform;
            _r351_t0['set-width'](r4_WIDTH);
            r351_include(r4_bMarks);
            r351_xn$dontexport$5sIl();
            r351_include(r4_glyphs['l.hooky']);
            r351_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t128() {
            var r355_currentGlyph, r355_xn$setwidth$9Jrj, r355_xn$assignunicode$7Hrq, r355_xn$startfrom$1aao, r355_xn$lineto$5sIl, r355_xn$curveto$1aao, r355_xn$cubicto$1aao, r355_xn$putshapes$9Jrj, r355_xn$reverselast$3qIs, r355_include, r355_xn$createstroke$7Hrq, r355_xn$setanchor$9Jrj, r355_xn$dontexport$5sIl, r355_balance, _r355_t0, _r355_t1, _r355_t2, _r355_t3;
            _r355_t0 = this;
            r355_currentGlyph = _r355_t0;
            r355_xn$setwidth$9Jrj = _r355_t0['set-width']['bind'](_r355_t0);
            r355_xn$assignunicode$7Hrq = function _r355_t2(r356_code) {
                var r356_code, _r356_t0, _r356_t1;
                r355_currentGlyph['assign-unicode'](r356_code);
                return r4_unicodeGlyphs[r355_currentGlyph['unicode'][r355_currentGlyph['unicode']['length'] - 1]] = r355_currentGlyph;
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
            r355_xn$dontexport$5sIl = function _r355_t3() {
                var _r357_t0, _r357_t1;
                return r355_currentGlyph['dontExport'] = true;
            };
            _r355_t0['gizmo'] = r4_globalTransform;
            _r355_t0['set-width'](r4_WIDTH);
            r355_include(r4_bMarks);
            r355_xn$dontexport$5sIl();
            r355_balance = r4_ILBALANCE;
            r355_include(r355_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r355_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r355_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r355_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r355_balance, r4_CAP, r4_LONGJUT - r355_balance));
            r355_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t129() {
            var r359_currentGlyph, r359_xn$setwidth$9Jrj, r359_xn$assignunicode$7Hrq, r359_xn$startfrom$1aao, r359_xn$lineto$5sIl, r359_xn$curveto$1aao, r359_xn$cubicto$1aao, r359_xn$putshapes$9Jrj, r359_xn$reverselast$3qIs, r359_include, r359_xn$createstroke$7Hrq, r359_xn$setanchor$9Jrj, r359_xn$dontexport$5sIl, r359_TURN, _r359_t0, _r359_t1, _r359_t2, _r359_t3;
            _r359_t0 = this;
            r359_currentGlyph = _r359_t0;
            r359_xn$setwidth$9Jrj = _r359_t0['set-width']['bind'](_r359_t0);
            r359_xn$assignunicode$7Hrq = function _r359_t2(r360_code) {
                var r360_code, _r360_t0, _r360_t1;
                r359_currentGlyph['assign-unicode'](r360_code);
                return r4_unicodeGlyphs[r359_currentGlyph['unicode'][r359_currentGlyph['unicode']['length'] - 1]] = r359_currentGlyph;
            };
            r359_xn$startfrom$1aao = _r359_t0['start-from']['bind'](_r359_t0);
            r359_xn$lineto$5sIl = _r359_t0['line-to']['bind'](_r359_t0);
            r359_xn$curveto$1aao = _r359_t0['curve-to']['bind'](_r359_t0);
            r359_xn$cubicto$1aao = _r359_t0['cubic-to']['bind'](_r359_t0);
            r359_xn$putshapes$9Jrj = _r359_t0['put-shapes']['bind'](_r359_t0);
            r359_xn$reverselast$3qIs = _r359_t0['reverse-last']['bind'](_r359_t0);
            r359_include = _r359_t0['include']['bind'](_r359_t0);
            r359_xn$createstroke$7Hrq = _r359_t0['create-stroke']['bind'](_r359_t0);
            r359_xn$setanchor$9Jrj = _r359_t0['set-anchor']['bind'](_r359_t0);
            r359_xn$dontexport$5sIl = function _r359_t3() {
                var _r361_t0, _r361_t1;
                return r359_currentGlyph['dontExport'] = true;
            };
            _r359_t0['gizmo'] = r4_globalTransform;
            _r359_t0['set-width'](r4_WIDTH);
            r359_xn$setwidth$9Jrj(r4_WIDTH);
            r359_xn$assignunicode$7Hrq('x');
            r359_include(r4_eMarks);
            r359_TURN = r4_XH * 0.1;
            r359_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r359_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t130() {
            var r363_currentGlyph, r363_xn$setwidth$9Jrj, r363_xn$assignunicode$7Hrq, r363_xn$startfrom$1aao, r363_xn$lineto$5sIl, r363_xn$curveto$1aao, r363_xn$cubicto$1aao, r363_xn$putshapes$9Jrj, r363_xn$reverselast$3qIs, r363_include, r363_xn$createstroke$7Hrq, r363_xn$setanchor$9Jrj, r363_xn$dontexport$5sIl, r363_TURN, _r363_t0, _r363_t1, _r363_t2, _r363_t3;
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
            r363_xn$dontexport$5sIl = function _r363_t3() {
                var _r365_t0, _r365_t1;
                return r363_currentGlyph['dontExport'] = true;
            };
            _r363_t0['gizmo'] = r4_globalTransform;
            _r363_t0['set-width'](r4_WIDTH);
            r363_xn$setwidth$9Jrj(r4_WIDTH);
            r363_xn$assignunicode$7Hrq('v');
            r363_include(r4_eMarks);
            r363_TURN = r4_XH * 0.9;
            r363_include(r363_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r363_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r363_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r363_include(r363_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r363_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r363_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r363_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r363_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r363_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t131() {
            var r367_currentGlyph, r367_xn$setwidth$9Jrj, r367_xn$assignunicode$7Hrq, r367_xn$startfrom$1aao, r367_xn$lineto$5sIl, r367_xn$curveto$1aao, r367_xn$cubicto$1aao, r367_xn$putshapes$9Jrj, r367_xn$reverselast$3qIs, r367_include, r367_xn$createstroke$7Hrq, r367_xn$setanchor$9Jrj, r367_xn$dontexport$5sIl, r367_TURN, r367_turn2, r367_wheight, r367_bottomStroke, r367_m1, r367_m2, _r367_t0, _r367_t1, _r367_t2, _r367_t3;
            _r367_t0 = this;
            r367_currentGlyph = _r367_t0;
            r367_xn$setwidth$9Jrj = _r367_t0['set-width']['bind'](_r367_t0);
            r367_xn$assignunicode$7Hrq = function _r367_t2(r368_code) {
                var r368_code, _r368_t0, _r368_t1;
                r367_currentGlyph['assign-unicode'](r368_code);
                return r4_unicodeGlyphs[r367_currentGlyph['unicode'][r367_currentGlyph['unicode']['length'] - 1]] = r367_currentGlyph;
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
            r367_xn$dontexport$5sIl = function _r367_t3() {
                var _r369_t0, _r369_t1;
                return r367_currentGlyph['dontExport'] = true;
            };
            _r367_t0['gizmo'] = r4_globalTransform;
            _r367_t0['set-width'](r4_WIDTH);
            r367_xn$setwidth$9Jrj(r4_WIDTH);
            r367_xn$assignunicode$7Hrq('w');
            r367_include(r4_eMarks);
            r367_TURN = r4_XH * 0.75;
            r367_turn2 = r4_XH * 0.59;
            r367_wheight = r4_XH * 0.6;
            r367_bottomStroke = r4_adviceBlackness(5.2);
            r367_m1 = r4_WIDTH * 0.325;
            r367_m2 = r4_WIDTH * 0.675;
            r367_include(r367_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r367_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r367_TURN, r367_m1 - r367_bottomStroke / 2, 0)['set-width'](r367_bottomStroke, 0));
            r367_include(r367_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r367_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r367_TURN, r367_m2 + r367_bottomStroke / 2, 0)['set-width'](0, r367_bottomStroke));
            r367_include(r367_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r367_bottomStroke / 2, r367_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r367_bottomStroke)['line-to'](r4_MIDDLE + r367_bottomStroke / 2, r367_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r367_bottomStroke / 2, (1 - 0.1) * r367_turn2, r367_m1 + r367_bottomStroke / 2, 0)['set-width'](0, r367_bottomStroke));
            r367_include(r367_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r367_bottomStroke / 2, r367_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r367_bottomStroke, 0)['line-to'](r4_MIDDLE - r367_bottomStroke / 2, r367_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r367_bottomStroke / 2, (1 - 0.1) * r367_turn2, r367_m2 - r367_bottomStroke / 2, 0)['set-width'](r367_bottomStroke, 0));
            r367_xn$startfrom$1aao(r367_m1 + r367_bottomStroke / 2, 0);
            r367_xn$lineto$5sIl(r367_m1 - r367_bottomStroke / 2, 0);
            r367_xn$lineto$5sIl(r367_m1, r367_bottomStroke);
            r367_xn$startfrom$1aao(r367_m2 + r367_bottomStroke / 2, 0);
            r367_xn$lineto$5sIl(r367_m2 - r367_bottomStroke / 2, 0);
            r367_xn$lineto$5sIl(r367_m2, r367_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t132() {
            var r371_currentGlyph, r371_xn$setwidth$9Jrj, r371_xn$assignunicode$7Hrq, r371_xn$startfrom$1aao, r371_xn$lineto$5sIl, r371_xn$curveto$1aao, r371_xn$cubicto$1aao, r371_xn$putshapes$9Jrj, r371_xn$reverselast$3qIs, r371_include, r371_xn$createstroke$7Hrq, r371_xn$setanchor$9Jrj, r371_xn$dontexport$5sIl, r371_xbottom, r371_turnp, r371_xb, r371_yb, _r371_t0, _r371_t1, _r371_t2, _r371_t3;
            _r371_t0 = this;
            r371_currentGlyph = _r371_t0;
            r371_xn$setwidth$9Jrj = _r371_t0['set-width']['bind'](_r371_t0);
            r371_xn$assignunicode$7Hrq = function _r371_t2(r372_code) {
                var r372_code, _r372_t0, _r372_t1;
                r371_currentGlyph['assign-unicode'](r372_code);
                return r4_unicodeGlyphs[r371_currentGlyph['unicode'][r371_currentGlyph['unicode']['length'] - 1]] = r371_currentGlyph;
            };
            r371_xn$startfrom$1aao = _r371_t0['start-from']['bind'](_r371_t0);
            r371_xn$lineto$5sIl = _r371_t0['line-to']['bind'](_r371_t0);
            r371_xn$curveto$1aao = _r371_t0['curve-to']['bind'](_r371_t0);
            r371_xn$cubicto$1aao = _r371_t0['cubic-to']['bind'](_r371_t0);
            r371_xn$putshapes$9Jrj = _r371_t0['put-shapes']['bind'](_r371_t0);
            r371_xn$reverselast$3qIs = _r371_t0['reverse-last']['bind'](_r371_t0);
            r371_include = _r371_t0['include']['bind'](_r371_t0);
            r371_xn$createstroke$7Hrq = _r371_t0['create-stroke']['bind'](_r371_t0);
            r371_xn$setanchor$9Jrj = _r371_t0['set-anchor']['bind'](_r371_t0);
            r371_xn$dontexport$5sIl = function _r371_t3() {
                var _r373_t0, _r373_t1;
                return r371_currentGlyph['dontExport'] = true;
            };
            _r371_t0['gizmo'] = r4_globalTransform;
            _r371_t0['set-width'](r4_WIDTH);
            r371_xn$setwidth$9Jrj(r4_WIDTH);
            r371_xn$assignunicode$7Hrq('y');
            r371_include(r4_pMarks);
            r371_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r371_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r371_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r371_yb = r0_mix(0, r4_XH, 0.05 * r371_turnp);
            r371_include(r4_xStrand(r371_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r371_include(r4_halfXStrand(r4_SB, r4_XH, r371_xb, r371_yb, 0.1 * r371_turnp, 0.4, 0.14 * r371_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t133() {
            var r375_currentGlyph, r375_xn$setwidth$9Jrj, r375_xn$assignunicode$7Hrq, r375_xn$startfrom$1aao, r375_xn$lineto$5sIl, r375_xn$curveto$1aao, r375_xn$cubicto$1aao, r375_xn$putshapes$9Jrj, r375_xn$reverselast$3qIs, r375_include, r375_xn$createstroke$7Hrq, r375_xn$setanchor$9Jrj, r375_xn$dontexport$5sIl, r375_cor, _r375_t0, _r375_t1, _r375_t2, _r375_t3;
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
            r375_xn$dontexport$5sIl = function _r375_t3() {
                var _r377_t0, _r377_t1;
                return r375_currentGlyph['dontExport'] = true;
            };
            _r375_t0['gizmo'] = r4_globalTransform;
            _r375_t0['set-width'](r4_WIDTH);
            r375_xn$setwidth$9Jrj(r4_WIDTH);
            r375_xn$assignunicode$7Hrq('z');
            r375_include(r4_eMarks);
            r375_cor = 1.2;
            r375_include(r375_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r375_include(r375_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r375_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r375_xn$lineto$5sIl(r4_SB + r4_STROKE * r375_cor, r4_STROKE);
            r375_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r375_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r375_cor, r4_XH - r4_STROKE);
            r375_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t134() {
            var r379_currentGlyph, r379_xn$setwidth$9Jrj, r379_xn$assignunicode$7Hrq, r379_xn$startfrom$1aao, r379_xn$lineto$5sIl, r379_xn$curveto$1aao, r379_xn$cubicto$1aao, r379_xn$putshapes$9Jrj, r379_xn$reverselast$3qIs, r379_include, r379_xn$createstroke$7Hrq, r379_xn$setanchor$9Jrj, r379_xn$dontexport$5sIl, r379_TURN, r379_rturn, r379_right, r379_attach, r379_attach2, r379_fine, _r379_t0, _r379_t1, _r379_t2, _r379_t3;
            _r379_t0 = this;
            r379_currentGlyph = _r379_t0;
            r379_xn$setwidth$9Jrj = _r379_t0['set-width']['bind'](_r379_t0);
            r379_xn$assignunicode$7Hrq = function _r379_t2(r380_code) {
                var r380_code, _r380_t0, _r380_t1;
                r379_currentGlyph['assign-unicode'](r380_code);
                return r4_unicodeGlyphs[r379_currentGlyph['unicode'][r379_currentGlyph['unicode']['length'] - 1]] = r379_currentGlyph;
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
            r379_xn$dontexport$5sIl = function _r379_t3() {
                var _r381_t0, _r381_t1;
                return r379_currentGlyph['dontExport'] = true;
            };
            _r379_t0['gizmo'] = r4_globalTransform;
            _r379_t0['set-width'](r4_WIDTH);
            r379_xn$setwidth$9Jrj(r4_WIDTH);
            r379_xn$assignunicode$7Hrq('k');
            r379_include(r4_bMarks);
            r379_TURN = r4_XH * 0.99;
            r379_rturn = r4_XH * 0.1;
            r379_right = r4_RIGHTSB - r4_O;
            r379_attach = r4_XH * 0.4;
            r379_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r379_fine = r4_adviceBlackness(3.5);
            r379_include(r379_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r379_include(r379_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r379_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r379_TURN, r4_SB + r4_STROKE, r379_attach)['set-width'](0, r379_fine));
            r379_include(r379_xn$createstroke$7Hrq()['start-from'](r379_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r379_right - r4_HALFSTROKE, r379_rturn + 0.05 * (r4_XH - r379_rturn), r379_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r379_fine / 2, r379_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t135() {
            var r383_currentGlyph, r383_xn$setwidth$9Jrj, r383_xn$assignunicode$7Hrq, r383_xn$startfrom$1aao, r383_xn$lineto$5sIl, r383_xn$curveto$1aao, r383_xn$cubicto$1aao, r383_xn$putshapes$9Jrj, r383_xn$reverselast$3qIs, r383_include, r383_xn$createstroke$7Hrq, r383_xn$setanchor$9Jrj, r383_xn$dontexport$5sIl, _r383_t0, _r383_t1, _r383_t2, _r383_t3;
            _r383_t0 = this;
            r383_currentGlyph = _r383_t0;
            r383_xn$setwidth$9Jrj = _r383_t0['set-width']['bind'](_r383_t0);
            r383_xn$assignunicode$7Hrq = function _r383_t2(r384_code) {
                var r384_code, _r384_t0, _r384_t1;
                r383_currentGlyph['assign-unicode'](r384_code);
                return r4_unicodeGlyphs[r383_currentGlyph['unicode'][r383_currentGlyph['unicode']['length'] - 1]] = r383_currentGlyph;
            };
            r383_xn$startfrom$1aao = _r383_t0['start-from']['bind'](_r383_t0);
            r383_xn$lineto$5sIl = _r383_t0['line-to']['bind'](_r383_t0);
            r383_xn$curveto$1aao = _r383_t0['curve-to']['bind'](_r383_t0);
            r383_xn$cubicto$1aao = _r383_t0['cubic-to']['bind'](_r383_t0);
            r383_xn$putshapes$9Jrj = _r383_t0['put-shapes']['bind'](_r383_t0);
            r383_xn$reverselast$3qIs = _r383_t0['reverse-last']['bind'](_r383_t0);
            r383_include = _r383_t0['include']['bind'](_r383_t0);
            r383_xn$createstroke$7Hrq = _r383_t0['create-stroke']['bind'](_r383_t0);
            r383_xn$setanchor$9Jrj = _r383_t0['set-anchor']['bind'](_r383_t0);
            r383_xn$dontexport$5sIl = function _r383_t3() {
                var _r385_t0, _r385_t1;
                return r383_currentGlyph['dontExport'] = true;
            };
            _r383_t0['gizmo'] = r4_globalTransform;
            _r383_t0['set-width'](r4_WIDTH);
            r383_xn$setwidth$9Jrj(r4_WIDTH);
            r383_xn$assignunicode$7Hrq('s');
            r383_include(r4_eMarks);
            r383_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r383_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r383_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t136() {
            var r387_currentGlyph, r387_xn$setwidth$9Jrj, r387_xn$assignunicode$7Hrq, r387_xn$startfrom$1aao, r387_xn$lineto$5sIl, r387_xn$curveto$1aao, r387_xn$cubicto$1aao, r387_xn$putshapes$9Jrj, r387_xn$reverselast$3qIs, r387_include, r387_xn$createstroke$7Hrq, r387_xn$setanchor$9Jrj, r387_xn$dontexport$5sIl, r387_slope, r387_expand, r387_coexpand, r387_rhookx, r387_rmiddle, _r387_t0, _r387_t1, _r387_t2, _r387_t3;
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
            r387_xn$dontexport$5sIl = function _r387_t3() {
                var _r389_t0, _r389_t1;
                return r387_currentGlyph['dontExport'] = true;
            };
            _r387_t0['gizmo'] = r4_globalTransform;
            _r387_t0['set-width'](r4_WIDTH);
            r387_xn$setwidth$9Jrj(r4_WIDTH);
            r387_xn$assignunicode$7Hrq('r');
            r387_include(r4_eMarks);
            r387_slope = 0.015;
            r387_expand = 0.175;
            r387_coexpand = (1 - r387_expand) / 2;
            r387_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r387_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r387_rhookx - r4_HALFSTROKE, 0.5);
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r387_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r387_rmiddle, r387_rhookx, r4_KAPPA_AHOOK), r4_XO, r387_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r387_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('fbar', function _r4_t137() {
            var r391_currentGlyph, r391_xn$setwidth$9Jrj, r391_xn$assignunicode$7Hrq, r391_xn$startfrom$1aao, r391_xn$lineto$5sIl, r391_xn$curveto$1aao, r391_xn$cubicto$1aao, r391_xn$putshapes$9Jrj, r391_xn$reverselast$3qIs, r391_include, r391_xn$createstroke$7Hrq, r391_xn$setanchor$9Jrj, r391_xn$dontexport$5sIl, _r391_t0, _r391_t1, _r391_t2, _r391_t3;
            _r391_t0 = this;
            r391_currentGlyph = _r391_t0;
            r391_xn$setwidth$9Jrj = _r391_t0['set-width']['bind'](_r391_t0);
            r391_xn$assignunicode$7Hrq = function _r391_t2(r392_code) {
                var r392_code, _r392_t0, _r392_t1;
                r391_currentGlyph['assign-unicode'](r392_code);
                return r4_unicodeGlyphs[r391_currentGlyph['unicode'][r391_currentGlyph['unicode']['length'] - 1]] = r391_currentGlyph;
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
            r391_xn$dontexport$5sIl = function _r391_t3() {
                var _r393_t0, _r393_t1;
                return r391_currentGlyph['dontExport'] = true;
            };
            _r391_t0['gizmo'] = r4_globalTransform;
            _r391_t0['set-width'](r4_WIDTH);
            r391_xn$dontexport$5sIl();
            r391_include(r391_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh.upright', function _r4_t138() {
            var r395_currentGlyph, r395_xn$setwidth$9Jrj, r395_xn$assignunicode$7Hrq, r395_xn$startfrom$1aao, r395_xn$lineto$5sIl, r395_xn$curveto$1aao, r395_xn$cubicto$1aao, r395_xn$putshapes$9Jrj, r395_xn$reverselast$3qIs, r395_include, r395_xn$createstroke$7Hrq, r395_xn$setanchor$9Jrj, r395_xn$dontexport$5sIl, _r395_t0, _r395_t1, _r395_t2, _r395_t3;
            _r395_t0 = this;
            r395_currentGlyph = _r395_t0;
            r395_xn$setwidth$9Jrj = _r395_t0['set-width']['bind'](_r395_t0);
            r395_xn$assignunicode$7Hrq = function _r395_t2(r396_code) {
                var r396_code, _r396_t0, _r396_t1;
                r395_currentGlyph['assign-unicode'](r396_code);
                return r4_unicodeGlyphs[r395_currentGlyph['unicode'][r395_currentGlyph['unicode']['length'] - 1]] = r395_currentGlyph;
            };
            r395_xn$startfrom$1aao = _r395_t0['start-from']['bind'](_r395_t0);
            r395_xn$lineto$5sIl = _r395_t0['line-to']['bind'](_r395_t0);
            r395_xn$curveto$1aao = _r395_t0['curve-to']['bind'](_r395_t0);
            r395_xn$cubicto$1aao = _r395_t0['cubic-to']['bind'](_r395_t0);
            r395_xn$putshapes$9Jrj = _r395_t0['put-shapes']['bind'](_r395_t0);
            r395_xn$reverselast$3qIs = _r395_t0['reverse-last']['bind'](_r395_t0);
            r395_include = _r395_t0['include']['bind'](_r395_t0);
            r395_xn$createstroke$7Hrq = _r395_t0['create-stroke']['bind'](_r395_t0);
            r395_xn$setanchor$9Jrj = _r395_t0['set-anchor']['bind'](_r395_t0);
            r395_xn$dontexport$5sIl = function _r395_t3() {
                var _r397_t0, _r397_t1;
                return r395_currentGlyph['dontExport'] = true;
            };
            _r395_t0['gizmo'] = r4_globalTransform;
            _r395_t0['set-width'](r4_WIDTH);
            r395_xn$setwidth$9Jrj(r4_WIDTH);
            r395_xn$dontexport$5sIl();
            r395_include(r4_bMarks);
            r395_include(r395_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_eshHook = function _r4_t139(r398_attach) {
            var r398_attach, _r398_t0, _r398_t1, _r398_t2;
            return function _r398_t2() {
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
                r400_include(r400_xn$createstroke$7Hrq()['start-from'](r398_attach['x'] - r4_SHOOK * 2, r398_attach['y'] + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r398_attach['x'], r398_attach['y'])['line-to'](r398_attach['x'], r398_attach['y'] + r4_STROKE));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('esh.italic', function _r4_t140() {
            var r404_currentGlyph, r404_xn$setwidth$9Jrj, r404_xn$assignunicode$7Hrq, r404_xn$startfrom$1aao, r404_xn$lineto$5sIl, r404_xn$curveto$1aao, r404_xn$cubicto$1aao, r404_xn$putshapes$9Jrj, r404_xn$reverselast$3qIs, r404_include, r404_xn$createstroke$7Hrq, r404_xn$setanchor$9Jrj, r404_xn$dontexport$5sIl, _r404_t0, _r404_t1, _r404_t2, _r404_t3;
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
            r404_xn$dontexport$5sIl();
            r404_include(r4_ifMarks);
            r404_include(r404_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh', function _r4_t141() {
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
            r408_xn$setwidth$9Jrj(r4_WIDTH);
            r408_xn$assignunicode$7Hrq(383);
            if (r4_para['italicangle'] > 0) {
                r408_include(r4_glyphs['esh.italic'], r4_AS_BASE);
            } else {
                r408_include(r4_glyphs['esh.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t142() {
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
            r412_xn$assignunicode$7Hrq('f');
            r412_include(r4_glyphs['esh'], r4_AS_BASE);
            r412_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t143() {
            var r416_currentGlyph, r416_xn$setwidth$9Jrj, r416_xn$assignunicode$7Hrq, r416_xn$startfrom$1aao, r416_xn$lineto$5sIl, r416_xn$curveto$1aao, r416_xn$cubicto$1aao, r416_xn$putshapes$9Jrj, r416_xn$reverselast$3qIs, r416_include, r416_xn$createstroke$7Hrq, r416_xn$setanchor$9Jrj, r416_xn$dontexport$5sIl, r416_sw, r416_eleft, r416_turn, _r416_t0, _r416_t1, _r416_t2, _r416_t3;
            _r416_t0 = this;
            r416_currentGlyph = _r416_t0;
            r416_xn$setwidth$9Jrj = _r416_t0['set-width']['bind'](_r416_t0);
            r416_xn$assignunicode$7Hrq = function _r416_t2(r417_code) {
                var r417_code, _r417_t0, _r417_t1;
                r416_currentGlyph['assign-unicode'](r417_code);
                return r4_unicodeGlyphs[r416_currentGlyph['unicode'][r416_currentGlyph['unicode']['length'] - 1]] = r416_currentGlyph;
            };
            r416_xn$startfrom$1aao = _r416_t0['start-from']['bind'](_r416_t0);
            r416_xn$lineto$5sIl = _r416_t0['line-to']['bind'](_r416_t0);
            r416_xn$curveto$1aao = _r416_t0['curve-to']['bind'](_r416_t0);
            r416_xn$cubicto$1aao = _r416_t0['cubic-to']['bind'](_r416_t0);
            r416_xn$putshapes$9Jrj = _r416_t0['put-shapes']['bind'](_r416_t0);
            r416_xn$reverselast$3qIs = _r416_t0['reverse-last']['bind'](_r416_t0);
            r416_include = _r416_t0['include']['bind'](_r416_t0);
            r416_xn$createstroke$7Hrq = _r416_t0['create-stroke']['bind'](_r416_t0);
            r416_xn$setanchor$9Jrj = _r416_t0['set-anchor']['bind'](_r416_t0);
            r416_xn$dontexport$5sIl = function _r416_t3() {
                var _r418_t0, _r418_t1;
                return r416_currentGlyph['dontExport'] = true;
            };
            _r416_t0['gizmo'] = r4_globalTransform;
            _r416_t0['set-width'](r4_WIDTH);
            r416_xn$setwidth$9Jrj(r4_WIDTH);
            r416_xn$assignunicode$7Hrq(198);
            r416_include(r4_capitalMarks);
            r416_sw = r4_adviceBlackness(3.5);
            r416_eleft = r4_MIDDLE - r416_sw * 0.25;
            r416_turn = r4_XH * 0.1;
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r416_sw)['line-to'](r4_SB, r416_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r416_turn, r4_CAP, 0.27), r416_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r416_sw * 0.8));
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r4_SB + r416_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r416_sw)['line-to'](r416_eleft + r416_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r416_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r416_sw)['line-to'](r416_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r416_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r416_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r416_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r416_include(r416_xn$createstroke$7Hrq()['start-from'](r416_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t144() {
            var r420_currentGlyph, r420_xn$setwidth$9Jrj, r420_xn$assignunicode$7Hrq, r420_xn$startfrom$1aao, r420_xn$lineto$5sIl, r420_xn$curveto$1aao, r420_xn$cubicto$1aao, r420_xn$putshapes$9Jrj, r420_xn$reverselast$3qIs, r420_include, r420_xn$createstroke$7Hrq, r420_xn$setanchor$9Jrj, r420_xn$dontexport$5sIl, r420_sw, r420_eleft, _r420_t0, _r420_t1, _r420_t2, _r420_t3;
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
            r420_xn$dontexport$5sIl = function _r420_t3() {
                var _r422_t0, _r422_t1;
                return r420_currentGlyph['dontExport'] = true;
            };
            _r420_t0['gizmo'] = r4_globalTransform;
            _r420_t0['set-width'](r4_WIDTH);
            r420_xn$setwidth$9Jrj(r4_WIDTH);
            r420_xn$assignunicode$7Hrq(338);
            r420_include(r4_capitalMarks);
            r420_sw = r4_adviceBlackness(3.5);
            r420_eleft = r4_MIDDLE;
            r420_include(r420_xn$createstroke$7Hrq()['start-from'](r420_eleft + 1, r4_CAP)['set-width'](r420_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r420_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r420_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r420_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r420_include(r420_xn$createstroke$7Hrq()['start-from'](r420_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r420_sw)['line-to'](r420_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r420_include(r420_xn$createstroke$7Hrq()['start-from'](r420_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r420_include(r420_xn$createstroke$7Hrq()['start-from'](r420_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r420_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r420_include(r420_xn$createstroke$7Hrq()['start-from'](r420_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t145() {
            var r424_currentGlyph, r424_xn$setwidth$9Jrj, r424_xn$assignunicode$7Hrq, r424_xn$startfrom$1aao, r424_xn$lineto$5sIl, r424_xn$curveto$1aao, r424_xn$cubicto$1aao, r424_xn$putshapes$9Jrj, r424_xn$reverselast$3qIs, r424_include, r424_xn$createstroke$7Hrq, r424_xn$setanchor$9Jrj, r424_xn$dontexport$5sIl, r424_sw, r424_eLeft, r424_eMiddle, r424_barbottom, r424_hookx, r424_eHookMiddle, r424_sma, r424_smb, _r424_t0, _r424_t1, _r424_t2, _r424_t3;
            _r424_t0 = this;
            r424_currentGlyph = _r424_t0;
            r424_xn$setwidth$9Jrj = _r424_t0['set-width']['bind'](_r424_t0);
            r424_xn$assignunicode$7Hrq = function _r424_t2(r425_code) {
                var r425_code, _r425_t0, _r425_t1;
                r424_currentGlyph['assign-unicode'](r425_code);
                return r4_unicodeGlyphs[r424_currentGlyph['unicode'][r424_currentGlyph['unicode']['length'] - 1]] = r424_currentGlyph;
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
            r424_xn$dontexport$5sIl = function _r424_t3() {
                var _r426_t0, _r426_t1;
                return r424_currentGlyph['dontExport'] = true;
            };
            _r424_t0['gizmo'] = r4_globalTransform;
            _r424_t0['set-width'](r4_WIDTH);
            r424_xn$dontexport$5sIl();
            r424_sw = r4_adviceBlackness(3.5);
            r424_eLeft = r4_MIDDLE - r424_sw / 2 * r4_ITALICCOR;
            r424_eMiddle = r0_mix(r424_eLeft, r4_RIGHTSB - r4_O, 0.5) - r424_sw * r4_globalTransform['yx'];
            r424_barbottom = r4_XH * r4_EBARPOS;
            r424_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r424_eHookMiddle = r0_mix(r424_eLeft, r424_hookx, 0.5);
            r424_sma = r4_SMALLSMOOTHA * 0.6;
            r424_smb = r4_SMALLSMOOTHB * 0.6;
            r424_include(r424_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r424_barbottom)['heads-to'](r4_UPWARD)['set-width'](r424_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r424_smb)['arc-vh-to'](r424_eMiddle, r4_XO)['arc-hv-to'](r424_eLeft, r4_XH - r424_sma)['line-to'](r424_eLeft, r424_smb)['arc-vh-to'](r424_eHookMiddle, r4_O)['curve-to'](r0_mix(r424_eHookMiddle, r424_hookx, r4_KAPPA_HOOK), r4_O, r424_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r424_include(r424_xn$createstroke$7Hrq()['start-from'](r424_eLeft + r424_sw / 2, r424_barbottom)['set-width'](r424_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r424_sw / 2, r424_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t146() {
            var r428_currentGlyph, r428_xn$setwidth$9Jrj, r428_xn$assignunicode$7Hrq, r428_xn$startfrom$1aao, r428_xn$lineto$5sIl, r428_xn$curveto$1aao, r428_xn$cubicto$1aao, r428_xn$putshapes$9Jrj, r428_xn$reverselast$3qIs, r428_include, r428_xn$createstroke$7Hrq, r428_xn$setanchor$9Jrj, r428_xn$dontexport$5sIl, r428_sw, r428_bartop, r428_abarRight, r428_m1, r428_lowmiddle, r428_barsmooth, r428_sma, r428_smb, _r428_t0, _r428_t1, _r428_t2, _r428_t3;
            _r428_t0 = this;
            r428_currentGlyph = _r428_t0;
            r428_xn$setwidth$9Jrj = _r428_t0['set-width']['bind'](_r428_t0);
            r428_xn$assignunicode$7Hrq = function _r428_t2(r429_code) {
                var r429_code, _r429_t0, _r429_t1;
                r428_currentGlyph['assign-unicode'](r429_code);
                return r4_unicodeGlyphs[r428_currentGlyph['unicode'][r428_currentGlyph['unicode']['length'] - 1]] = r428_currentGlyph;
            };
            r428_xn$startfrom$1aao = _r428_t0['start-from']['bind'](_r428_t0);
            r428_xn$lineto$5sIl = _r428_t0['line-to']['bind'](_r428_t0);
            r428_xn$curveto$1aao = _r428_t0['curve-to']['bind'](_r428_t0);
            r428_xn$cubicto$1aao = _r428_t0['cubic-to']['bind'](_r428_t0);
            r428_xn$putshapes$9Jrj = _r428_t0['put-shapes']['bind'](_r428_t0);
            r428_xn$reverselast$3qIs = _r428_t0['reverse-last']['bind'](_r428_t0);
            r428_include = _r428_t0['include']['bind'](_r428_t0);
            r428_xn$createstroke$7Hrq = _r428_t0['create-stroke']['bind'](_r428_t0);
            r428_xn$setanchor$9Jrj = _r428_t0['set-anchor']['bind'](_r428_t0);
            r428_xn$dontexport$5sIl = function _r428_t3() {
                var _r430_t0, _r430_t1;
                return r428_currentGlyph['dontExport'] = true;
            };
            _r428_t0['gizmo'] = r4_globalTransform;
            _r428_t0['set-width'](r4_WIDTH);
            r428_xn$dontexport$5sIl();
            r428_sw = r4_adviceBlackness(3.5);
            r428_bartop = r4_XH * r4_BARPOS + r428_sw;
            r428_abarRight = r4_MIDDLE + r428_sw / 2 * r4_ITALICCOR;
            r428_m1 = r0_mix(r4_SB + r4_OXHOOK, r428_abarRight, 0.5);
            r428_lowmiddle = r0_mix(r4_SB + r428_sw, r428_abarRight - r428_sw, 0.5) + r428_sw * r4_globalTransform['yx'];
            r428_barsmooth = r0_mix(r4_SB, r428_abarRight, 0.6);
            r428_sma = r4_SMALLSMOOTHA * 0.6;
            r428_smb = r4_SMALLSMOOTHB * 0.6;
            r428_include(r428_xn$createstroke$7Hrq()['start-from'](r428_abarRight, r4_XH - r428_sma)['set-width'](r428_sw, 0)['arc-vh-to'](r428_m1, r4_XO)['curve-to'](r0_mix(r428_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r428_include(r428_xn$createstroke$7Hrq()['start-from'](r428_abarRight, r428_smb)['set-width'](0, r428_sw)['arc-vh-to'](r428_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r428_bartop, r428_smb / (r428_sma + r428_smb)))['arc-vh-to'](r428_barsmooth, r428_bartop)['line-to'](r428_abarRight, r428_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t147() {
            var r432_currentGlyph, r432_xn$setwidth$9Jrj, r432_xn$assignunicode$7Hrq, r432_xn$startfrom$1aao, r432_xn$lineto$5sIl, r432_xn$curveto$1aao, r432_xn$cubicto$1aao, r432_xn$putshapes$9Jrj, r432_xn$reverselast$3qIs, r432_include, r432_xn$createstroke$7Hrq, r432_xn$setanchor$9Jrj, r432_xn$dontexport$5sIl, r432_sw, r432_abarRight, r432_m1, r432_sma, r432_smb, _r432_t0, _r432_t1, _r432_t2, _r432_t3;
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
            r432_xn$dontexport$5sIl = function _r432_t3() {
                var _r434_t0, _r434_t1;
                return r432_currentGlyph['dontExport'] = true;
            };
            _r432_t0['gizmo'] = r4_globalTransform;
            _r432_t0['set-width'](r4_WIDTH);
            r432_xn$dontexport$5sIl();
            r432_sw = r4_adviceBlackness(3.5);
            r432_abarRight = r4_MIDDLE + r432_sw / 2 * r4_ITALICCOR;
            r432_m1 = r0_mix(r4_SB + r4_O, r432_abarRight, 0.5);
            r432_sma = r4_SMALLSMOOTHA * 0.6;
            r432_smb = r4_SMALLSMOOTHB * 0.6;
            r432_include(r432_xn$createstroke$7Hrq()['start-from'](r432_abarRight, r432_smb)['set-width'](0, r432_sw)['arc-vh-to'](r432_m1 + r432_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r432_smb)['line-to'](r4_SB + r4_O, r4_XH - r432_sma)['arc-vh-to'](r432_m1 - r432_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r432_abarRight, r4_XH - r432_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t148() {
            var r436_currentGlyph, r436_xn$setwidth$9Jrj, r436_xn$assignunicode$7Hrq, r436_xn$startfrom$1aao, r436_xn$lineto$5sIl, r436_xn$curveto$1aao, r436_xn$cubicto$1aao, r436_xn$putshapes$9Jrj, r436_xn$reverselast$3qIs, r436_include, r436_xn$createstroke$7Hrq, r436_xn$setanchor$9Jrj, r436_xn$dontexport$5sIl, _r436_t0, _r436_t1, _r436_t2, _r436_t3;
            _r436_t0 = this;
            r436_currentGlyph = _r436_t0;
            r436_xn$setwidth$9Jrj = _r436_t0['set-width']['bind'](_r436_t0);
            r436_xn$assignunicode$7Hrq = function _r436_t2(r437_code) {
                var r437_code, _r437_t0, _r437_t1;
                r436_currentGlyph['assign-unicode'](r437_code);
                return r4_unicodeGlyphs[r436_currentGlyph['unicode'][r436_currentGlyph['unicode']['length'] - 1]] = r436_currentGlyph;
            };
            r436_xn$startfrom$1aao = _r436_t0['start-from']['bind'](_r436_t0);
            r436_xn$lineto$5sIl = _r436_t0['line-to']['bind'](_r436_t0);
            r436_xn$curveto$1aao = _r436_t0['curve-to']['bind'](_r436_t0);
            r436_xn$cubicto$1aao = _r436_t0['cubic-to']['bind'](_r436_t0);
            r436_xn$putshapes$9Jrj = _r436_t0['put-shapes']['bind'](_r436_t0);
            r436_xn$reverselast$3qIs = _r436_t0['reverse-last']['bind'](_r436_t0);
            r436_include = _r436_t0['include']['bind'](_r436_t0);
            r436_xn$createstroke$7Hrq = _r436_t0['create-stroke']['bind'](_r436_t0);
            r436_xn$setanchor$9Jrj = _r436_t0['set-anchor']['bind'](_r436_t0);
            r436_xn$dontexport$5sIl = function _r436_t3() {
                var _r438_t0, _r438_t1;
                return r436_currentGlyph['dontExport'] = true;
            };
            _r436_t0['gizmo'] = r4_globalTransform;
            _r436_t0['set-width'](r4_WIDTH);
            r436_xn$setwidth$9Jrj(r4_WIDTH);
            r436_xn$assignunicode$7Hrq(230);
            r436_include(r4_eMarks);
            r436_include(r4_glyphs['ae-epart']);
            r436_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t149() {
            var r440_currentGlyph, r440_xn$setwidth$9Jrj, r440_xn$assignunicode$7Hrq, r440_xn$startfrom$1aao, r440_xn$lineto$5sIl, r440_xn$curveto$1aao, r440_xn$cubicto$1aao, r440_xn$putshapes$9Jrj, r440_xn$reverselast$3qIs, r440_include, r440_xn$createstroke$7Hrq, r440_xn$setanchor$9Jrj, r440_xn$dontexport$5sIl, _r440_t0, _r440_t1, _r440_t2, _r440_t3;
            _r440_t0 = this;
            r440_currentGlyph = _r440_t0;
            r440_xn$setwidth$9Jrj = _r440_t0['set-width']['bind'](_r440_t0);
            r440_xn$assignunicode$7Hrq = function _r440_t2(r441_code) {
                var r441_code, _r441_t0, _r441_t1;
                r440_currentGlyph['assign-unicode'](r441_code);
                return r4_unicodeGlyphs[r440_currentGlyph['unicode'][r440_currentGlyph['unicode']['length'] - 1]] = r440_currentGlyph;
            };
            r440_xn$startfrom$1aao = _r440_t0['start-from']['bind'](_r440_t0);
            r440_xn$lineto$5sIl = _r440_t0['line-to']['bind'](_r440_t0);
            r440_xn$curveto$1aao = _r440_t0['curve-to']['bind'](_r440_t0);
            r440_xn$cubicto$1aao = _r440_t0['cubic-to']['bind'](_r440_t0);
            r440_xn$putshapes$9Jrj = _r440_t0['put-shapes']['bind'](_r440_t0);
            r440_xn$reverselast$3qIs = _r440_t0['reverse-last']['bind'](_r440_t0);
            r440_include = _r440_t0['include']['bind'](_r440_t0);
            r440_xn$createstroke$7Hrq = _r440_t0['create-stroke']['bind'](_r440_t0);
            r440_xn$setanchor$9Jrj = _r440_t0['set-anchor']['bind'](_r440_t0);
            r440_xn$dontexport$5sIl = function _r440_t3() {
                var _r442_t0, _r442_t1;
                return r440_currentGlyph['dontExport'] = true;
            };
            _r440_t0['gizmo'] = r4_globalTransform;
            _r440_t0['set-width'](r4_WIDTH);
            r440_xn$setwidth$9Jrj(r4_WIDTH);
            r440_xn$assignunicode$7Hrq(339);
            r440_include(r4_eMarks);
            r440_include(r4_glyphs['ae-epart']);
            r440_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t150() {
            var r444_currentGlyph, r444_xn$setwidth$9Jrj, r444_xn$assignunicode$7Hrq, r444_xn$startfrom$1aao, r444_xn$lineto$5sIl, r444_xn$curveto$1aao, r444_xn$cubicto$1aao, r444_xn$putshapes$9Jrj, r444_xn$reverselast$3qIs, r444_include, r444_xn$createstroke$7Hrq, r444_xn$setanchor$9Jrj, r444_xn$dontexport$5sIl, _r444_t0, _r444_t1, _r444_t2, _r444_t3;
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
            r444_xn$dontexport$5sIl = function _r444_t3() {
                var _r446_t0, _r446_t1;
                return r444_currentGlyph['dontExport'] = true;
            };
            _r444_t0['gizmo'] = r4_globalTransform;
            _r444_t0['set-width'](r4_WIDTH);
            r444_xn$assignunicode$7Hrq(208);
            r444_include(r4_glyphs['D'], r4_AS_BASE);
            r444_include(r444_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.4), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t151() {
            var r448_currentGlyph, r448_xn$setwidth$9Jrj, r448_xn$assignunicode$7Hrq, r448_xn$startfrom$1aao, r448_xn$lineto$5sIl, r448_xn$curveto$1aao, r448_xn$cubicto$1aao, r448_xn$putshapes$9Jrj, r448_xn$reverselast$3qIs, r448_include, r448_xn$createstroke$7Hrq, r448_xn$setanchor$9Jrj, r448_xn$dontexport$5sIl, _r448_t0, _r448_t1, _r448_t2, _r448_t3;
            _r448_t0 = this;
            r448_currentGlyph = _r448_t0;
            r448_xn$setwidth$9Jrj = _r448_t0['set-width']['bind'](_r448_t0);
            r448_xn$assignunicode$7Hrq = function _r448_t2(r449_code) {
                var r449_code, _r449_t0, _r449_t1;
                r448_currentGlyph['assign-unicode'](r449_code);
                return r4_unicodeGlyphs[r448_currentGlyph['unicode'][r448_currentGlyph['unicode']['length'] - 1]] = r448_currentGlyph;
            };
            r448_xn$startfrom$1aao = _r448_t0['start-from']['bind'](_r448_t0);
            r448_xn$lineto$5sIl = _r448_t0['line-to']['bind'](_r448_t0);
            r448_xn$curveto$1aao = _r448_t0['curve-to']['bind'](_r448_t0);
            r448_xn$cubicto$1aao = _r448_t0['cubic-to']['bind'](_r448_t0);
            r448_xn$putshapes$9Jrj = _r448_t0['put-shapes']['bind'](_r448_t0);
            r448_xn$reverselast$3qIs = _r448_t0['reverse-last']['bind'](_r448_t0);
            r448_include = _r448_t0['include']['bind'](_r448_t0);
            r448_xn$createstroke$7Hrq = _r448_t0['create-stroke']['bind'](_r448_t0);
            r448_xn$setanchor$9Jrj = _r448_t0['set-anchor']['bind'](_r448_t0);
            r448_xn$dontexport$5sIl = function _r448_t3() {
                var _r450_t0, _r450_t1;
                return r448_currentGlyph['dontExport'] = true;
            };
            _r448_t0['gizmo'] = r4_globalTransform;
            _r448_t0['set-width'](r4_WIDTH);
            r448_xn$assignunicode$7Hrq(272);
            r448_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t152() {
            var r452_currentGlyph, r452_xn$setwidth$9Jrj, r452_xn$assignunicode$7Hrq, r452_xn$startfrom$1aao, r452_xn$lineto$5sIl, r452_xn$curveto$1aao, r452_xn$cubicto$1aao, r452_xn$putshapes$9Jrj, r452_xn$reverselast$3qIs, r452_include, r452_xn$createstroke$7Hrq, r452_xn$setanchor$9Jrj, r452_xn$dontexport$5sIl, r452_ymiddlea, _r452_t0, _r452_t1, _r452_t2, _r452_t3;
            _r452_t0 = this;
            r452_currentGlyph = _r452_t0;
            r452_xn$setwidth$9Jrj = _r452_t0['set-width']['bind'](_r452_t0);
            r452_xn$assignunicode$7Hrq = function _r452_t2(r453_code) {
                var r453_code, _r453_t0, _r453_t1;
                r452_currentGlyph['assign-unicode'](r453_code);
                return r4_unicodeGlyphs[r452_currentGlyph['unicode'][r452_currentGlyph['unicode']['length'] - 1]] = r452_currentGlyph;
            };
            r452_xn$startfrom$1aao = _r452_t0['start-from']['bind'](_r452_t0);
            r452_xn$lineto$5sIl = _r452_t0['line-to']['bind'](_r452_t0);
            r452_xn$curveto$1aao = _r452_t0['curve-to']['bind'](_r452_t0);
            r452_xn$cubicto$1aao = _r452_t0['cubic-to']['bind'](_r452_t0);
            r452_xn$putshapes$9Jrj = _r452_t0['put-shapes']['bind'](_r452_t0);
            r452_xn$reverselast$3qIs = _r452_t0['reverse-last']['bind'](_r452_t0);
            r452_include = _r452_t0['include']['bind'](_r452_t0);
            r452_xn$createstroke$7Hrq = _r452_t0['create-stroke']['bind'](_r452_t0);
            r452_xn$setanchor$9Jrj = _r452_t0['set-anchor']['bind'](_r452_t0);
            r452_xn$dontexport$5sIl = function _r452_t3() {
                var _r454_t0, _r454_t1;
                return r452_currentGlyph['dontExport'] = true;
            };
            _r452_t0['gizmo'] = r4_globalTransform;
            _r452_t0['set-width'](r4_WIDTH);
            r452_xn$setwidth$9Jrj(r4_WIDTH);
            r452_xn$assignunicode$7Hrq(240);
            r452_include(r4_bMarks);
            r452_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r452_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r452_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r452_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, 0))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.4)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t153() {
            var r456_currentGlyph, r456_xn$setwidth$9Jrj, r456_xn$assignunicode$7Hrq, r456_xn$startfrom$1aao, r456_xn$lineto$5sIl, r456_xn$curveto$1aao, r456_xn$cubicto$1aao, r456_xn$putshapes$9Jrj, r456_xn$reverselast$3qIs, r456_include, r456_xn$createstroke$7Hrq, r456_xn$setanchor$9Jrj, r456_xn$dontexport$5sIl, _r456_t0, _r456_t1, _r456_t2, _r456_t3;
            _r456_t0 = this;
            r456_currentGlyph = _r456_t0;
            r456_xn$setwidth$9Jrj = _r456_t0['set-width']['bind'](_r456_t0);
            r456_xn$assignunicode$7Hrq = function _r456_t2(r457_code) {
                var r457_code, _r457_t0, _r457_t1;
                r456_currentGlyph['assign-unicode'](r457_code);
                return r4_unicodeGlyphs[r456_currentGlyph['unicode'][r456_currentGlyph['unicode']['length'] - 1]] = r456_currentGlyph;
            };
            r456_xn$startfrom$1aao = _r456_t0['start-from']['bind'](_r456_t0);
            r456_xn$lineto$5sIl = _r456_t0['line-to']['bind'](_r456_t0);
            r456_xn$curveto$1aao = _r456_t0['curve-to']['bind'](_r456_t0);
            r456_xn$cubicto$1aao = _r456_t0['cubic-to']['bind'](_r456_t0);
            r456_xn$putshapes$9Jrj = _r456_t0['put-shapes']['bind'](_r456_t0);
            r456_xn$reverselast$3qIs = _r456_t0['reverse-last']['bind'](_r456_t0);
            r456_include = _r456_t0['include']['bind'](_r456_t0);
            r456_xn$createstroke$7Hrq = _r456_t0['create-stroke']['bind'](_r456_t0);
            r456_xn$setanchor$9Jrj = _r456_t0['set-anchor']['bind'](_r456_t0);
            r456_xn$dontexport$5sIl = function _r456_t3() {
                var _r458_t0, _r458_t1;
                return r456_currentGlyph['dontExport'] = true;
            };
            _r456_t0['gizmo'] = r4_globalTransform;
            _r456_t0['set-width'](r4_WIDTH);
            r456_xn$assignunicode$7Hrq(273);
            r456_include(r4_glyphs['d'], r4_AS_BASE);
            r456_include(r456_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.6), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t154() {
            var r460_currentGlyph, r460_xn$setwidth$9Jrj, r460_xn$assignunicode$7Hrq, r460_xn$startfrom$1aao, r460_xn$lineto$5sIl, r460_xn$curveto$1aao, r460_xn$cubicto$1aao, r460_xn$putshapes$9Jrj, r460_xn$reverselast$3qIs, r460_include, r460_xn$createstroke$7Hrq, r460_xn$setanchor$9Jrj, r460_xn$dontexport$5sIl, r460_fine, _r460_t0, _r460_t1, _r460_t2, _r460_t3;
            _r460_t0 = this;
            r460_currentGlyph = _r460_t0;
            r460_xn$setwidth$9Jrj = _r460_t0['set-width']['bind'](_r460_t0);
            r460_xn$assignunicode$7Hrq = function _r460_t2(r461_code) {
                var r461_code, _r461_t0, _r461_t1;
                r460_currentGlyph['assign-unicode'](r461_code);
                return r4_unicodeGlyphs[r460_currentGlyph['unicode'][r460_currentGlyph['unicode']['length'] - 1]] = r460_currentGlyph;
            };
            r460_xn$startfrom$1aao = _r460_t0['start-from']['bind'](_r460_t0);
            r460_xn$lineto$5sIl = _r460_t0['line-to']['bind'](_r460_t0);
            r460_xn$curveto$1aao = _r460_t0['curve-to']['bind'](_r460_t0);
            r460_xn$cubicto$1aao = _r460_t0['cubic-to']['bind'](_r460_t0);
            r460_xn$putshapes$9Jrj = _r460_t0['put-shapes']['bind'](_r460_t0);
            r460_xn$reverselast$3qIs = _r460_t0['reverse-last']['bind'](_r460_t0);
            r460_include = _r460_t0['include']['bind'](_r460_t0);
            r460_xn$createstroke$7Hrq = _r460_t0['create-stroke']['bind'](_r460_t0);
            r460_xn$setanchor$9Jrj = _r460_t0['set-anchor']['bind'](_r460_t0);
            r460_xn$dontexport$5sIl = function _r460_t3() {
                var _r462_t0, _r462_t1;
                return r460_currentGlyph['dontExport'] = true;
            };
            _r460_t0['gizmo'] = r4_globalTransform;
            _r460_t0['set-width'](r4_WIDTH);
            r460_xn$assignunicode$7Hrq(216);
            r460_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r460_include(r4_glyphs['O'], r4_AS_BASE);
            r460_include(r460_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r460_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r460_fine, r460_fine)['line-to'](r4_RIGHTSB - r4_O - r460_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t155() {
            var r464_currentGlyph, r464_xn$setwidth$9Jrj, r464_xn$assignunicode$7Hrq, r464_xn$startfrom$1aao, r464_xn$lineto$5sIl, r464_xn$curveto$1aao, r464_xn$cubicto$1aao, r464_xn$putshapes$9Jrj, r464_xn$reverselast$3qIs, r464_include, r464_xn$createstroke$7Hrq, r464_xn$setanchor$9Jrj, r464_xn$dontexport$5sIl, r464_fine, _r464_t0, _r464_t1, _r464_t2, _r464_t3;
            _r464_t0 = this;
            r464_currentGlyph = _r464_t0;
            r464_xn$setwidth$9Jrj = _r464_t0['set-width']['bind'](_r464_t0);
            r464_xn$assignunicode$7Hrq = function _r464_t2(r465_code) {
                var r465_code, _r465_t0, _r465_t1;
                r464_currentGlyph['assign-unicode'](r465_code);
                return r4_unicodeGlyphs[r464_currentGlyph['unicode'][r464_currentGlyph['unicode']['length'] - 1]] = r464_currentGlyph;
            };
            r464_xn$startfrom$1aao = _r464_t0['start-from']['bind'](_r464_t0);
            r464_xn$lineto$5sIl = _r464_t0['line-to']['bind'](_r464_t0);
            r464_xn$curveto$1aao = _r464_t0['curve-to']['bind'](_r464_t0);
            r464_xn$cubicto$1aao = _r464_t0['cubic-to']['bind'](_r464_t0);
            r464_xn$putshapes$9Jrj = _r464_t0['put-shapes']['bind'](_r464_t0);
            r464_xn$reverselast$3qIs = _r464_t0['reverse-last']['bind'](_r464_t0);
            r464_include = _r464_t0['include']['bind'](_r464_t0);
            r464_xn$createstroke$7Hrq = _r464_t0['create-stroke']['bind'](_r464_t0);
            r464_xn$setanchor$9Jrj = _r464_t0['set-anchor']['bind'](_r464_t0);
            r464_xn$dontexport$5sIl = function _r464_t3() {
                var _r466_t0, _r466_t1;
                return r464_currentGlyph['dontExport'] = true;
            };
            _r464_t0['gizmo'] = r4_globalTransform;
            _r464_t0['set-width'](r4_WIDTH);
            r464_xn$assignunicode$7Hrq(248);
            r464_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r464_include(r4_glyphs['o'], r4_AS_BASE);
            r464_include(r464_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r464_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r464_fine, r464_fine)['line-to'](r4_RIGHTSB - r4_O - r464_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t156() {
            var r468_currentGlyph, r468_xn$setwidth$9Jrj, r468_xn$assignunicode$7Hrq, r468_xn$startfrom$1aao, r468_xn$lineto$5sIl, r468_xn$curveto$1aao, r468_xn$cubicto$1aao, r468_xn$putshapes$9Jrj, r468_xn$reverselast$3qIs, r468_include, r468_xn$createstroke$7Hrq, r468_xn$setanchor$9Jrj, r468_xn$dontexport$5sIl, r468_bowlTop, r468_bowlBottom, r468_bkappa, r468_turn, r468_turnRadius, _r468_t0, _r468_t1, _r468_t2, _r468_t3;
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
            r468_xn$dontexport$5sIl = function _r468_t3() {
                var _r470_t0, _r470_t1;
                return r468_currentGlyph['dontExport'] = true;
            };
            _r468_t0['gizmo'] = r4_globalTransform;
            _r468_t0['set-width'](r4_WIDTH);
            r468_xn$setwidth$9Jrj(r4_WIDTH);
            r468_xn$assignunicode$7Hrq(222);
            r468_include(r4_capitalMarks);
            r468_bowlTop = r4_CAP * 0.77;
            r468_bowlBottom = r4_CAP * 0.23;
            r468_bkappa = r4_COKAPPA - 0.2;
            r468_turn = r0_mix(r468_bowlTop, r468_bowlBottom, 0.5);
            r468_turnRadius = (r468_bowlTop - r468_bowlBottom) / 2;
            r468_include(r468_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r468_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r468_turnRadius, r468_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r468_turn)['arc-vh-to'](r4_RIGHTSB - r468_turnRadius, r468_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r468_bowlBottom)['heads-to'](r4_LEFTWARD));
            r468_include(r468_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t157() {
            var r472_currentGlyph, r472_xn$setwidth$9Jrj, r472_xn$assignunicode$7Hrq, r472_xn$startfrom$1aao, r472_xn$lineto$5sIl, r472_xn$curveto$1aao, r472_xn$cubicto$1aao, r472_xn$putshapes$9Jrj, r472_xn$reverselast$3qIs, r472_include, r472_xn$createstroke$7Hrq, r472_xn$setanchor$9Jrj, r472_xn$dontexport$5sIl, _r472_t0, _r472_t1, _r472_t2, _r472_t3;
            _r472_t0 = this;
            r472_currentGlyph = _r472_t0;
            r472_xn$setwidth$9Jrj = _r472_t0['set-width']['bind'](_r472_t0);
            r472_xn$assignunicode$7Hrq = function _r472_t2(r473_code) {
                var r473_code, _r473_t0, _r473_t1;
                r472_currentGlyph['assign-unicode'](r473_code);
                return r4_unicodeGlyphs[r472_currentGlyph['unicode'][r472_currentGlyph['unicode']['length'] - 1]] = r472_currentGlyph;
            };
            r472_xn$startfrom$1aao = _r472_t0['start-from']['bind'](_r472_t0);
            r472_xn$lineto$5sIl = _r472_t0['line-to']['bind'](_r472_t0);
            r472_xn$curveto$1aao = _r472_t0['curve-to']['bind'](_r472_t0);
            r472_xn$cubicto$1aao = _r472_t0['cubic-to']['bind'](_r472_t0);
            r472_xn$putshapes$9Jrj = _r472_t0['put-shapes']['bind'](_r472_t0);
            r472_xn$reverselast$3qIs = _r472_t0['reverse-last']['bind'](_r472_t0);
            r472_include = _r472_t0['include']['bind'](_r472_t0);
            r472_xn$createstroke$7Hrq = _r472_t0['create-stroke']['bind'](_r472_t0);
            r472_xn$setanchor$9Jrj = _r472_t0['set-anchor']['bind'](_r472_t0);
            r472_xn$dontexport$5sIl = function _r472_t3() {
                var _r474_t0, _r474_t1;
                return r472_currentGlyph['dontExport'] = true;
            };
            _r472_t0['gizmo'] = r4_globalTransform;
            _r472_t0['set-width'](r4_WIDTH);
            r472_xn$assignunicode$7Hrq(254);
            r472_include(r4_glyphs['b'], r4_AS_BASE);
            r472_include(r4_glyphs['p']);
            r472_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t158() {
            var r476_currentGlyph, r476_xn$setwidth$9Jrj, r476_xn$assignunicode$7Hrq, r476_xn$startfrom$1aao, r476_xn$lineto$5sIl, r476_xn$curveto$1aao, r476_xn$cubicto$1aao, r476_xn$putshapes$9Jrj, r476_xn$reverselast$3qIs, r476_include, r476_xn$createstroke$7Hrq, r476_xn$setanchor$9Jrj, r476_xn$dontexport$5sIl, r476_yTopTurn, r476_yBottomTurn, r476_xTopTurn, r476_xMiddleTurn, r476_xBottomTurn, r476_xBottomFinal, _r476_t0, _r476_t1, _r476_t2, _r476_t3;
            _r476_t0 = this;
            r476_currentGlyph = _r476_t0;
            r476_xn$setwidth$9Jrj = _r476_t0['set-width']['bind'](_r476_t0);
            r476_xn$assignunicode$7Hrq = function _r476_t2(r477_code) {
                var r477_code, _r477_t0, _r477_t1;
                r476_currentGlyph['assign-unicode'](r477_code);
                return r4_unicodeGlyphs[r476_currentGlyph['unicode'][r476_currentGlyph['unicode']['length'] - 1]] = r476_currentGlyph;
            };
            r476_xn$startfrom$1aao = _r476_t0['start-from']['bind'](_r476_t0);
            r476_xn$lineto$5sIl = _r476_t0['line-to']['bind'](_r476_t0);
            r476_xn$curveto$1aao = _r476_t0['curve-to']['bind'](_r476_t0);
            r476_xn$cubicto$1aao = _r476_t0['cubic-to']['bind'](_r476_t0);
            r476_xn$putshapes$9Jrj = _r476_t0['put-shapes']['bind'](_r476_t0);
            r476_xn$reverselast$3qIs = _r476_t0['reverse-last']['bind'](_r476_t0);
            r476_include = _r476_t0['include']['bind'](_r476_t0);
            r476_xn$createstroke$7Hrq = _r476_t0['create-stroke']['bind'](_r476_t0);
            r476_xn$setanchor$9Jrj = _r476_t0['set-anchor']['bind'](_r476_t0);
            r476_xn$dontexport$5sIl = function _r476_t3() {
                var _r478_t0, _r478_t1;
                return r476_currentGlyph['dontExport'] = true;
            };
            _r476_t0['gizmo'] = r4_globalTransform;
            _r476_t0['set-width'](r4_WIDTH);
            r476_xn$setwidth$9Jrj(r4_WIDTH);
            r476_xn$dontexport$5sIl();
            r476_include(r4_bMarks);
            r476_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r476_yBottomTurn = r4_CAP * 0.41;
            r476_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r476_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r476_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r476_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r476_include(r476_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r476_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r476_xTopTurn, r476_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r476_xTopTurn, r476_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r476_include(r476_xn$createstroke$7Hrq()['start-from'](r476_xTopTurn + r4_HALFSTROKE, r476_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r476_xMiddleTurn + (r476_yTopTurn - r476_yBottomTurn) / 2, r476_yTopTurn)['arc-hv-to'](r476_xMiddleTurn, r0_mix(r476_yTopTurn, r476_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r476_xMiddleTurn, r476_xBottomTurn, 0.5), r476_yBottomTurn)['arc-hv-to'](r476_xBottomTurn, r0_mix(r476_yBottomTurn + r4_HALFSTROKE, 0, 0.475))['arc-vh-to'](r476_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r476_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t159() {
            var r480_currentGlyph, r480_xn$setwidth$9Jrj, r480_xn$assignunicode$7Hrq, r480_xn$startfrom$1aao, r480_xn$lineto$5sIl, r480_xn$curveto$1aao, r480_xn$cubicto$1aao, r480_xn$putshapes$9Jrj, r480_xn$reverselast$3qIs, r480_include, r480_xn$createstroke$7Hrq, r480_xn$setanchor$9Jrj, r480_xn$dontexport$5sIl, _r480_t0, _r480_t1, _r480_t2, _r480_t3;
            _r480_t0 = this;
            r480_currentGlyph = _r480_t0;
            r480_xn$setwidth$9Jrj = _r480_t0['set-width']['bind'](_r480_t0);
            r480_xn$assignunicode$7Hrq = function _r480_t2(r481_code) {
                var r481_code, _r481_t0, _r481_t1;
                r480_currentGlyph['assign-unicode'](r481_code);
                return r4_unicodeGlyphs[r480_currentGlyph['unicode'][r480_currentGlyph['unicode']['length'] - 1]] = r480_currentGlyph;
            };
            r480_xn$startfrom$1aao = _r480_t0['start-from']['bind'](_r480_t0);
            r480_xn$lineto$5sIl = _r480_t0['line-to']['bind'](_r480_t0);
            r480_xn$curveto$1aao = _r480_t0['curve-to']['bind'](_r480_t0);
            r480_xn$cubicto$1aao = _r480_t0['cubic-to']['bind'](_r480_t0);
            r480_xn$putshapes$9Jrj = _r480_t0['put-shapes']['bind'](_r480_t0);
            r480_xn$reverselast$3qIs = _r480_t0['reverse-last']['bind'](_r480_t0);
            r480_include = _r480_t0['include']['bind'](_r480_t0);
            r480_xn$createstroke$7Hrq = _r480_t0['create-stroke']['bind'](_r480_t0);
            r480_xn$setanchor$9Jrj = _r480_t0['set-anchor']['bind'](_r480_t0);
            r480_xn$dontexport$5sIl = function _r480_t3() {
                var _r482_t0, _r482_t1;
                return r480_currentGlyph['dontExport'] = true;
            };
            _r480_t0['gizmo'] = r4_globalTransform;
            _r480_t0['set-width'](r4_WIDTH);
            r480_xn$setwidth$9Jrj(r4_WIDTH);
            r480_xn$dontexport$5sIl();
            r480_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r480_include(r4_ifMarks);
            r480_include(r4_eshHook(r4_glyphs['eszet.upright']['italicHookAttachPoint']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t160() {
            var r484_currentGlyph, r484_xn$setwidth$9Jrj, r484_xn$assignunicode$7Hrq, r484_xn$startfrom$1aao, r484_xn$lineto$5sIl, r484_xn$curveto$1aao, r484_xn$cubicto$1aao, r484_xn$putshapes$9Jrj, r484_xn$reverselast$3qIs, r484_include, r484_xn$createstroke$7Hrq, r484_xn$setanchor$9Jrj, r484_xn$dontexport$5sIl, _r484_t0, _r484_t1, _r484_t2, _r484_t3;
            _r484_t0 = this;
            r484_currentGlyph = _r484_t0;
            r484_xn$setwidth$9Jrj = _r484_t0['set-width']['bind'](_r484_t0);
            r484_xn$assignunicode$7Hrq = function _r484_t2(r485_code) {
                var r485_code, _r485_t0, _r485_t1;
                r484_currentGlyph['assign-unicode'](r485_code);
                return r4_unicodeGlyphs[r484_currentGlyph['unicode'][r484_currentGlyph['unicode']['length'] - 1]] = r484_currentGlyph;
            };
            r484_xn$startfrom$1aao = _r484_t0['start-from']['bind'](_r484_t0);
            r484_xn$lineto$5sIl = _r484_t0['line-to']['bind'](_r484_t0);
            r484_xn$curveto$1aao = _r484_t0['curve-to']['bind'](_r484_t0);
            r484_xn$cubicto$1aao = _r484_t0['cubic-to']['bind'](_r484_t0);
            r484_xn$putshapes$9Jrj = _r484_t0['put-shapes']['bind'](_r484_t0);
            r484_xn$reverselast$3qIs = _r484_t0['reverse-last']['bind'](_r484_t0);
            r484_include = _r484_t0['include']['bind'](_r484_t0);
            r484_xn$createstroke$7Hrq = _r484_t0['create-stroke']['bind'](_r484_t0);
            r484_xn$setanchor$9Jrj = _r484_t0['set-anchor']['bind'](_r484_t0);
            r484_xn$dontexport$5sIl = function _r484_t3() {
                var _r486_t0, _r486_t1;
                return r484_currentGlyph['dontExport'] = true;
            };
            _r484_t0['gizmo'] = r4_globalTransform;
            _r484_t0['set-width'](r4_WIDTH);
            r484_xn$setwidth$9Jrj(r4_WIDTH);
            r484_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r484_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r484_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_ezhshape = function _r4_t161(r487_top, r487_bot) {
            var r487_top, r487_bot, _r487_t0, _r487_t1, _r487_t2;
            return function _r487_t2() {
                var r489_currentGlyph, r489_xn$setwidth$9Jrj, r489_xn$assignunicode$7Hrq, r489_xn$startfrom$1aao, r489_xn$lineto$5sIl, r489_xn$curveto$1aao, r489_xn$cubicto$1aao, r489_xn$putshapes$9Jrj, r489_xn$reverselast$3qIs, r489_include, r489_xn$createstroke$7Hrq, r489_xn$setanchor$9Jrj, r489_xn$dontexport$5sIl, r489_cor, r489_yMidBar, r489_ezhLeft, r489_ezhRight, _r489_t0, _r489_t1, _r489_t2, _r489_t3;
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
                r489_cor = 1.2;
                r489_yMidBar = r0_mix(r487_bot, r487_top, 0.6);
                r489_ezhLeft = r0_mix(r4_SB, r4_RIGHTSB, 0.2);
                r489_ezhRight = r0_mix(r4_SB, r4_RIGHTSB, 0.925);
                r489_include(r489_xn$createstroke$7Hrq()['start-from'](r4_SB, r487_top)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r489_ezhRight, r487_top)['heads-to'](r4_RIGHTWARD)['to-outline']());
                r489_include(r489_xn$createstroke$7Hrq()['start-from'](r489_ezhLeft, r489_yMidBar)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE, r489_yMidBar)['arc-hv-to'](r4_RIGHTSB, r0_mix(r489_yMidBar, r487_bot, 0.5))['to-outline']());
                r489_include(r4_XSHookLower(r487_bot, r4_SB, r0_mix(r4_SB, r4_RIGHTSB, 0.465), r4_RIGHTSB, (r489_yMidBar - r487_bot) / 2, r4_SHOOK));
                r489_xn$startfrom$1aao(r489_ezhLeft, r489_yMidBar);
                r489_xn$lineto$5sIl(r489_ezhLeft + r4_STROKE * r489_cor, r489_yMidBar);
                r489_xn$lineto$5sIl(r489_ezhRight, r487_top - r4_STROKE);
                r489_xn$lineto$5sIl(r489_ezhRight - r4_STROKE * r489_cor, r487_top - r4_STROKE);
                r489_xn$reverselast$3qIs();
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('Ezh', function _r4_t162() {
            var r493_currentGlyph, r493_xn$setwidth$9Jrj, r493_xn$assignunicode$7Hrq, r493_xn$startfrom$1aao, r493_xn$lineto$5sIl, r493_xn$curveto$1aao, r493_xn$cubicto$1aao, r493_xn$putshapes$9Jrj, r493_xn$reverselast$3qIs, r493_include, r493_xn$createstroke$7Hrq, r493_xn$setanchor$9Jrj, r493_xn$dontexport$5sIl, _r493_t0, _r493_t1, _r493_t2, _r493_t3;
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
            r493_xn$assignunicode$7Hrq(439);
            r493_include(r4_capitalMarks);
            r493_include(r4_ezhshape(r4_CAP, 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ezh', function _r4_t163() {
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
            r497_xn$assignunicode$7Hrq(658);
            r497_include(r4_pMarks);
            r497_include(r4_ezhshape(r4_XH, r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t164() {
            var r501_currentGlyph, r501_xn$setwidth$9Jrj, r501_xn$assignunicode$7Hrq, r501_xn$startfrom$1aao, r501_xn$lineto$5sIl, r501_xn$curveto$1aao, r501_xn$cubicto$1aao, r501_xn$putshapes$9Jrj, r501_xn$reverselast$3qIs, r501_include, r501_xn$createstroke$7Hrq, r501_xn$setanchor$9Jrj, r501_xn$dontexport$5sIl, r501_fine, _r501_t0, _r501_t1, _r501_t2, _r501_t3;
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
            r501_xn$dontexport$5sIl();
            r501_include(r4_glyphs['O']);
            r501_fine = r4_adviceBlackness(9);
            r501_include(r501_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.77))['set-width'](r501_fine, r501_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.77));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t165() {
            var r505_currentGlyph, r505_xn$setwidth$9Jrj, r505_xn$assignunicode$7Hrq, r505_xn$startfrom$1aao, r505_xn$lineto$5sIl, r505_xn$curveto$1aao, r505_xn$cubicto$1aao, r505_xn$putshapes$9Jrj, r505_xn$reverselast$3qIs, r505_include, r505_xn$createstroke$7Hrq, r505_xn$setanchor$9Jrj, r505_xn$dontexport$5sIl, _r505_t0, _r505_t1, _r505_t2, _r505_t3;
            _r505_t0 = this;
            r505_currentGlyph = _r505_t0;
            r505_xn$setwidth$9Jrj = _r505_t0['set-width']['bind'](_r505_t0);
            r505_xn$assignunicode$7Hrq = function _r505_t2(r506_code) {
                var r506_code, _r506_t0, _r506_t1;
                r505_currentGlyph['assign-unicode'](r506_code);
                return r4_unicodeGlyphs[r505_currentGlyph['unicode'][r505_currentGlyph['unicode']['length'] - 1]] = r505_currentGlyph;
            };
            r505_xn$startfrom$1aao = _r505_t0['start-from']['bind'](_r505_t0);
            r505_xn$lineto$5sIl = _r505_t0['line-to']['bind'](_r505_t0);
            r505_xn$curveto$1aao = _r505_t0['curve-to']['bind'](_r505_t0);
            r505_xn$cubicto$1aao = _r505_t0['cubic-to']['bind'](_r505_t0);
            r505_xn$putshapes$9Jrj = _r505_t0['put-shapes']['bind'](_r505_t0);
            r505_xn$reverselast$3qIs = _r505_t0['reverse-last']['bind'](_r505_t0);
            r505_include = _r505_t0['include']['bind'](_r505_t0);
            r505_xn$createstroke$7Hrq = _r505_t0['create-stroke']['bind'](_r505_t0);
            r505_xn$setanchor$9Jrj = _r505_t0['set-anchor']['bind'](_r505_t0);
            r505_xn$dontexport$5sIl = function _r505_t3() {
                var _r507_t0, _r507_t1;
                return r505_currentGlyph['dontExport'] = true;
            };
            _r505_t0['gizmo'] = r4_globalTransform;
            _r505_t0['set-width'](r4_WIDTH);
            r505_xn$setwidth$9Jrj(r4_WIDTH);
            r505_xn$dontexport$5sIl();
            r505_include(r4_glyphs['O']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t166() {
            var r509_currentGlyph, r509_xn$setwidth$9Jrj, r509_xn$assignunicode$7Hrq, r509_xn$startfrom$1aao, r509_xn$lineto$5sIl, r509_xn$curveto$1aao, r509_xn$cubicto$1aao, r509_xn$putshapes$9Jrj, r509_xn$reverselast$3qIs, r509_include, r509_xn$createstroke$7Hrq, r509_xn$setanchor$9Jrj, r509_xn$dontexport$5sIl, r509_radius, _r509_t0, _r509_t1, _r509_t2, _r509_t3;
            _r509_t0 = this;
            r509_currentGlyph = _r509_t0;
            r509_xn$setwidth$9Jrj = _r509_t0['set-width']['bind'](_r509_t0);
            r509_xn$assignunicode$7Hrq = function _r509_t2(r510_code) {
                var r510_code, _r510_t0, _r510_t1;
                r509_currentGlyph['assign-unicode'](r510_code);
                return r4_unicodeGlyphs[r509_currentGlyph['unicode'][r509_currentGlyph['unicode']['length'] - 1]] = r509_currentGlyph;
            };
            r509_xn$startfrom$1aao = _r509_t0['start-from']['bind'](_r509_t0);
            r509_xn$lineto$5sIl = _r509_t0['line-to']['bind'](_r509_t0);
            r509_xn$curveto$1aao = _r509_t0['curve-to']['bind'](_r509_t0);
            r509_xn$cubicto$1aao = _r509_t0['cubic-to']['bind'](_r509_t0);
            r509_xn$putshapes$9Jrj = _r509_t0['put-shapes']['bind'](_r509_t0);
            r509_xn$reverselast$3qIs = _r509_t0['reverse-last']['bind'](_r509_t0);
            r509_include = _r509_t0['include']['bind'](_r509_t0);
            r509_xn$createstroke$7Hrq = _r509_t0['create-stroke']['bind'](_r509_t0);
            r509_xn$setanchor$9Jrj = _r509_t0['set-anchor']['bind'](_r509_t0);
            r509_xn$dontexport$5sIl = function _r509_t3() {
                var _r511_t0, _r511_t1;
                return r509_currentGlyph['dontExport'] = true;
            };
            _r509_t0['gizmo'] = r4_globalTransform;
            _r509_t0['set-width'](r4_WIDTH);
            r509_xn$setwidth$9Jrj(r4_WIDTH);
            r509_xn$dontexport$5sIl();
            r509_include(r4_glyphs['O']);
            r509_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r509_include([r4_Ring(r4_CAPMIDDLE + r509_radius, r4_CAPMIDDLE - r509_radius, r4_MIDDLE + r509_radius, r4_MIDDLE - r509_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t167() {
            var r513_currentGlyph, r513_xn$setwidth$9Jrj, r513_xn$assignunicode$7Hrq, r513_xn$startfrom$1aao, r513_xn$lineto$5sIl, r513_xn$curveto$1aao, r513_xn$cubicto$1aao, r513_xn$putshapes$9Jrj, r513_xn$reverselast$3qIs, r513_include, r513_xn$createstroke$7Hrq, r513_xn$setanchor$9Jrj, r513_xn$dontexport$5sIl, _r513_t0, _r513_t1, _r513_t2, _r513_t3;
            _r513_t0 = this;
            r513_currentGlyph = _r513_t0;
            r513_xn$setwidth$9Jrj = _r513_t0['set-width']['bind'](_r513_t0);
            r513_xn$assignunicode$7Hrq = function _r513_t2(r514_code) {
                var r514_code, _r514_t0, _r514_t1;
                r513_currentGlyph['assign-unicode'](r514_code);
                return r4_unicodeGlyphs[r513_currentGlyph['unicode'][r513_currentGlyph['unicode']['length'] - 1]] = r513_currentGlyph;
            };
            r513_xn$startfrom$1aao = _r513_t0['start-from']['bind'](_r513_t0);
            r513_xn$lineto$5sIl = _r513_t0['line-to']['bind'](_r513_t0);
            r513_xn$curveto$1aao = _r513_t0['curve-to']['bind'](_r513_t0);
            r513_xn$cubicto$1aao = _r513_t0['cubic-to']['bind'](_r513_t0);
            r513_xn$putshapes$9Jrj = _r513_t0['put-shapes']['bind'](_r513_t0);
            r513_xn$reverselast$3qIs = _r513_t0['reverse-last']['bind'](_r513_t0);
            r513_include = _r513_t0['include']['bind'](_r513_t0);
            r513_xn$createstroke$7Hrq = _r513_t0['create-stroke']['bind'](_r513_t0);
            r513_xn$setanchor$9Jrj = _r513_t0['set-anchor']['bind'](_r513_t0);
            r513_xn$dontexport$5sIl = function _r513_t3() {
                var _r515_t0, _r515_t1;
                return r513_currentGlyph['dontExport'] = true;
            };
            _r513_t0['gizmo'] = r4_globalTransform;
            _r513_t0['set-width'](r4_WIDTH);
            r513_xn$setwidth$9Jrj(r4_WIDTH);
            r513_xn$assignunicode$7Hrq('1');
            r513_include(r513_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD));
            r513_include(r513_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t168() {
            var r517_currentGlyph, r517_xn$setwidth$9Jrj, r517_xn$assignunicode$7Hrq, r517_xn$startfrom$1aao, r517_xn$lineto$5sIl, r517_xn$curveto$1aao, r517_xn$cubicto$1aao, r517_xn$putshapes$9Jrj, r517_xn$reverselast$3qIs, r517_include, r517_xn$createstroke$7Hrq, r517_xn$setanchor$9Jrj, r517_xn$dontexport$5sIl, _r517_t0, _r517_t1, _r517_t2, _r517_t3;
            _r517_t0 = this;
            r517_currentGlyph = _r517_t0;
            r517_xn$setwidth$9Jrj = _r517_t0['set-width']['bind'](_r517_t0);
            r517_xn$assignunicode$7Hrq = function _r517_t2(r518_code) {
                var r518_code, _r518_t0, _r518_t1;
                r517_currentGlyph['assign-unicode'](r518_code);
                return r4_unicodeGlyphs[r517_currentGlyph['unicode'][r517_currentGlyph['unicode']['length'] - 1]] = r517_currentGlyph;
            };
            r517_xn$startfrom$1aao = _r517_t0['start-from']['bind'](_r517_t0);
            r517_xn$lineto$5sIl = _r517_t0['line-to']['bind'](_r517_t0);
            r517_xn$curveto$1aao = _r517_t0['curve-to']['bind'](_r517_t0);
            r517_xn$cubicto$1aao = _r517_t0['cubic-to']['bind'](_r517_t0);
            r517_xn$putshapes$9Jrj = _r517_t0['put-shapes']['bind'](_r517_t0);
            r517_xn$reverselast$3qIs = _r517_t0['reverse-last']['bind'](_r517_t0);
            r517_include = _r517_t0['include']['bind'](_r517_t0);
            r517_xn$createstroke$7Hrq = _r517_t0['create-stroke']['bind'](_r517_t0);
            r517_xn$setanchor$9Jrj = _r517_t0['set-anchor']['bind'](_r517_t0);
            r517_xn$dontexport$5sIl = function _r517_t3() {
                var _r519_t0, _r519_t1;
                return r517_currentGlyph['dontExport'] = true;
            };
            _r517_t0['gizmo'] = r4_globalTransform;
            _r517_t0['set-width'](r4_WIDTH);
            r517_xn$setwidth$9Jrj(r4_WIDTH);
            r517_xn$assignunicode$7Hrq('2');
            r517_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r517_include(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r517_include(r517_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t169() {
            var r521_currentGlyph, r521_xn$setwidth$9Jrj, r521_xn$assignunicode$7Hrq, r521_xn$startfrom$1aao, r521_xn$lineto$5sIl, r521_xn$curveto$1aao, r521_xn$cubicto$1aao, r521_xn$putshapes$9Jrj, r521_xn$reverselast$3qIs, r521_include, r521_xn$createstroke$7Hrq, r521_xn$setanchor$9Jrj, r521_xn$dontexport$5sIl, r521_threeRadius, _r521_t0, _r521_t1, _r521_t2, _r521_t3;
            _r521_t0 = this;
            r521_currentGlyph = _r521_t0;
            r521_xn$setwidth$9Jrj = _r521_t0['set-width']['bind'](_r521_t0);
            r521_xn$assignunicode$7Hrq = function _r521_t2(r522_code) {
                var r522_code, _r522_t0, _r522_t1;
                r521_currentGlyph['assign-unicode'](r522_code);
                return r4_unicodeGlyphs[r521_currentGlyph['unicode'][r521_currentGlyph['unicode']['length'] - 1]] = r521_currentGlyph;
            };
            r521_xn$startfrom$1aao = _r521_t0['start-from']['bind'](_r521_t0);
            r521_xn$lineto$5sIl = _r521_t0['line-to']['bind'](_r521_t0);
            r521_xn$curveto$1aao = _r521_t0['curve-to']['bind'](_r521_t0);
            r521_xn$cubicto$1aao = _r521_t0['cubic-to']['bind'](_r521_t0);
            r521_xn$putshapes$9Jrj = _r521_t0['put-shapes']['bind'](_r521_t0);
            r521_xn$reverselast$3qIs = _r521_t0['reverse-last']['bind'](_r521_t0);
            r521_include = _r521_t0['include']['bind'](_r521_t0);
            r521_xn$createstroke$7Hrq = _r521_t0['create-stroke']['bind'](_r521_t0);
            r521_xn$setanchor$9Jrj = _r521_t0['set-anchor']['bind'](_r521_t0);
            r521_xn$dontexport$5sIl = function _r521_t3() {
                var _r523_t0, _r523_t1;
                return r521_currentGlyph['dontExport'] = true;
            };
            _r521_t0['gizmo'] = r4_globalTransform;
            _r521_t0['set-width'](r4_WIDTH);
            r521_xn$setwidth$9Jrj(r4_WIDTH);
            r521_xn$assignunicode$7Hrq('3');
            r521_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r521_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r521_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r521_include(r521_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r521_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r521_include(r521_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r521_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t170() {
            var r525_currentGlyph, r525_xn$setwidth$9Jrj, r525_xn$assignunicode$7Hrq, r525_xn$startfrom$1aao, r525_xn$lineto$5sIl, r525_xn$curveto$1aao, r525_xn$cubicto$1aao, r525_xn$putshapes$9Jrj, r525_xn$reverselast$3qIs, r525_include, r525_xn$createstroke$7Hrq, r525_xn$setanchor$9Jrj, r525_xn$dontexport$5sIl, r525_bar, r525_vert, _r525_t0, _r525_t1, _r525_t2, _r525_t3;
            _r525_t0 = this;
            r525_currentGlyph = _r525_t0;
            r525_xn$setwidth$9Jrj = _r525_t0['set-width']['bind'](_r525_t0);
            r525_xn$assignunicode$7Hrq = function _r525_t2(r526_code) {
                var r526_code, _r526_t0, _r526_t1;
                r525_currentGlyph['assign-unicode'](r526_code);
                return r4_unicodeGlyphs[r525_currentGlyph['unicode'][r525_currentGlyph['unicode']['length'] - 1]] = r525_currentGlyph;
            };
            r525_xn$startfrom$1aao = _r525_t0['start-from']['bind'](_r525_t0);
            r525_xn$lineto$5sIl = _r525_t0['line-to']['bind'](_r525_t0);
            r525_xn$curveto$1aao = _r525_t0['curve-to']['bind'](_r525_t0);
            r525_xn$cubicto$1aao = _r525_t0['cubic-to']['bind'](_r525_t0);
            r525_xn$putshapes$9Jrj = _r525_t0['put-shapes']['bind'](_r525_t0);
            r525_xn$reverselast$3qIs = _r525_t0['reverse-last']['bind'](_r525_t0);
            r525_include = _r525_t0['include']['bind'](_r525_t0);
            r525_xn$createstroke$7Hrq = _r525_t0['create-stroke']['bind'](_r525_t0);
            r525_xn$setanchor$9Jrj = _r525_t0['set-anchor']['bind'](_r525_t0);
            r525_xn$dontexport$5sIl = function _r525_t3() {
                var _r527_t0, _r527_t1;
                return r525_currentGlyph['dontExport'] = true;
            };
            _r525_t0['gizmo'] = r4_globalTransform;
            _r525_t0['set-width'](r4_WIDTH);
            r525_xn$setwidth$9Jrj(r4_WIDTH);
            r525_xn$assignunicode$7Hrq('4');
            r525_bar = r4_CAP * 0.4;
            r525_vert = r4_WIDTH * 0.55;
            r525_include(r525_xn$createstroke$7Hrq()['start-from'](r4_SB, r525_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r525_bar)['heads-to'](r4_RIGHTWARD));
            r525_include(r525_xn$createstroke$7Hrq()['start-from'](r525_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r525_vert, r4_CAP)['heads-to'](r4_UPWARD));
            r525_include(r525_xn$createstroke$7Hrq()['start-from'](r4_SB, r525_bar)['set-width'](0, r4_STROKE)['line-to'](r525_vert, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t171() {
            var r529_currentGlyph, r529_xn$setwidth$9Jrj, r529_xn$assignunicode$7Hrq, r529_xn$startfrom$1aao, r529_xn$lineto$5sIl, r529_xn$curveto$1aao, r529_xn$cubicto$1aao, r529_xn$putshapes$9Jrj, r529_xn$reverselast$3qIs, r529_include, r529_xn$createstroke$7Hrq, r529_xn$setanchor$9Jrj, r529_xn$dontexport$5sIl, _r529_t0, _r529_t1, _r529_t2, _r529_t3;
            _r529_t0 = this;
            r529_currentGlyph = _r529_t0;
            r529_xn$setwidth$9Jrj = _r529_t0['set-width']['bind'](_r529_t0);
            r529_xn$assignunicode$7Hrq = function _r529_t2(r530_code) {
                var r530_code, _r530_t0, _r530_t1;
                r529_currentGlyph['assign-unicode'](r530_code);
                return r4_unicodeGlyphs[r529_currentGlyph['unicode'][r529_currentGlyph['unicode']['length'] - 1]] = r529_currentGlyph;
            };
            r529_xn$startfrom$1aao = _r529_t0['start-from']['bind'](_r529_t0);
            r529_xn$lineto$5sIl = _r529_t0['line-to']['bind'](_r529_t0);
            r529_xn$curveto$1aao = _r529_t0['curve-to']['bind'](_r529_t0);
            r529_xn$cubicto$1aao = _r529_t0['cubic-to']['bind'](_r529_t0);
            r529_xn$putshapes$9Jrj = _r529_t0['put-shapes']['bind'](_r529_t0);
            r529_xn$reverselast$3qIs = _r529_t0['reverse-last']['bind'](_r529_t0);
            r529_include = _r529_t0['include']['bind'](_r529_t0);
            r529_xn$createstroke$7Hrq = _r529_t0['create-stroke']['bind'](_r529_t0);
            r529_xn$setanchor$9Jrj = _r529_t0['set-anchor']['bind'](_r529_t0);
            r529_xn$dontexport$5sIl = function _r529_t3() {
                var _r531_t0, _r531_t1;
                return r529_currentGlyph['dontExport'] = true;
            };
            _r529_t0['gizmo'] = r4_globalTransform;
            _r529_t0['set-width'](r4_WIDTH);
            r529_xn$setwidth$9Jrj(r4_WIDTH);
            r529_xn$assignunicode$7Hrq('5');
            r529_include(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r529_include(r529_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD));
            r529_include(r529_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r529_include(r529_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t172() {
            var r533_currentGlyph, r533_xn$setwidth$9Jrj, r533_xn$assignunicode$7Hrq, r533_xn$startfrom$1aao, r533_xn$lineto$5sIl, r533_xn$curveto$1aao, r533_xn$cubicto$1aao, r533_xn$putshapes$9Jrj, r533_xn$reverselast$3qIs, r533_include, r533_xn$createstroke$7Hrq, r533_xn$setanchor$9Jrj, r533_xn$dontexport$5sIl, r533_ymiddlea, _r533_t0, _r533_t1, _r533_t2, _r533_t3;
            _r533_t0 = this;
            r533_currentGlyph = _r533_t0;
            r533_xn$setwidth$9Jrj = _r533_t0['set-width']['bind'](_r533_t0);
            r533_xn$assignunicode$7Hrq = function _r533_t2(r534_code) {
                var r534_code, _r534_t0, _r534_t1;
                r533_currentGlyph['assign-unicode'](r534_code);
                return r4_unicodeGlyphs[r533_currentGlyph['unicode'][r533_currentGlyph['unicode']['length'] - 1]] = r533_currentGlyph;
            };
            r533_xn$startfrom$1aao = _r533_t0['start-from']['bind'](_r533_t0);
            r533_xn$lineto$5sIl = _r533_t0['line-to']['bind'](_r533_t0);
            r533_xn$curveto$1aao = _r533_t0['curve-to']['bind'](_r533_t0);
            r533_xn$cubicto$1aao = _r533_t0['cubic-to']['bind'](_r533_t0);
            r533_xn$putshapes$9Jrj = _r533_t0['put-shapes']['bind'](_r533_t0);
            r533_xn$reverselast$3qIs = _r533_t0['reverse-last']['bind'](_r533_t0);
            r533_include = _r533_t0['include']['bind'](_r533_t0);
            r533_xn$createstroke$7Hrq = _r533_t0['create-stroke']['bind'](_r533_t0);
            r533_xn$setanchor$9Jrj = _r533_t0['set-anchor']['bind'](_r533_t0);
            r533_xn$dontexport$5sIl = function _r533_t3() {
                var _r535_t0, _r535_t1;
                return r533_currentGlyph['dontExport'] = true;
            };
            _r533_t0['gizmo'] = r4_globalTransform;
            _r533_t0['set-width'](r4_WIDTH);
            r533_xn$setwidth$9Jrj(r4_WIDTH);
            r533_xn$assignunicode$7Hrq('6');
            r533_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r533_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r533_include(r533_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r533_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r533_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t173() {
            var r537_currentGlyph, r537_xn$setwidth$9Jrj, r537_xn$assignunicode$7Hrq, r537_xn$startfrom$1aao, r537_xn$lineto$5sIl, r537_xn$curveto$1aao, r537_xn$cubicto$1aao, r537_xn$putshapes$9Jrj, r537_xn$reverselast$3qIs, r537_include, r537_xn$createstroke$7Hrq, r537_xn$setanchor$9Jrj, r537_xn$dontexport$5sIl, r537_cor, r537_x, _r537_t0, _r537_t1, _r537_t2, _r537_t3;
            _r537_t0 = this;
            r537_currentGlyph = _r537_t0;
            r537_xn$setwidth$9Jrj = _r537_t0['set-width']['bind'](_r537_t0);
            r537_xn$assignunicode$7Hrq = function _r537_t2(r538_code) {
                var r538_code, _r538_t0, _r538_t1;
                r537_currentGlyph['assign-unicode'](r538_code);
                return r4_unicodeGlyphs[r537_currentGlyph['unicode'][r537_currentGlyph['unicode']['length'] - 1]] = r537_currentGlyph;
            };
            r537_xn$startfrom$1aao = _r537_t0['start-from']['bind'](_r537_t0);
            r537_xn$lineto$5sIl = _r537_t0['line-to']['bind'](_r537_t0);
            r537_xn$curveto$1aao = _r537_t0['curve-to']['bind'](_r537_t0);
            r537_xn$cubicto$1aao = _r537_t0['cubic-to']['bind'](_r537_t0);
            r537_xn$putshapes$9Jrj = _r537_t0['put-shapes']['bind'](_r537_t0);
            r537_xn$reverselast$3qIs = _r537_t0['reverse-last']['bind'](_r537_t0);
            r537_include = _r537_t0['include']['bind'](_r537_t0);
            r537_xn$createstroke$7Hrq = _r537_t0['create-stroke']['bind'](_r537_t0);
            r537_xn$setanchor$9Jrj = _r537_t0['set-anchor']['bind'](_r537_t0);
            r537_xn$dontexport$5sIl = function _r537_t3() {
                var _r539_t0, _r539_t1;
                return r537_currentGlyph['dontExport'] = true;
            };
            _r537_t0['gizmo'] = r4_globalTransform;
            _r537_t0['set-width'](r4_WIDTH);
            r537_xn$setwidth$9Jrj(r4_WIDTH);
            r537_xn$assignunicode$7Hrq('7');
            r537_include(r537_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r537_cor = 1.15;
            r537_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r537_xn$startfrom$1aao(r537_x, 0);
            r537_xn$lineto$5sIl(r537_x + r4_STROKE * r537_cor, 0);
            r537_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r537_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r537_cor, r4_CAP - r4_STROKE);
            r537_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t174() {
            var r541_currentGlyph, r541_xn$setwidth$9Jrj, r541_xn$assignunicode$7Hrq, r541_xn$startfrom$1aao, r541_xn$lineto$5sIl, r541_xn$curveto$1aao, r541_xn$cubicto$1aao, r541_xn$putshapes$9Jrj, r541_xn$reverselast$3qIs, r541_include, r541_xn$createstroke$7Hrq, r541_xn$setanchor$9Jrj, r541_xn$dontexport$5sIl, r541_sma, r541_smb, r541_p, _r541_t0, _r541_t1, _r541_t2, _r541_t3;
            _r541_t0 = this;
            r541_currentGlyph = _r541_t0;
            r541_xn$setwidth$9Jrj = _r541_t0['set-width']['bind'](_r541_t0);
            r541_xn$assignunicode$7Hrq = function _r541_t2(r542_code) {
                var r542_code, _r542_t0, _r542_t1;
                r541_currentGlyph['assign-unicode'](r542_code);
                return r4_unicodeGlyphs[r541_currentGlyph['unicode'][r541_currentGlyph['unicode']['length'] - 1]] = r541_currentGlyph;
            };
            r541_xn$startfrom$1aao = _r541_t0['start-from']['bind'](_r541_t0);
            r541_xn$lineto$5sIl = _r541_t0['line-to']['bind'](_r541_t0);
            r541_xn$curveto$1aao = _r541_t0['curve-to']['bind'](_r541_t0);
            r541_xn$cubicto$1aao = _r541_t0['cubic-to']['bind'](_r541_t0);
            r541_xn$putshapes$9Jrj = _r541_t0['put-shapes']['bind'](_r541_t0);
            r541_xn$reverselast$3qIs = _r541_t0['reverse-last']['bind'](_r541_t0);
            r541_include = _r541_t0['include']['bind'](_r541_t0);
            r541_xn$createstroke$7Hrq = _r541_t0['create-stroke']['bind'](_r541_t0);
            r541_xn$setanchor$9Jrj = _r541_t0['set-anchor']['bind'](_r541_t0);
            r541_xn$dontexport$5sIl = function _r541_t3() {
                var _r543_t0, _r543_t1;
                return r541_currentGlyph['dontExport'] = true;
            };
            _r541_t0['gizmo'] = r4_globalTransform;
            _r541_t0['set-width'](r4_WIDTH);
            r541_xn$setwidth$9Jrj(r4_WIDTH);
            r541_xn$assignunicode$7Hrq('8');
            r541_sma = r4_SMOOTHA * 0.975;
            r541_smb = r4_SMOOTHB * 0.975;
            r541_p = 0.96;
            r541_include(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r541_p), r4_CAP - r541_sma * r541_p, r4_RIGHTSB, r541_sma));
            r541_include(r4_xsStrand(r4_SB, r541_smb, r0_mix(r4_SB, r4_RIGHTSB, r541_p), r4_CAP - r541_smb * r541_p));
            r541_include(r541_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r541_p), r4_CAP - r541_smb * r541_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r541_p), r4_CAP - r541_sma * r541_p));
            r541_include(r541_xn$createstroke$7Hrq()['start-from'](r4_SB, r541_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r541_sma));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t175() {
            var r545_currentGlyph, r545_xn$setwidth$9Jrj, r545_xn$assignunicode$7Hrq, r545_xn$startfrom$1aao, r545_xn$lineto$5sIl, r545_xn$curveto$1aao, r545_xn$cubicto$1aao, r545_xn$putshapes$9Jrj, r545_xn$reverselast$3qIs, r545_include, r545_xn$createstroke$7Hrq, r545_xn$setanchor$9Jrj, r545_xn$dontexport$5sIl, r545_ymiddlea, _r545_t0, _r545_t1, _r545_t2, _r545_t3;
            _r545_t0 = this;
            r545_currentGlyph = _r545_t0;
            r545_xn$setwidth$9Jrj = _r545_t0['set-width']['bind'](_r545_t0);
            r545_xn$assignunicode$7Hrq = function _r545_t2(r546_code) {
                var r546_code, _r546_t0, _r546_t1;
                r545_currentGlyph['assign-unicode'](r546_code);
                return r4_unicodeGlyphs[r545_currentGlyph['unicode'][r545_currentGlyph['unicode']['length'] - 1]] = r545_currentGlyph;
            };
            r545_xn$startfrom$1aao = _r545_t0['start-from']['bind'](_r545_t0);
            r545_xn$lineto$5sIl = _r545_t0['line-to']['bind'](_r545_t0);
            r545_xn$curveto$1aao = _r545_t0['curve-to']['bind'](_r545_t0);
            r545_xn$cubicto$1aao = _r545_t0['cubic-to']['bind'](_r545_t0);
            r545_xn$putshapes$9Jrj = _r545_t0['put-shapes']['bind'](_r545_t0);
            r545_xn$reverselast$3qIs = _r545_t0['reverse-last']['bind'](_r545_t0);
            r545_include = _r545_t0['include']['bind'](_r545_t0);
            r545_xn$createstroke$7Hrq = _r545_t0['create-stroke']['bind'](_r545_t0);
            r545_xn$setanchor$9Jrj = _r545_t0['set-anchor']['bind'](_r545_t0);
            r545_xn$dontexport$5sIl = function _r545_t3() {
                var _r547_t0, _r547_t1;
                return r545_currentGlyph['dontExport'] = true;
            };
            _r545_t0['gizmo'] = r4_globalTransform;
            _r545_t0['set-width'](r4_WIDTH);
            r545_xn$setwidth$9Jrj(r4_WIDTH);
            r545_xn$assignunicode$7Hrq('9');
            r545_include(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r545_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r545_include(r545_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r545_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4));
            r545_include(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t176() {
            var r549_currentGlyph, r549_xn$setwidth$9Jrj, r549_xn$assignunicode$7Hrq, r549_xn$startfrom$1aao, r549_xn$lineto$5sIl, r549_xn$curveto$1aao, r549_xn$cubicto$1aao, r549_xn$putshapes$9Jrj, r549_xn$reverselast$3qIs, r549_include, r549_xn$createstroke$7Hrq, r549_xn$setanchor$9Jrj, r549_xn$dontexport$5sIl, _r549_t0, _r549_t1, _r549_t2, _r549_t3;
            _r549_t0 = this;
            r549_currentGlyph = _r549_t0;
            r549_xn$setwidth$9Jrj = _r549_t0['set-width']['bind'](_r549_t0);
            r549_xn$assignunicode$7Hrq = function _r549_t2(r550_code) {
                var r550_code, _r550_t0, _r550_t1;
                r549_currentGlyph['assign-unicode'](r550_code);
                return r4_unicodeGlyphs[r549_currentGlyph['unicode'][r549_currentGlyph['unicode']['length'] - 1]] = r549_currentGlyph;
            };
            r549_xn$startfrom$1aao = _r549_t0['start-from']['bind'](_r549_t0);
            r549_xn$lineto$5sIl = _r549_t0['line-to']['bind'](_r549_t0);
            r549_xn$curveto$1aao = _r549_t0['curve-to']['bind'](_r549_t0);
            r549_xn$cubicto$1aao = _r549_t0['cubic-to']['bind'](_r549_t0);
            r549_xn$putshapes$9Jrj = _r549_t0['put-shapes']['bind'](_r549_t0);
            r549_xn$reverselast$3qIs = _r549_t0['reverse-last']['bind'](_r549_t0);
            r549_include = _r549_t0['include']['bind'](_r549_t0);
            r549_xn$createstroke$7Hrq = _r549_t0['create-stroke']['bind'](_r549_t0);
            r549_xn$setanchor$9Jrj = _r549_t0['set-anchor']['bind'](_r549_t0);
            r549_xn$dontexport$5sIl = function _r549_t3() {
                var _r551_t0, _r551_t1;
                return r549_currentGlyph['dontExport'] = true;
            };
            _r549_t0['gizmo'] = r4_globalTransform;
            _r549_t0['set-width'](r4_WIDTH);
            r549_xn$setwidth$9Jrj(r4_WIDTH);
            r549_xn$assignunicode$7Hrq('$');
            r549_include(r4_glyphs['S']);
            r549_include(r549_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r549_include(r549_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t177() {
            var r553_currentGlyph, r553_xn$setwidth$9Jrj, r553_xn$assignunicode$7Hrq, r553_xn$startfrom$1aao, r553_xn$lineto$5sIl, r553_xn$curveto$1aao, r553_xn$cubicto$1aao, r553_xn$putshapes$9Jrj, r553_xn$reverselast$3qIs, r553_include, r553_xn$createstroke$7Hrq, r553_xn$setanchor$9Jrj, r553_xn$dontexport$5sIl, r553_fine, r553_p, r553_l, r553_pr, r553_q, r553_r, r553_s, _r553_t0, _r553_t1, _r553_t2, _r553_t3;
            _r553_t0 = this;
            r553_currentGlyph = _r553_t0;
            r553_xn$setwidth$9Jrj = _r553_t0['set-width']['bind'](_r553_t0);
            r553_xn$assignunicode$7Hrq = function _r553_t2(r554_code) {
                var r554_code, _r554_t0, _r554_t1;
                r553_currentGlyph['assign-unicode'](r554_code);
                return r4_unicodeGlyphs[r553_currentGlyph['unicode'][r553_currentGlyph['unicode']['length'] - 1]] = r553_currentGlyph;
            };
            r553_xn$startfrom$1aao = _r553_t0['start-from']['bind'](_r553_t0);
            r553_xn$lineto$5sIl = _r553_t0['line-to']['bind'](_r553_t0);
            r553_xn$curveto$1aao = _r553_t0['curve-to']['bind'](_r553_t0);
            r553_xn$cubicto$1aao = _r553_t0['cubic-to']['bind'](_r553_t0);
            r553_xn$putshapes$9Jrj = _r553_t0['put-shapes']['bind'](_r553_t0);
            r553_xn$reverselast$3qIs = _r553_t0['reverse-last']['bind'](_r553_t0);
            r553_include = _r553_t0['include']['bind'](_r553_t0);
            r553_xn$createstroke$7Hrq = _r553_t0['create-stroke']['bind'](_r553_t0);
            r553_xn$setanchor$9Jrj = _r553_t0['set-anchor']['bind'](_r553_t0);
            r553_xn$dontexport$5sIl = function _r553_t3() {
                var _r555_t0, _r555_t1;
                return r553_currentGlyph['dontExport'] = true;
            };
            _r553_t0['gizmo'] = r4_globalTransform;
            _r553_t0['set-width'](r4_WIDTH);
            r553_xn$setwidth$9Jrj(r4_WIDTH);
            r553_xn$assignunicode$7Hrq('&');
            r553_fine = r4_adviceBlackness(3.5);
            r553_p = 0.85;
            r553_l = 0.05;
            r553_pr = 0.9;
            r553_q = 0.45;
            r553_r = 1.1;
            r553_s = 0;
            r553_include(r553_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r553_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r553_p), r4_CAP - r4_SMOOTHB * r553_pr, r4_HALFSTROKE, r553_fine / 2));
            r553_include(r553_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r553_p), r4_CAP - r4_SMOOTHB * r553_pr)['set-width'](r553_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r553_p, r553_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r553_l), r4_CAP - r4_SMOOTHA * r553_pr));
            r553_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r553_l), r4_CAP - r4_SMOOTHA * r553_pr, r0_mix(r4_SB, r4_RIGHTSB, r553_r), r4_SMOOTHA * r553_s, r553_fine / 2, r553_fine / 2, null, null, r4_SMOOTHA * r553_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t178() {
            var r557_currentGlyph, r557_xn$setwidth$9Jrj, r557_xn$assignunicode$7Hrq, r557_xn$startfrom$1aao, r557_xn$lineto$5sIl, r557_xn$curveto$1aao, r557_xn$cubicto$1aao, r557_xn$putshapes$9Jrj, r557_xn$reverselast$3qIs, r557_include, r557_xn$createstroke$7Hrq, r557_xn$setanchor$9Jrj, r557_xn$dontexport$5sIl, r557_top, r557_bot, r557_otop, r557_obot, r557_sw, r557_m1, r557_m2, r557_sma, r557_smb, _r557_t0, _r557_t1, _r557_t2, _r557_t3;
            _r557_t0 = this;
            r557_currentGlyph = _r557_t0;
            r557_xn$setwidth$9Jrj = _r557_t0['set-width']['bind'](_r557_t0);
            r557_xn$assignunicode$7Hrq = function _r557_t2(r558_code) {
                var r558_code, _r558_t0, _r558_t1;
                r557_currentGlyph['assign-unicode'](r558_code);
                return r4_unicodeGlyphs[r557_currentGlyph['unicode'][r557_currentGlyph['unicode']['length'] - 1]] = r557_currentGlyph;
            };
            r557_xn$startfrom$1aao = _r557_t0['start-from']['bind'](_r557_t0);
            r557_xn$lineto$5sIl = _r557_t0['line-to']['bind'](_r557_t0);
            r557_xn$curveto$1aao = _r557_t0['curve-to']['bind'](_r557_t0);
            r557_xn$cubicto$1aao = _r557_t0['cubic-to']['bind'](_r557_t0);
            r557_xn$putshapes$9Jrj = _r557_t0['put-shapes']['bind'](_r557_t0);
            r557_xn$reverselast$3qIs = _r557_t0['reverse-last']['bind'](_r557_t0);
            r557_include = _r557_t0['include']['bind'](_r557_t0);
            r557_xn$createstroke$7Hrq = _r557_t0['create-stroke']['bind'](_r557_t0);
            r557_xn$setanchor$9Jrj = _r557_t0['set-anchor']['bind'](_r557_t0);
            r557_xn$dontexport$5sIl = function _r557_t3() {
                var _r559_t0, _r559_t1;
                return r557_currentGlyph['dontExport'] = true;
            };
            _r557_t0['gizmo'] = r4_globalTransform;
            _r557_t0['set-width'](r4_WIDTH);
            r557_xn$setwidth$9Jrj(r4_WIDTH);
            r557_xn$assignunicode$7Hrq('@');
            r557_top = r4_CAP + r4_HALFSTROKE;
            r557_bot = r4_DESCENDER + r4_HALFSTROKE;
            r557_otop = r0_mix(r557_bot, r557_top, 0.75);
            r557_obot = r0_mix(r557_top, r557_bot, 0.8);
            r557_sw = r4_adviceBlackness(3.5);
            r557_m1 = r0_mix(r4_SB + r557_sw, r4_RIGHTSB - r557_sw, 0.47) - r557_sw / 2;
            r557_m2 = r0_mix(r557_m1, r4_RIGHTSB, 0.5);
            r557_sma = r4_SMOOTHA * ((r4_RIGHTSB - r557_m1) / (r4_RIGHTSB - r4_SB));
            r557_smb = r4_SMOOTHB * ((r4_RIGHTSB - r557_m1) / (r4_RIGHTSB - r4_SB));
            r557_include(r557_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r557_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r557_sw, 0)['line-to'](r557_m2, r557_otop - r4_O)['arc-hv-to'](r557_m1, r557_otop - r557_sma)['line-to'](r557_m1, r557_obot + r557_smb)['arc-vh-to'](r557_m2 + r4_STROKE * r4_globalTransform['yx'], r557_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r557_obot + r557_sma)['line-to'](r4_RIGHTSB, r557_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r557_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r557_top - r4_SMOOTHA)['set-width'](r557_sw, 0)['line-to'](r4_SB, r557_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r557_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r557_bot + r4_O)['heads-to'](r4_RIGHTWARD)['set-samples'](4));
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
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t179() {
            var r561_currentGlyph, r561_xn$setwidth$9Jrj, r561_xn$assignunicode$7Hrq, r561_xn$startfrom$1aao, r561_xn$lineto$5sIl, r561_xn$curveto$1aao, r561_xn$cubicto$1aao, r561_xn$putshapes$9Jrj, r561_xn$reverselast$3qIs, r561_include, r561_xn$createstroke$7Hrq, r561_xn$setanchor$9Jrj, r561_xn$dontexport$5sIl, r561_p, _r561_t0, _r561_t1, _r561_t2, _r561_t3;
            _r561_t0 = this;
            r561_currentGlyph = _r561_t0;
            r561_xn$setwidth$9Jrj = _r561_t0['set-width']['bind'](_r561_t0);
            r561_xn$assignunicode$7Hrq = function _r561_t2(r562_code) {
                var r562_code, _r562_t0, _r562_t1;
                r561_currentGlyph['assign-unicode'](r562_code);
                return r4_unicodeGlyphs[r561_currentGlyph['unicode'][r561_currentGlyph['unicode']['length'] - 1]] = r561_currentGlyph;
            };
            r561_xn$startfrom$1aao = _r561_t0['start-from']['bind'](_r561_t0);
            r561_xn$lineto$5sIl = _r561_t0['line-to']['bind'](_r561_t0);
            r561_xn$curveto$1aao = _r561_t0['curve-to']['bind'](_r561_t0);
            r561_xn$cubicto$1aao = _r561_t0['cubic-to']['bind'](_r561_t0);
            r561_xn$putshapes$9Jrj = _r561_t0['put-shapes']['bind'](_r561_t0);
            r561_xn$reverselast$3qIs = _r561_t0['reverse-last']['bind'](_r561_t0);
            r561_include = _r561_t0['include']['bind'](_r561_t0);
            r561_xn$createstroke$7Hrq = _r561_t0['create-stroke']['bind'](_r561_t0);
            r561_xn$setanchor$9Jrj = _r561_t0['set-anchor']['bind'](_r561_t0);
            r561_xn$dontexport$5sIl = function _r561_t3() {
                var _r563_t0, _r563_t1;
                return r561_currentGlyph['dontExport'] = true;
            };
            _r561_t0['gizmo'] = r4_globalTransform;
            _r561_t0['set-width'](r4_WIDTH);
            r561_xn$setwidth$9Jrj(r4_WIDTH);
            r561_xn$assignunicode$7Hrq('(');
            r561_p = 0.6;
            r561_include(r561_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r561_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r561_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t180() {
            var r565_currentGlyph, r565_xn$setwidth$9Jrj, r565_xn$assignunicode$7Hrq, r565_xn$startfrom$1aao, r565_xn$lineto$5sIl, r565_xn$curveto$1aao, r565_xn$cubicto$1aao, r565_xn$putshapes$9Jrj, r565_xn$reverselast$3qIs, r565_include, r565_xn$createstroke$7Hrq, r565_xn$setanchor$9Jrj, r565_xn$dontexport$5sIl, r565_p, _r565_t0, _r565_t1, _r565_t2, _r565_t3;
            _r565_t0 = this;
            r565_currentGlyph = _r565_t0;
            r565_xn$setwidth$9Jrj = _r565_t0['set-width']['bind'](_r565_t0);
            r565_xn$assignunicode$7Hrq = function _r565_t2(r566_code) {
                var r566_code, _r566_t0, _r566_t1;
                r565_currentGlyph['assign-unicode'](r566_code);
                return r4_unicodeGlyphs[r565_currentGlyph['unicode'][r565_currentGlyph['unicode']['length'] - 1]] = r565_currentGlyph;
            };
            r565_xn$startfrom$1aao = _r565_t0['start-from']['bind'](_r565_t0);
            r565_xn$lineto$5sIl = _r565_t0['line-to']['bind'](_r565_t0);
            r565_xn$curveto$1aao = _r565_t0['curve-to']['bind'](_r565_t0);
            r565_xn$cubicto$1aao = _r565_t0['cubic-to']['bind'](_r565_t0);
            r565_xn$putshapes$9Jrj = _r565_t0['put-shapes']['bind'](_r565_t0);
            r565_xn$reverselast$3qIs = _r565_t0['reverse-last']['bind'](_r565_t0);
            r565_include = _r565_t0['include']['bind'](_r565_t0);
            r565_xn$createstroke$7Hrq = _r565_t0['create-stroke']['bind'](_r565_t0);
            r565_xn$setanchor$9Jrj = _r565_t0['set-anchor']['bind'](_r565_t0);
            r565_xn$dontexport$5sIl = function _r565_t3() {
                var _r567_t0, _r567_t1;
                return r565_currentGlyph['dontExport'] = true;
            };
            _r565_t0['gizmo'] = r4_globalTransform;
            _r565_t0['set-width'](r4_WIDTH);
            r565_xn$setwidth$9Jrj(r4_WIDTH);
            r565_xn$assignunicode$7Hrq(')');
            r565_p = 0.6;
            r565_include(r565_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r565_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r565_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t181() {
            var r569_currentGlyph, r569_xn$setwidth$9Jrj, r569_xn$assignunicode$7Hrq, r569_xn$startfrom$1aao, r569_xn$lineto$5sIl, r569_xn$curveto$1aao, r569_xn$cubicto$1aao, r569_xn$putshapes$9Jrj, r569_xn$reverselast$3qIs, r569_include, r569_xn$createstroke$7Hrq, r569_xn$setanchor$9Jrj, r569_xn$dontexport$5sIl, _r569_t0, _r569_t1, _r569_t2, _r569_t3;
            _r569_t0 = this;
            r569_currentGlyph = _r569_t0;
            r569_xn$setwidth$9Jrj = _r569_t0['set-width']['bind'](_r569_t0);
            r569_xn$assignunicode$7Hrq = function _r569_t2(r570_code) {
                var r570_code, _r570_t0, _r570_t1;
                r569_currentGlyph['assign-unicode'](r570_code);
                return r4_unicodeGlyphs[r569_currentGlyph['unicode'][r569_currentGlyph['unicode']['length'] - 1]] = r569_currentGlyph;
            };
            r569_xn$startfrom$1aao = _r569_t0['start-from']['bind'](_r569_t0);
            r569_xn$lineto$5sIl = _r569_t0['line-to']['bind'](_r569_t0);
            r569_xn$curveto$1aao = _r569_t0['curve-to']['bind'](_r569_t0);
            r569_xn$cubicto$1aao = _r569_t0['cubic-to']['bind'](_r569_t0);
            r569_xn$putshapes$9Jrj = _r569_t0['put-shapes']['bind'](_r569_t0);
            r569_xn$reverselast$3qIs = _r569_t0['reverse-last']['bind'](_r569_t0);
            r569_include = _r569_t0['include']['bind'](_r569_t0);
            r569_xn$createstroke$7Hrq = _r569_t0['create-stroke']['bind'](_r569_t0);
            r569_xn$setanchor$9Jrj = _r569_t0['set-anchor']['bind'](_r569_t0);
            r569_xn$dontexport$5sIl = function _r569_t3() {
                var _r571_t0, _r571_t1;
                return r569_currentGlyph['dontExport'] = true;
            };
            _r569_t0['gizmo'] = r4_globalTransform;
            _r569_t0['set-width'](r4_WIDTH);
            r569_xn$setwidth$9Jrj(r4_WIDTH);
            r569_xn$assignunicode$7Hrq('[');
            r569_include(r569_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r569_include(r569_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r569_include(r569_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t182() {
            var r573_currentGlyph, r573_xn$setwidth$9Jrj, r573_xn$assignunicode$7Hrq, r573_xn$startfrom$1aao, r573_xn$lineto$5sIl, r573_xn$curveto$1aao, r573_xn$cubicto$1aao, r573_xn$putshapes$9Jrj, r573_xn$reverselast$3qIs, r573_include, r573_xn$createstroke$7Hrq, r573_xn$setanchor$9Jrj, r573_xn$dontexport$5sIl, _r573_t0, _r573_t1, _r573_t2, _r573_t3;
            _r573_t0 = this;
            r573_currentGlyph = _r573_t0;
            r573_xn$setwidth$9Jrj = _r573_t0['set-width']['bind'](_r573_t0);
            r573_xn$assignunicode$7Hrq = function _r573_t2(r574_code) {
                var r574_code, _r574_t0, _r574_t1;
                r573_currentGlyph['assign-unicode'](r574_code);
                return r4_unicodeGlyphs[r573_currentGlyph['unicode'][r573_currentGlyph['unicode']['length'] - 1]] = r573_currentGlyph;
            };
            r573_xn$startfrom$1aao = _r573_t0['start-from']['bind'](_r573_t0);
            r573_xn$lineto$5sIl = _r573_t0['line-to']['bind'](_r573_t0);
            r573_xn$curveto$1aao = _r573_t0['curve-to']['bind'](_r573_t0);
            r573_xn$cubicto$1aao = _r573_t0['cubic-to']['bind'](_r573_t0);
            r573_xn$putshapes$9Jrj = _r573_t0['put-shapes']['bind'](_r573_t0);
            r573_xn$reverselast$3qIs = _r573_t0['reverse-last']['bind'](_r573_t0);
            r573_include = _r573_t0['include']['bind'](_r573_t0);
            r573_xn$createstroke$7Hrq = _r573_t0['create-stroke']['bind'](_r573_t0);
            r573_xn$setanchor$9Jrj = _r573_t0['set-anchor']['bind'](_r573_t0);
            r573_xn$dontexport$5sIl = function _r573_t3() {
                var _r575_t0, _r575_t1;
                return r573_currentGlyph['dontExport'] = true;
            };
            _r573_t0['gizmo'] = r4_globalTransform;
            _r573_t0['set-width'](r4_WIDTH);
            r573_xn$setwidth$9Jrj(r4_WIDTH);
            r573_xn$assignunicode$7Hrq(']');
            r573_include(r573_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r573_include(r573_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r573_include(r573_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t183() {
            var r577_currentGlyph, r577_xn$setwidth$9Jrj, r577_xn$assignunicode$7Hrq, r577_xn$startfrom$1aao, r577_xn$lineto$5sIl, r577_xn$curveto$1aao, r577_xn$cubicto$1aao, r577_xn$putshapes$9Jrj, r577_xn$reverselast$3qIs, r577_include, r577_xn$createstroke$7Hrq, r577_xn$setanchor$9Jrj, r577_xn$dontexport$5sIl, r577_parenCenter, r577_radius, _r577_t0, _r577_t1, _r577_t2, _r577_t3;
            _r577_t0 = this;
            r577_currentGlyph = _r577_t0;
            r577_xn$setwidth$9Jrj = _r577_t0['set-width']['bind'](_r577_t0);
            r577_xn$assignunicode$7Hrq = function _r577_t2(r578_code) {
                var r578_code, _r578_t0, _r578_t1;
                r577_currentGlyph['assign-unicode'](r578_code);
                return r4_unicodeGlyphs[r577_currentGlyph['unicode'][r577_currentGlyph['unicode']['length'] - 1]] = r577_currentGlyph;
            };
            r577_xn$startfrom$1aao = _r577_t0['start-from']['bind'](_r577_t0);
            r577_xn$lineto$5sIl = _r577_t0['line-to']['bind'](_r577_t0);
            r577_xn$curveto$1aao = _r577_t0['curve-to']['bind'](_r577_t0);
            r577_xn$cubicto$1aao = _r577_t0['cubic-to']['bind'](_r577_t0);
            r577_xn$putshapes$9Jrj = _r577_t0['put-shapes']['bind'](_r577_t0);
            r577_xn$reverselast$3qIs = _r577_t0['reverse-last']['bind'](_r577_t0);
            r577_include = _r577_t0['include']['bind'](_r577_t0);
            r577_xn$createstroke$7Hrq = _r577_t0['create-stroke']['bind'](_r577_t0);
            r577_xn$setanchor$9Jrj = _r577_t0['set-anchor']['bind'](_r577_t0);
            r577_xn$dontexport$5sIl = function _r577_t3() {
                var _r579_t0, _r579_t1;
                return r577_currentGlyph['dontExport'] = true;
            };
            _r577_t0['gizmo'] = r4_globalTransform;
            _r577_t0['set-width'](r4_WIDTH);
            r577_xn$setwidth$9Jrj(r4_WIDTH);
            r577_xn$assignunicode$7Hrq('{');
            r577_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r577_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r577_parenCenter;
            r577_include(r577_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r577_parenCenter, r4_parenTop - r577_radius)['line-to'](r577_parenCenter, r4_parenMid + r577_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r577_include(r577_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r577_parenCenter, r4_parenBot + r577_radius)['line-to'](r577_parenCenter, r4_parenMid - r577_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t184() {
            var r581_currentGlyph, r581_xn$setwidth$9Jrj, r581_xn$assignunicode$7Hrq, r581_xn$startfrom$1aao, r581_xn$lineto$5sIl, r581_xn$curveto$1aao, r581_xn$cubicto$1aao, r581_xn$putshapes$9Jrj, r581_xn$reverselast$3qIs, r581_include, r581_xn$createstroke$7Hrq, r581_xn$setanchor$9Jrj, r581_xn$dontexport$5sIl, r581_parenCenter, r581_radius, _r581_t0, _r581_t1, _r581_t2, _r581_t3;
            _r581_t0 = this;
            r581_currentGlyph = _r581_t0;
            r581_xn$setwidth$9Jrj = _r581_t0['set-width']['bind'](_r581_t0);
            r581_xn$assignunicode$7Hrq = function _r581_t2(r582_code) {
                var r582_code, _r582_t0, _r582_t1;
                r581_currentGlyph['assign-unicode'](r582_code);
                return r4_unicodeGlyphs[r581_currentGlyph['unicode'][r581_currentGlyph['unicode']['length'] - 1]] = r581_currentGlyph;
            };
            r581_xn$startfrom$1aao = _r581_t0['start-from']['bind'](_r581_t0);
            r581_xn$lineto$5sIl = _r581_t0['line-to']['bind'](_r581_t0);
            r581_xn$curveto$1aao = _r581_t0['curve-to']['bind'](_r581_t0);
            r581_xn$cubicto$1aao = _r581_t0['cubic-to']['bind'](_r581_t0);
            r581_xn$putshapes$9Jrj = _r581_t0['put-shapes']['bind'](_r581_t0);
            r581_xn$reverselast$3qIs = _r581_t0['reverse-last']['bind'](_r581_t0);
            r581_include = _r581_t0['include']['bind'](_r581_t0);
            r581_xn$createstroke$7Hrq = _r581_t0['create-stroke']['bind'](_r581_t0);
            r581_xn$setanchor$9Jrj = _r581_t0['set-anchor']['bind'](_r581_t0);
            r581_xn$dontexport$5sIl = function _r581_t3() {
                var _r583_t0, _r583_t1;
                return r581_currentGlyph['dontExport'] = true;
            };
            _r581_t0['gizmo'] = r4_globalTransform;
            _r581_t0['set-width'](r4_WIDTH);
            r581_xn$setwidth$9Jrj(r4_WIDTH);
            r581_xn$assignunicode$7Hrq('}');
            r581_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r581_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r581_parenCenter;
            r581_include(r581_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r581_parenCenter, r4_parenTop - r581_radius)['line-to'](r581_parenCenter, r4_parenMid + r581_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r581_include(r581_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r581_parenCenter, r4_parenBot + r581_radius)['line-to'](r581_parenCenter, r4_parenMid - r581_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t185() {
            var r585_currentGlyph, r585_xn$setwidth$9Jrj, r585_xn$assignunicode$7Hrq, r585_xn$startfrom$1aao, r585_xn$lineto$5sIl, r585_xn$curveto$1aao, r585_xn$cubicto$1aao, r585_xn$putshapes$9Jrj, r585_xn$reverselast$3qIs, r585_include, r585_xn$createstroke$7Hrq, r585_xn$setanchor$9Jrj, r585_xn$dontexport$5sIl, _r585_t0, _r585_t1, _r585_t2, _r585_t3;
            _r585_t0 = this;
            r585_currentGlyph = _r585_t0;
            r585_xn$setwidth$9Jrj = _r585_t0['set-width']['bind'](_r585_t0);
            r585_xn$assignunicode$7Hrq = function _r585_t2(r586_code) {
                var r586_code, _r586_t0, _r586_t1;
                r585_currentGlyph['assign-unicode'](r586_code);
                return r4_unicodeGlyphs[r585_currentGlyph['unicode'][r585_currentGlyph['unicode']['length'] - 1]] = r585_currentGlyph;
            };
            r585_xn$startfrom$1aao = _r585_t0['start-from']['bind'](_r585_t0);
            r585_xn$lineto$5sIl = _r585_t0['line-to']['bind'](_r585_t0);
            r585_xn$curveto$1aao = _r585_t0['curve-to']['bind'](_r585_t0);
            r585_xn$cubicto$1aao = _r585_t0['cubic-to']['bind'](_r585_t0);
            r585_xn$putshapes$9Jrj = _r585_t0['put-shapes']['bind'](_r585_t0);
            r585_xn$reverselast$3qIs = _r585_t0['reverse-last']['bind'](_r585_t0);
            r585_include = _r585_t0['include']['bind'](_r585_t0);
            r585_xn$createstroke$7Hrq = _r585_t0['create-stroke']['bind'](_r585_t0);
            r585_xn$setanchor$9Jrj = _r585_t0['set-anchor']['bind'](_r585_t0);
            r585_xn$dontexport$5sIl = function _r585_t3() {
                var _r587_t0, _r587_t1;
                return r585_currentGlyph['dontExport'] = true;
            };
            _r585_t0['gizmo'] = r4_globalTransform;
            _r585_t0['set-width'](r4_WIDTH);
            r585_xn$setwidth$9Jrj(r4_WIDTH);
            r585_xn$assignunicode$7Hrq('.');
            r585_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t186() {
            var r589_currentGlyph, r589_xn$setwidth$9Jrj, r589_xn$assignunicode$7Hrq, r589_xn$startfrom$1aao, r589_xn$lineto$5sIl, r589_xn$curveto$1aao, r589_xn$cubicto$1aao, r589_xn$putshapes$9Jrj, r589_xn$reverselast$3qIs, r589_include, r589_xn$createstroke$7Hrq, r589_xn$setanchor$9Jrj, r589_xn$dontexport$5sIl, _r589_t0, _r589_t1, _r589_t2, _r589_t3;
            _r589_t0 = this;
            r589_currentGlyph = _r589_t0;
            r589_xn$setwidth$9Jrj = _r589_t0['set-width']['bind'](_r589_t0);
            r589_xn$assignunicode$7Hrq = function _r589_t2(r590_code) {
                var r590_code, _r590_t0, _r590_t1;
                r589_currentGlyph['assign-unicode'](r590_code);
                return r4_unicodeGlyphs[r589_currentGlyph['unicode'][r589_currentGlyph['unicode']['length'] - 1]] = r589_currentGlyph;
            };
            r589_xn$startfrom$1aao = _r589_t0['start-from']['bind'](_r589_t0);
            r589_xn$lineto$5sIl = _r589_t0['line-to']['bind'](_r589_t0);
            r589_xn$curveto$1aao = _r589_t0['curve-to']['bind'](_r589_t0);
            r589_xn$cubicto$1aao = _r589_t0['cubic-to']['bind'](_r589_t0);
            r589_xn$putshapes$9Jrj = _r589_t0['put-shapes']['bind'](_r589_t0);
            r589_xn$reverselast$3qIs = _r589_t0['reverse-last']['bind'](_r589_t0);
            r589_include = _r589_t0['include']['bind'](_r589_t0);
            r589_xn$createstroke$7Hrq = _r589_t0['create-stroke']['bind'](_r589_t0);
            r589_xn$setanchor$9Jrj = _r589_t0['set-anchor']['bind'](_r589_t0);
            r589_xn$dontexport$5sIl = function _r589_t3() {
                var _r591_t0, _r591_t1;
                return r589_currentGlyph['dontExport'] = true;
            };
            _r589_t0['gizmo'] = r4_globalTransform;
            _r589_t0['set-width'](r4_WIDTH);
            r589_xn$setwidth$9Jrj(r4_WIDTH);
            r589_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t187() {
            var r593_currentGlyph, r593_xn$setwidth$9Jrj, r593_xn$assignunicode$7Hrq, r593_xn$startfrom$1aao, r593_xn$lineto$5sIl, r593_xn$curveto$1aao, r593_xn$cubicto$1aao, r593_xn$putshapes$9Jrj, r593_xn$reverselast$3qIs, r593_include, r593_xn$createstroke$7Hrq, r593_xn$setanchor$9Jrj, r593_xn$dontexport$5sIl, r593_sw, _r593_t0, _r593_t1, _r593_t2, _r593_t3;
            _r593_t0 = this;
            r593_currentGlyph = _r593_t0;
            r593_xn$setwidth$9Jrj = _r593_t0['set-width']['bind'](_r593_t0);
            r593_xn$assignunicode$7Hrq = function _r593_t2(r594_code) {
                var r594_code, _r594_t0, _r594_t1;
                r593_currentGlyph['assign-unicode'](r594_code);
                return r4_unicodeGlyphs[r593_currentGlyph['unicode'][r593_currentGlyph['unicode']['length'] - 1]] = r593_currentGlyph;
            };
            r593_xn$startfrom$1aao = _r593_t0['start-from']['bind'](_r593_t0);
            r593_xn$lineto$5sIl = _r593_t0['line-to']['bind'](_r593_t0);
            r593_xn$curveto$1aao = _r593_t0['curve-to']['bind'](_r593_t0);
            r593_xn$cubicto$1aao = _r593_t0['cubic-to']['bind'](_r593_t0);
            r593_xn$putshapes$9Jrj = _r593_t0['put-shapes']['bind'](_r593_t0);
            r593_xn$reverselast$3qIs = _r593_t0['reverse-last']['bind'](_r593_t0);
            r593_include = _r593_t0['include']['bind'](_r593_t0);
            r593_xn$createstroke$7Hrq = _r593_t0['create-stroke']['bind'](_r593_t0);
            r593_xn$setanchor$9Jrj = _r593_t0['set-anchor']['bind'](_r593_t0);
            r593_xn$dontexport$5sIl = function _r593_t3() {
                var _r595_t0, _r595_t1;
                return r593_currentGlyph['dontExport'] = true;
            };
            _r593_t0['gizmo'] = r4_globalTransform;
            _r593_t0['set-width'](r4_WIDTH);
            r593_xn$setwidth$9Jrj(r4_WIDTH);
            r593_xn$assignunicode$7Hrq(',');
            r593_include(r4_glyphs['period']);
            r593_sw = r4_PERIODSIZE * 0.5;
            r593_include(r593_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r593_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t188() {
            var r597_currentGlyph, r597_xn$setwidth$9Jrj, r597_xn$assignunicode$7Hrq, r597_xn$startfrom$1aao, r597_xn$lineto$5sIl, r597_xn$curveto$1aao, r597_xn$cubicto$1aao, r597_xn$putshapes$9Jrj, r597_xn$reverselast$3qIs, r597_include, r597_xn$createstroke$7Hrq, r597_xn$setanchor$9Jrj, r597_xn$dontexport$5sIl, _r597_t0, _r597_t1, _r597_t2, _r597_t3;
            _r597_t0 = this;
            r597_currentGlyph = _r597_t0;
            r597_xn$setwidth$9Jrj = _r597_t0['set-width']['bind'](_r597_t0);
            r597_xn$assignunicode$7Hrq = function _r597_t2(r598_code) {
                var r598_code, _r598_t0, _r598_t1;
                r597_currentGlyph['assign-unicode'](r598_code);
                return r4_unicodeGlyphs[r597_currentGlyph['unicode'][r597_currentGlyph['unicode']['length'] - 1]] = r597_currentGlyph;
            };
            r597_xn$startfrom$1aao = _r597_t0['start-from']['bind'](_r597_t0);
            r597_xn$lineto$5sIl = _r597_t0['line-to']['bind'](_r597_t0);
            r597_xn$curveto$1aao = _r597_t0['curve-to']['bind'](_r597_t0);
            r597_xn$cubicto$1aao = _r597_t0['cubic-to']['bind'](_r597_t0);
            r597_xn$putshapes$9Jrj = _r597_t0['put-shapes']['bind'](_r597_t0);
            r597_xn$reverselast$3qIs = _r597_t0['reverse-last']['bind'](_r597_t0);
            r597_include = _r597_t0['include']['bind'](_r597_t0);
            r597_xn$createstroke$7Hrq = _r597_t0['create-stroke']['bind'](_r597_t0);
            r597_xn$setanchor$9Jrj = _r597_t0['set-anchor']['bind'](_r597_t0);
            r597_xn$dontexport$5sIl = function _r597_t3() {
                var _r599_t0, _r599_t1;
                return r597_currentGlyph['dontExport'] = true;
            };
            _r597_t0['gizmo'] = r4_globalTransform;
            _r597_t0['set-width'](r4_WIDTH);
            r597_xn$setwidth$9Jrj(r4_WIDTH);
            r597_xn$assignunicode$7Hrq(':');
            r597_include(r4_glyphs['period']);
            r597_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t189() {
            var r601_currentGlyph, r601_xn$setwidth$9Jrj, r601_xn$assignunicode$7Hrq, r601_xn$startfrom$1aao, r601_xn$lineto$5sIl, r601_xn$curveto$1aao, r601_xn$cubicto$1aao, r601_xn$putshapes$9Jrj, r601_xn$reverselast$3qIs, r601_include, r601_xn$createstroke$7Hrq, r601_xn$setanchor$9Jrj, r601_xn$dontexport$5sIl, _r601_t0, _r601_t1, _r601_t2, _r601_t3;
            _r601_t0 = this;
            r601_currentGlyph = _r601_t0;
            r601_xn$setwidth$9Jrj = _r601_t0['set-width']['bind'](_r601_t0);
            r601_xn$assignunicode$7Hrq = function _r601_t2(r602_code) {
                var r602_code, _r602_t0, _r602_t1;
                r601_currentGlyph['assign-unicode'](r602_code);
                return r4_unicodeGlyphs[r601_currentGlyph['unicode'][r601_currentGlyph['unicode']['length'] - 1]] = r601_currentGlyph;
            };
            r601_xn$startfrom$1aao = _r601_t0['start-from']['bind'](_r601_t0);
            r601_xn$lineto$5sIl = _r601_t0['line-to']['bind'](_r601_t0);
            r601_xn$curveto$1aao = _r601_t0['curve-to']['bind'](_r601_t0);
            r601_xn$cubicto$1aao = _r601_t0['cubic-to']['bind'](_r601_t0);
            r601_xn$putshapes$9Jrj = _r601_t0['put-shapes']['bind'](_r601_t0);
            r601_xn$reverselast$3qIs = _r601_t0['reverse-last']['bind'](_r601_t0);
            r601_include = _r601_t0['include']['bind'](_r601_t0);
            r601_xn$createstroke$7Hrq = _r601_t0['create-stroke']['bind'](_r601_t0);
            r601_xn$setanchor$9Jrj = _r601_t0['set-anchor']['bind'](_r601_t0);
            r601_xn$dontexport$5sIl = function _r601_t3() {
                var _r603_t0, _r603_t1;
                return r601_currentGlyph['dontExport'] = true;
            };
            _r601_t0['gizmo'] = r4_globalTransform;
            _r601_t0['set-width'](r4_WIDTH);
            r601_xn$setwidth$9Jrj(r4_WIDTH);
            r601_xn$assignunicode$7Hrq(';');
            r601_include(r4_glyphs['comma']);
            r601_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t190() {
            var r605_currentGlyph, r605_xn$setwidth$9Jrj, r605_xn$assignunicode$7Hrq, r605_xn$startfrom$1aao, r605_xn$lineto$5sIl, r605_xn$curveto$1aao, r605_xn$cubicto$1aao, r605_xn$putshapes$9Jrj, r605_xn$reverselast$3qIs, r605_include, r605_xn$createstroke$7Hrq, r605_xn$setanchor$9Jrj, r605_xn$dontexport$5sIl, _r605_t0, _r605_t1, _r605_t2, _r605_t3;
            _r605_t0 = this;
            r605_currentGlyph = _r605_t0;
            r605_xn$setwidth$9Jrj = _r605_t0['set-width']['bind'](_r605_t0);
            r605_xn$assignunicode$7Hrq = function _r605_t2(r606_code) {
                var r606_code, _r606_t0, _r606_t1;
                r605_currentGlyph['assign-unicode'](r606_code);
                return r4_unicodeGlyphs[r605_currentGlyph['unicode'][r605_currentGlyph['unicode']['length'] - 1]] = r605_currentGlyph;
            };
            r605_xn$startfrom$1aao = _r605_t0['start-from']['bind'](_r605_t0);
            r605_xn$lineto$5sIl = _r605_t0['line-to']['bind'](_r605_t0);
            r605_xn$curveto$1aao = _r605_t0['curve-to']['bind'](_r605_t0);
            r605_xn$cubicto$1aao = _r605_t0['cubic-to']['bind'](_r605_t0);
            r605_xn$putshapes$9Jrj = _r605_t0['put-shapes']['bind'](_r605_t0);
            r605_xn$reverselast$3qIs = _r605_t0['reverse-last']['bind'](_r605_t0);
            r605_include = _r605_t0['include']['bind'](_r605_t0);
            r605_xn$createstroke$7Hrq = _r605_t0['create-stroke']['bind'](_r605_t0);
            r605_xn$setanchor$9Jrj = _r605_t0['set-anchor']['bind'](_r605_t0);
            r605_xn$dontexport$5sIl = function _r605_t3() {
                var _r607_t0, _r607_t1;
                return r605_currentGlyph['dontExport'] = true;
            };
            _r605_t0['gizmo'] = r4_globalTransform;
            _r605_t0['set-width'](r4_WIDTH);
            r605_xn$setwidth$9Jrj(r4_WIDTH);
            r605_xn$assignunicode$7Hrq('?');
            r605_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r605_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r605_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t191() {
            var r609_currentGlyph, r609_xn$setwidth$9Jrj, r609_xn$assignunicode$7Hrq, r609_xn$startfrom$1aao, r609_xn$lineto$5sIl, r609_xn$curveto$1aao, r609_xn$cubicto$1aao, r609_xn$putshapes$9Jrj, r609_xn$reverselast$3qIs, r609_include, r609_xn$createstroke$7Hrq, r609_xn$setanchor$9Jrj, r609_xn$dontexport$5sIl, _r609_t0, _r609_t1, _r609_t2, _r609_t3;
            _r609_t0 = this;
            r609_currentGlyph = _r609_t0;
            r609_xn$setwidth$9Jrj = _r609_t0['set-width']['bind'](_r609_t0);
            r609_xn$assignunicode$7Hrq = function _r609_t2(r610_code) {
                var r610_code, _r610_t0, _r610_t1;
                r609_currentGlyph['assign-unicode'](r610_code);
                return r4_unicodeGlyphs[r609_currentGlyph['unicode'][r609_currentGlyph['unicode']['length'] - 1]] = r609_currentGlyph;
            };
            r609_xn$startfrom$1aao = _r609_t0['start-from']['bind'](_r609_t0);
            r609_xn$lineto$5sIl = _r609_t0['line-to']['bind'](_r609_t0);
            r609_xn$curveto$1aao = _r609_t0['curve-to']['bind'](_r609_t0);
            r609_xn$cubicto$1aao = _r609_t0['cubic-to']['bind'](_r609_t0);
            r609_xn$putshapes$9Jrj = _r609_t0['put-shapes']['bind'](_r609_t0);
            r609_xn$reverselast$3qIs = _r609_t0['reverse-last']['bind'](_r609_t0);
            r609_include = _r609_t0['include']['bind'](_r609_t0);
            r609_xn$createstroke$7Hrq = _r609_t0['create-stroke']['bind'](_r609_t0);
            r609_xn$setanchor$9Jrj = _r609_t0['set-anchor']['bind'](_r609_t0);
            r609_xn$dontexport$5sIl = function _r609_t3() {
                var _r611_t0, _r611_t1;
                return r609_currentGlyph['dontExport'] = true;
            };
            _r609_t0['gizmo'] = r4_globalTransform;
            _r609_t0['set-width'](r4_WIDTH);
            r609_xn$setwidth$9Jrj(r4_WIDTH);
            r609_xn$assignunicode$7Hrq('!');
            r609_include(r609_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r609_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t192() {
            var r613_currentGlyph, r613_xn$setwidth$9Jrj, r613_xn$assignunicode$7Hrq, r613_xn$startfrom$1aao, r613_xn$lineto$5sIl, r613_xn$curveto$1aao, r613_xn$cubicto$1aao, r613_xn$putshapes$9Jrj, r613_xn$reverselast$3qIs, r613_include, r613_xn$createstroke$7Hrq, r613_xn$setanchor$9Jrj, r613_xn$dontexport$5sIl, _r613_t0, _r613_t1, _r613_t2, _r613_t3;
            _r613_t0 = this;
            r613_currentGlyph = _r613_t0;
            r613_xn$setwidth$9Jrj = _r613_t0['set-width']['bind'](_r613_t0);
            r613_xn$assignunicode$7Hrq = function _r613_t2(r614_code) {
                var r614_code, _r614_t0, _r614_t1;
                r613_currentGlyph['assign-unicode'](r614_code);
                return r4_unicodeGlyphs[r613_currentGlyph['unicode'][r613_currentGlyph['unicode']['length'] - 1]] = r613_currentGlyph;
            };
            r613_xn$startfrom$1aao = _r613_t0['start-from']['bind'](_r613_t0);
            r613_xn$lineto$5sIl = _r613_t0['line-to']['bind'](_r613_t0);
            r613_xn$curveto$1aao = _r613_t0['curve-to']['bind'](_r613_t0);
            r613_xn$cubicto$1aao = _r613_t0['cubic-to']['bind'](_r613_t0);
            r613_xn$putshapes$9Jrj = _r613_t0['put-shapes']['bind'](_r613_t0);
            r613_xn$reverselast$3qIs = _r613_t0['reverse-last']['bind'](_r613_t0);
            r613_include = _r613_t0['include']['bind'](_r613_t0);
            r613_xn$createstroke$7Hrq = _r613_t0['create-stroke']['bind'](_r613_t0);
            r613_xn$setanchor$9Jrj = _r613_t0['set-anchor']['bind'](_r613_t0);
            r613_xn$dontexport$5sIl = function _r613_t3() {
                var _r615_t0, _r615_t1;
                return r613_currentGlyph['dontExport'] = true;
            };
            _r613_t0['gizmo'] = r4_globalTransform;
            _r613_t0['set-width'](r4_WIDTH);
            r613_xn$setwidth$9Jrj(r4_WIDTH);
            r613_xn$assignunicode$7Hrq('_');
            r613_include(r613_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t193() {
            var r617_currentGlyph, r617_xn$setwidth$9Jrj, r617_xn$assignunicode$7Hrq, r617_xn$startfrom$1aao, r617_xn$lineto$5sIl, r617_xn$curveto$1aao, r617_xn$cubicto$1aao, r617_xn$putshapes$9Jrj, r617_xn$reverselast$3qIs, r617_include, r617_xn$createstroke$7Hrq, r617_xn$setanchor$9Jrj, r617_xn$dontexport$5sIl, _r617_t0, _r617_t1, _r617_t2, _r617_t3;
            _r617_t0 = this;
            r617_currentGlyph = _r617_t0;
            r617_xn$setwidth$9Jrj = _r617_t0['set-width']['bind'](_r617_t0);
            r617_xn$assignunicode$7Hrq = function _r617_t2(r618_code) {
                var r618_code, _r618_t0, _r618_t1;
                r617_currentGlyph['assign-unicode'](r618_code);
                return r4_unicodeGlyphs[r617_currentGlyph['unicode'][r617_currentGlyph['unicode']['length'] - 1]] = r617_currentGlyph;
            };
            r617_xn$startfrom$1aao = _r617_t0['start-from']['bind'](_r617_t0);
            r617_xn$lineto$5sIl = _r617_t0['line-to']['bind'](_r617_t0);
            r617_xn$curveto$1aao = _r617_t0['curve-to']['bind'](_r617_t0);
            r617_xn$cubicto$1aao = _r617_t0['cubic-to']['bind'](_r617_t0);
            r617_xn$putshapes$9Jrj = _r617_t0['put-shapes']['bind'](_r617_t0);
            r617_xn$reverselast$3qIs = _r617_t0['reverse-last']['bind'](_r617_t0);
            r617_include = _r617_t0['include']['bind'](_r617_t0);
            r617_xn$createstroke$7Hrq = _r617_t0['create-stroke']['bind'](_r617_t0);
            r617_xn$setanchor$9Jrj = _r617_t0['set-anchor']['bind'](_r617_t0);
            r617_xn$dontexport$5sIl = function _r617_t3() {
                var _r619_t0, _r619_t1;
                return r617_currentGlyph['dontExport'] = true;
            };
            _r617_t0['gizmo'] = r4_globalTransform;
            _r617_t0['set-width'](r4_WIDTH);
            r617_xn$setwidth$9Jrj(r4_WIDTH);
            r617_xn$assignunicode$7Hrq('-');
            r617_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t194() {
            var r621_currentGlyph, r621_xn$setwidth$9Jrj, r621_xn$assignunicode$7Hrq, r621_xn$startfrom$1aao, r621_xn$lineto$5sIl, r621_xn$curveto$1aao, r621_xn$cubicto$1aao, r621_xn$putshapes$9Jrj, r621_xn$reverselast$3qIs, r621_include, r621_xn$createstroke$7Hrq, r621_xn$setanchor$9Jrj, r621_xn$dontexport$5sIl, _r621_t0, _r621_t1, _r621_t2, _r621_t3;
            _r621_t0 = this;
            r621_currentGlyph = _r621_t0;
            r621_xn$setwidth$9Jrj = _r621_t0['set-width']['bind'](_r621_t0);
            r621_xn$assignunicode$7Hrq = function _r621_t2(r622_code) {
                var r622_code, _r622_t0, _r622_t1;
                r621_currentGlyph['assign-unicode'](r622_code);
                return r4_unicodeGlyphs[r621_currentGlyph['unicode'][r621_currentGlyph['unicode']['length'] - 1]] = r621_currentGlyph;
            };
            r621_xn$startfrom$1aao = _r621_t0['start-from']['bind'](_r621_t0);
            r621_xn$lineto$5sIl = _r621_t0['line-to']['bind'](_r621_t0);
            r621_xn$curveto$1aao = _r621_t0['curve-to']['bind'](_r621_t0);
            r621_xn$cubicto$1aao = _r621_t0['cubic-to']['bind'](_r621_t0);
            r621_xn$putshapes$9Jrj = _r621_t0['put-shapes']['bind'](_r621_t0);
            r621_xn$reverselast$3qIs = _r621_t0['reverse-last']['bind'](_r621_t0);
            r621_include = _r621_t0['include']['bind'](_r621_t0);
            r621_xn$createstroke$7Hrq = _r621_t0['create-stroke']['bind'](_r621_t0);
            r621_xn$setanchor$9Jrj = _r621_t0['set-anchor']['bind'](_r621_t0);
            r621_xn$dontexport$5sIl = function _r621_t3() {
                var _r623_t0, _r623_t1;
                return r621_currentGlyph['dontExport'] = true;
            };
            _r621_t0['gizmo'] = r4_globalTransform;
            _r621_t0['set-width'](r4_WIDTH);
            r621_xn$setwidth$9Jrj(r4_WIDTH);
            r621_xn$assignunicode$7Hrq('+');
            r621_include(r4_glyphs['hyphen']);
            r621_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t195() {
            var r625_currentGlyph, r625_xn$setwidth$9Jrj, r625_xn$assignunicode$7Hrq, r625_xn$startfrom$1aao, r625_xn$lineto$5sIl, r625_xn$curveto$1aao, r625_xn$cubicto$1aao, r625_xn$putshapes$9Jrj, r625_xn$reverselast$3qIs, r625_include, r625_xn$createstroke$7Hrq, r625_xn$setanchor$9Jrj, r625_xn$dontexport$5sIl, _r625_t0, _r625_t1, _r625_t2, _r625_t3;
            _r625_t0 = this;
            r625_currentGlyph = _r625_t0;
            r625_xn$setwidth$9Jrj = _r625_t0['set-width']['bind'](_r625_t0);
            r625_xn$assignunicode$7Hrq = function _r625_t2(r626_code) {
                var r626_code, _r626_t0, _r626_t1;
                r625_currentGlyph['assign-unicode'](r626_code);
                return r4_unicodeGlyphs[r625_currentGlyph['unicode'][r625_currentGlyph['unicode']['length'] - 1]] = r625_currentGlyph;
            };
            r625_xn$startfrom$1aao = _r625_t0['start-from']['bind'](_r625_t0);
            r625_xn$lineto$5sIl = _r625_t0['line-to']['bind'](_r625_t0);
            r625_xn$curveto$1aao = _r625_t0['curve-to']['bind'](_r625_t0);
            r625_xn$cubicto$1aao = _r625_t0['cubic-to']['bind'](_r625_t0);
            r625_xn$putshapes$9Jrj = _r625_t0['put-shapes']['bind'](_r625_t0);
            r625_xn$reverselast$3qIs = _r625_t0['reverse-last']['bind'](_r625_t0);
            r625_include = _r625_t0['include']['bind'](_r625_t0);
            r625_xn$createstroke$7Hrq = _r625_t0['create-stroke']['bind'](_r625_t0);
            r625_xn$setanchor$9Jrj = _r625_t0['set-anchor']['bind'](_r625_t0);
            r625_xn$dontexport$5sIl = function _r625_t3() {
                var _r627_t0, _r627_t1;
                return r625_currentGlyph['dontExport'] = true;
            };
            _r625_t0['gizmo'] = r4_globalTransform;
            _r625_t0['set-width'](r4_WIDTH);
            r625_xn$setwidth$9Jrj(r4_WIDTH);
            r625_xn$assignunicode$7Hrq('=');
            r625_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r625_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t196() {
            var r629_currentGlyph, r629_xn$setwidth$9Jrj, r629_xn$assignunicode$7Hrq, r629_xn$startfrom$1aao, r629_xn$lineto$5sIl, r629_xn$curveto$1aao, r629_xn$cubicto$1aao, r629_xn$putshapes$9Jrj, r629_xn$reverselast$3qIs, r629_include, r629_xn$createstroke$7Hrq, r629_xn$setanchor$9Jrj, r629_xn$dontexport$5sIl, _r629_t0, _r629_t1, _r629_t2, _r629_t3;
            _r629_t0 = this;
            r629_currentGlyph = _r629_t0;
            r629_xn$setwidth$9Jrj = _r629_t0['set-width']['bind'](_r629_t0);
            r629_xn$assignunicode$7Hrq = function _r629_t2(r630_code) {
                var r630_code, _r630_t0, _r630_t1;
                r629_currentGlyph['assign-unicode'](r630_code);
                return r4_unicodeGlyphs[r629_currentGlyph['unicode'][r629_currentGlyph['unicode']['length'] - 1]] = r629_currentGlyph;
            };
            r629_xn$startfrom$1aao = _r629_t0['start-from']['bind'](_r629_t0);
            r629_xn$lineto$5sIl = _r629_t0['line-to']['bind'](_r629_t0);
            r629_xn$curveto$1aao = _r629_t0['curve-to']['bind'](_r629_t0);
            r629_xn$cubicto$1aao = _r629_t0['cubic-to']['bind'](_r629_t0);
            r629_xn$putshapes$9Jrj = _r629_t0['put-shapes']['bind'](_r629_t0);
            r629_xn$reverselast$3qIs = _r629_t0['reverse-last']['bind'](_r629_t0);
            r629_include = _r629_t0['include']['bind'](_r629_t0);
            r629_xn$createstroke$7Hrq = _r629_t0['create-stroke']['bind'](_r629_t0);
            r629_xn$setanchor$9Jrj = _r629_t0['set-anchor']['bind'](_r629_t0);
            r629_xn$dontexport$5sIl = function _r629_t3() {
                var _r631_t0, _r631_t1;
                return r629_currentGlyph['dontExport'] = true;
            };
            _r629_t0['gizmo'] = r4_globalTransform;
            _r629_t0['set-width'](r4_WIDTH);
            r629_xn$setwidth$9Jrj(r4_WIDTH);
            r629_xn$assignunicode$7Hrq('|');
            r629_include(r629_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t197() {
            var r633_currentGlyph, r633_xn$setwidth$9Jrj, r633_xn$assignunicode$7Hrq, r633_xn$startfrom$1aao, r633_xn$lineto$5sIl, r633_xn$curveto$1aao, r633_xn$cubicto$1aao, r633_xn$putshapes$9Jrj, r633_xn$reverselast$3qIs, r633_include, r633_xn$createstroke$7Hrq, r633_xn$setanchor$9Jrj, r633_xn$dontexport$5sIl, r633_cor, _r633_t0, _r633_t1, _r633_t2, _r633_t3;
            _r633_t0 = this;
            r633_currentGlyph = _r633_t0;
            r633_xn$setwidth$9Jrj = _r633_t0['set-width']['bind'](_r633_t0);
            r633_xn$assignunicode$7Hrq = function _r633_t2(r634_code) {
                var r634_code, _r634_t0, _r634_t1;
                r633_currentGlyph['assign-unicode'](r634_code);
                return r4_unicodeGlyphs[r633_currentGlyph['unicode'][r633_currentGlyph['unicode']['length'] - 1]] = r633_currentGlyph;
            };
            r633_xn$startfrom$1aao = _r633_t0['start-from']['bind'](_r633_t0);
            r633_xn$lineto$5sIl = _r633_t0['line-to']['bind'](_r633_t0);
            r633_xn$curveto$1aao = _r633_t0['curve-to']['bind'](_r633_t0);
            r633_xn$cubicto$1aao = _r633_t0['cubic-to']['bind'](_r633_t0);
            r633_xn$putshapes$9Jrj = _r633_t0['put-shapes']['bind'](_r633_t0);
            r633_xn$reverselast$3qIs = _r633_t0['reverse-last']['bind'](_r633_t0);
            r633_include = _r633_t0['include']['bind'](_r633_t0);
            r633_xn$createstroke$7Hrq = _r633_t0['create-stroke']['bind'](_r633_t0);
            r633_xn$setanchor$9Jrj = _r633_t0['set-anchor']['bind'](_r633_t0);
            r633_xn$dontexport$5sIl = function _r633_t3() {
                var _r635_t0, _r635_t1;
                return r633_currentGlyph['dontExport'] = true;
            };
            _r633_t0['gizmo'] = r4_globalTransform;
            _r633_t0['set-width'](r4_WIDTH);
            r633_xn$setwidth$9Jrj(r4_WIDTH);
            r633_xn$assignunicode$7Hrq('/');
            r633_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r633_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r633_xn$lineto$5sIl(r4_SB + r4_STROKE * r633_cor, r4_parenBot);
            r633_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r633_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r633_cor, r4_parenTop);
            r633_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t198() {
            var r637_currentGlyph, r637_xn$setwidth$9Jrj, r637_xn$assignunicode$7Hrq, r637_xn$startfrom$1aao, r637_xn$lineto$5sIl, r637_xn$curveto$1aao, r637_xn$cubicto$1aao, r637_xn$putshapes$9Jrj, r637_xn$reverselast$3qIs, r637_include, r637_xn$createstroke$7Hrq, r637_xn$setanchor$9Jrj, r637_xn$dontexport$5sIl, r637_cor, _r637_t0, _r637_t1, _r637_t2, _r637_t3;
            _r637_t0 = this;
            r637_currentGlyph = _r637_t0;
            r637_xn$setwidth$9Jrj = _r637_t0['set-width']['bind'](_r637_t0);
            r637_xn$assignunicode$7Hrq = function _r637_t2(r638_code) {
                var r638_code, _r638_t0, _r638_t1;
                r637_currentGlyph['assign-unicode'](r638_code);
                return r4_unicodeGlyphs[r637_currentGlyph['unicode'][r637_currentGlyph['unicode']['length'] - 1]] = r637_currentGlyph;
            };
            r637_xn$startfrom$1aao = _r637_t0['start-from']['bind'](_r637_t0);
            r637_xn$lineto$5sIl = _r637_t0['line-to']['bind'](_r637_t0);
            r637_xn$curveto$1aao = _r637_t0['curve-to']['bind'](_r637_t0);
            r637_xn$cubicto$1aao = _r637_t0['cubic-to']['bind'](_r637_t0);
            r637_xn$putshapes$9Jrj = _r637_t0['put-shapes']['bind'](_r637_t0);
            r637_xn$reverselast$3qIs = _r637_t0['reverse-last']['bind'](_r637_t0);
            r637_include = _r637_t0['include']['bind'](_r637_t0);
            r637_xn$createstroke$7Hrq = _r637_t0['create-stroke']['bind'](_r637_t0);
            r637_xn$setanchor$9Jrj = _r637_t0['set-anchor']['bind'](_r637_t0);
            r637_xn$dontexport$5sIl = function _r637_t3() {
                var _r639_t0, _r639_t1;
                return r637_currentGlyph['dontExport'] = true;
            };
            _r637_t0['gizmo'] = r4_globalTransform;
            _r637_t0['set-width'](r4_WIDTH);
            r637_xn$setwidth$9Jrj(r4_WIDTH);
            r637_xn$assignunicode$7Hrq('\\');
            r637_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r637_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r637_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r637_cor, r4_parenBot);
            r637_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r637_xn$lineto$5sIl(r4_SB + r4_STROKE * r637_cor, r4_parenTop);
            r637_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t199() {
            var r641_currentGlyph, r641_xn$setwidth$9Jrj, r641_xn$assignunicode$7Hrq, r641_xn$startfrom$1aao, r641_xn$lineto$5sIl, r641_xn$curveto$1aao, r641_xn$cubicto$1aao, r641_xn$putshapes$9Jrj, r641_xn$reverselast$3qIs, r641_include, r641_xn$createstroke$7Hrq, r641_xn$setanchor$9Jrj, r641_xn$dontexport$5sIl, r641_fine, _r641_t0, _r641_t1, _r641_t2, _r641_t3;
            _r641_t0 = this;
            r641_currentGlyph = _r641_t0;
            r641_xn$setwidth$9Jrj = _r641_t0['set-width']['bind'](_r641_t0);
            r641_xn$assignunicode$7Hrq = function _r641_t2(r642_code) {
                var r642_code, _r642_t0, _r642_t1;
                r641_currentGlyph['assign-unicode'](r642_code);
                return r4_unicodeGlyphs[r641_currentGlyph['unicode'][r641_currentGlyph['unicode']['length'] - 1]] = r641_currentGlyph;
            };
            r641_xn$startfrom$1aao = _r641_t0['start-from']['bind'](_r641_t0);
            r641_xn$lineto$5sIl = _r641_t0['line-to']['bind'](_r641_t0);
            r641_xn$curveto$1aao = _r641_t0['curve-to']['bind'](_r641_t0);
            r641_xn$cubicto$1aao = _r641_t0['cubic-to']['bind'](_r641_t0);
            r641_xn$putshapes$9Jrj = _r641_t0['put-shapes']['bind'](_r641_t0);
            r641_xn$reverselast$3qIs = _r641_t0['reverse-last']['bind'](_r641_t0);
            r641_include = _r641_t0['include']['bind'](_r641_t0);
            r641_xn$createstroke$7Hrq = _r641_t0['create-stroke']['bind'](_r641_t0);
            r641_xn$setanchor$9Jrj = _r641_t0['set-anchor']['bind'](_r641_t0);
            r641_xn$dontexport$5sIl = function _r641_t3() {
                var _r643_t0, _r643_t1;
                return r641_currentGlyph['dontExport'] = true;
            };
            _r641_t0['gizmo'] = r4_globalTransform;
            _r641_t0['set-width'](r4_WIDTH);
            r641_xn$setwidth$9Jrj(r4_WIDTH);
            r641_xn$assignunicode$7Hrq('#');
            r641_fine = r4_adviceBlackness(4);
            r641_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r641_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r641_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r641_fine, r4_parenTop - r641_fine, r641_fine));
            r641_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r641_fine, r4_parenTop - r641_fine, r641_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t200() {
            var r645_currentGlyph, r645_xn$setwidth$9Jrj, r645_xn$assignunicode$7Hrq, r645_xn$startfrom$1aao, r645_xn$lineto$5sIl, r645_xn$curveto$1aao, r645_xn$cubicto$1aao, r645_xn$putshapes$9Jrj, r645_xn$reverselast$3qIs, r645_include, r645_xn$createstroke$7Hrq, r645_xn$setanchor$9Jrj, r645_xn$dontexport$5sIl, r645_top, r645_bot, _r645_t0, _r645_t1, _r645_t2, _r645_t3;
            _r645_t0 = this;
            r645_currentGlyph = _r645_t0;
            r645_xn$setwidth$9Jrj = _r645_t0['set-width']['bind'](_r645_t0);
            r645_xn$assignunicode$7Hrq = function _r645_t2(r646_code) {
                var r646_code, _r646_t0, _r646_t1;
                r645_currentGlyph['assign-unicode'](r646_code);
                return r4_unicodeGlyphs[r645_currentGlyph['unicode'][r645_currentGlyph['unicode']['length'] - 1]] = r645_currentGlyph;
            };
            r645_xn$startfrom$1aao = _r645_t0['start-from']['bind'](_r645_t0);
            r645_xn$lineto$5sIl = _r645_t0['line-to']['bind'](_r645_t0);
            r645_xn$curveto$1aao = _r645_t0['curve-to']['bind'](_r645_t0);
            r645_xn$cubicto$1aao = _r645_t0['cubic-to']['bind'](_r645_t0);
            r645_xn$putshapes$9Jrj = _r645_t0['put-shapes']['bind'](_r645_t0);
            r645_xn$reverselast$3qIs = _r645_t0['reverse-last']['bind'](_r645_t0);
            r645_include = _r645_t0['include']['bind'](_r645_t0);
            r645_xn$createstroke$7Hrq = _r645_t0['create-stroke']['bind'](_r645_t0);
            r645_xn$setanchor$9Jrj = _r645_t0['set-anchor']['bind'](_r645_t0);
            r645_xn$dontexport$5sIl = function _r645_t3() {
                var _r647_t0, _r647_t1;
                return r645_currentGlyph['dontExport'] = true;
            };
            _r645_t0['gizmo'] = r4_globalTransform;
            _r645_t0['set-width'](r4_WIDTH);
            r645_xn$setwidth$9Jrj(r4_WIDTH);
            r645_xn$assignunicode$7Hrq('<');
            r645_top = r0_mix(0, r4_CAP, 0.75);
            r645_bot = r0_mix(0, r4_CAP, 0.1);
            r645_include(r645_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r645_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r645_top, r645_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r645_include(r645_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r645_top, r645_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r645_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t201() {
            var r649_currentGlyph, r649_xn$setwidth$9Jrj, r649_xn$assignunicode$7Hrq, r649_xn$startfrom$1aao, r649_xn$lineto$5sIl, r649_xn$curveto$1aao, r649_xn$cubicto$1aao, r649_xn$putshapes$9Jrj, r649_xn$reverselast$3qIs, r649_include, r649_xn$createstroke$7Hrq, r649_xn$setanchor$9Jrj, r649_xn$dontexport$5sIl, r649_top, r649_bot, _r649_t0, _r649_t1, _r649_t2, _r649_t3;
            _r649_t0 = this;
            r649_currentGlyph = _r649_t0;
            r649_xn$setwidth$9Jrj = _r649_t0['set-width']['bind'](_r649_t0);
            r649_xn$assignunicode$7Hrq = function _r649_t2(r650_code) {
                var r650_code, _r650_t0, _r650_t1;
                r649_currentGlyph['assign-unicode'](r650_code);
                return r4_unicodeGlyphs[r649_currentGlyph['unicode'][r649_currentGlyph['unicode']['length'] - 1]] = r649_currentGlyph;
            };
            r649_xn$startfrom$1aao = _r649_t0['start-from']['bind'](_r649_t0);
            r649_xn$lineto$5sIl = _r649_t0['line-to']['bind'](_r649_t0);
            r649_xn$curveto$1aao = _r649_t0['curve-to']['bind'](_r649_t0);
            r649_xn$cubicto$1aao = _r649_t0['cubic-to']['bind'](_r649_t0);
            r649_xn$putshapes$9Jrj = _r649_t0['put-shapes']['bind'](_r649_t0);
            r649_xn$reverselast$3qIs = _r649_t0['reverse-last']['bind'](_r649_t0);
            r649_include = _r649_t0['include']['bind'](_r649_t0);
            r649_xn$createstroke$7Hrq = _r649_t0['create-stroke']['bind'](_r649_t0);
            r649_xn$setanchor$9Jrj = _r649_t0['set-anchor']['bind'](_r649_t0);
            r649_xn$dontexport$5sIl = function _r649_t3() {
                var _r651_t0, _r651_t1;
                return r649_currentGlyph['dontExport'] = true;
            };
            _r649_t0['gizmo'] = r4_globalTransform;
            _r649_t0['set-width'](r4_WIDTH);
            r649_xn$setwidth$9Jrj(r4_WIDTH);
            r649_xn$assignunicode$7Hrq('>');
            r649_top = r0_mix(0, r4_CAP, 0.75);
            r649_bot = r0_mix(0, r4_CAP, 0.1);
            r649_include(r649_xn$createstroke$7Hrq()['start-from'](r4_SB, r649_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r649_top, r649_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r649_include(r649_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r649_top, r649_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r649_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t202() {
            var r653_currentGlyph, r653_xn$setwidth$9Jrj, r653_xn$assignunicode$7Hrq, r653_xn$startfrom$1aao, r653_xn$lineto$5sIl, r653_xn$curveto$1aao, r653_xn$cubicto$1aao, r653_xn$putshapes$9Jrj, r653_xn$reverselast$3qIs, r653_include, r653_xn$createstroke$7Hrq, r653_xn$setanchor$9Jrj, r653_xn$dontexport$5sIl, _r653_t0, _r653_t1, _r653_t2, _r653_t3;
            _r653_t0 = this;
            r653_currentGlyph = _r653_t0;
            r653_xn$setwidth$9Jrj = _r653_t0['set-width']['bind'](_r653_t0);
            r653_xn$assignunicode$7Hrq = function _r653_t2(r654_code) {
                var r654_code, _r654_t0, _r654_t1;
                r653_currentGlyph['assign-unicode'](r654_code);
                return r4_unicodeGlyphs[r653_currentGlyph['unicode'][r653_currentGlyph['unicode']['length'] - 1]] = r653_currentGlyph;
            };
            r653_xn$startfrom$1aao = _r653_t0['start-from']['bind'](_r653_t0);
            r653_xn$lineto$5sIl = _r653_t0['line-to']['bind'](_r653_t0);
            r653_xn$curveto$1aao = _r653_t0['curve-to']['bind'](_r653_t0);
            r653_xn$cubicto$1aao = _r653_t0['cubic-to']['bind'](_r653_t0);
            r653_xn$putshapes$9Jrj = _r653_t0['put-shapes']['bind'](_r653_t0);
            r653_xn$reverselast$3qIs = _r653_t0['reverse-last']['bind'](_r653_t0);
            r653_include = _r653_t0['include']['bind'](_r653_t0);
            r653_xn$createstroke$7Hrq = _r653_t0['create-stroke']['bind'](_r653_t0);
            r653_xn$setanchor$9Jrj = _r653_t0['set-anchor']['bind'](_r653_t0);
            r653_xn$dontexport$5sIl = function _r653_t3() {
                var _r655_t0, _r655_t1;
                return r653_currentGlyph['dontExport'] = true;
            };
            _r653_t0['gizmo'] = r4_globalTransform;
            _r653_t0['set-width'](r4_WIDTH);
            r653_xn$setwidth$9Jrj(r4_WIDTH);
            r653_xn$assignunicode$7Hrq(39);
            r653_include(r653_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t203() {
            var r657_currentGlyph, r657_xn$setwidth$9Jrj, r657_xn$assignunicode$7Hrq, r657_xn$startfrom$1aao, r657_xn$lineto$5sIl, r657_xn$curveto$1aao, r657_xn$cubicto$1aao, r657_xn$putshapes$9Jrj, r657_xn$reverselast$3qIs, r657_include, r657_xn$createstroke$7Hrq, r657_xn$setanchor$9Jrj, r657_xn$dontexport$5sIl, _r657_t0, _r657_t1, _r657_t2, _r657_t3;
            _r657_t0 = this;
            r657_currentGlyph = _r657_t0;
            r657_xn$setwidth$9Jrj = _r657_t0['set-width']['bind'](_r657_t0);
            r657_xn$assignunicode$7Hrq = function _r657_t2(r658_code) {
                var r658_code, _r658_t0, _r658_t1;
                r657_currentGlyph['assign-unicode'](r658_code);
                return r4_unicodeGlyphs[r657_currentGlyph['unicode'][r657_currentGlyph['unicode']['length'] - 1]] = r657_currentGlyph;
            };
            r657_xn$startfrom$1aao = _r657_t0['start-from']['bind'](_r657_t0);
            r657_xn$lineto$5sIl = _r657_t0['line-to']['bind'](_r657_t0);
            r657_xn$curveto$1aao = _r657_t0['curve-to']['bind'](_r657_t0);
            r657_xn$cubicto$1aao = _r657_t0['cubic-to']['bind'](_r657_t0);
            r657_xn$putshapes$9Jrj = _r657_t0['put-shapes']['bind'](_r657_t0);
            r657_xn$reverselast$3qIs = _r657_t0['reverse-last']['bind'](_r657_t0);
            r657_include = _r657_t0['include']['bind'](_r657_t0);
            r657_xn$createstroke$7Hrq = _r657_t0['create-stroke']['bind'](_r657_t0);
            r657_xn$setanchor$9Jrj = _r657_t0['set-anchor']['bind'](_r657_t0);
            r657_xn$dontexport$5sIl = function _r657_t3() {
                var _r659_t0, _r659_t1;
                return r657_currentGlyph['dontExport'] = true;
            };
            _r657_t0['gizmo'] = r4_globalTransform;
            _r657_t0['set-width'](r4_WIDTH);
            r657_xn$setwidth$9Jrj(r4_WIDTH);
            r657_xn$assignunicode$7Hrq(34);
            r657_include(r657_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r657_include(r657_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t204() {
            var r661_currentGlyph, r661_xn$setwidth$9Jrj, r661_xn$assignunicode$7Hrq, r661_xn$startfrom$1aao, r661_xn$lineto$5sIl, r661_xn$curveto$1aao, r661_xn$cubicto$1aao, r661_xn$putshapes$9Jrj, r661_xn$reverselast$3qIs, r661_include, r661_xn$createstroke$7Hrq, r661_xn$setanchor$9Jrj, r661_xn$dontexport$5sIl, r661_radius, r661_centery, r661_fine, r661_final, r661_j, _r661_t0, _r661_t1, _r661_t2, _r661_t3, _r661_t4, _r661_t5;
            _r661_t2 = this;
            r661_currentGlyph = _r661_t2;
            r661_xn$setwidth$9Jrj = _r661_t2['set-width']['bind'](_r661_t2);
            r661_xn$assignunicode$7Hrq = function _r661_t4(r662_code) {
                var r662_code, _r662_t0, _r662_t1;
                r661_currentGlyph['assign-unicode'](r662_code);
                return r4_unicodeGlyphs[r661_currentGlyph['unicode'][r661_currentGlyph['unicode']['length'] - 1]] = r661_currentGlyph;
            };
            r661_xn$startfrom$1aao = _r661_t2['start-from']['bind'](_r661_t2);
            r661_xn$lineto$5sIl = _r661_t2['line-to']['bind'](_r661_t2);
            r661_xn$curveto$1aao = _r661_t2['curve-to']['bind'](_r661_t2);
            r661_xn$cubicto$1aao = _r661_t2['cubic-to']['bind'](_r661_t2);
            r661_xn$putshapes$9Jrj = _r661_t2['put-shapes']['bind'](_r661_t2);
            r661_xn$reverselast$3qIs = _r661_t2['reverse-last']['bind'](_r661_t2);
            r661_include = _r661_t2['include']['bind'](_r661_t2);
            r661_xn$createstroke$7Hrq = _r661_t2['create-stroke']['bind'](_r661_t2);
            r661_xn$setanchor$9Jrj = _r661_t2['set-anchor']['bind'](_r661_t2);
            r661_xn$dontexport$5sIl = function _r661_t5() {
                var _r663_t0, _r663_t1;
                return r661_currentGlyph['dontExport'] = true;
            };
            _r661_t2['gizmo'] = r4_globalTransform;
            _r661_t2['set-width'](r4_WIDTH);
            r661_xn$setwidth$9Jrj(r4_WIDTH);
            r661_xn$assignunicode$7Hrq('*');
            r661_radius = r4_LONGJUT * 1.2;
            r661_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r661_fine = r4_STROKE * 0.4;
            r661_final = 0.5 * Math['min'](r4_STROKE, r661_radius * Math['PI'] * 2 / 10);
            _r661_t0 = 0;
            _r661_t1 = 5;
            r661_j = _r661_t0;
            for (; r661_j < _r661_t1; r661_j = r661_j + 1) {
                r661_include(r661_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r661_centery)['set-width'](r661_fine, r661_fine)['line-to'](r4_MIDDLE + r661_radius * Math['sin'](r661_j / 5 * Math['PI'] * 2), r661_centery + r661_radius * Math['cos'](r661_j / 5 * Math['PI'] * 2))['set-width'](r661_final, r661_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t205() {
            var r666_currentGlyph, r666_xn$setwidth$9Jrj, r666_xn$assignunicode$7Hrq, r666_xn$startfrom$1aao, r666_xn$lineto$5sIl, r666_xn$curveto$1aao, r666_xn$cubicto$1aao, r666_xn$putshapes$9Jrj, r666_xn$reverselast$3qIs, r666_include, r666_xn$createstroke$7Hrq, r666_xn$setanchor$9Jrj, r666_xn$dontexport$5sIl, r666_percentDotSize, r666_cor, _r666_t0, _r666_t1, _r666_t2, _r666_t3;
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
            r666_xn$assignunicode$7Hrq('%');
            r666_percentDotSize = 0.3;
            r666_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r666_xn$startfrom$1aao(r4_SB, 0);
            r666_xn$lineto$5sIl(r4_SB + r4_STROKE * r666_cor, 0);
            r666_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r666_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r666_cor, r4_CAP);
            r666_include(r666_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r666_include(r666_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_isAboveMark = function _r4_t206(r669_mark) {
            var r669_mark, _r669_t0, _r669_t1;
            return r669_mark && r669_mark['anchors'] && r669_mark['anchors']['above'] && r669_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t214 = r4_allFound = false;
                        else
                            _r4_t214 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t215 = r4_hasMarkAbove = true;
                        else
                            _r4_t215 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t217 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t217 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t218 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t218 = void 0;
                        _r4_t216 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t219(r672_part) {
                            var r672_part, _r672_t0, _r672_t1;
                            return r672_part['name'];
                        })['join']('_'), function _r4_t220() {
                            var r674_currentGlyph, r674_xn$setwidth$9Jrj, r674_xn$assignunicode$7Hrq, r674_xn$startfrom$1aao, r674_xn$lineto$5sIl, r674_xn$curveto$1aao, r674_xn$cubicto$1aao, r674_xn$putshapes$9Jrj, r674_xn$reverselast$3qIs, r674_include, r674_xn$createstroke$7Hrq, r674_xn$setanchor$9Jrj, r674_xn$dontexport$5sIl, r674_part, _r674_t0, _r674_t1, _r674_t2, _r674_t3, _r674_t4, _r674_t5, _r674_t6;
                            _r674_t3 = this;
                            r674_currentGlyph = _r674_t3;
                            r674_xn$setwidth$9Jrj = _r674_t3['set-width']['bind'](_r674_t3);
                            r674_xn$assignunicode$7Hrq = function _r674_t5(r675_code) {
                                var r675_code, _r675_t0, _r675_t1;
                                r674_currentGlyph['assign-unicode'](r675_code);
                                return r4_unicodeGlyphs[r674_currentGlyph['unicode'][r674_currentGlyph['unicode']['length'] - 1]] = r674_currentGlyph;
                            };
                            r674_xn$startfrom$1aao = _r674_t3['start-from']['bind'](_r674_t3);
                            r674_xn$lineto$5sIl = _r674_t3['line-to']['bind'](_r674_t3);
                            r674_xn$curveto$1aao = _r674_t3['curve-to']['bind'](_r674_t3);
                            r674_xn$cubicto$1aao = _r674_t3['cubic-to']['bind'](_r674_t3);
                            r674_xn$putshapes$9Jrj = _r674_t3['put-shapes']['bind'](_r674_t3);
                            r674_xn$reverselast$3qIs = _r674_t3['reverse-last']['bind'](_r674_t3);
                            r674_include = _r674_t3['include']['bind'](_r674_t3);
                            r674_xn$createstroke$7Hrq = _r674_t3['create-stroke']['bind'](_r674_t3);
                            r674_xn$setanchor$9Jrj = _r674_t3['set-anchor']['bind'](_r674_t3);
                            r674_xn$dontexport$5sIl = function _r674_t6() {
                                var _r676_t0, _r676_t1;
                                return r674_currentGlyph['dontExport'] = true;
                            };
                            _r674_t3['gizmo'] = r4_globalTransform;
                            _r674_t3['set-width'](r4_WIDTH);
                            r674_xn$assignunicode$7Hrq(r4_code);
                            r674_include(r4_parts[0], r4_AS_BASE);
                            _r674_t0 = r4_parts['slice'](1);
                            _r674_t1 = _r674_t0['length'];
                            _r674_t2 = 0;
                            for (; _r674_t2 < _r674_t1; _r674_t2 = _r674_t2 + 1) {
                                r674_part = _r674_t0[_r674_t2];
                                r674_include(r674_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t208 = _r4_t216;
                }
                _r4_t207 = _r4_t208;
            } else
                _r4_t207 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t209() {
            var r679_currentGlyph, r679_xn$setwidth$9Jrj, r679_xn$assignunicode$7Hrq, r679_xn$startfrom$1aao, r679_xn$lineto$5sIl, r679_xn$curveto$1aao, r679_xn$cubicto$1aao, r679_xn$putshapes$9Jrj, r679_xn$reverselast$3qIs, r679_include, r679_xn$createstroke$7Hrq, r679_xn$setanchor$9Jrj, r679_xn$dontexport$5sIl, _r679_t0, _r679_t1, _r679_t2, _r679_t3;
            _r679_t0 = this;
            r679_currentGlyph = _r679_t0;
            r679_xn$setwidth$9Jrj = _r679_t0['set-width']['bind'](_r679_t0);
            r679_xn$assignunicode$7Hrq = function _r679_t2(r680_code) {
                var r680_code, _r680_t0, _r680_t1;
                r679_currentGlyph['assign-unicode'](r680_code);
                return r4_unicodeGlyphs[r679_currentGlyph['unicode'][r679_currentGlyph['unicode']['length'] - 1]] = r679_currentGlyph;
            };
            r679_xn$startfrom$1aao = _r679_t0['start-from']['bind'](_r679_t0);
            r679_xn$lineto$5sIl = _r679_t0['line-to']['bind'](_r679_t0);
            r679_xn$curveto$1aao = _r679_t0['curve-to']['bind'](_r679_t0);
            r679_xn$cubicto$1aao = _r679_t0['cubic-to']['bind'](_r679_t0);
            r679_xn$putshapes$9Jrj = _r679_t0['put-shapes']['bind'](_r679_t0);
            r679_xn$reverselast$3qIs = _r679_t0['reverse-last']['bind'](_r679_t0);
            r679_include = _r679_t0['include']['bind'](_r679_t0);
            r679_xn$createstroke$7Hrq = _r679_t0['create-stroke']['bind'](_r679_t0);
            r679_xn$setanchor$9Jrj = _r679_t0['set-anchor']['bind'](_r679_t0);
            r679_xn$dontexport$5sIl = function _r679_t3() {
                var _r681_t0, _r681_t1;
                return r679_currentGlyph['dontExport'] = true;
            };
            _r679_t0['gizmo'] = r4_globalTransform;
            _r679_t0['set-width'](r4_WIDTH);
            r679_xn$assignunicode$7Hrq('`');
            r679_include(r4_glyphs['space'], r4_AS_BASE);
            r679_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t210() {
            var r683_currentGlyph, r683_xn$setwidth$9Jrj, r683_xn$assignunicode$7Hrq, r683_xn$startfrom$1aao, r683_xn$lineto$5sIl, r683_xn$curveto$1aao, r683_xn$cubicto$1aao, r683_xn$putshapes$9Jrj, r683_xn$reverselast$3qIs, r683_include, r683_xn$createstroke$7Hrq, r683_xn$setanchor$9Jrj, r683_xn$dontexport$5sIl, _r683_t0, _r683_t1, _r683_t2, _r683_t3;
            _r683_t0 = this;
            r683_currentGlyph = _r683_t0;
            r683_xn$setwidth$9Jrj = _r683_t0['set-width']['bind'](_r683_t0);
            r683_xn$assignunicode$7Hrq = function _r683_t2(r684_code) {
                var r684_code, _r684_t0, _r684_t1;
                r683_currentGlyph['assign-unicode'](r684_code);
                return r4_unicodeGlyphs[r683_currentGlyph['unicode'][r683_currentGlyph['unicode']['length'] - 1]] = r683_currentGlyph;
            };
            r683_xn$startfrom$1aao = _r683_t0['start-from']['bind'](_r683_t0);
            r683_xn$lineto$5sIl = _r683_t0['line-to']['bind'](_r683_t0);
            r683_xn$curveto$1aao = _r683_t0['curve-to']['bind'](_r683_t0);
            r683_xn$cubicto$1aao = _r683_t0['cubic-to']['bind'](_r683_t0);
            r683_xn$putshapes$9Jrj = _r683_t0['put-shapes']['bind'](_r683_t0);
            r683_xn$reverselast$3qIs = _r683_t0['reverse-last']['bind'](_r683_t0);
            r683_include = _r683_t0['include']['bind'](_r683_t0);
            r683_xn$createstroke$7Hrq = _r683_t0['create-stroke']['bind'](_r683_t0);
            r683_xn$setanchor$9Jrj = _r683_t0['set-anchor']['bind'](_r683_t0);
            r683_xn$dontexport$5sIl = function _r683_t3() {
                var _r685_t0, _r685_t1;
                return r683_currentGlyph['dontExport'] = true;
            };
            _r683_t0['gizmo'] = r4_globalTransform;
            _r683_t0['set-width'](r4_WIDTH);
            r683_xn$assignunicode$7Hrq(180);
            r683_include(r4_glyphs['space'], r4_AS_BASE);
            r683_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t211() {
            var r687_currentGlyph, r687_xn$setwidth$9Jrj, r687_xn$assignunicode$7Hrq, r687_xn$startfrom$1aao, r687_xn$lineto$5sIl, r687_xn$curveto$1aao, r687_xn$cubicto$1aao, r687_xn$putshapes$9Jrj, r687_xn$reverselast$3qIs, r687_include, r687_xn$createstroke$7Hrq, r687_xn$setanchor$9Jrj, r687_xn$dontexport$5sIl, _r687_t0, _r687_t1, _r687_t2, _r687_t3;
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
            r687_xn$assignunicode$7Hrq(94);
            r687_include(r4_glyphs['space'], r4_AS_BASE);
            r687_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t212() {
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
            r691_xn$setwidth$9Jrj(r4_WIDTH);
            r691_xn$assignunicode$7Hrq('~');
            r691_include(r4_glyphs['space'], r4_AS_BASE);
            r691_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t213() {
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
            r695_xn$setwidth$9Jrj(r4_WIDTH);
            r695_xn$assignunicode$7Hrq(168);
            r695_include(r4_glyphs['space'], r4_AS_BASE);
            r695_include(r4_glyphs['dieresisAbove']);
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
                _r4_t223 = _r4_t9 < _r4_t8;
                for (; _r4_t223; _r4_t223 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t224 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t222 = _r4_t224;
            } else
                _r4_t222 = void 0;
        }
        r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t221(r701_glyph) {
            var r701_glyph, _r701_t0, _r701_t1;
            return r701_glyph && !r701_glyph['dontExport'];
        });
        return r4_font;
    };
}
