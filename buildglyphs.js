{
    var r0_Glyph, r0_Stroke, r0_tp, r0_mix, r0_linreg, r0_fallback, r0_emptyFontStr, r0_buildFont, _r0_t0, _r0_t1, _r0_t2, _r0_t3;
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
    r0_emptyFontStr = JSON['stringify'](require('./empty.json'));
    r0_buildFont = function _r0_t3(r4_para, r4_recursive) {
        var r4_para, r4_recursive, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_WHITENESS, r4_adviceBlackness, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_Upright, r4_Italify, r4_Scale, r4_Translate, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_dependencyProfile, r4_nTemp, r4_pickHash, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_XSHookUpper, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_XSHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_FShape, r4_oLeft, r4_oRight, r4_fBar, r4_eshHook, r4_ezhshape, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_Miniature, r4_CircledGlyph, r4_createSuperscripts, r4_createSubscripts, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_tag39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219, _r4_t220, _r4_t221, _r4_t222, _r4_t223, _r4_t224, _r4_t225, _r4_t226, _r4_t227, _r4_t228, _r4_t229, _r4_t230, _r4_t231, _r4_t232, _r4_t233, _r4_t234, _r4_t235, _r4_t236, _r4_t237, _r4_t238, _r4_t239, _r4_t240, _r4_t241, _r4_t242, _r4_t243, _r4_t244, _r4_t245, _r4_t246, _r4_t247, _r4_t248, _r4_t249, _r4_t250, _r4_t251, _r4_t252, _r4_t253, _r4_t254;
        r4_variantSelector = r4_para['variantSelector'];
        r4_font = JSON['parse'](r0_emptyFontStr);
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
        r4_Upright = function _r4_t16(r6_angle) {
            var r6_angle, _r6_t0, _r6_t1;
            return {
                'xx': 1,
                'yx': -Math['tan'](r0_fallback(r6_angle, r4_para['italicangle']) / 180 * Math['PI']),
                'xy': 0,
                'yy': 1,
                'x': 0,
                'y': 0
            };
        };
        r4_Italify = function _r4_t17(r7_angle) {
            var r7_angle, _r7_t0, _r7_t1;
            return {
                'xx': 1,
                'yx': Math['tan'](r0_fallback(r7_angle, r4_para['italicangle']) / 180 * Math['PI']),
                'xy': 0,
                'yy': 1,
                'x': 0,
                'y': 0
            };
        };
        r4_Scale = function _r4_t18(r8_s) {
            var r8_s, _r8_t0, _r8_t1;
            return {
                'xx': r8_s,
                'yx': 0,
                'xy': 0,
                'yy': r8_s,
                'x': 0,
                'y': 0
            };
        };
        r4_Translate = function _r4_t19(r9_x, r9_y) {
            var r9_x, r9_y, _r9_t0, _r9_t1;
            return {
                'xx': 1,
                'yx': 0,
                'xy': 0,
                'yy': 1,
                'x': r9_x,
                'y': r9_y
            };
        };
        r4_tm = function _r4_t20(r10_anchor) {
            var r10_anchor, _r10_t0, _r10_t1;
            return {
                'x': r10_anchor['x'] * r4_globalTransform['xx'] + r10_anchor['y'] * r4_globalTransform['yx'] + r4_globalTransform['x'],
                'y': r10_anchor['x'] * r4_globalTransform['xy'] + r10_anchor['y'] * r4_globalTransform['yy'] + r4_globalTransform['y'],
                'type': r10_anchor['type']
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
        _r4_t21 = r4_font['name'];
        _r4_t22 = 'fullName';
        if (r4_para['style'] !== 'Regular')
            _r4_t23 = r4_para['family'] + ' ' + r4_para['style'];
        else
            _r4_t23 = r4_para['family'];
        _r4_t21[_r4_t22] = _r4_t23;
        r4_font['name']['postScriptName'] = r4_font['name']['fullName']['replace'](/ /g, '-');
        r4_font['name']['copyright'] = r4_para['copyright'];
        r4_font['OS/2']['usWeightClass'] = r4_para['weight'];
        r4_font['OS/2']['bProportion'] = 9;
        r4_font['OS/2']['bWeight'] = 1 + r4_para['weight'] / 100;
        _r4_t24 = r4_font['OS/2'];
        _r4_t25 = 'fsSelection';
        if (r4_para['isBold'])
            _r4_t26 = 32;
        else
            _r4_t26 = 0;
        if (r4_para['isItalic'])
            _r4_t27 = 1;
        else
            _r4_t27 = 0;
        _r4_t28 = _r4_t26 + _r4_t27;
        if (!r4_para['isBold'] && !r4_para['isItalic'])
            _r4_t29 = 64;
        else
            _r4_t29 = 0;
        _r4_t30 = _r4_t28 + _r4_t29;
        _r4_t31 = 128;
        _r4_t24[_r4_t25] = _r4_t30 + _r4_t31;
        _r4_t32 = r4_font['head'];
        _r4_t33 = 'macStyle';
        if (r4_para['isBold'])
            _r4_t34 = 1;
        else
            _r4_t34 = 0;
        if (r4_para['isItalic'])
            _r4_t35 = 2;
        else
            _r4_t35 = 0;
        _r4_t32[_r4_t33] = _r4_t34 + _r4_t35;
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
        r4_dependencyProfile = {};
        r4_nTemp = 0;
        if (r4_recursive) {
            _r4_t37 = {};
            _r4_t36 = function (r15_h) {
                var r15_h, r15_j, _r15_t0, _r15_t1, _r15_t2;
                _r15_t0 = r4_recursive;
                _r15_t1 = _r15_t0['length'];
                _r15_t2 = 0;
                for (; _r15_t2 < _r15_t1; _r15_t2 = _r15_t2 + 1) {
                    r15_j = _r15_t0[_r15_t2];
                    r15_h[r15_j] = r15_j;
                }
                return _r4_t38 = r15_h;
            }(_r4_t37);
        } else
            _r4_t36 = void 0;
        r4_pickHash = _r4_t36;
        r4_xn$createglyph$7Hrq = function _r4_t40(r17_name, r17_actions) {
            var r17_name, r17_actions, r17_glyphObject, r17_d, r17_allAliases, _r17_t0, _r17_t1, _r17_t2, _r17_t3, _r17_t4, _r17_t5, _r17_t6, _r17_t7, _r17_t8, _r17_t9, _r17_t10, _r17_t11, _r17_t12, _r17_t13, _r17_t14, _r17_t15, _r17_t16, _r17_t17, _r17_t18, _r17_t19, _r17_t20, _r17_t21;
            _r17_t4 = arguments;
            if (r17_name && r17_actions) {
                if (r4_pickHash && !r4_pickHash[r17_name])
                    return void 0;
                else
                    _r17_t6 = void 0;
                _r17_t8 = console;
                _r17_t9 = _r17_t8['log'];
                _r17_t10 = 'Building /' + r17_name;
                if (r4_recursive)
                    _r17_t11 = ' (recursive)';
                else
                    _r17_t11 = '';
                _r17_t12 = _r17_t10 + _r17_t11;
                _r17_t13 = ' for ';
                _r17_t14 = _r17_t12 + _r17_t13;
                _r17_t15 = r4_para['family'];
                _r17_t16 = _r17_t14 + _r17_t15;
                _r17_t17 = ' ';
                _r17_t18 = _r17_t16 + _r17_t17;
                _r17_t19 = r4_para['style'];
                _r17_t20 = _r17_t18 + _r17_t19;
                _r17_t9['call'](_r17_t8, _r17_t20);
                r4_dependencyProfile[r17_name] = [];
                r17_glyphObject = new r0_Glyph(r17_name);
                r4_glyphList['push'](r17_glyphObject);
                r4_glyphs[r17_name] = r17_glyphObject;
                r17_actions['call'](r17_glyphObject);
                _r17_t0 = r17_glyphObject['dependencies'];
                _r17_t1 = _r17_t0['length'];
                _r17_t2 = 0;
                for (; _r17_t2 < _r17_t1; _r17_t2 = _r17_t2 + 1) {
                    r17_d = _r17_t0[_r17_t2];
                    r17_allAliases = Object['keys'](r4_glyphs)['filter'](function _r17_t21(r19_k) {
                        var r19_k, _r19_t0, _r19_t1;
                        return r4_glyphs[r19_k] === r4_glyphs[r17_d];
                    });
                    r4_dependencyProfile[r17_name] = r4_dependencyProfile[r17_name]['concat'](r4_dependencyProfile[r17_d], r17_allAliases);
                }
                return r17_glyphObject;
            } else if (true) {
                r17_actions = _r17_t4[0];
                r17_glyphObject = new r0_Glyph('.temp-' + (r4_nTemp = r4_nTemp = r4_nTemp + 1));
                r17_actions['call'](r17_glyphObject);
                return r17_glyphObject;
            } else
                return void 0;
        };
        r4_xn$selectvariant$7Hrq = function _r4_t41(r20_name, r20_unicode, r20_default) {
            var r20_name, r20_unicode, r20_default, r20_variant, r20_chosenGlyph, r20_allAliases, _r20_t0, _r20_t1, _r20_t2, _r20_t3, _r20_t4;
            if (r4_pickHash && !r4_pickHash[r20_name])
                return void 0;
            else
                _r20_t2 = void 0;
            r20_variant = r4_variantSelector[r20_name] || r20_default;
            r20_chosenGlyph = r4_glyphs[r20_name + '.' + r20_variant];
            r4_glyphs[r20_name] = r20_chosenGlyph;
            r20_allAliases = Object['keys'](r4_glyphs)['filter'](function _r20_t3(r21_k) {
                var r21_k, _r21_t0, _r21_t1;
                return r4_glyphs[r21_k] === r4_glyphs[r20_chosenGlyph['name']];
            });
            r4_dependencyProfile[r20_name] = r20_allAliases['concat'](r4_dependencyProfile[r20_chosenGlyph['name']]);
            if (r20_unicode) {
                r20_chosenGlyph['assign-unicode'](r20_unicode);
                r20_chosenGlyph['dontExport'] = false;
                return r4_unicodeGlyphs[r20_chosenGlyph['unicode'][r20_chosenGlyph['unicode']['length'] - 1]] = r20_chosenGlyph;
            } else
                return void 0;
        };
        r4_xn$createglyph$7Hrq('space', function _r4_t42() {
            var r23_currentGlyph, r23_xn$setwidth$9Jrj, r23_xn$assignunicode$7Hrq, r23_xn$startfrom$1aao, r23_xn$lineto$5sIl, r23_xn$curveto$1aao, r23_xn$cubicto$1aao, r23_xn$putshapes$9Jrj, r23_xn$reverselast$3qIs, r23_include, r23_xn$createstroke$7Hrq, r23_xn$setanchor$9Jrj, r23_xn$applytransform$1aao, r23_xn$dontexport$5sIl, _r23_t0, _r23_t1, _r23_t2, _r23_t3;
            _r23_t0 = this;
            r23_currentGlyph = _r23_t0;
            r23_xn$setwidth$9Jrj = _r23_t0['set-width']['bind'](_r23_t0);
            r23_xn$assignunicode$7Hrq = function _r23_t2(r24_code) {
                var r24_code, _r24_t0, _r24_t1;
                r23_currentGlyph['assign-unicode'](r24_code);
                return r4_unicodeGlyphs[r23_currentGlyph['unicode'][r23_currentGlyph['unicode']['length'] - 1]] = r23_currentGlyph;
            };
            r23_xn$startfrom$1aao = _r23_t0['start-from']['bind'](_r23_t0);
            r23_xn$lineto$5sIl = _r23_t0['line-to']['bind'](_r23_t0);
            r23_xn$curveto$1aao = _r23_t0['curve-to']['bind'](_r23_t0);
            r23_xn$cubicto$1aao = _r23_t0['cubic-to']['bind'](_r23_t0);
            r23_xn$putshapes$9Jrj = _r23_t0['put-shapes']['bind'](_r23_t0);
            r23_xn$reverselast$3qIs = _r23_t0['reverse-last']['bind'](_r23_t0);
            r23_include = _r23_t0['include']['bind'](_r23_t0);
            r23_xn$createstroke$7Hrq = _r23_t0['create-stroke']['bind'](_r23_t0);
            r23_xn$setanchor$9Jrj = _r23_t0['set-anchor']['bind'](_r23_t0);
            r23_xn$applytransform$1aao = _r23_t0['apply-transform']['bind'](_r23_t0);
            r23_xn$dontexport$5sIl = function _r23_t3() {
                var _r25_t0, _r25_t1;
                return r23_currentGlyph['dontExport'] = true;
            };
            _r23_t0['gizmo'] = r4_globalTransform;
            _r23_t0['set-width'](r4_WIDTH);
            r23_xn$setwidth$9Jrj(r4_WIDTH);
            r23_xn$assignunicode$7Hrq(' ');
            r23_include(r4_eMarks);
            return void 0;
        });
        r4_Ring = function _r4_t43(r26_u, r26_d, r26_l, r26_r) {
            var r26_u, r26_d, r26_l, r26_r, r26_my, r26_mx, r26_s, _r26_t0, _r26_t1;
            r26_my = (r26_u + r26_d) / 2;
            r26_mx = (r26_l + r26_r) / 2;
            r26_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r26_mx, r26_d)['cubic-to'](r26_mx + (r26_l - r26_mx) * r4_CKAPPA, r26_d, r26_l, r26_my + (r26_d - r26_my) * r4_CKAPPA, r26_l, r26_my)['cubic-to'](r26_l, r26_my + (r26_u - r26_my) * r4_CKAPPA, r26_mx + (r26_l - r26_mx) * r4_CKAPPA, r26_u, r26_mx, r26_u)['cubic-to'](r26_mx + (r26_r - r26_mx) * r4_CKAPPA, r26_u, r26_r, r26_my + (r26_u - r26_my) * r4_CKAPPA, r26_r, r26_my)['cubic-to'](r26_r, r26_my + (r26_d - r26_my) * r4_CKAPPA, r26_mx + (r26_r - r26_mx) * r4_CKAPPA, r26_d, r26_mx, r26_d);
            return r26_s['points'];
        };
        r4_ORing = function _r4_t44(r27_u, r27_d, r27_l, r27_r, r27_smooth) {
            var r27_u, r27_d, r27_l, r27_r, r27_smooth, r27_myu, r27_myd, r27_mx, r27_s, _r27_t0, _r27_t1;
            r27_myu = r27_u - r27_smooth;
            r27_myd = r27_d + r27_smooth;
            r27_mx = (r27_l + r27_r) / 2;
            r27_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r27_mx, r27_d)['cubic-to'](r27_mx + (r27_l - r27_mx) * r4_CKAPPA, r27_d, r27_l, r27_myd + (r27_d - r27_myd) * r4_CKAPPA, r27_l, r27_myd)['line-to'](r27_l, r27_myu)['cubic-to'](r27_l, r27_myu + (r27_u - r27_myu) * r4_CKAPPA, r27_mx + (r27_l - r27_mx) * r4_CKAPPA, r27_u, r27_mx, r27_u)['cubic-to'](r27_mx + (r27_r - r27_mx) * r4_CKAPPA, r27_u, r27_r, r27_myu + (r27_u - r27_myu) * r4_CKAPPA, r27_r, r27_myu)['line-to'](r27_r, r27_myd)['cubic-to'](r27_r, r27_myd + (r27_d - r27_myd) * r4_CKAPPA, r27_mx + (r27_r - r27_mx) * r4_CKAPPA, r27_d, r27_mx, r27_d);
            return r27_s['points'];
        };
        r4_leftwardTopSerif = function _r4_t45(r28_x, r28_y, r28_length) {
            var r28_x, r28_y, r28_length, _r28_t0, _r28_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r28_x + r4_HALFSTROKE, r28_y)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['line-to'](r28_x - r28_length - r4_globalTransform['yx'] * r4_STROKE, r28_y)['to-outline']();
        };
        r4_leftwardBottomSerif = function _r4_t46(r29_x, r29_y, r29_length) {
            var r29_x, r29_y, r29_length, _r29_t0, _r29_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r29_x + r4_HALFSTROKE, r29_y)['heads-to'](r4_LEFTWARD)['set-width'](0, r4_STROKE)['line-to'](r29_x - r29_length + r4_globalTransform['yx'] * r4_STROKE, r29_y)['to-outline']();
        };
        r4_rightwardTopSerif = function _r4_t47(r30_x, r30_y, r30_length) {
            var r30_x, r30_y, r30_length, _r30_t0, _r30_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r30_x - r4_HALFSTROKE, r30_y)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r30_x + r30_length - r4_globalTransform['yx'] * r4_STROKE, r30_y)['to-outline']();
        };
        r4_rightwardBottomSerif = function _r4_t48(r31_x, r31_y, r31_length) {
            var r31_x, r31_y, r31_length, _r31_t0, _r31_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r31_x - r4_HALFSTROKE, r31_y)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r31_x + r31_length + r4_globalTransform['yx'] * r4_STROKE, r31_y)['to-outline']();
        };
        r4_centerTopSerif = function _r4_t49(r32_x, r32_y, r32_length) {
            var r32_x, r32_y, r32_length, _r32_t0, _r32_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r32_x + r32_length - r4_globalTransform['yx'] * r4_STROKE, r32_y)['set-width'](r4_STROKE, 0)['line-to'](r32_x - r32_length - r4_globalTransform['yx'] * r4_STROKE, r32_y)['to-outline']();
        };
        r4_centerBottomSerif = function _r4_t50(r33_x, r33_y, r33_length) {
            var r33_x, r33_y, r33_length, _r33_t0, _r33_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r33_x + r33_length + r4_globalTransform['yx'] * r4_STROKE, r33_y)['set-width'](0, r4_STROKE)['line-to'](r33_x - r33_length + r4_globalTransform['yx'] * r4_STROKE, r33_y)['to-outline']();
        };
        r4_xsStrand = function _r4_t51(r34__xleft, r34_yleft, r34__xright, r34_yright, r34__halfstroke0, r34__halfstroke1, r34__ess, r34__expansion, r34__roundp) {
            var r34__xleft, r34_yleft, r34__xright, r34_yright, r34__halfstroke0, r34__halfstroke1, r34__ess, r34__expansion, r34__roundp, r34_expansion, r34_halfstroke0, r34_halfstroke1, r34_ess, r34_yItalicCorrection, r34_xItalicCorrection, r34_roundsize, r34_roundleft, r34_roundright, r34_xleft, r34_xright, r34_sxleft, r34_sxright, r34_syleft, r34_syright, _r34_t0, _r34_t1, _r34_t2, _r34_t3;
            r34_expansion = r34__expansion || 0.25;
            r34_halfstroke0 = r34__halfstroke0 || r4_HALFSTROKE;
            r34_halfstroke1 = r34__halfstroke1 || r4_HALFSTROKE;
            r34_ess = r34__ess || (r34_halfstroke0 + r34_halfstroke1) / 2;
            r34_yItalicCorrection = r4_globalTransform['yx'] * 0.985;
            r34_xItalicCorrection = 1 / Math['sqrt'](1 - r34_yItalicCorrection * r34_yItalicCorrection);
            _r34_t2 = r34__roundp || r4_SMOOTHA * 0.4;
            if (r34_yleft < r34_yright)
                _r34_t3 = -1;
            else
                _r34_t3 = 1;
            r34_roundsize = _r34_t2 * _r34_t3;
            r34_roundleft = r34_yleft - r34_roundsize;
            r34_roundright = r34_yright + r34_roundsize;
            r34_xleft = r34__xleft + r34_halfstroke0 * r34_xItalicCorrection;
            r34_xright = r34__xright - r34_halfstroke1 * r34_xItalicCorrection;
            r34_sxleft = r0_mix(r34_xleft, r34_xright, 0.5 - r34_expansion);
            r34_sxright = r0_mix(r34_xleft, r34_xright, 0.5 + r34_expansion);
            r34_syleft = r0_mix(r34_roundleft, r34_roundright, 0.5 - r34_expansion);
            r34_syright = r0_mix(r34_roundleft, r34_roundright, 0.5 + r34_expansion);
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r34_xleft, r34_yleft - r34_halfstroke0 * r34_yItalicCorrection)['set-width'](r34_halfstroke0, r34_halfstroke0)['curve-to'](r34_xleft, r34_roundleft, r34_sxleft, r34_syleft)['set-width'](r34_ess, r34_ess)['line-to'](r34_sxright, r34_syright)['curve-to'](r34_xright, r34_roundright, r34_xright, r34_yright + r34_halfstroke1 * r34_yItalicCorrection)['set-width'](r34_halfstroke1, r34_halfstroke1)['to-outline']();
        };
        r4_sStrand = function _r4_t52(r35_yleft, r35_yright, r35__expansion) {
            var r35_yleft, r35_yright, r35__expansion, _r35_t0, _r35_t1;
            return r4_xsStrand(r4_SB, r35_yleft, r4_RIGHTSB, r35_yright, r4_HALFSTROKE, r4_HALFSTROKE, r4_HALFSTROKE, r35__expansion, r4_SMOOTHA * 0.4);
        };
        r4_halfXStrand = function _r4_t53(r36__leftx, r36_lefty, r36_rightx, r36_righty, r36_turn, r36_straight, r36_tension, r36__fine) {
            var r36__leftx, r36_lefty, r36_rightx, r36_righty, r36_turn, r36_straight, r36_tension, r36__fine, r36_leftx, r36_fine, r36_turnyleft, r36_cyleft, r36_straightxleft, r36_straightyleft, _r36_t0, _r36_t1, _r36_t2, _r36_t3, _r36_t4, _r36_t5, _r36_t6, _r36_t7, _r36_t8, _r36_t9, _r36_t10, _r36_t11, _r36_t12, _r36_t13, _r36_t14, _r36_t15, _r36_t16, _r36_t17, _r36_t18, _r36_t19, _r36_t20, _r36_t21, _r36_t22, _r36_t23, _r36_t24, _r36_t25, _r36_t26, _r36_t27, _r36_t28, _r36_t29, _r36_t30, _r36_t31;
            _r36_t2 = r36__leftx;
            _r36_t3 = r4_HALFSTROKE;
            if (r36_rightx > r36__leftx)
                _r36_t4 = 1;
            else
                _r36_t4 = -1;
            _r36_t5 = _r36_t3 * _r36_t4;
            r36_leftx = _r36_t2 + _r36_t5;
            r36_fine = (r36__fine || r4_STROKE) * 0.5;
            r36_turnyleft = r0_mix(r36_lefty, r36_righty, r36_turn);
            r36_cyleft = r0_mix(r36_turnyleft, r36_righty, r36_tension);
            r36_straightxleft = r0_mix(r36_leftx, r36_rightx, r36_straight);
            r36_straightyleft = r0_mix(r36_cyleft, r36_righty, r36_straight);
            _r36_t6 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r36_leftx, r36_lefty)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE);
            _r36_t7 = _r36_t6['heads-to'];
            if (r36_lefty < r36_righty)
                _r36_t8 = r4_UPWARD;
            else
                _r36_t8 = r4_DOWNWARD;
            _r36_t9 = _r36_t7['call'](_r36_t6, _r36_t8);
            _r36_t10 = _r36_t9['line-to'];
            _r36_t11 = r36_leftx;
            _r36_t12 = r36_turnyleft;
            _r36_t13 = _r36_t10['call'](_r36_t9, _r36_t11, _r36_t12);
            _r36_t14 = _r36_t13['heads-to'];
            if (r36_lefty < r36_righty)
                _r36_t15 = r4_UPWARD;
            else
                _r36_t15 = r4_DOWNWARD;
            _r36_t16 = _r36_t14['call'](_r36_t13, _r36_t15);
            _r36_t17 = _r36_t16['curve-to'];
            _r36_t18 = r36_leftx;
            _r36_t19 = r36_cyleft;
            _r36_t20 = r36_straightxleft;
            _r36_t21 = r36_straightyleft;
            _r36_t22 = _r36_t17['call'](_r36_t16, _r36_t18, _r36_t19, _r36_t20, _r36_t21);
            _r36_t23 = _r36_t22['set-width'];
            _r36_t24 = r36_fine;
            _r36_t25 = r36_fine;
            _r36_t26 = _r36_t23['call'](_r36_t22, _r36_t24, _r36_t25);
            _r36_t27 = _r36_t26['line-to'];
            _r36_t28 = r36_rightx;
            _r36_t29 = r36_righty;
            _r36_t30 = _r36_t27['call'](_r36_t26, _r36_t28, _r36_t29);
            _r36_t31 = _r36_t30['to-outline'];
            return _r36_t31['call'](_r36_t30);
        };
        r4_xStrand = function _r4_t54(r37__leftx, r37_lefty, r37__rightx, r37_righty, r37_turn, r37_straight, r37_tension) {
            var r37__leftx, r37_lefty, r37__rightx, r37_righty, r37_turn, r37_straight, r37_tension, r37_middlex, r37_middley, _r37_t0, _r37_t1;
            r37_middlex = r0_mix(r37__leftx, r37__rightx, 0.5);
            r37_middley = r0_mix(r37_lefty, r37_righty, 0.5);
            return r4_halfXStrand(r37__leftx, r37_lefty, r37_middlex, r37_middley, r37_turn, r37_straight, r37_tension)['concat'](r4_halfXStrand(r37__rightx, r37_righty, r37_middlex, r37_middley, r37_turn, r37_straight, r37_tension));
        };
        r4_nBowl = function _r4_t55(r38_left, r38_middle, r38_right, r38_fine) {
            var r38_left, r38_middle, r38_right, r38_fine, r38_bandLeft, r38_bandRight, _r38_t0, _r38_t1;
            r38_bandLeft = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r38_right, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r38_right, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r38_middle, r4_XO)['heads-to'](r4_LEFTWARD)['to-outline']();
            r38_bandRight = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r38_middle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r38_left, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r38_fine)['to-outline']();
            return r38_bandLeft['concat'](r38_bandRight);
        };
        r4_XSHookUpper = function _r4_t56(r39_top, r39_left, r39_middle, r39_right, r39_smooth, r39_hook) {
            var r39_top, r39_left, r39_middle, r39_right, r39_smooth, r39_hook, _r39_t0, _r39_t1, _r39_t2;
            return function _r39_t2() {
                var r41_currentGlyph, r41_xn$setwidth$9Jrj, r41_xn$assignunicode$7Hrq, r41_xn$startfrom$1aao, r41_xn$lineto$5sIl, r41_xn$curveto$1aao, r41_xn$cubicto$1aao, r41_xn$putshapes$9Jrj, r41_xn$reverselast$3qIs, r41_include, r41_xn$createstroke$7Hrq, r41_xn$setanchor$9Jrj, r41_xn$applytransform$1aao, r41_xn$dontexport$5sIl, _r41_t0, _r41_t1, _r41_t2, _r41_t3, _r41_t4, _r41_t5, _r41_t6, _r41_t7, _r41_t8, _r41_t9, _r41_t10, _r41_t11, _r41_t12;
                _r41_t0 = this;
                r41_currentGlyph = _r41_t0;
                r41_xn$setwidth$9Jrj = _r41_t0['set-width']['bind'](_r41_t0);
                r41_xn$assignunicode$7Hrq = function _r41_t2(r42_code) {
                    var r42_code, _r42_t0, _r42_t1;
                    r41_currentGlyph['assign-unicode'](r42_code);
                    return r4_unicodeGlyphs[r41_currentGlyph['unicode'][r41_currentGlyph['unicode']['length'] - 1]] = r41_currentGlyph;
                };
                r41_xn$startfrom$1aao = _r41_t0['start-from']['bind'](_r41_t0);
                r41_xn$lineto$5sIl = _r41_t0['line-to']['bind'](_r41_t0);
                r41_xn$curveto$1aao = _r41_t0['curve-to']['bind'](_r41_t0);
                r41_xn$cubicto$1aao = _r41_t0['cubic-to']['bind'](_r41_t0);
                r41_xn$putshapes$9Jrj = _r41_t0['put-shapes']['bind'](_r41_t0);
                r41_xn$reverselast$3qIs = _r41_t0['reverse-last']['bind'](_r41_t0);
                r41_include = _r41_t0['include']['bind'](_r41_t0);
                r41_xn$createstroke$7Hrq = _r41_t0['create-stroke']['bind'](_r41_t0);
                r41_xn$setanchor$9Jrj = _r41_t0['set-anchor']['bind'](_r41_t0);
                r41_xn$applytransform$1aao = _r41_t0['apply-transform']['bind'](_r41_t0);
                r41_xn$dontexport$5sIl = function _r41_t3() {
                    var _r43_t0, _r43_t1;
                    return r41_currentGlyph['dontExport'] = true;
                };
                _r41_t0['gizmo'] = r4_globalTransform;
                _r41_t0['set-width'](r4_WIDTH);
                _r41_t4 = r41_include;
                _r41_t5 = r41_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r39_right - r4_OXHOOK, r39_top - r39_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r39_middle, r39_right, r4_KAPPA_HOOK), r39_top - r4_O, r39_middle, r39_top - r4_O);
                _r41_t6 = _r41_t5['heads-to'];
                if (r39_left < r39_right)
                    _r41_t7 = r4_LEFTWARD;
                else
                    _r41_t7 = r4_RIGHTWARD;
                _r41_t8 = _r41_t6['call'](_r41_t5, _r41_t7);
                _r41_t9 = _r41_t8['arc-hv-to'];
                _r41_t10 = r39_left;
                _r41_t11 = r39_top - r39_smooth;
                _r41_t12 = _r41_t9['call'](_r41_t8, _r41_t10, _r41_t11);
                _r41_t4(_r41_t12);
                return void 0;
            };
        };
        r4_sHookUpper = function _r4_t57(r44_top, r44_smooth, r44_hook, r44__middle) {
            var r44_top, r44_smooth, r44_hook, r44__middle, _r44_t0, _r44_t1, _r44_t2;
            return function _r44_t2() {
                var r46_currentGlyph, r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_include, r46_xn$createstroke$7Hrq, r46_xn$setanchor$9Jrj, r46_xn$applytransform$1aao, r46_xn$dontexport$5sIl, _r46_t0, _r46_t1, _r46_t2, _r46_t3;
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
                r46_xn$applytransform$1aao = _r46_t0['apply-transform']['bind'](_r46_t0);
                r46_xn$dontexport$5sIl = function _r46_t3() {
                    var _r48_t0, _r48_t1;
                    return r46_currentGlyph['dontExport'] = true;
                };
                _r46_t0['gizmo'] = r4_globalTransform;
                _r46_t0['set-width'](r4_WIDTH);
                r46_include(r4_XSHookUpper(r44_top, r4_SB, r0_fallback(r44__middle, r4_MIDDLE), r4_RIGHTSB, r44_smooth, r44_hook));
                return void 0;
            };
        };
        r4_twoHookUpper = function _r4_t58(r49_top, r49_smooth, r49_hook, r49__middle) {
            var r49_top, r49_smooth, r49_hook, r49__middle, _r49_t0, _r49_t1, _r49_t2;
            return function _r49_t2() {
                var r51_currentGlyph, r51_xn$setwidth$9Jrj, r51_xn$assignunicode$7Hrq, r51_xn$startfrom$1aao, r51_xn$lineto$5sIl, r51_xn$curveto$1aao, r51_xn$cubicto$1aao, r51_xn$putshapes$9Jrj, r51_xn$reverselast$3qIs, r51_include, r51_xn$createstroke$7Hrq, r51_xn$setanchor$9Jrj, r51_xn$applytransform$1aao, r51_xn$dontexport$5sIl, r51_middle, _r51_t0, _r51_t1, _r51_t2, _r51_t3;
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
                r51_xn$applytransform$1aao = _r51_t0['apply-transform']['bind'](_r51_t0);
                r51_xn$dontexport$5sIl = function _r51_t3() {
                    var _r53_t0, _r53_t1;
                    return r51_currentGlyph['dontExport'] = true;
                };
                _r51_t0['gizmo'] = r4_globalTransform;
                _r51_t0['set-width'](r4_WIDTH);
                r51_middle = r49__middle || r4_MIDDLE;
                r51_include(r51_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r49_top - r49_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r51_middle, r4_SB, r4_KAPPA_HOOK), r49_top - r4_O, r51_middle, r49_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r49_top - r49_smooth));
                return void 0;
            };
        };
        r4_sHookLower = function _r4_t59(r54_bottom, r54_smooth, r54_hook, r54__middle) {
            var r54_bottom, r54_smooth, r54_hook, r54__middle, _r54_t0, _r54_t1, _r54_t2;
            return function _r54_t2() {
                var r56_currentGlyph, r56_xn$setwidth$9Jrj, r56_xn$assignunicode$7Hrq, r56_xn$startfrom$1aao, r56_xn$lineto$5sIl, r56_xn$curveto$1aao, r56_xn$cubicto$1aao, r56_xn$putshapes$9Jrj, r56_xn$reverselast$3qIs, r56_include, r56_xn$createstroke$7Hrq, r56_xn$setanchor$9Jrj, r56_xn$applytransform$1aao, r56_xn$dontexport$5sIl, _r56_t0, _r56_t1, _r56_t2, _r56_t3;
                _r56_t0 = this;
                r56_currentGlyph = _r56_t0;
                r56_xn$setwidth$9Jrj = _r56_t0['set-width']['bind'](_r56_t0);
                r56_xn$assignunicode$7Hrq = function _r56_t2(r57_code) {
                    var r57_code, _r57_t0, _r57_t1;
                    r56_currentGlyph['assign-unicode'](r57_code);
                    return r4_unicodeGlyphs[r56_currentGlyph['unicode'][r56_currentGlyph['unicode']['length'] - 1]] = r56_currentGlyph;
                };
                r56_xn$startfrom$1aao = _r56_t0['start-from']['bind'](_r56_t0);
                r56_xn$lineto$5sIl = _r56_t0['line-to']['bind'](_r56_t0);
                r56_xn$curveto$1aao = _r56_t0['curve-to']['bind'](_r56_t0);
                r56_xn$cubicto$1aao = _r56_t0['cubic-to']['bind'](_r56_t0);
                r56_xn$putshapes$9Jrj = _r56_t0['put-shapes']['bind'](_r56_t0);
                r56_xn$reverselast$3qIs = _r56_t0['reverse-last']['bind'](_r56_t0);
                r56_include = _r56_t0['include']['bind'](_r56_t0);
                r56_xn$createstroke$7Hrq = _r56_t0['create-stroke']['bind'](_r56_t0);
                r56_xn$setanchor$9Jrj = _r56_t0['set-anchor']['bind'](_r56_t0);
                r56_xn$applytransform$1aao = _r56_t0['apply-transform']['bind'](_r56_t0);
                r56_xn$dontexport$5sIl = function _r56_t3() {
                    var _r58_t0, _r58_t1;
                    return r56_currentGlyph['dontExport'] = true;
                };
                _r56_t0['gizmo'] = r4_globalTransform;
                _r56_t0['set-width'](r4_WIDTH);
                r56_include(r4_XSHookLower(r54_bottom, r4_SB, r0_fallback(r54__middle, r4_MIDDLE), r4_RIGHTSB, r54_smooth, r54_hook));
                return void 0;
            };
        };
        r4_XSHookLower = function _r4_t60(r59_bottom, r59_left, r59_middle, r59_right, r59_smooth, r59_hook) {
            var r59_bottom, r59_left, r59_middle, r59_right, r59_smooth, r59_hook, _r59_t0, _r59_t1, _r59_t2;
            return function _r59_t2() {
                var r61_currentGlyph, r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_include, r61_xn$createstroke$7Hrq, r61_xn$setanchor$9Jrj, r61_xn$applytransform$1aao, r61_xn$dontexport$5sIl, _r61_t0, _r61_t1, _r61_t2, _r61_t3, _r61_t4, _r61_t5, _r61_t6, _r61_t7, _r61_t8, _r61_t9, _r61_t10, _r61_t11, _r61_t12, _r61_t13, _r61_t14;
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
                r61_xn$applytransform$1aao = _r61_t0['apply-transform']['bind'](_r61_t0);
                r61_xn$dontexport$5sIl = function _r61_t3() {
                    var _r63_t0, _r63_t1;
                    return r61_currentGlyph['dontExport'] = true;
                };
                _r61_t0['gizmo'] = r4_globalTransform;
                _r61_t0['set-width'](r4_WIDTH);
                _r61_t4 = r61_include;
                _r61_t5 = r61_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r59_right, r59_bottom + r59_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r59_middle, r59_bottom + r4_O);
                _r61_t6 = _r61_t5['heads-to'];
                if (r59_left < r59_right)
                    _r61_t7 = r4_LEFTWARD;
                else
                    _r61_t7 = r4_RIGHTWARD;
                _r61_t8 = _r61_t6['call'](_r61_t5, _r61_t7);
                _r61_t9 = _r61_t8['curve-to'];
                _r61_t10 = r0_mix(r59_middle, r59_left, r4_KAPPA_HOOK);
                _r61_t11 = r59_bottom + r4_O;
                _r61_t12 = r59_left + r4_OXHOOK;
                _r61_t13 = r59_bottom + r59_hook;
                _r61_t14 = _r61_t9['call'](_r61_t8, _r61_t10, _r61_t11, _r61_t12, _r61_t13);
                _r61_t4(_r61_t14);
                return void 0;
            };
        };
        r4_smallo = function _r4_t61(r64_u, r64_d, r64_l, r64_r, r64__width) {
            var r64_u, r64_d, r64_l, r64_r, r64__width, _r64_t0, _r64_t1, _r64_t2;
            return function _r64_t2() {
                var r66_currentGlyph, r66_xn$setwidth$9Jrj, r66_xn$assignunicode$7Hrq, r66_xn$startfrom$1aao, r66_xn$lineto$5sIl, r66_xn$curveto$1aao, r66_xn$cubicto$1aao, r66_xn$putshapes$9Jrj, r66_xn$reverselast$3qIs, r66_include, r66_xn$createstroke$7Hrq, r66_xn$setanchor$9Jrj, r66_xn$applytransform$1aao, r66_xn$dontexport$5sIl, r66_middle, r66_width, r66_ymiddlea, r66_ymiddleb, _r66_t0, _r66_t1, _r66_t2, _r66_t3;
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
                r66_xn$applytransform$1aao = _r66_t0['apply-transform']['bind'](_r66_t0);
                r66_xn$dontexport$5sIl = function _r66_t3() {
                    var _r68_t0, _r68_t1;
                    return r66_currentGlyph['dontExport'] = true;
                };
                _r66_t0['gizmo'] = r4_globalTransform;
                _r66_t0['set-width'](r4_WIDTH);
                r66_middle = (r64_l + r64_r) / 2;
                r66_width = r0_fallback(r64__width, r4_STROKE);
                if (r64_u - r64_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) {
                    r66_include(r66_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r66_middle, r64_u - r4_O)['set-width'](r66_width, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r64_l + r4_O, r64_u - r4_SMALLSMOOTHA)['line-to'](r64_l + r4_O, r64_d + r4_SMALLSMOOTHB)['arc-vh-to'](r66_middle, r64_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r64_r - r4_O, r64_d + r4_SMALLSMOOTHA)['line-to'](r64_r - r4_O, r64_u - r4_SMALLSMOOTHB)['arc-vh-to'](r66_middle, r64_u - r4_O)['heads-to'](r4_LEFTWARD));
                } else {
                    r66_ymiddlea = (r64_u - r4_SMALLSMOOTHA + r64_d + r4_SMALLSMOOTHB) / 2;
                    r66_ymiddleb = (r64_u - r4_SMALLSMOOTHB + r64_d + r4_SMALLSMOOTHA) / 2;
                    r66_include(r66_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r66_middle, r64_u - r4_O)['set-width'](r66_width, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r64_l + r4_O, r66_ymiddlea)['arc-vh-to'](r66_middle, r64_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r64_r - r4_O, r66_ymiddleb)['arc-vh-to'](r66_middle, r64_u - r4_O)['heads-to'](r4_LEFTWARD));
                }
                return void 0;
            };
        };
        r4_hbar = function _r4_t62(r69_xleft, r69_xright, r69_y, r69__fine) {
            var r69_xleft, r69_xright, r69_y, r69__fine, _r69_t0, _r69_t1, _r69_t2;
            return function _r69_t2() {
                var r71_currentGlyph, r71_xn$setwidth$9Jrj, r71_xn$assignunicode$7Hrq, r71_xn$startfrom$1aao, r71_xn$lineto$5sIl, r71_xn$curveto$1aao, r71_xn$cubicto$1aao, r71_xn$putshapes$9Jrj, r71_xn$reverselast$3qIs, r71_include, r71_xn$createstroke$7Hrq, r71_xn$setanchor$9Jrj, r71_xn$applytransform$1aao, r71_xn$dontexport$5sIl, r71_fine, _r71_t0, _r71_t1, _r71_t2, _r71_t3;
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
                r71_xn$applytransform$1aao = _r71_t0['apply-transform']['bind'](_r71_t0);
                r71_xn$dontexport$5sIl = function _r71_t3() {
                    var _r73_t0, _r73_t1;
                    return r71_currentGlyph['dontExport'] = true;
                };
                _r71_t0['gizmo'] = r4_globalTransform;
                _r71_t0['set-width'](r4_WIDTH);
                r71_fine = (r69__fine || r4_STROKE) / 2;
                r71_include(r71_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r69_xleft, r69_y)['heads-to'](r4_RIGHTWARD)['set-width'](r71_fine, r71_fine)['line-to'](r69_xright, r69_y)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_vbar = function _r4_t63(r74_x, r74_ydown, r74_yup, r74__fine) {
            var r74_x, r74_ydown, r74_yup, r74__fine, _r74_t0, _r74_t1, _r74_t2;
            return function _r74_t2() {
                var r76_currentGlyph, r76_xn$setwidth$9Jrj, r76_xn$assignunicode$7Hrq, r76_xn$startfrom$1aao, r76_xn$lineto$5sIl, r76_xn$curveto$1aao, r76_xn$cubicto$1aao, r76_xn$putshapes$9Jrj, r76_xn$reverselast$3qIs, r76_include, r76_xn$createstroke$7Hrq, r76_xn$setanchor$9Jrj, r76_xn$applytransform$1aao, r76_xn$dontexport$5sIl, r76_fine, _r76_t0, _r76_t1, _r76_t2, _r76_t3, _r76_t4, _r76_t5, _r76_t6, _r76_t7, _r76_t8, _r76_t9, _r76_t10, _r76_t11, _r76_t12, _r76_t13, _r76_t14, _r76_t15, _r76_t16, _r76_t17, _r76_t18, _r76_t19;
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
                r76_xn$applytransform$1aao = _r76_t0['apply-transform']['bind'](_r76_t0);
                r76_xn$dontexport$5sIl = function _r76_t3() {
                    var _r78_t0, _r78_t1;
                    return r76_currentGlyph['dontExport'] = true;
                };
                _r76_t0['gizmo'] = r4_globalTransform;
                _r76_t0['set-width'](r4_WIDTH);
                r76_fine = (r74__fine || r4_STROKE) / 2;
                _r76_t4 = r76_include;
                _r76_t5 = r76_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r74_x, r74_ydown);
                _r76_t6 = _r76_t5['heads-to'];
                if (r74_ydown < r74_yup)
                    _r76_t7 = r4_UPWARD;
                else
                    _r76_t7 = r4_DOWNWARD;
                _r76_t8 = _r76_t6['call'](_r76_t5, _r76_t7);
                _r76_t9 = _r76_t8['set-width'];
                _r76_t10 = r76_fine;
                _r76_t11 = r76_fine;
                _r76_t12 = _r76_t9['call'](_r76_t8, _r76_t10, _r76_t11);
                _r76_t13 = _r76_t12['line-to'];
                _r76_t14 = r74_x;
                _r76_t15 = r74_yup;
                _r76_t16 = _r76_t13['call'](_r76_t12, _r76_t14, _r76_t15);
                _r76_t17 = _r76_t16['heads-to'];
                if (r74_ydown < r74_yup)
                    _r76_t18 = r4_UPWARD;
                else
                    _r76_t18 = r4_DOWNWARD;
                _r76_t19 = _r76_t17['call'](_r76_t16, _r76_t18);
                _r76_t4(_r76_t19);
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t64() {
            var r80_currentGlyph, r80_xn$setwidth$9Jrj, r80_xn$assignunicode$7Hrq, r80_xn$startfrom$1aao, r80_xn$lineto$5sIl, r80_xn$curveto$1aao, r80_xn$cubicto$1aao, r80_xn$putshapes$9Jrj, r80_xn$reverselast$3qIs, r80_include, r80_xn$createstroke$7Hrq, r80_xn$setanchor$9Jrj, r80_xn$applytransform$1aao, r80_xn$dontexport$5sIl, _r80_t0, _r80_t1, _r80_t2, _r80_t3;
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
            r80_xn$applytransform$1aao = _r80_t0['apply-transform']['bind'](_r80_t0);
            r80_xn$dontexport$5sIl = function _r80_t3() {
                var _r82_t0, _r82_t1;
                return r80_currentGlyph['dontExport'] = true;
            };
            _r80_t0['gizmo'] = r4_globalTransform;
            _r80_t0['set-width'](r4_WIDTH);
            r80_xn$setwidth$9Jrj(0);
            r80_xn$assignunicode$7Hrq(775);
            r80_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r80_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t65() {
            var r84_currentGlyph, r84_xn$setwidth$9Jrj, r84_xn$assignunicode$7Hrq, r84_xn$startfrom$1aao, r84_xn$lineto$5sIl, r84_xn$curveto$1aao, r84_xn$cubicto$1aao, r84_xn$putshapes$9Jrj, r84_xn$reverselast$3qIs, r84_include, r84_xn$createstroke$7Hrq, r84_xn$setanchor$9Jrj, r84_xn$applytransform$1aao, r84_xn$dontexport$5sIl, _r84_t0, _r84_t1, _r84_t2, _r84_t3;
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
            r84_xn$applytransform$1aao = _r84_t0['apply-transform']['bind'](_r84_t0);
            r84_xn$dontexport$5sIl = function _r84_t3() {
                var _r86_t0, _r86_t1;
                return r84_currentGlyph['dontExport'] = true;
            };
            _r84_t0['gizmo'] = r4_globalTransform;
            _r84_t0['set-width'](r4_WIDTH);
            r84_xn$setwidth$9Jrj(0);
            r84_xn$assignunicode$7Hrq(776);
            r84_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r84_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t66() {
            var r88_currentGlyph, r88_xn$setwidth$9Jrj, r88_xn$assignunicode$7Hrq, r88_xn$startfrom$1aao, r88_xn$lineto$5sIl, r88_xn$curveto$1aao, r88_xn$cubicto$1aao, r88_xn$putshapes$9Jrj, r88_xn$reverselast$3qIs, r88_include, r88_xn$createstroke$7Hrq, r88_xn$setanchor$9Jrj, r88_xn$applytransform$1aao, r88_xn$dontexport$5sIl, r88_radiusOut, r88_radiusIn, _r88_t0, _r88_t1, _r88_t2, _r88_t3;
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
            r88_xn$applytransform$1aao = _r88_t0['apply-transform']['bind'](_r88_t0);
            r88_xn$dontexport$5sIl = function _r88_t3() {
                var _r90_t0, _r90_t1;
                return r88_currentGlyph['dontExport'] = true;
            };
            _r88_t0['gizmo'] = r4_globalTransform;
            _r88_t0['set-width'](r4_WIDTH);
            r88_xn$setwidth$9Jrj(0);
            r88_xn$assignunicode$7Hrq(778);
            r88_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r88_radiusOut = r4_DOTRADIUS * 1.5;
            r88_radiusIn = r4_DOTRADIUS * 0.7;
            r88_include([
                r4_Ring(r4_XH + r4_ACCENT + r88_radiusOut, r4_XH + r4_ACCENT - r88_radiusOut, r4_markMiddle - r88_radiusOut, r4_markMiddle + r88_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r88_radiusIn, r4_XH + r4_ACCENT - r88_radiusIn, r4_markMiddle - r88_radiusIn, r4_markMiddle + r88_radiusIn)
            ]);
            r88_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t67() {
            var r92_currentGlyph, r92_xn$setwidth$9Jrj, r92_xn$assignunicode$7Hrq, r92_xn$startfrom$1aao, r92_xn$lineto$5sIl, r92_xn$curveto$1aao, r92_xn$cubicto$1aao, r92_xn$putshapes$9Jrj, r92_xn$reverselast$3qIs, r92_include, r92_xn$createstroke$7Hrq, r92_xn$setanchor$9Jrj, r92_xn$applytransform$1aao, r92_xn$dontexport$5sIl, _r92_t0, _r92_t1, _r92_t2, _r92_t3;
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
            r92_xn$applytransform$1aao = _r92_t0['apply-transform']['bind'](_r92_t0);
            r92_xn$dontexport$5sIl = function _r92_t3() {
                var _r94_t0, _r94_t1;
                return r92_currentGlyph['dontExport'] = true;
            };
            _r92_t0['gizmo'] = r4_globalTransform;
            _r92_t0['set-width'](r4_WIDTH);
            r92_xn$setwidth$9Jrj(0);
            r92_xn$assignunicode$7Hrq(768);
            r92_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r92_include(r92_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t68() {
            var r96_currentGlyph, r96_xn$setwidth$9Jrj, r96_xn$assignunicode$7Hrq, r96_xn$startfrom$1aao, r96_xn$lineto$5sIl, r96_xn$curveto$1aao, r96_xn$cubicto$1aao, r96_xn$putshapes$9Jrj, r96_xn$reverselast$3qIs, r96_include, r96_xn$createstroke$7Hrq, r96_xn$setanchor$9Jrj, r96_xn$applytransform$1aao, r96_xn$dontexport$5sIl, _r96_t0, _r96_t1, _r96_t2, _r96_t3;
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
            r96_xn$applytransform$1aao = _r96_t0['apply-transform']['bind'](_r96_t0);
            r96_xn$dontexport$5sIl = function _r96_t3() {
                var _r98_t0, _r98_t1;
                return r96_currentGlyph['dontExport'] = true;
            };
            _r96_t0['gizmo'] = r4_globalTransform;
            _r96_t0['set-width'](r4_WIDTH);
            r96_xn$setwidth$9Jrj(0);
            r96_xn$assignunicode$7Hrq(769);
            r96_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r96_include(r96_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t69() {
            var r100_currentGlyph, r100_xn$setwidth$9Jrj, r100_xn$assignunicode$7Hrq, r100_xn$startfrom$1aao, r100_xn$lineto$5sIl, r100_xn$curveto$1aao, r100_xn$cubicto$1aao, r100_xn$putshapes$9Jrj, r100_xn$reverselast$3qIs, r100_include, r100_xn$createstroke$7Hrq, r100_xn$setanchor$9Jrj, r100_xn$applytransform$1aao, r100_xn$dontexport$5sIl, _r100_t0, _r100_t1, _r100_t2, _r100_t3;
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
            r100_xn$applytransform$1aao = _r100_t0['apply-transform']['bind'](_r100_t0);
            r100_xn$dontexport$5sIl = function _r100_t3() {
                var _r102_t0, _r102_t1;
                return r100_currentGlyph['dontExport'] = true;
            };
            _r100_t0['gizmo'] = r4_globalTransform;
            _r100_t0['set-width'](r4_WIDTH);
            r100_xn$setwidth$9Jrj(0);
            r100_xn$assignunicode$7Hrq(770);
            r100_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r100_include(r100_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r100_include(r100_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t70() {
            var r104_currentGlyph, r104_xn$setwidth$9Jrj, r104_xn$assignunicode$7Hrq, r104_xn$startfrom$1aao, r104_xn$lineto$5sIl, r104_xn$curveto$1aao, r104_xn$cubicto$1aao, r104_xn$putshapes$9Jrj, r104_xn$reverselast$3qIs, r104_include, r104_xn$createstroke$7Hrq, r104_xn$setanchor$9Jrj, r104_xn$applytransform$1aao, r104_xn$dontexport$5sIl, _r104_t0, _r104_t1, _r104_t2, _r104_t3;
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
            r104_xn$applytransform$1aao = _r104_t0['apply-transform']['bind'](_r104_t0);
            r104_xn$dontexport$5sIl = function _r104_t3() {
                var _r106_t0, _r106_t1;
                return r104_currentGlyph['dontExport'] = true;
            };
            _r104_t0['gizmo'] = r4_globalTransform;
            _r104_t0['set-width'](r4_WIDTH);
            r104_xn$setwidth$9Jrj(0);
            r104_xn$assignunicode$7Hrq(780);
            r104_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r104_include(r104_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r104_include(r104_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t71() {
            var r108_currentGlyph, r108_xn$setwidth$9Jrj, r108_xn$assignunicode$7Hrq, r108_xn$startfrom$1aao, r108_xn$lineto$5sIl, r108_xn$curveto$1aao, r108_xn$cubicto$1aao, r108_xn$putshapes$9Jrj, r108_xn$reverselast$3qIs, r108_include, r108_xn$createstroke$7Hrq, r108_xn$setanchor$9Jrj, r108_xn$applytransform$1aao, r108_xn$dontexport$5sIl, r108_leftEnd, r108_rightEnd, r108_ttop, r108_tbot, r108_top, r108_bot, r108_tildeWave, r108_tildeWaveX, r108_tildeWaveEnd, _r108_t0, _r108_t1, _r108_t2, _r108_t3;
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
            r108_xn$applytransform$1aao = _r108_t0['apply-transform']['bind'](_r108_t0);
            r108_xn$dontexport$5sIl = function _r108_t3() {
                var _r110_t0, _r110_t1;
                return r108_currentGlyph['dontExport'] = true;
            };
            _r108_t0['gizmo'] = r4_globalTransform;
            _r108_t0['set-width'](r4_WIDTH);
            r108_xn$setwidth$9Jrj(0);
            r108_xn$assignunicode$7Hrq(771);
            r108_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r108_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r108_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r108_ttop = r4_aboveMarkTop;
            r108_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r108_top = r108_ttop + r4_markFine * 2;
            r108_bot = r108_tbot - r4_markFine * 2;
            r108_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r108_tildeWaveX = 0.52;
            r108_tildeWaveEnd = 0;
            r108_include(r108_xn$createstroke$7Hrq()['start-from'](r108_leftEnd, r0_mix(r108_tbot, r108_ttop, r108_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r108_leftEnd, r108_rightEnd, r108_tildeWaveX), r0_mix(r108_bot, r108_top, r108_tildeWave), r0_mix(r108_leftEnd, r108_rightEnd, 1 - r108_tildeWaveX), r0_mix(r108_bot, r108_top, 1 - r108_tildeWave), r108_rightEnd, r0_mix(r108_tbot, r108_ttop, 1 - r108_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t72() {
            var r112_currentGlyph, r112_xn$setwidth$9Jrj, r112_xn$assignunicode$7Hrq, r112_xn$startfrom$1aao, r112_xn$lineto$5sIl, r112_xn$curveto$1aao, r112_xn$cubicto$1aao, r112_xn$putshapes$9Jrj, r112_xn$reverselast$3qIs, r112_include, r112_xn$createstroke$7Hrq, r112_xn$setanchor$9Jrj, r112_xn$applytransform$1aao, r112_xn$dontexport$5sIl, r112_leftEnd, r112_rightEnd, _r112_t0, _r112_t1, _r112_t2, _r112_t3;
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
            r112_xn$applytransform$1aao = _r112_t0['apply-transform']['bind'](_r112_t0);
            r112_xn$dontexport$5sIl = function _r112_t3() {
                var _r114_t0, _r114_t1;
                return r112_currentGlyph['dontExport'] = true;
            };
            _r112_t0['gizmo'] = r4_globalTransform;
            _r112_t0['set-width'](r4_WIDTH);
            r112_xn$setwidth$9Jrj(0);
            r112_xn$assignunicode$7Hrq(772);
            r112_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r112_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r112_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r112_include(r112_xn$createstroke$7Hrq()['start-from'](r112_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r112_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t73() {
            var r116_currentGlyph, r116_xn$setwidth$9Jrj, r116_xn$assignunicode$7Hrq, r116_xn$startfrom$1aao, r116_xn$lineto$5sIl, r116_xn$curveto$1aao, r116_xn$cubicto$1aao, r116_xn$putshapes$9Jrj, r116_xn$reverselast$3qIs, r116_include, r116_xn$createstroke$7Hrq, r116_xn$setanchor$9Jrj, r116_xn$applytransform$1aao, r116_xn$dontexport$5sIl, r116_leftEnd, r116_rightEnd, _r116_t0, _r116_t1, _r116_t2, _r116_t3;
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
            r116_xn$applytransform$1aao = _r116_t0['apply-transform']['bind'](_r116_t0);
            r116_xn$dontexport$5sIl = function _r116_t3() {
                var _r118_t0, _r118_t1;
                return r116_currentGlyph['dontExport'] = true;
            };
            _r116_t0['gizmo'] = r4_globalTransform;
            _r116_t0['set-width'](r4_WIDTH);
            r116_xn$setwidth$9Jrj(0);
            r116_xn$assignunicode$7Hrq(774);
            r116_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r116_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r116_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r116_include(r116_xn$createstroke$7Hrq()['start-from'](r116_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r116_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('archAbove', function _r4_t74() {
            var r120_currentGlyph, r120_xn$setwidth$9Jrj, r120_xn$assignunicode$7Hrq, r120_xn$startfrom$1aao, r120_xn$lineto$5sIl, r120_xn$curveto$1aao, r120_xn$cubicto$1aao, r120_xn$putshapes$9Jrj, r120_xn$reverselast$3qIs, r120_include, r120_xn$createstroke$7Hrq, r120_xn$setanchor$9Jrj, r120_xn$applytransform$1aao, r120_xn$dontexport$5sIl, r120_leftEnd, r120_rightEnd, _r120_t0, _r120_t1, _r120_t2, _r120_t3;
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
            r120_xn$applytransform$1aao = _r120_t0['apply-transform']['bind'](_r120_t0);
            r120_xn$dontexport$5sIl = function _r120_t3() {
                var _r122_t0, _r122_t1;
                return r120_currentGlyph['dontExport'] = true;
            };
            _r120_t0['gizmo'] = r4_globalTransform;
            _r120_t0['set-width'](r4_WIDTH);
            r120_xn$setwidth$9Jrj(0);
            r120_xn$assignunicode$7Hrq(785);
            r120_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r120_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r120_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r120_include(r120_xn$createstroke$7Hrq()['start-from'](r120_leftEnd, r4_aboveMarkBot)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_UPWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkTop - r4_markHalfStroke)['arc-hv-to'](r120_rightEnd, r4_aboveMarkBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t75() {
            var r124_currentGlyph, r124_xn$setwidth$9Jrj, r124_xn$assignunicode$7Hrq, r124_xn$startfrom$1aao, r124_xn$lineto$5sIl, r124_xn$curveto$1aao, r124_xn$cubicto$1aao, r124_xn$putshapes$9Jrj, r124_xn$reverselast$3qIs, r124_include, r124_xn$createstroke$7Hrq, r124_xn$setanchor$9Jrj, r124_xn$applytransform$1aao, r124_xn$dontexport$5sIl, r124_fine, r124_hookBot, r124_hookTop, _r124_t0, _r124_t1, _r124_t2, _r124_t3;
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
            r124_xn$applytransform$1aao = _r124_t0['apply-transform']['bind'](_r124_t0);
            r124_xn$dontexport$5sIl = function _r124_t3() {
                var _r126_t0, _r126_t1;
                return r124_currentGlyph['dontExport'] = true;
            };
            _r124_t0['gizmo'] = r4_globalTransform;
            _r124_t0['set-width'](r4_WIDTH);
            r124_xn$setwidth$9Jrj(0);
            r124_xn$assignunicode$7Hrq(777);
            r124_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r124_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r124_hookBot = r4_aboveMarkBot - r124_fine / 2;
            r124_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r124_fine / 2;
            r124_include(r124_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r124_fine * r4_ITALICCOR, r124_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r124_fine * 2, 0)['line-to'](r4_markMiddle + r124_fine * 0.5, r124_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r124_hookBot, r124_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r124_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r124_fine, r124_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleGraveAbove', function _r4_t76() {
            var r128_currentGlyph, r128_xn$setwidth$9Jrj, r128_xn$assignunicode$7Hrq, r128_xn$startfrom$1aao, r128_xn$lineto$5sIl, r128_xn$curveto$1aao, r128_xn$cubicto$1aao, r128_xn$putshapes$9Jrj, r128_xn$reverselast$3qIs, r128_include, r128_xn$createstroke$7Hrq, r128_xn$setanchor$9Jrj, r128_xn$applytransform$1aao, r128_xn$dontexport$5sIl, r128_m1, r128_m2, _r128_t0, _r128_t1, _r128_t2, _r128_t3;
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
            r128_xn$applytransform$1aao = _r128_t0['apply-transform']['bind'](_r128_t0);
            r128_xn$dontexport$5sIl = function _r128_t3() {
                var _r130_t0, _r130_t1;
                return r128_currentGlyph['dontExport'] = true;
            };
            _r128_t0['gizmo'] = r4_globalTransform;
            _r128_t0['set-width'](r4_WIDTH);
            r128_xn$setwidth$9Jrj(0);
            r128_xn$assignunicode$7Hrq(783);
            r128_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r128_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r128_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r128_include(r128_xn$createstroke$7Hrq()['start-from'](r128_m1 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r128_m1 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r128_include(r128_xn$createstroke$7Hrq()['start-from'](r128_m2 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r128_m2 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleAcuteAbove', function _r4_t77() {
            var r132_currentGlyph, r132_xn$setwidth$9Jrj, r132_xn$assignunicode$7Hrq, r132_xn$startfrom$1aao, r132_xn$lineto$5sIl, r132_xn$curveto$1aao, r132_xn$cubicto$1aao, r132_xn$putshapes$9Jrj, r132_xn$reverselast$3qIs, r132_include, r132_xn$createstroke$7Hrq, r132_xn$setanchor$9Jrj, r132_xn$applytransform$1aao, r132_xn$dontexport$5sIl, r132_m1, r132_m2, _r132_t0, _r132_t1, _r132_t2, _r132_t3;
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
            r132_xn$applytransform$1aao = _r132_t0['apply-transform']['bind'](_r132_t0);
            r132_xn$dontexport$5sIl = function _r132_t3() {
                var _r134_t0, _r134_t1;
                return r132_currentGlyph['dontExport'] = true;
            };
            _r132_t0['gizmo'] = r4_globalTransform;
            _r132_t0['set-width'](r4_WIDTH);
            r132_xn$setwidth$9Jrj(0);
            r132_xn$assignunicode$7Hrq(779);
            r132_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r132_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r132_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r132_m1 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r132_m1 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r132_include(r132_xn$createstroke$7Hrq()['start-from'](r132_m2 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r132_m2 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t78() {
            var r136_currentGlyph, r136_xn$setwidth$9Jrj, r136_xn$assignunicode$7Hrq, r136_xn$startfrom$1aao, r136_xn$lineto$5sIl, r136_xn$curveto$1aao, r136_xn$cubicto$1aao, r136_xn$putshapes$9Jrj, r136_xn$reverselast$3qIs, r136_include, r136_xn$createstroke$7Hrq, r136_xn$setanchor$9Jrj, r136_xn$applytransform$1aao, r136_xn$dontexport$5sIl, _r136_t0, _r136_t1, _r136_t2, _r136_t3;
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
            r136_xn$applytransform$1aao = _r136_t0['apply-transform']['bind'](_r136_t0);
            r136_xn$dontexport$5sIl = function _r136_t3() {
                var _r138_t0, _r138_t1;
                return r136_currentGlyph['dontExport'] = true;
            };
            _r136_t0['gizmo'] = r4_globalTransform;
            _r136_t0['set-width'](r4_WIDTH);
            r136_xn$setwidth$9Jrj(0);
            r136_xn$assignunicode$7Hrq(803);
            r136_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r136_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t79() {
            var r140_currentGlyph, r140_xn$setwidth$9Jrj, r140_xn$assignunicode$7Hrq, r140_xn$startfrom$1aao, r140_xn$lineto$5sIl, r140_xn$curveto$1aao, r140_xn$cubicto$1aao, r140_xn$putshapes$9Jrj, r140_xn$reverselast$3qIs, r140_include, r140_xn$createstroke$7Hrq, r140_xn$setanchor$9Jrj, r140_xn$applytransform$1aao, r140_xn$dontexport$5sIl, r140_fine, r140_cedillaTop, r140_cedillaBot, _r140_t0, _r140_t1, _r140_t2, _r140_t3;
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
            r140_xn$applytransform$1aao = _r140_t0['apply-transform']['bind'](_r140_t0);
            r140_xn$dontexport$5sIl = function _r140_t3() {
                var _r142_t0, _r142_t1;
                return r140_currentGlyph['dontExport'] = true;
            };
            _r140_t0['gizmo'] = r4_globalTransform;
            _r140_t0['set-width'](r4_WIDTH);
            r140_xn$setwidth$9Jrj(0);
            r140_xn$assignunicode$7Hrq(807);
            r140_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r140_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r140_cedillaTop = r4_belowMarkTop + r140_fine * 0.85;
            r140_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r140_include(r140_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r140_fine * r4_ITALICCOR, r140_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r140_fine * 2)['line-to'](r4_markMiddle + r140_fine * 0.5, r140_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r140_cedillaTop, r140_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r140_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r140_cedillaBot)['heads-to'](r4_LEFTWARD));
            r140_include(r140_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r140_fine, r140_fine)['line-to'](r4_markMiddle, r140_cedillaTop - r140_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t80() {
            var r144_currentGlyph, r144_xn$setwidth$9Jrj, r144_xn$assignunicode$7Hrq, r144_xn$startfrom$1aao, r144_xn$lineto$5sIl, r144_xn$curveto$1aao, r144_xn$cubicto$1aao, r144_xn$putshapes$9Jrj, r144_xn$reverselast$3qIs, r144_include, r144_xn$createstroke$7Hrq, r144_xn$setanchor$9Jrj, r144_xn$applytransform$1aao, r144_xn$dontexport$5sIl, r144_TURN, _r144_t0, _r144_t1, _r144_t2, _r144_t3;
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
            r144_xn$applytransform$1aao = _r144_t0['apply-transform']['bind'](_r144_t0);
            r144_xn$dontexport$5sIl = function _r144_t3() {
                var _r146_t0, _r146_t1;
                return r144_currentGlyph['dontExport'] = true;
            };
            _r144_t0['gizmo'] = r4_globalTransform;
            _r144_t0['set-width'](r4_WIDTH);
            r144_xn$setwidth$9Jrj(r4_WIDTH);
            r144_xn$assignunicode$7Hrq('A');
            r144_include(r4_capitalMarks);
            r144_TURN = r4_XH * 0.1;
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r144_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r144_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r144_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r144_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r144_include(r144_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r144_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r144_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r144_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t81() {
            var r148_currentGlyph, r148_xn$setwidth$9Jrj, r148_xn$assignunicode$7Hrq, r148_xn$startfrom$1aao, r148_xn$lineto$5sIl, r148_xn$curveto$1aao, r148_xn$cubicto$1aao, r148_xn$putshapes$9Jrj, r148_xn$reverselast$3qIs, r148_include, r148_xn$createstroke$7Hrq, r148_xn$setanchor$9Jrj, r148_xn$applytransform$1aao, r148_xn$dontexport$5sIl, r148_TURN, _r148_t0, _r148_t1, _r148_t2, _r148_t3;
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
            r148_xn$applytransform$1aao = _r148_t0['apply-transform']['bind'](_r148_t0);
            r148_xn$dontexport$5sIl = function _r148_t3() {
                var _r150_t0, _r150_t1;
                return r148_currentGlyph['dontExport'] = true;
            };
            _r148_t0['gizmo'] = r4_globalTransform;
            _r148_t0['set-width'](r4_WIDTH);
            r148_xn$setwidth$9Jrj(r4_WIDTH);
            r148_xn$assignunicode$7Hrq('V');
            r148_include(r4_capitalMarks);
            r148_TURN = r4_CAP * 0.9;
            r148_include(r148_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r148_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r148_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r148_include(r148_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r148_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r148_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r148_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r148_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r148_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t82() {
            var r152_currentGlyph, r152_xn$setwidth$9Jrj, r152_xn$assignunicode$7Hrq, r152_xn$startfrom$1aao, r152_xn$lineto$5sIl, r152_xn$curveto$1aao, r152_xn$cubicto$1aao, r152_xn$putshapes$9Jrj, r152_xn$reverselast$3qIs, r152_include, r152_xn$createstroke$7Hrq, r152_xn$setanchor$9Jrj, r152_xn$applytransform$1aao, r152_xn$dontexport$5sIl, r152_TURN, r152_turn2, r152_wheight, r152_bottomStroke, r152_m1, r152_m2, _r152_t0, _r152_t1, _r152_t2, _r152_t3;
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
            r152_xn$applytransform$1aao = _r152_t0['apply-transform']['bind'](_r152_t0);
            r152_xn$dontexport$5sIl = function _r152_t3() {
                var _r154_t0, _r154_t1;
                return r152_currentGlyph['dontExport'] = true;
            };
            _r152_t0['gizmo'] = r4_globalTransform;
            _r152_t0['set-width'](r4_WIDTH);
            r152_xn$setwidth$9Jrj(r4_WIDTH);
            r152_xn$assignunicode$7Hrq('W');
            r152_include(r4_capitalMarks);
            r152_TURN = r4_CAP * 0.75;
            r152_turn2 = r4_CAP * 0.59;
            r152_wheight = r4_CAP * 0.6;
            r152_bottomStroke = r4_adviceBlackness(5.2);
            r152_m1 = r4_WIDTH * 0.3;
            r152_m2 = r4_WIDTH * 0.7;
            r152_include(r152_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r152_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r152_TURN, r152_m1 - r152_bottomStroke / 2, 0)['set-width'](r152_bottomStroke, 0));
            r152_include(r152_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r152_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r152_TURN, r152_m2 + r152_bottomStroke / 2, 0)['set-width'](0, r152_bottomStroke));
            r152_include(r152_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r152_bottomStroke / 2, r152_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r152_bottomStroke)['line-to'](r4_MIDDLE + r152_bottomStroke / 2, r152_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r152_bottomStroke / 2, (1 - 0.1) * r152_turn2, r152_m1 + r152_bottomStroke / 2, 0)['set-width'](0, r152_bottomStroke));
            r152_include(r152_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r152_bottomStroke / 2, r152_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r152_bottomStroke, 0)['line-to'](r4_MIDDLE - r152_bottomStroke / 2, r152_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r152_bottomStroke / 2, (1 - 0.1) * r152_turn2, r152_m2 - r152_bottomStroke / 2, 0)['set-width'](r152_bottomStroke, 0));
            r152_xn$startfrom$1aao(r152_m1 + r152_bottomStroke / 2, 0);
            r152_xn$lineto$5sIl(r152_m1 - r152_bottomStroke / 2, 0);
            r152_xn$lineto$5sIl(r152_m1, r152_bottomStroke);
            r152_xn$startfrom$1aao(r152_m2 + r152_bottomStroke / 2, 0);
            r152_xn$lineto$5sIl(r152_m2 - r152_bottomStroke / 2, 0);
            r152_xn$lineto$5sIl(r152_m2, r152_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t83() {
            var r156_currentGlyph, r156_xn$setwidth$9Jrj, r156_xn$assignunicode$7Hrq, r156_xn$startfrom$1aao, r156_xn$lineto$5sIl, r156_xn$curveto$1aao, r156_xn$cubicto$1aao, r156_xn$putshapes$9Jrj, r156_xn$reverselast$3qIs, r156_include, r156_xn$createstroke$7Hrq, r156_xn$setanchor$9Jrj, r156_xn$applytransform$1aao, r156_xn$dontexport$5sIl, _r156_t0, _r156_t1, _r156_t2, _r156_t3;
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
            r156_xn$applytransform$1aao = _r156_t0['apply-transform']['bind'](_r156_t0);
            r156_xn$dontexport$5sIl = function _r156_t3() {
                var _r158_t0, _r158_t1;
                return r156_currentGlyph['dontExport'] = true;
            };
            _r156_t0['gizmo'] = r4_globalTransform;
            _r156_t0['set-width'](r4_WIDTH);
            r156_xn$setwidth$9Jrj(r4_WIDTH);
            r156_xn$assignunicode$7Hrq('X');
            r156_include(r4_capitalMarks);
            r156_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r156_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t84() {
            var r160_currentGlyph, r160_xn$setwidth$9Jrj, r160_xn$assignunicode$7Hrq, r160_xn$startfrom$1aao, r160_xn$lineto$5sIl, r160_xn$curveto$1aao, r160_xn$cubicto$1aao, r160_xn$putshapes$9Jrj, r160_xn$reverselast$3qIs, r160_include, r160_xn$createstroke$7Hrq, r160_xn$setanchor$9Jrj, r160_xn$applytransform$1aao, r160_xn$dontexport$5sIl, r160_cross, _r160_t0, _r160_t1, _r160_t2, _r160_t3;
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
            r160_xn$applytransform$1aao = _r160_t0['apply-transform']['bind'](_r160_t0);
            r160_xn$dontexport$5sIl = function _r160_t3() {
                var _r162_t0, _r162_t1;
                return r160_currentGlyph['dontExport'] = true;
            };
            _r160_t0['gizmo'] = r4_globalTransform;
            _r160_t0['set-width'](r4_WIDTH);
            r160_xn$setwidth$9Jrj(r4_WIDTH);
            r160_xn$assignunicode$7Hrq('Y');
            r160_include(r4_capitalMarks);
            r160_cross = r4_CAP * 0.4;
            r160_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r160_cross, 0.1, 0.4, 0.28));
            r160_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r160_cross, 0.1, 0.4, 0.28));
            r160_include(r160_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r160_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t85() {
            var r164_currentGlyph, r164_xn$setwidth$9Jrj, r164_xn$assignunicode$7Hrq, r164_xn$startfrom$1aao, r164_xn$lineto$5sIl, r164_xn$curveto$1aao, r164_xn$cubicto$1aao, r164_xn$putshapes$9Jrj, r164_xn$reverselast$3qIs, r164_include, r164_xn$createstroke$7Hrq, r164_xn$setanchor$9Jrj, r164_xn$applytransform$1aao, r164_xn$dontexport$5sIl, r164_TURN, r164_rturn, r164_right, r164_fine, _r164_t0, _r164_t1, _r164_t2, _r164_t3;
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
            r164_xn$applytransform$1aao = _r164_t0['apply-transform']['bind'](_r164_t0);
            r164_xn$dontexport$5sIl = function _r164_t3() {
                var _r166_t0, _r166_t1;
                return r164_currentGlyph['dontExport'] = true;
            };
            _r164_t0['gizmo'] = r4_globalTransform;
            _r164_t0['set-width'](r4_WIDTH);
            r164_xn$setwidth$9Jrj(r4_WIDTH);
            r164_xn$assignunicode$7Hrq('K');
            r164_include(r4_capitalMarks);
            r164_TURN = r4_CAP * 0.95;
            r164_rturn = r4_XH * 0.1;
            r164_right = r4_RIGHTSB - r4_O;
            r164_fine = r4_adviceBlackness(3.5);
            r164_include(r164_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r164_include(r164_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r164_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r164_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r164_fine));
            r164_include(r164_xn$createstroke$7Hrq()['start-from'](r164_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r164_right - r4_HALFSTROKE, r164_rturn + 0.2 * (r4_XH - r164_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r164_fine / 2, r164_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t86() {
            var r168_currentGlyph, r168_xn$setwidth$9Jrj, r168_xn$assignunicode$7Hrq, r168_xn$startfrom$1aao, r168_xn$lineto$5sIl, r168_xn$curveto$1aao, r168_xn$cubicto$1aao, r168_xn$putshapes$9Jrj, r168_xn$reverselast$3qIs, r168_include, r168_xn$createstroke$7Hrq, r168_xn$setanchor$9Jrj, r168_xn$applytransform$1aao, r168_xn$dontexport$5sIl, r168_bowl, r168_tkappa, r168_bkappa, r168_turntop, r168_turnbottom, _r168_t0, _r168_t1, _r168_t2, _r168_t3;
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
            r168_xn$applytransform$1aao = _r168_t0['apply-transform']['bind'](_r168_t0);
            r168_xn$dontexport$5sIl = function _r168_t3() {
                var _r170_t0, _r170_t1;
                return r168_currentGlyph['dontExport'] = true;
            };
            _r168_t0['gizmo'] = r4_globalTransform;
            _r168_t0['set-width'](r4_WIDTH);
            r168_xn$setwidth$9Jrj(r4_WIDTH);
            r168_xn$assignunicode$7Hrq('B');
            r168_include(r4_capitalMarks);
            r168_bowl = 451;
            r168_tkappa = r4_COKAPPA - 0.22;
            r168_bkappa = r4_COKAPPA - 0.2;
            r168_turntop = (r4_CAP + (r168_bowl - r4_STROKE)) / 2;
            r168_turnbottom = r168_bowl / 2;
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r168_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r168_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r168_turnbottom, r168_bowl - r4_STROKE)['line-to'](r4_SB, r168_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r168_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r168_turnbottom)['arc-vh-to'](r4_RIGHTSB - r168_turnbottom, r168_bowl)['line-to'](r4_SB, r168_bowl)['heads-to'](r4_LEFTWARD));
            r168_include(r168_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t87() {
            var r172_currentGlyph, r172_xn$setwidth$9Jrj, r172_xn$assignunicode$7Hrq, r172_xn$startfrom$1aao, r172_xn$lineto$5sIl, r172_xn$curveto$1aao, r172_xn$cubicto$1aao, r172_xn$putshapes$9Jrj, r172_xn$reverselast$3qIs, r172_include, r172_xn$createstroke$7Hrq, r172_xn$setanchor$9Jrj, r172_xn$applytransform$1aao, r172_xn$dontexport$5sIl, r172_dsmooth, r172_bsmooth, _r172_t0, _r172_t1, _r172_t2, _r172_t3;
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
            r172_xn$applytransform$1aao = _r172_t0['apply-transform']['bind'](_r172_t0);
            r172_xn$dontexport$5sIl = function _r172_t3() {
                var _r174_t0, _r174_t1;
                return r172_currentGlyph['dontExport'] = true;
            };
            _r172_t0['gizmo'] = r4_globalTransform;
            _r172_t0['set-width'](r4_WIDTH);
            r172_xn$setwidth$9Jrj(r4_WIDTH);
            r172_xn$assignunicode$7Hrq('D');
            r172_include(r4_capitalMarks);
            r172_dsmooth = r4_SMOOTH * 1.35;
            r172_bsmooth = r4_SMOOTH * 1.1;
            r172_include(r172_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r172_include(r172_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r172_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r172_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r172_dsmooth)['arc-vh-to'](r4_RIGHTSB - r172_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t88() {
            var r176_currentGlyph, r176_xn$setwidth$9Jrj, r176_xn$assignunicode$7Hrq, r176_xn$startfrom$1aao, r176_xn$lineto$5sIl, r176_xn$curveto$1aao, r176_xn$cubicto$1aao, r176_xn$putshapes$9Jrj, r176_xn$reverselast$3qIs, r176_include, r176_xn$createstroke$7Hrq, r176_xn$setanchor$9Jrj, r176_xn$applytransform$1aao, r176_xn$dontexport$5sIl, r176_bowlTop, r176_bowlBottom, r176_bkappa, r176_turn, r176_turnRadius, _r176_t0, _r176_t1, _r176_t2, _r176_t3;
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
            r176_xn$applytransform$1aao = _r176_t0['apply-transform']['bind'](_r176_t0);
            r176_xn$dontexport$5sIl = function _r176_t3() {
                var _r178_t0, _r178_t1;
                return r176_currentGlyph['dontExport'] = true;
            };
            _r176_t0['gizmo'] = r4_globalTransform;
            _r176_t0['set-width'](r4_WIDTH);
            r176_xn$setwidth$9Jrj(r4_WIDTH);
            r176_xn$assignunicode$7Hrq('P');
            r176_include(r4_capitalMarks);
            r176_bowlTop = r4_CAP * 1;
            r176_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r176_bkappa = r4_COKAPPA - 0.2;
            r176_turn = r0_mix(r176_bowlTop, r176_bowlBottom, 0.5);
            r176_turnRadius = (r176_bowlTop - r176_bowlBottom) / 2;
            r176_include(r176_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r176_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r176_turnRadius, r176_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r176_turn)['arc-vh-to'](r4_RIGHTSB - r176_turnRadius, r176_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r176_bowlBottom)['heads-to'](r4_LEFTWARD));
            r176_include(r176_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t89() {
            var r180_currentGlyph, r180_xn$setwidth$9Jrj, r180_xn$assignunicode$7Hrq, r180_xn$startfrom$1aao, r180_xn$lineto$5sIl, r180_xn$curveto$1aao, r180_xn$cubicto$1aao, r180_xn$putshapes$9Jrj, r180_xn$reverselast$3qIs, r180_include, r180_xn$createstroke$7Hrq, r180_xn$setanchor$9Jrj, r180_xn$applytransform$1aao, r180_xn$dontexport$5sIl, r180_TURN, r180_right, _r180_t0, _r180_t1, _r180_t2, _r180_t3;
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
            r180_xn$applytransform$1aao = _r180_t0['apply-transform']['bind'](_r180_t0);
            r180_xn$dontexport$5sIl = function _r180_t3() {
                var _r182_t0, _r182_t1;
                return r180_currentGlyph['dontExport'] = true;
            };
            _r180_t0['gizmo'] = r4_globalTransform;
            _r180_t0['set-width'](r4_WIDTH);
            r180_xn$setwidth$9Jrj(r4_WIDTH);
            r180_xn$assignunicode$7Hrq('R');
            r180_include(r4_glyphs['P'], r4_AS_BASE);
            r180_TURN = r4_XH * 0.1;
            r180_right = r4_RIGHTSB - r4_O;
            r180_include(r180_xn$createstroke$7Hrq()['start-from'](r180_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r180_right - r4_HALFSTROKE, r180_TURN + 0.2 * (r4_XH - r180_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t90() {
            var r184_currentGlyph, r184_xn$setwidth$9Jrj, r184_xn$assignunicode$7Hrq, r184_xn$startfrom$1aao, r184_xn$lineto$5sIl, r184_xn$curveto$1aao, r184_xn$cubicto$1aao, r184_xn$putshapes$9Jrj, r184_xn$reverselast$3qIs, r184_include, r184_xn$createstroke$7Hrq, r184_xn$setanchor$9Jrj, r184_xn$applytransform$1aao, r184_xn$dontexport$5sIl, _r184_t0, _r184_t1, _r184_t2, _r184_t3;
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
            r184_xn$applytransform$1aao = _r184_t0['apply-transform']['bind'](_r184_t0);
            r184_xn$dontexport$5sIl = function _r184_t3() {
                var _r186_t0, _r186_t1;
                return r184_currentGlyph['dontExport'] = true;
            };
            _r184_t0['gizmo'] = r4_globalTransform;
            _r184_t0['set-width'](r4_WIDTH);
            r184_xn$setwidth$9Jrj(r4_WIDTH);
            r184_xn$assignunicode$7Hrq('C');
            r184_include(r4_capitalMarks);
            r184_include(r184_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t91() {
            var r188_currentGlyph, r188_xn$setwidth$9Jrj, r188_xn$assignunicode$7Hrq, r188_xn$startfrom$1aao, r188_xn$lineto$5sIl, r188_xn$curveto$1aao, r188_xn$cubicto$1aao, r188_xn$putshapes$9Jrj, r188_xn$reverselast$3qIs, r188_include, r188_xn$createstroke$7Hrq, r188_xn$setanchor$9Jrj, r188_xn$applytransform$1aao, r188_xn$dontexport$5sIl, _r188_t0, _r188_t1, _r188_t2, _r188_t3;
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
            r188_xn$applytransform$1aao = _r188_t0['apply-transform']['bind'](_r188_t0);
            r188_xn$dontexport$5sIl = function _r188_t3() {
                var _r190_t0, _r190_t1;
                return r188_currentGlyph['dontExport'] = true;
            };
            _r188_t0['gizmo'] = r4_globalTransform;
            _r188_t0['set-width'](r4_WIDTH);
            r188_xn$setwidth$9Jrj(r4_WIDTH);
            r188_xn$assignunicode$7Hrq('G');
            r188_include(r4_capitalMarks);
            r188_include(r188_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r188_include(r188_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t92() {
            var r192_currentGlyph, r192_xn$setwidth$9Jrj, r192_xn$assignunicode$7Hrq, r192_xn$startfrom$1aao, r192_xn$lineto$5sIl, r192_xn$curveto$1aao, r192_xn$cubicto$1aao, r192_xn$putshapes$9Jrj, r192_xn$reverselast$3qIs, r192_include, r192_xn$createstroke$7Hrq, r192_xn$setanchor$9Jrj, r192_xn$applytransform$1aao, r192_xn$dontexport$5sIl, _r192_t0, _r192_t1, _r192_t2, _r192_t3;
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
            r192_xn$applytransform$1aao = _r192_t0['apply-transform']['bind'](_r192_t0);
            r192_xn$dontexport$5sIl = function _r192_t3() {
                var _r194_t0, _r194_t1;
                return r192_currentGlyph['dontExport'] = true;
            };
            _r192_t0['gizmo'] = r4_globalTransform;
            _r192_t0['set-width'](r4_WIDTH);
            r192_xn$setwidth$9Jrj(r4_WIDTH);
            r192_xn$assignunicode$7Hrq('O');
            r192_include(r4_capitalMarks);
            r192_include(r192_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t93() {
            var r196_currentGlyph, r196_xn$setwidth$9Jrj, r196_xn$assignunicode$7Hrq, r196_xn$startfrom$1aao, r196_xn$lineto$5sIl, r196_xn$curveto$1aao, r196_xn$cubicto$1aao, r196_xn$putshapes$9Jrj, r196_xn$reverselast$3qIs, r196_include, r196_xn$createstroke$7Hrq, r196_xn$setanchor$9Jrj, r196_xn$applytransform$1aao, r196_xn$dontexport$5sIl, _r196_t0, _r196_t1, _r196_t2, _r196_t3;
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
            r196_xn$applytransform$1aao = _r196_t0['apply-transform']['bind'](_r196_t0);
            r196_xn$dontexport$5sIl = function _r196_t3() {
                var _r198_t0, _r198_t1;
                return r196_currentGlyph['dontExport'] = true;
            };
            _r196_t0['gizmo'] = r4_globalTransform;
            _r196_t0['set-width'](r4_WIDTH);
            r196_xn$setwidth$9Jrj(r4_WIDTH);
            r196_xn$assignunicode$7Hrq('Q');
            r196_include(r4_glyphs['O'], r4_AS_BASE);
            r196_xn$startfrom$1aao(r4_MIDDLE, 0);
            r196_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r196_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r196_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r196_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r196_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t94() {
            var r200_currentGlyph, r200_xn$setwidth$9Jrj, r200_xn$assignunicode$7Hrq, r200_xn$startfrom$1aao, r200_xn$lineto$5sIl, r200_xn$curveto$1aao, r200_xn$cubicto$1aao, r200_xn$putshapes$9Jrj, r200_xn$reverselast$3qIs, r200_include, r200_xn$createstroke$7Hrq, r200_xn$setanchor$9Jrj, r200_xn$applytransform$1aao, r200_xn$dontexport$5sIl, _r200_t0, _r200_t1, _r200_t2, _r200_t3;
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
            r200_xn$applytransform$1aao = _r200_t0['apply-transform']['bind'](_r200_t0);
            r200_xn$dontexport$5sIl = function _r200_t3() {
                var _r202_t0, _r202_t1;
                return r200_currentGlyph['dontExport'] = true;
            };
            _r200_t0['gizmo'] = r4_globalTransform;
            _r200_t0['set-width'](r4_WIDTH);
            r200_xn$setwidth$9Jrj(r4_WIDTH);
            r200_xn$assignunicode$7Hrq('U');
            r200_include(r4_capitalMarks);
            r200_include(r200_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_FShape = function _r4_t95() {
            var _r203_t0, _r203_t1, _r203_t2;
            return function _r203_t2() {
                var r205_currentGlyph, r205_xn$setwidth$9Jrj, r205_xn$assignunicode$7Hrq, r205_xn$startfrom$1aao, r205_xn$lineto$5sIl, r205_xn$curveto$1aao, r205_xn$cubicto$1aao, r205_xn$putshapes$9Jrj, r205_xn$reverselast$3qIs, r205_include, r205_xn$createstroke$7Hrq, r205_xn$setanchor$9Jrj, r205_xn$applytransform$1aao, r205_xn$dontexport$5sIl, _r205_t0, _r205_t1, _r205_t2, _r205_t3;
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
                r205_xn$applytransform$1aao = _r205_t0['apply-transform']['bind'](_r205_t0);
                r205_xn$dontexport$5sIl = function _r205_t3() {
                    var _r207_t0, _r207_t1;
                    return r205_currentGlyph['dontExport'] = true;
                };
                _r205_t0['gizmo'] = r4_globalTransform;
                _r205_t0['set-width'](r4_WIDTH);
                r205_include(r205_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
                r205_include(r205_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
                r205_include(r205_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('F', function _r4_t96() {
            var r209_currentGlyph, r209_xn$setwidth$9Jrj, r209_xn$assignunicode$7Hrq, r209_xn$startfrom$1aao, r209_xn$lineto$5sIl, r209_xn$curveto$1aao, r209_xn$cubicto$1aao, r209_xn$putshapes$9Jrj, r209_xn$reverselast$3qIs, r209_include, r209_xn$createstroke$7Hrq, r209_xn$setanchor$9Jrj, r209_xn$applytransform$1aao, r209_xn$dontexport$5sIl, _r209_t0, _r209_t1, _r209_t2, _r209_t3;
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
            r209_xn$applytransform$1aao = _r209_t0['apply-transform']['bind'](_r209_t0);
            r209_xn$dontexport$5sIl = function _r209_t3() {
                var _r211_t0, _r211_t1;
                return r209_currentGlyph['dontExport'] = true;
            };
            _r209_t0['gizmo'] = r4_globalTransform;
            _r209_t0['set-width'](r4_WIDTH);
            r209_xn$setwidth$9Jrj(r4_WIDTH);
            r209_xn$assignunicode$7Hrq('F');
            r209_include(r4_capitalMarks);
            r209_include(r4_FShape());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t97() {
            var r213_currentGlyph, r213_xn$setwidth$9Jrj, r213_xn$assignunicode$7Hrq, r213_xn$startfrom$1aao, r213_xn$lineto$5sIl, r213_xn$curveto$1aao, r213_xn$cubicto$1aao, r213_xn$putshapes$9Jrj, r213_xn$reverselast$3qIs, r213_include, r213_xn$createstroke$7Hrq, r213_xn$setanchor$9Jrj, r213_xn$applytransform$1aao, r213_xn$dontexport$5sIl, _r213_t0, _r213_t1, _r213_t2, _r213_t3;
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
            r213_xn$applytransform$1aao = _r213_t0['apply-transform']['bind'](_r213_t0);
            r213_xn$dontexport$5sIl = function _r213_t3() {
                var _r215_t0, _r215_t1;
                return r213_currentGlyph['dontExport'] = true;
            };
            _r213_t0['gizmo'] = r4_globalTransform;
            _r213_t0['set-width'](r4_WIDTH);
            r213_xn$setwidth$9Jrj(r4_WIDTH);
            r213_xn$assignunicode$7Hrq('E');
            r213_include(r4_capitalMarks);
            r213_include(r4_FShape());
            r213_include(r213_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t98() {
            var r217_currentGlyph, r217_xn$setwidth$9Jrj, r217_xn$assignunicode$7Hrq, r217_xn$startfrom$1aao, r217_xn$lineto$5sIl, r217_xn$curveto$1aao, r217_xn$cubicto$1aao, r217_xn$putshapes$9Jrj, r217_xn$reverselast$3qIs, r217_include, r217_xn$createstroke$7Hrq, r217_xn$setanchor$9Jrj, r217_xn$applytransform$1aao, r217_xn$dontexport$5sIl, _r217_t0, _r217_t1, _r217_t2, _r217_t3;
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
            r217_xn$applytransform$1aao = _r217_t0['apply-transform']['bind'](_r217_t0);
            r217_xn$dontexport$5sIl = function _r217_t3() {
                var _r219_t0, _r219_t1;
                return r217_currentGlyph['dontExport'] = true;
            };
            _r217_t0['gizmo'] = r4_globalTransform;
            _r217_t0['set-width'](r4_WIDTH);
            r217_xn$setwidth$9Jrj(r4_WIDTH);
            r217_xn$assignunicode$7Hrq('H');
            r217_include(r4_capitalMarks);
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r217_include(r217_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t99() {
            var r221_currentGlyph, r221_xn$setwidth$9Jrj, r221_xn$assignunicode$7Hrq, r221_xn$startfrom$1aao, r221_xn$lineto$5sIl, r221_xn$curveto$1aao, r221_xn$cubicto$1aao, r221_xn$putshapes$9Jrj, r221_xn$reverselast$3qIs, r221_include, r221_xn$createstroke$7Hrq, r221_xn$setanchor$9Jrj, r221_xn$applytransform$1aao, r221_xn$dontexport$5sIl, _r221_t0, _r221_t1, _r221_t2, _r221_t3;
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
            r221_xn$applytransform$1aao = _r221_t0['apply-transform']['bind'](_r221_t0);
            r221_xn$dontexport$5sIl = function _r221_t3() {
                var _r223_t0, _r223_t1;
                return r221_currentGlyph['dontExport'] = true;
            };
            _r221_t0['gizmo'] = r4_globalTransform;
            _r221_t0['set-width'](r4_WIDTH);
            r221_xn$setwidth$9Jrj(r4_WIDTH);
            r221_xn$assignunicode$7Hrq('L');
            r221_include(r4_capitalMarks);
            r221_include(r221_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r221_include(r221_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t100() {
            var r225_currentGlyph, r225_xn$setwidth$9Jrj, r225_xn$assignunicode$7Hrq, r225_xn$startfrom$1aao, r225_xn$lineto$5sIl, r225_xn$curveto$1aao, r225_xn$cubicto$1aao, r225_xn$putshapes$9Jrj, r225_xn$reverselast$3qIs, r225_include, r225_xn$createstroke$7Hrq, r225_xn$setanchor$9Jrj, r225_xn$applytransform$1aao, r225_xn$dontexport$5sIl, _r225_t0, _r225_t1, _r225_t2, _r225_t3;
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
            r225_xn$applytransform$1aao = _r225_t0['apply-transform']['bind'](_r225_t0);
            r225_xn$dontexport$5sIl = function _r225_t3() {
                var _r227_t0, _r227_t1;
                return r225_currentGlyph['dontExport'] = true;
            };
            _r225_t0['gizmo'] = r4_globalTransform;
            _r225_t0['set-width'](r4_WIDTH);
            r225_xn$dontexport$5sIl();
            r225_include(r4_capitalMarks);
            r225_include(r225_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t101() {
            var r229_currentGlyph, r229_xn$setwidth$9Jrj, r229_xn$assignunicode$7Hrq, r229_xn$startfrom$1aao, r229_xn$lineto$5sIl, r229_xn$curveto$1aao, r229_xn$cubicto$1aao, r229_xn$putshapes$9Jrj, r229_xn$reverselast$3qIs, r229_include, r229_xn$createstroke$7Hrq, r229_xn$setanchor$9Jrj, r229_xn$applytransform$1aao, r229_xn$dontexport$5sIl, _r229_t0, _r229_t1, _r229_t2, _r229_t3;
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
            r229_xn$applytransform$1aao = _r229_t0['apply-transform']['bind'](_r229_t0);
            r229_xn$dontexport$5sIl = function _r229_t3() {
                var _r231_t0, _r231_t1;
                return r229_currentGlyph['dontExport'] = true;
            };
            _r229_t0['gizmo'] = r4_globalTransform;
            _r229_t0['set-width'](r4_WIDTH);
            r229_xn$dontexport$5sIl();
            r229_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r229_include(r229_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r229_include(r229_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t102() {
            var r233_currentGlyph, r233_xn$setwidth$9Jrj, r233_xn$assignunicode$7Hrq, r233_xn$startfrom$1aao, r233_xn$lineto$5sIl, r233_xn$curveto$1aao, r233_xn$cubicto$1aao, r233_xn$putshapes$9Jrj, r233_xn$reverselast$3qIs, r233_include, r233_xn$createstroke$7Hrq, r233_xn$setanchor$9Jrj, r233_xn$applytransform$1aao, r233_xn$dontexport$5sIl, _r233_t0, _r233_t1, _r233_t2, _r233_t3;
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
            r233_xn$applytransform$1aao = _r233_t0['apply-transform']['bind'](_r233_t0);
            r233_xn$dontexport$5sIl = function _r233_t3() {
                var _r235_t0, _r235_t1;
                return r233_currentGlyph['dontExport'] = true;
            };
            _r233_t0['gizmo'] = r4_globalTransform;
            _r233_t0['set-width'](r4_WIDTH);
            r233_xn$setwidth$9Jrj(r4_WIDTH);
            r233_xn$assignunicode$7Hrq('T');
            r233_include(r4_capitalMarks);
            r233_include(r233_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r233_include(r233_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t103() {
            var r237_currentGlyph, r237_xn$setwidth$9Jrj, r237_xn$assignunicode$7Hrq, r237_xn$startfrom$1aao, r237_xn$lineto$5sIl, r237_xn$curveto$1aao, r237_xn$cubicto$1aao, r237_xn$putshapes$9Jrj, r237_xn$reverselast$3qIs, r237_include, r237_xn$createstroke$7Hrq, r237_xn$setanchor$9Jrj, r237_xn$applytransform$1aao, r237_xn$dontexport$5sIl, r237_cor, _r237_t0, _r237_t1, _r237_t2, _r237_t3;
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
            r237_xn$applytransform$1aao = _r237_t0['apply-transform']['bind'](_r237_t0);
            r237_xn$dontexport$5sIl = function _r237_t3() {
                var _r239_t0, _r239_t1;
                return r237_currentGlyph['dontExport'] = true;
            };
            _r237_t0['gizmo'] = r4_globalTransform;
            _r237_t0['set-width'](r4_WIDTH);
            r237_xn$setwidth$9Jrj(r4_WIDTH);
            r237_xn$assignunicode$7Hrq('Z');
            r237_include(r4_capitalMarks);
            r237_cor = 1.15;
            r237_include(r237_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r237_include(r237_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r237_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r237_xn$lineto$5sIl(r4_SB + r4_STROKE * r237_cor, r4_STROKE);
            r237_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r237_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r237_cor, r4_CAP - r4_STROKE);
            r237_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t104() {
            var r241_currentGlyph, r241_xn$setwidth$9Jrj, r241_xn$assignunicode$7Hrq, r241_xn$startfrom$1aao, r241_xn$lineto$5sIl, r241_xn$curveto$1aao, r241_xn$cubicto$1aao, r241_xn$putshapes$9Jrj, r241_xn$reverselast$3qIs, r241_include, r241_xn$createstroke$7Hrq, r241_xn$setanchor$9Jrj, r241_xn$applytransform$1aao, r241_xn$dontexport$5sIl, r241_slope, r241_expand, r241_coexpand, r241_kappa, r241_smooth, r241_hookx, _r241_t0, _r241_t1, _r241_t2, _r241_t3;
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
            r241_xn$applytransform$1aao = _r241_t0['apply-transform']['bind'](_r241_t0);
            r241_xn$dontexport$5sIl = function _r241_t3() {
                var _r243_t0, _r243_t1;
                return r241_currentGlyph['dontExport'] = true;
            };
            _r241_t0['gizmo'] = r4_globalTransform;
            _r241_t0['set-width'](r4_WIDTH);
            r241_xn$setwidth$9Jrj(r4_WIDTH);
            r241_xn$dontexport$5sIl();
            r241_include(r4_capitalMarks);
            r241_slope = r4_STROKE * 0.00092;
            r241_expand = 0.35;
            r241_coexpand = (1 - r241_expand) / 2;
            r241_kappa = r4_KAPPA_HOOK;
            r241_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r241_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r241_include(r241_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r241_smooth)['arc-vh-to'](r0_mix(r241_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r241_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r241_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t105() {
            var r245_currentGlyph, r245_xn$setwidth$9Jrj, r245_xn$assignunicode$7Hrq, r245_xn$startfrom$1aao, r245_xn$lineto$5sIl, r245_xn$curveto$1aao, r245_xn$cubicto$1aao, r245_xn$putshapes$9Jrj, r245_xn$reverselast$3qIs, r245_include, r245_xn$createstroke$7Hrq, r245_xn$setanchor$9Jrj, r245_xn$applytransform$1aao, r245_xn$dontexport$5sIl, _r245_t0, _r245_t1, _r245_t2, _r245_t3;
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
            r245_xn$applytransform$1aao = _r245_t0['apply-transform']['bind'](_r245_t0);
            r245_xn$dontexport$5sIl = function _r245_t3() {
                var _r247_t0, _r247_t1;
                return r245_currentGlyph['dontExport'] = true;
            };
            _r245_t0['gizmo'] = r4_globalTransform;
            _r245_t0['set-width'](r4_WIDTH);
            r245_xn$setwidth$9Jrj(r4_WIDTH);
            r245_xn$dontexport$5sIl();
            r245_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r245_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t106() {
            var r249_currentGlyph, r249_xn$setwidth$9Jrj, r249_xn$assignunicode$7Hrq, r249_xn$startfrom$1aao, r249_xn$lineto$5sIl, r249_xn$curveto$1aao, r249_xn$cubicto$1aao, r249_xn$putshapes$9Jrj, r249_xn$reverselast$3qIs, r249_include, r249_xn$createstroke$7Hrq, r249_xn$setanchor$9Jrj, r249_xn$applytransform$1aao, r249_xn$dontexport$5sIl, r249_topstroke, r249_halftopstroke, _r249_t0, _r249_t1, _r249_t2, _r249_t3;
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
            r249_xn$applytransform$1aao = _r249_t0['apply-transform']['bind'](_r249_t0);
            r249_xn$dontexport$5sIl = function _r249_t3() {
                var _r251_t0, _r251_t1;
                return r249_currentGlyph['dontExport'] = true;
            };
            _r249_t0['gizmo'] = r4_globalTransform;
            _r249_t0['set-width'](r4_WIDTH);
            r249_xn$setwidth$9Jrj(r4_WIDTH);
            r249_xn$assignunicode$7Hrq('N');
            r249_include(r4_capitalMarks);
            r249_topstroke = r4_adviceBlackness(4);
            r249_halftopstroke = r249_topstroke / 2;
            r249_include(r249_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r249_topstroke));
            r249_include(r249_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r249_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r249_include(r249_xn$createstroke$7Hrq()['start-from'](r4_SB + r249_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r249_topstroke, 0)['line-to'](r4_RIGHTSB - r249_topstroke - r249_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t107() {
            var r253_currentGlyph, r253_xn$setwidth$9Jrj, r253_xn$assignunicode$7Hrq, r253_xn$startfrom$1aao, r253_xn$lineto$5sIl, r253_xn$curveto$1aao, r253_xn$cubicto$1aao, r253_xn$putshapes$9Jrj, r253_xn$reverselast$3qIs, r253_include, r253_xn$createstroke$7Hrq, r253_xn$setanchor$9Jrj, r253_xn$applytransform$1aao, r253_xn$dontexport$5sIl, r253_topstroke, r253_halftopstroke, _r253_t0, _r253_t1, _r253_t2, _r253_t3;
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
            r253_xn$applytransform$1aao = _r253_t0['apply-transform']['bind'](_r253_t0);
            r253_xn$dontexport$5sIl = function _r253_t3() {
                var _r255_t0, _r255_t1;
                return r253_currentGlyph['dontExport'] = true;
            };
            _r253_t0['gizmo'] = r4_globalTransform;
            _r253_t0['set-width'](r4_WIDTH);
            r253_xn$setwidth$9Jrj(r4_WIDTH);
            r253_xn$assignunicode$7Hrq('M');
            r253_include(r4_capitalMarks);
            r253_topstroke = r4_adviceBlackness(5);
            r253_halftopstroke = r253_topstroke / 2;
            r253_include(r253_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r253_topstroke));
            r253_include(r253_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r253_topstroke, 0));
            r253_include(r253_xn$createstroke$7Hrq()['start-from'](r4_SB + r253_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r253_topstroke, 0)['line-to'](r4_MIDDLE - r253_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r253_include(r253_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r253_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r253_topstroke, 0)['line-to'](r4_RIGHTSB - r253_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t108() {
            var r257_currentGlyph, r257_xn$setwidth$9Jrj, r257_xn$assignunicode$7Hrq, r257_xn$startfrom$1aao, r257_xn$lineto$5sIl, r257_xn$curveto$1aao, r257_xn$cubicto$1aao, r257_xn$putshapes$9Jrj, r257_xn$reverselast$3qIs, r257_include, r257_xn$createstroke$7Hrq, r257_xn$setanchor$9Jrj, r257_xn$applytransform$1aao, r257_xn$dontexport$5sIl, _r257_t0, _r257_t1, _r257_t2, _r257_t3;
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
            r257_xn$applytransform$1aao = _r257_t0['apply-transform']['bind'](_r257_t0);
            r257_xn$dontexport$5sIl = function _r257_t3() {
                var _r259_t0, _r259_t1;
                return r257_currentGlyph['dontExport'] = true;
            };
            _r257_t0['gizmo'] = r4_globalTransform;
            _r257_t0['set-width'](r4_WIDTH);
            r257_xn$setwidth$9Jrj(r4_WIDTH);
            r257_xn$assignunicode$7Hrq('S');
            r257_include(r4_capitalMarks);
            r257_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r257_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r257_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t109() {
            var r261_currentGlyph, r261_xn$setwidth$9Jrj, r261_xn$assignunicode$7Hrq, r261_xn$startfrom$1aao, r261_xn$lineto$5sIl, r261_xn$curveto$1aao, r261_xn$cubicto$1aao, r261_xn$putshapes$9Jrj, r261_xn$reverselast$3qIs, r261_include, r261_xn$createstroke$7Hrq, r261_xn$setanchor$9Jrj, r261_xn$applytransform$1aao, r261_xn$dontexport$5sIl, _r261_t0, _r261_t1, _r261_t2, _r261_t3;
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
            r261_xn$applytransform$1aao = _r261_t0['apply-transform']['bind'](_r261_t0);
            r261_xn$dontexport$5sIl = function _r261_t3() {
                var _r263_t0, _r263_t1;
                return r261_currentGlyph['dontExport'] = true;
            };
            _r261_t0['gizmo'] = r4_globalTransform;
            _r261_t0['set-width'](r4_WIDTH);
            r261_xn$setwidth$9Jrj(r4_WIDTH);
            r261_xn$assignunicode$7Hrq('o');
            r261_include(r4_eMarks);
            r261_include(r261_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_oLeft = function _r4_t110() {
            var _r264_t0, _r264_t1, _r264_t2;
            return function _r264_t2() {
                var r266_currentGlyph, r266_xn$setwidth$9Jrj, r266_xn$assignunicode$7Hrq, r266_xn$startfrom$1aao, r266_xn$lineto$5sIl, r266_xn$curveto$1aao, r266_xn$cubicto$1aao, r266_xn$putshapes$9Jrj, r266_xn$reverselast$3qIs, r266_include, r266_xn$createstroke$7Hrq, r266_xn$setanchor$9Jrj, r266_xn$applytransform$1aao, r266_xn$dontexport$5sIl, _r266_t0, _r266_t1, _r266_t2, _r266_t3;
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
                r266_xn$applytransform$1aao = _r266_t0['apply-transform']['bind'](_r266_t0);
                r266_xn$dontexport$5sIl = function _r266_t3() {
                    var _r268_t0, _r268_t1;
                    return r266_currentGlyph['dontExport'] = true;
                };
                _r266_t0['gizmo'] = r4_globalTransform;
                _r266_t0['set-width'](r4_WIDTH);
                r266_include(r266_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
                r266_include(r266_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_oRight = function _r4_t111() {
            var _r269_t0, _r269_t1, _r269_t2;
            return function _r269_t2() {
                var r271_currentGlyph, r271_xn$setwidth$9Jrj, r271_xn$assignunicode$7Hrq, r271_xn$startfrom$1aao, r271_xn$lineto$5sIl, r271_xn$curveto$1aao, r271_xn$cubicto$1aao, r271_xn$putshapes$9Jrj, r271_xn$reverselast$3qIs, r271_include, r271_xn$createstroke$7Hrq, r271_xn$setanchor$9Jrj, r271_xn$applytransform$1aao, r271_xn$dontexport$5sIl, _r271_t0, _r271_t1, _r271_t2, _r271_t3;
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
                r271_xn$applytransform$1aao = _r271_t0['apply-transform']['bind'](_r271_t0);
                r271_xn$dontexport$5sIl = function _r271_t3() {
                    var _r273_t0, _r273_t1;
                    return r271_currentGlyph['dontExport'] = true;
                };
                _r271_t0['gizmo'] = r4_globalTransform;
                _r271_t0['set-width'](r4_WIDTH);
                r271_include(r271_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
                r271_include(r271_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('p', function _r4_t112() {
            var r275_currentGlyph, r275_xn$setwidth$9Jrj, r275_xn$assignunicode$7Hrq, r275_xn$startfrom$1aao, r275_xn$lineto$5sIl, r275_xn$curveto$1aao, r275_xn$cubicto$1aao, r275_xn$putshapes$9Jrj, r275_xn$reverselast$3qIs, r275_include, r275_xn$createstroke$7Hrq, r275_xn$setanchor$9Jrj, r275_xn$applytransform$1aao, r275_xn$dontexport$5sIl, _r275_t0, _r275_t1, _r275_t2, _r275_t3;
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
            r275_xn$applytransform$1aao = _r275_t0['apply-transform']['bind'](_r275_t0);
            r275_xn$dontexport$5sIl = function _r275_t3() {
                var _r277_t0, _r277_t1;
                return r275_currentGlyph['dontExport'] = true;
            };
            _r275_t0['gizmo'] = r4_globalTransform;
            _r275_t0['set-width'](r4_WIDTH);
            r275_xn$setwidth$9Jrj(r4_WIDTH);
            r275_xn$assignunicode$7Hrq('p');
            r275_include(r4_eMarks);
            r275_include(r4_oLeft());
            r275_include(r275_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t113() {
            var r279_currentGlyph, r279_xn$setwidth$9Jrj, r279_xn$assignunicode$7Hrq, r279_xn$startfrom$1aao, r279_xn$lineto$5sIl, r279_xn$curveto$1aao, r279_xn$cubicto$1aao, r279_xn$putshapes$9Jrj, r279_xn$reverselast$3qIs, r279_include, r279_xn$createstroke$7Hrq, r279_xn$setanchor$9Jrj, r279_xn$applytransform$1aao, r279_xn$dontexport$5sIl, _r279_t0, _r279_t1, _r279_t2, _r279_t3;
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
            r279_xn$applytransform$1aao = _r279_t0['apply-transform']['bind'](_r279_t0);
            r279_xn$dontexport$5sIl = function _r279_t3() {
                var _r281_t0, _r281_t1;
                return r279_currentGlyph['dontExport'] = true;
            };
            _r279_t0['gizmo'] = r4_globalTransform;
            _r279_t0['set-width'](r4_WIDTH);
            r279_xn$setwidth$9Jrj(r4_WIDTH);
            r279_xn$assignunicode$7Hrq('b');
            r279_include(r4_bMarks);
            r279_include(r4_oLeft());
            r279_include(r279_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t114() {
            var r283_currentGlyph, r283_xn$setwidth$9Jrj, r283_xn$assignunicode$7Hrq, r283_xn$startfrom$1aao, r283_xn$lineto$5sIl, r283_xn$curveto$1aao, r283_xn$cubicto$1aao, r283_xn$putshapes$9Jrj, r283_xn$reverselast$3qIs, r283_include, r283_xn$createstroke$7Hrq, r283_xn$setanchor$9Jrj, r283_xn$applytransform$1aao, r283_xn$dontexport$5sIl, _r283_t0, _r283_t1, _r283_t2, _r283_t3;
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
            r283_xn$applytransform$1aao = _r283_t0['apply-transform']['bind'](_r283_t0);
            r283_xn$dontexport$5sIl = function _r283_t3() {
                var _r285_t0, _r285_t1;
                return r283_currentGlyph['dontExport'] = true;
            };
            _r283_t0['gizmo'] = r4_globalTransform;
            _r283_t0['set-width'](r4_WIDTH);
            r283_xn$setwidth$9Jrj(r4_WIDTH);
            r283_xn$assignunicode$7Hrq('q');
            r283_include(r4_eMarks);
            r283_include(r4_oRight());
            r283_include(r283_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t115() {
            var r287_currentGlyph, r287_xn$setwidth$9Jrj, r287_xn$assignunicode$7Hrq, r287_xn$startfrom$1aao, r287_xn$lineto$5sIl, r287_xn$curveto$1aao, r287_xn$cubicto$1aao, r287_xn$putshapes$9Jrj, r287_xn$reverselast$3qIs, r287_include, r287_xn$createstroke$7Hrq, r287_xn$setanchor$9Jrj, r287_xn$applytransform$1aao, r287_xn$dontexport$5sIl, _r287_t0, _r287_t1, _r287_t2, _r287_t3;
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
            r287_xn$applytransform$1aao = _r287_t0['apply-transform']['bind'](_r287_t0);
            r287_xn$dontexport$5sIl = function _r287_t3() {
                var _r289_t0, _r289_t1;
                return r287_currentGlyph['dontExport'] = true;
            };
            _r287_t0['gizmo'] = r4_globalTransform;
            _r287_t0['set-width'](r4_WIDTH);
            r287_xn$setwidth$9Jrj(r4_WIDTH);
            r287_xn$assignunicode$7Hrq('d');
            r287_include(r4_bMarks);
            r287_include(r4_oRight());
            r287_include(r287_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t116() {
            var r291_currentGlyph, r291_xn$setwidth$9Jrj, r291_xn$assignunicode$7Hrq, r291_xn$startfrom$1aao, r291_xn$lineto$5sIl, r291_xn$curveto$1aao, r291_xn$cubicto$1aao, r291_xn$putshapes$9Jrj, r291_xn$reverselast$3qIs, r291_include, r291_xn$createstroke$7Hrq, r291_xn$setanchor$9Jrj, r291_xn$applytransform$1aao, r291_xn$dontexport$5sIl, r291_gleftx, r291_grightx, r291_groundy, _r291_t0, _r291_t1, _r291_t2, _r291_t3;
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
            r291_xn$applytransform$1aao = _r291_t0['apply-transform']['bind'](_r291_t0);
            r291_xn$dontexport$5sIl = function _r291_t3() {
                var _r293_t0, _r293_t1;
                return r291_currentGlyph['dontExport'] = true;
            };
            _r291_t0['gizmo'] = r4_globalTransform;
            _r291_t0['set-width'](r4_WIDTH);
            r291_xn$setwidth$9Jrj(r4_WIDTH);
            r291_xn$assignunicode$7Hrq('g');
            r291_include(r4_pMarks);
            r291_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r291_xn$reverselast$3qIs();
            r291_gleftx = r4_SB * 0.8 + r4_O;
            r291_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r291_groundy = r0_mix(r4_DESCENDER, r4_XH * r4_GBARPOS, 0.7) + r4_HALFSTROKE;
            r291_include(r291_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r291_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r291_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r291_groundy)['arc-hv-to'](r291_grightx, r0_mix(r4_DESCENDER + r4_O, r291_groundy, 0.53))['arc-vh-to'](r0_mix(r291_gleftx, r291_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r291_gleftx, r0_mix(r4_DESCENDER + r4_O, r291_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r291_groundy));
            r291_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r291_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r291_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r291_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t117() {
            var r295_currentGlyph, r295_xn$setwidth$9Jrj, r295_xn$assignunicode$7Hrq, r295_xn$startfrom$1aao, r295_xn$lineto$5sIl, r295_xn$curveto$1aao, r295_xn$cubicto$1aao, r295_xn$putshapes$9Jrj, r295_xn$reverselast$3qIs, r295_include, r295_xn$createstroke$7Hrq, r295_xn$setanchor$9Jrj, r295_xn$applytransform$1aao, r295_xn$dontexport$5sIl, _r295_t0, _r295_t1, _r295_t2, _r295_t3;
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
            r295_xn$applytransform$1aao = _r295_t0['apply-transform']['bind'](_r295_t0);
            r295_xn$dontexport$5sIl = function _r295_t3() {
                var _r297_t0, _r297_t1;
                return r295_currentGlyph['dontExport'] = true;
            };
            _r295_t0['gizmo'] = r4_globalTransform;
            _r295_t0['set-width'](r4_WIDTH);
            r295_xn$setwidth$9Jrj(r4_WIDTH);
            r295_xn$assignunicode$7Hrq('c');
            r295_include(r4_eMarks);
            r295_include(r295_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t118() {
            var r299_currentGlyph, r299_xn$setwidth$9Jrj, r299_xn$assignunicode$7Hrq, r299_xn$startfrom$1aao, r299_xn$lineto$5sIl, r299_xn$curveto$1aao, r299_xn$cubicto$1aao, r299_xn$putshapes$9Jrj, r299_xn$reverselast$3qIs, r299_include, r299_xn$createstroke$7Hrq, r299_xn$setanchor$9Jrj, r299_xn$applytransform$1aao, r299_xn$dontexport$5sIl, r299_barbottom, r299_hookx, r299_hookmiddle, _r299_t0, _r299_t1, _r299_t2, _r299_t3;
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
            r299_xn$applytransform$1aao = _r299_t0['apply-transform']['bind'](_r299_t0);
            r299_xn$dontexport$5sIl = function _r299_t3() {
                var _r301_t0, _r301_t1;
                return r299_currentGlyph['dontExport'] = true;
            };
            _r299_t0['gizmo'] = r4_globalTransform;
            _r299_t0['set-width'](r4_WIDTH);
            r299_xn$setwidth$9Jrj(r4_WIDTH);
            r299_xn$dontexport$5sIl();
            r299_barbottom = r4_XH * r4_EBARPOS;
            r299_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r299_hookmiddle = r0_mix(r4_SB + r4_O, r299_hookx, 0.55);
            r299_include(r299_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r299_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r299_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r299_hookmiddle, r299_hookx, r4_KAPPA_HOOK), r4_O, r299_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r299_include(r299_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r299_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r299_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t119() {
            var r303_currentGlyph, r303_xn$setwidth$9Jrj, r303_xn$assignunicode$7Hrq, r303_xn$startfrom$1aao, r303_xn$lineto$5sIl, r303_xn$curveto$1aao, r303_xn$cubicto$1aao, r303_xn$putshapes$9Jrj, r303_xn$reverselast$3qIs, r303_include, r303_xn$createstroke$7Hrq, r303_xn$setanchor$9Jrj, r303_xn$applytransform$1aao, r303_xn$dontexport$5sIl, r303_barbottom, _r303_t0, _r303_t1, _r303_t2, _r303_t3;
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
            r303_xn$applytransform$1aao = _r303_t0['apply-transform']['bind'](_r303_t0);
            r303_xn$dontexport$5sIl = function _r303_t3() {
                var _r305_t0, _r305_t1;
                return r303_currentGlyph['dontExport'] = true;
            };
            _r303_t0['gizmo'] = r4_globalTransform;
            _r303_t0['set-width'](r4_WIDTH);
            r303_xn$setwidth$9Jrj(r4_WIDTH);
            r303_xn$dontexport$5sIl();
            r303_barbottom = r4_XH * r4_EBARPOS;
            r303_include(r303_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r303_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t120() {
            var r307_currentGlyph, r307_xn$setwidth$9Jrj, r307_xn$assignunicode$7Hrq, r307_xn$startfrom$1aao, r307_xn$lineto$5sIl, r307_xn$curveto$1aao, r307_xn$cubicto$1aao, r307_xn$putshapes$9Jrj, r307_xn$reverselast$3qIs, r307_include, r307_xn$createstroke$7Hrq, r307_xn$setanchor$9Jrj, r307_xn$applytransform$1aao, r307_xn$dontexport$5sIl, _r307_t0, _r307_t1, _r307_t2, _r307_t3;
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
            r307_xn$applytransform$1aao = _r307_t0['apply-transform']['bind'](_r307_t0);
            r307_xn$dontexport$5sIl = function _r307_t3() {
                var _r309_t0, _r309_t1;
                return r307_currentGlyph['dontExport'] = true;
            };
            _r307_t0['gizmo'] = r4_globalTransform;
            _r307_t0['set-width'](r4_WIDTH);
            r307_xn$setwidth$9Jrj(r4_WIDTH);
            r307_xn$assignunicode$7Hrq('e');
            r307_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r307_include(r4_glyphs['e.italic']);
            } else {
                r307_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t121() {
            var r311_currentGlyph, r311_xn$setwidth$9Jrj, r311_xn$assignunicode$7Hrq, r311_xn$startfrom$1aao, r311_xn$lineto$5sIl, r311_xn$curveto$1aao, r311_xn$cubicto$1aao, r311_xn$putshapes$9Jrj, r311_xn$reverselast$3qIs, r311_include, r311_xn$createstroke$7Hrq, r311_xn$setanchor$9Jrj, r311_xn$applytransform$1aao, r311_xn$dontexport$5sIl, r311_center, r311_hookx, r311_turn, r311_smb, _r311_t0, _r311_t1, _r311_t2, _r311_t3;
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
            r311_xn$applytransform$1aao = _r311_t0['apply-transform']['bind'](_r311_t0);
            r311_xn$dontexport$5sIl = function _r311_t3() {
                var _r313_t0, _r313_t1;
                return r311_currentGlyph['dontExport'] = true;
            };
            _r311_t0['gizmo'] = r4_globalTransform;
            _r311_t0['set-width'](r4_WIDTH);
            r311_xn$setwidth$9Jrj(r4_WIDTH);
            r311_xn$assignunicode$7Hrq('t');
            r311_include(r4_bMarks);
            r311_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r311_hookx = r311_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r311_turn = r0_mix(r311_center, r311_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r311_smb = (r311_turn - r311_center) * 1.1;
            r311_include(r311_xn$createstroke$7Hrq()['start-from'](r311_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r311_center, r311_smb)['arc-vh-to'](r311_turn, r4_O)['curve-to'](r311_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r311_hookx - r311_turn), r4_O, r311_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r311_include(r311_xn$createstroke$7Hrq()['start-from'](r311_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r311_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t122() {
            var r315_currentGlyph, r315_xn$setwidth$9Jrj, r315_xn$assignunicode$7Hrq, r315_xn$startfrom$1aao, r315_xn$lineto$5sIl, r315_xn$curveto$1aao, r315_xn$cubicto$1aao, r315_xn$putshapes$9Jrj, r315_xn$reverselast$3qIs, r315_include, r315_xn$createstroke$7Hrq, r315_xn$setanchor$9Jrj, r315_xn$applytransform$1aao, r315_xn$dontexport$5sIl, r315_bartop, r315_lowmiddle, r315_barsmooth, _r315_t0, _r315_t1, _r315_t2, _r315_t3;
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
            r315_xn$applytransform$1aao = _r315_t0['apply-transform']['bind'](_r315_t0);
            r315_xn$dontexport$5sIl = function _r315_t3() {
                var _r317_t0, _r317_t1;
                return r315_currentGlyph['dontExport'] = true;
            };
            _r315_t0['gizmo'] = r4_globalTransform;
            _r315_t0['set-width'](r4_WIDTH);
            r315_xn$setwidth$9Jrj(r4_WIDTH);
            r315_xn$dontexport$5sIl();
            r315_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r315_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r315_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r315_include(r315_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r315_include(r315_xn$createstroke$7Hrq()['start-from'](r315_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r315_bartop * 0.45)['arc-vh-to'](r315_barsmooth, r315_bartop)['line-to'](r4_RIGHTSB, r315_bartop)['heads-to'](r4_RIGHTWARD));
            r315_include(r315_xn$createstroke$7Hrq()['start-from'](r315_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t123() {
            var r319_currentGlyph, r319_xn$setwidth$9Jrj, r319_xn$assignunicode$7Hrq, r319_xn$startfrom$1aao, r319_xn$lineto$5sIl, r319_xn$curveto$1aao, r319_xn$cubicto$1aao, r319_xn$putshapes$9Jrj, r319_xn$reverselast$3qIs, r319_include, r319_xn$createstroke$7Hrq, r319_xn$setanchor$9Jrj, r319_xn$applytransform$1aao, r319_xn$dontexport$5sIl, _r319_t0, _r319_t1, _r319_t2, _r319_t3;
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
            r319_xn$applytransform$1aao = _r319_t0['apply-transform']['bind'](_r319_t0);
            r319_xn$dontexport$5sIl = function _r319_t3() {
                var _r321_t0, _r321_t1;
                return r319_currentGlyph['dontExport'] = true;
            };
            _r319_t0['gizmo'] = r4_globalTransform;
            _r319_t0['set-width'](r4_WIDTH);
            r319_xn$setwidth$9Jrj(r4_WIDTH);
            r319_xn$dontexport$5sIl();
            r319_include(r4_oRight());
            r319_include(r319_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t124() {
            var r323_currentGlyph, r323_xn$setwidth$9Jrj, r323_xn$assignunicode$7Hrq, r323_xn$startfrom$1aao, r323_xn$lineto$5sIl, r323_xn$curveto$1aao, r323_xn$cubicto$1aao, r323_xn$putshapes$9Jrj, r323_xn$reverselast$3qIs, r323_include, r323_xn$createstroke$7Hrq, r323_xn$setanchor$9Jrj, r323_xn$applytransform$1aao, r323_xn$dontexport$5sIl, _r323_t0, _r323_t1, _r323_t2, _r323_t3;
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
            r323_xn$applytransform$1aao = _r323_t0['apply-transform']['bind'](_r323_t0);
            r323_xn$dontexport$5sIl = function _r323_t3() {
                var _r325_t0, _r325_t1;
                return r323_currentGlyph['dontExport'] = true;
            };
            _r323_t0['gizmo'] = r4_globalTransform;
            _r323_t0['set-width'](r4_WIDTH);
            r323_xn$setwidth$9Jrj(r4_WIDTH);
            r323_xn$assignunicode$7Hrq('a');
            r323_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r323_include(r4_glyphs['a.italic']);
            } else {
                r323_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t125() {
            var r327_currentGlyph, r327_xn$setwidth$9Jrj, r327_xn$assignunicode$7Hrq, r327_xn$startfrom$1aao, r327_xn$lineto$5sIl, r327_xn$curveto$1aao, r327_xn$cubicto$1aao, r327_xn$putshapes$9Jrj, r327_xn$reverselast$3qIs, r327_include, r327_xn$createstroke$7Hrq, r327_xn$setanchor$9Jrj, r327_xn$applytransform$1aao, r327_xn$dontexport$5sIl, _r327_t0, _r327_t1, _r327_t2, _r327_t3;
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
            r327_xn$applytransform$1aao = _r327_t0['apply-transform']['bind'](_r327_t0);
            r327_xn$dontexport$5sIl = function _r327_t3() {
                var _r329_t0, _r329_t1;
                return r327_currentGlyph['dontExport'] = true;
            };
            _r327_t0['gizmo'] = r4_globalTransform;
            _r327_t0['set-width'](r4_WIDTH);
            r327_xn$setwidth$9Jrj(r4_WIDTH);
            r327_xn$assignunicode$7Hrq('u');
            r327_include(r4_eMarks);
            r327_include(r327_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r327_include(r327_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r327_include(r327_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t126() {
            var r331_currentGlyph, r331_xn$setwidth$9Jrj, r331_xn$assignunicode$7Hrq, r331_xn$startfrom$1aao, r331_xn$lineto$5sIl, r331_xn$curveto$1aao, r331_xn$cubicto$1aao, r331_xn$putshapes$9Jrj, r331_xn$reverselast$3qIs, r331_include, r331_xn$createstroke$7Hrq, r331_xn$setanchor$9Jrj, r331_xn$applytransform$1aao, r331_xn$dontexport$5sIl, _r331_t0, _r331_t1, _r331_t2, _r331_t3;
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
            r331_xn$applytransform$1aao = _r331_t0['apply-transform']['bind'](_r331_t0);
            r331_xn$dontexport$5sIl = function _r331_t3() {
                var _r333_t0, _r333_t1;
                return r331_currentGlyph['dontExport'] = true;
            };
            _r331_t0['gizmo'] = r4_globalTransform;
            _r331_t0['set-width'](r4_WIDTH);
            r331_xn$setwidth$9Jrj(r4_WIDTH);
            r331_xn$assignunicode$7Hrq('n');
            r331_include(r4_eMarks);
            r331_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r331_include(r331_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t127() {
            var r335_currentGlyph, r335_xn$setwidth$9Jrj, r335_xn$assignunicode$7Hrq, r335_xn$startfrom$1aao, r335_xn$lineto$5sIl, r335_xn$curveto$1aao, r335_xn$cubicto$1aao, r335_xn$putshapes$9Jrj, r335_xn$reverselast$3qIs, r335_include, r335_xn$createstroke$7Hrq, r335_xn$setanchor$9Jrj, r335_xn$applytransform$1aao, r335_xn$dontexport$5sIl, _r335_t0, _r335_t1, _r335_t2, _r335_t3;
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
            r335_xn$applytransform$1aao = _r335_t0['apply-transform']['bind'](_r335_t0);
            r335_xn$dontexport$5sIl = function _r335_t3() {
                var _r337_t0, _r337_t1;
                return r335_currentGlyph['dontExport'] = true;
            };
            _r335_t0['gizmo'] = r4_globalTransform;
            _r335_t0['set-width'](r4_WIDTH);
            r335_xn$setwidth$9Jrj(r4_WIDTH);
            r335_xn$assignunicode$7Hrq('h');
            r335_include(r4_bMarks);
            r335_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r335_include(r335_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t128() {
            var r339_currentGlyph, r339_xn$setwidth$9Jrj, r339_xn$assignunicode$7Hrq, r339_xn$startfrom$1aao, r339_xn$lineto$5sIl, r339_xn$curveto$1aao, r339_xn$cubicto$1aao, r339_xn$putshapes$9Jrj, r339_xn$reverselast$3qIs, r339_include, r339_xn$createstroke$7Hrq, r339_xn$setanchor$9Jrj, r339_xn$applytransform$1aao, r339_xn$dontexport$5sIl, r339_sw, r339_m1, r339_m2, _r339_t0, _r339_t1, _r339_t2, _r339_t3;
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
            r339_xn$applytransform$1aao = _r339_t0['apply-transform']['bind'](_r339_t0);
            r339_xn$dontexport$5sIl = function _r339_t3() {
                var _r341_t0, _r341_t1;
                return r339_currentGlyph['dontExport'] = true;
            };
            _r339_t0['gizmo'] = r4_globalTransform;
            _r339_t0['set-width'](r4_WIDTH);
            r339_xn$setwidth$9Jrj(r4_WIDTH);
            r339_xn$assignunicode$7Hrq('m');
            r339_include(r4_eMarks);
            r339_sw = r4_adviceBlackness(3.5);
            r339_m1 = (r4_MIDDLE + r4_SB + r339_sw * 0.25) / 2;
            r339_m2 = r339_m1 + (r4_MIDDLE - r339_sw / 2 - r4_SB);
            r339_include(r339_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r339_sw / 2, 0)['set-width'](0, r339_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r339_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r339_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r339_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r339_sw * 0.4));
            r339_include(r339_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r339_sw - r4_O, 0)['set-width'](0, r339_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r339_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r339_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r339_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r339_sw * 0.4));
            r339_include(r339_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r339_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t129() {
            var r343_currentGlyph, r343_xn$setwidth$9Jrj, r343_xn$assignunicode$7Hrq, r343_xn$startfrom$1aao, r343_xn$lineto$5sIl, r343_xn$curveto$1aao, r343_xn$cubicto$1aao, r343_xn$putshapes$9Jrj, r343_xn$reverselast$3qIs, r343_include, r343_xn$createstroke$7Hrq, r343_xn$setanchor$9Jrj, r343_xn$applytransform$1aao, r343_xn$dontexport$5sIl, _r343_t0, _r343_t1, _r343_t2, _r343_t3;
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
            r343_xn$applytransform$1aao = _r343_t0['apply-transform']['bind'](_r343_t0);
            r343_xn$dontexport$5sIl = function _r343_t3() {
                var _r345_t0, _r345_t1;
                return r343_currentGlyph['dontExport'] = true;
            };
            _r343_t0['gizmo'] = r4_globalTransform;
            _r343_t0['set-width'](r4_WIDTH);
            r343_xn$dontexport$5sIl();
            r343_include(r4_eMarks);
            r343_include(r343_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t130() {
            var r347_currentGlyph, r347_xn$setwidth$9Jrj, r347_xn$assignunicode$7Hrq, r347_xn$startfrom$1aao, r347_xn$lineto$5sIl, r347_xn$curveto$1aao, r347_xn$cubicto$1aao, r347_xn$putshapes$9Jrj, r347_xn$reverselast$3qIs, r347_include, r347_xn$createstroke$7Hrq, r347_xn$setanchor$9Jrj, r347_xn$applytransform$1aao, r347_xn$dontexport$5sIl, _r347_t0, _r347_t1, _r347_t2, _r347_t3;
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
            r347_xn$applytransform$1aao = _r347_t0['apply-transform']['bind'](_r347_t0);
            r347_xn$dontexport$5sIl = function _r347_t3() {
                var _r349_t0, _r349_t1;
                return r347_currentGlyph['dontExport'] = true;
            };
            _r347_t0['gizmo'] = r4_globalTransform;
            _r347_t0['set-width'](r4_WIDTH);
            r347_xn$dontexport$5sIl();
            r347_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r347_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t131() {
            var r351_currentGlyph, r351_xn$setwidth$9Jrj, r351_xn$assignunicode$7Hrq, r351_xn$startfrom$1aao, r351_xn$lineto$5sIl, r351_xn$curveto$1aao, r351_xn$cubicto$1aao, r351_xn$putshapes$9Jrj, r351_xn$reverselast$3qIs, r351_include, r351_xn$createstroke$7Hrq, r351_xn$setanchor$9Jrj, r351_xn$applytransform$1aao, r351_xn$dontexport$5sIl, _r351_t0, _r351_t1, _r351_t2, _r351_t3;
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
            r351_xn$applytransform$1aao = _r351_t0['apply-transform']['bind'](_r351_t0);
            r351_xn$dontexport$5sIl = function _r351_t3() {
                var _r353_t0, _r353_t1;
                return r351_currentGlyph['dontExport'] = true;
            };
            _r351_t0['gizmo'] = r4_globalTransform;
            _r351_t0['set-width'](r4_WIDTH);
            r351_xn$dontexport$5sIl();
            r351_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r351_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t132() {
            var r355_currentGlyph, r355_xn$setwidth$9Jrj, r355_xn$assignunicode$7Hrq, r355_xn$startfrom$1aao, r355_xn$lineto$5sIl, r355_xn$curveto$1aao, r355_xn$cubicto$1aao, r355_xn$putshapes$9Jrj, r355_xn$reverselast$3qIs, r355_include, r355_xn$createstroke$7Hrq, r355_xn$setanchor$9Jrj, r355_xn$applytransform$1aao, r355_xn$dontexport$5sIl, r355_balance, _r355_t0, _r355_t1, _r355_t2, _r355_t3;
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
            r355_xn$applytransform$1aao = _r355_t0['apply-transform']['bind'](_r355_t0);
            r355_xn$dontexport$5sIl = function _r355_t3() {
                var _r357_t0, _r357_t1;
                return r355_currentGlyph['dontExport'] = true;
            };
            _r355_t0['gizmo'] = r4_globalTransform;
            _r355_t0['set-width'](r4_WIDTH);
            r355_xn$dontexport$5sIl();
            r355_include(r4_eMarks);
            r355_balance = r4_ILBALANCE;
            r355_include(r355_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r355_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r355_balance, r4_XH)['heads-to'](r4_UPWARD));
            r355_include(r4_leftwardTopSerif(r4_MIDDLE + r355_balance, r4_XH, r4_LONGJUT - r355_balance));
            r355_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r355_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t133() {
            var r359_currentGlyph, r359_xn$setwidth$9Jrj, r359_xn$assignunicode$7Hrq, r359_xn$startfrom$1aao, r359_xn$lineto$5sIl, r359_xn$curveto$1aao, r359_xn$cubicto$1aao, r359_xn$putshapes$9Jrj, r359_xn$reverselast$3qIs, r359_include, r359_xn$createstroke$7Hrq, r359_xn$setanchor$9Jrj, r359_xn$applytransform$1aao, r359_xn$dontexport$5sIl, _r359_t0, _r359_t1, _r359_t2, _r359_t3;
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
            r359_xn$applytransform$1aao = _r359_t0['apply-transform']['bind'](_r359_t0);
            r359_xn$dontexport$5sIl = function _r359_t3() {
                var _r361_t0, _r361_t1;
                return r359_currentGlyph['dontExport'] = true;
            };
            _r359_t0['gizmo'] = r4_globalTransform;
            _r359_t0['set-width'](r4_WIDTH);
            r359_xn$setwidth$9Jrj(r4_WIDTH);
            r359_xn$assignunicode$7Hrq('i');
            r359_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r359_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t134() {
            var r363_currentGlyph, r363_xn$setwidth$9Jrj, r363_xn$assignunicode$7Hrq, r363_xn$startfrom$1aao, r363_xn$lineto$5sIl, r363_xn$curveto$1aao, r363_xn$cubicto$1aao, r363_xn$putshapes$9Jrj, r363_xn$reverselast$3qIs, r363_include, r363_xn$createstroke$7Hrq, r363_xn$setanchor$9Jrj, r363_xn$applytransform$1aao, r363_xn$dontexport$5sIl, _r363_t0, _r363_t1, _r363_t2, _r363_t3;
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
            r363_xn$applytransform$1aao = _r363_t0['apply-transform']['bind'](_r363_t0);
            r363_xn$dontexport$5sIl = function _r363_t3() {
                var _r365_t0, _r365_t1;
                return r363_currentGlyph['dontExport'] = true;
            };
            _r363_t0['gizmo'] = r4_globalTransform;
            _r363_t0['set-width'](r4_WIDTH);
            r363_xn$dontexport$5sIl();
            r363_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r363_include(r363_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t135() {
            var r367_currentGlyph, r367_xn$setwidth$9Jrj, r367_xn$assignunicode$7Hrq, r367_xn$startfrom$1aao, r367_xn$lineto$5sIl, r367_xn$curveto$1aao, r367_xn$cubicto$1aao, r367_xn$putshapes$9Jrj, r367_xn$reverselast$3qIs, r367_include, r367_xn$createstroke$7Hrq, r367_xn$setanchor$9Jrj, r367_xn$applytransform$1aao, r367_xn$dontexport$5sIl, _r367_t0, _r367_t1, _r367_t2, _r367_t3;
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
            r367_xn$applytransform$1aao = _r367_t0['apply-transform']['bind'](_r367_t0);
            r367_xn$dontexport$5sIl = function _r367_t3() {
                var _r369_t0, _r369_t1;
                return r367_currentGlyph['dontExport'] = true;
            };
            _r367_t0['gizmo'] = r4_globalTransform;
            _r367_t0['set-width'](r4_WIDTH);
            r367_xn$dontexport$5sIl();
            r367_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r367_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t136() {
            var r371_currentGlyph, r371_xn$setwidth$9Jrj, r371_xn$assignunicode$7Hrq, r371_xn$startfrom$1aao, r371_xn$lineto$5sIl, r371_xn$curveto$1aao, r371_xn$cubicto$1aao, r371_xn$putshapes$9Jrj, r371_xn$reverselast$3qIs, r371_include, r371_xn$createstroke$7Hrq, r371_xn$setanchor$9Jrj, r371_xn$applytransform$1aao, r371_xn$dontexport$5sIl, _r371_t0, _r371_t1, _r371_t2, _r371_t3;
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
            r371_xn$applytransform$1aao = _r371_t0['apply-transform']['bind'](_r371_t0);
            r371_xn$dontexport$5sIl = function _r371_t3() {
                var _r373_t0, _r373_t1;
                return r371_currentGlyph['dontExport'] = true;
            };
            _r371_t0['gizmo'] = r4_globalTransform;
            _r371_t0['set-width'](r4_WIDTH);
            r371_xn$setwidth$9Jrj(r4_WIDTH);
            r371_xn$assignunicode$7Hrq('j');
            r371_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r371_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t137() {
            var r375_currentGlyph, r375_xn$setwidth$9Jrj, r375_xn$assignunicode$7Hrq, r375_xn$startfrom$1aao, r375_xn$lineto$5sIl, r375_xn$curveto$1aao, r375_xn$cubicto$1aao, r375_xn$putshapes$9Jrj, r375_xn$reverselast$3qIs, r375_include, r375_xn$createstroke$7Hrq, r375_xn$setanchor$9Jrj, r375_xn$applytransform$1aao, r375_xn$dontexport$5sIl, _r375_t0, _r375_t1, _r375_t2, _r375_t3;
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
            r375_xn$applytransform$1aao = _r375_t0['apply-transform']['bind'](_r375_t0);
            r375_xn$dontexport$5sIl = function _r375_t3() {
                var _r377_t0, _r377_t1;
                return r375_currentGlyph['dontExport'] = true;
            };
            _r375_t0['gizmo'] = r4_globalTransform;
            _r375_t0['set-width'](r4_WIDTH);
            r375_include(r4_bMarks);
            r375_xn$dontexport$5sIl();
            r375_include(r375_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t138() {
            var r379_currentGlyph, r379_xn$setwidth$9Jrj, r379_xn$assignunicode$7Hrq, r379_xn$startfrom$1aao, r379_xn$lineto$5sIl, r379_xn$curveto$1aao, r379_xn$cubicto$1aao, r379_xn$putshapes$9Jrj, r379_xn$reverselast$3qIs, r379_include, r379_xn$createstroke$7Hrq, r379_xn$setanchor$9Jrj, r379_xn$applytransform$1aao, r379_xn$dontexport$5sIl, _r379_t0, _r379_t1, _r379_t2, _r379_t3;
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
            r379_xn$applytransform$1aao = _r379_t0['apply-transform']['bind'](_r379_t0);
            r379_xn$dontexport$5sIl = function _r379_t3() {
                var _r381_t0, _r381_t1;
                return r379_currentGlyph['dontExport'] = true;
            };
            _r379_t0['gizmo'] = r4_globalTransform;
            _r379_t0['set-width'](r4_WIDTH);
            r379_include(r4_bMarks);
            r379_xn$dontexport$5sIl();
            r379_include(r4_glyphs['l.straight']);
            r379_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t139() {
            var r383_currentGlyph, r383_xn$setwidth$9Jrj, r383_xn$assignunicode$7Hrq, r383_xn$startfrom$1aao, r383_xn$lineto$5sIl, r383_xn$curveto$1aao, r383_xn$cubicto$1aao, r383_xn$putshapes$9Jrj, r383_xn$reverselast$3qIs, r383_include, r383_xn$createstroke$7Hrq, r383_xn$setanchor$9Jrj, r383_xn$applytransform$1aao, r383_xn$dontexport$5sIl, _r383_t0, _r383_t1, _r383_t2, _r383_t3;
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
            r383_xn$applytransform$1aao = _r383_t0['apply-transform']['bind'](_r383_t0);
            r383_xn$dontexport$5sIl = function _r383_t3() {
                var _r385_t0, _r385_t1;
                return r383_currentGlyph['dontExport'] = true;
            };
            _r383_t0['gizmo'] = r4_globalTransform;
            _r383_t0['set-width'](r4_WIDTH);
            r383_include(r4_bMarks);
            r383_xn$dontexport$5sIl();
            r383_include(r4_glyphs['l.hooky']);
            r383_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t140() {
            var r387_currentGlyph, r387_xn$setwidth$9Jrj, r387_xn$assignunicode$7Hrq, r387_xn$startfrom$1aao, r387_xn$lineto$5sIl, r387_xn$curveto$1aao, r387_xn$cubicto$1aao, r387_xn$putshapes$9Jrj, r387_xn$reverselast$3qIs, r387_include, r387_xn$createstroke$7Hrq, r387_xn$setanchor$9Jrj, r387_xn$applytransform$1aao, r387_xn$dontexport$5sIl, r387_balance, _r387_t0, _r387_t1, _r387_t2, _r387_t3;
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
            r387_xn$applytransform$1aao = _r387_t0['apply-transform']['bind'](_r387_t0);
            r387_xn$dontexport$5sIl = function _r387_t3() {
                var _r389_t0, _r389_t1;
                return r387_currentGlyph['dontExport'] = true;
            };
            _r387_t0['gizmo'] = r4_globalTransform;
            _r387_t0['set-width'](r4_WIDTH);
            r387_include(r4_bMarks);
            r387_xn$dontexport$5sIl();
            r387_balance = r4_ILBALANCE;
            r387_include(r387_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r387_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r387_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r387_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r387_balance, r4_CAP, r4_LONGJUT - r387_balance));
            r387_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t141() {
            var r391_currentGlyph, r391_xn$setwidth$9Jrj, r391_xn$assignunicode$7Hrq, r391_xn$startfrom$1aao, r391_xn$lineto$5sIl, r391_xn$curveto$1aao, r391_xn$cubicto$1aao, r391_xn$putshapes$9Jrj, r391_xn$reverselast$3qIs, r391_include, r391_xn$createstroke$7Hrq, r391_xn$setanchor$9Jrj, r391_xn$applytransform$1aao, r391_xn$dontexport$5sIl, r391_TURN, _r391_t0, _r391_t1, _r391_t2, _r391_t3;
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
            r391_xn$applytransform$1aao = _r391_t0['apply-transform']['bind'](_r391_t0);
            r391_xn$dontexport$5sIl = function _r391_t3() {
                var _r393_t0, _r393_t1;
                return r391_currentGlyph['dontExport'] = true;
            };
            _r391_t0['gizmo'] = r4_globalTransform;
            _r391_t0['set-width'](r4_WIDTH);
            r391_xn$setwidth$9Jrj(r4_WIDTH);
            r391_xn$assignunicode$7Hrq('x');
            r391_include(r4_eMarks);
            r391_TURN = r4_XH * 0.1;
            r391_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r391_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t142() {
            var r395_currentGlyph, r395_xn$setwidth$9Jrj, r395_xn$assignunicode$7Hrq, r395_xn$startfrom$1aao, r395_xn$lineto$5sIl, r395_xn$curveto$1aao, r395_xn$cubicto$1aao, r395_xn$putshapes$9Jrj, r395_xn$reverselast$3qIs, r395_include, r395_xn$createstroke$7Hrq, r395_xn$setanchor$9Jrj, r395_xn$applytransform$1aao, r395_xn$dontexport$5sIl, r395_TURN, _r395_t0, _r395_t1, _r395_t2, _r395_t3;
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
            r395_xn$applytransform$1aao = _r395_t0['apply-transform']['bind'](_r395_t0);
            r395_xn$dontexport$5sIl = function _r395_t3() {
                var _r397_t0, _r397_t1;
                return r395_currentGlyph['dontExport'] = true;
            };
            _r395_t0['gizmo'] = r4_globalTransform;
            _r395_t0['set-width'](r4_WIDTH);
            r395_xn$setwidth$9Jrj(r4_WIDTH);
            r395_xn$assignunicode$7Hrq('v');
            r395_include(r4_eMarks);
            r395_TURN = r4_XH * 0.9;
            r395_include(r395_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r395_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r395_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r395_include(r395_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r395_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r395_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r395_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r395_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r395_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t143() {
            var r399_currentGlyph, r399_xn$setwidth$9Jrj, r399_xn$assignunicode$7Hrq, r399_xn$startfrom$1aao, r399_xn$lineto$5sIl, r399_xn$curveto$1aao, r399_xn$cubicto$1aao, r399_xn$putshapes$9Jrj, r399_xn$reverselast$3qIs, r399_include, r399_xn$createstroke$7Hrq, r399_xn$setanchor$9Jrj, r399_xn$applytransform$1aao, r399_xn$dontexport$5sIl, r399_TURN, r399_turn2, r399_wheight, r399_bottomStroke, r399_m1, r399_m2, _r399_t0, _r399_t1, _r399_t2, _r399_t3;
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
            r399_xn$applytransform$1aao = _r399_t0['apply-transform']['bind'](_r399_t0);
            r399_xn$dontexport$5sIl = function _r399_t3() {
                var _r401_t0, _r401_t1;
                return r399_currentGlyph['dontExport'] = true;
            };
            _r399_t0['gizmo'] = r4_globalTransform;
            _r399_t0['set-width'](r4_WIDTH);
            r399_xn$setwidth$9Jrj(r4_WIDTH);
            r399_xn$assignunicode$7Hrq('w');
            r399_include(r4_eMarks);
            r399_TURN = r4_XH * 0.75;
            r399_turn2 = r4_XH * 0.59;
            r399_wheight = r4_XH * 0.6;
            r399_bottomStroke = r4_adviceBlackness(5.2);
            r399_m1 = r4_WIDTH * 0.325;
            r399_m2 = r4_WIDTH * 0.675;
            r399_include(r399_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r399_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r399_TURN, r399_m1 - r399_bottomStroke / 2, 0)['set-width'](r399_bottomStroke, 0));
            r399_include(r399_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r399_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r399_TURN, r399_m2 + r399_bottomStroke / 2, 0)['set-width'](0, r399_bottomStroke));
            r399_include(r399_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r399_bottomStroke / 2, r399_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r399_bottomStroke)['line-to'](r4_MIDDLE + r399_bottomStroke / 2, r399_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r399_bottomStroke / 2, (1 - 0.1) * r399_turn2, r399_m1 + r399_bottomStroke / 2, 0)['set-width'](0, r399_bottomStroke));
            r399_include(r399_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r399_bottomStroke / 2, r399_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r399_bottomStroke, 0)['line-to'](r4_MIDDLE - r399_bottomStroke / 2, r399_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r399_bottomStroke / 2, (1 - 0.1) * r399_turn2, r399_m2 - r399_bottomStroke / 2, 0)['set-width'](r399_bottomStroke, 0));
            r399_xn$startfrom$1aao(r399_m1 + r399_bottomStroke / 2, 0);
            r399_xn$lineto$5sIl(r399_m1 - r399_bottomStroke / 2, 0);
            r399_xn$lineto$5sIl(r399_m1, r399_bottomStroke);
            r399_xn$startfrom$1aao(r399_m2 + r399_bottomStroke / 2, 0);
            r399_xn$lineto$5sIl(r399_m2 - r399_bottomStroke / 2, 0);
            r399_xn$lineto$5sIl(r399_m2, r399_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t144() {
            var r403_currentGlyph, r403_xn$setwidth$9Jrj, r403_xn$assignunicode$7Hrq, r403_xn$startfrom$1aao, r403_xn$lineto$5sIl, r403_xn$curveto$1aao, r403_xn$cubicto$1aao, r403_xn$putshapes$9Jrj, r403_xn$reverselast$3qIs, r403_include, r403_xn$createstroke$7Hrq, r403_xn$setanchor$9Jrj, r403_xn$applytransform$1aao, r403_xn$dontexport$5sIl, r403_xbottom, r403_turnp, r403_xb, r403_yb, _r403_t0, _r403_t1, _r403_t2, _r403_t3;
            _r403_t0 = this;
            r403_currentGlyph = _r403_t0;
            r403_xn$setwidth$9Jrj = _r403_t0['set-width']['bind'](_r403_t0);
            r403_xn$assignunicode$7Hrq = function _r403_t2(r404_code) {
                var r404_code, _r404_t0, _r404_t1;
                r403_currentGlyph['assign-unicode'](r404_code);
                return r4_unicodeGlyphs[r403_currentGlyph['unicode'][r403_currentGlyph['unicode']['length'] - 1]] = r403_currentGlyph;
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
            r403_xn$applytransform$1aao = _r403_t0['apply-transform']['bind'](_r403_t0);
            r403_xn$dontexport$5sIl = function _r403_t3() {
                var _r405_t0, _r405_t1;
                return r403_currentGlyph['dontExport'] = true;
            };
            _r403_t0['gizmo'] = r4_globalTransform;
            _r403_t0['set-width'](r4_WIDTH);
            r403_xn$setwidth$9Jrj(r4_WIDTH);
            r403_xn$assignunicode$7Hrq('y');
            r403_include(r4_pMarks);
            r403_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r403_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r403_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r403_yb = r0_mix(0, r4_XH, 0.05 * r403_turnp);
            r403_include(r4_xStrand(r403_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r403_include(r4_halfXStrand(r4_SB, r4_XH, r403_xb, r403_yb, 0.1 * r403_turnp, 0.4, 0.14 * r403_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t145() {
            var r407_currentGlyph, r407_xn$setwidth$9Jrj, r407_xn$assignunicode$7Hrq, r407_xn$startfrom$1aao, r407_xn$lineto$5sIl, r407_xn$curveto$1aao, r407_xn$cubicto$1aao, r407_xn$putshapes$9Jrj, r407_xn$reverselast$3qIs, r407_include, r407_xn$createstroke$7Hrq, r407_xn$setanchor$9Jrj, r407_xn$applytransform$1aao, r407_xn$dontexport$5sIl, r407_cor, _r407_t0, _r407_t1, _r407_t2, _r407_t3;
            _r407_t0 = this;
            r407_currentGlyph = _r407_t0;
            r407_xn$setwidth$9Jrj = _r407_t0['set-width']['bind'](_r407_t0);
            r407_xn$assignunicode$7Hrq = function _r407_t2(r408_code) {
                var r408_code, _r408_t0, _r408_t1;
                r407_currentGlyph['assign-unicode'](r408_code);
                return r4_unicodeGlyphs[r407_currentGlyph['unicode'][r407_currentGlyph['unicode']['length'] - 1]] = r407_currentGlyph;
            };
            r407_xn$startfrom$1aao = _r407_t0['start-from']['bind'](_r407_t0);
            r407_xn$lineto$5sIl = _r407_t0['line-to']['bind'](_r407_t0);
            r407_xn$curveto$1aao = _r407_t0['curve-to']['bind'](_r407_t0);
            r407_xn$cubicto$1aao = _r407_t0['cubic-to']['bind'](_r407_t0);
            r407_xn$putshapes$9Jrj = _r407_t0['put-shapes']['bind'](_r407_t0);
            r407_xn$reverselast$3qIs = _r407_t0['reverse-last']['bind'](_r407_t0);
            r407_include = _r407_t0['include']['bind'](_r407_t0);
            r407_xn$createstroke$7Hrq = _r407_t0['create-stroke']['bind'](_r407_t0);
            r407_xn$setanchor$9Jrj = _r407_t0['set-anchor']['bind'](_r407_t0);
            r407_xn$applytransform$1aao = _r407_t0['apply-transform']['bind'](_r407_t0);
            r407_xn$dontexport$5sIl = function _r407_t3() {
                var _r409_t0, _r409_t1;
                return r407_currentGlyph['dontExport'] = true;
            };
            _r407_t0['gizmo'] = r4_globalTransform;
            _r407_t0['set-width'](r4_WIDTH);
            r407_xn$setwidth$9Jrj(r4_WIDTH);
            r407_xn$assignunicode$7Hrq('z');
            r407_include(r4_eMarks);
            r407_cor = 1.2;
            r407_include(r407_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r407_include(r407_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r407_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r407_xn$lineto$5sIl(r4_SB + r4_STROKE * r407_cor, r4_STROKE);
            r407_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r407_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r407_cor, r4_XH - r4_STROKE);
            r407_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t146() {
            var r411_currentGlyph, r411_xn$setwidth$9Jrj, r411_xn$assignunicode$7Hrq, r411_xn$startfrom$1aao, r411_xn$lineto$5sIl, r411_xn$curveto$1aao, r411_xn$cubicto$1aao, r411_xn$putshapes$9Jrj, r411_xn$reverselast$3qIs, r411_include, r411_xn$createstroke$7Hrq, r411_xn$setanchor$9Jrj, r411_xn$applytransform$1aao, r411_xn$dontexport$5sIl, r411_TURN, r411_rturn, r411_right, r411_attach, r411_attach2, r411_fine, _r411_t0, _r411_t1, _r411_t2, _r411_t3;
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
            r411_xn$applytransform$1aao = _r411_t0['apply-transform']['bind'](_r411_t0);
            r411_xn$dontexport$5sIl = function _r411_t3() {
                var _r413_t0, _r413_t1;
                return r411_currentGlyph['dontExport'] = true;
            };
            _r411_t0['gizmo'] = r4_globalTransform;
            _r411_t0['set-width'](r4_WIDTH);
            r411_xn$setwidth$9Jrj(r4_WIDTH);
            r411_xn$assignunicode$7Hrq('k');
            r411_include(r4_bMarks);
            r411_TURN = r4_XH * 0.99;
            r411_rturn = r4_XH * 0.1;
            r411_right = r4_RIGHTSB - r4_O;
            r411_attach = r4_XH * 0.4;
            r411_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r411_fine = r4_adviceBlackness(3.5);
            r411_include(r411_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r411_include(r411_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r411_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r411_TURN, r4_SB + r4_STROKE, r411_attach)['set-width'](0, r411_fine));
            r411_include(r411_xn$createstroke$7Hrq()['start-from'](r411_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r411_right - r4_HALFSTROKE, r411_rturn + 0.05 * (r4_XH - r411_rturn), r411_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r411_fine / 2, r411_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t147() {
            var r415_currentGlyph, r415_xn$setwidth$9Jrj, r415_xn$assignunicode$7Hrq, r415_xn$startfrom$1aao, r415_xn$lineto$5sIl, r415_xn$curveto$1aao, r415_xn$cubicto$1aao, r415_xn$putshapes$9Jrj, r415_xn$reverselast$3qIs, r415_include, r415_xn$createstroke$7Hrq, r415_xn$setanchor$9Jrj, r415_xn$applytransform$1aao, r415_xn$dontexport$5sIl, _r415_t0, _r415_t1, _r415_t2, _r415_t3;
            _r415_t0 = this;
            r415_currentGlyph = _r415_t0;
            r415_xn$setwidth$9Jrj = _r415_t0['set-width']['bind'](_r415_t0);
            r415_xn$assignunicode$7Hrq = function _r415_t2(r416_code) {
                var r416_code, _r416_t0, _r416_t1;
                r415_currentGlyph['assign-unicode'](r416_code);
                return r4_unicodeGlyphs[r415_currentGlyph['unicode'][r415_currentGlyph['unicode']['length'] - 1]] = r415_currentGlyph;
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
            r415_xn$applytransform$1aao = _r415_t0['apply-transform']['bind'](_r415_t0);
            r415_xn$dontexport$5sIl = function _r415_t3() {
                var _r417_t0, _r417_t1;
                return r415_currentGlyph['dontExport'] = true;
            };
            _r415_t0['gizmo'] = r4_globalTransform;
            _r415_t0['set-width'](r4_WIDTH);
            r415_xn$setwidth$9Jrj(r4_WIDTH);
            r415_xn$assignunicode$7Hrq('s');
            r415_include(r4_eMarks);
            r415_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r415_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r415_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t148() {
            var r419_currentGlyph, r419_xn$setwidth$9Jrj, r419_xn$assignunicode$7Hrq, r419_xn$startfrom$1aao, r419_xn$lineto$5sIl, r419_xn$curveto$1aao, r419_xn$cubicto$1aao, r419_xn$putshapes$9Jrj, r419_xn$reverselast$3qIs, r419_include, r419_xn$createstroke$7Hrq, r419_xn$setanchor$9Jrj, r419_xn$applytransform$1aao, r419_xn$dontexport$5sIl, r419_slope, r419_expand, r419_coexpand, r419_rhookx, r419_rmiddle, _r419_t0, _r419_t1, _r419_t2, _r419_t3;
            _r419_t0 = this;
            r419_currentGlyph = _r419_t0;
            r419_xn$setwidth$9Jrj = _r419_t0['set-width']['bind'](_r419_t0);
            r419_xn$assignunicode$7Hrq = function _r419_t2(r420_code) {
                var r420_code, _r420_t0, _r420_t1;
                r419_currentGlyph['assign-unicode'](r420_code);
                return r4_unicodeGlyphs[r419_currentGlyph['unicode'][r419_currentGlyph['unicode']['length'] - 1]] = r419_currentGlyph;
            };
            r419_xn$startfrom$1aao = _r419_t0['start-from']['bind'](_r419_t0);
            r419_xn$lineto$5sIl = _r419_t0['line-to']['bind'](_r419_t0);
            r419_xn$curveto$1aao = _r419_t0['curve-to']['bind'](_r419_t0);
            r419_xn$cubicto$1aao = _r419_t0['cubic-to']['bind'](_r419_t0);
            r419_xn$putshapes$9Jrj = _r419_t0['put-shapes']['bind'](_r419_t0);
            r419_xn$reverselast$3qIs = _r419_t0['reverse-last']['bind'](_r419_t0);
            r419_include = _r419_t0['include']['bind'](_r419_t0);
            r419_xn$createstroke$7Hrq = _r419_t0['create-stroke']['bind'](_r419_t0);
            r419_xn$setanchor$9Jrj = _r419_t0['set-anchor']['bind'](_r419_t0);
            r419_xn$applytransform$1aao = _r419_t0['apply-transform']['bind'](_r419_t0);
            r419_xn$dontexport$5sIl = function _r419_t3() {
                var _r421_t0, _r421_t1;
                return r419_currentGlyph['dontExport'] = true;
            };
            _r419_t0['gizmo'] = r4_globalTransform;
            _r419_t0['set-width'](r4_WIDTH);
            r419_xn$setwidth$9Jrj(r4_WIDTH);
            r419_xn$assignunicode$7Hrq('r');
            r419_include(r4_eMarks);
            r419_slope = 0.015;
            r419_expand = 0.175;
            r419_coexpand = (1 - r419_expand) / 2;
            r419_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r419_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r419_rhookx - r4_HALFSTROKE, 0.5);
            r419_include(r419_xn$createstroke$7Hrq()['start-from'](r419_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r419_rmiddle, r419_rhookx, r4_KAPPA_AHOOK), r4_XO, r419_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r419_include(r419_xn$createstroke$7Hrq()['start-from'](r419_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r419_include(r419_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_fBar = function _r4_t149() {
            var _r422_t0, _r422_t1, _r422_t2;
            return function _r422_t2() {
                var r424_currentGlyph, r424_xn$setwidth$9Jrj, r424_xn$assignunicode$7Hrq, r424_xn$startfrom$1aao, r424_xn$lineto$5sIl, r424_xn$curveto$1aao, r424_xn$cubicto$1aao, r424_xn$putshapes$9Jrj, r424_xn$reverselast$3qIs, r424_include, r424_xn$createstroke$7Hrq, r424_xn$setanchor$9Jrj, r424_xn$applytransform$1aao, r424_xn$dontexport$5sIl, _r424_t0, _r424_t1, _r424_t2, _r424_t3;
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
                r424_xn$applytransform$1aao = _r424_t0['apply-transform']['bind'](_r424_t0);
                r424_xn$dontexport$5sIl = function _r424_t3() {
                    var _r426_t0, _r426_t1;
                    return r424_currentGlyph['dontExport'] = true;
                };
                _r424_t0['gizmo'] = r4_globalTransform;
                _r424_t0['set-width'](r4_WIDTH);
                r424_include(r424_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('longs.upright', function _r4_t150() {
            var r428_currentGlyph, r428_xn$setwidth$9Jrj, r428_xn$assignunicode$7Hrq, r428_xn$startfrom$1aao, r428_xn$lineto$5sIl, r428_xn$curveto$1aao, r428_xn$cubicto$1aao, r428_xn$putshapes$9Jrj, r428_xn$reverselast$3qIs, r428_include, r428_xn$createstroke$7Hrq, r428_xn$setanchor$9Jrj, r428_xn$applytransform$1aao, r428_xn$dontexport$5sIl, _r428_t0, _r428_t1, _r428_t2, _r428_t3;
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
            r428_xn$applytransform$1aao = _r428_t0['apply-transform']['bind'](_r428_t0);
            r428_xn$dontexport$5sIl = function _r428_t3() {
                var _r430_t0, _r430_t1;
                return r428_currentGlyph['dontExport'] = true;
            };
            _r428_t0['gizmo'] = r4_globalTransform;
            _r428_t0['set-width'](r4_WIDTH);
            r428_xn$setwidth$9Jrj(r4_WIDTH);
            r428_xn$dontexport$5sIl();
            r428_include(r4_bMarks);
            r428_include(r428_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_eshHook = function _r4_t151(r431_attach) {
            var r431_attach, _r431_t0, _r431_t1, _r431_t2;
            return function _r431_t2() {
                var r433_currentGlyph, r433_xn$setwidth$9Jrj, r433_xn$assignunicode$7Hrq, r433_xn$startfrom$1aao, r433_xn$lineto$5sIl, r433_xn$curveto$1aao, r433_xn$cubicto$1aao, r433_xn$putshapes$9Jrj, r433_xn$reverselast$3qIs, r433_include, r433_xn$createstroke$7Hrq, r433_xn$setanchor$9Jrj, r433_xn$applytransform$1aao, r433_xn$dontexport$5sIl, _r433_t0, _r433_t1, _r433_t2, _r433_t3;
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
                r433_xn$applytransform$1aao = _r433_t0['apply-transform']['bind'](_r433_t0);
                r433_xn$dontexport$5sIl = function _r433_t3() {
                    var _r435_t0, _r435_t1;
                    return r433_currentGlyph['dontExport'] = true;
                };
                _r433_t0['gizmo'] = r4_globalTransform;
                _r433_t0['set-width'](r4_WIDTH);
                r433_include(r433_xn$createstroke$7Hrq()['start-from'](r431_attach['x'] - r4_SHOOK * 2, r431_attach['y'] + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r431_attach['x'], r431_attach['y'])['line-to'](r431_attach['x'], r431_attach['y'] + r4_STROKE));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('longs.italic', function _r4_t152() {
            var r437_currentGlyph, r437_xn$setwidth$9Jrj, r437_xn$assignunicode$7Hrq, r437_xn$startfrom$1aao, r437_xn$lineto$5sIl, r437_xn$curveto$1aao, r437_xn$cubicto$1aao, r437_xn$putshapes$9Jrj, r437_xn$reverselast$3qIs, r437_include, r437_xn$createstroke$7Hrq, r437_xn$setanchor$9Jrj, r437_xn$applytransform$1aao, r437_xn$dontexport$5sIl, _r437_t0, _r437_t1, _r437_t2, _r437_t3;
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
            r437_xn$applytransform$1aao = _r437_t0['apply-transform']['bind'](_r437_t0);
            r437_xn$dontexport$5sIl = function _r437_t3() {
                var _r439_t0, _r439_t1;
                return r437_currentGlyph['dontExport'] = true;
            };
            _r437_t0['gizmo'] = r4_globalTransform;
            _r437_t0['set-width'](r4_WIDTH);
            r437_xn$setwidth$9Jrj(r4_WIDTH);
            r437_xn$dontexport$5sIl();
            r437_include(r4_ifMarks);
            r437_include(r437_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('longs', function _r4_t153() {
            var r441_currentGlyph, r441_xn$setwidth$9Jrj, r441_xn$assignunicode$7Hrq, r441_xn$startfrom$1aao, r441_xn$lineto$5sIl, r441_xn$curveto$1aao, r441_xn$cubicto$1aao, r441_xn$putshapes$9Jrj, r441_xn$reverselast$3qIs, r441_include, r441_xn$createstroke$7Hrq, r441_xn$setanchor$9Jrj, r441_xn$applytransform$1aao, r441_xn$dontexport$5sIl, _r441_t0, _r441_t1, _r441_t2, _r441_t3;
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
            r441_xn$applytransform$1aao = _r441_t0['apply-transform']['bind'](_r441_t0);
            r441_xn$dontexport$5sIl = function _r441_t3() {
                var _r443_t0, _r443_t1;
                return r441_currentGlyph['dontExport'] = true;
            };
            _r441_t0['gizmo'] = r4_globalTransform;
            _r441_t0['set-width'](r4_WIDTH);
            r441_xn$setwidth$9Jrj(r4_WIDTH);
            r441_xn$assignunicode$7Hrq(383);
            if (r4_para['italicangle'] > 0) {
                r441_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            } else {
                r441_include(r4_glyphs['longs.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t154() {
            var r445_currentGlyph, r445_xn$setwidth$9Jrj, r445_xn$assignunicode$7Hrq, r445_xn$startfrom$1aao, r445_xn$lineto$5sIl, r445_xn$curveto$1aao, r445_xn$cubicto$1aao, r445_xn$putshapes$9Jrj, r445_xn$reverselast$3qIs, r445_include, r445_xn$createstroke$7Hrq, r445_xn$setanchor$9Jrj, r445_xn$applytransform$1aao, r445_xn$dontexport$5sIl, _r445_t0, _r445_t1, _r445_t2, _r445_t3;
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
            r445_xn$applytransform$1aao = _r445_t0['apply-transform']['bind'](_r445_t0);
            r445_xn$dontexport$5sIl = function _r445_t3() {
                var _r447_t0, _r447_t1;
                return r445_currentGlyph['dontExport'] = true;
            };
            _r445_t0['gizmo'] = r4_globalTransform;
            _r445_t0['set-width'](r4_WIDTH);
            r445_xn$setwidth$9Jrj(r4_WIDTH);
            r445_xn$assignunicode$7Hrq('f');
            r445_include(r4_glyphs['longs'], r4_AS_BASE);
            r445_include(r4_fBar());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t155() {
            var r449_currentGlyph, r449_xn$setwidth$9Jrj, r449_xn$assignunicode$7Hrq, r449_xn$startfrom$1aao, r449_xn$lineto$5sIl, r449_xn$curveto$1aao, r449_xn$cubicto$1aao, r449_xn$putshapes$9Jrj, r449_xn$reverselast$3qIs, r449_include, r449_xn$createstroke$7Hrq, r449_xn$setanchor$9Jrj, r449_xn$applytransform$1aao, r449_xn$dontexport$5sIl, r449_sw, r449_eleft, r449_turn, _r449_t0, _r449_t1, _r449_t2, _r449_t3;
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
            r449_xn$applytransform$1aao = _r449_t0['apply-transform']['bind'](_r449_t0);
            r449_xn$dontexport$5sIl = function _r449_t3() {
                var _r451_t0, _r451_t1;
                return r449_currentGlyph['dontExport'] = true;
            };
            _r449_t0['gizmo'] = r4_globalTransform;
            _r449_t0['set-width'](r4_WIDTH);
            r449_xn$setwidth$9Jrj(r4_WIDTH);
            r449_xn$assignunicode$7Hrq(198);
            r449_include(r4_capitalMarks);
            r449_sw = r4_adviceBlackness(3.5);
            r449_eleft = r4_MIDDLE - r449_sw * 0.25;
            r449_turn = r4_XH * 0.1;
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r449_sw)['line-to'](r4_SB, r449_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r449_turn, r4_CAP, 0.27), r449_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r449_sw * 0.8));
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r4_SB + r449_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r449_sw)['line-to'](r449_eleft + r449_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r449_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r449_sw)['line-to'](r449_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r449_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r449_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r449_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r449_include(r449_xn$createstroke$7Hrq()['start-from'](r449_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t156() {
            var r453_currentGlyph, r453_xn$setwidth$9Jrj, r453_xn$assignunicode$7Hrq, r453_xn$startfrom$1aao, r453_xn$lineto$5sIl, r453_xn$curveto$1aao, r453_xn$cubicto$1aao, r453_xn$putshapes$9Jrj, r453_xn$reverselast$3qIs, r453_include, r453_xn$createstroke$7Hrq, r453_xn$setanchor$9Jrj, r453_xn$applytransform$1aao, r453_xn$dontexport$5sIl, r453_sw, r453_eleft, _r453_t0, _r453_t1, _r453_t2, _r453_t3;
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
            r453_xn$applytransform$1aao = _r453_t0['apply-transform']['bind'](_r453_t0);
            r453_xn$dontexport$5sIl = function _r453_t3() {
                var _r455_t0, _r455_t1;
                return r453_currentGlyph['dontExport'] = true;
            };
            _r453_t0['gizmo'] = r4_globalTransform;
            _r453_t0['set-width'](r4_WIDTH);
            r453_xn$setwidth$9Jrj(r4_WIDTH);
            r453_xn$assignunicode$7Hrq(338);
            r453_include(r4_capitalMarks);
            r453_sw = r4_adviceBlackness(3.5);
            r453_eleft = r4_MIDDLE;
            r453_include(r453_xn$createstroke$7Hrq()['start-from'](r453_eleft + 1, r4_CAP)['set-width'](r453_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r453_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r453_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r453_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r453_include(r453_xn$createstroke$7Hrq()['start-from'](r453_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r453_sw)['line-to'](r453_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r453_include(r453_xn$createstroke$7Hrq()['start-from'](r453_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r453_include(r453_xn$createstroke$7Hrq()['start-from'](r453_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r453_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r453_include(r453_xn$createstroke$7Hrq()['start-from'](r453_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t157() {
            var r457_currentGlyph, r457_xn$setwidth$9Jrj, r457_xn$assignunicode$7Hrq, r457_xn$startfrom$1aao, r457_xn$lineto$5sIl, r457_xn$curveto$1aao, r457_xn$cubicto$1aao, r457_xn$putshapes$9Jrj, r457_xn$reverselast$3qIs, r457_include, r457_xn$createstroke$7Hrq, r457_xn$setanchor$9Jrj, r457_xn$applytransform$1aao, r457_xn$dontexport$5sIl, r457_sw, r457_eLeft, r457_eMiddle, r457_barbottom, r457_hookx, r457_eHookMiddle, r457_sma, r457_smb, _r457_t0, _r457_t1, _r457_t2, _r457_t3;
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
            r457_xn$applytransform$1aao = _r457_t0['apply-transform']['bind'](_r457_t0);
            r457_xn$dontexport$5sIl = function _r457_t3() {
                var _r459_t0, _r459_t1;
                return r457_currentGlyph['dontExport'] = true;
            };
            _r457_t0['gizmo'] = r4_globalTransform;
            _r457_t0['set-width'](r4_WIDTH);
            r457_xn$dontexport$5sIl();
            r457_sw = r4_adviceBlackness(3.5);
            r457_eLeft = r4_MIDDLE - r457_sw / 2 * r4_ITALICCOR;
            r457_eMiddle = r0_mix(r457_eLeft, r4_RIGHTSB - r4_O, 0.5) - r457_sw * r4_globalTransform['yx'];
            r457_barbottom = r4_XH * r4_EBARPOS;
            r457_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r457_eHookMiddle = r0_mix(r457_eLeft, r457_hookx, 0.5);
            r457_sma = r4_SMALLSMOOTHA * 0.6;
            r457_smb = r4_SMALLSMOOTHB * 0.6;
            r457_include(r457_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r457_barbottom)['heads-to'](r4_UPWARD)['set-width'](r457_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r457_smb)['arc-vh-to'](r457_eMiddle, r4_XO)['arc-hv-to'](r457_eLeft, r4_XH - r457_sma)['line-to'](r457_eLeft, r457_smb)['arc-vh-to'](r457_eHookMiddle, r4_O)['curve-to'](r0_mix(r457_eHookMiddle, r457_hookx, r4_KAPPA_HOOK), r4_O, r457_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r457_include(r457_xn$createstroke$7Hrq()['start-from'](r457_eLeft + r457_sw / 2, r457_barbottom)['set-width'](r457_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r457_sw / 2, r457_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t158() {
            var r461_currentGlyph, r461_xn$setwidth$9Jrj, r461_xn$assignunicode$7Hrq, r461_xn$startfrom$1aao, r461_xn$lineto$5sIl, r461_xn$curveto$1aao, r461_xn$cubicto$1aao, r461_xn$putshapes$9Jrj, r461_xn$reverselast$3qIs, r461_include, r461_xn$createstroke$7Hrq, r461_xn$setanchor$9Jrj, r461_xn$applytransform$1aao, r461_xn$dontexport$5sIl, r461_sw, r461_bartop, r461_abarRight, r461_m1, r461_lowmiddle, r461_barsmooth, r461_sma, r461_smb, _r461_t0, _r461_t1, _r461_t2, _r461_t3;
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
            r461_xn$applytransform$1aao = _r461_t0['apply-transform']['bind'](_r461_t0);
            r461_xn$dontexport$5sIl = function _r461_t3() {
                var _r463_t0, _r463_t1;
                return r461_currentGlyph['dontExport'] = true;
            };
            _r461_t0['gizmo'] = r4_globalTransform;
            _r461_t0['set-width'](r4_WIDTH);
            r461_xn$dontexport$5sIl();
            r461_sw = r4_adviceBlackness(3.5);
            r461_bartop = r4_XH * r4_BARPOS + r461_sw;
            r461_abarRight = r4_MIDDLE + r461_sw / 2 * r4_ITALICCOR;
            r461_m1 = r0_mix(r4_SB + r4_OXHOOK, r461_abarRight, 0.5);
            r461_lowmiddle = r0_mix(r4_SB + r461_sw, r461_abarRight - r461_sw, 0.5) + r461_sw * r4_globalTransform['yx'];
            r461_barsmooth = r0_mix(r4_SB, r461_abarRight, 0.6);
            r461_sma = r4_SMALLSMOOTHA * 0.6;
            r461_smb = r4_SMALLSMOOTHB * 0.6;
            r461_include(r461_xn$createstroke$7Hrq()['start-from'](r461_abarRight, r4_XH - r461_sma)['set-width'](r461_sw, 0)['arc-vh-to'](r461_m1, r4_XO)['curve-to'](r0_mix(r461_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r461_include(r461_xn$createstroke$7Hrq()['start-from'](r461_abarRight, r461_smb)['set-width'](0, r461_sw)['arc-vh-to'](r461_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r461_bartop, r461_smb / (r461_sma + r461_smb)))['arc-vh-to'](r461_barsmooth, r461_bartop)['line-to'](r461_abarRight, r461_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t159() {
            var r465_currentGlyph, r465_xn$setwidth$9Jrj, r465_xn$assignunicode$7Hrq, r465_xn$startfrom$1aao, r465_xn$lineto$5sIl, r465_xn$curveto$1aao, r465_xn$cubicto$1aao, r465_xn$putshapes$9Jrj, r465_xn$reverselast$3qIs, r465_include, r465_xn$createstroke$7Hrq, r465_xn$setanchor$9Jrj, r465_xn$applytransform$1aao, r465_xn$dontexport$5sIl, r465_sw, r465_abarRight, r465_m1, r465_sma, r465_smb, _r465_t0, _r465_t1, _r465_t2, _r465_t3;
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
            r465_xn$applytransform$1aao = _r465_t0['apply-transform']['bind'](_r465_t0);
            r465_xn$dontexport$5sIl = function _r465_t3() {
                var _r467_t0, _r467_t1;
                return r465_currentGlyph['dontExport'] = true;
            };
            _r465_t0['gizmo'] = r4_globalTransform;
            _r465_t0['set-width'](r4_WIDTH);
            r465_xn$dontexport$5sIl();
            r465_sw = r4_adviceBlackness(3.5);
            r465_abarRight = r4_MIDDLE + r465_sw / 2 * r4_ITALICCOR;
            r465_m1 = r0_mix(r4_SB + r4_O, r465_abarRight, 0.5);
            r465_sma = r4_SMALLSMOOTHA * 0.6;
            r465_smb = r4_SMALLSMOOTHB * 0.6;
            r465_include(r465_xn$createstroke$7Hrq()['start-from'](r465_abarRight, r465_smb)['set-width'](0, r465_sw)['arc-vh-to'](r465_m1 + r465_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r465_smb)['line-to'](r4_SB + r4_O, r4_XH - r465_sma)['arc-vh-to'](r465_m1 - r465_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r465_abarRight, r4_XH - r465_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t160() {
            var r469_currentGlyph, r469_xn$setwidth$9Jrj, r469_xn$assignunicode$7Hrq, r469_xn$startfrom$1aao, r469_xn$lineto$5sIl, r469_xn$curveto$1aao, r469_xn$cubicto$1aao, r469_xn$putshapes$9Jrj, r469_xn$reverselast$3qIs, r469_include, r469_xn$createstroke$7Hrq, r469_xn$setanchor$9Jrj, r469_xn$applytransform$1aao, r469_xn$dontexport$5sIl, _r469_t0, _r469_t1, _r469_t2, _r469_t3;
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
            r469_xn$applytransform$1aao = _r469_t0['apply-transform']['bind'](_r469_t0);
            r469_xn$dontexport$5sIl = function _r469_t3() {
                var _r471_t0, _r471_t1;
                return r469_currentGlyph['dontExport'] = true;
            };
            _r469_t0['gizmo'] = r4_globalTransform;
            _r469_t0['set-width'](r4_WIDTH);
            r469_xn$setwidth$9Jrj(r4_WIDTH);
            r469_xn$assignunicode$7Hrq(230);
            r469_include(r4_eMarks);
            r469_include(r4_glyphs['ae-epart']);
            r469_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t161() {
            var r473_currentGlyph, r473_xn$setwidth$9Jrj, r473_xn$assignunicode$7Hrq, r473_xn$startfrom$1aao, r473_xn$lineto$5sIl, r473_xn$curveto$1aao, r473_xn$cubicto$1aao, r473_xn$putshapes$9Jrj, r473_xn$reverselast$3qIs, r473_include, r473_xn$createstroke$7Hrq, r473_xn$setanchor$9Jrj, r473_xn$applytransform$1aao, r473_xn$dontexport$5sIl, _r473_t0, _r473_t1, _r473_t2, _r473_t3;
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
            r473_xn$applytransform$1aao = _r473_t0['apply-transform']['bind'](_r473_t0);
            r473_xn$dontexport$5sIl = function _r473_t3() {
                var _r475_t0, _r475_t1;
                return r473_currentGlyph['dontExport'] = true;
            };
            _r473_t0['gizmo'] = r4_globalTransform;
            _r473_t0['set-width'](r4_WIDTH);
            r473_xn$setwidth$9Jrj(r4_WIDTH);
            r473_xn$assignunicode$7Hrq(339);
            r473_include(r4_eMarks);
            r473_include(r4_glyphs['ae-epart']);
            r473_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t162() {
            var r477_currentGlyph, r477_xn$setwidth$9Jrj, r477_xn$assignunicode$7Hrq, r477_xn$startfrom$1aao, r477_xn$lineto$5sIl, r477_xn$curveto$1aao, r477_xn$cubicto$1aao, r477_xn$putshapes$9Jrj, r477_xn$reverselast$3qIs, r477_include, r477_xn$createstroke$7Hrq, r477_xn$setanchor$9Jrj, r477_xn$applytransform$1aao, r477_xn$dontexport$5sIl, _r477_t0, _r477_t1, _r477_t2, _r477_t3;
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
            r477_xn$applytransform$1aao = _r477_t0['apply-transform']['bind'](_r477_t0);
            r477_xn$dontexport$5sIl = function _r477_t3() {
                var _r479_t0, _r479_t1;
                return r477_currentGlyph['dontExport'] = true;
            };
            _r477_t0['gizmo'] = r4_globalTransform;
            _r477_t0['set-width'](r4_WIDTH);
            r477_xn$assignunicode$7Hrq(208);
            r477_include(r4_glyphs['D'], r4_AS_BASE);
            r477_include(r477_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.55), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t163() {
            var r481_currentGlyph, r481_xn$setwidth$9Jrj, r481_xn$assignunicode$7Hrq, r481_xn$startfrom$1aao, r481_xn$lineto$5sIl, r481_xn$curveto$1aao, r481_xn$cubicto$1aao, r481_xn$putshapes$9Jrj, r481_xn$reverselast$3qIs, r481_include, r481_xn$createstroke$7Hrq, r481_xn$setanchor$9Jrj, r481_xn$applytransform$1aao, r481_xn$dontexport$5sIl, _r481_t0, _r481_t1, _r481_t2, _r481_t3;
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
            r481_xn$applytransform$1aao = _r481_t0['apply-transform']['bind'](_r481_t0);
            r481_xn$dontexport$5sIl = function _r481_t3() {
                var _r483_t0, _r483_t1;
                return r481_currentGlyph['dontExport'] = true;
            };
            _r481_t0['gizmo'] = r4_globalTransform;
            _r481_t0['set-width'](r4_WIDTH);
            r481_xn$assignunicode$7Hrq(272);
            r481_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t164() {
            var r485_currentGlyph, r485_xn$setwidth$9Jrj, r485_xn$assignunicode$7Hrq, r485_xn$startfrom$1aao, r485_xn$lineto$5sIl, r485_xn$curveto$1aao, r485_xn$cubicto$1aao, r485_xn$putshapes$9Jrj, r485_xn$reverselast$3qIs, r485_include, r485_xn$createstroke$7Hrq, r485_xn$setanchor$9Jrj, r485_xn$applytransform$1aao, r485_xn$dontexport$5sIl, r485_ymiddlea, r485_sw, _r485_t0, _r485_t1, _r485_t2, _r485_t3;
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
            r485_xn$applytransform$1aao = _r485_t0['apply-transform']['bind'](_r485_t0);
            r485_xn$dontexport$5sIl = function _r485_t3() {
                var _r487_t0, _r487_t1;
                return r485_currentGlyph['dontExport'] = true;
            };
            _r485_t0['gizmo'] = r4_globalTransform;
            _r485_t0['set-width'](r4_WIDTH);
            r485_xn$setwidth$9Jrj(r4_WIDTH);
            r485_xn$assignunicode$7Hrq(240);
            r485_include(r4_bMarks);
            r485_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r485_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r485_include(r485_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r485_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r485_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r485_sw = 0.5 * r4_adviceBlackness(4);
            r485_include(r485_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, -0.1))['set-width'](r485_sw, r485_sw)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.3)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t165() {
            var r489_currentGlyph, r489_xn$setwidth$9Jrj, r489_xn$assignunicode$7Hrq, r489_xn$startfrom$1aao, r489_xn$lineto$5sIl, r489_xn$curveto$1aao, r489_xn$cubicto$1aao, r489_xn$putshapes$9Jrj, r489_xn$reverselast$3qIs, r489_include, r489_xn$createstroke$7Hrq, r489_xn$setanchor$9Jrj, r489_xn$applytransform$1aao, r489_xn$dontexport$5sIl, r489_sw, _r489_t0, _r489_t1, _r489_t2, _r489_t3;
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
            r489_xn$applytransform$1aao = _r489_t0['apply-transform']['bind'](_r489_t0);
            r489_xn$dontexport$5sIl = function _r489_t3() {
                var _r491_t0, _r491_t1;
                return r489_currentGlyph['dontExport'] = true;
            };
            _r489_t0['gizmo'] = r4_globalTransform;
            _r489_t0['set-width'](r4_WIDTH);
            r489_xn$assignunicode$7Hrq(273);
            r489_include(r4_glyphs['d'], r4_AS_BASE);
            r489_sw = 0.5 * r4_adviceBlackness(5);
            r489_include(r489_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.5), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r489_sw, r489_sw)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t166() {
            var r493_currentGlyph, r493_xn$setwidth$9Jrj, r493_xn$assignunicode$7Hrq, r493_xn$startfrom$1aao, r493_xn$lineto$5sIl, r493_xn$curveto$1aao, r493_xn$cubicto$1aao, r493_xn$putshapes$9Jrj, r493_xn$reverselast$3qIs, r493_include, r493_xn$createstroke$7Hrq, r493_xn$setanchor$9Jrj, r493_xn$applytransform$1aao, r493_xn$dontexport$5sIl, r493_fine, _r493_t0, _r493_t1, _r493_t2, _r493_t3;
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
            r493_xn$applytransform$1aao = _r493_t0['apply-transform']['bind'](_r493_t0);
            r493_xn$dontexport$5sIl = function _r493_t3() {
                var _r495_t0, _r495_t1;
                return r493_currentGlyph['dontExport'] = true;
            };
            _r493_t0['gizmo'] = r4_globalTransform;
            _r493_t0['set-width'](r4_WIDTH);
            r493_xn$assignunicode$7Hrq(216);
            r493_fine = r4_adviceBlackness(10);
            r493_include(r4_glyphs['O'], r4_AS_BASE);
            r493_include(r493_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r493_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r493_fine, r493_fine)['line-to'](r4_RIGHTSB - r4_O - r493_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t167() {
            var r497_currentGlyph, r497_xn$setwidth$9Jrj, r497_xn$assignunicode$7Hrq, r497_xn$startfrom$1aao, r497_xn$lineto$5sIl, r497_xn$curveto$1aao, r497_xn$cubicto$1aao, r497_xn$putshapes$9Jrj, r497_xn$reverselast$3qIs, r497_include, r497_xn$createstroke$7Hrq, r497_xn$setanchor$9Jrj, r497_xn$applytransform$1aao, r497_xn$dontexport$5sIl, r497_fine, _r497_t0, _r497_t1, _r497_t2, _r497_t3;
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
            r497_xn$applytransform$1aao = _r497_t0['apply-transform']['bind'](_r497_t0);
            r497_xn$dontexport$5sIl = function _r497_t3() {
                var _r499_t0, _r499_t1;
                return r497_currentGlyph['dontExport'] = true;
            };
            _r497_t0['gizmo'] = r4_globalTransform;
            _r497_t0['set-width'](r4_WIDTH);
            r497_xn$assignunicode$7Hrq(248);
            r497_fine = r4_adviceBlackness(10);
            r497_include(r4_glyphs['o'], r4_AS_BASE);
            r497_include(r497_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r497_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r497_fine, r497_fine)['line-to'](r4_RIGHTSB - r4_O - r497_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t168() {
            var r501_currentGlyph, r501_xn$setwidth$9Jrj, r501_xn$assignunicode$7Hrq, r501_xn$startfrom$1aao, r501_xn$lineto$5sIl, r501_xn$curveto$1aao, r501_xn$cubicto$1aao, r501_xn$putshapes$9Jrj, r501_xn$reverselast$3qIs, r501_include, r501_xn$createstroke$7Hrq, r501_xn$setanchor$9Jrj, r501_xn$applytransform$1aao, r501_xn$dontexport$5sIl, r501_bowlTop, r501_bowlBottom, r501_bkappa, r501_turn, r501_turnRadius, _r501_t0, _r501_t1, _r501_t2, _r501_t3;
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
            r501_xn$applytransform$1aao = _r501_t0['apply-transform']['bind'](_r501_t0);
            r501_xn$dontexport$5sIl = function _r501_t3() {
                var _r503_t0, _r503_t1;
                return r501_currentGlyph['dontExport'] = true;
            };
            _r501_t0['gizmo'] = r4_globalTransform;
            _r501_t0['set-width'](r4_WIDTH);
            r501_xn$setwidth$9Jrj(r4_WIDTH);
            r501_xn$assignunicode$7Hrq(222);
            r501_include(r4_capitalMarks);
            r501_bowlTop = r4_CAP * 0.77;
            r501_bowlBottom = r4_CAP * 0.23;
            r501_bkappa = r4_COKAPPA - 0.2;
            r501_turn = r0_mix(r501_bowlTop, r501_bowlBottom, 0.5);
            r501_turnRadius = (r501_bowlTop - r501_bowlBottom) / 2;
            r501_include(r501_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r501_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r501_turnRadius, r501_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r501_turn)['arc-vh-to'](r4_RIGHTSB - r501_turnRadius, r501_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r501_bowlBottom)['heads-to'](r4_LEFTWARD));
            r501_include(r501_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t169() {
            var r505_currentGlyph, r505_xn$setwidth$9Jrj, r505_xn$assignunicode$7Hrq, r505_xn$startfrom$1aao, r505_xn$lineto$5sIl, r505_xn$curveto$1aao, r505_xn$cubicto$1aao, r505_xn$putshapes$9Jrj, r505_xn$reverselast$3qIs, r505_include, r505_xn$createstroke$7Hrq, r505_xn$setanchor$9Jrj, r505_xn$applytransform$1aao, r505_xn$dontexport$5sIl, _r505_t0, _r505_t1, _r505_t2, _r505_t3;
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
            r505_xn$applytransform$1aao = _r505_t0['apply-transform']['bind'](_r505_t0);
            r505_xn$dontexport$5sIl = function _r505_t3() {
                var _r507_t0, _r507_t1;
                return r505_currentGlyph['dontExport'] = true;
            };
            _r505_t0['gizmo'] = r4_globalTransform;
            _r505_t0['set-width'](r4_WIDTH);
            r505_xn$assignunicode$7Hrq(254);
            r505_include(r4_glyphs['b'], r4_AS_BASE);
            r505_include(r4_glyphs['p']);
            r505_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t170() {
            var r509_currentGlyph, r509_xn$setwidth$9Jrj, r509_xn$assignunicode$7Hrq, r509_xn$startfrom$1aao, r509_xn$lineto$5sIl, r509_xn$curveto$1aao, r509_xn$cubicto$1aao, r509_xn$putshapes$9Jrj, r509_xn$reverselast$3qIs, r509_include, r509_xn$createstroke$7Hrq, r509_xn$setanchor$9Jrj, r509_xn$applytransform$1aao, r509_xn$dontexport$5sIl, r509_yTopTurn, r509_yBottomTurn, r509_xTopTurn, r509_xMiddleTurn, r509_xBottomTurn, r509_xBottomFinal, _r509_t0, _r509_t1, _r509_t2, _r509_t3;
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
            r509_xn$applytransform$1aao = _r509_t0['apply-transform']['bind'](_r509_t0);
            r509_xn$dontexport$5sIl = function _r509_t3() {
                var _r511_t0, _r511_t1;
                return r509_currentGlyph['dontExport'] = true;
            };
            _r509_t0['gizmo'] = r4_globalTransform;
            _r509_t0['set-width'](r4_WIDTH);
            r509_xn$setwidth$9Jrj(r4_WIDTH);
            r509_xn$dontexport$5sIl();
            r509_include(r4_bMarks);
            r509_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r509_yBottomTurn = r4_CAP * 0.41;
            r509_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r509_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r509_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r509_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r509_include(r509_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r509_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r509_xTopTurn, r509_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r509_xTopTurn, r509_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r509_include(r509_xn$createstroke$7Hrq()['start-from'](r509_xTopTurn + r4_HALFSTROKE, r509_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r509_xMiddleTurn + (r509_yTopTurn - r509_yBottomTurn) / 2, r509_yTopTurn)['arc-hv-to'](r509_xMiddleTurn, r0_mix(r509_yTopTurn, r509_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r509_xMiddleTurn, r509_xBottomTurn, 0.5), r509_yBottomTurn)['arc-hv-to'](r509_xBottomTurn, r0_mix(r509_yBottomTurn + r4_HALFSTROKE, 0, 0.475))['arc-vh-to'](r509_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r509_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t171() {
            var r513_currentGlyph, r513_xn$setwidth$9Jrj, r513_xn$assignunicode$7Hrq, r513_xn$startfrom$1aao, r513_xn$lineto$5sIl, r513_xn$curveto$1aao, r513_xn$cubicto$1aao, r513_xn$putshapes$9Jrj, r513_xn$reverselast$3qIs, r513_include, r513_xn$createstroke$7Hrq, r513_xn$setanchor$9Jrj, r513_xn$applytransform$1aao, r513_xn$dontexport$5sIl, _r513_t0, _r513_t1, _r513_t2, _r513_t3;
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
            r513_xn$applytransform$1aao = _r513_t0['apply-transform']['bind'](_r513_t0);
            r513_xn$dontexport$5sIl = function _r513_t3() {
                var _r515_t0, _r515_t1;
                return r513_currentGlyph['dontExport'] = true;
            };
            _r513_t0['gizmo'] = r4_globalTransform;
            _r513_t0['set-width'](r4_WIDTH);
            r513_xn$setwidth$9Jrj(r4_WIDTH);
            r513_xn$dontexport$5sIl();
            r513_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r513_include(r4_ifMarks);
            r513_include(r4_eshHook(r4_glyphs['eszet.upright']['italicHookAttachPoint']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t172() {
            var r517_currentGlyph, r517_xn$setwidth$9Jrj, r517_xn$assignunicode$7Hrq, r517_xn$startfrom$1aao, r517_xn$lineto$5sIl, r517_xn$curveto$1aao, r517_xn$cubicto$1aao, r517_xn$putshapes$9Jrj, r517_xn$reverselast$3qIs, r517_include, r517_xn$createstroke$7Hrq, r517_xn$setanchor$9Jrj, r517_xn$applytransform$1aao, r517_xn$dontexport$5sIl, _r517_t0, _r517_t1, _r517_t2, _r517_t3;
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
            r517_xn$applytransform$1aao = _r517_t0['apply-transform']['bind'](_r517_t0);
            r517_xn$dontexport$5sIl = function _r517_t3() {
                var _r519_t0, _r519_t1;
                return r517_currentGlyph['dontExport'] = true;
            };
            _r517_t0['gizmo'] = r4_globalTransform;
            _r517_t0['set-width'](r4_WIDTH);
            r517_xn$setwidth$9Jrj(r4_WIDTH);
            r517_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r517_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r517_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_ezhshape = function _r4_t173(r520_top, r520_bot) {
            var r520_top, r520_bot, _r520_t0, _r520_t1, _r520_t2;
            return function _r520_t2() {
                var r522_currentGlyph, r522_xn$setwidth$9Jrj, r522_xn$assignunicode$7Hrq, r522_xn$startfrom$1aao, r522_xn$lineto$5sIl, r522_xn$curveto$1aao, r522_xn$cubicto$1aao, r522_xn$putshapes$9Jrj, r522_xn$reverselast$3qIs, r522_include, r522_xn$createstroke$7Hrq, r522_xn$setanchor$9Jrj, r522_xn$applytransform$1aao, r522_xn$dontexport$5sIl, r522_cor, r522_yMidBar, r522_ezhLeft, r522_ezhRight, _r522_t0, _r522_t1, _r522_t2, _r522_t3;
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
                r522_xn$applytransform$1aao = _r522_t0['apply-transform']['bind'](_r522_t0);
                r522_xn$dontexport$5sIl = function _r522_t3() {
                    var _r524_t0, _r524_t1;
                    return r522_currentGlyph['dontExport'] = true;
                };
                _r522_t0['gizmo'] = r4_globalTransform;
                _r522_t0['set-width'](r4_WIDTH);
                r522_cor = 1.2;
                r522_yMidBar = r0_mix(r520_bot, r520_top, 0.6);
                r522_ezhLeft = r0_mix(r4_SB, r4_RIGHTSB, 0.2);
                r522_ezhRight = r0_mix(r4_SB, r4_RIGHTSB, 0.925);
                r522_include(r522_xn$createstroke$7Hrq()['start-from'](r4_SB, r520_top)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r522_ezhRight, r520_top)['heads-to'](r4_RIGHTWARD)['to-outline']());
                r522_include(r522_xn$createstroke$7Hrq()['start-from'](r522_ezhLeft, r522_yMidBar)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE, r522_yMidBar)['arc-hv-to'](r4_RIGHTSB, r0_mix(r522_yMidBar, r520_bot, 0.5))['to-outline']());
                r522_include(r4_XSHookLower(r520_bot, r4_SB, r0_mix(r4_SB, r4_RIGHTSB, 0.465), r4_RIGHTSB, (r522_yMidBar - r520_bot) / 2, r4_SHOOK));
                r522_xn$startfrom$1aao(r522_ezhLeft, r522_yMidBar);
                r522_xn$lineto$5sIl(r522_ezhLeft + r4_STROKE * r522_cor, r522_yMidBar);
                r522_xn$lineto$5sIl(r522_ezhRight, r520_top - r4_STROKE);
                r522_xn$lineto$5sIl(r522_ezhRight - r4_STROKE * r522_cor, r520_top - r4_STROKE);
                r522_xn$reverselast$3qIs();
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('Ezh', function _r4_t174() {
            var r526_currentGlyph, r526_xn$setwidth$9Jrj, r526_xn$assignunicode$7Hrq, r526_xn$startfrom$1aao, r526_xn$lineto$5sIl, r526_xn$curveto$1aao, r526_xn$cubicto$1aao, r526_xn$putshapes$9Jrj, r526_xn$reverselast$3qIs, r526_include, r526_xn$createstroke$7Hrq, r526_xn$setanchor$9Jrj, r526_xn$applytransform$1aao, r526_xn$dontexport$5sIl, _r526_t0, _r526_t1, _r526_t2, _r526_t3;
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
            r526_xn$applytransform$1aao = _r526_t0['apply-transform']['bind'](_r526_t0);
            r526_xn$dontexport$5sIl = function _r526_t3() {
                var _r528_t0, _r528_t1;
                return r526_currentGlyph['dontExport'] = true;
            };
            _r526_t0['gizmo'] = r4_globalTransform;
            _r526_t0['set-width'](r4_WIDTH);
            r526_xn$setwidth$9Jrj(r4_WIDTH);
            r526_xn$assignunicode$7Hrq(439);
            r526_include(r4_capitalMarks);
            r526_include(r4_ezhshape(r4_CAP, 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ezh', function _r4_t175() {
            var r530_currentGlyph, r530_xn$setwidth$9Jrj, r530_xn$assignunicode$7Hrq, r530_xn$startfrom$1aao, r530_xn$lineto$5sIl, r530_xn$curveto$1aao, r530_xn$cubicto$1aao, r530_xn$putshapes$9Jrj, r530_xn$reverselast$3qIs, r530_include, r530_xn$createstroke$7Hrq, r530_xn$setanchor$9Jrj, r530_xn$applytransform$1aao, r530_xn$dontexport$5sIl, _r530_t0, _r530_t1, _r530_t2, _r530_t3;
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
            r530_xn$applytransform$1aao = _r530_t0['apply-transform']['bind'](_r530_t0);
            r530_xn$dontexport$5sIl = function _r530_t3() {
                var _r532_t0, _r532_t1;
                return r530_currentGlyph['dontExport'] = true;
            };
            _r530_t0['gizmo'] = r4_globalTransform;
            _r530_t0['set-width'](r4_WIDTH);
            r530_xn$setwidth$9Jrj(r4_WIDTH);
            r530_xn$assignunicode$7Hrq(658);
            r530_include(r4_pMarks);
            r530_include(r4_ezhshape(r4_XH, r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh', function _r4_t176() {
            var r534_currentGlyph, r534_xn$setwidth$9Jrj, r534_xn$assignunicode$7Hrq, r534_xn$startfrom$1aao, r534_xn$lineto$5sIl, r534_xn$curveto$1aao, r534_xn$cubicto$1aao, r534_xn$putshapes$9Jrj, r534_xn$reverselast$3qIs, r534_include, r534_xn$createstroke$7Hrq, r534_xn$setanchor$9Jrj, r534_xn$applytransform$1aao, r534_xn$dontexport$5sIl, _r534_t0, _r534_t1, _r534_t2, _r534_t3;
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
            r534_xn$applytransform$1aao = _r534_t0['apply-transform']['bind'](_r534_t0);
            r534_xn$dontexport$5sIl = function _r534_t3() {
                var _r536_t0, _r536_t1;
                return r534_currentGlyph['dontExport'] = true;
            };
            _r534_t0['gizmo'] = r4_globalTransform;
            _r534_t0['set-width'](r4_WIDTH);
            r534_xn$assignunicode$7Hrq(643);
            r534_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t177() {
            var r538_currentGlyph, r538_xn$setwidth$9Jrj, r538_xn$assignunicode$7Hrq, r538_xn$startfrom$1aao, r538_xn$lineto$5sIl, r538_xn$curveto$1aao, r538_xn$cubicto$1aao, r538_xn$putshapes$9Jrj, r538_xn$reverselast$3qIs, r538_include, r538_xn$createstroke$7Hrq, r538_xn$setanchor$9Jrj, r538_xn$applytransform$1aao, r538_xn$dontexport$5sIl, _r538_t0, _r538_t1, _r538_t2, _r538_t3;
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
            r538_xn$applytransform$1aao = _r538_t0['apply-transform']['bind'](_r538_t0);
            r538_xn$dontexport$5sIl = function _r538_t3() {
                var _r540_t0, _r540_t1;
                return r538_currentGlyph['dontExport'] = true;
            };
            _r538_t0['gizmo'] = r4_globalTransform;
            _r538_t0['set-width'](r4_WIDTH);
            r538_xn$setwidth$9Jrj(r4_WIDTH);
            r538_xn$dontexport$5sIl();
            r538_include(r4_smallo(r4_CAP, 0, r4_SB, r4_RIGHTSB));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t178() {
            var r542_currentGlyph, r542_xn$setwidth$9Jrj, r542_xn$assignunicode$7Hrq, r542_xn$startfrom$1aao, r542_xn$lineto$5sIl, r542_xn$curveto$1aao, r542_xn$cubicto$1aao, r542_xn$putshapes$9Jrj, r542_xn$reverselast$3qIs, r542_include, r542_xn$createstroke$7Hrq, r542_xn$setanchor$9Jrj, r542_xn$applytransform$1aao, r542_xn$dontexport$5sIl, r542_fine, _r542_t0, _r542_t1, _r542_t2, _r542_t3;
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
            r542_xn$applytransform$1aao = _r542_t0['apply-transform']['bind'](_r542_t0);
            r542_xn$dontexport$5sIl = function _r542_t3() {
                var _r544_t0, _r544_t1;
                return r542_currentGlyph['dontExport'] = true;
            };
            _r542_t0['gizmo'] = r4_globalTransform;
            _r542_t0['set-width'](r4_WIDTH);
            r542_xn$setwidth$9Jrj(r4_WIDTH);
            r542_xn$dontexport$5sIl();
            r542_include(r4_glyphs['zero.unslashed']);
            r542_fine = r4_adviceBlackness(9);
            r542_include(r542_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.77))['set-width'](r542_fine, r542_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.77));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t179() {
            var r546_currentGlyph, r546_xn$setwidth$9Jrj, r546_xn$assignunicode$7Hrq, r546_xn$startfrom$1aao, r546_xn$lineto$5sIl, r546_xn$curveto$1aao, r546_xn$cubicto$1aao, r546_xn$putshapes$9Jrj, r546_xn$reverselast$3qIs, r546_include, r546_xn$createstroke$7Hrq, r546_xn$setanchor$9Jrj, r546_xn$applytransform$1aao, r546_xn$dontexport$5sIl, r546_radius, _r546_t0, _r546_t1, _r546_t2, _r546_t3;
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
            r546_xn$applytransform$1aao = _r546_t0['apply-transform']['bind'](_r546_t0);
            r546_xn$dontexport$5sIl = function _r546_t3() {
                var _r548_t0, _r548_t1;
                return r546_currentGlyph['dontExport'] = true;
            };
            _r546_t0['gizmo'] = r4_globalTransform;
            _r546_t0['set-width'](r4_WIDTH);
            r546_xn$setwidth$9Jrj(r4_WIDTH);
            r546_xn$dontexport$5sIl();
            r546_include(r4_glyphs['zero.unslashed']);
            r546_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r546_include([r4_Ring(r4_CAPMIDDLE + r546_radius, r4_CAPMIDDLE - r546_radius, r4_MIDDLE + r546_radius, r4_MIDDLE - r546_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t180() {
            var r550_currentGlyph, r550_xn$setwidth$9Jrj, r550_xn$assignunicode$7Hrq, r550_xn$startfrom$1aao, r550_xn$lineto$5sIl, r550_xn$curveto$1aao, r550_xn$cubicto$1aao, r550_xn$putshapes$9Jrj, r550_xn$reverselast$3qIs, r550_include, r550_xn$createstroke$7Hrq, r550_xn$setanchor$9Jrj, r550_xn$applytransform$1aao, r550_xn$dontexport$5sIl, _r550_t0, _r550_t1, _r550_t2, _r550_t3;
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
            r550_xn$applytransform$1aao = _r550_t0['apply-transform']['bind'](_r550_t0);
            r550_xn$dontexport$5sIl = function _r550_t3() {
                var _r552_t0, _r552_t1;
                return r550_currentGlyph['dontExport'] = true;
            };
            _r550_t0['gizmo'] = r4_globalTransform;
            _r550_t0['set-width'](r4_WIDTH);
            r550_xn$setwidth$9Jrj(r4_WIDTH);
            r550_xn$assignunicode$7Hrq('1');
            r550_include(r550_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD));
            r550_include(r550_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t181() {
            var r554_currentGlyph, r554_xn$setwidth$9Jrj, r554_xn$assignunicode$7Hrq, r554_xn$startfrom$1aao, r554_xn$lineto$5sIl, r554_xn$curveto$1aao, r554_xn$cubicto$1aao, r554_xn$putshapes$9Jrj, r554_xn$reverselast$3qIs, r554_include, r554_xn$createstroke$7Hrq, r554_xn$setanchor$9Jrj, r554_xn$applytransform$1aao, r554_xn$dontexport$5sIl, _r554_t0, _r554_t1, _r554_t2, _r554_t3;
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
            r554_xn$applytransform$1aao = _r554_t0['apply-transform']['bind'](_r554_t0);
            r554_xn$dontexport$5sIl = function _r554_t3() {
                var _r556_t0, _r556_t1;
                return r554_currentGlyph['dontExport'] = true;
            };
            _r554_t0['gizmo'] = r4_globalTransform;
            _r554_t0['set-width'](r4_WIDTH);
            r554_xn$setwidth$9Jrj(r4_WIDTH);
            r554_xn$assignunicode$7Hrq('2');
            r554_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r554_include(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r554_include(r554_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t182() {
            var r558_currentGlyph, r558_xn$setwidth$9Jrj, r558_xn$assignunicode$7Hrq, r558_xn$startfrom$1aao, r558_xn$lineto$5sIl, r558_xn$curveto$1aao, r558_xn$cubicto$1aao, r558_xn$putshapes$9Jrj, r558_xn$reverselast$3qIs, r558_include, r558_xn$createstroke$7Hrq, r558_xn$setanchor$9Jrj, r558_xn$applytransform$1aao, r558_xn$dontexport$5sIl, r558_threeRadius, _r558_t0, _r558_t1, _r558_t2, _r558_t3;
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
            r558_xn$applytransform$1aao = _r558_t0['apply-transform']['bind'](_r558_t0);
            r558_xn$dontexport$5sIl = function _r558_t3() {
                var _r560_t0, _r560_t1;
                return r558_currentGlyph['dontExport'] = true;
            };
            _r558_t0['gizmo'] = r4_globalTransform;
            _r558_t0['set-width'](r4_WIDTH);
            r558_xn$setwidth$9Jrj(r4_WIDTH);
            r558_xn$assignunicode$7Hrq('3');
            r558_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r558_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r558_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r558_include(r558_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r558_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r558_include(r558_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r558_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t183() {
            var r562_currentGlyph, r562_xn$setwidth$9Jrj, r562_xn$assignunicode$7Hrq, r562_xn$startfrom$1aao, r562_xn$lineto$5sIl, r562_xn$curveto$1aao, r562_xn$cubicto$1aao, r562_xn$putshapes$9Jrj, r562_xn$reverselast$3qIs, r562_include, r562_xn$createstroke$7Hrq, r562_xn$setanchor$9Jrj, r562_xn$applytransform$1aao, r562_xn$dontexport$5sIl, r562_bar, r562_vert, _r562_t0, _r562_t1, _r562_t2, _r562_t3;
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
            r562_xn$applytransform$1aao = _r562_t0['apply-transform']['bind'](_r562_t0);
            r562_xn$dontexport$5sIl = function _r562_t3() {
                var _r564_t0, _r564_t1;
                return r562_currentGlyph['dontExport'] = true;
            };
            _r562_t0['gizmo'] = r4_globalTransform;
            _r562_t0['set-width'](r4_WIDTH);
            r562_xn$setwidth$9Jrj(r4_WIDTH);
            r562_xn$assignunicode$7Hrq('4');
            r562_bar = r4_CAP * 0.4;
            r562_vert = r4_WIDTH * 0.55;
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r4_SB, r562_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r562_bar)['heads-to'](r4_RIGHTWARD));
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r562_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r562_vert, r4_CAP)['heads-to'](r4_UPWARD));
            r562_include(r562_xn$createstroke$7Hrq()['start-from'](r4_SB, r562_bar)['set-width'](0, r4_STROKE)['line-to'](r562_vert, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t184() {
            var r566_currentGlyph, r566_xn$setwidth$9Jrj, r566_xn$assignunicode$7Hrq, r566_xn$startfrom$1aao, r566_xn$lineto$5sIl, r566_xn$curveto$1aao, r566_xn$cubicto$1aao, r566_xn$putshapes$9Jrj, r566_xn$reverselast$3qIs, r566_include, r566_xn$createstroke$7Hrq, r566_xn$setanchor$9Jrj, r566_xn$applytransform$1aao, r566_xn$dontexport$5sIl, _r566_t0, _r566_t1, _r566_t2, _r566_t3;
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
            r566_xn$applytransform$1aao = _r566_t0['apply-transform']['bind'](_r566_t0);
            r566_xn$dontexport$5sIl = function _r566_t3() {
                var _r568_t0, _r568_t1;
                return r566_currentGlyph['dontExport'] = true;
            };
            _r566_t0['gizmo'] = r4_globalTransform;
            _r566_t0['set-width'](r4_WIDTH);
            r566_xn$setwidth$9Jrj(r4_WIDTH);
            r566_xn$assignunicode$7Hrq('5');
            r566_include(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r566_include(r566_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD));
            r566_include(r566_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r566_include(r566_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t185() {
            var r570_currentGlyph, r570_xn$setwidth$9Jrj, r570_xn$assignunicode$7Hrq, r570_xn$startfrom$1aao, r570_xn$lineto$5sIl, r570_xn$curveto$1aao, r570_xn$cubicto$1aao, r570_xn$putshapes$9Jrj, r570_xn$reverselast$3qIs, r570_include, r570_xn$createstroke$7Hrq, r570_xn$setanchor$9Jrj, r570_xn$applytransform$1aao, r570_xn$dontexport$5sIl, r570_ymiddlea, _r570_t0, _r570_t1, _r570_t2, _r570_t3;
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
            r570_xn$applytransform$1aao = _r570_t0['apply-transform']['bind'](_r570_t0);
            r570_xn$dontexport$5sIl = function _r570_t3() {
                var _r572_t0, _r572_t1;
                return r570_currentGlyph['dontExport'] = true;
            };
            _r570_t0['gizmo'] = r4_globalTransform;
            _r570_t0['set-width'](r4_WIDTH);
            r570_xn$setwidth$9Jrj(r4_WIDTH);
            r570_xn$assignunicode$7Hrq('6');
            r570_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r570_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r570_include(r570_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r570_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r570_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t186() {
            var r574_currentGlyph, r574_xn$setwidth$9Jrj, r574_xn$assignunicode$7Hrq, r574_xn$startfrom$1aao, r574_xn$lineto$5sIl, r574_xn$curveto$1aao, r574_xn$cubicto$1aao, r574_xn$putshapes$9Jrj, r574_xn$reverselast$3qIs, r574_include, r574_xn$createstroke$7Hrq, r574_xn$setanchor$9Jrj, r574_xn$applytransform$1aao, r574_xn$dontexport$5sIl, r574_cor, r574_x, _r574_t0, _r574_t1, _r574_t2, _r574_t3;
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
            r574_xn$applytransform$1aao = _r574_t0['apply-transform']['bind'](_r574_t0);
            r574_xn$dontexport$5sIl = function _r574_t3() {
                var _r576_t0, _r576_t1;
                return r574_currentGlyph['dontExport'] = true;
            };
            _r574_t0['gizmo'] = r4_globalTransform;
            _r574_t0['set-width'](r4_WIDTH);
            r574_xn$setwidth$9Jrj(r4_WIDTH);
            r574_xn$assignunicode$7Hrq('7');
            r574_include(r574_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r574_cor = 1.15;
            r574_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r574_xn$startfrom$1aao(r574_x, 0);
            r574_xn$lineto$5sIl(r574_x + r4_STROKE * r574_cor, 0);
            r574_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r574_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r574_cor, r4_CAP - r4_STROKE);
            r574_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t187() {
            var r578_currentGlyph, r578_xn$setwidth$9Jrj, r578_xn$assignunicode$7Hrq, r578_xn$startfrom$1aao, r578_xn$lineto$5sIl, r578_xn$curveto$1aao, r578_xn$cubicto$1aao, r578_xn$putshapes$9Jrj, r578_xn$reverselast$3qIs, r578_include, r578_xn$createstroke$7Hrq, r578_xn$setanchor$9Jrj, r578_xn$applytransform$1aao, r578_xn$dontexport$5sIl, r578_sma, r578_smb, r578_p, _r578_t0, _r578_t1, _r578_t2, _r578_t3;
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
            r578_xn$applytransform$1aao = _r578_t0['apply-transform']['bind'](_r578_t0);
            r578_xn$dontexport$5sIl = function _r578_t3() {
                var _r580_t0, _r580_t1;
                return r578_currentGlyph['dontExport'] = true;
            };
            _r578_t0['gizmo'] = r4_globalTransform;
            _r578_t0['set-width'](r4_WIDTH);
            r578_xn$setwidth$9Jrj(r4_WIDTH);
            r578_xn$assignunicode$7Hrq('8');
            r578_sma = r4_SMOOTHA * 0.975;
            r578_smb = r4_SMOOTHB * 0.975;
            r578_p = 0.96;
            r578_include(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r578_p), r4_CAP - r578_sma * r578_p, r4_RIGHTSB, r578_sma));
            r578_include(r4_xsStrand(r4_SB, r578_smb, r0_mix(r4_SB, r4_RIGHTSB, r578_p), r4_CAP - r578_smb * r578_p));
            r578_include(r578_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r578_p), r4_CAP - r578_smb * r578_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r578_p), r4_CAP - r578_sma * r578_p));
            r578_include(r578_xn$createstroke$7Hrq()['start-from'](r4_SB, r578_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r578_sma));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t188() {
            var r582_currentGlyph, r582_xn$setwidth$9Jrj, r582_xn$assignunicode$7Hrq, r582_xn$startfrom$1aao, r582_xn$lineto$5sIl, r582_xn$curveto$1aao, r582_xn$cubicto$1aao, r582_xn$putshapes$9Jrj, r582_xn$reverselast$3qIs, r582_include, r582_xn$createstroke$7Hrq, r582_xn$setanchor$9Jrj, r582_xn$applytransform$1aao, r582_xn$dontexport$5sIl, r582_ymiddlea, _r582_t0, _r582_t1, _r582_t2, _r582_t3;
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
            r582_xn$applytransform$1aao = _r582_t0['apply-transform']['bind'](_r582_t0);
            r582_xn$dontexport$5sIl = function _r582_t3() {
                var _r584_t0, _r584_t1;
                return r582_currentGlyph['dontExport'] = true;
            };
            _r582_t0['gizmo'] = r4_globalTransform;
            _r582_t0['set-width'](r4_WIDTH);
            r582_xn$setwidth$9Jrj(r4_WIDTH);
            r582_xn$assignunicode$7Hrq('9');
            r582_include(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r582_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r582_include(r582_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r582_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4));
            r582_include(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r0_mix(r4_SB, r4_RIGHTSB, 0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t189() {
            var r586_currentGlyph, r586_xn$setwidth$9Jrj, r586_xn$assignunicode$7Hrq, r586_xn$startfrom$1aao, r586_xn$lineto$5sIl, r586_xn$curveto$1aao, r586_xn$cubicto$1aao, r586_xn$putshapes$9Jrj, r586_xn$reverselast$3qIs, r586_include, r586_xn$createstroke$7Hrq, r586_xn$setanchor$9Jrj, r586_xn$applytransform$1aao, r586_xn$dontexport$5sIl, _r586_t0, _r586_t1, _r586_t2, _r586_t3;
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
            r586_xn$applytransform$1aao = _r586_t0['apply-transform']['bind'](_r586_t0);
            r586_xn$dontexport$5sIl = function _r586_t3() {
                var _r588_t0, _r588_t1;
                return r586_currentGlyph['dontExport'] = true;
            };
            _r586_t0['gizmo'] = r4_globalTransform;
            _r586_t0['set-width'](r4_WIDTH);
            r586_xn$setwidth$9Jrj(r4_WIDTH);
            r586_xn$assignunicode$7Hrq('$');
            r586_include(r4_glyphs['S']);
            r586_include(r586_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r586_include(r586_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t190() {
            var r590_currentGlyph, r590_xn$setwidth$9Jrj, r590_xn$assignunicode$7Hrq, r590_xn$startfrom$1aao, r590_xn$lineto$5sIl, r590_xn$curveto$1aao, r590_xn$cubicto$1aao, r590_xn$putshapes$9Jrj, r590_xn$reverselast$3qIs, r590_include, r590_xn$createstroke$7Hrq, r590_xn$setanchor$9Jrj, r590_xn$applytransform$1aao, r590_xn$dontexport$5sIl, r590_fine, r590_p, r590_l, r590_pr, r590_q, r590_r, r590_s, _r590_t0, _r590_t1, _r590_t2, _r590_t3;
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
            r590_xn$applytransform$1aao = _r590_t0['apply-transform']['bind'](_r590_t0);
            r590_xn$dontexport$5sIl = function _r590_t3() {
                var _r592_t0, _r592_t1;
                return r590_currentGlyph['dontExport'] = true;
            };
            _r590_t0['gizmo'] = r4_globalTransform;
            _r590_t0['set-width'](r4_WIDTH);
            r590_xn$setwidth$9Jrj(r4_WIDTH);
            r590_xn$assignunicode$7Hrq('&');
            r590_fine = r4_adviceBlackness(3.5);
            r590_p = 0.85;
            r590_l = 0.05;
            r590_pr = 0.9;
            r590_q = 0.45;
            r590_r = 1.1;
            r590_s = 0;
            r590_include(r590_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r590_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r590_p), r4_CAP - r4_SMOOTHB * r590_pr, r4_HALFSTROKE, r590_fine / 2));
            r590_include(r590_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r590_p), r4_CAP - r4_SMOOTHB * r590_pr)['set-width'](r590_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r590_p, r590_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r590_l), r4_CAP - r4_SMOOTHA * r590_pr));
            r590_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r590_l), r4_CAP - r4_SMOOTHA * r590_pr, r0_mix(r4_SB, r4_RIGHTSB, r590_r), r4_SMOOTHA * r590_s, r590_fine / 2, r590_fine / 2, null, null, r4_SMOOTHA * r590_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t191() {
            var r594_currentGlyph, r594_xn$setwidth$9Jrj, r594_xn$assignunicode$7Hrq, r594_xn$startfrom$1aao, r594_xn$lineto$5sIl, r594_xn$curveto$1aao, r594_xn$cubicto$1aao, r594_xn$putshapes$9Jrj, r594_xn$reverselast$3qIs, r594_include, r594_xn$createstroke$7Hrq, r594_xn$setanchor$9Jrj, r594_xn$applytransform$1aao, r594_xn$dontexport$5sIl, r594_top, r594_bot, r594_otop, r594_obot, r594_sw, r594_m1, r594_m2, r594_sma, r594_smb, _r594_t0, _r594_t1, _r594_t2, _r594_t3;
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
            r594_xn$applytransform$1aao = _r594_t0['apply-transform']['bind'](_r594_t0);
            r594_xn$dontexport$5sIl = function _r594_t3() {
                var _r596_t0, _r596_t1;
                return r594_currentGlyph['dontExport'] = true;
            };
            _r594_t0['gizmo'] = r4_globalTransform;
            _r594_t0['set-width'](r4_WIDTH);
            r594_xn$setwidth$9Jrj(r4_WIDTH);
            r594_xn$assignunicode$7Hrq('@');
            r594_top = r4_CAP + r4_HALFSTROKE;
            r594_bot = r4_DESCENDER + r4_HALFSTROKE;
            r594_otop = r0_mix(r594_bot, r594_top, 0.75);
            r594_obot = r0_mix(r594_top, r594_bot, 0.8);
            r594_sw = r4_adviceBlackness(3.5);
            r594_m1 = r0_mix(r4_SB + r594_sw, r4_RIGHTSB - r594_sw, 0.47) - r594_sw / 2;
            r594_m2 = r0_mix(r594_m1, r4_RIGHTSB, 0.5);
            r594_sma = r4_SMOOTHA * ((r4_RIGHTSB - r594_m1) / (r4_RIGHTSB - r4_SB));
            r594_smb = r4_SMOOTHB * ((r4_RIGHTSB - r594_m1) / (r4_RIGHTSB - r4_SB));
            r594_include(r594_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r594_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r594_sw, 0)['line-to'](r594_m2, r594_otop - r4_O)['arc-hv-to'](r594_m1, r594_otop - r594_sma)['line-to'](r594_m1, r594_obot + r594_smb)['arc-vh-to'](r594_m2 + r4_STROKE * r4_globalTransform['yx'], r594_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r594_obot + r594_sma)['line-to'](r4_RIGHTSB, r594_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r594_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r594_top - r4_SMOOTHA)['set-width'](r594_sw, 0)['line-to'](r4_SB, r594_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r594_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r594_bot + r4_O)['heads-to'](r4_RIGHTWARD)['set-samples'](4));
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
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t192() {
            var r598_currentGlyph, r598_xn$setwidth$9Jrj, r598_xn$assignunicode$7Hrq, r598_xn$startfrom$1aao, r598_xn$lineto$5sIl, r598_xn$curveto$1aao, r598_xn$cubicto$1aao, r598_xn$putshapes$9Jrj, r598_xn$reverselast$3qIs, r598_include, r598_xn$createstroke$7Hrq, r598_xn$setanchor$9Jrj, r598_xn$applytransform$1aao, r598_xn$dontexport$5sIl, r598_p, _r598_t0, _r598_t1, _r598_t2, _r598_t3;
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
            r598_xn$applytransform$1aao = _r598_t0['apply-transform']['bind'](_r598_t0);
            r598_xn$dontexport$5sIl = function _r598_t3() {
                var _r600_t0, _r600_t1;
                return r598_currentGlyph['dontExport'] = true;
            };
            _r598_t0['gizmo'] = r4_globalTransform;
            _r598_t0['set-width'](r4_WIDTH);
            r598_xn$setwidth$9Jrj(r4_WIDTH);
            r598_xn$assignunicode$7Hrq('(');
            r598_p = 0.6;
            r598_include(r598_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r598_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r598_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t193() {
            var r602_currentGlyph, r602_xn$setwidth$9Jrj, r602_xn$assignunicode$7Hrq, r602_xn$startfrom$1aao, r602_xn$lineto$5sIl, r602_xn$curveto$1aao, r602_xn$cubicto$1aao, r602_xn$putshapes$9Jrj, r602_xn$reverselast$3qIs, r602_include, r602_xn$createstroke$7Hrq, r602_xn$setanchor$9Jrj, r602_xn$applytransform$1aao, r602_xn$dontexport$5sIl, r602_p, _r602_t0, _r602_t1, _r602_t2, _r602_t3;
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
            r602_xn$applytransform$1aao = _r602_t0['apply-transform']['bind'](_r602_t0);
            r602_xn$dontexport$5sIl = function _r602_t3() {
                var _r604_t0, _r604_t1;
                return r602_currentGlyph['dontExport'] = true;
            };
            _r602_t0['gizmo'] = r4_globalTransform;
            _r602_t0['set-width'](r4_WIDTH);
            r602_xn$setwidth$9Jrj(r4_WIDTH);
            r602_xn$assignunicode$7Hrq(')');
            r602_p = 0.6;
            r602_include(r602_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r602_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r602_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t194() {
            var r606_currentGlyph, r606_xn$setwidth$9Jrj, r606_xn$assignunicode$7Hrq, r606_xn$startfrom$1aao, r606_xn$lineto$5sIl, r606_xn$curveto$1aao, r606_xn$cubicto$1aao, r606_xn$putshapes$9Jrj, r606_xn$reverselast$3qIs, r606_include, r606_xn$createstroke$7Hrq, r606_xn$setanchor$9Jrj, r606_xn$applytransform$1aao, r606_xn$dontexport$5sIl, _r606_t0, _r606_t1, _r606_t2, _r606_t3;
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
            r606_xn$applytransform$1aao = _r606_t0['apply-transform']['bind'](_r606_t0);
            r606_xn$dontexport$5sIl = function _r606_t3() {
                var _r608_t0, _r608_t1;
                return r606_currentGlyph['dontExport'] = true;
            };
            _r606_t0['gizmo'] = r4_globalTransform;
            _r606_t0['set-width'](r4_WIDTH);
            r606_xn$setwidth$9Jrj(r4_WIDTH);
            r606_xn$assignunicode$7Hrq('[');
            r606_include(r606_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r606_include(r606_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r606_include(r606_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t195() {
            var r610_currentGlyph, r610_xn$setwidth$9Jrj, r610_xn$assignunicode$7Hrq, r610_xn$startfrom$1aao, r610_xn$lineto$5sIl, r610_xn$curveto$1aao, r610_xn$cubicto$1aao, r610_xn$putshapes$9Jrj, r610_xn$reverselast$3qIs, r610_include, r610_xn$createstroke$7Hrq, r610_xn$setanchor$9Jrj, r610_xn$applytransform$1aao, r610_xn$dontexport$5sIl, _r610_t0, _r610_t1, _r610_t2, _r610_t3;
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
            r610_xn$applytransform$1aao = _r610_t0['apply-transform']['bind'](_r610_t0);
            r610_xn$dontexport$5sIl = function _r610_t3() {
                var _r612_t0, _r612_t1;
                return r610_currentGlyph['dontExport'] = true;
            };
            _r610_t0['gizmo'] = r4_globalTransform;
            _r610_t0['set-width'](r4_WIDTH);
            r610_xn$setwidth$9Jrj(r4_WIDTH);
            r610_xn$assignunicode$7Hrq(']');
            r610_include(r610_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r610_include(r610_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r610_include(r610_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t196() {
            var r614_currentGlyph, r614_xn$setwidth$9Jrj, r614_xn$assignunicode$7Hrq, r614_xn$startfrom$1aao, r614_xn$lineto$5sIl, r614_xn$curveto$1aao, r614_xn$cubicto$1aao, r614_xn$putshapes$9Jrj, r614_xn$reverselast$3qIs, r614_include, r614_xn$createstroke$7Hrq, r614_xn$setanchor$9Jrj, r614_xn$applytransform$1aao, r614_xn$dontexport$5sIl, r614_parenCenter, r614_radius, _r614_t0, _r614_t1, _r614_t2, _r614_t3;
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
            r614_xn$applytransform$1aao = _r614_t0['apply-transform']['bind'](_r614_t0);
            r614_xn$dontexport$5sIl = function _r614_t3() {
                var _r616_t0, _r616_t1;
                return r614_currentGlyph['dontExport'] = true;
            };
            _r614_t0['gizmo'] = r4_globalTransform;
            _r614_t0['set-width'](r4_WIDTH);
            r614_xn$setwidth$9Jrj(r4_WIDTH);
            r614_xn$assignunicode$7Hrq('{');
            r614_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r614_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r614_parenCenter;
            r614_include(r614_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r614_parenCenter, r4_parenTop - r614_radius)['line-to'](r614_parenCenter, r4_parenMid + r614_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r614_include(r614_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r614_parenCenter, r4_parenBot + r614_radius)['line-to'](r614_parenCenter, r4_parenMid - r614_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t197() {
            var r618_currentGlyph, r618_xn$setwidth$9Jrj, r618_xn$assignunicode$7Hrq, r618_xn$startfrom$1aao, r618_xn$lineto$5sIl, r618_xn$curveto$1aao, r618_xn$cubicto$1aao, r618_xn$putshapes$9Jrj, r618_xn$reverselast$3qIs, r618_include, r618_xn$createstroke$7Hrq, r618_xn$setanchor$9Jrj, r618_xn$applytransform$1aao, r618_xn$dontexport$5sIl, r618_parenCenter, r618_radius, _r618_t0, _r618_t1, _r618_t2, _r618_t3;
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
            r618_xn$applytransform$1aao = _r618_t0['apply-transform']['bind'](_r618_t0);
            r618_xn$dontexport$5sIl = function _r618_t3() {
                var _r620_t0, _r620_t1;
                return r618_currentGlyph['dontExport'] = true;
            };
            _r618_t0['gizmo'] = r4_globalTransform;
            _r618_t0['set-width'](r4_WIDTH);
            r618_xn$setwidth$9Jrj(r4_WIDTH);
            r618_xn$assignunicode$7Hrq('}');
            r618_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r618_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r618_parenCenter;
            r618_include(r618_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r618_parenCenter, r4_parenTop - r618_radius)['line-to'](r618_parenCenter, r4_parenMid + r618_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r618_include(r618_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r618_parenCenter, r4_parenBot + r618_radius)['line-to'](r618_parenCenter, r4_parenMid - r618_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t198() {
            var r622_currentGlyph, r622_xn$setwidth$9Jrj, r622_xn$assignunicode$7Hrq, r622_xn$startfrom$1aao, r622_xn$lineto$5sIl, r622_xn$curveto$1aao, r622_xn$cubicto$1aao, r622_xn$putshapes$9Jrj, r622_xn$reverselast$3qIs, r622_include, r622_xn$createstroke$7Hrq, r622_xn$setanchor$9Jrj, r622_xn$applytransform$1aao, r622_xn$dontexport$5sIl, _r622_t0, _r622_t1, _r622_t2, _r622_t3;
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
            r622_xn$applytransform$1aao = _r622_t0['apply-transform']['bind'](_r622_t0);
            r622_xn$dontexport$5sIl = function _r622_t3() {
                var _r624_t0, _r624_t1;
                return r622_currentGlyph['dontExport'] = true;
            };
            _r622_t0['gizmo'] = r4_globalTransform;
            _r622_t0['set-width'](r4_WIDTH);
            r622_xn$setwidth$9Jrj(r4_WIDTH);
            r622_xn$assignunicode$7Hrq('.');
            r622_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t199() {
            var r626_currentGlyph, r626_xn$setwidth$9Jrj, r626_xn$assignunicode$7Hrq, r626_xn$startfrom$1aao, r626_xn$lineto$5sIl, r626_xn$curveto$1aao, r626_xn$cubicto$1aao, r626_xn$putshapes$9Jrj, r626_xn$reverselast$3qIs, r626_include, r626_xn$createstroke$7Hrq, r626_xn$setanchor$9Jrj, r626_xn$applytransform$1aao, r626_xn$dontexport$5sIl, _r626_t0, _r626_t1, _r626_t2, _r626_t3;
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
            r626_xn$applytransform$1aao = _r626_t0['apply-transform']['bind'](_r626_t0);
            r626_xn$dontexport$5sIl = function _r626_t3() {
                var _r628_t0, _r628_t1;
                return r626_currentGlyph['dontExport'] = true;
            };
            _r626_t0['gizmo'] = r4_globalTransform;
            _r626_t0['set-width'](r4_WIDTH);
            r626_xn$setwidth$9Jrj(r4_WIDTH);
            r626_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t200() {
            var r630_currentGlyph, r630_xn$setwidth$9Jrj, r630_xn$assignunicode$7Hrq, r630_xn$startfrom$1aao, r630_xn$lineto$5sIl, r630_xn$curveto$1aao, r630_xn$cubicto$1aao, r630_xn$putshapes$9Jrj, r630_xn$reverselast$3qIs, r630_include, r630_xn$createstroke$7Hrq, r630_xn$setanchor$9Jrj, r630_xn$applytransform$1aao, r630_xn$dontexport$5sIl, r630_sw, _r630_t0, _r630_t1, _r630_t2, _r630_t3;
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
            r630_xn$applytransform$1aao = _r630_t0['apply-transform']['bind'](_r630_t0);
            r630_xn$dontexport$5sIl = function _r630_t3() {
                var _r632_t0, _r632_t1;
                return r630_currentGlyph['dontExport'] = true;
            };
            _r630_t0['gizmo'] = r4_globalTransform;
            _r630_t0['set-width'](r4_WIDTH);
            r630_xn$setwidth$9Jrj(r4_WIDTH);
            r630_xn$assignunicode$7Hrq(',');
            r630_include(r4_glyphs['period']);
            r630_sw = r4_PERIODSIZE * 0.5;
            r630_include(r630_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r630_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t201() {
            var r634_currentGlyph, r634_xn$setwidth$9Jrj, r634_xn$assignunicode$7Hrq, r634_xn$startfrom$1aao, r634_xn$lineto$5sIl, r634_xn$curveto$1aao, r634_xn$cubicto$1aao, r634_xn$putshapes$9Jrj, r634_xn$reverselast$3qIs, r634_include, r634_xn$createstroke$7Hrq, r634_xn$setanchor$9Jrj, r634_xn$applytransform$1aao, r634_xn$dontexport$5sIl, _r634_t0, _r634_t1, _r634_t2, _r634_t3;
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
            r634_xn$applytransform$1aao = _r634_t0['apply-transform']['bind'](_r634_t0);
            r634_xn$dontexport$5sIl = function _r634_t3() {
                var _r636_t0, _r636_t1;
                return r634_currentGlyph['dontExport'] = true;
            };
            _r634_t0['gizmo'] = r4_globalTransform;
            _r634_t0['set-width'](r4_WIDTH);
            r634_xn$setwidth$9Jrj(r4_WIDTH);
            r634_xn$assignunicode$7Hrq(':');
            r634_include(r4_glyphs['period']);
            r634_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t202() {
            var r638_currentGlyph, r638_xn$setwidth$9Jrj, r638_xn$assignunicode$7Hrq, r638_xn$startfrom$1aao, r638_xn$lineto$5sIl, r638_xn$curveto$1aao, r638_xn$cubicto$1aao, r638_xn$putshapes$9Jrj, r638_xn$reverselast$3qIs, r638_include, r638_xn$createstroke$7Hrq, r638_xn$setanchor$9Jrj, r638_xn$applytransform$1aao, r638_xn$dontexport$5sIl, _r638_t0, _r638_t1, _r638_t2, _r638_t3;
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
            r638_xn$applytransform$1aao = _r638_t0['apply-transform']['bind'](_r638_t0);
            r638_xn$dontexport$5sIl = function _r638_t3() {
                var _r640_t0, _r640_t1;
                return r638_currentGlyph['dontExport'] = true;
            };
            _r638_t0['gizmo'] = r4_globalTransform;
            _r638_t0['set-width'](r4_WIDTH);
            r638_xn$setwidth$9Jrj(r4_WIDTH);
            r638_xn$assignunicode$7Hrq(';');
            r638_include(r4_glyphs['comma']);
            r638_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t203() {
            var r642_currentGlyph, r642_xn$setwidth$9Jrj, r642_xn$assignunicode$7Hrq, r642_xn$startfrom$1aao, r642_xn$lineto$5sIl, r642_xn$curveto$1aao, r642_xn$cubicto$1aao, r642_xn$putshapes$9Jrj, r642_xn$reverselast$3qIs, r642_include, r642_xn$createstroke$7Hrq, r642_xn$setanchor$9Jrj, r642_xn$applytransform$1aao, r642_xn$dontexport$5sIl, _r642_t0, _r642_t1, _r642_t2, _r642_t3;
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
            r642_xn$applytransform$1aao = _r642_t0['apply-transform']['bind'](_r642_t0);
            r642_xn$dontexport$5sIl = function _r642_t3() {
                var _r644_t0, _r644_t1;
                return r642_currentGlyph['dontExport'] = true;
            };
            _r642_t0['gizmo'] = r4_globalTransform;
            _r642_t0['set-width'](r4_WIDTH);
            r642_xn$setwidth$9Jrj(r4_WIDTH);
            r642_xn$assignunicode$7Hrq('?');
            r642_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r642_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r642_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t204() {
            var r646_currentGlyph, r646_xn$setwidth$9Jrj, r646_xn$assignunicode$7Hrq, r646_xn$startfrom$1aao, r646_xn$lineto$5sIl, r646_xn$curveto$1aao, r646_xn$cubicto$1aao, r646_xn$putshapes$9Jrj, r646_xn$reverselast$3qIs, r646_include, r646_xn$createstroke$7Hrq, r646_xn$setanchor$9Jrj, r646_xn$applytransform$1aao, r646_xn$dontexport$5sIl, _r646_t0, _r646_t1, _r646_t2, _r646_t3;
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
            r646_xn$applytransform$1aao = _r646_t0['apply-transform']['bind'](_r646_t0);
            r646_xn$dontexport$5sIl = function _r646_t3() {
                var _r648_t0, _r648_t1;
                return r646_currentGlyph['dontExport'] = true;
            };
            _r646_t0['gizmo'] = r4_globalTransform;
            _r646_t0['set-width'](r4_WIDTH);
            r646_xn$setwidth$9Jrj(r4_WIDTH);
            r646_xn$assignunicode$7Hrq('!');
            r646_include(r646_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r646_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t205() {
            var r650_currentGlyph, r650_xn$setwidth$9Jrj, r650_xn$assignunicode$7Hrq, r650_xn$startfrom$1aao, r650_xn$lineto$5sIl, r650_xn$curveto$1aao, r650_xn$cubicto$1aao, r650_xn$putshapes$9Jrj, r650_xn$reverselast$3qIs, r650_include, r650_xn$createstroke$7Hrq, r650_xn$setanchor$9Jrj, r650_xn$applytransform$1aao, r650_xn$dontexport$5sIl, _r650_t0, _r650_t1, _r650_t2, _r650_t3;
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
            r650_xn$applytransform$1aao = _r650_t0['apply-transform']['bind'](_r650_t0);
            r650_xn$dontexport$5sIl = function _r650_t3() {
                var _r652_t0, _r652_t1;
                return r650_currentGlyph['dontExport'] = true;
            };
            _r650_t0['gizmo'] = r4_globalTransform;
            _r650_t0['set-width'](r4_WIDTH);
            r650_xn$setwidth$9Jrj(r4_WIDTH);
            r650_xn$assignunicode$7Hrq('_');
            r650_include(r650_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t206() {
            var r654_currentGlyph, r654_xn$setwidth$9Jrj, r654_xn$assignunicode$7Hrq, r654_xn$startfrom$1aao, r654_xn$lineto$5sIl, r654_xn$curveto$1aao, r654_xn$cubicto$1aao, r654_xn$putshapes$9Jrj, r654_xn$reverselast$3qIs, r654_include, r654_xn$createstroke$7Hrq, r654_xn$setanchor$9Jrj, r654_xn$applytransform$1aao, r654_xn$dontexport$5sIl, _r654_t0, _r654_t1, _r654_t2, _r654_t3;
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
            r654_xn$applytransform$1aao = _r654_t0['apply-transform']['bind'](_r654_t0);
            r654_xn$dontexport$5sIl = function _r654_t3() {
                var _r656_t0, _r656_t1;
                return r654_currentGlyph['dontExport'] = true;
            };
            _r654_t0['gizmo'] = r4_globalTransform;
            _r654_t0['set-width'](r4_WIDTH);
            r654_xn$setwidth$9Jrj(r4_WIDTH);
            r654_xn$assignunicode$7Hrq('-');
            r654_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t207() {
            var r658_currentGlyph, r658_xn$setwidth$9Jrj, r658_xn$assignunicode$7Hrq, r658_xn$startfrom$1aao, r658_xn$lineto$5sIl, r658_xn$curveto$1aao, r658_xn$cubicto$1aao, r658_xn$putshapes$9Jrj, r658_xn$reverselast$3qIs, r658_include, r658_xn$createstroke$7Hrq, r658_xn$setanchor$9Jrj, r658_xn$applytransform$1aao, r658_xn$dontexport$5sIl, _r658_t0, _r658_t1, _r658_t2, _r658_t3;
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
            r658_xn$applytransform$1aao = _r658_t0['apply-transform']['bind'](_r658_t0);
            r658_xn$dontexport$5sIl = function _r658_t3() {
                var _r660_t0, _r660_t1;
                return r658_currentGlyph['dontExport'] = true;
            };
            _r658_t0['gizmo'] = r4_globalTransform;
            _r658_t0['set-width'](r4_WIDTH);
            r658_xn$setwidth$9Jrj(r4_WIDTH);
            r658_xn$assignunicode$7Hrq('+');
            r658_include(r4_glyphs['hyphen']);
            r658_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t208() {
            var r662_currentGlyph, r662_xn$setwidth$9Jrj, r662_xn$assignunicode$7Hrq, r662_xn$startfrom$1aao, r662_xn$lineto$5sIl, r662_xn$curveto$1aao, r662_xn$cubicto$1aao, r662_xn$putshapes$9Jrj, r662_xn$reverselast$3qIs, r662_include, r662_xn$createstroke$7Hrq, r662_xn$setanchor$9Jrj, r662_xn$applytransform$1aao, r662_xn$dontexport$5sIl, _r662_t0, _r662_t1, _r662_t2, _r662_t3;
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
            r662_xn$applytransform$1aao = _r662_t0['apply-transform']['bind'](_r662_t0);
            r662_xn$dontexport$5sIl = function _r662_t3() {
                var _r664_t0, _r664_t1;
                return r662_currentGlyph['dontExport'] = true;
            };
            _r662_t0['gizmo'] = r4_globalTransform;
            _r662_t0['set-width'](r4_WIDTH);
            r662_xn$setwidth$9Jrj(r4_WIDTH);
            r662_xn$assignunicode$7Hrq('=');
            r662_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r662_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t209() {
            var r666_currentGlyph, r666_xn$setwidth$9Jrj, r666_xn$assignunicode$7Hrq, r666_xn$startfrom$1aao, r666_xn$lineto$5sIl, r666_xn$curveto$1aao, r666_xn$cubicto$1aao, r666_xn$putshapes$9Jrj, r666_xn$reverselast$3qIs, r666_include, r666_xn$createstroke$7Hrq, r666_xn$setanchor$9Jrj, r666_xn$applytransform$1aao, r666_xn$dontexport$5sIl, _r666_t0, _r666_t1, _r666_t2, _r666_t3;
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
            r666_xn$applytransform$1aao = _r666_t0['apply-transform']['bind'](_r666_t0);
            r666_xn$dontexport$5sIl = function _r666_t3() {
                var _r668_t0, _r668_t1;
                return r666_currentGlyph['dontExport'] = true;
            };
            _r666_t0['gizmo'] = r4_globalTransform;
            _r666_t0['set-width'](r4_WIDTH);
            r666_xn$setwidth$9Jrj(r4_WIDTH);
            r666_xn$assignunicode$7Hrq('|');
            r666_include(r666_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t210() {
            var r670_currentGlyph, r670_xn$setwidth$9Jrj, r670_xn$assignunicode$7Hrq, r670_xn$startfrom$1aao, r670_xn$lineto$5sIl, r670_xn$curveto$1aao, r670_xn$cubicto$1aao, r670_xn$putshapes$9Jrj, r670_xn$reverselast$3qIs, r670_include, r670_xn$createstroke$7Hrq, r670_xn$setanchor$9Jrj, r670_xn$applytransform$1aao, r670_xn$dontexport$5sIl, r670_cor, _r670_t0, _r670_t1, _r670_t2, _r670_t3;
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
            r670_xn$applytransform$1aao = _r670_t0['apply-transform']['bind'](_r670_t0);
            r670_xn$dontexport$5sIl = function _r670_t3() {
                var _r672_t0, _r672_t1;
                return r670_currentGlyph['dontExport'] = true;
            };
            _r670_t0['gizmo'] = r4_globalTransform;
            _r670_t0['set-width'](r4_WIDTH);
            r670_xn$setwidth$9Jrj(r4_WIDTH);
            r670_xn$assignunicode$7Hrq('/');
            r670_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r670_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r670_xn$lineto$5sIl(r4_SB + r4_STROKE * r670_cor, r4_parenBot);
            r670_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r670_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r670_cor, r4_parenTop);
            r670_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t211() {
            var r674_currentGlyph, r674_xn$setwidth$9Jrj, r674_xn$assignunicode$7Hrq, r674_xn$startfrom$1aao, r674_xn$lineto$5sIl, r674_xn$curveto$1aao, r674_xn$cubicto$1aao, r674_xn$putshapes$9Jrj, r674_xn$reverselast$3qIs, r674_include, r674_xn$createstroke$7Hrq, r674_xn$setanchor$9Jrj, r674_xn$applytransform$1aao, r674_xn$dontexport$5sIl, r674_cor, _r674_t0, _r674_t1, _r674_t2, _r674_t3;
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
            r674_xn$applytransform$1aao = _r674_t0['apply-transform']['bind'](_r674_t0);
            r674_xn$dontexport$5sIl = function _r674_t3() {
                var _r676_t0, _r676_t1;
                return r674_currentGlyph['dontExport'] = true;
            };
            _r674_t0['gizmo'] = r4_globalTransform;
            _r674_t0['set-width'](r4_WIDTH);
            r674_xn$setwidth$9Jrj(r4_WIDTH);
            r674_xn$assignunicode$7Hrq('\\');
            r674_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r674_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r674_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r674_cor, r4_parenBot);
            r674_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r674_xn$lineto$5sIl(r4_SB + r4_STROKE * r674_cor, r4_parenTop);
            r674_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t212() {
            var r678_currentGlyph, r678_xn$setwidth$9Jrj, r678_xn$assignunicode$7Hrq, r678_xn$startfrom$1aao, r678_xn$lineto$5sIl, r678_xn$curveto$1aao, r678_xn$cubicto$1aao, r678_xn$putshapes$9Jrj, r678_xn$reverselast$3qIs, r678_include, r678_xn$createstroke$7Hrq, r678_xn$setanchor$9Jrj, r678_xn$applytransform$1aao, r678_xn$dontexport$5sIl, r678_fine, _r678_t0, _r678_t1, _r678_t2, _r678_t3;
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
            r678_xn$applytransform$1aao = _r678_t0['apply-transform']['bind'](_r678_t0);
            r678_xn$dontexport$5sIl = function _r678_t3() {
                var _r680_t0, _r680_t1;
                return r678_currentGlyph['dontExport'] = true;
            };
            _r678_t0['gizmo'] = r4_globalTransform;
            _r678_t0['set-width'](r4_WIDTH);
            r678_xn$setwidth$9Jrj(r4_WIDTH);
            r678_xn$assignunicode$7Hrq('#');
            r678_fine = r4_adviceBlackness(4);
            r678_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r678_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r678_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r678_fine, r4_parenTop - r678_fine, r678_fine));
            r678_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r678_fine, r4_parenTop - r678_fine, r678_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t213() {
            var r682_currentGlyph, r682_xn$setwidth$9Jrj, r682_xn$assignunicode$7Hrq, r682_xn$startfrom$1aao, r682_xn$lineto$5sIl, r682_xn$curveto$1aao, r682_xn$cubicto$1aao, r682_xn$putshapes$9Jrj, r682_xn$reverselast$3qIs, r682_include, r682_xn$createstroke$7Hrq, r682_xn$setanchor$9Jrj, r682_xn$applytransform$1aao, r682_xn$dontexport$5sIl, r682_top, r682_bot, _r682_t0, _r682_t1, _r682_t2, _r682_t3;
            _r682_t0 = this;
            r682_currentGlyph = _r682_t0;
            r682_xn$setwidth$9Jrj = _r682_t0['set-width']['bind'](_r682_t0);
            r682_xn$assignunicode$7Hrq = function _r682_t2(r683_code) {
                var r683_code, _r683_t0, _r683_t1;
                r682_currentGlyph['assign-unicode'](r683_code);
                return r4_unicodeGlyphs[r682_currentGlyph['unicode'][r682_currentGlyph['unicode']['length'] - 1]] = r682_currentGlyph;
            };
            r682_xn$startfrom$1aao = _r682_t0['start-from']['bind'](_r682_t0);
            r682_xn$lineto$5sIl = _r682_t0['line-to']['bind'](_r682_t0);
            r682_xn$curveto$1aao = _r682_t0['curve-to']['bind'](_r682_t0);
            r682_xn$cubicto$1aao = _r682_t0['cubic-to']['bind'](_r682_t0);
            r682_xn$putshapes$9Jrj = _r682_t0['put-shapes']['bind'](_r682_t0);
            r682_xn$reverselast$3qIs = _r682_t0['reverse-last']['bind'](_r682_t0);
            r682_include = _r682_t0['include']['bind'](_r682_t0);
            r682_xn$createstroke$7Hrq = _r682_t0['create-stroke']['bind'](_r682_t0);
            r682_xn$setanchor$9Jrj = _r682_t0['set-anchor']['bind'](_r682_t0);
            r682_xn$applytransform$1aao = _r682_t0['apply-transform']['bind'](_r682_t0);
            r682_xn$dontexport$5sIl = function _r682_t3() {
                var _r684_t0, _r684_t1;
                return r682_currentGlyph['dontExport'] = true;
            };
            _r682_t0['gizmo'] = r4_globalTransform;
            _r682_t0['set-width'](r4_WIDTH);
            r682_xn$setwidth$9Jrj(r4_WIDTH);
            r682_xn$assignunicode$7Hrq('<');
            r682_top = r0_mix(0, r4_CAP, 0.75);
            r682_bot = r0_mix(0, r4_CAP, 0.1);
            r682_include(r682_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r682_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r682_top, r682_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r682_include(r682_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r682_top, r682_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r682_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t214() {
            var r686_currentGlyph, r686_xn$setwidth$9Jrj, r686_xn$assignunicode$7Hrq, r686_xn$startfrom$1aao, r686_xn$lineto$5sIl, r686_xn$curveto$1aao, r686_xn$cubicto$1aao, r686_xn$putshapes$9Jrj, r686_xn$reverselast$3qIs, r686_include, r686_xn$createstroke$7Hrq, r686_xn$setanchor$9Jrj, r686_xn$applytransform$1aao, r686_xn$dontexport$5sIl, r686_top, r686_bot, _r686_t0, _r686_t1, _r686_t2, _r686_t3;
            _r686_t0 = this;
            r686_currentGlyph = _r686_t0;
            r686_xn$setwidth$9Jrj = _r686_t0['set-width']['bind'](_r686_t0);
            r686_xn$assignunicode$7Hrq = function _r686_t2(r687_code) {
                var r687_code, _r687_t0, _r687_t1;
                r686_currentGlyph['assign-unicode'](r687_code);
                return r4_unicodeGlyphs[r686_currentGlyph['unicode'][r686_currentGlyph['unicode']['length'] - 1]] = r686_currentGlyph;
            };
            r686_xn$startfrom$1aao = _r686_t0['start-from']['bind'](_r686_t0);
            r686_xn$lineto$5sIl = _r686_t0['line-to']['bind'](_r686_t0);
            r686_xn$curveto$1aao = _r686_t0['curve-to']['bind'](_r686_t0);
            r686_xn$cubicto$1aao = _r686_t0['cubic-to']['bind'](_r686_t0);
            r686_xn$putshapes$9Jrj = _r686_t0['put-shapes']['bind'](_r686_t0);
            r686_xn$reverselast$3qIs = _r686_t0['reverse-last']['bind'](_r686_t0);
            r686_include = _r686_t0['include']['bind'](_r686_t0);
            r686_xn$createstroke$7Hrq = _r686_t0['create-stroke']['bind'](_r686_t0);
            r686_xn$setanchor$9Jrj = _r686_t0['set-anchor']['bind'](_r686_t0);
            r686_xn$applytransform$1aao = _r686_t0['apply-transform']['bind'](_r686_t0);
            r686_xn$dontexport$5sIl = function _r686_t3() {
                var _r688_t0, _r688_t1;
                return r686_currentGlyph['dontExport'] = true;
            };
            _r686_t0['gizmo'] = r4_globalTransform;
            _r686_t0['set-width'](r4_WIDTH);
            r686_xn$setwidth$9Jrj(r4_WIDTH);
            r686_xn$assignunicode$7Hrq('>');
            r686_top = r0_mix(0, r4_CAP, 0.75);
            r686_bot = r0_mix(0, r4_CAP, 0.1);
            r686_include(r686_xn$createstroke$7Hrq()['start-from'](r4_SB, r686_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r686_top, r686_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r686_include(r686_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r686_top, r686_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r686_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t215() {
            var r690_currentGlyph, r690_xn$setwidth$9Jrj, r690_xn$assignunicode$7Hrq, r690_xn$startfrom$1aao, r690_xn$lineto$5sIl, r690_xn$curveto$1aao, r690_xn$cubicto$1aao, r690_xn$putshapes$9Jrj, r690_xn$reverselast$3qIs, r690_include, r690_xn$createstroke$7Hrq, r690_xn$setanchor$9Jrj, r690_xn$applytransform$1aao, r690_xn$dontexport$5sIl, _r690_t0, _r690_t1, _r690_t2, _r690_t3;
            _r690_t0 = this;
            r690_currentGlyph = _r690_t0;
            r690_xn$setwidth$9Jrj = _r690_t0['set-width']['bind'](_r690_t0);
            r690_xn$assignunicode$7Hrq = function _r690_t2(r691_code) {
                var r691_code, _r691_t0, _r691_t1;
                r690_currentGlyph['assign-unicode'](r691_code);
                return r4_unicodeGlyphs[r690_currentGlyph['unicode'][r690_currentGlyph['unicode']['length'] - 1]] = r690_currentGlyph;
            };
            r690_xn$startfrom$1aao = _r690_t0['start-from']['bind'](_r690_t0);
            r690_xn$lineto$5sIl = _r690_t0['line-to']['bind'](_r690_t0);
            r690_xn$curveto$1aao = _r690_t0['curve-to']['bind'](_r690_t0);
            r690_xn$cubicto$1aao = _r690_t0['cubic-to']['bind'](_r690_t0);
            r690_xn$putshapes$9Jrj = _r690_t0['put-shapes']['bind'](_r690_t0);
            r690_xn$reverselast$3qIs = _r690_t0['reverse-last']['bind'](_r690_t0);
            r690_include = _r690_t0['include']['bind'](_r690_t0);
            r690_xn$createstroke$7Hrq = _r690_t0['create-stroke']['bind'](_r690_t0);
            r690_xn$setanchor$9Jrj = _r690_t0['set-anchor']['bind'](_r690_t0);
            r690_xn$applytransform$1aao = _r690_t0['apply-transform']['bind'](_r690_t0);
            r690_xn$dontexport$5sIl = function _r690_t3() {
                var _r692_t0, _r692_t1;
                return r690_currentGlyph['dontExport'] = true;
            };
            _r690_t0['gizmo'] = r4_globalTransform;
            _r690_t0['set-width'](r4_WIDTH);
            r690_xn$setwidth$9Jrj(r4_WIDTH);
            r690_xn$assignunicode$7Hrq(39);
            r690_include(r690_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t216() {
            var r694_currentGlyph, r694_xn$setwidth$9Jrj, r694_xn$assignunicode$7Hrq, r694_xn$startfrom$1aao, r694_xn$lineto$5sIl, r694_xn$curveto$1aao, r694_xn$cubicto$1aao, r694_xn$putshapes$9Jrj, r694_xn$reverselast$3qIs, r694_include, r694_xn$createstroke$7Hrq, r694_xn$setanchor$9Jrj, r694_xn$applytransform$1aao, r694_xn$dontexport$5sIl, _r694_t0, _r694_t1, _r694_t2, _r694_t3;
            _r694_t0 = this;
            r694_currentGlyph = _r694_t0;
            r694_xn$setwidth$9Jrj = _r694_t0['set-width']['bind'](_r694_t0);
            r694_xn$assignunicode$7Hrq = function _r694_t2(r695_code) {
                var r695_code, _r695_t0, _r695_t1;
                r694_currentGlyph['assign-unicode'](r695_code);
                return r4_unicodeGlyphs[r694_currentGlyph['unicode'][r694_currentGlyph['unicode']['length'] - 1]] = r694_currentGlyph;
            };
            r694_xn$startfrom$1aao = _r694_t0['start-from']['bind'](_r694_t0);
            r694_xn$lineto$5sIl = _r694_t0['line-to']['bind'](_r694_t0);
            r694_xn$curveto$1aao = _r694_t0['curve-to']['bind'](_r694_t0);
            r694_xn$cubicto$1aao = _r694_t0['cubic-to']['bind'](_r694_t0);
            r694_xn$putshapes$9Jrj = _r694_t0['put-shapes']['bind'](_r694_t0);
            r694_xn$reverselast$3qIs = _r694_t0['reverse-last']['bind'](_r694_t0);
            r694_include = _r694_t0['include']['bind'](_r694_t0);
            r694_xn$createstroke$7Hrq = _r694_t0['create-stroke']['bind'](_r694_t0);
            r694_xn$setanchor$9Jrj = _r694_t0['set-anchor']['bind'](_r694_t0);
            r694_xn$applytransform$1aao = _r694_t0['apply-transform']['bind'](_r694_t0);
            r694_xn$dontexport$5sIl = function _r694_t3() {
                var _r696_t0, _r696_t1;
                return r694_currentGlyph['dontExport'] = true;
            };
            _r694_t0['gizmo'] = r4_globalTransform;
            _r694_t0['set-width'](r4_WIDTH);
            r694_xn$setwidth$9Jrj(r4_WIDTH);
            r694_xn$assignunicode$7Hrq(34);
            r694_include(r694_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r694_include(r694_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t217() {
            var r698_currentGlyph, r698_xn$setwidth$9Jrj, r698_xn$assignunicode$7Hrq, r698_xn$startfrom$1aao, r698_xn$lineto$5sIl, r698_xn$curveto$1aao, r698_xn$cubicto$1aao, r698_xn$putshapes$9Jrj, r698_xn$reverselast$3qIs, r698_include, r698_xn$createstroke$7Hrq, r698_xn$setanchor$9Jrj, r698_xn$applytransform$1aao, r698_xn$dontexport$5sIl, r698_radius, r698_centery, r698_fine, r698_final, r698_j, _r698_t0, _r698_t1, _r698_t2, _r698_t3, _r698_t4, _r698_t5;
            _r698_t2 = this;
            r698_currentGlyph = _r698_t2;
            r698_xn$setwidth$9Jrj = _r698_t2['set-width']['bind'](_r698_t2);
            r698_xn$assignunicode$7Hrq = function _r698_t4(r699_code) {
                var r699_code, _r699_t0, _r699_t1;
                r698_currentGlyph['assign-unicode'](r699_code);
                return r4_unicodeGlyphs[r698_currentGlyph['unicode'][r698_currentGlyph['unicode']['length'] - 1]] = r698_currentGlyph;
            };
            r698_xn$startfrom$1aao = _r698_t2['start-from']['bind'](_r698_t2);
            r698_xn$lineto$5sIl = _r698_t2['line-to']['bind'](_r698_t2);
            r698_xn$curveto$1aao = _r698_t2['curve-to']['bind'](_r698_t2);
            r698_xn$cubicto$1aao = _r698_t2['cubic-to']['bind'](_r698_t2);
            r698_xn$putshapes$9Jrj = _r698_t2['put-shapes']['bind'](_r698_t2);
            r698_xn$reverselast$3qIs = _r698_t2['reverse-last']['bind'](_r698_t2);
            r698_include = _r698_t2['include']['bind'](_r698_t2);
            r698_xn$createstroke$7Hrq = _r698_t2['create-stroke']['bind'](_r698_t2);
            r698_xn$setanchor$9Jrj = _r698_t2['set-anchor']['bind'](_r698_t2);
            r698_xn$applytransform$1aao = _r698_t2['apply-transform']['bind'](_r698_t2);
            r698_xn$dontexport$5sIl = function _r698_t5() {
                var _r700_t0, _r700_t1;
                return r698_currentGlyph['dontExport'] = true;
            };
            _r698_t2['gizmo'] = r4_globalTransform;
            _r698_t2['set-width'](r4_WIDTH);
            r698_xn$setwidth$9Jrj(r4_WIDTH);
            r698_xn$assignunicode$7Hrq('*');
            r698_radius = r4_LONGJUT * 1.2;
            r698_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r698_fine = r4_STROKE * 0.4;
            r698_final = 0.5 * Math['min'](r4_STROKE, r698_radius * Math['PI'] * 2 / 10);
            _r698_t0 = 0;
            _r698_t1 = 5;
            r698_j = _r698_t0;
            for (; r698_j < _r698_t1; r698_j = r698_j + 1) {
                r698_include(r698_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r698_centery)['set-width'](r698_fine, r698_fine)['line-to'](r4_MIDDLE + r698_radius * Math['sin'](r698_j / 5 * Math['PI'] * 2), r698_centery + r698_radius * Math['cos'](r698_j / 5 * Math['PI'] * 2))['set-width'](r698_final, r698_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t218() {
            var r703_currentGlyph, r703_xn$setwidth$9Jrj, r703_xn$assignunicode$7Hrq, r703_xn$startfrom$1aao, r703_xn$lineto$5sIl, r703_xn$curveto$1aao, r703_xn$cubicto$1aao, r703_xn$putshapes$9Jrj, r703_xn$reverselast$3qIs, r703_include, r703_xn$createstroke$7Hrq, r703_xn$setanchor$9Jrj, r703_xn$applytransform$1aao, r703_xn$dontexport$5sIl, r703_percentDotSize, r703_cor, _r703_t0, _r703_t1, _r703_t2, _r703_t3;
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
            r703_xn$applytransform$1aao = _r703_t0['apply-transform']['bind'](_r703_t0);
            r703_xn$dontexport$5sIl = function _r703_t3() {
                var _r705_t0, _r705_t1;
                return r703_currentGlyph['dontExport'] = true;
            };
            _r703_t0['gizmo'] = r4_globalTransform;
            _r703_t0['set-width'](r4_WIDTH);
            r703_xn$setwidth$9Jrj(r4_WIDTH);
            r703_xn$assignunicode$7Hrq('%');
            r703_percentDotSize = 0.3;
            r703_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r703_xn$startfrom$1aao(r4_SB, 0);
            r703_xn$lineto$5sIl(r4_SB + r4_STROKE * r703_cor, 0);
            r703_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r703_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r703_cor, r4_CAP);
            r703_include(r703_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r703_include(r703_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cent', function _r4_t219() {
            var r707_currentGlyph, r707_xn$setwidth$9Jrj, r707_xn$assignunicode$7Hrq, r707_xn$startfrom$1aao, r707_xn$lineto$5sIl, r707_xn$curveto$1aao, r707_xn$cubicto$1aao, r707_xn$putshapes$9Jrj, r707_xn$reverselast$3qIs, r707_include, r707_xn$createstroke$7Hrq, r707_xn$setanchor$9Jrj, r707_xn$applytransform$1aao, r707_xn$dontexport$5sIl, _r707_t0, _r707_t1, _r707_t2, _r707_t3;
            _r707_t0 = this;
            r707_currentGlyph = _r707_t0;
            r707_xn$setwidth$9Jrj = _r707_t0['set-width']['bind'](_r707_t0);
            r707_xn$assignunicode$7Hrq = function _r707_t2(r708_code) {
                var r708_code, _r708_t0, _r708_t1;
                r707_currentGlyph['assign-unicode'](r708_code);
                return r4_unicodeGlyphs[r707_currentGlyph['unicode'][r707_currentGlyph['unicode']['length'] - 1]] = r707_currentGlyph;
            };
            r707_xn$startfrom$1aao = _r707_t0['start-from']['bind'](_r707_t0);
            r707_xn$lineto$5sIl = _r707_t0['line-to']['bind'](_r707_t0);
            r707_xn$curveto$1aao = _r707_t0['curve-to']['bind'](_r707_t0);
            r707_xn$cubicto$1aao = _r707_t0['cubic-to']['bind'](_r707_t0);
            r707_xn$putshapes$9Jrj = _r707_t0['put-shapes']['bind'](_r707_t0);
            r707_xn$reverselast$3qIs = _r707_t0['reverse-last']['bind'](_r707_t0);
            r707_include = _r707_t0['include']['bind'](_r707_t0);
            r707_xn$createstroke$7Hrq = _r707_t0['create-stroke']['bind'](_r707_t0);
            r707_xn$setanchor$9Jrj = _r707_t0['set-anchor']['bind'](_r707_t0);
            r707_xn$applytransform$1aao = _r707_t0['apply-transform']['bind'](_r707_t0);
            r707_xn$dontexport$5sIl = function _r707_t3() {
                var _r709_t0, _r709_t1;
                return r707_currentGlyph['dontExport'] = true;
            };
            _r707_t0['gizmo'] = r4_globalTransform;
            _r707_t0['set-width'](r4_WIDTH);
            r707_xn$assignunicode$7Hrq(162);
            r707_include(r4_glyphs['c'], r4_AS_BASE);
            r707_include(r707_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_DESCENDER / 2));
            r707_include(r707_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('yen', function _r4_t220() {
            var r711_currentGlyph, r711_xn$setwidth$9Jrj, r711_xn$assignunicode$7Hrq, r711_xn$startfrom$1aao, r711_xn$lineto$5sIl, r711_xn$curveto$1aao, r711_xn$cubicto$1aao, r711_xn$putshapes$9Jrj, r711_xn$reverselast$3qIs, r711_include, r711_xn$createstroke$7Hrq, r711_xn$setanchor$9Jrj, r711_xn$applytransform$1aao, r711_xn$dontexport$5sIl, _r711_t0, _r711_t1, _r711_t2, _r711_t3;
            _r711_t0 = this;
            r711_currentGlyph = _r711_t0;
            r711_xn$setwidth$9Jrj = _r711_t0['set-width']['bind'](_r711_t0);
            r711_xn$assignunicode$7Hrq = function _r711_t2(r712_code) {
                var r712_code, _r712_t0, _r712_t1;
                r711_currentGlyph['assign-unicode'](r712_code);
                return r4_unicodeGlyphs[r711_currentGlyph['unicode'][r711_currentGlyph['unicode']['length'] - 1]] = r711_currentGlyph;
            };
            r711_xn$startfrom$1aao = _r711_t0['start-from']['bind'](_r711_t0);
            r711_xn$lineto$5sIl = _r711_t0['line-to']['bind'](_r711_t0);
            r711_xn$curveto$1aao = _r711_t0['curve-to']['bind'](_r711_t0);
            r711_xn$cubicto$1aao = _r711_t0['cubic-to']['bind'](_r711_t0);
            r711_xn$putshapes$9Jrj = _r711_t0['put-shapes']['bind'](_r711_t0);
            r711_xn$reverselast$3qIs = _r711_t0['reverse-last']['bind'](_r711_t0);
            r711_include = _r711_t0['include']['bind'](_r711_t0);
            r711_xn$createstroke$7Hrq = _r711_t0['create-stroke']['bind'](_r711_t0);
            r711_xn$setanchor$9Jrj = _r711_t0['set-anchor']['bind'](_r711_t0);
            r711_xn$applytransform$1aao = _r711_t0['apply-transform']['bind'](_r711_t0);
            r711_xn$dontexport$5sIl = function _r711_t3() {
                var _r713_t0, _r713_t1;
                return r711_currentGlyph['dontExport'] = true;
            };
            _r711_t0['gizmo'] = r4_globalTransform;
            _r711_t0['set-width'](r4_WIDTH);
            r711_xn$assignunicode$7Hrq(165);
            r711_include(r4_glyphs['Y'], r4_AS_BASE);
            r711_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.45));
            r711_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.25));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('section', function _r4_t221() {
            var r715_currentGlyph, r715_xn$setwidth$9Jrj, r715_xn$assignunicode$7Hrq, r715_xn$startfrom$1aao, r715_xn$lineto$5sIl, r715_xn$curveto$1aao, r715_xn$cubicto$1aao, r715_xn$putshapes$9Jrj, r715_xn$reverselast$3qIs, r715_include, r715_xn$createstroke$7Hrq, r715_xn$setanchor$9Jrj, r715_xn$applytransform$1aao, r715_xn$dontexport$5sIl, r715_top, r715_bot, r715_sma, r715_extension1, r715_extension2, r715_extension3x, r715_extension3y, _r715_t0, _r715_t1, _r715_t2, _r715_t3;
            _r715_t0 = this;
            r715_currentGlyph = _r715_t0;
            r715_xn$setwidth$9Jrj = _r715_t0['set-width']['bind'](_r715_t0);
            r715_xn$assignunicode$7Hrq = function _r715_t2(r716_code) {
                var r716_code, _r716_t0, _r716_t1;
                r715_currentGlyph['assign-unicode'](r716_code);
                return r4_unicodeGlyphs[r715_currentGlyph['unicode'][r715_currentGlyph['unicode']['length'] - 1]] = r715_currentGlyph;
            };
            r715_xn$startfrom$1aao = _r715_t0['start-from']['bind'](_r715_t0);
            r715_xn$lineto$5sIl = _r715_t0['line-to']['bind'](_r715_t0);
            r715_xn$curveto$1aao = _r715_t0['curve-to']['bind'](_r715_t0);
            r715_xn$cubicto$1aao = _r715_t0['cubic-to']['bind'](_r715_t0);
            r715_xn$putshapes$9Jrj = _r715_t0['put-shapes']['bind'](_r715_t0);
            r715_xn$reverselast$3qIs = _r715_t0['reverse-last']['bind'](_r715_t0);
            r715_include = _r715_t0['include']['bind'](_r715_t0);
            r715_xn$createstroke$7Hrq = _r715_t0['create-stroke']['bind'](_r715_t0);
            r715_xn$setanchor$9Jrj = _r715_t0['set-anchor']['bind'](_r715_t0);
            r715_xn$applytransform$1aao = _r715_t0['apply-transform']['bind'](_r715_t0);
            r715_xn$dontexport$5sIl = function _r715_t3() {
                var _r717_t0, _r717_t1;
                return r715_currentGlyph['dontExport'] = true;
            };
            _r715_t0['gizmo'] = r4_globalTransform;
            _r715_t0['set-width'](r4_WIDTH);
            r715_xn$assignunicode$7Hrq(167);
            r715_top = r4_parenTop;
            r715_bot = r4_parenBot;
            r715_sma = r4_SMOOTHA * 0.85;
            r715_extension1 = 0.5;
            r715_extension2 = 0.625;
            r715_extension3x = 0.5;
            r715_extension3y = r0_mix(r715_extension1, 1 - r715_sma / (r715_top - r715_bot), 0.5);
            r715_include(r4_XSHookUpper(r715_top, r4_SB, r4_MIDDLE, r4_RIGHTSB, r715_sma, r4_HOOK));
            r715_include(r4_sStrand(r715_top - r715_sma, r0_mix(r715_bot, r715_top, r715_extension1)));
            r715_include(r4_sStrand(r0_mix(r715_top, r715_bot, r715_extension1), r715_bot + r715_sma));
            r715_include(r4_XSHookLower(r715_bot, r4_SB, r4_MIDDLE, r4_RIGHTSB, r715_sma, r4_HOOK));
            r715_include(r715_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r0_mix(r715_top, r715_bot, r715_extension1) - r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_SB + r4_HALFSTROKE, r0_mix(r715_bot, r715_top, r715_extension2), r0_mix(r4_SB + r4_HALFSTROKE, r4_RIGHTSB - r4_HALFSTROKE, r715_extension3x), r0_mix(r715_bot, r715_top, r715_extension3y)));
            r715_include(r715_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r715_bot, r715_top, r715_extension1) + r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r715_top, r715_bot, r715_extension2), r0_mix(r4_RIGHTSB - r4_HALFSTROKE, r4_SB + r4_HALFSTROKE, r715_extension3x), r0_mix(r715_top, r715_bot, r715_extension3y)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plusminus', function _r4_t222() {
            var r719_currentGlyph, r719_xn$setwidth$9Jrj, r719_xn$assignunicode$7Hrq, r719_xn$startfrom$1aao, r719_xn$lineto$5sIl, r719_xn$curveto$1aao, r719_xn$cubicto$1aao, r719_xn$putshapes$9Jrj, r719_xn$reverselast$3qIs, r719_include, r719_xn$createstroke$7Hrq, r719_xn$setanchor$9Jrj, r719_xn$applytransform$1aao, r719_xn$dontexport$5sIl, _r719_t0, _r719_t1, _r719_t2, _r719_t3;
            _r719_t0 = this;
            r719_currentGlyph = _r719_t0;
            r719_xn$setwidth$9Jrj = _r719_t0['set-width']['bind'](_r719_t0);
            r719_xn$assignunicode$7Hrq = function _r719_t2(r720_code) {
                var r720_code, _r720_t0, _r720_t1;
                r719_currentGlyph['assign-unicode'](r720_code);
                return r4_unicodeGlyphs[r719_currentGlyph['unicode'][r719_currentGlyph['unicode']['length'] - 1]] = r719_currentGlyph;
            };
            r719_xn$startfrom$1aao = _r719_t0['start-from']['bind'](_r719_t0);
            r719_xn$lineto$5sIl = _r719_t0['line-to']['bind'](_r719_t0);
            r719_xn$curveto$1aao = _r719_t0['curve-to']['bind'](_r719_t0);
            r719_xn$cubicto$1aao = _r719_t0['cubic-to']['bind'](_r719_t0);
            r719_xn$putshapes$9Jrj = _r719_t0['put-shapes']['bind'](_r719_t0);
            r719_xn$reverselast$3qIs = _r719_t0['reverse-last']['bind'](_r719_t0);
            r719_include = _r719_t0['include']['bind'](_r719_t0);
            r719_xn$createstroke$7Hrq = _r719_t0['create-stroke']['bind'](_r719_t0);
            r719_xn$setanchor$9Jrj = _r719_t0['set-anchor']['bind'](_r719_t0);
            r719_xn$applytransform$1aao = _r719_t0['apply-transform']['bind'](_r719_t0);
            r719_xn$dontexport$5sIl = function _r719_t3() {
                var _r721_t0, _r721_t1;
                return r719_currentGlyph['dontExport'] = true;
            };
            _r719_t0['gizmo'] = r4_globalTransform;
            _r719_t0['set-width'](r4_WIDTH);
            r719_xn$assignunicode$7Hrq(177);
            r719_include(r4_glyphs['underscore']);
            r719_include(r4_glyphs['plus']);
            return void 0;
        });
        r4_isAboveMark = function _r4_t223(r722_mark) {
            var r722_mark, _r722_t0, _r722_t1;
            return r722_mark && r722_mark['anchors'] && r722_mark['anchors']['above'] && r722_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t232 = r4_allFound = false;
                        else
                            _r4_t232 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t234 = r4_hasMarkAbove = true;
                        else
                            _r4_t234 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t237 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t237 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t239 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t239 = void 0;
                        _r4_t236 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t241(r725_part) {
                            var r725_part, _r725_t0, _r725_t1;
                            return r725_part['name'];
                        })['join']('_'), function _r4_t242() {
                            var r727_currentGlyph, r727_xn$setwidth$9Jrj, r727_xn$assignunicode$7Hrq, r727_xn$startfrom$1aao, r727_xn$lineto$5sIl, r727_xn$curveto$1aao, r727_xn$cubicto$1aao, r727_xn$putshapes$9Jrj, r727_xn$reverselast$3qIs, r727_include, r727_xn$createstroke$7Hrq, r727_xn$setanchor$9Jrj, r727_xn$applytransform$1aao, r727_xn$dontexport$5sIl, r727_part, _r727_t0, _r727_t1, _r727_t2, _r727_t3, _r727_t4, _r727_t5, _r727_t6;
                            _r727_t3 = this;
                            r727_currentGlyph = _r727_t3;
                            r727_xn$setwidth$9Jrj = _r727_t3['set-width']['bind'](_r727_t3);
                            r727_xn$assignunicode$7Hrq = function _r727_t5(r728_code) {
                                var r728_code, _r728_t0, _r728_t1;
                                r727_currentGlyph['assign-unicode'](r728_code);
                                return r4_unicodeGlyphs[r727_currentGlyph['unicode'][r727_currentGlyph['unicode']['length'] - 1]] = r727_currentGlyph;
                            };
                            r727_xn$startfrom$1aao = _r727_t3['start-from']['bind'](_r727_t3);
                            r727_xn$lineto$5sIl = _r727_t3['line-to']['bind'](_r727_t3);
                            r727_xn$curveto$1aao = _r727_t3['curve-to']['bind'](_r727_t3);
                            r727_xn$cubicto$1aao = _r727_t3['cubic-to']['bind'](_r727_t3);
                            r727_xn$putshapes$9Jrj = _r727_t3['put-shapes']['bind'](_r727_t3);
                            r727_xn$reverselast$3qIs = _r727_t3['reverse-last']['bind'](_r727_t3);
                            r727_include = _r727_t3['include']['bind'](_r727_t3);
                            r727_xn$createstroke$7Hrq = _r727_t3['create-stroke']['bind'](_r727_t3);
                            r727_xn$setanchor$9Jrj = _r727_t3['set-anchor']['bind'](_r727_t3);
                            r727_xn$applytransform$1aao = _r727_t3['apply-transform']['bind'](_r727_t3);
                            r727_xn$dontexport$5sIl = function _r727_t6() {
                                var _r729_t0, _r729_t1;
                                return r727_currentGlyph['dontExport'] = true;
                            };
                            _r727_t3['gizmo'] = r4_globalTransform;
                            _r727_t3['set-width'](r4_WIDTH);
                            r727_xn$assignunicode$7Hrq(r4_code);
                            r727_include(r4_parts[0], r4_AS_BASE);
                            _r727_t0 = r4_parts['slice'](1);
                            _r727_t1 = _r727_t0['length'];
                            _r727_t2 = 0;
                            for (; _r727_t2 < _r727_t1; _r727_t2 = _r727_t2 + 1) {
                                r727_part = _r727_t0[_r727_t2];
                                r727_include(r727_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t225 = _r4_t236;
                }
                _r4_t224 = _r4_t225;
            } else
                _r4_t224 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t226() {
            var r732_currentGlyph, r732_xn$setwidth$9Jrj, r732_xn$assignunicode$7Hrq, r732_xn$startfrom$1aao, r732_xn$lineto$5sIl, r732_xn$curveto$1aao, r732_xn$cubicto$1aao, r732_xn$putshapes$9Jrj, r732_xn$reverselast$3qIs, r732_include, r732_xn$createstroke$7Hrq, r732_xn$setanchor$9Jrj, r732_xn$applytransform$1aao, r732_xn$dontexport$5sIl, _r732_t0, _r732_t1, _r732_t2, _r732_t3;
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
            r732_xn$applytransform$1aao = _r732_t0['apply-transform']['bind'](_r732_t0);
            r732_xn$dontexport$5sIl = function _r732_t3() {
                var _r734_t0, _r734_t1;
                return r732_currentGlyph['dontExport'] = true;
            };
            _r732_t0['gizmo'] = r4_globalTransform;
            _r732_t0['set-width'](r4_WIDTH);
            r732_xn$assignunicode$7Hrq('`');
            r732_include(r4_glyphs['space'], r4_AS_BASE);
            r732_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t227() {
            var r736_currentGlyph, r736_xn$setwidth$9Jrj, r736_xn$assignunicode$7Hrq, r736_xn$startfrom$1aao, r736_xn$lineto$5sIl, r736_xn$curveto$1aao, r736_xn$cubicto$1aao, r736_xn$putshapes$9Jrj, r736_xn$reverselast$3qIs, r736_include, r736_xn$createstroke$7Hrq, r736_xn$setanchor$9Jrj, r736_xn$applytransform$1aao, r736_xn$dontexport$5sIl, _r736_t0, _r736_t1, _r736_t2, _r736_t3;
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
            r736_xn$applytransform$1aao = _r736_t0['apply-transform']['bind'](_r736_t0);
            r736_xn$dontexport$5sIl = function _r736_t3() {
                var _r738_t0, _r738_t1;
                return r736_currentGlyph['dontExport'] = true;
            };
            _r736_t0['gizmo'] = r4_globalTransform;
            _r736_t0['set-width'](r4_WIDTH);
            r736_xn$assignunicode$7Hrq(180);
            r736_include(r4_glyphs['space'], r4_AS_BASE);
            r736_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t228() {
            var r740_currentGlyph, r740_xn$setwidth$9Jrj, r740_xn$assignunicode$7Hrq, r740_xn$startfrom$1aao, r740_xn$lineto$5sIl, r740_xn$curveto$1aao, r740_xn$cubicto$1aao, r740_xn$putshapes$9Jrj, r740_xn$reverselast$3qIs, r740_include, r740_xn$createstroke$7Hrq, r740_xn$setanchor$9Jrj, r740_xn$applytransform$1aao, r740_xn$dontexport$5sIl, _r740_t0, _r740_t1, _r740_t2, _r740_t3;
            _r740_t0 = this;
            r740_currentGlyph = _r740_t0;
            r740_xn$setwidth$9Jrj = _r740_t0['set-width']['bind'](_r740_t0);
            r740_xn$assignunicode$7Hrq = function _r740_t2(r741_code) {
                var r741_code, _r741_t0, _r741_t1;
                r740_currentGlyph['assign-unicode'](r741_code);
                return r4_unicodeGlyphs[r740_currentGlyph['unicode'][r740_currentGlyph['unicode']['length'] - 1]] = r740_currentGlyph;
            };
            r740_xn$startfrom$1aao = _r740_t0['start-from']['bind'](_r740_t0);
            r740_xn$lineto$5sIl = _r740_t0['line-to']['bind'](_r740_t0);
            r740_xn$curveto$1aao = _r740_t0['curve-to']['bind'](_r740_t0);
            r740_xn$cubicto$1aao = _r740_t0['cubic-to']['bind'](_r740_t0);
            r740_xn$putshapes$9Jrj = _r740_t0['put-shapes']['bind'](_r740_t0);
            r740_xn$reverselast$3qIs = _r740_t0['reverse-last']['bind'](_r740_t0);
            r740_include = _r740_t0['include']['bind'](_r740_t0);
            r740_xn$createstroke$7Hrq = _r740_t0['create-stroke']['bind'](_r740_t0);
            r740_xn$setanchor$9Jrj = _r740_t0['set-anchor']['bind'](_r740_t0);
            r740_xn$applytransform$1aao = _r740_t0['apply-transform']['bind'](_r740_t0);
            r740_xn$dontexport$5sIl = function _r740_t3() {
                var _r742_t0, _r742_t1;
                return r740_currentGlyph['dontExport'] = true;
            };
            _r740_t0['gizmo'] = r4_globalTransform;
            _r740_t0['set-width'](r4_WIDTH);
            r740_xn$setwidth$9Jrj(r4_WIDTH);
            r740_xn$assignunicode$7Hrq(94);
            r740_include(r4_glyphs['space'], r4_AS_BASE);
            r740_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t229() {
            var r744_currentGlyph, r744_xn$setwidth$9Jrj, r744_xn$assignunicode$7Hrq, r744_xn$startfrom$1aao, r744_xn$lineto$5sIl, r744_xn$curveto$1aao, r744_xn$cubicto$1aao, r744_xn$putshapes$9Jrj, r744_xn$reverselast$3qIs, r744_include, r744_xn$createstroke$7Hrq, r744_xn$setanchor$9Jrj, r744_xn$applytransform$1aao, r744_xn$dontexport$5sIl, _r744_t0, _r744_t1, _r744_t2, _r744_t3;
            _r744_t0 = this;
            r744_currentGlyph = _r744_t0;
            r744_xn$setwidth$9Jrj = _r744_t0['set-width']['bind'](_r744_t0);
            r744_xn$assignunicode$7Hrq = function _r744_t2(r745_code) {
                var r745_code, _r745_t0, _r745_t1;
                r744_currentGlyph['assign-unicode'](r745_code);
                return r4_unicodeGlyphs[r744_currentGlyph['unicode'][r744_currentGlyph['unicode']['length'] - 1]] = r744_currentGlyph;
            };
            r744_xn$startfrom$1aao = _r744_t0['start-from']['bind'](_r744_t0);
            r744_xn$lineto$5sIl = _r744_t0['line-to']['bind'](_r744_t0);
            r744_xn$curveto$1aao = _r744_t0['curve-to']['bind'](_r744_t0);
            r744_xn$cubicto$1aao = _r744_t0['cubic-to']['bind'](_r744_t0);
            r744_xn$putshapes$9Jrj = _r744_t0['put-shapes']['bind'](_r744_t0);
            r744_xn$reverselast$3qIs = _r744_t0['reverse-last']['bind'](_r744_t0);
            r744_include = _r744_t0['include']['bind'](_r744_t0);
            r744_xn$createstroke$7Hrq = _r744_t0['create-stroke']['bind'](_r744_t0);
            r744_xn$setanchor$9Jrj = _r744_t0['set-anchor']['bind'](_r744_t0);
            r744_xn$applytransform$1aao = _r744_t0['apply-transform']['bind'](_r744_t0);
            r744_xn$dontexport$5sIl = function _r744_t3() {
                var _r746_t0, _r746_t1;
                return r744_currentGlyph['dontExport'] = true;
            };
            _r744_t0['gizmo'] = r4_globalTransform;
            _r744_t0['set-width'](r4_WIDTH);
            r744_xn$setwidth$9Jrj(r4_WIDTH);
            r744_xn$assignunicode$7Hrq('~');
            r744_include(r4_glyphs['space'], r4_AS_BASE);
            r744_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t230() {
            var r748_currentGlyph, r748_xn$setwidth$9Jrj, r748_xn$assignunicode$7Hrq, r748_xn$startfrom$1aao, r748_xn$lineto$5sIl, r748_xn$curveto$1aao, r748_xn$cubicto$1aao, r748_xn$putshapes$9Jrj, r748_xn$reverselast$3qIs, r748_include, r748_xn$createstroke$7Hrq, r748_xn$setanchor$9Jrj, r748_xn$applytransform$1aao, r748_xn$dontexport$5sIl, _r748_t0, _r748_t1, _r748_t2, _r748_t3;
            _r748_t0 = this;
            r748_currentGlyph = _r748_t0;
            r748_xn$setwidth$9Jrj = _r748_t0['set-width']['bind'](_r748_t0);
            r748_xn$assignunicode$7Hrq = function _r748_t2(r749_code) {
                var r749_code, _r749_t0, _r749_t1;
                r748_currentGlyph['assign-unicode'](r749_code);
                return r4_unicodeGlyphs[r748_currentGlyph['unicode'][r748_currentGlyph['unicode']['length'] - 1]] = r748_currentGlyph;
            };
            r748_xn$startfrom$1aao = _r748_t0['start-from']['bind'](_r748_t0);
            r748_xn$lineto$5sIl = _r748_t0['line-to']['bind'](_r748_t0);
            r748_xn$curveto$1aao = _r748_t0['curve-to']['bind'](_r748_t0);
            r748_xn$cubicto$1aao = _r748_t0['cubic-to']['bind'](_r748_t0);
            r748_xn$putshapes$9Jrj = _r748_t0['put-shapes']['bind'](_r748_t0);
            r748_xn$reverselast$3qIs = _r748_t0['reverse-last']['bind'](_r748_t0);
            r748_include = _r748_t0['include']['bind'](_r748_t0);
            r748_xn$createstroke$7Hrq = _r748_t0['create-stroke']['bind'](_r748_t0);
            r748_xn$setanchor$9Jrj = _r748_t0['set-anchor']['bind'](_r748_t0);
            r748_xn$applytransform$1aao = _r748_t0['apply-transform']['bind'](_r748_t0);
            r748_xn$dontexport$5sIl = function _r748_t3() {
                var _r750_t0, _r750_t1;
                return r748_currentGlyph['dontExport'] = true;
            };
            _r748_t0['gizmo'] = r4_globalTransform;
            _r748_t0['set-width'](r4_WIDTH);
            r748_xn$setwidth$9Jrj(r4_WIDTH);
            r748_xn$assignunicode$7Hrq(168);
            r748_include(r4_glyphs['space'], r4_AS_BASE);
            r748_include(r4_glyphs['dieresisAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1cedilla', function _r4_t231() {
            var r752_currentGlyph, r752_xn$setwidth$9Jrj, r752_xn$assignunicode$7Hrq, r752_xn$startfrom$1aao, r752_xn$lineto$5sIl, r752_xn$curveto$1aao, r752_xn$cubicto$1aao, r752_xn$putshapes$9Jrj, r752_xn$reverselast$3qIs, r752_include, r752_xn$createstroke$7Hrq, r752_xn$setanchor$9Jrj, r752_xn$applytransform$1aao, r752_xn$dontexport$5sIl, _r752_t0, _r752_t1, _r752_t2, _r752_t3;
            _r752_t0 = this;
            r752_currentGlyph = _r752_t0;
            r752_xn$setwidth$9Jrj = _r752_t0['set-width']['bind'](_r752_t0);
            r752_xn$assignunicode$7Hrq = function _r752_t2(r753_code) {
                var r753_code, _r753_t0, _r753_t1;
                r752_currentGlyph['assign-unicode'](r753_code);
                return r4_unicodeGlyphs[r752_currentGlyph['unicode'][r752_currentGlyph['unicode']['length'] - 1]] = r752_currentGlyph;
            };
            r752_xn$startfrom$1aao = _r752_t0['start-from']['bind'](_r752_t0);
            r752_xn$lineto$5sIl = _r752_t0['line-to']['bind'](_r752_t0);
            r752_xn$curveto$1aao = _r752_t0['curve-to']['bind'](_r752_t0);
            r752_xn$cubicto$1aao = _r752_t0['cubic-to']['bind'](_r752_t0);
            r752_xn$putshapes$9Jrj = _r752_t0['put-shapes']['bind'](_r752_t0);
            r752_xn$reverselast$3qIs = _r752_t0['reverse-last']['bind'](_r752_t0);
            r752_include = _r752_t0['include']['bind'](_r752_t0);
            r752_xn$createstroke$7Hrq = _r752_t0['create-stroke']['bind'](_r752_t0);
            r752_xn$setanchor$9Jrj = _r752_t0['set-anchor']['bind'](_r752_t0);
            r752_xn$applytransform$1aao = _r752_t0['apply-transform']['bind'](_r752_t0);
            r752_xn$dontexport$5sIl = function _r752_t3() {
                var _r754_t0, _r754_t1;
                return r752_currentGlyph['dontExport'] = true;
            };
            _r752_t0['gizmo'] = r4_globalTransform;
            _r752_t0['set-width'](r4_WIDTH);
            r752_xn$setwidth$9Jrj(r4_WIDTH);
            r752_xn$assignunicode$7Hrq(184);
            r752_include(r4_glyphs['space'], r4_AS_BASE);
            r752_include(r4_glyphs['cedillaBelow']);
            return void 0;
        });
        r4_Miniature = function _r4_t233(r755_glyphs, r755_fold, r755_scale) {
            var r755_glyphs, r755_fold, r755_scale, r755_forkedPara, r755_shouldBuildList, r755_glyphid, r755_forkFont, _r755_t0, _r755_t1, _r755_t2, _r755_t3, _r755_t4;
            r755_forkedPara = Object['create'](r4_para);
            r755_forkedPara['upmscale'] = 1;
            r755_forkedPara['stroke'] = r4_adviceBlackness(r755_fold) / r755_scale;
            r755_forkedPara['sb'] = r4_SB / 2;
            r755_shouldBuildList = [];
            _r755_t0 = r755_glyphs;
            _r755_t1 = _r755_t0['length'];
            _r755_t2 = 0;
            for (; _r755_t2 < _r755_t1; _r755_t2 = _r755_t2 + 1) {
                r755_glyphid = _r755_t0[_r755_t2];
                r755_shouldBuildList = r755_shouldBuildList['concat']([r755_glyphid]['concat'](r4_dependencyProfile[r755_glyphid]));
            }
            r755_forkFont = r0_buildFont(r755_forkedPara, r755_shouldBuildList);
            return r755_forkFont['glyfMap'];
        };
        r4_CircledGlyph = function _r4_t235(r757_glyphid) {
            var r757_glyphid, _r757_t0, _r757_t1, _r757_t2;
            return function _r757_t2() {
                var r759_currentGlyph, r759_xn$setwidth$9Jrj, r759_xn$assignunicode$7Hrq, r759_xn$startfrom$1aao, r759_xn$lineto$5sIl, r759_xn$curveto$1aao, r759_xn$cubicto$1aao, r759_xn$putshapes$9Jrj, r759_xn$reverselast$3qIs, r759_include, r759_xn$createstroke$7Hrq, r759_xn$setanchor$9Jrj, r759_xn$applytransform$1aao, r759_xn$dontexport$5sIl, r759_sw, _r759_t0, _r759_t1, _r759_t2, _r759_t3, _r759_t4;
                _r759_t0 = this;
                r759_currentGlyph = _r759_t0;
                r759_xn$setwidth$9Jrj = _r759_t0['set-width']['bind'](_r759_t0);
                r759_xn$assignunicode$7Hrq = function _r759_t2(r760_code) {
                    var r760_code, _r760_t0, _r760_t1;
                    r759_currentGlyph['assign-unicode'](r760_code);
                    return r4_unicodeGlyphs[r759_currentGlyph['unicode'][r759_currentGlyph['unicode']['length'] - 1]] = r759_currentGlyph;
                };
                r759_xn$startfrom$1aao = _r759_t0['start-from']['bind'](_r759_t0);
                r759_xn$lineto$5sIl = _r759_t0['line-to']['bind'](_r759_t0);
                r759_xn$curveto$1aao = _r759_t0['curve-to']['bind'](_r759_t0);
                r759_xn$cubicto$1aao = _r759_t0['cubic-to']['bind'](_r759_t0);
                r759_xn$putshapes$9Jrj = _r759_t0['put-shapes']['bind'](_r759_t0);
                r759_xn$reverselast$3qIs = _r759_t0['reverse-last']['bind'](_r759_t0);
                r759_include = _r759_t0['include']['bind'](_r759_t0);
                r759_xn$createstroke$7Hrq = _r759_t0['create-stroke']['bind'](_r759_t0);
                r759_xn$setanchor$9Jrj = _r759_t0['set-anchor']['bind'](_r759_t0);
                r759_xn$applytransform$1aao = _r759_t0['apply-transform']['bind'](_r759_t0);
                r759_xn$dontexport$5sIl = function _r759_t3() {
                    var _r761_t0, _r761_t1;
                    return r759_currentGlyph['dontExport'] = true;
                };
                _r759_t0['gizmo'] = r4_globalTransform;
                _r759_t0['set-width'](r4_WIDTH);
                r759_sw = r4_adviceBlackness(6);
                r759_include(r4_xn$createglyph$7Hrq(function _r759_t4() {
                    var r763_currentGlyph, r763_xn$setwidth$9Jrj, r763_xn$assignunicode$7Hrq, r763_xn$startfrom$1aao, r763_xn$lineto$5sIl, r763_xn$curveto$1aao, r763_xn$cubicto$1aao, r763_xn$putshapes$9Jrj, r763_xn$reverselast$3qIs, r763_include, r763_xn$createstroke$7Hrq, r763_xn$setanchor$9Jrj, r763_xn$applytransform$1aao, r763_xn$dontexport$5sIl, _r763_t0, _r763_t1, _r763_t2, _r763_t3;
                    _r763_t0 = this;
                    r763_currentGlyph = _r763_t0;
                    r763_xn$setwidth$9Jrj = _r763_t0['set-width']['bind'](_r763_t0);
                    r763_xn$assignunicode$7Hrq = function _r763_t2(r764_code) {
                        var r764_code, _r764_t0, _r764_t1;
                        r763_currentGlyph['assign-unicode'](r764_code);
                        return r4_unicodeGlyphs[r763_currentGlyph['unicode'][r763_currentGlyph['unicode']['length'] - 1]] = r763_currentGlyph;
                    };
                    r763_xn$startfrom$1aao = _r763_t0['start-from']['bind'](_r763_t0);
                    r763_xn$lineto$5sIl = _r763_t0['line-to']['bind'](_r763_t0);
                    r763_xn$curveto$1aao = _r763_t0['curve-to']['bind'](_r763_t0);
                    r763_xn$cubicto$1aao = _r763_t0['cubic-to']['bind'](_r763_t0);
                    r763_xn$putshapes$9Jrj = _r763_t0['put-shapes']['bind'](_r763_t0);
                    r763_xn$reverselast$3qIs = _r763_t0['reverse-last']['bind'](_r763_t0);
                    r763_include = _r763_t0['include']['bind'](_r763_t0);
                    r763_xn$createstroke$7Hrq = _r763_t0['create-stroke']['bind'](_r763_t0);
                    r763_xn$setanchor$9Jrj = _r763_t0['set-anchor']['bind'](_r763_t0);
                    r763_xn$applytransform$1aao = _r763_t0['apply-transform']['bind'](_r763_t0);
                    r763_xn$dontexport$5sIl = function _r763_t3() {
                        var _r765_t0, _r765_t1;
                        return r763_currentGlyph['dontExport'] = true;
                    };
                    _r763_t0['gizmo'] = r4_globalTransform;
                    _r763_t0['set-width'](r4_WIDTH);
                    r763_include(r4_Miniature([r757_glyphid], 4.2, 0.6)[r757_glyphid]);
                    r763_xn$applytransform$1aao(r4_Upright());
                    r763_xn$applytransform$1aao(r4_Scale(0.45));
                    r763_xn$applytransform$1aao(r4_Translate((r4_WIDTH - r4_WIDTH * 0.45) / 2, r759_sw * 2));
                    r763_xn$applytransform$1aao(r4_Italify());
                    return void 0;
                }));
                r759_include(r4_smallo(r4_CAP * 0.45 + r759_sw * 4, 0, r4_SB, r4_RIGHTSB, r759_sw));
                r759_xn$applytransform$1aao(r4_Upright());
                r759_xn$applytransform$1aao(r4_Translate(0, r4_parenMid - (r4_CAP * 0.45 + r759_sw * 4) / 2));
                r759_xn$applytransform$1aao(r4_Italify());
                return void 0;
            };
        };
        r4_createSuperscripts = function _r4_t238(r766_records) {
            var r766_records, r766_pendingGlyphs, r766_miniatureFont, r766_unicode, r766_glyphid, _r766_t0, _r766_t1, _r766_t2, _r766_t3, _r766_t4, _r766_t5, _r766_t6, _r766_t7, _r766_t8, _r766_t9, _r766_t10;
            if (!r4_recursive) {
                r766_pendingGlyphs = r766_records['map'](function _r766_t7(r767_record) {
                    var r767_record, _r767_t0, _r767_t1;
                    return r767_record[1];
                });
                r766_miniatureFont = r4_Miniature(r766_pendingGlyphs, 4.2, 0.6);
                _r766_t0 = r766_records;
                _r766_t1 = _r766_t0['length'];
                _r766_t2 = 0;
                _r766_t8 = _r766_t2 < _r766_t1;
                for (; _r766_t8; _r766_t8 = _r766_t2 < _r766_t1) {
                    _r766_t3 = _r766_t0[_r766_t2];
                    r766_unicode = _r766_t3[0];
                    r766_glyphid = _r766_t3[1];
                    r4_xn$createglyph$7Hrq('superscript_' + r766_glyphid, function _r766_t10() {
                        var r770_currentGlyph, r770_xn$setwidth$9Jrj, r770_xn$assignunicode$7Hrq, r770_xn$startfrom$1aao, r770_xn$lineto$5sIl, r770_xn$curveto$1aao, r770_xn$cubicto$1aao, r770_xn$putshapes$9Jrj, r770_xn$reverselast$3qIs, r770_include, r770_xn$createstroke$7Hrq, r770_xn$setanchor$9Jrj, r770_xn$applytransform$1aao, r770_xn$dontexport$5sIl, _r770_t0, _r770_t1, _r770_t2, _r770_t3, _r770_t4;
                        _r770_t0 = this;
                        r770_currentGlyph = _r770_t0;
                        r770_xn$setwidth$9Jrj = _r770_t0['set-width']['bind'](_r770_t0);
                        r770_xn$assignunicode$7Hrq = function _r770_t2(r771_code) {
                            var r771_code, _r771_t0, _r771_t1;
                            r770_currentGlyph['assign-unicode'](r771_code);
                            return r4_unicodeGlyphs[r770_currentGlyph['unicode'][r770_currentGlyph['unicode']['length'] - 1]] = r770_currentGlyph;
                        };
                        r770_xn$startfrom$1aao = _r770_t0['start-from']['bind'](_r770_t0);
                        r770_xn$lineto$5sIl = _r770_t0['line-to']['bind'](_r770_t0);
                        r770_xn$curveto$1aao = _r770_t0['curve-to']['bind'](_r770_t0);
                        r770_xn$cubicto$1aao = _r770_t0['cubic-to']['bind'](_r770_t0);
                        r770_xn$putshapes$9Jrj = _r770_t0['put-shapes']['bind'](_r770_t0);
                        r770_xn$reverselast$3qIs = _r770_t0['reverse-last']['bind'](_r770_t0);
                        r770_include = _r770_t0['include']['bind'](_r770_t0);
                        r770_xn$createstroke$7Hrq = _r770_t0['create-stroke']['bind'](_r770_t0);
                        r770_xn$setanchor$9Jrj = _r770_t0['set-anchor']['bind'](_r770_t0);
                        r770_xn$applytransform$1aao = _r770_t0['apply-transform']['bind'](_r770_t0);
                        r770_xn$dontexport$5sIl = function _r770_t3() {
                            var _r772_t0, _r772_t1;
                            return r770_currentGlyph['dontExport'] = true;
                        };
                        _r770_t0['gizmo'] = r4_globalTransform;
                        _r770_t0['set-width'](r4_WIDTH);
                        r770_xn$assignunicode$7Hrq(r766_unicode);
                        r770_include(r4_xn$createglyph$7Hrq(function _r770_t4() {
                            var r774_currentGlyph, r774_xn$setwidth$9Jrj, r774_xn$assignunicode$7Hrq, r774_xn$startfrom$1aao, r774_xn$lineto$5sIl, r774_xn$curveto$1aao, r774_xn$cubicto$1aao, r774_xn$putshapes$9Jrj, r774_xn$reverselast$3qIs, r774_include, r774_xn$createstroke$7Hrq, r774_xn$setanchor$9Jrj, r774_xn$applytransform$1aao, r774_xn$dontexport$5sIl, _r774_t0, _r774_t1, _r774_t2, _r774_t3;
                            _r774_t0 = this;
                            r774_currentGlyph = _r774_t0;
                            r774_xn$setwidth$9Jrj = _r774_t0['set-width']['bind'](_r774_t0);
                            r774_xn$assignunicode$7Hrq = function _r774_t2(r775_code) {
                                var r775_code, _r775_t0, _r775_t1;
                                r774_currentGlyph['assign-unicode'](r775_code);
                                return r4_unicodeGlyphs[r774_currentGlyph['unicode'][r774_currentGlyph['unicode']['length'] - 1]] = r774_currentGlyph;
                            };
                            r774_xn$startfrom$1aao = _r774_t0['start-from']['bind'](_r774_t0);
                            r774_xn$lineto$5sIl = _r774_t0['line-to']['bind'](_r774_t0);
                            r774_xn$curveto$1aao = _r774_t0['curve-to']['bind'](_r774_t0);
                            r774_xn$cubicto$1aao = _r774_t0['cubic-to']['bind'](_r774_t0);
                            r774_xn$putshapes$9Jrj = _r774_t0['put-shapes']['bind'](_r774_t0);
                            r774_xn$reverselast$3qIs = _r774_t0['reverse-last']['bind'](_r774_t0);
                            r774_include = _r774_t0['include']['bind'](_r774_t0);
                            r774_xn$createstroke$7Hrq = _r774_t0['create-stroke']['bind'](_r774_t0);
                            r774_xn$setanchor$9Jrj = _r774_t0['set-anchor']['bind'](_r774_t0);
                            r774_xn$applytransform$1aao = _r774_t0['apply-transform']['bind'](_r774_t0);
                            r774_xn$dontexport$5sIl = function _r774_t3() {
                                var _r776_t0, _r776_t1;
                                return r774_currentGlyph['dontExport'] = true;
                            };
                            _r774_t0['gizmo'] = r4_globalTransform;
                            _r774_t0['set-width'](r4_WIDTH);
                            r774_include(r766_miniatureFont[r766_glyphid]);
                            r774_xn$applytransform$1aao(r4_Upright());
                            r774_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_CAP));
                            r774_xn$applytransform$1aao(r4_Scale(0.6));
                            r774_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
                            r774_xn$applytransform$1aao(r4_Italify());
                            return void 0;
                        }));
                        return void 0;
                    });
                    _r766_t9 = _r766_t2 = _r766_t2 + 1;
                }
                return _r766_t9;
            } else
                return void 0;
        };
        r4_createSubscripts = function _r4_t240(r777_records) {
            var r777_records, r777_pendingGlyphs, r777_miniatureFont, r777_unicode, r777_glyphid, _r777_t0, _r777_t1, _r777_t2, _r777_t3, _r777_t4, _r777_t5, _r777_t6, _r777_t7, _r777_t8, _r777_t9, _r777_t10;
            if (!r4_recursive) {
                r777_pendingGlyphs = r777_records['map'](function _r777_t7(r778_record) {
                    var r778_record, _r778_t0, _r778_t1;
                    return r778_record[1];
                });
                r777_miniatureFont = r4_Miniature(r777_pendingGlyphs, 4.2, 0.6);
                _r777_t0 = r777_records;
                _r777_t1 = _r777_t0['length'];
                _r777_t2 = 0;
                _r777_t8 = _r777_t2 < _r777_t1;
                for (; _r777_t8; _r777_t8 = _r777_t2 < _r777_t1) {
                    _r777_t3 = _r777_t0[_r777_t2];
                    r777_unicode = _r777_t3[0];
                    r777_glyphid = _r777_t3[1];
                    r4_xn$createglyph$7Hrq('subscript_' + r777_glyphid, function _r777_t10() {
                        var r781_currentGlyph, r781_xn$setwidth$9Jrj, r781_xn$assignunicode$7Hrq, r781_xn$startfrom$1aao, r781_xn$lineto$5sIl, r781_xn$curveto$1aao, r781_xn$cubicto$1aao, r781_xn$putshapes$9Jrj, r781_xn$reverselast$3qIs, r781_include, r781_xn$createstroke$7Hrq, r781_xn$setanchor$9Jrj, r781_xn$applytransform$1aao, r781_xn$dontexport$5sIl, _r781_t0, _r781_t1, _r781_t2, _r781_t3, _r781_t4;
                        _r781_t0 = this;
                        r781_currentGlyph = _r781_t0;
                        r781_xn$setwidth$9Jrj = _r781_t0['set-width']['bind'](_r781_t0);
                        r781_xn$assignunicode$7Hrq = function _r781_t2(r782_code) {
                            var r782_code, _r782_t0, _r782_t1;
                            r781_currentGlyph['assign-unicode'](r782_code);
                            return r4_unicodeGlyphs[r781_currentGlyph['unicode'][r781_currentGlyph['unicode']['length'] - 1]] = r781_currentGlyph;
                        };
                        r781_xn$startfrom$1aao = _r781_t0['start-from']['bind'](_r781_t0);
                        r781_xn$lineto$5sIl = _r781_t0['line-to']['bind'](_r781_t0);
                        r781_xn$curveto$1aao = _r781_t0['curve-to']['bind'](_r781_t0);
                        r781_xn$cubicto$1aao = _r781_t0['cubic-to']['bind'](_r781_t0);
                        r781_xn$putshapes$9Jrj = _r781_t0['put-shapes']['bind'](_r781_t0);
                        r781_xn$reverselast$3qIs = _r781_t0['reverse-last']['bind'](_r781_t0);
                        r781_include = _r781_t0['include']['bind'](_r781_t0);
                        r781_xn$createstroke$7Hrq = _r781_t0['create-stroke']['bind'](_r781_t0);
                        r781_xn$setanchor$9Jrj = _r781_t0['set-anchor']['bind'](_r781_t0);
                        r781_xn$applytransform$1aao = _r781_t0['apply-transform']['bind'](_r781_t0);
                        r781_xn$dontexport$5sIl = function _r781_t3() {
                            var _r783_t0, _r783_t1;
                            return r781_currentGlyph['dontExport'] = true;
                        };
                        _r781_t0['gizmo'] = r4_globalTransform;
                        _r781_t0['set-width'](r4_WIDTH);
                        r781_xn$assignunicode$7Hrq(r777_unicode);
                        r781_include(r4_xn$createglyph$7Hrq(function _r781_t4() {
                            var r785_currentGlyph, r785_xn$setwidth$9Jrj, r785_xn$assignunicode$7Hrq, r785_xn$startfrom$1aao, r785_xn$lineto$5sIl, r785_xn$curveto$1aao, r785_xn$cubicto$1aao, r785_xn$putshapes$9Jrj, r785_xn$reverselast$3qIs, r785_include, r785_xn$createstroke$7Hrq, r785_xn$setanchor$9Jrj, r785_xn$applytransform$1aao, r785_xn$dontexport$5sIl, _r785_t0, _r785_t1, _r785_t2, _r785_t3;
                            _r785_t0 = this;
                            r785_currentGlyph = _r785_t0;
                            r785_xn$setwidth$9Jrj = _r785_t0['set-width']['bind'](_r785_t0);
                            r785_xn$assignunicode$7Hrq = function _r785_t2(r786_code) {
                                var r786_code, _r786_t0, _r786_t1;
                                r785_currentGlyph['assign-unicode'](r786_code);
                                return r4_unicodeGlyphs[r785_currentGlyph['unicode'][r785_currentGlyph['unicode']['length'] - 1]] = r785_currentGlyph;
                            };
                            r785_xn$startfrom$1aao = _r785_t0['start-from']['bind'](_r785_t0);
                            r785_xn$lineto$5sIl = _r785_t0['line-to']['bind'](_r785_t0);
                            r785_xn$curveto$1aao = _r785_t0['curve-to']['bind'](_r785_t0);
                            r785_xn$cubicto$1aao = _r785_t0['cubic-to']['bind'](_r785_t0);
                            r785_xn$putshapes$9Jrj = _r785_t0['put-shapes']['bind'](_r785_t0);
                            r785_xn$reverselast$3qIs = _r785_t0['reverse-last']['bind'](_r785_t0);
                            r785_include = _r785_t0['include']['bind'](_r785_t0);
                            r785_xn$createstroke$7Hrq = _r785_t0['create-stroke']['bind'](_r785_t0);
                            r785_xn$setanchor$9Jrj = _r785_t0['set-anchor']['bind'](_r785_t0);
                            r785_xn$applytransform$1aao = _r785_t0['apply-transform']['bind'](_r785_t0);
                            r785_xn$dontexport$5sIl = function _r785_t3() {
                                var _r787_t0, _r787_t1;
                                return r785_currentGlyph['dontExport'] = true;
                            };
                            _r785_t0['gizmo'] = r4_globalTransform;
                            _r785_t0['set-width'](r4_WIDTH);
                            r785_include(r777_miniatureFont[r777_glyphid]);
                            r785_xn$applytransform$1aao(r4_Upright());
                            r785_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, 0));
                            r785_xn$applytransform$1aao(r4_Scale(0.6));
                            r785_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, -r4_DESCENDER / 2));
                            r785_xn$applytransform$1aao(r4_Italify());
                            return void 0;
                        }));
                        return void 0;
                    });
                    _r777_t9 = _r777_t2 = _r777_t2 + 1;
                }
                return _r777_t9;
            } else
                return void 0;
        };
        r4_xn$createglyph$7Hrq('copyright', function _r4_t243() {
            var r789_currentGlyph, r789_xn$setwidth$9Jrj, r789_xn$assignunicode$7Hrq, r789_xn$startfrom$1aao, r789_xn$lineto$5sIl, r789_xn$curveto$1aao, r789_xn$cubicto$1aao, r789_xn$putshapes$9Jrj, r789_xn$reverselast$3qIs, r789_include, r789_xn$createstroke$7Hrq, r789_xn$setanchor$9Jrj, r789_xn$applytransform$1aao, r789_xn$dontexport$5sIl, _r789_t0, _r789_t1, _r789_t2, _r789_t3;
            _r789_t0 = this;
            r789_currentGlyph = _r789_t0;
            r789_xn$setwidth$9Jrj = _r789_t0['set-width']['bind'](_r789_t0);
            r789_xn$assignunicode$7Hrq = function _r789_t2(r790_code) {
                var r790_code, _r790_t0, _r790_t1;
                r789_currentGlyph['assign-unicode'](r790_code);
                return r4_unicodeGlyphs[r789_currentGlyph['unicode'][r789_currentGlyph['unicode']['length'] - 1]] = r789_currentGlyph;
            };
            r789_xn$startfrom$1aao = _r789_t0['start-from']['bind'](_r789_t0);
            r789_xn$lineto$5sIl = _r789_t0['line-to']['bind'](_r789_t0);
            r789_xn$curveto$1aao = _r789_t0['curve-to']['bind'](_r789_t0);
            r789_xn$cubicto$1aao = _r789_t0['cubic-to']['bind'](_r789_t0);
            r789_xn$putshapes$9Jrj = _r789_t0['put-shapes']['bind'](_r789_t0);
            r789_xn$reverselast$3qIs = _r789_t0['reverse-last']['bind'](_r789_t0);
            r789_include = _r789_t0['include']['bind'](_r789_t0);
            r789_xn$createstroke$7Hrq = _r789_t0['create-stroke']['bind'](_r789_t0);
            r789_xn$setanchor$9Jrj = _r789_t0['set-anchor']['bind'](_r789_t0);
            r789_xn$applytransform$1aao = _r789_t0['apply-transform']['bind'](_r789_t0);
            r789_xn$dontexport$5sIl = function _r789_t3() {
                var _r791_t0, _r791_t1;
                return r789_currentGlyph['dontExport'] = true;
            };
            _r789_t0['gizmo'] = r4_globalTransform;
            _r789_t0['set-width'](r4_WIDTH);
            r789_xn$assignunicode$7Hrq(169);
            r789_include(r4_CircledGlyph('C'));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('registered', function _r4_t244() {
            var r793_currentGlyph, r793_xn$setwidth$9Jrj, r793_xn$assignunicode$7Hrq, r793_xn$startfrom$1aao, r793_xn$lineto$5sIl, r793_xn$curveto$1aao, r793_xn$cubicto$1aao, r793_xn$putshapes$9Jrj, r793_xn$reverselast$3qIs, r793_include, r793_xn$createstroke$7Hrq, r793_xn$setanchor$9Jrj, r793_xn$applytransform$1aao, r793_xn$dontexport$5sIl, _r793_t0, _r793_t1, _r793_t2, _r793_t3;
            _r793_t0 = this;
            r793_currentGlyph = _r793_t0;
            r793_xn$setwidth$9Jrj = _r793_t0['set-width']['bind'](_r793_t0);
            r793_xn$assignunicode$7Hrq = function _r793_t2(r794_code) {
                var r794_code, _r794_t0, _r794_t1;
                r793_currentGlyph['assign-unicode'](r794_code);
                return r4_unicodeGlyphs[r793_currentGlyph['unicode'][r793_currentGlyph['unicode']['length'] - 1]] = r793_currentGlyph;
            };
            r793_xn$startfrom$1aao = _r793_t0['start-from']['bind'](_r793_t0);
            r793_xn$lineto$5sIl = _r793_t0['line-to']['bind'](_r793_t0);
            r793_xn$curveto$1aao = _r793_t0['curve-to']['bind'](_r793_t0);
            r793_xn$cubicto$1aao = _r793_t0['cubic-to']['bind'](_r793_t0);
            r793_xn$putshapes$9Jrj = _r793_t0['put-shapes']['bind'](_r793_t0);
            r793_xn$reverselast$3qIs = _r793_t0['reverse-last']['bind'](_r793_t0);
            r793_include = _r793_t0['include']['bind'](_r793_t0);
            r793_xn$createstroke$7Hrq = _r793_t0['create-stroke']['bind'](_r793_t0);
            r793_xn$setanchor$9Jrj = _r793_t0['set-anchor']['bind'](_r793_t0);
            r793_xn$applytransform$1aao = _r793_t0['apply-transform']['bind'](_r793_t0);
            r793_xn$dontexport$5sIl = function _r793_t3() {
                var _r795_t0, _r795_t1;
                return r793_currentGlyph['dontExport'] = true;
            };
            _r793_t0['gizmo'] = r4_globalTransform;
            _r793_t0['set-width'](r4_WIDTH);
            r793_xn$assignunicode$7Hrq(174);
            r793_include(r4_CircledGlyph('R'));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ordfeminine', function _r4_t245() {
            var r797_currentGlyph, r797_xn$setwidth$9Jrj, r797_xn$assignunicode$7Hrq, r797_xn$startfrom$1aao, r797_xn$lineto$5sIl, r797_xn$curveto$1aao, r797_xn$cubicto$1aao, r797_xn$putshapes$9Jrj, r797_xn$reverselast$3qIs, r797_include, r797_xn$createstroke$7Hrq, r797_xn$setanchor$9Jrj, r797_xn$applytransform$1aao, r797_xn$dontexport$5sIl, _r797_t0, _r797_t1, _r797_t2, _r797_t3;
            _r797_t0 = this;
            r797_currentGlyph = _r797_t0;
            r797_xn$setwidth$9Jrj = _r797_t0['set-width']['bind'](_r797_t0);
            r797_xn$assignunicode$7Hrq = function _r797_t2(r798_code) {
                var r798_code, _r798_t0, _r798_t1;
                r797_currentGlyph['assign-unicode'](r798_code);
                return r4_unicodeGlyphs[r797_currentGlyph['unicode'][r797_currentGlyph['unicode']['length'] - 1]] = r797_currentGlyph;
            };
            r797_xn$startfrom$1aao = _r797_t0['start-from']['bind'](_r797_t0);
            r797_xn$lineto$5sIl = _r797_t0['line-to']['bind'](_r797_t0);
            r797_xn$curveto$1aao = _r797_t0['curve-to']['bind'](_r797_t0);
            r797_xn$cubicto$1aao = _r797_t0['cubic-to']['bind'](_r797_t0);
            r797_xn$putshapes$9Jrj = _r797_t0['put-shapes']['bind'](_r797_t0);
            r797_xn$reverselast$3qIs = _r797_t0['reverse-last']['bind'](_r797_t0);
            r797_include = _r797_t0['include']['bind'](_r797_t0);
            r797_xn$createstroke$7Hrq = _r797_t0['create-stroke']['bind'](_r797_t0);
            r797_xn$setanchor$9Jrj = _r797_t0['set-anchor']['bind'](_r797_t0);
            r797_xn$applytransform$1aao = _r797_t0['apply-transform']['bind'](_r797_t0);
            r797_xn$dontexport$5sIl = function _r797_t3() {
                var _r799_t0, _r799_t1;
                return r797_currentGlyph['dontExport'] = true;
            };
            _r797_t0['gizmo'] = r4_globalTransform;
            _r797_t0['set-width'](r4_WIDTH);
            r797_xn$assignunicode$7Hrq(170);
            r797_include(r4_Miniature('a', 4.2, 0.6));
            r797_include(r797_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_DESCENDER)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_RIGHTWARD));
            r797_xn$applytransform$1aao(r4_Upright());
            r797_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_XH));
            r797_xn$applytransform$1aao(r4_Scale(0.6));
            r797_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
            r797_xn$applytransform$1aao(r4_Italify());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ordmasculine', function _r4_t246() {
            var r801_currentGlyph, r801_xn$setwidth$9Jrj, r801_xn$assignunicode$7Hrq, r801_xn$startfrom$1aao, r801_xn$lineto$5sIl, r801_xn$curveto$1aao, r801_xn$cubicto$1aao, r801_xn$putshapes$9Jrj, r801_xn$reverselast$3qIs, r801_include, r801_xn$createstroke$7Hrq, r801_xn$setanchor$9Jrj, r801_xn$applytransform$1aao, r801_xn$dontexport$5sIl, _r801_t0, _r801_t1, _r801_t2, _r801_t3;
            _r801_t0 = this;
            r801_currentGlyph = _r801_t0;
            r801_xn$setwidth$9Jrj = _r801_t0['set-width']['bind'](_r801_t0);
            r801_xn$assignunicode$7Hrq = function _r801_t2(r802_code) {
                var r802_code, _r802_t0, _r802_t1;
                r801_currentGlyph['assign-unicode'](r802_code);
                return r4_unicodeGlyphs[r801_currentGlyph['unicode'][r801_currentGlyph['unicode']['length'] - 1]] = r801_currentGlyph;
            };
            r801_xn$startfrom$1aao = _r801_t0['start-from']['bind'](_r801_t0);
            r801_xn$lineto$5sIl = _r801_t0['line-to']['bind'](_r801_t0);
            r801_xn$curveto$1aao = _r801_t0['curve-to']['bind'](_r801_t0);
            r801_xn$cubicto$1aao = _r801_t0['cubic-to']['bind'](_r801_t0);
            r801_xn$putshapes$9Jrj = _r801_t0['put-shapes']['bind'](_r801_t0);
            r801_xn$reverselast$3qIs = _r801_t0['reverse-last']['bind'](_r801_t0);
            r801_include = _r801_t0['include']['bind'](_r801_t0);
            r801_xn$createstroke$7Hrq = _r801_t0['create-stroke']['bind'](_r801_t0);
            r801_xn$setanchor$9Jrj = _r801_t0['set-anchor']['bind'](_r801_t0);
            r801_xn$applytransform$1aao = _r801_t0['apply-transform']['bind'](_r801_t0);
            r801_xn$dontexport$5sIl = function _r801_t3() {
                var _r803_t0, _r803_t1;
                return r801_currentGlyph['dontExport'] = true;
            };
            _r801_t0['gizmo'] = r4_globalTransform;
            _r801_t0['set-width'](r4_WIDTH);
            r801_xn$assignunicode$7Hrq(186);
            r801_include(r4_Miniature('o', 4.2, 0.6));
            r801_include(r801_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_DESCENDER)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_RIGHTWARD));
            r801_xn$applytransform$1aao(r4_Upright());
            r801_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_XH));
            r801_xn$applytransform$1aao(r4_Scale(0.6));
            r801_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
            r801_xn$applytransform$1aao(r4_Italify());
            return void 0;
        });
        r4_createSuperscripts([
            [
                8304,
                'zero'
            ],
            [
                185,
                'one'
            ],
            [
                178,
                'two'
            ],
            [
                179,
                'three'
            ],
            [
                8308,
                'four'
            ],
            [
                8309,
                'five'
            ],
            [
                8310,
                'six'
            ],
            [
                8311,
                'seven'
            ],
            [
                8312,
                'eight'
            ],
            [
                8313,
                'nine'
            ],
            [
                688,
                'h'
            ],
            [
                690,
                'j'
            ],
            [
                691,
                'r'
            ],
            [
                695,
                'w'
            ],
            [
                696,
                'y'
            ],
            [
                737,
                'l'
            ],
            [
                738,
                's'
            ],
            [
                739,
                'x'
            ],
            [
                8305,
                'i'
            ],
            [
                8319,
                'n'
            ],
            [
                7491,
                'a'
            ],
            [
                7495,
                'b'
            ],
            [
                7496,
                'd'
            ],
            [
                7497,
                'e'
            ],
            [
                7501,
                'g'
            ],
            [
                7503,
                'k'
            ],
            [
                7504,
                'm'
            ],
            [
                7506,
                'o'
            ],
            [
                7510,
                'p'
            ],
            [
                7511,
                't'
            ],
            [
                7512,
                'u'
            ],
            [
                7515,
                'v'
            ],
            [
                7580,
                'c'
            ],
            [
                7584,
                'f'
            ],
            [
                7611,
                'z'
            ],
            [
                7468,
                'A'
            ],
            [
                7470,
                'B'
            ],
            [
                7472,
                'D'
            ],
            [
                7473,
                'E'
            ],
            [
                7475,
                'G'
            ],
            [
                7476,
                'H'
            ],
            [
                7477,
                'I'
            ],
            [
                7478,
                'J'
            ],
            [
                7479,
                'K'
            ],
            [
                7480,
                'L'
            ],
            [
                7481,
                'M'
            ],
            [
                7482,
                'N'
            ],
            [
                7484,
                'O'
            ],
            [
                7486,
                'P'
            ],
            [
                7487,
                'R'
            ],
            [
                7488,
                'T'
            ],
            [
                7489,
                'U'
            ],
            [
                7490,
                'W'
            ]
        ]);
        r4_createSubscripts([
            [
                8320,
                'zero'
            ],
            [
                8321,
                'one'
            ],
            [
                8322,
                'two'
            ],
            [
                8323,
                'three'
            ],
            [
                8324,
                'four'
            ],
            [
                8325,
                'five'
            ],
            [
                8326,
                'six'
            ],
            [
                8327,
                'seven'
            ],
            [
                8328,
                'eight'
            ],
            [
                8329,
                'nine'
            ],
            [
                8336,
                'a'
            ],
            [
                8337,
                'e'
            ],
            [
                8338,
                'o'
            ],
            [
                8339,
                'x'
            ],
            [
                8341,
                'h'
            ],
            [
                8342,
                'k'
            ],
            [
                8343,
                'l'
            ],
            [
                8344,
                'm'
            ],
            [
                8345,
                'n'
            ],
            [
                8346,
                'p'
            ],
            [
                8347,
                's'
            ],
            [
                8348,
                't'
            ],
            [
                7522,
                'i'
            ],
            [
                7523,
                'r'
            ],
            [
                7524,
                'u'
            ],
            [
                7525,
                'v'
            ]
        ]);
        if (r4_upmscale !== 1) {
            _r4_t4 = r4_glyphList;
            _r4_t5 = _r4_t4['length'];
            _r4_t6 = 0;
            _r4_t250 = _r4_t6 < _r4_t5;
            for (; _r4_t250; _r4_t250 = _r4_t6 < _r4_t5) {
                r4_glyph = _r4_t4[_r4_t6];
                r4_glyph['advanceWidth'] = r4_glyph['advanceWidth'] * r4_upmscale;
                if (r4_glyph['contours']) {
                    _r4_t7 = r4_glyph['contours'];
                    _r4_t8 = _r4_t7['length'];
                    _r4_t9 = 0;
                    _r4_t253 = _r4_t9 < _r4_t8;
                    for (; _r4_t253; _r4_t253 = _r4_t9 < _r4_t8) {
                        r4_contour = _r4_t7[_r4_t9];
                        _r4_t10 = r4_contour;
                        _r4_t11 = _r4_t10['length'];
                        _r4_t12 = 0;
                        for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                            r4_point = _r4_t10[_r4_t12];
                            r4_point['x'] = r4_point['x'] * r4_upmscale;
                            r4_point['y'] = r4_point['y'] * r4_upmscale;
                        }
                        _r4_t254 = _r4_t9 = _r4_t9 + 1;
                    }
                    _r4_t252 = _r4_t254;
                } else
                    _r4_t252 = void 0;
                _r4_t251 = _r4_t6 = _r4_t6 + 1;
            }
            _r4_t247 = _r4_t251;
        } else
            _r4_t247 = void 0;
        if (!r4_recursive)
            _r4_t248 = r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t249(r807_glyph) {
                var r807_glyph, _r807_t0, _r807_t1;
                return r807_glyph && !r807_glyph['dontExport'];
            });
        else
            _r4_t248 = void 0;
        r4_font['glyfMap'] = r4_glyphs;
        return r4_font;
    };
    exports['build'] = r0_buildFont;
}
