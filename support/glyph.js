{
    var r0_bezierCubic2Q2, r0_Glyph, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9;
    r0_bezierCubic2Q2 = require('node-sfnt/lib/math/bezierCubic2Q2');
    r0_Glyph = function _r0_t0(r1_name) {
        var r1_name, _r1_t0;
        _r1_t0 = this;
        _r1_t0['name'] = r1_name;
        _r1_t0['unicode'] = [];
        _r1_t0['contours'] = [];
        _r1_t0['advanceWidth'] = 500;
        return void 0;
    };
    r0_Glyph['prototype']['set-width'] = function _r0_t1(r2_w) {
        var r2_w, _r2_t0;
        _r2_t0 = this;
        _r2_t0['advanceWidth'] = r2_w;
        return _r2_t0;
    };
    r0_Glyph['prototype']['assign-unicode'] = function _r0_t2(r3_u) {
        var r3_u, _r3_t0;
        _r3_t0 = this;
        _r3_t0['unicode']['push'](r3_u['charCodeAt'](0));
        return _r3_t0;
    };
    r0_Glyph['prototype']['start-from'] = function _r0_t3(r4_x, r4_y) {
        var r4_x, r4_y, _r4_t0;
        _r4_t0 = this;
        _r4_t0['contours']['push']([{
                'x': r4_x,
                'y': r4_y,
                'onCurve': true
            }]);
        return _r4_t0;
    };
    r0_Glyph['prototype']['line-to'] = function _r0_t4(r5_x, r5_y) {
        var r5_x, r5_y, _r5_t0;
        _r5_t0 = this;
        _r5_t0['contours'][_r5_t0['contours']['length'] - 1]['push']({
            'x': r5_x,
            'y': r5_y,
            'onCurve': true
        });
        return _r5_t0;
    };
    r0_Glyph['prototype']['curve-to'] = function _r0_t5(r6_xc, r6_yc, r6_x, r6_y) {
        var r6_xc, r6_yc, r6_x, r6_y, _r6_t0;
        _r6_t0 = this;
        _r6_t0['contours'][_r6_t0['contours']['length'] - 1]['push']({
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
        var r10_contours, r10_contour, r10_j, r10_point, r10_p2, r10_p3, _r10_t0, _r10_t1, _r10_t2, _r10_t3;
        _r10_t3 = this;
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
        return _r10_t3;
    };
    r0_Glyph['prototype']['include-glyph'] = function _r0_t9(r12_glyph) {
        var r12_glyph, _r12_t0;
        _r12_t0 = this;
        return _r12_t0['put-shapes'](r12_glyph['contours']);
    };
    exports['Glyph'] = r0_Glyph;
}
