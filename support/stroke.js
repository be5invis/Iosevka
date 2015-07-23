{
    var r0_smooth, r0_intersection, r0_Bezier, r0_tp, r0_utp, r0_fallback, r0_xn$xsarray$3cah, r0_xn$ysarray$3cah, r0_SAMPLES, r0_TINY, r0_LITTLE, r0_CUTOFF, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_Stroke, r0_dforward, r0_dbackward, r0_nonlinear, r0_computeOffsetPoint, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20;
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
    r0_SAMPLES = 6;
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
    r0_computeOffsetPoint = function _r0_t19(r20_curve, r20_t, r20_j, r20_foffset, r20_fpdx, r20_fpdy) {
        var r20_curve, r20_t, r20_j, r20_foffset, r20_fpdx, r20_fpdy, r20_onpoint, r20_normal, _r20_t0, _r20_t1;
        r20_onpoint = r20_curve['compute'](r20_t - r20_j);
        r20_normal = r20_curve['normal'](r20_t - r20_j);
        return {
            'x': r20_onpoint['x'] + r20_foffset(r20_t) * (r20_normal['x'] + r20_fpdx(r20_t)),
            'y': r20_onpoint['y'] + r20_foffset(r20_t) * (r20_normal['y'] + r20_fpdy(r20_t))
        };
    };
    r0_Stroke['prototype']['to-outline'] = function _r0_t20(r21_d1, r21_d2, r21__samples, r21_straight) {
        var r21_d1, r21_d2, r21__samples, r21_straight, r21_d1s, r21_d2s, r21_pdxs, r21_pdys, r21_samples, r21_shapes, r21_subSegments, r21_p0, r21_j, r21_p1, r21_p2, r21_seg, r21_normalpt, r21_p3, r21_f1, r21_f2, r21_fpdx, r21_fpdy, r21_left, r21_right, r21_curve, r21_sample, r21_t, r21_tn, r21_lthis, r21_rthis, r21_lnext, r21_rnext, r21_lnthis1, r21_rnthis1, r21_lnnext1, r21_rnnext1, r21_lnthis2, r21_rnthis2, r21_lnnext2, r21_rnnext2, r21_lnthis3, r21_rnthis3, r21_lnnext3, r21_rnnext3, r21_dlthis, r21_drthis, r21_dlnext, r21_drnext, r21_il, r21_ir, r21_last, r21_shape, r21_still, r21_k, _r21_t0, _r21_t1, _r21_t2, _r21_t3, _r21_t4, _r21_t5, _r21_t6, _r21_t7, _r21_t8, _r21_t9, _r21_t10, _r21_t11, _r21_t12, _r21_t13, _r21_t14, _r21_t15, _r21_t16, _r21_t17, _r21_t18, _r21_t19, _r21_t20, _r21_t21, _r21_t22, _r21_t23, _r21_t24, _r21_t25, _r21_t26, _r21_t27, _r21_t28, _r21_t29, _r21_t30, _r21_t31, _r21_t32, _r21_t33, _r21_t34, _r21_t35, _r21_t36, _r21_t37, _r21_t38, _r21_t39, _r21_t40, _r21_t41, _r21_t42, _r21_t43, _r21_t44, _r21_t45, _r21_t46, _r21_t47, _r21_t48, _r21_t49, _r21_t50, _r21_t51, _r21_t52, _r21_t53, _r21_t54, _r21_t55, _r21_t56, _r21_t57, _r21_t58, _r21_t59, _r21_t60, _r21_t61, _r21_t62;
        _r21_t5 = this;
        if (_r21_t5['points'][0]['d1'] >= 0)
            _r21_t7 = _r21_t5['points'][0]['d1'];
        else
            _r21_t7 = r21_d1;
        _r21_t8 = r21_d1 = _r21_t7;
        r21_d1s = [_r21_t8];
        if (_r21_t5['points'][0]['d2'] >= 0)
            _r21_t9 = _r21_t5['points'][0]['d2'];
        else
            _r21_t9 = r21_d2;
        _r21_t10 = r21_d2 = _r21_t9;
        r21_d2s = [_r21_t10];
        r21_pdxs = [0];
        r21_pdys = [0];
        r21_samples = r0_fallback(r21__samples, _r21_t5['samples'], r0_SAMPLES);
        r21_shapes = [];
        r21_subSegments = [];
        r21_p0 = _r21_t5['points'][0];
        r21_j = 1;
        for (; r21_j < this['points']['length']; r21_j = r21_j + 1) {
            r21_p1 = _r21_t5['points'][r21_j];
            if (r21_p1['onCurve']) {
                r21_subSegments['push'](r21_seg = new r0_Bezier(r21_p0['x'], r21_p0['y'], (r21_p0['x'] + r21_p1['x']) / 2, (r21_p0['y'] + r21_p1['y']) / 2, r21_p1['x'], r21_p1['y']));
                _r21_t11 = r21_d1s;
                _r21_t12 = _r21_t11['push'];
                if (r21_p1['d1'] >= 0)
                    _r21_t13 = r21_p1['d1'];
                else
                    _r21_t13 = r21_d1;
                _r21_t14 = r21_d1 = _r21_t13;
                _r21_t12['call'](_r21_t11, _r21_t14);
                _r21_t16 = r21_d2s;
                _r21_t17 = _r21_t16['push'];
                if (r21_p1['d2'] >= 0)
                    _r21_t18 = r21_p1['d2'];
                else
                    _r21_t18 = r21_d2;
                _r21_t19 = r21_d2 = _r21_t18;
                _r21_t17['call'](_r21_t16, _r21_t19);
                r21_normalpt = r21_seg['normal'](1);
                _r21_t33 = r21_pdxs;
                _r21_t34 = _r21_t33['push'];
                if (r21_p1['pdx'] !== void 0)
                    _r21_t35 = r21_p1['pdx'] - r21_normalpt['x'];
                else
                    _r21_t35 = 0;
                _r21_t34['call'](_r21_t33, _r21_t35);
                _r21_t41 = r21_pdys;
                _r21_t42 = _r21_t41['push'];
                if (r21_p1['pdy'] !== void 0)
                    _r21_t43 = r21_p1['pdy'] - r21_normalpt['y'];
                else
                    _r21_t43 = 0;
                _r21_t42['call'](_r21_t41, _r21_t43);
                r21_p0 = r21_p1;
            } else if (r21_p1['cubic']) {
                r21_p2 = _r21_t5['points'][r21_j + 1];
                r21_p3 = _r21_t5['points'][r21_j + 2];
                r21_subSegments['push'](r21_seg = new r0_Bezier(r21_p0['x'], r21_p0['y'], r21_p1['x'], r21_p1['y'], r21_p2['x'], r21_p2['y'], r21_p3['x'], r21_p3['y']));
                _r21_t25 = r21_d1s;
                _r21_t26 = _r21_t25['push'];
                if (r21_p3['d1'] >= 0)
                    _r21_t27 = r21_p3['d1'];
                else
                    _r21_t27 = r21_d1;
                _r21_t28 = r21_d1 = _r21_t27;
                _r21_t26['call'](_r21_t25, _r21_t28);
                _r21_t36 = r21_d2s;
                _r21_t37 = _r21_t36['push'];
                if (r21_p3['d2'] >= 0)
                    _r21_t38 = r21_p3['d2'];
                else
                    _r21_t38 = r21_d2;
                _r21_t39 = r21_d2 = _r21_t38;
                _r21_t37['call'](_r21_t36, _r21_t39);
                r21_normalpt = r21_seg['normal'](1);
                _r21_t47 = r21_pdxs;
                _r21_t48 = _r21_t47['push'];
                if (r21_p3['pdx'] !== void 0)
                    _r21_t49 = r21_p3['pdx'] - r21_normalpt['x'];
                else
                    _r21_t49 = 0;
                _r21_t48['call'](_r21_t47, _r21_t49);
                _r21_t53 = r21_pdys;
                _r21_t54 = _r21_t53['push'];
                if (r21_p3['pdy'] !== void 0)
                    _r21_t55 = r21_p3['pdy'] - r21_normalpt['y'];
                else
                    _r21_t55 = 0;
                _r21_t54['call'](_r21_t53, _r21_t55);
                r21_p0 = r21_p3;
                r21_j = r21_j + 2;
            } else if (true) {
                r21_p2 = _r21_t5['points'][r21_j + 1];
                r21_subSegments['push'](r21_seg = new r0_Bezier(r21_p0['x'], r21_p0['y'], r21_p1['x'], r21_p1['y'], r21_p2['x'], r21_p2['y']));
                _r21_t20 = r21_d1s;
                _r21_t21 = _r21_t20['push'];
                if (r21_p2['d1'] >= 0)
                    _r21_t22 = r21_p2['d1'];
                else
                    _r21_t22 = r21_d1;
                _r21_t23 = r21_d1 = _r21_t22;
                _r21_t21['call'](_r21_t20, _r21_t23);
                _r21_t29 = r21_d2s;
                _r21_t30 = _r21_t29['push'];
                if (r21_p2['d2'] >= 0)
                    _r21_t31 = r21_p2['d2'];
                else
                    _r21_t31 = r21_d2;
                _r21_t32 = r21_d2 = _r21_t31;
                _r21_t30['call'](_r21_t29, _r21_t32);
                r21_normalpt = r21_seg['normal'](1);
                _r21_t44 = r21_pdxs;
                _r21_t45 = _r21_t44['push'];
                if (r21_p2['pdx'] !== void 0)
                    _r21_t46 = r21_p2['pdx'] - r21_normalpt['x'];
                else
                    _r21_t46 = 0;
                _r21_t45['call'](_r21_t44, _r21_t46);
                _r21_t50 = r21_pdys;
                _r21_t51 = _r21_t50['push'];
                if (r21_p2['pdy'] !== void 0)
                    _r21_t52 = r21_p2['pdy'] - r21_normalpt['y'];
                else
                    _r21_t52 = 0;
                _r21_t51['call'](_r21_t50, _r21_t52);
                r21_p0 = r21_p2;
                r21_j = r21_j + 1;
            } else
                void 0;
        }
        if (_r21_t5['points'][0]['pdx'] !== void 0)
            _r21_t15 = r21_pdxs[0] = _r21_t5['points'][0]['pdx'] - r21_subSegments[0]['normal'](0)['x'];
        else
            _r21_t15 = void 0;
        if (_r21_t5['points'][0]['pdy'] !== void 0)
            _r21_t24 = r21_pdys[0] = _r21_t5['points'][0]['pdy'] - r21_subSegments[0]['normal'](0)['y'];
        else
            _r21_t24 = void 0;
        r21_f1 = r0_smooth(r0_xn$xsarray$3cah(0, r21_d1s['length']), r0_xn$ysarray$3cah(r21_d1s));
        r21_f2 = r0_smooth(r0_xn$xsarray$3cah(0, r21_d2s['length']), r0_xn$ysarray$3cah(r21_d2s['map'](function _r21_t40(r22_x) {
            var r22_x, _r22_t0, _r22_t1;
            return -r22_x;
        })));
        r21_fpdx = r0_smooth(r0_xn$xsarray$3cah(0, r21_d1s['length']), r0_xn$ysarray$3cah(r21_pdxs));
        r21_fpdy = r0_smooth(r0_xn$xsarray$3cah(0, r21_d2s['length']), r0_xn$ysarray$3cah(r21_pdys));
        r21_left = [];
        r21_right = [];
        r21_j = 0;
        for (; r21_j < r21_subSegments['length']; r21_j = r21_j + 1) {
            r21_curve = r21_subSegments[r21_j];
            _r21_t0 = 0;
            _r21_t1 = r21_samples;
            r21_sample = _r21_t0;
            for (; r21_sample < _r21_t1; r21_sample = r21_sample + 1) {
                r21_t = r21_j + r21_sample / r21_samples;
                r21_tn = r21_j + (r21_sample + 1) / r21_samples;
                r21_lthis = r0_computeOffsetPoint(r21_curve, r21_t, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rthis = r0_computeOffsetPoint(r21_curve, r21_t, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnext = r0_computeOffsetPoint(r21_curve, r21_tn, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnext = r0_computeOffsetPoint(r21_curve, r21_tn, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnthis1 = r0_computeOffsetPoint(r21_curve, r21_t + r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnthis1 = r0_computeOffsetPoint(r21_curve, r21_t + r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnnext1 = r0_computeOffsetPoint(r21_curve, r21_tn - r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnnext1 = r0_computeOffsetPoint(r21_curve, r21_tn - r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnthis2 = r0_computeOffsetPoint(r21_curve, r21_t + 2 * r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnthis2 = r0_computeOffsetPoint(r21_curve, r21_t + 2 * r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnnext2 = r0_computeOffsetPoint(r21_curve, r21_tn - 2 * r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnnext2 = r0_computeOffsetPoint(r21_curve, r21_tn - 2 * r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnthis3 = r0_computeOffsetPoint(r21_curve, r21_t + 3 * r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnthis3 = r0_computeOffsetPoint(r21_curve, r21_t + 3 * r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_lnnext3 = r0_computeOffsetPoint(r21_curve, r21_tn - 3 * r0_TINY, r21_j, r21_f1, r21_fpdx, r21_fpdy);
                r21_rnnext3 = r0_computeOffsetPoint(r21_curve, r21_tn - 3 * r0_TINY, r21_j, r21_f2, r21_fpdx, r21_fpdy);
                r21_dlthis = r0_dforward(r21_lthis, r21_lnthis1, r21_lnthis2, r21_lnthis3);
                r21_drthis = r0_dforward(r21_rthis, r21_rnthis1, r21_rnthis2, r21_rnthis3);
                r21_dlnext = r0_dbackward(r21_lnext, r21_lnnext1, r21_lnnext2, r21_lnnext3);
                r21_drnext = r0_dbackward(r21_rnext, r21_rnnext2, r21_rnnext2, r21_rnnext3);
                r21_il = r0_intersection(r21_lthis['x'], r21_lthis['y'], r21_dlthis['x'], r21_dlthis['y'], r21_lnext['x'], r21_lnext['y'], r21_dlnext['x'], r21_dlnext['y']);
                if (!r21_straight && r0_nonlinear(r21_lthis, r21_lnext, r21_dlthis) && r0_nonlinear(r21_lthis, r21_lnext, r21_dlnext) && r21_il['x'] !== null && r21_il['y'] !== null && Math['abs'](r21_il['x']) <= r0_CUTOFF && Math['abs'](r21_il['y']) <= r0_CUTOFF && r0_nonlinear(r21_lthis, r21_il, r21_lnext)) {
                    r21_left['push']({
                        'x': r21_lthis['x'],
                        'y': r21_lthis['y'],
                        'onCurve': true
                    }, {
                        'x': r21_il['x'],
                        'y': r21_il['y'],
                        'onCurve': false
                    });
                } else {
                    r21_left['push']({
                        'x': r21_lthis['x'],
                        'y': r21_lthis['y'],
                        'onCurve': true
                    });
                }
                r21_ir = r0_intersection(r21_rthis['x'], r21_rthis['y'], r21_drthis['x'], r21_drthis['y'], r21_rnext['x'], r21_rnext['y'], r21_drnext['x'], r21_drnext['y']);
                if (!r21_straight && r0_nonlinear(r21_rthis, r21_rnext, r21_drthis) && r0_nonlinear(r21_rthis, r21_rnext, r21_drnext) && r21_ir['x'] !== null && r21_ir['y'] !== null && Math['abs'](r21_ir['x']) <= r0_CUTOFF && Math['abs'](r21_ir['y']) <= r0_CUTOFF && r0_nonlinear(r21_rthis, r21_ir, r21_rnext)) {
                    r21_right['push']({
                        'x': r21_rthis['x'],
                        'y': r21_rthis['y'],
                        'onCurve': true
                    }, {
                        'x': r21_ir['x'],
                        'y': r21_ir['y'],
                        'onCurve': false
                    });
                } else {
                    r21_right['push']({
                        'x': r21_rthis['x'],
                        'y': r21_rthis['y'],
                        'onCurve': true
                    });
                }
            }
            _r21_t56 = r21_left;
            _r21_t57 = _r21_t56['push'];
            r21_last = r0_computeOffsetPoint(r21_curve, r21_j + 1, r21_j, r21_f1, r21_fpdx, r21_fpdy);
            _r21_t58 = {
                'x': r21_last['x'],
                'y': r21_last['y'],
                'onCurve': true
            };
            _r21_t57['call'](_r21_t56, _r21_t58);
            _r21_t60 = r21_right;
            _r21_t61 = _r21_t60['push'];
            r21_last = r0_computeOffsetPoint(r21_curve, r21_j + 1, r21_j, r21_f2, r21_fpdx, r21_fpdy);
            _r21_t62 = {
                'x': r21_last['x'],
                'y': r21_last['y'],
                'onCurve': true
            };
            _r21_t61['call'](_r21_t60, _r21_t62);
        }
        r21_shapes['push'](r21_left['concat'](r21_right['reverse']()));
        _r21_t2 = r21_shapes;
        _r21_t3 = _r21_t2['length'];
        _r21_t4 = 0;
        for (; _r21_t4 < _r21_t3; _r21_t4 = _r21_t4 + 1) {
            r21_shape = _r21_t2[_r21_t4];
            r21_j = 0;
            for (; r21_j < r21_shape['length'] - 1; r21_j = r21_j + 1) {
                r21_p0 = r21_shape[r21_j];
                r21_still = true;
                r21_k = r21_j + 1;
                for (; r21_still && r21_k < r21_shape['length'] - 1; r21_k = r21_k + 1) {
                    r21_p1 = r21_shape[r21_k];
                    r21_p2 = r21_shape[r21_k + 1];
                    if (r21_p0['onCurve'] && r21_p1['onCurve'] && r21_p2['onCurve'] && !r0_nonlinear(r21_p0, r21_p1, r21_p2)) {
                        r21_p1['removable'] = true;
                    } else {
                        r21_still = false;
                    }
                }
                r21_j = r21_k - 1;
            }
        }
        return r21_shapes['map'](function _r21_t59(r25_shape) {
            var r25_shape, _r25_t0, _r25_t1, _r25_t2;
            return r25_shape['filter'](function _r25_t2(r26_x) {
                var r26_x, _r26_t0, _r26_t1;
                return r26_x && !r26_x['removable'];
            });
        });
    };
    exports['Stroke'] = r0_Stroke;
}
