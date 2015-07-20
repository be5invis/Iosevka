{
    var r0_bezierCubic2Q2, r0_tp, r0_Stroke, r0_id, r0_Glyph, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11;
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
    r0_Glyph = function _r0_t0(r1_name) {
        var r1_name, _r1_t0;
        _r1_t0 = this;
        _r1_t0['name'] = r1_name;
        _r1_t0['unicode'] = [];
        _r1_t0['contours'] = [];
        _r1_t0['advanceWidth'] = 500;
        _r1_t0['anchors'] = {};
        _r1_t0['gizmo'] = {
            'xx': 1,
            'yx': 0,
            'xy': 0,
            'yy': 1,
            'x': 0,
            'y': 0
        };
        return void 0;
    };
    r0_Glyph['prototype']['set-width'] = function _r0_t1(r2_w) {
        var r2_w, _r2_t0;
        _r2_t0 = this;
        _r2_t0['advanceWidth'] = r2_w;
        return _r2_t0;
    };
    r0_Glyph['prototype']['assign-unicode'] = function _r0_t2(r3_u) {
        var r3_u, _r3_t0, _r3_t1, _r3_t2, _r3_t3, _r3_t4;
        _r3_t0 = this;
        _r3_t1 = _r3_t0['unicode'];
        _r3_t2 = _r3_t1['push'];
        if (typeof r3_u === 'string')
            _r3_t3 = r3_u['charCodeAt'](0);
        else {
            if (true)
                _r3_t4 = r3_u;
            else
                _r3_t4 = void 0;
            _r3_t3 = _r3_t4;
        }
        _r3_t2['call'](_r3_t1, _r3_t3);
        return _r3_t0;
    };
    r0_Glyph['prototype']['start-from'] = function _r0_t3(r4_x, r4_y) {
        var r4_x, r4_y, _r4_t0;
        _r4_t0 = this;
        _r4_t0['contours']['push']([r0_tp(_r4_t0['gizmo'], {
                'x': r4_x,
                'y': r4_y,
                'onCurve': true
            })]);
        return _r4_t0;
    };
    r0_Glyph['prototype']['line-to'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0;
        _r5_t0 = this;
        _r5_t0['contours'][_r5_t0['contours']['length'] - 1]['push'](r0_tp(_r5_t0['gizmo'], {
            'x': r5_x,
            'y': r5_y,
            'onCurve': true
        }));
        return _r5_t0;
    };
    r0_Glyph['prototype']['curve-to'] = function _r0_t5(r6_xc, r6_yc, r6_x, r6_y) {
        var r6_xc, r6_yc, r6_x, r6_y, _r6_t0;
        _r6_t0 = this;
        _r6_t0['contours'][_r6_t0['contours']['length'] - 1]['push'](r0_tp(_r6_t0['gizmo'], {
            'x': r6_xc,
            'y': r6_yc,
            'onCurve': false
        }), r0_tp(_r6_t0['gizmo'], {
            'x': r6_x,
            'y': r6_y,
            'onCurve': true
        }));
        return _r6_t0;
    };
    r0_Glyph['prototype']['cubic-to'] = function _r0_t6(r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y) {
        var r7_x1, r7_y1, r7_x2, r7_y2, r7_x, r7_y, r7_lastContour, r7_lastPoint, r7_segments, r7_p0, r7_xc, r7_yc, r7_xf, r7_yf, _r7_t0, _r7_t1, _r7_t2, _r7_t3, _r7_t4, _r7_t5, _r7_t6;
        _r7_t6 = this;
        r7_lastContour = _r7_t6['contours'][_r7_t6['contours']['length'] - 1];
        r7_lastPoint = r7_lastContour[r7_lastContour['length'] - 1];
        r7_segments = r0_bezierCubic2Q2(r7_lastPoint, {
            'x': r7_x1,
            'y': r7_y1
        }, {
            'x': r7_x2,
            'y': r7_y2
        }, {
            'x': r7_x,
            'y': r7_y
        });
        _r7_t0 = r7_segments;
        _r7_t1 = _r7_t0['length'];
        _r7_t2 = 0;
        for (; _r7_t2 < _r7_t1; _r7_t2 = _r7_t2 + 1) {
            _r7_t3 = _r7_t0[_r7_t2];
            r7_p0 = _r7_t3[0];
            _r7_t4 = _r7_t3[1];
            r7_xc = _r7_t4['x'];
            r7_yc = _r7_t4['y'];
            _r7_t5 = _r7_t3[2];
            r7_xf = _r7_t5['x'];
            r7_yf = _r7_t5['y'];
            _r7_t6['curve-to'](r7_xc, r7_yc, r7_xf, r7_yf);
        }
        return _r7_t6;
    };
    r0_Glyph['prototype']['reverse-last'] = function _r0_t7() {
        var _r9_t0;
        _r9_t0 = this;
        return _r9_t0['contours'][_r9_t0['contours']['length'] - 1] = _r9_t0['contours'][_r9_t0['contours']['length'] - 1]['reverse']();
    };
    r0_Glyph['prototype']['put-shapes'] = function _r0_t8(r10_contours) {
        var r10_contours, r10_t, r10_contour, r10_j, r10_point, r10_p2, r10_p3, _r10_t0, _r10_t1, _r10_t2, _r10_t3;
        _r10_t3 = this;
        r10_t = _r10_t3['gizmo'];
        _r10_t3['gizmo'] = r0_id;
        _r10_t0 = r10_contours;
        _r10_t1 = _r10_t0['length'];
        _r10_t2 = 0;
        for (; _r10_t2 < _r10_t1; _r10_t2 = _r10_t2 + 1) {
            r10_contour = _r10_t0[_r10_t2];
            _r10_t3['start-from'](r10_contour[0]['x'], r10_contour[0]['y']);
            r10_j = 1;
            for (; r10_j < r10_contour['length']; r10_j = r10_j + 1) {
                r10_point = r10_contour[r10_j];
                if (r10_point['cubic']) {
                    r10_p2 = r10_contour[r10_j + 1];
                    r10_p3 = r10_contour[r10_j + 2];
                    _r10_t3['cubic-to'](r10_point['x'], r10_point['y'], r10_p2['x'], r10_p2['y'], r10_p3['x'], r10_p3['y']);
                    r10_j = r10_j + 2;
                } else if (r10_point['onCurve'])
                    _r10_t3['line-to'](r10_point['x'], r10_point['y']);
                else {
                    r10_p2 = r10_contour[r10_j + 1];
                    _r10_t3['curve-to'](r10_point['x'], r10_point['y'], r10_p2['x'], r10_p2['y']);
                    r10_j = r10_j + 1;
                }
            }
        }
        _r10_t3['gizmo'] = r10_t;
        return _r10_t3;
    };
    r0_Glyph['prototype']['include'] = function _r0_t9(r12_glyph, r12_copyAnchors) {
        var r12_glyph, r12_copyAnchors, r12_contours, r12_shiftx, r12_shifty, r12_markid, r12_anchorThis, r12_anchorThat, r12_shiftedshape, _r12_t0, _r12_t1, _r12_t2, _r12_t3, _r12_t4, _r12_t5, _r12_t6, _r12_t7, _r12_t8, _r12_t9, _r12_t10, _r12_t11, _r12_t12, _r12_t13, _r12_t14, _r12_t15, _r12_t16, _r12_t17, _r12_t18, _r12_tag19;
        _r12_t17 = arguments;
        _r12_t4 = this;
        r12_contours = r12_glyph['contours'];
        r12_shiftx = 0;
        r12_shifty = 0;
        if (_r12_t4['anchors'] && r12_glyph['anchors']) {
            _r12_t0 = Object['keys'](_r12_t4['anchors']);
            _r12_t1 = _r12_t0['length'];
            _r12_t2 = 0;
            _r12_t6 = _r12_t2 < _r12_t1;
            for (; _r12_t6; _r12_t6 = _r12_t2 < _r12_t1) {
                r12_markid = _r12_t0[_r12_t2];
                r12_anchorThis = _r12_t4['anchors'][r12_markid];
                r12_anchorThat = r12_glyph['anchors'][r12_markid];
                if (r12_anchorThis && r12_anchorThis['type'] === 'base' && r12_anchorThat && r12_anchorThat['type'] === 'mark') {
                    _r12_t3 = [
                        r12_anchorThis['x'] - r12_anchorThat['x'],
                        r12_anchorThis['y'] - r12_anchorThat['y']
                    ];
                    r12_shiftx = _r12_t3[0];
                    r12_shifty = _r12_t3[1];
                    if (r12_anchorThat['mbx'] !== void 0 && r12_anchorThat['mby'] !== void 0)
                        _r12_t9 = _r12_t4['anchors'][r12_markid] = {
                            'x': r12_anchorThis['x'] + r12_anchorThat['mbx'] - r12_anchorThat['x'],
                            'y': r12_anchorThis['y'] + r12_anchorThat['mby'] - r12_anchorThat['y'],
                            'type': r12_anchorThis['type'],
                            'mbx': r12_anchorThis['mbx'],
                            'mby': r12_anchorThis['mby']
                        };
                    _r12_t8 = _r12_t9;
                } else
                    _r12_t8 = void 0;
                _r12_t7 = _r12_t2 = _r12_t2 + 1;
            }
            _r12_t5 = _r12_t7;
        } else
            _r12_t5 = void 0;
        if (r12_contours) {
            r12_shiftedshape = r12_contours['map'](function _r12_t11(r14_contour) {
                var r14_contour, _r14_t0;
                return r14_contour['map'](function _r14_t0(r15_point) {
                    var r15_point;
                    return {
                        'x': r15_point['x'] + r12_shiftx,
                        'y': r15_point['y'] + r12_shifty,
                        'onCurve': r15_point['onCurve'],
                        'cubic': r15_point['cubic']
                    };
                });
            });
            _r12_t10 = _r12_t4['put-shapes'](r12_shiftedshape);
        } else
            _r12_t10 = void 0;
        if ((!r12_contours || r12_copyAnchors) && r12_glyph['anchors']) {
            _r12_t13 = 'anchors';
            _r12_t14 = {};
            _r12_t15 = r12_glyph['anchors'];
            _r12_t16 = Object['keys'](r12_glyph['anchors']);
            return _r12_t4[_r12_t13] = function (r16_a, r16_anchors, r16_keys) {
                var r16_a, r16_anchors, r16_keys, r16_k, _r16_t0, _r16_t1, _r16_t2;
                _r16_t0 = r16_keys;
                _r16_t1 = _r16_t0['length'];
                _r16_t2 = 0;
                for (; _r16_t2 < _r16_t1; _r16_t2 = _r16_t2 + 1) {
                    r16_k = _r16_t0[_r16_t2];
                    r16_a[r16_k] = r16_anchors[r16_k];
                }
                return r16_a;
            }(_r12_t14, _r12_t15, _r12_t16);
        } else
            return void 0;
    };
    r0_Glyph['prototype']['create-stroke'] = function _r0_t10() {
        var r18_s, _r18_t0;
        _r18_t0 = this;
        r18_s = new r0_Stroke();
        r18_s['gizmo'] = Object['create'](_r18_t0['gizmo']);
        return r18_s;
    };
    r0_Glyph['prototype']['set-anchor'] = function _r0_t11(r19_id, r19_type, r19_x, r19_y, r19_mbx, r19_mby) {
        var r19_id, r19_type, r19_x, r19_y, r19_mbx, r19_mby, r19_anchorpoint, r19_markbasepoint, _r19_t0, _r19_t1;
        _r19_t0 = this;
        r19_anchorpoint = r0_tp(_r19_t0['gizmo'], {
            'x': r19_x,
            'y': r19_y
        });
        if (r19_mbx !== void 0 && r19_mby !== void 0)
            _r19_t1 = r0_tp(_r19_t0['gizmo'], {
                'x': r19_mbx,
                'y': r19_mby
            });
        else
            _r19_t1 = {
                'x': void 0,
                'y': void 0
            };
        r19_markbasepoint = _r19_t1;
        return _r19_t0['anchors'][r19_id] = {
            'x': r19_anchorpoint['x'],
            'y': r19_anchorpoint['y'],
            'type': r19_type,
            'mbx': r19_markbasepoint['x'],
            'mby': r19_markbasepoint['y']
        };
    };
    exports['Glyph'] = r0_Glyph;
}
