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
        var r4_para, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_ORIGIN, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_Attach, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219;
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
        r4_AS_BASE = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0,
            'copyAnchors': true
        };
        r4_Attach = function _r4_t15(r5_pt1, r5_pt2) {
            var r5_pt1, r5_pt2, r5_transformedPt1, r5_transformedPt2, _r5_t0, _r5_t1;
            r5_transformedPt1 = r0_tp(r4_globalTransform, r5_pt1);
            r5_transformedPt2 = r0_tp(r4_globalTransform, r5_pt2);
            return {
                'xx': 1,
                'yx': 0,
                'xy': 0,
                'yy': 1,
                'x': r5_transformedPt1['x'] - r5_transformedPt2['x'],
                'y': r5_transformedPt1['y'] - r5_transformedPt2['y']
            };
        };
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
            var r31_top, r31_smooth, r31_hook, r31__middle, r31_middle, _r31_t0, _r31_t1;
            r31_middle = r31__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB - r4_OXHOOK, r31_top - r31_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r31_middle, r4_RIGHTSB, r4_KAPPA_HOOK), r31_top - r4_O, r31_middle, r31_top - r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r31_top - r31_smooth)['to-outline']();
        };
        r4_twoHookUpper = function _r4_t50(r32_top, r32_smooth, r32_hook, r32__middle) {
            var r32_top, r32_smooth, r32_hook, r32__middle, r32_middle, _r32_t0, _r32_t1;
            r32_middle = r32__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r32_top - r32_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r32_middle, r4_SB, r4_KAPPA_HOOK), r32_top - r4_O, r32_middle, r32_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r32_top - r32_smooth)['to-outline']();
        };
        r4_sHookLower = function _r4_t51(r33_bottom, r33_smooth, r33_hook, r33__middle) {
            var r33_bottom, r33_smooth, r33_hook, r33__middle, r33_middle, _r33_t0, _r33_t1;
            r33_middle = r33__middle || r4_MIDDLE;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r4_RIGHTSB, r33_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r33_middle, r33_bottom + r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r0_mix(r33_middle, r4_SB, r4_KAPPA_HOOK), r33_bottom + r4_O, r4_SB + r4_OXHOOK, r33_bottom + r33_hook)['to-outline']();
        };
        r4_smallo = function _r4_t52(r34_u, r34_d, r34_l, r34_r) {
            var r34_u, r34_d, r34_l, r34_r, r34_middle, r34_ymiddlea, r34_ymiddleb, _r34_t0, _r34_t1, _r34_t2;
            r34_middle = (r34_l + r34_r) / 2;
            if (r34_u - r34_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB)
                return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r34_middle, r34_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r34_l + r4_O, r34_u - r4_SMALLSMOOTHA)['line-to'](r34_l + r4_O, r34_d + r4_SMALLSMOOTHB)['arc-vh-to'](r34_middle, r34_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r34_r - r4_O, r34_d + r4_SMALLSMOOTHA)['line-to'](r34_r - r4_O, r34_u - r4_SMALLSMOOTHB)['arc-vh-to'](r34_middle, r34_u - r4_O)['heads-to'](r4_LEFTWARD)['to-outline']();
            else {
                r34_ymiddlea = (r34_u - r4_SMALLSMOOTHA + r34_d + r4_SMALLSMOOTHB) / 2;
                r34_ymiddleb = (r34_u - r4_SMALLSMOOTHB + r34_d + r4_SMALLSMOOTHA) / 2;
                return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r34_middle, r34_u - r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r34_l + r4_O, r34_ymiddlea)['arc-vh-to'](r34_middle, r34_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r34_r - r4_O, r34_ymiddleb)['arc-vh-to'](r34_middle, r34_u - r4_O)['heads-to'](r4_LEFTWARD)['to-outline']();
            }
        };
        r4_hbar = function _r4_t53(r35_xleft, r35_xright, r35_y, r35__fine) {
            var r35_xleft, r35_xright, r35_y, r35__fine, r35_fine, _r35_t0, _r35_t1;
            r35_fine = (r35__fine || r4_STROKE) / 2;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r35_xleft, r35_y)['heads-to'](r4_RIGHTWARD)['set-width'](r35_fine, r35_fine)['line-to'](r35_xright, r35_y)['heads-to'](r4_RIGHTWARD)['to-outline']();
        };
        r4_vbar = function _r4_t54(r36_x, r36_ydown, r36_yup, r36__fine) {
            var r36_x, r36_ydown, r36_yup, r36__fine, r36_fine, _r36_t0, _r36_t1, _r36_t2, _r36_t3, _r36_t4, _r36_t5, _r36_t6, _r36_t7, _r36_t8, _r36_t9, _r36_t10, _r36_t11, _r36_t12, _r36_t13, _r36_t14, _r36_t15, _r36_t16, _r36_t17;
            r36_fine = (r36__fine || r4_STROKE) / 2;
            _r36_t2 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r36_x, r36_ydown);
            _r36_t3 = _r36_t2['heads-to'];
            if (r36_ydown < r36_yup)
                _r36_t4 = r4_UPWARD;
            else
                _r36_t4 = r4_DOWNWARD;
            _r36_t5 = _r36_t3['call'](_r36_t2, _r36_t4);
            _r36_t6 = _r36_t5['set-width'];
            _r36_t7 = r36_fine;
            _r36_t8 = r36_fine;
            _r36_t9 = _r36_t6['call'](_r36_t5, _r36_t7, _r36_t8);
            _r36_t10 = _r36_t9['line-to'];
            _r36_t11 = r36_x;
            _r36_t12 = r36_yup;
            _r36_t13 = _r36_t10['call'](_r36_t9, _r36_t11, _r36_t12);
            _r36_t14 = _r36_t13['heads-to'];
            if (r36_ydown < r36_yup)
                _r36_t15 = r4_UPWARD;
            else
                _r36_t15 = r4_DOWNWARD;
            _r36_t16 = _r36_t14['call'](_r36_t13, _r36_t15);
            _r36_t17 = _r36_t16['to-outline'];
            return _r36_t17['call'](_r36_t16);
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t55() {
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
            r38_xn$setwidth$9Jrj(0);
            r38_xn$assignunicode$7Hrq(775);
            r38_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r38_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t56() {
            var r42_currentGlyph, r42_xn$setwidth$9Jrj, r42_xn$assignunicode$7Hrq, r42_xn$startfrom$1aao, r42_xn$lineto$5sIl, r42_xn$curveto$1aao, r42_xn$cubicto$1aao, r42_xn$putshapes$9Jrj, r42_xn$reverselast$3qIs, r42_include, r42_xn$createstroke$7Hrq, r42_xn$setanchor$9Jrj, r42_xn$dontexport$5sIl, _r42_t0, _r42_t1, _r42_t2, _r42_t3;
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
            r42_xn$setwidth$9Jrj(0);
            r42_xn$assignunicode$7Hrq(776);
            r42_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r42_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t57() {
            var r46_currentGlyph, r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_include, r46_xn$createstroke$7Hrq, r46_xn$setanchor$9Jrj, r46_xn$dontexport$5sIl, r46_radiusOut, r46_radiusIn, _r46_t0, _r46_t1, _r46_t2, _r46_t3;
            _r46_t0 = this;
            r46_currentGlyph = _r46_t0;
            r46_xn$setwidth$9Jrj = _r46_t0['set-width']['bind'](_r46_t0);
            r46_xn$assignunicode$7Hrq = function _r46_t2(r47_code) {
                var r47_code, _r47_t0, _r47_t1;
                r46_currentGlyph['assign-unicode'](r47_code);
                return r4_unicodeGlyphs[r46_currentGlyph['unicode'][r46_currentGlyph['unicode']['length'] - 1]] = r46_currentGlyph;
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
            r46_xn$dontexport$5sIl = function _r46_t3() {
                var _r48_t0, _r48_t1;
                return r46_currentGlyph['dontExport'] = true;
            };
            _r46_t0['gizmo'] = r4_globalTransform;
            _r46_t0['set-width'](r4_WIDTH);
            r46_xn$setwidth$9Jrj(0);
            r46_xn$assignunicode$7Hrq(778);
            r46_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r46_radiusOut = r4_DOTRADIUS * 1.5;
            r46_radiusIn = r4_DOTRADIUS * 0.7;
            r46_include([
                r4_Ring(r4_XH + r4_ACCENT + r46_radiusOut, r4_XH + r4_ACCENT - r46_radiusOut, r4_markMiddle - r46_radiusOut, r4_markMiddle + r46_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r46_radiusIn, r4_XH + r4_ACCENT - r46_radiusIn, r4_markMiddle - r46_radiusIn, r4_markMiddle + r46_radiusIn)
            ]);
            r46_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t58() {
            var r50_currentGlyph, r50_xn$setwidth$9Jrj, r50_xn$assignunicode$7Hrq, r50_xn$startfrom$1aao, r50_xn$lineto$5sIl, r50_xn$curveto$1aao, r50_xn$cubicto$1aao, r50_xn$putshapes$9Jrj, r50_xn$reverselast$3qIs, r50_include, r50_xn$createstroke$7Hrq, r50_xn$setanchor$9Jrj, r50_xn$dontexport$5sIl, _r50_t0, _r50_t1, _r50_t2, _r50_t3;
            _r50_t0 = this;
            r50_currentGlyph = _r50_t0;
            r50_xn$setwidth$9Jrj = _r50_t0['set-width']['bind'](_r50_t0);
            r50_xn$assignunicode$7Hrq = function _r50_t2(r51_code) {
                var r51_code, _r51_t0, _r51_t1;
                r50_currentGlyph['assign-unicode'](r51_code);
                return r4_unicodeGlyphs[r50_currentGlyph['unicode'][r50_currentGlyph['unicode']['length'] - 1]] = r50_currentGlyph;
            };
            r50_xn$startfrom$1aao = _r50_t0['start-from']['bind'](_r50_t0);
            r50_xn$lineto$5sIl = _r50_t0['line-to']['bind'](_r50_t0);
            r50_xn$curveto$1aao = _r50_t0['curve-to']['bind'](_r50_t0);
            r50_xn$cubicto$1aao = _r50_t0['cubic-to']['bind'](_r50_t0);
            r50_xn$putshapes$9Jrj = _r50_t0['put-shapes']['bind'](_r50_t0);
            r50_xn$reverselast$3qIs = _r50_t0['reverse-last']['bind'](_r50_t0);
            r50_include = _r50_t0['include']['bind'](_r50_t0);
            r50_xn$createstroke$7Hrq = _r50_t0['create-stroke']['bind'](_r50_t0);
            r50_xn$setanchor$9Jrj = _r50_t0['set-anchor']['bind'](_r50_t0);
            r50_xn$dontexport$5sIl = function _r50_t3() {
                var _r52_t0, _r52_t1;
                return r50_currentGlyph['dontExport'] = true;
            };
            _r50_t0['gizmo'] = r4_globalTransform;
            _r50_t0['set-width'](r4_WIDTH);
            r50_xn$setwidth$9Jrj(0);
            r50_xn$assignunicode$7Hrq(768);
            r50_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r50_include(r50_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t59() {
            var r54_currentGlyph, r54_xn$setwidth$9Jrj, r54_xn$assignunicode$7Hrq, r54_xn$startfrom$1aao, r54_xn$lineto$5sIl, r54_xn$curveto$1aao, r54_xn$cubicto$1aao, r54_xn$putshapes$9Jrj, r54_xn$reverselast$3qIs, r54_include, r54_xn$createstroke$7Hrq, r54_xn$setanchor$9Jrj, r54_xn$dontexport$5sIl, _r54_t0, _r54_t1, _r54_t2, _r54_t3;
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
            r54_xn$dontexport$5sIl = function _r54_t3() {
                var _r56_t0, _r56_t1;
                return r54_currentGlyph['dontExport'] = true;
            };
            _r54_t0['gizmo'] = r4_globalTransform;
            _r54_t0['set-width'](r4_WIDTH);
            r54_xn$setwidth$9Jrj(0);
            r54_xn$assignunicode$7Hrq(769);
            r54_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r54_include(r54_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t60() {
            var r58_currentGlyph, r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, r58_xn$dontexport$5sIl, _r58_t0, _r58_t1, _r58_t2, _r58_t3;
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
            r58_xn$setwidth$9Jrj(0);
            r58_xn$assignunicode$7Hrq(770);
            r58_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r58_include(r58_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r58_include(r58_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t61() {
            var r62_currentGlyph, r62_xn$setwidth$9Jrj, r62_xn$assignunicode$7Hrq, r62_xn$startfrom$1aao, r62_xn$lineto$5sIl, r62_xn$curveto$1aao, r62_xn$cubicto$1aao, r62_xn$putshapes$9Jrj, r62_xn$reverselast$3qIs, r62_include, r62_xn$createstroke$7Hrq, r62_xn$setanchor$9Jrj, r62_xn$dontexport$5sIl, _r62_t0, _r62_t1, _r62_t2, _r62_t3;
            _r62_t0 = this;
            r62_currentGlyph = _r62_t0;
            r62_xn$setwidth$9Jrj = _r62_t0['set-width']['bind'](_r62_t0);
            r62_xn$assignunicode$7Hrq = function _r62_t2(r63_code) {
                var r63_code, _r63_t0, _r63_t1;
                r62_currentGlyph['assign-unicode'](r63_code);
                return r4_unicodeGlyphs[r62_currentGlyph['unicode'][r62_currentGlyph['unicode']['length'] - 1]] = r62_currentGlyph;
            };
            r62_xn$startfrom$1aao = _r62_t0['start-from']['bind'](_r62_t0);
            r62_xn$lineto$5sIl = _r62_t0['line-to']['bind'](_r62_t0);
            r62_xn$curveto$1aao = _r62_t0['curve-to']['bind'](_r62_t0);
            r62_xn$cubicto$1aao = _r62_t0['cubic-to']['bind'](_r62_t0);
            r62_xn$putshapes$9Jrj = _r62_t0['put-shapes']['bind'](_r62_t0);
            r62_xn$reverselast$3qIs = _r62_t0['reverse-last']['bind'](_r62_t0);
            r62_include = _r62_t0['include']['bind'](_r62_t0);
            r62_xn$createstroke$7Hrq = _r62_t0['create-stroke']['bind'](_r62_t0);
            r62_xn$setanchor$9Jrj = _r62_t0['set-anchor']['bind'](_r62_t0);
            r62_xn$dontexport$5sIl = function _r62_t3() {
                var _r64_t0, _r64_t1;
                return r62_currentGlyph['dontExport'] = true;
            };
            _r62_t0['gizmo'] = r4_globalTransform;
            _r62_t0['set-width'](r4_WIDTH);
            r62_xn$setwidth$9Jrj(0);
            r62_xn$assignunicode$7Hrq(780);
            r62_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r62_include(r62_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r62_include(r62_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t62() {
            var r66_currentGlyph, r66_xn$setwidth$9Jrj, r66_xn$assignunicode$7Hrq, r66_xn$startfrom$1aao, r66_xn$lineto$5sIl, r66_xn$curveto$1aao, r66_xn$cubicto$1aao, r66_xn$putshapes$9Jrj, r66_xn$reverselast$3qIs, r66_include, r66_xn$createstroke$7Hrq, r66_xn$setanchor$9Jrj, r66_xn$dontexport$5sIl, r66_leftEnd, r66_rightEnd, r66_ttop, r66_tbot, r66_top, r66_bot, r66_tildeWave, r66_tildeWaveX, r66_tildeWaveEnd, _r66_t0, _r66_t1, _r66_t2, _r66_t3;
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
            r66_xn$dontexport$5sIl = function _r66_t3() {
                var _r68_t0, _r68_t1;
                return r66_currentGlyph['dontExport'] = true;
            };
            _r66_t0['gizmo'] = r4_globalTransform;
            _r66_t0['set-width'](r4_WIDTH);
            r66_xn$setwidth$9Jrj(0);
            r66_xn$assignunicode$7Hrq(771);
            r66_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r66_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r66_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r66_ttop = r4_aboveMarkTop;
            r66_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r66_top = r66_ttop + r4_markFine * 2;
            r66_bot = r66_tbot - r4_markFine * 2;
            r66_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r66_tildeWaveX = 0.52;
            r66_tildeWaveEnd = 0;
            r66_include(r66_xn$createstroke$7Hrq()['start-from'](r66_leftEnd, r0_mix(r66_tbot, r66_ttop, r66_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r66_leftEnd, r66_rightEnd, r66_tildeWaveX), r0_mix(r66_bot, r66_top, r66_tildeWave), r0_mix(r66_leftEnd, r66_rightEnd, 1 - r66_tildeWaveX), r0_mix(r66_bot, r66_top, 1 - r66_tildeWave), r66_rightEnd, r0_mix(r66_tbot, r66_ttop, 1 - r66_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t63() {
            var r70_currentGlyph, r70_xn$setwidth$9Jrj, r70_xn$assignunicode$7Hrq, r70_xn$startfrom$1aao, r70_xn$lineto$5sIl, r70_xn$curveto$1aao, r70_xn$cubicto$1aao, r70_xn$putshapes$9Jrj, r70_xn$reverselast$3qIs, r70_include, r70_xn$createstroke$7Hrq, r70_xn$setanchor$9Jrj, r70_xn$dontexport$5sIl, r70_leftEnd, r70_rightEnd, _r70_t0, _r70_t1, _r70_t2, _r70_t3;
            _r70_t0 = this;
            r70_currentGlyph = _r70_t0;
            r70_xn$setwidth$9Jrj = _r70_t0['set-width']['bind'](_r70_t0);
            r70_xn$assignunicode$7Hrq = function _r70_t2(r71_code) {
                var r71_code, _r71_t0, _r71_t1;
                r70_currentGlyph['assign-unicode'](r71_code);
                return r4_unicodeGlyphs[r70_currentGlyph['unicode'][r70_currentGlyph['unicode']['length'] - 1]] = r70_currentGlyph;
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
            r70_xn$dontexport$5sIl = function _r70_t3() {
                var _r72_t0, _r72_t1;
                return r70_currentGlyph['dontExport'] = true;
            };
            _r70_t0['gizmo'] = r4_globalTransform;
            _r70_t0['set-width'](r4_WIDTH);
            r70_xn$setwidth$9Jrj(0);
            r70_xn$assignunicode$7Hrq(772);
            r70_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r70_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r70_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r70_include(r70_xn$createstroke$7Hrq()['start-from'](r70_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r70_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t64() {
            var r74_currentGlyph, r74_xn$setwidth$9Jrj, r74_xn$assignunicode$7Hrq, r74_xn$startfrom$1aao, r74_xn$lineto$5sIl, r74_xn$curveto$1aao, r74_xn$cubicto$1aao, r74_xn$putshapes$9Jrj, r74_xn$reverselast$3qIs, r74_include, r74_xn$createstroke$7Hrq, r74_xn$setanchor$9Jrj, r74_xn$dontexport$5sIl, r74_leftEnd, r74_rightEnd, _r74_t0, _r74_t1, _r74_t2, _r74_t3;
            _r74_t0 = this;
            r74_currentGlyph = _r74_t0;
            r74_xn$setwidth$9Jrj = _r74_t0['set-width']['bind'](_r74_t0);
            r74_xn$assignunicode$7Hrq = function _r74_t2(r75_code) {
                var r75_code, _r75_t0, _r75_t1;
                r74_currentGlyph['assign-unicode'](r75_code);
                return r4_unicodeGlyphs[r74_currentGlyph['unicode'][r74_currentGlyph['unicode']['length'] - 1]] = r74_currentGlyph;
            };
            r74_xn$startfrom$1aao = _r74_t0['start-from']['bind'](_r74_t0);
            r74_xn$lineto$5sIl = _r74_t0['line-to']['bind'](_r74_t0);
            r74_xn$curveto$1aao = _r74_t0['curve-to']['bind'](_r74_t0);
            r74_xn$cubicto$1aao = _r74_t0['cubic-to']['bind'](_r74_t0);
            r74_xn$putshapes$9Jrj = _r74_t0['put-shapes']['bind'](_r74_t0);
            r74_xn$reverselast$3qIs = _r74_t0['reverse-last']['bind'](_r74_t0);
            r74_include = _r74_t0['include']['bind'](_r74_t0);
            r74_xn$createstroke$7Hrq = _r74_t0['create-stroke']['bind'](_r74_t0);
            r74_xn$setanchor$9Jrj = _r74_t0['set-anchor']['bind'](_r74_t0);
            r74_xn$dontexport$5sIl = function _r74_t3() {
                var _r76_t0, _r76_t1;
                return r74_currentGlyph['dontExport'] = true;
            };
            _r74_t0['gizmo'] = r4_globalTransform;
            _r74_t0['set-width'](r4_WIDTH);
            r74_xn$setwidth$9Jrj(0);
            r74_xn$assignunicode$7Hrq(774);
            r74_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r74_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r74_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r74_include(r74_xn$createstroke$7Hrq()['start-from'](r74_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r74_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t65() {
            var r78_currentGlyph, r78_xn$setwidth$9Jrj, r78_xn$assignunicode$7Hrq, r78_xn$startfrom$1aao, r78_xn$lineto$5sIl, r78_xn$curveto$1aao, r78_xn$cubicto$1aao, r78_xn$putshapes$9Jrj, r78_xn$reverselast$3qIs, r78_include, r78_xn$createstroke$7Hrq, r78_xn$setanchor$9Jrj, r78_xn$dontexport$5sIl, r78_fine, r78_hookBot, r78_hookTop, _r78_t0, _r78_t1, _r78_t2, _r78_t3;
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
            r78_xn$dontexport$5sIl = function _r78_t3() {
                var _r80_t0, _r80_t1;
                return r78_currentGlyph['dontExport'] = true;
            };
            _r78_t0['gizmo'] = r4_globalTransform;
            _r78_t0['set-width'](r4_WIDTH);
            r78_xn$setwidth$9Jrj(0);
            r78_xn$assignunicode$7Hrq(777);
            r78_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r78_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r78_hookBot = r4_aboveMarkBot - r78_fine / 2;
            r78_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r78_fine / 2;
            r78_include(r78_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r78_fine * r4_ITALICCOR, r78_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r78_fine * 2, 0)['line-to'](r4_markMiddle + r78_fine * 0.5, r78_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r78_hookBot, r78_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r78_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r78_fine, r78_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t66() {
            var r82_currentGlyph, r82_xn$setwidth$9Jrj, r82_xn$assignunicode$7Hrq, r82_xn$startfrom$1aao, r82_xn$lineto$5sIl, r82_xn$curveto$1aao, r82_xn$cubicto$1aao, r82_xn$putshapes$9Jrj, r82_xn$reverselast$3qIs, r82_include, r82_xn$createstroke$7Hrq, r82_xn$setanchor$9Jrj, r82_xn$dontexport$5sIl, _r82_t0, _r82_t1, _r82_t2, _r82_t3;
            _r82_t0 = this;
            r82_currentGlyph = _r82_t0;
            r82_xn$setwidth$9Jrj = _r82_t0['set-width']['bind'](_r82_t0);
            r82_xn$assignunicode$7Hrq = function _r82_t2(r83_code) {
                var r83_code, _r83_t0, _r83_t1;
                r82_currentGlyph['assign-unicode'](r83_code);
                return r4_unicodeGlyphs[r82_currentGlyph['unicode'][r82_currentGlyph['unicode']['length'] - 1]] = r82_currentGlyph;
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
            r82_xn$dontexport$5sIl = function _r82_t3() {
                var _r84_t0, _r84_t1;
                return r82_currentGlyph['dontExport'] = true;
            };
            _r82_t0['gizmo'] = r4_globalTransform;
            _r82_t0['set-width'](r4_WIDTH);
            r82_xn$setwidth$9Jrj(0);
            r82_xn$assignunicode$7Hrq(803);
            r82_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r82_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t67() {
            var r86_currentGlyph, r86_xn$setwidth$9Jrj, r86_xn$assignunicode$7Hrq, r86_xn$startfrom$1aao, r86_xn$lineto$5sIl, r86_xn$curveto$1aao, r86_xn$cubicto$1aao, r86_xn$putshapes$9Jrj, r86_xn$reverselast$3qIs, r86_include, r86_xn$createstroke$7Hrq, r86_xn$setanchor$9Jrj, r86_xn$dontexport$5sIl, r86_fine, r86_cedillaTop, r86_cedillaBot, _r86_t0, _r86_t1, _r86_t2, _r86_t3;
            _r86_t0 = this;
            r86_currentGlyph = _r86_t0;
            r86_xn$setwidth$9Jrj = _r86_t0['set-width']['bind'](_r86_t0);
            r86_xn$assignunicode$7Hrq = function _r86_t2(r87_code) {
                var r87_code, _r87_t0, _r87_t1;
                r86_currentGlyph['assign-unicode'](r87_code);
                return r4_unicodeGlyphs[r86_currentGlyph['unicode'][r86_currentGlyph['unicode']['length'] - 1]] = r86_currentGlyph;
            };
            r86_xn$startfrom$1aao = _r86_t0['start-from']['bind'](_r86_t0);
            r86_xn$lineto$5sIl = _r86_t0['line-to']['bind'](_r86_t0);
            r86_xn$curveto$1aao = _r86_t0['curve-to']['bind'](_r86_t0);
            r86_xn$cubicto$1aao = _r86_t0['cubic-to']['bind'](_r86_t0);
            r86_xn$putshapes$9Jrj = _r86_t0['put-shapes']['bind'](_r86_t0);
            r86_xn$reverselast$3qIs = _r86_t0['reverse-last']['bind'](_r86_t0);
            r86_include = _r86_t0['include']['bind'](_r86_t0);
            r86_xn$createstroke$7Hrq = _r86_t0['create-stroke']['bind'](_r86_t0);
            r86_xn$setanchor$9Jrj = _r86_t0['set-anchor']['bind'](_r86_t0);
            r86_xn$dontexport$5sIl = function _r86_t3() {
                var _r88_t0, _r88_t1;
                return r86_currentGlyph['dontExport'] = true;
            };
            _r86_t0['gizmo'] = r4_globalTransform;
            _r86_t0['set-width'](r4_WIDTH);
            r86_xn$setwidth$9Jrj(0);
            r86_xn$assignunicode$7Hrq(807);
            r86_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r86_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r86_cedillaTop = r4_belowMarkTop + r86_fine * 0.85;
            r86_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r86_include(r86_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r86_fine * r4_ITALICCOR, r86_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r86_fine * 2)['line-to'](r4_markMiddle + r86_fine * 0.5, r86_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r86_cedillaTop, r86_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r86_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r86_cedillaBot)['heads-to'](r4_LEFTWARD));
            r86_include(r86_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r86_fine, r86_fine)['line-to'](r4_markMiddle, r86_cedillaTop - r86_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t68() {
            var r90_currentGlyph, r90_xn$setwidth$9Jrj, r90_xn$assignunicode$7Hrq, r90_xn$startfrom$1aao, r90_xn$lineto$5sIl, r90_xn$curveto$1aao, r90_xn$cubicto$1aao, r90_xn$putshapes$9Jrj, r90_xn$reverselast$3qIs, r90_include, r90_xn$createstroke$7Hrq, r90_xn$setanchor$9Jrj, r90_xn$dontexport$5sIl, r90_TURN, _r90_t0, _r90_t1, _r90_t2, _r90_t3;
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
            r90_xn$dontexport$5sIl = function _r90_t3() {
                var _r92_t0, _r92_t1;
                return r90_currentGlyph['dontExport'] = true;
            };
            _r90_t0['gizmo'] = r4_globalTransform;
            _r90_t0['set-width'](r4_WIDTH);
            r90_xn$setwidth$9Jrj(r4_WIDTH);
            r90_xn$assignunicode$7Hrq('A');
            r90_include(r4_capitalMarks);
            r90_TURN = r4_XH * 0.1;
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r90_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r90_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r90_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r90_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r90_include(r90_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r90_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r90_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r90_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t69() {
            var r94_currentGlyph, r94_xn$setwidth$9Jrj, r94_xn$assignunicode$7Hrq, r94_xn$startfrom$1aao, r94_xn$lineto$5sIl, r94_xn$curveto$1aao, r94_xn$cubicto$1aao, r94_xn$putshapes$9Jrj, r94_xn$reverselast$3qIs, r94_include, r94_xn$createstroke$7Hrq, r94_xn$setanchor$9Jrj, r94_xn$dontexport$5sIl, r94_TURN, _r94_t0, _r94_t1, _r94_t2, _r94_t3;
            _r94_t0 = this;
            r94_currentGlyph = _r94_t0;
            r94_xn$setwidth$9Jrj = _r94_t0['set-width']['bind'](_r94_t0);
            r94_xn$assignunicode$7Hrq = function _r94_t2(r95_code) {
                var r95_code, _r95_t0, _r95_t1;
                r94_currentGlyph['assign-unicode'](r95_code);
                return r4_unicodeGlyphs[r94_currentGlyph['unicode'][r94_currentGlyph['unicode']['length'] - 1]] = r94_currentGlyph;
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
            r94_xn$dontexport$5sIl = function _r94_t3() {
                var _r96_t0, _r96_t1;
                return r94_currentGlyph['dontExport'] = true;
            };
            _r94_t0['gizmo'] = r4_globalTransform;
            _r94_t0['set-width'](r4_WIDTH);
            r94_xn$setwidth$9Jrj(r4_WIDTH);
            r94_xn$assignunicode$7Hrq('V');
            r94_include(r4_capitalMarks);
            r94_TURN = r4_CAP * 0.9;
            r94_include(r94_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r94_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r94_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r94_include(r94_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r94_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r94_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r94_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r94_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r94_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t70() {
            var r98_currentGlyph, r98_xn$setwidth$9Jrj, r98_xn$assignunicode$7Hrq, r98_xn$startfrom$1aao, r98_xn$lineto$5sIl, r98_xn$curveto$1aao, r98_xn$cubicto$1aao, r98_xn$putshapes$9Jrj, r98_xn$reverselast$3qIs, r98_include, r98_xn$createstroke$7Hrq, r98_xn$setanchor$9Jrj, r98_xn$dontexport$5sIl, r98_TURN, r98_turn2, r98_wheight, r98_bottomStroke, r98_m1, r98_m2, _r98_t0, _r98_t1, _r98_t2, _r98_t3;
            _r98_t0 = this;
            r98_currentGlyph = _r98_t0;
            r98_xn$setwidth$9Jrj = _r98_t0['set-width']['bind'](_r98_t0);
            r98_xn$assignunicode$7Hrq = function _r98_t2(r99_code) {
                var r99_code, _r99_t0, _r99_t1;
                r98_currentGlyph['assign-unicode'](r99_code);
                return r4_unicodeGlyphs[r98_currentGlyph['unicode'][r98_currentGlyph['unicode']['length'] - 1]] = r98_currentGlyph;
            };
            r98_xn$startfrom$1aao = _r98_t0['start-from']['bind'](_r98_t0);
            r98_xn$lineto$5sIl = _r98_t0['line-to']['bind'](_r98_t0);
            r98_xn$curveto$1aao = _r98_t0['curve-to']['bind'](_r98_t0);
            r98_xn$cubicto$1aao = _r98_t0['cubic-to']['bind'](_r98_t0);
            r98_xn$putshapes$9Jrj = _r98_t0['put-shapes']['bind'](_r98_t0);
            r98_xn$reverselast$3qIs = _r98_t0['reverse-last']['bind'](_r98_t0);
            r98_include = _r98_t0['include']['bind'](_r98_t0);
            r98_xn$createstroke$7Hrq = _r98_t0['create-stroke']['bind'](_r98_t0);
            r98_xn$setanchor$9Jrj = _r98_t0['set-anchor']['bind'](_r98_t0);
            r98_xn$dontexport$5sIl = function _r98_t3() {
                var _r100_t0, _r100_t1;
                return r98_currentGlyph['dontExport'] = true;
            };
            _r98_t0['gizmo'] = r4_globalTransform;
            _r98_t0['set-width'](r4_WIDTH);
            r98_xn$setwidth$9Jrj(r4_WIDTH);
            r98_xn$assignunicode$7Hrq('W');
            r98_include(r4_capitalMarks);
            r98_TURN = r4_CAP * 0.75;
            r98_turn2 = r4_CAP * 0.59;
            r98_wheight = r4_CAP * 0.6;
            r98_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r98_m1 = r4_WIDTH * 0.3;
            r98_m2 = r4_WIDTH * 0.7;
            r98_include(r98_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r98_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r98_TURN, r98_m1 - r98_bottomStroke / 2, 0)['set-width'](r98_bottomStroke, 0));
            r98_include(r98_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r98_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r98_TURN, r98_m2 + r98_bottomStroke / 2, 0)['set-width'](0, r98_bottomStroke));
            r98_include(r98_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r98_bottomStroke / 2, r98_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r98_bottomStroke)['line-to'](r4_MIDDLE + r98_bottomStroke / 2, r98_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r98_bottomStroke / 2, (1 - 0.1) * r98_turn2, r98_m1 + r98_bottomStroke / 2, 0)['set-width'](0, r98_bottomStroke));
            r98_include(r98_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r98_bottomStroke / 2, r98_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r98_bottomStroke, 0)['line-to'](r4_MIDDLE - r98_bottomStroke / 2, r98_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r98_bottomStroke / 2, (1 - 0.1) * r98_turn2, r98_m2 - r98_bottomStroke / 2, 0)['set-width'](r98_bottomStroke, 0));
            r98_xn$startfrom$1aao(r98_m1 + r98_bottomStroke / 2, 0);
            r98_xn$lineto$5sIl(r98_m1 - r98_bottomStroke / 2, 0);
            r98_xn$lineto$5sIl(r98_m1, r98_bottomStroke);
            r98_xn$startfrom$1aao(r98_m2 + r98_bottomStroke / 2, 0);
            r98_xn$lineto$5sIl(r98_m2 - r98_bottomStroke / 2, 0);
            r98_xn$lineto$5sIl(r98_m2, r98_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t71() {
            var r102_currentGlyph, r102_xn$setwidth$9Jrj, r102_xn$assignunicode$7Hrq, r102_xn$startfrom$1aao, r102_xn$lineto$5sIl, r102_xn$curveto$1aao, r102_xn$cubicto$1aao, r102_xn$putshapes$9Jrj, r102_xn$reverselast$3qIs, r102_include, r102_xn$createstroke$7Hrq, r102_xn$setanchor$9Jrj, r102_xn$dontexport$5sIl, _r102_t0, _r102_t1, _r102_t2, _r102_t3;
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
            r102_xn$dontexport$5sIl = function _r102_t3() {
                var _r104_t0, _r104_t1;
                return r102_currentGlyph['dontExport'] = true;
            };
            _r102_t0['gizmo'] = r4_globalTransform;
            _r102_t0['set-width'](r4_WIDTH);
            r102_xn$setwidth$9Jrj(r4_WIDTH);
            r102_xn$assignunicode$7Hrq('X');
            r102_include(r4_capitalMarks);
            r102_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r102_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t72() {
            var r106_currentGlyph, r106_xn$setwidth$9Jrj, r106_xn$assignunicode$7Hrq, r106_xn$startfrom$1aao, r106_xn$lineto$5sIl, r106_xn$curveto$1aao, r106_xn$cubicto$1aao, r106_xn$putshapes$9Jrj, r106_xn$reverselast$3qIs, r106_include, r106_xn$createstroke$7Hrq, r106_xn$setanchor$9Jrj, r106_xn$dontexport$5sIl, r106_cross, _r106_t0, _r106_t1, _r106_t2, _r106_t3;
            _r106_t0 = this;
            r106_currentGlyph = _r106_t0;
            r106_xn$setwidth$9Jrj = _r106_t0['set-width']['bind'](_r106_t0);
            r106_xn$assignunicode$7Hrq = function _r106_t2(r107_code) {
                var r107_code, _r107_t0, _r107_t1;
                r106_currentGlyph['assign-unicode'](r107_code);
                return r4_unicodeGlyphs[r106_currentGlyph['unicode'][r106_currentGlyph['unicode']['length'] - 1]] = r106_currentGlyph;
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
            r106_xn$dontexport$5sIl = function _r106_t3() {
                var _r108_t0, _r108_t1;
                return r106_currentGlyph['dontExport'] = true;
            };
            _r106_t0['gizmo'] = r4_globalTransform;
            _r106_t0['set-width'](r4_WIDTH);
            r106_xn$setwidth$9Jrj(r4_WIDTH);
            r106_xn$assignunicode$7Hrq('Y');
            r106_include(r4_capitalMarks);
            r106_cross = r4_CAP * 0.4;
            r106_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r106_cross, 0.1, 0.4, 0.28));
            r106_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r106_cross, 0.1, 0.4, 0.28));
            r106_include(r106_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r106_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t73() {
            var r110_currentGlyph, r110_xn$setwidth$9Jrj, r110_xn$assignunicode$7Hrq, r110_xn$startfrom$1aao, r110_xn$lineto$5sIl, r110_xn$curveto$1aao, r110_xn$cubicto$1aao, r110_xn$putshapes$9Jrj, r110_xn$reverselast$3qIs, r110_include, r110_xn$createstroke$7Hrq, r110_xn$setanchor$9Jrj, r110_xn$dontexport$5sIl, r110_TURN, r110_rturn, r110_right, r110_fine, _r110_t0, _r110_t1, _r110_t2, _r110_t3;
            _r110_t0 = this;
            r110_currentGlyph = _r110_t0;
            r110_xn$setwidth$9Jrj = _r110_t0['set-width']['bind'](_r110_t0);
            r110_xn$assignunicode$7Hrq = function _r110_t2(r111_code) {
                var r111_code, _r111_t0, _r111_t1;
                r110_currentGlyph['assign-unicode'](r111_code);
                return r4_unicodeGlyphs[r110_currentGlyph['unicode'][r110_currentGlyph['unicode']['length'] - 1]] = r110_currentGlyph;
            };
            r110_xn$startfrom$1aao = _r110_t0['start-from']['bind'](_r110_t0);
            r110_xn$lineto$5sIl = _r110_t0['line-to']['bind'](_r110_t0);
            r110_xn$curveto$1aao = _r110_t0['curve-to']['bind'](_r110_t0);
            r110_xn$cubicto$1aao = _r110_t0['cubic-to']['bind'](_r110_t0);
            r110_xn$putshapes$9Jrj = _r110_t0['put-shapes']['bind'](_r110_t0);
            r110_xn$reverselast$3qIs = _r110_t0['reverse-last']['bind'](_r110_t0);
            r110_include = _r110_t0['include']['bind'](_r110_t0);
            r110_xn$createstroke$7Hrq = _r110_t0['create-stroke']['bind'](_r110_t0);
            r110_xn$setanchor$9Jrj = _r110_t0['set-anchor']['bind'](_r110_t0);
            r110_xn$dontexport$5sIl = function _r110_t3() {
                var _r112_t0, _r112_t1;
                return r110_currentGlyph['dontExport'] = true;
            };
            _r110_t0['gizmo'] = r4_globalTransform;
            _r110_t0['set-width'](r4_WIDTH);
            r110_xn$setwidth$9Jrj(r4_WIDTH);
            r110_xn$assignunicode$7Hrq('K');
            r110_include(r4_capitalMarks);
            r110_TURN = r4_CAP * 0.95;
            r110_rturn = r4_XH * 0.1;
            r110_right = r4_RIGHTSB - r4_O;
            r110_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r110_include(r110_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r110_include(r110_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r110_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r110_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r110_fine));
            r110_include(r110_xn$createstroke$7Hrq()['start-from'](r110_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r110_right - r4_HALFSTROKE, r110_rturn + 0.2 * (r4_XH - r110_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r110_fine / 2, r110_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t74() {
            var r114_currentGlyph, r114_xn$setwidth$9Jrj, r114_xn$assignunicode$7Hrq, r114_xn$startfrom$1aao, r114_xn$lineto$5sIl, r114_xn$curveto$1aao, r114_xn$cubicto$1aao, r114_xn$putshapes$9Jrj, r114_xn$reverselast$3qIs, r114_include, r114_xn$createstroke$7Hrq, r114_xn$setanchor$9Jrj, r114_xn$dontexport$5sIl, r114_bowl, r114_tkappa, r114_bkappa, r114_turntop, r114_turnbottom, _r114_t0, _r114_t1, _r114_t2, _r114_t3;
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
            r114_xn$dontexport$5sIl = function _r114_t3() {
                var _r116_t0, _r116_t1;
                return r114_currentGlyph['dontExport'] = true;
            };
            _r114_t0['gizmo'] = r4_globalTransform;
            _r114_t0['set-width'](r4_WIDTH);
            r114_xn$setwidth$9Jrj(r4_WIDTH);
            r114_xn$assignunicode$7Hrq('B');
            r114_include(r4_capitalMarks);
            r114_bowl = 451;
            r114_tkappa = r4_COKAPPA - 0.22;
            r114_bkappa = r4_COKAPPA - 0.2;
            r114_turntop = (r4_CAP + (r114_bowl - r4_STROKE)) / 2;
            r114_turnbottom = r114_bowl / 2;
            r114_include(r114_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r114_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r114_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r114_turnbottom, r114_bowl - r4_STROKE)['line-to'](r4_SB, r114_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r114_include(r114_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r114_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r114_turnbottom)['arc-vh-to'](r4_RIGHTSB - r114_turnbottom, r114_bowl)['line-to'](r4_SB, r114_bowl)['heads-to'](r4_LEFTWARD));
            r114_include(r114_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t75() {
            var r118_currentGlyph, r118_xn$setwidth$9Jrj, r118_xn$assignunicode$7Hrq, r118_xn$startfrom$1aao, r118_xn$lineto$5sIl, r118_xn$curveto$1aao, r118_xn$cubicto$1aao, r118_xn$putshapes$9Jrj, r118_xn$reverselast$3qIs, r118_include, r118_xn$createstroke$7Hrq, r118_xn$setanchor$9Jrj, r118_xn$dontexport$5sIl, r118_dsmooth, r118_bsmooth, _r118_t0, _r118_t1, _r118_t2, _r118_t3;
            _r118_t0 = this;
            r118_currentGlyph = _r118_t0;
            r118_xn$setwidth$9Jrj = _r118_t0['set-width']['bind'](_r118_t0);
            r118_xn$assignunicode$7Hrq = function _r118_t2(r119_code) {
                var r119_code, _r119_t0, _r119_t1;
                r118_currentGlyph['assign-unicode'](r119_code);
                return r4_unicodeGlyphs[r118_currentGlyph['unicode'][r118_currentGlyph['unicode']['length'] - 1]] = r118_currentGlyph;
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
            r118_xn$dontexport$5sIl = function _r118_t3() {
                var _r120_t0, _r120_t1;
                return r118_currentGlyph['dontExport'] = true;
            };
            _r118_t0['gizmo'] = r4_globalTransform;
            _r118_t0['set-width'](r4_WIDTH);
            r118_xn$setwidth$9Jrj(r4_WIDTH);
            r118_xn$assignunicode$7Hrq('D');
            r118_include(r4_capitalMarks);
            r118_dsmooth = r4_SMOOTH * 1.35;
            r118_bsmooth = r4_SMOOTH * 1.1;
            r118_include(r118_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r118_include(r118_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r118_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r118_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r118_dsmooth)['arc-vh-to'](r4_RIGHTSB - r118_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t76() {
            var r122_currentGlyph, r122_xn$setwidth$9Jrj, r122_xn$assignunicode$7Hrq, r122_xn$startfrom$1aao, r122_xn$lineto$5sIl, r122_xn$curveto$1aao, r122_xn$cubicto$1aao, r122_xn$putshapes$9Jrj, r122_xn$reverselast$3qIs, r122_include, r122_xn$createstroke$7Hrq, r122_xn$setanchor$9Jrj, r122_xn$dontexport$5sIl, r122_bowlTop, r122_bowlBottom, r122_bkappa, r122_turn, r122_turnRadius, _r122_t0, _r122_t1, _r122_t2, _r122_t3;
            _r122_t0 = this;
            r122_currentGlyph = _r122_t0;
            r122_xn$setwidth$9Jrj = _r122_t0['set-width']['bind'](_r122_t0);
            r122_xn$assignunicode$7Hrq = function _r122_t2(r123_code) {
                var r123_code, _r123_t0, _r123_t1;
                r122_currentGlyph['assign-unicode'](r123_code);
                return r4_unicodeGlyphs[r122_currentGlyph['unicode'][r122_currentGlyph['unicode']['length'] - 1]] = r122_currentGlyph;
            };
            r122_xn$startfrom$1aao = _r122_t0['start-from']['bind'](_r122_t0);
            r122_xn$lineto$5sIl = _r122_t0['line-to']['bind'](_r122_t0);
            r122_xn$curveto$1aao = _r122_t0['curve-to']['bind'](_r122_t0);
            r122_xn$cubicto$1aao = _r122_t0['cubic-to']['bind'](_r122_t0);
            r122_xn$putshapes$9Jrj = _r122_t0['put-shapes']['bind'](_r122_t0);
            r122_xn$reverselast$3qIs = _r122_t0['reverse-last']['bind'](_r122_t0);
            r122_include = _r122_t0['include']['bind'](_r122_t0);
            r122_xn$createstroke$7Hrq = _r122_t0['create-stroke']['bind'](_r122_t0);
            r122_xn$setanchor$9Jrj = _r122_t0['set-anchor']['bind'](_r122_t0);
            r122_xn$dontexport$5sIl = function _r122_t3() {
                var _r124_t0, _r124_t1;
                return r122_currentGlyph['dontExport'] = true;
            };
            _r122_t0['gizmo'] = r4_globalTransform;
            _r122_t0['set-width'](r4_WIDTH);
            r122_xn$setwidth$9Jrj(r4_WIDTH);
            r122_xn$assignunicode$7Hrq('P');
            r122_include(r4_capitalMarks);
            r122_bowlTop = r4_CAP * 1;
            r122_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r122_bkappa = r4_COKAPPA - 0.2;
            r122_turn = r0_mix(r122_bowlTop, r122_bowlBottom, 0.5);
            r122_turnRadius = (r122_bowlTop - r122_bowlBottom) / 2;
            r122_include(r122_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r122_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r122_turnRadius, r122_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r122_turn)['arc-vh-to'](r4_RIGHTSB - r122_turnRadius, r122_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r122_bowlBottom)['heads-to'](r4_LEFTWARD));
            r122_include(r122_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t77() {
            var r126_currentGlyph, r126_xn$setwidth$9Jrj, r126_xn$assignunicode$7Hrq, r126_xn$startfrom$1aao, r126_xn$lineto$5sIl, r126_xn$curveto$1aao, r126_xn$cubicto$1aao, r126_xn$putshapes$9Jrj, r126_xn$reverselast$3qIs, r126_include, r126_xn$createstroke$7Hrq, r126_xn$setanchor$9Jrj, r126_xn$dontexport$5sIl, r126_TURN, r126_right, _r126_t0, _r126_t1, _r126_t2, _r126_t3;
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
            r126_xn$dontexport$5sIl = function _r126_t3() {
                var _r128_t0, _r128_t1;
                return r126_currentGlyph['dontExport'] = true;
            };
            _r126_t0['gizmo'] = r4_globalTransform;
            _r126_t0['set-width'](r4_WIDTH);
            r126_xn$setwidth$9Jrj(r4_WIDTH);
            r126_xn$assignunicode$7Hrq('R');
            r126_include(r4_glyphs['P'], r4_AS_BASE);
            r126_TURN = r4_XH * 0.1;
            r126_right = r4_RIGHTSB - r4_O;
            r126_include(r126_xn$createstroke$7Hrq()['start-from'](r126_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r126_right - r4_HALFSTROKE, r126_TURN + 0.2 * (r4_XH - r126_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t78() {
            var r130_currentGlyph, r130_xn$setwidth$9Jrj, r130_xn$assignunicode$7Hrq, r130_xn$startfrom$1aao, r130_xn$lineto$5sIl, r130_xn$curveto$1aao, r130_xn$cubicto$1aao, r130_xn$putshapes$9Jrj, r130_xn$reverselast$3qIs, r130_include, r130_xn$createstroke$7Hrq, r130_xn$setanchor$9Jrj, r130_xn$dontexport$5sIl, _r130_t0, _r130_t1, _r130_t2, _r130_t3;
            _r130_t0 = this;
            r130_currentGlyph = _r130_t0;
            r130_xn$setwidth$9Jrj = _r130_t0['set-width']['bind'](_r130_t0);
            r130_xn$assignunicode$7Hrq = function _r130_t2(r131_code) {
                var r131_code, _r131_t0, _r131_t1;
                r130_currentGlyph['assign-unicode'](r131_code);
                return r4_unicodeGlyphs[r130_currentGlyph['unicode'][r130_currentGlyph['unicode']['length'] - 1]] = r130_currentGlyph;
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
            r130_xn$dontexport$5sIl = function _r130_t3() {
                var _r132_t0, _r132_t1;
                return r130_currentGlyph['dontExport'] = true;
            };
            _r130_t0['gizmo'] = r4_globalTransform;
            _r130_t0['set-width'](r4_WIDTH);
            r130_xn$setwidth$9Jrj(r4_WIDTH);
            r130_xn$assignunicode$7Hrq('C');
            r130_include(r4_capitalMarks);
            r130_include(r130_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t79() {
            var r134_currentGlyph, r134_xn$setwidth$9Jrj, r134_xn$assignunicode$7Hrq, r134_xn$startfrom$1aao, r134_xn$lineto$5sIl, r134_xn$curveto$1aao, r134_xn$cubicto$1aao, r134_xn$putshapes$9Jrj, r134_xn$reverselast$3qIs, r134_include, r134_xn$createstroke$7Hrq, r134_xn$setanchor$9Jrj, r134_xn$dontexport$5sIl, _r134_t0, _r134_t1, _r134_t2, _r134_t3;
            _r134_t0 = this;
            r134_currentGlyph = _r134_t0;
            r134_xn$setwidth$9Jrj = _r134_t0['set-width']['bind'](_r134_t0);
            r134_xn$assignunicode$7Hrq = function _r134_t2(r135_code) {
                var r135_code, _r135_t0, _r135_t1;
                r134_currentGlyph['assign-unicode'](r135_code);
                return r4_unicodeGlyphs[r134_currentGlyph['unicode'][r134_currentGlyph['unicode']['length'] - 1]] = r134_currentGlyph;
            };
            r134_xn$startfrom$1aao = _r134_t0['start-from']['bind'](_r134_t0);
            r134_xn$lineto$5sIl = _r134_t0['line-to']['bind'](_r134_t0);
            r134_xn$curveto$1aao = _r134_t0['curve-to']['bind'](_r134_t0);
            r134_xn$cubicto$1aao = _r134_t0['cubic-to']['bind'](_r134_t0);
            r134_xn$putshapes$9Jrj = _r134_t0['put-shapes']['bind'](_r134_t0);
            r134_xn$reverselast$3qIs = _r134_t0['reverse-last']['bind'](_r134_t0);
            r134_include = _r134_t0['include']['bind'](_r134_t0);
            r134_xn$createstroke$7Hrq = _r134_t0['create-stroke']['bind'](_r134_t0);
            r134_xn$setanchor$9Jrj = _r134_t0['set-anchor']['bind'](_r134_t0);
            r134_xn$dontexport$5sIl = function _r134_t3() {
                var _r136_t0, _r136_t1;
                return r134_currentGlyph['dontExport'] = true;
            };
            _r134_t0['gizmo'] = r4_globalTransform;
            _r134_t0['set-width'](r4_WIDTH);
            r134_xn$setwidth$9Jrj(r4_WIDTH);
            r134_xn$assignunicode$7Hrq('G');
            r134_include(r4_capitalMarks);
            r134_include(r134_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r134_include(r134_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t80() {
            var r138_currentGlyph, r138_xn$setwidth$9Jrj, r138_xn$assignunicode$7Hrq, r138_xn$startfrom$1aao, r138_xn$lineto$5sIl, r138_xn$curveto$1aao, r138_xn$cubicto$1aao, r138_xn$putshapes$9Jrj, r138_xn$reverselast$3qIs, r138_include, r138_xn$createstroke$7Hrq, r138_xn$setanchor$9Jrj, r138_xn$dontexport$5sIl, _r138_t0, _r138_t1, _r138_t2, _r138_t3;
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
            r138_xn$dontexport$5sIl = function _r138_t3() {
                var _r140_t0, _r140_t1;
                return r138_currentGlyph['dontExport'] = true;
            };
            _r138_t0['gizmo'] = r4_globalTransform;
            _r138_t0['set-width'](r4_WIDTH);
            r138_xn$setwidth$9Jrj(r4_WIDTH);
            r138_xn$assignunicode$7Hrq('O');
            r138_include(r4_capitalMarks);
            r138_include(r138_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t81() {
            var r142_currentGlyph, r142_xn$setwidth$9Jrj, r142_xn$assignunicode$7Hrq, r142_xn$startfrom$1aao, r142_xn$lineto$5sIl, r142_xn$curveto$1aao, r142_xn$cubicto$1aao, r142_xn$putshapes$9Jrj, r142_xn$reverselast$3qIs, r142_include, r142_xn$createstroke$7Hrq, r142_xn$setanchor$9Jrj, r142_xn$dontexport$5sIl, _r142_t0, _r142_t1, _r142_t2, _r142_t3;
            _r142_t0 = this;
            r142_currentGlyph = _r142_t0;
            r142_xn$setwidth$9Jrj = _r142_t0['set-width']['bind'](_r142_t0);
            r142_xn$assignunicode$7Hrq = function _r142_t2(r143_code) {
                var r143_code, _r143_t0, _r143_t1;
                r142_currentGlyph['assign-unicode'](r143_code);
                return r4_unicodeGlyphs[r142_currentGlyph['unicode'][r142_currentGlyph['unicode']['length'] - 1]] = r142_currentGlyph;
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
            r142_xn$dontexport$5sIl = function _r142_t3() {
                var _r144_t0, _r144_t1;
                return r142_currentGlyph['dontExport'] = true;
            };
            _r142_t0['gizmo'] = r4_globalTransform;
            _r142_t0['set-width'](r4_WIDTH);
            r142_xn$setwidth$9Jrj(r4_WIDTH);
            r142_xn$assignunicode$7Hrq('Q');
            r142_include(r4_glyphs['O'], r4_AS_BASE);
            r142_xn$startfrom$1aao(r4_MIDDLE, 0);
            r142_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r142_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r142_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r142_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r142_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t82() {
            var r146_currentGlyph, r146_xn$setwidth$9Jrj, r146_xn$assignunicode$7Hrq, r146_xn$startfrom$1aao, r146_xn$lineto$5sIl, r146_xn$curveto$1aao, r146_xn$cubicto$1aao, r146_xn$putshapes$9Jrj, r146_xn$reverselast$3qIs, r146_include, r146_xn$createstroke$7Hrq, r146_xn$setanchor$9Jrj, r146_xn$dontexport$5sIl, _r146_t0, _r146_t1, _r146_t2, _r146_t3;
            _r146_t0 = this;
            r146_currentGlyph = _r146_t0;
            r146_xn$setwidth$9Jrj = _r146_t0['set-width']['bind'](_r146_t0);
            r146_xn$assignunicode$7Hrq = function _r146_t2(r147_code) {
                var r147_code, _r147_t0, _r147_t1;
                r146_currentGlyph['assign-unicode'](r147_code);
                return r4_unicodeGlyphs[r146_currentGlyph['unicode'][r146_currentGlyph['unicode']['length'] - 1]] = r146_currentGlyph;
            };
            r146_xn$startfrom$1aao = _r146_t0['start-from']['bind'](_r146_t0);
            r146_xn$lineto$5sIl = _r146_t0['line-to']['bind'](_r146_t0);
            r146_xn$curveto$1aao = _r146_t0['curve-to']['bind'](_r146_t0);
            r146_xn$cubicto$1aao = _r146_t0['cubic-to']['bind'](_r146_t0);
            r146_xn$putshapes$9Jrj = _r146_t0['put-shapes']['bind'](_r146_t0);
            r146_xn$reverselast$3qIs = _r146_t0['reverse-last']['bind'](_r146_t0);
            r146_include = _r146_t0['include']['bind'](_r146_t0);
            r146_xn$createstroke$7Hrq = _r146_t0['create-stroke']['bind'](_r146_t0);
            r146_xn$setanchor$9Jrj = _r146_t0['set-anchor']['bind'](_r146_t0);
            r146_xn$dontexport$5sIl = function _r146_t3() {
                var _r148_t0, _r148_t1;
                return r146_currentGlyph['dontExport'] = true;
            };
            _r146_t0['gizmo'] = r4_globalTransform;
            _r146_t0['set-width'](r4_WIDTH);
            r146_xn$setwidth$9Jrj(r4_WIDTH);
            r146_xn$assignunicode$7Hrq('U');
            r146_include(r4_capitalMarks);
            r146_include(r146_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('F', function _r4_t83() {
            var r150_currentGlyph, r150_xn$setwidth$9Jrj, r150_xn$assignunicode$7Hrq, r150_xn$startfrom$1aao, r150_xn$lineto$5sIl, r150_xn$curveto$1aao, r150_xn$cubicto$1aao, r150_xn$putshapes$9Jrj, r150_xn$reverselast$3qIs, r150_include, r150_xn$createstroke$7Hrq, r150_xn$setanchor$9Jrj, r150_xn$dontexport$5sIl, _r150_t0, _r150_t1, _r150_t2, _r150_t3;
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
            r150_xn$dontexport$5sIl = function _r150_t3() {
                var _r152_t0, _r152_t1;
                return r150_currentGlyph['dontExport'] = true;
            };
            _r150_t0['gizmo'] = r4_globalTransform;
            _r150_t0['set-width'](r4_WIDTH);
            r150_xn$setwidth$9Jrj(r4_WIDTH);
            r150_xn$assignunicode$7Hrq('F');
            r150_include(r4_capitalMarks);
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r150_include(r150_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t84() {
            var r154_currentGlyph, r154_xn$setwidth$9Jrj, r154_xn$assignunicode$7Hrq, r154_xn$startfrom$1aao, r154_xn$lineto$5sIl, r154_xn$curveto$1aao, r154_xn$cubicto$1aao, r154_xn$putshapes$9Jrj, r154_xn$reverselast$3qIs, r154_include, r154_xn$createstroke$7Hrq, r154_xn$setanchor$9Jrj, r154_xn$dontexport$5sIl, _r154_t0, _r154_t1, _r154_t2, _r154_t3;
            _r154_t0 = this;
            r154_currentGlyph = _r154_t0;
            r154_xn$setwidth$9Jrj = _r154_t0['set-width']['bind'](_r154_t0);
            r154_xn$assignunicode$7Hrq = function _r154_t2(r155_code) {
                var r155_code, _r155_t0, _r155_t1;
                r154_currentGlyph['assign-unicode'](r155_code);
                return r4_unicodeGlyphs[r154_currentGlyph['unicode'][r154_currentGlyph['unicode']['length'] - 1]] = r154_currentGlyph;
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
            r154_xn$dontexport$5sIl = function _r154_t3() {
                var _r156_t0, _r156_t1;
                return r154_currentGlyph['dontExport'] = true;
            };
            _r154_t0['gizmo'] = r4_globalTransform;
            _r154_t0['set-width'](r4_WIDTH);
            r154_xn$setwidth$9Jrj(r4_WIDTH);
            r154_xn$assignunicode$7Hrq('E');
            r154_include(r4_glyphs['F'], r4_AS_BASE);
            r154_include(r154_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t85() {
            var r158_currentGlyph, r158_xn$setwidth$9Jrj, r158_xn$assignunicode$7Hrq, r158_xn$startfrom$1aao, r158_xn$lineto$5sIl, r158_xn$curveto$1aao, r158_xn$cubicto$1aao, r158_xn$putshapes$9Jrj, r158_xn$reverselast$3qIs, r158_include, r158_xn$createstroke$7Hrq, r158_xn$setanchor$9Jrj, r158_xn$dontexport$5sIl, _r158_t0, _r158_t1, _r158_t2, _r158_t3;
            _r158_t0 = this;
            r158_currentGlyph = _r158_t0;
            r158_xn$setwidth$9Jrj = _r158_t0['set-width']['bind'](_r158_t0);
            r158_xn$assignunicode$7Hrq = function _r158_t2(r159_code) {
                var r159_code, _r159_t0, _r159_t1;
                r158_currentGlyph['assign-unicode'](r159_code);
                return r4_unicodeGlyphs[r158_currentGlyph['unicode'][r158_currentGlyph['unicode']['length'] - 1]] = r158_currentGlyph;
            };
            r158_xn$startfrom$1aao = _r158_t0['start-from']['bind'](_r158_t0);
            r158_xn$lineto$5sIl = _r158_t0['line-to']['bind'](_r158_t0);
            r158_xn$curveto$1aao = _r158_t0['curve-to']['bind'](_r158_t0);
            r158_xn$cubicto$1aao = _r158_t0['cubic-to']['bind'](_r158_t0);
            r158_xn$putshapes$9Jrj = _r158_t0['put-shapes']['bind'](_r158_t0);
            r158_xn$reverselast$3qIs = _r158_t0['reverse-last']['bind'](_r158_t0);
            r158_include = _r158_t0['include']['bind'](_r158_t0);
            r158_xn$createstroke$7Hrq = _r158_t0['create-stroke']['bind'](_r158_t0);
            r158_xn$setanchor$9Jrj = _r158_t0['set-anchor']['bind'](_r158_t0);
            r158_xn$dontexport$5sIl = function _r158_t3() {
                var _r160_t0, _r160_t1;
                return r158_currentGlyph['dontExport'] = true;
            };
            _r158_t0['gizmo'] = r4_globalTransform;
            _r158_t0['set-width'](r4_WIDTH);
            r158_xn$setwidth$9Jrj(r4_WIDTH);
            r158_xn$assignunicode$7Hrq('H');
            r158_include(r4_capitalMarks);
            r158_include(r158_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r158_include(r158_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r158_include(r158_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t86() {
            var r162_currentGlyph, r162_xn$setwidth$9Jrj, r162_xn$assignunicode$7Hrq, r162_xn$startfrom$1aao, r162_xn$lineto$5sIl, r162_xn$curveto$1aao, r162_xn$cubicto$1aao, r162_xn$putshapes$9Jrj, r162_xn$reverselast$3qIs, r162_include, r162_xn$createstroke$7Hrq, r162_xn$setanchor$9Jrj, r162_xn$dontexport$5sIl, _r162_t0, _r162_t1, _r162_t2, _r162_t3;
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
            r162_xn$dontexport$5sIl = function _r162_t3() {
                var _r164_t0, _r164_t1;
                return r162_currentGlyph['dontExport'] = true;
            };
            _r162_t0['gizmo'] = r4_globalTransform;
            _r162_t0['set-width'](r4_WIDTH);
            r162_xn$setwidth$9Jrj(r4_WIDTH);
            r162_xn$assignunicode$7Hrq('L');
            r162_include(r4_capitalMarks);
            r162_include(r162_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r162_include(r162_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t87() {
            var r166_currentGlyph, r166_xn$setwidth$9Jrj, r166_xn$assignunicode$7Hrq, r166_xn$startfrom$1aao, r166_xn$lineto$5sIl, r166_xn$curveto$1aao, r166_xn$cubicto$1aao, r166_xn$putshapes$9Jrj, r166_xn$reverselast$3qIs, r166_include, r166_xn$createstroke$7Hrq, r166_xn$setanchor$9Jrj, r166_xn$dontexport$5sIl, _r166_t0, _r166_t1, _r166_t2, _r166_t3;
            _r166_t0 = this;
            r166_currentGlyph = _r166_t0;
            r166_xn$setwidth$9Jrj = _r166_t0['set-width']['bind'](_r166_t0);
            r166_xn$assignunicode$7Hrq = function _r166_t2(r167_code) {
                var r167_code, _r167_t0, _r167_t1;
                r166_currentGlyph['assign-unicode'](r167_code);
                return r4_unicodeGlyphs[r166_currentGlyph['unicode'][r166_currentGlyph['unicode']['length'] - 1]] = r166_currentGlyph;
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
            r166_xn$dontexport$5sIl = function _r166_t3() {
                var _r168_t0, _r168_t1;
                return r166_currentGlyph['dontExport'] = true;
            };
            _r166_t0['gizmo'] = r4_globalTransform;
            _r166_t0['set-width'](r4_WIDTH);
            r166_xn$dontexport$5sIl();
            r166_include(r4_capitalMarks);
            r166_include(r166_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t88() {
            var r170_currentGlyph, r170_xn$setwidth$9Jrj, r170_xn$assignunicode$7Hrq, r170_xn$startfrom$1aao, r170_xn$lineto$5sIl, r170_xn$curveto$1aao, r170_xn$cubicto$1aao, r170_xn$putshapes$9Jrj, r170_xn$reverselast$3qIs, r170_include, r170_xn$createstroke$7Hrq, r170_xn$setanchor$9Jrj, r170_xn$dontexport$5sIl, _r170_t0, _r170_t1, _r170_t2, _r170_t3;
            _r170_t0 = this;
            r170_currentGlyph = _r170_t0;
            r170_xn$setwidth$9Jrj = _r170_t0['set-width']['bind'](_r170_t0);
            r170_xn$assignunicode$7Hrq = function _r170_t2(r171_code) {
                var r171_code, _r171_t0, _r171_t1;
                r170_currentGlyph['assign-unicode'](r171_code);
                return r4_unicodeGlyphs[r170_currentGlyph['unicode'][r170_currentGlyph['unicode']['length'] - 1]] = r170_currentGlyph;
            };
            r170_xn$startfrom$1aao = _r170_t0['start-from']['bind'](_r170_t0);
            r170_xn$lineto$5sIl = _r170_t0['line-to']['bind'](_r170_t0);
            r170_xn$curveto$1aao = _r170_t0['curve-to']['bind'](_r170_t0);
            r170_xn$cubicto$1aao = _r170_t0['cubic-to']['bind'](_r170_t0);
            r170_xn$putshapes$9Jrj = _r170_t0['put-shapes']['bind'](_r170_t0);
            r170_xn$reverselast$3qIs = _r170_t0['reverse-last']['bind'](_r170_t0);
            r170_include = _r170_t0['include']['bind'](_r170_t0);
            r170_xn$createstroke$7Hrq = _r170_t0['create-stroke']['bind'](_r170_t0);
            r170_xn$setanchor$9Jrj = _r170_t0['set-anchor']['bind'](_r170_t0);
            r170_xn$dontexport$5sIl = function _r170_t3() {
                var _r172_t0, _r172_t1;
                return r170_currentGlyph['dontExport'] = true;
            };
            _r170_t0['gizmo'] = r4_globalTransform;
            _r170_t0['set-width'](r4_WIDTH);
            r170_xn$dontexport$5sIl();
            r170_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r170_include(r170_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r170_include(r170_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t89() {
            var r174_currentGlyph, r174_xn$setwidth$9Jrj, r174_xn$assignunicode$7Hrq, r174_xn$startfrom$1aao, r174_xn$lineto$5sIl, r174_xn$curveto$1aao, r174_xn$cubicto$1aao, r174_xn$putshapes$9Jrj, r174_xn$reverselast$3qIs, r174_include, r174_xn$createstroke$7Hrq, r174_xn$setanchor$9Jrj, r174_xn$dontexport$5sIl, _r174_t0, _r174_t1, _r174_t2, _r174_t3;
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
            r174_xn$dontexport$5sIl = function _r174_t3() {
                var _r176_t0, _r176_t1;
                return r174_currentGlyph['dontExport'] = true;
            };
            _r174_t0['gizmo'] = r4_globalTransform;
            _r174_t0['set-width'](r4_WIDTH);
            r174_xn$setwidth$9Jrj(r4_WIDTH);
            r174_xn$assignunicode$7Hrq('T');
            r174_include(r4_capitalMarks);
            r174_include(r174_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r174_include(r174_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t90() {
            var r178_currentGlyph, r178_xn$setwidth$9Jrj, r178_xn$assignunicode$7Hrq, r178_xn$startfrom$1aao, r178_xn$lineto$5sIl, r178_xn$curveto$1aao, r178_xn$cubicto$1aao, r178_xn$putshapes$9Jrj, r178_xn$reverselast$3qIs, r178_include, r178_xn$createstroke$7Hrq, r178_xn$setanchor$9Jrj, r178_xn$dontexport$5sIl, r178_cor, _r178_t0, _r178_t1, _r178_t2, _r178_t3;
            _r178_t0 = this;
            r178_currentGlyph = _r178_t0;
            r178_xn$setwidth$9Jrj = _r178_t0['set-width']['bind'](_r178_t0);
            r178_xn$assignunicode$7Hrq = function _r178_t2(r179_code) {
                var r179_code, _r179_t0, _r179_t1;
                r178_currentGlyph['assign-unicode'](r179_code);
                return r4_unicodeGlyphs[r178_currentGlyph['unicode'][r178_currentGlyph['unicode']['length'] - 1]] = r178_currentGlyph;
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
            r178_xn$dontexport$5sIl = function _r178_t3() {
                var _r180_t0, _r180_t1;
                return r178_currentGlyph['dontExport'] = true;
            };
            _r178_t0['gizmo'] = r4_globalTransform;
            _r178_t0['set-width'](r4_WIDTH);
            r178_xn$setwidth$9Jrj(r4_WIDTH);
            r178_xn$assignunicode$7Hrq('Z');
            r178_include(r4_capitalMarks);
            r178_cor = 1.15;
            r178_include(r178_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r178_include(r178_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r178_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r178_xn$lineto$5sIl(r4_SB + r4_STROKE * r178_cor, r4_STROKE);
            r178_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r178_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r178_cor, r4_CAP - r4_STROKE);
            r178_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t91() {
            var r182_currentGlyph, r182_xn$setwidth$9Jrj, r182_xn$assignunicode$7Hrq, r182_xn$startfrom$1aao, r182_xn$lineto$5sIl, r182_xn$curveto$1aao, r182_xn$cubicto$1aao, r182_xn$putshapes$9Jrj, r182_xn$reverselast$3qIs, r182_include, r182_xn$createstroke$7Hrq, r182_xn$setanchor$9Jrj, r182_xn$dontexport$5sIl, r182_slope, r182_expand, r182_coexpand, r182_kappa, r182_smooth, r182_hookx, _r182_t0, _r182_t1, _r182_t2, _r182_t3;
            _r182_t0 = this;
            r182_currentGlyph = _r182_t0;
            r182_xn$setwidth$9Jrj = _r182_t0['set-width']['bind'](_r182_t0);
            r182_xn$assignunicode$7Hrq = function _r182_t2(r183_code) {
                var r183_code, _r183_t0, _r183_t1;
                r182_currentGlyph['assign-unicode'](r183_code);
                return r4_unicodeGlyphs[r182_currentGlyph['unicode'][r182_currentGlyph['unicode']['length'] - 1]] = r182_currentGlyph;
            };
            r182_xn$startfrom$1aao = _r182_t0['start-from']['bind'](_r182_t0);
            r182_xn$lineto$5sIl = _r182_t0['line-to']['bind'](_r182_t0);
            r182_xn$curveto$1aao = _r182_t0['curve-to']['bind'](_r182_t0);
            r182_xn$cubicto$1aao = _r182_t0['cubic-to']['bind'](_r182_t0);
            r182_xn$putshapes$9Jrj = _r182_t0['put-shapes']['bind'](_r182_t0);
            r182_xn$reverselast$3qIs = _r182_t0['reverse-last']['bind'](_r182_t0);
            r182_include = _r182_t0['include']['bind'](_r182_t0);
            r182_xn$createstroke$7Hrq = _r182_t0['create-stroke']['bind'](_r182_t0);
            r182_xn$setanchor$9Jrj = _r182_t0['set-anchor']['bind'](_r182_t0);
            r182_xn$dontexport$5sIl = function _r182_t3() {
                var _r184_t0, _r184_t1;
                return r182_currentGlyph['dontExport'] = true;
            };
            _r182_t0['gizmo'] = r4_globalTransform;
            _r182_t0['set-width'](r4_WIDTH);
            r182_xn$setwidth$9Jrj(r4_WIDTH);
            r182_xn$dontexport$5sIl();
            r182_include(r4_capitalMarks);
            r182_slope = r4_STROKE * 0.00092;
            r182_expand = 0.35;
            r182_coexpand = (1 - r182_expand) / 2;
            r182_kappa = r4_KAPPA_HOOK;
            r182_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r182_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r182_include(r182_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r182_smooth)['arc-vh-to'](r0_mix(r182_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r182_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r182_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t92() {
            var r186_currentGlyph, r186_xn$setwidth$9Jrj, r186_xn$assignunicode$7Hrq, r186_xn$startfrom$1aao, r186_xn$lineto$5sIl, r186_xn$curveto$1aao, r186_xn$cubicto$1aao, r186_xn$putshapes$9Jrj, r186_xn$reverselast$3qIs, r186_include, r186_xn$createstroke$7Hrq, r186_xn$setanchor$9Jrj, r186_xn$dontexport$5sIl, _r186_t0, _r186_t1, _r186_t2, _r186_t3;
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
            r186_xn$dontexport$5sIl = function _r186_t3() {
                var _r188_t0, _r188_t1;
                return r186_currentGlyph['dontExport'] = true;
            };
            _r186_t0['gizmo'] = r4_globalTransform;
            _r186_t0['set-width'](r4_WIDTH);
            r186_xn$setwidth$9Jrj(r4_WIDTH);
            r186_xn$dontexport$5sIl();
            r186_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r186_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t93() {
            var r190_currentGlyph, r190_xn$setwidth$9Jrj, r190_xn$assignunicode$7Hrq, r190_xn$startfrom$1aao, r190_xn$lineto$5sIl, r190_xn$curveto$1aao, r190_xn$cubicto$1aao, r190_xn$putshapes$9Jrj, r190_xn$reverselast$3qIs, r190_include, r190_xn$createstroke$7Hrq, r190_xn$setanchor$9Jrj, r190_xn$dontexport$5sIl, r190_topstroke, r190_halftopstroke, _r190_t0, _r190_t1, _r190_t2, _r190_t3;
            _r190_t0 = this;
            r190_currentGlyph = _r190_t0;
            r190_xn$setwidth$9Jrj = _r190_t0['set-width']['bind'](_r190_t0);
            r190_xn$assignunicode$7Hrq = function _r190_t2(r191_code) {
                var r191_code, _r191_t0, _r191_t1;
                r190_currentGlyph['assign-unicode'](r191_code);
                return r4_unicodeGlyphs[r190_currentGlyph['unicode'][r190_currentGlyph['unicode']['length'] - 1]] = r190_currentGlyph;
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
            r190_xn$dontexport$5sIl = function _r190_t3() {
                var _r192_t0, _r192_t1;
                return r190_currentGlyph['dontExport'] = true;
            };
            _r190_t0['gizmo'] = r4_globalTransform;
            _r190_t0['set-width'](r4_WIDTH);
            r190_xn$setwidth$9Jrj(r4_WIDTH);
            r190_xn$assignunicode$7Hrq('N');
            r190_include(r4_capitalMarks);
            r190_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.24);
            r190_halftopstroke = r190_topstroke / 2;
            r190_include(r190_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r190_topstroke));
            r190_include(r190_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r190_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r190_include(r190_xn$createstroke$7Hrq()['start-from'](r4_SB + r190_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r190_topstroke, 0)['line-to'](r4_RIGHTSB - r190_topstroke - r190_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t94() {
            var r194_currentGlyph, r194_xn$setwidth$9Jrj, r194_xn$assignunicode$7Hrq, r194_xn$startfrom$1aao, r194_xn$lineto$5sIl, r194_xn$curveto$1aao, r194_xn$cubicto$1aao, r194_xn$putshapes$9Jrj, r194_xn$reverselast$3qIs, r194_include, r194_xn$createstroke$7Hrq, r194_xn$setanchor$9Jrj, r194_xn$dontexport$5sIl, r194_topstroke, r194_halftopstroke, _r194_t0, _r194_t1, _r194_t2, _r194_t3;
            _r194_t0 = this;
            r194_currentGlyph = _r194_t0;
            r194_xn$setwidth$9Jrj = _r194_t0['set-width']['bind'](_r194_t0);
            r194_xn$assignunicode$7Hrq = function _r194_t2(r195_code) {
                var r195_code, _r195_t0, _r195_t1;
                r194_currentGlyph['assign-unicode'](r195_code);
                return r4_unicodeGlyphs[r194_currentGlyph['unicode'][r194_currentGlyph['unicode']['length'] - 1]] = r194_currentGlyph;
            };
            r194_xn$startfrom$1aao = _r194_t0['start-from']['bind'](_r194_t0);
            r194_xn$lineto$5sIl = _r194_t0['line-to']['bind'](_r194_t0);
            r194_xn$curveto$1aao = _r194_t0['curve-to']['bind'](_r194_t0);
            r194_xn$cubicto$1aao = _r194_t0['cubic-to']['bind'](_r194_t0);
            r194_xn$putshapes$9Jrj = _r194_t0['put-shapes']['bind'](_r194_t0);
            r194_xn$reverselast$3qIs = _r194_t0['reverse-last']['bind'](_r194_t0);
            r194_include = _r194_t0['include']['bind'](_r194_t0);
            r194_xn$createstroke$7Hrq = _r194_t0['create-stroke']['bind'](_r194_t0);
            r194_xn$setanchor$9Jrj = _r194_t0['set-anchor']['bind'](_r194_t0);
            r194_xn$dontexport$5sIl = function _r194_t3() {
                var _r196_t0, _r196_t1;
                return r194_currentGlyph['dontExport'] = true;
            };
            _r194_t0['gizmo'] = r4_globalTransform;
            _r194_t0['set-width'](r4_WIDTH);
            r194_xn$setwidth$9Jrj(r4_WIDTH);
            r194_xn$assignunicode$7Hrq('M');
            r194_include(r4_capitalMarks);
            r194_topstroke = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.175);
            r194_halftopstroke = r194_topstroke / 2;
            r194_include(r194_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r194_topstroke));
            r194_include(r194_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r194_topstroke, 0));
            r194_include(r194_xn$createstroke$7Hrq()['start-from'](r4_SB + r194_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r194_topstroke, 0)['line-to'](r4_MIDDLE - r194_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r194_include(r194_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r194_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r194_topstroke, 0)['line-to'](r4_RIGHTSB - r194_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t95() {
            var r198_currentGlyph, r198_xn$setwidth$9Jrj, r198_xn$assignunicode$7Hrq, r198_xn$startfrom$1aao, r198_xn$lineto$5sIl, r198_xn$curveto$1aao, r198_xn$cubicto$1aao, r198_xn$putshapes$9Jrj, r198_xn$reverselast$3qIs, r198_include, r198_xn$createstroke$7Hrq, r198_xn$setanchor$9Jrj, r198_xn$dontexport$5sIl, _r198_t0, _r198_t1, _r198_t2, _r198_t3;
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
            r198_xn$dontexport$5sIl = function _r198_t3() {
                var _r200_t0, _r200_t1;
                return r198_currentGlyph['dontExport'] = true;
            };
            _r198_t0['gizmo'] = r4_globalTransform;
            _r198_t0['set-width'](r4_WIDTH);
            r198_xn$setwidth$9Jrj(r4_WIDTH);
            r198_xn$assignunicode$7Hrq('S');
            r198_include(r4_capitalMarks);
            r198_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r198_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r198_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t96() {
            var r202_currentGlyph, r202_xn$setwidth$9Jrj, r202_xn$assignunicode$7Hrq, r202_xn$startfrom$1aao, r202_xn$lineto$5sIl, r202_xn$curveto$1aao, r202_xn$cubicto$1aao, r202_xn$putshapes$9Jrj, r202_xn$reverselast$3qIs, r202_include, r202_xn$createstroke$7Hrq, r202_xn$setanchor$9Jrj, r202_xn$dontexport$5sIl, _r202_t0, _r202_t1, _r202_t2, _r202_t3;
            _r202_t0 = this;
            r202_currentGlyph = _r202_t0;
            r202_xn$setwidth$9Jrj = _r202_t0['set-width']['bind'](_r202_t0);
            r202_xn$assignunicode$7Hrq = function _r202_t2(r203_code) {
                var r203_code, _r203_t0, _r203_t1;
                r202_currentGlyph['assign-unicode'](r203_code);
                return r4_unicodeGlyphs[r202_currentGlyph['unicode'][r202_currentGlyph['unicode']['length'] - 1]] = r202_currentGlyph;
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
            r202_xn$dontexport$5sIl = function _r202_t3() {
                var _r204_t0, _r204_t1;
                return r202_currentGlyph['dontExport'] = true;
            };
            _r202_t0['gizmo'] = r4_globalTransform;
            _r202_t0['set-width'](r4_WIDTH);
            r202_xn$setwidth$9Jrj(r4_WIDTH);
            r202_xn$assignunicode$7Hrq('o');
            r202_include(r4_eMarks);
            r202_include(r202_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.left', function _r4_t97() {
            var r206_currentGlyph, r206_xn$setwidth$9Jrj, r206_xn$assignunicode$7Hrq, r206_xn$startfrom$1aao, r206_xn$lineto$5sIl, r206_xn$curveto$1aao, r206_xn$cubicto$1aao, r206_xn$putshapes$9Jrj, r206_xn$reverselast$3qIs, r206_include, r206_xn$createstroke$7Hrq, r206_xn$setanchor$9Jrj, r206_xn$dontexport$5sIl, _r206_t0, _r206_t1, _r206_t2, _r206_t3;
            _r206_t0 = this;
            r206_currentGlyph = _r206_t0;
            r206_xn$setwidth$9Jrj = _r206_t0['set-width']['bind'](_r206_t0);
            r206_xn$assignunicode$7Hrq = function _r206_t2(r207_code) {
                var r207_code, _r207_t0, _r207_t1;
                r206_currentGlyph['assign-unicode'](r207_code);
                return r4_unicodeGlyphs[r206_currentGlyph['unicode'][r206_currentGlyph['unicode']['length'] - 1]] = r206_currentGlyph;
            };
            r206_xn$startfrom$1aao = _r206_t0['start-from']['bind'](_r206_t0);
            r206_xn$lineto$5sIl = _r206_t0['line-to']['bind'](_r206_t0);
            r206_xn$curveto$1aao = _r206_t0['curve-to']['bind'](_r206_t0);
            r206_xn$cubicto$1aao = _r206_t0['cubic-to']['bind'](_r206_t0);
            r206_xn$putshapes$9Jrj = _r206_t0['put-shapes']['bind'](_r206_t0);
            r206_xn$reverselast$3qIs = _r206_t0['reverse-last']['bind'](_r206_t0);
            r206_include = _r206_t0['include']['bind'](_r206_t0);
            r206_xn$createstroke$7Hrq = _r206_t0['create-stroke']['bind'](_r206_t0);
            r206_xn$setanchor$9Jrj = _r206_t0['set-anchor']['bind'](_r206_t0);
            r206_xn$dontexport$5sIl = function _r206_t3() {
                var _r208_t0, _r208_t1;
                return r206_currentGlyph['dontExport'] = true;
            };
            _r206_t0['gizmo'] = r4_globalTransform;
            _r206_t0['set-width'](r4_WIDTH);
            r206_xn$dontexport$5sIl();
            r206_xn$setwidth$9Jrj(r4_WIDTH);
            r206_include(r206_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
            r206_include(r206_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o.right', function _r4_t98() {
            var r210_currentGlyph, r210_xn$setwidth$9Jrj, r210_xn$assignunicode$7Hrq, r210_xn$startfrom$1aao, r210_xn$lineto$5sIl, r210_xn$curveto$1aao, r210_xn$cubicto$1aao, r210_xn$putshapes$9Jrj, r210_xn$reverselast$3qIs, r210_include, r210_xn$createstroke$7Hrq, r210_xn$setanchor$9Jrj, r210_xn$dontexport$5sIl, _r210_t0, _r210_t1, _r210_t2, _r210_t3;
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
            r210_xn$dontexport$5sIl = function _r210_t3() {
                var _r212_t0, _r212_t1;
                return r210_currentGlyph['dontExport'] = true;
            };
            _r210_t0['gizmo'] = r4_globalTransform;
            _r210_t0['set-width'](r4_WIDTH);
            r210_xn$dontexport$5sIl();
            r210_xn$setwidth$9Jrj(r4_WIDTH);
            r210_include(r210_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r210_include(r210_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('p', function _r4_t99() {
            var r214_currentGlyph, r214_xn$setwidth$9Jrj, r214_xn$assignunicode$7Hrq, r214_xn$startfrom$1aao, r214_xn$lineto$5sIl, r214_xn$curveto$1aao, r214_xn$cubicto$1aao, r214_xn$putshapes$9Jrj, r214_xn$reverselast$3qIs, r214_include, r214_xn$createstroke$7Hrq, r214_xn$setanchor$9Jrj, r214_xn$dontexport$5sIl, _r214_t0, _r214_t1, _r214_t2, _r214_t3;
            _r214_t0 = this;
            r214_currentGlyph = _r214_t0;
            r214_xn$setwidth$9Jrj = _r214_t0['set-width']['bind'](_r214_t0);
            r214_xn$assignunicode$7Hrq = function _r214_t2(r215_code) {
                var r215_code, _r215_t0, _r215_t1;
                r214_currentGlyph['assign-unicode'](r215_code);
                return r4_unicodeGlyphs[r214_currentGlyph['unicode'][r214_currentGlyph['unicode']['length'] - 1]] = r214_currentGlyph;
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
            r214_xn$dontexport$5sIl = function _r214_t3() {
                var _r216_t0, _r216_t1;
                return r214_currentGlyph['dontExport'] = true;
            };
            _r214_t0['gizmo'] = r4_globalTransform;
            _r214_t0['set-width'](r4_WIDTH);
            r214_xn$setwidth$9Jrj(r4_WIDTH);
            r214_xn$assignunicode$7Hrq('p');
            r214_include(r4_eMarks);
            r214_include(r4_glyphs['o.left']);
            r214_include(r214_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t100() {
            var r218_currentGlyph, r218_xn$setwidth$9Jrj, r218_xn$assignunicode$7Hrq, r218_xn$startfrom$1aao, r218_xn$lineto$5sIl, r218_xn$curveto$1aao, r218_xn$cubicto$1aao, r218_xn$putshapes$9Jrj, r218_xn$reverselast$3qIs, r218_include, r218_xn$createstroke$7Hrq, r218_xn$setanchor$9Jrj, r218_xn$dontexport$5sIl, _r218_t0, _r218_t1, _r218_t2, _r218_t3;
            _r218_t0 = this;
            r218_currentGlyph = _r218_t0;
            r218_xn$setwidth$9Jrj = _r218_t0['set-width']['bind'](_r218_t0);
            r218_xn$assignunicode$7Hrq = function _r218_t2(r219_code) {
                var r219_code, _r219_t0, _r219_t1;
                r218_currentGlyph['assign-unicode'](r219_code);
                return r4_unicodeGlyphs[r218_currentGlyph['unicode'][r218_currentGlyph['unicode']['length'] - 1]] = r218_currentGlyph;
            };
            r218_xn$startfrom$1aao = _r218_t0['start-from']['bind'](_r218_t0);
            r218_xn$lineto$5sIl = _r218_t0['line-to']['bind'](_r218_t0);
            r218_xn$curveto$1aao = _r218_t0['curve-to']['bind'](_r218_t0);
            r218_xn$cubicto$1aao = _r218_t0['cubic-to']['bind'](_r218_t0);
            r218_xn$putshapes$9Jrj = _r218_t0['put-shapes']['bind'](_r218_t0);
            r218_xn$reverselast$3qIs = _r218_t0['reverse-last']['bind'](_r218_t0);
            r218_include = _r218_t0['include']['bind'](_r218_t0);
            r218_xn$createstroke$7Hrq = _r218_t0['create-stroke']['bind'](_r218_t0);
            r218_xn$setanchor$9Jrj = _r218_t0['set-anchor']['bind'](_r218_t0);
            r218_xn$dontexport$5sIl = function _r218_t3() {
                var _r220_t0, _r220_t1;
                return r218_currentGlyph['dontExport'] = true;
            };
            _r218_t0['gizmo'] = r4_globalTransform;
            _r218_t0['set-width'](r4_WIDTH);
            r218_xn$setwidth$9Jrj(r4_WIDTH);
            r218_xn$assignunicode$7Hrq('b');
            r218_include(r4_bMarks);
            r218_xn$putshapes$9Jrj(r4_glyphs['o.left']['contours']);
            r218_include(r218_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t101() {
            var r222_currentGlyph, r222_xn$setwidth$9Jrj, r222_xn$assignunicode$7Hrq, r222_xn$startfrom$1aao, r222_xn$lineto$5sIl, r222_xn$curveto$1aao, r222_xn$cubicto$1aao, r222_xn$putshapes$9Jrj, r222_xn$reverselast$3qIs, r222_include, r222_xn$createstroke$7Hrq, r222_xn$setanchor$9Jrj, r222_xn$dontexport$5sIl, _r222_t0, _r222_t1, _r222_t2, _r222_t3;
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
            r222_xn$dontexport$5sIl = function _r222_t3() {
                var _r224_t0, _r224_t1;
                return r222_currentGlyph['dontExport'] = true;
            };
            _r222_t0['gizmo'] = r4_globalTransform;
            _r222_t0['set-width'](r4_WIDTH);
            r222_xn$setwidth$9Jrj(r4_WIDTH);
            r222_xn$assignunicode$7Hrq('q');
            r222_include(r4_eMarks);
            r222_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r222_include(r222_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t102() {
            var r226_currentGlyph, r226_xn$setwidth$9Jrj, r226_xn$assignunicode$7Hrq, r226_xn$startfrom$1aao, r226_xn$lineto$5sIl, r226_xn$curveto$1aao, r226_xn$cubicto$1aao, r226_xn$putshapes$9Jrj, r226_xn$reverselast$3qIs, r226_include, r226_xn$createstroke$7Hrq, r226_xn$setanchor$9Jrj, r226_xn$dontexport$5sIl, _r226_t0, _r226_t1, _r226_t2, _r226_t3;
            _r226_t0 = this;
            r226_currentGlyph = _r226_t0;
            r226_xn$setwidth$9Jrj = _r226_t0['set-width']['bind'](_r226_t0);
            r226_xn$assignunicode$7Hrq = function _r226_t2(r227_code) {
                var r227_code, _r227_t0, _r227_t1;
                r226_currentGlyph['assign-unicode'](r227_code);
                return r4_unicodeGlyphs[r226_currentGlyph['unicode'][r226_currentGlyph['unicode']['length'] - 1]] = r226_currentGlyph;
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
            r226_xn$dontexport$5sIl = function _r226_t3() {
                var _r228_t0, _r228_t1;
                return r226_currentGlyph['dontExport'] = true;
            };
            _r226_t0['gizmo'] = r4_globalTransform;
            _r226_t0['set-width'](r4_WIDTH);
            r226_xn$setwidth$9Jrj(r4_WIDTH);
            r226_xn$assignunicode$7Hrq('d');
            r226_include(r4_bMarks);
            r226_xn$putshapes$9Jrj(r4_glyphs['o.right']['contours']);
            r226_include(r226_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t103() {
            var r230_currentGlyph, r230_xn$setwidth$9Jrj, r230_xn$assignunicode$7Hrq, r230_xn$startfrom$1aao, r230_xn$lineto$5sIl, r230_xn$curveto$1aao, r230_xn$cubicto$1aao, r230_xn$putshapes$9Jrj, r230_xn$reverselast$3qIs, r230_include, r230_xn$createstroke$7Hrq, r230_xn$setanchor$9Jrj, r230_xn$dontexport$5sIl, r230_gleftx, r230_grightx, r230_groundy, _r230_t0, _r230_t1, _r230_t2, _r230_t3;
            _r230_t0 = this;
            r230_currentGlyph = _r230_t0;
            r230_xn$setwidth$9Jrj = _r230_t0['set-width']['bind'](_r230_t0);
            r230_xn$assignunicode$7Hrq = function _r230_t2(r231_code) {
                var r231_code, _r231_t0, _r231_t1;
                r230_currentGlyph['assign-unicode'](r231_code);
                return r4_unicodeGlyphs[r230_currentGlyph['unicode'][r230_currentGlyph['unicode']['length'] - 1]] = r230_currentGlyph;
            };
            r230_xn$startfrom$1aao = _r230_t0['start-from']['bind'](_r230_t0);
            r230_xn$lineto$5sIl = _r230_t0['line-to']['bind'](_r230_t0);
            r230_xn$curveto$1aao = _r230_t0['curve-to']['bind'](_r230_t0);
            r230_xn$cubicto$1aao = _r230_t0['cubic-to']['bind'](_r230_t0);
            r230_xn$putshapes$9Jrj = _r230_t0['put-shapes']['bind'](_r230_t0);
            r230_xn$reverselast$3qIs = _r230_t0['reverse-last']['bind'](_r230_t0);
            r230_include = _r230_t0['include']['bind'](_r230_t0);
            r230_xn$createstroke$7Hrq = _r230_t0['create-stroke']['bind'](_r230_t0);
            r230_xn$setanchor$9Jrj = _r230_t0['set-anchor']['bind'](_r230_t0);
            r230_xn$dontexport$5sIl = function _r230_t3() {
                var _r232_t0, _r232_t1;
                return r230_currentGlyph['dontExport'] = true;
            };
            _r230_t0['gizmo'] = r4_globalTransform;
            _r230_t0['set-width'](r4_WIDTH);
            r230_xn$setwidth$9Jrj(r4_WIDTH);
            r230_xn$assignunicode$7Hrq('g');
            r230_include(r4_pMarks);
            r230_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r230_xn$reverselast$3qIs();
            r230_gleftx = r4_SB * 0.8 + r4_O;
            r230_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r230_groundy = r4_O - r4_DESCENDER * 0.6;
            r230_include(r230_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r230_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r230_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r230_groundy)['arc-hv-to'](r230_grightx, r0_mix(r4_DESCENDER + r4_O, r230_groundy, 0.53))['arc-vh-to'](r0_mix(r230_gleftx, r230_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r230_gleftx, r0_mix(r4_DESCENDER + r4_O, r230_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r230_groundy));
            r230_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r230_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r230_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r230_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t104() {
            var r234_currentGlyph, r234_xn$setwidth$9Jrj, r234_xn$assignunicode$7Hrq, r234_xn$startfrom$1aao, r234_xn$lineto$5sIl, r234_xn$curveto$1aao, r234_xn$cubicto$1aao, r234_xn$putshapes$9Jrj, r234_xn$reverselast$3qIs, r234_include, r234_xn$createstroke$7Hrq, r234_xn$setanchor$9Jrj, r234_xn$dontexport$5sIl, _r234_t0, _r234_t1, _r234_t2, _r234_t3;
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
            r234_xn$dontexport$5sIl = function _r234_t3() {
                var _r236_t0, _r236_t1;
                return r234_currentGlyph['dontExport'] = true;
            };
            _r234_t0['gizmo'] = r4_globalTransform;
            _r234_t0['set-width'](r4_WIDTH);
            r234_xn$setwidth$9Jrj(r4_WIDTH);
            r234_xn$assignunicode$7Hrq('c');
            r234_include(r4_eMarks);
            r234_include(r234_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t105() {
            var r238_currentGlyph, r238_xn$setwidth$9Jrj, r238_xn$assignunicode$7Hrq, r238_xn$startfrom$1aao, r238_xn$lineto$5sIl, r238_xn$curveto$1aao, r238_xn$cubicto$1aao, r238_xn$putshapes$9Jrj, r238_xn$reverselast$3qIs, r238_include, r238_xn$createstroke$7Hrq, r238_xn$setanchor$9Jrj, r238_xn$dontexport$5sIl, r238_barbottom, r238_hookx, r238_hookmiddle, _r238_t0, _r238_t1, _r238_t2, _r238_t3;
            _r238_t0 = this;
            r238_currentGlyph = _r238_t0;
            r238_xn$setwidth$9Jrj = _r238_t0['set-width']['bind'](_r238_t0);
            r238_xn$assignunicode$7Hrq = function _r238_t2(r239_code) {
                var r239_code, _r239_t0, _r239_t1;
                r238_currentGlyph['assign-unicode'](r239_code);
                return r4_unicodeGlyphs[r238_currentGlyph['unicode'][r238_currentGlyph['unicode']['length'] - 1]] = r238_currentGlyph;
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
            r238_xn$dontexport$5sIl = function _r238_t3() {
                var _r240_t0, _r240_t1;
                return r238_currentGlyph['dontExport'] = true;
            };
            _r238_t0['gizmo'] = r4_globalTransform;
            _r238_t0['set-width'](r4_WIDTH);
            r238_xn$setwidth$9Jrj(r4_WIDTH);
            r238_xn$dontexport$5sIl();
            r238_barbottom = r4_XH * r4_EBARPOS;
            r238_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r238_hookmiddle = r0_mix(r4_SB + r4_O, r238_hookx, 0.55);
            r238_include(r238_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r238_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r238_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r238_hookmiddle, r238_hookx, r4_KAPPA_HOOK), r4_O, r238_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r238_include(r238_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r238_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r238_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t106() {
            var r242_currentGlyph, r242_xn$setwidth$9Jrj, r242_xn$assignunicode$7Hrq, r242_xn$startfrom$1aao, r242_xn$lineto$5sIl, r242_xn$curveto$1aao, r242_xn$cubicto$1aao, r242_xn$putshapes$9Jrj, r242_xn$reverselast$3qIs, r242_include, r242_xn$createstroke$7Hrq, r242_xn$setanchor$9Jrj, r242_xn$dontexport$5sIl, r242_barbottom, _r242_t0, _r242_t1, _r242_t2, _r242_t3;
            _r242_t0 = this;
            r242_currentGlyph = _r242_t0;
            r242_xn$setwidth$9Jrj = _r242_t0['set-width']['bind'](_r242_t0);
            r242_xn$assignunicode$7Hrq = function _r242_t2(r243_code) {
                var r243_code, _r243_t0, _r243_t1;
                r242_currentGlyph['assign-unicode'](r243_code);
                return r4_unicodeGlyphs[r242_currentGlyph['unicode'][r242_currentGlyph['unicode']['length'] - 1]] = r242_currentGlyph;
            };
            r242_xn$startfrom$1aao = _r242_t0['start-from']['bind'](_r242_t0);
            r242_xn$lineto$5sIl = _r242_t0['line-to']['bind'](_r242_t0);
            r242_xn$curveto$1aao = _r242_t0['curve-to']['bind'](_r242_t0);
            r242_xn$cubicto$1aao = _r242_t0['cubic-to']['bind'](_r242_t0);
            r242_xn$putshapes$9Jrj = _r242_t0['put-shapes']['bind'](_r242_t0);
            r242_xn$reverselast$3qIs = _r242_t0['reverse-last']['bind'](_r242_t0);
            r242_include = _r242_t0['include']['bind'](_r242_t0);
            r242_xn$createstroke$7Hrq = _r242_t0['create-stroke']['bind'](_r242_t0);
            r242_xn$setanchor$9Jrj = _r242_t0['set-anchor']['bind'](_r242_t0);
            r242_xn$dontexport$5sIl = function _r242_t3() {
                var _r244_t0, _r244_t1;
                return r242_currentGlyph['dontExport'] = true;
            };
            _r242_t0['gizmo'] = r4_globalTransform;
            _r242_t0['set-width'](r4_WIDTH);
            r242_xn$setwidth$9Jrj(r4_WIDTH);
            r242_xn$dontexport$5sIl();
            r242_barbottom = r4_XH * (r4_BARPOS - 0.04);
            r242_include(r242_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r242_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t107() {
            var r246_currentGlyph, r246_xn$setwidth$9Jrj, r246_xn$assignunicode$7Hrq, r246_xn$startfrom$1aao, r246_xn$lineto$5sIl, r246_xn$curveto$1aao, r246_xn$cubicto$1aao, r246_xn$putshapes$9Jrj, r246_xn$reverselast$3qIs, r246_include, r246_xn$createstroke$7Hrq, r246_xn$setanchor$9Jrj, r246_xn$dontexport$5sIl, _r246_t0, _r246_t1, _r246_t2, _r246_t3;
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
            r246_xn$dontexport$5sIl = function _r246_t3() {
                var _r248_t0, _r248_t1;
                return r246_currentGlyph['dontExport'] = true;
            };
            _r246_t0['gizmo'] = r4_globalTransform;
            _r246_t0['set-width'](r4_WIDTH);
            r246_xn$setwidth$9Jrj(r4_WIDTH);
            r246_xn$assignunicode$7Hrq('e');
            r246_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r246_include(r4_glyphs['e.italic']);
            } else {
                r246_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t108() {
            var r250_currentGlyph, r250_xn$setwidth$9Jrj, r250_xn$assignunicode$7Hrq, r250_xn$startfrom$1aao, r250_xn$lineto$5sIl, r250_xn$curveto$1aao, r250_xn$cubicto$1aao, r250_xn$putshapes$9Jrj, r250_xn$reverselast$3qIs, r250_include, r250_xn$createstroke$7Hrq, r250_xn$setanchor$9Jrj, r250_xn$dontexport$5sIl, r250_center, r250_hookx, r250_turn, r250_smb, _r250_t0, _r250_t1, _r250_t2, _r250_t3;
            _r250_t0 = this;
            r250_currentGlyph = _r250_t0;
            r250_xn$setwidth$9Jrj = _r250_t0['set-width']['bind'](_r250_t0);
            r250_xn$assignunicode$7Hrq = function _r250_t2(r251_code) {
                var r251_code, _r251_t0, _r251_t1;
                r250_currentGlyph['assign-unicode'](r251_code);
                return r4_unicodeGlyphs[r250_currentGlyph['unicode'][r250_currentGlyph['unicode']['length'] - 1]] = r250_currentGlyph;
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
            r250_xn$dontexport$5sIl = function _r250_t3() {
                var _r252_t0, _r252_t1;
                return r250_currentGlyph['dontExport'] = true;
            };
            _r250_t0['gizmo'] = r4_globalTransform;
            _r250_t0['set-width'](r4_WIDTH);
            r250_xn$setwidth$9Jrj(r4_WIDTH);
            r250_xn$assignunicode$7Hrq('t');
            r250_include(r4_bMarks);
            r250_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r250_hookx = r250_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r250_turn = r0_mix(r250_center, r250_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r250_smb = (r250_turn - r250_center) * 1.1;
            r250_include(r250_xn$createstroke$7Hrq()['start-from'](r250_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r250_center, r250_smb)['arc-vh-to'](r250_turn, r4_O)['curve-to'](r250_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r250_hookx - r250_turn), r4_O, r250_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r250_include(r250_xn$createstroke$7Hrq()['start-from'](r250_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r250_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t109() {
            var r254_currentGlyph, r254_xn$setwidth$9Jrj, r254_xn$assignunicode$7Hrq, r254_xn$startfrom$1aao, r254_xn$lineto$5sIl, r254_xn$curveto$1aao, r254_xn$cubicto$1aao, r254_xn$putshapes$9Jrj, r254_xn$reverselast$3qIs, r254_include, r254_xn$createstroke$7Hrq, r254_xn$setanchor$9Jrj, r254_xn$dontexport$5sIl, r254_bartop, r254_lowmiddle, r254_barsmooth, _r254_t0, _r254_t1, _r254_t2, _r254_t3;
            _r254_t0 = this;
            r254_currentGlyph = _r254_t0;
            r254_xn$setwidth$9Jrj = _r254_t0['set-width']['bind'](_r254_t0);
            r254_xn$assignunicode$7Hrq = function _r254_t2(r255_code) {
                var r255_code, _r255_t0, _r255_t1;
                r254_currentGlyph['assign-unicode'](r255_code);
                return r4_unicodeGlyphs[r254_currentGlyph['unicode'][r254_currentGlyph['unicode']['length'] - 1]] = r254_currentGlyph;
            };
            r254_xn$startfrom$1aao = _r254_t0['start-from']['bind'](_r254_t0);
            r254_xn$lineto$5sIl = _r254_t0['line-to']['bind'](_r254_t0);
            r254_xn$curveto$1aao = _r254_t0['curve-to']['bind'](_r254_t0);
            r254_xn$cubicto$1aao = _r254_t0['cubic-to']['bind'](_r254_t0);
            r254_xn$putshapes$9Jrj = _r254_t0['put-shapes']['bind'](_r254_t0);
            r254_xn$reverselast$3qIs = _r254_t0['reverse-last']['bind'](_r254_t0);
            r254_include = _r254_t0['include']['bind'](_r254_t0);
            r254_xn$createstroke$7Hrq = _r254_t0['create-stroke']['bind'](_r254_t0);
            r254_xn$setanchor$9Jrj = _r254_t0['set-anchor']['bind'](_r254_t0);
            r254_xn$dontexport$5sIl = function _r254_t3() {
                var _r256_t0, _r256_t1;
                return r254_currentGlyph['dontExport'] = true;
            };
            _r254_t0['gizmo'] = r4_globalTransform;
            _r254_t0['set-width'](r4_WIDTH);
            r254_xn$setwidth$9Jrj(r4_WIDTH);
            r254_xn$dontexport$5sIl();
            r254_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r254_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r254_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r254_include(r254_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r254_include(r254_xn$createstroke$7Hrq()['start-from'](r254_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r254_bartop * 0.45)['arc-vh-to'](r254_barsmooth, r254_bartop)['line-to'](r4_RIGHTSB, r254_bartop)['heads-to'](r4_RIGHTWARD));
            r254_include(r254_xn$createstroke$7Hrq()['start-from'](r254_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t110() {
            var r258_currentGlyph, r258_xn$setwidth$9Jrj, r258_xn$assignunicode$7Hrq, r258_xn$startfrom$1aao, r258_xn$lineto$5sIl, r258_xn$curveto$1aao, r258_xn$cubicto$1aao, r258_xn$putshapes$9Jrj, r258_xn$reverselast$3qIs, r258_include, r258_xn$createstroke$7Hrq, r258_xn$setanchor$9Jrj, r258_xn$dontexport$5sIl, _r258_t0, _r258_t1, _r258_t2, _r258_t3;
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
            r258_xn$dontexport$5sIl = function _r258_t3() {
                var _r260_t0, _r260_t1;
                return r258_currentGlyph['dontExport'] = true;
            };
            _r258_t0['gizmo'] = r4_globalTransform;
            _r258_t0['set-width'](r4_WIDTH);
            r258_xn$setwidth$9Jrj(r4_WIDTH);
            r258_xn$dontexport$5sIl();
            r258_include(r4_glyphs['o.right']);
            r258_include(r258_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t111() {
            var r262_currentGlyph, r262_xn$setwidth$9Jrj, r262_xn$assignunicode$7Hrq, r262_xn$startfrom$1aao, r262_xn$lineto$5sIl, r262_xn$curveto$1aao, r262_xn$cubicto$1aao, r262_xn$putshapes$9Jrj, r262_xn$reverselast$3qIs, r262_include, r262_xn$createstroke$7Hrq, r262_xn$setanchor$9Jrj, r262_xn$dontexport$5sIl, _r262_t0, _r262_t1, _r262_t2, _r262_t3;
            _r262_t0 = this;
            r262_currentGlyph = _r262_t0;
            r262_xn$setwidth$9Jrj = _r262_t0['set-width']['bind'](_r262_t0);
            r262_xn$assignunicode$7Hrq = function _r262_t2(r263_code) {
                var r263_code, _r263_t0, _r263_t1;
                r262_currentGlyph['assign-unicode'](r263_code);
                return r4_unicodeGlyphs[r262_currentGlyph['unicode'][r262_currentGlyph['unicode']['length'] - 1]] = r262_currentGlyph;
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
            r262_xn$dontexport$5sIl = function _r262_t3() {
                var _r264_t0, _r264_t1;
                return r262_currentGlyph['dontExport'] = true;
            };
            _r262_t0['gizmo'] = r4_globalTransform;
            _r262_t0['set-width'](r4_WIDTH);
            r262_xn$setwidth$9Jrj(r4_WIDTH);
            r262_xn$assignunicode$7Hrq('a');
            r262_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r262_include(r4_glyphs['a.italic']);
            } else {
                r262_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t112() {
            var r266_currentGlyph, r266_xn$setwidth$9Jrj, r266_xn$assignunicode$7Hrq, r266_xn$startfrom$1aao, r266_xn$lineto$5sIl, r266_xn$curveto$1aao, r266_xn$cubicto$1aao, r266_xn$putshapes$9Jrj, r266_xn$reverselast$3qIs, r266_include, r266_xn$createstroke$7Hrq, r266_xn$setanchor$9Jrj, r266_xn$dontexport$5sIl, _r266_t0, _r266_t1, _r266_t2, _r266_t3;
            _r266_t0 = this;
            r266_currentGlyph = _r266_t0;
            r266_xn$setwidth$9Jrj = _r266_t0['set-width']['bind'](_r266_t0);
            r266_xn$assignunicode$7Hrq = function _r266_t2(r267_code) {
                var r267_code, _r267_t0, _r267_t1;
                r266_currentGlyph['assign-unicode'](r267_code);
                return r4_unicodeGlyphs[r266_currentGlyph['unicode'][r266_currentGlyph['unicode']['length'] - 1]] = r266_currentGlyph;
            };
            r266_xn$startfrom$1aao = _r266_t0['start-from']['bind'](_r266_t0);
            r266_xn$lineto$5sIl = _r266_t0['line-to']['bind'](_r266_t0);
            r266_xn$curveto$1aao = _r266_t0['curve-to']['bind'](_r266_t0);
            r266_xn$cubicto$1aao = _r266_t0['cubic-to']['bind'](_r266_t0);
            r266_xn$putshapes$9Jrj = _r266_t0['put-shapes']['bind'](_r266_t0);
            r266_xn$reverselast$3qIs = _r266_t0['reverse-last']['bind'](_r266_t0);
            r266_include = _r266_t0['include']['bind'](_r266_t0);
            r266_xn$createstroke$7Hrq = _r266_t0['create-stroke']['bind'](_r266_t0);
            r266_xn$setanchor$9Jrj = _r266_t0['set-anchor']['bind'](_r266_t0);
            r266_xn$dontexport$5sIl = function _r266_t3() {
                var _r268_t0, _r268_t1;
                return r266_currentGlyph['dontExport'] = true;
            };
            _r266_t0['gizmo'] = r4_globalTransform;
            _r266_t0['set-width'](r4_WIDTH);
            r266_xn$setwidth$9Jrj(r4_WIDTH);
            r266_xn$assignunicode$7Hrq('u');
            r266_include(r4_eMarks);
            r266_include(r266_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r266_include(r266_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r266_include(r266_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t113() {
            var r270_currentGlyph, r270_xn$setwidth$9Jrj, r270_xn$assignunicode$7Hrq, r270_xn$startfrom$1aao, r270_xn$lineto$5sIl, r270_xn$curveto$1aao, r270_xn$cubicto$1aao, r270_xn$putshapes$9Jrj, r270_xn$reverselast$3qIs, r270_include, r270_xn$createstroke$7Hrq, r270_xn$setanchor$9Jrj, r270_xn$dontexport$5sIl, _r270_t0, _r270_t1, _r270_t2, _r270_t3;
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
            r270_xn$dontexport$5sIl = function _r270_t3() {
                var _r272_t0, _r272_t1;
                return r270_currentGlyph['dontExport'] = true;
            };
            _r270_t0['gizmo'] = r4_globalTransform;
            _r270_t0['set-width'](r4_WIDTH);
            r270_xn$setwidth$9Jrj(r4_WIDTH);
            r270_xn$assignunicode$7Hrq('n');
            r270_include(r4_eMarks);
            r270_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r270_include(r270_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t114() {
            var r274_currentGlyph, r274_xn$setwidth$9Jrj, r274_xn$assignunicode$7Hrq, r274_xn$startfrom$1aao, r274_xn$lineto$5sIl, r274_xn$curveto$1aao, r274_xn$cubicto$1aao, r274_xn$putshapes$9Jrj, r274_xn$reverselast$3qIs, r274_include, r274_xn$createstroke$7Hrq, r274_xn$setanchor$9Jrj, r274_xn$dontexport$5sIl, _r274_t0, _r274_t1, _r274_t2, _r274_t3;
            _r274_t0 = this;
            r274_currentGlyph = _r274_t0;
            r274_xn$setwidth$9Jrj = _r274_t0['set-width']['bind'](_r274_t0);
            r274_xn$assignunicode$7Hrq = function _r274_t2(r275_code) {
                var r275_code, _r275_t0, _r275_t1;
                r274_currentGlyph['assign-unicode'](r275_code);
                return r4_unicodeGlyphs[r274_currentGlyph['unicode'][r274_currentGlyph['unicode']['length'] - 1]] = r274_currentGlyph;
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
            r274_xn$dontexport$5sIl = function _r274_t3() {
                var _r276_t0, _r276_t1;
                return r274_currentGlyph['dontExport'] = true;
            };
            _r274_t0['gizmo'] = r4_globalTransform;
            _r274_t0['set-width'](r4_WIDTH);
            r274_xn$setwidth$9Jrj(r4_WIDTH);
            r274_xn$assignunicode$7Hrq('h');
            r274_include(r4_bMarks);
            r274_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r274_include(r274_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t115() {
            var r278_currentGlyph, r278_xn$setwidth$9Jrj, r278_xn$assignunicode$7Hrq, r278_xn$startfrom$1aao, r278_xn$lineto$5sIl, r278_xn$curveto$1aao, r278_xn$cubicto$1aao, r278_xn$putshapes$9Jrj, r278_xn$reverselast$3qIs, r278_include, r278_xn$createstroke$7Hrq, r278_xn$setanchor$9Jrj, r278_xn$dontexport$5sIl, r278_sw, r278_m1, r278_m2, _r278_t0, _r278_t1, _r278_t2, _r278_t3;
            _r278_t0 = this;
            r278_currentGlyph = _r278_t0;
            r278_xn$setwidth$9Jrj = _r278_t0['set-width']['bind'](_r278_t0);
            r278_xn$assignunicode$7Hrq = function _r278_t2(r279_code) {
                var r279_code, _r279_t0, _r279_t1;
                r278_currentGlyph['assign-unicode'](r279_code);
                return r4_unicodeGlyphs[r278_currentGlyph['unicode'][r278_currentGlyph['unicode']['length'] - 1]] = r278_currentGlyph;
            };
            r278_xn$startfrom$1aao = _r278_t0['start-from']['bind'](_r278_t0);
            r278_xn$lineto$5sIl = _r278_t0['line-to']['bind'](_r278_t0);
            r278_xn$curveto$1aao = _r278_t0['curve-to']['bind'](_r278_t0);
            r278_xn$cubicto$1aao = _r278_t0['cubic-to']['bind'](_r278_t0);
            r278_xn$putshapes$9Jrj = _r278_t0['put-shapes']['bind'](_r278_t0);
            r278_xn$reverselast$3qIs = _r278_t0['reverse-last']['bind'](_r278_t0);
            r278_include = _r278_t0['include']['bind'](_r278_t0);
            r278_xn$createstroke$7Hrq = _r278_t0['create-stroke']['bind'](_r278_t0);
            r278_xn$setanchor$9Jrj = _r278_t0['set-anchor']['bind'](_r278_t0);
            r278_xn$dontexport$5sIl = function _r278_t3() {
                var _r280_t0, _r280_t1;
                return r278_currentGlyph['dontExport'] = true;
            };
            _r278_t0['gizmo'] = r4_globalTransform;
            _r278_t0['set-width'](r4_WIDTH);
            r278_xn$setwidth$9Jrj(r4_WIDTH);
            r278_xn$assignunicode$7Hrq('m');
            r278_include(r4_eMarks);
            r278_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.26);
            r278_m1 = (r4_MIDDLE + r4_SB + r278_sw * 0.25) / 2;
            r278_m2 = r278_m1 + (r4_MIDDLE - r278_sw / 2 - r4_SB);
            r278_include(r278_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r278_sw / 2, 0)['set-width'](0, r278_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r278_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r278_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r278_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r278_sw * 0.4));
            r278_include(r278_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r278_sw - r4_O, 0)['set-width'](0, r278_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r278_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r278_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r278_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r278_sw * 0.4));
            r278_include(r278_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r278_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t116() {
            var r282_currentGlyph, r282_xn$setwidth$9Jrj, r282_xn$assignunicode$7Hrq, r282_xn$startfrom$1aao, r282_xn$lineto$5sIl, r282_xn$curveto$1aao, r282_xn$cubicto$1aao, r282_xn$putshapes$9Jrj, r282_xn$reverselast$3qIs, r282_include, r282_xn$createstroke$7Hrq, r282_xn$setanchor$9Jrj, r282_xn$dontexport$5sIl, _r282_t0, _r282_t1, _r282_t2, _r282_t3;
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
            r282_xn$dontexport$5sIl = function _r282_t3() {
                var _r284_t0, _r284_t1;
                return r282_currentGlyph['dontExport'] = true;
            };
            _r282_t0['gizmo'] = r4_globalTransform;
            _r282_t0['set-width'](r4_WIDTH);
            r282_xn$dontexport$5sIl();
            r282_include(r4_eMarks);
            r282_include(r282_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t117() {
            var r286_currentGlyph, r286_xn$setwidth$9Jrj, r286_xn$assignunicode$7Hrq, r286_xn$startfrom$1aao, r286_xn$lineto$5sIl, r286_xn$curveto$1aao, r286_xn$cubicto$1aao, r286_xn$putshapes$9Jrj, r286_xn$reverselast$3qIs, r286_include, r286_xn$createstroke$7Hrq, r286_xn$setanchor$9Jrj, r286_xn$dontexport$5sIl, _r286_t0, _r286_t1, _r286_t2, _r286_t3;
            _r286_t0 = this;
            r286_currentGlyph = _r286_t0;
            r286_xn$setwidth$9Jrj = _r286_t0['set-width']['bind'](_r286_t0);
            r286_xn$assignunicode$7Hrq = function _r286_t2(r287_code) {
                var r287_code, _r287_t0, _r287_t1;
                r286_currentGlyph['assign-unicode'](r287_code);
                return r4_unicodeGlyphs[r286_currentGlyph['unicode'][r286_currentGlyph['unicode']['length'] - 1]] = r286_currentGlyph;
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
            r286_xn$dontexport$5sIl = function _r286_t3() {
                var _r288_t0, _r288_t1;
                return r286_currentGlyph['dontExport'] = true;
            };
            _r286_t0['gizmo'] = r4_globalTransform;
            _r286_t0['set-width'](r4_WIDTH);
            r286_xn$dontexport$5sIl();
            r286_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r286_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t118() {
            var r290_currentGlyph, r290_xn$setwidth$9Jrj, r290_xn$assignunicode$7Hrq, r290_xn$startfrom$1aao, r290_xn$lineto$5sIl, r290_xn$curveto$1aao, r290_xn$cubicto$1aao, r290_xn$putshapes$9Jrj, r290_xn$reverselast$3qIs, r290_include, r290_xn$createstroke$7Hrq, r290_xn$setanchor$9Jrj, r290_xn$dontexport$5sIl, _r290_t0, _r290_t1, _r290_t2, _r290_t3;
            _r290_t0 = this;
            r290_currentGlyph = _r290_t0;
            r290_xn$setwidth$9Jrj = _r290_t0['set-width']['bind'](_r290_t0);
            r290_xn$assignunicode$7Hrq = function _r290_t2(r291_code) {
                var r291_code, _r291_t0, _r291_t1;
                r290_currentGlyph['assign-unicode'](r291_code);
                return r4_unicodeGlyphs[r290_currentGlyph['unicode'][r290_currentGlyph['unicode']['length'] - 1]] = r290_currentGlyph;
            };
            r290_xn$startfrom$1aao = _r290_t0['start-from']['bind'](_r290_t0);
            r290_xn$lineto$5sIl = _r290_t0['line-to']['bind'](_r290_t0);
            r290_xn$curveto$1aao = _r290_t0['curve-to']['bind'](_r290_t0);
            r290_xn$cubicto$1aao = _r290_t0['cubic-to']['bind'](_r290_t0);
            r290_xn$putshapes$9Jrj = _r290_t0['put-shapes']['bind'](_r290_t0);
            r290_xn$reverselast$3qIs = _r290_t0['reverse-last']['bind'](_r290_t0);
            r290_include = _r290_t0['include']['bind'](_r290_t0);
            r290_xn$createstroke$7Hrq = _r290_t0['create-stroke']['bind'](_r290_t0);
            r290_xn$setanchor$9Jrj = _r290_t0['set-anchor']['bind'](_r290_t0);
            r290_xn$dontexport$5sIl = function _r290_t3() {
                var _r292_t0, _r292_t1;
                return r290_currentGlyph['dontExport'] = true;
            };
            _r290_t0['gizmo'] = r4_globalTransform;
            _r290_t0['set-width'](r4_WIDTH);
            r290_xn$dontexport$5sIl();
            r290_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r290_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t119() {
            var r294_currentGlyph, r294_xn$setwidth$9Jrj, r294_xn$assignunicode$7Hrq, r294_xn$startfrom$1aao, r294_xn$lineto$5sIl, r294_xn$curveto$1aao, r294_xn$cubicto$1aao, r294_xn$putshapes$9Jrj, r294_xn$reverselast$3qIs, r294_include, r294_xn$createstroke$7Hrq, r294_xn$setanchor$9Jrj, r294_xn$dontexport$5sIl, r294_balance, _r294_t0, _r294_t1, _r294_t2, _r294_t3;
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
            r294_xn$dontexport$5sIl = function _r294_t3() {
                var _r296_t0, _r296_t1;
                return r294_currentGlyph['dontExport'] = true;
            };
            _r294_t0['gizmo'] = r4_globalTransform;
            _r294_t0['set-width'](r4_WIDTH);
            r294_xn$dontexport$5sIl();
            r294_include(r4_eMarks);
            r294_balance = r4_ILBALANCE;
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r294_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r294_balance, r4_XH)['heads-to'](r4_UPWARD));
            r294_include(r4_leftwardTopSerif(r4_MIDDLE + r294_balance, r4_XH, r4_LONGJUT - r294_balance));
            r294_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r294_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t120() {
            var r298_currentGlyph, r298_xn$setwidth$9Jrj, r298_xn$assignunicode$7Hrq, r298_xn$startfrom$1aao, r298_xn$lineto$5sIl, r298_xn$curveto$1aao, r298_xn$cubicto$1aao, r298_xn$putshapes$9Jrj, r298_xn$reverselast$3qIs, r298_include, r298_xn$createstroke$7Hrq, r298_xn$setanchor$9Jrj, r298_xn$dontexport$5sIl, _r298_t0, _r298_t1, _r298_t2, _r298_t3;
            _r298_t0 = this;
            r298_currentGlyph = _r298_t0;
            r298_xn$setwidth$9Jrj = _r298_t0['set-width']['bind'](_r298_t0);
            r298_xn$assignunicode$7Hrq = function _r298_t2(r299_code) {
                var r299_code, _r299_t0, _r299_t1;
                r298_currentGlyph['assign-unicode'](r299_code);
                return r4_unicodeGlyphs[r298_currentGlyph['unicode'][r298_currentGlyph['unicode']['length'] - 1]] = r298_currentGlyph;
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
            r298_xn$dontexport$5sIl = function _r298_t3() {
                var _r300_t0, _r300_t1;
                return r298_currentGlyph['dontExport'] = true;
            };
            _r298_t0['gizmo'] = r4_globalTransform;
            _r298_t0['set-width'](r4_WIDTH);
            r298_xn$setwidth$9Jrj(r4_WIDTH);
            r298_xn$assignunicode$7Hrq('i');
            r298_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r298_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t121() {
            var r302_currentGlyph, r302_xn$setwidth$9Jrj, r302_xn$assignunicode$7Hrq, r302_xn$startfrom$1aao, r302_xn$lineto$5sIl, r302_xn$curveto$1aao, r302_xn$cubicto$1aao, r302_xn$putshapes$9Jrj, r302_xn$reverselast$3qIs, r302_include, r302_xn$createstroke$7Hrq, r302_xn$setanchor$9Jrj, r302_xn$dontexport$5sIl, _r302_t0, _r302_t1, _r302_t2, _r302_t3;
            _r302_t0 = this;
            r302_currentGlyph = _r302_t0;
            r302_xn$setwidth$9Jrj = _r302_t0['set-width']['bind'](_r302_t0);
            r302_xn$assignunicode$7Hrq = function _r302_t2(r303_code) {
                var r303_code, _r303_t0, _r303_t1;
                r302_currentGlyph['assign-unicode'](r303_code);
                return r4_unicodeGlyphs[r302_currentGlyph['unicode'][r302_currentGlyph['unicode']['length'] - 1]] = r302_currentGlyph;
            };
            r302_xn$startfrom$1aao = _r302_t0['start-from']['bind'](_r302_t0);
            r302_xn$lineto$5sIl = _r302_t0['line-to']['bind'](_r302_t0);
            r302_xn$curveto$1aao = _r302_t0['curve-to']['bind'](_r302_t0);
            r302_xn$cubicto$1aao = _r302_t0['cubic-to']['bind'](_r302_t0);
            r302_xn$putshapes$9Jrj = _r302_t0['put-shapes']['bind'](_r302_t0);
            r302_xn$reverselast$3qIs = _r302_t0['reverse-last']['bind'](_r302_t0);
            r302_include = _r302_t0['include']['bind'](_r302_t0);
            r302_xn$createstroke$7Hrq = _r302_t0['create-stroke']['bind'](_r302_t0);
            r302_xn$setanchor$9Jrj = _r302_t0['set-anchor']['bind'](_r302_t0);
            r302_xn$dontexport$5sIl = function _r302_t3() {
                var _r304_t0, _r304_t1;
                return r302_currentGlyph['dontExport'] = true;
            };
            _r302_t0['gizmo'] = r4_globalTransform;
            _r302_t0['set-width'](r4_WIDTH);
            r302_xn$dontexport$5sIl();
            r302_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r302_include(r302_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t122() {
            var r306_currentGlyph, r306_xn$setwidth$9Jrj, r306_xn$assignunicode$7Hrq, r306_xn$startfrom$1aao, r306_xn$lineto$5sIl, r306_xn$curveto$1aao, r306_xn$cubicto$1aao, r306_xn$putshapes$9Jrj, r306_xn$reverselast$3qIs, r306_include, r306_xn$createstroke$7Hrq, r306_xn$setanchor$9Jrj, r306_xn$dontexport$5sIl, _r306_t0, _r306_t1, _r306_t2, _r306_t3;
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
            r306_xn$dontexport$5sIl = function _r306_t3() {
                var _r308_t0, _r308_t1;
                return r306_currentGlyph['dontExport'] = true;
            };
            _r306_t0['gizmo'] = r4_globalTransform;
            _r306_t0['set-width'](r4_WIDTH);
            r306_xn$dontexport$5sIl();
            r306_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r306_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t123() {
            var r310_currentGlyph, r310_xn$setwidth$9Jrj, r310_xn$assignunicode$7Hrq, r310_xn$startfrom$1aao, r310_xn$lineto$5sIl, r310_xn$curveto$1aao, r310_xn$cubicto$1aao, r310_xn$putshapes$9Jrj, r310_xn$reverselast$3qIs, r310_include, r310_xn$createstroke$7Hrq, r310_xn$setanchor$9Jrj, r310_xn$dontexport$5sIl, _r310_t0, _r310_t1, _r310_t2, _r310_t3;
            _r310_t0 = this;
            r310_currentGlyph = _r310_t0;
            r310_xn$setwidth$9Jrj = _r310_t0['set-width']['bind'](_r310_t0);
            r310_xn$assignunicode$7Hrq = function _r310_t2(r311_code) {
                var r311_code, _r311_t0, _r311_t1;
                r310_currentGlyph['assign-unicode'](r311_code);
                return r4_unicodeGlyphs[r310_currentGlyph['unicode'][r310_currentGlyph['unicode']['length'] - 1]] = r310_currentGlyph;
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
            r310_xn$dontexport$5sIl = function _r310_t3() {
                var _r312_t0, _r312_t1;
                return r310_currentGlyph['dontExport'] = true;
            };
            _r310_t0['gizmo'] = r4_globalTransform;
            _r310_t0['set-width'](r4_WIDTH);
            r310_xn$setwidth$9Jrj(r4_WIDTH);
            r310_xn$assignunicode$7Hrq('j');
            r310_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r310_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t124() {
            var r314_currentGlyph, r314_xn$setwidth$9Jrj, r314_xn$assignunicode$7Hrq, r314_xn$startfrom$1aao, r314_xn$lineto$5sIl, r314_xn$curveto$1aao, r314_xn$cubicto$1aao, r314_xn$putshapes$9Jrj, r314_xn$reverselast$3qIs, r314_include, r314_xn$createstroke$7Hrq, r314_xn$setanchor$9Jrj, r314_xn$dontexport$5sIl, _r314_t0, _r314_t1, _r314_t2, _r314_t3;
            _r314_t0 = this;
            r314_currentGlyph = _r314_t0;
            r314_xn$setwidth$9Jrj = _r314_t0['set-width']['bind'](_r314_t0);
            r314_xn$assignunicode$7Hrq = function _r314_t2(r315_code) {
                var r315_code, _r315_t0, _r315_t1;
                r314_currentGlyph['assign-unicode'](r315_code);
                return r4_unicodeGlyphs[r314_currentGlyph['unicode'][r314_currentGlyph['unicode']['length'] - 1]] = r314_currentGlyph;
            };
            r314_xn$startfrom$1aao = _r314_t0['start-from']['bind'](_r314_t0);
            r314_xn$lineto$5sIl = _r314_t0['line-to']['bind'](_r314_t0);
            r314_xn$curveto$1aao = _r314_t0['curve-to']['bind'](_r314_t0);
            r314_xn$cubicto$1aao = _r314_t0['cubic-to']['bind'](_r314_t0);
            r314_xn$putshapes$9Jrj = _r314_t0['put-shapes']['bind'](_r314_t0);
            r314_xn$reverselast$3qIs = _r314_t0['reverse-last']['bind'](_r314_t0);
            r314_include = _r314_t0['include']['bind'](_r314_t0);
            r314_xn$createstroke$7Hrq = _r314_t0['create-stroke']['bind'](_r314_t0);
            r314_xn$setanchor$9Jrj = _r314_t0['set-anchor']['bind'](_r314_t0);
            r314_xn$dontexport$5sIl = function _r314_t3() {
                var _r316_t0, _r316_t1;
                return r314_currentGlyph['dontExport'] = true;
            };
            _r314_t0['gizmo'] = r4_globalTransform;
            _r314_t0['set-width'](r4_WIDTH);
            r314_include(r4_bMarks);
            r314_xn$dontexport$5sIl();
            r314_include(r314_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t125() {
            var r318_currentGlyph, r318_xn$setwidth$9Jrj, r318_xn$assignunicode$7Hrq, r318_xn$startfrom$1aao, r318_xn$lineto$5sIl, r318_xn$curveto$1aao, r318_xn$cubicto$1aao, r318_xn$putshapes$9Jrj, r318_xn$reverselast$3qIs, r318_include, r318_xn$createstroke$7Hrq, r318_xn$setanchor$9Jrj, r318_xn$dontexport$5sIl, _r318_t0, _r318_t1, _r318_t2, _r318_t3;
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
            r318_xn$dontexport$5sIl = function _r318_t3() {
                var _r320_t0, _r320_t1;
                return r318_currentGlyph['dontExport'] = true;
            };
            _r318_t0['gizmo'] = r4_globalTransform;
            _r318_t0['set-width'](r4_WIDTH);
            r318_include(r4_bMarks);
            r318_xn$dontexport$5sIl();
            r318_include(r4_glyphs['l.straight']);
            r318_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t126() {
            var r322_currentGlyph, r322_xn$setwidth$9Jrj, r322_xn$assignunicode$7Hrq, r322_xn$startfrom$1aao, r322_xn$lineto$5sIl, r322_xn$curveto$1aao, r322_xn$cubicto$1aao, r322_xn$putshapes$9Jrj, r322_xn$reverselast$3qIs, r322_include, r322_xn$createstroke$7Hrq, r322_xn$setanchor$9Jrj, r322_xn$dontexport$5sIl, _r322_t0, _r322_t1, _r322_t2, _r322_t3;
            _r322_t0 = this;
            r322_currentGlyph = _r322_t0;
            r322_xn$setwidth$9Jrj = _r322_t0['set-width']['bind'](_r322_t0);
            r322_xn$assignunicode$7Hrq = function _r322_t2(r323_code) {
                var r323_code, _r323_t0, _r323_t1;
                r322_currentGlyph['assign-unicode'](r323_code);
                return r4_unicodeGlyphs[r322_currentGlyph['unicode'][r322_currentGlyph['unicode']['length'] - 1]] = r322_currentGlyph;
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
            r322_xn$dontexport$5sIl = function _r322_t3() {
                var _r324_t0, _r324_t1;
                return r322_currentGlyph['dontExport'] = true;
            };
            _r322_t0['gizmo'] = r4_globalTransform;
            _r322_t0['set-width'](r4_WIDTH);
            r322_include(r4_bMarks);
            r322_xn$dontexport$5sIl();
            r322_include(r4_glyphs['l.hooky']);
            r322_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t127() {
            var r326_currentGlyph, r326_xn$setwidth$9Jrj, r326_xn$assignunicode$7Hrq, r326_xn$startfrom$1aao, r326_xn$lineto$5sIl, r326_xn$curveto$1aao, r326_xn$cubicto$1aao, r326_xn$putshapes$9Jrj, r326_xn$reverselast$3qIs, r326_include, r326_xn$createstroke$7Hrq, r326_xn$setanchor$9Jrj, r326_xn$dontexport$5sIl, r326_balance, _r326_t0, _r326_t1, _r326_t2, _r326_t3;
            _r326_t0 = this;
            r326_currentGlyph = _r326_t0;
            r326_xn$setwidth$9Jrj = _r326_t0['set-width']['bind'](_r326_t0);
            r326_xn$assignunicode$7Hrq = function _r326_t2(r327_code) {
                var r327_code, _r327_t0, _r327_t1;
                r326_currentGlyph['assign-unicode'](r327_code);
                return r4_unicodeGlyphs[r326_currentGlyph['unicode'][r326_currentGlyph['unicode']['length'] - 1]] = r326_currentGlyph;
            };
            r326_xn$startfrom$1aao = _r326_t0['start-from']['bind'](_r326_t0);
            r326_xn$lineto$5sIl = _r326_t0['line-to']['bind'](_r326_t0);
            r326_xn$curveto$1aao = _r326_t0['curve-to']['bind'](_r326_t0);
            r326_xn$cubicto$1aao = _r326_t0['cubic-to']['bind'](_r326_t0);
            r326_xn$putshapes$9Jrj = _r326_t0['put-shapes']['bind'](_r326_t0);
            r326_xn$reverselast$3qIs = _r326_t0['reverse-last']['bind'](_r326_t0);
            r326_include = _r326_t0['include']['bind'](_r326_t0);
            r326_xn$createstroke$7Hrq = _r326_t0['create-stroke']['bind'](_r326_t0);
            r326_xn$setanchor$9Jrj = _r326_t0['set-anchor']['bind'](_r326_t0);
            r326_xn$dontexport$5sIl = function _r326_t3() {
                var _r328_t0, _r328_t1;
                return r326_currentGlyph['dontExport'] = true;
            };
            _r326_t0['gizmo'] = r4_globalTransform;
            _r326_t0['set-width'](r4_WIDTH);
            r326_include(r4_bMarks);
            r326_xn$dontexport$5sIl();
            r326_balance = r4_ILBALANCE;
            r326_include(r326_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r326_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r326_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r326_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r326_balance, r4_CAP, r4_LONGJUT - r326_balance));
            r326_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t128() {
            var r330_currentGlyph, r330_xn$setwidth$9Jrj, r330_xn$assignunicode$7Hrq, r330_xn$startfrom$1aao, r330_xn$lineto$5sIl, r330_xn$curveto$1aao, r330_xn$cubicto$1aao, r330_xn$putshapes$9Jrj, r330_xn$reverselast$3qIs, r330_include, r330_xn$createstroke$7Hrq, r330_xn$setanchor$9Jrj, r330_xn$dontexport$5sIl, r330_TURN, _r330_t0, _r330_t1, _r330_t2, _r330_t3;
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
            r330_xn$dontexport$5sIl = function _r330_t3() {
                var _r332_t0, _r332_t1;
                return r330_currentGlyph['dontExport'] = true;
            };
            _r330_t0['gizmo'] = r4_globalTransform;
            _r330_t0['set-width'](r4_WIDTH);
            r330_xn$setwidth$9Jrj(r4_WIDTH);
            r330_xn$assignunicode$7Hrq('x');
            r330_include(r4_eMarks);
            r330_TURN = r4_XH * 0.1;
            r330_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r330_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t129() {
            var r334_currentGlyph, r334_xn$setwidth$9Jrj, r334_xn$assignunicode$7Hrq, r334_xn$startfrom$1aao, r334_xn$lineto$5sIl, r334_xn$curveto$1aao, r334_xn$cubicto$1aao, r334_xn$putshapes$9Jrj, r334_xn$reverselast$3qIs, r334_include, r334_xn$createstroke$7Hrq, r334_xn$setanchor$9Jrj, r334_xn$dontexport$5sIl, r334_TURN, _r334_t0, _r334_t1, _r334_t2, _r334_t3;
            _r334_t0 = this;
            r334_currentGlyph = _r334_t0;
            r334_xn$setwidth$9Jrj = _r334_t0['set-width']['bind'](_r334_t0);
            r334_xn$assignunicode$7Hrq = function _r334_t2(r335_code) {
                var r335_code, _r335_t0, _r335_t1;
                r334_currentGlyph['assign-unicode'](r335_code);
                return r4_unicodeGlyphs[r334_currentGlyph['unicode'][r334_currentGlyph['unicode']['length'] - 1]] = r334_currentGlyph;
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
            r334_xn$dontexport$5sIl = function _r334_t3() {
                var _r336_t0, _r336_t1;
                return r334_currentGlyph['dontExport'] = true;
            };
            _r334_t0['gizmo'] = r4_globalTransform;
            _r334_t0['set-width'](r4_WIDTH);
            r334_xn$setwidth$9Jrj(r4_WIDTH);
            r334_xn$assignunicode$7Hrq('v');
            r334_include(r4_eMarks);
            r334_TURN = r4_XH * 0.9;
            r334_include(r334_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r334_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r334_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r334_include(r334_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r334_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r334_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r334_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r334_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r334_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t130() {
            var r338_currentGlyph, r338_xn$setwidth$9Jrj, r338_xn$assignunicode$7Hrq, r338_xn$startfrom$1aao, r338_xn$lineto$5sIl, r338_xn$curveto$1aao, r338_xn$cubicto$1aao, r338_xn$putshapes$9Jrj, r338_xn$reverselast$3qIs, r338_include, r338_xn$createstroke$7Hrq, r338_xn$setanchor$9Jrj, r338_xn$dontexport$5sIl, r338_TURN, r338_turn2, r338_wheight, r338_bottomStroke, r338_m1, r338_m2, _r338_t0, _r338_t1, _r338_t2, _r338_t3;
            _r338_t0 = this;
            r338_currentGlyph = _r338_t0;
            r338_xn$setwidth$9Jrj = _r338_t0['set-width']['bind'](_r338_t0);
            r338_xn$assignunicode$7Hrq = function _r338_t2(r339_code) {
                var r339_code, _r339_t0, _r339_t1;
                r338_currentGlyph['assign-unicode'](r339_code);
                return r4_unicodeGlyphs[r338_currentGlyph['unicode'][r338_currentGlyph['unicode']['length'] - 1]] = r338_currentGlyph;
            };
            r338_xn$startfrom$1aao = _r338_t0['start-from']['bind'](_r338_t0);
            r338_xn$lineto$5sIl = _r338_t0['line-to']['bind'](_r338_t0);
            r338_xn$curveto$1aao = _r338_t0['curve-to']['bind'](_r338_t0);
            r338_xn$cubicto$1aao = _r338_t0['cubic-to']['bind'](_r338_t0);
            r338_xn$putshapes$9Jrj = _r338_t0['put-shapes']['bind'](_r338_t0);
            r338_xn$reverselast$3qIs = _r338_t0['reverse-last']['bind'](_r338_t0);
            r338_include = _r338_t0['include']['bind'](_r338_t0);
            r338_xn$createstroke$7Hrq = _r338_t0['create-stroke']['bind'](_r338_t0);
            r338_xn$setanchor$9Jrj = _r338_t0['set-anchor']['bind'](_r338_t0);
            r338_xn$dontexport$5sIl = function _r338_t3() {
                var _r340_t0, _r340_t1;
                return r338_currentGlyph['dontExport'] = true;
            };
            _r338_t0['gizmo'] = r4_globalTransform;
            _r338_t0['set-width'](r4_WIDTH);
            r338_xn$setwidth$9Jrj(r4_WIDTH);
            r338_xn$assignunicode$7Hrq('w');
            r338_include(r4_eMarks);
            r338_TURN = r4_XH * 0.75;
            r338_turn2 = r4_XH * 0.59;
            r338_wheight = r4_XH * 0.6;
            r338_bottomStroke = Math['min'](r4_STROKE * 0.8, (r4_WIDTH - r4_SB * 2) * 0.175);
            r338_m1 = r4_WIDTH * 0.325;
            r338_m2 = r4_WIDTH * 0.675;
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r338_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r338_TURN, r338_m1 - r338_bottomStroke / 2, 0)['set-width'](r338_bottomStroke, 0));
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r338_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r338_TURN, r338_m2 + r338_bottomStroke / 2, 0)['set-width'](0, r338_bottomStroke));
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r338_bottomStroke / 2, r338_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r338_bottomStroke)['line-to'](r4_MIDDLE + r338_bottomStroke / 2, r338_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r338_bottomStroke / 2, (1 - 0.1) * r338_turn2, r338_m1 + r338_bottomStroke / 2, 0)['set-width'](0, r338_bottomStroke));
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r338_bottomStroke / 2, r338_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r338_bottomStroke, 0)['line-to'](r4_MIDDLE - r338_bottomStroke / 2, r338_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r338_bottomStroke / 2, (1 - 0.1) * r338_turn2, r338_m2 - r338_bottomStroke / 2, 0)['set-width'](r338_bottomStroke, 0));
            r338_xn$startfrom$1aao(r338_m1 + r338_bottomStroke / 2, 0);
            r338_xn$lineto$5sIl(r338_m1 - r338_bottomStroke / 2, 0);
            r338_xn$lineto$5sIl(r338_m1, r338_bottomStroke);
            r338_xn$startfrom$1aao(r338_m2 + r338_bottomStroke / 2, 0);
            r338_xn$lineto$5sIl(r338_m2 - r338_bottomStroke / 2, 0);
            r338_xn$lineto$5sIl(r338_m2, r338_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t131() {
            var r342_currentGlyph, r342_xn$setwidth$9Jrj, r342_xn$assignunicode$7Hrq, r342_xn$startfrom$1aao, r342_xn$lineto$5sIl, r342_xn$curveto$1aao, r342_xn$cubicto$1aao, r342_xn$putshapes$9Jrj, r342_xn$reverselast$3qIs, r342_include, r342_xn$createstroke$7Hrq, r342_xn$setanchor$9Jrj, r342_xn$dontexport$5sIl, r342_xbottom, r342_turnp, r342_xb, r342_yb, _r342_t0, _r342_t1, _r342_t2, _r342_t3;
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
            r342_xn$dontexport$5sIl = function _r342_t3() {
                var _r344_t0, _r344_t1;
                return r342_currentGlyph['dontExport'] = true;
            };
            _r342_t0['gizmo'] = r4_globalTransform;
            _r342_t0['set-width'](r4_WIDTH);
            r342_xn$setwidth$9Jrj(r4_WIDTH);
            r342_xn$assignunicode$7Hrq('y');
            r342_include(r4_pMarks);
            r342_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r342_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r342_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r342_yb = r0_mix(0, r4_XH, 0.05 * r342_turnp);
            r342_include(r4_xStrand(r342_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r342_include(r4_halfXStrand(r4_SB, r4_XH, r342_xb, r342_yb, 0.1 * r342_turnp, 0.4, 0.14 * r342_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t132() {
            var r346_currentGlyph, r346_xn$setwidth$9Jrj, r346_xn$assignunicode$7Hrq, r346_xn$startfrom$1aao, r346_xn$lineto$5sIl, r346_xn$curveto$1aao, r346_xn$cubicto$1aao, r346_xn$putshapes$9Jrj, r346_xn$reverselast$3qIs, r346_include, r346_xn$createstroke$7Hrq, r346_xn$setanchor$9Jrj, r346_xn$dontexport$5sIl, r346_cor, _r346_t0, _r346_t1, _r346_t2, _r346_t3;
            _r346_t0 = this;
            r346_currentGlyph = _r346_t0;
            r346_xn$setwidth$9Jrj = _r346_t0['set-width']['bind'](_r346_t0);
            r346_xn$assignunicode$7Hrq = function _r346_t2(r347_code) {
                var r347_code, _r347_t0, _r347_t1;
                r346_currentGlyph['assign-unicode'](r347_code);
                return r4_unicodeGlyphs[r346_currentGlyph['unicode'][r346_currentGlyph['unicode']['length'] - 1]] = r346_currentGlyph;
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
            r346_xn$dontexport$5sIl = function _r346_t3() {
                var _r348_t0, _r348_t1;
                return r346_currentGlyph['dontExport'] = true;
            };
            _r346_t0['gizmo'] = r4_globalTransform;
            _r346_t0['set-width'](r4_WIDTH);
            r346_xn$setwidth$9Jrj(r4_WIDTH);
            r346_xn$assignunicode$7Hrq('z');
            r346_include(r4_eMarks);
            r346_cor = 1.2;
            r346_include(r346_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r346_include(r346_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r346_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r346_xn$lineto$5sIl(r4_SB + r4_STROKE * r346_cor, r4_STROKE);
            r346_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r346_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r346_cor, r4_XH - r4_STROKE);
            r346_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t133() {
            var r350_currentGlyph, r350_xn$setwidth$9Jrj, r350_xn$assignunicode$7Hrq, r350_xn$startfrom$1aao, r350_xn$lineto$5sIl, r350_xn$curveto$1aao, r350_xn$cubicto$1aao, r350_xn$putshapes$9Jrj, r350_xn$reverselast$3qIs, r350_include, r350_xn$createstroke$7Hrq, r350_xn$setanchor$9Jrj, r350_xn$dontexport$5sIl, r350_TURN, r350_rturn, r350_right, r350_attach, r350_attach2, r350_fine, _r350_t0, _r350_t1, _r350_t2, _r350_t3;
            _r350_t0 = this;
            r350_currentGlyph = _r350_t0;
            r350_xn$setwidth$9Jrj = _r350_t0['set-width']['bind'](_r350_t0);
            r350_xn$assignunicode$7Hrq = function _r350_t2(r351_code) {
                var r351_code, _r351_t0, _r351_t1;
                r350_currentGlyph['assign-unicode'](r351_code);
                return r4_unicodeGlyphs[r350_currentGlyph['unicode'][r350_currentGlyph['unicode']['length'] - 1]] = r350_currentGlyph;
            };
            r350_xn$startfrom$1aao = _r350_t0['start-from']['bind'](_r350_t0);
            r350_xn$lineto$5sIl = _r350_t0['line-to']['bind'](_r350_t0);
            r350_xn$curveto$1aao = _r350_t0['curve-to']['bind'](_r350_t0);
            r350_xn$cubicto$1aao = _r350_t0['cubic-to']['bind'](_r350_t0);
            r350_xn$putshapes$9Jrj = _r350_t0['put-shapes']['bind'](_r350_t0);
            r350_xn$reverselast$3qIs = _r350_t0['reverse-last']['bind'](_r350_t0);
            r350_include = _r350_t0['include']['bind'](_r350_t0);
            r350_xn$createstroke$7Hrq = _r350_t0['create-stroke']['bind'](_r350_t0);
            r350_xn$setanchor$9Jrj = _r350_t0['set-anchor']['bind'](_r350_t0);
            r350_xn$dontexport$5sIl = function _r350_t3() {
                var _r352_t0, _r352_t1;
                return r350_currentGlyph['dontExport'] = true;
            };
            _r350_t0['gizmo'] = r4_globalTransform;
            _r350_t0['set-width'](r4_WIDTH);
            r350_xn$setwidth$9Jrj(r4_WIDTH);
            r350_xn$assignunicode$7Hrq('k');
            r350_include(r4_bMarks);
            r350_TURN = r4_XH * 0.99;
            r350_rturn = r4_XH * 0.1;
            r350_right = r4_RIGHTSB - r4_O;
            r350_attach = r4_XH * 0.4;
            r350_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r350_fine = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r350_include(r350_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r350_include(r350_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r350_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r350_TURN, r4_SB + r4_STROKE, r350_attach)['set-width'](0, r350_fine));
            r350_include(r350_xn$createstroke$7Hrq()['start-from'](r350_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r350_right - r4_HALFSTROKE, r350_rturn + 0.05 * (r4_XH - r350_rturn), r350_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r350_fine / 2, r350_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t134() {
            var r354_currentGlyph, r354_xn$setwidth$9Jrj, r354_xn$assignunicode$7Hrq, r354_xn$startfrom$1aao, r354_xn$lineto$5sIl, r354_xn$curveto$1aao, r354_xn$cubicto$1aao, r354_xn$putshapes$9Jrj, r354_xn$reverselast$3qIs, r354_include, r354_xn$createstroke$7Hrq, r354_xn$setanchor$9Jrj, r354_xn$dontexport$5sIl, _r354_t0, _r354_t1, _r354_t2, _r354_t3;
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
            r354_xn$dontexport$5sIl = function _r354_t3() {
                var _r356_t0, _r356_t1;
                return r354_currentGlyph['dontExport'] = true;
            };
            _r354_t0['gizmo'] = r4_globalTransform;
            _r354_t0['set-width'](r4_WIDTH);
            r354_xn$setwidth$9Jrj(r4_WIDTH);
            r354_xn$assignunicode$7Hrq('s');
            r354_include(r4_eMarks);
            r354_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r354_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r354_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t135() {
            var r358_currentGlyph, r358_xn$setwidth$9Jrj, r358_xn$assignunicode$7Hrq, r358_xn$startfrom$1aao, r358_xn$lineto$5sIl, r358_xn$curveto$1aao, r358_xn$cubicto$1aao, r358_xn$putshapes$9Jrj, r358_xn$reverselast$3qIs, r358_include, r358_xn$createstroke$7Hrq, r358_xn$setanchor$9Jrj, r358_xn$dontexport$5sIl, r358_slope, r358_expand, r358_coexpand, r358_rhookx, r358_rmiddle, _r358_t0, _r358_t1, _r358_t2, _r358_t3;
            _r358_t0 = this;
            r358_currentGlyph = _r358_t0;
            r358_xn$setwidth$9Jrj = _r358_t0['set-width']['bind'](_r358_t0);
            r358_xn$assignunicode$7Hrq = function _r358_t2(r359_code) {
                var r359_code, _r359_t0, _r359_t1;
                r358_currentGlyph['assign-unicode'](r359_code);
                return r4_unicodeGlyphs[r358_currentGlyph['unicode'][r358_currentGlyph['unicode']['length'] - 1]] = r358_currentGlyph;
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
            r358_xn$dontexport$5sIl = function _r358_t3() {
                var _r360_t0, _r360_t1;
                return r358_currentGlyph['dontExport'] = true;
            };
            _r358_t0['gizmo'] = r4_globalTransform;
            _r358_t0['set-width'](r4_WIDTH);
            r358_xn$setwidth$9Jrj(r4_WIDTH);
            r358_xn$assignunicode$7Hrq('r');
            r358_include(r4_eMarks);
            r358_slope = 0.015;
            r358_expand = 0.175;
            r358_coexpand = (1 - r358_expand) / 2;
            r358_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r358_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r358_rhookx - r4_HALFSTROKE, 0.5);
            r358_include(r358_xn$createstroke$7Hrq()['start-from'](r358_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r358_rmiddle, r358_rhookx, r4_KAPPA_AHOOK), r4_XO, r358_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r358_include(r358_xn$createstroke$7Hrq()['start-from'](r358_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r358_include(r358_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('fbar', function _r4_t136() {
            var r362_currentGlyph, r362_xn$setwidth$9Jrj, r362_xn$assignunicode$7Hrq, r362_xn$startfrom$1aao, r362_xn$lineto$5sIl, r362_xn$curveto$1aao, r362_xn$cubicto$1aao, r362_xn$putshapes$9Jrj, r362_xn$reverselast$3qIs, r362_include, r362_xn$createstroke$7Hrq, r362_xn$setanchor$9Jrj, r362_xn$dontexport$5sIl, _r362_t0, _r362_t1, _r362_t2, _r362_t3;
            _r362_t0 = this;
            r362_currentGlyph = _r362_t0;
            r362_xn$setwidth$9Jrj = _r362_t0['set-width']['bind'](_r362_t0);
            r362_xn$assignunicode$7Hrq = function _r362_t2(r363_code) {
                var r363_code, _r363_t0, _r363_t1;
                r362_currentGlyph['assign-unicode'](r363_code);
                return r4_unicodeGlyphs[r362_currentGlyph['unicode'][r362_currentGlyph['unicode']['length'] - 1]] = r362_currentGlyph;
            };
            r362_xn$startfrom$1aao = _r362_t0['start-from']['bind'](_r362_t0);
            r362_xn$lineto$5sIl = _r362_t0['line-to']['bind'](_r362_t0);
            r362_xn$curveto$1aao = _r362_t0['curve-to']['bind'](_r362_t0);
            r362_xn$cubicto$1aao = _r362_t0['cubic-to']['bind'](_r362_t0);
            r362_xn$putshapes$9Jrj = _r362_t0['put-shapes']['bind'](_r362_t0);
            r362_xn$reverselast$3qIs = _r362_t0['reverse-last']['bind'](_r362_t0);
            r362_include = _r362_t0['include']['bind'](_r362_t0);
            r362_xn$createstroke$7Hrq = _r362_t0['create-stroke']['bind'](_r362_t0);
            r362_xn$setanchor$9Jrj = _r362_t0['set-anchor']['bind'](_r362_t0);
            r362_xn$dontexport$5sIl = function _r362_t3() {
                var _r364_t0, _r364_t1;
                return r362_currentGlyph['dontExport'] = true;
            };
            _r362_t0['gizmo'] = r4_globalTransform;
            _r362_t0['set-width'](r4_WIDTH);
            r362_xn$dontexport$5sIl();
            r362_include(r362_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f.upright', function _r4_t137() {
            var r366_currentGlyph, r366_xn$setwidth$9Jrj, r366_xn$assignunicode$7Hrq, r366_xn$startfrom$1aao, r366_xn$lineto$5sIl, r366_xn$curveto$1aao, r366_xn$cubicto$1aao, r366_xn$putshapes$9Jrj, r366_xn$reverselast$3qIs, r366_include, r366_xn$createstroke$7Hrq, r366_xn$setanchor$9Jrj, r366_xn$dontexport$5sIl, _r366_t0, _r366_t1, _r366_t2, _r366_t3;
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
            r366_xn$dontexport$5sIl = function _r366_t3() {
                var _r368_t0, _r368_t1;
                return r366_currentGlyph['dontExport'] = true;
            };
            _r366_t0['gizmo'] = r4_globalTransform;
            _r366_t0['set-width'](r4_WIDTH);
            r366_xn$setwidth$9Jrj(r4_WIDTH);
            r366_xn$dontexport$5sIl();
            r366_include(r4_bMarks);
            r366_include(r366_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            r366_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eshhook', function _r4_t138() {
            var r370_currentGlyph, r370_xn$setwidth$9Jrj, r370_xn$assignunicode$7Hrq, r370_xn$startfrom$1aao, r370_xn$lineto$5sIl, r370_xn$curveto$1aao, r370_xn$cubicto$1aao, r370_xn$putshapes$9Jrj, r370_xn$reverselast$3qIs, r370_include, r370_xn$createstroke$7Hrq, r370_xn$setanchor$9Jrj, r370_xn$dontexport$5sIl, _r370_t0, _r370_t1, _r370_t2, _r370_t3;
            _r370_t0 = this;
            r370_currentGlyph = _r370_t0;
            r370_xn$setwidth$9Jrj = _r370_t0['set-width']['bind'](_r370_t0);
            r370_xn$assignunicode$7Hrq = function _r370_t2(r371_code) {
                var r371_code, _r371_t0, _r371_t1;
                r370_currentGlyph['assign-unicode'](r371_code);
                return r4_unicodeGlyphs[r370_currentGlyph['unicode'][r370_currentGlyph['unicode']['length'] - 1]] = r370_currentGlyph;
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
            r370_xn$dontexport$5sIl = function _r370_t3() {
                var _r372_t0, _r372_t1;
                return r370_currentGlyph['dontExport'] = true;
            };
            _r370_t0['gizmo'] = r4_globalTransform;
            _r370_t0['set-width'](r4_WIDTH);
            r370_xn$dontexport$5sIl();
            r370_include(r370_xn$createstroke$7Hrq()['start-from'](0 - r4_SHOOK * 2, 0 + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](0, 0)['line-to'](0, r4_STROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f.italic', function _r4_t139() {
            var r374_currentGlyph, r374_xn$setwidth$9Jrj, r374_xn$assignunicode$7Hrq, r374_xn$startfrom$1aao, r374_xn$lineto$5sIl, r374_xn$curveto$1aao, r374_xn$cubicto$1aao, r374_xn$putshapes$9Jrj, r374_xn$reverselast$3qIs, r374_include, r374_xn$createstroke$7Hrq, r374_xn$setanchor$9Jrj, r374_xn$dontexport$5sIl, _r374_t0, _r374_t1, _r374_t2, _r374_t3;
            _r374_t0 = this;
            r374_currentGlyph = _r374_t0;
            r374_xn$setwidth$9Jrj = _r374_t0['set-width']['bind'](_r374_t0);
            r374_xn$assignunicode$7Hrq = function _r374_t2(r375_code) {
                var r375_code, _r375_t0, _r375_t1;
                r374_currentGlyph['assign-unicode'](r375_code);
                return r4_unicodeGlyphs[r374_currentGlyph['unicode'][r374_currentGlyph['unicode']['length'] - 1]] = r374_currentGlyph;
            };
            r374_xn$startfrom$1aao = _r374_t0['start-from']['bind'](_r374_t0);
            r374_xn$lineto$5sIl = _r374_t0['line-to']['bind'](_r374_t0);
            r374_xn$curveto$1aao = _r374_t0['curve-to']['bind'](_r374_t0);
            r374_xn$cubicto$1aao = _r374_t0['cubic-to']['bind'](_r374_t0);
            r374_xn$putshapes$9Jrj = _r374_t0['put-shapes']['bind'](_r374_t0);
            r374_xn$reverselast$3qIs = _r374_t0['reverse-last']['bind'](_r374_t0);
            r374_include = _r374_t0['include']['bind'](_r374_t0);
            r374_xn$createstroke$7Hrq = _r374_t0['create-stroke']['bind'](_r374_t0);
            r374_xn$setanchor$9Jrj = _r374_t0['set-anchor']['bind'](_r374_t0);
            r374_xn$dontexport$5sIl = function _r374_t3() {
                var _r376_t0, _r376_t1;
                return r374_currentGlyph['dontExport'] = true;
            };
            _r374_t0['gizmo'] = r4_globalTransform;
            _r374_t0['set-width'](r4_WIDTH);
            r374_xn$setwidth$9Jrj(r4_WIDTH);
            r374_xn$dontexport$5sIl();
            r374_include(r4_ifMarks);
            r374_include(r374_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            r374_include(r4_glyphs['fbar']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t140() {
            var r378_currentGlyph, r378_xn$setwidth$9Jrj, r378_xn$assignunicode$7Hrq, r378_xn$startfrom$1aao, r378_xn$lineto$5sIl, r378_xn$curveto$1aao, r378_xn$cubicto$1aao, r378_xn$putshapes$9Jrj, r378_xn$reverselast$3qIs, r378_include, r378_xn$createstroke$7Hrq, r378_xn$setanchor$9Jrj, r378_xn$dontexport$5sIl, _r378_t0, _r378_t1, _r378_t2, _r378_t3;
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
            r378_xn$dontexport$5sIl = function _r378_t3() {
                var _r380_t0, _r380_t1;
                return r378_currentGlyph['dontExport'] = true;
            };
            _r378_t0['gizmo'] = r4_globalTransform;
            _r378_t0['set-width'](r4_WIDTH);
            r378_xn$setwidth$9Jrj(r4_WIDTH);
            r378_xn$assignunicode$7Hrq('f');
            if (r4_para['italicangle'] > 0) {
                r378_include(r4_glyphs['f.italic'], r4_AS_BASE);
            } else {
                r378_include(r4_glyphs['f.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t141() {
            var r382_currentGlyph, r382_xn$setwidth$9Jrj, r382_xn$assignunicode$7Hrq, r382_xn$startfrom$1aao, r382_xn$lineto$5sIl, r382_xn$curveto$1aao, r382_xn$cubicto$1aao, r382_xn$putshapes$9Jrj, r382_xn$reverselast$3qIs, r382_include, r382_xn$createstroke$7Hrq, r382_xn$setanchor$9Jrj, r382_xn$dontexport$5sIl, r382_sw, r382_eleft, r382_turn, _r382_t0, _r382_t1, _r382_t2, _r382_t3;
            _r382_t0 = this;
            r382_currentGlyph = _r382_t0;
            r382_xn$setwidth$9Jrj = _r382_t0['set-width']['bind'](_r382_t0);
            r382_xn$assignunicode$7Hrq = function _r382_t2(r383_code) {
                var r383_code, _r383_t0, _r383_t1;
                r382_currentGlyph['assign-unicode'](r383_code);
                return r4_unicodeGlyphs[r382_currentGlyph['unicode'][r382_currentGlyph['unicode']['length'] - 1]] = r382_currentGlyph;
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
            r382_xn$dontexport$5sIl = function _r382_t3() {
                var _r384_t0, _r384_t1;
                return r382_currentGlyph['dontExport'] = true;
            };
            _r382_t0['gizmo'] = r4_globalTransform;
            _r382_t0['set-width'](r4_WIDTH);
            r382_xn$setwidth$9Jrj(r4_WIDTH);
            r382_xn$assignunicode$7Hrq(198);
            r382_include(r4_capitalMarks);
            r382_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r382_eleft = r4_MIDDLE - r382_sw * 0.25;
            r382_turn = r4_XH * 0.1;
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r382_sw)['line-to'](r4_SB, r382_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r382_turn, r4_CAP, 0.27), r382_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r382_sw * 0.8));
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r4_SB + r382_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r382_sw)['line-to'](r382_eleft + r382_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r382_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r382_sw)['line-to'](r382_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r382_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r382_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r382_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r382_include(r382_xn$createstroke$7Hrq()['start-from'](r382_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t142() {
            var r386_currentGlyph, r386_xn$setwidth$9Jrj, r386_xn$assignunicode$7Hrq, r386_xn$startfrom$1aao, r386_xn$lineto$5sIl, r386_xn$curveto$1aao, r386_xn$cubicto$1aao, r386_xn$putshapes$9Jrj, r386_xn$reverselast$3qIs, r386_include, r386_xn$createstroke$7Hrq, r386_xn$setanchor$9Jrj, r386_xn$dontexport$5sIl, r386_sw, r386_eleft, _r386_t0, _r386_t1, _r386_t2, _r386_t3;
            _r386_t0 = this;
            r386_currentGlyph = _r386_t0;
            r386_xn$setwidth$9Jrj = _r386_t0['set-width']['bind'](_r386_t0);
            r386_xn$assignunicode$7Hrq = function _r386_t2(r387_code) {
                var r387_code, _r387_t0, _r387_t1;
                r386_currentGlyph['assign-unicode'](r387_code);
                return r4_unicodeGlyphs[r386_currentGlyph['unicode'][r386_currentGlyph['unicode']['length'] - 1]] = r386_currentGlyph;
            };
            r386_xn$startfrom$1aao = _r386_t0['start-from']['bind'](_r386_t0);
            r386_xn$lineto$5sIl = _r386_t0['line-to']['bind'](_r386_t0);
            r386_xn$curveto$1aao = _r386_t0['curve-to']['bind'](_r386_t0);
            r386_xn$cubicto$1aao = _r386_t0['cubic-to']['bind'](_r386_t0);
            r386_xn$putshapes$9Jrj = _r386_t0['put-shapes']['bind'](_r386_t0);
            r386_xn$reverselast$3qIs = _r386_t0['reverse-last']['bind'](_r386_t0);
            r386_include = _r386_t0['include']['bind'](_r386_t0);
            r386_xn$createstroke$7Hrq = _r386_t0['create-stroke']['bind'](_r386_t0);
            r386_xn$setanchor$9Jrj = _r386_t0['set-anchor']['bind'](_r386_t0);
            r386_xn$dontexport$5sIl = function _r386_t3() {
                var _r388_t0, _r388_t1;
                return r386_currentGlyph['dontExport'] = true;
            };
            _r386_t0['gizmo'] = r4_globalTransform;
            _r386_t0['set-width'](r4_WIDTH);
            r386_xn$setwidth$9Jrj(r4_WIDTH);
            r386_xn$assignunicode$7Hrq(338);
            r386_include(r4_capitalMarks);
            r386_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r386_eleft = r4_MIDDLE;
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r386_eleft + 1, r4_CAP)['set-width'](r386_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r386_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r386_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r386_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r386_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r386_sw)['line-to'](r386_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r386_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r386_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r386_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r386_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t143() {
            var r390_currentGlyph, r390_xn$setwidth$9Jrj, r390_xn$assignunicode$7Hrq, r390_xn$startfrom$1aao, r390_xn$lineto$5sIl, r390_xn$curveto$1aao, r390_xn$cubicto$1aao, r390_xn$putshapes$9Jrj, r390_xn$reverselast$3qIs, r390_include, r390_xn$createstroke$7Hrq, r390_xn$setanchor$9Jrj, r390_xn$dontexport$5sIl, r390_sw, r390_eLeft, r390_eMiddle, r390_barbottom, r390_hookx, r390_eHookMiddle, r390_sma, r390_smb, _r390_t0, _r390_t1, _r390_t2, _r390_t3;
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
            r390_xn$dontexport$5sIl = function _r390_t3() {
                var _r392_t0, _r392_t1;
                return r390_currentGlyph['dontExport'] = true;
            };
            _r390_t0['gizmo'] = r4_globalTransform;
            _r390_t0['set-width'](r4_WIDTH);
            r390_xn$dontexport$5sIl();
            r390_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r390_eLeft = r4_MIDDLE - r390_sw / 2 * r4_ITALICCOR;
            r390_eMiddle = r0_mix(r390_eLeft, r4_RIGHTSB - r4_O, 0.5) - r390_sw * r4_globalTransform['yx'];
            r390_barbottom = r4_XH * r4_EBARPOS;
            r390_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r390_eHookMiddle = r0_mix(r390_eLeft, r390_hookx, 0.5);
            r390_sma = r4_SMALLSMOOTHA * 0.6;
            r390_smb = r4_SMALLSMOOTHB * 0.6;
            r390_include(r390_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r390_barbottom)['heads-to'](r4_UPWARD)['set-width'](r390_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r390_smb)['arc-vh-to'](r390_eMiddle, r4_XO)['arc-hv-to'](r390_eLeft, r4_XH - r390_sma)['line-to'](r390_eLeft, r390_smb)['arc-vh-to'](r390_eHookMiddle, r4_O)['curve-to'](r0_mix(r390_eHookMiddle, r390_hookx, r4_KAPPA_HOOK), r4_O, r390_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r390_include(r390_xn$createstroke$7Hrq()['start-from'](r390_eLeft + r390_sw / 2, r390_barbottom)['set-width'](r390_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r390_sw / 2, r390_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t144() {
            var r394_currentGlyph, r394_xn$setwidth$9Jrj, r394_xn$assignunicode$7Hrq, r394_xn$startfrom$1aao, r394_xn$lineto$5sIl, r394_xn$curveto$1aao, r394_xn$cubicto$1aao, r394_xn$putshapes$9Jrj, r394_xn$reverselast$3qIs, r394_include, r394_xn$createstroke$7Hrq, r394_xn$setanchor$9Jrj, r394_xn$dontexport$5sIl, r394_sw, r394_bartop, r394_abarRight, r394_m1, r394_lowmiddle, r394_barsmooth, r394_sma, r394_smb, _r394_t0, _r394_t1, _r394_t2, _r394_t3;
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
            r394_xn$dontexport$5sIl();
            r394_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r394_bartop = r4_XH * r4_BARPOS + r394_sw;
            r394_abarRight = r4_MIDDLE + r394_sw / 2 * r4_ITALICCOR;
            r394_m1 = r0_mix(r4_SB + r4_OXHOOK, r394_abarRight, 0.5);
            r394_lowmiddle = r0_mix(r4_SB + r394_sw, r394_abarRight - r394_sw, 0.5) + r394_sw * r4_globalTransform['yx'];
            r394_barsmooth = r0_mix(r4_SB, r394_abarRight, 0.6);
            r394_sma = r4_SMALLSMOOTHA * 0.6;
            r394_smb = r4_SMALLSMOOTHB * 0.6;
            r394_include(r394_xn$createstroke$7Hrq()['start-from'](r394_abarRight, r4_XH - r394_sma)['set-width'](r394_sw, 0)['arc-vh-to'](r394_m1, r4_XO)['curve-to'](r0_mix(r394_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r394_include(r394_xn$createstroke$7Hrq()['start-from'](r394_abarRight, r394_smb)['set-width'](0, r394_sw)['arc-vh-to'](r394_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r394_bartop, r394_smb / (r394_sma + r394_smb)))['arc-vh-to'](r394_barsmooth, r394_bartop)['line-to'](r394_abarRight, r394_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t145() {
            var r398_currentGlyph, r398_xn$setwidth$9Jrj, r398_xn$assignunicode$7Hrq, r398_xn$startfrom$1aao, r398_xn$lineto$5sIl, r398_xn$curveto$1aao, r398_xn$cubicto$1aao, r398_xn$putshapes$9Jrj, r398_xn$reverselast$3qIs, r398_include, r398_xn$createstroke$7Hrq, r398_xn$setanchor$9Jrj, r398_xn$dontexport$5sIl, r398_sw, r398_abarRight, r398_m1, r398_sma, r398_smb, _r398_t0, _r398_t1, _r398_t2, _r398_t3;
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
            r398_xn$dontexport$5sIl();
            r398_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.23);
            r398_abarRight = r4_MIDDLE + r398_sw / 2 * r4_ITALICCOR;
            r398_m1 = r0_mix(r4_SB + r4_O, r398_abarRight, 0.5);
            r398_sma = r4_SMALLSMOOTHA * 0.6;
            r398_smb = r4_SMALLSMOOTHB * 0.6;
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r398_abarRight, r398_smb)['set-width'](0, r398_sw)['arc-vh-to'](r398_m1 + r398_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r398_smb)['line-to'](r4_SB + r4_O, r4_XH - r398_sma)['arc-vh-to'](r398_m1 - r398_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r398_abarRight, r4_XH - r398_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t146() {
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
            r402_xn$assignunicode$7Hrq(230);
            r402_include(r4_eMarks);
            r402_include(r4_glyphs['ae-epart']);
            r402_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t147() {
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
            r406_xn$assignunicode$7Hrq(339);
            r406_include(r4_eMarks);
            r406_include(r4_glyphs['ae-epart']);
            r406_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t148() {
            var r410_currentGlyph, r410_xn$setwidth$9Jrj, r410_xn$assignunicode$7Hrq, r410_xn$startfrom$1aao, r410_xn$lineto$5sIl, r410_xn$curveto$1aao, r410_xn$cubicto$1aao, r410_xn$putshapes$9Jrj, r410_xn$reverselast$3qIs, r410_include, r410_xn$createstroke$7Hrq, r410_xn$setanchor$9Jrj, r410_xn$dontexport$5sIl, _r410_t0, _r410_t1, _r410_t2, _r410_t3;
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
            r410_xn$assignunicode$7Hrq(208);
            r410_include(r4_glyphs['D'], r4_AS_BASE);
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.4), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t149() {
            var r414_currentGlyph, r414_xn$setwidth$9Jrj, r414_xn$assignunicode$7Hrq, r414_xn$startfrom$1aao, r414_xn$lineto$5sIl, r414_xn$curveto$1aao, r414_xn$cubicto$1aao, r414_xn$putshapes$9Jrj, r414_xn$reverselast$3qIs, r414_include, r414_xn$createstroke$7Hrq, r414_xn$setanchor$9Jrj, r414_xn$dontexport$5sIl, _r414_t0, _r414_t1, _r414_t2, _r414_t3;
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
            r414_xn$assignunicode$7Hrq(272);
            r414_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t150() {
            var r418_currentGlyph, r418_xn$setwidth$9Jrj, r418_xn$assignunicode$7Hrq, r418_xn$startfrom$1aao, r418_xn$lineto$5sIl, r418_xn$curveto$1aao, r418_xn$cubicto$1aao, r418_xn$putshapes$9Jrj, r418_xn$reverselast$3qIs, r418_include, r418_xn$createstroke$7Hrq, r418_xn$setanchor$9Jrj, r418_xn$dontexport$5sIl, r418_ymiddlea, _r418_t0, _r418_t1, _r418_t2, _r418_t3;
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
            r418_xn$setwidth$9Jrj(r4_WIDTH);
            r418_xn$assignunicode$7Hrq(240);
            r418_include(r4_bMarks);
            r418_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r418_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r418_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r418_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, 0))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.4)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t151() {
            var r422_currentGlyph, r422_xn$setwidth$9Jrj, r422_xn$assignunicode$7Hrq, r422_xn$startfrom$1aao, r422_xn$lineto$5sIl, r422_xn$curveto$1aao, r422_xn$cubicto$1aao, r422_xn$putshapes$9Jrj, r422_xn$reverselast$3qIs, r422_include, r422_xn$createstroke$7Hrq, r422_xn$setanchor$9Jrj, r422_xn$dontexport$5sIl, _r422_t0, _r422_t1, _r422_t2, _r422_t3;
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
            r422_xn$assignunicode$7Hrq(273);
            r422_include(r4_glyphs['d'], r4_AS_BASE);
            r422_include(r422_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.6), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t152() {
            var r426_currentGlyph, r426_xn$setwidth$9Jrj, r426_xn$assignunicode$7Hrq, r426_xn$startfrom$1aao, r426_xn$lineto$5sIl, r426_xn$curveto$1aao, r426_xn$cubicto$1aao, r426_xn$putshapes$9Jrj, r426_xn$reverselast$3qIs, r426_include, r426_xn$createstroke$7Hrq, r426_xn$setanchor$9Jrj, r426_xn$dontexport$5sIl, r426_fine, _r426_t0, _r426_t1, _r426_t2, _r426_t3;
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
            r426_xn$assignunicode$7Hrq(216);
            r426_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r426_include(r4_glyphs['O'], r4_AS_BASE);
            r426_include(r426_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r426_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r426_fine, r426_fine)['line-to'](r4_RIGHTSB - r4_O - r426_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t153() {
            var r430_currentGlyph, r430_xn$setwidth$9Jrj, r430_xn$assignunicode$7Hrq, r430_xn$startfrom$1aao, r430_xn$lineto$5sIl, r430_xn$curveto$1aao, r430_xn$cubicto$1aao, r430_xn$putshapes$9Jrj, r430_xn$reverselast$3qIs, r430_include, r430_xn$createstroke$7Hrq, r430_xn$setanchor$9Jrj, r430_xn$dontexport$5sIl, r430_fine, _r430_t0, _r430_t1, _r430_t2, _r430_t3;
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
            r430_xn$assignunicode$7Hrq(248);
            r430_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r430_include(r4_glyphs['o'], r4_AS_BASE);
            r430_include(r430_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r430_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r430_fine, r430_fine)['line-to'](r4_RIGHTSB - r4_O - r430_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t154() {
            var r434_currentGlyph, r434_xn$setwidth$9Jrj, r434_xn$assignunicode$7Hrq, r434_xn$startfrom$1aao, r434_xn$lineto$5sIl, r434_xn$curveto$1aao, r434_xn$cubicto$1aao, r434_xn$putshapes$9Jrj, r434_xn$reverselast$3qIs, r434_include, r434_xn$createstroke$7Hrq, r434_xn$setanchor$9Jrj, r434_xn$dontexport$5sIl, r434_bowlTop, r434_bowlBottom, r434_bkappa, r434_turn, r434_turnRadius, _r434_t0, _r434_t1, _r434_t2, _r434_t3;
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
            r434_xn$assignunicode$7Hrq(222);
            r434_include(r4_capitalMarks);
            r434_bowlTop = r4_CAP * 0.77;
            r434_bowlBottom = r4_CAP * 0.23;
            r434_bkappa = r4_COKAPPA - 0.2;
            r434_turn = r0_mix(r434_bowlTop, r434_bowlBottom, 0.5);
            r434_turnRadius = (r434_bowlTop - r434_bowlBottom) / 2;
            r434_include(r434_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r434_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r434_turnRadius, r434_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r434_turn)['arc-vh-to'](r4_RIGHTSB - r434_turnRadius, r434_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r434_bowlBottom)['heads-to'](r4_LEFTWARD));
            r434_include(r434_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t155() {
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
            r438_xn$assignunicode$7Hrq(254);
            r438_include(r4_glyphs['b'], r4_AS_BASE);
            r438_include(r4_glyphs['p']);
            r438_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t156() {
            var r442_currentGlyph, r442_xn$setwidth$9Jrj, r442_xn$assignunicode$7Hrq, r442_xn$startfrom$1aao, r442_xn$lineto$5sIl, r442_xn$curveto$1aao, r442_xn$cubicto$1aao, r442_xn$putshapes$9Jrj, r442_xn$reverselast$3qIs, r442_include, r442_xn$createstroke$7Hrq, r442_xn$setanchor$9Jrj, r442_xn$dontexport$5sIl, r442_yTopTurn, r442_yBottomTurn, r442_xTopTurn, r442_xMiddleTurn, r442_xBottomTurn, r442_xBottomFinal, _r442_t0, _r442_t1, _r442_t2, _r442_t3;
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
            r442_xn$setwidth$9Jrj(r4_WIDTH);
            r442_xn$dontexport$5sIl();
            r442_include(r4_bMarks);
            r442_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r442_yBottomTurn = r4_CAP * 0.41;
            r442_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r442_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r442_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r442_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r442_include(r442_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r442_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r442_xTopTurn, r442_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r442_xTopTurn, r442_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r442_include(r442_xn$createstroke$7Hrq()['start-from'](r442_xTopTurn + r4_HALFSTROKE, r442_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r442_xMiddleTurn + (r442_yTopTurn - r442_yBottomTurn) / 2, r442_yTopTurn)['arc-hv-to'](r442_xMiddleTurn, r0_mix(r442_yTopTurn, r442_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r442_xMiddleTurn, r442_xBottomTurn, 0.5), r442_yBottomTurn)['arc-hv-to'](r442_xBottomTurn, r0_mix(r442_yBottomTurn + r4_HALFSTROKE, 0, 0.5))['arc-vh-to'](r442_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r442_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t157() {
            var r446_currentGlyph, r446_xn$setwidth$9Jrj, r446_xn$assignunicode$7Hrq, r446_xn$startfrom$1aao, r446_xn$lineto$5sIl, r446_xn$curveto$1aao, r446_xn$cubicto$1aao, r446_xn$putshapes$9Jrj, r446_xn$reverselast$3qIs, r446_include, r446_xn$createstroke$7Hrq, r446_xn$setanchor$9Jrj, r446_xn$dontexport$5sIl, r446_attach, _r446_t0, _r446_t1, _r446_t2, _r446_t3;
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
            r446_xn$dontexport$5sIl();
            r446_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r446_include(r4_ifMarks);
            r446_attach = r4_glyphs['eszet.upright']['italicHookAttachPoint'];
            r446_include(r4_glyphs['eshhook'], r4_Attach(r4_glyphs['eszet.upright']['italicHookAttachPoint'], r4_ORIGIN));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t158() {
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
            r450_xn$setwidth$9Jrj(r4_WIDTH);
            r450_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r450_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r450_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t159() {
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
            r454_xn$setwidth$9Jrj(r4_WIDTH);
            r454_xn$dontexport$5sIl();
            r454_include(r4_glyphs['O']);
            r454_fine = Math['min'](r4_HALFSTROKE * 0.75, (r4_RIGHTSB - r4_SB) * 0.1);
            r454_include(r454_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.7))['set-width'](r454_fine, r454_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.7));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t160() {
            var r458_currentGlyph, r458_xn$setwidth$9Jrj, r458_xn$assignunicode$7Hrq, r458_xn$startfrom$1aao, r458_xn$lineto$5sIl, r458_xn$curveto$1aao, r458_xn$cubicto$1aao, r458_xn$putshapes$9Jrj, r458_xn$reverselast$3qIs, r458_include, r458_xn$createstroke$7Hrq, r458_xn$setanchor$9Jrj, r458_xn$dontexport$5sIl, _r458_t0, _r458_t1, _r458_t2, _r458_t3;
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
            r458_xn$setwidth$9Jrj(r4_WIDTH);
            r458_xn$dontexport$5sIl();
            r458_include(r4_glyphs['O']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t161() {
            var r462_currentGlyph, r462_xn$setwidth$9Jrj, r462_xn$assignunicode$7Hrq, r462_xn$startfrom$1aao, r462_xn$lineto$5sIl, r462_xn$curveto$1aao, r462_xn$cubicto$1aao, r462_xn$putshapes$9Jrj, r462_xn$reverselast$3qIs, r462_include, r462_xn$createstroke$7Hrq, r462_xn$setanchor$9Jrj, r462_xn$dontexport$5sIl, r462_radius, _r462_t0, _r462_t1, _r462_t2, _r462_t3;
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
            r462_xn$dontexport$5sIl();
            r462_include(r4_glyphs['O']);
            r462_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r462_xn$putshapes$9Jrj([r4_Ring(r4_CAPMIDDLE + r462_radius, r4_CAPMIDDLE - r462_radius, r4_MIDDLE + r462_radius, r4_MIDDLE - r462_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t162() {
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
            r466_xn$setwidth$9Jrj(r4_WIDTH);
            r466_xn$assignunicode$7Hrq('1');
            r466_xn$putshapes$9Jrj(r466_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            r466_xn$putshapes$9Jrj(r466_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t163() {
            var r470_currentGlyph, r470_xn$setwidth$9Jrj, r470_xn$assignunicode$7Hrq, r470_xn$startfrom$1aao, r470_xn$lineto$5sIl, r470_xn$curveto$1aao, r470_xn$cubicto$1aao, r470_xn$putshapes$9Jrj, r470_xn$reverselast$3qIs, r470_include, r470_xn$createstroke$7Hrq, r470_xn$setanchor$9Jrj, r470_xn$dontexport$5sIl, _r470_t0, _r470_t1, _r470_t2, _r470_t3;
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
            r470_xn$assignunicode$7Hrq('2');
            r470_xn$putshapes$9Jrj(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r470_xn$putshapes$9Jrj(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r470_xn$putshapes$9Jrj(r470_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t164() {
            var r474_currentGlyph, r474_xn$setwidth$9Jrj, r474_xn$assignunicode$7Hrq, r474_xn$startfrom$1aao, r474_xn$lineto$5sIl, r474_xn$curveto$1aao, r474_xn$cubicto$1aao, r474_xn$putshapes$9Jrj, r474_xn$reverselast$3qIs, r474_include, r474_xn$createstroke$7Hrq, r474_xn$setanchor$9Jrj, r474_xn$dontexport$5sIl, r474_threeRadius, _r474_t0, _r474_t1, _r474_t2, _r474_t3;
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
            r474_xn$assignunicode$7Hrq('3');
            r474_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r474_xn$putshapes$9Jrj(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r474_xn$putshapes$9Jrj(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r474_xn$putshapes$9Jrj(r474_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r474_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            r474_xn$putshapes$9Jrj(r474_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r474_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t165() {
            var r478_currentGlyph, r478_xn$setwidth$9Jrj, r478_xn$assignunicode$7Hrq, r478_xn$startfrom$1aao, r478_xn$lineto$5sIl, r478_xn$curveto$1aao, r478_xn$cubicto$1aao, r478_xn$putshapes$9Jrj, r478_xn$reverselast$3qIs, r478_include, r478_xn$createstroke$7Hrq, r478_xn$setanchor$9Jrj, r478_xn$dontexport$5sIl, r478_bar, r478_vert, _r478_t0, _r478_t1, _r478_t2, _r478_t3;
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
            r478_xn$assignunicode$7Hrq('4');
            r478_bar = r4_CAP * 0.4;
            r478_vert = r4_WIDTH * 0.55;
            r478_xn$putshapes$9Jrj(r478_xn$createstroke$7Hrq()['start-from'](r4_SB, r478_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r478_bar)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r478_xn$putshapes$9Jrj(r478_xn$createstroke$7Hrq()['start-from'](r478_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r478_vert, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            r478_xn$putshapes$9Jrj(r478_xn$createstroke$7Hrq()['start-from'](r4_SB, r478_bar)['set-width'](0, r4_STROKE)['line-to'](r478_vert, r4_CAP)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t166() {
            var r482_currentGlyph, r482_xn$setwidth$9Jrj, r482_xn$assignunicode$7Hrq, r482_xn$startfrom$1aao, r482_xn$lineto$5sIl, r482_xn$curveto$1aao, r482_xn$cubicto$1aao, r482_xn$putshapes$9Jrj, r482_xn$reverselast$3qIs, r482_include, r482_xn$createstroke$7Hrq, r482_xn$setanchor$9Jrj, r482_xn$dontexport$5sIl, _r482_t0, _r482_t1, _r482_t2, _r482_t3;
            _r482_t0 = this;
            r482_currentGlyph = _r482_t0;
            r482_xn$setwidth$9Jrj = _r482_t0['set-width']['bind'](_r482_t0);
            r482_xn$assignunicode$7Hrq = function _r482_t2(r483_code) {
                var r483_code, _r483_t0, _r483_t1;
                r482_currentGlyph['assign-unicode'](r483_code);
                return r4_unicodeGlyphs[r482_currentGlyph['unicode'][r482_currentGlyph['unicode']['length'] - 1]] = r482_currentGlyph;
            };
            r482_xn$startfrom$1aao = _r482_t0['start-from']['bind'](_r482_t0);
            r482_xn$lineto$5sIl = _r482_t0['line-to']['bind'](_r482_t0);
            r482_xn$curveto$1aao = _r482_t0['curve-to']['bind'](_r482_t0);
            r482_xn$cubicto$1aao = _r482_t0['cubic-to']['bind'](_r482_t0);
            r482_xn$putshapes$9Jrj = _r482_t0['put-shapes']['bind'](_r482_t0);
            r482_xn$reverselast$3qIs = _r482_t0['reverse-last']['bind'](_r482_t0);
            r482_include = _r482_t0['include']['bind'](_r482_t0);
            r482_xn$createstroke$7Hrq = _r482_t0['create-stroke']['bind'](_r482_t0);
            r482_xn$setanchor$9Jrj = _r482_t0['set-anchor']['bind'](_r482_t0);
            r482_xn$dontexport$5sIl = function _r482_t3() {
                var _r484_t0, _r484_t1;
                return r482_currentGlyph['dontExport'] = true;
            };
            _r482_t0['gizmo'] = r4_globalTransform;
            _r482_t0['set-width'](r4_WIDTH);
            r482_xn$setwidth$9Jrj(r4_WIDTH);
            r482_xn$assignunicode$7Hrq('5');
            r482_xn$putshapes$9Jrj(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r482_xn$putshapes$9Jrj(r482_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD)['to-outline']());
            r482_xn$putshapes$9Jrj(r482_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r482_xn$putshapes$9Jrj(r482_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t167() {
            var r486_currentGlyph, r486_xn$setwidth$9Jrj, r486_xn$assignunicode$7Hrq, r486_xn$startfrom$1aao, r486_xn$lineto$5sIl, r486_xn$curveto$1aao, r486_xn$cubicto$1aao, r486_xn$putshapes$9Jrj, r486_xn$reverselast$3qIs, r486_include, r486_xn$createstroke$7Hrq, r486_xn$setanchor$9Jrj, r486_xn$dontexport$5sIl, r486_ymiddlea, _r486_t0, _r486_t1, _r486_t2, _r486_t3;
            _r486_t0 = this;
            r486_currentGlyph = _r486_t0;
            r486_xn$setwidth$9Jrj = _r486_t0['set-width']['bind'](_r486_t0);
            r486_xn$assignunicode$7Hrq = function _r486_t2(r487_code) {
                var r487_code, _r487_t0, _r487_t1;
                r486_currentGlyph['assign-unicode'](r487_code);
                return r4_unicodeGlyphs[r486_currentGlyph['unicode'][r486_currentGlyph['unicode']['length'] - 1]] = r486_currentGlyph;
            };
            r486_xn$startfrom$1aao = _r486_t0['start-from']['bind'](_r486_t0);
            r486_xn$lineto$5sIl = _r486_t0['line-to']['bind'](_r486_t0);
            r486_xn$curveto$1aao = _r486_t0['curve-to']['bind'](_r486_t0);
            r486_xn$cubicto$1aao = _r486_t0['cubic-to']['bind'](_r486_t0);
            r486_xn$putshapes$9Jrj = _r486_t0['put-shapes']['bind'](_r486_t0);
            r486_xn$reverselast$3qIs = _r486_t0['reverse-last']['bind'](_r486_t0);
            r486_include = _r486_t0['include']['bind'](_r486_t0);
            r486_xn$createstroke$7Hrq = _r486_t0['create-stroke']['bind'](_r486_t0);
            r486_xn$setanchor$9Jrj = _r486_t0['set-anchor']['bind'](_r486_t0);
            r486_xn$dontexport$5sIl = function _r486_t3() {
                var _r488_t0, _r488_t1;
                return r486_currentGlyph['dontExport'] = true;
            };
            _r486_t0['gizmo'] = r4_globalTransform;
            _r486_t0['set-width'](r4_WIDTH);
            r486_xn$setwidth$9Jrj(r4_WIDTH);
            r486_xn$assignunicode$7Hrq('6');
            r486_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r486_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r486_include(r486_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r486_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r486_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t168() {
            var r490_currentGlyph, r490_xn$setwidth$9Jrj, r490_xn$assignunicode$7Hrq, r490_xn$startfrom$1aao, r490_xn$lineto$5sIl, r490_xn$curveto$1aao, r490_xn$cubicto$1aao, r490_xn$putshapes$9Jrj, r490_xn$reverselast$3qIs, r490_include, r490_xn$createstroke$7Hrq, r490_xn$setanchor$9Jrj, r490_xn$dontexport$5sIl, r490_cor, r490_x, _r490_t0, _r490_t1, _r490_t2, _r490_t3;
            _r490_t0 = this;
            r490_currentGlyph = _r490_t0;
            r490_xn$setwidth$9Jrj = _r490_t0['set-width']['bind'](_r490_t0);
            r490_xn$assignunicode$7Hrq = function _r490_t2(r491_code) {
                var r491_code, _r491_t0, _r491_t1;
                r490_currentGlyph['assign-unicode'](r491_code);
                return r4_unicodeGlyphs[r490_currentGlyph['unicode'][r490_currentGlyph['unicode']['length'] - 1]] = r490_currentGlyph;
            };
            r490_xn$startfrom$1aao = _r490_t0['start-from']['bind'](_r490_t0);
            r490_xn$lineto$5sIl = _r490_t0['line-to']['bind'](_r490_t0);
            r490_xn$curveto$1aao = _r490_t0['curve-to']['bind'](_r490_t0);
            r490_xn$cubicto$1aao = _r490_t0['cubic-to']['bind'](_r490_t0);
            r490_xn$putshapes$9Jrj = _r490_t0['put-shapes']['bind'](_r490_t0);
            r490_xn$reverselast$3qIs = _r490_t0['reverse-last']['bind'](_r490_t0);
            r490_include = _r490_t0['include']['bind'](_r490_t0);
            r490_xn$createstroke$7Hrq = _r490_t0['create-stroke']['bind'](_r490_t0);
            r490_xn$setanchor$9Jrj = _r490_t0['set-anchor']['bind'](_r490_t0);
            r490_xn$dontexport$5sIl = function _r490_t3() {
                var _r492_t0, _r492_t1;
                return r490_currentGlyph['dontExport'] = true;
            };
            _r490_t0['gizmo'] = r4_globalTransform;
            _r490_t0['set-width'](r4_WIDTH);
            r490_xn$setwidth$9Jrj(r4_WIDTH);
            r490_xn$assignunicode$7Hrq('7');
            r490_xn$putshapes$9Jrj(r490_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r490_cor = 1.15;
            r490_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r490_xn$startfrom$1aao(r490_x, 0);
            r490_xn$lineto$5sIl(r490_x + r4_STROKE * r490_cor, 0);
            r490_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r490_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r490_cor, r4_CAP - r4_STROKE);
            r490_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t169() {
            var r494_currentGlyph, r494_xn$setwidth$9Jrj, r494_xn$assignunicode$7Hrq, r494_xn$startfrom$1aao, r494_xn$lineto$5sIl, r494_xn$curveto$1aao, r494_xn$cubicto$1aao, r494_xn$putshapes$9Jrj, r494_xn$reverselast$3qIs, r494_include, r494_xn$createstroke$7Hrq, r494_xn$setanchor$9Jrj, r494_xn$dontexport$5sIl, r494_sma, r494_smb, r494_p, _r494_t0, _r494_t1, _r494_t2, _r494_t3;
            _r494_t0 = this;
            r494_currentGlyph = _r494_t0;
            r494_xn$setwidth$9Jrj = _r494_t0['set-width']['bind'](_r494_t0);
            r494_xn$assignunicode$7Hrq = function _r494_t2(r495_code) {
                var r495_code, _r495_t0, _r495_t1;
                r494_currentGlyph['assign-unicode'](r495_code);
                return r4_unicodeGlyphs[r494_currentGlyph['unicode'][r494_currentGlyph['unicode']['length'] - 1]] = r494_currentGlyph;
            };
            r494_xn$startfrom$1aao = _r494_t0['start-from']['bind'](_r494_t0);
            r494_xn$lineto$5sIl = _r494_t0['line-to']['bind'](_r494_t0);
            r494_xn$curveto$1aao = _r494_t0['curve-to']['bind'](_r494_t0);
            r494_xn$cubicto$1aao = _r494_t0['cubic-to']['bind'](_r494_t0);
            r494_xn$putshapes$9Jrj = _r494_t0['put-shapes']['bind'](_r494_t0);
            r494_xn$reverselast$3qIs = _r494_t0['reverse-last']['bind'](_r494_t0);
            r494_include = _r494_t0['include']['bind'](_r494_t0);
            r494_xn$createstroke$7Hrq = _r494_t0['create-stroke']['bind'](_r494_t0);
            r494_xn$setanchor$9Jrj = _r494_t0['set-anchor']['bind'](_r494_t0);
            r494_xn$dontexport$5sIl = function _r494_t3() {
                var _r496_t0, _r496_t1;
                return r494_currentGlyph['dontExport'] = true;
            };
            _r494_t0['gizmo'] = r4_globalTransform;
            _r494_t0['set-width'](r4_WIDTH);
            r494_xn$setwidth$9Jrj(r4_WIDTH);
            r494_xn$assignunicode$7Hrq('8');
            r494_sma = r4_SMOOTHA * 0.975;
            r494_smb = r4_SMOOTHB * 0.975;
            r494_p = 0.96;
            r494_xn$putshapes$9Jrj(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r494_p), r4_CAP - r494_sma * r494_p, r4_RIGHTSB, r494_sma));
            r494_xn$putshapes$9Jrj(r4_xsStrand(r4_SB, r494_smb, r0_mix(r4_SB, r4_RIGHTSB, r494_p), r4_CAP - r494_smb * r494_p));
            r494_xn$putshapes$9Jrj(r494_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r494_p), r4_CAP - r494_smb * r494_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r494_p), r4_CAP - r494_sma * r494_p)['to-outline']());
            r494_xn$putshapes$9Jrj(r494_xn$createstroke$7Hrq()['start-from'](r4_SB, r494_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r494_sma)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t170() {
            var r498_currentGlyph, r498_xn$setwidth$9Jrj, r498_xn$assignunicode$7Hrq, r498_xn$startfrom$1aao, r498_xn$lineto$5sIl, r498_xn$curveto$1aao, r498_xn$cubicto$1aao, r498_xn$putshapes$9Jrj, r498_xn$reverselast$3qIs, r498_include, r498_xn$createstroke$7Hrq, r498_xn$setanchor$9Jrj, r498_xn$dontexport$5sIl, r498_ymiddlea, _r498_t0, _r498_t1, _r498_t2, _r498_t3;
            _r498_t0 = this;
            r498_currentGlyph = _r498_t0;
            r498_xn$setwidth$9Jrj = _r498_t0['set-width']['bind'](_r498_t0);
            r498_xn$assignunicode$7Hrq = function _r498_t2(r499_code) {
                var r499_code, _r499_t0, _r499_t1;
                r498_currentGlyph['assign-unicode'](r499_code);
                return r4_unicodeGlyphs[r498_currentGlyph['unicode'][r498_currentGlyph['unicode']['length'] - 1]] = r498_currentGlyph;
            };
            r498_xn$startfrom$1aao = _r498_t0['start-from']['bind'](_r498_t0);
            r498_xn$lineto$5sIl = _r498_t0['line-to']['bind'](_r498_t0);
            r498_xn$curveto$1aao = _r498_t0['curve-to']['bind'](_r498_t0);
            r498_xn$cubicto$1aao = _r498_t0['cubic-to']['bind'](_r498_t0);
            r498_xn$putshapes$9Jrj = _r498_t0['put-shapes']['bind'](_r498_t0);
            r498_xn$reverselast$3qIs = _r498_t0['reverse-last']['bind'](_r498_t0);
            r498_include = _r498_t0['include']['bind'](_r498_t0);
            r498_xn$createstroke$7Hrq = _r498_t0['create-stroke']['bind'](_r498_t0);
            r498_xn$setanchor$9Jrj = _r498_t0['set-anchor']['bind'](_r498_t0);
            r498_xn$dontexport$5sIl = function _r498_t3() {
                var _r500_t0, _r500_t1;
                return r498_currentGlyph['dontExport'] = true;
            };
            _r498_t0['gizmo'] = r4_globalTransform;
            _r498_t0['set-width'](r4_WIDTH);
            r498_xn$setwidth$9Jrj(r4_WIDTH);
            r498_xn$assignunicode$7Hrq('9');
            r498_xn$putshapes$9Jrj(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r498_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r498_xn$putshapes$9Jrj(r498_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r498_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4)['to-outline']());
            r498_xn$putshapes$9Jrj(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t171() {
            var r502_currentGlyph, r502_xn$setwidth$9Jrj, r502_xn$assignunicode$7Hrq, r502_xn$startfrom$1aao, r502_xn$lineto$5sIl, r502_xn$curveto$1aao, r502_xn$cubicto$1aao, r502_xn$putshapes$9Jrj, r502_xn$reverselast$3qIs, r502_include, r502_xn$createstroke$7Hrq, r502_xn$setanchor$9Jrj, r502_xn$dontexport$5sIl, _r502_t0, _r502_t1, _r502_t2, _r502_t3;
            _r502_t0 = this;
            r502_currentGlyph = _r502_t0;
            r502_xn$setwidth$9Jrj = _r502_t0['set-width']['bind'](_r502_t0);
            r502_xn$assignunicode$7Hrq = function _r502_t2(r503_code) {
                var r503_code, _r503_t0, _r503_t1;
                r502_currentGlyph['assign-unicode'](r503_code);
                return r4_unicodeGlyphs[r502_currentGlyph['unicode'][r502_currentGlyph['unicode']['length'] - 1]] = r502_currentGlyph;
            };
            r502_xn$startfrom$1aao = _r502_t0['start-from']['bind'](_r502_t0);
            r502_xn$lineto$5sIl = _r502_t0['line-to']['bind'](_r502_t0);
            r502_xn$curveto$1aao = _r502_t0['curve-to']['bind'](_r502_t0);
            r502_xn$cubicto$1aao = _r502_t0['cubic-to']['bind'](_r502_t0);
            r502_xn$putshapes$9Jrj = _r502_t0['put-shapes']['bind'](_r502_t0);
            r502_xn$reverselast$3qIs = _r502_t0['reverse-last']['bind'](_r502_t0);
            r502_include = _r502_t0['include']['bind'](_r502_t0);
            r502_xn$createstroke$7Hrq = _r502_t0['create-stroke']['bind'](_r502_t0);
            r502_xn$setanchor$9Jrj = _r502_t0['set-anchor']['bind'](_r502_t0);
            r502_xn$dontexport$5sIl = function _r502_t3() {
                var _r504_t0, _r504_t1;
                return r502_currentGlyph['dontExport'] = true;
            };
            _r502_t0['gizmo'] = r4_globalTransform;
            _r502_t0['set-width'](r4_WIDTH);
            r502_xn$setwidth$9Jrj(r4_WIDTH);
            r502_xn$assignunicode$7Hrq('$');
            r502_include(r4_glyphs['S']);
            r502_include(r502_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r502_include(r502_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t172() {
            var r506_currentGlyph, r506_xn$setwidth$9Jrj, r506_xn$assignunicode$7Hrq, r506_xn$startfrom$1aao, r506_xn$lineto$5sIl, r506_xn$curveto$1aao, r506_xn$cubicto$1aao, r506_xn$putshapes$9Jrj, r506_xn$reverselast$3qIs, r506_include, r506_xn$createstroke$7Hrq, r506_xn$setanchor$9Jrj, r506_xn$dontexport$5sIl, r506_fine, r506_p, r506_l, r506_pr, r506_q, r506_r, r506_s, _r506_t0, _r506_t1, _r506_t2, _r506_t3;
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
            r506_xn$setwidth$9Jrj(r4_WIDTH);
            r506_xn$assignunicode$7Hrq('&');
            r506_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r506_p = 0.85;
            r506_l = 0.05;
            r506_pr = 0.9;
            r506_q = 0.45;
            r506_r = 1.1;
            r506_s = 0;
            r506_include(r506_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r506_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r506_p), r4_CAP - r4_SMOOTHB * r506_pr, r4_HALFSTROKE, r506_fine / 2));
            r506_include(r506_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r506_p), r4_CAP - r4_SMOOTHB * r506_pr)['set-width'](r506_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r506_p, r506_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r506_l), r4_CAP - r4_SMOOTHA * r506_pr));
            r506_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r506_l), r4_CAP - r4_SMOOTHA * r506_pr, r0_mix(r4_SB, r4_RIGHTSB, r506_r), r4_SMOOTHA * r506_s, r506_fine / 2, r506_fine / 2, null, null, r4_SMOOTHA * r506_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t173() {
            var r510_currentGlyph, r510_xn$setwidth$9Jrj, r510_xn$assignunicode$7Hrq, r510_xn$startfrom$1aao, r510_xn$lineto$5sIl, r510_xn$curveto$1aao, r510_xn$cubicto$1aao, r510_xn$putshapes$9Jrj, r510_xn$reverselast$3qIs, r510_include, r510_xn$createstroke$7Hrq, r510_xn$setanchor$9Jrj, r510_xn$dontexport$5sIl, r510_top, r510_bot, r510_otop, r510_obot, r510_sw, r510_m1, r510_m2, r510_sma, r510_smb, _r510_t0, _r510_t1, _r510_t2, _r510_t3;
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
            r510_xn$assignunicode$7Hrq('@');
            r510_top = r4_CAP + r4_HALFSTROKE;
            r510_bot = r4_DESCENDER + r4_HALFSTROKE;
            r510_otop = r0_mix(r510_bot, r510_top, 0.75);
            r510_obot = r0_mix(r510_top, r510_bot, 0.8);
            r510_sw = Math['min'](r4_STROKE, (r4_WIDTH - r4_SB * 2) * 0.25);
            r510_m1 = r0_mix(r4_SB + r510_sw, r4_RIGHTSB - r510_sw, 0.47) - r510_sw / 2;
            r510_m2 = r0_mix(r510_m1, r4_RIGHTSB, 0.5);
            r510_sma = r4_SMOOTHA * ((r4_RIGHTSB - r510_m1) / (r4_RIGHTSB - r4_SB));
            r510_smb = r4_SMOOTHB * ((r4_RIGHTSB - r510_m1) / (r4_RIGHTSB - r4_SB));
            r510_include(r510_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r510_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r510_sw, 0)['line-to'](r510_m2, r510_otop - r4_O)['arc-hv-to'](r510_m1, r510_otop - r510_sma)['line-to'](r510_m1, r510_obot + r510_smb)['arc-vh-to'](r510_m2 + r4_STROKE * r4_globalTransform['yx'], r510_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r510_obot + r510_sma)['line-to'](r4_RIGHTSB, r510_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r510_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r510_top - r4_SMOOTHA)['set-width'](r510_sw, 0)['line-to'](r4_SB, r510_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r510_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r510_bot + r4_O)['heads-to'](r4_RIGHTWARD));
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
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t174() {
            var r514_currentGlyph, r514_xn$setwidth$9Jrj, r514_xn$assignunicode$7Hrq, r514_xn$startfrom$1aao, r514_xn$lineto$5sIl, r514_xn$curveto$1aao, r514_xn$cubicto$1aao, r514_xn$putshapes$9Jrj, r514_xn$reverselast$3qIs, r514_include, r514_xn$createstroke$7Hrq, r514_xn$setanchor$9Jrj, r514_xn$dontexport$5sIl, r514_p, _r514_t0, _r514_t1, _r514_t2, _r514_t3;
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
            r514_xn$assignunicode$7Hrq('(');
            r514_p = 0.6;
            r514_include(r514_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r514_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r514_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t175() {
            var r518_currentGlyph, r518_xn$setwidth$9Jrj, r518_xn$assignunicode$7Hrq, r518_xn$startfrom$1aao, r518_xn$lineto$5sIl, r518_xn$curveto$1aao, r518_xn$cubicto$1aao, r518_xn$putshapes$9Jrj, r518_xn$reverselast$3qIs, r518_include, r518_xn$createstroke$7Hrq, r518_xn$setanchor$9Jrj, r518_xn$dontexport$5sIl, r518_p, _r518_t0, _r518_t1, _r518_t2, _r518_t3;
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
            r518_xn$setwidth$9Jrj(r4_WIDTH);
            r518_xn$assignunicode$7Hrq(')');
            r518_p = 0.6;
            r518_include(r518_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r518_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r518_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t176() {
            var r522_currentGlyph, r522_xn$setwidth$9Jrj, r522_xn$assignunicode$7Hrq, r522_xn$startfrom$1aao, r522_xn$lineto$5sIl, r522_xn$curveto$1aao, r522_xn$cubicto$1aao, r522_xn$putshapes$9Jrj, r522_xn$reverselast$3qIs, r522_include, r522_xn$createstroke$7Hrq, r522_xn$setanchor$9Jrj, r522_xn$dontexport$5sIl, _r522_t0, _r522_t1, _r522_t2, _r522_t3;
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
            r522_xn$assignunicode$7Hrq('[');
            r522_include(r522_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r522_include(r522_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r522_include(r522_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t177() {
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
            r526_xn$assignunicode$7Hrq(']');
            r526_include(r526_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r526_include(r526_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r526_include(r526_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t178() {
            var r530_currentGlyph, r530_xn$setwidth$9Jrj, r530_xn$assignunicode$7Hrq, r530_xn$startfrom$1aao, r530_xn$lineto$5sIl, r530_xn$curveto$1aao, r530_xn$cubicto$1aao, r530_xn$putshapes$9Jrj, r530_xn$reverselast$3qIs, r530_include, r530_xn$createstroke$7Hrq, r530_xn$setanchor$9Jrj, r530_xn$dontexport$5sIl, r530_parenCenter, r530_radius, _r530_t0, _r530_t1, _r530_t2, _r530_t3;
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
            r530_xn$assignunicode$7Hrq('{');
            r530_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r530_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r530_parenCenter;
            r530_include(r530_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r530_parenCenter, r4_parenTop - r530_radius)['line-to'](r530_parenCenter, r4_parenMid + r530_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r530_include(r530_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r530_parenCenter, r4_parenBot + r530_radius)['line-to'](r530_parenCenter, r4_parenMid - r530_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t179() {
            var r534_currentGlyph, r534_xn$setwidth$9Jrj, r534_xn$assignunicode$7Hrq, r534_xn$startfrom$1aao, r534_xn$lineto$5sIl, r534_xn$curveto$1aao, r534_xn$cubicto$1aao, r534_xn$putshapes$9Jrj, r534_xn$reverselast$3qIs, r534_include, r534_xn$createstroke$7Hrq, r534_xn$setanchor$9Jrj, r534_xn$dontexport$5sIl, r534_parenCenter, r534_radius, _r534_t0, _r534_t1, _r534_t2, _r534_t3;
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
            r534_xn$assignunicode$7Hrq('}');
            r534_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r534_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r534_parenCenter;
            r534_include(r534_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r534_parenCenter, r4_parenTop - r534_radius)['line-to'](r534_parenCenter, r4_parenMid + r534_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r534_include(r534_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r534_parenCenter, r4_parenBot + r534_radius)['line-to'](r534_parenCenter, r4_parenMid - r534_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t180() {
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
            r538_xn$assignunicode$7Hrq('.');
            r538_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t181() {
            var r542_currentGlyph, r542_xn$setwidth$9Jrj, r542_xn$assignunicode$7Hrq, r542_xn$startfrom$1aao, r542_xn$lineto$5sIl, r542_xn$curveto$1aao, r542_xn$cubicto$1aao, r542_xn$putshapes$9Jrj, r542_xn$reverselast$3qIs, r542_include, r542_xn$createstroke$7Hrq, r542_xn$setanchor$9Jrj, r542_xn$dontexport$5sIl, _r542_t0, _r542_t1, _r542_t2, _r542_t3;
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
            r542_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t182() {
            var r546_currentGlyph, r546_xn$setwidth$9Jrj, r546_xn$assignunicode$7Hrq, r546_xn$startfrom$1aao, r546_xn$lineto$5sIl, r546_xn$curveto$1aao, r546_xn$cubicto$1aao, r546_xn$putshapes$9Jrj, r546_xn$reverselast$3qIs, r546_include, r546_xn$createstroke$7Hrq, r546_xn$setanchor$9Jrj, r546_xn$dontexport$5sIl, r546_sw, _r546_t0, _r546_t1, _r546_t2, _r546_t3;
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
            r546_xn$assignunicode$7Hrq(',');
            r546_include(r4_glyphs['period']);
            r546_sw = r4_PERIODSIZE * 0.5;
            r546_include(r546_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r546_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t183() {
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
            r550_xn$assignunicode$7Hrq(':');
            r550_include(r4_glyphs['period']);
            r550_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t184() {
            var r554_currentGlyph, r554_xn$setwidth$9Jrj, r554_xn$assignunicode$7Hrq, r554_xn$startfrom$1aao, r554_xn$lineto$5sIl, r554_xn$curveto$1aao, r554_xn$cubicto$1aao, r554_xn$putshapes$9Jrj, r554_xn$reverselast$3qIs, r554_include, r554_xn$createstroke$7Hrq, r554_xn$setanchor$9Jrj, r554_xn$dontexport$5sIl, _r554_t0, _r554_t1, _r554_t2, _r554_t3;
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
            r554_xn$assignunicode$7Hrq(';');
            r554_include(r4_glyphs['comma']);
            r554_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t185() {
            var r558_currentGlyph, r558_xn$setwidth$9Jrj, r558_xn$assignunicode$7Hrq, r558_xn$startfrom$1aao, r558_xn$lineto$5sIl, r558_xn$curveto$1aao, r558_xn$cubicto$1aao, r558_xn$putshapes$9Jrj, r558_xn$reverselast$3qIs, r558_include, r558_xn$createstroke$7Hrq, r558_xn$setanchor$9Jrj, r558_xn$dontexport$5sIl, _r558_t0, _r558_t1, _r558_t2, _r558_t3;
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
            r558_xn$assignunicode$7Hrq('?');
            r558_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r558_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r558_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t186() {
            var r562_currentGlyph, r562_xn$setwidth$9Jrj, r562_xn$assignunicode$7Hrq, r562_xn$startfrom$1aao, r562_xn$lineto$5sIl, r562_xn$curveto$1aao, r562_xn$cubicto$1aao, r562_xn$putshapes$9Jrj, r562_xn$reverselast$3qIs, r562_include, r562_xn$createstroke$7Hrq, r562_xn$setanchor$9Jrj, r562_xn$dontexport$5sIl, _r562_t0, _r562_t1, _r562_t2, _r562_t3;
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
            r562_xn$assignunicode$7Hrq('!');
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r562_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t187() {
            var r566_currentGlyph, r566_xn$setwidth$9Jrj, r566_xn$assignunicode$7Hrq, r566_xn$startfrom$1aao, r566_xn$lineto$5sIl, r566_xn$curveto$1aao, r566_xn$cubicto$1aao, r566_xn$putshapes$9Jrj, r566_xn$reverselast$3qIs, r566_include, r566_xn$createstroke$7Hrq, r566_xn$setanchor$9Jrj, r566_xn$dontexport$5sIl, _r566_t0, _r566_t1, _r566_t2, _r566_t3;
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
            r566_xn$assignunicode$7Hrq('_');
            r566_include(r566_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t188() {
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
            r570_xn$assignunicode$7Hrq('-');
            r570_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t189() {
            var r574_currentGlyph, r574_xn$setwidth$9Jrj, r574_xn$assignunicode$7Hrq, r574_xn$startfrom$1aao, r574_xn$lineto$5sIl, r574_xn$curveto$1aao, r574_xn$cubicto$1aao, r574_xn$putshapes$9Jrj, r574_xn$reverselast$3qIs, r574_include, r574_xn$createstroke$7Hrq, r574_xn$setanchor$9Jrj, r574_xn$dontexport$5sIl, _r574_t0, _r574_t1, _r574_t2, _r574_t3;
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
            r574_xn$assignunicode$7Hrq('+');
            r574_include(r4_glyphs['hyphen']);
            r574_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t190() {
            var r578_currentGlyph, r578_xn$setwidth$9Jrj, r578_xn$assignunicode$7Hrq, r578_xn$startfrom$1aao, r578_xn$lineto$5sIl, r578_xn$curveto$1aao, r578_xn$cubicto$1aao, r578_xn$putshapes$9Jrj, r578_xn$reverselast$3qIs, r578_include, r578_xn$createstroke$7Hrq, r578_xn$setanchor$9Jrj, r578_xn$dontexport$5sIl, _r578_t0, _r578_t1, _r578_t2, _r578_t3;
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
            r578_xn$assignunicode$7Hrq('=');
            r578_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r578_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t191() {
            var r582_currentGlyph, r582_xn$setwidth$9Jrj, r582_xn$assignunicode$7Hrq, r582_xn$startfrom$1aao, r582_xn$lineto$5sIl, r582_xn$curveto$1aao, r582_xn$cubicto$1aao, r582_xn$putshapes$9Jrj, r582_xn$reverselast$3qIs, r582_include, r582_xn$createstroke$7Hrq, r582_xn$setanchor$9Jrj, r582_xn$dontexport$5sIl, _r582_t0, _r582_t1, _r582_t2, _r582_t3;
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
            r582_xn$assignunicode$7Hrq('|');
            r582_include(r582_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t192() {
            var r586_currentGlyph, r586_xn$setwidth$9Jrj, r586_xn$assignunicode$7Hrq, r586_xn$startfrom$1aao, r586_xn$lineto$5sIl, r586_xn$curveto$1aao, r586_xn$cubicto$1aao, r586_xn$putshapes$9Jrj, r586_xn$reverselast$3qIs, r586_include, r586_xn$createstroke$7Hrq, r586_xn$setanchor$9Jrj, r586_xn$dontexport$5sIl, r586_cor, _r586_t0, _r586_t1, _r586_t2, _r586_t3;
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
            r586_xn$assignunicode$7Hrq('/');
            r586_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r586_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r586_xn$lineto$5sIl(r4_SB + r4_STROKE * r586_cor, r4_parenBot);
            r586_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r586_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r586_cor, r4_parenTop);
            r586_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t193() {
            var r590_currentGlyph, r590_xn$setwidth$9Jrj, r590_xn$assignunicode$7Hrq, r590_xn$startfrom$1aao, r590_xn$lineto$5sIl, r590_xn$curveto$1aao, r590_xn$cubicto$1aao, r590_xn$putshapes$9Jrj, r590_xn$reverselast$3qIs, r590_include, r590_xn$createstroke$7Hrq, r590_xn$setanchor$9Jrj, r590_xn$dontexport$5sIl, r590_cor, _r590_t0, _r590_t1, _r590_t2, _r590_t3;
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
            r590_xn$assignunicode$7Hrq('\\');
            r590_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r590_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r590_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r590_cor, r4_parenBot);
            r590_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r590_xn$lineto$5sIl(r4_SB + r4_STROKE * r590_cor, r4_parenTop);
            r590_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t194() {
            var r594_currentGlyph, r594_xn$setwidth$9Jrj, r594_xn$assignunicode$7Hrq, r594_xn$startfrom$1aao, r594_xn$lineto$5sIl, r594_xn$curveto$1aao, r594_xn$cubicto$1aao, r594_xn$putshapes$9Jrj, r594_xn$reverselast$3qIs, r594_include, r594_xn$createstroke$7Hrq, r594_xn$setanchor$9Jrj, r594_xn$dontexport$5sIl, r594_fine, _r594_t0, _r594_t1, _r594_t2, _r594_t3;
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
            r594_xn$assignunicode$7Hrq('#');
            r594_fine = Math['min'](r4_STROKE, (r4_RIGHTSB - r4_SB) * 0.25);
            r594_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r594_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r594_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r594_fine, r4_parenTop - r594_fine, r594_fine));
            r594_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r594_fine, r4_parenTop - r594_fine, r594_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t195() {
            var r598_currentGlyph, r598_xn$setwidth$9Jrj, r598_xn$assignunicode$7Hrq, r598_xn$startfrom$1aao, r598_xn$lineto$5sIl, r598_xn$curveto$1aao, r598_xn$cubicto$1aao, r598_xn$putshapes$9Jrj, r598_xn$reverselast$3qIs, r598_include, r598_xn$createstroke$7Hrq, r598_xn$setanchor$9Jrj, r598_xn$dontexport$5sIl, r598_top, r598_bot, _r598_t0, _r598_t1, _r598_t2, _r598_t3;
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
            r598_xn$assignunicode$7Hrq('<');
            r598_top = r0_mix(0, r4_CAP, 0.75);
            r598_bot = r0_mix(0, r4_CAP, 0.1);
            r598_include(r598_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r598_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r598_top, r598_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r598_include(r598_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r598_top, r598_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r598_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t196() {
            var r602_currentGlyph, r602_xn$setwidth$9Jrj, r602_xn$assignunicode$7Hrq, r602_xn$startfrom$1aao, r602_xn$lineto$5sIl, r602_xn$curveto$1aao, r602_xn$cubicto$1aao, r602_xn$putshapes$9Jrj, r602_xn$reverselast$3qIs, r602_include, r602_xn$createstroke$7Hrq, r602_xn$setanchor$9Jrj, r602_xn$dontexport$5sIl, r602_top, r602_bot, _r602_t0, _r602_t1, _r602_t2, _r602_t3;
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
            r602_xn$assignunicode$7Hrq('>');
            r602_top = r0_mix(0, r4_CAP, 0.75);
            r602_bot = r0_mix(0, r4_CAP, 0.1);
            r602_include(r602_xn$createstroke$7Hrq()['start-from'](r4_SB, r602_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r602_top, r602_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r602_include(r602_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r602_top, r602_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r602_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t197() {
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
            r606_xn$assignunicode$7Hrq(39);
            r606_include(r606_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t198() {
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
            r610_xn$assignunicode$7Hrq(34);
            r610_include(r610_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r610_include(r610_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t199() {
            var r614_currentGlyph, r614_xn$setwidth$9Jrj, r614_xn$assignunicode$7Hrq, r614_xn$startfrom$1aao, r614_xn$lineto$5sIl, r614_xn$curveto$1aao, r614_xn$cubicto$1aao, r614_xn$putshapes$9Jrj, r614_xn$reverselast$3qIs, r614_include, r614_xn$createstroke$7Hrq, r614_xn$setanchor$9Jrj, r614_xn$dontexport$5sIl, r614_radius, r614_centery, r614_fine, r614_final, r614_j, _r614_t0, _r614_t1, _r614_t2, _r614_t3, _r614_t4, _r614_t5;
            _r614_t2 = this;
            r614_currentGlyph = _r614_t2;
            r614_xn$setwidth$9Jrj = _r614_t2['set-width']['bind'](_r614_t2);
            r614_xn$assignunicode$7Hrq = function _r614_t4(r615_code) {
                var r615_code, _r615_t0, _r615_t1;
                r614_currentGlyph['assign-unicode'](r615_code);
                return r4_unicodeGlyphs[r614_currentGlyph['unicode'][r614_currentGlyph['unicode']['length'] - 1]] = r614_currentGlyph;
            };
            r614_xn$startfrom$1aao = _r614_t2['start-from']['bind'](_r614_t2);
            r614_xn$lineto$5sIl = _r614_t2['line-to']['bind'](_r614_t2);
            r614_xn$curveto$1aao = _r614_t2['curve-to']['bind'](_r614_t2);
            r614_xn$cubicto$1aao = _r614_t2['cubic-to']['bind'](_r614_t2);
            r614_xn$putshapes$9Jrj = _r614_t2['put-shapes']['bind'](_r614_t2);
            r614_xn$reverselast$3qIs = _r614_t2['reverse-last']['bind'](_r614_t2);
            r614_include = _r614_t2['include']['bind'](_r614_t2);
            r614_xn$createstroke$7Hrq = _r614_t2['create-stroke']['bind'](_r614_t2);
            r614_xn$setanchor$9Jrj = _r614_t2['set-anchor']['bind'](_r614_t2);
            r614_xn$dontexport$5sIl = function _r614_t5() {
                var _r616_t0, _r616_t1;
                return r614_currentGlyph['dontExport'] = true;
            };
            _r614_t2['gizmo'] = r4_globalTransform;
            _r614_t2['set-width'](r4_WIDTH);
            r614_xn$setwidth$9Jrj(r4_WIDTH);
            r614_xn$assignunicode$7Hrq('*');
            r614_radius = r4_LONGJUT * 1.2;
            r614_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r614_fine = r4_STROKE * 0.4;
            r614_final = 0.5 * Math['min'](r4_STROKE, r614_radius * Math['PI'] * 2 / 10);
            _r614_t0 = 0;
            _r614_t1 = 5;
            r614_j = _r614_t0;
            for (; r614_j < _r614_t1; r614_j = r614_j + 1) {
                r614_include(r614_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r614_centery)['set-width'](r614_fine, r614_fine)['line-to'](r4_MIDDLE + r614_radius * Math['sin'](r614_j / 5 * Math['PI'] * 2), r614_centery + r614_radius * Math['cos'](r614_j / 5 * Math['PI'] * 2))['set-width'](r614_final, r614_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t200() {
            var r619_currentGlyph, r619_xn$setwidth$9Jrj, r619_xn$assignunicode$7Hrq, r619_xn$startfrom$1aao, r619_xn$lineto$5sIl, r619_xn$curveto$1aao, r619_xn$cubicto$1aao, r619_xn$putshapes$9Jrj, r619_xn$reverselast$3qIs, r619_include, r619_xn$createstroke$7Hrq, r619_xn$setanchor$9Jrj, r619_xn$dontexport$5sIl, r619_percentDotSize, r619_cor, _r619_t0, _r619_t1, _r619_t2, _r619_t3;
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
            r619_xn$assignunicode$7Hrq('%');
            r619_percentDotSize = 0.3;
            r619_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r619_xn$startfrom$1aao(r4_SB, 0);
            r619_xn$lineto$5sIl(r4_SB + r4_STROKE * r619_cor, 0);
            r619_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r619_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r619_cor, r4_CAP);
            r619_include(r619_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r619_include(r619_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](Math['min']((r4_RIGHTSB - r4_SB) * 0.33, r4_STROKE * 1.5), 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_isAboveMark = function _r4_t201(r622_mark) {
            var r622_mark, _r622_t0, _r622_t1;
            return r622_mark && r622_mark['anchors'] && r622_mark['anchors']['above'] && r622_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t209 = r4_allFound = false;
                        else
                            _r4_t209 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t210 = r4_hasMarkAbove = true;
                        else
                            _r4_t210 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t212 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t212 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t213 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t213 = void 0;
                        _r4_t211 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t214(r625_part) {
                            var r625_part, _r625_t0, _r625_t1;
                            return r625_part['name'];
                        })['join']('_'), function _r4_t215() {
                            var r627_currentGlyph, r627_xn$setwidth$9Jrj, r627_xn$assignunicode$7Hrq, r627_xn$startfrom$1aao, r627_xn$lineto$5sIl, r627_xn$curveto$1aao, r627_xn$cubicto$1aao, r627_xn$putshapes$9Jrj, r627_xn$reverselast$3qIs, r627_include, r627_xn$createstroke$7Hrq, r627_xn$setanchor$9Jrj, r627_xn$dontexport$5sIl, r627_part, _r627_t0, _r627_t1, _r627_t2, _r627_t3, _r627_t4, _r627_t5, _r627_t6;
                            _r627_t3 = this;
                            r627_currentGlyph = _r627_t3;
                            r627_xn$setwidth$9Jrj = _r627_t3['set-width']['bind'](_r627_t3);
                            r627_xn$assignunicode$7Hrq = function _r627_t5(r628_code) {
                                var r628_code, _r628_t0, _r628_t1;
                                r627_currentGlyph['assign-unicode'](r628_code);
                                return r4_unicodeGlyphs[r627_currentGlyph['unicode'][r627_currentGlyph['unicode']['length'] - 1]] = r627_currentGlyph;
                            };
                            r627_xn$startfrom$1aao = _r627_t3['start-from']['bind'](_r627_t3);
                            r627_xn$lineto$5sIl = _r627_t3['line-to']['bind'](_r627_t3);
                            r627_xn$curveto$1aao = _r627_t3['curve-to']['bind'](_r627_t3);
                            r627_xn$cubicto$1aao = _r627_t3['cubic-to']['bind'](_r627_t3);
                            r627_xn$putshapes$9Jrj = _r627_t3['put-shapes']['bind'](_r627_t3);
                            r627_xn$reverselast$3qIs = _r627_t3['reverse-last']['bind'](_r627_t3);
                            r627_include = _r627_t3['include']['bind'](_r627_t3);
                            r627_xn$createstroke$7Hrq = _r627_t3['create-stroke']['bind'](_r627_t3);
                            r627_xn$setanchor$9Jrj = _r627_t3['set-anchor']['bind'](_r627_t3);
                            r627_xn$dontexport$5sIl = function _r627_t6() {
                                var _r629_t0, _r629_t1;
                                return r627_currentGlyph['dontExport'] = true;
                            };
                            _r627_t3['gizmo'] = r4_globalTransform;
                            _r627_t3['set-width'](r4_WIDTH);
                            r627_xn$assignunicode$7Hrq(r4_code);
                            r627_include(r4_parts[0], r4_AS_BASE);
                            _r627_t0 = r4_parts['slice'](1);
                            _r627_t1 = _r627_t0['length'];
                            _r627_t2 = 0;
                            for (; _r627_t2 < _r627_t1; _r627_t2 = _r627_t2 + 1) {
                                r627_part = _r627_t0[_r627_t2];
                                r627_include(r627_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t203 = _r4_t211;
                }
                _r4_t202 = _r4_t203;
            } else
                _r4_t202 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t204() {
            var r632_currentGlyph, r632_xn$setwidth$9Jrj, r632_xn$assignunicode$7Hrq, r632_xn$startfrom$1aao, r632_xn$lineto$5sIl, r632_xn$curveto$1aao, r632_xn$cubicto$1aao, r632_xn$putshapes$9Jrj, r632_xn$reverselast$3qIs, r632_include, r632_xn$createstroke$7Hrq, r632_xn$setanchor$9Jrj, r632_xn$dontexport$5sIl, _r632_t0, _r632_t1, _r632_t2, _r632_t3;
            _r632_t0 = this;
            r632_currentGlyph = _r632_t0;
            r632_xn$setwidth$9Jrj = _r632_t0['set-width']['bind'](_r632_t0);
            r632_xn$assignunicode$7Hrq = function _r632_t2(r633_code) {
                var r633_code, _r633_t0, _r633_t1;
                r632_currentGlyph['assign-unicode'](r633_code);
                return r4_unicodeGlyphs[r632_currentGlyph['unicode'][r632_currentGlyph['unicode']['length'] - 1]] = r632_currentGlyph;
            };
            r632_xn$startfrom$1aao = _r632_t0['start-from']['bind'](_r632_t0);
            r632_xn$lineto$5sIl = _r632_t0['line-to']['bind'](_r632_t0);
            r632_xn$curveto$1aao = _r632_t0['curve-to']['bind'](_r632_t0);
            r632_xn$cubicto$1aao = _r632_t0['cubic-to']['bind'](_r632_t0);
            r632_xn$putshapes$9Jrj = _r632_t0['put-shapes']['bind'](_r632_t0);
            r632_xn$reverselast$3qIs = _r632_t0['reverse-last']['bind'](_r632_t0);
            r632_include = _r632_t0['include']['bind'](_r632_t0);
            r632_xn$createstroke$7Hrq = _r632_t0['create-stroke']['bind'](_r632_t0);
            r632_xn$setanchor$9Jrj = _r632_t0['set-anchor']['bind'](_r632_t0);
            r632_xn$dontexport$5sIl = function _r632_t3() {
                var _r634_t0, _r634_t1;
                return r632_currentGlyph['dontExport'] = true;
            };
            _r632_t0['gizmo'] = r4_globalTransform;
            _r632_t0['set-width'](r4_WIDTH);
            r632_xn$assignunicode$7Hrq('`');
            r632_include(r4_glyphs['space'], r4_AS_BASE);
            r632_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t205() {
            var r636_currentGlyph, r636_xn$setwidth$9Jrj, r636_xn$assignunicode$7Hrq, r636_xn$startfrom$1aao, r636_xn$lineto$5sIl, r636_xn$curveto$1aao, r636_xn$cubicto$1aao, r636_xn$putshapes$9Jrj, r636_xn$reverselast$3qIs, r636_include, r636_xn$createstroke$7Hrq, r636_xn$setanchor$9Jrj, r636_xn$dontexport$5sIl, _r636_t0, _r636_t1, _r636_t2, _r636_t3;
            _r636_t0 = this;
            r636_currentGlyph = _r636_t0;
            r636_xn$setwidth$9Jrj = _r636_t0['set-width']['bind'](_r636_t0);
            r636_xn$assignunicode$7Hrq = function _r636_t2(r637_code) {
                var r637_code, _r637_t0, _r637_t1;
                r636_currentGlyph['assign-unicode'](r637_code);
                return r4_unicodeGlyphs[r636_currentGlyph['unicode'][r636_currentGlyph['unicode']['length'] - 1]] = r636_currentGlyph;
            };
            r636_xn$startfrom$1aao = _r636_t0['start-from']['bind'](_r636_t0);
            r636_xn$lineto$5sIl = _r636_t0['line-to']['bind'](_r636_t0);
            r636_xn$curveto$1aao = _r636_t0['curve-to']['bind'](_r636_t0);
            r636_xn$cubicto$1aao = _r636_t0['cubic-to']['bind'](_r636_t0);
            r636_xn$putshapes$9Jrj = _r636_t0['put-shapes']['bind'](_r636_t0);
            r636_xn$reverselast$3qIs = _r636_t0['reverse-last']['bind'](_r636_t0);
            r636_include = _r636_t0['include']['bind'](_r636_t0);
            r636_xn$createstroke$7Hrq = _r636_t0['create-stroke']['bind'](_r636_t0);
            r636_xn$setanchor$9Jrj = _r636_t0['set-anchor']['bind'](_r636_t0);
            r636_xn$dontexport$5sIl = function _r636_t3() {
                var _r638_t0, _r638_t1;
                return r636_currentGlyph['dontExport'] = true;
            };
            _r636_t0['gizmo'] = r4_globalTransform;
            _r636_t0['set-width'](r4_WIDTH);
            r636_xn$assignunicode$7Hrq(180);
            r636_include(r4_glyphs['space'], r4_AS_BASE);
            r636_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t206() {
            var r640_currentGlyph, r640_xn$setwidth$9Jrj, r640_xn$assignunicode$7Hrq, r640_xn$startfrom$1aao, r640_xn$lineto$5sIl, r640_xn$curveto$1aao, r640_xn$cubicto$1aao, r640_xn$putshapes$9Jrj, r640_xn$reverselast$3qIs, r640_include, r640_xn$createstroke$7Hrq, r640_xn$setanchor$9Jrj, r640_xn$dontexport$5sIl, _r640_t0, _r640_t1, _r640_t2, _r640_t3;
            _r640_t0 = this;
            r640_currentGlyph = _r640_t0;
            r640_xn$setwidth$9Jrj = _r640_t0['set-width']['bind'](_r640_t0);
            r640_xn$assignunicode$7Hrq = function _r640_t2(r641_code) {
                var r641_code, _r641_t0, _r641_t1;
                r640_currentGlyph['assign-unicode'](r641_code);
                return r4_unicodeGlyphs[r640_currentGlyph['unicode'][r640_currentGlyph['unicode']['length'] - 1]] = r640_currentGlyph;
            };
            r640_xn$startfrom$1aao = _r640_t0['start-from']['bind'](_r640_t0);
            r640_xn$lineto$5sIl = _r640_t0['line-to']['bind'](_r640_t0);
            r640_xn$curveto$1aao = _r640_t0['curve-to']['bind'](_r640_t0);
            r640_xn$cubicto$1aao = _r640_t0['cubic-to']['bind'](_r640_t0);
            r640_xn$putshapes$9Jrj = _r640_t0['put-shapes']['bind'](_r640_t0);
            r640_xn$reverselast$3qIs = _r640_t0['reverse-last']['bind'](_r640_t0);
            r640_include = _r640_t0['include']['bind'](_r640_t0);
            r640_xn$createstroke$7Hrq = _r640_t0['create-stroke']['bind'](_r640_t0);
            r640_xn$setanchor$9Jrj = _r640_t0['set-anchor']['bind'](_r640_t0);
            r640_xn$dontexport$5sIl = function _r640_t3() {
                var _r642_t0, _r642_t1;
                return r640_currentGlyph['dontExport'] = true;
            };
            _r640_t0['gizmo'] = r4_globalTransform;
            _r640_t0['set-width'](r4_WIDTH);
            r640_xn$setwidth$9Jrj(r4_WIDTH);
            r640_xn$assignunicode$7Hrq(94);
            r640_include(r4_glyphs['space'], r4_AS_BASE);
            r640_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t207() {
            var r644_currentGlyph, r644_xn$setwidth$9Jrj, r644_xn$assignunicode$7Hrq, r644_xn$startfrom$1aao, r644_xn$lineto$5sIl, r644_xn$curveto$1aao, r644_xn$cubicto$1aao, r644_xn$putshapes$9Jrj, r644_xn$reverselast$3qIs, r644_include, r644_xn$createstroke$7Hrq, r644_xn$setanchor$9Jrj, r644_xn$dontexport$5sIl, _r644_t0, _r644_t1, _r644_t2, _r644_t3;
            _r644_t0 = this;
            r644_currentGlyph = _r644_t0;
            r644_xn$setwidth$9Jrj = _r644_t0['set-width']['bind'](_r644_t0);
            r644_xn$assignunicode$7Hrq = function _r644_t2(r645_code) {
                var r645_code, _r645_t0, _r645_t1;
                r644_currentGlyph['assign-unicode'](r645_code);
                return r4_unicodeGlyphs[r644_currentGlyph['unicode'][r644_currentGlyph['unicode']['length'] - 1]] = r644_currentGlyph;
            };
            r644_xn$startfrom$1aao = _r644_t0['start-from']['bind'](_r644_t0);
            r644_xn$lineto$5sIl = _r644_t0['line-to']['bind'](_r644_t0);
            r644_xn$curveto$1aao = _r644_t0['curve-to']['bind'](_r644_t0);
            r644_xn$cubicto$1aao = _r644_t0['cubic-to']['bind'](_r644_t0);
            r644_xn$putshapes$9Jrj = _r644_t0['put-shapes']['bind'](_r644_t0);
            r644_xn$reverselast$3qIs = _r644_t0['reverse-last']['bind'](_r644_t0);
            r644_include = _r644_t0['include']['bind'](_r644_t0);
            r644_xn$createstroke$7Hrq = _r644_t0['create-stroke']['bind'](_r644_t0);
            r644_xn$setanchor$9Jrj = _r644_t0['set-anchor']['bind'](_r644_t0);
            r644_xn$dontexport$5sIl = function _r644_t3() {
                var _r646_t0, _r646_t1;
                return r644_currentGlyph['dontExport'] = true;
            };
            _r644_t0['gizmo'] = r4_globalTransform;
            _r644_t0['set-width'](r4_WIDTH);
            r644_xn$setwidth$9Jrj(r4_WIDTH);
            r644_xn$assignunicode$7Hrq('~');
            r644_include(r4_glyphs['space'], r4_AS_BASE);
            r644_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t208() {
            var r648_currentGlyph, r648_xn$setwidth$9Jrj, r648_xn$assignunicode$7Hrq, r648_xn$startfrom$1aao, r648_xn$lineto$5sIl, r648_xn$curveto$1aao, r648_xn$cubicto$1aao, r648_xn$putshapes$9Jrj, r648_xn$reverselast$3qIs, r648_include, r648_xn$createstroke$7Hrq, r648_xn$setanchor$9Jrj, r648_xn$dontexport$5sIl, _r648_t0, _r648_t1, _r648_t2, _r648_t3;
            _r648_t0 = this;
            r648_currentGlyph = _r648_t0;
            r648_xn$setwidth$9Jrj = _r648_t0['set-width']['bind'](_r648_t0);
            r648_xn$assignunicode$7Hrq = function _r648_t2(r649_code) {
                var r649_code, _r649_t0, _r649_t1;
                r648_currentGlyph['assign-unicode'](r649_code);
                return r4_unicodeGlyphs[r648_currentGlyph['unicode'][r648_currentGlyph['unicode']['length'] - 1]] = r648_currentGlyph;
            };
            r648_xn$startfrom$1aao = _r648_t0['start-from']['bind'](_r648_t0);
            r648_xn$lineto$5sIl = _r648_t0['line-to']['bind'](_r648_t0);
            r648_xn$curveto$1aao = _r648_t0['curve-to']['bind'](_r648_t0);
            r648_xn$cubicto$1aao = _r648_t0['cubic-to']['bind'](_r648_t0);
            r648_xn$putshapes$9Jrj = _r648_t0['put-shapes']['bind'](_r648_t0);
            r648_xn$reverselast$3qIs = _r648_t0['reverse-last']['bind'](_r648_t0);
            r648_include = _r648_t0['include']['bind'](_r648_t0);
            r648_xn$createstroke$7Hrq = _r648_t0['create-stroke']['bind'](_r648_t0);
            r648_xn$setanchor$9Jrj = _r648_t0['set-anchor']['bind'](_r648_t0);
            r648_xn$dontexport$5sIl = function _r648_t3() {
                var _r650_t0, _r650_t1;
                return r648_currentGlyph['dontExport'] = true;
            };
            _r648_t0['gizmo'] = r4_globalTransform;
            _r648_t0['set-width'](r4_WIDTH);
            r648_xn$setwidth$9Jrj(r4_WIDTH);
            r648_xn$assignunicode$7Hrq(168);
            r648_include(r4_glyphs['space'], r4_AS_BASE);
            r648_include(r4_glyphs['dieresisAbove']);
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
                _r4_t218 = _r4_t9 < _r4_t8;
                for (; _r4_t218; _r4_t218 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t219 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t217 = _r4_t219;
            } else
                _r4_t217 = void 0;
        }
        r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t216(r654_glyph) {
            var r654_glyph, _r654_t0, _r654_t1;
            return r654_glyph && !r654_glyph['dontExport'];
        });
        return r4_font;
    };
}
