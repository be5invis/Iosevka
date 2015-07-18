{
    var r0_font, r0_bezierCubic2Q2, r0_glyphList, r0_glyphs, r0_Bezier, r0_Smooth, r0_intersection, r0_para, r0_TINY, r0_LITTLE, r0_DESCENDER, r0_O, r0_WIDTH, r0_STROKE, r0_HALFSTROKE, r0_SB, r0_CAP, r0_XH, r0_XO, r0_HOOK, r0_SMOOTH, r0_SMALLSMOOTH, r0_RIGHTSB, r0_CAP_SMOOTH, r0_MIDDLE, r0_KAPPA, r0_COKAPPA, r0_COBKAPPA, r0_BKAPPA, r0_CAPMIDDLE, r0_CAPO, r0_ESS, r0_SAMPLES, r0_KAPPA_HOOK, r0_Glyph, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_Ring, r0_ORing, r0_xn$createglyph$7Hrq, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21, _r0_t22, _r0_t23, _r0_t24, _r0_t25, _r0_t26, _r0_t27, _r0_t28, _r0_t29, _r0_t30, _r0_t31, _r0_t32, _r0_t33, _r0_t34, _r0_t35, _r0_t36, _r0_t37, _r0_t38, _r0_t39, _r0_t40, _r0_t41, _r0_t42, _r0_t43, _r0_t44, _r0_t45, _r0_t46, _r0_t47, _r0_t48;
    r0_font = require('./empty.json');
    r0_bezierCubic2Q2 = require('node-sfnt/lib/math/bezierCubic2Q2');
    r0_glyphList = r0_font['glyf'];
    r0_glyphs = { '.notdef': r0_glyphList[0] };
    r0_Bezier = require('bezier-js');
    r0_Smooth = require('./smooth.js')['Smooth'];
    r0_intersection = require('./intersection.js')['intersection'];
    r0_para = {
        'width': 500,
        'stroke': 85,
        'sb': 50,
        'cap': 771,
        'xheight': 572,
        'hook': 135,
        'smooth': 192,
        'smallsmooth': 242,
        'o': -8,
        'descender': -178
    };
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_DESCENDER = r0_para['descender'];
    r0_O = r0_para['o'];
    r0_WIDTH = r0_para['width'];
    r0_STROKE = r0_para['stroke'];
    r0_HALFSTROKE = r0_STROKE / 2;
    r0_SB = r0_para['sb'];
    r0_CAP = r0_para['cap'];
    r0_XH = r0_para['xheight'];
    r0_XO = r0_XH - r0_O;
    r0_HOOK = r0_para['hook'];
    r0_SMOOTH = r0_para['smooth'];
    r0_SMALLSMOOTH = r0_para['smallsmooth'];
    r0_RIGHTSB = r0_WIDTH - r0_SB;
    r0_CAP_SMOOTH = r0_CAP - r0_SMOOTH;
    r0_MIDDLE = r0_WIDTH / 2;
    r0_KAPPA = 0.51;
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_CAPMIDDLE = r0_CAP / 2;
    r0_CAPO = r0_CAP - r0_O;
    r0_ESS = r0_STROKE * 0.5;
    r0_SAMPLES = 4;
    r0_KAPPA_HOOK = 0.7;
    r0_Glyph = function _r0_t0(r1_name) {
        var r1_name, _r1_t0;
        _r1_t0 = this;
        _r1_t0['name'] = r1_name;
        _r1_t0['unicode'] = [];
        _r1_t0['contours'] = [];
        _r1_t0['advanceWidth'] = 500;
        return void 0;
    };
    r0_Glyph['prototype']['set-width'] = function _r0_t1(r2_w) {
        var r2_w, _r2_t0;
        _r2_t0 = this;
        _r2_t0['advanceWidth'] = r2_w;
        return _r2_t0;
    };
    r0_Glyph['prototype']['assign-unicode'] = function _r0_t2(r3_u) {
        var r3_u, _r3_t0;
        _r3_t0 = this;
        _r3_t0['unicode']['push'](r3_u['charCodeAt'](0));
        return _r3_t0;
    };
    r0_Glyph['prototype']['start-from'] = function _r0_t3(r4_x, r4_y) {
        var r4_x, r4_y, _r4_t0;
        _r4_t0 = this;
        _r4_t0['contours']['push']([{
                'x': r4_x,
                'y': r4_y,
                'onCurve': true
            }]);
        return _r4_t0;
    };
    r0_Glyph['prototype']['line-to'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0;
        _r5_t0 = this;
        _r5_t0['contours'][_r5_t0['contours']['length'] - 1]['push']({
            'x': r5_x,
            'y': r5_y,
            'onCurve': true
        });
        return _r5_t0;
    };
    r0_Glyph['prototype']['curve-to'] = function _r0_t5(r6_xc, r6_yc, r6_x, r6_y) {
        var r6_xc, r6_yc, r6_x, r6_y, _r6_t0;
        _r6_t0 = this;
        _r6_t0['contours'][_r6_t0['contours']['length'] - 1]['push']({
            'x': r6_xc,
            'y': r6_yc,
            'onCurve': false
        }, {
            'x': r6_x,
            'y': r6_y,
            'onCurve': true
        });
        return _r6_t0;
    };
    r0_Glyph['prototype']['cubic-to'] = function _r0_t6(r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y) {
        var r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y, r7_lastContour, r7_lastPoint, r7_segments, r7_p0, r7_xc, r7_yc, r7_xf, r7_yf, _r7_t0, _r7_t1, _r7_t2, _r7_t3, _r7_t4, _r7_t5, _r7_t6;
        _r7_t6 = this;
        r7_lastContour = _r7_t6['contours'][_r7_t6['contours']['length'] - 1];
        r7_lastPoint = r7_lastContour[r7_lastContour['length'] - 1];
        r7_segments = r0_bezierCubic2Q2(r7_lastPoint, {
            'x': r7_x1,
            'y': r7_y1
        }, {
            'x': r7_x2,
            'y': r7_y2
        }, {
            'x': r7_x,
            'y': r7_y
        });
        _r7_t0 = r7_segments;
        _r7_t1 = _r7_t0['length'];
        _r7_t2 = 0;
        for (; _r7_t2 < _r7_t1; _r7_t2 = _r7_t2 + 1) {
            _r7_t3 = _r7_t0[_r7_t2];
            r7_p0 = _r7_t3[0];
            _r7_t4 = _r7_t3[1];
            r7_xc = _r7_t4['x'];
            r7_yc = _r7_t4['y'];
            _r7_t5 = _r7_t3[2];
            r7_xf = _r7_t5['x'];
            r7_yf = _r7_t5['y'];
            _r7_t6['curve-to'](r7_xc, r7_yc, r7_xf, r7_yf);
        }
        return _r7_t6;
    };
    r0_Glyph['prototype']['reverse-last'] = function _r0_t7() {
        var _r9_t0;
        _r9_t0 = this;
        return _r9_t0['contours'][_r9_t0['contours']['length'] - 1] = _r9_t0['contours'][_r9_t0['contours']['length'] - 1]['reverse']();
    };
    r0_Glyph['prototype']['put-shapes'] = function _r0_t8(r10_contours) {
        var r10_contours, r10_contour, r10_j, r10_point, r10_p2, r10_p3, _r10_t0, _r10_t1, _r10_t2, _r10_t3;
        _r10_t3 = this;
        _r10_t0 = r10_contours;
        _r10_t1 = _r10_t0['length'];
        _r10_t2 = 0;
        for (; _r10_t2 < _r10_t1; _r10_t2 = _r10_t2 + 1) {
            r10_contour = _r10_t0[_r10_t2];
            _r10_t3['start-from'](r10_contour[0]['x'], r10_contour[0]['y']);
            r10_j = 1;
            for (; r10_j < r10_contour['length']; r10_j = r10_j + 1) {
                r10_point = r10_contour[r10_j];
                if (r10_point['cubic']) {
                    r10_p2 = r10_contour[r10_j + 1];
                    r10_p3 = r10_contour[r10_j + 2];
                    _r10_t3['cubic-to'](r10_point['x'], r10_point['y'], r10_p2['x'], r10_p2['y'], r10_p3['x'], r10_p3['y']);
                    r10_j = r10_j + 2;
                } else if (r10_point['onCurve'])
                    _r10_t3['line-to'](r10_point['x'], r10_point['y']);
                else {
                    r10_p2 = r10_contour[r10_j + 1];
                    _r10_t3['curve-to'](r10_point['x'], r10_point['y'], r10_p2['x'], r10_p2['y']);
                    r10_j = r10_j + 1;
                }
            }
        }
        return _r10_t3;
    };
    r0_Stroke = function _r0_t9() {
        var _r12_t0;
        _r12_t0 = this;
        _r12_t0['points'] = [];
        return _r12_t0;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t10(r13_d1, r13_d2) {
        var r13_d1, r13_d2, r13_point, _r13_t0;
        _r13_t0 = this;
        r13_point = _r13_t0['points'][_r13_t0['points']['length'] - 1];
        r13_point['d1'] = r13_d1;
        r13_point['d2'] = r13_d2;
        return _r13_t0;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t11(r14_x, r14_y) {
        var r14_x, r14_y, _r14_t0;
        _r14_t0 = this;
        _r14_t0['points'] = [{
                'x': r14_x,
                'y': r14_y,
                'onCurve': true
            }];
        return _r14_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t12(r15_x, r15_y) {
        var r15_x, r15_y, _r15_t0;
        _r15_t0 = this;
        _r15_t0['points']['push']({
            'x': r15_x,
            'y': r15_y,
            'onCurve': true
        });
        return _r15_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t13(r16_xc, r16_yc, r16_x, r16_y) {
        var r16_xc, r16_yc, r16_x, r16_y, _r16_t0;
        _r16_t0 = this;
        _r16_t0['points']['push']({
            'x': r16_xc,
            'y': r16_yc,
            'onCurve': false
        }, {
            'x': r16_x,
            'y': r16_y,
            'onCurve': true
        });
        return _r16_t0;
    };
    r0_Stroke['prototype']['cubic-to'] = function _r0_t14(r17_x1, r17_y1, r17_x2, r17_y2, r17_x, r17_y) {
        var r17_x1, r17_y1, r17_x2, r17_y2, r17_x, r17_y, _r17_t0;
        _r17_t0 = this;
        _r17_t0['points']['push']({
            'x': r17_x1,
            'y': r17_y1,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r17_x2,
            'y': r17_y2,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r17_x,
            'y': r17_y,
            'onCurve': true
        });
        return _r17_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t15(r18_x, r18_y) {
        var r18_x, r18_y, r18_last, _r18_t0;
        _r18_t0 = this;
        r18_last = _r18_t0['points'][_r18_t0['points']['length'] - 1];
        _r18_t0['cubic-to'](r18_last['x'], r18_last['y'] + r0_BKAPPA * (r18_y - r18_last['y']), r18_x + r0_BKAPPA * (r18_last['x'] - r18_x), r18_y, r18_x, r18_y);
        return _r18_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t16(r19_x, r19_y) {
        var r19_x, r19_y, r19_last, _r19_t0;
        _r19_t0 = this;
        r19_last = _r19_t0['points'][_r19_t0['points']['length'] - 1];
        _r19_t0['cubic-to'](r19_last['x'] + r0_BKAPPA * (r19_x - r19_last['x']), r19_last['y'], r19_x, r19_y + r0_BKAPPA * (r19_last['y'] - r19_y), r19_x, r19_y);
        return _r19_t0;
    };
    r0_dforward = function _r0_t17(r20_p0, r20_p1, r20_p2, r20_p3) {
        var r20_p0, r20_p1, r20_p2, r20_p3;
        return {
            'x': r20_p0['x'] + (-11 / 6 * r20_p0['x'] + 3 * r20_p1['x'] - 3 / 2 * r20_p2['x'] + r20_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r20_p0['y'] + (-11 / 6 * r20_p0['y'] + 3 * r20_p1['y'] - 3 / 2 * r20_p2['y'] + r20_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t18(r21_p0, r21_p1, r21_p2, r21_p3) {
        var r21_p0, r21_p1, r21_p2, r21_p3;
        return {
            'x': r21_p0['x'] + (11 / 6 * r21_p0['x'] - 3 * r21_p1['x'] + 3 / 2 * r21_p2['x'] - r21_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r21_p0['y'] + (11 / 6 * r21_p0['y'] - 3 * r21_p1['y'] + 3 / 2 * r21_p2['y'] - r21_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t19(r22_a, r22_b, r22_c) {
        var r22_a, r22_b, r22_c;
        return Math['abs']((r22_c['y'] - r22_a['y']) * (r22_b['x'] - r22_a['x']) - (r22_c['x'] - r22_a['x']) * (r22_b['y'] - r22_a['y'])) > r0_TINY;
    };
    r0_Stroke['prototype']['form-stroke'] = function _r0_t20(r23_d1, r23_d2) {
        var r23_d1, r23_d2, r23_d1s, r23_d2s, r23_subSegments, r23_p0, r23_j, r23_p1, r23_p2, r23_p3, r23_f1, r23_f2, r23_left, r23_right, r23_seg, r23_curve, r23_sample, r23_t, r23_tn, r23_lthis, r23_rthis, r23_lnext, r23_rnext, r23_lnthis1, r23_rnthis1, r23_lnnext1, r23_rnnext1, r23_lnthis2, r23_rnthis2, r23_lnnext2, r23_rnnext2, r23_lnthis3, r23_rnthis3, r23_lnnext3, r23_rnnext3, r23_dlthis, r23_drthis, r23_dlnext, r23_drnext, r23_il, r23_ir, r23_last, r23_shape, _r23_t0, _r23_t1, _r23_t2, _r23_t3, _r23_t4, _r23_t5, _r23_t6, _r23_t7, _r23_t8, _r23_t9, _r23_t10, _r23_t11, _r23_t12, _r23_t13, _r23_t14, _r23_t15, _r23_t16, _r23_t17, _r23_t18, _r23_t19, _r23_t20, _r23_t21, _r23_t22, _r23_t23, _r23_t24, _r23_t25, _r23_t26, _r23_t27, _r23_t28, _r23_t29, _r23_t30, _r23_t31, _r23_t32, _r23_t33, _r23_t34, _r23_t35, _r23_t36, _r23_t37, _r23_t38;
        _r23_t2 = this;
        if (_r23_t2['points'][0]['d1'] >= 0)
            _r23_t3 = _r23_t2['points'][0]['d1'];
        else
            _r23_t3 = r23_d1;
        _r23_t4 = r23_d1 = _r23_t3;
        r23_d1s = [_r23_t4];
        if (_r23_t2['points'][0]['d2'] >= 0)
            _r23_t5 = _r23_t2['points'][0]['d2'];
        else
            _r23_t5 = r23_d2;
        _r23_t6 = r23_d2 = _r23_t5;
        r23_d2s = [_r23_t6];
        r23_subSegments = [];
        r23_p0 = _r23_t2['points'][0];
        r23_j = 1;
        for (; r23_j < this['points']['length']; r23_j = r23_j + 1) {
            r23_p1 = _r23_t2['points'][r23_j];
            if (r23_p1['onCurve']) {
                r23_subSegments['push']([
                    r23_p0,
                    {
                        'x': (r23_p0['x'] + r23_p1['x']) / 2,
                        'y': (r23_p0['y'] + r23_p1['y']) / 2
                    },
                    r23_p1
                ]);
                _r23_t7 = r23_d1s;
                _r23_t8 = _r23_t7['push'];
                if (r23_p1['d1'] >= 0)
                    _r23_t9 = r23_p1['d1'];
                else
                    _r23_t9 = r23_d1;
                _r23_t10 = r23_d1 = _r23_t9;
                _r23_t8['call'](_r23_t7, _r23_t10);
                _r23_t11 = r23_d2s;
                _r23_t12 = _r23_t11['push'];
                if (r23_p1['d2'] >= 0)
                    _r23_t13 = r23_p1['d2'];
                else
                    _r23_t13 = r23_d2;
                _r23_t14 = r23_d2 = _r23_t13;
                _r23_t12['call'](_r23_t11, _r23_t14);
                r23_p0 = r23_p1;
            } else if (r23_p1['cubic']) {
                r23_p2 = _r23_t2['points'][r23_j + 1];
                r23_p3 = _r23_t2['points'][r23_j + 2];
                _r23_t15 = r23_d1s;
                _r23_t16 = _r23_t15['push'];
                if (r23_p3['d1'] >= 0)
                    _r23_t17 = r23_p3['d1'];
                else
                    _r23_t17 = r23_d1;
                _r23_t18 = r23_d1 = _r23_t17;
                _r23_t16['call'](_r23_t15, _r23_t18);
                _r23_t19 = r23_d2s;
                _r23_t20 = _r23_t19['push'];
                if (r23_p3['d2'] >= 0)
                    _r23_t21 = r23_p3['d2'];
                else
                    _r23_t21 = r23_d2;
                _r23_t22 = r23_d2 = _r23_t21;
                _r23_t20['call'](_r23_t19, _r23_t22);
                r23_subSegments['push']([
                    r23_p0,
                    r23_p1,
                    r23_p2,
                    r23_p3
                ]);
                r23_p0 = r23_p3;
                r23_j = r23_j + 2;
            } else if (true) {
                r23_p2 = _r23_t2['points'][r23_j + 1];
                _r23_t23 = r23_d1s;
                _r23_t24 = _r23_t23['push'];
                if (r23_p2['d1'] >= 0)
                    _r23_t25 = r23_p2['d1'];
                else
                    _r23_t25 = r23_d1;
                _r23_t26 = r23_d1 = _r23_t25;
                _r23_t24['call'](_r23_t23, _r23_t26);
                _r23_t27 = r23_d2s;
                _r23_t28 = _r23_t27['push'];
                if (r23_p2['d2'] >= 0)
                    _r23_t29 = r23_p2['d2'];
                else
                    _r23_t29 = r23_d2;
                _r23_t30 = r23_d2 = _r23_t29;
                _r23_t28['call'](_r23_t27, _r23_t30);
                r23_subSegments['push']([
                    r23_p0,
                    r23_p1,
                    r23_p2
                ]);
                r23_p0 = r23_p2;
                r23_j = r23_j + 1;
            } else
                void 0;
        }
        r23_f1 = r0_Smooth(r23_d1s, { 'method': 'cubic' });
        r23_f2 = r0_Smooth(r23_d2s, { 'method': 'cubic' });
        r23_left = [];
        r23_right = [];
        r23_j = 0;
        for (; r23_j < r23_subSegments['length']; r23_j = r23_j + 1) {
            r23_seg = r23_subSegments[r23_j];
            if (r23_seg['length'] > 3)
                _r23_t31 = new r0_Bezier(r23_seg[0]['x'], r23_seg[0]['y'], r23_seg[1]['x'], r23_seg[1]['y'], r23_seg[2]['x'], r23_seg[2]['y'], r23_seg[3]['x'], r23_seg[3]['y']);
            else
                _r23_t31 = new r0_Bezier(r23_seg[0]['x'], r23_seg[0]['y'], r23_seg[1]['x'], r23_seg[1]['y'], r23_seg[2]['x'], r23_seg[2]['y']);
            r23_curve = _r23_t31;
            _r23_t0 = 0;
            _r23_t1 = r0_SAMPLES;
            r23_sample = _r23_t0;
            for (; r23_sample < _r23_t1; r23_sample = r23_sample + 1) {
                r23_t = r23_j + r23_sample / r0_SAMPLES;
                r23_tn = r23_j + (r23_sample + 1) / r0_SAMPLES;
                r23_lthis = r23_curve['offset'](r23_sample / r0_SAMPLES, r23_f1(r23_t));
                r23_rthis = r23_curve['offset'](r23_sample / r0_SAMPLES, -r23_f2(r23_t));
                r23_lnext = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES, r23_f1(r23_tn));
                r23_rnext = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES, -r23_f2(r23_tn));
                r23_lnthis1 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY, r23_f1(r23_t + r0_TINY));
                r23_rnthis1 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY, -r23_f2(r23_t + r0_TINY));
                r23_lnnext1 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY, r23_f1(r23_tn - r0_TINY));
                r23_rnnext1 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY, -r23_f2(r23_tn - r0_TINY));
                r23_lnthis2 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY * 2, r23_f1(r23_t + r0_TINY * 2));
                r23_rnthis2 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY * 2, -r23_f2(r23_t + r0_TINY * 2));
                r23_lnnext2 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY * 2, r23_f1(r23_tn - r0_TINY * 2));
                r23_rnnext2 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY * 2, -r23_f2(r23_tn - r0_TINY * 2));
                r23_lnthis3 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY * 3, r23_f1(r23_t + r0_TINY * 3));
                r23_rnthis3 = r23_curve['offset'](r23_sample / r0_SAMPLES + r0_TINY * 3, -r23_f2(r23_t + r0_TINY * 3));
                r23_lnnext3 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY * 3, r23_f1(r23_tn - r0_TINY * 3));
                r23_rnnext3 = r23_curve['offset']((r23_sample + 1) / r0_SAMPLES - r0_TINY * 3, -r23_f2(r23_tn - r0_TINY * 3));
                r23_dlthis = r0_dforward(r23_lthis, r23_lnthis1, r23_lnthis2, r23_lnthis3);
                r23_drthis = r0_dforward(r23_rthis, r23_rnthis1, r23_rnthis2, r23_rnthis3);
                r23_dlnext = r0_dbackward(r23_lnext, r23_lnnext1, r23_lnnext2, r23_lnnext3);
                r23_drnext = r0_dbackward(r23_rnext, r23_rnnext2, r23_rnnext2, r23_rnnext3);
                r23_il = r0_intersection(r23_lthis['x'], r23_lthis['y'], r23_dlthis['x'], r23_dlthis['y'], r23_lnext['x'], r23_lnext['y'], r23_dlnext['x'], r23_dlnext['y']);
                r23_ir = r0_intersection(r23_rthis['x'], r23_rthis['y'], r23_drthis['x'], r23_drthis['y'], r23_rnext['x'], r23_rnext['y'], r23_drnext['x'], r23_drnext['y']);
                if (r23_il['x'] !== null && r23_il['y'] !== null && r0_nonlinear(r23_lthis, r23_il, r23_lnext)) {
                    r23_left['push']({
                        'x': r23_lthis['x'],
                        'y': r23_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r23_il['x'],
                        'y': r23_il['y'],
                        'onCurve': false
                    });
                } else {
                    r23_left['push']({
                        'x': r23_lthis['x'],
                        'y': r23_lthis['y'],
                        'onCurve': true
                    });
                }
                if (r23_ir['x'] !== null && r23_ir['y'] !== null && r0_nonlinear(r23_rthis, r23_ir, r23_rnext)) {
                    r23_right['push']({
                        'x': r23_rthis['x'],
                        'y': r23_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r23_ir['x'],
                        'y': r23_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r23_right['push']({
                        'x': r23_rthis['x'],
                        'y': r23_rthis['y'],
                        'onCurve': true
                    });
                }
            }
        }
        _r23_t32 = r23_left;
        _r23_t33 = _r23_t32['push'];
        r23_last = r23_curve['offset'](1, r23_f1(r23_t));
        _r23_t34 = {
            'x': r23_last['x'],
            'y': r23_last['y'],
            'onCurve': true
        };
        _r23_t33['call'](_r23_t32, _r23_t34);
        _r23_t35 = r23_right;
        _r23_t36 = _r23_t35['push'];
        r23_last = r23_curve['offset'](1, -r23_f2(r23_t));
        _r23_t37 = {
            'x': r23_last['x'],
            'y': r23_last['y'],
            'onCurve': true
        };
        _r23_t36['call'](_r23_t35, _r23_t37);
        r23_shape = r23_left['concat'](r23_right['reverse']())['map'](function _r23_t38(r25_p) {
            var r25_p;
            return {
                'x': r25_p['x'],
                'y': r25_p['y'],
                'onCurve': r25_p['onCurve']
            };
        });
        return [r23_shape];
    };
    r0_Ring = function _r0_t21(r26_u, r26_d, r26_l, r26_r) {
        var r26_u, r26_d, r26_l, r26_r, r26_my, r26_mx, r26_s;
        r26_my = (r26_u + r26_d) / 2;
        r26_mx = (r26_l + r26_r) / 2;
        r26_s = new r0_Stroke()['start-from'](r26_mx, r26_d)['cubic-to'](r26_mx + (r26_l - r26_mx) * r0_BKAPPA, r26_d, r26_l, r26_my + (r26_d - r26_my) * r0_BKAPPA, r26_l, r26_my)['cubic-to'](r26_l, r26_my + (r26_u - r26_my) * r0_BKAPPA, r26_mx + (r26_l - r26_mx) * r0_BKAPPA, r26_u, r26_mx, r26_u)['cubic-to'](r26_mx + (r26_r - r26_mx) * r0_BKAPPA, r26_u, r26_r, r26_my + (r26_u - r26_my) * r0_BKAPPA, r26_r, r26_my)['cubic-to'](r26_r, r26_my + (r26_d - r26_my) * r0_BKAPPA, r26_mx + (r26_r - r26_mx) * r0_BKAPPA, r26_d, r26_mx, r26_d);
        return r26_s['points'];
    };
    r0_ORing = function _r0_t22(r27_u, r27_d, r27_l, r27_r, r27_smooth) {
        var r27_u, r27_d, r27_l, r27_r, r27_smooth, r27_myu, r27_myd, r27_mx, r27_s;
        r27_myu = r27_u - r27_smooth;
        r27_myd = r27_d + r27_smooth;
        r27_mx = (r27_l + r27_r) / 2;
        r27_s = new r0_Stroke()['start-from'](r27_mx, r27_d)['cubic-to'](r27_mx + (r27_l - r27_mx) * r0_BKAPPA, r27_d, r27_l, r27_myd + (r27_d - r27_myd) * r0_BKAPPA, r27_l, r27_myd)['line-to'](r27_l, r27_myu)['cubic-to'](r27_l, r27_myu + (r27_u - r27_myu) * r0_BKAPPA, r27_mx + (r27_l - r27_mx) * r0_BKAPPA, r27_u, r27_mx, r27_u)['cubic-to'](r27_mx + (r27_r - r27_mx) * r0_BKAPPA, r27_u, r27_r, r27_myu + (r27_u - r27_myu) * r0_BKAPPA, r27_r, r27_myu)['line-to'](r27_r, r27_myd)['cubic-to'](r27_r, r27_myd + (r27_d - r27_myd) * r0_BKAPPA, r27_mx + (r27_r - r27_mx) * r0_BKAPPA, r27_d, r27_mx, r27_d);
        return r27_s['points'];
    };
    r0_xn$createglyph$7Hrq = function _r0_t23(r32_name, r32_actions) {
        var r32_name, r32_actions, r32_glyphObject;
        r32_glyphObject = new r0_Glyph(r32_name);
        r0_glyphList['push'](r32_glyphObject);
        r0_glyphs[r32_name] = r32_glyphObject;
        r32_actions['call'](r32_glyphObject);
        return r32_glyphObject;
    };
    r0_xn$createglyph$7Hrq('space', function _r0_t24() {
        var r34_xn$setwidth$9Jrj, r34_xn$assignunicode$7Hrq, r34_xn$startfrom$1aao, r34_xn$lineto$5sIl, r34_xn$curveto$1aao, r34_xn$cubicto$1aao, r34_xn$putshapes$9Jrj, r34_xn$reverselast$3qIs, _r34_t0;
        _r34_t0 = this;
        r34_xn$setwidth$9Jrj = _r34_t0['set-width']['bind'](_r34_t0);
        r34_xn$assignunicode$7Hrq = _r34_t0['assign-unicode']['bind'](_r34_t0);
        r34_xn$startfrom$1aao = _r34_t0['start-from']['bind'](_r34_t0);
        r34_xn$lineto$5sIl = _r34_t0['line-to']['bind'](_r34_t0);
        r34_xn$curveto$1aao = _r34_t0['curve-to']['bind'](_r34_t0);
        r34_xn$cubicto$1aao = _r34_t0['cubic-to']['bind'](_r34_t0);
        r34_xn$putshapes$9Jrj = _r34_t0['put-shapes']['bind'](_r34_t0);
        r34_xn$reverselast$3qIs = _r34_t0['reverse-last']['bind'](_r34_t0);
        r34_xn$setwidth$9Jrj(r0_WIDTH);
        r34_xn$assignunicode$7Hrq(' ');
        return void 0;
    });
    r0_xn$createglyph$7Hrq('bar', function _r0_t25() {
        var r36_xn$setwidth$9Jrj, r36_xn$assignunicode$7Hrq, r36_xn$startfrom$1aao, r36_xn$lineto$5sIl, r36_xn$curveto$1aao, r36_xn$cubicto$1aao, r36_xn$putshapes$9Jrj, r36_xn$reverselast$3qIs, _r36_t0;
        _r36_t0 = this;
        r36_xn$setwidth$9Jrj = _r36_t0['set-width']['bind'](_r36_t0);
        r36_xn$assignunicode$7Hrq = _r36_t0['assign-unicode']['bind'](_r36_t0);
        r36_xn$startfrom$1aao = _r36_t0['start-from']['bind'](_r36_t0);
        r36_xn$lineto$5sIl = _r36_t0['line-to']['bind'](_r36_t0);
        r36_xn$curveto$1aao = _r36_t0['curve-to']['bind'](_r36_t0);
        r36_xn$cubicto$1aao = _r36_t0['cubic-to']['bind'](_r36_t0);
        r36_xn$putshapes$9Jrj = _r36_t0['put-shapes']['bind'](_r36_t0);
        r36_xn$reverselast$3qIs = _r36_t0['reverse-last']['bind'](_r36_t0);
        r36_xn$setwidth$9Jrj(r0_WIDTH);
        r36_xn$assignunicode$7Hrq('|');
        r36_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('A', function _r0_t26() {
        var r38_xn$setwidth$9Jrj, r38_xn$assignunicode$7Hrq, r38_xn$startfrom$1aao, r38_xn$lineto$5sIl, r38_xn$curveto$1aao, r38_xn$cubicto$1aao, r38_xn$putshapes$9Jrj, r38_xn$reverselast$3qIs, r38_TURN, r38_leftbar, r38_rightbar, r38_hbar, _r38_t0;
        _r38_t0 = this;
        r38_xn$setwidth$9Jrj = _r38_t0['set-width']['bind'](_r38_t0);
        r38_xn$assignunicode$7Hrq = _r38_t0['assign-unicode']['bind'](_r38_t0);
        r38_xn$startfrom$1aao = _r38_t0['start-from']['bind'](_r38_t0);
        r38_xn$lineto$5sIl = _r38_t0['line-to']['bind'](_r38_t0);
        r38_xn$curveto$1aao = _r38_t0['curve-to']['bind'](_r38_t0);
        r38_xn$cubicto$1aao = _r38_t0['cubic-to']['bind'](_r38_t0);
        r38_xn$putshapes$9Jrj = _r38_t0['put-shapes']['bind'](_r38_t0);
        r38_xn$reverselast$3qIs = _r38_t0['reverse-last']['bind'](_r38_t0);
        r38_xn$setwidth$9Jrj(r0_WIDTH);
        r38_xn$assignunicode$7Hrq('A');
        r38_TURN = r0_XH * 0.1;
        r38_leftbar = new r0_Stroke();
        r38_leftbar['start-from'](r0_SB, 0)['line-to'](r0_SB, r38_TURN)['curve-to'](r0_SB, r38_TURN + 0.27 * (r0_CAP - r38_TURN), r0_MIDDLE - r0_STROKE / 2, r0_CAP);
        r38_rightbar = new r0_Stroke();
        r38_rightbar['start-from'](r0_RIGHTSB, 0)['line-to'](r0_RIGHTSB, r38_TURN)['curve-to'](r0_RIGHTSB, r38_TURN + 0.27 * (r0_CAP - r38_TURN), r0_MIDDLE + r0_STROKE / 2, r0_CAP);
        r38_hbar = new r0_Stroke();
        r38_hbar['start-from'](r0_SB + r0_STROKE, r0_XH / 2)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH / 2);
        r38_xn$putshapes$9Jrj(r38_leftbar['form-stroke'](0, r0_STROKE));
        r38_xn$putshapes$9Jrj(r38_hbar['form-stroke'](0, r0_STROKE));
        r38_xn$putshapes$9Jrj(r38_rightbar['form-stroke'](r0_STROKE, 0));
        r38_xn$startfrom$1aao(r0_MIDDLE - r0_STROKE / 2, r0_CAP);
        r38_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, r0_CAP);
        r38_xn$lineto$5sIl(r0_MIDDLE, r0_CAP - r0_STROKE);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('X', function _r0_t27() {
        var r40_xn$setwidth$9Jrj, r40_xn$assignunicode$7Hrq, r40_xn$startfrom$1aao, r40_xn$lineto$5sIl, r40_xn$curveto$1aao, r40_xn$cubicto$1aao, r40_xn$putshapes$9Jrj, r40_xn$reverselast$3qIs, r40_TURN, r40_straight, r40_strench, r40_barone, r40_bartwo, _r40_t0, _r40_t1;
        _r40_t0 = this;
        r40_xn$setwidth$9Jrj = _r40_t0['set-width']['bind'](_r40_t0);
        r40_xn$assignunicode$7Hrq = _r40_t0['assign-unicode']['bind'](_r40_t0);
        r40_xn$startfrom$1aao = _r40_t0['start-from']['bind'](_r40_t0);
        r40_xn$lineto$5sIl = _r40_t0['line-to']['bind'](_r40_t0);
        r40_xn$curveto$1aao = _r40_t0['curve-to']['bind'](_r40_t0);
        r40_xn$cubicto$1aao = _r40_t0['cubic-to']['bind'](_r40_t0);
        r40_xn$putshapes$9Jrj = _r40_t0['put-shapes']['bind'](_r40_t0);
        r40_xn$reverselast$3qIs = _r40_t0['reverse-last']['bind'](_r40_t0);
        r40_xn$setwidth$9Jrj(r0_WIDTH);
        r40_xn$assignunicode$7Hrq('X');
        r40_TURN = r0_XH * 0.05;
        r40_straight = 0.6;
        r40_strench = 0.125;
        r40_barone = new r0_Stroke()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_SB + r0_HALFSTROKE, r40_TURN)['curve-to'](r0_SB + r0_HALFSTROKE, r40_TURN + r40_strench * (r0_CAP - r40_TURN), r0_MIDDLE + r40_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r40_straight * (r40_TURN + r40_strench * (r0_CAP - r40_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r40_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r40_straight * (r0_CAP - r40_TURN - r40_strench * (r0_CAP - r40_TURN) - r0_CAPMIDDLE))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r40_TURN - r40_strench * (r0_CAP - r40_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r40_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['form-stroke']();
        r40_bartwo = [r40_barone[0]['map'](function _r40_t1(r41_pt) {
                var r41_pt;
                return {
                    'x': r0_WIDTH - r41_pt['x'],
                    'y': r41_pt['y'],
                    'onCurve': r41_pt['onCurve'],
                    'cubic': r41_pt['cubic']
                };
            })['reverse']()];
        r40_xn$putshapes$9Jrj(r40_barone);
        r40_xn$putshapes$9Jrj(r40_bartwo);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Y', function _r0_t28() {
        var r43_xn$setwidth$9Jrj, r43_xn$assignunicode$7Hrq, r43_xn$startfrom$1aao, r43_xn$lineto$5sIl, r43_xn$curveto$1aao, r43_xn$cubicto$1aao, r43_xn$putshapes$9Jrj, r43_xn$reverselast$3qIs, r43_TURN, r43_straight, r43_strench, r43_cross, r43_barone, r43_bartwo, _r43_t0, _r43_t1;
        _r43_t0 = this;
        r43_xn$setwidth$9Jrj = _r43_t0['set-width']['bind'](_r43_t0);
        r43_xn$assignunicode$7Hrq = _r43_t0['assign-unicode']['bind'](_r43_t0);
        r43_xn$startfrom$1aao = _r43_t0['start-from']['bind'](_r43_t0);
        r43_xn$lineto$5sIl = _r43_t0['line-to']['bind'](_r43_t0);
        r43_xn$curveto$1aao = _r43_t0['curve-to']['bind'](_r43_t0);
        r43_xn$cubicto$1aao = _r43_t0['cubic-to']['bind'](_r43_t0);
        r43_xn$putshapes$9Jrj = _r43_t0['put-shapes']['bind'](_r43_t0);
        r43_xn$reverselast$3qIs = _r43_t0['reverse-last']['bind'](_r43_t0);
        r43_xn$setwidth$9Jrj(r0_WIDTH);
        r43_xn$assignunicode$7Hrq('Y');
        r43_TURN = r0_XH * 0.05;
        r43_straight = 0.6;
        r43_strench = 0.15;
        r43_cross = r0_CAP * 0.4;
        r43_barone = new r0_Stroke()['start-from'](r0_MIDDLE, r43_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r43_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r43_cross + r43_straight * (r0_CAP - r43_TURN - r43_strench * (r0_CAP - r43_TURN) - r43_cross))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r43_TURN - r43_strench * (r0_CAP - r43_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r43_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['form-stroke']();
        r43_bartwo = [r43_barone[0]['map'](function _r43_t1(r44_pt) {
                var r44_pt;
                return {
                    'x': r0_WIDTH - r44_pt['x'],
                    'y': r44_pt['y'],
                    'onCurve': r44_pt['onCurve'],
                    'cubic': r44_pt['cubic']
                };
            })['reverse']()];
        r43_xn$putshapes$9Jrj(r43_barone);
        r43_xn$putshapes$9Jrj(r43_bartwo);
        r43_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r43_cross + r0_HALFSTROKE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('x', function _r0_t29() {
        var r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_TURN, r46_barone, r46_bartwo, _r46_t0, _r46_t1;
        _r46_t0 = this;
        r46_xn$setwidth$9Jrj = _r46_t0['set-width']['bind'](_r46_t0);
        r46_xn$assignunicode$7Hrq = _r46_t0['assign-unicode']['bind'](_r46_t0);
        r46_xn$startfrom$1aao = _r46_t0['start-from']['bind'](_r46_t0);
        r46_xn$lineto$5sIl = _r46_t0['line-to']['bind'](_r46_t0);
        r46_xn$curveto$1aao = _r46_t0['curve-to']['bind'](_r46_t0);
        r46_xn$cubicto$1aao = _r46_t0['cubic-to']['bind'](_r46_t0);
        r46_xn$putshapes$9Jrj = _r46_t0['put-shapes']['bind'](_r46_t0);
        r46_xn$reverselast$3qIs = _r46_t0['reverse-last']['bind'](_r46_t0);
        r46_xn$setwidth$9Jrj(r0_WIDTH);
        r46_xn$assignunicode$7Hrq('x');
        r46_TURN = r0_XH * 0.1;
        r46_barone = new r0_Stroke()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_SB + r0_HALFSTROKE, r46_TURN + 0.17 * (r0_XH - r46_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_XH - r46_TURN - 0.17 * (r0_XH - r46_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_XH)['form-stroke']();
        r46_bartwo = [r46_barone[0]['map'](function _r46_t1(r47_pt) {
                var r47_pt;
                return {
                    'x': r0_WIDTH - r47_pt['x'],
                    'y': r47_pt['y'],
                    'onCurve': r47_pt['onCurve'],
                    'cubic': r47_pt['cubic']
                };
            })['reverse']()];
        r46_xn$putshapes$9Jrj(r46_barone);
        r46_xn$putshapes$9Jrj(r46_bartwo);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('B', function _r0_t30() {
        var r49_xn$setwidth$9Jrj, r49_xn$assignunicode$7Hrq, r49_xn$startfrom$1aao, r49_xn$lineto$5sIl, r49_xn$curveto$1aao, r49_xn$cubicto$1aao, r49_xn$putshapes$9Jrj, r49_xn$reverselast$3qIs, r49_bowl, r49_tkappa, r49_bkappa, r49_turntop, r49_turnbottom, r49_topbowl, r49_bottombowl, r49_leftbar, _r49_t0;
        _r49_t0 = this;
        r49_xn$setwidth$9Jrj = _r49_t0['set-width']['bind'](_r49_t0);
        r49_xn$assignunicode$7Hrq = _r49_t0['assign-unicode']['bind'](_r49_t0);
        r49_xn$startfrom$1aao = _r49_t0['start-from']['bind'](_r49_t0);
        r49_xn$lineto$5sIl = _r49_t0['line-to']['bind'](_r49_t0);
        r49_xn$curveto$1aao = _r49_t0['curve-to']['bind'](_r49_t0);
        r49_xn$cubicto$1aao = _r49_t0['cubic-to']['bind'](_r49_t0);
        r49_xn$putshapes$9Jrj = _r49_t0['put-shapes']['bind'](_r49_t0);
        r49_xn$reverselast$3qIs = _r49_t0['reverse-last']['bind'](_r49_t0);
        r49_xn$setwidth$9Jrj(r0_WIDTH);
        r49_xn$assignunicode$7Hrq('B');
        r49_bowl = 451;
        r49_tkappa = r0_COKAPPA - 0.22;
        r49_bkappa = r0_COKAPPA - 0.2;
        r49_turntop = (r0_CAP + (r49_bowl - r0_STROKE)) / 2;
        r49_turnbottom = r49_bowl / 2;
        r49_topbowl = new r0_Stroke();
        r49_topbowl['start-from'](r0_SB, r0_CAP)['line-to'](r0_RIGHTSB - r0_SB * 0.5 - r49_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5 - r49_tkappa * r49_turnbottom, r0_CAP, r0_RIGHTSB - r0_SB * 0.5, r49_turntop + (r0_CAP - r49_turntop) * r0_KAPPA, r0_RIGHTSB - r0_SB * 0.5, r49_turntop)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5, r49_turntop + r0_KAPPA * (r49_bowl - r0_STROKE - r49_turntop), r0_RIGHTSB - r0_SB * 0.5 - r49_tkappa * r49_turnbottom, r49_bowl - r0_STROKE, r0_RIGHTSB - r0_SB * 0.5 - r49_turnbottom, r49_bowl - r0_STROKE)['line-to'](r0_SB, r49_bowl - r0_STROKE);
        r49_bottombowl = new r0_Stroke();
        r49_bottombowl['start-from'](r0_SB, 0)['line-to'](r0_RIGHTSB - r49_turnbottom, 0)['cubic-to'](r0_RIGHTSB - r49_bkappa * r49_turnbottom, 0, r0_RIGHTSB, r49_turnbottom * r0_KAPPA, r0_RIGHTSB, r49_turnbottom)['cubic-to'](r0_RIGHTSB, r49_turnbottom + r0_KAPPA * (r49_bowl - r49_turnbottom), r0_RIGHTSB - r49_bkappa * r49_turnbottom, r49_bowl, r0_RIGHTSB - r49_turnbottom, r49_bowl)['line-to'](r0_SB, r49_bowl);
        r49_leftbar = new r0_Stroke()['start-from'](r0_SB, 0)['line-to'](r0_SB, r0_CAP);
        r49_xn$putshapes$9Jrj(r49_topbowl['form-stroke'](0, r0_STROKE));
        r49_xn$putshapes$9Jrj(r49_bottombowl['form-stroke'](r0_STROKE, 0));
        r49_xn$putshapes$9Jrj(r49_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('C', function _r0_t31() {
        var r51_xn$setwidth$9Jrj, r51_xn$assignunicode$7Hrq, r51_xn$startfrom$1aao, r51_xn$lineto$5sIl, r51_xn$curveto$1aao, r51_xn$cubicto$1aao, r51_xn$putshapes$9Jrj, r51_xn$reverselast$3qIs, r51_outline, _r51_t0;
        _r51_t0 = this;
        r51_xn$setwidth$9Jrj = _r51_t0['set-width']['bind'](_r51_t0);
        r51_xn$assignunicode$7Hrq = _r51_t0['assign-unicode']['bind'](_r51_t0);
        r51_xn$startfrom$1aao = _r51_t0['start-from']['bind'](_r51_t0);
        r51_xn$lineto$5sIl = _r51_t0['line-to']['bind'](_r51_t0);
        r51_xn$curveto$1aao = _r51_t0['curve-to']['bind'](_r51_t0);
        r51_xn$cubicto$1aao = _r51_t0['cubic-to']['bind'](_r51_t0);
        r51_xn$putshapes$9Jrj = _r51_t0['put-shapes']['bind'](_r51_t0);
        r51_xn$reverselast$3qIs = _r51_t0['reverse-last']['bind'](_r51_t0);
        r51_xn$setwidth$9Jrj(r0_WIDTH);
        r51_xn$assignunicode$7Hrq('C');
        r51_outline = new r0_Stroke();
        r51_outline['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_SB * 0.1, r0_HOOK);
        r51_xn$putshapes$9Jrj(r51_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('D', function _r0_t32() {
        var r53_xn$setwidth$9Jrj, r53_xn$assignunicode$7Hrq, r53_xn$startfrom$1aao, r53_xn$lineto$5sIl, r53_xn$curveto$1aao, r53_xn$cubicto$1aao, r53_xn$putshapes$9Jrj, r53_xn$reverselast$3qIs, r53_dsmooth, r53_bsmooth, r53_bkappa, r53_leftbar, r53_bowl, _r53_t0;
        _r53_t0 = this;
        r53_xn$setwidth$9Jrj = _r53_t0['set-width']['bind'](_r53_t0);
        r53_xn$assignunicode$7Hrq = _r53_t0['assign-unicode']['bind'](_r53_t0);
        r53_xn$startfrom$1aao = _r53_t0['start-from']['bind'](_r53_t0);
        r53_xn$lineto$5sIl = _r53_t0['line-to']['bind'](_r53_t0);
        r53_xn$curveto$1aao = _r53_t0['curve-to']['bind'](_r53_t0);
        r53_xn$cubicto$1aao = _r53_t0['cubic-to']['bind'](_r53_t0);
        r53_xn$putshapes$9Jrj = _r53_t0['put-shapes']['bind'](_r53_t0);
        r53_xn$reverselast$3qIs = _r53_t0['reverse-last']['bind'](_r53_t0);
        r53_xn$setwidth$9Jrj(r0_WIDTH);
        r53_xn$assignunicode$7Hrq('D');
        r53_dsmooth = r0_SMOOTH * 1.55;
        r53_bsmooth = r0_SMOOTH * 1.3;
        r53_bkappa = r0_COKAPPA - 0.2;
        r53_leftbar = new r0_Stroke()['start-from'](r0_SB, 0)['line-to'](r0_SB, r0_CAP);
        r53_bowl = new r0_Stroke();
        r53_bowl['start-from'](r0_SB, 0)['line-to'](r0_RIGHTSB - r53_bsmooth, 0)['cubic-to'](r0_RIGHTSB - r53_bkappa * r53_bsmooth, 0, r0_RIGHTSB, r0_COBKAPPA * r53_dsmooth, r0_RIGHTSB, r53_dsmooth)['line-to'](r0_RIGHTSB, r0_CAP - r53_dsmooth)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r53_dsmooth, r0_RIGHTSB - r53_bkappa * r53_bsmooth, r0_CAP, r0_RIGHTSB - r53_bsmooth, r0_CAP)['line-to'](r0_SB, r0_CAP);
        r53_xn$putshapes$9Jrj(r53_bowl['form-stroke'](r0_STROKE, 0));
        r53_xn$putshapes$9Jrj(r53_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('G', function _r0_t33() {
        var r55_xn$setwidth$9Jrj, r55_xn$assignunicode$7Hrq, r55_xn$startfrom$1aao, r55_xn$lineto$5sIl, r55_xn$curveto$1aao, r55_xn$cubicto$1aao, r55_xn$putshapes$9Jrj, r55_xn$reverselast$3qIs, r55_outline, r55_bar, _r55_t0;
        _r55_t0 = this;
        r55_xn$setwidth$9Jrj = _r55_t0['set-width']['bind'](_r55_t0);
        r55_xn$assignunicode$7Hrq = _r55_t0['assign-unicode']['bind'](_r55_t0);
        r55_xn$startfrom$1aao = _r55_t0['start-from']['bind'](_r55_t0);
        r55_xn$lineto$5sIl = _r55_t0['line-to']['bind'](_r55_t0);
        r55_xn$curveto$1aao = _r55_t0['curve-to']['bind'](_r55_t0);
        r55_xn$cubicto$1aao = _r55_t0['cubic-to']['bind'](_r55_t0);
        r55_xn$putshapes$9Jrj = _r55_t0['put-shapes']['bind'](_r55_t0);
        r55_xn$reverselast$3qIs = _r55_t0['reverse-last']['bind'](_r55_t0);
        r55_xn$setwidth$9Jrj(r0_WIDTH);
        r55_xn$assignunicode$7Hrq('G');
        r55_outline = new r0_Stroke();
        r55_outline['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['cubic-to'](r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_RIGHTSB, r0_SMOOTH)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2);
        r55_xn$putshapes$9Jrj(r55_outline['form-stroke'](r0_STROKE, 0));
        r55_bar = new r0_Stroke()['start-from'](r0_MIDDLE, r0_CAP / 2 + r0_STROKE / 2)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2);
        r55_xn$putshapes$9Jrj(r55_bar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('O', function _r0_t34() {
        var r57_xn$setwidth$9Jrj, r57_xn$assignunicode$7Hrq, r57_xn$startfrom$1aao, r57_xn$lineto$5sIl, r57_xn$curveto$1aao, r57_xn$cubicto$1aao, r57_xn$putshapes$9Jrj, r57_xn$reverselast$3qIs, r57_outline, _r57_t0;
        _r57_t0 = this;
        r57_xn$setwidth$9Jrj = _r57_t0['set-width']['bind'](_r57_t0);
        r57_xn$assignunicode$7Hrq = _r57_t0['assign-unicode']['bind'](_r57_t0);
        r57_xn$startfrom$1aao = _r57_t0['start-from']['bind'](_r57_t0);
        r57_xn$lineto$5sIl = _r57_t0['line-to']['bind'](_r57_t0);
        r57_xn$curveto$1aao = _r57_t0['curve-to']['bind'](_r57_t0);
        r57_xn$cubicto$1aao = _r57_t0['cubic-to']['bind'](_r57_t0);
        r57_xn$putshapes$9Jrj = _r57_t0['put-shapes']['bind'](_r57_t0);
        r57_xn$reverselast$3qIs = _r57_t0['reverse-last']['bind'](_r57_t0);
        r57_xn$setwidth$9Jrj(r0_WIDTH);
        r57_xn$assignunicode$7Hrq('O');
        r57_outline = new r0_Stroke();
        r57_outline['start-from'](r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP - r0_SMOOTH)['line-to'](r0_SB, r0_SMOOTH)['cubic-to'](r0_SB, r0_COBKAPPA * r0_SMOOTH, r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_O, r0_WIDTH / 2, r0_O)['cubic-to'](r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_RIGHTSB, r0_SMOOTH)['line-to'](r0_RIGHTSB, r0_CAP - r0_SMOOTH)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_CAPO, r0_MIDDLE, r0_CAPO);
        r57_xn$putshapes$9Jrj(r57_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o', function _r0_t35() {
        var r59_xn$setwidth$9Jrj, r59_xn$assignunicode$7Hrq, r59_xn$startfrom$1aao, r59_xn$lineto$5sIl, r59_xn$curveto$1aao, r59_xn$cubicto$1aao, r59_xn$putshapes$9Jrj, r59_xn$reverselast$3qIs, _r59_t0;
        _r59_t0 = this;
        r59_xn$setwidth$9Jrj = _r59_t0['set-width']['bind'](_r59_t0);
        r59_xn$assignunicode$7Hrq = _r59_t0['assign-unicode']['bind'](_r59_t0);
        r59_xn$startfrom$1aao = _r59_t0['start-from']['bind'](_r59_t0);
        r59_xn$lineto$5sIl = _r59_t0['line-to']['bind'](_r59_t0);
        r59_xn$curveto$1aao = _r59_t0['curve-to']['bind'](_r59_t0);
        r59_xn$cubicto$1aao = _r59_t0['cubic-to']['bind'](_r59_t0);
        r59_xn$putshapes$9Jrj = _r59_t0['put-shapes']['bind'](_r59_t0);
        r59_xn$reverselast$3qIs = _r59_t0['reverse-last']['bind'](_r59_t0);
        r59_xn$setwidth$9Jrj(r0_WIDTH);
        r59_xn$assignunicode$7Hrq('o');
        r59_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB, r0_RIGHTSB, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r59_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.left', function _r0_t36() {
        var r61_xn$setwidth$9Jrj, r61_xn$assignunicode$7Hrq, r61_xn$startfrom$1aao, r61_xn$lineto$5sIl, r61_xn$curveto$1aao, r61_xn$cubicto$1aao, r61_xn$putshapes$9Jrj, r61_xn$reverselast$3qIs, _r61_t0;
        _r61_t0 = this;
        r61_xn$setwidth$9Jrj = _r61_t0['set-width']['bind'](_r61_t0);
        r61_xn$assignunicode$7Hrq = _r61_t0['assign-unicode']['bind'](_r61_t0);
        r61_xn$startfrom$1aao = _r61_t0['start-from']['bind'](_r61_t0);
        r61_xn$lineto$5sIl = _r61_t0['line-to']['bind'](_r61_t0);
        r61_xn$curveto$1aao = _r61_t0['curve-to']['bind'](_r61_t0);
        r61_xn$cubicto$1aao = _r61_t0['cubic-to']['bind'](_r61_t0);
        r61_xn$putshapes$9Jrj = _r61_t0['put-shapes']['bind'](_r61_t0);
        r61_xn$reverselast$3qIs = _r61_t0['reverse-last']['bind'](_r61_t0);
        r61_xn$setwidth$9Jrj(r0_WIDTH);
        r61_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB + r0_STROKE / 2, r0_RIGHTSB, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r61_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.right', function _r0_t37() {
        var r63_xn$setwidth$9Jrj, r63_xn$assignunicode$7Hrq, r63_xn$startfrom$1aao, r63_xn$lineto$5sIl, r63_xn$curveto$1aao, r63_xn$cubicto$1aao, r63_xn$putshapes$9Jrj, r63_xn$reverselast$3qIs, _r63_t0;
        _r63_t0 = this;
        r63_xn$setwidth$9Jrj = _r63_t0['set-width']['bind'](_r63_t0);
        r63_xn$assignunicode$7Hrq = _r63_t0['assign-unicode']['bind'](_r63_t0);
        r63_xn$startfrom$1aao = _r63_t0['start-from']['bind'](_r63_t0);
        r63_xn$lineto$5sIl = _r63_t0['line-to']['bind'](_r63_t0);
        r63_xn$curveto$1aao = _r63_t0['curve-to']['bind'](_r63_t0);
        r63_xn$cubicto$1aao = _r63_t0['cubic-to']['bind'](_r63_t0);
        r63_xn$putshapes$9Jrj = _r63_t0['put-shapes']['bind'](_r63_t0);
        r63_xn$reverselast$3qIs = _r63_t0['reverse-last']['bind'](_r63_t0);
        r63_xn$setwidth$9Jrj(r0_WIDTH);
        r63_xn$putshapes$9Jrj([
            r0_ORing(r0_XO, r0_O, r0_SB, r0_RIGHTSB - r0_STROKE / 2, r0_SMALLSMOOTH),
            r0_ORing(r0_XO - r0_STROKE, r0_O + r0_STROKE, r0_SB + r0_STROKE, r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r63_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('p', function _r0_t38() {
        var r65_xn$setwidth$9Jrj, r65_xn$assignunicode$7Hrq, r65_xn$startfrom$1aao, r65_xn$lineto$5sIl, r65_xn$curveto$1aao, r65_xn$cubicto$1aao, r65_xn$putshapes$9Jrj, r65_xn$reverselast$3qIs, _r65_t0;
        _r65_t0 = this;
        r65_xn$setwidth$9Jrj = _r65_t0['set-width']['bind'](_r65_t0);
        r65_xn$assignunicode$7Hrq = _r65_t0['assign-unicode']['bind'](_r65_t0);
        r65_xn$startfrom$1aao = _r65_t0['start-from']['bind'](_r65_t0);
        r65_xn$lineto$5sIl = _r65_t0['line-to']['bind'](_r65_t0);
        r65_xn$curveto$1aao = _r65_t0['curve-to']['bind'](_r65_t0);
        r65_xn$cubicto$1aao = _r65_t0['cubic-to']['bind'](_r65_t0);
        r65_xn$putshapes$9Jrj = _r65_t0['put-shapes']['bind'](_r65_t0);
        r65_xn$reverselast$3qIs = _r65_t0['reverse-last']['bind'](_r65_t0);
        r65_xn$setwidth$9Jrj(r0_WIDTH);
        r65_xn$assignunicode$7Hrq('p');
        r65_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r65_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, r0_XH)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_DESCENDER)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('b', function _r0_t39() {
        var r67_xn$setwidth$9Jrj, r67_xn$assignunicode$7Hrq, r67_xn$startfrom$1aao, r67_xn$lineto$5sIl, r67_xn$curveto$1aao, r67_xn$cubicto$1aao, r67_xn$putshapes$9Jrj, r67_xn$reverselast$3qIs, _r67_t0;
        _r67_t0 = this;
        r67_xn$setwidth$9Jrj = _r67_t0['set-width']['bind'](_r67_t0);
        r67_xn$assignunicode$7Hrq = _r67_t0['assign-unicode']['bind'](_r67_t0);
        r67_xn$startfrom$1aao = _r67_t0['start-from']['bind'](_r67_t0);
        r67_xn$lineto$5sIl = _r67_t0['line-to']['bind'](_r67_t0);
        r67_xn$curveto$1aao = _r67_t0['curve-to']['bind'](_r67_t0);
        r67_xn$cubicto$1aao = _r67_t0['cubic-to']['bind'](_r67_t0);
        r67_xn$putshapes$9Jrj = _r67_t0['put-shapes']['bind'](_r67_t0);
        r67_xn$reverselast$3qIs = _r67_t0['reverse-last']['bind'](_r67_t0);
        r67_xn$setwidth$9Jrj(r0_WIDTH);
        r67_xn$assignunicode$7Hrq('b');
        r67_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r67_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, 0)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('q', function _r0_t40() {
        var r69_xn$setwidth$9Jrj, r69_xn$assignunicode$7Hrq, r69_xn$startfrom$1aao, r69_xn$lineto$5sIl, r69_xn$curveto$1aao, r69_xn$cubicto$1aao, r69_xn$putshapes$9Jrj, r69_xn$reverselast$3qIs, _r69_t0;
        _r69_t0 = this;
        r69_xn$setwidth$9Jrj = _r69_t0['set-width']['bind'](_r69_t0);
        r69_xn$assignunicode$7Hrq = _r69_t0['assign-unicode']['bind'](_r69_t0);
        r69_xn$startfrom$1aao = _r69_t0['start-from']['bind'](_r69_t0);
        r69_xn$lineto$5sIl = _r69_t0['line-to']['bind'](_r69_t0);
        r69_xn$curveto$1aao = _r69_t0['curve-to']['bind'](_r69_t0);
        r69_xn$cubicto$1aao = _r69_t0['cubic-to']['bind'](_r69_t0);
        r69_xn$putshapes$9Jrj = _r69_t0['put-shapes']['bind'](_r69_t0);
        r69_xn$reverselast$3qIs = _r69_t0['reverse-last']['bind'](_r69_t0);
        r69_xn$setwidth$9Jrj(r0_WIDTH);
        r69_xn$assignunicode$7Hrq('q');
        r69_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r69_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, r0_XH)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB, r0_DESCENDER)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('g', function _r0_t41() {
        var r71_xn$setwidth$9Jrj, r71_xn$assignunicode$7Hrq, r71_xn$startfrom$1aao, r71_xn$lineto$5sIl, r71_xn$curveto$1aao, r71_xn$cubicto$1aao, r71_xn$putshapes$9Jrj, r71_xn$reverselast$3qIs, r71_MODDLE, _r71_t0;
        _r71_t0 = this;
        r71_xn$setwidth$9Jrj = _r71_t0['set-width']['bind'](_r71_t0);
        r71_xn$assignunicode$7Hrq = _r71_t0['assign-unicode']['bind'](_r71_t0);
        r71_xn$startfrom$1aao = _r71_t0['start-from']['bind'](_r71_t0);
        r71_xn$lineto$5sIl = _r71_t0['line-to']['bind'](_r71_t0);
        r71_xn$curveto$1aao = _r71_t0['curve-to']['bind'](_r71_t0);
        r71_xn$cubicto$1aao = _r71_t0['cubic-to']['bind'](_r71_t0);
        r71_xn$putshapes$9Jrj = _r71_t0['put-shapes']['bind'](_r71_t0);
        r71_xn$reverselast$3qIs = _r71_t0['reverse-last']['bind'](_r71_t0);
        r71_xn$setwidth$9Jrj(r0_WIDTH);
        r71_xn$assignunicode$7Hrq('g');
        r71_xn$putshapes$9Jrj([
            r0_Ring(r0_XO, r0_XH * 0.4, r0_SB * 1.5, r0_RIGHTSB - 0.5 * r0_SB, r0_SMALLSMOOTH),
            r0_Ring(r0_XO - r0_STROKE, r0_XH * 0.4 + r0_STROKE, r0_SB * 1.5 + r0_STROKE, r0_RIGHTSB - 0.5 * r0_SB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r71_xn$reverselast$3qIs();
        r71_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_XH * 0.4)['set-width'](0, r0_STROKE * 0.75)['arc-hv-to'](r0_SB * 1.5 + r0_STROKE, (r0_O - r0_DESCENDER * 0.85 + r0_XH * 0.4) / 2)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['line-to'](r0_MIDDLE - r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['arc-hv-to'](r0_RIGHTSB - r0_O * 2, 0)['arc-vh-to'](r0_MIDDLE, r0_DESCENDER + r0_O)['arc-hv-to'](r0_SB, r0_DESCENDER * 0.1)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['form-stroke']());
        r71_xn$startfrom$1aao(r0_RIGHTSB, r0_XH);
        r71_xn$lineto$5sIl(r0_RIGHTSB, r0_XH - r0_STROKE);
        r71_xn$lineto$5sIl(r0_MIDDLE, r0_XH - r0_STROKE - r0_O);
        r71_xn$lineto$5sIl(r71_MODDLE, r0_XH);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('d', function _r0_t42() {
        var r73_xn$setwidth$9Jrj, r73_xn$assignunicode$7Hrq, r73_xn$startfrom$1aao, r73_xn$lineto$5sIl, r73_xn$curveto$1aao, r73_xn$cubicto$1aao, r73_xn$putshapes$9Jrj, r73_xn$reverselast$3qIs, _r73_t0;
        _r73_t0 = this;
        r73_xn$setwidth$9Jrj = _r73_t0['set-width']['bind'](_r73_t0);
        r73_xn$assignunicode$7Hrq = _r73_t0['assign-unicode']['bind'](_r73_t0);
        r73_xn$startfrom$1aao = _r73_t0['start-from']['bind'](_r73_t0);
        r73_xn$lineto$5sIl = _r73_t0['line-to']['bind'](_r73_t0);
        r73_xn$curveto$1aao = _r73_t0['curve-to']['bind'](_r73_t0);
        r73_xn$cubicto$1aao = _r73_t0['cubic-to']['bind'](_r73_t0);
        r73_xn$putshapes$9Jrj = _r73_t0['put-shapes']['bind'](_r73_t0);
        r73_xn$reverselast$3qIs = _r73_t0['reverse-last']['bind'](_r73_t0);
        r73_xn$setwidth$9Jrj(r0_WIDTH);
        r73_xn$assignunicode$7Hrq('d');
        r73_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r73_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero', function _r0_t43() {
        var r75_xn$setwidth$9Jrj, r75_xn$assignunicode$7Hrq, r75_xn$startfrom$1aao, r75_xn$lineto$5sIl, r75_xn$curveto$1aao, r75_xn$cubicto$1aao, r75_xn$putshapes$9Jrj, r75_xn$reverselast$3qIs, r75_bar, _r75_t0;
        _r75_t0 = this;
        r75_xn$setwidth$9Jrj = _r75_t0['set-width']['bind'](_r75_t0);
        r75_xn$assignunicode$7Hrq = _r75_t0['assign-unicode']['bind'](_r75_t0);
        r75_xn$startfrom$1aao = _r75_t0['start-from']['bind'](_r75_t0);
        r75_xn$lineto$5sIl = _r75_t0['line-to']['bind'](_r75_t0);
        r75_xn$curveto$1aao = _r75_t0['curve-to']['bind'](_r75_t0);
        r75_xn$cubicto$1aao = _r75_t0['cubic-to']['bind'](_r75_t0);
        r75_xn$putshapes$9Jrj = _r75_t0['put-shapes']['bind'](_r75_t0);
        r75_xn$reverselast$3qIs = _r75_t0['reverse-last']['bind'](_r75_t0);
        r75_xn$setwidth$9Jrj(r0_WIDTH);
        r75_xn$assignunicode$7Hrq('0');
        r75_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r75_bar = new r0_Stroke()['start-from'](r0_SB + r0_STROKE / 2, r0_CAP * (1 - 0.65))['line-to'](r0_RIGHTSB - r0_STROKE / 2, r0_CAP * 0.65);
        r75_xn$putshapes$9Jrj(r75_bar['form-stroke'](r0_STROKE / 2, r0_STROKE / 2));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Q', function _r0_t44() {
        var r77_xn$setwidth$9Jrj, r77_xn$assignunicode$7Hrq, r77_xn$startfrom$1aao, r77_xn$lineto$5sIl, r77_xn$curveto$1aao, r77_xn$cubicto$1aao, r77_xn$putshapes$9Jrj, r77_xn$reverselast$3qIs, _r77_t0;
        _r77_t0 = this;
        r77_xn$setwidth$9Jrj = _r77_t0['set-width']['bind'](_r77_t0);
        r77_xn$assignunicode$7Hrq = _r77_t0['assign-unicode']['bind'](_r77_t0);
        r77_xn$startfrom$1aao = _r77_t0['start-from']['bind'](_r77_t0);
        r77_xn$lineto$5sIl = _r77_t0['line-to']['bind'](_r77_t0);
        r77_xn$curveto$1aao = _r77_t0['curve-to']['bind'](_r77_t0);
        r77_xn$cubicto$1aao = _r77_t0['cubic-to']['bind'](_r77_t0);
        r77_xn$putshapes$9Jrj = _r77_t0['put-shapes']['bind'](_r77_t0);
        r77_xn$reverselast$3qIs = _r77_t0['reverse-last']['bind'](_r77_t0);
        r77_xn$setwidth$9Jrj(r0_WIDTH);
        r77_xn$assignunicode$7Hrq('Q');
        r77_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r77_xn$startfrom$1aao(r0_MIDDLE, 0);
        r77_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, -r0_CAP * 0.2);
        r77_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2 + r0_STROKE, -r0_CAP * 0.2);
        r77_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE, 0);
        r77_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE * (1 - 0.5 / 3), r0_STROKE * 0.5);
        r77_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('H', function _r0_t45() {
        var r79_xn$setwidth$9Jrj, r79_xn$assignunicode$7Hrq, r79_xn$startfrom$1aao, r79_xn$lineto$5sIl, r79_xn$curveto$1aao, r79_xn$cubicto$1aao, r79_xn$putshapes$9Jrj, r79_xn$reverselast$3qIs, _r79_t0;
        _r79_t0 = this;
        r79_xn$setwidth$9Jrj = _r79_t0['set-width']['bind'](_r79_t0);
        r79_xn$assignunicode$7Hrq = _r79_t0['assign-unicode']['bind'](_r79_t0);
        r79_xn$startfrom$1aao = _r79_t0['start-from']['bind'](_r79_t0);
        r79_xn$lineto$5sIl = _r79_t0['line-to']['bind'](_r79_t0);
        r79_xn$curveto$1aao = _r79_t0['curve-to']['bind'](_r79_t0);
        r79_xn$cubicto$1aao = _r79_t0['cubic-to']['bind'](_r79_t0);
        r79_xn$putshapes$9Jrj = _r79_t0['put-shapes']['bind'](_r79_t0);
        r79_xn$reverselast$3qIs = _r79_t0['reverse-last']['bind'](_r79_t0);
        r79_xn$setwidth$9Jrj(r0_WIDTH);
        r79_xn$assignunicode$7Hrq('H');
        r79_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, 0)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['form-stroke']());
        r79_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_RIGHTSB, 0)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['form-stroke']());
        r79_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB, r0_CAP / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_RIGHTSB, r0_CAP / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('L', function _r0_t46() {
        var r81_xn$setwidth$9Jrj, r81_xn$assignunicode$7Hrq, r81_xn$startfrom$1aao, r81_xn$lineto$5sIl, r81_xn$curveto$1aao, r81_xn$cubicto$1aao, r81_xn$putshapes$9Jrj, r81_xn$reverselast$3qIs, _r81_t0;
        _r81_t0 = this;
        r81_xn$setwidth$9Jrj = _r81_t0['set-width']['bind'](_r81_t0);
        r81_xn$assignunicode$7Hrq = _r81_t0['assign-unicode']['bind'](_r81_t0);
        r81_xn$startfrom$1aao = _r81_t0['start-from']['bind'](_r81_t0);
        r81_xn$lineto$5sIl = _r81_t0['line-to']['bind'](_r81_t0);
        r81_xn$curveto$1aao = _r81_t0['curve-to']['bind'](_r81_t0);
        r81_xn$cubicto$1aao = _r81_t0['cubic-to']['bind'](_r81_t0);
        r81_xn$putshapes$9Jrj = _r81_t0['put-shapes']['bind'](_r81_t0);
        r81_xn$reverselast$3qIs = _r81_t0['reverse-last']['bind'](_r81_t0);
        r81_xn$setwidth$9Jrj(r0_WIDTH);
        r81_xn$assignunicode$7Hrq('L');
        r81_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB * 1.5, r0_CAP)['line-to'](r0_SB * 1.5, 0)['form-stroke'](r0_STROKE, 0));
        r81_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_SB * 1.5, 0)['line-to'](r0_RIGHTSB, 0)['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('S', function _r0_t47() {
        var r83_xn$setwidth$9Jrj, r83_xn$assignunicode$7Hrq, r83_xn$startfrom$1aao, r83_xn$lineto$5sIl, r83_xn$curveto$1aao, r83_xn$cubicto$1aao, r83_xn$putshapes$9Jrj, r83_xn$reverselast$3qIs, r83_slope, r83_bowltop, r83_strokemiddle, r83_bowlbottom, _r83_t0;
        _r83_t0 = this;
        r83_xn$setwidth$9Jrj = _r83_t0['set-width']['bind'](_r83_t0);
        r83_xn$assignunicode$7Hrq = _r83_t0['assign-unicode']['bind'](_r83_t0);
        r83_xn$startfrom$1aao = _r83_t0['start-from']['bind'](_r83_t0);
        r83_xn$lineto$5sIl = _r83_t0['line-to']['bind'](_r83_t0);
        r83_xn$curveto$1aao = _r83_t0['curve-to']['bind'](_r83_t0);
        r83_xn$cubicto$1aao = _r83_t0['cubic-to']['bind'](_r83_t0);
        r83_xn$putshapes$9Jrj = _r83_t0['put-shapes']['bind'](_r83_t0);
        r83_xn$reverselast$3qIs = _r83_t0['reverse-last']['bind'](_r83_t0);
        r83_xn$setwidth$9Jrj(r0_WIDTH);
        r83_xn$assignunicode$7Hrq('S');
        r83_slope = 0.11;
        r83_bowltop = new r0_Stroke();
        r83_bowltop['start-from'](r0_RIGHTSB - r0_SB * 0.1, r0_CAP - r0_HOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['cubic-to'](r0_SB + (1 - r0_BKAPPA) * (r0_WIDTH / 2 - r0_SB), r0_CAPO, r0_SB, r0_CAP - r0_COBKAPPA * r0_SMOOTH, r0_SB, r0_CAP_SMOOTH);
        r83_strokemiddle = new r0_Stroke();
        r83_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_CAP_SMOOTH)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r83_slope) * r0_CAP + 2 * r83_slope * r0_CAP / (0.4 * r0_WIDTH) * (0.3 * r0_WIDTH - r0_SB - r0_STROKE / 2), 0.3 * r0_WIDTH, (0.5 + r83_slope) * r0_CAP)['line-to'](0.7 * r0_WIDTH, (0.5 - r83_slope) * r0_CAP)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r83_slope) * r0_CAP - 2 * r83_slope * r0_CAP / (0.4 * r0_WIDTH) * (0.3 * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r0_SMOOTH);
        r83_bowlbottom = new r0_Stroke();
        r83_bowlbottom['start-from'](r0_RIGHTSB, r0_SMOOTH)['set-width'](0, r0_STROKE)['cubic-to'](r0_RIGHTSB, r0_COBKAPPA * r0_SMOOTH, r0_MIDDLE + r0_BKAPPA * (r0_RIGHTSB - r0_MIDDLE), r0_O, r0_MIDDLE, r0_O)['curve-to'](r0_MIDDLE - r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB * 1.1, r0_HOOK);
        r83_xn$putshapes$9Jrj(r83_bowltop['form-stroke']());
        r83_xn$putshapes$9Jrj(r83_strokemiddle['form-stroke']());
        r83_xn$putshapes$9Jrj(r83_bowlbottom['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dollar', function _r0_t48() {
        var r85_xn$setwidth$9Jrj, r85_xn$assignunicode$7Hrq, r85_xn$startfrom$1aao, r85_xn$lineto$5sIl, r85_xn$curveto$1aao, r85_xn$cubicto$1aao, r85_xn$putshapes$9Jrj, r85_xn$reverselast$3qIs, _r85_t0;
        _r85_t0 = this;
        r85_xn$setwidth$9Jrj = _r85_t0['set-width']['bind'](_r85_t0);
        r85_xn$assignunicode$7Hrq = _r85_t0['assign-unicode']['bind'](_r85_t0);
        r85_xn$startfrom$1aao = _r85_t0['start-from']['bind'](_r85_t0);
        r85_xn$lineto$5sIl = _r85_t0['line-to']['bind'](_r85_t0);
        r85_xn$curveto$1aao = _r85_t0['curve-to']['bind'](_r85_t0);
        r85_xn$cubicto$1aao = _r85_t0['cubic-to']['bind'](_r85_t0);
        r85_xn$putshapes$9Jrj = _r85_t0['put-shapes']['bind'](_r85_t0);
        r85_xn$reverselast$3qIs = _r85_t0['reverse-last']['bind'](_r85_t0);
        r85_xn$setwidth$9Jrj(r0_WIDTH);
        r85_xn$assignunicode$7Hrq('$');
        r85_xn$putshapes$9Jrj(r0_glyphs['S']['contours']);
        r85_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_CAP)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        r85_xn$putshapes$9Jrj(new r0_Stroke()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, 0)['form-stroke']());
        return void 0;
    });
    exports['font'] = r0_font;
}
