'use strict';
var r1_SetupBuilders, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12;
var r1_SpiroJs = require('spiro');
var r1_SpiroExpansionContext = require('./spiroexpand');
var r1_CurveUtil = require('./curve-util');
var r1_Transform = require('./transform');
var r1_fallback = function _r1_t8() {
    var _r128_t3;
    var _r128_t1 = arguments;
    var r128_j = 0;
    var _r128_t2 = r128_j < _r128_t1.length;
    for (; _r128_t2; _r128_t2 = r128_j < _r128_t1.length) {
        if (_r128_t1[r128_j] !== void 0)
            return _r128_t1[r128_j];
        _r128_t3 = r128_j = r128_j + 1;
    }
    return _r128_t3;
};
var r1_mix = function _r1_t9(r129_a, r129_b, r129_p) {
    return r129_a + (r129_b - r129_a) * r129_p;
};
var r1_bez2 = function _r1_t10(r130_a, r130_b, r130_c, r130_t) {
    return (1 - r130_t) * (1 - r130_t) * r130_a + 2 * (1 - r130_t) * r130_t * r130_b + r130_t * r130_t * r130_c;
};
var r1_bez3 = function _r1_t11(r131_a, r131_b, r131_c, r131_d, r131_t) {
    return (1 - r131_t) * (1 - r131_t) * (1 - r131_t) * r131_a + 3 * (1 - r131_t) * (1 - r131_t) * r131_t * r131_b + 3 * r131_t * r131_t * (1 - r131_t) * r131_c + r131_t * r131_t * r131_t * r131_d;
};
exports.SetupBuilders = r1_SetupBuilders = function _r1_t12(r133_args) {
    var _r133_t0 = r133_args;
    var r133_para = _r133_t0.para;
    var r133_Glyph = _r133_t0.Glyph;
    var r133_Contrast = _r133_t0.Contrast;
    var r133_globalTransform = _r133_t0.globalTransform;
    var r133_Stroke = _r133_t0.Stroke;
    var r133_Superness = _r133_t0.Superness;
    var r133_g4 = function _r133_t8(r134_x, r134_y, r134_f) {
        return {
            'x': r134_x,
            'y': r134_y,
            'type': 'g4',
            'af': r134_f
        };
    };
    var r133_g2 = function _r133_t9(r135_x, r135_y, r135_f) {
        return {
            'x': r135_x,
            'y': r135_y,
            'type': 'g2',
            'af': r135_f
        };
    };
    var r133_corner = function _r133_t10(r136_x, r136_y, r136_f) {
        return {
            'x': r136_x,
            'y': r136_y,
            'type': 'corner',
            'af': r136_f
        };
    };
    var r133_flat = function _r133_t11(r137_x, r137_y, r137_f) {
        return {
            'x': r137_x,
            'y': r137_y,
            'type': 'left',
            'af': r137_f
        };
    };
    var r133_curl = function _r133_t12(r138_x, r138_y, r138_f) {
        return {
            'x': r138_x,
            'y': r138_y,
            'type': 'right',
            'af': r138_f
        };
    };
    var r133_close = function _r133_t13(r139_f) {
        return {
            'type': 'close',
            'af': r139_f
        };
    };
    var r133_end = function _r133_t14(r140_f) {
        return {
            'type': 'end',
            'af': r140_f
        };
    };
    var r133_straight = {
        'l': r133_flat,
        'r': r133_curl
    };
    var _r133_t15 = [
        {
            'name': 'up',
            'x': 0,
            'y': 1
        },
        {
            'name': 'down',
            'x': 0,
            'y': -1
        },
        {
            'name': 'left',
            'x': -1,
            'y': 0
        },
        {
            'name': 'right',
            'x': 1,
            'y': 0
        }
    ];
    var _r133_t16 = [
        {
            'name': 'start',
            'l': 0,
            'r': 0.01
        },
        {
            'name': 'mid',
            'l': -0.005,
            'r': 0.005
        },
        {
            'name': 'end',
            'l': -0.01,
            'r': 0
        }
    ];
    var _r133_t17 = [
        r133_g4,
        r133_g2,
        r133_corner,
        r133_straight
    ];
    (function (_r133_leti1, _r133_leti2, _r133_leti3) {
        var r141_direction, _r141_t5, _r141_t6;
        var r141_directions = _r133_leti1;
        var r141_adhensions = _r133_leti2;
        var r141_knottypes = _r133_leti3;
        var _r141_t0 = r141_directions;
        var _r141_t1 = _r141_t0.length;
        var _r141_t2 = 0;
        var _r141_t4 = _r141_t2 < _r141_t1;
        for (; _r141_t4; _r141_t4 = _r141_t2 < _r141_t1) {
            r141_direction = _r141_t0[_r141_t2];
            _r141_t6 = r141_direction;
            (function (_r141_leti3) {
                var r144_knottype, _r144_t5, _r144_t6;
                var r144_d = _r141_leti3;
                var _r144_t0 = r141_knottypes;
                var _r144_t1 = _r144_t0.length;
                var _r144_t2 = 0;
                var _r144_t4 = _r144_t2 < _r144_t1;
                for (; _r144_t4; _r144_t4 = _r144_t2 < _r144_t1) {
                    r144_knottype = _r144_t0[_r144_t2];
                    _r144_t6 = r144_knottype;
                    (function (_r144_leti3) {
                        var r147_adh, _r147_t5, _r147_t6;
                        var r147_kt = _r144_leti3;
                        r147_kt[r144_d.name] = {};
                        var _r147_t0 = r141_adhensions;
                        var _r147_t1 = _r147_t0.length;
                        var _r147_t2 = 0;
                        var _r147_t4 = _r147_t2 < _r147_t1;
                        for (; _r147_t4; _r147_t4 = _r147_t2 < _r147_t1) {
                            r147_adh = _r147_t0[_r147_t2];
                            _r147_t6 = r147_adh;
                            (function (_r147_leti3) {
                                var r150_a = _r147_leti3;
                                return r147_kt[r144_d.name][r150_a.name] = function _r150_t0(r151_x, r151_y, r151_f) {
                                    return [
                                        r1_fallback(r147_kt.l, r147_kt)(r151_x + r144_d.x * r150_a.l, r151_y + r144_d.y * r150_a.l, r151_f),
                                        r1_fallback(r147_kt.r, r147_kt)(r151_x + r144_d.x * r150_a.r, r151_y + r144_d.y * r150_a.r, r151_f)
                                    ];
                                };
                            }(_r147_t6));
                            _r147_t5 = _r147_t2 = _r147_t2 + 1;
                        }
                        return _r147_t5;
                    }(_r144_t6));
                    _r144_t5 = _r144_t2 = _r144_t2 + 1;
                }
                return _r144_t5;
            }(_r141_t6));
            _r141_t5 = _r141_t2 = _r141_t2 + 1;
        }
        return _r141_t5;
    }(_r133_t15, _r133_t16, _r133_t17));
    var r133_widths = function _r133_t20(r152_l, r152_r) {
        return function _r152_t2() {
            var _r153_t0 = this;
            return _r153_t0['set-width'](r152_l, r152_r);
        };
    };
    r133_widths.lhs = function _r133_t21(r154_w) {
        return r133_widths(r1_fallback(r154_w, r133_Stroke), 0);
    };
    r133_widths.rhs = function _r133_t22(r155_w) {
        return r133_widths(0, r1_fallback(r155_w, r133_Stroke));
    };
    r133_widths.center = function _r133_t23(r156_w) {
        return r133_widths(r1_fallback(r156_w, r133_Stroke) / 2, r1_fallback(r156_w, r133_Stroke) / 2);
    };
    var r133_xn$disablegizmo$3qIs = function _r133_t24() {
        return function _r157_t2() {
            var _r158_t0 = this;
            return _r158_t0.gizmo = r1_Transform.Id();
        };
    };
    var r133_xn$disablecontrast$3qIs = function _r133_t25() {
        return function _r159_t2() {
            var _r160_t0 = this;
            return _r160_t0.contrast = 1;
        };
    };
    var r133_heading = function _r133_t26(r161_d) {
        return function _r161_t2() {
            var _r162_t0 = this;
            return _r162_t0['heads-to'] ? _r162_t0['heads-to'](r161_d) : void 0;
        };
    };
    r133_widths.heading = function _r133_t27(r163_l, r163_r, r163_d) {
        return function _r163_t2() {
            var _r164_t0 = this;
            if (_r164_t0['set-width'])
                _r164_t0['set-width'](r163_l, r163_r);
            return _r164_t0['heads-to'] ? _r164_t0['heads-to'](r163_d) : void 0;
        };
    };
    r133_widths.lhs.heading = function _r133_t28(r165_w, r165_d) {
        return function _r165_t2() {
            var _r166_t0 = this;
            if (_r166_t0['set-width'])
                _r166_t0['set-width'](r1_fallback(r165_w, r133_Stroke), 0);
            return _r166_t0['heads-to'] ? _r166_t0['heads-to'](r165_d) : void 0;
        };
    };
    r133_widths.rhs.heading = function _r133_t29(r167_w, r167_d) {
        return function _r167_t2() {
            var _r168_t0 = this;
            if (_r168_t0['set-width'])
                _r168_t0['set-width'](0, r1_fallback(r167_w, r133_Stroke));
            return _r168_t0['heads-to'] ? _r168_t0['heads-to'](r167_d) : void 0;
        };
    };
    r133_widths.center.heading = function _r133_t30(r169_w, r169_d) {
        return function _r169_t2() {
            var _r170_t0 = this;
            if (_r170_t0['set-width'])
                _r170_t0['set-width'](r1_fallback(r169_w, r133_Stroke) / 2, r1_fallback(r169_w, r133_Stroke) / 2);
            return _r170_t0['heads-to'] ? _r170_t0['heads-to'](r169_d) : void 0;
        };
    };
    var r133_unimportant = function _r133_t31() {
        var _r171_t0 = this;
        if (_r171_t0.points && _r171_t0.points.length && _r171_t0.points[_r171_t0.points.length - 1])
            _r171_t0.points[_r171_t0.points.length - 1].subdivided = true;
        return _r171_t0.controlKnots && _r171_t0.controlKnots.length && _r171_t0.controlKnots[_r171_t0.controlKnots.length - 1] ? _r171_t0.controlKnots[_r171_t0.controlKnots.length - 1].unimportant = true : void 0;
    };
    var r133_important = function _r133_t32() {
        return void 0;
    };
    var r133_afInterpolate = function _r133_t33(r173_before, r173_after, r173_args) {
        return r133_g4(r1_mix(r173_before.x, r173_after.x, r173_args.rx), r1_mix(r173_before.y, r173_after.y, r173_args.ry), r1_fallback(r173_args.raf, r133_unimportant));
    };
    var r133_afInterpolateG2 = function _r133_t34(r174_before, r174_after, r174_args) {
        return r133_g2(r1_mix(r174_before.x, r174_after.x, r174_args.rx), r1_mix(r174_before.y, r174_after.y, r174_args.ry), r1_fallback(r174_args.raf, r133_unimportant));
    };
    var r133_afInterpolateThem = function _r133_t35(r175_before, r175_after, r175_args) {
        var r175_rx, r175_ry, r175_preserve, _r175_t3, _r175_t4;
        var r175_knots = [];
        var _r175_t0 = r175_args.rs;
        var _r175_t1 = _r175_t0.length;
        var _r175_t2 = 0;
        for (; _r175_t2 < _r175_t1; _r175_t2 = _r175_t2 + 1) {
            _r175_t3 = _r175_t0[_r175_t2];
            r175_rx = _r175_t3[0];
            r175_ry = _r175_t3[1];
            r175_preserve = _r175_t3[2];
            r175_knots.push(r1_fallback(r175_args.ty, r133_g2)(r1_mix(r175_before.x, r175_after.x, r175_rx), r1_mix(r175_before.y, r175_after.y, r175_ry), r1_fallback(r175_args.raf, (_r175_t4 = r175_preserve, 1 === _r175_t4 ? r175_before.af : 2 === _r175_t4 ? r175_after.af : r133_unimportant))));
        }
        return r175_knots;
    };
    var r133_alsoThru = function _r133_t36(r177_rx, r177_ry, r177_raf) {
        return {
            'type': 'interpolate',
            'rx': r177_rx,
            'ry': r177_ry,
            'raf': r177_raf,
            'af': r133_afInterpolate
        };
    };
    r133_alsoThru.g2 = function _r133_t37(r178_rx, r178_ry, r178_raf) {
        return {
            'type': 'interpolate',
            'rx': r178_rx,
            'ry': r178_ry,
            'raf': r178_raf,
            'af': r133_afInterpolateG2
        };
    };
    var r133_alsoThruThem = function _r133_t38(r179_rs, r179_raf, r179_ty) {
        return {
            'type': 'interpolate',
            'rs': r179_rs,
            'raf': r179_raf,
            'ty': r179_ty,
            'af': r133_afInterpolateThem
        };
    };
    var r133_bezcontrols = function _r133_t39(r180_x1, r180_y1, r180_x2, r180_y2, r180__samples, r180_raf, r180_ty) {
        var r180_samples = r1_fallback(r180__samples, 3);
        var r180_rs = [];
        var _r180_t0 = 1;
        var _r180_t1 = r180_samples;
        var r180_j = _r180_t0;
        for (; r180_j < _r180_t1; r180_j = r180_j + 1)
            r180_rs.push([
                r1_bez3(0, r180_x1, r180_x2, 1, r180_j / r180_samples),
                r1_bez3(0, r180_y1, r180_y2, 1, r180_j / r180_samples)
            ]);
        return r133_alsoThruThem(r180_rs, r180_raf, r180_ty);
    };
    var r133_quadcontrols = function _r133_t40(r182_x1, r182_y1, r182_samples, r182_raf, r182_ty) {
        return r133_bezcontrols(r182_x1 * 2 / 3, r182_y1 * 2 / 3, r1_mix(1, r182_x1, 2 / 3), r1_mix(1, r182_y1, 2 / 3), r182_samples, r182_raf, r182_ty);
    };
    r133_bezcontrols.absolute = function _r133_t41(r183_x1, r183_y1, r183_x2, r183_y2, r183__samples, r183_raf, r183_ty) {
        return {
            'type': 'interpolate',
            'af': function _r183_t2(r184_before, r184_after) {
                var r184_samples = r1_fallback(r183__samples, 3);
                var r184_rs = [];
                var _r184_t0 = 1;
                var _r184_t1 = r184_samples;
                var r184_j = _r184_t0;
                for (; r184_j < _r184_t1; r184_j = r184_j + 1)
                    r184_rs.push(r1_fallback(r183_ty, r133_g4)(r1_bez3(r184_before.x, r183_x1, r183_x2, r184_after.x, r184_j / r184_samples), r1_bez3(r184_before.y, r183_y1, r183_y2, r184_after.y, r184_j / r184_samples), r1_fallback(r183_raf, r133_unimportant)));
                return r184_rs;
            }
        };
    };
    var r133_DEFAULT_STEPS = 6;
    var _r133_t42 = [];
    var _r133_t4 = function (_r133_leti5) {
        var r186_cache = _r133_leti5;
        var r186_build = function _r186_t0(r187_samples, r187__superness) {
            var r187_theta, r187_c, r187_s;
            var r187_superness = r1_fallback(r187__superness, r133_Superness);
            var r187_hv = [];
            var r187_vh = [];
            var _r187_t0 = 1;
            var _r187_t1 = r187_samples;
            var r187_j = _r187_t0;
            for (; r187_j < _r187_t1; r187_j = r187_j + 1) {
                r187_theta = r187_j / r187_samples * Math.PI / 2;
                r187_c = Math.pow(Math.cos(r187_theta), 2 / r187_superness);
                r187_s = Math.pow(Math.sin(r187_theta), 2 / r187_superness);
                r187_hv.push([
                    r187_s,
                    1 - r187_c
                ]);
                r187_vh.push([
                    1 - r187_c,
                    r187_s
                ]);
            }
            return {
                'hv': r187_hv,
                'vh': r187_vh
            };
        };
        var r186_hv = function _r186_t1(r190_samples, r190__superness) {
            if (r190__superness)
                return r186_build(r190_samples, r190__superness).hv;
            if (!r186_cache[r190_samples])
                r186_cache[r190_samples] = r186_build(r190_samples, r190__superness);
            return r186_cache[r190_samples].hv;
        };
        var r186_vh = function _r186_t2(r191_samples, r191__superness) {
            if (r191__superness)
                return r186_build(r191_samples, r191__superness).vh;
            if (!r186_cache[r191_samples])
                r186_cache[r191_samples] = r186_build(r191_samples, r191__superness);
            return r186_cache[r191_samples].vh;
        };
        return [
            r186_hv,
            r186_vh
        ];
    }(_r133_t42);
    var r133_jhv = _r133_t4[0];
    var r133_jvh = _r133_t4[1];
    var r133_archv = function _r133_t45(r192_samples, r192_superness) {
        return r133_alsoThruThem(r133_jhv(r1_fallback(r192_samples, r133_DEFAULT_STEPS), r192_superness));
    };
    var r133_arcvh = function _r133_t46(r193_samples, r193_superness) {
        return r133_alsoThruThem(r133_jvh(r1_fallback(r193_samples, r133_DEFAULT_STEPS), r193_superness));
    };
    var r133_complexThru = function _r133_t47() {
        var _r194_t1 = arguments;
        var r194_a = [].slice.call(_r194_t1);
        return {
            'type': 'interpolate',
            'af': function _r194_t2(r195_before, r195_after, r195_args) {
                var r195_knot;
                var _r195_t3 = this;
                var r195_ks = [];
                var _r195_t0 = r194_a;
                var _r195_t1 = _r195_t0.length;
                var _r195_t2 = 0;
                for (; _r195_t2 < _r195_t1; _r195_t2 = _r195_t2 + 1) {
                    r195_knot = _r195_t0[_r195_t2];
                    r195_ks.push(r195_knot.af.call(_r195_t3, r195_before, r195_after, r195_knot));
                }
                return r195_ks;
            }
        };
    };
    var r133_flatten = function _r133_t48(r197_knots) {
        var r197_p;
        var r197_a = [];
        var _r197_t0 = r197_knots;
        var _r197_t1 = _r197_t0.length;
        var _r197_t2 = 0;
        for (; _r197_t2 < _r197_t1; _r197_t2 = _r197_t2 + 1) {
            r197_p = _r197_t0[_r197_t2];
            if (r197_p instanceof Array)
                r197_a = r197_a.concat(r133_flatten(r197_p));
            else
                r197_a.push(r197_p);
        }
        return r197_a;
    };
    var r133_prepareSpiroKnots = function _r133_t49(r199__knots, r199_s) {
        var r199_closed = false;
        var r199_lastafs = [];
        var r199_knots = r199__knots;
        for (; r199_knots[0] && r199_knots[0] instanceof Function; r199_knots = r199_knots.slice(1))
            r199_knots[0].call(r199_s);
        for (; r199_knots[r199_knots.length - 1] && (r199_knots[r199_knots.length - 1].type === 'close' || r199_knots[r199_knots.length - 1].type === 'end'); r199_knots = r199_knots.slice(0, -1)) {
            r199_closed = r199_knots[r199_knots.length - 1].type === 'close';
            r199_lastafs.push(r199_knots[r199_knots.length - 1].af);
        }
        r199_knots = r133_flatten(r199_knots);
        if (r199_closed)
            r199_knots.push(r199_knots[0]);
        var _r199_t0 = 0;
        var _r199_t1 = r199_knots.length;
        var r199_j = _r199_t0;
        for (; r199_j < _r199_t1; r199_j = r199_j + 1)
            if (r199_knots[r199_j] && r199_knots[r199_j].type === 'interpolate')
                r199_knots[r199_j] = r199_knots[r199_j].af.call(r199_s, r199_knots[r199_j - 1], r199_knots[r199_j + 1], r199_knots[r199_j]);
        if (r199_closed)
            r199_knots.pop();
        return {
            'knots': r133_flatten(r199_knots),
            'closed': r199_closed,
            'lastafs': r199_lastafs
        };
    };
    var r133_QUAD = false;
    var r133_PRECISION = 0.5;
    var r133_dispiro = function _r133_t50() {
        var _r201_t2 = arguments;
        var _r201_t3 = [].slice.call(_r201_t2, 0);
        return function (_r201_leti0) {
            var r202_args = _r201_leti0;
            return function _r202_t0(r203_dontinc) {
                var r203_knot, r203_af, r203_g, r203_lhsContour, r203_rhsContour, _r203_t12, _r203_t13;
                var _r203_t10 = this;
                var r203_s = new r1_SpiroExpansionContext();
                r203_s.gizmo = _r203_t10.gizmo || r133_globalTransform;
                var _r203_t0 = r133_prepareSpiroKnots([].slice.call(r202_args, 0), r203_s);
                var r203_knots = _r203_t0.knots;
                var r203_closed = _r203_t0.closed;
                var r203_lastafs = _r203_t0.lastafs;
                var _r203_t1 = r203_knots;
                var _r203_t2 = _r203_t1.length;
                var _r203_t3 = 0;
                for (; _r203_t3 < _r203_t2; _r203_t3 = _r203_t3 + 1) {
                    r203_knot = _r203_t1[_r203_t3];
                    _r203_t12 = r203_knot.type;
                    _r203_t13 = r203_knot.af;
                    (function (_r203_leti4, _r203_leti5) {
                        var r205_ty = _r203_leti4;
                        var r205_af = _r203_leti5;
                        return r203_knot.af = function _r205_t0() {
                            var _r206_t0 = this;
                            _r206_t0['set-type'](r205_ty);
                            return r205_af ? r205_af.apply(_r206_t0, r202_args) : void 0;
                        };
                    }(_r203_t12, _r203_t13));
                }
                r1_SpiroJs.spiroToBezierOnContext(r203_knots, r203_closed, r203_s);
                var _r203_t6 = r203_lastafs;
                var _r203_t7 = _r203_t6.length;
                var _r203_t8 = 0;
                for (; _r203_t8 < _r203_t7; _r203_t8 = _r203_t8 + 1) {
                    r203_af = _r203_t6[_r203_t8];
                    if (r203_af)
                        r203_af.call(r203_s);
                }
                var _r203_t9 = r203_s.expand(r1_fallback(r203_s.contrast, r133_Contrast));
                var r203_lhs = _r203_t9.lhs;
                var r203_rhs = _r203_t9.rhs;
                if (r203_closed) {
                    r203_g = new r133_Glyph();
                    r1_SpiroJs.spiroToBezierOnContext(r203_lhs.slice(0, -1), true, r203_g, r133_QUAD, r133_PRECISION);
                    r203_lhsContour = r203_g.contours[0];
                    r203_g.contours = [];
                    r1_SpiroJs.spiroToBezierOnContext(r203_rhs.reverse().slice(0, -1), true, r203_g, r133_QUAD, r133_PRECISION);
                    r203_rhsContour = r203_g.contours[0];
                    r203_g.contours = [r203_lhsContour.concat(r203_rhsContour)];
                } else {
                    r203_g = new r133_Glyph();
                    r203_lhs[0].type = r203_rhs[0].type = r203_lhs[r203_lhs.length - 1].type = r203_rhs[r203_rhs.length - 1].type = 'corner';
                    r1_SpiroJs.spiroToBezierOnContext(r203_lhs.concat(r203_rhs.reverse()), true, r203_g, r133_QUAD, r133_PRECISION);
                }
                r203_g.knots = r203_knots;
                r203_g.lhsKnots = r203_lhs;
                r203_g.rhsKnots = r203_rhs;
                _r203_t10.includeGlyph(r203_g);
                return r203_g;
            };
        }(_r201_t3);
    };
    var r133_xn$spirooutline$1aao = function _r133_t51() {
        var _r208_t2 = arguments;
        var _r208_t3 = [].slice.call(_r208_t2, 0);
        return function (_r208_leti0) {
            var r209_k = _r208_leti0;
            return function _r209_t0(r210_dontinc) {
                var r210_af;
                var _r210_t4 = this;
                var r210_g = new r133_Glyph();
                r210_g.gizmo = _r210_t4.gizmo || r133_globalTransform;
                var _r210_t0 = r133_prepareSpiroKnots(r209_k, r210_g);
                var r210_knots = _r210_t0.knots;
                var r210_closed = _r210_t0.closed;
                var r210_lastafs = _r210_t0.lastafs;
                r1_SpiroJs.spiroToBezierOnContext(r210_knots, r210_closed, r210_g, r133_QUAD, r133_PRECISION);
                var _r210_t1 = r210_lastafs;
                var _r210_t2 = _r210_t1.length;
                var _r210_t3 = 0;
                for (; _r210_t3 < _r210_t2; _r210_t3 = _r210_t3 + 1) {
                    r210_af = _r210_t1[_r210_t3];
                    if (r210_af)
                        r210_af.call(r210_g);
                }
                _r210_t4.includeGlyph(r210_g);
                return r210_g;
            };
        }(_r208_t3);
    };
    return {
        'g4': r133_g4,
        'g2': r133_g2,
        'corner': r133_corner,
        'flat': r133_flat,
        'curl': r133_curl,
        'close': r133_close,
        'end': r133_end,
        'straight': r133_straight,
        'widths': r133_widths,
        'disable-gizmo': r133_xn$disablegizmo$3qIs,
        'disable-contrast': r133_xn$disablecontrast$3qIs,
        'heading': r133_heading,
        'unimportant': r133_unimportant,
        'important': r133_important,
        'alsoThru': r133_alsoThru,
        'alsoThruThem': r133_alsoThruThem,
        'bezcontrols': r133_bezcontrols,
        'quadcontrols': r133_quadcontrols,
        'archv': r133_archv,
        'arcvh': r133_arcvh,
        'complexThru': r133_complexThru,
        'dispiro': r133_dispiro,
        'spiro-outline': r133_xn$spirooutline$1aao
    };
};
