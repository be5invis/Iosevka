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
        var r4_para, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_ORIGIN, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_eshHook, r4_ezhshape, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219, _r4_t220, _r4_t221, _r4_t222;
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
        r4_ORIGIN = {
            'x': 0,
            'y': 0
        };
        r4_BASE = 'base';
        r4_MARK = 'mark';
        r4_MARKBASE = 'markbase';
        r4_AS_BASE = 'AS-BASE';
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
            console['log']('Building /' + r10_name);
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
                r11_chosenGlyph['dontExport'] = false;
                return r4_unicodeGlyphs[r11_chosenGlyph['unicode'][r11_chosenGlyph['unicode']['length'] - 1]] = r11_chosenGlyph;
            } else
                return void 0;
        };
        r4_xgrid = function _r4_t33(r12_p) {
            var r12_p, _r12_t0, _r12_t1;
            return r0_mix(r4_SB, r4_RIGHTSB, r12_p);
        };
        r4_xn$createglyph$7Hrq('space', function _r4_t34() {
            var r14_currentGlyph, r14_xn$setwidth$9Jrj, r14_xn$assignunicode$7Hrq, r14_xn$startfrom$1aao, r14_xn$lineto$5sIl, r14_xn$curveto$1aao, r14_xn$cubicto$1aao, r14_xn$putshapes$9Jrj, r14_xn$reverselast$3qIs, r14_include, r14_xn$createstroke$7Hrq, r14_xn$setanchor$9Jrj, r14_xn$dontexport$5sIl, _r14_t0, _r14_t1, _r14_t2, _r14_t3;
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
            r14_xn$dontexport$5sIl = function _r14_t3() {
                var _r16_t0, _r16_t1;
                return r14_currentGlyph['dontExport'] = true;
            };
            _r14_t0['gizmo'] = r4_globalTransform;
            _r14_t0['set-width'](r4_WIDTH);
            r14_xn$setwidth$9Jrj(r4_WIDTH);
            r14_xn$assignunicode$7Hrq(' ');
            r14_include(r4_eMarks);
            return void 0;
        });
        r4_Ring = function _r4_t35(r17_u, r17_d, r17_l, r17_r) {
            var r17_u, r17_d, r17_l, r17_r, r17_my, r17_mx, r17_s, _r17_t0, _r17_t1;
            r17_my = (r17_u + r17_d) / 2;
            r17_mx = (r17_l + r17_r) / 2;
            r17_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r17_mx, r17_d)['cubic-to'](r17_mx + (r17_l - r17_mx) * r4_CKAPPA, r17_d, r17_l, r17_my + (r17_d - r17_my) * r4_CKAPPA, r17_l, r17_my)['cubic-to'](r17_l, r17_my + (r17_u - r17_my) * r4_CKAPPA, r17_mx + (r17_l - r17_mx) * r4_CKAPPA, r17_u, r17_mx, r17_u)['cubic-to'](r17_mx + (r17_r - r17_mx) * r4_CKAPPA, r17_u, r17_r, r17_my + (r17_u - r17_my) * r4_CKAPPA, r17_r, r17_my)['cubic-to'](r17_r, r17_my + (r17_d - r17_my) * r4_CKAPPA, r17_mx + (r17_r - r17_mx) * r4_CKAPPA, r17_d, r17_mx, r17_d);
            return r17_s['points'];
        };
        r4_ORing = function _r4_t36(r18_u, r18_d, r18_l, r18_r, r18_smooth) {
            var r18_u, r18_d, r18_l, r18_r, r18_smooth, r18_myu, r18_myd, r18_mx, r18_s, _r18_t0, _r18_t1;
            r18_myu = r18_u - r18_smooth;
            r18_myd = r18_d + r18_smooth;
            r18_mx = (r18_l + r18_r) / 2;
            r18_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r18_mx, r18_d)['cubic-to'](r18_mx + (r18_l - r18_mx) * r4_CKAPPA, r18_d, r18_l, r18_myd + (r18_d - r18_myd) * r4_CKAPPA, r18_l, r18_myd)['line-to'](r18_l, r18_myu)['cubic-to'](r18_l, r18_myu + (r18_u - r18_myu) * r4_CKAPPA, r18_mx + (r18_l - r18_mx) * r4_CKAPPA, r18_u, r18_mx, r18_u)['cubic-to'](r18_mx + (r18_r - r18_mx) * r4_CKAPPA, r18_u, r18_r, r18_myu + (r18_u - r18_myu) * r4_CKAPPA, r18_r, r18_myu)['line-to'](r18_r, r18_myd)['cubic-to'](r18_r, r18_myd + (r18_d - r18_myd) * r4_CKAPPA, r18_mx + (r18_r - r18_mx) * r4_CKAPPA, r18_d, r18_mx, r18_d);
            return r18_s['points'];
        };
        r4_leftwardTopSerif = function _r4_t37(r19_x, r19_y, r19_length) {
            var r19_x, r19_y, r19_length, _r19_t0, _r19_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r19_x + r4_HALFSTROKE, r19_y)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['line-to'](r19_x - r19_length - r4_globalTransform['yx'] * r4_STROKE, r19_y)['to-outline']();
        };
        r4_leftwardBottomSerif = function _r4_t38(r20_x, r20_y, r20_length) {
            var r20_x, r20_y, r20_length, _r20_t0, _r20_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r20_x + r4_HALFSTROKE, r20_y)['heads-to'](r4_LEFTWARD)['set-width'](0, r4_STROKE)['line-to'](r20_x - r20_length + r4_globalTransform['yx'] * r4_STROKE, r20_y)['to-outline']();
        };
        r4_rightwardTopSerif = function _r4_t39(r21_x, r21_y, r21_length) {
            var r21_x, r21_y, r21_length, _r21_t0, _r21_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r21_x - r4_HALFSTROKE, r21_y)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r21_x + r21_length - r4_globalTransform['yx'] * r4_STROKE, r21_y)['to-outline']();
        };
        r4_rightwardBottomSerif = function _r4_t40(r22_x, r22_y, r22_length) {
            var r22_x, r22_y, r22_length, _r22_t0, _r22_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r22_x - r4_HALFSTROKE, r22_y)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r22_x + r22_length + r4_globalTransform['yx'] * r4_STROKE, r22_y)['to-outline']();
        };
        r4_centerTopSerif = function _r4_t41(r23_x, r23_y, r23_length) {
            var r23_x, r23_y, r23_length, _r23_t0, _r23_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r23_x + r23_length - r4_globalTransform['yx'] * r4_STROKE, r23_y)['set-width'](r4_STROKE, 0)['line-to'](r23_x - r23_length - r4_globalTransform['yx'] * r4_STROKE, r23_y)['to-outline']();
        };
        r4_centerBottomSerif = function _r4_t42(r24_x, r24_y, r24_length) {
            var r24_x, r24_y, r24_length, _r24_t0, _r24_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r24_x + r24_length + r4_globalTransform['yx'] * r4_STROKE, r24_y)['set-width'](0, r4_STROKE)['line-to'](r24_x - r24_length + r4_globalTransform['yx'] * r4_STROKE, r24_y)['to-outline']();
        };
        r4_xsStrand = function _r4_t43(r25__xleft, r25_yleft, r25__xright, r25_yright, r25__halfstroke0, r25__halfstroke1, r25__ess, r25__expansion, r25__roundp) {
            var r25__xleft, r25_yleft, r25__xright, r25_yright, r25__halfstroke0, r25__halfstroke1, r25__ess, r25__expansion, r25__roundp, r25_expansion, r25_halfstroke0, r25_halfstroke1, r25_ess, r25_yItalicCorrection, r25_xItalicCorrection, r25_roundsize, r25_roundleft, r25_roundright, r25_xleft, r25_xright, r25_sxleft, r25_sxright, r25_syleft, r25_syright, _r25_t0, _r25_t1, _r25_t2, _r25_t3;
            r25_expansion = r25__expansion || 0.25;
            r25_halfstroke0 = r25__halfstroke0 || r4_HALFSTROKE;
            r25_halfstroke1 = r25__halfstroke1 || r4_HALFSTROKE;
            r25_ess = r25__ess || (r25_halfstroke0 + r25_halfstroke1) / 2;
            r25_yItalicCorrection = r4_globalTransform['yx'] * 0.985;
            r25_xItalicCorrection = 1 / Math['sqrt'](1 - r25_yItalicCorrection * r25_yItalicCorrection);
            _r25_t2 = r25__roundp || r4_SMOOTHA * 0.4;
            if (r25_yleft < r25_yright)
                _r25_t3 = -1;
            else
                _r25_t3 = 1;
            r25_roundsize = _r25_t2 * _r25_t3;
            r25_roundleft = r25_yleft - r25_roundsize;
            r25_roundright = r25_yright + r25_roundsize;
            r25_xleft = r25__xleft + r25_halfstroke0 * r25_xItalicCorrection;
            r25_xright = r25__xright - r25_halfstroke1 * r25_xItalicCorrection;
            r25_sxleft = r0_mix(r25_xleft, r25_xright, 0.5 - r25_expansion);
            r25_sxright = r0_mix(r25_xleft, r25_xright, 0.5 + r25_expansion);
            r25_syleft = r0_mix(r25_roundleft, r25_roundright, 0.5 - r25_expansion);
            r25_syright = r0_mix(r25_roundleft, r25_roundright, 0.5 + r25_expansion);
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r25_xleft, r25_yleft - r25_halfstroke0 * r25_yItalicCorrection)['set-width'](r25_halfstroke0, r25_halfstroke0)['curve-to'](r25_xleft, r25_roundleft, r25_sxleft, r25_syleft)['set-width'](r25_ess, r25_ess)['line-to'](r25_sxright, r25_syright)['curve-to'](r25_xright, r25_roundright, r25_xright, r25_yright + r25_halfstroke1 * r25_yItalicCorrection)['set-width'](r25_halfstroke1, r25_halfstroke1)['to-outline']();
        };
        r4_sStrand = function _r4_t44(r26_yleft, r26_yright, r26__expansion) {
            var r26_yleft, r26_yright, r26__expansion, _r26_t0, _r26_t1;
            return r4_xsStrand(r4_SB, r26_yleft, r4_RIGHTSB, r26_yright, r4_HALFSTROKE, r4_HALFSTROKE, r4_HALFSTROKE, r26__expansion, r4_SMOOTHA * 0.4);
        };
        r4_halfXStrand = function _r4_t45(r27__leftx, r27_lefty, r27_rightx, r27_righty, r27_turn, r27_straight, r27_tension, r27__fine) {
            var r27__leftx, r27_lefty, r27_rightx, r27_righty, r27_turn, r27_straight, r27_tension, r27__fine, r27_leftx, r27_fine, r27_turnyleft, r27_cyleft, r27_straightxleft, r27_straightyleft, _r27_t0, _r27_t1, _r27_t2, _r27_t3, _r27_t4, _r27_t5, _r27_t6, _r27_t7, _r27_t8, _r27_t9, _r27_t10, _r27_t11, _r27_t12, _r27_t13, _r27_t14, _r27_t15, _r27_t16, _r27_t17, _r27_t18, _r27_t19, _r27_t20, _r27_t21, _r27_t22, _r27_t23, _r27_t24, _r27_t25, _r27_t26, _r27_t27, _r27_t28, _r27_t29, _r27_t30, _r27_t31;
            _r27_t2 = r27__leftx;
            _r27_t3 = r4_HALFSTROKE;
            if (r27_rightx > r27__leftx)
                _r27_t4 = 1;
            else
                _r27_t4 = -1;
            _r27_t5 = _r27_t3 * _r27_t4;
            r27_leftx = _r27_t2 + _r27_t5;
            r27_fine = (r27__fine || r4_STROKE) * 0.5;
            r27_turnyleft = r0_mix(r27_lefty, r27_righty, r27_turn);
            r27_cyleft = r0_mix(r27_turnyleft, r27_righty, r27_tension);
            r27_straightxleft = r0_mix(r27_leftx, r27_rightx, r27_straight);
            r27_straightyleft = r0_mix(r27_cyleft, r27_righty, r27_straight);
            _r27_t6 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r27_leftx, r27_lefty)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE);
            _r27_t7 = _r27_t6['heads-to'];
            if (r27_lefty < r27_righty)
                _r27_t8 = r4_UPWARD;
            else
                _r27_t8 = r4_DOWNWARD;
            _r27_t9 = _r27_t7['call'](_r27_t6, _r27_t8);
            _r27_t10 = _r27_t9['line-to'];
            _r27_t11 = r27_leftx;
            _r27_t12 = r27_turnyleft;
            _r27_t13 = _r27_t10['call'](_r27_t9, _r27_t11, _r27_t12);
            _r27_t14 = _r27_t13['heads-to'];
            if (r27_lefty < r27_righty)
                _r27_t15 = r4_UPWARD;
            else
                _r27_t15 = r4_DOWNWARD;
            _r27_t16 = _r27_t14['call'](_r27_t13, _r27_t15);
            _r27_t17 = _r27_t16['curve-to'];
            _r27_t18 = r27_leftx;
            _r27_t19 = r27_cyleft;
            _r27_t20 = r27_straightxleft;
            _r27_t21 = r27_straightyleft;
            _r27_t22 = _r27_t17['call'](_r27_t16, _r27_t18, _r27_t19, _r27_t20, _r27_t21);
            _r27_t23 = _r27_t22['set-width'];
            _r27_t24 = r27_fine;
            _r27_t25 = r27_fine;
            _r27_t26 = _r27_t23['call'](_r27_t22, _r27_t24, _r27_t25);
            _r27_t27 = _r27_t26['line-to'];
            _r27_t28 = r27_rightx;
            _r27_t29 = r27_righty;
            _r27_t30 = _r27_t27['call'](_r27_t26, _r27_t28, _r27_t29);
            _r27_t31 = _r27_t30['to-outline'];
            return _r27_t31['call'](_r27_t30);
        };
        r4_xStrand = function _r4_t46(r28__leftx, r28_lefty, r28__rightx, r28_righty, r28_turn, r28_straight, r28_tension) {
            var r28__leftx, r28_lefty, r28__rightx, r28_righty, r28_turn, r28_straight, r28_tension, r28_middlex, r28_middley, _r28_t0, _r28_t1;
            r28_middlex = r0_mix(r28__leftx, r28__rightx, 0.5);
            r28_middley = r0_mix(r28_lefty, r28_righty, 0.5);
            return r4_halfXStrand(r28__leftx, r28_lefty, r28_middlex, r28_middley, r28_turn, r28_straight, r28_tension)['concat'](r4_halfXStrand(r28__rightx, r28_righty, r28_middlex, r28_middley, r28_turn, r28_straight, r28_tension));
        };
        r4_nBowl = function _r4_t47(r29_left, r29_middle, r29_right, r29_fine) {
            var r29_left, r29_middle, r29_right, r29_fine, r29_bandLeft, r29_bandRight, _r29_t0, _r29_t1;
            r29_bandLeft = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r29_right, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r29_right, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r29_middle, r4_XO)['heads-to'](r4_LEFTWARD)['to-outline']();
            r29_bandRight = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r29_middle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r29_left, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r29_fine)['to-outline']();
            return r29_bandLeft['concat'](r29_bandRight);
        };
        r4_sHookUpper = function _r4_t48(r30_top, r30_smooth, r30_hook, r30__middle) {
            var r30_top, r30_smooth, r30_hook, r30__middle, _r30_t0, _r30_t1, _r30_t2;
            return function _r30_t2() {
                var r32_currentGlyph, r32_xn$setwidth$9Jrj, r32_xn$assignunicode$7Hrq, r32_xn$startfrom$1aao, r32_xn$lineto$5sIl, r32_xn$curveto$1aao, r32_xn$cubicto$1aao, r32_xn$putshapes$9Jrj, r32_xn$reverselast$3qIs, r32_include, r32_xn$createstroke$7Hrq, r32_xn$setanchor$9Jrj, r32_xn$dontexport$5sIl, r32_middle, _r32_t0, _r32_t1, _r32_t2, _r32_t3;
                _r32_t0 = this;
                r32_currentGlyph = _r32_t0;
                r32_xn$setwidth$9Jrj = _r32_t0['set-width']['bind'](_r32_t0);
                r32_xn$assignunicode$7Hrq = function _r32_t2(r33_code) {
                    var r33_code, _r33_t0, _r33_t1;
                    r32_currentGlyph['assign-unicode'](r33_code);
                    return r4_unicodeGlyphs[r32_currentGlyph['unicode'][r32_currentGlyph['unicode']['length'] - 1]] = r32_currentGlyph;
                };
                r32_xn$startfrom$1aao = _r32_t0['start-from']['bind'](_r32_t0);
                r32_xn$lineto$5sIl = _r32_t0['line-to']['bind'](_r32_t0);
                r32_xn$curveto$1aao = _r32_t0['curve-to']['bind'](_r32_t0);
                r32_xn$cubicto$1aao = _r32_t0['cubic-to']['bind'](_r32_t0);
                r32_xn$putshapes$9Jrj = _r32_t0['put-shapes']['bind'](_r32_t0);
                r32_xn$reverselast$3qIs = _r32_t0['reverse-last']['bind'](_r32_t0);
                r32_include = _r32_t0['include']['bind'](_r32_t0);
                r32_xn$createstroke$7Hrq = _r32_t0['create-stroke']['bind'](_r32_t0);
                r32_xn$setanchor$9Jrj = _r32_t0['set-anchor']['bind'](_r32_t0);
                r32_xn$dontexport$5sIl = function _r32_t3() {
                    var _r34_t0, _r34_t1;
                    return r32_currentGlyph['dontExport'] = true;
                };
                _r32_t0['gizmo'] = r4_globalTransform;
                _r32_t0['set-width'](r4_WIDTH);
                r32_middle = r30__middle || r4_MIDDLE;
                r32_include(r32_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB - r4_OXHOOK, r30_top - r30_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r32_middle, r4_RIGHTSB, r4_KAPPA_HOOK), r30_top - r4_O, r32_middle, r30_top - r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r30_top - r30_smooth));
                return void 0;
            };
        };
        r4_twoHookUpper = function _r4_t49(r35_top, r35_smooth, r35_hook, r35__middle) {
            var r35_top, r35_smooth, r35_hook, r35__middle, _r35_t0, _r35_t1, _r35_t2;
            return function _r35_t2() {
                var r37_currentGlyph, r37_xn$setwidth$9Jrj, r37_xn$assignunicode$7Hrq, r37_xn$startfrom$1aao, r37_xn$lineto$5sIl, r37_xn$curveto$1aao, r37_xn$cubicto$1aao, r37_xn$putshapes$9Jrj, r37_xn$reverselast$3qIs, r37_include, r37_xn$createstroke$7Hrq, r37_xn$setanchor$9Jrj, r37_xn$dontexport$5sIl, r37_middle, _r37_t0, _r37_t1, _r37_t2, _r37_t3;
                _r37_t0 = this;
                r37_currentGlyph = _r37_t0;
                r37_xn$setwidth$9Jrj = _r37_t0['set-width']['bind'](_r37_t0);
                r37_xn$assignunicode$7Hrq = function _r37_t2(r38_code) {
                    var r38_code, _r38_t0, _r38_t1;
                    r37_currentGlyph['assign-unicode'](r38_code);
                    return r4_unicodeGlyphs[r37_currentGlyph['unicode'][r37_currentGlyph['unicode']['length'] - 1]] = r37_currentGlyph;
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
                r37_xn$dontexport$5sIl = function _r37_t3() {
                    var _r39_t0, _r39_t1;
                    return r37_currentGlyph['dontExport'] = true;
                };
                _r37_t0['gizmo'] = r4_globalTransform;
                _r37_t0['set-width'](r4_WIDTH);
                r37_middle = r35__middle || r4_MIDDLE;
                r37_include(r37_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r35_top - r35_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r37_middle, r4_SB, r4_KAPPA_HOOK), r35_top - r4_O, r37_middle, r35_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r35_top - r35_smooth));
                return void 0;
            };
        };
        r4_sHookLower = function _r4_t50(r40_bottom, r40_smooth, r40_hook, r40__middle) {
            var r40_bottom, r40_smooth, r40_hook, r40__middle, _r40_t0, _r40_t1, _r40_t2;
            return function _r40_t2() {
                var r42_currentGlyph, r42_xn$setwidth$9Jrj, r42_xn$assignunicode$7Hrq, r42_xn$startfrom$1aao, r42_xn$lineto$5sIl, r42_xn$curveto$1aao, r42_xn$cubicto$1aao, r42_xn$putshapes$9Jrj, r42_xn$reverselast$3qIs, r42_include, r42_xn$createstroke$7Hrq, r42_xn$setanchor$9Jrj, r42_xn$dontexport$5sIl, r42_middle, _r42_t0, _r42_t1, _r42_t2, _r42_t3;
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
                r42_xn$dontexport$5sIl = function _r42_t3() {
                    var _r44_t0, _r44_t1;
                    return r42_currentGlyph['dontExport'] = true;
                };
                _r42_t0['gizmo'] = r4_globalTransform;
                _r42_t0['set-width'](r4_WIDTH);
                r42_middle = r40__middle || r4_MIDDLE;
                r42_include(r42_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB, r40_bottom + r40_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r42_middle, r40_bottom + r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r0_mix(r42_middle, r4_SB, r4_KAPPA_HOOK), r40_bottom + r4_O, r4_SB + r4_OXHOOK, r40_bottom + r40_hook));
                return void 0;
            };
        };
        r4_smallo = function _r4_t51(r45_u, r45_d, r45_l, r45_r) {
            var r45_u, r45_d, r45_l, r45_r, _r45_t0, _r45_t1, _r45_t2;
            return function _r45_t2() {
                var r47_currentGlyph, r47_xn$setwidth$9Jrj, r47_xn$assignunicode$7Hrq, r47_xn$startfrom$1aao, r47_xn$lineto$5sIl, r47_xn$curveto$1aao, r47_xn$cubicto$1aao, r47_xn$putshapes$9Jrj, r47_xn$reverselast$3qIs, r47_include, r47_xn$createstroke$7Hrq, r47_xn$setanchor$9Jrj, r47_xn$dontexport$5sIl, r47_middle, r47_ymiddlea, r47_ymiddleb, _r47_t0, _r47_t1, _r47_t2, _r47_t3;
                _r47_t0 = this;
                r47_currentGlyph = _r47_t0;
                r47_xn$setwidth$9Jrj = _r47_t0['set-width']['bind'](_r47_t0);
                r47_xn$assignunicode$7Hrq = function _r47_t2(r48_code) {
                    var r48_code, _r48_t0, _r48_t1;
                    r47_currentGlyph['assign-unicode'](r48_code);
                    return r4_unicodeGlyphs[r47_currentGlyph['unicode'][r47_currentGlyph['unicode']['length'] - 1]] = r47_currentGlyph;
                };
                r47_xn$startfrom$1aao = _r47_t0['start-from']['bind'](_r47_t0);
                r47_xn$lineto$5sIl = _r47_t0['line-to']['bind'](_r47_t0);
                r47_xn$curveto$1aao = _r47_t0['curve-to']['bind'](_r47_t0);
                r47_xn$cubicto$1aao = _r47_t0['cubic-to']['bind'](_r47_t0);
                r47_xn$putshapes$9Jrj = _r47_t0['put-shapes']['bind'](_r47_t0);
                r47_xn$reverselast$3qIs = _r47_t0['reverse-last']['bind'](_r47_t0);
                r47_include = _r47_t0['include']['bind'](_r47_t0);
                r47_xn$createstroke$7Hrq = _r47_t0['create-stroke']['bind'](_r47_t0);
                r47_xn$setanchor$9Jrj = _r47_t0['set-anchor']['bind'](_r47_t0);
                r47_xn$dontexport$5sIl = function _r47_t3() {
                    var _r49_t0, _r49_t1;
                    return r47_currentGlyph['dontExport'] = true;
                };
                _r47_t0['gizmo'] = r4_globalTransform;
                _r47_t0['set-width'](r4_WIDTH);
                r47_middle = (r45_l + r45_r) / 2;
                if (r45_u - r45_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) {
                    r47_include(r47_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r47_middle, r45_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r45_l + r4_O, r45_u - r4_SMALLSMOOTHA)['line-to'](r45_l + r4_O, r45_d + r4_SMALLSMOOTHB)['arc-vh-to'](r47_middle, r45_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r45_r - r4_O, r45_d + r4_SMALLSMOOTHA)['line-to'](r45_r - r4_O, r45_u - r4_SMALLSMOOTHB)['arc-vh-to'](r47_middle, r45_u - r4_O)['heads-to'](r4_LEFTWARD));
                } else {
                    r47_ymiddlea = (r45_u - r4_SMALLSMOOTHA + r45_d + r4_SMALLSMOOTHB) / 2;
                    r47_ymiddleb = (r45_u - r4_SMALLSMOOTHB + r45_d + r4_SMALLSMOOTHA) / 2;
                    r47_include(r47_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r47_middle, r45_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r45_l + r4_O, r47_ymiddlea)['arc-vh-to'](r47_middle, r45_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r45_r - r4_O, r47_ymiddleb)['arc-vh-to'](r47_middle, r45_u - r4_O)['heads-to'](r4_LEFTWARD));
                }
                return void 0;
            };
        };
        r4_hbar = function _r4_t52(r50_xleft, r50_xright, r50_y, r50__fine) {
            var r50_xleft, r50_xright, r50_y, r50__fine, _r50_t0, _r50_t1, _r50_t2;
            return function _r50_t2() {
                var r52_currentGlyph, r52_xn$setwidth$9Jrj, r52_xn$assignunicode$7Hrq, r52_xn$startfrom$1aao, r52_xn$lineto$5sIl, r52_xn$curveto$1aao, r52_xn$cubicto$1aao, r52_xn$putshapes$9Jrj, r52_xn$reverselast$3qIs, r52_include, r52_xn$createstroke$7Hrq, r52_xn$setanchor$9Jrj, r52_xn$dontexport$5sIl, r52_fine, _r52_t0, _r52_t1, _r52_t2, _r52_t3;
                _r52_t0 = this;
                r52_currentGlyph = _r52_t0;
                r52_xn$setwidth$9Jrj = _r52_t0['set-width']['bind'](_r52_t0);
                r52_xn$assignunicode$7Hrq = function _r52_t2(r53_code) {
                    var r53_code, _r53_t0, _r53_t1;
                    r52_currentGlyph['assign-unicode'](r53_code);
                    return r4_unicodeGlyphs[r52_currentGlyph['unicode'][r52_currentGlyph['unicode']['length'] - 1]] = r52_currentGlyph;
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
                r52_xn$dontexport$5sIl = function _r52_t3() {
                    var _r54_t0, _r54_t1;
                    return r52_currentGlyph['dontExport'] = true;
                };
                _r52_t0['gizmo'] = r4_globalTransform;
                _r52_t0['set-width'](r4_WIDTH);
                r52_fine = (r50__fine || r4_STROKE) / 2;
                r52_include(r52_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r50_xleft, r50_y)['heads-to'](r4_RIGHTWARD)['set-width'](r52_fine, r52_fine)['line-to'](r50_xright, r50_y)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_vbar = function _r4_t53(r55_x, r55_ydown, r55_yup, r55__fine) {
            var r55_x, r55_ydown, r55_yup, r55__fine, _r55_t0, _r55_t1, _r55_t2;
            return function _r55_t2() {
                var r57_currentGlyph, r57_xn$setwidth$9Jrj, r57_xn$assignunicode$7Hrq, r57_xn$startfrom$1aao, r57_xn$lineto$5sIl, r57_xn$curveto$1aao, r57_xn$cubicto$1aao, r57_xn$putshapes$9Jrj, r57_xn$reverselast$3qIs, r57_include, r57_xn$createstroke$7Hrq, r57_xn$setanchor$9Jrj, r57_xn$dontexport$5sIl, r57_fine, _r57_t0, _r57_t1, _r57_t2, _r57_t3, _r57_t4, _r57_t5, _r57_t6, _r57_t7, _r57_t8, _r57_t9, _r57_t10, _r57_t11, _r57_t12, _r57_t13, _r57_t14, _r57_t15, _r57_t16, _r57_t17, _r57_t18, _r57_t19;
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
                r57_xn$dontexport$5sIl = function _r57_t3() {
                    var _r59_t0, _r59_t1;
                    return r57_currentGlyph['dontExport'] = true;
                };
                _r57_t0['gizmo'] = r4_globalTransform;
                _r57_t0['set-width'](r4_WIDTH);
                r57_fine = (r55__fine || r4_STROKE) / 2;
                _r57_t4 = r57_include;
                _r57_t5 = r57_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r55_x, r55_ydown);
                _r57_t6 = _r57_t5['heads-to'];
                if (r55_ydown < r55_yup)
                    _r57_t7 = r4_UPWARD;
                else
                    _r57_t7 = r4_DOWNWARD;
                _r57_t8 = _r57_t6['call'](_r57_t5, _r57_t7);
                _r57_t9 = _r57_t8['set-width'];
                _r57_t10 = r57_fine;
                _r57_t11 = r57_fine;
                _r57_t12 = _r57_t9['call'](_r57_t8, _r57_t10, _r57_t11);
                _r57_t13 = _r57_t12['line-to'];
                _r57_t14 = r55_x;
                _r57_t15 = r55_yup;
                _r57_t16 = _r57_t13['call'](_r57_t12, _r57_t14, _r57_t15);
                _r57_t17 = _r57_t16['heads-to'];
                if (r55_ydown < r55_yup)
                    _r57_t18 = r4_UPWARD;
                else
                    _r57_t18 = r4_DOWNWARD;
                _r57_t19 = _r57_t17['call'](_r57_t16, _r57_t18);
                _r57_t4(_r57_t19);
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t54() {
            var r61_currentGlyph, r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_include, r61_xn$createstroke$7Hrq, r61_xn$setanchor$9Jrj, r61_xn$dontexport$5sIl, _r61_t0, _r61_t1, _r61_t2, _r61_t3;
            _r61_t0 = this;
            r61_currentGlyph = _r61_t0;
            r61_xn$setwidth$9Jrj = _r61_t0['set-width']['bind'](_r61_t0);
            r61_xn$assignunicode$7Hrq = function _r61_t2(r62_code) {
                var r62_code, _r62_t0, _r62_t1;
                r61_currentGlyph['assign-unicode'](r62_code);
                return r4_unicodeGlyphs[r61_currentGlyph['unicode'][r61_currentGlyph['unicode']['length'] - 1]] = r61_currentGlyph;
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
            r61_xn$dontexport$5sIl = function _r61_t3() {
                var _r63_t0, _r63_t1;
                return r61_currentGlyph['dontExport'] = true;
            };
            _r61_t0['gizmo'] = r4_globalTransform;
            _r61_t0['set-width'](r4_WIDTH);
            r61_xn$setwidth$9Jrj(0);
            r61_xn$assignunicode$7Hrq(775);
            r61_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r61_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t55() {
            var r65_currentGlyph, r65_xn$setwidth$9Jrj, r65_xn$assignunicode$7Hrq, r65_xn$startfrom$1aao, r65_xn$lineto$5sIl, r65_xn$curveto$1aao, r65_xn$cubicto$1aao, r65_xn$putshapes$9Jrj, r65_xn$reverselast$3qIs, r65_include, r65_xn$createstroke$7Hrq, r65_xn$setanchor$9Jrj, r65_xn$dontexport$5sIl, _r65_t0, _r65_t1, _r65_t2, _r65_t3;
            _r65_t0 = this;
            r65_currentGlyph = _r65_t0;
            r65_xn$setwidth$9Jrj = _r65_t0['set-width']['bind'](_r65_t0);
            r65_xn$assignunicode$7Hrq = function _r65_t2(r66_code) {
                var r66_code, _r66_t0, _r66_t1;
                r65_currentGlyph['assign-unicode'](r66_code);
                return r4_unicodeGlyphs[r65_currentGlyph['unicode'][r65_currentGlyph['unicode']['length'] - 1]] = r65_currentGlyph;
            };
            r65_xn$startfrom$1aao = _r65_t0['start-from']['bind'](_r65_t0);
            r65_xn$lineto$5sIl = _r65_t0['line-to']['bind'](_r65_t0);
            r65_xn$curveto$1aao = _r65_t0['curve-to']['bind'](_r65_t0);
            r65_xn$cubicto$1aao = _r65_t0['cubic-to']['bind'](_r65_t0);
            r65_xn$putshapes$9Jrj = _r65_t0['put-shapes']['bind'](_r65_t0);
            r65_xn$reverselast$3qIs = _r65_t0['reverse-last']['bind'](_r65_t0);
            r65_include = _r65_t0['include']['bind'](_r65_t0);
            r65_xn$createstroke$7Hrq = _r65_t0['create-stroke']['bind'](_r65_t0);
            r65_xn$setanchor$9Jrj = _r65_t0['set-anchor']['bind'](_r65_t0);
            r65_xn$dontexport$5sIl = function _r65_t3() {
                var _r67_t0, _r67_t1;
                return r65_currentGlyph['dontExport'] = true;
            };
            _r65_t0['gizmo'] = r4_globalTransform;
            _r65_t0['set-width'](r4_WIDTH);
            r65_xn$setwidth$9Jrj(0);
            r65_xn$assignunicode$7Hrq(776);
            r65_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r65_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t56() {
            var r69_currentGlyph, r69_xn$setwidth$9Jrj, r69_xn$assignunicode$7Hrq, r69_xn$startfrom$1aao, r69_xn$lineto$5sIl, r69_xn$curveto$1aao, r69_xn$cubicto$1aao, r69_xn$putshapes$9Jrj, r69_xn$reverselast$3qIs, r69_include, r69_xn$createstroke$7Hrq, r69_xn$setanchor$9Jrj, r69_xn$dontexport$5sIl, r69_radiusOut, r69_radiusIn, _r69_t0, _r69_t1, _r69_t2, _r69_t3;
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
            r69_xn$dontexport$5sIl = function _r69_t3() {
                var _r71_t0, _r71_t1;
                return r69_currentGlyph['dontExport'] = true;
            };
            _r69_t0['gizmo'] = r4_globalTransform;
            _r69_t0['set-width'](r4_WIDTH);
            r69_xn$setwidth$9Jrj(0);
            r69_xn$assignunicode$7Hrq(778);
            r69_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r69_radiusOut = r4_DOTRADIUS * 1.5;
            r69_radiusIn = r4_DOTRADIUS * 0.7;
            r69_include([
                r4_Ring(r4_XH + r4_ACCENT + r69_radiusOut, r4_XH + r4_ACCENT - r69_radiusOut, r4_markMiddle - r69_radiusOut, r4_markMiddle + r69_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r69_radiusIn, r4_XH + r4_ACCENT - r69_radiusIn, r4_markMiddle - r69_radiusIn, r4_markMiddle + r69_radiusIn)
            ]);
            r69_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t57() {
            var r73_currentGlyph, r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, r73_include, r73_xn$createstroke$7Hrq, r73_xn$setanchor$9Jrj, r73_xn$dontexport$5sIl, _r73_t0, _r73_t1, _r73_t2, _r73_t3;
            _r73_t0 = this;
            r73_currentGlyph = _r73_t0;
            r73_xn$setwidth$9Jrj = _r73_t0['set-width']['bind'](_r73_t0);
            r73_xn$assignunicode$7Hrq = function _r73_t2(r74_code) {
                var r74_code, _r74_t0, _r74_t1;
                r73_currentGlyph['assign-unicode'](r74_code);
                return r4_unicodeGlyphs[r73_currentGlyph['unicode'][r73_currentGlyph['unicode']['length'] - 1]] = r73_currentGlyph;
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
            r73_xn$dontexport$5sIl = function _r73_t3() {
                var _r75_t0, _r75_t1;
                return r73_currentGlyph['dontExport'] = true;
            };
            _r73_t0['gizmo'] = r4_globalTransform;
            _r73_t0['set-width'](r4_WIDTH);
            r73_xn$setwidth$9Jrj(0);
            r73_xn$assignunicode$7Hrq(768);
            r73_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r73_include(r73_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t58() {
            var r77_currentGlyph, r77_xn$setwidth$9Jrj, r77_xn$assignunicode$7Hrq, r77_xn$startfrom$1aao, r77_xn$lineto$5sIl, r77_xn$curveto$1aao, r77_xn$cubicto$1aao, r77_xn$putshapes$9Jrj, r77_xn$reverselast$3qIs, r77_include, r77_xn$createstroke$7Hrq, r77_xn$setanchor$9Jrj, r77_xn$dontexport$5sIl, _r77_t0, _r77_t1, _r77_t2, _r77_t3;
            _r77_t0 = this;
            r77_currentGlyph = _r77_t0;
            r77_xn$setwidth$9Jrj = _r77_t0['set-width']['bind'](_r77_t0);
            r77_xn$assignunicode$7Hrq = function _r77_t2(r78_code) {
                var r78_code, _r78_t0, _r78_t1;
                r77_currentGlyph['assign-unicode'](r78_code);
                return r4_unicodeGlyphs[r77_currentGlyph['unicode'][r77_currentGlyph['unicode']['length'] - 1]] = r77_currentGlyph;
            };
            r77_xn$startfrom$1aao = _r77_t0['start-from']['bind'](_r77_t0);
            r77_xn$lineto$5sIl = _r77_t0['line-to']['bind'](_r77_t0);
            r77_xn$curveto$1aao = _r77_t0['curve-to']['bind'](_r77_t0);
            r77_xn$cubicto$1aao = _r77_t0['cubic-to']['bind'](_r77_t0);
            r77_xn$putshapes$9Jrj = _r77_t0['put-shapes']['bind'](_r77_t0);
            r77_xn$reverselast$3qIs = _r77_t0['reverse-last']['bind'](_r77_t0);
            r77_include = _r77_t0['include']['bind'](_r77_t0);
            r77_xn$createstroke$7Hrq = _r77_t0['create-stroke']['bind'](_r77_t0);
            r77_xn$setanchor$9Jrj = _r77_t0['set-anchor']['bind'](_r77_t0);
            r77_xn$dontexport$5sIl = function _r77_t3() {
                var _r79_t0, _r79_t1;
                return r77_currentGlyph['dontExport'] = true;
            };
            _r77_t0['gizmo'] = r4_globalTransform;
            _r77_t0['set-width'](r4_WIDTH);
            r77_xn$setwidth$9Jrj(0);
            r77_xn$assignunicode$7Hrq(769);
            r77_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r77_include(r77_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t59() {
            var r81_currentGlyph, r81_xn$setwidth$9Jrj, r81_xn$assignunicode$7Hrq, r81_xn$startfrom$1aao, r81_xn$lineto$5sIl, r81_xn$curveto$1aao, r81_xn$cubicto$1aao, r81_xn$putshapes$9Jrj, r81_xn$reverselast$3qIs, r81_include, r81_xn$createstroke$7Hrq, r81_xn$setanchor$9Jrj, r81_xn$dontexport$5sIl, _r81_t0, _r81_t1, _r81_t2, _r81_t3;
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
            r81_xn$dontexport$5sIl = function _r81_t3() {
                var _r83_t0, _r83_t1;
                return r81_currentGlyph['dontExport'] = true;
            };
            _r81_t0['gizmo'] = r4_globalTransform;
            _r81_t0['set-width'](r4_WIDTH);
            r81_xn$setwidth$9Jrj(0);
            r81_xn$assignunicode$7Hrq(770);
            r81_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r81_include(r81_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r81_include(r81_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t60() {
            var r85_currentGlyph, r85_xn$setwidth$9Jrj, r85_xn$assignunicode$7Hrq, r85_xn$startfrom$1aao, r85_xn$lineto$5sIl, r85_xn$curveto$1aao, r85_xn$cubicto$1aao, r85_xn$putshapes$9Jrj, r85_xn$reverselast$3qIs, r85_include, r85_xn$createstroke$7Hrq, r85_xn$setanchor$9Jrj, r85_xn$dontexport$5sIl, _r85_t0, _r85_t1, _r85_t2, _r85_t3;
            _r85_t0 = this;
            r85_currentGlyph = _r85_t0;
            r85_xn$setwidth$9Jrj = _r85_t0['set-width']['bind'](_r85_t0);
            r85_xn$assignunicode$7Hrq = function _r85_t2(r86_code) {
                var r86_code, _r86_t0, _r86_t1;
                r85_currentGlyph['assign-unicode'](r86_code);
                return r4_unicodeGlyphs[r85_currentGlyph['unicode'][r85_currentGlyph['unicode']['length'] - 1]] = r85_currentGlyph;
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
            r85_xn$dontexport$5sIl = function _r85_t3() {
                var _r87_t0, _r87_t1;
                return r85_currentGlyph['dontExport'] = true;
            };
            _r85_t0['gizmo'] = r4_globalTransform;
            _r85_t0['set-width'](r4_WIDTH);
            r85_xn$setwidth$9Jrj(0);
            r85_xn$assignunicode$7Hrq(780);
            r85_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r85_include(r85_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r85_include(r85_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t61() {
            var r89_currentGlyph, r89_xn$setwidth$9Jrj, r89_xn$assignunicode$7Hrq, r89_xn$startfrom$1aao, r89_xn$lineto$5sIl, r89_xn$curveto$1aao, r89_xn$cubicto$1aao, r89_xn$putshapes$9Jrj, r89_xn$reverselast$3qIs, r89_include, r89_xn$createstroke$7Hrq, r89_xn$setanchor$9Jrj, r89_xn$dontexport$5sIl, r89_leftEnd, r89_rightEnd, r89_ttop, r89_tbot, r89_top, r89_bot, r89_tildeWave, r89_tildeWaveX, r89_tildeWaveEnd, _r89_t0, _r89_t1, _r89_t2, _r89_t3;
            _r89_t0 = this;
            r89_currentGlyph = _r89_t0;
            r89_xn$setwidth$9Jrj = _r89_t0['set-width']['bind'](_r89_t0);
            r89_xn$assignunicode$7Hrq = function _r89_t2(r90_code) {
                var r90_code, _r90_t0, _r90_t1;
                r89_currentGlyph['assign-unicode'](r90_code);
                return r4_unicodeGlyphs[r89_currentGlyph['unicode'][r89_currentGlyph['unicode']['length'] - 1]] = r89_currentGlyph;
            };
            r89_xn$startfrom$1aao = _r89_t0['start-from']['bind'](_r89_t0);
            r89_xn$lineto$5sIl = _r89_t0['line-to']['bind'](_r89_t0);
            r89_xn$curveto$1aao = _r89_t0['curve-to']['bind'](_r89_t0);
            r89_xn$cubicto$1aao = _r89_t0['cubic-to']['bind'](_r89_t0);
            r89_xn$putshapes$9Jrj = _r89_t0['put-shapes']['bind'](_r89_t0);
            r89_xn$reverselast$3qIs = _r89_t0['reverse-last']['bind'](_r89_t0);
            r89_include = _r89_t0['include']['bind'](_r89_t0);
            r89_xn$createstroke$7Hrq = _r89_t0['create-stroke']['bind'](_r89_t0);
            r89_xn$setanchor$9Jrj = _r89_t0['set-anchor']['bind'](_r89_t0);
            r89_xn$dontexport$5sIl = function _r89_t3() {
                var _r91_t0, _r91_t1;
                return r89_currentGlyph['dontExport'] = true;
            };
            _r89_t0['gizmo'] = r4_globalTransform;
            _r89_t0['set-width'](r4_WIDTH);
            r89_xn$setwidth$9Jrj(0);
            r89_xn$assignunicode$7Hrq(771);
            r89_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r89_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r89_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r89_ttop = r4_aboveMarkTop;
            r89_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r89_top = r89_ttop + r4_markFine * 2;
            r89_bot = r89_tbot - r4_markFine * 2;
            r89_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r89_tildeWaveX = 0.52;
            r89_tildeWaveEnd = 0;
            r89_include(r89_xn$createstroke$7Hrq()['start-from'](r89_leftEnd, r0_mix(r89_tbot, r89_ttop, r89_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r89_leftEnd, r89_rightEnd, r89_tildeWaveX), r0_mix(r89_bot, r89_top, r89_tildeWave), r0_mix(r89_leftEnd, r89_rightEnd, 1 - r89_tildeWaveX), r0_mix(r89_bot, r89_top, 1 - r89_tildeWave), r89_rightEnd, r0_mix(r89_tbot, r89_ttop, 1 - r89_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t62() {
            var r93_currentGlyph, r93_xn$setwidth$9Jrj, r93_xn$assignunicode$7Hrq, r93_xn$startfrom$1aao, r93_xn$lineto$5sIl, r93_xn$curveto$1aao, r93_xn$cubicto$1aao, r93_xn$putshapes$9Jrj, r93_xn$reverselast$3qIs, r93_include, r93_xn$createstroke$7Hrq, r93_xn$setanchor$9Jrj, r93_xn$dontexport$5sIl, r93_leftEnd, r93_rightEnd, _r93_t0, _r93_t1, _r93_t2, _r93_t3;
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
            r93_xn$dontexport$5sIl = function _r93_t3() {
                var _r95_t0, _r95_t1;
                return r93_currentGlyph['dontExport'] = true;
            };
            _r93_t0['gizmo'] = r4_globalTransform;
            _r93_t0['set-width'](r4_WIDTH);
            r93_xn$setwidth$9Jrj(0);
            r93_xn$assignunicode$7Hrq(772);
            r93_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r93_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r93_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r93_include(r93_xn$createstroke$7Hrq()['start-from'](r93_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r93_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t63() {
            var r97_currentGlyph, r97_xn$setwidth$9Jrj, r97_xn$assignunicode$7Hrq, r97_xn$startfrom$1aao, r97_xn$lineto$5sIl, r97_xn$curveto$1aao, r97_xn$cubicto$1aao, r97_xn$putshapes$9Jrj, r97_xn$reverselast$3qIs, r97_include, r97_xn$createstroke$7Hrq, r97_xn$setanchor$9Jrj, r97_xn$dontexport$5sIl, r97_leftEnd, r97_rightEnd, _r97_t0, _r97_t1, _r97_t2, _r97_t3;
            _r97_t0 = this;
            r97_currentGlyph = _r97_t0;
            r97_xn$setwidth$9Jrj = _r97_t0['set-width']['bind'](_r97_t0);
            r97_xn$assignunicode$7Hrq = function _r97_t2(r98_code) {
                var r98_code, _r98_t0, _r98_t1;
                r97_currentGlyph['assign-unicode'](r98_code);
                return r4_unicodeGlyphs[r97_currentGlyph['unicode'][r97_currentGlyph['unicode']['length'] - 1]] = r97_currentGlyph;
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
            r97_xn$dontexport$5sIl = function _r97_t3() {
                var _r99_t0, _r99_t1;
                return r97_currentGlyph['dontExport'] = true;
            };
            _r97_t0['gizmo'] = r4_globalTransform;
            _r97_t0['set-width'](r4_WIDTH);
            r97_xn$setwidth$9Jrj(0);
            r97_xn$assignunicode$7Hrq(774);
            r97_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r97_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r97_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r97_include(r97_xn$createstroke$7Hrq()['start-from'](r97_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r97_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t64() {
            var r101_currentGlyph, r101_xn$setwidth$9Jrj, r101_xn$assignunicode$7Hrq, r101_xn$startfrom$1aao, r101_xn$lineto$5sIl, r101_xn$curveto$1aao, r101_xn$cubicto$1aao, r101_xn$putshapes$9Jrj, r101_xn$reverselast$3qIs, r101_include, r101_xn$createstroke$7Hrq, r101_xn$setanchor$9Jrj, r101_xn$dontexport$5sIl, r101_fine, r101_hookBot, r101_hookTop, _r101_t0, _r101_t1, _r101_t2, _r101_t3;
            _r101_t0 = this;
            r101_currentGlyph = _r101_t0;
            r101_xn$setwidth$9Jrj = _r101_t0['set-width']['bind'](_r101_t0);
            r101_xn$assignunicode$7Hrq = function _r101_t2(r102_code) {
                var r102_code, _r102_t0, _r102_t1;
                r101_currentGlyph['assign-unicode'](r102_code);
                return r4_unicodeGlyphs[r101_currentGlyph['unicode'][r101_currentGlyph['unicode']['length'] - 1]] = r101_currentGlyph;
            };
            r101_xn$startfrom$1aao = _r101_t0['start-from']['bind'](_r101_t0);
            r101_xn$lineto$5sIl = _r101_t0['line-to']['bind'](_r101_t0);
            r101_xn$curveto$1aao = _r101_t0['curve-to']['bind'](_r101_t0);
            r101_xn$cubicto$1aao = _r101_t0['cubic-to']['bind'](_r101_t0);
            r101_xn$putshapes$9Jrj = _r101_t0['put-shapes']['bind'](_r101_t0);
            r101_xn$reverselast$3qIs = _r101_t0['reverse-last']['bind'](_r101_t0);
            r101_include = _r101_t0['include']['bind'](_r101_t0);
            r101_xn$createstroke$7Hrq = _r101_t0['create-stroke']['bind'](_r101_t0);
            r101_xn$setanchor$9Jrj = _r101_t0['set-anchor']['bind'](_r101_t0);
            r101_xn$dontexport$5sIl = function _r101_t3() {
                var _r103_t0, _r103_t1;
                return r101_currentGlyph['dontExport'] = true;
            };
            _r101_t0['gizmo'] = r4_globalTransform;
            _r101_t0['set-width'](r4_WIDTH);
            r101_xn$setwidth$9Jrj(0);
            r101_xn$assignunicode$7Hrq(777);
            r101_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r101_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r101_hookBot = r4_aboveMarkBot - r101_fine / 2;
            r101_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r101_fine / 2;
            r101_include(r101_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r101_fine * r4_ITALICCOR, r101_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r101_fine * 2, 0)['line-to'](r4_markMiddle + r101_fine * 0.5, r101_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r101_hookBot, r101_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r101_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r101_fine, r101_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t65() {
            var r105_currentGlyph, r105_xn$setwidth$9Jrj, r105_xn$assignunicode$7Hrq, r105_xn$startfrom$1aao, r105_xn$lineto$5sIl, r105_xn$curveto$1aao, r105_xn$cubicto$1aao, r105_xn$putshapes$9Jrj, r105_xn$reverselast$3qIs, r105_include, r105_xn$createstroke$7Hrq, r105_xn$setanchor$9Jrj, r105_xn$dontexport$5sIl, _r105_t0, _r105_t1, _r105_t2, _r105_t3;
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
            r105_xn$dontexport$5sIl = function _r105_t3() {
                var _r107_t0, _r107_t1;
                return r105_currentGlyph['dontExport'] = true;
            };
            _r105_t0['gizmo'] = r4_globalTransform;
            _r105_t0['set-width'](r4_WIDTH);
            r105_xn$setwidth$9Jrj(0);
            r105_xn$assignunicode$7Hrq(803);
            r105_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r105_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t66() {
            var r109_currentGlyph, r109_xn$setwidth$9Jrj, r109_xn$assignunicode$7Hrq, r109_xn$startfrom$1aao, r109_xn$lineto$5sIl, r109_xn$curveto$1aao, r109_xn$cubicto$1aao, r109_xn$putshapes$9Jrj, r109_xn$reverselast$3qIs, r109_include, r109_xn$createstroke$7Hrq, r109_xn$setanchor$9Jrj, r109_xn$dontexport$5sIl, r109_fine, r109_cedillaTop, r109_cedillaBot, _r109_t0, _r109_t1, _r109_t2, _r109_t3;
            _r109_t0 = this;
            r109_currentGlyph = _r109_t0;
            r109_xn$setwidth$9Jrj = _r109_t0['set-width']['bind'](_r109_t0);
            r109_xn$assignunicode$7Hrq = function _r109_t2(r110_code) {
                var r110_code, _r110_t0, _r110_t1;
                r109_currentGlyph['assign-unicode'](r110_code);
                return r4_unicodeGlyphs[r109_currentGlyph['unicode'][r109_currentGlyph['unicode']['length'] - 1]] = r109_currentGlyph;
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
            r109_xn$dontexport$5sIl = function _r109_t3() {
                var _r111_t0, _r111_t1;
                return r109_currentGlyph['dontExport'] = true;
            };
            _r109_t0['gizmo'] = r4_globalTransform;
            _r109_t0['set-width'](r4_WIDTH);
            r109_xn$setwidth$9Jrj(0);
            r109_xn$assignunicode$7Hrq(807);
            r109_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r109_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r109_cedillaTop = r4_belowMarkTop + r109_fine * 0.85;
            r109_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r109_include(r109_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r109_fine * r4_ITALICCOR, r109_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r109_fine * 2)['line-to'](r4_markMiddle + r109_fine * 0.5, r109_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r109_cedillaTop, r109_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r109_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r109_cedillaBot)['heads-to'](r4_LEFTWARD));
            r109_include(r109_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r109_fine, r109_fine)['line-to'](r4_markMiddle, r109_cedillaTop - r109_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t67() {
            var r113_currentGlyph, r113_xn$setwidth$9Jrj, r113_xn$assignunicode$7Hrq, r113_xn$startfrom$1aao, r113_xn$lineto$5sIl, r113_xn$curveto$1aao, r113_xn$cubicto$1aao, r113_xn$putshapes$9Jrj, r113_xn$reverselast$3qIs, r113_include, r113_xn$createstroke$7Hrq, r113_xn$setanchor$9Jrj, r113_xn$dontexport$5sIl, r113_TURN, _r113_t0, _r113_t1, _r113_t2, _r113_t3;
            _r113_t0 = this;
            r113_currentGlyph = _r113_t0;
            r113_xn$setwidth$9Jrj = _r113_t0['set-width']['bind'](_r113_t0);
            r113_xn$assignunicode$7Hrq = function _r113_t2(r114_code) {
                var r114_code, _r114_t0, _r114_t1;
                r113_currentGlyph['assign-unicode'](r114_code);
                return r4_unicodeGlyphs[r113_currentGlyph['unicode'][r113_currentGlyph['unicode']['length'] - 1]] = r113_currentGlyph;
            };
            r113_xn$startfrom$1aao = _r113_t0['start-from']['bind'](_r113_t0);
            r113_xn$lineto$5sIl = _r113_t0['line-to']['bind'](_r113_t0);
            r113_xn$curveto$1aao = _r113_t0['curve-to']['bind'](_r113_t0);
            r113_xn$cubicto$1aao = _r113_t0['cubic-to']['bind'](_r113_t0);
            r113_xn$putshapes$9Jrj = _r113_t0['put-shapes']['bind'](_r113_t0);
            r113_xn$reverselast$3qIs = _r113_t0['reverse-last']['bind'](_r113_t0);
            r113_include = _r113_t0['include']['bind'](_r113_t0);
            r113_xn$createstroke$7Hrq = _r113_t0['create-stroke']['bind'](_r113_t0);
            r113_xn$setanchor$9Jrj = _r113_t0['set-anchor']['bind'](_r113_t0);
            r113_xn$dontexport$5sIl = function _r113_t3() {
                var _r115_t0, _r115_t1;
                return r113_currentGlyph['dontExport'] = true;
            };
            _r113_t0['gizmo'] = r4_globalTransform;
            _r113_t0['set-width'](r4_WIDTH);
            r113_xn$setwidth$9Jrj(r4_WIDTH);
            r113_xn$assignunicode$7Hrq('A');
            r113_include(r4_capitalMarks);
            r113_TURN = r4_XH * 0.1;
            r113_include(r113_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r113_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r113_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r113_include(r113_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r113_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r113_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r113_include(r113_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r113_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r113_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r113_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t68() {
            var r117_currentGlyph, r117_xn$setwidth$9Jrj, r117_xn$assignunicode$7Hrq, r117_xn$startfrom$1aao, r117_xn$lineto$5sIl, r117_xn$curveto$1aao, r117_xn$cubicto$1aao, r117_xn$putshapes$9Jrj, r117_xn$reverselast$3qIs, r117_include, r117_xn$createstroke$7Hrq, r117_xn$setanchor$9Jrj, r117_xn$dontexport$5sIl, r117_TURN, _r117_t0, _r117_t1, _r117_t2, _r117_t3;
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
            r117_xn$dontexport$5sIl = function _r117_t3() {
                var _r119_t0, _r119_t1;
                return r117_currentGlyph['dontExport'] = true;
            };
            _r117_t0['gizmo'] = r4_globalTransform;
            _r117_t0['set-width'](r4_WIDTH);
            r117_xn$setwidth$9Jrj(r4_WIDTH);
            r117_xn$assignunicode$7Hrq('V');
            r117_include(r4_capitalMarks);
            r117_TURN = r4_CAP * 0.9;
            r117_include(r117_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r117_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r117_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r117_include(r117_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r117_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r117_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r117_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r117_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r117_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t69() {
            var r121_currentGlyph, r121_xn$setwidth$9Jrj, r121_xn$assignunicode$7Hrq, r121_xn$startfrom$1aao, r121_xn$lineto$5sIl, r121_xn$curveto$1aao, r121_xn$cubicto$1aao, r121_xn$putshapes$9Jrj, r121_xn$reverselast$3qIs, r121_include, r121_xn$createstroke$7Hrq, r121_xn$setanchor$9Jrj, r121_xn$dontexport$5sIl, r121_TURN, r121_turn2, r121_wheight, r121_bottomStroke, r121_m1, r121_m2, _r121_t0, _r121_t1, _r121_t2, _r121_t3;
            _r121_t0 = this;
            r121_currentGlyph = _r121_t0;
            r121_xn$setwidth$9Jrj = _r121_t0['set-width']['bind'](_r121_t0);
            r121_xn$assignunicode$7Hrq = function _r121_t2(r122_code) {
                var r122_code, _r122_t0, _r122_t1;
                r121_currentGlyph['assign-unicode'](r122_code);
                return r4_unicodeGlyphs[r121_currentGlyph['unicode'][r121_currentGlyph['unicode']['length'] - 1]] = r121_currentGlyph;
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
            r121_xn$dontexport$5sIl = function _r121_t3() {
                var _r123_t0, _r123_t1;
                return r121_currentGlyph['dontExport'] = true;
            };
            _r121_t0['gizmo'] = r4_globalTransform;
            _r121_t0['set-width'](r4_WIDTH);
            r121_xn$setwidth$9Jrj(r4_WIDTH);
            r121_xn$assignunicode$7Hrq('W');
            r121_include(r4_capitalMarks);
            r121_TURN = r4_CAP * 0.75;
            r121_turn2 = r4_CAP * 0.59;
            r121_wheight = r4_CAP * 0.6;
            r121_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r121_m1 = r4_WIDTH * 0.3;
            r121_m2 = r4_WIDTH * 0.7;
            r121_include(r121_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r121_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r121_TURN, r121_m1 - r121_bottomStroke / 2, 0)['set-width'](r121_bottomStroke, 0));
            r121_include(r121_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r121_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r121_TURN, r121_m2 + r121_bottomStroke / 2, 0)['set-width'](0, r121_bottomStroke));
            r121_include(r121_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r121_bottomStroke / 2, r121_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r121_bottomStroke)['line-to'](r4_MIDDLE + r121_bottomStroke / 2, r121_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r121_bottomStroke / 2, (1 - 0.1) * r121_turn2, r121_m1 + r121_bottomStroke / 2, 0)['set-width'](0, r121_bottomStroke));
            r121_include(r121_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r121_bottomStroke / 2, r121_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r121_bottomStroke, 0)['line-to'](r4_MIDDLE - r121_bottomStroke / 2, r121_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r121_bottomStroke / 2, (1 - 0.1) * r121_turn2, r121_m2 - r121_bottomStroke / 2, 0)['set-width'](r121_bottomStroke, 0));
            r121_xn$startfrom$1aao(r121_m1 + r121_bottomStroke / 2, 0);
            r121_xn$lineto$5sIl(r121_m1 - r121_bottomStroke / 2, 0);
            r121_xn$lineto$5sIl(r121_m1, r121_bottomStroke);
            r121_xn$startfrom$1aao(r121_m2 + r121_bottomStroke / 2, 0);
            r121_xn$lineto$5sIl(r121_m2 - r121_bottomStroke / 2, 0);
            r121_xn$lineto$5sIl(r121_m2, r121_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t70() {
            var r125_currentGlyph, r125_xn$setwidth$9Jrj, r125_xn$assignunicode$7Hrq, r125_xn$startfrom$1aao, r125_xn$lineto$5sIl, r125_xn$curveto$1aao, r125_xn$cubicto$1aao, r125_xn$putshapes$9Jrj, r125_xn$reverselast$3qIs, r125_include, r125_xn$createstroke$7Hrq, r125_xn$setanchor$9Jrj, r125_xn$dontexport$5sIl, _r125_t0, _r125_t1, _r125_t2, _r125_t3;
            _r125_t0 = this;
            r125_currentGlyph = _r125_t0;
            r125_xn$setwidth$9Jrj = _r125_t0['set-width']['bind'](_r125_t0);
            r125_xn$assignunicode$7Hrq = function _r125_t2(r126_code) {
                var r126_code, _r126_t0, _r126_t1;
                r125_currentGlyph['assign-unicode'](r126_code);
                return r4_unicodeGlyphs[r125_currentGlyph['unicode'][r125_currentGlyph['unicode']['length'] - 1]] = r125_currentGlyph;
            };
            r125_xn$startfrom$1aao = _r125_t0['start-from']['bind'](_r125_t0);
            r125_xn$lineto$5sIl = _r125_t0['line-to']['bind'](_r125_t0);
            r125_xn$curveto$1aao = _r125_t0['curve-to']['bind'](_r125_t0);
            r125_xn$cubicto$1aao = _r125_t0['cubic-to']['bind'](_r125_t0);
            r125_xn$putshapes$9Jrj = _r125_t0['put-shapes']['bind'](_r125_t0);
            r125_xn$reverselast$3qIs = _r125_t0['reverse-last']['bind'](_r125_t0);
            r125_include = _r125_t0['include']['bind'](_r125_t0);
            r125_xn$createstroke$7Hrq = _r125_t0['create-stroke']['bind'](_r125_t0);
            r125_xn$setanchor$9Jrj = _r125_t0['set-anchor']['bind'](_r125_t0);
            r125_xn$dontexport$5sIl = function _r125_t3() {
                var _r127_t0, _r127_t1;
                return r125_currentGlyph['dontExport'] = true;
            };
            _r125_t0['gizmo'] = r4_globalTransform;
            _r125_t0['set-width'](r4_WIDTH);
            r125_xn$setwidth$9Jrj(r4_WIDTH);
            r125_xn$assignunicode$7Hrq('X');
            r125_include(r4_capitalMarks);
            r125_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r125_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t71() {
            var r129_currentGlyph, r129_xn$setwidth$9Jrj, r129_xn$assignunicode$7Hrq, r129_xn$startfrom$1aao, r129_xn$lineto$5sIl, r129_xn$curveto$1aao, r129_xn$cubicto$1aao, r129_xn$putshapes$9Jrj, r129_xn$reverselast$3qIs, r129_include, r129_xn$createstroke$7Hrq, r129_xn$setanchor$9Jrj, r129_xn$dontexport$5sIl, r129_cross, _r129_t0, _r129_t1, _r129_t2, _r129_t3;
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
            r129_xn$dontexport$5sIl = function _r129_t3() {
                var _r131_t0, _r131_t1;
                return r129_currentGlyph['dontExport'] = true;
            };
            _r129_t0['gizmo'] = r4_globalTransform;
            _r129_t0['set-width'](r4_WIDTH);
            r129_xn$setwidth$9Jrj(r4_WIDTH);
            r129_xn$assignunicode$7Hrq('Y');
            r129_include(r4_capitalMarks);
            r129_cross = r4_CAP * 0.4;
            r129_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r129_cross, 0.1, 0.4, 0.28));
            r129_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r129_cross, 0.1, 0.4, 0.28));
            r129_include(r129_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r129_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t72() {
            var r133_currentGlyph, r133_xn$setwidth$9Jrj, r133_xn$assignunicode$7Hrq, r133_xn$startfrom$1aao, r133_xn$lineto$5sIl, r133_xn$curveto$1aao, r133_xn$cubicto$1aao, r133_xn$putshapes$9Jrj, r133_xn$reverselast$3qIs, r133_include, r133_xn$createstroke$7Hrq, r133_xn$setanchor$9Jrj, r133_xn$dontexport$5sIl, r133_TURN, r133_rturn, r133_right, r133_fine, _r133_t0, _r133_t1, _r133_t2, _r133_t3;
            _r133_t0 = this;
            r133_currentGlyph = _r133_t0;
            r133_xn$setwidth$9Jrj = _r133_t0['set-width']['bind'](_r133_t0);
            r133_xn$assignunicode$7Hrq = function _r133_t2(r134_code) {
                var r134_code, _r134_t0, _r134_t1;
                r133_currentGlyph['assign-unicode'](r134_code);
                return r4_unicodeGlyphs[r133_currentGlyph['unicode'][r133_currentGlyph['unicode']['length'] - 1]] = r133_currentGlyph;
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
            r133_xn$dontexport$5sIl = function _r133_t3() {
                var _r135_t0, _r135_t1;
                return r133_currentGlyph['dontExport'] = true;
            };
            _r133_t0['gizmo'] = r4_globalTransform;
            _r133_t0['set-width'](r4_WIDTH);
            r133_xn$setwidth$9Jrj(r4_WIDTH);
            r133_xn$assignunicode$7Hrq('K');
            r133_include(r4_capitalMarks);
            r133_TURN = r4_CAP * 0.95;
            r133_rturn = r4_XH * 0.1;
            r133_right = r4_RIGHTSB - r4_O;
            r133_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r133_include(r133_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r133_include(r133_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r133_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r133_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r133_fine));
            r133_include(r133_xn$createstroke$7Hrq()['start-from'](r133_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r133_right - r4_HALFSTROKE, r133_rturn + 0.2 * (r4_XH - r133_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r133_fine / 2, r133_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t73() {
            var r137_currentGlyph, r137_xn$setwidth$9Jrj, r137_xn$assignunicode$7Hrq, r137_xn$startfrom$1aao, r137_xn$lineto$5sIl, r137_xn$curveto$1aao, r137_xn$cubicto$1aao, r137_xn$putshapes$9Jrj, r137_xn$reverselast$3qIs, r137_include, r137_xn$createstroke$7Hrq, r137_xn$setanchor$9Jrj, r137_xn$dontexport$5sIl, r137_bowl, r137_tkappa, r137_bkappa, r137_turntop, r137_turnbottom, _r137_t0, _r137_t1, _r137_t2, _r137_t3;
            _r137_t0 = this;
            r137_currentGlyph = _r137_t0;
            r137_xn$setwidth$9Jrj = _r137_t0['set-width']['bind'](_r137_t0);
            r137_xn$assignunicode$7Hrq = function _r137_t2(r138_code) {
                var r138_code, _r138_t0, _r138_t1;
                r137_currentGlyph['assign-unicode'](r138_code);
                return r4_unicodeGlyphs[r137_currentGlyph['unicode'][r137_currentGlyph['unicode']['length'] - 1]] = r137_currentGlyph;
            };
            r137_xn$startfrom$1aao = _r137_t0['start-from']['bind'](_r137_t0);
            r137_xn$lineto$5sIl = _r137_t0['line-to']['bind'](_r137_t0);
            r137_xn$curveto$1aao = _r137_t0['curve-to']['bind'](_r137_t0);
            r137_xn$cubicto$1aao = _r137_t0['cubic-to']['bind'](_r137_t0);
            r137_xn$putshapes$9Jrj = _r137_t0['put-shapes']['bind'](_r137_t0);
            r137_xn$reverselast$3qIs = _r137_t0['reverse-last']['bind'](_r137_t0);
            r137_include = _r137_t0['include']['bind'](_r137_t0);
            r137_xn$createstroke$7Hrq = _r137_t0['create-stroke']['bind'](_r137_t0);
            r137_xn$setanchor$9Jrj = _r137_t0['set-anchor']['bind'](_r137_t0);
            r137_xn$dontexport$5sIl = function _r137_t3() {
                var _r139_t0, _r139_t1;
                return r137_currentGlyph['dontExport'] = true;
            };
            _r137_t0['gizmo'] = r4_globalTransform;
            _r137_t0['set-width'](r4_WIDTH);
            r137_xn$setwidth$9Jrj(r4_WIDTH);
            r137_xn$assignunicode$7Hrq('B');
            r137_include(r4_capitalMarks);
            r137_bowl = 451;
            r137_tkappa = r4_COKAPPA - 0.22;
            r137_bkappa = r4_COKAPPA - 0.2;
            r137_turntop = (r4_CAP + (r137_bowl - r4_STROKE)) / 2;
            r137_turnbottom = r137_bowl / 2;
            r137_include(r137_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r137_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r137_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r137_turnbottom, r137_bowl - r4_STROKE)['line-to'](r4_SB, r137_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r137_include(r137_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r137_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r137_turnbottom)['arc-vh-to'](r4_RIGHTSB - r137_turnbottom, r137_bowl)['line-to'](r4_SB, r137_bowl)['heads-to'](r4_LEFTWARD));
            r137_include(r137_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t74() {
            var r141_currentGlyph, r141_xn$setwidth$9Jrj, r141_xn$assignunicode$7Hrq, r141_xn$startfrom$1aao, r141_xn$lineto$5sIl, r141_xn$curveto$1aao, r141_xn$cubicto$1aao, r141_xn$putshapes$9Jrj, r141_xn$reverselast$3qIs, r141_include, r141_xn$createstroke$7Hrq, r141_xn$setanchor$9Jrj, r141_xn$dontexport$5sIl, r141_dsmooth, r141_bsmooth, _r141_t0, _r141_t1, _r141_t2, _r141_t3;
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
            r141_xn$dontexport$5sIl = function _r141_t3() {
                var _r143_t0, _r143_t1;
                return r141_currentGlyph['dontExport'] = true;
            };
            _r141_t0['gizmo'] = r4_globalTransform;
            _r141_t0['set-width'](r4_WIDTH);
            r141_xn$setwidth$9Jrj(r4_WIDTH);
            r141_xn$assignunicode$7Hrq('D');
            r141_include(r4_capitalMarks);
            r141_dsmooth = r4_SMOOTH * 1.35;
            r141_bsmooth = r4_SMOOTH * 1.1;
            r141_include(r141_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r141_include(r141_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r141_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r141_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r141_dsmooth)['arc-vh-to'](r4_RIGHTSB - r141_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t75() {
            var r145_currentGlyph, r145_xn$setwidth$9Jrj, r145_xn$assignunicode$7Hrq, r145_xn$startfrom$1aao, r145_xn$lineto$5sIl, r145_xn$curveto$1aao, r145_xn$cubicto$1aao, r145_xn$putshapes$9Jrj, r145_xn$reverselast$3qIs, r145_include, r145_xn$createstroke$7Hrq, r145_xn$setanchor$9Jrj, r145_xn$dontexport$5sIl, r145_bowlTop, r145_bowlBottom, r145_bkappa, r145_turn, r145_turnRadius, _r145_t0, _r145_t1, _r145_t2, _r145_t3;
            _r145_t0 = this;
            r145_currentGlyph = _r145_t0;
            r145_xn$setwidth$9Jrj = _r145_t0['set-width']['bind'](_r145_t0);
            r145_xn$assignunicode$7Hrq = function _r145_t2(r146_code) {
                var r146_code, _r146_t0, _r146_t1;
                r145_currentGlyph['assign-unicode'](r146_code);
                return r4_unicodeGlyphs[r145_currentGlyph['unicode'][r145_currentGlyph['unicode']['length'] - 1]] = r145_currentGlyph;
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
            r145_xn$dontexport$5sIl = function _r145_t3() {
                var _r147_t0, _r147_t1;
                return r145_currentGlyph['dontExport'] = true;
            };
            _r145_t0['gizmo'] = r4_globalTransform;
            _r145_t0['set-width'](r4_WIDTH);
            r145_xn$setwidth$9Jrj(r4_WIDTH);
            r145_xn$assignunicode$7Hrq('P');
            r145_include(r4_capitalMarks);
            r145_bowlTop = r4_CAP * 1;
            r145_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r145_bkappa = r4_COKAPPA - 0.2;
            r145_turn = r0_mix(r145_bowlTop, r145_bowlBottom, 0.5);
            r145_turnRadius = (r145_bowlTop - r145_bowlBottom) / 2;
            r145_include(r145_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r145_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r145_turnRadius, r145_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r145_turn)['arc-vh-to'](r4_RIGHTSB - r145_turnRadius, r145_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r145_bowlBottom)['heads-to'](r4_LEFTWARD));
            r145_include(r145_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t76() {
            var r149_currentGlyph, r149_xn$setwidth$9Jrj, r149_xn$assignunicode$7Hrq, r149_xn$startfrom$1aao, r149_xn$lineto$5sIl, r149_xn$curveto$1aao, r149_xn$cubicto$1aao, r149_xn$putshapes$9Jrj, r149_xn$reverselast$3qIs, r149_include, r149_xn$createstroke$7Hrq, r149_xn$setanchor$9Jrj, r149_xn$dontexport$5sIl, r149_TURN, r149_right, _r149_t0, _r149_t1, _r149_t2, _r149_t3;
            _r149_t0 = this;
            r149_currentGlyph = _r149_t0;
            r149_xn$setwidth$9Jrj = _r149_t0['set-width']['bind'](_r149_t0);
            r149_xn$assignunicode$7Hrq = function _r149_t2(r150_code) {
                var r150_code, _r150_t0, _r150_t1;
                r149_currentGlyph['assign-unicode'](r150_code);
                return r4_unicodeGlyphs[r149_currentGlyph['unicode'][r149_currentGlyph['unicode']['length'] - 1]] = r149_currentGlyph;
            };
            r149_xn$startfrom$1aao = _r149_t0['start-from']['bind'](_r149_t0);
            r149_xn$lineto$5sIl = _r149_t0['line-to']['bind'](_r149_t0);
            r149_xn$curveto$1aao = _r149_t0['curve-to']['bind'](_r149_t0);
            r149_xn$cubicto$1aao = _r149_t0['cubic-to']['bind'](_r149_t0);
            r149_xn$putshapes$9Jrj = _r149_t0['put-shapes']['bind'](_r149_t0);
            r149_xn$reverselast$3qIs = _r149_t0['reverse-last']['bind'](_r149_t0);
            r149_include = _r149_t0['include']['bind'](_r149_t0);
            r149_xn$createstroke$7Hrq = _r149_t0['create-stroke']['bind'](_r149_t0);
            r149_xn$setanchor$9Jrj = _r149_t0['set-anchor']['bind'](_r149_t0);
            r149_xn$dontexport$5sIl = function _r149_t3() {
                var _r151_t0, _r151_t1;
                return r149_currentGlyph['dontExport'] = true;
            };
            _r149_t0['gizmo'] = r4_globalTransform;
            _r149_t0['set-width'](r4_WIDTH);
            r149_xn$setwidth$9Jrj(r4_WIDTH);
            r149_xn$assignunicode$7Hrq('R');
            r149_include(r4_glyphs['P'], r4_AS_BASE);
            r149_TURN = r4_XH * 0.1;
            r149_right = r4_RIGHTSB - r4_O;
            r149_include(r149_xn$createstroke$7Hrq()['start-from'](r149_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r149_right - r4_HALFSTROKE, r149_TURN + 0.2 * (r4_XH - r149_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t77() {
            var r153_currentGlyph, r153_xn$setwidth$9Jrj, r153_xn$assignunicode$7Hrq, r153_xn$startfrom$1aao, r153_xn$lineto$5sIl, r153_xn$curveto$1aao, r153_xn$cubicto$1aao, r153_xn$putshapes$9Jrj, r153_xn$reverselast$3qIs, r153_include, r153_xn$createstroke$7Hrq, r153_xn$setanchor$9Jrj, r153_xn$dontexport$5sIl, _r153_t0, _r153_t1, _r153_t2, _r153_t3;
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
            r153_xn$dontexport$5sIl = function _r153_t3() {
                var _r155_t0, _r155_t1;
                return r153_currentGlyph['dontExport'] = true;
            };
            _r153_t0['gizmo'] = r4_globalTransform;
            _r153_t0['set-width'](r4_WIDTH);
            r153_xn$setwidth$9Jrj(r4_WIDTH);
            r153_xn$assignunicode$7Hrq('C');
            r153_include(r4_capitalMarks);
            r153_include(r153_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t78() {
            var r157_currentGlyph, r157_xn$setwidth$9Jrj, r157_xn$assignunicode$7Hrq, r157_xn$startfrom$1aao, r157_xn$lineto$5sIl, r157_xn$curveto$1aao, r157_xn$cubicto$1aao, r157_xn$putshapes$9Jrj, r157_xn$reverselast$3qIs, r157_include, r157_xn$createstroke$7Hrq, r157_xn$setanchor$9Jrj, r157_xn$dontexport$5sIl, _r157_t0, _r157_t1, _r157_t2, _r157_t3;
            _r157_t0 = this;
            r157_currentGlyph = _r157_t0;
            r157_xn$setwidth$9Jrj = _r157_t0['set-width']['bind'](_r157_t0);
            r157_xn$assignunicode$7Hrq = function _r157_t2(r158_code) {
                var r158_code, _r158_t0, _r158_t1;
                r157_currentGlyph['assign-unicode'](r158_code);
                return r4_unicodeGlyphs[r157_currentGlyph['unicode'][r157_currentGlyph['unicode']['length'] - 1]] = r157_currentGlyph;
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
            r157_xn$dontexport$5sIl = function _r157_t3() {
                var _r159_t0, _r159_t1;
                return r157_currentGlyph['dontExport'] = true;
            };
            _r157_t0['gizmo'] = r4_globalTransform;
            _r157_t0['set-width'](r4_WIDTH);
            r157_xn$setwidth$9Jrj(r4_WIDTH);
            r157_xn$assignunicode$7Hrq('G');
            r157_include(r4_capitalMarks);
            r157_include(r157_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r157_include(r157_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t79() {
            var r161_currentGlyph, r161_xn$setwidth$9Jrj, r161_xn$assignunicode$7Hrq, r161_xn$startfrom$1aao, r161_xn$lineto$5sIl, r161_xn$curveto$1aao, r161_xn$cubicto$1aao, r161_xn$putshapes$9Jrj, r161_xn$reverselast$3qIs, r161_include, r161_xn$createstroke$7Hrq, r161_xn$setanchor$9Jrj, r161_xn$dontexport$5sIl, _r161_t0, _r161_t1, _r161_t2, _r161_t3;
            _r161_t0 = this;
            r161_currentGlyph = _r161_t0;
            r161_xn$setwidth$9Jrj = _r161_t0['set-width']['bind'](_r161_t0);
            r161_xn$assignunicode$7Hrq = function _r161_t2(r162_code) {
                var r162_code, _r162_t0, _r162_t1;
                r161_currentGlyph['assign-unicode'](r162_code);
                return r4_unicodeGlyphs[r161_currentGlyph['unicode'][r161_currentGlyph['unicode']['length'] - 1]] = r161_currentGlyph;
            };
            r161_xn$startfrom$1aao = _r161_t0['start-from']['bind'](_r161_t0);
            r161_xn$lineto$5sIl = _r161_t0['line-to']['bind'](_r161_t0);
            r161_xn$curveto$1aao = _r161_t0['curve-to']['bind'](_r161_t0);
            r161_xn$cubicto$1aao = _r161_t0['cubic-to']['bind'](_r161_t0);
            r161_xn$putshapes$9Jrj = _r161_t0['put-shapes']['bind'](_r161_t0);
            r161_xn$reverselast$3qIs = _r161_t0['reverse-last']['bind'](_r161_t0);
            r161_include = _r161_t0['include']['bind'](_r161_t0);
            r161_xn$createstroke$7Hrq = _r161_t0['create-stroke']['bind'](_r161_t0);
            r161_xn$setanchor$9Jrj = _r161_t0['set-anchor']['bind'](_r161_t0);
            r161_xn$dontexport$5sIl = function _r161_t3() {
                var _r163_t0, _r163_t1;
                return r161_currentGlyph['dontExport'] = true;
            };
            _r161_t0['gizmo'] = r4_globalTransform;
            _r161_t0['set-width'](r4_WIDTH);
            r161_xn$setwidth$9Jrj(r4_WIDTH);
            r161_xn$assignunicode$7Hrq('O');
            r161_include(r4_capitalMarks);
            r161_include(r161_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t80() {
            var r165_currentGlyph, r165_xn$setwidth$9Jrj, r165_xn$assignunicode$7Hrq, r165_xn$startfrom$1aao, r165_xn$lineto$5sIl, r165_xn$curveto$1aao, r165_xn$cubicto$1aao, r165_xn$putshapes$9Jrj, r165_xn$reverselast$3qIs, r165_include, r165_xn$createstroke$7Hrq, r165_xn$setanchor$9Jrj, r165_xn$dontexport$5sIl, _r165_t0, _r165_t1, _r165_t2, _r165_t3;
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
            r165_xn$dontexport$5sIl = function _r165_t3() {
                var _r167_t0, _r167_t1;
                return r165_currentGlyph['dontExport'] = true;
            };
            _r165_t0['gizmo'] = r4_globalTransform;
            _r165_t0['set-width'](r4_WIDTH);
            r165_xn$setwidth$9Jrj(r4_WIDTH);
            r165_xn$assignunicode$7Hrq('Q');
            r165_include(r4_glyphs['O'], r4_AS_BASE);
            r165_xn$startfrom$1aao(r4_MIDDLE, 0);
            r165_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r165_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r165_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r165_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r165_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t81() {
            var r169_currentGlyph, r169_xn$setwidth$9Jrj, r169_xn$assignunicode$7Hrq, r169_xn$startfrom$1aao, r169_xn$lineto$5sIl, r169_xn$curveto$1aao, r169_xn$cubicto$1aao, r169_xn$putshapes$9Jrj, r169_xn$reverselast$3qIs, r169_include, r169_xn$createstroke$7Hrq, r169_xn$setanchor$9Jrj, r169_xn$dontexport$5sIl, _r169_t0, _r169_t1, _r169_t2, _r169_t3;
            _r169_t0 = this;
            r169_currentGlyph = _r169_t0;
            r169_xn$setwidth$9Jrj = _r169_t0['set-width']['bind'](_r169_t0);
            r169_xn$assignunicode$7Hrq = function _r169_t2(r170_code) {
                var r170_code, _r170_t0, _r170_t1;
                r169_currentGlyph['assign-unicode'](r170_code);
                return r4_unicodeGlyphs[r169_currentGlyph['unicode'][r169_currentGlyph['unicode']['length'] - 1]] = r169_currentGlyph;
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
            r169_xn$dontexport$5sIl = function _r169_t3() {
                var _r171_t0, _r171_t1;
                return r169_currentGlyph['dontExport'] = true;
            };
            _r169_t0['gizmo'] = r4_globalTransform;
            _r169_t0['set-width'](r4_WIDTH);
            r169_xn$setwidth$9Jrj(r4_WIDTH);
            r169_xn$assignunicode$7Hrq('U');
            r169_include(r4_capitalMarks);
            r169_include(r169_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('F', function _r4_t82() {
            var r173_currentGlyph, r173_xn$setwidth$9Jrj, r173_xn$assignunicode$7Hrq, r173_xn$startfrom$1aao, r173_xn$lineto$5sIl, r173_xn$curveto$1aao, r173_xn$cubicto$1aao, r173_xn$putshapes$9Jrj, r173_xn$reverselast$3qIs, r173_include, r173_xn$createstroke$7Hrq, r173_xn$setanchor$9Jrj, r173_xn$dontexport$5sIl, _r173_t0, _r173_t1, _r173_t2, _r173_t3;
            _r173_t0 = this;
            r173_currentGlyph = _r173_t0;
            r173_xn$setwidth$9Jrj = _r173_t0['set-width']['bind'](_r173_t0);
            r173_xn$assignunicode$7Hrq = function _r173_t2(r174_code) {
                var r174_code, _r174_t0, _r174_t1;
                r173_currentGlyph['assign-unicode'](r174_code);
                return r4_unicodeGlyphs[r173_currentGlyph['unicode'][r173_currentGlyph['unicode']['length'] - 1]] = r173_currentGlyph;
            };
            r173_xn$startfrom$1aao = _r173_t0['start-from']['bind'](_r173_t0);
            r173_xn$lineto$5sIl = _r173_t0['line-to']['bind'](_r173_t0);
            r173_xn$curveto$1aao = _r173_t0['curve-to']['bind'](_r173_t0);
            r173_xn$cubicto$1aao = _r173_t0['cubic-to']['bind'](_r173_t0);
            r173_xn$putshapes$9Jrj = _r173_t0['put-shapes']['bind'](_r173_t0);
            r173_xn$reverselast$3qIs = _r173_t0['reverse-last']['bind'](_r173_t0);
            r173_include = _r173_t0['include']['bind'](_r173_t0);
            r173_xn$createstroke$7Hrq = _r173_t0['create-stroke']['bind'](_r173_t0);
            r173_xn$setanchor$9Jrj = _r173_t0['set-anchor']['bind'](_r173_t0);
            r173_xn$dontexport$5sIl = function _r173_t3() {
                var _r175_t0, _r175_t1;
                return r173_currentGlyph['dontExport'] = true;
            };
            _r173_t0['gizmo'] = r4_globalTransform;
            _r173_t0['set-width'](r4_WIDTH);
            r173_xn$setwidth$9Jrj(r4_WIDTH);
            r173_xn$assignunicode$7Hrq('F');
            r173_include(r4_capitalMarks);
            r173_include(r173_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
            r173_include(r173_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r173_include(r173_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t83() {
            var r177_currentGlyph, r177_xn$setwidth$9Jrj, r177_xn$assignunicode$7Hrq, r177_xn$startfrom$1aao, r177_xn$lineto$5sIl, r177_xn$curveto$1aao, r177_xn$cubicto$1aao, r177_xn$putshapes$9Jrj, r177_xn$reverselast$3qIs, r177_include, r177_xn$createstroke$7Hrq, r177_xn$setanchor$9Jrj, r177_xn$dontexport$5sIl, _r177_t0, _r177_t1, _r177_t2, _r177_t3;
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
            r177_xn$dontexport$5sIl = function _r177_t3() {
                var _r179_t0, _r179_t1;
                return r177_currentGlyph['dontExport'] = true;
            };
            _r177_t0['gizmo'] = r4_globalTransform;
            _r177_t0['set-width'](r4_WIDTH);
            r177_xn$setwidth$9Jrj(r4_WIDTH);
            r177_xn$assignunicode$7Hrq('E');
            r177_include(r4_glyphs['F'], r4_AS_BASE);
            r177_include(r177_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t84() {
            var r181_currentGlyph, r181_xn$setwidth$9Jrj, r181_xn$assignunicode$7Hrq, r181_xn$startfrom$1aao, r181_xn$lineto$5sIl, r181_xn$curveto$1aao, r181_xn$cubicto$1aao, r181_xn$putshapes$9Jrj, r181_xn$reverselast$3qIs, r181_include, r181_xn$createstroke$7Hrq, r181_xn$setanchor$9Jrj, r181_xn$dontexport$5sIl, _r181_t0, _r181_t1, _r181_t2, _r181_t3;
            _r181_t0 = this;
            r181_currentGlyph = _r181_t0;
            r181_xn$setwidth$9Jrj = _r181_t0['set-width']['bind'](_r181_t0);
            r181_xn$assignunicode$7Hrq = function _r181_t2(r182_code) {
                var r182_code, _r182_t0, _r182_t1;
                r181_currentGlyph['assign-unicode'](r182_code);
                return r4_unicodeGlyphs[r181_currentGlyph['unicode'][r181_currentGlyph['unicode']['length'] - 1]] = r181_currentGlyph;
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
            r181_xn$dontexport$5sIl = function _r181_t3() {
                var _r183_t0, _r183_t1;
                return r181_currentGlyph['dontExport'] = true;
            };
            _r181_t0['gizmo'] = r4_globalTransform;
            _r181_t0['set-width'](r4_WIDTH);
            r181_xn$setwidth$9Jrj(r4_WIDTH);
            r181_xn$assignunicode$7Hrq('H');
            r181_include(r4_capitalMarks);
            r181_include(r181_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r181_include(r181_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r181_include(r181_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t85() {
            var r185_currentGlyph, r185_xn$setwidth$9Jrj, r185_xn$assignunicode$7Hrq, r185_xn$startfrom$1aao, r185_xn$lineto$5sIl, r185_xn$curveto$1aao, r185_xn$cubicto$1aao, r185_xn$putshapes$9Jrj, r185_xn$reverselast$3qIs, r185_include, r185_xn$createstroke$7Hrq, r185_xn$setanchor$9Jrj, r185_xn$dontexport$5sIl, _r185_t0, _r185_t1, _r185_t2, _r185_t3;
            _r185_t0 = this;
            r185_currentGlyph = _r185_t0;
            r185_xn$setwidth$9Jrj = _r185_t0['set-width']['bind'](_r185_t0);
            r185_xn$assignunicode$7Hrq = function _r185_t2(r186_code) {
                var r186_code, _r186_t0, _r186_t1;
                r185_currentGlyph['assign-unicode'](r186_code);
                return r4_unicodeGlyphs[r185_currentGlyph['unicode'][r185_currentGlyph['unicode']['length'] - 1]] = r185_currentGlyph;
            };
            r185_xn$startfrom$1aao = _r185_t0['start-from']['bind'](_r185_t0);
            r185_xn$lineto$5sIl = _r185_t0['line-to']['bind'](_r185_t0);
            r185_xn$curveto$1aao = _r185_t0['curve-to']['bind'](_r185_t0);
            r185_xn$cubicto$1aao = _r185_t0['cubic-to']['bind'](_r185_t0);
            r185_xn$putshapes$9Jrj = _r185_t0['put-shapes']['bind'](_r185_t0);
            r185_xn$reverselast$3qIs = _r185_t0['reverse-last']['bind'](_r185_t0);
            r185_include = _r185_t0['include']['bind'](_r185_t0);
            r185_xn$createstroke$7Hrq = _r185_t0['create-stroke']['bind'](_r185_t0);
            r185_xn$setanchor$9Jrj = _r185_t0['set-anchor']['bind'](_r185_t0);
            r185_xn$dontexport$5sIl = function _r185_t3() {
                var _r187_t0, _r187_t1;
                return r185_currentGlyph['dontExport'] = true;
            };
            _r185_t0['gizmo'] = r4_globalTransform;
            _r185_t0['set-width'](r4_WIDTH);
            r185_xn$setwidth$9Jrj(r4_WIDTH);
            r185_xn$assignunicode$7Hrq('L');
            r185_include(r4_capitalMarks);
            r185_include(r185_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r185_include(r185_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t86() {
            var r189_currentGlyph, r189_xn$setwidth$9Jrj, r189_xn$assignunicode$7Hrq, r189_xn$startfrom$1aao, r189_xn$lineto$5sIl, r189_xn$curveto$1aao, r189_xn$cubicto$1aao, r189_xn$putshapes$9Jrj, r189_xn$reverselast$3qIs, r189_include, r189_xn$createstroke$7Hrq, r189_xn$setanchor$9Jrj, r189_xn$dontexport$5sIl, _r189_t0, _r189_t1, _r189_t2, _r189_t3;
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
            r189_xn$dontexport$5sIl = function _r189_t3() {
                var _r191_t0, _r191_t1;
                return r189_currentGlyph['dontExport'] = true;
            };
            _r189_t0['gizmo'] = r4_globalTransform;
            _r189_t0['set-width'](r4_WIDTH);
            r189_xn$dontexport$5sIl();
            r189_include(r4_capitalMarks);
            r189_include(r189_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t87() {
            var r193_currentGlyph, r193_xn$setwidth$9Jrj, r193_xn$assignunicode$7Hrq, r193_xn$startfrom$1aao, r193_xn$lineto$5sIl, r193_xn$curveto$1aao, r193_xn$cubicto$1aao, r193_xn$putshapes$9Jrj, r193_xn$reverselast$3qIs, r193_include, r193_xn$createstroke$7Hrq, r193_xn$setanchor$9Jrj, r193_xn$dontexport$5sIl, _r193_t0, _r193_t1, _r193_t2, _r193_t3;
            _r193_t0 = this;
            r193_currentGlyph = _r193_t0;
            r193_xn$setwidth$9Jrj = _r193_t0['set-width']['bind'](_r193_t0);
            r193_xn$assignunicode$7Hrq = function _r193_t2(r194_code) {
                var r194_code, _r194_t0, _r194_t1;
                r193_currentGlyph['assign-unicode'](r194_code);
                return r4_unicodeGlyphs[r193_currentGlyph['unicode'][r193_currentGlyph['unicode']['length'] - 1]] = r193_currentGlyph;
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
            r193_xn$dontexport$5sIl = function _r193_t3() {
                var _r195_t0, _r195_t1;
                return r193_currentGlyph['dontExport'] = true;
            };
            _r193_t0['gizmo'] = r4_globalTransform;
            _r193_t0['set-width'](r4_WIDTH);
            r193_xn$dontexport$5sIl();
            r193_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r193_include(r193_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r193_include(r193_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t88() {
            var r197_currentGlyph, r197_xn$setwidth$9Jrj, r197_xn$assignunicode$7Hrq, r197_xn$startfrom$1aao, r197_xn$lineto$5sIl, r197_xn$curveto$1aao, r197_xn$cubicto$1aao, r197_xn$putshapes$9Jrj, r197_xn$reverselast$3qIs, r197_include, r197_xn$createstroke$7Hrq, r197_xn$setanchor$9Jrj, r197_xn$dontexport$5sIl, _r197_t0, _r197_t1, _r197_t2, _r197_t3;
            _r197_t0 = this;
            r197_currentGlyph = _r197_t0;
            r197_xn$setwidth$9Jrj = _r197_t0['set-width']['bind'](_r197_t0);
            r197_xn$assignunicode$7Hrq = function _r197_t2(r198_code) {
                var r198_code, _r198_t0, _r198_t1;
                r197_currentGlyph['assign-unicode'](r198_code);
                return r4_unicodeGlyphs[r197_currentGlyph['unicode'][r197_currentGlyph['unicode']['length'] - 1]] = r197_currentGlyph;
            };
            r197_xn$startfrom$1aao = _r197_t0['start-from']['bind'](_r197_t0);
            r197_xn$lineto$5sIl = _r197_t0['line-to']['bind'](_r197_t0);
            r197_xn$curveto$1aao = _r197_t0['curve-to']['bind'](_r197_t0);
            r197_xn$cubicto$1aao = _r197_t0['cubic-to']['bind'](_r197_t0);
            r197_xn$putshapes$9Jrj = _r197_t0['put-shapes']['bind'](_r197_t0);
            r197_xn$reverselast$3qIs = _r197_t0['reverse-last']['bind'](_r197_t0);
            r197_include = _r197_t0['include']['bind'](_r197_t0);
            r197_xn$createstroke$7Hrq = _r197_t0['create-stroke']['bind'](_r197_t0);
            r197_xn$setanchor$9Jrj = _r197_t0['set-anchor']['bind'](_r197_t0);
            r197_xn$dontexport$5sIl = function _r197_t3() {
                var _r199_t0, _r199_t1;
                return r197_currentGlyph['dontExport'] = true;
            };
            _r197_t0['gizmo'] = r4_globalTransform;
            _r197_t0['set-width'](r4_WIDTH);
            r197_xn$setwidth$9Jrj(r4_WIDTH);
            r197_xn$assignunicode$7Hrq('T');
            r197_include(r4_capitalMarks);
            r197_include(r197_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r197_include(r197_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t89() {
            var r201_currentGlyph, r201_xn$setwidth$9Jrj, r201_xn$assignunicode$7Hrq, r201_xn$startfrom$1aao, r201_xn$lineto$5sIl, r201_xn$curveto$1aao, r201_xn$cubicto$1aao, r201_xn$putshapes$9Jrj, r201_xn$reverselast$3qIs, r201_include, r201_xn$createstroke$7Hrq, r201_xn$setanchor$9Jrj, r201_xn$dontexport$5sIl, r201_cor, _r201_t0, _r201_t1, _r201_t2, _r201_t3;
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
            r201_xn$dontexport$5sIl = function _r201_t3() {
                var _r203_t0, _r203_t1;
                return r201_currentGlyph['dontExport'] = true;
            };
            _r201_t0['gizmo'] = r4_globalTransform;
            _r201_t0['set-width'](r4_WIDTH);
            r201_xn$setwidth$9Jrj(r4_WIDTH);
            r201_xn$assignunicode$7Hrq('Z');
            r201_include(r4_capitalMarks);
            r201_cor = 1.15;
            r201_include(r201_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r201_include(r201_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r201_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r201_xn$lineto$5sIl(r4_SB + r4_STROKE * r201_cor, r4_STROKE);
            r201_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r201_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r201_cor, r4_CAP - r4_STROKE);
            r201_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t90() {
            var r205_currentGlyph, r205_xn$setwidth$9Jrj, r205_xn$assignunicode$7Hrq, r205_xn$startfrom$1aao, r205_xn$lineto$5sIl, r205_xn$curveto$1aao, r205_xn$cubicto$1aao, r205_xn$putshapes$9Jrj, r205_xn$reverselast$3qIs, r205_include, r205_xn$createstroke$7Hrq, r205_xn$setanchor$9Jrj, r205_xn$dontexport$5sIl, r205_slope, r205_expand, r205_coexpand, r205_kappa, r205_smooth, r205_hookx, _r205_t0, _r205_t1, _r205_t2, _r205_t3;
            _r205_t0 = this;
            r205_currentGlyph = _r205_t0;
            r205_xn$setwidth$9Jrj = _r205_t0['set-width']['bind'](_r205_t0);
            r205_xn$assignunicode$7Hrq = function _r205_t2(r206_code) {
                var r206_code, _r206_t0, _r206_t1;
                r205_currentGlyph['assign-unicode'](r206_code);
                return r4_unicodeGlyphs[r205_currentGlyph['unicode'][r205_currentGlyph['unicode']['length'] - 1]] = r205_currentGlyph;
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
            r205_xn$dontexport$5sIl = function _r205_t3() {
                var _r207_t0, _r207_t1;
                return r205_currentGlyph['dontExport'] = true;
            };
            _r205_t0['gizmo'] = r4_globalTransform;
            _r205_t0['set-width'](r4_WIDTH);
            r205_xn$setwidth$9Jrj(r4_WIDTH);
            r205_xn$dontexport$5sIl();
            r205_include(r4_capitalMarks);
            r205_slope = r4_STROKE * 0.00092;
            r205_expand = 0.35;
            r205_coexpand = (1 - r205_expand) / 2;
            r205_kappa = r4_KAPPA_HOOK;
            r205_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r205_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r205_include(r205_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r205_smooth)['arc-vh-to'](r0_mix(r205_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r205_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r205_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t91() {
            var r209_currentGlyph, r209_xn$setwidth$9Jrj, r209_xn$assignunicode$7Hrq, r209_xn$startfrom$1aao, r209_xn$lineto$5sIl, r209_xn$curveto$1aao, r209_xn$cubicto$1aao, r209_xn$putshapes$9Jrj, r209_xn$reverselast$3qIs, r209_include, r209_xn$createstroke$7Hrq, r209_xn$setanchor$9Jrj, r209_xn$dontexport$5sIl, _r209_t0, _r209_t1, _r209_t2, _r209_t3;
            _r209_t0 = this;
            r209_currentGlyph = _r209_t0;
            r209_xn$setwidth$9Jrj = _r209_t0['set-width']['bind'](_r209_t0);
            r209_xn$assignunicode$7Hrq = function _r209_t2(r210_code) {
                var r210_code, _r210_t0, _r210_t1;
                r209_currentGlyph['assign-unicode'](r210_code);
                return r4_unicodeGlyphs[r209_currentGlyph['unicode'][r209_currentGlyph['unicode']['length'] - 1]] = r209_currentGlyph;
            };
            r209_xn$startfrom$1aao = _r209_t0['start-from']['bind'](_r209_t0);
            r209_xn$lineto$5sIl = _r209_t0['line-to']['bind'](_r209_t0);
            r209_xn$curveto$1aao = _r209_t0['curve-to']['bind'](_r209_t0);
            r209_xn$cubicto$1aao = _r209_t0['cubic-to']['bind'](_r209_t0);
            r209_xn$putshapes$9Jrj = _r209_t0['put-shapes']['bind'](_r209_t0);
            r209_xn$reverselast$3qIs = _r209_t0['reverse-last']['bind'](_r209_t0);
            r209_include = _r209_t0['include']['bind'](_r209_t0);
            r209_xn$createstroke$7Hrq = _r209_t0['create-stroke']['bind'](_r209_t0);
            r209_xn$setanchor$9Jrj = _r209_t0['set-anchor']['bind'](_r209_t0);
            r209_xn$dontexport$5sIl = function _r209_t3() {
                var _r211_t0, _r211_t1;
                return r209_currentGlyph['dontExport'] = true;
            };
            _r209_t0['gizmo'] = r4_globalTransform;
            _r209_t0['set-width'](r4_WIDTH);
            r209_xn$setwidth$9Jrj(r4_WIDTH);
            r209_xn$dontexport$5sIl();
            r209_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r209_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t92() {
            var r213_currentGlyph, r213_xn$setwidth$9Jrj, r213_xn$assignunicode$7Hrq, r213_xn$startfrom$1aao, r213_xn$lineto$5sIl, r213_xn$curveto$1aao, r213_xn$cubicto$1aao, r213_xn$putshapes$9Jrj, r213_xn$reverselast$3qIs, r213_include, r213_xn$createstroke$7Hrq, r213_xn$setanchor$9Jrj, r213_xn$dontexport$5sIl, r213_topstroke, r213_halftopstroke, _r213_t0, _r213_t1, _r213_t2, _r213_t3;
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
            r213_xn$dontexport$5sIl = function _r213_t3() {
                var _r215_t0, _r215_t1;
                return r213_currentGlyph['dontExport'] = true;
            };
            _r213_t0['gizmo'] = r4_globalTransform;
            _r213_t0['set-width'](r4_WIDTH);
            r213_xn$setwidth$9Jrj(r4_WIDTH);
            r213_xn$assignunicode$7Hrq('N');
            r213_include(r4_capitalMarks);
            r213_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.24);
            r213_halftopstroke = r213_topstroke / 2;
            r213_include(r213_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r213_topstroke));
            r213_include(r213_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r213_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r213_include(r213_xn$createstroke$7Hrq()['start-from'](r4_SB + r213_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r213_topstroke, 0)['line-to'](r4_RIGHTSB - r213_topstroke - r213_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t93() {
            var r217_currentGlyph, r217_xn$setwidth$9Jrj, r217_xn$assignunicode$7Hrq, r217_xn$startfrom$1aao, r217_xn$lineto$5sIl, r217_xn$curveto$1aao, r217_xn$cubicto$1aao, r217_xn$putshapes$9Jrj, r217_xn$reverselast$3qIs, r217_include, r217_xn$createstroke$7Hrq, r217_xn$setanchor$9Jrj, r217_xn$dontexport$5sIl, r217_topstroke, r217_halftopstroke, _r217_t0, _r217_t1, _r217_t2, _r217_t3;
            _r217_t0 = this;
            r217_currentGlyph = _r217_t0;
            r217_xn$setwidth$9Jrj = _r217_t0['set-width']['bind'](_r217_t0);
            r217_xn$assignunicode$7Hrq = function _r217_t2(r218_code) {
                var r218_code, _r218_t0, _r218_t1;
                r217_currentGlyph['assign-unicode'](r218_code);
                return r4_unicodeGlyphs[r217_currentGlyph['unicode'][r217_currentGlyph['unicode']['length'] - 1]] = r217_currentGlyph;
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
            r217_xn$dontexport$5sIl = function _r217_t3() {
                var _r219_t0, _r219_t1;
                return r217_currentGlyph['dontExport'] = true;
            };
            _r217_t0['gizmo'] = r4_globalTransform;
            _r217_t0['set-width'](r4_WIDTH);
            r217_xn$setwidth$9Jrj(r4_WIDTH);
            r217_xn$assignunicode$7Hrq('M');
            r217_include(r4_capitalMarks);
            r217_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.175);
            r217_halftopstroke = r217_topstroke / 2;
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r217_topstroke));
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r217_topstroke, 0));
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_SB + r217_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r217_topstroke, 0)['line-to'](r4_MIDDLE - r217_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r217_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r217_topstroke, 0)['line-to'](r4_RIGHTSB - r217_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t94() {
            var r221_currentGlyph, r221_xn$setwidth$9Jrj, r221_xn$assignunicode$7Hrq, r221_xn$startfrom$1aao, r221_xn$lineto$5sIl, r221_xn$curveto$1aao, r221_xn$cubicto$1aao, r221_xn$putshapes$9Jrj, r221_xn$reverselast$3qIs, r221_include, r221_xn$createstroke$7Hrq, r221_xn$setanchor$9Jrj, r221_xn$dontexport$5sIl, _r221_t0, _r221_t1, _r221_t2, _r221_t3;
            _r221_t0 = this;
            r221_currentGlyph = _r221_t0;
            r221_xn$setwidth$9Jrj = _r221_t0['set-width']['bind'](_r221_t0);
            r221_xn$assignunicode$7Hrq = function _r221_t2(r222_code) {
                var r222_code, _r222_t0, _r222_t1;
                r221_currentGlyph['assign-unicode'](r222_code);
                return r4_unicodeGlyphs[r221_currentGlyph['unicode'][r221_currentGlyph['unicode']['length'] - 1]] = r221_currentGlyph;
            };
            r221_xn$startfrom$1aao = _r221_t0['start-from']['bind'](_r221_t0);
            r221_xn$lineto$5sIl = _r221_t0['line-to']['bind'](_r221_t0);
            r221_xn$curveto$1aao = _r221_t0['curve-to']['bind'](_r221_t0);
            r221_xn$cubicto$1aao = _r221_t0['cubic-to']['bind'](_r221_t0);
            r221_xn$putshapes$9Jrj = _r221_t0['put-shapes']['bind'](_r221_t0);
            r221_xn$reverselast$3qIs = _r221_t0['reverse-last']['bind'](_r221_t0);
            r221_include = _r221_t0['include']['bind'](_r221_t0);
            r221_xn$createstroke$7Hrq = _r221_t0['create-stroke']['bind'](_r221_t0);
            r221_xn$setanchor$9Jrj = _r221_t0['set-anchor']['bind'](_r221_t0);
            r221_xn$dontexport$5sIl = function _r221_t3() {
                var _r223_t0, _r223_t1;
                return r221_currentGlyph['dontExport'] = true;
            };
            _r221_t0['gizmo'] = r4_globalTransform;
            _r221_t0['set-width'](r4_WIDTH);
            r221_xn$setwidth$9Jrj(r4_WIDTH);
            r221_xn$assignunicode$7Hrq('S');
            r221_include(r4_capitalMarks);
            r221_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r221_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r221_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t95() {
            var r225_currentGlyph, r225_xn$setwidth$9Jrj, r225_xn$assignunicode$7Hrq, r225_xn$startfrom$1aao, r225_xn$lineto$5sIl, r225_xn$curveto$1aao, r225_xn$cubicto$1aao, r225_xn$putshapes$9Jrj, r225_xn$reverselast$3qIs, r225_include, r225_xn$createstroke$7Hrq, r225_xn$setanchor$9Jrj, r225_xn$dontexport$5sIl, _r225_t0, _r225_t1, _r225_t2, _r225_t3;
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
            r225_xn$dontexport$5sIl = function _r225_t3() {
                var _r227_t0, _r227_t1;
                return r225_currentGlyph['dontExport'] = true;
            };
            _r225_t0['gizmo'] = r4_globalTransform;
            _r225_t0['set-width'](r4_WIDTH);
            r225_xn$setwidth$9Jrj(r4_WIDTH);
            r225_xn$assignunicode$7Hrq('o');
            r225_include(r4_eMarks);
            r225_include(r225_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.left', function _r4_t96() {
            var r229_currentGlyph, r229_xn$setwidth$9Jrj, r229_xn$assignunicode$7Hrq, r229_xn$startfrom$1aao, r229_xn$lineto$5sIl, r229_xn$curveto$1aao, r229_xn$cubicto$1aao, r229_xn$putshapes$9Jrj, r229_xn$reverselast$3qIs, r229_include, r229_xn$createstroke$7Hrq, r229_xn$setanchor$9Jrj, r229_xn$dontexport$5sIl, _r229_t0, _r229_t1, _r229_t2, _r229_t3;
            _r229_t0 = this;
            r229_currentGlyph = _r229_t0;
            r229_xn$setwidth$9Jrj = _r229_t0['set-width']['bind'](_r229_t0);
            r229_xn$assignunicode$7Hrq = function _r229_t2(r230_code) {
                var r230_code, _r230_t0, _r230_t1;
                r229_currentGlyph['assign-unicode'](r230_code);
                return r4_unicodeGlyphs[r229_currentGlyph['unicode'][r229_currentGlyph['unicode']['length'] - 1]] = r229_currentGlyph;
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
            r229_xn$dontexport$5sIl = function _r229_t3() {
                var _r231_t0, _r231_t1;
                return r229_currentGlyph['dontExport'] = true;
            };
            _r229_t0['gizmo'] = r4_globalTransform;
            _r229_t0['set-width'](r4_WIDTH);
            r229_xn$dontexport$5sIl();
            r229_xn$setwidth$9Jrj(r4_WIDTH);
            r229_include(r229_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
            r229_include(r229_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.right', function _r4_t97() {
            var r233_currentGlyph, r233_xn$setwidth$9Jrj, r233_xn$assignunicode$7Hrq, r233_xn$startfrom$1aao, r233_xn$lineto$5sIl, r233_xn$curveto$1aao, r233_xn$cubicto$1aao, r233_xn$putshapes$9Jrj, r233_xn$reverselast$3qIs, r233_include, r233_xn$createstroke$7Hrq, r233_xn$setanchor$9Jrj, r233_xn$dontexport$5sIl, _r233_t0, _r233_t1, _r233_t2, _r233_t3;
            _r233_t0 = this;
            r233_currentGlyph = _r233_t0;
            r233_xn$setwidth$9Jrj = _r233_t0['set-width']['bind'](_r233_t0);
            r233_xn$assignunicode$7Hrq = function _r233_t2(r234_code) {
                var r234_code, _r234_t0, _r234_t1;
                r233_currentGlyph['assign-unicode'](r234_code);
                return r4_unicodeGlyphs[r233_currentGlyph['unicode'][r233_currentGlyph['unicode']['length'] - 1]] = r233_currentGlyph;
            };
            r233_xn$startfrom$1aao = _r233_t0['start-from']['bind'](_r233_t0);
            r233_xn$lineto$5sIl = _r233_t0['line-to']['bind'](_r233_t0);
            r233_xn$curveto$1aao = _r233_t0['curve-to']['bind'](_r233_t0);
            r233_xn$cubicto$1aao = _r233_t0['cubic-to']['bind'](_r233_t0);
            r233_xn$putshapes$9Jrj = _r233_t0['put-shapes']['bind'](_r233_t0);
            r233_xn$reverselast$3qIs = _r233_t0['reverse-last']['bind'](_r233_t0);
            r233_include = _r233_t0['include']['bind'](_r233_t0);
            r233_xn$createstroke$7Hrq = _r233_t0['create-stroke']['bind'](_r233_t0);
            r233_xn$setanchor$9Jrj = _r233_t0['set-anchor']['bind'](_r233_t0);
            r233_xn$dontexport$5sIl = function _r233_t3() {
                var _r235_t0, _r235_t1;
                return r233_currentGlyph['dontExport'] = true;
            };
            _r233_t0['gizmo'] = r4_globalTransform;
            _r233_t0['set-width'](r4_WIDTH);
            r233_xn$dontexport$5sIl();
            r233_xn$setwidth$9Jrj(r4_WIDTH);
            r233_include(r233_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r233_include(r233_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('p', function _r4_t98() {
            var r237_currentGlyph, r237_xn$setwidth$9Jrj, r237_xn$assignunicode$7Hrq, r237_xn$startfrom$1aao, r237_xn$lineto$5sIl, r237_xn$curveto$1aao, r237_xn$cubicto$1aao, r237_xn$putshapes$9Jrj, r237_xn$reverselast$3qIs, r237_include, r237_xn$createstroke$7Hrq, r237_xn$setanchor$9Jrj, r237_xn$dontexport$5sIl, _r237_t0, _r237_t1, _r237_t2, _r237_t3;
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
            r237_xn$dontexport$5sIl = function _r237_t3() {
                var _r239_t0, _r239_t1;
                return r237_currentGlyph['dontExport'] = true;
            };
            _r237_t0['gizmo'] = r4_globalTransform;
            _r237_t0['set-width'](r4_WIDTH);
            r237_xn$setwidth$9Jrj(r4_WIDTH);
            r237_xn$assignunicode$7Hrq('p');
            r237_include(r4_eMarks);
            r237_include(r4_glyphs['o.left']);
            r237_include(r237_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t99() {
            var r241_currentGlyph, r241_xn$setwidth$9Jrj, r241_xn$assignunicode$7Hrq, r241_xn$startfrom$1aao, r241_xn$lineto$5sIl, r241_xn$curveto$1aao, r241_xn$cubicto$1aao, r241_xn$putshapes$9Jrj, r241_xn$reverselast$3qIs, r241_include, r241_xn$createstroke$7Hrq, r241_xn$setanchor$9Jrj, r241_xn$dontexport$5sIl, _r241_t0, _r241_t1, _r241_t2, _r241_t3;
            _r241_t0 = this;
            r241_currentGlyph = _r241_t0;
            r241_xn$setwidth$9Jrj = _r241_t0['set-width']['bind'](_r241_t0);
            r241_xn$assignunicode$7Hrq = function _r241_t2(r242_code) {
                var r242_code, _r242_t0, _r242_t1;
                r241_currentGlyph['assign-unicode'](r242_code);
                return r4_unicodeGlyphs[r241_currentGlyph['unicode'][r241_currentGlyph['unicode']['length'] - 1]] = r241_currentGlyph;
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
            r241_xn$dontexport$5sIl = function _r241_t3() {
                var _r243_t0, _r243_t1;
                return r241_currentGlyph['dontExport'] = true;
            };
            _r241_t0['gizmo'] = r4_globalTransform;
            _r241_t0['set-width'](r4_WIDTH);
            r241_xn$setwidth$9Jrj(r4_WIDTH);
            r241_xn$assignunicode$7Hrq('b');
            r241_include(r4_bMarks);
            r241_xn$putshapes$9Jrj(r4_glyphs['o.left']['contours']);
            r241_include(r241_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t100() {
            var r245_currentGlyph, r245_xn$setwidth$9Jrj, r245_xn$assignunicode$7Hrq, r245_xn$startfrom$1aao, r245_xn$lineto$5sIl, r245_xn$curveto$1aao, r245_xn$cubicto$1aao, r245_xn$putshapes$9Jrj, r245_xn$reverselast$3qIs, r245_include, r245_xn$createstroke$7Hrq, r245_xn$setanchor$9Jrj, r245_xn$dontexport$5sIl, _r245_t0, _r245_t1, _r245_t2, _r245_t3;
            _r245_t0 = this;
            r245_currentGlyph = _r245_t0;
            r245_xn$setwidth$9Jrj = _r245_t0['set-width']['bind'](_r245_t0);
            r245_xn$assignunicode$7Hrq = function _r245_t2(r246_code) {
                var r246_code, _r246_t0, _r246_t1;
                r245_currentGlyph['assign-unicode'](r246_code);
                return r4_unicodeGlyphs[r245_currentGlyph['unicode'][r245_currentGlyph['unicode']['length'] - 1]] = r245_currentGlyph;
            };
            r245_xn$startfrom$1aao = _r245_t0['start-from']['bind'](_r245_t0);
            r245_xn$lineto$5sIl = _r245_t0['line-to']['bind'](_r245_t0);
            r245_xn$curveto$1aao = _r245_t0['curve-to']['bind'](_r245_t0);
            r245_xn$cubicto$1aao = _r245_t0['cubic-to']['bind'](_r245_t0);
            r245_xn$putshapes$9Jrj = _r245_t0['put-shapes']['bind'](_r245_t0);
            r245_xn$reverselast$3qIs = _r245_t0['reverse-last']['bind'](_r245_t0);
            r245_include = _r245_t0['include']['bind'](_r245_t0);
            r245_xn$createstroke$7Hrq = _r245_t0['create-stroke']['bind'](_r245_t0);
            r245_xn$setanchor$9Jrj = _r245_t0['set-anchor']['bind'](_r245_t0);
            r245_xn$dontexport$5sIl = function _r245_t3() {
                var _r247_t0, _r247_t1;
                return r245_currentGlyph['dontExport'] = true;
            };
            _r245_t0['gizmo'] = r4_globalTransform;
            _r245_t0['set-width'](r4_WIDTH);
            r245_xn$setwidth$9Jrj(r4_WIDTH);
            r245_xn$assignunicode$7Hrq('q');
            r245_include(r4_eMarks);
            r245_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r245_include(r245_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t101() {
            var r249_currentGlyph, r249_xn$setwidth$9Jrj, r249_xn$assignunicode$7Hrq, r249_xn$startfrom$1aao, r249_xn$lineto$5sIl, r249_xn$curveto$1aao, r249_xn$cubicto$1aao, r249_xn$putshapes$9Jrj, r249_xn$reverselast$3qIs, r249_include, r249_xn$createstroke$7Hrq, r249_xn$setanchor$9Jrj, r249_xn$dontexport$5sIl, _r249_t0, _r249_t1, _r249_t2, _r249_t3;
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
            r249_xn$dontexport$5sIl = function _r249_t3() {
                var _r251_t0, _r251_t1;
                return r249_currentGlyph['dontExport'] = true;
            };
            _r249_t0['gizmo'] = r4_globalTransform;
            _r249_t0['set-width'](r4_WIDTH);
            r249_xn$setwidth$9Jrj(r4_WIDTH);
            r249_xn$assignunicode$7Hrq('d');
            r249_include(r4_bMarks);
            r249_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r249_include(r249_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t102() {
            var r253_currentGlyph, r253_xn$setwidth$9Jrj, r253_xn$assignunicode$7Hrq, r253_xn$startfrom$1aao, r253_xn$lineto$5sIl, r253_xn$curveto$1aao, r253_xn$cubicto$1aao, r253_xn$putshapes$9Jrj, r253_xn$reverselast$3qIs, r253_include, r253_xn$createstroke$7Hrq, r253_xn$setanchor$9Jrj, r253_xn$dontexport$5sIl, r253_gleftx, r253_grightx, r253_groundy, _r253_t0, _r253_t1, _r253_t2, _r253_t3;
            _r253_t0 = this;
            r253_currentGlyph = _r253_t0;
            r253_xn$setwidth$9Jrj = _r253_t0['set-width']['bind'](_r253_t0);
            r253_xn$assignunicode$7Hrq = function _r253_t2(r254_code) {
                var r254_code, _r254_t0, _r254_t1;
                r253_currentGlyph['assign-unicode'](r254_code);
                return r4_unicodeGlyphs[r253_currentGlyph['unicode'][r253_currentGlyph['unicode']['length'] - 1]] = r253_currentGlyph;
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
            r253_xn$dontexport$5sIl = function _r253_t3() {
                var _r255_t0, _r255_t1;
                return r253_currentGlyph['dontExport'] = true;
            };
            _r253_t0['gizmo'] = r4_globalTransform;
            _r253_t0['set-width'](r4_WIDTH);
            r253_xn$setwidth$9Jrj(r4_WIDTH);
            r253_xn$assignunicode$7Hrq('g');
            r253_include(r4_pMarks);
            r253_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r253_xn$reverselast$3qIs();
            r253_gleftx = r4_SB * 0.8 + r4_O;
            r253_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r253_groundy = r4_O - r4_DESCENDER * 0.6;
            r253_include(r253_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r253_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r253_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r253_groundy)['arc-hv-to'](r253_grightx, r0_mix(r4_DESCENDER + r4_O, r253_groundy, 0.53))['arc-vh-to'](r0_mix(r253_gleftx, r253_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r253_gleftx, r0_mix(r4_DESCENDER + r4_O, r253_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r253_groundy));
            r253_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r253_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r253_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r253_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t103() {
            var r257_currentGlyph, r257_xn$setwidth$9Jrj, r257_xn$assignunicode$7Hrq, r257_xn$startfrom$1aao, r257_xn$lineto$5sIl, r257_xn$curveto$1aao, r257_xn$cubicto$1aao, r257_xn$putshapes$9Jrj, r257_xn$reverselast$3qIs, r257_include, r257_xn$createstroke$7Hrq, r257_xn$setanchor$9Jrj, r257_xn$dontexport$5sIl, _r257_t0, _r257_t1, _r257_t2, _r257_t3;
            _r257_t0 = this;
            r257_currentGlyph = _r257_t0;
            r257_xn$setwidth$9Jrj = _r257_t0['set-width']['bind'](_r257_t0);
            r257_xn$assignunicode$7Hrq = function _r257_t2(r258_code) {
                var r258_code, _r258_t0, _r258_t1;
                r257_currentGlyph['assign-unicode'](r258_code);
                return r4_unicodeGlyphs[r257_currentGlyph['unicode'][r257_currentGlyph['unicode']['length'] - 1]] = r257_currentGlyph;
            };
            r257_xn$startfrom$1aao = _r257_t0['start-from']['bind'](_r257_t0);
            r257_xn$lineto$5sIl = _r257_t0['line-to']['bind'](_r257_t0);
            r257_xn$curveto$1aao = _r257_t0['curve-to']['bind'](_r257_t0);
            r257_xn$cubicto$1aao = _r257_t0['cubic-to']['bind'](_r257_t0);
            r257_xn$putshapes$9Jrj = _r257_t0['put-shapes']['bind'](_r257_t0);
            r257_xn$reverselast$3qIs = _r257_t0['reverse-last']['bind'](_r257_t0);
            r257_include = _r257_t0['include']['bind'](_r257_t0);
            r257_xn$createstroke$7Hrq = _r257_t0['create-stroke']['bind'](_r257_t0);
            r257_xn$setanchor$9Jrj = _r257_t0['set-anchor']['bind'](_r257_t0);
            r257_xn$dontexport$5sIl = function _r257_t3() {
                var _r259_t0, _r259_t1;
                return r257_currentGlyph['dontExport'] = true;
            };
            _r257_t0['gizmo'] = r4_globalTransform;
            _r257_t0['set-width'](r4_WIDTH);
            r257_xn$setwidth$9Jrj(r4_WIDTH);
            r257_xn$assignunicode$7Hrq('c');
            r257_include(r4_eMarks);
            r257_include(r257_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t104() {
            var r261_currentGlyph, r261_xn$setwidth$9Jrj, r261_xn$assignunicode$7Hrq, r261_xn$startfrom$1aao, r261_xn$lineto$5sIl, r261_xn$curveto$1aao, r261_xn$cubicto$1aao, r261_xn$putshapes$9Jrj, r261_xn$reverselast$3qIs, r261_include, r261_xn$createstroke$7Hrq, r261_xn$setanchor$9Jrj, r261_xn$dontexport$5sIl, r261_barbottom, r261_hookx, r261_hookmiddle, _r261_t0, _r261_t1, _r261_t2, _r261_t3;
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
            r261_xn$dontexport$5sIl = function _r261_t3() {
                var _r263_t0, _r263_t1;
                return r261_currentGlyph['dontExport'] = true;
            };
            _r261_t0['gizmo'] = r4_globalTransform;
            _r261_t0['set-width'](r4_WIDTH);
            r261_xn$setwidth$9Jrj(r4_WIDTH);
            r261_xn$dontexport$5sIl();
            r261_barbottom = r4_XH * r4_EBARPOS;
            r261_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r261_hookmiddle = r0_mix(r4_SB + r4_O, r261_hookx, 0.55);
            r261_include(r261_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r261_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r261_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r261_hookmiddle, r261_hookx, r4_KAPPA_HOOK), r4_O, r261_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r261_include(r261_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r261_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r261_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t105() {
            var r265_currentGlyph, r265_xn$setwidth$9Jrj, r265_xn$assignunicode$7Hrq, r265_xn$startfrom$1aao, r265_xn$lineto$5sIl, r265_xn$curveto$1aao, r265_xn$cubicto$1aao, r265_xn$putshapes$9Jrj, r265_xn$reverselast$3qIs, r265_include, r265_xn$createstroke$7Hrq, r265_xn$setanchor$9Jrj, r265_xn$dontexport$5sIl, r265_barbottom, _r265_t0, _r265_t1, _r265_t2, _r265_t3;
            _r265_t0 = this;
            r265_currentGlyph = _r265_t0;
            r265_xn$setwidth$9Jrj = _r265_t0['set-width']['bind'](_r265_t0);
            r265_xn$assignunicode$7Hrq = function _r265_t2(r266_code) {
                var r266_code, _r266_t0, _r266_t1;
                r265_currentGlyph['assign-unicode'](r266_code);
                return r4_unicodeGlyphs[r265_currentGlyph['unicode'][r265_currentGlyph['unicode']['length'] - 1]] = r265_currentGlyph;
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
            r265_xn$dontexport$5sIl = function _r265_t3() {
                var _r267_t0, _r267_t1;
                return r265_currentGlyph['dontExport'] = true;
            };
            _r265_t0['gizmo'] = r4_globalTransform;
            _r265_t0['set-width'](r4_WIDTH);
            r265_xn$setwidth$9Jrj(r4_WIDTH);
            r265_xn$dontexport$5sIl();
            r265_barbottom = r4_XH * (r4_BARPOS - 0.04);
            r265_include(r265_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r265_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t106() {
            var r269_currentGlyph, r269_xn$setwidth$9Jrj, r269_xn$assignunicode$7Hrq, r269_xn$startfrom$1aao, r269_xn$lineto$5sIl, r269_xn$curveto$1aao, r269_xn$cubicto$1aao, r269_xn$putshapes$9Jrj, r269_xn$reverselast$3qIs, r269_include, r269_xn$createstroke$7Hrq, r269_xn$setanchor$9Jrj, r269_xn$dontexport$5sIl, _r269_t0, _r269_t1, _r269_t2, _r269_t3;
            _r269_t0 = this;
            r269_currentGlyph = _r269_t0;
            r269_xn$setwidth$9Jrj = _r269_t0['set-width']['bind'](_r269_t0);
            r269_xn$assignunicode$7Hrq = function _r269_t2(r270_code) {
                var r270_code, _r270_t0, _r270_t1;
                r269_currentGlyph['assign-unicode'](r270_code);
                return r4_unicodeGlyphs[r269_currentGlyph['unicode'][r269_currentGlyph['unicode']['length'] - 1]] = r269_currentGlyph;
            };
            r269_xn$startfrom$1aao = _r269_t0['start-from']['bind'](_r269_t0);
            r269_xn$lineto$5sIl = _r269_t0['line-to']['bind'](_r269_t0);
            r269_xn$curveto$1aao = _r269_t0['curve-to']['bind'](_r269_t0);
            r269_xn$cubicto$1aao = _r269_t0['cubic-to']['bind'](_r269_t0);
            r269_xn$putshapes$9Jrj = _r269_t0['put-shapes']['bind'](_r269_t0);
            r269_xn$reverselast$3qIs = _r269_t0['reverse-last']['bind'](_r269_t0);
            r269_include = _r269_t0['include']['bind'](_r269_t0);
            r269_xn$createstroke$7Hrq = _r269_t0['create-stroke']['bind'](_r269_t0);
            r269_xn$setanchor$9Jrj = _r269_t0['set-anchor']['bind'](_r269_t0);
            r269_xn$dontexport$5sIl = function _r269_t3() {
                var _r271_t0, _r271_t1;
                return r269_currentGlyph['dontExport'] = true;
            };
            _r269_t0['gizmo'] = r4_globalTransform;
            _r269_t0['set-width'](r4_WIDTH);
            r269_xn$setwidth$9Jrj(r4_WIDTH);
            r269_xn$assignunicode$7Hrq('e');
            r269_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r269_include(r4_glyphs['e.italic']);
            } else {
                r269_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t107() {
            var r273_currentGlyph, r273_xn$setwidth$9Jrj, r273_xn$assignunicode$7Hrq, r273_xn$startfrom$1aao, r273_xn$lineto$5sIl, r273_xn$curveto$1aao, r273_xn$cubicto$1aao, r273_xn$putshapes$9Jrj, r273_xn$reverselast$3qIs, r273_include, r273_xn$createstroke$7Hrq, r273_xn$setanchor$9Jrj, r273_xn$dontexport$5sIl, r273_center, r273_hookx, r273_turn, r273_smb, _r273_t0, _r273_t1, _r273_t2, _r273_t3;
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
            r273_xn$dontexport$5sIl = function _r273_t3() {
                var _r275_t0, _r275_t1;
                return r273_currentGlyph['dontExport'] = true;
            };
            _r273_t0['gizmo'] = r4_globalTransform;
            _r273_t0['set-width'](r4_WIDTH);
            r273_xn$setwidth$9Jrj(r4_WIDTH);
            r273_xn$assignunicode$7Hrq('t');
            r273_include(r4_bMarks);
            r273_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r273_hookx = r273_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r273_turn = r0_mix(r273_center, r273_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r273_smb = (r273_turn - r273_center) * 1.1;
            r273_include(r273_xn$createstroke$7Hrq()['start-from'](r273_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r273_center, r273_smb)['arc-vh-to'](r273_turn, r4_O)['curve-to'](r273_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r273_hookx - r273_turn), r4_O, r273_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r273_include(r273_xn$createstroke$7Hrq()['start-from'](r273_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r273_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t108() {
            var r277_currentGlyph, r277_xn$setwidth$9Jrj, r277_xn$assignunicode$7Hrq, r277_xn$startfrom$1aao, r277_xn$lineto$5sIl, r277_xn$curveto$1aao, r277_xn$cubicto$1aao, r277_xn$putshapes$9Jrj, r277_xn$reverselast$3qIs, r277_include, r277_xn$createstroke$7Hrq, r277_xn$setanchor$9Jrj, r277_xn$dontexport$5sIl, r277_bartop, r277_lowmiddle, r277_barsmooth, _r277_t0, _r277_t1, _r277_t2, _r277_t3;
            _r277_t0 = this;
            r277_currentGlyph = _r277_t0;
            r277_xn$setwidth$9Jrj = _r277_t0['set-width']['bind'](_r277_t0);
            r277_xn$assignunicode$7Hrq = function _r277_t2(r278_code) {
                var r278_code, _r278_t0, _r278_t1;
                r277_currentGlyph['assign-unicode'](r278_code);
                return r4_unicodeGlyphs[r277_currentGlyph['unicode'][r277_currentGlyph['unicode']['length'] - 1]] = r277_currentGlyph;
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
            r277_xn$dontexport$5sIl = function _r277_t3() {
                var _r279_t0, _r279_t1;
                return r277_currentGlyph['dontExport'] = true;
            };
            _r277_t0['gizmo'] = r4_globalTransform;
            _r277_t0['set-width'](r4_WIDTH);
            r277_xn$setwidth$9Jrj(r4_WIDTH);
            r277_xn$dontexport$5sIl();
            r277_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r277_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r277_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r277_include(r277_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r277_include(r277_xn$createstroke$7Hrq()['start-from'](r277_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r277_bartop * 0.45)['arc-vh-to'](r277_barsmooth, r277_bartop)['line-to'](r4_RIGHTSB, r277_bartop)['heads-to'](r4_RIGHTWARD));
            r277_include(r277_xn$createstroke$7Hrq()['start-from'](r277_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t109() {
            var r281_currentGlyph, r281_xn$setwidth$9Jrj, r281_xn$assignunicode$7Hrq, r281_xn$startfrom$1aao, r281_xn$lineto$5sIl, r281_xn$curveto$1aao, r281_xn$cubicto$1aao, r281_xn$putshapes$9Jrj, r281_xn$reverselast$3qIs, r281_include, r281_xn$createstroke$7Hrq, r281_xn$setanchor$9Jrj, r281_xn$dontexport$5sIl, _r281_t0, _r281_t1, _r281_t2, _r281_t3;
            _r281_t0 = this;
            r281_currentGlyph = _r281_t0;
            r281_xn$setwidth$9Jrj = _r281_t0['set-width']['bind'](_r281_t0);
            r281_xn$assignunicode$7Hrq = function _r281_t2(r282_code) {
                var r282_code, _r282_t0, _r282_t1;
                r281_currentGlyph['assign-unicode'](r282_code);
                return r4_unicodeGlyphs[r281_currentGlyph['unicode'][r281_currentGlyph['unicode']['length'] - 1]] = r281_currentGlyph;
            };
            r281_xn$startfrom$1aao = _r281_t0['start-from']['bind'](_r281_t0);
            r281_xn$lineto$5sIl = _r281_t0['line-to']['bind'](_r281_t0);
            r281_xn$curveto$1aao = _r281_t0['curve-to']['bind'](_r281_t0);
            r281_xn$cubicto$1aao = _r281_t0['cubic-to']['bind'](_r281_t0);
            r281_xn$putshapes$9Jrj = _r281_t0['put-shapes']['bind'](_r281_t0);
            r281_xn$reverselast$3qIs = _r281_t0['reverse-last']['bind'](_r281_t0);
            r281_include = _r281_t0['include']['bind'](_r281_t0);
            r281_xn$createstroke$7Hrq = _r281_t0['create-stroke']['bind'](_r281_t0);
            r281_xn$setanchor$9Jrj = _r281_t0['set-anchor']['bind'](_r281_t0);
            r281_xn$dontexport$5sIl = function _r281_t3() {
                var _r283_t0, _r283_t1;
                return r281_currentGlyph['dontExport'] = true;
            };
            _r281_t0['gizmo'] = r4_globalTransform;
            _r281_t0['set-width'](r4_WIDTH);
            r281_xn$setwidth$9Jrj(r4_WIDTH);
            r281_xn$dontexport$5sIl();
            r281_include(r4_glyphs['o.right']);
            r281_include(r281_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t110() {
            var r285_currentGlyph, r285_xn$setwidth$9Jrj, r285_xn$assignunicode$7Hrq, r285_xn$startfrom$1aao, r285_xn$lineto$5sIl, r285_xn$curveto$1aao, r285_xn$cubicto$1aao, r285_xn$putshapes$9Jrj, r285_xn$reverselast$3qIs, r285_include, r285_xn$createstroke$7Hrq, r285_xn$setanchor$9Jrj, r285_xn$dontexport$5sIl, _r285_t0, _r285_t1, _r285_t2, _r285_t3;
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
            r285_xn$dontexport$5sIl = function _r285_t3() {
                var _r287_t0, _r287_t1;
                return r285_currentGlyph['dontExport'] = true;
            };
            _r285_t0['gizmo'] = r4_globalTransform;
            _r285_t0['set-width'](r4_WIDTH);
            r285_xn$setwidth$9Jrj(r4_WIDTH);
            r285_xn$assignunicode$7Hrq('a');
            r285_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r285_include(r4_glyphs['a.italic']);
            } else {
                r285_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t111() {
            var r289_currentGlyph, r289_xn$setwidth$9Jrj, r289_xn$assignunicode$7Hrq, r289_xn$startfrom$1aao, r289_xn$lineto$5sIl, r289_xn$curveto$1aao, r289_xn$cubicto$1aao, r289_xn$putshapes$9Jrj, r289_xn$reverselast$3qIs, r289_include, r289_xn$createstroke$7Hrq, r289_xn$setanchor$9Jrj, r289_xn$dontexport$5sIl, _r289_t0, _r289_t1, _r289_t2, _r289_t3;
            _r289_t0 = this;
            r289_currentGlyph = _r289_t0;
            r289_xn$setwidth$9Jrj = _r289_t0['set-width']['bind'](_r289_t0);
            r289_xn$assignunicode$7Hrq = function _r289_t2(r290_code) {
                var r290_code, _r290_t0, _r290_t1;
                r289_currentGlyph['assign-unicode'](r290_code);
                return r4_unicodeGlyphs[r289_currentGlyph['unicode'][r289_currentGlyph['unicode']['length'] - 1]] = r289_currentGlyph;
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
            r289_xn$dontexport$5sIl = function _r289_t3() {
                var _r291_t0, _r291_t1;
                return r289_currentGlyph['dontExport'] = true;
            };
            _r289_t0['gizmo'] = r4_globalTransform;
            _r289_t0['set-width'](r4_WIDTH);
            r289_xn$setwidth$9Jrj(r4_WIDTH);
            r289_xn$assignunicode$7Hrq('u');
            r289_include(r4_eMarks);
            r289_include(r289_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r289_include(r289_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r289_include(r289_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t112() {
            var r293_currentGlyph, r293_xn$setwidth$9Jrj, r293_xn$assignunicode$7Hrq, r293_xn$startfrom$1aao, r293_xn$lineto$5sIl, r293_xn$curveto$1aao, r293_xn$cubicto$1aao, r293_xn$putshapes$9Jrj, r293_xn$reverselast$3qIs, r293_include, r293_xn$createstroke$7Hrq, r293_xn$setanchor$9Jrj, r293_xn$dontexport$5sIl, _r293_t0, _r293_t1, _r293_t2, _r293_t3;
            _r293_t0 = this;
            r293_currentGlyph = _r293_t0;
            r293_xn$setwidth$9Jrj = _r293_t0['set-width']['bind'](_r293_t0);
            r293_xn$assignunicode$7Hrq = function _r293_t2(r294_code) {
                var r294_code, _r294_t0, _r294_t1;
                r293_currentGlyph['assign-unicode'](r294_code);
                return r4_unicodeGlyphs[r293_currentGlyph['unicode'][r293_currentGlyph['unicode']['length'] - 1]] = r293_currentGlyph;
            };
            r293_xn$startfrom$1aao = _r293_t0['start-from']['bind'](_r293_t0);
            r293_xn$lineto$5sIl = _r293_t0['line-to']['bind'](_r293_t0);
            r293_xn$curveto$1aao = _r293_t0['curve-to']['bind'](_r293_t0);
            r293_xn$cubicto$1aao = _r293_t0['cubic-to']['bind'](_r293_t0);
            r293_xn$putshapes$9Jrj = _r293_t0['put-shapes']['bind'](_r293_t0);
            r293_xn$reverselast$3qIs = _r293_t0['reverse-last']['bind'](_r293_t0);
            r293_include = _r293_t0['include']['bind'](_r293_t0);
            r293_xn$createstroke$7Hrq = _r293_t0['create-stroke']['bind'](_r293_t0);
            r293_xn$setanchor$9Jrj = _r293_t0['set-anchor']['bind'](_r293_t0);
            r293_xn$dontexport$5sIl = function _r293_t3() {
                var _r295_t0, _r295_t1;
                return r293_currentGlyph['dontExport'] = true;
            };
            _r293_t0['gizmo'] = r4_globalTransform;
            _r293_t0['set-width'](r4_WIDTH);
            r293_xn$setwidth$9Jrj(r4_WIDTH);
            r293_xn$assignunicode$7Hrq('n');
            r293_include(r4_eMarks);
            r293_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r293_include(r293_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t113() {
            var r297_currentGlyph, r297_xn$setwidth$9Jrj, r297_xn$assignunicode$7Hrq, r297_xn$startfrom$1aao, r297_xn$lineto$5sIl, r297_xn$curveto$1aao, r297_xn$cubicto$1aao, r297_xn$putshapes$9Jrj, r297_xn$reverselast$3qIs, r297_include, r297_xn$createstroke$7Hrq, r297_xn$setanchor$9Jrj, r297_xn$dontexport$5sIl, _r297_t0, _r297_t1, _r297_t2, _r297_t3;
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
            r297_xn$dontexport$5sIl = function _r297_t3() {
                var _r299_t0, _r299_t1;
                return r297_currentGlyph['dontExport'] = true;
            };
            _r297_t0['gizmo'] = r4_globalTransform;
            _r297_t0['set-width'](r4_WIDTH);
            r297_xn$setwidth$9Jrj(r4_WIDTH);
            r297_xn$assignunicode$7Hrq('h');
            r297_include(r4_bMarks);
            r297_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r297_include(r297_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t114() {
            var r301_currentGlyph, r301_xn$setwidth$9Jrj, r301_xn$assignunicode$7Hrq, r301_xn$startfrom$1aao, r301_xn$lineto$5sIl, r301_xn$curveto$1aao, r301_xn$cubicto$1aao, r301_xn$putshapes$9Jrj, r301_xn$reverselast$3qIs, r301_include, r301_xn$createstroke$7Hrq, r301_xn$setanchor$9Jrj, r301_xn$dontexport$5sIl, r301_sw, r301_m1, r301_m2, _r301_t0, _r301_t1, _r301_t2, _r301_t3;
            _r301_t0 = this;
            r301_currentGlyph = _r301_t0;
            r301_xn$setwidth$9Jrj = _r301_t0['set-width']['bind'](_r301_t0);
            r301_xn$assignunicode$7Hrq = function _r301_t2(r302_code) {
                var r302_code, _r302_t0, _r302_t1;
                r301_currentGlyph['assign-unicode'](r302_code);
                return r4_unicodeGlyphs[r301_currentGlyph['unicode'][r301_currentGlyph['unicode']['length'] - 1]] = r301_currentGlyph;
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
            r301_xn$dontexport$5sIl = function _r301_t3() {
                var _r303_t0, _r303_t1;
                return r301_currentGlyph['dontExport'] = true;
            };
            _r301_t0['gizmo'] = r4_globalTransform;
            _r301_t0['set-width'](r4_WIDTH);
            r301_xn$setwidth$9Jrj(r4_WIDTH);
            r301_xn$assignunicode$7Hrq('m');
            r301_include(r4_eMarks);
            r301_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.26);
            r301_m1 = (r4_MIDDLE + r4_SB + r301_sw * 0.25) / 2;
            r301_m2 = r301_m1 + (r4_MIDDLE - r301_sw / 2 - r4_SB);
            r301_include(r301_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r301_sw / 2, 0)['set-width'](0, r301_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r301_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r301_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r301_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r301_sw * 0.4));
            r301_include(r301_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r301_sw - r4_O, 0)['set-width'](0, r301_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r301_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r301_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r301_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r301_sw * 0.4));
            r301_include(r301_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r301_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t115() {
            var r305_currentGlyph, r305_xn$setwidth$9Jrj, r305_xn$assignunicode$7Hrq, r305_xn$startfrom$1aao, r305_xn$lineto$5sIl, r305_xn$curveto$1aao, r305_xn$cubicto$1aao, r305_xn$putshapes$9Jrj, r305_xn$reverselast$3qIs, r305_include, r305_xn$createstroke$7Hrq, r305_xn$setanchor$9Jrj, r305_xn$dontexport$5sIl, _r305_t0, _r305_t1, _r305_t2, _r305_t3;
            _r305_t0 = this;
            r305_currentGlyph = _r305_t0;
            r305_xn$setwidth$9Jrj = _r305_t0['set-width']['bind'](_r305_t0);
            r305_xn$assignunicode$7Hrq = function _r305_t2(r306_code) {
                var r306_code, _r306_t0, _r306_t1;
                r305_currentGlyph['assign-unicode'](r306_code);
                return r4_unicodeGlyphs[r305_currentGlyph['unicode'][r305_currentGlyph['unicode']['length'] - 1]] = r305_currentGlyph;
            };
            r305_xn$startfrom$1aao = _r305_t0['start-from']['bind'](_r305_t0);
            r305_xn$lineto$5sIl = _r305_t0['line-to']['bind'](_r305_t0);
            r305_xn$curveto$1aao = _r305_t0['curve-to']['bind'](_r305_t0);
            r305_xn$cubicto$1aao = _r305_t0['cubic-to']['bind'](_r305_t0);
            r305_xn$putshapes$9Jrj = _r305_t0['put-shapes']['bind'](_r305_t0);
            r305_xn$reverselast$3qIs = _r305_t0['reverse-last']['bind'](_r305_t0);
            r305_include = _r305_t0['include']['bind'](_r305_t0);
            r305_xn$createstroke$7Hrq = _r305_t0['create-stroke']['bind'](_r305_t0);
            r305_xn$setanchor$9Jrj = _r305_t0['set-anchor']['bind'](_r305_t0);
            r305_xn$dontexport$5sIl = function _r305_t3() {
                var _r307_t0, _r307_t1;
                return r305_currentGlyph['dontExport'] = true;
            };
            _r305_t0['gizmo'] = r4_globalTransform;
            _r305_t0['set-width'](r4_WIDTH);
            r305_xn$dontexport$5sIl();
            r305_include(r4_eMarks);
            r305_include(r305_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t116() {
            var r309_currentGlyph, r309_xn$setwidth$9Jrj, r309_xn$assignunicode$7Hrq, r309_xn$startfrom$1aao, r309_xn$lineto$5sIl, r309_xn$curveto$1aao, r309_xn$cubicto$1aao, r309_xn$putshapes$9Jrj, r309_xn$reverselast$3qIs, r309_include, r309_xn$createstroke$7Hrq, r309_xn$setanchor$9Jrj, r309_xn$dontexport$5sIl, _r309_t0, _r309_t1, _r309_t2, _r309_t3;
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
            r309_xn$dontexport$5sIl = function _r309_t3() {
                var _r311_t0, _r311_t1;
                return r309_currentGlyph['dontExport'] = true;
            };
            _r309_t0['gizmo'] = r4_globalTransform;
            _r309_t0['set-width'](r4_WIDTH);
            r309_xn$dontexport$5sIl();
            r309_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r309_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t117() {
            var r313_currentGlyph, r313_xn$setwidth$9Jrj, r313_xn$assignunicode$7Hrq, r313_xn$startfrom$1aao, r313_xn$lineto$5sIl, r313_xn$curveto$1aao, r313_xn$cubicto$1aao, r313_xn$putshapes$9Jrj, r313_xn$reverselast$3qIs, r313_include, r313_xn$createstroke$7Hrq, r313_xn$setanchor$9Jrj, r313_xn$dontexport$5sIl, _r313_t0, _r313_t1, _r313_t2, _r313_t3;
            _r313_t0 = this;
            r313_currentGlyph = _r313_t0;
            r313_xn$setwidth$9Jrj = _r313_t0['set-width']['bind'](_r313_t0);
            r313_xn$assignunicode$7Hrq = function _r313_t2(r314_code) {
                var r314_code, _r314_t0, _r314_t1;
                r313_currentGlyph['assign-unicode'](r314_code);
                return r4_unicodeGlyphs[r313_currentGlyph['unicode'][r313_currentGlyph['unicode']['length'] - 1]] = r313_currentGlyph;
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
            r313_xn$dontexport$5sIl = function _r313_t3() {
                var _r315_t0, _r315_t1;
                return r313_currentGlyph['dontExport'] = true;
            };
            _r313_t0['gizmo'] = r4_globalTransform;
            _r313_t0['set-width'](r4_WIDTH);
            r313_xn$dontexport$5sIl();
            r313_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r313_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t118() {
            var r317_currentGlyph, r317_xn$setwidth$9Jrj, r317_xn$assignunicode$7Hrq, r317_xn$startfrom$1aao, r317_xn$lineto$5sIl, r317_xn$curveto$1aao, r317_xn$cubicto$1aao, r317_xn$putshapes$9Jrj, r317_xn$reverselast$3qIs, r317_include, r317_xn$createstroke$7Hrq, r317_xn$setanchor$9Jrj, r317_xn$dontexport$5sIl, r317_balance, _r317_t0, _r317_t1, _r317_t2, _r317_t3;
            _r317_t0 = this;
            r317_currentGlyph = _r317_t0;
            r317_xn$setwidth$9Jrj = _r317_t0['set-width']['bind'](_r317_t0);
            r317_xn$assignunicode$7Hrq = function _r317_t2(r318_code) {
                var r318_code, _r318_t0, _r318_t1;
                r317_currentGlyph['assign-unicode'](r318_code);
                return r4_unicodeGlyphs[r317_currentGlyph['unicode'][r317_currentGlyph['unicode']['length'] - 1]] = r317_currentGlyph;
            };
            r317_xn$startfrom$1aao = _r317_t0['start-from']['bind'](_r317_t0);
            r317_xn$lineto$5sIl = _r317_t0['line-to']['bind'](_r317_t0);
            r317_xn$curveto$1aao = _r317_t0['curve-to']['bind'](_r317_t0);
            r317_xn$cubicto$1aao = _r317_t0['cubic-to']['bind'](_r317_t0);
            r317_xn$putshapes$9Jrj = _r317_t0['put-shapes']['bind'](_r317_t0);
            r317_xn$reverselast$3qIs = _r317_t0['reverse-last']['bind'](_r317_t0);
            r317_include = _r317_t0['include']['bind'](_r317_t0);
            r317_xn$createstroke$7Hrq = _r317_t0['create-stroke']['bind'](_r317_t0);
            r317_xn$setanchor$9Jrj = _r317_t0['set-anchor']['bind'](_r317_t0);
            r317_xn$dontexport$5sIl = function _r317_t3() {
                var _r319_t0, _r319_t1;
                return r317_currentGlyph['dontExport'] = true;
            };
            _r317_t0['gizmo'] = r4_globalTransform;
            _r317_t0['set-width'](r4_WIDTH);
            r317_xn$dontexport$5sIl();
            r317_include(r4_eMarks);
            r317_balance = r4_ILBALANCE;
            r317_include(r317_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r317_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r317_balance, r4_XH)['heads-to'](r4_UPWARD));
            r317_include(r4_leftwardTopSerif(r4_MIDDLE + r317_balance, r4_XH, r4_LONGJUT - r317_balance));
            r317_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r317_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t119() {
            var r321_currentGlyph, r321_xn$setwidth$9Jrj, r321_xn$assignunicode$7Hrq, r321_xn$startfrom$1aao, r321_xn$lineto$5sIl, r321_xn$curveto$1aao, r321_xn$cubicto$1aao, r321_xn$putshapes$9Jrj, r321_xn$reverselast$3qIs, r321_include, r321_xn$createstroke$7Hrq, r321_xn$setanchor$9Jrj, r321_xn$dontexport$5sIl, _r321_t0, _r321_t1, _r321_t2, _r321_t3;
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
            r321_xn$dontexport$5sIl = function _r321_t3() {
                var _r323_t0, _r323_t1;
                return r321_currentGlyph['dontExport'] = true;
            };
            _r321_t0['gizmo'] = r4_globalTransform;
            _r321_t0['set-width'](r4_WIDTH);
            r321_xn$setwidth$9Jrj(r4_WIDTH);
            r321_xn$assignunicode$7Hrq('i');
            r321_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r321_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t120() {
            var r325_currentGlyph, r325_xn$setwidth$9Jrj, r325_xn$assignunicode$7Hrq, r325_xn$startfrom$1aao, r325_xn$lineto$5sIl, r325_xn$curveto$1aao, r325_xn$cubicto$1aao, r325_xn$putshapes$9Jrj, r325_xn$reverselast$3qIs, r325_include, r325_xn$createstroke$7Hrq, r325_xn$setanchor$9Jrj, r325_xn$dontexport$5sIl, _r325_t0, _r325_t1, _r325_t2, _r325_t3;
            _r325_t0 = this;
            r325_currentGlyph = _r325_t0;
            r325_xn$setwidth$9Jrj = _r325_t0['set-width']['bind'](_r325_t0);
            r325_xn$assignunicode$7Hrq = function _r325_t2(r326_code) {
                var r326_code, _r326_t0, _r326_t1;
                r325_currentGlyph['assign-unicode'](r326_code);
                return r4_unicodeGlyphs[r325_currentGlyph['unicode'][r325_currentGlyph['unicode']['length'] - 1]] = r325_currentGlyph;
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
            r325_xn$dontexport$5sIl = function _r325_t3() {
                var _r327_t0, _r327_t1;
                return r325_currentGlyph['dontExport'] = true;
            };
            _r325_t0['gizmo'] = r4_globalTransform;
            _r325_t0['set-width'](r4_WIDTH);
            r325_xn$dontexport$5sIl();
            r325_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r325_include(r325_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t121() {
            var r329_currentGlyph, r329_xn$setwidth$9Jrj, r329_xn$assignunicode$7Hrq, r329_xn$startfrom$1aao, r329_xn$lineto$5sIl, r329_xn$curveto$1aao, r329_xn$cubicto$1aao, r329_xn$putshapes$9Jrj, r329_xn$reverselast$3qIs, r329_include, r329_xn$createstroke$7Hrq, r329_xn$setanchor$9Jrj, r329_xn$dontexport$5sIl, _r329_t0, _r329_t1, _r329_t2, _r329_t3;
            _r329_t0 = this;
            r329_currentGlyph = _r329_t0;
            r329_xn$setwidth$9Jrj = _r329_t0['set-width']['bind'](_r329_t0);
            r329_xn$assignunicode$7Hrq = function _r329_t2(r330_code) {
                var r330_code, _r330_t0, _r330_t1;
                r329_currentGlyph['assign-unicode'](r330_code);
                return r4_unicodeGlyphs[r329_currentGlyph['unicode'][r329_currentGlyph['unicode']['length'] - 1]] = r329_currentGlyph;
            };
            r329_xn$startfrom$1aao = _r329_t0['start-from']['bind'](_r329_t0);
            r329_xn$lineto$5sIl = _r329_t0['line-to']['bind'](_r329_t0);
            r329_xn$curveto$1aao = _r329_t0['curve-to']['bind'](_r329_t0);
            r329_xn$cubicto$1aao = _r329_t0['cubic-to']['bind'](_r329_t0);
            r329_xn$putshapes$9Jrj = _r329_t0['put-shapes']['bind'](_r329_t0);
            r329_xn$reverselast$3qIs = _r329_t0['reverse-last']['bind'](_r329_t0);
            r329_include = _r329_t0['include']['bind'](_r329_t0);
            r329_xn$createstroke$7Hrq = _r329_t0['create-stroke']['bind'](_r329_t0);
            r329_xn$setanchor$9Jrj = _r329_t0['set-anchor']['bind'](_r329_t0);
            r329_xn$dontexport$5sIl = function _r329_t3() {
                var _r331_t0, _r331_t1;
                return r329_currentGlyph['dontExport'] = true;
            };
            _r329_t0['gizmo'] = r4_globalTransform;
            _r329_t0['set-width'](r4_WIDTH);
            r329_xn$dontexport$5sIl();
            r329_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r329_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t122() {
            var r333_currentGlyph, r333_xn$setwidth$9Jrj, r333_xn$assignunicode$7Hrq, r333_xn$startfrom$1aao, r333_xn$lineto$5sIl, r333_xn$curveto$1aao, r333_xn$cubicto$1aao, r333_xn$putshapes$9Jrj, r333_xn$reverselast$3qIs, r333_include, r333_xn$createstroke$7Hrq, r333_xn$setanchor$9Jrj, r333_xn$dontexport$5sIl, _r333_t0, _r333_t1, _r333_t2, _r333_t3;
            _r333_t0 = this;
            r333_currentGlyph = _r333_t0;
            r333_xn$setwidth$9Jrj = _r333_t0['set-width']['bind'](_r333_t0);
            r333_xn$assignunicode$7Hrq = function _r333_t2(r334_code) {
                var r334_code, _r334_t0, _r334_t1;
                r333_currentGlyph['assign-unicode'](r334_code);
                return r4_unicodeGlyphs[r333_currentGlyph['unicode'][r333_currentGlyph['unicode']['length'] - 1]] = r333_currentGlyph;
            };
            r333_xn$startfrom$1aao = _r333_t0['start-from']['bind'](_r333_t0);
            r333_xn$lineto$5sIl = _r333_t0['line-to']['bind'](_r333_t0);
            r333_xn$curveto$1aao = _r333_t0['curve-to']['bind'](_r333_t0);
            r333_xn$cubicto$1aao = _r333_t0['cubic-to']['bind'](_r333_t0);
            r333_xn$putshapes$9Jrj = _r333_t0['put-shapes']['bind'](_r333_t0);
            r333_xn$reverselast$3qIs = _r333_t0['reverse-last']['bind'](_r333_t0);
            r333_include = _r333_t0['include']['bind'](_r333_t0);
            r333_xn$createstroke$7Hrq = _r333_t0['create-stroke']['bind'](_r333_t0);
            r333_xn$setanchor$9Jrj = _r333_t0['set-anchor']['bind'](_r333_t0);
            r333_xn$dontexport$5sIl = function _r333_t3() {
                var _r335_t0, _r335_t1;
                return r333_currentGlyph['dontExport'] = true;
            };
            _r333_t0['gizmo'] = r4_globalTransform;
            _r333_t0['set-width'](r4_WIDTH);
            r333_xn$setwidth$9Jrj(r4_WIDTH);
            r333_xn$assignunicode$7Hrq('j');
            r333_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r333_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t123() {
            var r337_currentGlyph, r337_xn$setwidth$9Jrj, r337_xn$assignunicode$7Hrq, r337_xn$startfrom$1aao, r337_xn$lineto$5sIl, r337_xn$curveto$1aao, r337_xn$cubicto$1aao, r337_xn$putshapes$9Jrj, r337_xn$reverselast$3qIs, r337_include, r337_xn$createstroke$7Hrq, r337_xn$setanchor$9Jrj, r337_xn$dontexport$5sIl, _r337_t0, _r337_t1, _r337_t2, _r337_t3;
            _r337_t0 = this;
            r337_currentGlyph = _r337_t0;
            r337_xn$setwidth$9Jrj = _r337_t0['set-width']['bind'](_r337_t0);
            r337_xn$assignunicode$7Hrq = function _r337_t2(r338_code) {
                var r338_code, _r338_t0, _r338_t1;
                r337_currentGlyph['assign-unicode'](r338_code);
                return r4_unicodeGlyphs[r337_currentGlyph['unicode'][r337_currentGlyph['unicode']['length'] - 1]] = r337_currentGlyph;
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
            r337_xn$dontexport$5sIl = function _r337_t3() {
                var _r339_t0, _r339_t1;
                return r337_currentGlyph['dontExport'] = true;
            };
            _r337_t0['gizmo'] = r4_globalTransform;
            _r337_t0['set-width'](r4_WIDTH);
            r337_include(r4_bMarks);
            r337_xn$dontexport$5sIl();
            r337_include(r337_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t124() {
            var r341_currentGlyph, r341_xn$setwidth$9Jrj, r341_xn$assignunicode$7Hrq, r341_xn$startfrom$1aao, r341_xn$lineto$5sIl, r341_xn$curveto$1aao, r341_xn$cubicto$1aao, r341_xn$putshapes$9Jrj, r341_xn$reverselast$3qIs, r341_include, r341_xn$createstroke$7Hrq, r341_xn$setanchor$9Jrj, r341_xn$dontexport$5sIl, _r341_t0, _r341_t1, _r341_t2, _r341_t3;
            _r341_t0 = this;
            r341_currentGlyph = _r341_t0;
            r341_xn$setwidth$9Jrj = _r341_t0['set-width']['bind'](_r341_t0);
            r341_xn$assignunicode$7Hrq = function _r341_t2(r342_code) {
                var r342_code, _r342_t0, _r342_t1;
                r341_currentGlyph['assign-unicode'](r342_code);
                return r4_unicodeGlyphs[r341_currentGlyph['unicode'][r341_currentGlyph['unicode']['length'] - 1]] = r341_currentGlyph;
            };
            r341_xn$startfrom$1aao = _r341_t0['start-from']['bind'](_r341_t0);
            r341_xn$lineto$5sIl = _r341_t0['line-to']['bind'](_r341_t0);
            r341_xn$curveto$1aao = _r341_t0['curve-to']['bind'](_r341_t0);
            r341_xn$cubicto$1aao = _r341_t0['cubic-to']['bind'](_r341_t0);
            r341_xn$putshapes$9Jrj = _r341_t0['put-shapes']['bind'](_r341_t0);
            r341_xn$reverselast$3qIs = _r341_t0['reverse-last']['bind'](_r341_t0);
            r341_include = _r341_t0['include']['bind'](_r341_t0);
            r341_xn$createstroke$7Hrq = _r341_t0['create-stroke']['bind'](_r341_t0);
            r341_xn$setanchor$9Jrj = _r341_t0['set-anchor']['bind'](_r341_t0);
            r341_xn$dontexport$5sIl = function _r341_t3() {
                var _r343_t0, _r343_t1;
                return r341_currentGlyph['dontExport'] = true;
            };
            _r341_t0['gizmo'] = r4_globalTransform;
            _r341_t0['set-width'](r4_WIDTH);
            r341_include(r4_bMarks);
            r341_xn$dontexport$5sIl();
            r341_include(r4_glyphs['l.straight']);
            r341_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t125() {
            var r345_currentGlyph, r345_xn$setwidth$9Jrj, r345_xn$assignunicode$7Hrq, r345_xn$startfrom$1aao, r345_xn$lineto$5sIl, r345_xn$curveto$1aao, r345_xn$cubicto$1aao, r345_xn$putshapes$9Jrj, r345_xn$reverselast$3qIs, r345_include, r345_xn$createstroke$7Hrq, r345_xn$setanchor$9Jrj, r345_xn$dontexport$5sIl, _r345_t0, _r345_t1, _r345_t2, _r345_t3;
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
            r345_xn$dontexport$5sIl = function _r345_t3() {
                var _r347_t0, _r347_t1;
                return r345_currentGlyph['dontExport'] = true;
            };
            _r345_t0['gizmo'] = r4_globalTransform;
            _r345_t0['set-width'](r4_WIDTH);
            r345_include(r4_bMarks);
            r345_xn$dontexport$5sIl();
            r345_include(r4_glyphs['l.hooky']);
            r345_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t126() {
            var r349_currentGlyph, r349_xn$setwidth$9Jrj, r349_xn$assignunicode$7Hrq, r349_xn$startfrom$1aao, r349_xn$lineto$5sIl, r349_xn$curveto$1aao, r349_xn$cubicto$1aao, r349_xn$putshapes$9Jrj, r349_xn$reverselast$3qIs, r349_include, r349_xn$createstroke$7Hrq, r349_xn$setanchor$9Jrj, r349_xn$dontexport$5sIl, r349_balance, _r349_t0, _r349_t1, _r349_t2, _r349_t3;
            _r349_t0 = this;
            r349_currentGlyph = _r349_t0;
            r349_xn$setwidth$9Jrj = _r349_t0['set-width']['bind'](_r349_t0);
            r349_xn$assignunicode$7Hrq = function _r349_t2(r350_code) {
                var r350_code, _r350_t0, _r350_t1;
                r349_currentGlyph['assign-unicode'](r350_code);
                return r4_unicodeGlyphs[r349_currentGlyph['unicode'][r349_currentGlyph['unicode']['length'] - 1]] = r349_currentGlyph;
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
            r349_xn$dontexport$5sIl = function _r349_t3() {
                var _r351_t0, _r351_t1;
                return r349_currentGlyph['dontExport'] = true;
            };
            _r349_t0['gizmo'] = r4_globalTransform;
            _r349_t0['set-width'](r4_WIDTH);
            r349_include(r4_bMarks);
            r349_xn$dontexport$5sIl();
            r349_balance = r4_ILBALANCE;
            r349_include(r349_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r349_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r349_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r349_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r349_balance, r4_CAP, r4_LONGJUT - r349_balance));
            r349_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t127() {
            var r353_currentGlyph, r353_xn$setwidth$9Jrj, r353_xn$assignunicode$7Hrq, r353_xn$startfrom$1aao, r353_xn$lineto$5sIl, r353_xn$curveto$1aao, r353_xn$cubicto$1aao, r353_xn$putshapes$9Jrj, r353_xn$reverselast$3qIs, r353_include, r353_xn$createstroke$7Hrq, r353_xn$setanchor$9Jrj, r353_xn$dontexport$5sIl, r353_TURN, _r353_t0, _r353_t1, _r353_t2, _r353_t3;
            _r353_t0 = this;
            r353_currentGlyph = _r353_t0;
            r353_xn$setwidth$9Jrj = _r353_t0['set-width']['bind'](_r353_t0);
            r353_xn$assignunicode$7Hrq = function _r353_t2(r354_code) {
                var r354_code, _r354_t0, _r354_t1;
                r353_currentGlyph['assign-unicode'](r354_code);
                return r4_unicodeGlyphs[r353_currentGlyph['unicode'][r353_currentGlyph['unicode']['length'] - 1]] = r353_currentGlyph;
            };
            r353_xn$startfrom$1aao = _r353_t0['start-from']['bind'](_r353_t0);
            r353_xn$lineto$5sIl = _r353_t0['line-to']['bind'](_r353_t0);
            r353_xn$curveto$1aao = _r353_t0['curve-to']['bind'](_r353_t0);
            r353_xn$cubicto$1aao = _r353_t0['cubic-to']['bind'](_r353_t0);
            r353_xn$putshapes$9Jrj = _r353_t0['put-shapes']['bind'](_r353_t0);
            r353_xn$reverselast$3qIs = _r353_t0['reverse-last']['bind'](_r353_t0);
            r353_include = _r353_t0['include']['bind'](_r353_t0);
            r353_xn$createstroke$7Hrq = _r353_t0['create-stroke']['bind'](_r353_t0);
            r353_xn$setanchor$9Jrj = _r353_t0['set-anchor']['bind'](_r353_t0);
            r353_xn$dontexport$5sIl = function _r353_t3() {
                var _r355_t0, _r355_t1;
                return r353_currentGlyph['dontExport'] = true;
            };
            _r353_t0['gizmo'] = r4_globalTransform;
            _r353_t0['set-width'](r4_WIDTH);
            r353_xn$setwidth$9Jrj(r4_WIDTH);
            r353_xn$assignunicode$7Hrq('x');
            r353_include(r4_eMarks);
            r353_TURN = r4_XH * 0.1;
            r353_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r353_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t128() {
            var r357_currentGlyph, r357_xn$setwidth$9Jrj, r357_xn$assignunicode$7Hrq, r357_xn$startfrom$1aao, r357_xn$lineto$5sIl, r357_xn$curveto$1aao, r357_xn$cubicto$1aao, r357_xn$putshapes$9Jrj, r357_xn$reverselast$3qIs, r357_include, r357_xn$createstroke$7Hrq, r357_xn$setanchor$9Jrj, r357_xn$dontexport$5sIl, r357_TURN, _r357_t0, _r357_t1, _r357_t2, _r357_t3;
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
            r357_xn$dontexport$5sIl = function _r357_t3() {
                var _r359_t0, _r359_t1;
                return r357_currentGlyph['dontExport'] = true;
            };
            _r357_t0['gizmo'] = r4_globalTransform;
            _r357_t0['set-width'](r4_WIDTH);
            r357_xn$setwidth$9Jrj(r4_WIDTH);
            r357_xn$assignunicode$7Hrq('v');
            r357_include(r4_eMarks);
            r357_TURN = r4_XH * 0.9;
            r357_include(r357_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r357_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r357_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r357_include(r357_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r357_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r357_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r357_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r357_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r357_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t129() {
            var r361_currentGlyph, r361_xn$setwidth$9Jrj, r361_xn$assignunicode$7Hrq, r361_xn$startfrom$1aao, r361_xn$lineto$5sIl, r361_xn$curveto$1aao, r361_xn$cubicto$1aao, r361_xn$putshapes$9Jrj, r361_xn$reverselast$3qIs, r361_include, r361_xn$createstroke$7Hrq, r361_xn$setanchor$9Jrj, r361_xn$dontexport$5sIl, r361_TURN, r361_turn2, r361_wheight, r361_bottomStroke, r361_m1, r361_m2, _r361_t0, _r361_t1, _r361_t2, _r361_t3;
            _r361_t0 = this;
            r361_currentGlyph = _r361_t0;
            r361_xn$setwidth$9Jrj = _r361_t0['set-width']['bind'](_r361_t0);
            r361_xn$assignunicode$7Hrq = function _r361_t2(r362_code) {
                var r362_code, _r362_t0, _r362_t1;
                r361_currentGlyph['assign-unicode'](r362_code);
                return r4_unicodeGlyphs[r361_currentGlyph['unicode'][r361_currentGlyph['unicode']['length'] - 1]] = r361_currentGlyph;
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
            r361_xn$dontexport$5sIl = function _r361_t3() {
                var _r363_t0, _r363_t1;
                return r361_currentGlyph['dontExport'] = true;
            };
            _r361_t0['gizmo'] = r4_globalTransform;
            _r361_t0['set-width'](r4_WIDTH);
            r361_xn$setwidth$9Jrj(r4_WIDTH);
            r361_xn$assignunicode$7Hrq('w');
            r361_include(r4_eMarks);
            r361_TURN = r4_XH * 0.75;
            r361_turn2 = r4_XH * 0.59;
            r361_wheight = r4_XH * 0.6;
            r361_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r361_m1 = r4_WIDTH * 0.325;
            r361_m2 = r4_WIDTH * 0.675;
            r361_include(r361_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r361_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r361_TURN, r361_m1 - r361_bottomStroke / 2, 0)['set-width'](r361_bottomStroke, 0));
            r361_include(r361_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r361_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r361_TURN, r361_m2 + r361_bottomStroke / 2, 0)['set-width'](0, r361_bottomStroke));
            r361_include(r361_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r361_bottomStroke / 2, r361_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r361_bottomStroke)['line-to'](r4_MIDDLE + r361_bottomStroke / 2, r361_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r361_bottomStroke / 2, (1 - 0.1) * r361_turn2, r361_m1 + r361_bottomStroke / 2, 0)['set-width'](0, r361_bottomStroke));
            r361_include(r361_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r361_bottomStroke / 2, r361_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r361_bottomStroke, 0)['line-to'](r4_MIDDLE - r361_bottomStroke / 2, r361_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r361_bottomStroke / 2, (1 - 0.1) * r361_turn2, r361_m2 - r361_bottomStroke / 2, 0)['set-width'](r361_bottomStroke, 0));
            r361_xn$startfrom$1aao(r361_m1 + r361_bottomStroke / 2, 0);
            r361_xn$lineto$5sIl(r361_m1 - r361_bottomStroke / 2, 0);
            r361_xn$lineto$5sIl(r361_m1, r361_bottomStroke);
            r361_xn$startfrom$1aao(r361_m2 + r361_bottomStroke / 2, 0);
            r361_xn$lineto$5sIl(r361_m2 - r361_bottomStroke / 2, 0);
            r361_xn$lineto$5sIl(r361_m2, r361_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t130() {
            var r365_currentGlyph, r365_xn$setwidth$9Jrj, r365_xn$assignunicode$7Hrq, r365_xn$startfrom$1aao, r365_xn$lineto$5sIl, r365_xn$curveto$1aao, r365_xn$cubicto$1aao, r365_xn$putshapes$9Jrj, r365_xn$reverselast$3qIs, r365_include, r365_xn$createstroke$7Hrq, r365_xn$setanchor$9Jrj, r365_xn$dontexport$5sIl, r365_xbottom, r365_turnp, r365_xb, r365_yb, _r365_t0, _r365_t1, _r365_t2, _r365_t3;
            _r365_t0 = this;
            r365_currentGlyph = _r365_t0;
            r365_xn$setwidth$9Jrj = _r365_t0['set-width']['bind'](_r365_t0);
            r365_xn$assignunicode$7Hrq = function _r365_t2(r366_code) {
                var r366_code, _r366_t0, _r366_t1;
                r365_currentGlyph['assign-unicode'](r366_code);
                return r4_unicodeGlyphs[r365_currentGlyph['unicode'][r365_currentGlyph['unicode']['length'] - 1]] = r365_currentGlyph;
            };
            r365_xn$startfrom$1aao = _r365_t0['start-from']['bind'](_r365_t0);
            r365_xn$lineto$5sIl = _r365_t0['line-to']['bind'](_r365_t0);
            r365_xn$curveto$1aao = _r365_t0['curve-to']['bind'](_r365_t0);
            r365_xn$cubicto$1aao = _r365_t0['cubic-to']['bind'](_r365_t0);
            r365_xn$putshapes$9Jrj = _r365_t0['put-shapes']['bind'](_r365_t0);
            r365_xn$reverselast$3qIs = _r365_t0['reverse-last']['bind'](_r365_t0);
            r365_include = _r365_t0['include']['bind'](_r365_t0);
            r365_xn$createstroke$7Hrq = _r365_t0['create-stroke']['bind'](_r365_t0);
            r365_xn$setanchor$9Jrj = _r365_t0['set-anchor']['bind'](_r365_t0);
            r365_xn$dontexport$5sIl = function _r365_t3() {
                var _r367_t0, _r367_t1;
                return r365_currentGlyph['dontExport'] = true;
            };
            _r365_t0['gizmo'] = r4_globalTransform;
            _r365_t0['set-width'](r4_WIDTH);
            r365_xn$setwidth$9Jrj(r4_WIDTH);
            r365_xn$assignunicode$7Hrq('y');
            r365_include(r4_pMarks);
            r365_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r365_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r365_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r365_yb = r0_mix(0, r4_XH, 0.05 * r365_turnp);
            r365_include(r4_xStrand(r365_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r365_include(r4_halfXStrand(r4_SB, r4_XH, r365_xb, r365_yb, 0.1 * r365_turnp, 0.4, 0.14 * r365_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t131() {
            var r369_currentGlyph, r369_xn$setwidth$9Jrj, r369_xn$assignunicode$7Hrq, r369_xn$startfrom$1aao, r369_xn$lineto$5sIl, r369_xn$curveto$1aao, r369_xn$cubicto$1aao, r369_xn$putshapes$9Jrj, r369_xn$reverselast$3qIs, r369_include, r369_xn$createstroke$7Hrq, r369_xn$setanchor$9Jrj, r369_xn$dontexport$5sIl, r369_cor, _r369_t0, _r369_t1, _r369_t2, _r369_t3;
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
            r369_xn$dontexport$5sIl = function _r369_t3() {
                var _r371_t0, _r371_t1;
                return r369_currentGlyph['dontExport'] = true;
            };
            _r369_t0['gizmo'] = r4_globalTransform;
            _r369_t0['set-width'](r4_WIDTH);
            r369_xn$setwidth$9Jrj(r4_WIDTH);
            r369_xn$assignunicode$7Hrq('z');
            r369_include(r4_eMarks);
            r369_cor = 1.2;
            r369_include(r369_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r369_include(r369_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r369_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r369_xn$lineto$5sIl(r4_SB + r4_STROKE * r369_cor, r4_STROKE);
            r369_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r369_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r369_cor, r4_XH - r4_STROKE);
            r369_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t132() {
            var r373_currentGlyph, r373_xn$setwidth$9Jrj, r373_xn$assignunicode$7Hrq, r373_xn$startfrom$1aao, r373_xn$lineto$5sIl, r373_xn$curveto$1aao, r373_xn$cubicto$1aao, r373_xn$putshapes$9Jrj, r373_xn$reverselast$3qIs, r373_include, r373_xn$createstroke$7Hrq, r373_xn$setanchor$9Jrj, r373_xn$dontexport$5sIl, r373_TURN, r373_rturn, r373_right, r373_attach, r373_attach2, r373_fine, _r373_t0, _r373_t1, _r373_t2, _r373_t3;
            _r373_t0 = this;
            r373_currentGlyph = _r373_t0;
            r373_xn$setwidth$9Jrj = _r373_t0['set-width']['bind'](_r373_t0);
            r373_xn$assignunicode$7Hrq = function _r373_t2(r374_code) {
                var r374_code, _r374_t0, _r374_t1;
                r373_currentGlyph['assign-unicode'](r374_code);
                return r4_unicodeGlyphs[r373_currentGlyph['unicode'][r373_currentGlyph['unicode']['length'] - 1]] = r373_currentGlyph;
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
            r373_xn$dontexport$5sIl = function _r373_t3() {
                var _r375_t0, _r375_t1;
                return r373_currentGlyph['dontExport'] = true;
            };
            _r373_t0['gizmo'] = r4_globalTransform;
            _r373_t0['set-width'](r4_WIDTH);
            r373_xn$setwidth$9Jrj(r4_WIDTH);
            r373_xn$assignunicode$7Hrq('k');
            r373_include(r4_bMarks);
            r373_TURN = r4_XH * 0.99;
            r373_rturn = r4_XH * 0.1;
            r373_right = r4_RIGHTSB - r4_O;
            r373_attach = r4_XH * 0.4;
            r373_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r373_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r373_include(r373_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r373_include(r373_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r373_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r373_TURN, r4_SB + r4_STROKE, r373_attach)['set-width'](0, r373_fine));
            r373_include(r373_xn$createstroke$7Hrq()['start-from'](r373_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r373_right - r4_HALFSTROKE, r373_rturn + 0.05 * (r4_XH - r373_rturn), r373_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r373_fine / 2, r373_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t133() {
            var r377_currentGlyph, r377_xn$setwidth$9Jrj, r377_xn$assignunicode$7Hrq, r377_xn$startfrom$1aao, r377_xn$lineto$5sIl, r377_xn$curveto$1aao, r377_xn$cubicto$1aao, r377_xn$putshapes$9Jrj, r377_xn$reverselast$3qIs, r377_include, r377_xn$createstroke$7Hrq, r377_xn$setanchor$9Jrj, r377_xn$dontexport$5sIl, _r377_t0, _r377_t1, _r377_t2, _r377_t3;
            _r377_t0 = this;
            r377_currentGlyph = _r377_t0;
            r377_xn$setwidth$9Jrj = _r377_t0['set-width']['bind'](_r377_t0);
            r377_xn$assignunicode$7Hrq = function _r377_t2(r378_code) {
                var r378_code, _r378_t0, _r378_t1;
                r377_currentGlyph['assign-unicode'](r378_code);
                return r4_unicodeGlyphs[r377_currentGlyph['unicode'][r377_currentGlyph['unicode']['length'] - 1]] = r377_currentGlyph;
            };
            r377_xn$startfrom$1aao = _r377_t0['start-from']['bind'](_r377_t0);
            r377_xn$lineto$5sIl = _r377_t0['line-to']['bind'](_r377_t0);
            r377_xn$curveto$1aao = _r377_t0['curve-to']['bind'](_r377_t0);
            r377_xn$cubicto$1aao = _r377_t0['cubic-to']['bind'](_r377_t0);
            r377_xn$putshapes$9Jrj = _r377_t0['put-shapes']['bind'](_r377_t0);
            r377_xn$reverselast$3qIs = _r377_t0['reverse-last']['bind'](_r377_t0);
            r377_include = _r377_t0['include']['bind'](_r377_t0);
            r377_xn$createstroke$7Hrq = _r377_t0['create-stroke']['bind'](_r377_t0);
            r377_xn$setanchor$9Jrj = _r377_t0['set-anchor']['bind'](_r377_t0);
            r377_xn$dontexport$5sIl = function _r377_t3() {
                var _r379_t0, _r379_t1;
                return r377_currentGlyph['dontExport'] = true;
            };
            _r377_t0['gizmo'] = r4_globalTransform;
            _r377_t0['set-width'](r4_WIDTH);
            r377_xn$setwidth$9Jrj(r4_WIDTH);
            r377_xn$assignunicode$7Hrq('s');
            r377_include(r4_eMarks);
            r377_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r377_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r377_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t134() {
            var r381_currentGlyph, r381_xn$setwidth$9Jrj, r381_xn$assignunicode$7Hrq, r381_xn$startfrom$1aao, r381_xn$lineto$5sIl, r381_xn$curveto$1aao, r381_xn$cubicto$1aao, r381_xn$putshapes$9Jrj, r381_xn$reverselast$3qIs, r381_include, r381_xn$createstroke$7Hrq, r381_xn$setanchor$9Jrj, r381_xn$dontexport$5sIl, r381_slope, r381_expand, r381_coexpand, r381_rhookx, r381_rmiddle, _r381_t0, _r381_t1, _r381_t2, _r381_t3;
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
            r381_xn$dontexport$5sIl = function _r381_t3() {
                var _r383_t0, _r383_t1;
                return r381_currentGlyph['dontExport'] = true;
            };
            _r381_t0['gizmo'] = r4_globalTransform;
            _r381_t0['set-width'](r4_WIDTH);
            r381_xn$setwidth$9Jrj(r4_WIDTH);
            r381_xn$assignunicode$7Hrq('r');
            r381_include(r4_eMarks);
            r381_slope = 0.015;
            r381_expand = 0.175;
            r381_coexpand = (1 - r381_expand) / 2;
            r381_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r381_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r381_rhookx - r4_HALFSTROKE, 0.5);
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r381_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r381_rmiddle, r381_rhookx, r4_KAPPA_AHOOK), r4_XO, r381_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r381_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r381_include(r381_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('fbar', function _r4_t135() {
            var r385_currentGlyph, r385_xn$setwidth$9Jrj, r385_xn$assignunicode$7Hrq, r385_xn$startfrom$1aao, r385_xn$lineto$5sIl, r385_xn$curveto$1aao, r385_xn$cubicto$1aao, r385_xn$putshapes$9Jrj, r385_xn$reverselast$3qIs, r385_include, r385_xn$createstroke$7Hrq, r385_xn$setanchor$9Jrj, r385_xn$dontexport$5sIl, _r385_t0, _r385_t1, _r385_t2, _r385_t3;
            _r385_t0 = this;
            r385_currentGlyph = _r385_t0;
            r385_xn$setwidth$9Jrj = _r385_t0['set-width']['bind'](_r385_t0);
            r385_xn$assignunicode$7Hrq = function _r385_t2(r386_code) {
                var r386_code, _r386_t0, _r386_t1;
                r385_currentGlyph['assign-unicode'](r386_code);
                return r4_unicodeGlyphs[r385_currentGlyph['unicode'][r385_currentGlyph['unicode']['length'] - 1]] = r385_currentGlyph;
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
            r385_xn$dontexport$5sIl = function _r385_t3() {
                var _r387_t0, _r387_t1;
                return r385_currentGlyph['dontExport'] = true;
            };
            _r385_t0['gizmo'] = r4_globalTransform;
            _r385_t0['set-width'](r4_WIDTH);
            r385_xn$dontexport$5sIl();
            r385_include(r385_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh.upright', function _r4_t136() {
            var r389_currentGlyph, r389_xn$setwidth$9Jrj, r389_xn$assignunicode$7Hrq, r389_xn$startfrom$1aao, r389_xn$lineto$5sIl, r389_xn$curveto$1aao, r389_xn$cubicto$1aao, r389_xn$putshapes$9Jrj, r389_xn$reverselast$3qIs, r389_include, r389_xn$createstroke$7Hrq, r389_xn$setanchor$9Jrj, r389_xn$dontexport$5sIl, _r389_t0, _r389_t1, _r389_t2, _r389_t3;
            _r389_t0 = this;
            r389_currentGlyph = _r389_t0;
            r389_xn$setwidth$9Jrj = _r389_t0['set-width']['bind'](_r389_t0);
            r389_xn$assignunicode$7Hrq = function _r389_t2(r390_code) {
                var r390_code, _r390_t0, _r390_t1;
                r389_currentGlyph['assign-unicode'](r390_code);
                return r4_unicodeGlyphs[r389_currentGlyph['unicode'][r389_currentGlyph['unicode']['length'] - 1]] = r389_currentGlyph;
            };
            r389_xn$startfrom$1aao = _r389_t0['start-from']['bind'](_r389_t0);
            r389_xn$lineto$5sIl = _r389_t0['line-to']['bind'](_r389_t0);
            r389_xn$curveto$1aao = _r389_t0['curve-to']['bind'](_r389_t0);
            r389_xn$cubicto$1aao = _r389_t0['cubic-to']['bind'](_r389_t0);
            r389_xn$putshapes$9Jrj = _r389_t0['put-shapes']['bind'](_r389_t0);
            r389_xn$reverselast$3qIs = _r389_t0['reverse-last']['bind'](_r389_t0);
            r389_include = _r389_t0['include']['bind'](_r389_t0);
            r389_xn$createstroke$7Hrq = _r389_t0['create-stroke']['bind'](_r389_t0);
            r389_xn$setanchor$9Jrj = _r389_t0['set-anchor']['bind'](_r389_t0);
            r389_xn$dontexport$5sIl = function _r389_t3() {
                var _r391_t0, _r391_t1;
                return r389_currentGlyph['dontExport'] = true;
            };
            _r389_t0['gizmo'] = r4_globalTransform;
            _r389_t0['set-width'](r4_WIDTH);
            r389_xn$setwidth$9Jrj(r4_WIDTH);
            r389_xn$dontexport$5sIl();
            r389_include(r4_bMarks);
            r389_include(r389_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_eshHook = function _r4_t137(r392_attach) {
            var r392_attach, _r392_t0, _r392_t1, _r392_t2;
            return function _r392_t2() {
                var r394_currentGlyph, r394_xn$setwidth$9Jrj, r394_xn$assignunicode$7Hrq, r394_xn$startfrom$1aao, r394_xn$lineto$5sIl, r394_xn$curveto$1aao, r394_xn$cubicto$1aao, r394_xn$putshapes$9Jrj, r394_xn$reverselast$3qIs, r394_include, r394_xn$createstroke$7Hrq, r394_xn$setanchor$9Jrj, r394_xn$dontexport$5sIl, _r394_t0, _r394_t1, _r394_t2, _r394_t3;
                _r394_t0 = this;
                r394_currentGlyph = _r394_t0;
                r394_xn$setwidth$9Jrj = _r394_t0['set-width']['bind'](_r394_t0);
                r394_xn$assignunicode$7Hrq = function _r394_t2(r395_code) {
                    var r395_code, _r395_t0, _r395_t1;
                    r394_currentGlyph['assign-unicode'](r395_code);
                    return r4_unicodeGlyphs[r394_currentGlyph['unicode'][r394_currentGlyph['unicode']['length'] - 1]] = r394_currentGlyph;
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
                r394_xn$dontexport$5sIl = function _r394_t3() {
                    var _r396_t0, _r396_t1;
                    return r394_currentGlyph['dontExport'] = true;
                };
                _r394_t0['gizmo'] = r4_globalTransform;
                _r394_t0['set-width'](r4_WIDTH);
                r394_include(r394_xn$createstroke$7Hrq()['start-from'](r392_attach['x'] - r4_SHOOK * 2, r392_attach['y'] + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r392_attach['x'], r392_attach['y'])['line-to'](r392_attach['x'], r392_attach['y'] + r4_STROKE));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('esh.italic', function _r4_t138() {
            var r398_currentGlyph, r398_xn$setwidth$9Jrj, r398_xn$assignunicode$7Hrq, r398_xn$startfrom$1aao, r398_xn$lineto$5sIl, r398_xn$curveto$1aao, r398_xn$cubicto$1aao, r398_xn$putshapes$9Jrj, r398_xn$reverselast$3qIs, r398_include, r398_xn$createstroke$7Hrq, r398_xn$setanchor$9Jrj, r398_xn$dontexport$5sIl, _r398_t0, _r398_t1, _r398_t2, _r398_t3;
            _r398_t0 = this;
            r398_currentGlyph = _r398_t0;
            r398_xn$setwidth$9Jrj = _r398_t0['set-width']['bind'](_r398_t0);
            r398_xn$assignunicode$7Hrq = function _r398_t2(r399_code) {
                var r399_code, _r399_t0, _r399_t1;
                r398_currentGlyph['assign-unicode'](r399_code);
                return r4_unicodeGlyphs[r398_currentGlyph['unicode'][r398_currentGlyph['unicode']['length'] - 1]] = r398_currentGlyph;
            };
            r398_xn$startfrom$1aao = _r398_t0['start-from']['bind'](_r398_t0);
            r398_xn$lineto$5sIl = _r398_t0['line-to']['bind'](_r398_t0);
            r398_xn$curveto$1aao = _r398_t0['curve-to']['bind'](_r398_t0);
            r398_xn$cubicto$1aao = _r398_t0['cubic-to']['bind'](_r398_t0);
            r398_xn$putshapes$9Jrj = _r398_t0['put-shapes']['bind'](_r398_t0);
            r398_xn$reverselast$3qIs = _r398_t0['reverse-last']['bind'](_r398_t0);
            r398_include = _r398_t0['include']['bind'](_r398_t0);
            r398_xn$createstroke$7Hrq = _r398_t0['create-stroke']['bind'](_r398_t0);
            r398_xn$setanchor$9Jrj = _r398_t0['set-anchor']['bind'](_r398_t0);
            r398_xn$dontexport$5sIl = function _r398_t3() {
                var _r400_t0, _r400_t1;
                return r398_currentGlyph['dontExport'] = true;
            };
            _r398_t0['gizmo'] = r4_globalTransform;
            _r398_t0['set-width'](r4_WIDTH);
            r398_xn$setwidth$9Jrj(r4_WIDTH);
            r398_xn$dontexport$5sIl();
            r398_include(r4_ifMarks);
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh', function _r4_t139() {
            var r402_currentGlyph, r402_xn$setwidth$9Jrj, r402_xn$assignunicode$7Hrq, r402_xn$startfrom$1aao, r402_xn$lineto$5sIl, r402_xn$curveto$1aao, r402_xn$cubicto$1aao, r402_xn$putshapes$9Jrj, r402_xn$reverselast$3qIs, r402_include, r402_xn$createstroke$7Hrq, r402_xn$setanchor$9Jrj, r402_xn$dontexport$5sIl, _r402_t0, _r402_t1, _r402_t2, _r402_t3;
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
            r402_xn$dontexport$5sIl = function _r402_t3() {
                var _r404_t0, _r404_t1;
                return r402_currentGlyph['dontExport'] = true;
            };
            _r402_t0['gizmo'] = r4_globalTransform;
            _r402_t0['set-width'](r4_WIDTH);
            r402_xn$setwidth$9Jrj(r4_WIDTH);
            r402_xn$assignunicode$7Hrq(383);
            if (r4_para['italicangle'] > 0) {
                r402_include(r4_glyphs['esh.italic'], r4_AS_BASE);
            } else {
                r402_include(r4_glyphs['esh.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t140() {
            var r406_currentGlyph, r406_xn$setwidth$9Jrj, r406_xn$assignunicode$7Hrq, r406_xn$startfrom$1aao, r406_xn$lineto$5sIl, r406_xn$curveto$1aao, r406_xn$cubicto$1aao, r406_xn$putshapes$9Jrj, r406_xn$reverselast$3qIs, r406_include, r406_xn$createstroke$7Hrq, r406_xn$setanchor$9Jrj, r406_xn$dontexport$5sIl, _r406_t0, _r406_t1, _r406_t2, _r406_t3;
            _r406_t0 = this;
            r406_currentGlyph = _r406_t0;
            r406_xn$setwidth$9Jrj = _r406_t0['set-width']['bind'](_r406_t0);
            r406_xn$assignunicode$7Hrq = function _r406_t2(r407_code) {
                var r407_code, _r407_t0, _r407_t1;
                r406_currentGlyph['assign-unicode'](r407_code);
                return r4_unicodeGlyphs[r406_currentGlyph['unicode'][r406_currentGlyph['unicode']['length'] - 1]] = r406_currentGlyph;
            };
            r406_xn$startfrom$1aao = _r406_t0['start-from']['bind'](_r406_t0);
            r406_xn$lineto$5sIl = _r406_t0['line-to']['bind'](_r406_t0);
            r406_xn$curveto$1aao = _r406_t0['curve-to']['bind'](_r406_t0);
            r406_xn$cubicto$1aao = _r406_t0['cubic-to']['bind'](_r406_t0);
            r406_xn$putshapes$9Jrj = _r406_t0['put-shapes']['bind'](_r406_t0);
            r406_xn$reverselast$3qIs = _r406_t0['reverse-last']['bind'](_r406_t0);
            r406_include = _r406_t0['include']['bind'](_r406_t0);
            r406_xn$createstroke$7Hrq = _r406_t0['create-stroke']['bind'](_r406_t0);
            r406_xn$setanchor$9Jrj = _r406_t0['set-anchor']['bind'](_r406_t0);
            r406_xn$dontexport$5sIl = function _r406_t3() {
                var _r408_t0, _r408_t1;
                return r406_currentGlyph['dontExport'] = true;
            };
            _r406_t0['gizmo'] = r4_globalTransform;
            _r406_t0['set-width'](r4_WIDTH);
            r406_xn$setwidth$9Jrj(r4_WIDTH);
            r406_xn$assignunicode$7Hrq('f');
            r406_include(r4_glyphs['esh'], r4_AS_BASE);
            r406_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t141() {
            var r410_currentGlyph, r410_xn$setwidth$9Jrj, r410_xn$assignunicode$7Hrq, r410_xn$startfrom$1aao, r410_xn$lineto$5sIl, r410_xn$curveto$1aao, r410_xn$cubicto$1aao, r410_xn$putshapes$9Jrj, r410_xn$reverselast$3qIs, r410_include, r410_xn$createstroke$7Hrq, r410_xn$setanchor$9Jrj, r410_xn$dontexport$5sIl, r410_sw, r410_eleft, r410_turn, _r410_t0, _r410_t1, _r410_t2, _r410_t3;
            _r410_t0 = this;
            r410_currentGlyph = _r410_t0;
            r410_xn$setwidth$9Jrj = _r410_t0['set-width']['bind'](_r410_t0);
            r410_xn$assignunicode$7Hrq = function _r410_t2(r411_code) {
                var r411_code, _r411_t0, _r411_t1;
                r410_currentGlyph['assign-unicode'](r411_code);
                return r4_unicodeGlyphs[r410_currentGlyph['unicode'][r410_currentGlyph['unicode']['length'] - 1]] = r410_currentGlyph;
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
            r410_xn$dontexport$5sIl = function _r410_t3() {
                var _r412_t0, _r412_t1;
                return r410_currentGlyph['dontExport'] = true;
            };
            _r410_t0['gizmo'] = r4_globalTransform;
            _r410_t0['set-width'](r4_WIDTH);
            r410_xn$setwidth$9Jrj(r4_WIDTH);
            r410_xn$assignunicode$7Hrq(198);
            r410_include(r4_capitalMarks);
            r410_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r410_eleft = r4_MIDDLE - r410_sw * 0.25;
            r410_turn = r4_XH * 0.1;
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r410_sw)['line-to'](r4_SB, r410_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r410_turn, r4_CAP, 0.27), r410_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r410_sw * 0.8));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r4_SB + r410_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r410_sw)['line-to'](r410_eleft + r410_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r410_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r410_sw)['line-to'](r410_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r410_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r410_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r410_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r410_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t142() {
            var r414_currentGlyph, r414_xn$setwidth$9Jrj, r414_xn$assignunicode$7Hrq, r414_xn$startfrom$1aao, r414_xn$lineto$5sIl, r414_xn$curveto$1aao, r414_xn$cubicto$1aao, r414_xn$putshapes$9Jrj, r414_xn$reverselast$3qIs, r414_include, r414_xn$createstroke$7Hrq, r414_xn$setanchor$9Jrj, r414_xn$dontexport$5sIl, r414_sw, r414_eleft, _r414_t0, _r414_t1, _r414_t2, _r414_t3;
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
            r414_xn$dontexport$5sIl = function _r414_t3() {
                var _r416_t0, _r416_t1;
                return r414_currentGlyph['dontExport'] = true;
            };
            _r414_t0['gizmo'] = r4_globalTransform;
            _r414_t0['set-width'](r4_WIDTH);
            r414_xn$setwidth$9Jrj(r4_WIDTH);
            r414_xn$assignunicode$7Hrq(338);
            r414_include(r4_capitalMarks);
            r414_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r414_eleft = r4_MIDDLE;
            r414_include(r414_xn$createstroke$7Hrq()['start-from'](r414_eleft + 1, r4_CAP)['set-width'](r414_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r414_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r414_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r414_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r414_include(r414_xn$createstroke$7Hrq()['start-from'](r414_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r414_sw)['line-to'](r414_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r414_include(r414_xn$createstroke$7Hrq()['start-from'](r414_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r414_include(r414_xn$createstroke$7Hrq()['start-from'](r414_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r414_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r414_include(r414_xn$createstroke$7Hrq()['start-from'](r414_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t143() {
            var r418_currentGlyph, r418_xn$setwidth$9Jrj, r418_xn$assignunicode$7Hrq, r418_xn$startfrom$1aao, r418_xn$lineto$5sIl, r418_xn$curveto$1aao, r418_xn$cubicto$1aao, r418_xn$putshapes$9Jrj, r418_xn$reverselast$3qIs, r418_include, r418_xn$createstroke$7Hrq, r418_xn$setanchor$9Jrj, r418_xn$dontexport$5sIl, r418_sw, r418_eLeft, r418_eMiddle, r418_barbottom, r418_hookx, r418_eHookMiddle, r418_sma, r418_smb, _r418_t0, _r418_t1, _r418_t2, _r418_t3;
            _r418_t0 = this;
            r418_currentGlyph = _r418_t0;
            r418_xn$setwidth$9Jrj = _r418_t0['set-width']['bind'](_r418_t0);
            r418_xn$assignunicode$7Hrq = function _r418_t2(r419_code) {
                var r419_code, _r419_t0, _r419_t1;
                r418_currentGlyph['assign-unicode'](r419_code);
                return r4_unicodeGlyphs[r418_currentGlyph['unicode'][r418_currentGlyph['unicode']['length'] - 1]] = r418_currentGlyph;
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
            r418_xn$dontexport$5sIl = function _r418_t3() {
                var _r420_t0, _r420_t1;
                return r418_currentGlyph['dontExport'] = true;
            };
            _r418_t0['gizmo'] = r4_globalTransform;
            _r418_t0['set-width'](r4_WIDTH);
            r418_xn$dontexport$5sIl();
            r418_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r418_eLeft = r4_MIDDLE - r418_sw / 2 * r4_ITALICCOR;
            r418_eMiddle = r0_mix(r418_eLeft, r4_RIGHTSB - r4_O, 0.5) - r418_sw * r4_globalTransform['yx'];
            r418_barbottom = r4_XH * r4_EBARPOS;
            r418_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r418_eHookMiddle = r0_mix(r418_eLeft, r418_hookx, 0.5);
            r418_sma = r4_SMALLSMOOTHA * 0.6;
            r418_smb = r4_SMALLSMOOTHB * 0.6;
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r418_barbottom)['heads-to'](r4_UPWARD)['set-width'](r418_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r418_smb)['arc-vh-to'](r418_eMiddle, r4_XO)['arc-hv-to'](r418_eLeft, r4_XH - r418_sma)['line-to'](r418_eLeft, r418_smb)['arc-vh-to'](r418_eHookMiddle, r4_O)['curve-to'](r0_mix(r418_eHookMiddle, r418_hookx, r4_KAPPA_HOOK), r4_O, r418_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r418_eLeft + r418_sw / 2, r418_barbottom)['set-width'](r418_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r418_sw / 2, r418_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t144() {
            var r422_currentGlyph, r422_xn$setwidth$9Jrj, r422_xn$assignunicode$7Hrq, r422_xn$startfrom$1aao, r422_xn$lineto$5sIl, r422_xn$curveto$1aao, r422_xn$cubicto$1aao, r422_xn$putshapes$9Jrj, r422_xn$reverselast$3qIs, r422_include, r422_xn$createstroke$7Hrq, r422_xn$setanchor$9Jrj, r422_xn$dontexport$5sIl, r422_sw, r422_bartop, r422_abarRight, r422_m1, r422_lowmiddle, r422_barsmooth, r422_sma, r422_smb, _r422_t0, _r422_t1, _r422_t2, _r422_t3;
            _r422_t0 = this;
            r422_currentGlyph = _r422_t0;
            r422_xn$setwidth$9Jrj = _r422_t0['set-width']['bind'](_r422_t0);
            r422_xn$assignunicode$7Hrq = function _r422_t2(r423_code) {
                var r423_code, _r423_t0, _r423_t1;
                r422_currentGlyph['assign-unicode'](r423_code);
                return r4_unicodeGlyphs[r422_currentGlyph['unicode'][r422_currentGlyph['unicode']['length'] - 1]] = r422_currentGlyph;
            };
            r422_xn$startfrom$1aao = _r422_t0['start-from']['bind'](_r422_t0);
            r422_xn$lineto$5sIl = _r422_t0['line-to']['bind'](_r422_t0);
            r422_xn$curveto$1aao = _r422_t0['curve-to']['bind'](_r422_t0);
            r422_xn$cubicto$1aao = _r422_t0['cubic-to']['bind'](_r422_t0);
            r422_xn$putshapes$9Jrj = _r422_t0['put-shapes']['bind'](_r422_t0);
            r422_xn$reverselast$3qIs = _r422_t0['reverse-last']['bind'](_r422_t0);
            r422_include = _r422_t0['include']['bind'](_r422_t0);
            r422_xn$createstroke$7Hrq = _r422_t0['create-stroke']['bind'](_r422_t0);
            r422_xn$setanchor$9Jrj = _r422_t0['set-anchor']['bind'](_r422_t0);
            r422_xn$dontexport$5sIl = function _r422_t3() {
                var _r424_t0, _r424_t1;
                return r422_currentGlyph['dontExport'] = true;
            };
            _r422_t0['gizmo'] = r4_globalTransform;
            _r422_t0['set-width'](r4_WIDTH);
            r422_xn$dontexport$5sIl();
            r422_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r422_bartop = r4_XH * r4_BARPOS + r422_sw;
            r422_abarRight = r4_MIDDLE + r422_sw / 2 * r4_ITALICCOR;
            r422_m1 = r0_mix(r4_SB + r4_OXHOOK, r422_abarRight, 0.5);
            r422_lowmiddle = r0_mix(r4_SB + r422_sw, r422_abarRight - r422_sw, 0.5) + r422_sw * r4_globalTransform['yx'];
            r422_barsmooth = r0_mix(r4_SB, r422_abarRight, 0.6);
            r422_sma = r4_SMALLSMOOTHA * 0.6;
            r422_smb = r4_SMALLSMOOTHB * 0.6;
            r422_include(r422_xn$createstroke$7Hrq()['start-from'](r422_abarRight, r4_XH - r422_sma)['set-width'](r422_sw, 0)['arc-vh-to'](r422_m1, r4_XO)['curve-to'](r0_mix(r422_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r422_include(r422_xn$createstroke$7Hrq()['start-from'](r422_abarRight, r422_smb)['set-width'](0, r422_sw)['arc-vh-to'](r422_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r422_bartop, r422_smb / (r422_sma + r422_smb)))['arc-vh-to'](r422_barsmooth, r422_bartop)['line-to'](r422_abarRight, r422_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t145() {
            var r426_currentGlyph, r426_xn$setwidth$9Jrj, r426_xn$assignunicode$7Hrq, r426_xn$startfrom$1aao, r426_xn$lineto$5sIl, r426_xn$curveto$1aao, r426_xn$cubicto$1aao, r426_xn$putshapes$9Jrj, r426_xn$reverselast$3qIs, r426_include, r426_xn$createstroke$7Hrq, r426_xn$setanchor$9Jrj, r426_xn$dontexport$5sIl, r426_sw, r426_abarRight, r426_m1, r426_sma, r426_smb, _r426_t0, _r426_t1, _r426_t2, _r426_t3;
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
            r426_xn$dontexport$5sIl = function _r426_t3() {
                var _r428_t0, _r428_t1;
                return r426_currentGlyph['dontExport'] = true;
            };
            _r426_t0['gizmo'] = r4_globalTransform;
            _r426_t0['set-width'](r4_WIDTH);
            r426_xn$dontexport$5sIl();
            r426_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r426_abarRight = r4_MIDDLE + r426_sw / 2 * r4_ITALICCOR;
            r426_m1 = r0_mix(r4_SB + r4_O, r426_abarRight, 0.5);
            r426_sma = r4_SMALLSMOOTHA * 0.6;
            r426_smb = r4_SMALLSMOOTHB * 0.6;
            r426_include(r426_xn$createstroke$7Hrq()['start-from'](r426_abarRight, r426_smb)['set-width'](0, r426_sw)['arc-vh-to'](r426_m1 + r426_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r426_smb)['line-to'](r4_SB + r4_O, r4_XH - r426_sma)['arc-vh-to'](r426_m1 - r426_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r426_abarRight, r4_XH - r426_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t146() {
            var r430_currentGlyph, r430_xn$setwidth$9Jrj, r430_xn$assignunicode$7Hrq, r430_xn$startfrom$1aao, r430_xn$lineto$5sIl, r430_xn$curveto$1aao, r430_xn$cubicto$1aao, r430_xn$putshapes$9Jrj, r430_xn$reverselast$3qIs, r430_include, r430_xn$createstroke$7Hrq, r430_xn$setanchor$9Jrj, r430_xn$dontexport$5sIl, _r430_t0, _r430_t1, _r430_t2, _r430_t3;
            _r430_t0 = this;
            r430_currentGlyph = _r430_t0;
            r430_xn$setwidth$9Jrj = _r430_t0['set-width']['bind'](_r430_t0);
            r430_xn$assignunicode$7Hrq = function _r430_t2(r431_code) {
                var r431_code, _r431_t0, _r431_t1;
                r430_currentGlyph['assign-unicode'](r431_code);
                return r4_unicodeGlyphs[r430_currentGlyph['unicode'][r430_currentGlyph['unicode']['length'] - 1]] = r430_currentGlyph;
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
            r430_xn$dontexport$5sIl = function _r430_t3() {
                var _r432_t0, _r432_t1;
                return r430_currentGlyph['dontExport'] = true;
            };
            _r430_t0['gizmo'] = r4_globalTransform;
            _r430_t0['set-width'](r4_WIDTH);
            r430_xn$setwidth$9Jrj(r4_WIDTH);
            r430_xn$assignunicode$7Hrq(230);
            r430_include(r4_eMarks);
            r430_include(r4_glyphs['ae-epart']);
            r430_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t147() {
            var r434_currentGlyph, r434_xn$setwidth$9Jrj, r434_xn$assignunicode$7Hrq, r434_xn$startfrom$1aao, r434_xn$lineto$5sIl, r434_xn$curveto$1aao, r434_xn$cubicto$1aao, r434_xn$putshapes$9Jrj, r434_xn$reverselast$3qIs, r434_include, r434_xn$createstroke$7Hrq, r434_xn$setanchor$9Jrj, r434_xn$dontexport$5sIl, _r434_t0, _r434_t1, _r434_t2, _r434_t3;
            _r434_t0 = this;
            r434_currentGlyph = _r434_t0;
            r434_xn$setwidth$9Jrj = _r434_t0['set-width']['bind'](_r434_t0);
            r434_xn$assignunicode$7Hrq = function _r434_t2(r435_code) {
                var r435_code, _r435_t0, _r435_t1;
                r434_currentGlyph['assign-unicode'](r435_code);
                return r4_unicodeGlyphs[r434_currentGlyph['unicode'][r434_currentGlyph['unicode']['length'] - 1]] = r434_currentGlyph;
            };
            r434_xn$startfrom$1aao = _r434_t0['start-from']['bind'](_r434_t0);
            r434_xn$lineto$5sIl = _r434_t0['line-to']['bind'](_r434_t0);
            r434_xn$curveto$1aao = _r434_t0['curve-to']['bind'](_r434_t0);
            r434_xn$cubicto$1aao = _r434_t0['cubic-to']['bind'](_r434_t0);
            r434_xn$putshapes$9Jrj = _r434_t0['put-shapes']['bind'](_r434_t0);
            r434_xn$reverselast$3qIs = _r434_t0['reverse-last']['bind'](_r434_t0);
            r434_include = _r434_t0['include']['bind'](_r434_t0);
            r434_xn$createstroke$7Hrq = _r434_t0['create-stroke']['bind'](_r434_t0);
            r434_xn$setanchor$9Jrj = _r434_t0['set-anchor']['bind'](_r434_t0);
            r434_xn$dontexport$5sIl = function _r434_t3() {
                var _r436_t0, _r436_t1;
                return r434_currentGlyph['dontExport'] = true;
            };
            _r434_t0['gizmo'] = r4_globalTransform;
            _r434_t0['set-width'](r4_WIDTH);
            r434_xn$setwidth$9Jrj(r4_WIDTH);
            r434_xn$assignunicode$7Hrq(339);
            r434_include(r4_eMarks);
            r434_include(r4_glyphs['ae-epart']);
            r434_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t148() {
            var r438_currentGlyph, r438_xn$setwidth$9Jrj, r438_xn$assignunicode$7Hrq, r438_xn$startfrom$1aao, r438_xn$lineto$5sIl, r438_xn$curveto$1aao, r438_xn$cubicto$1aao, r438_xn$putshapes$9Jrj, r438_xn$reverselast$3qIs, r438_include, r438_xn$createstroke$7Hrq, r438_xn$setanchor$9Jrj, r438_xn$dontexport$5sIl, _r438_t0, _r438_t1, _r438_t2, _r438_t3;
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
            r438_xn$dontexport$5sIl = function _r438_t3() {
                var _r440_t0, _r440_t1;
                return r438_currentGlyph['dontExport'] = true;
            };
            _r438_t0['gizmo'] = r4_globalTransform;
            _r438_t0['set-width'](r4_WIDTH);
            r438_xn$assignunicode$7Hrq(208);
            r438_include(r4_glyphs['D'], r4_AS_BASE);
            r438_include(r438_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.4), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t149() {
            var r442_currentGlyph, r442_xn$setwidth$9Jrj, r442_xn$assignunicode$7Hrq, r442_xn$startfrom$1aao, r442_xn$lineto$5sIl, r442_xn$curveto$1aao, r442_xn$cubicto$1aao, r442_xn$putshapes$9Jrj, r442_xn$reverselast$3qIs, r442_include, r442_xn$createstroke$7Hrq, r442_xn$setanchor$9Jrj, r442_xn$dontexport$5sIl, _r442_t0, _r442_t1, _r442_t2, _r442_t3;
            _r442_t0 = this;
            r442_currentGlyph = _r442_t0;
            r442_xn$setwidth$9Jrj = _r442_t0['set-width']['bind'](_r442_t0);
            r442_xn$assignunicode$7Hrq = function _r442_t2(r443_code) {
                var r443_code, _r443_t0, _r443_t1;
                r442_currentGlyph['assign-unicode'](r443_code);
                return r4_unicodeGlyphs[r442_currentGlyph['unicode'][r442_currentGlyph['unicode']['length'] - 1]] = r442_currentGlyph;
            };
            r442_xn$startfrom$1aao = _r442_t0['start-from']['bind'](_r442_t0);
            r442_xn$lineto$5sIl = _r442_t0['line-to']['bind'](_r442_t0);
            r442_xn$curveto$1aao = _r442_t0['curve-to']['bind'](_r442_t0);
            r442_xn$cubicto$1aao = _r442_t0['cubic-to']['bind'](_r442_t0);
            r442_xn$putshapes$9Jrj = _r442_t0['put-shapes']['bind'](_r442_t0);
            r442_xn$reverselast$3qIs = _r442_t0['reverse-last']['bind'](_r442_t0);
            r442_include = _r442_t0['include']['bind'](_r442_t0);
            r442_xn$createstroke$7Hrq = _r442_t0['create-stroke']['bind'](_r442_t0);
            r442_xn$setanchor$9Jrj = _r442_t0['set-anchor']['bind'](_r442_t0);
            r442_xn$dontexport$5sIl = function _r442_t3() {
                var _r444_t0, _r444_t1;
                return r442_currentGlyph['dontExport'] = true;
            };
            _r442_t0['gizmo'] = r4_globalTransform;
            _r442_t0['set-width'](r4_WIDTH);
            r442_xn$assignunicode$7Hrq(272);
            r442_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t150() {
            var r446_currentGlyph, r446_xn$setwidth$9Jrj, r446_xn$assignunicode$7Hrq, r446_xn$startfrom$1aao, r446_xn$lineto$5sIl, r446_xn$curveto$1aao, r446_xn$cubicto$1aao, r446_xn$putshapes$9Jrj, r446_xn$reverselast$3qIs, r446_include, r446_xn$createstroke$7Hrq, r446_xn$setanchor$9Jrj, r446_xn$dontexport$5sIl, r446_ymiddlea, _r446_t0, _r446_t1, _r446_t2, _r446_t3;
            _r446_t0 = this;
            r446_currentGlyph = _r446_t0;
            r446_xn$setwidth$9Jrj = _r446_t0['set-width']['bind'](_r446_t0);
            r446_xn$assignunicode$7Hrq = function _r446_t2(r447_code) {
                var r447_code, _r447_t0, _r447_t1;
                r446_currentGlyph['assign-unicode'](r447_code);
                return r4_unicodeGlyphs[r446_currentGlyph['unicode'][r446_currentGlyph['unicode']['length'] - 1]] = r446_currentGlyph;
            };
            r446_xn$startfrom$1aao = _r446_t0['start-from']['bind'](_r446_t0);
            r446_xn$lineto$5sIl = _r446_t0['line-to']['bind'](_r446_t0);
            r446_xn$curveto$1aao = _r446_t0['curve-to']['bind'](_r446_t0);
            r446_xn$cubicto$1aao = _r446_t0['cubic-to']['bind'](_r446_t0);
            r446_xn$putshapes$9Jrj = _r446_t0['put-shapes']['bind'](_r446_t0);
            r446_xn$reverselast$3qIs = _r446_t0['reverse-last']['bind'](_r446_t0);
            r446_include = _r446_t0['include']['bind'](_r446_t0);
            r446_xn$createstroke$7Hrq = _r446_t0['create-stroke']['bind'](_r446_t0);
            r446_xn$setanchor$9Jrj = _r446_t0['set-anchor']['bind'](_r446_t0);
            r446_xn$dontexport$5sIl = function _r446_t3() {
                var _r448_t0, _r448_t1;
                return r446_currentGlyph['dontExport'] = true;
            };
            _r446_t0['gizmo'] = r4_globalTransform;
            _r446_t0['set-width'](r4_WIDTH);
            r446_xn$setwidth$9Jrj(r4_WIDTH);
            r446_xn$assignunicode$7Hrq(240);
            r446_include(r4_bMarks);
            r446_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r446_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r446_include(r446_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r446_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r446_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r446_include(r446_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, 0))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.4)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t151() {
            var r450_currentGlyph, r450_xn$setwidth$9Jrj, r450_xn$assignunicode$7Hrq, r450_xn$startfrom$1aao, r450_xn$lineto$5sIl, r450_xn$curveto$1aao, r450_xn$cubicto$1aao, r450_xn$putshapes$9Jrj, r450_xn$reverselast$3qIs, r450_include, r450_xn$createstroke$7Hrq, r450_xn$setanchor$9Jrj, r450_xn$dontexport$5sIl, _r450_t0, _r450_t1, _r450_t2, _r450_t3;
            _r450_t0 = this;
            r450_currentGlyph = _r450_t0;
            r450_xn$setwidth$9Jrj = _r450_t0['set-width']['bind'](_r450_t0);
            r450_xn$assignunicode$7Hrq = function _r450_t2(r451_code) {
                var r451_code, _r451_t0, _r451_t1;
                r450_currentGlyph['assign-unicode'](r451_code);
                return r4_unicodeGlyphs[r450_currentGlyph['unicode'][r450_currentGlyph['unicode']['length'] - 1]] = r450_currentGlyph;
            };
            r450_xn$startfrom$1aao = _r450_t0['start-from']['bind'](_r450_t0);
            r450_xn$lineto$5sIl = _r450_t0['line-to']['bind'](_r450_t0);
            r450_xn$curveto$1aao = _r450_t0['curve-to']['bind'](_r450_t0);
            r450_xn$cubicto$1aao = _r450_t0['cubic-to']['bind'](_r450_t0);
            r450_xn$putshapes$9Jrj = _r450_t0['put-shapes']['bind'](_r450_t0);
            r450_xn$reverselast$3qIs = _r450_t0['reverse-last']['bind'](_r450_t0);
            r450_include = _r450_t0['include']['bind'](_r450_t0);
            r450_xn$createstroke$7Hrq = _r450_t0['create-stroke']['bind'](_r450_t0);
            r450_xn$setanchor$9Jrj = _r450_t0['set-anchor']['bind'](_r450_t0);
            r450_xn$dontexport$5sIl = function _r450_t3() {
                var _r452_t0, _r452_t1;
                return r450_currentGlyph['dontExport'] = true;
            };
            _r450_t0['gizmo'] = r4_globalTransform;
            _r450_t0['set-width'](r4_WIDTH);
            r450_xn$assignunicode$7Hrq(273);
            r450_include(r4_glyphs['d'], r4_AS_BASE);
            r450_include(r450_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.6), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t152() {
            var r454_currentGlyph, r454_xn$setwidth$9Jrj, r454_xn$assignunicode$7Hrq, r454_xn$startfrom$1aao, r454_xn$lineto$5sIl, r454_xn$curveto$1aao, r454_xn$cubicto$1aao, r454_xn$putshapes$9Jrj, r454_xn$reverselast$3qIs, r454_include, r454_xn$createstroke$7Hrq, r454_xn$setanchor$9Jrj, r454_xn$dontexport$5sIl, r454_fine, _r454_t0, _r454_t1, _r454_t2, _r454_t3;
            _r454_t0 = this;
            r454_currentGlyph = _r454_t0;
            r454_xn$setwidth$9Jrj = _r454_t0['set-width']['bind'](_r454_t0);
            r454_xn$assignunicode$7Hrq = function _r454_t2(r455_code) {
                var r455_code, _r455_t0, _r455_t1;
                r454_currentGlyph['assign-unicode'](r455_code);
                return r4_unicodeGlyphs[r454_currentGlyph['unicode'][r454_currentGlyph['unicode']['length'] - 1]] = r454_currentGlyph;
            };
            r454_xn$startfrom$1aao = _r454_t0['start-from']['bind'](_r454_t0);
            r454_xn$lineto$5sIl = _r454_t0['line-to']['bind'](_r454_t0);
            r454_xn$curveto$1aao = _r454_t0['curve-to']['bind'](_r454_t0);
            r454_xn$cubicto$1aao = _r454_t0['cubic-to']['bind'](_r454_t0);
            r454_xn$putshapes$9Jrj = _r454_t0['put-shapes']['bind'](_r454_t0);
            r454_xn$reverselast$3qIs = _r454_t0['reverse-last']['bind'](_r454_t0);
            r454_include = _r454_t0['include']['bind'](_r454_t0);
            r454_xn$createstroke$7Hrq = _r454_t0['create-stroke']['bind'](_r454_t0);
            r454_xn$setanchor$9Jrj = _r454_t0['set-anchor']['bind'](_r454_t0);
            r454_xn$dontexport$5sIl = function _r454_t3() {
                var _r456_t0, _r456_t1;
                return r454_currentGlyph['dontExport'] = true;
            };
            _r454_t0['gizmo'] = r4_globalTransform;
            _r454_t0['set-width'](r4_WIDTH);
            r454_xn$assignunicode$7Hrq(216);
            r454_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r454_include(r4_glyphs['O'], r4_AS_BASE);
            r454_include(r454_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r454_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r454_fine, r454_fine)['line-to'](r4_RIGHTSB - r4_O - r454_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t153() {
            var r458_currentGlyph, r458_xn$setwidth$9Jrj, r458_xn$assignunicode$7Hrq, r458_xn$startfrom$1aao, r458_xn$lineto$5sIl, r458_xn$curveto$1aao, r458_xn$cubicto$1aao, r458_xn$putshapes$9Jrj, r458_xn$reverselast$3qIs, r458_include, r458_xn$createstroke$7Hrq, r458_xn$setanchor$9Jrj, r458_xn$dontexport$5sIl, r458_fine, _r458_t0, _r458_t1, _r458_t2, _r458_t3;
            _r458_t0 = this;
            r458_currentGlyph = _r458_t0;
            r458_xn$setwidth$9Jrj = _r458_t0['set-width']['bind'](_r458_t0);
            r458_xn$assignunicode$7Hrq = function _r458_t2(r459_code) {
                var r459_code, _r459_t0, _r459_t1;
                r458_currentGlyph['assign-unicode'](r459_code);
                return r4_unicodeGlyphs[r458_currentGlyph['unicode'][r458_currentGlyph['unicode']['length'] - 1]] = r458_currentGlyph;
            };
            r458_xn$startfrom$1aao = _r458_t0['start-from']['bind'](_r458_t0);
            r458_xn$lineto$5sIl = _r458_t0['line-to']['bind'](_r458_t0);
            r458_xn$curveto$1aao = _r458_t0['curve-to']['bind'](_r458_t0);
            r458_xn$cubicto$1aao = _r458_t0['cubic-to']['bind'](_r458_t0);
            r458_xn$putshapes$9Jrj = _r458_t0['put-shapes']['bind'](_r458_t0);
            r458_xn$reverselast$3qIs = _r458_t0['reverse-last']['bind'](_r458_t0);
            r458_include = _r458_t0['include']['bind'](_r458_t0);
            r458_xn$createstroke$7Hrq = _r458_t0['create-stroke']['bind'](_r458_t0);
            r458_xn$setanchor$9Jrj = _r458_t0['set-anchor']['bind'](_r458_t0);
            r458_xn$dontexport$5sIl = function _r458_t3() {
                var _r460_t0, _r460_t1;
                return r458_currentGlyph['dontExport'] = true;
            };
            _r458_t0['gizmo'] = r4_globalTransform;
            _r458_t0['set-width'](r4_WIDTH);
            r458_xn$assignunicode$7Hrq(248);
            r458_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r458_include(r4_glyphs['o'], r4_AS_BASE);
            r458_include(r458_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r458_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r458_fine, r458_fine)['line-to'](r4_RIGHTSB - r4_O - r458_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t154() {
            var r462_currentGlyph, r462_xn$setwidth$9Jrj, r462_xn$assignunicode$7Hrq, r462_xn$startfrom$1aao, r462_xn$lineto$5sIl, r462_xn$curveto$1aao, r462_xn$cubicto$1aao, r462_xn$putshapes$9Jrj, r462_xn$reverselast$3qIs, r462_include, r462_xn$createstroke$7Hrq, r462_xn$setanchor$9Jrj, r462_xn$dontexport$5sIl, r462_bowlTop, r462_bowlBottom, r462_bkappa, r462_turn, r462_turnRadius, _r462_t0, _r462_t1, _r462_t2, _r462_t3;
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
            r462_xn$dontexport$5sIl = function _r462_t3() {
                var _r464_t0, _r464_t1;
                return r462_currentGlyph['dontExport'] = true;
            };
            _r462_t0['gizmo'] = r4_globalTransform;
            _r462_t0['set-width'](r4_WIDTH);
            r462_xn$setwidth$9Jrj(r4_WIDTH);
            r462_xn$assignunicode$7Hrq(222);
            r462_include(r4_capitalMarks);
            r462_bowlTop = r4_CAP * 0.77;
            r462_bowlBottom = r4_CAP * 0.23;
            r462_bkappa = r4_COKAPPA - 0.2;
            r462_turn = r0_mix(r462_bowlTop, r462_bowlBottom, 0.5);
            r462_turnRadius = (r462_bowlTop - r462_bowlBottom) / 2;
            r462_include(r462_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r462_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r462_turnRadius, r462_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r462_turn)['arc-vh-to'](r4_RIGHTSB - r462_turnRadius, r462_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r462_bowlBottom)['heads-to'](r4_LEFTWARD));
            r462_include(r462_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t155() {
            var r466_currentGlyph, r466_xn$setwidth$9Jrj, r466_xn$assignunicode$7Hrq, r466_xn$startfrom$1aao, r466_xn$lineto$5sIl, r466_xn$curveto$1aao, r466_xn$cubicto$1aao, r466_xn$putshapes$9Jrj, r466_xn$reverselast$3qIs, r466_include, r466_xn$createstroke$7Hrq, r466_xn$setanchor$9Jrj, r466_xn$dontexport$5sIl, _r466_t0, _r466_t1, _r466_t2, _r466_t3;
            _r466_t0 = this;
            r466_currentGlyph = _r466_t0;
            r466_xn$setwidth$9Jrj = _r466_t0['set-width']['bind'](_r466_t0);
            r466_xn$assignunicode$7Hrq = function _r466_t2(r467_code) {
                var r467_code, _r467_t0, _r467_t1;
                r466_currentGlyph['assign-unicode'](r467_code);
                return r4_unicodeGlyphs[r466_currentGlyph['unicode'][r466_currentGlyph['unicode']['length'] - 1]] = r466_currentGlyph;
            };
            r466_xn$startfrom$1aao = _r466_t0['start-from']['bind'](_r466_t0);
            r466_xn$lineto$5sIl = _r466_t0['line-to']['bind'](_r466_t0);
            r466_xn$curveto$1aao = _r466_t0['curve-to']['bind'](_r466_t0);
            r466_xn$cubicto$1aao = _r466_t0['cubic-to']['bind'](_r466_t0);
            r466_xn$putshapes$9Jrj = _r466_t0['put-shapes']['bind'](_r466_t0);
            r466_xn$reverselast$3qIs = _r466_t0['reverse-last']['bind'](_r466_t0);
            r466_include = _r466_t0['include']['bind'](_r466_t0);
            r466_xn$createstroke$7Hrq = _r466_t0['create-stroke']['bind'](_r466_t0);
            r466_xn$setanchor$9Jrj = _r466_t0['set-anchor']['bind'](_r466_t0);
            r466_xn$dontexport$5sIl = function _r466_t3() {
                var _r468_t0, _r468_t1;
                return r466_currentGlyph['dontExport'] = true;
            };
            _r466_t0['gizmo'] = r4_globalTransform;
            _r466_t0['set-width'](r4_WIDTH);
            r466_xn$assignunicode$7Hrq(254);
            r466_include(r4_glyphs['b'], r4_AS_BASE);
            r466_include(r4_glyphs['p']);
            r466_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t156() {
            var r470_currentGlyph, r470_xn$setwidth$9Jrj, r470_xn$assignunicode$7Hrq, r470_xn$startfrom$1aao, r470_xn$lineto$5sIl, r470_xn$curveto$1aao, r470_xn$cubicto$1aao, r470_xn$putshapes$9Jrj, r470_xn$reverselast$3qIs, r470_include, r470_xn$createstroke$7Hrq, r470_xn$setanchor$9Jrj, r470_xn$dontexport$5sIl, r470_yTopTurn, r470_yBottomTurn, r470_xTopTurn, r470_xMiddleTurn, r470_xBottomTurn, r470_xBottomFinal, _r470_t0, _r470_t1, _r470_t2, _r470_t3;
            _r470_t0 = this;
            r470_currentGlyph = _r470_t0;
            r470_xn$setwidth$9Jrj = _r470_t0['set-width']['bind'](_r470_t0);
            r470_xn$assignunicode$7Hrq = function _r470_t2(r471_code) {
                var r471_code, _r471_t0, _r471_t1;
                r470_currentGlyph['assign-unicode'](r471_code);
                return r4_unicodeGlyphs[r470_currentGlyph['unicode'][r470_currentGlyph['unicode']['length'] - 1]] = r470_currentGlyph;
            };
            r470_xn$startfrom$1aao = _r470_t0['start-from']['bind'](_r470_t0);
            r470_xn$lineto$5sIl = _r470_t0['line-to']['bind'](_r470_t0);
            r470_xn$curveto$1aao = _r470_t0['curve-to']['bind'](_r470_t0);
            r470_xn$cubicto$1aao = _r470_t0['cubic-to']['bind'](_r470_t0);
            r470_xn$putshapes$9Jrj = _r470_t0['put-shapes']['bind'](_r470_t0);
            r470_xn$reverselast$3qIs = _r470_t0['reverse-last']['bind'](_r470_t0);
            r470_include = _r470_t0['include']['bind'](_r470_t0);
            r470_xn$createstroke$7Hrq = _r470_t0['create-stroke']['bind'](_r470_t0);
            r470_xn$setanchor$9Jrj = _r470_t0['set-anchor']['bind'](_r470_t0);
            r470_xn$dontexport$5sIl = function _r470_t3() {
                var _r472_t0, _r472_t1;
                return r470_currentGlyph['dontExport'] = true;
            };
            _r470_t0['gizmo'] = r4_globalTransform;
            _r470_t0['set-width'](r4_WIDTH);
            r470_xn$setwidth$9Jrj(r4_WIDTH);
            r470_xn$dontexport$5sIl();
            r470_include(r4_bMarks);
            r470_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r470_yBottomTurn = r4_CAP * 0.41;
            r470_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r470_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r470_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r470_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r470_include(r470_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r470_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r470_xTopTurn, r470_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r470_xTopTurn, r470_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r470_include(r470_xn$createstroke$7Hrq()['start-from'](r470_xTopTurn + r4_HALFSTROKE, r470_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r470_xMiddleTurn + (r470_yTopTurn - r470_yBottomTurn) / 2, r470_yTopTurn)['arc-hv-to'](r470_xMiddleTurn, r0_mix(r470_yTopTurn, r470_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r470_xMiddleTurn, r470_xBottomTurn, 0.5), r470_yBottomTurn)['arc-hv-to'](r470_xBottomTurn, r0_mix(r470_yBottomTurn + r4_HALFSTROKE, 0, 0.5))['arc-vh-to'](r470_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r470_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t157() {
            var r474_currentGlyph, r474_xn$setwidth$9Jrj, r474_xn$assignunicode$7Hrq, r474_xn$startfrom$1aao, r474_xn$lineto$5sIl, r474_xn$curveto$1aao, r474_xn$cubicto$1aao, r474_xn$putshapes$9Jrj, r474_xn$reverselast$3qIs, r474_include, r474_xn$createstroke$7Hrq, r474_xn$setanchor$9Jrj, r474_xn$dontexport$5sIl, _r474_t0, _r474_t1, _r474_t2, _r474_t3;
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
            r474_xn$dontexport$5sIl = function _r474_t3() {
                var _r476_t0, _r476_t1;
                return r474_currentGlyph['dontExport'] = true;
            };
            _r474_t0['gizmo'] = r4_globalTransform;
            _r474_t0['set-width'](r4_WIDTH);
            r474_xn$setwidth$9Jrj(r4_WIDTH);
            r474_xn$dontexport$5sIl();
            r474_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r474_include(r4_ifMarks);
            r474_include(r4_eshHook(r4_glyphs['eszet.upright']['italicHookAttachPoint']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t158() {
            var r478_currentGlyph, r478_xn$setwidth$9Jrj, r478_xn$assignunicode$7Hrq, r478_xn$startfrom$1aao, r478_xn$lineto$5sIl, r478_xn$curveto$1aao, r478_xn$cubicto$1aao, r478_xn$putshapes$9Jrj, r478_xn$reverselast$3qIs, r478_include, r478_xn$createstroke$7Hrq, r478_xn$setanchor$9Jrj, r478_xn$dontexport$5sIl, _r478_t0, _r478_t1, _r478_t2, _r478_t3;
            _r478_t0 = this;
            r478_currentGlyph = _r478_t0;
            r478_xn$setwidth$9Jrj = _r478_t0['set-width']['bind'](_r478_t0);
            r478_xn$assignunicode$7Hrq = function _r478_t2(r479_code) {
                var r479_code, _r479_t0, _r479_t1;
                r478_currentGlyph['assign-unicode'](r479_code);
                return r4_unicodeGlyphs[r478_currentGlyph['unicode'][r478_currentGlyph['unicode']['length'] - 1]] = r478_currentGlyph;
            };
            r478_xn$startfrom$1aao = _r478_t0['start-from']['bind'](_r478_t0);
            r478_xn$lineto$5sIl = _r478_t0['line-to']['bind'](_r478_t0);
            r478_xn$curveto$1aao = _r478_t0['curve-to']['bind'](_r478_t0);
            r478_xn$cubicto$1aao = _r478_t0['cubic-to']['bind'](_r478_t0);
            r478_xn$putshapes$9Jrj = _r478_t0['put-shapes']['bind'](_r478_t0);
            r478_xn$reverselast$3qIs = _r478_t0['reverse-last']['bind'](_r478_t0);
            r478_include = _r478_t0['include']['bind'](_r478_t0);
            r478_xn$createstroke$7Hrq = _r478_t0['create-stroke']['bind'](_r478_t0);
            r478_xn$setanchor$9Jrj = _r478_t0['set-anchor']['bind'](_r478_t0);
            r478_xn$dontexport$5sIl = function _r478_t3() {
                var _r480_t0, _r480_t1;
                return r478_currentGlyph['dontExport'] = true;
            };
            _r478_t0['gizmo'] = r4_globalTransform;
            _r478_t0['set-width'](r4_WIDTH);
            r478_xn$setwidth$9Jrj(r4_WIDTH);
            r478_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r478_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r478_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_ezhshape = function _r4_t159(r481_top, r481_bot) {
            var r481_top, r481_bot, _r481_t0, _r481_t1, _r481_t2;
            return function _r481_t2() {
                var r483_currentGlyph, r483_xn$setwidth$9Jrj, r483_xn$assignunicode$7Hrq, r483_xn$startfrom$1aao, r483_xn$lineto$5sIl, r483_xn$curveto$1aao, r483_xn$cubicto$1aao, r483_xn$putshapes$9Jrj, r483_xn$reverselast$3qIs, r483_include, r483_xn$createstroke$7Hrq, r483_xn$setanchor$9Jrj, r483_xn$dontexport$5sIl, r483_cor, r483_yMidBar, r483_ezhLeft, r483_ezhRight, _r483_t0, _r483_t1, _r483_t2, _r483_t3;
                _r483_t0 = this;
                r483_currentGlyph = _r483_t0;
                r483_xn$setwidth$9Jrj = _r483_t0['set-width']['bind'](_r483_t0);
                r483_xn$assignunicode$7Hrq = function _r483_t2(r484_code) {
                    var r484_code, _r484_t0, _r484_t1;
                    r483_currentGlyph['assign-unicode'](r484_code);
                    return r4_unicodeGlyphs[r483_currentGlyph['unicode'][r483_currentGlyph['unicode']['length'] - 1]] = r483_currentGlyph;
                };
                r483_xn$startfrom$1aao = _r483_t0['start-from']['bind'](_r483_t0);
                r483_xn$lineto$5sIl = _r483_t0['line-to']['bind'](_r483_t0);
                r483_xn$curveto$1aao = _r483_t0['curve-to']['bind'](_r483_t0);
                r483_xn$cubicto$1aao = _r483_t0['cubic-to']['bind'](_r483_t0);
                r483_xn$putshapes$9Jrj = _r483_t0['put-shapes']['bind'](_r483_t0);
                r483_xn$reverselast$3qIs = _r483_t0['reverse-last']['bind'](_r483_t0);
                r483_include = _r483_t0['include']['bind'](_r483_t0);
                r483_xn$createstroke$7Hrq = _r483_t0['create-stroke']['bind'](_r483_t0);
                r483_xn$setanchor$9Jrj = _r483_t0['set-anchor']['bind'](_r483_t0);
                r483_xn$dontexport$5sIl = function _r483_t3() {
                    var _r485_t0, _r485_t1;
                    return r483_currentGlyph['dontExport'] = true;
                };
                _r483_t0['gizmo'] = r4_globalTransform;
                _r483_t0['set-width'](r4_WIDTH);
                r483_cor = 1.2;
                r483_yMidBar = r0_mix(r481_bot, r481_top, 0.6);
                r483_ezhLeft = r0_mix(r4_SB, r4_RIGHTSB, 0.125);
                r483_ezhRight = r0_mix(r4_SB, r4_RIGHTSB, 0.95);
                r483_include(r483_xn$createstroke$7Hrq()['start-from'](r4_SB, r481_top)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r483_ezhRight, r481_top)['heads-to'](r4_RIGHTWARD)['to-outline']());
                r483_include(r483_xn$createstroke$7Hrq()['start-from'](r483_ezhLeft, r483_yMidBar)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE, r483_yMidBar)['arc-hv-to'](r4_RIGHTSB, r0_mix(r483_yMidBar, r481_bot, 0.5))['to-outline']());
                r483_include(r4_sHookLower(r481_bot, (r483_yMidBar - r481_bot) / 2, r4_SHOOK));
                r483_xn$startfrom$1aao(r483_ezhLeft, r483_yMidBar);
                r483_xn$lineto$5sIl(r483_ezhLeft + r4_STROKE * r483_cor, r483_yMidBar);
                r483_xn$lineto$5sIl(r483_ezhRight, r481_top - r4_STROKE);
                r483_xn$lineto$5sIl(r483_ezhRight - r4_STROKE * r483_cor, r481_top - r4_STROKE);
                r483_xn$reverselast$3qIs();
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('Ezh', function _r4_t160() {
            var r487_currentGlyph, r487_xn$setwidth$9Jrj, r487_xn$assignunicode$7Hrq, r487_xn$startfrom$1aao, r487_xn$lineto$5sIl, r487_xn$curveto$1aao, r487_xn$cubicto$1aao, r487_xn$putshapes$9Jrj, r487_xn$reverselast$3qIs, r487_include, r487_xn$createstroke$7Hrq, r487_xn$setanchor$9Jrj, r487_xn$dontexport$5sIl, _r487_t0, _r487_t1, _r487_t2, _r487_t3;
            _r487_t0 = this;
            r487_currentGlyph = _r487_t0;
            r487_xn$setwidth$9Jrj = _r487_t0['set-width']['bind'](_r487_t0);
            r487_xn$assignunicode$7Hrq = function _r487_t2(r488_code) {
                var r488_code, _r488_t0, _r488_t1;
                r487_currentGlyph['assign-unicode'](r488_code);
                return r4_unicodeGlyphs[r487_currentGlyph['unicode'][r487_currentGlyph['unicode']['length'] - 1]] = r487_currentGlyph;
            };
            r487_xn$startfrom$1aao = _r487_t0['start-from']['bind'](_r487_t0);
            r487_xn$lineto$5sIl = _r487_t0['line-to']['bind'](_r487_t0);
            r487_xn$curveto$1aao = _r487_t0['curve-to']['bind'](_r487_t0);
            r487_xn$cubicto$1aao = _r487_t0['cubic-to']['bind'](_r487_t0);
            r487_xn$putshapes$9Jrj = _r487_t0['put-shapes']['bind'](_r487_t0);
            r487_xn$reverselast$3qIs = _r487_t0['reverse-last']['bind'](_r487_t0);
            r487_include = _r487_t0['include']['bind'](_r487_t0);
            r487_xn$createstroke$7Hrq = _r487_t0['create-stroke']['bind'](_r487_t0);
            r487_xn$setanchor$9Jrj = _r487_t0['set-anchor']['bind'](_r487_t0);
            r487_xn$dontexport$5sIl = function _r487_t3() {
                var _r489_t0, _r489_t1;
                return r487_currentGlyph['dontExport'] = true;
            };
            _r487_t0['gizmo'] = r4_globalTransform;
            _r487_t0['set-width'](r4_WIDTH);
            r487_xn$setwidth$9Jrj(r4_WIDTH);
            r487_xn$assignunicode$7Hrq(439);
            r487_include(r4_capitalMarks);
            r487_include(r4_ezhshape(r4_CAP, 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ezh', function _r4_t161() {
            var r491_currentGlyph, r491_xn$setwidth$9Jrj, r491_xn$assignunicode$7Hrq, r491_xn$startfrom$1aao, r491_xn$lineto$5sIl, r491_xn$curveto$1aao, r491_xn$cubicto$1aao, r491_xn$putshapes$9Jrj, r491_xn$reverselast$3qIs, r491_include, r491_xn$createstroke$7Hrq, r491_xn$setanchor$9Jrj, r491_xn$dontexport$5sIl, _r491_t0, _r491_t1, _r491_t2, _r491_t3;
            _r491_t0 = this;
            r491_currentGlyph = _r491_t0;
            r491_xn$setwidth$9Jrj = _r491_t0['set-width']['bind'](_r491_t0);
            r491_xn$assignunicode$7Hrq = function _r491_t2(r492_code) {
                var r492_code, _r492_t0, _r492_t1;
                r491_currentGlyph['assign-unicode'](r492_code);
                return r4_unicodeGlyphs[r491_currentGlyph['unicode'][r491_currentGlyph['unicode']['length'] - 1]] = r491_currentGlyph;
            };
            r491_xn$startfrom$1aao = _r491_t0['start-from']['bind'](_r491_t0);
            r491_xn$lineto$5sIl = _r491_t0['line-to']['bind'](_r491_t0);
            r491_xn$curveto$1aao = _r491_t0['curve-to']['bind'](_r491_t0);
            r491_xn$cubicto$1aao = _r491_t0['cubic-to']['bind'](_r491_t0);
            r491_xn$putshapes$9Jrj = _r491_t0['put-shapes']['bind'](_r491_t0);
            r491_xn$reverselast$3qIs = _r491_t0['reverse-last']['bind'](_r491_t0);
            r491_include = _r491_t0['include']['bind'](_r491_t0);
            r491_xn$createstroke$7Hrq = _r491_t0['create-stroke']['bind'](_r491_t0);
            r491_xn$setanchor$9Jrj = _r491_t0['set-anchor']['bind'](_r491_t0);
            r491_xn$dontexport$5sIl = function _r491_t3() {
                var _r493_t0, _r493_t1;
                return r491_currentGlyph['dontExport'] = true;
            };
            _r491_t0['gizmo'] = r4_globalTransform;
            _r491_t0['set-width'](r4_WIDTH);
            r491_xn$setwidth$9Jrj(r4_WIDTH);
            r491_xn$assignunicode$7Hrq(658);
            r491_include(r4_pMarks);
            r491_include(r4_ezhshape(r4_XH, r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t162() {
            var r495_currentGlyph, r495_xn$setwidth$9Jrj, r495_xn$assignunicode$7Hrq, r495_xn$startfrom$1aao, r495_xn$lineto$5sIl, r495_xn$curveto$1aao, r495_xn$cubicto$1aao, r495_xn$putshapes$9Jrj, r495_xn$reverselast$3qIs, r495_include, r495_xn$createstroke$7Hrq, r495_xn$setanchor$9Jrj, r495_xn$dontexport$5sIl, r495_fine, _r495_t0, _r495_t1, _r495_t2, _r495_t3;
            _r495_t0 = this;
            r495_currentGlyph = _r495_t0;
            r495_xn$setwidth$9Jrj = _r495_t0['set-width']['bind'](_r495_t0);
            r495_xn$assignunicode$7Hrq = function _r495_t2(r496_code) {
                var r496_code, _r496_t0, _r496_t1;
                r495_currentGlyph['assign-unicode'](r496_code);
                return r4_unicodeGlyphs[r495_currentGlyph['unicode'][r495_currentGlyph['unicode']['length'] - 1]] = r495_currentGlyph;
            };
            r495_xn$startfrom$1aao = _r495_t0['start-from']['bind'](_r495_t0);
            r495_xn$lineto$5sIl = _r495_t0['line-to']['bind'](_r495_t0);
            r495_xn$curveto$1aao = _r495_t0['curve-to']['bind'](_r495_t0);
            r495_xn$cubicto$1aao = _r495_t0['cubic-to']['bind'](_r495_t0);
            r495_xn$putshapes$9Jrj = _r495_t0['put-shapes']['bind'](_r495_t0);
            r495_xn$reverselast$3qIs = _r495_t0['reverse-last']['bind'](_r495_t0);
            r495_include = _r495_t0['include']['bind'](_r495_t0);
            r495_xn$createstroke$7Hrq = _r495_t0['create-stroke']['bind'](_r495_t0);
            r495_xn$setanchor$9Jrj = _r495_t0['set-anchor']['bind'](_r495_t0);
            r495_xn$dontexport$5sIl = function _r495_t3() {
                var _r497_t0, _r497_t1;
                return r495_currentGlyph['dontExport'] = true;
            };
            _r495_t0['gizmo'] = r4_globalTransform;
            _r495_t0['set-width'](r4_WIDTH);
            r495_xn$setwidth$9Jrj(r4_WIDTH);
            r495_xn$dontexport$5sIl();
            r495_include(r4_glyphs['O']);
            r495_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r495_include(r495_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.7))['set-width'](r495_fine, r495_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.7));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t163() {
            var r499_currentGlyph, r499_xn$setwidth$9Jrj, r499_xn$assignunicode$7Hrq, r499_xn$startfrom$1aao, r499_xn$lineto$5sIl, r499_xn$curveto$1aao, r499_xn$cubicto$1aao, r499_xn$putshapes$9Jrj, r499_xn$reverselast$3qIs, r499_include, r499_xn$createstroke$7Hrq, r499_xn$setanchor$9Jrj, r499_xn$dontexport$5sIl, _r499_t0, _r499_t1, _r499_t2, _r499_t3;
            _r499_t0 = this;
            r499_currentGlyph = _r499_t0;
            r499_xn$setwidth$9Jrj = _r499_t0['set-width']['bind'](_r499_t0);
            r499_xn$assignunicode$7Hrq = function _r499_t2(r500_code) {
                var r500_code, _r500_t0, _r500_t1;
                r499_currentGlyph['assign-unicode'](r500_code);
                return r4_unicodeGlyphs[r499_currentGlyph['unicode'][r499_currentGlyph['unicode']['length'] - 1]] = r499_currentGlyph;
            };
            r499_xn$startfrom$1aao = _r499_t0['start-from']['bind'](_r499_t0);
            r499_xn$lineto$5sIl = _r499_t0['line-to']['bind'](_r499_t0);
            r499_xn$curveto$1aao = _r499_t0['curve-to']['bind'](_r499_t0);
            r499_xn$cubicto$1aao = _r499_t0['cubic-to']['bind'](_r499_t0);
            r499_xn$putshapes$9Jrj = _r499_t0['put-shapes']['bind'](_r499_t0);
            r499_xn$reverselast$3qIs = _r499_t0['reverse-last']['bind'](_r499_t0);
            r499_include = _r499_t0['include']['bind'](_r499_t0);
            r499_xn$createstroke$7Hrq = _r499_t0['create-stroke']['bind'](_r499_t0);
            r499_xn$setanchor$9Jrj = _r499_t0['set-anchor']['bind'](_r499_t0);
            r499_xn$dontexport$5sIl = function _r499_t3() {
                var _r501_t0, _r501_t1;
                return r499_currentGlyph['dontExport'] = true;
            };
            _r499_t0['gizmo'] = r4_globalTransform;
            _r499_t0['set-width'](r4_WIDTH);
            r499_xn$setwidth$9Jrj(r4_WIDTH);
            r499_xn$dontexport$5sIl();
            r499_include(r4_glyphs['O']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t164() {
            var r503_currentGlyph, r503_xn$setwidth$9Jrj, r503_xn$assignunicode$7Hrq, r503_xn$startfrom$1aao, r503_xn$lineto$5sIl, r503_xn$curveto$1aao, r503_xn$cubicto$1aao, r503_xn$putshapes$9Jrj, r503_xn$reverselast$3qIs, r503_include, r503_xn$createstroke$7Hrq, r503_xn$setanchor$9Jrj, r503_xn$dontexport$5sIl, r503_radius, _r503_t0, _r503_t1, _r503_t2, _r503_t3;
            _r503_t0 = this;
            r503_currentGlyph = _r503_t0;
            r503_xn$setwidth$9Jrj = _r503_t0['set-width']['bind'](_r503_t0);
            r503_xn$assignunicode$7Hrq = function _r503_t2(r504_code) {
                var r504_code, _r504_t0, _r504_t1;
                r503_currentGlyph['assign-unicode'](r504_code);
                return r4_unicodeGlyphs[r503_currentGlyph['unicode'][r503_currentGlyph['unicode']['length'] - 1]] = r503_currentGlyph;
            };
            r503_xn$startfrom$1aao = _r503_t0['start-from']['bind'](_r503_t0);
            r503_xn$lineto$5sIl = _r503_t0['line-to']['bind'](_r503_t0);
            r503_xn$curveto$1aao = _r503_t0['curve-to']['bind'](_r503_t0);
            r503_xn$cubicto$1aao = _r503_t0['cubic-to']['bind'](_r503_t0);
            r503_xn$putshapes$9Jrj = _r503_t0['put-shapes']['bind'](_r503_t0);
            r503_xn$reverselast$3qIs = _r503_t0['reverse-last']['bind'](_r503_t0);
            r503_include = _r503_t0['include']['bind'](_r503_t0);
            r503_xn$createstroke$7Hrq = _r503_t0['create-stroke']['bind'](_r503_t0);
            r503_xn$setanchor$9Jrj = _r503_t0['set-anchor']['bind'](_r503_t0);
            r503_xn$dontexport$5sIl = function _r503_t3() {
                var _r505_t0, _r505_t1;
                return r503_currentGlyph['dontExport'] = true;
            };
            _r503_t0['gizmo'] = r4_globalTransform;
            _r503_t0['set-width'](r4_WIDTH);
            r503_xn$setwidth$9Jrj(r4_WIDTH);
            r503_xn$dontexport$5sIl();
            r503_include(r4_glyphs['O']);
            r503_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r503_include([r4_Ring(r4_CAPMIDDLE + r503_radius, r4_CAPMIDDLE - r503_radius, r4_MIDDLE + r503_radius, r4_MIDDLE - r503_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t165() {
            var r507_currentGlyph, r507_xn$setwidth$9Jrj, r507_xn$assignunicode$7Hrq, r507_xn$startfrom$1aao, r507_xn$lineto$5sIl, r507_xn$curveto$1aao, r507_xn$cubicto$1aao, r507_xn$putshapes$9Jrj, r507_xn$reverselast$3qIs, r507_include, r507_xn$createstroke$7Hrq, r507_xn$setanchor$9Jrj, r507_xn$dontexport$5sIl, _r507_t0, _r507_t1, _r507_t2, _r507_t3;
            _r507_t0 = this;
            r507_currentGlyph = _r507_t0;
            r507_xn$setwidth$9Jrj = _r507_t0['set-width']['bind'](_r507_t0);
            r507_xn$assignunicode$7Hrq = function _r507_t2(r508_code) {
                var r508_code, _r508_t0, _r508_t1;
                r507_currentGlyph['assign-unicode'](r508_code);
                return r4_unicodeGlyphs[r507_currentGlyph['unicode'][r507_currentGlyph['unicode']['length'] - 1]] = r507_currentGlyph;
            };
            r507_xn$startfrom$1aao = _r507_t0['start-from']['bind'](_r507_t0);
            r507_xn$lineto$5sIl = _r507_t0['line-to']['bind'](_r507_t0);
            r507_xn$curveto$1aao = _r507_t0['curve-to']['bind'](_r507_t0);
            r507_xn$cubicto$1aao = _r507_t0['cubic-to']['bind'](_r507_t0);
            r507_xn$putshapes$9Jrj = _r507_t0['put-shapes']['bind'](_r507_t0);
            r507_xn$reverselast$3qIs = _r507_t0['reverse-last']['bind'](_r507_t0);
            r507_include = _r507_t0['include']['bind'](_r507_t0);
            r507_xn$createstroke$7Hrq = _r507_t0['create-stroke']['bind'](_r507_t0);
            r507_xn$setanchor$9Jrj = _r507_t0['set-anchor']['bind'](_r507_t0);
            r507_xn$dontexport$5sIl = function _r507_t3() {
                var _r509_t0, _r509_t1;
                return r507_currentGlyph['dontExport'] = true;
            };
            _r507_t0['gizmo'] = r4_globalTransform;
            _r507_t0['set-width'](r4_WIDTH);
            r507_xn$setwidth$9Jrj(r4_WIDTH);
            r507_xn$assignunicode$7Hrq('1');
            r507_include(r507_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD));
            r507_include(r507_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t166() {
            var r511_currentGlyph, r511_xn$setwidth$9Jrj, r511_xn$assignunicode$7Hrq, r511_xn$startfrom$1aao, r511_xn$lineto$5sIl, r511_xn$curveto$1aao, r511_xn$cubicto$1aao, r511_xn$putshapes$9Jrj, r511_xn$reverselast$3qIs, r511_include, r511_xn$createstroke$7Hrq, r511_xn$setanchor$9Jrj, r511_xn$dontexport$5sIl, _r511_t0, _r511_t1, _r511_t2, _r511_t3;
            _r511_t0 = this;
            r511_currentGlyph = _r511_t0;
            r511_xn$setwidth$9Jrj = _r511_t0['set-width']['bind'](_r511_t0);
            r511_xn$assignunicode$7Hrq = function _r511_t2(r512_code) {
                var r512_code, _r512_t0, _r512_t1;
                r511_currentGlyph['assign-unicode'](r512_code);
                return r4_unicodeGlyphs[r511_currentGlyph['unicode'][r511_currentGlyph['unicode']['length'] - 1]] = r511_currentGlyph;
            };
            r511_xn$startfrom$1aao = _r511_t0['start-from']['bind'](_r511_t0);
            r511_xn$lineto$5sIl = _r511_t0['line-to']['bind'](_r511_t0);
            r511_xn$curveto$1aao = _r511_t0['curve-to']['bind'](_r511_t0);
            r511_xn$cubicto$1aao = _r511_t0['cubic-to']['bind'](_r511_t0);
            r511_xn$putshapes$9Jrj = _r511_t0['put-shapes']['bind'](_r511_t0);
            r511_xn$reverselast$3qIs = _r511_t0['reverse-last']['bind'](_r511_t0);
            r511_include = _r511_t0['include']['bind'](_r511_t0);
            r511_xn$createstroke$7Hrq = _r511_t0['create-stroke']['bind'](_r511_t0);
            r511_xn$setanchor$9Jrj = _r511_t0['set-anchor']['bind'](_r511_t0);
            r511_xn$dontexport$5sIl = function _r511_t3() {
                var _r513_t0, _r513_t1;
                return r511_currentGlyph['dontExport'] = true;
            };
            _r511_t0['gizmo'] = r4_globalTransform;
            _r511_t0['set-width'](r4_WIDTH);
            r511_xn$setwidth$9Jrj(r4_WIDTH);
            r511_xn$assignunicode$7Hrq('2');
            r511_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r511_include(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r511_include(r511_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t167() {
            var r515_currentGlyph, r515_xn$setwidth$9Jrj, r515_xn$assignunicode$7Hrq, r515_xn$startfrom$1aao, r515_xn$lineto$5sIl, r515_xn$curveto$1aao, r515_xn$cubicto$1aao, r515_xn$putshapes$9Jrj, r515_xn$reverselast$3qIs, r515_include, r515_xn$createstroke$7Hrq, r515_xn$setanchor$9Jrj, r515_xn$dontexport$5sIl, r515_threeRadius, _r515_t0, _r515_t1, _r515_t2, _r515_t3;
            _r515_t0 = this;
            r515_currentGlyph = _r515_t0;
            r515_xn$setwidth$9Jrj = _r515_t0['set-width']['bind'](_r515_t0);
            r515_xn$assignunicode$7Hrq = function _r515_t2(r516_code) {
                var r516_code, _r516_t0, _r516_t1;
                r515_currentGlyph['assign-unicode'](r516_code);
                return r4_unicodeGlyphs[r515_currentGlyph['unicode'][r515_currentGlyph['unicode']['length'] - 1]] = r515_currentGlyph;
            };
            r515_xn$startfrom$1aao = _r515_t0['start-from']['bind'](_r515_t0);
            r515_xn$lineto$5sIl = _r515_t0['line-to']['bind'](_r515_t0);
            r515_xn$curveto$1aao = _r515_t0['curve-to']['bind'](_r515_t0);
            r515_xn$cubicto$1aao = _r515_t0['cubic-to']['bind'](_r515_t0);
            r515_xn$putshapes$9Jrj = _r515_t0['put-shapes']['bind'](_r515_t0);
            r515_xn$reverselast$3qIs = _r515_t0['reverse-last']['bind'](_r515_t0);
            r515_include = _r515_t0['include']['bind'](_r515_t0);
            r515_xn$createstroke$7Hrq = _r515_t0['create-stroke']['bind'](_r515_t0);
            r515_xn$setanchor$9Jrj = _r515_t0['set-anchor']['bind'](_r515_t0);
            r515_xn$dontexport$5sIl = function _r515_t3() {
                var _r517_t0, _r517_t1;
                return r515_currentGlyph['dontExport'] = true;
            };
            _r515_t0['gizmo'] = r4_globalTransform;
            _r515_t0['set-width'](r4_WIDTH);
            r515_xn$setwidth$9Jrj(r4_WIDTH);
            r515_xn$assignunicode$7Hrq('3');
            r515_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r515_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r515_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r515_include(r515_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r515_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r515_include(r515_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r515_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t168() {
            var r519_currentGlyph, r519_xn$setwidth$9Jrj, r519_xn$assignunicode$7Hrq, r519_xn$startfrom$1aao, r519_xn$lineto$5sIl, r519_xn$curveto$1aao, r519_xn$cubicto$1aao, r519_xn$putshapes$9Jrj, r519_xn$reverselast$3qIs, r519_include, r519_xn$createstroke$7Hrq, r519_xn$setanchor$9Jrj, r519_xn$dontexport$5sIl, r519_bar, r519_vert, _r519_t0, _r519_t1, _r519_t2, _r519_t3;
            _r519_t0 = this;
            r519_currentGlyph = _r519_t0;
            r519_xn$setwidth$9Jrj = _r519_t0['set-width']['bind'](_r519_t0);
            r519_xn$assignunicode$7Hrq = function _r519_t2(r520_code) {
                var r520_code, _r520_t0, _r520_t1;
                r519_currentGlyph['assign-unicode'](r520_code);
                return r4_unicodeGlyphs[r519_currentGlyph['unicode'][r519_currentGlyph['unicode']['length'] - 1]] = r519_currentGlyph;
            };
            r519_xn$startfrom$1aao = _r519_t0['start-from']['bind'](_r519_t0);
            r519_xn$lineto$5sIl = _r519_t0['line-to']['bind'](_r519_t0);
            r519_xn$curveto$1aao = _r519_t0['curve-to']['bind'](_r519_t0);
            r519_xn$cubicto$1aao = _r519_t0['cubic-to']['bind'](_r519_t0);
            r519_xn$putshapes$9Jrj = _r519_t0['put-shapes']['bind'](_r519_t0);
            r519_xn$reverselast$3qIs = _r519_t0['reverse-last']['bind'](_r519_t0);
            r519_include = _r519_t0['include']['bind'](_r519_t0);
            r519_xn$createstroke$7Hrq = _r519_t0['create-stroke']['bind'](_r519_t0);
            r519_xn$setanchor$9Jrj = _r519_t0['set-anchor']['bind'](_r519_t0);
            r519_xn$dontexport$5sIl = function _r519_t3() {
                var _r521_t0, _r521_t1;
                return r519_currentGlyph['dontExport'] = true;
            };
            _r519_t0['gizmo'] = r4_globalTransform;
            _r519_t0['set-width'](r4_WIDTH);
            r519_xn$setwidth$9Jrj(r4_WIDTH);
            r519_xn$assignunicode$7Hrq('4');
            r519_bar = r4_CAP * 0.4;
            r519_vert = r4_WIDTH * 0.55;
            r519_include(r519_xn$createstroke$7Hrq()['start-from'](r4_SB, r519_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r519_bar)['heads-to'](r4_RIGHTWARD));
            r519_include(r519_xn$createstroke$7Hrq()['start-from'](r519_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r519_vert, r4_CAP)['heads-to'](r4_UPWARD));
            r519_include(r519_xn$createstroke$7Hrq()['start-from'](r4_SB, r519_bar)['set-width'](0, r4_STROKE)['line-to'](r519_vert, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t169() {
            var r523_currentGlyph, r523_xn$setwidth$9Jrj, r523_xn$assignunicode$7Hrq, r523_xn$startfrom$1aao, r523_xn$lineto$5sIl, r523_xn$curveto$1aao, r523_xn$cubicto$1aao, r523_xn$putshapes$9Jrj, r523_xn$reverselast$3qIs, r523_include, r523_xn$createstroke$7Hrq, r523_xn$setanchor$9Jrj, r523_xn$dontexport$5sIl, _r523_t0, _r523_t1, _r523_t2, _r523_t3;
            _r523_t0 = this;
            r523_currentGlyph = _r523_t0;
            r523_xn$setwidth$9Jrj = _r523_t0['set-width']['bind'](_r523_t0);
            r523_xn$assignunicode$7Hrq = function _r523_t2(r524_code) {
                var r524_code, _r524_t0, _r524_t1;
                r523_currentGlyph['assign-unicode'](r524_code);
                return r4_unicodeGlyphs[r523_currentGlyph['unicode'][r523_currentGlyph['unicode']['length'] - 1]] = r523_currentGlyph;
            };
            r523_xn$startfrom$1aao = _r523_t0['start-from']['bind'](_r523_t0);
            r523_xn$lineto$5sIl = _r523_t0['line-to']['bind'](_r523_t0);
            r523_xn$curveto$1aao = _r523_t0['curve-to']['bind'](_r523_t0);
            r523_xn$cubicto$1aao = _r523_t0['cubic-to']['bind'](_r523_t0);
            r523_xn$putshapes$9Jrj = _r523_t0['put-shapes']['bind'](_r523_t0);
            r523_xn$reverselast$3qIs = _r523_t0['reverse-last']['bind'](_r523_t0);
            r523_include = _r523_t0['include']['bind'](_r523_t0);
            r523_xn$createstroke$7Hrq = _r523_t0['create-stroke']['bind'](_r523_t0);
            r523_xn$setanchor$9Jrj = _r523_t0['set-anchor']['bind'](_r523_t0);
            r523_xn$dontexport$5sIl = function _r523_t3() {
                var _r525_t0, _r525_t1;
                return r523_currentGlyph['dontExport'] = true;
            };
            _r523_t0['gizmo'] = r4_globalTransform;
            _r523_t0['set-width'](r4_WIDTH);
            r523_xn$setwidth$9Jrj(r4_WIDTH);
            r523_xn$assignunicode$7Hrq('5');
            r523_include(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r523_include(r523_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD));
            r523_include(r523_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r523_include(r523_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t170() {
            var r527_currentGlyph, r527_xn$setwidth$9Jrj, r527_xn$assignunicode$7Hrq, r527_xn$startfrom$1aao, r527_xn$lineto$5sIl, r527_xn$curveto$1aao, r527_xn$cubicto$1aao, r527_xn$putshapes$9Jrj, r527_xn$reverselast$3qIs, r527_include, r527_xn$createstroke$7Hrq, r527_xn$setanchor$9Jrj, r527_xn$dontexport$5sIl, r527_ymiddlea, _r527_t0, _r527_t1, _r527_t2, _r527_t3;
            _r527_t0 = this;
            r527_currentGlyph = _r527_t0;
            r527_xn$setwidth$9Jrj = _r527_t0['set-width']['bind'](_r527_t0);
            r527_xn$assignunicode$7Hrq = function _r527_t2(r528_code) {
                var r528_code, _r528_t0, _r528_t1;
                r527_currentGlyph['assign-unicode'](r528_code);
                return r4_unicodeGlyphs[r527_currentGlyph['unicode'][r527_currentGlyph['unicode']['length'] - 1]] = r527_currentGlyph;
            };
            r527_xn$startfrom$1aao = _r527_t0['start-from']['bind'](_r527_t0);
            r527_xn$lineto$5sIl = _r527_t0['line-to']['bind'](_r527_t0);
            r527_xn$curveto$1aao = _r527_t0['curve-to']['bind'](_r527_t0);
            r527_xn$cubicto$1aao = _r527_t0['cubic-to']['bind'](_r527_t0);
            r527_xn$putshapes$9Jrj = _r527_t0['put-shapes']['bind'](_r527_t0);
            r527_xn$reverselast$3qIs = _r527_t0['reverse-last']['bind'](_r527_t0);
            r527_include = _r527_t0['include']['bind'](_r527_t0);
            r527_xn$createstroke$7Hrq = _r527_t0['create-stroke']['bind'](_r527_t0);
            r527_xn$setanchor$9Jrj = _r527_t0['set-anchor']['bind'](_r527_t0);
            r527_xn$dontexport$5sIl = function _r527_t3() {
                var _r529_t0, _r529_t1;
                return r527_currentGlyph['dontExport'] = true;
            };
            _r527_t0['gizmo'] = r4_globalTransform;
            _r527_t0['set-width'](r4_WIDTH);
            r527_xn$setwidth$9Jrj(r4_WIDTH);
            r527_xn$assignunicode$7Hrq('6');
            r527_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r527_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r527_include(r527_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r527_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r527_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t171() {
            var r531_currentGlyph, r531_xn$setwidth$9Jrj, r531_xn$assignunicode$7Hrq, r531_xn$startfrom$1aao, r531_xn$lineto$5sIl, r531_xn$curveto$1aao, r531_xn$cubicto$1aao, r531_xn$putshapes$9Jrj, r531_xn$reverselast$3qIs, r531_include, r531_xn$createstroke$7Hrq, r531_xn$setanchor$9Jrj, r531_xn$dontexport$5sIl, r531_cor, r531_x, _r531_t0, _r531_t1, _r531_t2, _r531_t3;
            _r531_t0 = this;
            r531_currentGlyph = _r531_t0;
            r531_xn$setwidth$9Jrj = _r531_t0['set-width']['bind'](_r531_t0);
            r531_xn$assignunicode$7Hrq = function _r531_t2(r532_code) {
                var r532_code, _r532_t0, _r532_t1;
                r531_currentGlyph['assign-unicode'](r532_code);
                return r4_unicodeGlyphs[r531_currentGlyph['unicode'][r531_currentGlyph['unicode']['length'] - 1]] = r531_currentGlyph;
            };
            r531_xn$startfrom$1aao = _r531_t0['start-from']['bind'](_r531_t0);
            r531_xn$lineto$5sIl = _r531_t0['line-to']['bind'](_r531_t0);
            r531_xn$curveto$1aao = _r531_t0['curve-to']['bind'](_r531_t0);
            r531_xn$cubicto$1aao = _r531_t0['cubic-to']['bind'](_r531_t0);
            r531_xn$putshapes$9Jrj = _r531_t0['put-shapes']['bind'](_r531_t0);
            r531_xn$reverselast$3qIs = _r531_t0['reverse-last']['bind'](_r531_t0);
            r531_include = _r531_t0['include']['bind'](_r531_t0);
            r531_xn$createstroke$7Hrq = _r531_t0['create-stroke']['bind'](_r531_t0);
            r531_xn$setanchor$9Jrj = _r531_t0['set-anchor']['bind'](_r531_t0);
            r531_xn$dontexport$5sIl = function _r531_t3() {
                var _r533_t0, _r533_t1;
                return r531_currentGlyph['dontExport'] = true;
            };
            _r531_t0['gizmo'] = r4_globalTransform;
            _r531_t0['set-width'](r4_WIDTH);
            r531_xn$setwidth$9Jrj(r4_WIDTH);
            r531_xn$assignunicode$7Hrq('7');
            r531_include(r531_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r531_cor = 1.15;
            r531_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r531_xn$startfrom$1aao(r531_x, 0);
            r531_xn$lineto$5sIl(r531_x + r4_STROKE * r531_cor, 0);
            r531_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r531_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r531_cor, r4_CAP - r4_STROKE);
            r531_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t172() {
            var r535_currentGlyph, r535_xn$setwidth$9Jrj, r535_xn$assignunicode$7Hrq, r535_xn$startfrom$1aao, r535_xn$lineto$5sIl, r535_xn$curveto$1aao, r535_xn$cubicto$1aao, r535_xn$putshapes$9Jrj, r535_xn$reverselast$3qIs, r535_include, r535_xn$createstroke$7Hrq, r535_xn$setanchor$9Jrj, r535_xn$dontexport$5sIl, r535_sma, r535_smb, r535_p, _r535_t0, _r535_t1, _r535_t2, _r535_t3;
            _r535_t0 = this;
            r535_currentGlyph = _r535_t0;
            r535_xn$setwidth$9Jrj = _r535_t0['set-width']['bind'](_r535_t0);
            r535_xn$assignunicode$7Hrq = function _r535_t2(r536_code) {
                var r536_code, _r536_t0, _r536_t1;
                r535_currentGlyph['assign-unicode'](r536_code);
                return r4_unicodeGlyphs[r535_currentGlyph['unicode'][r535_currentGlyph['unicode']['length'] - 1]] = r535_currentGlyph;
            };
            r535_xn$startfrom$1aao = _r535_t0['start-from']['bind'](_r535_t0);
            r535_xn$lineto$5sIl = _r535_t0['line-to']['bind'](_r535_t0);
            r535_xn$curveto$1aao = _r535_t0['curve-to']['bind'](_r535_t0);
            r535_xn$cubicto$1aao = _r535_t0['cubic-to']['bind'](_r535_t0);
            r535_xn$putshapes$9Jrj = _r535_t0['put-shapes']['bind'](_r535_t0);
            r535_xn$reverselast$3qIs = _r535_t0['reverse-last']['bind'](_r535_t0);
            r535_include = _r535_t0['include']['bind'](_r535_t0);
            r535_xn$createstroke$7Hrq = _r535_t0['create-stroke']['bind'](_r535_t0);
            r535_xn$setanchor$9Jrj = _r535_t0['set-anchor']['bind'](_r535_t0);
            r535_xn$dontexport$5sIl = function _r535_t3() {
                var _r537_t0, _r537_t1;
                return r535_currentGlyph['dontExport'] = true;
            };
            _r535_t0['gizmo'] = r4_globalTransform;
            _r535_t0['set-width'](r4_WIDTH);
            r535_xn$setwidth$9Jrj(r4_WIDTH);
            r535_xn$assignunicode$7Hrq('8');
            r535_sma = r4_SMOOTHA * 0.975;
            r535_smb = r4_SMOOTHB * 0.975;
            r535_p = 0.96;
            r535_include(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r535_p), r4_CAP - r535_sma * r535_p, r4_RIGHTSB, r535_sma));
            r535_include(r4_xsStrand(r4_SB, r535_smb, r0_mix(r4_SB, r4_RIGHTSB, r535_p), r4_CAP - r535_smb * r535_p));
            r535_include(r535_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r535_p), r4_CAP - r535_smb * r535_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r535_p), r4_CAP - r535_sma * r535_p));
            r535_include(r535_xn$createstroke$7Hrq()['start-from'](r4_SB, r535_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r535_sma));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t173() {
            var r539_currentGlyph, r539_xn$setwidth$9Jrj, r539_xn$assignunicode$7Hrq, r539_xn$startfrom$1aao, r539_xn$lineto$5sIl, r539_xn$curveto$1aao, r539_xn$cubicto$1aao, r539_xn$putshapes$9Jrj, r539_xn$reverselast$3qIs, r539_include, r539_xn$createstroke$7Hrq, r539_xn$setanchor$9Jrj, r539_xn$dontexport$5sIl, r539_ymiddlea, _r539_t0, _r539_t1, _r539_t2, _r539_t3;
            _r539_t0 = this;
            r539_currentGlyph = _r539_t0;
            r539_xn$setwidth$9Jrj = _r539_t0['set-width']['bind'](_r539_t0);
            r539_xn$assignunicode$7Hrq = function _r539_t2(r540_code) {
                var r540_code, _r540_t0, _r540_t1;
                r539_currentGlyph['assign-unicode'](r540_code);
                return r4_unicodeGlyphs[r539_currentGlyph['unicode'][r539_currentGlyph['unicode']['length'] - 1]] = r539_currentGlyph;
            };
            r539_xn$startfrom$1aao = _r539_t0['start-from']['bind'](_r539_t0);
            r539_xn$lineto$5sIl = _r539_t0['line-to']['bind'](_r539_t0);
            r539_xn$curveto$1aao = _r539_t0['curve-to']['bind'](_r539_t0);
            r539_xn$cubicto$1aao = _r539_t0['cubic-to']['bind'](_r539_t0);
            r539_xn$putshapes$9Jrj = _r539_t0['put-shapes']['bind'](_r539_t0);
            r539_xn$reverselast$3qIs = _r539_t0['reverse-last']['bind'](_r539_t0);
            r539_include = _r539_t0['include']['bind'](_r539_t0);
            r539_xn$createstroke$7Hrq = _r539_t0['create-stroke']['bind'](_r539_t0);
            r539_xn$setanchor$9Jrj = _r539_t0['set-anchor']['bind'](_r539_t0);
            r539_xn$dontexport$5sIl = function _r539_t3() {
                var _r541_t0, _r541_t1;
                return r539_currentGlyph['dontExport'] = true;
            };
            _r539_t0['gizmo'] = r4_globalTransform;
            _r539_t0['set-width'](r4_WIDTH);
            r539_xn$setwidth$9Jrj(r4_WIDTH);
            r539_xn$assignunicode$7Hrq('9');
            r539_include(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r539_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r539_include(r539_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r539_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4));
            r539_include(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t174() {
            var r543_currentGlyph, r543_xn$setwidth$9Jrj, r543_xn$assignunicode$7Hrq, r543_xn$startfrom$1aao, r543_xn$lineto$5sIl, r543_xn$curveto$1aao, r543_xn$cubicto$1aao, r543_xn$putshapes$9Jrj, r543_xn$reverselast$3qIs, r543_include, r543_xn$createstroke$7Hrq, r543_xn$setanchor$9Jrj, r543_xn$dontexport$5sIl, _r543_t0, _r543_t1, _r543_t2, _r543_t3;
            _r543_t0 = this;
            r543_currentGlyph = _r543_t0;
            r543_xn$setwidth$9Jrj = _r543_t0['set-width']['bind'](_r543_t0);
            r543_xn$assignunicode$7Hrq = function _r543_t2(r544_code) {
                var r544_code, _r544_t0, _r544_t1;
                r543_currentGlyph['assign-unicode'](r544_code);
                return r4_unicodeGlyphs[r543_currentGlyph['unicode'][r543_currentGlyph['unicode']['length'] - 1]] = r543_currentGlyph;
            };
            r543_xn$startfrom$1aao = _r543_t0['start-from']['bind'](_r543_t0);
            r543_xn$lineto$5sIl = _r543_t0['line-to']['bind'](_r543_t0);
            r543_xn$curveto$1aao = _r543_t0['curve-to']['bind'](_r543_t0);
            r543_xn$cubicto$1aao = _r543_t0['cubic-to']['bind'](_r543_t0);
            r543_xn$putshapes$9Jrj = _r543_t0['put-shapes']['bind'](_r543_t0);
            r543_xn$reverselast$3qIs = _r543_t0['reverse-last']['bind'](_r543_t0);
            r543_include = _r543_t0['include']['bind'](_r543_t0);
            r543_xn$createstroke$7Hrq = _r543_t0['create-stroke']['bind'](_r543_t0);
            r543_xn$setanchor$9Jrj = _r543_t0['set-anchor']['bind'](_r543_t0);
            r543_xn$dontexport$5sIl = function _r543_t3() {
                var _r545_t0, _r545_t1;
                return r543_currentGlyph['dontExport'] = true;
            };
            _r543_t0['gizmo'] = r4_globalTransform;
            _r543_t0['set-width'](r4_WIDTH);
            r543_xn$setwidth$9Jrj(r4_WIDTH);
            r543_xn$assignunicode$7Hrq('$');
            r543_include(r4_glyphs['S']);
            r543_include(r543_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r543_include(r543_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t175() {
            var r547_currentGlyph, r547_xn$setwidth$9Jrj, r547_xn$assignunicode$7Hrq, r547_xn$startfrom$1aao, r547_xn$lineto$5sIl, r547_xn$curveto$1aao, r547_xn$cubicto$1aao, r547_xn$putshapes$9Jrj, r547_xn$reverselast$3qIs, r547_include, r547_xn$createstroke$7Hrq, r547_xn$setanchor$9Jrj, r547_xn$dontexport$5sIl, r547_fine, r547_p, r547_l, r547_pr, r547_q, r547_r, r547_s, _r547_t0, _r547_t1, _r547_t2, _r547_t3;
            _r547_t0 = this;
            r547_currentGlyph = _r547_t0;
            r547_xn$setwidth$9Jrj = _r547_t0['set-width']['bind'](_r547_t0);
            r547_xn$assignunicode$7Hrq = function _r547_t2(r548_code) {
                var r548_code, _r548_t0, _r548_t1;
                r547_currentGlyph['assign-unicode'](r548_code);
                return r4_unicodeGlyphs[r547_currentGlyph['unicode'][r547_currentGlyph['unicode']['length'] - 1]] = r547_currentGlyph;
            };
            r547_xn$startfrom$1aao = _r547_t0['start-from']['bind'](_r547_t0);
            r547_xn$lineto$5sIl = _r547_t0['line-to']['bind'](_r547_t0);
            r547_xn$curveto$1aao = _r547_t0['curve-to']['bind'](_r547_t0);
            r547_xn$cubicto$1aao = _r547_t0['cubic-to']['bind'](_r547_t0);
            r547_xn$putshapes$9Jrj = _r547_t0['put-shapes']['bind'](_r547_t0);
            r547_xn$reverselast$3qIs = _r547_t0['reverse-last']['bind'](_r547_t0);
            r547_include = _r547_t0['include']['bind'](_r547_t0);
            r547_xn$createstroke$7Hrq = _r547_t0['create-stroke']['bind'](_r547_t0);
            r547_xn$setanchor$9Jrj = _r547_t0['set-anchor']['bind'](_r547_t0);
            r547_xn$dontexport$5sIl = function _r547_t3() {
                var _r549_t0, _r549_t1;
                return r547_currentGlyph['dontExport'] = true;
            };
            _r547_t0['gizmo'] = r4_globalTransform;
            _r547_t0['set-width'](r4_WIDTH);
            r547_xn$setwidth$9Jrj(r4_WIDTH);
            r547_xn$assignunicode$7Hrq('&');
            r547_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r547_p = 0.85;
            r547_l = 0.05;
            r547_pr = 0.9;
            r547_q = 0.45;
            r547_r = 1.1;
            r547_s = 0;
            r547_include(r547_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r547_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r547_p), r4_CAP - r4_SMOOTHB * r547_pr, r4_HALFSTROKE, r547_fine / 2));
            r547_include(r547_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r547_p), r4_CAP - r4_SMOOTHB * r547_pr)['set-width'](r547_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r547_p, r547_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r547_l), r4_CAP - r4_SMOOTHA * r547_pr));
            r547_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r547_l), r4_CAP - r4_SMOOTHA * r547_pr, r0_mix(r4_SB, r4_RIGHTSB, r547_r), r4_SMOOTHA * r547_s, r547_fine / 2, r547_fine / 2, null, null, r4_SMOOTHA * r547_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t176() {
            var r551_currentGlyph, r551_xn$setwidth$9Jrj, r551_xn$assignunicode$7Hrq, r551_xn$startfrom$1aao, r551_xn$lineto$5sIl, r551_xn$curveto$1aao, r551_xn$cubicto$1aao, r551_xn$putshapes$9Jrj, r551_xn$reverselast$3qIs, r551_include, r551_xn$createstroke$7Hrq, r551_xn$setanchor$9Jrj, r551_xn$dontexport$5sIl, r551_top, r551_bot, r551_otop, r551_obot, r551_sw, r551_m1, r551_m2, r551_sma, r551_smb, _r551_t0, _r551_t1, _r551_t2, _r551_t3;
            _r551_t0 = this;
            r551_currentGlyph = _r551_t0;
            r551_xn$setwidth$9Jrj = _r551_t0['set-width']['bind'](_r551_t0);
            r551_xn$assignunicode$7Hrq = function _r551_t2(r552_code) {
                var r552_code, _r552_t0, _r552_t1;
                r551_currentGlyph['assign-unicode'](r552_code);
                return r4_unicodeGlyphs[r551_currentGlyph['unicode'][r551_currentGlyph['unicode']['length'] - 1]] = r551_currentGlyph;
            };
            r551_xn$startfrom$1aao = _r551_t0['start-from']['bind'](_r551_t0);
            r551_xn$lineto$5sIl = _r551_t0['line-to']['bind'](_r551_t0);
            r551_xn$curveto$1aao = _r551_t0['curve-to']['bind'](_r551_t0);
            r551_xn$cubicto$1aao = _r551_t0['cubic-to']['bind'](_r551_t0);
            r551_xn$putshapes$9Jrj = _r551_t0['put-shapes']['bind'](_r551_t0);
            r551_xn$reverselast$3qIs = _r551_t0['reverse-last']['bind'](_r551_t0);
            r551_include = _r551_t0['include']['bind'](_r551_t0);
            r551_xn$createstroke$7Hrq = _r551_t0['create-stroke']['bind'](_r551_t0);
            r551_xn$setanchor$9Jrj = _r551_t0['set-anchor']['bind'](_r551_t0);
            r551_xn$dontexport$5sIl = function _r551_t3() {
                var _r553_t0, _r553_t1;
                return r551_currentGlyph['dontExport'] = true;
            };
            _r551_t0['gizmo'] = r4_globalTransform;
            _r551_t0['set-width'](r4_WIDTH);
            r551_xn$setwidth$9Jrj(r4_WIDTH);
            r551_xn$assignunicode$7Hrq('@');
            r551_top = r4_CAP + r4_HALFSTROKE;
            r551_bot = r4_DESCENDER + r4_HALFSTROKE;
            r551_otop = r0_mix(r551_bot, r551_top, 0.75);
            r551_obot = r0_mix(r551_top, r551_bot, 0.8);
            r551_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r551_m1 = r0_mix(r4_SB + r551_sw, r4_RIGHTSB - r551_sw, 0.47) - r551_sw / 2;
            r551_m2 = r0_mix(r551_m1, r4_RIGHTSB, 0.5);
            r551_sma = r4_SMOOTHA * ((r4_RIGHTSB - r551_m1) / (r4_RIGHTSB - r4_SB));
            r551_smb = r4_SMOOTHB * ((r4_RIGHTSB - r551_m1) / (r4_RIGHTSB - r4_SB));
            r551_include(r551_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r551_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r551_sw, 0)['line-to'](r551_m2, r551_otop - r4_O)['arc-hv-to'](r551_m1, r551_otop - r551_sma)['line-to'](r551_m1, r551_obot + r551_smb)['arc-vh-to'](r551_m2 + r4_STROKE * r4_globalTransform['yx'], r551_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r551_obot + r551_sma)['line-to'](r4_RIGHTSB, r551_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r551_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r551_top - r4_SMOOTHA)['set-width'](r551_sw, 0)['line-to'](r4_SB, r551_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r551_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r551_bot + r4_O)['heads-to'](r4_RIGHTWARD));
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
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t177() {
            var r555_currentGlyph, r555_xn$setwidth$9Jrj, r555_xn$assignunicode$7Hrq, r555_xn$startfrom$1aao, r555_xn$lineto$5sIl, r555_xn$curveto$1aao, r555_xn$cubicto$1aao, r555_xn$putshapes$9Jrj, r555_xn$reverselast$3qIs, r555_include, r555_xn$createstroke$7Hrq, r555_xn$setanchor$9Jrj, r555_xn$dontexport$5sIl, r555_p, _r555_t0, _r555_t1, _r555_t2, _r555_t3;
            _r555_t0 = this;
            r555_currentGlyph = _r555_t0;
            r555_xn$setwidth$9Jrj = _r555_t0['set-width']['bind'](_r555_t0);
            r555_xn$assignunicode$7Hrq = function _r555_t2(r556_code) {
                var r556_code, _r556_t0, _r556_t1;
                r555_currentGlyph['assign-unicode'](r556_code);
                return r4_unicodeGlyphs[r555_currentGlyph['unicode'][r555_currentGlyph['unicode']['length'] - 1]] = r555_currentGlyph;
            };
            r555_xn$startfrom$1aao = _r555_t0['start-from']['bind'](_r555_t0);
            r555_xn$lineto$5sIl = _r555_t0['line-to']['bind'](_r555_t0);
            r555_xn$curveto$1aao = _r555_t0['curve-to']['bind'](_r555_t0);
            r555_xn$cubicto$1aao = _r555_t0['cubic-to']['bind'](_r555_t0);
            r555_xn$putshapes$9Jrj = _r555_t0['put-shapes']['bind'](_r555_t0);
            r555_xn$reverselast$3qIs = _r555_t0['reverse-last']['bind'](_r555_t0);
            r555_include = _r555_t0['include']['bind'](_r555_t0);
            r555_xn$createstroke$7Hrq = _r555_t0['create-stroke']['bind'](_r555_t0);
            r555_xn$setanchor$9Jrj = _r555_t0['set-anchor']['bind'](_r555_t0);
            r555_xn$dontexport$5sIl = function _r555_t3() {
                var _r557_t0, _r557_t1;
                return r555_currentGlyph['dontExport'] = true;
            };
            _r555_t0['gizmo'] = r4_globalTransform;
            _r555_t0['set-width'](r4_WIDTH);
            r555_xn$setwidth$9Jrj(r4_WIDTH);
            r555_xn$assignunicode$7Hrq('(');
            r555_p = 0.6;
            r555_include(r555_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r555_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r555_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t178() {
            var r559_currentGlyph, r559_xn$setwidth$9Jrj, r559_xn$assignunicode$7Hrq, r559_xn$startfrom$1aao, r559_xn$lineto$5sIl, r559_xn$curveto$1aao, r559_xn$cubicto$1aao, r559_xn$putshapes$9Jrj, r559_xn$reverselast$3qIs, r559_include, r559_xn$createstroke$7Hrq, r559_xn$setanchor$9Jrj, r559_xn$dontexport$5sIl, r559_p, _r559_t0, _r559_t1, _r559_t2, _r559_t3;
            _r559_t0 = this;
            r559_currentGlyph = _r559_t0;
            r559_xn$setwidth$9Jrj = _r559_t0['set-width']['bind'](_r559_t0);
            r559_xn$assignunicode$7Hrq = function _r559_t2(r560_code) {
                var r560_code, _r560_t0, _r560_t1;
                r559_currentGlyph['assign-unicode'](r560_code);
                return r4_unicodeGlyphs[r559_currentGlyph['unicode'][r559_currentGlyph['unicode']['length'] - 1]] = r559_currentGlyph;
            };
            r559_xn$startfrom$1aao = _r559_t0['start-from']['bind'](_r559_t0);
            r559_xn$lineto$5sIl = _r559_t0['line-to']['bind'](_r559_t0);
            r559_xn$curveto$1aao = _r559_t0['curve-to']['bind'](_r559_t0);
            r559_xn$cubicto$1aao = _r559_t0['cubic-to']['bind'](_r559_t0);
            r559_xn$putshapes$9Jrj = _r559_t0['put-shapes']['bind'](_r559_t0);
            r559_xn$reverselast$3qIs = _r559_t0['reverse-last']['bind'](_r559_t0);
            r559_include = _r559_t0['include']['bind'](_r559_t0);
            r559_xn$createstroke$7Hrq = _r559_t0['create-stroke']['bind'](_r559_t0);
            r559_xn$setanchor$9Jrj = _r559_t0['set-anchor']['bind'](_r559_t0);
            r559_xn$dontexport$5sIl = function _r559_t3() {
                var _r561_t0, _r561_t1;
                return r559_currentGlyph['dontExport'] = true;
            };
            _r559_t0['gizmo'] = r4_globalTransform;
            _r559_t0['set-width'](r4_WIDTH);
            r559_xn$setwidth$9Jrj(r4_WIDTH);
            r559_xn$assignunicode$7Hrq(')');
            r559_p = 0.6;
            r559_include(r559_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r559_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r559_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t179() {
            var r563_currentGlyph, r563_xn$setwidth$9Jrj, r563_xn$assignunicode$7Hrq, r563_xn$startfrom$1aao, r563_xn$lineto$5sIl, r563_xn$curveto$1aao, r563_xn$cubicto$1aao, r563_xn$putshapes$9Jrj, r563_xn$reverselast$3qIs, r563_include, r563_xn$createstroke$7Hrq, r563_xn$setanchor$9Jrj, r563_xn$dontexport$5sIl, _r563_t0, _r563_t1, _r563_t2, _r563_t3;
            _r563_t0 = this;
            r563_currentGlyph = _r563_t0;
            r563_xn$setwidth$9Jrj = _r563_t0['set-width']['bind'](_r563_t0);
            r563_xn$assignunicode$7Hrq = function _r563_t2(r564_code) {
                var r564_code, _r564_t0, _r564_t1;
                r563_currentGlyph['assign-unicode'](r564_code);
                return r4_unicodeGlyphs[r563_currentGlyph['unicode'][r563_currentGlyph['unicode']['length'] - 1]] = r563_currentGlyph;
            };
            r563_xn$startfrom$1aao = _r563_t0['start-from']['bind'](_r563_t0);
            r563_xn$lineto$5sIl = _r563_t0['line-to']['bind'](_r563_t0);
            r563_xn$curveto$1aao = _r563_t0['curve-to']['bind'](_r563_t0);
            r563_xn$cubicto$1aao = _r563_t0['cubic-to']['bind'](_r563_t0);
            r563_xn$putshapes$9Jrj = _r563_t0['put-shapes']['bind'](_r563_t0);
            r563_xn$reverselast$3qIs = _r563_t0['reverse-last']['bind'](_r563_t0);
            r563_include = _r563_t0['include']['bind'](_r563_t0);
            r563_xn$createstroke$7Hrq = _r563_t0['create-stroke']['bind'](_r563_t0);
            r563_xn$setanchor$9Jrj = _r563_t0['set-anchor']['bind'](_r563_t0);
            r563_xn$dontexport$5sIl = function _r563_t3() {
                var _r565_t0, _r565_t1;
                return r563_currentGlyph['dontExport'] = true;
            };
            _r563_t0['gizmo'] = r4_globalTransform;
            _r563_t0['set-width'](r4_WIDTH);
            r563_xn$setwidth$9Jrj(r4_WIDTH);
            r563_xn$assignunicode$7Hrq('[');
            r563_include(r563_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r563_include(r563_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r563_include(r563_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t180() {
            var r567_currentGlyph, r567_xn$setwidth$9Jrj, r567_xn$assignunicode$7Hrq, r567_xn$startfrom$1aao, r567_xn$lineto$5sIl, r567_xn$curveto$1aao, r567_xn$cubicto$1aao, r567_xn$putshapes$9Jrj, r567_xn$reverselast$3qIs, r567_include, r567_xn$createstroke$7Hrq, r567_xn$setanchor$9Jrj, r567_xn$dontexport$5sIl, _r567_t0, _r567_t1, _r567_t2, _r567_t3;
            _r567_t0 = this;
            r567_currentGlyph = _r567_t0;
            r567_xn$setwidth$9Jrj = _r567_t0['set-width']['bind'](_r567_t0);
            r567_xn$assignunicode$7Hrq = function _r567_t2(r568_code) {
                var r568_code, _r568_t0, _r568_t1;
                r567_currentGlyph['assign-unicode'](r568_code);
                return r4_unicodeGlyphs[r567_currentGlyph['unicode'][r567_currentGlyph['unicode']['length'] - 1]] = r567_currentGlyph;
            };
            r567_xn$startfrom$1aao = _r567_t0['start-from']['bind'](_r567_t0);
            r567_xn$lineto$5sIl = _r567_t0['line-to']['bind'](_r567_t0);
            r567_xn$curveto$1aao = _r567_t0['curve-to']['bind'](_r567_t0);
            r567_xn$cubicto$1aao = _r567_t0['cubic-to']['bind'](_r567_t0);
            r567_xn$putshapes$9Jrj = _r567_t0['put-shapes']['bind'](_r567_t0);
            r567_xn$reverselast$3qIs = _r567_t0['reverse-last']['bind'](_r567_t0);
            r567_include = _r567_t0['include']['bind'](_r567_t0);
            r567_xn$createstroke$7Hrq = _r567_t0['create-stroke']['bind'](_r567_t0);
            r567_xn$setanchor$9Jrj = _r567_t0['set-anchor']['bind'](_r567_t0);
            r567_xn$dontexport$5sIl = function _r567_t3() {
                var _r569_t0, _r569_t1;
                return r567_currentGlyph['dontExport'] = true;
            };
            _r567_t0['gizmo'] = r4_globalTransform;
            _r567_t0['set-width'](r4_WIDTH);
            r567_xn$setwidth$9Jrj(r4_WIDTH);
            r567_xn$assignunicode$7Hrq(']');
            r567_include(r567_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r567_include(r567_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r567_include(r567_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t181() {
            var r571_currentGlyph, r571_xn$setwidth$9Jrj, r571_xn$assignunicode$7Hrq, r571_xn$startfrom$1aao, r571_xn$lineto$5sIl, r571_xn$curveto$1aao, r571_xn$cubicto$1aao, r571_xn$putshapes$9Jrj, r571_xn$reverselast$3qIs, r571_include, r571_xn$createstroke$7Hrq, r571_xn$setanchor$9Jrj, r571_xn$dontexport$5sIl, r571_parenCenter, r571_radius, _r571_t0, _r571_t1, _r571_t2, _r571_t3;
            _r571_t0 = this;
            r571_currentGlyph = _r571_t0;
            r571_xn$setwidth$9Jrj = _r571_t0['set-width']['bind'](_r571_t0);
            r571_xn$assignunicode$7Hrq = function _r571_t2(r572_code) {
                var r572_code, _r572_t0, _r572_t1;
                r571_currentGlyph['assign-unicode'](r572_code);
                return r4_unicodeGlyphs[r571_currentGlyph['unicode'][r571_currentGlyph['unicode']['length'] - 1]] = r571_currentGlyph;
            };
            r571_xn$startfrom$1aao = _r571_t0['start-from']['bind'](_r571_t0);
            r571_xn$lineto$5sIl = _r571_t0['line-to']['bind'](_r571_t0);
            r571_xn$curveto$1aao = _r571_t0['curve-to']['bind'](_r571_t0);
            r571_xn$cubicto$1aao = _r571_t0['cubic-to']['bind'](_r571_t0);
            r571_xn$putshapes$9Jrj = _r571_t0['put-shapes']['bind'](_r571_t0);
            r571_xn$reverselast$3qIs = _r571_t0['reverse-last']['bind'](_r571_t0);
            r571_include = _r571_t0['include']['bind'](_r571_t0);
            r571_xn$createstroke$7Hrq = _r571_t0['create-stroke']['bind'](_r571_t0);
            r571_xn$setanchor$9Jrj = _r571_t0['set-anchor']['bind'](_r571_t0);
            r571_xn$dontexport$5sIl = function _r571_t3() {
                var _r573_t0, _r573_t1;
                return r571_currentGlyph['dontExport'] = true;
            };
            _r571_t0['gizmo'] = r4_globalTransform;
            _r571_t0['set-width'](r4_WIDTH);
            r571_xn$setwidth$9Jrj(r4_WIDTH);
            r571_xn$assignunicode$7Hrq('{');
            r571_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r571_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r571_parenCenter;
            r571_include(r571_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r571_parenCenter, r4_parenTop - r571_radius)['line-to'](r571_parenCenter, r4_parenMid + r571_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r571_include(r571_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r571_parenCenter, r4_parenBot + r571_radius)['line-to'](r571_parenCenter, r4_parenMid - r571_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t182() {
            var r575_currentGlyph, r575_xn$setwidth$9Jrj, r575_xn$assignunicode$7Hrq, r575_xn$startfrom$1aao, r575_xn$lineto$5sIl, r575_xn$curveto$1aao, r575_xn$cubicto$1aao, r575_xn$putshapes$9Jrj, r575_xn$reverselast$3qIs, r575_include, r575_xn$createstroke$7Hrq, r575_xn$setanchor$9Jrj, r575_xn$dontexport$5sIl, r575_parenCenter, r575_radius, _r575_t0, _r575_t1, _r575_t2, _r575_t3;
            _r575_t0 = this;
            r575_currentGlyph = _r575_t0;
            r575_xn$setwidth$9Jrj = _r575_t0['set-width']['bind'](_r575_t0);
            r575_xn$assignunicode$7Hrq = function _r575_t2(r576_code) {
                var r576_code, _r576_t0, _r576_t1;
                r575_currentGlyph['assign-unicode'](r576_code);
                return r4_unicodeGlyphs[r575_currentGlyph['unicode'][r575_currentGlyph['unicode']['length'] - 1]] = r575_currentGlyph;
            };
            r575_xn$startfrom$1aao = _r575_t0['start-from']['bind'](_r575_t0);
            r575_xn$lineto$5sIl = _r575_t0['line-to']['bind'](_r575_t0);
            r575_xn$curveto$1aao = _r575_t0['curve-to']['bind'](_r575_t0);
            r575_xn$cubicto$1aao = _r575_t0['cubic-to']['bind'](_r575_t0);
            r575_xn$putshapes$9Jrj = _r575_t0['put-shapes']['bind'](_r575_t0);
            r575_xn$reverselast$3qIs = _r575_t0['reverse-last']['bind'](_r575_t0);
            r575_include = _r575_t0['include']['bind'](_r575_t0);
            r575_xn$createstroke$7Hrq = _r575_t0['create-stroke']['bind'](_r575_t0);
            r575_xn$setanchor$9Jrj = _r575_t0['set-anchor']['bind'](_r575_t0);
            r575_xn$dontexport$5sIl = function _r575_t3() {
                var _r577_t0, _r577_t1;
                return r575_currentGlyph['dontExport'] = true;
            };
            _r575_t0['gizmo'] = r4_globalTransform;
            _r575_t0['set-width'](r4_WIDTH);
            r575_xn$setwidth$9Jrj(r4_WIDTH);
            r575_xn$assignunicode$7Hrq('}');
            r575_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r575_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r575_parenCenter;
            r575_include(r575_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r575_parenCenter, r4_parenTop - r575_radius)['line-to'](r575_parenCenter, r4_parenMid + r575_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r575_include(r575_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r575_parenCenter, r4_parenBot + r575_radius)['line-to'](r575_parenCenter, r4_parenMid - r575_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t183() {
            var r579_currentGlyph, r579_xn$setwidth$9Jrj, r579_xn$assignunicode$7Hrq, r579_xn$startfrom$1aao, r579_xn$lineto$5sIl, r579_xn$curveto$1aao, r579_xn$cubicto$1aao, r579_xn$putshapes$9Jrj, r579_xn$reverselast$3qIs, r579_include, r579_xn$createstroke$7Hrq, r579_xn$setanchor$9Jrj, r579_xn$dontexport$5sIl, _r579_t0, _r579_t1, _r579_t2, _r579_t3;
            _r579_t0 = this;
            r579_currentGlyph = _r579_t0;
            r579_xn$setwidth$9Jrj = _r579_t0['set-width']['bind'](_r579_t0);
            r579_xn$assignunicode$7Hrq = function _r579_t2(r580_code) {
                var r580_code, _r580_t0, _r580_t1;
                r579_currentGlyph['assign-unicode'](r580_code);
                return r4_unicodeGlyphs[r579_currentGlyph['unicode'][r579_currentGlyph['unicode']['length'] - 1]] = r579_currentGlyph;
            };
            r579_xn$startfrom$1aao = _r579_t0['start-from']['bind'](_r579_t0);
            r579_xn$lineto$5sIl = _r579_t0['line-to']['bind'](_r579_t0);
            r579_xn$curveto$1aao = _r579_t0['curve-to']['bind'](_r579_t0);
            r579_xn$cubicto$1aao = _r579_t0['cubic-to']['bind'](_r579_t0);
            r579_xn$putshapes$9Jrj = _r579_t0['put-shapes']['bind'](_r579_t0);
            r579_xn$reverselast$3qIs = _r579_t0['reverse-last']['bind'](_r579_t0);
            r579_include = _r579_t0['include']['bind'](_r579_t0);
            r579_xn$createstroke$7Hrq = _r579_t0['create-stroke']['bind'](_r579_t0);
            r579_xn$setanchor$9Jrj = _r579_t0['set-anchor']['bind'](_r579_t0);
            r579_xn$dontexport$5sIl = function _r579_t3() {
                var _r581_t0, _r581_t1;
                return r579_currentGlyph['dontExport'] = true;
            };
            _r579_t0['gizmo'] = r4_globalTransform;
            _r579_t0['set-width'](r4_WIDTH);
            r579_xn$setwidth$9Jrj(r4_WIDTH);
            r579_xn$assignunicode$7Hrq('.');
            r579_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t184() {
            var r583_currentGlyph, r583_xn$setwidth$9Jrj, r583_xn$assignunicode$7Hrq, r583_xn$startfrom$1aao, r583_xn$lineto$5sIl, r583_xn$curveto$1aao, r583_xn$cubicto$1aao, r583_xn$putshapes$9Jrj, r583_xn$reverselast$3qIs, r583_include, r583_xn$createstroke$7Hrq, r583_xn$setanchor$9Jrj, r583_xn$dontexport$5sIl, _r583_t0, _r583_t1, _r583_t2, _r583_t3;
            _r583_t0 = this;
            r583_currentGlyph = _r583_t0;
            r583_xn$setwidth$9Jrj = _r583_t0['set-width']['bind'](_r583_t0);
            r583_xn$assignunicode$7Hrq = function _r583_t2(r584_code) {
                var r584_code, _r584_t0, _r584_t1;
                r583_currentGlyph['assign-unicode'](r584_code);
                return r4_unicodeGlyphs[r583_currentGlyph['unicode'][r583_currentGlyph['unicode']['length'] - 1]] = r583_currentGlyph;
            };
            r583_xn$startfrom$1aao = _r583_t0['start-from']['bind'](_r583_t0);
            r583_xn$lineto$5sIl = _r583_t0['line-to']['bind'](_r583_t0);
            r583_xn$curveto$1aao = _r583_t0['curve-to']['bind'](_r583_t0);
            r583_xn$cubicto$1aao = _r583_t0['cubic-to']['bind'](_r583_t0);
            r583_xn$putshapes$9Jrj = _r583_t0['put-shapes']['bind'](_r583_t0);
            r583_xn$reverselast$3qIs = _r583_t0['reverse-last']['bind'](_r583_t0);
            r583_include = _r583_t0['include']['bind'](_r583_t0);
            r583_xn$createstroke$7Hrq = _r583_t0['create-stroke']['bind'](_r583_t0);
            r583_xn$setanchor$9Jrj = _r583_t0['set-anchor']['bind'](_r583_t0);
            r583_xn$dontexport$5sIl = function _r583_t3() {
                var _r585_t0, _r585_t1;
                return r583_currentGlyph['dontExport'] = true;
            };
            _r583_t0['gizmo'] = r4_globalTransform;
            _r583_t0['set-width'](r4_WIDTH);
            r583_xn$setwidth$9Jrj(r4_WIDTH);
            r583_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t185() {
            var r587_currentGlyph, r587_xn$setwidth$9Jrj, r587_xn$assignunicode$7Hrq, r587_xn$startfrom$1aao, r587_xn$lineto$5sIl, r587_xn$curveto$1aao, r587_xn$cubicto$1aao, r587_xn$putshapes$9Jrj, r587_xn$reverselast$3qIs, r587_include, r587_xn$createstroke$7Hrq, r587_xn$setanchor$9Jrj, r587_xn$dontexport$5sIl, r587_sw, _r587_t0, _r587_t1, _r587_t2, _r587_t3;
            _r587_t0 = this;
            r587_currentGlyph = _r587_t0;
            r587_xn$setwidth$9Jrj = _r587_t0['set-width']['bind'](_r587_t0);
            r587_xn$assignunicode$7Hrq = function _r587_t2(r588_code) {
                var r588_code, _r588_t0, _r588_t1;
                r587_currentGlyph['assign-unicode'](r588_code);
                return r4_unicodeGlyphs[r587_currentGlyph['unicode'][r587_currentGlyph['unicode']['length'] - 1]] = r587_currentGlyph;
            };
            r587_xn$startfrom$1aao = _r587_t0['start-from']['bind'](_r587_t0);
            r587_xn$lineto$5sIl = _r587_t0['line-to']['bind'](_r587_t0);
            r587_xn$curveto$1aao = _r587_t0['curve-to']['bind'](_r587_t0);
            r587_xn$cubicto$1aao = _r587_t0['cubic-to']['bind'](_r587_t0);
            r587_xn$putshapes$9Jrj = _r587_t0['put-shapes']['bind'](_r587_t0);
            r587_xn$reverselast$3qIs = _r587_t0['reverse-last']['bind'](_r587_t0);
            r587_include = _r587_t0['include']['bind'](_r587_t0);
            r587_xn$createstroke$7Hrq = _r587_t0['create-stroke']['bind'](_r587_t0);
            r587_xn$setanchor$9Jrj = _r587_t0['set-anchor']['bind'](_r587_t0);
            r587_xn$dontexport$5sIl = function _r587_t3() {
                var _r589_t0, _r589_t1;
                return r587_currentGlyph['dontExport'] = true;
            };
            _r587_t0['gizmo'] = r4_globalTransform;
            _r587_t0['set-width'](r4_WIDTH);
            r587_xn$setwidth$9Jrj(r4_WIDTH);
            r587_xn$assignunicode$7Hrq(',');
            r587_include(r4_glyphs['period']);
            r587_sw = r4_PERIODSIZE * 0.5;
            r587_include(r587_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r587_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t186() {
            var r591_currentGlyph, r591_xn$setwidth$9Jrj, r591_xn$assignunicode$7Hrq, r591_xn$startfrom$1aao, r591_xn$lineto$5sIl, r591_xn$curveto$1aao, r591_xn$cubicto$1aao, r591_xn$putshapes$9Jrj, r591_xn$reverselast$3qIs, r591_include, r591_xn$createstroke$7Hrq, r591_xn$setanchor$9Jrj, r591_xn$dontexport$5sIl, _r591_t0, _r591_t1, _r591_t2, _r591_t3;
            _r591_t0 = this;
            r591_currentGlyph = _r591_t0;
            r591_xn$setwidth$9Jrj = _r591_t0['set-width']['bind'](_r591_t0);
            r591_xn$assignunicode$7Hrq = function _r591_t2(r592_code) {
                var r592_code, _r592_t0, _r592_t1;
                r591_currentGlyph['assign-unicode'](r592_code);
                return r4_unicodeGlyphs[r591_currentGlyph['unicode'][r591_currentGlyph['unicode']['length'] - 1]] = r591_currentGlyph;
            };
            r591_xn$startfrom$1aao = _r591_t0['start-from']['bind'](_r591_t0);
            r591_xn$lineto$5sIl = _r591_t0['line-to']['bind'](_r591_t0);
            r591_xn$curveto$1aao = _r591_t0['curve-to']['bind'](_r591_t0);
            r591_xn$cubicto$1aao = _r591_t0['cubic-to']['bind'](_r591_t0);
            r591_xn$putshapes$9Jrj = _r591_t0['put-shapes']['bind'](_r591_t0);
            r591_xn$reverselast$3qIs = _r591_t0['reverse-last']['bind'](_r591_t0);
            r591_include = _r591_t0['include']['bind'](_r591_t0);
            r591_xn$createstroke$7Hrq = _r591_t0['create-stroke']['bind'](_r591_t0);
            r591_xn$setanchor$9Jrj = _r591_t0['set-anchor']['bind'](_r591_t0);
            r591_xn$dontexport$5sIl = function _r591_t3() {
                var _r593_t0, _r593_t1;
                return r591_currentGlyph['dontExport'] = true;
            };
            _r591_t0['gizmo'] = r4_globalTransform;
            _r591_t0['set-width'](r4_WIDTH);
            r591_xn$setwidth$9Jrj(r4_WIDTH);
            r591_xn$assignunicode$7Hrq(':');
            r591_include(r4_glyphs['period']);
            r591_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t187() {
            var r595_currentGlyph, r595_xn$setwidth$9Jrj, r595_xn$assignunicode$7Hrq, r595_xn$startfrom$1aao, r595_xn$lineto$5sIl, r595_xn$curveto$1aao, r595_xn$cubicto$1aao, r595_xn$putshapes$9Jrj, r595_xn$reverselast$3qIs, r595_include, r595_xn$createstroke$7Hrq, r595_xn$setanchor$9Jrj, r595_xn$dontexport$5sIl, _r595_t0, _r595_t1, _r595_t2, _r595_t3;
            _r595_t0 = this;
            r595_currentGlyph = _r595_t0;
            r595_xn$setwidth$9Jrj = _r595_t0['set-width']['bind'](_r595_t0);
            r595_xn$assignunicode$7Hrq = function _r595_t2(r596_code) {
                var r596_code, _r596_t0, _r596_t1;
                r595_currentGlyph['assign-unicode'](r596_code);
                return r4_unicodeGlyphs[r595_currentGlyph['unicode'][r595_currentGlyph['unicode']['length'] - 1]] = r595_currentGlyph;
            };
            r595_xn$startfrom$1aao = _r595_t0['start-from']['bind'](_r595_t0);
            r595_xn$lineto$5sIl = _r595_t0['line-to']['bind'](_r595_t0);
            r595_xn$curveto$1aao = _r595_t0['curve-to']['bind'](_r595_t0);
            r595_xn$cubicto$1aao = _r595_t0['cubic-to']['bind'](_r595_t0);
            r595_xn$putshapes$9Jrj = _r595_t0['put-shapes']['bind'](_r595_t0);
            r595_xn$reverselast$3qIs = _r595_t0['reverse-last']['bind'](_r595_t0);
            r595_include = _r595_t0['include']['bind'](_r595_t0);
            r595_xn$createstroke$7Hrq = _r595_t0['create-stroke']['bind'](_r595_t0);
            r595_xn$setanchor$9Jrj = _r595_t0['set-anchor']['bind'](_r595_t0);
            r595_xn$dontexport$5sIl = function _r595_t3() {
                var _r597_t0, _r597_t1;
                return r595_currentGlyph['dontExport'] = true;
            };
            _r595_t0['gizmo'] = r4_globalTransform;
            _r595_t0['set-width'](r4_WIDTH);
            r595_xn$setwidth$9Jrj(r4_WIDTH);
            r595_xn$assignunicode$7Hrq(';');
            r595_include(r4_glyphs['comma']);
            r595_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t188() {
            var r599_currentGlyph, r599_xn$setwidth$9Jrj, r599_xn$assignunicode$7Hrq, r599_xn$startfrom$1aao, r599_xn$lineto$5sIl, r599_xn$curveto$1aao, r599_xn$cubicto$1aao, r599_xn$putshapes$9Jrj, r599_xn$reverselast$3qIs, r599_include, r599_xn$createstroke$7Hrq, r599_xn$setanchor$9Jrj, r599_xn$dontexport$5sIl, _r599_t0, _r599_t1, _r599_t2, _r599_t3;
            _r599_t0 = this;
            r599_currentGlyph = _r599_t0;
            r599_xn$setwidth$9Jrj = _r599_t0['set-width']['bind'](_r599_t0);
            r599_xn$assignunicode$7Hrq = function _r599_t2(r600_code) {
                var r600_code, _r600_t0, _r600_t1;
                r599_currentGlyph['assign-unicode'](r600_code);
                return r4_unicodeGlyphs[r599_currentGlyph['unicode'][r599_currentGlyph['unicode']['length'] - 1]] = r599_currentGlyph;
            };
            r599_xn$startfrom$1aao = _r599_t0['start-from']['bind'](_r599_t0);
            r599_xn$lineto$5sIl = _r599_t0['line-to']['bind'](_r599_t0);
            r599_xn$curveto$1aao = _r599_t0['curve-to']['bind'](_r599_t0);
            r599_xn$cubicto$1aao = _r599_t0['cubic-to']['bind'](_r599_t0);
            r599_xn$putshapes$9Jrj = _r599_t0['put-shapes']['bind'](_r599_t0);
            r599_xn$reverselast$3qIs = _r599_t0['reverse-last']['bind'](_r599_t0);
            r599_include = _r599_t0['include']['bind'](_r599_t0);
            r599_xn$createstroke$7Hrq = _r599_t0['create-stroke']['bind'](_r599_t0);
            r599_xn$setanchor$9Jrj = _r599_t0['set-anchor']['bind'](_r599_t0);
            r599_xn$dontexport$5sIl = function _r599_t3() {
                var _r601_t0, _r601_t1;
                return r599_currentGlyph['dontExport'] = true;
            };
            _r599_t0['gizmo'] = r4_globalTransform;
            _r599_t0['set-width'](r4_WIDTH);
            r599_xn$setwidth$9Jrj(r4_WIDTH);
            r599_xn$assignunicode$7Hrq('?');
            r599_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r599_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r599_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t189() {
            var r603_currentGlyph, r603_xn$setwidth$9Jrj, r603_xn$assignunicode$7Hrq, r603_xn$startfrom$1aao, r603_xn$lineto$5sIl, r603_xn$curveto$1aao, r603_xn$cubicto$1aao, r603_xn$putshapes$9Jrj, r603_xn$reverselast$3qIs, r603_include, r603_xn$createstroke$7Hrq, r603_xn$setanchor$9Jrj, r603_xn$dontexport$5sIl, _r603_t0, _r603_t1, _r603_t2, _r603_t3;
            _r603_t0 = this;
            r603_currentGlyph = _r603_t0;
            r603_xn$setwidth$9Jrj = _r603_t0['set-width']['bind'](_r603_t0);
            r603_xn$assignunicode$7Hrq = function _r603_t2(r604_code) {
                var r604_code, _r604_t0, _r604_t1;
                r603_currentGlyph['assign-unicode'](r604_code);
                return r4_unicodeGlyphs[r603_currentGlyph['unicode'][r603_currentGlyph['unicode']['length'] - 1]] = r603_currentGlyph;
            };
            r603_xn$startfrom$1aao = _r603_t0['start-from']['bind'](_r603_t0);
            r603_xn$lineto$5sIl = _r603_t0['line-to']['bind'](_r603_t0);
            r603_xn$curveto$1aao = _r603_t0['curve-to']['bind'](_r603_t0);
            r603_xn$cubicto$1aao = _r603_t0['cubic-to']['bind'](_r603_t0);
            r603_xn$putshapes$9Jrj = _r603_t0['put-shapes']['bind'](_r603_t0);
            r603_xn$reverselast$3qIs = _r603_t0['reverse-last']['bind'](_r603_t0);
            r603_include = _r603_t0['include']['bind'](_r603_t0);
            r603_xn$createstroke$7Hrq = _r603_t0['create-stroke']['bind'](_r603_t0);
            r603_xn$setanchor$9Jrj = _r603_t0['set-anchor']['bind'](_r603_t0);
            r603_xn$dontexport$5sIl = function _r603_t3() {
                var _r605_t0, _r605_t1;
                return r603_currentGlyph['dontExport'] = true;
            };
            _r603_t0['gizmo'] = r4_globalTransform;
            _r603_t0['set-width'](r4_WIDTH);
            r603_xn$setwidth$9Jrj(r4_WIDTH);
            r603_xn$assignunicode$7Hrq('!');
            r603_include(r603_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r603_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t190() {
            var r607_currentGlyph, r607_xn$setwidth$9Jrj, r607_xn$assignunicode$7Hrq, r607_xn$startfrom$1aao, r607_xn$lineto$5sIl, r607_xn$curveto$1aao, r607_xn$cubicto$1aao, r607_xn$putshapes$9Jrj, r607_xn$reverselast$3qIs, r607_include, r607_xn$createstroke$7Hrq, r607_xn$setanchor$9Jrj, r607_xn$dontexport$5sIl, _r607_t0, _r607_t1, _r607_t2, _r607_t3;
            _r607_t0 = this;
            r607_currentGlyph = _r607_t0;
            r607_xn$setwidth$9Jrj = _r607_t0['set-width']['bind'](_r607_t0);
            r607_xn$assignunicode$7Hrq = function _r607_t2(r608_code) {
                var r608_code, _r608_t0, _r608_t1;
                r607_currentGlyph['assign-unicode'](r608_code);
                return r4_unicodeGlyphs[r607_currentGlyph['unicode'][r607_currentGlyph['unicode']['length'] - 1]] = r607_currentGlyph;
            };
            r607_xn$startfrom$1aao = _r607_t0['start-from']['bind'](_r607_t0);
            r607_xn$lineto$5sIl = _r607_t0['line-to']['bind'](_r607_t0);
            r607_xn$curveto$1aao = _r607_t0['curve-to']['bind'](_r607_t0);
            r607_xn$cubicto$1aao = _r607_t0['cubic-to']['bind'](_r607_t0);
            r607_xn$putshapes$9Jrj = _r607_t0['put-shapes']['bind'](_r607_t0);
            r607_xn$reverselast$3qIs = _r607_t0['reverse-last']['bind'](_r607_t0);
            r607_include = _r607_t0['include']['bind'](_r607_t0);
            r607_xn$createstroke$7Hrq = _r607_t0['create-stroke']['bind'](_r607_t0);
            r607_xn$setanchor$9Jrj = _r607_t0['set-anchor']['bind'](_r607_t0);
            r607_xn$dontexport$5sIl = function _r607_t3() {
                var _r609_t0, _r609_t1;
                return r607_currentGlyph['dontExport'] = true;
            };
            _r607_t0['gizmo'] = r4_globalTransform;
            _r607_t0['set-width'](r4_WIDTH);
            r607_xn$setwidth$9Jrj(r4_WIDTH);
            r607_xn$assignunicode$7Hrq('_');
            r607_include(r607_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t191() {
            var r611_currentGlyph, r611_xn$setwidth$9Jrj, r611_xn$assignunicode$7Hrq, r611_xn$startfrom$1aao, r611_xn$lineto$5sIl, r611_xn$curveto$1aao, r611_xn$cubicto$1aao, r611_xn$putshapes$9Jrj, r611_xn$reverselast$3qIs, r611_include, r611_xn$createstroke$7Hrq, r611_xn$setanchor$9Jrj, r611_xn$dontexport$5sIl, _r611_t0, _r611_t1, _r611_t2, _r611_t3;
            _r611_t0 = this;
            r611_currentGlyph = _r611_t0;
            r611_xn$setwidth$9Jrj = _r611_t0['set-width']['bind'](_r611_t0);
            r611_xn$assignunicode$7Hrq = function _r611_t2(r612_code) {
                var r612_code, _r612_t0, _r612_t1;
                r611_currentGlyph['assign-unicode'](r612_code);
                return r4_unicodeGlyphs[r611_currentGlyph['unicode'][r611_currentGlyph['unicode']['length'] - 1]] = r611_currentGlyph;
            };
            r611_xn$startfrom$1aao = _r611_t0['start-from']['bind'](_r611_t0);
            r611_xn$lineto$5sIl = _r611_t0['line-to']['bind'](_r611_t0);
            r611_xn$curveto$1aao = _r611_t0['curve-to']['bind'](_r611_t0);
            r611_xn$cubicto$1aao = _r611_t0['cubic-to']['bind'](_r611_t0);
            r611_xn$putshapes$9Jrj = _r611_t0['put-shapes']['bind'](_r611_t0);
            r611_xn$reverselast$3qIs = _r611_t0['reverse-last']['bind'](_r611_t0);
            r611_include = _r611_t0['include']['bind'](_r611_t0);
            r611_xn$createstroke$7Hrq = _r611_t0['create-stroke']['bind'](_r611_t0);
            r611_xn$setanchor$9Jrj = _r611_t0['set-anchor']['bind'](_r611_t0);
            r611_xn$dontexport$5sIl = function _r611_t3() {
                var _r613_t0, _r613_t1;
                return r611_currentGlyph['dontExport'] = true;
            };
            _r611_t0['gizmo'] = r4_globalTransform;
            _r611_t0['set-width'](r4_WIDTH);
            r611_xn$setwidth$9Jrj(r4_WIDTH);
            r611_xn$assignunicode$7Hrq('-');
            r611_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t192() {
            var r615_currentGlyph, r615_xn$setwidth$9Jrj, r615_xn$assignunicode$7Hrq, r615_xn$startfrom$1aao, r615_xn$lineto$5sIl, r615_xn$curveto$1aao, r615_xn$cubicto$1aao, r615_xn$putshapes$9Jrj, r615_xn$reverselast$3qIs, r615_include, r615_xn$createstroke$7Hrq, r615_xn$setanchor$9Jrj, r615_xn$dontexport$5sIl, _r615_t0, _r615_t1, _r615_t2, _r615_t3;
            _r615_t0 = this;
            r615_currentGlyph = _r615_t0;
            r615_xn$setwidth$9Jrj = _r615_t0['set-width']['bind'](_r615_t0);
            r615_xn$assignunicode$7Hrq = function _r615_t2(r616_code) {
                var r616_code, _r616_t0, _r616_t1;
                r615_currentGlyph['assign-unicode'](r616_code);
                return r4_unicodeGlyphs[r615_currentGlyph['unicode'][r615_currentGlyph['unicode']['length'] - 1]] = r615_currentGlyph;
            };
            r615_xn$startfrom$1aao = _r615_t0['start-from']['bind'](_r615_t0);
            r615_xn$lineto$5sIl = _r615_t0['line-to']['bind'](_r615_t0);
            r615_xn$curveto$1aao = _r615_t0['curve-to']['bind'](_r615_t0);
            r615_xn$cubicto$1aao = _r615_t0['cubic-to']['bind'](_r615_t0);
            r615_xn$putshapes$9Jrj = _r615_t0['put-shapes']['bind'](_r615_t0);
            r615_xn$reverselast$3qIs = _r615_t0['reverse-last']['bind'](_r615_t0);
            r615_include = _r615_t0['include']['bind'](_r615_t0);
            r615_xn$createstroke$7Hrq = _r615_t0['create-stroke']['bind'](_r615_t0);
            r615_xn$setanchor$9Jrj = _r615_t0['set-anchor']['bind'](_r615_t0);
            r615_xn$dontexport$5sIl = function _r615_t3() {
                var _r617_t0, _r617_t1;
                return r615_currentGlyph['dontExport'] = true;
            };
            _r615_t0['gizmo'] = r4_globalTransform;
            _r615_t0['set-width'](r4_WIDTH);
            r615_xn$setwidth$9Jrj(r4_WIDTH);
            r615_xn$assignunicode$7Hrq('+');
            r615_include(r4_glyphs['hyphen']);
            r615_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t193() {
            var r619_currentGlyph, r619_xn$setwidth$9Jrj, r619_xn$assignunicode$7Hrq, r619_xn$startfrom$1aao, r619_xn$lineto$5sIl, r619_xn$curveto$1aao, r619_xn$cubicto$1aao, r619_xn$putshapes$9Jrj, r619_xn$reverselast$3qIs, r619_include, r619_xn$createstroke$7Hrq, r619_xn$setanchor$9Jrj, r619_xn$dontexport$5sIl, _r619_t0, _r619_t1, _r619_t2, _r619_t3;
            _r619_t0 = this;
            r619_currentGlyph = _r619_t0;
            r619_xn$setwidth$9Jrj = _r619_t0['set-width']['bind'](_r619_t0);
            r619_xn$assignunicode$7Hrq = function _r619_t2(r620_code) {
                var r620_code, _r620_t0, _r620_t1;
                r619_currentGlyph['assign-unicode'](r620_code);
                return r4_unicodeGlyphs[r619_currentGlyph['unicode'][r619_currentGlyph['unicode']['length'] - 1]] = r619_currentGlyph;
            };
            r619_xn$startfrom$1aao = _r619_t0['start-from']['bind'](_r619_t0);
            r619_xn$lineto$5sIl = _r619_t0['line-to']['bind'](_r619_t0);
            r619_xn$curveto$1aao = _r619_t0['curve-to']['bind'](_r619_t0);
            r619_xn$cubicto$1aao = _r619_t0['cubic-to']['bind'](_r619_t0);
            r619_xn$putshapes$9Jrj = _r619_t0['put-shapes']['bind'](_r619_t0);
            r619_xn$reverselast$3qIs = _r619_t0['reverse-last']['bind'](_r619_t0);
            r619_include = _r619_t0['include']['bind'](_r619_t0);
            r619_xn$createstroke$7Hrq = _r619_t0['create-stroke']['bind'](_r619_t0);
            r619_xn$setanchor$9Jrj = _r619_t0['set-anchor']['bind'](_r619_t0);
            r619_xn$dontexport$5sIl = function _r619_t3() {
                var _r621_t0, _r621_t1;
                return r619_currentGlyph['dontExport'] = true;
            };
            _r619_t0['gizmo'] = r4_globalTransform;
            _r619_t0['set-width'](r4_WIDTH);
            r619_xn$setwidth$9Jrj(r4_WIDTH);
            r619_xn$assignunicode$7Hrq('=');
            r619_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r619_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t194() {
            var r623_currentGlyph, r623_xn$setwidth$9Jrj, r623_xn$assignunicode$7Hrq, r623_xn$startfrom$1aao, r623_xn$lineto$5sIl, r623_xn$curveto$1aao, r623_xn$cubicto$1aao, r623_xn$putshapes$9Jrj, r623_xn$reverselast$3qIs, r623_include, r623_xn$createstroke$7Hrq, r623_xn$setanchor$9Jrj, r623_xn$dontexport$5sIl, _r623_t0, _r623_t1, _r623_t2, _r623_t3;
            _r623_t0 = this;
            r623_currentGlyph = _r623_t0;
            r623_xn$setwidth$9Jrj = _r623_t0['set-width']['bind'](_r623_t0);
            r623_xn$assignunicode$7Hrq = function _r623_t2(r624_code) {
                var r624_code, _r624_t0, _r624_t1;
                r623_currentGlyph['assign-unicode'](r624_code);
                return r4_unicodeGlyphs[r623_currentGlyph['unicode'][r623_currentGlyph['unicode']['length'] - 1]] = r623_currentGlyph;
            };
            r623_xn$startfrom$1aao = _r623_t0['start-from']['bind'](_r623_t0);
            r623_xn$lineto$5sIl = _r623_t0['line-to']['bind'](_r623_t0);
            r623_xn$curveto$1aao = _r623_t0['curve-to']['bind'](_r623_t0);
            r623_xn$cubicto$1aao = _r623_t0['cubic-to']['bind'](_r623_t0);
            r623_xn$putshapes$9Jrj = _r623_t0['put-shapes']['bind'](_r623_t0);
            r623_xn$reverselast$3qIs = _r623_t0['reverse-last']['bind'](_r623_t0);
            r623_include = _r623_t0['include']['bind'](_r623_t0);
            r623_xn$createstroke$7Hrq = _r623_t0['create-stroke']['bind'](_r623_t0);
            r623_xn$setanchor$9Jrj = _r623_t0['set-anchor']['bind'](_r623_t0);
            r623_xn$dontexport$5sIl = function _r623_t3() {
                var _r625_t0, _r625_t1;
                return r623_currentGlyph['dontExport'] = true;
            };
            _r623_t0['gizmo'] = r4_globalTransform;
            _r623_t0['set-width'](r4_WIDTH);
            r623_xn$setwidth$9Jrj(r4_WIDTH);
            r623_xn$assignunicode$7Hrq('|');
            r623_include(r623_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t195() {
            var r627_currentGlyph, r627_xn$setwidth$9Jrj, r627_xn$assignunicode$7Hrq, r627_xn$startfrom$1aao, r627_xn$lineto$5sIl, r627_xn$curveto$1aao, r627_xn$cubicto$1aao, r627_xn$putshapes$9Jrj, r627_xn$reverselast$3qIs, r627_include, r627_xn$createstroke$7Hrq, r627_xn$setanchor$9Jrj, r627_xn$dontexport$5sIl, r627_cor, _r627_t0, _r627_t1, _r627_t2, _r627_t3;
            _r627_t0 = this;
            r627_currentGlyph = _r627_t0;
            r627_xn$setwidth$9Jrj = _r627_t0['set-width']['bind'](_r627_t0);
            r627_xn$assignunicode$7Hrq = function _r627_t2(r628_code) {
                var r628_code, _r628_t0, _r628_t1;
                r627_currentGlyph['assign-unicode'](r628_code);
                return r4_unicodeGlyphs[r627_currentGlyph['unicode'][r627_currentGlyph['unicode']['length'] - 1]] = r627_currentGlyph;
            };
            r627_xn$startfrom$1aao = _r627_t0['start-from']['bind'](_r627_t0);
            r627_xn$lineto$5sIl = _r627_t0['line-to']['bind'](_r627_t0);
            r627_xn$curveto$1aao = _r627_t0['curve-to']['bind'](_r627_t0);
            r627_xn$cubicto$1aao = _r627_t0['cubic-to']['bind'](_r627_t0);
            r627_xn$putshapes$9Jrj = _r627_t0['put-shapes']['bind'](_r627_t0);
            r627_xn$reverselast$3qIs = _r627_t0['reverse-last']['bind'](_r627_t0);
            r627_include = _r627_t0['include']['bind'](_r627_t0);
            r627_xn$createstroke$7Hrq = _r627_t0['create-stroke']['bind'](_r627_t0);
            r627_xn$setanchor$9Jrj = _r627_t0['set-anchor']['bind'](_r627_t0);
            r627_xn$dontexport$5sIl = function _r627_t3() {
                var _r629_t0, _r629_t1;
                return r627_currentGlyph['dontExport'] = true;
            };
            _r627_t0['gizmo'] = r4_globalTransform;
            _r627_t0['set-width'](r4_WIDTH);
            r627_xn$setwidth$9Jrj(r4_WIDTH);
            r627_xn$assignunicode$7Hrq('/');
            r627_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r627_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r627_xn$lineto$5sIl(r4_SB + r4_STROKE * r627_cor, r4_parenBot);
            r627_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r627_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r627_cor, r4_parenTop);
            r627_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t196() {
            var r631_currentGlyph, r631_xn$setwidth$9Jrj, r631_xn$assignunicode$7Hrq, r631_xn$startfrom$1aao, r631_xn$lineto$5sIl, r631_xn$curveto$1aao, r631_xn$cubicto$1aao, r631_xn$putshapes$9Jrj, r631_xn$reverselast$3qIs, r631_include, r631_xn$createstroke$7Hrq, r631_xn$setanchor$9Jrj, r631_xn$dontexport$5sIl, r631_cor, _r631_t0, _r631_t1, _r631_t2, _r631_t3;
            _r631_t0 = this;
            r631_currentGlyph = _r631_t0;
            r631_xn$setwidth$9Jrj = _r631_t0['set-width']['bind'](_r631_t0);
            r631_xn$assignunicode$7Hrq = function _r631_t2(r632_code) {
                var r632_code, _r632_t0, _r632_t1;
                r631_currentGlyph['assign-unicode'](r632_code);
                return r4_unicodeGlyphs[r631_currentGlyph['unicode'][r631_currentGlyph['unicode']['length'] - 1]] = r631_currentGlyph;
            };
            r631_xn$startfrom$1aao = _r631_t0['start-from']['bind'](_r631_t0);
            r631_xn$lineto$5sIl = _r631_t0['line-to']['bind'](_r631_t0);
            r631_xn$curveto$1aao = _r631_t0['curve-to']['bind'](_r631_t0);
            r631_xn$cubicto$1aao = _r631_t0['cubic-to']['bind'](_r631_t0);
            r631_xn$putshapes$9Jrj = _r631_t0['put-shapes']['bind'](_r631_t0);
            r631_xn$reverselast$3qIs = _r631_t0['reverse-last']['bind'](_r631_t0);
            r631_include = _r631_t0['include']['bind'](_r631_t0);
            r631_xn$createstroke$7Hrq = _r631_t0['create-stroke']['bind'](_r631_t0);
            r631_xn$setanchor$9Jrj = _r631_t0['set-anchor']['bind'](_r631_t0);
            r631_xn$dontexport$5sIl = function _r631_t3() {
                var _r633_t0, _r633_t1;
                return r631_currentGlyph['dontExport'] = true;
            };
            _r631_t0['gizmo'] = r4_globalTransform;
            _r631_t0['set-width'](r4_WIDTH);
            r631_xn$setwidth$9Jrj(r4_WIDTH);
            r631_xn$assignunicode$7Hrq('\\');
            r631_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r631_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r631_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r631_cor, r4_parenBot);
            r631_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r631_xn$lineto$5sIl(r4_SB + r4_STROKE * r631_cor, r4_parenTop);
            r631_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t197() {
            var r635_currentGlyph, r635_xn$setwidth$9Jrj, r635_xn$assignunicode$7Hrq, r635_xn$startfrom$1aao, r635_xn$lineto$5sIl, r635_xn$curveto$1aao, r635_xn$cubicto$1aao, r635_xn$putshapes$9Jrj, r635_xn$reverselast$3qIs, r635_include, r635_xn$createstroke$7Hrq, r635_xn$setanchor$9Jrj, r635_xn$dontexport$5sIl, r635_fine, _r635_t0, _r635_t1, _r635_t2, _r635_t3;
            _r635_t0 = this;
            r635_currentGlyph = _r635_t0;
            r635_xn$setwidth$9Jrj = _r635_t0['set-width']['bind'](_r635_t0);
            r635_xn$assignunicode$7Hrq = function _r635_t2(r636_code) {
                var r636_code, _r636_t0, _r636_t1;
                r635_currentGlyph['assign-unicode'](r636_code);
                return r4_unicodeGlyphs[r635_currentGlyph['unicode'][r635_currentGlyph['unicode']['length'] - 1]] = r635_currentGlyph;
            };
            r635_xn$startfrom$1aao = _r635_t0['start-from']['bind'](_r635_t0);
            r635_xn$lineto$5sIl = _r635_t0['line-to']['bind'](_r635_t0);
            r635_xn$curveto$1aao = _r635_t0['curve-to']['bind'](_r635_t0);
            r635_xn$cubicto$1aao = _r635_t0['cubic-to']['bind'](_r635_t0);
            r635_xn$putshapes$9Jrj = _r635_t0['put-shapes']['bind'](_r635_t0);
            r635_xn$reverselast$3qIs = _r635_t0['reverse-last']['bind'](_r635_t0);
            r635_include = _r635_t0['include']['bind'](_r635_t0);
            r635_xn$createstroke$7Hrq = _r635_t0['create-stroke']['bind'](_r635_t0);
            r635_xn$setanchor$9Jrj = _r635_t0['set-anchor']['bind'](_r635_t0);
            r635_xn$dontexport$5sIl = function _r635_t3() {
                var _r637_t0, _r637_t1;
                return r635_currentGlyph['dontExport'] = true;
            };
            _r635_t0['gizmo'] = r4_globalTransform;
            _r635_t0['set-width'](r4_WIDTH);
            r635_xn$setwidth$9Jrj(r4_WIDTH);
            r635_xn$assignunicode$7Hrq('#');
            r635_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r635_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r635_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r635_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r635_fine, r4_parenTop - r635_fine, r635_fine));
            r635_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r635_fine, r4_parenTop - r635_fine, r635_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t198() {
            var r639_currentGlyph, r639_xn$setwidth$9Jrj, r639_xn$assignunicode$7Hrq, r639_xn$startfrom$1aao, r639_xn$lineto$5sIl, r639_xn$curveto$1aao, r639_xn$cubicto$1aao, r639_xn$putshapes$9Jrj, r639_xn$reverselast$3qIs, r639_include, r639_xn$createstroke$7Hrq, r639_xn$setanchor$9Jrj, r639_xn$dontexport$5sIl, r639_top, r639_bot, _r639_t0, _r639_t1, _r639_t2, _r639_t3;
            _r639_t0 = this;
            r639_currentGlyph = _r639_t0;
            r639_xn$setwidth$9Jrj = _r639_t0['set-width']['bind'](_r639_t0);
            r639_xn$assignunicode$7Hrq = function _r639_t2(r640_code) {
                var r640_code, _r640_t0, _r640_t1;
                r639_currentGlyph['assign-unicode'](r640_code);
                return r4_unicodeGlyphs[r639_currentGlyph['unicode'][r639_currentGlyph['unicode']['length'] - 1]] = r639_currentGlyph;
            };
            r639_xn$startfrom$1aao = _r639_t0['start-from']['bind'](_r639_t0);
            r639_xn$lineto$5sIl = _r639_t0['line-to']['bind'](_r639_t0);
            r639_xn$curveto$1aao = _r639_t0['curve-to']['bind'](_r639_t0);
            r639_xn$cubicto$1aao = _r639_t0['cubic-to']['bind'](_r639_t0);
            r639_xn$putshapes$9Jrj = _r639_t0['put-shapes']['bind'](_r639_t0);
            r639_xn$reverselast$3qIs = _r639_t0['reverse-last']['bind'](_r639_t0);
            r639_include = _r639_t0['include']['bind'](_r639_t0);
            r639_xn$createstroke$7Hrq = _r639_t0['create-stroke']['bind'](_r639_t0);
            r639_xn$setanchor$9Jrj = _r639_t0['set-anchor']['bind'](_r639_t0);
            r639_xn$dontexport$5sIl = function _r639_t3() {
                var _r641_t0, _r641_t1;
                return r639_currentGlyph['dontExport'] = true;
            };
            _r639_t0['gizmo'] = r4_globalTransform;
            _r639_t0['set-width'](r4_WIDTH);
            r639_xn$setwidth$9Jrj(r4_WIDTH);
            r639_xn$assignunicode$7Hrq('<');
            r639_top = r0_mix(0, r4_CAP, 0.75);
            r639_bot = r0_mix(0, r4_CAP, 0.1);
            r639_include(r639_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r639_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r639_top, r639_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r639_include(r639_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r639_top, r639_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r639_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t199() {
            var r643_currentGlyph, r643_xn$setwidth$9Jrj, r643_xn$assignunicode$7Hrq, r643_xn$startfrom$1aao, r643_xn$lineto$5sIl, r643_xn$curveto$1aao, r643_xn$cubicto$1aao, r643_xn$putshapes$9Jrj, r643_xn$reverselast$3qIs, r643_include, r643_xn$createstroke$7Hrq, r643_xn$setanchor$9Jrj, r643_xn$dontexport$5sIl, r643_top, r643_bot, _r643_t0, _r643_t1, _r643_t2, _r643_t3;
            _r643_t0 = this;
            r643_currentGlyph = _r643_t0;
            r643_xn$setwidth$9Jrj = _r643_t0['set-width']['bind'](_r643_t0);
            r643_xn$assignunicode$7Hrq = function _r643_t2(r644_code) {
                var r644_code, _r644_t0, _r644_t1;
                r643_currentGlyph['assign-unicode'](r644_code);
                return r4_unicodeGlyphs[r643_currentGlyph['unicode'][r643_currentGlyph['unicode']['length'] - 1]] = r643_currentGlyph;
            };
            r643_xn$startfrom$1aao = _r643_t0['start-from']['bind'](_r643_t0);
            r643_xn$lineto$5sIl = _r643_t0['line-to']['bind'](_r643_t0);
            r643_xn$curveto$1aao = _r643_t0['curve-to']['bind'](_r643_t0);
            r643_xn$cubicto$1aao = _r643_t0['cubic-to']['bind'](_r643_t0);
            r643_xn$putshapes$9Jrj = _r643_t0['put-shapes']['bind'](_r643_t0);
            r643_xn$reverselast$3qIs = _r643_t0['reverse-last']['bind'](_r643_t0);
            r643_include = _r643_t0['include']['bind'](_r643_t0);
            r643_xn$createstroke$7Hrq = _r643_t0['create-stroke']['bind'](_r643_t0);
            r643_xn$setanchor$9Jrj = _r643_t0['set-anchor']['bind'](_r643_t0);
            r643_xn$dontexport$5sIl = function _r643_t3() {
                var _r645_t0, _r645_t1;
                return r643_currentGlyph['dontExport'] = true;
            };
            _r643_t0['gizmo'] = r4_globalTransform;
            _r643_t0['set-width'](r4_WIDTH);
            r643_xn$setwidth$9Jrj(r4_WIDTH);
            r643_xn$assignunicode$7Hrq('>');
            r643_top = r0_mix(0, r4_CAP, 0.75);
            r643_bot = r0_mix(0, r4_CAP, 0.1);
            r643_include(r643_xn$createstroke$7Hrq()['start-from'](r4_SB, r643_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r643_top, r643_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r643_include(r643_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r643_top, r643_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r643_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t200() {
            var r647_currentGlyph, r647_xn$setwidth$9Jrj, r647_xn$assignunicode$7Hrq, r647_xn$startfrom$1aao, r647_xn$lineto$5sIl, r647_xn$curveto$1aao, r647_xn$cubicto$1aao, r647_xn$putshapes$9Jrj, r647_xn$reverselast$3qIs, r647_include, r647_xn$createstroke$7Hrq, r647_xn$setanchor$9Jrj, r647_xn$dontexport$5sIl, _r647_t0, _r647_t1, _r647_t2, _r647_t3;
            _r647_t0 = this;
            r647_currentGlyph = _r647_t0;
            r647_xn$setwidth$9Jrj = _r647_t0['set-width']['bind'](_r647_t0);
            r647_xn$assignunicode$7Hrq = function _r647_t2(r648_code) {
                var r648_code, _r648_t0, _r648_t1;
                r647_currentGlyph['assign-unicode'](r648_code);
                return r4_unicodeGlyphs[r647_currentGlyph['unicode'][r647_currentGlyph['unicode']['length'] - 1]] = r647_currentGlyph;
            };
            r647_xn$startfrom$1aao = _r647_t0['start-from']['bind'](_r647_t0);
            r647_xn$lineto$5sIl = _r647_t0['line-to']['bind'](_r647_t0);
            r647_xn$curveto$1aao = _r647_t0['curve-to']['bind'](_r647_t0);
            r647_xn$cubicto$1aao = _r647_t0['cubic-to']['bind'](_r647_t0);
            r647_xn$putshapes$9Jrj = _r647_t0['put-shapes']['bind'](_r647_t0);
            r647_xn$reverselast$3qIs = _r647_t0['reverse-last']['bind'](_r647_t0);
            r647_include = _r647_t0['include']['bind'](_r647_t0);
            r647_xn$createstroke$7Hrq = _r647_t0['create-stroke']['bind'](_r647_t0);
            r647_xn$setanchor$9Jrj = _r647_t0['set-anchor']['bind'](_r647_t0);
            r647_xn$dontexport$5sIl = function _r647_t3() {
                var _r649_t0, _r649_t1;
                return r647_currentGlyph['dontExport'] = true;
            };
            _r647_t0['gizmo'] = r4_globalTransform;
            _r647_t0['set-width'](r4_WIDTH);
            r647_xn$setwidth$9Jrj(r4_WIDTH);
            r647_xn$assignunicode$7Hrq(39);
            r647_include(r647_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t201() {
            var r651_currentGlyph, r651_xn$setwidth$9Jrj, r651_xn$assignunicode$7Hrq, r651_xn$startfrom$1aao, r651_xn$lineto$5sIl, r651_xn$curveto$1aao, r651_xn$cubicto$1aao, r651_xn$putshapes$9Jrj, r651_xn$reverselast$3qIs, r651_include, r651_xn$createstroke$7Hrq, r651_xn$setanchor$9Jrj, r651_xn$dontexport$5sIl, _r651_t0, _r651_t1, _r651_t2, _r651_t3;
            _r651_t0 = this;
            r651_currentGlyph = _r651_t0;
            r651_xn$setwidth$9Jrj = _r651_t0['set-width']['bind'](_r651_t0);
            r651_xn$assignunicode$7Hrq = function _r651_t2(r652_code) {
                var r652_code, _r652_t0, _r652_t1;
                r651_currentGlyph['assign-unicode'](r652_code);
                return r4_unicodeGlyphs[r651_currentGlyph['unicode'][r651_currentGlyph['unicode']['length'] - 1]] = r651_currentGlyph;
            };
            r651_xn$startfrom$1aao = _r651_t0['start-from']['bind'](_r651_t0);
            r651_xn$lineto$5sIl = _r651_t0['line-to']['bind'](_r651_t0);
            r651_xn$curveto$1aao = _r651_t0['curve-to']['bind'](_r651_t0);
            r651_xn$cubicto$1aao = _r651_t0['cubic-to']['bind'](_r651_t0);
            r651_xn$putshapes$9Jrj = _r651_t0['put-shapes']['bind'](_r651_t0);
            r651_xn$reverselast$3qIs = _r651_t0['reverse-last']['bind'](_r651_t0);
            r651_include = _r651_t0['include']['bind'](_r651_t0);
            r651_xn$createstroke$7Hrq = _r651_t0['create-stroke']['bind'](_r651_t0);
            r651_xn$setanchor$9Jrj = _r651_t0['set-anchor']['bind'](_r651_t0);
            r651_xn$dontexport$5sIl = function _r651_t3() {
                var _r653_t0, _r653_t1;
                return r651_currentGlyph['dontExport'] = true;
            };
            _r651_t0['gizmo'] = r4_globalTransform;
            _r651_t0['set-width'](r4_WIDTH);
            r651_xn$setwidth$9Jrj(r4_WIDTH);
            r651_xn$assignunicode$7Hrq(34);
            r651_include(r651_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r651_include(r651_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t202() {
            var r655_currentGlyph, r655_xn$setwidth$9Jrj, r655_xn$assignunicode$7Hrq, r655_xn$startfrom$1aao, r655_xn$lineto$5sIl, r655_xn$curveto$1aao, r655_xn$cubicto$1aao, r655_xn$putshapes$9Jrj, r655_xn$reverselast$3qIs, r655_include, r655_xn$createstroke$7Hrq, r655_xn$setanchor$9Jrj, r655_xn$dontexport$5sIl, r655_radius, r655_centery, r655_fine, r655_final, r655_j, _r655_t0, _r655_t1, _r655_t2, _r655_t3, _r655_t4, _r655_t5;
            _r655_t2 = this;
            r655_currentGlyph = _r655_t2;
            r655_xn$setwidth$9Jrj = _r655_t2['set-width']['bind'](_r655_t2);
            r655_xn$assignunicode$7Hrq = function _r655_t4(r656_code) {
                var r656_code, _r656_t0, _r656_t1;
                r655_currentGlyph['assign-unicode'](r656_code);
                return r4_unicodeGlyphs[r655_currentGlyph['unicode'][r655_currentGlyph['unicode']['length'] - 1]] = r655_currentGlyph;
            };
            r655_xn$startfrom$1aao = _r655_t2['start-from']['bind'](_r655_t2);
            r655_xn$lineto$5sIl = _r655_t2['line-to']['bind'](_r655_t2);
            r655_xn$curveto$1aao = _r655_t2['curve-to']['bind'](_r655_t2);
            r655_xn$cubicto$1aao = _r655_t2['cubic-to']['bind'](_r655_t2);
            r655_xn$putshapes$9Jrj = _r655_t2['put-shapes']['bind'](_r655_t2);
            r655_xn$reverselast$3qIs = _r655_t2['reverse-last']['bind'](_r655_t2);
            r655_include = _r655_t2['include']['bind'](_r655_t2);
            r655_xn$createstroke$7Hrq = _r655_t2['create-stroke']['bind'](_r655_t2);
            r655_xn$setanchor$9Jrj = _r655_t2['set-anchor']['bind'](_r655_t2);
            r655_xn$dontexport$5sIl = function _r655_t5() {
                var _r657_t0, _r657_t1;
                return r655_currentGlyph['dontExport'] = true;
            };
            _r655_t2['gizmo'] = r4_globalTransform;
            _r655_t2['set-width'](r4_WIDTH);
            r655_xn$setwidth$9Jrj(r4_WIDTH);
            r655_xn$assignunicode$7Hrq('*');
            r655_radius = r4_LONGJUT * 1.2;
            r655_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r655_fine = r4_STROKE * 0.4;
            r655_final = 0.5 * Math['min'](r4_STROKE, r655_radius * Math['PI'] * 2 / 10);
            _r655_t0 = 0;
            _r655_t1 = 5;
            r655_j = _r655_t0;
            for (; r655_j < _r655_t1; r655_j = r655_j + 1) {
                r655_include(r655_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r655_centery)['set-width'](r655_fine, r655_fine)['line-to'](r4_MIDDLE + r655_radius * Math['sin'](r655_j / 5 * Math['PI'] * 2), r655_centery + r655_radius * Math['cos'](r655_j / 5 * Math['PI'] * 2))['set-width'](r655_final, r655_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t203() {
            var r660_currentGlyph, r660_xn$setwidth$9Jrj, r660_xn$assignunicode$7Hrq, r660_xn$startfrom$1aao, r660_xn$lineto$5sIl, r660_xn$curveto$1aao, r660_xn$cubicto$1aao, r660_xn$putshapes$9Jrj, r660_xn$reverselast$3qIs, r660_include, r660_xn$createstroke$7Hrq, r660_xn$setanchor$9Jrj, r660_xn$dontexport$5sIl, r660_percentDotSize, r660_cor, _r660_t0, _r660_t1, _r660_t2, _r660_t3;
            _r660_t0 = this;
            r660_currentGlyph = _r660_t0;
            r660_xn$setwidth$9Jrj = _r660_t0['set-width']['bind'](_r660_t0);
            r660_xn$assignunicode$7Hrq = function _r660_t2(r661_code) {
                var r661_code, _r661_t0, _r661_t1;
                r660_currentGlyph['assign-unicode'](r661_code);
                return r4_unicodeGlyphs[r660_currentGlyph['unicode'][r660_currentGlyph['unicode']['length'] - 1]] = r660_currentGlyph;
            };
            r660_xn$startfrom$1aao = _r660_t0['start-from']['bind'](_r660_t0);
            r660_xn$lineto$5sIl = _r660_t0['line-to']['bind'](_r660_t0);
            r660_xn$curveto$1aao = _r660_t0['curve-to']['bind'](_r660_t0);
            r660_xn$cubicto$1aao = _r660_t0['cubic-to']['bind'](_r660_t0);
            r660_xn$putshapes$9Jrj = _r660_t0['put-shapes']['bind'](_r660_t0);
            r660_xn$reverselast$3qIs = _r660_t0['reverse-last']['bind'](_r660_t0);
            r660_include = _r660_t0['include']['bind'](_r660_t0);
            r660_xn$createstroke$7Hrq = _r660_t0['create-stroke']['bind'](_r660_t0);
            r660_xn$setanchor$9Jrj = _r660_t0['set-anchor']['bind'](_r660_t0);
            r660_xn$dontexport$5sIl = function _r660_t3() {
                var _r662_t0, _r662_t1;
                return r660_currentGlyph['dontExport'] = true;
            };
            _r660_t0['gizmo'] = r4_globalTransform;
            _r660_t0['set-width'](r4_WIDTH);
            r660_xn$setwidth$9Jrj(r4_WIDTH);
            r660_xn$assignunicode$7Hrq('%');
            r660_percentDotSize = 0.3;
            r660_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r660_xn$startfrom$1aao(r4_SB, 0);
            r660_xn$lineto$5sIl(r4_SB + r4_STROKE * r660_cor, 0);
            r660_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r660_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r660_cor, r4_CAP);
            r660_include(r660_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r660_include(r660_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_isAboveMark = function _r4_t204(r663_mark) {
            var r663_mark, _r663_t0, _r663_t1;
            return r663_mark && r663_mark['anchors'] && r663_mark['anchors']['above'] && r663_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t212 = r4_allFound = false;
                        else
                            _r4_t212 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t213 = r4_hasMarkAbove = true;
                        else
                            _r4_t213 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t215 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t215 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t216 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t216 = void 0;
                        _r4_t214 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t217(r666_part) {
                            var r666_part, _r666_t0, _r666_t1;
                            return r666_part['name'];
                        })['join']('_'), function _r4_t218() {
                            var r668_currentGlyph, r668_xn$setwidth$9Jrj, r668_xn$assignunicode$7Hrq, r668_xn$startfrom$1aao, r668_xn$lineto$5sIl, r668_xn$curveto$1aao, r668_xn$cubicto$1aao, r668_xn$putshapes$9Jrj, r668_xn$reverselast$3qIs, r668_include, r668_xn$createstroke$7Hrq, r668_xn$setanchor$9Jrj, r668_xn$dontexport$5sIl, r668_part, _r668_t0, _r668_t1, _r668_t2, _r668_t3, _r668_t4, _r668_t5, _r668_t6;
                            _r668_t3 = this;
                            r668_currentGlyph = _r668_t3;
                            r668_xn$setwidth$9Jrj = _r668_t3['set-width']['bind'](_r668_t3);
                            r668_xn$assignunicode$7Hrq = function _r668_t5(r669_code) {
                                var r669_code, _r669_t0, _r669_t1;
                                r668_currentGlyph['assign-unicode'](r669_code);
                                return r4_unicodeGlyphs[r668_currentGlyph['unicode'][r668_currentGlyph['unicode']['length'] - 1]] = r668_currentGlyph;
                            };
                            r668_xn$startfrom$1aao = _r668_t3['start-from']['bind'](_r668_t3);
                            r668_xn$lineto$5sIl = _r668_t3['line-to']['bind'](_r668_t3);
                            r668_xn$curveto$1aao = _r668_t3['curve-to']['bind'](_r668_t3);
                            r668_xn$cubicto$1aao = _r668_t3['cubic-to']['bind'](_r668_t3);
                            r668_xn$putshapes$9Jrj = _r668_t3['put-shapes']['bind'](_r668_t3);
                            r668_xn$reverselast$3qIs = _r668_t3['reverse-last']['bind'](_r668_t3);
                            r668_include = _r668_t3['include']['bind'](_r668_t3);
                            r668_xn$createstroke$7Hrq = _r668_t3['create-stroke']['bind'](_r668_t3);
                            r668_xn$setanchor$9Jrj = _r668_t3['set-anchor']['bind'](_r668_t3);
                            r668_xn$dontexport$5sIl = function _r668_t6() {
                                var _r670_t0, _r670_t1;
                                return r668_currentGlyph['dontExport'] = true;
                            };
                            _r668_t3['gizmo'] = r4_globalTransform;
                            _r668_t3['set-width'](r4_WIDTH);
                            r668_xn$assignunicode$7Hrq(r4_code);
                            r668_include(r4_parts[0], r4_AS_BASE);
                            _r668_t0 = r4_parts['slice'](1);
                            _r668_t1 = _r668_t0['length'];
                            _r668_t2 = 0;
                            for (; _r668_t2 < _r668_t1; _r668_t2 = _r668_t2 + 1) {
                                r668_part = _r668_t0[_r668_t2];
                                r668_include(r668_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t206 = _r4_t214;
                }
                _r4_t205 = _r4_t206;
            } else
                _r4_t205 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t207() {
            var r673_currentGlyph, r673_xn$setwidth$9Jrj, r673_xn$assignunicode$7Hrq, r673_xn$startfrom$1aao, r673_xn$lineto$5sIl, r673_xn$curveto$1aao, r673_xn$cubicto$1aao, r673_xn$putshapes$9Jrj, r673_xn$reverselast$3qIs, r673_include, r673_xn$createstroke$7Hrq, r673_xn$setanchor$9Jrj, r673_xn$dontexport$5sIl, _r673_t0, _r673_t1, _r673_t2, _r673_t3;
            _r673_t0 = this;
            r673_currentGlyph = _r673_t0;
            r673_xn$setwidth$9Jrj = _r673_t0['set-width']['bind'](_r673_t0);
            r673_xn$assignunicode$7Hrq = function _r673_t2(r674_code) {
                var r674_code, _r674_t0, _r674_t1;
                r673_currentGlyph['assign-unicode'](r674_code);
                return r4_unicodeGlyphs[r673_currentGlyph['unicode'][r673_currentGlyph['unicode']['length'] - 1]] = r673_currentGlyph;
            };
            r673_xn$startfrom$1aao = _r673_t0['start-from']['bind'](_r673_t0);
            r673_xn$lineto$5sIl = _r673_t0['line-to']['bind'](_r673_t0);
            r673_xn$curveto$1aao = _r673_t0['curve-to']['bind'](_r673_t0);
            r673_xn$cubicto$1aao = _r673_t0['cubic-to']['bind'](_r673_t0);
            r673_xn$putshapes$9Jrj = _r673_t0['put-shapes']['bind'](_r673_t0);
            r673_xn$reverselast$3qIs = _r673_t0['reverse-last']['bind'](_r673_t0);
            r673_include = _r673_t0['include']['bind'](_r673_t0);
            r673_xn$createstroke$7Hrq = _r673_t0['create-stroke']['bind'](_r673_t0);
            r673_xn$setanchor$9Jrj = _r673_t0['set-anchor']['bind'](_r673_t0);
            r673_xn$dontexport$5sIl = function _r673_t3() {
                var _r675_t0, _r675_t1;
                return r673_currentGlyph['dontExport'] = true;
            };
            _r673_t0['gizmo'] = r4_globalTransform;
            _r673_t0['set-width'](r4_WIDTH);
            r673_xn$assignunicode$7Hrq('`');
            r673_include(r4_glyphs['space'], r4_AS_BASE);
            r673_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t208() {
            var r677_currentGlyph, r677_xn$setwidth$9Jrj, r677_xn$assignunicode$7Hrq, r677_xn$startfrom$1aao, r677_xn$lineto$5sIl, r677_xn$curveto$1aao, r677_xn$cubicto$1aao, r677_xn$putshapes$9Jrj, r677_xn$reverselast$3qIs, r677_include, r677_xn$createstroke$7Hrq, r677_xn$setanchor$9Jrj, r677_xn$dontexport$5sIl, _r677_t0, _r677_t1, _r677_t2, _r677_t3;
            _r677_t0 = this;
            r677_currentGlyph = _r677_t0;
            r677_xn$setwidth$9Jrj = _r677_t0['set-width']['bind'](_r677_t0);
            r677_xn$assignunicode$7Hrq = function _r677_t2(r678_code) {
                var r678_code, _r678_t0, _r678_t1;
                r677_currentGlyph['assign-unicode'](r678_code);
                return r4_unicodeGlyphs[r677_currentGlyph['unicode'][r677_currentGlyph['unicode']['length'] - 1]] = r677_currentGlyph;
            };
            r677_xn$startfrom$1aao = _r677_t0['start-from']['bind'](_r677_t0);
            r677_xn$lineto$5sIl = _r677_t0['line-to']['bind'](_r677_t0);
            r677_xn$curveto$1aao = _r677_t0['curve-to']['bind'](_r677_t0);
            r677_xn$cubicto$1aao = _r677_t0['cubic-to']['bind'](_r677_t0);
            r677_xn$putshapes$9Jrj = _r677_t0['put-shapes']['bind'](_r677_t0);
            r677_xn$reverselast$3qIs = _r677_t0['reverse-last']['bind'](_r677_t0);
            r677_include = _r677_t0['include']['bind'](_r677_t0);
            r677_xn$createstroke$7Hrq = _r677_t0['create-stroke']['bind'](_r677_t0);
            r677_xn$setanchor$9Jrj = _r677_t0['set-anchor']['bind'](_r677_t0);
            r677_xn$dontexport$5sIl = function _r677_t3() {
                var _r679_t0, _r679_t1;
                return r677_currentGlyph['dontExport'] = true;
            };
            _r677_t0['gizmo'] = r4_globalTransform;
            _r677_t0['set-width'](r4_WIDTH);
            r677_xn$assignunicode$7Hrq(180);
            r677_include(r4_glyphs['space'], r4_AS_BASE);
            r677_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t209() {
            var r681_currentGlyph, r681_xn$setwidth$9Jrj, r681_xn$assignunicode$7Hrq, r681_xn$startfrom$1aao, r681_xn$lineto$5sIl, r681_xn$curveto$1aao, r681_xn$cubicto$1aao, r681_xn$putshapes$9Jrj, r681_xn$reverselast$3qIs, r681_include, r681_xn$createstroke$7Hrq, r681_xn$setanchor$9Jrj, r681_xn$dontexport$5sIl, _r681_t0, _r681_t1, _r681_t2, _r681_t3;
            _r681_t0 = this;
            r681_currentGlyph = _r681_t0;
            r681_xn$setwidth$9Jrj = _r681_t0['set-width']['bind'](_r681_t0);
            r681_xn$assignunicode$7Hrq = function _r681_t2(r682_code) {
                var r682_code, _r682_t0, _r682_t1;
                r681_currentGlyph['assign-unicode'](r682_code);
                return r4_unicodeGlyphs[r681_currentGlyph['unicode'][r681_currentGlyph['unicode']['length'] - 1]] = r681_currentGlyph;
            };
            r681_xn$startfrom$1aao = _r681_t0['start-from']['bind'](_r681_t0);
            r681_xn$lineto$5sIl = _r681_t0['line-to']['bind'](_r681_t0);
            r681_xn$curveto$1aao = _r681_t0['curve-to']['bind'](_r681_t0);
            r681_xn$cubicto$1aao = _r681_t0['cubic-to']['bind'](_r681_t0);
            r681_xn$putshapes$9Jrj = _r681_t0['put-shapes']['bind'](_r681_t0);
            r681_xn$reverselast$3qIs = _r681_t0['reverse-last']['bind'](_r681_t0);
            r681_include = _r681_t0['include']['bind'](_r681_t0);
            r681_xn$createstroke$7Hrq = _r681_t0['create-stroke']['bind'](_r681_t0);
            r681_xn$setanchor$9Jrj = _r681_t0['set-anchor']['bind'](_r681_t0);
            r681_xn$dontexport$5sIl = function _r681_t3() {
                var _r683_t0, _r683_t1;
                return r681_currentGlyph['dontExport'] = true;
            };
            _r681_t0['gizmo'] = r4_globalTransform;
            _r681_t0['set-width'](r4_WIDTH);
            r681_xn$setwidth$9Jrj(r4_WIDTH);
            r681_xn$assignunicode$7Hrq(94);
            r681_include(r4_glyphs['space'], r4_AS_BASE);
            r681_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t210() {
            var r685_currentGlyph, r685_xn$setwidth$9Jrj, r685_xn$assignunicode$7Hrq, r685_xn$startfrom$1aao, r685_xn$lineto$5sIl, r685_xn$curveto$1aao, r685_xn$cubicto$1aao, r685_xn$putshapes$9Jrj, r685_xn$reverselast$3qIs, r685_include, r685_xn$createstroke$7Hrq, r685_xn$setanchor$9Jrj, r685_xn$dontexport$5sIl, _r685_t0, _r685_t1, _r685_t2, _r685_t3;
            _r685_t0 = this;
            r685_currentGlyph = _r685_t0;
            r685_xn$setwidth$9Jrj = _r685_t0['set-width']['bind'](_r685_t0);
            r685_xn$assignunicode$7Hrq = function _r685_t2(r686_code) {
                var r686_code, _r686_t0, _r686_t1;
                r685_currentGlyph['assign-unicode'](r686_code);
                return r4_unicodeGlyphs[r685_currentGlyph['unicode'][r685_currentGlyph['unicode']['length'] - 1]] = r685_currentGlyph;
            };
            r685_xn$startfrom$1aao = _r685_t0['start-from']['bind'](_r685_t0);
            r685_xn$lineto$5sIl = _r685_t0['line-to']['bind'](_r685_t0);
            r685_xn$curveto$1aao = _r685_t0['curve-to']['bind'](_r685_t0);
            r685_xn$cubicto$1aao = _r685_t0['cubic-to']['bind'](_r685_t0);
            r685_xn$putshapes$9Jrj = _r685_t0['put-shapes']['bind'](_r685_t0);
            r685_xn$reverselast$3qIs = _r685_t0['reverse-last']['bind'](_r685_t0);
            r685_include = _r685_t0['include']['bind'](_r685_t0);
            r685_xn$createstroke$7Hrq = _r685_t0['create-stroke']['bind'](_r685_t0);
            r685_xn$setanchor$9Jrj = _r685_t0['set-anchor']['bind'](_r685_t0);
            r685_xn$dontexport$5sIl = function _r685_t3() {
                var _r687_t0, _r687_t1;
                return r685_currentGlyph['dontExport'] = true;
            };
            _r685_t0['gizmo'] = r4_globalTransform;
            _r685_t0['set-width'](r4_WIDTH);
            r685_xn$setwidth$9Jrj(r4_WIDTH);
            r685_xn$assignunicode$7Hrq('~');
            r685_include(r4_glyphs['space'], r4_AS_BASE);
            r685_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t211() {
            var r689_currentGlyph, r689_xn$setwidth$9Jrj, r689_xn$assignunicode$7Hrq, r689_xn$startfrom$1aao, r689_xn$lineto$5sIl, r689_xn$curveto$1aao, r689_xn$cubicto$1aao, r689_xn$putshapes$9Jrj, r689_xn$reverselast$3qIs, r689_include, r689_xn$createstroke$7Hrq, r689_xn$setanchor$9Jrj, r689_xn$dontexport$5sIl, _r689_t0, _r689_t1, _r689_t2, _r689_t3;
            _r689_t0 = this;
            r689_currentGlyph = _r689_t0;
            r689_xn$setwidth$9Jrj = _r689_t0['set-width']['bind'](_r689_t0);
            r689_xn$assignunicode$7Hrq = function _r689_t2(r690_code) {
                var r690_code, _r690_t0, _r690_t1;
                r689_currentGlyph['assign-unicode'](r690_code);
                return r4_unicodeGlyphs[r689_currentGlyph['unicode'][r689_currentGlyph['unicode']['length'] - 1]] = r689_currentGlyph;
            };
            r689_xn$startfrom$1aao = _r689_t0['start-from']['bind'](_r689_t0);
            r689_xn$lineto$5sIl = _r689_t0['line-to']['bind'](_r689_t0);
            r689_xn$curveto$1aao = _r689_t0['curve-to']['bind'](_r689_t0);
            r689_xn$cubicto$1aao = _r689_t0['cubic-to']['bind'](_r689_t0);
            r689_xn$putshapes$9Jrj = _r689_t0['put-shapes']['bind'](_r689_t0);
            r689_xn$reverselast$3qIs = _r689_t0['reverse-last']['bind'](_r689_t0);
            r689_include = _r689_t0['include']['bind'](_r689_t0);
            r689_xn$createstroke$7Hrq = _r689_t0['create-stroke']['bind'](_r689_t0);
            r689_xn$setanchor$9Jrj = _r689_t0['set-anchor']['bind'](_r689_t0);
            r689_xn$dontexport$5sIl = function _r689_t3() {
                var _r691_t0, _r691_t1;
                return r689_currentGlyph['dontExport'] = true;
            };
            _r689_t0['gizmo'] = r4_globalTransform;
            _r689_t0['set-width'](r4_WIDTH);
            r689_xn$setwidth$9Jrj(r4_WIDTH);
            r689_xn$assignunicode$7Hrq(168);
            r689_include(r4_glyphs['space'], r4_AS_BASE);
            r689_include(r4_glyphs['dieresisAbove']);
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
                _r4_t221 = _r4_t9 < _r4_t8;
                for (; _r4_t221; _r4_t221 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t222 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t220 = _r4_t222;
            } else
                _r4_t220 = void 0;
        }
        r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t219(r695_glyph) {
            var r695_glyph, _r695_t0, _r695_t1;
            return r695_glyph && !r695_glyph['dontExport'];
        });
        return r4_font;
    };
}
