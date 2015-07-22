{
    var r0_smooth, r0_intersection, r0_Bezier, r0_tp, r0_utp, r0_xn$xsarray$3cah, r0_xn$ysarray$3cah, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_CUTOFF, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_computeOffsetPoint, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17;
    r0_smooth = require('./monotonic-interpolate')['createInterpolant'];
    r0_intersection = require('./intersection')['intersection'];
    r0_Bezier = require('bezier-js');
    r0_tp = require('./transform')['transformPoint'];
    r0_utp = require('./transform')['untransform'];
    r0_xn$xsarray$3cah = function _r0_t0(r1_low, r1_high) {
        var r1_low, r1_high, r1_a, r1_j;
        r1_a = [];
        r1_j = r1_low - 1;
        for (; r1_j <= r1_high; r1_j = r1_j + 1) {
            r1_a['push'](r1_j);
        }
        return r1_a;
    };
    r0_xn$ysarray$3cah = function _r0_t1(r2_a) {
        var r2_a;
        return [r2_a[0]]['concat'](r2_a['concat']([r2_a[r2_a['length'] - 1]]));
    };
    r0_SAMPLES = 6;
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_CUTOFF = 10000;
    r0_KAPPA = 0.51;
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_Stroke = function _r0_t2() {
        var _r3_t0;
        _r3_t0 = this;
        _r3_t0['points'] = [];
        _r3_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        return _r3_t0;
    };
    r0_Stroke['prototype']['set-transform'] = function _r0_t3(r4_t) {
        var r4_t, _r4_t0;
        _r4_t0 = this;
        _r4_t0['gizmo'] = r4_t;
        return _r4_t0;
    };
    r0_Stroke['bindParameters'] = function _r0_t4(r5_para) {
        var r5_para;
        r0_KAPPA = r5_para['kappa'];
        r0_COKAPPA = 1 - r0_KAPPA;
        r0_COBKAPPA = r0_COKAPPA - 0.1;
        return r0_BKAPPA = r0_KAPPA + 0.1;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t5(r6_d1, r6_d2) {
        var r6_d1, r6_d2, r6_point, _r6_t0;
        _r6_t0 = this;
        r6_point = _r6_t0['points'][_r6_t0['points']['length'] - 1];
        r6_point['d1'] = r6_d1;
        r6_point['d2'] = r6_d2;
        return _r6_t0;
    };
    r0_Stroke['prototype']['heads-to'] = function _r0_t6(r7_x, r7_y) {
        var r7_x, r7_y, r7_point, _r7_t0, _r7_t1;
        _r7_t1 = this;
        if (r7_x['x'] !== void 0 || r7_x['y'] !== void 0) {
            r7_y = r7_x['y'];
            _r7_t0 = r7_x = r7_x['x'];
        } else
            _r7_t0 = void 0;
        r7_point = _r7_t1['points'][_r7_t1['points']['length'] - 1];
        r7_point['pdx'] = r7_x;
        r7_point['pdy'] = r7_y;
        return _r7_t1;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t7(r8_x, r8_y) {
        var r8_x, r8_y, _r8_t0;
        _r8_t0 = this;
        _r8_t0['points'] = [r0_tp(_r8_t0['gizmo'], {
                'x': r8_x,
                'y': r8_y,
                'onCurve': true
            })];
        return _r8_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t8(r9_x, r9_y) {
        var r9_x, r9_y, _r9_t0;
        _r9_t0 = this;
        _r9_t0['points']['push'](r0_tp(_r9_t0['gizmo'], {
            'x': r9_x,
            'y': r9_y,
            'onCurve': true
        }));
        return _r9_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t9(r10_xc, r10_yc, r10_x, r10_y) {
        var r10_xc, r10_yc, r10_x, r10_y, _r10_t0;
        _r10_t0 = this;
        _r10_t0['points']['push'](r0_tp(_r10_t0['gizmo'], {
            'x': r10_xc,
            'y': r10_yc,
            'onCurve': false
        }), r0_tp(_r10_t0['gizmo'], {
            'x': r10_x,
            'y': r10_y,
            'onCurve': true
        }));
        return _r10_t0;
    };
    r0_Stroke['prototype']['cubic-to'] = function _r0_t10(r11_x1, r11_y1, r11_x2, r11_y2, r11_x, r11_y) {
        var r11_x1, r11_y1, r11_x2, r11_y2, r11_x, r11_y, _r11_t0;
        _r11_t0 = this;
        _r11_t0['points']['push'](r0_tp(_r11_t0['gizmo'], {
            'x': r11_x1,
            'y': r11_y1,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r11_t0['gizmo'], {
            'x': r11_x2,
            'y': r11_y2,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r11_t0['gizmo'], {
            'x': r11_x,
            'y': r11_y,
            'onCurve': true
        }));
        return _r11_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t11(r12_x, r12_y) {
        var r12_x, r12_y, r12_last, _r12_t0;
        _r12_t0 = this;
        r12_last = r0_utp(_r12_t0['gizmo'], _r12_t0['points'][_r12_t0['points']['length'] - 1]);
        _r12_t0['cubic-to'](r12_last['x'], r12_last['y'] + r0_BKAPPA * (r12_y - r12_last['y']), r12_x + r0_BKAPPA * (r12_last['x'] - r12_x), r12_y, r12_x, r12_y);
        return _r12_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t12(r13_x, r13_y) {
        var r13_x, r13_y, r13_last, _r13_t0;
        _r13_t0 = this;
        r13_last = r0_utp(_r13_t0['gizmo'], _r13_t0['points'][_r13_t0['points']['length'] - 1]);
        _r13_t0['cubic-to'](r13_last['x'] + r0_BKAPPA * (r13_x - r13_last['x']), r13_last['y'], r13_x, r13_y + r0_BKAPPA * (r13_last['y'] - r13_y), r13_x, r13_y);
        return _r13_t0;
    };
    r0_dforward = function _r0_t13(r14_p0, r14_p1, r14_p2, r14_p3) {
        var r14_p0, r14_p1, r14_p2, r14_p3;
        return {
            'x': r14_p0['x'] + (-11 / 6 * r14_p0['x'] + 3 * r14_p1['x'] - 3 / 2 * r14_p2['x'] + r14_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r14_p0['y'] + (-11 / 6 * r14_p0['y'] + 3 * r14_p1['y'] - 3 / 2 * r14_p2['y'] + r14_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t14(r15_p0, r15_p1, r15_p2, r15_p3) {
        var r15_p0, r15_p1, r15_p2, r15_p3;
        return {
            'x': r15_p0['x'] + (11 / 6 * r15_p0['x'] - 3 * r15_p1['x'] + 3 / 2 * r15_p2['x'] - r15_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r15_p0['y'] + (11 / 6 * r15_p0['y'] - 3 * r15_p1['y'] + 3 / 2 * r15_p2['y'] - r15_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t15(r16_a, r16_b, r16_c) {
        var r16_a, r16_b, r16_c;
        return Math['abs']((r16_c['y'] - r16_a['y']) * (r16_b['x'] - r16_a['x']) - (r16_c['x'] - r16_a['x']) * (r16_b['y'] - r16_a['y'])) > r0_TINY;
    };
    r0_computeOffsetPoint = function _r0_t16(r17_curve, r17_t, r17_j, r17_foffset, r17_fpdx, r17_fpdy) {
        var r17_curve, r17_t, r17_j, r17_foffset, r17_fpdx, r17_fpdy, r17_onpoint, r17_normal;
        r17_onpoint = r17_curve['compute'](r17_t - r17_j);
        r17_normal = r17_curve['normal'](r17_t - r17_j);
        return {
            'x': r17_onpoint['x'] + r17_foffset(r17_t) * (r17_normal['x'] + r17_fpdx(r17_t)),
            'y': r17_onpoint['y'] + r17_foffset(r17_t) * (r17_normal['y'] + r17_fpdy(r17_t))
        };
    };
    r0_Stroke['prototype']['to-outline'] = function _r0_t17(r18_d1, r18_d2, r18__samples, r18_straight) {
        var r18_d1, r18_d2, r18__samples, r18_straight, r18_d1s, r18_d2s, r18_pdxs, r18_pdys, r18_samples, r18_shapes, r18_subSegments, r18_p0, r18_j, r18_p1, r18_p2, r18_seg, r18_normalpt, r18_p3, r18_f1, r18_f2, r18_fpdx, r18_fpdy, r18_left, r18_right, r18_curve, r18_sample, r18_t, r18_tn, r18_lthis, r18_rthis, r18_lnext, r18_rnext, r18_lnthis1, r18_rnthis1, r18_lnnext1, r18_rnnext1, r18_lnthis2, r18_rnthis2, r18_lnnext2, r18_rnnext2, r18_lnthis3, r18_rnthis3, r18_lnnext3, r18_rnnext3, r18_dlthis, r18_drthis, r18_dlnext, r18_drnext, r18_il, r18_ir, r18_last, r18_shape, r18_still, r18_k, _r18_t0, _r18_t1, _r18_t2, _r18_t3, _r18_t4, _r18_t5, _r18_t6, _r18_t7, _r18_t8, _r18_t9, _r18_t10, _r18_t11, _r18_t12, _r18_t13, _r18_t14, _r18_t15, _r18_t16, _r18_t17, _r18_t18, _r18_t19, _r18_t20, _r18_t21, _r18_t22, _r18_t23, _r18_t24, _r18_t25, _r18_t26, _r18_t27, _r18_t28, _r18_t29, _r18_t30, _r18_t31, _r18_t32, _r18_t33, _r18_t34, _r18_t35, _r18_t36, _r18_t37, _r18_t38, _r18_t39, _r18_t40, _r18_t41, _r18_t42, _r18_t43, _r18_t44, _r18_t45, _r18_t46, _r18_t47, _r18_t48, _r18_t49, _r18_t50, _r18_t51, _r18_t52, _r18_t53, _r18_t54, _r18_t55, _r18_t56, _r18_t57, _r18_t58, _r18_t59, _r18_t60, _r18_t61;
        _r18_t5 = this;
        if (_r18_t5['points'][0]['d1'] >= 0)
            _r18_t6 = _r18_t5['points'][0]['d1'];
        else
            _r18_t6 = r18_d1;
        _r18_t7 = r18_d1 = _r18_t6;
        r18_d1s = [_r18_t7];
        if (_r18_t5['points'][0]['d2'] >= 0)
            _r18_t8 = _r18_t5['points'][0]['d2'];
        else
            _r18_t8 = r18_d2;
        _r18_t9 = r18_d2 = _r18_t8;
        r18_d2s = [_r18_t9];
        r18_pdxs = [0];
        r18_pdys = [0];
        r18_samples = r18__samples || r0_SAMPLES;
        r18_shapes = [];
        r18_subSegments = [];
        r18_p0 = _r18_t5['points'][0];
        r18_j = 1;
        for (; r18_j < this['points']['length']; r18_j = r18_j + 1) {
            r18_p1 = _r18_t5['points'][r18_j];
            if (r18_p1['onCurve']) {
                r18_subSegments['push'](r18_seg = new r0_Bezier(r18_p0['x'], r18_p0['y'], (r18_p0['x'] + r18_p1['x']) / 2, (r18_p0['y'] + r18_p1['y']) / 2, r18_p1['x'], r18_p1['y']));
                _r18_t10 = r18_d1s;
                _r18_t11 = _r18_t10['push'];
                if (r18_p1['d1'] >= 0)
                    _r18_t12 = r18_p1['d1'];
                else
                    _r18_t12 = r18_d1;
                _r18_t13 = r18_d1 = _r18_t12;
                _r18_t11['call'](_r18_t10, _r18_t13);
                _r18_t14 = r18_d2s;
                _r18_t15 = _r18_t14['push'];
                if (r18_p1['d2'] >= 0)
                    _r18_t16 = r18_p1['d2'];
                else
                    _r18_t16 = r18_d2;
                _r18_t17 = r18_d2 = _r18_t16;
                _r18_t15['call'](_r18_t14, _r18_t17);
                r18_normalpt = r18_seg['normal'](1);
                _r18_t18 = r18_pdxs;
                _r18_t19 = _r18_t18['push'];
                if (r18_p1['pdx'] !== void 0)
                    _r18_t20 = r18_p1['pdx'] - r18_normalpt['x'];
                else
                    _r18_t20 = 0;
                _r18_t19['call'](_r18_t18, _r18_t20);
                _r18_t21 = r18_pdys;
                _r18_t22 = _r18_t21['push'];
                if (r18_p1['pdy'] !== void 0)
                    _r18_t23 = r18_p1['pdy'] - r18_normalpt['y'];
                else
                    _r18_t23 = 0;
                _r18_t22['call'](_r18_t21, _r18_t23);
                r18_p0 = r18_p1;
            } else if (r18_p1['cubic']) {
                r18_p2 = _r18_t5['points'][r18_j + 1];
                r18_p3 = _r18_t5['points'][r18_j + 2];
                r18_subSegments['push'](r18_seg = new r0_Bezier(r18_p0['x'], r18_p0['y'], r18_p1['x'], r18_p1['y'], r18_p2['x'], r18_p2['y'], r18_p3['x'], r18_p3['y']));
                _r18_t24 = r18_d1s;
                _r18_t25 = _r18_t24['push'];
                if (r18_p3['d1'] >= 0)
                    _r18_t26 = r18_p3['d1'];
                else
                    _r18_t26 = r18_d1;
                _r18_t27 = r18_d1 = _r18_t26;
                _r18_t25['call'](_r18_t24, _r18_t27);
                _r18_t28 = r18_d2s;
                _r18_t29 = _r18_t28['push'];
                if (r18_p3['d2'] >= 0)
                    _r18_t30 = r18_p3['d2'];
                else
                    _r18_t30 = r18_d2;
                _r18_t31 = r18_d2 = _r18_t30;
                _r18_t29['call'](_r18_t28, _r18_t31);
                r18_normalpt = r18_seg['normal'](1);
                _r18_t32 = r18_pdxs;
                _r18_t33 = _r18_t32['push'];
                if (r18_p3['pdx'] !== void 0)
                    _r18_t34 = r18_p3['pdx'] - r18_normalpt['x'];
                else
                    _r18_t34 = 0;
                _r18_t33['call'](_r18_t32, _r18_t34);
                _r18_t35 = r18_pdys;
                _r18_t36 = _r18_t35['push'];
                if (r18_p3['pdy'] !== void 0)
                    _r18_t37 = r18_p3['pdy'] - r18_normalpt['y'];
                else
                    _r18_t37 = 0;
                _r18_t36['call'](_r18_t35, _r18_t37);
                r18_p0 = r18_p3;
                r18_j = r18_j + 2;
            } else if (true) {
                r18_p2 = _r18_t5['points'][r18_j + 1];
                r18_subSegments['push'](r18_seg = new r0_Bezier(r18_p0['x'], r18_p0['y'], r18_p1['x'], r18_p1['y'], r18_p2['x'], r18_p2['y']));
                _r18_t38 = r18_d1s;
                _r18_t39 = _r18_t38['push'];
                if (r18_p2['d1'] >= 0)
                    _r18_t40 = r18_p2['d1'];
                else
                    _r18_t40 = r18_d1;
                _r18_t41 = r18_d1 = _r18_t40;
                _r18_t39['call'](_r18_t38, _r18_t41);
                _r18_t42 = r18_d2s;
                _r18_t43 = _r18_t42['push'];
                if (r18_p2['d2'] >= 0)
                    _r18_t44 = r18_p2['d2'];
                else
                    _r18_t44 = r18_d2;
                _r18_t45 = r18_d2 = _r18_t44;
                _r18_t43['call'](_r18_t42, _r18_t45);
                r18_normalpt = r18_seg['normal'](1);
                _r18_t46 = r18_pdxs;
                _r18_t47 = _r18_t46['push'];
                if (r18_p2['pdx'] !== void 0)
                    _r18_t48 = r18_p2['pdx'] - r18_normalpt['x'];
                else
                    _r18_t48 = 0;
                _r18_t47['call'](_r18_t46, _r18_t48);
                _r18_t49 = r18_pdys;
                _r18_t50 = _r18_t49['push'];
                if (r18_p2['pdy'] !== void 0)
                    _r18_t51 = r18_p2['pdy'] - r18_normalpt['y'];
                else
                    _r18_t51 = 0;
                _r18_t50['call'](_r18_t49, _r18_t51);
                r18_p0 = r18_p2;
                r18_j = r18_j + 1;
            } else
                void 0;
        }
        if (_r18_t5['points'][0]['pdx'] !== void 0)
            _r18_t52 = r18_pdxs[0] = _r18_t5['points'][0]['pdx'] - r18_subSegments[0]['normal'](0)['x'];
        else
            _r18_t52 = void 0;
        if (_r18_t5['points'][0]['pdy'] !== void 0)
            _r18_t53 = r18_pdys[0] = _r18_t5['points'][0]['pdy'] - r18_subSegments[0]['normal'](0)['y'];
        else
            _r18_t53 = void 0;
        r18_f1 = r0_smooth(r0_xn$xsarray$3cah(0, r18_d1s['length']), r0_xn$ysarray$3cah(r18_d1s));
        r18_f2 = r0_smooth(r0_xn$xsarray$3cah(0, r18_d2s['length']), r0_xn$ysarray$3cah(r18_d2s['map'](function _r18_t54(r19_x) {
            var r19_x;
            return -r19_x;
        })));
        r18_fpdx = r0_smooth(r0_xn$xsarray$3cah(0, r18_d1s['length']), r0_xn$ysarray$3cah(r18_pdxs));
        r18_fpdy = r0_smooth(r0_xn$xsarray$3cah(0, r18_d2s['length']), r0_xn$ysarray$3cah(r18_pdys));
        r18_left = [];
        r18_right = [];
        r18_j = 0;
        for (; r18_j < r18_subSegments['length']; r18_j = r18_j + 1) {
            r18_curve = r18_subSegments[r18_j];
            _r18_t0 = 0;
            _r18_t1 = r18_samples;
            r18_sample = _r18_t0;
            for (; r18_sample < _r18_t1; r18_sample = r18_sample + 1) {
                r18_t = r18_j + r18_sample / r18_samples;
                r18_tn = r18_j + (r18_sample + 1) / r18_samples;
                r18_lthis = r0_computeOffsetPoint(r18_curve, r18_t, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rthis = r0_computeOffsetPoint(r18_curve, r18_t, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnext = r0_computeOffsetPoint(r18_curve, r18_tn, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnext = r0_computeOffsetPoint(r18_curve, r18_tn, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnthis1 = r0_computeOffsetPoint(r18_curve, r18_t + r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnthis1 = r0_computeOffsetPoint(r18_curve, r18_t + r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnnext1 = r0_computeOffsetPoint(r18_curve, r18_tn - r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnnext1 = r0_computeOffsetPoint(r18_curve, r18_tn - r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnthis2 = r0_computeOffsetPoint(r18_curve, r18_t + 2 * r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnthis2 = r0_computeOffsetPoint(r18_curve, r18_t + 2 * r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnnext2 = r0_computeOffsetPoint(r18_curve, r18_tn - 2 * r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnnext2 = r0_computeOffsetPoint(r18_curve, r18_tn - 2 * r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnthis3 = r0_computeOffsetPoint(r18_curve, r18_t + 3 * r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnthis3 = r0_computeOffsetPoint(r18_curve, r18_t + 3 * r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_lnnext3 = r0_computeOffsetPoint(r18_curve, r18_tn - 3 * r0_TINY, r18_j, r18_f1, r18_fpdx, r18_fpdy);
                r18_rnnext3 = r0_computeOffsetPoint(r18_curve, r18_tn - 3 * r0_TINY, r18_j, r18_f2, r18_fpdx, r18_fpdy);
                r18_dlthis = r0_dforward(r18_lthis, r18_lnthis1, r18_lnthis2, r18_lnthis3);
                r18_drthis = r0_dforward(r18_rthis, r18_rnthis1, r18_rnthis2, r18_rnthis3);
                r18_dlnext = r0_dbackward(r18_lnext, r18_lnnext1, r18_lnnext2, r18_lnnext3);
                r18_drnext = r0_dbackward(r18_rnext, r18_rnnext2, r18_rnnext2, r18_rnnext3);
                r18_il = r0_intersection(r18_lthis['x'], r18_lthis['y'], r18_dlthis['x'], r18_dlthis['y'], r18_lnext['x'], r18_lnext['y'], r18_dlnext['x'], r18_dlnext['y']);
                if (!r18_straight && r0_nonlinear(r18_lthis, r18_lnext, r18_dlthis) && r0_nonlinear(r18_lthis, r18_lnext, r18_dlnext) && r18_il['x'] !== null && r18_il['y'] !== null && Math['abs'](r18_il['x']) <= r0_CUTOFF && Math['abs'](r18_il['y']) <= r0_CUTOFF && r0_nonlinear(r18_lthis, r18_il, r18_lnext)) {
                    r18_left['push']({
                        'x': r18_lthis['x'],
                        'y': r18_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r18_il['x'],
                        'y': r18_il['y'],
                        'onCurve': false
                    });
                } else {
                    r18_left['push']({
                        'x': r18_lthis['x'],
                        'y': r18_lthis['y'],
                        'onCurve': true
                    });
                }
                r18_ir = r0_intersection(r18_rthis['x'], r18_rthis['y'], r18_drthis['x'], r18_drthis['y'], r18_rnext['x'], r18_rnext['y'], r18_drnext['x'], r18_drnext['y']);
                if (!r18_straight && r0_nonlinear(r18_rthis, r18_rnext, r18_drthis) && r0_nonlinear(r18_rthis, r18_rnext, r18_drnext) && r18_ir['x'] !== null && r18_ir['y'] !== null && Math['abs'](r18_ir['x']) <= r0_CUTOFF && Math['abs'](r18_ir['y']) <= r0_CUTOFF && r0_nonlinear(r18_rthis, r18_ir, r18_rnext)) {
                    r18_right['push']({
                        'x': r18_rthis['x'],
                        'y': r18_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r18_ir['x'],
                        'y': r18_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r18_right['push']({
                        'x': r18_rthis['x'],
                        'y': r18_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r18_t55 = r18_left;
            _r18_t56 = _r18_t55['push'];
            r18_last = r0_computeOffsetPoint(r18_curve, r18_j + 1, r18_j, r18_f1, r18_fpdx, r18_fpdy);
            _r18_t57 = {
                'x': r18_last['x'],
                'y': r18_last['y'],
                'onCurve': true
            };
            _r18_t56['call'](_r18_t55, _r18_t57);
            _r18_t58 = r18_right;
            _r18_t59 = _r18_t58['push'];
            r18_last = r0_computeOffsetPoint(r18_curve, r18_j + 1, r18_j, r18_f2, r18_fpdx, r18_fpdy);
            _r18_t60 = {
                'x': r18_last['x'],
                'y': r18_last['y'],
                'onCurve': true
            };
            _r18_t59['call'](_r18_t58, _r18_t60);
        }
        r18_shapes['push'](r18_left['concat'](r18_right['reverse']()));
        _r18_t2 = r18_shapes;
        _r18_t3 = _r18_t2['length'];
        _r18_t4 = 0;
        for (; _r18_t4 < _r18_t3; _r18_t4 = _r18_t4 + 1) {
            r18_shape = _r18_t2[_r18_t4];
            r18_j = 0;
            for (; r18_j < r18_shape['length'] - 1; r18_j = r18_j + 1) {
                r18_p0 = r18_shape[r18_j];
                r18_still = true;
                r18_k = r18_j + 1;
                for (; r18_still && r18_k < r18_shape['length'] - 1; r18_k = r18_k + 1) {
                    r18_p1 = r18_shape[r18_k];
                    r18_p2 = r18_shape[r18_k + 1];
                    if (r18_p0['onCurve'] && r18_p1['onCurve'] && r18_p2['onCurve'] && !r0_nonlinear(r18_p0, r18_p1, r18_p2)) {
                        r18_p1['removable'] = true;
                    } else {
                        r18_still = false;
                    }
                }
                r18_j = r18_k - 1;
            }
        }
        return r18_shapes['map'](function _r18_t61(r22_shape) {
            var r22_shape, _r22_t0;
            return r22_shape['filter'](function _r22_t0(r23_x) {
                var r23_x;
                return r23_x && !r23_x['removable'];
            });
        });
    };
    exports['Stroke'] = r0_Stroke;
}
