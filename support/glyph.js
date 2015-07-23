{
    var r0_bezierCubic2Q2, r0_tp, r0_Stroke, r0_id, r0_fallback, r0_Glyph, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12;
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
    r0_Glyph['prototype']['curve-to'] = function _r0_t6(r7_xc, r7_yc, r7_x, r7_y) {
        var r7_xc, r7_yc, r7_x, r7_y, _r7_t0, _r7_t1;
        _r7_t0 = this;
        _r7_t0['contours'][_r7_t0['contours']['length'] - 1]['push'](r0_tp(_r7_t0['gizmo'], {
            'x': r7_xc,
            'y': r7_yc,
            'onCurve': false
        }), r0_tp(_r7_t0['gizmo'], {
            'x': r7_x,
            'y': r7_y,
            'onCurve': true
        }));
        return _r7_t0;
    };
    r0_Glyph['prototype']['cubic-to'] = function _r0_t7(r8_x1, r8_y1, r8_x2, r8_y2, r8_x, r8_y) {
        var r8_x1, r8_y1, r8_x2, r8_y2, r8_x, r8_y, r8_lastContour, r8_lastPoint, r8_segments, r8_p0, r8_xc, r8_yc, r8_xf, r8_yf, _r8_t0, _r8_t1, _r8_t2, _r8_t3, _r8_t4, _r8_t5, _r8_t6, _r8_t7;
        _r8_t6 = this;
        r8_lastContour = _r8_t6['contours'][_r8_t6['contours']['length'] - 1];
        r8_lastPoint = r8_lastContour[r8_lastContour['length'] - 1];
        r8_segments = r0_bezierCubic2Q2(r8_lastPoint, {
            'x': r8_x1,
            'y': r8_y1
        }, {
            'x': r8_x2,
            'y': r8_y2
        }, {
            'x': r8_x,
            'y': r8_y
        });
        _r8_t0 = r8_segments;
        _r8_t1 = _r8_t0['length'];
        _r8_t2 = 0;
        for (; _r8_t2 < _r8_t1; _r8_t2 = _r8_t2 + 1) {
            _r8_t3 = _r8_t0[_r8_t2];
            r8_p0 = _r8_t3[0];
            _r8_t4 = _r8_t3[1];
            r8_xc = _r8_t4['x'];
            r8_yc = _r8_t4['y'];
            _r8_t5 = _r8_t3[2];
            r8_xf = _r8_t5['x'];
            r8_yf = _r8_t5['y'];
            _r8_t6['curve-to'](r8_xc, r8_yc, r8_xf, r8_yf);
        }
        return _r8_t6;
    };
    r0_Glyph['prototype']['reverse-last'] = function _r0_t8() {
        var _r10_t0, _r10_t1;
        _r10_t0 = this;
        return _r10_t0['contours'][_r10_t0['contours']['length'] - 1] = _r10_t0['contours'][_r10_t0['contours']['length'] - 1]['reverse']();
    };
    r0_Glyph['prototype']['put-shapes'] = function _r0_t9(r11_contours) {
        var r11_contours, r11_t, r11_contour, r11_j, r11_point, r11_p2, r11_p3, _r11_t0, _r11_t1, _r11_t2, _r11_t3, _r11_t4;
        _r11_t3 = this;
        r11_t = _r11_t3['gizmo'];
        _r11_t3['gizmo'] = r0_id;
        _r11_t0 = r11_contours;
        _r11_t1 = _r11_t0['length'];
        _r11_t2 = 0;
        for (; _r11_t2 < _r11_t1; _r11_t2 = _r11_t2 + 1) {
            r11_contour = _r11_t0[_r11_t2];
            _r11_t3['start-from'](r11_contour[0]['x'], r11_contour[0]['y']);
            r11_j = 1;
            for (; r11_j < r11_contour['length']; r11_j = r11_j + 1) {
                r11_point = r11_contour[r11_j];
                if (r11_point['cubic']) {
                    r11_p2 = r11_contour[r11_j + 1];
                    r11_p3 = r11_contour[r11_j + 2];
                    _r11_t3['cubic-to'](r11_point['x'], r11_point['y'], r11_p2['x'], r11_p2['y'], r11_p3['x'], r11_p3['y']);
                    r11_j = r11_j + 2;
                } else if (r11_point['onCurve'])
                    _r11_t3['line-to'](r11_point['x'], r11_point['y']);
                else {
                    r11_p2 = r11_contour[r11_j + 1];
                    _r11_t3['curve-to'](r11_point['x'], r11_point['y'], r11_p2['x'], r11_p2['y']);
                    r11_j = r11_j + 1;
                }
            }
        }
        _r11_t3['gizmo'] = r11_t;
        return _r11_t3;
    };
    r0_Glyph['prototype']['include'] = function _r0_t10(r13_glyph, r13_copyAnchors) {
        var r13_glyph, r13_copyAnchors, r13_contours, r13_otherwise, r13_it, r13_shiftx, r13_shifty, r13_markid, r13_anchorThis, r13_anchorThat, _r13_t0, _r13_t1, _r13_t2, _r13_t3, _r13_t4, _r13_t5, _r13_t6, _r13_t7, _r13_t8, _r13_t9, _r13_t10, _r13_t11, _r13_t12, _r13_t13, _r13_t14, _r13_t15, _r13_t16, _r13_t17, _r13_t18, _r13_tag19, _r13_t20, _r13_t21, _r13_t22, _r13_t23;
        _r13_t6 = this;
        _r13_t0 = r13_glyph;
        if (_r13_t0 instanceof Array && _r13_t0['length'] >= 0) {
            r13_contours = _r13_t0['slice'](0);
            _r13_t8 = r13_contours;
        } else {
            if (_r13_t1 = r0_Stroke['is']['unapply'](_r13_t0, 1)) {
                r13_it = _r13_t1[0];
                _r13_t9 = r13_glyph['to-outline'](0, 0);
            } else {
                r13_otherwise = _r13_t0;
                _r13_t9 = r13_glyph['contours'];
            }
            _r13_t8 = _r13_t9;
        }
        r13_contours = _r13_t8;
        r13_shiftx = 0;
        r13_shifty = 0;
        if (_r13_t6['anchors'] && r13_glyph['anchors']) {
            _r13_t2 = Object['keys'](_r13_t6['anchors']);
            _r13_t3 = _r13_t2['length'];
            _r13_t4 = 0;
            _r13_t20 = _r13_t4 < _r13_t3;
            for (; _r13_t20; _r13_t20 = _r13_t4 < _r13_t3) {
                r13_markid = _r13_t2[_r13_t4];
                r13_anchorThis = _r13_t6['anchors'][r13_markid];
                r13_anchorThat = r13_glyph['anchors'][r13_markid];
                if (r13_anchorThis && (r13_anchorThis['type'] === 'base' || r13_anchorThis['mbx'] !== void 0 && r13_anchorThis['mby'] !== void 0) && r13_anchorThat && r13_anchorThat['type'] === 'mark') {
                    _r13_t5 = [
                        r0_fallback(r13_anchorThis['mbx'], r13_anchorThis['x']) - r13_anchorThat['x'],
                        r0_fallback(r13_anchorThis['mby'], r13_anchorThis['y']) - r13_anchorThat['y']
                    ];
                    r13_shiftx = _r13_t5[0];
                    r13_shifty = _r13_t5[1];
                    if (r13_anchorThat['mbx'] !== void 0 && r13_anchorThat['mby'] !== void 0)
                        _r13_t23 = _r13_t6['anchors'][r13_markid] = {
                            'x': r13_anchorThis['x'] + r13_anchorThat['mbx'] - r13_anchorThat['x'],
                            'y': r13_anchorThis['y'] + r13_anchorThat['mby'] - r13_anchorThat['y'],
                            'type': r13_anchorThis['type'],
                            'mbx': r13_anchorThis['mbx'],
                            'mby': r13_anchorThis['mby']
                        };
                    _r13_t22 = _r13_t23;
                } else
                    _r13_t22 = void 0;
                _r13_t21 = _r13_t4 = _r13_t4 + 1;
            }
            _r13_t10 = _r13_t21;
        } else
            _r13_t10 = void 0;
        if (r13_contours)
            _r13_t11 = _r13_t6['put-shapes'](r13_contours['map'](function _r13_t12(r15_contour) {
                var r15_contour, _r15_t0, _r15_t1, _r15_t2;
                return r15_contour['map'](function _r15_t2(r16_point) {
                    var r16_point, _r16_t0, _r16_t1;
                    return {
                        'x': r16_point['x'] + r13_shiftx,
                        'y': r16_point['y'] + r13_shifty,
                        'onCurve': r16_point['onCurve'],
                        'cubic': r16_point['cubic']
                    };
                });
            }));
        else
            _r13_t11 = void 0;
        if ((!r13_contours || r13_copyAnchors) && r13_glyph['anchors']) {
            _r13_t14 = 'anchors';
            _r13_t15 = {};
            _r13_t16 = r13_glyph['anchors'];
            _r13_t17 = Object['keys'](r13_glyph['anchors']);
            return _r13_t6[_r13_t14] = function (r17_a, r17_anchors, r17_keys) {
                var r17_a, r17_anchors, r17_keys, r17_k, _r17_t0, _r17_t1, _r17_t2;
                _r17_t0 = r17_keys;
                _r17_t1 = _r17_t0['length'];
                _r17_t2 = 0;
                for (; _r17_t2 < _r17_t1; _r17_t2 = _r17_t2 + 1) {
                    r17_k = _r17_t0[_r17_t2];
                    r17_a[r17_k] = r17_anchors[r17_k];
                }
                return _r13_t18 = r17_a;
            }(_r13_t15, _r13_t16, _r13_t17);
        } else
            return void 0;
    };
    r0_Glyph['prototype']['create-stroke'] = function _r0_t11() {
        var r19_s, _r19_t0, _r19_t1;
        _r19_t0 = this;
        r19_s = new r0_Stroke();
        r19_s['gizmo'] = Object['create'](_r19_t0['gizmo']);
        return r19_s;
    };
    r0_Glyph['prototype']['set-anchor'] = function _r0_t12(r20_id, r20_type, r20_x, r20_y, r20_mbx, r20_mby) {
        var r20_id, r20_type, r20_x, r20_y, r20_mbx, r20_mby, r20_anchorpoint, r20_markbasepoint, _r20_t0, _r20_t1, _r20_t2;
        _r20_t0 = this;
        r20_anchorpoint = r0_tp(_r20_t0['gizmo'], {
            'x': r20_x,
            'y': r20_y
        });
        if (r20_mbx !== void 0 && r20_mby !== void 0)
            _r20_t2 = r0_tp(_r20_t0['gizmo'], {
                'x': r20_mbx,
                'y': r20_mby
            });
        else
            _r20_t2 = {
                'x': void 0,
                'y': void 0
            };
        r20_markbasepoint = _r20_t2;
        return _r20_t0['anchors'][r20_id] = {
            'x': r20_anchorpoint['x'],
            'y': r20_anchorpoint['y'],
            'type': r20_type,
            'mbx': r20_markbasepoint['x'],
            'mby': r20_markbasepoint['y']
        };
    };
    exports['Glyph'] = r0_Glyph;
}
