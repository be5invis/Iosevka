{
    var r0_smooth, r0_intersection, r0_Bezier, r0_tp, r0_utp, r0_xn$rangearray$1aao, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_computeOffsetPoint, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16;
    r0_smooth = require('./monotonic-interpolate')['createInterpolant'];
    r0_intersection = require('./intersection')['intersection'];
    r0_Bezier = require('bezier-js');
    r0_tp = require('./transform')['transformPoint'];
    r0_utp = require('./transform')['untransform'];
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
        _r2_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        return _r2_t0;
    };
    r0_Stroke['prototype']['set-transform'] = function _r0_t2(r3_t) {
        var r3_t, _r3_t0;
        _r3_t0 = this;
        _r3_t0['gizmo'] = r3_t;
        return _r3_t0;
    };
    r0_Stroke['bindParameters'] = function _r0_t3(r4_para) {
        var r4_para;
        r0_KAPPA = r4_para['kappa'];
        r0_COKAPPA = 1 - r0_KAPPA;
        r0_COBKAPPA = r0_COKAPPA - 0.1;
        return r0_BKAPPA = r0_KAPPA + 0.1;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t4(r5_d1, r5_d2) {
        var r5_d1, r5_d2, r5_point, _r5_t0;
        _r5_t0 = this;
        r5_point = _r5_t0['points'][_r5_t0['points']['length'] - 1];
        r5_point['d1'] = r5_d1;
        r5_point['d2'] = r5_d2;
        return _r5_t0;
    };
    r0_Stroke['prototype']['pen-direction'] = function _r0_t5(r6_x, r6_y) {
        var r6_x, r6_y, r6_point, _r6_t0, _r6_t1;
        _r6_t1 = this;
        if (r6_x['x'] !== void 0 || r6_x['y'] !== void 0) {
            r6_y = r6_x['y'];
            _r6_t0 = r6_x = r6_x['x'];
        } else
            _r6_t0 = void 0;
        r6_point = _r6_t1['points'][_r6_t1['points']['length'] - 1];
        r6_point['pdx'] = r6_x;
        r6_point['pdy'] = r6_y;
        return _r6_t1;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t6(r7_x, r7_y) {
        var r7_x, r7_y, _r7_t0;
        _r7_t0 = this;
        _r7_t0['points'] = [r0_tp(_r7_t0['gizmo'], {
                'x': r7_x,
                'y': r7_y,
                'onCurve': true
            })];
        return _r7_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t7(r8_x, r8_y) {
        var r8_x, r8_y, _r8_t0;
        _r8_t0 = this;
        _r8_t0['points']['push'](r0_tp(_r8_t0['gizmo'], {
            'x': r8_x,
            'y': r8_y,
            'onCurve': true
        }));
        return _r8_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t8(r9_xc, r9_yc, r9_x, r9_y) {
        var r9_xc, r9_yc, r9_x, r9_y, _r9_t0;
        _r9_t0 = this;
        _r9_t0['points']['push'](r0_tp(_r9_t0['gizmo'], {
            'x': r9_xc,
            'y': r9_yc,
            'onCurve': false
        }), r0_tp(_r9_t0['gizmo'], {
            'x': r9_x,
            'y': r9_y,
            'onCurve': true
        }));
        return _r9_t0;
    };
    r0_Stroke['prototype']['cubic-to'] = function _r0_t9(r10_x1, r10_y1, r10_x2, r10_y2, r10_x, r10_y) {
        var r10_x1, r10_y1, r10_x2, r10_y2, r10_x, r10_y, _r10_t0;
        _r10_t0 = this;
        _r10_t0['points']['push'](r0_tp(_r10_t0['gizmo'], {
            'x': r10_x1,
            'y': r10_y1,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r10_t0['gizmo'], {
            'x': r10_x2,
            'y': r10_y2,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r10_t0['gizmo'], {
            'x': r10_x,
            'y': r10_y,
            'onCurve': true
        }));
        return _r10_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t10(r11_x, r11_y) {
        var r11_x, r11_y, r11_last, _r11_t0;
        _r11_t0 = this;
        r11_last = r0_utp(_r11_t0['gizmo'], _r11_t0['points'][_r11_t0['points']['length'] - 1]);
        _r11_t0['cubic-to'](r11_last['x'], r11_last['y'] + r0_BKAPPA * (r11_y - r11_last['y']), r11_x + r0_BKAPPA * (r11_last['x'] - r11_x), r11_y, r11_x, r11_y);
        return _r11_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t11(r12_x, r12_y) {
        var r12_x, r12_y, r12_last, _r12_t0;
        _r12_t0 = this;
        r12_last = r0_utp(_r12_t0['gizmo'], _r12_t0['points'][_r12_t0['points']['length'] - 1]);
        _r12_t0['cubic-to'](r12_last['x'] + r0_BKAPPA * (r12_x - r12_last['x']), r12_last['y'], r12_x, r12_y + r0_BKAPPA * (r12_last['y'] - r12_y), r12_x, r12_y);
        return _r12_t0;
    };
    r0_dforward = function _r0_t12(r13_p0, r13_p1, r13_p2, r13_p3) {
        var r13_p0, r13_p1, r13_p2, r13_p3;
        return {
            'x': r13_p0['x'] + (-11 / 6 * r13_p0['x'] + 3 * r13_p1['x'] - 3 / 2 * r13_p2['x'] + r13_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r13_p0['y'] + (-11 / 6 * r13_p0['y'] + 3 * r13_p1['y'] - 3 / 2 * r13_p2['y'] + r13_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t13(r14_p0, r14_p1, r14_p2, r14_p3) {
        var r14_p0, r14_p1, r14_p2, r14_p3;
        return {
            'x': r14_p0['x'] + (11 / 6 * r14_p0['x'] - 3 * r14_p1['x'] + 3 / 2 * r14_p2['x'] - r14_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r14_p0['y'] + (11 / 6 * r14_p0['y'] - 3 * r14_p1['y'] + 3 / 2 * r14_p2['y'] - r14_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t14(r15_a, r15_b, r15_c) {
        var r15_a, r15_b, r15_c;
        return Math['abs']((r15_c['y'] - r15_a['y']) * (r15_b['x'] - r15_a['x']) - (r15_c['x'] - r15_a['x']) * (r15_b['y'] - r15_a['y'])) > r0_TINY;
    };
    r0_computeOffsetPoint = function _r0_t15(r16_curve, r16_t, r16_j, r16_foffset, r16_fpdx, r16_fpdy) {
        var r16_curve, r16_t, r16_j, r16_foffset, r16_fpdx, r16_fpdy, r16_onpoint, r16_normal;
        r16_onpoint = r16_curve['compute'](r16_t - r16_j);
        r16_normal = r16_curve['normal'](r16_t - r16_j);
        return {
            'x': r16_onpoint['x'] + r16_foffset(r16_t) * (r16_normal['x'] + r16_fpdx(r16_t)),
            'y': r16_onpoint['y'] + r16_foffset(r16_t) * (r16_normal['y'] + r16_fpdy(r16_t))
        };
    };
    r0_Stroke['prototype']['form-stroke'] = function _r0_t16(r17_d1, r17_d2) {
        var r17_d1, r17_d2, r17_d1s, r17_d2s, r17_pdxs, r17_pdys, r17_subSegments, r17_p0, r17_j, r17_p1, r17_p2, r17_seg, r17_normalpt, r17_p3, r17_f1, r17_f2, r17_fpdx, r17_fpdy, r17_left, r17_right, r17_curve, r17_sample, r17_t, r17_tn, r17_lthis, r17_rthis, r17_lnext, r17_rnext, r17_lnthis1, r17_rnthis1, r17_lnnext1, r17_rnnext1, r17_lnthis2, r17_rnthis2, r17_lnnext2, r17_rnnext2, r17_lnthis3, r17_rnthis3, r17_lnnext3, r17_rnnext3, r17_dlthis, r17_drthis, r17_dlnext, r17_drnext, r17_il, r17_ir, r17_last, r17_shape, r17_k, r17_still, _r17_t0, _r17_t1, _r17_t2, _r17_t3, _r17_t4, _r17_t5, _r17_t6, _r17_t7, _r17_t8, _r17_t9, _r17_t10, _r17_t11, _r17_t12, _r17_t13, _r17_t14, _r17_t15, _r17_t16, _r17_t17, _r17_t18, _r17_t19, _r17_t20, _r17_t21, _r17_t22, _r17_t23, _r17_t24, _r17_t25, _r17_t26, _r17_t27, _r17_t28, _r17_t29, _r17_t30, _r17_t31, _r17_t32, _r17_t33, _r17_t34, _r17_t35, _r17_t36, _r17_t37, _r17_t38, _r17_t39, _r17_t40, _r17_t41, _r17_t42, _r17_t43, _r17_t44, _r17_t45, _r17_t46, _r17_t47, _r17_t48, _r17_t49, _r17_t50, _r17_t51, _r17_t52, _r17_t53, _r17_t54, _r17_t55, _r17_t56, _r17_t57, _r17_t58, _r17_t59;
        _r17_t2 = this;
        if (_r17_t2['points'][0]['d1'] >= 0)
            _r17_t3 = _r17_t2['points'][0]['d1'];
        else
            _r17_t3 = r17_d1;
        _r17_t4 = r17_d1 = _r17_t3;
        r17_d1s = [_r17_t4];
        if (_r17_t2['points'][0]['d2'] >= 0)
            _r17_t5 = _r17_t2['points'][0]['d2'];
        else
            _r17_t5 = r17_d2;
        _r17_t6 = r17_d2 = _r17_t5;
        r17_d2s = [_r17_t6];
        r17_pdxs = [0];
        r17_pdys = [0];
        r17_subSegments = [];
        r17_p0 = _r17_t2['points'][0];
        r17_j = 1;
        for (; r17_j < this['points']['length']; r17_j = r17_j + 1) {
            r17_p1 = _r17_t2['points'][r17_j];
            if (r17_p1['onCurve']) {
                r17_subSegments['push'](r17_seg = new r0_Bezier(r17_p0['x'], r17_p0['y'], (r17_p0['x'] + r17_p1['x']) / 2, (r17_p0['y'] + r17_p1['y']) / 2, r17_p1['x'], r17_p1['y']));
                _r17_t7 = r17_d1s;
                _r17_t8 = _r17_t7['push'];
                if (r17_p1['d1'] >= 0)
                    _r17_t9 = r17_p1['d1'];
                else
                    _r17_t9 = r17_d1;
                _r17_t10 = r17_d1 = _r17_t9;
                _r17_t8['call'](_r17_t7, _r17_t10);
                _r17_t11 = r17_d2s;
                _r17_t12 = _r17_t11['push'];
                if (r17_p1['d2'] >= 0)
                    _r17_t13 = r17_p1['d2'];
                else
                    _r17_t13 = r17_d2;
                _r17_t14 = r17_d2 = _r17_t13;
                _r17_t12['call'](_r17_t11, _r17_t14);
                r17_normalpt = r17_seg['normal'](0);
                _r17_t15 = r17_pdxs;
                _r17_t16 = _r17_t15['push'];
                if (r17_p1['pdx'] !== void 0)
                    _r17_t17 = r17_p1['pdx'] - r17_normalpt['x'];
                else
                    _r17_t17 = 0;
                _r17_t16['call'](_r17_t15, _r17_t17);
                _r17_t18 = r17_pdys;
                _r17_t19 = _r17_t18['push'];
                if (r17_p1['pdy'] !== void 0)
                    _r17_t20 = r17_p1['pdy'] - r17_normalpt['y'];
                else
                    _r17_t20 = 0;
                _r17_t19['call'](_r17_t18, _r17_t20);
                r17_p0 = r17_p1;
            } else if (r17_p1['cubic']) {
                r17_p2 = _r17_t2['points'][r17_j + 1];
                r17_p3 = _r17_t2['points'][r17_j + 2];
                r17_subSegments['push'](r17_seg = new r0_Bezier(r17_p0['x'], r17_p0['y'], r17_p1['x'], r17_p1['y'], r17_p2['x'], r17_p2['y'], r17_p3['x'], r17_p3['y']));
                _r17_t21 = r17_d1s;
                _r17_t22 = _r17_t21['push'];
                if (r17_p3['d1'] >= 0)
                    _r17_t23 = r17_p3['d1'];
                else
                    _r17_t23 = r17_d1;
                _r17_t24 = r17_d1 = _r17_t23;
                _r17_t22['call'](_r17_t21, _r17_t24);
                _r17_t25 = r17_d2s;
                _r17_t26 = _r17_t25['push'];
                if (r17_p3['d2'] >= 0)
                    _r17_t27 = r17_p3['d2'];
                else
                    _r17_t27 = r17_d2;
                _r17_t28 = r17_d2 = _r17_t27;
                _r17_t26['call'](_r17_t25, _r17_t28);
                r17_normalpt = r17_seg['normal'](0);
                _r17_t29 = r17_pdxs;
                _r17_t30 = _r17_t29['push'];
                if (r17_p3['pdx'] !== void 0)
                    _r17_t31 = r17_p3['pdx'] - r17_normalpt['x'];
                else
                    _r17_t31 = 0;
                _r17_t30['call'](_r17_t29, _r17_t31);
                _r17_t32 = r17_pdys;
                _r17_t33 = _r17_t32['push'];
                if (r17_p3['pdy'] !== void 0)
                    _r17_t34 = r17_p3['pdy'] - r17_normalpt['y'];
                else
                    _r17_t34 = 0;
                _r17_t33['call'](_r17_t32, _r17_t34);
                r17_p0 = r17_p3;
                r17_j = r17_j + 2;
            } else if (true) {
                r17_p2 = _r17_t2['points'][r17_j + 1];
                r17_subSegments['push'](r17_seg = new r0_Bezier(r17_p0['x'], r17_p0['y'], r17_p1['x'], r17_p1['y'], r17_p2['x'], r17_p2['y']));
                _r17_t35 = r17_d1s;
                _r17_t36 = _r17_t35['push'];
                if (r17_p2['d1'] >= 0)
                    _r17_t37 = r17_p2['d1'];
                else
                    _r17_t37 = r17_d1;
                _r17_t38 = r17_d1 = _r17_t37;
                _r17_t36['call'](_r17_t35, _r17_t38);
                _r17_t39 = r17_d2s;
                _r17_t40 = _r17_t39['push'];
                if (r17_p2['d2'] >= 0)
                    _r17_t41 = r17_p2['d2'];
                else
                    _r17_t41 = r17_d2;
                _r17_t42 = r17_d2 = _r17_t41;
                _r17_t40['call'](_r17_t39, _r17_t42);
                r17_normalpt = r17_seg['normal'](0);
                _r17_t43 = r17_pdxs;
                _r17_t44 = _r17_t43['push'];
                if (r17_p2['pdx'] !== void 0)
                    _r17_t45 = r17_p2['pdx'] - r17_normalpt['x'];
                else
                    _r17_t45 = 0;
                _r17_t44['call'](_r17_t43, _r17_t45);
                _r17_t46 = r17_pdys;
                _r17_t47 = _r17_t46['push'];
                if (r17_p2['pdy'] !== void 0)
                    _r17_t48 = r17_p2['pdy'] - r17_normalpt['y'];
                else
                    _r17_t48 = 0;
                _r17_t47['call'](_r17_t46, _r17_t48);
                r17_p0 = r17_p2;
                r17_j = r17_j + 1;
            } else
                void 0;
        }
        if (_r17_t2['points'][0]['pdx'] !== void 0)
            _r17_t49 = r17_pdxs[0] = _r17_t2['points'][0]['pdx'] - r17_subSegments[0]['normal'](0)['x'];
        else
            _r17_t49 = void 0;
        if (_r17_t2['points'][0]['pdy'] !== void 0)
            _r17_t50 = r17_pdys[0] = _r17_t2['points'][0]['pdy'] - r17_subSegments[0]['normal'](0)['y'];
        else
            _r17_t50 = void 0;
        r17_f1 = r0_smooth(r0_xn$rangearray$1aao(0, r17_d1s['length']), r17_d1s);
        r17_f2 = r0_smooth(r0_xn$rangearray$1aao(0, r17_d2s['length']), r17_d2s['map'](function _r17_t51(r18_x) {
            var r18_x;
            return -r18_x;
        }));
        r17_fpdx = r0_smooth(r0_xn$rangearray$1aao(0, r17_d1s['length']), r17_pdxs);
        r17_fpdy = r0_smooth(r0_xn$rangearray$1aao(0, r17_d2s['length']), r17_pdys);
        r17_left = [];
        r17_right = [];
        r17_j = 0;
        for (; r17_j < r17_subSegments['length']; r17_j = r17_j + 1) {
            r17_curve = r17_subSegments[r17_j];
            _r17_t0 = 0;
            _r17_t1 = r0_SAMPLES;
            r17_sample = _r17_t0;
            for (; r17_sample < _r17_t1; r17_sample = r17_sample + 1) {
                r17_t = r17_j + r17_sample / r0_SAMPLES;
                r17_tn = r17_j + (r17_sample + 1) / r0_SAMPLES;
                r17_lthis = r0_computeOffsetPoint(r17_curve, r17_t, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rthis = r0_computeOffsetPoint(r17_curve, r17_t, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnext = r0_computeOffsetPoint(r17_curve, r17_tn, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnext = r0_computeOffsetPoint(r17_curve, r17_tn, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnthis1 = r0_computeOffsetPoint(r17_curve, r17_t + r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnthis1 = r0_computeOffsetPoint(r17_curve, r17_t + r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnnext1 = r0_computeOffsetPoint(r17_curve, r17_tn - r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnnext1 = r0_computeOffsetPoint(r17_curve, r17_tn - r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnthis2 = r0_computeOffsetPoint(r17_curve, r17_t + 2 * r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnthis2 = r0_computeOffsetPoint(r17_curve, r17_t + 2 * r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnnext2 = r0_computeOffsetPoint(r17_curve, r17_tn - 2 * r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnnext2 = r0_computeOffsetPoint(r17_curve, r17_tn - 2 * r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnthis3 = r0_computeOffsetPoint(r17_curve, r17_t + 3 * r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnthis3 = r0_computeOffsetPoint(r17_curve, r17_t + 3 * r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_lnnext3 = r0_computeOffsetPoint(r17_curve, r17_tn - 3 * r0_TINY, r17_j, r17_f1, r17_fpdx, r17_fpdy);
                r17_rnnext3 = r0_computeOffsetPoint(r17_curve, r17_tn - 3 * r0_TINY, r17_j, r17_f2, r17_fpdx, r17_fpdy);
                r17_dlthis = r0_dforward(r17_lthis, r17_lnthis1, r17_lnthis2, r17_lnthis3);
                r17_drthis = r0_dforward(r17_rthis, r17_rnthis1, r17_rnthis2, r17_rnthis3);
                r17_dlnext = r0_dbackward(r17_lnext, r17_lnnext1, r17_lnnext2, r17_lnnext3);
                r17_drnext = r0_dbackward(r17_rnext, r17_rnnext2, r17_rnnext2, r17_rnnext3);
                r17_il = r0_intersection(r17_lthis['x'], r17_lthis['y'], r17_dlthis['x'], r17_dlthis['y'], r17_lnext['x'], r17_lnext['y'], r17_dlnext['x'], r17_dlnext['y']);
                r17_ir = r0_intersection(r17_rthis['x'], r17_rthis['y'], r17_drthis['x'], r17_drthis['y'], r17_rnext['x'], r17_rnext['y'], r17_drnext['x'], r17_drnext['y']);
                if (r17_il['x'] !== null && r17_il['y'] !== null && r0_nonlinear(r17_lthis, r17_il, r17_lnext)) {
                    r17_left['push']({
                        'x': r17_lthis['x'],
                        'y': r17_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r17_il['x'],
                        'y': r17_il['y'],
                        'onCurve': false
                    });
                } else {
                    r17_left['push']({
                        'x': r17_lthis['x'],
                        'y': r17_lthis['y'],
                        'onCurve': true
                    });
                }
                if (r17_ir['x'] !== null && r17_ir['y'] !== null && r0_nonlinear(r17_rthis, r17_ir, r17_rnext)) {
                    r17_right['push']({
                        'x': r17_rthis['x'],
                        'y': r17_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r17_ir['x'],
                        'y': r17_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r17_right['push']({
                        'x': r17_rthis['x'],
                        'y': r17_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r17_t52 = r17_left;
            _r17_t53 = _r17_t52['push'];
            r17_last = r0_computeOffsetPoint(r17_curve, r17_j + 1, r17_j, r17_f1, r17_fpdx, r17_fpdy);
            _r17_t54 = {
                'x': r17_last['x'],
                'y': r17_last['y'],
                'onCurve': true
            };
            _r17_t53['call'](_r17_t52, _r17_t54);
            _r17_t55 = r17_right;
            _r17_t56 = _r17_t55['push'];
            r17_last = r0_computeOffsetPoint(r17_curve, r17_j + 1, r17_j, r17_f2, r17_fpdx, r17_fpdy);
            _r17_t57 = {
                'x': r17_last['x'],
                'y': r17_last['y'],
                'onCurve': true
            };
            _r17_t56['call'](_r17_t55, _r17_t57);
        }
        r17_shape = r17_left['concat'](r17_right['reverse']())['map'](function _r17_t58(r20_p) {
            var r20_p;
            return {
                'x': r20_p['x'],
                'y': r20_p['y'],
                'onCurve': r20_p['onCurve']
            };
        });
        r17_j = 0;
        for (; r17_j < r17_shape['length'] - 1; r17_j = r17_j + 1) {
            r17_p0 = r17_shape[r17_j];
            r17_still = true;
            r17_k = r17_j + 1;
            for (; r17_still && r17_k < r17_shape['length'] - 1; r17_k = r17_k + 1) {
                r17_p1 = r17_shape[r17_k];
                r17_p2 = r17_shape[r17_k + 1];
                if (r17_p0['onCurve'] && r17_p1['onCurve'] && r17_p2['onCurve'] && !r0_nonlinear(r17_p0, r17_p1, r17_p2)) {
                    r17_p1['removable'] = true;
                } else {
                    r17_still = false;
                }
            }
            r17_j = r17_k - 1;
        }
        return [r17_shape['filter'](function _r17_t59(r21_x) {
                var r21_x;
                return r21_x && !r21_x['removable'];
            })];
    };
    exports['Stroke'] = r0_Stroke;
}
