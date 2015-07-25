{
    var r0_smooth, r0_intersection, r0_Bezier, r0_tp, r0_utp, r0_fallback, r0_xn$xsarray$3cah, r0_xn$ysarray$3cah, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_midclose, r0_near, r0_computeOffsetPoint, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21, _r0_t22;
    r0_smooth = require('./monotonic-interpolate')['createInterpolant'];
    r0_intersection = require('./intersection')['intersection'];
    r0_Bezier = require('bezier-js');
    r0_tp = require('./transform')['transformPoint'];
    r0_utp = require('./transform')['untransform'];
    r0_fallback = function _r0_t0() {
        var r1_j, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4;
        _r1_t1 = arguments;
        r1_j = 0;
        _r1_t2 = r1_j < _r1_t1['length'];
        for (; _r1_t2; _r1_t2 = r1_j < _r1_t1['length']) {
            if (_r1_t1[r1_j] !== void 0)
                return _r1_t1[r1_j];
            else
                _r1_t4 = void 0;
            _r1_t3 = r1_j = r1_j + 1;
        }
        return _r1_t3;
    };
    r0_xn$xsarray$3cah = function _r0_t1(r2_low, r2_high) {
        var r2_low, r2_high, r2_a, r2_j, _r2_t0, _r2_t1;
        r2_a = [];
        r2_j = r2_low - 1;
        for (; r2_j <= r2_high; r2_j = r2_j + 1) {
            r2_a['push'](r2_j);
        }
        return r2_a;
    };
    r0_xn$ysarray$3cah = function _r0_t2(r3_a) {
        var r3_a, _r3_t0, _r3_t1;
        return [r3_a[0]]['concat'](r3_a['concat']([r3_a[r3_a['length'] - 1]]));
    };
    r0_SAMPLES = 3;
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_KAPPA = 0.51;
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = r0_COKAPPA - 0.1;
    r0_Stroke = function _r0_t3() {
        var _r4_t0, _r4_t1;
        _r4_t0 = this;
        _r4_t0['points'] = [];
        _r4_t0['samples'] = r0_SAMPLES;
        _r4_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        return _r4_t0;
    };
    r0_Stroke['is'] = {
        'unapply': function _r0_t4(r5_obj) {
            var r5_obj, _r5_t0, _r5_t1, _r5_t2;
            if (r5_obj instanceof r0_Stroke)
                return [r5_obj];
            else
                return null;
        }
    };
    r0_Stroke['prototype']['set-transform'] = function _r0_t5(r6_t) {
        var r6_t, _r6_t0, _r6_t1;
        _r6_t0 = this;
        _r6_t0['gizmo'] = r6_t;
        return _r6_t0;
    };
    r0_Stroke['bindParameters'] = function _r0_t6(r7_para) {
        var r7_para, _r7_t0, _r7_t1;
        r0_KAPPA = r7_para['kappa'];
        r0_COKAPPA = 1 - r0_KAPPA;
        r0_COBKAPPA = r0_COKAPPA - 0.1;
        return r0_BKAPPA = r0_KAPPA + 0.1;
    };
    r0_Stroke['prototype']['set-width'] = function _r0_t7(r8_d1, r8_d2) {
        var r8_d1, r8_d2, r8_point, _r8_t0, _r8_t1;
        _r8_t0 = this;
        r8_point = _r8_t0['points'][_r8_t0['points']['length'] - 1];
        r8_point['d1'] = r8_d1;
        r8_point['d2'] = r8_d2;
        return _r8_t0;
    };
    r0_Stroke['prototype']['heads-to'] = function _r0_t8(r9_x, r9_y) {
        var r9_x, r9_y, r9_point, _r9_t0, _r9_t1, _r9_t2;
        _r9_t0 = this;
        if (r9_x['x'] !== void 0 || r9_x['y'] !== void 0) {
            r9_y = r9_x['y'];
            _r9_t2 = r9_x = r9_x['x'];
        } else
            _r9_t2 = void 0;
        r9_point = _r9_t0['points'][_r9_t0['points']['length'] - 1];
        r9_point['pdx'] = r9_x;
        r9_point['pdy'] = r9_y;
        return _r9_t0;
    };
    r0_Stroke['prototype']['start-from'] = function _r0_t9(r10_x, r10_y) {
        var r10_x, r10_y, _r10_t0, _r10_t1;
        _r10_t0 = this;
        _r10_t0['points'] = [r0_tp(_r10_t0['gizmo'], {
                'x': r10_x,
                'y': r10_y,
                'onCurve': true
            })];
        return _r10_t0;
    };
    r0_Stroke['prototype']['line-to'] = function _r0_t10(r11_x, r11_y) {
        var r11_x, r11_y, _r11_t0, _r11_t1;
        _r11_t0 = this;
        _r11_t0['points']['push'](r0_tp(_r11_t0['gizmo'], {
            'x': r11_x,
            'y': r11_y,
            'onCurve': true
        }));
        return _r11_t0;
    };
    r0_Stroke['prototype']['curve-to'] = function _r0_t11(r12_xc, r12_yc, r12_x, r12_y) {
        var r12_xc, r12_yc, r12_x, r12_y, _r12_t0, _r12_t1;
        _r12_t0 = this;
        _r12_t0['points']['push'](r0_tp(_r12_t0['gizmo'], {
            'x': r12_xc,
            'y': r12_yc,
            'onCurve': false
        }), r0_tp(_r12_t0['gizmo'], {
            'x': r12_x,
            'y': r12_y,
            'onCurve': true
        }));
        return _r12_t0;
    };
    r0_Stroke['prototype']['cubic-to'] = function _r0_t12(r13_x1, r13_y1, r13_x2, r13_y2, r13_x, r13_y) {
        var r13_x1, r13_y1, r13_x2, r13_y2, r13_x, r13_y, _r13_t0, _r13_t1;
        _r13_t0 = this;
        _r13_t0['points']['push'](r0_tp(_r13_t0['gizmo'], {
            'x': r13_x1,
            'y': r13_y1,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r13_t0['gizmo'], {
            'x': r13_x2,
            'y': r13_y2,
            'onCurve': false,
            'cubic': true
        }), r0_tp(_r13_t0['gizmo'], {
            'x': r13_x,
            'y': r13_y,
            'onCurve': true
        }));
        return _r13_t0;
    };
    r0_Stroke['prototype']['arc-vh-to'] = function _r0_t13(r14_x, r14_y) {
        var r14_x, r14_y, r14_last, _r14_t0, _r14_t1;
        _r14_t0 = this;
        r14_last = r0_utp(_r14_t0['gizmo'], _r14_t0['points'][_r14_t0['points']['length'] - 1]);
        _r14_t0['cubic-to'](r14_last['x'], r14_last['y'] + r0_BKAPPA * (r14_y - r14_last['y']), r14_x + r0_BKAPPA * (r14_last['x'] - r14_x), r14_y, r14_x, r14_y);
        return _r14_t0;
    };
    r0_Stroke['prototype']['arc-hv-to'] = function _r0_t14(r15_x, r15_y) {
        var r15_x, r15_y, r15_last, _r15_t0, _r15_t1;
        _r15_t0 = this;
        r15_last = r0_utp(_r15_t0['gizmo'], _r15_t0['points'][_r15_t0['points']['length'] - 1]);
        _r15_t0['cubic-to'](r15_last['x'] + r0_BKAPPA * (r15_x - r15_last['x']), r15_last['y'], r15_x, r15_y + r0_BKAPPA * (r15_last['y'] - r15_y), r15_x, r15_y);
        return _r15_t0;
    };
    r0_Stroke['prototype']['set-samples'] = function _r0_t15(r16_samples) {
        var r16_samples, _r16_t0, _r16_t1;
        _r16_t0 = this;
        _r16_t0['samples'] = r16_samples;
        return _r16_t0;
    };
    r0_dforward = function _r0_t16(r17_p0, r17_p1, r17_p2, r17_p3) {
        var r17_p0, r17_p1, r17_p2, r17_p3, _r17_t0, _r17_t1;
        return {
            'x': r17_p0['x'] + (-11 / 6 * r17_p0['x'] + 3 * r17_p1['x'] - 3 / 2 * r17_p2['x'] + r17_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r17_p0['y'] + (-11 / 6 * r17_p0['y'] + 3 * r17_p1['y'] - 3 / 2 * r17_p2['y'] + r17_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_dbackward = function _r0_t17(r18_p0, r18_p1, r18_p2, r18_p3) {
        var r18_p0, r18_p1, r18_p2, r18_p3, _r18_t0, _r18_t1;
        return {
            'x': r18_p0['x'] + (11 / 6 * r18_p0['x'] - 3 * r18_p1['x'] + 3 / 2 * r18_p2['x'] - r18_p3['x'] / 3) / r0_TINY * r0_LITTLE,
            'y': r18_p0['y'] + (11 / 6 * r18_p0['y'] - 3 * r18_p1['y'] + 3 / 2 * r18_p2['y'] - r18_p3['y'] / 3) / r0_TINY * r0_LITTLE
        };
    };
    r0_nonlinear = function _r0_t18(r19_a, r19_b, r19_c) {
        var r19_a, r19_b, r19_c, _r19_t0, _r19_t1;
        return Math['abs']((r19_c['y'] - r19_a['y']) * (r19_b['x'] - r19_a['x']) - (r19_c['x'] - r19_a['x']) * (r19_b['y'] - r19_a['y'])) > r0_TINY;
    };
    r0_midclose = function _r0_t19(r20_a, r20_b, r20_c) {
        var r20_a, r20_b, r20_c, r20_xm, r20_ym, _r20_t0, _r20_t1;
        r20_xm = (r20_a['x'] + r20_c['x']) / 2;
        r20_ym = (r20_a['y'] + r20_c['y']) / 2;
        return Math['abs'](r20_b['x'] - r20_xm) < 0.5 && Math['abs'](r20_b['y'] - r20_ym) < 0.5;
    };
    r0_near = function _r0_t20(r21_a, r21_b, r21_c) {
        var r21_a, r21_b, r21_c, r21_mx, r21_my, r21_dist, _r21_t0, _r21_t1;
        r21_mx = (r21_a['x'] + r21_c['x']) / 2;
        r21_my = (r21_a['y'] + r21_c['y']) / 2;
        r21_dist = Math['max'](Math['abs'](r21_a['y'] - r21_c['y']), Math['abs'](r21_a['x'] - r21_c['x']));
        return Math['abs'](r21_b['y'] - r21_my) < r21_dist && Math['abs'](r21_b['x'] - r21_mx) < r21_dist;
    };
    r0_computeOffsetPoint = function _r0_t21(r22_curve, r22_t, r22_j, r22_foffset, r22_fpdx, r22_fpdy) {
        var r22_curve, r22_t, r22_j, r22_foffset, r22_fpdx, r22_fpdy, r22_onpoint, r22_normal, _r22_t0, _r22_t1;
        r22_onpoint = r22_curve['compute'](r22_t - r22_j);
        r22_normal = r22_curve['normal'](r22_t - r22_j);
        return {
            'x': r22_onpoint['x'] + r22_foffset(r22_t) * (r22_normal['x'] + r22_fpdx(r22_t)),
            'y': r22_onpoint['y'] + r22_foffset(r22_t) * (r22_normal['y'] + r22_fpdy(r22_t))
        };
    };
    r0_Stroke['prototype']['to-outline'] = function _r0_t22(r23_d1, r23_d2, r23__samples, r23_straight) {
        var r23_d1, r23_d2, r23__samples, r23_straight, r23_d1s, r23_d2s, r23_pdxs, r23_pdys, r23_samples, r23_shapes, r23_subSegments, r23_p0, r23_j, r23_p1, r23_p2, r23_seg, r23_normalpt, r23_p3, r23_f1, r23_f2, r23_fpdx, r23_fpdy, r23_left, r23_right, r23_curve, r23_sample, r23_t, r23_tn, r23_lthis, r23_rthis, r23_lnext, r23_rnext, r23_lnthis1, r23_rnthis1, r23_lnnext1, r23_rnnext1, r23_lnthis2, r23_rnthis2, r23_lnnext2, r23_rnnext2, r23_lnthis3, r23_rnthis3, r23_lnnext3, r23_rnnext3, r23_dlthis, r23_drthis, r23_dlnext, r23_drnext, r23_il, r23_ir, r23_last, _r23_t0, _r23_t1, _r23_t2, _r23_t3, _r23_t4, _r23_t5, _r23_t6, _r23_t7, _r23_t8, _r23_t9, _r23_t10, _r23_t11, _r23_t12, _r23_t13, _r23_t14, _r23_t15, _r23_t16, _r23_t17, _r23_t18, _r23_t19, _r23_t20, _r23_t21, _r23_t22, _r23_t23, _r23_t24, _r23_t25, _r23_t26, _r23_t27, _r23_t28, _r23_t29, _r23_t30, _r23_t31, _r23_t32, _r23_t33, _r23_t34, _r23_t35, _r23_t36, _r23_t37, _r23_t38, _r23_t39, _r23_t40, _r23_t41, _r23_t42, _r23_t43, _r23_t44, _r23_t45, _r23_t46, _r23_t47, _r23_t48, _r23_t49, _r23_t50, _r23_t51, _r23_t52, _r23_t53, _r23_t54, _r23_t55, _r23_t56, _r23_t57, _r23_t58, _r23_t59;
        _r23_t2 = this;
        if (_r23_t2['points'][0]['d1'] >= 0)
            _r23_t4 = _r23_t2['points'][0]['d1'];
        else
            _r23_t4 = r23_d1;
        _r23_t5 = r23_d1 = _r23_t4;
        r23_d1s = [_r23_t5];
        if (_r23_t2['points'][0]['d2'] >= 0)
            _r23_t6 = _r23_t2['points'][0]['d2'];
        else
            _r23_t6 = r23_d2;
        _r23_t7 = r23_d2 = _r23_t6;
        r23_d2s = [_r23_t7];
        r23_pdxs = [0];
        r23_pdys = [0];
        r23_samples = r0_fallback(r23__samples, _r23_t2['samples'], r0_SAMPLES);
        r23_shapes = [];
        r23_subSegments = [];
        r23_p0 = _r23_t2['points'][0];
        r23_j = 1;
        for (; r23_j < this['points']['length']; r23_j = r23_j + 1) {
            r23_p1 = _r23_t2['points'][r23_j];
            if (r23_p1['onCurve']) {
                r23_subSegments['push'](r23_seg = new r0_Bezier(r23_p0['x'], r23_p0['y'], (r23_p0['x'] + r23_p1['x']) / 2, (r23_p0['y'] + r23_p1['y']) / 2, r23_p1['x'], r23_p1['y']));
                _r23_t8 = r23_d1s;
                _r23_t9 = _r23_t8['push'];
                if (r23_p1['d1'] >= 0)
                    _r23_t10 = r23_p1['d1'];
                else
                    _r23_t10 = r23_d1;
                _r23_t11 = r23_d1 = _r23_t10;
                _r23_t9['call'](_r23_t8, _r23_t11);
                _r23_t13 = r23_d2s;
                _r23_t14 = _r23_t13['push'];
                if (r23_p1['d2'] >= 0)
                    _r23_t15 = r23_p1['d2'];
                else
                    _r23_t15 = r23_d2;
                _r23_t16 = r23_d2 = _r23_t15;
                _r23_t14['call'](_r23_t13, _r23_t16);
                r23_normalpt = r23_seg['normal'](1);
                _r23_t30 = r23_pdxs;
                _r23_t31 = _r23_t30['push'];
                if (r23_p1['pdx'] !== void 0)
                    _r23_t32 = r23_p1['pdx'] - r23_normalpt['x'];
                else
                    _r23_t32 = 0;
                _r23_t31['call'](_r23_t30, _r23_t32);
                _r23_t38 = r23_pdys;
                _r23_t39 = _r23_t38['push'];
                if (r23_p1['pdy'] !== void 0)
                    _r23_t40 = r23_p1['pdy'] - r23_normalpt['y'];
                else
                    _r23_t40 = 0;
                _r23_t39['call'](_r23_t38, _r23_t40);
                r23_p0 = r23_p1;
            } else if (r23_p1['cubic']) {
                r23_p2 = _r23_t2['points'][r23_j + 1];
                r23_p3 = _r23_t2['points'][r23_j + 2];
                r23_subSegments['push'](r23_seg = new r0_Bezier(r23_p0['x'], r23_p0['y'], r23_p1['x'], r23_p1['y'], r23_p2['x'], r23_p2['y'], r23_p3['x'], r23_p3['y']));
                _r23_t22 = r23_d1s;
                _r23_t23 = _r23_t22['push'];
                if (r23_p3['d1'] >= 0)
                    _r23_t24 = r23_p3['d1'];
                else
                    _r23_t24 = r23_d1;
                _r23_t25 = r23_d1 = _r23_t24;
                _r23_t23['call'](_r23_t22, _r23_t25);
                _r23_t33 = r23_d2s;
                _r23_t34 = _r23_t33['push'];
                if (r23_p3['d2'] >= 0)
                    _r23_t35 = r23_p3['d2'];
                else
                    _r23_t35 = r23_d2;
                _r23_t36 = r23_d2 = _r23_t35;
                _r23_t34['call'](_r23_t33, _r23_t36);
                r23_normalpt = r23_seg['normal'](1);
                _r23_t44 = r23_pdxs;
                _r23_t45 = _r23_t44['push'];
                if (r23_p3['pdx'] !== void 0)
                    _r23_t46 = r23_p3['pdx'] - r23_normalpt['x'];
                else
                    _r23_t46 = 0;
                _r23_t45['call'](_r23_t44, _r23_t46);
                _r23_t50 = r23_pdys;
                _r23_t51 = _r23_t50['push'];
                if (r23_p3['pdy'] !== void 0)
                    _r23_t52 = r23_p3['pdy'] - r23_normalpt['y'];
                else
                    _r23_t52 = 0;
                _r23_t51['call'](_r23_t50, _r23_t52);
                r23_p0 = r23_p3;
                r23_j = r23_j + 2;
            } else if (true) {
                r23_p2 = _r23_t2['points'][r23_j + 1];
                r23_subSegments['push'](r23_seg = new r0_Bezier(r23_p0['x'], r23_p0['y'], r23_p1['x'], r23_p1['y'], r23_p2['x'], r23_p2['y']));
                _r23_t17 = r23_d1s;
                _r23_t18 = _r23_t17['push'];
                if (r23_p2['d1'] >= 0)
                    _r23_t19 = r23_p2['d1'];
                else
                    _r23_t19 = r23_d1;
                _r23_t20 = r23_d1 = _r23_t19;
                _r23_t18['call'](_r23_t17, _r23_t20);
                _r23_t26 = r23_d2s;
                _r23_t27 = _r23_t26['push'];
                if (r23_p2['d2'] >= 0)
                    _r23_t28 = r23_p2['d2'];
                else
                    _r23_t28 = r23_d2;
                _r23_t29 = r23_d2 = _r23_t28;
                _r23_t27['call'](_r23_t26, _r23_t29);
                r23_normalpt = r23_seg['normal'](1);
                _r23_t41 = r23_pdxs;
                _r23_t42 = _r23_t41['push'];
                if (r23_p2['pdx'] !== void 0)
                    _r23_t43 = r23_p2['pdx'] - r23_normalpt['x'];
                else
                    _r23_t43 = 0;
                _r23_t42['call'](_r23_t41, _r23_t43);
                _r23_t47 = r23_pdys;
                _r23_t48 = _r23_t47['push'];
                if (r23_p2['pdy'] !== void 0)
                    _r23_t49 = r23_p2['pdy'] - r23_normalpt['y'];
                else
                    _r23_t49 = 0;
                _r23_t48['call'](_r23_t47, _r23_t49);
                r23_p0 = r23_p2;
                r23_j = r23_j + 1;
            } else
                void 0;
        }
        if (_r23_t2['points'][0]['pdx'] !== void 0)
            _r23_t12 = r23_pdxs[0] = _r23_t2['points'][0]['pdx'] - r23_subSegments[0]['normal'](0)['x'];
        else
            _r23_t12 = void 0;
        if (_r23_t2['points'][0]['pdy'] !== void 0)
            _r23_t21 = r23_pdys[0] = _r23_t2['points'][0]['pdy'] - r23_subSegments[0]['normal'](0)['y'];
        else
            _r23_t21 = void 0;
        r23_f1 = r0_smooth(r0_xn$xsarray$3cah(0, r23_d1s['length']), r0_xn$ysarray$3cah(r23_d1s));
        r23_f2 = r0_smooth(r0_xn$xsarray$3cah(0, r23_d2s['length']), r0_xn$ysarray$3cah(r23_d2s['map'](function _r23_t37(r24_x) {
            var r24_x, _r24_t0, _r24_t1;
            return -r24_x;
        })));
        r23_fpdx = r0_smooth(r0_xn$xsarray$3cah(0, r23_d1s['length']), r0_xn$ysarray$3cah(r23_pdxs));
        r23_fpdy = r0_smooth(r0_xn$xsarray$3cah(0, r23_d2s['length']), r0_xn$ysarray$3cah(r23_pdys));
        r23_left = [];
        r23_right = [];
        r23_j = 0;
        for (; r23_j < r23_subSegments['length']; r23_j = r23_j + 1) {
            r23_curve = r23_subSegments[r23_j];
            _r23_t0 = 0;
            _r23_t1 = r23_samples;
            r23_sample = _r23_t0;
            for (; r23_sample < _r23_t1; r23_sample = r23_sample + 1) {
                r23_t = r23_j + r23_sample / r23_samples;
                r23_tn = r23_j + (r23_sample + 1) / r23_samples;
                r23_lthis = r0_computeOffsetPoint(r23_curve, r23_t, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rthis = r0_computeOffsetPoint(r23_curve, r23_t, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnext = r0_computeOffsetPoint(r23_curve, r23_tn, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnext = r0_computeOffsetPoint(r23_curve, r23_tn, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnthis1 = r0_computeOffsetPoint(r23_curve, r23_t + r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnthis1 = r0_computeOffsetPoint(r23_curve, r23_t + r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnnext1 = r0_computeOffsetPoint(r23_curve, r23_tn - r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnnext1 = r0_computeOffsetPoint(r23_curve, r23_tn - r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnthis2 = r0_computeOffsetPoint(r23_curve, r23_t + 2 * r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnthis2 = r0_computeOffsetPoint(r23_curve, r23_t + 2 * r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnnext2 = r0_computeOffsetPoint(r23_curve, r23_tn - 2 * r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnnext2 = r0_computeOffsetPoint(r23_curve, r23_tn - 2 * r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnthis3 = r0_computeOffsetPoint(r23_curve, r23_t + 3 * r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnthis3 = r0_computeOffsetPoint(r23_curve, r23_t + 3 * r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_lnnext3 = r0_computeOffsetPoint(r23_curve, r23_tn - 3 * r0_TINY, r23_j, r23_f1, r23_fpdx, r23_fpdy);
                r23_rnnext3 = r0_computeOffsetPoint(r23_curve, r23_tn - 3 * r0_TINY, r23_j, r23_f2, r23_fpdx, r23_fpdy);
                r23_dlthis = r0_dforward(r23_lthis, r23_lnthis1, r23_lnthis2, r23_lnthis3);
                r23_drthis = r0_dforward(r23_rthis, r23_rnthis1, r23_rnthis2, r23_rnthis3);
                r23_dlnext = r0_dbackward(r23_lnext, r23_lnnext1, r23_lnnext2, r23_lnnext3);
                r23_drnext = r0_dbackward(r23_rnext, r23_rnnext2, r23_rnnext2, r23_rnnext3);
                r23_il = r0_intersection(r23_lthis['x'], r23_lthis['y'], r23_dlthis['x'], r23_dlthis['y'], r23_lnext['x'], r23_lnext['y'], r23_dlnext['x'], r23_dlnext['y']);
                if (!r23_straight && r0_nonlinear(r23_lthis, r23_lnext, r23_dlthis) && r0_nonlinear(r23_lthis, r23_lnext, r23_dlnext) && r23_il['x'] !== null && r23_il['y'] !== null && r0_nonlinear(r23_lthis, r23_il, r23_lnext) && r0_near(r23_lthis, r23_il, r23_lnext)) {
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
                r23_ir = r0_intersection(r23_rthis['x'], r23_rthis['y'], r23_drthis['x'], r23_drthis['y'], r23_rnext['x'], r23_rnext['y'], r23_drnext['x'], r23_drnext['y']);
                if (!r23_straight && r0_nonlinear(r23_rthis, r23_rnext, r23_drthis) && r0_nonlinear(r23_rthis, r23_rnext, r23_drnext) && r23_ir['x'] !== null && r23_ir['y'] !== null && r0_nonlinear(r23_rthis, r23_ir, r23_rnext) && r0_near(r23_rthis, r23_ir, r23_rnext)) {
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
            _r23_t54 = r23_left;
            _r23_t55 = _r23_t54['push'];
            r23_last = r0_computeOffsetPoint(r23_curve, r23_j + 1, r23_j, r23_f1, r23_fpdx, r23_fpdy);
            _r23_t56 = {
                'x': r23_last['x'],
                'y': r23_last['y'],
                'onCurve': true
            };
            _r23_t55['call'](_r23_t54, _r23_t56);
            _r23_t57 = r23_right;
            _r23_t58 = _r23_t57['push'];
            r23_last = r0_computeOffsetPoint(r23_curve, r23_j + 1, r23_j, r23_f2, r23_fpdx, r23_fpdy);
            _r23_t59 = {
                'x': r23_last['x'],
                'y': r23_last['y'],
                'onCurve': true
            };
            _r23_t58['call'](_r23_t57, _r23_t59);
        }
        r23_shapes['push'](r23_left['concat'](r23_right['reverse']()));
        return r23_shapes['map'](function _r23_t53(r26_shape) {
            var r26_shape, r26_p0, r26_p1, r26_j, r26_still, r26_k, r26_p2, _r26_t0, _r26_t1, _r26_t2, _r26_t3, _r26_t4, _r26_t5, _r26_t6;
            for (; r26_j < r26_shape['length'] - 1; r26_j = r26_j + 1) {
                r26_p0 = r26_shape[r26_j];
                r26_p1 = r26_shape[r26_j + 1];
                if (r26_p0['onCurve'] && r26_p1['onCurve'] && r26_p0['x'] === r26_p1['x'] && r26_p0['y'] === r26_p1['y'])
                    _r26_t2 = r26_p1['removable'] = true;
                else
                    _r26_t2 = void 0;
            }
            r26_shape = r26_shape['filter'](function _r26_t3(r27_point) {
                var r27_point, _r27_t0, _r27_t1;
                return r27_point && !r27_point['removable'];
            });
            r26_j = 0;
            for (; r26_j < r26_shape['length'] - 1; r26_j = r26_j + 1) {
                r26_p0 = r26_shape[r26_j];
                r26_still = true;
                r26_k = r26_j + 1;
                for (; r26_still && r26_k < r26_shape['length'] - 1; r26_k = r26_k + 1) {
                    r26_p1 = r26_shape[r26_k];
                    r26_p2 = r26_shape[r26_k + 1];
                    if (r26_p0['onCurve'] && r26_p1['onCurve'] && r26_p2['onCurve'] && !r0_nonlinear(r26_p0, r26_p1, r26_p2)) {
                        r26_p1['removable'] = true;
                    } else {
                        r26_still = false;
                    }
                }
                r26_j = r26_k - 1;
            }
            r26_shape = r26_shape['filter'](function _r26_t4(r28_point) {
                var r28_point, _r28_t0, _r28_t1;
                return r28_point && !r28_point['removable'];
            });
            r26_j = 1;
            for (; r26_j < r26_shape['length'] - 2; r26_j = r26_j + 1) {
                r26_p0 = r26_shape[r26_j];
                r26_p1 = r26_shape[r26_j + 1];
                r26_p2 = r26_shape[r26_j + 2];
                if (!r26_p0['onCurve'] && r26_p1['onCurve'] && !r26_p2['onCurve'] && r0_midclose(r26_p0, r26_p1, r26_p2)) {
                    r26_p1['removable'] = true;
                    _r26_t6 = r26_j = r26_j + 1;
                } else
                    _r26_t6 = void 0;
            }
            r26_shape = r26_shape['filter'](function _r26_t5(r29_point) {
                var r29_point, _r29_t0, _r29_t1;
                return r29_point && !r29_point['removable'];
            });
            return r26_shape;
        });
    };
    exports['Stroke'] = r0_Stroke;
}
