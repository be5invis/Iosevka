var r0_Glyph, r0_Stroke, r0_mix, r0_linreg, r0_fallback, _r0_t0, _r0_t1, _r0_t2, _r0_t3;

r0_Glyph = require("./support/glyph").Glyph, r0_Stroke = require("./support/stroke").Stroke, 
r0_mix = function(t, i, e) {
    var t, i, e;
    return t + (i - t) * e;
}, r0_linreg = function(t, i, e, n, o) {
    var t, i, e, n, o;
    return i + (o - t) * (n - i) / (e - t);
}, r0_fallback = function() {
    var t, i, e, n, o;
    for (i = arguments, t = 0, e = t < i.length; e; e = t < i.length) {
        if (void 0 !== i[t]) return i[t];
        o = void 0, n = t += 1;
    }
    return n;
}, exports.build = function(t) {
    var t, i, e, n, o, d, r, s, a, u, c, b, h, l, v, f, m, w, g, p, x, k, _, z, y, S, M, A, j, O, q, I, P, F, G, W, B, C, N, D, J, T, E, H, L, R, K, Q, U, V, X, Y, Z, $, tt, it, et, nt, ot, dt, rt, st, at, ut, ct, bt, ht, lt, vt, ft, mt, wt, gt, pt, xt, kt, _t, zt, yt, St, Mt, At, jt, Ot, qt, It, Pt, Ft, Gt, Wt, Bt, Ct, Nt, Dt, Jt, Tt, Et, Ht, Lt, Rt, Kt, Qt, Ut, Vt, Xt, Yt, Zt, $t, ti, ii, ei, ni, oi, di, ri, si, ai, ui, ci, bi, hi, li, vi, fi, mi, wi, gi, pi, xi, ki, _i, zi, yi, Si, Mi, Ai, ji, Oi, qi, Ii, Pi, Fi, Gi, Wi, Bi, Ci, Ni, Di, Ji, Ti, Ei, Hi, Li, Ri, Ki, Qi, Ui, Vi, Xi, Yi, Zi, $i, te, ie, ee, ne, oe, de, re, se;
    for (i = t.variantSelector, e = require("./empty.json"), n = e.glyf, o = {
        ".notdef": n[0]
    }, d = [], r = {
        xx: 1,
        yx: Math.tan(t.italicangle / 180 * Math.PI),
        xy: 0,
        yy: 1,
        x: 0,
        y: 0
    }, s = 1 / Math.sqrt(1 - r.yx * r.yx), a = {
        x: -s,
        y: 0
    }, u = {
        x: s,
        y: 0
    }, c = {
        x: r.yx,
        y: 1
    }, b = {
        x: -r.yx,
        y: -1
    }, h = t.descender, l = t.width, v = t.cap, f = t.xheight, m = t.o, w = t.oxhook, 
    g = t.sb, p = t.hook, x = t.ahook, k = t.shook, _ = t.rhook, z = t.smooth, y = t.smallsmooth, 
    S = t.stroke, M = t.dotsize, A = t.periodsize, j = t.barpos, O = t.gbarpos, q = t.fivebarpos, 
    I = t.longjut, P = t.accent, F = t.accentx, G = f - m, W = v - m, B = S / 2, C = l - g, 
    N = l / 2, D = v / 2, J = v - z, T = M / 2, E = A / 2, H = z - r.yx * t.smoothadjust, 
    L = z + r.yx * t.smoothadjust, R = y - r.yx * t.smoothadjust, K = y + r.yx * t.smoothadjust, 
    Q = S * r.yx, U = t.ebarpos || j, V = t.kappa, X = 1 - V, Y = t.bkappa || V + .1, 
    Z = t.ckappa || Y, $ = 1 - Y, tt = t.kappa_hook || Y + .1, it = t.kappa_ahook || tt, 
    et = .2 * l, nt = .25 * f, ot = .75, dt = .2 * l, rt = 0, st = .75, at = .04 * I, 
    ut = t.jbalance || B + at, ct = t.tbalance || ut, bt = t.tbalance2 || ct, ht = t.rbalance || .3 * ut, 
    lt = "base", vt = "mark", ft = "markbase", mt = function(t) {
        var t;
        return {
            x: t.x * r.xx + t.y * r.yx + r.x,
            y: t.x * r.xy + t.y * r.yy + r.y,
            type: t.type
        };
    }, wt = {
        anchors: {
            above: mt({
                x: N,
                y: f,
                type: lt
            })
        }
    }, gt = {
        anchors: {
            above: mt({
                x: N,
                y: .97 * v,
                type: lt
            })
        }
    }, pt = {
        anchors: {
            below: mt({
                x: N,
                y: h,
                type: lt
            })
        }
    }, xt = {
        anchors: {
            below: mt({
                x: N,
                y: 0,
                type: lt
            })
        }
    }, kt = {
        anchors: {
            above: gt.anchors.above,
            below: xt.anchors.below
        }
    }, _t = {
        anchors: {
            above: gt.anchors.above,
            below: xt.anchors.below
        }
    }, zt = {
        anchors: {
            above: wt.anchors.above,
            below: xt.anchors.below
        }
    }, yt = {
        anchors: {
            above: wt.anchors.above,
            below: pt.anchors.below
        }
    }, St = {
        anchors: {
            above: gt.anchors.above,
            below: pt.anchors.below
        }
    }, r0_Stroke.bindParameters(t), e.name.fontFamily = t.family, e.name.fontSubFamily = t.style, 
    e.name.preferredFamily = t.family, e.name.preferredSubFamily = t.style, e.name.uniqueSubFamily = t.family + " " + t.style + " " + t.version, 
    e.name.version = t.version, Ci = e.name, Ni = "fullName", Di = "Regular" !== t.style ? t.family + " " + t.style : t.family, 
    Ci[Ni] = Di, e.name.postScriptName = e.name.fullName.replace(/ /g, "-"), e.name.copyright = t.copyright, 
    e["OS/2"].usWeightClass = t.weight, e["OS/2"].bProportion = 9, e["OS/2"].bWeight = 1 + t.weight / 100, 
    Ji = e["OS/2"], Ti = "fsSelection", Ei = t.isBold ? 32 : 0, Hi = t.isItalic ? 1 : 0, 
    Li = Ei + Hi, Ri = t.isBold || t.isItalic ? 0 : 64, Ki = Li + Ri, Qi = 128, Ji[Ti] = Ki + Qi, 
    Ui = e.head, Vi = "macStyle", Xi = t.isBold ? 1 : 0, Yi = t.isItalic ? 2 : 0, Ui[Vi] = Xi + Yi, 
    Mt = r0_fallback(t.upmscale, 1), e.head.unitsPerEm = 1e3 * Mt, e.hhea.ascent = Mt * v, 
    e["OS/2"].usWinAscent = Mt * (v + .1 * v), e["OS/2"].sTypoAscender = Mt * v, e.hhea.descent = Mt * h, 
    e["OS/2"].usWinDescent = Mt * (Math.abs(h) + .1 * v), e["OS/2"].sTypoDescender = Mt * h, 
    e.hhea.lineGap = Mt * v * .2, e["OS/2"].sTypoLineGap = Mt * v * .2, e["OS/2"].sxHeight = Mt * f, 
    e.post.italicAnvle = 0 - t.italicangle, At = function(t, i) {
        var t, i, e;
        return e = new r0_Glyph(t), n.push(e), o[t] = e, i.call(e), e;
    }, jt = function(t, e, n) {
        var t, e, n, d, r;
        return d = i[t] || n, r = o[t + "." + d], o[t] = r, e ? r["assign-unicode"](e) : void 0;
    }, Ot = function(t) {
        var t;
        return r0_mix(g, C, t);
    }, At("space", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f;
        return f = this, t = f, i = f["set-width"].bind(f), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = f["start-from"].bind(f), o = f["line-to"].bind(f), s = f["curve-to"].bind(f), 
        a = f["cubic-to"].bind(f), u = f["put-shapes"].bind(f), c = f["reverse-last"].bind(f), 
        b = f.include.bind(f), h = f["create-stroke"].bind(f), v = f["set-anchor"].bind(f), 
        f.gizmo = r, f["set-width"](l), i(l), e(" "), void b(zt);
    }), qt = function(t, i, e, n) {
        var t, i, e, n, o, d, s;
        return o = (t + i) / 2, d = (e + n) / 2, s = new r0_Stroke()["set-transform"](r)["start-from"](d, i)["cubic-to"](d + (e - d) * Z, i, e, o + (i - o) * Z, e, o)["cubic-to"](e, o + (t - o) * Z, d + (e - d) * Z, t, d, t)["cubic-to"](d + (n - d) * Z, t, n, o + (t - o) * Z, n, o)["cubic-to"](n, o + (i - o) * Z, d + (n - d) * Z, i, d, i), 
        s.points;
    }, It = function(t, i, e, n, o) {
        var t, i, e, n, o, d, s, a, u;
        return d = t - o, s = i + o, a = (e + n) / 2, u = new r0_Stroke()["set-transform"](r)["start-from"](a, i)["cubic-to"](a + (e - a) * Z, i, e, s + (i - s) * Z, e, s)["line-to"](e, d)["cubic-to"](e, d + (t - d) * Z, a + (e - a) * Z, t, a, t)["cubic-to"](a + (n - a) * Z, t, n, d + (t - d) * Z, n, d)["line-to"](n, s)["cubic-to"](n, s + (i - s) * Z, a + (n - a) * Z, i, a, i), 
        u.points;
    }, Pt = function(t, i, e) {
        var t, i, e;
        return new r0_Stroke()["set-transform"](r)["start-from"](t + B, i)["heads-to"](b)["set-width"](S, 0)["line-to"](t - e - r.yx * S, i)["to-outline"]();
    }, Ft = function(t, i, e) {
        var t, i, e;
        return new r0_Stroke()["set-transform"](r)["start-from"](t + B, i)["heads-to"](b)["set-width"](0, S)["line-to"](t - e + r.yx * S, i)["to-outline"]();
    }, Gt = function(t, i, e) {
        var t, i, e;
        return new r0_Stroke()["set-transform"](r)["start-from"](t - B, i)["heads-to"](c)["set-width"](0, S)["line-to"](t + e - r.yx * S, i)["to-outline"]();
    }, Wt = function(t, i, e) {
        var t, i, e;
        return new r0_Stroke()["set-transform"](r)["start-from"](t - B, i)["heads-to"](c)["set-width"](S, 0)["line-to"](t + e + r.yx * S, i)["to-outline"]();
    }, Bt = function(t, i, e, n, o, d, s, a, u) {
        var t, i, e, n, o, d, s, a, u, c, b, h, l, v, f, m, w, g, p, x, k, _, z, y, S, M;
        return c = a || .25, b = o || B, h = d || B, l = s || (b + h) / 2, v = .985 * r.yx, 
        f = 1 / Math.sqrt(1 - v * v), S = u || .4 * H, M = n > i ? -1 : 1, m = S * M, w = i - m, 
        g = n + m, p = t + b * f, x = e - h * f, k = r0_mix(p, x, .5 - c), _ = r0_mix(p, x, .5 + c), 
        z = r0_mix(w, g, .5 - c), y = r0_mix(w, g, .5 + c), new r0_Stroke()["set-transform"](r)["start-from"](p, i - b * v)["set-width"](b, b)["curve-to"](p, w, k, z)["set-width"](l, l)["line-to"](_, y)["curve-to"](x, g, x, n + h * v)["set-width"](h, h)["to-outline"]();
    }, Ct = function(t, i, e) {
        var t, i, e;
        return Bt(g, t, C, i, B, B, B, e, .4 * H);
    }, Nt = function(t, i, e, n, o, d, s, c) {
        var t, i, e, n, o, d, s, c, b, h, l, v, f, m, w, g, p, x, k, _, z, y, M, A, j, O, q, I, P, F, G, W, C, N, D, J, T, E, H, L, R, K, Q, U;
        return w = t, g = B, p = e > t ? 1 : -1, x = g * p, b = w + x, h = .5 * (c || S), 
        l = r0_mix(i, n, o), v = r0_mix(l, n, s), f = r0_mix(b, e, d), m = r0_mix(v, n, d), 
        k = new r0_Stroke()["set-transform"](r)["start-from"](b, i)["set-width"](B, B), 
        _ = k["heads-to"], z = n > i ? a : u, y = _.call(k, z), M = y["line-to"], A = b, 
        j = l, O = M.call(y, A, j), q = O["heads-to"], I = n > i ? a : u, P = q.call(O, I), 
        F = P["curve-to"], G = b, W = v, C = f, N = m, D = F.call(P, G, W, C, N), J = D["set-width"], 
        T = h, E = h, H = J.call(D, T, E), L = H["line-to"], R = e, K = n, Q = L.call(H, R, K), 
        U = Q["to-outline"], U.call(Q);
    }, Dt = function(t, i, e, n, o, d, r) {
        var t, i, e, n, o, d, r, s, a;
        return s = r0_mix(t, e, .5), a = r0_mix(i, n, .5), Nt(t, i, s, a, o, d, r).concat(Nt(e, n, s, a, o, d, r));
    }, Jt = function(t, i, e, n) {
        var t, i, e, n, o, d;
        return o = new r0_Stroke()["set-transform"](r)["start-from"](e, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](e, f - K)["arc-vh-to"](i, G)["heads-to"](b)["to-outline"](), 
        d = new r0_Stroke()["set-transform"](r)["start-from"](i, G - S)["set-width"](0, S)["heads-to"](b)["arc-hv-to"](t, f - R)["heads-to"](u)["set-width"](0, n)["to-outline"](), 
        o.concat(d);
    }, Tt = function(t, i, e, n) {
        var t, i, e, n, o;
        return o = n || N, new r0_Stroke()["set-transform"](r)["start-from"](C - w, t - e)["set-width"](S, 0)["curve-to"](r0_mix(o, C, tt), t - m, o, t - m)["heads-to"](b)["arc-hv-to"](g, t - i)["to-outline"]();
    }, Et = function(t, i, e, n) {
        var t, i, e, n, o;
        return o = n || N, new r0_Stroke()["set-transform"](r)["start-from"](g + w, t - e)["set-width"](0, S)["curve-to"](r0_mix(o, g, tt), t - m, o, t - m)["heads-to"](c)["arc-hv-to"](C, t - i)["to-outline"]();
    }, Ht = function(t, i, e, n) {
        var t, i, e, n, o;
        return o = n || N, new r0_Stroke()["set-transform"](r)["start-from"](C, i)["set-width"](0, S)["arc-vh-to"](o, t + m)["heads-to"](b)["curve-to"](r0_mix(o, g, tt), t + m, g + w, t + e)["to-outline"]();
    }, Lt = function(t, i, e, n) {
        var t, i, e, n, o, d, s;
        return o = (e + n) / 2, t - i > R + K ? new r0_Stroke()["set-transform"](r)["start-from"](o, t - m)["set-width"](S, 0)["heads-to"](b)["arc-hv-to"](e + m, t - R)["line-to"](e + m, i + K)["arc-vh-to"](o, i + m)["heads-to"](c)["arc-hv-to"](n - m, i + R)["line-to"](n - m, t - K)["arc-vh-to"](o, t - m)["heads-to"](b)["to-outline"]() : (d = (t - R + i + K) / 2, 
        s = (t - K + i + R) / 2, new r0_Stroke()["set-transform"](r)["start-from"](o, t - m)["set-width"](S, 0)["heads-to"](b)["arc-hv-to"](e + m, d)["arc-vh-to"](o, i + m)["heads-to"](c)["arc-hv-to"](n - m, s)["arc-vh-to"](o, t - m)["heads-to"](b)["to-outline"]());
    }, Rt = function(t, i, e, n) {
        var t, i, e, n, o;
        return o = (n || S) / 2, new r0_Stroke()["set-transform"](r)["start-from"](t, e)["heads-to"](c)["set-width"](o, o)["line-to"](i, e)["heads-to"](c)["to-outline"]();
    }, Kt = function(t, i, e, n) {
        var t, i, e, n, o, d, s, c, b, h, l, v, f, m, w, g, p, x, k, _, z;
        return o = (n || S) / 2, d = new r0_Stroke()["set-transform"](r)["start-from"](t, i), 
        s = d["heads-to"], c = e > i ? a : u, b = s.call(d, c), h = b["set-width"], l = o, 
        v = o, f = h.call(b, l, v), m = f["line-to"], w = t, g = e, p = m.call(f, w, g), 
        x = p["heads-to"], k = e > i ? a : u, _ = x.call(p, k), z = _["to-outline"], z.call(_);
    }, Qt = .5 * F, Ut = .5 * Math.min(S, .6 * P), Vt = .8 * Ut, Xt = r0_mix(Vt, Ut, .5), 
    Yt = -N, Zt = T * Ut / B, $t = f + 1.375 * P, ti = f + .35 * P, ii = 0 - 1.375 * P, 
    ei = 0 - .35 * P, At("dotAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(0), e(775), v("above", vt, Yt, f, Yt, $t), void u([ qt(f + P + T, f + P - T, Yt - T, Yt + T) ]);
    }), At("dieresisAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(0), e(776), v("above", vt, Yt, f, Yt, $t), void u([ qt(f + P + Zt, f + P - Zt, Yt - Zt - Qt, Yt + Zt - Qt), qt(f + P + Zt, f + P - Zt, Yt - Zt + Qt, Yt + Zt + Qt) ]);
    }), At("ringAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        a = g["cubic-to"].bind(g), u = g["put-shapes"].bind(g), c = g["reverse-last"].bind(g), 
        b = g.include.bind(g), h = g["create-stroke"].bind(g), v = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(0), e(778), v("above", vt, Yt, f, Yt, $t), m = 1.5 * T, 
        w = .7 * T, u([ qt(f + P + m, f + P - m, Yt - m, Yt + m), qt(f + P + w, f + P - w, Yt - w, Yt + w) ]), 
        void c();
    }), At("graveAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(0), e(768), v("above", vt, Yt, f, Yt, $t), void u(h()["start-from"](Yt + Ut, ti)["set-width"](Vt, Vt)["line-to"](Yt - Qt, $t)["set-width"](Ut, Ut)["to-outline"]());
    }), At("acuteAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(0), e(769), v("above", vt, Yt, f, Yt, $t), void u(h()["start-from"](Yt - Ut, ti)["set-width"](Vt, Vt)["line-to"](Yt + Qt, $t)["set-width"](Ut, Ut)["to-outline"]());
    }), At("circumflexAbove", function() {
        var t, i, e, n, o, s, u, c, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(0), e(770), m("above", vt, Yt, f, Yt, $t), c(v()["start-from"](Yt - Qt - Ut, ti + Ut - Vt)["set-width"](Ut, Ut)["line-to"](Yt, $t + .7 * Vt)["heads-to"](a)["to-outline"](0, 0, 1)), 
        void c(v()["start-from"](Yt + Qt + Ut, ti + Ut - Vt)["set-width"](Ut, Ut)["line-to"](Yt, $t + .7 * Vt)["heads-to"](a)["to-outline"](0, 0, 1));
    }), At("caronAbove", function() {
        var t, i, e, n, o, s, a, c, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        a = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(0), e(780), m("above", vt, Yt, f, Yt, $t), c(v()["start-from"](Yt - Qt - Ut, $t)["set-width"](Ut, Ut)["line-to"](Yt, ti - 1.7 * Vt + Ut)["heads-to"](u)["to-outline"](0, 0, 1)), 
        void c(v()["start-from"](Yt + Qt + Ut, $t)["set-width"](Ut, Ut)["line-to"](Yt, ti - 1.7 * Vt + Ut)["heads-to"](u)["to-outline"](0, 0, 1));
    }), At("tildeAbove", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m, w, g, p, x, k, _, z, y, S;
        return S = this, t = S, i = S["set-width"].bind(S), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = S["start-from"].bind(S), o = S["line-to"].bind(S), s = S["curve-to"].bind(S), 
        a = S["cubic-to"].bind(S), u = S["put-shapes"].bind(S), c = S["reverse-last"].bind(S), 
        b = S.include.bind(S), h = S["create-stroke"].bind(S), v = S["set-anchor"].bind(S), 
        S.gizmo = r, S["set-width"](l), i(0), e(771), v("above", vt, Yt, f, Yt, $t), m = Yt - 1.5 * Qt, 
        w = Yt + 1.5 * Qt, g = $t, p = ti + Vt / 2, x = g + 2 * Vt, k = p - 2 * Vt, _ = r0_linreg(40, 1.52, 52, 1.33, Ut), 
        z = .52, y = 0, void u(h()["start-from"](m, r0_mix(p, g, y))["set-width"](Ut, Ut)["cubic-to"](r0_mix(m, w, z), r0_mix(k, x, _), r0_mix(m, w, 1 - z), r0_mix(k, x, 1 - _), w, r0_mix(p, g, 1 - y))["to-outline"](0, 0, 11));
    }), At("macronAbove", function() {
        var t, i, e, n, o, s, a, u, b, h, v, m, w, g, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), v = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(0), e(772), m("above", vt, Yt, f, Yt, $t), w = Yt - 1.5 * Qt, 
        g = Yt + 1.5 * Qt, void u(v()["start-from"](w, $t - T)["set-width"](Xt, Xt)["heads-to"](c)["line-to"](g, $t - T)["heads-to"](c)["to-outline"]());
    }), At("dotBelow", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f;
        return f = this, t = f, i = f["set-width"].bind(f), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = f["start-from"].bind(f), o = f["line-to"].bind(f), s = f["curve-to"].bind(f), 
        a = f["cubic-to"].bind(f), u = f["put-shapes"].bind(f), c = f["reverse-last"].bind(f), 
        b = f.include.bind(f), h = f["create-stroke"].bind(f), v = f["set-anchor"].bind(f), 
        f.gizmo = r, f["set-width"](l), i(0), e(803), v("below", vt, Yt, 0, Yt, ii), void u([ qt(0 - P + T, 0 - P - T, Yt - T, Yt + T) ]);
    }), At("A", function() {
        var t, i, e, n, o, s, u, b, h, m, w, p, x, k, _, z, y;
        return y = this, t = y, i = y["set-width"].bind(y), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = y["start-from"].bind(y), o = y["line-to"].bind(y), s = y["curve-to"].bind(y), 
        u = y["cubic-to"].bind(y), b = y["put-shapes"].bind(y), h = y["reverse-last"].bind(y), 
        m = y.include.bind(y), w = y["create-stroke"].bind(y), p = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), i(l), e("A"), m(kt), x = .1 * f, k = w(), k["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, x)["heads-to"](a)["curve-to"](g, x + .27 * (v - x), N - S / 2, v)["set-width"](0, .8 * S), 
        _ = w(), _["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, x)["heads-to"](a)["curve-to"](C, x + .27 * (v - x), N + S / 2, v)["set-width"](.8 * S, 0), 
        z = w()["start-from"](g + S, f / 2)["heads-to"](c)["set-width"](0, S)["line-to"](C - S, f / 2)["heads-to"](c), 
        b(k["to-outline"]()), b(z["to-outline"]()), b(_["to-outline"]()), n(N - S / 2, v), 
        o(N + S / 2, v), void o(N, v - S);
    }), At("V", function() {
        var t, i, e, n, o, s, a, c, b, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), c = k["put-shapes"].bind(k), b = k["reverse-last"].bind(k), 
        h = k.include.bind(k), f = k["create-stroke"].bind(k), m = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("V"), h(kt), w = .9 * v, p = f(), p["start-from"](g, v)["heads-to"](u)["set-width"](S, 0)["line-to"](g, w)["heads-to"](u)["curve-to"](g, .73 * w, N - S / 2, 0)["set-width"](.8 * S, 0), 
        x = f(), x["start-from"](C, v)["heads-to"](u)["set-width"](0, S)["line-to"](C, w)["heads-to"](u)["curve-to"](C, .73 * w, N + S / 2, 0)["set-width"](0, .8 * S), 
        c(p["to-outline"]()), c(x["to-outline"]()), n(N + S / 2, 0), o(N - S / 2, 0), void o(N, S);
    }), At("W", function() {
        var t, i, e, n, o, s, a, c, b, h, f, m, w, p, x, k, _, z, y;
        return y = this, t = y, i = y["set-width"].bind(y), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = y["start-from"].bind(y), o = y["line-to"].bind(y), s = y["curve-to"].bind(y), 
        a = y["cubic-to"].bind(y), c = y["put-shapes"].bind(y), b = y["reverse-last"].bind(y), 
        h = y.include.bind(y), f = y["create-stroke"].bind(y), m = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), i(l), e("W"), h(kt), w = .75 * v, p = .59 * v, x = .6 * v, 
        k = Math.min(.8 * S, .175 * (l - 2 * g)), _ = .3 * l, z = .7 * l, c(f()["start-from"](g, v)["heads-to"](u)["set-width"](S, 0)["line-to"](g, w)["heads-to"](u)["curve-to"](g, .73 * w, _ - k / 2, 0)["set-width"](k, 0)["to-outline"]()), 
        c(f()["start-from"](C, v)["heads-to"](u)["set-width"](0, S)["line-to"](C, w)["heads-to"](u)["curve-to"](C, .73 * w, z + k / 2, 0)["set-width"](0, k)["to-outline"]()), 
        c(f()["start-from"](N + k / 2, x)["heads-to"](u)["set-width"](0, k)["line-to"](N + k / 2, p)["heads-to"](u)["curve-to"](N + k / 2, .9 * p, _ + k / 2, 0)["set-width"](0, k)["to-outline"]()), 
        c(f()["start-from"](N - k / 2, x)["heads-to"](u)["set-width"](k, 0)["line-to"](N - k / 2, p)["heads-to"](u)["curve-to"](N - k / 2, .9 * p, z - k / 2, 0)["set-width"](k, 0)["to-outline"]()), 
        n(_ + k / 2, 0), o(_ - k / 2, 0), o(_, k), n(z + k / 2, 0), o(z - k / 2, 0), void o(z, k);
    }), At("X", function() {
        var t, i, e, n, o, s, a, u, c, b, h, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("X"), b(kt), u(Dt(g, 0, C, v, .1, .4, .28)), 
        void u(Dt(g, v, C, 0, .1, .4, .28));
    }), At("Y", function() {
        var t, i, e, n, o, s, u, c, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), c = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), f = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("Y"), h(kt), w = .4 * v, c(Nt(g, v, N, w, .1, .4, .28)), 
        c(Nt(C, v, N, w, .1, .4, .28)), void c(f()["start-from"](N, 0)["set-width"](B, B)["heads-to"](a)["line-to"](N, w + B)["heads-to"](a)["to-outline"]());
    }), At("K", function() {
        var t, i, e, n, o, s, c, b, h, w, p, x, k, _, z, y, M;
        return M = this, t = M, i = M["set-width"].bind(M), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = M["start-from"].bind(M), o = M["line-to"].bind(M), s = M["curve-to"].bind(M), 
        c = M["cubic-to"].bind(M), b = M["put-shapes"].bind(M), h = M["reverse-last"].bind(M), 
        w = M.include.bind(M), p = M["create-stroke"].bind(M), x = M["set-anchor"].bind(M), 
        M.gizmo = r, M["set-width"](l), i(l), e("K"), w(kt), k = .95 * v, _ = .1 * f, z = C - m, 
        y = Math.min(S, .25 * (l - 2 * g)), b(p()["start-from"](g, 0)["set-width"](0, S)["heads-to"](a)["line-to"](g, v)["heads-to"](a)["to-outline"]()), 
        b(p()["start-from"](C, v)["heads-to"](u)["set-width"](0, S)["line-to"](C, k)["heads-to"](u)["curve-to"](C, (1 - .18) * k, g + S, .35 * v)["set-width"](0, y)["to-outline"]()), 
        void b(p()["start-from"](z - B, 0)["heads-to"](a)["set-width"](B, B)["curve-to"](z - B, _ + .2 * (f - _), N, D + B)["set-width"](y / 2, y / 2)["to-outline"]());
    }), At("B", function() {
        var t, i, e, n, o, s, u, h, f, m, w, p, x, k, _, z, y, M, A, j, O;
        return O = this, t = O, i = O["set-width"].bind(O), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = O["start-from"].bind(O), o = O["line-to"].bind(O), s = O["curve-to"].bind(O), 
        u = O["cubic-to"].bind(O), h = O["put-shapes"].bind(O), f = O["reverse-last"].bind(O), 
        m = O.include.bind(O), w = O["create-stroke"].bind(O), p = O["set-anchor"].bind(O), 
        O.gizmo = r, O["set-width"](l), i(l), e("B"), m(kt), x = 451, k = X - .22, _ = X - .2, 
        z = (v + (x - S)) / 2, y = x / 2, M = w(), M["start-from"](g, v)["heads-to"](c)["line-to"](C - .5 * g - y, v)["cubic-to"](C - .5 * g - k * y, v, C - .5 * g, z + (v - z) * V, C - .5 * g, z)["cubic-to"](C - .5 * g, z + V * (x - S - z), C - .5 * g - k * y, x - S, C - .5 * g - y, x - S)["line-to"](g, x - S)["heads-to"](b), 
        A = w(), A["start-from"](g, 0)["heads-to"](c)["line-to"](C - y, 0)["cubic-to"](C - _ * y, 0, C, y * V, C, y)["cubic-to"](C, y + V * (x - y), C - _ * y, x, C - y, x)["line-to"](g, x)["heads-to"](b), 
        j = w()["start-from"](g, 0)["heads-to"](a)["line-to"](g, v)["heads-to"](a), h(M["to-outline"](0, S)), 
        h(A["to-outline"](S, 0)), void h(j["to-outline"](0, S));
    }), At("D", function() {
        var t, i, e, n, o, s, u, h, f, m, w, p, x, k, _, y, M;
        return M = this, t = M, i = M["set-width"].bind(M), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = M["start-from"].bind(M), o = M["line-to"].bind(M), s = M["curve-to"].bind(M), 
        u = M["cubic-to"].bind(M), h = M["put-shapes"].bind(M), f = M["reverse-last"].bind(M), 
        m = M.include.bind(M), w = M["create-stroke"].bind(M), p = M["set-anchor"].bind(M), 
        M.gizmo = r, M["set-width"](l), i(l), e("D"), m(kt), x = 1.35 * z, k = 1.1 * z, 
        _ = w()["start-from"](g, 0)["heads-to"](a)["line-to"](g, v)["heads-to"](a), y = w(), 
        y["start-from"](g, 0)["heads-to"](c)["line-to"](C - k, 0)["cubic-to"](C - Y * k, 0, C, $ * x, C, x)["line-to"](C, v - x)["cubic-to"](C, v - $ * x, C - Y * k, v, C - k, v)["line-to"](g, v)["heads-to"](b), 
        h(y["to-outline"](S, 0)), void h(_["to-outline"](0, S));
    }), At("P", function() {
        var t, i, e, n, o, s, u, h, f, w, p, x, k, _, z, y, M, A, j;
        return j = this, t = j, i = j["set-width"].bind(j), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = j["start-from"].bind(j), o = j["line-to"].bind(j), s = j["curve-to"].bind(j), 
        u = j["cubic-to"].bind(j), h = j["put-shapes"].bind(j), f = j["reverse-last"].bind(j), 
        w = j.include.bind(j), p = j["create-stroke"].bind(j), x = j["set-anchor"].bind(j), 
        j.gizmo = r, j["set-width"](l), i(l), e("P"), w(kt), k = D, _ = X - .2, z = (v + (k - B)) / 2, 
        y = k / 2, M = p()["start-from"](1.25 * g, v)["heads-to"](c)["line-to"](C - y, v)["arc-hv-to"](C - m, z)["arc-vh-to"](C - y, k - B)["line-to"](1.25 * g, k - B)["heads-to"](b), 
        A = p()["start-from"](1.25 * g, 0)["heads-to"](a)["line-to"](1.25 * g, v)["heads-to"](a), 
        h(M["to-outline"](0, S)), void h(A["to-outline"](0, S));
    }), At("R", function() {
        var t, i, e, n, s, u, c, b, h, v, w, g, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), s = k["line-to"].bind(k), u = k["curve-to"].bind(k), 
        c = k["cubic-to"].bind(k), b = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        v = k.include.bind(k), w = k["create-stroke"].bind(k), g = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("R"), v(o.P, !0), p = .1 * f, x = C - m, 
        void b(w()["start-from"](x - B, 0)["heads-to"](a)["set-width"](B, B)["curve-to"](x - B, p + .2 * (f - p), N, D)["to-outline"]());
    }), At("C", function() {
        var i, e, n, o, s, a, u, h, f, x, k, _, z, y;
        return y = this, i = y, e = y["set-width"].bind(y), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, o = y["start-from"].bind(y), s = y["line-to"].bind(y), a = y["curve-to"].bind(y), 
        u = y["cubic-to"].bind(y), h = y["put-shapes"].bind(y), f = y["reverse-last"].bind(y), 
        x = y.include.bind(y), k = y["create-stroke"].bind(y), _ = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), e(l), n("C"), x(kt), z = k(), z["start-from"](C - w, v - p)["curve-to"](N + tt * (N - t.sb), W, N, W)["heads-to"](b)["arc-hv-to"](g, v - H)["line-to"](g, L)["arc-vh-to"](N, m)["heads-to"](c)["curve-to"](N + Q + tt * (N - g), m, C - w, p), 
        void h(z["to-outline"](S, 0));
    }), At("G", function() {
        var i, e, n, o, s, u, h, f, x, k, _, z, y, M, A;
        return A = this, i = A, e = A["set-width"].bind(A), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, o = A["start-from"].bind(A), s = A["line-to"].bind(A), u = A["curve-to"].bind(A), 
        h = A["cubic-to"].bind(A), f = A["put-shapes"].bind(A), x = A["reverse-last"].bind(A), 
        k = A.include.bind(A), _ = A["create-stroke"].bind(A), z = A["set-anchor"].bind(A), 
        A.gizmo = r, A["set-width"](l), e(l), n("G"), k(kt), y = _(), y["start-from"](C - w, v - p)["curve-to"](N + tt * (N - t.sb), W, N, W)["heads-to"](b)["arc-hv-to"](g, v - H)["line-to"](g, L)["arc-vh-to"](N, m)["heads-to"](c)["arc-hv-to"](C, H)["line-to"](C, v / 2 + S / 2)["heads-to"](a), 
        f(y["to-outline"](S, 0)), M = _()["start-from"](N, v / 2 + S / 2)["line-to"](C, v / 2 + S / 2)["heads-to"](c), 
        void f(M["to-outline"](0, S));
    }), At("O", function() {
        var t, i, e, n, o, s, a, u, h, f, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), u = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), w = k["create-stroke"].bind(k), p = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("O"), f(kt), x = w(), x["start-from"](N, W)["heads-to"](b)["arc-hv-to"](g, v - H)["line-to"](g, L)["arc-vh-to"](N, m)["heads-to"](c)["arc-hv-to"](C, H)["line-to"](C, v - L)["arc-vh-to"](N, W)["heads-to"](b), 
        void u(x["to-outline"](S, 0));
    }), At("Q", function() {
        var t, i, e, n, s, a, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("Q"), h(o.O, !0), n(N, 0), s(N + S / 2, .2 * -v), 
        s(N + S / 2 + S, .2 * -v), s(N + S, 0), s(N + S * (1 - .5 / 3), .5 * S), void b();
    }), At("U", function() {
        var t, i, e, n, o, s, b, h, f, w, p, x, k, _;
        return _ = this, t = _, i = _["set-width"].bind(_), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = _["start-from"].bind(_), o = _["line-to"].bind(_), s = _["curve-to"].bind(_), 
        b = _["cubic-to"].bind(_), h = _["put-shapes"].bind(_), f = _["reverse-last"].bind(_), 
        w = _.include.bind(_), p = _["create-stroke"].bind(_), x = _["set-anchor"].bind(_), 
        _.gizmo = r, _["set-width"](l), i(l), e("U"), w(kt), k = p(), k["start-from"](g, v)["heads-to"](u)["line-to"](g, L)["arc-vh-to"](N, m)["heads-to"](c)["arc-hv-to"](C, H)["line-to"](C, v)["heads-to"](a), 
        void h(k["to-outline"](S, 0));
    }), At("F", function() {
        var t, i, e, n, o, s, u, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("F"), f(kt), b(m()["start-from"](1.5 * g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](1.5 * g, v)["heads-to"](a)["to-outline"]()), 
        b(m()["start-from"](1.5 * g, v)["set-width"](0, S)["heads-to"](c)["line-to"](C, v)["heads-to"](c)["to-outline"]()), 
        void b(m()["start-from"](1.5 * g, .54 * v)["set-width"](B, B)["heads-to"](c)["line-to"](C - B, .54 * v)["heads-to"](c)["to-outline"]());
    }), At("E", function() {
        var t, i, e, n, s, a, u, b, h, v, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("E"), v(o.F, !0), void b(f()["start-from"](1.5 * g, 0)["set-width"](S, 0)["heads-to"](c)["line-to"](C, 0)["heads-to"](c)["to-outline"]());
    }), At("H", function() {
        var t, i, e, n, o, s, u, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("H"), f(kt), b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, v)["heads-to"](a)["to-outline"]()), 
        b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, v)["heads-to"](a)["to-outline"]()), 
        void b(m()["start-from"](g, v / 2)["set-width"](B, B)["heads-to"](c)["line-to"](C, v / 2)["heads-to"](c)["to-outline"]());
    }), At("L", function() {
        var t, i, e, n, o, s, a, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("L"), f(kt), b(m()["start-from"](1.5 * g, v)["set-width"](S, 0)["heads-to"](u)["line-to"](1.5 * g, 0)["heads-to"](u)["to-outline"]()), 
        void b(m()["start-from"](1.5 * g, 0)["set-width"](S, 0)["heads-to"](c)["line-to"](C, 0)["heads-to"](c)["to-outline"]());
    }), At("dotlessI.straight", function() {
        var t, i, e, n, o, s, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), void c(f()["start-from"](N, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N, v)["heads-to"](a)["to-outline"]());
    }), At("dotlessI.symmetric", function() {
        var t, i, e, n, s, a, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(o["dotlessI.straight"]), c(f()["start-from"](N - .26 * l - S * r.yx, v)["set-width"](0, S)["line-to"](N + .26 * l - S * r.yx, v)["to-outline"]()), 
        void c(f()["start-from"](N - .26 * l + S * r.yx, 0)["set-width"](S, 0)["line-to"](N + .26 * l + S * r.yx, 0)["to-outline"]());
    }), At("I", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("I"), h(kt), void h(o["dotlessI.symmetric"]);
    }), At("T", function() {
        var t, i, e, n, o, s, u, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("T"), f(kt), b(m()["start-from"](N, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N, v)["heads-to"](a)["to-outline"]()), 
        void b(m()["start-from"](g, v)["heads-to"](c)["set-width"](0, S)["line-to"](C, v)["heads-to"](c)["to-outline"]());
    }), At("Z", function() {
        var t, i, e, n, o, s, a, u, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), f = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("Z"), h(kt), w = 1.15, u(f()["start-from"](g, v)["heads-to"](c)["set-width"](0, S)["line-to"](C, v)["heads-to"](c)["to-outline"]()), 
        u(f()["start-from"](g, 0)["heads-to"](c)["set-width"](S, 0)["line-to"](C, 0)["heads-to"](c)["to-outline"]()), 
        n(g, S), o(g + S * w, S), o(C, v - S), o(C - S * w, v - S), void b();
    }), At("J.straight", function() {
        var t, i, e, n, o, s, a, c, h, f, x, k, _, z, y, M, A, j, O;
        return O = this, t = O, i = O["set-width"].bind(O), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = O["start-from"].bind(O), o = O["line-to"].bind(O), s = O["curve-to"].bind(O), 
        a = O["cubic-to"].bind(O), c = O["put-shapes"].bind(O), h = O["reverse-last"].bind(O), 
        f = O.include.bind(O), x = O["create-stroke"].bind(O), k = O["set-anchor"].bind(O), 
        O.gizmo = r, O["set-width"](l), i(l), f(kt), _ = 92e-5 * S, z = .35, y = (1 - z) / 2, 
        M = tt, A = p + .75 * S, j = .5 * g + w, void c(x()["start-from"](C - ut, v)["set-width"](0, S)["heads-to"](u)["line-to"](C - ut, A)["arc-vh-to"](r0_mix(j, C - ut, .5), m)["heads-to"](b)["curve-to"](N - M * (N - g) - .5 * g, m, j, p)["to-outline"]());
    }), At("J.serifed", function() {
        var t, i, e, n, s, a, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), h(o["J.straight"], lt), void c(Pt(C - B - ut, v, I));
    }), jt("J", "J", "serifed"), At("N", function() {
        var t, i, e, n, o, s, c, b, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        c = k["cubic-to"].bind(k), b = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("N"), f(kt), p = Math.min(S, .24 * (l - 2 * g)), 
        x = p / 2, b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, .4 * v)["heads-to"](a)["line-to"](g, v)["heads-to"](a)["set-width"](0, p)["to-outline"]()), 
        b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](p, 0)["line-to"](C, .6 * v)["heads-to"](a)["set-width"](S, 0)["line-to"](C, v)["heads-to"](a)["to-outline"]()), 
        void b(m()["start-from"](g + x, v)["heads-to"](u)["set-width"](p, 0)["line-to"](C - p - x, 0)["heads-to"](u)["to-outline"]());
    }), At("M", function() {
        var t, i, e, n, o, s, c, b, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        c = k["cubic-to"].bind(k), b = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("M"), f(kt), p = Math.min(S, .175 * (l - 2 * g)), 
        x = p / 2, b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, .2 * v)["heads-to"](a)["line-to"](g, v)["heads-to"](a)["set-width"](0, p)["to-outline"]()), 
        b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, .2 * v)["heads-to"](a)["line-to"](C, v)["heads-to"](a)["set-width"](p, 0)["to-outline"]()), 
        b(m()["start-from"](g + x, v)["heads-to"](u)["set-width"](p, 0)["line-to"](N - x, .3 * v)["heads-to"](u)["to-outline"]()), 
        void b(m()["start-from"](N + x, .3 * v)["heads-to"](a)["set-width"](p, 0)["line-to"](C - x, v)["heads-to"](a)["to-outline"]());
    }), At("S", function() {
        var t, i, e, n, o, s, a, u, c, b, h, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("S"), b(kt), u(Tt(v, H, p)), u(Ht(0, H, p)), 
        void u(Ct(v - H, H));
    }), At("fbar", function() {
        var t, i, e, n, o, s, a, u, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        a = w["cubic-to"].bind(w), u = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), void u(v()["start-from"](N - I, f)["heads-to"](c)["set-width"](0, S)["line-to"](N + I, f)["heads-to"](c)["to-outline"]());
    }), At("o", function() {
        var t, i, e, n, o, s, a, u, h, v, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), u = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        v = k.include.bind(k), w = k["create-stroke"].bind(k), p = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("o"), v(zt), x = w()["start-from"](N, G)["set-width"](S, 0)["heads-to"](b)["arc-hv-to"](g + m, f - R)["line-to"](g + m, K)["arc-vh-to"](N, m)["heads-to"](c)["arc-hv-to"](C - m, R)["line-to"](C - m, f - K)["arc-vh-to"](N, G)["heads-to"](b), 
        void u(x["to-outline"]());
    }), At("o.left", function() {
        var t, i, e, n, o, s, a, u, h, v, w, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), o = x["line-to"].bind(x), s = x["curve-to"].bind(x), 
        a = x["cubic-to"].bind(x), u = x["put-shapes"].bind(x), h = x["reverse-last"].bind(x), 
        v = x.include.bind(x), w = x["create-stroke"].bind(x), p = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), u(w()["start-from"](N, G)["heads-to"](c)["set-width"](0, S)["arc-hv-to"](C - m, f - K)["line-to"](C - m, R)["arc-vh-to"](N, m)["heads-to"](b)["to-outline"]()), 
        void u(w()["start-from"](N, m + S)["heads-to"](b)["set-width"](S, 0)["arc-hv-to"](g + S, K - .05 * S)["set-width"](B, 0)["line-to"](g + S, f - R + .05 * S)["set-width"](B, 0)["arc-vh-to"](N, G - S)["set-width"](S, 0)["heads-to"](c)["to-outline"]());
    }), At("o.right", function() {
        var t, i, e, n, o, s, a, u, h, v, w, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), o = x["line-to"].bind(x), s = x["curve-to"].bind(x), 
        a = x["cubic-to"].bind(x), u = x["put-shapes"].bind(x), h = x["reverse-last"].bind(x), 
        v = x.include.bind(x), w = x["create-stroke"].bind(x), p = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), u(w()["start-from"](N, G)["heads-to"](b)["set-width"](S, 0)["arc-hv-to"](g + m, f - R)["line-to"](g + m, K)["arc-vh-to"](N, m)["heads-to"](c)["to-outline"]()), 
        void u(w()["start-from"](N, m + S)["heads-to"](c)["set-width"](0, S)["arc-hv-to"](C - S, R - .05 * S)["set-width"](0, B)["line-to"](C - S, f - K + .05 * S)["set-width"](0, B)["arc-vh-to"](N, G - S)["set-width"](0, S)["heads-to"](b)["to-outline"]());
    }), At("p", function() {
        var t, i, e, n, s, a, c, b, v, m, w, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), s = x["line-to"].bind(x), a = x["curve-to"].bind(x), 
        c = x["cubic-to"].bind(x), b = x["put-shapes"].bind(x), v = x["reverse-last"].bind(x), 
        m = x.include.bind(x), w = x["create-stroke"].bind(x), p = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), e("p"), m(zt), m(o["o.left"]), void b(w()["start-from"](g, f)["heads-to"](u)["set-width"](S, 0)["line-to"](g, h)["heads-to"](u)["to-outline"]());
    }), At("b", function() {
        var t, i, e, n, s, u, c, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), s = p["line-to"].bind(p), u = p["curve-to"].bind(p), 
        c = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("b"), f(_t), b(o["o.left"].contours), void b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, v)["heads-to"](a)["to-outline"]());
    }), At("q", function() {
        var t, i, e, n, s, a, c, b, v, m, w, g, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), s = p["line-to"].bind(p), a = p["curve-to"].bind(p), 
        c = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), v = p["reverse-last"].bind(p), 
        m = p.include.bind(p), w = p["create-stroke"].bind(p), g = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("q"), m(zt), b(o["o.right"].contours), void b(w()["start-from"](C, f)["heads-to"](u)["set-width"](0, S)["line-to"](C, h)["heads-to"](u)["to-outline"]());
    }), At("d", function() {
        var t, i, e, n, s, u, c, b, h, f, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), s = g["line-to"].bind(g), u = g["curve-to"].bind(g), 
        c = g["cubic-to"].bind(g), b = g["put-shapes"].bind(g), h = g["reverse-last"].bind(g), 
        f = g.include.bind(g), m = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), e("d"), f(_t), b(o["o.right"].contours), void b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, v)["heads-to"](a)["to-outline"]());
    }), At("g", function() {
        var t, i, e, n, o, s, a, u, c, b, v, w, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), o = x["line-to"].bind(x), s = x["curve-to"].bind(x), 
        a = x["cubic-to"].bind(x), u = x["put-shapes"].bind(x), c = x["reverse-last"].bind(x), 
        b = x.include.bind(x), v = x["create-stroke"].bind(x), w = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), e("g"), b(yt), u([ qt(G, f * O, 1.25 * g, C - .25 * g, y), qt(G - S, f * O + S, 1.25 * g + S, C - .25 * g - S, y - S) ]), 
        c(), p = C - 4 * m, u(v()["start-from"](N, f * O)["set-width"](0, .75 * S)["arc-hv-to"](1.5 * g + S, .47 * (m - .85 * h + f * O))["set-width"](0, S)["arc-vh-to"](N + .15 * h, m - .85 * h)["line-to"](N - .15 * h, m - .85 * h)["arc-hv-to"](p, -S * r.yx * 2)["arc-vh-to"](r0_mix(g, p, .5), h + m)["arc-hv-to"](g, .1 * h)["arc-vh-to"](N + .15 * h, m - .85 * h)["to-outline"]()), 
        n(C + .5 * g, f), o(C + .5 * g, f - S), o(N, f - S - m), void o(N, f);
    }), At("c", function() {
        var i, e, n, o, s, a, u, h, v, x, k, _, z, y;
        return y = this, i = y, e = y["set-width"].bind(y), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, o = y["start-from"].bind(y), s = y["line-to"].bind(y), a = y["curve-to"].bind(y), 
        u = y["cubic-to"].bind(y), h = y["put-shapes"].bind(y), v = y["reverse-last"].bind(y), 
        x = y.include.bind(y), k = y["create-stroke"].bind(y), _ = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), e(l), n("c"), x(zt), z = k(), z["start-from"](C - w, f - p)["curve-to"](N + tt * (N - t.sb), G, N, G)["heads-to"](b)["arc-hv-to"](g + m, f - R)["line-to"](g + m, K)["arc-vh-to"](N, m)["heads-to"](c)["curve-to"](N + (tt + ot * r.yx) * (N - g), m, C - w + et * r.yx, p - nt * r.yx), 
        void h(z["to-outline"](S, 0));
    }), At("e.upright", function() {
        var t, i, e, n, o, s, u, h, v, p, x, _, z, y, M, A, j, O;
        return O = this, t = O, i = O["set-width"].bind(O), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = O["start-from"].bind(O), o = O["line-to"].bind(O), s = O["curve-to"].bind(O), 
        u = O["cubic-to"].bind(O), h = O["put-shapes"].bind(O), v = O["reverse-last"].bind(O), 
        p = O.include.bind(O), x = O["create-stroke"].bind(O), _ = O["set-anchor"].bind(O), 
        O.gizmo = r, O["set-width"](l), i(l), z = f * U, y = C - w + et * r.yx, M = r0_mix(g + m, y, .55), 
        A = x()["start-from"](C - m, z)["heads-to"](a)["set-width"](S, 0)["line-to"](C - m, f - K)["arc-vh-to"](N, G)["heads-to"](b)["arc-hv-to"](g + m, f - R)["line-to"](g + m, K)["arc-vh-to"](M, m)["heads-to"](c)["curve-to"](r0_mix(M, y, tt), m, y, k - nt * r.yx), 
        j = x()["start-from"](g + B, z)["set-width"](S, 0)["heads-to"](c)["line-to"](C - B, z)["heads-to"](c), 
        h(A["to-outline"]()), void h(j["to-outline"]());
    }), At("e.italic", function() {
        var t, i, e, n, o, s, a, u, h, v, x, k, _, z;
        return z = this, t = z, i = z["set-width"].bind(z), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = z["start-from"].bind(z), o = z["line-to"].bind(z), s = z["curve-to"].bind(z), 
        a = z["cubic-to"].bind(z), u = z["put-shapes"].bind(z), h = z["reverse-last"].bind(z), 
        v = z.include.bind(z), x = z["create-stroke"].bind(z), k = z["set-anchor"].bind(z), 
        z.gizmo = r, z["set-width"](l), i(l), _ = f * (j - .04), void u(x()["start-from"](g + m + S, _)["set-width"](S, 0)["arc-hv-to"](C - m, f - .95 * K)["arc-vh-to"](N, G)["heads-to"](b)["arc-hv-to"](g + m, f - R)["line-to"](g + m, K)["arc-vh-to"](N, m)["heads-to"](c)["curve-to"](N + (tt + ot * r.yx) * (N - g), m, C - w + et * r.yx, p - nt * r.yx)["to-outline"]());
    }), At("e", function() {
        var i, e, n, s, a, u, c, b, h, v, f, m, w;
        return w = this, i = w, e = w["set-width"].bind(w), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, s = w["start-from"].bind(w), a = w["line-to"].bind(w), u = w["curve-to"].bind(w), 
        c = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), e(l), n("e"), v(zt), void v(t.italicangle > 0 ? o["e.italic"] : o["e.upright"]);
    }), At("t", function() {
        var t, i, e, n, o, s, a, b, h, x, k, _, z, y, M, A, j;
        return j = this, t = j, i = j["set-width"].bind(j), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = j["start-from"].bind(j), o = j["line-to"].bind(j), s = j["curve-to"].bind(j), 
        a = j["cubic-to"].bind(j), b = j["put-shapes"].bind(j), h = j["reverse-last"].bind(j), 
        x = j.include.bind(j), k = j["create-stroke"].bind(j), _ = j["set-anchor"].bind(j), 
        j.gizmo = r, j["set-width"](l), i(l), e("t"), x(_t), z = N - ct - B, y = z + .78 * (l - 2 * g) - w + et * r.yx, 
        M = r0_mix(z, y, .5 + .5 * r.yx), A = M - z, b(k()["start-from"](z, v)["set-width"](S, 0)["heads-to"](u)["line-to"](z, A)["arc-vh-to"](M, m)["curve-to"](M + (tt + ot * r.yx + .1) * (y - M), m, y, p - nt * r.yx)["to-outline"]()), 
        void b(k()["start-from"](z + B - I + bt, f)["heads-to"](c)["set-width"](0, S)["line-to"](z + B + I + bt, f)["heads-to"](c)["to-outline"]());
    }), At("a.upright", function() {
        var t, i, e, n, o, s, u, h, v, p, k, _, z, y, M, A;
        return A = this, t = A, i = A["set-width"].bind(A), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = A["start-from"].bind(A), o = A["line-to"].bind(A), s = A["curve-to"].bind(A), 
        u = A["cubic-to"].bind(A), h = A["put-shapes"].bind(A), v = A["reverse-last"].bind(A), 
        p = A.include.bind(A), k = A["create-stroke"].bind(A), _ = A["set-anchor"].bind(A), 
        A.gizmo = r, A["set-width"](l), i(l), z = f * j + S, y = r0_mix(g, C - S, r0_linreg(80, .55, 120, .625, S)), 
        M = r0_mix(g, C, .6), h(k()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, f - H)["arc-vh-to"](N, G)["heads-to"](b)["curve-to"](N - tt * (N - g), G, g + w, f - x)["to-outline"]()), 
        h(k()["start-from"](y, m)["set-width"](0, S)["heads-to"](b)["arc-hv-to"](g + m, .45 * z)["arc-vh-to"](M, z)["line-to"](C, z)["heads-to"](c)["to-outline"]()), 
        void h(k()["start-from"](y, m + S)["set-width"](0, S)["heads-to"](c)["arc-hv-to"](C - S, .65 * R)["heads-to"](a)["set-width"](0, .4 * S)["to-outline"]());
    }), At("a.italic", function() {
        var t, i, e, n, s, u, c, b, h, v, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), s = g["line-to"].bind(g), u = g["curve-to"].bind(g), 
        c = g["cubic-to"].bind(g), b = g["put-shapes"].bind(g), h = g["reverse-last"].bind(g), 
        v = g.include.bind(g), m = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), v(o["o.right"]), void b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, f)["heads-to"](a)["to-outline"]());
    }), At("a", function() {
        var i, e, n, s, a, u, c, b, h, v, f, m, w;
        return w = this, i = w, e = w["set-width"].bind(w), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, s = w["start-from"].bind(w), a = w["line-to"].bind(w), u = w["curve-to"].bind(w), 
        c = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), e(l), n("a"), v(zt), void v(t.italicangle > 0 ? o["a.italic"] : o["a.upright"]);
    }), At("u", function() {
        var t, i, e, n, o, b, h, v, w, p, x, k, _;
        return _ = this, t = _, i = _["set-width"].bind(_), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = _["start-from"].bind(_), o = _["line-to"].bind(_), b = _["curve-to"].bind(_), 
        h = _["cubic-to"].bind(_), v = _["put-shapes"].bind(_), w = _["reverse-last"].bind(_), 
        p = _.include.bind(_), x = _["create-stroke"].bind(_), k = _["set-anchor"].bind(_), 
        _.gizmo = r, _["set-width"](l), i(l), e("u"), p(zt), v(x()["start-from"](g, f)["heads-to"](u)["set-width"](S, 0)["line-to"](g, R)["arc-vh-to"](N, m)["heads-to"](c)["to-outline"]()), 
        v(x()["start-from"](N, m + S)["set-width"](0, S)["heads-to"](c)["arc-hv-to"](C - S * s, R)["heads-to"](a)["set-width"](0, .4 * S)["to-outline"]()), 
        void v(x()["start-from"](C, 0)["heads-to"](a)["set-width"](S, 0)["line-to"](C, f)["heads-to"](a)["to-outline"]());
    }), At("n", function() {
        var t, i, e, n, o, u, c, b, h, v, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), u = p["curve-to"].bind(p), 
        c = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        v = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("n"), v(zt), b(Jt(g + S * s, N, C, .4 * S)), 
        void b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, f)["heads-to"](a)["to-outline"]());
    }), At("h", function() {
        var t, i, e, n, o, u, c, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), u = p["curve-to"].bind(p), 
        c = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("h"), f(_t), b(Jt(g + S * s, N, C, .4 * S)), 
        void b(m()["start-from"](g, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g, v)["heads-to"](a)["to-outline"]());
    }), At("m", function() {
        var t, i, e, n, o, s, c, h, v, w, p, x, k, _, z, y;
        return y = this, t = y, i = y["set-width"].bind(y), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = y["start-from"].bind(y), o = y["line-to"].bind(y), s = y["curve-to"].bind(y), 
        c = y["cubic-to"].bind(y), h = y["put-shapes"].bind(y), v = y["reverse-last"].bind(y), 
        w = y.include.bind(y), p = y["create-stroke"].bind(y), x = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), i(l), e("m"), w(zt), k = Math.min(S, .26 * (l - 2 * g)), 
        _ = (N + g + .25 * k) / 2, z = _ + (N - k / 2 - g), h(p()["start-from"](N - k / 2, 0)["set-width"](0, k)["heads-to"](a)["line-to"](N - k / 2, f - R)["arc-vh-to"](_, G - S)["set-width"](0, S)["heads-to"](b)["arc-hv-to"](g + .75 * k, f - R)["heads-to"](u)["set-width"](0, .4 * k)["to-outline"]()), 
        h(p()["start-from"](C - k - m, 0)["set-width"](0, k)["heads-to"](a)["line-to"](C - k - m, f - R)["arc-vh-to"](z, G - S)["set-width"](0, S)["heads-to"](b)["arc-hv-to"](N + .25 * k, f - R)["heads-to"](u)["set-width"](0, .4 * k)["to-outline"]()), 
        void h(p()["start-from"](g + m, 0)["heads-to"](a)["set-width"](0, k)["line-to"](g + m, f)["heads-to"](a)["to-outline"]());
    }), At("dotlessi.straight", function() {
        var t, i, e, n, o, s, u, c, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(zt), void c(v()["start-from"](N, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N, f)["heads-to"](a)["to-outline"]());
    }), At("dotlessi.hooky", function() {
        var t, i, e, n, s, a, u, c, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(o["dotlessi.straight"], !0), void c(Pt(N, f, I));
    }), At("dotlessi.zshaped", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), h(o["dotlessi.hooky"], !0), void c(Wt(N, 0, I));
    }), At("dotlessi.serifed", function() {
        var t, i, e, n, o, s, u, c, b, h, v, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        u = g["cubic-to"].bind(g), c = g["put-shapes"].bind(g), b = g["reverse-last"].bind(g), 
        h = g.include.bind(g), v = g["create-stroke"].bind(g), m = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), h(zt), w = at, c(v()["start-from"](N + w, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N + w, f)["heads-to"](a)["to-outline"]()), 
        c(Pt(N + w, f, I - w)), c(Wt(N, 0, I)), void c(Ft(N, 0, I));
    }), jt("dotlessi", 305, "serifed"), At("i", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("i"), h(o.dotlessi, lt), void h(o.dotAbove);
    }), At("dotlessj.straight", function() {
        var t, i, e, n, o, s, a, c, b, v, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        a = g["cubic-to"].bind(g), c = g["put-shapes"].bind(g), b = g["reverse-last"].bind(g), 
        v = g.include.bind(g), m = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), w("above", lt, N + ut, f), void c(m()["start-from"](N + ut, f)["heads-to"](u)["set-width"](B, B)["line-to"](N + ut, 0)["arc-vh-to"](N + h, h + B)["to-outline"]());
    }), At("dotlessj.serifed", function() {
        var t, i, e, n, s, a, u, c, b, h, v, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), v = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(o["dotlessj.straight"], lt), void c(Pt(N + ut, f, I));
    }), jt("dotlessj", 567, "serifed"), At("j", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("j"), h(o.dotlessj, lt), void h(o.dotAbove);
    }), At("l.straight", function() {
        var t, i, e, n, o, s, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(_t), void c(f()["start-from"](N, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N, v)["heads-to"](a)["to-outline"]());
    }), At("l.hooky", function() {
        var t, i, e, n, s, a, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), s = w["line-to"].bind(w), a = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), h(_t), h(o["l.straight"]), void c(Pt(N, v, I));
    }), At("l.zshaped", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), h(_t), h(o["l.hooky"]), void c(Wt(N, 0, I));
    }), At("l.serifed", function() {
        var t, i, e, n, o, s, u, c, b, h, f, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        u = g["cubic-to"].bind(g), c = g["put-shapes"].bind(g), b = g["reverse-last"].bind(g), 
        h = g.include.bind(g), f = g["create-stroke"].bind(g), m = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), h(_t), w = at, c(f()["start-from"](N + w, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N + w, v)["heads-to"](a)["to-outline"]()), 
        c(Pt(N + w, v, I - w)), c(Wt(N, 0, I)), void c(Ft(N, 0, I));
    }), jt("l", "l", "serifed"), At("x", function() {
        var t, i, e, n, o, s, u, c, b, h, v, w, p, x, k, _;
        return _ = this, t = _, i = _["set-width"].bind(_), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = _["start-from"].bind(_), o = _["line-to"].bind(_), s = _["curve-to"].bind(_), 
        u = _["cubic-to"].bind(_), c = _["put-shapes"].bind(_), b = _["reverse-last"].bind(_), 
        h = _.include.bind(_), v = _["create-stroke"].bind(_), w = _["set-anchor"].bind(_), 
        _.gizmo = r, _["set-width"](l), i(l), e("x"), h(zt), p = .1 * f, x = v()["start-from"](g + B + m, 0)["heads-to"](a)["set-width"](B, B)["cubic-to"](g + B + m, p + .17 * (f - p), C - B - m, f - p - .17 * (f - p), C - B - m, f)["heads-to"](a), 
        k = v()["start-from"](C - B - m, 0)["heads-to"](a)["set-width"](B, B)["cubic-to"](C - B - m, p + .17 * (f - p), g + B + m, f - p - .17 * (f - p), g + B + m, f)["heads-to"](a), 
        c(x["to-outline"]()), void c(k["to-outline"]());
    }), At("v", function() {
        var t, i, e, n, o, s, a, c, b, h, v, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), c = k["put-shapes"].bind(k), b = k["reverse-last"].bind(k), 
        h = k.include.bind(k), v = k["create-stroke"].bind(k), m = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("v"), h(zt), w = .9 * f, p = v(), p["start-from"](g, f)["heads-to"](u)["set-width"](S, 0)["line-to"](g, w)["heads-to"](u)["curve-to"](g, .73 * w, N - S / 2, 0)["set-width"](.8 * S, 0), 
        x = v(), x["start-from"](C, f)["heads-to"](u)["set-width"](0, S)["line-to"](C, w)["heads-to"](u)["curve-to"](C, .73 * w, N + S / 2, 0)["set-width"](0, .8 * S), 
        c(p["to-outline"]()), c(x["to-outline"]()), n(N + S / 2, 0), o(N - S / 2, 0), void o(N, S);
    }), At("w", function() {
        var t, i, e, n, o, s, a, c, b, h, v, m, w, p, x, k, _, z, y;
        return y = this, t = y, i = y["set-width"].bind(y), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = y["start-from"].bind(y), o = y["line-to"].bind(y), s = y["curve-to"].bind(y), 
        a = y["cubic-to"].bind(y), c = y["put-shapes"].bind(y), b = y["reverse-last"].bind(y), 
        h = y.include.bind(y), v = y["create-stroke"].bind(y), m = y["set-anchor"].bind(y), 
        y.gizmo = r, y["set-width"](l), i(l), e("w"), h(zt), w = .75 * f, p = .59 * f, x = .6 * f, 
        k = Math.min(.8 * S, .175 * (l - 2 * g)), _ = .325 * l, z = .675 * l, c(v()["start-from"](g, f)["heads-to"](u)["set-width"](S, 0)["line-to"](g, w)["heads-to"](u)["curve-to"](g, .73 * w, _ - k / 2, 0)["set-width"](k, 0)["to-outline"]()), 
        c(v()["start-from"](C, f)["heads-to"](u)["set-width"](0, S)["line-to"](C, w)["heads-to"](u)["curve-to"](C, .73 * w, z + k / 2, 0)["set-width"](0, k)["to-outline"]()), 
        c(v()["start-from"](N + k / 2, x)["heads-to"](u)["set-width"](0, k)["line-to"](N + k / 2, p)["heads-to"](u)["curve-to"](N + k / 2, .9 * p, _ + k / 2, 0)["set-width"](0, k)["to-outline"]()), 
        c(v()["start-from"](N - k / 2, x)["heads-to"](u)["set-width"](k, 0)["line-to"](N - k / 2, p)["heads-to"](u)["curve-to"](N - k / 2, .9 * p, z - k / 2, 0)["set-width"](k, 0)["to-outline"]()), 
        n(_ + k / 2, 0), o(_ - k / 2, 0), o(_, k), n(z + k / 2, 0), o(z - k / 2, 0), void o(z, k);
    }), At("y.upright", function() {
        var t, i, e, n, o, s, a, u, c, b, v, m, w, p, x, k, _;
        return _ = this, t = _, i = _["set-width"].bind(_), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = _["start-from"].bind(_), o = _["line-to"].bind(_), s = _["curve-to"].bind(_), 
        a = _["cubic-to"].bind(_), u = _["put-shapes"].bind(_), c = _["reverse-last"].bind(_), 
        b = _.include.bind(_), v = _["create-stroke"].bind(_), m = _["set-anchor"].bind(_), 
        _.gizmo = r, _["set-width"](l), i(l), b(yt), w = r0_mix(g, C, .28), p = f / (f - h), 
        x = r0_mix(g, C, .51), k = r0_mix(0, f, .1 * p), u(Dt(w, h, C, f, .1, .6, .14)), 
        void u(Nt(g, f, x, k, .1 * p, .4, .14 * p));
    }), At("y.italic", function() {
        var t, i, e, n, o, s, u, c, b, v, w, p, x, k, _, z, y, S;
        return S = this, t = S, i = S["set-width"].bind(S), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = S["start-from"].bind(S), o = S["line-to"].bind(S), s = S["curve-to"].bind(S), 
        u = S["cubic-to"].bind(S), c = S["put-shapes"].bind(S), b = S["reverse-last"].bind(S), 
        v = S.include.bind(S), w = S["create-stroke"].bind(S), p = S["set-anchor"].bind(S), 
        S.gizmo = r, S["set-width"](l), i(l), v(yt), x = .1 * f, k = .15 * f, _ = .4 * l, 
        z = w()["start-from"](_, h)["heads-to"](a)["set-width"](B, B)["cubic-to"](_, x + .17 * (f - x), C - B - m, f - x - .17 * (f - x), C - B - m, f)["heads-to"](a), 
        y = w()["start-from"](N, k)["set-width"](B, B)["curve-to"](g + B + m, f - x - .17 * (f - x), g + B + m, f)["heads-to"](a), 
        c(z["to-outline"]()), void c(y["to-outline"]());
    }), At("y", function() {
        var i, e, n, s, a, u, c, b, h, v, f, m, w;
        return w = this, i = w, e = w["set-width"].bind(w), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, s = w["start-from"].bind(w), a = w["line-to"].bind(w), u = w["curve-to"].bind(w), 
        c = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), e(l), n("y"), void (t.italicangle > 0 ? v(o["y.italic"], !0) : v(o["y.upright"], !0));
    }), At("z", function() {
        var t, i, e, n, o, s, a, u, b, h, v, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), v = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("z"), h(zt), w = 1.2, u(v()["start-from"](g, f)["heads-to"](c)["set-width"](0, S)["line-to"](C, f)["heads-to"](c)["to-outline"]()), 
        u(v()["start-from"](g, 0)["heads-to"](c)["set-width"](S, 0)["line-to"](C, 0)["heads-to"](c)["to-outline"]()), 
        n(g, S), o(g + S * w, S), o(C, f - S), o(C - S * w, f - S), void b();
    }), At("k", function() {
        var t, i, e, n, o, s, c, b, h, w, p, x, k, _, z, y, M, A, j;
        return j = this, t = j, i = j["set-width"].bind(j), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = j["start-from"].bind(j), o = j["line-to"].bind(j), s = j["curve-to"].bind(j), 
        c = j["cubic-to"].bind(j), b = j["put-shapes"].bind(j), h = j["reverse-last"].bind(j), 
        w = j.include.bind(j), p = j["create-stroke"].bind(j), x = j["set-anchor"].bind(j), 
        j.gizmo = r, j["set-width"](l), i(l), e("k"), w(_t), k = .99 * f, _ = .1 * f, z = C - m, 
        y = .4 * f, M = N - .1 * l, A = Math.min(S, .25 * (l - 2 * g)), b(p()["start-from"](g, 0)["set-width"](0, S)["heads-to"](a)["line-to"](g, v)["heads-to"](a)["to-outline"]()), 
        b(p()["start-from"](C, f)["heads-to"](u)["set-width"](0, S)["line-to"](C, k)["heads-to"](u)["curve-to"](C, (1 - .18) * k, g + S, y)["set-width"](0, A)["to-outline"]()), 
        void b(p()["start-from"](z - B, 0)["heads-to"](a)["set-width"](B, B)["curve-to"](z - B, _ + .05 * (f - _), M, .5 * f + B)["set-width"](A / 2, A / 2)["to-outline"]());
    }), At("s", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("s"), b(zt), u(Tt(f, .87 * H, k)), u(Ht(0, .87 * H, k)), 
        void u(Ct(f - .87 * H, .87 * H, .2, .45));
    }), At("r", function() {
        var t, i, e, n, o, c, h, v, m, w, p, x, k, z, y, M, A, j;
        return j = this, t = j, i = j["set-width"].bind(j), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = j["start-from"].bind(j), o = j["line-to"].bind(j), c = j["curve-to"].bind(j), 
        h = j["cubic-to"].bind(j), v = j["put-shapes"].bind(j), m = j["reverse-last"].bind(j), 
        w = j.include.bind(j), p = j["create-stroke"].bind(j), x = j["set-anchor"].bind(j), 
        j.gizmo = r, j["set-width"](l), i(l), e("r"), w(zt), k = .015, z = .175, y = (1 - z) / 2, 
        M = C + ut / 2, A = r0_mix(g + ht + S, M - B, .5), v(p()["start-from"](M, f - _)["set-width"](S, 0)["curve-to"](r0_mix(A, M, it), G, A, G)["heads-to"](b)["to-outline"]()), 
        v(p()["start-from"](A, G - S)["set-width"](0, S)["heads-to"](b)["arc-hv-to"](g + S * s + ht, f - R)["heads-to"](u)["set-width"](0, .3 * S)["to-outline"]()), 
        void v(p()["start-from"](g + ht, 0)["heads-to"](a)["set-width"](0, S)["line-to"](g + ht, f)["heads-to"](a)["to-outline"]());
    }), At("f.upright", function() {
        var t, i, e, n, s, u, b, h, f, w, g, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), s = x["line-to"].bind(x), u = x["curve-to"].bind(x), 
        b = x["cubic-to"].bind(x), h = x["put-shapes"].bind(x), f = x["reverse-last"].bind(x), 
        w = x.include.bind(x), g = x["create-stroke"].bind(x), p = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), w(_t), h(g()["start-from"](N, 0)["heads-to"](a)["set-width"](B, B)["line-to"](N, v - 1.4 * k)["arc-vh-to"](N + 2 * k, v - B - 6 * m)["heads-to"](c)["to-outline"]()), 
        void w(o.fbar);
    }), At("f.italic", function() {
        var t, i, e, n, s, a, u, b, h, f, w, g, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), s = p["line-to"].bind(p), a = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        f = p.include.bind(p), w = p["create-stroke"].bind(p), g = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), f(St), b(w()["start-from"](N - 2 * k, B + 6 * m - k)["heads-to"](c)["set-width"](B, B)["arc-hv-to"](N, 0)["line-to"](N, v - k)["arc-vh-to"](N + 2 * k, v - B - 6 * m)["heads-to"](c)["to-outline"]()), 
        void f(o.fbar);
    }), At("f", function() {
        var i, e, n, s, a, u, c, b, h, v, f, m, w;
        return w = this, i = w, e = w["set-width"].bind(w), n = function(t) {
            var t;
            return i["assign-unicode"](t), d[i.unicode[i.unicode.length - 1]] = i;
        }, s = w["start-from"].bind(w), a = w["line-to"].bind(w), u = w["curve-to"].bind(w), 
        c = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), e(l), n("f"), void (t.italicangle > 0 ? v(o["f.italic"], !0) : v(o["f.upright"], !0));
    }), At("zero.slashed", function() {
        var t, i, e, n, s, a, u, c, b, h, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), s = p["line-to"].bind(p), a = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), c = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), f = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), c(o.O.contours), w = f()["start-from"](g + S / 2, .35 * v)["line-to"](C - S / 2, .65 * v), 
        void c(w["to-outline"](S / 2, S / 2));
    }), At("zero.unslashed", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), void h(o.O);
    }), At("zero.dotted", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), h(o.O), void c([ qt(D + T, D - T, N + T, N - T) ]);
    }), At("zero", function() {
        var t, e, n, s, a, u, c, b, h, v, f, m, w, g, p, x, k, _, z, y, S;
        return p = this, t = p, e = p["set-width"].bind(p), n = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, s = p["start-from"].bind(p), a = p["line-to"].bind(p), u = p["curve-to"].bind(p), 
        c = p["cubic-to"].bind(p), b = p["put-shapes"].bind(p), h = p["reverse-last"].bind(p), 
        v = p.include.bind(p), f = p["create-stroke"].bind(p), m = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), e(l), n("0"), x = v, k = o, g = i.zero, "slashed" === g ? _ = "zero.slashed" : ("dotted" === g ? z = "zero.dotted" : ("unslahsed" === g ? y = "zero.unslashed" : (w = g, 
        y = "zero.slashed"), z = y), _ = z), S = k[_], void x(S);
    }), At("one", function() {
        var t, i, e, n, o, s, u, c, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("1"), c(f()["start-from"](N + .6 * ut, 0)["set-width"](B, B)["heads-to"](a)["line-to"](N + .6 * ut, v)["heads-to"](a)["to-outline"]()), 
        void c(f()["start-from"](N - B + .6 * ut, v)["set-width"](S, 0)["line-to"](N - 1.5 * p + .5 * ut, v - .75 * p)["to-outline"]());
    }), At("two", function() {
        var t, i, e, n, o, s, a, u, b, h, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        a = w["cubic-to"].bind(w), u = w["put-shapes"].bind(w), b = w["reverse-last"].bind(w), 
        h = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("2"), u(Et(v, L, p)), u(Ct(S, v - L)), void u(f()["start-from"](g, 0)["set-width"](S, 0)["heads-to"](c)["line-to"](C, 0)["heads-to"](c)["to-outline"]());
    }), At("three", function() {
        var t, i, e, n, o, s, a, u, c, h, f, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        a = g["cubic-to"].bind(g), u = g["put-shapes"].bind(g), c = g["reverse-last"].bind(g), 
        h = g.include.bind(g), f = g["create-stroke"].bind(g), m = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), e("3"), w = D + B - z, u(Et(v, L, p)), u(Ht(0, H, p)), 
        u(f()["start-from"](C, v - L)["set-width"](0, S)["arc-vh-to"](C - w, D - B)["heads-to"](b)["to-outline"]()), 
        void u(f()["start-from"](C, H)["set-width"](S, 0)["arc-vh-to"](C - w, D + B)["heads-to"](b)["to-outline"]());
    }), At("four", function() {
        var t, i, e, n, o, s, u, b, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        u = k["cubic-to"].bind(k), b = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("4"), p = .4 * v, x = .55 * l, b(m()["start-from"](g, p)["set-width"](0, S)["heads-to"](c)["line-to"](C, p)["heads-to"](c)["to-outline"]()), 
        b(m()["start-from"](x, 0)["set-width"](0, S)["heads-to"](a)["line-to"](x, v)["heads-to"](a)["to-outline"]()), 
        void b(m()["start-from"](g, p)["set-width"](0, S)["line-to"](x, v)["to-outline"]());
    }), At("five", function() {
        var t, i, e, n, o, s, u, h, f, m, w, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        u = k["cubic-to"].bind(k), h = k["put-shapes"].bind(k), f = k["reverse-last"].bind(k), 
        m = k.include.bind(k), w = k["create-stroke"].bind(k), x = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("5"), h(Ht(0, (v * q + S) / 2, p)), h(w()["start-from"](C, (v * q + S) / 2)["set-width"](S, 0)["arc-vh-to"](N, v * q + S)["line-to"](g + ct * (.6 - 2 * r.yx), v * q + S)["heads-to"](b)["to-outline"]()), 
        h(w()["start-from"](g + ct * (.6 - 2 * r.yx), v)["set-width"](0, S)["heads-to"](c)["line-to"](C - ct / 2, v)["heads-to"](c)["to-outline"]()), 
        void h(w()["start-from"](g + ct * (.6 - 2 * r.yx), v * q + S)["set-width"](0, S)["heads-to"](a)["line-to"](g + ct * (.6 - 2 * r.yx), v)["heads-to"](a)["to-outline"]());
    }), At("six", function() {
        var t, i, e, n, o, s, a, u, c, b, h, f, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), c = p["reverse-last"].bind(p), 
        b = p.include.bind(p), h = p["create-stroke"].bind(p), f = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("6"), u(Lt(.6 * v, 0, g, C)), w = (.6 * v - R + K) / 2, 
        void u(h()["start-from"](g + m, w)["set-width"](0, S)["curve-to"](g + m, r0_mix(w, v, .8), C - 1.1 * S, v)["to-outline"]());
    }), At("seven", function() {
        var t, i, e, n, o, s, a, u, b, h, f, m, w, p, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), o = x["line-to"].bind(x), s = x["curve-to"].bind(x), 
        a = x["cubic-to"].bind(x), u = x["put-shapes"].bind(x), b = x["reverse-last"].bind(x), 
        h = x.include.bind(x), f = x["create-stroke"].bind(x), m = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), e("7"), u(f()["start-from"](g, v)["heads-to"](c)["set-width"](0, S)["line-to"](C, v)["heads-to"](c)["to-outline"]()), 
        w = 1.15, p = r0_mix(g, C, .15), n(p, 0), o(p + S * w, 0), o(C, v - S), o(C - S * w, v - S), 
        void b();
    }), At("eight", function() {
        var t, i, e, n, o, s, a, u, h, f, w, p, x, k, _, z;
        return z = this, t = z, i = z["set-width"].bind(z), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = z["start-from"].bind(z), o = z["line-to"].bind(z), s = z["curve-to"].bind(z), 
        a = z["cubic-to"].bind(z), u = z["put-shapes"].bind(z), h = z["reverse-last"].bind(z), 
        f = z.include.bind(z), w = z["create-stroke"].bind(z), p = z["set-anchor"].bind(z), 
        z.gizmo = r, z["set-width"](l), i(l), e("8"), x = .975 * H, k = .975 * L, _ = .95, 
        u(Bt(r0_mix(C, g, _), v - x * _, C, x)), u(Bt(g, k, r0_mix(g, C, _), v - k * _)), 
        u(w()["start-from"](r0_mix(g, C, _), v - k * _)["set-width"](S, 0)["arc-vh-to"](N, v - m)["heads-to"](b)["arc-hv-to"](r0_mix(C, g, _), v - x * _)["to-outline"]()), 
        void u(w()["start-from"](g, k)["set-width"](S, 0)["arc-vh-to"](N, m)["heads-to"](c)["arc-hv-to"](C, x)["to-outline"]());
    }), At("nine", function() {
        var t, i, e, n, o, s, a, u, c, b, h, f, w, x;
        return x = this, t = x, i = x["set-width"].bind(x), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = x["start-from"].bind(x), o = x["line-to"].bind(x), s = x["curve-to"].bind(x), 
        a = x["cubic-to"].bind(x), u = x["put-shapes"].bind(x), c = x["reverse-last"].bind(x), 
        b = x.include.bind(x), h = x["create-stroke"].bind(x), f = x["set-anchor"].bind(x), 
        x.gizmo = r, x["set-width"](l), i(l), e("9"), u(Lt(v, .4 * v, g, C + m)), w = (v - K + .4 * v + R) / 2, 
        u(h()["start-from"](C, w)["set-width"](0, S)["line-to"](C, .4 * v)["to-outline"]()), 
        void u(Ht(0, .4 * v, p, Ot(.48)));
    }), At("dollar", function() {
        var t, i, e, n, s, a, u, c, b, f, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), s = g["line-to"].bind(g), a = g["curve-to"].bind(g), 
        u = g["cubic-to"].bind(g), c = g["put-shapes"].bind(g), b = g["reverse-last"].bind(g), 
        f = g.include.bind(g), m = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), e("$"), f(o.S), c(m()["start-from"](N, v - B)["set-width"](B, B)["line-to"](N, v - h / 2)["to-outline"]()), 
        void c(m()["start-from"](N, h / 2)["set-width"](B, B)["line-to"](N, B)["to-outline"]());
    }), At("ampersand", function() {
        var t, i, e, n, o, s, a, c, h, f, w, p, x, k, _, z, y, M, A, j;
        return j = this, t = j, i = j["set-width"].bind(j), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = j["start-from"].bind(j), o = j["line-to"].bind(j), s = j["curve-to"].bind(j), 
        a = j["cubic-to"].bind(j), c = j["put-shapes"].bind(j), h = j["reverse-last"].bind(j), 
        f = j.include.bind(j), w = j["create-stroke"].bind(j), p = j["set-anchor"].bind(j), 
        j.gizmo = r, j["set-width"](l), i(l), e("&"), x = Math.min(S, .25 * (C - g)), k = .85, 
        _ = .05, z = .9, y = .45, M = 1.1, A = 0, c(w()["start-from"](C - m, D)["set-width"](0, S)["heads-to"](u)["line-to"](C - m, H)["arc-vh-to"](N, m)["heads-to"](b)["arc-hv-to"](g + m, L)["to-outline"]()), 
        c(Bt(g + m, L, r0_mix(g, C, k), v - L * z, B, x / 2)), c(w()["start-from"](r0_mix(g, C, k), v - L * z)["set-width"](x, 0)["arc-vh-to"](r0_mix(g, C, r0_mix(k, _, .5)), W)["heads-to"](b)["arc-hv-to"](r0_mix(g, C, _), v - H * z)["to-outline"]()), 
        void c(Bt(r0_mix(g, C, _), v - H * z, r0_mix(g, C, M), H * A, x / 2, x / 2, null, null, H * z * .6));
    }), At("at", function() {
        var t, i, e, n, o, s, a, u, f, w, p, x, k, _, z, y, M, A, j, O, q, I;
        return I = this, t = I, i = I["set-width"].bind(I), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = I["start-from"].bind(I), o = I["line-to"].bind(I), s = I["curve-to"].bind(I), 
        a = I["cubic-to"].bind(I), u = I["put-shapes"].bind(I), f = I["reverse-last"].bind(I), 
        w = I.include.bind(I), p = I["create-stroke"].bind(I), x = I["set-anchor"].bind(I), 
        I.gizmo = r, I["set-width"](l), i(l), e("@"), k = v + B, _ = h + B, z = r0_mix(_, k, .75), 
        y = r0_mix(k, _, .8), M = Math.min(S, .25 * (l - 2 * g)), A = r0_mix(g + M, C - M, .47) - M / 2, 
        j = r0_mix(A, C, .5), O = H * ((C - A) / (C - g)), q = L * ((C - A) / (C - g)), 
        void u(p()["start-from"](C, z - m)["heads-to"](b)["set-width"](M, 0)["line-to"](j, z - m)["arc-hv-to"](A, z - O)["line-to"](A, y + q)["arc-vh-to"](j + S * r.yx, y + m)["arc-hv-to"](C, y + O)["line-to"](C, k - L)["arc-vh-to"](N, k - m)["set-width"](S, 0)["arc-hv-to"](g, k - H)["set-width"](M, 0)["line-to"](g, _ + L)["arc-vh-to"](N, _ + m)["set-width"](S, 0)["heads-to"](c)["line-to"](C - B, _ + m)["heads-to"](c)["to-outline"]());
    }), ni = .6 * f, oi = ni + 2.3 * (v - f), di = ni - 2.3 * (v - f), ri = r0_mix(oi, di, .5), 
    si = .15, ai = .65, ui = .15, ci = .9, bi = .1, hi = .9, At("parenleft", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("("), f = .6, void u(h()["start-from"](r0_mix(g, C, ai), oi)["set-width"](S, 0)["curve-to"](r0_mix(g, C, si), r0_mix(ri, oi, f), r0_mix(g, C, si), ri)["curve-to"](r0_mix(g, C, si), r0_mix(ri, di, f), r0_mix(g, C, ai), di)["to-outline"]());
    }), At("parenright", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e(")"), f = .6, void u(h()["start-from"](r0_mix(C, g, ai), oi)["set-width"](0, S)["curve-to"](r0_mix(C, g, si), r0_mix(ri, oi, f), r0_mix(C, g, si), ri)["curve-to"](r0_mix(C, g, si), r0_mix(ri, di, f), r0_mix(C, g, ai), di)["to-outline"]());
    }), At("bracketleft", function() {
        var t, i, e, n, o, s, u, b, h, v, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), b = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("["), b(f()["start-from"](r0_mix(g, C, ui), di)["set-width"](S, 0)["heads-to"](c)["line-to"](r0_mix(g, C, ci), di)["heads-to"](c)["to-outline"]()), 
        b(f()["start-from"](r0_mix(g, C, ui), oi)["set-width"](0, S)["heads-to"](c)["line-to"](r0_mix(g, C, ci), oi)["heads-to"](c)["to-outline"]()), 
        void b(f()["start-from"](r0_mix(g, C, ui), di)["set-width"](0, S)["heads-to"](a)["line-to"](r0_mix(g, C, ui), oi)["heads-to"](a)["to-outline"]());
    }), At("parenright", function() {
        var t, i, e, n, o, s, u, c, h, v, f, m, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        u = w["cubic-to"].bind(w), c = w["put-shapes"].bind(w), h = w["reverse-last"].bind(w), 
        v = w.include.bind(w), f = w["create-stroke"].bind(w), m = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), e("]"), c(f()["start-from"](r0_mix(C, g, ui), di)["set-width"](0, S)["heads-to"](b)["line-to"](r0_mix(C, g, ci), di)["heads-to"](b)["to-outline"]()), 
        c(f()["start-from"](r0_mix(C, g, ui), oi)["set-width"](S, 0)["heads-to"](b)["line-to"](r0_mix(C, g, ci), oi)["heads-to"](b)["to-outline"]()), 
        void c(f()["start-from"](r0_mix(C, g, ui), di)["set-width"](S, 0)["heads-to"](a)["line-to"](r0_mix(C, g, ui), oi)["heads-to"](a)["to-outline"]());
    }), At("braceleft", function() {
        var t, i, e, n, o, s, a, u, c, h, v, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), c = p["reverse-last"].bind(p), 
        h = p.include.bind(p), v = p["create-stroke"].bind(p), f = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("{"), m = r0_mix(g, C, r0_mix(hi, bi, .5)), 
        w = r0_mix(g, C, hi) - m, u(v()["start-from"](r0_mix(g, C, hi), oi - B)["set-width"](B, B)["heads-to"](b)["arc-hv-to"](m, oi - w)["line-to"](m, ri + w)["arc-vh-to"](r0_mix(g, C, bi), ri)["heads-to"](b)["to-outline"]()), 
        void u(v()["start-from"](r0_mix(g, C, hi), di + B)["set-width"](B, B)["heads-to"](b)["arc-hv-to"](m, di + w)["line-to"](m, ri - w)["arc-vh-to"](r0_mix(g, C, bi), ri)["heads-to"](b)["to-outline"]());
    }), At("braceright", function() {
        var t, i, e, n, o, s, a, u, b, h, v, f, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), v = p["create-stroke"].bind(p), f = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("}"), m = r0_mix(C, g, r0_mix(hi, bi, .5)), 
        w = r0_mix(C, g, bi) - m, u(v()["start-from"](r0_mix(C, g, hi), oi - B)["set-width"](B, B)["heads-to"](c)["arc-hv-to"](m, oi - w)["line-to"](m, ri + w)["arc-vh-to"](r0_mix(C, g, bi), ri)["heads-to"](c)["to-outline"]()), 
        void u(v()["start-from"](r0_mix(C, g, hi), di + B)["set-width"](B, B)["heads-to"](c)["arc-hv-to"](m, di + w)["line-to"](m, ri - w)["arc-vh-to"](r0_mix(C, g, bi), ri)["heads-to"](c)["to-outline"]());
    }), At("period", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f;
        return f = this, t = f, i = f["set-width"].bind(f), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = f["start-from"].bind(f), o = f["line-to"].bind(f), s = f["curve-to"].bind(f), 
        a = f["cubic-to"].bind(f), u = f["put-shapes"].bind(f), c = f["reverse-last"].bind(f), 
        b = f.include.bind(f), h = f["create-stroke"].bind(f), v = f["set-anchor"].bind(f), 
        f.gizmo = r, f["set-width"](l), i(l), e("."), void u([ qt(A - m, m, N - E + m, N + E - m) ]);
    }), At("xhdot", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, w;
        return w = this, t = w, i = w["set-width"].bind(w), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = w["start-from"].bind(w), o = w["line-to"].bind(w), s = w["curve-to"].bind(w), 
        a = w["cubic-to"].bind(w), u = w["put-shapes"].bind(w), c = w["reverse-last"].bind(w), 
        b = w.include.bind(w), h = w["create-stroke"].bind(w), v = w["set-anchor"].bind(w), 
        w.gizmo = r, w["set-width"](l), i(l), void u([ qt(f - m, f - A + m, N - E + m, N + E - m) ]);
    }), At("comma", function() {
        var t, i, e, n, s, a, u, c, b, v, f, w, g, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), s = p["line-to"].bind(p), a = p["curve-to"].bind(p), 
        u = p["cubic-to"].bind(p), c = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        v = p.include.bind(p), f = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e(","), v(o.period), g = .5 * A, void c(f()["start-from"](N + E - m, r0_mix(m, A - m, .5))["set-width"](0, g)["curve-to"](N + E - m, r0_mix(r0_mix(m, A - m, .5), h, .5), r0_mix(N, N - E, .3), h)["to-outline"]());
    }), At("colon", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e(":"), h(o.period), void h(o.xhdot);
    }), At("semicolon", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e(";"), h(o.comma), void h(o.xhdot);
    }), At("question", function() {
        var t, i, e, n, o, s, a, u, c, b, h, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        a = g["cubic-to"].bind(g), u = g["put-shapes"].bind(g), c = g["reverse-last"].bind(g), 
        b = g.include.bind(g), h = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), e("?"), u(Bt(N - B, r0_mix(M + S, f / 2, .5), C, v - L)), 
        u(Et(v, L, p)), void u([ qt(M - m, m, N - T + m, N + T - m) ]);
    }), At("exclam", function() {
        var t, i, e, n, o, s, a, c, b, h, w, g, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), c = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), w = p["create-stroke"].bind(p), g = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e("!"), c(w()["start-from"](N, v)["set-width"](B, B)["heads-to"](u)["line-to"](N, r0_mix(M + S, f / 2, .5))["heads-to"](u)["to-outline"]()), 
        void c([ qt(M - m, m, N - T + m, N + T - m) ]);
    }), At("underscore", function() {
        var t, i, e, n, o, s, a, u, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("_"), void u(v()["start-from"](g, 0)["heads-to"](c)["set-width"](S, 0)["line-to"](C, 0)["heads-to"](c)["to-outline"]());
    }), At("hyphen", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f;
        return f = this, t = f, i = f["set-width"].bind(f), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = f["start-from"].bind(f), o = f["line-to"].bind(f), s = f["curve-to"].bind(f), 
        a = f["cubic-to"].bind(f), u = f["put-shapes"].bind(f), c = f["reverse-last"].bind(f), 
        b = f.include.bind(f), h = f["create-stroke"].bind(f), v = f["set-anchor"].bind(f), 
        f.gizmo = r, f["set-width"](l), i(l), e("-"), void u(Rt(g, C, ni));
    }), At("plus", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("+"), h(o.hyphen), void c(Kt(N, ni - .55 * (C - g), ni + .55 * (C - g)));
    }), At("equal", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("="), u(Rt(g, C, ni - .2 * f)), void u(Rt(g, C, ni + .2 * f));
    }), At("bar", function() {
        var t, i, e, n, o, s, a, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("|"), void c(v()["start-from"](N, oi)["heads-to"](u)["set-width"](S / 2, S / 2)["line-to"](N, di)["heads-to"](u)["to-outline"]());
    }), At("slash", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("/"), f = 1 / Math.sqrt(1 - Math.pow((C - g - S) / (oi - di), 2)), 
        n(g, di), o(g + S * f, di), o(C, oi), o(C - S * f, oi), void c();
    }), At("backslash", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("\\"), f = 1 / Math.sqrt(1 - Math.pow((C - g - S) / (oi - di), 2)), 
        n(C, di), o(C - S * f, di), o(g, oi), o(g + S * f, oi), void c();
    }), At("numbersign", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), o = m["line-to"].bind(m), s = m["curve-to"].bind(m), 
        a = m["cubic-to"].bind(m), u = m["put-shapes"].bind(m), c = m["reverse-last"].bind(m), 
        b = m.include.bind(m), h = m["create-stroke"].bind(m), v = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("#"), f = Math.min(S, .25 * (C - g)), u(Rt(g, C, r0_mix(oi, di, .33))), 
        u(Rt(g, C, r0_mix(oi, di, .67))), u(Kt(r0_mix(g, C, .3), di + f, oi - f, f)), void u(Kt(r0_mix(g, C, .7), di + f, oi - f, f));
    }), At("less", function() {
        var t, i, e, n, o, s, a, u, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), u = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("<"), p = r0_mix(0, v, .75), x = r0_mix(0, v, .1), 
        u(m()["start-from"](C, p)["set-width"](B, B)["line-to"](g, r0_mix(p, x, .5))["heads-to"](b)["to-outline"](0, 0, 1, !0)), 
        void u(m()["start-from"](g, r0_mix(p, x, .5))["set-width"](B, B)["heads-to"](c)["line-to"](C, x)["to-outline"](0, 0, 1, !0));
    }), At("greater", function() {
        var t, i, e, n, o, s, a, u, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        a = k["cubic-to"].bind(k), u = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e(">"), p = r0_mix(0, v, .75), x = r0_mix(0, v, .1), 
        u(m()["start-from"](g, p)["set-width"](B, B)["line-to"](C, r0_mix(p, x, .5))["heads-to"](c)["to-outline"](0, 0, 1, !0)), 
        void u(m()["start-from"](C, r0_mix(p, x, .5))["set-width"](B, B)["heads-to"](b)["line-to"](g, x)["to-outline"](0, 0, 1, !0));
    }), At("quotesingle", function() {
        var t, i, e, n, o, s, a, c, b, h, m, w, g;
        return g = this, t = g, i = g["set-width"].bind(g), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = g["start-from"].bind(g), o = g["line-to"].bind(g), s = g["curve-to"].bind(g), 
        a = g["cubic-to"].bind(g), c = g["put-shapes"].bind(g), b = g["reverse-last"].bind(g), 
        h = g.include.bind(g), m = g["create-stroke"].bind(g), w = g["set-anchor"].bind(g), 
        g.gizmo = r, g["set-width"](l), i(l), e(39), void c(m()["start-from"](N, v)["heads-to"](u)["set-width"](B, B)["line-to"](N, f - B)["set-width"](.4 * S, .4 * S)["heads-to"](u)["to-outline"]());
    }), At("quotedouble", function() {
        var t, i, e, n, o, s, a, c, b, h, m, w, p;
        return p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
        a = p["cubic-to"].bind(p), c = p["put-shapes"].bind(p), b = p["reverse-last"].bind(p), 
        h = p.include.bind(p), m = p["create-stroke"].bind(p), w = p["set-anchor"].bind(p), 
        p.gizmo = r, p["set-width"](l), i(l), e(34), c(m()["start-from"](r0_mix(g, C, .25), v)["heads-to"](u)["set-width"](B, B)["line-to"](r0_mix(g, C, .25), f - B)["set-width"](.4 * S, .4 * S)["heads-to"](u)["to-outline"]()), 
        void c(m()["start-from"](r0_mix(g, C, .75), v)["heads-to"](u)["set-width"](B, B)["line-to"](r0_mix(g, C, .75), f - B)["set-width"](.4 * S, .4 * S)["heads-to"](u)["to-outline"]());
    }), At("asterisk", function() {
        var t, i, e, n, o, s, a, u, c, b, h, v, f, m, w, g, p, x, k, _;
        for (_ = this, t = _, i = _["set-width"].bind(_), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = _["start-from"].bind(_), o = _["line-to"].bind(_), s = _["curve-to"].bind(_), 
        a = _["cubic-to"].bind(_), u = _["put-shapes"].bind(_), c = _["reverse-last"].bind(_), 
        b = _.include.bind(_), h = _["create-stroke"].bind(_), v = _["set-anchor"].bind(_), 
        _.gizmo = r, _["set-width"](l), i(l), e("*"), f = 1.2 * I, m = oi - 1.5 * I, w = .4 * S, 
        g = .5 * Math.min(S, f * Math.PI * 2 / 10), x = 0, k = 5, p = x; k > p; p += 1) u(h()["start-from"](N, m)["set-width"](w, w)["line-to"](N + f * Math.sin(p / 5 * Math.PI * 2), m + f * Math.cos(p / 5 * Math.PI * 2))["set-width"](g, g)["to-outline"](0, 0, 1, !0));
        return void 0;
    }), At("percent", function() {
        var t, i, e, n, o, s, c, b, h, f, m, w, p, x, k;
        return k = this, t = k, i = k["set-width"].bind(k), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = k["start-from"].bind(k), o = k["line-to"].bind(k), s = k["curve-to"].bind(k), 
        c = k["cubic-to"].bind(k), b = k["put-shapes"].bind(k), h = k["reverse-last"].bind(k), 
        f = k.include.bind(k), m = k["create-stroke"].bind(k), w = k["set-anchor"].bind(k), 
        k.gizmo = r, k["set-width"](l), i(l), e("%"), p = .3, x = 1 / Math.sqrt(1 - Math.pow((C - g - S) / (v - 0), 2)), 
        n(g, 0), o(g + S * x, 0), o(C, v), o(C - S * x, v), b(m()["start-from"](g, v)["heads-to"](u)["set-width"](Math.min(.33 * (C - g), 1.5 * S), 0)["line-to"](g, r0_mix(v, 0, .3))["heads-to"](u)["to-outline"]()), 
        void b(m()["start-from"](C, 0)["heads-to"](a)["set-width"](Math.min(.33 * (C - g), 1.5 * S), 0)["line-to"](C, r0_mix(0, v, .3))["heads-to"](a)["to-outline"]());
    }), li = function(t) {
        var t;
        return t && t.anchors && t.anchors.above && t.anchors.above.type === vt;
    }, yi = 160, Si = 65535, vi = yi; Si > vi; vi += 1) if (d[vi]) Zi = void 0; else {
        if (fi = String.fromCharCode(vi), mi = fi.normalize("NFD"), mi.length > 1) {
            for (wi = [], gi = !0, pi = !1, Mi = 0, Ai = mi.length, xi = Mi; Ai > xi; xi += 1) wi[xi] = d[mi.charCodeAt(xi)], 
            te = wi[xi] ? void 0 : gi = !1, ie = li(wi[xi]) ? pi = !0 : void 0;
            gi && (ne = wi[0] === o.i && pi ? wi[0] = o.dotlessi : void 0, oe = wi[0] === o.j && pi ? wi[0] = o.dotlessj : void 0, 
            ee = At(wi.map(function(t) {
                var t;
                return t.name;
            }).join("_"), function() {
                var t, i, e, n, o, s, a, u, c, b, h, v, f, m, w, g, p;
                for (p = this, t = p, i = p["set-width"].bind(p), e = function(i) {
                    var i;
                    return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
                }, n = p["start-from"].bind(p), o = p["line-to"].bind(p), s = p["curve-to"].bind(p), 
                a = p["cubic-to"].bind(p), u = p["put-shapes"].bind(p), c = p["reverse-last"].bind(p), 
                b = p.include.bind(p), h = p["create-stroke"].bind(p), v = p["set-anchor"].bind(p), 
                p.gizmo = r, p["set-width"](l), e(vi), b(wi[0], lt), m = wi.slice(1), w = m.length, 
                g = 0; w > g; g += 1) f = m[g], b(f);
                return void 0;
            })), $i = ee;
        }
        Zi = $i;
    }
    for (At("grave", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), e("`"), h(o.space, lt), void h(o.graveAbove);
    }), At("acute", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), e(180), h(o.space, lt), void h(o.acuteAbove);
    }), At("asciicircum", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e(94), h(o.space, lt), void h(o.circumflexAbove);
    }), At("asciitilde", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e("~"), h(o.space, lt), void h(o.tildeAbove);
    }), At("latin1dieresis", function() {
        var t, i, e, n, s, a, u, c, b, h, v, f, m;
        return m = this, t = m, i = m["set-width"].bind(m), e = function(i) {
            var i;
            return t["assign-unicode"](i), d[t.unicode[t.unicode.length - 1]] = t;
        }, n = m["start-from"].bind(m), s = m["line-to"].bind(m), a = m["curve-to"].bind(m), 
        u = m["cubic-to"].bind(m), c = m["put-shapes"].bind(m), b = m["reverse-last"].bind(m), 
        h = m.include.bind(m), v = m["create-stroke"].bind(m), f = m["set-anchor"].bind(m), 
        m.gizmo = r, m["set-width"](l), i(l), e(168), h(o.space, lt), void h(o.dieresisAbove);
    }), ji = n, Oi = ji.length, qi = 0; Oi > qi; qi += 1) if (ki = ji[qi], ki.advanceWidth = ki.advanceWidth * Mt, 
    ki.contours) {
        for (Ii = ki.contours, Pi = Ii.length, Fi = 0, re = Pi > Fi; re; re = Pi > Fi) {
            for (_i = Ii[Fi], Gi = _i, Wi = Gi.length, Bi = 0; Wi > Bi; Bi += 1) zi = Gi[Bi], 
            zi.x = zi.x * Mt, zi.y = zi.y * Mt;
            se = Fi += 1;
        }
        de = se;
    } else de = void 0;
    return e;
};