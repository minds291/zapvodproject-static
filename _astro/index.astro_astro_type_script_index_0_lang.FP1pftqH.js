(() => {
  // zapvodproekt-static/_astro/_...slug_.astro_astro_type_script_index_0_lang.BWSKoNvb.js
  var en = function() {
    return en = Object.assign || function(e) {
      for (var t, n = 1, i = arguments.length; n < i; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      return e;
    }, en.apply(this, arguments);
  };
  var is = (function() {
    function e(t, n, i) {
      var s = this;
      this.endVal = n, this.options = i, this.version = "2.10.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", autoAnimate: false, autoAnimateDelay: 200, autoAnimateOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(o) {
        s.startTime || (s.startTime = o);
        var r = o - s.startTime;
        s.remaining = s.duration - r, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(r, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(r, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (r / s.duration);
        var c = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
        s.frameVal = c ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), r < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.finalEndVal !== null ? s.update(s.finalEndVal) : s.options.onCompleteCallback && s.options.onCompleteCallback();
      }, this.formatNumber = function(o) {
        var r, c, l, m, f = o < 0 ? "-" : "";
        r = Math.abs(o).toFixed(s.options.decimalPlaces);
        var p = (r += "").split(".");
        if (c = p[0], l = p.length > 1 ? s.options.decimal + p[1] : "", s.options.useGrouping) {
          m = "";
          for (var h = 3, a = 0, u = 0, d = c.length; u < d; ++u) s.options.useIndianSeparators && u === 4 && (h = 2, a = 1), u !== 0 && a % h == 0 && (m = s.options.separator + m), a++, m = c[d - u - 1] + m;
          c = m;
        }
        return s.options.numerals && s.options.numerals.length && (c = c.replace(/[0-9]/g, (function(y) {
          return s.options.numerals[+y];
        })), l = l.replace(/[0-9]/g, (function(y) {
          return s.options.numerals[+y];
        }))), f + s.options.prefix + c + l + s.options.suffix;
      }, this.easeOutExpo = function(o, r, c, l) {
        return c * (1 - Math.pow(2, -10 * o / l)) * 1024 / 1023 + r;
      }, this.options = en(en({}, this.defaults), i), this.options.enableScrollSpy && (this.options.autoAnimate = true), this.options.scrollSpyDelay !== void 0 && (this.options.autoAnimateDelay = this.options.scrollSpyDelay), this.options.scrollSpyOnce && (this.options.autoAnimateOnce = true), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = typeof t == "string" ? document.getElementById(t) : t, n = n ?? this.parse(this.el.innerHTML), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window < "u" && this.options.autoAnimate && (this.error || typeof IntersectionObserver > "u" ? this.error ? console.error(this.error, t) : console.error("IntersectionObserver is not supported by this browser") : this.setupObserver());
    }
    return e.prototype.setupObserver = function() {
      var t = this, n = e.observedElements.get(this.el);
      n && n.unobserve(), e.observedElements.set(this.el, this), this.observer = new IntersectionObserver((function(i) {
        for (var s = 0, o = i; s < o.length; s++) {
          var r = o[s];
          r.isIntersecting && t.paused && !t.once ? (t.paused = false, t.autoAnimateTimeout = setTimeout((function() {
            return t.start();
          }), t.options.autoAnimateDelay), t.options.autoAnimateOnce && (t.once = true, t.observer.disconnect())) : r.isIntersecting || t.paused || (clearTimeout(t.autoAnimateTimeout), t.reset());
        }
      }), { threshold: 0 }), this.observer.observe(this.el);
    }, e.prototype.unobserve = function() {
      var t;
      clearTimeout(this.autoAnimateTimeout), (t = this.observer) === null || t === void 0 || t.disconnect(), e.observedElements.delete(this.el);
    }, e.prototype.onDestroy = function() {
      clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = true, this.unobserve(), this.options.onCompleteCallback = null, this.options.onStartCallback = null;
    }, e.prototype.determineDirectionAndSmartEasing = function() {
      var t = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t;
      var n = t - this.startVal;
      if (Math.abs(n) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t;
        var i = this.countDown ? 1 : -1;
        this.endVal = t + i * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t, this.finalEndVal = null;
      this.finalEndVal !== null ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, e.prototype.start = function(t) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, e.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, e.prototype.reset = function() {
      clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = true, this.once = false, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, e.prototype.update = function(t) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, e.prototype.printValue = function(t) {
      var n;
      if (this.el) {
        var i = this.formattingFn(t);
        !((n = this.options.plugin) === null || n === void 0) && n.render ? this.options.plugin.render(this.el, i) : this.el.tagName === "INPUT" ? this.el.value = i : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = i : this.el.innerHTML = i;
      }
    }, e.prototype.ensureNumber = function(t) {
      return typeof t == "number" && !isNaN(t);
    }, e.prototype.validateValue = function(t) {
      var n = Number(t);
      return this.ensureNumber(n) ? n : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
    }, e.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, e.prototype.parse = function(t) {
      var n = function(r) {
        return r.replace(/([.,'  ])/g, "\\$1");
      }, i = n(this.options.separator), s = n(this.options.decimal), o = t.replace(new RegExp(i, "g"), "").replace(new RegExp(s, "g"), ".");
      return parseFloat(o);
    }, e.observedElements = /* @__PURE__ */ new WeakMap(), e;
  })();
  var Te = (e) => typeof e == "string";
  var Lt = (e) => e && e !== null && e instanceof Element && "nodeType" in e;
  var ss = function(e) {
    if (!(e && e instanceof Element && e.offsetParent)) return false;
    let t = false, n = false;
    if (e.scrollWidth > e.clientWidth) {
      const i = window.getComputedStyle(e).overflowX, s = i.indexOf("hidden") !== -1, o = i.indexOf("clip") !== -1, r = i.indexOf("visible") !== -1;
      t = !s && !o && !r;
    }
    if (e.scrollHeight > e.clientHeight) {
      const i = window.getComputedStyle(e).overflowY, s = i.indexOf("hidden") !== -1, o = i.indexOf("clip") !== -1, r = i.indexOf("visible") !== -1;
      n = !s && !o && !r;
    }
    return t || n;
  };
  var Et = function(e, t = void 0) {
    return !e || e === document.body || t && e === t ? null : ss(e) ? e : Et(e.parentElement, t);
  };
  var dt = function(e) {
    var t = new DOMParser().parseFromString(e, "text/html").body;
    if (t.childElementCount > 1) {
      for (var n = document.createElement("div"); t.firstChild; ) n.appendChild(t.firstChild);
      return n;
    }
    let i = t.firstChild;
    return !i || i instanceof HTMLElement ? i : ((n = document.createElement("div")).appendChild(i), n);
  };
  var Ee = function(e = 0, t = 0, n = 0) {
    return Math.max(Math.min(t, n), e);
  };
  var De = (e) => typeof e == "object" && e !== null && e.constructor === Object && Object.prototype.toString.call(e) === "[object Object]";
  function Hn(e) {
    return De(e) || Array.isArray(e);
  }
  function Ft(e, t) {
    const n = Object.keys(e), i = Object.keys(t);
    return n.length === i.length && n.every((s) => {
      const o = e[s], r = t[s];
      return typeof o == "function" ? `${o}` == `${r}` : Hn(o) && Hn(r) ? Ft(o, r) : o === r;
    });
  }
  var $i = function(e) {
    for (const t of tn) t.getState() === qe.Running && t.tick(dn ? e - dn : 0);
    dn = e, Ct = window.requestAnimationFrame($i);
  };
  var qe;
  var ht;
  var Pt;
  (function(e) {
    e[e.Initializing = 0] = "Initializing", e[e.Running = 1] = "Running", e[e.Paused = 2] = "Paused", e[e.Completed = 3] = "Completed", e[e.Destroyed = 4] = "Destroyed";
  })(qe || (qe = {})), (function(e) {
    e[e.Spring = 0] = "Spring", e[e.Ease = 1] = "Ease";
  })(ht || (ht = {})), (function(e) {
    e[e.Loop = 0] = "Loop", e[e.Reverse = 1] = "Reverse";
  })(Pt || (Pt = {}));
  var tn = /* @__PURE__ */ new Set();
  var Ct = null;
  var dn = 0;
  function vt() {
    let e = qe.Initializing, t = ht.Ease, n = 0, i = 0, s = vt.Easings.Linear, o = 500, r = 0, c = 0, l = 0, m = 0, f = 1 / 0, p = 0.01, h = 0.01, a = false, u = {}, d = null, y = {}, v = {}, w = {}, E = 0, C = 0, M = Pt.Loop, G = vt.Easings.Linear;
    const $ = /* @__PURE__ */ new Map();
    function W(O, ..._) {
      for (const H of $.get(O) || []) H(..._);
    }
    function pe(O) {
      return i = 0, O ? d = setTimeout(() => {
        N();
      }, O) : N(), U;
    }
    function N() {
      e = qe.Running, W("start", y, v);
    }
    function K() {
      if (e = qe.Completed, w = {}, W("end", y), e === qe.Completed) if (n < E) {
        if (n++, M === Pt.Reverse) {
          const O = Object.assign({}, u);
          u = Object.assign({}, v), v = O;
        }
        pe(C);
      } else n = 0;
      return U;
    }
    const U = { getState: function() {
      return e;
    }, easing: function(O) {
      return s = O, t = ht.Ease, w = {}, U;
    }, duration: function(O) {
      return o = O, U;
    }, spring: function(O = {}) {
      t = ht.Spring;
      const _ = { velocity: 0, mass: 1, tension: 170, friction: 26, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0, clamp: true }, { velocity: H, mass: I, tension: ie, friction: J, restDelta: te, restSpeed: F, maxSpeed: ae, clamp: de } = Object.assign(Object.assign({}, _), O);
      return r = H, c = I, l = ie, m = J, h = te, p = F, f = ae, a = de, w = {}, U;
    }, isRunning: function() {
      return e === qe.Running;
    }, isSpring: function() {
      return t === ht.Spring;
    }, from: function(O) {
      return y = Object.assign({}, O), U;
    }, to: function(O) {
      return v = O, U;
    }, repeat: function(O, _ = 0, H = Pt.Loop, I) {
      return E = O, C = _, M = H, G = I || s, U;
    }, on: function(O, _) {
      var H, I;
      return H = O, I = _, $.set(H, [...$.get(H) || [], I]), U;
    }, off: function(O, _) {
      var H, I;
      return H = O, I = _, $.has(H) && $.set(H, $.get(H).filter((ie) => ie !== I)), U;
    }, start: function(O) {
      return Ft(y, v) || (e = qe.Initializing, u = Object.assign({}, y), tn.add(this), Ct || (Ct = window.requestAnimationFrame($i)), pe(O)), U;
    }, pause: function() {
      return d && (clearTimeout(d), d = null), e === qe.Running && (e = qe.Paused, W("pause", y)), U;
    }, end: K, tick: function(O) {
      O > 50 && (O = 50), i += O;
      let _ = 0, H = false;
      if (e !== qe.Running) return U;
      if (t === ht.Ease) {
        _ = Ee(0, i / o, 1), H = _ === 1;
        const ie = M === Pt.Reverse ? G : s;
        for (const J in y) y[J] = u[J] + (v[J] - u[J]) * ie(_);
      }
      if (t === ht.Spring) {
        const ie = 1e-3 * O;
        let J = 0;
        for (const te in y) {
          const F = v[te];
          let ae = y[te];
          if (typeof F != "number" || isNaN(F) || typeof ae != "number" || isNaN(ae)) continue;
          if (Math.abs(F - ae) <= h) {
            y[te] = F, w[te] = 0;
            continue;
          }
          w[te] || (typeof r == "object" && typeof r[te] == "number" ? w[te] = r[te] : w[te] = typeof r == "number" ? r : 0);
          let de = w[te];
          de = Ee(-1 * Math.abs(f), de, Math.abs(f));
          const se = de * c * m;
          de += ((ae > F ? -1 : 1) * (Math.abs(F - ae) * l) - se) / c * ie, ae += de * ie;
          const ge = y[te] > F ? ae < F : ae > F;
          let Le = Math.abs(de) < p && Math.abs(F - ae) <= h;
          a && ge && (Le = true), Le ? (ae = F, de = 0) : J++, y[te] = ae, w[te] = de;
        }
        H = !J;
      }
      const I = Object.assign({}, v);
      return W("step", y, u, v, _), H && e === qe.Running && Ft(v, I) && (e = qe.Completed, K()), U;
    }, getStartValues: function() {
      return u;
    }, getCurrentValues: function() {
      return y;
    }, getCurrentVelocities: function() {
      return w;
    }, getEndValues: function() {
      return v;
    }, destroy: function() {
      e = qe.Destroyed, d && (clearTimeout(d), d = null), u = y = v = {}, tn.delete(this);
    } };
    return U;
  }
  vt.destroy = () => {
    for (const e of tn) e.destroy();
    Ct && (cancelAnimationFrame(Ct), Ct = null);
  }, vt.Easings = { Linear: function(e) {
    return e;
  }, EaseIn: function(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * e - 10);
  }, EaseOut: function(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
  }, EaseInOut: function(e) {
    return e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
  } };
  function _t(e) {
    return typeof TouchEvent < "u" && e instanceof TouchEvent;
  }
  function zn(e, t) {
    const n = [], i = _t(e) ? e[t] : e instanceof MouseEvent && (t === "changedTouches" || e.type !== "mouseup") ? [e] : [];
    for (const s of i) n.push({ x: s.clientX, y: s.clientY, ts: Date.now() });
    return n;
  }
  function Gn(e) {
    return zn(e, "touches");
  }
  function Nn(e) {
    return zn(e, "targetTouches");
  }
  function _i(e) {
    return zn(e, "changedTouches");
  }
  function pt(e) {
    const t = e[0], n = e[1] || t;
    return { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2, ts: n.ts };
  }
  function Ht(e) {
    const t = e[0], n = e[1] || e[0];
    return t && n ? -1 * Math.sqrt((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)) : 0;
  }
  var Bn = (e) => {
    e.cancelable && e.preventDefault();
  };
  var ft = { passive: false };
  var os = { panThreshold: 5, swipeThreshold: 3, ignore: ["textarea", "input", "select", "[contenteditable]", "[data-selectable]", "[data-draggable]"] };
  var Gt = false;
  var kt = true;
  var At = (e, t) => {
    let n, i, s, o, r, c = Object.assign(Object.assign({}, os), t), l = [], m = [], f = [], p = false, h = false, a = false, u = false, d = 0, y = 0, v = 0, w = 0, E = 0, C = 0, M = 0, G = 0, $ = 0, W = [];
    const pe = /* @__PURE__ */ new Map();
    function N(F) {
      const ae = Ht(m), de = Ht(f), se = ae && de ? ae / de : 0, ge = Math.abs(M) > Math.abs(G) ? M : G, Le = { srcEvent: n, isPanRecognized: p, isSwipeRecognized: h, firstTouch: l, previousTouch: f, currentTouch: m, deltaX: v, deltaY: w, offsetX: E, offsetY: C, velocityX: M, velocityY: G, velocity: ge, angle: $, axis: s, scale: se, center: i };
      for (const He of pe.get(F) || []) He(Le);
    }
    function K(F) {
      const ae = F.target, de = F.composedPath()[0], se = c.ignore.join(","), ge = (Le) => Le && Le instanceof HTMLElement && (Le.matches(se) || Le.closest(se));
      if (ge(ae) || ge(de)) return false;
    }
    function U(F) {
      const ae = Date.now();
      if (W = W.filter((de) => !de.ts || de.ts > ae - 100), F && W.push(F), M = 0, G = 0, W.length > 3) {
        const de = W[0], se = W[W.length - 1];
        if (de && se) {
          const ge = se.x - de.x, Le = se.y - de.y, He = de.ts && se.ts ? se.ts - de.ts : 0;
          He > 0 && (M = Math.abs(ge) > 3 ? ge / (He / 30) : 0, G = Math.abs(Le) > 3 ? Le / (He / 30) : 0);
        }
      }
    }
    function O(F) {
      if (K(F) === false) return;
      if (typeof MouseEvent < "u" && F instanceof MouseEvent) {
        if (Gt) return;
      } else Gt = true;
      if (typeof MouseEvent < "u" && F instanceof MouseEvent) {
        if (!F.buttons || F.button !== 0) return;
        Bn(F);
      }
      F instanceof MouseEvent && (window.addEventListener("mousemove", _), window.addEventListener("mouseup", H)), window.addEventListener("blur", I), n = F, m = Nn(F), l = [...m], f = [], y = m.length, i = pt(m), y === 1 && (p = false, h = false, a = false), y && U(pt(m));
      const ae = Date.now(), de = ae - (d || ae);
      u = de > 0 && de <= 250 && y === 1, d = ae, clearTimeout(o), N("start");
    }
    function _(F) {
      var ae;
      if (!l.length || F.defaultPrevented || K(F) === false) return;
      n = F, f = [...m], m = Gn(F);
      const de = pt(f), se = pt(Gn(F));
      if (U(se), y = m.length, i = se, f.length === m.length ? (v = se.x - de.x, w = se.y - de.y) : (v = 0, w = 0), l.length) {
        const ge = pt(l);
        E = se.x - ge.x, C = se.y - ge.y;
      }
      if (m.length > 1) {
        const ge = Ht(m), Le = Ht(f);
        Math.abs(ge - Le) >= 0.1 && (a = true, N("pinch"));
      }
      p || (p = Math.abs(E) >= c.panThreshold || Math.abs(C) >= c.panThreshold, p && (kt = false, clearTimeout(r), r = void 0, $ = Math.abs(180 * Math.atan2(C, E) / Math.PI), s = $ > 45 && $ < 135 ? "y" : "x", l = [...m], f = [...m], E = 0, C = 0, v = 0, w = 0, (ae = window.getSelection()) === null || ae === void 0 || ae.removeAllRanges(), N("panstart"))), p && (v || w) && N("pan"), N("move");
    }
    function H(F) {
      if (n = F, !l.length) return;
      const ae = Nn(F), de = _i(F);
      if (y = ae.length, i = pt(de), de.length && U(pt(de)), f = [...m], m = [...ae], l = [...ae], y > 0) N("end"), p = false, h = false, W = [];
      else {
        const se = c.swipeThreshold;
        (Math.abs(M) > se || Math.abs(G) > se) && (h = true), p && N("panend"), h && N("swipe"), p || h || a || (N("tap"), u ? N("doubleTap") : o = setTimeout(function() {
          N("singleTap");
        }, 250)), N("end"), ie();
      }
    }
    function I() {
      clearTimeout(o), ie(), p && N("panend"), N("end");
    }
    function ie() {
      Gt = false, p = false, h = false, u = false, y = 0, W = [], m = [], f = [], l = [], v = 0, w = 0, E = 0, C = 0, M = 0, G = 0, $ = 0, s = void 0, window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", H), window.removeEventListener("blur", I), kt || r || (r = setTimeout(() => {
        kt = true, r = void 0;
      }, 100));
    }
    function J(F) {
      const ae = F.target;
      Gt = false, ae && !F.defaultPrevented && (kt || (Bn(F), F.stopPropagation()));
    }
    const te = { init: function() {
      return e && (e.addEventListener("click", J, ft), e.addEventListener("mousedown", O, ft), e.addEventListener("touchstart", O, ft), e.addEventListener("touchmove", _, ft), e.addEventListener("touchend", H), e.addEventListener("touchcancel", H)), te;
    }, on: function(F, ae) {
      return (function(de, se) {
        pe.set(de, [...pe.get(de) || [], se]);
      })(F, ae), te;
    }, off: function(F, ae) {
      return pe.has(F) && pe.set(F, pe.get(F).filter((de) => de !== ae)), te;
    }, isPointerDown: () => y > 0, destroy: function() {
      clearTimeout(o), clearTimeout(r), r = void 0, e && (e.removeEventListener("click", J, ft), e.removeEventListener("mousedown", O, ft), e.removeEventListener("touchstart", O, ft), e.removeEventListener("touchmove", _, ft), e.removeEventListener("touchend", H), e.removeEventListener("touchcancel", H)), e = null, ie();
    } };
    return te;
  };
  At.isClickAllowed = () => kt;
  var $n = { IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.", MOVE_UP: "Move up", MOVE_DOWN: "Move down", MOVE_LEFT: "Move left", MOVE_RIGHT: "Move right", ZOOM_IN: "Zoom in", ZOOM_OUT: "Zoom out", TOGGLE_FULL: "Toggle zoom level", TOGGLE_1TO1: "Toggle zoom level", ITERATE_ZOOM: "Toggle zoom level", ROTATE_CCW: "Rotate counterclockwise", ROTATE_CW: "Rotate clockwise", FLIP_X: "Flip horizontally", FLIP_Y: "Flip vertically", RESET: "Reset", TOGGLE_FS: "Toggle fullscreen" };
  var ue = (e, t = "") => {
    e && e.classList && t.split(" ").forEach((n) => {
      n && e.classList.add(n);
    });
  };
  var Fe = (e, t = "") => {
    e && e.classList && t.split(" ").forEach((n) => {
      n && e.classList.remove(n);
    });
  };
  var Ne = (e, t = "", n) => {
    e && e.classList && t.split(" ").forEach((i) => {
      i && e.classList.toggle(i, n || false);
    });
  };
  var yt = (e) => {
    e.cancelable && e.preventDefault();
  };
  var Be = (e, t = 1e4) => (e = parseFloat(e + "") || 0, Math.round((e + Number.EPSILON) * t) / t);
  var it = (e) => e instanceof HTMLImageElement;
  var ne;
  var qn;
  (function(e) {
    e.Reset = "reset", e.Zoom = "zoom", e.ZoomIn = "zoomIn", e.ZoomOut = "zoomOut", e.ZoomTo = "zoomTo", e.ToggleCover = "toggleCover", e.ToggleFull = "toggleFull", e.ToggleMax = "toggleMax", e.IterateZoom = "iterateZoom", e.Pan = "pan", e.Swipe = "swipe", e.Move = "move", e.MoveLeft = "moveLeft", e.MoveRight = "moveRight", e.MoveUp = "moveUp", e.MoveDown = "moveDown", e.RotateCCW = "rotateCCW", e.RotateCW = "rotateCW", e.FlipX = "flipX", e.FlipY = "flipY", e.ToggleFS = "toggleFS";
  })(ne || (ne = {})), (function(e) {
    e.Cover = "cover", e.Full = "full", e.Max = "max";
  })(qn || (qn = {}));
  var tt = { x: 0, y: 0, scale: 1, angle: 0, flipX: 1, flipY: 1 };
  var Pn = { bounds: true, classes: { container: "f-panzoom", wrapper: "f-panzoom__wrapper", content: "f-panzoom__content", viewport: "f-panzoom__viewport" }, clickAction: ne.ToggleFull, dblClickAction: false, gestures: {}, height: "auto", l10n: $n, maxScale: 4, minScale: 1, mouseMoveFactor: 1, panMode: "drag", protected: false, singleClickAction: false, spinnerTpl: '<div class="f-spinner"></div>', wheelAction: ne.Zoom, width: "auto" };
  var Nt;
  var Wn = 0;
  var Yn = 0;
  var Bt = 0;
  var Cn = (e, t = {}, n = {}) => {
    let i, s, o, r, c, l, m, f, p = 0, h = Object.assign(Object.assign({}, Pn), t), a = {}, u = Object.assign({}, tt), d = Object.assign({}, tt);
    const y = [];
    function v(g) {
      let x = h[g];
      return x && typeof x == "function" ? x(B) : x;
    }
    function w() {
      return e && e.parentElement && i && p === 3;
    }
    const E = /* @__PURE__ */ new Map();
    function C(g, ...x) {
      const D = [...E.get(g) || []];
      h.on && D.push(h.on[g]);
      for (const z of D) z && typeof z == "function" && z(B, ...x);
      g !== "*" && C("*", g, ...x);
    }
    function M(g) {
      if (!w()) return;
      const x = g.target;
      if (Et(x)) return;
      const D = Date.now(), z = [-g.deltaX || 0, -g.deltaY || 0, -g.detail || 0].reduce(function(ee, le) {
        return Math.abs(le) > Math.abs(ee) ? le : ee;
      }), S = Ee(-1, z, 1);
      C("wheel", g, S);
      const L = v("wheelAction");
      if (!L || g.defaultPrevented) return;
      const Y = d.scale;
      let Q = Y * (S > 0 ? 1.5 : 0.5);
      if (L === ne.Zoom) {
        const ee = Math.abs(g.deltaY) < 100 && Math.abs(g.deltaX) < 100;
        if (D - Yn < (ee ? 200 : 45)) return void yt(g);
        Yn = D;
        const le = ie(), fe = F();
        if (Be(Q) < Be(le) && Be(Y) <= Be(le) ? (Bt += Math.abs(S), Q = le) : Be(Q) > Be(fe) && Be(Y) >= Be(fe) ? (Bt += Math.abs(S), Q = fe) : (Bt = 0, Q = Ee(le, Q, fe)), Bt > 7) return;
      }
      switch (yt(g), L) {
        case ne.Pan:
          ge(L, { srcEvent: g, deltaX: 2 * -g.deltaX, deltaY: 2 * -g.deltaY });
          break;
        case ne.Zoom:
          ge(ne.ZoomTo, { srcEvent: g, scale: Q, center: { x: g.clientX, y: g.clientY } });
          break;
        default:
          ge(L, { srcEvent: g });
      }
    }
    function G(g) {
      var x, D;
      const z = g.composedPath()[0];
      if (!At.isClickAllowed() || !Lt(z) || g.defaultPrevented || !e?.contains(z) || z.hasAttribute("disabled") || z.hasAttribute("aria-disabled") || z.hasAttribute("data-carousel-go-prev") || z.hasAttribute("data-carousel-go-next")) return;
      const S = z.closest("[data-panzoom-action]"), L = (x = S?.dataset) === null || x === void 0 ? void 0 : x.panzoomAction, Y = ((D = S?.dataset) === null || D === void 0 ? void 0 : D.panzoomValue) || "";
      if (L) {
        switch (yt(g), L) {
          case ne.ZoomTo:
          case ne.ZoomIn:
          case ne.ZoomOut:
            ge(L, { scale: parseFloat(Y || "") || void 0 });
            break;
          case ne.MoveLeft:
          case ne.MoveRight:
            ge(L, { deltaX: parseFloat(Y || "") || void 0 });
            break;
          case ne.MoveUp:
          case ne.MoveDown:
            ge(L, { deltaY: parseFloat(Y || "") || void 0 });
            break;
          case ne.ToggleFS:
            oe();
            break;
          default:
            ge(L);
        }
        return;
      }
      if (!i?.contains(z)) return;
      const Q = { srcEvent: g };
      if (ge(v("clickAction"), Q), v("dblClickAction")) {
        const ee = Date.now(), le = ee - (Wn || ee);
        Wn = ee, le > 0 && le <= 250 ? (Nt && (clearTimeout(Nt), Nt = void 0), ge(v("dblClickAction"), Q)) : Nt = setTimeout(() => {
          ge(v("singleClickAction"), Q);
        }, 250);
      }
    }
    function $(g) {
      if (f = g, !w() || !_() || u.scale <= 1 || d.scale <= 1 || (i?.dataset.animationName || "").indexOf("zoom") > -1) return;
      const x = H(d.scale);
      if (!x) return;
      const { x: D, y: z } = x;
      ge(ne.Pan, { deltaX: D - d.x, deltaY: z - d.y });
    }
    function W() {
      var g;
      e && (Fe(e, "is-loading"), (g = e.querySelector(".f-spinner")) === null || g === void 0 || g.remove());
    }
    function pe() {
      if (!e || !s) return;
      if (W(), it(s) && (!s.complete || !s.naturalWidth)) return p = 2, i?.classList.add("has-error"), void C("error");
      C("loaded");
      const { width: g, height: x } = U();
      it(s) && (s.setAttribute("width", g + ""), s.setAttribute("height", x + "")), i && (Fe(i, "has-error"), it(s) && (i.setAttribute("width", g + ""), i.setAttribute("height", x + ""), i.style.aspectRatio = `${g / x || ""}`)), l = vt().on("start", (z, S) => {
        S.angle !== void 0 && (S.angle = 90 * Math.round(S.angle / 90)), S.flipX !== void 0 && (S.flipX = S.flipX > 0 ? 1 : -1), S.flipY !== void 0 && (S.flipY = S.flipY > 0 ? 1 : -1), d = Object.assign(Object.assign({}, tt), S), se(), C("animationStart");
      }).on("pause", (z) => {
        d = Object.assign(Object.assign({}, tt), z);
      }).on("step", (z) => {
        if (!w()) return void (l == null || l.end());
        if (u = Object.assign(Object.assign({}, tt), z), _() || !v("bounds") || Ae() || d.scale > u.scale || d.scale < J()) return void Le();
        const S = ae(d.scale);
        let L = false, Y = false, Q = false, ee = false;
        u.x < S.x[0] && (L = true), u.x > S.x[1] && (Y = true), u.y < S.y[0] && (ee = true), u.y > S.y[1] && (Q = true);
        let le = false, fe = false, ve = false, be = false;
        d.x < S.x[0] && (le = true), d.x > S.x[1] && (fe = true), d.y < S.y[0] && (be = true), d.y > S.y[1] && (ve = true);
        let ye = false;
        (Y && fe || L && le) && (d.x = Ee(S.x[0], d.x, S.x[1]), ye = true), (Q && ve || ee && be) && (d.y = Ee(S.y[0], d.y, S.y[1]), ye = true), ye && l && l.spring({ tension: 94, friction: 17, maxSpeed: 555 * d.scale, restDelta: 0.1, restSpeed: 0.1, velocity: l.getCurrentVelocities() }).from(u).to(d).start(), Le();
      }).on("end", () => {
        c?.isPointerDown() || de(), l?.isRunning() || (se(), C("animationEnd"));
      }), (function() {
        const z = v("gestures");
        if (!z || !r || !s) return;
        let S = false;
        c = At(r, z).on("start", (L) => {
          if (!v("gestures") || !l || !w() || _()) return;
          const Y = L.srcEvent;
          (u.scale > 1 || _e(u.angle) || L.currentTouch.length > 1) && (Y?.stopPropagation(), l.pause(), S = true), L.currentTouch.length === 1 && C("touchStart");
        }).on("move", (L) => {
          var Y;
          S && (d.scale !== 1 || _e(d.angle) || L.currentTouch.length > 1) && (yt(L.srcEvent), (Y = L.srcEvent) === null || Y === void 0 || Y.stopPropagation());
        }).on("pan", (L) => {
          if (!S) return;
          const Y = L.srcEvent;
          (d.scale !== 1 || _e(d.angle) || L.currentTouch.length > 1) && (yt(Y), ge(ne.Pan, L));
        }).on("swipe", (L) => {
          S && (d.scale > 1 || _e(d.angle)) && ge(ne.Swipe, L);
        }).on("tap", (L) => {
          C("click", L);
        }).on("singleTap", (L) => {
          C("singleClick", L);
        }).on("doubleTap", (L) => {
          C("dblClick", L);
        }).on("pinch", (L) => {
          S && (L.scale > J() ? ge(ne.ZoomIn, L) : L.scale < J() ? ge(ne.ZoomOut, L) : ge(ne.Pan, L));
        }).on("end", (L) => {
          S && (L.currentTouch.length ? (L.srcEvent.stopPropagation(), yt(L.srcEvent), l?.end()) : (S = false, se(), de(), C("touchEnd")));
        }).init();
      })(), r && (r.addEventListener("wheel", M, { passive: false }), y.push(() => {
        r?.removeEventListener("wheel", M, { passive: false });
      })), e?.addEventListener("click", G), document?.addEventListener("mousemove", $), y.push(() => {
        e?.removeEventListener("click", G), document?.removeEventListener("mousemove", $);
      });
      const D = N();
      u = Object.assign({}, D), d = Object.assign({}, D), p = 3, Le(), se(), C("ready"), requestAnimationFrame(() => {
        p === 3 && (W(), r && (r.style.visibility = ""));
      });
    }
    function N() {
      const g = Object.assign({}, v("startPos") || {});
      let x = g.scale, D = 1;
      D = typeof x == "string" ? I(x) : typeof x == "number" ? x : J();
      const z = Object.assign(Object.assign(Object.assign({}, tt), g), { scale: D }), S = _() ? H(D) : void 0;
      if (S) {
        const { x: L, y: Y } = S;
        z.x = L, z.y = Y;
      }
      return z;
    }
    function K() {
      const g = { top: 0, left: 0, width: 0, height: 0 };
      if (i) {
        const x = i.getBoundingClientRect();
        _e(d.angle) ? (g.top = x.top + 0.5 * x.height - 0.5 * x.width, g.left = x.left + 0.5 * x.width - 0.5 * x.height, g.width = x.height, g.height = x.width) : (g.top = x.top, g.left = x.left, g.width = x.width, g.height = x.height);
      }
      return g;
    }
    function U() {
      let g = v("width"), x = v("height");
      if (s && g === "auto") {
        const D = s.getAttribute("width");
        g = D ? parseFloat(D + "") : s.dataset.width !== void 0 ? parseFloat(s.dataset.width + "") : it(r) ? r.naturalWidth : it(s) ? s.naturalWidth : i?.getBoundingClientRect().width || 0;
      } else g = Te(g) ? parseFloat(g) : g;
      if (s && x === "auto") {
        const D = s.getAttribute("height");
        x = D ? parseFloat(D + "") : s.dataset.height !== void 0 ? parseFloat(s.dataset.height + "") : it(r) ? r.naturalHeight : it(s) ? s.naturalHeight : i?.getBoundingClientRect().height || 0;
      } else x = Te(x) ? parseFloat(x) : x;
      return { width: g, height: x };
    }
    function O() {
      const g = K();
      return { width: g.width, height: g.height };
    }
    function _() {
      return v("panMode") === "mousemove" && matchMedia("(hover: hover)").matches;
    }
    function H(g) {
      const x = f || v("event"), D = i?.getBoundingClientRect();
      if (!x || !D || g <= 1) return { x: 0, y: 0 };
      const z = (x.clientX || 0) - D.left, S = (x.clientY || 0) - D.top, { width: L, height: Y } = O(), Q = ae(g);
      if (g > 1) {
        const be = v("mouseMoveFactor");
        be > 1 && (g *= be);
      }
      let ee = L * g, le = Y * g, fe = 0.5 * (ee - L) - z / L * 100 / 100 * (ee - L), ve = 0.5 * (le - Y) - S / Y * 100 / 100 * (le - Y);
      return fe = Ee(Q.x[0], fe, Q.x[1]), ve = Ee(Q.y[0], ve, Q.y[1]), { x: fe, y: ve };
    }
    function I(g) {
      if (!g) return d.scale;
      if (!e) return 1;
      const x = e.getBoundingClientRect(), D = K(), { width: z, height: S } = U(), L = (fe) => {
        if (typeof fe == "number") return fe;
        switch (fe) {
          case "min":
          case "base":
            return 1;
          case "cover":
            return Math.max(x.height / D.height, x.width / D.width) || 1;
          case "full":
          case "max": {
            const ve = _e(d.angle) ? S : z;
            return ve && D.width ? ve / D.width : 1;
          }
        }
      }, Y = v("minScale"), Q = v("maxScale"), ee = Math.min(L("full"), L(Y)), le = typeof Q == "number" ? L("full") * Q : Math.min(L("full"), L(Q));
      switch (g) {
        case "min":
          return ee;
        case "base":
          return Ee(ee, 1, le);
        case "cover":
          return L("cover");
        case "full":
          return Math.min(le, L("full"));
        case "max":
          return le;
      }
    }
    function ie() {
      return I("min");
    }
    function J() {
      return I("base");
    }
    function te() {
      return I("full");
    }
    function F() {
      return I("max");
    }
    function ae(g) {
      const x = { x: [0, 0], y: [0, 0] }, D = e?.getBoundingClientRect();
      if (!D) return x;
      const z = K(), S = D.width, L = D.height;
      let Y = z.width, Q = z.height, ee = g = g === void 0 ? d.scale : g, le = g;
      if (_() && g > 1) {
        const fe = v("mouseMoveFactor");
        fe > 1 && (Y * g > S + 0.01 && (ee *= fe), Q * g > L + 0.01 && (le *= fe));
      }
      if (Y *= ee, Q *= le, Y > S) {
        x.x[0] = 0.5 * (S - Y), x.x[1] = 0.5 * (Y - S);
        const fe = 0.5 * (z.left - D.left), ve = 0.5 * (z.left + z.width - D.right);
        x.x[0] -= fe + ve, x.x[1] -= fe + ve;
      }
      if (Q > L) {
        x.y[0] = 0.5 * (L - Q), x.y[1] = 0.5 * (Q - L);
        const fe = 0.5 * (z.top - D.top), ve = 0.5 * (z.top + z.height - D.bottom);
        x.y[0] -= fe + ve, x.y[1] -= fe + ve;
      }
      return x;
    }
    function de() {
      if (!w() || !v("bounds") || !l) return;
      const g = ie(), x = F(), D = Ee(g, d.scale, x);
      if (d.scale < g - 0.01 || d.scale > x + 0.01) return void ge(ne.ZoomTo, { scale: D });
      if (l.isRunning() || Ae()) return;
      const z = ae(D);
      d.x < z.x[0] || d.x > z.x[1] || d.y < z.y[0] || d.y > z.y[1] ? (d.x = Ee(z.x[0], d.x, z.x[1]), d.y = Ee(z.y[0], d.y, z.y[1]), l.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: l.getCurrentVelocities() }), l.from(u).to(d).start()) : Le();
    }
    function se(g) {
      var x;
      if (!w()) return;
      const D = ut(), z = Ae(), S = P(), L = q(), Y = nt(), Q = Qe();
      Ne(i, "is-fullsize", L), Ne(i, "is-expanded", S), Ne(i, "is-dragging", z), Ne(i, "can-drag", D), Ne(i, "will-zoom-in", Y), Ne(i, "will-zoom-out", Q);
      const ee = at(), le = Ye(), fe = et(), ve = !w();
      for (const be of ((x = g || e) === null || x === void 0 ? void 0 : x.querySelectorAll("[data-panzoom-action]")) || []) {
        const ye = be.dataset.panzoomAction;
        let Ie = false;
        if (ve) Ie = true;
        else switch (ye) {
          case ne.ZoomIn:
            ee || (Ie = true);
            break;
          case ne.ZoomOut:
            fe || (Ie = true);
            break;
          case ne.ToggleFull: {
            le || fe || (Ie = true);
            const xe = be.querySelector("g");
            xe && (xe.style.display = L && !Ie ? "none" : "");
            break;
          }
          case ne.IterateZoom: {
            ee || fe || (Ie = true);
            const xe = be.querySelector("g");
            xe && (xe.style.display = ee || Ie ? "" : "none");
            break;
          }
          case ne.ToggleCover:
          case ne.ToggleMax:
            ee || fe || (Ie = true);
        }
        Ie ? (be.setAttribute("aria-disabled", ""), be.setAttribute("tabindex", "-1")) : (be.removeAttribute("aria-disabled"), be.removeAttribute("tabindex"));
      }
    }
    function ge(g, x) {
      var D;
      if (!(g && e && s && l && w()) || g === ne.Swipe && Math.abs(l.getCurrentVelocities().scale) > 0.01) return;
      const z = Object.assign({}, d);
      let S = Object.assign({}, d), L = ae(_() ? z.scale : u.scale);
      const Y = l.getCurrentVelocities(), Q = K(), ee = (((D = (x = x || {}).currentTouch) === null || D === void 0 ? void 0 : D.length) || 0) > 1, le = x.velocityX || 0, fe = x.velocityY || 0;
      let ve = x.center;
      x.srcEvent && (ve = pt(_i(x.srcEvent)));
      let be = x.deltaX || 0, ye = x.deltaY || 0;
      switch (g) {
        case ne.MoveRight:
          be = x.deltaX || 100;
          break;
        case ne.MoveLeft:
          be = x.deltaX || -100;
          break;
        case ne.MoveUp:
          ye = x.deltaY || -100;
          break;
        case ne.MoveDown:
          ye = x.deltaY || 100;
      }
      let Ie = [];
      if (typeof g == "number") S.scale = g;
      else switch (g) {
        case ne.Reset:
          S = Object.assign({}, tt), S.scale = J();
          break;
        case ne.ZoomTo:
        case ne.ZoomIn:
        case ne.ZoomOut:
        case ne.ToggleCover:
        case ne.ToggleFull:
        case ne.ToggleMax:
        case ne.IterateZoom:
        case ne.Zoom:
          S.scale = He(g, x);
          break;
        case ne.Pan:
        case ne.Move:
        case ne.MoveLeft:
        case ne.MoveRight:
        case ne.MoveUp:
        case ne.MoveDown:
          if (Ae()) {
            let Pe = 1, me = 1;
            S.x <= L.x[0] && le <= 0 && (Pe = Math.max(0.01, 1 - Math.abs(1 / Q.width * Math.abs(S.x - L.x[0]))), Pe *= 0.2), S.x >= L.x[1] && le >= 0 && (Pe = Math.max(0.01, 1 - Math.abs(1 / Q.width * Math.abs(S.x - L.x[1]))), Pe *= 0.2), S.y <= L.y[0] && fe <= 0 && (me = Math.max(0.01, 1 - Math.abs(1 / Q.height * Math.abs(S.y - L.y[0]))), me *= 0.2), S.y >= L.y[1] && fe >= 0 && (me = Math.max(0.01, 1 - Math.abs(1 / Q.height * Math.abs(S.y - L.y[1]))), me *= 0.2), S.x += be * Pe, S.y += ye * me;
          } else S.x = Ee(L.x[0], S.x + be, L.x[1]), S.y = Ee(L.y[0], S.y + ye, L.y[1]);
          break;
        case ne.Swipe:
          const xe = (Pe = 0) => Math.sign(Pe) * Math.pow(Math.abs(Pe), 1.5);
          S.x += Ee(-1e3, xe(le), 1e3), S.y += Ee(-1e3, xe(fe), 1e3), fe && !le && (S.x = Ee(L.x[0], S.x, L.x[1])), !fe && le && (S.y = Ee(L.y[0], S.y, L.y[1])), Y.x = le, Y.y = fe;
          break;
        case ne.RotateCW:
          S.angle += 90;
          break;
        case ne.RotateCCW:
          S.angle -= 90;
          break;
        case ne.FlipX:
          S.flipX *= -1;
          break;
        case ne.FlipY:
          S.flipY *= -1;
      }
      if (u.angle !== void 0 && Math.abs(u.angle) >= 360 && (S.angle -= 360 * Math.floor(u.angle / 360), u.angle -= 360 * Math.floor(u.angle / 360)), Ie.length) {
        const xe = Ie.findIndex((Pe) => Pe > S.scale + 1e-4);
        S.scale = Ie[xe] || Ie[0];
      }
      if (ee && (S.scale = Ee(ie() * (ee ? 0.8 : 1), S.scale, F() * (ee ? 1.6 : 1))), _()) {
        const xe = H(S.scale);
        if (xe) {
          const { x: Pe, y: me } = xe;
          S.x = Pe, S.y = me;
        }
      } else if (Math.abs(S.scale - z.scale) > 1e-4) {
        let xe = 0, Pe = 0;
        if (ve) xe = ve.x, Pe = ve.y;
        else {
          const k = e.getBoundingClientRect();
          xe = k.x + 0.5 * k.width, Pe = k.y + 0.5 * k.height;
        }
        let me = xe - Q.left, b = Pe - Q.top;
        me -= 0.5 * Q.width, b -= 0.5 * Q.height;
        const T = (me - z.x) / z.scale, A = (b - z.y) / z.scale;
        S.x = me - T * S.scale, S.y = b - A * S.scale, !ee && v("bounds") && (L = ae(S.scale), S.x = Ee(L.x[0], S.x, L.x[1]), S.y = Ee(L.y[0], S.y, L.y[1]));
      }
      if (g === ne.Swipe) {
        let xe = 94, Pe = 17, me = 500 * S.scale, b = Y;
        l.spring({ tension: xe, friction: Pe, maxSpeed: me, restDelta: 0.1, restSpeed: 0.1, velocity: b });
      } else g === ne.Pan || ee ? l.spring({ tension: 900, friction: 17, restDelta: 0.01, restSpeed: 0.01, maxSpeed: 1 }) : l.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: Y });
      if (x.velocity === 0 || Ft(u, S)) u = Object.assign({}, S), d = Object.assign({}, S), l.end(), Le(), se();
      else {
        if (Ft(d, S)) return;
        l.from(u).to(S).start();
      }
      C("action", g);
    }
    function Le() {
      if (!s || !i || !r) return;
      const { width: g, height: x } = U();
      Object.assign(i.style, { maxWidth: `min(${g}px, 100%)`, maxHeight: `min(${x}px, 100%)` });
      const D = (function() {
        const { width: be, height: ye } = U(), { width: Ie, height: xe } = O();
        if (!e) return { x: 0, y: 0, width: 0, height: 0, scale: 0, flipX: 0, flipY: 0, angle: 0, fitWidth: Ie, fitHeight: xe, fullWidth: be, fullHeight: ye };
        let { x: Pe, y: me, scale: b, angle: T, flipX: A, flipY: k } = u, Z = 1 / te(), V = be, R = ye, X = u.scale * Z, re = d.scale * Z;
        const ce = Math.max(Ie, xe), he = Math.min(Ie, xe);
        be > ye ? (V = ce, R = he) : (V = he, R = ce), X = be > ye ? ce * b / be || 1 : ce * b / ye || 1;
        let Se = V ? be * re : 0, Ce = R ? ye * re : 0, ke = V && R ? be * X / Se : 0;
        return Pe = Pe + 0.5 * V - 0.5 * Se, me = me + 0.5 * R - 0.5 * Ce, { x: Pe, y: me, width: Se, height: Ce, scale: ke, flipX: A, flipY: k, angle: T, fitWidth: Ie, fitHeight: xe, fullWidth: be, fullHeight: ye };
      })(), { x: z, y: S, width: L, height: Y, scale: Q, angle: ee, flipX: le, flipY: fe } = D;
      let ve = `translate(${Be(z, 100)}px, ${Be(S, 100)}px)`;
      ve += le !== 1 || fe !== 1 ? ` scaleX(${Be(Q * le)}) scaleY(${Be(Q * fe)})` : ` scale(${Be(Q)})`, ee !== 0 && (ve += ` rotate(${ee}deg)`), r.style.width = `${Be(L)}px`, r.style.height = `${Be(Y)}px`, r.style.transform = `${ve}`, C("render");
    }
    function He(g = v("clickAction"), x = {}) {
      let D = d.scale, z = J(), S = [];
      if (typeof g == "number") z = g;
      else if (g) {
        switch (g) {
          case ne.ZoomTo:
            z = x.scale || 1;
            break;
          case ne.ZoomIn:
            z = D * (x.scale || 2);
            break;
          case ne.ZoomOut:
            z = D * (x.scale || 0.5);
            break;
          case ne.ToggleCover:
            S = [J(), I("cover")];
            break;
          case ne.ToggleFull:
            S = [J(), te()];
            break;
          case ne.ToggleMax:
            S = [J(), F()];
            break;
          case ne.IterateZoom:
            S = [J(), te(), F()];
            break;
          case ne.Zoom: {
            const L = te();
            z = D >= L - 0.05 ? J() : Math.min(L, D * (x.scale || 2));
            break;
          }
        }
        if (S.length) {
          const L = S.find((Y) => Y > D + 1e-4);
          z = L ?? J();
        }
      }
      return g !== ne.ZoomTo && (z = Ee(ie(), z, F())), z;
    }
    function nt() {
      return !!(w() && He() > d.scale);
    }
    function Qe() {
      return !!(w() && He() < d.scale);
    }
    function et() {
      return !!(w() && d.scale > ie());
    }
    function at() {
      return !!(w() && d.scale < F());
    }
    function Ye() {
      return !!(w() && d.scale < te());
    }
    function ut() {
      return !(!w() || !P() && !_e(d.angle) || !c || _());
    }
    function _e(g) {
      return Math.abs(g % 180) === 90;
    }
    function Ae() {
      return !(!w() || !c?.isPointerDown() || _());
    }
    function P() {
      return !!(w() && d.scale > J());
    }
    function q() {
      return !!(w() && d.scale >= te());
    }
    function oe() {
      const g = "in-fullscreen", x = "with-panzoom-in-fullscreen";
      e?.classList.toggle(g);
      const D = e?.classList.contains(g);
      D ? (document.documentElement.classList.add(x), document.addEventListener("keydown", j, true)) : (document.documentElement.classList.remove(x), document.removeEventListener("keydown", j, true)), Le(), C(D ? "enterFS" : "exitFS");
    }
    function j(g) {
      g.key !== "Escape" || g.defaultPrevented || oe();
    }
    const B = { canDrag: ut, canZoomIn: at, canZoomOut: et, canZoomToFull: Ye, destroy: function() {
      C("destroy");
      for (const g of Object.values(a)) g?.destroy(B);
      for (const g of y) g();
      return i && (i.style.aspectRatio = "", i.style.maxWidth = "", i.style.maxHeight = ""), r && (r.style.width = "", r.style.height = "", r.style.transform = ""), i = void 0, s = void 0, r = void 0, u = Object.assign({}, tt), d = Object.assign({}, tt), l?.destroy(), l = void 0, c?.destroy(), c = void 0, p = 4, B;
    }, emit: C, execute: ge, getBoundaries: ae, getContainer: function() {
      return e;
    }, getContent: function() {
      return s;
    }, getFullDim: U, getGestures: function() {
      return c;
    }, getMousemovePos: H, getOptions: function() {
      return h;
    }, getPlugins: function() {
      return a;
    }, getScale: I, getStartPosition: N, getState: function() {
      return p;
    }, getTransform: function(g) {
      return g === true ? d : u;
    }, getTween: function() {
      return l;
    }, getViewport: function() {
      return r;
    }, getWrapper: function() {
      return i;
    }, init: function() {
      return p = 0, C("init"), (function() {
        for (const [g, x] of Object.entries(Object.assign(Object.assign({}, n), h.plugins || {}))) if (g && !a[g] && x instanceof Function) {
          const D = x();
          D.init(B), a[g] = D;
        }
        C("initPlugins");
      })(), (function() {
        var g, x, D;
        const z = Object.assign(Object.assign({}, Pn.classes), v("classes")), S = (g = z.content) === null || g === void 0 ? void 0 : g.split(" ").shift(), L = (x = z.wrapper) === null || x === void 0 ? void 0 : x.split(" ").shift(), Y = (D = z.viewport) === null || D === void 0 ? void 0 : D.split(" ").shift();
        if (!(!S || !L || !Y) && e && (ue(e, z.container), s = e.querySelector(`.${S}:not(.is-clone)`), !!s)) {
          if (s.setAttribute("draggable", "false"), i = e.querySelector(`.${L}`), i || (i = document.createElement("div"), ue(i, z.wrapper), s.insertAdjacentElement("beforebegin", i), i.insertAdjacentElement("afterbegin", s)), r = e.querySelector(`.${Y}`), r || (r = document.createElement("div"), ue(r, z.viewport), i.insertAdjacentElement("beforeend", r)), r.contains(s) || r.insertAdjacentElement("afterbegin", s), o = e.querySelector(`.${S}.is-clone`), o || (o = s.cloneNode(true), o.removeAttribute("id"), ue(o, "is-clone"), i.insertAdjacentElement("afterbegin", o)), s instanceof HTMLPictureElement && (s = s.querySelector("img")), o instanceof HTMLPictureElement && (o = o.querySelector("img")), r instanceof HTMLPictureElement && (r = r.querySelector("img")), r && (r.style.visibility = "hidden", v("protected"))) {
            r.addEventListener("contextmenu", (ee) => {
              yt(ee);
            });
            const Q = document.createElement("div");
            ue(Q, "f-panzoom__protected"), r.appendChild(Q);
          }
          C("initLayout");
        }
      })(), (function() {
        if (e && i && !m) {
          let g = null;
          m = new ResizeObserver(() => {
            w() && (g = g || requestAnimationFrame(() => {
              w() && (se(), de(), C("refresh")), g = null;
            }));
          }), m.observe(i), y.push(() => {
            m?.disconnect(), m = void 0, g && (cancelAnimationFrame(g), g = null);
          });
        }
      })(), (function() {
        if (!e || !s) return;
        if (!it(s) || !it(o)) return void pe();
        const g = () => {
          s && it(s) && s.decode().then(() => {
            pe();
          }).catch(() => {
            pe();
          });
        };
        if (p = 1, e.classList.add("is-loading"), C("loading"), o.src && o.complete) return void g();
        (function() {
          if (!e || e?.querySelector(".f-spinner")) return;
          const x = v("spinnerTpl"), D = dt(x);
          D && (D.classList.add("f-spinner"), e.classList.add("is-loading"), i?.insertAdjacentElement("afterbegin", D));
        })(), o.addEventListener("load", g, false), o.addEventListener("error", g, false), y.push(() => {
          o?.removeEventListener("load", g, false), o?.removeEventListener("error", g, false);
        });
      })(), B;
    }, isDragging: Ae, isExpanded: P, isFullsize: q, isMousemoveMode: _, localize: function(g, x = []) {
      const D = v("l10n") || {};
      g = String(g).replace(/\{\{(\w+)\}\}/g, (z, S) => D[S] || z);
      for (let z = 0; z < x.length; z++) g = g.split(x[z][0]).join(x[z][1]);
      return g = g.replace(/\{\{(.*?)\}\}/g, (z, S) => S);
    }, off: function(g, x) {
      for (const D of g instanceof Array ? g : [g]) E.has(D) && E.set(D, E.get(D).filter((z) => z !== x));
      return B;
    }, on: function(g, x) {
      for (const D of g instanceof Array ? g : [g]) E.set(D, [...E.get(D) || [], x]);
      return B;
    }, toggleFS: oe, updateControls: se, version: "6.1.14", willZoomIn: nt, willZoomOut: Qe };
    return B;
  };
  Cn.l10n = { en_EN: $n }, Cn.getDefaults = () => Pn;
  var un = (e, t) => {
    let n = [];
    return e.childNodes.forEach((i) => {
      i.nodeType !== Node.ELEMENT_NODE || t && !i.matches(t) || n.push(i);
    }), n;
  };
  var Ue = (e, ...t) => {
    const n = t.length;
    for (let i = 0; i < n; i++) {
      const s = t[i] || {};
      Object.entries(s).forEach(([o, r]) => {
        const c = Array.isArray(r) ? [] : {};
        e[o] || Object.assign(e, { [o]: c }), De(r) ? Object.assign(e[o], Ue(e[o], r)) : Array.isArray(r) ? Object.assign(e, { [o]: [...r] }) : Object.assign(e, { [o]: r });
      });
    }
    return e;
  };
  var nn = function(e = 0, t = 0, n = 0, i = 0, s = 0, o = false) {
    const r = (e - t) / (n - t) * (s - i) + i;
    return o ? i < s ? Ee(i, r, s) : Ee(s, r, i) : r;
  };
  var _n = Object.assign(Object.assign({}, $n), { ERROR: "Something went wrong. <br /> Please try again later.", NEXT: "Next page", PREV: "Previous page", GOTO: "Go to page #%d", DOWNLOAD: "Download", TOGGLE_FULLSCREEN: "Toggle full-screen mode", TOGGLE_EXPAND: "Toggle full-size mode", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_AUTOPLAY: "Toggle slideshow" });
  var bt = (e) => {
    e.cancelable && e.preventDefault();
  };
  var zt = { adaptiveHeight: false, center: true, classes: { container: "f-carousel", isEnabled: "is-enabled", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", hasAdaptiveHeight: "has-adaptive-height", viewport: "f-carousel__viewport", slide: "f-carousel__slide", isSelected: "is-selected" }, dragFree: false, enabled: true, errorTpl: '<div class="f-html">{{ERROR}}</div>', fill: true, infinite: true, initialPage: 0, l10n: _n, rtl: false, slides: [], slidesPerPage: "auto", spinnerTpl: '<div class="f-spinner"></div>', transition: "fade", tween: { clamp: true, mass: 1, tension: 160, friction: 25, restDelta: 1, restSpeed: 1, velocity: 0 }, vertical: false };
  var Xn;
  var fn;
  var Un = 0;
  var sn = (e, t = {}, n = {}) => {
    Un++;
    let i, s, o, r, c, l = 0, m = Object.assign({}, zt), f = Object.assign({}, zt), p = {}, h = null, a = null, u = 0, d = 0, y = 0, v = false, w = false, E = false, C = "height", M = 0, G = true, $ = 0, W = 0, pe = 0, N = 0, K = "*", U = [], O = [];
    const _ = /* @__PURE__ */ new Set();
    let H = [], I = [], ie = 0, J = 0, te = 0;
    function F(b, ...T) {
      let A = f[b];
      return A && A instanceof Function ? A(me, ...T) : A;
    }
    function ae(b, T = []) {
      const A = F("l10n") || {};
      b = String(b).replace(/\{\{(\w+)\}\}/g, (k, Z) => A[Z] || k);
      for (let k = 0; k < T.length; k++) b = b.split(T[k][0]).join(T[k][1]);
      return b = b.replace(/\{\{(.*?)\}\}/g, (k, Z) => Z);
    }
    const de = /* @__PURE__ */ new Map();
    function se(b, ...T) {
      const A = [...de.get(b) || []];
      f.on && A.push(f.on[b]);
      for (const k of A) k && k instanceof Function && k(me, ...T);
      b === "click" && Q(T[0]), b !== "*" && se("*", b, ...T);
    }
    function ge() {
      var b, T;
      const A = Ue({}, zt, m);
      let k = "";
      const Z = m.breakpoints || {};
      for (const [V, R] of Object.entries(Z)) window.matchMedia(V).matches && (k += V, Ue(A, R));
      if (c === void 0 || k !== c) {
        if (c = k, l !== 0) {
          let V = (T = (b = I[$]) === null || b === void 0 ? void 0 : b.slides[0]) === null || T === void 0 ? void 0 : T.index;
          V === void 0 && (V = f.initialSlide), A.initialSlide = V, A.slides = [];
          for (const R of U) R.isVirtual && A.slides.push(R);
        }
        Ie(), f = A, F("enabled") !== false && (l = 0, se("init"), (function() {
          for (const [V, R] of Object.entries(Object.assign(Object.assign({}, n), f.plugins || {}))) if (V && !p[V] && R instanceof Function) {
            const X = R();
            X.init(me, sn), p[V] = X;
          }
          se("initPlugins");
        })(), (function() {
          if (!h) return;
          const V = F("classes") || {};
          ue(h, V.container);
          const R = F("style");
          if (R && De(R)) for (const [X, re] of Object.entries(R)) h.style.setProperty(X, re);
          a = Array.from(h.querySelectorAll(`.${V.viewport}`)).filter((X) => X.closest(`.${V.container}`) === h).pop() || null, a || (a = document.createElement("div"), ue(a, V.viewport), a.append(...un(h, `.${V.slide}`)), h.insertAdjacentElement("afterbegin", a)), h.carousel = me, se("initLayout");
        })(), (function() {
          if (!a) return;
          const V = F("classes") || {};
          U = [], [...un(a, `.${V.slide}`)].forEach((R) => {
            if (R.parentElement) {
              const X = oe(Object.assign({ el: R, isVirtual: false }, R.dataset || {}));
              se("createSlide", X), U.push(X);
            }
          }), x();
          for (const R of U) se("addSlide", R);
          q(F("slides"));
          for (const R of U) {
            const X = R.el;
            X?.parentElement === a && (ue(X, f.classes.slide), ue(X, R.class), fe(R), se("attachSlideEl", R));
          }
          se("initSlides");
        })(), D(), l = 1, ue(h, (F("classes") || {}).isEnabled || ""), ye(), et(), s = vt().on("start", () => {
          i && i.isPointerDown() || (Qe(), ye());
        }).on("step", (V) => {
          const R = M;
          M = V.pos, M !== R && (G = false, ye());
        }).on("end", (V) => {
          i?.isPointerDown() || (M = V.pos, s && !v && (M < pe || M > N) ? s.spring({ clamp: true, mass: 1, tension: 200, friction: 25, velocity: 0, restDelta: 1, restSpeed: 1 }).from({ pos: M }).to({ pos: Ee(pe, M, N) }).start() : G || (G = true, se("settle")));
        }), He(), (function() {
          if (!h || !a) return;
          h.addEventListener("click", Y), document.addEventListener("mousemove", Le), fn || (fn = function(R) {
            var X, re;
            const ce = (re = (X = R.target) === null || X === void 0 ? void 0 : X.dataset) === null || re === void 0 ? void 0 : re.carouselTarget;
            if (ce) {
              const he = document.getElementById(`${ce.split("#").pop()}`), Se = he?.carousel;
              Se?.emit("click", R);
            }
          }, document.addEventListener("click", fn));
          const V = a.getBoundingClientRect();
          if (ie = V.height, J = V.width, !o) {
            let R = null;
            o = new ResizeObserver(() => {
              R || (R = requestAnimationFrame(() => {
                (function() {
                  if (l !== 1 || !a) return;
                  const X = I.length, re = a.getBoundingClientRect(), ce = re.height, he = re.width;
                  X > 1 && (E && Math.abs(ce - ie) < 0.5 || !E && Math.abs(he - J) < 0.5) || (D(), He(), ie = ce, J = he, E && !ie || !E && !J || h && a && (X === I.length && i?.isPointerDown() || (F("dragFree") && (v || M > pe && M < N) ? (Qe(), ye()) : ve($, { transition: false }))));
                })(), R = null;
              }));
            }), o.observe(a);
          }
        })(), se("ready"));
      }
    }
    function Le(b) {
      Xn = b;
    }
    function He() {
      F("gestures") === false ? i && (i.destroy(), i = void 0) : i || (function() {
        const b = F("gestures");
        !i && b !== false && a && (i = At(a, b).on("start", (T) => {
          var A, k;
          if (!s || F("gestures", T) === false) return;
          const { srcEvent: Z } = T;
          E && _t(Z) && !Et(Z.target) && bt(Z), s.pause(), s.getCurrentVelocities().pos = 0;
          const V = (A = I[$]) === null || A === void 0 ? void 0 : A.slides[0], R = V?.el;
          V && _.has(V.index) && R && (M = V.offset || 0, M += ((function(X) {
            const re = window.getComputedStyle(X), ce = new DOMMatrixReadOnly(re.transform);
            return { width: ce.m41 || 0, height: ce.m42 || 0 };
          })(R)[C] || 0) * (w && !E ? 1 : -1)), S(), v || (M < pe || M > N) && s.spring({ clamp: true, mass: 1, tension: 500, friction: 25, velocity: ((k = s.getCurrentVelocities()) === null || k === void 0 ? void 0 : k.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: M }).to({ pos: Ee(pe, M, N) }).start();
        }).on("move", (T) => {
          var A, k;
          if (F("gestures", T) === false) return;
          const { srcEvent: Z, axis: V, deltaX: R, deltaY: X } = T;
          if (_t(Z) && ((A = Z.touches) === null || A === void 0 ? void 0 : A.length) > 1) return;
          const re = Z.target, ce = Et(re), he = ce ? ce.scrollHeight > ce.clientHeight ? "y" : "x" : void 0;
          if (ce && ce !== a && (!V || V === he)) return;
          if (!V) return bt(Z), Z.stopPropagation(), void Z.stopImmediatePropagation();
          if (V === "y" && !E || V === "x" && E || (bt(Z), Z.stopPropagation(), !s)) return;
          const Se = w && !E ? 1 : -1, Ce = E ? X : R;
          let ke = s?.isRunning() ? s.getEndValues().pos : M, Ve = 1;
          v || (ke <= pe && Ce * Se < 0 ? (Ve = Math.max(0.01, 1 - (Math.abs(1 / _e() * Math.abs(ke - pe)) || 0)), Ve *= 0.2) : ke >= N && Ce * Se > 0 && (Ve = Math.max(0.01, 1 - (Math.abs(1 / _e() * Math.abs(ke - N)) || 0)), Ve *= 0.2)), ke += Ce * Ve * Se, s.spring({ clamp: true, mass: 1, tension: 700, friction: 25, velocity: ((k = s.getCurrentVelocities()) === null || k === void 0 ? void 0 : k.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: M }).to({ pos: ke }).start();
        }).on("panstart", (T) => {
          F("gestures", T) !== false && T?.axis === (E ? "y" : "x") && ue(a, "is-dragging");
        }).on("panend", (T) => {
          F("gestures", T) !== false && Fe(a, "is-dragging");
        }).on("end", (T) => {
          var A, k;
          if (F("gestures", T) === false) return;
          const { srcEvent: Z, axis: V, velocityX: R, velocityY: X, currentTouch: re } = T;
          if (re.length > 0 || !s) return;
          const ce = Z.target, he = Et(ce), Se = he ? he.scrollHeight > he.clientHeight ? "y" : "x" : void 0, Ce = he && (!V || V === Se);
          E && _t(Z) && !V && Y(Z);
          const ke = I.length, Ve = F("dragFree");
          if (!ke) return;
          let Re = Ce ? 0 : F("vertical") ? X : R;
          V !== (E ? "y" : "x") && (Re = 0);
          let Ge = s?.isRunning() ? s.getEndValues().pos : M;
          const Xe = w && !E ? 1 : -1;
          if (Ce || (Ge += Re * (Ve ? 5 : 1) * Xe), !v && (Re * Xe <= 0 && Ge < pe || Re * Xe >= 0 && Ge > N)) {
            let je = 0;
            return Math.abs(Re) > 0 && (je = 2 * Math.abs(Re), je = Math.min(0.3 * _e(), je)), Ge = Ee(pe + -1 * je, Ge, N + je), void s.spring({ clamp: true, mass: 1, tension: 380, friction: 25, velocity: -1 * Re, restDelta: 1, restSpeed: 1 }).from({ pos: M }).to({ pos: Ge }).start();
          }
          if (Ve || !((A = p.Autoscroll) === null || A === void 0) && A.isEnabled()) return void (Math.abs(Re) > 10 ? s.spring({ clamp: true, mass: 1, tension: 150, friction: 25, velocity: -1 * Re, restDelta: 1, restSpeed: 1 }).from({ pos: M }).to({ pos: Ge }).start() : s.isRunning() || G || (G = true, se("settle")));
          if (!Ve && !(!((k = p.Autoscroll) === null || k === void 0) && k.isEnabled()) && (!T.offsetX && !T.offsetY || V === "y" && !E || V === "x" && E)) return void ve($, { transition: "tween" });
          let Oe = Ye(Ge);
          Math.abs(Re) > 10 && Oe === $ && (Oe += Re > 0 ? w && !E ? 1 : -1 : w && !E ? -1 : 1), ve(Oe, { transition: "tween", tween: { velocity: -1 * Re } });
        }).init());
      })(), Ne(a, "is-draggable", !!i && I.length > 0);
    }
    function nt(b = "*") {
      var T;
      const A = [];
      for (const k of U) (b === "*" || k.class && k.class.includes(b) || k.el && (!((T = k.el) === null || T === void 0) && T.classList.contains(b))) && A.push(k);
      r = void 0, K = b, O = [...A];
    }
    function Qe() {
      if (!s) return;
      const b = Ye(s?.isRunning() ? s.getEndValues().pos : M);
      b !== $ && (r = $, $ = b, fe(), et(), at(), se("change", $, r));
    }
    function et() {
      var b, T;
      if (!h) return;
      for (const R of h.querySelectorAll("[data-carousel-index]")) R.innerHTML = $ + "";
      for (const R of h.querySelectorAll("[data-carousel-page]")) R.innerHTML = $ + 1 + "";
      for (const R of h.querySelectorAll("[data-carousel-pages]")) R.innerHTML = I.length + "";
      const A = F("classes") || {}, k = Array.from(h.querySelectorAll("[data-carousel-go-to]")).filter((R) => R.closest(`.${A.container}`) === h);
      for (const R of k) parseInt(((b = R.dataset) === null || b === void 0 ? void 0 : b.carouselGoTo) || "-1", 10) === $ ? R.setAttribute("aria-current", "true") : R.removeAttribute("aria-current");
      for (const R of h.querySelectorAll("[data-carousel-go-prev]")) R.toggleAttribute("aria-disabled", !xe()), xe() ? R.removeAttribute("tabindex") : R.setAttribute("tabindex", "-1");
      for (const R of h.querySelectorAll("[data-carousel-go-next]")) R.toggleAttribute("aria-disabled", !Pe()), Pe() ? R.removeAttribute("tabindex") : R.setAttribute("tabindex", "-1");
      let Z = false;
      const V = (T = I[$]) === null || T === void 0 ? void 0 : T.slides[0];
      V && (V.downloadSrc || V.type === "image" && V.src) && (Z = true);
      for (const R of h.querySelectorAll("[data-carousel-download]")) R.toggleAttribute("aria-disabled", !Z);
    }
    function at(b) {
      var T;
      b || (b = (T = I[$]) === null || T === void 0 ? void 0 : T.slides[0]);
      const A = b?.el;
      if (A) for (const k of A.querySelectorAll("[data-slide-index]")) k.innerHTML = b.index + 1 + "";
    }
    function Ye(b) {
      var T, A, k;
      if (!I.length) return 0;
      const Z = Ae();
      let V = b;
      v ? V -= Math.floor((b - ((T = I[0]) === null || T === void 0 ? void 0 : T.pos)) / Z) * Z || 0 : V = Ee((A = I[0]) === null || A === void 0 ? void 0 : A.pos, b, (k = I[I.length - 1]) === null || k === void 0 ? void 0 : k.pos);
      const R = /* @__PURE__ */ new Map();
      let X = 0;
      for (const ce of I) {
        const he = Math.abs(ce.pos - V), Se = Math.abs(ce.pos - V - Z), Ce = Math.abs(ce.pos - V + Z), ke = Math.min(he, Se, Ce);
        R.set(X, ke), X++;
      }
      const re = R.size > 0 ? [...R.entries()].reduce((ce, he) => he[1] < ce[1] ? he : ce) : [$, 0];
      return parseInt(re[0]);
    }
    function ut() {
      return te;
    }
    function _e() {
      return u;
    }
    function Ae(b = true) {
      return O.length ? O.reduce((T, A) => T + A.dim, 0) + (O.length - (v && b ? 0 : 1)) * te : 0;
    }
    function P(b) {
      const T = Ae(), A = _e();
      if (!T || !a || !A) return [];
      const k = [];
      b = b === void 0 ? M : b, v && (b -= Math.floor(b / T) * T || 0);
      let Z = 0;
      for (let V of O) {
        const R = (X = 0) => {
          k.indexOf(V) > -1 || (V.pos = Z - b + X || 0, V.offset + X > b - V.dim - d + 0.51 && V.offset + X < b + A + y - 0.51 && k.push(V));
        };
        V.offset = Z, v && (R(T), R(-1 * T)), R(), Z += V.dim + te;
      }
      return k;
    }
    function q(b, T) {
      const A = [];
      for (const k of Array.isArray(b) ? b : [b]) {
        const Z = oe(Object.assign(Object.assign({}, k), { isVirtual: true }));
        Z.el || (Z.el = document.createElement("div")), se("createSlide", Z), A.push(Z);
      }
      U.splice(T === void 0 ? U.length : T, 0, ...A), x();
      for (const k of A) se("addSlide", k), j(k);
      return nt(K), A;
    }
    function oe(b) {
      return (Te(b) || b instanceof HTMLElement) && (b = { html: b }), Object.assign({ index: -1, el: void 0, class: "", isVirtual: true, dim: 0, pos: 0, offset: 0, html: "", src: "" }, b);
    }
    function j(b) {
      let T = b.el;
      if (!b || !T) return;
      const A = b.html ? b.html instanceof HTMLElement ? b.html : dt(b.html) : void 0;
      A && (ue(A, "f-html"), b.htmlEl = A, ue(T, "has-html"), T.append(A), se("contentReady", b));
    }
    function B(b) {
      if (!a || !b) return;
      let T = b.el;
      if (T) {
        if (T.setAttribute("index", b.index + ""), T.parentElement !== a) {
          let A;
          ue(T, f.classes.slide), ue(T, b.class), fe(b);
          for (const k of U) if (k.index > b.index) {
            A = k.el;
            break;
          }
          a.insertBefore(T, A && a.contains(A) ? A : null), se("attachSlideEl", b);
        }
        return at(b), T;
      }
    }
    function g(b) {
      const T = b?.el;
      T && (T.remove(), z(T), se("detachSlideEl", b));
    }
    function x() {
      for (let b = 0; b < U.length; b++) {
        const T = U[b], A = T.el;
        A && (T.index !== b && z(A), A.setAttribute("index", `${b}`)), T.index = b;
      }
    }
    function D() {
      var b, T, A, k, Z;
      if (!h || !a) return;
      w = F("rtl"), E = F("vertical"), C = E ? "height" : "width";
      const V = F("classes");
      if (Ne(h, V.isLTR, !w), Ne(h, V.isRTL, w), Ne(h, V.isHorizontal, !E), Ne(h, V.isVertical, E), Ne(h, V.hasAdaptiveHeight, F("adaptiveHeight")), u = 0, d = 0, y = 0, te = 0, a) {
        a.childElementCount || (a.style.display = "grid");
        const X = a.getBoundingClientRect();
        u = a.getBoundingClientRect()[C] || 0;
        const re = window.getComputedStyle(a);
        te = parseFloat(re.getPropertyValue("--f-carousel-gap")) || 0, re.getPropertyValue("overflow-" + (E ? "y" : "x")) === "visible" && (d = Math.abs(X[E ? "top" : "left"]), y = Math.abs(window[E ? "innerHeight" : "innerWidth"] - X[E ? "bottom" : "right"])), a.style.display = "";
      }
      if (!u) return;
      const R = (function() {
        let X = 0;
        if (a) {
          let re = document.createElement("div");
          re.style.display = "block", ue(re, f.classes.slide), a.appendChild(re), X = re.getBoundingClientRect()[C], re.remove(), re = void 0;
        }
        return X;
      })();
      for (const X of O) {
        const re = X.el;
        let ce = 0;
        if (!X.isVirtual && re && Lt(re)) {
          let he = false;
          re.parentElement && re.parentElement === a || (a.appendChild(re), he = true), ce = re.getBoundingClientRect()[C], he && ((b = re.parentElement) === null || b === void 0 || b.removeChild(re));
        } else ce = R;
        X.dim = ce;
      }
      if (v = false, F("infinite")) {
        v = true;
        const X = Ae();
        let re = u + d + y;
        for (let ce = 0; ce < O.length; ce++) {
          const he = ((T = O[ce]) === null || T === void 0 ? void 0 : T.dim) + te;
          if (X - he < re && X - he - re < he) {
            v = false;
            break;
          }
        }
      }
      (function() {
        var X;
        if (!h) return;
        const re = _e(), ce = Ae(false);
        let he = F("slidesPerPage");
        he = he === "auto" ? 1 / 0 : parseFloat(he + ""), I = [];
        let Se = 0, Ce = 0;
        for (const Oe of O) (!I.length || Se + Oe.dim - re > 0.05 || Ce >= he) && (I.push({ index: I.length, slides: [], dim: 0, offset: 0, pos: 0 }), Se = 0, Ce = 0), (X = I[I.length - 1]) === null || X === void 0 || X.slides.push(Oe), Se += Oe.dim + te, Ce++;
        const ke = F("center"), Ve = F("fill");
        let Re = 0;
        for (const Oe of I) {
          Oe.dim = (Oe.slides.length - 1) * te;
          for (const je of Oe.slides) Oe.dim += je.dim;
          Oe.offset = Re, Oe.pos = Re, ke !== false && (Oe.pos -= 0.5 * (re - Oe.dim)), Ve && !v && ce > re && (Oe.pos = Ee(0, Oe.pos, ce - re)), Re += Oe.dim + te;
        }
        const Ge = [];
        let Xe;
        for (const Oe of I) {
          const je = Object.assign({}, Oe);
          Xe && Math.abs(je.pos - Xe.pos) < 0.1 ? (Xe.dim += je.dim, Xe.slides = [...Xe.slides, ...je.slides]) : (Xe = je, je.index = Ge.length, Ge.push(je));
        }
        I = Ge, $ = Ee(0, $, I.length - 1);
      })(), pe = ((A = I[0]) === null || A === void 0 ? void 0 : A.pos) || 0, N = ((k = I[I.length - 1]) === null || k === void 0 ? void 0 : k.pos) || 0, l === 0 ? (function() {
        var X;
        r = void 0, $ = F("initialPage");
        const re = F("initialSlide") || void 0;
        re !== void 0 && ($ = me.getPageIndex(re) || 0), $ = Ee(0, $, I.length - 1), M = ((X = I[$]) === null || X === void 0 ? void 0 : X.pos) || 0, W = M;
      })() : W = ((Z = I[$ || 0]) === null || Z === void 0 ? void 0 : Z.pos) || 0, se("refresh"), et();
    }
    function z(b) {
      if (!b || !Lt(b)) return;
      const T = parseInt(b.getAttribute("index") || "-1");
      let A = "";
      for (const Z of Array.from(b.classList)) {
        const V = Z.match(/^f-(\w+)(Out|In)$/);
        V && V[1] && (A = V[1] + "");
      }
      if (!b || !A) return;
      const k = [`f-${A}Out`, `f-${A}In`, "to-prev", "to-next", "from-prev", "from-next"];
      b.removeEventListener("animationend", L), Fe(b, k.join(" ")), _.delete(T);
    }
    function S() {
      if (!a) return;
      const b = _.size > 0;
      for (const T of O) z(T.el);
      _.clear(), b && ye();
    }
    function L(b) {
      var T;
      ((T = b.animationName) === null || T === void 0 ? void 0 : T.substring(0, 2)) === "f-" && (z(b.target), _.size || (Fe(h, "in-transition"), !G && Math.abs(me.getPosition(true) - W) < 0.5 && (G = true, se("settle"))), ye());
    }
    function Y(b) {
      Q(b), se("click", b);
    }
    function Q(b) {
      var T;
      if (b.defaultPrevented) return;
      const A = b.composedPath()[0];
      if (A.closest("[data-carousel-go-prev]")) return bt(b), void me.prev();
      if (A.closest("[data-carousel-go-next]")) return bt(b), void me.next();
      const k = A.closest("[data-carousel-go-to]");
      if (k) return bt(b), void me.goTo(parseFloat(k.dataset.carouselGoTo || "") || 0);
      if (A.closest("[data-carousel-download]")) {
        bt(b);
        const Z = (T = I[$]) === null || T === void 0 ? void 0 : T.slides[0];
        if (Z && (Z.downloadSrc || Z.type === "image" && Z.src)) {
          const V = Z.downloadFilename, R = document.createElement("a"), X = Z.downloadSrc || Z.src || "";
          R.href = X, R.target = "_blank", R.download = V || X, R.click();
        }
        return;
      }
    }
    function ee(b) {
      var T;
      const A = b.el;
      A && ((T = A.querySelector(".f-spinner")) === null || T === void 0 || T.remove());
    }
    function le(b) {
      var T;
      const A = b.el;
      A && ((T = A.querySelector(".f-html.is-error")) === null || T === void 0 || T.remove(), Fe(A, "has-error"));
    }
    function fe(b) {
      var T;
      b || (b = (T = I[$]) === null || T === void 0 ? void 0 : T.slides[0]);
      const A = b?.el;
      if (!A) return;
      let k = F("formatCaption", b);
      k === void 0 && (k = b.caption), k = k || "";
      const Z = F("captionEl");
      if (Z && Z instanceof HTMLElement) {
        if (b.index !== $) return;
        if (Te(k) && (Z.innerHTML = ae(k + "")), k instanceof HTMLElement) {
          if (k.parentElement === Z) return;
          Z.innerHTML = "", k.parentElement && (k = k.cloneNode(true)), Z.append(k);
        }
        return;
      }
      if (!k) return;
      let V = b.captionEl || A.querySelector(".f-caption");
      !V && k instanceof HTMLElement && k.classList.contains("f-caption") && (V = k), V || (V = document.createElement("div"), ue(V, "f-caption"), Te(k) ? V.innerHTML = ae(k + "") : k instanceof HTMLElement && (k.parentElement && (k = k.cloneNode(true)), V.append(k)));
      const R = `f-caption-${Un}_${b.index}`;
      V.setAttribute("id", R), V.dataset.selectable = "true", ue(A, "has-caption"), A.setAttribute("aria-labelledby", R), b.captionEl = V, A.insertAdjacentElement("beforeend", V);
    }
    function ve(b, T = {}) {
      var A, k;
      let { transition: Z, tween: V } = Object.assign({ transition: f.transition, tween: f.tween }, T || {});
      if (!h || !s) return;
      const R = I.length;
      if (!R || (function(ce, he) {
        var Se, Ce, ke;
        if (!(h && u && s && he && Te(he) && he !== "tween")) return false;
        for (const ns of H) if (u - ns.dim > 0.5) return false;
        if (d > 0.5 || y > 0.5) return;
        const Ve = I.length;
        let Re = ce > $ ? 1 : -1;
        ce = v ? (ce % Ve + Ve) % Ve : Ee(0, ce, Ve - 1), w && (Re *= -1);
        const Ge = (Se = I[$]) === null || Se === void 0 ? void 0 : Se.slides[0], Xe = Ge?.index, Oe = (Ce = I[ce]) === null || Ce === void 0 ? void 0 : Ce.slides[0], je = Oe?.index, jn = (ke = I[ce]) === null || ke === void 0 ? void 0 : ke.pos;
        if (je === void 0 || Xe === void 0 || Xe === je || M === jn || Math.abs(u - (Oe?.dim || 0)) > 1) return false;
        G = false, s.pause(), S(), ue(h, "in-transition"), M = W = jn;
        const xt = B(Ge), Tt = B(Oe);
        return Qe(), xt && (_.add(Xe), xt.style.transform = "", xt.addEventListener("animationend", L), Fe(xt, f.classes.isSelected), xt.inert = false, ue(xt, `f-${he}Out to-${Re > 0 ? "next" : "prev"}`)), Tt && (_.add(je), Tt.style.transform = "", Tt.addEventListener("animationend", L), ue(Tt, f.classes.isSelected), Tt.inert = false, ue(Tt, `f-${he}In from-${Re > 0 ? "prev" : "next"}`)), ye(), true;
      })(b, Z)) return;
      b = v ? (b % R + R) % R : Ee(0, b, R - 1), W = ((A = I[b || 0]) === null || A === void 0 ? void 0 : A.pos) || 0;
      const re = s.isRunning() ? s.getEndValues().pos : M;
      if (Math.abs(W - re) < 1) return M = W, $ !== b && (fe(), r = $, $ = b, et(), at(), se("change", $, r)), ye(), void (G || (G = true, se("settle")));
      if (s.pause(), S(), v) {
        const ce = Ae(), he = Math.floor((re - ((k = I[0]) === null || k === void 0 ? void 0 : k.pos)) / ce) || 0, Se = W + he * ce;
        W = [Se + ce, Se, Se - ce].reduce(function(Ce, ke) {
          return Math.abs(ke - re) < Math.abs(Ce - re) ? ke : Ce;
        });
      }
      Z !== false && De(V) ? s.spring(Ue({}, f.tween, V)).from({ pos: M }).to({ pos: W }).start() : (M = W, Qe(), ye(), G || (G = true, se("settle")));
    }
    function be(b) {
      var T;
      let A = M;
      if (v && b !== true) {
        const k = Ae();
        A -= (Math.floor((M - ((T = I[0]) === null || T === void 0 ? void 0 : T.pos) || 0) / k) || 0) * k;
      }
      return A;
    }
    function ye() {
      var b;
      if (!h || !a) return;
      H = P();
      const T = /* @__PURE__ */ new Set(), A = [], k = I[$], Z = f.setTransform;
      let V;
      for (const R of O) {
        const X = _.has(R.index), re = H.indexOf(R) > -1, ce = ((b = k?.slides) === null || b === void 0 ? void 0 : b.indexOf(R)) > -1;
        if (R.isVirtual && !X && !re) continue;
        let he = B(R);
        if (he && (A.push(R), ce && T.add(he), F("adaptiveHeight") && ce)) {
          const Se = (he.lastElementChild || he).getBoundingClientRect().height;
          V = V == null ? Se : Math.max(V, Se);
        }
      }
      a && V && (a.style.height = `${V}px`), [...un(a, `.${f.classes.slide}`)].forEach((R) => {
        Ne(R, f.classes.isSelected, T.has(R));
        const X = U[parseInt(R.getAttribute("index") || "-1")];
        if (!X) return R.remove(), void z(R);
        const re = _.has(X.index), ce = H.indexOf(X) > -1;
        if (X.isVirtual && !re && !ce) return void g(X);
        if (R.inert = !ce, Z === false) return;
        let he = X.pos ? Math.round(1e4 * X.pos) / 1e4 : 0, Se = 0, Ce = 0, ke = 0, Ve = 0;
        re || (Se = E ? 0 : w ? -1 * he : he, Ce = E ? he : 0, ke = nn(Se, 0, X.dim, 0, 100), Ve = nn(Ce, 0, X.dim, 0, 100)), Z instanceof Function && !re ? Z(me, X, { x: Se, y: Ce, xPercent: ke, yPercent: Ve }) : R.style.transform = Se || Ce ? `translate3d(${ke}%, ${Ve}%,0)` : "";
      }), se("render", A);
    }
    function Ie() {
      h?.removeEventListener("click", Y), document.removeEventListener("mousemove", Le), _.clear(), o?.disconnect(), o = void 0;
      for (const b of U) {
        let T = b.el;
        T && Lt(T) && (b.state = void 0, ee(b), le(b), b.isVirtual ? (g(b), b.el = void 0) : (z(T), T.style.transform = "", a && !a.contains(T) && a.appendChild(T)));
      }
      for (const b of Object.values(p)) b?.destroy();
      p = {}, i?.destroy(), i = void 0, s?.destroy(), s = void 0;
      for (const [b, T] of Object.entries(f.classes || {})) b !== "container" && Fe(h, T);
      Fe(a, "is-draggable");
    }
    function xe() {
      return v || $ > 0;
    }
    function Pe() {
      return v || $ < I.length - 1;
    }
    const me = { add: function(b, T) {
      var A;
      let k = M;
      const Z = $, V = Ae(), R = s?.isRunning() ? s.getEndValues().pos : M, X = V && Math.floor((R - (((A = I[0]) === null || A === void 0 ? void 0 : A.pos) || 0)) / V) || 0;
      return q(b, T), nt(K), D(), s && V && (Z === $ && (k -= X * V), k === W ? M = W : s.spring({ clamp: true, mass: 1, tension: 300, friction: 25, restDelta: 1, restSpeed: 1 }).from({ pos: k }).to({ pos: W }).start()), ye(), me;
    }, canGoPrev: xe, canGoNext: Pe, destroy: function() {
      return se("destroy"), window.removeEventListener("resize", ge), Ie(), de.clear(), h = null, I = [], U = [], f = Object.assign({}, zt), p = {}, O = [], c = void 0, K = "*", l = 2, me;
    }, emit: se, filter: function(b = "*") {
      return nt(b), D(), M = Ee(pe, M, N), ye(), se("filter", b), me;
    }, getContainer: function() {
      return h;
    }, getGapDim: ut, getGestures: function() {
      return i;
    }, getLastMouseMove: function() {
      return Xn;
    }, getOption: function(b) {
      return F(b);
    }, getOptions: function() {
      return f;
    }, getPage: function() {
      return I[$];
    }, getPageIndex: function(b) {
      if (b !== void 0) {
        for (const T of I || []) for (const A of T.slides) if (A.index === b) return T.index;
        return -1;
      }
      return $;
    }, getPageIndexFromPosition: Ye, getPageProgress: function(b, T) {
      var A;
      b === void 0 && (b = $);
      const k = I[b];
      if (!k) return b > $ ? -1 : 1;
      const Z = Ae(), V = ut();
      let R = k.pos, X = be();
      if (v && T !== true) {
        const re = Math.floor((X - ((A = I[0]) === null || A === void 0 ? void 0 : A.pos)) / Z) || 0;
        X -= re * Z, R = [R + Z, R, R - Z].reduce(function(ce, he) {
          return Math.abs(he - X) < Math.abs(ce - X) ? he : ce;
        });
      }
      return (X - R) / (k.dim + V) || 0;
    }, getPageVisibility: function(b) {
      var T;
      b === void 0 && (b = $);
      const A = I[b];
      if (!A) return b > $ ? -1 : 1;
      const k = be(), Z = _e();
      let V = A.pos;
      if (v) {
        const R = Ae(), X = V + (Math.floor((k - ((T = I[0]) === null || T === void 0 ? void 0 : T.pos)) / R) || 0) * R;
        V = [X + R, X, X - R].reduce(function(re, ce) {
          return Math.abs(ce - k) < Math.abs(re - k) ? ce : re;
        });
      }
      return V > k && V + A.dim < k + Z ? 1 : V < k ? (V + A.dim - k) / A.dim || 0 : V + A.dim > k + Z && (k + Z - V) / A.dim || 0;
    }, getPages: function() {
      return I;
    }, getPlugins: function() {
      return p;
    }, getPosition: be, getSlides: function() {
      return U;
    }, getState: function() {
      return l;
    }, getTotalSlideDim: Ae, getTween: function() {
      return s;
    }, getViewport: function() {
      return a;
    }, getViewportDim: _e, getVisibleSlides: function(b) {
      return b === void 0 ? H : P(b);
    }, goTo: ve, hasNavigated: function() {
      return r !== void 0;
    }, hideError: le, hideLoading: ee, init: function() {
      if (!e || !Lt(e)) throw new Error("No Element found");
      return l !== 0 && (Ie(), l = 0), h = e, m = t, window.removeEventListener("resize", ge), m.breakpoints && window.addEventListener("resize", ge), ge(), me;
    }, isInfinite: function() {
      return v;
    }, isInTransition: function() {
      return _.size > 0;
    }, isRTL: function() {
      return w;
    }, isSettled: function() {
      return G;
    }, isVertical: function() {
      return E;
    }, localize: ae, next: function(b = {}) {
      return ve($ + 1, b), me;
    }, off: function(b, T) {
      for (const A of b instanceof Array ? b : [b]) de.has(A) && de.set(A, de.get(A).filter((k) => k !== T));
      return me;
    }, on: function(b, T) {
      for (const A of b instanceof Array ? b : [b]) de.set(A, [...de.get(A) || [], T]);
      return me;
    }, prev: function(b = {}) {
      return ve($ - 1, b), me;
    }, reInit: function(b = {}, T) {
      return Ie(), l = 0, c = void 0, K = "*", t = b, m = b, De(T) && (n = T), ge(), me;
    }, remove: function(b) {
      b === void 0 && (b = U.length - 1);
      const T = U[b];
      return T && (se("removeSlide", T), T.el && (z(T.el), T.el.remove(), T.el = void 0), U.splice(b, 1), nt(K), D(), M = Ee(pe, M, N), ye()), me;
    }, setPosition: function(b) {
      M = b, Qe(), ye();
    }, showError: function(b, T) {
      if (l === 1) {
        ee(b), le(b);
        const A = b.el;
        if (A) {
          const k = document.createElement("div");
          ue(k, "f-html"), ue(k, "is-error"), k.innerHTML = ae(T || "<p>{{ERROR}}</p>"), b.htmlEl = k, ue(A, "has-html has-error"), A.insertAdjacentElement("afterbegin", k), se("contentReady", b);
        }
      }
      return me;
    }, showLoading: function(b) {
      const T = b.el, A = T?.querySelector(".f-spinner");
      if (!T || A) return me;
      const k = F("spinnerTpl"), Z = dt(k);
      return Z && (ue(Z, "f-spinner"), T.insertAdjacentElement("beforeend", Z)), me;
    }, version: "6.1.14" };
    return me;
  };
  sn.l10n = { en_EN: _n }, sn.getDefaults = () => zt;
  var Zn = (e = true, t = "--f-scrollbar-compensate", n = "--f-body-margin", i = "hide-scrollbar") => {
    const s = document, o = s.body, r = s.documentElement;
    if (e) {
      if (o.classList.contains(i)) return;
      let c = window.innerWidth - r.getBoundingClientRect().width;
      c < 0 && (c = 0), r.style.setProperty(t, `${c}px`);
      const l = parseFloat(window.getComputedStyle(o).marginRight);
      l && o.style.setProperty(n, `${l}px`), o.classList.add(i);
    } else o.classList.remove(i), o.style.setProperty(n, ""), s.documentElement.style.setProperty(t, "");
  };
  function Yt() {
    return !(typeof window > "u" || !window.document || !window.document.createElement);
  }
  var wt = function(e = "", t = "", n = "") {
    return e.split(t).join(n);
  };
  var Kn = { tpl: (e) => `<img class="f-panzoom__content" 
    ${e.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} 
    ${e.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />` };
  var rs = () => {
    let e;
    function t(f, p) {
      const h = e?.getOptions().Zoomable;
      let a = (De(h) ? Object.assign(Object.assign({}, Kn), h) : Kn)[f];
      return a && typeof a == "function" && p ? a(p) : a;
    }
    function n() {
      e && e.getOptions().Zoomable !== false && (e.on("addSlide", o), e.on("removeSlide", r), e.on("attachSlideEl", c), e.on("click", s), e.on("change", i), e.on("ready", i));
    }
    function i() {
      l();
      const f = e?.getVisibleSlides() || [];
      if (f.length > 1 || e?.getOption("transition") === "slide") for (const p of f) {
        const h = p.panzoomRef;
        h && (e?.getPage().slides || []).indexOf(p) < 0 && h.execute(ne.ZoomTo, Object.assign({}, h.getStartPosition()));
      }
    }
    function s(f, p) {
      const h = p.target;
      h && !p.defaultPrevented && h.dataset.panzoomAction && m(h.dataset.panzoomAction);
    }
    function o(f, p) {
      const h = p.el;
      if (!e || !h || p.panzoomRef) return;
      const a = p.src || p.lazySrc || "", u = p.alt || p.caption || `Image #${p.index}`, d = p.srcset || p.lazySrcset || "", y = p.sizes || p.lazySizes || "";
      if (a && Te(a) && !p.html && (!p.type || p.type === "image")) {
        p.type = "image", p.thumbSrc = p.thumbSrc || a;
        let M = t("tpl", p);
        M = wt(M, "{{src}}", a + ""), M = wt(M, "{{srcset}}", d + ""), M = wt(M, "{{sizes}}", y + ""), h.insertAdjacentHTML("afterbegin", M);
      }
      const v = h.querySelector(".f-panzoom__content");
      if (!v) return;
      v.setAttribute("alt", u + "");
      const w = p.width && p.width !== "auto" ? parseFloat(p.width + "") : "auto", E = p.height && p.height !== "auto" ? parseFloat(p.height + "") : "auto", C = Cn(h, Object.assign({ width: w, height: E, classes: { container: "f-zoomable" }, event: () => e?.getLastMouseMove(), spinnerTpl: () => e?.getOption("spinnerTpl") || "" }, t("Panzoom")));
      C.on("*", (M, G, ...$) => {
        e && (G === "loading" && (p.state = 0), G === "loaded" && (p.state = 1), G === "error" && (p.state = 2, e?.showError(p, "{{IMAGE_ERROR}}")), e.emit(`panzoom:${G}`, p, ...$), G === "loading" && e.emit("contentLoading", p), G === "ready" && e.emit("contentReady", p), p.index === e?.getPageIndex() && l());
      }), p.panzoomRef = C;
    }
    function r(f, p) {
      p.panzoomRef && (p.panzoomRef.destroy(), p.panzoomRef = void 0);
    }
    function c(f, p) {
      const h = p.panzoomRef;
      if (h) switch (h.getState()) {
        case 0:
          h.init();
          break;
        case 3:
          h.execute(ne.ZoomTo, Object.assign(Object.assign({}, h.getStartPosition()), { velocity: 0 }));
      }
    }
    function l() {
      var f, p;
      const h = e?.getContainer() || void 0, a = (p = (f = e?.getPage()) === null || f === void 0 ? void 0 : f.slides[0]) === null || p === void 0 ? void 0 : p.panzoomRef;
      if (h) if (a) a.updateControls(h);
      else for (const u of h.querySelectorAll("[data-panzoom-action]") || []) u.setAttribute("aria-disabled", ""), u.setAttribute("tabindex", "-1");
    }
    function m(f, ...p) {
      var h;
      (h = e?.getPage().slides[0].panzoomRef) === null || h === void 0 || h.execute(f, ...p);
    }
    return { init: function(f) {
      e = f, e.on("initPlugins", n);
    }, destroy: function() {
      if (e) {
        e.off("initPlugins", n), e.off("addSlide", o), e.off("removeSlide", r), e.off("attachSlideEl", c), e.off("click", s), e.off("change", i), e.off("ready", i);
        for (const f of e.getSlides()) r(0, f);
      }
      e = void 0;
    }, execute: m };
  };
  var Jn = { syncOnChange: false, syncOnClick: true, syncOnHover: false };
  var Vi = () => {
    let e, t;
    function n() {
      const a = e?.getOptions().Sync;
      return De(a) ? Object.assign(Object.assign({}, Jn), a) : Jn;
    }
    function i(a) {
      var u, d, y;
      e && a && (t = a, e.getOptions().classes = Object.assign(Object.assign({}, e.getOptions().classes), { isSelected: "" }), e.getOptions().initialSlide = ((d = (u = t.getPage()) === null || u === void 0 ? void 0 : u.slides[0]) === null || d === void 0 ? void 0 : d.index) || 0, n().syncOnChange && e.on("change", r), n().syncOnClick && e.on("click", l), n().syncOnHover && ((y = e.getViewport()) === null || y === void 0 || y.addEventListener("mouseover", m)), (function() {
        !e || !t || (e.on("ready", o), e.on("refresh", f), t.on("change", c), t.on("filter", p));
      })());
    }
    function s() {
      const a = n().target;
      e && a && i(a);
    }
    function o() {
      h();
    }
    function r() {
      var a;
      if (e && t) {
        const u = ((a = e.getPage()) === null || a === void 0 ? void 0 : a.slides) || [], d = t.getPageIndex(u[0].index || 0);
        d > -1 && t.goTo(d, e.hasNavigated() ? void 0 : { tween: false, transition: false }), h();
      }
    }
    function c() {
      var a;
      if (e && t) {
        const u = e.getPageIndex(((a = t.getPage()) === null || a === void 0 ? void 0 : a.slides[0].index) || 0);
        u > -1 && e.goTo(u, t.hasNavigated() ? void 0 : { tween: false, transition: false }), h();
      }
    }
    function l(a, u) {
      var d;
      if (!e || !t || !((d = e.getTween()) === null || d === void 0) && d.isRunning()) return;
      const y = e?.getOptions().classes.slide;
      if (!y) return;
      const v = u.target.closest(`.${y}`);
      if (v) {
        const w = parseInt(v.getAttribute("index") || "") || 0, E = t.getPageIndex(w);
        t.goTo(E);
      }
    }
    function m(a) {
      e && l(0, a);
    }
    function f() {
      var a;
      if (e && t) {
        const u = e.getPageIndex(((a = t.getPage()) === null || a === void 0 ? void 0 : a.slides[0].index) || 0);
        u > -1 && e.goTo(u, { tween: false, transition: false }), h();
      }
    }
    function p(a, u) {
      e && t && (e.filter(u), c());
    }
    function h() {
      var a, u, d;
      if (!t) return;
      const y = ((u = (a = t.getPage()) === null || a === void 0 ? void 0 : a.slides[0]) === null || u === void 0 ? void 0 : u.index) || 0;
      for (const v of e?.getSlides() || []) (d = v.el) === null || d === void 0 || d.classList.toggle("is-selected", v.index === y);
    }
    return { init: function(a) {
      e = a, e.on("initSlides", s);
    }, destroy: function() {
      var a;
      e?.off("ready", o), e?.off("refresh", f), e?.off("change", r), e?.off("click", l), (a = e?.getViewport()) === null || a === void 0 || a.removeEventListener("mouseover", m), t?.off("change", c), t?.off("filter", p), t = void 0, e?.off("initSlides", s), e = void 0;
    }, getTarget: function() {
      return t;
    } };
  };
  var Qn = { showLoading: true, preload: 1 };
  var qt = "is-lazyloading";
  var ei = "is-lazyloaded";
  var ti = "has-lazyerror";
  var Ri = () => {
    let e;
    function t() {
      const s = e?.getOptions().Lazyload;
      return De(s) ? Object.assign(Object.assign({}, Qn), s) : Qn;
    }
    function n(s) {
      var o;
      const r = s.el;
      if (!r) return;
      const c = t(), l = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", m = Array.from(r.querySelectorAll(l));
      r.matches(l) && m.push(r);
      for (const f of m) {
        const p = f.dataset.lazySrc, h = f.dataset.lazySrcset, a = f.dataset.lazySizes, u = f.dataset.lazyBg, d = (f instanceof HTMLImageElement || f instanceof HTMLSourceElement) && (p || h), y = !!u;
        if (!d && !y) continue;
        const v = p || h || u;
        if (v) {
          if (d) {
            const w = (o = f.parentElement) === null || o === void 0 ? void 0 : o.classList.contains("f-panzoom__wrapper");
            c.showLoading && e?.showLoading(s), f.addEventListener("load", () => {
              e?.hideLoading(s), Fe(f, ti), f instanceof HTMLImageElement ? f.decode().finally(() => {
                Fe(f, qt), ue(f, ei);
              }).catch(() => {
              }) : (Fe(f, qt), ue(f, ei)), w || e == null || e.emit("lazyLoad:loaded", s, f, v);
            }), f.addEventListener("error", () => {
              e?.hideLoading(s), Fe(f, qt), ue(f, ti), w || e == null || e.emit("lazyLoad:error", s, f, v);
            }), f.classList.add("f-lazyload"), f.classList.add(qt), w || e == null || e.emit("lazyLoad:load", s, f, v), p && (f.src = p), h && (f.srcset = h), a && (f.sizes = a);
          } else y && (f.style.backgroundImage = `url('${u}')`);
          delete f.dataset.lazySrc, delete f.dataset.lazySrcset, delete f.dataset.lazySizes, delete f.dataset.lazyBg;
        }
      }
    }
    function i() {
      if (!e) return;
      const s = [...e.getVisibleSlides()], o = t().preload;
      if (o > 0) {
        const r = e.getPosition(), c = e.getViewportDim();
        s.push(...e.getVisibleSlides(r + c * o), ...e.getVisibleSlides(r - c * o));
      }
      for (const r of s) n(r);
    }
    return { init: function(s) {
      e = s, e.on("render", i);
    }, destroy: function() {
      e?.off("render", i), e = void 0;
    } };
  };
  var ni = '<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">';
  var ii = "</svg>";
  var si = { prevTpl: ni + '<path d="M15 3l-9 9 9 9"></path>' + ii, nextTpl: ni + '<path d="M9 3l9 9-9 9"></path>' + ii };
  var as = () => {
    let e, t, n;
    function i(r) {
      const c = (function() {
        const f = e?.getOptions().Arrows;
        return De(f) ? Object.assign(Object.assign({}, si), f) : si;
      })(), l = `<button data-carousel-go-${r} tabindex="0" class="f-button is-arrow is-${r}" title="{{${r.toUpperCase()}}}">` + c[`${r}Tpl`] + "</button>", m = dt(e.localize(l)) || void 0;
      return m && ue(m, c[`${r}Class`]), m;
    }
    function s() {
      var r;
      t?.remove(), t = void 0, n?.remove(), n = void 0, (r = e?.getContainer()) === null || r === void 0 || r.classList.remove("has-arrows");
    }
    function o() {
      e && e.getOptions().Arrows !== false && e.getPages().length > 1 ? ((function() {
        if (!e) return;
        const r = e.getViewport();
        r && (t || (t = i("prev"), t && r.insertAdjacentElement("beforebegin", t)), n || (n = i("next"), n && r.insertAdjacentElement("afterend", n)), Ne(e.getContainer(), "has-arrows", true));
      })(), e && (t?.toggleAttribute("aria-disabled", !e.canGoPrev()), n?.toggleAttribute("aria-disabled", !e.canGoNext()))) : s();
    }
    return { init: function(r) {
      e = r.on(["change", "refresh"], o);
    }, destroy: function() {
      s(), e?.off(["change", "refresh"], o), e = void 0;
    } };
  };
  var Fi = '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>';
  var pn = '<g><line x1="11" y1="8" x2="11" y2="14"></line></g>' + Fi;
  var oi = { moveLeft: ["moveLeft", "MOVE_LEFT", '<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'], moveRight: ["moveRight", "MOVE_RIGHT", '<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'], moveUp: ["moveUp", "MOVE_UP", '<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'], moveDown: ["moveDown", "MOVE_DOWN", '<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'], zoomOut: ["zoomOut", "ZOOM_OUT", Fi], zoomIn: ["zoomIn", "ZOOM_IN", pn], toggleFull: ["toggleFull", "TOGGLE_FULL", pn], iterateZoom: ["iterateZoom", "ITERATE_ZOOM", pn], toggle1to1: ["toggleFull", "TOGGLE_FULL", '<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'], rotateCCW: ["rotateCCW", "ROTATE_CCW", '<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'], rotateCW: ["rotateCW", "ROTATE_CW", '<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'], flipX: ["flipX", "FLIP_X", '<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'], flipY: ["flipY", "FLIP_Y", '<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'], reset: ["reset", "RESET", '<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'], toggleFS: ["toggleFS", "TOGGLE_FS", '<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>'] };
  var Vn = {};
  for (const e of Object.keys(oi)) {
    const t = oi[e];
    Vn[e] = { tpl: `<button data-panzoom-action="${t[0]}" class="f-button" title="{{${t[1]}}}"><svg>${t[2]}</svg></button>` };
  }
  var ri;
  (function(e) {
    e.Left = "left", e.middle = "middle", e.right = "right";
  })(ri || (ri = {}));
  var ai = Object.assign({ counter: { tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>' }, download: { tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>' }, autoplay: { tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, thumbs: { tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>' } }, Vn);
  var li = { absolute: false, display: { left: [], middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY", "reset"], right: [] }, enabled: "auto", items: {} };
  var Di = () => {
    let e, t;
    function n(s) {
      const o = e?.getOptions().Toolbar;
      let r = (De(o) ? Object.assign(Object.assign({}, li), o) : li)[s];
      return r && typeof r == "function" && e ? r(e) : r;
    }
    function i() {
      var s;
      if (!e || t || e?.getOptions().Toolbar === false) return;
      const o = e.getContainer();
      if (!o) return;
      let r = n("enabled");
      if (!r) return;
      const c = n("absolute"), l = e.getSlides().length > 1;
      let m = false, f = false;
      for (const y of e.getSlides()) y.panzoomRef && (m = true), (y.downloadSrc || y.type === "image" && y.src) && (f = true);
      const p = ((s = e.getPlugins().Thumbs) === null || s === void 0 ? void 0 : s.isEnabled()) || false, h = l && e.getPlugins().Autoplay || false, a = e.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
      if (r === "auto" && (r = m), !r) return;
      t = o.querySelector(".f-carousel__toolbar") || void 0, t || (t = document.createElement("div"), ue(t, "f-carousel__toolbar"));
      const u = n("display"), d = Ue({}, ai, n("items"));
      for (const y of ["left", "middle", "right"]) {
        const v = u[y] || [], w = document.createElement("div");
        ue(w, `f-carousel__toolbar__column is-${y}`);
        for (const E of v) {
          let C;
          if (Te(E)) {
            if (E === "counter" && !l || E === "autoplay" && !h || Vn[E] && !m || E === "fullscreen" && !a || E === "thumbs" && !p || E === "download" && !f) continue;
            C = d[E];
          }
          if (De(E) && (C = E), C && C.tpl) {
            let M = e.localize(C.tpl);
            M = M.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
            const G = dt(M);
            G && (typeof C.click == "function" && e && G.addEventListener("click", ($) => {
              $.preventDefault(), $.stopPropagation(), typeof C.click == "function" && e && C.click(e, $);
            }), w.append(G));
          }
        }
        t.append(w);
      }
      if (t.childElementCount) {
        if (c && ue(t, "is-absolute"), !t.parentElement) {
          const y = n("parentEl");
          y ? y.insertAdjacentElement("afterbegin", t) : o.insertAdjacentElement("afterbegin", t);
        }
        o.contains(t) && (ue(o, "has-toolbar"), c && ue(o, "has-absolute-toolbar"));
      }
    }
    return { init: function(s) {
      e = s, e?.on("initSlides", i);
    }, destroy: function() {
      e?.off("initSlides", i), Fe(e?.getContainer(), "has-toolbar has-absolute-toolbar"), t?.remove(), t = void 0;
    }, add: function(s, o) {
      ai[s] = o;
    }, isEnabled: function() {
      return !!t;
    } };
  };
  var ci = { autoStart: true, pauseOnHover: true, showProgressbar: true, timeout: 2e3 };
  var ls = () => {
    let e, t, n = false, i = false, s = false, o = null;
    function r(M) {
      const G = e?.getOptions().Autoplay;
      let $ = (De(G) ? Object.assign(Object.assign({}, ci), G) : ci)[M];
      return $ && typeof $ == "function" && e ? $(e) : $;
    }
    function c() {
      clearTimeout(t), t = void 0;
    }
    function l() {
      if (!e || !n || s || i || t || !e.isSettled() || (function() {
        var G;
        const $ = ((G = e?.getPage()) === null || G === void 0 ? void 0 : G.slides) || [];
        for (const W of $) if (W.state === 0) return true;
        return false;
      })()) return;
      (function() {
        var G, $, W, pe;
        if (!e || (p(), !r("showProgressbar"))) return;
        let N = r("progressbarParentEl");
        if (!N && (!((G = e.getPlugins().Toolbar) === null || G === void 0) && G.isEnabled()) && (N = e.getContainer()), !N && (($ = e.getPlugins().Toolbar) === null || $ === void 0 ? void 0 : $.isEnabled()) !== true) {
          const U = ((W = e.getPages()[0]) === null || W === void 0 ? void 0 : W.slides) || [], O = ((pe = e.getPage()) === null || pe === void 0 ? void 0 : pe.slides) || [];
          U.length === 1 && O.length === 1 && (N = O[0].el);
        }
        if (N || (N = e.getViewport()), !N) return;
        o = document.createElement("div"), ue(o, "f-progressbar"), N.prepend(o);
        const K = r("timeout") || 1e3;
        o.style.animationDuration = `${K}ms`;
      })();
      const M = r("timeout");
      t = setTimeout(() => {
        e && n && !i && (e.isInfinite() || e.getPageIndex() !== e.getPages().length - 1 ? e.next() : e.goTo(0));
      }, M);
    }
    function m() {
      var M;
      if (!e || e.getPages().length < 2 || e.getOptions().Autoplay === false || n) return;
      n = true, e.emit("autoplay:start", r("timeout")), ue(e.getContainer(), "has-autoplay"), (M = e.getTween()) === null || M === void 0 || M.on("start", v);
      const G = e?.getContainer();
      G && r("pauseOnHover") && matchMedia("(hover: hover)").matches && (G.addEventListener("mouseenter", w, false), G.addEventListener("mouseleave", E, false)), e.on("change", d), e.on("settle", y), e.on("contentReady", a), e.on("panzoom:touchStart", f), e.on("panzoom:wheel", f), e.isSettled() && l();
    }
    function f() {
      var M;
      if (c(), p(), e) {
        if (n) {
          e.emit("autoplay:end"), (M = e.getTween()) === null || M === void 0 || M.off("start", v);
          const G = e.getContainer();
          G && (G.classList.remove("has-autoplay"), G.removeEventListener("mouseenter", w, false), G.removeEventListener("mouseleave", E, false));
        }
        e.off("change", d), e.off("settle", y), e.off("contentReady", a), e.off("panzoom:touchStart", f), e.off("panzoom:wheel", f);
      }
      n = false, i = false;
    }
    function p() {
      o && (o.remove(), o = null);
    }
    function h() {
      e && e.getPages().length > 1 && r("autoStart") && m();
    }
    function a() {
      l();
    }
    function u(M, G) {
      const $ = G.target;
      $ && !G.defaultPrevented && $.dataset.autoplayAction === "toggle" && C.toggle();
    }
    function d() {
      !e || !e?.isInfinite() && e.getPageIndex() === e.getPages().length - 1 ? f() : (c(), p());
    }
    function y() {
      l();
    }
    function v() {
      c(), p();
    }
    function w() {
      s = true, n && (c(), p());
    }
    function E() {
      s = false, n && !i && e?.isSettled() && l();
    }
    const C = { init: function(M) {
      e = M, e.on("ready", h), e.on("click", u);
    }, destroy: function() {
      f(), e?.off("ready", h), e?.off("click", u), e = void 0;
    }, isEnabled: () => n, pause: function() {
      i = true, c(), p();
    }, resume: function() {
      i = false, n && !s && l();
    }, start() {
      m();
    }, stop() {
      f();
    }, toggle() {
      n ? f() : m();
    } };
    return C;
  };
  var hn = { Carousel: { Lazyload: { showLoading: false } }, minCount: 2, showOnStart: true, thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>', type: "modern" };
  var mn;
  var cs = () => {
    let e, t, n, i, s, o = 0, r = 0, c = true;
    function l(O) {
      const _ = e?.getOptions().Thumbs;
      let H = (De(_) ? Object.assign(Object.assign({}, hn), _) : hn)[O];
      return H && typeof H == "function" && e ? H(e) : H;
    }
    function m() {
      if (!e || e?.getOptions().Thumbs === false) return false;
      let O = 0;
      for (const _ of e.getSlides()) _.thumbSrc && O++;
      return O >= l("minCount");
    }
    function f() {
      return l("type") === "modern";
    }
    function p() {
      return l("type") === "scrollable";
    }
    function h() {
      const O = [], _ = e?.getSlides() || [];
      for (const H of _) O.push({ index: H.index, class: H.thumbClass, html: a(H) });
      return O;
    }
    function a(O) {
      const _ = O.thumb ? O.thumb instanceof HTMLImageElement ? O.thumb.src : O.thumb : O.thumbSrc || void 0, H = O.thumbAlt === void 0 ? `Thumbnail #${(O.index || 0) + 1}` : O.thumbAlt + "";
      let I = l("thumbTpl");
      return I = wt(I, "{{alt}}", H), I = wt(I, "{{src}}", _ + ""), I = wt(I, "{{index}}", `${O.index || 0}`), I = wt(I, "{{page}}", `${(O.index || 0) + 1}`), I;
    }
    function u(O) {
      return `<div index="${O.index || 0}" class="f-thumbs__slide ${O.class || ""}">${O.html || ""}</div>`;
    }
    function d(O = false) {
      var _;
      const H = e?.getContainer();
      if (!e || !H || n || !m()) return;
      const I = ((_ = l("Carousel")) === null || _ === void 0 ? void 0 : _.classes) || {};
      if (I.container = I.container || "f-thumbs", !n) {
        const ie = H.nextElementSibling;
        ie?.classList.contains(I.container) && (n = ie);
      }
      if (!n) {
        n = document.createElement("div");
        const ie = l("parentEl");
        ie ? ie.insertAdjacentElement("beforeend", n) : H.insertAdjacentElement("afterend", n);
      }
      ue(n, I.container), ue(n, "f-thumbs"), ue(n, `is-${l("type")}`), O && ue(n, "is-hidden");
    }
    function y() {
      if (!n || !p()) return;
      i = document.createElement("div"), ue(i, "f-thumbs__viewport");
      let O = "";
      for (const _ of h()) typeof (_.html || "") == "string" && (O += u(_));
      i.innerHTML = O, n.append(i), n.addEventListener("click", (_) => {
        _.preventDefault();
        const H = _.target.closest("[index]"), I = parseInt(H?.getAttribute("index") || "-1");
        e && I > -1 && e.goTo(I);
      }), s = new IntersectionObserver((_) => {
        _.forEach((H) => {
          H.isIntersecting && H.target instanceof HTMLImageElement && (H.target.src = H.target.getAttribute("data-lazy-src") + "", H.target.removeAttribute("data-lazy-src"), s?.unobserve(H.target));
        });
      }, { root: i, rootMargin: "100px" }), n.querySelectorAll("[data-lazy-src]").forEach((_) => {
        s?.observe(_);
      }), e?.emit("thumbs:ready");
    }
    function v() {
      var O;
      if (!mn || !e || !n || p() || t) return;
      const _ = h();
      if (!_.length) return;
      const H = Ue({}, { Sync: { target: e }, Lazyload: { preload: 1 }, slides: _, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", slide: "f-thumbs__slide" }, center: true, fill: !f(), infinite: false, dragFree: true, rtl: e.getOptions().rtl || false, slidesPerPage: (I) => {
        let ie = 0;
        return f() && ((function() {
          if (!f() || !n) return;
          const J = (te) => n && parseFloat(getComputedStyle(n).getPropertyValue("--f-thumb-" + te)) || 0;
          o = J("width"), r = J("clip-width");
        })(), ie = 4 * (o - r)), I && I.getTotalSlideDim() <= I.getViewportDim() - ie ? 1 / 0 : 1;
      } }, hn.Carousel || {}, l("Carousel") || {});
      t = mn(n, H, { Sync: Vi, Lazyload: Ri }), t.on("ready", () => {
        ue(n, "is-syncing"), e?.emit("thumbs:ready"), f() && e?.on("render", M);
      }), t.on("destroy", () => {
        e?.emit("thumbs:destroy");
      }), t.init(), (O = t.getGestures()) === null || O === void 0 || O.on("start", () => {
        c = false;
      }), t.on("click", (I, ie) => {
        const J = ie.target;
        if (J) {
          const te = J.matches("button") ? J : J.firstElementChild;
          te && te.matches("button") && (ie.preventDefault(), te.focus({ preventScroll: true }));
        }
      }), ue(e.getContainer(), "has-thumbs"), U();
    }
    function w() {
      m() && l("showOnStart") && (d(), y());
    }
    function E() {
      var O;
      m() && (v(), e?.on("addSlide", $), e?.on("removeSlide", W), e?.on("click", pe), e?.on("refresh", N), (O = e?.getGestures()) === null || O === void 0 || O.on("start", C), K(true));
    }
    function C() {
      var O, _;
      c = true, !((O = document.activeElement) === null || O === void 0) && O.closest(".f-thumbs") && ((_ = document.activeElement) === null || _ === void 0 || _.blur());
    }
    function M() {
      var O, _;
      n?.classList.toggle("is-syncing", e?.hasNavigated() === false || ((O = e?.getTween()) === null || O === void 0 ? void 0 : O.isRunning())), U(), !((_ = e?.getGestures()) === null || _ === void 0) && _.isPointerDown() && (function() {
        if (!f() || !e || !t || !c) return;
        const H = t.getTween(), I = t.getPages(), ie = e.getPageIndex() || 0, J = e.getPageProgress() || 0;
        if (!(e && I && I[ie] && H)) return;
        const te = H.isRunning() ? H.getCurrentValues().pos : t.getPosition();
        if (te === void 0) return;
        let F = I[ie].pos + J * (o - r);
        F = Ee(I[0].pos, F, I[I.length - 1].pos), H.from({ pos: te }).to({ pos: F }).start();
      })();
    }
    function G() {
      c = true, K();
    }
    function $(O, _) {
      const H = { html: a(_) };
      if (t) t.add(H, _.index);
      else if (i) {
        const I = dt(u(H));
        if (I) {
          i.append(I);
          const ie = I.querySelector("img");
          ie && s?.observe(ie);
        }
      }
    }
    function W(O, _) {
      var H;
      t ? t.remove(_.index) : i && ((H = i.querySelector(`[index="${_.index}"]`)) === null || H === void 0 || H.remove());
    }
    function pe(O, _) {
      var H;
      const I = _.target;
      _.defaultPrevented || ((H = I?.dataset) === null || H === void 0 ? void 0 : H.thumbsAction) !== "toggle" || (n || (d(true), y(), v()), n && n.classList.toggle("is-hidden"));
    }
    function N() {
      K();
    }
    function K(O = false) {
      if (!e || !i || !p()) return;
      const _ = e.getPageIndex();
      i.querySelectorAll(".is-selected").forEach((I) => {
        I.classList.remove("is-selected");
      });
      const H = i.querySelector(`[index="${_}"]`);
      if (H) {
        H.classList.add("is-selected");
        const I = i.getBoundingClientRect(), ie = H.getBoundingClientRect(), J = H.offsetTop - i.offsetTop - 0.5 * I.height + 0.5 * ie.height, te = H.scrollLeft - i.scrollLeft - 0.5 * I.width + 0.5 * ie.width;
        i.scrollTo({ top: J, left: te, behavior: O ? "instant" : "smooth" });
      }
    }
    function U() {
      if (!f() || !e || !t) return;
      const O = t?.getSlides() || [];
      let _ = -0.5 * o;
      for (const H of O) {
        const I = H.el;
        if (!I) continue;
        let ie = e.getPageProgress(H.index) || 0;
        ie = Math.max(-1, Math.min(1, ie)), ie > -1 && ie < 1 && (_ += 0.5 * o * (1 - Math.abs(ie))), ie = Math.round(1e4 * ie) / 1e4, _ = Math.round(1e4 * _) / 1e4, I.style.setProperty("--progress", `${Math.abs(ie)}`), I.style.setProperty("--shift", `${e?.isRTL() ? -1 * _ : _}px`), ie > -1 && ie < 1 && (_ += 0.5 * o * (1 - Math.abs(ie)));
      }
    }
    return { init: function(O, _) {
      mn = _, e = O, e.on("ready", E), e.on("initSlides", w), e.on("change", G);
    }, destroy: function() {
      var O, _;
      p() && e?.emit("thumbs:destroy"), e?.off("ready", E), e?.off("initSlides", w), e?.off("change", G), e?.off("render", M), e?.off("addSlide", $), e?.off("click", pe), e?.off("refresh", N), (O = e?.getGestures()) === null || O === void 0 || O.off("start", C), (_ = e?.getContainer()) === null || _ === void 0 || _.classList.remove("has-thumbs"), e = void 0, t?.destroy(), t = void 0, n?.remove(), n = void 0;
    }, getCarousel: function() {
      return t;
    }, getContainer: function() {
      return n;
    }, getType: function() {
      return l("type");
    }, isEnabled: m };
  };
  var di = { autosize: false, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: false };
  var ds = () => {
    let e;
    function t() {
      const a = e?.getOptions().Html;
      return De(a) ? Ue({}, di, a) : di;
    }
    function n() {
      return e?.getOptions().Html !== false;
    }
    function i(a) {
      return a.type === "iframe" || a.type === "pdf" || a.type === "gmap";
    }
    function s(a) {
      const u = `${a}`;
      return u.match(/^\d+$/) ? `${u}px` : u;
    }
    function o(a) {
      if (a === void 0 || a === "") return;
      const u = `${a}`.trim();
      if (!u.match(/^\d+(\.\d+)?(px)?$/)) return;
      const d = parseFloat(u);
      return Number.isFinite(d) ? d : void 0;
    }
    function r(a, u) {
      var d;
      const y = (d = a[u]) !== null && d !== void 0 ? d : t()[u];
      return y === "true" || y !== "false" && y;
    }
    function c(a, u) {
      if (!n()) return;
      let d = u.type, y = u.src;
      if (!d && Te(y)) {
        if (y.charAt(0) === "#" ? d = "inline" : y.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? d = "image" : y.match(/\.(pdf)((\?|#).*)?$/i) ? d = "pdf" : y.match(/\.(html|php)((\?|#).*)?$/i) && (d = "iframe"), !d) {
          const v = y.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+\.?\d+?)z))|(?:\?ll=))(.*)?/i);
          v && (y = `https://maps.google.${v[1]}/?ll=${(v[2] ? v[2] + "&z=" + Math.floor(parseFloat(v[3])) + (v[4] ? v[4].replace(/^\//, "&") : "") : v[4] + "").replace(/\?/, "&")}&output=${v[4] && v[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, d = "gmap");
        }
        if (!d) {
          const v = y.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
          v && (y = `https://maps.google.${v[1]}/maps?q=${v[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, d = "gmap");
        }
        d && (u.src = y, u.type = d);
      }
    }
    function l(a, u) {
      n() && i(u) && (function(d) {
        const y = d.el, v = d.src;
        if (!e || !y || !v) return;
        const w = document.createElement("iframe");
        ue(w, "f-iframe");
        for (const [G, $] of Object.entries(t().iframeAttr || {})) w.setAttribute(G, $);
        w.onerror = () => {
          d.state = 2, e?.showError(d, "{{IFRAME_ERROR}}");
        };
        const E = document.createElement("div");
        ue(E, "f-html"), E.append(w), d.htmlEl = E, d.contentEl = w, ue(y, `has-html has-iframe has-${d.type}`), y.prepend(E), p(d);
        const C = r(d, "preload"), M = r(d, "autosize");
        d.type === "iframe" && (C || M) ? (d.state = 0, e.showLoading(d), ue(y, "is-loading"), w.onload = () => {
          if (!e || e.getState() === 2 || !w.src.length || d.contentEl !== w || !w.isConnected) return;
          d.state = 1;
          const G = w.dataset.ready !== "true";
          w.dataset.ready = "true", h(d), e.hideLoading(d), G && e.emit("contentReady", d), Fe(y, "is-loading");
        }, w.src = `${v}`) : (w.src = `${v}`, e.emit("contentReady", d));
      })(u);
    }
    function m(a, u) {
      var d, y;
      if (i(u)) {
        const v = u.el;
        e?.hideError(u), (d = u.contentEl) === null || d === void 0 || d.remove(), u.contentEl = void 0, (y = u.htmlEl) === null || y === void 0 || y.remove(), u.htmlEl = void 0, v && (Fe(v, "has-html has-iframe has-pdf has-gmap"), Fe(v, "is-loading"));
      }
    }
    function f() {
      for (const a of e?.getSlides() || []) i(a) && (p(a), a.state === 1 && h(a));
    }
    function p(a) {
      const u = a.htmlEl;
      if (u && i(a) && (u.style.aspectRatio = "", u.style.width = "", u.style.height = "", u.style.maxWidth = "", u.style.maxHeight = "", a.width && (u.style.maxWidth = s(a.width)), a.height && (u.style.maxHeight = s(a.height)), a.aspectRatio)) {
        const d = a.aspectRatio.split("/"), y = parseFloat(d[0].trim()), v = d[1] ? parseFloat(d[1].trim()) : 0, w = y && v ? y / v : y;
        u.offsetHeight;
        const E = u.getBoundingClientRect(), C = w < (E.width || 1) / (E.height || 1);
        u.style.aspectRatio = `${a.aspectRatio}`, u.style.width = C ? "auto" : "", u.style.height = C ? "" : "auto";
      }
    }
    function h(a) {
      const u = a.contentEl, d = u?.parentElement, y = d?.style;
      let v = r(a, "autosize"), w = o(a.width) || 0, E = o(a.height) || 0;
      if (w && E && (v = false), u && d && y && v) {
        try {
          const C = window.getComputedStyle(d), M = parseFloat(C.paddingLeft) + parseFloat(C.paddingRight), G = parseFloat(C.paddingTop) + parseFloat(C.paddingBottom), $ = u.contentWindow;
          if ($) {
            const W = $.document, pe = W.getElementsByTagName("html")[0], N = W.body;
            y.width = "";
            const K = window.getComputedStyle(N), U = parseFloat(K.marginLeft) + parseFloat(K.marginRight), O = N.style.overflow || "";
            N.style.overflow = "hidden", w = w || N.scrollWidth + U + M, y.flex = "0 0 auto", y.width = `${w}px`, y.height = `${N.scrollHeight}px`, N.style.overflow = O, E = Math.max(pe.scrollHeight, Math.ceil(pe.getBoundingClientRect().height)) + G;
          }
        } catch {
        }
        (w || E) && Object.assign(y, { flex: "0 1 auto", width: w ? `${w}px` : "", height: E ? `${E}px` : "" });
      }
    }
    return { init: function(a) {
      e = a, e.on("addSlide", c), e.on("attachSlideEl", l), e.on("detachSlideEl", m), e.on("refresh", f);
    }, destroy: function() {
      e?.off("addSlide", c), e?.off("attachSlideEl", l), e?.off("detachSlideEl", m), e?.off("refresh", f), e = void 0;
    } };
  };
  var ui = (e, t = {}) => {
    const n = new URL(e), i = new URLSearchParams(n.search), s = new URLSearchParams();
    for (const [c, l] of [...i, ...Object.entries(t)]) {
      let m = l + "";
      if (c === "t") {
        let f = m.match(/((\d*)m)?(\d*)s?/);
        f && s.set("start", 60 * parseInt(f[2] || "0") + parseInt(f[3] || "0") + "");
      } else s.set(c, m);
    }
    let o = s + "", r = e.match(/#t=((.*)?\d+s)/);
    return r && (o += `#t=${r[1]}`), o;
  };
  var fi = { autoplay: false, html5videoTpl: `<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "no", referrerPolicy: "strict-origin-when-cross-origin", credentialless: "" }, vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
  var us = () => {
    let e, t = false;
    function n() {
      const h = e?.getOptions().Video;
      return De(h) ? Object.assign(Object.assign({}, fi), h) : fi;
    }
    function i() {
      var h;
      return (h = e?.getPage()) === null || h === void 0 ? void 0 : h.slides[0];
    }
    const s = (h) => {
      var a;
      try {
        let u = JSON.parse(h.data);
        if (h.origin === "https://player.vimeo.com") {
          if (u.event === "ready") for (let d of Array.from(((a = e?.getContainer()) === null || a === void 0 ? void 0 : a.getElementsByClassName("f-iframe")) || [])) d instanceof HTMLIFrameElement && d.contentWindow === h.source && (d.dataset.ready = "true");
        } else if (h.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && u.event === "onReady") {
          const d = document.getElementById(u.id);
          d && (d.dataset.ready = "true");
        }
      } catch {
      }
    };
    function o(h, a) {
      const u = a.src;
      if (!Te(u)) return;
      let d = a.type;
      if (!d || d === "html5video") {
        const y = u.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
        y && (d = "html5video", a.html5videoFormat = a.html5videoFormat || "video/" + (y[1] === "ogv" ? "ogg" : y[1]));
      }
      if (!d || d === "youtube") {
        const y = u.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
        if (y) {
          const v = Object.assign(Object.assign({}, n().youtube), a.youtube || {}), w = `www.youtube${v.nocookie ? "-nocookie" : ""}.com`, E = ui(u, v), C = encodeURIComponent(y[2]);
          a.videoId = C, a.src = `https://${w}/embed/${C}?${E}`, a.thumb = a.thumb || `https://i.ytimg.com/vi/${C}/mqdefault.jpg`, d = "youtube";
        }
      }
      if (!d || d === "vimeo") {
        const y = u.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
        if (y) {
          const v = Object.assign(Object.assign({}, n().vimeo), a.vimeo || {}), w = ui(u, v), E = encodeURIComponent(y[2]), C = y[5] || "";
          a.videoId = E, a.src = `https://player.vimeo.com/video/${E}?${C ? `h=${C}${w ? "&" : ""}` : ""}${w}`, d = "vimeo";
        }
      }
      a.type = d;
    }
    function r(h, a) {
      a.type === "html5video" && (function(u) {
        const d = u.el, y = u.src;
        if (!e || !d || !y) return;
        const v = u.html5videoTpl || n().html5videoTpl, w = u.html5videoFormat || n().html5videoFormat;
        if (!v) return;
        const E = u.poster || (u.thumb && Te(u.thumb) ? u.thumb : ""), C = dt(v.replace(/\{\{src\}\}/gi, y + "").replace(/\{\{format\}\}/gi, w || "").replace(/\{\{poster\}\}/gi, E + ""));
        if (!C) return;
        const M = document.createElement("div");
        ue(M, "f-html"), M.append(C), u.contentEl = C, u.htmlEl = M, ue(d, `has-${u.type}`), d.prepend(M), f(u), e.emit("contentReady", u);
      })(a), a.type !== "youtube" && a.type !== "vimeo" || (function(u) {
        const d = u.el, y = u.src;
        if (!e || !d || !y) return;
        const v = document.createElement("iframe");
        ue(v, "f-iframe"), v.setAttribute("id", `f-iframe_${u.videoId}`);
        for (const [E, C] of Object.entries(n().iframeAttr || {})) v.setAttribute(E, C);
        u.type === "youtube" && (v.onload = () => {
          var E;
          e?.getState() === 1 && ((E = v.contentWindow) === null || E === void 0 || E.postMessage(JSON.stringify({ event: "listening", id: v.getAttribute("id") }), "*"));
        }), v.onerror = () => {
          e?.showError(u, "{{IFRAME_ERROR}}");
        };
        const w = document.createElement("div");
        ue(w, "f-html"), w.append(v), u.contentEl = v, u.htmlEl = w, ue(d, `has-html has-iframe has-${u.type}`), v.src = `${u.src}`, d.prepend(w), f(u), e.emit("contentReady", u);
      })(a);
    }
    function c(h, a) {
      var u, d;
      a.type !== "html5video" && a.type !== "youtube" && a.type !== "vimeo" || ((u = a.contentEl) === null || u === void 0 || u.remove(), a.contentEl = void 0, (d = a.htmlEl) === null || d === void 0 || d.remove(), a.htmlEl = void 0), a.poller && clearTimeout(a.poller);
    }
    function l() {
      t = false;
    }
    function m() {
      if (t) return;
      t = true;
      const h = i();
      (h && h.autoplay !== void 0 ? h.autoplay : n().autoplay) && ((function() {
        var a;
        const u = i(), d = u?.el;
        if (d && u?.type === "html5video") try {
          const v = d.querySelector("video");
          if (v) {
            const w = v.play();
            w !== void 0 && w.then(() => {
            }).catch((E) => {
              v.muted = true, v.play();
            });
          }
        } catch {
        }
        const y = u?.htmlEl;
        y instanceof HTMLIFrameElement && ((a = y.contentWindow) === null || a === void 0 || a.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"));
      })(), (function() {
        const a = i(), u = a?.type;
        if (!a?.el || u !== "youtube" && u !== "vimeo") return;
        const d = () => {
          if (a.contentEl && a.contentEl instanceof HTMLIFrameElement && a.contentEl.contentWindow) {
            let y;
            if (a.contentEl.dataset.ready === "true") return y = a.type === "youtube" ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, y && a.contentEl.contentWindow.postMessage(JSON.stringify(y), "*"), void (a.poller = void 0);
            a.type === "youtube" && (y = { event: "listening", id: a.contentEl.getAttribute("id") }, a.contentEl.contentWindow.postMessage(JSON.stringify(y), "*"));
          }
          a.poller = setTimeout(d, 250);
        };
        d();
      })());
    }
    function f(h) {
      const a = h?.htmlEl;
      if (h && a && (h.type === "html5video" || h.type === "youtube" || h.type === "vimeo")) {
        if (a.style.aspectRatio = "", a.style.width = "", a.style.height = "", a.style.maxWidth = "", a.style.maxHeight = "", h.width) {
          let u = `${h.width}`;
          u.match(/^\d+$/) && (u += "px"), a.style.maxWidth = `${u}`;
        }
        if (h.height) {
          let u = `${h.height}`;
          u.match(/^\d+$/) && (u += "px"), a.style.maxHeight = `${u}`;
        }
        if (h.aspectRatio) {
          const u = h.aspectRatio.split("/"), d = parseFloat(u[0].trim()), y = u[1] ? parseFloat(u[1].trim()) : 0, v = d && y ? d / y : d;
          a.offsetHeight;
          const w = a.getBoundingClientRect(), E = v < (w.width || 1) / (w.height || 1);
          a.style.aspectRatio = `${h.aspectRatio}`, a.style.width = E ? "auto" : "", a.style.height = E ? "" : "auto";
        }
      }
    }
    function p() {
      f(i());
    }
    return { init: function(h) {
      e = h, e.on("addSlide", o), e.on("attachSlideEl", r), e.on("detachSlideEl", c), e.on("ready", m), e.on("change", l), e.on("settle", m), e.on("refresh", p), window.addEventListener("message", s);
    }, destroy: function() {
      e?.off("addSlide", o), e?.off("attachSlideEl", r), e?.off("detachSlideEl", c), e?.off("ready", m), e?.off("change", l), e?.off("settle", m), e?.off("refresh", p), window.removeEventListener("message", s), e = void 0;
    } };
  };
  var pi = { autoStart: false, btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' };
  var hi = "in-fullscreen-mode";
  var fs = () => {
    let e;
    function t(f) {
      const p = e?.getOptions().Fullscreen;
      let h = (De(p) ? Object.assign(Object.assign({}, pi), p) : pi)[f];
      return h && typeof h == "function" && e ? h(e) : h;
    }
    function n() {
      var f;
      (f = e?.getPlugins().Toolbar) === null || f === void 0 || f.add("fullscreen", { tpl: t("btnTpl") });
    }
    function i() {
      if (t("autoStart")) {
        const f = o();
        f && c(f);
      }
    }
    function s(f, p) {
      const h = p.target;
      h && !p.defaultPrevented && h.dataset.fullscreenAction === "toggle" && m();
    }
    function o() {
      return t("el") || e?.getContainer() || void 0;
    }
    function r() {
      const f = document;
      return f.fullscreenEnabled ? !!f.fullscreenElement : !!f.webkitFullscreenEnabled && !!f.webkitFullscreenElement;
    }
    function c(f) {
      const p = document;
      let h;
      return f || (f = p.documentElement), p.fullscreenEnabled ? h = f.requestFullscreen() : p.webkitFullscreenEnabled && (h = f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), h && h.then(() => {
        f.classList.add(hi);
      }), h;
    }
    function l() {
      const f = document;
      let p;
      return f.fullscreenEnabled ? p = f.fullscreenElement && f.exitFullscreen() : f.webkitFullscreenEnabled && (p = f.webkitFullscreenElement && f.webkitExitFullscreen()), p && p.then(() => {
        var h;
        (h = o()) === null || h === void 0 || h.classList.remove(hi);
      }), p;
    }
    function m() {
      if (r()) l();
      else {
        const f = o();
        f && c(f);
      }
    }
    return { init: function(f) {
      e = f, e.on("initPlugins", n), e.on("ready", i), e.on("click", s);
    }, destroy: function() {
      e?.off("initPlugins", n), e?.off("ready", i), e?.off("click", s);
    }, exit: l, inFullscreen: r, request: c, toggle: m };
  };
  var Ke;
  var ji;
  var On = false;
  var An = false;
  var $t = false;
  var In = false;
  var ln = () => {
    const e = new URL(document.URL).hash, t = e.slice(1).split("-"), n = t[t.length - 1], i = n && /^\+?\d+$/.test(n) && parseInt(t.pop() || "1", 10) || 1;
    return { urlHash: e, urlSlug: t.join("-"), urlIndex: i };
  };
  var gn = () => {
    const e = Ke?.getInstance(), t = e?.getState();
    return !(!e || t !== 0 && t !== 1);
  };
  var Rn = () => {
    if (!Ke || gn()) return;
    const { urlSlug: e, urlIndex: t } = ln();
    if (!e) return;
    let n = document.querySelector(`[data-slug="${e}"]`);
    n && Ke.fromTriggerEl(n), gn() || (n = document.querySelectorAll(`[data-fancybox="${e}"]`)[t - 1], n && Ke.fromTriggerEl(n, { startIndex: t - 1 })), gn() && n && !n.closest("[inert]") && n.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
  };
  var Xt = (e) => {
    const t = e.getOptions().Hash, n = e.getSlide();
    return n && (n.slug || n.fancybox || (De(t) ? t.slug : "")) || "";
  };
  var mi = (e) => {
    var t, n;
    const i = Xt(e), s = e.getSlide();
    if (!s || !i) return "";
    let o = parseInt(s.index + "", 10) + 1, r = s.slug ? `#${s.slug}` : `#${i}-${o}`;
    return (((n = (t = e.getCarousel()) === null || t === void 0 ? void 0 : t.getPages()) === null || n === void 0 ? void 0 : n.length) || 0) < 2 && (r = `#${i}`), r;
  };
  var ps = () => {
    if (!Ke || $t) return;
    const e = Ke?.getInstance(), t = e?.getCarousel(), { urlSlug: n, urlIndex: i } = ln(), s = e?.getOptions().Hash;
    if (s !== false) {
      if (e && e.getState() === 1 && t) {
        const o = t.getSlides();
        for (const r of o || []) if (r.slug === n || (r.fancybox === n || De(s) && s.slug === n) && r.index === i - 1) return An = false, void t.goTo(r.index);
        In = true, e.close(), In = false;
      }
      Rn();
    }
  };
  var gi = () => {
    Ke && (ji = setTimeout(() => {
      On = true, Rn(), On = false;
    }, 300), window.addEventListener("hashchange", ps, false));
  };
  var Vt;
  function vn() {
    history.scrollRestoration && Vt && (history.scrollRestoration = Vt, Vt = void 0);
  }
  var Ut = () => {
    let e, t = "";
    function n() {
      var o;
      if (!e || !e.isTopMost() || e.getOptions().Hash === false) return;
      if (On) {
        const h = e.getOptions().sync;
        h && h.goTo(((o = e?.getCarousel()) === null || o === void 0 ? void 0 : o.getPageIndex()) || 0, { transition: false, tween: false });
      }
      const r = e.getCarousel();
      if (!r || !e.getSlide()) return;
      const c = Xt(e);
      if (!c) return;
      const { urlHash: l, urlSlug: m } = ln(), f = mi(e);
      l !== f && (t = l), history.scrollRestoration && !Vt && (Vt = history.scrollRestoration, history.scrollRestoration = "manual", window.addEventListener("beforeunload", vn)), r.on("change", i);
      const p = c !== m;
      try {
        window.history[p ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + f), p && (An = true);
      } catch {
      }
    }
    function i() {
      if (!e || !e.isTopMost() || e.getOptions().Hash === false || !e.getSlide() || !Xt(e)) return;
      const o = mi(e);
      $t = true;
      try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + o);
      } catch {
      }
      $t = false;
    }
    function s() {
      var o;
      if (!(!e || !e.isTopMost() || e.getOptions().Hash === false || In) && Xt(e)) {
        $t = true;
        try {
          An && !(function() {
            if (window.parent === window) return false;
            try {
              var r = window.frameElement;
            } catch {
              r = null;
            }
            return r === null ? location.protocol === "data:" : r.hasAttribute("sandbox");
          })() && ((o = document.activeElement) === null || o === void 0 ? void 0 : o.nodeName) !== "IFRAME" ? window.history.back() : window.history.replaceState({}, document.title, window.location.pathname + window.location.search + t);
        } catch {
        }
        $t = false;
      }
    }
    return { init: function(o) {
      clearTimeout(ji), e = o, e.on("ready", n), e.on("close", s);
    }, destroy: function() {
      e?.off("ready", n), e?.off("close", s);
      const o = e?.getCarousel();
      o && o.off("change", i), e = void 0, Ke?.getInstance() || (vn(), window.removeEventListener("beforeunload", vn));
    } };
  };
  Ut.getInfoFromURL = ln, Ut.startFromUrl = Rn, Ut.setup = function(e) {
    Ke || (Ke = e, Yt() && (/complete|interactive|loaded/.test(document.readyState) ? gi() : document.addEventListener("DOMContentLoaded", gi)));
  };
  var hs = Object.assign(Object.assign({}, _n), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ELEMENT_NOT_FOUND: "HTML Element Not Found", IFRAME_ERROR: "Error Loading Page", NO_CAPTION: "No Caption", TOGGLE_SIDEBAR: "Toggle sidebar" });
  var Hi = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
  Di().add("close", { tpl: Hi });
  var st = (e) => {
    e.cancelable && e.preventDefault();
  };
  var vi = (e = null, t = "", n) => {
    if (!e || !e.parentElement || !t) return void (n && n());
    Gi(e);
    const i = (s) => {
      s.target === e && e.dataset.animationName && (e.removeEventListener("animationend", i), delete e.dataset.animationName, n && n(), e.classList.remove(t));
    };
    e.dataset.animationName = t, e.addEventListener("animationend", i), ue(e, t);
  };
  var Gi = (e) => {
    e && e.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: e }));
  };
  var $e;
  (function(e) {
    e[e.Init = 0] = "Init", e[e.Ready = 1] = "Ready", e[e.Closing = 2] = "Closing", e[e.Destroyed = 3] = "Destroyed";
  })($e || ($e = {}));
  var Dt = { ajax: null, backdropClick: "close", Carousel: {}, closeButton: "auto", closeButtonTpl: Hi, closeExisting: false, delegateEl: void 0, dragToClose: true, fadeEffect: true, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, id: void 0, idle: false, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: hs, mainClass: "", mainStyle: {}, mainTpl: `<dialog class="fancybox__dialog">
    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">
      <div class="fancybox__backdrop"></div>
      <div class="fancybox__carousel"></div>
    </div>
  </dialog>`, modal: true, on: {}, parentEl: void 0, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, sync: void 0, theme: "dark", triggerEl: void 0, triggerEvent: void 0, zoomEffect: true };
  var ct = /* @__PURE__ */ new Map();
  var ms = 0;
  var yi = "with-fancybox";
  var gs = () => {
    let e, t, n, i, s, o, r, c = $e.Init, l = Object.assign({}, Dt), m = -1, f = {}, p = [], h = false, a = true, u = 0;
    function d(P, ...q) {
      let oe = l[P];
      return oe && typeof oe == "function" ? oe(Ae, ...q) : oe;
    }
    function y(P, q = []) {
      const oe = d("l10n") || {};
      P = String(P).replace(/\{\{(\w+)\}\}/g, (j, B) => oe[B] || j);
      for (let j = 0; j < q.length; j++) P = P.split(q[j][0]).join(q[j][1]);
      return P = P.replace(/\{\{(.*?)\}\}/g, (j, B) => B);
    }
    const v = /* @__PURE__ */ new Map();
    function w(P, ...q) {
      const oe = [...v.get(P) || []];
      for (const [j, B] of Object.entries(l.on || {})) (j === P || j.split(" ").indexOf(P) > -1) && oe.push(B);
      for (const j of oe) j && typeof j == "function" && j(Ae, ...q);
      P !== "*" && w("*", P, ...q);
    }
    function E() {
      Fe(t, "is-revealing");
      try {
        document.activeElement === e && (t?.querySelector("[autofocus]") || t).focus();
      } catch {
      }
    }
    function C(P, q) {
      var oe;
      J(q), O(), (oe = q.el) === null || oe === void 0 || oe.addEventListener("click", G), q.type !== "inline" && q.type !== "clone" || (function(j) {
        if (!i || !j || !j.el) return;
        let B = null;
        if (Te(j.src)) {
          const g = j.src.split("#", 2).pop();
          B = g ? document.getElementById(g) : null;
        }
        if (B) {
          if (ue(B, "f-html"), j.type === "clone" || B.closest(".fancybox__carousel")) {
            B = B.cloneNode(true);
            const g = B.dataset.animationName;
            g && (B.classList.remove(g), delete B.dataset.animationName);
            let x = B.getAttribute("id");
            x = x ? `${x}--clone` : `clone-${m}-${j.index}`, B.setAttribute("id", x);
          } else if (B.parentNode) {
            const g = document.createElement("div");
            g.inert = true, B.parentNode.insertBefore(g, B), j.placeholderEl = g;
          }
          j.htmlEl = B, ue(j.el, "has-html"), j.el.prepend(B), B.classList.remove("hidden"), B.style.display === "none" && (B.style.display = ""), getComputedStyle(B).getPropertyValue("display") === "none" && (B.style.display = B.dataset.display || "flex"), i?.emit("contentReady", j);
        } else i?.showError(j, "{{ELEMENT_NOT_FOUND}}");
      })(q), q.type === "ajax" && (function(j) {
        const B = j.el;
        if (!B || j.htmlEl || j.xhr) return;
        i?.showLoading(j), j.state = 0;
        const g = new XMLHttpRequest();
        g.onreadystatechange = function() {
          if (g.readyState === XMLHttpRequest.DONE && c === $e.Ready) if (i?.hideLoading(j), j.state = 1, g.status === 200) {
            let D = g.responseText + "", z = null, S = null;
            if (j.filter) {
              const L = document.createElement("div");
              L.innerHTML = D, S = L.querySelector(j.filter + "");
            }
            S && S instanceof HTMLElement ? z = S : (z = document.createElement("div"), z.innerHTML = D), z.classList.add("f-html"), j.htmlEl = z, B.classList.add("has-html"), B.classList.add("has-ajax"), B.prepend(z), i?.emit("contentReady", j);
          } else i?.showError(j);
        };
        const x = d("ajax") || null;
        g.open(x ? "POST" : "GET", j.src + ""), g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.send(x), j.xhr = g;
      })(q);
    }
    function M(P, q) {
      var oe;
      te(q), (oe = q.el) === null || oe === void 0 || oe.removeEventListener("click", G), q.type !== "inline" && q.type !== "clone" || (function(j) {
        const B = j.htmlEl, g = j.placeholderEl;
        B && (getComputedStyle(B).getPropertyValue("display") !== "none" && (B.style.display = "none"), B.offsetHeight), g && (B && g.parentNode && g.parentNode.insertBefore(B, g), g.remove()), j.htmlEl = void 0, j.placeholderEl = void 0;
      })(q), q.xhr && (q.xhr.abort(), q.xhr = void 0);
    }
    function G(P) {
      if (!ae()) return;
      if (c !== $e.Ready) return st(P), void P.stopPropagation();
      if (P.defaultPrevented || !At.isClickAllowed()) return;
      const q = P.composedPath()[0];
      q.closest(".fancybox__carousel") && q.classList.contains("fancybox__slide") && _(P);
    }
    function $() {
      a = false, t && i && t.classList.remove("is-revealing"), O();
      const P = d("sync");
      if (i && P) {
        const q = P.getPageIndex(i.getPageIndex()) || 0;
        P.goTo(q, { transition: false, tween: false });
      }
    }
    function W() {
      var P;
      (function() {
        const oe = i?.getViewport();
        if (!d("dragToClose") || !i || !oe || (s = At(oe).init(), !s)) return;
        let j = false, B = 0, g = 0, x = {}, D = 1;
        function z() {
          var L, Y;
          o?.spring({ clamp: true, mass: 1, tension: g === 0 ? 140 : 960, friction: 17, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0 }).from({ y: B }).to({ y: g }).start();
          const Q = ((L = i?.getViewport()) === null || L === void 0 ? void 0 : L.getBoundingClientRect().height) || 0, ee = (Y = de()) === null || Y === void 0 ? void 0 : Y.panzoomRef;
          if (Q && ee) if (g === 0) ee.execute(ne.Reset);
          else {
            const le = nn(Math.abs(B), 0, 0.33 * Q, D, 0.77 * D, false);
            ee.execute(ne.ZoomTo, { scale: le });
          }
        }
        const S = (L) => {
          var Y;
          const Q = L.srcEvent, ee = Q.target;
          return i && !(_t(Q) && ((Y = Q.touches) === null || Y === void 0 ? void 0 : Y.length) > 1) && ee && !Et(ee);
        };
        o = vt().on("step", (L) => {
          if (t && oe && c === $e.Ready) {
            const Y = oe.getBoundingClientRect().height;
            B = Math.min(Y, Math.max(-1 * Y, L.y));
            const Q = nn(Math.abs(B), 0, 0.65 * Y, 1, 0.2, true);
            t.style.setProperty("--f-drag-opacity", Q + ""), t.style.setProperty("--f-drag-offset", B + "px");
          }
        }), s.on("start", function() {
          j || (o?.pause(), g = B);
        }).on("panstart", (L) => {
          var Y, Q;
          if (!j && S(L) && L.axis === "y") {
            st(L.srcEvent), j = true, at(), (Y = i?.getViewport()) === null || Y === void 0 || Y.classList.add("is-dragging");
            const ee = (Q = de()) === null || Q === void 0 ? void 0 : Q.panzoomRef;
            if (ee) {
              D = ee.getTransform().scale || 1;
              const le = ee.getOptions();
              x = Object.assign({}, le), le.bounds = false, le.gestures = false;
            }
          } else j = false;
        }).on("pan", function(L) {
          j && S(L) && (st(L.srcEvent), L.srcEvent.stopPropagation(), L.axis === "y" && (g += L.deltaY, z()));
        }).on("end", (L) => {
          var Y, Q, ee;
          if ((Y = i?.getViewport()) === null || Y === void 0 || Y.classList.remove("is-dragging"), j) {
            const le = (Q = de()) === null || Q === void 0 ? void 0 : Q.panzoomRef;
            if (le) {
              (ee = le.getTween()) === null || ee === void 0 || ee.end();
              const fe = le.getOptions();
              fe.bounds = x.bounds || false, fe.gestures = x.gestures || false;
            }
            S(L) && L.axis === "y" && (Math.abs(L.velocityY) > 5 || Math.abs(B) > 50) && Ye(L.srcEvent, "f-throwOut" + (L.velocityY > 0 ? "Down" : "Up"));
          }
          j = false, c === $e.Ready && B !== 0 && (g = 0, z());
        });
      })(), document.body.addEventListener("click", ie), document.body.addEventListener("keydown", I, { passive: false, capture: true }), O(), He();
      const q = d("sync");
      i && q && ((P = q.getTween()) === null || P === void 0 || P.start()), F(de());
    }
    function pe() {
      i?.canGoNext() ? He() : et();
    }
    function N(P, q) {
      J(q);
    }
    function K(P, q) {
      J(q), F(q);
    }
    function U() {
      var P;
      const q = i?.getPlugins().Thumbs;
      Ne(t, "has-thumbs", q?.isEnabled() || false), Ne(t, "has-vertical-thumbs", !!q && (q.getType() === "scrollable" || ((P = q.getCarousel()) === null || P === void 0 ? void 0 : P.isVertical()) === true));
    }
    function O() {
      if (!t) return;
      const P = i?.getPages().length || 0, q = i?.getPageIndex() || 0, oe = t.querySelectorAll("[data-fancybox-index],[data-fancybox-page],[data-fancybox-pages]");
      for (const j of oe) j.hasAttribute("data-fancybox-index") ? j.textContent = String(q) : j.hasAttribute("data-fancybox-page") ? j.textContent = String(q + 1) : j.textContent = String(P);
    }
    function _(P) {
      if (P.composedPath()[0].closest("[data-fancybox-close]")) return void Ye(P);
      w("backdropClick", P), !P.defaultPrevented && d("backdropClick") && Ye(P);
    }
    function H() {
      Qe();
    }
    function I(P) {
      if (!ae() || c !== $e.Ready) return;
      const q = P.key, oe = d("keyboard");
      if (!oe || P.ctrlKey || P.altKey || P.shiftKey) return;
      const j = P.composedPath()[0];
      if (!Lt(j) || q !== "Escape" && ((g) => {
        const x = ["input", "textarea", "select", "option", "video", "iframe", "[contenteditable]", "[data-selectable]", "[data-draggable]"].join(",");
        return g.matches(x) || g.closest(x);
      })(j) || (w("keydown", P), P.defaultPrevented)) return;
      const B = oe[q];
      if (B) switch (B) {
        case "close":
          Ye(P);
          break;
        case "next":
          st(P), i?.next();
          break;
        case "prev":
          st(P), i?.prev();
      }
    }
    function ie(P) {
      if (!ae() || c !== $e.Ready || (Qe(), P.defaultPrevented)) return;
      const q = P.composedPath()[0], oe = !!q.closest("[data-fancybox-close]"), j = q.classList.contains("fancybox__backdrop");
      (oe || j) && _(P);
    }
    function J(P) {
      var q;
      const { el: oe, htmlEl: j, panzoomRef: B, closeButtonEl: g } = P, x = B ? B.getWrapper() : j;
      if (!oe || !oe.parentElement || !x) return;
      let D = d("closeButton");
      if (D === "auto" && (D = ((q = i?.getPlugins().Toolbar) === null || q === void 0 ? void 0 : q.isEnabled()) !== true), D) {
        if (!g) {
          const z = dt(y(d("closeButtonTpl")));
          z && (ue(z, "is-close-button"), P.closeButtonEl = x.insertAdjacentElement("afterbegin", z), ue(oe, "has-close-btn"));
        }
      } else te(P);
    }
    function te(P) {
      P.closeButtonEl && (P.closeButtonEl.remove(), P.closeButtonEl = void 0), Fe(P.el, "has-close-btn");
    }
    function F(P) {
      if (!(a && i && i.getState() === 1 && P && P.index === i.getOptions().initialPage && P.el && P.el.parentElement) || P.state !== void 0 && P.state !== 1) return;
      a = false;
      const q = P.panzoomRef, oe = q?.getTween(), j = d("zoomEffect") && oe ? ge(P) : void 0;
      if (q && oe && j) {
        const { x: g, y: x, scale: D } = q.getStartPosition();
        return void oe.spring({ tension: 215, friction: 25, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0 }).from(j).to({ x: g, y: x, scale: D }).start();
      }
      const B = q?.getContent() || P.htmlEl;
      B && vi(B, d("showClass", P));
    }
    function ae() {
      var P;
      return ((P = ze.getInstance()) === null || P === void 0 ? void 0 : P.getId()) === m;
    }
    function de() {
      var P;
      return (P = i?.getPage()) === null || P === void 0 ? void 0 : P.slides[0];
    }
    function se() {
      const P = de();
      return P ? P.triggerEl || d("triggerEl") : void 0;
    }
    function ge(P) {
      var q, oe;
      const j = P.thumbEl;
      if (!j || !((Q) => {
        const ee = Q.getBoundingClientRect(), le = Q.closest("[style]"), fe = le?.parentElement;
        if (le && le.style.transform && fe) {
          const ye = fe.getBoundingClientRect();
          if (ee.left < ye.left || ee.left > ye.left + ye.width - ee.width || ee.top < ye.top || ee.top > ye.top + ye.height - ee.height) return false;
        }
        const ve = Math.max(document.documentElement.clientHeight, window.innerHeight), be = Math.max(document.documentElement.clientWidth, window.innerWidth);
        return !(ee.bottom < 0 || ee.top - ve >= 0 || ee.right < 0 || ee.left - be >= 0);
      })(j)) return;
      const B = (oe = (q = P.panzoomRef) === null || q === void 0 ? void 0 : q.getWrapper()) === null || oe === void 0 ? void 0 : oe.getBoundingClientRect(), g = B?.width, x = B?.height;
      if (!g || !x) return;
      const D = j.getBoundingClientRect();
      let z = D.width, S = D.height, L = D.left, Y = D.top;
      if (!(!D || !z || !S)) {
        if (j instanceof HTMLImageElement) {
          const Q = window.getComputedStyle(j).getPropertyValue("object-fit");
          if (Q === "contain" || Q === "scale-down") {
            const { width: ee, height: le } = ((fe, ve, be, ye, Ie = "contain") => {
              if (Ie === "contain" || fe > be || ve > ye) {
                const xe = be / fe, Pe = ye / ve, me = Math.min(xe, Pe);
                fe *= me, ve *= me;
              }
              return { width: fe, height: ve };
            })(j.naturalWidth, j.naturalHeight, z, S, Q);
            L += 0.5 * (z - ee), Y += 0.5 * (S - le), z = ee, S = le;
          }
        }
        if (!(Math.abs(g / x - z / S) > 0.1)) return { x: L + 0.5 * z - (B.left + 0.5 * g), y: Y + 0.5 * S - (B.top + 0.5 * x), scale: z / g };
      }
    }
    function Le() {
      r && clearTimeout(r), r = void 0, document.removeEventListener("mousemove", H);
    }
    function He() {
      if (h || r) return;
      const P = d("idle");
      P && (r = setTimeout(nt, P));
    }
    function nt() {
      t && (Le(), ue(t, "is-idle"), document.addEventListener("mousemove", H), h = true);
    }
    function Qe() {
      h && (et(), He());
    }
    function et() {
      Le(), t?.classList.remove("is-idle"), h = false;
    }
    function at() {
      const P = se();
      var q;
      !P || (q = P.getBoundingClientRect()).bottom > 0 && q.right > 0 && q.left < (window.innerWidth || document.documentElement.clientWidth) && q.top < (window.innerHeight || document.documentElement.clientHeight) || P.closest("[inert]") || P.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
    }
    function Ye(P, q) {
      var oe, j, B, g, x;
      if (c === $e.Closing || c === $e.Destroyed) return;
      const D = new Event("shouldClose", { bubbles: true, cancelable: true });
      if (w("shouldClose", D, P), D.defaultPrevented) return;
      if (Le(), P) {
        if (P.defaultPrevented) return;
        st(P), P.stopPropagation(), P.stopImmediatePropagation();
      }
      if (c = $e.Closing, o?.pause(), s?.destroy(), i) {
        (oe = i.getGestures()) === null || oe === void 0 || oe.destroy(), (j = i.getTween()) === null || j === void 0 || j.pause();
        for (const L of i.getSlides()) {
          const Y = L.panzoomRef;
          Y && (Ue(Y.getOptions(), { clickAction: false, dblClickAction: false, wheelAction: false, bounds: false, minScale: 0, maxScale: 1 / 0 }), (B = Y.getGestures()) === null || B === void 0 || B.destroy(), (g = Y.getTween()) === null || g === void 0 || g.pause());
        }
      }
      const z = i?.getPlugins();
      (x = z?.Autoplay) === null || x === void 0 || x.stop();
      const S = z?.Fullscreen;
      S && S.inFullscreen() ? Promise.resolve(S.exit()).then(() => {
        setTimeout(() => {
          ut(P, q);
        }, 150);
      }) : ut(P, q);
    }
    function ut(P, q) {
      var oe, j;
      if (c !== $e.Closing) return;
      w("close", P), a = false, document.body.removeEventListener("click", ie), document.body.removeEventListener("keydown", I, { passive: false, capture: true }), d("placeFocusBack") && at();
      const B = document.activeElement;
      B && e?.contains(B) && B.blur(), d("fadeEffect") && (t?.classList.remove("is-ready"), t?.classList.add("is-hiding")), t?.classList.add("is-closing");
      const g = de(), x = g?.el, D = g?.panzoomRef, z = (oe = g?.panzoomRef) === null || oe === void 0 ? void 0 : oe.getTween(), S = q || d("hideClass");
      let L = false, Y = false;
      if (i && g && x && D && z) {
        let ee;
        if (d("zoomEffect") && g.state === 1 && (ee = ge(g)), ee) {
          L = true;
          const le = () => {
            ee = ge(g), ee ? z.to(Object.assign(Object.assign({}, tt), ee)) : _e();
          };
          D.on("refresh", () => {
            le();
          }), z.easing(vt.Easings.EaseOut).duration(350).from(Object.assign({}, D.getTransform())).to(Object.assign(Object.assign({}, tt), ee)).start(), x?.getAnimations() && (x.style.animationPlayState = "paused", requestAnimationFrame(() => {
            le();
          }));
        }
      }
      const Q = g?.htmlEl || ((j = g?.panzoomRef) === null || j === void 0 ? void 0 : j.getWrapper());
      Q && Gi(Q), !L && S && Q && (Y = true, vi(Q, S, () => {
        _e();
      })), L || Y ? setTimeout(() => {
        _e();
      }, 350) : _e();
    }
    function _e() {
      var P, q, oe, j, B;
      if (c === $e.Destroyed) return;
      c = $e.Destroyed;
      const g = se();
      w("destroy"), (q = (P = d("sync")) === null || P === void 0 ? void 0 : P.getPlugins().Autoplay) === null || q === void 0 || q.resume(), (j = (oe = d("sync")) === null || oe === void 0 ? void 0 : oe.getPlugins().Autoscroll) === null || j === void 0 || j.resume(), e instanceof HTMLDialogElement && e.close(), (B = i?.getContainer()) === null || B === void 0 || B.classList.remove("is-idle"), i?.destroy();
      for (const x of Object.values(f)) x?.destroy();
      if (f = {}, e?.remove(), e = void 0, t = void 0, i = void 0, ct.delete(m), !ct.size && (Zn(false), document.documentElement.classList.remove(yi), d("placeFocusBack") && g && !g.closest("[inert]"))) try {
        g?.focus({ preventScroll: true });
      } catch {
      }
    }
    const Ae = { close: Ye, destroy: _e, getCarousel: function() {
      return i;
    }, getContainer: function() {
      return t;
    }, getId: function() {
      return m;
    }, getOptions: function() {
      return l;
    }, getPlugins: function() {
      return f;
    }, getSlide: function() {
      return de();
    }, getState: function() {
      return c;
    }, init: function(P = [], q = {}) {
      c !== $e.Init && (Ae.destroy(), c = $e.Init), l = Ue({}, Dt, q), m = d("id") || "fancybox-" + ++ms;
      const oe = ct.get(m);
      if (oe && oe.destroy(), ct.set(m, Ae), w("init"), (function() {
        for (const [j, B] of Object.entries(Object.assign(Object.assign({}, ze.Plugins), l.plugins || {}))) if (j && !f[j] && B instanceof Function) {
          const g = B();
          g.init(Ae), f[j] = g;
        }
        w("initPlugins");
      })(), (function(j = []) {
        w("initSlides", j), p = [...j];
      })(P), (function() {
        const j = d("parentEl") || document.body;
        if (!(j && j instanceof HTMLElement)) return;
        const B = y(d("mainTpl") || "");
        if (e = dt(B) || void 0, !e || (t = e.querySelector(".fancybox__container"), !(t && t instanceof HTMLElement))) return;
        const g = d("mainClass");
        g && ue(t, g);
        const x = d("mainStyle");
        if (x && De(x)) for (const [S, L] of Object.entries(x)) t.style.setProperty(S, L);
        const D = d("theme"), z = D === "auto" ? window.matchMedia("(prefers-color-scheme:light)").matches : D === "light";
        t.setAttribute("theme", z ? "light" : "dark"), e.setAttribute("id", `${m}`), e.addEventListener("keydown", (S) => {
          S.key === "Escape" && st(S);
        }), e.addEventListener("wheel", (S) => {
          const L = S.target;
          let Y = d("wheel", S);
          L.closest(".f-thumbs") && (Y = "slide");
          const Q = Y === "slide", ee = [-S.deltaX || 0, -S.deltaY || 0, -S.detail || 0].reduce(function(ve, be) {
            return Math.abs(be) > Math.abs(ve) ? be : ve;
          }), le = Math.max(-1, Math.min(1, ee)), fe = Date.now();
          u && fe - u < 300 ? Q && st(S) : (u = fe, w("wheel", S, le), S.defaultPrevented || (Y === "close" ? Ye(S) : Y === "slide" && i && !Et(L) && (st(S), i[le > 0 ? "prev" : "next"]())));
        }, { capture: true, passive: false }), e.addEventListener("cancel", (S) => {
          Ye(S);
        }), j.append(e), ct.size === 1 && (d("hideScrollbar") && Zn(true), document.documentElement.classList.add(yi)), w("initLayout"), e instanceof HTMLDialogElement && (d("modal") ? e.showModal() : e.show());
      })(), (function() {
        if (n = e?.querySelector(".fancybox__carousel") || void 0, !n) return;
        n.fancybox = Ae;
        const j = Ue({}, { Autoplay: { autoStart: false, pauseOnHover: false, progressbarParentEl: (B) => {
          const g = B.getContainer();
          return g?.querySelector(".f-carousel__toolbar [data-autoplay-action]") || g;
        } }, Fullscreen: { el: t }, Toolbar: { absolute: true, items: { counter: { tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>' } }, display: { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] } }, Video: { autoplay: true }, Thumbs: { minCount: 2, Carousel: { classes: { container: "fancybox__thumbs" } } }, classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", slide: "fancybox__slide" }, spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>', dragFree: false, slidesPerPage: 1, plugins: { Sync: Vi, Arrows: as, Lazyload: Ri, Zoomable: rs, Html: ds, Video: us, Autoplay: ls, Fullscreen: fs, Thumbs: cs, Toolbar: Di } }, d("Carousel") || {}, { slides: p, enabled: true, initialPage: d("startIndex") || 0, l10n: d("l10n") });
        i = sn(n, j), w("initCarousel", i), i.on("*", (B, g, ...x) => {
          w(`Carousel.${g}`, B, ...x);
        }), i.on("attachSlideEl", C), i.on("detachSlideEl", M), i.on("contentLoading", N), i.on("contentReady", K), i.on("ready", W), i.on("change", $), i.on("settle", pe), i.on("thumbs:ready", U), i.on("thumbs:destroy", U), i.init();
      })(), e && t) {
        if (d("closeExisting")) for (const [j, B] of ct.entries()) j !== m && B.close();
        d("fadeEffect") ? (setTimeout(() => {
          E();
        }, 500), ue(t, "is-revealing")) : E(), t.classList.add("is-ready"), c = $e.Ready, w("ready");
      }
    }, isCurrentSlide: function(P) {
      const q = de();
      return !(!P || !q) && q.index === P.index;
    }, isTopMost: function() {
      return ae();
    }, localize: y, off: function(P, q) {
      return v.has(P) && v.set(P, v.get(P).filter((oe) => oe !== q)), Ae;
    }, on: function(P, q) {
      return v.set(P, [...v.get(P) || [], q]), Ae;
    }, toggleIdle(P) {
      (h || P === true) && nt(), h && P !== false || et();
    } };
    return Ae;
  };
  function bi() {
    for (const e of Object.values(ze.Plugins)) {
      const t = e.setup;
      typeof t == "function" && t(ze);
    }
  }
  function wi(e, t = {}) {
    var n, i, s;
    if (!(e && e instanceof Element)) return;
    let o, r, c, l, m = {};
    for (const [y, v] of ze.openers) if (y.contains(e)) for (const [w, E] of v) {
      let C;
      if (w) {
        for (const M of y.querySelectorAll(w)) if (M.contains(e)) {
          C = M;
          break;
        }
        if (!C) continue;
      }
      for (const [M, G] of E) {
        let $ = null;
        try {
          $ = e.closest(M);
        } catch {
        }
        $ && (r = y, c = C, o = $, l = M, Ue(m, G || {}));
      }
    }
    if (!r || !l || !o) return;
    const f = Ue({}, Dt, t, m, { triggerEl: o });
    let p = [].slice.call((c || r).querySelectorAll(l));
    const h = o.closest(".f-carousel"), a = h?.carousel;
    if (a && (!c || !h.contains(c))) {
      const y = [];
      for (const v of a?.getSlides()) {
        const w = v.el;
        w && (w.matches(l) ? y.push(w) : y.push(...[].slice.call(w.querySelectorAll(l))));
      }
      y.length && (p = [...y], (n = a.getPlugins().Autoplay) === null || n === void 0 || n.pause(), (i = a.getPlugins().Autoscroll) === null || i === void 0 || i.pause(), f.sync = a);
    }
    if (f.groupAll === false) {
      const y = f.groupAttr, v = y && o ? o.getAttribute(`${y}`) : "";
      p = y && v && v !== "true" ? p.filter((w) => w.getAttribute(`${y}`) === v) : [o];
    }
    if (!p.length) return;
    (s = f.triggerEvent) === null || s === void 0 || s.preventDefault();
    const u = ze.getInstance(), d = u?.getState();
    if (u && (d === $e.Init || d === $e.Ready)) {
      const y = u.getOptions().triggerEl;
      if (y && p.indexOf(y) > -1) return;
    }
    return Object.assign({}, f.Carousel || {}).rtl && (p = p.reverse()), o && t.startIndex === void 0 && (f.startIndex = p.indexOf(o)), ze.fromNodes(p, f);
  }
  var ze = { Plugins: { Hash: Ut }, version: "6.1.14", openers: /* @__PURE__ */ new Map(), bind: function(e, t, n, i) {
    if (!Yt()) return;
    let s = document.body, o = null, r = "[data-fancybox]", c = {};
    e instanceof Element && (s = e), Te(e) && Te(t) ? (o = e, r = t) : Te(t) && Te(n) ? (o = t, r = n) : Te(t) ? r = t : Te(e) && (r = e), typeof t == "object" && (c = t || {}), typeof n == "object" && (c = n || {}), typeof i == "object" && (c = i || {}), (function(l, m, f, p = {}) {
      if (!(l && l instanceof Element && f)) return;
      const h = ze.openers.get(l) || /* @__PURE__ */ new Map(), a = h.get(m) || /* @__PURE__ */ new Map();
      a.set(f, p), h.set(m, a), ze.openers.set(l, h), h.size === 1 && l.addEventListener("click", ze.fromEvent), bi();
    })(s, o, r, c);
  }, close: function(e = true, ...t) {
    if (e) for (const n of ct.values()) n.close(...t);
    else {
      const n = ze.getInstance();
      n && n.close(...t);
    }
  }, destroy: function() {
    let e;
    for (; e = ze.getInstance(); ) e.destroy();
    for (const t of ze.openers.keys()) t.removeEventListener("click", ze.fromEvent);
    ze.openers.clear();
  }, fromEvent: function(e) {
    if (e.defaultPrevented || e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
    let t = e.composedPath()[0];
    const n = { triggerEvent: e };
    if (t.closest(".fancybox__container.is-hiding")) return st(e), void e.stopPropagation();
    const i = t.closest("[data-fancybox-delegate]") || void 0;
    if (i) {
      const s = i.dataset.fancyboxDelegate || "", o = document.querySelectorAll(`[data-fancybox="${s}"]`), r = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
      t = o[r] || o[0], Ue(n, { delegateEl: i, startIndex: r });
    }
    return wi(t, n);
  }, fromNodes: function(e, t) {
    t = Ue({}, Dt, t || {});
    const n = [], i = (s) => s instanceof HTMLImageElement ? s : s instanceof HTMLElement ? s.querySelector("img:not([aria-hidden])") : void 0;
    for (const s of e) {
      const o = s.dataset || {}, r = t.delegateEl && e.indexOf(s) === t.startIndex ? t.delegateEl : void 0, c = i(r) || i(s) || void 0, l = o.src || s.getAttribute("href") || s.getAttribute("currentSrc") || s.getAttribute("src") || void 0, m = o.thumb || o.thumbSrc || c?.getAttribute("currentSrc") || c?.getAttribute("src") || c?.dataset.lazySrc || void 0, f = { src: l, alt: o.alt || c?.getAttribute("alt") || void 0, thumbSrc: m, thumbEl: c, triggerEl: s, delegateEl: r };
      for (const p in o) {
        let h = o[p] + "";
        f[p] = h === "true" ? p !== "fancybox" || "" : h !== "false" && h;
      }
      n.push(f);
    }
    return ze.show(n, t);
  }, fromSelector: function(e, t, n, i) {
    if (!Yt()) return;
    let s = document.body, o = null, r = "[data-fancybox]", c = {};
    e instanceof Element && (s = e), Te(e) && Te(t) ? (o = e, r = t) : Te(t) && Te(n) ? (o = t, r = n) : Te(t) ? r = t : Te(e) && (r = e), typeof t == "object" && (c = t || {}), typeof n == "object" && (c = n || {}), typeof i == "object" && (c = i || {});
    for (const [l, m] of ze.openers) for (const [f, p] of m) for (const [h, a] of p) if (l === s && f === o) {
      const u = s.querySelector((f ? `${f} ` : "") + r);
      if (u && u.matches(h)) return ze.fromTriggerEl(u, c);
    }
  }, fromTriggerEl: wi, getCarousel: function() {
    var e;
    return ((e = ze.getInstance()) === null || e === void 0 ? void 0 : e.getCarousel()) || void 0;
  }, getDefaults: function() {
    return Dt;
  }, getInstance: function(e) {
    if (e) {
      const t = ct.get(e);
      return t && t.getState() !== $e.Destroyed ? t : void 0;
    }
    return Array.from(ct.values()).reverse().find((t) => {
      if (t.getState() !== $e.Destroyed) return t;
    }) || void 0;
  }, getSlide: function() {
    var e;
    return ((e = ze.getInstance()) === null || e === void 0 ? void 0 : e.getSlide()) || void 0;
  }, show: function(e = [], t = {}) {
    return bi(), gs().init(e, t);
  }, unbind: function(e, t, n) {
    if (!Yt()) return;
    let i = document.body, s = null, o = "[data-fancybox]";
    e instanceof Element && (i = e), Te(e) && Te(t) ? (s = e, o = t) : Te(t) && Te(n) ? (s = t, o = n) : Te(t) ? o = t : Te(e) && (o = e), (function(r, c, l) {
      if (!(r && r instanceof Element && l)) return;
      const m = ze.openers.get(r) || /* @__PURE__ */ new Map(), f = m.get(c) || /* @__PURE__ */ new Map();
      f && l && f.delete(l), f.size && l || m.delete(c), m.size || (ze.openers.delete(r), r.removeEventListener("click", ze.fromEvent));
    })(i, s, o);
  } };
  function Ei(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
  }
  function Fn(e = {}, t = {}) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter((i) => n.indexOf(i) < 0).forEach((i) => {
      typeof e[i] > "u" ? e[i] = t[i] : Ei(t[i]) && Ei(e[i]) && Object.keys(t[i]).length > 0 && Fn(e[i], t[i]);
    });
  }
  var Ni = { body: {}, addEventListener() {
  }, removeEventListener() {
  }, activeElement: { blur() {
  }, nodeName: "" }, querySelector() {
    return null;
  }, querySelectorAll() {
    return [];
  }, getElementById() {
    return null;
  }, createEvent() {
    return { initEvent() {
    } };
  }, createElement() {
    return { children: [], childNodes: [], style: {}, setAttribute() {
    }, getElementsByTagName() {
      return [];
    } };
  }, createElementNS() {
    return {};
  }, importNode() {
    return null;
  }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
  function St() {
    const e = typeof document < "u" ? document : {};
    return Fn(e, Ni), e;
  }
  var vs = { document: Ni, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
  }, pushState() {
  }, go() {
  }, back() {
  } }, CustomEvent: function() {
    return this;
  }, addEventListener() {
  }, removeEventListener() {
  }, getComputedStyle() {
    return { getPropertyValue() {
      return "";
    } };
  }, Image() {
  }, Date() {
  }, screen: {}, setTimeout() {
  }, clearTimeout() {
  }, matchMedia() {
    return {};
  }, requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  }, cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  } };
  function We() {
    const e = typeof window < "u" ? window : {};
    return Fn(e, vs), e;
  }
  function ys(e = "") {
    return e.trim().split(" ").filter((t) => !!t.trim());
  }
  function bs(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {
      }
      try {
        delete t[n];
      } catch {
      }
    });
  }
  function Dn(e, t = 0) {
    return setTimeout(e, t);
  }
  function on() {
    return Date.now();
  }
  function ws(e) {
    const t = We();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
  }
  function Es(e, t = "x") {
    const n = We();
    let i, s, o;
    const r = ws(e);
    return n.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((c) => c.replace(",", ".")).join(", ")), o = new n.WebKitCSSMatrix(s === "none" ? "" : s)) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), t === "x" && (n.WebKitCSSMatrix ? s = o.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), t === "y" && (n.WebKitCSSMatrix ? s = o.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0;
  }
  function Wt(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
  }
  function Ss(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Ze(...e) {
    const t = Object(e[0]);
    for (let n = 1; n < e.length; n += 1) {
      const i = e[n];
      if (i != null && !Ss(i)) {
        const s = Object.keys(Object(i)).filter((o) => o !== "__proto__" && o !== "constructor" && o !== "prototype");
        for (let o = 0, r = s.length; o < r; o += 1) {
          const c = s[o], l = Object.getOwnPropertyDescriptor(i, c);
          l !== void 0 && l.enumerable && (Wt(t[c]) && Wt(i[c]) ? i[c].__swiper__ ? t[c] = i[c] : Ze(t[c], i[c]) : !Wt(t[c]) && Wt(i[c]) ? (t[c] = {}, i[c].__swiper__ ? t[c] = i[c] : Ze(t[c], i[c])) : t[c] = i[c]);
        }
      }
    }
    return t;
  }
  function Mt(e, t, n) {
    e.style.setProperty(t, n);
  }
  function Bi({ swiper: e, targetPosition: t, side: n }) {
    const i = We(), s = -e.translate;
    let o = null, r;
    const c = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > s ? "next" : "prev", m = (p, h) => l === "next" && p >= h || l === "prev" && p <= h, f = () => {
      r = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = r);
      const p = Math.max(Math.min((r - o) / c, 1), 0), h = 0.5 - Math.cos(p * Math.PI) / 2;
      let a = s + h * (t - s);
      if (m(a, t) && (a = t), e.wrapperEl.scrollTo({ [n]: a }), m(a, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [n]: a });
        }), i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(f);
    };
    f();
  }
  function qi(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
  }
  function rt(e, t = "") {
    const n = We(), i = [...e.children];
    return n.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((s) => s.matches(t)) : i;
  }
  function xs(e, t) {
    const n = [t];
    for (; n.length > 0; ) {
      const i = n.shift();
      if (e === i) return true;
      n.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
    }
  }
  function Ts(e, t) {
    const n = We();
    let i = t.contains(e);
    return !i && n.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = xs(e, t))), i;
  }
  function rn(e) {
    try {
      console.warn(e);
      return;
    } catch {
    }
  }
  function an(e, t = []) {
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : ys(t)), n;
  }
  function Ms(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const i = e.previousElementSibling;
      t ? i.matches(t) && n.push(i) : n.push(i), e = i;
    }
    return n;
  }
  function Ls(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const i = e.nextElementSibling;
      t ? i.matches(t) && n.push(i) : n.push(i), e = i;
    }
    return n;
  }
  function mt(e, t) {
    return We().getComputedStyle(e, null).getPropertyValue(t);
  }
  function Si(e) {
    let t = e, n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function Ps(e, t) {
    const n = [];
    let i = e.parentElement;
    for (; i; ) n.push(i), i = i.parentElement;
    return n;
  }
  function Wi(e, t) {
    function n(i) {
      i.target === e && (t.call(e, i), e.removeEventListener("transitionend", n));
    }
    t && e.addEventListener("transitionend", n);
  }
  function xi(e, t, n) {
    const i = We();
    return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
  }
  function lt(e) {
    return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
  }
  function Cs(e, t = "") {
    typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", { createHTML: (n) => n }).createHTML(t) : e.innerHTML = t;
  }
  var yn;
  function Os() {
    const e = We(), t = St();
    return { smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch) };
  }
  function Yi() {
    return yn || (yn = Os()), yn;
  }
  var bn;
  function As({ userAgent: e } = {}) {
    const t = Yi(), n = We(), i = n.navigator.platform, s = e || n.navigator.userAgent, o = { ios: false, android: false }, r = n.screen.width, c = n.screen.height, l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let m = s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const f = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !m && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = i === "Win32";
    let a = i === "MacIntel";
    const u = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !m && a && t.touch && u.indexOf(`${r}x${c}`) >= 0 && (m = s.match(/(Version)\/([\d.]+)/), m || (m = [0, 1, "13_0_0"]), a = false), l && !h && (o.os = "android", o.android = true), (m || p || f) && (o.os = "ios", o.ios = true), o;
  }
  function Xi(e = {}) {
    return bn || (bn = As(e)), bn;
  }
  var wn;
  function Is() {
    const e = We(), t = Xi();
    let n = false;
    function i() {
      const c = e.navigator.userAgent.toLowerCase();
      return c.indexOf("safari") >= 0 && c.indexOf("chrome") < 0 && c.indexOf("android") < 0;
    }
    if (i()) {
      const c = String(e.navigator.userAgent);
      if (c.includes("Version/")) {
        const [l, m] = c.split("Version/")[1].split(" ")[0].split(".").map((f) => Number(f));
        n = l < 16 || l === 16 && m < 2;
      }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), o = i(), r = o || s && t.ios;
    return { isSafari: n || o, needPerspectiveFix: n, need3dFix: r, isWebView: s };
  }
  function Ui() {
    return wn || (wn = Is()), wn;
  }
  function ks({ swiper: e, on: t, emit: n }) {
    const i = We();
    let s = null, o = null;
    const r = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    }, c = () => {
      !e || e.destroyed || !e.initialized || (s = new ResizeObserver((f) => {
        o = i.requestAnimationFrame(() => {
          const { width: p, height: h } = e;
          let a = p, u = h;
          f.forEach(({ contentBoxSize: d, contentRect: y, target: v }) => {
            v && v !== e.el || (a = y ? y.width : (d[0] || d).inlineSize, u = y ? y.height : (d[0] || d).blockSize);
          }), (a !== p || u !== h) && r();
        });
      }), s.observe(e.el));
    }, l = () => {
      o && i.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
    }, m = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
        c();
        return;
      }
      i.addEventListener("resize", r), i.addEventListener("orientationchange", m);
    }), t("destroy", () => {
      l(), i.removeEventListener("resize", r), i.removeEventListener("orientationchange", m);
    });
  }
  function zs({ swiper: e, extendParams: t, on: n, emit: i }) {
    const s = [], o = We(), r = (m, f = {}) => {
      const p = o.MutationObserver || o.WebkitMutationObserver, h = new p((a) => {
        if (e.__preventObserver__) return;
        if (a.length === 1) {
          i("observerUpdate", a[0]);
          return;
        }
        const u = function() {
          i("observerUpdate", a[0]);
        };
        o.requestAnimationFrame ? o.requestAnimationFrame(u) : o.setTimeout(u, 0);
      });
      h.observe(m, { attributes: typeof f.attributes > "u" ? true : f.attributes, childList: e.isElement || (typeof f.childList > "u" ? true : f).childList, characterData: typeof f.characterData > "u" ? true : f.characterData }), s.push(h);
    }, c = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const m = Ps(e.hostEl);
          for (let f = 0; f < m.length; f += 1) r(m[f]);
        }
        r(e.hostEl, { childList: e.params.observeSlideChildren }), r(e.wrapperEl, { attributes: false });
      }
    }, l = () => {
      s.forEach((m) => {
        m.disconnect();
      }), s.splice(0, s.length);
    };
    t({ observer: false, observeParents: false, observeSlideChildren: false }), n("init", c), n("destroy", l);
  }
  var $s = { on(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = n ? "unshift" : "push";
    return e.split(" ").forEach((o) => {
      i.eventsListeners[o] || (i.eventsListeners[o] = []), i.eventsListeners[o][s](t);
    }), i;
  }, once(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    function s(...o) {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(i, o);
    }
    return s.__emitterProxy = t, i.on(e, s, n);
  }, onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
  }, offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  }, off(e, t) {
    const n = this;
    return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach((i) => {
      typeof t > "u" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((s, o) => {
        (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[i].splice(o, 1);
      });
    }), n;
  }, emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, i, s;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), s = t) : (n = e[0].events, i = e[0].data, s = e[0].context || t), i.unshift(s), (Array.isArray(n) ? n : n.split(" ")).forEach((r) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((c) => {
        c.apply(s, [r, ...i]);
      }), t.eventsListeners && t.eventsListeners[r] && t.eventsListeners[r].forEach((c) => {
        c.apply(s, i);
      });
    }), t;
  } };
  function _s() {
    const e = this;
    let t, n;
    const i = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = i.clientHeight, !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(mt(i, "padding-left") || 0, 10) - parseInt(mt(i, "padding-right") || 0, 10), n = n - parseInt(mt(i, "padding-top") || 0, 10) - parseInt(mt(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
  }
  function Vs() {
    const e = this;
    function t(N, K) {
      return parseFloat(N.getPropertyValue(e.getDirectionLabel(K)) || 0);
    }
    const n = e.params, { wrapperEl: i, slidesEl: s, rtlTranslate: o, wrongRTL: r } = e, c = e.virtual && n.virtual.enabled, l = c ? e.virtual.slides.length : e.slides.length, m = rt(s, `.${e.params.slideClass}, swiper-slide`), f = c ? e.virtual.slides.length : m.length;
    let p = [];
    const h = [], a = [];
    let u = n.slidesOffsetBefore;
    typeof u == "function" && (u = n.slidesOffsetBefore.call(e));
    let d = n.slidesOffsetAfter;
    typeof d == "function" && (d = n.slidesOffsetAfter.call(e));
    const y = e.snapGrid.length, v = e.slidesGrid.length, w = e.size - u - d;
    let E = n.spaceBetween, C = -u, M = 0, G = 0;
    if (typeof w > "u") return;
    typeof E == "string" && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * w : typeof E == "string" && (E = parseFloat(E)), e.virtualSize = -E - u - d, m.forEach((N) => {
      o ? N.style.marginLeft = "" : N.style.marginRight = "", N.style.marginBottom = "", N.style.marginTop = "";
    }), n.centeredSlides && n.cssMode && (Mt(i, "--swiper-centered-offset-before", ""), Mt(i, "--swiper-centered-offset-after", "")), n.cssMode && (Mt(i, "--swiper-slides-offset-before", `${u}px`), Mt(i, "--swiper-slides-offset-after", `${d}px`));
    const $ = n.grid && n.grid.rows > 1 && e.grid;
    $ ? e.grid.initSlides(m) : e.grid && e.grid.unsetSlides();
    let W;
    const pe = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter((N) => typeof n.breakpoints[N].slidesPerView < "u").length > 0;
    for (let N = 0; N < f; N += 1) {
      W = 0;
      const K = m[N];
      if (!(K && ($ && e.grid.updateSlide(N, K, m), mt(K, "display") === "none"))) {
        if (c && n.slidesPerView === "auto") n.virtual.slidesPerViewAutoSlideSize && (W = n.virtual.slidesPerViewAutoSlideSize), W && K && (n.roundLengths && (W = Math.floor(W)), K.style[e.getDirectionLabel("width")] = `${W}px`);
        else if (n.slidesPerView === "auto") {
          pe && (K.style[e.getDirectionLabel("width")] = "");
          const U = getComputedStyle(K), O = K.style.transform, _ = K.style.webkitTransform;
          if (O && (K.style.transform = "none"), _ && (K.style.webkitTransform = "none"), n.roundLengths) W = e.isHorizontal() ? xi(K, "width") : xi(K, "height");
          else {
            const H = t(U, "width"), I = t(U, "padding-left"), ie = t(U, "padding-right"), J = t(U, "margin-left"), te = t(U, "margin-right"), F = U.getPropertyValue("box-sizing");
            if (F && F === "border-box") W = H + J + te;
            else {
              const { clientWidth: ae, offsetWidth: de } = K;
              W = H + I + ie + J + te + (de - ae);
            }
          }
          O && (K.style.transform = O), _ && (K.style.webkitTransform = _), n.roundLengths && (W = Math.floor(W));
        } else W = (w - (n.slidesPerView - 1) * E) / n.slidesPerView, n.roundLengths && (W = Math.floor(W)), K && (K.style[e.getDirectionLabel("width")] = `${W}px`);
        K && (K.swiperSlideSize = W), a.push(W), n.centeredSlides ? (C = C + W / 2 + M / 2 + E, M === 0 && N !== 0 && (C = C - w / 2 - E), N === 0 && (C = C - w / 2 - E), Math.abs(C) < 1 / 1e3 && (C = 0), n.roundLengths && (C = Math.floor(C)), G % n.slidesPerGroup === 0 && p.push(C), h.push(C)) : (n.roundLengths && (C = Math.floor(C)), (G - Math.min(e.params.slidesPerGroupSkip, G)) % e.params.slidesPerGroup === 0 && p.push(C), h.push(C), C = C + W + E), e.virtualSize += W + E, M = W, G += 1;
      }
    }
    if (e.virtualSize = Math.max(e.virtualSize, w) + d, o && r && (n.effect === "slide" || n.effect === "coverflow") && (i.style.width = `${e.virtualSize + E}px`), n.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + E}px`), $ && e.grid.updateWrapperSize(W, p), !n.centeredSlides) {
      const N = n.slidesPerView !== "auto" && n.slidesPerView % 1 !== 0, K = n.snapToSlideEdge && !n.loop && (n.slidesPerView === "auto" || N);
      let U = p.length;
      if (K) {
        let _;
        if (n.slidesPerView === "auto") {
          _ = 1;
          let H = 0;
          for (let I = a.length - 1; I >= 0 && (H += a[I] + (I < a.length - 1 ? E : 0), H <= w); I -= 1) _ = a.length - I;
        } else _ = Math.floor(n.slidesPerView);
        U = Math.max(f - _, 0);
      }
      const O = [];
      for (let _ = 0; _ < p.length; _ += 1) {
        let H = p[_];
        n.roundLengths && (H = Math.floor(H)), K ? _ <= U && O.push(H) : p[_] <= e.virtualSize - w && O.push(H);
      }
      p = O, Math.floor(e.virtualSize - w) - Math.floor(p[p.length - 1]) > 1 && (K || p.push(e.virtualSize - w));
    }
    if (c && n.loop) {
      const N = a[0] + E;
      if (n.slidesPerGroup > 1) {
        const K = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup), U = N * n.slidesPerGroup;
        for (let O = 0; O < K; O += 1) p.push(p[p.length - 1] + U);
      }
      for (let K = 0; K < e.virtual.slidesBefore + e.virtual.slidesAfter; K += 1) n.slidesPerGroup === 1 && p.push(p[p.length - 1] + N), h.push(h[h.length - 1] + N), e.virtualSize += N;
    }
    if (p.length === 0 && (p = [0]), E !== 0) {
      const N = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
      m.filter((K, U) => !n.cssMode || n.loop ? true : U !== m.length - 1).forEach((K) => {
        K.style[N] = `${E}px`;
      });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
      let N = 0;
      a.forEach((U) => {
        N += U + (E || 0);
      }), N -= E;
      const K = N > w ? N - w : 0;
      p = p.map((U) => U <= 0 ? -u : U > K ? K + d : U);
    }
    if (n.centerInsufficientSlides) {
      let N = 0;
      if (a.forEach((K) => {
        N += K + (E || 0);
      }), N -= E, N < w) {
        const K = (w - N) / 2;
        p.forEach((U, O) => {
          p[O] = U - K;
        }), h.forEach((U, O) => {
          h[O] = U + K;
        });
      }
    }
    if (Object.assign(e, { slides: m, snapGrid: p, slidesGrid: h, slidesSizesGrid: a }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
      Mt(i, "--swiper-centered-offset-before", `${-p[0]}px`), Mt(i, "--swiper-centered-offset-after", `${e.size / 2 - a[a.length - 1] / 2}px`);
      const N = -e.snapGrid[0], K = -e.slidesGrid[0];
      e.snapGrid = e.snapGrid.map((U) => U + N), e.slidesGrid = e.slidesGrid.map((U) => U + K);
    }
    if (f !== l && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== v && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !c && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
      const N = `${n.containerModifierClass}backface-hidden`, K = e.el.classList.contains(N);
      f <= n.maxBackfaceHiddenSlides ? K || e.el.classList.add(N) : K && e.el.classList.remove(N);
    }
  }
  function Rs(e) {
    const t = this, n = [], i = t.virtual && t.params.virtual.enabled;
    let s = 0, o;
    typeof e == "number" ? t.setTransition(e) : e === true && t.setTransition(t.params.speed);
    const r = (c) => i ? t.slides[t.getSlideIndexByData(c)] : t.slides[c];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((c) => {
      n.push(c);
    });
    else for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
      const c = t.activeIndex + o;
      if (c > t.slides.length && !i) break;
      n.push(r(c));
    }
    else n.push(r(t.activeIndex));
    for (o = 0; o < n.length; o += 1) if (typeof n[o] < "u") {
      const c = n[o].offsetHeight;
      s = c > s ? c : s;
    }
    (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
  }
  function Fs() {
    const e = this, t = e.slides, n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment();
  }
  var Ti = (e, t, n) => {
    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  function Ds(e = this && this.translate || 0) {
    const t = this, n = t.params, { slides: i, rtlTranslate: s, snapGrid: o } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let r = -e;
    s && (r = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let c = n.spaceBetween;
    typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * t.size : typeof c == "string" && (c = parseFloat(c));
    for (let l = 0; l < i.length; l += 1) {
      const m = i[l];
      let f = m.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (f -= i[0].swiperSlideOffset);
      const p = (r + (n.centeredSlides ? t.minTranslate() : 0) - f) / (m.swiperSlideSize + c), h = (r - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) / (m.swiperSlideSize + c), a = -(r - f), u = a + t.slidesSizesGrid[l], d = a >= 0 && a <= t.size - t.slidesSizesGrid[l], y = a >= 0 && a < t.size - 1 || u > 1 && u <= t.size || a <= 0 && u >= t.size;
      y && (t.visibleSlides.push(m), t.visibleSlidesIndexes.push(l)), Ti(m, y, n.slideVisibleClass), Ti(m, d, n.slideFullyVisibleClass), m.progress = s ? -p : p, m.originalProgress = s ? -h : h;
    }
  }
  function js(e) {
    const t = this;
    if (typeof e > "u") {
      const f = t.rtlTranslate ? -1 : 1;
      e = t && t.translate && t.translate * f || 0;
    }
    const n = t.params, i = t.maxTranslate() - t.minTranslate();
    let { progress: s, isBeginning: o, isEnd: r, progressLoop: c } = t;
    const l = o, m = r;
    if (i === 0) s = 0, o = true, r = true;
    else {
      s = (e - t.minTranslate()) / i;
      const f = Math.abs(e - t.minTranslate()) < 1, p = Math.abs(e - t.maxTranslate()) < 1;
      o = f || s <= 0, r = p || s >= 1, f && (s = 0), p && (s = 1);
    }
    if (n.loop) {
      const f = t.getSlideIndexByData(0), p = t.getSlideIndexByData(t.slides.length - 1), h = t.slidesGrid[f], a = t.slidesGrid[p], u = t.slidesGrid[t.slidesGrid.length - 1], d = Math.abs(e);
      d >= h ? c = (d - h) / u : c = (d + u - a) / u, c > 1 && (c -= 1);
    }
    Object.assign(t, { progress: s, progressLoop: c, isBeginning: o, isEnd: r }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !l && t.emit("reachBeginning toEdge"), r && !m && t.emit("reachEnd toEdge"), (l && !o || m && !r) && t.emit("fromEdge"), t.emit("progress", s);
  }
  var En = (e, t, n) => {
    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  function Hs() {
    const e = this, { slides: t, params: n, slidesEl: i, activeIndex: s } = e, o = e.virtual && n.virtual.enabled, r = e.grid && n.grid && n.grid.rows > 1, c = (p) => rt(i, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
    let l, m, f;
    if (o) if (n.loop) {
      let p = s - e.virtual.slidesBefore;
      p < 0 && (p = e.virtual.slides.length + p), p >= e.virtual.slides.length && (p -= e.virtual.slides.length), l = c(`[data-swiper-slide-index="${p}"]`);
    } else l = c(`[data-swiper-slide-index="${s}"]`);
    else r ? (l = t.find((p) => p.column === s), f = t.find((p) => p.column === s + 1), m = t.find((p) => p.column === s - 1)) : l = t[s];
    l && (r || (f = Ls(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && !f && (f = t[0]), m = Ms(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && !m === 0 && (m = t[t.length - 1]))), t.forEach((p) => {
      En(p, p === l, n.slideActiveClass), En(p, p === f, n.slideNextClass), En(p, p === m, n.slidePrevClass);
    }), e.emitSlidesClasses();
  }
  var Zt = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, i = t.closest(n());
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      !s && e.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && !s.lazyPreloaderManaged && s.remove());
      })), s && !s.lazyPreloaderManaged && s.remove();
    }
  };
  var Sn = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  };
  var kn = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const r = s, c = [r - t];
      c.push(...Array.from({ length: t }).map((l, m) => r + i + m)), e.slides.forEach((l, m) => {
        c.includes(l.column) && Sn(e, m);
      });
      return;
    }
    const o = s + i - 1;
    if (e.params.rewind || e.params.loop) for (let r = s - t; r <= o + t; r += 1) {
      const c = (r % n + n) % n;
      (c < s || c > o) && Sn(e, c);
    }
    else for (let r = Math.max(s - t, 0); r <= Math.min(o + t, n - 1); r += 1) r !== s && (r > o || r < s) && Sn(e, r);
  };
  function Gs(e) {
    const { slidesGrid: t, params: n } = e, i = e.rtlTranslate ? e.translate : -e.translate;
    let s;
    for (let o = 0; o < t.length; o += 1) typeof t[o + 1] < "u" ? i >= t[o] && i < t[o + 1] - (t[o + 1] - t[o]) / 2 ? s = o : i >= t[o] && i < t[o + 1] && (s = o + 1) : i >= t[o] && (s = o);
    return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
  }
  function Ns(e) {
    const t = this, n = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: i, params: s, activeIndex: o, realIndex: r, snapIndex: c } = t;
    let l = e, m;
    const f = (a) => {
      let u = a - t.virtual.slidesBefore;
      return u < 0 && (u = t.virtual.slides.length + u), u >= t.virtual.slides.length && (u -= t.virtual.slides.length), u;
    };
    if (typeof l > "u" && (l = Gs(t)), i.indexOf(n) >= 0) m = i.indexOf(n);
    else {
      const a = Math.min(s.slidesPerGroupSkip, l);
      m = a + Math.floor((l - a) / s.slidesPerGroup);
    }
    if (m >= i.length && (m = i.length - 1), l === o && !t.params.loop) {
      m !== c && (t.snapIndex = m, t.emit("snapIndexChange"));
      return;
    }
    if (l === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
      t.realIndex = f(l);
      return;
    }
    const p = t.grid && s.grid && s.grid.rows > 1;
    let h;
    if (t.virtual && s.virtual.enabled) s.loop ? h = f(l) : h = l;
    else if (p) {
      const a = t.slides.find((d) => d.column === l);
      let u = parseInt(a.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(u) && (u = Math.max(t.slides.indexOf(a), 0)), h = Math.floor(u / s.grid.rows);
    } else if (t.slides[l]) {
      const a = t.slides[l].getAttribute("data-swiper-slide-index");
      a ? h = parseInt(a, 10) : h = l;
    } else h = l;
    Object.assign(t, { previousSnapIndex: c, snapIndex: m, previousRealIndex: r, realIndex: h, previousIndex: o, activeIndex: l }), t.initialized && kn(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (r !== h && t.emit("realIndexChange"), t.emit("slideChange"));
  }
  function Bs(e, t) {
    const n = this, i = n.params;
    let s = e.closest(`.${i.slideClass}, swiper-slide`);
    !s && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((c) => {
      !s && c.matches && c.matches(`.${i.slideClass}, swiper-slide`) && (s = c);
    });
    let o = false, r;
    if (s) {
      for (let c = 0; c < n.slides.length; c += 1) if (n.slides[c] === s) {
        o = true, r = c;
        break;
      }
    }
    if (s && o) n.clickedSlide = s, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = r;
    else {
      n.clickedSlide = void 0, n.clickedIndex = void 0;
      return;
    }
    i.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
  }
  var qs = { updateSize: _s, updateSlides: Vs, updateAutoHeight: Rs, updateSlidesOffset: Fs, updateSlidesProgress: Ds, updateProgress: js, updateSlidesClasses: Hs, updateActiveIndex: Ns, updateClickedSlide: Bs };
  function Ws(e = this.isHorizontal() ? "x" : "y") {
    const t = this, { params: n, rtlTranslate: i, translate: s, wrapperEl: o } = t;
    if (n.virtualTranslate) return i ? -s : s;
    if (n.cssMode) return s;
    let r = Es(o, e);
    return r += t.cssOverflowAdjustment(), i && (r = -r), r || 0;
  }
  function Ys(e, t) {
    const n = this, { rtlTranslate: i, params: s, wrapperEl: o, progress: r } = n;
    let c = 0, l = 0;
    const m = 0;
    n.isHorizontal() ? c = i ? -e : e : l = e, s.roundLengths && (c = Math.floor(c), l = Math.floor(l)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : l, s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -l : s.virtualTranslate || (n.isHorizontal() ? c -= n.cssOverflowAdjustment() : l -= n.cssOverflowAdjustment(), o.style.transform = `translate3d(${c}px, ${l}px, ${m}px)`);
    let f;
    const p = n.maxTranslate() - n.minTranslate();
    p === 0 ? f = 0 : f = (e - n.minTranslate()) / p, f !== r && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
  }
  function Xs() {
    return -this.snapGrid[0];
  }
  function Us() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Zs(e = 0, t = this.params.speed, n = true, i = true, s) {
    const o = this, { params: r, wrapperEl: c } = o;
    if (o.animating && r.preventInteractionOnTransition) return false;
    const l = o.minTranslate(), m = o.maxTranslate();
    let f;
    if (i && e > l ? f = l : i && e < m ? f = m : f = e, o.updateProgress(f), r.cssMode) {
      const p = o.isHorizontal();
      if (t === 0) c[p ? "scrollLeft" : "scrollTop"] = -f;
      else {
        if (!o.support.smoothScroll) return Bi({ swiper: o, targetPosition: -f, side: p ? "left" : "top" }), true;
        c.scrollTo({ [p ? "left" : "top"]: -f, behavior: "smooth" });
      }
      return true;
    }
    return t === 0 ? (o.setTransition(0), o.setTranslate(f), n && (o.emit("beforeTransitionStart", t, s), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(f), n && (o.emit("beforeTransitionStart", t, s), o.emit("transitionStart")), o.animating || (o.animating = true, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(h) {
      !o || o.destroyed || h.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = false, n && o.emit("transitionEnd"));
    }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), true;
  }
  var Ks = { getTranslate: Ws, setTranslate: Ys, minTranslate: Xs, maxTranslate: Us, translateTo: Zs };
  function Js(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), n.emit("setTransition", e, t);
  }
  function Zi({ swiper: e, runCallbacks: t, direction: n, step: i }) {
    const { activeIndex: s, previousIndex: o } = e;
    let r = n;
    r || (s > o ? r = "next" : s < o ? r = "prev" : r = "reset"), e.emit(`transition${i}`), t && r === "reset" ? e.emit(`slideResetTransition${i}`) : t && s !== o && (e.emit(`slideChangeTransition${i}`), r === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`));
  }
  function Qs(e = true, t) {
    const n = this, { params: i } = n;
    i.cssMode || (i.autoHeight && n.updateAutoHeight(), Zi({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function eo(e = true, t) {
    const n = this, { params: i } = n;
    n.animating = false, !i.cssMode && (n.setTransition(0), Zi({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  var to = { setTransition: Js, transitionStart: Qs, transitionEnd: eo };
  function no(e = 0, t, n = true, i, s) {
    typeof e == "string" && (e = parseInt(e, 10));
    const o = this;
    let r = e;
    r < 0 && (r = 0);
    const { params: c, snapGrid: l, slidesGrid: m, previousIndex: f, activeIndex: p, rtlTranslate: h, wrapperEl: a, enabled: u } = o;
    if (!u && !i && !s || o.destroyed || o.animating && c.preventInteractionOnTransition) return false;
    typeof t > "u" && (t = o.params.speed);
    const d = Math.min(o.params.slidesPerGroupSkip, r);
    let y = d + Math.floor((r - d) / o.params.slidesPerGroup);
    y >= l.length && (y = l.length - 1);
    const v = -l[y];
    if (c.normalizeSlideIndex) for (let $ = 0; $ < m.length; $ += 1) {
      const W = -Math.floor(v * 100), pe = Math.floor(m[$] * 100), N = Math.floor(m[$ + 1] * 100);
      typeof m[$ + 1] < "u" ? W >= pe && W < N - (N - pe) / 2 ? r = $ : W >= pe && W < N && (r = $ + 1) : W >= pe && (r = $);
    }
    if (o.initialized && r !== p && (!o.allowSlideNext && (h ? v > o.translate && v > o.minTranslate() : v < o.translate && v < o.minTranslate()) || !o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (p || 0) !== r)) return false;
    r !== (f || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(v);
    let w;
    r > p ? w = "next" : r < p ? w = "prev" : w = "reset";
    const E = o.virtual && o.params.virtual.enabled;
    if (!(E && s) && (h && -v === o.translate || !h && v === o.translate)) return o.updateActiveIndex(r), c.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), c.effect !== "slide" && o.setTranslate(v), w !== "reset" && (o.transitionStart(n, w), o.transitionEnd(n, w)), false;
    if (c.cssMode) {
      const $ = o.isHorizontal(), W = h ? v : -v;
      if (t === 0) E && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = true), E && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = true, requestAnimationFrame(() => {
        a[$ ? "scrollLeft" : "scrollTop"] = W;
      })) : a[$ ? "scrollLeft" : "scrollTop"] = W, E && requestAnimationFrame(() => {
        o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = false;
      });
      else {
        if (!o.support.smoothScroll) return Bi({ swiper: o, targetPosition: W, side: $ ? "left" : "top" }), true;
        a.scrollTo({ [$ ? "left" : "top"]: W, behavior: "smooth" });
      }
      return true;
    }
    const G = Ui().isSafari;
    return E && !s && G && o.isElement && o.virtual.update(false, false, r), o.setTransition(t), o.setTranslate(v), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(n, w), t === 0 ? o.transitionEnd(n, w) : o.animating || (o.animating = true, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(W) {
      !o || o.destroyed || W.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, w));
    }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), true;
  }
  function io(e = 0, t, n = true, i) {
    typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    if (s.destroyed) return;
    typeof t > "u" && (t = s.params.speed);
    const o = s.grid && s.params.grid && s.params.grid.rows > 1;
    let r = e;
    if (s.params.loop) if (s.virtual && s.params.virtual.enabled) r = r + s.virtual.slidesBefore;
    else {
      let c;
      if (o) {
        const d = r * s.params.grid.rows;
        c = s.slides.find((y) => y.getAttribute("data-swiper-slide-index") * 1 === d).column;
      } else c = s.getSlideIndexByData(r);
      const l = o ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, { centeredSlides: m, slidesOffsetBefore: f, slidesOffsetAfter: p } = s.params, h = m || !!f || !!p;
      let a = s.params.slidesPerView;
      a === "auto" ? a = s.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(s.params.slidesPerView, 10)), h && a % 2 === 0 && (a = a + 1));
      let u = l - c < a;
      if (h && (u = u || c < Math.ceil(a / 2)), i && h && s.params.slidesPerView !== "auto" && !o && (u = false), u) {
        const d = h ? c < s.activeIndex ? "prev" : "next" : c - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({ direction: d, slideTo: true, activeSlideIndex: d === "next" ? c + 1 : c - l + 1, slideRealIndex: d === "next" ? s.realIndex : void 0 });
      }
      if (o) {
        const d = r * s.params.grid.rows;
        r = s.slides.find((y) => y.getAttribute("data-swiper-slide-index") * 1 === d).column;
      } else r = s.getSlideIndexByData(r);
    }
    return requestAnimationFrame(() => {
      s.slideTo(r, t, n, i);
    }), s;
  }
  function so(e, t = true, n) {
    const i = this, { enabled: s, params: o, animating: r } = i;
    if (!s || i.destroyed) return i;
    typeof e > "u" && (e = i.params.speed);
    let c = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (c = Math.max(i.slidesPerViewDynamic("current", true), 1));
    const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : c, m = i.virtual && o.virtual.enabled;
    if (o.loop) {
      if (r && !m && o.loopPreventsSliding) return false;
      if (i.loopFix({ direction: "next" }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && o.cssMode) return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + l, e, t, n);
      }), true;
    }
    return o.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n);
  }
  function oo(e, t = true, n) {
    const i = this, { params: s, snapGrid: o, slidesGrid: r, rtlTranslate: c, enabled: l, animating: m } = i;
    if (!l || i.destroyed) return i;
    typeof e > "u" && (e = i.params.speed);
    const f = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (m && !f && s.loopPreventsSliding) return false;
      i.loopFix({ direction: "prev" }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const p = c ? i.translate : -i.translate;
    function h(w) {
      return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
    }
    const a = h(p), u = o.map((w) => h(w)), d = s.freeMode && s.freeMode.enabled;
    let y = o[u.indexOf(a) - 1];
    if (typeof y > "u" && (s.cssMode || d)) {
      let w;
      o.forEach((E, C) => {
        a >= E && (w = C);
      }), typeof w < "u" && (y = d ? o[w] : o[w > 0 ? w - 1 : w]);
    }
    let v = 0;
    if (typeof y < "u" && (v = r.indexOf(y), v < 0 && (v = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", true) + 1, v = Math.max(v, 0))), s.rewind && i.isBeginning) {
      const w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(w, e, t, n);
    } else if (s.loop && i.activeIndex === 0 && s.cssMode) return requestAnimationFrame(() => {
      i.slideTo(v, e, t, n);
    }), true;
    return i.slideTo(v, e, t, n);
  }
  function ro(e, t = true, n) {
    const i = this;
    if (!i.destroyed) return typeof e > "u" && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, n);
  }
  function ao(e, t = true, n, i = 0.5) {
    const s = this;
    if (s.destroyed) return;
    typeof e > "u" && (e = s.params.speed);
    let o = s.activeIndex;
    const r = Math.min(s.params.slidesPerGroupSkip, o), c = r + Math.floor((o - r) / s.params.slidesPerGroup), l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[c]) {
      const m = s.snapGrid[c], f = s.snapGrid[c + 1];
      l - m > (f - m) * i && (o += s.params.slidesPerGroup);
    } else {
      const m = s.snapGrid[c - 1], f = s.snapGrid[c];
      l - m <= (f - m) * i && (o -= s.params.slidesPerGroup);
    }
    return o = Math.max(o, 0), o = Math.min(o, s.slidesGrid.length - 1), s.slideTo(o, e, t, n);
  }
  function lo() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: n } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let s = e.getSlideIndexWhenGrid(e.clickedIndex), o;
    const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`, c = e.grid && e.params.grid && e.params.grid.rows > 1;
    if (t.loop) {
      if (e.animating) return;
      o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(o) : s > (c ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), s = e.getSlideIndex(rt(n, `${r}[data-swiper-slide-index="${o}"]`)[0]), Dn(() => {
        e.slideTo(s);
      })) : e.slideTo(s);
    } else e.slideTo(s);
  }
  var co = { slideTo: no, slideToLoop: io, slideNext: so, slidePrev: oo, slideReset: ro, slideToClosest: ao, slideToClickedSlide: lo };
  function uo(e, t) {
    const n = this, { params: i, slidesEl: s } = n;
    if (!i.loop || n.virtual && n.params.virtual.enabled) return;
    const o = () => {
      rt(s, `.${i.slideClass}, swiper-slide`).forEach((u, d) => {
        u.setAttribute("data-swiper-slide-index", d);
      });
    }, r = () => {
      const a = rt(s, `.${i.slideBlankClass}`);
      a.forEach((u) => {
        u.remove();
      }), a.length > 0 && (n.recalcSlides(), n.updateSlides());
    }, c = n.grid && i.grid && i.grid.rows > 1;
    i.loopAddBlankSlides && (i.slidesPerGroup > 1 || c) && r();
    const l = i.slidesPerGroup * (c ? i.grid.rows : 1), m = n.slides.length % l !== 0, f = c && n.slides.length % i.grid.rows !== 0, p = (a) => {
      for (let u = 0; u < a; u += 1) {
        const d = n.isElement ? an("swiper-slide", [i.slideBlankClass]) : an("div", [i.slideClass, i.slideBlankClass]);
        n.slidesEl.append(d);
      }
    };
    if (m) {
      if (i.loopAddBlankSlides) {
        const a = l - n.slides.length % l;
        p(a), n.recalcSlides(), n.updateSlides();
      } else rn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else if (f) {
      if (i.loopAddBlankSlides) {
        const a = i.grid.rows - n.slides.length % i.grid.rows;
        p(a), n.recalcSlides(), n.updateSlides();
      } else rn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else o();
    const h = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
    n.loopFix({ slideRealIndex: e, direction: h ? void 0 : "next", initial: t });
  }
  function fo({ slideRealIndex: e, slideTo: t = true, direction: n, setTranslate: i, activeSlideIndex: s, initial: o, byController: r, byMousewheel: c } = {}) {
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const { slides: m, allowSlidePrev: f, allowSlideNext: p, slidesEl: h, params: a } = l, { centeredSlides: u, slidesOffsetBefore: d, slidesOffsetAfter: y, initialSlide: v } = a, w = u || !!d || !!y;
    if (l.allowSlidePrev = true, l.allowSlideNext = true, l.virtual && a.virtual.enabled) {
      t && (!w && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, false, true) : w && l.snapIndex < a.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, false, true) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, false, true)), l.allowSlidePrev = f, l.allowSlideNext = p, l.emit("loopFix");
      return;
    }
    let E = a.slidesPerView;
    E === "auto" ? E = l.slidesPerViewDynamic() : (E = Math.ceil(parseFloat(a.slidesPerView, 10)), w && E % 2 === 0 && (E = E + 1));
    const C = a.slidesPerGroupAuto ? E : a.slidesPerGroup;
    let M = w ? Math.max(C, Math.ceil(E / 2)) : C;
    M % C !== 0 && (M += C - M % C), M += a.loopAdditionalSlides, l.loopedSlides = M;
    const G = l.grid && a.grid && a.grid.rows > 1;
    m.length < E + M || l.params.effect === "cards" && m.length < E + M * 2 ? rn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : G && a.grid.fill === "row" && rn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const $ = [], W = [], pe = G ? Math.ceil(m.length / a.grid.rows) : m.length, N = o && pe - v < E && !w;
    let K = N ? v : l.activeIndex;
    typeof s > "u" ? s = l.getSlideIndex(m.find((J) => J.classList.contains(a.slideActiveClass))) : K = s;
    const U = n === "next" || !n, O = n === "prev" || !n;
    let _ = 0, H = 0;
    const ie = (G ? m[s].column : s) + (w && typeof i > "u" ? -E / 2 + 0.5 : 0);
    if (ie < M) {
      _ = Math.max(M - ie, C);
      for (let J = 0; J < M - ie; J += 1) {
        const te = J - Math.floor(J / pe) * pe;
        if (G) {
          const F = pe - te - 1;
          for (let ae = m.length - 1; ae >= 0; ae -= 1) m[ae].column === F && $.push(ae);
        } else $.push(pe - te - 1);
      }
    } else if (ie + E > pe - M) {
      H = Math.max(ie - (pe - M * 2), C), N && (H = Math.max(H, E - pe + v + 1));
      for (let J = 0; J < H; J += 1) {
        const te = J - Math.floor(J / pe) * pe;
        G ? m.forEach((F, ae) => {
          F.column === te && W.push(ae);
        }) : W.push(te);
      }
    }
    if (l.__preventObserver__ = true, requestAnimationFrame(() => {
      l.__preventObserver__ = false;
    }), l.params.effect === "cards" && m.length < E + M * 2 && (W.includes(s) && W.splice(W.indexOf(s), 1), $.includes(s) && $.splice($.indexOf(s), 1)), O && $.forEach((J) => {
      m[J].swiperLoopMoveDOM = true, h.prepend(m[J]), m[J].swiperLoopMoveDOM = false;
    }), U && W.forEach((J) => {
      m[J].swiperLoopMoveDOM = true, h.append(m[J]), m[J].swiperLoopMoveDOM = false;
    }), l.recalcSlides(), a.slidesPerView === "auto" ? l.updateSlides() : G && ($.length > 0 && O || W.length > 0 && U) && l.slides.forEach((J, te) => {
      l.grid.updateSlide(te, J, l.slides);
    }), a.watchSlidesProgress && l.updateSlidesOffset(), t) {
      if ($.length > 0 && O) {
        if (typeof e > "u") {
          const J = l.slidesGrid[K], F = l.slidesGrid[K + _] - J;
          c ? l.setTranslate(l.translate - F) : (l.slideTo(K + Math.ceil(_), 0, false, true), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - F, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - F));
        } else if (i) {
          const J = G ? $.length / a.grid.rows : $.length;
          l.slideTo(l.activeIndex + J, 0, false, true), l.touchEventsData.currentTranslate = l.translate;
        }
      } else if (W.length > 0 && U) if (typeof e > "u") {
        const J = l.slidesGrid[K], F = l.slidesGrid[K - H] - J;
        c ? l.setTranslate(l.translate - F) : (l.slideTo(K - H, 0, false, true), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - F, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - F));
      } else {
        const J = G ? W.length / a.grid.rows : W.length;
        l.slideTo(l.activeIndex - J, 0, false, true);
      }
    }
    if (l.allowSlidePrev = f, l.allowSlideNext = p, l.controller && l.controller.control && !r) {
      const J = { slideRealIndex: e, direction: n, setTranslate: i, activeSlideIndex: s, byController: true };
      Array.isArray(l.controller.control) ? l.controller.control.forEach((te) => {
        !te.destroyed && te.params.loop && te.loopFix({ ...J, slideTo: te.params.slidesPerView === a.slidesPerView ? t : false });
      }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...J, slideTo: l.controller.control.params.slidesPerView === a.slidesPerView ? t : false });
    }
    l.emit("loopFix");
  }
  function po() {
    const e = this, { params: t, slidesEl: n } = e;
    if (!t.loop || !n || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach((s) => {
      const o = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
      i[o] = s;
    }), e.slides.forEach((s) => {
      s.removeAttribute("data-swiper-slide-index");
    }), i.forEach((s) => {
      n.append(s);
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
  }
  var ho = { loopCreate: uo, loopFix: fo, loopDestroy: po };
  function mo(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = true), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
      t.__preventObserver__ = false;
    });
  }
  function go() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = true), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = false;
    }));
  }
  var vo = { setGrabCursor: mo, unsetGrabCursor: go };
  function yo(e, t = this) {
    function n(i) {
      if (!i || i === St() || i === We()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const s = i.closest(e);
      return !s && !i.getRootNode ? null : s || n(i.getRootNode().host);
    }
    return n(t);
  }
  function Mi(e, t, n) {
    const i = We(), { params: s } = e, o = s.edgeSwipeDetection, r = s.edgeSwipeThreshold;
    return o && (n <= r || n >= i.innerWidth - r) ? o === "prevent" ? (t.preventDefault(), true) : false : true;
  }
  function bo(e) {
    const t = this;
    if (t.destroyed) return;
    const n = St();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const s = t.touchEventsData;
    if (i.type === "pointerdown") {
      if (s.pointerId !== null && s.pointerId !== i.pointerId) return;
      s.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      Mi(t, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: o, touches: r, enabled: c } = t;
    if (!c || !o.simulateTouch && i.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let l = i.target;
    if (o.touchEventsTarget === "wrapper" && !Ts(l, t.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
    const m = !!o.noSwipingClass && o.noSwipingClass !== "", f = i.composedPath ? i.composedPath() : i.path;
    m && i.target && i.target.shadowRoot && f && (l = f[0]);
    const p = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, h = !!(i.target && i.target.shadowRoot);
    if (o.noSwiping && (h ? yo(p, l) : l.closest(p))) {
      t.allowClick = true;
      return;
    }
    if (o.swipeHandler && !l.closest(o.swipeHandler)) return;
    r.currentX = i.pageX, r.currentY = i.pageY;
    const a = r.currentX, u = r.currentY;
    if (!Mi(t, i, a)) return;
    Object.assign(s, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), r.startX = a, r.startY = u, s.touchStartTime = on(), t.allowClick = true, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = false);
    let d = true;
    l.matches(s.focusableElements) && (d = false, l.nodeName === "SELECT" && (s.isTouched = false)), n.activeElement && n.activeElement.matches(s.focusableElements) && n.activeElement !== l && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !l.matches(s.focusableElements)) && n.activeElement.blur();
    const y = d && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || y) && !l.isContentEditable && i.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
  }
  function wo(e) {
    const t = St(), n = this;
    if (n.destroyed) return;
    const i = n.touchEventsData, { params: s, touches: o, rtlTranslate: r, enabled: c } = n;
    if (!c || !s.simulateTouch && e.pointerType === "mouse") return;
    let l = e;
    if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId)) return;
    let m;
    if (l.type === "touchmove") {
      if (m = [...l.changedTouches].find((M) => M.identifier === i.touchId), !m || m.identifier !== i.touchId) return;
    } else m = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    const f = m.pageX, p = m.pageY;
    if (l.preventedByNestedSwiper) {
      o.startX = f, o.startY = p;
      return;
    }
    if (!n.allowTouchMove) {
      l.target.matches(i.focusableElements) || (n.allowClick = false), i.isTouched && (Object.assign(o, { startX: f, startY: p, currentX: f, currentY: p }), i.touchStartTime = on());
      return;
    }
    if (s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
      if (p < o.startY && n.translate <= n.maxTranslate() || p > o.startY && n.translate >= n.minTranslate()) {
        i.isTouched = false, i.isMoved = false;
        return;
      }
    } else {
      if (r && (f > o.startX && -n.translate <= n.maxTranslate() || f < o.startX && -n.translate >= n.minTranslate())) return;
      if (!r && (f < o.startX && n.translate <= n.maxTranslate() || f > o.startX && n.translate >= n.minTranslate())) return;
    }
    if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== l.target && l.pointerType !== "mouse" && t.activeElement.blur(), t.activeElement && l.target === t.activeElement && l.target.matches(i.focusableElements)) {
      i.isMoved = true, n.allowClick = false;
      return;
    }
    i.allowTouchCallbacks && n.emit("touchMove", l), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = f, o.currentY = p;
    const h = o.currentX - o.startX, a = o.currentY - o.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + a ** 2) < n.params.threshold) return;
    if (typeof i.isScrolling > "u") {
      let M;
      n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? i.isScrolling = false : h * h + a * a >= 25 && (M = Math.atan2(Math.abs(a), Math.abs(h)) * 180 / Math.PI, i.isScrolling = n.isHorizontal() ? M > s.touchAngle : 90 - M > s.touchAngle);
    }
    if (i.isScrolling && n.emit("touchMoveOpposite", l), typeof i.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (i.startMoving = true), i.isScrolling || l.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
      i.isTouched = false;
      return;
    }
    if (!i.startMoving) return;
    n.allowClick = false, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let u = n.isHorizontal() ? h : a, d = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    s.oneWayMovement && (u = Math.abs(u) * (r ? 1 : -1), d = Math.abs(d) * (r ? 1 : -1)), o.diff = u, u *= s.touchRatio, r && (u = -u, d = -d);
    const y = n.touchesDirection;
    n.swipeDirection = u > 0 ? "prev" : "next", n.touchesDirection = d > 0 ? "prev" : "next";
    const v = n.params.loop && !s.cssMode, w = n.touchesDirection === "next" && n.allowSlideNext || n.touchesDirection === "prev" && n.allowSlidePrev;
    if (!i.isMoved) {
      if (v && w && n.loopFix({ direction: n.swipeDirection }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
        const M = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true, detail: { bySwiperTouchMove: true } });
        n.wrapperEl.dispatchEvent(M);
      }
      i.allowMomentumBounce = false, s.grabCursor && (n.allowSlideNext === true || n.allowSlidePrev === true) && n.setGrabCursor(true), n.emit("sliderFirstMove", l);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), s._loopSwapReset !== false && i.isMoved && i.allowThresholdMove && y !== n.touchesDirection && v && w && Math.abs(u) >= 1) {
      Object.assign(o, { startX: f, startY: p, currentX: f, currentY: p, startTranslate: i.currentTranslate }), i.loopSwapReset = true, i.startTranslate = i.currentTranslate;
      return;
    }
    n.emit("sliderMove", l), i.isMoved = true, i.currentTranslate = u + i.startTranslate;
    let E = true, C = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (C = 0), u > 0 ? (v && w && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] - (s.slidesPerView !== "auto" && n.slides.length - s.slidesPerView >= 2 ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween : 0) - n.params.spaceBetween : n.minTranslate()) && n.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 }), i.currentTranslate > n.minTranslate() && (E = false, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + u) ** C))) : u < 0 && (v && w && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween + (s.slidesPerView !== "auto" && n.slides.length - s.slidesPerView >= 2 ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween : 0) : n.maxTranslate()) && n.loopFix({ direction: "next", setTranslate: true, activeSlideIndex: n.slides.length - (s.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10))) }), i.currentTranslate < n.maxTranslate() && (E = false, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - u) ** C))), E && (l.preventedByNestedSwiper = true), !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0) if (Math.abs(u) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = true, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate));
  }
  function Eo(e) {
    const t = this;
    if (t.destroyed) return;
    const n = t.touchEventsData;
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    let s;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (s = [...i.changedTouches].find((M) => M.identifier === n.touchId), !s || s.identifier !== n.touchId) return;
    } else {
      if (n.touchId !== null || i.pointerId !== n.pointerId) return;
      s = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    n.pointerId = null, n.touchId = null;
    const { params: r, touches: c, rtlTranslate: l, slidesGrid: m, enabled: f } = t;
    if (!f || !r.simulateTouch && i.pointerType === "mouse") return;
    if (n.allowTouchCallbacks && t.emit("touchEnd", i), n.allowTouchCallbacks = false, !n.isTouched) {
      n.isMoved && r.grabCursor && t.setGrabCursor(false), n.isMoved = false, n.startMoving = false;
      return;
    }
    r.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === true || t.allowSlidePrev === true) && t.setGrabCursor(false);
    const p = on(), h = p - n.touchStartTime;
    if (t.allowClick) {
      const M = i.path || i.composedPath && i.composedPath();
      t.updateClickedSlide(M && M[0] || i.target, M), t.emit("tap click", i), h < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
    }
    if (n.lastClickTime = on(), Dn(() => {
      t.destroyed || (t.allowClick = true);
    }), !n.isTouched || !n.isMoved || !t.swipeDirection || c.diff === 0 && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
      n.isTouched = false, n.isMoved = false, n.startMoving = false;
      return;
    }
    n.isTouched = false, n.isMoved = false, n.startMoving = false;
    let a;
    if (r.followFinger ? a = l ? t.translate : -t.translate : a = -n.currentTranslate, r.cssMode) return;
    if (r.freeMode && r.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: a });
      return;
    }
    const u = a >= -t.maxTranslate() && !t.params.loop;
    let d = 0, y = t.slidesSizesGrid[0];
    for (let M = 0; M < m.length; M += M < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const G = M < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof m[M + G] < "u" ? (u || a >= m[M] && a < m[M + G]) && (d = M, y = m[M + G] - m[M]) : (u || a >= m[M]) && (d = M, y = m[m.length - 1] - m[m.length - 2]);
    }
    let v = null, w = null;
    r.rewind && (t.isBeginning ? w = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const E = (a - m[d]) / y, C = d < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (h > r.longSwipesMs) {
      if (!r.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" && (E >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : d + C) : t.slideTo(d)), t.swipeDirection === "prev" && (E > 1 - r.longSwipesRatio ? t.slideTo(d + C) : w !== null && E < 0 && Math.abs(E) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(d));
    } else {
      if (!r.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(d + C) : t.slideTo(d) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : d + C), t.swipeDirection === "prev" && t.slideTo(w !== null ? w : d));
    }
  }
  function Li() {
    const e = this, { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: s, snapGrid: o } = e, r = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = true, e.allowSlidePrev = true, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const c = r && t.loop;
    if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !c) {
      const l = r ? e.virtual.slides : e.slides;
      e.slideTo(l.length - 1, 0, false, true);
    } else e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, false, true) : e.slideTo(e.activeIndex, 0, false, true);
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
  }
  function So(e) {
    const t = this;
    t.destroyed || t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function xo() {
    const e = this;
    if (e.destroyed) return;
    const { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
    if (!i) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let s;
    const o = e.maxTranslate() - e.minTranslate();
    o === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / o, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, false);
  }
  function To(e) {
    const t = this;
    t.destroyed || (Zt(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update());
  }
  function Mo() {
    const e = this;
    e.destroyed || e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = true, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  var Ki = (e, t) => {
    const n = St(), { params: i, el: s, wrapperEl: o, device: r } = e, c = !!i.nested, l = t === "on" ? "addEventListener" : "removeEventListener", m = t;
    !s || typeof s == "string" || (n[l]("touchstart", e.onDocumentTouchStart, { passive: false, capture: c }), s[l]("touchstart", e.onTouchStart, { passive: false }), s[l]("pointerdown", e.onTouchStart, { passive: false }), n[l]("touchmove", e.onTouchMove, { passive: false, capture: c }), n[l]("pointermove", e.onTouchMove, { passive: false, capture: c }), n[l]("touchend", e.onTouchEnd, { passive: true }), n[l]("pointerup", e.onTouchEnd, { passive: true }), n[l]("pointercancel", e.onTouchEnd, { passive: true }), n[l]("touchcancel", e.onTouchEnd, { passive: true }), n[l]("pointerout", e.onTouchEnd, { passive: true }), n[l]("pointerleave", e.onTouchEnd, { passive: true }), n[l]("contextmenu", e.onTouchEnd, { passive: true }), (i.preventClicks || i.preventClicksPropagation) && s[l]("click", e.onClick, true), i.cssMode && o[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[m](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Li, true) : e[m]("observerUpdate", Li, true), s[l]("load", e.onLoad, { capture: true }));
  };
  function Lo() {
    const e = this, { params: t } = e;
    e.onTouchStart = bo.bind(e), e.onTouchMove = wo.bind(e), e.onTouchEnd = Eo.bind(e), e.onDocumentTouchStart = Mo.bind(e), t.cssMode && (e.onScroll = xo.bind(e)), e.onClick = So.bind(e), e.onLoad = To.bind(e), Ki(e, "on");
  }
  function Po() {
    Ki(this, "off");
  }
  var Co = { attachEvents: Lo, detachEvents: Po };
  var Pi = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Oo() {
    const e = this, { realIndex: t, initialized: n, params: i, el: s } = e, o = i.breakpoints;
    if (!o || o && Object.keys(o).length === 0) return;
    const r = St(), c = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", l = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : r.querySelector(i.breakpointsBase), m = e.getBreakpoint(o, c, l);
    if (!m || e.currentBreakpoint === m) return;
    const p = (m in o ? o[m] : void 0) || e.originalParams, h = Pi(e, i), a = Pi(e, p), u = e.params.grabCursor, d = p.grabCursor, y = i.enabled;
    h && !a ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !h && a && (s.classList.add(`${i.containerModifierClass}grid`), (p.grid.fill && p.grid.fill === "column" || !p.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), u && !d ? e.unsetGrabCursor() : !u && d && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((G) => {
      if (typeof p[G] > "u") return;
      const $ = i[G] && i[G].enabled, W = p[G] && p[G].enabled;
      $ && !W && e[G].disable(), !$ && W && e[G].enable();
    });
    const v = p.direction && p.direction !== i.direction, w = i.loop && (p.slidesPerView !== i.slidesPerView || v), E = i.loop;
    v && n && e.changeDirection(), Ze(e.params, p);
    const C = e.params.enabled, M = e.params.loop;
    Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), y && !C ? e.disable() : !y && C && e.enable(), e.currentBreakpoint = m, e.emit("_beforeBreakpoint", p), n && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !E && M ? (e.loopCreate(t), e.updateSlides()) : E && !M && e.loopDestroy()), e.emit("breakpoint", p);
  }
  function Ao(e, t = "window", n) {
    if (!e || t === "container" && !n) return;
    let i = false;
    const s = We(), o = t === "window" ? s.innerHeight : n.clientHeight, r = Object.keys(e).map((c) => {
      if (typeof c == "string" && c.indexOf("@") === 0) {
        const l = parseFloat(c.substr(1));
        return { value: o * l, point: c };
      }
      return { value: c, point: c };
    });
    r.sort((c, l) => parseInt(c.value, 10) - parseInt(l.value, 10));
    for (let c = 0; c < r.length; c += 1) {
      const { point: l, value: m } = r[c];
      t === "window" ? s.matchMedia(`(min-width: ${m}px)`).matches && (i = l) : m <= n.clientWidth && (i = l);
    }
    return i || "max";
  }
  var Io = { setBreakpoint: Oo, getBreakpoint: Ao };
  function ko(e, t) {
    const n = [];
    return e.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((s) => {
        i[s] && n.push(t + s);
      }) : typeof i == "string" && n.push(t + i);
    }), n;
  }
  function zo() {
    const e = this, { classNames: t, params: n, rtl: i, el: s, device: o } = e, r = ko(["initialized", n.direction, { "free-mode": e.params.freeMode && n.freeMode.enabled }, { autoheight: n.autoHeight }, { rtl: i }, { grid: n.grid && n.grid.rows > 1 }, { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" }, { android: o.android }, { ios: o.ios }, { "css-mode": n.cssMode }, { centered: n.cssMode && n.centeredSlides }, { "watch-progress": n.watchSlidesProgress }], n.containerModifierClass);
    t.push(...r), s.classList.add(...t), e.emitContainerClasses();
  }
  function $o() {
    const e = this, { el: t, classNames: n } = e;
    !t || typeof t == "string" || (t.classList.remove(...n), e.emitContainerClasses());
  }
  var _o = { addClasses: zo, removeClasses: $o };
  function Vo() {
    const e = this, { isLocked: t, params: n } = e, { slidesOffsetBefore: i } = n;
    if (i) {
      const s = e.slides.length - 1, o = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
      e.isLocked = e.size > o;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === true && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === true && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = false), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var Ro = { checkOverflow: Vo };
  var Ci = { init: true, direction: "horizontal", oneWayMovement: false, swiperElementNodeName: "SWIPER-CONTAINER", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, eventsPrefix: "swiper", enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, snapToSlideEdge: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 5, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loop: false, loopAddBlankSlides: true, loopAdditionalSlides: 0, loopPreventsSliding: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-blank", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideFullyVisibleClass: "swiper-slide-fully-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: true, _emitClasses: false };
  function Fo(e, t) {
    return function(i = {}) {
      const s = Object.keys(i)[0], o = i[s];
      if (typeof o != "object" || o === null) {
        Ze(t, i);
        return;
      }
      if (e[s] === true && (e[s] = { enabled: true }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = true), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = true), !(s in e && "enabled" in o)) {
        Ze(t, i);
        return;
      }
      typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = true), e[s] || (e[s] = { enabled: false }), Ze(t, i);
    };
  }
  var xn = { eventsEmitter: $s, update: qs, translate: Ks, transition: to, slide: co, loop: ho, grabCursor: vo, events: Co, breakpoints: Io, checkOverflow: Ro, classes: _o };
  var Tn = {};
  var Je = class _Je {
    constructor(...t) {
      let n, i;
      t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [n, i] = t, i || (i = {}), i = Ze({}, i), n && !i.el && (i.el = n);
      const s = St();
      if (i.el && typeof i.el == "string" && s.querySelectorAll(i.el).length > 1) {
        const l = [];
        return s.querySelectorAll(i.el).forEach((m) => {
          const f = Ze({}, i, { el: m });
          l.push(new _Je(f));
        }), l;
      }
      const o = this;
      o.__swiper__ = true, o.support = Yi(), o.device = Xi({ userAgent: i.userAgent }), o.browser = Ui(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], i.modules && Array.isArray(i.modules) && i.modules.forEach((l) => {
        typeof l == "function" && o.modules.indexOf(l) < 0 && o.modules.push(l);
      });
      const r = {};
      o.modules.forEach((l) => {
        l({ params: i, swiper: o, extendParams: Fo(i, r), on: o.on.bind(o), once: o.once.bind(o), off: o.off.bind(o), emit: o.emit.bind(o) });
      });
      const c = Ze({}, Ci, r);
      return o.params = Ze({}, c, Tn, i), o.originalParams = Ze({}, o.params), o.passedParams = Ze({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach((l) => {
        o.on(l, o.params.on[l]);
      }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, { enabled: o.params.enabled, el: n, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal() {
        return o.params.direction === "horizontal";
      }, isVertical() {
        return o.params.direction === "vertical";
      }, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      }, allowSlideNext: o.params.allowSlideNext, allowSlidePrev: o.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: o.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null }, allowClick: true, allowTouchMove: o.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), o.emit("_swiper"), o.params.init && o.init(), o;
    }
    getDirectionLabel(t) {
      return this.isHorizontal() ? t : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t];
    }
    getSlideIndex(t) {
      const { slidesEl: n, params: i } = this, s = rt(n, `.${i.slideClass}, swiper-slide`), o = Si(s[0]);
      return Si(t) - o;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(this.slides.find((n) => n.getAttribute("data-swiper-slide-index") * 1 === t));
    }
    getSlideIndexWhenGrid(t) {
      return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? t = Math.floor(t / this.params.grid.rows) : this.params.grid.fill === "row" && (t = t % Math.ceil(this.slides.length / this.params.grid.rows))), t;
    }
    recalcSlides() {
      const t = this, { slidesEl: n, params: i } = t;
      t.slides = rt(n, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled || (t.enabled = true, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled && (t.enabled = false, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
    }
    setProgress(t, n) {
      const i = this;
      t = Math.min(Math.max(t, 0), 1);
      const s = i.minTranslate(), r = (i.maxTranslate() - s) * t + s;
      i.translateTo(r, typeof n > "u" ? 0 : n), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed ? "" : t.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.forEach((i) => {
        const s = t.getSlideClasses(i);
        n.push({ slideEl: i, classNames: s }), t.emit("_slideClass", i, s);
      }), t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t = "current", n = false) {
      const i = this, { params: s, slides: o, slidesGrid: r, slidesSizesGrid: c, size: l, activeIndex: m } = i;
      let f = 1;
      if (typeof s.slidesPerView == "number") return s.slidesPerView;
      if (s.centeredSlides) {
        let p = o[m] ? Math.ceil(o[m].swiperSlideSize) : 0, h;
        for (let a = m + 1; a < o.length; a += 1) o[a] && !h && (p += Math.ceil(o[a].swiperSlideSize), f += 1, p > l && (h = true));
        for (let a = m - 1; a >= 0; a -= 1) o[a] && !h && (p += o[a].swiperSlideSize, f += 1, p > l && (h = true));
      } else if (t === "current") for (let p = m + 1; p < o.length; p += 1) (n ? r[p] + c[p] - r[m] < l : r[p] - r[m] < l) && (f += 1);
      else for (let p = m - 1; p >= 0; p -= 1) r[m] - r[p] < l && (f += 1);
      return f;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: i } = t;
      i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
        r.complete && Zt(t, r);
      }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
      function s() {
        const r = t.rtlTranslate ? t.translate * -1 : t.translate, c = Math.min(Math.max(r, t.maxTranslate()), t.minTranslate());
        t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let o;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && t.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
          const r = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
          o = t.slideTo(r.length - 1, 0, false, true);
        } else o = t.slideTo(t.activeIndex, 0, false, true);
        o || s();
      }
      i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
    }
    changeDirection(t, n = true) {
      const i = this, s = i.params.direction;
      return t || (t = s === "horizontal" ? "vertical" : "horizontal"), t === s || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((o) => {
        t === "vertical" ? o.style.width = "" : o.style.height = "";
      }), i.emit("changeDirection"), n && i.update()), i;
    }
    changeLanguageDirection(t) {
      const n = this;
      n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl", n.rtlTranslate = n.params.direction === "horizontal" && n.rtl, n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), n.el.dir = "ltr"), n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted) return true;
      let i = t || n.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i) return false;
      i.swiper = n, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === n.params.swiperElementNodeName.toUpperCase() && (n.isElement = true);
      const s = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : rt(i, s())[0];
      return !r && n.params.createElements && (r = an("div", n.params.wrapperClass), i.append(r), rt(i, `.${n.params.slideClass}`).forEach((c) => {
        r.append(c);
      })), Object.assign(n, { el: i, wrapperEl: r, slidesEl: n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r, hostEl: n.isElement ? i.parentNode.host : i, mounted: true, rtl: i.dir.toLowerCase() === "rtl" || mt(i, "direction") === "rtl", rtlTranslate: n.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || mt(i, "direction") === "rtl"), wrongRTL: mt(r, "display") === "-webkit-box" }), true;
    }
    init(t) {
      const n = this;
      if (n.initialized || n.mount(t) === false) return n;
      n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, false, true) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, false, true), n.params.loop && n.loopCreate(void 0, true), n.attachEvents();
      const s = [...n.el.querySelectorAll('[loading="lazy"]')];
      return n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((o) => {
        o.complete ? Zt(n, o) : o.addEventListener("load", (r) => {
          Zt(n, r.target);
        });
      }), kn(n), n.initialized = true, kn(n), n.emit("init"), n.emit("afterInit"), n;
    }
    destroy(t = true, n = true) {
      const i = this, { params: s, el: o, wrapperEl: r, slides: c } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = false, i.detachEvents(), s.loop && i.loopDestroy(), n && (i.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), r && r.removeAttribute("style"), c && c.length && c.forEach((l) => {
        l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((l) => {
        i.off(l);
      }), t !== false && (i.el && typeof i.el != "string" && (i.el.swiper = null), bs(i)), i.destroyed = true), null;
    }
    static extendDefaults(t) {
      Ze(Tn, t);
    }
    static get extendedDefaults() {
      return Tn;
    }
    static get defaults() {
      return Ci;
    }
    static installModule(t) {
      _Je.prototype.__modules__ || (_Je.prototype.__modules__ = []);
      const n = _Je.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t) ? (t.forEach((n) => _Je.installModule(n)), _Je) : (_Je.installModule(t), _Je);
    }
  };
  Object.keys(xn).forEach((e) => {
    Object.keys(xn[e]).forEach((t) => {
      Je.prototype[t] = xn[e][t];
    });
  });
  Je.use([ks, zs]);
  function Do(e, t, n, i) {
    return e.params.createElements && Object.keys(i).forEach((s) => {
      if (!n[s] && n.auto === true) {
        let o = rt(e.el, `.${i[s]}`)[0];
        o || (o = an("div", i[s]), o.className = i[s], e.el.append(o)), n[s] = o, t[s] = o;
      }
    }), n;
  }
  var Oi = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
  function jo({ swiper: e, extendParams: t, on: n, emit: i }) {
    t({ navigation: { nextEl: null, prevEl: null, addIcons: true, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), e.navigation = { nextEl: null, prevEl: null, arrowSvg: Oi };
    function s(a) {
      let u;
      return a && typeof a == "string" && e.isElement && (u = e.el.querySelector(a) || e.hostEl.querySelector(a), u) ? u : (a && (typeof a == "string" && (u = [...document.querySelectorAll(a)]), e.params.uniqueNavElements && typeof a == "string" && u && u.length > 1 && e.el.querySelectorAll(a).length === 1 ? u = e.el.querySelector(a) : u && u.length === 1 && (u = u[0])), a && !u ? a : u);
    }
    function o(a, u) {
      const d = e.params.navigation;
      a = lt(a), a.forEach((y) => {
        y && (y.classList[u ? "add" : "remove"](...d.disabledClass.split(" ")), y.tagName === "BUTTON" && (y.disabled = u), e.params.watchOverflow && e.enabled && y.classList[e.isLocked ? "add" : "remove"](d.lockClass));
      });
    }
    function r() {
      const { nextEl: a, prevEl: u } = e.navigation;
      if (e.params.loop) {
        o(u, false), o(a, false);
        return;
      }
      o(u, e.isBeginning && !e.params.rewind), o(a, e.isEnd && !e.params.rewind);
    }
    function c(a) {
      a.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i("navigationPrev"));
    }
    function l(a) {
      a.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i("navigationNext"));
    }
    function m() {
      const a = e.params.navigation;
      if (e.params.navigation = Do(e, e.originalParams.navigation, e.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !(a.nextEl || a.prevEl)) return;
      let u = s(a.nextEl), d = s(a.prevEl);
      Object.assign(e.navigation, { nextEl: u, prevEl: d }), u = lt(u), d = lt(d);
      const y = (v, w) => {
        if (v) {
          if (a.addIcons && v.matches(".swiper-button-next,.swiper-button-prev") && !v.querySelector("svg")) {
            const E = document.createElement("div");
            Cs(E, Oi), v.appendChild(E.querySelector("svg")), E.remove();
          }
          v.addEventListener("click", w === "next" ? l : c);
        }
        !e.enabled && v && v.classList.add(...a.lockClass.split(" "));
      };
      u.forEach((v) => y(v, "next")), d.forEach((v) => y(v, "prev"));
    }
    function f() {
      let { nextEl: a, prevEl: u } = e.navigation;
      a = lt(a), u = lt(u);
      const d = (y, v) => {
        y.removeEventListener("click", v === "next" ? l : c), y.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      a.forEach((y) => d(y, "next")), u.forEach((y) => d(y, "prev"));
    }
    n("init", () => {
      e.params.navigation.enabled === false ? h() : (m(), r());
    }), n("toEdge fromEdge lock unlock", () => {
      r();
    }), n("destroy", () => {
      f();
    }), n("enable disable", () => {
      let { nextEl: a, prevEl: u } = e.navigation;
      if (a = lt(a), u = lt(u), e.enabled) {
        r();
        return;
      }
      [...a, ...u].filter((d) => !!d).forEach((d) => d.classList.add(e.params.navigation.lockClass));
    }), n("click", (a, u) => {
      let { nextEl: d, prevEl: y } = e.navigation;
      d = lt(d), y = lt(y);
      const v = u.target;
      let w = y.includes(v) || d.includes(v);
      if (e.isElement && !w) {
        const E = u.path || u.composedPath && u.composedPath();
        E && (w = E.find((C) => d.includes(C) || y.includes(C)));
      }
      if (e.params.navigation.hideOnClick && !w) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === v || e.pagination.el.contains(v))) return;
        let E;
        d.length ? E = d[0].classList.contains(e.params.navigation.hiddenClass) : y.length && (E = y[0].classList.contains(e.params.navigation.hiddenClass)), i(E === true ? "navigationShow" : "navigationHide"), [...d, ...y].filter((C) => !!C).forEach((C) => C.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const p = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), m(), r();
    }, h = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
    };
    Object.assign(e.navigation, { enable: p, disable: h, update: r, init: m, destroy: f });
  }
  function Ho({ swiper: e, extendParams: t, on: n }) {
    t({ controller: { control: void 0, inverse: false, by: "slide" } }), e.controller = { control: void 0 };
    function i(l, m) {
      const f = /* @__PURE__ */ (function() {
        let u, d, y;
        return (v, w) => {
          for (d = -1, u = v.length; u - d > 1; ) y = u + d >> 1, v[y] <= w ? d = y : u = y;
          return u;
        };
      })();
      this.x = l, this.y = m, this.lastIndex = l.length - 1;
      let p, h;
      return this.interpolate = function(u) {
        return u ? (h = f(this.x, u), p = h - 1, (u - this.x[p]) * (this.y[h] - this.y[p]) / (this.x[h] - this.x[p]) + this.y[p]) : 0;
      }, this;
    }
    function s(l) {
      e.controller.spline = e.params.loop ? new i(e.slidesGrid, l.slidesGrid) : new i(e.snapGrid, l.snapGrid);
    }
    function o(l, m) {
      const f = e.controller.control;
      let p, h;
      const a = e.constructor;
      function u(d) {
        if (d.destroyed) return;
        const y = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" && (s(d), h = -e.controller.spline.interpolate(-y)), (!h || e.params.controller.by === "container") && (p = (d.maxTranslate() - d.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(p) || !Number.isFinite(p)) && (p = 1), h = (y - e.minTranslate()) * p + d.minTranslate()), e.params.controller.inverse && (h = d.maxTranslate() - h), d.updateProgress(h), d.setTranslate(h, e), d.updateActiveIndex(), d.updateSlidesClasses();
      }
      if (Array.isArray(f)) for (let d = 0; d < f.length; d += 1) f[d] !== m && f[d] instanceof a && u(f[d]);
      else f instanceof a && m !== f && u(f);
    }
    function r(l, m) {
      const f = e.constructor, p = e.controller.control;
      let h;
      function a(u) {
        u.destroyed || (u.setTransition(l, e), l !== 0 && (u.transitionStart(), u.params.autoHeight && Dn(() => {
          u.updateAutoHeight();
        }), Wi(u.wrapperEl, () => {
          p && u.transitionEnd();
        })));
      }
      if (Array.isArray(p)) for (h = 0; h < p.length; h += 1) p[h] !== m && p[h] instanceof f && a(p[h]);
      else p instanceof f && m !== p && a(p);
    }
    function c() {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }
    n("beforeInit", () => {
      if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
        (typeof e.params.controller.control == "string" ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach((m) => {
          if (e.controller.control || (e.controller.control = []), m && m.swiper) e.controller.control.push(m.swiper);
          else if (m) {
            const f = `${e.params.eventsPrefix}init`, p = (h) => {
              e.controller.control.push(h.detail[0]), e.update(), m.removeEventListener(f, p);
            };
            m.addEventListener(f, p);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }), n("update", () => {
      c();
    }), n("resize", () => {
      c();
    }), n("observerUpdate", () => {
      c();
    }), n("setTranslate", (l, m, f) => {
      !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(m, f);
    }), n("setTransition", (l, m, f) => {
      !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(m, f);
    }), Object.assign(e.controller, { setTranslate: o, setTransition: r });
  }
  function Go(e) {
    const { effect: t, swiper: n, on: i, setTranslate: s, setTransition: o, overwriteParams: r, perspective: c, recreateShadows: l, getEffectParams: m } = e;
    i("beforeInit", () => {
      if (n.params.effect !== t) return;
      n.classNames.push(`${n.params.containerModifierClass}${t}`), c && c() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const p = r ? r() : {};
      Object.assign(n.params, p), Object.assign(n.originalParams, p);
    }), i("setTranslate _virtualUpdated", () => {
      n.params.effect === t && s();
    }), i("setTransition", (p, h) => {
      n.params.effect === t && o(h);
    }), i("transitionEnd", () => {
      if (n.params.effect === t && l) {
        if (!m || !m().slideShadows) return;
        n.slides.forEach((p) => {
          p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((h) => h.remove());
        }), l();
      }
    });
    let f;
    i("virtualUpdate", () => {
      n.params.effect === t && (n.slides.length || (f = true), requestAnimationFrame(() => {
        f && n.slides && n.slides.length && (s(), f = false);
      }));
    });
  }
  function No(e, t) {
    const n = qi(t);
    return n !== t && (n.style.backfaceVisibility = "hidden", n.style["-webkit-backface-visibility"] = "hidden"), n;
  }
  function Bo({ swiper: e, duration: t, transformElements: n, allSlides: i }) {
    const { activeIndex: s } = e;
    if (e.params.virtualTranslate && t !== 0) {
      let o = false, r;
      r = n, r.forEach((c) => {
        Wi(c, () => {
          if (o || !e || e.destroyed) return;
          o = true, e.animating = false;
          const l = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true });
          e.wrapperEl.dispatchEvent(l);
        });
      });
    }
  }
  function qo({ swiper: e, extendParams: t, on: n }) {
    t({ fadeEffect: { crossFade: false } }), Go({ effect: "fade", swiper: e, on: n, setTranslate: () => {
      const { slides: o } = e, r = e.params.fadeEffect;
      for (let c = 0; c < o.length; c += 1) {
        const l = e.slides[c];
        let f = -l.swiperSlideOffset;
        e.params.virtualTranslate || (f -= e.translate);
        let p = 0;
        e.isHorizontal() || (p = f, f = 0);
        const h = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(l.progress), 0) : 1 + Math.min(Math.max(l.progress, -1), 0), a = No(r, l);
        a.style.opacity = h, a.style.transform = `translate3d(${f}px, ${p}px, 0px)`;
      }
    }, setTransition: (o) => {
      const r = e.slides.map((c) => qi(c));
      r.forEach((c) => {
        c.style.transitionDuration = `${o}ms`;
      }), Bo({ swiper: e, duration: o, transformElements: r, allSlides: true });
    }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !e.params.cssMode }) });
  }
  var Wo = "127.0.0.1";
  var Yo = "localhost";
  var Xo = "local".trim().toLowerCase();
  function Uo(e) {
    return String(e).trim().replace(/\/$/, "");
  }
  function Zo({ required: e = false } = {}) {
    const t = Uo("http://127.0.0.1:8055"), n = t;
    if (!n && e) throw new Error("PUBLIC_DIRECTUS_URL is required for this operation.");
    if (Ko() && (!t || Jo(n))) throw new Error("Production build requires PUBLIC_DIRECTUS_URL with a public Directus URL. Local Directus fallback is not allowed.");
    return n;
  }
  function Ko() {
    return Xo === "production";
  }
  function Jo(e) {
    try {
      const t = new URL(e);
      return t.hostname === Wo || t.hostname === Yo;
    } catch {
      return false;
    }
  }
  var Qo = Zo();
  var we = (e, t = document) => t.querySelector(e);
  var Me = (e, t = document) => Array.from(t.querySelectorAll(e));
  var Ji = /* @__PURE__ */ new Set();
  var It = /* @__PURE__ */ new WeakMap();
  function ot(e) {
    e && (e.hidden = false, e.style.display = "block");
  }
  function cn(e) {
    e && (e.style.display = "none");
  }
  function Kt(e) {
    e && (e.hidden = false, e.style.display = "block", window.requestAnimationFrame(() => {
      e.classList.add("is-visible");
    }));
  }
  function Ot(e) {
    e && (e.classList.remove("is-visible"), window.setTimeout(() => {
      e.classList.contains("is-visible") || (e.style.display = "none");
    }, 260));
  }
  function Qi(e) {
    if (!e) return;
    getComputedStyle(e).display === "none" ? ot(e) : cn(e);
  }
  function Jt(e, t = 0) {
    if (!e) return;
    const n = e.getBoundingClientRect().top + window.scrollY + t;
    window.scrollTo({ top: n, behavior: "smooth" });
  }
  function Mn(e) {
    return Me(e).find((t) => {
      const n = getComputedStyle(t);
      return n.display !== "none" && n.visibility !== "hidden" && t.getClientRects().length > 0;
    }) || we(e);
  }
  function jt(e) {
    if (!e) return;
    const t = It.get(e);
    t && (window.clearTimeout(t.timer), t.resolve(), It.delete(e)), e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition");
  }
  function es(e, t = 500) {
    if (!e) return Promise.resolve();
    if (jt(e), t <= 0) return ot(e), jt(e), Promise.resolve();
    e.hidden = false, e.style.removeProperty("display");
    const n = getComputedStyle(e).display === "none" ? "block" : getComputedStyle(e).display;
    return e.style.display = n, e.style.overflow = "hidden", e.style.height = "0px", e.offsetHeight, e.style.transition = `height ${t}ms ease`, e.style.height = `${e.scrollHeight}px`, new Promise((i) => {
      const s = window.setTimeout(() => {
        It.delete(e), e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition"), i();
      }, t);
      It.set(e, { timer: s, resolve: i });
    });
  }
  function ts(e, t = 500) {
    return e ? (jt(e), t <= 0 ? (cn(e), jt(e), Promise.resolve()) : (e.style.overflow = "hidden", e.style.height = `${e.scrollHeight}px`, e.offsetHeight, e.style.transition = `height ${t}ms ease`, e.style.height = "0px", new Promise((n) => {
      const i = window.setTimeout(() => {
        It.delete(e), e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition"), n();
      }, t);
      It.set(e, { timer: i, resolve: n });
    }))) : Promise.resolve();
  }
  function gt(e, t) {
    jt(e), t ? (ot(e), e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition")) : (e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition"));
  }
  function er() {
    we(".arr")?.addEventListener("click", (i) => {
      Qi(we(".header-panel")), i.currentTarget.classList.toggle("active"), we(".menu_links")?.classList.toggle("opacity"), we(".header_foot")?.classList.toggle("margin");
    });
    const e = we(".menu_call"), t = we(".mobile-menu-toggle", e), n = we(".mobile-menu-panel", e);
    if (t && n) {
      const i = () => {
        t.setAttribute("aria-expanded", "false"), n.hidden = true, n.classList.remove("is-open");
      }, s = () => {
        t.setAttribute("aria-expanded", "true"), n.hidden = false, n.classList.add("is-open");
      };
      t.dataset.bound !== "true" && (t.dataset.bound = "true", t.addEventListener("click", () => {
        t.getAttribute("aria-expanded") === "true" ? i() : s();
      }), document.addEventListener("click", (o) => {
        e.contains(o.target) || i();
      }), Me(".mobile-menu-list a", n).forEach((o) => {
        o.addEventListener("click", () => {
          i();
        });
      }));
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      const i = we(".workhours"), s = we(".leave_request.callback");
      e && i && e.prepend(i), e && s && e.append(s);
      const o = we(".image_adv");
      o && o.setAttribute("src", "/assets/templates/images/book_mob.png"), Me(".lic, .partners, .projects").forEach((r) => {
        if (we(".handler", r)) return;
        const c = document.createElement("img");
        c.src = "/assets/templates/images/handler.png", c.alt = "", c.className = "handler", r.prepend(c);
      });
    }
  }
  function tr() {
    const e = we(".numbers"), t = Me(".numbers .num");
    if (!e || !t.length) return;
    let n = false;
    const i = () => {
      n || (n = true, t.forEach((o) => {
        if (o.dataset.countupStarted === "true") return;
        const r = o.dataset.countupTarget || o.textContent || "0", c = Number.parseFloat(r.replace(/\s/g, "").replace(",", "."));
        if (!Number.isFinite(c)) return;
        o.dataset.countupStarted = "true", o.dataset.countupTarget = String(c);
        const l = new is(o, c, { startVal: 0, duration: 2, separator: " " });
        l.error ? o.textContent = r : l.start(), o.classList.add("active");
      }));
    };
    if (!("IntersectionObserver" in window)) {
      i();
      return;
    }
    const s = new IntersectionObserver((o) => {
      o.some((r) => r.isIntersecting) && (i(), s.disconnect());
    }, { threshold: 0.2 });
    s.observe(e);
  }
  function nr() {
    we(".svernyt")?.addEventListener("click", (e) => {
      e.preventDefault();
      const t = we(".list"), n = e.currentTarget, i = t && getComputedStyle(t).display === "none";
      n.textContent = i ? "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C" : "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C", Qi(t), Jt(t, -150), we(".clothes")?.classList.toggle("slide");
    }), Me(".callback").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(), Kt(we(".black_theme"));
      });
    }), Me(".order_pr").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(), Kt(we(".black_theme2"));
      });
    }), Me(".black_theme .fa-times, .black_theme2 .fa-times, .hide-window__hide-window-wrapper.hide-window-wrapper .fa-times").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(), Ot(we(".black_theme")), Ot(we(".black_theme2")), Ot(e.closest(".hide-window")), we(".black_theme2 iframe")?.removeAttribute("src");
      });
    }), Me(".video").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(), Kt(we(".black_theme2")), we(".black_theme2 iframe")?.setAttribute("src", "https://www.youtube.com/embed/Gz175rX3T1g");
      });
    });
  }
  function ir() {
    if (Me("[data-scroll]").forEach((e) => {
      e.addEventListener("click", (t) => {
        const n = Mn(`.${CSS.escape(e.dataset.scroll)}`);
        n && (t.preventDefault(), Jt(n, -window.innerHeight / 3 + n.offsetHeight / 3));
      });
    }), Me("[data-main-scroll]").forEach((e) => {
      e.addEventListener("click", (t) => {
        if (t.preventDefault(), new URL(e.href).pathname !== window.location.pathname) {
          window.location.href = e.href;
          return;
        }
        const n = Mn(`.${CSS.escape(e.dataset.mainScroll)}`);
        n && Jt(n, -window.innerHeight / 3 + n.offsetHeight / 3);
      });
    }), window.location.hash) {
      const e = Mn(`.${CSS.escape(window.location.hash.slice(1))}`);
      e && window.setTimeout(() => {
        Jt(e, -window.innerHeight / 3 + e.offsetHeight / 3);
      }, 0);
    }
  }
  function Qt(e, t = {}) {
    if (!e || e.siteSwiper) return e?.siteSwiper;
    const n = Me(":scope > *", e);
    if (!n.length) return null;
    const { on: i = {}, ...s } = t;
    e.classList.add("site-slider-ready");
    const o = document.createElement("div");
    o.className = "swiper site-slider-viewport";
    const r = document.createElement("div");
    r.className = "swiper-wrapper", n.forEach((f) => {
      f.classList.add("swiper-slide"), r.append(f);
    }), o.append(r);
    const c = document.createElement("button");
    c.type = "button", c.className = "site-slider-prev site-slider-arrow", c.setAttribute("aria-label", "Previous"), c.textContent = "Previous";
    const l = document.createElement("button");
    l.type = "button", l.className = "site-slider-next site-slider-arrow", l.setAttribute("aria-label", "Next"), l.textContent = "Next", e.append(o, c, l);
    const m = new Je(o, { modules: [Ho, qo, jo], navigation: { prevEl: c, nextEl: l, disabledClass: "site-slider-disabled", hiddenClass: "site-slider-hidden", lockClass: "site-slider-lock" }, on: { init(f) {
      Rt(f), i.init?.(f);
    }, slideChange(f) {
      Rt(f), i.slideChange?.(f);
    }, resize(f) {
      Rt(f), i.resize?.(f);
    }, ...Object.fromEntries(Object.entries(i).filter(([f]) => !["init", "slideChange", "resize"].includes(f))) }, ...s });
    return e.siteSwiper = m, Ji.add(m), m;
  }
  function Rt(e) {
    e.slides.forEach((n) => {
      n.classList.remove("site-slide-active", "site-slide-current", "site-slide-center");
    });
    const t = e.params.loop ? e.realIndex : e.activeIndex;
    e.slides[e.activeIndex]?.classList.add("site-slide-active", "site-slide-current", "site-slide-center"), e.slides.forEach((n) => {
      Number(n.dataset.swiperSlideIndex) === t && n.classList.add("site-slide-active", "site-slide-current", "site-slide-center");
    });
  }
  function sr() {
    Me(".responsive").forEach((e) => {
      Qt(e, { speed: 300, slidesPerView: 4, slidesPerGroup: 4, breakpoints: { 0: { slidesPerView: 1, slidesPerGroup: 1 }, 480: { slidesPerView: 2, slidesPerGroup: 2 }, 600: { slidesPerView: 3, slidesPerGroup: 3 }, 1024: { slidesPerView: 3, slidesPerGroup: 3 }, 1290: { slidesPerView: 2, slidesPerGroup: 2 }, 1450: { slidesPerView: 3, slidesPerGroup: 3 }, 1600: { slidesPerView: 4, slidesPerGroup: 4 } } });
    }), Me(".lic-slider").forEach((e) => {
      Qt(e, { speed: 500, loop: true, centeredSlides: true, slidesPerView: 3, breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 3 } } });
    }), or(), Me(".lenta .container .tab_container .tab_content > div").forEach((e) => {
      Qt(e, { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 24, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } });
    });
  }
  function or() {
    const e = Qt(we(".slider-for"), { slidesPerView: 1, effect: "fade", fadeEffect: { crossFade: true }, on: { init(t) {
      Rt(t), Ln(t.realIndex ?? t.activeIndex), Ii(Ai(t), false);
    }, slideChange(t) {
      Rt(t), Ln(t.realIndex ?? t.activeIndex), Ii(Ai(t), false);
    } } });
    Ln(e?.activeIndex ?? 0);
  }
  function Ai(e) {
    return e?.slides?.[e.activeIndex] || null;
  }
  function Ln(e) {
    const t = Me(".slider-nav .idx");
    t.length && t.forEach((n, i) => {
      n.style.display = i === e ? "inline-block" : "none";
    });
  }
  function Ii(e = document, t = false) {
    Me(".tabs2", e).forEach((n) => {
      const i = Me("li", n), s = we(".project_description", n), o = we(".project_decision", n);
      if (!i.length || !s || !o) return;
      const r = s.parentElement || s, c = o.parentElement || o;
      n.dataset.animating = "false", i.forEach((l, m) => l.classList.toggle("active", m === 0)), t ? Promise.all([es(r, 500), ts(c, 500)]).finally(() => {
        gt(r, true), gt(c, false);
      }) : (gt(r, true), gt(c, false)), ot(s), ot(o);
    });
  }
  function rr() {
    const e = Me("ul.tabs li"), t = Me(".tab_content");
    e.length && t.length && (t.forEach((n, i) => {
      n.style.display = i === 0 ? "block" : "none";
    }), e.forEach((n, i) => {
      n.classList.toggle("active", i === 0), n.addEventListener("click", (s) => {
        s.preventDefault(), e.forEach((c) => c.classList.remove("active")), t.forEach((c) => cn(c)), n.classList.add("active");
        const o = we("a", n)?.getAttribute("href"), r = o ? we(o) : t[i];
        ot(r), ar(r);
      });
    })), Me(".tabs2").forEach((n) => {
      const i = Me("li", n), s = we(".project_description", n), o = we(".project_decision", n);
      if (!i.length || !s || !o) return;
      const r = s.parentElement || s, c = o.parentElement || o;
      let l = false;
      const m = async (f, p = true) => {
        if (l || n.dataset.animating === "true") return;
        i.forEach((u, d) => u.classList.toggle("active", d === f));
        const h = f === 0 ? r : c, a = f === 0 ? c : r;
        if (!p) {
          n.dataset.animating = "false", gt(a, false), gt(h, true), ot(s), ot(o);
          return;
        }
        l = true, n.dataset.animating = "true";
        try {
          await Promise.all([ts(a, 500), es(h, 500)]);
        } finally {
          gt(a, false), gt(h, true), l = false, n.dataset.animating = "false";
        }
        ot(s), ot(o);
      };
      i.forEach((f, p) => {
        f.addEventListener("click", (h) => {
          h.preventDefault(), !f.classList.contains("active") && m(p);
        });
      }), m(0, false);
    });
  }
  function ar(e) {
    e && Ji.forEach((t) => {
      !t.destroyed && e.contains(t.el) && t.update();
    });
  }
  async function lr(e) {}
  function cr(e, t) {
    let n = we(".form__error", e);
    n || (n = document.createElement("div"), n.className = "form__error", n.style.color = "#b00020", n.style.marginTop = "12px", n.style.fontSize = "14px", e.append(n)), n.textContent = t;
  }
  function ki(e) {
    we(".form__error", e)?.remove();
  }
  function dr() {
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    Me('input[type="date"]').forEach((t) => t.setAttribute("min", e)), Me(".form .form__form-block input, .form .form__form-block select, .form .form__form-block textarea").forEach((t) => {
      const i = t.closest(".form__form-block")?.querySelector("label");
      t.addEventListener("focus", () => {
        i?.classList.contains("error") && (i.textContent = i.dataset.success || i.textContent, i.classList.remove("error")), i?.classList.add("active");
      }), t.addEventListener("blur", () => {
        t.value || i?.classList.remove("active");
      });
    }), Me(".form .form__form-block .form-block__number-field").forEach((t) => {
      t.addEventListener("change", () => {
        let n = t.value.replace(/[^0-9]/g, "");
        n.length === 10 && (n = `7${n}`), n.charAt(0) === "8" && (n = `7${n.slice(1)}`), t.value = n;
      });
    }), Me(".form__form-select input").forEach((t) => {
      t.addEventListener("change", () => {
        t.checked && t.parentElement?.classList.remove("active");
      });
    }), Me("form").forEach((t) => {
      t.addEventListener("submit", async (n) => {
        n.preventDefault(), ki(t);
        let i = true;
        if (Me(".form-block__obligatory-field", t).forEach((s) => {
          const o = s.closest(".form__form-block")?.querySelector("label"), r = s.value.trim();
          let c = true;
          r || (c = false), s.classList.contains("form-block__phone-field") && (r.length < 6 || r.length > 11) && (c = false), s.classList.contains("form-block__phone-field-11") && r.length !== 11 && (c = false), !c && o && (o.textContent = o.dataset.error || o.textContent, o.classList.add("error")), c || (i = false);
        }), Me(".form__form-select input", t).forEach((s) => {
          s.checked || (i = false, s.parentElement?.classList.add("active"));
        }), !!i) try {
          await lr(t), t.reset(), ki(t), Me("label", t).forEach((s) => s.classList.remove("error", "active")), cn(we(".application-form-wrapper")), Ot(we(".black_theme")), Ot(we(".black_theme2")), Kt(we(".thanks")), window.setTimeout(() => Ot(we(".thanks")), 3e3);
        } catch {
          cr(t, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435 \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C.");
        }
      });
    });
  }
  function ur() {
    Me(".fancybox").forEach((e) => {
      const t = e.getAttribute("rel");
      t && !e.dataset.fancybox && (e.dataset.fancybox = t);
    }), ze.bind(".fancybox", {});
  }
  function fr() {
    if (!window.google?.maps || !document.getElementById("map")) return;
    const e = new google.maps.StyledMapType([{ stylers: [{ saturation: -100 }, { gamma: 1 }] }, { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] }, { featureType: "poi.business", elementType: "labels.text", stylers: [{ visibility: "off" }] }, { featureType: "poi.business", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "poi.place_of_worship", elementType: "labels.text", stylers: [{ visibility: "off" }] }, { featureType: "poi.place_of_worship", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "geometry", stylers: [{ visibility: "simplified" }] }, { featureType: "water", stylers: [{ visibility: "on" }, { saturation: 50 }, { gamma: 0 }, { hue: "#50a5d1" }] }, { featureType: "administrative.neighborhood", elementType: "labels.text.fill", stylers: [{ color: "#333333" }] }, { featureType: "road.local", elementType: "labels.text", stylers: [{ weight: 0.5 }, { color: "#333333" }] }, { featureType: "transit.station", elementType: "labels.icon", stylers: [{ gamma: 1 }, { saturation: 50 }] }], { name: "\u0417\u0430\u043F\u0432\u043E\u0434\u041F\u0440\u043E\u0435\u043A\u0442" }), t = "custom_style", n = new google.maps.Map(document.getElementById("map"), { zoom: 18, mapTypeControl: false, streetViewControl: false, center: { lat: 54.721589, lng: 20.4521411 }, mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, t] } }), i = new google.maps.InfoWindow(), s = new google.maps.Marker({ position: new google.maps.LatLng(54.721589, 20.4521411), map: n, icon: "/assets/templates/images/map.png", optimized: false });
    google.maps.event.addListener(s, "click", () => {
      i.setContent("<strong>\u0417\u0430\u043F\u0432\u043E\u0434\u041F\u0440\u043E\u0435\u043A\u0442</strong><br>\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434<br>\u0443\u043B. \u043F\u0440. \u041C\u0438\u0440\u0430, 136"), i.open(n, s);
    }), n.mapTypes.set(t, e), n.setMapTypeId(t);
  }
  window.initMap = fr;
  function zi() {
    er(), tr(), nr(), ir(), ur(), sr(), rr(), dr();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", zi, { once: true }) : zi();
})();
/*! License details at fancyapps.com/license */
