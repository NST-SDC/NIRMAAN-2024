import {
    r as c,
    a as we,
    R as je,
    L as M,
    C as G,
    X as Ne,
    M as Re,
    u as q,
    b as Ee,
    c as Ce,
    S as Pe,
    T as Se,
    d as ke,
    e as Oe,
    f as Le,
    U as Ie,
    g as Ue,
    G as _e,
    h as Te,
    A as Be,
    H as $e,
    E as F,
    i as Me,
    j as Fe
  } from "./vivek.js";
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
    new MutationObserver(a => {
      for (const i of a)
        if (i.type === "childList")
          for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
  
    function n(a) {
      const i = {};
      return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }
  
    function r(a) {
      if (a.ep) return;
      a.ep = !0;
      const i = n(a);
      fetch(a.href, i)
    }
  })();
  var se = {
      exports: {}
    },
    T = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var We = c,
    Ae = Symbol.for("react.element"),
    De = Symbol.for("react.fragment"),
    Ve = Object.prototype.hasOwnProperty,
    ze = We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  
  function oe(e, t, n) {
    var r, a = {},
      i = null,
      s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Ve.call(t, r) && !Je.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
    return {
      $$typeof: Ae,
      type: e,
      key: i,
      ref: s,
      props: a,
      _owner: ze.current
    }
  }
  T.Fragment = De;
  T.jsx = oe;
  T.jsxs = oe;
  se.exports = T;
  var l = se.exports,
    A = {},
    Y = we;
  A.createRoot = Y.createRoot, A.hydrateRoot = Y.hydrateRoot;
  /**
   * @remix-run/router v1.21.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
  function O() {
    return O = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, O.apply(this, arguments)
  }
  var R;
  (function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
  })(R || (R = {}));
  const X = "popstate";
  
  function Ge(e) {
    e === void 0 && (e = {});
  
    function t(r, a) {
      let {
        pathname: i,
        search: s,
        hash: u
      } = r.location;
      return D("", {
        pathname: i,
        search: s,
        hash: u
      }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
  
    function n(r, a) {
      return typeof a == "string" ? a : U(a)
    }
    return Ke(t, n, null, e)
  }
  
  function g(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
  }
  
  function ce(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t)
      } catch {}
    }
  }
  
  function qe() {
    return Math.random().toString(36).substr(2, 8)
  }
  
  function Q(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    }
  }
  
  function D(e, t, n, r) {
    return n === void 0 && (n = null), O({
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: ""
    }, typeof t == "string" ? k(t) : t, {
      state: n,
      key: t && t.key || r || qe()
    })
  }
  
  function U(e) {
    let {
      pathname: t = "/",
      search: n = "",
      hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
  }
  
  function k(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
  }
  
  function Ke(e, t, n, r) {
    r === void 0 && (r = {});
    let {
      window: a = document.defaultView,
      v5Compat: i = !1
    } = r, s = a.history, u = R.Pop, o = null, h = p();
    h == null && (h = 0, s.replaceState(O({}, s.state, {
      idx: h
    }), ""));
  
    function p() {
      return (s.state || {
        idx: null
      }).idx
    }
  
    function d() {
      u = R.Pop;
      let m = p(),
        y = m == null ? null : m - h;
      h = m, o && o({
        action: u,
        location: x.location,
        delta: y
      })
    }
  
    function f(m, y) {
      u = R.Push;
      let j = D(x.location, m, y);
      h = p() + 1;
      let w = Q(j, h),
        N = x.createHref(j);
      try {
        s.pushState(w, "", N)
      } catch (S) {
        if (S instanceof DOMException && S.name === "DataCloneError") throw S;
        a.location.assign(N)
      }
      i && o && o({
        action: u,
        location: x.location,
        delta: 1
      })
    }
  
    function b(m, y) {
      u = R.Replace;
      let j = D(x.location, m, y);
      h = p();
      let w = Q(j, h),
        N = x.createHref(j);
      s.replaceState(w, "", N), i && o && o({
        action: u,
        location: x.location,
        delta: 0
      })
    }
  
    function v(m) {
      let y = a.location.origin !== "null" ? a.location.origin : a.location.href,
        j = typeof m == "string" ? m : U(m);
      return j = j.replace(/ $/, "%20"), g(y, "No window.location.(origin|href) available to create URL for href: " + j), new URL(j, y)
    }
    let x = {
      get action() {
        return u
      },
      get location() {
        return e(a, s)
      },
      listen(m) {
        if (o) throw new Error("A history only accepts one active listener");
        return a.addEventListener(X, d), o = m, () => {
          a.removeEventListener(X, d), o = null
        }
      },
      createHref(m) {
        return t(a, m)
      },
      createURL: v,
      encodeLocation(m) {
        let y = v(m);
        return {
          pathname: y.pathname,
          search: y.search,
          hash: y.hash
        }
      },
      push: f,
      replace: b,
      go(m) {
        return s.go(m)
      }
    };
    return x
  }
  var Z;
  (function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
  })(Z || (Z = {}));
  
  function He(e, t, n) {
    return n === void 0 && (n = "/"), Ye(e, t, n, !1)
  }
  
  function Ye(e, t, n, r) {
    let a = typeof t == "string" ? k(t) : t,
      i = K(a.pathname || "/", n);
    if (i == null) return null;
    let s = ue(e);
    Xe(s);
    let u = null;
    for (let o = 0; u == null && o < s.length; ++o) {
      let h = ot(i);
      u = lt(s[o], h, r)
    }
    return u
  }
  
  function ue(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let a = (i, s, u) => {
      let o = {
        relativePath: u === void 0 ? i.path || "" : u,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: s,
        route: i
      };
      o.relativePath.startsWith("/") && (g(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), o.relativePath = o.relativePath.slice(r.length));
      let h = E([r, o.relativePath]),
        p = n.concat(o);
      i.children && i.children.length > 0 && (g(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + h + '".')), ue(i.children, t, p, h)), !(i.path == null && !i.index) && t.push({
        path: h,
        score: at(h, i.index),
        routesMeta: p
      })
    };
    return e.forEach((i, s) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) a(i, s);
      else
        for (let o of de(i.path)) a(i, s, o)
    }), t
  }
  
  function de(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, a = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return a ? [i, ""] : [i];
    let s = de(r.join("/")),
      u = [];
    return u.push(...s.map(o => o === "" ? i : [i, o].join("/"))), a && u.push(...s), u.map(o => e.startsWith("/") && o === "" ? "/" : o)
  }
  
  function Xe(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : it(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
  }
  const Qe = /^:[\w-]+$/,
    Ze = 3,
    et = 2,
    tt = 1,
    rt = 10,
    nt = -2,
    ee = e => e === "*";
  
  function at(e, t) {
    let n = e.split("/"),
      r = n.length;
    return n.some(ee) && (r += nt), t && (r += et), n.filter(a => !ee(a)).reduce((a, i) => a + (Qe.test(i) ? Ze : i === "" ? tt : rt), r)
  }
  
  function it(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0
  }
  
  function lt(e, t, n) {
    let {
      routesMeta: r
    } = e, a = {}, i = "/", s = [];
    for (let u = 0; u < r.length; ++u) {
      let o = r[u],
        h = u === r.length - 1,
        p = i === "/" ? t : t.slice(i.length) || "/",
        d = te({
          path: o.relativePath,
          caseSensitive: o.caseSensitive,
          end: h
        }, p),
        f = o.route;
      if (!d && h && n && !r[r.length - 1].route.index && (d = te({
          path: o.relativePath,
          caseSensitive: o.caseSensitive,
          end: !1
        }, p)), !d) return null;
      Object.assign(a, d.params), s.push({
        params: a,
        pathname: E([i, d.pathname]),
        pathnameBase: ht(E([i, d.pathnameBase])),
        route: f
      }), d.pathnameBase !== "/" && (i = E([i, d.pathnameBase]))
    }
    return s
  }
  
  function te(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: !1,
      end: !0
    });
    let [n, r] = st(e.path, e.caseSensitive, e.end), a = t.match(n);
    if (!a) return null;
    let i = a[0],
      s = i.replace(/(.)\/+$/, "$1"),
      u = a.slice(1);
    return {
      params: r.reduce((h, p, d) => {
        let {
          paramName: f,
          isOptional: b
        } = p;
        if (f === "*") {
          let x = u[d] || "";
          s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1")
        }
        const v = u[d];
        return b && !v ? h[f] = void 0 : h[f] = (v || "").replace(/%2F/g, "/"), h
      }, {}),
      pathname: i,
      pathnameBase: s,
      pattern: e
    }
  }
  
  function st(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ce(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
      a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, u, o) => (r.push({
        paramName: u,
        isOptional: o != null
      }), o ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
  }
  
  function ot(e) {
    try {
      return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
      return ce(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
  }
  
  function K(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
  }
  
  function ct(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: a = ""
    } = typeof e == "string" ? k(e) : e;
    return {
      pathname: n ? n.startsWith("/") ? n : ut(n, t) : t,
      search: pt(r),
      hash: mt(a)
    }
  }
  
  function ut(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(a => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a)
    }), n.length > 1 ? n.join("/") : "/"
  }
  
  function W(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
  }
  
  function dt(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
  }
  
  function he(e, t) {
    let n = dt(e);
    return t ? n.map((r, a) => a === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
  }
  
  function pe(e, t, n, r) {
    r === void 0 && (r = !1);
    let a;
    typeof e == "string" ? a = k(e) : (a = O({}, e), g(!a.pathname || !a.pathname.includes("?"), W("?", "pathname", "search", a)), g(!a.pathname || !a.pathname.includes("#"), W("#", "pathname", "hash", a)), g(!a.search || !a.search.includes("#"), W("#", "search", "hash", a)));
    let i = e === "" || a.pathname === "",
      s = i ? "/" : a.pathname,
      u;
    if (s == null) u = n;
    else {
      let d = t.length - 1;
      if (!r && s.startsWith("..")) {
        let f = s.split("/");
        for (; f[0] === "..";) f.shift(), d -= 1;
        a.pathname = f.join("/")
      }
      u = d >= 0 ? t[d] : "/"
    }
    let o = ct(a, u),
      h = s && s !== "/" && s.endsWith("/"),
      p = (i || s === ".") && n.endsWith("/");
    return !o.pathname.endsWith("/") && (h || p) && (o.pathname += "/"), o
  }
  const E = e => e.join("/").replace(/\/\/+/g, "/"),
    ht = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    pt = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    mt = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  
  function ft(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
  }
  const me = ["post", "put", "patch", "delete"];
  new Set(me);
  const xt = ["get", ...me];
  new Set(xt);
  /**
   * React Router v6.28.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
  function L() {
    return L = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, L.apply(this, arguments)
  }
  const H = c.createContext(null),
    vt = c.createContext(null),
    C = c.createContext(null),
    B = c.createContext(null),
    P = c.createContext({
      outlet: null,
      matches: [],
      isDataRoute: !1
    }),
    fe = c.createContext(null);
  
  function gt(e, t) {
    let {
      relative: n
    } = t === void 0 ? {} : t;
    I() || g(!1);
    let {
      basename: r,
      navigator: a
    } = c.useContext(C), {
      hash: i,
      pathname: s,
      search: u
    } = ge(e, {
      relative: n
    }), o = s;
    return r !== "/" && (o = s === "/" ? r : E([r, s])), a.createHref({
      pathname: o,
      search: u,
      hash: i
    })
  }
  
  function I() {
    return c.useContext(B) != null
  }
  
  function $() {
    return I() || g(!1), c.useContext(B).location
  }
  
  function xe(e) {
    c.useContext(C).static || c.useLayoutEffect(e)
  }
  
  function ve() {
    let {
      isDataRoute: e
    } = c.useContext(P);
    return e ? Lt() : bt()
  }
  
  function bt() {
    I() || g(!1);
    let e = c.useContext(H),
      {
        basename: t,
        future: n,
        navigator: r
      } = c.useContext(C),
      {
        matches: a
      } = c.useContext(P),
      {
        pathname: i
      } = $(),
      s = JSON.stringify(he(a, n.v7_relativeSplatPath)),
      u = c.useRef(!1);
    return xe(() => {
      u.current = !0
    }), c.useCallback(function(h, p) {
      if (p === void 0 && (p = {}), !u.current) return;
      if (typeof h == "number") {
        r.go(h);
        return
      }
      let d = pe(h, JSON.parse(s), i, p.relative === "path");
      e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : E([t, d.pathname])), (p.replace ? r.replace : r.push)(d, p.state, p)
    }, [t, r, s, i, e])
  }
  
  function ge(e, t) {
    let {
      relative: n
    } = t === void 0 ? {} : t, {
      future: r
    } = c.useContext(C), {
      matches: a
    } = c.useContext(P), {
      pathname: i
    } = $(), s = JSON.stringify(he(a, r.v7_relativeSplatPath));
    return c.useMemo(() => pe(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
  }
  
  function yt(e, t) {
    return wt(e, t)
  }
  
  function wt(e, t, n, r) {
    I() || g(!1);
    let {
      navigator: a
    } = c.useContext(C), {
      matches: i
    } = c.useContext(P), s = i[i.length - 1], u = s ? s.params : {};
    s && s.pathname;
    let o = s ? s.pathnameBase : "/";
    s && s.route;
    let h = $(),
      p;
    if (t) {
      var d;
      let m = typeof t == "string" ? k(t) : t;
      o === "/" || (d = m.pathname) != null && d.startsWith(o) || g(!1), p = m
    } else p = h;
    let f = p.pathname || "/",
      b = f;
    if (o !== "/") {
      let m = o.replace(/^\//, "").split("/");
      b = "/" + f.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let v = He(e, {
        pathname: b
      }),
      x = Ct(v && v.map(m => Object.assign({}, m, {
        params: Object.assign({}, u, m.params),
        pathname: E([o, a.encodeLocation ? a.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? o : E([o, a.encodeLocation ? a.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
      })), i, n, r);
    return t && x ? c.createElement(B.Provider, {
      value: {
        location: L({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, p),
        navigationType: R.Pop
      }
    }, x) : x
  }
  
  function jt() {
    let e = Ot(),
      t = ft(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
      };
    return c.createElement(c.Fragment, null, c.createElement("h2", null, "Unexpected Application Error!"), c.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? c.createElement("pre", {
      style: a
    }, n) : null, null)
  }
  const Nt = c.createElement(jt, null);
  class Rt extends c.Component {
    constructor(t) {
      super(t), this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      }
    }
    static getDerivedStateFromError(t) {
      return {
        error: t
      }
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      } : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation
      }
    }
    componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n)
    }
    render() {
      return this.state.error !== void 0 ? c.createElement(P.Provider, {
        value: this.props.routeContext
      }, c.createElement(fe.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children
    }
  }
  
  function Et(e) {
    let {
      routeContext: t,
      match: n,
      children: r
    } = e, a = c.useContext(H);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), c.createElement(P.Provider, {
      value: t
    }, r)
  }
  
  function Ct(e, t, n, r) {
    var a;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
      else return null
    }
    let s = e,
      u = (a = n) == null ? void 0 : a.errors;
    if (u != null) {
      let p = s.findIndex(d => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0);
      p >= 0 || g(!1), s = s.slice(0, Math.min(s.length, p + 1))
    }
    let o = !1,
      h = -1;
    if (n && r && r.v7_partialHydration)
      for (let p = 0; p < s.length; p++) {
        let d = s[p];
        if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (h = p), d.route.id) {
          let {
            loaderData: f,
            errors: b
          } = n, v = d.route.loader && f[d.route.id] === void 0 && (!b || b[d.route.id] === void 0);
          if (d.route.lazy || v) {
            o = !0, h >= 0 ? s = s.slice(0, h + 1) : s = [s[0]];
            break
          }
        }
      }
    return s.reduceRight((p, d, f) => {
      let b, v = !1,
        x = null,
        m = null;
      n && (b = u && d.route.id ? u[d.route.id] : void 0, x = d.route.errorElement || Nt, o && (h < 0 && f === 0 ? (v = !0, m = null) : h === f && (v = !0, m = d.route.hydrateFallbackElement || null)));
      let y = t.concat(s.slice(0, f + 1)),
        j = () => {
          let w;
          return b ? w = x : v ? w = m : d.route.Component ? w = c.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = p, c.createElement(Et, {
            match: d,
            routeContext: {
              outlet: p,
              matches: y,
              isDataRoute: n != null
            },
            children: w
          })
        };
      return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? c.createElement(Rt, {
        location: n.location,
        revalidation: n.revalidation,
        component: x,
        error: b,
        children: j(),
        routeContext: {
          outlet: null,
          matches: y,
          isDataRoute: !0
        }
      }) : j()
    }, null)
  }
  var be = function(e) {
      return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(be || {}),
    _ = function(e) {
      return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(_ || {});
  
  function Pt(e) {
    let t = c.useContext(H);
    return t || g(!1), t
  }
  
  function St(e) {
    let t = c.useContext(vt);
    return t || g(!1), t
  }
  
  function kt(e) {
    let t = c.useContext(P);
    return t || g(!1), t
  }
  
  function ye(e) {
    let t = kt(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || g(!1), n.route.id
  }
  
  function Ot() {
    var e;
    let t = c.useContext(fe),
      n = St(_.UseRouteError),
      r = ye(_.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
  }
  
  function Lt() {
    let {
      router: e
    } = Pt(be.UseNavigateStable), t = ye(_.UseNavigateStable), n = c.useRef(!1);
    return xe(() => {
      n.current = !0
    }), c.useCallback(function(a, i) {
      i === void 0 && (i = {}), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, L({
        fromRouteId: t
      }, i)))
    }, [e, t])
  }
  const re = {};
  
  function It(e, t) {
    re[t] || (re[t] = !0, console.warn(t))
  }
  const ne = (e, t, n) => It(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
  
  function Ut(e, t) {
    e != null && e.v7_startTransition || ne("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), !(e != null && e.v7_relativeSplatPath) && !t && ne("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
  }
  
  function V(e) {
    g(!1)
  }
  
  function _t(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: a = R.Pop,
      navigator: i,
      static: s = !1,
      future: u
    } = e;
    I() && g(!1);
    let o = t.replace(/^\/*/, "/"),
      h = c.useMemo(() => ({
        basename: o,
        navigator: i,
        static: s,
        future: L({
          v7_relativeSplatPath: !1
        }, u)
      }), [o, u, i, s]);
    typeof r == "string" && (r = k(r));
    let {
      pathname: p = "/",
      search: d = "",
      hash: f = "",
      state: b = null,
      key: v = "default"
    } = r, x = c.useMemo(() => {
      let m = K(p, o);
      return m == null ? null : {
        location: {
          pathname: m,
          search: d,
          hash: f,
          state: b,
          key: v
        },
        navigationType: a
      }
    }, [o, p, d, f, b, v, a]);
    return x == null ? null : c.createElement(C.Provider, {
      value: h
    }, c.createElement(B.Provider, {
      children: n,
      value: x
    }))
  }
  
  function Tt(e) {
    let {
      children: t,
      location: n
    } = e;
    return yt(z(t), n)
  }
  new Promise(() => {});
  
  function z(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return c.Children.forEach(e, (r, a) => {
      if (!c.isValidElement(r)) return;
      let i = [...t, a];
      if (r.type === c.Fragment) {
        n.push.apply(n, z(r.props.children, i));
        return
      }
      r.type !== V && g(!1), !r.props.index || !r.props.children || g(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (s.children = z(r.props.children, i)), n.push(s)
    }), n
  }
  /**
   * React Router DOM v6.28.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
  function J() {
    return J = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, J.apply(this, arguments)
  }
  
  function Bt(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      a, i;
    for (i = 0; i < r.length; i++) a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
  }
  
  function $t(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
  }
  
  function Mt(e, t) {
    return e.button === 0 && (!t || t === "_self") && !$t(e)
  }
  const Ft = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    Wt = "6";
  try {
    window.__reactRouterVersion = Wt
  } catch {}
  const At = "startTransition",
    ae = je[At];
  
  function Dt(e) {
    let {
      basename: t,
      children: n,
      future: r,
      window: a
    } = e, i = c.useRef();
    i.current == null && (i.current = Ge({
      window: a,
      v5Compat: !0
    }));
    let s = i.current,
      [u, o] = c.useState({
        action: s.action,
        location: s.location
      }),
      {
        v7_startTransition: h
      } = r || {},
      p = c.useCallback(d => {
        h && ae ? ae(() => o(d)) : o(d)
      }, [o, h]);
    return c.useLayoutEffect(() => s.listen(p), [s, p]), c.useEffect(() => Ut(r), [r]), c.createElement(_t, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: s,
      future: r
    })
  }
  const Vt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    zt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Jt = c.forwardRef(function(t, n) {
      let {
        onClick: r,
        relative: a,
        reloadDocument: i,
        replace: s,
        state: u,
        target: o,
        to: h,
        preventScrollReset: p,
        viewTransition: d
      } = t, f = Bt(t, Ft), {
        basename: b
      } = c.useContext(C), v, x = !1;
      if (typeof h == "string" && zt.test(h) && (v = h, Vt)) try {
        let w = new URL(window.location.href),
          N = h.startsWith("//") ? new URL(w.protocol + h) : new URL(h),
          S = K(N.pathname, b);
        N.origin === w.origin && S != null ? h = S + N.search + N.hash : x = !0
      } catch {}
      let m = gt(h, {
          relative: a
        }),
        y = Gt(h, {
          replace: s,
          state: u,
          target: o,
          preventScrollReset: p,
          relative: a,
          viewTransition: d
        });
  
      function j(w) {
        r && r(w), w.defaultPrevented || y(w)
      }
      return c.createElement("a", J({}, f, {
        href: v || m,
        onClick: x || i ? r : j,
        ref: n,
        target: o
      }))
    });
  var ie;
  (function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
  })(ie || (ie = {}));
  var le;
  (function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
  })(le || (le = {}));
  
  function Gt(e, t) {
    let {
      target: n,
      replace: r,
      state: a,
      preventScrollReset: i,
      relative: s,
      viewTransition: u
    } = t === void 0 ? {} : t, o = ve(), h = $(), p = ge(e, {
      relative: s
    });
    return c.useCallback(d => {
      if (Mt(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : U(h) === U(p);
        o(e, {
          replace: f,
          state: a,
          preventScrollReset: i,
          relative: s,
          viewTransition: u
        })
      }
    }, [h, o, p, r, a, n, e, i, s, u])
  }
  
  function qt() {
    const [e, t] = c.useState(!1), [n, r] = c.useState(!1);
    c.useEffect(() => {
      const i = () => {
        t(window.scrollY > 50)
      };
      return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
    }, []);
    const a = [{
      name: "Home",
      to: "home"
    }, {
      name: "Event Details",
      to: "event-details"
    }, {
      name: "Winner Gifts",
      to: "winter-gifts"
    }, {
      name: "Register",
      to: "register"
    }];
    return l.jsx("nav", {
      className: `fixed w-full z-50 transition-all duration-300 mobile-safe-top ${e?"bg-black/50 backdrop-blur-lg":""}`,
      children: l.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [l.jsxs("div", {
          className: "flex items-center justify-between h-16 md:h-20",
          children: [l.jsxs(M, {
            to: "home",
            spy: !0,
            smooth: !0,
            duration: 500,
            className: "flex items-center cursor-pointer touch-active",
            children: [l.jsx(G, {
              className: "w-8 h-8 md:w-10 md:h-10 text-purple-400"
            }), l.jsx("span", {
              className: "ml-2 text-xl md:text-2xl font-bold text-white",
              children: "NIRMAAN"
            })]
          }), l.jsx("div", {
            className: "hidden md:block",
            children: l.jsx("div", {
              className: "flex items-center space-x-8",
              children: a.map(i => l.jsx(M, {
                to: i.to,
                spy: !0,
                smooth: !0,
                duration: 500,
                className: "text-white hover:text-purple-400 cursor-pointer transition-colors text-lg touch-active",
                children: i.name
              }, i.to))
            })
          }), l.jsx("button", {
            onClick: () => r(!n),
            className: "md:hidden p-2 rounded-lg text-white hover:text-purple-400 transition-colors touch-active",
            "aria-label": "Toggle menu",
            children: n ? l.jsx(Ne, {
              className: "w-6 h-6"
            }) : l.jsx(Re, {
              className: "w-6 h-6"
            })
          })]
        }), n && l.jsx("div", {
          className: "md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-lg",
          children: l.jsx("div", {
            className: "px-4 py-3 space-y-2 mobile-safe-bottom",
            children: a.map(i => l.jsx(M, {
              to: i.to,
              spy: !0,
              smooth: !0,
              duration: 500,
              className: "block w-full px-4 py-3 text-white hover:text-purple-400 text-lg rounded-lg touch-active",
              onClick: () => r(!1),
              children: i.name
            }, i.to))
          })
        })]
      })
    })
  }
  
  function Kt() {
    const e = ve(),
      {
        ref: t,
        inView: n
      } = q({
        triggerOnce: !0,
        threshold: .1
      });
    return l.jsxs("div", {
      className: "relative min-h-screen flex items-center justify-center mobile-safe-top mobile-safe-bottom",
      ref: t,
      children: [l.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [l.jsx("div", {
          className: "absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        }), l.jsx("div", {
          className: "absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        }), l.jsx("div", {
          className: "absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        })]
      }), l.jsx("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24",
        children: l.jsxs("div", {
          className: `text-center transform transition-all duration-1000 ${n?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
          children: [l.jsx("div", {
            className: "animate-float mb-8",
            children: l.jsx(G, {
              className: "w-24 h-24 md:w-32 md:h-32 text-purple-400 mx-auto"
            })
          }), l.jsx("h1", {
            className: "text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-8 tracking-tight animate-pulse",
            children: "NIRMAAN"
          }), l.jsx("p", {
            className: "text-3xl md:text-4xl lg:text-5xl text-purple-200 mb-12 font-light",
            children: "Code the Future, Shape the Web"
          }), l.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-white",
            children: [l.jsxs("div", {
              className: "flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",
              children: [l.jsx(Ee, {
                className: "w-6 h-6 md:w-8 md:h-8 text-purple-400"
              }), l.jsx("span", {
                className: "text-lg md:text-2xl",
                children: "Nov 26, 2024"
              })]
            }), l.jsxs("div", {
              className: "flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",
              children: [l.jsx(Ce, {
                className: "w-6 h-6 md:w-8 md:h-8 text-purple-400"
              }), l.jsx("span", {
                className: "text-lg md:text-2xl",
                children: "3 PM - 8 PM"
              })]
            }), l.jsxs("div", {
              className: "flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",
              children: [l.jsx(Pe, {
                className: "w-6 h-6 md:w-8 md:h-8 text-purple-400"
              }), l.jsx("span", {
                className: "text-lg md:text-2xl",
                children: "Free Entry"
              })]
            })]
          }), l.jsx("button", {
            onClick: () => e("/register"),
            className: "inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 touch-active",
            children: "Register Now"
          })]
        })
      })]
    })
  }
  
  function Ht() {
    const {
      ref: e,
      inView: t
    } = q({
      triggerOnce: !0,
      threshold: .1
    }), n = [{
      icon: l.jsx(Se, {
        className: "w-8 h-8"
      }),
      title: "Certificate + Dev Coin + Special Prize",
      description: "Win amazing prizes and recognition for your web development skills"
    }, {
      icon: l.jsx(ke, {
        className: "w-8 h-8"
      }),
      title: "Competition Focus",
      description: "Create innovative and responsive web applications"
    }, {
      icon: l.jsx(Oe, {
        className: "w-8 h-8"
      }),
      title: "Tech Stack",
      description: "use HTML, CSS or Use any modern web framework - React, Vue, Angular, or vanilla JavaScript"
    }, {
      icon: l.jsx(Le, {
        className: "w-8 h-8"
      }),
      title: "Judging Criteria",
      description: "Projects will be judged on innovation, design, code quality, and functionality"
    }, {
      icon: l.jsx(Ie, {
        className: "w-8 h-8"
      }),
      title: "Team Size",
      description: "Participate individually or in teams of 2 to 4 members"
    }, {
      icon: l.jsx(Ue, {
        className: "w-8 h-8"
      }),
      title: "Timeline",
      description: "2.5-hour development phase with mentorship sessions and technical support"
    }];
    return l.jsx("section", {
      className: "py-24 relative overflow-hidden",
      ref: e,
      children: l.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [l.jsxs("div", {
          className: `text-center transform transition-all duration-1000 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
          children: [l.jsx("h2", {
            className: "text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8",
            children: "Event Details"
          }), l.jsx("p", {
            className: "text-xl text-purple-200 max-w-3xl mx-auto mb-16",
            children: "Join us for an exciting web development competition where creativity meets code. Shape the future of the web with your innovative ideas and technical skills."
          })]
        }), l.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: n.map((r, a) => l.jsx("div", {
            className: `transform transition-all duration-1000 delay-${a*200} ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
            children: l.jsxs("div", {
              className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/10 h-full",
              children: [l.jsx("div", {
                className: "text-purple-400 mb-6",
                children: r.icon
              }), l.jsx("h3", {
                className: "text-2xl font-semibold text-white mb-4",
                children: r.title
              }), l.jsx("p", {
                className: "text-purple-200",
                children: r.description
              })]
            })
          }, a))
        })]
      })
    })
  }
  
  function Yt() {
    const {
      ref: e,
      inView: t
    } = q({
      triggerOnce: !0,
      threshold: .1
    }), n = [{
      icon: l.jsx(_e, {
        className: "w-12 h-12"
      }),
      title: "Limited Edition Swag",
      description: "Exclusive NIRMAAN branded hoodies, t-shirts, and stickers"
    }, {
      icon: l.jsx(Te, {
        className: "w-12 h-12"
      }),
      title: "Premium Subscriptions",
      description: "1-year free access to premium development tools and platforms"
    }, {
      icon: l.jsx(Be, {
        className: "w-12 h-12"
      }),
      title: "Special Recognition",
      description: "Digital badges and certificates for all participants"
    }];
    return l.jsx("section", {
      className: "py-24 relative overflow-hidden",
      ref: e,
      children: l.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [l.jsxs("div", {
          className: `text-center transform transition-all duration-1000 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
          children: [l.jsx("h2", {
            className: "text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8",
            children: "Winner Special Gifts"
          }), l.jsx("p", {
            className: "text-xl text-purple-200 max-w-3xl mx-auto mb-16",
            children: "Participate in NIRMAAN and receive these amazing Winnerspecial gifts!"
          })]
        }), l.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: n.map((r, a) => l.jsx("div", {
            className: `transform transition-all duration-1000 delay-${a*200} ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
            children: l.jsxs("div", {
              className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/10 h-full",
              children: [l.jsx("div", {
                className: "text-purple-400 mb-6 transform hover:scale-110 transition-transform",
                children: r.icon
              }), l.jsx("h3", {
                className: "text-2xl font-semibold text-white mb-4",
                children: r.title
              }), l.jsx("p", {
                className: "text-purple-200",
                children: r.description
              })]
            })
          }, a))
        }), l.jsx("div", {
          className: `mt-16 text-center transform transition-all duration-1000 delay-600 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,
          children: l.jsx("div", {
            className: "inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-[2px] rounded-full",
            children: l.jsx("button", {
              className: "px-8 py-4 text-xl font-semibold text-white bg-black rounded-full hover:bg-transparent transition-colors",
              children: "Register Now to Claim Your Gifts"
            })
          })
        })]
      })
    })
  }
  
  function Xt() {
    return l.jsx("footer", {
      className: "py-12 relative",
      children: l.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: l.jsxs("div", {
          className: "flex flex-col items-center space-y-6",
          children: [l.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [l.jsx(G, {
              className: "w-8 h-8 text-purple-400"
            }), l.jsx("span", {
              className: "text-2xl font-bold text-white",
              children: "NIRMAAN"
            })]
          }), l.jsxs("div", {
            className: "flex items-center space-x-2 text-purple-300",
            children: [l.jsx("span", {
              children: "Made with"
            }), l.jsx($e, {
              className: "w-4 h-4 text-pink-500 animate-pulse"
            }), l.jsx("span", {
              children: "by Dev Club"
            })]
          }), l.jsx("div", {
            className: "h-px w-full max-w-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
          }), l.jsx("p", {
            className: "text-purple-300/60 text-sm text-center",
            children: "© 2024 Dev Club. All rights reserved."
          })]
        })
      })
    })
  }
  
  function Qt() {
    return l.jsxs("div", {
      className: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-screen",
      children: [l.jsx("div", {
        className: "fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"
      }), l.jsx(qt, {}), l.jsx(F, {
        name: "home",
        children: l.jsx(Kt, {})
      }), l.jsx(F, {
        name: "event-details",
        children: l.jsx(Ht, {})
      }), l.jsx(F, {
        name: "winter-gifts",
        children: l.jsx(Yt, {})
      }), l.jsx(Xt, {})]
    })
  }
  
  function Zt() {
    return l.jsxs("div", {
      className: "min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
      children: [l.jsx("div", {
        className: "fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"
      }), l.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [l.jsxs(Jt, {
          to: "/",
          className: "inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 text-xl group",
          children: [l.jsx(Me, {
            className: "w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform"
          }), "Back to Home"]
        }), l.jsxs("div", {
          className: "bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10",
          children: [l.jsx("h2", {
            className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center",
            children: "Register for NIRMAAN"
          }), l.jsx("div", {
            className: "relative overflow-hidden rounded-2xl bg-white/5",
            children: l.jsx("iframe", {
              src: "https://docs.google.com/forms/d/e/1FAIpQLSfOhLDW-DC9OrY6qFj6r_KUaIC052SRCJd4r4leZWaEleCAmA/viewform?embedded=true",
              className: "w-full h-[800px] md:h-[600px]",
              frameBorder: "0",
              marginHeight: 0,
              marginWidth: 0,
              title: "Registration Form",
              children: "Loading…"
            })
          })]
        })]
      })]
    })
  }
  
  function er() {
    return l.jsx(Dt, {
      children: l.jsxs(Tt, {
        children: [l.jsx(V, {
          path: "/",
          element: l.jsx(Qt, {})
        }), l.jsx(V, {
          path: "/register",
          element: l.jsx(Zt, {})
        })]
      })
    })
  }
  A.createRoot(document.getElementById("root")).render(l.jsx(Fe.StrictMode, {
    children: l.jsx(er, {})
  }));
