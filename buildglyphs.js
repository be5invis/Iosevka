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
    exports['build'] = function _r0_t3(r4_para, r4_picks) {
        var r4_para, r4_picks, r4_variantSelector, r4_font, r4_glyphList, r4_glyphs, r4_unicodeGlyphs, r4_globalTransform, r4_ITALICCOR, r4_UPWARD, r4_DOWNWARD, r4_RIGHTWARD, r4_LEFTWARD, r4_DESCENDER, r4_WIDTH, r4_CAP, r4_XH, r4_O, r4_OXHOOK, r4_SB, r4_HOOK, r4_AHOOK, r4_SHOOK, r4_RHOOK, r4_SMOOTH, r4_SMALLSMOOTH, r4_STROKE, r4_DOTSIZE, r4_PERIODSIZE, r4_BARPOS, r4_GBARPOS, r4_FIVEBARPOS, r4_LONGJUT, r4_ACCENT, r4_ACCENTX, r4_XO, r4_CAPO, r4_HALFSTROKE, r4_RIGHTSB, r4_MIDDLE, r4_CAPMIDDLE, r4_CAP_SMOOTH, r4_DOTRADIUS, r4_PERIODRADIUS, r4_SMOOTHA, r4_SMOOTHB, r4_SMALLSMOOTHA, r4_SMALLSMOOTHB, r4_ITALICCORS, r4_EBARPOS, r4_KAPPA, r4_COKAPPA, r4_BKAPPA, r4_CKAPPA, r4_COBKAPPA, r4_KAPPA_HOOK, r4_KAPPA_AHOOK, r4_TAILADJX, r4_TAILADJY, r4_TAILADJKAPPA, r4_TAILADJSX, r4_TAILADJSY, r4_TAILADJSKAPPA, r4_ILBALANCE, r4_JBALANCE, r4_TBALANCE, r4_TBALANCE2, r4_RBALANCE, r4_WHITENESS, r4_adviceBlackness, r4_BASE, r4_MARK, r4_MARKBASE, r4_AS_BASE, r4_Upright, r4_Italify, r4_Scale, r4_Translate, r4_tm, r4_markAboveLower, r4_markAboveCap, r4_markBelowLower, r4_markBelowZero, r4_capitalMarks, r4_bMarks, r4_eMarks, r4_pMarks, r4_ifMarks, r4_upmscale, r4_dependencyProfile, r4_nTemp, r4_xn$createglyph$7Hrq, r4_xn$selectvariant$7Hrq, r4_xgrid, r4_Ring, r4_ORing, r4_leftwardTopSerif, r4_leftwardBottomSerif, r4_rightwardTopSerif, r4_rightwardBottomSerif, r4_centerTopSerif, r4_centerBottomSerif, r4_xsStrand, r4_sStrand, r4_halfXStrand, r4_xStrand, r4_nBowl, r4_XSHookUpper, r4_sHookUpper, r4_twoHookUpper, r4_sHookLower, r4_XSHookLower, r4_smallo, r4_hbar, r4_vbar, r4_markExtend, r4_markStress, r4_markFine, r4_markHalfStroke, r4_markMiddle, r4_markDotsRadius, r4_aboveMarkTop, r4_aboveMarkBot, r4_belowMarkBot, r4_belowMarkTop, r4_FShape, r4_oLeft, r4_oRight, r4_fBar, r4_eshHook, r4_ezhshape, r4_hyphenCenter, r4_parenTop, r4_parenBot, r4_parenMid, r4_parenOutside, r4_parenInside, r4_bracketOutside, r4_bracketInside, r4_braceOutside, r4_braceInside, r4_isAboveMark, r4_code, r4_str, r4_nfd, r4_parts, r4_allFound, r4_hasMarkAbove, r4_j, r4_Miniature, r4_CircledGlyph, r4_createSuperscript, r4_createSubscript, r4_glyph, r4_contour, r4_point, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5, _r4_t6, _r4_t7, _r4_t8, _r4_t9, _r4_t10, _r4_t11, _r4_t12, _r4_t13, _r4_t14, _r4_t15, _r4_t16, _r4_t17, _r4_t18, _r4_t19, _r4_t20, _r4_t21, _r4_t22, _r4_t23, _r4_t24, _r4_t25, _r4_t26, _r4_t27, _r4_t28, _r4_t29, _r4_t30, _r4_t31, _r4_t32, _r4_t33, _r4_t34, _r4_t35, _r4_t36, _r4_t37, _r4_t38, _r4_t39, _r4_t40, _r4_t41, _r4_t42, _r4_t43, _r4_t44, _r4_t45, _r4_t46, _r4_t47, _r4_t48, _r4_t49, _r4_t50, _r4_t51, _r4_t52, _r4_t53, _r4_t54, _r4_t55, _r4_t56, _r4_t57, _r4_t58, _r4_t59, _r4_t60, _r4_t61, _r4_t62, _r4_t63, _r4_t64, _r4_t65, _r4_t66, _r4_t67, _r4_t68, _r4_t69, _r4_t70, _r4_t71, _r4_t72, _r4_t73, _r4_t74, _r4_t75, _r4_t76, _r4_t77, _r4_t78, _r4_t79, _r4_t80, _r4_t81, _r4_t82, _r4_t83, _r4_t84, _r4_t85, _r4_t86, _r4_t87, _r4_t88, _r4_t89, _r4_t90, _r4_t91, _r4_t92, _r4_t93, _r4_t94, _r4_t95, _r4_t96, _r4_t97, _r4_t98, _r4_t99, _r4_t100, _r4_t101, _r4_t102, _r4_t103, _r4_t104, _r4_t105, _r4_t106, _r4_t107, _r4_t108, _r4_t109, _r4_t110, _r4_t111, _r4_t112, _r4_t113, _r4_t114, _r4_t115, _r4_t116, _r4_t117, _r4_t118, _r4_t119, _r4_t120, _r4_t121, _r4_t122, _r4_t123, _r4_t124, _r4_t125, _r4_t126, _r4_t127, _r4_t128, _r4_t129, _r4_t130, _r4_t131, _r4_t132, _r4_t133, _r4_t134, _r4_t135, _r4_t136, _r4_t137, _r4_t138, _r4_t139, _r4_t140, _r4_t141, _r4_t142, _r4_t143, _r4_t144, _r4_t145, _r4_t146, _r4_t147, _r4_t148, _r4_t149, _r4_t150, _r4_t151, _r4_t152, _r4_t153, _r4_t154, _r4_t155, _r4_t156, _r4_t157, _r4_t158, _r4_t159, _r4_t160, _r4_t161, _r4_t162, _r4_t163, _r4_t164, _r4_t165, _r4_t166, _r4_t167, _r4_t168, _r4_t169, _r4_t170, _r4_t171, _r4_t172, _r4_t173, _r4_t174, _r4_t175, _r4_t176, _r4_t177, _r4_t178, _r4_t179, _r4_t180, _r4_t181, _r4_t182, _r4_t183, _r4_t184, _r4_t185, _r4_t186, _r4_t187, _r4_t188, _r4_t189, _r4_t190, _r4_t191, _r4_t192, _r4_t193, _r4_t194, _r4_t195, _r4_t196, _r4_t197, _r4_t198, _r4_t199, _r4_t200, _r4_t201, _r4_t202, _r4_t203, _r4_t204, _r4_t205, _r4_t206, _r4_t207, _r4_t208, _r4_t209, _r4_t210, _r4_t211, _r4_t212, _r4_t213, _r4_t214, _r4_t215, _r4_t216, _r4_t217, _r4_t218, _r4_t219, _r4_t220, _r4_t221, _r4_t222, _r4_t223, _r4_t224, _r4_t225, _r4_t226, _r4_t227, _r4_t228, _r4_t229, _r4_t230, _r4_t231, _r4_t232, _r4_t233, _r4_t234, _r4_t235, _r4_t236, _r4_t237, _r4_t238, _r4_t239, _r4_t240, _r4_t241, _r4_t242, _r4_t243, _r4_t244, _r4_t245, _r4_t246, _r4_t247;
        r4_variantSelector = r4_para['variantSelector'];
        r4_font = JSON['parse'](JSON['stringify'](require('./empty.json')));
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
        r4_xn$createglyph$7Hrq = function _r4_t36(r15_name, r15_actions) {
            var r15_name, r15_actions, r15_glyphObject, r15_d, r15_allAliases, _r15_t0, _r15_t1, _r15_t2, _r15_t3, _r15_t4, _r15_t5, _r15_t6, _r15_t7, _r15_t8;
            _r15_t4 = arguments;
            if (r15_name && r15_actions) {
                if (r4_picks && r4_picks['indexOf'](r15_name) < 0)
                    return void 0;
                else
                    _r15_t6 = void 0;
                r4_dependencyProfile[r15_name] = [];
                r15_glyphObject = new r0_Glyph(r15_name);
                r4_glyphList['push'](r15_glyphObject);
                r4_glyphs[r15_name] = r15_glyphObject;
                r15_actions['call'](r15_glyphObject);
                _r15_t0 = r15_glyphObject['dependencies'];
                _r15_t1 = _r15_t0['length'];
                _r15_t2 = 0;
                for (; _r15_t2 < _r15_t1; _r15_t2 = _r15_t2 + 1) {
                    r15_d = _r15_t0[_r15_t2];
                    r15_allAliases = Object['keys'](r4_glyphs)['filter'](function _r15_t8(r17_k) {
                        var r17_k, _r17_t0, _r17_t1;
                        return r4_glyphs[r17_k] === r4_glyphs[r15_d];
                    });
                    r4_dependencyProfile[r15_name] = r4_dependencyProfile[r15_name]['concat'](r4_dependencyProfile[r15_d], r15_allAliases);
                }
                return r15_glyphObject;
            } else if (true) {
                r15_actions = _r15_t4[0];
                r15_glyphObject = new r0_Glyph('.temp-' + (r4_nTemp = r4_nTemp = r4_nTemp + 1));
                r15_actions['call'](r15_glyphObject);
                return r15_glyphObject;
            } else
                return void 0;
        };
        r4_xn$selectvariant$7Hrq = function _r4_t37(r18_glyphid, r18_unicode, r18_default) {
            var r18_glyphid, r18_unicode, r18_default, r18_variant, r18_chosenGlyph, r18_allAliases, _r18_t0, _r18_t1, _r18_t2, _r18_t3, _r18_t4;
            if (r4_picks && r4_picks['indexOf'](r18_glyphid) < 0)
                return void 0;
            else
                _r18_t2 = void 0;
            r18_variant = r4_variantSelector[r18_glyphid] || r18_default;
            r18_chosenGlyph = r4_glyphs[r18_glyphid + '.' + r18_variant];
            r4_glyphs[r18_glyphid] = r18_chosenGlyph;
            r18_allAliases = Object['keys'](r4_glyphs)['filter'](function _r18_t3(r19_k) {
                var r19_k, _r19_t0, _r19_t1;
                return r4_glyphs[r19_k] === r4_glyphs[r18_chosenGlyph['name']];
            });
            r4_dependencyProfile[r18_glyphid] = r18_allAliases['concat'](r4_dependencyProfile[r18_chosenGlyph['name']]);
            if (r18_unicode) {
                r18_chosenGlyph['assign-unicode'](r18_unicode);
                r18_chosenGlyph['dontExport'] = false;
                return r4_unicodeGlyphs[r18_chosenGlyph['unicode'][r18_chosenGlyph['unicode']['length'] - 1]] = r18_chosenGlyph;
            } else
                return void 0;
        };
        r4_xgrid = function _r4_t38(r20_p) {
            var r20_p, _r20_t0, _r20_t1;
            return r0_mix(r4_SB, r4_RIGHTSB, r20_p);
        };
        r4_xn$createglyph$7Hrq('space', function _r4_t39() {
            var r22_currentGlyph, r22_xn$setwidth$9Jrj, r22_xn$assignunicode$7Hrq, r22_xn$startfrom$1aao, r22_xn$lineto$5sIl, r22_xn$curveto$1aao, r22_xn$cubicto$1aao, r22_xn$putshapes$9Jrj, r22_xn$reverselast$3qIs, r22_include, r22_xn$createstroke$7Hrq, r22_xn$setanchor$9Jrj, r22_xn$applytransform$1aao, r22_xn$dontexport$5sIl, _r22_t0, _r22_t1, _r22_t2, _r22_t3;
            _r22_t0 = this;
            r22_currentGlyph = _r22_t0;
            r22_xn$setwidth$9Jrj = _r22_t0['set-width']['bind'](_r22_t0);
            r22_xn$assignunicode$7Hrq = function _r22_t2(r23_code) {
                var r23_code, _r23_t0, _r23_t1;
                r22_currentGlyph['assign-unicode'](r23_code);
                return r4_unicodeGlyphs[r22_currentGlyph['unicode'][r22_currentGlyph['unicode']['length'] - 1]] = r22_currentGlyph;
            };
            r22_xn$startfrom$1aao = _r22_t0['start-from']['bind'](_r22_t0);
            r22_xn$lineto$5sIl = _r22_t0['line-to']['bind'](_r22_t0);
            r22_xn$curveto$1aao = _r22_t0['curve-to']['bind'](_r22_t0);
            r22_xn$cubicto$1aao = _r22_t0['cubic-to']['bind'](_r22_t0);
            r22_xn$putshapes$9Jrj = _r22_t0['put-shapes']['bind'](_r22_t0);
            r22_xn$reverselast$3qIs = _r22_t0['reverse-last']['bind'](_r22_t0);
            r22_include = _r22_t0['include']['bind'](_r22_t0);
            r22_xn$createstroke$7Hrq = _r22_t0['create-stroke']['bind'](_r22_t0);
            r22_xn$setanchor$9Jrj = _r22_t0['set-anchor']['bind'](_r22_t0);
            r22_xn$applytransform$1aao = _r22_t0['apply-transform']['bind'](_r22_t0);
            r22_xn$dontexport$5sIl = function _r22_t3() {
                var _r24_t0, _r24_t1;
                return r22_currentGlyph['dontExport'] = true;
            };
            _r22_t0['gizmo'] = r4_globalTransform;
            _r22_t0['set-width'](r4_WIDTH);
            r22_xn$setwidth$9Jrj(r4_WIDTH);
            r22_xn$assignunicode$7Hrq(' ');
            r22_include(r4_eMarks);
            return void 0;
        });
        r4_Ring = function _r4_t40(r25_u, r25_d, r25_l, r25_r) {
            var r25_u, r25_d, r25_l, r25_r, r25_my, r25_mx, r25_s, _r25_t0, _r25_t1;
            r25_my = (r25_u + r25_d) / 2;
            r25_mx = (r25_l + r25_r) / 2;
            r25_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r25_mx, r25_d)['cubic-to'](r25_mx + (r25_l - r25_mx) * r4_CKAPPA, r25_d, r25_l, r25_my + (r25_d - r25_my) * r4_CKAPPA, r25_l, r25_my)['cubic-to'](r25_l, r25_my + (r25_u - r25_my) * r4_CKAPPA, r25_mx + (r25_l - r25_mx) * r4_CKAPPA, r25_u, r25_mx, r25_u)['cubic-to'](r25_mx + (r25_r - r25_mx) * r4_CKAPPA, r25_u, r25_r, r25_my + (r25_u - r25_my) * r4_CKAPPA, r25_r, r25_my)['cubic-to'](r25_r, r25_my + (r25_d - r25_my) * r4_CKAPPA, r25_mx + (r25_r - r25_mx) * r4_CKAPPA, r25_d, r25_mx, r25_d);
            return r25_s['points'];
        };
        r4_ORing = function _r4_t41(r26_u, r26_d, r26_l, r26_r, r26_smooth) {
            var r26_u, r26_d, r26_l, r26_r, r26_smooth, r26_myu, r26_myd, r26_mx, r26_s, _r26_t0, _r26_t1;
            r26_myu = r26_u - r26_smooth;
            r26_myd = r26_d + r26_smooth;
            r26_mx = (r26_l + r26_r) / 2;
            r26_s = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r26_mx, r26_d)['cubic-to'](r26_mx + (r26_l - r26_mx) * r4_CKAPPA, r26_d, r26_l, r26_myd + (r26_d - r26_myd) * r4_CKAPPA, r26_l, r26_myd)['line-to'](r26_l, r26_myu)['cubic-to'](r26_l, r26_myu + (r26_u - r26_myu) * r4_CKAPPA, r26_mx + (r26_l - r26_mx) * r4_CKAPPA, r26_u, r26_mx, r26_u)['cubic-to'](r26_mx + (r26_r - r26_mx) * r4_CKAPPA, r26_u, r26_r, r26_myu + (r26_u - r26_myu) * r4_CKAPPA, r26_r, r26_myu)['line-to'](r26_r, r26_myd)['cubic-to'](r26_r, r26_myd + (r26_d - r26_myd) * r4_CKAPPA, r26_mx + (r26_r - r26_mx) * r4_CKAPPA, r26_d, r26_mx, r26_d);
            return r26_s['points'];
        };
        r4_leftwardTopSerif = function _r4_t42(r27_x, r27_y, r27_length) {
            var r27_x, r27_y, r27_length, _r27_t0, _r27_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r27_x + r4_HALFSTROKE, r27_y)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['line-to'](r27_x - r27_length - r4_globalTransform['yx'] * r4_STROKE, r27_y)['to-outline']();
        };
        r4_leftwardBottomSerif = function _r4_t43(r28_x, r28_y, r28_length) {
            var r28_x, r28_y, r28_length, _r28_t0, _r28_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r28_x + r4_HALFSTROKE, r28_y)['heads-to'](r4_LEFTWARD)['set-width'](0, r4_STROKE)['line-to'](r28_x - r28_length + r4_globalTransform['yx'] * r4_STROKE, r28_y)['to-outline']();
        };
        r4_rightwardTopSerif = function _r4_t44(r29_x, r29_y, r29_length) {
            var r29_x, r29_y, r29_length, _r29_t0, _r29_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r29_x - r4_HALFSTROKE, r29_y)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r29_x + r29_length - r4_globalTransform['yx'] * r4_STROKE, r29_y)['to-outline']();
        };
        r4_rightwardBottomSerif = function _r4_t45(r30_x, r30_y, r30_length) {
            var r30_x, r30_y, r30_length, _r30_t0, _r30_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r30_x - r4_HALFSTROKE, r30_y)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r30_x + r30_length + r4_globalTransform['yx'] * r4_STROKE, r30_y)['to-outline']();
        };
        r4_centerTopSerif = function _r4_t46(r31_x, r31_y, r31_length) {
            var r31_x, r31_y, r31_length, _r31_t0, _r31_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r31_x + r31_length - r4_globalTransform['yx'] * r4_STROKE, r31_y)['set-width'](r4_STROKE, 0)['line-to'](r31_x - r31_length - r4_globalTransform['yx'] * r4_STROKE, r31_y)['to-outline']();
        };
        r4_centerBottomSerif = function _r4_t47(r32_x, r32_y, r32_length) {
            var r32_x, r32_y, r32_length, _r32_t0, _r32_t1;
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r32_x + r32_length + r4_globalTransform['yx'] * r4_STROKE, r32_y)['set-width'](0, r4_STROKE)['line-to'](r32_x - r32_length + r4_globalTransform['yx'] * r4_STROKE, r32_y)['to-outline']();
        };
        r4_xsStrand = function _r4_t48(r33__xleft, r33_yleft, r33__xright, r33_yright, r33__halfstroke0, r33__halfstroke1, r33__ess, r33__expansion, r33__roundp) {
            var r33__xleft, r33_yleft, r33__xright, r33_yright, r33__halfstroke0, r33__halfstroke1, r33__ess, r33__expansion, r33__roundp, r33_expansion, r33_halfstroke0, r33_halfstroke1, r33_ess, r33_yItalicCorrection, r33_xItalicCorrection, r33_roundsize, r33_roundleft, r33_roundright, r33_xleft, r33_xright, r33_sxleft, r33_sxright, r33_syleft, r33_syright, _r33_t0, _r33_t1, _r33_t2, _r33_t3;
            r33_expansion = r33__expansion || 0.25;
            r33_halfstroke0 = r33__halfstroke0 || r4_HALFSTROKE;
            r33_halfstroke1 = r33__halfstroke1 || r4_HALFSTROKE;
            r33_ess = r33__ess || (r33_halfstroke0 + r33_halfstroke1) / 2;
            r33_yItalicCorrection = r4_globalTransform['yx'] * 0.985;
            r33_xItalicCorrection = 1 / Math['sqrt'](1 - r33_yItalicCorrection * r33_yItalicCorrection);
            _r33_t2 = r33__roundp || r4_SMOOTHA * 0.4;
            if (r33_yleft < r33_yright)
                _r33_t3 = -1;
            else
                _r33_t3 = 1;
            r33_roundsize = _r33_t2 * _r33_t3;
            r33_roundleft = r33_yleft - r33_roundsize;
            r33_roundright = r33_yright + r33_roundsize;
            r33_xleft = r33__xleft + r33_halfstroke0 * r33_xItalicCorrection;
            r33_xright = r33__xright - r33_halfstroke1 * r33_xItalicCorrection;
            r33_sxleft = r0_mix(r33_xleft, r33_xright, 0.5 - r33_expansion);
            r33_sxright = r0_mix(r33_xleft, r33_xright, 0.5 + r33_expansion);
            r33_syleft = r0_mix(r33_roundleft, r33_roundright, 0.5 - r33_expansion);
            r33_syright = r0_mix(r33_roundleft, r33_roundright, 0.5 + r33_expansion);
            return new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r33_xleft, r33_yleft - r33_halfstroke0 * r33_yItalicCorrection)['set-width'](r33_halfstroke0, r33_halfstroke0)['curve-to'](r33_xleft, r33_roundleft, r33_sxleft, r33_syleft)['set-width'](r33_ess, r33_ess)['line-to'](r33_sxright, r33_syright)['curve-to'](r33_xright, r33_roundright, r33_xright, r33_yright + r33_halfstroke1 * r33_yItalicCorrection)['set-width'](r33_halfstroke1, r33_halfstroke1)['to-outline']();
        };
        r4_sStrand = function _r4_t49(r34_yleft, r34_yright, r34__expansion) {
            var r34_yleft, r34_yright, r34__expansion, _r34_t0, _r34_t1;
            return r4_xsStrand(r4_SB, r34_yleft, r4_RIGHTSB, r34_yright, r4_HALFSTROKE, r4_HALFSTROKE, r4_HALFSTROKE, r34__expansion, r4_SMOOTHA * 0.4);
        };
        r4_halfXStrand = function _r4_t50(r35__leftx, r35_lefty, r35_rightx, r35_righty, r35_turn, r35_straight, r35_tension, r35__fine) {
            var r35__leftx, r35_lefty, r35_rightx, r35_righty, r35_turn, r35_straight, r35_tension, r35__fine, r35_leftx, r35_fine, r35_turnyleft, r35_cyleft, r35_straightxleft, r35_straightyleft, _r35_t0, _r35_t1, _r35_t2, _r35_t3, _r35_t4, _r35_t5, _r35_t6, _r35_t7, _r35_t8, _r35_t9, _r35_t10, _r35_t11, _r35_t12, _r35_t13, _r35_t14, _r35_t15, _r35_t16, _r35_t17, _r35_t18, _r35_t19, _r35_t20, _r35_t21, _r35_t22, _r35_t23, _r35_t24, _r35_t25, _r35_t26, _r35_t27, _r35_t28, _r35_t29, _r35_t30, _r35_t31;
            _r35_t2 = r35__leftx;
            _r35_t3 = r4_HALFSTROKE;
            if (r35_rightx > r35__leftx)
                _r35_t4 = 1;
            else
                _r35_t4 = -1;
            _r35_t5 = _r35_t3 * _r35_t4;
            r35_leftx = _r35_t2 + _r35_t5;
            r35_fine = (r35__fine || r4_STROKE) * 0.5;
            r35_turnyleft = r0_mix(r35_lefty, r35_righty, r35_turn);
            r35_cyleft = r0_mix(r35_turnyleft, r35_righty, r35_tension);
            r35_straightxleft = r0_mix(r35_leftx, r35_rightx, r35_straight);
            r35_straightyleft = r0_mix(r35_cyleft, r35_righty, r35_straight);
            _r35_t6 = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r35_leftx, r35_lefty)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE);
            _r35_t7 = _r35_t6['heads-to'];
            if (r35_lefty < r35_righty)
                _r35_t8 = r4_UPWARD;
            else
                _r35_t8 = r4_DOWNWARD;
            _r35_t9 = _r35_t7['call'](_r35_t6, _r35_t8);
            _r35_t10 = _r35_t9['line-to'];
            _r35_t11 = r35_leftx;
            _r35_t12 = r35_turnyleft;
            _r35_t13 = _r35_t10['call'](_r35_t9, _r35_t11, _r35_t12);
            _r35_t14 = _r35_t13['heads-to'];
            if (r35_lefty < r35_righty)
                _r35_t15 = r4_UPWARD;
            else
                _r35_t15 = r4_DOWNWARD;
            _r35_t16 = _r35_t14['call'](_r35_t13, _r35_t15);
            _r35_t17 = _r35_t16['curve-to'];
            _r35_t18 = r35_leftx;
            _r35_t19 = r35_cyleft;
            _r35_t20 = r35_straightxleft;
            _r35_t21 = r35_straightyleft;
            _r35_t22 = _r35_t17['call'](_r35_t16, _r35_t18, _r35_t19, _r35_t20, _r35_t21);
            _r35_t23 = _r35_t22['set-width'];
            _r35_t24 = r35_fine;
            _r35_t25 = r35_fine;
            _r35_t26 = _r35_t23['call'](_r35_t22, _r35_t24, _r35_t25);
            _r35_t27 = _r35_t26['line-to'];
            _r35_t28 = r35_rightx;
            _r35_t29 = r35_righty;
            _r35_t30 = _r35_t27['call'](_r35_t26, _r35_t28, _r35_t29);
            _r35_t31 = _r35_t30['to-outline'];
            return _r35_t31['call'](_r35_t30);
        };
        r4_xStrand = function _r4_t51(r36__leftx, r36_lefty, r36__rightx, r36_righty, r36_turn, r36_straight, r36_tension) {
            var r36__leftx, r36_lefty, r36__rightx, r36_righty, r36_turn, r36_straight, r36_tension, r36_middlex, r36_middley, _r36_t0, _r36_t1;
            r36_middlex = r0_mix(r36__leftx, r36__rightx, 0.5);
            r36_middley = r0_mix(r36_lefty, r36_righty, 0.5);
            return r4_halfXStrand(r36__leftx, r36_lefty, r36_middlex, r36_middley, r36_turn, r36_straight, r36_tension)['concat'](r4_halfXStrand(r36__rightx, r36_righty, r36_middlex, r36_middley, r36_turn, r36_straight, r36_tension));
        };
        r4_nBowl = function _r4_t52(r37_left, r37_middle, r37_right, r37_fine) {
            var r37_left, r37_middle, r37_right, r37_fine, r37_bandLeft, r37_bandRight, _r37_t0, _r37_t1;
            r37_bandLeft = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r37_right, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r37_right, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r37_middle, r4_XO)['heads-to'](r4_LEFTWARD)['to-outline']();
            r37_bandRight = new r0_Stroke()['set-transform'](r4_globalTransform)['start-from'](r37_middle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r37_left, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r37_fine)['to-outline']();
            return r37_bandLeft['concat'](r37_bandRight);
        };
        r4_XSHookUpper = function _r4_t53(r38_top, r38_left, r38_middle, r38_right, r38_smooth, r38_hook) {
            var r38_top, r38_left, r38_middle, r38_right, r38_smooth, r38_hook, _r38_t0, _r38_t1, _r38_t2;
            return function _r38_t2() {
                var r40_currentGlyph, r40_xn$setwidth$9Jrj, r40_xn$assignunicode$7Hrq, r40_xn$startfrom$1aao, r40_xn$lineto$5sIl, r40_xn$curveto$1aao, r40_xn$cubicto$1aao, r40_xn$putshapes$9Jrj, r40_xn$reverselast$3qIs, r40_include, r40_xn$createstroke$7Hrq, r40_xn$setanchor$9Jrj, r40_xn$applytransform$1aao, r40_xn$dontexport$5sIl, _r40_t0, _r40_t1, _r40_t2, _r40_t3, _r40_t4, _r40_t5, _r40_t6, _r40_t7, _r40_t8, _r40_t9, _r40_t10, _r40_t11, _r40_t12;
                _r40_t0 = this;
                r40_currentGlyph = _r40_t0;
                r40_xn$setwidth$9Jrj = _r40_t0['set-width']['bind'](_r40_t0);
                r40_xn$assignunicode$7Hrq = function _r40_t2(r41_code) {
                    var r41_code, _r41_t0, _r41_t1;
                    r40_currentGlyph['assign-unicode'](r41_code);
                    return r4_unicodeGlyphs[r40_currentGlyph['unicode'][r40_currentGlyph['unicode']['length'] - 1]] = r40_currentGlyph;
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
                r40_xn$applytransform$1aao = _r40_t0['apply-transform']['bind'](_r40_t0);
                r40_xn$dontexport$5sIl = function _r40_t3() {
                    var _r42_t0, _r42_t1;
                    return r40_currentGlyph['dontExport'] = true;
                };
                _r40_t0['gizmo'] = r4_globalTransform;
                _r40_t0['set-width'](r4_WIDTH);
                _r40_t4 = r40_include;
                _r40_t5 = r40_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r38_right - r4_OXHOOK, r38_top - r38_hook)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r38_middle, r38_right, r4_KAPPA_HOOK), r38_top - r4_O, r38_middle, r38_top - r4_O);
                _r40_t6 = _r40_t5['heads-to'];
                if (r38_left < r38_right)
                    _r40_t7 = r4_LEFTWARD;
                else
                    _r40_t7 = r4_RIGHTWARD;
                _r40_t8 = _r40_t6['call'](_r40_t5, _r40_t7);
                _r40_t9 = _r40_t8['arc-hv-to'];
                _r40_t10 = r38_left;
                _r40_t11 = r38_top - r38_smooth;
                _r40_t12 = _r40_t9['call'](_r40_t8, _r40_t10, _r40_t11);
                _r40_t4(_r40_t12);
                return void 0;
            };
        };
        r4_sHookUpper = function _r4_t54(r43_top, r43_smooth, r43_hook, r43__middle) {
            var r43_top, r43_smooth, r43_hook, r43__middle, _r43_t0, _r43_t1, _r43_t2;
            return function _r43_t2() {
                var r45_currentGlyph, r45_xn$setwidth$9Jrj, r45_xn$assignunicode$7Hrq, r45_xn$startfrom$1aao, r45_xn$lineto$5sIl, r45_xn$curveto$1aao, r45_xn$cubicto$1aao, r45_xn$putshapes$9Jrj, r45_xn$reverselast$3qIs, r45_include, r45_xn$createstroke$7Hrq, r45_xn$setanchor$9Jrj, r45_xn$applytransform$1aao, r45_xn$dontexport$5sIl, _r45_t0, _r45_t1, _r45_t2, _r45_t3;
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
                r45_xn$applytransform$1aao = _r45_t0['apply-transform']['bind'](_r45_t0);
                r45_xn$dontexport$5sIl = function _r45_t3() {
                    var _r47_t0, _r47_t1;
                    return r45_currentGlyph['dontExport'] = true;
                };
                _r45_t0['gizmo'] = r4_globalTransform;
                _r45_t0['set-width'](r4_WIDTH);
                r45_include(r4_XSHookUpper(r43_top, r4_SB, r0_fallback(r43__middle, r4_MIDDLE), r4_RIGHTSB, r43_smooth, r43_hook));
                return void 0;
            };
        };
        r4_twoHookUpper = function _r4_t55(r48_top, r48_smooth, r48_hook, r48__middle) {
            var r48_top, r48_smooth, r48_hook, r48__middle, _r48_t0, _r48_t1, _r48_t2;
            return function _r48_t2() {
                var r50_currentGlyph, r50_xn$setwidth$9Jrj, r50_xn$assignunicode$7Hrq, r50_xn$startfrom$1aao, r50_xn$lineto$5sIl, r50_xn$curveto$1aao, r50_xn$cubicto$1aao, r50_xn$putshapes$9Jrj, r50_xn$reverselast$3qIs, r50_include, r50_xn$createstroke$7Hrq, r50_xn$setanchor$9Jrj, r50_xn$applytransform$1aao, r50_xn$dontexport$5sIl, r50_middle, _r50_t0, _r50_t1, _r50_t2, _r50_t3;
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
                r50_xn$applytransform$1aao = _r50_t0['apply-transform']['bind'](_r50_t0);
                r50_xn$dontexport$5sIl = function _r50_t3() {
                    var _r52_t0, _r52_t1;
                    return r50_currentGlyph['dontExport'] = true;
                };
                _r50_t0['gizmo'] = r4_globalTransform;
                _r50_t0['set-width'](r4_WIDTH);
                r50_middle = r48__middle || r4_MIDDLE;
                r50_include(r50_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r4_SB + r4_OXHOOK, r48_top - r48_hook)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r50_middle, r4_SB, r4_KAPPA_HOOK), r48_top - r4_O, r50_middle, r48_top - r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r48_top - r48_smooth));
                return void 0;
            };
        };
        r4_sHookLower = function _r4_t56(r53_bottom, r53_smooth, r53_hook, r53__middle) {
            var r53_bottom, r53_smooth, r53_hook, r53__middle, _r53_t0, _r53_t1, _r53_t2;
            return function _r53_t2() {
                var r55_currentGlyph, r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_include, r55_xn$createstroke$7Hrq, r55_xn$setanchor$9Jrj, r55_xn$applytransform$1aao, r55_xn$dontexport$5sIl, _r55_t0, _r55_t1, _r55_t2, _r55_t3;
                _r55_t0 = this;
                r55_currentGlyph = _r55_t0;
                r55_xn$setwidth$9Jrj = _r55_t0['set-width']['bind'](_r55_t0);
                r55_xn$assignunicode$7Hrq = function _r55_t2(r56_code) {
                    var r56_code, _r56_t0, _r56_t1;
                    r55_currentGlyph['assign-unicode'](r56_code);
                    return r4_unicodeGlyphs[r55_currentGlyph['unicode'][r55_currentGlyph['unicode']['length'] - 1]] = r55_currentGlyph;
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
                r55_xn$applytransform$1aao = _r55_t0['apply-transform']['bind'](_r55_t0);
                r55_xn$dontexport$5sIl = function _r55_t3() {
                    var _r57_t0, _r57_t1;
                    return r55_currentGlyph['dontExport'] = true;
                };
                _r55_t0['gizmo'] = r4_globalTransform;
                _r55_t0['set-width'](r4_WIDTH);
                r55_include(r4_XSHookLower(r53_bottom, r4_SB, r0_fallback(r53__middle, r4_MIDDLE), r4_RIGHTSB, r53_smooth, r53_hook));
                return void 0;
            };
        };
        r4_XSHookLower = function _r4_t57(r58_bottom, r58_left, r58_middle, r58_right, r58_smooth, r58_hook) {
            var r58_bottom, r58_left, r58_middle, r58_right, r58_smooth, r58_hook, _r58_t0, _r58_t1, _r58_t2;
            return function _r58_t2() {
                var r60_currentGlyph, r60_xn$setwidth$9Jrj, r60_xn$assignunicode$7Hrq, r60_xn$startfrom$1aao, r60_xn$lineto$5sIl, r60_xn$curveto$1aao, r60_xn$cubicto$1aao, r60_xn$putshapes$9Jrj, r60_xn$reverselast$3qIs, r60_include, r60_xn$createstroke$7Hrq, r60_xn$setanchor$9Jrj, r60_xn$applytransform$1aao, r60_xn$dontexport$5sIl, _r60_t0, _r60_t1, _r60_t2, _r60_t3, _r60_t4, _r60_t5, _r60_t6, _r60_t7, _r60_t8, _r60_t9, _r60_t10, _r60_t11, _r60_t12, _r60_t13, _r60_t14;
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
                r60_xn$applytransform$1aao = _r60_t0['apply-transform']['bind'](_r60_t0);
                r60_xn$dontexport$5sIl = function _r60_t3() {
                    var _r62_t0, _r62_t1;
                    return r60_currentGlyph['dontExport'] = true;
                };
                _r60_t0['gizmo'] = r4_globalTransform;
                _r60_t0['set-width'](r4_WIDTH);
                _r60_t4 = r60_include;
                _r60_t5 = r60_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r58_right, r58_bottom + r58_smooth)['set-width'](0, r4_STROKE)['arc-vh-to'](r58_middle, r58_bottom + r4_O);
                _r60_t6 = _r60_t5['heads-to'];
                if (r58_left < r58_right)
                    _r60_t7 = r4_LEFTWARD;
                else
                    _r60_t7 = r4_RIGHTWARD;
                _r60_t8 = _r60_t6['call'](_r60_t5, _r60_t7);
                _r60_t9 = _r60_t8['curve-to'];
                _r60_t10 = r0_mix(r58_middle, r58_left, r4_KAPPA_HOOK);
                _r60_t11 = r58_bottom + r4_O;
                _r60_t12 = r58_left + r4_OXHOOK;
                _r60_t13 = r58_bottom + r58_hook;
                _r60_t14 = _r60_t9['call'](_r60_t8, _r60_t10, _r60_t11, _r60_t12, _r60_t13);
                _r60_t4(_r60_t14);
                return void 0;
            };
        };
        r4_smallo = function _r4_t58(r63_u, r63_d, r63_l, r63_r, r63__width) {
            var r63_u, r63_d, r63_l, r63_r, r63__width, _r63_t0, _r63_t1, _r63_t2;
            return function _r63_t2() {
                var r65_currentGlyph, r65_xn$setwidth$9Jrj, r65_xn$assignunicode$7Hrq, r65_xn$startfrom$1aao, r65_xn$lineto$5sIl, r65_xn$curveto$1aao, r65_xn$cubicto$1aao, r65_xn$putshapes$9Jrj, r65_xn$reverselast$3qIs, r65_include, r65_xn$createstroke$7Hrq, r65_xn$setanchor$9Jrj, r65_xn$applytransform$1aao, r65_xn$dontexport$5sIl, r65_middle, r65_width, r65_ymiddlea, r65_ymiddleb, _r65_t0, _r65_t1, _r65_t2, _r65_t3;
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
                r65_xn$applytransform$1aao = _r65_t0['apply-transform']['bind'](_r65_t0);
                r65_xn$dontexport$5sIl = function _r65_t3() {
                    var _r67_t0, _r67_t1;
                    return r65_currentGlyph['dontExport'] = true;
                };
                _r65_t0['gizmo'] = r4_globalTransform;
                _r65_t0['set-width'](r4_WIDTH);
                r65_middle = (r63_l + r63_r) / 2;
                r65_width = r0_fallback(r63__width, r4_STROKE);
                if (r63_u - r63_d > r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) {
                    r65_include(r65_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r65_middle, r63_u - r4_O)['set-width'](r65_width, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r63_l + r4_O, r63_u - r4_SMALLSMOOTHA)['line-to'](r63_l + r4_O, r63_d + r4_SMALLSMOOTHB)['arc-vh-to'](r65_middle, r63_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r63_r - r4_O, r63_d + r4_SMALLSMOOTHA)['line-to'](r63_r - r4_O, r63_u - r4_SMALLSMOOTHB)['arc-vh-to'](r65_middle, r63_u - r4_O)['heads-to'](r4_LEFTWARD));
                } else {
                    r65_ymiddlea = (r63_u - r4_SMALLSMOOTHA + r63_d + r4_SMALLSMOOTHB) / 2;
                    r65_ymiddleb = (r63_u - r4_SMALLSMOOTHB + r63_d + r4_SMALLSMOOTHA) / 2;
                    r65_include(r65_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r65_middle, r63_u - r4_O)['set-width'](r65_width, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r63_l + r4_O, r65_ymiddlea)['arc-vh-to'](r65_middle, r63_d + r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r63_r - r4_O, r65_ymiddleb)['arc-vh-to'](r65_middle, r63_u - r4_O)['heads-to'](r4_LEFTWARD));
                }
                return void 0;
            };
        };
        r4_hbar = function _r4_t59(r68_xleft, r68_xright, r68_y, r68__fine) {
            var r68_xleft, r68_xright, r68_y, r68__fine, _r68_t0, _r68_t1, _r68_t2;
            return function _r68_t2() {
                var r70_currentGlyph, r70_xn$setwidth$9Jrj, r70_xn$assignunicode$7Hrq, r70_xn$startfrom$1aao, r70_xn$lineto$5sIl, r70_xn$curveto$1aao, r70_xn$cubicto$1aao, r70_xn$putshapes$9Jrj, r70_xn$reverselast$3qIs, r70_include, r70_xn$createstroke$7Hrq, r70_xn$setanchor$9Jrj, r70_xn$applytransform$1aao, r70_xn$dontexport$5sIl, r70_fine, _r70_t0, _r70_t1, _r70_t2, _r70_t3;
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
                r70_xn$applytransform$1aao = _r70_t0['apply-transform']['bind'](_r70_t0);
                r70_xn$dontexport$5sIl = function _r70_t3() {
                    var _r72_t0, _r72_t1;
                    return r70_currentGlyph['dontExport'] = true;
                };
                _r70_t0['gizmo'] = r4_globalTransform;
                _r70_t0['set-width'](r4_WIDTH);
                r70_fine = (r68__fine || r4_STROKE) / 2;
                r70_include(r70_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r68_xleft, r68_y)['heads-to'](r4_RIGHTWARD)['set-width'](r70_fine, r70_fine)['line-to'](r68_xright, r68_y)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_vbar = function _r4_t60(r73_x, r73_ydown, r73_yup, r73__fine) {
            var r73_x, r73_ydown, r73_yup, r73__fine, _r73_t0, _r73_t1, _r73_t2;
            return function _r73_t2() {
                var r75_currentGlyph, r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_include, r75_xn$createstroke$7Hrq, r75_xn$setanchor$9Jrj, r75_xn$applytransform$1aao, r75_xn$dontexport$5sIl, r75_fine, _r75_t0, _r75_t1, _r75_t2, _r75_t3, _r75_t4, _r75_t5, _r75_t6, _r75_t7, _r75_t8, _r75_t9, _r75_t10, _r75_t11, _r75_t12, _r75_t13, _r75_t14, _r75_t15, _r75_t16, _r75_t17, _r75_t18, _r75_t19;
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
                r75_xn$applytransform$1aao = _r75_t0['apply-transform']['bind'](_r75_t0);
                r75_xn$dontexport$5sIl = function _r75_t3() {
                    var _r77_t0, _r77_t1;
                    return r75_currentGlyph['dontExport'] = true;
                };
                _r75_t0['gizmo'] = r4_globalTransform;
                _r75_t0['set-width'](r4_WIDTH);
                r75_fine = (r73__fine || r4_STROKE) / 2;
                _r75_t4 = r75_include;
                _r75_t5 = r75_xn$createstroke$7Hrq()['set-transform'](r4_globalTransform)['start-from'](r73_x, r73_ydown);
                _r75_t6 = _r75_t5['heads-to'];
                if (r73_ydown < r73_yup)
                    _r75_t7 = r4_UPWARD;
                else
                    _r75_t7 = r4_DOWNWARD;
                _r75_t8 = _r75_t6['call'](_r75_t5, _r75_t7);
                _r75_t9 = _r75_t8['set-width'];
                _r75_t10 = r75_fine;
                _r75_t11 = r75_fine;
                _r75_t12 = _r75_t9['call'](_r75_t8, _r75_t10, _r75_t11);
                _r75_t13 = _r75_t12['line-to'];
                _r75_t14 = r73_x;
                _r75_t15 = r73_yup;
                _r75_t16 = _r75_t13['call'](_r75_t12, _r75_t14, _r75_t15);
                _r75_t17 = _r75_t16['heads-to'];
                if (r73_ydown < r73_yup)
                    _r75_t18 = r4_UPWARD;
                else
                    _r75_t18 = r4_DOWNWARD;
                _r75_t19 = _r75_t17['call'](_r75_t16, _r75_t18);
                _r75_t4(_r75_t19);
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
        r4_xn$createglyph$7Hrq('dotAbove', function _r4_t61() {
            var r79_currentGlyph, r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, r79_include, r79_xn$createstroke$7Hrq, r79_xn$setanchor$9Jrj, r79_xn$applytransform$1aao, r79_xn$dontexport$5sIl, _r79_t0, _r79_t1, _r79_t2, _r79_t3;
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
            r79_xn$applytransform$1aao = _r79_t0['apply-transform']['bind'](_r79_t0);
            r79_xn$dontexport$5sIl = function _r79_t3() {
                var _r81_t0, _r81_t1;
                return r79_currentGlyph['dontExport'] = true;
            };
            _r79_t0['gizmo'] = r4_globalTransform;
            _r79_t0['set-width'](r4_WIDTH);
            r79_xn$setwidth$9Jrj(0);
            r79_xn$assignunicode$7Hrq(775);
            r79_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r79_include([r4_Ring(r4_XH + r4_ACCENT + r4_DOTRADIUS, r4_XH + r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dieresisAbove', function _r4_t62() {
            var r83_currentGlyph, r83_xn$setwidth$9Jrj, r83_xn$assignunicode$7Hrq, r83_xn$startfrom$1aao, r83_xn$lineto$5sIl, r83_xn$curveto$1aao, r83_xn$cubicto$1aao, r83_xn$putshapes$9Jrj, r83_xn$reverselast$3qIs, r83_include, r83_xn$createstroke$7Hrq, r83_xn$setanchor$9Jrj, r83_xn$applytransform$1aao, r83_xn$dontexport$5sIl, _r83_t0, _r83_t1, _r83_t2, _r83_t3;
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
            r83_xn$applytransform$1aao = _r83_t0['apply-transform']['bind'](_r83_t0);
            r83_xn$dontexport$5sIl = function _r83_t3() {
                var _r85_t0, _r85_t1;
                return r83_currentGlyph['dontExport'] = true;
            };
            _r83_t0['gizmo'] = r4_globalTransform;
            _r83_t0['set-width'](r4_WIDTH);
            r83_xn$setwidth$9Jrj(0);
            r83_xn$assignunicode$7Hrq(776);
            r83_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r83_include([
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius - r4_markExtend, r4_markMiddle + r4_markDotsRadius - r4_markExtend),
                r4_Ring(r4_XH + r4_ACCENT + r4_markDotsRadius, r4_XH + r4_ACCENT - r4_markDotsRadius, r4_markMiddle - r4_markDotsRadius + r4_markExtend, r4_markMiddle + r4_markDotsRadius + r4_markExtend)
            ]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ringAbove', function _r4_t63() {
            var r87_currentGlyph, r87_xn$setwidth$9Jrj, r87_xn$assignunicode$7Hrq, r87_xn$startfrom$1aao, r87_xn$lineto$5sIl, r87_xn$curveto$1aao, r87_xn$cubicto$1aao, r87_xn$putshapes$9Jrj, r87_xn$reverselast$3qIs, r87_include, r87_xn$createstroke$7Hrq, r87_xn$setanchor$9Jrj, r87_xn$applytransform$1aao, r87_xn$dontexport$5sIl, r87_radiusOut, r87_radiusIn, _r87_t0, _r87_t1, _r87_t2, _r87_t3;
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
            r87_xn$applytransform$1aao = _r87_t0['apply-transform']['bind'](_r87_t0);
            r87_xn$dontexport$5sIl = function _r87_t3() {
                var _r89_t0, _r89_t1;
                return r87_currentGlyph['dontExport'] = true;
            };
            _r87_t0['gizmo'] = r4_globalTransform;
            _r87_t0['set-width'](r4_WIDTH);
            r87_xn$setwidth$9Jrj(0);
            r87_xn$assignunicode$7Hrq(778);
            r87_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r87_radiusOut = r4_DOTRADIUS * 1.5;
            r87_radiusIn = r4_DOTRADIUS * 0.7;
            r87_include([
                r4_Ring(r4_XH + r4_ACCENT + r87_radiusOut, r4_XH + r4_ACCENT - r87_radiusOut, r4_markMiddle - r87_radiusOut, r4_markMiddle + r87_radiusOut),
                r4_Ring(r4_XH + r4_ACCENT + r87_radiusIn, r4_XH + r4_ACCENT - r87_radiusIn, r4_markMiddle - r87_radiusIn, r4_markMiddle + r87_radiusIn)
            ]);
            r87_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('graveAbove', function _r4_t64() {
            var r91_currentGlyph, r91_xn$setwidth$9Jrj, r91_xn$assignunicode$7Hrq, r91_xn$startfrom$1aao, r91_xn$lineto$5sIl, r91_xn$curveto$1aao, r91_xn$cubicto$1aao, r91_xn$putshapes$9Jrj, r91_xn$reverselast$3qIs, r91_include, r91_xn$createstroke$7Hrq, r91_xn$setanchor$9Jrj, r91_xn$applytransform$1aao, r91_xn$dontexport$5sIl, _r91_t0, _r91_t1, _r91_t2, _r91_t3;
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
            r91_xn$applytransform$1aao = _r91_t0['apply-transform']['bind'](_r91_t0);
            r91_xn$dontexport$5sIl = function _r91_t3() {
                var _r93_t0, _r93_t1;
                return r91_currentGlyph['dontExport'] = true;
            };
            _r91_t0['gizmo'] = r4_globalTransform;
            _r91_t0['set-width'](r4_WIDTH);
            r91_xn$setwidth$9Jrj(0);
            r91_xn$assignunicode$7Hrq(768);
            r91_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r91_include(r91_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acuteAbove', function _r4_t65() {
            var r95_currentGlyph, r95_xn$setwidth$9Jrj, r95_xn$assignunicode$7Hrq, r95_xn$startfrom$1aao, r95_xn$lineto$5sIl, r95_xn$curveto$1aao, r95_xn$cubicto$1aao, r95_xn$putshapes$9Jrj, r95_xn$reverselast$3qIs, r95_include, r95_xn$createstroke$7Hrq, r95_xn$setanchor$9Jrj, r95_xn$applytransform$1aao, r95_xn$dontexport$5sIl, _r95_t0, _r95_t1, _r95_t2, _r95_t3;
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
            r95_xn$applytransform$1aao = _r95_t0['apply-transform']['bind'](_r95_t0);
            r95_xn$dontexport$5sIl = function _r95_t3() {
                var _r97_t0, _r97_t1;
                return r95_currentGlyph['dontExport'] = true;
            };
            _r95_t0['gizmo'] = r4_globalTransform;
            _r95_t0['set-width'](r4_WIDTH);
            r95_xn$setwidth$9Jrj(0);
            r95_xn$assignunicode$7Hrq(769);
            r95_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r95_include(r95_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r4_markMiddle + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('circumflexAbove', function _r4_t66() {
            var r99_currentGlyph, r99_xn$setwidth$9Jrj, r99_xn$assignunicode$7Hrq, r99_xn$startfrom$1aao, r99_xn$lineto$5sIl, r99_xn$curveto$1aao, r99_xn$cubicto$1aao, r99_xn$putshapes$9Jrj, r99_xn$reverselast$3qIs, r99_include, r99_xn$createstroke$7Hrq, r99_xn$setanchor$9Jrj, r99_xn$applytransform$1aao, r99_xn$dontexport$5sIl, _r99_t0, _r99_t1, _r99_t2, _r99_t3;
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
            r99_xn$applytransform$1aao = _r99_t0['apply-transform']['bind'](_r99_t0);
            r99_xn$dontexport$5sIl = function _r99_t3() {
                var _r101_t0, _r101_t1;
                return r99_currentGlyph['dontExport'] = true;
            };
            _r99_t0['gizmo'] = r4_globalTransform;
            _r99_t0['set-width'](r4_WIDTH);
            r99_xn$setwidth$9Jrj(0);
            r99_xn$assignunicode$7Hrq(770);
            r99_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r99_include(r99_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            r99_include(r99_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkBot + r4_markStress - r4_markFine)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkTop + r4_markFine * 0.7)['heads-to'](r4_UPWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('caronAbove', function _r4_t67() {
            var r103_currentGlyph, r103_xn$setwidth$9Jrj, r103_xn$assignunicode$7Hrq, r103_xn$startfrom$1aao, r103_xn$lineto$5sIl, r103_xn$curveto$1aao, r103_xn$cubicto$1aao, r103_xn$putshapes$9Jrj, r103_xn$reverselast$3qIs, r103_include, r103_xn$createstroke$7Hrq, r103_xn$setanchor$9Jrj, r103_xn$applytransform$1aao, r103_xn$dontexport$5sIl, _r103_t0, _r103_t1, _r103_t2, _r103_t3;
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
            r103_xn$applytransform$1aao = _r103_t0['apply-transform']['bind'](_r103_t0);
            r103_xn$dontexport$5sIl = function _r103_t3() {
                var _r105_t0, _r105_t1;
                return r103_currentGlyph['dontExport'] = true;
            };
            _r103_t0['gizmo'] = r4_globalTransform;
            _r103_t0['set-width'](r4_WIDTH);
            r103_xn$setwidth$9Jrj(0);
            r103_xn$assignunicode$7Hrq(780);
            r103_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r103_include(r103_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r4_markExtend - r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            r103_include(r103_xn$createstroke$7Hrq()['start-from'](r4_markMiddle + r4_markExtend + r4_markStress, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['line-to'](r4_markMiddle, r4_aboveMarkBot - r4_markFine * 1.7 + r4_markStress)['heads-to'](r4_DOWNWARD)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('tildeAbove', function _r4_t68() {
            var r107_currentGlyph, r107_xn$setwidth$9Jrj, r107_xn$assignunicode$7Hrq, r107_xn$startfrom$1aao, r107_xn$lineto$5sIl, r107_xn$curveto$1aao, r107_xn$cubicto$1aao, r107_xn$putshapes$9Jrj, r107_xn$reverselast$3qIs, r107_include, r107_xn$createstroke$7Hrq, r107_xn$setanchor$9Jrj, r107_xn$applytransform$1aao, r107_xn$dontexport$5sIl, r107_leftEnd, r107_rightEnd, r107_ttop, r107_tbot, r107_top, r107_bot, r107_tildeWave, r107_tildeWaveX, r107_tildeWaveEnd, _r107_t0, _r107_t1, _r107_t2, _r107_t3;
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
            r107_xn$applytransform$1aao = _r107_t0['apply-transform']['bind'](_r107_t0);
            r107_xn$dontexport$5sIl = function _r107_t3() {
                var _r109_t0, _r109_t1;
                return r107_currentGlyph['dontExport'] = true;
            };
            _r107_t0['gizmo'] = r4_globalTransform;
            _r107_t0['set-width'](r4_WIDTH);
            r107_xn$setwidth$9Jrj(0);
            r107_xn$assignunicode$7Hrq(771);
            r107_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r107_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r107_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r107_ttop = r4_aboveMarkTop;
            r107_tbot = r4_aboveMarkBot + r4_markFine / 2;
            r107_top = r107_ttop + r4_markFine * 2;
            r107_bot = r107_tbot - r4_markFine * 2;
            r107_tildeWave = r0_linreg(40, 1.52, 52, 1.33, r4_markStress);
            r107_tildeWaveX = 0.52;
            r107_tildeWaveEnd = 0;
            r107_include(r107_xn$createstroke$7Hrq()['start-from'](r107_leftEnd, r0_mix(r107_tbot, r107_ttop, r107_tildeWaveEnd))['set-width'](r4_markHalfStroke, r4_markHalfStroke)['cubic-to'](r0_mix(r107_leftEnd, r107_rightEnd, r107_tildeWaveX), r0_mix(r107_bot, r107_top, r107_tildeWave), r0_mix(r107_leftEnd, r107_rightEnd, 1 - r107_tildeWaveX), r0_mix(r107_bot, r107_top, 1 - r107_tildeWave), r107_rightEnd, r0_mix(r107_tbot, r107_ttop, 1 - r107_tildeWaveEnd))['set-samples'](11));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('macronAbove', function _r4_t69() {
            var r111_currentGlyph, r111_xn$setwidth$9Jrj, r111_xn$assignunicode$7Hrq, r111_xn$startfrom$1aao, r111_xn$lineto$5sIl, r111_xn$curveto$1aao, r111_xn$cubicto$1aao, r111_xn$putshapes$9Jrj, r111_xn$reverselast$3qIs, r111_include, r111_xn$createstroke$7Hrq, r111_xn$setanchor$9Jrj, r111_xn$applytransform$1aao, r111_xn$dontexport$5sIl, r111_leftEnd, r111_rightEnd, _r111_t0, _r111_t1, _r111_t2, _r111_t3;
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
            r111_xn$applytransform$1aao = _r111_t0['apply-transform']['bind'](_r111_t0);
            r111_xn$dontexport$5sIl = function _r111_t3() {
                var _r113_t0, _r113_t1;
                return r111_currentGlyph['dontExport'] = true;
            };
            _r111_t0['gizmo'] = r4_globalTransform;
            _r111_t0['set-width'](r4_WIDTH);
            r111_xn$setwidth$9Jrj(0);
            r111_xn$assignunicode$7Hrq(772);
            r111_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r111_leftEnd = r4_markMiddle - r4_markExtend * 1.5;
            r111_rightEnd = r4_markMiddle + r4_markExtend * 1.5;
            r111_include(r111_xn$createstroke$7Hrq()['start-from'](r111_leftEnd, r4_aboveMarkTop - r4_DOTRADIUS)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_RIGHTWARD)['line-to'](r111_rightEnd, r4_aboveMarkTop - r4_DOTRADIUS)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('breveAbove', function _r4_t70() {
            var r115_currentGlyph, r115_xn$setwidth$9Jrj, r115_xn$assignunicode$7Hrq, r115_xn$startfrom$1aao, r115_xn$lineto$5sIl, r115_xn$curveto$1aao, r115_xn$cubicto$1aao, r115_xn$putshapes$9Jrj, r115_xn$reverselast$3qIs, r115_include, r115_xn$createstroke$7Hrq, r115_xn$setanchor$9Jrj, r115_xn$applytransform$1aao, r115_xn$dontexport$5sIl, r115_leftEnd, r115_rightEnd, _r115_t0, _r115_t1, _r115_t2, _r115_t3;
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
            r115_xn$applytransform$1aao = _r115_t0['apply-transform']['bind'](_r115_t0);
            r115_xn$dontexport$5sIl = function _r115_t3() {
                var _r117_t0, _r117_t1;
                return r115_currentGlyph['dontExport'] = true;
            };
            _r115_t0['gizmo'] = r4_globalTransform;
            _r115_t0['set-width'](r4_WIDTH);
            r115_xn$setwidth$9Jrj(0);
            r115_xn$assignunicode$7Hrq(774);
            r115_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r115_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r115_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r115_include(r115_xn$createstroke$7Hrq()['start-from'](r115_leftEnd, r4_aboveMarkTop)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_DOWNWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkBot + r4_markHalfStroke)['arc-hv-to'](r115_rightEnd, r4_aboveMarkTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('archAbove', function _r4_t71() {
            var r119_currentGlyph, r119_xn$setwidth$9Jrj, r119_xn$assignunicode$7Hrq, r119_xn$startfrom$1aao, r119_xn$lineto$5sIl, r119_xn$curveto$1aao, r119_xn$cubicto$1aao, r119_xn$putshapes$9Jrj, r119_xn$reverselast$3qIs, r119_include, r119_xn$createstroke$7Hrq, r119_xn$setanchor$9Jrj, r119_xn$applytransform$1aao, r119_xn$dontexport$5sIl, r119_leftEnd, r119_rightEnd, _r119_t0, _r119_t1, _r119_t2, _r119_t3;
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
            r119_xn$applytransform$1aao = _r119_t0['apply-transform']['bind'](_r119_t0);
            r119_xn$dontexport$5sIl = function _r119_t3() {
                var _r121_t0, _r121_t1;
                return r119_currentGlyph['dontExport'] = true;
            };
            _r119_t0['gizmo'] = r4_globalTransform;
            _r119_t0['set-width'](r4_WIDTH);
            r119_xn$setwidth$9Jrj(0);
            r119_xn$assignunicode$7Hrq(785);
            r119_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r119_leftEnd = r4_markMiddle - r4_markExtend * 1.2;
            r119_rightEnd = r4_markMiddle + r4_markExtend * 1.2;
            r119_include(r119_xn$createstroke$7Hrq()['start-from'](r119_leftEnd, r4_aboveMarkBot)['set-width'](r4_markHalfStroke, r4_markHalfStroke)['heads-to'](r4_UPWARD)['arc-vh-to'](r4_markMiddle, r4_aboveMarkTop - r4_markHalfStroke)['arc-hv-to'](r119_rightEnd, r4_aboveMarkBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hookabove', function _r4_t72() {
            var r123_currentGlyph, r123_xn$setwidth$9Jrj, r123_xn$assignunicode$7Hrq, r123_xn$startfrom$1aao, r123_xn$lineto$5sIl, r123_xn$curveto$1aao, r123_xn$cubicto$1aao, r123_xn$putshapes$9Jrj, r123_xn$reverselast$3qIs, r123_include, r123_xn$createstroke$7Hrq, r123_xn$setanchor$9Jrj, r123_xn$applytransform$1aao, r123_xn$dontexport$5sIl, r123_fine, r123_hookBot, r123_hookTop, _r123_t0, _r123_t1, _r123_t2, _r123_t3;
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
            r123_xn$applytransform$1aao = _r123_t0['apply-transform']['bind'](_r123_t0);
            r123_xn$dontexport$5sIl = function _r123_t3() {
                var _r125_t0, _r125_t1;
                return r123_currentGlyph['dontExport'] = true;
            };
            _r123_t0['gizmo'] = r4_globalTransform;
            _r123_t0['set-width'](r4_WIDTH);
            r123_xn$setwidth$9Jrj(0);
            r123_xn$assignunicode$7Hrq(777);
            r123_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r123_fine = Math['min'](r4_markFine, (r4_aboveMarkTop - r4_aboveMarkBot) * 0.2);
            r123_hookBot = r4_aboveMarkBot - r123_fine / 2;
            r123_hookTop = r0_mix(r4_aboveMarkBot, r4_aboveMarkTop, 0.9) + r123_fine / 2;
            r123_include(r123_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r123_fine * r4_ITALICCOR, r123_hookBot)['heads-to'](r4_RIGHTWARD)['set-width'](r123_fine * 2, 0)['line-to'](r4_markMiddle + r123_fine * 0.5, r123_hookBot)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r123_hookBot, r123_hookTop, 0.5))['arc-vh-to'](r4_markMiddle, r123_hookTop)['line-to'](r4_markMiddle - r4_markExtend + r123_fine, r123_hookTop)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleGraveAbove', function _r4_t73() {
            var r127_currentGlyph, r127_xn$setwidth$9Jrj, r127_xn$assignunicode$7Hrq, r127_xn$startfrom$1aao, r127_xn$lineto$5sIl, r127_xn$curveto$1aao, r127_xn$cubicto$1aao, r127_xn$putshapes$9Jrj, r127_xn$reverselast$3qIs, r127_include, r127_xn$createstroke$7Hrq, r127_xn$setanchor$9Jrj, r127_xn$applytransform$1aao, r127_xn$dontexport$5sIl, r127_m1, r127_m2, _r127_t0, _r127_t1, _r127_t2, _r127_t3;
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
            r127_xn$applytransform$1aao = _r127_t0['apply-transform']['bind'](_r127_t0);
            r127_xn$dontexport$5sIl = function _r127_t3() {
                var _r129_t0, _r129_t1;
                return r127_currentGlyph['dontExport'] = true;
            };
            _r127_t0['gizmo'] = r4_globalTransform;
            _r127_t0['set-width'](r4_WIDTH);
            r127_xn$setwidth$9Jrj(0);
            r127_xn$assignunicode$7Hrq(783);
            r127_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r127_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r127_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r127_m1 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r127_m1 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r127_include(r127_xn$createstroke$7Hrq()['start-from'](r127_m2 + r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r127_m2 - r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('doubleAcuteAbove', function _r4_t74() {
            var r131_currentGlyph, r131_xn$setwidth$9Jrj, r131_xn$assignunicode$7Hrq, r131_xn$startfrom$1aao, r131_xn$lineto$5sIl, r131_xn$curveto$1aao, r131_xn$cubicto$1aao, r131_xn$putshapes$9Jrj, r131_xn$reverselast$3qIs, r131_include, r131_xn$createstroke$7Hrq, r131_xn$setanchor$9Jrj, r131_xn$applytransform$1aao, r131_xn$dontexport$5sIl, r131_m1, r131_m2, _r131_t0, _r131_t1, _r131_t2, _r131_t3;
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
            r131_xn$applytransform$1aao = _r131_t0['apply-transform']['bind'](_r131_t0);
            r131_xn$dontexport$5sIl = function _r131_t3() {
                var _r133_t0, _r133_t1;
                return r131_currentGlyph['dontExport'] = true;
            };
            _r131_t0['gizmo'] = r4_globalTransform;
            _r131_t0['set-width'](r4_WIDTH);
            r131_xn$setwidth$9Jrj(0);
            r131_xn$assignunicode$7Hrq(779);
            r131_xn$setanchor$9Jrj('above', r4_MARK, r4_markMiddle, r4_XH, r4_markMiddle, r4_aboveMarkTop);
            r131_m1 = r4_markMiddle - r4_markExtend * 0.75;
            r131_m2 = r4_markMiddle + r4_markExtend * 0.75;
            r131_include(r131_xn$createstroke$7Hrq()['start-from'](r131_m1 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r131_m1 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            r131_include(r131_xn$createstroke$7Hrq()['start-from'](r131_m2 - r4_markStress, r4_aboveMarkBot)['set-width'](r4_markFine, r4_markFine)['line-to'](r131_m2 + r4_markExtend, r4_aboveMarkTop)['set-width'](r4_markStress, r4_markStress)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotBelow', function _r4_t75() {
            var r135_currentGlyph, r135_xn$setwidth$9Jrj, r135_xn$assignunicode$7Hrq, r135_xn$startfrom$1aao, r135_xn$lineto$5sIl, r135_xn$curveto$1aao, r135_xn$cubicto$1aao, r135_xn$putshapes$9Jrj, r135_xn$reverselast$3qIs, r135_include, r135_xn$createstroke$7Hrq, r135_xn$setanchor$9Jrj, r135_xn$applytransform$1aao, r135_xn$dontexport$5sIl, _r135_t0, _r135_t1, _r135_t2, _r135_t3;
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
            r135_xn$applytransform$1aao = _r135_t0['apply-transform']['bind'](_r135_t0);
            r135_xn$dontexport$5sIl = function _r135_t3() {
                var _r137_t0, _r137_t1;
                return r135_currentGlyph['dontExport'] = true;
            };
            _r135_t0['gizmo'] = r4_globalTransform;
            _r135_t0['set-width'](r4_WIDTH);
            r135_xn$setwidth$9Jrj(0);
            r135_xn$assignunicode$7Hrq(803);
            r135_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r135_include([r4_Ring(0 - r4_ACCENT + r4_DOTRADIUS, 0 - r4_ACCENT - r4_DOTRADIUS, r4_markMiddle - r4_DOTRADIUS, r4_markMiddle + r4_DOTRADIUS)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cedillaBelow', function _r4_t76() {
            var r139_currentGlyph, r139_xn$setwidth$9Jrj, r139_xn$assignunicode$7Hrq, r139_xn$startfrom$1aao, r139_xn$lineto$5sIl, r139_xn$curveto$1aao, r139_xn$cubicto$1aao, r139_xn$putshapes$9Jrj, r139_xn$reverselast$3qIs, r139_include, r139_xn$createstroke$7Hrq, r139_xn$setanchor$9Jrj, r139_xn$applytransform$1aao, r139_xn$dontexport$5sIl, r139_fine, r139_cedillaTop, r139_cedillaBot, _r139_t0, _r139_t1, _r139_t2, _r139_t3;
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
            r139_xn$applytransform$1aao = _r139_t0['apply-transform']['bind'](_r139_t0);
            r139_xn$dontexport$5sIl = function _r139_t3() {
                var _r141_t0, _r141_t1;
                return r139_currentGlyph['dontExport'] = true;
            };
            _r139_t0['gizmo'] = r4_globalTransform;
            _r139_t0['set-width'](r4_WIDTH);
            r139_xn$setwidth$9Jrj(0);
            r139_xn$assignunicode$7Hrq(807);
            r139_xn$setanchor$9Jrj('below', r4_MARK, r4_markMiddle, 0, r4_markMiddle, r4_belowMarkBot);
            r139_fine = Math['min'](r4_markFine, (r4_belowMarkTop - r4_belowMarkBot) * 0.2);
            r139_cedillaTop = r4_belowMarkTop + r139_fine * 0.85;
            r139_cedillaBot = r0_mix(r4_belowMarkTop, r4_belowMarkBot, 0.8);
            r139_include(r139_xn$createstroke$7Hrq()['start-from'](r4_markMiddle - r139_fine * r4_ITALICCOR, r139_cedillaTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r139_fine * 2)['line-to'](r4_markMiddle + r139_fine * 0.5, r139_cedillaTop)['arc-hv-to'](r4_markMiddle + r4_markExtend - r4_O, r0_mix(r139_cedillaTop, r139_cedillaBot, 0.5))['arc-vh-to'](r4_markMiddle, r139_cedillaBot)['line-to'](r4_markMiddle - r4_markExtend, r139_cedillaBot)['heads-to'](r4_LEFTWARD));
            r139_include(r139_xn$createstroke$7Hrq()['start-from'](r4_markMiddle, 0)['heads-to'](r4_DOWNWARD)['set-width'](r139_fine, r139_fine)['line-to'](r4_markMiddle, r139_cedillaTop - r139_fine)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('A', function _r4_t77() {
            var r143_currentGlyph, r143_xn$setwidth$9Jrj, r143_xn$assignunicode$7Hrq, r143_xn$startfrom$1aao, r143_xn$lineto$5sIl, r143_xn$curveto$1aao, r143_xn$cubicto$1aao, r143_xn$putshapes$9Jrj, r143_xn$reverselast$3qIs, r143_include, r143_xn$createstroke$7Hrq, r143_xn$setanchor$9Jrj, r143_xn$applytransform$1aao, r143_xn$dontexport$5sIl, r143_TURN, _r143_t0, _r143_t1, _r143_t2, _r143_t3;
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
            r143_xn$applytransform$1aao = _r143_t0['apply-transform']['bind'](_r143_t0);
            r143_xn$dontexport$5sIl = function _r143_t3() {
                var _r145_t0, _r145_t1;
                return r143_currentGlyph['dontExport'] = true;
            };
            _r143_t0['gizmo'] = r4_globalTransform;
            _r143_t0['set-width'](r4_WIDTH);
            r143_xn$setwidth$9Jrj(r4_WIDTH);
            r143_xn$assignunicode$7Hrq('A');
            r143_include(r4_capitalMarks);
            r143_TURN = r4_XH * 0.1;
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r143_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r143_TURN, r4_CAP, 0.27), r4_MIDDLE - r4_STROKE / 2, r4_CAP)['set-width'](0, r4_STROKE * 0.8));
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r143_TURN)['heads-to'](r4_UPWARD)['curve-to'](r4_RIGHTSB, r0_mix(r143_TURN, r4_CAP, 0.27), r4_MIDDLE + r4_STROKE / 2, r4_CAP)['set-width'](r4_STROKE * 0.8, 0));
            r143_include(r143_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r143_xn$startfrom$1aao(r4_MIDDLE - r4_STROKE / 2, r4_CAP);
            r143_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, r4_CAP);
            r143_xn$lineto$5sIl(r4_MIDDLE, r4_CAP - r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('V', function _r4_t78() {
            var r147_currentGlyph, r147_xn$setwidth$9Jrj, r147_xn$assignunicode$7Hrq, r147_xn$startfrom$1aao, r147_xn$lineto$5sIl, r147_xn$curveto$1aao, r147_xn$cubicto$1aao, r147_xn$putshapes$9Jrj, r147_xn$reverselast$3qIs, r147_include, r147_xn$createstroke$7Hrq, r147_xn$setanchor$9Jrj, r147_xn$applytransform$1aao, r147_xn$dontexport$5sIl, r147_TURN, _r147_t0, _r147_t1, _r147_t2, _r147_t3;
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
            r147_xn$applytransform$1aao = _r147_t0['apply-transform']['bind'](_r147_t0);
            r147_xn$dontexport$5sIl = function _r147_t3() {
                var _r149_t0, _r149_t1;
                return r147_currentGlyph['dontExport'] = true;
            };
            _r147_t0['gizmo'] = r4_globalTransform;
            _r147_t0['set-width'](r4_WIDTH);
            r147_xn$setwidth$9Jrj(r4_WIDTH);
            r147_xn$assignunicode$7Hrq('V');
            r147_include(r4_capitalMarks);
            r147_TURN = r4_CAP * 0.9;
            r147_include(r147_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r147_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r147_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r147_include(r147_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r147_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r147_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r147_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r147_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r147_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('W', function _r4_t79() {
            var r151_currentGlyph, r151_xn$setwidth$9Jrj, r151_xn$assignunicode$7Hrq, r151_xn$startfrom$1aao, r151_xn$lineto$5sIl, r151_xn$curveto$1aao, r151_xn$cubicto$1aao, r151_xn$putshapes$9Jrj, r151_xn$reverselast$3qIs, r151_include, r151_xn$createstroke$7Hrq, r151_xn$setanchor$9Jrj, r151_xn$applytransform$1aao, r151_xn$dontexport$5sIl, r151_TURN, r151_turn2, r151_wheight, r151_bottomStroke, r151_m1, r151_m2, _r151_t0, _r151_t1, _r151_t2, _r151_t3;
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
            r151_xn$applytransform$1aao = _r151_t0['apply-transform']['bind'](_r151_t0);
            r151_xn$dontexport$5sIl = function _r151_t3() {
                var _r153_t0, _r153_t1;
                return r151_currentGlyph['dontExport'] = true;
            };
            _r151_t0['gizmo'] = r4_globalTransform;
            _r151_t0['set-width'](r4_WIDTH);
            r151_xn$setwidth$9Jrj(r4_WIDTH);
            r151_xn$assignunicode$7Hrq('W');
            r151_include(r4_capitalMarks);
            r151_TURN = r4_CAP * 0.75;
            r151_turn2 = r4_CAP * 0.59;
            r151_wheight = r4_CAP * 0.6;
            r151_bottomStroke = r4_adviceBlackness(5.2);
            r151_m1 = r4_WIDTH * 0.3;
            r151_m2 = r4_WIDTH * 0.7;
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r151_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r151_TURN, r151_m1 - r151_bottomStroke / 2, 0)['set-width'](r151_bottomStroke, 0));
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r151_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r151_TURN, r151_m2 + r151_bottomStroke / 2, 0)['set-width'](0, r151_bottomStroke));
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r151_bottomStroke / 2, r151_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r151_bottomStroke)['line-to'](r4_MIDDLE + r151_bottomStroke / 2, r151_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r151_bottomStroke / 2, (1 - 0.1) * r151_turn2, r151_m1 + r151_bottomStroke / 2, 0)['set-width'](0, r151_bottomStroke));
            r151_include(r151_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r151_bottomStroke / 2, r151_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r151_bottomStroke, 0)['line-to'](r4_MIDDLE - r151_bottomStroke / 2, r151_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r151_bottomStroke / 2, (1 - 0.1) * r151_turn2, r151_m2 - r151_bottomStroke / 2, 0)['set-width'](r151_bottomStroke, 0));
            r151_xn$startfrom$1aao(r151_m1 + r151_bottomStroke / 2, 0);
            r151_xn$lineto$5sIl(r151_m1 - r151_bottomStroke / 2, 0);
            r151_xn$lineto$5sIl(r151_m1, r151_bottomStroke);
            r151_xn$startfrom$1aao(r151_m2 + r151_bottomStroke / 2, 0);
            r151_xn$lineto$5sIl(r151_m2 - r151_bottomStroke / 2, 0);
            r151_xn$lineto$5sIl(r151_m2, r151_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('X', function _r4_t80() {
            var r155_currentGlyph, r155_xn$setwidth$9Jrj, r155_xn$assignunicode$7Hrq, r155_xn$startfrom$1aao, r155_xn$lineto$5sIl, r155_xn$curveto$1aao, r155_xn$cubicto$1aao, r155_xn$putshapes$9Jrj, r155_xn$reverselast$3qIs, r155_include, r155_xn$createstroke$7Hrq, r155_xn$setanchor$9Jrj, r155_xn$applytransform$1aao, r155_xn$dontexport$5sIl, _r155_t0, _r155_t1, _r155_t2, _r155_t3;
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
            r155_xn$applytransform$1aao = _r155_t0['apply-transform']['bind'](_r155_t0);
            r155_xn$dontexport$5sIl = function _r155_t3() {
                var _r157_t0, _r157_t1;
                return r155_currentGlyph['dontExport'] = true;
            };
            _r155_t0['gizmo'] = r4_globalTransform;
            _r155_t0['set-width'](r4_WIDTH);
            r155_xn$setwidth$9Jrj(r4_WIDTH);
            r155_xn$assignunicode$7Hrq('X');
            r155_include(r4_capitalMarks);
            r155_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_CAP, 0.1, 0.4, 0.28));
            r155_include(r4_xStrand(r4_SB, r4_CAP, r4_RIGHTSB, 0, 0.1, 0.4, 0.28));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Y', function _r4_t81() {
            var r159_currentGlyph, r159_xn$setwidth$9Jrj, r159_xn$assignunicode$7Hrq, r159_xn$startfrom$1aao, r159_xn$lineto$5sIl, r159_xn$curveto$1aao, r159_xn$cubicto$1aao, r159_xn$putshapes$9Jrj, r159_xn$reverselast$3qIs, r159_include, r159_xn$createstroke$7Hrq, r159_xn$setanchor$9Jrj, r159_xn$applytransform$1aao, r159_xn$dontexport$5sIl, r159_cross, _r159_t0, _r159_t1, _r159_t2, _r159_t3;
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
            r159_xn$applytransform$1aao = _r159_t0['apply-transform']['bind'](_r159_t0);
            r159_xn$dontexport$5sIl = function _r159_t3() {
                var _r161_t0, _r161_t1;
                return r159_currentGlyph['dontExport'] = true;
            };
            _r159_t0['gizmo'] = r4_globalTransform;
            _r159_t0['set-width'](r4_WIDTH);
            r159_xn$setwidth$9Jrj(r4_WIDTH);
            r159_xn$assignunicode$7Hrq('Y');
            r159_include(r4_capitalMarks);
            r159_cross = r4_CAP * 0.4;
            r159_include(r4_halfXStrand(r4_SB, r4_CAP, r4_MIDDLE, r159_cross, 0.1, 0.4, 0.28));
            r159_include(r4_halfXStrand(r4_RIGHTSB, r4_CAP, r4_MIDDLE, r159_cross, 0.1, 0.4, 0.28));
            r159_include(r159_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE, r159_cross + r4_HALFSTROKE)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('K', function _r4_t82() {
            var r163_currentGlyph, r163_xn$setwidth$9Jrj, r163_xn$assignunicode$7Hrq, r163_xn$startfrom$1aao, r163_xn$lineto$5sIl, r163_xn$curveto$1aao, r163_xn$cubicto$1aao, r163_xn$putshapes$9Jrj, r163_xn$reverselast$3qIs, r163_include, r163_xn$createstroke$7Hrq, r163_xn$setanchor$9Jrj, r163_xn$applytransform$1aao, r163_xn$dontexport$5sIl, r163_TURN, r163_rturn, r163_right, r163_fine, _r163_t0, _r163_t1, _r163_t2, _r163_t3;
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
            r163_xn$applytransform$1aao = _r163_t0['apply-transform']['bind'](_r163_t0);
            r163_xn$dontexport$5sIl = function _r163_t3() {
                var _r165_t0, _r165_t1;
                return r163_currentGlyph['dontExport'] = true;
            };
            _r163_t0['gizmo'] = r4_globalTransform;
            _r163_t0['set-width'](r4_WIDTH);
            r163_xn$setwidth$9Jrj(r4_WIDTH);
            r163_xn$assignunicode$7Hrq('K');
            r163_include(r4_capitalMarks);
            r163_TURN = r4_CAP * 0.95;
            r163_rturn = r4_XH * 0.1;
            r163_right = r4_RIGHTSB - r4_O;
            r163_fine = r4_adviceBlackness(3.5);
            r163_include(r163_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r163_include(r163_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r163_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r163_TURN, r4_SB + r4_STROKE, r4_CAP * 0.35)['set-width'](0, r163_fine));
            r163_include(r163_xn$createstroke$7Hrq()['start-from'](r163_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r163_right - r4_HALFSTROKE, r163_rturn + 0.2 * (r4_XH - r163_rturn), r4_MIDDLE, r4_CAPMIDDLE + r4_HALFSTROKE)['set-width'](r163_fine / 2, r163_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('B', function _r4_t83() {
            var r167_currentGlyph, r167_xn$setwidth$9Jrj, r167_xn$assignunicode$7Hrq, r167_xn$startfrom$1aao, r167_xn$lineto$5sIl, r167_xn$curveto$1aao, r167_xn$cubicto$1aao, r167_xn$putshapes$9Jrj, r167_xn$reverselast$3qIs, r167_include, r167_xn$createstroke$7Hrq, r167_xn$setanchor$9Jrj, r167_xn$applytransform$1aao, r167_xn$dontexport$5sIl, r167_bowl, r167_tkappa, r167_bkappa, r167_turntop, r167_turnbottom, _r167_t0, _r167_t1, _r167_t2, _r167_t3;
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
            r167_xn$applytransform$1aao = _r167_t0['apply-transform']['bind'](_r167_t0);
            r167_xn$dontexport$5sIl = function _r167_t3() {
                var _r169_t0, _r169_t1;
                return r167_currentGlyph['dontExport'] = true;
            };
            _r167_t0['gizmo'] = r4_globalTransform;
            _r167_t0['set-width'](r4_WIDTH);
            r167_xn$setwidth$9Jrj(r4_WIDTH);
            r167_xn$assignunicode$7Hrq('B');
            r167_include(r4_capitalMarks);
            r167_bowl = 451;
            r167_tkappa = r4_COKAPPA - 0.22;
            r167_bkappa = r4_COKAPPA - 0.2;
            r167_turntop = (r4_CAP + (r167_bowl - r4_STROKE)) / 2;
            r167_turnbottom = r167_bowl / 2;
            r167_include(r167_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r4_SB * 0.5 - r167_turnbottom, r4_CAP)['arc-hv-to'](r4_RIGHTSB - r4_SB * 0.5, r167_turntop)['arc-vh-to'](r4_RIGHTSB - r4_SB * 0.5 - r167_turnbottom, r167_bowl - r4_STROKE)['line-to'](r4_SB, r167_bowl - r4_STROKE)['heads-to'](r4_LEFTWARD));
            r167_include(r167_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r167_turnbottom, 0)['arc-hv-to'](r4_RIGHTSB, r167_turnbottom)['arc-vh-to'](r4_RIGHTSB - r167_turnbottom, r167_bowl)['line-to'](r4_SB, r167_bowl)['heads-to'](r4_LEFTWARD));
            r167_include(r167_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('D', function _r4_t84() {
            var r171_currentGlyph, r171_xn$setwidth$9Jrj, r171_xn$assignunicode$7Hrq, r171_xn$startfrom$1aao, r171_xn$lineto$5sIl, r171_xn$curveto$1aao, r171_xn$cubicto$1aao, r171_xn$putshapes$9Jrj, r171_xn$reverselast$3qIs, r171_include, r171_xn$createstroke$7Hrq, r171_xn$setanchor$9Jrj, r171_xn$applytransform$1aao, r171_xn$dontexport$5sIl, r171_dsmooth, r171_bsmooth, _r171_t0, _r171_t1, _r171_t2, _r171_t3;
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
            r171_xn$applytransform$1aao = _r171_t0['apply-transform']['bind'](_r171_t0);
            r171_xn$dontexport$5sIl = function _r171_t3() {
                var _r173_t0, _r173_t1;
                return r171_currentGlyph['dontExport'] = true;
            };
            _r171_t0['gizmo'] = r4_globalTransform;
            _r171_t0['set-width'](r4_WIDTH);
            r171_xn$setwidth$9Jrj(r4_WIDTH);
            r171_xn$assignunicode$7Hrq('D');
            r171_include(r4_capitalMarks);
            r171_dsmooth = r4_SMOOTH * 1.35;
            r171_bsmooth = r4_SMOOTH * 1.1;
            r171_include(r171_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r171_include(r171_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r171_bsmooth, 0)['arc-hv-to'](r4_RIGHTSB, r171_dsmooth)['line-to'](r4_RIGHTSB, r4_CAP - r171_dsmooth)['arc-vh-to'](r4_RIGHTSB - r171_bsmooth, r4_CAP)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('P', function _r4_t85() {
            var r175_currentGlyph, r175_xn$setwidth$9Jrj, r175_xn$assignunicode$7Hrq, r175_xn$startfrom$1aao, r175_xn$lineto$5sIl, r175_xn$curveto$1aao, r175_xn$cubicto$1aao, r175_xn$putshapes$9Jrj, r175_xn$reverselast$3qIs, r175_include, r175_xn$createstroke$7Hrq, r175_xn$setanchor$9Jrj, r175_xn$applytransform$1aao, r175_xn$dontexport$5sIl, r175_bowlTop, r175_bowlBottom, r175_bkappa, r175_turn, r175_turnRadius, _r175_t0, _r175_t1, _r175_t2, _r175_t3;
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
            r175_xn$applytransform$1aao = _r175_t0['apply-transform']['bind'](_r175_t0);
            r175_xn$dontexport$5sIl = function _r175_t3() {
                var _r177_t0, _r177_t1;
                return r175_currentGlyph['dontExport'] = true;
            };
            _r175_t0['gizmo'] = r4_globalTransform;
            _r175_t0['set-width'](r4_WIDTH);
            r175_xn$setwidth$9Jrj(r4_WIDTH);
            r175_xn$assignunicode$7Hrq('P');
            r175_include(r4_capitalMarks);
            r175_bowlTop = r4_CAP * 1;
            r175_bowlBottom = r4_CAP * 0.5 - r4_HALFSTROKE;
            r175_bkappa = r4_COKAPPA - 0.2;
            r175_turn = r0_mix(r175_bowlTop, r175_bowlBottom, 0.5);
            r175_turnRadius = (r175_bowlTop - r175_bowlBottom) / 2;
            r175_include(r175_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r175_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r175_turnRadius, r175_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r175_turn)['arc-vh-to'](r4_RIGHTSB - r175_turnRadius, r175_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r175_bowlBottom)['heads-to'](r4_LEFTWARD));
            r175_include(r175_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('R', function _r4_t86() {
            var r179_currentGlyph, r179_xn$setwidth$9Jrj, r179_xn$assignunicode$7Hrq, r179_xn$startfrom$1aao, r179_xn$lineto$5sIl, r179_xn$curveto$1aao, r179_xn$cubicto$1aao, r179_xn$putshapes$9Jrj, r179_xn$reverselast$3qIs, r179_include, r179_xn$createstroke$7Hrq, r179_xn$setanchor$9Jrj, r179_xn$applytransform$1aao, r179_xn$dontexport$5sIl, r179_TURN, r179_right, _r179_t0, _r179_t1, _r179_t2, _r179_t3;
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
            r179_xn$applytransform$1aao = _r179_t0['apply-transform']['bind'](_r179_t0);
            r179_xn$dontexport$5sIl = function _r179_t3() {
                var _r181_t0, _r181_t1;
                return r179_currentGlyph['dontExport'] = true;
            };
            _r179_t0['gizmo'] = r4_globalTransform;
            _r179_t0['set-width'](r4_WIDTH);
            r179_xn$setwidth$9Jrj(r4_WIDTH);
            r179_xn$assignunicode$7Hrq('R');
            r179_include(r4_glyphs['P'], r4_AS_BASE);
            r179_TURN = r4_XH * 0.1;
            r179_right = r4_RIGHTSB - r4_O;
            r179_include(r179_xn$createstroke$7Hrq()['start-from'](r179_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r179_right - r4_HALFSTROKE, r179_TURN + 0.2 * (r4_XH - r179_TURN), r4_MIDDLE, r4_CAPMIDDLE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('C', function _r4_t87() {
            var r183_currentGlyph, r183_xn$setwidth$9Jrj, r183_xn$assignunicode$7Hrq, r183_xn$startfrom$1aao, r183_xn$lineto$5sIl, r183_xn$curveto$1aao, r183_xn$cubicto$1aao, r183_xn$putshapes$9Jrj, r183_xn$reverselast$3qIs, r183_include, r183_xn$createstroke$7Hrq, r183_xn$setanchor$9Jrj, r183_xn$applytransform$1aao, r183_xn$dontexport$5sIl, _r183_t0, _r183_t1, _r183_t2, _r183_t3;
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
            r183_xn$applytransform$1aao = _r183_t0['apply-transform']['bind'](_r183_t0);
            r183_xn$dontexport$5sIl = function _r183_t3() {
                var _r185_t0, _r185_t1;
                return r183_currentGlyph['dontExport'] = true;
            };
            _r183_t0['gizmo'] = r4_globalTransform;
            _r183_t0['set-width'](r4_WIDTH);
            r183_xn$setwidth$9Jrj(r4_WIDTH);
            r183_xn$assignunicode$7Hrq('C');
            r183_include(r4_capitalMarks);
            r183_include(r183_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + r4_ITALICCORS + r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('G', function _r4_t88() {
            var r187_currentGlyph, r187_xn$setwidth$9Jrj, r187_xn$assignunicode$7Hrq, r187_xn$startfrom$1aao, r187_xn$lineto$5sIl, r187_xn$curveto$1aao, r187_xn$cubicto$1aao, r187_xn$putshapes$9Jrj, r187_xn$reverselast$3qIs, r187_include, r187_xn$createstroke$7Hrq, r187_xn$setanchor$9Jrj, r187_xn$applytransform$1aao, r187_xn$dontexport$5sIl, _r187_t0, _r187_t1, _r187_t2, _r187_t3;
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
            r187_xn$applytransform$1aao = _r187_t0['apply-transform']['bind'](_r187_t0);
            r187_xn$dontexport$5sIl = function _r187_t3() {
                var _r189_t0, _r189_t1;
                return r187_currentGlyph['dontExport'] = true;
            };
            _r187_t0['gizmo'] = r4_globalTransform;
            _r187_t0['set-width'](r4_WIDTH);
            r187_xn$setwidth$9Jrj(r4_WIDTH);
            r187_xn$assignunicode$7Hrq('G');
            r187_include(r4_capitalMarks);
            r187_include(r187_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_CAP - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_CAPO, r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_UPWARD));
            r187_include(r187_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP / 2 + r4_STROKE / 2)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP / 2 + r4_STROKE / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('O', function _r4_t89() {
            var r191_currentGlyph, r191_xn$setwidth$9Jrj, r191_xn$assignunicode$7Hrq, r191_xn$startfrom$1aao, r191_xn$lineto$5sIl, r191_xn$curveto$1aao, r191_xn$cubicto$1aao, r191_xn$putshapes$9Jrj, r191_xn$reverselast$3qIs, r191_include, r191_xn$createstroke$7Hrq, r191_xn$setanchor$9Jrj, r191_xn$applytransform$1aao, r191_xn$dontexport$5sIl, _r191_t0, _r191_t1, _r191_t2, _r191_t3;
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
            r191_xn$applytransform$1aao = _r191_t0['apply-transform']['bind'](_r191_t0);
            r191_xn$dontexport$5sIl = function _r191_t3() {
                var _r193_t0, _r193_t1;
                return r191_currentGlyph['dontExport'] = true;
            };
            _r191_t0['gizmo'] = r4_globalTransform;
            _r191_t0['set-width'](r4_WIDTH);
            r191_xn$setwidth$9Jrj(r4_WIDTH);
            r191_xn$assignunicode$7Hrq('O');
            r191_include(r4_capitalMarks);
            r191_include(r191_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_CAPO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Q', function _r4_t90() {
            var r195_currentGlyph, r195_xn$setwidth$9Jrj, r195_xn$assignunicode$7Hrq, r195_xn$startfrom$1aao, r195_xn$lineto$5sIl, r195_xn$curveto$1aao, r195_xn$cubicto$1aao, r195_xn$putshapes$9Jrj, r195_xn$reverselast$3qIs, r195_include, r195_xn$createstroke$7Hrq, r195_xn$setanchor$9Jrj, r195_xn$applytransform$1aao, r195_xn$dontexport$5sIl, _r195_t0, _r195_t1, _r195_t2, _r195_t3;
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
            r195_xn$applytransform$1aao = _r195_t0['apply-transform']['bind'](_r195_t0);
            r195_xn$dontexport$5sIl = function _r195_t3() {
                var _r197_t0, _r197_t1;
                return r195_currentGlyph['dontExport'] = true;
            };
            _r195_t0['gizmo'] = r4_globalTransform;
            _r195_t0['set-width'](r4_WIDTH);
            r195_xn$setwidth$9Jrj(r4_WIDTH);
            r195_xn$assignunicode$7Hrq('Q');
            r195_include(r4_glyphs['O'], r4_AS_BASE);
            r195_xn$startfrom$1aao(r4_MIDDLE, 0);
            r195_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2, -r4_CAP * 0.2);
            r195_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE / 2 + r4_STROKE, -r4_CAP * 0.2);
            r195_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE, 0);
            r195_xn$lineto$5sIl(r4_MIDDLE + r4_STROKE * (1 - 0.5 / 3), r4_STROKE * 0.5);
            r195_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('U', function _r4_t91() {
            var r199_currentGlyph, r199_xn$setwidth$9Jrj, r199_xn$assignunicode$7Hrq, r199_xn$startfrom$1aao, r199_xn$lineto$5sIl, r199_xn$curveto$1aao, r199_xn$cubicto$1aao, r199_xn$putshapes$9Jrj, r199_xn$reverselast$3qIs, r199_include, r199_xn$createstroke$7Hrq, r199_xn$setanchor$9Jrj, r199_xn$applytransform$1aao, r199_xn$dontexport$5sIl, _r199_t0, _r199_t1, _r199_t2, _r199_t3;
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
            r199_xn$applytransform$1aao = _r199_t0['apply-transform']['bind'](_r199_t0);
            r199_xn$dontexport$5sIl = function _r199_t3() {
                var _r201_t0, _r201_t1;
                return r199_currentGlyph['dontExport'] = true;
            };
            _r199_t0['gizmo'] = r4_globalTransform;
            _r199_t0['set-width'](r4_WIDTH);
            r199_xn$setwidth$9Jrj(r4_WIDTH);
            r199_xn$assignunicode$7Hrq('U');
            r199_include(r4_capitalMarks);
            r199_include(r199_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB, r4_SMOOTHA)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_FShape = function _r4_t92() {
            var _r202_t0, _r202_t1, _r202_t2;
            return function _r202_t2() {
                var r204_currentGlyph, r204_xn$setwidth$9Jrj, r204_xn$assignunicode$7Hrq, r204_xn$startfrom$1aao, r204_xn$lineto$5sIl, r204_xn$curveto$1aao, r204_xn$cubicto$1aao, r204_xn$putshapes$9Jrj, r204_xn$reverselast$3qIs, r204_include, r204_xn$createstroke$7Hrq, r204_xn$setanchor$9Jrj, r204_xn$applytransform$1aao, r204_xn$dontexport$5sIl, _r204_t0, _r204_t1, _r204_t2, _r204_t3;
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
                r204_xn$applytransform$1aao = _r204_t0['apply-transform']['bind'](_r204_t0);
                r204_xn$dontexport$5sIl = function _r204_t3() {
                    var _r206_t0, _r206_t1;
                    return r204_currentGlyph['dontExport'] = true;
                };
                _r204_t0['gizmo'] = r4_globalTransform;
                _r204_t0['set-width'](r4_WIDTH);
                r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.5, r4_CAP)['heads-to'](r4_UPWARD));
                r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
                r204_include(r204_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('F', function _r4_t93() {
            var r208_currentGlyph, r208_xn$setwidth$9Jrj, r208_xn$assignunicode$7Hrq, r208_xn$startfrom$1aao, r208_xn$lineto$5sIl, r208_xn$curveto$1aao, r208_xn$cubicto$1aao, r208_xn$putshapes$9Jrj, r208_xn$reverselast$3qIs, r208_include, r208_xn$createstroke$7Hrq, r208_xn$setanchor$9Jrj, r208_xn$applytransform$1aao, r208_xn$dontexport$5sIl, _r208_t0, _r208_t1, _r208_t2, _r208_t3;
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
            r208_xn$applytransform$1aao = _r208_t0['apply-transform']['bind'](_r208_t0);
            r208_xn$dontexport$5sIl = function _r208_t3() {
                var _r210_t0, _r210_t1;
                return r208_currentGlyph['dontExport'] = true;
            };
            _r208_t0['gizmo'] = r4_globalTransform;
            _r208_t0['set-width'](r4_WIDTH);
            r208_xn$setwidth$9Jrj(r4_WIDTH);
            r208_xn$assignunicode$7Hrq('F');
            r208_include(r4_capitalMarks);
            r208_include(r4_FShape());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('E', function _r4_t94() {
            var r212_currentGlyph, r212_xn$setwidth$9Jrj, r212_xn$assignunicode$7Hrq, r212_xn$startfrom$1aao, r212_xn$lineto$5sIl, r212_xn$curveto$1aao, r212_xn$cubicto$1aao, r212_xn$putshapes$9Jrj, r212_xn$reverselast$3qIs, r212_include, r212_xn$createstroke$7Hrq, r212_xn$setanchor$9Jrj, r212_xn$applytransform$1aao, r212_xn$dontexport$5sIl, _r212_t0, _r212_t1, _r212_t2, _r212_t3;
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
            r212_xn$applytransform$1aao = _r212_t0['apply-transform']['bind'](_r212_t0);
            r212_xn$dontexport$5sIl = function _r212_t3() {
                var _r214_t0, _r214_t1;
                return r212_currentGlyph['dontExport'] = true;
            };
            _r212_t0['gizmo'] = r4_globalTransform;
            _r212_t0['set-width'](r4_WIDTH);
            r212_xn$setwidth$9Jrj(r4_WIDTH);
            r212_xn$assignunicode$7Hrq('E');
            r212_include(r4_capitalMarks);
            r212_include(r4_FShape());
            r212_include(r212_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('H', function _r4_t95() {
            var r216_currentGlyph, r216_xn$setwidth$9Jrj, r216_xn$assignunicode$7Hrq, r216_xn$startfrom$1aao, r216_xn$lineto$5sIl, r216_xn$curveto$1aao, r216_xn$cubicto$1aao, r216_xn$putshapes$9Jrj, r216_xn$reverselast$3qIs, r216_include, r216_xn$createstroke$7Hrq, r216_xn$setanchor$9Jrj, r216_xn$applytransform$1aao, r216_xn$dontexport$5sIl, _r216_t0, _r216_t1, _r216_t2, _r216_t3;
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
            r216_xn$applytransform$1aao = _r216_t0['apply-transform']['bind'](_r216_t0);
            r216_xn$dontexport$5sIl = function _r216_t3() {
                var _r218_t0, _r218_t1;
                return r216_currentGlyph['dontExport'] = true;
            };
            _r216_t0['gizmo'] = r4_globalTransform;
            _r216_t0['set-width'](r4_WIDTH);
            r216_xn$setwidth$9Jrj(r4_WIDTH);
            r216_xn$assignunicode$7Hrq('H');
            r216_include(r4_capitalMarks);
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r216_include(r216_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP / 2)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('L', function _r4_t96() {
            var r220_currentGlyph, r220_xn$setwidth$9Jrj, r220_xn$assignunicode$7Hrq, r220_xn$startfrom$1aao, r220_xn$lineto$5sIl, r220_xn$curveto$1aao, r220_xn$cubicto$1aao, r220_xn$putshapes$9Jrj, r220_xn$reverselast$3qIs, r220_include, r220_xn$createstroke$7Hrq, r220_xn$setanchor$9Jrj, r220_xn$applytransform$1aao, r220_xn$dontexport$5sIl, _r220_t0, _r220_t1, _r220_t2, _r220_t3;
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
            r220_xn$applytransform$1aao = _r220_t0['apply-transform']['bind'](_r220_t0);
            r220_xn$dontexport$5sIl = function _r220_t3() {
                var _r222_t0, _r222_t1;
                return r220_currentGlyph['dontExport'] = true;
            };
            _r220_t0['gizmo'] = r4_globalTransform;
            _r220_t0['set-width'](r4_WIDTH);
            r220_xn$setwidth$9Jrj(r4_WIDTH);
            r220_xn$assignunicode$7Hrq('L');
            r220_include(r4_capitalMarks);
            r220_include(r220_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r4_SB * 1.5, 0)['heads-to'](r4_DOWNWARD));
            r220_include(r220_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.5, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.straight', function _r4_t97() {
            var r224_currentGlyph, r224_xn$setwidth$9Jrj, r224_xn$assignunicode$7Hrq, r224_xn$startfrom$1aao, r224_xn$lineto$5sIl, r224_xn$curveto$1aao, r224_xn$cubicto$1aao, r224_xn$putshapes$9Jrj, r224_xn$reverselast$3qIs, r224_include, r224_xn$createstroke$7Hrq, r224_xn$setanchor$9Jrj, r224_xn$applytransform$1aao, r224_xn$dontexport$5sIl, _r224_t0, _r224_t1, _r224_t2, _r224_t3;
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
            r224_xn$applytransform$1aao = _r224_t0['apply-transform']['bind'](_r224_t0);
            r224_xn$dontexport$5sIl = function _r224_t3() {
                var _r226_t0, _r226_t1;
                return r224_currentGlyph['dontExport'] = true;
            };
            _r224_t0['gizmo'] = r4_globalTransform;
            _r224_t0['set-width'](r4_WIDTH);
            r224_xn$dontexport$5sIl();
            r224_include(r4_capitalMarks);
            r224_include(r224_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('I.serifed', function _r4_t98() {
            var r228_currentGlyph, r228_xn$setwidth$9Jrj, r228_xn$assignunicode$7Hrq, r228_xn$startfrom$1aao, r228_xn$lineto$5sIl, r228_xn$curveto$1aao, r228_xn$cubicto$1aao, r228_xn$putshapes$9Jrj, r228_xn$reverselast$3qIs, r228_include, r228_xn$createstroke$7Hrq, r228_xn$setanchor$9Jrj, r228_xn$applytransform$1aao, r228_xn$dontexport$5sIl, _r228_t0, _r228_t1, _r228_t2, _r228_t3;
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
            r228_xn$applytransform$1aao = _r228_t0['apply-transform']['bind'](_r228_t0);
            r228_xn$dontexport$5sIl = function _r228_t3() {
                var _r230_t0, _r230_t1;
                return r228_currentGlyph['dontExport'] = true;
            };
            _r228_t0['gizmo'] = r4_globalTransform;
            _r228_t0['set-width'](r4_WIDTH);
            r228_xn$dontexport$5sIl();
            r228_include(r4_glyphs['I.straight'], r4_AS_BASE);
            r228_include(r228_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 - r4_STROKE * r4_globalTransform['yx'], r4_CAP));
            r228_include(r228_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE + r4_WIDTH * 0.26 + r4_STROKE * r4_globalTransform['yx'], 0));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('I', 'I', 'serifed');
        r4_xn$createglyph$7Hrq('T', function _r4_t99() {
            var r232_currentGlyph, r232_xn$setwidth$9Jrj, r232_xn$assignunicode$7Hrq, r232_xn$startfrom$1aao, r232_xn$lineto$5sIl, r232_xn$curveto$1aao, r232_xn$cubicto$1aao, r232_xn$putshapes$9Jrj, r232_xn$reverselast$3qIs, r232_include, r232_xn$createstroke$7Hrq, r232_xn$setanchor$9Jrj, r232_xn$applytransform$1aao, r232_xn$dontexport$5sIl, _r232_t0, _r232_t1, _r232_t2, _r232_t3;
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
            r232_xn$applytransform$1aao = _r232_t0['apply-transform']['bind'](_r232_t0);
            r232_xn$dontexport$5sIl = function _r232_t3() {
                var _r234_t0, _r234_t1;
                return r232_currentGlyph['dontExport'] = true;
            };
            _r232_t0['gizmo'] = r4_globalTransform;
            _r232_t0['set-width'](r4_WIDTH);
            r232_xn$setwidth$9Jrj(r4_WIDTH);
            r232_xn$assignunicode$7Hrq('T');
            r232_include(r4_capitalMarks);
            r232_include(r232_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            r232_include(r232_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Z', function _r4_t100() {
            var r236_currentGlyph, r236_xn$setwidth$9Jrj, r236_xn$assignunicode$7Hrq, r236_xn$startfrom$1aao, r236_xn$lineto$5sIl, r236_xn$curveto$1aao, r236_xn$cubicto$1aao, r236_xn$putshapes$9Jrj, r236_xn$reverselast$3qIs, r236_include, r236_xn$createstroke$7Hrq, r236_xn$setanchor$9Jrj, r236_xn$applytransform$1aao, r236_xn$dontexport$5sIl, r236_cor, _r236_t0, _r236_t1, _r236_t2, _r236_t3;
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
            r236_xn$applytransform$1aao = _r236_t0['apply-transform']['bind'](_r236_t0);
            r236_xn$dontexport$5sIl = function _r236_t3() {
                var _r238_t0, _r238_t1;
                return r236_currentGlyph['dontExport'] = true;
            };
            _r236_t0['gizmo'] = r4_globalTransform;
            _r236_t0['set-width'](r4_WIDTH);
            r236_xn$setwidth$9Jrj(r4_WIDTH);
            r236_xn$assignunicode$7Hrq('Z');
            r236_include(r4_capitalMarks);
            r236_cor = 1.15;
            r236_include(r236_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r236_include(r236_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            r236_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r236_xn$lineto$5sIl(r4_SB + r4_STROKE * r236_cor, r4_STROKE);
            r236_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r236_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r236_cor, r4_CAP - r4_STROKE);
            r236_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.straight', function _r4_t101() {
            var r240_currentGlyph, r240_xn$setwidth$9Jrj, r240_xn$assignunicode$7Hrq, r240_xn$startfrom$1aao, r240_xn$lineto$5sIl, r240_xn$curveto$1aao, r240_xn$cubicto$1aao, r240_xn$putshapes$9Jrj, r240_xn$reverselast$3qIs, r240_include, r240_xn$createstroke$7Hrq, r240_xn$setanchor$9Jrj, r240_xn$applytransform$1aao, r240_xn$dontexport$5sIl, r240_slope, r240_expand, r240_coexpand, r240_kappa, r240_smooth, r240_hookx, _r240_t0, _r240_t1, _r240_t2, _r240_t3;
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
            r240_xn$applytransform$1aao = _r240_t0['apply-transform']['bind'](_r240_t0);
            r240_xn$dontexport$5sIl = function _r240_t3() {
                var _r242_t0, _r242_t1;
                return r240_currentGlyph['dontExport'] = true;
            };
            _r240_t0['gizmo'] = r4_globalTransform;
            _r240_t0['set-width'](r4_WIDTH);
            r240_xn$setwidth$9Jrj(r4_WIDTH);
            r240_xn$dontexport$5sIl();
            r240_include(r4_capitalMarks);
            r240_slope = r4_STROKE * 0.00092;
            r240_expand = 0.35;
            r240_coexpand = (1 - r240_expand) / 2;
            r240_kappa = r4_KAPPA_HOOK;
            r240_smooth = r4_HOOK + 0.75 * r4_STROKE;
            r240_hookx = 0.5 * r4_SB + r4_OXHOOK;
            r240_include(r240_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_JBALANCE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_JBALANCE, r240_smooth)['arc-vh-to'](r0_mix(r240_hookx, r4_RIGHTSB - r4_JBALANCE, 0.5), r4_O)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r240_kappa * (r4_MIDDLE - r4_SB) - r4_SB * 0.5, r4_O, r240_hookx, r4_HOOK));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('J.serifed', function _r4_t102() {
            var r244_currentGlyph, r244_xn$setwidth$9Jrj, r244_xn$assignunicode$7Hrq, r244_xn$startfrom$1aao, r244_xn$lineto$5sIl, r244_xn$curveto$1aao, r244_xn$cubicto$1aao, r244_xn$putshapes$9Jrj, r244_xn$reverselast$3qIs, r244_include, r244_xn$createstroke$7Hrq, r244_xn$setanchor$9Jrj, r244_xn$applytransform$1aao, r244_xn$dontexport$5sIl, _r244_t0, _r244_t1, _r244_t2, _r244_t3;
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
            r244_xn$applytransform$1aao = _r244_t0['apply-transform']['bind'](_r244_t0);
            r244_xn$dontexport$5sIl = function _r244_t3() {
                var _r246_t0, _r246_t1;
                return r244_currentGlyph['dontExport'] = true;
            };
            _r244_t0['gizmo'] = r4_globalTransform;
            _r244_t0['set-width'](r4_WIDTH);
            r244_xn$setwidth$9Jrj(r4_WIDTH);
            r244_xn$dontexport$5sIl();
            r244_include(r4_glyphs['J.straight'], r4_AS_BASE);
            r244_include(r4_leftwardTopSerif(r4_RIGHTSB - r4_HALFSTROKE - r4_JBALANCE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('J', 'J', 'serifed');
        r4_xn$createglyph$7Hrq('N', function _r4_t103() {
            var r248_currentGlyph, r248_xn$setwidth$9Jrj, r248_xn$assignunicode$7Hrq, r248_xn$startfrom$1aao, r248_xn$lineto$5sIl, r248_xn$curveto$1aao, r248_xn$cubicto$1aao, r248_xn$putshapes$9Jrj, r248_xn$reverselast$3qIs, r248_include, r248_xn$createstroke$7Hrq, r248_xn$setanchor$9Jrj, r248_xn$applytransform$1aao, r248_xn$dontexport$5sIl, r248_topstroke, r248_halftopstroke, _r248_t0, _r248_t1, _r248_t2, _r248_t3;
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
            r248_xn$applytransform$1aao = _r248_t0['apply-transform']['bind'](_r248_t0);
            r248_xn$dontexport$5sIl = function _r248_t3() {
                var _r250_t0, _r250_t1;
                return r248_currentGlyph['dontExport'] = true;
            };
            _r248_t0['gizmo'] = r4_globalTransform;
            _r248_t0['set-width'](r4_WIDTH);
            r248_xn$setwidth$9Jrj(r4_WIDTH);
            r248_xn$assignunicode$7Hrq('N');
            r248_include(r4_capitalMarks);
            r248_topstroke = r4_adviceBlackness(4);
            r248_halftopstroke = r248_topstroke / 2;
            r248_include(r248_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.4)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r248_topstroke));
            r248_include(r248_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r248_topstroke, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.6)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD));
            r248_include(r248_xn$createstroke$7Hrq()['start-from'](r4_SB + r248_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r248_topstroke, 0)['line-to'](r4_RIGHTSB - r248_topstroke - r248_halftopstroke, 0)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('M', function _r4_t104() {
            var r252_currentGlyph, r252_xn$setwidth$9Jrj, r252_xn$assignunicode$7Hrq, r252_xn$startfrom$1aao, r252_xn$lineto$5sIl, r252_xn$curveto$1aao, r252_xn$cubicto$1aao, r252_xn$putshapes$9Jrj, r252_xn$reverselast$3qIs, r252_include, r252_xn$createstroke$7Hrq, r252_xn$setanchor$9Jrj, r252_xn$applytransform$1aao, r252_xn$dontexport$5sIl, r252_topstroke, r252_halftopstroke, _r252_t0, _r252_t1, _r252_t2, _r252_t3;
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
            r252_xn$applytransform$1aao = _r252_t0['apply-transform']['bind'](_r252_t0);
            r252_xn$dontexport$5sIl = function _r252_t3() {
                var _r254_t0, _r254_t1;
                return r252_currentGlyph['dontExport'] = true;
            };
            _r252_t0['gizmo'] = r4_globalTransform;
            _r252_t0['set-width'](r4_WIDTH);
            r252_xn$setwidth$9Jrj(r4_WIDTH);
            r252_xn$assignunicode$7Hrq('M');
            r252_include(r4_capitalMarks);
            r252_topstroke = r4_adviceBlackness(5);
            r252_halftopstroke = r252_topstroke / 2;
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](0, r252_topstroke));
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP * 0.2)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['set-width'](r252_topstroke, 0));
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_SB + r252_halftopstroke, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r252_topstroke, 0)['line-to'](r4_MIDDLE - r252_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_DOWNWARD));
            r252_include(r252_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r252_halftopstroke, r4_CAP * 0.3)['heads-to'](r4_UPWARD)['set-width'](r252_topstroke, 0)['line-to'](r4_RIGHTSB - r252_halftopstroke, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('S', function _r4_t105() {
            var r256_currentGlyph, r256_xn$setwidth$9Jrj, r256_xn$assignunicode$7Hrq, r256_xn$startfrom$1aao, r256_xn$lineto$5sIl, r256_xn$curveto$1aao, r256_xn$cubicto$1aao, r256_xn$putshapes$9Jrj, r256_xn$reverselast$3qIs, r256_include, r256_xn$createstroke$7Hrq, r256_xn$setanchor$9Jrj, r256_xn$applytransform$1aao, r256_xn$dontexport$5sIl, _r256_t0, _r256_t1, _r256_t2, _r256_t3;
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
            r256_xn$applytransform$1aao = _r256_t0['apply-transform']['bind'](_r256_t0);
            r256_xn$dontexport$5sIl = function _r256_t3() {
                var _r258_t0, _r258_t1;
                return r256_currentGlyph['dontExport'] = true;
            };
            _r256_t0['gizmo'] = r4_globalTransform;
            _r256_t0['set-width'](r4_WIDTH);
            r256_xn$setwidth$9Jrj(r4_WIDTH);
            r256_xn$assignunicode$7Hrq('S');
            r256_include(r4_capitalMarks);
            r256_include(r4_sHookUpper(r4_CAP, r4_SMOOTHA, r4_HOOK));
            r256_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r256_include(r4_sStrand(r4_CAP - r4_SMOOTHA, r4_SMOOTHA));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('o', function _r4_t106() {
            var r260_currentGlyph, r260_xn$setwidth$9Jrj, r260_xn$assignunicode$7Hrq, r260_xn$startfrom$1aao, r260_xn$lineto$5sIl, r260_xn$curveto$1aao, r260_xn$cubicto$1aao, r260_xn$putshapes$9Jrj, r260_xn$reverselast$3qIs, r260_include, r260_xn$createstroke$7Hrq, r260_xn$setanchor$9Jrj, r260_xn$applytransform$1aao, r260_xn$dontexport$5sIl, _r260_t0, _r260_t1, _r260_t2, _r260_t3;
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
            r260_xn$applytransform$1aao = _r260_t0['apply-transform']['bind'](_r260_t0);
            r260_xn$dontexport$5sIl = function _r260_t3() {
                var _r262_t0, _r262_t1;
                return r260_currentGlyph['dontExport'] = true;
            };
            _r260_t0['gizmo'] = r4_globalTransform;
            _r260_t0['set-width'](r4_WIDTH);
            r260_xn$setwidth$9Jrj(r4_WIDTH);
            r260_xn$assignunicode$7Hrq('o');
            r260_include(r4_eMarks);
            r260_include(r260_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_oLeft = function _r4_t107() {
            var _r263_t0, _r263_t1, _r263_t2;
            return function _r263_t2() {
                var r265_currentGlyph, r265_xn$setwidth$9Jrj, r265_xn$assignunicode$7Hrq, r265_xn$startfrom$1aao, r265_xn$lineto$5sIl, r265_xn$curveto$1aao, r265_xn$cubicto$1aao, r265_xn$putshapes$9Jrj, r265_xn$reverselast$3qIs, r265_include, r265_xn$createstroke$7Hrq, r265_xn$setanchor$9Jrj, r265_xn$applytransform$1aao, r265_xn$dontexport$5sIl, _r265_t0, _r265_t1, _r265_t2, _r265_t3;
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
                r265_xn$applytransform$1aao = _r265_t0['apply-transform']['bind'](_r265_t0);
                r265_xn$dontexport$5sIl = function _r265_t3() {
                    var _r267_t0, _r267_t1;
                    return r265_currentGlyph['dontExport'] = true;
                };
                _r265_t0['gizmo'] = r4_globalTransform;
                _r265_t0['set-width'](r4_WIDTH);
                r265_include(r265_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['line-to'](r4_RIGHTSB - r4_O, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD));
                r265_include(r265_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_STROKE, r4_SMALLSMOOTHB - r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['line-to'](r4_SB + r4_STROKE, r4_XH - r4_SMALLSMOOTHA + r4_STROKE * 0.05)['set-width'](r4_HALFSTROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_oRight = function _r4_t108() {
            var _r268_t0, _r268_t1, _r268_t2;
            return function _r268_t2() {
                var r270_currentGlyph, r270_xn$setwidth$9Jrj, r270_xn$assignunicode$7Hrq, r270_xn$startfrom$1aao, r270_xn$lineto$5sIl, r270_xn$curveto$1aao, r270_xn$cubicto$1aao, r270_xn$putshapes$9Jrj, r270_xn$reverselast$3qIs, r270_include, r270_xn$createstroke$7Hrq, r270_xn$setanchor$9Jrj, r270_xn$applytransform$1aao, r270_xn$dontexport$5sIl, _r270_t0, _r270_t1, _r270_t2, _r270_t3;
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
                r270_xn$applytransform$1aao = _r270_t0['apply-transform']['bind'](_r270_t0);
                r270_xn$dontexport$5sIl = function _r270_t3() {
                    var _r272_t0, _r272_t1;
                    return r270_currentGlyph['dontExport'] = true;
                };
                _r270_t0['gizmo'] = r4_globalTransform;
                _r270_t0['set-width'](r4_WIDTH);
                r270_include(r270_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
                r270_include(r270_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHA - r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['line-to'](r4_RIGHTSB - r4_STROKE, r4_XH - r4_SMALLSMOOTHB + r4_STROKE * 0.05)['set-width'](0, r4_HALFSTROKE)['arc-vh-to'](r4_MIDDLE, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('p', function _r4_t109() {
            var r274_currentGlyph, r274_xn$setwidth$9Jrj, r274_xn$assignunicode$7Hrq, r274_xn$startfrom$1aao, r274_xn$lineto$5sIl, r274_xn$curveto$1aao, r274_xn$cubicto$1aao, r274_xn$putshapes$9Jrj, r274_xn$reverselast$3qIs, r274_include, r274_xn$createstroke$7Hrq, r274_xn$setanchor$9Jrj, r274_xn$applytransform$1aao, r274_xn$dontexport$5sIl, _r274_t0, _r274_t1, _r274_t2, _r274_t3;
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
            r274_xn$applytransform$1aao = _r274_t0['apply-transform']['bind'](_r274_t0);
            r274_xn$dontexport$5sIl = function _r274_t3() {
                var _r276_t0, _r276_t1;
                return r274_currentGlyph['dontExport'] = true;
            };
            _r274_t0['gizmo'] = r4_globalTransform;
            _r274_t0['set-width'](r4_WIDTH);
            r274_xn$setwidth$9Jrj(r4_WIDTH);
            r274_xn$assignunicode$7Hrq('p');
            r274_include(r4_eMarks);
            r274_include(r4_oLeft());
            r274_include(r274_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('b', function _r4_t110() {
            var r278_currentGlyph, r278_xn$setwidth$9Jrj, r278_xn$assignunicode$7Hrq, r278_xn$startfrom$1aao, r278_xn$lineto$5sIl, r278_xn$curveto$1aao, r278_xn$cubicto$1aao, r278_xn$putshapes$9Jrj, r278_xn$reverselast$3qIs, r278_include, r278_xn$createstroke$7Hrq, r278_xn$setanchor$9Jrj, r278_xn$applytransform$1aao, r278_xn$dontexport$5sIl, _r278_t0, _r278_t1, _r278_t2, _r278_t3;
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
            r278_xn$applytransform$1aao = _r278_t0['apply-transform']['bind'](_r278_t0);
            r278_xn$dontexport$5sIl = function _r278_t3() {
                var _r280_t0, _r280_t1;
                return r278_currentGlyph['dontExport'] = true;
            };
            _r278_t0['gizmo'] = r4_globalTransform;
            _r278_t0['set-width'](r4_WIDTH);
            r278_xn$setwidth$9Jrj(r4_WIDTH);
            r278_xn$assignunicode$7Hrq('b');
            r278_include(r4_bMarks);
            r278_include(r4_oLeft());
            r278_include(r278_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('q', function _r4_t111() {
            var r282_currentGlyph, r282_xn$setwidth$9Jrj, r282_xn$assignunicode$7Hrq, r282_xn$startfrom$1aao, r282_xn$lineto$5sIl, r282_xn$curveto$1aao, r282_xn$cubicto$1aao, r282_xn$putshapes$9Jrj, r282_xn$reverselast$3qIs, r282_include, r282_xn$createstroke$7Hrq, r282_xn$setanchor$9Jrj, r282_xn$applytransform$1aao, r282_xn$dontexport$5sIl, _r282_t0, _r282_t1, _r282_t2, _r282_t3;
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
            r282_xn$applytransform$1aao = _r282_t0['apply-transform']['bind'](_r282_t0);
            r282_xn$dontexport$5sIl = function _r282_t3() {
                var _r284_t0, _r284_t1;
                return r282_currentGlyph['dontExport'] = true;
            };
            _r282_t0['gizmo'] = r4_globalTransform;
            _r282_t0['set-width'](r4_WIDTH);
            r282_xn$setwidth$9Jrj(r4_WIDTH);
            r282_xn$assignunicode$7Hrq('q');
            r282_include(r4_eMarks);
            r282_include(r4_oRight());
            r282_include(r282_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('d', function _r4_t112() {
            var r286_currentGlyph, r286_xn$setwidth$9Jrj, r286_xn$assignunicode$7Hrq, r286_xn$startfrom$1aao, r286_xn$lineto$5sIl, r286_xn$curveto$1aao, r286_xn$cubicto$1aao, r286_xn$putshapes$9Jrj, r286_xn$reverselast$3qIs, r286_include, r286_xn$createstroke$7Hrq, r286_xn$setanchor$9Jrj, r286_xn$applytransform$1aao, r286_xn$dontexport$5sIl, _r286_t0, _r286_t1, _r286_t2, _r286_t3;
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
            r286_xn$applytransform$1aao = _r286_t0['apply-transform']['bind'](_r286_t0);
            r286_xn$dontexport$5sIl = function _r286_t3() {
                var _r288_t0, _r288_t1;
                return r286_currentGlyph['dontExport'] = true;
            };
            _r286_t0['gizmo'] = r4_globalTransform;
            _r286_t0['set-width'](r4_WIDTH);
            r286_xn$setwidth$9Jrj(r4_WIDTH);
            r286_xn$assignunicode$7Hrq('d');
            r286_include(r4_bMarks);
            r286_include(r4_oRight());
            r286_include(r286_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_UPWARD)['to-outline']());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('g', function _r4_t113() {
            var r290_currentGlyph, r290_xn$setwidth$9Jrj, r290_xn$assignunicode$7Hrq, r290_xn$startfrom$1aao, r290_xn$lineto$5sIl, r290_xn$curveto$1aao, r290_xn$cubicto$1aao, r290_xn$putshapes$9Jrj, r290_xn$reverselast$3qIs, r290_include, r290_xn$createstroke$7Hrq, r290_xn$setanchor$9Jrj, r290_xn$applytransform$1aao, r290_xn$dontexport$5sIl, r290_gleftx, r290_grightx, r290_groundy, _r290_t0, _r290_t1, _r290_t2, _r290_t3;
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
            r290_xn$applytransform$1aao = _r290_t0['apply-transform']['bind'](_r290_t0);
            r290_xn$dontexport$5sIl = function _r290_t3() {
                var _r292_t0, _r292_t1;
                return r290_currentGlyph['dontExport'] = true;
            };
            _r290_t0['gizmo'] = r4_globalTransform;
            _r290_t0['set-width'](r4_WIDTH);
            r290_xn$setwidth$9Jrj(r4_WIDTH);
            r290_xn$assignunicode$7Hrq('g');
            r290_include(r4_pMarks);
            r290_include([
                r4_Ring(r4_XO, r4_XH * r4_GBARPOS, r4_SB, r4_RIGHTSB - 0.3 * r4_SB, r4_SMALLSMOOTH),
                r4_Ring(r4_XO - r4_STROKE, r4_XH * r4_GBARPOS + r4_STROKE, r4_SB + r4_STROKE, r4_RIGHTSB - 0.3 * r4_SB - r4_STROKE, r4_SMALLSMOOTH - r4_STROKE)
            ]);
            r290_xn$reverselast$3qIs();
            r290_gleftx = r4_SB * 0.8 + r4_O;
            r290_grightx = r4_RIGHTSB + r4_SB * 0.1 - r4_O;
            r290_groundy = r0_mix(r4_DESCENDER, r4_XH * r4_GBARPOS, 0.7) + r4_HALFSTROKE;
            r290_include(r290_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH * r4_GBARPOS)['set-width'](0, r4_STROKE * 0.75)['arc-hv-to'](r4_SB * 1.25 + r4_STROKE, r0_mix(r290_groundy, r4_XH * r4_GBARPOS, 0.5))['set-width'](0, r4_STROKE)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r290_groundy)['line-to'](r4_MIDDLE - r4_DESCENDER * 0.15, r290_groundy)['arc-hv-to'](r290_grightx, r0_mix(r4_DESCENDER + r4_O, r290_groundy, 0.53))['arc-vh-to'](r0_mix(r290_gleftx, r290_grightx, 0.5), r4_DESCENDER + r4_O)['arc-hv-to'](r290_gleftx, r0_mix(r4_DESCENDER + r4_O, r290_groundy, 0.53))['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.15, r290_groundy));
            r290_xn$startfrom$1aao(r4_RIGHTSB + 0.25 * r4_SB, r4_XH);
            r290_xn$lineto$5sIl(r4_RIGHTSB + 0.25 * r4_SB, r4_XH - r4_STROKE);
            r290_xn$lineto$5sIl(r4_MIDDLE, r4_XH - r4_STROKE - r4_O);
            r290_xn$lineto$5sIl(r4_MIDDLE, r4_XH);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('c', function _r4_t114() {
            var r294_currentGlyph, r294_xn$setwidth$9Jrj, r294_xn$assignunicode$7Hrq, r294_xn$startfrom$1aao, r294_xn$lineto$5sIl, r294_xn$curveto$1aao, r294_xn$cubicto$1aao, r294_xn$putshapes$9Jrj, r294_xn$reverselast$3qIs, r294_include, r294_xn$createstroke$7Hrq, r294_xn$setanchor$9Jrj, r294_xn$applytransform$1aao, r294_xn$dontexport$5sIl, _r294_t0, _r294_t1, _r294_t2, _r294_t3;
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
            r294_xn$applytransform$1aao = _r294_t0['apply-transform']['bind'](_r294_t0);
            r294_xn$dontexport$5sIl = function _r294_t3() {
                var _r296_t0, _r296_t1;
                return r294_currentGlyph['dontExport'] = true;
            };
            _r294_t0['gizmo'] = r4_globalTransform;
            _r294_t0['set-width'](r4_WIDTH);
            r294_xn$setwidth$9Jrj(r4_WIDTH);
            r294_xn$assignunicode$7Hrq('c');
            r294_include(r4_eMarks);
            r294_include(r294_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_OXHOOK, r4_XH - r4_HOOK)['set-width'](r4_STROKE, 0)['curve-to'](r4_MIDDLE + r4_KAPPA_HOOK * (r4_MIDDLE - r4_para['sb']), r4_XO, r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.upright', function _r4_t115() {
            var r298_currentGlyph, r298_xn$setwidth$9Jrj, r298_xn$assignunicode$7Hrq, r298_xn$startfrom$1aao, r298_xn$lineto$5sIl, r298_xn$curveto$1aao, r298_xn$cubicto$1aao, r298_xn$putshapes$9Jrj, r298_xn$reverselast$3qIs, r298_include, r298_xn$createstroke$7Hrq, r298_xn$setanchor$9Jrj, r298_xn$applytransform$1aao, r298_xn$dontexport$5sIl, r298_barbottom, r298_hookx, r298_hookmiddle, _r298_t0, _r298_t1, _r298_t2, _r298_t3;
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
            r298_xn$applytransform$1aao = _r298_t0['apply-transform']['bind'](_r298_t0);
            r298_xn$dontexport$5sIl = function _r298_t3() {
                var _r300_t0, _r300_t1;
                return r298_currentGlyph['dontExport'] = true;
            };
            _r298_t0['gizmo'] = r4_globalTransform;
            _r298_t0['set-width'](r4_WIDTH);
            r298_xn$setwidth$9Jrj(r4_WIDTH);
            r298_xn$dontexport$5sIl();
            r298_barbottom = r4_XH * r4_EBARPOS;
            r298_hookx = r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r298_hookmiddle = r0_mix(r4_SB + r4_O, r298_hookx, 0.55);
            r298_include(r298_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r298_barbottom)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r298_hookmiddle, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r0_mix(r298_hookmiddle, r298_hookx, r4_KAPPA_HOOK), r4_O, r298_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r298_include(r298_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r298_barbottom)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r298_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e.italic', function _r4_t116() {
            var r302_currentGlyph, r302_xn$setwidth$9Jrj, r302_xn$assignunicode$7Hrq, r302_xn$startfrom$1aao, r302_xn$lineto$5sIl, r302_xn$curveto$1aao, r302_xn$cubicto$1aao, r302_xn$putshapes$9Jrj, r302_xn$reverselast$3qIs, r302_include, r302_xn$createstroke$7Hrq, r302_xn$setanchor$9Jrj, r302_xn$applytransform$1aao, r302_xn$dontexport$5sIl, r302_barbottom, _r302_t0, _r302_t1, _r302_t2, _r302_t3;
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
            r302_xn$applytransform$1aao = _r302_t0['apply-transform']['bind'](_r302_t0);
            r302_xn$dontexport$5sIl = function _r302_t3() {
                var _r304_t0, _r304_t1;
                return r302_currentGlyph['dontExport'] = true;
            };
            _r302_t0['gizmo'] = r4_globalTransform;
            _r302_t0['set-width'](r4_WIDTH);
            r302_xn$setwidth$9Jrj(r4_WIDTH);
            r302_xn$dontexport$5sIl();
            r302_barbottom = r4_XH * r4_EBARPOS;
            r302_include(r302_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r4_STROKE, r302_barbottom)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_RIGHTSB - r4_O, r4_XH - r4_SMALLSMOOTHB * 0.95)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_XH - r4_SMALLSMOOTHA)['line-to'](r4_SB + r4_O, r4_SMALLSMOOTHB)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD)['curve-to'](r4_MIDDLE + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx']) * (r4_MIDDLE - r4_SB), r4_O, r4_RIGHTSB - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'], r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('e', function _r4_t117() {
            var r306_currentGlyph, r306_xn$setwidth$9Jrj, r306_xn$assignunicode$7Hrq, r306_xn$startfrom$1aao, r306_xn$lineto$5sIl, r306_xn$curveto$1aao, r306_xn$cubicto$1aao, r306_xn$putshapes$9Jrj, r306_xn$reverselast$3qIs, r306_include, r306_xn$createstroke$7Hrq, r306_xn$setanchor$9Jrj, r306_xn$applytransform$1aao, r306_xn$dontexport$5sIl, _r306_t0, _r306_t1, _r306_t2, _r306_t3;
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
            r306_xn$applytransform$1aao = _r306_t0['apply-transform']['bind'](_r306_t0);
            r306_xn$dontexport$5sIl = function _r306_t3() {
                var _r308_t0, _r308_t1;
                return r306_currentGlyph['dontExport'] = true;
            };
            _r306_t0['gizmo'] = r4_globalTransform;
            _r306_t0['set-width'](r4_WIDTH);
            r306_xn$setwidth$9Jrj(r4_WIDTH);
            r306_xn$assignunicode$7Hrq('e');
            r306_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r306_include(r4_glyphs['e.italic']);
            } else {
                r306_include(r4_glyphs['e.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('t', function _r4_t118() {
            var r310_currentGlyph, r310_xn$setwidth$9Jrj, r310_xn$assignunicode$7Hrq, r310_xn$startfrom$1aao, r310_xn$lineto$5sIl, r310_xn$curveto$1aao, r310_xn$cubicto$1aao, r310_xn$putshapes$9Jrj, r310_xn$reverselast$3qIs, r310_include, r310_xn$createstroke$7Hrq, r310_xn$setanchor$9Jrj, r310_xn$applytransform$1aao, r310_xn$dontexport$5sIl, r310_center, r310_hookx, r310_turn, r310_smb, _r310_t0, _r310_t1, _r310_t2, _r310_t3;
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
            r310_xn$applytransform$1aao = _r310_t0['apply-transform']['bind'](_r310_t0);
            r310_xn$dontexport$5sIl = function _r310_t3() {
                var _r312_t0, _r312_t1;
                return r310_currentGlyph['dontExport'] = true;
            };
            _r310_t0['gizmo'] = r4_globalTransform;
            _r310_t0['set-width'](r4_WIDTH);
            r310_xn$setwidth$9Jrj(r4_WIDTH);
            r310_xn$assignunicode$7Hrq('t');
            r310_include(r4_bMarks);
            r310_center = r4_MIDDLE - r4_TBALANCE - r4_HALFSTROKE;
            r310_hookx = r310_center + (r4_WIDTH - r4_SB * 2) * 0.78 - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r310_turn = r0_mix(r310_center, r310_hookx, 0.5 + r4_globalTransform['yx'] * 0.5);
            r310_smb = (r310_turn - r310_center) * 1.1;
            r310_include(r310_xn$createstroke$7Hrq()['start-from'](r310_center, r4_CAP)['set-width'](r4_STROKE, 0)['heads-to'](r4_DOWNWARD)['line-to'](r310_center, r310_smb)['arc-vh-to'](r310_turn, r4_O)['curve-to'](r310_turn + (r4_KAPPA_HOOK + r4_TAILADJKAPPA * r4_globalTransform['yx'] + 0.1) * (r310_hookx - r310_turn), r4_O, r310_hookx, r4_HOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r310_include(r310_xn$createstroke$7Hrq()['start-from'](r310_center + r4_HALFSTROKE - r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r310_center + r4_HALFSTROKE + r4_LONGJUT + r4_TBALANCE2, r4_XH)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.upright', function _r4_t119() {
            var r314_currentGlyph, r314_xn$setwidth$9Jrj, r314_xn$assignunicode$7Hrq, r314_xn$startfrom$1aao, r314_xn$lineto$5sIl, r314_xn$curveto$1aao, r314_xn$cubicto$1aao, r314_xn$putshapes$9Jrj, r314_xn$reverselast$3qIs, r314_include, r314_xn$createstroke$7Hrq, r314_xn$setanchor$9Jrj, r314_xn$applytransform$1aao, r314_xn$dontexport$5sIl, r314_bartop, r314_lowmiddle, r314_barsmooth, _r314_t0, _r314_t1, _r314_t2, _r314_t3;
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
            r314_xn$applytransform$1aao = _r314_t0['apply-transform']['bind'](_r314_t0);
            r314_xn$dontexport$5sIl = function _r314_t3() {
                var _r316_t0, _r316_t1;
                return r314_currentGlyph['dontExport'] = true;
            };
            _r314_t0['gizmo'] = r4_globalTransform;
            _r314_t0['set-width'](r4_WIDTH);
            r314_xn$setwidth$9Jrj(r4_WIDTH);
            r314_xn$dontexport$5sIl();
            r314_bartop = r4_XH * r4_BARPOS + r4_STROKE;
            r314_lowmiddle = r0_mix(r4_SB, r4_RIGHTSB - r4_STROKE, r0_linreg(80, 0.55, 120, 0.625, r4_STROKE));
            r314_barsmooth = r0_mix(r4_SB, r4_RIGHTSB, 0.6);
            r314_include(r314_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH - r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_XO)['heads-to'](r4_LEFTWARD)['curve-to'](r4_MIDDLE - r4_KAPPA_HOOK * (r4_MIDDLE - r4_SB), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_AHOOK));
            r314_include(r314_xn$createstroke$7Hrq()['start-from'](r314_lowmiddle, r4_O)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r314_bartop * 0.45)['arc-vh-to'](r314_barsmooth, r314_bartop)['line-to'](r4_RIGHTSB, r314_bartop)['heads-to'](r4_RIGHTWARD));
            r314_include(r314_xn$createstroke$7Hrq()['start-from'](r314_lowmiddle, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE, r4_SMALLSMOOTHB * 0.65)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a.italic', function _r4_t120() {
            var r318_currentGlyph, r318_xn$setwidth$9Jrj, r318_xn$assignunicode$7Hrq, r318_xn$startfrom$1aao, r318_xn$lineto$5sIl, r318_xn$curveto$1aao, r318_xn$cubicto$1aao, r318_xn$putshapes$9Jrj, r318_xn$reverselast$3qIs, r318_include, r318_xn$createstroke$7Hrq, r318_xn$setanchor$9Jrj, r318_xn$applytransform$1aao, r318_xn$dontexport$5sIl, _r318_t0, _r318_t1, _r318_t2, _r318_t3;
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
            r318_xn$applytransform$1aao = _r318_t0['apply-transform']['bind'](_r318_t0);
            r318_xn$dontexport$5sIl = function _r318_t3() {
                var _r320_t0, _r320_t1;
                return r318_currentGlyph['dontExport'] = true;
            };
            _r318_t0['gizmo'] = r4_globalTransform;
            _r318_t0['set-width'](r4_WIDTH);
            r318_xn$setwidth$9Jrj(r4_WIDTH);
            r318_xn$dontexport$5sIl();
            r318_include(r4_oRight());
            r318_include(r318_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('a', function _r4_t121() {
            var r322_currentGlyph, r322_xn$setwidth$9Jrj, r322_xn$assignunicode$7Hrq, r322_xn$startfrom$1aao, r322_xn$lineto$5sIl, r322_xn$curveto$1aao, r322_xn$cubicto$1aao, r322_xn$putshapes$9Jrj, r322_xn$reverselast$3qIs, r322_include, r322_xn$createstroke$7Hrq, r322_xn$setanchor$9Jrj, r322_xn$applytransform$1aao, r322_xn$dontexport$5sIl, _r322_t0, _r322_t1, _r322_t2, _r322_t3;
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
            r322_xn$applytransform$1aao = _r322_t0['apply-transform']['bind'](_r322_t0);
            r322_xn$dontexport$5sIl = function _r322_t3() {
                var _r324_t0, _r324_t1;
                return r322_currentGlyph['dontExport'] = true;
            };
            _r322_t0['gizmo'] = r4_globalTransform;
            _r322_t0['set-width'](r4_WIDTH);
            r322_xn$setwidth$9Jrj(r4_WIDTH);
            r322_xn$assignunicode$7Hrq('a');
            r322_include(r4_eMarks);
            if (r4_para['italicangle'] > 0) {
                r322_include(r4_glyphs['a.italic']);
            } else {
                r322_include(r4_glyphs['a.upright']);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('u', function _r4_t122() {
            var r326_currentGlyph, r326_xn$setwidth$9Jrj, r326_xn$assignunicode$7Hrq, r326_xn$startfrom$1aao, r326_xn$lineto$5sIl, r326_xn$curveto$1aao, r326_xn$cubicto$1aao, r326_xn$putshapes$9Jrj, r326_xn$reverselast$3qIs, r326_include, r326_xn$createstroke$7Hrq, r326_xn$setanchor$9Jrj, r326_xn$applytransform$1aao, r326_xn$dontexport$5sIl, _r326_t0, _r326_t1, _r326_t2, _r326_t3;
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
            r326_xn$applytransform$1aao = _r326_t0['apply-transform']['bind'](_r326_t0);
            r326_xn$dontexport$5sIl = function _r326_t3() {
                var _r328_t0, _r328_t1;
                return r326_currentGlyph['dontExport'] = true;
            };
            _r326_t0['gizmo'] = r4_globalTransform;
            _r326_t0['set-width'](r4_WIDTH);
            r326_xn$setwidth$9Jrj(r4_WIDTH);
            r326_xn$assignunicode$7Hrq('u');
            r326_include(r4_eMarks);
            r326_include(r326_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r4_SMALLSMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_RIGHTWARD));
            r326_include(r326_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_O + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r4_RIGHTSB - r4_STROKE * r4_ITALICCOR, r4_SMALLSMOOTHA)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE * 0.4));
            r326_include(r326_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('n', function _r4_t123() {
            var r330_currentGlyph, r330_xn$setwidth$9Jrj, r330_xn$assignunicode$7Hrq, r330_xn$startfrom$1aao, r330_xn$lineto$5sIl, r330_xn$curveto$1aao, r330_xn$cubicto$1aao, r330_xn$putshapes$9Jrj, r330_xn$reverselast$3qIs, r330_include, r330_xn$createstroke$7Hrq, r330_xn$setanchor$9Jrj, r330_xn$applytransform$1aao, r330_xn$dontexport$5sIl, _r330_t0, _r330_t1, _r330_t2, _r330_t3;
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
            r330_xn$applytransform$1aao = _r330_t0['apply-transform']['bind'](_r330_t0);
            r330_xn$dontexport$5sIl = function _r330_t3() {
                var _r332_t0, _r332_t1;
                return r330_currentGlyph['dontExport'] = true;
            };
            _r330_t0['gizmo'] = r4_globalTransform;
            _r330_t0['set-width'](r4_WIDTH);
            r330_xn$setwidth$9Jrj(r4_WIDTH);
            r330_xn$assignunicode$7Hrq('n');
            r330_include(r4_eMarks);
            r330_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r330_include(r330_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('h', function _r4_t124() {
            var r334_currentGlyph, r334_xn$setwidth$9Jrj, r334_xn$assignunicode$7Hrq, r334_xn$startfrom$1aao, r334_xn$lineto$5sIl, r334_xn$curveto$1aao, r334_xn$cubicto$1aao, r334_xn$putshapes$9Jrj, r334_xn$reverselast$3qIs, r334_include, r334_xn$createstroke$7Hrq, r334_xn$setanchor$9Jrj, r334_xn$applytransform$1aao, r334_xn$dontexport$5sIl, _r334_t0, _r334_t1, _r334_t2, _r334_t3;
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
            r334_xn$applytransform$1aao = _r334_t0['apply-transform']['bind'](_r334_t0);
            r334_xn$dontexport$5sIl = function _r334_t3() {
                var _r336_t0, _r336_t1;
                return r334_currentGlyph['dontExport'] = true;
            };
            _r334_t0['gizmo'] = r4_globalTransform;
            _r334_t0['set-width'](r4_WIDTH);
            r334_xn$setwidth$9Jrj(r4_WIDTH);
            r334_xn$assignunicode$7Hrq('h');
            r334_include(r4_bMarks);
            r334_xn$putshapes$9Jrj(r4_nBowl(r4_SB + r4_STROKE * r4_ITALICCOR, r4_MIDDLE, r4_RIGHTSB, r4_STROKE * 0.4));
            r334_include(r334_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('m', function _r4_t125() {
            var r338_currentGlyph, r338_xn$setwidth$9Jrj, r338_xn$assignunicode$7Hrq, r338_xn$startfrom$1aao, r338_xn$lineto$5sIl, r338_xn$curveto$1aao, r338_xn$cubicto$1aao, r338_xn$putshapes$9Jrj, r338_xn$reverselast$3qIs, r338_include, r338_xn$createstroke$7Hrq, r338_xn$setanchor$9Jrj, r338_xn$applytransform$1aao, r338_xn$dontexport$5sIl, r338_sw, r338_m1, r338_m2, _r338_t0, _r338_t1, _r338_t2, _r338_t3;
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
            r338_xn$applytransform$1aao = _r338_t0['apply-transform']['bind'](_r338_t0);
            r338_xn$dontexport$5sIl = function _r338_t3() {
                var _r340_t0, _r340_t1;
                return r338_currentGlyph['dontExport'] = true;
            };
            _r338_t0['gizmo'] = r4_globalTransform;
            _r338_t0['set-width'](r4_WIDTH);
            r338_xn$setwidth$9Jrj(r4_WIDTH);
            r338_xn$assignunicode$7Hrq('m');
            r338_include(r4_eMarks);
            r338_sw = r4_adviceBlackness(3.5);
            r338_m1 = (r4_MIDDLE + r4_SB + r338_sw * 0.25) / 2;
            r338_m2 = r338_m1 + (r4_MIDDLE - r338_sw / 2 - r4_SB);
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r338_sw / 2, 0)['set-width'](0, r338_sw)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE - r338_sw / 2, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r338_m1, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r338_sw * 0.75, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r338_sw * 0.4));
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r338_sw - r4_O, 0)['set-width'](0, r338_sw)['heads-to'](r4_UPWARD)['line-to'](r4_RIGHTSB - r338_sw - r4_O, r4_XH - r4_SMALLSMOOTHA)['arc-vh-to'](r338_m2, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_MIDDLE + r338_sw * 0.25, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r338_sw * 0.4));
            r338_include(r338_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, 0)['heads-to'](r4_UPWARD)['set-width'](0, r338_sw)['line-to'](r4_SB + r4_O, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.straight', function _r4_t126() {
            var r342_currentGlyph, r342_xn$setwidth$9Jrj, r342_xn$assignunicode$7Hrq, r342_xn$startfrom$1aao, r342_xn$lineto$5sIl, r342_xn$curveto$1aao, r342_xn$cubicto$1aao, r342_xn$putshapes$9Jrj, r342_xn$reverselast$3qIs, r342_include, r342_xn$createstroke$7Hrq, r342_xn$setanchor$9Jrj, r342_xn$applytransform$1aao, r342_xn$dontexport$5sIl, _r342_t0, _r342_t1, _r342_t2, _r342_t3;
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
            r342_xn$applytransform$1aao = _r342_t0['apply-transform']['bind'](_r342_t0);
            r342_xn$dontexport$5sIl = function _r342_t3() {
                var _r344_t0, _r344_t1;
                return r342_currentGlyph['dontExport'] = true;
            };
            _r342_t0['gizmo'] = r4_globalTransform;
            _r342_t0['set-width'](r4_WIDTH);
            r342_xn$dontexport$5sIl();
            r342_include(r4_eMarks);
            r342_include(r342_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.hooky', function _r4_t127() {
            var r346_currentGlyph, r346_xn$setwidth$9Jrj, r346_xn$assignunicode$7Hrq, r346_xn$startfrom$1aao, r346_xn$lineto$5sIl, r346_xn$curveto$1aao, r346_xn$cubicto$1aao, r346_xn$putshapes$9Jrj, r346_xn$reverselast$3qIs, r346_include, r346_xn$createstroke$7Hrq, r346_xn$setanchor$9Jrj, r346_xn$applytransform$1aao, r346_xn$dontexport$5sIl, _r346_t0, _r346_t1, _r346_t2, _r346_t3;
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
            r346_xn$applytransform$1aao = _r346_t0['apply-transform']['bind'](_r346_t0);
            r346_xn$dontexport$5sIl = function _r346_t3() {
                var _r348_t0, _r348_t1;
                return r346_currentGlyph['dontExport'] = true;
            };
            _r346_t0['gizmo'] = r4_globalTransform;
            _r346_t0['set-width'](r4_WIDTH);
            r346_xn$dontexport$5sIl();
            r346_include(r4_glyphs['dotlessi.straight'], r4_AS_BASE);
            r346_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.zshaped', function _r4_t128() {
            var r350_currentGlyph, r350_xn$setwidth$9Jrj, r350_xn$assignunicode$7Hrq, r350_xn$startfrom$1aao, r350_xn$lineto$5sIl, r350_xn$curveto$1aao, r350_xn$cubicto$1aao, r350_xn$putshapes$9Jrj, r350_xn$reverselast$3qIs, r350_include, r350_xn$createstroke$7Hrq, r350_xn$setanchor$9Jrj, r350_xn$applytransform$1aao, r350_xn$dontexport$5sIl, _r350_t0, _r350_t1, _r350_t2, _r350_t3;
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
            r350_xn$applytransform$1aao = _r350_t0['apply-transform']['bind'](_r350_t0);
            r350_xn$dontexport$5sIl = function _r350_t3() {
                var _r352_t0, _r352_t1;
                return r350_currentGlyph['dontExport'] = true;
            };
            _r350_t0['gizmo'] = r4_globalTransform;
            _r350_t0['set-width'](r4_WIDTH);
            r350_xn$dontexport$5sIl();
            r350_include(r4_glyphs['dotlessi.hooky'], r4_AS_BASE);
            r350_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessi.serifed', function _r4_t129() {
            var r354_currentGlyph, r354_xn$setwidth$9Jrj, r354_xn$assignunicode$7Hrq, r354_xn$startfrom$1aao, r354_xn$lineto$5sIl, r354_xn$curveto$1aao, r354_xn$cubicto$1aao, r354_xn$putshapes$9Jrj, r354_xn$reverselast$3qIs, r354_include, r354_xn$createstroke$7Hrq, r354_xn$setanchor$9Jrj, r354_xn$applytransform$1aao, r354_xn$dontexport$5sIl, r354_balance, _r354_t0, _r354_t1, _r354_t2, _r354_t3;
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
            r354_xn$applytransform$1aao = _r354_t0['apply-transform']['bind'](_r354_t0);
            r354_xn$dontexport$5sIl = function _r354_t3() {
                var _r356_t0, _r356_t1;
                return r354_currentGlyph['dontExport'] = true;
            };
            _r354_t0['gizmo'] = r4_globalTransform;
            _r354_t0['set-width'](r4_WIDTH);
            r354_xn$dontexport$5sIl();
            r354_include(r4_eMarks);
            r354_balance = r4_ILBALANCE;
            r354_include(r354_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r354_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r354_balance, r4_XH)['heads-to'](r4_UPWARD));
            r354_include(r4_leftwardTopSerif(r4_MIDDLE + r354_balance, r4_XH, r4_LONGJUT - r354_balance));
            r354_include(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            r354_include(r4_leftwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessi', 305, 'serifed');
        r4_xn$createglyph$7Hrq('i', function _r4_t130() {
            var r358_currentGlyph, r358_xn$setwidth$9Jrj, r358_xn$assignunicode$7Hrq, r358_xn$startfrom$1aao, r358_xn$lineto$5sIl, r358_xn$curveto$1aao, r358_xn$cubicto$1aao, r358_xn$putshapes$9Jrj, r358_xn$reverselast$3qIs, r358_include, r358_xn$createstroke$7Hrq, r358_xn$setanchor$9Jrj, r358_xn$applytransform$1aao, r358_xn$dontexport$5sIl, _r358_t0, _r358_t1, _r358_t2, _r358_t3;
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
            r358_xn$applytransform$1aao = _r358_t0['apply-transform']['bind'](_r358_t0);
            r358_xn$dontexport$5sIl = function _r358_t3() {
                var _r360_t0, _r360_t1;
                return r358_currentGlyph['dontExport'] = true;
            };
            _r358_t0['gizmo'] = r4_globalTransform;
            _r358_t0['set-width'](r4_WIDTH);
            r358_xn$setwidth$9Jrj(r4_WIDTH);
            r358_xn$assignunicode$7Hrq('i');
            r358_include(r4_glyphs['dotlessi'], r4_AS_BASE);
            r358_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.straight', function _r4_t131() {
            var r362_currentGlyph, r362_xn$setwidth$9Jrj, r362_xn$assignunicode$7Hrq, r362_xn$startfrom$1aao, r362_xn$lineto$5sIl, r362_xn$curveto$1aao, r362_xn$cubicto$1aao, r362_xn$putshapes$9Jrj, r362_xn$reverselast$3qIs, r362_include, r362_xn$createstroke$7Hrq, r362_xn$setanchor$9Jrj, r362_xn$applytransform$1aao, r362_xn$dontexport$5sIl, _r362_t0, _r362_t1, _r362_t2, _r362_t3;
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
            r362_xn$applytransform$1aao = _r362_t0['apply-transform']['bind'](_r362_t0);
            r362_xn$dontexport$5sIl = function _r362_t3() {
                var _r364_t0, _r364_t1;
                return r362_currentGlyph['dontExport'] = true;
            };
            _r362_t0['gizmo'] = r4_globalTransform;
            _r362_t0['set-width'](r4_WIDTH);
            r362_xn$dontexport$5sIl();
            r362_xn$setanchor$9Jrj('above', r4_BASE, r4_MIDDLE + r4_JBALANCE, r4_XH);
            r362_include(r362_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r4_JBALANCE, 0)['arc-vh-to'](r4_MIDDLE + r4_DESCENDER * 0.85, r4_DESCENDER + r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dotlessj.serifed', function _r4_t132() {
            var r366_currentGlyph, r366_xn$setwidth$9Jrj, r366_xn$assignunicode$7Hrq, r366_xn$startfrom$1aao, r366_xn$lineto$5sIl, r366_xn$curveto$1aao, r366_xn$cubicto$1aao, r366_xn$putshapes$9Jrj, r366_xn$reverselast$3qIs, r366_include, r366_xn$createstroke$7Hrq, r366_xn$setanchor$9Jrj, r366_xn$applytransform$1aao, r366_xn$dontexport$5sIl, _r366_t0, _r366_t1, _r366_t2, _r366_t3;
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
            r366_xn$applytransform$1aao = _r366_t0['apply-transform']['bind'](_r366_t0);
            r366_xn$dontexport$5sIl = function _r366_t3() {
                var _r368_t0, _r368_t1;
                return r366_currentGlyph['dontExport'] = true;
            };
            _r366_t0['gizmo'] = r4_globalTransform;
            _r366_t0['set-width'](r4_WIDTH);
            r366_xn$dontexport$5sIl();
            r366_include(r4_glyphs['dotlessj.straight'], r4_AS_BASE);
            r366_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r4_JBALANCE, r4_XH, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('dotlessj', 567, 'serifed');
        r4_xn$createglyph$7Hrq('j', function _r4_t133() {
            var r370_currentGlyph, r370_xn$setwidth$9Jrj, r370_xn$assignunicode$7Hrq, r370_xn$startfrom$1aao, r370_xn$lineto$5sIl, r370_xn$curveto$1aao, r370_xn$cubicto$1aao, r370_xn$putshapes$9Jrj, r370_xn$reverselast$3qIs, r370_include, r370_xn$createstroke$7Hrq, r370_xn$setanchor$9Jrj, r370_xn$applytransform$1aao, r370_xn$dontexport$5sIl, _r370_t0, _r370_t1, _r370_t2, _r370_t3;
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
            r370_xn$applytransform$1aao = _r370_t0['apply-transform']['bind'](_r370_t0);
            r370_xn$dontexport$5sIl = function _r370_t3() {
                var _r372_t0, _r372_t1;
                return r370_currentGlyph['dontExport'] = true;
            };
            _r370_t0['gizmo'] = r4_globalTransform;
            _r370_t0['set-width'](r4_WIDTH);
            r370_xn$setwidth$9Jrj(r4_WIDTH);
            r370_xn$assignunicode$7Hrq('j');
            r370_include(r4_glyphs['dotlessj'], r4_AS_BASE);
            r370_include(r4_glyphs['dotAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.straight', function _r4_t134() {
            var r374_currentGlyph, r374_xn$setwidth$9Jrj, r374_xn$assignunicode$7Hrq, r374_xn$startfrom$1aao, r374_xn$lineto$5sIl, r374_xn$curveto$1aao, r374_xn$cubicto$1aao, r374_xn$putshapes$9Jrj, r374_xn$reverselast$3qIs, r374_include, r374_xn$createstroke$7Hrq, r374_xn$setanchor$9Jrj, r374_xn$applytransform$1aao, r374_xn$dontexport$5sIl, _r374_t0, _r374_t1, _r374_t2, _r374_t3;
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
            r374_xn$applytransform$1aao = _r374_t0['apply-transform']['bind'](_r374_t0);
            r374_xn$dontexport$5sIl = function _r374_t3() {
                var _r376_t0, _r376_t1;
                return r374_currentGlyph['dontExport'] = true;
            };
            _r374_t0['gizmo'] = r4_globalTransform;
            _r374_t0['set-width'](r4_WIDTH);
            r374_include(r4_bMarks);
            r374_xn$dontexport$5sIl();
            r374_include(r374_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.hooky', function _r4_t135() {
            var r378_currentGlyph, r378_xn$setwidth$9Jrj, r378_xn$assignunicode$7Hrq, r378_xn$startfrom$1aao, r378_xn$lineto$5sIl, r378_xn$curveto$1aao, r378_xn$cubicto$1aao, r378_xn$putshapes$9Jrj, r378_xn$reverselast$3qIs, r378_include, r378_xn$createstroke$7Hrq, r378_xn$setanchor$9Jrj, r378_xn$applytransform$1aao, r378_xn$dontexport$5sIl, _r378_t0, _r378_t1, _r378_t2, _r378_t3;
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
            r378_xn$applytransform$1aao = _r378_t0['apply-transform']['bind'](_r378_t0);
            r378_xn$dontexport$5sIl = function _r378_t3() {
                var _r380_t0, _r380_t1;
                return r378_currentGlyph['dontExport'] = true;
            };
            _r378_t0['gizmo'] = r4_globalTransform;
            _r378_t0['set-width'](r4_WIDTH);
            r378_include(r4_bMarks);
            r378_xn$dontexport$5sIl();
            r378_include(r4_glyphs['l.straight']);
            r378_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE, r4_CAP, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.zshaped', function _r4_t136() {
            var r382_currentGlyph, r382_xn$setwidth$9Jrj, r382_xn$assignunicode$7Hrq, r382_xn$startfrom$1aao, r382_xn$lineto$5sIl, r382_xn$curveto$1aao, r382_xn$cubicto$1aao, r382_xn$putshapes$9Jrj, r382_xn$reverselast$3qIs, r382_include, r382_xn$createstroke$7Hrq, r382_xn$setanchor$9Jrj, r382_xn$applytransform$1aao, r382_xn$dontexport$5sIl, _r382_t0, _r382_t1, _r382_t2, _r382_t3;
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
            r382_xn$applytransform$1aao = _r382_t0['apply-transform']['bind'](_r382_t0);
            r382_xn$dontexport$5sIl = function _r382_t3() {
                var _r384_t0, _r384_t1;
                return r382_currentGlyph['dontExport'] = true;
            };
            _r382_t0['gizmo'] = r4_globalTransform;
            _r382_t0['set-width'](r4_WIDTH);
            r382_include(r4_bMarks);
            r382_xn$dontexport$5sIl();
            r382_include(r4_glyphs['l.hooky']);
            r382_xn$putshapes$9Jrj(r4_rightwardBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('l.serifed', function _r4_t137() {
            var r386_currentGlyph, r386_xn$setwidth$9Jrj, r386_xn$assignunicode$7Hrq, r386_xn$startfrom$1aao, r386_xn$lineto$5sIl, r386_xn$curveto$1aao, r386_xn$cubicto$1aao, r386_xn$putshapes$9Jrj, r386_xn$reverselast$3qIs, r386_include, r386_xn$createstroke$7Hrq, r386_xn$setanchor$9Jrj, r386_xn$applytransform$1aao, r386_xn$dontexport$5sIl, r386_balance, _r386_t0, _r386_t1, _r386_t2, _r386_t3;
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
            r386_xn$applytransform$1aao = _r386_t0['apply-transform']['bind'](_r386_t0);
            r386_xn$dontexport$5sIl = function _r386_t3() {
                var _r388_t0, _r388_t1;
                return r386_currentGlyph['dontExport'] = true;
            };
            _r386_t0['gizmo'] = r4_globalTransform;
            _r386_t0['set-width'](r4_WIDTH);
            r386_include(r4_bMarks);
            r386_xn$dontexport$5sIl();
            r386_balance = r4_ILBALANCE;
            r386_include(r386_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r386_balance, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE + r386_balance, r4_CAP)['heads-to'](r4_UPWARD));
            r386_xn$putshapes$9Jrj(r4_leftwardTopSerif(r4_MIDDLE + r386_balance, r4_CAP, r4_LONGJUT - r386_balance));
            r386_xn$putshapes$9Jrj(r4_centerBottomSerif(r4_MIDDLE, 0, r4_LONGJUT));
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('l', 'l', 'serifed');
        r4_xn$createglyph$7Hrq('x', function _r4_t138() {
            var r390_currentGlyph, r390_xn$setwidth$9Jrj, r390_xn$assignunicode$7Hrq, r390_xn$startfrom$1aao, r390_xn$lineto$5sIl, r390_xn$curveto$1aao, r390_xn$cubicto$1aao, r390_xn$putshapes$9Jrj, r390_xn$reverselast$3qIs, r390_include, r390_xn$createstroke$7Hrq, r390_xn$setanchor$9Jrj, r390_xn$applytransform$1aao, r390_xn$dontexport$5sIl, r390_TURN, _r390_t0, _r390_t1, _r390_t2, _r390_t3;
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
            r390_xn$applytransform$1aao = _r390_t0['apply-transform']['bind'](_r390_t0);
            r390_xn$dontexport$5sIl = function _r390_t3() {
                var _r392_t0, _r392_t1;
                return r390_currentGlyph['dontExport'] = true;
            };
            _r390_t0['gizmo'] = r4_globalTransform;
            _r390_t0['set-width'](r4_WIDTH);
            r390_xn$setwidth$9Jrj(r4_WIDTH);
            r390_xn$assignunicode$7Hrq('x');
            r390_include(r4_eMarks);
            r390_TURN = r4_XH * 0.1;
            r390_include(r4_xStrand(r4_SB, 0, r4_RIGHTSB, r4_XH, 0.05, 0.4, 0.14));
            r390_include(r4_xStrand(r4_SB, r4_XH, r4_RIGHTSB, 0, 0.05, 0.4, 0.14));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('v', function _r4_t139() {
            var r394_currentGlyph, r394_xn$setwidth$9Jrj, r394_xn$assignunicode$7Hrq, r394_xn$startfrom$1aao, r394_xn$lineto$5sIl, r394_xn$curveto$1aao, r394_xn$cubicto$1aao, r394_xn$putshapes$9Jrj, r394_xn$reverselast$3qIs, r394_include, r394_xn$createstroke$7Hrq, r394_xn$setanchor$9Jrj, r394_xn$applytransform$1aao, r394_xn$dontexport$5sIl, r394_TURN, _r394_t0, _r394_t1, _r394_t2, _r394_t3;
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
            r394_xn$applytransform$1aao = _r394_t0['apply-transform']['bind'](_r394_t0);
            r394_xn$dontexport$5sIl = function _r394_t3() {
                var _r396_t0, _r396_t1;
                return r394_currentGlyph['dontExport'] = true;
            };
            _r394_t0['gizmo'] = r4_globalTransform;
            _r394_t0['set-width'](r4_WIDTH);
            r394_xn$setwidth$9Jrj(r4_WIDTH);
            r394_xn$assignunicode$7Hrq('v');
            r394_include(r4_eMarks);
            r394_TURN = r4_XH * 0.9;
            r394_include(r394_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r394_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r394_TURN, r4_MIDDLE - r4_STROKE / 2, 0)['set-width'](r4_STROKE * 0.8, 0));
            r394_include(r394_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r394_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r394_TURN, r4_MIDDLE + r4_STROKE / 2, 0)['set-width'](0, r4_STROKE * 0.8));
            r394_xn$startfrom$1aao(r4_MIDDLE + r4_STROKE / 2, 0);
            r394_xn$lineto$5sIl(r4_MIDDLE - r4_STROKE / 2, 0);
            r394_xn$lineto$5sIl(r4_MIDDLE, r4_STROKE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('w', function _r4_t140() {
            var r398_currentGlyph, r398_xn$setwidth$9Jrj, r398_xn$assignunicode$7Hrq, r398_xn$startfrom$1aao, r398_xn$lineto$5sIl, r398_xn$curveto$1aao, r398_xn$cubicto$1aao, r398_xn$putshapes$9Jrj, r398_xn$reverselast$3qIs, r398_include, r398_xn$createstroke$7Hrq, r398_xn$setanchor$9Jrj, r398_xn$applytransform$1aao, r398_xn$dontexport$5sIl, r398_TURN, r398_turn2, r398_wheight, r398_bottomStroke, r398_m1, r398_m2, _r398_t0, _r398_t1, _r398_t2, _r398_t3;
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
            r398_xn$applytransform$1aao = _r398_t0['apply-transform']['bind'](_r398_t0);
            r398_xn$dontexport$5sIl = function _r398_t3() {
                var _r400_t0, _r400_t1;
                return r398_currentGlyph['dontExport'] = true;
            };
            _r398_t0['gizmo'] = r4_globalTransform;
            _r398_t0['set-width'](r4_WIDTH);
            r398_xn$setwidth$9Jrj(r4_WIDTH);
            r398_xn$assignunicode$7Hrq('w');
            r398_include(r4_eMarks);
            r398_TURN = r4_XH * 0.75;
            r398_turn2 = r4_XH * 0.59;
            r398_wheight = r4_XH * 0.6;
            r398_bottomStroke = r4_adviceBlackness(5.2);
            r398_m1 = r4_WIDTH * 0.325;
            r398_m2 = r4_WIDTH * 0.675;
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_SB, r398_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_SB, (1 - 0.27) * r398_TURN, r398_m1 - r398_bottomStroke / 2, 0)['set-width'](r398_bottomStroke, 0));
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r398_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.27) * r398_TURN, r398_m2 + r398_bottomStroke / 2, 0)['set-width'](0, r398_bottomStroke));
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r398_bottomStroke / 2, r398_wheight)['heads-to'](r4_DOWNWARD)['set-width'](0, r398_bottomStroke)['line-to'](r4_MIDDLE + r398_bottomStroke / 2, r398_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE + r398_bottomStroke / 2, (1 - 0.1) * r398_turn2, r398_m1 + r398_bottomStroke / 2, 0)['set-width'](0, r398_bottomStroke));
            r398_include(r398_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r398_bottomStroke / 2, r398_wheight)['heads-to'](r4_DOWNWARD)['set-width'](r398_bottomStroke, 0)['line-to'](r4_MIDDLE - r398_bottomStroke / 2, r398_turn2)['heads-to'](r4_DOWNWARD)['curve-to'](r4_MIDDLE - r398_bottomStroke / 2, (1 - 0.1) * r398_turn2, r398_m2 - r398_bottomStroke / 2, 0)['set-width'](r398_bottomStroke, 0));
            r398_xn$startfrom$1aao(r398_m1 + r398_bottomStroke / 2, 0);
            r398_xn$lineto$5sIl(r398_m1 - r398_bottomStroke / 2, 0);
            r398_xn$lineto$5sIl(r398_m1, r398_bottomStroke);
            r398_xn$startfrom$1aao(r398_m2 + r398_bottomStroke / 2, 0);
            r398_xn$lineto$5sIl(r398_m2 - r398_bottomStroke / 2, 0);
            r398_xn$lineto$5sIl(r398_m2, r398_bottomStroke);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('y', function _r4_t141() {
            var r402_currentGlyph, r402_xn$setwidth$9Jrj, r402_xn$assignunicode$7Hrq, r402_xn$startfrom$1aao, r402_xn$lineto$5sIl, r402_xn$curveto$1aao, r402_xn$cubicto$1aao, r402_xn$putshapes$9Jrj, r402_xn$reverselast$3qIs, r402_include, r402_xn$createstroke$7Hrq, r402_xn$setanchor$9Jrj, r402_xn$applytransform$1aao, r402_xn$dontexport$5sIl, r402_xbottom, r402_turnp, r402_xb, r402_yb, _r402_t0, _r402_t1, _r402_t2, _r402_t3;
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
            r402_xn$applytransform$1aao = _r402_t0['apply-transform']['bind'](_r402_t0);
            r402_xn$dontexport$5sIl = function _r402_t3() {
                var _r404_t0, _r404_t1;
                return r402_currentGlyph['dontExport'] = true;
            };
            _r402_t0['gizmo'] = r4_globalTransform;
            _r402_t0['set-width'](r4_WIDTH);
            r402_xn$setwidth$9Jrj(r4_WIDTH);
            r402_xn$assignunicode$7Hrq('y');
            r402_include(r4_pMarks);
            r402_xbottom = r0_mix(r4_SB, r4_RIGHTSB, 0.28);
            r402_turnp = r4_XH / (r4_XH - r4_DESCENDER);
            r402_xb = r0_mix(r4_SB, r4_RIGHTSB, 0.51);
            r402_yb = r0_mix(0, r4_XH, 0.05 * r402_turnp);
            r402_include(r4_xStrand(r402_xbottom, r4_DESCENDER, r4_RIGHTSB, r4_XH, 0.1, 0.6, 0.14));
            r402_include(r4_halfXStrand(r4_SB, r4_XH, r402_xb, r402_yb, 0.1 * r402_turnp, 0.4, 0.14 * r402_turnp));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('z', function _r4_t142() {
            var r406_currentGlyph, r406_xn$setwidth$9Jrj, r406_xn$assignunicode$7Hrq, r406_xn$startfrom$1aao, r406_xn$lineto$5sIl, r406_xn$curveto$1aao, r406_xn$cubicto$1aao, r406_xn$putshapes$9Jrj, r406_xn$reverselast$3qIs, r406_include, r406_xn$createstroke$7Hrq, r406_xn$setanchor$9Jrj, r406_xn$applytransform$1aao, r406_xn$dontexport$5sIl, r406_cor, _r406_t0, _r406_t1, _r406_t2, _r406_t3;
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
            r406_xn$applytransform$1aao = _r406_t0['apply-transform']['bind'](_r406_t0);
            r406_xn$dontexport$5sIl = function _r406_t3() {
                var _r408_t0, _r408_t1;
                return r406_currentGlyph['dontExport'] = true;
            };
            _r406_t0['gizmo'] = r4_globalTransform;
            _r406_t0['set-width'](r4_WIDTH);
            r406_xn$setwidth$9Jrj(r4_WIDTH);
            r406_xn$assignunicode$7Hrq('z');
            r406_include(r4_eMarks);
            r406_cor = 1.2;
            r406_include(r406_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_XH)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r406_include(r406_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD)['to-outline']());
            r406_xn$startfrom$1aao(r4_SB, r4_STROKE);
            r406_xn$lineto$5sIl(r4_SB + r4_STROKE * r406_cor, r4_STROKE);
            r406_xn$lineto$5sIl(r4_RIGHTSB, r4_XH - r4_STROKE);
            r406_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r406_cor, r4_XH - r4_STROKE);
            r406_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('k', function _r4_t143() {
            var r410_currentGlyph, r410_xn$setwidth$9Jrj, r410_xn$assignunicode$7Hrq, r410_xn$startfrom$1aao, r410_xn$lineto$5sIl, r410_xn$curveto$1aao, r410_xn$cubicto$1aao, r410_xn$putshapes$9Jrj, r410_xn$reverselast$3qIs, r410_include, r410_xn$createstroke$7Hrq, r410_xn$setanchor$9Jrj, r410_xn$applytransform$1aao, r410_xn$dontexport$5sIl, r410_TURN, r410_rturn, r410_right, r410_attach, r410_attach2, r410_fine, _r410_t0, _r410_t1, _r410_t2, _r410_t3;
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
            r410_xn$applytransform$1aao = _r410_t0['apply-transform']['bind'](_r410_t0);
            r410_xn$dontexport$5sIl = function _r410_t3() {
                var _r412_t0, _r412_t1;
                return r410_currentGlyph['dontExport'] = true;
            };
            _r410_t0['gizmo'] = r4_globalTransform;
            _r410_t0['set-width'](r4_WIDTH);
            r410_xn$setwidth$9Jrj(r4_WIDTH);
            r410_xn$assignunicode$7Hrq('k');
            r410_include(r4_bMarks);
            r410_TURN = r4_XH * 0.99;
            r410_rturn = r4_XH * 0.1;
            r410_right = r4_RIGHTSB - r4_O;
            r410_attach = r4_XH * 0.4;
            r410_attach2 = r4_MIDDLE - r4_WIDTH * 0.1;
            r410_fine = r4_adviceBlackness(3.5);
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB, r4_CAP)['heads-to'](r4_UPWARD));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_XH)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r410_TURN)['heads-to'](r4_DOWNWARD)['curve-to'](r4_RIGHTSB, (1 - 0.18) * r410_TURN, r4_SB + r4_STROKE, r410_attach)['set-width'](0, r410_fine));
            r410_include(r410_xn$createstroke$7Hrq()['start-from'](r410_right - r4_HALFSTROKE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r410_right - r4_HALFSTROKE, r410_rturn + 0.05 * (r4_XH - r410_rturn), r410_attach2, r4_XH * 0.5 + r4_HALFSTROKE)['set-width'](r410_fine / 2, r410_fine / 2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('s', function _r4_t144() {
            var r414_currentGlyph, r414_xn$setwidth$9Jrj, r414_xn$assignunicode$7Hrq, r414_xn$startfrom$1aao, r414_xn$lineto$5sIl, r414_xn$curveto$1aao, r414_xn$cubicto$1aao, r414_xn$putshapes$9Jrj, r414_xn$reverselast$3qIs, r414_include, r414_xn$createstroke$7Hrq, r414_xn$setanchor$9Jrj, r414_xn$applytransform$1aao, r414_xn$dontexport$5sIl, _r414_t0, _r414_t1, _r414_t2, _r414_t3;
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
            r414_xn$applytransform$1aao = _r414_t0['apply-transform']['bind'](_r414_t0);
            r414_xn$dontexport$5sIl = function _r414_t3() {
                var _r416_t0, _r416_t1;
                return r414_currentGlyph['dontExport'] = true;
            };
            _r414_t0['gizmo'] = r4_globalTransform;
            _r414_t0['set-width'](r4_WIDTH);
            r414_xn$setwidth$9Jrj(r4_WIDTH);
            r414_xn$assignunicode$7Hrq('s');
            r414_include(r4_eMarks);
            r414_include(r4_sHookUpper(r4_XH, r4_SMOOTHA * 0.87, r4_SHOOK));
            r414_include(r4_sHookLower(0, r4_SMOOTHA * 0.87, r4_SHOOK));
            r414_include(r4_sStrand(r4_XH - r4_SMOOTHA * 0.87, r4_SMOOTHA * 0.87, 0.2, 0.45));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('r', function _r4_t145() {
            var r418_currentGlyph, r418_xn$setwidth$9Jrj, r418_xn$assignunicode$7Hrq, r418_xn$startfrom$1aao, r418_xn$lineto$5sIl, r418_xn$curveto$1aao, r418_xn$cubicto$1aao, r418_xn$putshapes$9Jrj, r418_xn$reverselast$3qIs, r418_include, r418_xn$createstroke$7Hrq, r418_xn$setanchor$9Jrj, r418_xn$applytransform$1aao, r418_xn$dontexport$5sIl, r418_slope, r418_expand, r418_coexpand, r418_rhookx, r418_rmiddle, _r418_t0, _r418_t1, _r418_t2, _r418_t3;
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
            r418_xn$applytransform$1aao = _r418_t0['apply-transform']['bind'](_r418_t0);
            r418_xn$dontexport$5sIl = function _r418_t3() {
                var _r420_t0, _r420_t1;
                return r418_currentGlyph['dontExport'] = true;
            };
            _r418_t0['gizmo'] = r4_globalTransform;
            _r418_t0['set-width'](r4_WIDTH);
            r418_xn$setwidth$9Jrj(r4_WIDTH);
            r418_xn$assignunicode$7Hrq('r');
            r418_include(r4_eMarks);
            r418_slope = 0.015;
            r418_expand = 0.175;
            r418_coexpand = (1 - r418_expand) / 2;
            r418_rhookx = r4_RIGHTSB + r4_JBALANCE / 2;
            r418_rmiddle = r0_mix(r4_SB + r4_RBALANCE + r4_STROKE, r418_rhookx - r4_HALFSTROKE, 0.5);
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r418_rhookx, r4_XH - r4_RHOOK)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r418_rmiddle, r418_rhookx, r4_KAPPA_AHOOK), r4_XO, r418_rmiddle, r4_XO)['heads-to'](r4_LEFTWARD));
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r418_rmiddle, r4_XO - r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_STROKE * r4_ITALICCOR + r4_RBALANCE, r4_XH - r4_SMALLSMOOTHA)['heads-to'](r4_DOWNWARD)['set-width'](0, r4_STROKE * 0.3));
            r418_include(r418_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_RBALANCE, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB + r4_RBALANCE, r4_XH));
            return void 0;
        });
        r4_fBar = function _r4_t146() {
            var _r421_t0, _r421_t1, _r421_t2;
            return function _r421_t2() {
                var r423_currentGlyph, r423_xn$setwidth$9Jrj, r423_xn$assignunicode$7Hrq, r423_xn$startfrom$1aao, r423_xn$lineto$5sIl, r423_xn$curveto$1aao, r423_xn$cubicto$1aao, r423_xn$putshapes$9Jrj, r423_xn$reverselast$3qIs, r423_include, r423_xn$createstroke$7Hrq, r423_xn$setanchor$9Jrj, r423_xn$applytransform$1aao, r423_xn$dontexport$5sIl, _r423_t0, _r423_t1, _r423_t2, _r423_t3;
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
                r423_xn$applytransform$1aao = _r423_t0['apply-transform']['bind'](_r423_t0);
                r423_xn$dontexport$5sIl = function _r423_t3() {
                    var _r425_t0, _r425_t1;
                    return r423_currentGlyph['dontExport'] = true;
                };
                _r423_t0['gizmo'] = r4_globalTransform;
                _r423_t0['set-width'](r4_WIDTH);
                r423_include(r423_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE + r4_LONGJUT, r4_XH)['heads-to'](r4_RIGHTWARD));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('longs.upright', function _r4_t147() {
            var r427_currentGlyph, r427_xn$setwidth$9Jrj, r427_xn$assignunicode$7Hrq, r427_xn$startfrom$1aao, r427_xn$lineto$5sIl, r427_xn$curveto$1aao, r427_xn$cubicto$1aao, r427_xn$putshapes$9Jrj, r427_xn$reverselast$3qIs, r427_include, r427_xn$createstroke$7Hrq, r427_xn$setanchor$9Jrj, r427_xn$applytransform$1aao, r427_xn$dontexport$5sIl, _r427_t0, _r427_t1, _r427_t2, _r427_t3;
            _r427_t0 = this;
            r427_currentGlyph = _r427_t0;
            r427_xn$setwidth$9Jrj = _r427_t0['set-width']['bind'](_r427_t0);
            r427_xn$assignunicode$7Hrq = function _r427_t2(r428_code) {
                var r428_code, _r428_t0, _r428_t1;
                r427_currentGlyph['assign-unicode'](r428_code);
                return r4_unicodeGlyphs[r427_currentGlyph['unicode'][r427_currentGlyph['unicode']['length'] - 1]] = r427_currentGlyph;
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
            r427_xn$applytransform$1aao = _r427_t0['apply-transform']['bind'](_r427_t0);
            r427_xn$dontexport$5sIl = function _r427_t3() {
                var _r429_t0, _r429_t1;
                return r427_currentGlyph['dontExport'] = true;
            };
            _r427_t0['gizmo'] = r4_globalTransform;
            _r427_t0['set-width'](r4_WIDTH);
            r427_xn$setwidth$9Jrj(r4_WIDTH);
            r427_xn$dontexport$5sIl();
            r427_include(r4_bMarks);
            r427_include(r427_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, 0)['heads-to'](r4_UPWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK * 1.4)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_eshHook = function _r4_t148(r430_attach) {
            var r430_attach, _r430_t0, _r430_t1, _r430_t2;
            return function _r430_t2() {
                var r432_currentGlyph, r432_xn$setwidth$9Jrj, r432_xn$assignunicode$7Hrq, r432_xn$startfrom$1aao, r432_xn$lineto$5sIl, r432_xn$curveto$1aao, r432_xn$cubicto$1aao, r432_xn$putshapes$9Jrj, r432_xn$reverselast$3qIs, r432_include, r432_xn$createstroke$7Hrq, r432_xn$setanchor$9Jrj, r432_xn$applytransform$1aao, r432_xn$dontexport$5sIl, _r432_t0, _r432_t1, _r432_t2, _r432_t3;
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
                r432_xn$applytransform$1aao = _r432_t0['apply-transform']['bind'](_r432_t0);
                r432_xn$dontexport$5sIl = function _r432_t3() {
                    var _r434_t0, _r434_t1;
                    return r432_currentGlyph['dontExport'] = true;
                };
                _r432_t0['gizmo'] = r4_globalTransform;
                _r432_t0['set-width'](r4_WIDTH);
                r432_include(r432_xn$createstroke$7Hrq()['start-from'](r430_attach['x'] - r4_SHOOK * 2, r430_attach['y'] + r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r430_attach['x'], r430_attach['y'])['line-to'](r430_attach['x'], r430_attach['y'] + r4_STROKE));
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('longs.italic', function _r4_t149() {
            var r436_currentGlyph, r436_xn$setwidth$9Jrj, r436_xn$assignunicode$7Hrq, r436_xn$startfrom$1aao, r436_xn$lineto$5sIl, r436_xn$curveto$1aao, r436_xn$cubicto$1aao, r436_xn$putshapes$9Jrj, r436_xn$reverselast$3qIs, r436_include, r436_xn$createstroke$7Hrq, r436_xn$setanchor$9Jrj, r436_xn$applytransform$1aao, r436_xn$dontexport$5sIl, _r436_t0, _r436_t1, _r436_t2, _r436_t3;
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
            r436_xn$applytransform$1aao = _r436_t0['apply-transform']['bind'](_r436_t0);
            r436_xn$dontexport$5sIl = function _r436_t3() {
                var _r438_t0, _r438_t1;
                return r436_currentGlyph['dontExport'] = true;
            };
            _r436_t0['gizmo'] = r4_globalTransform;
            _r436_t0['set-width'](r4_WIDTH);
            r436_xn$setwidth$9Jrj(r4_WIDTH);
            r436_xn$dontexport$5sIl();
            r436_include(r4_ifMarks);
            r436_include(r436_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_SHOOK * 2, r4_HALFSTROKE + r4_O * 6 - r4_SHOOK)['heads-to'](r4_RIGHTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['arc-hv-to'](r4_MIDDLE, 0)['line-to'](r4_MIDDLE, r4_CAP - r4_SHOOK)['arc-vh-to'](r4_MIDDLE + r4_SHOOK * 2, r4_CAP - r4_HALFSTROKE - r4_O * 6)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('longs', function _r4_t150() {
            var r440_currentGlyph, r440_xn$setwidth$9Jrj, r440_xn$assignunicode$7Hrq, r440_xn$startfrom$1aao, r440_xn$lineto$5sIl, r440_xn$curveto$1aao, r440_xn$cubicto$1aao, r440_xn$putshapes$9Jrj, r440_xn$reverselast$3qIs, r440_include, r440_xn$createstroke$7Hrq, r440_xn$setanchor$9Jrj, r440_xn$applytransform$1aao, r440_xn$dontexport$5sIl, _r440_t0, _r440_t1, _r440_t2, _r440_t3;
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
            r440_xn$applytransform$1aao = _r440_t0['apply-transform']['bind'](_r440_t0);
            r440_xn$dontexport$5sIl = function _r440_t3() {
                var _r442_t0, _r442_t1;
                return r440_currentGlyph['dontExport'] = true;
            };
            _r440_t0['gizmo'] = r4_globalTransform;
            _r440_t0['set-width'](r4_WIDTH);
            r440_xn$setwidth$9Jrj(r4_WIDTH);
            r440_xn$assignunicode$7Hrq(383);
            if (r4_para['italicangle'] > 0) {
                r440_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            } else {
                r440_include(r4_glyphs['longs.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('f', function _r4_t151() {
            var r444_currentGlyph, r444_xn$setwidth$9Jrj, r444_xn$assignunicode$7Hrq, r444_xn$startfrom$1aao, r444_xn$lineto$5sIl, r444_xn$curveto$1aao, r444_xn$cubicto$1aao, r444_xn$putshapes$9Jrj, r444_xn$reverselast$3qIs, r444_include, r444_xn$createstroke$7Hrq, r444_xn$setanchor$9Jrj, r444_xn$applytransform$1aao, r444_xn$dontexport$5sIl, _r444_t0, _r444_t1, _r444_t2, _r444_t3;
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
            r444_xn$applytransform$1aao = _r444_t0['apply-transform']['bind'](_r444_t0);
            r444_xn$dontexport$5sIl = function _r444_t3() {
                var _r446_t0, _r446_t1;
                return r444_currentGlyph['dontExport'] = true;
            };
            _r444_t0['gizmo'] = r4_globalTransform;
            _r444_t0['set-width'](r4_WIDTH);
            r444_xn$setwidth$9Jrj(r4_WIDTH);
            r444_xn$assignunicode$7Hrq('f');
            r444_include(r4_glyphs['longs'], r4_AS_BASE);
            r444_include(r4_fBar());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('AE', function _r4_t152() {
            var r448_currentGlyph, r448_xn$setwidth$9Jrj, r448_xn$assignunicode$7Hrq, r448_xn$startfrom$1aao, r448_xn$lineto$5sIl, r448_xn$curveto$1aao, r448_xn$cubicto$1aao, r448_xn$putshapes$9Jrj, r448_xn$reverselast$3qIs, r448_include, r448_xn$createstroke$7Hrq, r448_xn$setanchor$9Jrj, r448_xn$applytransform$1aao, r448_xn$dontexport$5sIl, r448_sw, r448_eleft, r448_turn, _r448_t0, _r448_t1, _r448_t2, _r448_t3;
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
            r448_xn$applytransform$1aao = _r448_t0['apply-transform']['bind'](_r448_t0);
            r448_xn$dontexport$5sIl = function _r448_t3() {
                var _r450_t0, _r450_t1;
                return r448_currentGlyph['dontExport'] = true;
            };
            _r448_t0['gizmo'] = r4_globalTransform;
            _r448_t0['set-width'](r4_WIDTH);
            r448_xn$setwidth$9Jrj(r4_WIDTH);
            r448_xn$assignunicode$7Hrq(198);
            r448_include(r4_capitalMarks);
            r448_sw = r4_adviceBlackness(3.5);
            r448_eleft = r4_MIDDLE - r448_sw * 0.25;
            r448_turn = r4_XH * 0.1;
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_UPWARD)['set-width'](0, r448_sw)['line-to'](r4_SB, r448_turn)['heads-to'](r4_UPWARD)['curve-to'](r4_SB, r0_mix(r448_turn, r4_CAP, 0.27), r448_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r448_sw * 0.8));
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r4_SB + r448_sw, r4_XH / 2)['heads-to'](r4_RIGHTWARD)['set-width'](0, r448_sw)['line-to'](r448_eleft + r448_sw / 2, r4_XH / 2)['heads-to'](r4_RIGHTWARD));
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r448_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r448_sw)['line-to'](r448_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r448_eleft - r4_HALFSTROKE, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r448_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r448_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r448_include(r448_xn$createstroke$7Hrq()['start-from'](r448_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('OE', function _r4_t153() {
            var r452_currentGlyph, r452_xn$setwidth$9Jrj, r452_xn$assignunicode$7Hrq, r452_xn$startfrom$1aao, r452_xn$lineto$5sIl, r452_xn$curveto$1aao, r452_xn$cubicto$1aao, r452_xn$putshapes$9Jrj, r452_xn$reverselast$3qIs, r452_include, r452_xn$createstroke$7Hrq, r452_xn$setanchor$9Jrj, r452_xn$applytransform$1aao, r452_xn$dontexport$5sIl, r452_sw, r452_eleft, _r452_t0, _r452_t1, _r452_t2, _r452_t3;
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
            r452_xn$applytransform$1aao = _r452_t0['apply-transform']['bind'](_r452_t0);
            r452_xn$dontexport$5sIl = function _r452_t3() {
                var _r454_t0, _r454_t1;
                return r452_currentGlyph['dontExport'] = true;
            };
            _r452_t0['gizmo'] = r4_globalTransform;
            _r452_t0['set-width'](r4_WIDTH);
            r452_xn$setwidth$9Jrj(r4_WIDTH);
            r452_xn$assignunicode$7Hrq(338);
            r452_include(r4_capitalMarks);
            r452_sw = r4_adviceBlackness(3.5);
            r452_eleft = r4_MIDDLE;
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r452_eleft + 1, r4_CAP)['set-width'](r452_sw, 0)['heads-to'](r4_LEFTWARD)['line-to'](r452_eleft, r4_CAP)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB, r4_CAP - r4_SMOOTHA)['line-to'](r4_SB, r4_SMOOTHB)['arc-vh-to'](r452_eleft, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r452_eleft + 1, 0)['heads-to'](r4_RIGHTWARD));
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r452_eleft, 0)['heads-to'](r4_UPWARD)['set-width'](0, r452_sw)['line-to'](r452_eleft, r4_CAP)['heads-to'](r4_UPWARD));
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r452_eleft, r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r452_eleft, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r452_sw / 4, r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            r452_include(r452_xn$createstroke$7Hrq()['start-from'](r452_eleft, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-epart', function _r4_t154() {
            var r456_currentGlyph, r456_xn$setwidth$9Jrj, r456_xn$assignunicode$7Hrq, r456_xn$startfrom$1aao, r456_xn$lineto$5sIl, r456_xn$curveto$1aao, r456_xn$cubicto$1aao, r456_xn$putshapes$9Jrj, r456_xn$reverselast$3qIs, r456_include, r456_xn$createstroke$7Hrq, r456_xn$setanchor$9Jrj, r456_xn$applytransform$1aao, r456_xn$dontexport$5sIl, r456_sw, r456_eLeft, r456_eMiddle, r456_barbottom, r456_hookx, r456_eHookMiddle, r456_sma, r456_smb, _r456_t0, _r456_t1, _r456_t2, _r456_t3;
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
            r456_xn$applytransform$1aao = _r456_t0['apply-transform']['bind'](_r456_t0);
            r456_xn$dontexport$5sIl = function _r456_t3() {
                var _r458_t0, _r458_t1;
                return r456_currentGlyph['dontExport'] = true;
            };
            _r456_t0['gizmo'] = r4_globalTransform;
            _r456_t0['set-width'](r4_WIDTH);
            r456_xn$dontexport$5sIl();
            r456_sw = r4_adviceBlackness(3.5);
            r456_eLeft = r4_MIDDLE - r456_sw / 2 * r4_ITALICCOR;
            r456_eMiddle = r0_mix(r456_eLeft, r4_RIGHTSB - r4_O, 0.5) - r456_sw * r4_globalTransform['yx'];
            r456_barbottom = r4_XH * r4_EBARPOS;
            r456_hookx = r4_RIGHTSB - r4_O - r4_OXHOOK + r4_TAILADJX * r4_globalTransform['yx'];
            r456_eHookMiddle = r0_mix(r456_eLeft, r456_hookx, 0.5);
            r456_sma = r4_SMALLSMOOTHA * 0.6;
            r456_smb = r4_SMALLSMOOTHB * 0.6;
            r456_include(r456_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r456_barbottom)['heads-to'](r4_UPWARD)['set-width'](r456_sw, 0)['line-to'](r4_RIGHTSB - r4_O, r4_XH - r456_smb)['arc-vh-to'](r456_eMiddle, r4_XO)['arc-hv-to'](r456_eLeft, r4_XH - r456_sma)['line-to'](r456_eLeft, r456_smb)['arc-vh-to'](r456_eHookMiddle, r4_O)['curve-to'](r0_mix(r456_eHookMiddle, r456_hookx, r4_KAPPA_HOOK), r4_O, r456_hookx, r4_SHOOK - r4_TAILADJY * r4_globalTransform['yx']));
            r456_include(r456_xn$createstroke$7Hrq()['start-from'](r456_eLeft + r456_sw / 2, r456_barbottom)['set-width'](r456_sw, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r456_sw / 2, r456_barbottom)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae-apart', function _r4_t155() {
            var r460_currentGlyph, r460_xn$setwidth$9Jrj, r460_xn$assignunicode$7Hrq, r460_xn$startfrom$1aao, r460_xn$lineto$5sIl, r460_xn$curveto$1aao, r460_xn$cubicto$1aao, r460_xn$putshapes$9Jrj, r460_xn$reverselast$3qIs, r460_include, r460_xn$createstroke$7Hrq, r460_xn$setanchor$9Jrj, r460_xn$applytransform$1aao, r460_xn$dontexport$5sIl, r460_sw, r460_bartop, r460_abarRight, r460_m1, r460_lowmiddle, r460_barsmooth, r460_sma, r460_smb, _r460_t0, _r460_t1, _r460_t2, _r460_t3;
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
            r460_xn$applytransform$1aao = _r460_t0['apply-transform']['bind'](_r460_t0);
            r460_xn$dontexport$5sIl = function _r460_t3() {
                var _r462_t0, _r462_t1;
                return r460_currentGlyph['dontExport'] = true;
            };
            _r460_t0['gizmo'] = r4_globalTransform;
            _r460_t0['set-width'](r4_WIDTH);
            r460_xn$dontexport$5sIl();
            r460_sw = r4_adviceBlackness(3.5);
            r460_bartop = r4_XH * r4_BARPOS + r460_sw;
            r460_abarRight = r4_MIDDLE + r460_sw / 2 * r4_ITALICCOR;
            r460_m1 = r0_mix(r4_SB + r4_OXHOOK, r460_abarRight, 0.5);
            r460_lowmiddle = r0_mix(r4_SB + r460_sw, r460_abarRight - r460_sw, 0.5) + r460_sw * r4_globalTransform['yx'];
            r460_barsmooth = r0_mix(r4_SB, r460_abarRight, 0.6);
            r460_sma = r4_SMALLSMOOTHA * 0.6;
            r460_smb = r4_SMALLSMOOTHB * 0.6;
            r460_include(r460_xn$createstroke$7Hrq()['start-from'](r460_abarRight, r4_XH - r460_sma)['set-width'](r460_sw, 0)['arc-vh-to'](r460_m1, r4_XO)['curve-to'](r0_mix(r460_m1, r4_SB, r4_KAPPA_HOOK), r4_XO, r4_SB + r4_OXHOOK, r4_XH - r4_SHOOK));
            r460_include(r460_xn$createstroke$7Hrq()['start-from'](r460_abarRight, r460_smb)['set-width'](0, r460_sw)['arc-vh-to'](r460_lowmiddle, r4_O)['arc-hv-to'](r4_SB + r4_O, r0_mix(0, r460_bartop, r460_smb / (r460_sma + r460_smb)))['arc-vh-to'](r460_barsmooth, r460_bartop)['line-to'](r460_abarRight, r460_bartop)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe-opart', function _r4_t156() {
            var r464_currentGlyph, r464_xn$setwidth$9Jrj, r464_xn$assignunicode$7Hrq, r464_xn$startfrom$1aao, r464_xn$lineto$5sIl, r464_xn$curveto$1aao, r464_xn$cubicto$1aao, r464_xn$putshapes$9Jrj, r464_xn$reverselast$3qIs, r464_include, r464_xn$createstroke$7Hrq, r464_xn$setanchor$9Jrj, r464_xn$applytransform$1aao, r464_xn$dontexport$5sIl, r464_sw, r464_abarRight, r464_m1, r464_sma, r464_smb, _r464_t0, _r464_t1, _r464_t2, _r464_t3;
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
            r464_xn$applytransform$1aao = _r464_t0['apply-transform']['bind'](_r464_t0);
            r464_xn$dontexport$5sIl = function _r464_t3() {
                var _r466_t0, _r466_t1;
                return r464_currentGlyph['dontExport'] = true;
            };
            _r464_t0['gizmo'] = r4_globalTransform;
            _r464_t0['set-width'](r4_WIDTH);
            r464_xn$dontexport$5sIl();
            r464_sw = r4_adviceBlackness(3.5);
            r464_abarRight = r4_MIDDLE + r464_sw / 2 * r4_ITALICCOR;
            r464_m1 = r0_mix(r4_SB + r4_O, r464_abarRight, 0.5);
            r464_sma = r4_SMALLSMOOTHA * 0.6;
            r464_smb = r4_SMALLSMOOTHB * 0.6;
            r464_include(r464_xn$createstroke$7Hrq()['start-from'](r464_abarRight, r464_smb)['set-width'](0, r464_sw)['arc-vh-to'](r464_m1 + r464_sw * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_SB + r4_O, r464_smb)['line-to'](r4_SB + r4_O, r4_XH - r464_sma)['arc-vh-to'](r464_m1 - r464_sw * r4_globalTransform['yx'], r4_XH - r4_O)['arc-hv-to'](r464_abarRight, r4_XH - r464_smb));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ae', function _r4_t157() {
            var r468_currentGlyph, r468_xn$setwidth$9Jrj, r468_xn$assignunicode$7Hrq, r468_xn$startfrom$1aao, r468_xn$lineto$5sIl, r468_xn$curveto$1aao, r468_xn$cubicto$1aao, r468_xn$putshapes$9Jrj, r468_xn$reverselast$3qIs, r468_include, r468_xn$createstroke$7Hrq, r468_xn$setanchor$9Jrj, r468_xn$applytransform$1aao, r468_xn$dontexport$5sIl, _r468_t0, _r468_t1, _r468_t2, _r468_t3;
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
            r468_xn$applytransform$1aao = _r468_t0['apply-transform']['bind'](_r468_t0);
            r468_xn$dontexport$5sIl = function _r468_t3() {
                var _r470_t0, _r470_t1;
                return r468_currentGlyph['dontExport'] = true;
            };
            _r468_t0['gizmo'] = r4_globalTransform;
            _r468_t0['set-width'](r4_WIDTH);
            r468_xn$setwidth$9Jrj(r4_WIDTH);
            r468_xn$assignunicode$7Hrq(230);
            r468_include(r4_eMarks);
            r468_include(r4_glyphs['ae-epart']);
            r468_include(r4_glyphs['ae-apart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oe', function _r4_t158() {
            var r472_currentGlyph, r472_xn$setwidth$9Jrj, r472_xn$assignunicode$7Hrq, r472_xn$startfrom$1aao, r472_xn$lineto$5sIl, r472_xn$curveto$1aao, r472_xn$cubicto$1aao, r472_xn$putshapes$9Jrj, r472_xn$reverselast$3qIs, r472_include, r472_xn$createstroke$7Hrq, r472_xn$setanchor$9Jrj, r472_xn$applytransform$1aao, r472_xn$dontexport$5sIl, _r472_t0, _r472_t1, _r472_t2, _r472_t3;
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
            r472_xn$applytransform$1aao = _r472_t0['apply-transform']['bind'](_r472_t0);
            r472_xn$dontexport$5sIl = function _r472_t3() {
                var _r474_t0, _r474_t1;
                return r472_currentGlyph['dontExport'] = true;
            };
            _r472_t0['gizmo'] = r4_globalTransform;
            _r472_t0['set-width'](r4_WIDTH);
            r472_xn$setwidth$9Jrj(r4_WIDTH);
            r472_xn$assignunicode$7Hrq(339);
            r472_include(r4_eMarks);
            r472_include(r4_glyphs['ae-epart']);
            r472_include(r4_glyphs['oe-opart']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Eth', function _r4_t159() {
            var r476_currentGlyph, r476_xn$setwidth$9Jrj, r476_xn$assignunicode$7Hrq, r476_xn$startfrom$1aao, r476_xn$lineto$5sIl, r476_xn$curveto$1aao, r476_xn$cubicto$1aao, r476_xn$putshapes$9Jrj, r476_xn$reverselast$3qIs, r476_include, r476_xn$createstroke$7Hrq, r476_xn$setanchor$9Jrj, r476_xn$applytransform$1aao, r476_xn$dontexport$5sIl, _r476_t0, _r476_t1, _r476_t2, _r476_t3;
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
            r476_xn$applytransform$1aao = _r476_t0['apply-transform']['bind'](_r476_t0);
            r476_xn$dontexport$5sIl = function _r476_t3() {
                var _r478_t0, _r478_t1;
                return r476_currentGlyph['dontExport'] = true;
            };
            _r476_t0['gizmo'] = r4_globalTransform;
            _r476_t0['set-width'](r4_WIDTH);
            r476_xn$assignunicode$7Hrq(208);
            r476_include(r4_glyphs['D'], r4_AS_BASE);
            r476_include(r476_xn$createstroke$7Hrq()['start-from'](r4_SB * 0.3, r4_CAP * 0.54)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.55), r4_CAP * 0.54)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Dcroat', function _r4_t160() {
            var r480_currentGlyph, r480_xn$setwidth$9Jrj, r480_xn$assignunicode$7Hrq, r480_xn$startfrom$1aao, r480_xn$lineto$5sIl, r480_xn$curveto$1aao, r480_xn$cubicto$1aao, r480_xn$putshapes$9Jrj, r480_xn$reverselast$3qIs, r480_include, r480_xn$createstroke$7Hrq, r480_xn$setanchor$9Jrj, r480_xn$applytransform$1aao, r480_xn$dontexport$5sIl, _r480_t0, _r480_t1, _r480_t2, _r480_t3;
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
            r480_xn$applytransform$1aao = _r480_t0['apply-transform']['bind'](_r480_t0);
            r480_xn$dontexport$5sIl = function _r480_t3() {
                var _r482_t0, _r482_t1;
                return r480_currentGlyph['dontExport'] = true;
            };
            _r480_t0['gizmo'] = r4_globalTransform;
            _r480_t0['set-width'](r4_WIDTH);
            r480_xn$assignunicode$7Hrq(272);
            r480_include(r4_glyphs['Eth'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eth', function _r4_t161() {
            var r484_currentGlyph, r484_xn$setwidth$9Jrj, r484_xn$assignunicode$7Hrq, r484_xn$startfrom$1aao, r484_xn$lineto$5sIl, r484_xn$curveto$1aao, r484_xn$cubicto$1aao, r484_xn$putshapes$9Jrj, r484_xn$reverselast$3qIs, r484_include, r484_xn$createstroke$7Hrq, r484_xn$setanchor$9Jrj, r484_xn$applytransform$1aao, r484_xn$dontexport$5sIl, r484_ymiddlea, r484_sw, _r484_t0, _r484_t1, _r484_t2, _r484_t3;
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
            r484_xn$applytransform$1aao = _r484_t0['apply-transform']['bind'](_r484_t0);
            r484_xn$dontexport$5sIl = function _r484_t3() {
                var _r486_t0, _r486_t1;
                return r484_currentGlyph['dontExport'] = true;
            };
            _r484_t0['gizmo'] = r4_globalTransform;
            _r484_t0['set-width'](r4_WIDTH);
            r484_xn$setwidth$9Jrj(r4_WIDTH);
            r484_xn$assignunicode$7Hrq(240);
            r484_include(r4_bMarks);
            r484_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r484_ymiddlea = (r4_CAP * 0.6 + r4_SMALLSMOOTHA - r4_SMALLSMOOTHB) / 2;
            r484_include(r484_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r484_ymiddlea)['set-width'](r4_STROKE, 0)['curve-to'](r4_RIGHTSB - r4_O, r0_mix(r484_ymiddlea, r4_CAP, 0.8), r4_SB + r4_STROKE * 1.1, r4_CAP));
            r484_sw = 0.5 * r4_adviceBlackness(4);
            r484_include(r484_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.1), r0_mix(r4_XH, r4_CAP, -0.1))['set-width'](r484_sw, r484_sw)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.95), r0_mix(r4_XH, r4_CAP, 0.3)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dcroat', function _r4_t162() {
            var r488_currentGlyph, r488_xn$setwidth$9Jrj, r488_xn$assignunicode$7Hrq, r488_xn$startfrom$1aao, r488_xn$lineto$5sIl, r488_xn$curveto$1aao, r488_xn$cubicto$1aao, r488_xn$putshapes$9Jrj, r488_xn$reverselast$3qIs, r488_include, r488_xn$createstroke$7Hrq, r488_xn$setanchor$9Jrj, r488_xn$applytransform$1aao, r488_xn$dontexport$5sIl, r488_sw, _r488_t0, _r488_t1, _r488_t2, _r488_t3;
            _r488_t0 = this;
            r488_currentGlyph = _r488_t0;
            r488_xn$setwidth$9Jrj = _r488_t0['set-width']['bind'](_r488_t0);
            r488_xn$assignunicode$7Hrq = function _r488_t2(r489_code) {
                var r489_code, _r489_t0, _r489_t1;
                r488_currentGlyph['assign-unicode'](r489_code);
                return r4_unicodeGlyphs[r488_currentGlyph['unicode'][r488_currentGlyph['unicode']['length'] - 1]] = r488_currentGlyph;
            };
            r488_xn$startfrom$1aao = _r488_t0['start-from']['bind'](_r488_t0);
            r488_xn$lineto$5sIl = _r488_t0['line-to']['bind'](_r488_t0);
            r488_xn$curveto$1aao = _r488_t0['curve-to']['bind'](_r488_t0);
            r488_xn$cubicto$1aao = _r488_t0['cubic-to']['bind'](_r488_t0);
            r488_xn$putshapes$9Jrj = _r488_t0['put-shapes']['bind'](_r488_t0);
            r488_xn$reverselast$3qIs = _r488_t0['reverse-last']['bind'](_r488_t0);
            r488_include = _r488_t0['include']['bind'](_r488_t0);
            r488_xn$createstroke$7Hrq = _r488_t0['create-stroke']['bind'](_r488_t0);
            r488_xn$setanchor$9Jrj = _r488_t0['set-anchor']['bind'](_r488_t0);
            r488_xn$applytransform$1aao = _r488_t0['apply-transform']['bind'](_r488_t0);
            r488_xn$dontexport$5sIl = function _r488_t3() {
                var _r490_t0, _r490_t1;
                return r488_currentGlyph['dontExport'] = true;
            };
            _r488_t0['gizmo'] = r4_globalTransform;
            _r488_t0['set-width'](r4_WIDTH);
            r488_xn$assignunicode$7Hrq(273);
            r488_include(r4_glyphs['d'], r4_AS_BASE);
            r488_sw = 0.5 * r4_adviceBlackness(5);
            r488_include(r488_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB - r4_STROKE, 0.5), r0_mix(r4_XH, r4_CAP, 0.45))['set-width'](r488_sw, r488_sw)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_WIDTH, 0.7), r0_mix(r4_XH, r4_CAP, 0.45))['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Oslash', function _r4_t163() {
            var r492_currentGlyph, r492_xn$setwidth$9Jrj, r492_xn$assignunicode$7Hrq, r492_xn$startfrom$1aao, r492_xn$lineto$5sIl, r492_xn$curveto$1aao, r492_xn$cubicto$1aao, r492_xn$putshapes$9Jrj, r492_xn$reverselast$3qIs, r492_include, r492_xn$createstroke$7Hrq, r492_xn$setanchor$9Jrj, r492_xn$applytransform$1aao, r492_xn$dontexport$5sIl, r492_fine, _r492_t0, _r492_t1, _r492_t2, _r492_t3;
            _r492_t0 = this;
            r492_currentGlyph = _r492_t0;
            r492_xn$setwidth$9Jrj = _r492_t0['set-width']['bind'](_r492_t0);
            r492_xn$assignunicode$7Hrq = function _r492_t2(r493_code) {
                var r493_code, _r493_t0, _r493_t1;
                r492_currentGlyph['assign-unicode'](r493_code);
                return r4_unicodeGlyphs[r492_currentGlyph['unicode'][r492_currentGlyph['unicode']['length'] - 1]] = r492_currentGlyph;
            };
            r492_xn$startfrom$1aao = _r492_t0['start-from']['bind'](_r492_t0);
            r492_xn$lineto$5sIl = _r492_t0['line-to']['bind'](_r492_t0);
            r492_xn$curveto$1aao = _r492_t0['curve-to']['bind'](_r492_t0);
            r492_xn$cubicto$1aao = _r492_t0['cubic-to']['bind'](_r492_t0);
            r492_xn$putshapes$9Jrj = _r492_t0['put-shapes']['bind'](_r492_t0);
            r492_xn$reverselast$3qIs = _r492_t0['reverse-last']['bind'](_r492_t0);
            r492_include = _r492_t0['include']['bind'](_r492_t0);
            r492_xn$createstroke$7Hrq = _r492_t0['create-stroke']['bind'](_r492_t0);
            r492_xn$setanchor$9Jrj = _r492_t0['set-anchor']['bind'](_r492_t0);
            r492_xn$applytransform$1aao = _r492_t0['apply-transform']['bind'](_r492_t0);
            r492_xn$dontexport$5sIl = function _r492_t3() {
                var _r494_t0, _r494_t1;
                return r492_currentGlyph['dontExport'] = true;
            };
            _r492_t0['gizmo'] = r4_globalTransform;
            _r492_t0['set-width'](r4_WIDTH);
            r492_xn$assignunicode$7Hrq(216);
            r492_fine = r4_adviceBlackness(10);
            r492_include(r4_glyphs['O'], r4_AS_BASE);
            r492_include(r492_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r492_fine, r0_mix(r4_CAP, 0, 1.05))['set-width'](r492_fine, r492_fine)['line-to'](r4_RIGHTSB - r4_O - r492_fine, r0_mix(0, r4_CAP, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('oslash', function _r4_t164() {
            var r496_currentGlyph, r496_xn$setwidth$9Jrj, r496_xn$assignunicode$7Hrq, r496_xn$startfrom$1aao, r496_xn$lineto$5sIl, r496_xn$curveto$1aao, r496_xn$cubicto$1aao, r496_xn$putshapes$9Jrj, r496_xn$reverselast$3qIs, r496_include, r496_xn$createstroke$7Hrq, r496_xn$setanchor$9Jrj, r496_xn$applytransform$1aao, r496_xn$dontexport$5sIl, r496_fine, _r496_t0, _r496_t1, _r496_t2, _r496_t3;
            _r496_t0 = this;
            r496_currentGlyph = _r496_t0;
            r496_xn$setwidth$9Jrj = _r496_t0['set-width']['bind'](_r496_t0);
            r496_xn$assignunicode$7Hrq = function _r496_t2(r497_code) {
                var r497_code, _r497_t0, _r497_t1;
                r496_currentGlyph['assign-unicode'](r497_code);
                return r4_unicodeGlyphs[r496_currentGlyph['unicode'][r496_currentGlyph['unicode']['length'] - 1]] = r496_currentGlyph;
            };
            r496_xn$startfrom$1aao = _r496_t0['start-from']['bind'](_r496_t0);
            r496_xn$lineto$5sIl = _r496_t0['line-to']['bind'](_r496_t0);
            r496_xn$curveto$1aao = _r496_t0['curve-to']['bind'](_r496_t0);
            r496_xn$cubicto$1aao = _r496_t0['cubic-to']['bind'](_r496_t0);
            r496_xn$putshapes$9Jrj = _r496_t0['put-shapes']['bind'](_r496_t0);
            r496_xn$reverselast$3qIs = _r496_t0['reverse-last']['bind'](_r496_t0);
            r496_include = _r496_t0['include']['bind'](_r496_t0);
            r496_xn$createstroke$7Hrq = _r496_t0['create-stroke']['bind'](_r496_t0);
            r496_xn$setanchor$9Jrj = _r496_t0['set-anchor']['bind'](_r496_t0);
            r496_xn$applytransform$1aao = _r496_t0['apply-transform']['bind'](_r496_t0);
            r496_xn$dontexport$5sIl = function _r496_t3() {
                var _r498_t0, _r498_t1;
                return r496_currentGlyph['dontExport'] = true;
            };
            _r496_t0['gizmo'] = r4_globalTransform;
            _r496_t0['set-width'](r4_WIDTH);
            r496_xn$assignunicode$7Hrq(248);
            r496_fine = r4_adviceBlackness(10);
            r496_include(r4_glyphs['o'], r4_AS_BASE);
            r496_include(r496_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O + r496_fine, r0_mix(r4_XH, 0, 1.05))['set-width'](r496_fine, r496_fine)['line-to'](r4_RIGHTSB - r4_O - r496_fine, r0_mix(0, r4_XH, 1.05)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('Thorn', function _r4_t165() {
            var r500_currentGlyph, r500_xn$setwidth$9Jrj, r500_xn$assignunicode$7Hrq, r500_xn$startfrom$1aao, r500_xn$lineto$5sIl, r500_xn$curveto$1aao, r500_xn$cubicto$1aao, r500_xn$putshapes$9Jrj, r500_xn$reverselast$3qIs, r500_include, r500_xn$createstroke$7Hrq, r500_xn$setanchor$9Jrj, r500_xn$applytransform$1aao, r500_xn$dontexport$5sIl, r500_bowlTop, r500_bowlBottom, r500_bkappa, r500_turn, r500_turnRadius, _r500_t0, _r500_t1, _r500_t2, _r500_t3;
            _r500_t0 = this;
            r500_currentGlyph = _r500_t0;
            r500_xn$setwidth$9Jrj = _r500_t0['set-width']['bind'](_r500_t0);
            r500_xn$assignunicode$7Hrq = function _r500_t2(r501_code) {
                var r501_code, _r501_t0, _r501_t1;
                r500_currentGlyph['assign-unicode'](r501_code);
                return r4_unicodeGlyphs[r500_currentGlyph['unicode'][r500_currentGlyph['unicode']['length'] - 1]] = r500_currentGlyph;
            };
            r500_xn$startfrom$1aao = _r500_t0['start-from']['bind'](_r500_t0);
            r500_xn$lineto$5sIl = _r500_t0['line-to']['bind'](_r500_t0);
            r500_xn$curveto$1aao = _r500_t0['curve-to']['bind'](_r500_t0);
            r500_xn$cubicto$1aao = _r500_t0['cubic-to']['bind'](_r500_t0);
            r500_xn$putshapes$9Jrj = _r500_t0['put-shapes']['bind'](_r500_t0);
            r500_xn$reverselast$3qIs = _r500_t0['reverse-last']['bind'](_r500_t0);
            r500_include = _r500_t0['include']['bind'](_r500_t0);
            r500_xn$createstroke$7Hrq = _r500_t0['create-stroke']['bind'](_r500_t0);
            r500_xn$setanchor$9Jrj = _r500_t0['set-anchor']['bind'](_r500_t0);
            r500_xn$applytransform$1aao = _r500_t0['apply-transform']['bind'](_r500_t0);
            r500_xn$dontexport$5sIl = function _r500_t3() {
                var _r502_t0, _r502_t1;
                return r500_currentGlyph['dontExport'] = true;
            };
            _r500_t0['gizmo'] = r4_globalTransform;
            _r500_t0['set-width'](r4_WIDTH);
            r500_xn$setwidth$9Jrj(r4_WIDTH);
            r500_xn$assignunicode$7Hrq(222);
            r500_include(r4_capitalMarks);
            r500_bowlTop = r4_CAP * 0.77;
            r500_bowlBottom = r4_CAP * 0.23;
            r500_bkappa = r4_COKAPPA - 0.2;
            r500_turn = r0_mix(r500_bowlTop, r500_bowlBottom, 0.5);
            r500_turnRadius = (r500_bowlTop - r500_bowlBottom) / 2;
            r500_include(r500_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r500_bowlTop)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB - r500_turnRadius, r500_bowlTop)['arc-hv-to'](r4_RIGHTSB - r4_O, r500_turn)['arc-vh-to'](r4_RIGHTSB - r500_turnRadius, r500_bowlBottom)['line-to'](r4_SB * 1.25 + r4_HALFSTROKE * 0.1, r500_bowlBottom)['heads-to'](r4_LEFTWARD));
            r500_include(r500_xn$createstroke$7Hrq()['start-from'](r4_SB * 1.25, 0)['heads-to'](r4_UPWARD)['set-width'](0, r4_STROKE)['line-to'](r4_SB * 1.25, r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('thorn', function _r4_t166() {
            var r504_currentGlyph, r504_xn$setwidth$9Jrj, r504_xn$assignunicode$7Hrq, r504_xn$startfrom$1aao, r504_xn$lineto$5sIl, r504_xn$curveto$1aao, r504_xn$cubicto$1aao, r504_xn$putshapes$9Jrj, r504_xn$reverselast$3qIs, r504_include, r504_xn$createstroke$7Hrq, r504_xn$setanchor$9Jrj, r504_xn$applytransform$1aao, r504_xn$dontexport$5sIl, _r504_t0, _r504_t1, _r504_t2, _r504_t3;
            _r504_t0 = this;
            r504_currentGlyph = _r504_t0;
            r504_xn$setwidth$9Jrj = _r504_t0['set-width']['bind'](_r504_t0);
            r504_xn$assignunicode$7Hrq = function _r504_t2(r505_code) {
                var r505_code, _r505_t0, _r505_t1;
                r504_currentGlyph['assign-unicode'](r505_code);
                return r4_unicodeGlyphs[r504_currentGlyph['unicode'][r504_currentGlyph['unicode']['length'] - 1]] = r504_currentGlyph;
            };
            r504_xn$startfrom$1aao = _r504_t0['start-from']['bind'](_r504_t0);
            r504_xn$lineto$5sIl = _r504_t0['line-to']['bind'](_r504_t0);
            r504_xn$curveto$1aao = _r504_t0['curve-to']['bind'](_r504_t0);
            r504_xn$cubicto$1aao = _r504_t0['cubic-to']['bind'](_r504_t0);
            r504_xn$putshapes$9Jrj = _r504_t0['put-shapes']['bind'](_r504_t0);
            r504_xn$reverselast$3qIs = _r504_t0['reverse-last']['bind'](_r504_t0);
            r504_include = _r504_t0['include']['bind'](_r504_t0);
            r504_xn$createstroke$7Hrq = _r504_t0['create-stroke']['bind'](_r504_t0);
            r504_xn$setanchor$9Jrj = _r504_t0['set-anchor']['bind'](_r504_t0);
            r504_xn$applytransform$1aao = _r504_t0['apply-transform']['bind'](_r504_t0);
            r504_xn$dontexport$5sIl = function _r504_t3() {
                var _r506_t0, _r506_t1;
                return r504_currentGlyph['dontExport'] = true;
            };
            _r504_t0['gizmo'] = r4_globalTransform;
            _r504_t0['set-width'](r4_WIDTH);
            r504_xn$assignunicode$7Hrq(254);
            r504_include(r4_glyphs['b'], r4_AS_BASE);
            r504_include(r4_glyphs['p']);
            r504_include(r4_ifMarks);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.upright', function _r4_t167() {
            var r508_currentGlyph, r508_xn$setwidth$9Jrj, r508_xn$assignunicode$7Hrq, r508_xn$startfrom$1aao, r508_xn$lineto$5sIl, r508_xn$curveto$1aao, r508_xn$cubicto$1aao, r508_xn$putshapes$9Jrj, r508_xn$reverselast$3qIs, r508_include, r508_xn$createstroke$7Hrq, r508_xn$setanchor$9Jrj, r508_xn$applytransform$1aao, r508_xn$dontexport$5sIl, r508_yTopTurn, r508_yBottomTurn, r508_xTopTurn, r508_xMiddleTurn, r508_xBottomTurn, r508_xBottomFinal, _r508_t0, _r508_t1, _r508_t2, _r508_t3;
            _r508_t0 = this;
            r508_currentGlyph = _r508_t0;
            r508_xn$setwidth$9Jrj = _r508_t0['set-width']['bind'](_r508_t0);
            r508_xn$assignunicode$7Hrq = function _r508_t2(r509_code) {
                var r509_code, _r509_t0, _r509_t1;
                r508_currentGlyph['assign-unicode'](r509_code);
                return r4_unicodeGlyphs[r508_currentGlyph['unicode'][r508_currentGlyph['unicode']['length'] - 1]] = r508_currentGlyph;
            };
            r508_xn$startfrom$1aao = _r508_t0['start-from']['bind'](_r508_t0);
            r508_xn$lineto$5sIl = _r508_t0['line-to']['bind'](_r508_t0);
            r508_xn$curveto$1aao = _r508_t0['curve-to']['bind'](_r508_t0);
            r508_xn$cubicto$1aao = _r508_t0['cubic-to']['bind'](_r508_t0);
            r508_xn$putshapes$9Jrj = _r508_t0['put-shapes']['bind'](_r508_t0);
            r508_xn$reverselast$3qIs = _r508_t0['reverse-last']['bind'](_r508_t0);
            r508_include = _r508_t0['include']['bind'](_r508_t0);
            r508_xn$createstroke$7Hrq = _r508_t0['create-stroke']['bind'](_r508_t0);
            r508_xn$setanchor$9Jrj = _r508_t0['set-anchor']['bind'](_r508_t0);
            r508_xn$applytransform$1aao = _r508_t0['apply-transform']['bind'](_r508_t0);
            r508_xn$dontexport$5sIl = function _r508_t3() {
                var _r510_t0, _r510_t1;
                return r508_currentGlyph['dontExport'] = true;
            };
            _r508_t0['gizmo'] = r4_globalTransform;
            _r508_t0['set-width'](r4_WIDTH);
            r508_xn$setwidth$9Jrj(r4_WIDTH);
            r508_xn$dontexport$5sIl();
            r508_include(r4_bMarks);
            r508_yTopTurn = r4_CAP * 0.62 + r4_HALFSTROKE;
            r508_yBottomTurn = r4_CAP * 0.41;
            r508_xTopTurn = Math['min'](r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.75), r4_RIGHTSB - r4_STROKE * 0.77);
            r508_xMiddleTurn = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.15) + r4_HALFSTROKE;
            r508_xBottomTurn = r4_RIGHTSB - r4_O - r4_HALFSTROKE;
            r508_xBottomFinal = r0_mix(r4_SB + r4_STROKE, r4_RIGHTSB, 0.4);
            r508_include(r508_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_HALFSTROKE, r4_CAP - r4_SMOOTHA - r4_HALFSTROKE)['arc-vh-to'](r0_mix(r4_SB + r4_HALFSTROKE, r508_xTopTurn, 0.5), r4_CAP - r4_O - r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r508_xTopTurn, r508_yTopTurn + r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r508_xTopTurn, r508_yTopTurn - r4_HALFSTROKE)['heads-to'](r4_DOWNWARD));
            r508_include(r508_xn$createstroke$7Hrq()['start-from'](r508_xTopTurn + r4_HALFSTROKE, r508_yTopTurn)['heads-to'](r4_LEFTWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r508_xMiddleTurn + (r508_yTopTurn - r508_yBottomTurn) / 2, r508_yTopTurn)['arc-hv-to'](r508_xMiddleTurn, r0_mix(r508_yTopTurn, r508_yBottomTurn, 0.5))['arc-vh-to'](r0_mix(r508_xMiddleTurn, r508_xBottomTurn, 0.5), r508_yBottomTurn)['arc-hv-to'](r508_xBottomTurn, r0_mix(r508_yBottomTurn + r4_HALFSTROKE, 0, 0.475))['arc-vh-to'](r508_xBottomFinal, r4_HALFSTROKE)['line-to'](r4_SB + r4_STROKE * 1.25, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['set-samples'](2));
            _r508_t0['italicHookAttachPoint'] = {
                'x': r4_SB + r4_HALFSTROKE,
                'y': 0
            };
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet.italic', function _r4_t168() {
            var r512_currentGlyph, r512_xn$setwidth$9Jrj, r512_xn$assignunicode$7Hrq, r512_xn$startfrom$1aao, r512_xn$lineto$5sIl, r512_xn$curveto$1aao, r512_xn$cubicto$1aao, r512_xn$putshapes$9Jrj, r512_xn$reverselast$3qIs, r512_include, r512_xn$createstroke$7Hrq, r512_xn$setanchor$9Jrj, r512_xn$applytransform$1aao, r512_xn$dontexport$5sIl, _r512_t0, _r512_t1, _r512_t2, _r512_t3;
            _r512_t0 = this;
            r512_currentGlyph = _r512_t0;
            r512_xn$setwidth$9Jrj = _r512_t0['set-width']['bind'](_r512_t0);
            r512_xn$assignunicode$7Hrq = function _r512_t2(r513_code) {
                var r513_code, _r513_t0, _r513_t1;
                r512_currentGlyph['assign-unicode'](r513_code);
                return r4_unicodeGlyphs[r512_currentGlyph['unicode'][r512_currentGlyph['unicode']['length'] - 1]] = r512_currentGlyph;
            };
            r512_xn$startfrom$1aao = _r512_t0['start-from']['bind'](_r512_t0);
            r512_xn$lineto$5sIl = _r512_t0['line-to']['bind'](_r512_t0);
            r512_xn$curveto$1aao = _r512_t0['curve-to']['bind'](_r512_t0);
            r512_xn$cubicto$1aao = _r512_t0['cubic-to']['bind'](_r512_t0);
            r512_xn$putshapes$9Jrj = _r512_t0['put-shapes']['bind'](_r512_t0);
            r512_xn$reverselast$3qIs = _r512_t0['reverse-last']['bind'](_r512_t0);
            r512_include = _r512_t0['include']['bind'](_r512_t0);
            r512_xn$createstroke$7Hrq = _r512_t0['create-stroke']['bind'](_r512_t0);
            r512_xn$setanchor$9Jrj = _r512_t0['set-anchor']['bind'](_r512_t0);
            r512_xn$applytransform$1aao = _r512_t0['apply-transform']['bind'](_r512_t0);
            r512_xn$dontexport$5sIl = function _r512_t3() {
                var _r514_t0, _r514_t1;
                return r512_currentGlyph['dontExport'] = true;
            };
            _r512_t0['gizmo'] = r4_globalTransform;
            _r512_t0['set-width'](r4_WIDTH);
            r512_xn$setwidth$9Jrj(r4_WIDTH);
            r512_xn$dontexport$5sIl();
            r512_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            r512_include(r4_ifMarks);
            r512_include(r4_eshHook(r4_glyphs['eszet.upright']['italicHookAttachPoint']));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eszet', function _r4_t169() {
            var r516_currentGlyph, r516_xn$setwidth$9Jrj, r516_xn$assignunicode$7Hrq, r516_xn$startfrom$1aao, r516_xn$lineto$5sIl, r516_xn$curveto$1aao, r516_xn$cubicto$1aao, r516_xn$putshapes$9Jrj, r516_xn$reverselast$3qIs, r516_include, r516_xn$createstroke$7Hrq, r516_xn$setanchor$9Jrj, r516_xn$applytransform$1aao, r516_xn$dontexport$5sIl, _r516_t0, _r516_t1, _r516_t2, _r516_t3;
            _r516_t0 = this;
            r516_currentGlyph = _r516_t0;
            r516_xn$setwidth$9Jrj = _r516_t0['set-width']['bind'](_r516_t0);
            r516_xn$assignunicode$7Hrq = function _r516_t2(r517_code) {
                var r517_code, _r517_t0, _r517_t1;
                r516_currentGlyph['assign-unicode'](r517_code);
                return r4_unicodeGlyphs[r516_currentGlyph['unicode'][r516_currentGlyph['unicode']['length'] - 1]] = r516_currentGlyph;
            };
            r516_xn$startfrom$1aao = _r516_t0['start-from']['bind'](_r516_t0);
            r516_xn$lineto$5sIl = _r516_t0['line-to']['bind'](_r516_t0);
            r516_xn$curveto$1aao = _r516_t0['curve-to']['bind'](_r516_t0);
            r516_xn$cubicto$1aao = _r516_t0['cubic-to']['bind'](_r516_t0);
            r516_xn$putshapes$9Jrj = _r516_t0['put-shapes']['bind'](_r516_t0);
            r516_xn$reverselast$3qIs = _r516_t0['reverse-last']['bind'](_r516_t0);
            r516_include = _r516_t0['include']['bind'](_r516_t0);
            r516_xn$createstroke$7Hrq = _r516_t0['create-stroke']['bind'](_r516_t0);
            r516_xn$setanchor$9Jrj = _r516_t0['set-anchor']['bind'](_r516_t0);
            r516_xn$applytransform$1aao = _r516_t0['apply-transform']['bind'](_r516_t0);
            r516_xn$dontexport$5sIl = function _r516_t3() {
                var _r518_t0, _r518_t1;
                return r516_currentGlyph['dontExport'] = true;
            };
            _r516_t0['gizmo'] = r4_globalTransform;
            _r516_t0['set-width'](r4_WIDTH);
            r516_xn$setwidth$9Jrj(r4_WIDTH);
            r516_xn$assignunicode$7Hrq(223);
            if (r4_para['italicangle'] > 0) {
                r516_include(r4_glyphs['eszet.italic'], r4_AS_BASE);
            } else {
                r516_include(r4_glyphs['eszet.upright'], r4_AS_BASE);
            }
            return void 0;
        });
        r4_ezhshape = function _r4_t170(r519_top, r519_bot) {
            var r519_top, r519_bot, _r519_t0, _r519_t1, _r519_t2;
            return function _r519_t2() {
                var r521_currentGlyph, r521_xn$setwidth$9Jrj, r521_xn$assignunicode$7Hrq, r521_xn$startfrom$1aao, r521_xn$lineto$5sIl, r521_xn$curveto$1aao, r521_xn$cubicto$1aao, r521_xn$putshapes$9Jrj, r521_xn$reverselast$3qIs, r521_include, r521_xn$createstroke$7Hrq, r521_xn$setanchor$9Jrj, r521_xn$applytransform$1aao, r521_xn$dontexport$5sIl, r521_cor, r521_yMidBar, r521_ezhLeft, r521_ezhRight, _r521_t0, _r521_t1, _r521_t2, _r521_t3;
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
                r521_xn$applytransform$1aao = _r521_t0['apply-transform']['bind'](_r521_t0);
                r521_xn$dontexport$5sIl = function _r521_t3() {
                    var _r523_t0, _r523_t1;
                    return r521_currentGlyph['dontExport'] = true;
                };
                _r521_t0['gizmo'] = r4_globalTransform;
                _r521_t0['set-width'](r4_WIDTH);
                r521_cor = 1.2;
                r521_yMidBar = r0_mix(r519_bot, r519_top, 0.6);
                r521_ezhLeft = r0_mix(r4_SB, r4_RIGHTSB, 0.2);
                r521_ezhRight = r0_mix(r4_SB, r4_RIGHTSB, 0.925);
                r521_include(r521_xn$createstroke$7Hrq()['start-from'](r4_SB, r519_top)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r521_ezhRight, r519_top)['heads-to'](r4_RIGHTWARD)['to-outline']());
                r521_include(r521_xn$createstroke$7Hrq()['start-from'](r521_ezhLeft, r521_yMidBar)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_MIDDLE, r521_yMidBar)['arc-hv-to'](r4_RIGHTSB, r0_mix(r521_yMidBar, r519_bot, 0.5))['to-outline']());
                r521_include(r4_XSHookLower(r519_bot, r4_SB, r0_mix(r4_SB, r4_RIGHTSB, 0.465), r4_RIGHTSB, (r521_yMidBar - r519_bot) / 2, r4_SHOOK));
                r521_xn$startfrom$1aao(r521_ezhLeft, r521_yMidBar);
                r521_xn$lineto$5sIl(r521_ezhLeft + r4_STROKE * r521_cor, r521_yMidBar);
                r521_xn$lineto$5sIl(r521_ezhRight, r519_top - r4_STROKE);
                r521_xn$lineto$5sIl(r521_ezhRight - r4_STROKE * r521_cor, r519_top - r4_STROKE);
                r521_xn$reverselast$3qIs();
                return void 0;
            };
        };
        r4_xn$createglyph$7Hrq('Ezh', function _r4_t171() {
            var r525_currentGlyph, r525_xn$setwidth$9Jrj, r525_xn$assignunicode$7Hrq, r525_xn$startfrom$1aao, r525_xn$lineto$5sIl, r525_xn$curveto$1aao, r525_xn$cubicto$1aao, r525_xn$putshapes$9Jrj, r525_xn$reverselast$3qIs, r525_include, r525_xn$createstroke$7Hrq, r525_xn$setanchor$9Jrj, r525_xn$applytransform$1aao, r525_xn$dontexport$5sIl, _r525_t0, _r525_t1, _r525_t2, _r525_t3;
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
            r525_xn$applytransform$1aao = _r525_t0['apply-transform']['bind'](_r525_t0);
            r525_xn$dontexport$5sIl = function _r525_t3() {
                var _r527_t0, _r527_t1;
                return r525_currentGlyph['dontExport'] = true;
            };
            _r525_t0['gizmo'] = r4_globalTransform;
            _r525_t0['set-width'](r4_WIDTH);
            r525_xn$setwidth$9Jrj(r4_WIDTH);
            r525_xn$assignunicode$7Hrq(439);
            r525_include(r4_capitalMarks);
            r525_include(r4_ezhshape(r4_CAP, 0));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ezh', function _r4_t172() {
            var r529_currentGlyph, r529_xn$setwidth$9Jrj, r529_xn$assignunicode$7Hrq, r529_xn$startfrom$1aao, r529_xn$lineto$5sIl, r529_xn$curveto$1aao, r529_xn$cubicto$1aao, r529_xn$putshapes$9Jrj, r529_xn$reverselast$3qIs, r529_include, r529_xn$createstroke$7Hrq, r529_xn$setanchor$9Jrj, r529_xn$applytransform$1aao, r529_xn$dontexport$5sIl, _r529_t0, _r529_t1, _r529_t2, _r529_t3;
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
            r529_xn$applytransform$1aao = _r529_t0['apply-transform']['bind'](_r529_t0);
            r529_xn$dontexport$5sIl = function _r529_t3() {
                var _r531_t0, _r531_t1;
                return r529_currentGlyph['dontExport'] = true;
            };
            _r529_t0['gizmo'] = r4_globalTransform;
            _r529_t0['set-width'](r4_WIDTH);
            r529_xn$setwidth$9Jrj(r4_WIDTH);
            r529_xn$assignunicode$7Hrq(658);
            r529_include(r4_pMarks);
            r529_include(r4_ezhshape(r4_XH, r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('esh', function _r4_t173() {
            var r533_currentGlyph, r533_xn$setwidth$9Jrj, r533_xn$assignunicode$7Hrq, r533_xn$startfrom$1aao, r533_xn$lineto$5sIl, r533_xn$curveto$1aao, r533_xn$cubicto$1aao, r533_xn$putshapes$9Jrj, r533_xn$reverselast$3qIs, r533_include, r533_xn$createstroke$7Hrq, r533_xn$setanchor$9Jrj, r533_xn$applytransform$1aao, r533_xn$dontexport$5sIl, _r533_t0, _r533_t1, _r533_t2, _r533_t3;
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
            r533_xn$applytransform$1aao = _r533_t0['apply-transform']['bind'](_r533_t0);
            r533_xn$dontexport$5sIl = function _r533_t3() {
                var _r535_t0, _r535_t1;
                return r533_currentGlyph['dontExport'] = true;
            };
            _r533_t0['gizmo'] = r4_globalTransform;
            _r533_t0['set-width'](r4_WIDTH);
            r533_xn$assignunicode$7Hrq(643);
            r533_include(r4_glyphs['longs.italic'], r4_AS_BASE);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.unslashed', function _r4_t174() {
            var r537_currentGlyph, r537_xn$setwidth$9Jrj, r537_xn$assignunicode$7Hrq, r537_xn$startfrom$1aao, r537_xn$lineto$5sIl, r537_xn$curveto$1aao, r537_xn$cubicto$1aao, r537_xn$putshapes$9Jrj, r537_xn$reverselast$3qIs, r537_include, r537_xn$createstroke$7Hrq, r537_xn$setanchor$9Jrj, r537_xn$applytransform$1aao, r537_xn$dontexport$5sIl, _r537_t0, _r537_t1, _r537_t2, _r537_t3;
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
            r537_xn$applytransform$1aao = _r537_t0['apply-transform']['bind'](_r537_t0);
            r537_xn$dontexport$5sIl = function _r537_t3() {
                var _r539_t0, _r539_t1;
                return r537_currentGlyph['dontExport'] = true;
            };
            _r537_t0['gizmo'] = r4_globalTransform;
            _r537_t0['set-width'](r4_WIDTH);
            r537_xn$setwidth$9Jrj(r4_WIDTH);
            r537_xn$dontexport$5sIl();
            r537_include(r4_smallo(r4_CAP, 0, r4_SB, r4_RIGHTSB));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.slashed', function _r4_t175() {
            var r541_currentGlyph, r541_xn$setwidth$9Jrj, r541_xn$assignunicode$7Hrq, r541_xn$startfrom$1aao, r541_xn$lineto$5sIl, r541_xn$curveto$1aao, r541_xn$cubicto$1aao, r541_xn$putshapes$9Jrj, r541_xn$reverselast$3qIs, r541_include, r541_xn$createstroke$7Hrq, r541_xn$setanchor$9Jrj, r541_xn$applytransform$1aao, r541_xn$dontexport$5sIl, r541_fine, _r541_t0, _r541_t1, _r541_t2, _r541_t3;
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
            r541_xn$applytransform$1aao = _r541_t0['apply-transform']['bind'](_r541_t0);
            r541_xn$dontexport$5sIl = function _r541_t3() {
                var _r543_t0, _r543_t1;
                return r541_currentGlyph['dontExport'] = true;
            };
            _r541_t0['gizmo'] = r4_globalTransform;
            _r541_t0['set-width'](r4_WIDTH);
            r541_xn$setwidth$9Jrj(r4_WIDTH);
            r541_xn$dontexport$5sIl();
            r541_include(r4_glyphs['zero.unslashed']);
            r541_fine = r4_adviceBlackness(9);
            r541_include(r541_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_STROKE / 2, r4_CAP * (1 - 0.77))['set-width'](r541_fine, r541_fine)['line-to'](r4_RIGHTSB - r4_STROKE / 2, r4_CAP * 0.77));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('zero.dotted', function _r4_t176() {
            var r545_currentGlyph, r545_xn$setwidth$9Jrj, r545_xn$assignunicode$7Hrq, r545_xn$startfrom$1aao, r545_xn$lineto$5sIl, r545_xn$curveto$1aao, r545_xn$cubicto$1aao, r545_xn$putshapes$9Jrj, r545_xn$reverselast$3qIs, r545_include, r545_xn$createstroke$7Hrq, r545_xn$setanchor$9Jrj, r545_xn$applytransform$1aao, r545_xn$dontexport$5sIl, r545_radius, _r545_t0, _r545_t1, _r545_t2, _r545_t3;
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
            r545_xn$applytransform$1aao = _r545_t0['apply-transform']['bind'](_r545_t0);
            r545_xn$dontexport$5sIl = function _r545_t3() {
                var _r547_t0, _r547_t1;
                return r545_currentGlyph['dontExport'] = true;
            };
            _r545_t0['gizmo'] = r4_globalTransform;
            _r545_t0['set-width'](r4_WIDTH);
            r545_xn$setwidth$9Jrj(r4_WIDTH);
            r545_xn$dontexport$5sIl();
            r545_include(r4_glyphs['zero.unslashed']);
            r545_radius = Math['min'](r4_DOTRADIUS, (r4_RIGHTSB - r4_SB - r4_STROKE * 2) / 4);
            r545_include([r4_Ring(r4_CAPMIDDLE + r545_radius, r4_CAPMIDDLE - r545_radius, r4_MIDDLE + r545_radius, r4_MIDDLE - r545_radius)]);
            return void 0;
        });
        r4_xn$selectvariant$7Hrq('zero', '0', 'slashed');
        r4_xn$createglyph$7Hrq('one', function _r4_t177() {
            var r549_currentGlyph, r549_xn$setwidth$9Jrj, r549_xn$assignunicode$7Hrq, r549_xn$startfrom$1aao, r549_xn$lineto$5sIl, r549_xn$curveto$1aao, r549_xn$cubicto$1aao, r549_xn$putshapes$9Jrj, r549_xn$reverselast$3qIs, r549_include, r549_xn$createstroke$7Hrq, r549_xn$setanchor$9Jrj, r549_xn$applytransform$1aao, r549_xn$dontexport$5sIl, _r549_t0, _r549_t1, _r549_t2, _r549_t3;
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
            r549_xn$applytransform$1aao = _r549_t0['apply-transform']['bind'](_r549_t0);
            r549_xn$dontexport$5sIl = function _r549_t3() {
                var _r551_t0, _r551_t1;
                return r549_currentGlyph['dontExport'] = true;
            };
            _r549_t0['gizmo'] = r4_globalTransform;
            _r549_t0['set-width'](r4_WIDTH);
            r549_xn$setwidth$9Jrj(r4_WIDTH);
            r549_xn$assignunicode$7Hrq('1');
            r549_include(r549_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_JBALANCE * 0.6, 0)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_UPWARD)['line-to'](r4_MIDDLE + r4_JBALANCE * 0.6, r4_CAP)['heads-to'](r4_UPWARD));
            r549_include(r549_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE - r4_HALFSTROKE + r4_JBALANCE * 0.6, r4_CAP)['set-width'](r4_STROKE, 0)['line-to'](r4_MIDDLE - r4_HOOK * 1.5 + r4_JBALANCE * 0.5, r4_CAP - r4_HOOK * 0.75));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('two', function _r4_t178() {
            var r553_currentGlyph, r553_xn$setwidth$9Jrj, r553_xn$assignunicode$7Hrq, r553_xn$startfrom$1aao, r553_xn$lineto$5sIl, r553_xn$curveto$1aao, r553_xn$cubicto$1aao, r553_xn$putshapes$9Jrj, r553_xn$reverselast$3qIs, r553_include, r553_xn$createstroke$7Hrq, r553_xn$setanchor$9Jrj, r553_xn$applytransform$1aao, r553_xn$dontexport$5sIl, _r553_t0, _r553_t1, _r553_t2, _r553_t3;
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
            r553_xn$applytransform$1aao = _r553_t0['apply-transform']['bind'](_r553_t0);
            r553_xn$dontexport$5sIl = function _r553_t3() {
                var _r555_t0, _r555_t1;
                return r553_currentGlyph['dontExport'] = true;
            };
            _r553_t0['gizmo'] = r4_globalTransform;
            _r553_t0['set-width'](r4_WIDTH);
            r553_xn$setwidth$9Jrj(r4_WIDTH);
            r553_xn$assignunicode$7Hrq('2');
            r553_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r553_include(r4_sStrand(r4_STROKE, r4_CAP - r4_SMOOTHB));
            r553_include(r553_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('three', function _r4_t179() {
            var r557_currentGlyph, r557_xn$setwidth$9Jrj, r557_xn$assignunicode$7Hrq, r557_xn$startfrom$1aao, r557_xn$lineto$5sIl, r557_xn$curveto$1aao, r557_xn$cubicto$1aao, r557_xn$putshapes$9Jrj, r557_xn$reverselast$3qIs, r557_include, r557_xn$createstroke$7Hrq, r557_xn$setanchor$9Jrj, r557_xn$applytransform$1aao, r557_xn$dontexport$5sIl, r557_threeRadius, _r557_t0, _r557_t1, _r557_t2, _r557_t3;
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
            r557_xn$applytransform$1aao = _r557_t0['apply-transform']['bind'](_r557_t0);
            r557_xn$dontexport$5sIl = function _r557_t3() {
                var _r559_t0, _r559_t1;
                return r557_currentGlyph['dontExport'] = true;
            };
            _r557_t0['gizmo'] = r4_globalTransform;
            _r557_t0['set-width'](r4_WIDTH);
            r557_xn$setwidth$9Jrj(r4_WIDTH);
            r557_xn$assignunicode$7Hrq('3');
            r557_threeRadius = r4_CAPMIDDLE + r4_HALFSTROKE - r4_SMOOTH;
            r557_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r557_include(r4_sHookLower(0, r4_SMOOTHA, r4_HOOK));
            r557_include(r557_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_CAP - r4_SMOOTHB)['set-width'](0, r4_STROKE)['arc-vh-to'](r4_RIGHTSB - r557_threeRadius, r4_CAPMIDDLE - r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            r557_include(r557_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r4_SMOOTHA)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_RIGHTSB - r557_threeRadius, r4_CAPMIDDLE + r4_HALFSTROKE)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('four', function _r4_t180() {
            var r561_currentGlyph, r561_xn$setwidth$9Jrj, r561_xn$assignunicode$7Hrq, r561_xn$startfrom$1aao, r561_xn$lineto$5sIl, r561_xn$curveto$1aao, r561_xn$cubicto$1aao, r561_xn$putshapes$9Jrj, r561_xn$reverselast$3qIs, r561_include, r561_xn$createstroke$7Hrq, r561_xn$setanchor$9Jrj, r561_xn$applytransform$1aao, r561_xn$dontexport$5sIl, r561_bar, r561_vert, _r561_t0, _r561_t1, _r561_t2, _r561_t3;
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
            r561_xn$applytransform$1aao = _r561_t0['apply-transform']['bind'](_r561_t0);
            r561_xn$dontexport$5sIl = function _r561_t3() {
                var _r563_t0, _r563_t1;
                return r561_currentGlyph['dontExport'] = true;
            };
            _r561_t0['gizmo'] = r4_globalTransform;
            _r561_t0['set-width'](r4_WIDTH);
            r561_xn$setwidth$9Jrj(r4_WIDTH);
            r561_xn$assignunicode$7Hrq('4');
            r561_bar = r4_CAP * 0.4;
            r561_vert = r4_WIDTH * 0.55;
            r561_include(r561_xn$createstroke$7Hrq()['start-from'](r4_SB, r561_bar)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r561_bar)['heads-to'](r4_RIGHTWARD));
            r561_include(r561_xn$createstroke$7Hrq()['start-from'](r561_vert, 0)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r561_vert, r4_CAP)['heads-to'](r4_UPWARD));
            r561_include(r561_xn$createstroke$7Hrq()['start-from'](r4_SB, r561_bar)['set-width'](0, r4_STROKE)['line-to'](r561_vert, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('five', function _r4_t181() {
            var r565_currentGlyph, r565_xn$setwidth$9Jrj, r565_xn$assignunicode$7Hrq, r565_xn$startfrom$1aao, r565_xn$lineto$5sIl, r565_xn$curveto$1aao, r565_xn$cubicto$1aao, r565_xn$putshapes$9Jrj, r565_xn$reverselast$3qIs, r565_include, r565_xn$createstroke$7Hrq, r565_xn$setanchor$9Jrj, r565_xn$applytransform$1aao, r565_xn$dontexport$5sIl, _r565_t0, _r565_t1, _r565_t2, _r565_t3;
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
            r565_xn$applytransform$1aao = _r565_t0['apply-transform']['bind'](_r565_t0);
            r565_xn$dontexport$5sIl = function _r565_t3() {
                var _r567_t0, _r567_t1;
                return r565_currentGlyph['dontExport'] = true;
            };
            _r565_t0['gizmo'] = r4_globalTransform;
            _r565_t0['set-width'](r4_WIDTH);
            r565_xn$setwidth$9Jrj(r4_WIDTH);
            r565_xn$assignunicode$7Hrq('5');
            r565_include(r4_sHookLower(0, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2, r4_HOOK));
            r565_include(r565_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, (r4_CAP * r4_FIVEBARPOS + r4_STROKE) / 2)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE, r4_CAP * r4_FIVEBARPOS + r4_STROKE)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['heads-to'](r4_LEFTWARD));
            r565_include(r565_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_TBALANCE / 2, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r565_include(r565_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP * r4_FIVEBARPOS + r4_STROKE)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r4_SB + r4_TBALANCE * (0.6 - r4_globalTransform['yx'] * 2), r4_CAP)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('six', function _r4_t182() {
            var r569_currentGlyph, r569_xn$setwidth$9Jrj, r569_xn$assignunicode$7Hrq, r569_xn$startfrom$1aao, r569_xn$lineto$5sIl, r569_xn$curveto$1aao, r569_xn$cubicto$1aao, r569_xn$putshapes$9Jrj, r569_xn$reverselast$3qIs, r569_include, r569_xn$createstroke$7Hrq, r569_xn$setanchor$9Jrj, r569_xn$applytransform$1aao, r569_xn$dontexport$5sIl, r569_ymiddlea, _r569_t0, _r569_t1, _r569_t2, _r569_t3;
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
            r569_xn$applytransform$1aao = _r569_t0['apply-transform']['bind'](_r569_t0);
            r569_xn$dontexport$5sIl = function _r569_t3() {
                var _r571_t0, _r571_t1;
                return r569_currentGlyph['dontExport'] = true;
            };
            _r569_t0['gizmo'] = r4_globalTransform;
            _r569_t0['set-width'](r4_WIDTH);
            r569_xn$setwidth$9Jrj(r4_WIDTH);
            r569_xn$assignunicode$7Hrq('6');
            r569_include(r4_smallo(r4_CAP * 0.6, 0, r4_SB, r4_RIGHTSB));
            r569_ymiddlea = (r4_CAP * 0.6 - r4_SMALLSMOOTHA + r4_SMALLSMOOTHB) / 2;
            r569_include(r569_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_O, r569_ymiddlea)['set-width'](0, r4_STROKE)['curve-to'](r4_SB + r4_O, r0_mix(r569_ymiddlea, r4_CAP, 0.8), r4_RIGHTSB - r4_STROKE * 1.1, r4_CAP));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('seven', function _r4_t183() {
            var r573_currentGlyph, r573_xn$setwidth$9Jrj, r573_xn$assignunicode$7Hrq, r573_xn$startfrom$1aao, r573_xn$lineto$5sIl, r573_xn$curveto$1aao, r573_xn$cubicto$1aao, r573_xn$putshapes$9Jrj, r573_xn$reverselast$3qIs, r573_include, r573_xn$createstroke$7Hrq, r573_xn$setanchor$9Jrj, r573_xn$applytransform$1aao, r573_xn$dontexport$5sIl, r573_cor, r573_x, _r573_t0, _r573_t1, _r573_t2, _r573_t3;
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
            r573_xn$applytransform$1aao = _r573_t0['apply-transform']['bind'](_r573_t0);
            r573_xn$dontexport$5sIl = function _r573_t3() {
                var _r575_t0, _r575_t1;
                return r573_currentGlyph['dontExport'] = true;
            };
            _r573_t0['gizmo'] = r4_globalTransform;
            _r573_t0['set-width'](r4_WIDTH);
            r573_xn$setwidth$9Jrj(r4_WIDTH);
            r573_xn$assignunicode$7Hrq('7');
            r573_include(r573_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_RIGHTWARD)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP)['heads-to'](r4_RIGHTWARD));
            r573_cor = 1.15;
            r573_x = r0_mix(r4_SB, r4_RIGHTSB, 0.15);
            r573_xn$startfrom$1aao(r573_x, 0);
            r573_xn$lineto$5sIl(r573_x + r4_STROKE * r573_cor, 0);
            r573_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP - r4_STROKE);
            r573_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r573_cor, r4_CAP - r4_STROKE);
            r573_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('eight', function _r4_t184() {
            var r577_currentGlyph, r577_xn$setwidth$9Jrj, r577_xn$assignunicode$7Hrq, r577_xn$startfrom$1aao, r577_xn$lineto$5sIl, r577_xn$curveto$1aao, r577_xn$cubicto$1aao, r577_xn$putshapes$9Jrj, r577_xn$reverselast$3qIs, r577_include, r577_xn$createstroke$7Hrq, r577_xn$setanchor$9Jrj, r577_xn$applytransform$1aao, r577_xn$dontexport$5sIl, r577_sma, r577_smb, r577_p, _r577_t0, _r577_t1, _r577_t2, _r577_t3;
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
            r577_xn$applytransform$1aao = _r577_t0['apply-transform']['bind'](_r577_t0);
            r577_xn$dontexport$5sIl = function _r577_t3() {
                var _r579_t0, _r579_t1;
                return r577_currentGlyph['dontExport'] = true;
            };
            _r577_t0['gizmo'] = r4_globalTransform;
            _r577_t0['set-width'](r4_WIDTH);
            r577_xn$setwidth$9Jrj(r4_WIDTH);
            r577_xn$assignunicode$7Hrq('8');
            r577_sma = r4_SMOOTHA * 0.975;
            r577_smb = r4_SMOOTHB * 0.975;
            r577_p = 0.96;
            r577_include(r4_xsStrand(r0_mix(r4_RIGHTSB, r4_SB, r577_p), r4_CAP - r577_sma * r577_p, r4_RIGHTSB, r577_sma));
            r577_include(r4_xsStrand(r4_SB, r577_smb, r0_mix(r4_SB, r4_RIGHTSB, r577_p), r4_CAP - r577_smb * r577_p));
            r577_include(r577_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r577_p), r4_CAP - r577_smb * r577_p)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE - r4_STROKE * r4_globalTransform['yx'], r4_CAP - r4_O)['arc-hv-to'](r0_mix(r4_RIGHTSB, r4_SB, r577_p), r4_CAP - r577_sma * r577_p));
            r577_include(r577_xn$createstroke$7Hrq()['start-from'](r4_SB, r577_smb)['set-width'](r4_STROKE, 0)['arc-vh-to'](r4_MIDDLE + r4_STROKE * r4_globalTransform['yx'], r4_O)['arc-hv-to'](r4_RIGHTSB, r577_sma));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('nine', function _r4_t185() {
            var r581_currentGlyph, r581_xn$setwidth$9Jrj, r581_xn$assignunicode$7Hrq, r581_xn$startfrom$1aao, r581_xn$lineto$5sIl, r581_xn$curveto$1aao, r581_xn$cubicto$1aao, r581_xn$putshapes$9Jrj, r581_xn$reverselast$3qIs, r581_include, r581_xn$createstroke$7Hrq, r581_xn$setanchor$9Jrj, r581_xn$applytransform$1aao, r581_xn$dontexport$5sIl, r581_ymiddlea, _r581_t0, _r581_t1, _r581_t2, _r581_t3;
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
            r581_xn$applytransform$1aao = _r581_t0['apply-transform']['bind'](_r581_t0);
            r581_xn$dontexport$5sIl = function _r581_t3() {
                var _r583_t0, _r583_t1;
                return r581_currentGlyph['dontExport'] = true;
            };
            _r581_t0['gizmo'] = r4_globalTransform;
            _r581_t0['set-width'](r4_WIDTH);
            r581_xn$setwidth$9Jrj(r4_WIDTH);
            r581_xn$assignunicode$7Hrq('9');
            r581_include(r4_smallo(r4_CAP, r4_CAP * 0.4, r4_SB, r4_RIGHTSB + r4_O));
            r581_ymiddlea = (r4_CAP - r4_SMALLSMOOTHB + r4_CAP * 0.4 + r4_SMALLSMOOTHA) / 2;
            r581_include(r581_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r581_ymiddlea)['set-width'](0, r4_STROKE)['line-to'](r4_RIGHTSB, r4_CAP * 0.4));
            r581_include(r4_sHookLower(0, r4_CAP * 0.4, r4_HOOK, r4_xgrid(0.48)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('dollar', function _r4_t186() {
            var r585_currentGlyph, r585_xn$setwidth$9Jrj, r585_xn$assignunicode$7Hrq, r585_xn$startfrom$1aao, r585_xn$lineto$5sIl, r585_xn$curveto$1aao, r585_xn$cubicto$1aao, r585_xn$putshapes$9Jrj, r585_xn$reverselast$3qIs, r585_include, r585_xn$createstroke$7Hrq, r585_xn$setanchor$9Jrj, r585_xn$applytransform$1aao, r585_xn$dontexport$5sIl, _r585_t0, _r585_t1, _r585_t2, _r585_t3;
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
            r585_xn$applytransform$1aao = _r585_t0['apply-transform']['bind'](_r585_t0);
            r585_xn$dontexport$5sIl = function _r585_t3() {
                var _r587_t0, _r587_t1;
                return r585_currentGlyph['dontExport'] = true;
            };
            _r585_t0['gizmo'] = r4_globalTransform;
            _r585_t0['set-width'](r4_WIDTH);
            r585_xn$setwidth$9Jrj(r4_WIDTH);
            r585_xn$assignunicode$7Hrq('$');
            r585_include(r4_glyphs['S']);
            r585_include(r585_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_CAP - r4_DESCENDER / 2));
            r585_include(r585_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ampersand', function _r4_t187() {
            var r589_currentGlyph, r589_xn$setwidth$9Jrj, r589_xn$assignunicode$7Hrq, r589_xn$startfrom$1aao, r589_xn$lineto$5sIl, r589_xn$curveto$1aao, r589_xn$cubicto$1aao, r589_xn$putshapes$9Jrj, r589_xn$reverselast$3qIs, r589_include, r589_xn$createstroke$7Hrq, r589_xn$setanchor$9Jrj, r589_xn$applytransform$1aao, r589_xn$dontexport$5sIl, r589_fine, r589_p, r589_l, r589_pr, r589_q, r589_r, r589_s, _r589_t0, _r589_t1, _r589_t2, _r589_t3;
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
            r589_xn$applytransform$1aao = _r589_t0['apply-transform']['bind'](_r589_t0);
            r589_xn$dontexport$5sIl = function _r589_t3() {
                var _r591_t0, _r591_t1;
                return r589_currentGlyph['dontExport'] = true;
            };
            _r589_t0['gizmo'] = r4_globalTransform;
            _r589_t0['set-width'](r4_WIDTH);
            r589_xn$setwidth$9Jrj(r4_WIDTH);
            r589_xn$assignunicode$7Hrq('&');
            r589_fine = r4_adviceBlackness(3.5);
            r589_p = 0.85;
            r589_l = 0.05;
            r589_pr = 0.9;
            r589_q = 0.45;
            r589_r = 1.1;
            r589_s = 0;
            r589_include(r589_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_O, r4_CAPMIDDLE)['set-width'](0, r4_STROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_RIGHTSB - r4_O, r4_SMOOTHA)['arc-vh-to'](r4_MIDDLE, r4_O)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r4_SB + r4_O, r4_SMOOTHB));
            r589_include(r4_xsStrand(r4_SB + r4_O, r4_SMOOTHB, r0_mix(r4_SB, r4_RIGHTSB, r589_p), r4_CAP - r4_SMOOTHB * r589_pr, r4_HALFSTROKE, r589_fine / 2));
            r589_include(r589_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r589_p), r4_CAP - r4_SMOOTHB * r589_pr)['set-width'](r589_fine, 0)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r589_p, r589_l, 0.5)), r4_CAPO)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r0_mix(r4_SB, r4_RIGHTSB, r589_l), r4_CAP - r4_SMOOTHA * r589_pr));
            r589_include(r4_xsStrand(r0_mix(r4_SB, r4_RIGHTSB, r589_l), r4_CAP - r4_SMOOTHA * r589_pr, r0_mix(r4_SB, r4_RIGHTSB, r589_r), r4_SMOOTHA * r589_s, r589_fine / 2, r589_fine / 2, null, null, r4_SMOOTHA * r589_pr * 0.6));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('at', function _r4_t188() {
            var r593_currentGlyph, r593_xn$setwidth$9Jrj, r593_xn$assignunicode$7Hrq, r593_xn$startfrom$1aao, r593_xn$lineto$5sIl, r593_xn$curveto$1aao, r593_xn$cubicto$1aao, r593_xn$putshapes$9Jrj, r593_xn$reverselast$3qIs, r593_include, r593_xn$createstroke$7Hrq, r593_xn$setanchor$9Jrj, r593_xn$applytransform$1aao, r593_xn$dontexport$5sIl, r593_top, r593_bot, r593_otop, r593_obot, r593_sw, r593_m1, r593_m2, r593_sma, r593_smb, _r593_t0, _r593_t1, _r593_t2, _r593_t3;
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
            r593_xn$applytransform$1aao = _r593_t0['apply-transform']['bind'](_r593_t0);
            r593_xn$dontexport$5sIl = function _r593_t3() {
                var _r595_t0, _r595_t1;
                return r593_currentGlyph['dontExport'] = true;
            };
            _r593_t0['gizmo'] = r4_globalTransform;
            _r593_t0['set-width'](r4_WIDTH);
            r593_xn$setwidth$9Jrj(r4_WIDTH);
            r593_xn$assignunicode$7Hrq('@');
            r593_top = r4_CAP + r4_HALFSTROKE;
            r593_bot = r4_DESCENDER + r4_HALFSTROKE;
            r593_otop = r0_mix(r593_bot, r593_top, 0.75);
            r593_obot = r0_mix(r593_top, r593_bot, 0.8);
            r593_sw = r4_adviceBlackness(3.5);
            r593_m1 = r0_mix(r4_SB + r593_sw, r4_RIGHTSB - r593_sw, 0.47) - r593_sw / 2;
            r593_m2 = r0_mix(r593_m1, r4_RIGHTSB, 0.5);
            r593_sma = r4_SMOOTHA * ((r4_RIGHTSB - r593_m1) / (r4_RIGHTSB - r4_SB));
            r593_smb = r4_SMOOTHB * ((r4_RIGHTSB - r593_m1) / (r4_RIGHTSB - r4_SB));
            r593_include(r593_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r593_otop - r4_O)['heads-to'](r4_LEFTWARD)['set-width'](r593_sw, 0)['line-to'](r593_m2, r593_otop - r4_O)['arc-hv-to'](r593_m1, r593_otop - r593_sma)['line-to'](r593_m1, r593_obot + r593_smb)['arc-vh-to'](r593_m2 + r4_STROKE * r4_globalTransform['yx'], r593_obot + r4_O)['arc-hv-to'](r4_RIGHTSB, r593_obot + r593_sma)['line-to'](r4_RIGHTSB, r593_top - r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r593_top - r4_O)['set-width'](r4_STROKE, 0)['arc-hv-to'](r4_SB, r593_top - r4_SMOOTHA)['set-width'](r593_sw, 0)['line-to'](r4_SB, r593_bot + r4_SMOOTHB)['arc-vh-to'](r4_MIDDLE, r593_bot + r4_O)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB - r4_HALFSTROKE, r593_bot + r4_O)['heads-to'](r4_RIGHTWARD)['set-samples'](4));
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
        r4_xn$createglyph$7Hrq('parenleft', function _r4_t189() {
            var r597_currentGlyph, r597_xn$setwidth$9Jrj, r597_xn$assignunicode$7Hrq, r597_xn$startfrom$1aao, r597_xn$lineto$5sIl, r597_xn$curveto$1aao, r597_xn$cubicto$1aao, r597_xn$putshapes$9Jrj, r597_xn$reverselast$3qIs, r597_include, r597_xn$createstroke$7Hrq, r597_xn$setanchor$9Jrj, r597_xn$applytransform$1aao, r597_xn$dontexport$5sIl, r597_p, _r597_t0, _r597_t1, _r597_t2, _r597_t3;
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
            r597_xn$applytransform$1aao = _r597_t0['apply-transform']['bind'](_r597_t0);
            r597_xn$dontexport$5sIl = function _r597_t3() {
                var _r599_t0, _r599_t1;
                return r597_currentGlyph['dontExport'] = true;
            };
            _r597_t0['gizmo'] = r4_globalTransform;
            _r597_t0['set-width'](r4_WIDTH);
            r597_xn$setwidth$9Jrj(r4_WIDTH);
            r597_xn$assignunicode$7Hrq('(');
            r597_p = 0.6;
            r597_include(r597_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenTop)['set-width'](r4_STROKE, 0)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r597_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r597_p), r0_mix(r4_SB, r4_RIGHTSB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t190() {
            var r601_currentGlyph, r601_xn$setwidth$9Jrj, r601_xn$assignunicode$7Hrq, r601_xn$startfrom$1aao, r601_xn$lineto$5sIl, r601_xn$curveto$1aao, r601_xn$cubicto$1aao, r601_xn$putshapes$9Jrj, r601_xn$reverselast$3qIs, r601_include, r601_xn$createstroke$7Hrq, r601_xn$setanchor$9Jrj, r601_xn$applytransform$1aao, r601_xn$dontexport$5sIl, r601_p, _r601_t0, _r601_t1, _r601_t2, _r601_t3;
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
            r601_xn$applytransform$1aao = _r601_t0['apply-transform']['bind'](_r601_t0);
            r601_xn$dontexport$5sIl = function _r601_t3() {
                var _r603_t0, _r603_t1;
                return r601_currentGlyph['dontExport'] = true;
            };
            _r601_t0['gizmo'] = r4_globalTransform;
            _r601_t0['set-width'](r4_WIDTH);
            r601_xn$setwidth$9Jrj(r4_WIDTH);
            r601_xn$assignunicode$7Hrq(')');
            r601_p = 0.6;
            r601_include(r601_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenTop)['set-width'](0, r4_STROKE)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenTop, r601_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r4_parenMid)['curve-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_parenOutside), r0_mix(r4_parenMid, r4_parenBot, r601_p), r0_mix(r4_RIGHTSB, r4_SB, r4_parenInside), r4_parenBot));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bracketleft', function _r4_t191() {
            var r605_currentGlyph, r605_xn$setwidth$9Jrj, r605_xn$assignunicode$7Hrq, r605_xn$startfrom$1aao, r605_xn$lineto$5sIl, r605_xn$curveto$1aao, r605_xn$cubicto$1aao, r605_xn$putshapes$9Jrj, r605_xn$reverselast$3qIs, r605_include, r605_xn$createstroke$7Hrq, r605_xn$setanchor$9Jrj, r605_xn$applytransform$1aao, r605_xn$dontexport$5sIl, _r605_t0, _r605_t1, _r605_t2, _r605_t3;
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
            r605_xn$applytransform$1aao = _r605_t0['apply-transform']['bind'](_r605_t0);
            r605_xn$dontexport$5sIl = function _r605_t3() {
                var _r607_t0, _r607_t1;
                return r605_currentGlyph['dontExport'] = true;
            };
            _r605_t0['gizmo'] = r4_globalTransform;
            _r605_t0['set-width'](r4_WIDTH);
            r605_xn$setwidth$9Jrj(r4_WIDTH);
            r605_xn$assignunicode$7Hrq('[');
            r605_include(r605_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenBot)['heads-to'](r4_RIGHTWARD));
            r605_include(r605_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['set-width'](0, r4_STROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketInside), r4_parenTop)['heads-to'](r4_RIGHTWARD));
            r605_include(r605_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('parenright', function _r4_t192() {
            var r609_currentGlyph, r609_xn$setwidth$9Jrj, r609_xn$assignunicode$7Hrq, r609_xn$startfrom$1aao, r609_xn$lineto$5sIl, r609_xn$curveto$1aao, r609_xn$cubicto$1aao, r609_xn$putshapes$9Jrj, r609_xn$reverselast$3qIs, r609_include, r609_xn$createstroke$7Hrq, r609_xn$setanchor$9Jrj, r609_xn$applytransform$1aao, r609_xn$dontexport$5sIl, _r609_t0, _r609_t1, _r609_t2, _r609_t3;
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
            r609_xn$applytransform$1aao = _r609_t0['apply-transform']['bind'](_r609_t0);
            r609_xn$dontexport$5sIl = function _r609_t3() {
                var _r611_t0, _r611_t1;
                return r609_currentGlyph['dontExport'] = true;
            };
            _r609_t0['gizmo'] = r4_globalTransform;
            _r609_t0['set-width'](r4_WIDTH);
            r609_xn$setwidth$9Jrj(r4_WIDTH);
            r609_xn$assignunicode$7Hrq(']');
            r609_include(r609_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](0, r4_STROKE)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenBot)['heads-to'](r4_LEFTWARD));
            r609_include(r609_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['set-width'](r4_STROKE, 0)['heads-to'](r4_LEFTWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketInside), r4_parenTop)['heads-to'](r4_LEFTWARD));
            r609_include(r609_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenBot)['set-width'](r4_STROKE, 0)['heads-to'](r4_UPWARD)['line-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_bracketOutside), r4_parenTop)['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceleft', function _r4_t193() {
            var r613_currentGlyph, r613_xn$setwidth$9Jrj, r613_xn$assignunicode$7Hrq, r613_xn$startfrom$1aao, r613_xn$lineto$5sIl, r613_xn$curveto$1aao, r613_xn$cubicto$1aao, r613_xn$putshapes$9Jrj, r613_xn$reverselast$3qIs, r613_include, r613_xn$createstroke$7Hrq, r613_xn$setanchor$9Jrj, r613_xn$applytransform$1aao, r613_xn$dontexport$5sIl, r613_parenCenter, r613_radius, _r613_t0, _r613_t1, _r613_t2, _r613_t3;
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
            r613_xn$applytransform$1aao = _r613_t0['apply-transform']['bind'](_r613_t0);
            r613_xn$dontexport$5sIl = function _r613_t3() {
                var _r615_t0, _r615_t1;
                return r613_currentGlyph['dontExport'] = true;
            };
            _r613_t0['gizmo'] = r4_globalTransform;
            _r613_t0['set-width'](r4_WIDTH);
            r613_xn$setwidth$9Jrj(r4_WIDTH);
            r613_xn$assignunicode$7Hrq('{');
            r613_parenCenter = r0_mix(r4_SB, r4_RIGHTSB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r613_radius = r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside) - r613_parenCenter;
            r613_include(r613_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r613_parenCenter, r4_parenTop - r613_radius)['line-to'](r613_parenCenter, r4_parenMid + r613_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            r613_include(r613_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['arc-hv-to'](r613_parenCenter, r4_parenBot + r613_radius)['line-to'](r613_parenCenter, r4_parenMid - r613_radius)['arc-vh-to'](r0_mix(r4_SB, r4_RIGHTSB, r4_braceOutside), r4_parenMid)['heads-to'](r4_LEFTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('braceright', function _r4_t194() {
            var r617_currentGlyph, r617_xn$setwidth$9Jrj, r617_xn$assignunicode$7Hrq, r617_xn$startfrom$1aao, r617_xn$lineto$5sIl, r617_xn$curveto$1aao, r617_xn$cubicto$1aao, r617_xn$putshapes$9Jrj, r617_xn$reverselast$3qIs, r617_include, r617_xn$createstroke$7Hrq, r617_xn$setanchor$9Jrj, r617_xn$applytransform$1aao, r617_xn$dontexport$5sIl, r617_parenCenter, r617_radius, _r617_t0, _r617_t1, _r617_t2, _r617_t3;
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
            r617_xn$applytransform$1aao = _r617_t0['apply-transform']['bind'](_r617_t0);
            r617_xn$dontexport$5sIl = function _r617_t3() {
                var _r619_t0, _r619_t1;
                return r617_currentGlyph['dontExport'] = true;
            };
            _r617_t0['gizmo'] = r4_globalTransform;
            _r617_t0['set-width'](r4_WIDTH);
            r617_xn$setwidth$9Jrj(r4_WIDTH);
            r617_xn$assignunicode$7Hrq('}');
            r617_parenCenter = r0_mix(r4_RIGHTSB, r4_SB, r0_mix(r4_braceInside, r4_braceOutside, 0.5));
            r617_radius = r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside) - r617_parenCenter;
            r617_include(r617_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenTop - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r617_parenCenter, r4_parenTop - r617_radius)['line-to'](r617_parenCenter, r4_parenMid + r617_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            r617_include(r617_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceInside), r4_parenBot + r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['arc-hv-to'](r617_parenCenter, r4_parenBot + r617_radius)['line-to'](r617_parenCenter, r4_parenMid - r617_radius)['arc-vh-to'](r0_mix(r4_RIGHTSB, r4_SB, r4_braceOutside), r4_parenMid)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('period', function _r4_t195() {
            var r621_currentGlyph, r621_xn$setwidth$9Jrj, r621_xn$assignunicode$7Hrq, r621_xn$startfrom$1aao, r621_xn$lineto$5sIl, r621_xn$curveto$1aao, r621_xn$cubicto$1aao, r621_xn$putshapes$9Jrj, r621_xn$reverselast$3qIs, r621_include, r621_xn$createstroke$7Hrq, r621_xn$setanchor$9Jrj, r621_xn$applytransform$1aao, r621_xn$dontexport$5sIl, _r621_t0, _r621_t1, _r621_t2, _r621_t3;
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
            r621_xn$applytransform$1aao = _r621_t0['apply-transform']['bind'](_r621_t0);
            r621_xn$dontexport$5sIl = function _r621_t3() {
                var _r623_t0, _r623_t1;
                return r621_currentGlyph['dontExport'] = true;
            };
            _r621_t0['gizmo'] = r4_globalTransform;
            _r621_t0['set-width'](r4_WIDTH);
            r621_xn$setwidth$9Jrj(r4_WIDTH);
            r621_xn$assignunicode$7Hrq('.');
            r621_include([r4_Ring(r4_PERIODSIZE - r4_O, r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('xhdot', function _r4_t196() {
            var r625_currentGlyph, r625_xn$setwidth$9Jrj, r625_xn$assignunicode$7Hrq, r625_xn$startfrom$1aao, r625_xn$lineto$5sIl, r625_xn$curveto$1aao, r625_xn$cubicto$1aao, r625_xn$putshapes$9Jrj, r625_xn$reverselast$3qIs, r625_include, r625_xn$createstroke$7Hrq, r625_xn$setanchor$9Jrj, r625_xn$applytransform$1aao, r625_xn$dontexport$5sIl, _r625_t0, _r625_t1, _r625_t2, _r625_t3;
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
            r625_xn$applytransform$1aao = _r625_t0['apply-transform']['bind'](_r625_t0);
            r625_xn$dontexport$5sIl = function _r625_t3() {
                var _r627_t0, _r627_t1;
                return r625_currentGlyph['dontExport'] = true;
            };
            _r625_t0['gizmo'] = r4_globalTransform;
            _r625_t0['set-width'](r4_WIDTH);
            r625_xn$setwidth$9Jrj(r4_WIDTH);
            r625_include([r4_Ring(r4_XH - r4_O, r4_XH - r4_PERIODSIZE + r4_O, r4_MIDDLE - r4_PERIODRADIUS + r4_O, r4_MIDDLE + r4_PERIODRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('comma', function _r4_t197() {
            var r629_currentGlyph, r629_xn$setwidth$9Jrj, r629_xn$assignunicode$7Hrq, r629_xn$startfrom$1aao, r629_xn$lineto$5sIl, r629_xn$curveto$1aao, r629_xn$cubicto$1aao, r629_xn$putshapes$9Jrj, r629_xn$reverselast$3qIs, r629_include, r629_xn$createstroke$7Hrq, r629_xn$setanchor$9Jrj, r629_xn$applytransform$1aao, r629_xn$dontexport$5sIl, r629_sw, _r629_t0, _r629_t1, _r629_t2, _r629_t3;
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
            r629_xn$applytransform$1aao = _r629_t0['apply-transform']['bind'](_r629_t0);
            r629_xn$dontexport$5sIl = function _r629_t3() {
                var _r631_t0, _r631_t1;
                return r629_currentGlyph['dontExport'] = true;
            };
            _r629_t0['gizmo'] = r4_globalTransform;
            _r629_t0['set-width'](r4_WIDTH);
            r629_xn$setwidth$9Jrj(r4_WIDTH);
            r629_xn$assignunicode$7Hrq(',');
            r629_include(r4_glyphs['period']);
            r629_sw = r4_PERIODSIZE * 0.5;
            r629_include(r629_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5))['set-width'](0, r629_sw)['curve-to'](r4_MIDDLE + r4_PERIODRADIUS - r4_O, r0_mix(r0_mix(r4_O, r4_PERIODSIZE - r4_O, 0.5), r4_DESCENDER, 0.5), r0_mix(r4_MIDDLE, r4_MIDDLE - r4_PERIODRADIUS, 0.3), r4_DESCENDER));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('colon', function _r4_t198() {
            var r633_currentGlyph, r633_xn$setwidth$9Jrj, r633_xn$assignunicode$7Hrq, r633_xn$startfrom$1aao, r633_xn$lineto$5sIl, r633_xn$curveto$1aao, r633_xn$cubicto$1aao, r633_xn$putshapes$9Jrj, r633_xn$reverselast$3qIs, r633_include, r633_xn$createstroke$7Hrq, r633_xn$setanchor$9Jrj, r633_xn$applytransform$1aao, r633_xn$dontexport$5sIl, _r633_t0, _r633_t1, _r633_t2, _r633_t3;
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
            r633_xn$applytransform$1aao = _r633_t0['apply-transform']['bind'](_r633_t0);
            r633_xn$dontexport$5sIl = function _r633_t3() {
                var _r635_t0, _r635_t1;
                return r633_currentGlyph['dontExport'] = true;
            };
            _r633_t0['gizmo'] = r4_globalTransform;
            _r633_t0['set-width'](r4_WIDTH);
            r633_xn$setwidth$9Jrj(r4_WIDTH);
            r633_xn$assignunicode$7Hrq(':');
            r633_include(r4_glyphs['period']);
            r633_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('semicolon', function _r4_t199() {
            var r637_currentGlyph, r637_xn$setwidth$9Jrj, r637_xn$assignunicode$7Hrq, r637_xn$startfrom$1aao, r637_xn$lineto$5sIl, r637_xn$curveto$1aao, r637_xn$cubicto$1aao, r637_xn$putshapes$9Jrj, r637_xn$reverselast$3qIs, r637_include, r637_xn$createstroke$7Hrq, r637_xn$setanchor$9Jrj, r637_xn$applytransform$1aao, r637_xn$dontexport$5sIl, _r637_t0, _r637_t1, _r637_t2, _r637_t3;
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
            r637_xn$applytransform$1aao = _r637_t0['apply-transform']['bind'](_r637_t0);
            r637_xn$dontexport$5sIl = function _r637_t3() {
                var _r639_t0, _r639_t1;
                return r637_currentGlyph['dontExport'] = true;
            };
            _r637_t0['gizmo'] = r4_globalTransform;
            _r637_t0['set-width'](r4_WIDTH);
            r637_xn$setwidth$9Jrj(r4_WIDTH);
            r637_xn$assignunicode$7Hrq(';');
            r637_include(r4_glyphs['comma']);
            r637_include(r4_glyphs['xhdot']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('question', function _r4_t200() {
            var r641_currentGlyph, r641_xn$setwidth$9Jrj, r641_xn$assignunicode$7Hrq, r641_xn$startfrom$1aao, r641_xn$lineto$5sIl, r641_xn$curveto$1aao, r641_xn$cubicto$1aao, r641_xn$putshapes$9Jrj, r641_xn$reverselast$3qIs, r641_include, r641_xn$createstroke$7Hrq, r641_xn$setanchor$9Jrj, r641_xn$applytransform$1aao, r641_xn$dontexport$5sIl, _r641_t0, _r641_t1, _r641_t2, _r641_t3;
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
            r641_xn$applytransform$1aao = _r641_t0['apply-transform']['bind'](_r641_t0);
            r641_xn$dontexport$5sIl = function _r641_t3() {
                var _r643_t0, _r643_t1;
                return r641_currentGlyph['dontExport'] = true;
            };
            _r641_t0['gizmo'] = r4_globalTransform;
            _r641_t0['set-width'](r4_WIDTH);
            r641_xn$setwidth$9Jrj(r4_WIDTH);
            r641_xn$assignunicode$7Hrq('?');
            r641_include(r4_xsStrand(r4_MIDDLE - r4_HALFSTROKE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5), r4_RIGHTSB, r4_CAP - r4_SMOOTHB));
            r641_include(r4_twoHookUpper(r4_CAP, r4_SMOOTHB, r4_HOOK));
            r641_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('exclam', function _r4_t201() {
            var r645_currentGlyph, r645_xn$setwidth$9Jrj, r645_xn$assignunicode$7Hrq, r645_xn$startfrom$1aao, r645_xn$lineto$5sIl, r645_xn$curveto$1aao, r645_xn$cubicto$1aao, r645_xn$putshapes$9Jrj, r645_xn$reverselast$3qIs, r645_include, r645_xn$createstroke$7Hrq, r645_xn$setanchor$9Jrj, r645_xn$applytransform$1aao, r645_xn$dontexport$5sIl, _r645_t0, _r645_t1, _r645_t2, _r645_t3;
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
            r645_xn$applytransform$1aao = _r645_t0['apply-transform']['bind'](_r645_t0);
            r645_xn$dontexport$5sIl = function _r645_t3() {
                var _r647_t0, _r647_t1;
                return r645_currentGlyph['dontExport'] = true;
            };
            _r645_t0['gizmo'] = r4_globalTransform;
            _r645_t0['set-width'](r4_WIDTH);
            r645_xn$setwidth$9Jrj(r4_WIDTH);
            r645_xn$assignunicode$7Hrq('!');
            r645_include(r645_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_DOWNWARD)['line-to'](r4_MIDDLE, r0_mix(r4_DOTSIZE + r4_STROKE, r4_XH / 2, 0.5))['heads-to'](r4_DOWNWARD));
            r645_include([r4_Ring(r4_DOTSIZE - r4_O, r4_O, r4_MIDDLE - r4_DOTRADIUS + r4_O, r4_MIDDLE + r4_DOTRADIUS - r4_O)]);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('underscore', function _r4_t202() {
            var r649_currentGlyph, r649_xn$setwidth$9Jrj, r649_xn$assignunicode$7Hrq, r649_xn$startfrom$1aao, r649_xn$lineto$5sIl, r649_xn$curveto$1aao, r649_xn$cubicto$1aao, r649_xn$putshapes$9Jrj, r649_xn$reverselast$3qIs, r649_include, r649_xn$createstroke$7Hrq, r649_xn$setanchor$9Jrj, r649_xn$applytransform$1aao, r649_xn$dontexport$5sIl, _r649_t0, _r649_t1, _r649_t2, _r649_t3;
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
            r649_xn$applytransform$1aao = _r649_t0['apply-transform']['bind'](_r649_t0);
            r649_xn$dontexport$5sIl = function _r649_t3() {
                var _r651_t0, _r651_t1;
                return r649_currentGlyph['dontExport'] = true;
            };
            _r649_t0['gizmo'] = r4_globalTransform;
            _r649_t0['set-width'](r4_WIDTH);
            r649_xn$setwidth$9Jrj(r4_WIDTH);
            r649_xn$assignunicode$7Hrq('_');
            r649_include(r649_xn$createstroke$7Hrq()['start-from'](r4_SB, 0)['heads-to'](r4_RIGHTWARD)['set-width'](r4_STROKE, 0)['line-to'](r4_RIGHTSB, 0)['heads-to'](r4_RIGHTWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('hyphen', function _r4_t203() {
            var r653_currentGlyph, r653_xn$setwidth$9Jrj, r653_xn$assignunicode$7Hrq, r653_xn$startfrom$1aao, r653_xn$lineto$5sIl, r653_xn$curveto$1aao, r653_xn$cubicto$1aao, r653_xn$putshapes$9Jrj, r653_xn$reverselast$3qIs, r653_include, r653_xn$createstroke$7Hrq, r653_xn$setanchor$9Jrj, r653_xn$applytransform$1aao, r653_xn$dontexport$5sIl, _r653_t0, _r653_t1, _r653_t2, _r653_t3;
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
            r653_xn$applytransform$1aao = _r653_t0['apply-transform']['bind'](_r653_t0);
            r653_xn$dontexport$5sIl = function _r653_t3() {
                var _r655_t0, _r655_t1;
                return r653_currentGlyph['dontExport'] = true;
            };
            _r653_t0['gizmo'] = r4_globalTransform;
            _r653_t0['set-width'](r4_WIDTH);
            r653_xn$setwidth$9Jrj(r4_WIDTH);
            r653_xn$assignunicode$7Hrq('-');
            r653_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plus', function _r4_t204() {
            var r657_currentGlyph, r657_xn$setwidth$9Jrj, r657_xn$assignunicode$7Hrq, r657_xn$startfrom$1aao, r657_xn$lineto$5sIl, r657_xn$curveto$1aao, r657_xn$cubicto$1aao, r657_xn$putshapes$9Jrj, r657_xn$reverselast$3qIs, r657_include, r657_xn$createstroke$7Hrq, r657_xn$setanchor$9Jrj, r657_xn$applytransform$1aao, r657_xn$dontexport$5sIl, _r657_t0, _r657_t1, _r657_t2, _r657_t3;
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
            r657_xn$applytransform$1aao = _r657_t0['apply-transform']['bind'](_r657_t0);
            r657_xn$dontexport$5sIl = function _r657_t3() {
                var _r659_t0, _r659_t1;
                return r657_currentGlyph['dontExport'] = true;
            };
            _r657_t0['gizmo'] = r4_globalTransform;
            _r657_t0['set-width'](r4_WIDTH);
            r657_xn$setwidth$9Jrj(r4_WIDTH);
            r657_xn$assignunicode$7Hrq('+');
            r657_include(r4_glyphs['hyphen']);
            r657_include(r4_vbar(r4_MIDDLE, r4_hyphenCenter - (r4_RIGHTSB - r4_SB) * 0.55, r4_hyphenCenter + (r4_RIGHTSB - r4_SB) * 0.55));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('equal', function _r4_t205() {
            var r661_currentGlyph, r661_xn$setwidth$9Jrj, r661_xn$assignunicode$7Hrq, r661_xn$startfrom$1aao, r661_xn$lineto$5sIl, r661_xn$curveto$1aao, r661_xn$cubicto$1aao, r661_xn$putshapes$9Jrj, r661_xn$reverselast$3qIs, r661_include, r661_xn$createstroke$7Hrq, r661_xn$setanchor$9Jrj, r661_xn$applytransform$1aao, r661_xn$dontexport$5sIl, _r661_t0, _r661_t1, _r661_t2, _r661_t3;
            _r661_t0 = this;
            r661_currentGlyph = _r661_t0;
            r661_xn$setwidth$9Jrj = _r661_t0['set-width']['bind'](_r661_t0);
            r661_xn$assignunicode$7Hrq = function _r661_t2(r662_code) {
                var r662_code, _r662_t0, _r662_t1;
                r661_currentGlyph['assign-unicode'](r662_code);
                return r4_unicodeGlyphs[r661_currentGlyph['unicode'][r661_currentGlyph['unicode']['length'] - 1]] = r661_currentGlyph;
            };
            r661_xn$startfrom$1aao = _r661_t0['start-from']['bind'](_r661_t0);
            r661_xn$lineto$5sIl = _r661_t0['line-to']['bind'](_r661_t0);
            r661_xn$curveto$1aao = _r661_t0['curve-to']['bind'](_r661_t0);
            r661_xn$cubicto$1aao = _r661_t0['cubic-to']['bind'](_r661_t0);
            r661_xn$putshapes$9Jrj = _r661_t0['put-shapes']['bind'](_r661_t0);
            r661_xn$reverselast$3qIs = _r661_t0['reverse-last']['bind'](_r661_t0);
            r661_include = _r661_t0['include']['bind'](_r661_t0);
            r661_xn$createstroke$7Hrq = _r661_t0['create-stroke']['bind'](_r661_t0);
            r661_xn$setanchor$9Jrj = _r661_t0['set-anchor']['bind'](_r661_t0);
            r661_xn$applytransform$1aao = _r661_t0['apply-transform']['bind'](_r661_t0);
            r661_xn$dontexport$5sIl = function _r661_t3() {
                var _r663_t0, _r663_t1;
                return r661_currentGlyph['dontExport'] = true;
            };
            _r661_t0['gizmo'] = r4_globalTransform;
            _r661_t0['set-width'](r4_WIDTH);
            r661_xn$setwidth$9Jrj(r4_WIDTH);
            r661_xn$assignunicode$7Hrq('=');
            r661_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter - r4_XH * 0.2));
            r661_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_hyphenCenter + r4_XH * 0.2));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('bar', function _r4_t206() {
            var r665_currentGlyph, r665_xn$setwidth$9Jrj, r665_xn$assignunicode$7Hrq, r665_xn$startfrom$1aao, r665_xn$lineto$5sIl, r665_xn$curveto$1aao, r665_xn$cubicto$1aao, r665_xn$putshapes$9Jrj, r665_xn$reverselast$3qIs, r665_include, r665_xn$createstroke$7Hrq, r665_xn$setanchor$9Jrj, r665_xn$applytransform$1aao, r665_xn$dontexport$5sIl, _r665_t0, _r665_t1, _r665_t2, _r665_t3;
            _r665_t0 = this;
            r665_currentGlyph = _r665_t0;
            r665_xn$setwidth$9Jrj = _r665_t0['set-width']['bind'](_r665_t0);
            r665_xn$assignunicode$7Hrq = function _r665_t2(r666_code) {
                var r666_code, _r666_t0, _r666_t1;
                r665_currentGlyph['assign-unicode'](r666_code);
                return r4_unicodeGlyphs[r665_currentGlyph['unicode'][r665_currentGlyph['unicode']['length'] - 1]] = r665_currentGlyph;
            };
            r665_xn$startfrom$1aao = _r665_t0['start-from']['bind'](_r665_t0);
            r665_xn$lineto$5sIl = _r665_t0['line-to']['bind'](_r665_t0);
            r665_xn$curveto$1aao = _r665_t0['curve-to']['bind'](_r665_t0);
            r665_xn$cubicto$1aao = _r665_t0['cubic-to']['bind'](_r665_t0);
            r665_xn$putshapes$9Jrj = _r665_t0['put-shapes']['bind'](_r665_t0);
            r665_xn$reverselast$3qIs = _r665_t0['reverse-last']['bind'](_r665_t0);
            r665_include = _r665_t0['include']['bind'](_r665_t0);
            r665_xn$createstroke$7Hrq = _r665_t0['create-stroke']['bind'](_r665_t0);
            r665_xn$setanchor$9Jrj = _r665_t0['set-anchor']['bind'](_r665_t0);
            r665_xn$applytransform$1aao = _r665_t0['apply-transform']['bind'](_r665_t0);
            r665_xn$dontexport$5sIl = function _r665_t3() {
                var _r667_t0, _r667_t1;
                return r665_currentGlyph['dontExport'] = true;
            };
            _r665_t0['gizmo'] = r4_globalTransform;
            _r665_t0['set-width'](r4_WIDTH);
            r665_xn$setwidth$9Jrj(r4_WIDTH);
            r665_xn$assignunicode$7Hrq('|');
            r665_include(r665_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_parenTop)['heads-to'](r4_DOWNWARD)['set-width'](r4_STROKE / 2, r4_STROKE / 2)['line-to'](r4_MIDDLE, r4_parenBot)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('slash', function _r4_t207() {
            var r669_currentGlyph, r669_xn$setwidth$9Jrj, r669_xn$assignunicode$7Hrq, r669_xn$startfrom$1aao, r669_xn$lineto$5sIl, r669_xn$curveto$1aao, r669_xn$cubicto$1aao, r669_xn$putshapes$9Jrj, r669_xn$reverselast$3qIs, r669_include, r669_xn$createstroke$7Hrq, r669_xn$setanchor$9Jrj, r669_xn$applytransform$1aao, r669_xn$dontexport$5sIl, r669_cor, _r669_t0, _r669_t1, _r669_t2, _r669_t3;
            _r669_t0 = this;
            r669_currentGlyph = _r669_t0;
            r669_xn$setwidth$9Jrj = _r669_t0['set-width']['bind'](_r669_t0);
            r669_xn$assignunicode$7Hrq = function _r669_t2(r670_code) {
                var r670_code, _r670_t0, _r670_t1;
                r669_currentGlyph['assign-unicode'](r670_code);
                return r4_unicodeGlyphs[r669_currentGlyph['unicode'][r669_currentGlyph['unicode']['length'] - 1]] = r669_currentGlyph;
            };
            r669_xn$startfrom$1aao = _r669_t0['start-from']['bind'](_r669_t0);
            r669_xn$lineto$5sIl = _r669_t0['line-to']['bind'](_r669_t0);
            r669_xn$curveto$1aao = _r669_t0['curve-to']['bind'](_r669_t0);
            r669_xn$cubicto$1aao = _r669_t0['cubic-to']['bind'](_r669_t0);
            r669_xn$putshapes$9Jrj = _r669_t0['put-shapes']['bind'](_r669_t0);
            r669_xn$reverselast$3qIs = _r669_t0['reverse-last']['bind'](_r669_t0);
            r669_include = _r669_t0['include']['bind'](_r669_t0);
            r669_xn$createstroke$7Hrq = _r669_t0['create-stroke']['bind'](_r669_t0);
            r669_xn$setanchor$9Jrj = _r669_t0['set-anchor']['bind'](_r669_t0);
            r669_xn$applytransform$1aao = _r669_t0['apply-transform']['bind'](_r669_t0);
            r669_xn$dontexport$5sIl = function _r669_t3() {
                var _r671_t0, _r671_t1;
                return r669_currentGlyph['dontExport'] = true;
            };
            _r669_t0['gizmo'] = r4_globalTransform;
            _r669_t0['set-width'](r4_WIDTH);
            r669_xn$setwidth$9Jrj(r4_WIDTH);
            r669_xn$assignunicode$7Hrq('/');
            r669_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r669_xn$startfrom$1aao(r4_SB, r4_parenBot);
            r669_xn$lineto$5sIl(r4_SB + r4_STROKE * r669_cor, r4_parenBot);
            r669_xn$lineto$5sIl(r4_RIGHTSB, r4_parenTop);
            r669_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r669_cor, r4_parenTop);
            r669_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('backslash', function _r4_t208() {
            var r673_currentGlyph, r673_xn$setwidth$9Jrj, r673_xn$assignunicode$7Hrq, r673_xn$startfrom$1aao, r673_xn$lineto$5sIl, r673_xn$curveto$1aao, r673_xn$cubicto$1aao, r673_xn$putshapes$9Jrj, r673_xn$reverselast$3qIs, r673_include, r673_xn$createstroke$7Hrq, r673_xn$setanchor$9Jrj, r673_xn$applytransform$1aao, r673_xn$dontexport$5sIl, r673_cor, _r673_t0, _r673_t1, _r673_t2, _r673_t3;
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
            r673_xn$applytransform$1aao = _r673_t0['apply-transform']['bind'](_r673_t0);
            r673_xn$dontexport$5sIl = function _r673_t3() {
                var _r675_t0, _r675_t1;
                return r673_currentGlyph['dontExport'] = true;
            };
            _r673_t0['gizmo'] = r4_globalTransform;
            _r673_t0['set-width'](r4_WIDTH);
            r673_xn$setwidth$9Jrj(r4_WIDTH);
            r673_xn$assignunicode$7Hrq('\\');
            r673_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_parenTop - r4_parenBot), 2));
            r673_xn$startfrom$1aao(r4_RIGHTSB, r4_parenBot);
            r673_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r673_cor, r4_parenBot);
            r673_xn$lineto$5sIl(r4_SB, r4_parenTop);
            r673_xn$lineto$5sIl(r4_SB + r4_STROKE * r673_cor, r4_parenTop);
            r673_xn$reverselast$3qIs();
            return void 0;
        });
        r4_xn$createglyph$7Hrq('numbersign', function _r4_t209() {
            var r677_currentGlyph, r677_xn$setwidth$9Jrj, r677_xn$assignunicode$7Hrq, r677_xn$startfrom$1aao, r677_xn$lineto$5sIl, r677_xn$curveto$1aao, r677_xn$cubicto$1aao, r677_xn$putshapes$9Jrj, r677_xn$reverselast$3qIs, r677_include, r677_xn$createstroke$7Hrq, r677_xn$setanchor$9Jrj, r677_xn$applytransform$1aao, r677_xn$dontexport$5sIl, r677_fine, _r677_t0, _r677_t1, _r677_t2, _r677_t3;
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
            r677_xn$applytransform$1aao = _r677_t0['apply-transform']['bind'](_r677_t0);
            r677_xn$dontexport$5sIl = function _r677_t3() {
                var _r679_t0, _r679_t1;
                return r677_currentGlyph['dontExport'] = true;
            };
            _r677_t0['gizmo'] = r4_globalTransform;
            _r677_t0['set-width'](r4_WIDTH);
            r677_xn$setwidth$9Jrj(r4_WIDTH);
            r677_xn$assignunicode$7Hrq('#');
            r677_fine = r4_adviceBlackness(4);
            r677_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.33)));
            r677_include(r4_hbar(r4_SB, r4_RIGHTSB, r0_mix(r4_parenTop, r4_parenBot, 0.67)));
            r677_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.3), r4_parenBot + r677_fine, r4_parenTop - r677_fine, r677_fine));
            r677_include(r4_vbar(r0_mix(r4_SB, r4_RIGHTSB, 0.7), r4_parenBot + r677_fine, r4_parenTop - r677_fine, r677_fine));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('less', function _r4_t210() {
            var r681_currentGlyph, r681_xn$setwidth$9Jrj, r681_xn$assignunicode$7Hrq, r681_xn$startfrom$1aao, r681_xn$lineto$5sIl, r681_xn$curveto$1aao, r681_xn$cubicto$1aao, r681_xn$putshapes$9Jrj, r681_xn$reverselast$3qIs, r681_include, r681_xn$createstroke$7Hrq, r681_xn$setanchor$9Jrj, r681_xn$applytransform$1aao, r681_xn$dontexport$5sIl, r681_top, r681_bot, _r681_t0, _r681_t1, _r681_t2, _r681_t3;
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
            r681_xn$applytransform$1aao = _r681_t0['apply-transform']['bind'](_r681_t0);
            r681_xn$dontexport$5sIl = function _r681_t3() {
                var _r683_t0, _r683_t1;
                return r681_currentGlyph['dontExport'] = true;
            };
            _r681_t0['gizmo'] = r4_globalTransform;
            _r681_t0['set-width'](r4_WIDTH);
            r681_xn$setwidth$9Jrj(r4_WIDTH);
            r681_xn$assignunicode$7Hrq('<');
            r681_top = r0_mix(0, r4_CAP, 0.75);
            r681_bot = r0_mix(0, r4_CAP, 0.1);
            r681_include(r681_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r681_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_SB, r0_mix(r681_top, r681_bot, 0.5))['heads-to'](r4_LEFTWARD)['set-samples'](1));
            r681_include(r681_xn$createstroke$7Hrq()['start-from'](r4_SB, r0_mix(r681_top, r681_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r681_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('greater', function _r4_t211() {
            var r685_currentGlyph, r685_xn$setwidth$9Jrj, r685_xn$assignunicode$7Hrq, r685_xn$startfrom$1aao, r685_xn$lineto$5sIl, r685_xn$curveto$1aao, r685_xn$cubicto$1aao, r685_xn$putshapes$9Jrj, r685_xn$reverselast$3qIs, r685_include, r685_xn$createstroke$7Hrq, r685_xn$setanchor$9Jrj, r685_xn$applytransform$1aao, r685_xn$dontexport$5sIl, r685_top, r685_bot, _r685_t0, _r685_t1, _r685_t2, _r685_t3;
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
            r685_xn$applytransform$1aao = _r685_t0['apply-transform']['bind'](_r685_t0);
            r685_xn$dontexport$5sIl = function _r685_t3() {
                var _r687_t0, _r687_t1;
                return r685_currentGlyph['dontExport'] = true;
            };
            _r685_t0['gizmo'] = r4_globalTransform;
            _r685_t0['set-width'](r4_WIDTH);
            r685_xn$setwidth$9Jrj(r4_WIDTH);
            r685_xn$assignunicode$7Hrq('>');
            r685_top = r0_mix(0, r4_CAP, 0.75);
            r685_bot = r0_mix(0, r4_CAP, 0.1);
            r685_include(r685_xn$createstroke$7Hrq()['start-from'](r4_SB, r685_top)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_RIGHTSB, r0_mix(r685_top, r685_bot, 0.5))['heads-to'](r4_RIGHTWARD)['set-samples'](1));
            r685_include(r685_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, r0_mix(r685_top, r685_bot, 0.5))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['heads-to'](r4_LEFTWARD)['line-to'](r4_SB, r685_bot)['set-samples'](1));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotesingle', function _r4_t212() {
            var r689_currentGlyph, r689_xn$setwidth$9Jrj, r689_xn$assignunicode$7Hrq, r689_xn$startfrom$1aao, r689_xn$lineto$5sIl, r689_xn$curveto$1aao, r689_xn$cubicto$1aao, r689_xn$putshapes$9Jrj, r689_xn$reverselast$3qIs, r689_include, r689_xn$createstroke$7Hrq, r689_xn$setanchor$9Jrj, r689_xn$applytransform$1aao, r689_xn$dontexport$5sIl, _r689_t0, _r689_t1, _r689_t2, _r689_t3;
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
            r689_xn$applytransform$1aao = _r689_t0['apply-transform']['bind'](_r689_t0);
            r689_xn$dontexport$5sIl = function _r689_t3() {
                var _r691_t0, _r691_t1;
                return r689_currentGlyph['dontExport'] = true;
            };
            _r689_t0['gizmo'] = r4_globalTransform;
            _r689_t0['set-width'](r4_WIDTH);
            r689_xn$setwidth$9Jrj(r4_WIDTH);
            r689_xn$assignunicode$7Hrq(39);
            r689_include(r689_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('quotedouble', function _r4_t213() {
            var r693_currentGlyph, r693_xn$setwidth$9Jrj, r693_xn$assignunicode$7Hrq, r693_xn$startfrom$1aao, r693_xn$lineto$5sIl, r693_xn$curveto$1aao, r693_xn$cubicto$1aao, r693_xn$putshapes$9Jrj, r693_xn$reverselast$3qIs, r693_include, r693_xn$createstroke$7Hrq, r693_xn$setanchor$9Jrj, r693_xn$applytransform$1aao, r693_xn$dontexport$5sIl, _r693_t0, _r693_t1, _r693_t2, _r693_t3;
            _r693_t0 = this;
            r693_currentGlyph = _r693_t0;
            r693_xn$setwidth$9Jrj = _r693_t0['set-width']['bind'](_r693_t0);
            r693_xn$assignunicode$7Hrq = function _r693_t2(r694_code) {
                var r694_code, _r694_t0, _r694_t1;
                r693_currentGlyph['assign-unicode'](r694_code);
                return r4_unicodeGlyphs[r693_currentGlyph['unicode'][r693_currentGlyph['unicode']['length'] - 1]] = r693_currentGlyph;
            };
            r693_xn$startfrom$1aao = _r693_t0['start-from']['bind'](_r693_t0);
            r693_xn$lineto$5sIl = _r693_t0['line-to']['bind'](_r693_t0);
            r693_xn$curveto$1aao = _r693_t0['curve-to']['bind'](_r693_t0);
            r693_xn$cubicto$1aao = _r693_t0['cubic-to']['bind'](_r693_t0);
            r693_xn$putshapes$9Jrj = _r693_t0['put-shapes']['bind'](_r693_t0);
            r693_xn$reverselast$3qIs = _r693_t0['reverse-last']['bind'](_r693_t0);
            r693_include = _r693_t0['include']['bind'](_r693_t0);
            r693_xn$createstroke$7Hrq = _r693_t0['create-stroke']['bind'](_r693_t0);
            r693_xn$setanchor$9Jrj = _r693_t0['set-anchor']['bind'](_r693_t0);
            r693_xn$applytransform$1aao = _r693_t0['apply-transform']['bind'](_r693_t0);
            r693_xn$dontexport$5sIl = function _r693_t3() {
                var _r695_t0, _r695_t1;
                return r693_currentGlyph['dontExport'] = true;
            };
            _r693_t0['gizmo'] = r4_globalTransform;
            _r693_t0['set-width'](r4_WIDTH);
            r693_xn$setwidth$9Jrj(r4_WIDTH);
            r693_xn$assignunicode$7Hrq(34);
            r693_include(r693_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.25), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            r693_include(r693_xn$createstroke$7Hrq()['start-from'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r0_mix(r4_SB, r4_RIGHTSB, 0.75), r4_XH - r4_HALFSTROKE)['set-width'](r4_STROKE * 0.4, r4_STROKE * 0.4)['heads-to'](r4_DOWNWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asterisk', function _r4_t214() {
            var r697_currentGlyph, r697_xn$setwidth$9Jrj, r697_xn$assignunicode$7Hrq, r697_xn$startfrom$1aao, r697_xn$lineto$5sIl, r697_xn$curveto$1aao, r697_xn$cubicto$1aao, r697_xn$putshapes$9Jrj, r697_xn$reverselast$3qIs, r697_include, r697_xn$createstroke$7Hrq, r697_xn$setanchor$9Jrj, r697_xn$applytransform$1aao, r697_xn$dontexport$5sIl, r697_radius, r697_centery, r697_fine, r697_final, r697_j, _r697_t0, _r697_t1, _r697_t2, _r697_t3, _r697_t4, _r697_t5;
            _r697_t2 = this;
            r697_currentGlyph = _r697_t2;
            r697_xn$setwidth$9Jrj = _r697_t2['set-width']['bind'](_r697_t2);
            r697_xn$assignunicode$7Hrq = function _r697_t4(r698_code) {
                var r698_code, _r698_t0, _r698_t1;
                r697_currentGlyph['assign-unicode'](r698_code);
                return r4_unicodeGlyphs[r697_currentGlyph['unicode'][r697_currentGlyph['unicode']['length'] - 1]] = r697_currentGlyph;
            };
            r697_xn$startfrom$1aao = _r697_t2['start-from']['bind'](_r697_t2);
            r697_xn$lineto$5sIl = _r697_t2['line-to']['bind'](_r697_t2);
            r697_xn$curveto$1aao = _r697_t2['curve-to']['bind'](_r697_t2);
            r697_xn$cubicto$1aao = _r697_t2['cubic-to']['bind'](_r697_t2);
            r697_xn$putshapes$9Jrj = _r697_t2['put-shapes']['bind'](_r697_t2);
            r697_xn$reverselast$3qIs = _r697_t2['reverse-last']['bind'](_r697_t2);
            r697_include = _r697_t2['include']['bind'](_r697_t2);
            r697_xn$createstroke$7Hrq = _r697_t2['create-stroke']['bind'](_r697_t2);
            r697_xn$setanchor$9Jrj = _r697_t2['set-anchor']['bind'](_r697_t2);
            r697_xn$applytransform$1aao = _r697_t2['apply-transform']['bind'](_r697_t2);
            r697_xn$dontexport$5sIl = function _r697_t5() {
                var _r699_t0, _r699_t1;
                return r697_currentGlyph['dontExport'] = true;
            };
            _r697_t2['gizmo'] = r4_globalTransform;
            _r697_t2['set-width'](r4_WIDTH);
            r697_xn$setwidth$9Jrj(r4_WIDTH);
            r697_xn$assignunicode$7Hrq('*');
            r697_radius = r4_LONGJUT * 1.2;
            r697_centery = r4_parenTop - r4_LONGJUT * 1.5;
            r697_fine = r4_STROKE * 0.4;
            r697_final = 0.5 * Math['min'](r4_STROKE, r697_radius * Math['PI'] * 2 / 10);
            _r697_t0 = 0;
            _r697_t1 = 5;
            r697_j = _r697_t0;
            for (; r697_j < _r697_t1; r697_j = r697_j + 1) {
                r697_include(r697_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r697_centery)['set-width'](r697_fine, r697_fine)['line-to'](r4_MIDDLE + r697_radius * Math['sin'](r697_j / 5 * Math['PI'] * 2), r697_centery + r697_radius * Math['cos'](r697_j / 5 * Math['PI'] * 2))['set-width'](r697_final, r697_final)['set-samples'](1));
            }
            return void 0;
        });
        r4_xn$createglyph$7Hrq('percent', function _r4_t215() {
            var r702_currentGlyph, r702_xn$setwidth$9Jrj, r702_xn$assignunicode$7Hrq, r702_xn$startfrom$1aao, r702_xn$lineto$5sIl, r702_xn$curveto$1aao, r702_xn$cubicto$1aao, r702_xn$putshapes$9Jrj, r702_xn$reverselast$3qIs, r702_include, r702_xn$createstroke$7Hrq, r702_xn$setanchor$9Jrj, r702_xn$applytransform$1aao, r702_xn$dontexport$5sIl, r702_percentDotSize, r702_cor, _r702_t0, _r702_t1, _r702_t2, _r702_t3;
            _r702_t0 = this;
            r702_currentGlyph = _r702_t0;
            r702_xn$setwidth$9Jrj = _r702_t0['set-width']['bind'](_r702_t0);
            r702_xn$assignunicode$7Hrq = function _r702_t2(r703_code) {
                var r703_code, _r703_t0, _r703_t1;
                r702_currentGlyph['assign-unicode'](r703_code);
                return r4_unicodeGlyphs[r702_currentGlyph['unicode'][r702_currentGlyph['unicode']['length'] - 1]] = r702_currentGlyph;
            };
            r702_xn$startfrom$1aao = _r702_t0['start-from']['bind'](_r702_t0);
            r702_xn$lineto$5sIl = _r702_t0['line-to']['bind'](_r702_t0);
            r702_xn$curveto$1aao = _r702_t0['curve-to']['bind'](_r702_t0);
            r702_xn$cubicto$1aao = _r702_t0['cubic-to']['bind'](_r702_t0);
            r702_xn$putshapes$9Jrj = _r702_t0['put-shapes']['bind'](_r702_t0);
            r702_xn$reverselast$3qIs = _r702_t0['reverse-last']['bind'](_r702_t0);
            r702_include = _r702_t0['include']['bind'](_r702_t0);
            r702_xn$createstroke$7Hrq = _r702_t0['create-stroke']['bind'](_r702_t0);
            r702_xn$setanchor$9Jrj = _r702_t0['set-anchor']['bind'](_r702_t0);
            r702_xn$applytransform$1aao = _r702_t0['apply-transform']['bind'](_r702_t0);
            r702_xn$dontexport$5sIl = function _r702_t3() {
                var _r704_t0, _r704_t1;
                return r702_currentGlyph['dontExport'] = true;
            };
            _r702_t0['gizmo'] = r4_globalTransform;
            _r702_t0['set-width'](r4_WIDTH);
            r702_xn$setwidth$9Jrj(r4_WIDTH);
            r702_xn$assignunicode$7Hrq('%');
            r702_percentDotSize = 0.3;
            r702_cor = 1 / Math['sqrt'](1 - Math['pow']((r4_RIGHTSB - r4_SB - r4_STROKE) / (r4_CAP - 0), 2));
            r702_xn$startfrom$1aao(r4_SB, 0);
            r702_xn$lineto$5sIl(r4_SB + r4_STROKE * r702_cor, 0);
            r702_xn$lineto$5sIl(r4_RIGHTSB, r4_CAP);
            r702_xn$lineto$5sIl(r4_RIGHTSB - r4_STROKE * r702_cor, r4_CAP);
            r702_include(r702_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_CAP)['heads-to'](r4_DOWNWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_SB, r0_mix(r4_CAP, 0, 0.3))['heads-to'](r4_DOWNWARD));
            r702_include(r702_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB, 0)['heads-to'](r4_UPWARD)['set-width'](r4_adviceBlackness(4) * 1.5, 0)['line-to'](r4_RIGHTSB, r0_mix(0, r4_CAP, 0.3))['heads-to'](r4_UPWARD));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('cent', function _r4_t216() {
            var r706_currentGlyph, r706_xn$setwidth$9Jrj, r706_xn$assignunicode$7Hrq, r706_xn$startfrom$1aao, r706_xn$lineto$5sIl, r706_xn$curveto$1aao, r706_xn$cubicto$1aao, r706_xn$putshapes$9Jrj, r706_xn$reverselast$3qIs, r706_include, r706_xn$createstroke$7Hrq, r706_xn$setanchor$9Jrj, r706_xn$applytransform$1aao, r706_xn$dontexport$5sIl, _r706_t0, _r706_t1, _r706_t2, _r706_t3;
            _r706_t0 = this;
            r706_currentGlyph = _r706_t0;
            r706_xn$setwidth$9Jrj = _r706_t0['set-width']['bind'](_r706_t0);
            r706_xn$assignunicode$7Hrq = function _r706_t2(r707_code) {
                var r707_code, _r707_t0, _r707_t1;
                r706_currentGlyph['assign-unicode'](r707_code);
                return r4_unicodeGlyphs[r706_currentGlyph['unicode'][r706_currentGlyph['unicode']['length'] - 1]] = r706_currentGlyph;
            };
            r706_xn$startfrom$1aao = _r706_t0['start-from']['bind'](_r706_t0);
            r706_xn$lineto$5sIl = _r706_t0['line-to']['bind'](_r706_t0);
            r706_xn$curveto$1aao = _r706_t0['curve-to']['bind'](_r706_t0);
            r706_xn$cubicto$1aao = _r706_t0['cubic-to']['bind'](_r706_t0);
            r706_xn$putshapes$9Jrj = _r706_t0['put-shapes']['bind'](_r706_t0);
            r706_xn$reverselast$3qIs = _r706_t0['reverse-last']['bind'](_r706_t0);
            r706_include = _r706_t0['include']['bind'](_r706_t0);
            r706_xn$createstroke$7Hrq = _r706_t0['create-stroke']['bind'](_r706_t0);
            r706_xn$setanchor$9Jrj = _r706_t0['set-anchor']['bind'](_r706_t0);
            r706_xn$applytransform$1aao = _r706_t0['apply-transform']['bind'](_r706_t0);
            r706_xn$dontexport$5sIl = function _r706_t3() {
                var _r708_t0, _r708_t1;
                return r706_currentGlyph['dontExport'] = true;
            };
            _r706_t0['gizmo'] = r4_globalTransform;
            _r706_t0['set-width'](r4_WIDTH);
            r706_xn$assignunicode$7Hrq(162);
            r706_include(r4_glyphs['c'], r4_AS_BASE);
            r706_include(r706_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_XH - r4_HALFSTROKE)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_XH - r4_DESCENDER / 2));
            r706_include(r706_xn$createstroke$7Hrq()['start-from'](r4_MIDDLE, r4_DESCENDER / 2)['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['line-to'](r4_MIDDLE, r4_HALFSTROKE));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('yen', function _r4_t217() {
            var r710_currentGlyph, r710_xn$setwidth$9Jrj, r710_xn$assignunicode$7Hrq, r710_xn$startfrom$1aao, r710_xn$lineto$5sIl, r710_xn$curveto$1aao, r710_xn$cubicto$1aao, r710_xn$putshapes$9Jrj, r710_xn$reverselast$3qIs, r710_include, r710_xn$createstroke$7Hrq, r710_xn$setanchor$9Jrj, r710_xn$applytransform$1aao, r710_xn$dontexport$5sIl, _r710_t0, _r710_t1, _r710_t2, _r710_t3;
            _r710_t0 = this;
            r710_currentGlyph = _r710_t0;
            r710_xn$setwidth$9Jrj = _r710_t0['set-width']['bind'](_r710_t0);
            r710_xn$assignunicode$7Hrq = function _r710_t2(r711_code) {
                var r711_code, _r711_t0, _r711_t1;
                r710_currentGlyph['assign-unicode'](r711_code);
                return r4_unicodeGlyphs[r710_currentGlyph['unicode'][r710_currentGlyph['unicode']['length'] - 1]] = r710_currentGlyph;
            };
            r710_xn$startfrom$1aao = _r710_t0['start-from']['bind'](_r710_t0);
            r710_xn$lineto$5sIl = _r710_t0['line-to']['bind'](_r710_t0);
            r710_xn$curveto$1aao = _r710_t0['curve-to']['bind'](_r710_t0);
            r710_xn$cubicto$1aao = _r710_t0['cubic-to']['bind'](_r710_t0);
            r710_xn$putshapes$9Jrj = _r710_t0['put-shapes']['bind'](_r710_t0);
            r710_xn$reverselast$3qIs = _r710_t0['reverse-last']['bind'](_r710_t0);
            r710_include = _r710_t0['include']['bind'](_r710_t0);
            r710_xn$createstroke$7Hrq = _r710_t0['create-stroke']['bind'](_r710_t0);
            r710_xn$setanchor$9Jrj = _r710_t0['set-anchor']['bind'](_r710_t0);
            r710_xn$applytransform$1aao = _r710_t0['apply-transform']['bind'](_r710_t0);
            r710_xn$dontexport$5sIl = function _r710_t3() {
                var _r712_t0, _r712_t1;
                return r710_currentGlyph['dontExport'] = true;
            };
            _r710_t0['gizmo'] = r4_globalTransform;
            _r710_t0['set-width'](r4_WIDTH);
            r710_xn$assignunicode$7Hrq(165);
            r710_include(r4_glyphs['Y'], r4_AS_BASE);
            r710_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.45));
            r710_include(r4_hbar(r4_SB, r4_RIGHTSB, r4_CAP * 0.25));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('section', function _r4_t218() {
            var r714_currentGlyph, r714_xn$setwidth$9Jrj, r714_xn$assignunicode$7Hrq, r714_xn$startfrom$1aao, r714_xn$lineto$5sIl, r714_xn$curveto$1aao, r714_xn$cubicto$1aao, r714_xn$putshapes$9Jrj, r714_xn$reverselast$3qIs, r714_include, r714_xn$createstroke$7Hrq, r714_xn$setanchor$9Jrj, r714_xn$applytransform$1aao, r714_xn$dontexport$5sIl, r714_top, r714_bot, r714_sma, r714_extension1, r714_extension2, r714_extension3x, r714_extension3y, _r714_t0, _r714_t1, _r714_t2, _r714_t3;
            _r714_t0 = this;
            r714_currentGlyph = _r714_t0;
            r714_xn$setwidth$9Jrj = _r714_t0['set-width']['bind'](_r714_t0);
            r714_xn$assignunicode$7Hrq = function _r714_t2(r715_code) {
                var r715_code, _r715_t0, _r715_t1;
                r714_currentGlyph['assign-unicode'](r715_code);
                return r4_unicodeGlyphs[r714_currentGlyph['unicode'][r714_currentGlyph['unicode']['length'] - 1]] = r714_currentGlyph;
            };
            r714_xn$startfrom$1aao = _r714_t0['start-from']['bind'](_r714_t0);
            r714_xn$lineto$5sIl = _r714_t0['line-to']['bind'](_r714_t0);
            r714_xn$curveto$1aao = _r714_t0['curve-to']['bind'](_r714_t0);
            r714_xn$cubicto$1aao = _r714_t0['cubic-to']['bind'](_r714_t0);
            r714_xn$putshapes$9Jrj = _r714_t0['put-shapes']['bind'](_r714_t0);
            r714_xn$reverselast$3qIs = _r714_t0['reverse-last']['bind'](_r714_t0);
            r714_include = _r714_t0['include']['bind'](_r714_t0);
            r714_xn$createstroke$7Hrq = _r714_t0['create-stroke']['bind'](_r714_t0);
            r714_xn$setanchor$9Jrj = _r714_t0['set-anchor']['bind'](_r714_t0);
            r714_xn$applytransform$1aao = _r714_t0['apply-transform']['bind'](_r714_t0);
            r714_xn$dontexport$5sIl = function _r714_t3() {
                var _r716_t0, _r716_t1;
                return r714_currentGlyph['dontExport'] = true;
            };
            _r714_t0['gizmo'] = r4_globalTransform;
            _r714_t0['set-width'](r4_WIDTH);
            r714_xn$assignunicode$7Hrq(167);
            r714_top = r4_parenTop;
            r714_bot = r4_parenBot;
            r714_sma = r4_SMOOTHA * 0.85;
            r714_extension1 = 0.5;
            r714_extension2 = 0.625;
            r714_extension3x = 0.5;
            r714_extension3y = r0_mix(r714_extension1, 1 - r714_sma / (r714_top - r714_bot), 0.5);
            r714_include(r4_XSHookUpper(r714_top, r4_SB, r4_MIDDLE, r4_RIGHTSB, r714_sma, r4_HOOK));
            r714_include(r4_sStrand(r714_top - r714_sma, r0_mix(r714_bot, r714_top, r714_extension1)));
            r714_include(r4_sStrand(r0_mix(r714_top, r714_bot, r714_extension1), r714_bot + r714_sma));
            r714_include(r4_XSHookLower(r714_bot, r4_SB, r4_MIDDLE, r4_RIGHTSB, r714_sma, r4_HOOK));
            r714_include(r714_xn$createstroke$7Hrq()['start-from'](r4_SB + r4_HALFSTROKE, r0_mix(r714_top, r714_bot, r714_extension1) - r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_SB + r4_HALFSTROKE, r0_mix(r714_bot, r714_top, r714_extension2), r0_mix(r4_SB + r4_HALFSTROKE, r4_RIGHTSB - r4_HALFSTROKE, r714_extension3x), r0_mix(r714_bot, r714_top, r714_extension3y)));
            r714_include(r714_xn$createstroke$7Hrq()['start-from'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r714_bot, r714_top, r714_extension1) + r4_HALFSTROKE * (r4_globalTransform['yx'] * 0.985))['set-width'](r4_HALFSTROKE, r4_HALFSTROKE)['curve-to'](r4_RIGHTSB - r4_HALFSTROKE, r0_mix(r714_top, r714_bot, r714_extension2), r0_mix(r4_RIGHTSB - r4_HALFSTROKE, r4_SB + r4_HALFSTROKE, r714_extension3x), r0_mix(r714_top, r714_bot, r714_extension3y)));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('plusminus', function _r4_t219() {
            var r718_currentGlyph, r718_xn$setwidth$9Jrj, r718_xn$assignunicode$7Hrq, r718_xn$startfrom$1aao, r718_xn$lineto$5sIl, r718_xn$curveto$1aao, r718_xn$cubicto$1aao, r718_xn$putshapes$9Jrj, r718_xn$reverselast$3qIs, r718_include, r718_xn$createstroke$7Hrq, r718_xn$setanchor$9Jrj, r718_xn$applytransform$1aao, r718_xn$dontexport$5sIl, _r718_t0, _r718_t1, _r718_t2, _r718_t3;
            _r718_t0 = this;
            r718_currentGlyph = _r718_t0;
            r718_xn$setwidth$9Jrj = _r718_t0['set-width']['bind'](_r718_t0);
            r718_xn$assignunicode$7Hrq = function _r718_t2(r719_code) {
                var r719_code, _r719_t0, _r719_t1;
                r718_currentGlyph['assign-unicode'](r719_code);
                return r4_unicodeGlyphs[r718_currentGlyph['unicode'][r718_currentGlyph['unicode']['length'] - 1]] = r718_currentGlyph;
            };
            r718_xn$startfrom$1aao = _r718_t0['start-from']['bind'](_r718_t0);
            r718_xn$lineto$5sIl = _r718_t0['line-to']['bind'](_r718_t0);
            r718_xn$curveto$1aao = _r718_t0['curve-to']['bind'](_r718_t0);
            r718_xn$cubicto$1aao = _r718_t0['cubic-to']['bind'](_r718_t0);
            r718_xn$putshapes$9Jrj = _r718_t0['put-shapes']['bind'](_r718_t0);
            r718_xn$reverselast$3qIs = _r718_t0['reverse-last']['bind'](_r718_t0);
            r718_include = _r718_t0['include']['bind'](_r718_t0);
            r718_xn$createstroke$7Hrq = _r718_t0['create-stroke']['bind'](_r718_t0);
            r718_xn$setanchor$9Jrj = _r718_t0['set-anchor']['bind'](_r718_t0);
            r718_xn$applytransform$1aao = _r718_t0['apply-transform']['bind'](_r718_t0);
            r718_xn$dontexport$5sIl = function _r718_t3() {
                var _r720_t0, _r720_t1;
                return r718_currentGlyph['dontExport'] = true;
            };
            _r718_t0['gizmo'] = r4_globalTransform;
            _r718_t0['set-width'](r4_WIDTH);
            r718_xn$assignunicode$7Hrq(177);
            r718_include(r4_glyphs['underscore']);
            r718_include(r4_glyphs['plus']);
            return void 0;
        });
        r4_isAboveMark = function _r4_t220(r721_mark) {
            var r721_mark, _r721_t0, _r721_t1;
            return r721_mark && r721_mark['anchors'] && r721_mark['anchors']['above'] && r721_mark['anchors']['above']['type'] === r4_MARK;
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
                            _r4_t229 = r4_allFound = false;
                        else
                            _r4_t229 = void 0;
                        if (r4_isAboveMark(r4_parts[r4_j]))
                            _r4_t231 = r4_hasMarkAbove = true;
                        else
                            _r4_t231 = void 0;
                    }
                    if (r4_allFound) {
                        if (r4_parts[0] === r4_glyphs['i'] && r4_hasMarkAbove)
                            _r4_t234 = r4_parts[0] = r4_glyphs['dotlessi'];
                        else
                            _r4_t234 = void 0;
                        if (r4_parts[0] === r4_glyphs['j'] && r4_hasMarkAbove)
                            _r4_t236 = r4_parts[0] = r4_glyphs['dotlessj'];
                        else
                            _r4_t236 = void 0;
                        _r4_t233 = r4_xn$createglyph$7Hrq(r4_parts['map'](function _r4_t238(r724_part) {
                            var r724_part, _r724_t0, _r724_t1;
                            return r724_part['name'];
                        })['join']('_'), function _r4_t239() {
                            var r726_currentGlyph, r726_xn$setwidth$9Jrj, r726_xn$assignunicode$7Hrq, r726_xn$startfrom$1aao, r726_xn$lineto$5sIl, r726_xn$curveto$1aao, r726_xn$cubicto$1aao, r726_xn$putshapes$9Jrj, r726_xn$reverselast$3qIs, r726_include, r726_xn$createstroke$7Hrq, r726_xn$setanchor$9Jrj, r726_xn$applytransform$1aao, r726_xn$dontexport$5sIl, r726_part, _r726_t0, _r726_t1, _r726_t2, _r726_t3, _r726_t4, _r726_t5, _r726_t6;
                            _r726_t3 = this;
                            r726_currentGlyph = _r726_t3;
                            r726_xn$setwidth$9Jrj = _r726_t3['set-width']['bind'](_r726_t3);
                            r726_xn$assignunicode$7Hrq = function _r726_t5(r727_code) {
                                var r727_code, _r727_t0, _r727_t1;
                                r726_currentGlyph['assign-unicode'](r727_code);
                                return r4_unicodeGlyphs[r726_currentGlyph['unicode'][r726_currentGlyph['unicode']['length'] - 1]] = r726_currentGlyph;
                            };
                            r726_xn$startfrom$1aao = _r726_t3['start-from']['bind'](_r726_t3);
                            r726_xn$lineto$5sIl = _r726_t3['line-to']['bind'](_r726_t3);
                            r726_xn$curveto$1aao = _r726_t3['curve-to']['bind'](_r726_t3);
                            r726_xn$cubicto$1aao = _r726_t3['cubic-to']['bind'](_r726_t3);
                            r726_xn$putshapes$9Jrj = _r726_t3['put-shapes']['bind'](_r726_t3);
                            r726_xn$reverselast$3qIs = _r726_t3['reverse-last']['bind'](_r726_t3);
                            r726_include = _r726_t3['include']['bind'](_r726_t3);
                            r726_xn$createstroke$7Hrq = _r726_t3['create-stroke']['bind'](_r726_t3);
                            r726_xn$setanchor$9Jrj = _r726_t3['set-anchor']['bind'](_r726_t3);
                            r726_xn$applytransform$1aao = _r726_t3['apply-transform']['bind'](_r726_t3);
                            r726_xn$dontexport$5sIl = function _r726_t6() {
                                var _r728_t0, _r728_t1;
                                return r726_currentGlyph['dontExport'] = true;
                            };
                            _r726_t3['gizmo'] = r4_globalTransform;
                            _r726_t3['set-width'](r4_WIDTH);
                            r726_xn$assignunicode$7Hrq(r4_code);
                            r726_include(r4_parts[0], r4_AS_BASE);
                            _r726_t0 = r4_parts['slice'](1);
                            _r726_t1 = _r726_t0['length'];
                            _r726_t2 = 0;
                            for (; _r726_t2 < _r726_t1; _r726_t2 = _r726_t2 + 1) {
                                r726_part = _r726_t0[_r726_t2];
                                r726_include(r726_part);
                            }
                            return void 0;
                        });
                    }
                    _r4_t222 = _r4_t233;
                }
                _r4_t221 = _r4_t222;
            } else
                _r4_t221 = void 0;
        }
        r4_xn$createglyph$7Hrq('grave', function _r4_t223() {
            var r731_currentGlyph, r731_xn$setwidth$9Jrj, r731_xn$assignunicode$7Hrq, r731_xn$startfrom$1aao, r731_xn$lineto$5sIl, r731_xn$curveto$1aao, r731_xn$cubicto$1aao, r731_xn$putshapes$9Jrj, r731_xn$reverselast$3qIs, r731_include, r731_xn$createstroke$7Hrq, r731_xn$setanchor$9Jrj, r731_xn$applytransform$1aao, r731_xn$dontexport$5sIl, _r731_t0, _r731_t1, _r731_t2, _r731_t3;
            _r731_t0 = this;
            r731_currentGlyph = _r731_t0;
            r731_xn$setwidth$9Jrj = _r731_t0['set-width']['bind'](_r731_t0);
            r731_xn$assignunicode$7Hrq = function _r731_t2(r732_code) {
                var r732_code, _r732_t0, _r732_t1;
                r731_currentGlyph['assign-unicode'](r732_code);
                return r4_unicodeGlyphs[r731_currentGlyph['unicode'][r731_currentGlyph['unicode']['length'] - 1]] = r731_currentGlyph;
            };
            r731_xn$startfrom$1aao = _r731_t0['start-from']['bind'](_r731_t0);
            r731_xn$lineto$5sIl = _r731_t0['line-to']['bind'](_r731_t0);
            r731_xn$curveto$1aao = _r731_t0['curve-to']['bind'](_r731_t0);
            r731_xn$cubicto$1aao = _r731_t0['cubic-to']['bind'](_r731_t0);
            r731_xn$putshapes$9Jrj = _r731_t0['put-shapes']['bind'](_r731_t0);
            r731_xn$reverselast$3qIs = _r731_t0['reverse-last']['bind'](_r731_t0);
            r731_include = _r731_t0['include']['bind'](_r731_t0);
            r731_xn$createstroke$7Hrq = _r731_t0['create-stroke']['bind'](_r731_t0);
            r731_xn$setanchor$9Jrj = _r731_t0['set-anchor']['bind'](_r731_t0);
            r731_xn$applytransform$1aao = _r731_t0['apply-transform']['bind'](_r731_t0);
            r731_xn$dontexport$5sIl = function _r731_t3() {
                var _r733_t0, _r733_t1;
                return r731_currentGlyph['dontExport'] = true;
            };
            _r731_t0['gizmo'] = r4_globalTransform;
            _r731_t0['set-width'](r4_WIDTH);
            r731_xn$assignunicode$7Hrq('`');
            r731_include(r4_glyphs['space'], r4_AS_BASE);
            r731_include(r4_glyphs['graveAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('acute', function _r4_t224() {
            var r735_currentGlyph, r735_xn$setwidth$9Jrj, r735_xn$assignunicode$7Hrq, r735_xn$startfrom$1aao, r735_xn$lineto$5sIl, r735_xn$curveto$1aao, r735_xn$cubicto$1aao, r735_xn$putshapes$9Jrj, r735_xn$reverselast$3qIs, r735_include, r735_xn$createstroke$7Hrq, r735_xn$setanchor$9Jrj, r735_xn$applytransform$1aao, r735_xn$dontexport$5sIl, _r735_t0, _r735_t1, _r735_t2, _r735_t3;
            _r735_t0 = this;
            r735_currentGlyph = _r735_t0;
            r735_xn$setwidth$9Jrj = _r735_t0['set-width']['bind'](_r735_t0);
            r735_xn$assignunicode$7Hrq = function _r735_t2(r736_code) {
                var r736_code, _r736_t0, _r736_t1;
                r735_currentGlyph['assign-unicode'](r736_code);
                return r4_unicodeGlyphs[r735_currentGlyph['unicode'][r735_currentGlyph['unicode']['length'] - 1]] = r735_currentGlyph;
            };
            r735_xn$startfrom$1aao = _r735_t0['start-from']['bind'](_r735_t0);
            r735_xn$lineto$5sIl = _r735_t0['line-to']['bind'](_r735_t0);
            r735_xn$curveto$1aao = _r735_t0['curve-to']['bind'](_r735_t0);
            r735_xn$cubicto$1aao = _r735_t0['cubic-to']['bind'](_r735_t0);
            r735_xn$putshapes$9Jrj = _r735_t0['put-shapes']['bind'](_r735_t0);
            r735_xn$reverselast$3qIs = _r735_t0['reverse-last']['bind'](_r735_t0);
            r735_include = _r735_t0['include']['bind'](_r735_t0);
            r735_xn$createstroke$7Hrq = _r735_t0['create-stroke']['bind'](_r735_t0);
            r735_xn$setanchor$9Jrj = _r735_t0['set-anchor']['bind'](_r735_t0);
            r735_xn$applytransform$1aao = _r735_t0['apply-transform']['bind'](_r735_t0);
            r735_xn$dontexport$5sIl = function _r735_t3() {
                var _r737_t0, _r737_t1;
                return r735_currentGlyph['dontExport'] = true;
            };
            _r735_t0['gizmo'] = r4_globalTransform;
            _r735_t0['set-width'](r4_WIDTH);
            r735_xn$assignunicode$7Hrq(180);
            r735_include(r4_glyphs['space'], r4_AS_BASE);
            r735_include(r4_glyphs['acuteAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciicircum', function _r4_t225() {
            var r739_currentGlyph, r739_xn$setwidth$9Jrj, r739_xn$assignunicode$7Hrq, r739_xn$startfrom$1aao, r739_xn$lineto$5sIl, r739_xn$curveto$1aao, r739_xn$cubicto$1aao, r739_xn$putshapes$9Jrj, r739_xn$reverselast$3qIs, r739_include, r739_xn$createstroke$7Hrq, r739_xn$setanchor$9Jrj, r739_xn$applytransform$1aao, r739_xn$dontexport$5sIl, _r739_t0, _r739_t1, _r739_t2, _r739_t3;
            _r739_t0 = this;
            r739_currentGlyph = _r739_t0;
            r739_xn$setwidth$9Jrj = _r739_t0['set-width']['bind'](_r739_t0);
            r739_xn$assignunicode$7Hrq = function _r739_t2(r740_code) {
                var r740_code, _r740_t0, _r740_t1;
                r739_currentGlyph['assign-unicode'](r740_code);
                return r4_unicodeGlyphs[r739_currentGlyph['unicode'][r739_currentGlyph['unicode']['length'] - 1]] = r739_currentGlyph;
            };
            r739_xn$startfrom$1aao = _r739_t0['start-from']['bind'](_r739_t0);
            r739_xn$lineto$5sIl = _r739_t0['line-to']['bind'](_r739_t0);
            r739_xn$curveto$1aao = _r739_t0['curve-to']['bind'](_r739_t0);
            r739_xn$cubicto$1aao = _r739_t0['cubic-to']['bind'](_r739_t0);
            r739_xn$putshapes$9Jrj = _r739_t0['put-shapes']['bind'](_r739_t0);
            r739_xn$reverselast$3qIs = _r739_t0['reverse-last']['bind'](_r739_t0);
            r739_include = _r739_t0['include']['bind'](_r739_t0);
            r739_xn$createstroke$7Hrq = _r739_t0['create-stroke']['bind'](_r739_t0);
            r739_xn$setanchor$9Jrj = _r739_t0['set-anchor']['bind'](_r739_t0);
            r739_xn$applytransform$1aao = _r739_t0['apply-transform']['bind'](_r739_t0);
            r739_xn$dontexport$5sIl = function _r739_t3() {
                var _r741_t0, _r741_t1;
                return r739_currentGlyph['dontExport'] = true;
            };
            _r739_t0['gizmo'] = r4_globalTransform;
            _r739_t0['set-width'](r4_WIDTH);
            r739_xn$setwidth$9Jrj(r4_WIDTH);
            r739_xn$assignunicode$7Hrq(94);
            r739_include(r4_glyphs['space'], r4_AS_BASE);
            r739_include(r4_glyphs['circumflexAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('asciitilde', function _r4_t226() {
            var r743_currentGlyph, r743_xn$setwidth$9Jrj, r743_xn$assignunicode$7Hrq, r743_xn$startfrom$1aao, r743_xn$lineto$5sIl, r743_xn$curveto$1aao, r743_xn$cubicto$1aao, r743_xn$putshapes$9Jrj, r743_xn$reverselast$3qIs, r743_include, r743_xn$createstroke$7Hrq, r743_xn$setanchor$9Jrj, r743_xn$applytransform$1aao, r743_xn$dontexport$5sIl, _r743_t0, _r743_t1, _r743_t2, _r743_t3;
            _r743_t0 = this;
            r743_currentGlyph = _r743_t0;
            r743_xn$setwidth$9Jrj = _r743_t0['set-width']['bind'](_r743_t0);
            r743_xn$assignunicode$7Hrq = function _r743_t2(r744_code) {
                var r744_code, _r744_t0, _r744_t1;
                r743_currentGlyph['assign-unicode'](r744_code);
                return r4_unicodeGlyphs[r743_currentGlyph['unicode'][r743_currentGlyph['unicode']['length'] - 1]] = r743_currentGlyph;
            };
            r743_xn$startfrom$1aao = _r743_t0['start-from']['bind'](_r743_t0);
            r743_xn$lineto$5sIl = _r743_t0['line-to']['bind'](_r743_t0);
            r743_xn$curveto$1aao = _r743_t0['curve-to']['bind'](_r743_t0);
            r743_xn$cubicto$1aao = _r743_t0['cubic-to']['bind'](_r743_t0);
            r743_xn$putshapes$9Jrj = _r743_t0['put-shapes']['bind'](_r743_t0);
            r743_xn$reverselast$3qIs = _r743_t0['reverse-last']['bind'](_r743_t0);
            r743_include = _r743_t0['include']['bind'](_r743_t0);
            r743_xn$createstroke$7Hrq = _r743_t0['create-stroke']['bind'](_r743_t0);
            r743_xn$setanchor$9Jrj = _r743_t0['set-anchor']['bind'](_r743_t0);
            r743_xn$applytransform$1aao = _r743_t0['apply-transform']['bind'](_r743_t0);
            r743_xn$dontexport$5sIl = function _r743_t3() {
                var _r745_t0, _r745_t1;
                return r743_currentGlyph['dontExport'] = true;
            };
            _r743_t0['gizmo'] = r4_globalTransform;
            _r743_t0['set-width'](r4_WIDTH);
            r743_xn$setwidth$9Jrj(r4_WIDTH);
            r743_xn$assignunicode$7Hrq('~');
            r743_include(r4_glyphs['space'], r4_AS_BASE);
            r743_include(r4_glyphs['tildeAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1dieresis', function _r4_t227() {
            var r747_currentGlyph, r747_xn$setwidth$9Jrj, r747_xn$assignunicode$7Hrq, r747_xn$startfrom$1aao, r747_xn$lineto$5sIl, r747_xn$curveto$1aao, r747_xn$cubicto$1aao, r747_xn$putshapes$9Jrj, r747_xn$reverselast$3qIs, r747_include, r747_xn$createstroke$7Hrq, r747_xn$setanchor$9Jrj, r747_xn$applytransform$1aao, r747_xn$dontexport$5sIl, _r747_t0, _r747_t1, _r747_t2, _r747_t3;
            _r747_t0 = this;
            r747_currentGlyph = _r747_t0;
            r747_xn$setwidth$9Jrj = _r747_t0['set-width']['bind'](_r747_t0);
            r747_xn$assignunicode$7Hrq = function _r747_t2(r748_code) {
                var r748_code, _r748_t0, _r748_t1;
                r747_currentGlyph['assign-unicode'](r748_code);
                return r4_unicodeGlyphs[r747_currentGlyph['unicode'][r747_currentGlyph['unicode']['length'] - 1]] = r747_currentGlyph;
            };
            r747_xn$startfrom$1aao = _r747_t0['start-from']['bind'](_r747_t0);
            r747_xn$lineto$5sIl = _r747_t0['line-to']['bind'](_r747_t0);
            r747_xn$curveto$1aao = _r747_t0['curve-to']['bind'](_r747_t0);
            r747_xn$cubicto$1aao = _r747_t0['cubic-to']['bind'](_r747_t0);
            r747_xn$putshapes$9Jrj = _r747_t0['put-shapes']['bind'](_r747_t0);
            r747_xn$reverselast$3qIs = _r747_t0['reverse-last']['bind'](_r747_t0);
            r747_include = _r747_t0['include']['bind'](_r747_t0);
            r747_xn$createstroke$7Hrq = _r747_t0['create-stroke']['bind'](_r747_t0);
            r747_xn$setanchor$9Jrj = _r747_t0['set-anchor']['bind'](_r747_t0);
            r747_xn$applytransform$1aao = _r747_t0['apply-transform']['bind'](_r747_t0);
            r747_xn$dontexport$5sIl = function _r747_t3() {
                var _r749_t0, _r749_t1;
                return r747_currentGlyph['dontExport'] = true;
            };
            _r747_t0['gizmo'] = r4_globalTransform;
            _r747_t0['set-width'](r4_WIDTH);
            r747_xn$setwidth$9Jrj(r4_WIDTH);
            r747_xn$assignunicode$7Hrq(168);
            r747_include(r4_glyphs['space'], r4_AS_BASE);
            r747_include(r4_glyphs['dieresisAbove']);
            return void 0;
        });
        r4_xn$createglyph$7Hrq('latin1cedilla', function _r4_t228() {
            var r751_currentGlyph, r751_xn$setwidth$9Jrj, r751_xn$assignunicode$7Hrq, r751_xn$startfrom$1aao, r751_xn$lineto$5sIl, r751_xn$curveto$1aao, r751_xn$cubicto$1aao, r751_xn$putshapes$9Jrj, r751_xn$reverselast$3qIs, r751_include, r751_xn$createstroke$7Hrq, r751_xn$setanchor$9Jrj, r751_xn$applytransform$1aao, r751_xn$dontexport$5sIl, _r751_t0, _r751_t1, _r751_t2, _r751_t3;
            _r751_t0 = this;
            r751_currentGlyph = _r751_t0;
            r751_xn$setwidth$9Jrj = _r751_t0['set-width']['bind'](_r751_t0);
            r751_xn$assignunicode$7Hrq = function _r751_t2(r752_code) {
                var r752_code, _r752_t0, _r752_t1;
                r751_currentGlyph['assign-unicode'](r752_code);
                return r4_unicodeGlyphs[r751_currentGlyph['unicode'][r751_currentGlyph['unicode']['length'] - 1]] = r751_currentGlyph;
            };
            r751_xn$startfrom$1aao = _r751_t0['start-from']['bind'](_r751_t0);
            r751_xn$lineto$5sIl = _r751_t0['line-to']['bind'](_r751_t0);
            r751_xn$curveto$1aao = _r751_t0['curve-to']['bind'](_r751_t0);
            r751_xn$cubicto$1aao = _r751_t0['cubic-to']['bind'](_r751_t0);
            r751_xn$putshapes$9Jrj = _r751_t0['put-shapes']['bind'](_r751_t0);
            r751_xn$reverselast$3qIs = _r751_t0['reverse-last']['bind'](_r751_t0);
            r751_include = _r751_t0['include']['bind'](_r751_t0);
            r751_xn$createstroke$7Hrq = _r751_t0['create-stroke']['bind'](_r751_t0);
            r751_xn$setanchor$9Jrj = _r751_t0['set-anchor']['bind'](_r751_t0);
            r751_xn$applytransform$1aao = _r751_t0['apply-transform']['bind'](_r751_t0);
            r751_xn$dontexport$5sIl = function _r751_t3() {
                var _r753_t0, _r753_t1;
                return r751_currentGlyph['dontExport'] = true;
            };
            _r751_t0['gizmo'] = r4_globalTransform;
            _r751_t0['set-width'](r4_WIDTH);
            r751_xn$setwidth$9Jrj(r4_WIDTH);
            r751_xn$assignunicode$7Hrq(184);
            r751_include(r4_glyphs['space'], r4_AS_BASE);
            r751_include(r4_glyphs['cedillaBelow']);
            return void 0;
        });
        r4_Miniature = function _r4_t230(r754_glyphid, r754_fold, r754_scale) {
            var r754_glyphid, r754_fold, r754_scale, r754_forkedPara, r754_forkFont, _r754_t0, _r754_t1;
            r754_forkedPara = Object['create'](r4_para);
            r754_forkedPara['upmscale'] = 1;
            r754_forkedPara['buildFor'] = r754_glyphid;
            r754_forkedPara['stroke'] = r4_adviceBlackness(r754_fold) / r754_scale;
            r754_forkedPara['sb'] = r4_SB / 2;
            r754_forkFont = exports['build'](r754_forkedPara, [r754_glyphid]['concat'](r4_dependencyProfile[r754_glyphid]));
            return r754_forkFont['glyfMap'][r754_glyphid];
        };
        r4_CircledGlyph = function _r4_t232(r755_glyphid) {
            var r755_glyphid, _r755_t0, _r755_t1, _r755_t2;
            return function _r755_t2() {
                var r757_currentGlyph, r757_xn$setwidth$9Jrj, r757_xn$assignunicode$7Hrq, r757_xn$startfrom$1aao, r757_xn$lineto$5sIl, r757_xn$curveto$1aao, r757_xn$cubicto$1aao, r757_xn$putshapes$9Jrj, r757_xn$reverselast$3qIs, r757_include, r757_xn$createstroke$7Hrq, r757_xn$setanchor$9Jrj, r757_xn$applytransform$1aao, r757_xn$dontexport$5sIl, r757_sw, _r757_t0, _r757_t1, _r757_t2, _r757_t3, _r757_t4;
                _r757_t0 = this;
                r757_currentGlyph = _r757_t0;
                r757_xn$setwidth$9Jrj = _r757_t0['set-width']['bind'](_r757_t0);
                r757_xn$assignunicode$7Hrq = function _r757_t2(r758_code) {
                    var r758_code, _r758_t0, _r758_t1;
                    r757_currentGlyph['assign-unicode'](r758_code);
                    return r4_unicodeGlyphs[r757_currentGlyph['unicode'][r757_currentGlyph['unicode']['length'] - 1]] = r757_currentGlyph;
                };
                r757_xn$startfrom$1aao = _r757_t0['start-from']['bind'](_r757_t0);
                r757_xn$lineto$5sIl = _r757_t0['line-to']['bind'](_r757_t0);
                r757_xn$curveto$1aao = _r757_t0['curve-to']['bind'](_r757_t0);
                r757_xn$cubicto$1aao = _r757_t0['cubic-to']['bind'](_r757_t0);
                r757_xn$putshapes$9Jrj = _r757_t0['put-shapes']['bind'](_r757_t0);
                r757_xn$reverselast$3qIs = _r757_t0['reverse-last']['bind'](_r757_t0);
                r757_include = _r757_t0['include']['bind'](_r757_t0);
                r757_xn$createstroke$7Hrq = _r757_t0['create-stroke']['bind'](_r757_t0);
                r757_xn$setanchor$9Jrj = _r757_t0['set-anchor']['bind'](_r757_t0);
                r757_xn$applytransform$1aao = _r757_t0['apply-transform']['bind'](_r757_t0);
                r757_xn$dontexport$5sIl = function _r757_t3() {
                    var _r759_t0, _r759_t1;
                    return r757_currentGlyph['dontExport'] = true;
                };
                _r757_t0['gizmo'] = r4_globalTransform;
                _r757_t0['set-width'](r4_WIDTH);
                r757_sw = r4_adviceBlackness(6);
                r757_include(r4_xn$createglyph$7Hrq(function _r757_t4() {
                    var r761_currentGlyph, r761_xn$setwidth$9Jrj, r761_xn$assignunicode$7Hrq, r761_xn$startfrom$1aao, r761_xn$lineto$5sIl, r761_xn$curveto$1aao, r761_xn$cubicto$1aao, r761_xn$putshapes$9Jrj, r761_xn$reverselast$3qIs, r761_include, r761_xn$createstroke$7Hrq, r761_xn$setanchor$9Jrj, r761_xn$applytransform$1aao, r761_xn$dontexport$5sIl, _r761_t0, _r761_t1, _r761_t2, _r761_t3;
                    _r761_t0 = this;
                    r761_currentGlyph = _r761_t0;
                    r761_xn$setwidth$9Jrj = _r761_t0['set-width']['bind'](_r761_t0);
                    r761_xn$assignunicode$7Hrq = function _r761_t2(r762_code) {
                        var r762_code, _r762_t0, _r762_t1;
                        r761_currentGlyph['assign-unicode'](r762_code);
                        return r4_unicodeGlyphs[r761_currentGlyph['unicode'][r761_currentGlyph['unicode']['length'] - 1]] = r761_currentGlyph;
                    };
                    r761_xn$startfrom$1aao = _r761_t0['start-from']['bind'](_r761_t0);
                    r761_xn$lineto$5sIl = _r761_t0['line-to']['bind'](_r761_t0);
                    r761_xn$curveto$1aao = _r761_t0['curve-to']['bind'](_r761_t0);
                    r761_xn$cubicto$1aao = _r761_t0['cubic-to']['bind'](_r761_t0);
                    r761_xn$putshapes$9Jrj = _r761_t0['put-shapes']['bind'](_r761_t0);
                    r761_xn$reverselast$3qIs = _r761_t0['reverse-last']['bind'](_r761_t0);
                    r761_include = _r761_t0['include']['bind'](_r761_t0);
                    r761_xn$createstroke$7Hrq = _r761_t0['create-stroke']['bind'](_r761_t0);
                    r761_xn$setanchor$9Jrj = _r761_t0['set-anchor']['bind'](_r761_t0);
                    r761_xn$applytransform$1aao = _r761_t0['apply-transform']['bind'](_r761_t0);
                    r761_xn$dontexport$5sIl = function _r761_t3() {
                        var _r763_t0, _r763_t1;
                        return r761_currentGlyph['dontExport'] = true;
                    };
                    _r761_t0['gizmo'] = r4_globalTransform;
                    _r761_t0['set-width'](r4_WIDTH);
                    r761_include(r4_Miniature(r755_glyphid, 4.2, 0.6));
                    r761_xn$applytransform$1aao(r4_Upright());
                    r761_xn$applytransform$1aao(r4_Scale(0.45));
                    r761_xn$applytransform$1aao(r4_Translate((r4_WIDTH - r4_WIDTH * 0.45) / 2, r757_sw * 2));
                    r761_xn$applytransform$1aao(r4_Italify());
                    return void 0;
                }));
                r757_include(r4_smallo(r4_CAP * 0.45 + r757_sw * 4, 0, r4_SB, r4_RIGHTSB, r757_sw));
                r757_xn$applytransform$1aao(r4_Upright());
                r757_xn$applytransform$1aao(r4_Translate(0, r4_parenMid - (r4_CAP * 0.45 + r757_sw * 4) / 2));
                r757_xn$applytransform$1aao(r4_Italify());
                return void 0;
            };
        };
        r4_createSuperscript = function _r4_t235(r764_unicode, r764_glyphid) {
            var r764_unicode, r764_glyphid, _r764_t0, _r764_t1, _r764_t2, _r764_t3;
            if (r4_glyphs[r764_glyphid])
                return r4_xn$createglyph$7Hrq('superscript_' + r764_glyphid, function _r764_t3() {
                    var r766_currentGlyph, r766_xn$setwidth$9Jrj, r766_xn$assignunicode$7Hrq, r766_xn$startfrom$1aao, r766_xn$lineto$5sIl, r766_xn$curveto$1aao, r766_xn$cubicto$1aao, r766_xn$putshapes$9Jrj, r766_xn$reverselast$3qIs, r766_include, r766_xn$createstroke$7Hrq, r766_xn$setanchor$9Jrj, r766_xn$applytransform$1aao, r766_xn$dontexport$5sIl, _r766_t0, _r766_t1, _r766_t2, _r766_t3, _r766_t4;
                    _r766_t0 = this;
                    r766_currentGlyph = _r766_t0;
                    r766_xn$setwidth$9Jrj = _r766_t0['set-width']['bind'](_r766_t0);
                    r766_xn$assignunicode$7Hrq = function _r766_t2(r767_code) {
                        var r767_code, _r767_t0, _r767_t1;
                        r766_currentGlyph['assign-unicode'](r767_code);
                        return r4_unicodeGlyphs[r766_currentGlyph['unicode'][r766_currentGlyph['unicode']['length'] - 1]] = r766_currentGlyph;
                    };
                    r766_xn$startfrom$1aao = _r766_t0['start-from']['bind'](_r766_t0);
                    r766_xn$lineto$5sIl = _r766_t0['line-to']['bind'](_r766_t0);
                    r766_xn$curveto$1aao = _r766_t0['curve-to']['bind'](_r766_t0);
                    r766_xn$cubicto$1aao = _r766_t0['cubic-to']['bind'](_r766_t0);
                    r766_xn$putshapes$9Jrj = _r766_t0['put-shapes']['bind'](_r766_t0);
                    r766_xn$reverselast$3qIs = _r766_t0['reverse-last']['bind'](_r766_t0);
                    r766_include = _r766_t0['include']['bind'](_r766_t0);
                    r766_xn$createstroke$7Hrq = _r766_t0['create-stroke']['bind'](_r766_t0);
                    r766_xn$setanchor$9Jrj = _r766_t0['set-anchor']['bind'](_r766_t0);
                    r766_xn$applytransform$1aao = _r766_t0['apply-transform']['bind'](_r766_t0);
                    r766_xn$dontexport$5sIl = function _r766_t3() {
                        var _r768_t0, _r768_t1;
                        return r766_currentGlyph['dontExport'] = true;
                    };
                    _r766_t0['gizmo'] = r4_globalTransform;
                    _r766_t0['set-width'](r4_WIDTH);
                    r766_xn$assignunicode$7Hrq(r764_unicode);
                    r766_include(r4_xn$createglyph$7Hrq(function _r766_t4() {
                        var r770_currentGlyph, r770_xn$setwidth$9Jrj, r770_xn$assignunicode$7Hrq, r770_xn$startfrom$1aao, r770_xn$lineto$5sIl, r770_xn$curveto$1aao, r770_xn$cubicto$1aao, r770_xn$putshapes$9Jrj, r770_xn$reverselast$3qIs, r770_include, r770_xn$createstroke$7Hrq, r770_xn$setanchor$9Jrj, r770_xn$applytransform$1aao, r770_xn$dontexport$5sIl, _r770_t0, _r770_t1, _r770_t2, _r770_t3;
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
                        r770_include(r4_Miniature(r764_glyphid, 4.2, 0.6));
                        r770_xn$applytransform$1aao(r4_Upright());
                        r770_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_CAP));
                        r770_xn$applytransform$1aao(r4_Scale(0.6));
                        r770_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
                        r770_xn$applytransform$1aao(r4_Italify());
                        return void 0;
                    }));
                    return void 0;
                });
            else
                return void 0;
        };
        r4_createSubscript = function _r4_t237(r773_unicode, r773_glyphid) {
            var r773_unicode, r773_glyphid, _r773_t0, _r773_t1, _r773_t2, _r773_t3;
            if (r4_glyphs[r773_glyphid])
                return r4_xn$createglyph$7Hrq('subscript_' + r773_glyphid, function _r773_t3() {
                    var r775_currentGlyph, r775_xn$setwidth$9Jrj, r775_xn$assignunicode$7Hrq, r775_xn$startfrom$1aao, r775_xn$lineto$5sIl, r775_xn$curveto$1aao, r775_xn$cubicto$1aao, r775_xn$putshapes$9Jrj, r775_xn$reverselast$3qIs, r775_include, r775_xn$createstroke$7Hrq, r775_xn$setanchor$9Jrj, r775_xn$applytransform$1aao, r775_xn$dontexport$5sIl, _r775_t0, _r775_t1, _r775_t2, _r775_t3, _r775_t4;
                    _r775_t0 = this;
                    r775_currentGlyph = _r775_t0;
                    r775_xn$setwidth$9Jrj = _r775_t0['set-width']['bind'](_r775_t0);
                    r775_xn$assignunicode$7Hrq = function _r775_t2(r776_code) {
                        var r776_code, _r776_t0, _r776_t1;
                        r775_currentGlyph['assign-unicode'](r776_code);
                        return r4_unicodeGlyphs[r775_currentGlyph['unicode'][r775_currentGlyph['unicode']['length'] - 1]] = r775_currentGlyph;
                    };
                    r775_xn$startfrom$1aao = _r775_t0['start-from']['bind'](_r775_t0);
                    r775_xn$lineto$5sIl = _r775_t0['line-to']['bind'](_r775_t0);
                    r775_xn$curveto$1aao = _r775_t0['curve-to']['bind'](_r775_t0);
                    r775_xn$cubicto$1aao = _r775_t0['cubic-to']['bind'](_r775_t0);
                    r775_xn$putshapes$9Jrj = _r775_t0['put-shapes']['bind'](_r775_t0);
                    r775_xn$reverselast$3qIs = _r775_t0['reverse-last']['bind'](_r775_t0);
                    r775_include = _r775_t0['include']['bind'](_r775_t0);
                    r775_xn$createstroke$7Hrq = _r775_t0['create-stroke']['bind'](_r775_t0);
                    r775_xn$setanchor$9Jrj = _r775_t0['set-anchor']['bind'](_r775_t0);
                    r775_xn$applytransform$1aao = _r775_t0['apply-transform']['bind'](_r775_t0);
                    r775_xn$dontexport$5sIl = function _r775_t3() {
                        var _r777_t0, _r777_t1;
                        return r775_currentGlyph['dontExport'] = true;
                    };
                    _r775_t0['gizmo'] = r4_globalTransform;
                    _r775_t0['set-width'](r4_WIDTH);
                    r775_xn$assignunicode$7Hrq(r773_unicode);
                    r775_include(r4_xn$createglyph$7Hrq(function _r775_t4() {
                        var r779_currentGlyph, r779_xn$setwidth$9Jrj, r779_xn$assignunicode$7Hrq, r779_xn$startfrom$1aao, r779_xn$lineto$5sIl, r779_xn$curveto$1aao, r779_xn$cubicto$1aao, r779_xn$putshapes$9Jrj, r779_xn$reverselast$3qIs, r779_include, r779_xn$createstroke$7Hrq, r779_xn$setanchor$9Jrj, r779_xn$applytransform$1aao, r779_xn$dontexport$5sIl, _r779_t0, _r779_t1, _r779_t2, _r779_t3;
                        _r779_t0 = this;
                        r779_currentGlyph = _r779_t0;
                        r779_xn$setwidth$9Jrj = _r779_t0['set-width']['bind'](_r779_t0);
                        r779_xn$assignunicode$7Hrq = function _r779_t2(r780_code) {
                            var r780_code, _r780_t0, _r780_t1;
                            r779_currentGlyph['assign-unicode'](r780_code);
                            return r4_unicodeGlyphs[r779_currentGlyph['unicode'][r779_currentGlyph['unicode']['length'] - 1]] = r779_currentGlyph;
                        };
                        r779_xn$startfrom$1aao = _r779_t0['start-from']['bind'](_r779_t0);
                        r779_xn$lineto$5sIl = _r779_t0['line-to']['bind'](_r779_t0);
                        r779_xn$curveto$1aao = _r779_t0['curve-to']['bind'](_r779_t0);
                        r779_xn$cubicto$1aao = _r779_t0['cubic-to']['bind'](_r779_t0);
                        r779_xn$putshapes$9Jrj = _r779_t0['put-shapes']['bind'](_r779_t0);
                        r779_xn$reverselast$3qIs = _r779_t0['reverse-last']['bind'](_r779_t0);
                        r779_include = _r779_t0['include']['bind'](_r779_t0);
                        r779_xn$createstroke$7Hrq = _r779_t0['create-stroke']['bind'](_r779_t0);
                        r779_xn$setanchor$9Jrj = _r779_t0['set-anchor']['bind'](_r779_t0);
                        r779_xn$applytransform$1aao = _r779_t0['apply-transform']['bind'](_r779_t0);
                        r779_xn$dontexport$5sIl = function _r779_t3() {
                            var _r781_t0, _r781_t1;
                            return r779_currentGlyph['dontExport'] = true;
                        };
                        _r779_t0['gizmo'] = r4_globalTransform;
                        _r779_t0['set-width'](r4_WIDTH);
                        r779_include(r4_Miniature(r773_glyphid, 4.2, 0.6));
                        r779_xn$applytransform$1aao(r4_Upright());
                        r779_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, 0));
                        r779_xn$applytransform$1aao(r4_Scale(0.6));
                        r779_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, -r4_DESCENDER / 2));
                        r779_xn$applytransform$1aao(r4_Italify());
                        return void 0;
                    }));
                    return void 0;
                });
            else
                return void 0;
        };
        r4_xn$createglyph$7Hrq('copyright', function _r4_t240() {
            var r783_currentGlyph, r783_xn$setwidth$9Jrj, r783_xn$assignunicode$7Hrq, r783_xn$startfrom$1aao, r783_xn$lineto$5sIl, r783_xn$curveto$1aao, r783_xn$cubicto$1aao, r783_xn$putshapes$9Jrj, r783_xn$reverselast$3qIs, r783_include, r783_xn$createstroke$7Hrq, r783_xn$setanchor$9Jrj, r783_xn$applytransform$1aao, r783_xn$dontexport$5sIl, _r783_t0, _r783_t1, _r783_t2, _r783_t3;
            _r783_t0 = this;
            r783_currentGlyph = _r783_t0;
            r783_xn$setwidth$9Jrj = _r783_t0['set-width']['bind'](_r783_t0);
            r783_xn$assignunicode$7Hrq = function _r783_t2(r784_code) {
                var r784_code, _r784_t0, _r784_t1;
                r783_currentGlyph['assign-unicode'](r784_code);
                return r4_unicodeGlyphs[r783_currentGlyph['unicode'][r783_currentGlyph['unicode']['length'] - 1]] = r783_currentGlyph;
            };
            r783_xn$startfrom$1aao = _r783_t0['start-from']['bind'](_r783_t0);
            r783_xn$lineto$5sIl = _r783_t0['line-to']['bind'](_r783_t0);
            r783_xn$curveto$1aao = _r783_t0['curve-to']['bind'](_r783_t0);
            r783_xn$cubicto$1aao = _r783_t0['cubic-to']['bind'](_r783_t0);
            r783_xn$putshapes$9Jrj = _r783_t0['put-shapes']['bind'](_r783_t0);
            r783_xn$reverselast$3qIs = _r783_t0['reverse-last']['bind'](_r783_t0);
            r783_include = _r783_t0['include']['bind'](_r783_t0);
            r783_xn$createstroke$7Hrq = _r783_t0['create-stroke']['bind'](_r783_t0);
            r783_xn$setanchor$9Jrj = _r783_t0['set-anchor']['bind'](_r783_t0);
            r783_xn$applytransform$1aao = _r783_t0['apply-transform']['bind'](_r783_t0);
            r783_xn$dontexport$5sIl = function _r783_t3() {
                var _r785_t0, _r785_t1;
                return r783_currentGlyph['dontExport'] = true;
            };
            _r783_t0['gizmo'] = r4_globalTransform;
            _r783_t0['set-width'](r4_WIDTH);
            r783_xn$assignunicode$7Hrq(169);
            r783_include(r4_CircledGlyph('C'));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('registered', function _r4_t241() {
            var r787_currentGlyph, r787_xn$setwidth$9Jrj, r787_xn$assignunicode$7Hrq, r787_xn$startfrom$1aao, r787_xn$lineto$5sIl, r787_xn$curveto$1aao, r787_xn$cubicto$1aao, r787_xn$putshapes$9Jrj, r787_xn$reverselast$3qIs, r787_include, r787_xn$createstroke$7Hrq, r787_xn$setanchor$9Jrj, r787_xn$applytransform$1aao, r787_xn$dontexport$5sIl, _r787_t0, _r787_t1, _r787_t2, _r787_t3;
            _r787_t0 = this;
            r787_currentGlyph = _r787_t0;
            r787_xn$setwidth$9Jrj = _r787_t0['set-width']['bind'](_r787_t0);
            r787_xn$assignunicode$7Hrq = function _r787_t2(r788_code) {
                var r788_code, _r788_t0, _r788_t1;
                r787_currentGlyph['assign-unicode'](r788_code);
                return r4_unicodeGlyphs[r787_currentGlyph['unicode'][r787_currentGlyph['unicode']['length'] - 1]] = r787_currentGlyph;
            };
            r787_xn$startfrom$1aao = _r787_t0['start-from']['bind'](_r787_t0);
            r787_xn$lineto$5sIl = _r787_t0['line-to']['bind'](_r787_t0);
            r787_xn$curveto$1aao = _r787_t0['curve-to']['bind'](_r787_t0);
            r787_xn$cubicto$1aao = _r787_t0['cubic-to']['bind'](_r787_t0);
            r787_xn$putshapes$9Jrj = _r787_t0['put-shapes']['bind'](_r787_t0);
            r787_xn$reverselast$3qIs = _r787_t0['reverse-last']['bind'](_r787_t0);
            r787_include = _r787_t0['include']['bind'](_r787_t0);
            r787_xn$createstroke$7Hrq = _r787_t0['create-stroke']['bind'](_r787_t0);
            r787_xn$setanchor$9Jrj = _r787_t0['set-anchor']['bind'](_r787_t0);
            r787_xn$applytransform$1aao = _r787_t0['apply-transform']['bind'](_r787_t0);
            r787_xn$dontexport$5sIl = function _r787_t3() {
                var _r789_t0, _r789_t1;
                return r787_currentGlyph['dontExport'] = true;
            };
            _r787_t0['gizmo'] = r4_globalTransform;
            _r787_t0['set-width'](r4_WIDTH);
            r787_xn$assignunicode$7Hrq(174);
            r787_include(r4_CircledGlyph('R'));
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ordfeminine', function _r4_t242() {
            var r791_currentGlyph, r791_xn$setwidth$9Jrj, r791_xn$assignunicode$7Hrq, r791_xn$startfrom$1aao, r791_xn$lineto$5sIl, r791_xn$curveto$1aao, r791_xn$cubicto$1aao, r791_xn$putshapes$9Jrj, r791_xn$reverselast$3qIs, r791_include, r791_xn$createstroke$7Hrq, r791_xn$setanchor$9Jrj, r791_xn$applytransform$1aao, r791_xn$dontexport$5sIl, _r791_t0, _r791_t1, _r791_t2, _r791_t3;
            _r791_t0 = this;
            r791_currentGlyph = _r791_t0;
            r791_xn$setwidth$9Jrj = _r791_t0['set-width']['bind'](_r791_t0);
            r791_xn$assignunicode$7Hrq = function _r791_t2(r792_code) {
                var r792_code, _r792_t0, _r792_t1;
                r791_currentGlyph['assign-unicode'](r792_code);
                return r4_unicodeGlyphs[r791_currentGlyph['unicode'][r791_currentGlyph['unicode']['length'] - 1]] = r791_currentGlyph;
            };
            r791_xn$startfrom$1aao = _r791_t0['start-from']['bind'](_r791_t0);
            r791_xn$lineto$5sIl = _r791_t0['line-to']['bind'](_r791_t0);
            r791_xn$curveto$1aao = _r791_t0['curve-to']['bind'](_r791_t0);
            r791_xn$cubicto$1aao = _r791_t0['cubic-to']['bind'](_r791_t0);
            r791_xn$putshapes$9Jrj = _r791_t0['put-shapes']['bind'](_r791_t0);
            r791_xn$reverselast$3qIs = _r791_t0['reverse-last']['bind'](_r791_t0);
            r791_include = _r791_t0['include']['bind'](_r791_t0);
            r791_xn$createstroke$7Hrq = _r791_t0['create-stroke']['bind'](_r791_t0);
            r791_xn$setanchor$9Jrj = _r791_t0['set-anchor']['bind'](_r791_t0);
            r791_xn$applytransform$1aao = _r791_t0['apply-transform']['bind'](_r791_t0);
            r791_xn$dontexport$5sIl = function _r791_t3() {
                var _r793_t0, _r793_t1;
                return r791_currentGlyph['dontExport'] = true;
            };
            _r791_t0['gizmo'] = r4_globalTransform;
            _r791_t0['set-width'](r4_WIDTH);
            r791_xn$assignunicode$7Hrq(170);
            r791_include(r4_Miniature('a', 4.2, 0.6));
            r791_include(r791_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_DESCENDER)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_RIGHTWARD));
            r791_xn$applytransform$1aao(r4_Upright());
            r791_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_XH));
            r791_xn$applytransform$1aao(r4_Scale(0.6));
            r791_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
            r791_xn$applytransform$1aao(r4_Italify());
            return void 0;
        });
        r4_xn$createglyph$7Hrq('ordmasculine', function _r4_t243() {
            var r795_currentGlyph, r795_xn$setwidth$9Jrj, r795_xn$assignunicode$7Hrq, r795_xn$startfrom$1aao, r795_xn$lineto$5sIl, r795_xn$curveto$1aao, r795_xn$cubicto$1aao, r795_xn$putshapes$9Jrj, r795_xn$reverselast$3qIs, r795_include, r795_xn$createstroke$7Hrq, r795_xn$setanchor$9Jrj, r795_xn$applytransform$1aao, r795_xn$dontexport$5sIl, _r795_t0, _r795_t1, _r795_t2, _r795_t3;
            _r795_t0 = this;
            r795_currentGlyph = _r795_t0;
            r795_xn$setwidth$9Jrj = _r795_t0['set-width']['bind'](_r795_t0);
            r795_xn$assignunicode$7Hrq = function _r795_t2(r796_code) {
                var r796_code, _r796_t0, _r796_t1;
                r795_currentGlyph['assign-unicode'](r796_code);
                return r4_unicodeGlyphs[r795_currentGlyph['unicode'][r795_currentGlyph['unicode']['length'] - 1]] = r795_currentGlyph;
            };
            r795_xn$startfrom$1aao = _r795_t0['start-from']['bind'](_r795_t0);
            r795_xn$lineto$5sIl = _r795_t0['line-to']['bind'](_r795_t0);
            r795_xn$curveto$1aao = _r795_t0['curve-to']['bind'](_r795_t0);
            r795_xn$cubicto$1aao = _r795_t0['cubic-to']['bind'](_r795_t0);
            r795_xn$putshapes$9Jrj = _r795_t0['put-shapes']['bind'](_r795_t0);
            r795_xn$reverselast$3qIs = _r795_t0['reverse-last']['bind'](_r795_t0);
            r795_include = _r795_t0['include']['bind'](_r795_t0);
            r795_xn$createstroke$7Hrq = _r795_t0['create-stroke']['bind'](_r795_t0);
            r795_xn$setanchor$9Jrj = _r795_t0['set-anchor']['bind'](_r795_t0);
            r795_xn$applytransform$1aao = _r795_t0['apply-transform']['bind'](_r795_t0);
            r795_xn$dontexport$5sIl = function _r795_t3() {
                var _r797_t0, _r797_t1;
                return r795_currentGlyph['dontExport'] = true;
            };
            _r795_t0['gizmo'] = r4_globalTransform;
            _r795_t0['set-width'](r4_WIDTH);
            r795_xn$assignunicode$7Hrq(186);
            r795_include(r4_Miniature('o', 4.2, 0.6));
            r795_include(r795_xn$createstroke$7Hrq()['start-from'](r4_SB, r4_DESCENDER)['set-width'](r4_STROKE, 0)['heads-to'](r4_RIGHTWARD)['line-to'](r4_RIGHTSB, r4_DESCENDER)['heads-to'](r4_RIGHTWARD));
            r795_xn$applytransform$1aao(r4_Upright());
            r795_xn$applytransform$1aao(r4_Translate(-r4_MIDDLE, -r4_XH));
            r795_xn$applytransform$1aao(r4_Scale(0.6));
            r795_xn$applytransform$1aao(r4_Translate(r4_MIDDLE, r4_CAP));
            r795_xn$applytransform$1aao(r4_Italify());
            return void 0;
        });
        r4_createSuperscript(8304, 'zero');
        r4_createSuperscript(185, 'one');
        r4_createSuperscript(178, 'two');
        r4_createSuperscript(179, 'three');
        r4_createSuperscript(8308, 'four');
        r4_createSuperscript(8309, 'five');
        r4_createSuperscript(8310, 'six');
        r4_createSuperscript(8311, 'seven');
        r4_createSuperscript(8312, 'eight');
        r4_createSuperscript(8313, 'nine');
        r4_createSuperscript(688, 'h');
        r4_createSuperscript(690, 'j');
        r4_createSuperscript(691, 'r');
        r4_createSuperscript(695, 'w');
        r4_createSuperscript(696, 'y');
        r4_createSuperscript(737, 'l');
        r4_createSuperscript(738, 's');
        r4_createSuperscript(739, 'x');
        r4_createSuperscript(8305, 'i');
        r4_createSuperscript(8319, 'n');
        r4_createSuperscript(7491, 'a');
        r4_createSuperscript(7495, 'b');
        r4_createSuperscript(7496, 'd');
        r4_createSuperscript(7497, 'e');
        r4_createSuperscript(7501, 'g');
        r4_createSuperscript(7503, 'k');
        r4_createSuperscript(7504, 'm');
        r4_createSuperscript(7506, 'o');
        r4_createSuperscript(7510, 'p');
        r4_createSuperscript(7511, 't');
        r4_createSuperscript(7512, 'u');
        r4_createSuperscript(7515, 'v');
        r4_createSuperscript(7580, 'c');
        r4_createSuperscript(7584, 'f');
        r4_createSuperscript(7611, 'z');
        r4_createSuperscript(7468, 'A');
        r4_createSuperscript(7470, 'B');
        r4_createSuperscript(7472, 'D');
        r4_createSuperscript(7473, 'E');
        r4_createSuperscript(7475, 'G');
        r4_createSuperscript(7476, 'H');
        r4_createSuperscript(7477, 'I');
        r4_createSuperscript(7478, 'J');
        r4_createSuperscript(7479, 'K');
        r4_createSuperscript(7480, 'L');
        r4_createSuperscript(7481, 'M');
        r4_createSuperscript(7482, 'N');
        r4_createSuperscript(7484, 'O');
        r4_createSuperscript(7486, 'P');
        r4_createSuperscript(7487, 'R');
        r4_createSuperscript(7488, 'T');
        r4_createSuperscript(7489, 'U');
        r4_createSuperscript(7490, 'W');
        r4_createSubscript(8320, 'zero');
        r4_createSubscript(8321, 'one');
        r4_createSubscript(8322, 'two');
        r4_createSubscript(8323, 'three');
        r4_createSubscript(8324, 'four');
        r4_createSubscript(8325, 'five');
        r4_createSubscript(8326, 'six');
        r4_createSubscript(8327, 'seven');
        r4_createSubscript(8328, 'eight');
        r4_createSubscript(8329, 'nine');
        r4_createSubscript(8336, 'a');
        r4_createSubscript(8337, 'e');
        r4_createSubscript(8338, 'o');
        r4_createSubscript(8339, 'x');
        r4_createSubscript(8341, 'h');
        r4_createSubscript(8342, 'k');
        r4_createSubscript(8343, 'l');
        r4_createSubscript(8344, 'm');
        r4_createSubscript(8345, 'n');
        r4_createSubscript(8346, 'p');
        r4_createSubscript(8347, 's');
        r4_createSubscript(8348, 't');
        r4_createSubscript(7522, 'i');
        r4_createSubscript(7523, 'r');
        r4_createSubscript(7524, 'u');
        r4_createSubscript(7525, 'v');
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
                _r4_t246 = _r4_t9 < _r4_t8;
                for (; _r4_t246; _r4_t246 = _r4_t9 < _r4_t8) {
                    r4_contour = _r4_t7[_r4_t9];
                    _r4_t10 = r4_contour;
                    _r4_t11 = _r4_t10['length'];
                    _r4_t12 = 0;
                    for (; _r4_t12 < _r4_t11; _r4_t12 = _r4_t12 + 1) {
                        r4_point = _r4_t10[_r4_t12];
                        r4_point['x'] = r4_point['x'] * r4_upmscale;
                        r4_point['y'] = r4_point['y'] * r4_upmscale;
                    }
                    _r4_t247 = _r4_t9 = _r4_t9 + 1;
                }
                _r4_t245 = _r4_t247;
            } else
                _r4_t245 = void 0;
        }
        r4_font['glyf'] = r4_font['glyf']['filter'](function _r4_t244(r801_glyph) {
            var r801_glyph, _r801_t0, _r801_t1;
            return r801_glyph && !r801_glyph['dontExport'];
        });
        r4_font['glyfMap'] = r4_glyphs;
        return r4_font;
    };
}
