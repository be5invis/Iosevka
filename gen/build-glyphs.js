'use strict';
var r1_buildFont, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t13, _r1_t14, _r1_t15, _r1_t16, _r1_t17;
var r1_Glyph = require('../support/glyph');
var r1_Point = require('../support/point');
var r1_spirokit = require('../support/spirokit');
var _r1_t8 = require('../support/transform');
var r1_Transform = _r1_t8;
var r1_tp = _r1_t8.transformPoint;
var r1_utp = _r1_t8.untransform;
var r1_inverse = _r1_t8.inverse;
var r1_Anchor = require('../support/anchor');
var r1_smoothreg = require('../support/monotonic-interpolate');
var r1_fairify = require('../support/fairify');
var _r1_t9 = require('../support/utils');
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var r1_TempFont = _r1_t9.TempFont;
var r1_includeGlyphPart = _r1_t9.includeGlyphPart;
var r1_compsiteMarkSet = _r1_t9.compsiteMarkSet;
var _r1_t10 = require('../meta/aesthetics');
var r1_calculateMetrics = _r1_t10.calculateMetrics;
var r1_setFontMetrics = _r1_t10.setFontMetrics;
var _r1_t11 = require('../meta/naming');
var r1_assignFontNames = _r1_t11.assignFontNames;
var r1_Features = require('../meta/features');
var _r1_class12 = function _r1_t13(r161_x, r161_y) {
    var _r161_t0 = this;
    _r161_t0.x = r161_x;
    _r161_t0.y = r161_y;
    return void 0;
};
var r1_xn$NamedParameterPair$2Lrc9b = function _r1_t14(r257_l, r257_r) {
    var _r257_t0 = this;
    _r257_t0.left = r257_l;
    _r257_t0.right = r257_r;
    return _r257_t0;
};
var r1_xn$donothing$2Lrc0b = function _r1_t15() {
    return void 0;
};
var r1_tagged = function _r1_t16(r259_tag, r259_component) {
    r259_component.tag = r259_tag;
    return r259_component;
};
exports.build = r1_buildFont = function _r1_t17(r261_para, r261_recursive, r261_recursiveCodes) {
    var _r261_t4, _r261_t11, _r261_t12;
    var _r261_t5 = this;
    var r261_variantSelector = r261_para.variantSelector;
    var r261_font = _r261_t5;
    var r261_glyphList = r261_font.glyf;
    var r261_glyphs = {};
    var r261_unicodeGlyphs = [];
    var r261_metrics = r1_calculateMetrics(r261_para);
    var _r261_t0 = r261_metrics;
    var r261_globalTransform = _r261_t0.globalTransform;
    var r261_UPM = _r261_t0.UPM;
    var r261_MIDDLE = _r261_t0.MIDDLE;
    var r261_CAP = _r261_t0.CAP;
    var r261_XH = _r261_t0.XH;
    var r261_SB = _r261_t0.SB;
    var r261_RIGHTSB = _r261_t0.RIGHTSB;
    var r261_CONTRAST = _r261_t0.CONTRAST;
    var r261_STROKE = _r261_t0.STROKE;
    var r261_SUPERNESS = _r261_t0.SUPERNESS;
    var r261_WIDTH = _r261_t0.WIDTH;
    var r261_TANSLANT = _r261_t0.TANSLANT;
    var r261_OVERLAYPOS = _r261_t0.OVERLAYPOS;
    var r261_DESCENDER = _r261_t0.DESCENDER;
    var r261_MVERTSTROKE_D = _r261_t0.MVERTSTROKE_D;
    var r261_symbolMid = _r261_t0.symbolMid;
    var r261_parenTop = _r261_t0.parenTop;
    var r261_parenBot = _r261_t0.parenBot;
    var r261_operTop = _r261_t0.operTop;
    var r261_operBot = _r261_t0.operBot;
    var r261_plusTop = _r261_t0.plusTop;
    var r261_plusBot = _r261_t0.plusBot;
    var r261_tackTop = _r261_t0.tackTop;
    var r261_tackBot = _r261_t0.tackBot;
    var r261_adviceBlackness = _r261_t0.adviceBlackness;
    var _r261_t1 = r1_Anchor;
    var r261_MARK = _r261_t1.MARK;
    var r261_BASE = _r261_t1.BASE;
    var _r261_t2 = [
        'AS-BASE',
        'ALSO-METRICS'
    ];
    var r261_AS_BASE = _r261_t2[0];
    var r261_ALSO_METRICS = _r261_t2[1];
    var r261_MarksetDiv = function _r261_t8(r263_p) {
        var r263_middle = r263_p * r261_MIDDLE;
        var r263_rightSB = r261_WIDTH * r263_p - r261_SB;
        var r263_ta = function _r263_t2(r264_anchor) {
            return new r1_Anchor(r264_anchor.x * r261_globalTransform.xx + r264_anchor.y * r261_TANSLANT + r261_globalTransform.x, r264_anchor.x * r261_globalTransform.xy + r264_anchor.y * r261_globalTransform.yy + r261_globalTransform.y, r264_anchor.type);
        };
        var r263_markAboveLower = { 'anchors': { 'above': r263_ta(new r1_Anchor(r263_middle, r261_XH, r261_BASE)) } };
        var r263_markAboveOper = { 'anchors': { 'above': r263_ta(new r1_Anchor(r263_middle, r261_operTop, r261_BASE)) } };
        var r263_markAboveTack = { 'anchors': { 'above': r263_ta(new r1_Anchor(r263_middle, r261_tackTop, r261_BASE)) } };
        var r263_markAbovePlus = { 'anchors': { 'above': r263_ta(new r1_Anchor(r263_middle, r261_plusTop, r261_BASE)) } };
        var r263_markAboveCap = { 'anchors': { 'above': r263_ta(new r1_Anchor(r263_middle, r261_CAP, r261_BASE)) } };
        var r263_markBelowLower = { 'anchors': { 'below': r263_ta(new r1_Anchor(r263_middle, r261_DESCENDER, r261_BASE)) } };
        var r263_markBelowTack = { 'anchors': { 'below': r263_ta(new r1_Anchor(r263_middle, r261_tackBot, r261_BASE)) } };
        var r263_markBelowOper = { 'anchors': { 'below': r263_ta(new r1_Anchor(r263_middle, r261_operBot, r261_BASE)) } };
        var r263_markBelowPlus = { 'anchors': { 'below': r263_ta(new r1_Anchor(r263_middle, r261_plusBot, r261_BASE)) } };
        var r263_markBelowZero = { 'anchors': { 'below': r263_ta(new r1_Anchor(r263_middle, 0, r261_BASE)) } };
        var r263_markToprightLower = { 'anchors': { 'topright': r263_ta(new r1_Anchor(r263_rightSB, r261_XH, r261_BASE)) } };
        var r263_markToprightCap = { 'anchors': { 'topright': r263_ta(new r1_Anchor(r263_rightSB, r261_CAP, r261_BASE)) } };
        var r263_markBottomrightLower = { 'anchors': { 'bottomright': r263_ta(new r1_Anchor(r263_rightSB, r261_DESCENDER, r261_BASE)) } };
        var r263_markBottomrightZero = { 'anchors': { 'bottomright': r263_ta(new r1_Anchor(r263_rightSB, 0, r261_BASE)) } };
        var r263_buildStandardMarkSet = function _r263_t3() {
            var _r265_t1 = arguments;
            var r265_a = r1_compsiteMarkSet.apply(null, _r265_t1);
            r265_a.anchors.overlay = new r1_Anchor(r1_mix(r265_a.anchors.below.x, r265_a.anchors.above.x, r261_OVERLAYPOS), r1_mix(r265_a.anchors.below.y, r265_a.anchors.above.y, r261_OVERLAYPOS), r261_BASE);
            r265_a.anchors.slash = new r1_Anchor(r1_mix(r265_a.anchors.below.x, r265_a.anchors.above.x, 0.5), r1_mix(r265_a.anchors.below.y, r265_a.anchors.above.y, 0.5), r261_BASE);
            return r265_a;
        };
        return {
            'capital': r263_buildStandardMarkSet(r263_markAboveCap, r263_markBelowZero, r263_markToprightCap, r263_markBottomrightZero),
            'b': r263_buildStandardMarkSet(r263_markAboveCap, r263_markBelowZero, r263_markToprightCap, r263_markBottomrightZero),
            'e': r263_buildStandardMarkSet(r263_markAboveLower, r263_markBelowZero, r263_markToprightLower, r263_markBottomrightZero),
            'oper': r263_buildStandardMarkSet(r263_markAboveOper, r263_markBelowOper, r263_markToprightLower, r263_markBottomrightZero),
            'tack': r263_buildStandardMarkSet(r263_markAboveTack, r263_markBelowTack, r263_markToprightLower, r263_markBottomrightZero),
            'plus': r263_buildStandardMarkSet(r263_markAbovePlus, r263_markBelowPlus, r263_markToprightLower, r263_markBottomrightZero),
            'p': r263_buildStandardMarkSet(r263_markAboveLower, r263_markBelowLower, r263_markToprightLower, r263_markBottomrightLower),
            'if': r263_buildStandardMarkSet(r263_markAboveCap, r263_markBelowLower, r263_markToprightCap, r263_markBottomrightLower)
        };
    };
    var r261_markset = r261_MarksetDiv(1);
    var r261_DivFrame = function _r261_t9(r266__div, r266__hPack) {
        var r266_div = r1_fallback(r266__div, 1);
        var r266_hPack = Math.max(2, r1_fallback(r266__hPack, 0));
        var r266_sbMul = Math.min(1, (r261_WIDTH * r266_div - r266_hPack * r261_adviceBlackness(r266_hPack, r266_div)) / (2 * r266_hPack * r261_SB));
        return {
            'div': r266_div,
            'width': r261_WIDTH * r266_div,
            'middle': r261_MIDDLE * r266_div,
            'sb': r261_SB * r266_sbMul,
            'leftSB': r261_SB * r266_sbMul,
            'rightSB': r261_WIDTH * r266_div - r261_SB * r266_sbMul,
            'mvs': r261_MVERTSTROKE_D(r266_div),
            'markSet': r261_MarksetDiv(r266_div)
        };
    };
    var r261_dependencyProfile = {};
    var r261_nTemp = 0;
    var r261_newtemp = function _r261_t10() {
        return r261_nTemp = r261_nTemp + 1;
    };
    var r261_nPending = 0;
    if (r261_recursive) {
        _r261_t12 = {};
        _r261_t11 = function (_r261_leti3) {
            var r268_j;
            var r268_h = _r261_leti3;
            var _r268_t0 = r261_recursive;
            var _r268_t1 = _r268_t0.length;
            var _r268_t2 = 0;
            for (; _r268_t2 < _r268_t1; _r268_t2 = _r268_t2 + 1) {
                r268_j = _r268_t0[_r268_t2];
                r268_h[r268_j] = r268_j;
            }
            r261_nPending = r261_recursive.length;
            return r268_h;
        }(_r261_t12);
    } else
        _r261_t11 = void 0;
    var r261_pickHash = _r261_t11;
    var r261_getDependencyProfile = function _r261_t15(r270_glyph) {
        var r270_d, r270_k, _r270_t3, _r270_t4, _r270_t5;
        var r270_dp = [];
        var _r270_t0 = r270_glyph.dependencies;
        var _r270_t1 = _r270_t0.length;
        var _r270_t2 = 0;
        for (; _r270_t2 < _r270_t1; _r270_t2 = _r270_t2 + 1) {
            r270_d = _r270_t0[_r270_t2];
            r270_dp.push(r270_d);
            if (r261_dependencyProfile[r270_d]) {
                _r270_t3 = r261_dependencyProfile[r270_d];
                _r270_t4 = _r270_t3.length;
                _r270_t5 = 0;
                for (; _r270_t5 < _r270_t4; _r270_t5 = _r270_t5 + 1) {
                    r270_k = _r270_t3[_r270_t5];
                    r270_dp.push(r270_k);
                }
            }
        }
        return r270_dp;
    };
    var r261_xn$createglyph$7Hrq = function _r261_t16() {
        var r274_actions, r274_glyphName, r274_glyphObject, r274_name;
        var _r274_t2 = arguments;
        var _r274_t0 = Array.prototype.slice.call(_r274_t2, 0);
        if (Array.isArray(_r274_t0) && _r274_t0.length === 2) {
            r274_name = _r274_t0[0];
            r274_actions = _r274_t0[1];
            if (r261_pickHash && !r261_pickHash[r274_name])
                return void 0;
            if (r261_para.verbose)
                console.log(r274_name);
            r274_glyphObject = new r1_Glyph(r274_name);
            r261_glyphList.push(r274_glyphObject);
            r261_glyphs[r274_name] = r274_glyphObject;
            r274_glyphObject['set-width'](r261_WIDTH);
            r274_glyphObject.gizmo = r261_globalTransform;
            r274_actions.call(r274_glyphObject);
            r261_dependencyProfile[r274_name] = r261_getDependencyProfile(r274_glyphObject);
            r261_nPending = r261_nPending - 1;
            return r274_glyphObject;
        } else if (Array.isArray(_r274_t0) && _r274_t0.length === 1) {
            r274_actions = _r274_t0[0];
            r274_glyphName = '.temp-' + r261_newtemp();
            if (r261_para.verbose)
                console.log(r274_glyphName);
            r274_glyphObject = new r1_Glyph(r274_glyphName);
            r274_glyphObject['set-width'](r261_WIDTH);
            r274_glyphObject.gizmo = r261_globalTransform;
            r274_actions.call(r274_glyphObject);
            return r274_glyphObject;
        } else
            return void 0;
    };
    var r261_xn$save$2Lrc5 = function _r261_t17(r275__name, r275_unicode) {
        var _r275_t0 = this;
        var r275_t = _r275_t0;
        var r275_name = !r275__name ? '--autoname-' + r261_newtemp() : r275__name;
        var r275_g = r261_xn$createglyph$7Hrq(r275_name, function _r275_t2() {
            return void 0;
        });
        if (r275_g) {
            r275_g.include(r275_t, r261_AS_BASE);
            if (r275_t instanceof r1_Glyph) {
                r275_g.advanceWidth = r275_t.advanceWidth;
                r275_g.shortName = r275_t.shortName;
                r275_g.cmpPriority = r275_t.cmpPriority;
                r275_g.flatten = r275_t.flatten;
            }
            if (r275_name)
                r261_dependencyProfile[r275_name] = r261_getDependencyProfile(r275_g);
        }
        if (r275_g && r275_unicode) {
            r275_g['assign-unicode'](r275_unicode);
            r261_unicodeGlyphs[r275_g.unicode[r275_g.unicode.length - 1]] = r275_g;
        }
        return r275_g;
    };
    var r261_xn$saveglyph$5sIl = function _r261_t18(r277_name, r277_unicode, r277_g) {
        return r261_xn$save$2Lrc5.call(r277_g, r277_name, r277_unicode);
    };
    var r261_spirofns = r1_spirokit.SetupBuilders({
        'globalTransform': r261_globalTransform,
        'CONTRAST': r261_CONTRAST,
        'STROKE': r261_STROKE,
        'Glyph': r1_Glyph,
        'para': r261_para,
        'SUPERNESS': r261_SUPERNESS
    });
    r1_assignFontNames(r261_para, r261_metrics, r261_font);
    r1_setFontMetrics(r261_para, r261_metrics, r261_font);
    (function _r261_t19() {
        var _r279_t0 = this;
        var r279_currentGlyph = _r279_t0;
        if (!r279_currentGlyph)
            return void 0;
        if (r261_glyphList[r261_glyphList.length - 1].name === '.WF.gen/build-glyphs.ptl.1')
            r261_glyphList.pop();
        r279_currentGlyph['start-from'](r261_SB, 0);
        r279_currentGlyph['line-to'](r261_SB, r261_CAP);
        r279_currentGlyph['line-to'](r261_RIGHTSB, r261_CAP);
        r279_currentGlyph['line-to'](r261_RIGHTSB, 0);
        r279_currentGlyph['start-from'](r261_SB + r261_STROKE, r261_STROKE);
        r279_currentGlyph['line-to'](r261_RIGHTSB - r261_STROKE, r261_STROKE);
        r279_currentGlyph['line-to'](r261_RIGHTSB - r261_STROKE, r261_CAP - r261_STROKE);
        r279_currentGlyph['line-to'](r261_SB + r261_STROKE, r261_CAP - r261_STROKE);
        r279_currentGlyph.cmpPriority = 9999;
        r261_xn$save$2Lrc5.call(r279_currentGlyph, '.notdef');
        r261_dependencyProfile[r279_currentGlyph.name] = r261_getDependencyProfile(r279_currentGlyph);
        return r279_currentGlyph;
    }.call(r261_xn$createglyph$7Hrq('.WF.gen/build-glyphs.ptl.1', r1_xn$donothing$2Lrc0b)));
    (function _r261_t20() {
        var _r290_t0 = this;
        var r290_currentGlyph = _r290_t0;
        if (!r290_currentGlyph)
            return void 0;
        if (r261_glyphList[r261_glyphList.length - 1].name === '.WF.gen/build-glyphs.ptl.2')
            r261_glyphList.pop();
        r290_currentGlyph['set-width'](0);
        r290_currentGlyph.cmpPriority = 9998;
        r261_xn$save$2Lrc5.call(r290_currentGlyph, '.null');
        r261_dependencyProfile[r290_currentGlyph.name] = r261_getDependencyProfile(r290_currentGlyph);
        return r290_currentGlyph;
    }.call(r261_xn$createglyph$7Hrq('.WF.gen/build-glyphs.ptl.2', r1_xn$donothing$2Lrc0b)));
    (function _r261_t21() {
        var _r294_t0 = this;
        var r294_currentGlyph = _r294_t0;
        if (!r294_currentGlyph)
            return void 0;
        if (r261_glyphList[r261_glyphList.length - 1].name === '.WF.gen/build-glyphs.ptl.3')
            r261_glyphList.pop();
        r294_currentGlyph['set-width'](r261_WIDTH);
        r294_currentGlyph.cmpPriority = -1;
        r261_xn$save$2Lrc5.call(r294_currentGlyph, 'nonmarkingreturn', 13);
        r261_dependencyProfile[r294_currentGlyph.name] = r261_getDependencyProfile(r294_currentGlyph);
        return r294_currentGlyph;
    }.call(r261_xn$createglyph$7Hrq('.WF.gen/build-glyphs.ptl.3', r1_xn$donothing$2Lrc0b)));
    (function _r261_t22() {
        var _r298_t0 = this;
        var r298_currentGlyph = _r298_t0;
        if (!r298_currentGlyph)
            return void 0;
        if (r261_glyphList[r261_glyphList.length - 1].name === '.WF.gen/build-glyphs.ptl.4')
            r261_glyphList.pop();
        var r298_df = r261_DivFrame(r261_para.diversityF);
        r298_currentGlyph['set-width'](r298_df.width);
        r298_currentGlyph.include(r298_df.markSet.e);
        r261_xn$save$2Lrc5.call(r298_currentGlyph, 'space', ' ');
        r261_dependencyProfile[r298_currentGlyph.name] = r261_getDependencyProfile(r298_currentGlyph);
        return r298_currentGlyph;
    }.call(r261_xn$createglyph$7Hrq('.WF.gen/build-glyphs.ptl.4', r1_xn$donothing$2Lrc0b)));
    var r261_capture = {
        'metrics': Object.create(r261_metrics),
        '$NamedParameterPair$': r1_xn$NamedParameterPair$2Lrc9b,
        '$donothing$': r1_xn$donothing$2Lrc0b,
        'para': r261_para,
        'recursive': r261_recursive,
        'recursiveCodes': r261_recursiveCodes,
        'variantSelector': r261_variantSelector,
        'font': r261_font,
        'glyphs': r261_glyphs,
        'glyphList': r261_glyphList,
        'unicodeGlyphs': r261_unicodeGlyphs,
        'create-glyph': r261_xn$createglyph$7Hrq,
        '$save$': r261_xn$save$2Lrc5,
        'save-glyph': r261_xn$saveglyph$5sIl,
        'spirofns': r261_spirofns,
        'markset': r261_markset,
        'MARK': r261_MARK,
        'BASE': r261_BASE,
        'AS_BASE': r261_AS_BASE,
        'ALSO_METRICS': r261_ALSO_METRICS,
        'pickHash': r261_pickHash,
        'dependencyProfile': r261_dependencyProfile,
        'getDependencyProfile': r261_getDependencyProfile,
        'buildFont': r1_buildFont,
        'newtemp': r261_newtemp,
        'tagged': r1_tagged,
        'TempFont': r1_TempFont,
        'includeGlyphPart': r1_includeGlyphPart,
        'compsiteMarkSet': r1_compsiteMarkSet,
        'MarksetDiv': r261_MarksetDiv,
        'DivFrame': r261_DivFrame
    };
    r261_capture.commonShapes = require('../glyphs/common-shapes.js').apply.call(r261_capture);
    r261_capture.overmarks = require('../glyphs/overmarks.js').apply.call(r261_capture);
    r261_capture.letterBasic = require('../glyphs/letters-unified-basic.js').apply.call(r261_capture);
    r261_capture.letterExt = require('../glyphs/letters-unified-extended.js').apply.call(r261_capture);
    require('../glyphs/numbers.js').apply.call(r261_capture);
    require('../glyphs/symbol-punctuation.js').apply.call(r261_capture);
    r261_capture.geometricSymbols = require('../glyphs/symbol-geometric.js').apply.call(r261_capture);
    require('../glyphs/symbol-math.js').apply.call(r261_capture);
    require('../glyphs/symbol-letter.js').apply.call(r261_capture);
    require('../glyphs/symbol-braille.js').apply.call(r261_capture);
    require('../glyphs/symbol-mosaic.js').apply.call(r261_capture);
    require('../glyphs/symbol-other.js').apply.call(r261_capture);
    require('../glyphs/autobuilds.js').apply.call(r261_capture);
    if (!r261_recursive) {
        _r261_t4 = r1_Features.apply(r261_para, r261_glyphs, r261_glyphList, r261_unicodeGlyphs);
        r261_font.GSUB = _r261_t4.GSUB;
        r261_font.GPOS = _r261_t4.GPOS;
        r261_font.GDEF = _r261_t4.GDEF;
    }
    r261_font.glyfMap = r261_glyphs;
    return r261_font;
};
