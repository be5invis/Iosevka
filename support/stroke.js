{
    var r0_smooth, r0_intersection, r0_Bezier, r0_tp, r0_utp, r0_fallback, r0_xn$xsarray$3cah, r0_xn$ysarray$3cah, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_CUTOFF, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_midclose, r0_computeOffsetPoint, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21;
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
    r0_SAMPLES = 5;
    r0_TINY = 0.0001;
    r0_LITTLE = 0.01;
    r0_CUTOFF = 2000;
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
    r0_computeOffsetPoint = function _r0_t20(r21_curve, r21_t, r21_j, r21_foffset, r21_fpdx, r21_fpdy) {
        var r21_curve, r21_t, r21_j, r21_foffset, r21_fpdx, r21_fpdy, r21_onpoint, r21_normal, _r21_t0, _r21_t1;
        r21_onpoint = r21_curve['compute'](r21_t - r21_j);
        r21_normal = r21_curve['normal'](r21_t - r21_j);
        return {
            'x': r21_onpoint['x'] + r21_foffset(r21_t) * (r21_normal['x'] + r21_fpdx(r21_t)),
            'y': r21_onpoint['y'] + r21_foffset(r21_t) * (r21_normal['y'] + r21_fpdy(r21_t))
        };
    };
    r0_Stroke['prototype']['to-outline'] = function _r0_t21(r22_d1, r22_d2, r22__samples, r22_straight) {
        var r22_d1, r22_d2, r22__samples, r22_straight, r22_d1s, r22_d2s, r22_pdxs, r22_pdys, r22_samples, r22_shapes, r22_subSegments, r22_p0, r22_j, r22_p1, r22_p2, r22_seg, r22_normalpt, r22_p3, r22_f1, r22_f2, r22_fpdx, r22_fpdy, r22_left, r22_right, r22_curve, r22_sample, r22_t, r22_tn, r22_lthis, r22_rthis, r22_lnext, r22_rnext, r22_lnthis1, r22_rnthis1, r22_lnnext1, r22_rnnext1, r22_lnthis2, r22_rnthis2, r22_lnnext2, r22_rnnext2, r22_lnthis3, r22_rnthis3, r22_lnnext3, r22_rnnext3, r22_dlthis, r22_drthis, r22_dlnext, r22_drnext, r22_il, r22_ir, r22_last, _r22_t0, _r22_t1, _r22_t2, _r22_t3, _r22_t4, _r22_t5, _r22_t6, _r22_t7, _r22_t8, _r22_t9, _r22_t10, _r22_t11, _r22_t12, _r22_t13, _r22_t14, _r22_t15, _r22_t16, _r22_t17, _r22_t18, _r22_t19, _r22_t20, _r22_t21, _r22_t22, _r22_t23, _r22_t24, _r22_t25, _r22_t26, _r22_t27, _r22_t28, _r22_t29, _r22_t30, _r22_t31, _r22_t32, _r22_t33, _r22_t34, _r22_t35, _r22_t36, _r22_t37, _r22_t38, _r22_t39, _r22_t40, _r22_t41, _r22_t42, _r22_t43, _r22_t44, _r22_t45, _r22_t46, _r22_t47, _r22_t48, _r22_t49, _r22_t50, _r22_t51, _r22_t52, _r22_t53, _r22_t54, _r22_t55, _r22_t56, _r22_t57, _r22_t58, _r22_t59;
        _r22_t2 = this;
        if (_r22_t2['points'][0]['d1'] >= 0)
            _r22_t4 = _r22_t2['points'][0]['d1'];
        else
            _r22_t4 = r22_d1;
        _r22_t5 = r22_d1 = _r22_t4;
        r22_d1s = [_r22_t5];
        if (_r22_t2['points'][0]['d2'] >= 0)
            _r22_t6 = _r22_t2['points'][0]['d2'];
        else
            _r22_t6 = r22_d2;
        _r22_t7 = r22_d2 = _r22_t6;
        r22_d2s = [_r22_t7];
        r22_pdxs = [0];
        r22_pdys = [0];
        r22_samples = r0_fallback(r22__samples, _r22_t2['samples'], r0_SAMPLES);
        r22_shapes = [];
        r22_subSegments = [];
        r22_p0 = _r22_t2['points'][0];
        r22_j = 1;
        for (; r22_j < this['points']['length']; r22_j = r22_j + 1) {
            r22_p1 = _r22_t2['points'][r22_j];
            if (r22_p1['onCurve']) {
                r22_subSegments['push'](r22_seg = new r0_Bezier(r22_p0['x'], r22_p0['y'], (r22_p0['x'] + r22_p1['x']) / 2, (r22_p0['y'] + r22_p1['y']) / 2, r22_p1['x'], r22_p1['y']));
                _r22_t8 = r22_d1s;
                _r22_t9 = _r22_t8['push'];
                if (r22_p1['d1'] >= 0)
                    _r22_t10 = r22_p1['d1'];
                else
                    _r22_t10 = r22_d1;
                _r22_t11 = r22_d1 = _r22_t10;
                _r22_t9['call'](_r22_t8, _r22_t11);
                _r22_t13 = r22_d2s;
                _r22_t14 = _r22_t13['push'];
                if (r22_p1['d2'] >= 0)
                    _r22_t15 = r22_p1['d2'];
                else
                    _r22_t15 = r22_d2;
                _r22_t16 = r22_d2 = _r22_t15;
                _r22_t14['call'](_r22_t13, _r22_t16);
                r22_normalpt = r22_seg['normal'](1);
                _r22_t30 = r22_pdxs;
                _r22_t31 = _r22_t30['push'];
                if (r22_p1['pdx'] !== void 0)
                    _r22_t32 = r22_p1['pdx'] - r22_normalpt['x'];
                else
                    _r22_t32 = 0;
                _r22_t31['call'](_r22_t30, _r22_t32);
                _r22_t38 = r22_pdys;
                _r22_t39 = _r22_t38['push'];
                if (r22_p1['pdy'] !== void 0)
                    _r22_t40 = r22_p1['pdy'] - r22_normalpt['y'];
                else
                    _r22_t40 = 0;
                _r22_t39['call'](_r22_t38, _r22_t40);
                r22_p0 = r22_p1;
            } else if (r22_p1['cubic']) {
                r22_p2 = _r22_t2['points'][r22_j + 1];
                r22_p3 = _r22_t2['points'][r22_j + 2];
                r22_subSegments['push'](r22_seg = new r0_Bezier(r22_p0['x'], r22_p0['y'], r22_p1['x'], r22_p1['y'], r22_p2['x'], r22_p2['y'], r22_p3['x'], r22_p3['y']));
                _r22_t22 = r22_d1s;
                _r22_t23 = _r22_t22['push'];
                if (r22_p3['d1'] >= 0)
                    _r22_t24 = r22_p3['d1'];
                else
                    _r22_t24 = r22_d1;
                _r22_t25 = r22_d1 = _r22_t24;
                _r22_t23['call'](_r22_t22, _r22_t25);
                _r22_t33 = r22_d2s;
                _r22_t34 = _r22_t33['push'];
                if (r22_p3['d2'] >= 0)
                    _r22_t35 = r22_p3['d2'];
                else
                    _r22_t35 = r22_d2;
                _r22_t36 = r22_d2 = _r22_t35;
                _r22_t34['call'](_r22_t33, _r22_t36);
                r22_normalpt = r22_seg['normal'](1);
                _r22_t44 = r22_pdxs;
                _r22_t45 = _r22_t44['push'];
                if (r22_p3['pdx'] !== void 0)
                    _r22_t46 = r22_p3['pdx'] - r22_normalpt['x'];
                else
                    _r22_t46 = 0;
                _r22_t45['call'](_r22_t44, _r22_t46);
                _r22_t50 = r22_pdys;
                _r22_t51 = _r22_t50['push'];
                if (r22_p3['pdy'] !== void 0)
                    _r22_t52 = r22_p3['pdy'] - r22_normalpt['y'];
                else
                    _r22_t52 = 0;
                _r22_t51['call'](_r22_t50, _r22_t52);
                r22_p0 = r22_p3;
                r22_j = r22_j + 2;
            } else if (true) {
                r22_p2 = _r22_t2['points'][r22_j + 1];
                r22_subSegments['push'](r22_seg = new r0_Bezier(r22_p0['x'], r22_p0['y'], r22_p1['x'], r22_p1['y'], r22_p2['x'], r22_p2['y']));
                _r22_t17 = r22_d1s;
                _r22_t18 = _r22_t17['push'];
                if (r22_p2['d1'] >= 0)
                    _r22_t19 = r22_p2['d1'];
                else
                    _r22_t19 = r22_d1;
                _r22_t20 = r22_d1 = _r22_t19;
                _r22_t18['call'](_r22_t17, _r22_t20);
                _r22_t26 = r22_d2s;
                _r22_t27 = _r22_t26['push'];
                if (r22_p2['d2'] >= 0)
                    _r22_t28 = r22_p2['d2'];
                else
                    _r22_t28 = r22_d2;
                _r22_t29 = r22_d2 = _r22_t28;
                _r22_t27['call'](_r22_t26, _r22_t29);
                r22_normalpt = r22_seg['normal'](1);
                _r22_t41 = r22_pdxs;
                _r22_t42 = _r22_t41['push'];
                if (r22_p2['pdx'] !== void 0)
                    _r22_t43 = r22_p2['pdx'] - r22_normalpt['x'];
                else
                    _r22_t43 = 0;
                _r22_t42['call'](_r22_t41, _r22_t43);
                _r22_t47 = r22_pdys;
                _r22_t48 = _r22_t47['push'];
                if (r22_p2['pdy'] !== void 0)
                    _r22_t49 = r22_p2['pdy'] - r22_normalpt['y'];
                else
                    _r22_t49 = 0;
                _r22_t48['call'](_r22_t47, _r22_t49);
                r22_p0 = r22_p2;
                r22_j = r22_j + 1;
            } else
                void 0;
        }
        if (_r22_t2['points'][0]['pdx'] !== void 0)
            _r22_t12 = r22_pdxs[0] = _r22_t2['points'][0]['pdx'] - r22_subSegments[0]['normal'](0)['x'];
        else
            _r22_t12 = void 0;
        if (_r22_t2['points'][0]['pdy'] !== void 0)
            _r22_t21 = r22_pdys[0] = _r22_t2['points'][0]['pdy'] - r22_subSegments[0]['normal'](0)['y'];
        else
            _r22_t21 = void 0;
        r22_f1 = r0_smooth(r0_xn$xsarray$3cah(0, r22_d1s['length']), r0_xn$ysarray$3cah(r22_d1s));
        r22_f2 = r0_smooth(r0_xn$xsarray$3cah(0, r22_d2s['length']), r0_xn$ysarray$3cah(r22_d2s['map'](function _r22_t37(r23_x) {
            var r23_x, _r23_t0, _r23_t1;
            return -r23_x;
        })));
        r22_fpdx = r0_smooth(r0_xn$xsarray$3cah(0, r22_d1s['length']), r0_xn$ysarray$3cah(r22_pdxs));
        r22_fpdy = r0_smooth(r0_xn$xsarray$3cah(0, r22_d2s['length']), r0_xn$ysarray$3cah(r22_pdys));
        r22_left = [];
        r22_right = [];
        r22_j = 0;
        for (; r22_j < r22_subSegments['length']; r22_j = r22_j + 1) {
            r22_curve = r22_subSegments[r22_j];
            _r22_t0 = 0;
            _r22_t1 = r22_samples;
            r22_sample = _r22_t0;
            for (; r22_sample < _r22_t1; r22_sample = r22_sample + 1) {
                r22_t = r22_j + r22_sample / r22_samples;
                r22_tn = r22_j + (r22_sample + 1) / r22_samples;
                r22_lthis = r0_computeOffsetPoint(r22_curve, r22_t, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rthis = r0_computeOffsetPoint(r22_curve, r22_t, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnext = r0_computeOffsetPoint(r22_curve, r22_tn, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnext = r0_computeOffsetPoint(r22_curve, r22_tn, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnthis1 = r0_computeOffsetPoint(r22_curve, r22_t + r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnthis1 = r0_computeOffsetPoint(r22_curve, r22_t + r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnnext1 = r0_computeOffsetPoint(r22_curve, r22_tn - r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnnext1 = r0_computeOffsetPoint(r22_curve, r22_tn - r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnthis2 = r0_computeOffsetPoint(r22_curve, r22_t + 2 * r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnthis2 = r0_computeOffsetPoint(r22_curve, r22_t + 2 * r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnnext2 = r0_computeOffsetPoint(r22_curve, r22_tn - 2 * r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnnext2 = r0_computeOffsetPoint(r22_curve, r22_tn - 2 * r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnthis3 = r0_computeOffsetPoint(r22_curve, r22_t + 3 * r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnthis3 = r0_computeOffsetPoint(r22_curve, r22_t + 3 * r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_lnnext3 = r0_computeOffsetPoint(r22_curve, r22_tn - 3 * r0_TINY, r22_j, r22_f1, r22_fpdx, r22_fpdy);
                r22_rnnext3 = r0_computeOffsetPoint(r22_curve, r22_tn - 3 * r0_TINY, r22_j, r22_f2, r22_fpdx, r22_fpdy);
                r22_dlthis = r0_dforward(r22_lthis, r22_lnthis1, r22_lnthis2, r22_lnthis3);
                r22_drthis = r0_dforward(r22_rthis, r22_rnthis1, r22_rnthis2, r22_rnthis3);
                r22_dlnext = r0_dbackward(r22_lnext, r22_lnnext1, r22_lnnext2, r22_lnnext3);
                r22_drnext = r0_dbackward(r22_rnext, r22_rnnext2, r22_rnnext2, r22_rnnext3);
                r22_il = r0_intersection(r22_lthis['x'], r22_lthis['y'], r22_dlthis['x'], r22_dlthis['y'], r22_lnext['x'], r22_lnext['y'], r22_dlnext['x'], r22_dlnext['y']);
                if (!r22_straight && r0_nonlinear(r22_lthis, r22_lnext, r22_dlthis) && r0_nonlinear(r22_lthis, r22_lnext, r22_dlnext) && r22_il['x'] !== null && r22_il['y'] !== null && Math['abs'](r22_il['x']) <= r0_CUTOFF && Math['abs'](r22_il['y']) <= r0_CUTOFF && r0_nonlinear(r22_lthis, r22_il, r22_lnext)) {
                    r22_left['push']({
                        'x': r22_lthis['x'],
                        'y': r22_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r22_il['x'],
                        'y': r22_il['y'],
                        'onCurve': false
                    });
                } else {
                    r22_left['push']({
                        'x': r22_lthis['x'],
                        'y': r22_lthis['y'],
                        'onCurve': true
                    });
                }
                r22_ir = r0_intersection(r22_rthis['x'], r22_rthis['y'], r22_drthis['x'], r22_drthis['y'], r22_rnext['x'], r22_rnext['y'], r22_drnext['x'], r22_drnext['y']);
                if (!r22_straight && r0_nonlinear(r22_rthis, r22_rnext, r22_drthis) && r0_nonlinear(r22_rthis, r22_rnext, r22_drnext) && r22_ir['x'] !== null && r22_ir['y'] !== null && Math['abs'](r22_ir['x']) <= r0_CUTOFF && Math['abs'](r22_ir['y']) <= r0_CUTOFF && r0_nonlinear(r22_rthis, r22_ir, r22_rnext)) {
                    r22_right['push']({
                        'x': r22_rthis['x'],
                        'y': r22_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r22_ir['x'],
                        'y': r22_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r22_right['push']({
                        'x': r22_rthis['x'],
                        'y': r22_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r22_t54 = r22_left;
            _r22_t55 = _r22_t54['push'];
            r22_last = r0_computeOffsetPoint(r22_curve, r22_j + 1, r22_j, r22_f1, r22_fpdx, r22_fpdy);
            _r22_t56 = {
                'x': r22_last['x'],
                'y': r22_last['y'],
                'onCurve': true
            };
            _r22_t55['call'](_r22_t54, _r22_t56);
            _r22_t57 = r22_right;
            _r22_t58 = _r22_t57['push'];
            r22_last = r0_computeOffsetPoint(r22_curve, r22_j + 1, r22_j, r22_f2, r22_fpdx, r22_fpdy);
            _r22_t59 = {
                'x': r22_last['x'],
                'y': r22_last['y'],
                'onCurve': true
            };
            _r22_t58['call'](_r22_t57, _r22_t59);
        }
        r22_shapes['push'](r22_left['concat'](r22_right['reverse']()));
        return r22_shapes['map'](function _r22_t53(r25_shape) {
            var r25_shape, r25_p0, r25_p1, r25_j, r25_still, r25_k, r25_p2, _r25_t0, _r25_t1, _r25_t2, _r25_t3, _r25_t4, _r25_t5, _r25_t6;
            for (; r25_j < r25_shape['length'] - 1; r25_j = r25_j + 1) {
                r25_p0 = r25_shape[r25_j];
                r25_p1 = r25_shape[r25_j + 1];
                if (r25_p0['onCurve'] && r25_p1['onCurve'] && r25_p0['x'] === r25_p1['x'] && r25_p0['y'] === r25_p1['y'])
                    _r25_t2 = r25_p1['removable'] = true;
                else
                    _r25_t2 = void 0;
            }
            r25_shape = r25_shape['filter'](function _r25_t3(r26_point) {
                var r26_point, _r26_t0, _r26_t1;
                return r26_point && !r26_point['removable'];
            });
            r25_j = 0;
            for (; r25_j < r25_shape['length'] - 1; r25_j = r25_j + 1) {
                r25_p0 = r25_shape[r25_j];
                r25_still = true;
                r25_k = r25_j + 1;
                for (; r25_still && r25_k < r25_shape['length'] - 1; r25_k = r25_k + 1) {
                    r25_p1 = r25_shape[r25_k];
                    r25_p2 = r25_shape[r25_k + 1];
                    if (r25_p0['onCurve'] && r25_p1['onCurve'] && r25_p2['onCurve'] && !r0_nonlinear(r25_p0, r25_p1, r25_p2)) {
                        r25_p1['removable'] = true;
                    } else {
                        r25_still = false;
                    }
                }
                r25_j = r25_k - 1;
            }
            r25_shape = r25_shape['filter'](function _r25_t4(r27_point) {
                var r27_point, _r27_t0, _r27_t1;
                return r27_point && !r27_point['removable'];
            });
            r25_j = 1;
            for (; r25_j < r25_shape['length'] - 2; r25_j = r25_j + 1) {
                r25_p0 = r25_shape[r25_j];
                r25_p1 = r25_shape[r25_j + 1];
                r25_p2 = r25_shape[r25_j + 2];
                if (!r25_p0['onCurve'] && r25_p1['onCurve'] && !r25_p2['onCurve'] && r0_midclose(r25_p0, r25_p1, r25_p2)) {
                    r25_p1['removable'] = true;
                    _r25_t6 = r25_j = r25_j + 1;
                } else
                    _r25_t6 = void 0;
            }
            r25_shape = r25_shape['filter'](function _r25_t5(r28_point) {
                var r28_point, _r28_t0, _r28_t1;
                return r28_point && !r28_point['removable'];
            });
            return r25_shape;
        });
    };
    exports['Stroke'] = r0_Stroke;
}
