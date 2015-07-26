{
    var r0_bezierCubic2Q2, r0_tp, r0_Stroke, r0_id, r0_fallback, r0_aFunction, r0_Glyph, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16;
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
    r0_aFunction = {
        'unapply': function _r0_t1(r2_obj, r2_arity) {
            var r2_obj, r2_arity, _r2_t0, _r2_t1, _r2_t2;
            if (r2_obj instanceof Function)
                return [r2_obj];
            else
                return null;
        }
    };
    r0_Glyph = function _r0_t2(r3_name) {
        var r3_name, _r3_t0, _r3_t1;
        _r3_t0 = this;
        _r3_t0['name'] = r3_name;
        _r3_t0['unicode'] = [];
        _r3_t0['contours'] = [];
        _r3_t0['advanceWidth'] = 500;
        _r3_t0['anchors'] = {};
        _r3_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        _r3_t0['dependencies'] = [];
        return void 0;
    };
    r0_Glyph['is'] = {
        'unapply': function _r0_t3(r4_obj, r4_arity) {
            var r4_obj, r4_arity, _r4_t0, _r4_t1, _r4_t2;
            if (r4_obj instanceof r0_Glyph)
                return [r4_obj];
            else
                return null;
        }
    };
    r0_Glyph['prototype']['set-width'] = function _r0_t4(r5_w) {
        var r5_w, _r5_t0, _r5_t1;
        _r5_t0 = this;
        _r5_t0['advanceWidth'] = r5_w;
        return _r5_t0;
    };
    r0_Glyph['prototype']['assign-unicode'] = function _r0_t5(r6_u) {
        var r6_u, _r6_t0, _r6_t1, _r6_t2, _r6_t3, _r6_t4, _r6_t5;
        _r6_t0 = this;
        _r6_t2 = _r6_t0['unicode'];
        _r6_t3 = _r6_t2['push'];
        if (typeof r6_u === 'string')
            _r6_t4 = r6_u['charCodeAt'](0);
        else {
            if (true)
                _r6_t5 = r6_u;
            else
                _r6_t5 = void 0;
            _r6_t4 = _r6_t5;
        }
        _r6_t3['call'](_r6_t2, _r6_t4);
        return _r6_t0;
    };
    r0_Glyph['prototype']['start-from'] = function _r0_t6(r7_x, r7_y) {
        var r7_x, r7_y, _r7_t0, _r7_t1;
        _r7_t0 = this;
        _r7_t0['contours']['push']([r0_tp(_r7_t0['gizmo'], {
                'x': r7_x,
                'y': r7_y,
                'onCurve': true
            })]);
        return _r7_t0;
    };
    r0_Glyph['prototype']['line-to'] = function _r0_t7(r8_x, r8_y) {
        var r8_x, r8_y, _r8_t0, _r8_t1;
        _r8_t0 = this;
        _r8_t0['contours'][_r8_t0['contours']['length'] - 1]['push'](r0_tp(_r8_t0['gizmo'], {
            'x': r8_x,
            'y': r8_y,
            'onCurve': true
        }));
        return _r8_t0;
    };
    r0_Glyph['prototype']['curve-control'] = function _r0_t8(r9_x, r9_y) {
        var r9_x, r9_y, _r9_t0, _r9_t1;
        _r9_t0 = this;
        _r9_t0['contours'][_r9_t0['contours']['length'] - 1]['push'](r0_tp(_r9_t0['gizmo'], {
            'x': r9_x,
            'y': r9_y,
            'onCurve': false
        }));
        return _r9_t0;
    };
    r0_Glyph['prototype']['curve-to'] = function _r0_t9(r10_xc, r10_yc, r10_x, r10_y) {
        var r10_xc, r10_yc, r10_x, r10_y, _r10_t0, _r10_t1;
        _r10_t0 = this;
        _r10_t0['contours'][_r10_t0['contours']['length'] - 1]['push'](r0_tp(_r10_t0['gizmo'], {
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
    r0_Glyph['prototype']['cubic-to'] = function _r0_t10(r11_x1, r11_y1, r11_x2, r11_y2, r11_x, r11_y) {
        var r11_x1, r11_y1, r11_x2, r11_y2, r11_x, r11_y, r11_lastContour, r11_lastPoint, r11_segments, r11_p0, r11_xc, r11_yc, r11_xf, r11_yf, _r11_t0, _r11_t1, _r11_t2, _r11_t3, _r11_t4, _r11_t5, _r11_t6, _r11_t7;
        _r11_t6 = this;
        r11_lastContour = _r11_t6['contours'][_r11_t6['contours']['length'] - 1];
        r11_lastPoint = r11_lastContour[r11_lastContour['length'] - 1];
        r11_segments = r0_bezierCubic2Q2(r11_lastPoint, {
            'x': r11_x1,
            'y': r11_y1
        }, {
            'x': r11_x2,
            'y': r11_y2
        }, {
            'x': r11_x,
            'y': r11_y
        });
        _r11_t0 = r11_segments;
        _r11_t1 = _r11_t0['length'];
        _r11_t2 = 0;
        for (; _r11_t2 < _r11_t1; _r11_t2 = _r11_t2 + 1) {
            _r11_t3 = _r11_t0[_r11_t2];
            r11_p0 = _r11_t3[0];
            _r11_t4 = _r11_t3[1];
            r11_xc = _r11_t4['x'];
            r11_yc = _r11_t4['y'];
            _r11_t5 = _r11_t3[2];
            r11_xf = _r11_t5['x'];
            r11_yf = _r11_t5['y'];
            _r11_t6['curve-to'](r11_xc, r11_yc, r11_xf, r11_yf);
        }
        return _r11_t6;
    };
    r0_Glyph['prototype']['reverse-last'] = function _r0_t11() {
        var _r13_t0, _r13_t1;
        _r13_t0 = this;
        return _r13_t0['contours'][_r13_t0['contours']['length'] - 1] = _r13_t0['contours'][_r13_t0['contours']['length'] - 1]['reverse']();
    };
    r0_Glyph['prototype']['put-shapes'] = function _r0_t12(r14_contours) {
        var r14_contours, r14_t, r14_contour, r14_j, r14_point, r14_p2, r14_p3, _r14_t0, _r14_t1, _r14_t2, _r14_t3, _r14_t4;
        _r14_t3 = this;
        r14_t = _r14_t3['gizmo'];
        _r14_t3['gizmo'] = r0_id;
        _r14_t0 = r14_contours;
        _r14_t1 = _r14_t0['length'];
        _r14_t2 = 0;
        for (; _r14_t2 < _r14_t1; _r14_t2 = _r14_t2 + 1) {
            r14_contour = _r14_t0[_r14_t2];
            _r14_t3['start-from'](r14_contour[0]['x'], r14_contour[0]['y']);
            r14_j = 1;
            for (; r14_j < r14_contour['length']; r14_j = r14_j + 1) {
                r14_point = r14_contour[r14_j];
                if (r14_point['cubic']) {
                    r14_p2 = r14_contour[r14_j + 1];
                    r14_p3 = r14_contour[r14_j + 2];
                    _r14_t3['cubic-to'](r14_point['x'], r14_point['y'], r14_p2['x'], r14_p2['y'], r14_p3['x'], r14_p3['y']);
                    r14_j = r14_j + 2;
                } else if (r14_point['onCurve'])
                    _r14_t3['line-to'](r14_point['x'], r14_point['y']);
                else
                    _r14_t3['curve-control'](r14_point['x'], r14_point['y']);
            }
        }
        _r14_t3['gizmo'] = r14_t;
        return _r14_t3;
    };
    r0_Glyph['prototype']['include'] = function _r0_t13(r16_component, r16_copyAnchors) {
        var r16_component, r16_copyAnchors, r16_glyph, r16_otherwise, r16_contours, r16_it, r16_transform, r16_shiftx, r16_shifty, r16_markid, r16_anchorThis, r16_anchorThat, _r16_t0, _r16_t1, _r16_t2, _r16_t3, _r16_t4, _r16_t5, _r16_t6, _r16_t7, _r16_t8, _r16_t9, _r16_t10, _r16_t11, _r16_t12, _r16_t13, _r16_t14, _r16_t15, _r16_t16, _r16_t17, _r16_t18, _r16_t19, _r16_t20, _r16_t21, _r16_t22, _r16_tag23, _r16_t24, _r16_t25, _r16_t26;
        _r16_t7 = this;
        _r16_t0 = r16_component;
        if (_r16_t2 = r0_aFunction['unapply'](_r16_t0, 1)) {
            r16_it = _r16_t2[0];
            return r16_component['call'](_r16_t7);
        } else {
            if (_r16_t1 = r0_Stroke['is']['unapply'](_r16_t0, 1)) {
                r16_it = _r16_t1[0];
                _r16_t10 = { 'contours': r16_component['to-outline'](0, 0) };
            } else {
                if (_r16_t0 instanceof Array && _r16_t0['length'] >= 0) {
                    r16_contours = _r16_t0['slice'](0);
                    _r16_t11 = { 'contours': r16_contours };
                } else {
                    r16_otherwise = _r16_t0;
                    _r16_t11 = r16_component;
                }
                _r16_t10 = _r16_t11;
            }
            _r16_t9 = _r16_t10;
        }
        r16_glyph = _r16_t9;
        r16_contours = r16_glyph['contours'];
        r16_transform = {
            'x': 0,
            'y': 0,
            'xx': 1,
            'yy': 1,
            'xy': 0,
            'yx': 0
        };
        r16_shiftx = 0;
        r16_shifty = 0;
        if (_r16_t7['anchors'] && r16_glyph['anchors']) {
            _r16_t3 = Object['keys'](_r16_t7['anchors']);
            _r16_t4 = _r16_t3['length'];
            _r16_t5 = 0;
            _r16_t13 = _r16_t5 < _r16_t4;
            for (; _r16_t13; _r16_t13 = _r16_t5 < _r16_t4) {
                r16_markid = _r16_t3[_r16_t5];
                r16_anchorThis = _r16_t7['anchors'][r16_markid];
                r16_anchorThat = r16_glyph['anchors'][r16_markid];
                if (r16_anchorThis && (r16_anchorThis['type'] === 'base' || r16_anchorThis['mbx'] !== void 0 && r16_anchorThis['mby'] !== void 0) && r16_anchorThat && r16_anchorThat['type'] === 'mark') {
                    _r16_t6 = [
                        r0_fallback(r16_anchorThis['mbx'], r16_anchorThis['x']) - r16_anchorThat['x'],
                        r0_fallback(r16_anchorThis['mby'], r16_anchorThis['y']) - r16_anchorThat['y']
                    ];
                    r16_shiftx = _r16_t6[0];
                    r16_shifty = _r16_t6[1];
                    if (r16_anchorThat['mbx'] !== void 0 && r16_anchorThat['mby'] !== void 0)
                        _r16_t26 = _r16_t7['anchors'][r16_markid] = {
                            'x': r16_anchorThis['x'] + r16_anchorThat['mbx'] - r16_anchorThat['x'],
                            'y': r16_anchorThis['y'] + r16_anchorThat['mby'] - r16_anchorThat['y'],
                            'type': r16_anchorThis['type'],
                            'mbx': r16_anchorThis['mbx'],
                            'mby': r16_anchorThis['mby']
                        };
                    _r16_t25 = _r16_t26;
                } else
                    _r16_t25 = void 0;
                _r16_t14 = _r16_t5 = _r16_t5 + 1;
            }
            _r16_t12 = _r16_t14;
        } else
            _r16_t12 = void 0;
        r16_transform['x'] = r16_transform['x'] + r16_shiftx;
        r16_transform['y'] = r16_transform['y'] + r16_shifty;
        if (r16_contours)
            _r16_t15 = _r16_t7['put-shapes'](r16_contours['map'](function _r16_t16(r18_contour) {
                var r18_contour, _r18_t0, _r18_t1, _r18_t2;
                return r18_contour['map'](function _r18_t2(r19_point) {
                    var r19_point, _r19_t0, _r19_t1;
                    return r0_tp(r16_transform, r19_point);
                });
            }));
        else
            _r16_t15 = void 0;
        if ((!r16_contours || r16_copyAnchors) && r16_glyph['anchors']) {
            _r16_t18 = 'anchors';
            _r16_t19 = {};
            _r16_t20 = r16_glyph['anchors'];
            _r16_t21 = Object['keys'](r16_glyph['anchors']);
            _r16_t17 = _r16_t7[_r16_t18] = function (r20_a, r20_anchors, r20_keys) {
                var r20_a, r20_anchors, r20_keys, r20_k, _r20_t0, _r20_t1, _r20_t2;
                _r20_t0 = r20_keys;
                _r20_t1 = _r20_t0['length'];
                _r20_t2 = 0;
                for (; _r20_t2 < _r20_t1; _r20_t2 = _r20_t2 + 1) {
                    r20_k = _r20_t0[_r20_t2];
                    r20_a[r20_k] = r20_anchors[r20_k];
                }
                return _r16_t22 = r20_a;
            }(_r16_t19, _r16_t20, _r16_t21);
        } else
            _r16_t17 = void 0;
        if (r16_glyph['name'])
            return _r16_t7['dependencies']['push'](r16_glyph['name']);
        else
            return void 0;
    };
    r0_Glyph['prototype']['apply-transform'] = function _r0_t14(r22_transform) {
        var r22_transform, _r22_t0, _r22_t1, _r22_t2;
        _r22_t0 = this;
        return _r22_t0['contours'] = _r22_t0['contours']['map'](function _r22_t2(r23_contour) {
            var r23_contour, _r23_t0, _r23_t1, _r23_t2;
            return r23_contour['map'](function _r23_t2(r24_point) {
                var r24_point, _r24_t0, _r24_t1;
                return r0_tp(r22_transform, r24_point);
            });
        });
    };
    r0_Glyph['prototype']['create-stroke'] = function _r0_t15() {
        var r25_s, _r25_t0, _r25_t1;
        _r25_t0 = this;
        r25_s = new r0_Stroke();
        r25_s['gizmo'] = Object['create'](_r25_t0['gizmo']);
        return r25_s;
    };
    r0_Glyph['prototype']['set-anchor'] = function _r0_t16(r26_id, r26_type, r26_x, r26_y, r26_mbx, r26_mby) {
        var r26_id, r26_type, r26_x, r26_y, r26_mbx, r26_mby, r26_anchorpoint, r26_markbasepoint, _r26_t0, _r26_t1, _r26_t2;
        _r26_t0 = this;
        r26_anchorpoint = r0_tp(_r26_t0['gizmo'], {
            'x': r26_x,
            'y': r26_y
        });
        if (r26_mbx !== void 0 && r26_mby !== void 0)
            _r26_t2 = r0_tp(_r26_t0['gizmo'], {
                'x': r26_mbx,
                'y': r26_mby
            });
        else
            _r26_t2 = {
                'x': void 0,
                'y': void 0
            };
        r26_markbasepoint = _r26_t2;
        return _r26_t0['anchors'][r26_id] = {
            'x': r26_anchorpoint['x'],
            'y': r26_anchorpoint['y'],
            'type': r26_type,
            'mbx': r26_markbasepoint['x'],
            'mby': r26_markbasepoint['y']
        };
    };
    exports['Glyph'] = r0_Glyph;
}
