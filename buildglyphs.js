var r0_Glyph, r0_Stroke, _r0_t0;

r0_Glyph = require("./support/glyph").Glyph, r0_Stroke = require("./support/stroke").Stroke, 
exports.build = function(r1_para) {
    var r1_para, r1_variantSelector, r1_font, r1_glyphList, r1_glyphs, r1_unicodeGlyphs, r1_globalTransform, r1_ITALICCOR, r1_UPWARD, r1_DOWNWARD, r1_RIGHTWARD, r1_LEFTWARD, r1_DESCENDER, r1_WIDTH, r1_CAP, r1_XH, r1_O, r1_OXHOOK, r1_SB, r1_HOOK, r1_AHOOK, r1_SHOOK, r1_RHOOK, r1_SMOOTH, r1_SMALLSMOOTH, r1_STROKE, r1_DOTSIZE, r1_PERIODSIZE, r1_BARPOS, r1_GBARPOS, r1_FIVEBARPOS, r1_LONGJUT, r1_ACCENT, r1_ACCENTX, r1_XO, r1_CAPO, r1_HALFSTROKE, r1_RIGHTSB, r1_MIDDLE, r1_CAPMIDDLE, r1_CAP_SMOOTH, r1_DOTRADIUS, r1_PERIODRADIUS, r1_SMOOTHA, r1_SMOOTHB, r1_SMALLSMOOTHA, r1_SMALLSMOOTHB, r1_ITALICCORS, r1_EBARPOS, r1_KAPPA, r1_COKAPPA, r1_BKAPPA, r1_CKAPPA, r1_COBKAPPA, r1_KAPPA_HOOK, r1_KAPPA_AHOOK, r1_TAILADJX, r1_TAILADJY, r1_TAILADJKAPPA, r1_TAILADJSX, r1_TAILADJSY, r1_TAILADJSKAPPA, r1_ILBALANCE, r1_JBALANCE, r1_TBALANCE, r1_TBALANCE2, r1_RBALANCE, r1_BASE, r1_MARK, r1_MARKBASE, r1_tm, r1_markAboveLower, r1_markAboveCap, r1_markBelowLower, r1_markBelowZero, r1_capitalMarks, r1_bMarks, r1_eMarks, r1_pMarks, r1_ifMarks, r1_xn$createglyph$7Hrq, r1_xn$selectvariant$7Hrq, r1_mix, r1_xgrid, r1_linreg, r1_fallback, r1_Ring, r1_ORing, r1_leftwardTopSerif, r1_leftwardBottomSerif, r1_rightwardTopSerif, r1_rightwardBottomSerif, r1_xsStrand, r1_sStrand, r1_halfXStrand, r1_xStrand, r1_nBowl, r1_sHookUpper, r1_twoHookUpper, r1_sHookLower, r1_smallo, r1_hbar, r1_vbar, r1_markExtend, r1_markStress, r1_markFine, r1_markHalfStroke, r1_markMiddle, r1_markDotsRadius, r1_aboveMarkTop, r1_aboveMarkBot, r1_belowMarkBot, r1_belowMarkTop, r1_hyphenCenter, r1_parenTop, r1_parenBot, r1_parenMid, r1_parenOutside, r1_parenInside, r1_bracketOutside, r1_bracketInside, r1_braceOutside, r1_braceInside, r1_isAboveMark, r1_code, r1_str, r1_nfd, r1_parts, r1_allFound, r1_hasMarkAbove, r1_j, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16, _r1_t17, _r1_t18, _r1_t19, _r1_t173, _r1_t174, _r1_t180, _r1_t181, _r1_t182, _r1_t183, _r1_t184;
    for (r1_variantSelector = r1_para.variantSelector, r1_font = require("./empty.json"), 
    r1_glyphList = r1_font.glyf, r1_glyphs = {
        ".notdef": r1_glyphList[0]
    }, r1_unicodeGlyphs = [], r1_globalTransform = {
        xx: 1,
        yx: Math.tan(r1_para.italicangle / 180 * Math.PI),
        xy: 0,
        yy: 1,
        x: 0,
        y: 0
    }, r1_ITALICCOR = 1 / Math.sqrt(1 - r1_globalTransform.yx * r1_globalTransform.yx), 
    r1_UPWARD = {
        x: -r1_ITALICCOR,
        y: 0
    }, r1_DOWNWARD = {
        x: r1_ITALICCOR,
        y: 0
    }, r1_RIGHTWARD = {
        x: r1_globalTransform.yx,
        y: 1
    }, r1_LEFTWARD = {
        x: -r1_globalTransform.yx,
        y: -1
    }, r1_DESCENDER = r1_para.descender, r1_WIDTH = r1_para.width, r1_CAP = r1_para.cap, 
    r1_XH = r1_para.xheight, r1_O = r1_para.o, r1_OXHOOK = r1_para.oxhook, r1_SB = r1_para.sb, 
    r1_HOOK = r1_para.hook, r1_AHOOK = r1_para.ahook, r1_SHOOK = r1_para.shook, r1_RHOOK = r1_para.rhook, 
    r1_SMOOTH = r1_para.smooth, r1_SMALLSMOOTH = r1_para.smallsmooth, r1_STROKE = r1_para.stroke, 
    r1_DOTSIZE = r1_para.dotsize, r1_PERIODSIZE = r1_para.periodsize, r1_BARPOS = r1_para.barpos, 
    r1_GBARPOS = r1_para.gbarpos, r1_FIVEBARPOS = r1_para.fivebarpos, r1_LONGJUT = r1_para.longjut, 
    r1_ACCENT = r1_para.accent, r1_ACCENTX = r1_para.accentx, r1_XO = r1_XH - r1_O, 
    r1_CAPO = r1_CAP - r1_O, r1_HALFSTROKE = r1_STROKE / 2, r1_RIGHTSB = r1_WIDTH - r1_SB, 
    r1_MIDDLE = r1_WIDTH / 2, r1_CAPMIDDLE = r1_CAP / 2, r1_CAP_SMOOTH = r1_CAP - r1_SMOOTH, 
    r1_DOTRADIUS = r1_DOTSIZE / 2, r1_PERIODRADIUS = r1_PERIODSIZE / 2, r1_SMOOTHA = r1_SMOOTH - r1_globalTransform.yx * r1_para.smoothadjust, 
    r1_SMOOTHB = r1_SMOOTH + r1_globalTransform.yx * r1_para.smoothadjust, r1_SMALLSMOOTHA = r1_SMALLSMOOTH - r1_globalTransform.yx * r1_para.smoothadjust, 
    r1_SMALLSMOOTHB = r1_SMALLSMOOTH + r1_globalTransform.yx * r1_para.smoothadjust, 
    r1_ITALICCORS = r1_STROKE * r1_globalTransform.yx, r1_EBARPOS = r1_para.ebarpos || r1_BARPOS, 
    r1_KAPPA = r1_para.kappa, r1_COKAPPA = 1 - r1_KAPPA, r1_BKAPPA = r1_para.bkappa || r1_KAPPA + .1, 
    r1_CKAPPA = r1_para.ckappa || r1_BKAPPA, r1_COBKAPPA = 1 - r1_BKAPPA, r1_KAPPA_HOOK = r1_para.kappa_hook || r1_BKAPPA + .1, 
    r1_KAPPA_AHOOK = r1_para.kappa_ahook || r1_KAPPA_HOOK, r1_TAILADJX = .2 * r1_WIDTH, 
    r1_TAILADJY = .25 * r1_XH, r1_TAILADJKAPPA = .75, r1_TAILADJSX = .2 * r1_WIDTH, 
    r1_TAILADJSY = 0, r1_TAILADJSKAPPA = .75, r1_ILBALANCE = .04 * r1_LONGJUT, r1_JBALANCE = r1_para.jbalance || r1_HALFSTROKE + r1_ILBALANCE, 
    r1_TBALANCE = r1_para.tbalance || r1_JBALANCE, r1_TBALANCE2 = r1_para.tbalance2 || r1_TBALANCE, 
    r1_RBALANCE = r1_para.rbalance || .3 * r1_JBALANCE, r1_BASE = "base", r1_MARK = "mark", 
    r1_MARKBASE = "markbase", r1_tm = function(r2_anchor) {
        var r2_anchor;
        return {
            x: r2_anchor.x * r1_globalTransform.xx + r2_anchor.y * r1_globalTransform.yx + r1_globalTransform.x,
            y: r2_anchor.x * r1_globalTransform.xy + r2_anchor.y * r1_globalTransform.yy + r1_globalTransform.y,
            type: r2_anchor.type
        };
    }, r1_markAboveLower = {
        anchors: {
            above: r1_tm({
                x: r1_MIDDLE,
                y: r1_XH,
                type: r1_BASE
            })
        }
    }, r1_markAboveCap = {
        anchors: {
            above: r1_tm({
                x: r1_MIDDLE,
                y: .97 * r1_CAP,
                type: r1_BASE
            })
        }
    }, r1_markBelowLower = {
        anchors: {
            below: r1_tm({
                x: r1_MIDDLE,
                y: r1_DESCENDER,
                type: r1_BASE
            })
        }
    }, r1_markBelowZero = {
        anchors: {
            below: r1_tm({
                x: r1_MIDDLE,
                y: 0,
                type: r1_BASE
            })
        }
    }, r1_capitalMarks = {
        anchors: {
            above: r1_markAboveCap.anchors.above,
            below: r1_markBelowZero.anchors.below
        }
    }, r1_bMarks = {
        anchors: {
            above: r1_markAboveCap.anchors.above,
            below: r1_markBelowZero.anchors.below
        }
    }, r1_eMarks = {
        anchors: {
            above: r1_markAboveLower.anchors.above,
            below: r1_markBelowZero.anchors.below
        }
    }, r1_pMarks = {
        anchors: {
            above: r1_markAboveLower.anchors.above,
            below: r1_markBelowLower.anchors.below
        }
    }, r1_ifMarks = {
        anchors: {
            above: r1_markAboveCap.anchors.above,
            below: r1_markBelowLower.anchors.below
        }
    }, r0_Stroke.bindParameters(r1_para), r1_font.name.fontFamily = r1_para.family, 
    r1_font.name.fontSubFamily = r1_para.style, r1_font.name.preferredFamily = r1_para.family, 
    r1_font.name.preferredSubFamily = r1_para.style, r1_font.name.uniqueSubFamily = r1_para.family + " " + r1_para.style + " " + r1_para.version, 
    r1_font.name.version = r1_para.version, _r1_t5 = r1_font.name, _r1_t6 = "fullName", 
    _r1_t7 = "Regular" !== r1_para.style ? r1_para.family + " " + r1_para.style : r1_para.family, 
    _r1_t5[_r1_t6] = _r1_t7, r1_font.name.postScriptName = r1_font.name.fullName.replace(/ /g, "-"), 
    r1_font.name.copyright = r1_para.copyright, r1_font["OS/2"].usWeightClass = r1_para.weight, 
    r1_font["OS/2"].bProportion = 9, r1_font["OS/2"].bWeight = 1 + r1_para.weight / 100, 
    _r1_t8 = r1_font["OS/2"], _r1_t9 = "fsSelection", _r1_t10 = r1_para.isBold ? 32 : 0, 
    _r1_t11 = r1_para.isItalic ? 1 : 0, _r1_t12 = _r1_t10 + _r1_t11, _r1_t13 = r1_para.isBold || r1_para.isItalic ? 0 : 64, 
    _r1_t14 = _r1_t12 + _r1_t13, _r1_t15 = 128, _r1_t8[_r1_t9] = _r1_t14 + _r1_t15, 
    _r1_t16 = r1_font.head, _r1_t17 = "macStyle", _r1_t18 = r1_para.isBold ? 1 : 0, 
    _r1_t19 = r1_para.isItalic ? 2 : 0, _r1_t16[_r1_t17] = _r1_t18 + _r1_t19, r1_font.hhea.ascent = r1_CAP, 
    r1_font["OS/2"].usWinAscent = r1_CAP + .1 * r1_CAP, r1_font["OS/2"].sTypoAscender = r1_CAP, 
    r1_font.hhea.descent = r1_DESCENDER, r1_font["OS/2"].usWinDescent = Math.abs(r1_DESCENDER) + .1 * r1_CAP, 
    r1_font["OS/2"].sTypoDescender = r1_DESCENDER, r1_font.hhea.lineGap = .2 * r1_CAP, 
    r1_font["OS/2"].sTypoLineGap = .2 * r1_CAP, r1_font["OS/2"].sxHeight = r1_XH, r1_font.post.italicAnvle = 0 - r1_para.italicangle, 
    r1_xn$createglyph$7Hrq = function(r7_name, r7_actions) {
        var r7_name, r7_actions, r7_glyphObject;
        return r7_glyphObject = new r0_Glyph(r7_name), r1_glyphList.push(r7_glyphObject), 
        r1_glyphs[r7_name] = r7_glyphObject, r7_actions.call(r7_glyphObject), r7_glyphObject;
    }, r1_xn$selectvariant$7Hrq = function(r8_glyphid, r8_unicode, r8_default) {
        var r8_glyphid, r8_unicode, r8_default, r8_variant, r8_chosenGlyph;
        return r8_variant = r1_variantSelector[r8_glyphid] || r8_default, r8_chosenGlyph = r1_glyphs[r8_glyphid + "." + r8_variant], 
        r1_glyphs[r8_glyphid] = r8_chosenGlyph, r8_unicode ? r8_chosenGlyph["assign-unicode"](r8_unicode) : void 0;
    }, r1_xn$createglyph$7Hrq("space", function() {
        var r10_currentGlyph, r10_xn$setwidth$9Jrj, r10_xn$assignunicode$7Hrq, r10_xn$startfrom$1aao, r10_xn$lineto$5sIl, r10_xn$curveto$1aao, r10_xn$cubicto$1aao, r10_xn$putshapes$9Jrj, r10_xn$reverselast$3qIs, r10_include, r10_xn$createstroke$7Hrq, r10_xn$setanchor$9Jrj, _r10_t0;
        return _r10_t0 = this, r10_currentGlyph = _r10_t0, r10_xn$setwidth$9Jrj = _r10_t0["set-width"].bind(_r10_t0), 
        r10_xn$assignunicode$7Hrq = function(r11_code) {
            var r11_code;
            return r10_currentGlyph["assign-unicode"](r11_code), r1_unicodeGlyphs[r10_currentGlyph.unicode[r10_currentGlyph.unicode.length - 1]] = r10_currentGlyph;
        }, r10_xn$startfrom$1aao = _r10_t0["start-from"].bind(_r10_t0), r10_xn$lineto$5sIl = _r10_t0["line-to"].bind(_r10_t0), 
        r10_xn$curveto$1aao = _r10_t0["curve-to"].bind(_r10_t0), r10_xn$cubicto$1aao = _r10_t0["cubic-to"].bind(_r10_t0), 
        r10_xn$putshapes$9Jrj = _r10_t0["put-shapes"].bind(_r10_t0), r10_xn$reverselast$3qIs = _r10_t0["reverse-last"].bind(_r10_t0), 
        r10_include = _r10_t0.include.bind(_r10_t0), r10_xn$createstroke$7Hrq = _r10_t0["create-stroke"].bind(_r10_t0), 
        r10_xn$setanchor$9Jrj = _r10_t0["set-anchor"].bind(_r10_t0), _r10_t0.gizmo = r1_globalTransform, 
        _r10_t0["set-width"](r1_WIDTH), r10_xn$setwidth$9Jrj(r1_WIDTH), r10_xn$assignunicode$7Hrq(" "), 
        void r10_include(r1_eMarks);
    }), r1_mix = function(r12_a, r12_b, r12_p) {
        var r12_a, r12_b, r12_p;
        return r12_a + (r12_b - r12_a) * r12_p;
    }, r1_xgrid = function(r13_p) {
        var r13_p;
        return r1_mix(r1_SB, r1_RIGHTSB, r13_p);
    }, r1_linreg = function(r14_x0, r14_y0, r14_x1, r14_y1, r14_x) {
        var r14_x0, r14_y0, r14_x1, r14_y1, r14_x;
        return r14_y0 + (r14_x - r14_x0) * (r14_y1 - r14_y0) / (r14_x1 - r14_x0);
    }, r1_fallback = function() {
        var r15_j, _r15_t0, _r15_t1, _r15_t2, _r15_t3;
        for (r15_j = 0, _r15_t1 = r15_j < _r15_t0.length; _r15_t1; _r15_t1 = r15_j < _r15_t0.length) {
            if (void 0 !== _r15_t0[r15_j]) return _r15_t0[r15_j];
            _r15_t3 = void 0, _r15_t2 = r15_j += 1;
        }
        return _r15_t2;
    }, r1_Ring = function(r16_u, r16_d, r16_l, r16_r) {
        var r16_u, r16_d, r16_l, r16_r, r16_my, r16_mx, r16_s;
        return r16_my = (r16_u + r16_d) / 2, r16_mx = (r16_l + r16_r) / 2, r16_s = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r16_mx, r16_d)["cubic-to"](r16_mx + (r16_l - r16_mx) * r1_CKAPPA, r16_d, r16_l, r16_my + (r16_d - r16_my) * r1_CKAPPA, r16_l, r16_my)["cubic-to"](r16_l, r16_my + (r16_u - r16_my) * r1_CKAPPA, r16_mx + (r16_l - r16_mx) * r1_CKAPPA, r16_u, r16_mx, r16_u)["cubic-to"](r16_mx + (r16_r - r16_mx) * r1_CKAPPA, r16_u, r16_r, r16_my + (r16_u - r16_my) * r1_CKAPPA, r16_r, r16_my)["cubic-to"](r16_r, r16_my + (r16_d - r16_my) * r1_CKAPPA, r16_mx + (r16_r - r16_mx) * r1_CKAPPA, r16_d, r16_mx, r16_d), 
        r16_s.points;
    }, r1_ORing = function(r17_u, r17_d, r17_l, r17_r, r17_smooth) {
        var r17_u, r17_d, r17_l, r17_r, r17_smooth, r17_myu, r17_myd, r17_mx, r17_s;
        return r17_myu = r17_u - r17_smooth, r17_myd = r17_d + r17_smooth, r17_mx = (r17_l + r17_r) / 2, 
        r17_s = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r17_mx, r17_d)["cubic-to"](r17_mx + (r17_l - r17_mx) * r1_CKAPPA, r17_d, r17_l, r17_myd + (r17_d - r17_myd) * r1_CKAPPA, r17_l, r17_myd)["line-to"](r17_l, r17_myu)["cubic-to"](r17_l, r17_myu + (r17_u - r17_myu) * r1_CKAPPA, r17_mx + (r17_l - r17_mx) * r1_CKAPPA, r17_u, r17_mx, r17_u)["cubic-to"](r17_mx + (r17_r - r17_mx) * r1_CKAPPA, r17_u, r17_r, r17_myu + (r17_u - r17_myu) * r1_CKAPPA, r17_r, r17_myu)["line-to"](r17_r, r17_myd)["cubic-to"](r17_r, r17_myd + (r17_d - r17_myd) * r1_CKAPPA, r17_mx + (r17_r - r17_mx) * r1_CKAPPA, r17_d, r17_mx, r17_d), 
        r17_s.points;
    }, r1_leftwardTopSerif = function(r18_x, r18_y, r18_length) {
        var r18_x, r18_y, r18_length;
        return new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r18_x + r1_HALFSTROKE, r18_y)["heads-to"](r1_LEFTWARD)["set-width"](r1_STROKE, 0)["line-to"](r18_x - r18_length - r1_globalTransform.yx * r1_STROKE, r18_y)["to-outline"]();
    }, r1_leftwardBottomSerif = function(r19_x, r19_y, r19_length) {
        var r19_x, r19_y, r19_length;
        return new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r19_x + r1_HALFSTROKE, r19_y)["heads-to"](r1_LEFTWARD)["set-width"](0, r1_STROKE)["line-to"](r19_x - r19_length + r1_globalTransform.yx * r1_STROKE, r19_y)["to-outline"]();
    }, r1_rightwardTopSerif = function(r20_x, r20_y, r20_length) {
        var r20_x, r20_y, r20_length;
        return new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r20_x - r1_HALFSTROKE, r20_y)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r20_x + r20_length - r1_globalTransform.yx * r1_STROKE, r20_y)["to-outline"]();
    }, r1_rightwardBottomSerif = function(r21_x, r21_y, r21_length) {
        var r21_x, r21_y, r21_length;
        return new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r21_x - r1_HALFSTROKE, r21_y)["heads-to"](r1_RIGHTWARD)["set-width"](r1_STROKE, 0)["line-to"](r21_x + r21_length + r1_globalTransform.yx * r1_STROKE, r21_y)["to-outline"]();
    }, r1_xsStrand = function(r22__xleft, r22_yleft, r22__xright, r22_yright, r22__halfstroke0, r22__halfstroke1, r22__ess, r22__expansion, r22__roundp) {
        var r22__xleft, r22_yleft, r22__xright, r22_yright, r22__halfstroke0, r22__halfstroke1, r22__ess, r22__expansion, r22__roundp, r22_expansion, r22_halfstroke0, r22_halfstroke1, r22_ess, r22_yItalicCorrection, r22_xItalicCorrection, r22_roundsize, r22_roundleft, r22_roundright, r22_xleft, r22_xright, r22_sxleft, r22_sxright, r22_syleft, r22_syright, _r22_t0, _r22_t1;
        return r22_expansion = r22__expansion || .25, r22_halfstroke0 = r22__halfstroke0 || r1_HALFSTROKE, 
        r22_halfstroke1 = r22__halfstroke1 || r1_HALFSTROKE, r22_ess = r22__ess || (r22_halfstroke0 + r22_halfstroke1) / 2, 
        r22_yItalicCorrection = .985 * r1_globalTransform.yx, r22_xItalicCorrection = 1 / Math.sqrt(1 - r22_yItalicCorrection * r22_yItalicCorrection), 
        _r22_t0 = r22__roundp || .4 * r1_SMOOTHA, _r22_t1 = r22_yright > r22_yleft ? -1 : 1, 
        r22_roundsize = _r22_t0 * _r22_t1, r22_roundleft = r22_yleft - r22_roundsize, r22_roundright = r22_yright + r22_roundsize, 
        r22_xleft = r22__xleft + r22_halfstroke0 * r22_xItalicCorrection, r22_xright = r22__xright - r22_halfstroke1 * r22_xItalicCorrection, 
        r22_sxleft = r1_mix(r22_xleft, r22_xright, .5 - r22_expansion), r22_sxright = r1_mix(r22_xleft, r22_xright, .5 + r22_expansion), 
        r22_syleft = r1_mix(r22_roundleft, r22_roundright, .5 - r22_expansion), r22_syright = r1_mix(r22_roundleft, r22_roundright, .5 + r22_expansion), 
        new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r22_xleft, r22_yleft - r22_halfstroke0 * r22_yItalicCorrection)["set-width"](r22_halfstroke0, r22_halfstroke0)["curve-to"](r22_xleft, r22_roundleft, r22_sxleft, r22_syleft)["set-width"](r22_ess, r22_ess)["line-to"](r22_sxright, r22_syright)["curve-to"](r22_xright, r22_roundright, r22_xright, r22_yright + r22_halfstroke1 * r22_yItalicCorrection)["set-width"](r22_halfstroke1, r22_halfstroke1)["to-outline"]();
    }, r1_sStrand = function(r23_yleft, r23_yright, r23__expansion) {
        var r23_yleft, r23_yright, r23__expansion;
        return r1_xsStrand(r1_SB, r23_yleft, r1_RIGHTSB, r23_yright, r1_HALFSTROKE, r1_HALFSTROKE, r1_HALFSTROKE, r23__expansion, .4 * r1_SMOOTHA);
    }, r1_halfXStrand = function(r24__leftx, r24_lefty, r24_rightx, r24_righty, r24_turn, r24_straight, r24_tension, r24__fine) {
        var r24__leftx, r24_lefty, r24_rightx, r24_righty, r24_turn, r24_straight, r24_tension, r24__fine, r24_leftx, r24_fine, r24_turnyleft, r24_cyleft, r24_straightxleft, r24_straightyleft, _r24_t0, _r24_t1, _r24_t2, _r24_t3, _r24_t4, _r24_t5, _r24_t6, _r24_t7, _r24_t8, _r24_t9, _r24_t10, _r24_t11, _r24_t12, _r24_t13, _r24_t14, _r24_t15, _r24_t16, _r24_t17, _r24_t18, _r24_t19, _r24_t20, _r24_t21, _r24_t22, _r24_t23, _r24_t24, _r24_t25, _r24_t26, _r24_t27, _r24_t28, _r24_t29;
        return _r24_t0 = r24__leftx, _r24_t1 = r1_HALFSTROKE, _r24_t2 = r24_rightx > r24__leftx ? 1 : -1, 
        _r24_t3 = _r24_t1 * _r24_t2, r24_leftx = _r24_t0 + _r24_t3, r24_fine = .5 * (r24__fine || r1_STROKE), 
        r24_turnyleft = r1_mix(r24_lefty, r24_righty, r24_turn), r24_cyleft = r1_mix(r24_turnyleft, r24_righty, r24_tension), 
        r24_straightxleft = r1_mix(r24_leftx, r24_rightx, r24_straight), r24_straightyleft = r1_mix(r24_cyleft, r24_righty, r24_straight), 
        _r24_t4 = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r24_leftx, r24_lefty)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE), 
        _r24_t5 = _r24_t4["heads-to"], _r24_t6 = r24_righty > r24_lefty ? r1_UPWARD : r1_DOWNWARD, 
        _r24_t7 = _r24_t5.call(_r24_t4, _r24_t6), _r24_t8 = _r24_t7["line-to"], _r24_t9 = r24_leftx, 
        _r24_t10 = r24_turnyleft, _r24_t11 = _r24_t8.call(_r24_t7, _r24_t9, _r24_t10), _r24_t12 = _r24_t11["heads-to"], 
        _r24_t13 = r24_righty > r24_lefty ? r1_UPWARD : r1_DOWNWARD, _r24_t14 = _r24_t12.call(_r24_t11, _r24_t13), 
        _r24_t15 = _r24_t14["curve-to"], _r24_t16 = r24_leftx, _r24_t17 = r24_cyleft, _r24_t18 = r24_straightxleft, 
        _r24_t19 = r24_straightyleft, _r24_t20 = _r24_t15.call(_r24_t14, _r24_t16, _r24_t17, _r24_t18, _r24_t19), 
        _r24_t21 = _r24_t20["set-width"], _r24_t22 = r24_fine, _r24_t23 = r24_fine, _r24_t24 = _r24_t21.call(_r24_t20, _r24_t22, _r24_t23), 
        _r24_t25 = _r24_t24["line-to"], _r24_t26 = r24_rightx, _r24_t27 = r24_righty, _r24_t28 = _r24_t25.call(_r24_t24, _r24_t26, _r24_t27), 
        _r24_t29 = _r24_t28["to-outline"], _r24_t29.call(_r24_t28);
    }, r1_xStrand = function(r25__leftx, r25_lefty, r25__rightx, r25_righty, r25_turn, r25_straight, r25_tension) {
        var r25__leftx, r25_lefty, r25__rightx, r25_righty, r25_turn, r25_straight, r25_tension, r25_middlex, r25_middley;
        return r25_middlex = r1_mix(r25__leftx, r25__rightx, .5), r25_middley = r1_mix(r25_lefty, r25_righty, .5), 
        r1_halfXStrand(r25__leftx, r25_lefty, r25_middlex, r25_middley, r25_turn, r25_straight, r25_tension).concat(r1_halfXStrand(r25__rightx, r25_righty, r25_middlex, r25_middley, r25_turn, r25_straight, r25_tension));
    }, r1_nBowl = function(r26_left, r26_middle, r26_right, r26_fine) {
        var r26_left, r26_middle, r26_right, r26_fine, r26_bandLeft, r26_bandRight;
        return r26_bandLeft = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r26_right, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r26_right, r1_XH - r1_SMALLSMOOTHB)["arc-vh-to"](r26_middle, r1_XO)["heads-to"](r1_LEFTWARD)["to-outline"](), 
        r26_bandRight = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r26_middle, r1_XO - r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r26_left, r1_XH - r1_SMALLSMOOTHA)["heads-to"](r1_DOWNWARD)["set-width"](0, r26_fine)["to-outline"](), 
        r26_bandLeft.concat(r26_bandRight);
    }, r1_sHookUpper = function(r27_top, r27_smooth, r27_hook, r27__middle) {
        var r27_top, r27_smooth, r27_hook, r27__middle, r27_middle;
        return r27_middle = r27__middle || r1_MIDDLE, new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r1_RIGHTSB - r1_OXHOOK, r27_top - r27_hook)["set-width"](r1_STROKE, 0)["curve-to"](r1_mix(r27_middle, r1_RIGHTSB, r1_KAPPA_HOOK), r27_top - r1_O, r27_middle, r27_top - r1_O)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB, r27_top - r27_smooth)["to-outline"]();
    }, r1_twoHookUpper = function(r28_top, r28_smooth, r28_hook, r28__middle) {
        var r28_top, r28_smooth, r28_hook, r28__middle, r28_middle;
        return r28_middle = r28__middle || r1_MIDDLE, new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r1_SB + r1_OXHOOK, r28_top - r28_hook)["set-width"](0, r1_STROKE)["curve-to"](r1_mix(r28_middle, r1_SB, r1_KAPPA_HOOK), r28_top - r1_O, r28_middle, r28_top - r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB, r28_top - r28_smooth)["to-outline"]();
    }, r1_sHookLower = function(r29_bottom, r29_smooth, r29_hook, r29__middle) {
        var r29_bottom, r29_smooth, r29_hook, r29__middle, r29_middle;
        return r29_middle = r29__middle || r1_MIDDLE, new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r1_RIGHTSB, r29_smooth)["set-width"](0, r1_STROKE)["arc-vh-to"](r29_middle, r29_bottom + r1_O)["heads-to"](r1_LEFTWARD)["curve-to"](r1_mix(r29_middle, r1_SB, r1_KAPPA_HOOK), r29_bottom + r1_O, r1_SB + r1_OXHOOK, r29_bottom + r29_hook)["to-outline"]();
    }, r1_smallo = function(r30_u, r30_d, r30_l, r30_r) {
        var r30_u, r30_d, r30_l, r30_r, r30_middle, r30_ymiddlea, r30_ymiddleb;
        return r30_middle = (r30_l + r30_r) / 2, r30_u - r30_d > r1_SMALLSMOOTHA + r1_SMALLSMOOTHB ? new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r30_middle, r30_u - r1_O)["set-width"](r1_STROKE, 0)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r30_l + r1_O, r30_u - r1_SMALLSMOOTHA)["line-to"](r30_l + r1_O, r30_d + r1_SMALLSMOOTHB)["arc-vh-to"](r30_middle, r30_d + r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r30_r - r1_O, r30_d + r1_SMALLSMOOTHA)["line-to"](r30_r - r1_O, r30_u - r1_SMALLSMOOTHB)["arc-vh-to"](r30_middle, r30_u - r1_O)["heads-to"](r1_LEFTWARD)["to-outline"]() : (r30_ymiddlea = (r30_u - r1_SMALLSMOOTHA + r30_d + r1_SMALLSMOOTHB) / 2, 
        r30_ymiddleb = (r30_u - r1_SMALLSMOOTHB + r30_d + r1_SMALLSMOOTHA) / 2, new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r30_middle, r30_u - r1_O)["set-width"](r1_STROKE, 0)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r30_l + r1_O, r30_ymiddlea)["arc-vh-to"](r30_middle, r30_d + r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r30_r - r1_O, r30_ymiddleb)["arc-vh-to"](r30_middle, r30_u - r1_O)["heads-to"](r1_LEFTWARD)["to-outline"]());
    }, r1_hbar = function(r31_xleft, r31_xright, r31_y, r31__fine) {
        var r31_xleft, r31_xright, r31_y, r31__fine, r31_fine;
        return r31_fine = (r31__fine || r1_STROKE) / 2, new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r31_xleft, r31_y)["heads-to"](r1_RIGHTWARD)["set-width"](r31_fine, r31_fine)["line-to"](r31_xright, r31_y)["heads-to"](r1_RIGHTWARD)["to-outline"]();
    }, r1_vbar = function(r32_x, r32_ydown, r32_yup, r32__fine) {
        var r32_x, r32_ydown, r32_yup, r32__fine, r32_fine, _r32_t0, _r32_t1, _r32_t2, _r32_t3, _r32_t4, _r32_t5, _r32_t6, _r32_t7, _r32_t8, _r32_t9, _r32_t10, _r32_t11, _r32_t12, _r32_t13, _r32_t14, _r32_t15;
        return r32_fine = (r32__fine || r1_STROKE) / 2, _r32_t0 = new r0_Stroke()["set-transform"](r1_globalTransform)["start-from"](r32_x, r32_ydown), 
        _r32_t1 = _r32_t0["heads-to"], _r32_t2 = r32_yup > r32_ydown ? r1_UPWARD : r1_DOWNWARD, 
        _r32_t3 = _r32_t1.call(_r32_t0, _r32_t2), _r32_t4 = _r32_t3["set-width"], _r32_t5 = r32_fine, 
        _r32_t6 = r32_fine, _r32_t7 = _r32_t4.call(_r32_t3, _r32_t5, _r32_t6), _r32_t8 = _r32_t7["line-to"], 
        _r32_t9 = r32_x, _r32_t10 = r32_yup, _r32_t11 = _r32_t8.call(_r32_t7, _r32_t9, _r32_t10), 
        _r32_t12 = _r32_t11["heads-to"], _r32_t13 = r32_yup > r32_ydown ? r1_UPWARD : r1_DOWNWARD, 
        _r32_t14 = _r32_t12.call(_r32_t11, _r32_t13), _r32_t15 = _r32_t14["to-outline"], 
        _r32_t15.call(_r32_t14);
    }, r1_markExtend = .5 * r1_ACCENTX, r1_markStress = .5 * Math.min(r1_STROKE, .6 * r1_ACCENT), 
    r1_markFine = .8 * r1_markStress, r1_markHalfStroke = r1_mix(r1_markFine, r1_markStress, .5), 
    r1_markMiddle = -r1_MIDDLE, r1_markDotsRadius = r1_DOTRADIUS * r1_markStress / r1_HALFSTROKE, 
    r1_aboveMarkTop = r1_XH + 1.375 * r1_ACCENT, r1_aboveMarkBot = r1_XH + .35 * r1_ACCENT, 
    r1_belowMarkBot = 0 - 1.375 * r1_ACCENT, r1_belowMarkTop = 0 - .35 * r1_ACCENT, 
    r1_xn$createglyph$7Hrq("dotAbove", function() {
        var r34_currentGlyph, r34_xn$setwidth$9Jrj, r34_xn$assignunicode$7Hrq, r34_xn$startfrom$1aao, r34_xn$lineto$5sIl, r34_xn$curveto$1aao, r34_xn$cubicto$1aao, r34_xn$putshapes$9Jrj, r34_xn$reverselast$3qIs, r34_include, r34_xn$createstroke$7Hrq, r34_xn$setanchor$9Jrj, _r34_t0;
        return _r34_t0 = this, r34_currentGlyph = _r34_t0, r34_xn$setwidth$9Jrj = _r34_t0["set-width"].bind(_r34_t0), 
        r34_xn$assignunicode$7Hrq = function(r35_code) {
            var r35_code;
            return r34_currentGlyph["assign-unicode"](r35_code), r1_unicodeGlyphs[r34_currentGlyph.unicode[r34_currentGlyph.unicode.length - 1]] = r34_currentGlyph;
        }, r34_xn$startfrom$1aao = _r34_t0["start-from"].bind(_r34_t0), r34_xn$lineto$5sIl = _r34_t0["line-to"].bind(_r34_t0), 
        r34_xn$curveto$1aao = _r34_t0["curve-to"].bind(_r34_t0), r34_xn$cubicto$1aao = _r34_t0["cubic-to"].bind(_r34_t0), 
        r34_xn$putshapes$9Jrj = _r34_t0["put-shapes"].bind(_r34_t0), r34_xn$reverselast$3qIs = _r34_t0["reverse-last"].bind(_r34_t0), 
        r34_include = _r34_t0.include.bind(_r34_t0), r34_xn$createstroke$7Hrq = _r34_t0["create-stroke"].bind(_r34_t0), 
        r34_xn$setanchor$9Jrj = _r34_t0["set-anchor"].bind(_r34_t0), _r34_t0.gizmo = r1_globalTransform, 
        _r34_t0["set-width"](r1_WIDTH), r34_xn$setwidth$9Jrj(0), r34_xn$assignunicode$7Hrq(775), 
        r34_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        void r34_xn$putshapes$9Jrj([ r1_Ring(r1_XH + r1_ACCENT + r1_DOTRADIUS, r1_XH + r1_ACCENT - r1_DOTRADIUS, r1_markMiddle - r1_DOTRADIUS, r1_markMiddle + r1_DOTRADIUS) ]);
    }), r1_xn$createglyph$7Hrq("dieresisAbove", function() {
        var r37_currentGlyph, r37_xn$setwidth$9Jrj, r37_xn$assignunicode$7Hrq, r37_xn$startfrom$1aao, r37_xn$lineto$5sIl, r37_xn$curveto$1aao, r37_xn$cubicto$1aao, r37_xn$putshapes$9Jrj, r37_xn$reverselast$3qIs, r37_include, r37_xn$createstroke$7Hrq, r37_xn$setanchor$9Jrj, _r37_t0;
        return _r37_t0 = this, r37_currentGlyph = _r37_t0, r37_xn$setwidth$9Jrj = _r37_t0["set-width"].bind(_r37_t0), 
        r37_xn$assignunicode$7Hrq = function(r38_code) {
            var r38_code;
            return r37_currentGlyph["assign-unicode"](r38_code), r1_unicodeGlyphs[r37_currentGlyph.unicode[r37_currentGlyph.unicode.length - 1]] = r37_currentGlyph;
        }, r37_xn$startfrom$1aao = _r37_t0["start-from"].bind(_r37_t0), r37_xn$lineto$5sIl = _r37_t0["line-to"].bind(_r37_t0), 
        r37_xn$curveto$1aao = _r37_t0["curve-to"].bind(_r37_t0), r37_xn$cubicto$1aao = _r37_t0["cubic-to"].bind(_r37_t0), 
        r37_xn$putshapes$9Jrj = _r37_t0["put-shapes"].bind(_r37_t0), r37_xn$reverselast$3qIs = _r37_t0["reverse-last"].bind(_r37_t0), 
        r37_include = _r37_t0.include.bind(_r37_t0), r37_xn$createstroke$7Hrq = _r37_t0["create-stroke"].bind(_r37_t0), 
        r37_xn$setanchor$9Jrj = _r37_t0["set-anchor"].bind(_r37_t0), _r37_t0.gizmo = r1_globalTransform, 
        _r37_t0["set-width"](r1_WIDTH), r37_xn$setwidth$9Jrj(0), r37_xn$assignunicode$7Hrq(776), 
        r37_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        void r37_xn$putshapes$9Jrj([ r1_Ring(r1_XH + r1_ACCENT + r1_markDotsRadius, r1_XH + r1_ACCENT - r1_markDotsRadius, r1_markMiddle - r1_markDotsRadius - r1_markExtend, r1_markMiddle + r1_markDotsRadius - r1_markExtend), r1_Ring(r1_XH + r1_ACCENT + r1_markDotsRadius, r1_XH + r1_ACCENT - r1_markDotsRadius, r1_markMiddle - r1_markDotsRadius + r1_markExtend, r1_markMiddle + r1_markDotsRadius + r1_markExtend) ]);
    }), r1_xn$createglyph$7Hrq("ringAbove", function() {
        var r40_currentGlyph, r40_xn$setwidth$9Jrj, r40_xn$assignunicode$7Hrq, r40_xn$startfrom$1aao, r40_xn$lineto$5sIl, r40_xn$curveto$1aao, r40_xn$cubicto$1aao, r40_xn$putshapes$9Jrj, r40_xn$reverselast$3qIs, r40_include, r40_xn$createstroke$7Hrq, r40_xn$setanchor$9Jrj, r40_radiusOut, r40_radiusIn, _r40_t0;
        return _r40_t0 = this, r40_currentGlyph = _r40_t0, r40_xn$setwidth$9Jrj = _r40_t0["set-width"].bind(_r40_t0), 
        r40_xn$assignunicode$7Hrq = function(r41_code) {
            var r41_code;
            return r40_currentGlyph["assign-unicode"](r41_code), r1_unicodeGlyphs[r40_currentGlyph.unicode[r40_currentGlyph.unicode.length - 1]] = r40_currentGlyph;
        }, r40_xn$startfrom$1aao = _r40_t0["start-from"].bind(_r40_t0), r40_xn$lineto$5sIl = _r40_t0["line-to"].bind(_r40_t0), 
        r40_xn$curveto$1aao = _r40_t0["curve-to"].bind(_r40_t0), r40_xn$cubicto$1aao = _r40_t0["cubic-to"].bind(_r40_t0), 
        r40_xn$putshapes$9Jrj = _r40_t0["put-shapes"].bind(_r40_t0), r40_xn$reverselast$3qIs = _r40_t0["reverse-last"].bind(_r40_t0), 
        r40_include = _r40_t0.include.bind(_r40_t0), r40_xn$createstroke$7Hrq = _r40_t0["create-stroke"].bind(_r40_t0), 
        r40_xn$setanchor$9Jrj = _r40_t0["set-anchor"].bind(_r40_t0), _r40_t0.gizmo = r1_globalTransform, 
        _r40_t0["set-width"](r1_WIDTH), r40_xn$setwidth$9Jrj(0), r40_xn$assignunicode$7Hrq(778), 
        r40_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        r40_radiusOut = 1.5 * r1_DOTRADIUS, r40_radiusIn = .7 * r1_DOTRADIUS, r40_xn$putshapes$9Jrj([ r1_Ring(r1_XH + r1_ACCENT + r40_radiusOut, r1_XH + r1_ACCENT - r40_radiusOut, r1_markMiddle - r40_radiusOut, r1_markMiddle + r40_radiusOut), r1_Ring(r1_XH + r1_ACCENT + r40_radiusIn, r1_XH + r1_ACCENT - r40_radiusIn, r1_markMiddle - r40_radiusIn, r1_markMiddle + r40_radiusIn) ]), 
        void r40_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("graveAbove", function() {
        var r43_currentGlyph, r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_include, r43_xn$createstroke$7Hrq, r43_xn$setanchor$9Jrj, _r43_t0;
        return _r43_t0 = this, r43_currentGlyph = _r43_t0, r43_xn$setwidth$9Jrj = _r43_t0["set-width"].bind(_r43_t0), 
        r43_xn$assignunicode$7Hrq = function(r44_code) {
            var r44_code;
            return r43_currentGlyph["assign-unicode"](r44_code), r1_unicodeGlyphs[r43_currentGlyph.unicode[r43_currentGlyph.unicode.length - 1]] = r43_currentGlyph;
        }, r43_xn$startfrom$1aao = _r43_t0["start-from"].bind(_r43_t0), r43_xn$lineto$5sIl = _r43_t0["line-to"].bind(_r43_t0), 
        r43_xn$curveto$1aao = _r43_t0["curve-to"].bind(_r43_t0), r43_xn$cubicto$1aao = _r43_t0["cubic-to"].bind(_r43_t0), 
        r43_xn$putshapes$9Jrj = _r43_t0["put-shapes"].bind(_r43_t0), r43_xn$reverselast$3qIs = _r43_t0["reverse-last"].bind(_r43_t0), 
        r43_include = _r43_t0.include.bind(_r43_t0), r43_xn$createstroke$7Hrq = _r43_t0["create-stroke"].bind(_r43_t0), 
        r43_xn$setanchor$9Jrj = _r43_t0["set-anchor"].bind(_r43_t0), _r43_t0.gizmo = r1_globalTransform, 
        _r43_t0["set-width"](r1_WIDTH), r43_xn$setwidth$9Jrj(0), r43_xn$assignunicode$7Hrq(768), 
        r43_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        void r43_xn$putshapes$9Jrj(r43_xn$createstroke$7Hrq()["start-from"](r1_markMiddle + r1_markStress, r1_aboveMarkBot)["set-width"](r1_markFine, r1_markFine)["line-to"](r1_markMiddle - r1_markExtend, r1_aboveMarkTop)["set-width"](r1_markStress, r1_markStress)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("acuteAbove", function() {
        var r46_currentGlyph, r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_include, r46_xn$createstroke$7Hrq, r46_xn$setanchor$9Jrj, _r46_t0;
        return _r46_t0 = this, r46_currentGlyph = _r46_t0, r46_xn$setwidth$9Jrj = _r46_t0["set-width"].bind(_r46_t0), 
        r46_xn$assignunicode$7Hrq = function(r47_code) {
            var r47_code;
            return r46_currentGlyph["assign-unicode"](r47_code), r1_unicodeGlyphs[r46_currentGlyph.unicode[r46_currentGlyph.unicode.length - 1]] = r46_currentGlyph;
        }, r46_xn$startfrom$1aao = _r46_t0["start-from"].bind(_r46_t0), r46_xn$lineto$5sIl = _r46_t0["line-to"].bind(_r46_t0), 
        r46_xn$curveto$1aao = _r46_t0["curve-to"].bind(_r46_t0), r46_xn$cubicto$1aao = _r46_t0["cubic-to"].bind(_r46_t0), 
        r46_xn$putshapes$9Jrj = _r46_t0["put-shapes"].bind(_r46_t0), r46_xn$reverselast$3qIs = _r46_t0["reverse-last"].bind(_r46_t0), 
        r46_include = _r46_t0.include.bind(_r46_t0), r46_xn$createstroke$7Hrq = _r46_t0["create-stroke"].bind(_r46_t0), 
        r46_xn$setanchor$9Jrj = _r46_t0["set-anchor"].bind(_r46_t0), _r46_t0.gizmo = r1_globalTransform, 
        _r46_t0["set-width"](r1_WIDTH), r46_xn$setwidth$9Jrj(0), r46_xn$assignunicode$7Hrq(769), 
        r46_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        void r46_xn$putshapes$9Jrj(r46_xn$createstroke$7Hrq()["start-from"](r1_markMiddle - r1_markStress, r1_aboveMarkBot)["set-width"](r1_markFine, r1_markFine)["line-to"](r1_markMiddle + r1_markExtend, r1_aboveMarkTop)["set-width"](r1_markStress, r1_markStress)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("circumflexAbove", function() {
        var r49_currentGlyph, r49_xn$setwidth$9Jrj, r49_xn$assignunicode$7Hrq, r49_xn$startfrom$1aao, r49_xn$lineto$5sIl, r49_xn$curveto$1aao, r49_xn$cubicto$1aao, r49_xn$putshapes$9Jrj, r49_xn$reverselast$3qIs, r49_include, r49_xn$createstroke$7Hrq, r49_xn$setanchor$9Jrj, _r49_t0;
        return _r49_t0 = this, r49_currentGlyph = _r49_t0, r49_xn$setwidth$9Jrj = _r49_t0["set-width"].bind(_r49_t0), 
        r49_xn$assignunicode$7Hrq = function(r50_code) {
            var r50_code;
            return r49_currentGlyph["assign-unicode"](r50_code), r1_unicodeGlyphs[r49_currentGlyph.unicode[r49_currentGlyph.unicode.length - 1]] = r49_currentGlyph;
        }, r49_xn$startfrom$1aao = _r49_t0["start-from"].bind(_r49_t0), r49_xn$lineto$5sIl = _r49_t0["line-to"].bind(_r49_t0), 
        r49_xn$curveto$1aao = _r49_t0["curve-to"].bind(_r49_t0), r49_xn$cubicto$1aao = _r49_t0["cubic-to"].bind(_r49_t0), 
        r49_xn$putshapes$9Jrj = _r49_t0["put-shapes"].bind(_r49_t0), r49_xn$reverselast$3qIs = _r49_t0["reverse-last"].bind(_r49_t0), 
        r49_include = _r49_t0.include.bind(_r49_t0), r49_xn$createstroke$7Hrq = _r49_t0["create-stroke"].bind(_r49_t0), 
        r49_xn$setanchor$9Jrj = _r49_t0["set-anchor"].bind(_r49_t0), _r49_t0.gizmo = r1_globalTransform, 
        _r49_t0["set-width"](r1_WIDTH), r49_xn$setwidth$9Jrj(0), r49_xn$assignunicode$7Hrq(770), 
        r49_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()["start-from"](r1_markMiddle - r1_markExtend - r1_markStress, r1_aboveMarkBot + r1_markStress - r1_markFine)["set-width"](r1_markStress, r1_markStress)["line-to"](r1_markMiddle, r1_aboveMarkTop + .7 * r1_markFine)["heads-to"](r1_UPWARD)["to-outline"](0, 0, 1)), 
        void r49_xn$putshapes$9Jrj(r49_xn$createstroke$7Hrq()["start-from"](r1_markMiddle + r1_markExtend + r1_markStress, r1_aboveMarkBot + r1_markStress - r1_markFine)["set-width"](r1_markStress, r1_markStress)["line-to"](r1_markMiddle, r1_aboveMarkTop + .7 * r1_markFine)["heads-to"](r1_UPWARD)["to-outline"](0, 0, 1));
    }), r1_xn$createglyph$7Hrq("caronAbove", function() {
        var r52_currentGlyph, r52_xn$setwidth$9Jrj, r52_xn$assignunicode$7Hrq, r52_xn$startfrom$1aao, r52_xn$lineto$5sIl, r52_xn$curveto$1aao, r52_xn$cubicto$1aao, r52_xn$putshapes$9Jrj, r52_xn$reverselast$3qIs, r52_include, r52_xn$createstroke$7Hrq, r52_xn$setanchor$9Jrj, _r52_t0;
        return _r52_t0 = this, r52_currentGlyph = _r52_t0, r52_xn$setwidth$9Jrj = _r52_t0["set-width"].bind(_r52_t0), 
        r52_xn$assignunicode$7Hrq = function(r53_code) {
            var r53_code;
            return r52_currentGlyph["assign-unicode"](r53_code), r1_unicodeGlyphs[r52_currentGlyph.unicode[r52_currentGlyph.unicode.length - 1]] = r52_currentGlyph;
        }, r52_xn$startfrom$1aao = _r52_t0["start-from"].bind(_r52_t0), r52_xn$lineto$5sIl = _r52_t0["line-to"].bind(_r52_t0), 
        r52_xn$curveto$1aao = _r52_t0["curve-to"].bind(_r52_t0), r52_xn$cubicto$1aao = _r52_t0["cubic-to"].bind(_r52_t0), 
        r52_xn$putshapes$9Jrj = _r52_t0["put-shapes"].bind(_r52_t0), r52_xn$reverselast$3qIs = _r52_t0["reverse-last"].bind(_r52_t0), 
        r52_include = _r52_t0.include.bind(_r52_t0), r52_xn$createstroke$7Hrq = _r52_t0["create-stroke"].bind(_r52_t0), 
        r52_xn$setanchor$9Jrj = _r52_t0["set-anchor"].bind(_r52_t0), _r52_t0.gizmo = r1_globalTransform, 
        _r52_t0["set-width"](r1_WIDTH), r52_xn$setwidth$9Jrj(0), r52_xn$assignunicode$7Hrq(780), 
        r52_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        r52_xn$putshapes$9Jrj(r52_xn$createstroke$7Hrq()["start-from"](r1_markMiddle - r1_markExtend - r1_markStress, r1_aboveMarkTop)["set-width"](r1_markStress, r1_markStress)["line-to"](r1_markMiddle, r1_aboveMarkBot - 1.7 * r1_markFine + r1_markStress)["heads-to"](r1_DOWNWARD)["to-outline"](0, 0, 1)), 
        void r52_xn$putshapes$9Jrj(r52_xn$createstroke$7Hrq()["start-from"](r1_markMiddle + r1_markExtend + r1_markStress, r1_aboveMarkTop)["set-width"](r1_markStress, r1_markStress)["line-to"](r1_markMiddle, r1_aboveMarkBot - 1.7 * r1_markFine + r1_markStress)["heads-to"](r1_DOWNWARD)["to-outline"](0, 0, 1));
    }), r1_xn$createglyph$7Hrq("tildeAbove", function() {
        var r55_currentGlyph, r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_include, r55_xn$createstroke$7Hrq, r55_xn$setanchor$9Jrj, r55_leftEnd, r55_rightEnd, r55_ttop, r55_tbot, r55_top, r55_bot, r55_tildeWave, r55_tildeWaveX, r55_tildeWaveEnd, _r55_t0;
        return _r55_t0 = this, r55_currentGlyph = _r55_t0, r55_xn$setwidth$9Jrj = _r55_t0["set-width"].bind(_r55_t0), 
        r55_xn$assignunicode$7Hrq = function(r56_code) {
            var r56_code;
            return r55_currentGlyph["assign-unicode"](r56_code), r1_unicodeGlyphs[r55_currentGlyph.unicode[r55_currentGlyph.unicode.length - 1]] = r55_currentGlyph;
        }, r55_xn$startfrom$1aao = _r55_t0["start-from"].bind(_r55_t0), r55_xn$lineto$5sIl = _r55_t0["line-to"].bind(_r55_t0), 
        r55_xn$curveto$1aao = _r55_t0["curve-to"].bind(_r55_t0), r55_xn$cubicto$1aao = _r55_t0["cubic-to"].bind(_r55_t0), 
        r55_xn$putshapes$9Jrj = _r55_t0["put-shapes"].bind(_r55_t0), r55_xn$reverselast$3qIs = _r55_t0["reverse-last"].bind(_r55_t0), 
        r55_include = _r55_t0.include.bind(_r55_t0), r55_xn$createstroke$7Hrq = _r55_t0["create-stroke"].bind(_r55_t0), 
        r55_xn$setanchor$9Jrj = _r55_t0["set-anchor"].bind(_r55_t0), _r55_t0.gizmo = r1_globalTransform, 
        _r55_t0["set-width"](r1_WIDTH), r55_xn$setwidth$9Jrj(0), r55_xn$assignunicode$7Hrq(771), 
        r55_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        r55_leftEnd = r1_markMiddle - 1.5 * r1_markExtend, r55_rightEnd = r1_markMiddle + 1.5 * r1_markExtend, 
        r55_ttop = r1_aboveMarkTop, r55_tbot = r1_aboveMarkBot + r1_markFine / 2, r55_top = r55_ttop + 2 * r1_markFine, 
        r55_bot = r55_tbot - 2 * r1_markFine, r55_tildeWave = r1_linreg(40, 1.52, 52, 1.33, r1_markStress), 
        r55_tildeWaveX = .52, r55_tildeWaveEnd = 0, void r55_xn$putshapes$9Jrj(r55_xn$createstroke$7Hrq()["start-from"](r55_leftEnd, r1_mix(r55_tbot, r55_ttop, r55_tildeWaveEnd))["set-width"](r1_markStress, r1_markStress)["cubic-to"](r1_mix(r55_leftEnd, r55_rightEnd, r55_tildeWaveX), r1_mix(r55_bot, r55_top, r55_tildeWave), r1_mix(r55_leftEnd, r55_rightEnd, 1 - r55_tildeWaveX), r1_mix(r55_bot, r55_top, 1 - r55_tildeWave), r55_rightEnd, r1_mix(r55_tbot, r55_ttop, 1 - r55_tildeWaveEnd))["to-outline"](0, 0, 11));
    }), r1_xn$createglyph$7Hrq("macronAbove", function() {
        var r58_currentGlyph, r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, r58_leftEnd, r58_rightEnd, _r58_t0;
        return _r58_t0 = this, r58_currentGlyph = _r58_t0, r58_xn$setwidth$9Jrj = _r58_t0["set-width"].bind(_r58_t0), 
        r58_xn$assignunicode$7Hrq = function(r59_code) {
            var r59_code;
            return r58_currentGlyph["assign-unicode"](r59_code), r1_unicodeGlyphs[r58_currentGlyph.unicode[r58_currentGlyph.unicode.length - 1]] = r58_currentGlyph;
        }, r58_xn$startfrom$1aao = _r58_t0["start-from"].bind(_r58_t0), r58_xn$lineto$5sIl = _r58_t0["line-to"].bind(_r58_t0), 
        r58_xn$curveto$1aao = _r58_t0["curve-to"].bind(_r58_t0), r58_xn$cubicto$1aao = _r58_t0["cubic-to"].bind(_r58_t0), 
        r58_xn$putshapes$9Jrj = _r58_t0["put-shapes"].bind(_r58_t0), r58_xn$reverselast$3qIs = _r58_t0["reverse-last"].bind(_r58_t0), 
        r58_include = _r58_t0.include.bind(_r58_t0), r58_xn$createstroke$7Hrq = _r58_t0["create-stroke"].bind(_r58_t0), 
        r58_xn$setanchor$9Jrj = _r58_t0["set-anchor"].bind(_r58_t0), _r58_t0.gizmo = r1_globalTransform, 
        _r58_t0["set-width"](r1_WIDTH), r58_xn$setwidth$9Jrj(0), r58_xn$assignunicode$7Hrq(772), 
        r58_xn$setanchor$9Jrj("above", r1_MARK, r1_markMiddle, r1_XH, r1_markMiddle, r1_aboveMarkTop), 
        r58_leftEnd = r1_markMiddle - 1.5 * r1_markExtend, r58_rightEnd = r1_markMiddle + 1.5 * r1_markExtend, 
        void r58_xn$putshapes$9Jrj(r58_xn$createstroke$7Hrq()["start-from"](r58_leftEnd, r1_aboveMarkTop - r1_DOTRADIUS)["set-width"](r1_markHalfStroke, r1_markHalfStroke)["heads-to"](r1_RIGHTWARD)["line-to"](r58_rightEnd, r1_aboveMarkTop - r1_DOTRADIUS)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotBelow", function() {
        var r61_currentGlyph, r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, r61_include, r61_xn$createstroke$7Hrq, r61_xn$setanchor$9Jrj, _r61_t0;
        return _r61_t0 = this, r61_currentGlyph = _r61_t0, r61_xn$setwidth$9Jrj = _r61_t0["set-width"].bind(_r61_t0), 
        r61_xn$assignunicode$7Hrq = function(r62_code) {
            var r62_code;
            return r61_currentGlyph["assign-unicode"](r62_code), r1_unicodeGlyphs[r61_currentGlyph.unicode[r61_currentGlyph.unicode.length - 1]] = r61_currentGlyph;
        }, r61_xn$startfrom$1aao = _r61_t0["start-from"].bind(_r61_t0), r61_xn$lineto$5sIl = _r61_t0["line-to"].bind(_r61_t0), 
        r61_xn$curveto$1aao = _r61_t0["curve-to"].bind(_r61_t0), r61_xn$cubicto$1aao = _r61_t0["cubic-to"].bind(_r61_t0), 
        r61_xn$putshapes$9Jrj = _r61_t0["put-shapes"].bind(_r61_t0), r61_xn$reverselast$3qIs = _r61_t0["reverse-last"].bind(_r61_t0), 
        r61_include = _r61_t0.include.bind(_r61_t0), r61_xn$createstroke$7Hrq = _r61_t0["create-stroke"].bind(_r61_t0), 
        r61_xn$setanchor$9Jrj = _r61_t0["set-anchor"].bind(_r61_t0), _r61_t0.gizmo = r1_globalTransform, 
        _r61_t0["set-width"](r1_WIDTH), r61_xn$setwidth$9Jrj(0), r61_xn$assignunicode$7Hrq(803), 
        r61_xn$setanchor$9Jrj("below", r1_MARK, r1_markMiddle, 0, r1_markMiddle, r1_belowMarkBot), 
        void r61_xn$putshapes$9Jrj([ r1_Ring(0 - r1_ACCENT + r1_DOTRADIUS, 0 - r1_ACCENT - r1_DOTRADIUS, r1_markMiddle - r1_DOTRADIUS, r1_markMiddle + r1_DOTRADIUS) ]);
    }), r1_xn$createglyph$7Hrq("A", function() {
        var r64_currentGlyph, r64_xn$setwidth$9Jrj, r64_xn$assignunicode$7Hrq, r64_xn$startfrom$1aao, r64_xn$lineto$5sIl, r64_xn$curveto$1aao, r64_xn$cubicto$1aao, r64_xn$putshapes$9Jrj, r64_xn$reverselast$3qIs, r64_include, r64_xn$createstroke$7Hrq, r64_xn$setanchor$9Jrj, r64_TURN, r64_leftbar, r64_rightbar, r64_hbar, _r64_t0;
        return _r64_t0 = this, r64_currentGlyph = _r64_t0, r64_xn$setwidth$9Jrj = _r64_t0["set-width"].bind(_r64_t0), 
        r64_xn$assignunicode$7Hrq = function(r65_code) {
            var r65_code;
            return r64_currentGlyph["assign-unicode"](r65_code), r1_unicodeGlyphs[r64_currentGlyph.unicode[r64_currentGlyph.unicode.length - 1]] = r64_currentGlyph;
        }, r64_xn$startfrom$1aao = _r64_t0["start-from"].bind(_r64_t0), r64_xn$lineto$5sIl = _r64_t0["line-to"].bind(_r64_t0), 
        r64_xn$curveto$1aao = _r64_t0["curve-to"].bind(_r64_t0), r64_xn$cubicto$1aao = _r64_t0["cubic-to"].bind(_r64_t0), 
        r64_xn$putshapes$9Jrj = _r64_t0["put-shapes"].bind(_r64_t0), r64_xn$reverselast$3qIs = _r64_t0["reverse-last"].bind(_r64_t0), 
        r64_include = _r64_t0.include.bind(_r64_t0), r64_xn$createstroke$7Hrq = _r64_t0["create-stroke"].bind(_r64_t0), 
        r64_xn$setanchor$9Jrj = _r64_t0["set-anchor"].bind(_r64_t0), _r64_t0.gizmo = r1_globalTransform, 
        _r64_t0["set-width"](r1_WIDTH), r64_xn$setwidth$9Jrj(r1_WIDTH), r64_xn$assignunicode$7Hrq("A"), 
        r64_include(r1_capitalMarks), r64_TURN = .1 * r1_XH, r64_leftbar = r64_xn$createstroke$7Hrq(), 
        r64_leftbar["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, r64_TURN)["heads-to"](r1_UPWARD)["curve-to"](r1_SB, r64_TURN + .27 * (r1_CAP - r64_TURN), r1_MIDDLE - r1_STROKE / 2, r1_CAP)["set-width"](0, .8 * r1_STROKE), 
        r64_rightbar = r64_xn$createstroke$7Hrq(), r64_rightbar["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r64_TURN)["heads-to"](r1_UPWARD)["curve-to"](r1_RIGHTSB, r64_TURN + .27 * (r1_CAP - r64_TURN), r1_MIDDLE + r1_STROKE / 2, r1_CAP)["set-width"](.8 * r1_STROKE, 0), 
        r64_hbar = r64_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_STROKE, r1_XH / 2)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB - r1_STROKE, r1_XH / 2)["heads-to"](r1_RIGHTWARD), 
        r64_xn$putshapes$9Jrj(r64_leftbar["to-outline"]()), r64_xn$putshapes$9Jrj(r64_hbar["to-outline"]()), 
        r64_xn$putshapes$9Jrj(r64_rightbar["to-outline"]()), r64_xn$startfrom$1aao(r1_MIDDLE - r1_STROKE / 2, r1_CAP), 
        r64_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2, r1_CAP), void r64_xn$lineto$5sIl(r1_MIDDLE, r1_CAP - r1_STROKE);
    }), r1_xn$createglyph$7Hrq("V", function() {
        var r67_currentGlyph, r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, r67_include, r67_xn$createstroke$7Hrq, r67_xn$setanchor$9Jrj, r67_TURN, r67_leftbar, r67_rightbar, _r67_t0;
        return _r67_t0 = this, r67_currentGlyph = _r67_t0, r67_xn$setwidth$9Jrj = _r67_t0["set-width"].bind(_r67_t0), 
        r67_xn$assignunicode$7Hrq = function(r68_code) {
            var r68_code;
            return r67_currentGlyph["assign-unicode"](r68_code), r1_unicodeGlyphs[r67_currentGlyph.unicode[r67_currentGlyph.unicode.length - 1]] = r67_currentGlyph;
        }, r67_xn$startfrom$1aao = _r67_t0["start-from"].bind(_r67_t0), r67_xn$lineto$5sIl = _r67_t0["line-to"].bind(_r67_t0), 
        r67_xn$curveto$1aao = _r67_t0["curve-to"].bind(_r67_t0), r67_xn$cubicto$1aao = _r67_t0["cubic-to"].bind(_r67_t0), 
        r67_xn$putshapes$9Jrj = _r67_t0["put-shapes"].bind(_r67_t0), r67_xn$reverselast$3qIs = _r67_t0["reverse-last"].bind(_r67_t0), 
        r67_include = _r67_t0.include.bind(_r67_t0), r67_xn$createstroke$7Hrq = _r67_t0["create-stroke"].bind(_r67_t0), 
        r67_xn$setanchor$9Jrj = _r67_t0["set-anchor"].bind(_r67_t0), _r67_t0.gizmo = r1_globalTransform, 
        _r67_t0["set-width"](r1_WIDTH), r67_xn$setwidth$9Jrj(r1_WIDTH), r67_xn$assignunicode$7Hrq("V"), 
        r67_include(r1_capitalMarks), r67_TURN = .9 * r1_CAP, r67_leftbar = r67_xn$createstroke$7Hrq(), 
        r67_leftbar["start-from"](r1_SB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r67_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_SB, .73 * r67_TURN, r1_MIDDLE - r1_STROKE / 2, 0)["set-width"](.8 * r1_STROKE, 0), 
        r67_rightbar = r67_xn$createstroke$7Hrq(), r67_rightbar["start-from"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r67_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, .73 * r67_TURN, r1_MIDDLE + r1_STROKE / 2, 0)["set-width"](0, .8 * r1_STROKE), 
        r67_xn$putshapes$9Jrj(r67_leftbar["to-outline"]()), r67_xn$putshapes$9Jrj(r67_rightbar["to-outline"]()), 
        r67_xn$startfrom$1aao(r1_MIDDLE + r1_STROKE / 2, 0), r67_xn$lineto$5sIl(r1_MIDDLE - r1_STROKE / 2, 0), 
        void r67_xn$lineto$5sIl(r1_MIDDLE, r1_STROKE);
    }), r1_xn$createglyph$7Hrq("W", function() {
        var r70_currentGlyph, r70_xn$setwidth$9Jrj, r70_xn$assignunicode$7Hrq, r70_xn$startfrom$1aao, r70_xn$lineto$5sIl, r70_xn$curveto$1aao, r70_xn$cubicto$1aao, r70_xn$putshapes$9Jrj, r70_xn$reverselast$3qIs, r70_include, r70_xn$createstroke$7Hrq, r70_xn$setanchor$9Jrj, r70_TURN, r70_turn2, r70_wheight, r70_bottomStroke, r70_m1, r70_m2, _r70_t0;
        return _r70_t0 = this, r70_currentGlyph = _r70_t0, r70_xn$setwidth$9Jrj = _r70_t0["set-width"].bind(_r70_t0), 
        r70_xn$assignunicode$7Hrq = function(r71_code) {
            var r71_code;
            return r70_currentGlyph["assign-unicode"](r71_code), r1_unicodeGlyphs[r70_currentGlyph.unicode[r70_currentGlyph.unicode.length - 1]] = r70_currentGlyph;
        }, r70_xn$startfrom$1aao = _r70_t0["start-from"].bind(_r70_t0), r70_xn$lineto$5sIl = _r70_t0["line-to"].bind(_r70_t0), 
        r70_xn$curveto$1aao = _r70_t0["curve-to"].bind(_r70_t0), r70_xn$cubicto$1aao = _r70_t0["cubic-to"].bind(_r70_t0), 
        r70_xn$putshapes$9Jrj = _r70_t0["put-shapes"].bind(_r70_t0), r70_xn$reverselast$3qIs = _r70_t0["reverse-last"].bind(_r70_t0), 
        r70_include = _r70_t0.include.bind(_r70_t0), r70_xn$createstroke$7Hrq = _r70_t0["create-stroke"].bind(_r70_t0), 
        r70_xn$setanchor$9Jrj = _r70_t0["set-anchor"].bind(_r70_t0), _r70_t0.gizmo = r1_globalTransform, 
        _r70_t0["set-width"](r1_WIDTH), r70_xn$setwidth$9Jrj(r1_WIDTH), r70_xn$assignunicode$7Hrq("W"), 
        r70_include(r1_capitalMarks), r70_TURN = .75 * r1_CAP, r70_turn2 = .59 * r1_CAP, 
        r70_wheight = .6 * r1_CAP, r70_bottomStroke = Math.min(.8 * r1_STROKE, .175 * (r1_WIDTH - 2 * r1_SB)), 
        r70_m1 = .3 * r1_WIDTH, r70_m2 = .7 * r1_WIDTH, r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r70_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_SB, .73 * r70_TURN, r70_m1 - r70_bottomStroke / 2, 0)["set-width"](r70_bottomStroke, 0)["to-outline"]()), 
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r70_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, .73 * r70_TURN, r70_m2 + r70_bottomStroke / 2, 0)["set-width"](0, r70_bottomStroke)["to-outline"]()), 
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r70_bottomStroke / 2, r70_wheight)["heads-to"](r1_DOWNWARD)["set-width"](0, r70_bottomStroke)["line-to"](r1_MIDDLE + r70_bottomStroke / 2, r70_turn2)["heads-to"](r1_DOWNWARD)["curve-to"](r1_MIDDLE + r70_bottomStroke / 2, .9 * r70_turn2, r70_m1 + r70_bottomStroke / 2, 0)["set-width"](0, r70_bottomStroke)["to-outline"]()), 
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - r70_bottomStroke / 2, r70_wheight)["heads-to"](r1_DOWNWARD)["set-width"](r70_bottomStroke, 0)["line-to"](r1_MIDDLE - r70_bottomStroke / 2, r70_turn2)["heads-to"](r1_DOWNWARD)["curve-to"](r1_MIDDLE - r70_bottomStroke / 2, .9 * r70_turn2, r70_m2 - r70_bottomStroke / 2, 0)["set-width"](r70_bottomStroke, 0)["to-outline"]()), 
        r70_xn$startfrom$1aao(r70_m1 + r70_bottomStroke / 2, 0), r70_xn$lineto$5sIl(r70_m1 - r70_bottomStroke / 2, 0), 
        r70_xn$lineto$5sIl(r70_m1, r70_bottomStroke), r70_xn$startfrom$1aao(r70_m2 + r70_bottomStroke / 2, 0), 
        r70_xn$lineto$5sIl(r70_m2 - r70_bottomStroke / 2, 0), void r70_xn$lineto$5sIl(r70_m2, r70_bottomStroke);
    }), r1_xn$createglyph$7Hrq("X", function() {
        var r73_currentGlyph, r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, r73_include, r73_xn$createstroke$7Hrq, r73_xn$setanchor$9Jrj, _r73_t0;
        return _r73_t0 = this, r73_currentGlyph = _r73_t0, r73_xn$setwidth$9Jrj = _r73_t0["set-width"].bind(_r73_t0), 
        r73_xn$assignunicode$7Hrq = function(r74_code) {
            var r74_code;
            return r73_currentGlyph["assign-unicode"](r74_code), r1_unicodeGlyphs[r73_currentGlyph.unicode[r73_currentGlyph.unicode.length - 1]] = r73_currentGlyph;
        }, r73_xn$startfrom$1aao = _r73_t0["start-from"].bind(_r73_t0), r73_xn$lineto$5sIl = _r73_t0["line-to"].bind(_r73_t0), 
        r73_xn$curveto$1aao = _r73_t0["curve-to"].bind(_r73_t0), r73_xn$cubicto$1aao = _r73_t0["cubic-to"].bind(_r73_t0), 
        r73_xn$putshapes$9Jrj = _r73_t0["put-shapes"].bind(_r73_t0), r73_xn$reverselast$3qIs = _r73_t0["reverse-last"].bind(_r73_t0), 
        r73_include = _r73_t0.include.bind(_r73_t0), r73_xn$createstroke$7Hrq = _r73_t0["create-stroke"].bind(_r73_t0), 
        r73_xn$setanchor$9Jrj = _r73_t0["set-anchor"].bind(_r73_t0), _r73_t0.gizmo = r1_globalTransform, 
        _r73_t0["set-width"](r1_WIDTH), r73_xn$setwidth$9Jrj(r1_WIDTH), r73_xn$assignunicode$7Hrq("X"), 
        r73_include(r1_capitalMarks), r73_xn$putshapes$9Jrj(r1_xStrand(r1_SB, 0, r1_RIGHTSB, r1_CAP, .1, .4, .28)), 
        void r73_xn$putshapes$9Jrj(r1_xStrand(r1_SB, r1_CAP, r1_RIGHTSB, 0, .1, .4, .28));
    }), r1_xn$createglyph$7Hrq("Y", function() {
        var r76_currentGlyph, r76_xn$setwidth$9Jrj, r76_xn$assignunicode$7Hrq, r76_xn$startfrom$1aao, r76_xn$lineto$5sIl, r76_xn$curveto$1aao, r76_xn$cubicto$1aao, r76_xn$putshapes$9Jrj, r76_xn$reverselast$3qIs, r76_include, r76_xn$createstroke$7Hrq, r76_xn$setanchor$9Jrj, r76_cross, _r76_t0;
        return _r76_t0 = this, r76_currentGlyph = _r76_t0, r76_xn$setwidth$9Jrj = _r76_t0["set-width"].bind(_r76_t0), 
        r76_xn$assignunicode$7Hrq = function(r77_code) {
            var r77_code;
            return r76_currentGlyph["assign-unicode"](r77_code), r1_unicodeGlyphs[r76_currentGlyph.unicode[r76_currentGlyph.unicode.length - 1]] = r76_currentGlyph;
        }, r76_xn$startfrom$1aao = _r76_t0["start-from"].bind(_r76_t0), r76_xn$lineto$5sIl = _r76_t0["line-to"].bind(_r76_t0), 
        r76_xn$curveto$1aao = _r76_t0["curve-to"].bind(_r76_t0), r76_xn$cubicto$1aao = _r76_t0["cubic-to"].bind(_r76_t0), 
        r76_xn$putshapes$9Jrj = _r76_t0["put-shapes"].bind(_r76_t0), r76_xn$reverselast$3qIs = _r76_t0["reverse-last"].bind(_r76_t0), 
        r76_include = _r76_t0.include.bind(_r76_t0), r76_xn$createstroke$7Hrq = _r76_t0["create-stroke"].bind(_r76_t0), 
        r76_xn$setanchor$9Jrj = _r76_t0["set-anchor"].bind(_r76_t0), _r76_t0.gizmo = r1_globalTransform, 
        _r76_t0["set-width"](r1_WIDTH), r76_xn$setwidth$9Jrj(r1_WIDTH), r76_xn$assignunicode$7Hrq("Y"), 
        r76_include(r1_capitalMarks), r76_cross = .4 * r1_CAP, r76_xn$putshapes$9Jrj(r1_halfXStrand(r1_SB, r1_CAP, r1_MIDDLE, r76_cross, .1, .4, .28)), 
        r76_xn$putshapes$9Jrj(r1_halfXStrand(r1_RIGHTSB, r1_CAP, r1_MIDDLE, r76_cross, .1, .4, .28)), 
        void r76_xn$putshapes$9Jrj(r76_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_UPWARD)["line-to"](r1_MIDDLE, r76_cross + r1_HALFSTROKE)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("K", function() {
        var r79_currentGlyph, r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, r79_include, r79_xn$createstroke$7Hrq, r79_xn$setanchor$9Jrj, r79_TURN, r79_rturn, r79_right, r79_fine, _r79_t0;
        return _r79_t0 = this, r79_currentGlyph = _r79_t0, r79_xn$setwidth$9Jrj = _r79_t0["set-width"].bind(_r79_t0), 
        r79_xn$assignunicode$7Hrq = function(r80_code) {
            var r80_code;
            return r79_currentGlyph["assign-unicode"](r80_code), r1_unicodeGlyphs[r79_currentGlyph.unicode[r79_currentGlyph.unicode.length - 1]] = r79_currentGlyph;
        }, r79_xn$startfrom$1aao = _r79_t0["start-from"].bind(_r79_t0), r79_xn$lineto$5sIl = _r79_t0["line-to"].bind(_r79_t0), 
        r79_xn$curveto$1aao = _r79_t0["curve-to"].bind(_r79_t0), r79_xn$cubicto$1aao = _r79_t0["cubic-to"].bind(_r79_t0), 
        r79_xn$putshapes$9Jrj = _r79_t0["put-shapes"].bind(_r79_t0), r79_xn$reverselast$3qIs = _r79_t0["reverse-last"].bind(_r79_t0), 
        r79_include = _r79_t0.include.bind(_r79_t0), r79_xn$createstroke$7Hrq = _r79_t0["create-stroke"].bind(_r79_t0), 
        r79_xn$setanchor$9Jrj = _r79_t0["set-anchor"].bind(_r79_t0), _r79_t0.gizmo = r1_globalTransform, 
        _r79_t0["set-width"](r1_WIDTH), r79_xn$setwidth$9Jrj(r1_WIDTH), r79_xn$assignunicode$7Hrq("K"), 
        r79_include(r1_capitalMarks), r79_TURN = .95 * r1_CAP, r79_rturn = .1 * r1_XH, r79_right = r1_RIGHTSB - r1_O, 
        r79_fine = Math.min(r1_STROKE, .25 * (r1_WIDTH - 2 * r1_SB)), r79_xn$putshapes$9Jrj(r79_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["set-width"](0, r1_STROKE)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r79_xn$putshapes$9Jrj(r79_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r79_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, (1 - .18) * r79_TURN, r1_SB + r1_STROKE, .35 * r1_CAP)["set-width"](0, r79_fine)["to-outline"]()), 
        void r79_xn$putshapes$9Jrj(r79_xn$createstroke$7Hrq()["start-from"](r79_right - r1_HALFSTROKE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["curve-to"](r79_right - r1_HALFSTROKE, r79_rturn + .2 * (r1_XH - r79_rturn), r1_MIDDLE, r1_CAPMIDDLE + r1_HALFSTROKE)["set-width"](r79_fine / 2, r79_fine / 2)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("B", function() {
        var r82_currentGlyph, r82_xn$setwidth$9Jrj, r82_xn$assignunicode$7Hrq, r82_xn$startfrom$1aao, r82_xn$lineto$5sIl, r82_xn$curveto$1aao, r82_xn$cubicto$1aao, r82_xn$putshapes$9Jrj, r82_xn$reverselast$3qIs, r82_include, r82_xn$createstroke$7Hrq, r82_xn$setanchor$9Jrj, r82_bowl, r82_tkappa, r82_bkappa, r82_turntop, r82_turnbottom, r82_topbowl, r82_bottombowl, r82_leftbar, _r82_t0;
        return _r82_t0 = this, r82_currentGlyph = _r82_t0, r82_xn$setwidth$9Jrj = _r82_t0["set-width"].bind(_r82_t0), 
        r82_xn$assignunicode$7Hrq = function(r83_code) {
            var r83_code;
            return r82_currentGlyph["assign-unicode"](r83_code), r1_unicodeGlyphs[r82_currentGlyph.unicode[r82_currentGlyph.unicode.length - 1]] = r82_currentGlyph;
        }, r82_xn$startfrom$1aao = _r82_t0["start-from"].bind(_r82_t0), r82_xn$lineto$5sIl = _r82_t0["line-to"].bind(_r82_t0), 
        r82_xn$curveto$1aao = _r82_t0["curve-to"].bind(_r82_t0), r82_xn$cubicto$1aao = _r82_t0["cubic-to"].bind(_r82_t0), 
        r82_xn$putshapes$9Jrj = _r82_t0["put-shapes"].bind(_r82_t0), r82_xn$reverselast$3qIs = _r82_t0["reverse-last"].bind(_r82_t0), 
        r82_include = _r82_t0.include.bind(_r82_t0), r82_xn$createstroke$7Hrq = _r82_t0["create-stroke"].bind(_r82_t0), 
        r82_xn$setanchor$9Jrj = _r82_t0["set-anchor"].bind(_r82_t0), _r82_t0.gizmo = r1_globalTransform, 
        _r82_t0["set-width"](r1_WIDTH), r82_xn$setwidth$9Jrj(r1_WIDTH), r82_xn$assignunicode$7Hrq("B"), 
        r82_include(r1_capitalMarks), r82_bowl = 451, r82_tkappa = r1_COKAPPA - .22, r82_bkappa = r1_COKAPPA - .2, 
        r82_turntop = (r1_CAP + (r82_bowl - r1_STROKE)) / 2, r82_turnbottom = r82_bowl / 2, 
        r82_topbowl = r82_xn$createstroke$7Hrq(), r82_topbowl["start-from"](r1_SB, r1_CAP)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - .5 * r1_SB - r82_turnbottom, r1_CAP)["cubic-to"](r1_RIGHTSB - .5 * r1_SB - r82_tkappa * r82_turnbottom, r1_CAP, r1_RIGHTSB - .5 * r1_SB, r82_turntop + (r1_CAP - r82_turntop) * r1_KAPPA, r1_RIGHTSB - .5 * r1_SB, r82_turntop)["cubic-to"](r1_RIGHTSB - .5 * r1_SB, r82_turntop + r1_KAPPA * (r82_bowl - r1_STROKE - r82_turntop), r1_RIGHTSB - .5 * r1_SB - r82_tkappa * r82_turnbottom, r82_bowl - r1_STROKE, r1_RIGHTSB - .5 * r1_SB - r82_turnbottom, r82_bowl - r1_STROKE)["line-to"](r1_SB, r82_bowl - r1_STROKE)["heads-to"](r1_LEFTWARD), 
        r82_bottombowl = r82_xn$createstroke$7Hrq(), r82_bottombowl["start-from"](r1_SB, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r82_turnbottom, 0)["cubic-to"](r1_RIGHTSB - r82_bkappa * r82_turnbottom, 0, r1_RIGHTSB, r82_turnbottom * r1_KAPPA, r1_RIGHTSB, r82_turnbottom)["cubic-to"](r1_RIGHTSB, r82_turnbottom + r1_KAPPA * (r82_bowl - r82_turnbottom), r1_RIGHTSB - r82_bkappa * r82_turnbottom, r82_bowl, r1_RIGHTSB - r82_turnbottom, r82_bowl)["line-to"](r1_SB, r82_bowl)["heads-to"](r1_LEFTWARD), 
        r82_leftbar = r82_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD), 
        r82_xn$putshapes$9Jrj(r82_topbowl["to-outline"](0, r1_STROKE)), r82_xn$putshapes$9Jrj(r82_bottombowl["to-outline"](r1_STROKE, 0)), 
        void r82_xn$putshapes$9Jrj(r82_leftbar["to-outline"](0, r1_STROKE));
    }), r1_xn$createglyph$7Hrq("D", function() {
        var r85_currentGlyph, r85_xn$setwidth$9Jrj, r85_xn$assignunicode$7Hrq, r85_xn$startfrom$1aao, r85_xn$lineto$5sIl, r85_xn$curveto$1aao, r85_xn$cubicto$1aao, r85_xn$putshapes$9Jrj, r85_xn$reverselast$3qIs, r85_include, r85_xn$createstroke$7Hrq, r85_xn$setanchor$9Jrj, r85_dsmooth, r85_bsmooth, r85_leftbar, r85_bowl, _r85_t0;
        return _r85_t0 = this, r85_currentGlyph = _r85_t0, r85_xn$setwidth$9Jrj = _r85_t0["set-width"].bind(_r85_t0), 
        r85_xn$assignunicode$7Hrq = function(r86_code) {
            var r86_code;
            return r85_currentGlyph["assign-unicode"](r86_code), r1_unicodeGlyphs[r85_currentGlyph.unicode[r85_currentGlyph.unicode.length - 1]] = r85_currentGlyph;
        }, r85_xn$startfrom$1aao = _r85_t0["start-from"].bind(_r85_t0), r85_xn$lineto$5sIl = _r85_t0["line-to"].bind(_r85_t0), 
        r85_xn$curveto$1aao = _r85_t0["curve-to"].bind(_r85_t0), r85_xn$cubicto$1aao = _r85_t0["cubic-to"].bind(_r85_t0), 
        r85_xn$putshapes$9Jrj = _r85_t0["put-shapes"].bind(_r85_t0), r85_xn$reverselast$3qIs = _r85_t0["reverse-last"].bind(_r85_t0), 
        r85_include = _r85_t0.include.bind(_r85_t0), r85_xn$createstroke$7Hrq = _r85_t0["create-stroke"].bind(_r85_t0), 
        r85_xn$setanchor$9Jrj = _r85_t0["set-anchor"].bind(_r85_t0), _r85_t0.gizmo = r1_globalTransform, 
        _r85_t0["set-width"](r1_WIDTH), r85_xn$setwidth$9Jrj(r1_WIDTH), r85_xn$assignunicode$7Hrq("D"), 
        r85_include(r1_capitalMarks), r85_dsmooth = 1.35 * r1_SMOOTH, r85_bsmooth = 1.1 * r1_SMOOTH, 
        r85_leftbar = r85_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD), 
        r85_bowl = r85_xn$createstroke$7Hrq(), r85_bowl["start-from"](r1_SB, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r85_bsmooth, 0)["cubic-to"](r1_RIGHTSB - r1_BKAPPA * r85_bsmooth, 0, r1_RIGHTSB, r1_COBKAPPA * r85_dsmooth, r1_RIGHTSB, r85_dsmooth)["line-to"](r1_RIGHTSB, r1_CAP - r85_dsmooth)["cubic-to"](r1_RIGHTSB, r1_CAP - r1_COBKAPPA * r85_dsmooth, r1_RIGHTSB - r1_BKAPPA * r85_bsmooth, r1_CAP, r1_RIGHTSB - r85_bsmooth, r1_CAP)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_LEFTWARD), 
        r85_xn$putshapes$9Jrj(r85_bowl["to-outline"](r1_STROKE, 0)), void r85_xn$putshapes$9Jrj(r85_leftbar["to-outline"](0, r1_STROKE));
    }), r1_xn$createglyph$7Hrq("P", function() {
        var r88_currentGlyph, r88_xn$setwidth$9Jrj, r88_xn$assignunicode$7Hrq, r88_xn$startfrom$1aao, r88_xn$lineto$5sIl, r88_xn$curveto$1aao, r88_xn$cubicto$1aao, r88_xn$putshapes$9Jrj, r88_xn$reverselast$3qIs, r88_include, r88_xn$createstroke$7Hrq, r88_xn$setanchor$9Jrj, r88_bowl, r88_bkappa, r88_turntop, r88_turnbottom, r88_topbowl, r88_leftbar, _r88_t0;
        return _r88_t0 = this, r88_currentGlyph = _r88_t0, r88_xn$setwidth$9Jrj = _r88_t0["set-width"].bind(_r88_t0), 
        r88_xn$assignunicode$7Hrq = function(r89_code) {
            var r89_code;
            return r88_currentGlyph["assign-unicode"](r89_code), r1_unicodeGlyphs[r88_currentGlyph.unicode[r88_currentGlyph.unicode.length - 1]] = r88_currentGlyph;
        }, r88_xn$startfrom$1aao = _r88_t0["start-from"].bind(_r88_t0), r88_xn$lineto$5sIl = _r88_t0["line-to"].bind(_r88_t0), 
        r88_xn$curveto$1aao = _r88_t0["curve-to"].bind(_r88_t0), r88_xn$cubicto$1aao = _r88_t0["cubic-to"].bind(_r88_t0), 
        r88_xn$putshapes$9Jrj = _r88_t0["put-shapes"].bind(_r88_t0), r88_xn$reverselast$3qIs = _r88_t0["reverse-last"].bind(_r88_t0), 
        r88_include = _r88_t0.include.bind(_r88_t0), r88_xn$createstroke$7Hrq = _r88_t0["create-stroke"].bind(_r88_t0), 
        r88_xn$setanchor$9Jrj = _r88_t0["set-anchor"].bind(_r88_t0), _r88_t0.gizmo = r1_globalTransform, 
        _r88_t0["set-width"](r1_WIDTH), r88_xn$setwidth$9Jrj(r1_WIDTH), r88_xn$assignunicode$7Hrq("P"), 
        r88_include(r1_capitalMarks), r88_bowl = r1_CAPMIDDLE, r88_bkappa = r1_COKAPPA - .2, 
        r88_turntop = (r1_CAP + (r88_bowl - r1_HALFSTROKE)) / 2, r88_turnbottom = r88_bowl / 2, 
        r88_topbowl = r88_xn$createstroke$7Hrq()["start-from"](1.25 * r1_SB, r1_CAP)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r88_turnbottom, r1_CAP)["arc-hv-to"](r1_RIGHTSB - r1_O, r88_turntop)["arc-vh-to"](r1_RIGHTSB - r88_turnbottom, r88_bowl - r1_HALFSTROKE)["line-to"](1.25 * r1_SB, r88_bowl - r1_HALFSTROKE)["heads-to"](r1_LEFTWARD), 
        r88_leftbar = r88_xn$createstroke$7Hrq()["start-from"](1.25 * r1_SB, 0)["heads-to"](r1_UPWARD)["line-to"](1.25 * r1_SB, r1_CAP)["heads-to"](r1_UPWARD), 
        r88_xn$putshapes$9Jrj(r88_topbowl["to-outline"](0, r1_STROKE)), void r88_xn$putshapes$9Jrj(r88_leftbar["to-outline"](0, r1_STROKE));
    }), r1_xn$createglyph$7Hrq("R", function() {
        var r91_currentGlyph, r91_xn$setwidth$9Jrj, r91_xn$assignunicode$7Hrq, r91_xn$startfrom$1aao, r91_xn$lineto$5sIl, r91_xn$curveto$1aao, r91_xn$cubicto$1aao, r91_xn$putshapes$9Jrj, r91_xn$reverselast$3qIs, r91_include, r91_xn$createstroke$7Hrq, r91_xn$setanchor$9Jrj, r91_TURN, r91_right, _r91_t0;
        return _r91_t0 = this, r91_currentGlyph = _r91_t0, r91_xn$setwidth$9Jrj = _r91_t0["set-width"].bind(_r91_t0), 
        r91_xn$assignunicode$7Hrq = function(r92_code) {
            var r92_code;
            return r91_currentGlyph["assign-unicode"](r92_code), r1_unicodeGlyphs[r91_currentGlyph.unicode[r91_currentGlyph.unicode.length - 1]] = r91_currentGlyph;
        }, r91_xn$startfrom$1aao = _r91_t0["start-from"].bind(_r91_t0), r91_xn$lineto$5sIl = _r91_t0["line-to"].bind(_r91_t0), 
        r91_xn$curveto$1aao = _r91_t0["curve-to"].bind(_r91_t0), r91_xn$cubicto$1aao = _r91_t0["cubic-to"].bind(_r91_t0), 
        r91_xn$putshapes$9Jrj = _r91_t0["put-shapes"].bind(_r91_t0), r91_xn$reverselast$3qIs = _r91_t0["reverse-last"].bind(_r91_t0), 
        r91_include = _r91_t0.include.bind(_r91_t0), r91_xn$createstroke$7Hrq = _r91_t0["create-stroke"].bind(_r91_t0), 
        r91_xn$setanchor$9Jrj = _r91_t0["set-anchor"].bind(_r91_t0), _r91_t0.gizmo = r1_globalTransform, 
        _r91_t0["set-width"](r1_WIDTH), r91_xn$setwidth$9Jrj(r1_WIDTH), r91_xn$assignunicode$7Hrq("R"), 
        r91_include(r1_glyphs.P, !0), r91_TURN = .1 * r1_XH, r91_right = r1_RIGHTSB - r1_O, 
        void r91_xn$putshapes$9Jrj(r91_xn$createstroke$7Hrq()["start-from"](r91_right - r1_HALFSTROKE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["curve-to"](r91_right - r1_HALFSTROKE, r91_TURN + .2 * (r1_XH - r91_TURN), r1_MIDDLE, r1_CAPMIDDLE)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("C", function() {
        var r94_currentGlyph, r94_xn$setwidth$9Jrj, r94_xn$assignunicode$7Hrq, r94_xn$startfrom$1aao, r94_xn$lineto$5sIl, r94_xn$curveto$1aao, r94_xn$cubicto$1aao, r94_xn$putshapes$9Jrj, r94_xn$reverselast$3qIs, r94_include, r94_xn$createstroke$7Hrq, r94_xn$setanchor$9Jrj, r94_outline, _r94_t0;
        return _r94_t0 = this, r94_currentGlyph = _r94_t0, r94_xn$setwidth$9Jrj = _r94_t0["set-width"].bind(_r94_t0), 
        r94_xn$assignunicode$7Hrq = function(r95_code) {
            var r95_code;
            return r94_currentGlyph["assign-unicode"](r95_code), r1_unicodeGlyphs[r94_currentGlyph.unicode[r94_currentGlyph.unicode.length - 1]] = r94_currentGlyph;
        }, r94_xn$startfrom$1aao = _r94_t0["start-from"].bind(_r94_t0), r94_xn$lineto$5sIl = _r94_t0["line-to"].bind(_r94_t0), 
        r94_xn$curveto$1aao = _r94_t0["curve-to"].bind(_r94_t0), r94_xn$cubicto$1aao = _r94_t0["cubic-to"].bind(_r94_t0), 
        r94_xn$putshapes$9Jrj = _r94_t0["put-shapes"].bind(_r94_t0), r94_xn$reverselast$3qIs = _r94_t0["reverse-last"].bind(_r94_t0), 
        r94_include = _r94_t0.include.bind(_r94_t0), r94_xn$createstroke$7Hrq = _r94_t0["create-stroke"].bind(_r94_t0), 
        r94_xn$setanchor$9Jrj = _r94_t0["set-anchor"].bind(_r94_t0), _r94_t0.gizmo = r1_globalTransform, 
        _r94_t0["set-width"](r1_WIDTH), r94_xn$setwidth$9Jrj(r1_WIDTH), r94_xn$assignunicode$7Hrq("C"), 
        r94_include(r1_capitalMarks), r94_outline = r94_xn$createstroke$7Hrq(), r94_outline["start-from"](r1_RIGHTSB - r1_OXHOOK, r1_CAP - r1_HOOK)["curve-to"](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para.sb), r1_CAPO, r1_MIDDLE, r1_CAPO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB, r1_CAP - r1_SMOOTHA)["line-to"](r1_SB, r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["curve-to"](r1_MIDDLE + r1_ITALICCORS + r1_KAPPA_HOOK * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK, r1_HOOK), 
        void r94_xn$putshapes$9Jrj(r94_outline["to-outline"](r1_STROKE, 0));
    }), r1_xn$createglyph$7Hrq("G", function() {
        var r97_currentGlyph, r97_xn$setwidth$9Jrj, r97_xn$assignunicode$7Hrq, r97_xn$startfrom$1aao, r97_xn$lineto$5sIl, r97_xn$curveto$1aao, r97_xn$cubicto$1aao, r97_xn$putshapes$9Jrj, r97_xn$reverselast$3qIs, r97_include, r97_xn$createstroke$7Hrq, r97_xn$setanchor$9Jrj, r97_outline, r97_bar, _r97_t0;
        return _r97_t0 = this, r97_currentGlyph = _r97_t0, r97_xn$setwidth$9Jrj = _r97_t0["set-width"].bind(_r97_t0), 
        r97_xn$assignunicode$7Hrq = function(r98_code) {
            var r98_code;
            return r97_currentGlyph["assign-unicode"](r98_code), r1_unicodeGlyphs[r97_currentGlyph.unicode[r97_currentGlyph.unicode.length - 1]] = r97_currentGlyph;
        }, r97_xn$startfrom$1aao = _r97_t0["start-from"].bind(_r97_t0), r97_xn$lineto$5sIl = _r97_t0["line-to"].bind(_r97_t0), 
        r97_xn$curveto$1aao = _r97_t0["curve-to"].bind(_r97_t0), r97_xn$cubicto$1aao = _r97_t0["cubic-to"].bind(_r97_t0), 
        r97_xn$putshapes$9Jrj = _r97_t0["put-shapes"].bind(_r97_t0), r97_xn$reverselast$3qIs = _r97_t0["reverse-last"].bind(_r97_t0), 
        r97_include = _r97_t0.include.bind(_r97_t0), r97_xn$createstroke$7Hrq = _r97_t0["create-stroke"].bind(_r97_t0), 
        r97_xn$setanchor$9Jrj = _r97_t0["set-anchor"].bind(_r97_t0), _r97_t0.gizmo = r1_globalTransform, 
        _r97_t0["set-width"](r1_WIDTH), r97_xn$setwidth$9Jrj(r1_WIDTH), r97_xn$assignunicode$7Hrq("G"), 
        r97_include(r1_capitalMarks), r97_outline = r97_xn$createstroke$7Hrq(), r97_outline["start-from"](r1_RIGHTSB - r1_OXHOOK, r1_CAP - r1_HOOK)["curve-to"](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para.sb), r1_CAPO, r1_MIDDLE, r1_CAPO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB, r1_CAP - r1_SMOOTHA)["line-to"](r1_SB, r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB, r1_SMOOTHA)["line-to"](r1_RIGHTSB, r1_CAP / 2 + r1_STROKE / 2)["heads-to"](r1_UPWARD), 
        r97_xn$putshapes$9Jrj(r97_outline["to-outline"](r1_STROKE, 0)), r97_bar = r97_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_CAP / 2 + r1_STROKE / 2)["line-to"](r1_RIGHTSB, r1_CAP / 2 + r1_STROKE / 2)["heads-to"](r1_RIGHTWARD), 
        void r97_xn$putshapes$9Jrj(r97_bar["to-outline"](0, r1_STROKE));
    }), r1_xn$createglyph$7Hrq("O", function() {
        var r100_currentGlyph, r100_xn$setwidth$9Jrj, r100_xn$assignunicode$7Hrq, r100_xn$startfrom$1aao, r100_xn$lineto$5sIl, r100_xn$curveto$1aao, r100_xn$cubicto$1aao, r100_xn$putshapes$9Jrj, r100_xn$reverselast$3qIs, r100_include, r100_xn$createstroke$7Hrq, r100_xn$setanchor$9Jrj, r100_outline, _r100_t0;
        return _r100_t0 = this, r100_currentGlyph = _r100_t0, r100_xn$setwidth$9Jrj = _r100_t0["set-width"].bind(_r100_t0), 
        r100_xn$assignunicode$7Hrq = function(r101_code) {
            var r101_code;
            return r100_currentGlyph["assign-unicode"](r101_code), r1_unicodeGlyphs[r100_currentGlyph.unicode[r100_currentGlyph.unicode.length - 1]] = r100_currentGlyph;
        }, r100_xn$startfrom$1aao = _r100_t0["start-from"].bind(_r100_t0), r100_xn$lineto$5sIl = _r100_t0["line-to"].bind(_r100_t0), 
        r100_xn$curveto$1aao = _r100_t0["curve-to"].bind(_r100_t0), r100_xn$cubicto$1aao = _r100_t0["cubic-to"].bind(_r100_t0), 
        r100_xn$putshapes$9Jrj = _r100_t0["put-shapes"].bind(_r100_t0), r100_xn$reverselast$3qIs = _r100_t0["reverse-last"].bind(_r100_t0), 
        r100_include = _r100_t0.include.bind(_r100_t0), r100_xn$createstroke$7Hrq = _r100_t0["create-stroke"].bind(_r100_t0), 
        r100_xn$setanchor$9Jrj = _r100_t0["set-anchor"].bind(_r100_t0), _r100_t0.gizmo = r1_globalTransform, 
        _r100_t0["set-width"](r1_WIDTH), r100_xn$setwidth$9Jrj(r1_WIDTH), r100_xn$assignunicode$7Hrq("O"), 
        r100_include(r1_capitalMarks), r100_outline = r100_xn$createstroke$7Hrq(), r100_outline["start-from"](r1_MIDDLE, r1_CAPO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB, r1_CAP - r1_SMOOTHA)["line-to"](r1_SB, r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB, r1_SMOOTHA)["line-to"](r1_RIGHTSB, r1_CAP - r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_CAPO)["heads-to"](r1_LEFTWARD), 
        void r100_xn$putshapes$9Jrj(r100_outline["to-outline"](r1_STROKE, 0));
    }), r1_xn$createglyph$7Hrq("Q", function() {
        var r103_currentGlyph, r103_xn$setwidth$9Jrj, r103_xn$assignunicode$7Hrq, r103_xn$startfrom$1aao, r103_xn$lineto$5sIl, r103_xn$curveto$1aao, r103_xn$cubicto$1aao, r103_xn$putshapes$9Jrj, r103_xn$reverselast$3qIs, r103_include, r103_xn$createstroke$7Hrq, r103_xn$setanchor$9Jrj, _r103_t0;
        return _r103_t0 = this, r103_currentGlyph = _r103_t0, r103_xn$setwidth$9Jrj = _r103_t0["set-width"].bind(_r103_t0), 
        r103_xn$assignunicode$7Hrq = function(r104_code) {
            var r104_code;
            return r103_currentGlyph["assign-unicode"](r104_code), r1_unicodeGlyphs[r103_currentGlyph.unicode[r103_currentGlyph.unicode.length - 1]] = r103_currentGlyph;
        }, r103_xn$startfrom$1aao = _r103_t0["start-from"].bind(_r103_t0), r103_xn$lineto$5sIl = _r103_t0["line-to"].bind(_r103_t0), 
        r103_xn$curveto$1aao = _r103_t0["curve-to"].bind(_r103_t0), r103_xn$cubicto$1aao = _r103_t0["cubic-to"].bind(_r103_t0), 
        r103_xn$putshapes$9Jrj = _r103_t0["put-shapes"].bind(_r103_t0), r103_xn$reverselast$3qIs = _r103_t0["reverse-last"].bind(_r103_t0), 
        r103_include = _r103_t0.include.bind(_r103_t0), r103_xn$createstroke$7Hrq = _r103_t0["create-stroke"].bind(_r103_t0), 
        r103_xn$setanchor$9Jrj = _r103_t0["set-anchor"].bind(_r103_t0), _r103_t0.gizmo = r1_globalTransform, 
        _r103_t0["set-width"](r1_WIDTH), r103_xn$setwidth$9Jrj(r1_WIDTH), r103_xn$assignunicode$7Hrq("Q"), 
        r103_include(r1_glyphs.O, !0), r103_xn$startfrom$1aao(r1_MIDDLE, 0), r103_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2, .2 * -r1_CAP), 
        r103_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE / 2 + r1_STROKE, .2 * -r1_CAP), r103_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE, 0), 
        r103_xn$lineto$5sIl(r1_MIDDLE + r1_STROKE * (1 - .5 / 3), .5 * r1_STROKE), void r103_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("U", function() {
        var r106_currentGlyph, r106_xn$setwidth$9Jrj, r106_xn$assignunicode$7Hrq, r106_xn$startfrom$1aao, r106_xn$lineto$5sIl, r106_xn$curveto$1aao, r106_xn$cubicto$1aao, r106_xn$putshapes$9Jrj, r106_xn$reverselast$3qIs, r106_include, r106_xn$createstroke$7Hrq, r106_xn$setanchor$9Jrj, r106_outline, _r106_t0;
        return _r106_t0 = this, r106_currentGlyph = _r106_t0, r106_xn$setwidth$9Jrj = _r106_t0["set-width"].bind(_r106_t0), 
        r106_xn$assignunicode$7Hrq = function(r107_code) {
            var r107_code;
            return r106_currentGlyph["assign-unicode"](r107_code), r1_unicodeGlyphs[r106_currentGlyph.unicode[r106_currentGlyph.unicode.length - 1]] = r106_currentGlyph;
        }, r106_xn$startfrom$1aao = _r106_t0["start-from"].bind(_r106_t0), r106_xn$lineto$5sIl = _r106_t0["line-to"].bind(_r106_t0), 
        r106_xn$curveto$1aao = _r106_t0["curve-to"].bind(_r106_t0), r106_xn$cubicto$1aao = _r106_t0["cubic-to"].bind(_r106_t0), 
        r106_xn$putshapes$9Jrj = _r106_t0["put-shapes"].bind(_r106_t0), r106_xn$reverselast$3qIs = _r106_t0["reverse-last"].bind(_r106_t0), 
        r106_include = _r106_t0.include.bind(_r106_t0), r106_xn$createstroke$7Hrq = _r106_t0["create-stroke"].bind(_r106_t0), 
        r106_xn$setanchor$9Jrj = _r106_t0["set-anchor"].bind(_r106_t0), _r106_t0.gizmo = r1_globalTransform, 
        _r106_t0["set-width"](r1_WIDTH), r106_xn$setwidth$9Jrj(r1_WIDTH), r106_xn$assignunicode$7Hrq("U"), 
        r106_include(r1_capitalMarks), r106_outline = r106_xn$createstroke$7Hrq(), r106_outline["start-from"](r1_SB, r1_CAP)["heads-to"](r1_DOWNWARD)["line-to"](r1_SB, r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB, r1_SMOOTHA)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_UPWARD), 
        void r106_xn$putshapes$9Jrj(r106_outline["to-outline"](r1_STROKE, 0));
    }), r1_xn$createglyph$7Hrq("F", function() {
        var r109_currentGlyph, r109_xn$setwidth$9Jrj, r109_xn$assignunicode$7Hrq, r109_xn$startfrom$1aao, r109_xn$lineto$5sIl, r109_xn$curveto$1aao, r109_xn$cubicto$1aao, r109_xn$putshapes$9Jrj, r109_xn$reverselast$3qIs, r109_include, r109_xn$createstroke$7Hrq, r109_xn$setanchor$9Jrj, _r109_t0;
        return _r109_t0 = this, r109_currentGlyph = _r109_t0, r109_xn$setwidth$9Jrj = _r109_t0["set-width"].bind(_r109_t0), 
        r109_xn$assignunicode$7Hrq = function(r110_code) {
            var r110_code;
            return r109_currentGlyph["assign-unicode"](r110_code), r1_unicodeGlyphs[r109_currentGlyph.unicode[r109_currentGlyph.unicode.length - 1]] = r109_currentGlyph;
        }, r109_xn$startfrom$1aao = _r109_t0["start-from"].bind(_r109_t0), r109_xn$lineto$5sIl = _r109_t0["line-to"].bind(_r109_t0), 
        r109_xn$curveto$1aao = _r109_t0["curve-to"].bind(_r109_t0), r109_xn$cubicto$1aao = _r109_t0["cubic-to"].bind(_r109_t0), 
        r109_xn$putshapes$9Jrj = _r109_t0["put-shapes"].bind(_r109_t0), r109_xn$reverselast$3qIs = _r109_t0["reverse-last"].bind(_r109_t0), 
        r109_include = _r109_t0.include.bind(_r109_t0), r109_xn$createstroke$7Hrq = _r109_t0["create-stroke"].bind(_r109_t0), 
        r109_xn$setanchor$9Jrj = _r109_t0["set-anchor"].bind(_r109_t0), _r109_t0.gizmo = r1_globalTransform, 
        _r109_t0["set-width"](r1_WIDTH), r109_xn$setwidth$9Jrj(r1_WIDTH), r109_xn$assignunicode$7Hrq("F"), 
        r109_include(r1_capitalMarks), r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](1.5 * r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, r1_CAP)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r109_xn$putshapes$9Jrj(r109_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, .54 * r1_CAP)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r1_HALFSTROKE, .54 * r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("E", function() {
        var r112_currentGlyph, r112_xn$setwidth$9Jrj, r112_xn$assignunicode$7Hrq, r112_xn$startfrom$1aao, r112_xn$lineto$5sIl, r112_xn$curveto$1aao, r112_xn$cubicto$1aao, r112_xn$putshapes$9Jrj, r112_xn$reverselast$3qIs, r112_include, r112_xn$createstroke$7Hrq, r112_xn$setanchor$9Jrj, _r112_t0;
        return _r112_t0 = this, r112_currentGlyph = _r112_t0, r112_xn$setwidth$9Jrj = _r112_t0["set-width"].bind(_r112_t0), 
        r112_xn$assignunicode$7Hrq = function(r113_code) {
            var r113_code;
            return r112_currentGlyph["assign-unicode"](r113_code), r1_unicodeGlyphs[r112_currentGlyph.unicode[r112_currentGlyph.unicode.length - 1]] = r112_currentGlyph;
        }, r112_xn$startfrom$1aao = _r112_t0["start-from"].bind(_r112_t0), r112_xn$lineto$5sIl = _r112_t0["line-to"].bind(_r112_t0), 
        r112_xn$curveto$1aao = _r112_t0["curve-to"].bind(_r112_t0), r112_xn$cubicto$1aao = _r112_t0["cubic-to"].bind(_r112_t0), 
        r112_xn$putshapes$9Jrj = _r112_t0["put-shapes"].bind(_r112_t0), r112_xn$reverselast$3qIs = _r112_t0["reverse-last"].bind(_r112_t0), 
        r112_include = _r112_t0.include.bind(_r112_t0), r112_xn$createstroke$7Hrq = _r112_t0["create-stroke"].bind(_r112_t0), 
        r112_xn$setanchor$9Jrj = _r112_t0["set-anchor"].bind(_r112_t0), _r112_t0.gizmo = r1_globalTransform, 
        _r112_t0["set-width"](r1_WIDTH), r112_xn$setwidth$9Jrj(r1_WIDTH), r112_xn$assignunicode$7Hrq("E"), 
        r112_include(r1_glyphs.F, !0), void r112_xn$putshapes$9Jrj(r112_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, 0)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("H", function() {
        var r115_currentGlyph, r115_xn$setwidth$9Jrj, r115_xn$assignunicode$7Hrq, r115_xn$startfrom$1aao, r115_xn$lineto$5sIl, r115_xn$curveto$1aao, r115_xn$cubicto$1aao, r115_xn$putshapes$9Jrj, r115_xn$reverselast$3qIs, r115_include, r115_xn$createstroke$7Hrq, r115_xn$setanchor$9Jrj, _r115_t0;
        return _r115_t0 = this, r115_currentGlyph = _r115_t0, r115_xn$setwidth$9Jrj = _r115_t0["set-width"].bind(_r115_t0), 
        r115_xn$assignunicode$7Hrq = function(r116_code) {
            var r116_code;
            return r115_currentGlyph["assign-unicode"](r116_code), r1_unicodeGlyphs[r115_currentGlyph.unicode[r115_currentGlyph.unicode.length - 1]] = r115_currentGlyph;
        }, r115_xn$startfrom$1aao = _r115_t0["start-from"].bind(_r115_t0), r115_xn$lineto$5sIl = _r115_t0["line-to"].bind(_r115_t0), 
        r115_xn$curveto$1aao = _r115_t0["curve-to"].bind(_r115_t0), r115_xn$cubicto$1aao = _r115_t0["cubic-to"].bind(_r115_t0), 
        r115_xn$putshapes$9Jrj = _r115_t0["put-shapes"].bind(_r115_t0), r115_xn$reverselast$3qIs = _r115_t0["reverse-last"].bind(_r115_t0), 
        r115_include = _r115_t0.include.bind(_r115_t0), r115_xn$createstroke$7Hrq = _r115_t0["create-stroke"].bind(_r115_t0), 
        r115_xn$setanchor$9Jrj = _r115_t0["set-anchor"].bind(_r115_t0), _r115_t0.gizmo = r1_globalTransform, 
        _r115_t0["set-width"](r1_WIDTH), r115_xn$setwidth$9Jrj(r1_WIDTH), r115_xn$assignunicode$7Hrq("H"), 
        r115_include(r1_capitalMarks), r115_xn$putshapes$9Jrj(r115_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r115_xn$putshapes$9Jrj(r115_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        void r115_xn$putshapes$9Jrj(r115_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP / 2)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, r1_CAP / 2)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("L", function() {
        var r118_currentGlyph, r118_xn$setwidth$9Jrj, r118_xn$assignunicode$7Hrq, r118_xn$startfrom$1aao, r118_xn$lineto$5sIl, r118_xn$curveto$1aao, r118_xn$cubicto$1aao, r118_xn$putshapes$9Jrj, r118_xn$reverselast$3qIs, r118_include, r118_xn$createstroke$7Hrq, r118_xn$setanchor$9Jrj, _r118_t0;
        return _r118_t0 = this, r118_currentGlyph = _r118_t0, r118_xn$setwidth$9Jrj = _r118_t0["set-width"].bind(_r118_t0), 
        r118_xn$assignunicode$7Hrq = function(r119_code) {
            var r119_code;
            return r118_currentGlyph["assign-unicode"](r119_code), r1_unicodeGlyphs[r118_currentGlyph.unicode[r118_currentGlyph.unicode.length - 1]] = r118_currentGlyph;
        }, r118_xn$startfrom$1aao = _r118_t0["start-from"].bind(_r118_t0), r118_xn$lineto$5sIl = _r118_t0["line-to"].bind(_r118_t0), 
        r118_xn$curveto$1aao = _r118_t0["curve-to"].bind(_r118_t0), r118_xn$cubicto$1aao = _r118_t0["cubic-to"].bind(_r118_t0), 
        r118_xn$putshapes$9Jrj = _r118_t0["put-shapes"].bind(_r118_t0), r118_xn$reverselast$3qIs = _r118_t0["reverse-last"].bind(_r118_t0), 
        r118_include = _r118_t0.include.bind(_r118_t0), r118_xn$createstroke$7Hrq = _r118_t0["create-stroke"].bind(_r118_t0), 
        r118_xn$setanchor$9Jrj = _r118_t0["set-anchor"].bind(_r118_t0), _r118_t0.gizmo = r1_globalTransform, 
        _r118_t0["set-width"](r1_WIDTH), r118_xn$setwidth$9Jrj(r1_WIDTH), r118_xn$assignunicode$7Hrq("L"), 
        r118_include(r1_capitalMarks), r118_xn$putshapes$9Jrj(r118_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, r1_CAP)["set-width"](r1_STROKE, 0)["heads-to"](r1_DOWNWARD)["line-to"](1.5 * r1_SB, 0)["heads-to"](r1_DOWNWARD)["to-outline"]()), 
        void r118_xn$putshapes$9Jrj(r118_xn$createstroke$7Hrq()["start-from"](1.5 * r1_SB, 0)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotlessI.straight", function() {
        var r121_currentGlyph, r121_xn$setwidth$9Jrj, r121_xn$assignunicode$7Hrq, r121_xn$startfrom$1aao, r121_xn$lineto$5sIl, r121_xn$curveto$1aao, r121_xn$cubicto$1aao, r121_xn$putshapes$9Jrj, r121_xn$reverselast$3qIs, r121_include, r121_xn$createstroke$7Hrq, r121_xn$setanchor$9Jrj, _r121_t0;
        return _r121_t0 = this, r121_currentGlyph = _r121_t0, r121_xn$setwidth$9Jrj = _r121_t0["set-width"].bind(_r121_t0), 
        r121_xn$assignunicode$7Hrq = function(r122_code) {
            var r122_code;
            return r121_currentGlyph["assign-unicode"](r122_code), r1_unicodeGlyphs[r121_currentGlyph.unicode[r121_currentGlyph.unicode.length - 1]] = r121_currentGlyph;
        }, r121_xn$startfrom$1aao = _r121_t0["start-from"].bind(_r121_t0), r121_xn$lineto$5sIl = _r121_t0["line-to"].bind(_r121_t0), 
        r121_xn$curveto$1aao = _r121_t0["curve-to"].bind(_r121_t0), r121_xn$cubicto$1aao = _r121_t0["cubic-to"].bind(_r121_t0), 
        r121_xn$putshapes$9Jrj = _r121_t0["put-shapes"].bind(_r121_t0), r121_xn$reverselast$3qIs = _r121_t0["reverse-last"].bind(_r121_t0), 
        r121_include = _r121_t0.include.bind(_r121_t0), r121_xn$createstroke$7Hrq = _r121_t0["create-stroke"].bind(_r121_t0), 
        r121_xn$setanchor$9Jrj = _r121_t0["set-anchor"].bind(_r121_t0), _r121_t0.gizmo = r1_globalTransform, 
        _r121_t0["set-width"](r1_WIDTH), void r121_xn$putshapes$9Jrj(r121_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotlessI.symmetric", function() {
        var r124_currentGlyph, r124_xn$setwidth$9Jrj, r124_xn$assignunicode$7Hrq, r124_xn$startfrom$1aao, r124_xn$lineto$5sIl, r124_xn$curveto$1aao, r124_xn$cubicto$1aao, r124_xn$putshapes$9Jrj, r124_xn$reverselast$3qIs, r124_include, r124_xn$createstroke$7Hrq, r124_xn$setanchor$9Jrj, _r124_t0;
        return _r124_t0 = this, r124_currentGlyph = _r124_t0, r124_xn$setwidth$9Jrj = _r124_t0["set-width"].bind(_r124_t0), 
        r124_xn$assignunicode$7Hrq = function(r125_code) {
            var r125_code;
            return r124_currentGlyph["assign-unicode"](r125_code), r1_unicodeGlyphs[r124_currentGlyph.unicode[r124_currentGlyph.unicode.length - 1]] = r124_currentGlyph;
        }, r124_xn$startfrom$1aao = _r124_t0["start-from"].bind(_r124_t0), r124_xn$lineto$5sIl = _r124_t0["line-to"].bind(_r124_t0), 
        r124_xn$curveto$1aao = _r124_t0["curve-to"].bind(_r124_t0), r124_xn$cubicto$1aao = _r124_t0["cubic-to"].bind(_r124_t0), 
        r124_xn$putshapes$9Jrj = _r124_t0["put-shapes"].bind(_r124_t0), r124_xn$reverselast$3qIs = _r124_t0["reverse-last"].bind(_r124_t0), 
        r124_include = _r124_t0.include.bind(_r124_t0), r124_xn$createstroke$7Hrq = _r124_t0["create-stroke"].bind(_r124_t0), 
        r124_xn$setanchor$9Jrj = _r124_t0["set-anchor"].bind(_r124_t0), _r124_t0.gizmo = r1_globalTransform, 
        _r124_t0["set-width"](r1_WIDTH), r124_include(r1_glyphs["dotlessI.straight"]), r124_xn$putshapes$9Jrj(r124_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - .26 * r1_WIDTH - r1_STROKE * r1_globalTransform.yx, r1_CAP)["set-width"](0, r1_STROKE)["line-to"](r1_MIDDLE + .26 * r1_WIDTH - r1_STROKE * r1_globalTransform.yx, r1_CAP)["to-outline"]()), 
        void r124_xn$putshapes$9Jrj(r124_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - .26 * r1_WIDTH + r1_STROKE * r1_globalTransform.yx, 0)["set-width"](r1_STROKE, 0)["line-to"](r1_MIDDLE + .26 * r1_WIDTH + r1_STROKE * r1_globalTransform.yx, 0)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("I", function() {
        var r127_currentGlyph, r127_xn$setwidth$9Jrj, r127_xn$assignunicode$7Hrq, r127_xn$startfrom$1aao, r127_xn$lineto$5sIl, r127_xn$curveto$1aao, r127_xn$cubicto$1aao, r127_xn$putshapes$9Jrj, r127_xn$reverselast$3qIs, r127_include, r127_xn$createstroke$7Hrq, r127_xn$setanchor$9Jrj, _r127_t0;
        return _r127_t0 = this, r127_currentGlyph = _r127_t0, r127_xn$setwidth$9Jrj = _r127_t0["set-width"].bind(_r127_t0), 
        r127_xn$assignunicode$7Hrq = function(r128_code) {
            var r128_code;
            return r127_currentGlyph["assign-unicode"](r128_code), r1_unicodeGlyphs[r127_currentGlyph.unicode[r127_currentGlyph.unicode.length - 1]] = r127_currentGlyph;
        }, r127_xn$startfrom$1aao = _r127_t0["start-from"].bind(_r127_t0), r127_xn$lineto$5sIl = _r127_t0["line-to"].bind(_r127_t0), 
        r127_xn$curveto$1aao = _r127_t0["curve-to"].bind(_r127_t0), r127_xn$cubicto$1aao = _r127_t0["cubic-to"].bind(_r127_t0), 
        r127_xn$putshapes$9Jrj = _r127_t0["put-shapes"].bind(_r127_t0), r127_xn$reverselast$3qIs = _r127_t0["reverse-last"].bind(_r127_t0), 
        r127_include = _r127_t0.include.bind(_r127_t0), r127_xn$createstroke$7Hrq = _r127_t0["create-stroke"].bind(_r127_t0), 
        r127_xn$setanchor$9Jrj = _r127_t0["set-anchor"].bind(_r127_t0), _r127_t0.gizmo = r1_globalTransform, 
        _r127_t0["set-width"](r1_WIDTH), r127_xn$setwidth$9Jrj(r1_WIDTH), r127_xn$assignunicode$7Hrq("I"), 
        r127_include(r1_capitalMarks), void r127_include(r1_glyphs["dotlessI.symmetric"]);
    }), r1_xn$createglyph$7Hrq("T", function() {
        var r130_currentGlyph, r130_xn$setwidth$9Jrj, r130_xn$assignunicode$7Hrq, r130_xn$startfrom$1aao, r130_xn$lineto$5sIl, r130_xn$curveto$1aao, r130_xn$cubicto$1aao, r130_xn$putshapes$9Jrj, r130_xn$reverselast$3qIs, r130_include, r130_xn$createstroke$7Hrq, r130_xn$setanchor$9Jrj, _r130_t0;
        return _r130_t0 = this, r130_currentGlyph = _r130_t0, r130_xn$setwidth$9Jrj = _r130_t0["set-width"].bind(_r130_t0), 
        r130_xn$assignunicode$7Hrq = function(r131_code) {
            var r131_code;
            return r130_currentGlyph["assign-unicode"](r131_code), r1_unicodeGlyphs[r130_currentGlyph.unicode[r130_currentGlyph.unicode.length - 1]] = r130_currentGlyph;
        }, r130_xn$startfrom$1aao = _r130_t0["start-from"].bind(_r130_t0), r130_xn$lineto$5sIl = _r130_t0["line-to"].bind(_r130_t0), 
        r130_xn$curveto$1aao = _r130_t0["curve-to"].bind(_r130_t0), r130_xn$cubicto$1aao = _r130_t0["cubic-to"].bind(_r130_t0), 
        r130_xn$putshapes$9Jrj = _r130_t0["put-shapes"].bind(_r130_t0), r130_xn$reverselast$3qIs = _r130_t0["reverse-last"].bind(_r130_t0), 
        r130_include = _r130_t0.include.bind(_r130_t0), r130_xn$createstroke$7Hrq = _r130_t0["create-stroke"].bind(_r130_t0), 
        r130_xn$setanchor$9Jrj = _r130_t0["set-anchor"].bind(_r130_t0), _r130_t0.gizmo = r1_globalTransform, 
        _r130_t0["set-width"](r1_WIDTH), r130_xn$setwidth$9Jrj(r1_WIDTH), r130_xn$assignunicode$7Hrq("T"), 
        r130_include(r1_capitalMarks), r130_xn$putshapes$9Jrj(r130_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        void r130_xn$putshapes$9Jrj(r130_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("Z", function() {
        var r133_currentGlyph, r133_xn$setwidth$9Jrj, r133_xn$assignunicode$7Hrq, r133_xn$startfrom$1aao, r133_xn$lineto$5sIl, r133_xn$curveto$1aao, r133_xn$cubicto$1aao, r133_xn$putshapes$9Jrj, r133_xn$reverselast$3qIs, r133_include, r133_xn$createstroke$7Hrq, r133_xn$setanchor$9Jrj, r133_cor, _r133_t0;
        return _r133_t0 = this, r133_currentGlyph = _r133_t0, r133_xn$setwidth$9Jrj = _r133_t0["set-width"].bind(_r133_t0), 
        r133_xn$assignunicode$7Hrq = function(r134_code) {
            var r134_code;
            return r133_currentGlyph["assign-unicode"](r134_code), r1_unicodeGlyphs[r133_currentGlyph.unicode[r133_currentGlyph.unicode.length - 1]] = r133_currentGlyph;
        }, r133_xn$startfrom$1aao = _r133_t0["start-from"].bind(_r133_t0), r133_xn$lineto$5sIl = _r133_t0["line-to"].bind(_r133_t0), 
        r133_xn$curveto$1aao = _r133_t0["curve-to"].bind(_r133_t0), r133_xn$cubicto$1aao = _r133_t0["cubic-to"].bind(_r133_t0), 
        r133_xn$putshapes$9Jrj = _r133_t0["put-shapes"].bind(_r133_t0), r133_xn$reverselast$3qIs = _r133_t0["reverse-last"].bind(_r133_t0), 
        r133_include = _r133_t0.include.bind(_r133_t0), r133_xn$createstroke$7Hrq = _r133_t0["create-stroke"].bind(_r133_t0), 
        r133_xn$setanchor$9Jrj = _r133_t0["set-anchor"].bind(_r133_t0), _r133_t0.gizmo = r1_globalTransform, 
        _r133_t0["set-width"](r1_WIDTH), r133_xn$setwidth$9Jrj(r1_WIDTH), r133_xn$assignunicode$7Hrq("Z"), 
        r133_include(r1_capitalMarks), r133_cor = 1.15, r133_xn$putshapes$9Jrj(r133_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r133_xn$putshapes$9Jrj(r133_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_RIGHTWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r133_xn$startfrom$1aao(r1_SB, r1_STROKE), r133_xn$lineto$5sIl(r1_SB + r1_STROKE * r133_cor, r1_STROKE), 
        r133_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP - r1_STROKE), r133_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r133_cor, r1_CAP - r1_STROKE), 
        void r133_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("J.straight", function() {
        var r136_currentGlyph, r136_xn$setwidth$9Jrj, r136_xn$assignunicode$7Hrq, r136_xn$startfrom$1aao, r136_xn$lineto$5sIl, r136_xn$curveto$1aao, r136_xn$cubicto$1aao, r136_xn$putshapes$9Jrj, r136_xn$reverselast$3qIs, r136_include, r136_xn$createstroke$7Hrq, r136_xn$setanchor$9Jrj, r136_slope, r136_expand, r136_coexpand, r136_kappa, r136_smooth, r136_hookx, _r136_t0;
        return _r136_t0 = this, r136_currentGlyph = _r136_t0, r136_xn$setwidth$9Jrj = _r136_t0["set-width"].bind(_r136_t0), 
        r136_xn$assignunicode$7Hrq = function(r137_code) {
            var r137_code;
            return r136_currentGlyph["assign-unicode"](r137_code), r1_unicodeGlyphs[r136_currentGlyph.unicode[r136_currentGlyph.unicode.length - 1]] = r136_currentGlyph;
        }, r136_xn$startfrom$1aao = _r136_t0["start-from"].bind(_r136_t0), r136_xn$lineto$5sIl = _r136_t0["line-to"].bind(_r136_t0), 
        r136_xn$curveto$1aao = _r136_t0["curve-to"].bind(_r136_t0), r136_xn$cubicto$1aao = _r136_t0["cubic-to"].bind(_r136_t0), 
        r136_xn$putshapes$9Jrj = _r136_t0["put-shapes"].bind(_r136_t0), r136_xn$reverselast$3qIs = _r136_t0["reverse-last"].bind(_r136_t0), 
        r136_include = _r136_t0.include.bind(_r136_t0), r136_xn$createstroke$7Hrq = _r136_t0["create-stroke"].bind(_r136_t0), 
        r136_xn$setanchor$9Jrj = _r136_t0["set-anchor"].bind(_r136_t0), _r136_t0.gizmo = r1_globalTransform, 
        _r136_t0["set-width"](r1_WIDTH), r136_xn$setwidth$9Jrj(r1_WIDTH), r136_include(r1_capitalMarks), 
        r136_slope = 92e-5 * r1_STROKE, r136_expand = .35, r136_coexpand = (1 - r136_expand) / 2, 
        r136_kappa = r1_KAPPA_HOOK, r136_smooth = r1_HOOK + .75 * r1_STROKE, r136_hookx = .5 * r1_SB + r1_OXHOOK, 
        void r136_xn$putshapes$9Jrj(r136_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB - r1_JBALANCE, r1_CAP)["set-width"](0, r1_STROKE)["heads-to"](r1_DOWNWARD)["line-to"](r1_RIGHTSB - r1_JBALANCE, r136_smooth)["arc-vh-to"](r1_mix(r136_hookx, r1_RIGHTSB - r1_JBALANCE, .5), r1_O)["heads-to"](r1_LEFTWARD)["curve-to"](r1_MIDDLE - r136_kappa * (r1_MIDDLE - r1_SB) - .5 * r1_SB, r1_O, r136_hookx, r1_HOOK)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("J.serifed", function() {
        var r139_currentGlyph, r139_xn$setwidth$9Jrj, r139_xn$assignunicode$7Hrq, r139_xn$startfrom$1aao, r139_xn$lineto$5sIl, r139_xn$curveto$1aao, r139_xn$cubicto$1aao, r139_xn$putshapes$9Jrj, r139_xn$reverselast$3qIs, r139_include, r139_xn$createstroke$7Hrq, r139_xn$setanchor$9Jrj, _r139_t0;
        return _r139_t0 = this, r139_currentGlyph = _r139_t0, r139_xn$setwidth$9Jrj = _r139_t0["set-width"].bind(_r139_t0), 
        r139_xn$assignunicode$7Hrq = function(r140_code) {
            var r140_code;
            return r139_currentGlyph["assign-unicode"](r140_code), r1_unicodeGlyphs[r139_currentGlyph.unicode[r139_currentGlyph.unicode.length - 1]] = r139_currentGlyph;
        }, r139_xn$startfrom$1aao = _r139_t0["start-from"].bind(_r139_t0), r139_xn$lineto$5sIl = _r139_t0["line-to"].bind(_r139_t0), 
        r139_xn$curveto$1aao = _r139_t0["curve-to"].bind(_r139_t0), r139_xn$cubicto$1aao = _r139_t0["cubic-to"].bind(_r139_t0), 
        r139_xn$putshapes$9Jrj = _r139_t0["put-shapes"].bind(_r139_t0), r139_xn$reverselast$3qIs = _r139_t0["reverse-last"].bind(_r139_t0), 
        r139_include = _r139_t0.include.bind(_r139_t0), r139_xn$createstroke$7Hrq = _r139_t0["create-stroke"].bind(_r139_t0), 
        r139_xn$setanchor$9Jrj = _r139_t0["set-anchor"].bind(_r139_t0), _r139_t0.gizmo = r1_globalTransform, 
        _r139_t0["set-width"](r1_WIDTH), r139_xn$setwidth$9Jrj(r1_WIDTH), r139_include(r1_glyphs["J.straight"], r1_BASE), 
        void r139_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_RIGHTSB - r1_HALFSTROKE - r1_JBALANCE, r1_CAP, r1_LONGJUT));
    }), r1_xn$selectvariant$7Hrq("J", "J", "serifed"), r1_xn$createglyph$7Hrq("N", function() {
        var r142_currentGlyph, r142_xn$setwidth$9Jrj, r142_xn$assignunicode$7Hrq, r142_xn$startfrom$1aao, r142_xn$lineto$5sIl, r142_xn$curveto$1aao, r142_xn$cubicto$1aao, r142_xn$putshapes$9Jrj, r142_xn$reverselast$3qIs, r142_include, r142_xn$createstroke$7Hrq, r142_xn$setanchor$9Jrj, r142_topstroke, r142_halftopstroke, _r142_t0;
        return _r142_t0 = this, r142_currentGlyph = _r142_t0, r142_xn$setwidth$9Jrj = _r142_t0["set-width"].bind(_r142_t0), 
        r142_xn$assignunicode$7Hrq = function(r143_code) {
            var r143_code;
            return r142_currentGlyph["assign-unicode"](r143_code), r1_unicodeGlyphs[r142_currentGlyph.unicode[r142_currentGlyph.unicode.length - 1]] = r142_currentGlyph;
        }, r142_xn$startfrom$1aao = _r142_t0["start-from"].bind(_r142_t0), r142_xn$lineto$5sIl = _r142_t0["line-to"].bind(_r142_t0), 
        r142_xn$curveto$1aao = _r142_t0["curve-to"].bind(_r142_t0), r142_xn$cubicto$1aao = _r142_t0["cubic-to"].bind(_r142_t0), 
        r142_xn$putshapes$9Jrj = _r142_t0["put-shapes"].bind(_r142_t0), r142_xn$reverselast$3qIs = _r142_t0["reverse-last"].bind(_r142_t0), 
        r142_include = _r142_t0.include.bind(_r142_t0), r142_xn$createstroke$7Hrq = _r142_t0["create-stroke"].bind(_r142_t0), 
        r142_xn$setanchor$9Jrj = _r142_t0["set-anchor"].bind(_r142_t0), _r142_t0.gizmo = r1_globalTransform, 
        _r142_t0["set-width"](r1_WIDTH), r142_xn$setwidth$9Jrj(r1_WIDTH), r142_xn$assignunicode$7Hrq("N"), 
        r142_include(r1_capitalMarks), r142_topstroke = Math.min(r1_STROKE, .24 * (r1_WIDTH - 2 * r1_SB)), 
        r142_halftopstroke = r142_topstroke / 2, r142_xn$putshapes$9Jrj(r142_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, .4 * r1_CAP)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["set-width"](0, r142_topstroke)["to-outline"]()), 
        r142_xn$putshapes$9Jrj(r142_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r142_topstroke, 0)["line-to"](r1_RIGHTSB, .6 * r1_CAP)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        void r142_xn$putshapes$9Jrj(r142_xn$createstroke$7Hrq()["start-from"](r1_SB + r142_halftopstroke, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r142_topstroke, 0)["line-to"](r1_RIGHTSB - r142_topstroke - r142_halftopstroke, 0)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("M", function() {
        var r145_currentGlyph, r145_xn$setwidth$9Jrj, r145_xn$assignunicode$7Hrq, r145_xn$startfrom$1aao, r145_xn$lineto$5sIl, r145_xn$curveto$1aao, r145_xn$cubicto$1aao, r145_xn$putshapes$9Jrj, r145_xn$reverselast$3qIs, r145_include, r145_xn$createstroke$7Hrq, r145_xn$setanchor$9Jrj, r145_topstroke, r145_halftopstroke, _r145_t0;
        return _r145_t0 = this, r145_currentGlyph = _r145_t0, r145_xn$setwidth$9Jrj = _r145_t0["set-width"].bind(_r145_t0), 
        r145_xn$assignunicode$7Hrq = function(r146_code) {
            var r146_code;
            return r145_currentGlyph["assign-unicode"](r146_code), r1_unicodeGlyphs[r145_currentGlyph.unicode[r145_currentGlyph.unicode.length - 1]] = r145_currentGlyph;
        }, r145_xn$startfrom$1aao = _r145_t0["start-from"].bind(_r145_t0), r145_xn$lineto$5sIl = _r145_t0["line-to"].bind(_r145_t0), 
        r145_xn$curveto$1aao = _r145_t0["curve-to"].bind(_r145_t0), r145_xn$cubicto$1aao = _r145_t0["cubic-to"].bind(_r145_t0), 
        r145_xn$putshapes$9Jrj = _r145_t0["put-shapes"].bind(_r145_t0), r145_xn$reverselast$3qIs = _r145_t0["reverse-last"].bind(_r145_t0), 
        r145_include = _r145_t0.include.bind(_r145_t0), r145_xn$createstroke$7Hrq = _r145_t0["create-stroke"].bind(_r145_t0), 
        r145_xn$setanchor$9Jrj = _r145_t0["set-anchor"].bind(_r145_t0), _r145_t0.gizmo = r1_globalTransform, 
        _r145_t0["set-width"](r1_WIDTH), r145_xn$setwidth$9Jrj(r1_WIDTH), r145_xn$assignunicode$7Hrq("M"), 
        r145_include(r1_capitalMarks), r145_topstroke = Math.min(r1_STROKE, .175 * (r1_WIDTH - 2 * r1_SB)), 
        r145_halftopstroke = r145_topstroke / 2, r145_xn$putshapes$9Jrj(r145_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, .2 * r1_CAP)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["set-width"](0, r145_topstroke)["to-outline"]()), 
        r145_xn$putshapes$9Jrj(r145_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, .2 * r1_CAP)["heads-to"](r1_UPWARD)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_UPWARD)["set-width"](r145_topstroke, 0)["to-outline"]()), 
        r145_xn$putshapes$9Jrj(r145_xn$createstroke$7Hrq()["start-from"](r1_SB + r145_halftopstroke, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r145_topstroke, 0)["line-to"](r1_MIDDLE - r145_halftopstroke, .3 * r1_CAP)["heads-to"](r1_DOWNWARD)["to-outline"]()), 
        void r145_xn$putshapes$9Jrj(r145_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r145_halftopstroke, .3 * r1_CAP)["heads-to"](r1_UPWARD)["set-width"](r145_topstroke, 0)["line-to"](r1_RIGHTSB - r145_halftopstroke, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("S", function() {
        var r148_currentGlyph, r148_xn$setwidth$9Jrj, r148_xn$assignunicode$7Hrq, r148_xn$startfrom$1aao, r148_xn$lineto$5sIl, r148_xn$curveto$1aao, r148_xn$cubicto$1aao, r148_xn$putshapes$9Jrj, r148_xn$reverselast$3qIs, r148_include, r148_xn$createstroke$7Hrq, r148_xn$setanchor$9Jrj, _r148_t0;
        return _r148_t0 = this, r148_currentGlyph = _r148_t0, r148_xn$setwidth$9Jrj = _r148_t0["set-width"].bind(_r148_t0), 
        r148_xn$assignunicode$7Hrq = function(r149_code) {
            var r149_code;
            return r148_currentGlyph["assign-unicode"](r149_code), r1_unicodeGlyphs[r148_currentGlyph.unicode[r148_currentGlyph.unicode.length - 1]] = r148_currentGlyph;
        }, r148_xn$startfrom$1aao = _r148_t0["start-from"].bind(_r148_t0), r148_xn$lineto$5sIl = _r148_t0["line-to"].bind(_r148_t0), 
        r148_xn$curveto$1aao = _r148_t0["curve-to"].bind(_r148_t0), r148_xn$cubicto$1aao = _r148_t0["cubic-to"].bind(_r148_t0), 
        r148_xn$putshapes$9Jrj = _r148_t0["put-shapes"].bind(_r148_t0), r148_xn$reverselast$3qIs = _r148_t0["reverse-last"].bind(_r148_t0), 
        r148_include = _r148_t0.include.bind(_r148_t0), r148_xn$createstroke$7Hrq = _r148_t0["create-stroke"].bind(_r148_t0), 
        r148_xn$setanchor$9Jrj = _r148_t0["set-anchor"].bind(_r148_t0), _r148_t0.gizmo = r1_globalTransform, 
        _r148_t0["set-width"](r1_WIDTH), r148_xn$setwidth$9Jrj(r1_WIDTH), r148_xn$assignunicode$7Hrq("S"), 
        r148_include(r1_capitalMarks), r148_xn$putshapes$9Jrj(r1_sHookUpper(r1_CAP, r1_SMOOTHA, r1_HOOK)), 
        r148_xn$putshapes$9Jrj(r1_sHookLower(0, r1_SMOOTHA, r1_HOOK)), void r148_xn$putshapes$9Jrj(r1_sStrand(r1_CAP - r1_SMOOTHA, r1_SMOOTHA));
    }), r1_xn$createglyph$7Hrq("fbar", function() {
        var r151_currentGlyph, r151_xn$setwidth$9Jrj, r151_xn$assignunicode$7Hrq, r151_xn$startfrom$1aao, r151_xn$lineto$5sIl, r151_xn$curveto$1aao, r151_xn$cubicto$1aao, r151_xn$putshapes$9Jrj, r151_xn$reverselast$3qIs, r151_include, r151_xn$createstroke$7Hrq, r151_xn$setanchor$9Jrj, _r151_t0;
        return _r151_t0 = this, r151_currentGlyph = _r151_t0, r151_xn$setwidth$9Jrj = _r151_t0["set-width"].bind(_r151_t0), 
        r151_xn$assignunicode$7Hrq = function(r152_code) {
            var r152_code;
            return r151_currentGlyph["assign-unicode"](r152_code), r1_unicodeGlyphs[r151_currentGlyph.unicode[r151_currentGlyph.unicode.length - 1]] = r151_currentGlyph;
        }, r151_xn$startfrom$1aao = _r151_t0["start-from"].bind(_r151_t0), r151_xn$lineto$5sIl = _r151_t0["line-to"].bind(_r151_t0), 
        r151_xn$curveto$1aao = _r151_t0["curve-to"].bind(_r151_t0), r151_xn$cubicto$1aao = _r151_t0["cubic-to"].bind(_r151_t0), 
        r151_xn$putshapes$9Jrj = _r151_t0["put-shapes"].bind(_r151_t0), r151_xn$reverselast$3qIs = _r151_t0["reverse-last"].bind(_r151_t0), 
        r151_include = _r151_t0.include.bind(_r151_t0), r151_xn$createstroke$7Hrq = _r151_t0["create-stroke"].bind(_r151_t0), 
        r151_xn$setanchor$9Jrj = _r151_t0["set-anchor"].bind(_r151_t0), _r151_t0.gizmo = r1_globalTransform, 
        _r151_t0["set-width"](r1_WIDTH), void r151_xn$putshapes$9Jrj(r151_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - r1_LONGJUT, r1_XH)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_MIDDLE + r1_LONGJUT, r1_XH)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("o", function() {
        var r154_currentGlyph, r154_xn$setwidth$9Jrj, r154_xn$assignunicode$7Hrq, r154_xn$startfrom$1aao, r154_xn$lineto$5sIl, r154_xn$curveto$1aao, r154_xn$cubicto$1aao, r154_xn$putshapes$9Jrj, r154_xn$reverselast$3qIs, r154_include, r154_xn$createstroke$7Hrq, r154_xn$setanchor$9Jrj, r154_outline, _r154_t0;
        return _r154_t0 = this, r154_currentGlyph = _r154_t0, r154_xn$setwidth$9Jrj = _r154_t0["set-width"].bind(_r154_t0), 
        r154_xn$assignunicode$7Hrq = function(r155_code) {
            var r155_code;
            return r154_currentGlyph["assign-unicode"](r155_code), r1_unicodeGlyphs[r154_currentGlyph.unicode[r154_currentGlyph.unicode.length - 1]] = r154_currentGlyph;
        }, r154_xn$startfrom$1aao = _r154_t0["start-from"].bind(_r154_t0), r154_xn$lineto$5sIl = _r154_t0["line-to"].bind(_r154_t0), 
        r154_xn$curveto$1aao = _r154_t0["curve-to"].bind(_r154_t0), r154_xn$cubicto$1aao = _r154_t0["cubic-to"].bind(_r154_t0), 
        r154_xn$putshapes$9Jrj = _r154_t0["put-shapes"].bind(_r154_t0), r154_xn$reverselast$3qIs = _r154_t0["reverse-last"].bind(_r154_t0), 
        r154_include = _r154_t0.include.bind(_r154_t0), r154_xn$createstroke$7Hrq = _r154_t0["create-stroke"].bind(_r154_t0), 
        r154_xn$setanchor$9Jrj = _r154_t0["set-anchor"].bind(_r154_t0), _r154_t0.gizmo = r1_globalTransform, 
        _r154_t0["set-width"](r1_WIDTH), r154_xn$setwidth$9Jrj(r1_WIDTH), r154_xn$assignunicode$7Hrq("o"), 
        r154_include(r1_eMarks), r154_outline = r154_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_XO)["set-width"](r1_STROKE, 0)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)["line-to"](r1_SB + r1_O, r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB - r1_O, r1_SMALLSMOOTHA)["line-to"](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD), 
        void r154_xn$putshapes$9Jrj(r154_outline["to-outline"]());
    }), r1_xn$createglyph$7Hrq("o.left", function() {
        var r157_currentGlyph, r157_xn$setwidth$9Jrj, r157_xn$assignunicode$7Hrq, r157_xn$startfrom$1aao, r157_xn$lineto$5sIl, r157_xn$curveto$1aao, r157_xn$cubicto$1aao, r157_xn$putshapes$9Jrj, r157_xn$reverselast$3qIs, r157_include, r157_xn$createstroke$7Hrq, r157_xn$setanchor$9Jrj, _r157_t0;
        return _r157_t0 = this, r157_currentGlyph = _r157_t0, r157_xn$setwidth$9Jrj = _r157_t0["set-width"].bind(_r157_t0), 
        r157_xn$assignunicode$7Hrq = function(r158_code) {
            var r158_code;
            return r157_currentGlyph["assign-unicode"](r158_code), r1_unicodeGlyphs[r157_currentGlyph.unicode[r157_currentGlyph.unicode.length - 1]] = r157_currentGlyph;
        }, r157_xn$startfrom$1aao = _r157_t0["start-from"].bind(_r157_t0), r157_xn$lineto$5sIl = _r157_t0["line-to"].bind(_r157_t0), 
        r157_xn$curveto$1aao = _r157_t0["curve-to"].bind(_r157_t0), r157_xn$cubicto$1aao = _r157_t0["cubic-to"].bind(_r157_t0), 
        r157_xn$putshapes$9Jrj = _r157_t0["put-shapes"].bind(_r157_t0), r157_xn$reverselast$3qIs = _r157_t0["reverse-last"].bind(_r157_t0), 
        r157_include = _r157_t0.include.bind(_r157_t0), r157_xn$createstroke$7Hrq = _r157_t0["create-stroke"].bind(_r157_t0), 
        r157_xn$setanchor$9Jrj = _r157_t0["set-anchor"].bind(_r157_t0), _r157_t0.gizmo = r1_globalTransform, 
        _r157_t0["set-width"](r1_WIDTH), r157_xn$setwidth$9Jrj(r1_WIDTH), r157_xn$putshapes$9Jrj(r157_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_XO)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["arc-hv-to"](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)["line-to"](r1_RIGHTSB - r1_O, r1_SMALLSMOOTHA)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        void r157_xn$putshapes$9Jrj(r157_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_O + r1_STROKE)["heads-to"](r1_LEFTWARD)["set-width"](r1_STROKE, 0)["arc-hv-to"](r1_SB + r1_STROKE, r1_SMALLSMOOTHB - .05 * r1_STROKE)["set-width"](r1_HALFSTROKE, 0)["line-to"](r1_SB + r1_STROKE, r1_XH - r1_SMALLSMOOTHA + .05 * r1_STROKE)["set-width"](r1_HALFSTROKE, 0)["arc-vh-to"](r1_MIDDLE, r1_XO - r1_STROKE)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("o.right", function() {
        var r160_currentGlyph, r160_xn$setwidth$9Jrj, r160_xn$assignunicode$7Hrq, r160_xn$startfrom$1aao, r160_xn$lineto$5sIl, r160_xn$curveto$1aao, r160_xn$cubicto$1aao, r160_xn$putshapes$9Jrj, r160_xn$reverselast$3qIs, r160_include, r160_xn$createstroke$7Hrq, r160_xn$setanchor$9Jrj, _r160_t0;
        return _r160_t0 = this, r160_currentGlyph = _r160_t0, r160_xn$setwidth$9Jrj = _r160_t0["set-width"].bind(_r160_t0), 
        r160_xn$assignunicode$7Hrq = function(r161_code) {
            var r161_code;
            return r160_currentGlyph["assign-unicode"](r161_code), r1_unicodeGlyphs[r160_currentGlyph.unicode[r160_currentGlyph.unicode.length - 1]] = r160_currentGlyph;
        }, r160_xn$startfrom$1aao = _r160_t0["start-from"].bind(_r160_t0), r160_xn$lineto$5sIl = _r160_t0["line-to"].bind(_r160_t0), 
        r160_xn$curveto$1aao = _r160_t0["curve-to"].bind(_r160_t0), r160_xn$cubicto$1aao = _r160_t0["cubic-to"].bind(_r160_t0), 
        r160_xn$putshapes$9Jrj = _r160_t0["put-shapes"].bind(_r160_t0), r160_xn$reverselast$3qIs = _r160_t0["reverse-last"].bind(_r160_t0), 
        r160_include = _r160_t0.include.bind(_r160_t0), r160_xn$createstroke$7Hrq = _r160_t0["create-stroke"].bind(_r160_t0), 
        r160_xn$setanchor$9Jrj = _r160_t0["set-anchor"].bind(_r160_t0), _r160_t0.gizmo = r1_globalTransform, 
        _r160_t0["set-width"](r1_WIDTH), r160_xn$setwidth$9Jrj(r1_WIDTH), r160_xn$putshapes$9Jrj(r160_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD)["set-width"](r1_STROKE, 0)["arc-hv-to"](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)["line-to"](r1_SB + r1_O, r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r160_xn$putshapes$9Jrj(r160_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_O + r1_STROKE)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["arc-hv-to"](r1_RIGHTSB - r1_STROKE, r1_SMALLSMOOTHA - .05 * r1_STROKE)["set-width"](0, r1_HALFSTROKE)["line-to"](r1_RIGHTSB - r1_STROKE, r1_XH - r1_SMALLSMOOTHB + .05 * r1_STROKE)["set-width"](0, r1_HALFSTROKE)["arc-vh-to"](r1_MIDDLE, r1_XO - r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("p", function() {
        var r163_currentGlyph, r163_xn$setwidth$9Jrj, r163_xn$assignunicode$7Hrq, r163_xn$startfrom$1aao, r163_xn$lineto$5sIl, r163_xn$curveto$1aao, r163_xn$cubicto$1aao, r163_xn$putshapes$9Jrj, r163_xn$reverselast$3qIs, r163_include, r163_xn$createstroke$7Hrq, r163_xn$setanchor$9Jrj, _r163_t0;
        return _r163_t0 = this, r163_currentGlyph = _r163_t0, r163_xn$setwidth$9Jrj = _r163_t0["set-width"].bind(_r163_t0), 
        r163_xn$assignunicode$7Hrq = function(r164_code) {
            var r164_code;
            return r163_currentGlyph["assign-unicode"](r164_code), r1_unicodeGlyphs[r163_currentGlyph.unicode[r163_currentGlyph.unicode.length - 1]] = r163_currentGlyph;
        }, r163_xn$startfrom$1aao = _r163_t0["start-from"].bind(_r163_t0), r163_xn$lineto$5sIl = _r163_t0["line-to"].bind(_r163_t0), 
        r163_xn$curveto$1aao = _r163_t0["curve-to"].bind(_r163_t0), r163_xn$cubicto$1aao = _r163_t0["cubic-to"].bind(_r163_t0), 
        r163_xn$putshapes$9Jrj = _r163_t0["put-shapes"].bind(_r163_t0), r163_xn$reverselast$3qIs = _r163_t0["reverse-last"].bind(_r163_t0), 
        r163_include = _r163_t0.include.bind(_r163_t0), r163_xn$createstroke$7Hrq = _r163_t0["create-stroke"].bind(_r163_t0), 
        r163_xn$setanchor$9Jrj = _r163_t0["set-anchor"].bind(_r163_t0), _r163_t0.gizmo = r1_globalTransform, 
        _r163_t0["set-width"](r1_WIDTH), r163_xn$setwidth$9Jrj(r1_WIDTH), r163_xn$assignunicode$7Hrq("p"), 
        r163_include(r1_eMarks), r163_include(r1_glyphs["o.left"]), void r163_xn$putshapes$9Jrj(r163_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r1_DESCENDER)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("b", function() {
        var r166_currentGlyph, r166_xn$setwidth$9Jrj, r166_xn$assignunicode$7Hrq, r166_xn$startfrom$1aao, r166_xn$lineto$5sIl, r166_xn$curveto$1aao, r166_xn$cubicto$1aao, r166_xn$putshapes$9Jrj, r166_xn$reverselast$3qIs, r166_include, r166_xn$createstroke$7Hrq, r166_xn$setanchor$9Jrj, _r166_t0;
        return _r166_t0 = this, r166_currentGlyph = _r166_t0, r166_xn$setwidth$9Jrj = _r166_t0["set-width"].bind(_r166_t0), 
        r166_xn$assignunicode$7Hrq = function(r167_code) {
            var r167_code;
            return r166_currentGlyph["assign-unicode"](r167_code), r1_unicodeGlyphs[r166_currentGlyph.unicode[r166_currentGlyph.unicode.length - 1]] = r166_currentGlyph;
        }, r166_xn$startfrom$1aao = _r166_t0["start-from"].bind(_r166_t0), r166_xn$lineto$5sIl = _r166_t0["line-to"].bind(_r166_t0), 
        r166_xn$curveto$1aao = _r166_t0["curve-to"].bind(_r166_t0), r166_xn$cubicto$1aao = _r166_t0["cubic-to"].bind(_r166_t0), 
        r166_xn$putshapes$9Jrj = _r166_t0["put-shapes"].bind(_r166_t0), r166_xn$reverselast$3qIs = _r166_t0["reverse-last"].bind(_r166_t0), 
        r166_include = _r166_t0.include.bind(_r166_t0), r166_xn$createstroke$7Hrq = _r166_t0["create-stroke"].bind(_r166_t0), 
        r166_xn$setanchor$9Jrj = _r166_t0["set-anchor"].bind(_r166_t0), _r166_t0.gizmo = r1_globalTransform, 
        _r166_t0["set-width"](r1_WIDTH), r166_xn$setwidth$9Jrj(r1_WIDTH), r166_xn$assignunicode$7Hrq("b"), 
        r166_include(r1_bMarks), r166_xn$putshapes$9Jrj(r1_glyphs["o.left"].contours), void r166_xn$putshapes$9Jrj(r166_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("q", function() {
        var r169_currentGlyph, r169_xn$setwidth$9Jrj, r169_xn$assignunicode$7Hrq, r169_xn$startfrom$1aao, r169_xn$lineto$5sIl, r169_xn$curveto$1aao, r169_xn$cubicto$1aao, r169_xn$putshapes$9Jrj, r169_xn$reverselast$3qIs, r169_include, r169_xn$createstroke$7Hrq, r169_xn$setanchor$9Jrj, _r169_t0;
        return _r169_t0 = this, r169_currentGlyph = _r169_t0, r169_xn$setwidth$9Jrj = _r169_t0["set-width"].bind(_r169_t0), 
        r169_xn$assignunicode$7Hrq = function(r170_code) {
            var r170_code;
            return r169_currentGlyph["assign-unicode"](r170_code), r1_unicodeGlyphs[r169_currentGlyph.unicode[r169_currentGlyph.unicode.length - 1]] = r169_currentGlyph;
        }, r169_xn$startfrom$1aao = _r169_t0["start-from"].bind(_r169_t0), r169_xn$lineto$5sIl = _r169_t0["line-to"].bind(_r169_t0), 
        r169_xn$curveto$1aao = _r169_t0["curve-to"].bind(_r169_t0), r169_xn$cubicto$1aao = _r169_t0["cubic-to"].bind(_r169_t0), 
        r169_xn$putshapes$9Jrj = _r169_t0["put-shapes"].bind(_r169_t0), r169_xn$reverselast$3qIs = _r169_t0["reverse-last"].bind(_r169_t0), 
        r169_include = _r169_t0.include.bind(_r169_t0), r169_xn$createstroke$7Hrq = _r169_t0["create-stroke"].bind(_r169_t0), 
        r169_xn$setanchor$9Jrj = _r169_t0["set-anchor"].bind(_r169_t0), _r169_t0.gizmo = r1_globalTransform, 
        _r169_t0["set-width"](r1_WIDTH), r169_xn$setwidth$9Jrj(r1_WIDTH), r169_xn$assignunicode$7Hrq("q"), 
        r169_include(r1_eMarks), r169_xn$putshapes$9Jrj(r1_glyphs["o.right"].contours), 
        void r169_xn$putshapes$9Jrj(r169_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r1_DESCENDER)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("d", function() {
        var r172_currentGlyph, r172_xn$setwidth$9Jrj, r172_xn$assignunicode$7Hrq, r172_xn$startfrom$1aao, r172_xn$lineto$5sIl, r172_xn$curveto$1aao, r172_xn$cubicto$1aao, r172_xn$putshapes$9Jrj, r172_xn$reverselast$3qIs, r172_include, r172_xn$createstroke$7Hrq, r172_xn$setanchor$9Jrj, _r172_t0;
        return _r172_t0 = this, r172_currentGlyph = _r172_t0, r172_xn$setwidth$9Jrj = _r172_t0["set-width"].bind(_r172_t0), 
        r172_xn$assignunicode$7Hrq = function(r173_code) {
            var r173_code;
            return r172_currentGlyph["assign-unicode"](r173_code), r1_unicodeGlyphs[r172_currentGlyph.unicode[r172_currentGlyph.unicode.length - 1]] = r172_currentGlyph;
        }, r172_xn$startfrom$1aao = _r172_t0["start-from"].bind(_r172_t0), r172_xn$lineto$5sIl = _r172_t0["line-to"].bind(_r172_t0), 
        r172_xn$curveto$1aao = _r172_t0["curve-to"].bind(_r172_t0), r172_xn$cubicto$1aao = _r172_t0["cubic-to"].bind(_r172_t0), 
        r172_xn$putshapes$9Jrj = _r172_t0["put-shapes"].bind(_r172_t0), r172_xn$reverselast$3qIs = _r172_t0["reverse-last"].bind(_r172_t0), 
        r172_include = _r172_t0.include.bind(_r172_t0), r172_xn$createstroke$7Hrq = _r172_t0["create-stroke"].bind(_r172_t0), 
        r172_xn$setanchor$9Jrj = _r172_t0["set-anchor"].bind(_r172_t0), _r172_t0.gizmo = r1_globalTransform, 
        _r172_t0["set-width"](r1_WIDTH), r172_xn$setwidth$9Jrj(r1_WIDTH), r172_xn$assignunicode$7Hrq("d"), 
        r172_include(r1_bMarks), r172_xn$putshapes$9Jrj(r1_glyphs["o.right"].contours), 
        void r172_xn$putshapes$9Jrj(r172_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("g", function() {
        var r175_currentGlyph, r175_xn$setwidth$9Jrj, r175_xn$assignunicode$7Hrq, r175_xn$startfrom$1aao, r175_xn$lineto$5sIl, r175_xn$curveto$1aao, r175_xn$cubicto$1aao, r175_xn$putshapes$9Jrj, r175_xn$reverselast$3qIs, r175_include, r175_xn$createstroke$7Hrq, r175_xn$setanchor$9Jrj, r175_grightx, _r175_t0;
        return _r175_t0 = this, r175_currentGlyph = _r175_t0, r175_xn$setwidth$9Jrj = _r175_t0["set-width"].bind(_r175_t0), 
        r175_xn$assignunicode$7Hrq = function(r176_code) {
            var r176_code;
            return r175_currentGlyph["assign-unicode"](r176_code), r1_unicodeGlyphs[r175_currentGlyph.unicode[r175_currentGlyph.unicode.length - 1]] = r175_currentGlyph;
        }, r175_xn$startfrom$1aao = _r175_t0["start-from"].bind(_r175_t0), r175_xn$lineto$5sIl = _r175_t0["line-to"].bind(_r175_t0), 
        r175_xn$curveto$1aao = _r175_t0["curve-to"].bind(_r175_t0), r175_xn$cubicto$1aao = _r175_t0["cubic-to"].bind(_r175_t0), 
        r175_xn$putshapes$9Jrj = _r175_t0["put-shapes"].bind(_r175_t0), r175_xn$reverselast$3qIs = _r175_t0["reverse-last"].bind(_r175_t0), 
        r175_include = _r175_t0.include.bind(_r175_t0), r175_xn$createstroke$7Hrq = _r175_t0["create-stroke"].bind(_r175_t0), 
        r175_xn$setanchor$9Jrj = _r175_t0["set-anchor"].bind(_r175_t0), _r175_t0.gizmo = r1_globalTransform, 
        _r175_t0["set-width"](r1_WIDTH), r175_xn$setwidth$9Jrj(r1_WIDTH), r175_xn$assignunicode$7Hrq("g"), 
        r175_include(r1_pMarks), r175_xn$putshapes$9Jrj([ r1_Ring(r1_XO, r1_XH * r1_GBARPOS, 1.25 * r1_SB, r1_RIGHTSB - .25 * r1_SB, r1_SMALLSMOOTH), r1_Ring(r1_XO - r1_STROKE, r1_XH * r1_GBARPOS + r1_STROKE, 1.25 * r1_SB + r1_STROKE, r1_RIGHTSB - .25 * r1_SB - r1_STROKE, r1_SMALLSMOOTH - r1_STROKE) ]), 
        r175_xn$reverselast$3qIs(), r175_grightx = r1_RIGHTSB - 4 * r1_O, r175_xn$putshapes$9Jrj(r175_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_XH * r1_GBARPOS)["set-width"](0, .75 * r1_STROKE)["arc-hv-to"](1.5 * r1_SB + r1_STROKE, .47 * (r1_O - .85 * r1_DESCENDER + r1_XH * r1_GBARPOS))["set-width"](0, r1_STROKE)["arc-vh-to"](r1_MIDDLE + .15 * r1_DESCENDER, r1_O - .85 * r1_DESCENDER)["line-to"](r1_MIDDLE - .15 * r1_DESCENDER, r1_O - .85 * r1_DESCENDER)["arc-hv-to"](r175_grightx, -r1_STROKE * r1_globalTransform.yx * 2)["arc-vh-to"](r1_mix(r1_SB, r175_grightx, .5), r1_DESCENDER + r1_O)["arc-hv-to"](r1_SB, .1 * r1_DESCENDER)["arc-vh-to"](r1_MIDDLE + .15 * r1_DESCENDER, r1_O - .85 * r1_DESCENDER)["to-outline"]()), 
        r175_xn$startfrom$1aao(r1_RIGHTSB + .5 * r1_SB, r1_XH), r175_xn$lineto$5sIl(r1_RIGHTSB + .5 * r1_SB, r1_XH - r1_STROKE), 
        r175_xn$lineto$5sIl(r1_MIDDLE, r1_XH - r1_STROKE - r1_O), void r175_xn$lineto$5sIl(r1_MIDDLE, r1_XH);
    }), r1_xn$createglyph$7Hrq("c", function() {
        var r178_currentGlyph, r178_xn$setwidth$9Jrj, r178_xn$assignunicode$7Hrq, r178_xn$startfrom$1aao, r178_xn$lineto$5sIl, r178_xn$curveto$1aao, r178_xn$cubicto$1aao, r178_xn$putshapes$9Jrj, r178_xn$reverselast$3qIs, r178_include, r178_xn$createstroke$7Hrq, r178_xn$setanchor$9Jrj, r178_outline, _r178_t0;
        return _r178_t0 = this, r178_currentGlyph = _r178_t0, r178_xn$setwidth$9Jrj = _r178_t0["set-width"].bind(_r178_t0), 
        r178_xn$assignunicode$7Hrq = function(r179_code) {
            var r179_code;
            return r178_currentGlyph["assign-unicode"](r179_code), r1_unicodeGlyphs[r178_currentGlyph.unicode[r178_currentGlyph.unicode.length - 1]] = r178_currentGlyph;
        }, r178_xn$startfrom$1aao = _r178_t0["start-from"].bind(_r178_t0), r178_xn$lineto$5sIl = _r178_t0["line-to"].bind(_r178_t0), 
        r178_xn$curveto$1aao = _r178_t0["curve-to"].bind(_r178_t0), r178_xn$cubicto$1aao = _r178_t0["cubic-to"].bind(_r178_t0), 
        r178_xn$putshapes$9Jrj = _r178_t0["put-shapes"].bind(_r178_t0), r178_xn$reverselast$3qIs = _r178_t0["reverse-last"].bind(_r178_t0), 
        r178_include = _r178_t0.include.bind(_r178_t0), r178_xn$createstroke$7Hrq = _r178_t0["create-stroke"].bind(_r178_t0), 
        r178_xn$setanchor$9Jrj = _r178_t0["set-anchor"].bind(_r178_t0), _r178_t0.gizmo = r1_globalTransform, 
        _r178_t0["set-width"](r1_WIDTH), r178_xn$setwidth$9Jrj(r1_WIDTH), r178_xn$assignunicode$7Hrq("c"), 
        r178_include(r1_eMarks), r178_outline = r178_xn$createstroke$7Hrq(), r178_outline["start-from"](r1_RIGHTSB - r1_OXHOOK, r1_XH - r1_HOOK)["curve-to"](r1_MIDDLE + r1_KAPPA_HOOK * (r1_MIDDLE - r1_para.sb), r1_XO, r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)["line-to"](r1_SB + r1_O, r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["curve-to"](r1_MIDDLE + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform.yx) * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform.yx, r1_HOOK - r1_TAILADJY * r1_globalTransform.yx), 
        void r178_xn$putshapes$9Jrj(r178_outline["to-outline"](r1_STROKE, 0));
    }), r1_xn$createglyph$7Hrq("e.upright", function() {
        var r181_currentGlyph, r181_xn$setwidth$9Jrj, r181_xn$assignunicode$7Hrq, r181_xn$startfrom$1aao, r181_xn$lineto$5sIl, r181_xn$curveto$1aao, r181_xn$cubicto$1aao, r181_xn$putshapes$9Jrj, r181_xn$reverselast$3qIs, r181_include, r181_xn$createstroke$7Hrq, r181_xn$setanchor$9Jrj, r181_barbottom, r181_hookx, r181_hookmiddle, r181_outline, r181_bar, _r181_t0;
        return _r181_t0 = this, r181_currentGlyph = _r181_t0, r181_xn$setwidth$9Jrj = _r181_t0["set-width"].bind(_r181_t0), 
        r181_xn$assignunicode$7Hrq = function(r182_code) {
            var r182_code;
            return r181_currentGlyph["assign-unicode"](r182_code), r1_unicodeGlyphs[r181_currentGlyph.unicode[r181_currentGlyph.unicode.length - 1]] = r181_currentGlyph;
        }, r181_xn$startfrom$1aao = _r181_t0["start-from"].bind(_r181_t0), r181_xn$lineto$5sIl = _r181_t0["line-to"].bind(_r181_t0), 
        r181_xn$curveto$1aao = _r181_t0["curve-to"].bind(_r181_t0), r181_xn$cubicto$1aao = _r181_t0["cubic-to"].bind(_r181_t0), 
        r181_xn$putshapes$9Jrj = _r181_t0["put-shapes"].bind(_r181_t0), r181_xn$reverselast$3qIs = _r181_t0["reverse-last"].bind(_r181_t0), 
        r181_include = _r181_t0.include.bind(_r181_t0), r181_xn$createstroke$7Hrq = _r181_t0["create-stroke"].bind(_r181_t0), 
        r181_xn$setanchor$9Jrj = _r181_t0["set-anchor"].bind(_r181_t0), _r181_t0.gizmo = r1_globalTransform, 
        _r181_t0["set-width"](r1_WIDTH), r181_xn$setwidth$9Jrj(r1_WIDTH), r181_barbottom = r1_XH * r1_EBARPOS, 
        r181_hookx = r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform.yx, r181_hookmiddle = r1_mix(r1_SB + r1_O, r181_hookx, .55), 
        r181_outline = r181_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB - r1_O, r181_barbottom)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB - r1_O, r1_XH - r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)["line-to"](r1_SB + r1_O, r1_SMALLSMOOTHB)["arc-vh-to"](r181_hookmiddle, r1_O)["heads-to"](r1_RIGHTWARD)["curve-to"](r1_mix(r181_hookmiddle, r181_hookx, r1_KAPPA_HOOK), r1_O, r181_hookx, r1_SHOOK - r1_TAILADJY * r1_globalTransform.yx), 
        r181_bar = r181_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_HALFSTROKE, r181_barbottom)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r1_HALFSTROKE, r181_barbottom)["heads-to"](r1_RIGHTWARD), 
        r181_xn$putshapes$9Jrj(r181_outline["to-outline"]()), void r181_xn$putshapes$9Jrj(r181_bar["to-outline"]());
    }), r1_xn$createglyph$7Hrq("e.italic", function() {
        var r184_currentGlyph, r184_xn$setwidth$9Jrj, r184_xn$assignunicode$7Hrq, r184_xn$startfrom$1aao, r184_xn$lineto$5sIl, r184_xn$curveto$1aao, r184_xn$cubicto$1aao, r184_xn$putshapes$9Jrj, r184_xn$reverselast$3qIs, r184_include, r184_xn$createstroke$7Hrq, r184_xn$setanchor$9Jrj, r184_barbottom, _r184_t0;
        return _r184_t0 = this, r184_currentGlyph = _r184_t0, r184_xn$setwidth$9Jrj = _r184_t0["set-width"].bind(_r184_t0), 
        r184_xn$assignunicode$7Hrq = function(r185_code) {
            var r185_code;
            return r184_currentGlyph["assign-unicode"](r185_code), r1_unicodeGlyphs[r184_currentGlyph.unicode[r184_currentGlyph.unicode.length - 1]] = r184_currentGlyph;
        }, r184_xn$startfrom$1aao = _r184_t0["start-from"].bind(_r184_t0), r184_xn$lineto$5sIl = _r184_t0["line-to"].bind(_r184_t0), 
        r184_xn$curveto$1aao = _r184_t0["curve-to"].bind(_r184_t0), r184_xn$cubicto$1aao = _r184_t0["cubic-to"].bind(_r184_t0), 
        r184_xn$putshapes$9Jrj = _r184_t0["put-shapes"].bind(_r184_t0), r184_xn$reverselast$3qIs = _r184_t0["reverse-last"].bind(_r184_t0), 
        r184_include = _r184_t0.include.bind(_r184_t0), r184_xn$createstroke$7Hrq = _r184_t0["create-stroke"].bind(_r184_t0), 
        r184_xn$setanchor$9Jrj = _r184_t0["set-anchor"].bind(_r184_t0), _r184_t0.gizmo = r1_globalTransform, 
        _r184_t0["set-width"](r1_WIDTH), r184_xn$setwidth$9Jrj(r1_WIDTH), r184_barbottom = r1_XH * (r1_BARPOS - .04), 
        void r184_xn$putshapes$9Jrj(r184_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_O + r1_STROKE, r184_barbottom)["set-width"](r1_STROKE, 0)["arc-hv-to"](r1_RIGHTSB - r1_O, r1_XH - .95 * r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, r1_XH - r1_SMALLSMOOTHA)["line-to"](r1_SB + r1_O, r1_SMALLSMOOTHB)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["curve-to"](r1_MIDDLE + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform.yx) * (r1_MIDDLE - r1_SB), r1_O, r1_RIGHTSB - r1_OXHOOK + r1_TAILADJX * r1_globalTransform.yx, r1_HOOK - r1_TAILADJY * r1_globalTransform.yx)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("e", function() {
        var r187_currentGlyph, r187_xn$setwidth$9Jrj, r187_xn$assignunicode$7Hrq, r187_xn$startfrom$1aao, r187_xn$lineto$5sIl, r187_xn$curveto$1aao, r187_xn$cubicto$1aao, r187_xn$putshapes$9Jrj, r187_xn$reverselast$3qIs, r187_include, r187_xn$createstroke$7Hrq, r187_xn$setanchor$9Jrj, _r187_t0;
        return _r187_t0 = this, r187_currentGlyph = _r187_t0, r187_xn$setwidth$9Jrj = _r187_t0["set-width"].bind(_r187_t0), 
        r187_xn$assignunicode$7Hrq = function(r188_code) {
            var r188_code;
            return r187_currentGlyph["assign-unicode"](r188_code), r1_unicodeGlyphs[r187_currentGlyph.unicode[r187_currentGlyph.unicode.length - 1]] = r187_currentGlyph;
        }, r187_xn$startfrom$1aao = _r187_t0["start-from"].bind(_r187_t0), r187_xn$lineto$5sIl = _r187_t0["line-to"].bind(_r187_t0), 
        r187_xn$curveto$1aao = _r187_t0["curve-to"].bind(_r187_t0), r187_xn$cubicto$1aao = _r187_t0["cubic-to"].bind(_r187_t0), 
        r187_xn$putshapes$9Jrj = _r187_t0["put-shapes"].bind(_r187_t0), r187_xn$reverselast$3qIs = _r187_t0["reverse-last"].bind(_r187_t0), 
        r187_include = _r187_t0.include.bind(_r187_t0), r187_xn$createstroke$7Hrq = _r187_t0["create-stroke"].bind(_r187_t0), 
        r187_xn$setanchor$9Jrj = _r187_t0["set-anchor"].bind(_r187_t0), _r187_t0.gizmo = r1_globalTransform, 
        _r187_t0["set-width"](r1_WIDTH), r187_xn$setwidth$9Jrj(r1_WIDTH), r187_xn$assignunicode$7Hrq("e"), 
        r187_include(r1_eMarks), void r187_include(r1_para.italicangle > 0 ? r1_glyphs["e.italic"] : r1_glyphs["e.upright"]);
    }), r1_xn$createglyph$7Hrq("t", function() {
        var r190_currentGlyph, r190_xn$setwidth$9Jrj, r190_xn$assignunicode$7Hrq, r190_xn$startfrom$1aao, r190_xn$lineto$5sIl, r190_xn$curveto$1aao, r190_xn$cubicto$1aao, r190_xn$putshapes$9Jrj, r190_xn$reverselast$3qIs, r190_include, r190_xn$createstroke$7Hrq, r190_xn$setanchor$9Jrj, r190_center, r190_hookx, r190_turn, r190_smb, _r190_t0;
        return _r190_t0 = this, r190_currentGlyph = _r190_t0, r190_xn$setwidth$9Jrj = _r190_t0["set-width"].bind(_r190_t0), 
        r190_xn$assignunicode$7Hrq = function(r191_code) {
            var r191_code;
            return r190_currentGlyph["assign-unicode"](r191_code), r1_unicodeGlyphs[r190_currentGlyph.unicode[r190_currentGlyph.unicode.length - 1]] = r190_currentGlyph;
        }, r190_xn$startfrom$1aao = _r190_t0["start-from"].bind(_r190_t0), r190_xn$lineto$5sIl = _r190_t0["line-to"].bind(_r190_t0), 
        r190_xn$curveto$1aao = _r190_t0["curve-to"].bind(_r190_t0), r190_xn$cubicto$1aao = _r190_t0["cubic-to"].bind(_r190_t0), 
        r190_xn$putshapes$9Jrj = _r190_t0["put-shapes"].bind(_r190_t0), r190_xn$reverselast$3qIs = _r190_t0["reverse-last"].bind(_r190_t0), 
        r190_include = _r190_t0.include.bind(_r190_t0), r190_xn$createstroke$7Hrq = _r190_t0["create-stroke"].bind(_r190_t0), 
        r190_xn$setanchor$9Jrj = _r190_t0["set-anchor"].bind(_r190_t0), _r190_t0.gizmo = r1_globalTransform, 
        _r190_t0["set-width"](r1_WIDTH), r190_xn$setwidth$9Jrj(r1_WIDTH), r190_xn$assignunicode$7Hrq("t"), 
        r190_include(r1_bMarks), r190_center = r1_MIDDLE - r1_TBALANCE - r1_HALFSTROKE, 
        r190_hookx = r190_center + .78 * (r1_WIDTH - 2 * r1_SB) - r1_OXHOOK + r1_TAILADJX * r1_globalTransform.yx, 
        r190_turn = r1_mix(r190_center, r190_hookx, .5 + .5 * r1_globalTransform.yx), r190_smb = r190_turn - r190_center, 
        r190_xn$putshapes$9Jrj(r190_xn$createstroke$7Hrq()["start-from"](r190_center, r1_CAP)["set-width"](r1_STROKE, 0)["heads-to"](r1_DOWNWARD)["line-to"](r190_center, r190_smb)["arc-vh-to"](r190_turn, r1_O)["curve-to"](r190_turn + (r1_KAPPA_HOOK + r1_TAILADJKAPPA * r1_globalTransform.yx + .1) * (r190_hookx - r190_turn), r1_O, r190_hookx, r1_HOOK - r1_TAILADJY * r1_globalTransform.yx)["to-outline"]()), 
        void r190_xn$putshapes$9Jrj(r190_xn$createstroke$7Hrq()["start-from"](r190_center + r1_HALFSTROKE - r1_LONGJUT + r1_TBALANCE2, r1_XH)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r190_center + r1_HALFSTROKE + r1_LONGJUT + r1_TBALANCE2, r1_XH)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("a.upright", function() {
        var r193_currentGlyph, r193_xn$setwidth$9Jrj, r193_xn$assignunicode$7Hrq, r193_xn$startfrom$1aao, r193_xn$lineto$5sIl, r193_xn$curveto$1aao, r193_xn$cubicto$1aao, r193_xn$putshapes$9Jrj, r193_xn$reverselast$3qIs, r193_include, r193_xn$createstroke$7Hrq, r193_xn$setanchor$9Jrj, r193_bartop, r193_lowmiddle, r193_barsmooth, _r193_t0;
        return _r193_t0 = this, r193_currentGlyph = _r193_t0, r193_xn$setwidth$9Jrj = _r193_t0["set-width"].bind(_r193_t0), 
        r193_xn$assignunicode$7Hrq = function(r194_code) {
            var r194_code;
            return r193_currentGlyph["assign-unicode"](r194_code), r1_unicodeGlyphs[r193_currentGlyph.unicode[r193_currentGlyph.unicode.length - 1]] = r193_currentGlyph;
        }, r193_xn$startfrom$1aao = _r193_t0["start-from"].bind(_r193_t0), r193_xn$lineto$5sIl = _r193_t0["line-to"].bind(_r193_t0), 
        r193_xn$curveto$1aao = _r193_t0["curve-to"].bind(_r193_t0), r193_xn$cubicto$1aao = _r193_t0["cubic-to"].bind(_r193_t0), 
        r193_xn$putshapes$9Jrj = _r193_t0["put-shapes"].bind(_r193_t0), r193_xn$reverselast$3qIs = _r193_t0["reverse-last"].bind(_r193_t0), 
        r193_include = _r193_t0.include.bind(_r193_t0), r193_xn$createstroke$7Hrq = _r193_t0["create-stroke"].bind(_r193_t0), 
        r193_xn$setanchor$9Jrj = _r193_t0["set-anchor"].bind(_r193_t0), _r193_t0.gizmo = r1_globalTransform, 
        _r193_t0["set-width"](r1_WIDTH), r193_xn$setwidth$9Jrj(r1_WIDTH), r193_bartop = r1_XH * r1_BARPOS + r1_STROKE, 
        r193_lowmiddle = r1_mix(r1_SB, r1_RIGHTSB - r1_STROKE, r1_linreg(80, .55, 120, .625, r1_STROKE)), 
        r193_barsmooth = r1_mix(r1_SB, r1_RIGHTSB, .6), r193_xn$putshapes$9Jrj(r193_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_XH - r1_SMOOTHA)["arc-vh-to"](r1_MIDDLE, r1_XO)["heads-to"](r1_LEFTWARD)["curve-to"](r1_MIDDLE - r1_KAPPA_HOOK * (r1_MIDDLE - r1_SB), r1_XO, r1_SB + r1_OXHOOK, r1_XH - r1_AHOOK)["to-outline"]()), 
        r193_xn$putshapes$9Jrj(r193_xn$createstroke$7Hrq()["start-from"](r193_lowmiddle, r1_O)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, .45 * r193_bartop)["arc-vh-to"](r193_barsmooth, r193_bartop)["line-to"](r1_RIGHTSB, r193_bartop)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r193_xn$putshapes$9Jrj(r193_xn$createstroke$7Hrq()["start-from"](r193_lowmiddle, r1_O + r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB - r1_STROKE, .65 * r1_SMALLSMOOTHA)["heads-to"](r1_UPWARD)["set-width"](0, .4 * r1_STROKE)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("a.italic", function() {
        var r196_currentGlyph, r196_xn$setwidth$9Jrj, r196_xn$assignunicode$7Hrq, r196_xn$startfrom$1aao, r196_xn$lineto$5sIl, r196_xn$curveto$1aao, r196_xn$cubicto$1aao, r196_xn$putshapes$9Jrj, r196_xn$reverselast$3qIs, r196_include, r196_xn$createstroke$7Hrq, r196_xn$setanchor$9Jrj, _r196_t0;
        return _r196_t0 = this, r196_currentGlyph = _r196_t0, r196_xn$setwidth$9Jrj = _r196_t0["set-width"].bind(_r196_t0), 
        r196_xn$assignunicode$7Hrq = function(r197_code) {
            var r197_code;
            return r196_currentGlyph["assign-unicode"](r197_code), r1_unicodeGlyphs[r196_currentGlyph.unicode[r196_currentGlyph.unicode.length - 1]] = r196_currentGlyph;
        }, r196_xn$startfrom$1aao = _r196_t0["start-from"].bind(_r196_t0), r196_xn$lineto$5sIl = _r196_t0["line-to"].bind(_r196_t0), 
        r196_xn$curveto$1aao = _r196_t0["curve-to"].bind(_r196_t0), r196_xn$cubicto$1aao = _r196_t0["cubic-to"].bind(_r196_t0), 
        r196_xn$putshapes$9Jrj = _r196_t0["put-shapes"].bind(_r196_t0), r196_xn$reverselast$3qIs = _r196_t0["reverse-last"].bind(_r196_t0), 
        r196_include = _r196_t0.include.bind(_r196_t0), r196_xn$createstroke$7Hrq = _r196_t0["create-stroke"].bind(_r196_t0), 
        r196_xn$setanchor$9Jrj = _r196_t0["set-anchor"].bind(_r196_t0), _r196_t0.gizmo = r1_globalTransform, 
        _r196_t0["set-width"](r1_WIDTH), r196_xn$setwidth$9Jrj(r1_WIDTH), r196_include(r1_glyphs["o.right"]), 
        void r196_xn$putshapes$9Jrj(r196_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("a", function() {
        var r199_currentGlyph, r199_xn$setwidth$9Jrj, r199_xn$assignunicode$7Hrq, r199_xn$startfrom$1aao, r199_xn$lineto$5sIl, r199_xn$curveto$1aao, r199_xn$cubicto$1aao, r199_xn$putshapes$9Jrj, r199_xn$reverselast$3qIs, r199_include, r199_xn$createstroke$7Hrq, r199_xn$setanchor$9Jrj, _r199_t0;
        return _r199_t0 = this, r199_currentGlyph = _r199_t0, r199_xn$setwidth$9Jrj = _r199_t0["set-width"].bind(_r199_t0), 
        r199_xn$assignunicode$7Hrq = function(r200_code) {
            var r200_code;
            return r199_currentGlyph["assign-unicode"](r200_code), r1_unicodeGlyphs[r199_currentGlyph.unicode[r199_currentGlyph.unicode.length - 1]] = r199_currentGlyph;
        }, r199_xn$startfrom$1aao = _r199_t0["start-from"].bind(_r199_t0), r199_xn$lineto$5sIl = _r199_t0["line-to"].bind(_r199_t0), 
        r199_xn$curveto$1aao = _r199_t0["curve-to"].bind(_r199_t0), r199_xn$cubicto$1aao = _r199_t0["cubic-to"].bind(_r199_t0), 
        r199_xn$putshapes$9Jrj = _r199_t0["put-shapes"].bind(_r199_t0), r199_xn$reverselast$3qIs = _r199_t0["reverse-last"].bind(_r199_t0), 
        r199_include = _r199_t0.include.bind(_r199_t0), r199_xn$createstroke$7Hrq = _r199_t0["create-stroke"].bind(_r199_t0), 
        r199_xn$setanchor$9Jrj = _r199_t0["set-anchor"].bind(_r199_t0), _r199_t0.gizmo = r1_globalTransform, 
        _r199_t0["set-width"](r1_WIDTH), r199_xn$setwidth$9Jrj(r1_WIDTH), r199_xn$assignunicode$7Hrq("a"), 
        r199_include(r1_eMarks), void r199_include(r1_para.italicangle > 0 ? r1_glyphs["a.italic"] : r1_glyphs["a.upright"]);
    }), r1_xn$createglyph$7Hrq("u", function() {
        var r202_currentGlyph, r202_xn$setwidth$9Jrj, r202_xn$assignunicode$7Hrq, r202_xn$startfrom$1aao, r202_xn$lineto$5sIl, r202_xn$curveto$1aao, r202_xn$cubicto$1aao, r202_xn$putshapes$9Jrj, r202_xn$reverselast$3qIs, r202_include, r202_xn$createstroke$7Hrq, r202_xn$setanchor$9Jrj, _r202_t0;
        return _r202_t0 = this, r202_currentGlyph = _r202_t0, r202_xn$setwidth$9Jrj = _r202_t0["set-width"].bind(_r202_t0), 
        r202_xn$assignunicode$7Hrq = function(r203_code) {
            var r203_code;
            return r202_currentGlyph["assign-unicode"](r203_code), r1_unicodeGlyphs[r202_currentGlyph.unicode[r202_currentGlyph.unicode.length - 1]] = r202_currentGlyph;
        }, r202_xn$startfrom$1aao = _r202_t0["start-from"].bind(_r202_t0), r202_xn$lineto$5sIl = _r202_t0["line-to"].bind(_r202_t0), 
        r202_xn$curveto$1aao = _r202_t0["curve-to"].bind(_r202_t0), r202_xn$cubicto$1aao = _r202_t0["cubic-to"].bind(_r202_t0), 
        r202_xn$putshapes$9Jrj = _r202_t0["put-shapes"].bind(_r202_t0), r202_xn$reverselast$3qIs = _r202_t0["reverse-last"].bind(_r202_t0), 
        r202_include = _r202_t0.include.bind(_r202_t0), r202_xn$createstroke$7Hrq = _r202_t0["create-stroke"].bind(_r202_t0), 
        r202_xn$setanchor$9Jrj = _r202_t0["set-anchor"].bind(_r202_t0), _r202_t0.gizmo = r1_globalTransform, 
        _r202_t0["set-width"](r1_WIDTH), r202_xn$setwidth$9Jrj(r1_WIDTH), r202_xn$assignunicode$7Hrq("u"), 
        r202_include(r1_eMarks), r202_xn$putshapes$9Jrj(r202_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r1_SMALLSMOOTHA)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r202_xn$putshapes$9Jrj(r202_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_O + r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB - r1_STROKE * r1_ITALICCOR, r1_SMALLSMOOTHA)["heads-to"](r1_UPWARD)["set-width"](0, .4 * r1_STROKE)["to-outline"]()), 
        void r202_xn$putshapes$9Jrj(r202_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("n", function() {
        var r205_currentGlyph, r205_xn$setwidth$9Jrj, r205_xn$assignunicode$7Hrq, r205_xn$startfrom$1aao, r205_xn$lineto$5sIl, r205_xn$curveto$1aao, r205_xn$cubicto$1aao, r205_xn$putshapes$9Jrj, r205_xn$reverselast$3qIs, r205_include, r205_xn$createstroke$7Hrq, r205_xn$setanchor$9Jrj, _r205_t0;
        return _r205_t0 = this, r205_currentGlyph = _r205_t0, r205_xn$setwidth$9Jrj = _r205_t0["set-width"].bind(_r205_t0), 
        r205_xn$assignunicode$7Hrq = function(r206_code) {
            var r206_code;
            return r205_currentGlyph["assign-unicode"](r206_code), r1_unicodeGlyphs[r205_currentGlyph.unicode[r205_currentGlyph.unicode.length - 1]] = r205_currentGlyph;
        }, r205_xn$startfrom$1aao = _r205_t0["start-from"].bind(_r205_t0), r205_xn$lineto$5sIl = _r205_t0["line-to"].bind(_r205_t0), 
        r205_xn$curveto$1aao = _r205_t0["curve-to"].bind(_r205_t0), r205_xn$cubicto$1aao = _r205_t0["cubic-to"].bind(_r205_t0), 
        r205_xn$putshapes$9Jrj = _r205_t0["put-shapes"].bind(_r205_t0), r205_xn$reverselast$3qIs = _r205_t0["reverse-last"].bind(_r205_t0), 
        r205_include = _r205_t0.include.bind(_r205_t0), r205_xn$createstroke$7Hrq = _r205_t0["create-stroke"].bind(_r205_t0), 
        r205_xn$setanchor$9Jrj = _r205_t0["set-anchor"].bind(_r205_t0), _r205_t0.gizmo = r1_globalTransform, 
        _r205_t0["set-width"](r1_WIDTH), r205_xn$setwidth$9Jrj(r1_WIDTH), r205_xn$assignunicode$7Hrq("n"), 
        r205_include(r1_eMarks), r205_xn$putshapes$9Jrj(r1_nBowl(r1_SB + r1_STROKE * r1_ITALICCOR, r1_MIDDLE, r1_RIGHTSB, .4 * r1_STROKE)), 
        void r205_xn$putshapes$9Jrj(r205_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("h", function() {
        var r208_currentGlyph, r208_xn$setwidth$9Jrj, r208_xn$assignunicode$7Hrq, r208_xn$startfrom$1aao, r208_xn$lineto$5sIl, r208_xn$curveto$1aao, r208_xn$cubicto$1aao, r208_xn$putshapes$9Jrj, r208_xn$reverselast$3qIs, r208_include, r208_xn$createstroke$7Hrq, r208_xn$setanchor$9Jrj, _r208_t0;
        return _r208_t0 = this, r208_currentGlyph = _r208_t0, r208_xn$setwidth$9Jrj = _r208_t0["set-width"].bind(_r208_t0), 
        r208_xn$assignunicode$7Hrq = function(r209_code) {
            var r209_code;
            return r208_currentGlyph["assign-unicode"](r209_code), r1_unicodeGlyphs[r208_currentGlyph.unicode[r208_currentGlyph.unicode.length - 1]] = r208_currentGlyph;
        }, r208_xn$startfrom$1aao = _r208_t0["start-from"].bind(_r208_t0), r208_xn$lineto$5sIl = _r208_t0["line-to"].bind(_r208_t0), 
        r208_xn$curveto$1aao = _r208_t0["curve-to"].bind(_r208_t0), r208_xn$cubicto$1aao = _r208_t0["cubic-to"].bind(_r208_t0), 
        r208_xn$putshapes$9Jrj = _r208_t0["put-shapes"].bind(_r208_t0), r208_xn$reverselast$3qIs = _r208_t0["reverse-last"].bind(_r208_t0), 
        r208_include = _r208_t0.include.bind(_r208_t0), r208_xn$createstroke$7Hrq = _r208_t0["create-stroke"].bind(_r208_t0), 
        r208_xn$setanchor$9Jrj = _r208_t0["set-anchor"].bind(_r208_t0), _r208_t0.gizmo = r1_globalTransform, 
        _r208_t0["set-width"](r1_WIDTH), r208_xn$setwidth$9Jrj(r1_WIDTH), r208_xn$assignunicode$7Hrq("h"), 
        r208_include(r1_bMarks), r208_xn$putshapes$9Jrj(r1_nBowl(r1_SB + r1_STROKE * r1_ITALICCOR, r1_MIDDLE, r1_RIGHTSB, .4 * r1_STROKE)), 
        void r208_xn$putshapes$9Jrj(r208_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("m", function() {
        var r211_currentGlyph, r211_xn$setwidth$9Jrj, r211_xn$assignunicode$7Hrq, r211_xn$startfrom$1aao, r211_xn$lineto$5sIl, r211_xn$curveto$1aao, r211_xn$cubicto$1aao, r211_xn$putshapes$9Jrj, r211_xn$reverselast$3qIs, r211_include, r211_xn$createstroke$7Hrq, r211_xn$setanchor$9Jrj, r211_sw, r211_m1, r211_m2, _r211_t0;
        return _r211_t0 = this, r211_currentGlyph = _r211_t0, r211_xn$setwidth$9Jrj = _r211_t0["set-width"].bind(_r211_t0), 
        r211_xn$assignunicode$7Hrq = function(r212_code) {
            var r212_code;
            return r211_currentGlyph["assign-unicode"](r212_code), r1_unicodeGlyphs[r211_currentGlyph.unicode[r211_currentGlyph.unicode.length - 1]] = r211_currentGlyph;
        }, r211_xn$startfrom$1aao = _r211_t0["start-from"].bind(_r211_t0), r211_xn$lineto$5sIl = _r211_t0["line-to"].bind(_r211_t0), 
        r211_xn$curveto$1aao = _r211_t0["curve-to"].bind(_r211_t0), r211_xn$cubicto$1aao = _r211_t0["cubic-to"].bind(_r211_t0), 
        r211_xn$putshapes$9Jrj = _r211_t0["put-shapes"].bind(_r211_t0), r211_xn$reverselast$3qIs = _r211_t0["reverse-last"].bind(_r211_t0), 
        r211_include = _r211_t0.include.bind(_r211_t0), r211_xn$createstroke$7Hrq = _r211_t0["create-stroke"].bind(_r211_t0), 
        r211_xn$setanchor$9Jrj = _r211_t0["set-anchor"].bind(_r211_t0), _r211_t0.gizmo = r1_globalTransform, 
        _r211_t0["set-width"](r1_WIDTH), r211_xn$setwidth$9Jrj(r1_WIDTH), r211_xn$assignunicode$7Hrq("m"), 
        r211_include(r1_eMarks), r211_sw = Math.min(r1_STROKE, .26 * (r1_WIDTH - 2 * r1_SB)), 
        r211_m1 = (r1_MIDDLE + r1_SB + .25 * r211_sw) / 2, r211_m2 = r211_m1 + (r1_MIDDLE - r211_sw / 2 - r1_SB), 
        r211_xn$putshapes$9Jrj(r211_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - r211_sw / 2, 0)["set-width"](0, r211_sw)["heads-to"](r1_UPWARD)["line-to"](r1_MIDDLE - r211_sw / 2, r1_XH - r1_SMALLSMOOTHA)["arc-vh-to"](r211_m1, r1_XO - r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + .75 * r211_sw, r1_XH - r1_SMALLSMOOTHA)["heads-to"](r1_DOWNWARD)["set-width"](0, .4 * r211_sw)["to-outline"]()), 
        r211_xn$putshapes$9Jrj(r211_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB - r211_sw - r1_O, 0)["set-width"](0, r211_sw)["heads-to"](r1_UPWARD)["line-to"](r1_RIGHTSB - r211_sw - r1_O, r1_XH - r1_SMALLSMOOTHA)["arc-vh-to"](r211_m2, r1_XO - r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_MIDDLE + .25 * r211_sw, r1_XH - r1_SMALLSMOOTHA)["heads-to"](r1_DOWNWARD)["set-width"](0, .4 * r211_sw)["to-outline"]()), 
        void r211_xn$putshapes$9Jrj(r211_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_O, 0)["heads-to"](r1_UPWARD)["set-width"](0, r211_sw)["line-to"](r1_SB + r1_O, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotlessi.straight", function() {
        var r214_currentGlyph, r214_xn$setwidth$9Jrj, r214_xn$assignunicode$7Hrq, r214_xn$startfrom$1aao, r214_xn$lineto$5sIl, r214_xn$curveto$1aao, r214_xn$cubicto$1aao, r214_xn$putshapes$9Jrj, r214_xn$reverselast$3qIs, r214_include, r214_xn$createstroke$7Hrq, r214_xn$setanchor$9Jrj, _r214_t0;
        return _r214_t0 = this, r214_currentGlyph = _r214_t0, r214_xn$setwidth$9Jrj = _r214_t0["set-width"].bind(_r214_t0), 
        r214_xn$assignunicode$7Hrq = function(r215_code) {
            var r215_code;
            return r214_currentGlyph["assign-unicode"](r215_code), r1_unicodeGlyphs[r214_currentGlyph.unicode[r214_currentGlyph.unicode.length - 1]] = r214_currentGlyph;
        }, r214_xn$startfrom$1aao = _r214_t0["start-from"].bind(_r214_t0), r214_xn$lineto$5sIl = _r214_t0["line-to"].bind(_r214_t0), 
        r214_xn$curveto$1aao = _r214_t0["curve-to"].bind(_r214_t0), r214_xn$cubicto$1aao = _r214_t0["cubic-to"].bind(_r214_t0), 
        r214_xn$putshapes$9Jrj = _r214_t0["put-shapes"].bind(_r214_t0), r214_xn$reverselast$3qIs = _r214_t0["reverse-last"].bind(_r214_t0), 
        r214_include = _r214_t0.include.bind(_r214_t0), r214_xn$createstroke$7Hrq = _r214_t0["create-stroke"].bind(_r214_t0), 
        r214_xn$setanchor$9Jrj = _r214_t0["set-anchor"].bind(_r214_t0), _r214_t0.gizmo = r1_globalTransform, 
        _r214_t0["set-width"](r1_WIDTH), r214_include(r1_eMarks), void r214_xn$putshapes$9Jrj(r214_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotlessi.hooky", function() {
        var r217_currentGlyph, r217_xn$setwidth$9Jrj, r217_xn$assignunicode$7Hrq, r217_xn$startfrom$1aao, r217_xn$lineto$5sIl, r217_xn$curveto$1aao, r217_xn$cubicto$1aao, r217_xn$putshapes$9Jrj, r217_xn$reverselast$3qIs, r217_include, r217_xn$createstroke$7Hrq, r217_xn$setanchor$9Jrj, _r217_t0;
        return _r217_t0 = this, r217_currentGlyph = _r217_t0, r217_xn$setwidth$9Jrj = _r217_t0["set-width"].bind(_r217_t0), 
        r217_xn$assignunicode$7Hrq = function(r218_code) {
            var r218_code;
            return r217_currentGlyph["assign-unicode"](r218_code), r1_unicodeGlyphs[r217_currentGlyph.unicode[r217_currentGlyph.unicode.length - 1]] = r217_currentGlyph;
        }, r217_xn$startfrom$1aao = _r217_t0["start-from"].bind(_r217_t0), r217_xn$lineto$5sIl = _r217_t0["line-to"].bind(_r217_t0), 
        r217_xn$curveto$1aao = _r217_t0["curve-to"].bind(_r217_t0), r217_xn$cubicto$1aao = _r217_t0["cubic-to"].bind(_r217_t0), 
        r217_xn$putshapes$9Jrj = _r217_t0["put-shapes"].bind(_r217_t0), r217_xn$reverselast$3qIs = _r217_t0["reverse-last"].bind(_r217_t0), 
        r217_include = _r217_t0.include.bind(_r217_t0), r217_xn$createstroke$7Hrq = _r217_t0["create-stroke"].bind(_r217_t0), 
        r217_xn$setanchor$9Jrj = _r217_t0["set-anchor"].bind(_r217_t0), _r217_t0.gizmo = r1_globalTransform, 
        _r217_t0["set-width"](r1_WIDTH), r217_include(r1_glyphs["dotlessi.straight"], !0), 
        void r217_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE, r1_XH, r1_LONGJUT));
    }), r1_xn$createglyph$7Hrq("dotlessi.zshaped", function() {
        var r220_currentGlyph, r220_xn$setwidth$9Jrj, r220_xn$assignunicode$7Hrq, r220_xn$startfrom$1aao, r220_xn$lineto$5sIl, r220_xn$curveto$1aao, r220_xn$cubicto$1aao, r220_xn$putshapes$9Jrj, r220_xn$reverselast$3qIs, r220_include, r220_xn$createstroke$7Hrq, r220_xn$setanchor$9Jrj, _r220_t0;
        return _r220_t0 = this, r220_currentGlyph = _r220_t0, r220_xn$setwidth$9Jrj = _r220_t0["set-width"].bind(_r220_t0), 
        r220_xn$assignunicode$7Hrq = function(r221_code) {
            var r221_code;
            return r220_currentGlyph["assign-unicode"](r221_code), r1_unicodeGlyphs[r220_currentGlyph.unicode[r220_currentGlyph.unicode.length - 1]] = r220_currentGlyph;
        }, r220_xn$startfrom$1aao = _r220_t0["start-from"].bind(_r220_t0), r220_xn$lineto$5sIl = _r220_t0["line-to"].bind(_r220_t0), 
        r220_xn$curveto$1aao = _r220_t0["curve-to"].bind(_r220_t0), r220_xn$cubicto$1aao = _r220_t0["cubic-to"].bind(_r220_t0), 
        r220_xn$putshapes$9Jrj = _r220_t0["put-shapes"].bind(_r220_t0), r220_xn$reverselast$3qIs = _r220_t0["reverse-last"].bind(_r220_t0), 
        r220_include = _r220_t0.include.bind(_r220_t0), r220_xn$createstroke$7Hrq = _r220_t0["create-stroke"].bind(_r220_t0), 
        r220_xn$setanchor$9Jrj = _r220_t0["set-anchor"].bind(_r220_t0), _r220_t0.gizmo = r1_globalTransform, 
        _r220_t0["set-width"](r1_WIDTH), r220_include(r1_glyphs["dotlessi.hooky"], !0), 
        void r220_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
    }), r1_xn$createglyph$7Hrq("dotlessi.serifed", function() {
        var r223_currentGlyph, r223_xn$setwidth$9Jrj, r223_xn$assignunicode$7Hrq, r223_xn$startfrom$1aao, r223_xn$lineto$5sIl, r223_xn$curveto$1aao, r223_xn$cubicto$1aao, r223_xn$putshapes$9Jrj, r223_xn$reverselast$3qIs, r223_include, r223_xn$createstroke$7Hrq, r223_xn$setanchor$9Jrj, r223_balance, _r223_t0;
        return _r223_t0 = this, r223_currentGlyph = _r223_t0, r223_xn$setwidth$9Jrj = _r223_t0["set-width"].bind(_r223_t0), 
        r223_xn$assignunicode$7Hrq = function(r224_code) {
            var r224_code;
            return r223_currentGlyph["assign-unicode"](r224_code), r1_unicodeGlyphs[r223_currentGlyph.unicode[r223_currentGlyph.unicode.length - 1]] = r223_currentGlyph;
        }, r223_xn$startfrom$1aao = _r223_t0["start-from"].bind(_r223_t0), r223_xn$lineto$5sIl = _r223_t0["line-to"].bind(_r223_t0), 
        r223_xn$curveto$1aao = _r223_t0["curve-to"].bind(_r223_t0), r223_xn$cubicto$1aao = _r223_t0["cubic-to"].bind(_r223_t0), 
        r223_xn$putshapes$9Jrj = _r223_t0["put-shapes"].bind(_r223_t0), r223_xn$reverselast$3qIs = _r223_t0["reverse-last"].bind(_r223_t0), 
        r223_include = _r223_t0.include.bind(_r223_t0), r223_xn$createstroke$7Hrq = _r223_t0["create-stroke"].bind(_r223_t0), 
        r223_xn$setanchor$9Jrj = _r223_t0["set-anchor"].bind(_r223_t0), _r223_t0.gizmo = r1_globalTransform, 
        _r223_t0["set-width"](r1_WIDTH), r223_include(r1_eMarks), r223_balance = r1_ILBALANCE, 
        r223_xn$putshapes$9Jrj(r223_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r223_balance, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE + r223_balance, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r223_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r223_balance, r1_XH, r1_LONGJUT - r223_balance)), 
        r223_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT)), void r223_xn$putshapes$9Jrj(r1_leftwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
    }), r1_xn$selectvariant$7Hrq("dotlessi", 305, "serifed"), r1_xn$createglyph$7Hrq("i", function() {
        var r226_currentGlyph, r226_xn$setwidth$9Jrj, r226_xn$assignunicode$7Hrq, r226_xn$startfrom$1aao, r226_xn$lineto$5sIl, r226_xn$curveto$1aao, r226_xn$cubicto$1aao, r226_xn$putshapes$9Jrj, r226_xn$reverselast$3qIs, r226_include, r226_xn$createstroke$7Hrq, r226_xn$setanchor$9Jrj, _r226_t0;
        return _r226_t0 = this, r226_currentGlyph = _r226_t0, r226_xn$setwidth$9Jrj = _r226_t0["set-width"].bind(_r226_t0), 
        r226_xn$assignunicode$7Hrq = function(r227_code) {
            var r227_code;
            return r226_currentGlyph["assign-unicode"](r227_code), r1_unicodeGlyphs[r226_currentGlyph.unicode[r226_currentGlyph.unicode.length - 1]] = r226_currentGlyph;
        }, r226_xn$startfrom$1aao = _r226_t0["start-from"].bind(_r226_t0), r226_xn$lineto$5sIl = _r226_t0["line-to"].bind(_r226_t0), 
        r226_xn$curveto$1aao = _r226_t0["curve-to"].bind(_r226_t0), r226_xn$cubicto$1aao = _r226_t0["cubic-to"].bind(_r226_t0), 
        r226_xn$putshapes$9Jrj = _r226_t0["put-shapes"].bind(_r226_t0), r226_xn$reverselast$3qIs = _r226_t0["reverse-last"].bind(_r226_t0), 
        r226_include = _r226_t0.include.bind(_r226_t0), r226_xn$createstroke$7Hrq = _r226_t0["create-stroke"].bind(_r226_t0), 
        r226_xn$setanchor$9Jrj = _r226_t0["set-anchor"].bind(_r226_t0), _r226_t0.gizmo = r1_globalTransform, 
        _r226_t0["set-width"](r1_WIDTH), r226_xn$setwidth$9Jrj(r1_WIDTH), r226_xn$assignunicode$7Hrq("i"), 
        r226_include(r1_glyphs.dotlessi, r1_BASE), void r226_include(r1_glyphs.dotAbove);
    }), r1_xn$createglyph$7Hrq("dotlessj.straight", function() {
        var r229_currentGlyph, r229_xn$setwidth$9Jrj, r229_xn$assignunicode$7Hrq, r229_xn$startfrom$1aao, r229_xn$lineto$5sIl, r229_xn$curveto$1aao, r229_xn$cubicto$1aao, r229_xn$putshapes$9Jrj, r229_xn$reverselast$3qIs, r229_include, r229_xn$createstroke$7Hrq, r229_xn$setanchor$9Jrj, _r229_t0;
        return _r229_t0 = this, r229_currentGlyph = _r229_t0, r229_xn$setwidth$9Jrj = _r229_t0["set-width"].bind(_r229_t0), 
        r229_xn$assignunicode$7Hrq = function(r230_code) {
            var r230_code;
            return r229_currentGlyph["assign-unicode"](r230_code), r1_unicodeGlyphs[r229_currentGlyph.unicode[r229_currentGlyph.unicode.length - 1]] = r229_currentGlyph;
        }, r229_xn$startfrom$1aao = _r229_t0["start-from"].bind(_r229_t0), r229_xn$lineto$5sIl = _r229_t0["line-to"].bind(_r229_t0), 
        r229_xn$curveto$1aao = _r229_t0["curve-to"].bind(_r229_t0), r229_xn$cubicto$1aao = _r229_t0["cubic-to"].bind(_r229_t0), 
        r229_xn$putshapes$9Jrj = _r229_t0["put-shapes"].bind(_r229_t0), r229_xn$reverselast$3qIs = _r229_t0["reverse-last"].bind(_r229_t0), 
        r229_include = _r229_t0.include.bind(_r229_t0), r229_xn$createstroke$7Hrq = _r229_t0["create-stroke"].bind(_r229_t0), 
        r229_xn$setanchor$9Jrj = _r229_t0["set-anchor"].bind(_r229_t0), _r229_t0.gizmo = r1_globalTransform, 
        _r229_t0["set-width"](r1_WIDTH), r229_xn$setanchor$9Jrj("above", r1_BASE, r1_MIDDLE + r1_JBALANCE, r1_XH), 
        void r229_xn$putshapes$9Jrj(r229_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r1_JBALANCE, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE + r1_JBALANCE, 0)["arc-vh-to"](r1_MIDDLE + r1_DESCENDER, r1_DESCENDER + r1_HALFSTROKE)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("dotlessj.serifed", function() {
        var r232_currentGlyph, r232_xn$setwidth$9Jrj, r232_xn$assignunicode$7Hrq, r232_xn$startfrom$1aao, r232_xn$lineto$5sIl, r232_xn$curveto$1aao, r232_xn$cubicto$1aao, r232_xn$putshapes$9Jrj, r232_xn$reverselast$3qIs, r232_include, r232_xn$createstroke$7Hrq, r232_xn$setanchor$9Jrj, _r232_t0;
        return _r232_t0 = this, r232_currentGlyph = _r232_t0, r232_xn$setwidth$9Jrj = _r232_t0["set-width"].bind(_r232_t0), 
        r232_xn$assignunicode$7Hrq = function(r233_code) {
            var r233_code;
            return r232_currentGlyph["assign-unicode"](r233_code), r1_unicodeGlyphs[r232_currentGlyph.unicode[r232_currentGlyph.unicode.length - 1]] = r232_currentGlyph;
        }, r232_xn$startfrom$1aao = _r232_t0["start-from"].bind(_r232_t0), r232_xn$lineto$5sIl = _r232_t0["line-to"].bind(_r232_t0), 
        r232_xn$curveto$1aao = _r232_t0["curve-to"].bind(_r232_t0), r232_xn$cubicto$1aao = _r232_t0["cubic-to"].bind(_r232_t0), 
        r232_xn$putshapes$9Jrj = _r232_t0["put-shapes"].bind(_r232_t0), r232_xn$reverselast$3qIs = _r232_t0["reverse-last"].bind(_r232_t0), 
        r232_include = _r232_t0.include.bind(_r232_t0), r232_xn$createstroke$7Hrq = _r232_t0["create-stroke"].bind(_r232_t0), 
        r232_xn$setanchor$9Jrj = _r232_t0["set-anchor"].bind(_r232_t0), _r232_t0.gizmo = r1_globalTransform, 
        _r232_t0["set-width"](r1_WIDTH), r232_include(r1_glyphs["dotlessj.straight"], r1_BASE), 
        void r232_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r1_JBALANCE, r1_XH, r1_LONGJUT));
    }), r1_xn$selectvariant$7Hrq("dotlessj", 567, "serifed"), r1_xn$createglyph$7Hrq("j", function() {
        var r235_currentGlyph, r235_xn$setwidth$9Jrj, r235_xn$assignunicode$7Hrq, r235_xn$startfrom$1aao, r235_xn$lineto$5sIl, r235_xn$curveto$1aao, r235_xn$cubicto$1aao, r235_xn$putshapes$9Jrj, r235_xn$reverselast$3qIs, r235_include, r235_xn$createstroke$7Hrq, r235_xn$setanchor$9Jrj, _r235_t0;
        return _r235_t0 = this, r235_currentGlyph = _r235_t0, r235_xn$setwidth$9Jrj = _r235_t0["set-width"].bind(_r235_t0), 
        r235_xn$assignunicode$7Hrq = function(r236_code) {
            var r236_code;
            return r235_currentGlyph["assign-unicode"](r236_code), r1_unicodeGlyphs[r235_currentGlyph.unicode[r235_currentGlyph.unicode.length - 1]] = r235_currentGlyph;
        }, r235_xn$startfrom$1aao = _r235_t0["start-from"].bind(_r235_t0), r235_xn$lineto$5sIl = _r235_t0["line-to"].bind(_r235_t0), 
        r235_xn$curveto$1aao = _r235_t0["curve-to"].bind(_r235_t0), r235_xn$cubicto$1aao = _r235_t0["cubic-to"].bind(_r235_t0), 
        r235_xn$putshapes$9Jrj = _r235_t0["put-shapes"].bind(_r235_t0), r235_xn$reverselast$3qIs = _r235_t0["reverse-last"].bind(_r235_t0), 
        r235_include = _r235_t0.include.bind(_r235_t0), r235_xn$createstroke$7Hrq = _r235_t0["create-stroke"].bind(_r235_t0), 
        r235_xn$setanchor$9Jrj = _r235_t0["set-anchor"].bind(_r235_t0), _r235_t0.gizmo = r1_globalTransform, 
        _r235_t0["set-width"](r1_WIDTH), r235_xn$setwidth$9Jrj(r1_WIDTH), r235_xn$assignunicode$7Hrq("j"), 
        r235_include(r1_glyphs.dotlessj, r1_BASE), void r235_include(r1_glyphs.dotAbove);
    }), r1_xn$createglyph$7Hrq("l.straight", function() {
        var r238_currentGlyph, r238_xn$setwidth$9Jrj, r238_xn$assignunicode$7Hrq, r238_xn$startfrom$1aao, r238_xn$lineto$5sIl, r238_xn$curveto$1aao, r238_xn$cubicto$1aao, r238_xn$putshapes$9Jrj, r238_xn$reverselast$3qIs, r238_include, r238_xn$createstroke$7Hrq, r238_xn$setanchor$9Jrj, _r238_t0;
        return _r238_t0 = this, r238_currentGlyph = _r238_t0, r238_xn$setwidth$9Jrj = _r238_t0["set-width"].bind(_r238_t0), 
        r238_xn$assignunicode$7Hrq = function(r239_code) {
            var r239_code;
            return r238_currentGlyph["assign-unicode"](r239_code), r1_unicodeGlyphs[r238_currentGlyph.unicode[r238_currentGlyph.unicode.length - 1]] = r238_currentGlyph;
        }, r238_xn$startfrom$1aao = _r238_t0["start-from"].bind(_r238_t0), r238_xn$lineto$5sIl = _r238_t0["line-to"].bind(_r238_t0), 
        r238_xn$curveto$1aao = _r238_t0["curve-to"].bind(_r238_t0), r238_xn$cubicto$1aao = _r238_t0["cubic-to"].bind(_r238_t0), 
        r238_xn$putshapes$9Jrj = _r238_t0["put-shapes"].bind(_r238_t0), r238_xn$reverselast$3qIs = _r238_t0["reverse-last"].bind(_r238_t0), 
        r238_include = _r238_t0.include.bind(_r238_t0), r238_xn$createstroke$7Hrq = _r238_t0["create-stroke"].bind(_r238_t0), 
        r238_xn$setanchor$9Jrj = _r238_t0["set-anchor"].bind(_r238_t0), _r238_t0.gizmo = r1_globalTransform, 
        _r238_t0["set-width"](r1_WIDTH), r238_include(r1_bMarks), void r238_xn$putshapes$9Jrj(r238_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("l.hooky", function() {
        var r241_currentGlyph, r241_xn$setwidth$9Jrj, r241_xn$assignunicode$7Hrq, r241_xn$startfrom$1aao, r241_xn$lineto$5sIl, r241_xn$curveto$1aao, r241_xn$cubicto$1aao, r241_xn$putshapes$9Jrj, r241_xn$reverselast$3qIs, r241_include, r241_xn$createstroke$7Hrq, r241_xn$setanchor$9Jrj, _r241_t0;
        return _r241_t0 = this, r241_currentGlyph = _r241_t0, r241_xn$setwidth$9Jrj = _r241_t0["set-width"].bind(_r241_t0), 
        r241_xn$assignunicode$7Hrq = function(r242_code) {
            var r242_code;
            return r241_currentGlyph["assign-unicode"](r242_code), r1_unicodeGlyphs[r241_currentGlyph.unicode[r241_currentGlyph.unicode.length - 1]] = r241_currentGlyph;
        }, r241_xn$startfrom$1aao = _r241_t0["start-from"].bind(_r241_t0), r241_xn$lineto$5sIl = _r241_t0["line-to"].bind(_r241_t0), 
        r241_xn$curveto$1aao = _r241_t0["curve-to"].bind(_r241_t0), r241_xn$cubicto$1aao = _r241_t0["cubic-to"].bind(_r241_t0), 
        r241_xn$putshapes$9Jrj = _r241_t0["put-shapes"].bind(_r241_t0), r241_xn$reverselast$3qIs = _r241_t0["reverse-last"].bind(_r241_t0), 
        r241_include = _r241_t0.include.bind(_r241_t0), r241_xn$createstroke$7Hrq = _r241_t0["create-stroke"].bind(_r241_t0), 
        r241_xn$setanchor$9Jrj = _r241_t0["set-anchor"].bind(_r241_t0), _r241_t0.gizmo = r1_globalTransform, 
        _r241_t0["set-width"](r1_WIDTH), r241_include(r1_bMarks), r241_include(r1_glyphs["l.straight"]), 
        void r241_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE, r1_CAP, r1_LONGJUT));
    }), r1_xn$createglyph$7Hrq("l.zshaped", function() {
        var r244_currentGlyph, r244_xn$setwidth$9Jrj, r244_xn$assignunicode$7Hrq, r244_xn$startfrom$1aao, r244_xn$lineto$5sIl, r244_xn$curveto$1aao, r244_xn$cubicto$1aao, r244_xn$putshapes$9Jrj, r244_xn$reverselast$3qIs, r244_include, r244_xn$createstroke$7Hrq, r244_xn$setanchor$9Jrj, _r244_t0;
        return _r244_t0 = this, r244_currentGlyph = _r244_t0, r244_xn$setwidth$9Jrj = _r244_t0["set-width"].bind(_r244_t0), 
        r244_xn$assignunicode$7Hrq = function(r245_code) {
            var r245_code;
            return r244_currentGlyph["assign-unicode"](r245_code), r1_unicodeGlyphs[r244_currentGlyph.unicode[r244_currentGlyph.unicode.length - 1]] = r244_currentGlyph;
        }, r244_xn$startfrom$1aao = _r244_t0["start-from"].bind(_r244_t0), r244_xn$lineto$5sIl = _r244_t0["line-to"].bind(_r244_t0), 
        r244_xn$curveto$1aao = _r244_t0["curve-to"].bind(_r244_t0), r244_xn$cubicto$1aao = _r244_t0["cubic-to"].bind(_r244_t0), 
        r244_xn$putshapes$9Jrj = _r244_t0["put-shapes"].bind(_r244_t0), r244_xn$reverselast$3qIs = _r244_t0["reverse-last"].bind(_r244_t0), 
        r244_include = _r244_t0.include.bind(_r244_t0), r244_xn$createstroke$7Hrq = _r244_t0["create-stroke"].bind(_r244_t0), 
        r244_xn$setanchor$9Jrj = _r244_t0["set-anchor"].bind(_r244_t0), _r244_t0.gizmo = r1_globalTransform, 
        _r244_t0["set-width"](r1_WIDTH), r244_include(r1_bMarks), r244_include(r1_glyphs["l.hooky"]), 
        void r244_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
    }), r1_xn$createglyph$7Hrq("l.serifed", function() {
        var r247_currentGlyph, r247_xn$setwidth$9Jrj, r247_xn$assignunicode$7Hrq, r247_xn$startfrom$1aao, r247_xn$lineto$5sIl, r247_xn$curveto$1aao, r247_xn$cubicto$1aao, r247_xn$putshapes$9Jrj, r247_xn$reverselast$3qIs, r247_include, r247_xn$createstroke$7Hrq, r247_xn$setanchor$9Jrj, r247_balance, _r247_t0;
        return _r247_t0 = this, r247_currentGlyph = _r247_t0, r247_xn$setwidth$9Jrj = _r247_t0["set-width"].bind(_r247_t0), 
        r247_xn$assignunicode$7Hrq = function(r248_code) {
            var r248_code;
            return r247_currentGlyph["assign-unicode"](r248_code), r1_unicodeGlyphs[r247_currentGlyph.unicode[r247_currentGlyph.unicode.length - 1]] = r247_currentGlyph;
        }, r247_xn$startfrom$1aao = _r247_t0["start-from"].bind(_r247_t0), r247_xn$lineto$5sIl = _r247_t0["line-to"].bind(_r247_t0), 
        r247_xn$curveto$1aao = _r247_t0["curve-to"].bind(_r247_t0), r247_xn$cubicto$1aao = _r247_t0["cubic-to"].bind(_r247_t0), 
        r247_xn$putshapes$9Jrj = _r247_t0["put-shapes"].bind(_r247_t0), r247_xn$reverselast$3qIs = _r247_t0["reverse-last"].bind(_r247_t0), 
        r247_include = _r247_t0.include.bind(_r247_t0), r247_xn$createstroke$7Hrq = _r247_t0["create-stroke"].bind(_r247_t0), 
        r247_xn$setanchor$9Jrj = _r247_t0["set-anchor"].bind(_r247_t0), _r247_t0.gizmo = r1_globalTransform, 
        _r247_t0["set-width"](r1_WIDTH), r247_include(r1_bMarks), r247_balance = r1_ILBALANCE, 
        r247_xn$putshapes$9Jrj(r247_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r247_balance, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE + r247_balance, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r247_xn$putshapes$9Jrj(r1_leftwardTopSerif(r1_MIDDLE + r247_balance, r1_CAP, r1_LONGJUT - r247_balance)), 
        r247_xn$putshapes$9Jrj(r1_rightwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT)), void r247_xn$putshapes$9Jrj(r1_leftwardBottomSerif(r1_MIDDLE, 0, r1_LONGJUT));
    }), r1_xn$selectvariant$7Hrq("l", "l", "serifed"), r1_xn$createglyph$7Hrq("x", function() {
        var r250_currentGlyph, r250_xn$setwidth$9Jrj, r250_xn$assignunicode$7Hrq, r250_xn$startfrom$1aao, r250_xn$lineto$5sIl, r250_xn$curveto$1aao, r250_xn$cubicto$1aao, r250_xn$putshapes$9Jrj, r250_xn$reverselast$3qIs, r250_include, r250_xn$createstroke$7Hrq, r250_xn$setanchor$9Jrj, r250_TURN, r250_barone, r250_bartwo, _r250_t0;
        return _r250_t0 = this, r250_currentGlyph = _r250_t0, r250_xn$setwidth$9Jrj = _r250_t0["set-width"].bind(_r250_t0), 
        r250_xn$assignunicode$7Hrq = function(r251_code) {
            var r251_code;
            return r250_currentGlyph["assign-unicode"](r251_code), r1_unicodeGlyphs[r250_currentGlyph.unicode[r250_currentGlyph.unicode.length - 1]] = r250_currentGlyph;
        }, r250_xn$startfrom$1aao = _r250_t0["start-from"].bind(_r250_t0), r250_xn$lineto$5sIl = _r250_t0["line-to"].bind(_r250_t0), 
        r250_xn$curveto$1aao = _r250_t0["curve-to"].bind(_r250_t0), r250_xn$cubicto$1aao = _r250_t0["cubic-to"].bind(_r250_t0), 
        r250_xn$putshapes$9Jrj = _r250_t0["put-shapes"].bind(_r250_t0), r250_xn$reverselast$3qIs = _r250_t0["reverse-last"].bind(_r250_t0), 
        r250_include = _r250_t0.include.bind(_r250_t0), r250_xn$createstroke$7Hrq = _r250_t0["create-stroke"].bind(_r250_t0), 
        r250_xn$setanchor$9Jrj = _r250_t0["set-anchor"].bind(_r250_t0), _r250_t0.gizmo = r1_globalTransform, 
        _r250_t0["set-width"](r1_WIDTH), r250_xn$setwidth$9Jrj(r1_WIDTH), r250_xn$assignunicode$7Hrq("x"), 
        r250_include(r1_eMarks), r250_TURN = .1 * r1_XH, r250_barone = r250_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_HALFSTROKE + r1_O, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["cubic-to"](r1_SB + r1_HALFSTROKE + r1_O, r250_TURN + .17 * (r1_XH - r250_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH - r250_TURN - .17 * (r1_XH - r250_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH)["heads-to"](r1_UPWARD), 
        r250_bartwo = r250_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB - r1_HALFSTROKE - r1_O, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["cubic-to"](r1_RIGHTSB - r1_HALFSTROKE - r1_O, r250_TURN + .17 * (r1_XH - r250_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH - r250_TURN - .17 * (r1_XH - r250_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH)["heads-to"](r1_UPWARD), 
        r250_xn$putshapes$9Jrj(r250_barone["to-outline"]()), void r250_xn$putshapes$9Jrj(r250_bartwo["to-outline"]());
    }), r1_xn$createglyph$7Hrq("v", function() {
        var r253_currentGlyph, r253_xn$setwidth$9Jrj, r253_xn$assignunicode$7Hrq, r253_xn$startfrom$1aao, r253_xn$lineto$5sIl, r253_xn$curveto$1aao, r253_xn$cubicto$1aao, r253_xn$putshapes$9Jrj, r253_xn$reverselast$3qIs, r253_include, r253_xn$createstroke$7Hrq, r253_xn$setanchor$9Jrj, r253_TURN, r253_leftbar, r253_rightbar, _r253_t0;
        return _r253_t0 = this, r253_currentGlyph = _r253_t0, r253_xn$setwidth$9Jrj = _r253_t0["set-width"].bind(_r253_t0), 
        r253_xn$assignunicode$7Hrq = function(r254_code) {
            var r254_code;
            return r253_currentGlyph["assign-unicode"](r254_code), r1_unicodeGlyphs[r253_currentGlyph.unicode[r253_currentGlyph.unicode.length - 1]] = r253_currentGlyph;
        }, r253_xn$startfrom$1aao = _r253_t0["start-from"].bind(_r253_t0), r253_xn$lineto$5sIl = _r253_t0["line-to"].bind(_r253_t0), 
        r253_xn$curveto$1aao = _r253_t0["curve-to"].bind(_r253_t0), r253_xn$cubicto$1aao = _r253_t0["cubic-to"].bind(_r253_t0), 
        r253_xn$putshapes$9Jrj = _r253_t0["put-shapes"].bind(_r253_t0), r253_xn$reverselast$3qIs = _r253_t0["reverse-last"].bind(_r253_t0), 
        r253_include = _r253_t0.include.bind(_r253_t0), r253_xn$createstroke$7Hrq = _r253_t0["create-stroke"].bind(_r253_t0), 
        r253_xn$setanchor$9Jrj = _r253_t0["set-anchor"].bind(_r253_t0), _r253_t0.gizmo = r1_globalTransform, 
        _r253_t0["set-width"](r1_WIDTH), r253_xn$setwidth$9Jrj(r1_WIDTH), r253_xn$assignunicode$7Hrq("v"), 
        r253_include(r1_eMarks), r253_TURN = .9 * r1_XH, r253_leftbar = r253_xn$createstroke$7Hrq(), 
        r253_leftbar["start-from"](r1_SB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r253_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_SB, .73 * r253_TURN, r1_MIDDLE - r1_STROKE / 2, 0)["set-width"](.8 * r1_STROKE, 0), 
        r253_rightbar = r253_xn$createstroke$7Hrq(), r253_rightbar["start-from"](r1_RIGHTSB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r253_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, .73 * r253_TURN, r1_MIDDLE + r1_STROKE / 2, 0)["set-width"](0, .8 * r1_STROKE), 
        r253_xn$putshapes$9Jrj(r253_leftbar["to-outline"]()), r253_xn$putshapes$9Jrj(r253_rightbar["to-outline"]()), 
        r253_xn$startfrom$1aao(r1_MIDDLE + r1_STROKE / 2, 0), r253_xn$lineto$5sIl(r1_MIDDLE - r1_STROKE / 2, 0), 
        void r253_xn$lineto$5sIl(r1_MIDDLE, r1_STROKE);
    }), r1_xn$createglyph$7Hrq("w", function() {
        var r256_currentGlyph, r256_xn$setwidth$9Jrj, r256_xn$assignunicode$7Hrq, r256_xn$startfrom$1aao, r256_xn$lineto$5sIl, r256_xn$curveto$1aao, r256_xn$cubicto$1aao, r256_xn$putshapes$9Jrj, r256_xn$reverselast$3qIs, r256_include, r256_xn$createstroke$7Hrq, r256_xn$setanchor$9Jrj, r256_TURN, r256_turn2, r256_wheight, r256_bottomStroke, r256_m1, r256_m2, _r256_t0;
        return _r256_t0 = this, r256_currentGlyph = _r256_t0, r256_xn$setwidth$9Jrj = _r256_t0["set-width"].bind(_r256_t0), 
        r256_xn$assignunicode$7Hrq = function(r257_code) {
            var r257_code;
            return r256_currentGlyph["assign-unicode"](r257_code), r1_unicodeGlyphs[r256_currentGlyph.unicode[r256_currentGlyph.unicode.length - 1]] = r256_currentGlyph;
        }, r256_xn$startfrom$1aao = _r256_t0["start-from"].bind(_r256_t0), r256_xn$lineto$5sIl = _r256_t0["line-to"].bind(_r256_t0), 
        r256_xn$curveto$1aao = _r256_t0["curve-to"].bind(_r256_t0), r256_xn$cubicto$1aao = _r256_t0["cubic-to"].bind(_r256_t0), 
        r256_xn$putshapes$9Jrj = _r256_t0["put-shapes"].bind(_r256_t0), r256_xn$reverselast$3qIs = _r256_t0["reverse-last"].bind(_r256_t0), 
        r256_include = _r256_t0.include.bind(_r256_t0), r256_xn$createstroke$7Hrq = _r256_t0["create-stroke"].bind(_r256_t0), 
        r256_xn$setanchor$9Jrj = _r256_t0["set-anchor"].bind(_r256_t0), _r256_t0.gizmo = r1_globalTransform, 
        _r256_t0["set-width"](r1_WIDTH), r256_xn$setwidth$9Jrj(r1_WIDTH), r256_xn$assignunicode$7Hrq("w"), 
        r256_include(r1_eMarks), r256_TURN = .75 * r1_XH, r256_turn2 = .59 * r1_XH, r256_wheight = .6 * r1_XH, 
        r256_bottomStroke = Math.min(.8 * r1_STROKE, .175 * (r1_WIDTH - 2 * r1_SB)), r256_m1 = .325 * r1_WIDTH, 
        r256_m2 = .675 * r1_WIDTH, r256_xn$putshapes$9Jrj(r256_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_SB, r256_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_SB, .73 * r256_TURN, r256_m1 - r256_bottomStroke / 2, 0)["set-width"](r256_bottomStroke, 0)["to-outline"]()), 
        r256_xn$putshapes$9Jrj(r256_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r256_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, .73 * r256_TURN, r256_m2 + r256_bottomStroke / 2, 0)["set-width"](0, r256_bottomStroke)["to-outline"]()), 
        r256_xn$putshapes$9Jrj(r256_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r256_bottomStroke / 2, r256_wheight)["heads-to"](r1_DOWNWARD)["set-width"](0, r256_bottomStroke)["line-to"](r1_MIDDLE + r256_bottomStroke / 2, r256_turn2)["heads-to"](r1_DOWNWARD)["curve-to"](r1_MIDDLE + r256_bottomStroke / 2, .9 * r256_turn2, r256_m1 + r256_bottomStroke / 2, 0)["set-width"](0, r256_bottomStroke)["to-outline"]()), 
        r256_xn$putshapes$9Jrj(r256_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - r256_bottomStroke / 2, r256_wheight)["heads-to"](r1_DOWNWARD)["set-width"](r256_bottomStroke, 0)["line-to"](r1_MIDDLE - r256_bottomStroke / 2, r256_turn2)["heads-to"](r1_DOWNWARD)["curve-to"](r1_MIDDLE - r256_bottomStroke / 2, .9 * r256_turn2, r256_m2 - r256_bottomStroke / 2, 0)["set-width"](r256_bottomStroke, 0)["to-outline"]()), 
        r256_xn$startfrom$1aao(r256_m1 + r256_bottomStroke / 2, 0), r256_xn$lineto$5sIl(r256_m1 - r256_bottomStroke / 2, 0), 
        r256_xn$lineto$5sIl(r256_m1, r256_bottomStroke), r256_xn$startfrom$1aao(r256_m2 + r256_bottomStroke / 2, 0), 
        r256_xn$lineto$5sIl(r256_m2 - r256_bottomStroke / 2, 0), void r256_xn$lineto$5sIl(r256_m2, r256_bottomStroke);
    }), r1_xn$createglyph$7Hrq("y.upright", function() {
        var r259_currentGlyph, r259_xn$setwidth$9Jrj, r259_xn$assignunicode$7Hrq, r259_xn$startfrom$1aao, r259_xn$lineto$5sIl, r259_xn$curveto$1aao, r259_xn$cubicto$1aao, r259_xn$putshapes$9Jrj, r259_xn$reverselast$3qIs, r259_include, r259_xn$createstroke$7Hrq, r259_xn$setanchor$9Jrj, r259_xbottom, r259_turnp, r259_xb, r259_yb, _r259_t0;
        return _r259_t0 = this, r259_currentGlyph = _r259_t0, r259_xn$setwidth$9Jrj = _r259_t0["set-width"].bind(_r259_t0), 
        r259_xn$assignunicode$7Hrq = function(r260_code) {
            var r260_code;
            return r259_currentGlyph["assign-unicode"](r260_code), r1_unicodeGlyphs[r259_currentGlyph.unicode[r259_currentGlyph.unicode.length - 1]] = r259_currentGlyph;
        }, r259_xn$startfrom$1aao = _r259_t0["start-from"].bind(_r259_t0), r259_xn$lineto$5sIl = _r259_t0["line-to"].bind(_r259_t0), 
        r259_xn$curveto$1aao = _r259_t0["curve-to"].bind(_r259_t0), r259_xn$cubicto$1aao = _r259_t0["cubic-to"].bind(_r259_t0), 
        r259_xn$putshapes$9Jrj = _r259_t0["put-shapes"].bind(_r259_t0), r259_xn$reverselast$3qIs = _r259_t0["reverse-last"].bind(_r259_t0), 
        r259_include = _r259_t0.include.bind(_r259_t0), r259_xn$createstroke$7Hrq = _r259_t0["create-stroke"].bind(_r259_t0), 
        r259_xn$setanchor$9Jrj = _r259_t0["set-anchor"].bind(_r259_t0), _r259_t0.gizmo = r1_globalTransform, 
        _r259_t0["set-width"](r1_WIDTH), r259_xn$setwidth$9Jrj(r1_WIDTH), r259_include(r1_pMarks), 
        r259_xbottom = r1_mix(r1_SB, r1_RIGHTSB, .28), r259_turnp = r1_XH / (r1_XH - r1_DESCENDER), 
        r259_xb = r1_mix(r1_SB, r1_RIGHTSB, .51), r259_yb = r1_mix(0, r1_XH, .1 * r259_turnp), 
        r259_xn$putshapes$9Jrj(r1_xStrand(r259_xbottom, r1_DESCENDER, r1_RIGHTSB, r1_XH, .1, .6, .14)), 
        void r259_xn$putshapes$9Jrj(r1_halfXStrand(r1_SB, r1_XH, r259_xb, r259_yb, .1 * r259_turnp, .4, .14 * r259_turnp));
    }), r1_xn$createglyph$7Hrq("y.italic", function() {
        var r262_currentGlyph, r262_xn$setwidth$9Jrj, r262_xn$assignunicode$7Hrq, r262_xn$startfrom$1aao, r262_xn$lineto$5sIl, r262_xn$curveto$1aao, r262_xn$cubicto$1aao, r262_xn$putshapes$9Jrj, r262_xn$reverselast$3qIs, r262_include, r262_xn$createstroke$7Hrq, r262_xn$setanchor$9Jrj, r262_TURN, r262_cross, r262_xbottom, r262_barone, r262_bartwo, _r262_t0;
        return _r262_t0 = this, r262_currentGlyph = _r262_t0, r262_xn$setwidth$9Jrj = _r262_t0["set-width"].bind(_r262_t0), 
        r262_xn$assignunicode$7Hrq = function(r263_code) {
            var r263_code;
            return r262_currentGlyph["assign-unicode"](r263_code), r1_unicodeGlyphs[r262_currentGlyph.unicode[r262_currentGlyph.unicode.length - 1]] = r262_currentGlyph;
        }, r262_xn$startfrom$1aao = _r262_t0["start-from"].bind(_r262_t0), r262_xn$lineto$5sIl = _r262_t0["line-to"].bind(_r262_t0), 
        r262_xn$curveto$1aao = _r262_t0["curve-to"].bind(_r262_t0), r262_xn$cubicto$1aao = _r262_t0["cubic-to"].bind(_r262_t0), 
        r262_xn$putshapes$9Jrj = _r262_t0["put-shapes"].bind(_r262_t0), r262_xn$reverselast$3qIs = _r262_t0["reverse-last"].bind(_r262_t0), 
        r262_include = _r262_t0.include.bind(_r262_t0), r262_xn$createstroke$7Hrq = _r262_t0["create-stroke"].bind(_r262_t0), 
        r262_xn$setanchor$9Jrj = _r262_t0["set-anchor"].bind(_r262_t0), _r262_t0.gizmo = r1_globalTransform, 
        _r262_t0["set-width"](r1_WIDTH), r262_xn$setwidth$9Jrj(r1_WIDTH), r262_include(r1_pMarks), 
        r262_TURN = .1 * r1_XH, r262_cross = .15 * r1_XH, r262_xbottom = .4 * r1_WIDTH, 
        r262_barone = r262_xn$createstroke$7Hrq()["start-from"](r262_xbottom, r1_DESCENDER)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["cubic-to"](r262_xbottom, r262_TURN + .17 * (r1_XH - r262_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH - r262_TURN - .17 * (r1_XH - r262_TURN), r1_RIGHTSB - r1_HALFSTROKE - r1_O, r1_XH)["heads-to"](r1_UPWARD), 
        r262_bartwo = r262_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r262_cross)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["curve-to"](r1_SB + r1_HALFSTROKE + r1_O, r1_XH - r262_TURN - .17 * (r1_XH - r262_TURN), r1_SB + r1_HALFSTROKE + r1_O, r1_XH)["heads-to"](r1_UPWARD), 
        r262_xn$putshapes$9Jrj(r262_barone["to-outline"]()), void r262_xn$putshapes$9Jrj(r262_bartwo["to-outline"]());
    }), r1_xn$createglyph$7Hrq("y", function() {
        var r265_currentGlyph, r265_xn$setwidth$9Jrj, r265_xn$assignunicode$7Hrq, r265_xn$startfrom$1aao, r265_xn$lineto$5sIl, r265_xn$curveto$1aao, r265_xn$cubicto$1aao, r265_xn$putshapes$9Jrj, r265_xn$reverselast$3qIs, r265_include, r265_xn$createstroke$7Hrq, r265_xn$setanchor$9Jrj, _r265_t0;
        return _r265_t0 = this, r265_currentGlyph = _r265_t0, r265_xn$setwidth$9Jrj = _r265_t0["set-width"].bind(_r265_t0), 
        r265_xn$assignunicode$7Hrq = function(r266_code) {
            var r266_code;
            return r265_currentGlyph["assign-unicode"](r266_code), r1_unicodeGlyphs[r265_currentGlyph.unicode[r265_currentGlyph.unicode.length - 1]] = r265_currentGlyph;
        }, r265_xn$startfrom$1aao = _r265_t0["start-from"].bind(_r265_t0), r265_xn$lineto$5sIl = _r265_t0["line-to"].bind(_r265_t0), 
        r265_xn$curveto$1aao = _r265_t0["curve-to"].bind(_r265_t0), r265_xn$cubicto$1aao = _r265_t0["cubic-to"].bind(_r265_t0), 
        r265_xn$putshapes$9Jrj = _r265_t0["put-shapes"].bind(_r265_t0), r265_xn$reverselast$3qIs = _r265_t0["reverse-last"].bind(_r265_t0), 
        r265_include = _r265_t0.include.bind(_r265_t0), r265_xn$createstroke$7Hrq = _r265_t0["create-stroke"].bind(_r265_t0), 
        r265_xn$setanchor$9Jrj = _r265_t0["set-anchor"].bind(_r265_t0), _r265_t0.gizmo = r1_globalTransform, 
        _r265_t0["set-width"](r1_WIDTH), r265_xn$setwidth$9Jrj(r1_WIDTH), r265_xn$assignunicode$7Hrq("y"), 
        void (r1_para.italicangle > 0 ? r265_include(r1_glyphs["y.italic"], !0) : r265_include(r1_glyphs["y.upright"], !0));
    }), r1_xn$createglyph$7Hrq("z", function() {
        var r268_currentGlyph, r268_xn$setwidth$9Jrj, r268_xn$assignunicode$7Hrq, r268_xn$startfrom$1aao, r268_xn$lineto$5sIl, r268_xn$curveto$1aao, r268_xn$cubicto$1aao, r268_xn$putshapes$9Jrj, r268_xn$reverselast$3qIs, r268_include, r268_xn$createstroke$7Hrq, r268_xn$setanchor$9Jrj, r268_cor, _r268_t0;
        return _r268_t0 = this, r268_currentGlyph = _r268_t0, r268_xn$setwidth$9Jrj = _r268_t0["set-width"].bind(_r268_t0), 
        r268_xn$assignunicode$7Hrq = function(r269_code) {
            var r269_code;
            return r268_currentGlyph["assign-unicode"](r269_code), r1_unicodeGlyphs[r268_currentGlyph.unicode[r268_currentGlyph.unicode.length - 1]] = r268_currentGlyph;
        }, r268_xn$startfrom$1aao = _r268_t0["start-from"].bind(_r268_t0), r268_xn$lineto$5sIl = _r268_t0["line-to"].bind(_r268_t0), 
        r268_xn$curveto$1aao = _r268_t0["curve-to"].bind(_r268_t0), r268_xn$cubicto$1aao = _r268_t0["cubic-to"].bind(_r268_t0), 
        r268_xn$putshapes$9Jrj = _r268_t0["put-shapes"].bind(_r268_t0), r268_xn$reverselast$3qIs = _r268_t0["reverse-last"].bind(_r268_t0), 
        r268_include = _r268_t0.include.bind(_r268_t0), r268_xn$createstroke$7Hrq = _r268_t0["create-stroke"].bind(_r268_t0), 
        r268_xn$setanchor$9Jrj = _r268_t0["set-anchor"].bind(_r268_t0), _r268_t0.gizmo = r1_globalTransform, 
        _r268_t0["set-width"](r1_WIDTH), r268_xn$setwidth$9Jrj(r1_WIDTH), r268_xn$assignunicode$7Hrq("z"), 
        r268_include(r1_eMarks), r268_cor = 1.2, r268_xn$putshapes$9Jrj(r268_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_XH)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r1_XH)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r268_xn$putshapes$9Jrj(r268_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_RIGHTWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r268_xn$startfrom$1aao(r1_SB, r1_STROKE), r268_xn$lineto$5sIl(r1_SB + r1_STROKE * r268_cor, r1_STROKE), 
        r268_xn$lineto$5sIl(r1_RIGHTSB, r1_XH - r1_STROKE), r268_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r268_cor, r1_XH - r1_STROKE), 
        void r268_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("k", function() {
        var r271_currentGlyph, r271_xn$setwidth$9Jrj, r271_xn$assignunicode$7Hrq, r271_xn$startfrom$1aao, r271_xn$lineto$5sIl, r271_xn$curveto$1aao, r271_xn$cubicto$1aao, r271_xn$putshapes$9Jrj, r271_xn$reverselast$3qIs, r271_include, r271_xn$createstroke$7Hrq, r271_xn$setanchor$9Jrj, r271_TURN, r271_rturn, r271_right, r271_attach, r271_attach2, r271_fine, _r271_t0;
        return _r271_t0 = this, r271_currentGlyph = _r271_t0, r271_xn$setwidth$9Jrj = _r271_t0["set-width"].bind(_r271_t0), 
        r271_xn$assignunicode$7Hrq = function(r272_code) {
            var r272_code;
            return r271_currentGlyph["assign-unicode"](r272_code), r1_unicodeGlyphs[r271_currentGlyph.unicode[r271_currentGlyph.unicode.length - 1]] = r271_currentGlyph;
        }, r271_xn$startfrom$1aao = _r271_t0["start-from"].bind(_r271_t0), r271_xn$lineto$5sIl = _r271_t0["line-to"].bind(_r271_t0), 
        r271_xn$curveto$1aao = _r271_t0["curve-to"].bind(_r271_t0), r271_xn$cubicto$1aao = _r271_t0["cubic-to"].bind(_r271_t0), 
        r271_xn$putshapes$9Jrj = _r271_t0["put-shapes"].bind(_r271_t0), r271_xn$reverselast$3qIs = _r271_t0["reverse-last"].bind(_r271_t0), 
        r271_include = _r271_t0.include.bind(_r271_t0), r271_xn$createstroke$7Hrq = _r271_t0["create-stroke"].bind(_r271_t0), 
        r271_xn$setanchor$9Jrj = _r271_t0["set-anchor"].bind(_r271_t0), _r271_t0.gizmo = r1_globalTransform, 
        _r271_t0["set-width"](r1_WIDTH), r271_xn$setwidth$9Jrj(r1_WIDTH), r271_xn$assignunicode$7Hrq("k"), 
        r271_include(r1_bMarks), r271_TURN = .99 * r1_XH, r271_rturn = .1 * r1_XH, r271_right = r1_RIGHTSB - r1_O, 
        r271_attach = .4 * r1_XH, r271_attach2 = r1_MIDDLE - .1 * r1_WIDTH, r271_fine = Math.min(r1_STROKE, .25 * (r1_WIDTH - 2 * r1_SB)), 
        r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["set-width"](0, r1_STROKE)["heads-to"](r1_UPWARD)["line-to"](r1_SB, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_XH)["heads-to"](r1_DOWNWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r271_TURN)["heads-to"](r1_DOWNWARD)["curve-to"](r1_RIGHTSB, (1 - .18) * r271_TURN, r1_SB + r1_STROKE, r271_attach)["set-width"](0, r271_fine)["to-outline"]()), 
        void r271_xn$putshapes$9Jrj(r271_xn$createstroke$7Hrq()["start-from"](r271_right - r1_HALFSTROKE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["curve-to"](r271_right - r1_HALFSTROKE, r271_rturn + .05 * (r1_XH - r271_rturn), r271_attach2, .5 * r1_XH + r1_HALFSTROKE)["set-width"](r271_fine / 2, r271_fine / 2)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("s", function() {
        var r274_currentGlyph, r274_xn$setwidth$9Jrj, r274_xn$assignunicode$7Hrq, r274_xn$startfrom$1aao, r274_xn$lineto$5sIl, r274_xn$curveto$1aao, r274_xn$cubicto$1aao, r274_xn$putshapes$9Jrj, r274_xn$reverselast$3qIs, r274_include, r274_xn$createstroke$7Hrq, r274_xn$setanchor$9Jrj, _r274_t0;
        return _r274_t0 = this, r274_currentGlyph = _r274_t0, r274_xn$setwidth$9Jrj = _r274_t0["set-width"].bind(_r274_t0), 
        r274_xn$assignunicode$7Hrq = function(r275_code) {
            var r275_code;
            return r274_currentGlyph["assign-unicode"](r275_code), r1_unicodeGlyphs[r274_currentGlyph.unicode[r274_currentGlyph.unicode.length - 1]] = r274_currentGlyph;
        }, r274_xn$startfrom$1aao = _r274_t0["start-from"].bind(_r274_t0), r274_xn$lineto$5sIl = _r274_t0["line-to"].bind(_r274_t0), 
        r274_xn$curveto$1aao = _r274_t0["curve-to"].bind(_r274_t0), r274_xn$cubicto$1aao = _r274_t0["cubic-to"].bind(_r274_t0), 
        r274_xn$putshapes$9Jrj = _r274_t0["put-shapes"].bind(_r274_t0), r274_xn$reverselast$3qIs = _r274_t0["reverse-last"].bind(_r274_t0), 
        r274_include = _r274_t0.include.bind(_r274_t0), r274_xn$createstroke$7Hrq = _r274_t0["create-stroke"].bind(_r274_t0), 
        r274_xn$setanchor$9Jrj = _r274_t0["set-anchor"].bind(_r274_t0), _r274_t0.gizmo = r1_globalTransform, 
        _r274_t0["set-width"](r1_WIDTH), r274_xn$setwidth$9Jrj(r1_WIDTH), r274_xn$assignunicode$7Hrq("s"), 
        r274_include(r1_eMarks), r274_xn$putshapes$9Jrj(r1_sHookUpper(r1_XH, .87 * r1_SMOOTHA, r1_SHOOK)), 
        r274_xn$putshapes$9Jrj(r1_sHookLower(0, .87 * r1_SMOOTHA, r1_SHOOK)), void r274_xn$putshapes$9Jrj(r1_sStrand(r1_XH - .87 * r1_SMOOTHA, .87 * r1_SMOOTHA, .2, .45));
    }), r1_xn$createglyph$7Hrq("r", function() {
        var r277_currentGlyph, r277_xn$setwidth$9Jrj, r277_xn$assignunicode$7Hrq, r277_xn$startfrom$1aao, r277_xn$lineto$5sIl, r277_xn$curveto$1aao, r277_xn$cubicto$1aao, r277_xn$putshapes$9Jrj, r277_xn$reverselast$3qIs, r277_include, r277_xn$createstroke$7Hrq, r277_xn$setanchor$9Jrj, r277_slope, r277_expand, r277_coexpand, r277_rhookx, r277_rmiddle, _r277_t0;
        return _r277_t0 = this, r277_currentGlyph = _r277_t0, r277_xn$setwidth$9Jrj = _r277_t0["set-width"].bind(_r277_t0), 
        r277_xn$assignunicode$7Hrq = function(r278_code) {
            var r278_code;
            return r277_currentGlyph["assign-unicode"](r278_code), r1_unicodeGlyphs[r277_currentGlyph.unicode[r277_currentGlyph.unicode.length - 1]] = r277_currentGlyph;
        }, r277_xn$startfrom$1aao = _r277_t0["start-from"].bind(_r277_t0), r277_xn$lineto$5sIl = _r277_t0["line-to"].bind(_r277_t0), 
        r277_xn$curveto$1aao = _r277_t0["curve-to"].bind(_r277_t0), r277_xn$cubicto$1aao = _r277_t0["cubic-to"].bind(_r277_t0), 
        r277_xn$putshapes$9Jrj = _r277_t0["put-shapes"].bind(_r277_t0), r277_xn$reverselast$3qIs = _r277_t0["reverse-last"].bind(_r277_t0), 
        r277_include = _r277_t0.include.bind(_r277_t0), r277_xn$createstroke$7Hrq = _r277_t0["create-stroke"].bind(_r277_t0), 
        r277_xn$setanchor$9Jrj = _r277_t0["set-anchor"].bind(_r277_t0), _r277_t0.gizmo = r1_globalTransform, 
        _r277_t0["set-width"](r1_WIDTH), r277_xn$setwidth$9Jrj(r1_WIDTH), r277_xn$assignunicode$7Hrq("r"), 
        r277_include(r1_eMarks), r277_slope = .015, r277_expand = .175, r277_coexpand = (1 - r277_expand) / 2, 
        r277_rhookx = r1_RIGHTSB + r1_JBALANCE / 2, r277_rmiddle = r1_mix(r1_SB + r1_RBALANCE + r1_STROKE, r277_rhookx - r1_HALFSTROKE, .5), 
        r277_xn$putshapes$9Jrj(r277_xn$createstroke$7Hrq()["start-from"](r277_rhookx, r1_XH - r1_RHOOK)["set-width"](r1_STROKE, 0)["curve-to"](r1_mix(r277_rmiddle, r277_rhookx, r1_KAPPA_AHOOK), r1_XO, r277_rmiddle, r1_XO)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        r277_xn$putshapes$9Jrj(r277_xn$createstroke$7Hrq()["start-from"](r277_rmiddle, r1_XO - r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_STROKE * r1_ITALICCOR + r1_RBALANCE, r1_XH - r1_SMALLSMOOTHA)["heads-to"](r1_DOWNWARD)["set-width"](0, .3 * r1_STROKE)["to-outline"]()), 
        void r277_xn$putshapes$9Jrj(r277_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_RBALANCE, 0)["heads-to"](r1_UPWARD)["set-width"](0, r1_STROKE)["line-to"](r1_SB + r1_RBALANCE, r1_XH)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("f.upright", function() {
        var r280_currentGlyph, r280_xn$setwidth$9Jrj, r280_xn$assignunicode$7Hrq, r280_xn$startfrom$1aao, r280_xn$lineto$5sIl, r280_xn$curveto$1aao, r280_xn$cubicto$1aao, r280_xn$putshapes$9Jrj, r280_xn$reverselast$3qIs, r280_include, r280_xn$createstroke$7Hrq, r280_xn$setanchor$9Jrj, _r280_t0;
        return _r280_t0 = this, r280_currentGlyph = _r280_t0, r280_xn$setwidth$9Jrj = _r280_t0["set-width"].bind(_r280_t0), 
        r280_xn$assignunicode$7Hrq = function(r281_code) {
            var r281_code;
            return r280_currentGlyph["assign-unicode"](r281_code), r1_unicodeGlyphs[r280_currentGlyph.unicode[r280_currentGlyph.unicode.length - 1]] = r280_currentGlyph;
        }, r280_xn$startfrom$1aao = _r280_t0["start-from"].bind(_r280_t0), r280_xn$lineto$5sIl = _r280_t0["line-to"].bind(_r280_t0), 
        r280_xn$curveto$1aao = _r280_t0["curve-to"].bind(_r280_t0), r280_xn$cubicto$1aao = _r280_t0["cubic-to"].bind(_r280_t0), 
        r280_xn$putshapes$9Jrj = _r280_t0["put-shapes"].bind(_r280_t0), r280_xn$reverselast$3qIs = _r280_t0["reverse-last"].bind(_r280_t0), 
        r280_include = _r280_t0.include.bind(_r280_t0), r280_xn$createstroke$7Hrq = _r280_t0["create-stroke"].bind(_r280_t0), 
        r280_xn$setanchor$9Jrj = _r280_t0["set-anchor"].bind(_r280_t0), _r280_t0.gizmo = r1_globalTransform, 
        _r280_t0["set-width"](r1_WIDTH), r280_xn$setwidth$9Jrj(r1_WIDTH), r280_include(r1_bMarks), 
        r280_xn$putshapes$9Jrj(r280_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, 0)["heads-to"](r1_UPWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_CAP - 1.4 * r1_SHOOK)["arc-vh-to"](r1_MIDDLE + 2 * r1_SHOOK, r1_CAP - r1_HALFSTROKE - 6 * r1_O)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r280_include(r1_glyphs.fbar);
    }), r1_xn$createglyph$7Hrq("f.italic", function() {
        var r283_currentGlyph, r283_xn$setwidth$9Jrj, r283_xn$assignunicode$7Hrq, r283_xn$startfrom$1aao, r283_xn$lineto$5sIl, r283_xn$curveto$1aao, r283_xn$cubicto$1aao, r283_xn$putshapes$9Jrj, r283_xn$reverselast$3qIs, r283_include, r283_xn$createstroke$7Hrq, r283_xn$setanchor$9Jrj, _r283_t0;
        return _r283_t0 = this, r283_currentGlyph = _r283_t0, r283_xn$setwidth$9Jrj = _r283_t0["set-width"].bind(_r283_t0), 
        r283_xn$assignunicode$7Hrq = function(r284_code) {
            var r284_code;
            return r283_currentGlyph["assign-unicode"](r284_code), r1_unicodeGlyphs[r283_currentGlyph.unicode[r283_currentGlyph.unicode.length - 1]] = r283_currentGlyph;
        }, r283_xn$startfrom$1aao = _r283_t0["start-from"].bind(_r283_t0), r283_xn$lineto$5sIl = _r283_t0["line-to"].bind(_r283_t0), 
        r283_xn$curveto$1aao = _r283_t0["curve-to"].bind(_r283_t0), r283_xn$cubicto$1aao = _r283_t0["cubic-to"].bind(_r283_t0), 
        r283_xn$putshapes$9Jrj = _r283_t0["put-shapes"].bind(_r283_t0), r283_xn$reverselast$3qIs = _r283_t0["reverse-last"].bind(_r283_t0), 
        r283_include = _r283_t0.include.bind(_r283_t0), r283_xn$createstroke$7Hrq = _r283_t0["create-stroke"].bind(_r283_t0), 
        r283_xn$setanchor$9Jrj = _r283_t0["set-anchor"].bind(_r283_t0), _r283_t0.gizmo = r1_globalTransform, 
        _r283_t0["set-width"](r1_WIDTH), r283_xn$setwidth$9Jrj(r1_WIDTH), r283_include(r1_ifMarks), 
        r283_xn$putshapes$9Jrj(r283_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - 2 * r1_SHOOK, r1_HALFSTROKE + 6 * r1_O - r1_SHOOK)["heads-to"](r1_RIGHTWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["arc-hv-to"](r1_MIDDLE, 0)["line-to"](r1_MIDDLE, r1_CAP - r1_SHOOK)["arc-vh-to"](r1_MIDDLE + 2 * r1_SHOOK, r1_CAP - r1_HALFSTROKE - 6 * r1_O)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r283_include(r1_glyphs.fbar);
    }), r1_xn$createglyph$7Hrq("f", function() {
        var r286_currentGlyph, r286_xn$setwidth$9Jrj, r286_xn$assignunicode$7Hrq, r286_xn$startfrom$1aao, r286_xn$lineto$5sIl, r286_xn$curveto$1aao, r286_xn$cubicto$1aao, r286_xn$putshapes$9Jrj, r286_xn$reverselast$3qIs, r286_include, r286_xn$createstroke$7Hrq, r286_xn$setanchor$9Jrj, _r286_t0;
        return _r286_t0 = this, r286_currentGlyph = _r286_t0, r286_xn$setwidth$9Jrj = _r286_t0["set-width"].bind(_r286_t0), 
        r286_xn$assignunicode$7Hrq = function(r287_code) {
            var r287_code;
            return r286_currentGlyph["assign-unicode"](r287_code), r1_unicodeGlyphs[r286_currentGlyph.unicode[r286_currentGlyph.unicode.length - 1]] = r286_currentGlyph;
        }, r286_xn$startfrom$1aao = _r286_t0["start-from"].bind(_r286_t0), r286_xn$lineto$5sIl = _r286_t0["line-to"].bind(_r286_t0), 
        r286_xn$curveto$1aao = _r286_t0["curve-to"].bind(_r286_t0), r286_xn$cubicto$1aao = _r286_t0["cubic-to"].bind(_r286_t0), 
        r286_xn$putshapes$9Jrj = _r286_t0["put-shapes"].bind(_r286_t0), r286_xn$reverselast$3qIs = _r286_t0["reverse-last"].bind(_r286_t0), 
        r286_include = _r286_t0.include.bind(_r286_t0), r286_xn$createstroke$7Hrq = _r286_t0["create-stroke"].bind(_r286_t0), 
        r286_xn$setanchor$9Jrj = _r286_t0["set-anchor"].bind(_r286_t0), _r286_t0.gizmo = r1_globalTransform, 
        _r286_t0["set-width"](r1_WIDTH), r286_xn$setwidth$9Jrj(r1_WIDTH), r286_xn$assignunicode$7Hrq("f"), 
        void (r1_para.italicangle > 0 ? r286_include(r1_glyphs["f.italic"], !0) : r286_include(r1_glyphs["f.upright"], !0));
    }), r1_xn$createglyph$7Hrq("zero.slashed", function() {
        var r289_currentGlyph, r289_xn$setwidth$9Jrj, r289_xn$assignunicode$7Hrq, r289_xn$startfrom$1aao, r289_xn$lineto$5sIl, r289_xn$curveto$1aao, r289_xn$cubicto$1aao, r289_xn$putshapes$9Jrj, r289_xn$reverselast$3qIs, r289_include, r289_xn$createstroke$7Hrq, r289_xn$setanchor$9Jrj, r289_bar, _r289_t0;
        return _r289_t0 = this, r289_currentGlyph = _r289_t0, r289_xn$setwidth$9Jrj = _r289_t0["set-width"].bind(_r289_t0), 
        r289_xn$assignunicode$7Hrq = function(r290_code) {
            var r290_code;
            return r289_currentGlyph["assign-unicode"](r290_code), r1_unicodeGlyphs[r289_currentGlyph.unicode[r289_currentGlyph.unicode.length - 1]] = r289_currentGlyph;
        }, r289_xn$startfrom$1aao = _r289_t0["start-from"].bind(_r289_t0), r289_xn$lineto$5sIl = _r289_t0["line-to"].bind(_r289_t0), 
        r289_xn$curveto$1aao = _r289_t0["curve-to"].bind(_r289_t0), r289_xn$cubicto$1aao = _r289_t0["cubic-to"].bind(_r289_t0), 
        r289_xn$putshapes$9Jrj = _r289_t0["put-shapes"].bind(_r289_t0), r289_xn$reverselast$3qIs = _r289_t0["reverse-last"].bind(_r289_t0), 
        r289_include = _r289_t0.include.bind(_r289_t0), r289_xn$createstroke$7Hrq = _r289_t0["create-stroke"].bind(_r289_t0), 
        r289_xn$setanchor$9Jrj = _r289_t0["set-anchor"].bind(_r289_t0), _r289_t0.gizmo = r1_globalTransform, 
        _r289_t0["set-width"](r1_WIDTH), r289_xn$setwidth$9Jrj(r1_WIDTH), r289_xn$putshapes$9Jrj(r1_glyphs.O.contours), 
        r289_bar = r289_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_STROKE / 2, .35 * r1_CAP)["line-to"](r1_RIGHTSB - r1_STROKE / 2, .65 * r1_CAP), 
        void r289_xn$putshapes$9Jrj(r289_bar["to-outline"](r1_STROKE / 2, r1_STROKE / 2));
    }), r1_xn$createglyph$7Hrq("zero.unslashed", function() {
        var r292_currentGlyph, r292_xn$setwidth$9Jrj, r292_xn$assignunicode$7Hrq, r292_xn$startfrom$1aao, r292_xn$lineto$5sIl, r292_xn$curveto$1aao, r292_xn$cubicto$1aao, r292_xn$putshapes$9Jrj, r292_xn$reverselast$3qIs, r292_include, r292_xn$createstroke$7Hrq, r292_xn$setanchor$9Jrj, _r292_t0;
        return _r292_t0 = this, r292_currentGlyph = _r292_t0, r292_xn$setwidth$9Jrj = _r292_t0["set-width"].bind(_r292_t0), 
        r292_xn$assignunicode$7Hrq = function(r293_code) {
            var r293_code;
            return r292_currentGlyph["assign-unicode"](r293_code), r1_unicodeGlyphs[r292_currentGlyph.unicode[r292_currentGlyph.unicode.length - 1]] = r292_currentGlyph;
        }, r292_xn$startfrom$1aao = _r292_t0["start-from"].bind(_r292_t0), r292_xn$lineto$5sIl = _r292_t0["line-to"].bind(_r292_t0), 
        r292_xn$curveto$1aao = _r292_t0["curve-to"].bind(_r292_t0), r292_xn$cubicto$1aao = _r292_t0["cubic-to"].bind(_r292_t0), 
        r292_xn$putshapes$9Jrj = _r292_t0["put-shapes"].bind(_r292_t0), r292_xn$reverselast$3qIs = _r292_t0["reverse-last"].bind(_r292_t0), 
        r292_include = _r292_t0.include.bind(_r292_t0), r292_xn$createstroke$7Hrq = _r292_t0["create-stroke"].bind(_r292_t0), 
        r292_xn$setanchor$9Jrj = _r292_t0["set-anchor"].bind(_r292_t0), _r292_t0.gizmo = r1_globalTransform, 
        _r292_t0["set-width"](r1_WIDTH), void r292_include(r1_glyphs.O);
    }), r1_xn$createglyph$7Hrq("zero.dotted", function() {
        var r295_currentGlyph, r295_xn$setwidth$9Jrj, r295_xn$assignunicode$7Hrq, r295_xn$startfrom$1aao, r295_xn$lineto$5sIl, r295_xn$curveto$1aao, r295_xn$cubicto$1aao, r295_xn$putshapes$9Jrj, r295_xn$reverselast$3qIs, r295_include, r295_xn$createstroke$7Hrq, r295_xn$setanchor$9Jrj, _r295_t0;
        return _r295_t0 = this, r295_currentGlyph = _r295_t0, r295_xn$setwidth$9Jrj = _r295_t0["set-width"].bind(_r295_t0), 
        r295_xn$assignunicode$7Hrq = function(r296_code) {
            var r296_code;
            return r295_currentGlyph["assign-unicode"](r296_code), r1_unicodeGlyphs[r295_currentGlyph.unicode[r295_currentGlyph.unicode.length - 1]] = r295_currentGlyph;
        }, r295_xn$startfrom$1aao = _r295_t0["start-from"].bind(_r295_t0), r295_xn$lineto$5sIl = _r295_t0["line-to"].bind(_r295_t0), 
        r295_xn$curveto$1aao = _r295_t0["curve-to"].bind(_r295_t0), r295_xn$cubicto$1aao = _r295_t0["cubic-to"].bind(_r295_t0), 
        r295_xn$putshapes$9Jrj = _r295_t0["put-shapes"].bind(_r295_t0), r295_xn$reverselast$3qIs = _r295_t0["reverse-last"].bind(_r295_t0), 
        r295_include = _r295_t0.include.bind(_r295_t0), r295_xn$createstroke$7Hrq = _r295_t0["create-stroke"].bind(_r295_t0), 
        r295_xn$setanchor$9Jrj = _r295_t0["set-anchor"].bind(_r295_t0), _r295_t0.gizmo = r1_globalTransform, 
        _r295_t0["set-width"](r1_WIDTH), r295_include(r1_glyphs.O), void r295_xn$putshapes$9Jrj([ r1_Ring(r1_CAPMIDDLE + r1_DOTRADIUS, r1_CAPMIDDLE - r1_DOTRADIUS, r1_MIDDLE + r1_DOTRADIUS, r1_MIDDLE - r1_DOTRADIUS) ]);
    }), r1_xn$createglyph$7Hrq("zero", function() {
        var r298_currentGlyph, r298_xn$setwidth$9Jrj, r298_xn$assignunicode$7Hrq, r298_xn$startfrom$1aao, r298_xn$lineto$5sIl, r298_xn$curveto$1aao, r298_xn$cubicto$1aao, r298_xn$putshapes$9Jrj, r298_xn$reverselast$3qIs, r298_include, r298_xn$createstroke$7Hrq, r298_xn$setanchor$9Jrj, r298_otherwise, _r298_t0, _r298_t1, _r298_t3, _r298_t4, _r298_t5, _r298_t6, _r298_t7, _r298_t8;
        return _r298_t1 = this, r298_currentGlyph = _r298_t1, r298_xn$setwidth$9Jrj = _r298_t1["set-width"].bind(_r298_t1), 
        r298_xn$assignunicode$7Hrq = function(r299_code) {
            var r299_code;
            return r298_currentGlyph["assign-unicode"](r299_code), r1_unicodeGlyphs[r298_currentGlyph.unicode[r298_currentGlyph.unicode.length - 1]] = r298_currentGlyph;
        }, r298_xn$startfrom$1aao = _r298_t1["start-from"].bind(_r298_t1), r298_xn$lineto$5sIl = _r298_t1["line-to"].bind(_r298_t1), 
        r298_xn$curveto$1aao = _r298_t1["curve-to"].bind(_r298_t1), r298_xn$cubicto$1aao = _r298_t1["cubic-to"].bind(_r298_t1), 
        r298_xn$putshapes$9Jrj = _r298_t1["put-shapes"].bind(_r298_t1), r298_xn$reverselast$3qIs = _r298_t1["reverse-last"].bind(_r298_t1), 
        r298_include = _r298_t1.include.bind(_r298_t1), r298_xn$createstroke$7Hrq = _r298_t1["create-stroke"].bind(_r298_t1), 
        r298_xn$setanchor$9Jrj = _r298_t1["set-anchor"].bind(_r298_t1), _r298_t1.gizmo = r1_globalTransform, 
        _r298_t1["set-width"](r1_WIDTH), r298_xn$setwidth$9Jrj(r1_WIDTH), r298_xn$assignunicode$7Hrq("0"), 
        _r298_t3 = r298_include, _r298_t4 = r1_glyphs, _r298_t0 = r1_variantSelector.zero, 
        "slashed" === _r298_t0 ? _r298_t5 = "zero.slashed" : ("dotted" === _r298_t0 ? _r298_t6 = "zero.dotted" : ("unslahsed" === _r298_t0 ? _r298_t7 = "zero.unslashed" : (r298_otherwise = _r298_t0, 
        _r298_t7 = "zero.slashed"), _r298_t6 = _r298_t7), _r298_t5 = _r298_t6), _r298_t8 = _r298_t4[_r298_t5], 
        void _r298_t3(_r298_t8);
    }), r1_xn$createglyph$7Hrq("one", function() {
        var r301_currentGlyph, r301_xn$setwidth$9Jrj, r301_xn$assignunicode$7Hrq, r301_xn$startfrom$1aao, r301_xn$lineto$5sIl, r301_xn$curveto$1aao, r301_xn$cubicto$1aao, r301_xn$putshapes$9Jrj, r301_xn$reverselast$3qIs, r301_include, r301_xn$createstroke$7Hrq, r301_xn$setanchor$9Jrj, _r301_t0;
        return _r301_t0 = this, r301_currentGlyph = _r301_t0, r301_xn$setwidth$9Jrj = _r301_t0["set-width"].bind(_r301_t0), 
        r301_xn$assignunicode$7Hrq = function(r302_code) {
            var r302_code;
            return r301_currentGlyph["assign-unicode"](r302_code), r1_unicodeGlyphs[r301_currentGlyph.unicode[r301_currentGlyph.unicode.length - 1]] = r301_currentGlyph;
        }, r301_xn$startfrom$1aao = _r301_t0["start-from"].bind(_r301_t0), r301_xn$lineto$5sIl = _r301_t0["line-to"].bind(_r301_t0), 
        r301_xn$curveto$1aao = _r301_t0["curve-to"].bind(_r301_t0), r301_xn$cubicto$1aao = _r301_t0["cubic-to"].bind(_r301_t0), 
        r301_xn$putshapes$9Jrj = _r301_t0["put-shapes"].bind(_r301_t0), r301_xn$reverselast$3qIs = _r301_t0["reverse-last"].bind(_r301_t0), 
        r301_include = _r301_t0.include.bind(_r301_t0), r301_xn$createstroke$7Hrq = _r301_t0["create-stroke"].bind(_r301_t0), 
        r301_xn$setanchor$9Jrj = _r301_t0["set-anchor"].bind(_r301_t0), _r301_t0.gizmo = r1_globalTransform, 
        _r301_t0["set-width"](r1_WIDTH), r301_xn$setwidth$9Jrj(r1_WIDTH), r301_xn$assignunicode$7Hrq("1"), 
        r301_xn$putshapes$9Jrj(r301_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + .6 * r1_JBALANCE, 0)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_UPWARD)["line-to"](r1_MIDDLE + .6 * r1_JBALANCE, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        void r301_xn$putshapes$9Jrj(r301_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE - r1_HALFSTROKE + .6 * r1_JBALANCE, r1_CAP)["set-width"](r1_STROKE, 0)["line-to"](r1_MIDDLE - 1.5 * r1_HOOK + .5 * r1_JBALANCE, r1_CAP - .75 * r1_HOOK)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("two", function() {
        var r304_currentGlyph, r304_xn$setwidth$9Jrj, r304_xn$assignunicode$7Hrq, r304_xn$startfrom$1aao, r304_xn$lineto$5sIl, r304_xn$curveto$1aao, r304_xn$cubicto$1aao, r304_xn$putshapes$9Jrj, r304_xn$reverselast$3qIs, r304_include, r304_xn$createstroke$7Hrq, r304_xn$setanchor$9Jrj, _r304_t0;
        return _r304_t0 = this, r304_currentGlyph = _r304_t0, r304_xn$setwidth$9Jrj = _r304_t0["set-width"].bind(_r304_t0), 
        r304_xn$assignunicode$7Hrq = function(r305_code) {
            var r305_code;
            return r304_currentGlyph["assign-unicode"](r305_code), r1_unicodeGlyphs[r304_currentGlyph.unicode[r304_currentGlyph.unicode.length - 1]] = r304_currentGlyph;
        }, r304_xn$startfrom$1aao = _r304_t0["start-from"].bind(_r304_t0), r304_xn$lineto$5sIl = _r304_t0["line-to"].bind(_r304_t0), 
        r304_xn$curveto$1aao = _r304_t0["curve-to"].bind(_r304_t0), r304_xn$cubicto$1aao = _r304_t0["cubic-to"].bind(_r304_t0), 
        r304_xn$putshapes$9Jrj = _r304_t0["put-shapes"].bind(_r304_t0), r304_xn$reverselast$3qIs = _r304_t0["reverse-last"].bind(_r304_t0), 
        r304_include = _r304_t0.include.bind(_r304_t0), r304_xn$createstroke$7Hrq = _r304_t0["create-stroke"].bind(_r304_t0), 
        r304_xn$setanchor$9Jrj = _r304_t0["set-anchor"].bind(_r304_t0), _r304_t0.gizmo = r1_globalTransform, 
        _r304_t0["set-width"](r1_WIDTH), r304_xn$setwidth$9Jrj(r1_WIDTH), r304_xn$assignunicode$7Hrq("2"), 
        r304_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK)), r304_xn$putshapes$9Jrj(r1_sStrand(r1_STROKE, r1_CAP - r1_SMOOTHB)), 
        void r304_xn$putshapes$9Jrj(r304_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("three", function() {
        var r307_currentGlyph, r307_xn$setwidth$9Jrj, r307_xn$assignunicode$7Hrq, r307_xn$startfrom$1aao, r307_xn$lineto$5sIl, r307_xn$curveto$1aao, r307_xn$cubicto$1aao, r307_xn$putshapes$9Jrj, r307_xn$reverselast$3qIs, r307_include, r307_xn$createstroke$7Hrq, r307_xn$setanchor$9Jrj, r307_threeRadius, _r307_t0;
        return _r307_t0 = this, r307_currentGlyph = _r307_t0, r307_xn$setwidth$9Jrj = _r307_t0["set-width"].bind(_r307_t0), 
        r307_xn$assignunicode$7Hrq = function(r308_code) {
            var r308_code;
            return r307_currentGlyph["assign-unicode"](r308_code), r1_unicodeGlyphs[r307_currentGlyph.unicode[r307_currentGlyph.unicode.length - 1]] = r307_currentGlyph;
        }, r307_xn$startfrom$1aao = _r307_t0["start-from"].bind(_r307_t0), r307_xn$lineto$5sIl = _r307_t0["line-to"].bind(_r307_t0), 
        r307_xn$curveto$1aao = _r307_t0["curve-to"].bind(_r307_t0), r307_xn$cubicto$1aao = _r307_t0["cubic-to"].bind(_r307_t0), 
        r307_xn$putshapes$9Jrj = _r307_t0["put-shapes"].bind(_r307_t0), r307_xn$reverselast$3qIs = _r307_t0["reverse-last"].bind(_r307_t0), 
        r307_include = _r307_t0.include.bind(_r307_t0), r307_xn$createstroke$7Hrq = _r307_t0["create-stroke"].bind(_r307_t0), 
        r307_xn$setanchor$9Jrj = _r307_t0["set-anchor"].bind(_r307_t0), _r307_t0.gizmo = r1_globalTransform, 
        _r307_t0["set-width"](r1_WIDTH), r307_xn$setwidth$9Jrj(r1_WIDTH), r307_xn$assignunicode$7Hrq("3"), 
        r307_threeRadius = r1_CAPMIDDLE + r1_HALFSTROKE - r1_SMOOTH, r307_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK)), 
        r307_xn$putshapes$9Jrj(r1_sHookLower(0, r1_SMOOTHA, r1_HOOK)), r307_xn$putshapes$9Jrj(r307_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_CAP - r1_SMOOTHB)["set-width"](0, r1_STROKE)["arc-vh-to"](r1_RIGHTSB - r307_threeRadius, r1_CAPMIDDLE - r1_HALFSTROKE)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        void r307_xn$putshapes$9Jrj(r307_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_SMOOTHA)["set-width"](r1_STROKE, 0)["arc-vh-to"](r1_RIGHTSB - r307_threeRadius, r1_CAPMIDDLE + r1_HALFSTROKE)["heads-to"](r1_LEFTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("four", function() {
        var r310_currentGlyph, r310_xn$setwidth$9Jrj, r310_xn$assignunicode$7Hrq, r310_xn$startfrom$1aao, r310_xn$lineto$5sIl, r310_xn$curveto$1aao, r310_xn$cubicto$1aao, r310_xn$putshapes$9Jrj, r310_xn$reverselast$3qIs, r310_include, r310_xn$createstroke$7Hrq, r310_xn$setanchor$9Jrj, r310_bar, r310_vert, _r310_t0;
        return _r310_t0 = this, r310_currentGlyph = _r310_t0, r310_xn$setwidth$9Jrj = _r310_t0["set-width"].bind(_r310_t0), 
        r310_xn$assignunicode$7Hrq = function(r311_code) {
            var r311_code;
            return r310_currentGlyph["assign-unicode"](r311_code), r1_unicodeGlyphs[r310_currentGlyph.unicode[r310_currentGlyph.unicode.length - 1]] = r310_currentGlyph;
        }, r310_xn$startfrom$1aao = _r310_t0["start-from"].bind(_r310_t0), r310_xn$lineto$5sIl = _r310_t0["line-to"].bind(_r310_t0), 
        r310_xn$curveto$1aao = _r310_t0["curve-to"].bind(_r310_t0), r310_xn$cubicto$1aao = _r310_t0["cubic-to"].bind(_r310_t0), 
        r310_xn$putshapes$9Jrj = _r310_t0["put-shapes"].bind(_r310_t0), r310_xn$reverselast$3qIs = _r310_t0["reverse-last"].bind(_r310_t0), 
        r310_include = _r310_t0.include.bind(_r310_t0), r310_xn$createstroke$7Hrq = _r310_t0["create-stroke"].bind(_r310_t0), 
        r310_xn$setanchor$9Jrj = _r310_t0["set-anchor"].bind(_r310_t0), _r310_t0.gizmo = r1_globalTransform, 
        _r310_t0["set-width"](r1_WIDTH), r310_xn$setwidth$9Jrj(r1_WIDTH), r310_xn$assignunicode$7Hrq("4"), 
        r310_bar = .4 * r1_CAP, r310_vert = .55 * r1_WIDTH, r310_xn$putshapes$9Jrj(r310_xn$createstroke$7Hrq()["start-from"](r1_SB, r310_bar)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, r310_bar)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r310_xn$putshapes$9Jrj(r310_xn$createstroke$7Hrq()["start-from"](r310_vert, 0)["set-width"](0, r1_STROKE)["heads-to"](r1_UPWARD)["line-to"](r310_vert, r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]()), 
        void r310_xn$putshapes$9Jrj(r310_xn$createstroke$7Hrq()["start-from"](r1_SB, r310_bar)["set-width"](0, r1_STROKE)["line-to"](r310_vert, r1_CAP)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("five", function() {
        var r313_currentGlyph, r313_xn$setwidth$9Jrj, r313_xn$assignunicode$7Hrq, r313_xn$startfrom$1aao, r313_xn$lineto$5sIl, r313_xn$curveto$1aao, r313_xn$cubicto$1aao, r313_xn$putshapes$9Jrj, r313_xn$reverselast$3qIs, r313_include, r313_xn$createstroke$7Hrq, r313_xn$setanchor$9Jrj, _r313_t0;
        return _r313_t0 = this, r313_currentGlyph = _r313_t0, r313_xn$setwidth$9Jrj = _r313_t0["set-width"].bind(_r313_t0), 
        r313_xn$assignunicode$7Hrq = function(r314_code) {
            var r314_code;
            return r313_currentGlyph["assign-unicode"](r314_code), r1_unicodeGlyphs[r313_currentGlyph.unicode[r313_currentGlyph.unicode.length - 1]] = r313_currentGlyph;
        }, r313_xn$startfrom$1aao = _r313_t0["start-from"].bind(_r313_t0), r313_xn$lineto$5sIl = _r313_t0["line-to"].bind(_r313_t0), 
        r313_xn$curveto$1aao = _r313_t0["curve-to"].bind(_r313_t0), r313_xn$cubicto$1aao = _r313_t0["cubic-to"].bind(_r313_t0), 
        r313_xn$putshapes$9Jrj = _r313_t0["put-shapes"].bind(_r313_t0), r313_xn$reverselast$3qIs = _r313_t0["reverse-last"].bind(_r313_t0), 
        r313_include = _r313_t0.include.bind(_r313_t0), r313_xn$createstroke$7Hrq = _r313_t0["create-stroke"].bind(_r313_t0), 
        r313_xn$setanchor$9Jrj = _r313_t0["set-anchor"].bind(_r313_t0), _r313_t0.gizmo = r1_globalTransform, 
        _r313_t0["set-width"](r1_WIDTH), r313_xn$setwidth$9Jrj(r1_WIDTH), r313_xn$assignunicode$7Hrq("5"), 
        r313_xn$putshapes$9Jrj(r1_sHookLower(0, (r1_CAP * r1_FIVEBARPOS + r1_STROKE) / 2, r1_HOOK)), 
        r313_xn$putshapes$9Jrj(r313_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, (r1_CAP * r1_FIVEBARPOS + r1_STROKE) / 2)["set-width"](r1_STROKE, 0)["arc-vh-to"](r1_MIDDLE, r1_CAP * r1_FIVEBARPOS + r1_STROKE)["line-to"](r1_SB + r1_TBALANCE * (.6 - 2 * r1_globalTransform.yx), r1_CAP * r1_FIVEBARPOS + r1_STROKE)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        r313_xn$putshapes$9Jrj(r313_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_TBALANCE * (.6 - 2 * r1_globalTransform.yx), r1_CAP)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r1_TBALANCE / 2, r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r313_xn$putshapes$9Jrj(r313_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_TBALANCE * (.6 - 2 * r1_globalTransform.yx), r1_CAP * r1_FIVEBARPOS + r1_STROKE)["set-width"](0, r1_STROKE)["heads-to"](r1_UPWARD)["line-to"](r1_SB + r1_TBALANCE * (.6 - 2 * r1_globalTransform.yx), r1_CAP)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("six", function() {
        var r316_currentGlyph, r316_xn$setwidth$9Jrj, r316_xn$assignunicode$7Hrq, r316_xn$startfrom$1aao, r316_xn$lineto$5sIl, r316_xn$curveto$1aao, r316_xn$cubicto$1aao, r316_xn$putshapes$9Jrj, r316_xn$reverselast$3qIs, r316_include, r316_xn$createstroke$7Hrq, r316_xn$setanchor$9Jrj, r316_ymiddlea, _r316_t0;
        return _r316_t0 = this, r316_currentGlyph = _r316_t0, r316_xn$setwidth$9Jrj = _r316_t0["set-width"].bind(_r316_t0), 
        r316_xn$assignunicode$7Hrq = function(r317_code) {
            var r317_code;
            return r316_currentGlyph["assign-unicode"](r317_code), r1_unicodeGlyphs[r316_currentGlyph.unicode[r316_currentGlyph.unicode.length - 1]] = r316_currentGlyph;
        }, r316_xn$startfrom$1aao = _r316_t0["start-from"].bind(_r316_t0), r316_xn$lineto$5sIl = _r316_t0["line-to"].bind(_r316_t0), 
        r316_xn$curveto$1aao = _r316_t0["curve-to"].bind(_r316_t0), r316_xn$cubicto$1aao = _r316_t0["cubic-to"].bind(_r316_t0), 
        r316_xn$putshapes$9Jrj = _r316_t0["put-shapes"].bind(_r316_t0), r316_xn$reverselast$3qIs = _r316_t0["reverse-last"].bind(_r316_t0), 
        r316_include = _r316_t0.include.bind(_r316_t0), r316_xn$createstroke$7Hrq = _r316_t0["create-stroke"].bind(_r316_t0), 
        r316_xn$setanchor$9Jrj = _r316_t0["set-anchor"].bind(_r316_t0), _r316_t0.gizmo = r1_globalTransform, 
        _r316_t0["set-width"](r1_WIDTH), r316_xn$setwidth$9Jrj(r1_WIDTH), r316_xn$assignunicode$7Hrq("6"), 
        r316_xn$putshapes$9Jrj(r1_smallo(.6 * r1_CAP, 0, r1_SB, r1_RIGHTSB)), r316_ymiddlea = (.6 * r1_CAP - r1_SMALLSMOOTHA + r1_SMALLSMOOTHB) / 2, 
        void r316_xn$putshapes$9Jrj(r316_xn$createstroke$7Hrq()["start-from"](r1_SB + r1_O, r316_ymiddlea)["set-width"](0, r1_STROKE)["curve-to"](r1_SB + r1_O, r1_mix(r316_ymiddlea, r1_CAP, .8), r1_RIGHTSB - 1.1 * r1_STROKE, r1_CAP)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("seven", function() {
        var r319_currentGlyph, r319_xn$setwidth$9Jrj, r319_xn$assignunicode$7Hrq, r319_xn$startfrom$1aao, r319_xn$lineto$5sIl, r319_xn$curveto$1aao, r319_xn$cubicto$1aao, r319_xn$putshapes$9Jrj, r319_xn$reverselast$3qIs, r319_include, r319_xn$createstroke$7Hrq, r319_xn$setanchor$9Jrj, r319_cor, r319_x, _r319_t0;
        return _r319_t0 = this, r319_currentGlyph = _r319_t0, r319_xn$setwidth$9Jrj = _r319_t0["set-width"].bind(_r319_t0), 
        r319_xn$assignunicode$7Hrq = function(r320_code) {
            var r320_code;
            return r319_currentGlyph["assign-unicode"](r320_code), r1_unicodeGlyphs[r319_currentGlyph.unicode[r319_currentGlyph.unicode.length - 1]] = r319_currentGlyph;
        }, r319_xn$startfrom$1aao = _r319_t0["start-from"].bind(_r319_t0), r319_xn$lineto$5sIl = _r319_t0["line-to"].bind(_r319_t0), 
        r319_xn$curveto$1aao = _r319_t0["curve-to"].bind(_r319_t0), r319_xn$cubicto$1aao = _r319_t0["cubic-to"].bind(_r319_t0), 
        r319_xn$putshapes$9Jrj = _r319_t0["put-shapes"].bind(_r319_t0), r319_xn$reverselast$3qIs = _r319_t0["reverse-last"].bind(_r319_t0), 
        r319_include = _r319_t0.include.bind(_r319_t0), r319_xn$createstroke$7Hrq = _r319_t0["create-stroke"].bind(_r319_t0), 
        r319_xn$setanchor$9Jrj = _r319_t0["set-anchor"].bind(_r319_t0), _r319_t0.gizmo = r1_globalTransform, 
        _r319_t0["set-width"](r1_WIDTH), r319_xn$setwidth$9Jrj(r1_WIDTH), r319_xn$assignunicode$7Hrq("7"), 
        r319_xn$putshapes$9Jrj(r319_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP)["heads-to"](r1_RIGHTWARD)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, r1_CAP)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r319_cor = 1.15, r319_x = r1_mix(r1_SB, r1_RIGHTSB, .15), r319_xn$startfrom$1aao(r319_x, 0), 
        r319_xn$lineto$5sIl(r319_x + r1_STROKE * r319_cor, 0), r319_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP - r1_STROKE), 
        r319_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r319_cor, r1_CAP - r1_STROKE), void r319_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("eight", function() {
        var r322_currentGlyph, r322_xn$setwidth$9Jrj, r322_xn$assignunicode$7Hrq, r322_xn$startfrom$1aao, r322_xn$lineto$5sIl, r322_xn$curveto$1aao, r322_xn$cubicto$1aao, r322_xn$putshapes$9Jrj, r322_xn$reverselast$3qIs, r322_include, r322_xn$createstroke$7Hrq, r322_xn$setanchor$9Jrj, r322_sma, r322_smb, r322_p, _r322_t0;
        return _r322_t0 = this, r322_currentGlyph = _r322_t0, r322_xn$setwidth$9Jrj = _r322_t0["set-width"].bind(_r322_t0), 
        r322_xn$assignunicode$7Hrq = function(r323_code) {
            var r323_code;
            return r322_currentGlyph["assign-unicode"](r323_code), r1_unicodeGlyphs[r322_currentGlyph.unicode[r322_currentGlyph.unicode.length - 1]] = r322_currentGlyph;
        }, r322_xn$startfrom$1aao = _r322_t0["start-from"].bind(_r322_t0), r322_xn$lineto$5sIl = _r322_t0["line-to"].bind(_r322_t0), 
        r322_xn$curveto$1aao = _r322_t0["curve-to"].bind(_r322_t0), r322_xn$cubicto$1aao = _r322_t0["cubic-to"].bind(_r322_t0), 
        r322_xn$putshapes$9Jrj = _r322_t0["put-shapes"].bind(_r322_t0), r322_xn$reverselast$3qIs = _r322_t0["reverse-last"].bind(_r322_t0), 
        r322_include = _r322_t0.include.bind(_r322_t0), r322_xn$createstroke$7Hrq = _r322_t0["create-stroke"].bind(_r322_t0), 
        r322_xn$setanchor$9Jrj = _r322_t0["set-anchor"].bind(_r322_t0), _r322_t0.gizmo = r1_globalTransform, 
        _r322_t0["set-width"](r1_WIDTH), r322_xn$setwidth$9Jrj(r1_WIDTH), r322_xn$assignunicode$7Hrq("8"), 
        r322_sma = .975 * r1_SMOOTHA, r322_smb = .975 * r1_SMOOTHB, r322_p = .95, r322_xn$putshapes$9Jrj(r1_xsStrand(r1_mix(r1_RIGHTSB, r1_SB, r322_p), r1_CAP - r322_sma * r322_p, r1_RIGHTSB, r322_sma)), 
        r322_xn$putshapes$9Jrj(r1_xsStrand(r1_SB, r322_smb, r1_mix(r1_SB, r1_RIGHTSB, r322_p), r1_CAP - r322_smb * r322_p)), 
        r322_xn$putshapes$9Jrj(r322_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r322_p), r1_CAP - r322_smb * r322_p)["set-width"](r1_STROKE, 0)["arc-vh-to"](r1_MIDDLE, r1_CAP - r1_O)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_mix(r1_RIGHTSB, r1_SB, r322_p), r1_CAP - r322_sma * r322_p)["to-outline"]()), 
        void r322_xn$putshapes$9Jrj(r322_xn$createstroke$7Hrq()["start-from"](r1_SB, r322_smb)["set-width"](r1_STROKE, 0)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r1_RIGHTSB, r322_sma)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("nine", function() {
        var r325_currentGlyph, r325_xn$setwidth$9Jrj, r325_xn$assignunicode$7Hrq, r325_xn$startfrom$1aao, r325_xn$lineto$5sIl, r325_xn$curveto$1aao, r325_xn$cubicto$1aao, r325_xn$putshapes$9Jrj, r325_xn$reverselast$3qIs, r325_include, r325_xn$createstroke$7Hrq, r325_xn$setanchor$9Jrj, r325_ymiddlea, _r325_t0;
        return _r325_t0 = this, r325_currentGlyph = _r325_t0, r325_xn$setwidth$9Jrj = _r325_t0["set-width"].bind(_r325_t0), 
        r325_xn$assignunicode$7Hrq = function(r326_code) {
            var r326_code;
            return r325_currentGlyph["assign-unicode"](r326_code), r1_unicodeGlyphs[r325_currentGlyph.unicode[r325_currentGlyph.unicode.length - 1]] = r325_currentGlyph;
        }, r325_xn$startfrom$1aao = _r325_t0["start-from"].bind(_r325_t0), r325_xn$lineto$5sIl = _r325_t0["line-to"].bind(_r325_t0), 
        r325_xn$curveto$1aao = _r325_t0["curve-to"].bind(_r325_t0), r325_xn$cubicto$1aao = _r325_t0["cubic-to"].bind(_r325_t0), 
        r325_xn$putshapes$9Jrj = _r325_t0["put-shapes"].bind(_r325_t0), r325_xn$reverselast$3qIs = _r325_t0["reverse-last"].bind(_r325_t0), 
        r325_include = _r325_t0.include.bind(_r325_t0), r325_xn$createstroke$7Hrq = _r325_t0["create-stroke"].bind(_r325_t0), 
        r325_xn$setanchor$9Jrj = _r325_t0["set-anchor"].bind(_r325_t0), _r325_t0.gizmo = r1_globalTransform, 
        _r325_t0["set-width"](r1_WIDTH), r325_xn$setwidth$9Jrj(r1_WIDTH), r325_xn$assignunicode$7Hrq("9"), 
        r325_xn$putshapes$9Jrj(r1_smallo(r1_CAP, .4 * r1_CAP, r1_SB, r1_RIGHTSB + r1_O)), 
        r325_ymiddlea = (r1_CAP - r1_SMALLSMOOTHB + .4 * r1_CAP + r1_SMALLSMOOTHA) / 2, 
        r325_xn$putshapes$9Jrj(r325_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r325_ymiddlea)["set-width"](0, r1_STROKE)["line-to"](r1_RIGHTSB, .4 * r1_CAP)["to-outline"]()), 
        void r325_xn$putshapes$9Jrj(r1_sHookLower(0, .4 * r1_CAP, r1_HOOK, r1_xgrid(.48)));
    }), r1_xn$createglyph$7Hrq("dollar", function() {
        var r328_currentGlyph, r328_xn$setwidth$9Jrj, r328_xn$assignunicode$7Hrq, r328_xn$startfrom$1aao, r328_xn$lineto$5sIl, r328_xn$curveto$1aao, r328_xn$cubicto$1aao, r328_xn$putshapes$9Jrj, r328_xn$reverselast$3qIs, r328_include, r328_xn$createstroke$7Hrq, r328_xn$setanchor$9Jrj, _r328_t0;
        return _r328_t0 = this, r328_currentGlyph = _r328_t0, r328_xn$setwidth$9Jrj = _r328_t0["set-width"].bind(_r328_t0), 
        r328_xn$assignunicode$7Hrq = function(r329_code) {
            var r329_code;
            return r328_currentGlyph["assign-unicode"](r329_code), r1_unicodeGlyphs[r328_currentGlyph.unicode[r328_currentGlyph.unicode.length - 1]] = r328_currentGlyph;
        }, r328_xn$startfrom$1aao = _r328_t0["start-from"].bind(_r328_t0), r328_xn$lineto$5sIl = _r328_t0["line-to"].bind(_r328_t0), 
        r328_xn$curveto$1aao = _r328_t0["curve-to"].bind(_r328_t0), r328_xn$cubicto$1aao = _r328_t0["cubic-to"].bind(_r328_t0), 
        r328_xn$putshapes$9Jrj = _r328_t0["put-shapes"].bind(_r328_t0), r328_xn$reverselast$3qIs = _r328_t0["reverse-last"].bind(_r328_t0), 
        r328_include = _r328_t0.include.bind(_r328_t0), r328_xn$createstroke$7Hrq = _r328_t0["create-stroke"].bind(_r328_t0), 
        r328_xn$setanchor$9Jrj = _r328_t0["set-anchor"].bind(_r328_t0), _r328_t0.gizmo = r1_globalTransform, 
        _r328_t0["set-width"](r1_WIDTH), r328_xn$setwidth$9Jrj(r1_WIDTH), r328_xn$assignunicode$7Hrq("$"), 
        r328_include(r1_glyphs.S), r328_xn$putshapes$9Jrj(r328_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_CAP - r1_HALFSTROKE)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_CAP - r1_DESCENDER / 2)["to-outline"]()), 
        void r328_xn$putshapes$9Jrj(r328_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_DESCENDER / 2)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_HALFSTROKE)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("ampersand", function() {
        var r331_currentGlyph, r331_xn$setwidth$9Jrj, r331_xn$assignunicode$7Hrq, r331_xn$startfrom$1aao, r331_xn$lineto$5sIl, r331_xn$curveto$1aao, r331_xn$cubicto$1aao, r331_xn$putshapes$9Jrj, r331_xn$reverselast$3qIs, r331_include, r331_xn$createstroke$7Hrq, r331_xn$setanchor$9Jrj, r331_fine, r331_p, r331_l, r331_pr, r331_q, r331_r, r331_s, _r331_t0;
        return _r331_t0 = this, r331_currentGlyph = _r331_t0, r331_xn$setwidth$9Jrj = _r331_t0["set-width"].bind(_r331_t0), 
        r331_xn$assignunicode$7Hrq = function(r332_code) {
            var r332_code;
            return r331_currentGlyph["assign-unicode"](r332_code), r1_unicodeGlyphs[r331_currentGlyph.unicode[r331_currentGlyph.unicode.length - 1]] = r331_currentGlyph;
        }, r331_xn$startfrom$1aao = _r331_t0["start-from"].bind(_r331_t0), r331_xn$lineto$5sIl = _r331_t0["line-to"].bind(_r331_t0), 
        r331_xn$curveto$1aao = _r331_t0["curve-to"].bind(_r331_t0), r331_xn$cubicto$1aao = _r331_t0["cubic-to"].bind(_r331_t0), 
        r331_xn$putshapes$9Jrj = _r331_t0["put-shapes"].bind(_r331_t0), r331_xn$reverselast$3qIs = _r331_t0["reverse-last"].bind(_r331_t0), 
        r331_include = _r331_t0.include.bind(_r331_t0), r331_xn$createstroke$7Hrq = _r331_t0["create-stroke"].bind(_r331_t0), 
        r331_xn$setanchor$9Jrj = _r331_t0["set-anchor"].bind(_r331_t0), _r331_t0.gizmo = r1_globalTransform, 
        _r331_t0["set-width"](r1_WIDTH), r331_xn$setwidth$9Jrj(r1_WIDTH), r331_xn$assignunicode$7Hrq("&"), 
        r331_fine = Math.min(r1_STROKE, .25 * (r1_RIGHTSB - r1_SB)), r331_p = .85, r331_l = .05, 
        r331_pr = .9, r331_q = .45, r331_r = 1.1, r331_s = 0, r331_xn$putshapes$9Jrj(r331_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB - r1_O, r1_CAPMIDDLE)["set-width"](0, r1_STROKE)["heads-to"](r1_DOWNWARD)["line-to"](r1_RIGHTSB - r1_O, r1_SMOOTHA)["arc-vh-to"](r1_MIDDLE, r1_O)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_SB + r1_O, r1_SMOOTHB)["to-outline"]()), 
        r331_xn$putshapes$9Jrj(r1_xsStrand(r1_SB + r1_O, r1_SMOOTHB, r1_mix(r1_SB, r1_RIGHTSB, r331_p), r1_CAP - r1_SMOOTHB * r331_pr, r1_HALFSTROKE, r331_fine / 2)), 
        r331_xn$putshapes$9Jrj(r331_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r331_p), r1_CAP - r1_SMOOTHB * r331_pr)["set-width"](r331_fine, 0)["arc-vh-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_mix(r331_p, r331_l, .5)), r1_CAPO)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r1_mix(r1_SB, r1_RIGHTSB, r331_l), r1_CAP - r1_SMOOTHA * r331_pr)["to-outline"]()), 
        void r331_xn$putshapes$9Jrj(r1_xsStrand(r1_mix(r1_SB, r1_RIGHTSB, r331_l), r1_CAP - r1_SMOOTHA * r331_pr, r1_mix(r1_SB, r1_RIGHTSB, r331_r), r1_SMOOTHA * r331_s, r331_fine / 2, r331_fine / 2, null, null, r1_SMOOTHA * r331_pr * .6));
    }), r1_xn$createglyph$7Hrq("at", function() {
        var r334_currentGlyph, r334_xn$setwidth$9Jrj, r334_xn$assignunicode$7Hrq, r334_xn$startfrom$1aao, r334_xn$lineto$5sIl, r334_xn$curveto$1aao, r334_xn$cubicto$1aao, r334_xn$putshapes$9Jrj, r334_xn$reverselast$3qIs, r334_include, r334_xn$createstroke$7Hrq, r334_xn$setanchor$9Jrj, r334_top, r334_bot, r334_otop, r334_obot, r334_sw, r334_m1, r334_m2, r334_sma, r334_smb, _r334_t0;
        return _r334_t0 = this, r334_currentGlyph = _r334_t0, r334_xn$setwidth$9Jrj = _r334_t0["set-width"].bind(_r334_t0), 
        r334_xn$assignunicode$7Hrq = function(r335_code) {
            var r335_code;
            return r334_currentGlyph["assign-unicode"](r335_code), r1_unicodeGlyphs[r334_currentGlyph.unicode[r334_currentGlyph.unicode.length - 1]] = r334_currentGlyph;
        }, r334_xn$startfrom$1aao = _r334_t0["start-from"].bind(_r334_t0), r334_xn$lineto$5sIl = _r334_t0["line-to"].bind(_r334_t0), 
        r334_xn$curveto$1aao = _r334_t0["curve-to"].bind(_r334_t0), r334_xn$cubicto$1aao = _r334_t0["cubic-to"].bind(_r334_t0), 
        r334_xn$putshapes$9Jrj = _r334_t0["put-shapes"].bind(_r334_t0), r334_xn$reverselast$3qIs = _r334_t0["reverse-last"].bind(_r334_t0), 
        r334_include = _r334_t0.include.bind(_r334_t0), r334_xn$createstroke$7Hrq = _r334_t0["create-stroke"].bind(_r334_t0), 
        r334_xn$setanchor$9Jrj = _r334_t0["set-anchor"].bind(_r334_t0), _r334_t0.gizmo = r1_globalTransform, 
        _r334_t0["set-width"](r1_WIDTH), r334_xn$setwidth$9Jrj(r1_WIDTH), r334_xn$assignunicode$7Hrq("@"), 
        r334_top = r1_CAP + r1_HALFSTROKE, r334_bot = r1_DESCENDER + r1_HALFSTROKE, r334_otop = r1_mix(r334_bot, r334_top, .75), 
        r334_obot = r1_mix(r334_top, r334_bot, .8), r334_sw = Math.min(r1_STROKE, .25 * (r1_WIDTH - 2 * r1_SB)), 
        r334_m1 = r1_mix(r1_SB + r334_sw, r1_RIGHTSB - r334_sw, .47) - r334_sw / 2, r334_m2 = r1_mix(r334_m1, r1_RIGHTSB, .5), 
        r334_sma = r1_SMOOTHA * ((r1_RIGHTSB - r334_m1) / (r1_RIGHTSB - r1_SB)), r334_smb = r1_SMOOTHB * ((r1_RIGHTSB - r334_m1) / (r1_RIGHTSB - r1_SB)), 
        void r334_xn$putshapes$9Jrj(r334_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r334_otop - r1_O)["heads-to"](r1_LEFTWARD)["set-width"](r334_sw, 0)["line-to"](r334_m2, r334_otop - r1_O)["arc-hv-to"](r334_m1, r334_otop - r334_sma)["line-to"](r334_m1, r334_obot + r334_smb)["arc-vh-to"](r334_m2 + r1_STROKE * r1_globalTransform.yx, r334_obot + r1_O)["arc-hv-to"](r1_RIGHTSB, r334_obot + r334_sma)["line-to"](r1_RIGHTSB, r334_top - r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r334_top - r1_O)["set-width"](r1_STROKE, 0)["arc-hv-to"](r1_SB, r334_top - r1_SMOOTHA)["set-width"](r334_sw, 0)["line-to"](r1_SB, r334_bot + r1_SMOOTHB)["arc-vh-to"](r1_MIDDLE, r334_bot + r1_O)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB - r1_HALFSTROKE, r334_bot + r1_O)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_hyphenCenter = .6 * r1_XH, r1_parenTop = r1_hyphenCenter + 2.3 * (r1_CAP - r1_XH), 
    r1_parenBot = r1_hyphenCenter - 2.3 * (r1_CAP - r1_XH), r1_parenMid = r1_mix(r1_parenTop, r1_parenBot, .5), 
    r1_parenOutside = .15, r1_parenInside = .65, r1_bracketOutside = .15, r1_bracketInside = .9, 
    r1_braceOutside = .1, r1_braceInside = .9, r1_xn$createglyph$7Hrq("parenleft", function() {
        var r337_currentGlyph, r337_xn$setwidth$9Jrj, r337_xn$assignunicode$7Hrq, r337_xn$startfrom$1aao, r337_xn$lineto$5sIl, r337_xn$curveto$1aao, r337_xn$cubicto$1aao, r337_xn$putshapes$9Jrj, r337_xn$reverselast$3qIs, r337_include, r337_xn$createstroke$7Hrq, r337_xn$setanchor$9Jrj, r337_p, _r337_t0;
        return _r337_t0 = this, r337_currentGlyph = _r337_t0, r337_xn$setwidth$9Jrj = _r337_t0["set-width"].bind(_r337_t0), 
        r337_xn$assignunicode$7Hrq = function(r338_code) {
            var r338_code;
            return r337_currentGlyph["assign-unicode"](r338_code), r1_unicodeGlyphs[r337_currentGlyph.unicode[r337_currentGlyph.unicode.length - 1]] = r337_currentGlyph;
        }, r337_xn$startfrom$1aao = _r337_t0["start-from"].bind(_r337_t0), r337_xn$lineto$5sIl = _r337_t0["line-to"].bind(_r337_t0), 
        r337_xn$curveto$1aao = _r337_t0["curve-to"].bind(_r337_t0), r337_xn$cubicto$1aao = _r337_t0["cubic-to"].bind(_r337_t0), 
        r337_xn$putshapes$9Jrj = _r337_t0["put-shapes"].bind(_r337_t0), r337_xn$reverselast$3qIs = _r337_t0["reverse-last"].bind(_r337_t0), 
        r337_include = _r337_t0.include.bind(_r337_t0), r337_xn$createstroke$7Hrq = _r337_t0["create-stroke"].bind(_r337_t0), 
        r337_xn$setanchor$9Jrj = _r337_t0["set-anchor"].bind(_r337_t0), _r337_t0.gizmo = r1_globalTransform, 
        _r337_t0["set-width"](r1_WIDTH), r337_xn$setwidth$9Jrj(r1_WIDTH), r337_xn$assignunicode$7Hrq("("), 
        r337_p = .6, void r337_xn$putshapes$9Jrj(r337_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_parenInside), r1_parenTop)["set-width"](r1_STROKE, 0)["curve-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenTop, r337_p), r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_parenMid)["curve-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenBot, r337_p), r1_mix(r1_SB, r1_RIGHTSB, r1_parenInside), r1_parenBot)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("parenright", function() {
        var r340_currentGlyph, r340_xn$setwidth$9Jrj, r340_xn$assignunicode$7Hrq, r340_xn$startfrom$1aao, r340_xn$lineto$5sIl, r340_xn$curveto$1aao, r340_xn$cubicto$1aao, r340_xn$putshapes$9Jrj, r340_xn$reverselast$3qIs, r340_include, r340_xn$createstroke$7Hrq, r340_xn$setanchor$9Jrj, r340_p, _r340_t0;
        return _r340_t0 = this, r340_currentGlyph = _r340_t0, r340_xn$setwidth$9Jrj = _r340_t0["set-width"].bind(_r340_t0), 
        r340_xn$assignunicode$7Hrq = function(r341_code) {
            var r341_code;
            return r340_currentGlyph["assign-unicode"](r341_code), r1_unicodeGlyphs[r340_currentGlyph.unicode[r340_currentGlyph.unicode.length - 1]] = r340_currentGlyph;
        }, r340_xn$startfrom$1aao = _r340_t0["start-from"].bind(_r340_t0), r340_xn$lineto$5sIl = _r340_t0["line-to"].bind(_r340_t0), 
        r340_xn$curveto$1aao = _r340_t0["curve-to"].bind(_r340_t0), r340_xn$cubicto$1aao = _r340_t0["cubic-to"].bind(_r340_t0), 
        r340_xn$putshapes$9Jrj = _r340_t0["put-shapes"].bind(_r340_t0), r340_xn$reverselast$3qIs = _r340_t0["reverse-last"].bind(_r340_t0), 
        r340_include = _r340_t0.include.bind(_r340_t0), r340_xn$createstroke$7Hrq = _r340_t0["create-stroke"].bind(_r340_t0), 
        r340_xn$setanchor$9Jrj = _r340_t0["set-anchor"].bind(_r340_t0), _r340_t0.gizmo = r1_globalTransform, 
        _r340_t0["set-width"](r1_WIDTH), r340_xn$setwidth$9Jrj(r1_WIDTH), r340_xn$assignunicode$7Hrq(")"), 
        r340_p = .6, void r340_xn$putshapes$9Jrj(r340_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_parenInside), r1_parenTop)["set-width"](0, r1_STROKE)["curve-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenTop, r340_p), r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_parenMid)["curve-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_parenOutside), r1_mix(r1_parenMid, r1_parenBot, r340_p), r1_mix(r1_RIGHTSB, r1_SB, r1_parenInside), r1_parenBot)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("bracketleft", function() {
        var r343_currentGlyph, r343_xn$setwidth$9Jrj, r343_xn$assignunicode$7Hrq, r343_xn$startfrom$1aao, r343_xn$lineto$5sIl, r343_xn$curveto$1aao, r343_xn$cubicto$1aao, r343_xn$putshapes$9Jrj, r343_xn$reverselast$3qIs, r343_include, r343_xn$createstroke$7Hrq, r343_xn$setanchor$9Jrj, _r343_t0;
        return _r343_t0 = this, r343_currentGlyph = _r343_t0, r343_xn$setwidth$9Jrj = _r343_t0["set-width"].bind(_r343_t0), 
        r343_xn$assignunicode$7Hrq = function(r344_code) {
            var r344_code;
            return r343_currentGlyph["assign-unicode"](r344_code), r1_unicodeGlyphs[r343_currentGlyph.unicode[r343_currentGlyph.unicode.length - 1]] = r343_currentGlyph;
        }, r343_xn$startfrom$1aao = _r343_t0["start-from"].bind(_r343_t0), r343_xn$lineto$5sIl = _r343_t0["line-to"].bind(_r343_t0), 
        r343_xn$curveto$1aao = _r343_t0["curve-to"].bind(_r343_t0), r343_xn$cubicto$1aao = _r343_t0["cubic-to"].bind(_r343_t0), 
        r343_xn$putshapes$9Jrj = _r343_t0["put-shapes"].bind(_r343_t0), r343_xn$reverselast$3qIs = _r343_t0["reverse-last"].bind(_r343_t0), 
        r343_include = _r343_t0.include.bind(_r343_t0), r343_xn$createstroke$7Hrq = _r343_t0["create-stroke"].bind(_r343_t0), 
        r343_xn$setanchor$9Jrj = _r343_t0["set-anchor"].bind(_r343_t0), _r343_t0.gizmo = r1_globalTransform, 
        _r343_t0["set-width"](r1_WIDTH), r343_xn$setwidth$9Jrj(r1_WIDTH), r343_xn$assignunicode$7Hrq("["), 
        r343_xn$putshapes$9Jrj(r343_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenBot)["set-width"](r1_STROKE, 0)["heads-to"](r1_RIGHTWARD)["line-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketInside), r1_parenBot)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        r343_xn$putshapes$9Jrj(r343_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenTop)["set-width"](0, r1_STROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketInside), r1_parenTop)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r343_xn$putshapes$9Jrj(r343_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenBot)["set-width"](0, r1_STROKE)["heads-to"](r1_UPWARD)["line-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_bracketOutside), r1_parenTop)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("parenright", function() {
        var r346_currentGlyph, r346_xn$setwidth$9Jrj, r346_xn$assignunicode$7Hrq, r346_xn$startfrom$1aao, r346_xn$lineto$5sIl, r346_xn$curveto$1aao, r346_xn$cubicto$1aao, r346_xn$putshapes$9Jrj, r346_xn$reverselast$3qIs, r346_include, r346_xn$createstroke$7Hrq, r346_xn$setanchor$9Jrj, _r346_t0;
        return _r346_t0 = this, r346_currentGlyph = _r346_t0, r346_xn$setwidth$9Jrj = _r346_t0["set-width"].bind(_r346_t0), 
        r346_xn$assignunicode$7Hrq = function(r347_code) {
            var r347_code;
            return r346_currentGlyph["assign-unicode"](r347_code), r1_unicodeGlyphs[r346_currentGlyph.unicode[r346_currentGlyph.unicode.length - 1]] = r346_currentGlyph;
        }, r346_xn$startfrom$1aao = _r346_t0["start-from"].bind(_r346_t0), r346_xn$lineto$5sIl = _r346_t0["line-to"].bind(_r346_t0), 
        r346_xn$curveto$1aao = _r346_t0["curve-to"].bind(_r346_t0), r346_xn$cubicto$1aao = _r346_t0["cubic-to"].bind(_r346_t0), 
        r346_xn$putshapes$9Jrj = _r346_t0["put-shapes"].bind(_r346_t0), r346_xn$reverselast$3qIs = _r346_t0["reverse-last"].bind(_r346_t0), 
        r346_include = _r346_t0.include.bind(_r346_t0), r346_xn$createstroke$7Hrq = _r346_t0["create-stroke"].bind(_r346_t0), 
        r346_xn$setanchor$9Jrj = _r346_t0["set-anchor"].bind(_r346_t0), _r346_t0.gizmo = r1_globalTransform, 
        _r346_t0["set-width"](r1_WIDTH), r346_xn$setwidth$9Jrj(r1_WIDTH), r346_xn$assignunicode$7Hrq("]"), 
        r346_xn$putshapes$9Jrj(r346_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenBot)["set-width"](0, r1_STROKE)["heads-to"](r1_LEFTWARD)["line-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketInside), r1_parenBot)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        r346_xn$putshapes$9Jrj(r346_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenTop)["set-width"](r1_STROKE, 0)["heads-to"](r1_LEFTWARD)["line-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketInside), r1_parenTop)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        void r346_xn$putshapes$9Jrj(r346_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenBot)["set-width"](r1_STROKE, 0)["heads-to"](r1_UPWARD)["line-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_bracketOutside), r1_parenTop)["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("braceleft", function() {
        var r349_currentGlyph, r349_xn$setwidth$9Jrj, r349_xn$assignunicode$7Hrq, r349_xn$startfrom$1aao, r349_xn$lineto$5sIl, r349_xn$curveto$1aao, r349_xn$cubicto$1aao, r349_xn$putshapes$9Jrj, r349_xn$reverselast$3qIs, r349_include, r349_xn$createstroke$7Hrq, r349_xn$setanchor$9Jrj, r349_parenCenter, r349_radius, _r349_t0;
        return _r349_t0 = this, r349_currentGlyph = _r349_t0, r349_xn$setwidth$9Jrj = _r349_t0["set-width"].bind(_r349_t0), 
        r349_xn$assignunicode$7Hrq = function(r350_code) {
            var r350_code;
            return r349_currentGlyph["assign-unicode"](r350_code), r1_unicodeGlyphs[r349_currentGlyph.unicode[r349_currentGlyph.unicode.length - 1]] = r349_currentGlyph;
        }, r349_xn$startfrom$1aao = _r349_t0["start-from"].bind(_r349_t0), r349_xn$lineto$5sIl = _r349_t0["line-to"].bind(_r349_t0), 
        r349_xn$curveto$1aao = _r349_t0["curve-to"].bind(_r349_t0), r349_xn$cubicto$1aao = _r349_t0["cubic-to"].bind(_r349_t0), 
        r349_xn$putshapes$9Jrj = _r349_t0["put-shapes"].bind(_r349_t0), r349_xn$reverselast$3qIs = _r349_t0["reverse-last"].bind(_r349_t0), 
        r349_include = _r349_t0.include.bind(_r349_t0), r349_xn$createstroke$7Hrq = _r349_t0["create-stroke"].bind(_r349_t0), 
        r349_xn$setanchor$9Jrj = _r349_t0["set-anchor"].bind(_r349_t0), _r349_t0.gizmo = r1_globalTransform, 
        _r349_t0["set-width"](r1_WIDTH), r349_xn$setwidth$9Jrj(r1_WIDTH), r349_xn$assignunicode$7Hrq("{"), 
        r349_parenCenter = r1_mix(r1_SB, r1_RIGHTSB, r1_mix(r1_braceInside, r1_braceOutside, .5)), 
        r349_radius = r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside) - r349_parenCenter, r349_xn$putshapes$9Jrj(r349_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside), r1_parenTop - r1_HALFSTROKE)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r349_parenCenter, r1_parenTop - r349_radius)["line-to"](r349_parenCenter, r1_parenMid + r349_radius)["arc-vh-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_braceOutside), r1_parenMid)["heads-to"](r1_LEFTWARD)["to-outline"]()), 
        void r349_xn$putshapes$9Jrj(r349_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, r1_braceInside), r1_parenBot + r1_HALFSTROKE)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_LEFTWARD)["arc-hv-to"](r349_parenCenter, r1_parenBot + r349_radius)["line-to"](r349_parenCenter, r1_parenMid - r349_radius)["arc-vh-to"](r1_mix(r1_SB, r1_RIGHTSB, r1_braceOutside), r1_parenMid)["heads-to"](r1_LEFTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("braceright", function() {
        var r352_currentGlyph, r352_xn$setwidth$9Jrj, r352_xn$assignunicode$7Hrq, r352_xn$startfrom$1aao, r352_xn$lineto$5sIl, r352_xn$curveto$1aao, r352_xn$cubicto$1aao, r352_xn$putshapes$9Jrj, r352_xn$reverselast$3qIs, r352_include, r352_xn$createstroke$7Hrq, r352_xn$setanchor$9Jrj, r352_parenCenter, r352_radius, _r352_t0;
        return _r352_t0 = this, r352_currentGlyph = _r352_t0, r352_xn$setwidth$9Jrj = _r352_t0["set-width"].bind(_r352_t0), 
        r352_xn$assignunicode$7Hrq = function(r353_code) {
            var r353_code;
            return r352_currentGlyph["assign-unicode"](r353_code), r1_unicodeGlyphs[r352_currentGlyph.unicode[r352_currentGlyph.unicode.length - 1]] = r352_currentGlyph;
        }, r352_xn$startfrom$1aao = _r352_t0["start-from"].bind(_r352_t0), r352_xn$lineto$5sIl = _r352_t0["line-to"].bind(_r352_t0), 
        r352_xn$curveto$1aao = _r352_t0["curve-to"].bind(_r352_t0), r352_xn$cubicto$1aao = _r352_t0["cubic-to"].bind(_r352_t0), 
        r352_xn$putshapes$9Jrj = _r352_t0["put-shapes"].bind(_r352_t0), r352_xn$reverselast$3qIs = _r352_t0["reverse-last"].bind(_r352_t0), 
        r352_include = _r352_t0.include.bind(_r352_t0), r352_xn$createstroke$7Hrq = _r352_t0["create-stroke"].bind(_r352_t0), 
        r352_xn$setanchor$9Jrj = _r352_t0["set-anchor"].bind(_r352_t0), _r352_t0.gizmo = r1_globalTransform, 
        _r352_t0["set-width"](r1_WIDTH), r352_xn$setwidth$9Jrj(r1_WIDTH), r352_xn$assignunicode$7Hrq("}"), 
        r352_parenCenter = r1_mix(r1_RIGHTSB, r1_SB, r1_mix(r1_braceInside, r1_braceOutside, .5)), 
        r352_radius = r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside) - r352_parenCenter, r352_xn$putshapes$9Jrj(r352_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_braceInside), r1_parenTop - r1_HALFSTROKE)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r352_parenCenter, r1_parenTop - r352_radius)["line-to"](r352_parenCenter, r1_parenMid + r352_radius)["arc-vh-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside), r1_parenMid)["heads-to"](r1_RIGHTWARD)["to-outline"]()), 
        void r352_xn$putshapes$9Jrj(r352_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_RIGHTSB, r1_SB, r1_braceInside), r1_parenBot + r1_HALFSTROKE)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_RIGHTWARD)["arc-hv-to"](r352_parenCenter, r1_parenBot + r352_radius)["line-to"](r352_parenCenter, r1_parenMid - r352_radius)["arc-vh-to"](r1_mix(r1_RIGHTSB, r1_SB, r1_braceOutside), r1_parenMid)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("period", function() {
        var r355_currentGlyph, r355_xn$setwidth$9Jrj, r355_xn$assignunicode$7Hrq, r355_xn$startfrom$1aao, r355_xn$lineto$5sIl, r355_xn$curveto$1aao, r355_xn$cubicto$1aao, r355_xn$putshapes$9Jrj, r355_xn$reverselast$3qIs, r355_include, r355_xn$createstroke$7Hrq, r355_xn$setanchor$9Jrj, _r355_t0;
        return _r355_t0 = this, r355_currentGlyph = _r355_t0, r355_xn$setwidth$9Jrj = _r355_t0["set-width"].bind(_r355_t0), 
        r355_xn$assignunicode$7Hrq = function(r356_code) {
            var r356_code;
            return r355_currentGlyph["assign-unicode"](r356_code), r1_unicodeGlyphs[r355_currentGlyph.unicode[r355_currentGlyph.unicode.length - 1]] = r355_currentGlyph;
        }, r355_xn$startfrom$1aao = _r355_t0["start-from"].bind(_r355_t0), r355_xn$lineto$5sIl = _r355_t0["line-to"].bind(_r355_t0), 
        r355_xn$curveto$1aao = _r355_t0["curve-to"].bind(_r355_t0), r355_xn$cubicto$1aao = _r355_t0["cubic-to"].bind(_r355_t0), 
        r355_xn$putshapes$9Jrj = _r355_t0["put-shapes"].bind(_r355_t0), r355_xn$reverselast$3qIs = _r355_t0["reverse-last"].bind(_r355_t0), 
        r355_include = _r355_t0.include.bind(_r355_t0), r355_xn$createstroke$7Hrq = _r355_t0["create-stroke"].bind(_r355_t0), 
        r355_xn$setanchor$9Jrj = _r355_t0["set-anchor"].bind(_r355_t0), _r355_t0.gizmo = r1_globalTransform, 
        _r355_t0["set-width"](r1_WIDTH), r355_xn$setwidth$9Jrj(r1_WIDTH), r355_xn$assignunicode$7Hrq("."), 
        void r355_xn$putshapes$9Jrj([ r1_Ring(r1_PERIODSIZE - r1_O, r1_O, r1_MIDDLE - r1_PERIODRADIUS + r1_O, r1_MIDDLE + r1_PERIODRADIUS - r1_O) ]);
    }), r1_xn$createglyph$7Hrq("xhdot", function() {
        var r358_currentGlyph, r358_xn$setwidth$9Jrj, r358_xn$assignunicode$7Hrq, r358_xn$startfrom$1aao, r358_xn$lineto$5sIl, r358_xn$curveto$1aao, r358_xn$cubicto$1aao, r358_xn$putshapes$9Jrj, r358_xn$reverselast$3qIs, r358_include, r358_xn$createstroke$7Hrq, r358_xn$setanchor$9Jrj, _r358_t0;
        return _r358_t0 = this, r358_currentGlyph = _r358_t0, r358_xn$setwidth$9Jrj = _r358_t0["set-width"].bind(_r358_t0), 
        r358_xn$assignunicode$7Hrq = function(r359_code) {
            var r359_code;
            return r358_currentGlyph["assign-unicode"](r359_code), r1_unicodeGlyphs[r358_currentGlyph.unicode[r358_currentGlyph.unicode.length - 1]] = r358_currentGlyph;
        }, r358_xn$startfrom$1aao = _r358_t0["start-from"].bind(_r358_t0), r358_xn$lineto$5sIl = _r358_t0["line-to"].bind(_r358_t0), 
        r358_xn$curveto$1aao = _r358_t0["curve-to"].bind(_r358_t0), r358_xn$cubicto$1aao = _r358_t0["cubic-to"].bind(_r358_t0), 
        r358_xn$putshapes$9Jrj = _r358_t0["put-shapes"].bind(_r358_t0), r358_xn$reverselast$3qIs = _r358_t0["reverse-last"].bind(_r358_t0), 
        r358_include = _r358_t0.include.bind(_r358_t0), r358_xn$createstroke$7Hrq = _r358_t0["create-stroke"].bind(_r358_t0), 
        r358_xn$setanchor$9Jrj = _r358_t0["set-anchor"].bind(_r358_t0), _r358_t0.gizmo = r1_globalTransform, 
        _r358_t0["set-width"](r1_WIDTH), r358_xn$setwidth$9Jrj(r1_WIDTH), void r358_xn$putshapes$9Jrj([ r1_Ring(r1_XH - r1_O, r1_XH - r1_PERIODSIZE + r1_O, r1_MIDDLE - r1_PERIODRADIUS + r1_O, r1_MIDDLE + r1_PERIODRADIUS - r1_O) ]);
    }), r1_xn$createglyph$7Hrq("comma", function() {
        var r361_currentGlyph, r361_xn$setwidth$9Jrj, r361_xn$assignunicode$7Hrq, r361_xn$startfrom$1aao, r361_xn$lineto$5sIl, r361_xn$curveto$1aao, r361_xn$cubicto$1aao, r361_xn$putshapes$9Jrj, r361_xn$reverselast$3qIs, r361_include, r361_xn$createstroke$7Hrq, r361_xn$setanchor$9Jrj, r361_sw, _r361_t0;
        return _r361_t0 = this, r361_currentGlyph = _r361_t0, r361_xn$setwidth$9Jrj = _r361_t0["set-width"].bind(_r361_t0), 
        r361_xn$assignunicode$7Hrq = function(r362_code) {
            var r362_code;
            return r361_currentGlyph["assign-unicode"](r362_code), r1_unicodeGlyphs[r361_currentGlyph.unicode[r361_currentGlyph.unicode.length - 1]] = r361_currentGlyph;
        }, r361_xn$startfrom$1aao = _r361_t0["start-from"].bind(_r361_t0), r361_xn$lineto$5sIl = _r361_t0["line-to"].bind(_r361_t0), 
        r361_xn$curveto$1aao = _r361_t0["curve-to"].bind(_r361_t0), r361_xn$cubicto$1aao = _r361_t0["cubic-to"].bind(_r361_t0), 
        r361_xn$putshapes$9Jrj = _r361_t0["put-shapes"].bind(_r361_t0), r361_xn$reverselast$3qIs = _r361_t0["reverse-last"].bind(_r361_t0), 
        r361_include = _r361_t0.include.bind(_r361_t0), r361_xn$createstroke$7Hrq = _r361_t0["create-stroke"].bind(_r361_t0), 
        r361_xn$setanchor$9Jrj = _r361_t0["set-anchor"].bind(_r361_t0), _r361_t0.gizmo = r1_globalTransform, 
        _r361_t0["set-width"](r1_WIDTH), r361_xn$setwidth$9Jrj(r1_WIDTH), r361_xn$assignunicode$7Hrq(","), 
        r361_include(r1_glyphs.period), r361_sw = .5 * r1_PERIODSIZE, void r361_xn$putshapes$9Jrj(r361_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE + r1_PERIODRADIUS - r1_O, r1_mix(r1_O, r1_PERIODSIZE - r1_O, .5))["set-width"](0, r361_sw)["curve-to"](r1_MIDDLE + r1_PERIODRADIUS - r1_O, r1_mix(r1_mix(r1_O, r1_PERIODSIZE - r1_O, .5), r1_DESCENDER, .5), r1_mix(r1_MIDDLE, r1_MIDDLE - r1_PERIODRADIUS, .3), r1_DESCENDER)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("colon", function() {
        var r364_currentGlyph, r364_xn$setwidth$9Jrj, r364_xn$assignunicode$7Hrq, r364_xn$startfrom$1aao, r364_xn$lineto$5sIl, r364_xn$curveto$1aao, r364_xn$cubicto$1aao, r364_xn$putshapes$9Jrj, r364_xn$reverselast$3qIs, r364_include, r364_xn$createstroke$7Hrq, r364_xn$setanchor$9Jrj, _r364_t0;
        return _r364_t0 = this, r364_currentGlyph = _r364_t0, r364_xn$setwidth$9Jrj = _r364_t0["set-width"].bind(_r364_t0), 
        r364_xn$assignunicode$7Hrq = function(r365_code) {
            var r365_code;
            return r364_currentGlyph["assign-unicode"](r365_code), r1_unicodeGlyphs[r364_currentGlyph.unicode[r364_currentGlyph.unicode.length - 1]] = r364_currentGlyph;
        }, r364_xn$startfrom$1aao = _r364_t0["start-from"].bind(_r364_t0), r364_xn$lineto$5sIl = _r364_t0["line-to"].bind(_r364_t0), 
        r364_xn$curveto$1aao = _r364_t0["curve-to"].bind(_r364_t0), r364_xn$cubicto$1aao = _r364_t0["cubic-to"].bind(_r364_t0), 
        r364_xn$putshapes$9Jrj = _r364_t0["put-shapes"].bind(_r364_t0), r364_xn$reverselast$3qIs = _r364_t0["reverse-last"].bind(_r364_t0), 
        r364_include = _r364_t0.include.bind(_r364_t0), r364_xn$createstroke$7Hrq = _r364_t0["create-stroke"].bind(_r364_t0), 
        r364_xn$setanchor$9Jrj = _r364_t0["set-anchor"].bind(_r364_t0), _r364_t0.gizmo = r1_globalTransform, 
        _r364_t0["set-width"](r1_WIDTH), r364_xn$setwidth$9Jrj(r1_WIDTH), r364_xn$assignunicode$7Hrq(":"), 
        r364_include(r1_glyphs.period), void r364_include(r1_glyphs.xhdot);
    }), r1_xn$createglyph$7Hrq("semicolon", function() {
        var r367_currentGlyph, r367_xn$setwidth$9Jrj, r367_xn$assignunicode$7Hrq, r367_xn$startfrom$1aao, r367_xn$lineto$5sIl, r367_xn$curveto$1aao, r367_xn$cubicto$1aao, r367_xn$putshapes$9Jrj, r367_xn$reverselast$3qIs, r367_include, r367_xn$createstroke$7Hrq, r367_xn$setanchor$9Jrj, _r367_t0;
        return _r367_t0 = this, r367_currentGlyph = _r367_t0, r367_xn$setwidth$9Jrj = _r367_t0["set-width"].bind(_r367_t0), 
        r367_xn$assignunicode$7Hrq = function(r368_code) {
            var r368_code;
            return r367_currentGlyph["assign-unicode"](r368_code), r1_unicodeGlyphs[r367_currentGlyph.unicode[r367_currentGlyph.unicode.length - 1]] = r367_currentGlyph;
        }, r367_xn$startfrom$1aao = _r367_t0["start-from"].bind(_r367_t0), r367_xn$lineto$5sIl = _r367_t0["line-to"].bind(_r367_t0), 
        r367_xn$curveto$1aao = _r367_t0["curve-to"].bind(_r367_t0), r367_xn$cubicto$1aao = _r367_t0["cubic-to"].bind(_r367_t0), 
        r367_xn$putshapes$9Jrj = _r367_t0["put-shapes"].bind(_r367_t0), r367_xn$reverselast$3qIs = _r367_t0["reverse-last"].bind(_r367_t0), 
        r367_include = _r367_t0.include.bind(_r367_t0), r367_xn$createstroke$7Hrq = _r367_t0["create-stroke"].bind(_r367_t0), 
        r367_xn$setanchor$9Jrj = _r367_t0["set-anchor"].bind(_r367_t0), _r367_t0.gizmo = r1_globalTransform, 
        _r367_t0["set-width"](r1_WIDTH), r367_xn$setwidth$9Jrj(r1_WIDTH), r367_xn$assignunicode$7Hrq(";"), 
        r367_include(r1_glyphs.comma), void r367_include(r1_glyphs.xhdot);
    }), r1_xn$createglyph$7Hrq("question", function() {
        var r370_currentGlyph, r370_xn$setwidth$9Jrj, r370_xn$assignunicode$7Hrq, r370_xn$startfrom$1aao, r370_xn$lineto$5sIl, r370_xn$curveto$1aao, r370_xn$cubicto$1aao, r370_xn$putshapes$9Jrj, r370_xn$reverselast$3qIs, r370_include, r370_xn$createstroke$7Hrq, r370_xn$setanchor$9Jrj, _r370_t0;
        return _r370_t0 = this, r370_currentGlyph = _r370_t0, r370_xn$setwidth$9Jrj = _r370_t0["set-width"].bind(_r370_t0), 
        r370_xn$assignunicode$7Hrq = function(r371_code) {
            var r371_code;
            return r370_currentGlyph["assign-unicode"](r371_code), r1_unicodeGlyphs[r370_currentGlyph.unicode[r370_currentGlyph.unicode.length - 1]] = r370_currentGlyph;
        }, r370_xn$startfrom$1aao = _r370_t0["start-from"].bind(_r370_t0), r370_xn$lineto$5sIl = _r370_t0["line-to"].bind(_r370_t0), 
        r370_xn$curveto$1aao = _r370_t0["curve-to"].bind(_r370_t0), r370_xn$cubicto$1aao = _r370_t0["cubic-to"].bind(_r370_t0), 
        r370_xn$putshapes$9Jrj = _r370_t0["put-shapes"].bind(_r370_t0), r370_xn$reverselast$3qIs = _r370_t0["reverse-last"].bind(_r370_t0), 
        r370_include = _r370_t0.include.bind(_r370_t0), r370_xn$createstroke$7Hrq = _r370_t0["create-stroke"].bind(_r370_t0), 
        r370_xn$setanchor$9Jrj = _r370_t0["set-anchor"].bind(_r370_t0), _r370_t0.gizmo = r1_globalTransform, 
        _r370_t0["set-width"](r1_WIDTH), r370_xn$setwidth$9Jrj(r1_WIDTH), r370_xn$assignunicode$7Hrq("?"), 
        r370_xn$putshapes$9Jrj(r1_xsStrand(r1_MIDDLE - r1_HALFSTROKE, r1_mix(r1_DOTSIZE + r1_STROKE, r1_XH / 2, .5), r1_RIGHTSB, r1_CAP - r1_SMOOTHB)), 
        r370_xn$putshapes$9Jrj(r1_twoHookUpper(r1_CAP, r1_SMOOTHB, r1_HOOK)), void r370_xn$putshapes$9Jrj([ r1_Ring(r1_DOTSIZE - r1_O, r1_O, r1_MIDDLE - r1_DOTRADIUS + r1_O, r1_MIDDLE + r1_DOTRADIUS - r1_O) ]);
    }), r1_xn$createglyph$7Hrq("exclam", function() {
        var r373_currentGlyph, r373_xn$setwidth$9Jrj, r373_xn$assignunicode$7Hrq, r373_xn$startfrom$1aao, r373_xn$lineto$5sIl, r373_xn$curveto$1aao, r373_xn$cubicto$1aao, r373_xn$putshapes$9Jrj, r373_xn$reverselast$3qIs, r373_include, r373_xn$createstroke$7Hrq, r373_xn$setanchor$9Jrj, _r373_t0;
        return _r373_t0 = this, r373_currentGlyph = _r373_t0, r373_xn$setwidth$9Jrj = _r373_t0["set-width"].bind(_r373_t0), 
        r373_xn$assignunicode$7Hrq = function(r374_code) {
            var r374_code;
            return r373_currentGlyph["assign-unicode"](r374_code), r1_unicodeGlyphs[r373_currentGlyph.unicode[r373_currentGlyph.unicode.length - 1]] = r373_currentGlyph;
        }, r373_xn$startfrom$1aao = _r373_t0["start-from"].bind(_r373_t0), r373_xn$lineto$5sIl = _r373_t0["line-to"].bind(_r373_t0), 
        r373_xn$curveto$1aao = _r373_t0["curve-to"].bind(_r373_t0), r373_xn$cubicto$1aao = _r373_t0["cubic-to"].bind(_r373_t0), 
        r373_xn$putshapes$9Jrj = _r373_t0["put-shapes"].bind(_r373_t0), r373_xn$reverselast$3qIs = _r373_t0["reverse-last"].bind(_r373_t0), 
        r373_include = _r373_t0.include.bind(_r373_t0), r373_xn$createstroke$7Hrq = _r373_t0["create-stroke"].bind(_r373_t0), 
        r373_xn$setanchor$9Jrj = _r373_t0["set-anchor"].bind(_r373_t0), _r373_t0.gizmo = r1_globalTransform, 
        _r373_t0["set-width"](r1_WIDTH), r373_xn$setwidth$9Jrj(r1_WIDTH), r373_xn$assignunicode$7Hrq("!"), 
        r373_xn$putshapes$9Jrj(r373_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_CAP)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_DOWNWARD)["line-to"](r1_MIDDLE, r1_mix(r1_DOTSIZE + r1_STROKE, r1_XH / 2, .5))["heads-to"](r1_DOWNWARD)["to-outline"]()), 
        void r373_xn$putshapes$9Jrj([ r1_Ring(r1_DOTSIZE - r1_O, r1_O, r1_MIDDLE - r1_DOTRADIUS + r1_O, r1_MIDDLE + r1_DOTRADIUS - r1_O) ]);
    }), r1_xn$createglyph$7Hrq("underscore", function() {
        var r376_currentGlyph, r376_xn$setwidth$9Jrj, r376_xn$assignunicode$7Hrq, r376_xn$startfrom$1aao, r376_xn$lineto$5sIl, r376_xn$curveto$1aao, r376_xn$cubicto$1aao, r376_xn$putshapes$9Jrj, r376_xn$reverselast$3qIs, r376_include, r376_xn$createstroke$7Hrq, r376_xn$setanchor$9Jrj, _r376_t0;
        return _r376_t0 = this, r376_currentGlyph = _r376_t0, r376_xn$setwidth$9Jrj = _r376_t0["set-width"].bind(_r376_t0), 
        r376_xn$assignunicode$7Hrq = function(r377_code) {
            var r377_code;
            return r376_currentGlyph["assign-unicode"](r377_code), r1_unicodeGlyphs[r376_currentGlyph.unicode[r376_currentGlyph.unicode.length - 1]] = r376_currentGlyph;
        }, r376_xn$startfrom$1aao = _r376_t0["start-from"].bind(_r376_t0), r376_xn$lineto$5sIl = _r376_t0["line-to"].bind(_r376_t0), 
        r376_xn$curveto$1aao = _r376_t0["curve-to"].bind(_r376_t0), r376_xn$cubicto$1aao = _r376_t0["cubic-to"].bind(_r376_t0), 
        r376_xn$putshapes$9Jrj = _r376_t0["put-shapes"].bind(_r376_t0), r376_xn$reverselast$3qIs = _r376_t0["reverse-last"].bind(_r376_t0), 
        r376_include = _r376_t0.include.bind(_r376_t0), r376_xn$createstroke$7Hrq = _r376_t0["create-stroke"].bind(_r376_t0), 
        r376_xn$setanchor$9Jrj = _r376_t0["set-anchor"].bind(_r376_t0), _r376_t0.gizmo = r1_globalTransform, 
        _r376_t0["set-width"](r1_WIDTH), r376_xn$setwidth$9Jrj(r1_WIDTH), r376_xn$assignunicode$7Hrq("_"), 
        void r376_xn$putshapes$9Jrj(r376_xn$createstroke$7Hrq()["start-from"](r1_SB, 0)["heads-to"](r1_RIGHTWARD)["set-width"](r1_STROKE, 0)["line-to"](r1_RIGHTSB, 0)["heads-to"](r1_RIGHTWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("hyphen", function() {
        var r379_currentGlyph, r379_xn$setwidth$9Jrj, r379_xn$assignunicode$7Hrq, r379_xn$startfrom$1aao, r379_xn$lineto$5sIl, r379_xn$curveto$1aao, r379_xn$cubicto$1aao, r379_xn$putshapes$9Jrj, r379_xn$reverselast$3qIs, r379_include, r379_xn$createstroke$7Hrq, r379_xn$setanchor$9Jrj, _r379_t0;
        return _r379_t0 = this, r379_currentGlyph = _r379_t0, r379_xn$setwidth$9Jrj = _r379_t0["set-width"].bind(_r379_t0), 
        r379_xn$assignunicode$7Hrq = function(r380_code) {
            var r380_code;
            return r379_currentGlyph["assign-unicode"](r380_code), r1_unicodeGlyphs[r379_currentGlyph.unicode[r379_currentGlyph.unicode.length - 1]] = r379_currentGlyph;
        }, r379_xn$startfrom$1aao = _r379_t0["start-from"].bind(_r379_t0), r379_xn$lineto$5sIl = _r379_t0["line-to"].bind(_r379_t0), 
        r379_xn$curveto$1aao = _r379_t0["curve-to"].bind(_r379_t0), r379_xn$cubicto$1aao = _r379_t0["cubic-to"].bind(_r379_t0), 
        r379_xn$putshapes$9Jrj = _r379_t0["put-shapes"].bind(_r379_t0), r379_xn$reverselast$3qIs = _r379_t0["reverse-last"].bind(_r379_t0), 
        r379_include = _r379_t0.include.bind(_r379_t0), r379_xn$createstroke$7Hrq = _r379_t0["create-stroke"].bind(_r379_t0), 
        r379_xn$setanchor$9Jrj = _r379_t0["set-anchor"].bind(_r379_t0), _r379_t0.gizmo = r1_globalTransform, 
        _r379_t0["set-width"](r1_WIDTH), r379_xn$setwidth$9Jrj(r1_WIDTH), r379_xn$assignunicode$7Hrq("-"), 
        void r379_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter));
    }), r1_xn$createglyph$7Hrq("plus", function() {
        var r382_currentGlyph, r382_xn$setwidth$9Jrj, r382_xn$assignunicode$7Hrq, r382_xn$startfrom$1aao, r382_xn$lineto$5sIl, r382_xn$curveto$1aao, r382_xn$cubicto$1aao, r382_xn$putshapes$9Jrj, r382_xn$reverselast$3qIs, r382_include, r382_xn$createstroke$7Hrq, r382_xn$setanchor$9Jrj, _r382_t0;
        return _r382_t0 = this, r382_currentGlyph = _r382_t0, r382_xn$setwidth$9Jrj = _r382_t0["set-width"].bind(_r382_t0), 
        r382_xn$assignunicode$7Hrq = function(r383_code) {
            var r383_code;
            return r382_currentGlyph["assign-unicode"](r383_code), r1_unicodeGlyphs[r382_currentGlyph.unicode[r382_currentGlyph.unicode.length - 1]] = r382_currentGlyph;
        }, r382_xn$startfrom$1aao = _r382_t0["start-from"].bind(_r382_t0), r382_xn$lineto$5sIl = _r382_t0["line-to"].bind(_r382_t0), 
        r382_xn$curveto$1aao = _r382_t0["curve-to"].bind(_r382_t0), r382_xn$cubicto$1aao = _r382_t0["cubic-to"].bind(_r382_t0), 
        r382_xn$putshapes$9Jrj = _r382_t0["put-shapes"].bind(_r382_t0), r382_xn$reverselast$3qIs = _r382_t0["reverse-last"].bind(_r382_t0), 
        r382_include = _r382_t0.include.bind(_r382_t0), r382_xn$createstroke$7Hrq = _r382_t0["create-stroke"].bind(_r382_t0), 
        r382_xn$setanchor$9Jrj = _r382_t0["set-anchor"].bind(_r382_t0), _r382_t0.gizmo = r1_globalTransform, 
        _r382_t0["set-width"](r1_WIDTH), r382_xn$setwidth$9Jrj(r1_WIDTH), r382_xn$assignunicode$7Hrq("+"), 
        r382_include(r1_glyphs.hyphen), void r382_xn$putshapes$9Jrj(r1_vbar(r1_MIDDLE, r1_hyphenCenter - .55 * (r1_RIGHTSB - r1_SB), r1_hyphenCenter + .55 * (r1_RIGHTSB - r1_SB)));
    }), r1_xn$createglyph$7Hrq("equal", function() {
        var r385_currentGlyph, r385_xn$setwidth$9Jrj, r385_xn$assignunicode$7Hrq, r385_xn$startfrom$1aao, r385_xn$lineto$5sIl, r385_xn$curveto$1aao, r385_xn$cubicto$1aao, r385_xn$putshapes$9Jrj, r385_xn$reverselast$3qIs, r385_include, r385_xn$createstroke$7Hrq, r385_xn$setanchor$9Jrj, _r385_t0;
        return _r385_t0 = this, r385_currentGlyph = _r385_t0, r385_xn$setwidth$9Jrj = _r385_t0["set-width"].bind(_r385_t0), 
        r385_xn$assignunicode$7Hrq = function(r386_code) {
            var r386_code;
            return r385_currentGlyph["assign-unicode"](r386_code), r1_unicodeGlyphs[r385_currentGlyph.unicode[r385_currentGlyph.unicode.length - 1]] = r385_currentGlyph;
        }, r385_xn$startfrom$1aao = _r385_t0["start-from"].bind(_r385_t0), r385_xn$lineto$5sIl = _r385_t0["line-to"].bind(_r385_t0), 
        r385_xn$curveto$1aao = _r385_t0["curve-to"].bind(_r385_t0), r385_xn$cubicto$1aao = _r385_t0["cubic-to"].bind(_r385_t0), 
        r385_xn$putshapes$9Jrj = _r385_t0["put-shapes"].bind(_r385_t0), r385_xn$reverselast$3qIs = _r385_t0["reverse-last"].bind(_r385_t0), 
        r385_include = _r385_t0.include.bind(_r385_t0), r385_xn$createstroke$7Hrq = _r385_t0["create-stroke"].bind(_r385_t0), 
        r385_xn$setanchor$9Jrj = _r385_t0["set-anchor"].bind(_r385_t0), _r385_t0.gizmo = r1_globalTransform, 
        _r385_t0["set-width"](r1_WIDTH), r385_xn$setwidth$9Jrj(r1_WIDTH), r385_xn$assignunicode$7Hrq("="), 
        r385_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter - .2 * r1_XH)), 
        void r385_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_hyphenCenter + .2 * r1_XH));
    }), r1_xn$createglyph$7Hrq("bar", function() {
        var r388_currentGlyph, r388_xn$setwidth$9Jrj, r388_xn$assignunicode$7Hrq, r388_xn$startfrom$1aao, r388_xn$lineto$5sIl, r388_xn$curveto$1aao, r388_xn$cubicto$1aao, r388_xn$putshapes$9Jrj, r388_xn$reverselast$3qIs, r388_include, r388_xn$createstroke$7Hrq, r388_xn$setanchor$9Jrj, _r388_t0;
        return _r388_t0 = this, r388_currentGlyph = _r388_t0, r388_xn$setwidth$9Jrj = _r388_t0["set-width"].bind(_r388_t0), 
        r388_xn$assignunicode$7Hrq = function(r389_code) {
            var r389_code;
            return r388_currentGlyph["assign-unicode"](r389_code), r1_unicodeGlyphs[r388_currentGlyph.unicode[r388_currentGlyph.unicode.length - 1]] = r388_currentGlyph;
        }, r388_xn$startfrom$1aao = _r388_t0["start-from"].bind(_r388_t0), r388_xn$lineto$5sIl = _r388_t0["line-to"].bind(_r388_t0), 
        r388_xn$curveto$1aao = _r388_t0["curve-to"].bind(_r388_t0), r388_xn$cubicto$1aao = _r388_t0["cubic-to"].bind(_r388_t0), 
        r388_xn$putshapes$9Jrj = _r388_t0["put-shapes"].bind(_r388_t0), r388_xn$reverselast$3qIs = _r388_t0["reverse-last"].bind(_r388_t0), 
        r388_include = _r388_t0.include.bind(_r388_t0), r388_xn$createstroke$7Hrq = _r388_t0["create-stroke"].bind(_r388_t0), 
        r388_xn$setanchor$9Jrj = _r388_t0["set-anchor"].bind(_r388_t0), _r388_t0.gizmo = r1_globalTransform, 
        _r388_t0["set-width"](r1_WIDTH), r388_xn$setwidth$9Jrj(r1_WIDTH), r388_xn$assignunicode$7Hrq("|"), 
        void r388_xn$putshapes$9Jrj(r388_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_parenTop)["heads-to"](r1_DOWNWARD)["set-width"](r1_STROKE / 2, r1_STROKE / 2)["line-to"](r1_MIDDLE, r1_parenBot)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("slash", function() {
        var r391_currentGlyph, r391_xn$setwidth$9Jrj, r391_xn$assignunicode$7Hrq, r391_xn$startfrom$1aao, r391_xn$lineto$5sIl, r391_xn$curveto$1aao, r391_xn$cubicto$1aao, r391_xn$putshapes$9Jrj, r391_xn$reverselast$3qIs, r391_include, r391_xn$createstroke$7Hrq, r391_xn$setanchor$9Jrj, r391_cor, _r391_t0;
        return _r391_t0 = this, r391_currentGlyph = _r391_t0, r391_xn$setwidth$9Jrj = _r391_t0["set-width"].bind(_r391_t0), 
        r391_xn$assignunicode$7Hrq = function(r392_code) {
            var r392_code;
            return r391_currentGlyph["assign-unicode"](r392_code), r1_unicodeGlyphs[r391_currentGlyph.unicode[r391_currentGlyph.unicode.length - 1]] = r391_currentGlyph;
        }, r391_xn$startfrom$1aao = _r391_t0["start-from"].bind(_r391_t0), r391_xn$lineto$5sIl = _r391_t0["line-to"].bind(_r391_t0), 
        r391_xn$curveto$1aao = _r391_t0["curve-to"].bind(_r391_t0), r391_xn$cubicto$1aao = _r391_t0["cubic-to"].bind(_r391_t0), 
        r391_xn$putshapes$9Jrj = _r391_t0["put-shapes"].bind(_r391_t0), r391_xn$reverselast$3qIs = _r391_t0["reverse-last"].bind(_r391_t0), 
        r391_include = _r391_t0.include.bind(_r391_t0), r391_xn$createstroke$7Hrq = _r391_t0["create-stroke"].bind(_r391_t0), 
        r391_xn$setanchor$9Jrj = _r391_t0["set-anchor"].bind(_r391_t0), _r391_t0.gizmo = r1_globalTransform, 
        _r391_t0["set-width"](r1_WIDTH), r391_xn$setwidth$9Jrj(r1_WIDTH), r391_xn$assignunicode$7Hrq("/"), 
        r391_cor = 1 / Math.sqrt(1 - Math.pow((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_parenTop - r1_parenBot), 2)), 
        r391_xn$startfrom$1aao(r1_SB, r1_parenBot), r391_xn$lineto$5sIl(r1_SB + r1_STROKE * r391_cor, r1_parenBot), 
        r391_xn$lineto$5sIl(r1_RIGHTSB, r1_parenTop), r391_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r391_cor, r1_parenTop), 
        void r391_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("backslash", function() {
        var r394_currentGlyph, r394_xn$setwidth$9Jrj, r394_xn$assignunicode$7Hrq, r394_xn$startfrom$1aao, r394_xn$lineto$5sIl, r394_xn$curveto$1aao, r394_xn$cubicto$1aao, r394_xn$putshapes$9Jrj, r394_xn$reverselast$3qIs, r394_include, r394_xn$createstroke$7Hrq, r394_xn$setanchor$9Jrj, r394_cor, _r394_t0;
        return _r394_t0 = this, r394_currentGlyph = _r394_t0, r394_xn$setwidth$9Jrj = _r394_t0["set-width"].bind(_r394_t0), 
        r394_xn$assignunicode$7Hrq = function(r395_code) {
            var r395_code;
            return r394_currentGlyph["assign-unicode"](r395_code), r1_unicodeGlyphs[r394_currentGlyph.unicode[r394_currentGlyph.unicode.length - 1]] = r394_currentGlyph;
        }, r394_xn$startfrom$1aao = _r394_t0["start-from"].bind(_r394_t0), r394_xn$lineto$5sIl = _r394_t0["line-to"].bind(_r394_t0), 
        r394_xn$curveto$1aao = _r394_t0["curve-to"].bind(_r394_t0), r394_xn$cubicto$1aao = _r394_t0["cubic-to"].bind(_r394_t0), 
        r394_xn$putshapes$9Jrj = _r394_t0["put-shapes"].bind(_r394_t0), r394_xn$reverselast$3qIs = _r394_t0["reverse-last"].bind(_r394_t0), 
        r394_include = _r394_t0.include.bind(_r394_t0), r394_xn$createstroke$7Hrq = _r394_t0["create-stroke"].bind(_r394_t0), 
        r394_xn$setanchor$9Jrj = _r394_t0["set-anchor"].bind(_r394_t0), _r394_t0.gizmo = r1_globalTransform, 
        _r394_t0["set-width"](r1_WIDTH), r394_xn$setwidth$9Jrj(r1_WIDTH), r394_xn$assignunicode$7Hrq("\\"), 
        r394_cor = 1 / Math.sqrt(1 - Math.pow((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_parenTop - r1_parenBot), 2)), 
        r394_xn$startfrom$1aao(r1_RIGHTSB, r1_parenBot), r394_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r394_cor, r1_parenBot), 
        r394_xn$lineto$5sIl(r1_SB, r1_parenTop), r394_xn$lineto$5sIl(r1_SB + r1_STROKE * r394_cor, r1_parenTop), 
        void r394_xn$reverselast$3qIs();
    }), r1_xn$createglyph$7Hrq("numbersign", function() {
        var r397_currentGlyph, r397_xn$setwidth$9Jrj, r397_xn$assignunicode$7Hrq, r397_xn$startfrom$1aao, r397_xn$lineto$5sIl, r397_xn$curveto$1aao, r397_xn$cubicto$1aao, r397_xn$putshapes$9Jrj, r397_xn$reverselast$3qIs, r397_include, r397_xn$createstroke$7Hrq, r397_xn$setanchor$9Jrj, r397_fine, _r397_t0;
        return _r397_t0 = this, r397_currentGlyph = _r397_t0, r397_xn$setwidth$9Jrj = _r397_t0["set-width"].bind(_r397_t0), 
        r397_xn$assignunicode$7Hrq = function(r398_code) {
            var r398_code;
            return r397_currentGlyph["assign-unicode"](r398_code), r1_unicodeGlyphs[r397_currentGlyph.unicode[r397_currentGlyph.unicode.length - 1]] = r397_currentGlyph;
        }, r397_xn$startfrom$1aao = _r397_t0["start-from"].bind(_r397_t0), r397_xn$lineto$5sIl = _r397_t0["line-to"].bind(_r397_t0), 
        r397_xn$curveto$1aao = _r397_t0["curve-to"].bind(_r397_t0), r397_xn$cubicto$1aao = _r397_t0["cubic-to"].bind(_r397_t0), 
        r397_xn$putshapes$9Jrj = _r397_t0["put-shapes"].bind(_r397_t0), r397_xn$reverselast$3qIs = _r397_t0["reverse-last"].bind(_r397_t0), 
        r397_include = _r397_t0.include.bind(_r397_t0), r397_xn$createstroke$7Hrq = _r397_t0["create-stroke"].bind(_r397_t0), 
        r397_xn$setanchor$9Jrj = _r397_t0["set-anchor"].bind(_r397_t0), _r397_t0.gizmo = r1_globalTransform, 
        _r397_t0["set-width"](r1_WIDTH), r397_xn$setwidth$9Jrj(r1_WIDTH), r397_xn$assignunicode$7Hrq("#"), 
        r397_fine = Math.min(r1_STROKE, .25 * (r1_RIGHTSB - r1_SB)), r397_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_mix(r1_parenTop, r1_parenBot, .33))), 
        r397_xn$putshapes$9Jrj(r1_hbar(r1_SB, r1_RIGHTSB, r1_mix(r1_parenTop, r1_parenBot, .67))), 
        r397_xn$putshapes$9Jrj(r1_vbar(r1_mix(r1_SB, r1_RIGHTSB, .3), r1_parenBot + r397_fine, r1_parenTop - r397_fine, r397_fine)), 
        void r397_xn$putshapes$9Jrj(r1_vbar(r1_mix(r1_SB, r1_RIGHTSB, .7), r1_parenBot + r397_fine, r1_parenTop - r397_fine, r397_fine));
    }), r1_xn$createglyph$7Hrq("less", function() {
        var r400_currentGlyph, r400_xn$setwidth$9Jrj, r400_xn$assignunicode$7Hrq, r400_xn$startfrom$1aao, r400_xn$lineto$5sIl, r400_xn$curveto$1aao, r400_xn$cubicto$1aao, r400_xn$putshapes$9Jrj, r400_xn$reverselast$3qIs, r400_include, r400_xn$createstroke$7Hrq, r400_xn$setanchor$9Jrj, r400_top, r400_bot, _r400_t0;
        return _r400_t0 = this, r400_currentGlyph = _r400_t0, r400_xn$setwidth$9Jrj = _r400_t0["set-width"].bind(_r400_t0), 
        r400_xn$assignunicode$7Hrq = function(r401_code) {
            var r401_code;
            return r400_currentGlyph["assign-unicode"](r401_code), r1_unicodeGlyphs[r400_currentGlyph.unicode[r400_currentGlyph.unicode.length - 1]] = r400_currentGlyph;
        }, r400_xn$startfrom$1aao = _r400_t0["start-from"].bind(_r400_t0), r400_xn$lineto$5sIl = _r400_t0["line-to"].bind(_r400_t0), 
        r400_xn$curveto$1aao = _r400_t0["curve-to"].bind(_r400_t0), r400_xn$cubicto$1aao = _r400_t0["cubic-to"].bind(_r400_t0), 
        r400_xn$putshapes$9Jrj = _r400_t0["put-shapes"].bind(_r400_t0), r400_xn$reverselast$3qIs = _r400_t0["reverse-last"].bind(_r400_t0), 
        r400_include = _r400_t0.include.bind(_r400_t0), r400_xn$createstroke$7Hrq = _r400_t0["create-stroke"].bind(_r400_t0), 
        r400_xn$setanchor$9Jrj = _r400_t0["set-anchor"].bind(_r400_t0), _r400_t0.gizmo = r1_globalTransform, 
        _r400_t0["set-width"](r1_WIDTH), r400_xn$setwidth$9Jrj(r1_WIDTH), r400_xn$assignunicode$7Hrq("<"), 
        r400_top = r1_mix(0, r1_CAP, .75), r400_bot = r1_mix(0, r1_CAP, .1), r400_xn$putshapes$9Jrj(r400_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r400_top)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_SB, r1_mix(r400_top, r400_bot, .5))["heads-to"](r1_LEFTWARD)["to-outline"](0, 0, 1, !0)), 
        void r400_xn$putshapes$9Jrj(r400_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_mix(r400_top, r400_bot, .5))["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_RIGHTWARD)["line-to"](r1_RIGHTSB, r400_bot)["to-outline"](0, 0, 1, !0));
    }), r1_xn$createglyph$7Hrq("greater", function() {
        var r403_currentGlyph, r403_xn$setwidth$9Jrj, r403_xn$assignunicode$7Hrq, r403_xn$startfrom$1aao, r403_xn$lineto$5sIl, r403_xn$curveto$1aao, r403_xn$cubicto$1aao, r403_xn$putshapes$9Jrj, r403_xn$reverselast$3qIs, r403_include, r403_xn$createstroke$7Hrq, r403_xn$setanchor$9Jrj, r403_top, r403_bot, _r403_t0;
        return _r403_t0 = this, r403_currentGlyph = _r403_t0, r403_xn$setwidth$9Jrj = _r403_t0["set-width"].bind(_r403_t0), 
        r403_xn$assignunicode$7Hrq = function(r404_code) {
            var r404_code;
            return r403_currentGlyph["assign-unicode"](r404_code), r1_unicodeGlyphs[r403_currentGlyph.unicode[r403_currentGlyph.unicode.length - 1]] = r403_currentGlyph;
        }, r403_xn$startfrom$1aao = _r403_t0["start-from"].bind(_r403_t0), r403_xn$lineto$5sIl = _r403_t0["line-to"].bind(_r403_t0), 
        r403_xn$curveto$1aao = _r403_t0["curve-to"].bind(_r403_t0), r403_xn$cubicto$1aao = _r403_t0["cubic-to"].bind(_r403_t0), 
        r403_xn$putshapes$9Jrj = _r403_t0["put-shapes"].bind(_r403_t0), r403_xn$reverselast$3qIs = _r403_t0["reverse-last"].bind(_r403_t0), 
        r403_include = _r403_t0.include.bind(_r403_t0), r403_xn$createstroke$7Hrq = _r403_t0["create-stroke"].bind(_r403_t0), 
        r403_xn$setanchor$9Jrj = _r403_t0["set-anchor"].bind(_r403_t0), _r403_t0.gizmo = r1_globalTransform, 
        _r403_t0["set-width"](r1_WIDTH), r403_xn$setwidth$9Jrj(r1_WIDTH), r403_xn$assignunicode$7Hrq(">"), 
        r403_top = r1_mix(0, r1_CAP, .75), r403_bot = r1_mix(0, r1_CAP, .1), r403_xn$putshapes$9Jrj(r403_xn$createstroke$7Hrq()["start-from"](r1_SB, r403_top)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_RIGHTSB, r1_mix(r403_top, r403_bot, .5))["heads-to"](r1_RIGHTWARD)["to-outline"](0, 0, 1, !0)), 
        void r403_xn$putshapes$9Jrj(r403_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, r1_mix(r403_top, r403_bot, .5))["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["heads-to"](r1_LEFTWARD)["line-to"](r1_SB, r403_bot)["to-outline"](0, 0, 1, !0));
    }), r1_xn$createglyph$7Hrq("quotesingle", function() {
        var r406_currentGlyph, r406_xn$setwidth$9Jrj, r406_xn$assignunicode$7Hrq, r406_xn$startfrom$1aao, r406_xn$lineto$5sIl, r406_xn$curveto$1aao, r406_xn$cubicto$1aao, r406_xn$putshapes$9Jrj, r406_xn$reverselast$3qIs, r406_include, r406_xn$createstroke$7Hrq, r406_xn$setanchor$9Jrj, _r406_t0;
        return _r406_t0 = this, r406_currentGlyph = _r406_t0, r406_xn$setwidth$9Jrj = _r406_t0["set-width"].bind(_r406_t0), 
        r406_xn$assignunicode$7Hrq = function(r407_code) {
            var r407_code;
            return r406_currentGlyph["assign-unicode"](r407_code), r1_unicodeGlyphs[r406_currentGlyph.unicode[r406_currentGlyph.unicode.length - 1]] = r406_currentGlyph;
        }, r406_xn$startfrom$1aao = _r406_t0["start-from"].bind(_r406_t0), r406_xn$lineto$5sIl = _r406_t0["line-to"].bind(_r406_t0), 
        r406_xn$curveto$1aao = _r406_t0["curve-to"].bind(_r406_t0), r406_xn$cubicto$1aao = _r406_t0["cubic-to"].bind(_r406_t0), 
        r406_xn$putshapes$9Jrj = _r406_t0["put-shapes"].bind(_r406_t0), r406_xn$reverselast$3qIs = _r406_t0["reverse-last"].bind(_r406_t0), 
        r406_include = _r406_t0.include.bind(_r406_t0), r406_xn$createstroke$7Hrq = _r406_t0["create-stroke"].bind(_r406_t0), 
        r406_xn$setanchor$9Jrj = _r406_t0["set-anchor"].bind(_r406_t0), _r406_t0.gizmo = r1_globalTransform, 
        _r406_t0["set-width"](r1_WIDTH), r406_xn$setwidth$9Jrj(r1_WIDTH), r406_xn$assignunicode$7Hrq(39), 
        void r406_xn$putshapes$9Jrj(r406_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_MIDDLE, r1_XH - r1_HALFSTROKE)["set-width"](.4 * r1_STROKE, .4 * r1_STROKE)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("quotedouble", function() {
        var r409_currentGlyph, r409_xn$setwidth$9Jrj, r409_xn$assignunicode$7Hrq, r409_xn$startfrom$1aao, r409_xn$lineto$5sIl, r409_xn$curveto$1aao, r409_xn$cubicto$1aao, r409_xn$putshapes$9Jrj, r409_xn$reverselast$3qIs, r409_include, r409_xn$createstroke$7Hrq, r409_xn$setanchor$9Jrj, _r409_t0;
        return _r409_t0 = this, r409_currentGlyph = _r409_t0, r409_xn$setwidth$9Jrj = _r409_t0["set-width"].bind(_r409_t0), 
        r409_xn$assignunicode$7Hrq = function(r410_code) {
            var r410_code;
            return r409_currentGlyph["assign-unicode"](r410_code), r1_unicodeGlyphs[r409_currentGlyph.unicode[r409_currentGlyph.unicode.length - 1]] = r409_currentGlyph;
        }, r409_xn$startfrom$1aao = _r409_t0["start-from"].bind(_r409_t0), r409_xn$lineto$5sIl = _r409_t0["line-to"].bind(_r409_t0), 
        r409_xn$curveto$1aao = _r409_t0["curve-to"].bind(_r409_t0), r409_xn$cubicto$1aao = _r409_t0["cubic-to"].bind(_r409_t0), 
        r409_xn$putshapes$9Jrj = _r409_t0["put-shapes"].bind(_r409_t0), r409_xn$reverselast$3qIs = _r409_t0["reverse-last"].bind(_r409_t0), 
        r409_include = _r409_t0.include.bind(_r409_t0), r409_xn$createstroke$7Hrq = _r409_t0["create-stroke"].bind(_r409_t0), 
        r409_xn$setanchor$9Jrj = _r409_t0["set-anchor"].bind(_r409_t0), _r409_t0.gizmo = r1_globalTransform, 
        _r409_t0["set-width"](r1_WIDTH), r409_xn$setwidth$9Jrj(r1_WIDTH), r409_xn$assignunicode$7Hrq(34), 
        r409_xn$putshapes$9Jrj(r409_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, .25), r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_mix(r1_SB, r1_RIGHTSB, .25), r1_XH - r1_HALFSTROKE)["set-width"](.4 * r1_STROKE, .4 * r1_STROKE)["heads-to"](r1_DOWNWARD)["to-outline"]()), 
        void r409_xn$putshapes$9Jrj(r409_xn$createstroke$7Hrq()["start-from"](r1_mix(r1_SB, r1_RIGHTSB, .75), r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](r1_HALFSTROKE, r1_HALFSTROKE)["line-to"](r1_mix(r1_SB, r1_RIGHTSB, .75), r1_XH - r1_HALFSTROKE)["set-width"](.4 * r1_STROKE, .4 * r1_STROKE)["heads-to"](r1_DOWNWARD)["to-outline"]());
    }), r1_xn$createglyph$7Hrq("asterisk", function() {
        var r412_currentGlyph, r412_xn$setwidth$9Jrj, r412_xn$assignunicode$7Hrq, r412_xn$startfrom$1aao, r412_xn$lineto$5sIl, r412_xn$curveto$1aao, r412_xn$cubicto$1aao, r412_xn$putshapes$9Jrj, r412_xn$reverselast$3qIs, r412_include, r412_xn$createstroke$7Hrq, r412_xn$setanchor$9Jrj, r412_radius, r412_centery, r412_fine, r412_final, r412_j, _r412_t0, _r412_t1, _r412_t2;
        for (_r412_t2 = this, r412_currentGlyph = _r412_t2, r412_xn$setwidth$9Jrj = _r412_t2["set-width"].bind(_r412_t2), 
        r412_xn$assignunicode$7Hrq = function(r413_code) {
            var r413_code;
            return r412_currentGlyph["assign-unicode"](r413_code), r1_unicodeGlyphs[r412_currentGlyph.unicode[r412_currentGlyph.unicode.length - 1]] = r412_currentGlyph;
        }, r412_xn$startfrom$1aao = _r412_t2["start-from"].bind(_r412_t2), r412_xn$lineto$5sIl = _r412_t2["line-to"].bind(_r412_t2), 
        r412_xn$curveto$1aao = _r412_t2["curve-to"].bind(_r412_t2), r412_xn$cubicto$1aao = _r412_t2["cubic-to"].bind(_r412_t2), 
        r412_xn$putshapes$9Jrj = _r412_t2["put-shapes"].bind(_r412_t2), r412_xn$reverselast$3qIs = _r412_t2["reverse-last"].bind(_r412_t2), 
        r412_include = _r412_t2.include.bind(_r412_t2), r412_xn$createstroke$7Hrq = _r412_t2["create-stroke"].bind(_r412_t2), 
        r412_xn$setanchor$9Jrj = _r412_t2["set-anchor"].bind(_r412_t2), _r412_t2.gizmo = r1_globalTransform, 
        _r412_t2["set-width"](r1_WIDTH), r412_xn$setwidth$9Jrj(r1_WIDTH), r412_xn$assignunicode$7Hrq("*"), 
        r412_radius = 1.2 * r1_LONGJUT, r412_centery = r1_parenTop - 1.5 * r1_LONGJUT, r412_fine = .4 * r1_STROKE, 
        r412_final = .5 * Math.min(r1_STROKE, r412_radius * Math.PI * 2 / 10), _r412_t0 = 0, 
        _r412_t1 = 5, r412_j = _r412_t0; _r412_t1 > r412_j; r412_j += 1) r412_xn$putshapes$9Jrj(r412_xn$createstroke$7Hrq()["start-from"](r1_MIDDLE, r412_centery)["set-width"](r412_fine, r412_fine)["line-to"](r1_MIDDLE + r412_radius * Math.sin(r412_j / 5 * Math.PI * 2), r412_centery + r412_radius * Math.cos(r412_j / 5 * Math.PI * 2))["set-width"](r412_final, r412_final)["to-outline"](0, 0, 1, !0));
        return void 0;
    }), r1_xn$createglyph$7Hrq("percent", function() {
        var r416_currentGlyph, r416_xn$setwidth$9Jrj, r416_xn$assignunicode$7Hrq, r416_xn$startfrom$1aao, r416_xn$lineto$5sIl, r416_xn$curveto$1aao, r416_xn$cubicto$1aao, r416_xn$putshapes$9Jrj, r416_xn$reverselast$3qIs, r416_include, r416_xn$createstroke$7Hrq, r416_xn$setanchor$9Jrj, r416_percentDotSize, r416_cor, _r416_t0;
        return _r416_t0 = this, r416_currentGlyph = _r416_t0, r416_xn$setwidth$9Jrj = _r416_t0["set-width"].bind(_r416_t0), 
        r416_xn$assignunicode$7Hrq = function(r417_code) {
            var r417_code;
            return r416_currentGlyph["assign-unicode"](r417_code), r1_unicodeGlyphs[r416_currentGlyph.unicode[r416_currentGlyph.unicode.length - 1]] = r416_currentGlyph;
        }, r416_xn$startfrom$1aao = _r416_t0["start-from"].bind(_r416_t0), r416_xn$lineto$5sIl = _r416_t0["line-to"].bind(_r416_t0), 
        r416_xn$curveto$1aao = _r416_t0["curve-to"].bind(_r416_t0), r416_xn$cubicto$1aao = _r416_t0["cubic-to"].bind(_r416_t0), 
        r416_xn$putshapes$9Jrj = _r416_t0["put-shapes"].bind(_r416_t0), r416_xn$reverselast$3qIs = _r416_t0["reverse-last"].bind(_r416_t0), 
        r416_include = _r416_t0.include.bind(_r416_t0), r416_xn$createstroke$7Hrq = _r416_t0["create-stroke"].bind(_r416_t0), 
        r416_xn$setanchor$9Jrj = _r416_t0["set-anchor"].bind(_r416_t0), _r416_t0.gizmo = r1_globalTransform, 
        _r416_t0["set-width"](r1_WIDTH), r416_xn$setwidth$9Jrj(r1_WIDTH), r416_xn$assignunicode$7Hrq("%"), 
        r416_percentDotSize = .3, r416_cor = 1 / Math.sqrt(1 - Math.pow((r1_RIGHTSB - r1_SB - r1_STROKE) / (r1_CAP - 0), 2)), 
        r416_xn$startfrom$1aao(r1_SB, 0), r416_xn$lineto$5sIl(r1_SB + r1_STROKE * r416_cor, 0), 
        r416_xn$lineto$5sIl(r1_RIGHTSB, r1_CAP), r416_xn$lineto$5sIl(r1_RIGHTSB - r1_STROKE * r416_cor, r1_CAP), 
        r416_xn$putshapes$9Jrj(r416_xn$createstroke$7Hrq()["start-from"](r1_SB, r1_CAP)["heads-to"](r1_DOWNWARD)["set-width"](Math.min(.33 * (r1_RIGHTSB - r1_SB), 1.5 * r1_STROKE), 0)["line-to"](r1_SB, r1_mix(r1_CAP, 0, .3))["heads-to"](r1_DOWNWARD)["to-outline"]()), 
        void r416_xn$putshapes$9Jrj(r416_xn$createstroke$7Hrq()["start-from"](r1_RIGHTSB, 0)["heads-to"](r1_UPWARD)["set-width"](Math.min(.33 * (r1_RIGHTSB - r1_SB), 1.5 * r1_STROKE), 0)["line-to"](r1_RIGHTSB, r1_mix(0, r1_CAP, .3))["heads-to"](r1_UPWARD)["to-outline"]());
    }), r1_isAboveMark = function(r418_mark) {
        var r418_mark;
        return r418_mark && r418_mark.anchors && r418_mark.anchors.above && r418_mark.anchors.above.type === r1_MARK;
    }, _r1_t0 = 160, _r1_t1 = 65535, r1_code = _r1_t0; _r1_t1 > r1_code; r1_code += 1) if (r1_unicodeGlyphs[r1_code]) _r1_t173 = void 0; else {
        if (r1_str = String.fromCharCode(r1_code), r1_nfd = r1_str.normalize("NFD"), r1_nfd.length > 1) {
            for (r1_parts = [], r1_allFound = !0, r1_hasMarkAbove = !1, _r1_t2 = 0, _r1_t3 = r1_nfd.length, 
            r1_j = _r1_t2; _r1_t3 > r1_j; r1_j += 1) r1_parts[r1_j] = r1_unicodeGlyphs[r1_nfd.charCodeAt(r1_j)], 
            _r1_t180 = r1_parts[r1_j] ? void 0 : r1_allFound = !1, _r1_t181 = r1_isAboveMark(r1_parts[r1_j]) ? r1_hasMarkAbove = !0 : void 0;
            r1_allFound && (_r1_t183 = r1_parts[0] === r1_glyphs.i && r1_hasMarkAbove ? r1_parts[0] = r1_glyphs.dotlessi : void 0, 
            _r1_t184 = r1_parts[0] === r1_glyphs.j && r1_hasMarkAbove ? r1_parts[0] = r1_glyphs.dotlessj : void 0, 
            _r1_t182 = r1_xn$createglyph$7Hrq(r1_parts.map(function(r421_part) {
                var r421_part;
                return r421_part.name;
            }).join("_"), function() {
                var r423_currentGlyph, r423_xn$setwidth$9Jrj, r423_xn$assignunicode$7Hrq, r423_xn$startfrom$1aao, r423_xn$lineto$5sIl, r423_xn$curveto$1aao, r423_xn$cubicto$1aao, r423_xn$putshapes$9Jrj, r423_xn$reverselast$3qIs, r423_include, r423_xn$createstroke$7Hrq, r423_xn$setanchor$9Jrj, r423_part, _r423_t0, _r423_t1, _r423_t2, _r423_t3;
                for (_r423_t3 = this, r423_currentGlyph = _r423_t3, r423_xn$setwidth$9Jrj = _r423_t3["set-width"].bind(_r423_t3), 
                r423_xn$assignunicode$7Hrq = function(r424_code) {
                    var r424_code;
                    return r423_currentGlyph["assign-unicode"](r424_code), r1_unicodeGlyphs[r423_currentGlyph.unicode[r423_currentGlyph.unicode.length - 1]] = r423_currentGlyph;
                }, r423_xn$startfrom$1aao = _r423_t3["start-from"].bind(_r423_t3), r423_xn$lineto$5sIl = _r423_t3["line-to"].bind(_r423_t3), 
                r423_xn$curveto$1aao = _r423_t3["curve-to"].bind(_r423_t3), r423_xn$cubicto$1aao = _r423_t3["cubic-to"].bind(_r423_t3), 
                r423_xn$putshapes$9Jrj = _r423_t3["put-shapes"].bind(_r423_t3), r423_xn$reverselast$3qIs = _r423_t3["reverse-last"].bind(_r423_t3), 
                r423_include = _r423_t3.include.bind(_r423_t3), r423_xn$createstroke$7Hrq = _r423_t3["create-stroke"].bind(_r423_t3), 
                r423_xn$setanchor$9Jrj = _r423_t3["set-anchor"].bind(_r423_t3), _r423_t3.gizmo = r1_globalTransform, 
                _r423_t3["set-width"](r1_WIDTH), r423_xn$assignunicode$7Hrq(r1_code), r423_include(r1_parts[0], r1_BASE), 
                _r423_t0 = r1_parts.slice(1), _r423_t1 = _r423_t0.length, _r423_t2 = 0; _r423_t1 > _r423_t2; _r423_t2 += 1) r423_part = _r423_t0[_r423_t2], 
                r423_include(r423_part);
                return void 0;
            })), _r1_t174 = _r1_t182;
        }
        _r1_t173 = _r1_t174;
    }
    return r1_xn$createglyph$7Hrq("grave", function() {
        var r427_currentGlyph, r427_xn$setwidth$9Jrj, r427_xn$assignunicode$7Hrq, r427_xn$startfrom$1aao, r427_xn$lineto$5sIl, r427_xn$curveto$1aao, r427_xn$cubicto$1aao, r427_xn$putshapes$9Jrj, r427_xn$reverselast$3qIs, r427_include, r427_xn$createstroke$7Hrq, r427_xn$setanchor$9Jrj, _r427_t0;
        return _r427_t0 = this, r427_currentGlyph = _r427_t0, r427_xn$setwidth$9Jrj = _r427_t0["set-width"].bind(_r427_t0), 
        r427_xn$assignunicode$7Hrq = function(r428_code) {
            var r428_code;
            return r427_currentGlyph["assign-unicode"](r428_code), r1_unicodeGlyphs[r427_currentGlyph.unicode[r427_currentGlyph.unicode.length - 1]] = r427_currentGlyph;
        }, r427_xn$startfrom$1aao = _r427_t0["start-from"].bind(_r427_t0), r427_xn$lineto$5sIl = _r427_t0["line-to"].bind(_r427_t0), 
        r427_xn$curveto$1aao = _r427_t0["curve-to"].bind(_r427_t0), r427_xn$cubicto$1aao = _r427_t0["cubic-to"].bind(_r427_t0), 
        r427_xn$putshapes$9Jrj = _r427_t0["put-shapes"].bind(_r427_t0), r427_xn$reverselast$3qIs = _r427_t0["reverse-last"].bind(_r427_t0), 
        r427_include = _r427_t0.include.bind(_r427_t0), r427_xn$createstroke$7Hrq = _r427_t0["create-stroke"].bind(_r427_t0), 
        r427_xn$setanchor$9Jrj = _r427_t0["set-anchor"].bind(_r427_t0), _r427_t0.gizmo = r1_globalTransform, 
        _r427_t0["set-width"](r1_WIDTH), r427_xn$assignunicode$7Hrq("`"), r427_include(r1_glyphs.space, r1_BASE), 
        void r427_include(r1_glyphs.graveAbove);
    }), r1_xn$createglyph$7Hrq("acute", function() {
        var r430_currentGlyph, r430_xn$setwidth$9Jrj, r430_xn$assignunicode$7Hrq, r430_xn$startfrom$1aao, r430_xn$lineto$5sIl, r430_xn$curveto$1aao, r430_xn$cubicto$1aao, r430_xn$putshapes$9Jrj, r430_xn$reverselast$3qIs, r430_include, r430_xn$createstroke$7Hrq, r430_xn$setanchor$9Jrj, _r430_t0;
        return _r430_t0 = this, r430_currentGlyph = _r430_t0, r430_xn$setwidth$9Jrj = _r430_t0["set-width"].bind(_r430_t0), 
        r430_xn$assignunicode$7Hrq = function(r431_code) {
            var r431_code;
            return r430_currentGlyph["assign-unicode"](r431_code), r1_unicodeGlyphs[r430_currentGlyph.unicode[r430_currentGlyph.unicode.length - 1]] = r430_currentGlyph;
        }, r430_xn$startfrom$1aao = _r430_t0["start-from"].bind(_r430_t0), r430_xn$lineto$5sIl = _r430_t0["line-to"].bind(_r430_t0), 
        r430_xn$curveto$1aao = _r430_t0["curve-to"].bind(_r430_t0), r430_xn$cubicto$1aao = _r430_t0["cubic-to"].bind(_r430_t0), 
        r430_xn$putshapes$9Jrj = _r430_t0["put-shapes"].bind(_r430_t0), r430_xn$reverselast$3qIs = _r430_t0["reverse-last"].bind(_r430_t0), 
        r430_include = _r430_t0.include.bind(_r430_t0), r430_xn$createstroke$7Hrq = _r430_t0["create-stroke"].bind(_r430_t0), 
        r430_xn$setanchor$9Jrj = _r430_t0["set-anchor"].bind(_r430_t0), _r430_t0.gizmo = r1_globalTransform, 
        _r430_t0["set-width"](r1_WIDTH), r430_xn$assignunicode$7Hrq(180), r430_include(r1_glyphs.space, r1_BASE), 
        void r430_include(r1_glyphs.acuteAbove);
    }), r1_xn$createglyph$7Hrq("asciicircum", function() {
        var r433_currentGlyph, r433_xn$setwidth$9Jrj, r433_xn$assignunicode$7Hrq, r433_xn$startfrom$1aao, r433_xn$lineto$5sIl, r433_xn$curveto$1aao, r433_xn$cubicto$1aao, r433_xn$putshapes$9Jrj, r433_xn$reverselast$3qIs, r433_include, r433_xn$createstroke$7Hrq, r433_xn$setanchor$9Jrj, _r433_t0;
        return _r433_t0 = this, r433_currentGlyph = _r433_t0, r433_xn$setwidth$9Jrj = _r433_t0["set-width"].bind(_r433_t0), 
        r433_xn$assignunicode$7Hrq = function(r434_code) {
            var r434_code;
            return r433_currentGlyph["assign-unicode"](r434_code), r1_unicodeGlyphs[r433_currentGlyph.unicode[r433_currentGlyph.unicode.length - 1]] = r433_currentGlyph;
        }, r433_xn$startfrom$1aao = _r433_t0["start-from"].bind(_r433_t0), r433_xn$lineto$5sIl = _r433_t0["line-to"].bind(_r433_t0), 
        r433_xn$curveto$1aao = _r433_t0["curve-to"].bind(_r433_t0), r433_xn$cubicto$1aao = _r433_t0["cubic-to"].bind(_r433_t0), 
        r433_xn$putshapes$9Jrj = _r433_t0["put-shapes"].bind(_r433_t0), r433_xn$reverselast$3qIs = _r433_t0["reverse-last"].bind(_r433_t0), 
        r433_include = _r433_t0.include.bind(_r433_t0), r433_xn$createstroke$7Hrq = _r433_t0["create-stroke"].bind(_r433_t0), 
        r433_xn$setanchor$9Jrj = _r433_t0["set-anchor"].bind(_r433_t0), _r433_t0.gizmo = r1_globalTransform, 
        _r433_t0["set-width"](r1_WIDTH), r433_xn$setwidth$9Jrj(r1_WIDTH), r433_xn$assignunicode$7Hrq(94), 
        r433_include(r1_glyphs.space, r1_BASE), void r433_include(r1_glyphs.circumflexAbove);
    }), r1_xn$createglyph$7Hrq("asciitilde", function() {
        var r436_currentGlyph, r436_xn$setwidth$9Jrj, r436_xn$assignunicode$7Hrq, r436_xn$startfrom$1aao, r436_xn$lineto$5sIl, r436_xn$curveto$1aao, r436_xn$cubicto$1aao, r436_xn$putshapes$9Jrj, r436_xn$reverselast$3qIs, r436_include, r436_xn$createstroke$7Hrq, r436_xn$setanchor$9Jrj, _r436_t0;
        return _r436_t0 = this, r436_currentGlyph = _r436_t0, r436_xn$setwidth$9Jrj = _r436_t0["set-width"].bind(_r436_t0), 
        r436_xn$assignunicode$7Hrq = function(r437_code) {
            var r437_code;
            return r436_currentGlyph["assign-unicode"](r437_code), r1_unicodeGlyphs[r436_currentGlyph.unicode[r436_currentGlyph.unicode.length - 1]] = r436_currentGlyph;
        }, r436_xn$startfrom$1aao = _r436_t0["start-from"].bind(_r436_t0), r436_xn$lineto$5sIl = _r436_t0["line-to"].bind(_r436_t0), 
        r436_xn$curveto$1aao = _r436_t0["curve-to"].bind(_r436_t0), r436_xn$cubicto$1aao = _r436_t0["cubic-to"].bind(_r436_t0), 
        r436_xn$putshapes$9Jrj = _r436_t0["put-shapes"].bind(_r436_t0), r436_xn$reverselast$3qIs = _r436_t0["reverse-last"].bind(_r436_t0), 
        r436_include = _r436_t0.include.bind(_r436_t0), r436_xn$createstroke$7Hrq = _r436_t0["create-stroke"].bind(_r436_t0), 
        r436_xn$setanchor$9Jrj = _r436_t0["set-anchor"].bind(_r436_t0), _r436_t0.gizmo = r1_globalTransform, 
        _r436_t0["set-width"](r1_WIDTH), r436_xn$setwidth$9Jrj(r1_WIDTH), r436_xn$assignunicode$7Hrq("~"), 
        r436_include(r1_glyphs.space, r1_BASE), void r436_include(r1_glyphs.tildeAbove);
    }), r1_xn$createglyph$7Hrq("latin1dieresis", function() {
        var r439_currentGlyph, r439_xn$setwidth$9Jrj, r439_xn$assignunicode$7Hrq, r439_xn$startfrom$1aao, r439_xn$lineto$5sIl, r439_xn$curveto$1aao, r439_xn$cubicto$1aao, r439_xn$putshapes$9Jrj, r439_xn$reverselast$3qIs, r439_include, r439_xn$createstroke$7Hrq, r439_xn$setanchor$9Jrj, _r439_t0;
        return _r439_t0 = this, r439_currentGlyph = _r439_t0, r439_xn$setwidth$9Jrj = _r439_t0["set-width"].bind(_r439_t0), 
        r439_xn$assignunicode$7Hrq = function(r440_code) {
            var r440_code;
            return r439_currentGlyph["assign-unicode"](r440_code), r1_unicodeGlyphs[r439_currentGlyph.unicode[r439_currentGlyph.unicode.length - 1]] = r439_currentGlyph;
        }, r439_xn$startfrom$1aao = _r439_t0["start-from"].bind(_r439_t0), r439_xn$lineto$5sIl = _r439_t0["line-to"].bind(_r439_t0), 
        r439_xn$curveto$1aao = _r439_t0["curve-to"].bind(_r439_t0), r439_xn$cubicto$1aao = _r439_t0["cubic-to"].bind(_r439_t0), 
        r439_xn$putshapes$9Jrj = _r439_t0["put-shapes"].bind(_r439_t0), r439_xn$reverselast$3qIs = _r439_t0["reverse-last"].bind(_r439_t0), 
        r439_include = _r439_t0.include.bind(_r439_t0), r439_xn$createstroke$7Hrq = _r439_t0["create-stroke"].bind(_r439_t0), 
        r439_xn$setanchor$9Jrj = _r439_t0["set-anchor"].bind(_r439_t0), _r439_t0.gizmo = r1_globalTransform, 
        _r439_t0["set-width"](r1_WIDTH), r439_xn$setwidth$9Jrj(r1_WIDTH), r439_xn$assignunicode$7Hrq(168), 
        r439_include(r1_glyphs.space, r1_BASE), void r439_include(r1_glyphs.dieresisAbove);
    }), r1_font;
};