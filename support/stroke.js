{
    var r0_Smooth, r0_intersection, r0_Bezier, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12;
    r0_Smooth = require('./smooth')['Smooth'];
    r0_intersection = require('./intersection')['intersection'];
    r0_Bezier = require('bezier-js');
    r0_SAMPLES = 4;
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_KAPPA = 0.51;
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_Stroke = function _r0_t0() {
        var _r1_t0;
        _r1_t0 = this;
        _r1_t0['points'] = [];
        return _r1_t0;
    };
    r0_Stroke['bindParameters'] = function _r0_t1(r2_para) {
        var r2_para;
        r0_KAPPA = r2_para['kappa'];
        r0_COKAPPA = 1 - r0_KAPPA;
        r0_COBKAPPA = r0_COKAPPA - 0.1;
        return r0_BKAPPA = r0_KAPPA + 0.1;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t2(r3_d1, r3_d2) {
        var r3_d1, r3_d2, r3_point, _r3_t0;
        _r3_t0 = this;
        r3_point = _r3_t0['points'][_r3_t0['points']['length'] - 1];
        r3_point['d1'] = r3_d1;
        r3_point['d2'] = r3_d2;
        return _r3_t0;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t3(r4_x, r4_y) {
        var r4_x, r4_y, _r4_t0;
        _r4_t0 = this;
        _r4_t0['points'] = [{
                'x': r4_x,
                'y': r4_y,
                'onCurve': true
            }];
        return _r4_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0;
        _r5_t0 = this;
        _r5_t0['points']['push']({
            'x': r5_x,
            'y': r5_y,
            'onCurve': true
        });
        return _r5_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t5(r6_xc, r6_yc, r6_x, r6_y) {
        var r6_xc, r6_yc, r6_x, r6_y, _r6_t0;
        _r6_t0 = this;
        _r6_t0['points']['push']({
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
    r0_Stroke['prototype']['cubic-to'] = function _r0_t6(r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y) {
        var r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y, _r7_t0;
        _r7_t0 = this;
        _r7_t0['points']['push']({
            'x': r7_x1,
            'y': r7_y1,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r7_x2,
            'y': r7_y2,
            'onCurve': false,
            'cubic': true
        }, {
            'x': r7_x,
            'y': r7_y,
            'onCurve': true
        });
        return _r7_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t7(r8_x, r8_y) {
        var r8_x, r8_y, r8_last, _r8_t0;
        _r8_t0 = this;
        r8_last = _r8_t0['points'][_r8_t0['points']['length'] - 1];
        _r8_t0['cubic-to'](r8_last['x'], r8_last['y'] + r0_BKAPPA * (r8_y - r8_last['y']), r8_x + r0_BKAPPA * (r8_last['x'] - r8_x), r8_y, r8_x, r8_y);
        return _r8_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t8(r9_x, r9_y) {
        var r9_x, r9_y, r9_last, _r9_t0;
        _r9_t0 = this;
        r9_last = _r9_t0['points'][_r9_t0['points']['length'] - 1];
        _r9_t0['cubic-to'](r9_last['x'] + r0_BKAPPA * (r9_x - r9_last['x']), r9_last['y'], r9_x, r9_y + r0_BKAPPA * (r9_last['y'] - r9_y), r9_x, r9_y);
        return _r9_t0;
    };
    r0_dforward = function _r0_t9(r10_p0, r10_p1, r10_p2, r10_p3) {
        var r10_p0, r10_p1, r10_p2, r10_p3;
        return {
            'x': r10_p0['x'] + (-11 / 6 * r10_p0['x'] + 3 * r10_p1['x'] - 3 / 2 * r10_p2['x'] + r10_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r10_p0['y'] + (-11 / 6 * r10_p0['y'] + 3 * r10_p1['y'] - 3 / 2 * r10_p2['y'] + r10_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t10(r11_p0, r11_p1, r11_p2, r11_p3) {
        var r11_p0, r11_p1, r11_p2, r11_p3;
        return {
            'x': r11_p0['x'] + (11 / 6 * r11_p0['x'] - 3 * r11_p1['x'] + 3 / 2 * r11_p2['x'] - r11_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r11_p0['y'] + (11 / 6 * r11_p0['y'] - 3 * r11_p1['y'] + 3 / 2 * r11_p2['y'] - r11_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t11(r12_a, r12_b, r12_c) {
        var r12_a, r12_b, r12_c;
        return Math['abs']((r12_c['y'] - r12_a['y']) * (r12_b['x'] - r12_a['x']) - (r12_c['x'] - r12_a['x']) * (r12_b['y'] - r12_a['y'])) > r0_TINY;
    };
    r0_Stroke['prototype']['form-stroke'] = function _r0_t12(r13_d1, r13_d2) {
        var r13_d1, r13_d2, r13_d1s, r13_d2s, r13_subSegments, r13_p0, r13_j, r13_p1, r13_p2, r13_p3, r13_f1, r13_f2, r13_left, r13_right, r13_seg, r13_curve, r13_sample, r13_t, r13_tn, r13_lthis, r13_rthis, r13_lnext, r13_rnext, r13_lnthis1, r13_rnthis1, r13_lnnext1, r13_rnnext1, r13_lnthis2, r13_rnthis2, r13_lnnext2, r13_rnnext2, r13_lnthis3, r13_rnthis3, r13_lnnext3, r13_rnnext3, r13_dlthis, r13_drthis, r13_dlnext, r13_drnext, r13_il, r13_ir, r13_last, r13_shape, _r13_t0, _r13_t1, _r13_t2, _r13_t3, _r13_t4, _r13_t5, _r13_t6, _r13_t7, _r13_t8, _r13_t9, _r13_t10, _r13_t11, _r13_t12, _r13_t13, _r13_t14, _r13_t15, _r13_t16, _r13_t17, _r13_t18, _r13_t19, _r13_t20, _r13_t21, _r13_t22, _r13_t23, _r13_t24, _r13_t25, _r13_t26, _r13_t27, _r13_t28, _r13_t29, _r13_t30, _r13_t31, _r13_t32, _r13_t33, _r13_t34, _r13_t35, _r13_t36, _r13_t37, _r13_t38;
        _r13_t2 = this;
        if (_r13_t2['points'][0]['d1'] >= 0)
            _r13_t3 = _r13_t2['points'][0]['d1'];
        else
            _r13_t3 = r13_d1;
        _r13_t4 = r13_d1 = _r13_t3;
        r13_d1s = [_r13_t4];
        if (_r13_t2['points'][0]['d2'] >= 0)
            _r13_t5 = _r13_t2['points'][0]['d2'];
        else
            _r13_t5 = r13_d2;
        _r13_t6 = r13_d2 = _r13_t5;
        r13_d2s = [_r13_t6];
        r13_subSegments = [];
        r13_p0 = _r13_t2['points'][0];
        r13_j = 1;
        for (; r13_j < this['points']['length']; r13_j = r13_j + 1) {
            r13_p1 = _r13_t2['points'][r13_j];
            if (r13_p1['onCurve']) {
                r13_subSegments['push']([
                    r13_p0,
                    {
                        'x': (r13_p0['x'] + r13_p1['x']) / 2,
                        'y': (r13_p0['y'] + r13_p1['y']) / 2
                    },
                    r13_p1
                ]);
                _r13_t7 = r13_d1s;
                _r13_t8 = _r13_t7['push'];
                if (r13_p1['d1'] >= 0)
                    _r13_t9 = r13_p1['d1'];
                else
                    _r13_t9 = r13_d1;
                _r13_t10 = r13_d1 = _r13_t9;
                _r13_t8['call'](_r13_t7, _r13_t10);
                _r13_t11 = r13_d2s;
                _r13_t12 = _r13_t11['push'];
                if (r13_p1['d2'] >= 0)
                    _r13_t13 = r13_p1['d2'];
                else
                    _r13_t13 = r13_d2;
                _r13_t14 = r13_d2 = _r13_t13;
                _r13_t12['call'](_r13_t11, _r13_t14);
                r13_p0 = r13_p1;
            } else if (r13_p1['cubic']) {
                r13_p2 = _r13_t2['points'][r13_j + 1];
                r13_p3 = _r13_t2['points'][r13_j + 2];
                _r13_t15 = r13_d1s;
                _r13_t16 = _r13_t15['push'];
                if (r13_p3['d1'] >= 0)
                    _r13_t17 = r13_p3['d1'];
                else
                    _r13_t17 = r13_d1;
                _r13_t18 = r13_d1 = _r13_t17;
                _r13_t16['call'](_r13_t15, _r13_t18);
                _r13_t19 = r13_d2s;
                _r13_t20 = _r13_t19['push'];
                if (r13_p3['d2'] >= 0)
                    _r13_t21 = r13_p3['d2'];
                else
                    _r13_t21 = r13_d2;
                _r13_t22 = r13_d2 = _r13_t21;
                _r13_t20['call'](_r13_t19, _r13_t22);
                r13_subSegments['push']([
                    r13_p0,
                    r13_p1,
                    r13_p2,
                    r13_p3
                ]);
                r13_p0 = r13_p3;
                r13_j = r13_j + 2;
            } else if (true) {
                r13_p2 = _r13_t2['points'][r13_j + 1];
                _r13_t23 = r13_d1s;
                _r13_t24 = _r13_t23['push'];
                if (r13_p2['d1'] >= 0)
                    _r13_t25 = r13_p2['d1'];
                else
                    _r13_t25 = r13_d1;
                _r13_t26 = r13_d1 = _r13_t25;
                _r13_t24['call'](_r13_t23, _r13_t26);
                _r13_t27 = r13_d2s;
                _r13_t28 = _r13_t27['push'];
                if (r13_p2['d2'] >= 0)
                    _r13_t29 = r13_p2['d2'];
                else
                    _r13_t29 = r13_d2;
                _r13_t30 = r13_d2 = _r13_t29;
                _r13_t28['call'](_r13_t27, _r13_t30);
                r13_subSegments['push']([
                    r13_p0,
                    r13_p1,
                    r13_p2
                ]);
                r13_p0 = r13_p2;
                r13_j = r13_j + 1;
            } else
                void 0;
        }
        r13_f1 = r0_Smooth(r13_d1s, { 'method': 'cubic' });
        r13_f2 = r0_Smooth(r13_d2s, { 'method': 'cubic' });
        r13_left = [];
        r13_right = [];
        r13_j = 0;
        for (; r13_j < r13_subSegments['length']; r13_j = r13_j + 1) {
            r13_seg = r13_subSegments[r13_j];
            if (r13_seg['length'] > 3)
                _r13_t31 = new r0_Bezier(r13_seg[0]['x'], r13_seg[0]['y'], r13_seg[1]['x'], r13_seg[1]['y'], r13_seg[2]['x'], r13_seg[2]['y'], r13_seg[3]['x'], r13_seg[3]['y']);
            else
                _r13_t31 = new r0_Bezier(r13_seg[0]['x'], r13_seg[0]['y'], r13_seg[1]['x'], r13_seg[1]['y'], r13_seg[2]['x'], r13_seg[2]['y']);
            r13_curve = _r13_t31;
            _r13_t0 = 0;
            _r13_t1 = r0_SAMPLES;
            r13_sample = _r13_t0;
            for (; r13_sample < _r13_t1; r13_sample = r13_sample + 1) {
                r13_t = r13_j + r13_sample / r0_SAMPLES;
                r13_tn = r13_j + (r13_sample + 1) / r0_SAMPLES;
                r13_lthis = r13_curve['offset'](r13_sample / r0_SAMPLES, r13_f1(r13_t));
                r13_rthis = r13_curve['offset'](r13_sample / r0_SAMPLES, -r13_f2(r13_t));
                r13_lnext = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES, r13_f1(r13_tn));
                r13_rnext = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES, -r13_f2(r13_tn));
                r13_lnthis1 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY, r13_f1(r13_t + r0_TINY));
                r13_rnthis1 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY, -r13_f2(r13_t + r0_TINY));
                r13_lnnext1 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY, r13_f1(r13_tn - r0_TINY));
                r13_rnnext1 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY, -r13_f2(r13_tn - r0_TINY));
                r13_lnthis2 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY * 2, r13_f1(r13_t + r0_TINY * 2));
                r13_rnthis2 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY * 2, -r13_f2(r13_t + r0_TINY * 2));
                r13_lnnext2 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY * 2, r13_f1(r13_tn - r0_TINY * 2));
                r13_rnnext2 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY * 2, -r13_f2(r13_tn - r0_TINY * 2));
                r13_lnthis3 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY * 3, r13_f1(r13_t + r0_TINY * 3));
                r13_rnthis3 = r13_curve['offset'](r13_sample / r0_SAMPLES + r0_TINY * 3, -r13_f2(r13_t + r0_TINY * 3));
                r13_lnnext3 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY * 3, r13_f1(r13_tn - r0_TINY * 3));
                r13_rnnext3 = r13_curve['offset']((r13_sample + 1) / r0_SAMPLES - r0_TINY * 3, -r13_f2(r13_tn - r0_TINY * 3));
                r13_dlthis = r0_dforward(r13_lthis, r13_lnthis1, r13_lnthis2, r13_lnthis3);
                r13_drthis = r0_dforward(r13_rthis, r13_rnthis1, r13_rnthis2, r13_rnthis3);
                r13_dlnext = r0_dbackward(r13_lnext, r13_lnnext1, r13_lnnext2, r13_lnnext3);
                r13_drnext = r0_dbackward(r13_rnext, r13_rnnext2, r13_rnnext2, r13_rnnext3);
                r13_il = r0_intersection(r13_lthis['x'], r13_lthis['y'], r13_dlthis['x'], r13_dlthis['y'], r13_lnext['x'], r13_lnext['y'], r13_dlnext['x'], r13_dlnext['y']);
                r13_ir = r0_intersection(r13_rthis['x'], r13_rthis['y'], r13_drthis['x'], r13_drthis['y'], r13_rnext['x'], r13_rnext['y'], r13_drnext['x'], r13_drnext['y']);
                if (r13_il['x'] !== null && r13_il['y'] !== null && r0_nonlinear(r13_lthis, r13_il, r13_lnext)) {
                    r13_left['push']({
                        'x': r13_lthis['x'],
                        'y': r13_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r13_il['x'],
                        'y': r13_il['y'],
                        'onCurve': false
                    });
                } else {
                    r13_left['push']({
                        'x': r13_lthis['x'],
                        'y': r13_lthis['y'],
                        'onCurve': true
                    });
                }
                if (r13_ir['x'] !== null && r13_ir['y'] !== null && r0_nonlinear(r13_rthis, r13_ir, r13_rnext)) {
                    r13_right['push']({
                        'x': r13_rthis['x'],
                        'y': r13_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r13_ir['x'],
                        'y': r13_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r13_right['push']({
                        'x': r13_rthis['x'],
                        'y': r13_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r13_t32 = r13_left;
            _r13_t33 = _r13_t32['push'];
            r13_last = r13_curve['offset'](1, r13_f1(r13_j + 1));
            _r13_t34 = {
                'x': r13_last['x'],
                'y': r13_last['y'],
                'onCurve': true
            };
            _r13_t33['call'](_r13_t32, _r13_t34);
            _r13_t35 = r13_right;
            _r13_t36 = _r13_t35['push'];
            r13_last = r13_curve['offset'](1, -r13_f2(r13_j + 1));
            _r13_t37 = {
                'x': r13_last['x'],
                'y': r13_last['y'],
                'onCurve': true
            };
            _r13_t36['call'](_r13_t35, _r13_t37);
        }
        r13_shape = r13_left['concat'](r13_right['reverse']())['map'](function _r13_t38(r15_p) {
            var r15_p;
            return {
                'x': r15_p['x'],
                'y': r15_p['y'],
                'onCurve': r15_p['onCurve']
            };
        });
        return [r13_shape];
    };
    exports['Stroke'] = r0_Stroke;
}
