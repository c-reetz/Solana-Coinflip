import {Decimal} from "decimal.js";

const NEGATIVE_ONE = new Decimal(-1);
const ZERO = new Decimal(0);
const ONE = new Decimal(1);
const TWO = new Decimal(2);
const THREE = new Decimal(3);
const EPS = TWO.pow(-52);

class Root {
  public real: Decimal;
  public imag: Decimal;

  public constructor(x: Decimal, y: Decimal) {
    this.real = x;
    this.imag = y;
  }
}

function sign(n: Decimal): Decimal {
  if (n.gt(ZERO)) {
    return ONE;
  } else if (n.lt(ZERO)) {
    return NEGATIVE_ONE;
  } else {
    return ZERO;
  }
}

/**
 * Calculates the discriminant of Ax^2 + Bx + C = 0.
 */
function disc(A: Decimal, B: Decimal, C: Decimal): Decimal {
  let a = A;
  let b = B;
  let c = C;

  const isIntCoeffs =
    Decimal.floor(A).sub(A).abs().eq(ZERO) &&
    Decimal.floor(b).sub(b).abs().eq(ZERO) &&
    Decimal.floor(C).sub(C).abs().eq(ZERO);

  if (isIntCoeffs) {
    if (a.mul(c).gt(ZERO)) {
      a = A.abs();
      c = C.abs();
    }
    let loopCondition = false;
    do {
      loopCondition = false;
      if (a < c) {
        const tmp = a;
        a = c;
        c = tmp;
      }
      const n = nearestInt(b.div(c));
      if (!n.eq(ZERO)) {
        const alpha = a.sub(n.mul(b));
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

/** Calculates the nearest integer to a number. */
function nearestInt(n: Decimal): Decimal {
  const l = Decimal.floor(n);
  const h = Decimal.ceil(n);
  const dl = n.sub(l).abs();
  const dh = n.sub(h).abs();
  return dl.gt(dh) ? dh : dl;
}

/** Computes the roots of the quadratic Ax^2 + Bx + C = 0. */
function qdrtc(A: Decimal, B: Decimal, C: Decimal): Root[] {
  const b = B.div(TWO).neg();
  const q = disc(A, b, C);
  let X1 = ZERO;
  let Y1 = ZERO;
  let X2 = ZERO;
  let Y2 = ZERO;

  if (q.lt(ZERO)) {
    const X = b.div(A);
    const Y = q.neg().sqrt().div(A);
    X1 = X;
    Y1 = Y;
    X2 = X;
    Y2 = Y.neg();
  } else {
    Y1 = ZERO;
    Y2 = ZERO;
    const r = b.add(sign(b).mul(q.sqrt()));
    if (r.eq(ZERO)) {
      X1 = C.div(A);
      X2 = C.div(A).neg();
    } else {
      X1 = C.div(r);
      X2 = r.div(A);
    }
  }
  return [new Root(X1, Y1), new Root(X2, Y2)];
}

function evaluate(
  x: Decimal,
  A: Decimal,
  B: Decimal,
  C: Decimal,
  D: Decimal
): {Q: Decimal; dQ: Decimal; B1: Decimal; C2: Decimal} {
  const q0 = A.mul(x);
  const B1 = q0.add(B);
  const C2 = B1.mul(x).add(C);
  return {
    Q: C2.mul(x).add(D),
    dQ: q0.add(B1).mul(x).add(C2),
    B1,
    C2,
  };
}

export function getCubicRoots(
  A: Decimal,
  B: Decimal,
  C: Decimal,
  D: Decimal
): {real: Decimal; imag: Decimal}[] {
  // method based on Kahan's notes "To Solve a Real Cubic Equation"
  let X: Decimal;
  let a: Decimal;
  let b1: Decimal;
  let c2: Decimal;
  const roots: Root[] = [];
  if (A.eq(ZERO)) {
    a = B;
    b1 = C;
    c2 = D;
  } else if (D.eq(ZERO)) {
    X = ZERO;
    a = A;
    b1 = B;
    c2 = C;
    roots.push(new Root(X, ZERO));
  } else {
    a = A;
    X = B.div(A).div(THREE).neg();
    let evalInfo = evaluate(X, A, B, C, D);
    let q = evalInfo.Q;
    let dq = evalInfo.dQ;
    b1 = evalInfo.B1;
    c2 = evalInfo.C2;

    let t = q.div(A);
    let r = t.abs().cubeRoot();
    const s = sign(t);
    t = dq.div(A).neg();
    if (t.gt(ZERO)) {
      r = new Decimal("1.324717957244746").mul(Decimal.max(r, t.sqrt()));
    }
    let x0 = X.sub(s.mul(r));
    if (!x0.eq(X)) {
      const den = EPS.mul(100).add(ONE);
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
  const quadInfo = qdrtc(a, b1, c2);
  return roots.concat(quadInfo);
}
