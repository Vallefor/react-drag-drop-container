var mt = Object.defineProperty;
var Et = (g, o, r) => o in g ? mt(g, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : g[o] = r;
var v = (g, o, r) => Et(g, typeof o != "symbol" ? o + "" : o, r);
import we, { Component as z } from "react";
import c from "prop-types";
import yt from "react-dom";
var re = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function bt() {
  if (xe) return W;
  xe = 1;
  var g = we, o = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, E, k) {
    var _, C = {}, S = null, N = null;
    k !== void 0 && (S = "" + k), E.key !== void 0 && (S = "" + E.key), E.ref !== void 0 && (N = E.ref);
    for (_ in E) a.call(E, _) && !w.hasOwnProperty(_) && (C[_] = E[_]);
    if (O && O.defaultProps) for (_ in E = O.defaultProps, E) C[_] === void 0 && (C[_] = E[_]);
    return { $$typeof: o, type: O, key: S, ref: N, props: C, _owner: i.current };
  }
  return W.Fragment = r, W.jsx = D, W.jsxs = D, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function _t() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var g = we, o = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ie = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ne && e[ne] || e[Ie];
      return typeof t == "function" ? t : null;
    }
    var j = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          n[s - 1] = arguments[s];
        Me("error", e, n);
      }
    }
    function Me(e, t, n) {
      {
        var s = j.ReactDebugCurrentFrame, f = s.getStackAddendum();
        f !== "" && (t += "%s", n = n.concat([f]));
        var d = n.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Ae = !1, $e = !1, We = !1, Ye = !1, Ne = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === w || Ne || e === i || e === k || e === _ || Ye || e === N || Ae || $e || We || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === C || e.$$typeof === D || e.$$typeof === O || e.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function He(e, t, n) {
      var s = e.displayName;
      if (s)
        return s;
      var f = t.displayName || t.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case w:
          return "Profiler";
        case i:
          return "StrictMode";
        case k:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return se(t) + ".Consumer";
          case D:
            var n = e;
            return se(n._context) + ".Provider";
          case E:
            return He(e, e.render, "ForwardRef");
          case C:
            var s = e.displayName || null;
            return s !== null ? s : R(e.type) || "Memo";
          case S: {
            var f = e, d = f._payload, u = f._init;
            try {
              return R(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, M = 0, ie, oe, le, ue, ce, fe, de;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (M === 0) {
          ie = console.log, oe = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Be() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ie
            }),
            info: x({}, e, {
              value: oe
            }),
            warn: x({}, e, {
              value: le
            }),
            error: x({}, e, {
              value: ue
            }),
            group: x({}, e, {
              value: ce
            }),
            groupCollapsed: x({}, e, {
              value: fe
            }),
            groupEnd: x({}, e, {
              value: de
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, q;
    function K(e, t, n) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (f) {
            var s = f.stack.trim().match(/\n( *(at )?)/);
            q = s && s[1] || "";
          }
        return `
` + q + e;
      }
    }
    var X = !1, H;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      H = new ze();
    }
    function he(e, t) {
      if (!e || X)
        return "";
      {
        var n = H.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      X = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = V.current, V.current = null, Ue();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (b) {
              s = b;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (b) {
              s = b;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            s = b;
          }
          e();
        }
      } catch (b) {
        if (b && s && typeof b.stack == "string") {
          for (var l = b.stack.split(`
`), y = s.stack.split(`
`), p = l.length - 1, h = y.length - 1; p >= 1 && h >= 0 && l[p] !== y[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (l[p] !== y[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || l[p] !== y[h]) {
                    var T = `
` + l[p].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, T), T;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        X = !1, V.current = d, Be(), Error.prepareStackTrace = f;
      }
      var I = e ? e.displayName || e.name : "", P = I ? K(I) : "";
      return typeof e == "function" && H.set(e, P), P;
    }
    function Ve(e, t, n) {
      return he(e, !1);
    }
    function qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function U(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, qe(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case k:
          return K("Suspense");
        case _:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            return Ve(e.render);
          case C:
            return U(e.type, t, n);
          case S: {
            var s = e, f = s._payload, d = s._init;
            try {
              return U(d(f), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ge = {}, ve = j.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        ve.setExtraStackFrame(n);
      } else
        ve.setExtraStackFrame(null);
    }
    function Xe(e, t, n, s, f) {
      {
        var d = Function.call.bind(A);
        for (var u in e)
          if (d(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var y = Error((s || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              l = e[u](t, u, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              l = p;
            }
            l && !(l instanceof Error) && (B(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, u, typeof l), B(null)), l instanceof Error && !(l.message in ge) && (ge[l.message] = !0, B(f), m("Failed %s type: %s", n, l.message), B(null));
          }
      }
    }
    var Ge = Array.isArray;
    function G(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ze(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ze(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), me(e);
    }
    var $ = j.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, J;
    J = {};
    function et(e) {
      if (A.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (A.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, t) {
      if (typeof e.ref == "string" && $.current && t && $.current.stateNode !== t) {
        var n = R($.current.type);
        J[n] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R($.current.type), e.ref), J[n] = !0);
      }
    }
    function nt(e, t) {
      {
        var n = function() {
          ye || (ye = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function at(e, t) {
      {
        var n = function() {
          be || (be = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var st = function(e, t, n, s, f, d, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function it(e, t, n, s, f) {
      {
        var d, u = {}, l = null, y = null;
        n !== void 0 && (Ee(n), l = "" + n), tt(t) && (Ee(t.key), l = "" + t.key), et(t) && (y = t.ref, rt(t, f));
        for (d in t)
          A.call(t, d) && !Qe.hasOwnProperty(d) && (u[d] = t[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            u[d] === void 0 && (u[d] = p[d]);
        }
        if (l || y) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && nt(u, h), y && at(u, h);
        }
        return st(e, l, y, f, s, $.current, u);
      }
    }
    var Z = j.ReactCurrentOwner, _e = j.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Te() {
      {
        if (Z.current) {
          var e = R(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ot(e) {
      return "";
    }
    var De = {};
    function lt(e) {
      {
        var t = Te();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Re(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = lt(t);
        if (De[n])
          return;
        De[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Z.current && (s = " It was passed a child from " + R(e._owner.type) + "."), L(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), L(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            ee(s) && Re(s, t);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Fe(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              ee(u.value) && Re(u.value, t);
        }
      }
    }
    function ut(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === C))
          n = t.propTypes;
        else
          return;
        if (n) {
          var s = R(t);
          Xe(n, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !Q) {
          Q = !0;
          var f = R(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var s = t[n];
          if (s !== "children" && s !== "key") {
            L(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Oe = {};
    function Se(e, t, n, s, f, d) {
      {
        var u = Ke(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ot();
          y ? l += y : l += Te();
          var p;
          e === null ? p = "null" : G(e) ? p = "array" : e !== void 0 && e.$$typeof === o ? (p = "<" + (R(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, l);
        }
        var h = it(e, t, n, f, d);
        if (h == null)
          return h;
        if (u) {
          var T = t.children;
          if (T !== void 0)
            if (s)
              if (G(T)) {
                for (var I = 0; I < T.length; I++)
                  Ce(T[I], e);
                Object.freeze && Object.freeze(T);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        if (A.call(t, "key")) {
          var P = R(e), b = Object.keys(t).filter(function(vt) {
            return vt !== "key";
          }), te = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[P + te]) {
            var gt = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, P, gt, P), Oe[P + te] = !0;
          }
        }
        return e === a ? ct(h) : ut(h), h;
      }
    }
    function ft(e, t, n) {
      return Se(e, t, n, !0);
    }
    function dt(e, t, n) {
      return Se(e, t, n, !1);
    }
    var pt = dt, ht = ft;
    Y.Fragment = a, Y.jsx = pt, Y.jsxs = ht;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = bt() : re.exports = _t();
var F = re.exports;
class Tt extends z {
  componentDidMount() {
  }
  componentWillUnmount() {
    this.defaultNode && (document.body.removeChild(this.defaultNode), this.defaultNode = null);
  }
  componentDidUpdate() {
  }
  render() {
    return this.defaultNode || (this.defaultNode = document.createElement("div"), this.defaultNode.className = "dragAndDropPortal", document.body.appendChild(this.defaultNode)), yt.createPortal(this.props.children, this.defaultNode);
  }
}
class ke extends z {
  constructor(o) {
    super(o), this.state = {
      scroll_top: 0,
      scroll_left: 0
    };
  }
  componentWillReceiveProps(o) {
    this.props.dragging !== o.dragging && o.dragging;
  }
  componentDidMount() {
    this.props.setGhostElem(this.ghostElem);
  }
  render() {
    if (this.props.parentNode) {
      const i = this.props.parentNode.getBoundingClientRect();
      i.left, i.top;
    }
    const o = this.props.parentState, r = {
      top: this.state.scroll_top,
      left: this.state.scroll_left
    }, a = {
      position: "fixed",
      zIndex: this.props.zIndex,
      left: this.props.parentState.mouse.x - (o.clickX - o.initialLeftOffset) - r.left,
      top: this.props.parentState.mouse.y - (o.clickY - o.initialTopOffset) - r.top,
      display: this.props.dragging ? "block" : "none",
      pointerEvents: "none",
      width: o.containerWidth,
      height: o.containerHeight
    };
    return this.props.dragging ? /* @__PURE__ */ F.jsx(Tt, { children: /* @__PURE__ */ F.jsx("div", { style: a, ref: (i) => {
      this.ghostElem = i;
    }, children: this.props.children }) }) : null;
  }
}
ke.propTypes = {
  children: c.node.isRequired,
  setGhostElem: c.func.isRequired,
  dragging: c.bool.isRequired,
  left: c.number.isRequired,
  top: c.number.isRequired,
  zIndex: c.number.isRequired
};
function Dt(g) {
  return (g.buttons || g.which || g.button) === 1;
}
class je extends z {
  constructor(r) {
    super(r);
    v(this, "setGhostElem", (r) => {
      this.ghostElem = r;
    });
    v(this, "addListeners", (r) => {
      r.addEventListener("mousedown", (a) => {
        this.handleMouseDown(a);
      }, !1), r.addEventListener("touchstart", (a) => {
        this.handleTouchStart(a);
      }, !1);
    });
    v(this, "buildCustomEvent", (r) => {
      let a;
      return typeof window.CustomEvent != "function" ? (a = document.createEvent("CustomEvent"), a.initCustomEvent(r, !0, !0, {})) : a = new CustomEvent(r, { bubbles: !0, cancelable: !0 }), Object.assign(a, {
        dragData: this.props.dragData,
        dragElem: this.dragElem,
        sourceElem: this.containerElem
      }), a;
    });
    v(this, "setCurrentTarget", (r, a) => {
      this.dragElem.style.zIndex = -1;
      const i = document.elementFromPoint(r, a) || document.body;
      this.dragElem.style.zIndex = this.props.zIndex, this.currentTarget = this.dragElem.contains(i) ? document.body : i;
    });
    v(this, "generateEnterLeaveEvents", (r, a) => {
      const i = this.props.targetKey;
      this.setCurrentTarget(r, a), this.currentTarget !== this.prevTarget && (this.prevTarget && this.prevTarget.dispatchEvent(this.buildCustomEvent(`${i}DragLeave`)), this.currentTarget && this.currentTarget.dispatchEvent(this.buildCustomEvent(`${i}DragEnter`))), this.prevTarget = this.currentTarget;
    });
    v(this, "generateDropEvent", (r, a) => {
      this.setCurrentTarget(r, a);
      const i = this.buildCustomEvent(`${this.props.targetKey}Drop`);
      this.currentTarget.dispatchEvent(i);
    });
    // Start the Drag
    v(this, "handleMouseDown", (r) => {
      Dt(r) && !this.props.noDragging && (document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp), this.startDrag(r.clientX, r.clientY));
    });
    v(this, "handleTouchStart", (r) => {
      this.props.noDragging || (r.preventDefault(), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("touchend", this.handleTouchEnd), this.startDrag(r.targetTouches[0].clientX, r.targetTouches[0].clientY));
    });
    v(this, "startDrag", (r, a) => {
      this._distanceWasOk = !1, document.addEventListener(`${this.props.targetKey}Dropped`, this._droppedEvent);
      let i = {};
      this.props.customDragElement || this.props.dragClone ? i = this.containerElem.getBoundingClientRect() : i = {
        left: this.containerElem.offsetLeft,
        top: this.containerElem.offsetTop
      }, this.setState({
        clicked: !0,
        start_x: r,
        start_y: a,
        clickX: r - this.state.left,
        clickY: a - this.state.top,
        containerWidth: this.containerElem.clientWidth,
        containerHeight: this.containerElem.clientHeight,
        initialLeftOffset: this.state.dragged ? this.state.initialLeftOffset : i.left,
        initialTopOffset: this.state.dragged ? this.state.initialTopOffset : i.top
      });
    });
    // During Drag
    v(this, "handleMouseMove", (r) => {
      this.distanceIsOk(r) && (this.props.noDragging || (r.preventDefault(), this.state.clicked && this.drag(r.clientX, r.clientY)));
    });
    v(this, "handleTouchMove", (r) => {
      this.props.noDragging || (r.preventDefault(), this.state.clicked && this.drag(r.targetTouches[0].clientX, r.targetTouches[0].clientY));
    });
    v(this, "drag", (r, a) => {
      this.generateEnterLeaveEvents(r, a);
      const [i, w] = this.checkForOffsetChanges(), D = { dragging: !0 };
      this.props.yOnly || (D.left = i + r - this.state.clickX), this.props.xOnly || (D.top = w + a - this.state.clickY), D.mouse = { x: r, y: a }, this.setState(D), this._dragging || (this._dragging = !0, this.props.onDragStart(this.props.dragData)), this.props.onDrag(this.props.dragData, this.currentTarget, r, a);
    });
    // Drop
    v(this, "handleMouseUp", (r) => {
      this.setState({ clicked: !1 }), this.state.dragging && (this._dragging = !1, this.drop(r.clientX, r.clientY)), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener(`${this.props.targetKey}Dropped`, this._droppedEvent);
    });
    v(this, "handleTouchEnd", (r) => {
      this.setState({ clicked: !1 }), document.removeEventListener("touchmove", this.handleTouchMove), document.removeEventListener("touchend", this.handleTouchEnd), this.state.dragging && this.drop(r.changedTouches[0].clientX, r.changedTouches[0].clientY);
    });
    v(this, "drop", (r, a) => {
      this.generateDropEvent(r, a), this.props.onDragEnd(this.props.dragData, this.currentTarget, r, a), this.containerElem && (this.props.returnToBase ? this.setState({ left: 0, top: 0, dragging: !1 }) : this.setState({ dragged: !0, dragging: !1 }));
    });
    v(this, "checkForOffsetChanges", () => {
      let r, a;
      if (this.props.customDragElement || this.props.dragClone) {
        let i = this.containerElem.getBoundingClientRect();
        r = this.state.initialLeftOffset - i.left, a = this.state.initialTopOffset - i.top;
      } else
        r = this.state.initialLeftOffset + this.state.left - this.containerElem.offsetLeft, a = this.state.initialTopOffset + this.state.top - this.containerElem.offsetTop;
      return [r, a];
    });
    this.state = {
      clickX: 0,
      clickY: 0,
      left: 0,
      top: 0,
      initialLeftOffset: 0,
      initialTopOffset: 0,
      clicked: !1,
      dragging: !1,
      dragged: !1,
      mouse: { x: 0, y: 0 }
    }, this.dragElem = null, this.ghostElem = null, this.containerElem = null, this.currentTarget = null, this.prevTarget = null, this._droppedEvent = (a) => {
      this.props.onDrop(a);
    };
  }
  componentDidMount() {
    this.dragElem = this.ghostElem || this.containerElem;
    const r = this.dragElem.getElementsByTagName("IMG");
    for (let a = 0; a < r.length; a += 1)
      r[a].setAttribute("draggable", "false");
    if (this.props.dragHandleClassName) {
      const a = this.containerElem.getElementsByClassName(this.props.dragHandleClassName);
      for (let i = 0; i < a.length; i += 1)
        this.addListeners(a[i]);
    } else
      this.addListeners(this.containerElem);
  }
  distanceIsOk(r) {
    return this._distanceWasOk ? !0 : Math.abs(this.state.start_x - r.clientX) + Math.abs(this.state.start_y - r.clientY) > this.props.dragStartThreshold ? (this._distanceWasOk = !0, !0) : !1;
  }
  render() {
    const r = {
      position: "relative",
      display: this.props.elementProps.style && this.props.elementProps.style.display ? this.props.elementProps.style.display : "inline-block"
    };
    let a = "";
    if (this.props.customDragElement || this.props.dragClone) {
      let i;
      this.props.customDragElement ? i = this.props.customDragElement : i = this.props.children, a = /* @__PURE__ */ F.jsx(
        ke,
        {
          dragging: this.state.dragging,
          left: this.state.left,
          top: this.state.top,
          zIndex: this.props.zIndex,
          setGhostElem: this.setGhostElem,
          parentState: this.state,
          children: /* @__PURE__ */ F.jsx("div", { style: { opacity: this.props.dragCloneOpacity, cursor: "move" }, children: i })
        }
      );
    } else
      r.left = this.state.left, r.top = this.state.top, r.zIndex = this.state.dragging || this.state.dragged ? this.props.zIndex : "inherit", r.cursor = this.state.dragging ? "move" : "pointer";
    if (this.props.elementProps.style)
      for (let i in this.props.elementProps.style)
        r[i] = this.props.elementProps.style[i];
    return /* @__PURE__ */ F.jsxs("div", { ...this.props.elementProps, style: r, ref: (i) => {
      this.containerElem = i;
    }, children: [
      this.props.children,
      a
    ] });
  }
}
je.propTypes = {
  children: c.node.isRequired,
  elementProps: c.object,
  // Determines what you can drop on
  targetKey: c.string,
  // If provided, we'll drag this instead of the actual object. Takes priority over dragClone if both are set
  customDragElement: c.oneOfType([c.string, c.node]),
  // If true, then we will drag a clone of the object instead of the object itself. See also customDragElement
  dragClone: c.bool,
  // ghost will display with this opacity
  dragCloneOpacity: c.number,
  // We will pass this data to the target when you drag or drop over it
  dragData: c.object,
  // If included, we'll only let you drag by grabbing elements with this className
  dragHandleClassName: c.string,
  // if True, then dragging is turned off
  noDragging: c.bool,
  // callbacks (optional):
  onDrop: c.func,
  onDrag: c.func,
  onDragEnd: c.func,
  onDragStart: c.func,
  // If true, then object will return to its starting point after you let go of it
  returnToBase: c.bool,
  // Constrain dragging to the x or y directions only
  xOnly: c.bool,
  yOnly: c.bool,
  // Defaults to 1000 while dragging, but you can customize it if you need it to go higher
  zIndex: c.number,
  // default 0
  dragStartThreshold: c.number
};
je.defaultProps = {
  targetKey: "ddc",
  elementProps: {},
  customDragElement: null,
  dragClone: !1,
  dragCloneOpacity: 0.9,
  dragData: {},
  dragHandleClassName: "",
  onDragStart: () => {
  },
  onDrag: () => {
  },
  onDragEnd: () => {
  },
  onDrop: () => {
  },
  noDragging: !1,
  returnToBase: !1,
  xOnly: !1,
  yOnly: !1,
  zIndex: 1e3,
  dragStartThreshold: 0
};
class Le extends z {
  constructor(o) {
    super(o), this.elem = null, this.handleDrop = this.handleDrop.bind(this), this._dragEnterHandler = (r) => {
      this.props.onDragEnter(r);
    }, this._dragLeaveHandler = (r) => {
      this.props.onDragLeave(r);
    }, this._dragDropHandler = (r) => {
      this.handleDrop(r);
    };
  }
  componentWillUnmount() {
    this.elem.removeEventListener(`${this.props.targetKey}DragEnter`, this._dragEnterHandler, !1), this.elem.removeEventListener(`${this.props.targetKey}DragLeave`, this._dragLeaveHandler, !1), this.elem.removeEventListener(`${this.props.targetKey}Drop`, this._dragDropHandler, !1);
  }
  componentDidMount() {
    this.elem.addEventListener(`${this.props.targetKey}DragEnter`, this._dragEnterHandler, !1), this.elem.addEventListener(`${this.props.targetKey}DragLeave`, this._dragLeaveHandler, !1), this.elem.addEventListener(`${this.props.targetKey}Drop`, this._dragDropHandler, !1);
  }
  createEvent(o, r) {
    let a;
    return typeof window.CustomEvent != "function" ? (a = document.createEvent("CustomEvent"), a.initCustomEvent(o, !0, !0, {})) : a = new CustomEvent(o, { bubbles: !0, cancelable: !0 }), Object.assign(a, r), a;
  }
  handleDrop(o) {
    const r = this.createEvent(`${this.props.targetKey}Dropped`, { dropElem: this.elem, dropData: this.props.dropData });
    o.sourceElem.dispatchEvent(r), this.props.onHit(o);
  }
  render() {
    return /* @__PURE__ */ F.jsx("span", { ref: (o) => {
      this.elem = o;
    }, children: this.props.children });
  }
}
Le.propTypes = {
  children: c.node.isRequired,
  // needs to match the targetKey in the DragDropContainer
  targetKey: c.string,
  // data that gets sent back to the DragDropContainer and shows up in its onDrop() callback event
  dropData: c.object,
  // callbacks
  onDragEnter: c.func,
  onDragLeave: c.func,
  onHit: c.func
};
Le.defaultProps = {
  targetKey: "ddc",
  onDragEnter: () => {
  },
  onDragLeave: () => {
  },
  onHit: () => () => {
  },
  dropData: {}
};
export {
  je as DragDropContainer,
  Le as DropTarget
};
