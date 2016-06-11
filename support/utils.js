'use strict';
var r1_mix, r1_linreg, r1_clamp, r1_fallback, r1_TempFont, r1_includeGlyphPart, r1_compsiteMarkSet, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12, r1_Anchor = require('./anchor');
exports.mix = r1_mix = function _r1_t6(r120_a, r120_b, r120_p) {
    return r120_a + (r120_b - r120_a) * r120_p;
}, exports.linreg = r1_linreg = function _r1_t7(r122_x0, r122_y0, r122_x1, r122_y1, r122_x) {
    return r122_y0 + (r122_x - r122_x0) * (r122_y1 - r122_y0) / (r122_x1 - r122_x0);
}, exports.clamp = r1_clamp = function _r1_t8(r124_l, r124_h, r124_x) {
    return r124_x < r124_l ? r124_l : r124_x > r124_h ? r124_h : r124_x;
}, exports.fallback = r1_fallback = function _r1_t9() {
    var _r126_t1 = arguments, r126_j = 0;
    for (; r126_j < arguments.length; r126_j += 1)
        if (_r126_t1[r126_j] !== void 0)
            return _r126_t1[r126_j];
    return void 0;
}, exports.TempFont = r1_TempFont = function _r1_t10() {
    return {
        'glyf': [],
        'head': {},
        'hhea': {},
        'OS_2': { 'panose': [] },
        'name': {},
        'post': {}
    };
}, exports.includeGlyphPart = r1_includeGlyphPart = function _r1_t11(r130_cg, r130_gs, r130_nm) {
    var _r130_t1 = arguments;
    if (!r130_gs[r130_nm])
        throw new Error('Glyph ' + r130_nm + ' is not defined, which is used for ' + r130_cg.name + '.');
    return r130_cg.include.apply(r130_cg, [r130_gs[r130_nm]].concat([].slice.call(_r130_t1, 3)));
}, exports.compsiteMarkSet = r1_compsiteMarkSet = function _r1_t12() {
    var r132_a, r132_k, _r132_t3, _r132_t4, _r132_t5, _r132_t7 = arguments, r132_h = {}, _r132_t0 = _r132_t7, _r132_t1 = _r132_t0.length, _r132_t2 = 0;
    for (; _r132_t2 < _r132_t1; _r132_t2 += 1)
        for (r132_a = _r132_t0[_r132_t2], _r132_t3 = Object.keys(r132_a.anchors), _r132_t4 = _r132_t3.length, _r132_t5 = 0; _r132_t5 < _r132_t4; _r132_t5 += 1)
            r132_k = _r132_t3[_r132_t5], r132_h[r132_k] = new r1_Anchor(r132_a.anchors[r132_k].x, r132_a.anchors[r132_k].y, r132_a.anchors[r132_k].type, r132_a.anchors[r132_k].mbx, r132_a.anchors[r132_k].mby);
    return { 'anchors': r132_h };
};
