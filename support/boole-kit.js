'use strict';
var r1_SetupBuilders, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8;
var r1_ShapeOps = require('caryll-shapeops');
var r1_CurveUtil = require('./curve-util');
exports.SetupBuilders = r1_SetupBuilders = function _r1_t8(r127_args) {
    var _r127_t0 = r127_args;
    var r127_Glyph = _r127_t0.Glyph;
    var r127_globalTransform = _r127_t0.globalTransform;
    var r127_Boole = function _r127_t3(r128_operator) {
        return function _r128_t2() {
            var _r129_t2 = arguments;
            var _r129_t3 = [].slice.call(_r129_t2, 0);
            return function (_r129_leti0) {
                var r130_k = _r129_leti0;
                return function _r130_t0(r131_dontinc) {
                    var r131_item, r131_g1, r131_c1;
                    var _r131_t3 = this;
                    var r131_g = new r127_Glyph();
                    r131_g.gizmo = _r131_t3.gizmo || r127_globalTransform;
                    if (r130_k.length === 0)
                        return r131_g;
                    r131_g.include(r130_k[0]);
                    r131_g.contours = r131_g.contours.map(r1_CurveUtil.convertContourToCubic);
                    var _r131_t0 = r130_k.slice(1);
                    var _r131_t1 = _r131_t0.length;
                    var _r131_t2 = 0;
                    for (; _r131_t2 < _r131_t1; _r131_t2 = _r131_t2 + 1) {
                        r131_item = _r131_t0[_r131_t2];
                        r131_g1 = new r127_Glyph();
                        r131_g1.gizmo = _r131_t3.gizmo || r127_globalTransform;
                        r131_g1.include(r131_item);
                        r131_g1.contours = r131_g1.contours.map(r1_CurveUtil.convertContourToCubic);
                        r131_c1 = r1_ShapeOps.boole(r128_operator, r131_g.contours, r131_g1.contours, r1_ShapeOps.fillRules.nonzero, r1_ShapeOps.fillRules.nonzero, 16384);
                        r131_g.contours = r131_c1.map(function _r131_t5(r134_c) {
                            return r1_CurveUtil.convertContourToCubic(r134_c).reverse();
                        });
                    }
                    _r131_t3.includeGlyph(r131_g);
                    return r131_g;
                };
            }(_r129_t3);
        };
    };
    var r127_union = r127_Boole(r1_ShapeOps.ops.union);
    var r127_intersection = r127_Boole(r1_ShapeOps.ops.intersection);
    var r127_difference = r127_Boole(r1_ShapeOps.ops.difference);
    return {
        'union': r127_union,
        'intersection': r127_intersection,
        'difference': r127_difference
    };
};
