"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decimal_js_1 = require("decimal.js");
var NEGATIVE_ONE = new decimal_js_1.Decimal(-1);
var ZERO = new decimal_js_1.Decimal(0);
var ONE = new decimal_js_1.Decimal(1);
var TWO = new decimal_js_1.Decimal(2);
var THREE = new decimal_js_1.Decimal(3);
var EPS = TWO.pow(-52);
var Root = (function () {
    function Root(x, y) {
        this.real = x;
        this.imag = y;
    }
    return Root;
}());
function sign(n) {
    if (n.gt(ZERO)) {
        return ONE;
    }
    else if (n.lt(ZERO)) {
        return NEGATIVE_ONE;
    }
    else {
        return ZERO;
    }
}
function disc(A, B, C) {
    var a = A;
    var b = B;
    var c = C;
    var isIntCoeffs = decimal_js_1.Decimal.floor(A).sub(A).abs().eq(ZERO) &&
        decimal_js_1.Decimal.floor(b).sub(b).abs().eq(ZERO) &&
        decimal_js_1.Decimal.floor(C).sub(C).abs().eq(ZERO);
    if (isIntCoeffs) {
        if (a.mul(c).gt(ZERO)) {
            a = A.abs();
            c = C.abs();
        }
        var loopCondition = false;
        do {
            loopCondition = false;
            if (a < c) {
                var tmp = a;
                a = c;
                c = tmp;
            }
            var n = nearestInt(b.div(c));
            if (!n.eq(ZERO)) {
                var alpha = a.sub(n.mul(b));
                if (alpha.gte(a.neg())) {
                    b = b.sub(n.mul(c));
                    a = alpha.sub(n.mul(b));
                    if (a.gt(ZERO)) {
                        loopCondition = true;
                    }
                }
            }
        } while (loopCondition);
    }
    return b.mul(b).sub(a.mul(c));
}
function nearestInt(n) {
    var l = decimal_js_1.Decimal.floor(n);
    var h = decimal_js_1.Decimal.ceil(n);
    var dl = n.sub(l).abs();
    var dh = n.sub(h).abs();
    return dl.gt(dh) ? dh : dl;
}
function qdrtc(A, B, C) {
    var b = B.div(TWO).neg();
    var q = disc(A, b, C);
    var X1 = ZERO;
    var Y1 = ZERO;
    var X2 = ZERO;
    var Y2 = ZERO;
    if (q.lt(ZERO)) {
        var X = b.div(A);
        var Y = q.neg().sqrt().div(A);
        X1 = X;
        Y1 = Y;
        X2 = X;
        Y2 = Y.neg();
    }
    else {
        Y1 = ZERO;
        Y2 = ZERO;
        var r = b.add(sign(b).mul(q.sqrt()));
        if (r.eq(ZERO)) {
            X1 = C.div(A);
            X2 = C.div(A).neg();
        }
        else {
            X1 = C.div(r);
            X2 = r.div(A);
        }
    }
    return [new Root(X1, Y1), new Root(X2, Y2)];
}
function evaluate(x, A, B, C, D) {
    var q0 = A.mul(x);
    var B1 = q0.add(B);
    var C2 = B1.mul(x).add(C);
    return {
        Q: C2.mul(x).add(D),
        dQ: q0.add(B1).mul(x).add(C2),
        B1: B1,
        C2: C2,
    };
}
function getCubicRoots(A, B, C, D) {
    var X;
    var a;
    var b1;
    var c2;
    var roots = [];
    if (A.eq(ZERO)) {
        a = B;
        b1 = C;
        c2 = D;
    }
    else if (D.eq(ZERO)) {
        X = ZERO;
        a = A;
        b1 = B;
        c2 = C;
        roots.push(new Root(X, ZERO));
    }
    else {
        a = A;
        X = B.div(A).div(THREE).neg();
        var evalInfo = evaluate(X, A, B, C, D);
        var q = evalInfo.Q;
        var dq = evalInfo.dQ;
        b1 = evalInfo.B1;
        c2 = evalInfo.C2;
        var t = q.div(A);
        var r = t.abs().cubeRoot();
        var s = sign(t);
        t = dq.div(A).neg();
        if (t.gt(ZERO)) {
            r = new decimal_js_1.Decimal("1.324717957244746").mul(decimal_js_1.Decimal.max(r, t.sqrt()));
        }
        var x0 = X.sub(s.mul(r));
        if (!x0.eq(X)) {
            var den = EPS.mul(100).add(ONE);
            do {
                X = x0;
                evalInfo = evaluate(X, A, B, C, D);
                q = evalInfo.Q;
                dq = evalInfo.dQ;
                b1 = evalInfo.B1;
                c2 = evalInfo.C2;
                x0 = dq.eq(ZERO) ? X : X.sub(q.div(dq).div(den));
            } while (s.mul(x0).gt(s.mul(X)));
            if (A.abs().mul(X).mul(X).gt(D.div(X).abs())) {
                c2 = D.div(X).neg();
                b1 = c2.sub(C).div(X);
            }
        }
        roots.push(new Root(X, ZERO));
    }
    var quadInfo = qdrtc(a, b1, c2);
    return roots.concat(quadInfo);
}
exports.getCubicRoots = getCubicRoots;
//# sourceMappingURL=cuberoots.js.map