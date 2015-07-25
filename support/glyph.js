{
    var r0_bezierCubic2Q2, r0_tp, r0_Stroke, r0_id, r0_fallback, r0_Glyph, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13;
    r0_bezierCubic2Q2 = require('node-sfnt/lib/math/bezierCubic2Q2');
    r0_tp = require('./transform')['transformPoint'];
    r0_Stroke = require('./stroke')['Stroke'];
    r0_id = {
        'xx': 1,
        'yx': 0,
        'xy': 0,
        'yy': 1,
        'x': 0,
        'y': 0
    };
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
    r0_Glyph = function _r0_t1(r2_name) {
        var r2_name, _r2_t0, _r2_t1;
        _r2_t0 = this;
        _r2_t0['name'] = r2_name;
        _r2_t0['unicode'] = [];
        _r2_t0['contours'] = [];
        _r2_t0['advanceWidth'] = 500;
        _r2_t0['anchors'] = {};
        _r2_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        return void 0;
    };
    r0_Glyph['prototype']['set-width'] = function _r0_t2(r3_w) {
        var r3_w, _r3_t0, _r3_t1;
        _r3_t0 = this;
        _r3_t0['advanceWidth'] = r3_w;
        return _r3_t0;
    };
    r0_Glyph['prototype']['assign-unicode'] = function _r0_t3(r4_u) {
        var r4_u, _r4_t0, _r4_t1, _r4_t2, _r4_t3, _r4_t4, _r4_t5;
        _r4_t0 = this;
        _r4_t2 = _r4_t0['unicode'];
        _r4_t3 = _r4_t2['push'];
        if (typeof r4_u === 'string')
            _r4_t4 = r4_u['charCodeAt'](0);
        else {
            if (true)
                _r4_t5 = r4_u;
            else
                _r4_t5 = void 0;
            _r4_t4 = _r4_t5;
        }
        _r4_t3['call'](_r4_t2, _r4_t4);
        return _r4_t0;
    };
    r0_Glyph['prototype']['start-from'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0, _r5_t1;
        _r5_t0 = this;
        _r5_t0['contours']['push']([r0_tp(_r5_t0['gizmo'], {
                'x': r5_x,
                'y': r5_y,
                'onCurve': true
            })]);
        return _r5_t0;
    };
    r0_Glyph['prototype']['line-to'] = function _r0_t5(r6_x, r6_y) {
        var r6_x, r6_y, _r6_t0, _r6_t1;
        _r6_t0 = this;
        _r6_t0['contours'][_r6_t0['contours']['length'] - 1]['push'](r0_tp(_r6_t0['gizmo'], {
            'x': r6_x,
            'y': r6_y,
            'onCurve': true
        }));
        return _r6_t0;
    };
    r0_Glyph['prototype']['curve-control'] = function _r0_t6(r7_x, r7_y) {
        var r7_x, r7_y, _r7_t0, _r7_t1;
        _r7_t0 = this;
        _r7_t0['contours'][_r7_t0['contours']['length'] - 1]['push'](r0_tp(_r7_t0['gizmo'], {
            'x': r7_x,
            'y': r7_y,
            'onCurve': false
        }));
        return _r7_t0;
    };
    r0_Glyph['prototype']['curve-to'] = function _r0_t7(r8_xc, r8_yc, r8_x, r8_y) {
        var r8_xc, r8_yc, r8_x, r8_y, _r8_t0, _r8_t1;
        _r8_t0 = this;
        _r8_t0['contours'][_r8_t0['contours']['length'] - 1]['push'](r0_tp(_r8_t0['gizmo'], {
            'x': r8_xc,
            'y': r8_yc,
            'onCurve': false
        }), r0_tp(_r8_t0['gizmo'], {
            'x': r8_x,
            'y': r8_y,
            'onCurve': true
        }));
        return _r8_t0;
    };
    r0_Glyph['prototype']['cubic-to'] = function _r0_t8(r9_x1, r9_y1, r9_x2, r9_y2, r9_x, r9_y) {
        var r9_x1, r9_y1, r9_x2, r9_y2, r9_x, r9_y, r9_lastContour, r9_lastPoint, r9_segments, r9_p0, r9_xc, r9_yc, r9_xf, r9_yf, _r9_t0, _r9_t1, _r9_t2, _r9_t3, _r9_t4, _r9_t5, _r9_t6, _r9_t7;
        _r9_t6 = this;
        r9_lastContour = _r9_t6['contours'][_r9_t6['contours']['length'] - 1];
        r9_lastPoint = r9_lastContour[r9_lastContour['length'] - 1];
        r9_segments = r0_bezierCubic2Q2(r9_lastPoint, {
            'x': r9_x1,
            'y': r9_y1
        }, {
            'x': r9_x2,
            'y': r9_y2
        }, {
            'x': r9_x,
            'y': r9_y
        });
        _r9_t0 = r9_segments;
        _r9_t1 = _r9_t0['length'];
        _r9_t2 = 0;
        for (; _r9_t2 < _r9_t1; _r9_t2 = _r9_t2 + 1) {
            _r9_t3 = _r9_t0[_r9_t2];
            r9_p0 = _r9_t3[0];
            _r9_t4 = _r9_t3[1];
            r9_xc = _r9_t4['x'];
            r9_yc = _r9_t4['y'];
            _r9_t5 = _r9_t3[2];
            r9_xf = _r9_t5['x'];
            r9_yf = _r9_t5['y'];
            _r9_t6['curve-to'](r9_xc, r9_yc, r9_xf, r9_yf);
        }
        return _r9_t6;
    };
    r0_Glyph['prototype']['reverse-last'] = function _r0_t9() {
        var _r11_t0, _r11_t1;
        _r11_t0 = this;
        return _r11_t0['contours'][_r11_t0['contours']['length'] - 1] = _r11_t0['contours'][_r11_t0['contours']['length'] - 1]['reverse']();
    };
    r0_Glyph['prototype']['put-shapes'] = function _r0_t10(r12_contours) {
        var r12_contours, r12_t, r12_contour, r12_j, r12_point, r12_p2, r12_p3, _r12_t0, _r12_t1, _r12_t2, _r12_t3, _r12_t4;
        _r12_t3 = this;
        r12_t = _r12_t3['gizmo'];
        _r12_t3['gizmo'] = r0_id;
        _r12_t0 = r12_contours;
        _r12_t1 = _r12_t0['length'];
        _r12_t2 = 0;
        for (; _r12_t2 < _r12_t1; _r12_t2 = _r12_t2 + 1) {
            r12_contour = _r12_t0[_r12_t2];
            _r12_t3['start-from'](r12_contour[0]['x'], r12_contour[0]['y']);
            r12_j = 1;
            for (; r12_j < r12_contour['length']; r12_j = r12_j + 1) {
                r12_point = r12_contour[r12_j];
                if (r12_point['cubic']) {
                    r12_p2 = r12_contour[r12_j + 1];
                    r12_p3 = r12_contour[r12_j + 2];
                    _r12_t3['cubic-to'](r12_point['x'], r12_point['y'], r12_p2['x'], r12_p2['y'], r12_p3['x'], r12_p3['y']);
                    r12_j = r12_j + 2;
                } else if (r12_point['onCurve'])
                    _r12_t3['line-to'](r12_point['x'], r12_point['y']);
                else
                    _r12_t3['curve-control'](r12_point['x'], r12_point['y']);
            }
        }
        _r12_t3['gizmo'] = r12_t;
        return _r12_t3;
    };
    r0_Glyph['prototype']['include'] = function _r0_t11(r14_glyph, r14_tfm) {
        var r14_glyph, r14_tfm, r14_contours, r14_otherwise, r14_it, r14_transform, r14_shiftx, r14_shifty, r14_markid, r14_anchorThis, r14_anchorThat, _r14_t0, _r14_t1, _r14_t2, _r14_t3, _r14_t4, _r14_t5, _r14_t6, _r14_t7, _r14_t8, _r14_t9, _r14_t10, _r14_t11, _r14_t12, _r14_t13, _r14_t14, _r14_t15, _r14_t16, _r14_t17, _r14_t18, _r14_t19, _r14_t20, _r14_t21, _r14_tag22, _r14_t23, _r14_t24;
        _r14_t6 = this;
        _r14_t0 = r14_glyph;
        if (_r14_t0 instanceof Array && _r14_t0['length'] >= 0) {
            r14_contours = _r14_t0['slice'](0);
            _r14_t8 = r14_contours;
        } else {
            if (_r14_t1 = r0_Stroke['is']['unapply'](_r14_t0, 1)) {
                r14_it = _r14_t1[0];
                _r14_t9 = r14_glyph['to-outline'](0, 0);
            } else {
                r14_otherwise = _r14_t0;
                _r14_t9 = r14_glyph['contours'];
            }
            _r14_t8 = _r14_t9;
        }
        r14_contours = _r14_t8;
        if (r14_tfm && typeof r14_tfm === 'object')
            _r14_t10 = {
                'x': r14_tfm['x'],
                'y': r14_tfm['y'],
                'xx': r14_tfm['xx'],
                'yy': r14_tfm['yy'],
                'xy': r14_tfm['xy'],
                'yx': r14_tfm['yx'],
                'copyAnchors': r14_tfm['copyAnchors']
            };
        else
            _r14_t10 = {
                'x': 0,
                'y': 0,
                'xx': 1,
                'yy': 1,
                'xy': 0,
                'yx': 0
            };
        r14_transform = _r14_t10;
        r14_shiftx = 0;
        r14_shifty = 0;
        if (_r14_t6['anchors'] && r14_glyph['anchors']) {
            _r14_t2 = Object['keys'](_r14_t6['anchors']);
            _r14_t3 = _r14_t2['length'];
            _r14_t4 = 0;
            _r14_t12 = _r14_t4 < _r14_t3;
            for (; _r14_t12; _r14_t12 = _r14_t4 < _r14_t3) {
                r14_markid = _r14_t2[_r14_t4];
                r14_anchorThis = _r14_t6['anchors'][r14_markid];
                r14_anchorThat = r14_glyph['anchors'][r14_markid];
                if (r14_anchorThis && (r14_anchorThis['type'] === 'base' || r14_anchorThis['mbx'] !== void 0 && r14_anchorThis['mby'] !== void 0) && r14_anchorThat && r14_anchorThat['type'] === 'mark') {
                    _r14_t5 = [
                        r0_fallback(r14_anchorThis['mbx'], r14_anchorThis['x']) - r14_anchorThat['x'],
                        r0_fallback(r14_anchorThis['mby'], r14_anchorThis['y']) - r14_anchorThat['y']
                    ];
                    r14_shiftx = _r14_t5[0];
                    r14_shifty = _r14_t5[1];
                    if (r14_anchorThat['mbx'] !== void 0 && r14_anchorThat['mby'] !== void 0)
                        _r14_t24 = _r14_t6['anchors'][r14_markid] = {
                            'x': r14_anchorThis['x'] + r14_anchorThat['mbx'] - r14_anchorThat['x'],
                            'y': r14_anchorThis['y'] + r14_anchorThat['mby'] - r14_anchorThat['y'],
                            'type': r14_anchorThis['type'],
                            'mbx': r14_anchorThis['mbx'],
                            'mby': r14_anchorThis['mby']
                        };
                    _r14_t23 = _r14_t24;
                } else
                    _r14_t23 = void 0;
                _r14_t13 = _r14_t4 = _r14_t4 + 1;
            }
            _r14_t11 = _r14_t13;
        } else
            _r14_t11 = void 0;
        r14_transform['x'] = r14_transform['x'] + r14_shiftx;
        r14_transform['y'] = r14_transform['y'] + r14_shifty;
        if (r14_contours)
            _r14_t14 = _r14_t6['put-shapes'](r14_contours['map'](function _r14_t15(r16_contour) {
                var r16_contour, _r16_t0, _r16_t1, _r16_t2;
                return r16_contour['map'](function _r16_t2(r17_point) {
                    var r17_point, _r17_t0, _r17_t1;
                    return r0_tp(r14_transform, r17_point);
                });
            }));
        else
            _r14_t14 = void 0;
        if ((!r14_contours || r14_transform['copyAnchors']) && r14_glyph['anchors']) {
            _r14_t17 = 'anchors';
            _r14_t18 = {};
            _r14_t19 = r14_glyph['anchors'];
            _r14_t20 = Object['keys'](r14_glyph['anchors']);
            return _r14_t6[_r14_t17] = function (r18_a, r18_anchors, r18_keys) {
                var r18_a, r18_anchors, r18_keys, r18_k, _r18_t0, _r18_t1, _r18_t2;
                _r18_t0 = r18_keys;
                _r18_t1 = _r18_t0['length'];
                _r18_t2 = 0;
                for (; _r18_t2 < _r18_t1; _r18_t2 = _r18_t2 + 1) {
                    r18_k = _r18_t0[_r18_t2];
                    r18_a[r18_k] = r18_anchors[r18_k];
                }
                return _r14_t21 = r18_a;
            }(_r14_t18, _r14_t19, _r14_t20);
        } else
            return void 0;
    };
    r0_Glyph['prototype']['create-stroke'] = function _r0_t12() {
        var r20_s, _r20_t0, _r20_t1;
        _r20_t0 = this;
        r20_s = new r0_Stroke();
        r20_s['gizmo'] = Object['create'](_r20_t0['gizmo']);
        return r20_s;
    };
    r0_Glyph['prototype']['set-anchor'] = function _r0_t13(r21_id, r21_type, r21_x, r21_y, r21_mbx, r21_mby) {
        var r21_id, r21_type, r21_x, r21_y, r21_mbx, r21_mby, r21_anchorpoint, r21_markbasepoint, _r21_t0, _r21_t1, _r21_t2;
        _r21_t0 = this;
        r21_anchorpoint = r0_tp(_r21_t0['gizmo'], {
            'x': r21_x,
            'y': r21_y
        });
        if (r21_mbx !== void 0 && r21_mby !== void 0)
            _r21_t2 = r0_tp(_r21_t0['gizmo'], {
                'x': r21_mbx,
                'y': r21_mby
            });
        else
            _r21_t2 = {
                'x': void 0,
                'y': void 0
            };
        r21_markbasepoint = _r21_t2;
        return _r21_t0['anchors'][r21_id] = {
            'x': r21_anchorpoint['x'],
            'y': r21_anchorpoint['y'],
            'type': r21_type,
            'mbx': r21_markbasepoint['x'],
            'mby': r21_markbasepoint['y']
        };
    };
    exports['Glyph'] = r0_Glyph;
}
