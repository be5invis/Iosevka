{
    var r0_smooth, r0_intersection, r0_Bezier, r0_xn$rangearray$1aao, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13;
    r0_smooth = require('./monotonic-interpolate')['createInterpolant'];
    r0_intersection = require('./intersection')['intersection'];
    r0_Bezier = require('bezier-js');
    r0_xn$rangearray$1aao = function _r0_t0(r1_low, r1_high) {
        var r1_low, r1_high, r1_a, r1_j;
        r1_a = [];
        r1_j = r1_low;
        for (; r1_j < r1_high; r1_j = r1_j + 1) {
            r1_a['push'](r1_j);
        }
        return r1_a;
    };
    r0_SAMPLES = 4;
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_KAPPA = 0.51;
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_Stroke = function _r0_t1() {
        var _r2_t0;
        _r2_t0 = this;
        _r2_t0['points'] = [];
        return _r2_t0;
    };
    r0_Stroke['bindParameters'] = function _r0_t2(r3_para) {
        var r3_para;
        r0_KAPPA = r3_para['kappa'];
        r0_COKAPPA = 1 - r0_KAPPA;
        r0_COBKAPPA = r0_COKAPPA - 0.1;
        return r0_BKAPPA = r0_KAPPA + 0.1;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t3(r4_d1, r4_d2) {
        var r4_d1, r4_d2, r4_point, _r4_t0;
        _r4_t0 = this;
        r4_point = _r4_t0['points'][_r4_t0['points']['length'] - 1];
        r4_point['d1'] = r4_d1;
        r4_point['d2'] = r4_d2;
        return _r4_t0;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0;
        _r5_t0 = this;
        _r5_t0['points'] = [{
                'x': r5_x,
                'y': r5_y,
                'onCurve': true
            }];
        return _r5_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t5(r6_x, r6_y) {
        var r6_x, r6_y, _r6_t0;
        _r6_t0 = this;
        _r6_t0['points']['push']({
            'x': r6_x,
            'y': r6_y,
            'onCurve': true
        });
        return _r6_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t6(r7_xc, r7_yc, r7_x, r7_y) {
        var r7_xc, r7_yc, r7_x, r7_y, _r7_t0;
        _r7_t0 = this;
        _r7_t0['points']['push']({
            'x': r7_xc,
            'y': r7_yc,
            'onCurve': false
        }, {
            'x': r7_x,
            'y': r7_y,
            'onCurve': true
        });
        return _r7_t0;
    };
    r0_Stroke['prototype']['cubic-to'] = function _r0_t7(r8_x1, r8_y1, r8_x2, r8_y2, r8_x, r8_y) {
        var r8_x1, r8_y1, r8_x2, r8_y2, r8_x, r8_y, _r8_t0;
        _r8_t0 = this;
        _r8_t0['points']['push']({
            'x': r8_x1,
            'y': r8_y1,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r8_x2,
            'y': r8_y2,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r8_x,
            'y': r8_y,
            'onCurve': true
        });
        return _r8_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t8(r9_x, r9_y) {
        var r9_x, r9_y, r9_last, _r9_t0;
        _r9_t0 = this;
        r9_last = _r9_t0['points'][_r9_t0['points']['length'] - 1];
        _r9_t0['cubic-to'](r9_last['x'], r9_last['y'] + r0_BKAPPA * (r9_y - r9_last['y']), r9_x + r0_BKAPPA * (r9_last['x'] - r9_x), r9_y, r9_x, r9_y);
        return _r9_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t9(r10_x, r10_y) {
        var r10_x, r10_y, r10_last, _r10_t0;
        _r10_t0 = this;
        r10_last = _r10_t0['points'][_r10_t0['points']['length'] - 1];
        _r10_t0['cubic-to'](r10_last['x'] + r0_BKAPPA * (r10_x - r10_last['x']), r10_last['y'], r10_x, r10_y + r0_BKAPPA * (r10_last['y'] - r10_y), r10_x, r10_y);
        return _r10_t0;
    };
    r0_dforward = function _r0_t10(r11_p0, r11_p1, r11_p2, r11_p3) {
        var r11_p0, r11_p1, r11_p2, r11_p3;
        return {
            'x': r11_p0['x'] + (-11 / 6 * r11_p0['x'] + 3 * r11_p1['x'] - 3 / 2 * r11_p2['x'] + r11_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r11_p0['y'] + (-11 / 6 * r11_p0['y'] + 3 * r11_p1['y'] - 3 / 2 * r11_p2['y'] + r11_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t11(r12_p0, r12_p1, r12_p2, r12_p3) {
        var r12_p0, r12_p1, r12_p2, r12_p3;
        return {
            'x': r12_p0['x'] + (11 / 6 * r12_p0['x'] - 3 * r12_p1['x'] + 3 / 2 * r12_p2['x'] - r12_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r12_p0['y'] + (11 / 6 * r12_p0['y'] - 3 * r12_p1['y'] + 3 / 2 * r12_p2['y'] - r12_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t12(r13_a, r13_b, r13_c) {
        var r13_a, r13_b, r13_c;
        return Math['abs']((r13_c['y'] - r13_a['y']) * (r13_b['x'] - r13_a['x']) - (r13_c['x'] - r13_a['x']) * (r13_b['y'] - r13_a['y'])) > r0_TINY;
    };
    r0_Stroke['prototype']['form-stroke'] = function _r0_t13(r14_d1, r14_d2) {
        var r14_d1, r14_d2, r14_d1s, r14_d2s, r14_subSegments, r14_p0, r14_j, r14_p1, r14_p2, r14_p3, r14_f1, r14_f2, r14_left, r14_right, r14_seg, r14_curve, r14_sample, r14_t, r14_tn, r14_lthis, r14_rthis, r14_lnext, r14_rnext, r14_lnthis1, r14_rnthis1, r14_lnnext1, r14_rnnext1, r14_lnthis2, r14_rnthis2, r14_lnnext2, r14_rnnext2, r14_lnthis3, r14_rnthis3, r14_lnnext3, r14_rnnext3, r14_dlthis, r14_drthis, r14_dlnext, r14_drnext, r14_il, r14_ir, r14_last, r14_shape, _r14_t0, _r14_t1, _r14_t2, _r14_t3, _r14_t4, _r14_t5, _r14_t6, _r14_t7, _r14_t8, _r14_t9, _r14_t10, _r14_t11, _r14_t12, _r14_t13, _r14_t14, _r14_t15, _r14_t16, _r14_t17, _r14_t18, _r14_t19, _r14_t20, _r14_t21, _r14_t22, _r14_t23, _r14_t24, _r14_t25, _r14_t26, _r14_t27, _r14_t28, _r14_t29, _r14_t30, _r14_t31, _r14_t32, _r14_t33, _r14_t34, _r14_t35, _r14_t36, _r14_t37, _r14_t38;
        _r14_t2 = this;
        if (_r14_t2['points'][0]['d1'] >= 0)
            _r14_t3 = _r14_t2['points'][0]['d1'];
        else
            _r14_t3 = r14_d1;
        _r14_t4 = r14_d1 = _r14_t3;
        r14_d1s = [_r14_t4];
        if (_r14_t2['points'][0]['d2'] >= 0)
            _r14_t5 = _r14_t2['points'][0]['d2'];
        else
            _r14_t5 = r14_d2;
        _r14_t6 = r14_d2 = _r14_t5;
        r14_d2s = [_r14_t6];
        r14_subSegments = [];
        r14_p0 = _r14_t2['points'][0];
        r14_j = 1;
        for (; r14_j < this['points']['length']; r14_j = r14_j + 1) {
            r14_p1 = _r14_t2['points'][r14_j];
            if (r14_p1['onCurve']) {
                r14_subSegments['push']([
                    r14_p0,
                    {
                        'x': (r14_p0['x'] + r14_p1['x']) / 2,
                        'y': (r14_p0['y'] + r14_p1['y']) / 2
                    },
                    r14_p1
                ]);
                _r14_t7 = r14_d1s;
                _r14_t8 = _r14_t7['push'];
                if (r14_p1['d1'] >= 0)
                    _r14_t9 = r14_p1['d1'];
                else
                    _r14_t9 = r14_d1;
                _r14_t10 = r14_d1 = _r14_t9;
                _r14_t8['call'](_r14_t7, _r14_t10);
                _r14_t11 = r14_d2s;
                _r14_t12 = _r14_t11['push'];
                if (r14_p1['d2'] >= 0)
                    _r14_t13 = r14_p1['d2'];
                else
                    _r14_t13 = r14_d2;
                _r14_t14 = r14_d2 = _r14_t13;
                _r14_t12['call'](_r14_t11, _r14_t14);
                r14_p0 = r14_p1;
            } else if (r14_p1['cubic']) {
                r14_p2 = _r14_t2['points'][r14_j + 1];
                r14_p3 = _r14_t2['points'][r14_j + 2];
                _r14_t15 = r14_d1s;
                _r14_t16 = _r14_t15['push'];
                if (r14_p3['d1'] >= 0)
                    _r14_t17 = r14_p3['d1'];
                else
                    _r14_t17 = r14_d1;
                _r14_t18 = r14_d1 = _r14_t17;
                _r14_t16['call'](_r14_t15, _r14_t18);
                _r14_t19 = r14_d2s;
                _r14_t20 = _r14_t19['push'];
                if (r14_p3['d2'] >= 0)
                    _r14_t21 = r14_p3['d2'];
                else
                    _r14_t21 = r14_d2;
                _r14_t22 = r14_d2 = _r14_t21;
                _r14_t20['call'](_r14_t19, _r14_t22);
                r14_subSegments['push']([
                    r14_p0,
                    r14_p1,
                    r14_p2,
                    r14_p3
                ]);
                r14_p0 = r14_p3;
                r14_j = r14_j + 2;
            } else if (true) {
                r14_p2 = _r14_t2['points'][r14_j + 1];
                _r14_t23 = r14_d1s;
                _r14_t24 = _r14_t23['push'];
                if (r14_p2['d1'] >= 0)
                    _r14_t25 = r14_p2['d1'];
                else
                    _r14_t25 = r14_d1;
                _r14_t26 = r14_d1 = _r14_t25;
                _r14_t24['call'](_r14_t23, _r14_t26);
                _r14_t27 = r14_d2s;
                _r14_t28 = _r14_t27['push'];
                if (r14_p2['d2'] >= 0)
                    _r14_t29 = r14_p2['d2'];
                else
                    _r14_t29 = r14_d2;
                _r14_t30 = r14_d2 = _r14_t29;
                _r14_t28['call'](_r14_t27, _r14_t30);
                r14_subSegments['push']([
                    r14_p0,
                    r14_p1,
                    r14_p2
                ]);
                r14_p0 = r14_p2;
                r14_j = r14_j + 1;
            } else
                void 0;
        }
        r14_f1 = r0_smooth(r0_xn$rangearray$1aao(0, r14_d1s['length']), r14_d1s);
        r14_f2 = r0_smooth(r0_xn$rangearray$1aao(0, r14_d2s['length']), r14_d2s);
        r14_left = [];
        r14_right = [];
        r14_j = 0;
        for (; r14_j < r14_subSegments['length']; r14_j = r14_j + 1) {
            r14_seg = r14_subSegments[r14_j];
            if (r14_seg['length'] > 3)
                _r14_t31 = new r0_Bezier(r14_seg[0]['x'], r14_seg[0]['y'], r14_seg[1]['x'], r14_seg[1]['y'], r14_seg[2]['x'], r14_seg[2]['y'], r14_seg[3]['x'], r14_seg[3]['y']);
            else
                _r14_t31 = new r0_Bezier(r14_seg[0]['x'], r14_seg[0]['y'], r14_seg[1]['x'], r14_seg[1]['y'], r14_seg[2]['x'], r14_seg[2]['y']);
            r14_curve = _r14_t31;
            _r14_t0 = 0;
            _r14_t1 = r0_SAMPLES;
            r14_sample = _r14_t0;
            for (; r14_sample < _r14_t1; r14_sample = r14_sample + 1) {
                r14_t = r14_j + r14_sample / r0_SAMPLES;
                r14_tn = r14_j + (r14_sample + 1) / r0_SAMPLES;
                r14_lthis = r14_curve['offset'](r14_sample / r0_SAMPLES, r14_f1(r14_t));
                r14_rthis = r14_curve['offset'](r14_sample / r0_SAMPLES, -r14_f2(r14_t));
                r14_lnext = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES, r14_f1(r14_tn));
                r14_rnext = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES, -r14_f2(r14_tn));
                r14_lnthis1 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY, r14_f1(r14_t + r0_TINY));
                r14_rnthis1 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY, -r14_f2(r14_t + r0_TINY));
                r14_lnnext1 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY, r14_f1(r14_tn - r0_TINY));
                r14_rnnext1 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY, -r14_f2(r14_tn - r0_TINY));
                r14_lnthis2 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY * 2, r14_f1(r14_t + r0_TINY * 2));
                r14_rnthis2 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY * 2, -r14_f2(r14_t + r0_TINY * 2));
                r14_lnnext2 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY * 2, r14_f1(r14_tn - r0_TINY * 2));
                r14_rnnext2 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY * 2, -r14_f2(r14_tn - r0_TINY * 2));
                r14_lnthis3 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY * 3, r14_f1(r14_t + r0_TINY * 3));
                r14_rnthis3 = r14_curve['offset'](r14_sample / r0_SAMPLES + r0_TINY * 3, -r14_f2(r14_t + r0_TINY * 3));
                r14_lnnext3 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY * 3, r14_f1(r14_tn - r0_TINY * 3));
                r14_rnnext3 = r14_curve['offset']((r14_sample + 1) / r0_SAMPLES - r0_TINY * 3, -r14_f2(r14_tn - r0_TINY * 3));
                r14_dlthis = r0_dforward(r14_lthis, r14_lnthis1, r14_lnthis2, r14_lnthis3);
                r14_drthis = r0_dforward(r14_rthis, r14_rnthis1, r14_rnthis2, r14_rnthis3);
                r14_dlnext = r0_dbackward(r14_lnext, r14_lnnext1, r14_lnnext2, r14_lnnext3);
                r14_drnext = r0_dbackward(r14_rnext, r14_rnnext2, r14_rnnext2, r14_rnnext3);
                r14_il = r0_intersection(r14_lthis['x'], r14_lthis['y'], r14_dlthis['x'], r14_dlthis['y'], r14_lnext['x'], r14_lnext['y'], r14_dlnext['x'], r14_dlnext['y']);
                r14_ir = r0_intersection(r14_rthis['x'], r14_rthis['y'], r14_drthis['x'], r14_drthis['y'], r14_rnext['x'], r14_rnext['y'], r14_drnext['x'], r14_drnext['y']);
                if (r14_il['x'] !== null && r14_il['y'] !== null && r0_nonlinear(r14_lthis, r14_il, r14_lnext)) {
                    r14_left['push']({
                        'x': r14_lthis['x'],
                        'y': r14_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r14_il['x'],
                        'y': r14_il['y'],
                        'onCurve': false
                    });
                } else {
                    r14_left['push']({
                        'x': r14_lthis['x'],
                        'y': r14_lthis['y'],
                        'onCurve': true
                    });
                }
                if (r14_ir['x'] !== null && r14_ir['y'] !== null && r0_nonlinear(r14_rthis, r14_ir, r14_rnext)) {
                    r14_right['push']({
                        'x': r14_rthis['x'],
                        'y': r14_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r14_ir['x'],
                        'y': r14_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r14_right['push']({
                        'x': r14_rthis['x'],
                        'y': r14_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r14_t32 = r14_left;
            _r14_t33 = _r14_t32['push'];
            r14_last = r14_curve['offset'](1, r14_f1(r14_j + 1));
            _r14_t34 = {
                'x': r14_last['x'],
                'y': r14_last['y'],
                'onCurve': true
            };
            _r14_t33['call'](_r14_t32, _r14_t34);
            _r14_t35 = r14_right;
            _r14_t36 = _r14_t35['push'];
            r14_last = r14_curve['offset'](1, -r14_f2(r14_j + 1));
            _r14_t37 = {
                'x': r14_last['x'],
                'y': r14_last['y'],
                'onCurve': true
            };
            _r14_t36['call'](_r14_t35, _r14_t37);
        }
        r14_shape = r14_left['concat'](r14_right['reverse']())['map'](function _r14_t38(r16_p) {
            var r16_p;
            return {
                'x': r16_p['x'],
                'y': r16_p['y'],
                'onCurve': r16_p['onCurve']
            };
        });
        return [r14_shape];
    };
    exports['Stroke'] = r0_Stroke;
}
