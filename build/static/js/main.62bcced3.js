/*! For license information please see main.62bcced3.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730(e, t, n) {
        var r = n(43),
          a = n(853);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          (u(e, t), u(e + "Capture", t));
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, a, i, o) {
          ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o));
        }
        var g = {};
        ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          }));
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          }));
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          A = Symbol.for("react.provider"),
          x = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          I = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
        var O = Symbol.for("react.offscreen");
        (Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker"));
        var L = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
              ? e
              : null;
        }
        var D,
          M = Object.assign;
        function U(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function z(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];
              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var l = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            ((F = !1), (Error.prepareStackTrace = n));
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case _:
              return "StrictMode";
            case I:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case x:
                return (e.displayName || "Context") + ".Consumer";
              case A:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case N:
                ((t = e._payload), (e = e._init));
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function J(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = J(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((r = "" + e), i.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e));
        }
        function W(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = J(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function $(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          ((n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            }));
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          (t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked));
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            ((t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ("" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n));
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              ((a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0),
                  void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            (null == t && (t = ""), (n = t));
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          (null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r));
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;
                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (he.hasOwnProperty(e) && he[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              ("float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a));
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]));
          });
        });
        var ye = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ee = null,
          _e = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ae(e) {
          Ee ? (_e ? _e.push(e) : (_e = [e])) : (Ee = e);
        }
        function xe() {
          if (Ee) {
            var e = Ee,
              t = _e;
            if (((_e = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Ie() {}
        var Te = !1;
        function Pe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Re(e, t, n);
          } finally {
            ((Te = !1), (null !== Ee || null !== _e) && (Ie(), xe()));
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var Le = {};
            (Object.defineProperty(Le, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le));
          } catch (ce) {
            Oe = !1;
          }
        function je(e, t, n, r, a, i, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Me = null,
          Ue = !1,
          Fe = null,
          ze = {
            onError: function (e) {
              ((De = !0), (Me = e));
            },
          };
        function Be(e, t, n, r, a, i, o, s, l) {
          ((De = !1), (Me = null), je.apply(ze, arguments));
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (qe(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return (He(a), e);
                    if (o === r) return (He(a), t);
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) ((n = a), (r = o));
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      ((s = !0), (n = a), (r = o));
                      break;
                    }
                    if (l === r) {
                      ((s = !0), (r = a), (n = o));
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        ((s = !0), (n = o), (r = a));
                        break;
                      }
                      if (l === r) {
                        ((s = !0), (r = o), (n = a));
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var We = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          $e = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ge = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (
                  (e >>>= 0),
                  0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0
                );
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              ((a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a));
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = ut;
          return (0 === (4194240 & (ut <<= 1)) && (ut = 64), e);
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          ((e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n));
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          Et,
          _t,
          Ct,
          At = !1,
          xt = [],
          Rt = null,
          It = null,
          Tt = null,
          Pt = new Map(),
          Nt = new Map(),
          Ot = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              It = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return (null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((we = r), n.target.dispatchEvent(r), (we = null), t.shift());
          }
          return !0;
        }
        function Ft(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function zt() {
          ((At = !1),
            null !== Rt && Ut(Rt) && (Rt = null),
            null !== It && Ut(It) && (It = null),
            null !== Tt && Ut(Tt) && (Tt = null),
            Pt.forEach(Ft),
            Nt.forEach(Ft));
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            At ||
              ((At = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function qt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < xt.length) {
            Bt(xt[0], e);
            for (var n = 1; n < xt.length; n++) {
              var r = xt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Bt(Rt, e),
              null !== It && Bt(It, e),
              null !== Tt && Bt(Tt, e),
              Pt.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            (Mt(n), null === n.blockedOn && Ot.shift());
        }
        var Vt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Jt(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            ((bt = 1), Wt(e, t, n, r));
          } finally {
            ((bt = a), (Vt.transition = i));
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            ((bt = 4), Wt(e, t, n, r));
          } finally {
            ((bt = a), (Vt.transition = i));
          }
        }
        function Wt(e, t, n, r) {
          if (Ht) {
            var a = $t(e, t, n, r);
            if (null === a) (Hr(e, t, r, Kt, n), jt(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((Rt = Dt(Rt, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((It = Dt(It, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((Tt = Dt(Tt, e, t, n, r, a)), !0);
                  case "pointerover":
                    var i = a.pointerId;
                    return (
                      Pt.set(i, Dt(Pt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Nt.set(i, Dt(Nt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && St(i),
                  null === (i = $t(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function $t(e, t, n, r) {
          if (((Kt = null), null !== (e = va((e = Se(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return ((Kt = e), null);
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = M({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          hn = M({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(hn),
          mn = an(M({}, hn, { dataTransfer: 0 })),
          gn = an(M({}, dn, { relatedTarget: 0 })),
          yn = an(
            M({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          vn = M({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(M({}, un, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return _n;
        }
        var An = M({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          xn = an(An),
          Rn = an(
            M({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          In = an(
            M({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          Tn = an(
            M({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Pn = M({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(Pn),
          On = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var Dn = c && "TextEvent" in window && !jn,
          Mn = c && (!Ln || (jn && 8 < jn && 11 >= jn)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Jn(e, t, n, r) {
          (Ae(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t })));
        }
        var Qn = null,
          Wn = null;
        function Kn(e) {
          Ur(e, 0);
        }
        function $n(e) {
          if (W(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Gn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              (er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput));
            }
            Gn = Zn;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Wn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && $n(Wn)) {
            var t = [];
            (Jn(t, Wn, e, Se(e)), Pe(Kn, t));
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Wn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return $n(Wn);
        }
        function ir(e, t) {
          if ("click" === e) return $n(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return $n(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                ((n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length)));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i)));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              (((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top));
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Er = {},
          _r = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Ar = Cr("animationend"),
          xr = Cr("animationiteration"),
          Rr = Cr("animationstart"),
          Ir = Cr("transitionend"),
          Tr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Nr(e, t) {
          (Tr.set(e, t), l(t, [e]));
        }
        for (var Or = 0; Or < Pr.length; Or++) {
          var Lr = Pr[Or];
          Nr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        (Nr(Ar, "onAnimationEnd"),
          Nr(xr, "onAnimationIteration"),
          Nr(Rr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Ir, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr),
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          ((e.currentTarget = n),
            (function (e, t, n, r, a, o, s, l, u) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(i(198));
                var c = Me;
                ((De = !1), (Me = null), Ue || ((Ue = !0), (Fe = c)));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null));
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  (Mr(a, s, u), (i = l));
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  (Mr(a, s, u), (i = l));
                }
            }
          }
          if (Ue) throw ((e = Fe), (Ue = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          (t && (r |= 4), Vr(n, e, r, t));
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Br]) {
            ((e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || zr(t, !1, e), zr(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), zr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Jt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Wt;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = va(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              a = Se(n),
              o = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = xn;
                    break;
                  case "focusin":
                    ((u = "focus"), (l = gn));
                    break;
                  case "focusout":
                    ((u = "blur"), (l = gn));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = In;
                    break;
                  case Ar:
                  case xr:
                  case Rr:
                    l = yn;
                    break;
                  case Ir:
                    l = Tn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Rn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = Ne(p, f)) &&
                        c.push(Jr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[pa])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                        ? s.defaultView || s.parentWindow
                        : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : wa(l)),
                  (h = null == u ? s : wa(u)),
                  ((s = new c(m, p + "leave", l, n, a)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, p + "enter", u, n, a)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = Wr(h)) p++;
                    for (h = 0, m = f; m; m = Wr(m)) h++;
                    for (; 0 < p - h; ) ((c = Wr(c)), p--);
                    for (; 0 < h - p; ) ((f = Wr(f)), h--);
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      ((c = Wr(c)), (f = Wr(f)));
                    }
                    c = null;
                  }
                else c = null;
                (null !== l && Kr(o, s, l, c, !1),
                  null !== u && null !== d && Kr(o, d, u, c, !0));
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Yn;
              else if (Hn(s))
                if (Xn) g = or;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Jn(o, g, n, a)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((br = !1), wr(o, n, a));
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var v;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              (b &&
                (Mn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = en())
                    : ((Gt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (qn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Bn(n)) && (b.data = v))),
                (v = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Ln && zn(e, t))
                          ? ((e = en()), (Zt = Gt = Xt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = v)));
            }
            Ur(o, t);
          });
        }
        function Jr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            (5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Ne(e, n)) && r.unshift(Jr(e, i, a)),
              null != (i = Ne(e, t)) && r.push(Jr(e, i, a))),
              (e = e.return));
          }
          return r;
        }
        function Wr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            (5 === s.tag &&
              null !== u &&
              ((s = u),
              a
                ? null != (l = Ne(n, i)) && o.unshift(Jr(n, l, s))
                : a || (null != (l = Ne(n, i)) && o.push(Jr(n, l, s)))),
              (n = n.return));
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var $r = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace($r, "\n")
            .replace(Yr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
                ? function (e) {
                    return ia.resolve(null).then(e).catch(sa);
                  }
                : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void qt(t));
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          qt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          ha = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ya = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Sa(e) {
          return e[ha] || null;
        }
        var ka = [],
          Ea = -1;
        function _a(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = ka[Ea]), (ka[Ea] = null), Ea--);
        }
        function Aa(e, t) {
          (Ea++, (ka[Ea] = e.current), (e.current = t));
        }
        var xa = {},
          Ra = _a(xa),
          Ia = _a(!1),
          Ta = xa;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return xa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Na(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          (Ca(Ia), Ca(Ra));
        }
        function La(e, t, n) {
          if (Ra.current !== xa) throw Error(i(168));
          (Aa(Ra, t), Aa(Ia, n));
        }
        function ja(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, V(e) || "Unknown", a));
          return M({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              xa),
            (Ta = Ra.current),
            Aa(Ra, e),
            Aa(Ia, Ia.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          (n
            ? ((e = ja(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ia),
              Ca(Ra),
              Aa(Ra, e))
            : Ca(Ia),
            Aa(Ia, n));
        }
        var Ua = null,
          Fa = !1,
          za = !1;
        function Ba(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function qa() {
          if (!za && null !== Ua) {
            za = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ua;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              ((Ua = null), (Fa = !1));
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), We(Ze, qa), a);
            } finally {
              ((bt = t), (za = !1));
            }
          }
          return null;
        }
        var Va = [],
          Ha = 0,
          Ja = null,
          Qa = 0,
          Wa = [],
          Ka = 0,
          $a = null,
          Ya = 1,
          Xa = "";
        function Ga(e, t) {
          ((Va[Ha++] = Qa), (Va[Ha++] = Ja), (Ja = e), (Qa = t));
        }
        function Za(e, t, n) {
          ((Wa[Ka++] = Ya), (Wa[Ka++] = Xa), (Wa[Ka++] = $a), ($a = e));
          var r = Ya;
          e = Xa;
          var a = 32 - ot(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            ((i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ya = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Xa = i + e));
          } else ((Ya = (1 << i) | (n << a) | r), (Xa = e));
        }
        function ei(e) {
          null !== e.return && (Ga(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Ja; )
            ((Ja = Va[--Ha]),
              (Va[Ha] = null),
              (Qa = Va[--Ha]),
              (Va[Ha] = null));
          for (; e === $a; )
            (($a = Wa[--Ka]),
              (Wa[Ka] = null),
              (Xa = Wa[--Ka]),
              (Wa[Ka] = null),
              (Ya = Wa[--Ka]),
              (Wa[Ka] = null));
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Tu(5, null, null, 0);
          ((n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n));
        }
        function si(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== $a ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return (ci(e), (ai = !0), !1);
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (fi(), Error(i(418)));
            for (; t; ) (oi(e, t), (t = ua(t.nextSibling)));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function hi() {
          ((ri = ni = null), (ai = !1));
        }
        function pi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = w.ReactCurrentBatchConfig;
        function gi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function yi(e, t) {
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function vi(e) {
          return (0, e._init)(e._payload);
        }
        function bi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              (null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling));
            return e;
          }
          function a(e, t) {
            return (((e = Nu(e, t)).index = 0), (e.sibling = null), e);
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return (e && null === t.alternate && (t.flags |= 2), t);
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === i ||
                    ("object" === typeof i &&
                      null !== i &&
                      i.$$typeof === N &&
                      vi(i) === t.type))
                ? (((r = a(t, n.props)).ref = gi(e, t, n)), (r.return = e), r)
                : (((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = gi(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return (((t = Du("" + t, e.mode, n)).return = e), t);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = gi(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return (((t = Mu(t, e.mode, n)).return = e), t);
                case N:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return (((t = Lu(t, e.mode, n, null)).return = e), t);
              yi(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case N:
                  return h(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
              yi(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case N:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || j(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              yi(t, r);
            }
            return null;
          }
          function m(a, i, s, l) {
            for (
              var u = null, c = null, d = i, m = (i = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = h(a, d, s[m], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              (e && d && null === y.alternate && t(a, d),
                (i = o(y, i, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g));
            }
            if (m === s.length) return (n(a, d), ai && Ga(a, m), u);
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(a, s[m], l)) &&
                  ((i = o(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return (ai && Ga(a, m), u);
            }
            for (d = r(a, d); m < s.length; m++)
              null !== (g = p(d, a, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (i = o(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ga(a, m),
              u
            );
          }
          function g(a, s, l, u) {
            var c = j(l);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var d = (c = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = h(a, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              (e && m && null === b.alternate && t(a, m),
                (s = o(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y));
            }
            if (v.done) return (n(a, m), ai && Ga(a, g), c);
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = f(a, v.value, u)) &&
                  ((s = o(v, s, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return (ai && Ga(a, g), c);
            }
            for (m = r(a, m); !v.done; g++, v = l.next())
              null !== (v = p(m, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = o(v, s, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ga(a, g),
              c
            );
          }
          return function e(r, i, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === E &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case S:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === E) {
                          if (7 === c.tag) {
                            (n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i));
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === N &&
                            vi(u) === c.type)
                        ) {
                          (n(r, c.sibling),
                            ((i = a(c, o.props)).ref = gi(r, c, o)),
                            (i.return = r),
                            (r = i));
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      (t(r, c), (c = c.sibling));
                    }
                    o.type === E
                      ? (((i = Lu(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = i))
                      : (((l = Ou(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l,
                        )).ref = gi(r, i, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          (n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i));
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      (t(r, i), (i = i.sibling));
                    }
                    (((i = Mu(o, r.mode, l)).return = r), (r = i));
                  }
                  return s(r);
                case N:
                  return e(r, i, (c = o._init)(o._payload), l);
              }
              if (te(o)) return m(r, i, o, l);
              if (j(o)) return g(r, i, o, l);
              yi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Du(o, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var wi = bi(!0),
          Si = bi(!1),
          ki = _a(null),
          Ei = null,
          _i = null,
          Ci = null;
        function Ai() {
          Ci = _i = Ei = null;
        }
        function xi(e) {
          var t = ki.current;
          (Ca(ki), (e._currentValue = t));
        }
        function Ri(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ii(e, t) {
          ((Ei = e),
            (Ci = _i = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null)));
        }
        function Ti(e) {
          var t = e._currentValue;
          if (Ci !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === _i)
            ) {
              if (null === Ei) throw Error(i(308));
              ((_i = e), (Ei.dependencies = { lanes: 0, firstContext: e }));
            } else _i = _i.next = e;
          return t;
        }
        var Pi = null;
        function Ni(e) {
          null === Pi ? (Pi = [e]) : Pi.push(e);
        }
        function Oi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ni(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Li(e, r)
          );
        }
        function Li(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            ((e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return));
          return 3 === n.tag ? n.stateNode : null;
        }
        var ji = !1;
        function Di(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mi(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              }));
        }
        function Ui(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & xl))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Li(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ni(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Li(e, n)
          );
        }
        function zi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
          }
        }
        function Bi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                (null === i ? (a = i = o) : (i = i.next = o), (n = n.next));
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        function qi(e, t, n, r) {
          var a = e.updateQueue;
          ji = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            ((l.next = null), null === o ? (i = u) : (o.next = u), (o = l));
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var f = s.lane,
                h = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = s;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(h, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      ji = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [s]) : f.push(s));
              } else
                ((h = {
                  eventTime: h,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (o |= f));
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                ((s = (f = s).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null));
              }
            }
            if (
              (null === c && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                ((o |= a.lane), (a = a.next));
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            ((jl |= o), (e.lanes = o), (e.memoizedState = d));
          }
        }
        function Vi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Hi = {},
          Ji = _a(Hi),
          Qi = _a(Hi),
          Wi = _a(Hi);
        function Ki(e) {
          if (e === Hi) throw Error(i(174));
          return e;
        }
        function $i(e, t) {
          switch ((Aa(Wi, t), Aa(Qi, e), Aa(Ji, Hi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          (Ca(Ji), Aa(Ji, t));
        }
        function Yi() {
          (Ca(Ji), Ca(Qi), Ca(Wi));
        }
        function Xi(e) {
          Ki(Wi.current);
          var t = Ki(Ji.current),
            n = le(t, e.type);
          t !== n && (Aa(Qi, e), Aa(Ji, n));
        }
        function Gi(e) {
          Qi.current === e && (Ca(Ji), Ca(Qi));
        }
        var Zi = _a(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = w.ReactCurrentDispatcher,
          ao = w.ReactCurrentBatchConfig,
          io = 0,
          oo = null,
          so = null,
          lo = null,
          uo = !1,
          co = !1,
          fo = 0,
          ho = 0;
        function po() {
          throw Error(i(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function go(e, t, n, r, a, o) {
          if (
            ((io = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : es),
            (e = n(r, a)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(i(301));
              ((o += 1),
                (lo = so = null),
                (t.updateQueue = null),
                (ro.current = ts),
                (e = n(r, a)));
            } while (co);
          }
          if (
            ((ro.current = Go),
            (t = null !== so && null !== so.next),
            (io = 0),
            (lo = so = oo = null),
            (uo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function yo() {
          var e = 0 !== fo;
          return ((fo = 0), e);
        }
        function vo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e),
            lo
          );
        }
        function bo() {
          if (null === so) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === lo ? oo.memoizedState : lo.next;
          if (null !== t) ((lo = t), (so = e));
          else {
            if (null === e) throw Error(i(310));
            ((e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e));
          }
          return lo;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function So(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = so,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              ((a.next = o.next), (o.next = s));
            }
            ((r.baseQueue = a = o), (n.pending = null));
          }
          if (null !== a) {
            ((o = a.next), (r = r.baseState));
            var l = (s = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((io & d) === d)
                (null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                (null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (oo.lanes |= d),
                  (jl |= d));
              }
              c = c.next;
            } while (null !== c && c !== o);
            (null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r));
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              ((o = a.lane), (oo.lanes |= o), (jl |= o), (a = a.next));
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ko(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              ((o = e(o, s.action)), (s = s.next));
            } while (s !== a);
            (sr(o, t.memoizedState) || (bs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o));
          }
          return [o, r];
        }
        function Eo() {}
        function _o(e, t) {
          var n = oo,
            r = bo(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bs = !0)),
            (r = r.queue),
            Do(xo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== lo && 1 & lo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Po(9, Ao.bind(null, n, r, a, t), void 0, null),
              null === Rl)
            )
              throw Error(i(349));
            0 !== (30 & io) || Co(n, t, a);
          }
          return a;
        }
        function Co(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function Ao(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), Ro(t) && Io(e));
        }
        function xo(e, t, n) {
          return n(function () {
            Ro(t) && Io(e);
          });
        }
        function Ro(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Io(e) {
          var t = Li(e, 1);
          null !== t && tu(t, e, 1, -1);
        }
        function To(e) {
          var t = vo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ko.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function Po(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function No() {
          return bo().memoizedState;
        }
        function Oo(e, t, n, r) {
          var a = vo();
          ((oo.flags |= e),
            (a.memoizedState = Po(1 | t, n, void 0, void 0 === r ? null : r)));
        }
        function Lo(e, t, n, r) {
          var a = bo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((i = o.destroy), null !== r && mo(r, o.deps)))
              return void (a.memoizedState = Po(t, n, i, r));
          }
          ((oo.flags |= e), (a.memoizedState = Po(1 | t, n, i, r)));
        }
        function jo(e, t) {
          return Oo(8390656, 8, e, t);
        }
        function Do(e, t) {
          return Lo(2048, 8, e, t);
        }
        function Mo(e, t) {
          return Lo(4, 2, e, t);
        }
        function Uo(e, t) {
          return Lo(4, 4, e, t);
        }
        function Fo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function zo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Lo(4, 4, Fo.bind(null, t, e), n)
          );
        }
        function Bo() {}
        function qo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ho(e, t, n) {
          return 0 === (21 & io)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (oo.lanes |= n), (jl |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          ((bt = 0 !== n && 4 > n ? n : 4), e(!0));
          var r = ao.transition;
          ao.transition = {};
          try {
            (e(!1), t());
          } finally {
            ((bt = n), (ao.transition = r));
          }
        }
        function Qo() {
          return bo().memoizedState;
        }
        function Wo(e, t, n) {
          var r = eu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            $o(e))
          )
            Yo(t, n);
          else if (null !== (n = Oi(e, t, n, r))) {
            (tu(n, e, r, Zl()), Xo(n, t, r));
          }
        }
        function Ko(e, t, n) {
          var r = eu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if ($o(e)) Yo(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ni(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Oi(e, t, a, r)) &&
              (tu(n, e, r, (a = Zl())), Xo(n, t, r));
          }
        }
        function $o(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Yo(e, t) {
          co = uo = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function Xo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
          }
        }
        var Go = {
            readContext: Ti,
            useCallback: po,
            useContext: po,
            useEffect: po,
            useImperativeHandle: po,
            useInsertionEffect: po,
            useLayoutEffect: po,
            useMemo: po,
            useReducer: po,
            useRef: po,
            useState: po,
            useDebugValue: po,
            useDeferredValue: po,
            useTransition: po,
            useMutableSource: po,
            useSyncExternalStore: po,
            useId: po,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Ti,
            useCallback: function (e, t) {
              return ((vo().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ti,
            useEffect: jo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Oo(4194308, 4, Fo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Oo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Oo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Wo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (vo().memoizedState = e));
            },
            useState: To,
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return (vo().memoizedState = e);
            },
            useTransition: function () {
              var e = To(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])),
                (vo().memoizedState = e),
                [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = vo();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(i(349));
                0 !== (30 & io) || Co(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                jo(xo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Po(9, Ao.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vo(),
                t = Rl.identifierPrefix;
              if (ai) {
                var n = Xa;
                ((t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - ot(Ya) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":"));
              } else t = ":" + t + "r" + (n = ho++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Ti,
            useCallback: qo,
            useContext: Ti,
            useEffect: Do,
            useImperativeHandle: zo,
            useInsertionEffect: Mo,
            useLayoutEffect: Uo,
            useMemo: Vo,
            useReducer: So,
            useRef: No,
            useState: function () {
              return So(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return Ho(bo(), so.memoizedState, e);
            },
            useTransition: function () {
              return [So(wo)[0], bo().memoizedState];
            },
            useMutableSource: Eo,
            useSyncExternalStore: _o,
            useId: Qo,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Ti,
            useCallback: qo,
            useContext: Ti,
            useEffect: Do,
            useImperativeHandle: zo,
            useInsertionEffect: Mo,
            useLayoutEffect: Uo,
            useMemo: Vo,
            useReducer: ko,
            useRef: No,
            useState: function () {
              return ko(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              var t = bo();
              return null === so
                ? (t.memoizedState = e)
                : Ho(t, so.memoizedState, e);
            },
            useTransition: function () {
              return [ko(wo)[0], bo().memoizedState];
            },
            useMutableSource: Eo,
            useSyncExternalStore: _o,
            useId: Qo,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          ((n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var as = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Zl(),
              a = eu(e),
              i = Ui(r, a);
            ((i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (tu(t, e, a, r), zi(t, e, a)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Zl(),
              a = eu(e),
              i = Ui(r, a);
            ((i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (tu(t, e, a, r), zi(t, e, a)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Zl(),
              r = eu(e),
              a = Ui(n, r);
            ((a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fi(e, a, r)) && (tu(t, e, r, n), zi(t, e, r)));
          },
        };
        function is(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function os(e, t, n) {
          var r = !1,
            a = xa,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ti(i))
              : ((a = Na(t) ? Ta : Ra.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : xa)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = as),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function ss(e, t, n, r) {
          ((e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && as.enqueueReplaceState(t, t.state, null));
        }
        function ls(e, t, n, r) {
          var a = e.stateNode;
          ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), Di(e));
          var i = t.contextType;
          ("object" === typeof i && null !== i
            ? (a.context = Ti(i))
            : ((i = Na(t) ? Ta : Ra.current), (a.context = Pa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (rs(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && as.enqueueReplaceState(a, a.state, null),
              qi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308));
        }
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              ((n += B(r)), (r = r.return));
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function cs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fs = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          (((n = Ui(-1, n)).tag = 3), (n.payload = { element: null }));
          var r = t.value;
          return (
            (n.callback = function () {
              (Vl || ((Vl = !0), (Hl = r)), ds(0, t));
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = Ui(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            ((n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ds(0, t);
              }));
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                (ds(0, t),
                  "function" !== typeof r &&
                    (null === Jl ? (Jl = new Set([this])) : Jl.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _u.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ui(-1, 1)).tag = 2), Fi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var vs = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? Si(t, null, n, r) : wi(t, e.child, n, r);
        }
        function Ss(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ii(t, a),
            (r = go(e, t, n, r, i, a)),
            (n = yo()),
            null === e || bs
              ? (ai && n && ei(t), (t.flags |= 1), ws(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vs(e, t, a))
          );
        }
        function ks(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Pu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ou(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Es(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Vs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Nu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return ((t.lanes = e.lanes), Vs(e, t, a));
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return As(e, t, n, r, a);
        }
        function _s(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              ((t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Aa(Nl, Pl),
                (Pl |= n));
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Aa(Nl, Pl),
                  (Pl |= e),
                  null
                );
              ((t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Aa(Nl, Pl),
                (Pl |= r));
            }
          else
            (null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Aa(Nl, Pl),
              (Pl |= r));
          return (ws(e, t, a, n), t.child);
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function As(e, t, n, r, a) {
          var i = Na(n) ? Ta : Ra.current;
          return (
            (i = Pa(t, i)),
            Ii(t, a),
            (n = go(e, t, n, r, i, a)),
            (r = yo()),
            null === e || bs
              ? (ai && r && ei(t), (t.flags |= 1), ws(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vs(e, t, a))
          );
        }
        function xs(e, t, n, r, a) {
          if (Na(n)) {
            var i = !0;
            Da(t);
          } else i = !1;
          if ((Ii(t, a), null === t.stateNode))
            (qs(e, t), os(t, n, r), ls(t, n, r, a), (r = !0));
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ti(u))
              : (u = Pa(t, (u = Na(n) ? Ta : Ra.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            (d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && ss(t, o, r, u)),
              (ji = !1));
            var f = t.memoizedState;
            ((o.state = f),
              qi(t, r, o, a),
              (l = t.memoizedState),
              s !== r || f !== l || Ia.current || ji
                ? ("function" === typeof c &&
                    (rs(t, n, c, r), (l = t.memoizedState)),
                  (s = ji || is(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((o = t.stateNode),
              Mi(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ns(t.type, s)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ti(l))
                : (l = Pa(t, (l = Na(n) ? Ta : Ra.current))));
            var h = n.getDerivedStateFromProps;
            ((c =
              "function" === typeof h ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== d || f !== l) && ss(t, o, r, l)),
              (ji = !1),
              (f = t.memoizedState),
              (o.state = f),
              qi(t, r, o, a));
            var p = t.memoizedState;
            s !== d || f !== p || Ia.current || ji
              ? ("function" === typeof h &&
                  (rs(t, n, h, r), (p = t.memoizedState)),
                (u = ji || is(t, n, u, r, f, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Rs(e, t, n, r, i, a);
        }
        function Rs(e, t, n, r, a, i) {
          Cs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return (a && Ma(t, n, !1), Vs(e, t, i));
          ((r = t.stateNode), (vs.current = t));
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = wi(t, e.child, null, i)),
                (t.child = wi(t, null, s, i)))
              : ws(e, t, s, i),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Is(e) {
          var t = e.stateNode;
          (t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            $i(e, t.containerInfo));
        }
        function Ts(e, t, n, r, a) {
          return (hi(), pi(a), (t.flags |= 256), ws(e, t, n, r), t.child);
        }
        var Ps,
          Ns,
          Os,
          Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
        function js(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Zi.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Aa(Zi, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = ju(l, a, 0, null)),
                      (e = Lu(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = js(n)),
                      (t.memoizedState = Ls),
                      e)
                    : Ms(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Us(e, t, s, (r = cs(Error(i(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((o = r.fallback),
                      (a = t.mode),
                      (r = ju(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((o = Lu(o, a, s, null)).flags |= 2),
                      (r.return = t),
                      (o.return = t),
                      (r.sibling = o),
                      (t.child = r),
                      0 !== (1 & t.mode) && wi(t, e.child, null, s),
                      (t.child.memoizedState = js(s)),
                      (t.memoizedState = Ls),
                      o);
              if (0 === (1 & t.mode)) return Us(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l),
                  Us(e, t, s, (r = cs((o = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = Rl)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Li(e, a), tu(r, e, a, -1));
                }
                return (pu(), Us(e, t, s, (r = cs(Error(i(421))))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Au.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Wa[Ka++] = Ya),
                    (Wa[Ka++] = Xa),
                    (Wa[Ka++] = $a),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    ($a = t)),
                  (t = Ms(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, o, n);
          if (s) {
            ((s = a.fallback), (l = t.mode), (r = (o = e.child).sibling));
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Nu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Nu(r, s))
                : ((s = Lu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? js(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ls),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Nu(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ms(e, t) {
          return (
            ((t = ju(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Us(e, t, n, r) {
          return (
            null !== r && pi(r),
            wi(t, e.child, null, n),
            ((e = Ms(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Fs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Ri(e.return, t, n));
        }
        function zs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Bs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = Zi.current))))
            ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Fs(e, n, t);
                else if (19 === e.tag) Fs(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          if ((Aa(Zi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  (null !== (e = n.alternate) && null === eo(e) && (a = n),
                    (n = n.sibling));
                (null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  zs(t, !1, a, n, i));
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                zs(t, !0, n, null, i);
                break;
              case "together":
                zs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function qs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (jl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Nu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling),
                ((n = n.sibling = Nu(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function Hs(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Js(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling));
          else
            for (a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return (Js(t), null);
            case 1:
            case 17:
              return (Na(t.type) && Oa(), Js(t), null);
            case 3:
              return (
                (r = t.stateNode),
                Yi(),
                Ca(Ia),
                Ca(Ra),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (iu(ii), (ii = null)))),
                Js(t),
                null
              );
            case 5:
              Gi(t);
              var a = Ki(Wi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                (Ns(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (Js(t), null);
                }
                if (((e = Ki(Ji.current)), di(t))) {
                  ((r = t.stateNode), (n = t.type));
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[ha] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      (Fr("cancel", r), Fr("close", r));
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < jr.length; a++) Fr(jr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      (Fr("error", r), Fr("load", r));
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      (Y(r, o), Fr("invalid", r));
                      break;
                    case "select":
                      ((r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r));
                      break;
                    case "textarea":
                      (ae(r, o), Fr("invalid", r));
                  }
                  for (var l in (ve(n, o), (a = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      (Q(r), Z(r, o, !0));
                      break;
                    case "textarea":
                      (Q(r), oe(r));
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                  ((l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script><\/script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = l.createElement(n, { is: r.is }))
                          : ((e = l.createElement(n)),
                            "select" === n &&
                              ((l = e),
                              r.multiple
                                ? (l.multiple = !0)
                                : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[ha] = r),
                    Ps(e, t),
                    (t.stateNode = e));
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        (Fr("cancel", e), Fr("close", e), (a = r));
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        (Fr("load", e), (a = r));
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < jr.length; a++) Fr(jr[a], e);
                        a = r;
                        break;
                      case "source":
                        (Fr("error", e), (a = r));
                        break;
                      case "img":
                      case "image":
                      case "link":
                        (Fr("error", e), Fr("load", e), (a = r));
                        break;
                      case "details":
                        (Fr("toggle", e), (a = r));
                        break;
                      case "input":
                        (Y(e, r), (a = $(e, r)), Fr("invalid", e));
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        ((e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Fr("invalid", e));
                        break;
                      case "textarea":
                        (ae(e, r), (a = re(e, r)), Fr("invalid", e));
                    }
                    for (o in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : "children" === o
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && fe(e, c)
                                : "number" === typeof c && fe(e, "" + c)
                              : "suppressContentEditableWarning" !== o &&
                                "suppressHydrationWarning" !== o &&
                                "autoFocus" !== o &&
                                (s.hasOwnProperty(o)
                                  ? null != c &&
                                    "onScroll" === o &&
                                    Fr("scroll", e)
                                  : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        (Q(e), Z(e, r, !1));
                        break;
                      case "textarea":
                        (Q(e), oe(e));
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        ((e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0));
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return (Js(t), null);
            case 6:
              if (e && null != t.stateNode) Os(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Ki(Wi.current)), Ki(Ji.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  (((r = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(r))[fa] = t),
                    (t.stateNode = r));
              }
              return (Js(t), null);
            case 13:
              if (
                (Ca(Zi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  (fi(), hi(), (t.flags |= 98560), (o = !1));
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    (hi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (Js(t), (o = !1));
                } else (null !== ii && (iu(ii), (ii = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Zi.current)
                        ? 0 === Ol && (Ol = 3)
                        : pu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Js(t),
                  null);
            case 4:
              return (
                Yi(),
                null === e && qr(t.stateNode.containerInfo),
                Js(t),
                null
              );
            case 10:
              return (xi(t.type._context), Js(t), null);
            case 19:
              if ((Ca(Zi), null === (o = t.memoizedState)))
                return (Js(t), null);
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) Hs(o, !1);
                else {
                  if (0 !== Ol || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = eo(e))) {
                        for (
                          t.flags |= 128,
                            Hs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;
                        )
                          ((e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling));
                        return (Aa(Zi, (1 & Zi.current) | 2), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Bl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return (Js(t), null);
                  } else
                    2 * Xe() - o.renderingStartTime > Bl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = Zi.current),
                  Aa(Zi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Js(t), null);
            case 22:
            case 23:
              return (
                cu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pl) &&
                    (Js(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Js(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Ws(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Na(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Yi(),
                Ca(Ia),
                Ca(Ra),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return (Gi(t), null);
            case 13:
              if (
                (Ca(Zi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (Ca(Zi), null);
            case 4:
              return (Yi(), null);
            case 10:
              return (xi(t.type._context), null);
            case 22:
            case 23:
              return (cu(), null);
            default:
              return null;
          }
        }
        ((Ps = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
        }),
          (Ns = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              ((e = t.stateNode), Ki(Ji.current));
              var i,
                o = null;
              switch (n) {
                case "input":
                  ((a = $(e, a)), (r = $(e, r)), (o = []));
                  break;
                case "select":
                  ((a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (o = []));
                  break;
                case "textarea":
                  ((a = re(e, a)), (r = re(e, r)), (o = []));
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else (n || (o || (o = []), o.push(c, n)), (n = u));
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                        ? ("string" !== typeof u && "number" !== typeof u) ||
                          (o = o || []).push(c, "" + u)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (s.hasOwnProperty(c)
                            ? (null != u && "onScroll" === c && Fr("scroll", e),
                              o || l === u || (o = []))
                            : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Os = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          }));
        var Ks = !1,
          $s = !1,
          Ys = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function Gs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function Zs(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var el = !1;
        function tl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                ((a.destroy = void 0), void 0 !== i && Zs(t, n, i));
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function nl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function rl(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            (e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e));
          }
        }
        function al(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[ha],
              delete t[ma],
              delete t[ga],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        function il(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ol(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || il(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function sl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr)));
          else if (4 !== r && null !== (e = e.child))
            for (sl(e, t, n), e = e.sibling; null !== e; )
              (sl(e, t, n), (e = e.sibling));
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              (ll(e, t, n), (e = e.sibling));
        }
        var ul = null,
          cl = !1;
        function dl(e, t, n) {
          for (n = n.child; null !== n; ) (fl(e, t, n), (n = n.sibling));
        }
        function fl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              $s || Gs(n, t);
            case 6:
              var r = ul,
                a = cl;
              ((ul = null),
                dl(e, t, n),
                (cl = a),
                null !== (ul = r) &&
                  (cl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode)));
              break;
            case 18:
              null !== ul &&
                (cl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    qt(e))
                  : la(ul, n.stateNode));
              break;
            case 4:
              ((r = ul),
                (a = cl),
                (ul = n.stateNode.containerInfo),
                (cl = !0),
                dl(e, t, n),
                (ul = r),
                (cl = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !$s &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  ((i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      Zs(n, t, o),
                    (a = a.next));
                } while (a !== r);
              }
              dl(e, t, n);
              break;
            case 1:
              if (
                !$s &&
                (Gs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ((r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount());
                } catch (s) {
                  Eu(n, t, s);
                }
              dl(e, t, n);
              break;
            case 21:
              dl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? (($s = (r = $s) || null !== n.memoizedState),
                  dl(e, t, n),
                  ($s = r))
                : dl(e, t, n);
              break;
            default:
              dl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            (null === n && (n = e.stateNode = new Ys()),
              t.forEach(function (t) {
                var r = xu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              }));
          }
        }
        function pl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      ((ul = l.stateNode), (cl = !1));
                      break e;
                    case 3:
                    case 4:
                      ((ul = l.stateNode.containerInfo), (cl = !0));
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(i(160));
                (fl(o, s, a), (ul = null), (cl = !1));
                var u = a.alternate;
                (null !== u && (u.return = null), (a.return = null));
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (ml(t, e), (t = t.sibling));
        }
        function ml(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((pl(t, e), gl(e), 4 & r)) {
                try {
                  (tl(3, e, e.return), nl(3, e));
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  tl(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              (pl(t, e), gl(e), 512 & r && null !== n && Gs(n, n.return));
              break;
            case 5:
              if (
                (pl(t, e),
                gl(e),
                512 & r && null !== n && Gs(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    ("input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(l, s));
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(a, f)
                          : "children" === d
                            ? fe(a, f)
                            : b(a, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        G(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(a, !!o.multiple, p, !1)
                          : h !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[ha] = o;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((pl(t, e), gl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                ((a = e.stateNode), (o = e.memoizedProps));
                try {
                  a.nodeValue = o;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (pl(t, e),
                gl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              (pl(t, e), gl(e));
              break;
            case 13:
              (pl(t, e),
                gl(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (zl = Xe())),
                4 & r && hl(e));
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? (($s = (c = $s) || d), pl(t, e), ($s = c))
                  : pl(t, e),
                gl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((p = (h = Xs).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          tl(4, h, h.return);
                          break;
                        case 1:
                          Gs(h, h.return);
                          var m = h.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            ((r = h), (n = h.return));
                            try {
                              ((t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount());
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Gs(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            wl(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Xs = p)) : wl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        ((a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s))));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    ((f.child.return = f), (f = f.child));
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    (d === f && (d = null), (f = f.return));
                  }
                  (d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling));
                }
              }
              break;
            case 19:
              (pl(t, e), gl(e), 4 & r && hl(e));
            case 21:
          }
        }
        function gl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (il(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  (32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    ll(e, ol(e), a));
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  sl(e, ol(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yl(e, t, n) {
          ((Xs = e), vl(e, t, n));
        }
        function vl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var a = Xs,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ks;
              if (!o) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || $s;
                s = Ks;
                var u = $s;
                if (((Ks = o), ($s = l) && !u))
                  for (Xs = a; null !== Xs; )
                    ((l = (o = Xs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Sl(a)
                        : null !== l
                          ? ((l.return = o), (Xs = l))
                          : Sl(a));
                for (; null !== i; ) ((Xs = i), vl(i, t, n), (i = i.sibling));
                ((Xs = a), (Ks = s), ($s = u));
              }
              bl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Xs = i))
                : bl(e);
          }
        }
        function bl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $s || nl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !$s)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Vi(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vi(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && qt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                $s || (512 & t.flags && rl(t));
              } catch (h) {
                Eu(t, t.return, h);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              ((n.return = t.return), (Xs = n));
              break;
            }
            Xs = t.return;
          }
        }
        function wl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              ((n.return = t.return), (Xs = n));
              break;
            }
            Xs = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    nl(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    Eu(t, o, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              ((s.return = t.return), (Xs = s));
              break;
            }
            Xs = t.return;
          }
        }
        var kl,
          El = Math.ceil,
          _l = w.ReactCurrentDispatcher,
          Cl = w.ReactCurrentOwner,
          Al = w.ReactCurrentBatchConfig,
          xl = 0,
          Rl = null,
          Il = null,
          Tl = 0,
          Pl = 0,
          Nl = _a(0),
          Ol = 0,
          Ll = null,
          jl = 0,
          Dl = 0,
          Ml = 0,
          Ul = null,
          Fl = null,
          zl = 0,
          Bl = 1 / 0,
          ql = null,
          Vl = !1,
          Hl = null,
          Jl = null,
          Ql = !1,
          Wl = null,
          Kl = 0,
          $l = 0,
          Yl = null,
          Xl = -1,
          Gl = 0;
        function Zl() {
          return 0 !== (6 & xl) ? Xe() : -1 !== Xl ? Xl : (Xl = Xe());
        }
        function eu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & xl) && 0 !== Tl
              ? Tl & -Tl
              : null !== mi.transition
                ? (0 === Gl && (Gl = mt()), Gl)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function tu(e, t, n, r) {
          if (50 < $l) throw (($l = 0), (Yl = null), Error(i(185)));
          (yt(e, n, r),
            (0 !== (2 & xl) && e === Rl) ||
              (e === Rl && (0 === (2 & xl) && (Dl |= n), 4 === Ol && ou(e, Tl)),
              nu(e, r),
              1 === n &&
                0 === xl &&
                0 === (1 & t.mode) &&
                ((Bl = Xe() + 500), Fa && qa())));
        }
        function nu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;
            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                l = a[o];
              (-1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = ht(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s));
            }
          })(e, t);
          var r = ft(e, e === Rl ? Tl : 0);
          if (0 === r)
            (null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              (0 === e.tag
                ? (function (e) {
                    ((Fa = !0), Ba(e));
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                oa(function () {
                  0 === (6 & xl) && qa();
                }),
                (n = null));
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ru(n, ru.bind(null, e));
            }
            ((e.callbackPriority = t), (e.callbackNode = n));
          }
        }
        function ru(e, t) {
          if (((Xl = -1), (Gl = 0), 0 !== (6 & xl))) throw Error(i(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Rl ? Tl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = xl;
            xl |= 2;
            var o = hu();
            for (
              (Rl === e && Tl === t) ||
              ((ql = null), (Bl = Xe() + 500), du(e, t));
              ;
            )
              try {
                yu();
                break;
              } catch (l) {
                fu(e, l);
              }
            (Ai(),
              (_l.current = o),
              (xl = a),
              null !== Il ? (t = 0) : ((Rl = null), (Tl = 0), (t = Ol)));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = au(e, a))),
              1 === t)
            )
              throw ((n = Ll), du(e, 0), ou(e, r), nu(e, Xe()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        ((n.return = t), (t = n));
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        ((t.sibling.return = t.return), (t = t.sibling));
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = au(e, o))),
                  1 === t))
              )
                throw ((n = Ll), du(e, 0), ou(e, r), nu(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  wu(e, Fl, ql);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = zl + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      (Zl(), (e.pingedLanes |= e.suspendedLanes & a));
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, Fl, ql), t);
                    break;
                  }
                  wu(e, Fl, ql);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    ((o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o));
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, Fl, ql), r);
                    break;
                  }
                  wu(e, Fl, ql);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return (nu(e, Xe()), e.callbackNode === n ? ru.bind(null, e) : null);
        }
        function au(e, t) {
          var n = Ul;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Fl), (Fl = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Fl ? (Fl = e) : Fl.push.apply(Fl, e);
        }
        function ou(e, t) {
          for (
            t &= ~Ml,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;
          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            ((e[n] = -1), (t &= ~r));
          }
        }
        function su(e) {
          if (0 !== (6 & xl)) throw Error(i(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return (nu(e, Xe()), null);
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Ll), du(e, 0), ou(e, t), nu(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Fl, ql),
            nu(e, Xe()),
            null
          );
        }
        function lu(e, t) {
          var n = xl;
          xl |= 1;
          try {
            return e(t);
          } finally {
            0 === (xl = n) && ((Bl = Xe() + 500), Fa && qa());
          }
        }
        function uu(e) {
          null !== Wl && 0 === Wl.tag && 0 === (6 & xl) && Su();
          var t = xl;
          xl |= 1;
          var n = Al.transition,
            r = bt;
          try {
            if (((Al.transition = null), (bt = 1), e)) return e();
          } finally {
            ((bt = r), (Al.transition = n), 0 === (6 & (xl = t)) && qa());
          }
        }
        function cu() {
          ((Pl = Nl.current), Ca(Nl));
        }
        function du(e, t) {
          ((e.finishedWork = null), (e.finishedLanes = 0));
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Il))
            for (n = Il.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oa();
                  break;
                case 3:
                  (Yi(), Ca(Ia), Ca(Ra), no());
                  break;
                case 5:
                  Gi(r);
                  break;
                case 4:
                  Yi();
                  break;
                case 13:
                case 19:
                  Ca(Zi);
                  break;
                case 10:
                  xi(r.type._context);
                  break;
                case 22:
                case 23:
                  cu();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Il = e = Nu(e.current, null)),
            (Tl = Pl = t),
            (Ol = 0),
            (Ll = null),
            (Ml = Dl = jl = 0),
            (Fl = Ul = null),
            null !== Pi)
          ) {
            for (t = 0; t < Pi.length; t++)
              if (null !== (r = (n = Pi[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  ((i.next = a), (r.next = o));
                }
                n.pending = r;
              }
            Pi = null;
          }
          return e;
        }
        function fu(e, t) {
          for (;;) {
            var n = Il;
            try {
              if ((Ai(), (ro.current = Go), uo)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  (null !== a && (a.pending = null), (r = r.next));
                }
                uo = !1;
              }
              if (
                ((io = 0),
                (lo = so = oo = null),
                (co = !1),
                (fo = 0),
                (Cl.current = null),
                null === n || null === n.return)
              ) {
                ((Ol = 1), (Ll = t), (Il = null));
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Tl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = gs(s);
                  if (null !== p) {
                    ((p.flags &= -257),
                      ys(p, s, l, 0, t),
                      1 & p.mode && ms(o, c, t),
                      (u = c));
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      (g.add(u), (t.updateQueue = g));
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    (ms(o, c, t), pu());
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var y = gs(s);
                  if (null !== y) {
                    (0 === (65536 & y.flags) && (y.flags |= 256),
                      ys(y, s, l, 0, t),
                      pi(us(u, l)));
                    break e;
                  }
                }
                ((o = u = us(u, l)),
                  4 !== Ol && (Ol = 2),
                  null === Ul ? (Ul = [o]) : Ul.push(o),
                  (o = s));
                do {
                  switch (o.tag) {
                    case 3:
                      ((o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Bi(o, hs(0, u, t)));
                      break e;
                    case 1:
                      l = u;
                      var v = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Jl || !Jl.has(b))))
                      ) {
                        ((o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Bi(o, ps(o, l, t)));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              bu(n);
            } catch (w) {
              ((t = w), Il === n && null !== n && (Il = n = n.return));
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = _l.current;
          return ((_l.current = Go), null === e ? Go : e);
        }
        function pu() {
          ((0 !== Ol && 3 !== Ol && 2 !== Ol) || (Ol = 4),
            null === Rl ||
              (0 === (268435455 & jl) && 0 === (268435455 & Dl)) ||
              ou(Rl, Tl));
        }
        function mu(e, t) {
          var n = xl;
          xl |= 2;
          var r = hu();
          for ((Rl === e && Tl === t) || ((ql = null), du(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              fu(e, a);
            }
          if ((Ai(), (xl = n), (_l.current = r), null !== Il))
            throw Error(i(261));
          return ((Rl = null), (Tl = 0), Ol);
        }
        function gu() {
          for (; null !== Il; ) vu(Il);
        }
        function yu() {
          for (; null !== Il && !$e(); ) vu(Il);
        }
        function vu(e) {
          var t = kl(e.alternate, e, Pl);
          ((e.memoizedProps = e.pendingProps),
            null === t ? bu(e) : (Il = t),
            (Cl.current = null));
        }
        function bu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Pl))) return void (Il = n);
            } else {
              if (null !== (n = Ws(n, t)))
                return ((n.flags &= 32767), void (Il = n));
              if (null === e) return ((Ol = 6), void (Il = null));
              ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
            }
            if (null !== (t = t.sibling)) return void (Il = t);
            Il = t = e;
          } while (null !== t);
          0 === Ol && (Ol = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Al.transition;
          try {
            ((Al.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Wl);
                if (0 !== (6 & xl)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                ((e.callbackNode = null), (e.callbackPriority = 0));
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    ((e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements));
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                    }
                  })(e, o),
                  e === Rl && ((Il = Rl = null), (Tl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Ru(tt, function () {
                      return (Su(), null);
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  ((o = Al.transition), (Al.transition = null));
                  var s = bt;
                  bt = 1;
                  var l = xl;
                  ((xl |= 4),
                    (Cl.current = null),
                    (function (e, t) {
                      if (((ea = Ht), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                (n.nodeType, o.nodeType);
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (l = s + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (p = f.firstChild);
                                )
                                  ((h = f), (f = p));
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++c === a && (l = s),
                                    h === o && ++d === r && (u = s),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xs = t;
                        null !== Xs;
                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          ((e.return = t), (Xs = e));
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ns(t.type, g),
                                          y,
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (S) {
                              Eu(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              ((e.return = t.return), (Xs = e));
                              break;
                            }
                            Xs = t.return;
                          }
                      ((m = el), (el = !1));
                    })(e, n),
                    ml(n, e),
                    pr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yl(n, e, a),
                    Ye(),
                    (xl = l),
                    (bt = s),
                    (Al.transition = o));
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Wl = e), (Kl = a)),
                  (o = e.pendingLanes),
                  0 === o && (Jl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  nu(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    ((a = t[n]),
                      r(a.value, {
                        componentStack: a.stack,
                        digest: a.digest,
                      }));
                if (Vl) throw ((Vl = !1), (e = Hl), (Hl = null), e);
                (0 !== (1 & Kl) && 0 !== e.tag && Su(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Yl
                      ? $l++
                      : (($l = 0), (Yl = e))
                    : ($l = 0),
                  qa());
              })(e, t, n, r));
          } finally {
            ((Al.transition = a), (bt = r));
          }
          return null;
        }
        function Su() {
          if (null !== Wl) {
            var e = wt(Kl),
              t = Al.transition,
              n = bt;
            try {
              if (((Al.transition = null), (bt = 16 > e ? 16 : e), null === Wl))
                var r = !1;
              else {
                if (((e = Wl), (Wl = null), (Kl = 0), 0 !== (6 & xl)))
                  throw Error(i(331));
                var a = xl;
                for (xl |= 4, Xs = e.current; null !== Xs; ) {
                  var o = Xs,
                    s = o.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              tl(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) ((f.return = d), (Xs = f));
                          else
                            for (; null !== Xs; ) {
                              var h = (d = Xs).sibling,
                                p = d.return;
                              if ((al(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== h) {
                                ((h.return = p), (Xs = h));
                                break;
                              }
                              Xs = p;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            ((g.sibling = null), (g = y));
                          } while (null !== g);
                        }
                      }
                      Xs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    ((s.return = o), (Xs = s));
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (o = Xs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            tl(9, o, o.return);
                        }
                      var v = o.sibling;
                      if (null !== v) {
                        ((v.return = o.return), (Xs = v));
                        break e;
                      }
                      Xs = o.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    ((w.return = s), (Xs = w));
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(9, l);
                          }
                        } catch (k) {
                          Eu(l, l.return, k);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var S = l.sibling;
                      if (null !== S) {
                        ((S.return = l.return), (Xs = S));
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((xl = a),
                  qa(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              ((bt = n), (Al.transition = t));
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          ((e = Fi(e, (t = hs(0, (t = us(n, t)), 1)), 1)),
            (t = Zl()),
            null !== e && (yt(e, 1, t), nu(e, t)));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Jl || !Jl.has(r)))
                ) {
                  ((t = Fi(t, (e = ps(t, (e = us(n, e)), 1)), 1)),
                    (e = Zl()),
                    null !== t && (yt(t, 1, e), nu(t, e)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _u(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (t = Zl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Tl & n) === n &&
              (4 === Ol ||
              (3 === Ol && (130023424 & Tl) === Tl && 500 > Xe() - zl)
                ? du(e, 0)
                : (Ml |= n)),
            nu(e, t));
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Zl();
          null !== (e = Li(e, t)) && (yt(e, t, n), nu(e, n));
        }
        function Au(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Cu(e, n));
        }
        function xu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          (null !== r && r.delete(t), Cu(e, n));
        }
        function Ru(e, t) {
          return We(e, t);
        }
        function Iu(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Tu(e, t, n, r) {
          return new Iu(e, t, n, r);
        }
        function Pu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Nu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ou(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Pu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case E:
                return Lu(n.children, a, o, t);
              case _:
                ((s = 8), (a |= 8));
                break;
              case C:
                return (
                  ((e = Tu(12, n, t, 2 | a)).elementType = C),
                  (e.lanes = o),
                  e
                );
              case I:
                return (
                  ((e = Tu(13, n, t, a)).elementType = I),
                  (e.lanes = o),
                  e
                );
              case T:
                return (
                  ((e = Tu(19, n, t, a)).elementType = T),
                  (e.lanes = o),
                  e
                );
              case O:
                return ju(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case A:
                      s = 10;
                      break e;
                    case x:
                      s = 9;
                      break e;
                    case R:
                      s = 11;
                      break e;
                    case P:
                      s = 14;
                      break e;
                    case N:
                      ((s = 16), (r = null));
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tu(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Lu(e, t, n, r) {
          return (((e = Tu(7, e, r, t)).lanes = n), e);
        }
        function ju(e, t, n, r) {
          return (
            ((e = Tu(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return (((e = Tu(6, e, null, t)).lanes = n), e);
        }
        function Mu(e, t, n) {
          return (
            ((t = Tu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, a) {
          ((this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null));
        }
        function Fu(e, t, n, r, a, i, o, s, l) {
          return (
            (e = new Uu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Tu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Di(i),
            e
          );
        }
        function zu(e) {
          if (!e) return xa;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Na(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Na(n)) return ja(e, n, t);
          }
          return t;
        }
        function Bu(e, t, n, r, a, i, o, s, l) {
          return (
            ((e = Fu(n, r, !0, e, 0, i, 0, s, l)).context = zu(null)),
            (n = e.current),
            ((i = Ui((r = Zl()), (a = eu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fi(n, i, a),
            (e.current.lanes = a),
            yt(e, a, r),
            nu(e, r),
            e
          );
        }
        function qu(e, t, n, r) {
          var a = t.current,
            i = Zl(),
            o = eu(a);
          return (
            (n = zu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ui(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fi(a, t, o)) && (tu(e, a, o, i), zi(e, a, o)),
            o
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ju(e, t) {
          (Hu(e, t), (e = e.alternate) && Hu(e, t));
        }
        kl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ia.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (Is(t), hi());
                        break;
                      case 5:
                        Xi(t);
                        break;
                      case 1:
                        Na(t.type) && Da(t);
                        break;
                      case 4:
                        $i(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        (Aa(ki, r._currentValue), (r._currentValue = a));
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Aa(Zi, 1 & Zi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ds(e, t, n)
                              : (Aa(Zi, 1 & Zi.current),
                                null !== (e = Vs(e, t, n)) ? e.sibling : null);
                        Aa(Zi, 1 & Zi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Aa(Zi, Zi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return ((t.lanes = 0), _s(e, t, n));
                    }
                    return Vs(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else
            ((bs = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              (qs(e, t), (e = t.pendingProps));
              var a = Pa(t, Ra.current);
              (Ii(t, n), (a = go(null, t, r, e, a, n)));
              var o = yo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Na(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Di(t),
                    (a.updater = as),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ls(t, r, e, n),
                    (t = Rs(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    ws(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (qs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  a)
                ) {
                  case 0:
                    t = As(null, t, r, e, n);
                    break e;
                  case 1:
                    t = xs(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ss(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                As(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xs(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 3:
              e: {
                if ((Is(t), null === e)) throw Error(i(387));
                ((r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Mi(e, t),
                  qi(t, r, null, n));
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, r, n, (a = us(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ts(e, t, r, n, (a = us(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Si(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((hi(), r === a)) {
                    t = Vs(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xi(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Cs(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return (null === e && ui(t), null);
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                $i(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wi(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ss(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 7:
              return (ws(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (ws(e, t, t.pendingProps.children, n), t.child);
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Aa(ki, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !Ia.current) {
                      t = Vs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;
                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ui(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                (null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u));
                              }
                            }
                            ((o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Ri(o.return, n, t),
                              (l.lanes |= n));
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        ((s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ri(s, n, t),
                          (s = o.sibling));
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            ((o.return = s.return), (s = o));
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                (ws(e, t, a.children, n), (t = t.child));
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ii(t, n),
                (r = r((a = Ti(a)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ns((r = t.type), t.pendingProps)),
                ks(e, t, r, (a = ns(r.type, a)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ns(r, a)),
                qs(e, t),
                (t.tag = 1),
                Na(r) ? ((e = !0), Da(t)) : (e = !1),
                Ii(t, n),
                os(t, r, a),
                ls(t, r, a, n),
                Rs(null, t, r, !0, e, n)
              );
            case 19:
              return Bs(e, t, n);
            case 22:
              return _s(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Wu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function $u(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function Gu(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Vu(o);
                s.call(e);
              };
            }
            qu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Vu(o);
                    i.call(e);
                  };
                }
                var o = Bu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = o),
                  (e[pa] = o.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  uu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Vu(l);
                  s.call(e);
                };
              }
              var l = Fu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[pa] = l.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                uu(function () {
                  qu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Vu(o);
        }
        ((Ku.prototype.render = Wu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            qu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Wu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (uu(function () {
                  qu(null, e, null, null);
                }),
                  (t[pa] = null));
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              (Ot.splice(n, 0, e), 0 === n && Mt(e));
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    nu(t, Xe()),
                    0 === (6 & xl) && ((Bl = Xe() + 500), qa()));
                }
                break;
              case 13:
                (uu(function () {
                  var t = Li(e, 1);
                  if (null !== t) {
                    var n = Zl();
                    tu(t, e, 1, n);
                  }
                }),
                  Ju(e, 1));
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Li(e, 134217728);
              if (null !== t) tu(t, e, 134217728, Zl());
              Ju(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = eu(e),
                n = Li(e, t);
              if (null !== n) tu(n, e, t, Zl());
              Ju(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return ((bt = e), t());
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(i(90));
                      (W(r), G(r, a));
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = lu),
          (Ie = uu));
        var Zu = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Ae, xe, lu],
          },
          ec = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          tc = {
            bundleType: ec.bundleType,
            version: ec.version,
            rendererPackageName: ec.rendererPackageName,
            rendererConfig: ec.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ec.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!nc.isDisabled && nc.supportsFiber)
            try {
              ((at = nc.inject(tc)), (it = nc));
            } catch (ce) {}
        }
        ((t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!$u(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!$u(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Fu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Wu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Gu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!$u(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Bu(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[pa] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a));
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Gu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uu(function () {
                Gu(null, null, e, !1, function () {
                  ((e._reactRootContainer = null), (e[pa] = null));
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = lu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Gu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426"));
      },
      391(e, t, n) {
        var r = n(950);
        ((t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot));
      },
      950(e, t, n) {
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730)));
      },
      153(e, t, n) {
        var r = n(43),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        ((t.Fragment = i), (t.jsx = u), (t.jsxs = u));
      },
      202(e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p));
        }
        function v() {}
        function b(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p));
        }
        ((y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype));
        var w = (b.prototype = new v());
        ((w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0));
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          E = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !_.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: E.current,
          };
        }
        function A(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var x = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function I(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === i ? "." + R(l, 0) : i),
              S(o)
                ? ((a = ""),
                  null != e && (a = e.replace(x, "$&/") + "/"),
                  I(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (A(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(x, "$&/") + "/") +
                        e,
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + R((s = e[u]), u);
              l += I(s, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += I((s = s.value), t, a, (c = i + R(s, u++)), o);
          else if ("object" === s)
            throw (
              (t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            I(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          O = { transition: null },
          L = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: E,
          };
        function j() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        ((t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!A(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = E.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !_.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return ((t.type = e), t);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = j),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.3.1"));
      },
      43(e, t, n) {
        e.exports = n(202);
      },
      579(e, t, n) {
        e.exports = n(153);
      },
      234(e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                ((e[r] = c), (e[u] = n), (r = u));
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              (a(c), (t.sortIndex = t.expirationTime), n(u, t));
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) ((m = !0), O(k));
            else {
              var t = r(c);
              null !== t && L(S, t.startTime - e);
            }
        }
        function k(e, n) {
          ((m = !1), g && ((g = !1), v(A), (A = -1)), (p = !0));
          var i = h;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !I()));
            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                ((f.callback = null), (h = f.priorityLevel));
                var s = o(f.expirationTime <= n);
                ((n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && a(u),
                  w(n));
              } else a(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              (null !== d && L(S, d.startTime - n), (l = !1));
            }
            return l;
          } finally {
            ((f = null), (h = i), (p = !1));
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          _ = !1,
          C = null,
          A = -1,
          x = 5,
          R = -1;
        function I() {
          return !(t.unstable_now() - R < x);
        }
        function T() {
          if (null !== C) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((_ = !1), (C = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            N = P.port2;
          ((P.port1.onmessage = T),
            (E = function () {
              N.postMessage(null);
            }));
        } else
          E = function () {
            y(T, 0);
          };
        function O(e) {
          ((C = e), _ || ((_ = !0), E()));
        }
        function L(e, n) {
          A = y(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), O(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (x = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(A), (A = -1)) : (g = !0), L(S, i - o)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), O(k))),
              e
            );
          }),
          (t.unstable_shouldYield = I),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          }));
      },
      853(e, t, n) {
        e.exports = n(234);
      },
      365(e, t, n) {
        var r = n(43);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          i = r.useSyncExternalStore,
          o = r.useRef,
          s = r.useEffect,
          l = r.useMemo,
          u = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
          var d = o(null);
          if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
          } else f = d.current;
          d = l(
            function () {
              function e(e) {
                if (!s) {
                  if (
                    ((s = !0), (i = e), (e = r(e)), void 0 !== c && f.hasValue)
                  ) {
                    var t = f.value;
                    if (c(t, e)) return (o = t);
                  }
                  return (o = e);
                }
                if (((t = o), a(i, e))) return t;
                var n = r(e);
                return void 0 !== c && c(t, n)
                  ? ((i = e), t)
                  : ((i = e), (o = n));
              }
              var i,
                o,
                s = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, c],
          );
          var h = i(e, d[0], d[1]);
          return (
            s(
              function () {
                ((f.hasValue = !0), (f.value = h));
              },
              [h],
            ),
            u(h),
            h
          );
        };
      },
      237(e, t, n) {
        e.exports = n(365);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return (e[r](i, i.exports, n), i.exports);
  }
  ((() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var i = Object.create(null);
      n.r(i);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (
        var s = 2 & a && r;
        ("object" == typeof s || "function" == typeof s) && !~e.indexOf(s);
        s = t(s)
      )
        Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => r[e]));
      return ((o.default = () => r), n.d(i, o), i);
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.p = "/"));
  var r = {};
  (n.r(r),
    n.d(r, {
      hasBrowserEnv: () => ki,
      hasStandardBrowserEnv: () => _i,
      hasStandardBrowserWebWorkerEnv: () => Ci,
      navigator: () => Ei,
      origin: () => Ai,
    }));
  var a = n(43),
    i = n.t(a, 2),
    o = n(391),
    s = "popstate";
  function l(e) {
    return (
      "object" === typeof e &&
      null != e &&
      "pathname" in e &&
      "search" in e &&
      "hash" in e &&
      "state" in e &&
      "key" in e
    );
  }
  function u() {
    return g(
      function (e, t) {
        let n = t.state?.masked,
          { pathname: r, search: a, hash: i } = n || e.location;
        return h(
          "",
          { pathname: r, search: a, hash: i },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default",
          n
            ? {
                pathname: e.location.pathname,
                search: e.location.search,
                hash: e.location.hash,
              }
            : void 0,
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : p(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    );
  }
  function c(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function d(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function f(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t,
      masked: e.unstable_mask
        ? { pathname: e.pathname, search: e.search, hash: e.hash }
        : void 0,
    };
  }
  function h(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = arguments.length > 4 ? arguments[4] : void 0;
    return {
      pathname: "string" === typeof e ? e : e.pathname,
      search: "",
      hash: "",
      ...("string" === typeof t ? m(t) : t),
      state: n,
      key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
      unstable_mask: a,
    };
  }
  function p(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function m(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: i = !1 } = r,
      o = a.history,
      u = "POP",
      c = null,
      d = p();
    function p() {
      return (o.state || { idx: null }).idx;
    }
    function m() {
      u = "POP";
      let e = p(),
        t = null == e ? null : e - d;
      ((d = e), c && c({ action: u, location: v.location, delta: t }));
    }
    function g(e) {
      return y(e);
    }
    null == d && ((d = 0), o.replaceState({ ...o.state, idx: d }, ""));
    let v = {
      get action() {
        return u;
      },
      get location() {
        return e(a, o);
      },
      listen(e) {
        if (c) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(s, m),
          (c = e),
          () => {
            (a.removeEventListener(s, m), (c = null));
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: g,
      encodeLocation(e) {
        let t = g(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        u = "PUSH";
        let r = l(e) ? e : h(v.location, e, t);
        (n && n(r, e), (d = p() + 1));
        let s = f(r, d),
          m = v.createHref(r.unstable_mask || r);
        try {
          o.pushState(s, "", m);
        } catch (g) {
          if (g instanceof DOMException && "DataCloneError" === g.name) throw g;
          a.location.assign(m);
        }
        i && c && c({ action: u, location: v.location, delta: 1 });
      },
      replace: function (e, t) {
        u = "REPLACE";
        let r = l(e) ? e : h(v.location, e, t);
        (n && n(r, e), (d = p()));
        let a = f(r, d),
          s = v.createHref(r.unstable_mask || r);
        (o.replaceState(a, "", s),
          i && c && c({ action: u, location: v.location, delta: 0 }));
      },
      go: (e) => o.go(e),
    };
    return v;
  }
  function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = "http://localhost";
    ("undefined" !== typeof window &&
      (n =
        "null" !== window.location.origin
          ? window.location.origin
          : window.location.href),
      c(n, "No window.location.(origin|href) available to create URL"));
    let r = "string" === typeof e ? e : p(e);
    return (
      (r = r.replace(/ $/, "%20")),
      !t && r.startsWith("//") && (r = n + r),
      new URL(r, n)
    );
  }
  new WeakMap();
  function v(e, t) {
    return b(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1,
    );
  }
  function b(e, t, n, r) {
    let a = L(("string" === typeof t ? m(t) : t).pathname || "/", n);
    if (null == a) return null;
    let i = w(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex),
            ),
      );
    })(i);
    let o = null;
    for (let s = 0; null == o && s < i.length; ++s) {
      let e = O(a);
      o = T(i[s], e, r);
    }
    return o;
  }
  function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      i = function (e, i) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
          s = arguments.length > 3 ? arguments[3] : void 0,
          l = {
            relativePath: void 0 === s ? e.path || "" : s,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e,
          };
        if (l.relativePath.startsWith("/")) {
          if (!l.relativePath.startsWith(r) && o) return;
          (c(
            l.relativePath.startsWith(r),
            `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
          ),
            (l.relativePath = l.relativePath.slice(r.length)));
        }
        let u = B([r, l.relativePath]),
          d = n.concat(l);
        (e.children &&
          e.children.length > 0 &&
          (c(
            !0 !== e.index,
            `Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
          ),
          w(e.children, t, d, u, o)),
          (null != e.path || e.index) &&
            t.push({ path: u, score: I(u, e.index), routesMeta: d }));
      };
    return (
      e.forEach((e, t) => {
        if ("" !== e.path && e.path?.includes("?"))
          for (let n of S(e.path)) i(e, t, !0, n);
        else i(e, t);
      }),
      t
    );
  }
  function S(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [i, ""] : [i];
    let o = S(r.join("/")),
      s = [];
    return (
      s.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
      a && s.push(...o),
      s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var k = /^:[\w-]+$/,
    E = 3,
    _ = 2,
    C = 1,
    A = 10,
    x = -2,
    R = (e) => "*" === e;
  function I(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(R) && (r += x),
      t && (r += _),
      n
        .filter((e) => !R(e))
        .reduce((e, t) => e + (k.test(t) ? E : "" === t ? C : A), r)
    );
  }
  function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      i = "/",
      o = [];
    for (let s = 0; s < r.length; ++s) {
      let e = r[s],
        l = s === r.length - 1,
        u = "/" === i ? t : t.slice(i.length) || "/",
        c = P(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          u,
        ),
        d = e.route;
      if (
        (!c &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (c = P(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u,
          )),
        !c)
      )
        return null;
      (Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: B([i, c.pathname]),
          pathnameBase: q(B([i, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (i = B([i, c.pathnameBase])));
    }
    return o;
  }
  function P(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = N(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let i = a[0],
      o = i.replace(/(.)\/+$/, "$1"),
      s = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = s[n] || "";
          o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return ((e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e);
      }, {}),
      pathname: i,
      pathnameBase: o,
      pattern: e,
    };
  }
  function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    d(
      "*" === e || !e.endsWith("*") || e.endsWith("/*"),
      `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
    );
    let r = [],
      a =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, a, i) => {
            if ((r.push({ paramName: t, isOptional: null != n }), n)) {
              let t = i.charAt(a + e.length);
              return t && "/" !== t ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
            }
            return "/([^\\/]+)";
          })
          .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
      [new RegExp(a, t ? void 0 : "i"), r]
    );
  }
  function O(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        d(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
        ),
        e
      );
    }
  }
  function L(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  var j = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function D(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((e) => {
        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function M(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function U(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
    );
  }
  function F(e) {
    let t = U(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function z(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = m(e))
      : ((r = { ...e }),
        c(
          !r.pathname || !r.pathname.includes("?"),
          M("?", "pathname", "search", r),
        ),
        c(
          !r.pathname || !r.pathname.includes("#"),
          M("#", "pathname", "hash", r),
        ),
        c(!r.search || !r.search.includes("#"), M("#", "search", "hash", r)));
    let i,
      o = "" === e || "" === r.pathname,
      s = o ? "/" : r.pathname;
    if (null == s) i = n;
    else {
      let e = t.length - 1;
      if (!a && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
        r.pathname = t.join("/");
      }
      i = e >= 0 ? t[e] : "/";
    }
    let l = (function (e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: r,
            search: a = "",
            hash: i = "",
          } = "string" === typeof e ? m(e) : e;
        return (
          r
            ? ((r = r.replace(/\/\/+/g, "/")),
              (t = r.startsWith("/") ? D(r.substring(1), "/") : D(r, n)))
            : (t = n),
          { pathname: t, search: V(a), hash: H(i) }
        );
      })(r, i),
      u = s && "/" !== s && s.endsWith("/"),
      d = (o || "." === s) && n.endsWith("/");
    return (l.pathname.endsWith("/") || (!u && !d) || (l.pathname += "/"), l);
  }
  var B = (e) => e.join("/").replace(/\/\/+/g, "/"),
    q = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    V = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    H = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  var J = class {
    constructor(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ((this.status = e),
        (this.statusText = t || ""),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
  function Q(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  function W(e) {
    return (
      e
        .map((e) => e.route.path)
        .filter(Boolean)
        .join("/")
        .replace(/\/\/*/g, "/") || "/"
    );
  }
  var K =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  function $(e, t) {
    let n = e;
    if ("string" !== typeof n || !j.test(n))
      return { absoluteURL: void 0, isExternal: !1, to: n };
    let r = n,
      a = !1;
    if (K)
      try {
        let e = new URL(window.location.href),
          r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n),
          i = L(r.pathname, t);
        r.origin === e.origin && null != i
          ? (n = i + r.search + r.hash)
          : (a = !0);
      } catch (i) {
        d(
          !1,
          `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    return { absoluteURL: r, isExternal: a, to: n };
  }
  Symbol("Uninstrumented");
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Y = ["POST", "PUT", "PATCH", "DELETE"],
    X = (new Set(Y), ["GET", ...Y]);
  (new Set(X), Symbol("ResetLoaderData"));
  var G = a.createContext(null);
  G.displayName = "DataRouter";
  var Z = a.createContext(null);
  Z.displayName = "DataRouterState";
  var ee = a.createContext(!1);
  function te() {
    return a.useContext(ee);
  }
  var ne = a.createContext({ isTransitioning: !1 });
  ne.displayName = "ViewTransition";
  var re = a.createContext(new Map());
  re.displayName = "Fetchers";
  var ae = a.createContext(null);
  ae.displayName = "Await";
  var ie = a.createContext(null);
  ie.displayName = "Navigation";
  var oe = a.createContext(null);
  oe.displayName = "Location";
  var se = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  se.displayName = "Route";
  var le = a.createContext(null);
  le.displayName = "RouteError";
  var ue = "REACT_ROUTER_ERROR";
  function ce() {
    return null != a.useContext(oe);
  }
  function de() {
    return (
      c(
        ce(),
        "useLocation() may be used only in the context of a <Router> component.",
      ),
      a.useContext(oe).location
    );
  }
  var fe =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function he(e) {
    a.useContext(ie).static || a.useLayoutEffect(e);
  }
  function pe() {
    let { isDataRoute: e } = a.useContext(se);
    return e
      ? (function () {
          let { router: e } = Ae("useNavigate"),
            t = Re("useNavigate"),
            n = a.useRef(!1);
          he(() => {
            n.current = !0;
          });
          let r = a.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (d(n.current, fe),
                n.current &&
                  ("number" === typeof r
                    ? await e.navigate(r)
                    : await e.navigate(r, { fromRouteId: t, ...a })));
            },
            [e, t],
          );
          return r;
        })()
      : (function () {
          c(
            ce(),
            "useNavigate() may be used only in the context of a <Router> component.",
          );
          let e = a.useContext(G),
            { basename: t, navigator: n } = a.useContext(ie),
            { matches: r } = a.useContext(se),
            { pathname: i } = de(),
            o = JSON.stringify(F(r)),
            s = a.useRef(!1);
          he(() => {
            s.current = !0;
          });
          let l = a.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((d(s.current, fe), !s.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let l = z(r, JSON.parse(o), i, "path" === a.relative);
              (null == e &&
                "/" !== t &&
                (l.pathname = "/" === l.pathname ? t : B([t, l.pathname])),
                (a.replace ? n.replace : n.push)(l, a.state, a));
            },
            [t, n, o, i, e],
          );
          return l;
        })();
  }
  a.createContext(null);
  function me() {
    let { matches: e } = a.useContext(se),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function ge(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = a.useContext(se),
      { pathname: r } = de(),
      i = JSON.stringify(F(n));
    return a.useMemo(() => z(e, JSON.parse(i), r, "path" === t), [e, i, r, t]);
  }
  function ye(e, t, n) {
    c(
      ce(),
      "useRoutes() may be used only in the context of a <Router> component.",
    );
    let { navigator: r } = a.useContext(ie),
      { matches: i } = a.useContext(se),
      o = i[i.length - 1],
      s = o ? o.params : {},
      l = o ? o.pathname : "/",
      u = o ? o.pathnameBase : "/",
      f = o && o.route;
    {
      let e = (f && f.path) || "";
      Pe(
        l,
        !f || e.endsWith("*") || e.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`,
      );
    }
    let h,
      p = de();
    if (t) {
      let e = "string" === typeof t ? m(t) : t;
      (c(
        "/" === u || e.pathname?.startsWith(u),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
      ),
        (h = e));
    } else h = p;
    let g = h.pathname || "/",
      y = g;
    if ("/" !== u) {
      let e = u.replace(/^\//, "").split("/");
      y = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let b = v(e, { pathname: y });
    (d(
      f || null != b,
      `No routes matched location "${h.pathname}${h.search}${h.hash}" `,
    ),
      d(
        null == b ||
          void 0 !== b[b.length - 1].route.element ||
          void 0 !== b[b.length - 1].route.Component ||
          void 0 !== b[b.length - 1].route.lazy,
        `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
      ));
    let w = _e(
      b &&
        b.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: B([
              u,
              r.encodeLocation
                ? r.encodeLocation(
                    e.pathname
                      .replace(/%/g, "%25")
                      .replace(/\?/g, "%3F")
                      .replace(/#/g, "%23"),
                  ).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? u
                : B([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(
                          e.pathnameBase
                            .replace(/%/g, "%25")
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23"),
                        ).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    );
    return t && w
      ? a.createElement(
          oe.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                unstable_mask: void 0,
                ...h,
              },
              navigationType: "POP",
            },
          },
          w,
        )
      : w;
  }
  function ve() {
    let e = Ie(),
      t = Q(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      i = { padding: "0.5rem", backgroundColor: r },
      o = { padding: "2px 4px", backgroundColor: r },
      s = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (s = a.createElement(
        a.Fragment,
        null,
        a.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        a.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          a.createElement("code", { style: o }, "ErrorBoundary"),
          " or",
          " ",
          a.createElement("code", { style: o }, "errorElement"),
          " prop on your route.",
        ),
      )),
      a.createElement(
        a.Fragment,
        null,
        a.createElement("h2", null, "Unexpected Application Error!"),
        a.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? a.createElement("pre", { style: i }, n) : null,
        s,
      )
    );
  }
  var be = a.createElement(ve, null),
    we = class extends a.Component {
      constructor(e) {
        (super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        this.props.onError
          ? this.props.onError(e, t)
          : console.error(
              "React Router caught the following error during render",
              e,
            );
      }
      render() {
        let e = this.state.error;
        if (
          this.context &&
          "object" === typeof e &&
          e &&
          "digest" in e &&
          "string" === typeof e.digest
        ) {
          const t = (function (e) {
            if (e.startsWith(`${ue}:ROUTE_ERROR_RESPONSE:{`))
              try {
                let t = JSON.parse(e.slice(40));
                if (
                  "object" === typeof t &&
                  t &&
                  "number" === typeof t.status &&
                  "string" === typeof t.statusText
                )
                  return new J(t.status, t.statusText, t.data);
              } catch {}
          })(e.digest);
          t && (e = t);
        }
        let t =
          void 0 !== e
            ? a.createElement(
                se.Provider,
                { value: this.props.routeContext },
                a.createElement(le.Provider, {
                  value: e,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        return this.context ? a.createElement(ke, { error: e }, t) : t;
      }
    };
  we.contextType = ee;
  var Se = new WeakMap();
  function ke(e) {
    let { children: t, error: n } = e,
      { basename: r } = a.useContext(ie);
    if (
      "object" === typeof n &&
      n &&
      "digest" in n &&
      "string" === typeof n.digest
    ) {
      let e = (function (e) {
        if (e.startsWith(`${ue}:REDIRECT:{`))
          try {
            let t = JSON.parse(e.slice(28));
            if (
              "object" === typeof t &&
              t &&
              "number" === typeof t.status &&
              "string" === typeof t.statusText &&
              "string" === typeof t.location &&
              "boolean" === typeof t.reloadDocument &&
              "boolean" === typeof t.replace
            )
              return t;
          } catch {}
      })(n.digest);
      if (e) {
        let t = Se.get(n);
        if (t) throw t;
        let i = $(e.location, r);
        if (K && !Se.get(n)) {
          if (!i.isExternal && !e.reloadDocument) {
            const t = Promise.resolve().then(() =>
              window.__reactRouterDataRouter.navigate(i.to, {
                replace: e.replace,
              }),
            );
            throw (Se.set(n, t), t);
          }
          window.location.href = i.absoluteURL || i.to;
        }
        return a.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${i.absoluteURL || i.to}`,
        });
      }
    }
    return t;
  }
  function Ee(e) {
    let { routeContext: t, match: n, children: r } = e,
      i = a.useContext(G);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(se.Provider, { value: t }, r)
    );
  }
  function _e(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = n?.state;
    if (null == e) {
      if (!r) return null;
      if (r.errors) e = r.matches;
      else {
        if (0 !== t.length || r.initialized || !(r.matches.length > 0))
          return null;
        e = r.matches;
      }
    }
    let i = e,
      o = r?.errors;
    if (null != o) {
      let e = i.findIndex((e) => e.route.id && void 0 !== o?.[e.route.id]);
      (c(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
      ),
        (i = i.slice(0, Math.min(i.length, e + 1))));
    }
    let s = !1,
      l = -1;
    if (n && r) {
      s = r.renderFallback;
      for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (
          ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
            (l = e),
          t.route.id)
        ) {
          let { loaderData: e, errors: a } = r,
            o =
              t.route.loader &&
              !e.hasOwnProperty(t.route.id) &&
              (!a || void 0 === a[t.route.id]);
          if (t.route.lazy || o) {
            (n.isStatic && (s = !0), (i = l >= 0 ? i.slice(0, l + 1) : [i[0]]));
            break;
          }
        }
      }
    }
    let u = n?.onError,
      d =
        r && u
          ? (e, t) => {
              u(e, {
                location: r.location,
                params: r.matches?.[0]?.params ?? {},
                unstable_pattern: W(r.matches),
                errorInfo: t,
              });
            }
          : void 0;
    return i.reduceRight((e, n, u) => {
      let c,
        f = !1,
        h = null,
        p = null;
      r &&
        ((c = o && n.route.id ? o[n.route.id] : void 0),
        (h = n.route.errorElement || be),
        s &&
          (l < 0 && 0 === u
            ? (Pe(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (f = !0),
              (p = null))
            : l === u &&
              ((f = !0), (p = n.route.hydrateFallbackElement || null))));
      let m = t.concat(i.slice(0, u + 1)),
        g = () => {
          let t;
          return (
            (t = c
              ? h
              : f
                ? p
                : n.route.Component
                  ? a.createElement(n.route.Component, null)
                  : n.route.element
                    ? n.route.element
                    : e),
            a.createElement(Ee, {
              match: n,
              routeContext: { outlet: e, matches: m, isDataRoute: null != r },
              children: t,
            })
          );
        };
      return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === u)
        ? a.createElement(we, {
            location: r.location,
            revalidation: r.revalidation,
            component: h,
            error: c,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
            onError: d,
          })
        : g();
    }, null);
  }
  function Ce(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Ae(e) {
    let t = a.useContext(G);
    return (c(t, Ce(e)), t);
  }
  function xe(e) {
    let t = a.useContext(Z);
    return (c(t, Ce(e)), t);
  }
  function Re(e) {
    let t = (function (e) {
        let t = a.useContext(se);
        return (c(t, Ce(e)), t);
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      c(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`,
      ),
      n.route.id
    );
  }
  function Ie() {
    let e = a.useContext(le),
      t = xe("useRouteError"),
      n = Re("useRouteError");
    return void 0 !== e ? e : t.errors?.[n];
  }
  var Te = {};
  function Pe(e, t, n) {
    t || Te[e] || ((Te[e] = !0), d(!1, n));
  }
  var Ne = {};
  function Oe(e, t) {
    e || Ne[t] || ((Ne[t] = !0), console.warn(t));
  }
  i.useOptimistic;
  a.memo(Le);
  function Le(e) {
    let { routes: t, future: n, state: r, isStatic: a, onError: i } = e;
    return ye(t, void 0, { state: r, isStatic: a, onError: i, future: n });
  }
  function je(e) {
    let { to: t, replace: n, state: r, relative: i } = e;
    c(
      ce(),
      "<Navigate> may be used only in the context of a <Router> component.",
    );
    let { static: o } = a.useContext(ie);
    d(
      !o,
      "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
    );
    let { matches: s } = a.useContext(se),
      { pathname: l } = de(),
      u = pe(),
      f = z(t, F(s), l, "path" === i),
      h = JSON.stringify(f);
    return (
      a.useEffect(() => {
        u(JSON.parse(h), { replace: n, state: r, relative: i });
      }, [u, h, i, n, r]),
      null
    );
  }
  function De(e) {
    c(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
    );
  }
  function Me(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = "POP",
      navigator: o,
      static: s = !1,
      unstable_useTransitions: l,
    } = e;
    c(
      !ce(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
    );
    let u = t.replace(/^\/*/, "/"),
      f = a.useMemo(
        () => ({
          basename: u,
          navigator: o,
          static: s,
          unstable_useTransitions: l,
          future: {},
        }),
        [u, o, s, l],
      );
    "string" === typeof r && (r = m(r));
    let {
        pathname: h = "/",
        search: p = "",
        hash: g = "",
        state: y = null,
        key: v = "default",
        unstable_mask: b,
      } = r,
      w = a.useMemo(() => {
        let e = L(h, u);
        return null == e
          ? null
          : {
              location: {
                pathname: e,
                search: p,
                hash: g,
                state: y,
                key: v,
                unstable_mask: b,
              },
              navigationType: i,
            };
      }, [u, h, p, g, y, v, i, b]);
    return (
      d(
        null != w,
        `<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      null == w
        ? null
        : a.createElement(
            ie.Provider,
            { value: f },
            a.createElement(oe.Provider, { children: n, value: w }),
          )
    );
  }
  function Ue(e) {
    let { children: t, location: n } = e;
    return ye(Fe(t), n);
  }
  a.Component;
  function Fe(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let i = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, Fe(e.props.children, i));
        (c(
          e.type === De,
          `[${"string" === typeof e.type ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
        ),
          c(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes.",
          ));
        let o = {
          id: e.props.id || i.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          middleware: e.props.middleware,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (o.children = Fe(e.props.children, i)), n.push(o));
      }),
      n
    );
  }
  var ze = "get",
    Be = "application/x-www-form-urlencoded";
  function qe(e) {
    return "undefined" !== typeof HTMLElement && e instanceof HTMLElement;
  }
  var Ve = null;
  var He = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Je(e) {
    return null == e || He.has(e)
      ? e
      : (d(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Be}"`,
        ),
        null);
  }
  function Qe(e, t) {
    let n, r, a, i, o;
    if (qe((s = e)) && "form" === s.tagName.toLowerCase()) {
      let o = e.getAttribute("action");
      ((r = o ? L(o, t) : null),
        (n = e.getAttribute("method") || ze),
        (a = Je(e.getAttribute("enctype")) || Be),
        (i = new FormData(e)));
    } else if (
      (function (e) {
        return qe(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return qe(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let o = e.form;
      if (null == o)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>',
        );
      let s = e.getAttribute("formaction") || o.getAttribute("action");
      if (
        ((r = s ? L(s, t) : null),
        (n = e.getAttribute("formmethod") || o.getAttribute("method") || ze),
        (a =
          Je(e.getAttribute("formenctype")) ||
          Je(o.getAttribute("enctype")) ||
          Be),
        (i = new FormData(o, e)),
        !(function () {
          if (null === Ve)
            try {
              (new FormData(document.createElement("form"), 0), (Ve = !1));
            } catch (e) {
              Ve = !0;
            }
          return Ve;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? `${t}.` : "";
          (i.append(`${e}x`, "0"), i.append(`${e}y`, "0"));
        } else t && i.append(t, r);
      }
    } else {
      if (qe(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
        );
      ((n = ze), (r = null), (a = Be), (o = e));
    }
    var s;
    return (
      i && "text/plain" === a && ((o = i), (i = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: i, body: o }
    );
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  "undefined" !== typeof window
    ? window
    : "undefined" !== typeof globalThis && globalThis;
  function We(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  Symbol("SingleFetchRedirect");
  function Ke(e, t, n, r) {
    let a =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin,
          )
        : e;
    return (
      n
        ? a.pathname.endsWith("/")
          ? (a.pathname = `${a.pathname}_.${r}`)
          : (a.pathname = `${a.pathname}.${r}`)
        : "/" === a.pathname
          ? (a.pathname = `_root.${r}`)
          : t && "/" === L(a.pathname, t)
            ? (a.pathname = `${t.replace(/\/$/, "")}/_root.${r}`)
            : (a.pathname = `${a.pathname.replace(/\/$/, "")}.${r}`),
      a
    );
  }
  async function $e(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return ((t[e.id] = n), n);
    } catch (n) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`,
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ye(e) {
    return null != e && "string" === typeof e.page;
  }
  function Xe(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function Ge(e, t, n, r, a, i) {
    let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      s = (e, t) =>
        n[t].pathname !== e.pathname ||
        (n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
    return "assets" === i
      ? t.filter((e, t) => o(e, t) || s(e, t))
      : "data" === i
        ? t.filter((t, i) => {
            let l = r.routes[t.route.id];
            if (!l || !l.hasLoader) return !1;
            if (o(t, i) || s(t, i)) return !0;
            if (t.route.shouldRevalidate) {
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(
                  a.pathname + a.search + a.hash,
                  window.origin,
                ),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if ("boolean" === typeof r) return r;
            }
            return !0;
          })
        : [];
  }
  function Ze(e, t) {
    let { includeHydrateFallback: n } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let a = [r.module];
          return (
            r.clientActionModule && (a = a.concat(r.clientActionModule)),
            r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
            n &&
              r.hydrateFallbackModule &&
              (a = a.concat(r.hydrateFallbackModule)),
            r.imports && (a = a.concat(r.imports)),
            a
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  function et(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ye(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let i = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a),
      );
      return (n.has(i) || (n.add(i), e.push({ key: i, link: a })), e);
    }, []);
  }
  function tt(e, t) {
    return "lazy" === e.mode && !0 === t;
  }
  function nt() {
    let e = a.useContext(G);
    return (
      We(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element",
      ),
      e
    );
  }
  function rt() {
    let e = a.useContext(Z);
    return (
      We(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element",
      ),
      e
    );
  }
  var at = a.createContext(void 0);
  function it() {
    let e = a.useContext(at);
    return (
      We(e, "You must render this element inside a <HydratedRouter> element"),
      e
    );
  }
  function ot(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function st(e, t, n) {
    if (n && !dt) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  at.displayName = "FrameworkContext";
  function lt(e) {
    let { page: t, ...n } = e,
      { router: r } = nt(),
      i = a.useMemo(
        () => v(r.routes, t, r.basename),
        [r.routes, t, r.basename],
      );
    return i ? a.createElement(ct, { page: t, matches: i, ...n }) : null;
  }
  function ut(e) {
    let { manifest: t, routeModules: n } = it(),
      [r, i] = a.useState([]);
    return (
      a.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return et(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await $e(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  }),
                )
              )
                .flat(1)
                .filter(Xe)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? { ...e, rel: "prefetch", as: "style" }
                    : { ...e, rel: "prefetch" },
                ),
            );
          })(e, t, n).then((e) => {
            r || i(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      r
    );
  }
  function ct(e) {
    let { page: t, matches: n, ...r } = e,
      i = de(),
      { future: o, manifest: s, routeModules: l } = it(),
      { basename: u } = nt(),
      { loaderData: c, matches: d } = rt(),
      f = a.useMemo(() => Ge(t, n, d, s, i, "data"), [t, n, d, s, i]),
      h = a.useMemo(() => Ge(t, n, d, s, i, "assets"), [t, n, d, s, i]),
      p = a.useMemo(() => {
        if (t === i.pathname + i.search + i.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            let n = s.routes[t.route.id];
            n &&
              n.hasLoader &&
              ((!f.some((e) => e.route.id === t.route.id) &&
                t.route.id in c &&
                l[t.route.id]?.shouldRevalidate) ||
              n.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = Ke(t, u, o.unstable_trailingSlashAwareDataRequests, "data");
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(","),
            ),
          [a.pathname + a.search]
        );
      }, [u, o.unstable_trailingSlashAwareDataRequests, c, i, s, f, n, t, l]),
      m = a.useMemo(() => Ze(h, s), [h, s]),
      g = ut(h);
    return a.createElement(
      a.Fragment,
      null,
      p.map((e) =>
        a.createElement("link", {
          key: e,
          rel: "prefetch",
          as: "fetch",
          href: e,
          ...r,
        }),
      ),
      m.map((e) =>
        a.createElement("link", {
          key: e,
          rel: "modulepreload",
          href: e,
          ...r,
        }),
      ),
      g.map((e) => {
        let { key: t, link: n } = e;
        return a.createElement("link", {
          key: t,
          nonce: r.nonce,
          ...n,
          crossOrigin: n.crossOrigin ?? r.crossOrigin,
        });
      }),
    );
  }
  var dt = !1;
  function ft(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: r,
        renderMeta: i,
        routeDiscovery: o,
        ssr: s,
      } = it(),
      { router: l, static: u, staticContext: c } = nt(),
      { matches: d } = rt(),
      f = te(),
      h = tt(o, s);
    i && (i.didRenderScripts = !0);
    let p = st(d, null, r);
    a.useEffect(() => {
      dt = !0;
    }, []);
    let m = a.useMemo(() => {
        if (f) return null;
        let r = c
            ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
            : " ",
          i = u
            ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${h ? "" : `import ${JSON.stringify(t.url)}`};\n${p
                .map((e, n) => {
                  let r = `route${n}`,
                    a = t.routes[e.route.id];
                  We(a, `Route ${e.route.id} not found in manifest`);
                  let {
                      clientActionModule: i,
                      clientLoaderModule: o,
                      clientMiddlewareModule: s,
                      hydrateFallbackModule: l,
                      module: u,
                    } = a,
                    c = [
                      ...(i
                        ? [{ module: i, varName: `${r}_clientAction` }]
                        : []),
                      ...(o
                        ? [{ module: o, varName: `${r}_clientLoader` }]
                        : []),
                      ...(s
                        ? [{ module: s, varName: `${r}_clientMiddleware` }]
                        : []),
                      ...(l
                        ? [{ module: l, varName: `${r}_HydrateFallback` }]
                        : []),
                      { module: u, varName: `${r}_main` },
                    ];
                  return 1 === c.length
                    ? `import * as ${r} from ${JSON.stringify(u)};`
                    : [
                        c
                          .map(
                            (e) =>
                              `import * as ${e.varName} from "${e.module}";`,
                          )
                          .join("\n"),
                        `const ${r} = {${c.map((e) => `...${e.varName}`).join(",")}};`,
                      ].join("\n");
                })
                .join("\n")}\n  ${
                h
                  ? `window.__reactRouterManifest = ${JSON.stringify(
                      (function (e, t) {
                        let { sri: n, ...r } = e,
                          a = new Set(t.state.matches.map((e) => e.route.id)),
                          i = t.state.location.pathname
                            .split("/")
                            .filter(Boolean),
                          o = ["/"];
                        for (i.pop(); i.length > 0; )
                          (o.push(`/${i.join("/")}`), i.pop());
                        o.forEach((e) => {
                          let n = v(t.routes, e, t.basename);
                          n && n.forEach((e) => a.add(e.route.id));
                        });
                        let s = [...a].reduce(
                          (e, t) => Object.assign(e, { [t]: r.routes[t] }),
                          {},
                        );
                        return { ...r, routes: s, sri: !!n || void 0 };
                      })(t, l),
                      null,
                      2,
                    )};`
                  : ""
              }\n  window.__reactRouterRouteModules = {${p.map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`
            : " ";
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: r },
            type: void 0,
          }),
          a.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: i },
            type: "module",
            async: !0,
          }),
        );
      }, []),
      g =
        dt || f
          ? []
          : ((y = t.entry.imports.concat(
              Ze(p, t, { includeHydrateFallback: !0 }),
            )),
            [...new Set(y)]);
    var y;
    let b = "object" === typeof t.sri ? t.sri : {};
    return (
      Oe(
        !f,
        "The <Scripts /> element is a no-op when using RSC and can be safely removed.",
      ),
      dt || f
        ? null
        : a.createElement(
            a.Fragment,
            null,
            "object" === typeof t.sri
              ? a.createElement("script", {
                  ...e,
                  "rr-importmap": "",
                  type: "importmap",
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({ integrity: b }),
                  },
                })
              : null,
            h
              ? null
              : a.createElement("link", {
                  rel: "modulepreload",
                  href: t.url,
                  crossOrigin: e.crossOrigin,
                  integrity: b[t.url],
                  suppressHydrationWarning: !0,
                }),
            a.createElement("link", {
              rel: "modulepreload",
              href: t.entry.module,
              crossOrigin: e.crossOrigin,
              integrity: b[t.entry.module],
              suppressHydrationWarning: !0,
            }),
            g.map((t) =>
              a.createElement("link", {
                key: t,
                rel: "modulepreload",
                href: t,
                crossOrigin: e.crossOrigin,
                integrity: b[t],
                suppressHydrationWarning: !0,
              }),
            ),
            m,
          )
    );
  }
  function ht() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  a.Component;
  function pt(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let r,
      i = a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      ',
        },
      });
    if (Q(t))
      return a.createElement(
        mt,
        { title: "Unhandled Thrown Response!" },
        a.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText,
        ),
        i,
      );
    if (t instanceof Error) r = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
            ? t.toString()
            : JSON.stringify(t);
      r = new Error(e);
    }
    return a.createElement(
      mt,
      { title: "Application Error!", isOutsideRemixApp: n },
      a.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error",
      ),
      a.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        r.stack,
      ),
      i,
    );
  }
  function mt(e) {
    let { title: t, renderScripts: n, isOutsideRemixApp: r, children: i } = e,
      { routeModules: o } = it();
    return o.root?.Layout && !r
      ? i
      : a.createElement(
          "html",
          { lang: "en" },
          a.createElement(
            "head",
            null,
            a.createElement("meta", { charSet: "utf-8" }),
            a.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            a.createElement("title", null, t),
          ),
          a.createElement(
            "body",
            null,
            a.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              i,
              n ? a.createElement(ft, null) : null,
            ),
          ),
        );
  }
  var gt =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    gt && (window.__reactRouterVersion = "7.13.2");
  } catch (im) {}
  function yt(e) {
    let { basename: t, children: n, unstable_useTransitions: r, window: i } = e,
      o = a.useRef();
    null == o.current && (o.current = u({ window: i, v5Compat: !0 }));
    let s = o.current,
      [l, c] = a.useState({ action: s.action, location: s.location }),
      d = a.useCallback(
        (e) => {
          !1 === r ? c(e) : a.startTransition(() => c(e));
        },
        [r],
      );
    return (
      a.useLayoutEffect(() => s.listen(d), [s, d]),
      a.createElement(Me, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        unstable_useTransitions: r,
      })
    );
  }
  var vt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    bt = a.forwardRef(function (e, t) {
      let {
          onClick: n,
          discover: r = "render",
          prefetch: i = "none",
          relative: o,
          reloadDocument: s,
          replace: l,
          unstable_mask: u,
          state: d,
          target: f,
          to: h,
          preventScrollReset: m,
          viewTransition: g,
          unstable_defaultShouldRevalidate: y,
          ...v
        } = e,
        {
          basename: b,
          navigator: w,
          unstable_useTransitions: S,
        } = a.useContext(ie),
        k = "string" === typeof h && vt.test(h),
        E = $(h, b);
      h = E.to;
      let _ = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          c(
            ce(),
            "useHref() may be used only in the context of a <Router> component.",
          );
          let { basename: n, navigator: r } = a.useContext(ie),
            { hash: i, pathname: o, search: s } = ge(e, { relative: t }),
            l = o;
          return (
            "/" !== n && (l = "/" === o ? n : B([n, o])),
            r.createHref({ pathname: l, search: s, hash: i })
          );
        })(h, { relative: o }),
        C = de(),
        A = null;
      if (u) {
        let e = z(u, [], C.unstable_mask ? C.unstable_mask.pathname : "/", !0);
        ("/" !== b &&
          (e.pathname = "/" === e.pathname ? b : B([b, e.pathname])),
          (A = w.createHref(e)));
      }
      let [x, R, I] = (function (e, t) {
          let n = a.useContext(at),
            [r, i] = a.useState(!1),
            [o, s] = a.useState(!1),
            {
              onFocus: l,
              onBlur: u,
              onMouseEnter: c,
              onMouseLeave: d,
              onTouchStart: f,
            } = t,
            h = a.useRef(null);
          (a.useEffect(() => {
            if (("render" === e && s(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    s(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                h.current && e.observe(h.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            a.useEffect(() => {
              if (r) {
                let e = setTimeout(() => {
                  s(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [r]));
          let p = () => {
              i(!0);
            },
            m = () => {
              (i(!1), s(!1));
            };
          return n
            ? "intent" !== e
              ? [o, h, {}]
              : [
                  o,
                  h,
                  {
                    onFocus: ot(l, p),
                    onBlur: ot(u, m),
                    onMouseEnter: ot(c, p),
                    onMouseLeave: ot(d, m),
                    onTouchStart: ot(f, p),
                  },
                ]
            : [!1, h, {}];
        })(i, v),
        T = (function (e) {
          let {
              target: t,
              replace: n,
              unstable_mask: r,
              state: i,
              preventScrollReset: o,
              relative: s,
              viewTransition: l,
              unstable_defaultShouldRevalidate: u,
              unstable_useTransitions: c,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            d = pe(),
            f = de(),
            h = ge(e, { relative: s });
          return a.useCallback(
            (m) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(m, t)
              ) {
                m.preventDefault();
                let t = void 0 !== n ? n : p(f) === p(h),
                  g = () =>
                    d(e, {
                      replace: t,
                      unstable_mask: r,
                      state: i,
                      preventScrollReset: o,
                      relative: s,
                      viewTransition: l,
                      unstable_defaultShouldRevalidate: u,
                    });
                c ? a.startTransition(() => g()) : g();
              }
            },
            [f, d, h, n, r, i, t, e, o, s, l, u, c],
          );
        })(h, {
          replace: l,
          unstable_mask: u,
          state: d,
          target: f,
          preventScrollReset: m,
          relative: o,
          viewTransition: g,
          unstable_defaultShouldRevalidate: y,
          unstable_useTransitions: S,
        });
      let P = !(E.isExternal || s),
        N = a.createElement("a", {
          ...v,
          ...I,
          href: (P ? A : void 0) || E.absoluteURL || _,
          onClick: P
            ? function (e) {
                (n && n(e), e.defaultPrevented || T(e));
              }
            : n,
          ref: ht(t, R),
          target: f,
          "data-discover": k || "render" !== r ? void 0 : "true",
        });
      return x && !k
        ? a.createElement(a.Fragment, null, N, a.createElement(lt, { page: _ }))
        : N;
    });
  bt.displayName = "Link";
  var wt = a.forwardRef(function (e, t) {
    let {
        "aria-current": n = "page",
        caseSensitive: r = !1,
        className: i = "",
        end: o = !1,
        style: s,
        to: l,
        viewTransition: u,
        children: d,
        ...f
      } = e,
      h = ge(l, { relative: f.relative }),
      p = de(),
      m = a.useContext(Z),
      { navigator: g, basename: y } = a.useContext(ie),
      v =
        null != m &&
        (function (e) {
          let { relative: t } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = a.useContext(ne);
          c(
            null != n,
            "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
          );
          let { basename: r } = Et("useViewTransitionState"),
            i = ge(e, { relative: t });
          if (!n.isTransitioning) return !1;
          let o =
              L(n.currentLocation.pathname, r) || n.currentLocation.pathname,
            s = L(n.nextLocation.pathname, r) || n.nextLocation.pathname;
          return null != P(i.pathname, s) || null != P(i.pathname, o);
        })(h) &&
        !0 === u,
      b = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
      w = p.pathname,
      S =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    (r ||
      ((w = w.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (b = b.toLowerCase())),
      S && y && (S = L(S, y) || S));
    const k = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length;
    let E,
      _ = w === b || (!o && w.startsWith(b) && "/" === w.charAt(k)),
      C =
        null != S &&
        (S === b || (!o && S.startsWith(b) && "/" === S.charAt(b.length))),
      A = { isActive: _, isPending: C, isTransitioning: v },
      x = _ ? n : void 0;
    E =
      "function" === typeof i
        ? i(A)
        : [
            i,
            _ ? "active" : null,
            C ? "pending" : null,
            v ? "transitioning" : null,
          ]
            .filter(Boolean)
            .join(" ");
    let R = "function" === typeof s ? s(A) : s;
    return a.createElement(
      bt,
      {
        ...f,
        "aria-current": x,
        className: E,
        ref: t,
        style: R,
        to: l,
        viewTransition: u,
      },
      "function" === typeof d ? d(A) : d,
    );
  });
  wt.displayName = "NavLink";
  var St = a.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: r,
        navigate: i,
        reloadDocument: o,
        replace: s,
        state: l,
        method: u = ze,
        action: d,
        onSubmit: f,
        relative: h,
        preventScrollReset: m,
        viewTransition: g,
        unstable_defaultShouldRevalidate: y,
        ...v
      } = e,
      { unstable_useTransitions: b } = a.useContext(ie),
      w = At(),
      S = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = a.useContext(ie),
          r = a.useContext(se);
        c(r, "useFormAction must be used inside a RouteContext");
        let [i] = r.matches.slice(-1),
          o = { ...ge(e || ".", { relative: t }) },
          s = de();
        if (null == e) {
          o.search = s.search;
          let e = new URLSearchParams(o.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            (e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t)));
            let n = e.toString();
            o.search = n ? `?${n}` : "";
          }
        }
        (e && "." !== e) ||
          !i.route.index ||
          (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (o.pathname = "/" === o.pathname ? n : B([n, o.pathname]));
        return p(o);
      })(d, { relative: h }),
      k = "get" === u.toLowerCase() ? "get" : "post",
      E = "string" === typeof d && vt.test(d);
    return a.createElement("form", {
      ref: t,
      method: k,
      action: S,
      onSubmit: o
        ? f
        : (e) => {
            if ((f && f(e), e.defaultPrevented)) return;
            e.preventDefault();
            let t = e.nativeEvent.submitter,
              n = t?.getAttribute("formmethod") || u,
              o = () =>
                w(t || e.currentTarget, {
                  fetcherKey: r,
                  method: n,
                  navigate: i,
                  replace: s,
                  state: l,
                  relative: h,
                  preventScrollReset: m,
                  viewTransition: g,
                  unstable_defaultShouldRevalidate: y,
                });
            b && !1 !== i ? a.startTransition(() => o()) : o();
          },
      ...v,
      "data-discover": E || "render" !== n ? void 0 : "true",
    });
  });
  function kt(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Et(e) {
    let t = a.useContext(G);
    return (c(t, kt(e)), t);
  }
  St.displayName = "Form";
  var _t = 0,
    Ct = () => `__${String(++_t)}__`;
  function At() {
    let { router: e } = Et("useSubmit"),
      { basename: t } = a.useContext(ie),
      n = Re("useRouteId"),
      r = e.fetch,
      i = e.navigate;
    return a.useCallback(
      async function (e) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: o, method: s, encType: l, formData: u, body: c } = Qe(e, t);
        if (!1 === a.navigate) {
          let e = a.fetcherKey || Ct();
          await r(e, n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: c,
            formMethod: a.method || s,
            formEncType: a.encType || l,
            flushSync: a.flushSync,
          });
        } else
          await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: c,
            formMethod: a.method || s,
            formEncType: a.encType || l,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [r, i, t, n],
    );
  }
  var xt = n(237);
  function Rt(e) {
    e();
  }
  var It = { notify() {}, get: () => [] };
  function Tt(e, t) {
    let n,
      r = It,
      a = 0,
      i = !1;
    function o() {
      u.onStateChange && u.onStateChange();
    }
    function s() {
      (a++,
        n ||
          ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
          (r = (function () {
            let e = null,
              t = null;
            return {
              clear() {
                ((e = null), (t = null));
              },
              notify() {
                Rt(() => {
                  let t = e;
                  for (; t; ) (t.callback(), (t = t.next));
                });
              },
              get() {
                const t = [];
                let n = e;
                for (; n; ) (t.push(n), (n = n.next));
                return t;
              },
              subscribe(n) {
                let r = !0;
                const a = (t = { callback: n, next: null, prev: t });
                return (
                  a.prev ? (a.prev.next = a) : (e = a),
                  function () {
                    r &&
                      null !== e &&
                      ((r = !1),
                      a.next ? (a.next.prev = a.prev) : (t = a.prev),
                      a.prev ? (a.prev.next = a.next) : (e = a.next));
                  }
                );
              },
            };
          })())));
    }
    function l() {
      (a--, n && 0 === a && (n(), (n = void 0), r.clear(), (r = It)));
    }
    const u = {
      addNestedSub: function (e) {
        s();
        const t = r.subscribe(e);
        let n = !1;
        return () => {
          n || ((n = !0), t(), l());
        };
      },
      notifyNestedSubs: function () {
        r.notify();
      },
      handleChangeWrapper: o,
      isSubscribed: function () {
        return i;
      },
      trySubscribe: function () {
        i || ((i = !0), s());
      },
      tryUnsubscribe: function () {
        i && ((i = !1), l());
      },
      getListeners: () => r,
    };
    return u;
  }
  var Pt = (() =>
      !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ))(),
    Nt = (() =>
      "undefined" !== typeof navigator &&
      "ReactNative" === navigator.product)(),
    Ot = (() => (Pt || Nt ? a.useLayoutEffect : a.useEffect))();
  function Lt(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
  }
  function jt(e, t) {
    if (Lt(e, t)) return !0;
    if (
      "object" !== typeof e ||
      null === e ||
      "object" !== typeof t ||
      null === t
    )
      return !1;
    const n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let a = 0; a < n.length; a++)
      if (
        !Object.prototype.hasOwnProperty.call(t, n[a]) ||
        !Lt(e[n[a]], t[n[a]])
      )
        return !1;
    return !0;
  }
  (Object.defineProperty,
    Object.getOwnPropertyNames,
    Object.getOwnPropertySymbols,
    Object.getOwnPropertyDescriptor,
    Object.getPrototypeOf,
    Object.prototype);
  var Dt = Symbol.for("react-redux-context"),
    Mt = "undefined" !== typeof globalThis ? globalThis : {};
  function Ut() {
    if (!a.createContext) return {};
    const e = (Mt[Dt] ??= new Map());
    let t = e.get(a.createContext);
    return (t || ((t = a.createContext(null)), e.set(a.createContext, t)), t);
  }
  var Ft = Ut();
  var zt = function (e) {
    const { children: t, context: n, serverState: r, store: i } = e,
      o = a.useMemo(() => {
        const e = Tt(i);
        return {
          store: i,
          subscription: e,
          getServerState: r ? () => r : void 0,
        };
      }, [i, r]),
      s = a.useMemo(() => i.getState(), [i]);
    Ot(() => {
      const { subscription: e } = o;
      return (
        (e.onStateChange = e.notifyNestedSubs),
        e.trySubscribe(),
        s !== i.getState() && e.notifyNestedSubs(),
        () => {
          (e.tryUnsubscribe(), (e.onStateChange = void 0));
        }
      );
    }, [o, s]);
    const l = n || Ft;
    return a.createElement(l.Provider, { value: o }, t);
  };
  function Bt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft;
    return function () {
      return a.useContext(e);
    };
  }
  var qt = Bt();
  function Vt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft;
    const t = e === Ft ? qt : Bt(e),
      n = () => {
        const { store: e } = t();
        return e;
      };
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var Ht = Vt();
  function Jt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft;
    const t = e === Ft ? Ht : Vt(e),
      n = () => t().dispatch;
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var Qt = Jt(),
    Wt = (e, t) => e === t;
  function Kt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft;
    const t = e === Ft ? qt : Bt(e),
      n = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { equalityFn: r = Wt } =
          "function" === typeof n ? { equalityFn: n } : n;
        const i = t(),
          { store: o, subscription: s, getServerState: l } = i,
          u =
            (a.useRef(!0),
            a.useCallback({ [e.name]: (t) => e(t) }[e.name], [e])),
          c = (0, xt.useSyncExternalStoreWithSelector)(
            s.addNestedSub,
            o.getState,
            l || o.getState,
            u,
            r,
          );
        return (a.useDebugValue(c), c);
      };
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var $t = Kt(),
    Yt = Rt;
  var Xt = n(579);
  const Gt = () => {
    const [e, t] = (0, a.useState)(!1),
      n = (0, a.useRef)(null),
      r = (e) => {
        n.current && !n.current.contains(e.target) && t(!1);
      };
    return (
      (0, a.useEffect)(
        () => (
          document.addEventListener("mousedown", r),
          () => {
            document.removeEventListener("mousedown", r);
          }
        ),
        [],
      ),
      (0, Xt.jsxs)("div", {
        className: "flex-horizontal-container-raw justify-content-center",
        children: [
          (0, Xt.jsx)("button", {
            className: "more-info-icon",
            onClick: () => t(!e),
            children: (0, Xt.jsx)("img", {
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAa5JREFUSInd1btrlUEQBfBfomghPpKQwgeC2gUxll5JYSMWsfEV7MVYqaignb2F/4SdSPBBCkUsvSK+rSw0IiKxEUnAKIq5Fjsf9xru7v0EGz2wLMyZmbOPmV3+dwxiEjcxg4UYM2GbxEApQV/GvhIXcBZr8QZNzAa/HruxDXO4jEv4XmfVG/EAi7iKHQXfUVwL32bEFjGEV5jHoTqrCezHZ7zGcM6pD/fwBbsyPqdxKsM1pPu5kxM4ghaOZfih4FvS5XfDieAPdiOf4Bn6cyvAyRg59OMFHi0ltoRybvsVRqWdlHAmcm3tNB4N40ghcA1+4FYPge2Ra4L2cVTl9b4QOC+V7+oeAu9i3tQp0OoRVOFnDZ/fmrcS+BDz5ppCJVQ5ZjsFHkq72PsXBPbF3FxKPMZz+TKd1u6D6YzPMrzE027k4Qg+ngkex5UY4xmfqtEmMry7Urs3cg4FNPAVtxWadVB67OZw4A8FrkurH+vluEG6oEVMYWdNgRF8lP6O5ZUx9+GswHmcwzq8xX2p9D4VRPZIVbRKOq6eGJAu/Yb01i9oV1K38Q0X6yT+d/ALs4xiG2YhN2QAAAAASUVORK5CYII=",
              alt: "info",
            }),
          }),
          e &&
            (0, Xt.jsxs)("div", {
              ref: n,
              className: "info-div",
              children: [
                (0, Xt.jsx)("h5", {
                  children:
                    "\u0421\u043b\u0435\u0434\u0432\u0430\u0439\u0442\u0435 \u0442\u0435\u0437\u0438 \u0441\u0442\u044a\u043f\u043a\u0438:",
                }),
                (0, Xt.jsx)("ul", {
                  children: (0, Xt.jsxs)("ol", {
                    children: [
                      (0, Xt.jsx)("li", {
                        children:
                          "\u0417\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f.",
                      }),
                      (0, Xt.jsx)("li", {
                        children:
                          "\u0417\u0430\u043f\u0430\u0437\u0435\u0442\u0435 \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435\u0442\u043e.",
                      }),
                      (0, Xt.jsx)("li", {
                        children:
                          "\u0414\u0430\u0439\u0442\u0435 \u0438\u043c\u0435 \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f.",
                      }),
                      (0, Xt.jsx)("li", {
                        children:
                          "\u0417\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430.",
                      }),
                      (0, Xt.jsx)("li", {
                        children:
                          "\u041a\u0430\u0447\u0435\u0442\u0435 \u0441\u043d\u0438\u043c\u043a\u0430.",
                      }),
                      (0, Xt.jsx)("li", {
                        children:
                          "\u0417\u0430\u043f\u0430\u0437\u0435\u0442\u0435 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      })
    );
  };
  var Zt = Symbol.for("immer-nothing"),
    en = Symbol.for("immer-draftable"),
    tn = Symbol.for("immer-state");
  function nn(e) {
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
    );
  }
  var rn = Object,
    an = rn.getPrototypeOf,
    on = "constructor",
    sn = "prototype",
    ln = "configurable",
    un = "enumerable",
    cn = "writable",
    dn = "value",
    fn = (e) => !!e && !!e[tn];
  function hn(e) {
    return (
      !!e && (gn(e) || kn(e) || !!e[en] || !!e[on]?.[en] || En(e) || _n(e))
    );
  }
  var pn = rn[sn][on].toString(),
    mn = new WeakMap();
  function gn(e) {
    if (!e || !Cn(e)) return !1;
    const t = an(e);
    if (null === t || t === rn[sn]) return !0;
    const n = rn.hasOwnProperty.call(t, on) && t[on];
    if (n === Object) return !0;
    if (!An(n)) return !1;
    let r = mn.get(n);
    return (
      void 0 === r && ((r = Function.toString.call(n)), mn.set(n, r)),
      r === pn
    );
  }
  function yn(e, t) {
    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (0 === vn(e)) {
      (n ? Reflect.ownKeys(e) : rn.keys(e)).forEach((n) => {
        t(n, e[n], e);
      });
    } else e.forEach((n, r) => t(r, n, e));
  }
  function vn(e) {
    const t = e[tn];
    return t ? t.type_ : kn(e) ? 1 : En(e) ? 2 : _n(e) ? 3 : 0;
  }
  var bn = function (e, t) {
      return 2 ===
        (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vn(e))
        ? e.has(t)
        : rn[sn].hasOwnProperty.call(e, t);
    },
    wn = function (e, t) {
      return 2 ===
        (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vn(e))
        ? e.get(t)
        : e[t];
    },
    Sn = function (e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vn(e);
      2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
    };
  var kn = Array.isArray,
    En = (e) => e instanceof Map,
    _n = (e) => e instanceof Set,
    Cn = (e) => "object" === typeof e,
    An = (e) => "function" === typeof e,
    xn = (e) => "boolean" === typeof e;
  var Rn = (e) => (Cn(e) ? e?.[tn] : null),
    In = (e) => e.copy_ || e.base_,
    Tn = (e) => (e.modified_ ? e.copy_ : e.base_);
  function Pn(e, t) {
    if (En(e)) return new Map(e);
    if (_n(e)) return new Set(e);
    if (kn(e)) return Array[sn].slice.call(e);
    const n = gn(e);
    if (!0 === t || ("class_only" === t && !n)) {
      const t = rn.getOwnPropertyDescriptors(e);
      delete t[tn];
      let n = Reflect.ownKeys(t);
      for (let r = 0; r < n.length; r++) {
        const a = n[r],
          i = t[a];
        (!1 === i[cn] && ((i[cn] = !0), (i[ln] = !0)),
          (i.get || i.set) &&
            (t[a] = { [ln]: !0, [cn]: !0, [un]: i[un], [dn]: e[a] }));
      }
      return rn.create(an(e), t);
    }
    {
      const t = an(e);
      if (null !== t && n) return { ...e };
      const r = rn.create(t);
      return rn.assign(r, e);
    }
  }
  function Nn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
      Ln(e) ||
        fn(e) ||
        !hn(e) ||
        (vn(e) > 1 &&
          rn.defineProperties(e, { set: On, add: On, clear: On, delete: On }),
        rn.freeze(e),
        t &&
          yn(
            e,
            (e, t) => {
              Nn(t, !0);
            },
            !1,
          )),
      e
    );
  }
  var On = {
    [dn]: function () {
      nn(2);
    },
  };
  function Ln(e) {
    return null === e || !Cn(e) || rn.isFrozen(e);
  }
  var jn = "MapSet",
    Dn = "Patches",
    Mn = "ArrayMethods",
    Un = {};
  function Fn(e) {
    const t = Un[e];
    return (t || nn(0), t);
  }
  var zn,
    Bn = (e) => !!Un[e];
  function qn(e, t) {
    Un[e] || (Un[e] = t);
  }
  var Vn = () => zn;
  function Hn(e, t) {
    t &&
      ((e.patchPlugin_ = Fn(Dn)),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function Jn(e) {
    (Qn(e), e.drafts_.forEach(Kn), (e.drafts_ = null));
  }
  function Qn(e) {
    e === zn && (zn = e.parent_);
  }
  var Wn = (e) =>
    (zn = {
      drafts_: [],
      parent_: zn,
      immer_: e,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
      handledSet_: new Set(),
      processedForPatches_: new Set(),
      mapSetPlugin_: Bn(jn) ? Fn(jn) : void 0,
      arrayMethodsPlugin_: Bn(Mn) ? Fn(Mn) : void 0,
    });
  function Kn(e) {
    const t = e[tn];
    0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
  }
  function $n(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    if (void 0 !== e && e !== n) {
      (n[tn].modified_ && (Jn(t), nn(4)), hn(e) && (e = Yn(t, e)));
      const { patchPlugin_: r } = t;
      r && r.generateReplacementPatches_(n[tn].base_, e, t);
    } else e = Yn(t, n);
    return (
      (function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Nn(t, n);
      })(t, e, !0),
      Jn(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== Zt ? e : void 0
    );
  }
  function Yn(e, t) {
    if (Ln(t)) return t;
    const n = t[tn];
    if (!n) {
      return rr(t, e.handledSet_, e);
    }
    if (!Gn(n, e)) return t;
    if (!n.modified_) return n.base_;
    if (!n.finalized_) {
      const { callbacks_: t } = n;
      if (t)
        for (; t.length > 0; ) {
          t.pop()(e);
        }
      tr(n, e);
    }
    return n.copy_;
  }
  function Xn(e) {
    ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
  }
  var Gn = (e, t) => e.scope_ === t,
    Zn = [];
  function er(e, t, n, r) {
    const a = In(e),
      i = e.type_;
    if (void 0 !== r) {
      if (wn(a, r, i) === t) return void Sn(a, r, n, i);
    }
    if (!e.draftLocations_) {
      const t = (e.draftLocations_ = new Map());
      yn(a, (e, n) => {
        if (fn(n)) {
          const r = t.get(n) || [];
          (r.push(e), t.set(n, r));
        }
      });
    }
    const o = e.draftLocations_.get(t) ?? Zn;
    for (const s of o) Sn(a, s, n, i);
  }
  function tr(e, t) {
    if (
      e.modified_ &&
      !e.finalized_ &&
      (3 === e.type_ ||
        (1 === e.type_ && e.allIndicesReassigned_) ||
        (e.assigned_?.size ?? 0) > 0)
    ) {
      const { patchPlugin_: n } = t;
      if (n) {
        const r = n.getPath(e);
        r && n.generatePatches_(e, r, t);
      }
      Xn(e);
    }
  }
  function nr(e, t, n) {
    const { scope_: r } = e;
    if (fn(n)) {
      const a = n[tn];
      Gn(a, r) &&
        a.callbacks_.push(function () {
          ur(e);
          const r = Tn(a);
          er(e, n, r, t);
        });
    } else
      hn(n) &&
        e.callbacks_.push(function () {
          const a = In(e);
          3 === e.type_
            ? a.has(n) && rr(n, r.handledSet_, r)
            : wn(a, t, e.type_) === n &&
              r.drafts_.length > 1 &&
              !0 === (e.assigned_.get(t) ?? !1) &&
              e.copy_ &&
              rr(wn(e.copy_, t, e.type_), r.handledSet_, r);
        });
  }
  function rr(e, t, n) {
    return (
      (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
        fn(e) ||
        t.has(e) ||
        !hn(e) ||
        Ln(e) ||
        (t.add(e),
        yn(e, (r, a) => {
          if (fn(a)) {
            const t = a[tn];
            if (Gn(t, n)) {
              const n = Tn(t);
              (Sn(e, r, n, e.type_), Xn(t));
            }
          } else hn(a) && rr(a, t, n);
        })),
      e
    );
  }
  var ar = {
      get(e, t) {
        if (t === tn) return e;
        let n = e.scope_.arrayMethodsPlugin_;
        const r = 1 === e.type_ && "string" === typeof t;
        if (r && n?.isArrayOperationMethod(t))
          return n.createMethodInterceptor(e, t);
        const a = In(e);
        if (!bn(a, t, e.type_))
          return (function (e, t, n) {
            const r = sr(t, n);
            return r ? (dn in r ? r[dn] : r.get?.call(e.draft_)) : void 0;
          })(e, a, t);
        const i = a[t];
        if (e.finalized_ || !hn(i)) return i;
        if (
          r &&
          e.operationMethod &&
          n?.isMutatingArrayMethod(e.operationMethod) &&
          (function (e) {
            const t = +e;
            return Number.isInteger(t) && String(t) === e;
          })(t)
        )
          return i;
        if (i === or(e.base_, t)) {
          ur(e);
          const n = 1 === e.type_ ? +t : t,
            r = cr(e.scope_, i, e, n);
          return (e.copy_[n] = r);
        }
        return i;
      },
      has: (e, t) => t in In(e),
      ownKeys: (e) => Reflect.ownKeys(In(e)),
      set(e, t, n) {
        const r = sr(In(e), t);
        if (r?.set) return (r.set.call(e.draft_, n), !0);
        if (!e.modified_) {
          const r = or(In(e), t),
            o = r?.[tn];
          if (o && o.base_ === n)
            return ((e.copy_[t] = n), e.assigned_.set(t, !1), !0);
          if (
            ((a = n) === (i = r)
              ? 0 !== a || 1 / a === 1 / i
              : a !== a && i !== i) &&
            (void 0 !== n || bn(e.base_, t, e.type_))
          )
            return !0;
          (ur(e), lr(e));
        }
        var a, i;
        return (
          (e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
            (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = n), e.assigned_.set(t, !0), nr(e, t, n)),
          !0
        );
      },
      deleteProperty: (e, t) => (
        ur(e),
        void 0 !== or(e.base_, t) || t in e.base_
          ? (e.assigned_.set(t, !1), lr(e))
          : e.assigned_.delete(t),
        e.copy_ && delete e.copy_[t],
        !0
      ),
      getOwnPropertyDescriptor(e, t) {
        const n = In(e),
          r = Reflect.getOwnPropertyDescriptor(n, t);
        return r
          ? {
              [cn]: !0,
              [ln]: 1 !== e.type_ || "length" !== t,
              [un]: r[un],
              [dn]: n[t],
            }
          : r;
      },
      defineProperty() {
        nn(11);
      },
      getPrototypeOf: (e) => an(e.base_),
      setPrototypeOf() {
        nn(12);
      },
    },
    ir = {};
  for (let om in ar) {
    let e = ar[om];
    ir[om] = function () {
      const t = arguments;
      return ((t[0] = t[0][0]), e.apply(this, t));
    };
  }
  function or(e, t) {
    const n = e[tn];
    return (n ? In(n) : e)[t];
  }
  function sr(e, t) {
    if (!(t in e)) return;
    let n = an(e);
    for (; n; ) {
      const e = Object.getOwnPropertyDescriptor(n, t);
      if (e) return e;
      n = an(n);
    }
  }
  function lr(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && lr(e.parent_));
  }
  function ur(e) {
    e.copy_ ||
      ((e.assigned_ = new Map()),
      (e.copy_ = Pn(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
  }
  ((ir.deleteProperty = function (e, t) {
    return ir.set.call(this, e, t, void 0);
  }),
    (ir.set = function (e, t, n) {
      return ar.set.call(this, e[0], t, n, e[0]);
    }));
  function cr(e, t, n, r) {
    const [a, i] = En(t)
      ? Fn(jn).proxyMap_(t, n)
      : _n(t)
        ? Fn(jn).proxySet_(t, n)
        : (function (e, t) {
            const n = kn(e),
              r = {
                type_: n ? 1 : 0,
                scope_: t ? t.scope_ : Vn(),
                modified_: !1,
                finalized_: !1,
                assigned_: void 0,
                parent_: t,
                base_: e,
                draft_: null,
                copy_: null,
                revoke_: null,
                isManual_: !1,
                callbacks_: void 0,
              };
            let a = r,
              i = ar;
            n && ((a = [r]), (i = ir));
            const { revoke: o, proxy: s } = Proxy.revocable(a, i);
            return ((r.draft_ = s), (r.revoke_ = o), [s, r]);
          })(t, n);
    return (
      (n?.scope_ ?? Vn()).drafts_.push(a),
      (i.callbacks_ = n?.callbacks_ ?? []),
      (i.key_ = r),
      n && void 0 !== r
        ? (function (e, t, n) {
            e.callbacks_.push(function (r) {
              const a = t;
              if (!a || !Gn(a, r)) return;
              r.mapSetPlugin_?.fixSetContents(a);
              const i = Tn(a);
              (er(e, a.draft_ ?? a, i, n), tr(a, r));
            });
          })(n, i, r)
        : i.callbacks_.push(function (e) {
            e.mapSetPlugin_?.fixSetContents(i);
            const { patchPlugin_: t } = e;
            i.modified_ && t && t.generatePatches_(i, [], e);
          }),
      a
    );
  }
  function dr(e) {
    return (fn(e) || nn(10), fr(e));
  }
  function fr(e) {
    if (!hn(e) || Ln(e)) return e;
    const t = e[tn];
    let n,
      r = !0;
    if (t) {
      if (!t.modified_) return t.base_;
      ((t.finalized_ = !0),
        (n = Pn(e, t.scope_.immer_.useStrictShallowCopy_)),
        (r = t.scope_.immer_.shouldUseStrictIteration()));
    } else n = Pn(e, !0);
    return (
      yn(
        n,
        (e, t) => {
          Sn(n, e, fr(t));
        },
        r,
      ),
      t && (t.finalized_ = !1),
      n
    );
  }
  function hr() {
    const e = "replace",
      t = "add",
      n = "remove";
    function r(e) {
      if (!hn(e)) return e;
      if (kn(e)) return e.map(r);
      if (En(e))
        return new Map(
          Array.from(e.entries()).map((e) => {
            let [t, n] = e;
            return [t, r(n)];
          }),
        );
      if (_n(e)) return new Set(Array.from(e).map(r));
      const t = Object.create(an(e));
      for (const n in e) t[n] = r(e[n]);
      return (bn(e, en) && (t[en] = e[en]), t);
    }
    function a(e) {
      return fn(e) ? r(e) : e;
    }
    qn(Dn, {
      applyPatches_: function (a, i) {
        return (
          i.forEach((i) => {
            const { path: o, op: s } = i;
            let l = a;
            for (let e = 0; e < o.length - 1; e++) {
              const t = vn(l);
              let n = o[e];
              ("string" !== typeof n && "number" !== typeof n && (n = "" + n),
                (0 !== t && 1 !== t) ||
                  ("__proto__" !== n && n !== on) ||
                  nn(19),
                An(l) && n === sn && nn(19),
                (l = wn(l, n)),
                Cn(l) || nn(18, o.join("/")));
            }
            const u = vn(l),
              c = r(i.value),
              d = o[o.length - 1];
            switch (s) {
              case e:
                switch (u) {
                  case 2:
                    return l.set(d, c);
                  case 3:
                    nn(16);
                  default:
                    return (l[d] = c);
                }
              case t:
                switch (u) {
                  case 1:
                    return "-" === d ? l.push(c) : l.splice(d, 0, c);
                  case 2:
                    return l.set(d, c);
                  case 3:
                    return l.add(c);
                  default:
                    return (l[d] = c);
                }
              case n:
                switch (u) {
                  case 1:
                    return l.splice(d, 1);
                  case 2:
                    return l.delete(d);
                  case 3:
                    return l.delete(i.value);
                  default:
                    return delete l[d];
                }
              default:
                nn(17);
            }
          }),
          a
        );
      },
      generatePatches_: function (r, i, o) {
        if (r.scope_.processedForPatches_.has(r)) return;
        r.scope_.processedForPatches_.add(r);
        const { patches_: s, inversePatches_: l } = o;
        switch (r.type_) {
          case 0:
          case 2:
            return (function (r, i, o, s) {
              const { base_: l, copy_: u, type_: c } = r;
              yn(r.assigned_, (r, d) => {
                const f = wn(l, r, c),
                  h = wn(u, r, c),
                  p = d ? (bn(l, r) ? e : t) : n;
                if (f === h && p === e) return;
                const m = i.concat(r);
                (o.push(
                  p === n
                    ? { op: p, path: m }
                    : { op: p, path: m, value: a(h) },
                ),
                  s.push(
                    p === t
                      ? { op: n, path: m }
                      : p === n
                        ? { op: t, path: m, value: a(f) }
                        : { op: e, path: m, value: a(f) },
                  ));
              });
            })(r, i, s, l);
          case 1:
            return (function (r, i, o, s) {
              let { base_: l, assigned_: u } = r,
                c = r.copy_;
              c.length < l.length && (([l, c] = [c, l]), ([o, s] = [s, o]));
              const d = !0 === r.allIndicesReassigned_;
              for (let t = 0; t < l.length; t++) {
                const n = c[t],
                  r = l[t];
                if ((d || u?.get(t.toString())) && n !== r) {
                  const l = n?.[tn];
                  if (l && l.modified_) continue;
                  const u = i.concat([t]);
                  (o.push({ op: e, path: u, value: a(n) }),
                    s.push({ op: e, path: u, value: a(r) }));
                }
              }
              for (let e = l.length; e < c.length; e++) {
                const n = i.concat([e]);
                o.push({ op: t, path: n, value: a(c[e]) });
              }
              for (let e = c.length - 1; l.length <= e; --e) {
                const t = i.concat([e]);
                s.push({ op: n, path: t });
              }
            })(r, i, s, l);
          case 3:
            return (function (e, r, a, i) {
              let { base_: o, copy_: s } = e,
                l = 0;
              (o.forEach((e) => {
                if (!s.has(e)) {
                  const o = r.concat([l]);
                  (a.push({ op: n, path: o, value: e }),
                    i.unshift({ op: t, path: o, value: e }));
                }
                l++;
              }),
                (l = 0),
                s.forEach((e) => {
                  if (!o.has(e)) {
                    const o = r.concat([l]);
                    (a.push({ op: t, path: o, value: e }),
                      i.unshift({ op: n, path: o, value: e }));
                  }
                  l++;
                }));
            })(r, i, s, l);
        }
      },
      generateReplacementPatches_: function (t, n, r) {
        const { patches_: a, inversePatches_: i } = r;
        (a.push({ op: e, path: [], value: n === Zt ? void 0 : n }),
          i.push({ op: e, path: [], value: t }));
      },
      getPath: function e(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (void 0 !== t.key_) {
          const e = t.parent_.copy_ ?? t.parent_.base_,
            r = Rn(wn(e, t.key_)),
            a = wn(e, t.key_);
          if (void 0 === a) return null;
          if (a !== t.draft_ && a !== t.base_ && a !== t.copy_) return null;
          if (null != r && r.base_ !== t.base_) return null;
          const i = 3 === t.parent_.type_;
          let o;
          if (i) {
            const e = t.parent_;
            o = Array.from(e.drafts_.keys()).indexOf(t.key_);
          } else o = t.key_;
          if (!((i && e.size > o) || bn(e, o))) return null;
          n.push(o);
        }
        if (t.parent_) return e(t.parent_, n);
        n.reverse();
        try {
          !(function (e, t) {
            let n = e;
            for (let r = 0; r < t.length - 1; r++) {
              const e = t[r];
              if (((n = wn(n, e)), !Cn(n) || null === n))
                throw new Error(`Cannot resolve path at '${t.join("/")}'`);
            }
          })(t.copy_, n);
        } catch (im) {
          return null;
        }
        return n;
      },
    });
  }
  var pr = new (class {
      constructor(e) {
        var t = this;
        ((this.autoFreeze_ = !0),
          (this.useStrictShallowCopy_ = !1),
          (this.useStrictIteration_ = !1),
          (this.produce = (e, t, n) => {
            if (An(e) && !An(t)) {
              const n = t;
              t = e;
              const r = this;
              return function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n;
                for (
                  var a = arguments.length,
                    i = new Array(a > 1 ? a - 1 : 0),
                    o = 1;
                  o < a;
                  o++
                )
                  i[o - 1] = arguments[o];
                return r.produce(e, (e) => t.call(this, e, ...i));
              };
            }
            let r;
            if ((An(t) || nn(6), void 0 === n || An(n) || nn(7), hn(e))) {
              const a = Wn(this),
                i = cr(a, e, void 0);
              let o = !0;
              try {
                ((r = t(i)), (o = !1));
              } finally {
                o ? Jn(a) : Qn(a);
              }
              return (Hn(a, n), $n(r, a));
            }
            if (!e || !Cn(e)) {
              if (
                ((r = t(e)),
                void 0 === r && (r = e),
                r === Zt && (r = void 0),
                this.autoFreeze_ && Nn(r, !0),
                n)
              ) {
                const t = [],
                  a = [];
                (Fn(Dn).generateReplacementPatches_(e, r, {
                  patches_: t,
                  inversePatches_: a,
                }),
                  n(t, a));
              }
              return r;
            }
            nn(1);
          }),
          (this.produceWithPatches = (e, n) => {
            if (An(e))
              return function (n) {
                for (
                  var r = arguments.length,
                    a = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  a[i - 1] = arguments[i];
                return t.produceWithPatches(n, (t) => e(t, ...a));
              };
            let r, a;
            return [
              this.produce(e, n, (e, t) => {
                ((r = e), (a = t));
              }),
              r,
              a,
            ];
          }),
          xn(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
          xn(e?.useStrictShallowCopy) &&
            this.setUseStrictShallowCopy(e.useStrictShallowCopy),
          xn(e?.useStrictIteration) &&
            this.setUseStrictIteration(e.useStrictIteration));
      }
      createDraft(e) {
        (hn(e) || nn(8), fn(e) && (e = dr(e)));
        const t = Wn(this),
          n = cr(t, e, void 0);
        return ((n[tn].isManual_ = !0), Qn(t), n);
      }
      finishDraft(e, t) {
        const n = e && e[tn];
        (n && n.isManual_) || nn(9);
        const { scope_: r } = n;
        return (Hn(r, t), $n(void 0, r));
      }
      setAutoFreeze(e) {
        this.autoFreeze_ = e;
      }
      setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
      }
      setUseStrictIteration(e) {
        this.useStrictIteration_ = e;
      }
      shouldUseStrictIteration() {
        return this.useStrictIteration_;
      }
      applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
          const r = t[n];
          if (0 === r.path.length && "replace" === r.op) {
            e = r.value;
            break;
          }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = Fn(Dn).applyPatches_;
        return fn(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
      }
    })(),
    mr = pr.produce,
    gr = pr.produceWithPatches.bind(pr),
    yr = pr.applyPatches.bind(pr);
  function vr(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  var br = (() =>
      ("function" === typeof Symbol && Symbol.observable) || "@@observable")(),
    wr = () => Math.random().toString(36).substring(7).split("").join("."),
    Sr = {
      INIT: `@@redux/INIT${wr()}`,
      REPLACE: `@@redux/REPLACE${wr()}`,
      PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${wr()}`,
    };
  function kr(e) {
    if ("object" !== typeof e || null === e) return !1;
    let t = e;
    for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
  }
  function Er(e, t, n) {
    if ("function" !== typeof e) throw new Error(vr(2));
    if (
      ("function" === typeof t && "function" === typeof n) ||
      ("function" === typeof n && "function" === typeof arguments[3])
    )
      throw new Error(vr(0));
    if (
      ("function" === typeof t &&
        "undefined" === typeof n &&
        ((n = t), (t = void 0)),
      "undefined" !== typeof n)
    ) {
      if ("function" !== typeof n) throw new Error(vr(1));
      return n(Er)(e, t);
    }
    let r = e,
      a = t,
      i = new Map(),
      o = i,
      s = 0,
      l = !1;
    function u() {
      o === i &&
        ((o = new Map()),
        i.forEach((e, t) => {
          o.set(t, e);
        }));
    }
    function c() {
      if (l) throw new Error(vr(3));
      return a;
    }
    function d(e) {
      if ("function" !== typeof e) throw new Error(vr(4));
      if (l) throw new Error(vr(5));
      let t = !0;
      u();
      const n = s++;
      return (
        o.set(n, e),
        function () {
          if (t) {
            if (l) throw new Error(vr(6));
            ((t = !1), u(), o.delete(n), (i = null));
          }
        }
      );
    }
    function f(e) {
      if (!kr(e)) throw new Error(vr(7));
      if ("undefined" === typeof e.type) throw new Error(vr(8));
      if ("string" !== typeof e.type) throw new Error(vr(17));
      if (l) throw new Error(vr(9));
      try {
        ((l = !0), (a = r(a, e)));
      } finally {
        l = !1;
      }
      return (
        (i = o).forEach((e) => {
          e();
        }),
        e
      );
    }
    f({ type: Sr.INIT });
    return {
      dispatch: f,
      subscribe: d,
      getState: c,
      replaceReducer: function (e) {
        if ("function" !== typeof e) throw new Error(vr(10));
        ((r = e), f({ type: Sr.REPLACE }));
      },
      [br]: function () {
        const e = d;
        return {
          subscribe(t) {
            if ("object" !== typeof t || null === t) throw new Error(vr(11));
            function n() {
              const e = t;
              e.next && e.next(c());
            }
            n();
            return { unsubscribe: e(n) };
          },
          [br]() {
            return this;
          },
        };
      },
    };
  }
  function _r(e) {
    const t = Object.keys(e),
      n = {};
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      (0, "function" === typeof e[r] && (n[r] = e[r]));
    }
    const r = Object.keys(n);
    let a;
    try {
      !(function (e) {
        Object.keys(e).forEach((t) => {
          const n = e[t];
          if ("undefined" === typeof n(void 0, { type: Sr.INIT }))
            throw new Error(vr(12));
          if (
            "undefined" ===
            typeof n(void 0, { type: Sr.PROBE_UNKNOWN_ACTION() })
          )
            throw new Error(vr(13));
        });
      })(n);
    } catch (im) {
      a = im;
    }
    return function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      if (a) throw a;
      let i = !1;
      const o = {};
      for (let a = 0; a < r.length; a++) {
        const s = r[a],
          l = n[s],
          u = e[s],
          c = l(u, t);
        if ("undefined" === typeof c) {
          t && t.type;
          throw new Error(vr(14));
        }
        ((o[s] = c), (i = i || c !== u));
      }
      return ((i = i || r.length !== Object.keys(e).length), i ? o : e);
    };
  }
  function Cr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => e
      : 1 === t.length
        ? t[0]
        : t.reduce(
            (e, t) =>
              function () {
                return e(t(...arguments));
              },
          );
  }
  function Ar(e) {
    return kr(e) && "type" in e && "string" === typeof e.type;
  }
  function xr(e) {
    return (t) => {
      let { dispatch: n, getState: r } = t;
      return (t) => (a) => ("function" === typeof a ? a(n, r, e) : t(a));
    };
  }
  var Rr = xr(),
    Ir = xr,
    Tr =
      "undefined" !== typeof window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (0 !== arguments.length)
              return "object" === typeof arguments[0]
                ? Cr
                : Cr.apply(null, arguments);
          },
    Pr =
      ("undefined" !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__,
      (e) => e && "function" === typeof e.match);
  function Nr(e, t) {
    function n() {
      if (t) {
        let n = t(...arguments);
        if (!n) throw new Error(fa(0));
        return {
          type: e,
          payload: n.payload,
          ...("meta" in n && { meta: n.meta }),
          ...("error" in n && { error: n.error }),
        };
      }
      return {
        type: e,
        payload: arguments.length <= 0 ? void 0 : arguments[0],
      };
    }
    return (
      (n.toString = () => `${e}`),
      (n.type = e),
      (n.match = (t) => Ar(t) && t.type === e),
      n
    );
  }
  var Or = class e extends Array {
    constructor() {
      (super(...arguments), Object.setPrototypeOf(this, e.prototype));
    }
    static get [Symbol.species]() {
      return e;
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return super.concat.apply(this, t);
    }
    prepend() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return 1 === n.length && Array.isArray(n[0])
        ? new e(...n[0].concat(this))
        : new e(...n.concat(this));
    }
  };
  function Lr(e) {
    return hn(e) ? mr(e, () => {}) : e;
  }
  function jr(e, t, n) {
    return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
  }
  var Dr = "RTK_autoBatch",
    Mr = () => (e) => ({ payload: e, meta: { [Dr]: !0 } }),
    Ur = (e) => (t) => {
      setTimeout(t, e);
    },
    Fr = (e) =>
      function (t) {
        const { autoBatch: n = !0 } = t ?? {};
        let r = new Or(e);
        return (
          n &&
            r.push(
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { type: "raf" };
                return (t) =>
                  function () {
                    const n = t(...arguments);
                    let r = !0,
                      a = !1,
                      i = !1;
                    const o = new Set(),
                      s =
                        "tick" === e.type
                          ? queueMicrotask
                          : "raf" === e.type
                            ? "undefined" !== typeof window &&
                              window.requestAnimationFrame
                              ? window.requestAnimationFrame
                              : Ur(10)
                            : "callback" === e.type
                              ? e.queueNotification
                              : Ur(e.timeout),
                      l = () => {
                        ((i = !1), a && ((a = !1), o.forEach((e) => e())));
                      };
                    return Object.assign({}, n, {
                      subscribe(e) {
                        const t = n.subscribe(() => r && e());
                        return (
                          o.add(e),
                          () => {
                            (t(), o.delete(e));
                          }
                        );
                      },
                      dispatch(e) {
                        try {
                          return (
                            (r = !e?.meta?.[Dr]),
                            (a = !r),
                            a && (i || ((i = !0), s(l))),
                            n.dispatch(e)
                          );
                        } finally {
                          r = !0;
                        }
                      },
                    });
                  };
              })("object" === typeof n ? n : void 0),
            ),
          r
        );
      };
  function zr(e) {
    const t = {},
      n = [];
    let r;
    const a = {
      addCase(e, n) {
        const r = "string" === typeof e ? e : e.type;
        if (!r) throw new Error(fa(28));
        if (r in t) throw new Error(fa(29));
        return ((t[r] = n), a);
      },
      addAsyncThunk: (e, r) => (
        r.pending && (t[e.pending.type] = r.pending),
        r.rejected && (t[e.rejected.type] = r.rejected),
        r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
        r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
        a
      ),
      addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), a),
      addDefaultCase: (e) => ((r = e), a),
    };
    return (e(a), [t, n, r]);
  }
  var Br = (e, t) => (Pr(e) ? e.match(t) : e(t));
  function qr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => t.some((t) => Br(t, e));
  }
  function Vr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => t.every((t) => Br(t, e));
  }
  function Hr(e, t) {
    if (!e || !e.meta) return !1;
    const n = "string" === typeof e.meta.requestId,
      r = t.indexOf(e.meta.requestStatus) > -1;
    return n && r;
  }
  function Jr(e) {
    return (
      "function" === typeof e[0] &&
      "pending" in e[0] &&
      "fulfilled" in e[0] &&
      "rejected" in e[0]
    );
  }
  function Qr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => Hr(e, ["pending"])
      : Jr(t)
        ? qr(...t.map((e) => e.pending))
        : Qr()(t[0]);
  }
  function Wr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => Hr(e, ["rejected"])
      : Jr(t)
        ? qr(...t.map((e) => e.rejected))
        : Wr()(t[0]);
  }
  function Kr() {
    const e = (e) => e && e.meta && e.meta.rejectedWithValue;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return 0 === n.length || Jr(n) ? Vr(Wr(...n), e) : Kr()(n[0]);
  }
  function $r() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => Hr(e, ["fulfilled"])
      : Jr(t)
        ? qr(...t.map((e) => e.fulfilled))
        : $r()(t[0]);
  }
  function Yr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => Hr(e, ["pending", "fulfilled", "rejected"])
      : Jr(t)
        ? qr(...t.flatMap((e) => [e.pending, e.rejected, e.fulfilled]))
        : Yr()(t[0]);
  }
  var Xr = function () {
      let e = "",
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
      for (; t--; )
        e += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
          (64 * Math.random()) | 0
        ];
      return e;
    },
    Gr = ["name", "message", "stack", "code"],
    Zr = class {
      constructor(e, t) {
        ((this.payload = e), (this.meta = t));
      }
      _type;
    },
    ea = class {
      constructor(e, t) {
        ((this.payload = e), (this.meta = t));
      }
      _type;
    },
    ta = (e) => {
      if ("object" === typeof e && null !== e) {
        const t = {};
        for (const n of Gr) "string" === typeof e[n] && (t[n] = e[n]);
        return t;
      }
      return { message: String(e) };
    },
    na = "External signal was aborted",
    ra = (() => {
      function e(e, t, n) {
        const r = Nr(e + "/fulfilled", (e, t, n, r) => ({
            payload: e,
            meta: {
              ...(r || {}),
              arg: n,
              requestId: t,
              requestStatus: "fulfilled",
            },
          })),
          a = Nr(e + "/pending", (e, t, n) => ({
            payload: void 0,
            meta: {
              ...(n || {}),
              arg: t,
              requestId: e,
              requestStatus: "pending",
            },
          })),
          i = Nr(e + "/rejected", (e, t, r, a, i) => ({
            payload: a,
            error: ((n && n.serializeError) || ta)(e || "Rejected"),
            meta: {
              ...(i || {}),
              arg: r,
              requestId: t,
              rejectedWithValue: !!a,
              requestStatus: "rejected",
              aborted: "AbortError" === e?.name,
              condition: "ConditionError" === e?.name,
            },
          }));
        return Object.assign(
          function (e) {
            let { signal: o } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (s, l, u) => {
              const c = n?.idGenerator ? n.idGenerator(e) : Xr(),
                d = new AbortController();
              let f, h;
              function p(e) {
                ((h = e), d.abort());
              }
              o &&
                (o.aborted
                  ? p(na)
                  : o.addEventListener("abort", () => p(na), { once: !0 }));
              const m = (async function () {
                let o;
                try {
                  let i = n?.condition?.(e, { getState: l, extra: u });
                  if (
                    (null !== (m = i) &&
                      "object" === typeof m &&
                      "function" === typeof m.then &&
                      (i = await i),
                    !1 === i || d.signal.aborted)
                  )
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  const g = new Promise((e, t) => {
                    ((f = () => {
                      t({ name: "AbortError", message: h || "Aborted" });
                    }),
                      d.signal.addEventListener("abort", f, { once: !0 }));
                  });
                  (s(
                    a(
                      c,
                      e,
                      n?.getPendingMeta?.(
                        { requestId: c, arg: e },
                        { getState: l, extra: u },
                      ),
                    ),
                  ),
                    (o = await Promise.race([
                      g,
                      Promise.resolve(
                        t(e, {
                          dispatch: s,
                          getState: l,
                          extra: u,
                          requestId: c,
                          signal: d.signal,
                          abort: p,
                          rejectWithValue: (e, t) => new Zr(e, t),
                          fulfillWithValue: (e, t) => new ea(e, t),
                        }),
                      ).then((t) => {
                        if (t instanceof Zr) throw t;
                        return t instanceof ea
                          ? r(t.payload, c, e, t.meta)
                          : r(t, c, e);
                      }),
                    ])));
                } catch (g) {
                  o =
                    g instanceof Zr
                      ? i(null, c, e, g.payload, g.meta)
                      : i(g, c, e);
                } finally {
                  f && d.signal.removeEventListener("abort", f);
                }
                var m;
                return (
                  (n &&
                    !n.dispatchConditionRejection &&
                    i.match(o) &&
                    o.meta.condition) ||
                    s(o),
                  o
                );
              })();
              return Object.assign(m, {
                abort: p,
                requestId: c,
                arg: e,
                unwrap: () => m.then(aa),
              });
            };
          },
          {
            pending: a,
            rejected: i,
            fulfilled: r,
            settled: qr(i, r),
            typePrefix: e,
          },
        );
      }
      return ((e.withTypes = () => e), e);
    })();
  function aa(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload;
  }
  var ia = Symbol.for("rtk-slice-createasyncthunk");
  function oa(e, t) {
    return `${e}/${t}`;
  }
  function sa() {
    let { creators: e } =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e?.asyncThunk?.[ia];
    return function (e) {
      const { name: n, reducerPath: r = n } = e;
      if (!n) throw new Error(fa(11));
      const a =
          ("function" === typeof e.reducers
            ? e.reducers(
                (function () {
                  function e(e, t) {
                    return {
                      _reducerDefinitionType: "asyncThunk",
                      payloadCreator: e,
                      ...t,
                    };
                  }
                  return (
                    (e.withTypes = () => e),
                    {
                      reducer: (e) =>
                        Object.assign(
                          {
                            [e.name]() {
                              return e(...arguments);
                            },
                          }[e.name],
                          { _reducerDefinitionType: "reducer" },
                        ),
                      preparedReducer: (e, t) => ({
                        _reducerDefinitionType: "reducerWithPrepare",
                        prepare: e,
                        reducer: t,
                      }),
                      asyncThunk: e,
                    }
                  );
                })(),
              )
            : e.reducers) || {},
        i = Object.keys(a),
        o = {
          sliceCaseReducersByName: {},
          sliceCaseReducersByType: {},
          actionCreators: {},
          sliceMatchers: [],
        },
        s = {
          addCase(e, t) {
            const n = "string" === typeof e ? e : e.type;
            if (!n) throw new Error(fa(12));
            if (n in o.sliceCaseReducersByType) throw new Error(fa(13));
            return ((o.sliceCaseReducersByType[n] = t), s);
          },
          addMatcher: (e, t) => (
            o.sliceMatchers.push({ matcher: e, reducer: t }),
            s
          ),
          exposeAction: (e, t) => ((o.actionCreators[e] = t), s),
          exposeCaseReducer: (e, t) => ((o.sliceCaseReducersByName[e] = t), s),
        };
      function l() {
        const [t = {}, n = [], r] =
            "function" === typeof e.extraReducers
              ? zr(e.extraReducers)
              : [e.extraReducers],
          a = { ...t, ...o.sliceCaseReducersByType };
        return (function (e, t) {
          let n,
            [r, a, i] = zr(t);
          if ("function" === typeof e) n = () => Lr(e());
          else {
            const t = Lr(e);
            n = () => t;
          }
          function o() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : n(),
              t = arguments.length > 1 ? arguments[1] : void 0,
              o = [
                r[t.type],
                ...a
                  .filter((e) => {
                    let { matcher: n } = e;
                    return n(t);
                  })
                  .map((e) => {
                    let { reducer: t } = e;
                    return t;
                  }),
              ];
            return (
              0 === o.filter((e) => !!e).length && (o = [i]),
              o.reduce((e, n) => {
                if (n) {
                  if (fn(e)) {
                    const r = n(e, t);
                    return void 0 === r ? e : r;
                  }
                  if (hn(e)) return mr(e, (e) => n(e, t));
                  {
                    const r = n(e, t);
                    if (void 0 === r) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined",
                      );
                    }
                    return r;
                  }
                }
                return e;
              }, e)
            );
          }
          return ((o.getInitialState = n), o);
        })(e.initialState, (e) => {
          for (let t in a) e.addCase(t, a[t]);
          for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
          for (let t of n) e.addMatcher(t.matcher, t.reducer);
          r && e.addDefaultCase(r);
        });
      }
      i.forEach((r) => {
        const i = a[r],
          o = {
            reducerName: r,
            type: oa(n, r),
            createNotation: "function" === typeof e.reducers,
          };
        !(function (e) {
          return "asyncThunk" === e._reducerDefinitionType;
        })(i)
          ? (function (e, t, n) {
              let r,
                a,
                { type: i, reducerName: o, createNotation: s } = e;
              if ("reducer" in t) {
                if (
                  s &&
                  !(function (e) {
                    return "reducerWithPrepare" === e._reducerDefinitionType;
                  })(t)
                )
                  throw new Error(fa(17));
                ((r = t.reducer), (a = t.prepare));
              } else r = t;
              n.addCase(i, r)
                .exposeCaseReducer(o, r)
                .exposeAction(o, a ? Nr(i, a) : Nr(i));
            })(o, i, s)
          : (function (e, t, n, r) {
              let { type: a, reducerName: i } = e;
              if (!r) throw new Error(fa(18));
              const {
                  payloadCreator: o,
                  fulfilled: s,
                  pending: l,
                  rejected: u,
                  settled: c,
                  options: d,
                } = t,
                f = r(a, o, d);
              (n.exposeAction(i, f), s && n.addCase(f.fulfilled, s));
              l && n.addCase(f.pending, l);
              u && n.addCase(f.rejected, u);
              c && n.addMatcher(f.settled, c);
              n.exposeCaseReducer(i, {
                fulfilled: s || ca,
                pending: l || ca,
                rejected: u || ca,
                settled: c || ca,
              });
            })(o, i, s, t);
      });
      const u = (e) => e,
        c = new Map(),
        d = new WeakMap();
      let f;
      function h(e, t) {
        return (f || (f = l()), f(e, t));
      }
      function p() {
        return (f || (f = l()), f.getInitialState());
      }
      function m(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        function r(e) {
          let a = e[t];
          return ("undefined" === typeof a && n && (a = jr(d, r, p)), a);
        }
        function a() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          const r = jr(c, n, () => new WeakMap());
          return jr(r, t, () => {
            const r = {};
            for (const [a, i] of Object.entries(e.selectors ?? {}))
              r[a] = la(i, t, () => jr(d, t, p), n);
            return r;
          });
        }
        return {
          reducerPath: t,
          getSelectors: a,
          get selectors() {
            return a(r);
          },
          selectSlice: r,
        };
      }
      const g = {
        name: n,
        reducer: h,
        actions: o.actionCreators,
        caseReducers: o.sliceCaseReducersByName,
        getInitialState: p,
        ...m(r),
        injectInto(e) {
          let { reducerPath: t, ...n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = t ?? r;
          return (
            e.inject({ reducerPath: a, reducer: h }, n),
            { ...g, ...m(a, !0) }
          );
        },
      };
      return g;
    };
  }
  function la(e, t, n, r) {
    function a(a) {
      let i = t(a);
      "undefined" === typeof i && r && (i = n());
      for (
        var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1;
        l < o;
        l++
      )
        s[l - 1] = arguments[l];
      return e(i, ...s);
    }
    return ((a.unwrapped = e), a);
  }
  var ua = sa();
  function ca() {}
  var { assign: da } = Object;
  Symbol.for("rtk-state-proxy-original");
  function fa(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  const ha = ra("getArticles", async () =>
      fetch("https://share.d-dimitrov.eu/api/articles")
        .then((e) => e.json())
        .then(
          (e) => (
            401 === e.status &&
              (localStorage.clear(), (window.location.href = "/")),
            e
          ),
        ),
    ),
    pa = ua({
      name: "articles",
      initialState: { isLoading: !1, data: [], error: !1, status: "idle" },
      reducers: {
        getAll(e, t) {
          e.todo.push(t.payload);
        },
        add(e, t) {
          e.data.push(t.payload);
        },
      },
      extraReducers: (e) => {
        (e.addCase(ha.pending, (e) => {
          ((e.status = "loading"), (e.isLoading = !0));
        }),
          e.addCase(ha.fulfilled, (e, t) => {
            (console.log("pesho", t), (e.isLoading = !1));
            let n = [];
            e.status = "succeeded";
            for (let r = 0; r < t.payload.length; r++) {
              let e = new Date(t.payload[r].createdAt).toLocaleString(void 0, {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  weekday: "long",
                }),
                a = new Date(t.payload[r].createdAt).toLocaleString(void 0, {
                  hour: "2-digit",
                  hour12: !1,
                  minute: "2-digit",
                });
              n.push({
                create_article_date: e,
                status: t.payload[r].status,
                create_article_time: a,
                id: t.payload[r].id,
                title: t.payload[r].title,
                images_id: t.payload[r].mainImage,
                section: t.payload[r].sections,
              });
            }
            e.data = n.reverse();
          }),
          e.addCase(ha.rejected, (e, t) => {
            ((e.status = "failed"),
              (e.error = !0),
              (e.error = t.error.message));
          }));
      },
    }),
    { add: ma, getAll: ga } = pa.actions,
    ya = pa.reducer;
  function va(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: ba } = Object.prototype,
    { getPrototypeOf: wa } = Object,
    { iterator: Sa, toStringTag: ka } = Symbol,
    Ea = ((e) => (t) => {
      const n = ba.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    _a = (e) => ((e = e.toLowerCase()), (t) => Ea(t) === e),
    Ca = (e) => (t) => typeof t === e,
    { isArray: Aa } = Array,
    xa = Ca("undefined");
  function Ra(e) {
    return (
      null !== e &&
      !xa(e) &&
      null !== e.constructor &&
      !xa(e.constructor) &&
      Pa(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const Ia = _a("ArrayBuffer");
  const Ta = Ca("string"),
    Pa = Ca("function"),
    Na = Ca("number"),
    Oa = (e) => null !== e && "object" === typeof e,
    La = (e) => {
      if ("object" !== Ea(e)) return !1;
      const t = wa(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(ka in e) &&
        !(Sa in e)
      );
    },
    ja = _a("Date"),
    Da = _a("File"),
    Ma = _a("Blob"),
    Ua = _a("FileList"),
    Fa = _a("URLSearchParams"),
    [za, Ba, qa, Va] = ["ReadableStream", "Request", "Response", "Headers"].map(
      _a,
    );
  function Ha(e, t) {
    let n,
      r,
      { allOwnKeys: a = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), Aa(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        if (Ra(e)) return;
        const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
          i = r.length;
        let o;
        for (n = 0; n < i; n++) ((o = r[n]), t.call(null, e[o], o, e));
      }
  }
  function Ja(e, t) {
    if (Ra(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      a = n.length;
    for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
    return null;
  }
  const Qa =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
            ? window
            : globalThis,
    Wa = (e) => !xa(e) && e !== Qa;
  const Ka =
    (($a = "undefined" !== typeof Uint8Array && wa(Uint8Array)),
    (e) => $a && e instanceof $a);
  var $a;
  const Ya = _a("HTMLFormElement"),
    Xa = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    Ga = _a("RegExp"),
    Za = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      (Ha(n, (n, a) => {
        let i;
        !1 !== (i = t(n, a, e)) && (r[a] = i || n);
      }),
        Object.defineProperties(e, r));
    };
  const ei = _a("AsyncFunction"),
    ti = ((e, t) => {
      return e
        ? setImmediate
        : t
          ? ((n = `axios@${Math.random()}`),
            (r = []),
            Qa.addEventListener(
              "message",
              (e) => {
                let { source: t, data: a } = e;
                t === Qa && a === n && r.length && r.shift()();
              },
              !1,
            ),
            (e) => {
              (r.push(e), Qa.postMessage(n, "*"));
            })
          : (e) => setTimeout(e);
      var n, r;
    })("function" === typeof setImmediate, Pa(Qa.postMessage)),
    ni =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(Qa)
        : ("undefined" !== typeof process && process.nextTick) || ti,
    ri = {
      isArray: Aa,
      isArrayBuffer: Ia,
      isBuffer: Ra,
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (Pa(e.append) &&
              ("formdata" === (t = Ea(e)) ||
                ("object" === t &&
                  Pa(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Ia(e.buffer)),
          t
        );
      },
      isString: Ta,
      isNumber: Na,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: Oa,
      isPlainObject: La,
      isEmptyObject: (e) => {
        if (!Oa(e) || Ra(e)) return !1;
        try {
          return (
            0 === Object.keys(e).length &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        } catch (im) {
          return !1;
        }
      },
      isReadableStream: za,
      isRequest: Ba,
      isResponse: qa,
      isHeaders: Va,
      isUndefined: xa,
      isDate: ja,
      isFile: Da,
      isBlob: Ma,
      isRegExp: Ga,
      isFunction: Pa,
      isStream: (e) => Oa(e) && Pa(e.pipe),
      isURLSearchParams: Fa,
      isTypedArray: Ka,
      isFileList: Ua,
      forEach: Ha,
      merge: function e() {
        const { caseless: t } = (Wa(this) && this) || {},
          n = {},
          r = (r, a) => {
            const i = (t && Ja(n, a)) || a;
            La(n[i]) && La(r)
              ? (n[i] = e(n[i], r))
              : La(r)
                ? (n[i] = e({}, r))
                : Aa(r)
                  ? (n[i] = r.slice())
                  : (n[i] = r);
          };
        for (let a = 0, i = arguments.length; a < i; a++)
          arguments[a] && Ha(arguments[a], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          Ha(
            t,
            (t, r) => {
              n && Pa(t) ? (e[r] = va(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r },
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        ((e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n));
      },
      toFlatObject: (e, t, n, r) => {
        let a, i, o;
        const s = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
            ((o = a[i]),
              (r && !r(o, e, t)) || s[o] || ((t[o] = e[o]), (s[o] = !0)));
          e = !1 !== n && wa(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: Ea,
      kindOfTest: _a,
      endsWith: (e, t, n) => {
        ((e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length));
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (Aa(e)) return e;
        let t = e.length;
        if (!Na(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Sa]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: Ya,
      hasOwnProperty: Xa,
      hasOwnProp: Xa,
      reduceDescriptors: Za,
      freezeMethods: (e) => {
        Za(e, (t, n) => {
          if (Pa(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          Pa(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return (Aa(e) ? r(e) : r(String(e).split(t)), n);
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: Ja,
      global: Qa,
      isContextDefined: Wa,
      isSpecCompliantForm: function (e) {
        return !!(e && Pa(e.append) && "FormData" === e[ka] && e[Sa]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (Oa(e)) {
              if (t.indexOf(e) >= 0) return;
              if (Ra(e)) return e;
              if (!("toJSON" in e)) {
                t[r] = e;
                const a = Aa(e) ? [] : {};
                return (
                  Ha(e, (e, t) => {
                    const i = n(e, r + 1);
                    !xa(i) && (a[t] = i);
                  }),
                  (t[r] = void 0),
                  a
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: ei,
      isThenable: (e) => e && (Oa(e) || Pa(e)) && Pa(e.then) && Pa(e.catch),
      setImmediate: ti,
      asap: ni,
      isIterable: (e) => null != e && Pa(e[Sa]),
    };
  function ai(e, t, n, r, a) {
    (Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      a && ((this.response = a), (this.status = a.status ? a.status : null)));
  }
  ri.inherits(ai, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: ri.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const ii = ai.prototype,
    oi = {};
  ([
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    oi[e] = { value: e };
  }),
    Object.defineProperties(ai, oi),
    Object.defineProperty(ii, "isAxiosError", { value: !0 }),
    (ai.from = (e, t, n, r, a, i) => {
      const o = Object.create(ii);
      return (
        ri.toFlatObject(
          e,
          o,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e,
        ),
        ai.call(o, e.message, t, n, r, a),
        (o.cause = e),
        (o.name = e.name),
        i && Object.assign(o, i),
        o
      );
    }));
  const si = ai;
  function li(e) {
    return ri.isPlainObject(e) || ri.isArray(e);
  }
  function ui(e) {
    return ri.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function ci(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return ((e = ui(e)), !n && t ? "[" + e + "]" : e);
          })
          .join(n ? "." : "")
      : t;
  }
  const di = ri.toFlatObject(ri, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const fi = function (e, t, n) {
    if (!ri.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = ri.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !ri.isUndefined(t[e]);
        },
      )).metaTokens,
      a = n.visitor || u,
      i = n.dots,
      o = n.indexes,
      s =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        ri.isSpecCompliantForm(t);
    if (!ri.isFunction(a)) throw new TypeError("visitor must be a function");
    function l(e) {
      if (null === e) return "";
      if (ri.isDate(e)) return e.toISOString();
      if (ri.isBoolean(e)) return e.toString();
      if (!s && ri.isBlob(e))
        throw new si("Blob is not supported. Use a Buffer instead.");
      return ri.isArrayBuffer(e) || ri.isTypedArray(e)
        ? s && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, a) {
      let s = e;
      if (e && !a && "object" === typeof e)
        if (ri.endsWith(n, "{}"))
          ((n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e)));
        else if (
          (ri.isArray(e) &&
            (function (e) {
              return ri.isArray(e) && !e.some(li);
            })(e)) ||
          ((ri.isFileList(e) || ri.endsWith(n, "[]")) && (s = ri.toArray(e)))
        )
          return (
            (n = ui(n)),
            s.forEach(function (e, r) {
              !ri.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === o ? ci([n], r, i) : null === o ? n : n + "[]",
                  l(e),
                );
            }),
            !1
          );
      return !!li(e) || (t.append(ci(a, n, i), l(e)), !1);
    }
    const c = [],
      d = Object.assign(di, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: li,
      });
    if (!ri.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!ri.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          (c.push(n),
            ri.forEach(n, function (n, i) {
              !0 ===
                (!(ri.isUndefined(n) || null === n) &&
                  a.call(t, n, ri.isString(i) ? i.trim() : i, r, d)) &&
                e(n, r ? r.concat(i) : [i]);
            }),
            c.pop());
        }
      })(e),
      t
    );
  };
  function hi(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function pi(e, t) {
    ((this._pairs = []), e && fi(e, this, t));
  }
  const mi = pi.prototype;
  ((mi.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (mi.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, hi);
          }
        : hi;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    }));
  const gi = pi;
  function yi(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function vi(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || yi;
    ri.isFunction(n) && (n = { serialize: n });
    const a = n && n.serialize;
    let i;
    if (
      ((i = a
        ? a(t, n)
        : ri.isURLSearchParams(t)
          ? t.toString()
          : new gi(t, n).toString(r)),
      i)
    ) {
      const t = e.indexOf("#");
      (-1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + i));
    }
    return e;
  }
  const bi = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        ri.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    wi = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Si = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : gi,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    ki = "undefined" !== typeof window && "undefined" !== typeof document,
    Ei = ("object" === typeof navigator && navigator) || void 0,
    _i =
      ki &&
      (!Ei || ["ReactNative", "NativeScript", "NS"].indexOf(Ei.product) < 0),
    Ci =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    Ai = (ki && window.location.href) || "http://localhost",
    xi = { ...r, ...Si };
  const Ri = function (e) {
    function t(e, n, r, a) {
      let i = e[a++];
      if ("__proto__" === i) return !0;
      const o = Number.isFinite(+i),
        s = a >= e.length;
      if (((i = !i && ri.isArray(r) ? r.length : i), s))
        return (ri.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !o);
      (r[i] && ri.isObject(r[i])) || (r[i] = []);
      return (
        t(e, n, r[i], a) &&
          ri.isArray(r[i]) &&
          (r[i] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const a = n.length;
            let i;
            for (r = 0; r < a; r++) ((i = n[r]), (t[i] = e[i]));
            return t;
          })(r[i])),
        !o
      );
    }
    if (ri.isFormData(e) && ri.isFunction(e.entries)) {
      const n = {};
      return (
        ri.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return ri
                .matchAll(/\w+|\[(\w*)]/g, e)
                .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
            })(e),
            r,
            n,
            0,
          );
        }),
        n
      );
    }
    return null;
  };
  const Ii = {
    transitional: wi,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          a = ri.isObject(e);
        a && ri.isHTMLForm(e) && (e = new FormData(e));
        if (ri.isFormData(e)) return r ? JSON.stringify(Ri(e)) : e;
        if (
          ri.isArrayBuffer(e) ||
          ri.isBuffer(e) ||
          ri.isStream(e) ||
          ri.isFile(e) ||
          ri.isBlob(e) ||
          ri.isReadableStream(e)
        )
          return e;
        if (ri.isArrayBufferView(e)) return e.buffer;
        if (ri.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            e.toString()
          );
        let i;
        if (a) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return fi(e, new xi.classes.URLSearchParams(), {
                visitor: function (e, t, n, r) {
                  return xi.isNode && ri.isBuffer(e)
                    ? (this.append(t, e.toString("base64")), !1)
                    : r.defaultVisitor.apply(this, arguments);
                },
                ...t,
              });
            })(e, this.formSerializer).toString();
          if ((i = ri.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return fi(
              i ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer,
            );
          }
        }
        return a || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (ri.isString(e))
                try {
                  return ((t || JSON.parse)(e), ri.trim(e));
                } catch (im) {
                  if ("SyntaxError" !== im.name) throw im;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || Ii.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (ri.isResponse(e) || ri.isReadableStream(e)) return e;
        if (e && ri.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (im) {
            if (n) {
              if ("SyntaxError" === im.name)
                throw si.from(
                  im,
                  si.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response,
                );
              throw im;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: xi.classes.FormData, Blob: xi.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  ri.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Ii.headers[e] = {};
  });
  const Ti = Ii,
    Pi = ri.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    Ni = Symbol("internals");
  function Oi(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Li(e) {
    return !1 === e || null == e ? e : ri.isArray(e) ? e.map(Li) : String(e);
  }
  function ji(e, t, n, r, a) {
    return ri.isFunction(r)
      ? r.call(this, t, n)
      : (a && (t = n),
        ri.isString(t)
          ? ri.isString(r)
            ? -1 !== t.indexOf(r)
            : ri.isRegExp(r)
              ? r.test(t)
              : void 0
          : void 0);
  }
  class Di {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function a(e, t, n) {
        const a = Oi(t);
        if (!a) throw new Error("header name must be a non-empty string");
        const i = ri.findKey(r, a);
        (!i || void 0 === r[i] || !0 === n || (void 0 === n && !1 !== r[i])) &&
          (r[i || t] = Li(e));
      }
      const i = (e, t) => ri.forEach(e, (e, n) => a(e, n, t));
      if (ri.isPlainObject(e) || e instanceof this.constructor) i(e, t);
      else if (
        ri.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        i(
          ((e) => {
            const t = {};
            let n, r, a;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  ((a = e.indexOf(":")),
                    (n = e.substring(0, a).trim().toLowerCase()),
                    (r = e.substring(a + 1).trim()),
                    !n ||
                      (t[n] && Pi[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r)));
                }),
              t
            );
          })(e),
          t,
        );
      else if (ri.isObject(e) && ri.isIterable(e)) {
        let n,
          r,
          a = {};
        for (const t of e) {
          if (!ri.isArray(t))
            throw TypeError("Object iterator must return a key-value pair");
          a[(r = t[0])] = (n = a[r])
            ? ri.isArray(n)
              ? [...n, t[1]]
              : [n, t[1]]
            : t[1];
        }
        i(a, t);
      } else null != e && a(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = Oi(e))) {
        const n = ri.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (ri.isFunction(t)) return t.call(this, e, n);
          if (ri.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = Oi(e))) {
        const n = ri.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !ji(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function a(e) {
        if ((e = Oi(e))) {
          const a = ri.findKey(n, e);
          !a || (t && !ji(0, n[a], a, t)) || (delete n[a], (r = !0));
        }
      }
      return (ri.isArray(e) ? e.forEach(a) : a(e), r);
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const a = t[n];
        (e && !ji(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        ri.forEach(this, (r, a) => {
          const i = ri.findKey(n, a);
          if (i) return ((t[i] = Li(r)), void delete t[a]);
          const o = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(a)
            : String(a).trim();
          (o !== a && delete t[a], (t[o] = Li(r)), (n[o] = !0));
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        ri.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && ri.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
        a < n;
        a++
      )
        r[a - 1] = arguments[a];
      return (r.forEach((e) => t.set(e)), t);
    }
    static accessor(e) {
      const t = (this[Ni] = this[Ni] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = Oi(e);
        t[r] ||
          (!(function (e, t) {
            const n = ri.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, a) {
                  return this[r].call(this, t, e, n, a);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return (ri.isArray(e) ? e.forEach(r) : r(e), this);
    }
  }
  (Di.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    ri.reduceDescriptors(Di.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    ri.freezeMethods(Di));
  const Mi = Di;
  function Ui(e, t) {
    const n = this || Ti,
      r = t || n,
      a = Mi.from(r.headers);
    let i = r.data;
    return (
      ri.forEach(e, function (e) {
        i = e.call(n, i, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      i
    );
  }
  function Fi(e) {
    return !(!e || !e.__CANCEL__);
  }
  function zi(e, t, n) {
    (si.call(this, null == e ? "canceled" : e, si.ERR_CANCELED, t, n),
      (this.name = "CanceledError"));
  }
  ri.inherits(zi, si, { __CANCEL__: !0 });
  const Bi = zi;
  function qi(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new si(
            "Request failed with status code " + n.status,
            [si.ERR_BAD_REQUEST, si.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n,
          ),
        )
      : e(n);
  }
  const Vi = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let a,
      i = 0,
      o = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (s) {
        const l = Date.now(),
          u = r[o];
        (a || (a = l), (n[i] = s), (r[i] = l));
        let c = o,
          d = 0;
        for (; c !== i; ) ((d += n[c++]), (c %= e));
        if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), l - a < t))
          return;
        const f = u && l - u;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const Hi = function (e, t) {
      let n,
        r,
        a = 0,
        i = 1e3 / t;
      const o = function (t) {
        let i =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        ((a = i), (n = null), r && (clearTimeout(r), (r = null)), e(...t));
      };
      return [
        function () {
          const e = Date.now(),
            t = e - a;
          for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
          t >= i
            ? o(l, e)
            : ((n = l),
              r ||
                (r = setTimeout(() => {
                  ((r = null), o(n));
                }, i - t)));
        },
        () => n && o(n),
      ];
    },
    Ji = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const a = Vi(50, 250);
      return Hi((n) => {
        const i = n.loaded,
          o = n.lengthComputable ? n.total : void 0,
          s = i - r,
          l = a(s);
        r = i;
        e({
          loaded: i,
          total: o,
          progress: o ? i / o : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && o && i <= o ? (o - i) / l : void 0,
          event: n,
          lengthComputable: null != o,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    Qi = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Wi = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return ri.asap(() => e(...n));
      },
    Ki = xi.hasStandardBrowserEnv
      ? ((e, t) => (n) => (
          (n = new URL(n, xi.origin)),
          e.protocol === n.protocol &&
            e.host === n.host &&
            (t || e.port === n.port)
        ))(
          new URL(xi.origin),
          xi.navigator && /(msie|trident)/i.test(xi.navigator.userAgent),
        )
      : () => !0,
    $i = xi.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, a, i) {
            const o = [e + "=" + encodeURIComponent(t)];
            (ri.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              ri.isString(r) && o.push("path=" + r),
              ri.isString(a) && o.push("domain=" + a),
              !0 === i && o.push("secure"),
              (document.cookie = o.join("; ")));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function Yi(e, t, n) {
    let r = !(function (e) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    })(t);
    return e && (r || 0 == n)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const Xi = (e) => (e instanceof Mi ? { ...e } : e);
  function Gi(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return ri.isPlainObject(e) && ri.isPlainObject(t)
        ? ri.merge.call({ caseless: r }, e, t)
        : ri.isPlainObject(t)
          ? ri.merge({}, t)
          : ri.isArray(t)
            ? t.slice()
            : t;
    }
    function a(e, t, n, a) {
      return ri.isUndefined(t)
        ? ri.isUndefined(e)
          ? void 0
          : r(void 0, e, 0, a)
        : r(e, t, 0, a);
    }
    function i(e, t) {
      if (!ri.isUndefined(t)) return r(void 0, t);
    }
    function o(e, t) {
      return ri.isUndefined(t)
        ? ri.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function s(n, a, i) {
      return i in t ? r(n, a) : i in e ? r(void 0, n) : void 0;
    }
    const l = {
      url: i,
      method: i,
      data: i,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
      headers: (e, t, n) => a(Xi(e), Xi(t), 0, !0),
    };
    return (
      ri.forEach(Object.keys({ ...e, ...t }), function (r) {
        const i = l[r] || a,
          o = i(e[r], t[r], r);
        (ri.isUndefined(o) && i !== s) || (n[r] = o);
      }),
      n
    );
  }
  const Zi = (e) => {
      const t = Gi({}, e);
      let n,
        {
          data: r,
          withXSRFToken: a,
          xsrfHeaderName: i,
          xsrfCookieName: o,
          headers: s,
          auth: l,
        } = t;
      if (
        ((t.headers = s = Mi.from(s)),
        (t.url = vi(
          Yi(t.baseURL, t.url, t.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        )),
        l &&
          s.set(
            "Authorization",
            "Basic " +
              btoa(
                (l.username || "") +
                  ":" +
                  (l.password ? unescape(encodeURIComponent(l.password)) : ""),
              ),
          ),
        ri.isFormData(r))
      )
        if (xi.hasStandardBrowserEnv || xi.hasStandardBrowserWebWorkerEnv)
          s.setContentType(void 0);
        else if (!1 !== (n = s.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          s.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        xi.hasStandardBrowserEnv &&
        (a && ri.isFunction(a) && (a = a(t)), a || (!1 !== a && Ki(t.url)))
      ) {
        const e = i && o && $i.read(o);
        e && s.set(i, e);
      }
      return t;
    },
    eo =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = Zi(e);
          let a = r.data;
          const i = Mi.from(r.headers).normalize();
          let o,
            s,
            l,
            u,
            c,
            { responseType: d, onUploadProgress: f, onDownloadProgress: h } = r;
          function p() {
            (u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(o),
              r.signal && r.signal.removeEventListener("abort", o));
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const r = Mi.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders(),
            );
            (qi(
              function (e) {
                (t(e), p());
              },
              function (e) {
                (n(e), p());
              },
              {
                data:
                  d && "text" !== d && "json" !== d
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              },
            ),
              (m = null));
          }
          (m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new si("Request aborted", si.ECONNABORTED, e, m)),
                (m = null));
            }),
            (m.onerror = function () {
              (n(new si("Network Error", si.ERR_NETWORK, e, m)), (m = null));
            }),
            (m.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const a = r.transitional || wi;
              (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new si(
                    t,
                    a.clarifyTimeoutError ? si.ETIMEDOUT : si.ECONNABORTED,
                    e,
                    m,
                  ),
                ),
                (m = null));
            }),
            void 0 === a && i.setContentType(null),
            "setRequestHeader" in m &&
              ri.forEach(i.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            ri.isUndefined(r.withCredentials) ||
              (m.withCredentials = !!r.withCredentials),
            d && "json" !== d && (m.responseType = r.responseType),
            h && (([l, c] = Ji(h, !0)), m.addEventListener("progress", l)),
            f &&
              m.upload &&
              (([s, u] = Ji(f)),
              m.upload.addEventListener("progress", s),
              m.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((o = (t) => {
                m &&
                  (n(!t || t.type ? new Bi(null, e, m) : t),
                  m.abort(),
                  (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(o),
              r.signal &&
                (r.signal.aborted
                  ? o()
                  : r.signal.addEventListener("abort", o))));
          const y = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          y && -1 === xi.protocols.indexOf(y)
            ? n(
                new si(
                  "Unsupported protocol " + y + ":",
                  si.ERR_BAD_REQUEST,
                  e,
                ),
              )
            : m.send(a || null);
        });
      },
    to = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const a = function (e) {
          if (!n) {
            ((n = !0), o());
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof si ? t : new Bi(t instanceof Error ? t.message : t),
            );
          }
        };
        let i =
          t &&
          setTimeout(() => {
            ((i = null),
              a(new si(`timeout ${t} of ms exceeded`, si.ETIMEDOUT)));
          }, t);
        const o = () => {
          e &&
            (i && clearTimeout(i),
            (i = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(a)
                : e.removeEventListener("abort", a);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", a));
        const { signal: s } = r;
        return ((s.unsubscribe = () => ri.asap(o)), s);
      }
    },
    no = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        a = 0;
      for (; a < n; ) ((r = a + t), yield e.slice(a, r), (a = r));
    },
    ro = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    ao = (e, t, n, r) => {
      const a = (async function* (e, t) {
        for await (const n of ro(e)) yield* no(n, t);
      })(e, t);
      let i,
        o = 0,
        s = (e) => {
          i || ((i = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await a.next();
              if (t) return (s(), void e.close());
              let i = r.byteLength;
              if (n) {
                let e = (o += i);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (s(t), t);
            }
          },
          cancel: (e) => (s(e), a.return()),
        },
        { highWaterMark: 2 },
      );
    },
    io =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    oo = io && "function" === typeof ReadableStream,
    so =
      io &&
      ("function" === typeof TextEncoder
        ? ((lo = new TextEncoder()), (e) => lo.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var lo;
  const uo = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (im) {
        return !1;
      }
    },
    co =
      oo &&
      uo(() => {
        let e = !1;
        const t = new Request(xi.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return ((e = !0), "half");
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    fo = oo && uo(() => ri.isReadableStream(new Response("").body)),
    ho = { stream: fo && ((e) => e.body) };
  var po;
  io &&
    ((po = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !ho[e] &&
        (ho[e] = ri.isFunction(po[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new si(
                `Response type '${e}' is not supported`,
                si.ERR_NOT_SUPPORT,
                n,
              );
            });
    }));
  const mo = async (e, t) => {
      const n = ri.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) => {
            if (null == e) return 0;
            if (ri.isBlob(e)) return e.size;
            if (ri.isSpecCompliantForm(e)) {
              const t = new Request(xi.origin, { method: "POST", body: e });
              return (await t.arrayBuffer()).byteLength;
            }
            return ri.isArrayBufferView(e) || ri.isArrayBuffer(e)
              ? e.byteLength
              : (ri.isURLSearchParams(e) && (e += ""),
                ri.isString(e) ? (await so(e)).byteLength : void 0);
          })(t)
        : n;
    },
    go =
      io &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: a,
          cancelToken: i,
          timeout: o,
          onDownloadProgress: s,
          onUploadProgress: l,
          responseType: u,
          headers: c,
          withCredentials: d = "same-origin",
          fetchOptions: f,
        } = Zi(e);
        u = u ? (u + "").toLowerCase() : "text";
        let h,
          p = to([a, i && i.toAbortSignal()], o);
        const m =
          p &&
          p.unsubscribe &&
          (() => {
            p.unsubscribe();
          });
        let g;
        try {
          if (
            l &&
            co &&
            "get" !== n &&
            "head" !== n &&
            0 !== (g = await mo(c, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              (ri.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                c.setContentType(e),
              n.body)
            ) {
              const [e, t] = Qi(g, Ji(Wi(l)));
              r = ao(n.body, 65536, e, t);
            }
          }
          ri.isString(d) || (d = d ? "include" : "omit");
          const a = "credentials" in Request.prototype;
          h = new Request(t, {
            ...f,
            signal: p,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: a ? d : void 0,
          });
          let i = await fetch(h, f);
          const o = fo && ("stream" === u || "response" === u);
          if (fo && (s || (o && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = i[t];
            });
            const t = ri.toFiniteNumber(i.headers.get("content-length")),
              [n, r] = (s && Qi(t, Ji(Wi(s), !0))) || [];
            i = new Response(
              ao(i.body, 65536, n, () => {
                (r && r(), m && m());
              }),
              e,
            );
          }
          u = u || "text";
          let y = await ho[ri.findKey(ho, u) || "text"](i, e);
          return (
            !o && m && m(),
            await new Promise((t, n) => {
              qi(t, n, {
                data: y,
                headers: Mi.from(i.headers),
                status: i.status,
                statusText: i.statusText,
                config: e,
                request: h,
              });
            })
          );
        } catch (y) {
          if (
            (m && m(),
            y && "TypeError" === y.name && /Load failed|fetch/i.test(y.message))
          )
            throw Object.assign(new si("Network Error", si.ERR_NETWORK, e, h), {
              cause: y.cause || y,
            });
          throw si.from(y, y && y.code, e, h);
        }
      }),
    yo = { http: null, xhr: eo, fetch: go };
  ri.forEach(yo, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (im) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const vo = (e) => `- ${e}`,
    bo = (e) => ri.isFunction(e) || null === e || !1 === e,
    wo = (e) => {
      e = ri.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const a = {};
      for (let i = 0; i < t; i++) {
        let t;
        if (
          ((n = e[i]),
          (r = n),
          !bo(n) && ((r = yo[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new si(`Unknown adapter '${t}'`);
        if (r) break;
        a[t || "#" + i] = r;
      }
      if (!r) {
        const e = Object.entries(a).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(vo).join("\n")
            : " " + vo(e[0])
          : "as no adapter specified";
        throw new si(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    };
  function So(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Bi(null, e);
  }
  function ko(e) {
    (So(e),
      (e.headers = Mi.from(e.headers)),
      (e.data = Ui.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1));
    return wo(e.adapter || Ti.adapter)(e).then(
      function (t) {
        return (
          So(e),
          (t.data = Ui.call(e, e.transformResponse, t)),
          (t.headers = Mi.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          Fi(t) ||
            (So(e),
            t &&
              t.response &&
              ((t.response.data = Ui.call(e, e.transformResponse, t.response)),
              (t.response.headers = Mi.from(t.response.headers)))),
          Promise.reject(t)
        );
      },
    );
  }
  const Eo = "1.11.0",
    _o = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      _o[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const Co = {};
  ((_o.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v" +
        Eo +
        "] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, a, i) => {
      if (!1 === e)
        throw new si(
          r(a, " has been removed" + (t ? " in " + t : "")),
          si.ERR_DEPRECATED,
        );
      return (
        t &&
          !Co[a] &&
          ((Co[a] = !0),
          console.warn(
            r(
              a,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future",
            ),
          )),
        !e || e(n, a, i)
      );
    };
  }),
    (_o.spelling = function (e) {
      return (t, n) => (
        console.warn(`${n} is likely a misspelling of ${e}`),
        !0
      );
    }));
  const Ao = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new si("options must be an object", si.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let a = r.length;
        for (; a-- > 0; ) {
          const i = r[a],
            o = t[i];
          if (o) {
            const t = e[i],
              n = void 0 === t || o(t, i, e);
            if (!0 !== n)
              throw new si(
                "option " + i + " must be " + n,
                si.ERR_BAD_OPTION_VALUE,
              );
            continue;
          }
          if (!0 !== n) throw new si("Unknown option " + i, si.ERR_BAD_OPTION);
        }
      },
      validators: _o,
    },
    xo = Ao.validators;
  class Ro {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new bi(), response: new bi() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(e)
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (im) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      ("string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = Gi(this.defaults, t)));
      const { transitional: n, paramsSerializer: r, headers: a } = t;
      (void 0 !== n &&
        Ao.assertOptions(
          n,
          {
            silentJSONParsing: xo.transitional(xo.boolean),
            forcedJSONParsing: xo.transitional(xo.boolean),
            clarifyTimeoutError: xo.transitional(xo.boolean),
          },
          !1,
        ),
        null != r &&
          (ri.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Ao.assertOptions(
                r,
                { encode: xo.function, serialize: xo.function },
                !0,
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        Ao.assertOptions(
          t,
          {
            baseUrl: xo.spelling("baseURL"),
            withXsrfToken: xo.spelling("withXSRFToken"),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()));
      let i = a && ri.merge(a.common, a[t.method]);
      (a &&
        ri.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete a[e];
          },
        ),
        (t.headers = Mi.concat(i, a)));
      const o = [];
      let s = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((s = s && e.synchronous), o.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!s) {
        const e = [ko.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...l), c = e.length, u = Promise.resolve(t);
          d < c;
        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = o.length;
      let f = t;
      for (d = 0; d < c; ) {
        const e = o[d++],
          t = o[d++];
        try {
          f = e(f);
        } catch (h) {
          t.call(this, h);
          break;
        }
      }
      try {
        u = ko.call(this, f);
      } catch (h) {
        return Promise.reject(h);
      }
      for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
      return u;
    }
    getUri(e) {
      return vi(
        Yi((e = Gi(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      );
    }
  }
  (ri.forEach(["delete", "get", "head", "options"], function (e) {
    Ro.prototype[e] = function (t, n) {
      return this.request(
        Gi(n || {}, { method: e, url: t, data: (n || {}).data }),
      );
    };
  }),
    ri.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, a) {
          return this.request(
            Gi(a || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            }),
          );
        };
      }
      ((Ro.prototype[e] = t()), (Ro.prototype[e + "Form"] = t(!0)));
    }));
  const Io = Ro;
  class To {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      (this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, a) {
          n.reason || ((n.reason = new Bi(e, r, a)), t(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new To(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Po = To;
  const No = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(No).forEach((e) => {
    let [t, n] = e;
    No[n] = t;
  });
  const Oo = No;
  const Lo = (function e(t) {
    const n = new Io(t),
      r = va(Io.prototype.request, n);
    return (
      ri.extend(r, Io.prototype, n, { allOwnKeys: !0 }),
      ri.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(Gi(t, n));
      }),
      r
    );
  })(Ti);
  ((Lo.Axios = Io),
    (Lo.CanceledError = Bi),
    (Lo.CancelToken = Po),
    (Lo.isCancel = Fi),
    (Lo.VERSION = Eo),
    (Lo.toFormData = fi),
    (Lo.AxiosError = si),
    (Lo.Cancel = Lo.CanceledError),
    (Lo.all = function (e) {
      return Promise.all(e);
    }),
    (Lo.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Lo.isAxiosError = function (e) {
      return ri.isObject(e) && !0 === e.isAxiosError;
    }),
    (Lo.mergeConfig = Gi),
    (Lo.AxiosHeaders = Mi),
    (Lo.formToJSON = (e) => Ri(ri.isHTMLForm(e) ? new FormData(e) : e)),
    (Lo.getAdapter = wo),
    (Lo.HttpStatusCode = Oo),
    (Lo.default = Lo));
  const jo = Lo,
    Do = jo.create({
      baseURL: "https://share.d-dimitrov.eu",
      withCredentials: !0,
    });
  Do.interceptors.response.use(
    (e) => e,
    (e) => {
      var t;
      return (
        401 ===
          (null === (t = e.response) || void 0 === t ? void 0 : t.status) &&
          (localStorage.clear(), (window.location.href = "/")),
        Promise.reject(e)
      );
    },
  );
  const Mo = Do,
    Uo = ra("articles/addArticle", async (e) => {
      let { title: t, status: n } = e;
      return (
        await Mo.post(
          "https://share.d-dimitrov.eu/api/create/articles/header",
          { title: t, status: n },
        )
      ).data;
    }),
    Fo = ua({
      name: "articlesHeader",
      initialState: { articles: {}, status: "idle", error: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Uo.pending, (e) => {
          e.status = "loading";
        })
          .addCase(Uo.fulfilled, (e, t) => {
            ((e.status = "succeeded"), (e.articles = { ...t.payload }));
          })
          .addCase(Uo.rejected, (e, t) => {
            ((e.status = "failed"), (e.error = t.error.message));
          });
      },
    }).reducer,
    zo = ra("sections/upload", async (e, t) => {
      let { rejectWithValue: n } = t;
      try {
        const t = new FormData();
        (t.append("article_id", e.article_id),
          t.append("title", e.title),
          t.append("content", e.content),
          t.append("position", e.position),
          e.image && t.append("image", e.image),
          e.main_image && t.append("main_image", e.main_image));
        return (
          await jo.post("https://share.d-dimitrov.eu/api/create/section", e, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        ).data;
      } catch (r) {
        return n(r.response.data || "Error uploading section");
      }
    }),
    Bo = ua({
      name: "uploadArticle",
      initialState: { sections: [], loading: !1, error: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(zo.pending, (e) => {
          ((e.loading = !0), (e.error = null));
        })
          .addCase(zo.fulfilled, (e, t) => {
            ((e.loading = !1), e.sections.push(t.payload));
          })
          .addCase(zo.rejected, (e, t) => {
            ((e.loading = !1), (e.error = t.payload));
          });
      },
    }).reducer;
  const qo =
      n.p +
      "static/media/sign-out-alt-4-svgrepo-com.f752ec7b0f5f5364f83b623ba9322981.svg",
    Vo =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH+SURBVEiJtdbfa45hGAfwz/22bEq27EBY4ogTDuzAxiLCyMlSHMzB/gxHZGcOVsqJAyfSDjkQB1MKSQiRWpRfZROFbZatZbgc7J7ebe/77lF2193T8/S9vtf1vb73jydFhKUcpSVlR10RUEqpHpuwIs/RiHhUKENEVJ1owRl8Rsybr9GLNbU4UjUPUkrtuIbm/LyLx/iFLdiHLgzjYEQMFlaAPZjERxyuoXAnBjGKjoqYCkENeJPbsraW/Ixfhw94h7oiCU7lHh9ZjLwspiPH9CzqQUrpGcYjYlft5bHAs6dZfWtETFb0AI3ZxL6i1ZfF9mQVX3ESpTktQieuZ1D3vybIHAdwJXP0/02As/njNC5UMivjVqG5QKITma8LjueXi2ipEbQNIxjD9kUSlPACN+EhvqOxAPnsLi6S5Dy+lLAeVyPiW5XVsTVXMobneGVmA95IKbXWWFgNmChhCu0ppWon6zDuYHcmHjGz029hqEpRG9GNJ9CXZR8rYN4AHiyCWY7LZpb7joQm3Mdm3MMljJcVdDsiPuXKBtAUEW35vRn7M66EvTiKlTgdEb2zWVejHz8sPJY7qylA2zzsdG7LoYpHRUqpzozpy8oUDEXERBUFDdiQcb/xPiKmyv2Yc6NFxE+8VXBkspe1MIWuzLJxDvX/ElD1RvtfY8n/Kv4AlfJ+jD/o38AAAAAASUVORK5CYII=",
    Ho =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xm4XXV97/H32ueczANhChBABkFmhKCoYGWsVbTFVtE69NbWR3vt1bbettrrbe1tnw7U2tva2lutIoKCkDIFlXkSCEMwkhAImckEGclEcnKm/bt/bJMTYBPO2Wfv/Vvrt96v51kPITk553Oyf2vv7/n+vmttkCRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRp2LLYAZQDs8JYeriEChcSOBM4CpgCdMUNJkl6HX3AZjKWE5hDlXsYw094R9b9en/RAqDMHg2T6OFPCHwemBQ7jiSpKbYCX2cM/8jbsm2v9UEWAGV1b/g0GX8DHBg7iiSpJTYAf8b52Xfq/aEFQNncFzor8H8D/I/YUSRJrZdlfKu6ns9xWdb7st+PFUgRXB9GZQfxY+Ci2FEkSW11V5jIJZyV9e3+jUrMNGqvykF8HV/8JamMLq5s45t7/4YdgLK4N3w64+UPviSpXELGp3bPBFgAlMFDYWLWyxLg4NhRJElRbQy7OJb3Zts6YydR61V6+CKZL/6SJA7MxvA/q/AVOwCpmxXGVnaxFq/zlyTVbK1mHOIQYOI6ergEX/wlSYMmd1R5j1sAiQtVLoydQZKULyFwkR2AxGVwZuwMkqR8yTLOsAOQvqMd9JAkvcKxdgDSNzl2AElS7ky2A5C6wKjYESRJuTPaDoAkSSVkASBJUglZAEiSVELOACQuC7ETSJLyyA6AJEklZAEgSVIJWQBIklRCFgCSJJWQQ4CJcwhQklSPHQBJkkrIAkCSpBKyAJAkqYScAUidMwCSpDosABKXxQ4gScoltwAkSSohCwBJkkrILYDUOQMgSarDDoAkSSVkByBxDgFKkuqxAyBJUglZAEiSVEJuAaTOIUBJUh12ACRJKiELAEmSSsgtgMR5FYAkqR4LgNQ5AyBJqsMtAEmSSsgCQJKkErIAkCSphJwBSFzmDIAkqQ47AJIklZAFgCRJJWQBIElSCVkASJJUQg4BJs4hQElSPXYAJEkqIQsASZJKyAJAkqQScgYgdc4ASJLqsAMgSVIJ2QFIXBY7gCQpl+wASJJUQnYAUucMgCSpDjsAkiSVkAWAJEkl5BZA4hwClCTVYwdAkqQSsgOQOocAJUl12AGQJKmELAAkSSohtwAS5xCgJKkeC4DUOQMgSarDLQBJkkrIAkCSpBKyAJAkqYScAUhc5gyAJKkOOwCSJJWQBYAkSSVkASBJUglZAEiSVEIOAabOIUBJUh0WAInzVsCSpHrcApAkqYQsACRJKiG3AFLnDIAkqQ47AJIklZAdgMQ5BChJqscOgCRJJWQHIHXOAEiS6rADIElSCVkASJJUQm4BJM4hQElSPXYAJEkqITsAqXMIUJJUhwWACqsjgzOnwIVT4cz94fBxMKkTuuxrJa2vCtv6YfVO+NmLcM86+PlmGEig2HVNx5Xy2qrHLeLETZkRklu6ozvgvx0Nnzwa9h8VO43yYFMvXLEMrn4OegZipxk+13R+FX1t7YsFQOJSKwDecyj82UkwdUzsJMqjtbvgb5+BO16InWToXNPFUMS19XosABK3//VpFAAZ8PvH1w4XrV7P1cvh756Bao5Xv2u6mIqwtobKGQDlXiWDr50B7zksdhIVxSeOhgNGwx//PJ9P1K7p4sr72hoOR0uUe3/4Jp8oNXzvPQw+f3zsFPW5postz2trOCwAlGvvOQw+/cbYKVRUnzkOfvnQ2ClezjWdhjyureGyAEhdKO4xugJ/emIr/lFUFhnw5ZNhTIXo69k1nZa8ra1GDguAxGUFPn77GDh0bAv+UVQqU8fAx4+Ov55d0+nJ09pq5LAAUC51ZLUnS6kZPnlMbU3F5JpOUx7WVqMsAJRLZ+4PU7whiprkgNHw5ilxM7im05SHtdUoCwDl0gWHxE6g1FwYeU25ptMVe201yvsApK6g16meWdCKWvn15ilEPR9c0+mKvbYaZQGQuIJuTXHE+NgJlJojx8c9H1zT6Yq9thrlFoByabylqZpsUlfcr++aTlfstdUoCwDl0ihXpprMt9SVXs6aNHUF3JeSWibi+bCjH0Z5FUCStvVRyOdaa2JJaoOVO2InUKsU9bG1AJCkNpizKXYCtUpRH1sLgMTFvtVko4fUCjHX9H1r2/ANKop718Z/zmzkcAYgdQXcl5JaJuL58OQmeLEH9h8dL4Oab1MPzHuRQj7X2gGQpDYYCHDl0tgp1GzfXQzVAr74gwWAJLXN1Uvh+e7YKdQsa7vhmuWxUzTOAkCS2qR3AL76VCG7xXqFAPztPOgZiJ2kcRYAiYs9ZOIQoPIk9rrOgLueh28vavm3qhb71kK494X468khQL02f9SQBuXkfPjXZ+CIcfArh8dOokbcthq+sYDcrKdG2QGQpDarBviT2fDvCwr/GlIqAfjOIvjiE8Ud/NubHQBJiiAA//4sLN4GXzwNDhkbO5H25YWdcPlTcPfzsZM0jwWAJEV01/PwwDr42DHw28fBAd4nIFc29dQu9btmWW2IMyUWAInLEmhTSc2S1/Ohrx+uXARXLYY37w/nH1b77xETam816zsZtkdftfbGPqteqt246d4XYO6Lg+3+1AaULQAkKSeqoXZf+aLeW17FYl0pSVIJWQBIklRCbgGkLqd7nlIUng/SHhYAiUttaEUaCc8HaZBbAJIklZAFgCRJJWQBIElSCTkDkDqHnqRBng/SHnYAJEkqITsAiXPqWRrk+SANsgMgSVIJ2QFInXue0iDPB2kPOwCSJJWQBYAkSSXkFkDiHHqSBnk+SIMsAFLnnqc0yPNB2sMtAEmSSsgCQJKkErIAkCSphJwBSJxDT9IgzwdpkAVA6hx6kgZ5Pkh7uAUgSVIJWQBIklRCFgCSJJWQMwCpc89TGuT5IO1hAZA4p56lQZ4P0iC3ACRJKiELAEmSSsgtgNS55ykN8nyQ9rAAkKSc6Mjg9IPgvGlw+oEwbSJM6oJOe7Vt0V+FbX2wZjs8uRHuXw3zNsJAooWjBUDiHHqSBuX1fBjdAb/5Jvj4CTBldOw05dVZgf1H145TD4RPnACbe+DqBfDDRdAzEDthc1kASFJEFx8JXzgTDh4bO4nqmTIaPv9m+PDx8LU5cM+q2Imax8aSJEWQAZ8+Bf7uHF/8i2DqOPiHc+FPpkMlr62kYbIDkLpE966khuTkfKhk8Lfn1H76V7F85PjaFsGXZ0E1J+upUXYAJKnNfv80X/yL7JffAL93auwUI2cHIHGJdKqkpsjD+XDxkfDbJ8dOoZH6nVNg4Wa4t8AzAXYAJKlNRnfAH5wZO4WaIQP++CwYU+Afoy0AUhcKekitEHldf/RNcMi4NnyfaouDx8JlxxF9XTV6WABIUht0ZPDRE2OnULN9/MTaY1tEFgCS1AZvPtib/KRo/zFw6kGxUzSmwLsXGoqCFqZSS8Q8H951eMQvrpY673CYuz52iuGzAEid++nSoIjnw+kHxvvaaq3TDqSQz7VuAUhSG0ybGDuBWuXwgj62FgCS1Abju2InUKtMLOhjawEgSVIJWQBIUhvs6IudQK2yvaCPrUOAicsKOJgitUrM82H1dtjPywCTtGpbMZ9r7QBIUhs8WcDLxDQ08zbETtAYCwBJaoOfFvhNY7RvDxT0sbUAkKQ2eGoDbN4VO4Wa7cVdMH9j7BSNsQBIXQ7ecMI3A1JuRFzTA1X4wTPt+CbVTt+fD9Uq8Z8zfTMgvVJW0ENqhdjr+roFsHZH679Ptcf6nfBfi+Kvq0YPCwBJapPeAfiXJ2xypSAAX3scevpjJ2mcBYAktdG9K+Cqp2Kn0Eh9dx7cvzJ2ipHxPgCp80cNaVBOzof/+DkcNhEuPip2EjXizuXwn0+Sm/XUKDsAktRm1QB//kDtRaTgryGlEqh1b77yYO0xLDo7AIlzoE4alLfz4TtzYdkW+MO3wNTxsdNoX9bugH9+fLDtn7e11AgLAEmK6L4V8PBq+NCJ8LGTYf8xsRNpby/ugh/MhxnP1oY4U2IBIEmR9Q7UXmSufRpOPQh+6Ug47SCYNgkmjoIuN2vboq8K23thzTaYt752h7/5G9Jo99djAZC6RBeu1JCcnw/VAHPX1Q6p1awrJUkqIQsASZJKyC2AxKUwqSo1i+eDNMgCIHU53/OU2srzQdrDLQBJkkrIAkCSpBKyAJAkqYScAUhc5p6ntIfngzTIDoAkSSVkASBJUglZAEiSVEIWAJIklZBDgIlz6Eka5PkgDbIDIElSCVkASJJUQhYAkiSVkDMAqXPPUxrk+SDtYQdAkqQSsgOQON//XBrk+SANsgMgSVIJ2QFInXue0iDPB2kPOwCSJJWQBYAkSSXkFkDiHHqSBnk+SIPsAEiSVEJ2AFLn0JM0yPNB2sMOgCRJJWQBIElSCbkFkDiHnqRBng/SIAuA1LnnKQ3K+fnQkcEph8C5R8GpU+HQSTBxNHTaq22L/ips74EXtsG8tfDQCnh6LQzkfN00ygJAkiIb3QkfPBU+fBrsNyZ2mvLqrMCUsbXjpKnwkdNhczf8cB7cOB96+mMnbC4LAEmK6IJj4fffDgeNj51E9UwZC//9bPiNU+DfZsH9y2Inah4bS5IUQQZ8cjp85SJf/Ivg4PHwVxfD58+BSiLDJHYAEpclunclNSIv50Mlg7+4CM4/NnYSDdcHT4H9x8Bf3wPVnKynRtkBkKQ2+9RbffEvsgveCL9zVuwUI2cBIEltdP6x8LEzYqfQSH18OrzrmNgpRsYCQJLaZHQnfPbtsVOoGTLgc+fUHtOisgCQpDb50Glw8ITYKdQsB42HXz8ldorGWQCkLhT0kFoh4pruoFYAKC0fPr322EZ/zmzgKHDzQkORyNUqUlPEPB9OO9Sb/KRoylg4+RB46oXYSYbPDoAktcE5R8VOoFY596jYCRpjASBJbXDKIbETqFWK+ti6BZA699OlQRHPh0Mnx/vaaq3DJlPI51o7AJLUBuO7YidQq0wYFTtBY+wAJK6oQ4B9A9DVETuFUtI3UNzzQflXxLVlB0C5tLMvdgKl5qXeuF/fNZ2u2GurUXYAUlfAfSmANVthspdMqYnWbCHq+eCaTlfstdUoOwDKpSJeU6t8mx95Tbmm0xV7bTXKAkC5NGt57ARKzUOR15RrOl2x11aj3AJIXBEHUwCefgG2dMN+Y2MnUQo2d8Oz6+KeD67pNOVhbTXKDkDqcnC/6UaOahWuf7Il/yIqoevm1NaUa1rNloe11ehhAaDcunEurNseO4WKbsNLcPNTsVPUuKbTkqe11QgLAOVWbz/8x8OFHK5VTgTgX39aW0t54JpOR97WViMsAJRrDyyBa5+InUJF9f3Z8NCy2ClezjWdhjyureGyAFDuXfEY3Lc4dgoVzb2L4XuPx05Rn2u62PK8toajiIOLGoZTLw9JdBsz4BNvhd8620WrfQvAdT+D7zwC1Ryvftd08RRlbQ2V6y5xqRQAu73zWPjsL8HBE2InUR6t2w7/70F4cGnsJEPnmi6GIq6t12MBkLjUCgCAUZ1w6Wlw2RkwZVzsNMqDzTvh+p/DzfOKOZTlms6voq+tfbEASFyKBcBulQxOOhTOORpOPrT2ntwTRvsugqnrG4CXeuD5rbWb6zy8DJ5Zm0ZL1jUdV8prqx4LgMSd+vfpFgCSpMZ5K+DEWeFJkurxMkBJkkrIAkCSpBJyCyB1TgBIkuqwAyBJUgnZAUicQ4CSpHrsAEiSVEIWAJIklZBbAKlzCFCSVIcdAEmSSsgOQOIcApQk1WMHQJKkErIDkDpnACRJddgBkCSphCwAJEkqIQsASZJKyBmAxGXOAEiS6rADIElSCVkASJJUQhYAkiSVkAWAJEkl5BBg4hwClCTVYwdAkqQSsgCQJKmELAAkSSohZwBS5wyAJKkOC4DEZbEDSJJyyS0ASZJKyAJAkqQScgsgdQnPAFQyOPlweNsb4cTD4JD9YMIY6LSsldSA/iq8tAvWboFn1sCjS2r/rSb6POoWceKm/5+Q3NId1QmXTocPvAUmj42dRlLKtuyEG2fDzDnQ2x87TXNZACQutQLgl94EnzofDpwQO4mkMtm4Hb51Pzy0MHaS5rEASNxZiRQAGfCb76gdLlpJscycA9++L41tAWcAlHuVDP70fXDum2InkVR2v3omTBkHX/1x8YsAC4DUFXyBAnzinb74S8qPd54Az2+Bqx+MnWRkLACUa+eeAB88O4k6RlJCPvQ2WLoOZi2KnaRxXjCl3BrVCb97XuwUkvRqGfCZC2F0V+wkjbMASFxW4OPS6XDgxBb8o0hSE+w/Ad53RvznykYPtwBSV9DeeaUC758OaVzDIClVvzYdbp4N1WrsJMNnB0C5dNI0mDwudgpJ2rf9xsMJh8ZO0RgLAOXSW98YO4EkDc1bj4udoDFuASiXTjissLsXkkrmhGmxEzTGAiBxWUFfRafuFzuBJA3NIZOL+VzrFoByafzo2AkkaWiK+nxlB0C5FHALQFIxFPW5ygJAubRjl1cBSCqGHbtiJ2iMWwDKpXVbYyeQpKF5YUvsBI2xA5C6gvamFqyC4wp6ba2kcnl2DYV8rrUDkLjYt5ps9Ji9pBX/GpLUfLMXx3/ObOSwAFAuLXwetu6MnUKS9m3rDlj8fOwUjXELQLlUrcLM2fDxd8VOIkmv7ebZUC1g+x/sAKQvFPf4yROwYVsr/lEkaeQ2bYc75hD9ubLRww6AcquvH666F77wq5BlsdNI0qAQ4Lt3Q29f7CSNswBIXNFfNx9bCDc/Bpe+LXYSSRp04yPw+KJiP8e6BaDcu+5BmLUgdgpJqnl4Acx4OHaKkbMDkLqCDqfsrRrg67fC85vgN85xO0BSHCHAzMfghz8t7uDf3iwAVAgh1CrulRvhty6AAybFTiSpTDZtg+/dU2v7p8ICQIXy2EKYsxR+ZTq87y0weXzsRJJStnUH/OhxuH1ObTA5JTZTE/f2L4cEGlX1VTI4fhpMP67236n7wfgx0NkRO5mkIuofqL2xz7otsHA1/GwJLF6TRru/niEVACGEjuUvcQ5Vfi2DdwDHAFOArpam04h99B9iJ5Ak5dE+twBWhTC2fyt/8Nw2vpDBQe0KpSZKtHKVJI3MaxYAy7aEy/q38k9kTGtnIEmS1HqvKgBCCNmybXwF+IvgjIAkSUl6WQEQQqgs38a1GVwWK5CaywpOklTPywqA57bzN/jinxZnACRJdewpAJZtCZdVA1+KGUaSJLVHJ8CqVWFsL/yjPy1KklQOFYDeifwhcETkLJIkqU06QwgdS7fyR7GDqEXs6kiS6uhcsoVzs8yb/KTKqwAkSfVUKhV+LXYISZLUXp3VwDtih5AkSe1VofbGPpIkqUQ6CUyOHUIt5BCgJKmOzgCjYodQ6zgEKEmqpxI7gCRJaj8LAEmSSqjTLeLE+QBLkuqwAyBJUgl1vv6HqMgcApQk1dMZbBFLklQ6dgBSZ4EnSarDGQBJkkrIqwAkSSohOwCSJJWQMwCJ8yoASVI9bgGkzgdYklRHpy8QkiSVjzMAkiSVkFsAKqxKBY49HE4/Do6ZBgdOgXGjoaMjdjJJRTQwADt7YONmWLoa5i6GZWugWo2drDUcAkxclmCFN6oTznsrXPgWmDg+dhpJqejogInjasfR0+Cis2H7TrjnMbh/NvT2x07YXBYAKpTpJ8JvXAT7TYydRFIZTBwHl54P550FM+6Cnz8bO1HzuAWgQsgyeM+58N5za7923Upqp8kT4VO/Dvc/ATfcBdUEnoTsACj3Khl88lI488TYSSSV3Xln1boCV95S/CLAywBTl8Dj+/7z4MwTSOJ7kVR800+EDS/CrQ/ETjIybgEkruh3AjzjJLj47b72S8qXX34HrF4HTxZ4JsD7ACi3ujrhAxfETiFJr5Zl8MGLoasrdpLGWQAot85/K0yZFDuFJNU3eSK8a3rsFI1zC0C5lFVq1/q7PiXl2flnwz2PQyjgzYK8CiB1BX0FPXYaTBgXO4Uk7dvE8XD0YbBsVewkw2cBkLiiDgGednzsBJI0NKcdD8uLWACEgv6EqLQdNQ1cm5KK4KjDYydojEOAyqUDpsROIElDc+B+sRM0xi2A1BX0p+ixo2MnkKShGTuGQj7XehWAcilQyPNJUgkV9bnKLQDlUndP7ASSNDTdu2InaIxbAIkr6lUAGzd7GaCkYti4uZjPtW4BpK6gD/Bzq+AN02KnkKTXt3wlhXyu9d0AlUvzF8K7zo6dQpJe3/xFsRM0xhkA5dLyNfDSztgpJGnftu+AFWtip2iMWwDKpVCF+x+FS3w3QEk5dt+jxb1pmR2AxGUFPh6aDVu2tuAfRZKaYMs2eOSJ+M+VjR4WAKkLxT36++DWu4tbXUtKVwhwyx3Q10f058pGD7cAlGvzFsB9s+D8c2InkaRB9zxUG1YuMjsAyr3b74e5z8ROIUk1Tz4Nd/40doqR8zJA5V4IcM1NsH4jXHQuZEW844akwgsB7n+k9kNJCluTbgEkLkvlAQ5w9wOwdj28/2KYPCl2IEllsmUb/OhOmP9s7f9T+DnEWwGrUOYvgGcXwzlvgXe+DSaMj51IUspe2gE/fQRmPQH9/bHTNJcdABVOfz888Aj89FF4w+Fw0pvgyMPhgCkwdix0ONkiqQEDVejuhk2bYcUqeGYRrFydRru/HjsAKqwQau8Z8Nyq2EkkqXgsAFKXaOUqSRoZtwAkSSohLwNMXAqTqpKk5nNcSpKkEnILQJKkEnIIMHVWeJKkOtwCkCSphNwCSJxDgJKkeuwASJJUQl4GmDofX0lSHW4BSJJUQm4BSJJUQl4GmDiHACVJ9bgFkDofYElSHW4BSJJUPgMWAJIklU9PZ7BFLElS2fTYAZAkqXx6vAogcZkdHknSq231KgBJkspno1sAkiSVzyYLAEmSSiYLbHILIHU+wJKkVwiBFb4bYOK8FbAk6ZUCPOcWgCRJJVPJWO4WgCRJJRMGWOZ9AFKW0UegK3YMSVKubL7t29lqtwBSFuiNHUGSlDvzwLcDTl1PBuNjh5Ak5UcGT0Ht7YD7I2dRi4TA9tgZJEn5EjLmAHRSZScZk2IHUvOFwGbgDbFzSJLyY6CfBwE6Q0Y3WACkqK+Pbd7nQZK0l3V3fCdbArUtgB2Rw6hFurt9bCVJe8l4ePcvO7EASNamDfR5J0BJ0m5Z4K7dv+4MGWsInBozkFpj3Vq8z4MkaY8wwJ27f90ZYJU/Jabp+ZVMdQZAkvQLz/74imzZ7v+pVAKrYqZRy4Q1Kzg5dghJUm78eO//6QywMvhTYnL6+1jf08PU2DkkSflQybjuZf8PLIyURS20cb3DnZKkPZbd+p88sfdvdI4OzN1VuxugA2MJWfQ0UzM7O5IkgMD18PJXhco7jsi6AywMgEc6x3NLfQ8ASRIAoQJXvvI3d78b4Jz2ZlEr9eyif+P62CkkSXmQwYMzr8hetd1f+cUfPvHqv6KiWrmMTi//kyT9wrfr/WZt37/KPaFS749VRCuXx04gScqJDWO28V/1/qAT4II3ZE/fvTKsBg5vayw1XQiwcskrRz0kSaUU+LcZM7Luen9UGfyYwfsDq7jWrYGtL8ZOIUnKgZ108e+v9Yd7Lv3L4I4An2xPJrXKgnmxE0iS8iCD7878Vrbxtf58TwdgYBQ/wncGLLRqFZY8HTuFJCkHdvVV+Pt9fcCeDsC7D8l23Lky3JrBR1qfS62wcinsfCl2CklSbAG+edu3s9X7+piX3f0vBK4hswAoqoVzwXd2lKTS2zEQ9v3TP+y1BQBwwAZuB15zv0D5tXMHLFsQO4UkKbqMy39yZbb29T7sZQXAWWdlfQSuiH4fW49hH3NnQX8/kqRyWxU6+dpQPvBVbwDUUeHr/VX+COhqeiy1RG8PzJ8N3v1PksotBP741m9lO4fysa+6/9+FR2RrCNzQ/FhqlfmPQ8+u2CkkSZHdcev3suuH+sH1bwDcwT83LY5aqr8f5j4aO4UkKbKdAxU+O5y/8KotAIB3H5E9dvuKcAfw7qbEUss8Owe6X3L6X5LKLMCf//iKbNlw/s5rvwXQAF8EqiMNpdbp7YEnHoidQpIUU4AHRu/gX4b79/b5g+PtK8J1wGUNp1JLPfQTeMr2vySV2ZZq4PRbr8pWDvcv1t0C2G2gnz+vdPABvCIgd15cD0/Pjp1CkhRTBp9p5MUf9rUFAFxybLYoC/xTY7HUSrNuh+pA7BSSpIi+cfMwpv5faZ8dAIC+0fxVZy8fAo5p9IuouZY9DWuWOvgnSaUVmNXVzRdG8imG9Bpy2/Lw7pBx+0i+kJpj106Y8W+1yX9JUim9UO3krJlXZM+P5JPscwtgt/ccnd0B/GAkX0gjFwLcd4Mv/pJUYt0h8IGRvvjDEAsAgLHj+D1g0Ui/oBo3/1FYtTh2CklSJAMh8OFbrs4ea8YnG3IBcP7B2UuhwscC9ObgvW9Kd7y4Dh6/e0gPlSQpRRmfu+Xq7Nbmfbph+tHy8MWM13+fYTVPfx/c8k3YvD52EklSFIEv3fT97PJmfsohdwB2u+Qo/gG4tpkhtA8B7vsvX/wlqcT+ptkv/tBAAZBlWdjRye8GeCx2W7wMxyO3w4oFQ354JEkpybj8pquz/92KTz3sAgDgsiOy7gwuzWBVswNp0LOz4elHYqeQJEUR+NJNV2VfatWnb6gAALjk6Gxtf+B9wItNzKNfWLEAZv04dgpJUgQDIfDZVrT99zbim8n9aEWYHqrcDezXhDwC1j4Hd11VG/6TJJXKjizjN29o4rT/a2nK3WRnLg9vy+BOYGIzPl+ZrV4E9/4QBnzxl6SyeaFa5f03X5P9rB1frGm3k79lSTinUuFWYEqzPmfZrHgG7p/hm/xIUgnN6u/nQzN/OPI7/A1VU99P5uYV4aTKALe2EklgAAADpElEQVQBRzbz85bBsnnw0I1QrcZOIklqs2919PC5GTOy3nZ+0aa/odytq8I0+rgtwKnN/typWvAIPHYbtev+JEllsSXL+MwN32/8LX1HoiXvKHvT8rBfR+Aq4P2t+PypGOiDWTNh6ZOxk0iS2irjgY4KvzXjqmxlvAgtEkLIZj7H5wl8Fehq1dcpqh1b4YFrYeOa2EkkSW20g4y/qPTwLzNmZFEnvlpWAOw2c0m4IFS4Bpja6q9VFGsWwYM3QO/O2EkkSe0SMh4IFT5901VZLt5Zt+UFAMBPFoeD+jv41wAfbsfXy6v+Pph7Dzz9MO73S1J5rCDwpzdcG2ev/7W0pQDY7Zal4ZIA3wSmtfPr5sH65fDITNi2MXYSSVKb7Mjg8qyPf5wxI+uOHeaV2loAAFy/Kuw/qpe/Bj4NdLb767dbTzc88RNY5qCfJJVFL3BlqPCXN34/eyF2mNfS9gJgtxufCydWBvgqcEmsDK0UqrXp/p/fCT07YqeRJLVBN3BF1snfzbgqy/2Id7QCYLebloYLyfjfBM6LnaUZQoA1C+HJO2HrhthpJEltsAH4RlfgG9demxVmozd6AbDbLYvDGdWMPyLjo0BH7DzDFmrT/U/dB5tWxw4jSWqxkMGDBL49fgwzrrwy2xU70HDlpgDY7ZYl4Y1rFvOVyVP58LjJ+b9/QE83LJ8Dix6D7b4xsiSlbhlwXdbB92Z8P1sYO8xI5K4A2O0v7wudY9fy5ckH8TsHHM6RHTkqBapVWLsEnpsLK5+Gan/sRJKkFlpIxq0ZzJhxTfZ47DDNktsCYG+XXxsOy+B/jZvEe6ccxhvGTqTS7gz9fbBuKTy/EFYtcLBPkhK2Hng4C9wZurhjxtXZ8tiBWqEQBcDezjsvdJ53GZdNOJCPTDyQt4ybxEHjJ9PR7O+kd1dtL3/jSlj/HGxaCQP+pC9JqdlMxlMh8FQGT1QCs667Lh936mu1whUA9Xz5a+GI0eO5ZNREzh47gRO6xnBIpZMJnaMZ0zWKrq4xdI4aQ0dWqU3p9+2C6gD0dUNvD3Rvg51bYMcW2LYBtq6HnVtjf1eSpAa9BPQB/WS8SGATgU1kbMpgBRnLGWB5fxfLbvxB5ti2JEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJElD9/8BvoCXFexYs/0AAAAASUVORK5CYII=",
    Jo = () => {
      const e = pe(),
        t = Qt(),
        [n, r] = (0, a.useState)(""),
        [i, o] = (0, a.useState)(!0),
        [s, l] = (0, a.useState)(!1),
        [u, c] = (0, a.useState)(null),
        [d, f] = (0, a.useState)(""),
        [h, p] = (0, a.useState)(null),
        [m, g] = (0, a.useState)(""),
        [y, v] = (0, a.useState)(0);
      let b = $t((e) => e.articlesHeader.articles.id);
      const w = $t((e) => e.articlesSections.data),
        S = localStorage.getItem("role");
      (0, a.useEffect)(() => {
        l("admin" === S || "super_admin" === S);
      }, [1]);
      const [k, E] = (0, a.useState)({
          article_id: "",
          title: "",
          content: "",
          position: "",
          image: "",
          status: !1,
        }),
        _ = (e) => {
          const { name: t, value: n } = e.target;
          E((e) => ({ ...e, [t]: n }));
        };
      return (0, Xt.jsxs)("div", {
        className: "flex-horizontal-container-raw justify-content-center",
        children: [
          (0, Xt.jsxs)("div", {
            className:
              "flex-horizontal-container-raw justify-content-space-between input-width-100 position-absolute",
            children: [
              (0, Xt.jsx)("div", {
                className: "log-out",
                onClick: () => {
                  (localStorage.clear(), e("/login"));
                },
                children: (0, Xt.jsx)("img", { src: qo, alt: "logout" }),
              }),
              "super_admin" === S
                ? (0, Xt.jsx)("button", {
                    onClick: () => {
                      "super_admin" === S && e("/change-role");
                    },
                    className: "custom-btn  btn-5",
                    children: (0, Xt.jsx)("span", { children: "change role" }),
                  })
                : null,
              "super_admin" === S
                ? (0, Xt.jsx)("button", {
                    onClick: () =>
                      (async () => {
                        "super_admin" === S && e("/newsletter-admin-panel");
                      })(),
                    className: "custom-btn  btn-6",
                    children: (0, Xt.jsx)("span", {
                      children: "newsletter-admin-panel",
                    }),
                  })
                : null,
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: s ? "container" : "container block-adding-article",
            children: [
              (0, Xt.jsx)("h4", {
                children:
                  "\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f",
              }),
              (0, Xt.jsx)("hr", { className: "line-after-header" }),
              (0, Xt.jsx)("h5", {
                children:
                  "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0438 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e",
              }),
              (0, Xt.jsx)(Gt, {}),
              (0, Xt.jsxs)("div", {
                className: "text",
                children: [
                  (0, Xt.jsx)("img", { src: Ho, alt: "icon", height: "20" }),
                  (0, Xt.jsx)("input", {
                    name: "section_title",
                    className: "margin-20",
                    type: "text",
                    placeholder:
                      "\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f\u0442\u0430",
                    onChange: (e) => {
                      g(e.target.value);
                    },
                    required: !0,
                  }),
                ],
              }),
              (0, Xt.jsx)("button", {
                className: "submit upload",
                onClick: async () => {
                  const e = w.filter((e) => e.title === m);
                  try {
                    e.length > 0
                      ? ((k.title = e[0].title),
                        v(e[0].id),
                        o(!1),
                        E((e) => ({
                          ...e,
                          content: "",
                          position: "",
                          image: "",
                        })))
                      : (await t(Uo({ title: m, status: !1 })).unwrap(), o(!1));
                  } catch (n) {
                    console.error("Error:", n);
                  }
                },
                children:
                  "\u0417\u0430\u043f\u0430\u0437\u0438 \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435\u0442\u043e \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f\u0442\u0430",
              }),
              (0, Xt.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault();
                  const n = {
                    ...k,
                    article_id: void 0 !== b ? b : y,
                    image: h,
                    main_image: u,
                  };
                  try {
                    (await t(zo(n)).unwrap(), o(!0), await t(ha()).unwrap());
                  } catch (r) {
                    console.error("Error submitting form:", r);
                  }
                },
                className:
                  "flex-vertical-container-raw flex-item align-items-center",
                children: [
                  (0, Xt.jsx)("input", {
                    name: "article_id",
                    className: "margin-10",
                    type: "number",
                    style: { display: "none" },
                    placeholder: "Article ID",
                    onChange: _,
                    value: b > 0 ? b : "",
                  }),
                  (0, Xt.jsxs)("div", {
                    className: "text",
                    children: [
                      (0, Xt.jsx)("img", {
                        src: Ho,
                        alt: "icon",
                        height: "20",
                        className: i ? "disabled-input" : "",
                      }),
                      (0, Xt.jsx)("input", {
                        name: "title",
                        disabled: i,
                        type: "text",
                        className: i ? "disabled-input margin-10" : "",
                        placeholder:
                          "\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430",
                        onChange: _,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Xt.jsxs)("div", {
                    className: "text",
                    children: [
                      (0, Xt.jsx)("img", {
                        src: Ho,
                        alt: "icon",
                        height: "12",
                        className: i ? "disabled-input" : "",
                      }),
                      (0, Xt.jsx)("input", {
                        name: "position",
                        type: "number",
                        className: i ? "disabled-input margin-10" : "",
                        value: k.position,
                        placeholder:
                          "\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430",
                        onChange: _,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Xt.jsx)("div", {
                    children: (0, Xt.jsx)("textarea", {
                      className: i
                        ? "disabled-input text text-area-form margin-10"
                        : "text text-area-form margin-10",
                      name: "content",
                      placeholder:
                        "\u0421\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430",
                      onChange: _,
                    }),
                  }),
                  (0, Xt.jsxs)("div", {
                    className: "file file--uploading",
                    children: [
                      (0, Xt.jsx)("input", {
                        id: "input-file",
                        onChange: (e) => {
                          (r(e.target.files[0].name),
                            e.target.files &&
                              e.target.files[0] &&
                              p(e.target.files[0]));
                        },
                        type: "file",
                      }),
                      (0, Xt.jsxs)("label", {
                        htmlFor: "input-file",
                        className: "input-file",
                        children: [
                          (0, Xt.jsx)("img", { src: Vo, alt: "upload" }),
                          (0, Xt.jsx)("p", {
                            children:
                              "\u041a\u0430\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u0441\u043d\u0438\u043c\u043a\u0430 \u043a\u044a\u043c \u0441\u0442\u0430\u0442\u0438\u044f",
                          }),
                        ],
                      }),
                      (0, Xt.jsx)("p", {
                        className: "upload-image-name",
                        children: n,
                      }),
                    ],
                  }),
                  (0, Xt.jsxs)("div", {
                    className: "file margin-top-30 file--uploading",
                    style: { marginBottom: "10px" },
                    children: [
                      (0, Xt.jsx)("input", {
                        id: "main-image-file",
                        onChange: (e) => {
                          e.target.files &&
                            e.target.files[0] &&
                            (c(e.target.files[0]), f(e.target.files[0].name));
                        },
                        type: "file",
                      }),
                      (0, Xt.jsxs)("label", {
                        htmlFor: "main-image-file",
                        className: "input-file",
                        children: [
                          (0, Xt.jsx)("img", { src: Vo, alt: "upload" }),
                          (0, Xt.jsx)("p", {
                            children:
                              "\u041a\u0430\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u0413\u041b\u0410\u0412\u041d\u0410 \u0441\u043d\u0438\u043c\u043a\u0430 (\u043a\u043e\u0440\u0438\u0446\u0430)",
                          }),
                        ],
                      }),
                      (0, Xt.jsx)("p", {
                        className: "upload-image-name",
                        children: d,
                      }),
                    ],
                  }),
                  (0, Xt.jsx)("button", {
                    className: "submit margin-15 upload",
                    children:
                      "\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0435 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f\u0442\u0430",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    Qo = ra("articles/deleteArticle", async (e, t) => {
      let { rejectWithValue: n } = t;
      try {
        return (
          await Mo.delete(
            `https://share.d-dimitrov.eu/api/delete/articles/${e}`,
          )
        ).data;
      } catch (r) {
        return n(r.response.data);
      }
    }),
    Wo = ua({
      name: "deleteArticles",
      initialState: { articles: [], loading: !1, status: "idle", error: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Qo.pending, (e) => {
          ((e.loading = !0), (e.status = "loading"), (e.error = null));
        })
          .addCase(Qo.fulfilled, (e, t) => {
            ((e.loading = !1),
              (e.status = "succeeded"),
              (e.articles = e.articles.filter((e) => e.id !== t.meta.arg)));
          })
          .addCase(Qo.rejected, (e, t) => {
            ((e.loading = !1), (e.status = "failed"), (e.error = t.payload));
          });
      },
    }).reducer,
    Ko = (e) => {
      let { onClose: t } = e;
      const n = (0, a.useRef)(null),
        [r, i] = (0, a.useState)(!0),
        o = () => {
          (i(!1), n.current && n.current.close(), t());
        };
      return (0, Xt.jsx)("div", {
        className: "input-width-100",
        children: (0, Xt.jsxs)("dialog", {
          ref: n,
          className:
            "show-hide-dialog dialog-content flex-vertical-container align-content-center align-items-center text-align-center padding-15",
          onClick: (e) => {
            e.target === n.current && o();
          },
          style: { display: r ? "block" : "none" },
          children: [
            (0, Xt.jsx)("h6", {
              children:
                "\u26a0\ufe0f \u041d\u044f\u043c\u0430\u0442\u0435 \u043f\u0440\u0430\u0432\u0430!",
            }),
            (0, Xt.jsx)("p", {
              children:
                "\u041d\u044f\u043c\u0430\u0442\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e \u043f\u0440\u0430\u0432\u0430, \u0437\u0430 \u0434\u0430 \u0438\u0437\u043f\u044a\u043b\u043d\u0438\u0442\u0435 \u0442\u0430\u0437\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f.",
            }),
            (0, Xt.jsx)("div", {
              children: (0, Xt.jsx)("button", {
                className: "access-denied-btn",
                onClick: o,
                children: "\u0417\u0430\u0442\u0432\u043e\u0440\u0438",
              }),
            }),
          ],
        }),
      });
    },
    $o = (e) => {
      let { onClose: t } = e;
      const n = (0, a.useRef)(null),
        [r, i] = (0, a.useState)(!0);
      (0, a.useEffect)(() => {
        console.log("pesho", t);
      }, []);
      const o = () => {
        (i(!1), n.current && n.current.close(), t("dont"));
      };
      return (0, Xt.jsx)("div", {
        className: "input-width-100",
        children: (0, Xt.jsxs)("dialog", {
          ref: n,
          className:
            "show-hide-dialog dialog-content flex-vertical-container align-content-center align-items-center text-align-center padding-15",
          onClick: (e) => {
            e.target === n.current && o();
          },
          style: { display: r ? "block" : "none" },
          children: [
            (0, Xt.jsx)("h6", {
              children:
                "\u26a0\ufe0f \u041d\u044f\u043c\u0430\u0442\u0435 \u043f\u0440\u0430\u043212312312\u0430!",
            }),
            (0, Xt.jsx)("p", {
              children:
                "\u041d\u044f\u043c\u0430\u0442\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e \u043f\u0440\u0430\u0432\u0430, \u0437\u0430 \u0434\u0430 \u0438\u0437\u043f\u044a\u043b\u043d\u0438\u0442\u0435 \u0442\u0430\u0437\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f.",
            }),
            (0, Xt.jsxs)("div", {
              children: [
                (0, Xt.jsx)("button", {
                  className: "access-denied-btn",
                  onClick: () => {
                    t("delete");
                  },
                  children:
                    "\u0414\u0430, \u0441\u0438\u0433\u0443\u0440\u0435\u043d \u0441\u044a\u043c",
                }),
                (0, Xt.jsx)("button", {
                  className: "access-denied-btn",
                  onClick: o,
                  children: "\u0417\u0430\u0442\u0432\u043e\u0440\u0438",
                }),
              ],
            }),
          ],
        }),
      });
    },
    Yo = () => {
      const e = Qt(),
        t = $t((e) => e.articlesSections.status),
        [n, r] = (0, a.useState)(!1),
        [, i] = (0, a.useState)(!1),
        [, o] = (0, a.useState)(!1),
        [s, l] = (0, a.useState)(!1),
        u = localStorage.getItem("role");
      (0, a.useEffect)(() => {
        f();
      }, [1]);
      const c = $t((e) => e.articlesSections.data),
        d = pe(),
        f = () => {
          "idle" === t && e(ha());
        };
      return (0, Xt.jsxs)("div", {
        children: [
          n && (0, Xt.jsx)(Ko, { onClose: () => r(!1) }),
          " ",
          s &&
            (0, Xt.jsx)($o, {
              onClose: (t) =>
                ((t) => {
                  (o(!1),
                    l(!1),
                    "delete" === t
                      ? e(Qo(t))
                          .unwrap()
                          .then(() => {
                            e(ha());
                          })
                          .catch((e) => {
                            console.error("Error deleting article:", e);
                          })
                      : r(!1));
                })(t),
            }),
          c.isLoading
            ? (0, Xt.jsx)("div", {
                children: (0, Xt.jsxs)("h1", {
                  children: ["Loading........", ""],
                }),
              })
            : (0, Xt.jsxs)("table", {
                className: "table mt-5 text-center",
                children: [
                  (0, Xt.jsx)("thead", {
                    children: (0, Xt.jsxs)("tr", {
                      children: [
                        (0, Xt.jsx)("th", { children: "Header" }),
                        (0, Xt.jsx)("th", { children: "Date" }),
                        (0, Xt.jsx)("th", { children: "Time" }),
                        (0, Xt.jsx)("th", { children: "Edit" }),
                        (0, Xt.jsx)("th", { children: "Delete" }),
                      ],
                    }),
                  }),
                  (0, Xt.jsx)("tbody", {
                    children: c.map((e, t) =>
                      (0, Xt.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, Xt.jsx)("td", {
                              style: { position: "relative", top: "25px" },
                              children: e.title,
                            }),
                            (0, Xt.jsx)("td", {
                              style: { position: "relative", top: "25px" },
                              children: e.create_article_date,
                            }),
                            (0, Xt.jsx)("td", {
                              style: { position: "relative", top: "25px" },
                              children: e.create_article_time,
                            }),
                            (0, Xt.jsx)("td", {
                              children: (0, Xt.jsx)("button", {
                                onClick: () =>
                                  ((e) => {
                                    let t = e.id;
                                    "admin" === u || "super_admin" === u
                                      ? d(`/update-section/${t}`)
                                      : (i(!0), r(!0));
                                  })(e),
                                className: "custom-btn  btn-5",
                                children: (0, Xt.jsx)("span", {
                                  children: "Edit",
                                }),
                              }),
                            }),
                            (0, Xt.jsx)("td", {
                              className:
                                "flex-horizontal-container-raw justify-content-center",
                              children: (0, Xt.jsx)("button", {
                                onClick: () =>
                                  (async () => {
                                    if ("admin" === u || "user" === u)
                                      (i(!0), r(!0));
                                    else
                                      try {
                                        (o(!0), l(!0));
                                      } catch (e) {
                                        console.error("Error:", e);
                                      }
                                  })(e.id),
                                className: "btn first edit-btn",
                                children: "Delete",
                              }),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
        ],
      });
    },
    Xo = "https://share.d-dimitrov.eu",
    Go = ra("auth/login", async (e, t) => {
      let { username: n, password: r, role: a } = e,
        { rejectWithValue: i } = t;
      try {
        console.log("pesho", Xo);
        const e = await fetch(`${Xo}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: n, password: r, role: a }),
          }),
          t = await e.json();
        if ((401 === e.status && localStorage.clear(), !e.ok))
          throw new Error(t.message || "Login failed");
        return (
          localStorage.setItem("token", t.token),
          localStorage.setItem("role", t.role),
          localStorage.setItem("username", t.username),
          t
        );
      } catch (o) {
        return i(o.message);
      }
    }),
    Zo = ra("auth/checkAuth", async (e, t) => {
      let { language: n } = e,
        { rejectWithValue: r } = t;
      try {
        const e = localStorage.getItem("token");
        if (!e) throw new Error("No token found");
        console.log("pesho", n);
        const t = await fetch(`${Xo}/api/check-auth?lang=${n}`, {
            headers: { Authorization: e },
          }),
          r = await t.json();
        if (!t.ok) throw new Error(r.message || "Authorization failed");
        return r;
      } catch (a) {
        return r(a.message);
      }
    }),
    es = ua({
      name: "auth",
      initialState: {
        user: null,
        isAuthenticated: !1,
        loading: !1,
        error: null,
      },
      reducers: {
        logout: (e) => {
          ((e.user = null),
            (e.isAuthenticated = !1),
            localStorage.removeItem("token"));
        },
      },
      extraReducers: (e) => {
        e.addCase(Go.pending, (e) => {
          ((e.loading = !0), (e.error = null));
        })
          .addCase(Go.fulfilled, (e, t) => {
            ((e.loading = !1), (e.isAuthenticated = !0), (e.user = t.payload));
          })
          .addCase(Go.rejected, (e, t) => {
            ((e.loading = !1), (e.error = t.payload));
          })
          .addCase(Zo.pending, (e) => {
            e.loading = !0;
          })
          .addCase(Zo.fulfilled, (e, t) => {
            ((e.loading = !1), (e.isAuthenticated = !0), (e.user = t.payload));
          })
          .addCase(Zo.rejected, (e, t) => {
            ((e.loading = !1), (e.isAuthenticated = !1), (e.error = t.payload));
          });
      },
    }),
    { logout: ts } = es.actions,
    ns = es.reducer;
  const rs =
      n.p +
      "static/media/google-svgrepo-com.762ddcc62008fa70d0e41797c75061bb.svg",
    as = ra("account/createAccount", async (e, t) => {
      const n = await fetch("https://share.d-dimitrov.eu/api/create-account", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        }),
        r = await n.json();
      return (
        401 === n.status &&
          (localStorage.clear(), (window.location.href = "/")),
        n.ok
          ? (localStorage.setItem("token", r.token), r)
          : t.rejectWithValue(r)
      );
    }),
    is = ua({
      name: "account",
      initialState: {
        userName: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        password: "",
        status: "idle",
        errorCreate: null,
      },
      reducers: {
        setFirstName: (e, t) => {
          e.firstName = t.payload;
        },
        setUserName: (e, t) => {
          e.userName = t.payload;
        },
        setLastName: (e, t) => {
          e.lastName = t.payload;
        },
        setEmail: (e, t) => {
          e.email = t.payload;
        },
        setPassword: (e, t) => {
          e.password = t.payload;
        },
        setRole: (e, t) => {
          e.role = t.payload;
        },
      },
      extraReducers: (e) => {
        e.addCase(as.pending, (e) => {
          e.status = "loading";
        })
          .addCase(as.fulfilled, (e) => {
            ((e.status = "succeeded"),
              (e.userName = ""),
              (e.firstName = ""),
              (e.lastName = ""),
              (e.role = ""),
              (e.email = ""),
              (e.password = ""));
          })
          .addCase(as.rejected, (e, t) => {
            ((e.status = "failed"), (e.errorCreate = t.payload));
          });
      },
    }),
    {
      setUserName: os,
      setFirstName: ss,
      setLastName: ls,
      setEmail: us,
      setRole: cs,
      setPassword: ds,
    } = is.actions,
    fs = is.reducer,
    hs = (e) => {
      let { onAccountCreated: t } = e;
      const [n, r] = (0, a.useState)(""),
        [i, o] = (0, a.useState)(""),
        [s, l] = (0, a.useState)(""),
        [u, c] = (0, a.useState)(""),
        [d, f] = (0, a.useState)(""),
        [h, p] = (0, a.useState)(""),
        [m, g] = (0, a.useState)(""),
        [y, v] = (0, a.useState)(""),
        [b, w] = (0, a.useState)(""),
        [S, k] = (0, a.useState)(""),
        [E, _] = (0, a.useState)(""),
        [C, A] = (0, a.useState)(""),
        [x, R] = (0, a.useState)(!1),
        [I, T] = (0, a.useState)(""),
        { errorCreate: P, status: N } = $t((e) => e.createAccount),
        O = Qt();
      (0, a.useEffect)(() => {
        if (x) {
          const e = document.getElementById("idCreateAccount"),
            t = document.getElementById("login");
          e.addEventListener("click", () => {
            t.classList.remove("right-panel-active");
          });
        }
      }, [x]);
      const L = () => {
        let e = !0;
        (g(""),
          v(""),
          w(""),
          k(""),
          _(""),
          A(""),
          n || (g("Username is required"), (e = !1)),
          i || (v("First name is required"), (e = !1)),
          s || (w("Last name is required"), (e = !1)),
          h || (k("Email is required"), (e = !1)),
          u || (_("Password is required"), (e = !1)),
          d || (A("Confirm password is required"), (e = !1)),
          u !== d && (A("Passwords do not match"), (e = !1)),
          u &&
            u.length < 6 &&
            (_("Password must be at least 6 characters"), (e = !1)));
        return (
          h &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) &&
            (k("Please enter a valid email"), (e = !1)),
          e
        );
      };
      return (0, Xt.jsxs)("form", {
        action: "#",
        onSubmit: async (e) => {
          e.preventDefault();
          if (L())
            try {
              (await O(
                as({
                  username: n,
                  first_name: i,
                  lastName: s,
                  email: h,
                  password: u,
                  role: "user",
                }),
              ).unwrap(),
                R(!0),
                T("Account created successfully!"),
                r(""),
                o(""),
                l(""),
                p(""),
                c(""),
                f(""),
                "function" === typeof t && t());
            } catch (a) {
              (console.error("Error:", a), R(!1));
            }
        },
        children: [
          (0, Xt.jsx)("h5", {
            className: "add-color-white",
            children: "Create Account",
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "Username",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "text",
                value: n,
                onChange: (e) => r(e.target.value),
              }),
              m && (0, Xt.jsx)("p", { style: { color: "red" }, children: m }),
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "First name",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "text",
                value: i,
                onChange: (e) => o(e.target.value),
              }),
              y && (0, Xt.jsx)("p", { style: { color: "red" }, children: y }),
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "Last name",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "text",
                value: s,
                onChange: (e) => l(e.target.value),
              }),
              b && (0, Xt.jsx)("p", { style: { color: "red" }, children: b }),
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "Email",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "email",
                value: h,
                onChange: (e) => p(e.target.value),
              }),
              S && (0, Xt.jsx)("p", { style: { color: "red" }, children: S }),
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "Password",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "password",
                value: u,
                onChange: (e) => c(e.target.value),
              }),
              E && (0, Xt.jsx)("p", { style: { color: "red" }, children: E }),
            ],
          }),
          (0, Xt.jsxs)("div", {
            className: "input-width-100",
            children: [
              (0, Xt.jsx)("label", {
                className: "add-color-white",
                children: "Confirm Password",
              }),
              (0, Xt.jsx)("input", {
                className: "border-radius-10",
                type: "password",
                value: d,
                onChange: (e) => f(e.target.value),
              }),
              C && (0, Xt.jsx)("p", { style: { color: "red" }, children: C }),
            ],
          }),
          P &&
            (0, Xt.jsx)("p", { style: { color: "red" }, children: P.message }),
          I && (0, Xt.jsx)("p", { style: { color: "green" }, children: I }),
          (0, Xt.jsx)("button", {
            className: "btn-login-page",
            id: "idCreateAccount",
            type: "submit",
            disabled: "loading" === N,
            children: "loading" === N ? "Creating..." : "Sign Up",
          }),
        ],
      });
    },
    ps = function (e) {
      const t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let a = e.charCodeAt(r);
        a < 128
          ? (t[n++] = a)
          : a < 2048
            ? ((t[n++] = (a >> 6) | 192), (t[n++] = (63 & a) | 128))
            : 55296 === (64512 & a) &&
                r + 1 < e.length &&
                56320 === (64512 & e.charCodeAt(r + 1))
              ? ((a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r))),
                (t[n++] = (a >> 18) | 240),
                (t[n++] = ((a >> 12) & 63) | 128),
                (t[n++] = ((a >> 6) & 63) | 128),
                (t[n++] = (63 & a) | 128))
              : ((t[n++] = (a >> 12) | 224),
                (t[n++] = ((a >> 6) & 63) | 128),
                (t[n++] = (63 & a) | 128));
      }
      return t;
    },
    ms = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: "function" === typeof atob,
      encodeByteArray(e, t) {
        if (!Array.isArray(e))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = [];
        for (let a = 0; a < e.length; a += 3) {
          const t = e[a],
            i = a + 1 < e.length,
            o = i ? e[a + 1] : 0,
            s = a + 2 < e.length,
            l = s ? e[a + 2] : 0,
            u = t >> 2,
            c = ((3 & t) << 4) | (o >> 4);
          let d = ((15 & o) << 2) | (l >> 6),
            f = 63 & l;
          (s || ((f = 64), i || (d = 64)), r.push(n[u], n[c], n[d], n[f]));
        }
        return r.join("");
      },
      encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? btoa(e)
          : this.encodeByteArray(ps(e), t);
      },
      decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? atob(e)
          : (function (e) {
              const t = [];
              let n = 0,
                r = 0;
              for (; n < e.length; ) {
                const a = e[n++];
                if (a < 128) t[r++] = String.fromCharCode(a);
                else if (a > 191 && a < 224) {
                  const i = e[n++];
                  t[r++] = String.fromCharCode(((31 & a) << 6) | (63 & i));
                } else if (a > 239 && a < 365) {
                  const i =
                    (((7 & a) << 18) |
                      ((63 & e[n++]) << 12) |
                      ((63 & e[n++]) << 6) |
                      (63 & e[n++])) -
                    65536;
                  ((t[r++] = String.fromCharCode(55296 + (i >> 10))),
                    (t[r++] = String.fromCharCode(56320 + (1023 & i))));
                } else {
                  const i = e[n++],
                    o = e[n++];
                  t[r++] = String.fromCharCode(
                    ((15 & a) << 12) | ((63 & i) << 6) | (63 & o),
                  );
                }
              }
              return t.join("");
            })(this.decodeStringToByteArray(e, t));
      },
      decodeStringToByteArray(e, t) {
        this.init_();
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = [];
        for (let a = 0; a < e.length; ) {
          const t = n[e.charAt(a++)],
            i = a < e.length ? n[e.charAt(a)] : 0;
          ++a;
          const o = a < e.length ? n[e.charAt(a)] : 64;
          ++a;
          const s = a < e.length ? n[e.charAt(a)] : 64;
          if ((++a, null == t || null == i || null == o || null == s))
            throw new gs();
          const l = (t << 2) | (i >> 4);
          if ((r.push(l), 64 !== o)) {
            const e = ((i << 4) & 240) | (o >> 2);
            if ((r.push(e), 64 !== s)) {
              const e = ((o << 6) & 192) | s;
              r.push(e);
            }
          }
        }
        return r;
      },
      init_() {
        if (!this.byteToCharMap_) {
          ((this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {}));
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            ((this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] =
                this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)));
        }
      },
    };
  class gs extends Error {
    constructor() {
      (super(...arguments), (this.name = "DecodeBase64StringError"));
    }
  }
  const ys = function (e) {
      return (function (e) {
        const t = ps(e);
        return ms.encodeByteArray(t, !0);
      })(e).replace(/\./g, "");
    },
    vs = function (e) {
      try {
        return ms.decodeString(e, !0);
      } catch (im) {
        console.error("base64Decode failed: ", im);
      }
      return null;
    };
  const bs = () =>
      (function () {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof globalThis) return globalThis;
        throw new Error("Unable to locate global object.");
      })().__FIREBASE_DEFAULTS__,
    ws = () => {
      try {
        return (
          bs() ||
          (() => {
            if ("undefined" === typeof process) return;
            const e = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_API_URL_PROD: "https://share.d-dimitrov.eu",
            }.__FIREBASE_DEFAULTS__;
            return e ? JSON.parse(e) : void 0;
          })() ||
          (() => {
            if ("undefined" === typeof document) return;
            let e;
            try {
              e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
            } catch (im) {
              return;
            }
            const t = e && vs(e[1]);
            return t && JSON.parse(t);
          })()
        );
      } catch (im) {
        return void console.info(
          `Unable to get __FIREBASE_DEFAULTS__ due to: ${im}`,
        );
      }
    },
    Ss = (e) => ws()?.emulatorHosts?.[e],
    ks = () => ws()?.config,
    Es = (e) => ws()?.[`_${e}`];
  class _s {
    constructor() {
      ((this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = e), (this.reject = t));
        })));
    }
    wrapCallback(e) {
      return (t, n) => {
        (t ? this.reject(t) : this.resolve(n),
          "function" === typeof e &&
            (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n)));
      };
    }
  }
  function Cs() {
    return "undefined" !== typeof navigator &&
      "string" === typeof navigator.userAgent
      ? navigator.userAgent
      : "";
  }
  class As extends Error {
    constructor(e, t, n) {
      (super(t),
        (this.code = e),
        (this.customData = n),
        (this.name = "FirebaseError"),
        Object.setPrototypeOf(this, As.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, xs.prototype.create));
    }
  }
  class xs {
    constructor(e, t, n) {
      ((this.service = e), (this.serviceName = t), (this.errors = n));
    }
    create(e) {
      const t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
        n = `${this.service}/${e}`,
        r = this.errors[e],
        a = r
          ? (function (e, t) {
              return e.replace(Rs, (e, n) => {
                const r = t[n];
                return null != r ? String(r) : `<${n}?>`;
              });
            })(r, t)
          : "Error",
        i = `${this.serviceName}: ${a} (${n}).`;
      return new As(n, i, t);
    }
  }
  const Rs = /\{\$([^}]+)}/g;
  function Is(e, t) {
    if (e === t) return !0;
    const n = Object.keys(e),
      r = Object.keys(t);
    for (const a of n) {
      if (!r.includes(a)) return !1;
      const n = e[a],
        i = t[a];
      if (Ts(n) && Ts(i)) {
        if (!Is(n, i)) return !1;
      } else if (n !== i) return !1;
    }
    for (const a of r) if (!n.includes(a)) return !1;
    return !0;
  }
  function Ts(e) {
    return null !== e && "object" === typeof e;
  }
  function Ps(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
      Array.isArray(r)
        ? r.forEach((e) => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
          })
        : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : "";
  }
  function Ns(e) {
    const t = {};
    return (
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((e) => {
          if (e) {
            const [n, r] = e.split("=");
            t[decodeURIComponent(n)] = decodeURIComponent(r);
          }
        }),
      t
    );
  }
  function Os(e) {
    const t = e.indexOf("?");
    if (!t) return "";
    const n = e.indexOf("#", t);
    return e.substring(t, n > 0 ? n : void 0);
  }
  class Ls {
    constructor(e, t) {
      ((this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = t),
        this.task
          .then(() => {
            e(this);
          })
          .catch((e) => {
            this.error(e);
          }));
    }
    next(e) {
      this.forEachObserver((t) => {
        t.next(e);
      });
    }
    error(e) {
      (this.forEachObserver((t) => {
        t.error(e);
      }),
        this.close(e));
    }
    complete() {
      (this.forEachObserver((e) => {
        e.complete();
      }),
        this.close());
    }
    subscribe(e, t, n) {
      let r;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      ((r = (function (e, t) {
        if ("object" !== typeof e || null === e) return !1;
        for (const n of t) if (n in e && "function" === typeof e[n]) return !0;
        return !1;
      })(e, ["next", "error", "complete"])
        ? e
        : { next: e, error: t, complete: n }),
        void 0 === r.next && (r.next = js),
        void 0 === r.error && (r.error = js),
        void 0 === r.complete && (r.complete = js));
      const a = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? r.error(this.finalError) : r.complete();
            } catch (im) {}
          }),
        this.observers.push(r),
        a
      );
    }
    unsubscribeOne(e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }
    forEachObserver(e) {
      if (!this.finalized)
        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }
    sendOne(e, t) {
      this.task.then(() => {
        if (void 0 !== this.observers && void 0 !== this.observers[e])
          try {
            t(this.observers[e]);
          } catch (im) {
            "undefined" !== typeof console &&
              console.error &&
              console.error(im);
          }
      });
    }
    close(e) {
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(() => {
          ((this.observers = void 0), (this.onNoObservers = void 0));
        }));
    }
  }
  function js() {}
  function Ds(e) {
    return e && e._delegate ? e._delegate : e;
  }
  function Ms(e) {
    try {
      return (
        e.startsWith("http://") || e.startsWith("https://")
          ? new URL(e).hostname
          : e
      ).endsWith(".cloudworkstations.dev");
    } catch {
      return !1;
    }
  }
  class Us {
    constructor(e, t, n) {
      ((this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null));
    }
    setInstantiationMode(e) {
      return ((this.instantiationMode = e), this);
    }
    setMultipleInstances(e) {
      return ((this.multipleInstances = e), this);
    }
    setServiceProps(e) {
      return ((this.serviceProps = e), this);
    }
    setInstanceCreatedCallback(e) {
      return ((this.onInstanceCreated = e), this);
    }
  }
  const Fs = "[DEFAULT]";
  class zs {
    constructor(e, t) {
      ((this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map()));
    }
    get(e) {
      const t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        const e = new _s();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            const n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (im) {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      const t = this.normalizeInstanceIdentifier(e?.identifier),
        n = e?.optional ?? !1;
      if (!this.isInitialized(t) && !this.shouldAutoInitialize()) {
        if (n) return null;
        throw Error(`Service ${this.name} is not available`);
      }
      try {
        return this.getOrInitializeService({ instanceIdentifier: t });
      } catch (im) {
        if (n) return null;
        throw im;
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          `Mismatching Component ${e.name} for Provider ${this.name}.`,
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (
          (function (e) {
            return "EAGER" === e.instantiationMode;
          })(e)
        )
          try {
            this.getOrInitializeService({ instanceIdentifier: Fs });
          } catch (im) {}
        for (const [e, t] of this.instancesDeferred.entries()) {
          const n = this.normalizeInstanceIdentifier(e);
          try {
            const e = this.getOrInitializeService({ instanceIdentifier: n });
            t.resolve(e);
          } catch (im) {}
        }
      }
    }
    clearInstance() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs;
      (this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e));
    }
    async delete() {
      const e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
      ]);
    }
    isComponentSet() {
      return null != this.component;
    }
    isInitialized() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs;
      return this.instances.has(e);
    }
    getOptions() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs;
      return this.instancesOptions.get(e) || {};
    }
    initialize() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(`${this.name}(${n}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      const r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (const [a, i] of this.instancesDeferred.entries()) {
        n === this.normalizeInstanceIdentifier(a) && i.resolve(r);
      }
      return r;
    }
    onInit(e, t) {
      const n = this.normalizeInstanceIdentifier(t),
        r = this.onInitCallbacks.get(n) ?? new Set();
      (r.add(e), this.onInitCallbacks.set(n, r));
      const a = this.instances.get(n);
      return (
        a && e(a, n),
        () => {
          r.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      const n = this.onInitCallbacks.get(t);
      if (n)
        for (const r of n)
          try {
            r(e, t);
          } catch {}
    }
    getOrInitializeService(e) {
      let { instanceIdentifier: t, options: n = {} } = e,
        r = this.instances.get(t);
      if (
        !r &&
        this.component &&
        ((r = this.component.instanceFactory(this.container, {
          instanceIdentifier: ((a = t), a === Fs ? void 0 : a),
          options: n,
        })),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, t, r);
        } catch {}
      var a;
      return r || null;
    }
    normalizeInstanceIdentifier() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs;
      return this.component ? (this.component.multipleInstances ? e : Fs) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && "EXPLICIT" !== this.component.instantiationMode
      );
    }
  }
  class Bs {
    constructor(e) {
      ((this.name = e), (this.providers = new Map()));
    }
    addComponent(e) {
      const t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          `Component ${e.name} has already been registered with ${this.name}`,
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      (this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e));
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      const t = new zs(e, this);
      return (this.providers.set(e, t), t);
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  }
  const qs = [];
  var Vs;
  !(function (e) {
    ((e[(e.DEBUG = 0)] = "DEBUG"),
      (e[(e.VERBOSE = 1)] = "VERBOSE"),
      (e[(e.INFO = 2)] = "INFO"),
      (e[(e.WARN = 3)] = "WARN"),
      (e[(e.ERROR = 4)] = "ERROR"),
      (e[(e.SILENT = 5)] = "SILENT"));
  })(Vs || (Vs = {}));
  const Hs = {
      debug: Vs.DEBUG,
      verbose: Vs.VERBOSE,
      info: Vs.INFO,
      warn: Vs.WARN,
      error: Vs.ERROR,
      silent: Vs.SILENT,
    },
    Js = Vs.INFO,
    Qs = {
      [Vs.DEBUG]: "log",
      [Vs.VERBOSE]: "log",
      [Vs.INFO]: "info",
      [Vs.WARN]: "warn",
      [Vs.ERROR]: "error",
    },
    Ws = function (e, t) {
      if (t < e.logLevel) return;
      const n = new Date().toISOString(),
        r = Qs[t];
      if (!r)
        throw new Error(
          `Attempted to log a message with an invalid logType (value: ${t})`,
        );
      for (
        var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), o = 2;
        o < a;
        o++
      )
        i[o - 2] = arguments[o];
      console[r](`[${n}]  ${e.name}:`, ...i);
    };
  class Ks {
    constructor(e) {
      ((this.name = e),
        (this._logLevel = Js),
        (this._logHandler = Ws),
        (this._userLogHandler = null),
        qs.push(this));
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in Vs))
        throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = "string" === typeof e ? Hs[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if ("function" !== typeof e)
        throw new TypeError(
          "Value assigned to `logHandler` must be a function",
        );
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this._userLogHandler && this._userLogHandler(this, Vs.DEBUG, ...t),
        this._logHandler(this, Vs.DEBUG, ...t));
    }
    log() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this._userLogHandler && this._userLogHandler(this, Vs.VERBOSE, ...t),
        this._logHandler(this, Vs.VERBOSE, ...t));
    }
    info() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this._userLogHandler && this._userLogHandler(this, Vs.INFO, ...t),
        this._logHandler(this, Vs.INFO, ...t));
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this._userLogHandler && this._userLogHandler(this, Vs.WARN, ...t),
        this._logHandler(this, Vs.WARN, ...t));
    }
    error() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this._userLogHandler && this._userLogHandler(this, Vs.ERROR, ...t),
        this._logHandler(this, Vs.ERROR, ...t));
    }
  }
  let $s, Ys;
  const Xs = new WeakMap(),
    Gs = new WeakMap(),
    Zs = new WeakMap(),
    el = new WeakMap(),
    tl = new WeakMap();
  let nl = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return Gs.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || Zs.get(e);
        if ("store" === t)
          return n.objectStoreNames[1]
            ? void 0
            : n.objectStore(n.objectStoreNames[0]);
      }
      return il(e[t]);
    },
    set: (e, t, n) => ((e[t] = n), !0),
    has: (e, t) =>
      (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
      t in e,
  };
  function rl(e) {
    return e !== IDBDatabase.prototype.transaction ||
      "objectStoreNames" in IDBTransaction.prototype
      ? (
          Ys ||
          (Ys = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
        ? function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (e.apply(ol(this), n), il(Xs.get(this)));
          }
        : function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return il(e.apply(ol(this), n));
          }
      : function (t) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          const i = e.call(ol(this), t, ...r);
          return (Zs.set(i, t.sort ? t.sort() : [t]), il(i));
        };
  }
  function al(e) {
    return "function" === typeof e
      ? rl(e)
      : (e instanceof IDBTransaction &&
          (function (e) {
            if (Gs.has(e)) return;
            const t = new Promise((t, n) => {
              const r = () => {
                  (e.removeEventListener("complete", a),
                    e.removeEventListener("error", i),
                    e.removeEventListener("abort", i));
                },
                a = () => {
                  (t(), r());
                },
                i = () => {
                  (n(e.error || new DOMException("AbortError", "AbortError")),
                    r());
                };
              (e.addEventListener("complete", a),
                e.addEventListener("error", i),
                e.addEventListener("abort", i));
            });
            Gs.set(e, t);
          })(e),
        (t = e),
        (
          $s ||
          ($s = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
          ])
        ).some((e) => t instanceof e)
          ? new Proxy(e, nl)
          : e);
    var t;
  }
  function il(e) {
    if (e instanceof IDBRequest)
      return (function (e) {
        const t = new Promise((t, n) => {
          const r = () => {
              (e.removeEventListener("success", a),
                e.removeEventListener("error", i));
            },
            a = () => {
              (t(il(e.result)), r());
            },
            i = () => {
              (n(e.error), r());
            };
          (e.addEventListener("success", a), e.addEventListener("error", i));
        });
        return (
          t
            .then((t) => {
              t instanceof IDBCursor && Xs.set(t, e);
            })
            .catch(() => {}),
          tl.set(t, e),
          t
        );
      })(e);
    if (el.has(e)) return el.get(e);
    const t = al(e);
    return (t !== e && (el.set(e, t), tl.set(t, e)), t);
  }
  const ol = (e) => tl.get(e);
  const sl = ["get", "getKey", "getAll", "getAllKeys", "count"],
    ll = ["put", "add", "delete", "clear"],
    ul = new Map();
  function cl(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
    if (ul.get(t)) return ul.get(t);
    const n = t.replace(/FromIndex$/, ""),
      r = t !== n,
      a = ll.includes(n);
    if (
      !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
      (!a && !sl.includes(n))
    )
      return;
    const i = async function (e) {
      const t = this.transaction(e, a ? "readwrite" : "readonly");
      let i = t.store;
      for (
        var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1;
        l < o;
        l++
      )
        s[l - 1] = arguments[l];
      return (
        r && (i = i.index(s.shift())),
        (await Promise.all([i[n](...s), a && t.done]))[0]
      );
    };
    return (ul.set(t, i), i);
  }
  nl = ((e) => ({
    ...e,
    get: (t, n, r) => cl(t, n) || e.get(t, n, r),
    has: (t, n) => !!cl(t, n) || e.has(t, n),
  }))(nl);
  class dl {
    constructor(e) {
      this.container = e;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((e) => {
          if (
            (function (e) {
              const t = e.getComponent();
              return "VERSION" === t?.type;
            })(e)
          ) {
            const t = e.getImmediate();
            return `${t.library}/${t.version}`;
          }
          return null;
        })
        .filter((e) => e)
        .join(" ");
    }
  }
  const fl = "@firebase/app",
    hl = "0.14.10",
    pl = new Ks("@firebase/app"),
    ml = "@firebase/app-compat",
    gl = "@firebase/analytics-compat",
    yl = "@firebase/analytics",
    vl = "@firebase/app-check-compat",
    bl = "@firebase/app-check",
    wl = "@firebase/auth",
    Sl = "@firebase/auth-compat",
    kl = "@firebase/database",
    El = "@firebase/data-connect",
    _l = "@firebase/database-compat",
    Cl = "@firebase/functions",
    Al = "@firebase/functions-compat",
    xl = "@firebase/installations",
    Rl = "@firebase/installations-compat",
    Il = "@firebase/messaging",
    Tl = "@firebase/messaging-compat",
    Pl = "@firebase/performance",
    Nl = "@firebase/performance-compat",
    Ol = "@firebase/remote-config",
    Ll = "@firebase/remote-config-compat",
    jl = "@firebase/storage",
    Dl = "@firebase/storage-compat",
    Ml = "@firebase/firestore",
    Ul = "@firebase/ai",
    Fl = "@firebase/firestore-compat",
    zl = "firebase",
    Bl = "[DEFAULT]",
    ql = {
      [fl]: "fire-core",
      [ml]: "fire-core-compat",
      [yl]: "fire-analytics",
      [gl]: "fire-analytics-compat",
      [bl]: "fire-app-check",
      [vl]: "fire-app-check-compat",
      [wl]: "fire-auth",
      [Sl]: "fire-auth-compat",
      [kl]: "fire-rtdb",
      [El]: "fire-data-connect",
      [_l]: "fire-rtdb-compat",
      [Cl]: "fire-fn",
      [Al]: "fire-fn-compat",
      [xl]: "fire-iid",
      [Rl]: "fire-iid-compat",
      [Il]: "fire-fcm",
      [Tl]: "fire-fcm-compat",
      [Pl]: "fire-perf",
      [Nl]: "fire-perf-compat",
      [Ol]: "fire-rc",
      [Ll]: "fire-rc-compat",
      [jl]: "fire-gcs",
      [Dl]: "fire-gcs-compat",
      [Ml]: "fire-fst",
      [Fl]: "fire-fst-compat",
      [Ul]: "fire-vertex",
      "fire-js": "fire-js",
      [zl]: "fire-js-all",
    },
    Vl = new Map(),
    Hl = new Map(),
    Jl = new Map();
  function Ql(e, t) {
    try {
      e.container.addComponent(t);
    } catch (im) {
      pl.debug(
        `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
        im,
      );
    }
  }
  function Wl(e) {
    const t = e.name;
    if (Jl.has(t))
      return (
        pl.debug(`There were multiple attempts to register component ${t}.`),
        !1
      );
    Jl.set(t, e);
    for (const n of Vl.values()) Ql(n, e);
    for (const n of Hl.values()) Ql(n, e);
    return !0;
  }
  function Kl(e, t) {
    const n = e.container
      .getProvider("heartbeat")
      .getImmediate({ optional: !0 });
    return (n && n.triggerHeartbeat(), e.container.getProvider(t));
  }
  function $l(e) {
    return null !== e && void 0 !== e && void 0 !== e.settings;
  }
  const Yl = new xs("app", "Firebase", {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  });
  class Xl {
    constructor(e, t, n) {
      ((this._isDeleted = !1),
        (this._options = { ...e }),
        (this._config = { ...t }),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new Us("app", () => this, "PUBLIC")));
    }
    get automaticDataCollectionEnabled() {
      return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
    }
    set automaticDataCollectionEnabled(e) {
      (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
    }
    get name() {
      return (this.checkDestroyed(), this._name);
    }
    get options() {
      return (this.checkDestroyed(), this._options);
    }
    get config() {
      return (this.checkDestroyed(), this._config);
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw Yl.create("app-deleted", { appName: this._name });
    }
  }
  const Gl = "12.11.0";
  function Zl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e;
    if ("object" !== typeof t) {
      t = { name: t };
    }
    const r = { name: Bl, automaticDataCollectionEnabled: !0, ...t },
      a = r.name;
    if ("string" !== typeof a || !a)
      throw Yl.create("bad-app-name", { appName: String(a) });
    if ((n || (n = ks()), !n)) throw Yl.create("no-options");
    const i = Vl.get(a);
    if (i) {
      if (Is(n, i.options) && Is(r, i.config)) return i;
      throw Yl.create("duplicate-app", { appName: a });
    }
    const o = new Bs(a);
    for (const l of Jl.values()) o.addComponent(l);
    const s = new Xl(n, r, o);
    return (Vl.set(a, s), s);
  }
  function eu(e, t, n) {
    let r = ql[e] ?? e;
    n && (r += `-${n}`);
    const a = r.match(/\s|\//),
      i = t.match(/\s|\//);
    if (a || i) {
      const e = [`Unable to register library "${r}" with version "${t}":`];
      return (
        a &&
          e.push(
            `library name "${r}" contains illegal characters (whitespace or "/")`,
          ),
        a && i && e.push("and"),
        i &&
          e.push(
            `version name "${t}" contains illegal characters (whitespace or "/")`,
          ),
        void pl.warn(e.join(" "))
      );
    }
    Wl(new Us(`${r}-version`, () => ({ library: r, version: t }), "VERSION"));
  }
  const tu = "firebase-heartbeat-store";
  let nu = null;
  function ru() {
    return (
      nu ||
        (nu = (function (e, t) {
          let {
            blocked: n,
            upgrade: r,
            blocking: a,
            terminated: i,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          const o = indexedDB.open(e, t),
            s = il(o);
          return (
            r &&
              o.addEventListener("upgradeneeded", (e) => {
                r(
                  il(o.result),
                  e.oldVersion,
                  e.newVersion,
                  il(o.transaction),
                  e,
                );
              }),
            n &&
              o.addEventListener("blocked", (e) =>
                n(e.oldVersion, e.newVersion, e),
              ),
            s
              .then((e) => {
                (i && e.addEventListener("close", () => i()),
                  a &&
                    e.addEventListener("versionchange", (e) =>
                      a(e.oldVersion, e.newVersion, e),
                    ));
              })
              .catch(() => {}),
            s
          );
        })("firebase-heartbeat-database", 1, {
          upgrade: (e, t) => {
            if (0 === t)
              try {
                e.createObjectStore(tu);
              } catch (im) {
                console.warn(im);
              }
          },
        }).catch((e) => {
          throw Yl.create("idb-open", { originalErrorMessage: e.message });
        })),
      nu
    );
  }
  async function au(e, t) {
    try {
      const n = (await ru()).transaction(tu, "readwrite"),
        r = n.objectStore(tu);
      (await r.put(t, iu(e)), await n.done);
    } catch (im) {
      if (im instanceof As) pl.warn(im.message);
      else {
        const t = Yl.create("idb-set", { originalErrorMessage: im?.message });
        pl.warn(t.message);
      }
    }
  }
  function iu(e) {
    return `${e.name}!${e.options.appId}`;
  }
  class ou {
    constructor(e) {
      ((this.container = e), (this._heartbeatsCache = null));
      const t = this.container.getProvider("app").getImmediate();
      ((this._storage = new lu(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e))));
    }
    async triggerHeartbeat() {
      try {
        const e = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          t = su();
        if (
          null == this._heartbeatsCache?.heartbeats &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          null == this._heartbeatsCache?.heartbeats)
        )
          return;
        if (
          this._heartbeatsCache.lastSentHeartbeatDate === t ||
          this._heartbeatsCache.heartbeats.some((e) => e.date === t)
        )
          return;
        if (
          (this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
          this._heartbeatsCache.heartbeats.length > 30)
        ) {
          const e = (function (e) {
            if (0 === e.length) return -1;
            let t = 0,
              n = e[0].date;
            for (let r = 1; r < e.length; r++)
              e[r].date < n && ((n = e[r].date), (t = r));
            return t;
          })(this._heartbeatsCache.heartbeats);
          this._heartbeatsCache.heartbeats.splice(e, 1);
        }
        return this._storage.overwrite(this._heartbeatsCache);
      } catch (im) {
        pl.warn(im);
      }
    }
    async getHeartbeatsHeader() {
      try {
        if (
          (null === this._heartbeatsCache &&
            (await this._heartbeatsCachePromise),
          null == this._heartbeatsCache?.heartbeats ||
            0 === this._heartbeatsCache.heartbeats.length)
        )
          return "";
        const e = su(),
          { heartbeatsToSend: t, unsentEntries: n } = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1024;
            const n = [];
            let r = e.slice();
            for (const a of e) {
              const e = n.find((e) => e.agent === a.agent);
              if (e) {
                if ((e.dates.push(a.date), uu(n) > t)) {
                  e.dates.pop();
                  break;
                }
              } else if (
                (n.push({ agent: a.agent, dates: [a.date] }), uu(n) > t)
              ) {
                n.pop();
                break;
              }
              r = r.slice(1);
            }
            return { heartbeatsToSend: n, unsentEntries: r };
          })(this._heartbeatsCache.heartbeats),
          r = ys(JSON.stringify({ version: 2, heartbeats: t }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = e),
          n.length > 0
            ? ((this._heartbeatsCache.heartbeats = n),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          r
        );
      } catch (im) {
        return (pl.warn(im), "");
      }
    }
  }
  function su() {
    return new Date().toISOString().substring(0, 10);
  }
  class lu {
    constructor(e) {
      ((this.app = e),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
    }
    async runIndexedDBEnvironmentCheck() {
      return (
        !!(function () {
          try {
            return "object" === typeof indexedDB;
          } catch (im) {
            return !1;
          }
        })() &&
        new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              a = self.indexedDB.open(r);
            ((a.onsuccess = () => {
              (a.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0));
            }),
              (a.onupgradeneeded = () => {
                n = !1;
              }),
              (a.onerror = () => {
                t(a.error?.message || "");
              }));
          } catch (n) {
            t(n);
          }
        })
          .then(() => !0)
          .catch(() => !1)
      );
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        const e = await (async function (e) {
          try {
            const t = (await ru()).transaction(tu),
              n = await t.objectStore(tu).get(iu(e));
            return (await t.done, n);
          } catch (im) {
            if (im instanceof As) pl.warn(im.message);
            else {
              const t = Yl.create("idb-get", {
                originalErrorMessage: im?.message,
              });
              pl.warn(t.message);
            }
          }
        })(this.app);
        return e?.heartbeats ? e : { heartbeats: [] };
      }
      return { heartbeats: [] };
    }
    async overwrite(e) {
      if (await this._canUseIndexedDBPromise) {
        const t = await this.read();
        return au(this.app, {
          lastSentHeartbeatDate:
            e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        });
      }
    }
    async add(e) {
      if (await this._canUseIndexedDBPromise) {
        const t = await this.read();
        return au(this.app, {
          lastSentHeartbeatDate:
            e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
          heartbeats: [...t.heartbeats, ...e.heartbeats],
        });
      }
    }
  }
  function uu(e) {
    return ys(JSON.stringify({ version: 2, heartbeats: e })).length;
  }
  var cu;
  ((cu = ""),
    Wl(new Us("platform-logger", (e) => new dl(e), "PRIVATE")),
    Wl(new Us("heartbeat", (e) => new ou(e), "PRIVATE")),
    eu(fl, hl, cu),
    eu(fl, hl, "esm2020"),
    eu("fire-js", ""));
  eu("firebase", "12.11.0", "app");
  function du() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    };
  }
  const fu = du,
    hu = new xs("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }),
    pu = new Ks("@firebase/auth");
  function mu(e) {
    if (pu.logLevel <= Vs.ERROR) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      pu.error(`Auth (${Gl}): ${e}`, ...n);
    }
  }
  function gu(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    throw Su(e, ...n);
  }
  function yu(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return Su(e, ...n);
  }
  function vu(e, t, n) {
    const r = { ...fu(), [t]: n };
    return new xs("auth", "Firebase", r).create(t, { appName: e.name });
  }
  function bu(e) {
    return vu(
      e,
      "operation-not-supported-in-this-environment",
      "Operations that alter the current user are not supported in conjunction with FirebaseServerApp",
    );
  }
  function wu(e, t, n) {
    if (!(t instanceof n))
      throw (
        n.name !== t.constructor.name && gu(e, "argument-error"),
        vu(
          e,
          "argument-error",
          `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
        )
      );
  }
  function Su(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    if ("string" !== typeof e) {
      const t = n[0],
        r = [...n.slice(1)];
      return (r[0] && (r[0].appName = e.name), e._errorFactory.create(t, ...r));
    }
    return hu.create(e, ...n);
  }
  function ku(e, t) {
    if (!e) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        r[a - 2] = arguments[a];
      throw Su(t, ...r);
    }
  }
  function Eu(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw (mu(t), new Error(t));
  }
  function _u(e, t) {
    e || Eu(t);
  }
  function Cu() {
    return ("undefined" !== typeof self && self.location?.href) || "";
  }
  function Au() {
    return "http:" === xu() || "https:" === xu();
  }
  function xu() {
    return ("undefined" !== typeof self && self.location?.protocol) || null;
  }
  function Ru() {
    return (
      !(
        "undefined" !== typeof navigator &&
        navigator &&
        "onLine" in navigator &&
        "boolean" === typeof navigator.onLine &&
        (Au() ||
          (function () {
            const e =
              "object" === typeof chrome
                ? chrome.runtime
                : "object" === typeof browser
                  ? browser.runtime
                  : void 0;
            return "object" === typeof e && void 0 !== e.id;
          })() ||
          "connection" in navigator)
      ) || navigator.onLine
    );
  }
  class Iu {
    constructor(e, t) {
      ((this.shortDelay = e),
        (this.longDelay = t),
        _u(t > e, "Short delay should be less than long delay!"),
        (this.isMobile =
          ("undefined" !== typeof window &&
            !!(window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cs())) ||
          ("object" === typeof navigator &&
            "ReactNative" === navigator.product)));
    }
    get() {
      return Ru()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay);
    }
  }
  function Tu(e, t) {
    _u(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
  }
  class Pu {
    static initialize(e, t, n) {
      ((this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n));
    }
    static fetch() {
      return this.fetchImpl
        ? this.fetchImpl
        : "undefined" !== typeof self && "fetch" in self
          ? self.fetch
          : "undefined" !== typeof globalThis && globalThis.fetch
            ? globalThis.fetch
            : "undefined" !== typeof fetch
              ? fetch
              : void Eu(
                  "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                );
    }
    static headers() {
      return this.headersImpl
        ? this.headersImpl
        : "undefined" !== typeof self && "Headers" in self
          ? self.Headers
          : "undefined" !== typeof globalThis && globalThis.Headers
            ? globalThis.Headers
            : "undefined" !== typeof Headers
              ? Headers
              : void Eu(
                  "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                );
    }
    static response() {
      return this.responseImpl
        ? this.responseImpl
        : "undefined" !== typeof self && "Response" in self
          ? self.Response
          : "undefined" !== typeof globalThis && globalThis.Response
            ? globalThis.Response
            : "undefined" !== typeof Response
              ? Response
              : void Eu(
                  "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                );
    }
  }
  const Nu = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      INVALID_LOGIN_CREDENTIALS: "invalid-credential",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
        "password-does-not-meet-requirements",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type",
    },
    Ou = [
      "/v1/accounts:signInWithCustomToken",
      "/v1/accounts:signInWithEmailLink",
      "/v1/accounts:signInWithIdp",
      "/v1/accounts:signInWithPassword",
      "/v1/accounts:signInWithPhoneNumber",
      "/v1/token",
    ],
    Lu = new Iu(3e4, 6e4);
  function ju(e, t) {
    return e.tenantId && !t.tenantId ? { ...t, tenantId: e.tenantId } : t;
  }
  async function Du(e, t, n, r) {
    return Mu(
      e,
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      async () => {
        let a = {},
          i = {};
        r && ("GET" === t ? (i = r) : (a = { body: JSON.stringify(r) }));
        const o = Ps({ key: e.config.apiKey, ...i }).slice(1),
          s = await e._getAdditionalHeaders();
        ((s["Content-Type"] = "application/json"),
          e.languageCode && (s["X-Firebase-Locale"] = e.languageCode));
        const l = { method: t, headers: s, ...a };
        return (
          ("undefined" !== typeof navigator &&
            "Cloudflare-Workers" === navigator.userAgent) ||
            (l.referrerPolicy = "no-referrer"),
          e.emulatorConfig &&
            Ms(e.emulatorConfig.host) &&
            (l.credentials = "include"),
          Pu.fetch()(await Fu(e, e.config.apiHost, n, o), l)
        );
      },
    );
  }
  async function Mu(e, t, n) {
    e._canInitEmulator = !1;
    const r = { ...Nu, ...t };
    try {
      const t = new Bu(e),
        a = await Promise.race([n(), t.promise]);
      t.clearNetworkTimeout();
      const i = await a.json();
      if ("needConfirmation" in i)
        throw qu(e, "account-exists-with-different-credential", i);
      if (a.ok && !("errorMessage" in i)) return i;
      {
        const t = a.ok ? i.errorMessage : i.error.message,
          [n, o] = t.split(" : ");
        if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
          throw qu(e, "credential-already-in-use", i);
        if ("EMAIL_EXISTS" === n) throw qu(e, "email-already-in-use", i);
        if ("USER_DISABLED" === n) throw qu(e, "user-disabled", i);
        const s = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
        if (o) throw vu(e, s, o);
        gu(e, s);
      }
    } catch (im) {
      if (im instanceof As) throw im;
      gu(e, "network-request-failed", { message: String(im) });
    }
  }
  async function Uu(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    const i = await Du(e, t, n, r, a);
    return (
      "mfaPendingCredential" in i &&
        gu(e, "multi-factor-auth-required", { _serverResponse: i }),
      i
    );
  }
  async function Fu(e, t, n, r) {
    const a = `${t}${n}?${r}`,
      i = e,
      o = i.config.emulator ? Tu(e.config, a) : `${e.config.apiScheme}://${a}`;
    if (
      Ou.includes(n) &&
      (await i._persistenceManagerAvailable,
      "COOKIE" === i._getPersistenceType())
    ) {
      return i._getPersistence()._getFinalTarget(o).toString();
    }
    return o;
  }
  function zu(e) {
    switch (e) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  class Bu {
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
    constructor(e) {
      ((this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((e, t) => {
          this.timer = setTimeout(
            () => t(yu(this.auth, "network-request-failed")),
            Lu.get(),
          );
        })));
    }
  }
  function qu(e, t, n) {
    const r = { appName: e.name };
    (n.email && (r.email = n.email),
      n.phoneNumber && (r.phoneNumber = n.phoneNumber));
    const a = yu(e, t, r);
    return ((a.customData._tokenResponse = n), a);
  }
  function Vu(e) {
    return void 0 !== e && void 0 !== e.enterprise;
  }
  class Hu {
    constructor(e) {
      if (
        ((this.siteKey = ""),
        (this.recaptchaEnforcementState = []),
        void 0 === e.recaptchaKey)
      )
        throw new Error("recaptchaKey undefined");
      ((this.siteKey = e.recaptchaKey.split("/")[3]),
        (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
    }
    getProviderEnforcementState(e) {
      if (
        !this.recaptchaEnforcementState ||
        0 === this.recaptchaEnforcementState.length
      )
        return null;
      for (const t of this.recaptchaEnforcementState)
        if (t.provider && t.provider === e) return zu(t.enforcementState);
      return null;
    }
    isProviderEnabled(e) {
      return (
        "ENFORCE" === this.getProviderEnforcementState(e) ||
        "AUDIT" === this.getProviderEnforcementState(e)
      );
    }
    isAnyProviderEnabled() {
      return (
        this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ||
        this.isProviderEnabled("PHONE_PROVIDER")
      );
    }
  }
  async function Ju(e, t) {
    return Du(e, "GET", "/v2/recaptchaConfig", ju(e, t));
  }
  async function Qu(e, t) {
    return Du(e, "POST", "/v1/accounts:lookup", t);
  }
  function Wu(e) {
    if (e)
      try {
        const t = new Date(Number(e));
        if (!isNaN(t.getTime())) return t.toUTCString();
      } catch (im) {}
  }
  function Ku(e) {
    return 1e3 * Number(e);
  }
  function $u(e) {
    const [t, n, r] = e.split(".");
    if (void 0 === t || void 0 === n || void 0 === r)
      return (mu("JWT malformed, contained fewer than 3 sections"), null);
    try {
      const e = vs(n);
      return e
        ? JSON.parse(e)
        : (mu("Failed to decode base64 JWT payload"), null);
    } catch (im) {
      return (
        mu("Caught error parsing JWT payload as JSON", im?.toString()),
        null
      );
    }
  }
  function Yu(e) {
    const t = $u(e);
    return (
      ku(t, "internal-error"),
      ku("undefined" !== typeof t.exp, "internal-error"),
      ku("undefined" !== typeof t.iat, "internal-error"),
      Number(t.exp) - Number(t.iat)
    );
  }
  async function Xu(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
      return t;
    try {
      return await t;
    } catch (im) {
      throw (
        im instanceof As &&
          (function (e) {
            let { code: t } = e;
            return (
              "auth/user-disabled" === t || "auth/user-token-expired" === t
            );
          })(im) &&
          e.auth.currentUser === e &&
          (await e.auth.signOut()),
        im
      );
    }
  }
  class Gu {
    constructor(e) {
      ((this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4));
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        null !== this.timerId && clearTimeout(this.timerId));
    }
    getInterval(e) {
      if (e) {
        const e = this.errorBackoff;
        return ((this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e);
      }
      {
        this.errorBackoff = 3e4;
        const e =
          (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
        return Math.max(0, e);
      }
    }
    schedule() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!this.isRunning) return;
      const t = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, t);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (im) {
        return void (
          "auth/network-request-failed" === im?.code && this.schedule(!0)
        );
      }
      this.schedule();
    }
  }
  class Zu {
    constructor(e, t) {
      ((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime());
    }
    _initializeTime() {
      ((this.lastSignInTime = Wu(this.lastLoginAt)),
        (this.creationTime = Wu(this.createdAt)));
    }
    _copy(e) {
      ((this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime());
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  }
  async function ec(e) {
    const t = e.auth,
      n = await e.getIdToken(),
      r = await Xu(e, Qu(t, { idToken: n }));
    ku(r?.users.length, t, "internal-error");
    const a = r.users[0];
    e._notifyReloadListener(a);
    const i = a.providerUserInfo?.length ? tc(a.providerUserInfo) : [],
      o = (function (e, t) {
        const n = e.filter(
          (e) => !t.some((t) => t.providerId === e.providerId),
        );
        return [...n, ...t];
      })(e.providerData, i),
      s = e.isAnonymous,
      l = !(e.email && a.passwordHash) && !o?.length,
      u = !!s && l,
      c = {
        uid: a.localId,
        displayName: a.displayName || null,
        photoURL: a.photoUrl || null,
        email: a.email || null,
        emailVerified: a.emailVerified || !1,
        phoneNumber: a.phoneNumber || null,
        tenantId: a.tenantId || null,
        providerData: o,
        metadata: new Zu(a.createdAt, a.lastLoginAt),
        isAnonymous: u,
      };
    Object.assign(e, c);
  }
  function tc(e) {
    return e.map((e) => {
      let { providerId: t, ...n } = e;
      return {
        providerId: t,
        uid: n.rawId || "",
        displayName: n.displayName || null,
        email: n.email || null,
        phoneNumber: n.phoneNumber || null,
        photoURL: n.photoUrl || null,
      };
    });
  }
  class nc {
    constructor() {
      ((this.refreshToken = null),
        (this.accessToken = null),
        (this.expirationTime = null));
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(e) {
      (ku(e.idToken, "internal-error"),
        ku("undefined" !== typeof e.idToken, "internal-error"),
        ku("undefined" !== typeof e.refreshToken, "internal-error"));
      const t =
        "expiresIn" in e && "undefined" !== typeof e.expiresIn
          ? Number(e.expiresIn)
          : Yu(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
    }
    updateFromIdToken(e) {
      ku(0 !== e.length, "internal-error");
      const t = Yu(e);
      this.updateTokensAndExpiration(e, null, t);
    }
    async getToken(e) {
      return (arguments.length > 1 &&
        void 0 !== arguments[1] &&
        arguments[1]) ||
        !this.accessToken ||
        this.isExpired
        ? (ku(this.refreshToken, e, "user-token-expired"),
          this.refreshToken
            ? (await this.refresh(e, this.refreshToken), this.accessToken)
            : null)
        : this.accessToken;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(e, t) {
      const {
        accessToken: n,
        refreshToken: r,
        expiresIn: a,
      } = await (async function (e, t) {
        const n = await Mu(e, {}, async () => {
          const n = Ps({ grant_type: "refresh_token", refresh_token: t }).slice(
              1,
            ),
            { tokenApiHost: r, apiKey: a } = e.config,
            i = await Fu(e, r, "/v1/token", `key=${a}`),
            o = await e._getAdditionalHeaders();
          o["Content-Type"] = "application/x-www-form-urlencoded";
          const s = { method: "POST", headers: o, body: n };
          return (
            e.emulatorConfig &&
              Ms(e.emulatorConfig.host) &&
              (s.credentials = "include"),
            Pu.fetch()(i, s)
          );
        });
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token,
        };
      })(e, t);
      this.updateTokensAndExpiration(n, r, Number(a));
    }
    updateTokensAndExpiration(e, t, n) {
      ((this.refreshToken = t || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + 1e3 * n));
    }
    static fromJSON(e, t) {
      const { refreshToken: n, accessToken: r, expirationTime: a } = t,
        i = new nc();
      return (
        n &&
          (ku("string" === typeof n, "internal-error", { appName: e }),
          (i.refreshToken = n)),
        r &&
          (ku("string" === typeof r, "internal-error", { appName: e }),
          (i.accessToken = r)),
        a &&
          (ku("number" === typeof a, "internal-error", { appName: e }),
          (i.expirationTime = a)),
        i
      );
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      };
    }
    _assign(e) {
      ((this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime));
    }
    _clone() {
      return Object.assign(new nc(), this.toJSON());
    }
    _performRefresh() {
      return Eu("not implemented");
    }
  }
  function rc(e, t) {
    ku("string" === typeof e || "undefined" === typeof e, "internal-error", {
      appName: t,
    });
  }
  class ac {
    constructor(e) {
      let { uid: t, auth: n, stsTokenManager: r, ...a } = e;
      ((this.providerId = "firebase"),
        (this.proactiveRefresh = new Gu(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = r),
        (this.accessToken = r.accessToken),
        (this.displayName = a.displayName || null),
        (this.email = a.email || null),
        (this.emailVerified = a.emailVerified || !1),
        (this.phoneNumber = a.phoneNumber || null),
        (this.photoURL = a.photoURL || null),
        (this.isAnonymous = a.isAnonymous || !1),
        (this.tenantId = a.tenantId || null),
        (this.providerData = a.providerData ? [...a.providerData] : []),
        (this.metadata = new Zu(
          a.createdAt || void 0,
          a.lastLoginAt || void 0,
        )));
    }
    async getIdToken(e) {
      const t = await Xu(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        ku(t, this.auth, "internal-error"),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      );
    }
    getIdTokenResult(e) {
      return (async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = Ds(e),
          r = await n.getIdToken(t),
          a = $u(r);
        ku(a && a.exp && a.auth_time && a.iat, n.auth, "internal-error");
        const i = "object" === typeof a.firebase ? a.firebase : void 0,
          o = i?.sign_in_provider;
        return {
          claims: a,
          token: r,
          authTime: Wu(Ku(a.auth_time)),
          issuedAtTime: Wu(Ku(a.iat)),
          expirationTime: Wu(Ku(a.exp)),
          signInProvider: o || null,
          signInSecondFactor: i?.sign_in_second_factor || null,
        };
      })(this, e);
    }
    reload() {
      return (async function (e) {
        const t = Ds(e);
        (await ec(t),
          await t.auth._persistUserIfCurrent(t),
          t.auth._notifyListenersIfCurrent(t));
      })(this);
    }
    _assign(e) {
      this !== e &&
        (ku(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => ({ ...e }))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(e) {
      const t = new ac({
        ...this,
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      });
      return (t.metadata._copy(this.metadata), t);
    }
    _onReload(e) {
      (ku(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null)));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
      (e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await ec(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this));
    }
    async delete() {
      if ($l(this.auth.app)) return Promise.reject(bu(this.auth));
      const e = await this.getIdToken();
      return (
        await Xu(
          this,
          (async function (e, t) {
            return Du(e, "POST", "/v1/accounts:delete", t);
          })(this.auth, { idToken: e }),
        ),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return {
        uid: this.uid,
        email: this.email || void 0,
        emailVerified: this.emailVerified,
        displayName: this.displayName || void 0,
        isAnonymous: this.isAnonymous,
        photoURL: this.photoURL || void 0,
        phoneNumber: this.phoneNumber || void 0,
        tenantId: this.tenantId || void 0,
        providerData: this.providerData.map((e) => ({ ...e })),
        stsTokenManager: this.stsTokenManager.toJSON(),
        _redirectEventId: this._redirectEventId,
        ...this.metadata.toJSON(),
        apiKey: this.auth.config.apiKey,
        appName: this.auth.name,
      };
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(e, t) {
      const n = t.displayName ?? void 0,
        r = t.email ?? void 0,
        a = t.phoneNumber ?? void 0,
        i = t.photoURL ?? void 0,
        o = t.tenantId ?? void 0,
        s = t._redirectEventId ?? void 0,
        l = t.createdAt ?? void 0,
        u = t.lastLoginAt ?? void 0,
        {
          uid: c,
          emailVerified: d,
          isAnonymous: f,
          providerData: h,
          stsTokenManager: p,
        } = t;
      ku(c && p, e, "internal-error");
      const m = nc.fromJSON(this.name, p);
      (ku("string" === typeof c, e, "internal-error"),
        rc(n, e.name),
        rc(r, e.name),
        ku("boolean" === typeof d, e, "internal-error"),
        ku("boolean" === typeof f, e, "internal-error"),
        rc(a, e.name),
        rc(i, e.name),
        rc(o, e.name),
        rc(s, e.name),
        rc(l, e.name),
        rc(u, e.name));
      const g = new ac({
        uid: c,
        auth: e,
        email: r,
        emailVerified: d,
        displayName: n,
        isAnonymous: f,
        photoURL: i,
        phoneNumber: a,
        tenantId: o,
        stsTokenManager: m,
        createdAt: l,
        lastLoginAt: u,
      });
      return (
        h && Array.isArray(h) && (g.providerData = h.map((e) => ({ ...e }))),
        s && (g._redirectEventId = s),
        g
      );
    }
    static async _fromIdTokenResponse(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = new nc();
      r.updateFromServerResponse(t);
      const a = new ac({
        uid: t.localId,
        auth: e,
        stsTokenManager: r,
        isAnonymous: n,
      });
      return (await ec(a), a);
    }
    static async _fromGetAccountInfoResponse(e, t, n) {
      const r = t.users[0];
      ku(void 0 !== r.localId, "internal-error");
      const a = void 0 !== r.providerUserInfo ? tc(r.providerUserInfo) : [],
        i = !(r.email && r.passwordHash) && !a?.length,
        o = new nc();
      o.updateFromIdToken(n);
      const s = new ac({
          uid: r.localId,
          auth: e,
          stsTokenManager: o,
          isAnonymous: i,
        }),
        l = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: a,
          metadata: new Zu(r.createdAt, r.lastLoginAt),
          isAnonymous: !(r.email && r.passwordHash) && !a?.length,
        };
      return (Object.assign(s, l), s);
    }
  }
  const ic = new Map();
  function oc(e) {
    _u(e instanceof Function, "Expected a class definition");
    let t = ic.get(e);
    return t
      ? (_u(t instanceof e, "Instance stored in cache mismatched with class"),
        t)
      : ((t = new e()), ic.set(e, t), t);
  }
  class sc {
    constructor() {
      ((this.type = "NONE"), (this.storage = {}));
    }
    async _isAvailable() {
      return !0;
    }
    async _set(e, t) {
      this.storage[e] = t;
    }
    async _get(e) {
      const t = this.storage[e];
      return void 0 === t ? null : t;
    }
    async _remove(e) {
      delete this.storage[e];
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  sc.type = "NONE";
  const lc = sc;
  function uc(e, t, n) {
    return `firebase:${e}:${t}:${n}`;
  }
  class cc {
    constructor(e, t, n) {
      ((this.persistence = e), (this.auth = t), (this.userKey = n));
      const { config: r, name: a } = this.auth;
      ((this.fullUserKey = uc(this.userKey, r.apiKey, a)),
        (this.fullPersistenceKey = uc("persistence", r.apiKey, a)),
        (this.boundEventHandler = t._onStorageEvent.bind(t)),
        this.persistence._addListener(
          this.fullUserKey,
          this.boundEventHandler,
        ));
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON());
    }
    async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey);
      if (!e) return null;
      if ("string" === typeof e) {
        const t = await Qu(this.auth, { idToken: e }).catch(() => {});
        return t ? ac._fromGetAccountInfoResponse(this.auth, t, e) : null;
      }
      return ac._fromJSON(this.auth, e);
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(
        this.fullPersistenceKey,
        this.persistence.type,
      );
    }
    async setPersistence(e) {
      if (this.persistence === e) return;
      const t = await this.getCurrentUser();
      return (
        await this.removeCurrentUser(),
        (this.persistence = e),
        t ? this.setCurrentUser(t) : void 0
      );
    }
    delete() {
      this.persistence._removeListener(
        this.fullUserKey,
        this.boundEventHandler,
      );
    }
    static async create(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "authUser";
      if (!t.length) return new cc(oc(lc), e, n);
      const r = (
        await Promise.all(
          t.map(async (e) => {
            if (await e._isAvailable()) return e;
          }),
        )
      ).filter((e) => e);
      let a = r[0] || oc(lc);
      const i = uc(n, e.config.apiKey, e.name);
      let o = null;
      for (const l of t)
        try {
          const t = await l._get(i);
          if (t) {
            let n;
            if ("string" === typeof t) {
              const r = await Qu(e, { idToken: t }).catch(() => {});
              if (!r) break;
              n = await ac._fromGetAccountInfoResponse(e, r, t);
            } else n = ac._fromJSON(e, t);
            (l !== a && (o = n), (a = l));
            break;
          }
        } catch {}
      const s = r.filter((e) => e._shouldAllowMigration);
      return a._shouldAllowMigration && s.length
        ? ((a = s[0]),
          o && (await a._set(i, o.toJSON())),
          await Promise.all(
            t.map(async (e) => {
              if (e !== a)
                try {
                  await e._remove(i);
                } catch {}
            }),
          ),
          new cc(a, e, n))
        : new cc(a, e, n);
    }
  }
  function dc(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
      return "Opera";
    if (mc(t)) return "IEMobile";
    if (t.includes("msie") || t.includes("trident/")) return "IE";
    if (t.includes("edge/")) return "Edge";
    if (fc(t)) return "Firefox";
    if (t.includes("silk/")) return "Silk";
    if (yc(t)) return "Blackberry";
    if (vc(t)) return "Webos";
    if (hc(t)) return "Safari";
    if ((t.includes("chrome/") || pc(t)) && !t.includes("edge/"))
      return "Chrome";
    if (gc(t)) return "Android";
    {
      const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = e.match(t);
      if (2 === n?.length) return n[1];
    }
    return "Other";
  }
  function fc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /firefox\//i.test(e);
  }
  function hc() {
    const e = (
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs()
    ).toLowerCase();
    return (
      e.includes("safari/") &&
      !e.includes("chrome/") &&
      !e.includes("crios/") &&
      !e.includes("android")
    );
  }
  function pc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /crios\//i.test(e);
  }
  function mc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /iemobile/i.test(e);
  }
  function gc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /android/i.test(e);
  }
  function yc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /blackberry/i.test(e);
  }
  function vc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return /webos/i.test(e);
  }
  function bc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return (
      /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
    );
  }
  function wc() {
    return (
      (function () {
        const e = Cs();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      })() && 10 === document.documentMode
    );
  }
  function Sc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs();
    return (
      bc(e) || gc(e) || vc(e) || yc(e) || /windows phone/i.test(e) || mc(e)
    );
  }
  function kc(e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (e) {
      case "Browser":
        t = dc(Cs());
        break;
      case "Worker":
        t = `${dc(Cs())}-${e}`;
        break;
      default:
        t = e;
    }
    const r = n.length ? n.join(",") : "FirebaseCore-web";
    return `${t}/JsCore/${Gl}/${r}`;
  }
  class Ec {
    constructor(e) {
      ((this.auth = e), (this.queue = []));
    }
    pushCallback(e, t) {
      const n = (t) =>
        new Promise((n, r) => {
          try {
            n(e(t));
          } catch (im) {
            r(im);
          }
        });
      ((n.onAbort = t), this.queue.push(n));
      const r = this.queue.length - 1;
      return () => {
        this.queue[r] = () => Promise.resolve();
      };
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      const t = [];
      try {
        for (const n of this.queue)
          (await n(e), n.onAbort && t.push(n.onAbort));
      } catch (im) {
        t.reverse();
        for (const r of t)
          try {
            r();
          } catch (n) {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: im?.message,
        });
      }
    }
  }
  class _c {
    constructor(e) {
      const t = e.customStrengthOptions;
      ((this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          t.minPasswordLength ?? 6),
        t.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength),
        void 0 !== t.containsLowercaseCharacter &&
          (this.customStrengthOptions.containsLowercaseLetter =
            t.containsLowercaseCharacter),
        void 0 !== t.containsUppercaseCharacter &&
          (this.customStrengthOptions.containsUppercaseLetter =
            t.containsUppercaseCharacter),
        void 0 !== t.containsNumericCharacter &&
          (this.customStrengthOptions.containsNumericCharacter =
            t.containsNumericCharacter),
        void 0 !== t.containsNonAlphanumericCharacter &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            t.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
          (this.enforcementState = "OFF"),
        (this.allowedNonAlphanumericCharacters =
          e.allowedNonAlphanumericCharacters?.join("") ?? ""),
        (this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1),
        (this.schemaVersion = e.schemaVersion));
    }
    validatePassword(e) {
      const t = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, t),
        this.validatePasswordCharacterOptions(e, t),
        t.isValid && (t.isValid = t.meetsMinPasswordLength ?? !0),
        t.isValid && (t.isValid = t.meetsMaxPasswordLength ?? !0),
        t.isValid && (t.isValid = t.containsLowercaseLetter ?? !0),
        t.isValid && (t.isValid = t.containsUppercaseLetter ?? !0),
        t.isValid && (t.isValid = t.containsNumericCharacter ?? !0),
        t.isValid && (t.isValid = t.containsNonAlphanumericCharacter ?? !0),
        t
      );
    }
    validatePasswordLengthOptions(e, t) {
      const n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      (n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r));
    }
    validatePasswordCharacterOptions(e, t) {
      let n;
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      for (let r = 0; r < e.length; r++)
        ((n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= "a" && n <= "z",
            n >= "A" && n <= "Z",
            n >= "0" && n <= "9",
            this.allowedNonAlphanumericCharacters.includes(n),
          ));
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, a) {
      (this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||
            (e.containsNonAlphanumericCharacter = a)));
    }
  }
  class Cc {
    constructor(e, t, n, r) {
      ((this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new xc(this)),
        (this.idTokenSubscription = new xc(this)),
        (this.beforeStateQueue = new Ec(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = hu),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this._resolvePersistenceManagerAvailable = void 0),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion),
        (this._persistenceManagerAvailable = new Promise(
          (e) => (this._resolvePersistenceManagerAvailable = e),
        )));
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = oc(t)),
        (this._initializationPromise = this.queue(async () => {
          if (
            !this._deleted &&
            ((this.persistenceManager = await cc.create(this, e)),
            this._resolvePersistenceManagerAvailable?.(),
            !this._deleted)
          ) {
            if (this._popupRedirectResolver?._shouldInitProactively)
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (im) {}
            (await this.initializeCurrentUser(t),
              (this.lastNotifiedUid = this.currentUser?.uid || null),
              this._deleted || (this._isInitialized = !0));
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      const e = await this.assertedPersistence.getCurrentUser();
      return this.currentUser || e
        ? this.currentUser && e && this.currentUser.uid === e.uid
          ? (this._currentUser._assign(e),
            void (await this.currentUser.getIdToken()))
          : void (await this._updateCurrentUser(e, !0))
        : void 0;
    }
    async initializeCurrentUserFromIdToken(e) {
      try {
        const t = await Qu(this, { idToken: e }),
          n = await ac._fromGetAccountInfoResponse(this, t, e);
        await this.directlySetCurrentUser(n);
      } catch (t) {
        (console.warn(
          "FirebaseServerApp could not login user with provided authIdToken: ",
          t,
        ),
          await this.directlySetCurrentUser(null));
      }
    }
    async initializeCurrentUser(e) {
      if ($l(this.app)) {
        const e = this.app.settings.authIdToken;
        return e
          ? new Promise((t) => {
              setTimeout(() =>
                this.initializeCurrentUserFromIdToken(e).then(t, t),
              );
            })
          : this.directlySetCurrentUser(null);
      }
      const t = await this.assertedPersistence.getCurrentUser();
      let n = t,
        r = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const t = this.redirectUser?._redirectEventId,
          a = n?._redirectEventId,
          i = await this.tryRedirectSignIn(e);
        (t && t !== a) || !i?.user || ((n = i.user), (r = !0));
      }
      if (!n) return this.directlySetCurrentUser(null);
      if (!n._redirectEventId) {
        if (r)
          try {
            await this.beforeStateQueue.runMiddleware(n);
          } catch (im) {
            ((n = t),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(im),
              ));
          }
        return n
          ? this.reloadAndSetCurrentUserOrClear(n)
          : this.directlySetCurrentUser(null);
      }
      return (
        ku(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === n._redirectEventId
          ? this.directlySetCurrentUser(n)
          : this.reloadAndSetCurrentUserOrClear(n)
      );
    }
    async tryRedirectSignIn(e) {
      let t = null;
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch (im) {
        await this._setRedirectUser(null);
      }
      return t;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await ec(e);
      } catch (im) {
        if ("auth/network-request-failed" !== im?.code)
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = (function () {
        if ("undefined" === typeof navigator) return null;
        const e = navigator;
        return (e.languages && e.languages[0]) || e.language || null;
      })();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      if ($l(this.app)) return Promise.reject(bu(this));
      const t = e ? Ds(e) : null;
      return (
        t &&
          ku(
            t.auth.config.apiKey === this.config.apiKey,
            this,
            "invalid-user-token",
          ),
        this._updateCurrentUser(t && t._clone(this))
      );
    }
    async _updateCurrentUser(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!this._deleted)
        return (
          e && ku(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            (await this.directlySetCurrentUser(e), this.notifyAuthListeners());
          })
        );
    }
    async signOut() {
      return $l(this.app)
        ? Promise.reject(bu(this))
        : (await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0));
    }
    setPersistence(e) {
      return $l(this.app)
        ? Promise.reject(bu(this))
        : this.queue(async () => {
            await this.assertedPersistence.setPersistence(oc(e));
          });
    }
    _getRecaptchaConfig() {
      return null == this.tenantId
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      const t = this._getPasswordPolicyInternal();
      return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? Promise.reject(
            this._errorFactory.create(
              "unsupported-password-policy-schema-version",
              {},
            ),
          )
        : t.validatePassword(e);
    }
    _getPasswordPolicyInternal() {
      return null === this.tenantId
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      const e = await (async function (e) {
          return Du(
            e,
            "GET",
            "/v2/passwordPolicy",
            ju(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            ),
          );
        })(this),
        t = new _c(e);
      null === this.tenantId
        ? (this._projectPasswordPolicy = t)
        : (this._tenantPasswordPolicies[this.tenantId] = t);
    }
    _getPersistenceType() {
      return this.assertedPersistence.persistence.type;
    }
    _getPersistence() {
      return this.assertedPersistence.persistence;
    }
    _updateErrorMap(e) {
      this._errorFactory = new xs("auth", "Firebase", e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          const n = this.onAuthStateChanged(() => {
            (n(), e());
          }, t);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        const t = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: await this.currentUser.getIdToken(),
        };
        (null != this.tenantId && (t.tenantId = this.tenantId),
          await (async function (e, t) {
            return Du(e, "POST", "/v2/accounts:revokeToken", ju(e, t));
          })(this, t));
      }
    }
    toJSON() {
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: this._currentUser?.toJSON(),
      };
    }
    async _setRedirectUser(e, t) {
      const n = await this.getOrInitRedirectPersistenceManager(t);
      return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        const t = (e && oc(e)) || this._popupRedirectResolver;
        (ku(t, this, "argument-error"),
          (this.redirectPersistenceManager = await cc.create(
            this,
            [oc(t._redirectPersistence)],
            "redirectUser",
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser()));
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      return (
        this._isInitialized && (await this.queue(async () => {})),
        this._currentUser?._redirectEventId === e
          ? this._currentUser
          : this.redirectUser?._redirectEventId === e
            ? this.redirectUser
            : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh());
    }
    _stopProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh());
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      const e = this.currentUser?.uid ?? null;
      this.lastNotifiedUid !== e &&
        ((this.lastNotifiedUid = e),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      const a = "function" === typeof t ? t : t.next.bind(t);
      let i = !1;
      const o = this._isInitialized
        ? Promise.resolve()
        : this._initializationPromise;
      if (
        (ku(o, this, "internal-error"),
        o.then(() => {
          i || a(this.currentUser);
        }),
        "function" === typeof t)
      ) {
        const a = e.addObserver(t, n, r);
        return () => {
          ((i = !0), a());
        };
      }
      {
        const n = e.addObserver(t);
        return () => {
          ((i = !0), n());
        };
      }
    }
    async directlySetCurrentUser(e) {
      (this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser());
    }
    queue(e) {
      return ((this.operations = this.operations.then(e, e)), this.operations);
    }
    get assertedPersistence() {
      return (
        ku(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      e &&
        !this.frameworks.includes(e) &&
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = kc(
          this.config.clientPlatform,
          this._getFrameworks(),
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      const e = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (e["X-Firebase-gmpid"] = this.app.options.appId);
      const t = await this.heartbeatServiceProvider
        .getImmediate({ optional: !0 })
        ?.getHeartbeatsHeader();
      t && (e["X-Firebase-Client"] = t);
      const n = await this._getAppCheckToken();
      return (n && (e["X-Firebase-AppCheck"] = n), e);
    }
    async _getAppCheckToken() {
      if ($l(this.app) && this.app.settings.appCheckToken)
        return this.app.settings.appCheckToken;
      const e = await this.appCheckServiceProvider
        .getImmediate({ optional: !0 })
        ?.getToken();
      return (
        e?.error &&
          (function (e) {
            if (pu.logLevel <= Vs.WARN) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              pu.warn(`Auth (${Gl}): ${e}`, ...n);
            }
          })(`Error while retrieving App Check token: ${e.error}`),
        e?.token
      );
    }
  }
  function Ac(e) {
    return Ds(e);
  }
  class xc {
    constructor(e) {
      ((this.auth = e),
        (this.observer = null),
        (this.addObserver = (function (e, t) {
          const n = new Ls(e, t);
          return n.subscribe.bind(n);
        })((e) => (this.observer = e))));
    }
    get next() {
      return (
        ku(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
      );
    }
  }
  let Rc = {
    async loadJS() {
      throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: "",
  };
  function Ic(e) {
    return Rc.loadJS(e);
  }
  function Tc(e) {
    return `__${e}${Math.floor(1e6 * Math.random())}`;
  }
  class Pc {
    constructor() {
      this.enterprise = new Nc();
    }
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve("token");
    }
    render(e, t) {
      return "";
    }
  }
  class Nc {
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve("token");
    }
    render(e, t) {
      return "";
    }
  }
  const Oc = "NO_RECAPTCHA";
  class Lc {
    constructor(e) {
      ((this.type = "recaptcha-enterprise"), (this.auth = Ac(e)));
    }
    async verify() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "verify",
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      function n(t, n, r) {
        const a = window.grecaptcha;
        Vu(a)
          ? a.enterprise.ready(() => {
              a.enterprise
                .execute(t, { action: e })
                .then((e) => {
                  n(e);
                })
                .catch(() => {
                  n(Oc);
                });
            })
          : r(Error("No reCAPTCHA enterprise script loaded."));
      }
      if (this.auth.settings.appVerificationDisabledForTesting) {
        return new Pc().execute("siteKey", { action: "verify" });
      }
      return new Promise((e, r) => {
        (async function (e) {
          if (!t) {
            if (null == e.tenantId && null != e._agentRecaptchaConfig)
              return e._agentRecaptchaConfig.siteKey;
            if (
              null != e.tenantId &&
              void 0 !== e._tenantRecaptchaConfigs[e.tenantId]
            )
              return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
          }
          return new Promise(async (t, n) => {
            Ju(e, {
              clientType: "CLIENT_TYPE_WEB",
              version: "RECAPTCHA_ENTERPRISE",
            })
              .then((r) => {
                if (void 0 !== r.recaptchaKey) {
                  const n = new Hu(r);
                  return (
                    null == e.tenantId
                      ? (e._agentRecaptchaConfig = n)
                      : (e._tenantRecaptchaConfigs[e.tenantId] = n),
                    t(n.siteKey)
                  );
                }
                n(new Error("recaptcha Enterprise site key undefined"));
              })
              .catch((e) => {
                n(e);
              });
          });
        })(this.auth)
          .then((a) => {
            if (!t && Vu(window.grecaptcha)) n(a, e, r);
            else {
              if ("undefined" === typeof window)
                return void r(
                  new Error("RecaptchaVerifier is only supported in browser"),
                );
              let t = Rc.recaptchaEnterpriseScript;
              (0 !== t.length && (t += a),
                Ic(t)
                  .then(() => {
                    n(a, e, r);
                  })
                  .catch((e) => {
                    r(e);
                  }));
            }
          })
          .catch((e) => {
            r(e);
          });
      });
    }
  }
  async function jc(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    const i = new Lc(e);
    let o;
    if (a) o = Oc;
    else
      try {
        o = await i.verify(n);
      } catch (l) {
        o = await i.verify(n, !0);
      }
    const s = { ...t };
    if ("mfaSmsEnrollment" === n || "mfaSmsSignIn" === n) {
      if ("phoneEnrollmentInfo" in s) {
        const e = s.phoneEnrollmentInfo.phoneNumber,
          t = s.phoneEnrollmentInfo.recaptchaToken;
        Object.assign(s, {
          phoneEnrollmentInfo: {
            phoneNumber: e,
            recaptchaToken: t,
            captchaResponse: o,
            clientType: "CLIENT_TYPE_WEB",
            recaptchaVersion: "RECAPTCHA_ENTERPRISE",
          },
        });
      } else if ("phoneSignInInfo" in s) {
        const e = s.phoneSignInInfo.recaptchaToken;
        Object.assign(s, {
          phoneSignInInfo: {
            recaptchaToken: e,
            captchaResponse: o,
            clientType: "CLIENT_TYPE_WEB",
            recaptchaVersion: "RECAPTCHA_ENTERPRISE",
          },
        });
      }
      return s;
    }
    return (
      r
        ? Object.assign(s, { captchaResp: o })
        : Object.assign(s, { captchaResponse: o }),
      Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
      Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
      s
    );
  }
  async function Dc(e, t, n, r, a) {
    if ("EMAIL_PASSWORD_PROVIDER" === a) {
      if (
        e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
      ) {
        const a = await jc(e, t, n, "getOobCode" === n);
        return r(e, a);
      }
      return r(e, t).catch(async (a) => {
        if ("auth/missing-recaptcha-token" === a.code) {
          console.log(
            `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
          );
          const a = await jc(e, t, n, "getOobCode" === n);
          return r(e, a);
        }
        return Promise.reject(a);
      });
    }
    if ("PHONE_PROVIDER" === a) {
      if (e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")) {
        const a = await jc(e, t, n);
        return r(e, a).catch(async (a) => {
          if (
            "AUDIT" ===
              e
                ._getRecaptchaConfig()
                ?.getProviderEnforcementState("PHONE_PROVIDER") &&
            ("auth/missing-recaptcha-token" === a.code ||
              "auth/invalid-app-credential" === a.code)
          ) {
            console.log(
              `Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`,
            );
            const a = await jc(e, t, n, !1, !0);
            return r(e, a);
          }
          return Promise.reject(a);
        });
      }
      {
        const a = await jc(e, t, n, !1, !0);
        return r(e, a);
      }
    }
    return Promise.reject(a + " provider is not supported.");
  }
  async function Mc(e) {
    const t = Ac(e),
      n = await Ju(t, {
        clientType: "CLIENT_TYPE_WEB",
        version: "RECAPTCHA_ENTERPRISE",
      }),
      r = new Hu(n);
    if (
      (null == t.tenantId
        ? (t._agentRecaptchaConfig = r)
        : (t._tenantRecaptchaConfigs[t.tenantId] = r),
      r.isAnyProviderEnabled())
    ) {
      new Lc(t).verify();
    }
  }
  function Uc(e, t, n) {
    const r = Ac(e);
    ku(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const a = !!n?.disableWarnings,
      i = Fc(t),
      { host: o, port: s } = (function (e) {
        const t = Fc(e),
          n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
        if (!n) return { host: "", port: null };
        const r = n[2].split("@").pop() || "",
          a = /^(\[[^\]]+\])(:|$)/.exec(r);
        if (a) {
          const e = a[1];
          return { host: e, port: zc(r.substr(e.length + 1)) };
        }
        {
          const [e, t] = r.split(":");
          return { host: e, port: zc(t) };
        }
      })(t),
      l = null === s ? "" : `:${s}`,
      u = { url: `${i}//${o}${l}/` },
      c = Object.freeze({
        host: o,
        port: s,
        protocol: i.replace(":", ""),
        options: Object.freeze({ disableWarnings: a }),
      });
    if (!r._canInitEmulator)
      return (
        ku(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
        void ku(
          Is(u, r.config.emulator) && Is(c, r.emulatorConfig),
          r,
          "emulator-config-failed",
        )
      );
    ((r.config.emulator = u),
      (r.emulatorConfig = c),
      (r.settings.appVerificationDisabledForTesting = !0),
      Ms(o)
        ? (async function (e) {
            (await fetch(e, { credentials: "include" })).ok;
          })(`${i}//${o}${l}`)
        : a ||
          (function () {
            function e() {
              const e = document.createElement("p"),
                t = e.style;
              ((e.innerText =
                "Running in emulator mode. Do not use with production credentials."),
                (t.position = "fixed"),
                (t.width = "100%"),
                (t.backgroundColor = "#ffffff"),
                (t.border = ".1em solid #000000"),
                (t.color = "#b50000"),
                (t.bottom = "0px"),
                (t.left = "0px"),
                (t.margin = "0px"),
                (t.zIndex = "10000"),
                (t.textAlign = "center"),
                e.classList.add("firebase-emulator-warning"),
                document.body.appendChild(e));
            }
            "undefined" !== typeof console &&
              "function" === typeof console.info &&
              console.info(
                "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
              );
            "undefined" !== typeof window &&
              "undefined" !== typeof document &&
              ("loading" === document.readyState
                ? window.addEventListener("DOMContentLoaded", e)
                : e());
          })());
  }
  function Fc(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1);
  }
  function zc(e) {
    if (!e) return null;
    const t = Number(e);
    return isNaN(t) ? null : t;
  }
  class Bc {
    constructor(e, t) {
      ((this.providerId = e), (this.signInMethod = t));
    }
    toJSON() {
      return Eu("not implemented");
    }
    _getIdTokenResponse(e) {
      return Eu("not implemented");
    }
    _linkToIdToken(e, t) {
      return Eu("not implemented");
    }
    _getReauthenticationResolver(e) {
      return Eu("not implemented");
    }
  }
  async function qc(e, t) {
    return Du(e, "POST", "/v1/accounts:signUp", t);
  }
  async function Vc(e, t) {
    return Uu(e, "POST", "/v1/accounts:signInWithPassword", ju(e, t));
  }
  class Hc extends Bc {
    constructor(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      (super("password", n),
        (this._email = e),
        (this._password = t),
        (this._tenantId = r));
    }
    static _fromEmailAndPassword(e, t) {
      return new Hc(e, t, "password");
    }
    static _fromEmailAndCode(e, t) {
      return new Hc(
        e,
        t,
        "emailLink",
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      );
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e;
      if (t?.email && t?.password) {
        if ("password" === t.signInMethod)
          return this._fromEmailAndPassword(t.email, t.password);
        if ("emailLink" === t.signInMethod)
          return this._fromEmailAndCode(t.email, t.password, t.tenantId);
      }
      return null;
    }
    async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
        case "password":
          return Dc(
            e,
            {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signInWithPassword",
            Vc,
            "EMAIL_PASSWORD_PROVIDER",
          );
        case "emailLink":
          return (async function (e, t) {
            return Uu(e, "POST", "/v1/accounts:signInWithEmailLink", ju(e, t));
          })(e, { email: this._email, oobCode: this._password });
        default:
          gu(e, "internal-error");
      }
    }
    async _linkToIdToken(e, t) {
      switch (this.signInMethod) {
        case "password":
          return Dc(
            e,
            {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signUpPassword",
            qc,
            "EMAIL_PASSWORD_PROVIDER",
          );
        case "emailLink":
          return (async function (e, t) {
            return Uu(e, "POST", "/v1/accounts:signInWithEmailLink", ju(e, t));
          })(e, { idToken: t, email: this._email, oobCode: this._password });
        default:
          gu(e, "internal-error");
      }
    }
    _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e);
    }
  }
  async function Jc(e, t) {
    return Uu(e, "POST", "/v1/accounts:signInWithIdp", ju(e, t));
  }
  class Qc extends Bc {
    constructor() {
      (super(...arguments), (this.pendingToken = null));
    }
    static _fromParams(e) {
      const t = new Qc(e.providerId, e.signInMethod);
      return (
        e.idToken || e.accessToken
          ? (e.idToken && (t.idToken = e.idToken),
            e.accessToken && (t.accessToken = e.accessToken),
            e.nonce && !e.pendingToken && (t.nonce = e.nonce),
            e.pendingToken && (t.pendingToken = e.pendingToken))
          : e.oauthToken && e.oauthTokenSecret
            ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
            : gu("argument-error"),
        t
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: r, ...a } = t;
      if (!n || !r) return null;
      const i = new Qc(n, r);
      return (
        (i.idToken = a.idToken || void 0),
        (i.accessToken = a.accessToken || void 0),
        (i.secret = a.secret),
        (i.nonce = a.nonce),
        (i.pendingToken = a.pendingToken || null),
        i
      );
    }
    _getIdTokenResponse(e) {
      return Jc(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest();
      return ((n.idToken = t), Jc(e, n));
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest();
      return ((t.autoCreate = !1), Jc(e, t));
    }
    buildRequest() {
      const e = { requestUri: "http://localhost", returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        const t = {};
        (this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = Ps(t)));
      }
      return e;
    }
  }
  async function Wc(e, t) {
    return Du(e, "POST", "/v1/accounts:sendVerificationCode", ju(e, t));
  }
  const Kc = { USER_NOT_FOUND: "user-not-found" };
  class $c extends Bc {
    constructor(e) {
      (super("phone", "phone"), (this.params = e));
    }
    static _fromVerification(e, t) {
      return new $c({ verificationId: e, verificationCode: t });
    }
    static _fromTokenResponse(e, t) {
      return new $c({ phoneNumber: e, temporaryProof: t });
    }
    _getIdTokenResponse(e) {
      return (async function (e, t) {
        return Uu(e, "POST", "/v1/accounts:signInWithPhoneNumber", ju(e, t));
      })(e, this._makeVerificationRequest());
    }
    _linkToIdToken(e, t) {
      return (async function (e, t) {
        const n = await Uu(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          ju(e, t),
        );
        if (n.temporaryProof)
          throw qu(e, "account-exists-with-different-credential", n);
        return n;
      })(e, { idToken: t, ...this._makeVerificationRequest() });
    }
    _getReauthenticationResolver(e) {
      return (async function (e, t) {
        return Uu(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          ju(e, { ...t, operation: "REAUTH" }),
          Kc,
        );
      })(e, this._makeVerificationRequest());
    }
    _makeVerificationRequest() {
      const {
        temporaryProof: e,
        phoneNumber: t,
        verificationId: n,
        verificationCode: r,
      } = this.params;
      return e && t
        ? { temporaryProof: e, phoneNumber: t }
        : { sessionInfo: n, code: r };
    }
    toJSON() {
      const e = { providerId: this.providerId };
      return (
        this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof &&
          (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode &&
          (e.verificationCode = this.params.verificationCode),
        this.params.verificationId &&
          (e.verificationId = this.params.verificationId),
        e
      );
    }
    static fromJSON(e) {
      "string" === typeof e && (e = JSON.parse(e));
      const {
        verificationId: t,
        verificationCode: n,
        phoneNumber: r,
        temporaryProof: a,
      } = e;
      return n || t || r || a
        ? new $c({
            verificationId: t,
            verificationCode: n,
            phoneNumber: r,
            temporaryProof: a,
          })
        : null;
    }
  }
  class Yc {
    constructor(e) {
      const t = Ns(Os(e)),
        n = t.apiKey ?? null,
        r = t.oobCode ?? null,
        a = (function (e) {
          switch (e) {
            case "recoverEmail":
              return "RECOVER_EMAIL";
            case "resetPassword":
              return "PASSWORD_RESET";
            case "signIn":
              return "EMAIL_SIGNIN";
            case "verifyEmail":
              return "VERIFY_EMAIL";
            case "verifyAndChangeEmail":
              return "VERIFY_AND_CHANGE_EMAIL";
            case "revertSecondFactorAddition":
              return "REVERT_SECOND_FACTOR_ADDITION";
            default:
              return null;
          }
        })(t.mode ?? null);
      (ku(n && r && a, "argument-error"),
        (this.apiKey = n),
        (this.operation = a),
        (this.code = r),
        (this.continueUrl = t.continueUrl ?? null),
        (this.languageCode = t.lang ?? null),
        (this.tenantId = t.tenantId ?? null));
    }
    static parseLink(e) {
      const t = (function (e) {
        const t = Ns(Os(e)).link,
          n = t ? Ns(Os(t)).deep_link_id : null,
          r = Ns(Os(e)).deep_link_id;
        return (r ? Ns(Os(r)).link : null) || r || n || t || e;
      })(e);
      try {
        return new Yc(t);
      } catch {
        return null;
      }
    }
  }
  class Xc {
    constructor() {
      this.providerId = Xc.PROVIDER_ID;
    }
    static credential(e, t) {
      return Hc._fromEmailAndPassword(e, t);
    }
    static credentialWithLink(e, t) {
      const n = Yc.parseLink(t);
      return (
        ku(n, "argument-error"),
        Hc._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  }
  ((Xc.PROVIDER_ID = "password"),
    (Xc.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
    (Xc.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"));
  class Gc {
    constructor(e) {
      ((this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {}));
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return ((this.customParameters = e), this);
    }
    getCustomParameters() {
      return this.customParameters;
    }
  }
  class Zc extends Gc {
    constructor() {
      (super(...arguments), (this.scopes = []));
    }
    addScope(e) {
      return (this.scopes.includes(e) || this.scopes.push(e), this);
    }
    getScopes() {
      return [...this.scopes];
    }
  }
  class ed extends Zc {
    constructor() {
      super("facebook.com");
    }
    static credential(e) {
      return Qc._fromParams({
        providerId: ed.PROVIDER_ID,
        signInMethod: ed.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return ed.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return ed.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return ed.credential(t.oauthAccessToken);
      } catch {
        return null;
      }
    }
  }
  ((ed.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
    (ed.PROVIDER_ID = "facebook.com"));
  class td extends Zc {
    constructor() {
      (super("google.com"), this.addScope("profile"));
    }
    static credential(e, t) {
      return Qc._fromParams({
        providerId: td.PROVIDER_ID,
        signInMethod: td.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: t,
      });
    }
    static credentialFromResult(e) {
      return td.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return td.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthIdToken: n, oauthAccessToken: r } = t;
      if (!n && !r) return null;
      try {
        return td.credential(n, r);
      } catch {
        return null;
      }
    }
  }
  ((td.GOOGLE_SIGN_IN_METHOD = "google.com"), (td.PROVIDER_ID = "google.com"));
  class nd extends Zc {
    constructor() {
      super("github.com");
    }
    static credential(e) {
      return Qc._fromParams({
        providerId: nd.PROVIDER_ID,
        signInMethod: nd.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return nd.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return nd.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return nd.credential(t.oauthAccessToken);
      } catch {
        return null;
      }
    }
  }
  ((nd.GITHUB_SIGN_IN_METHOD = "github.com"), (nd.PROVIDER_ID = "github.com"));
  class rd extends Zc {
    constructor() {
      super("twitter.com");
    }
    static credential(e, t) {
      return Qc._fromParams({
        providerId: rd.PROVIDER_ID,
        signInMethod: rd.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: t,
      });
    }
    static credentialFromResult(e) {
      return rd.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return rd.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthAccessToken: n, oauthTokenSecret: r } = t;
      if (!n || !r) return null;
      try {
        return rd.credential(n, r);
      } catch {
        return null;
      }
    }
  }
  ((rd.TWITTER_SIGN_IN_METHOD = "twitter.com"),
    (rd.PROVIDER_ID = "twitter.com"));
  class ad {
    constructor(e) {
      ((this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType));
    }
    static async _fromIdTokenResponse(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const a = await ac._fromIdTokenResponse(e, n, r),
        i = id(n);
      return new ad({
        user: a,
        providerId: i,
        _tokenResponse: n,
        operationType: t,
      });
    }
    static async _forOperation(e, t, n) {
      await e._updateTokensIfNecessary(n, !0);
      const r = id(n);
      return new ad({
        user: e,
        providerId: r,
        _tokenResponse: n,
        operationType: t,
      });
    }
  }
  function id(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
  }
  class od extends As {
    constructor(e, t, n, r) {
      (super(t.code, t.message),
        (this.operationType = n),
        (this.user = r),
        Object.setPrototypeOf(this, od.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: e.tenantId ?? void 0,
          _serverResponse: t.customData._serverResponse,
          operationType: n,
        }));
    }
    static _fromErrorAndOperation(e, t, n, r) {
      return new od(e, t, n, r);
    }
  }
  function sd(e, t, n, r) {
    return (
      "reauthenticate" === t
        ? n._getReauthenticationResolver(e)
        : n._getIdTokenResponse(e)
    ).catch((n) => {
      if ("auth/multi-factor-auth-required" === n.code)
        throw od._fromErrorAndOperation(e, n, t, r);
      throw n;
    });
  }
  async function ld(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const r = await Xu(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return ad._forOperation(e, "link", r);
  }
  async function ud(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const { auth: r } = e;
    if ($l(r.app)) return Promise.reject(bu(r));
    const a = "reauthenticate";
    try {
      const i = await Xu(e, sd(r, a, t, e), n);
      ku(i.idToken, r, "internal-error");
      const o = $u(i.idToken);
      ku(o, r, "internal-error");
      const { sub: s } = o;
      return (ku(e.uid === s, r, "user-mismatch"), ad._forOperation(e, a, i));
    } catch (im) {
      throw ("auth/user-not-found" === im?.code && gu(r, "user-mismatch"), im);
    }
  }
  async function cd(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ($l(e.app)) return Promise.reject(bu(e));
    const r = "signIn",
      a = await sd(e, r, t),
      i = await ad._fromIdTokenResponse(e, r, a);
    return (n || (await e._updateCurrentUser(i.user)), i);
  }
  function dd(e, t) {
    return Du(e, "POST", "/v2/accounts/mfaEnrollment:start", ju(e, t));
  }
  new WeakMap();
  const fd = "__sak";
  class hd {
    constructor(e, t) {
      ((this.storageRetriever = e), (this.type = t));
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(fd, "1"),
            this.storage.removeItem(fd),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve());
    }
    _get(e) {
      const t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return (this.storage.removeItem(e), Promise.resolve());
    }
    get storage() {
      return this.storageRetriever();
    }
  }
  class pd extends hd {
    constructor() {
      (super(() => window.localStorage, "LOCAL"),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.fallbackToPolling = Sc()),
        (this._shouldAllowMigration = !0));
    }
    forAllChangedKeys(e) {
      for (const t of Object.keys(this.listeners)) {
        const n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!e.key)
        return void this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
      const n = e.key;
      t ? this.detachListener() : this.stopPolling();
      const r = () => {
          const e = this.storage.getItem(n);
          (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
        },
        a = this.storage.getItem(n);
      wc() && a !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, 10)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t ? JSON.parse(t) : t);
    }
    startPolling() {
      (this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent("storage", { key: e, oldValue: t, newValue: n }),
              !0,
            );
          });
        }, 1e3)));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(e, t) {
      (0 === Object.keys(this.listeners).length &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length &&
          (this.detachListener(), this.stopPolling()));
    }
    async _set(e, t) {
      (await super._set(e, t), (this.localCache[e] = JSON.stringify(t)));
    }
    async _get(e) {
      const t = await super._get(e);
      return ((this.localCache[e] = JSON.stringify(t)), t);
    }
    async _remove(e) {
      (await super._remove(e), delete this.localCache[e]);
    }
  }
  pd.type = "LOCAL";
  const md = pd;
  function gd(e) {
    const t = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"),
      n = RegExp(`${t}=([^;]+)`);
    return document.cookie.match(n)?.[1] ?? null;
  }
  function yd(e) {
    return `${"http:" === window.location.protocol ? "__dev_" : "__HOST-"}FIREBASE_${e.split(":")[3]}`;
  }
  class vd {
    constructor() {
      ((this.type = "COOKIE"), (this.listenerUnsubscribes = new Map()));
    }
    _getFinalTarget(e) {
      if (void 0 === typeof window) return e;
      const t = new URL(`${window.location.origin}/__cookies__`);
      return (t.searchParams.set("finalTarget", e), t);
    }
    async _isAvailable() {
      return (
        !("boolean" === typeof isSecureContext && !isSecureContext) &&
        "undefined" !== typeof navigator &&
        "undefined" !== typeof document &&
        (navigator.cookieEnabled ?? !0)
      );
    }
    async _set(e, t) {}
    async _get(e) {
      if (!this._isAvailable()) return null;
      const t = yd(e);
      if (window.cookieStore) {
        const e = await window.cookieStore.get(t);
        return e?.value;
      }
      return gd(t);
    }
    async _remove(e) {
      if (!this._isAvailable()) return;
      if (!(await this._get(e))) return;
      const t = yd(e);
      ((document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`),
        await fetch("/__cookies__", { method: "DELETE" }).catch(() => {}));
    }
    _addListener(e, t) {
      if (!this._isAvailable()) return;
      const n = yd(e);
      if (window.cookieStore) {
        const e = (e) => {
            const r = e.changed.find((e) => e.name === n);
            r && t(r.value);
            e.deleted.find((e) => e.name === n) && t(null);
          },
          r = () => window.cookieStore.removeEventListener("change", e);
        return (
          this.listenerUnsubscribes.set(t, r),
          window.cookieStore.addEventListener("change", e)
        );
      }
      let r = gd(n);
      const a = setInterval(() => {
        const e = gd(n);
        e !== r && (t(e), (r = e));
      }, 1e3);
      this.listenerUnsubscribes.set(t, () => clearInterval(a));
    }
    _removeListener(e, t) {
      const n = this.listenerUnsubscribes.get(t);
      n && (n(), this.listenerUnsubscribes.delete(t));
    }
  }
  vd.type = "COOKIE";
  class bd extends hd {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  bd.type = "SESSION";
  const wd = bd;
  class Sd {
    constructor(e) {
      ((this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this)));
    }
    static _getInstance(e) {
      const t = this.receivers.find((t) => t.isListeningto(e));
      if (t) return t;
      const n = new Sd(e);
      return (this.receivers.push(n), n);
    }
    isListeningto(e) {
      return this.eventTarget === e;
    }
    async handleEvent(e) {
      const t = e,
        { eventId: n, eventType: r, data: a } = t.data,
        i = this.handlersMap[r];
      if (!i?.size) return;
      t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
      const o = Array.from(i).map(async (e) => e(t.origin, a)),
        s = await (function (e) {
          return Promise.all(
            e.map(async (e) => {
              try {
                return { fulfilled: !0, value: await e };
              } catch (t) {
                return { fulfilled: !1, reason: t };
              }
            }),
          );
        })(o);
      t.ports[0].postMessage({
        status: "done",
        eventId: n,
        eventType: r,
        response: s,
      });
    }
    _subscribe(e, t) {
      (0 === Object.keys(this.handlersMap).length &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(t));
    }
    _unsubscribe(e, t) {
      (this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.removeEventListener(
            "message",
            this.boundEventHandler,
          ));
    }
  }
  function kd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = "";
    for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
    return e + n;
  }
  Sd.receivers = [];
  class Ed {
    constructor(e) {
      ((this.target = e), (this.handlers = new Set()));
    }
    removeMessageHandler(e) {
      (e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e));
    }
    async _send(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
      const r =
        "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
      if (!r) throw new Error("connection_unavailable");
      let a, i;
      return new Promise((o, s) => {
        const l = kd("", 20);
        r.port1.start();
        const u = setTimeout(() => {
          s(new Error("unsupported_event"));
        }, n);
        ((i = {
          messageChannel: r,
          onMessage(e) {
            const t = e;
            if (t.data.eventId === l)
              switch (t.data.status) {
                case "ack":
                  (clearTimeout(u),
                    (a = setTimeout(() => {
                      s(new Error("timeout"));
                    }, 3e3)));
                  break;
                case "done":
                  (clearTimeout(a), o(t.data.response));
                  break;
                default:
                  (clearTimeout(u),
                    clearTimeout(a),
                    s(new Error("invalid_response")));
              }
          },
        }),
          this.handlers.add(i),
          r.port1.addEventListener("message", i.onMessage),
          this.target.postMessage({ eventType: e, eventId: l, data: t }, [
            r.port2,
          ]));
      }).finally(() => {
        i && this.removeMessageHandler(i);
      });
    }
  }
  function _d() {
    return window;
  }
  function Cd() {
    return (
      "undefined" !== typeof _d().WorkerGlobalScope &&
      "function" === typeof _d().importScripts
    );
  }
  const Ad = "firebaseLocalStorageDb",
    xd = "firebaseLocalStorage",
    Rd = "fbase_key";
  class Id {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        (this.request.addEventListener("success", () => {
          e(this.request.result);
        }),
          this.request.addEventListener("error", () => {
            t(this.request.error);
          }));
      });
    }
  }
  function Td(e, t) {
    return e.transaction([xd], t ? "readwrite" : "readonly").objectStore(xd);
  }
  function Pd() {
    const e = indexedDB.open(Ad, 1);
    return new Promise((t, n) => {
      (e.addEventListener("error", () => {
        n(e.error);
      }),
        e.addEventListener("upgradeneeded", () => {
          const t = e.result;
          try {
            t.createObjectStore(xd, { keyPath: Rd });
          } catch (im) {
            n(im);
          }
        }),
        e.addEventListener("success", async () => {
          const n = e.result;
          n.objectStoreNames.contains(xd)
            ? t(n)
            : (n.close(),
              await (function () {
                const e = indexedDB.deleteDatabase(Ad);
                return new Id(e).toPromise();
              })(),
              t(await Pd()));
        }));
    });
  }
  async function Nd(e, t, n) {
    const r = Td(e, !0).put({ [Rd]: t, value: n });
    return new Id(r).toPromise();
  }
  function Od(e, t) {
    const n = Td(e, !0).delete(t);
    return new Id(n).toPromise();
  }
  class Ld {
    constructor() {
      ((this.type = "LOCAL"),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {},
          )));
    }
    async _openDb() {
      return (this.db || (this.db = await Pd()), this.db);
    }
    async _withRetries(e) {
      let t = 0;
      for (;;)
        try {
          const t = await this._openDb();
          return await e(t);
        } catch (im) {
          if (t++ > 3) throw im;
          this.db && (this.db.close(), (this.db = void 0));
        }
    }
    async initializeServiceWorkerMessaging() {
      return Cd() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      ((this.receiver = Sd._getInstance(Cd() ? self : null)),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]));
    }
    async initializeSender() {
      if (
        ((this.activeServiceWorker = await (async function () {
          if (!navigator?.serviceWorker) return null;
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch {
            return null;
          }
        })()),
        !this.activeServiceWorker)
      )
        return;
      this.sender = new Ed(this.activeServiceWorker);
      const e = await this.sender._send("ping", {}, 800);
      e &&
        e[0]?.fulfilled &&
        e[0]?.value.includes("keyChanged") &&
        (this.serviceWorkerReceiverAvailable = !0);
    }
    async notifyServiceWorker(e) {
      if (
        this.sender &&
        this.activeServiceWorker &&
        (navigator?.serviceWorker?.controller || null) ===
          this.activeServiceWorker
      )
        try {
          await this.sender._send(
            "keyChanged",
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50,
          );
        } catch {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1;
        const e = await Pd();
        return (await Nd(e, fd, "1"), await Od(e, fd), !0);
      } catch {}
      return !1;
    }
    async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
        await e();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => Nd(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        ),
      );
    }
    async _get(e) {
      const t = await this._withRetries((t) =>
        (async function (e, t) {
          const n = Td(e, !1).get(t),
            r = await new Id(n).toPromise();
          return void 0 === r ? null : r.value;
        })(t, e),
      );
      return ((this.localCache[e] = t), t);
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => Od(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        ),
      );
    }
    async _poll() {
      const e = await this._withRetries((e) => {
        const t = Td(e, !1).getAll();
        return new Id(t).toPromise();
      });
      if (!e) return [];
      if (0 !== this.pendingWrites) return [];
      const t = [],
        n = new Set();
      if (0 !== e.length)
        for (const { fbase_key: r, value: a } of e)
          (n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(a) &&
              (this.notifyListeners(r, a), t.push(r)));
      for (const r of Object.keys(this.localCache))
        this.localCache[r] &&
          !n.has(r) &&
          (this.notifyListeners(r, null), t.push(r));
      return t;
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t);
    }
    startPolling() {
      (this.stopPolling(),
        (this.pollTimer = setInterval(async () => this._poll(), 800)));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    _addListener(e, t) {
      (0 === Object.keys(this.listeners).length && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && this.stopPolling());
    }
  }
  Ld.type = "LOCAL";
  const jd = Ld;
  function Dd(e, t) {
    return Du(e, "POST", "/v2/accounts/mfaSignIn:start", ju(e, t));
  }
  (Tc("rcb"), new Iu(3e4, 6e4));
  const Md = "recaptcha";
  async function Ud(e, t, n) {
    if (!e._getRecaptchaConfig())
      try {
        await Mc(e);
      } catch (r) {
        console.log(
          "Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.",
        );
      }
    try {
      let r;
      if (
        ((r = "string" === typeof t ? { phoneNumber: t } : t), "session" in r)
      ) {
        const t = r.session;
        if ("phoneNumber" in r) {
          ku("enroll" === t.type, e, "internal-error");
          const a = {
              idToken: t.credential,
              phoneEnrollmentInfo: {
                phoneNumber: r.phoneNumber,
                clientType: "CLIENT_TYPE_WEB",
              },
            },
            i = Dc(
              e,
              a,
              "mfaSmsEnrollment",
              async (e, t) => {
                if (t.phoneEnrollmentInfo.captchaResponse === Oc) {
                  ku(n?.type === Md, e, "argument-error");
                  return dd(e, await Fd(e, t, n));
                }
                return dd(e, t);
              },
              "PHONE_PROVIDER",
            );
          return (await i.catch((e) => Promise.reject(e))).phoneSessionInfo
            .sessionInfo;
        }
        {
          ku("signin" === t.type, e, "internal-error");
          const a = r.multiFactorHint?.uid || r.multiFactorUid;
          ku(a, e, "missing-multi-factor-info");
          const i = {
              mfaPendingCredential: t.credential,
              mfaEnrollmentId: a,
              phoneSignInInfo: { clientType: "CLIENT_TYPE_WEB" },
            },
            o = Dc(
              e,
              i,
              "mfaSmsSignIn",
              async (e, t) => {
                if (t.phoneSignInInfo.captchaResponse === Oc) {
                  ku(n?.type === Md, e, "argument-error");
                  return Dd(e, await Fd(e, t, n));
                }
                return Dd(e, t);
              },
              "PHONE_PROVIDER",
            );
          return (await o.catch((e) => Promise.reject(e))).phoneResponseInfo
            .sessionInfo;
        }
      }
      {
        const t = { phoneNumber: r.phoneNumber, clientType: "CLIENT_TYPE_WEB" },
          a = Dc(
            e,
            t,
            "sendVerificationCode",
            async (e, t) => {
              if (t.captchaResponse === Oc) {
                ku(n?.type === Md, e, "argument-error");
                return Wc(e, await Fd(e, t, n));
              }
              return Wc(e, t);
            },
            "PHONE_PROVIDER",
          );
        return (await a.catch((e) => Promise.reject(e))).sessionInfo;
      }
    } finally {
      n?._reset();
    }
  }
  async function Fd(e, t, n) {
    ku(n.type === Md, e, "argument-error");
    const r = await n.verify();
    ku("string" === typeof r, e, "argument-error");
    const a = { ...t };
    if ("phoneEnrollmentInfo" in a) {
      const e = a.phoneEnrollmentInfo.phoneNumber,
        t = a.phoneEnrollmentInfo.captchaResponse,
        n = a.phoneEnrollmentInfo.clientType,
        i = a.phoneEnrollmentInfo.recaptchaVersion;
      return (
        Object.assign(a, {
          phoneEnrollmentInfo: {
            phoneNumber: e,
            recaptchaToken: r,
            captchaResponse: t,
            clientType: n,
            recaptchaVersion: i,
          },
        }),
        a
      );
    }
    if ("phoneSignInInfo" in a) {
      const e = a.phoneSignInInfo.captchaResponse,
        t = a.phoneSignInInfo.clientType,
        n = a.phoneSignInInfo.recaptchaVersion;
      return (
        Object.assign(a, {
          phoneSignInInfo: {
            recaptchaToken: r,
            captchaResponse: e,
            clientType: t,
            recaptchaVersion: n,
          },
        }),
        a
      );
    }
    return (Object.assign(a, { recaptchaToken: r }), a);
  }
  class zd {
    constructor(e) {
      ((this.providerId = zd.PROVIDER_ID), (this.auth = Ac(e)));
    }
    verifyPhoneNumber(e, t) {
      return Ud(this.auth, e, Ds(t));
    }
    static credential(e, t) {
      return $c._fromVerification(e, t);
    }
    static credentialFromResult(e) {
      const t = e;
      return zd.credentialFromTaggedObject(t);
    }
    static credentialFromError(e) {
      return zd.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { phoneNumber: n, temporaryProof: r } = t;
      return n && r ? $c._fromTokenResponse(n, r) : null;
    }
  }
  function Bd(e, t) {
    return t
      ? oc(t)
      : (ku(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver);
  }
  ((zd.PROVIDER_ID = "phone"), (zd.PHONE_SIGN_IN_METHOD = "phone"));
  class qd extends Bc {
    constructor(e) {
      (super("custom", "custom"), (this.params = e));
    }
    _getIdTokenResponse(e) {
      return Jc(e, this._buildIdpRequest());
    }
    _linkToIdToken(e, t) {
      return Jc(e, this._buildIdpRequest(t));
    }
    _getReauthenticationResolver(e) {
      return Jc(e, this._buildIdpRequest());
    }
    _buildIdpRequest(e) {
      const t = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      };
      return (e && (t.idToken = e), t);
    }
  }
  function Vd(e) {
    return cd(e.auth, new qd(e), e.bypassAuthState);
  }
  function Hd(e) {
    const { auth: t, user: n } = e;
    return (ku(n, t, "internal-error"), ud(n, new qd(e), e.bypassAuthState));
  }
  async function Jd(e) {
    const { auth: t, user: n } = e;
    return (ku(n, t, "internal-error"), ld(n, new qd(e), e.bypassAuthState));
  }
  class Qd {
    constructor(e, t, n, r) {
      let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      ((this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = a),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]));
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t };
        try {
          ((this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this));
        } catch (im) {
          this.reject(im);
        }
      });
    }
    async onAuthEvent(e) {
      const {
        urlResponse: t,
        sessionId: n,
        postBody: r,
        tenantId: a,
        error: i,
        type: o,
      } = e;
      if (i) return void this.reject(i);
      const s = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: a || void 0,
        postBody: r || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(o)(s));
      } catch (im) {
        this.reject(im);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return Vd;
        case "linkViaPopup":
        case "linkViaRedirect":
          return Jd;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return Hd;
        default:
          gu(this.auth, "internal-error");
      }
    }
    resolve(e) {
      (_u(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp());
    }
    reject(e) {
      (_u(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp());
    }
    unregisterAndCleanUp() {
      (this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp());
    }
  }
  const Wd = new Iu(2e3, 1e4);
  class Kd extends Qd {
    constructor(e, t, n, r, a) {
      (super(e, t, r, a),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        Kd.currentPopupAction && Kd.currentPopupAction.cancel(),
        (Kd.currentPopupAction = this));
    }
    async executeNotNull() {
      const e = await this.execute();
      return (ku(e, this.auth, "internal-error"), e);
    }
    async onExecution() {
      _u(1 === this.filter.length, "Popup operations only handle one event");
      const e = kd();
      ((this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e,
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e);
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
          e || this.reject(yu(this.auth, "web-storage-unsupported"));
        }),
        this.pollUserCancellation());
    }
    get eventId() {
      return this.authWindow?.associatedEvent || null;
    }
    cancel() {
      this.reject(yu(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      (this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (Kd.currentPopupAction = null));
    }
    pollUserCancellation() {
      const e = () => {
        this.authWindow?.window?.closed
          ? (this.pollId = window.setTimeout(() => {
              ((this.pollId = null),
                this.reject(yu(this.auth, "popup-closed-by-user")));
            }, 8e3))
          : (this.pollId = window.setTimeout(e, Wd.get()));
      };
      e();
    }
  }
  Kd.currentPopupAction = null;
  const $d = new Map();
  class Yd extends Qd {
    constructor(e, t) {
      (super(
        e,
        [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown",
        ],
        t,
        void 0,
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      ),
        (this.eventId = null));
    }
    async execute() {
      let e = $d.get(this.auth._key());
      if (!e) {
        try {
          const t = await (async function (e, t) {
              const n = Zd(t),
                r = Gd(e);
              if (!(await r._isAvailable())) return !1;
              const a = "true" === (await r._get(n));
              return (await r._remove(n), a);
            })(this.resolver, this.auth),
            n = t ? await super.execute() : null;
          e = () => Promise.resolve(n);
        } catch (im) {
          e = () => Promise.reject(im);
        }
        $d.set(this.auth._key(), e);
      }
      return (
        this.bypassAuthState ||
          $d.set(this.auth._key(), () => Promise.resolve(null)),
        e()
      );
    }
    async onAuthEvent(e) {
      if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
      if ("unknown" !== e.type) {
        if (e.eventId) {
          const t = await this.auth._redirectUserForId(e.eventId);
          if (t) return ((this.user = t), super.onAuthEvent(e));
          this.resolve(null);
        }
      } else this.resolve(null);
    }
    async onExecution() {}
    cleanUp() {}
  }
  function Xd(e, t) {
    $d.set(e._key(), t);
  }
  function Gd(e) {
    return oc(e._redirectPersistence);
  }
  function Zd(e) {
    return uc("pendingRedirect", e.config.apiKey, e.name);
  }
  async function ef(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ($l(e.app)) return Promise.reject(bu(e));
    const r = Ac(e),
      a = Bd(r, t),
      i = new Yd(r, a, n),
      o = await i.execute();
    return (
      o &&
        !n &&
        (delete o.user._redirectEventId,
        await r._persistUserIfCurrent(o.user),
        await r._setRedirectUser(null, t)),
      o
    );
  }
  class tf {
    constructor(e) {
      ((this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now()));
    }
    registerConsumer(e) {
      (this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null)));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect ||
          !(function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0;
              case "unknown":
                return rf(e);
              default:
                return !1;
            }
          })(e) ||
          ((this.hasHandledPotentialRedirect = !0),
          t || ((this.queuedRedirectEvent = e), (t = !0))),
        t
      );
    }
    sendToConsumer(e, t) {
      if (e.error && !rf(e)) {
        const n = e.error.code?.split("auth/")[1] || "internal-error";
        t.onError(yu(this.auth, n));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      const n = null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= 6e5 &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(nf(e))
      );
    }
    saveEventToCache(e) {
      (this.cachedEventUids.add(nf(e)),
        (this.lastProcessedEventTime = Date.now()));
    }
  }
  function nf(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId]
      .filter((e) => e)
      .join("-");
  }
  function rf(e) {
    let { type: t, error: n } = e;
    return "unknown" === t && "auth/no-auth-event" === n?.code;
  }
  const af = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    of = /^https?/;
  async function sf(e) {
    if (e.config.emulator) return;
    const { authorizedDomains: t } = await (async function (e) {
      return Du(
        e,
        "GET",
        "/v1/projects",
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      );
    })(e);
    for (const n of t)
      try {
        if (lf(n)) return;
      } catch {}
    gu(e, "unauthorized-domain");
  }
  function lf(e) {
    const t = Cu(),
      { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
      const a = new URL(e);
      return "" === a.hostname && "" === r
        ? "chrome-extension:" === n &&
            e.replace("chrome-extension://", "") ===
              t.replace("chrome-extension://", "")
        : "chrome-extension:" === n && a.hostname === r;
    }
    if (!of.test(n)) return !1;
    if (af.test(e)) return r === e;
    const a = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + a + "|" + a + ")$", "i").test(r);
  }
  const uf = new Iu(3e4, 6e4);
  function cf() {
    const e = _d().___jsl;
    if (e?.H)
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
  function df(e) {
    return new Promise((t, n) => {
      function r() {
        (cf(),
          gapi.load("gapi.iframes", {
            callback: () => {
              t(gapi.iframes.getContext());
            },
            ontimeout: () => {
              (cf(), n(yu(e, "network-request-failed")));
            },
            timeout: uf.get(),
          }));
      }
      if (_d().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
      else {
        if (!_d().gapi?.load) {
          const t = Tc("iframefcb");
          return (
            (_d()[t] = () => {
              gapi.load ? r() : n(yu(e, "network-request-failed"));
            }),
            Ic(`${Rc.gapiScript}?onload=${t}`).catch((e) => n(e))
          );
        }
        r();
      }
    }).catch((e) => {
      throw ((ff = null), e);
    });
  }
  let ff = null;
  const hf = new Iu(5e3, 15e3),
    pf = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px",
      },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    mf = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ]);
  function gf(e) {
    const t = e.config;
    ku(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator
        ? Tu(t, "emulator/auth/iframe")
        : `https://${e.config.authDomain}/__/auth/iframe`,
      r = { apiKey: t.apiKey, appName: e.name, v: Gl },
      a = mf.get(e.config.apiHost);
    a && (r.eid = a);
    const i = e._getFrameworks();
    return (i.length && (r.fw = i.join(",")), `${n}?${Ps(r).slice(1)}`);
  }
  async function yf(e) {
    const t = await (function (e) {
        return ((ff = ff || df(e)), ff);
      })(e),
      n = _d().gapi;
    return (
      ku(n, e, "internal-error"),
      t.open(
        {
          where: document.body,
          url: gf(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: pf,
          dontclear: !0,
        },
        (t) =>
          new Promise(async (n, r) => {
            await t.restyle({ setHideOnLeave: !1 });
            const a = yu(e, "network-request-failed"),
              i = _d().setTimeout(() => {
                r(a);
              }, hf.get());
            function o() {
              (_d().clearTimeout(i), n(t));
            }
            t.ping(o).then(o, () => {
              r(a);
            });
          }),
      )
    );
  }
  const vf = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  };
  class bf {
    constructor(e) {
      ((this.window = e), (this.associatedEvent = null));
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch (im) {}
    }
  }
  function wf(e, t, n) {
    let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
      a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
    const i = Math.max((window.screen.availHeight - a) / 2, 0).toString(),
      o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let s = "";
    const l = {
        ...vf,
        width: r.toString(),
        height: a.toString(),
        top: i,
        left: o,
      },
      u = Cs().toLowerCase();
    (n && (s = pc(u) ? "_blank" : n),
      fc(u) && ((t = t || "http://localhost"), (l.scrollbars = "yes")));
    const c = Object.entries(l).reduce((e, t) => {
      let [n, r] = t;
      return `${e}${n}=${r},`;
    }, "");
    if (
      (function () {
        return (
          bc(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Cs(),
          ) && !!window.navigator?.standalone
        );
      })(u) &&
      "_self" !== s
    )
      return (
        (function (e, t) {
          const n = document.createElement("a");
          ((n.href = e), (n.target = t));
          const r = document.createEvent("MouseEvent");
          (r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            1,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            1,
            null,
          ),
            n.dispatchEvent(r));
        })(t || "", s),
        new bf(null)
      );
    const d = window.open(t || "", s, c);
    ku(d, e, "popup-blocked");
    try {
      d.focus();
    } catch (im) {}
    return new bf(d);
  }
  const Sf = "__/auth/handler",
    kf = "emulator/auth/handler",
    Ef = encodeURIComponent("fac");
  async function _f(e, t, n, r, a, i) {
    (ku(e.config.authDomain, e, "auth-domain-config-required"),
      ku(e.config.apiKey, e, "invalid-api-key"));
    const o = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: r,
      v: Gl,
      eventId: a,
    };
    if (t instanceof Gc) {
      (t.setDefaultLanguage(e.languageCode),
        (o.providerId = t.providerId || ""),
        (function (e) {
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
          return !0;
        })(t.getCustomParameters()) ||
          (o.customParameters = JSON.stringify(t.getCustomParameters())));
      for (const [e, t] of Object.entries(i || {})) o[e] = t;
    }
    if (t instanceof Zc) {
      const e = t.getScopes().filter((e) => "" !== e);
      e.length > 0 && (o.scopes = e.join(","));
    }
    e.tenantId && (o.tid = e.tenantId);
    const s = o;
    for (const c of Object.keys(s)) void 0 === s[c] && delete s[c];
    const l = await e._getAppCheckToken(),
      u = l ? `#${Ef}=${encodeURIComponent(l)}` : "";
    return `${(function (e) {
      let { config: t } = e;
      if (!t.emulator) return `https://${t.authDomain}/${Sf}`;
      return Tu(t, kf);
    })(e)}?${Ps(s).slice(1)}${u}`;
  }
  const Cf = "webStorageSupport";
  const Af = class {
    constructor() {
      ((this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = wd),
        (this._completeRedirectFn = ef),
        (this._overrideRedirectResult = Xd));
    }
    async _openPopup(e, t, n, r) {
      _u(
        this.eventManagers[e._key()]?.manager,
        "_initialize() not called before _openPopup()",
      );
      return wf(e, await _f(e, t, n, Cu(), r), kd());
    }
    async _openRedirect(e, t, n, r) {
      await this._originValidation(e);
      return (
        (function (e) {
          _d().location.href = e;
        })(await _f(e, t, n, Cu(), r)),
        new Promise(() => {})
      );
    }
    _initialize(e) {
      const t = e._key();
      if (this.eventManagers[t]) {
        const { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : (_u(n, "If manager is not set, promise should be"), n);
      }
      const n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    async initAndGetManager(e) {
      const t = await yf(e),
        n = new tf(e);
      return (
        t.register(
          "authEvent",
          (t) => {
            ku(t?.authEvent, e, "invalid-auth-event");
            return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      );
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        Cf,
        { type: Cf },
        (n) => {
          const r = n?.[0]?.[Cf];
          (void 0 !== r && t(!!r), gu(e, "internal-error"));
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      );
    }
    _originValidation(e) {
      const t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = sf(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return Sc() || hc() || bc();
    }
  };
  var xf = "@firebase/auth",
    Rf = "1.12.2";
  class If {
    constructor(e) {
      ((this.auth = e), (this.internalListeners = new Map()));
    }
    getUid() {
      return (this.assertAuthConfigured(), this.auth.currentUser?.uid || null);
    }
    async getToken(e) {
      if (
        (this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        !this.auth.currentUser)
      )
        return null;
      return { accessToken: await this.auth.currentUser.getIdToken(e) };
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      const t = this.auth.onIdTokenChanged((t) => {
        e(t?.stsTokenManager.accessToken || null);
      });
      (this.internalListeners.set(e, t), this.updateProactiveRefresh());
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      const t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      ku(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth",
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  }
  const Tf = Es("authIdTokenMaxAge") || 300;
  let Pf = null;
  var Nf, Of;
  ((Nf = {
    loadJS: (e) =>
      new Promise((t, n) => {
        const r = document.createElement("script");
        (r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = yu("internal-error");
            ((t.customData = e), n(t));
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (document.getElementsByTagName("head")?.[0] ?? document).appendChild(
            r,
          ));
      }),
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript:
      "https://www.google.com/recaptcha/enterprise.js?render=",
  }),
    (Rc = Nf),
    (Of = "Browser"),
    Wl(
      new Us(
        "auth",
        (e, t) => {
          let { options: n } = t;
          const r = e.getProvider("app").getImmediate(),
            a = e.getProvider("heartbeat"),
            i = e.getProvider("app-check-internal"),
            { apiKey: o, authDomain: s } = r.options;
          ku(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
          const l = {
              apiKey: o,
              authDomain: s,
              clientPlatform: Of,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: kc(Of),
            },
            u = new Cc(r, a, i, l);
          return (
            (function (e, t) {
              const n = t?.persistence || [],
                r = (Array.isArray(n) ? n : [n]).map(oc);
              (t?.errorMap && e._updateErrorMap(t.errorMap),
                e._initializeWithPersistence(r, t?.popupRedirectResolver));
            })(u, n),
            u
          );
        },
        "PUBLIC",
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, t, n) => {
          e.getProvider("auth-internal").initialize();
        }),
    ),
    Wl(
      new Us(
        "auth-internal",
        (e) => ((e) => new If(e))(Ac(e.getProvider("auth").getImmediate())),
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    eu(
      xf,
      Rf,
      (function (e) {
        switch (e) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return;
        }
      })(Of),
    ),
    eu(xf, Rf, "esm2020"));
  const Lf = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Bl;
              const t = Vl.get(e);
              if (!t && e === Bl && ks()) return Zl();
              if (!t) throw Yl.create("no-app", { appName: e });
              return t;
            })();
      const t = Kl(e, "auth");
      if (t.isInitialized()) return t.getImmediate();
      const n = (function (e, t) {
          const n = Kl(e, "auth");
          if (n.isInitialized()) {
            const e = n.getImmediate();
            if (Is(n.getOptions(), t ?? {})) return e;
            gu(e, "already-initialized");
          }
          return n.initialize({ options: t });
        })(e, { popupRedirectResolver: Af, persistence: [jd, md, wd] }),
        r = Es("authTokenSyncURL");
      if (r && "boolean" === typeof isSecureContext && isSecureContext) {
        const e = new URL(r, location.origin);
        if (location.origin === e.origin) {
          const t = ((e) => async (t) => {
            const n = t && (await t.getIdTokenResult()),
              r =
                n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
            if (r && r > Tf) return;
            const a = n?.token;
            Pf !== a &&
              ((Pf = a),
              await fetch(e, {
                method: a ? "POST" : "DELETE",
                headers: a ? { Authorization: `Bearer ${a}` } : {},
              }));
          })(e.toString());
          (!(function (e, t, n) {
            Ds(e).beforeAuthStateChanged(t, n);
          })(n, t, () => t(n.currentUser)),
            (function (e, t, n, r) {
              Ds(e).onIdTokenChanged(t, n, r);
            })(n, (e) => t(e)));
        }
      }
      const a = Ss("auth");
      return (a && Uc(n, `http://${a}`), n);
    })(
      Zl({
        apiKey: "AIzaSyDqqUN73nUoj1jO9dZ0gA3G4nr6FOk8t-w",
        authDomain: "createarticle-1be4e.firebaseapp.com",
        projectId: "createarticle-1be4e",
        storageBucket: "createarticle-1be4e.firebasestorage.app",
        messagingSenderId: "304208490624",
        appId: "1:304208490624:web:ae07baa1d094ed41baf665",
        measurementId: "G-5RBYM5JN1H",
      }),
    ),
    jf = new td(),
    Df =
      (new ed(),
      () => {
        (async function (e, t, n) {
          if ($l(e.app))
            return Promise.reject(
              yu(e, "operation-not-supported-in-this-environment"),
            );
          const r = Ac(e);
          wu(e, t, Gc);
          const a = Bd(r, n);
          return new Kd(r, "signInViaPopup", t, a).executeNotNull();
        })(Lf, jf)
          .then((e) => {
            const t = td.credentialFromResult(e);
            (localStorage.setItem("googleToken", JSON.stringify(t.accessToken)),
              null !== t.accessToken && (window.location.href = "/home"));
          })
          .catch(() => {});
      }),
    Mf = () => {
      const [e, t] = (0, a.useState)({}),
        [n, r] = (0, a.useState)(""),
        [i, o] = (0, a.useState)(""),
        [s, l] = (0, a.useState)(!0),
        u = Qt(),
        { loading: c, error: d } = $t((e) => e.auth),
        [f, h] = (0, a.useState)(!1),
        p = pe(),
        [, m] = (0, a.useState)(null),
        [g, y] = (0, a.useState)(!1);
      (0, a.useEffect)(() => {
        const e = document.getElementById("signUp"),
          t = document.getElementById("signIn"),
          n = document.getElementById("login"),
          r = () => {
            n.classList.add("right-panel-active");
          },
          a = () => {
            n.classList.remove("right-panel-active");
          };
        (e.addEventListener("click", r), t.addEventListener("click", a));
        const i = (function (e, t, n, r) {
          return Ds(e).onAuthStateChanged(t, n, r);
        })(Lf, (e) => {
          m(e);
        });
        return (
          null != localStorage.getItem("googleToken") && p("/home"),
          () => {
            (e.removeEventListener("click", r),
              t.removeEventListener("click", a),
              i());
          }
        );
      }, [1]);
      const v = () => {
          l(!1);
        },
        b = () => {
          (l(!0), h(!0));
        };
      return (0, Xt.jsx)("div", {
        className: "container-login-page",
        children: (0, Xt.jsxs)("div", {
          className: "container-login",
          id: "login",
          children: [
            (0, Xt.jsx)("div", {
              className: "form-container-login sign-in-container-login",
              children: s
                ? (0, Xt.jsx)("div", {
                    children: (0, Xt.jsxs)("form", {
                      action: "#",
                      onSubmit: async (e) => {
                        e.preventDefault();
                        const r = ((e, t) => {
                          let n = {};
                          return (
                            e || (n.username = "Username is required"),
                            t
                              ? t.length < 6 &&
                                (n.password =
                                  "Password must be at least 6 characters")
                              : (n.password = "Password is required"),
                            n
                          );
                        })(n, i);
                        if (Object.keys(r).length > 0) return void t(r);
                        await (async (e) => {
                          if (
                            "rejected" === (await u(Go(e))).meta.requestStatus
                          )
                            return;
                          const t = await u(Zo({ language: "bg" }));
                          "rejected" !== t.meta.requestStatus
                            ? p("/home")
                            : console.log(
                                "Authentication check failed:",
                                t.error.message,
                              );
                        })({ username: n, password: i, role: "user" });
                        (
                          await u(
                            Go({ username: n, password: i, role: "user" }),
                          )
                        ).payload.token && p("/home");
                      },
                      children: [
                        (0, Xt.jsx)("h2", {
                          className: "add-color-white",
                          children: "Sign In",
                        }),
                        (0, Xt.jsx)("div", {
                          className: "social-container-login",
                          onClick: Df,
                          children: (0, Xt.jsx)("a", {
                            href: "#",
                            className: "social",
                            children: (0, Xt.jsx)("img", {
                              className: "google-size",
                              src: rs,
                              alt: "google",
                            }),
                          }),
                        }),
                        (0, Xt.jsx)("span", {
                          className: "add-color-white",
                          children: "or use your account",
                        }),
                        (0, Xt.jsxs)("div", {
                          className: "input-row",
                          style: { position: "relative" },
                          children: [
                            (0, Xt.jsx)("label", {
                              className:
                                "add-color-white login-input margin-top-15",
                              children: "Username",
                            }),
                            (0, Xt.jsx)("input", {
                              type: "text",
                              value: n,
                              name: "username",
                              onChange: (e) => r(e.target.value),
                              style: { paddingRight: "36px" },
                            }),
                            n &&
                              (0, Xt.jsx)("button", {
                                type: "button",
                                onClick: () => r(""),
                                "aria-label": "Clear username",
                                style: {
                                  position: "absolute",
                                  right: "8px",
                                  bottom: "1px",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                  fontSize: "18px",
                                },
                                children: "\u2716\ufe0f",
                              }),
                            e.username &&
                              (0, Xt.jsx)("p", {
                                style: { color: "red" },
                                children: e.username,
                              }),
                          ],
                        }),
                        (0, Xt.jsxs)("div", {
                          className: "margin-15",
                          style: { position: "relative" },
                          children: [
                            (0, Xt.jsx)("label", {
                              className: "add-color-white",
                              children: "Password",
                            }),
                            (0, Xt.jsx)("input", {
                              type: g ? "text" : "password",
                              value: i,
                              onChange: (e) => o(e.target.value),
                              style: { paddingRight: "36px" },
                            }),
                            (0, Xt.jsx)("button", {
                              type: "button",
                              onClick: () => y((e) => !e),
                              "aria-label": g
                                ? "Hide password"
                                : "Show password",
                              style: {
                                position: "absolute",
                                right: "8px",
                                top: "34px",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "18px",
                              },
                              children: g ? "\ud83d\ude49" : "\ud83d\ude48",
                            }),
                            e.password &&
                              (0, Xt.jsx)("p", {
                                style: { color: "red" },
                                children: e.password,
                              }),
                          ],
                        }),
                        f &&
                          (0, Xt.jsx)("p", {
                            style: { color: "red" },
                            children: d,
                          }),
                        (0, Xt.jsx)("button", {
                          className: "btn-login-page",
                          onClick: b,
                          type: "submit",
                          disabled: c,
                          children: c ? "Logging in..." : "Login",
                        }),
                      ],
                    }),
                  })
                : (0, Xt.jsx)("div", {
                    children: (0, Xt.jsx)(hs, { onAccountCreated: b }),
                  }),
            }),
            (0, Xt.jsx)("div", {
              className: "overlay-container-login",
              children: (0, Xt.jsxs)("div", {
                className: "overlay",
                children: [
                  (0, Xt.jsxs)("div", {
                    className: "overlay-panel overlay-left",
                    onClick: b,
                    children: [
                      (0, Xt.jsx)("h5", { children: "Welcome Back" }),
                      (0, Xt.jsx)("p", {
                        children:
                          "To keep connected with us please login with your personal info",
                      }),
                      (0, Xt.jsx)("button", {
                        className: "ghost btn-login-page",
                        id: "signIn",
                        onClick: b,
                        children: "Sign In",
                      }),
                    ],
                  }),
                  (0, Xt.jsxs)("div", {
                    className: "overlay-panel overlay-right",
                    onClick: v,
                    children: [
                      (0, Xt.jsx)("h4", { children: "Hello,Friend" }),
                      (0, Xt.jsx)("p", {
                        children:
                          "Enter your personal details and start journey with me!",
                      }),
                      (0, Xt.jsx)("button", {
                        className: "ghost btn-login-page hello-friend-btn",
                        id: "signUp",
                        onClick: v,
                        children: "Sign Up",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
    Uf = () => {
      const [e, t] = (0, a.useState)(!1),
        n = Qt(),
        r = localStorage.getItem("googleToken");
      return (
        (0, a.useEffect)(() => {
          (async () => {
            ((await n(Zo({ language: "bg" }))).payload.isAuthenticated || r) &&
              t(!0);
          })().then(() => {});
        }, [n, r]),
        (0, Xt.jsx)("div", {
          children: e
            ? (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)(Jo, {}), (0, Xt.jsx)(Yo, {})],
              })
            : (0, Xt.jsx)(Mf, {}),
        })
      );
    },
    Ff = ra("sections/updateSection", async (e, t) => {
      let { rejectWithValue: n } = t;
      try {
        const t = e.get("id");
        return (
          await jo.post(`https://share.d-dimitrov.eu/api/edit/article/${t}`, e)
        ).data;
      } catch (a) {
        var r;
        return n(
          (null === (r = a.response) || void 0 === r ? void 0 : r.data) ||
            "Error uploading section",
        );
      }
    }),
    zf = ua({
      name: "sections",
      initialState: { isLoading: !0, section: [], status: "idle", error: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Ff.pending, (e) => {
          ((e.status = "loading"), (e.error = null), (e.isLoading = !0));
        })
          .addCase(Ff.fulfilled, (e, t) => {
            (console.log("pesho", t.payload),
              (e.status = "succeeded"),
              (e.isLoading = !1),
              e.section.push(t.payload),
              (e.error = null));
          })
          .addCase(Ff.rejected, (e, t) => {
            ((e.status = "failed"),
              (e.error = !0),
              (e.error = t.error.message));
          });
      },
    }).reducer;
  const Bf =
      n.p +
      "static/media/delete-svgrepo-com.4fe8ccc367e360735fd11b40f52fdc4a.svg",
    qf = ra("sections/deleteSection", async (e, t) => {
      let { rejectWithValue: n } = t,
        r = e.articleId,
        a = e.sectionId;
      try {
        return await jo.delete(
          `https://share.d-dimitrov.eu/api/delete/section/${r}/${a}`,
        );
      } catch (i) {
        return n(i.response.data);
      }
    }),
    Vf = ua({
      name: "deleteArticlesSections",
      initialState: {
        articles: [],
        sections: [],
        status: "idle",
        loading: !1,
        error: null,
      },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Qo.pending, (e) => {
          ((e.loading = !0), (e.status = "loading"), (e.error = null));
        })
          .addCase(qf.fulfilled, (e, t) => {
            ((e.loading = !1),
              (e.status = "succeeded"),
              (e.sections = e.sections.filter((e) => e.id !== t.payload.id)));
          })
          .addCase(qf.rejected, (e, t) => {
            ((e.loading = !1), (e.status = "failed"), (e.error = t.payload));
          });
      },
    }).reducer,
    Hf = () => {
      const { articleId: e } = me(),
        t = Qt(),
        n = "https://share.d-dimitrov.eu",
        r = $t((e) => e.articlesSections.data),
        i = $t((e) => e.articlesSections.status),
        [, o] = (0, a.useState)(""),
        [s, l] = (0, a.useState)(!1),
        [, u] = (0, a.useState)([]),
        c = pe();
      let d = {};
      (0, a.useEffect)(() => {
        p();
      }, [e, i]);
      const [f, h] = (0, a.useState)({
          id: e,
          article_id: e,
          title: "",
          image: "",
          status: !1,
          section: [{ position: 1, content: "", title: "" }],
        }),
        p = () => {
          if ("idle" === i) t(ha());
          else if ("succeeded" === i) {
            let t = Number(e);
            r.forEach((e) => {
              e.id === t && ((d = e), u(d.section), h(d), l(d.status));
            });
          }
        },
        m = (e) => {
          const { name: t, value: n } = e.target;
          if (t.startsWith("section[")) {
            const e = parseInt(t.split("[")[1].split("]")[0]),
              r = t.split(".")[1];
            h((t) => {
              const a = [...t.section];
              return ((a[e] = { ...a[e], [r]: n }), { ...t, section: a });
            });
          } else {
            const { name: t, value: n } = e.target;
            h((e) => ({ ...e, [t]: n }));
          }
        },
        g = async (n) => {
          n.preventDefault();
          const r = new FormData();
          (r.append("id", e),
            r.append("title", f.title),
            r.append("status", s),
            r.append("oldMainImage", f.mainImage || ""),
            f.image instanceof File && r.append("image", f.image));
          const a = f.section.map((e, t) => {
            const n = e.position || t + 1;
            return e.section_image instanceof File
              ? (r.append("section_image", e.section_image),
                { ...e, position: n, hasNewImage: !0 })
              : { ...e, position: n, hasNewImage: !1 };
          });
          r.append("section", JSON.stringify(a));
          try {
            (await t(Ff(r)).unwrap(),
              await t(ha()).unwrap(),
              f.preview && URL.revokeObjectURL(f.preview),
              f.section.forEach((e) => {
                e.sectionPreview && URL.revokeObjectURL(e.sectionPreview);
              }),
              c("/home"));
          } catch (i) {
            console.error("Error:", i);
          }
        };
      return (0, Xt.jsx)(Xt.Fragment, {
        children:
          "loading" === i
            ? (0, Xt.jsx)("div", { children: "Loading..." })
            : (0, Xt.jsxs)("div", {
                className: "edit-form-bgr",
                children: [
                  (0, Xt.jsxs)("div", {
                    className:
                      "flex-vertical-container align-items-center edit-header",
                    children: [
                      (0, Xt.jsx)("h3", {
                        className: s
                          ? "add-color-green remove-margin-bottom"
                          : "add-color-orange remove-margin-bottom",
                        children: s
                          ? "\u0421\u0442\u0430\u0442\u0438\u044f \u0435 \u043f\u043e\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430"
                          : "\u0421\u0442\u0430\u0442\u0438\u044f\u0442\u0430 \u043d\u0435 \u0435 \u043f\u043e\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430",
                      }),
                      (0, Xt.jsxs)("div", {
                        className: "show-article",
                        children: [
                          (0, Xt.jsx)("input", {
                            type: "checkbox",
                            id: "check",
                            checked: s,
                            onChange: (e) => {
                              const t = e.target.checked;
                              (console.log("Checkbox is checked:", t), l(!s));
                            },
                          }),
                          (0, Xt.jsxs)("label", {
                            htmlFor: "check",
                            children: [
                              (0, Xt.jsx)("div", { id: "plug" }),
                              (0, Xt.jsx)("div", { id: "flugHead" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Xt.jsxs)("form", {
                    className: "signup edit-form-styles",
                    id: "myForm",
                    autoComplete: "off",
                    onSubmit: g,
                    encType: "multipart/form-data",
                    children: [
                      (0, Xt.jsx)("h5", {
                        className: "center-header text-align-center",
                        children:
                          "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u044f:",
                      }),
                      (0, Xt.jsxs)("div", {
                        className: "text-align-center",
                        children: [
                          (0, Xt.jsx)("p", { children: f.title }),
                          (f.preview || f.images_id) &&
                            (0, Xt.jsxs)("div", {
                              className: "current-image-preview",
                              children: [
                                (0, Xt.jsx)("p", {
                                  children: f.preview
                                    ? "\u041d\u043e\u0432\u0430 \u0433\u043b\u0430\u0432\u043d\u0430 \u0441\u043d\u0438\u043c\u043a\u0430 (\u043f\u0440\u0435\u0433\u043b\u0435\u0434):"
                                    : "\u0422\u0435\u043a\u0443\u0449\u0430 \u0433\u043b\u0430\u0432\u043d\u0430 \u0441\u043d\u0438\u043c\u043a\u0430:",
                                }),
                                (0, Xt.jsx)("img", {
                                  src: f.preview
                                    ? f.preview
                                    : `${n}${f.images_id}`,
                                  alt: "Main",
                                  style: {
                                    width: "150px",
                                    borderRadius: "8px",
                                    border: f.preview
                                      ? "2px solid #2196f3"
                                      : "none",
                                  },
                                }),
                              ],
                            }),
                          (0, Xt.jsx)("div", {
                            className:
                              "flex-horizontal-container-raw justify-content-center margin-top-15",
                            children: (0, Xt.jsxs)("div", {
                              className: "file file--uploading",
                              children: [
                                (0, Xt.jsx)("input", {
                                  id: "input-file-main",
                                  onChange: (e) => {
                                    const t = e.target.files[0];
                                    if (t) {
                                      const e = URL.createObjectURL(t);
                                      h((n) => ({
                                        ...n,
                                        image: t,
                                        preview: e,
                                      }));
                                      const n =
                                        t.name.length > 30
                                          ? t.name.substring(0, 30) + "..."
                                          : t.name;
                                      o(n);
                                    }
                                  },
                                  type: "file",
                                  style: { display: "none" },
                                }),
                                (0, Xt.jsxs)("label", {
                                  htmlFor: "input-file-main",
                                  className: "input-file border-radius-20",
                                  children: [
                                    (0, Xt.jsx)("img", {
                                      src: Vo,
                                      alt: "upload",
                                    }),
                                    (0, Xt.jsx)("p", {
                                      className: "remove-margin-bottom",
                                      children:
                                        "\u0421\u043c\u0435\u043d\u0438 \u0433\u043b\u0430\u0432\u043d\u0430 \u0441\u043d\u0438\u043c\u043a\u0430",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Xt.jsxs)("div", {
                        className:
                          "flex-horizontal-container-raw signup__field justify-content-center margin-15",
                        children: [
                          (0, Xt.jsx)("input", {
                            type: "text",
                            className: "signup__input margin-top-15",
                            name: "title",
                            value: f.title || "",
                            onChange: m,
                            placeholder:
                              "\u0417\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e",
                            required: !0,
                          }),
                          (0, Xt.jsx)("label", {
                            className: "signup__label",
                            children:
                              "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435\u0442\u043e",
                          }),
                        ],
                      }),
                      (0, Xt.jsx)("div", {
                        className: "flex-vertical-container input-width-100",
                        children: f.section.map((r, a) =>
                          (0, Xt.jsxs)(
                            "div",
                            {
                              className:
                                "section-title-content flex-vertical-container margin-15",
                              children: [
                                (0, Xt.jsxs)("div", {
                                  className: "signup__field",
                                  children: [
                                    (0, Xt.jsx)("input", {
                                      type: "text",
                                      className: "signup__input margin-top-15",
                                      name: `section[${a}].title`,
                                      value: r.title || "",
                                      onChange: m,
                                      placeholder:
                                        "\u0417\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e",
                                      required: !0,
                                    }),
                                    (0, Xt.jsxs)("label", {
                                      className: "signup__label",
                                      htmlFor: "email",
                                      children: [
                                        "\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435\u0442\u043e \u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430 ",
                                        a + 1,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Xt.jsxs)("h6", {
                                  children: [
                                    "\u0421\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435 \u043a\u044a\u043c \u0441\u0435\u043a\u0446\u0438\u044f\u0442\u0430 ",
                                    a + 1,
                                  ],
                                }),
                                (0, Xt.jsx)("textarea", {
                                  name: `section[${a}].content`,
                                  value: r.content || "",
                                  onChange: m,
                                  placeholder: "Content",
                                  className: "add-textarea-height padding-20",
                                }),
                                (0, Xt.jsx)("br", {}),
                                (0, Xt.jsx)("br", {}),
                                (r.sectionPreview || r.imageUrl) &&
                                  (0, Xt.jsx)("img", {
                                    src: r.sectionPreview
                                      ? r.sectionPreview
                                      : `${n}${r.imageUrl}`,
                                    className: "images-section-size",
                                    alt: "Section-image",
                                    style: {
                                      border: r.sectionPreview
                                        ? "2px solid #4caf50"
                                        : "none",
                                    },
                                  }),
                                " ",
                                (0, Xt.jsxs)("div", {
                                  className:
                                    "flex-horizontal-container-raw justify-content-center flex-gap",
                                  children: [
                                    (0, Xt.jsxs)("div", {
                                      className: "file file--uploading",
                                      children: [
                                        (0, Xt.jsx)("input", {
                                          id: `file-section-${a}`,
                                          onChange: (e) =>
                                            ((e, t) => {
                                              const n = e.target.files[0];
                                              if (n) {
                                                const e =
                                                  URL.createObjectURL(n);
                                                h((r) => {
                                                  const a = [...r.section];
                                                  return (
                                                    (a[t] = {
                                                      ...a[t],
                                                      section_image: n,
                                                      sectionPreview: e,
                                                    }),
                                                    { ...r, section: a }
                                                  );
                                                });
                                              }
                                            })(e, a),
                                          type: "file",
                                          style: { display: "none" },
                                        }),
                                        (0, Xt.jsxs)("label", {
                                          htmlFor: `file-section-${a}`,
                                          className:
                                            "input-file border-radius-20",
                                          children: [
                                            (0, Xt.jsx)("img", {
                                              src: Vo,
                                              alt: "upload",
                                            }),
                                            (0, Xt.jsx)("p", {
                                              className: "remove-margin-bottom",
                                              children:
                                                "\u041a\u0430\u0447\u0438 \u0444\u0430\u0439\u043b",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, Xt.jsx)("div", {
                                      className:
                                        "input-file download-button-style",
                                      onClick: () =>
                                        (async (e, t) => {
                                          try {
                                            const n = await fetch(e),
                                              r = await n.blob(),
                                              a = window.URL.createObjectURL(r),
                                              i = document.createElement("a");
                                            i.href = a;
                                            const o = t.split("/").pop();
                                            (i.setAttribute("download", o),
                                              document.body.appendChild(i),
                                              i.click(),
                                              i.parentNode.removeChild(i),
                                              window.URL.revokeObjectURL(a));
                                          } catch (n) {
                                            (console.error(
                                              "\u0413\u0440\u0435\u0448\u043a\u0430 \u043f\u0440\u0438 \u0441\u0432\u0430\u043b\u044f\u043d\u0435:",
                                              n,
                                            ),
                                              window.open(e, "_blank"));
                                          }
                                        })(`${n}${r.imageUrl}`, f.images_id),
                                      children: (0, Xt.jsxs)("label", {
                                        htmlFor: "input-file-edit",
                                        className:
                                          "input-file text-align-center justify-content-center align-items-center",
                                        children: [
                                          (0, Xt.jsx)("img", {
                                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGoSURBVEiJtdQ9j01hEAfw371ZG4sNtlKsUJNsRCeLIBcRKq1IiE8gCh+ByktB4UbIfoGNIAoRBIlm46URxRZsvDQ0W8hi9yqeOclx3Xvuc5Lrn0wz85//zJk581APq8KGiklcxjw6YfO4FLFKNAbEj+M2RnEPb8K/A0exhFOYrd02DuMXnmNLj/hWvMBPHKwrPoYFvMaaCt5a6as+YnWdAielWe/L4B4I7olc8QZm8NngHRX8r5FTyW/hkTT3Dp7kdhTcTuQ+lL7qL5zDCj7gAs5jqkaBqci5GBorOFsE94ZjFuM1RPthPLSWMQ138QnrM5InZRwXNkg7vAPfcS2zu/thObiObyPS/7uYmVR1E91YxFgT77G7RmIu9uBdU3prpnF6iOJnsCu0jeKZtPUr2IaNXVYc0OMw4evmbcfV0Hqq9LSvw60IdHpYu0eBdh/uMm5K79Q/p71ZuotNGCn5H+BtSXy/dFxHSpzf+BLTWFADDf1HNPCtamYUaOMlJkq+ifDdyG6zAi38wBxehc2FrzWMAnAoBItFLuHYsMS7i/wX8QI7w7LxB/AIaLXEf0Y/AAAAAElFTkSuQmCC",
                                            alt: "download",
                                            style: {
                                              height: "24px",
                                              width: "24px",
                                            },
                                          }),
                                          (0, Xt.jsx)("p", {
                                            className: "remove-margin-bottom",
                                            children:
                                              "\u0421\u0432\u0430\u043b\u0438 \u0444\u0430\u0439\u043b",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, Xt.jsx)("hr", { className: "hr-edit" }),
                                (0, Xt.jsx)("div", {
                                  className: "delete_section",
                                  onClick: () =>
                                    (async (n) => {
                                      try {
                                        (await t(
                                          qf({ articleId: e, sectionId: n }),
                                        ).unwrap(),
                                          await t(ha()).unwrap());
                                      } catch (r) {
                                        console.error("Error:", r);
                                      }
                                    })(r.position),
                                  children: (0, Xt.jsx)("img", {
                                    src: Bf,
                                    alt: "delete",
                                  }),
                                }),
                              ],
                            },
                            a,
                          ),
                        ),
                      }),
                      (0, Xt.jsx)("button", {
                        onClick: g,
                        type: "submit",
                        className: "edit-send-button",
                        children:
                          "\u0417\u0430\u043f\u0430\u0437\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435",
                      }),
                    ],
                  }),
                  (0, Xt.jsx)("div", {
                    className: "margin-15 text-align-center",
                    children: (0, Xt.jsx)("button", {
                      className:
                        "padding-15 border-radius-10 border-color-green",
                      onClick: () => {
                        h((e) => ({
                          ...e,
                          section: [
                            ...e.section,
                            {
                              position: e.section.length + 1,
                              title: "",
                              content: "",
                            },
                          ],
                        }));
                      },
                      children:
                        "\u0414\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u043d\u043e\u0432\u0430 \u0441\u0435\u043a\u0446\u0438\u044f",
                    }),
                  }),
                ],
              }),
      });
    },
    Jf = ra("admin/changeUserRole", async (e, t) => {
      let { username: n, newRole: r, token: a } = e;
      try {
        const e = await fetch("https://share.d-dimitrov.eu/api/change-role", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${a}`,
          },
          body: JSON.stringify({ username: n, newRole: r }),
        });
        if (
          (401 === e.status &&
            (localStorage.clear(), (window.location.href = "/")),
          !e.ok)
        ) {
          const t = await e.json();
          throw new Error(t.message || "Failed to change role");
        }
        return await e.json();
      } catch (i) {
        return t.rejectWithValue(i.message);
      }
    }),
    Qf = ua({
      name: "admin",
      initialState: { status: "idle", error: null, updatedUser: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Jf.pending, (e) => {
          ((e.status = "loading"), (e.error = null));
        })
          .addCase(Jf.fulfilled, (e, t) => {
            ((e.status = "succeeded"), (e.updatedUser = t.payload.user));
          })
          .addCase(Jf.rejected, (e, t) => {
            ((e.status = "failed"), (e.error = t.payload));
          });
      },
    }).reducer;
  function Wf(e) {
    if ("function" !== typeof e)
      throw new TypeError(
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "expected a function, instead received " + typeof e,
      );
  }
  var Kf = (e) => (Array.isArray(e) ? e : [e]);
  function $f(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return (
      (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "expected all items to be functions, instead received the following types: ";
        if (!e.every((e) => "function" === typeof e)) {
          const n = e
            .map((e) =>
              "function" === typeof e
                ? `function ${e.name || "unnamed"}()`
                : typeof e,
            )
            .join(", ");
          throw new TypeError(`${t}[${n}]`);
        }
      })(
        t,
        "createSelector expects all input-selectors to be functions, but received the following types: ",
      ),
      t
    );
  }
  (Symbol(), Object.getPrototypeOf({}));
  var Yf =
    "undefined" !== typeof WeakRef
      ? WeakRef
      : class {
          constructor(e) {
            this.value = e;
          }
          deref() {
            return this.value;
          }
        };
  function Xf() {
    return { s: 0, v: void 0, o: null, p: null };
  }
  function Gf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = { s: 0, v: void 0, o: null, p: null };
    const { resultEqualityCheck: r } = t;
    let a,
      i = 0;
    function o() {
      let t = n;
      const { length: o } = arguments;
      for (let e = 0, n = o; e < n; e++) {
        const n = arguments[e];
        if ("function" === typeof n || ("object" === typeof n && null !== n)) {
          let e = t.o;
          null === e && (t.o = e = new WeakMap());
          const r = e.get(n);
          void 0 === r ? ((t = Xf()), e.set(n, t)) : (t = r);
        } else {
          let e = t.p;
          null === e && (t.p = e = new Map());
          const r = e.get(n);
          void 0 === r ? ((t = Xf()), e.set(n, t)) : (t = r);
        }
      }
      const s = t;
      let l;
      if (1 === t.s) l = t.v;
      else if (((l = e.apply(null, arguments)), i++, r)) {
        const e = a?.deref?.() ?? a;
        null != e && r(e, l) && ((l = e), 0 !== i && i--);
        a =
          ("object" === typeof l && null !== l) || "function" === typeof l
            ? new Yf(l)
            : l;
      }
      return ((s.s = 1), (s.v = l), l);
    }
    return (
      (o.clearCache = () => {
        ((n = { s: 0, v: void 0, o: null, p: null }), o.resetResultsCount());
      }),
      (o.resultsCount = () => i),
      (o.resetResultsCount = () => {
        i = 0;
      }),
      o
    );
  }
  function Zf(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    const a = "function" === typeof e ? { memoize: e, memoizeOptions: n } : e,
      i = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let r,
          i = 0,
          o = 0,
          s = {},
          l = t.pop();
        ("object" === typeof l && ((s = l), (l = t.pop())),
          Wf(
            l,
            `createSelector expects an output function after the inputs, but received: [${typeof l}]`,
          ));
        const u = { ...a, ...s },
          {
            memoize: c,
            memoizeOptions: d = [],
            argsMemoize: f = Gf,
            argsMemoizeOptions: h = [],
            devModeChecks: p = {},
          } = u,
          m = Kf(d),
          g = Kf(h),
          y = $f(t),
          v = c(
            function () {
              return (i++, l.apply(null, arguments));
            },
            ...m,
          );
        const b = f(
          function () {
            o++;
            const e = (function (e, t) {
              const n = [],
                { length: r } = e;
              for (let a = 0; a < r; a++) n.push(e[a].apply(null, t));
              return n;
            })(y, arguments);
            return ((r = v.apply(null, e)), r);
          },
          ...g,
        );
        return Object.assign(b, {
          resultFunc: l,
          memoizedResultFunc: v,
          dependencies: y,
          dependencyRecomputations: () => o,
          resetDependencyRecomputations: () => {
            o = 0;
          },
          lastResult: () => r,
          recomputations: () => i,
          resetRecomputations: () => {
            i = 0;
          },
          memoize: c,
          argsMemoize: f,
        });
      };
    return (Object.assign(i, { withTypes: () => i }), i);
  }
  var eh = Zf(Gf),
    th = Object.assign(
      function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh;
        !(function (e) {
          if ("object" !== typeof e)
            throw new TypeError(
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "expected an object, instead received " + typeof e,
            );
        })(
          e,
          "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
            typeof e,
        );
        const n = Object.keys(e),
          r = t(
            n.map((t) => e[t]),
            function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return t.reduce((e, t, r) => ((e[n[r]] = t), e), {});
            },
          );
        return r;
      },
      { withTypes: () => th },
    );
  var nh = class extends Error {
      issues;
      constructor(e) {
        (super(e[0].message), (this.name = "SchemaError"), (this.issues = e));
      }
    },
    rh = ((e) => (
      (e.uninitialized = "uninitialized"),
      (e.pending = "pending"),
      (e.fulfilled = "fulfilled"),
      (e.rejected = "rejected"),
      e
    ))(rh || {}),
    ah = "uninitialized",
    ih = "pending",
    oh = "fulfilled",
    sh = "rejected";
  function lh(e) {
    return {
      status: e,
      isUninitialized: e === ah,
      isLoading: e === ih,
      isSuccess: e === oh,
      isError: e === sh,
    };
  }
  var uh = kr;
  function ch(e, t) {
    if (
      e === t ||
      !((uh(e) && uh(t)) || (Array.isArray(e) && Array.isArray(t)))
    )
      return t;
    const n = Object.keys(t),
      r = Object.keys(e);
    let a = n.length === r.length;
    const i = Array.isArray(t) ? [] : {};
    for (const o of n) ((i[o] = ch(e[o], t[o])), a && (a = e[o] === i[o]));
    return a ? e : i;
  }
  function dh(e, t, n) {
    return e.reduce((e, r, a) => (t(r, a) && e.push(n(r, a)), e), []).flat();
  }
  function fh(e) {
    return null != e;
  }
  function hh(e) {
    return [...(e?.values() ?? [])].filter(fh);
  }
  function ph(e, t) {
    if (!e) return t;
    if (!t) return e;
    if (
      (function (e) {
        return new RegExp("(^|:)//").test(e);
      })(t)
    )
      return t;
    const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
    return (
      (e = ((e) => e.replace(/\/$/, ""))(e)),
      `${e}${n}${(t = ((e) => e.replace(/^\//, ""))(t))}`
    );
  }
  function mh(e, t, n) {
    return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
  }
  var gh = () => new Map(),
    yh = (e) => {
      const t = new AbortController();
      return (
        setTimeout(() => {
          const e = "signal timed out",
            n = "TimeoutError";
          t.abort(
            "undefined" !== typeof DOMException
              ? new DOMException(e, n)
              : Object.assign(new Error(e), { name: n }),
          );
        }, e),
        t.signal
      );
    },
    vh = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (const a of t) if (a.aborted) return AbortSignal.abort(a.reason);
      const r = new AbortController();
      for (const a of t)
        a.addEventListener("abort", () => r.abort(a.reason), {
          signal: r.signal,
          once: !0,
        });
      return r.signal;
    },
    bh = function () {
      return fetch(...arguments);
    },
    wh = (e) => e.status >= 200 && e.status <= 299,
    Sh = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  function kh(e) {
    if (!kr(e)) return e;
    const t = { ...e };
    for (const [n, r] of Object.entries(t)) void 0 === r && delete t[n];
    return t;
  }
  var Eh = class {
    constructor(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      ((this.value = e), (this.meta = t));
    }
  };
  var _h = "__rtkq/",
    Ch = "online",
    Ah = "offline",
    xh = "focused",
    Rh = Nr(`${_h}${xh}`),
    Ih = Nr(`${_h}un${xh}`),
    Th = Nr(`${_h}${Ch}`),
    Ph = Nr(`${_h}${Ah}`);
  var Nh = "query",
    Oh = "mutation",
    Lh = "infinitequery";
  function jh(e) {
    return e.type === Nh;
  }
  function Dh(e) {
    return e.type === Lh;
  }
  function Mh(e) {
    return jh(e) || Dh(e);
  }
  function Uh(e, t, n, r, a, i) {
    const o = "function" === typeof e ? e(t, n, r, a) : e;
    return o ? dh(o, fh, (e) => i(Fh(e))) : [];
  }
  function Fh(e) {
    return "string" === typeof e ? { type: e } : e;
  }
  var zh = (e, t) => e.endpointDefinitions[t],
    Bh = Symbol("forceQueryFn"),
    qh = (e) => "function" === typeof e[Bh];
  var Vh = class extends nh {
      constructor(e, t, n, r) {
        (super(e), (this.value = t), (this.schemaName = n), (this._bqMeta = r));
      }
    },
    Hh = (e, t) => (Array.isArray(e) ? e.includes(t) : !!e);
  async function Jh(e, t, n, r) {
    const a = await e["~standard"].validate(t);
    if (a.issues) throw new Vh(a.issues, t, n, r);
    return a.value;
  }
  function Qh(e) {
    return e;
  }
  var Wh = function () {
    return {
      ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
      [Dr]: !0,
    };
  };
  function Kh(e, t, n) {
    let { pages: r, pageParams: a } = t;
    const i = r.length - 1;
    return e.getNextPageParam(r[i], r, a[i], a, n);
  }
  function $h(e, t, n) {
    let { pages: r, pageParams: a } = t;
    return e.getPreviousPageParam?.(r[0], r, a[0], a, n);
  }
  function Yh(e, t, n, r) {
    return Uh(
      n[e.meta.arg.endpointName][t],
      $r(e) ? e.payload : void 0,
      Kr(e) ? e.payload : void 0,
      e.meta.arg.originalArgs,
      "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
      r,
    );
  }
  function Xh(e) {
    return fn(e) ? dr(e) : e;
  }
  function Gh(e, t, n) {
    const r = e[t];
    r && n(r);
  }
  function Zh(e) {
    return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
  }
  function ep(e, t, n) {
    const r = e[Zh(t)];
    r && n(r);
  }
  var tp = {};
  function np(e) {
    let {
      reducerPath: t,
      queryThunk: n,
      mutationThunk: r,
      serializeQueryArgs: a,
      context: {
        endpointDefinitions: i,
        apiUid: o,
        extractRehydrationInfo: s,
        hasRehydrationInfo: l,
      },
      assertTagType: u,
      config: c,
    } = e;
    const d = Nr(`${t}/resetApiState`);
    function f(e, t, n, r) {
      ((e[t.queryCacheKey] ??= { status: ah, endpointName: t.endpointName }),
        Gh(e, t.queryCacheKey, (e) => {
          ((e.status = ih),
            (e.requestId = n && e.requestId ? e.requestId : r.requestId),
            void 0 !== t.originalArgs && (e.originalArgs = t.originalArgs),
            (e.startedTimeStamp = r.startedTimeStamp));
          Dh(i[r.arg.endpointName]) &&
            "direction" in t &&
            (e.direction = t.direction);
        }));
    }
    function h(e, t, n, r) {
      Gh(e, t.arg.queryCacheKey, (e) => {
        if (e.requestId !== t.requestId && !r) return;
        const { merge: a } = i[t.arg.endpointName];
        if (((e.status = oh), a))
          if (void 0 !== e.data) {
            const {
              fulfilledTimeStamp: r,
              arg: i,
              baseQueryMeta: o,
              requestId: s,
            } = t;
            let l = mr(e.data, (e) =>
              a(e, n, {
                arg: i.originalArgs,
                baseQueryMeta: o,
                fulfilledTimeStamp: r,
                requestId: s,
              }),
            );
            e.data = l;
          } else e.data = n;
        else
          e.data =
            (i[t.arg.endpointName].structuralSharing ?? 1)
              ? ch(
                  fn(e.data)
                    ? ((o = e.data), fn(o) || nn(15), o[tn].base_)
                    : e.data,
                  n,
                )
              : n;
        var o;
        (delete e.error, (e.fulfilledTimeStamp = t.fulfilledTimeStamp));
      });
    }
    const p = ua({
        name: `${t}/queries`,
        initialState: tp,
        reducers: {
          removeQueryResult: {
            reducer(e, t) {
              let {
                payload: { queryCacheKey: n },
              } = t;
              delete e[n];
            },
            prepare: Mr(),
          },
          cacheEntriesUpserted: {
            reducer(e, t) {
              for (const n of t.payload) {
                const { queryDescription: r, value: a } = n;
                (f(e, r, !0, {
                  arg: r,
                  requestId: t.meta.requestId,
                  startedTimeStamp: t.meta.timestamp,
                }),
                  h(
                    e,
                    {
                      arg: r,
                      requestId: t.meta.requestId,
                      fulfilledTimeStamp: t.meta.timestamp,
                      baseQueryMeta: {},
                    },
                    a,
                    !0,
                  ));
              }
            },
            prepare: (e) => ({
              payload: e.map((e) => {
                const { endpointName: t, arg: n, value: r } = e,
                  o = i[t];
                return {
                  queryDescription: {
                    type: Nh,
                    endpointName: t,
                    originalArgs: e.arg,
                    queryCacheKey: a({
                      queryArgs: n,
                      endpointDefinition: o,
                      endpointName: t,
                    }),
                  },
                  value: r,
                };
              }),
              meta: { [Dr]: !0, requestId: Xr(), timestamp: Date.now() },
            }),
          },
          queryResultPatched: {
            reducer(e, t) {
              let {
                payload: { queryCacheKey: n, patches: r },
              } = t;
              Gh(e, n, (e) => {
                e.data = yr(e.data, r.concat());
              });
            },
            prepare: Mr(),
          },
        },
        extraReducers(e) {
          e.addCase(n.pending, (e, t) => {
            let {
              meta: n,
              meta: { arg: r },
            } = t;
            f(e, r, qh(r), n);
          })
            .addCase(n.fulfilled, (e, t) => {
              let { meta: n, payload: r } = t;
              h(e, n, r, qh(n.arg));
            })
            .addCase(n.rejected, (e, t) => {
              let {
                meta: { condition: n, arg: r, requestId: a },
                error: i,
                payload: o,
              } = t;
              Gh(e, r.queryCacheKey, (e) => {
                if (n);
                else {
                  if (e.requestId !== a) return;
                  ((e.status = sh), (e.error = o ?? i));
                }
              });
            })
            .addMatcher(l, (e, t) => {
              const { queries: n } = s(t);
              for (const [r, a] of Object.entries(n))
                (a?.status !== oh && a?.status !== sh) || (e[r] = a);
            });
        },
      }),
      m = ua({
        name: `${t}/mutations`,
        initialState: tp,
        reducers: {
          removeMutationResult: {
            reducer(e, t) {
              let { payload: n } = t;
              const r = Zh(n);
              r in e && delete e[r];
            },
            prepare: Mr(),
          },
        },
        extraReducers(e) {
          e.addCase(r.pending, (e, t) => {
            let {
              meta: n,
              meta: { requestId: r, arg: a, startedTimeStamp: i },
            } = t;
            a.track &&
              (e[Zh(n)] = {
                requestId: r,
                status: ih,
                endpointName: a.endpointName,
                startedTimeStamp: i,
              });
          })
            .addCase(r.fulfilled, (e, t) => {
              let { payload: n, meta: r } = t;
              r.arg.track &&
                ep(e, r, (e) => {
                  e.requestId === r.requestId &&
                    ((e.status = oh),
                    (e.data = n),
                    (e.fulfilledTimeStamp = r.fulfilledTimeStamp));
                });
            })
            .addCase(r.rejected, (e, t) => {
              let { payload: n, error: r, meta: a } = t;
              a.arg.track &&
                ep(e, a, (e) => {
                  e.requestId === a.requestId &&
                    ((e.status = sh), (e.error = n ?? r));
                });
            })
            .addMatcher(l, (e, t) => {
              const { mutations: n } = s(t);
              for (const [r, a] of Object.entries(n))
                (a?.status !== oh && a?.status !== sh) ||
                  r === a?.requestId ||
                  (e[r] = a);
            });
        },
      }),
      g = ua({
        name: `${t}/invalidation`,
        initialState: { tags: {}, keys: {} },
        reducers: {
          updateProvidedBy: {
            reducer(e, t) {
              for (const { queryCacheKey: n, providedTags: r } of t.payload) {
                y(e, n);
                for (const { type: t, id: a } of r) {
                  const r = ((e.tags[t] ??= {})[
                    a || "__internal_without_id"
                  ] ??= []);
                  r.includes(n) || r.push(n);
                }
                e.keys[n] = r;
              }
            },
            prepare: Mr(),
          },
        },
        extraReducers(e) {
          e.addCase(p.actions.removeQueryResult, (e, t) => {
            let {
              payload: { queryCacheKey: n },
            } = t;
            y(e, n);
          })
            .addMatcher(l, (e, t) => {
              const { provided: n } = s(t);
              for (const [r, a] of Object.entries(n.tags ?? {}))
                for (const [t, i] of Object.entries(a)) {
                  const a = ((e.tags[r] ??= {})[
                    t || "__internal_without_id"
                  ] ??= []);
                  for (const t of i) {
                    (a.includes(t) || a.push(t), (e.keys[t] = n.keys[t]));
                  }
                }
            })
            .addMatcher(qr($r(n), Kr(n)), (e, t) => {
              v(e, [t]);
            })
            .addMatcher(p.actions.cacheEntriesUpserted.match, (e, t) => {
              v(
                e,
                t.payload.map((e) => {
                  let { queryDescription: t, value: n } = e;
                  return {
                    type: "UNKNOWN",
                    payload: n,
                    meta: {
                      requestStatus: "fulfilled",
                      requestId: "UNKNOWN",
                      arg: t,
                    },
                  };
                }),
              );
            });
        },
      });
    function y(e, t) {
      const n = Xh(e.keys[t] ?? []);
      for (const r of n) {
        const n = r.type,
          a = r.id ?? "__internal_without_id",
          i = e.tags[n]?.[a];
        i && (e.tags[n][a] = Xh(i).filter((e) => e !== t));
      }
      delete e.keys[t];
    }
    function v(e, t) {
      const n = t.map((e) => {
        const t = Yh(e, "providesTags", i, u),
          { queryCacheKey: n } = e.meta.arg;
        return { queryCacheKey: n, providedTags: t };
      });
      g.caseReducers.updateProvidedBy(e, g.actions.updateProvidedBy(n));
    }
    const b = ua({
        name: `${t}/subscriptions`,
        initialState: tp,
        reducers: {
          updateSubscriptionOptions(e, t) {},
          unsubscribeQueryResult(e, t) {},
          internal_getRTKQSubscriptions() {},
        },
      }),
      w = ua({
        name: `${t}/internalSubscriptions`,
        initialState: tp,
        reducers: {
          subscriptionsUpdated: {
            reducer: (e, t) => yr(e, t.payload),
            prepare: Mr(),
          },
        },
      }),
      S = ua({
        name: `${t}/config`,
        initialState: {
          online:
            "undefined" === typeof navigator ||
            void 0 === navigator.onLine ||
            navigator.onLine,
          focused:
            "undefined" === typeof document ||
            "hidden" !== document.visibilityState,
          middlewareRegistered: !1,
          ...c,
        },
        reducers: {
          middlewareRegistered(e, t) {
            let { payload: n } = t;
            e.middlewareRegistered =
              ("conflict" !== e.middlewareRegistered && o === n) || "conflict";
          },
        },
        extraReducers: (e) => {
          e.addCase(Th, (e) => {
            e.online = !0;
          })
            .addCase(Ph, (e) => {
              e.online = !1;
            })
            .addCase(Rh, (e) => {
              e.focused = !0;
            })
            .addCase(Ih, (e) => {
              e.focused = !1;
            })
            .addMatcher(l, (e) => ({ ...e }));
        },
      }),
      k = _r({
        queries: p.reducer,
        mutations: m.reducer,
        provided: g.reducer,
        subscriptions: w.reducer,
        config: S.reducer,
      });
    return {
      reducer: (e, t) => k(d.match(t) ? void 0 : e, t),
      actions: {
        ...S.actions,
        ...p.actions,
        ...b.actions,
        ...w.actions,
        ...m.actions,
        ...g.actions,
        resetApiState: d,
      },
    };
  }
  var rp = Symbol.for("RTKQ/skipToken"),
    ap = { status: ah },
    ip = mr(ap, () => {}),
    op = mr(ap, () => {});
  var sp = WeakMap ? new WeakMap() : void 0,
    lp = (e) => {
      let { endpointName: t, queryArgs: n } = e,
        r = "";
      const a = sp?.get(n);
      if ("string" === typeof a) r = a;
      else {
        const e = JSON.stringify(
          n,
          (e, t) =>
            (t = kr((t = "bigint" === typeof t ? { $bigint: t.toString() } : t))
              ? Object.keys(t)
                  .sort()
                  .reduce((e, n) => ((e[n] = t[n]), e), {})
              : t),
        );
        (kr(n) && sp?.set(n, e), (r = e));
      }
      return `${t}(${r})`;
    };
  function up() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (e) {
      const n = Gf((t) =>
          e.extractRehydrationInfo?.(t, {
            reducerPath: e.reducerPath ?? "api",
          }),
        ),
        r = {
          reducerPath: "api",
          keepUnusedDataFor: 60,
          refetchOnMountOrArgChange: !1,
          refetchOnFocus: !1,
          refetchOnReconnect: !1,
          invalidationBehavior: "delayed",
          ...e,
          extractRehydrationInfo: n,
          serializeQueryArgs(t) {
            let n = lp;
            if ("serializeQueryArgs" in t.endpointDefinition) {
              const e = t.endpointDefinition.serializeQueryArgs;
              n = (t) => {
                const n = e(t);
                return "string" === typeof n ? n : lp({ ...t, queryArgs: n });
              };
            } else e.serializeQueryArgs && (n = e.serializeQueryArgs);
            return n(t);
          },
          tagTypes: [...(e.tagTypes || [])],
        },
        a = {
          endpointDefinitions: {},
          batch(e) {
            e();
          },
          apiUid: Xr(),
          extractRehydrationInfo: n,
          hasRehydrationInfo: Gf((e) => null != n(e)),
        },
        i = {
          injectEndpoints: function (e) {
            const t = e.endpoints({
              query: (e) => ({ ...e, type: Nh }),
              mutation: (e) => ({ ...e, type: Oh }),
              infiniteQuery: (e) => ({ ...e, type: Lh }),
            });
            for (const [n, r] of Object.entries(t))
              if (!0 !== e.overrideExisting && n in a.endpointDefinitions) {
                if ("throw" === e.overrideExisting) throw new Error(fa(39));
              } else {
                (0, (a.endpointDefinitions[n] = r));
                for (const e of o) e.injectEndpoint(n, r);
              }
            return i;
          },
          enhanceEndpoints(e) {
            let { addTagTypes: t, endpoints: n } = e;
            if (t)
              for (const a of t) r.tagTypes.includes(a) || r.tagTypes.push(a);
            if (n)
              for (const [r, i] of Object.entries(n))
                "function" === typeof i
                  ? i(zh(a, r))
                  : Object.assign(zh(a, r) || {}, i);
            return i;
          },
        },
        o = t.map((e) => e.init(i, r, a));
      return i.injectEndpoints({ endpoints: e.endpoints });
    };
  }
  function cp(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return Object.assign(e, ...n);
  }
  var dp = (e) => {
      let { api: t, queryThunk: n, internalState: r, mwApi: a } = e;
      const i = `${t.reducerPath}/subscriptions`;
      let o = null,
        s = null;
      const { updateSubscriptionOptions: l, unsubscribeQueryResult: u } =
          t.internalActions,
        c = () => r.currentSubscriptions,
        d = {
          getSubscriptions: c,
          getSubscriptionCount: (e) => {
            const t = c().get(e);
            return t?.size ?? 0;
          },
          isRequestSubscribed: (e, t) => {
            const n = c();
            return !!n?.get(e)?.get(t);
          },
        };
      function f(e) {
        return JSON.parse(
          JSON.stringify(
            Object.fromEntries(
              [...e].map((e) => {
                let [t, n] = e;
                return [t, Object.fromEntries(n)];
              }),
            ),
          ),
        );
      }
      return (e, a) => {
        if (
          (o || (o = f(r.currentSubscriptions)), t.util.resetApiState.match(e))
        )
          return (
            (o = {}),
            r.currentSubscriptions.clear(),
            (s = null),
            [!0, !1]
          );
        if (t.internalActions.internal_getRTKQSubscriptions.match(e))
          return [!1, d];
        const c = ((e, r) => {
          if (l.match(r)) {
            const { queryCacheKey: t, requestId: n, options: a } = r.payload,
              i = e.get(t);
            return (i?.has(n) && i.set(n, a), !0);
          }
          if (u.match(r)) {
            const { queryCacheKey: t, requestId: n } = r.payload,
              a = e.get(t);
            return (a && a.delete(n), !0);
          }
          if (t.internalActions.removeQueryResult.match(r))
            return (e.delete(r.payload.queryCacheKey), !0);
          if (n.pending.match(r)) {
            const {
                meta: { arg: t, requestId: n },
              } = r,
              a = mh(e, t.queryCacheKey, gh);
            return (
              t.subscribe && a.set(n, t.subscriptionOptions ?? a.get(n) ?? {}),
              !0
            );
          }
          let a = !1;
          if (n.rejected.match(r)) {
            const {
              meta: { condition: t, arg: n, requestId: i },
            } = r;
            if (t && n.subscribe) {
              const t = mh(e, n.queryCacheKey, gh);
              (t.set(i, n.subscriptionOptions ?? t.get(i) ?? {}), (a = !0));
            }
          }
          return a;
        })(r.currentSubscriptions, e);
        let h = !0;
        if (c) {
          s ||
            (s = setTimeout(() => {
              const e = f(r.currentSubscriptions),
                [, n] = gr(o, () => e);
              (a.next(t.internalActions.subscriptionsUpdated(n)),
                (o = e),
                (s = null));
            }, 500));
          const l = "string" == typeof e.type && !!e.type.startsWith(i),
            u =
              n.rejected.match(e) && e.meta.condition && !!e.meta.arg.subscribe;
          h = !l && !u;
        }
        return [h, !1];
      };
    },
    fp = (e) => {
      let {
        reducerPath: t,
        api: n,
        queryThunk: r,
        context: a,
        internalState: i,
        selectors: { selectQueryEntry: o, selectConfig: s },
        getRunningQueryThunk: l,
        mwApi: u,
      } = e;
      const {
          removeQueryResult: c,
          unsubscribeQueryResult: d,
          cacheEntriesUpserted: f,
        } = n.internalActions,
        h = qr(d.match, r.fulfilled, r.rejected, f.match);
      function p(e) {
        const t = i.currentSubscriptions.get(e);
        if (!t) return !1;
        return t.size > 0;
      }
      const m = {};
      function g(e) {
        for (const t of e.values()) t?.abort?.();
      }
      function y(e, t, n) {
        const r = t.getState();
        for (const a of e) {
          const e = o(r, a);
          e?.endpointName && v(a, e.endpointName, t, n);
        }
      }
      function v(e, t, n, r) {
        const i = zh(a, t),
          s = i?.keepUnusedDataFor ?? r.keepUnusedDataFor;
        if (s === 1 / 0) return;
        const u = Math.max(0, Math.min(s, 2147482.647));
        if (!p(e)) {
          const t = m[e];
          (t && clearTimeout(t),
            (m[e] = setTimeout(() => {
              if (!p(e)) {
                const t = o(n.getState(), e);
                if (t?.endpointName) {
                  const e = n.dispatch(l(t.endpointName, t.originalArgs));
                  e?.abort();
                }
                n.dispatch(c({ queryCacheKey: e }));
              }
              delete m[e];
            }, 1e3 * u)));
        }
      }
      return (e, t) => {
        const r = t.getState(),
          o = s(r);
        if (h(e)) {
          let n;
          if (f.match(e))
            n = e.payload.map((e) => e.queryDescription.queryCacheKey);
          else {
            const { queryCacheKey: t } = d.match(e) ? e.payload : e.meta.arg;
            n = [t];
          }
          y(n, t, o);
        }
        if (n.util.resetApiState.match(e)) {
          for (const [e, t] of Object.entries(m))
            (t && clearTimeout(t), delete m[e]);
          (g(i.runningQueries), g(i.runningMutations));
        }
        if (a.hasRehydrationInfo(e)) {
          const { queries: n } = a.extractRehydrationInfo(e);
          y(Object.keys(n), t, o);
        }
      };
    },
    hp = new Error("Promise never resolved before cacheEntryRemoved."),
    pp = (e) => {
      let {
        api: t,
        reducerPath: n,
        context: r,
        queryThunk: a,
        mutationThunk: i,
        internalState: o,
        selectors: { selectQueryEntry: s, selectApiState: l },
      } = e;
      const u = Yr(a),
        c = Yr(i),
        d = $r(a, i),
        f = {},
        {
          removeQueryResult: h,
          removeMutationResult: p,
          cacheEntriesUpserted: m,
        } = t.internalActions;
      function g(e, t, n) {
        const r = f[e];
        r?.valueResolved &&
          (r.valueResolved({ data: t, meta: n }), delete r.valueResolved);
      }
      function y(e) {
        const t = f[e];
        t && (delete f[e], t.cacheEntryRemoved());
      }
      function v(e) {
        const { arg: t, requestId: n } = e.meta,
          { endpointName: r, originalArgs: a } = t;
        return [r, a, n];
      }
      function b(e, n, a, i, o) {
        const s = zh(r, e),
          l = s?.onCacheEntryAdded;
        if (!l) return;
        const u = {},
          c = new Promise((e) => {
            u.cacheEntryRemoved = e;
          }),
          d = Promise.race([
            new Promise((e) => {
              u.valueResolved = e;
            }),
            c.then(() => {
              throw hp;
            }),
          ]);
        (d.catch(() => {}), (f[a] = u));
        const h = t.endpoints[e].select(Mh(s) ? n : a),
          p = i.dispatch((e, t, n) => n),
          m = {
            ...i,
            getCacheEntry: () => h(i.getState()),
            requestId: o,
            extra: p,
            updateCachedData: Mh(s)
              ? (r) => i.dispatch(t.util.updateQueryData(e, n, r))
              : void 0,
            cacheDataLoaded: d,
            cacheEntryRemoved: c,
          },
          g = l(n, m);
        Promise.resolve(g).catch((e) => {
          if (e !== hp) throw e;
        });
      }
      return (e, r, o) => {
        const l = (function (e) {
          if (u(e)) return e.meta.arg.queryCacheKey;
          if (c(e)) return e.meta.arg.fixedCacheKey ?? e.meta.requestId;
          return h.match(e)
            ? e.payload.queryCacheKey
            : p.match(e)
              ? Zh(e.payload)
              : "";
        })(e);
        function w(e, t, n, a) {
          const i = s(o, t),
            l = s(r.getState(), t);
          !i && l && b(e, a, t, r, n);
        }
        if (a.pending.match(e)) {
          const [t, n, r] = v(e);
          w(t, l, r, n);
        } else if (m.match(e))
          for (const { queryDescription: t, value: n } of e.payload) {
            const { endpointName: r, originalArgs: a, queryCacheKey: i } = t;
            (w(r, i, e.meta.requestId, a), g(i, n, {}));
          }
        else if (i.pending.match(e)) {
          if (r.getState()[n].mutations[l]) {
            const [t, n, a] = v(e);
            b(t, n, l, r, a);
          }
        } else if (d(e)) g(l, e.payload, e.meta.baseQueryMeta);
        else if (h.match(e) || p.match(e)) y(l);
        else if (t.util.resetApiState.match(e))
          for (const t of Object.keys(f)) y(t);
      };
    },
    mp = (e) => {
      let {
        api: t,
        context: { apiUid: n },
        reducerPath: r,
      } = e;
      return (e, r) => {
        t.util.resetApiState.match(e) &&
          r.dispatch(t.internalActions.middlewareRegistered(n));
      };
    },
    gp = (e) => {
      let {
        reducerPath: t,
        context: n,
        context: { endpointDefinitions: r },
        mutationThunk: a,
        queryThunk: i,
        api: o,
        assertTagType: s,
        refetchQuery: l,
        internalState: u,
      } = e;
      const { removeQueryResult: c } = o.internalActions,
        d = qr($r(a), Kr(a)),
        f = qr($r(i, a), Wr(i, a));
      let h = [],
        p = 0;
      function m(e, r) {
        const a = r.getState(),
          i = a[t];
        if (
          (h.push(...e), "delayed" === i.config.invalidationBehavior && p > 0)
        )
          return;
        const s = h;
        if (((h = []), 0 === s.length)) return;
        const d = o.util.selectInvalidatedBy(a, s);
        n.batch(() => {
          const e = Array.from(d.values());
          for (const { queryCacheKey: t } of e) {
            const e = i.queries[t],
              n = mh(u.currentSubscriptions, t, gh);
            e &&
              (0 === n.size
                ? r.dispatch(c({ queryCacheKey: t }))
                : e.status !== ah && r.dispatch(l(e)));
          }
        });
      }
      return (e, t) => {
        ((i.pending.match(e) || a.pending.match(e)) && p++,
          f(e) && (p = Math.max(0, p - 1)),
          d(e)
            ? m(Yh(e, "invalidatesTags", r, s), t)
            : f(e)
              ? m([], t)
              : o.util.invalidateTags.match(e) &&
                m(Uh(e.payload, void 0, void 0, void 0, void 0, s), t));
      };
    },
    yp = (e) => {
      let {
        reducerPath: t,
        queryThunk: n,
        api: r,
        refetchQuery: a,
        internalState: i,
      } = e;
      const { currentPolls: o, currentSubscriptions: s } = i,
        l = new Set();
      let u = null;
      function c(e, t) {
        (l.add(e),
          u ||
            (u = setTimeout(() => {
              for (const e of l) f({ queryCacheKey: e }, t);
              (l.clear(), (u = null));
            }, 0)));
      }
      function d(e, n) {
        let { queryCacheKey: r } = e;
        const i = n.getState()[t],
          l = i.queries[r],
          u = s.get(r);
        if (!l || l.status === ah) return;
        const { lowestPollingInterval: c, skipPollingIfUnfocused: f } = p(u);
        if (!Number.isFinite(c)) return;
        const h = o.get(r);
        h?.timeout && (clearTimeout(h.timeout), (h.timeout = void 0));
        const m = Date.now() + c;
        o.set(r, {
          nextPollTimestamp: m,
          pollingInterval: c,
          timeout: setTimeout(() => {
            ((!i.config.focused && f) || n.dispatch(a(l)),
              d({ queryCacheKey: r }, n));
          }, c),
        });
      }
      function f(e, n) {
        let { queryCacheKey: r } = e;
        const a = n.getState()[t].queries[r],
          i = s.get(r);
        if (!a || a.status === ah) return;
        const { lowestPollingInterval: l } = p(i);
        if (!Number.isFinite(l)) return void h(r);
        const u = o.get(r),
          c = Date.now() + l;
        (!u || c < u.nextPollTimestamp) && d({ queryCacheKey: r }, n);
      }
      function h(e) {
        const t = o.get(e);
        (t?.timeout && clearTimeout(t.timeout), o.delete(e));
      }
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Map(),
          t = !1,
          n = Number.POSITIVE_INFINITY;
        for (const r of e.values())
          r.pollingInterval &&
            ((n = Math.min(r.pollingInterval, n)),
            (t = r.skipPollingIfUnfocused || t));
        return { lowestPollingInterval: n, skipPollingIfUnfocused: t };
      }
      return (e, t) => {
        ((r.internalActions.updateSubscriptionOptions.match(e) ||
          r.internalActions.unsubscribeQueryResult.match(e)) &&
          c(e.payload.queryCacheKey, t),
          (n.pending.match(e) || (n.rejected.match(e) && e.meta.condition)) &&
            c(e.meta.arg.queryCacheKey, t),
          (n.fulfilled.match(e) ||
            (n.rejected.match(e) && !e.meta.condition)) &&
            d(e.meta.arg, t),
          r.util.resetApiState.match(e) &&
            (!(function () {
              for (const e of o.keys()) h(e);
            })(),
            u && (clearTimeout(u), (u = null)),
            l.clear()));
      };
    },
    vp = (e) => {
      let { api: t, context: n, queryThunk: r, mutationThunk: a } = e;
      const i = Qr(r, a),
        o = Wr(r, a),
        s = $r(r, a),
        l = {};
      return (e, r) => {
        if (i(e)) {
          const {
              requestId: a,
              arg: { endpointName: i, originalArgs: o },
            } = e.meta,
            s = zh(n, i),
            u = s?.onQueryStarted;
          if (u) {
            const e = {},
              n = new Promise((t, n) => {
                ((e.resolve = t), (e.reject = n));
              });
            (n.catch(() => {}), (l[a] = e));
            const c = t.endpoints[i].select(Mh(s) ? o : a),
              d = r.dispatch((e, t, n) => n),
              f = {
                ...r,
                getCacheEntry: () => c(r.getState()),
                requestId: a,
                extra: d,
                updateCachedData: Mh(s)
                  ? (e) => r.dispatch(t.util.updateQueryData(i, o, e))
                  : void 0,
                queryFulfilled: n,
              };
            u(o, f);
          }
        } else if (s(e)) {
          const { requestId: t, baseQueryMeta: n } = e.meta;
          (l[t]?.resolve({ data: e.payload, meta: n }), delete l[t]);
        } else if (o(e)) {
          const {
            requestId: t,
            rejectedWithValue: n,
            baseQueryMeta: r,
          } = e.meta;
          (l[t]?.reject({
            error: e.payload ?? e.error,
            isUnhandledError: !n,
            meta: r,
          }),
            delete l[t]);
        }
      };
    };
  function bp(e) {
    const {
        reducerPath: t,
        queryThunk: n,
        api: r,
        context: a,
        getInternalState: i,
      } = e,
      { apiUid: o } = a,
      s = { invalidateTags: Nr(`${t}/invalidateTags`) },
      l = (e) => e.type.startsWith(`${t}/`),
      u = [mp, fp, gp, yp, pp, vp];
    return {
      middleware: (n) => {
        let s = !1;
        const d = i(n.dispatch),
          f = {
            ...e,
            internalState: d,
            refetchQuery: c,
            isThisApiSliceAction: l,
            mwApi: n,
          },
          h = u.map((e) => e(f)),
          p = dp(f),
          m = ((e) => {
            let {
              reducerPath: t,
              context: n,
              api: r,
              refetchQuery: a,
              internalState: i,
            } = e;
            const { removeQueryResult: o } = r.internalActions;
            function s(e, r) {
              const s = e.getState()[t],
                l = s.queries,
                u = i.currentSubscriptions;
              n.batch(() => {
                for (const t of u.keys()) {
                  const n = l[t],
                    i = u.get(t);
                  if (!i || !n) continue;
                  const c = [...i.values()];
                  (c.some((e) => !0 === e[r]) ||
                    (c.every((e) => void 0 === e[r]) && s.config[r])) &&
                    (0 === i.size
                      ? e.dispatch(o({ queryCacheKey: t }))
                      : n.status !== ah && e.dispatch(a(n)));
                }
              });
            }
            return (e, t) => {
              (Rh.match(e) && s(t, "refetchOnFocus"),
                Th.match(e) && s(t, "refetchOnReconnect"));
            };
          })(f);
        return (e) => (i) => {
          if (!Ar(i)) return e(i);
          s ||
            ((s = !0), n.dispatch(r.internalActions.middlewareRegistered(o)));
          const u = { ...n, next: e },
            c = n.getState(),
            [d, f] = p(i, u, c);
          let g;
          if (
            ((g = d ? e(i) : f),
            n.getState()[t] && (m(i, u, c), l(i) || a.hasRehydrationInfo(i)))
          )
            for (const e of h) e(i, u, c);
          return g;
        };
      },
      actions: s,
    };
    function c(t) {
      return e.api.endpoints[t.endpointName].initiate(t.originalArgs, {
        subscribe: !1,
        forceRefetch: !0,
      });
    }
  }
  var wp = Symbol(),
    Sp = function () {
      let { createSelector: e = eh } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return {
        name: wp,
        init(t, n, r) {
          let {
            baseQuery: a,
            tagTypes: i,
            reducerPath: o,
            serializeQueryArgs: s,
            keepUnusedDataFor: l,
            refetchOnMountOrArgChange: u,
            refetchOnFocus: c,
            refetchOnReconnect: d,
            invalidationBehavior: f,
            onSchemaFailure: h,
            catchSchemaFailure: p,
            skipSchemaValidation: m,
          } = n;
          hr();
          const g = (e) => e;
          Object.assign(t, {
            reducerPath: o,
            endpoints: {},
            internalActions: {
              onOnline: Th,
              onOffline: Ph,
              onFocus: Rh,
              onFocusLost: Ih,
            },
            util: {},
          });
          const y = (function (e) {
              let {
                serializeQueryArgs: t,
                reducerPath: n,
                createSelector: r,
              } = e;
              const a = (e) => ip,
                i = (e) => op;
              return {
                buildQuerySelector: function (e, t) {
                  return c(e, t, o);
                },
                buildInfiniteQuerySelector: function (e, t) {
                  const { infiniteQueryOptions: n } = t;
                  return c(e, t, function (e) {
                    const t = { ...e, ...lh(e.status) },
                      { isLoading: r, isError: a, direction: i } = t,
                      o = "forward" === i,
                      s = "backward" === i;
                    return {
                      ...t,
                      hasNextPage: d(n, t.data, t.originalArgs),
                      hasPreviousPage: f(n, t.data, t.originalArgs),
                      isFetchingNextPage: r && o,
                      isFetchingPreviousPage: r && s,
                      isFetchNextPageError: a && o,
                      isFetchPreviousPageError: a && s,
                    };
                  });
                },
                buildMutationSelector: function () {
                  return (e) => {
                    let t;
                    return (
                      (t = "object" === typeof e ? (Zh(e) ?? rp) : e),
                      r(t === rp ? i : (e) => s(e)?.mutations?.[t] ?? op, o)
                    );
                  };
                },
                selectInvalidatedBy: function (e, t) {
                  const r = e[n],
                    a = new Set(),
                    i = dh(t, fh, Fh);
                  for (const n of i) {
                    const e = r.provided.tags[n.type];
                    if (!e) continue;
                    let t =
                      (void 0 !== n.id ? e[n.id] : Object.values(e).flat()) ??
                      [];
                    for (const n of t) a.add(n);
                  }
                  return Array.from(a.values()).flatMap((e) => {
                    const t = r.queries[e];
                    return t
                      ? {
                          queryCacheKey: e,
                          endpointName: t.endpointName,
                          originalArgs: t.originalArgs,
                        }
                      : [];
                  });
                },
                selectCachedArgsForQuery: function (e, t) {
                  return dh(
                    Object.values(l(e)),
                    (e) => e?.endpointName === t && e.status !== ah,
                    (e) => e.originalArgs,
                  );
                },
                selectApiState: s,
                selectQueries: l,
                selectMutations: function (e) {
                  return s(e)?.mutations;
                },
                selectQueryEntry: u,
                selectConfig: function (e) {
                  return s(e)?.config;
                },
              };
              function o(e) {
                return { ...e, ...lh(e.status) };
              }
              function s(e) {
                return e[n];
              }
              function l(e) {
                return s(e)?.queries;
              }
              function u(e, t) {
                return l(e)?.[t];
              }
              function c(e, n, i) {
                return (o) => {
                  if (o === rp) return r(a, i);
                  const s = t({
                    queryArgs: o,
                    endpointDefinition: n,
                    endpointName: e,
                  });
                  return r((e) => u(e, s) ?? ip, i);
                };
              }
              function d(e, t, n) {
                return !!t && null != Kh(e, t, n);
              }
              function f(e, t, n) {
                return !(!t || !e.getPreviousPageParam) && null != $h(e, t, n);
              }
            })({ serializeQueryArgs: s, reducerPath: o, createSelector: e }),
            {
              selectInvalidatedBy: v,
              selectCachedArgsForQuery: b,
              buildQuerySelector: w,
              buildInfiniteQuerySelector: S,
              buildMutationSelector: k,
            } = y;
          cp(t.util, { selectInvalidatedBy: v, selectCachedArgsForQuery: b });
          const {
              queryThunk: E,
              infiniteQueryThunk: _,
              mutationThunk: C,
              patchQueryData: A,
              updateQueryData: x,
              upsertQueryData: R,
              prefetch: I,
              buildMatchThunkActions: T,
            } = (function (e) {
              let {
                reducerPath: t,
                baseQuery: n,
                context: { endpointDefinitions: r },
                serializeQueryArgs: a,
                api: i,
                assertTagType: o,
                selectors: s,
                onSchemaFailure: l,
                catchSchemaFailure: u,
                skipSchemaValidation: c,
              } = e;
              function d(e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                const r = [t, ...e];
                return n && r.length > n ? r.slice(0, -1) : r;
              }
              function f(e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                const r = [...e, t];
                return n && r.length > n ? r.slice(1) : r;
              }
              const h = (e, t) => (e.query && e[t] ? e[t] : Qh),
                p = async (e, t) => {
                  let {
                    signal: a,
                    abort: i,
                    rejectWithValue: o,
                    fulfillWithValue: p,
                    dispatch: g,
                    getState: y,
                    extra: v,
                  } = t;
                  const b = r[e.endpointName],
                    { metaSchema: w, skipSchemaValidation: S = c } = b,
                    k = e.type === Nh;
                  try {
                    let _ = Qh;
                    const C = {
                        signal: a,
                        abort: i,
                        dispatch: g,
                        getState: y,
                        extra: v,
                        endpoint: e.endpointName,
                        type: e.type,
                        forced: k ? m(e, y()) : void 0,
                        queryCacheKey: k ? e.queryCacheKey : void 0,
                      },
                      A = k ? e[Bh] : void 0;
                    let x;
                    const R = async (t, n, r, a) => {
                      if (null == n && t.pages.length)
                        return Promise.resolve({ data: t });
                      const i = { queryArg: e.originalArgs, pageParam: n },
                        o = await I(i),
                        s = a ? d : f;
                      return {
                        data: {
                          pages: s(t.pages, o.data, r),
                          pageParams: s(t.pageParams, n, r),
                        },
                        meta: o.meta,
                      };
                    };
                    async function I(e) {
                      let t;
                      const {
                        extraOptions: r,
                        argSchema: a,
                        rawResponseSchema: i,
                        responseSchema: o,
                      } = b;
                      if (
                        (a &&
                          !Hh(S, "arg") &&
                          (e = await Jh(a, e, "argSchema", {})),
                        A
                          ? (t = A())
                          : b.query
                            ? ((_ = h(b, "transformResponse")),
                              (t = await n(b.query(e), C, r)))
                            : (t = await b.queryFn(e, C, r, (e) => n(e, C, r))),
                        t.error)
                      )
                        throw new Eh(t.error, t.meta);
                      let { data: s } = t;
                      i &&
                        !Hh(S, "rawResponse") &&
                        (s = await Jh(i, t.data, "rawResponseSchema", t.meta));
                      let l = await _(s, t.meta, e);
                      return (
                        o &&
                          !Hh(S, "response") &&
                          (l = await Jh(o, l, "responseSchema", t.meta)),
                        { ...t, data: l }
                      );
                    }
                    if (k && "infiniteQueryOptions" in b) {
                      const { infiniteQueryOptions: T } = b,
                        { maxPages: P = 1 / 0 } = T,
                        N = e.refetchCachedPages ?? T.refetchCachedPages ?? !0;
                      let O;
                      const L = { pages: [], pageParams: [] },
                        j = s.selectQueryEntry(y(), e.queryCacheKey)?.data,
                        D = (m(e, y()) && !e.direction) || !j ? L : j;
                      if ("direction" in e && e.direction && D.pages.length) {
                        const M = "backward" === e.direction,
                          U = (M ? $h : Kh)(T, D, e.originalArgs);
                        O = await R(D, U, P, M);
                      } else {
                        const { initialPageParam: F = T.initialPageParam } = e,
                          z = j?.pageParams ?? [],
                          B = z[0] ?? F,
                          q = z.length;
                        if (
                          ((O = await R(D, B, P)),
                          A && (O = { data: O.data.pages[0] }),
                          N)
                        )
                          for (let V = 1; V < q; V++) {
                            const H = Kh(T, O.data, e.originalArgs);
                            O = await R(O.data, H, P);
                          }
                      }
                      x = O;
                    } else x = await I(e.originalArgs);
                    return (
                      w &&
                        !Hh(S, "meta") &&
                        x.meta &&
                        (x.meta = await Jh(w, x.meta, "metaSchema", x.meta)),
                      p(
                        x.data,
                        Wh({
                          fulfilledTimeStamp: Date.now(),
                          baseQueryMeta: x.meta,
                        }),
                      )
                    );
                  } catch (E) {
                    let J = E;
                    if (J instanceof Eh) {
                      let Q = h(b, "transformErrorResponse");
                      const {
                        rawErrorResponseSchema: W,
                        errorResponseSchema: K,
                      } = b;
                      let { value: $, meta: Y } = J;
                      try {
                        (W &&
                          !Hh(S, "rawErrorResponse") &&
                          ($ = await Jh(W, $, "rawErrorResponseSchema", Y)),
                          w &&
                            !Hh(S, "meta") &&
                            (Y = await Jh(w, Y, "metaSchema", Y)));
                        let X = await Q($, Y, e.originalArgs);
                        return (
                          K &&
                            !Hh(S, "errorResponse") &&
                            (X = await Jh(K, X, "errorResponseSchema", Y)),
                          o(X, Wh({ baseQueryMeta: Y }))
                        );
                      } catch (im) {
                        J = im;
                      }
                    }
                    try {
                      if (J instanceof Vh) {
                        const Z = {
                          endpoint: e.endpointName,
                          arg: e.originalArgs,
                          type: e.type,
                          queryCacheKey: k ? e.queryCacheKey : void 0,
                        };
                        (b.onSchemaFailure?.(J, Z), l?.(J, Z));
                        const { catchSchemaFailure: ee = u } = b;
                        if (ee)
                          return o(ee(J, Z), Wh({ baseQueryMeta: J._bqMeta }));
                      }
                    } catch (im) {
                      J = im;
                    }
                    throw (console.error(J), J);
                  }
                };
              function m(e, t) {
                const n = s.selectQueryEntry(t, e.queryCacheKey),
                  r = s.selectConfig(t).refetchOnMountOrArgChange,
                  a = n?.fulfilledTimeStamp,
                  i = e.forceRefetch ?? (e.subscribe && r);
                return (
                  !!i &&
                  (!0 === i || (Number(new Date()) - Number(a)) / 1e3 >= i)
                );
              }
              const g = () =>
                  ra(`${t}/executeQuery`, p, {
                    getPendingMeta(e) {
                      let { arg: t } = e;
                      const n = r[t.endpointName];
                      return Wh({
                        startedTimeStamp: Date.now(),
                        ...(Dh(n) ? { direction: t.direction } : {}),
                      });
                    },
                    condition(e, t) {
                      let { getState: n } = t;
                      const a = n(),
                        i = s.selectQueryEntry(a, e.queryCacheKey),
                        o = i?.fulfilledTimeStamp,
                        l = e.originalArgs,
                        u = i?.originalArgs,
                        c = r[e.endpointName],
                        d = e.direction;
                      return (
                        !!qh(e) ||
                        ("pending" !== i?.status &&
                          (!!m(e, a) ||
                            !(
                              !jh(c) ||
                              !c?.forceRefetch?.({
                                currentArg: l,
                                previousArg: u,
                                endpointState: i,
                                state: a,
                              })
                            ) ||
                            !(o && !d)))
                      );
                    },
                    dispatchConditionRejection: !0,
                  }),
                y = g(),
                v = g(),
                b = ra(`${t}/executeMutation`, p, {
                  getPendingMeta: () => Wh({ startedTimeStamp: Date.now() }),
                });
              function w(e) {
                return (t) => t?.meta?.arg?.endpointName === e;
              }
              return {
                queryThunk: y,
                mutationThunk: b,
                infiniteQueryThunk: v,
                prefetch: function (e, t) {
                  let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return (r, a) => {
                    const o = ((e) => "force" in e)(n) && n.force,
                      s = ((e) => "ifOlderThan" in e)(n) && n.ifOlderThan,
                      l = function () {
                        const n = {
                          forceRefetch:
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0],
                          subscribe: !1,
                        };
                        return i.endpoints[e].initiate(t, n);
                      },
                      u = i.endpoints[e].select(t)(a());
                    if (o) r(l());
                    else if (s) {
                      const e = u?.fulfilledTimeStamp;
                      if (!e) return void r(l());
                      (Number(new Date()) - Number(new Date(e))) / 1e3 >= s &&
                        r(l());
                    } else r(l(!1));
                  };
                },
                updateQueryData: function (e, t, n) {
                  let r =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3];
                  return (a, o) => {
                    const s = i.endpoints[e].select(t)(o()),
                      l = {
                        patches: [],
                        inversePatches: [],
                        undo: () =>
                          a(i.util.patchQueryData(e, t, l.inversePatches, r)),
                      };
                    if (s.status === ah) return l;
                    let u;
                    if ("data" in s)
                      if (hn(s.data)) {
                        const [e, t, r] = gr(s.data, n);
                        (l.patches.push(...t),
                          l.inversePatches.push(...r),
                          (u = e));
                      } else
                        ((u = n(s.data)),
                          l.patches.push({ op: "replace", path: [], value: u }),
                          l.inversePatches.push({
                            op: "replace",
                            path: [],
                            value: s.data,
                          }));
                    return (
                      0 === l.patches.length ||
                        a(i.util.patchQueryData(e, t, l.patches, r)),
                      l
                    );
                  };
                },
                upsertQueryData: (e, t, n) => (r) =>
                  r(
                    i.endpoints[e].initiate(t, {
                      subscribe: !1,
                      forceRefetch: !0,
                      [Bh]: () => ({ data: n }),
                    }),
                  ),
                patchQueryData: (e, t, n, s) => (l, u) => {
                  const c = r[e],
                    d = a({
                      queryArgs: t,
                      endpointDefinition: c,
                      endpointName: e,
                    });
                  if (
                    (l(
                      i.internalActions.queryResultPatched({
                        queryCacheKey: d,
                        patches: n,
                      }),
                    ),
                    !s)
                  )
                    return;
                  const f = i.endpoints[e].select(t)(u()),
                    h = Uh(c.providesTags, f.data, void 0, t, {}, o);
                  l(
                    i.internalActions.updateProvidedBy([
                      { queryCacheKey: d, providedTags: h },
                    ]),
                  );
                },
                buildMatchThunkActions: function (e, t) {
                  return {
                    matchPending: Vr(Qr(e), w(t)),
                    matchFulfilled: Vr($r(e), w(t)),
                    matchRejected: Vr(Wr(e), w(t)),
                  };
                },
              };
            })({
              baseQuery: a,
              reducerPath: o,
              context: r,
              api: t,
              serializeQueryArgs: s,
              assertTagType: g,
              selectors: y,
              onSchemaFailure: h,
              catchSchemaFailure: p,
              skipSchemaValidation: m,
            }),
            { reducer: P, actions: N } = np({
              context: r,
              queryThunk: E,
              infiniteQueryThunk: _,
              mutationThunk: C,
              serializeQueryArgs: s,
              reducerPath: o,
              assertTagType: g,
              config: {
                refetchOnFocus: c,
                refetchOnReconnect: d,
                refetchOnMountOrArgChange: u,
                keepUnusedDataFor: l,
                reducerPath: o,
                invalidationBehavior: f,
              },
            });
          (cp(t.util, {
            patchQueryData: A,
            updateQueryData: x,
            upsertQueryData: R,
            prefetch: I,
            resetApiState: N.resetApiState,
            upsertQueryEntries: N.cacheEntriesUpserted,
          }),
            cp(t.internalActions, N));
          const O = new WeakMap(),
            L = (e) =>
              mh(O, e, () => ({
                currentSubscriptions: new Map(),
                currentPolls: new Map(),
                runningQueries: new Map(),
                runningMutations: new Map(),
              })),
            {
              buildInitiateQuery: j,
              buildInitiateInfiniteQuery: D,
              buildInitiateMutation: M,
              getRunningMutationThunk: U,
              getRunningMutationsThunk: F,
              getRunningQueriesThunk: z,
              getRunningQueryThunk: B,
            } = (function (e) {
              let {
                serializeQueryArgs: t,
                queryThunk: n,
                infiniteQueryThunk: r,
                mutationThunk: a,
                api: i,
                context: o,
                getInternalState: s,
              } = e;
              const l = (e) => s(e)?.runningQueries,
                u = (e) => s(e)?.runningMutations,
                {
                  unsubscribeQueryResult: c,
                  removeMutationResult: d,
                  updateSubscriptionOptions: f,
                } = i.internalActions;
              return {
                buildInitiateQuery: function (e, t) {
                  return p(e, t);
                },
                buildInitiateInfiniteQuery: function (e, t) {
                  return p(e, t);
                },
                buildInitiateMutation: function (e) {
                  return function (t) {
                    let { track: n = !0, fixedCacheKey: r } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return (i, o) => {
                      const s = a({
                          type: "mutation",
                          endpointName: e,
                          originalArgs: t,
                          track: n,
                          fixedCacheKey: r,
                        }),
                        l = i(s);
                      h(i);
                      const { requestId: c, abort: f, unwrap: p } = l,
                        m =
                          ((g = l.unwrap().then((e) => ({ data: e }))),
                          (y = (e) => ({ error: e })),
                          g.catch(y));
                      var g, y;
                      const v = Object.assign(m, {
                          arg: l.arg,
                          requestId: c,
                          abort: f,
                          unwrap: p,
                          reset: () => {
                            i(d({ requestId: c, fixedCacheKey: r }));
                          },
                        }),
                        b = u(i);
                      return (
                        b.set(c, v),
                        v.then(() => {
                          b.delete(c);
                        }),
                        r &&
                          (b.set(r, v),
                          v.then(() => {
                            b.get(r) === v && b.delete(r);
                          })),
                        v
                      );
                    };
                  };
                },
                getRunningQueryThunk: function (e, n) {
                  return (r) => {
                    const a = zh(o, e),
                      i = t({
                        queryArgs: n,
                        endpointDefinition: a,
                        endpointName: e,
                      });
                    return l(r)?.get(i);
                  };
                },
                getRunningMutationThunk: function (e, t) {
                  return (e) => u(e)?.get(t);
                },
                getRunningQueriesThunk: function () {
                  return (e) => hh(l(e));
                },
                getRunningMutationsThunk: function () {
                  return (e) => hh(u(e));
                },
              };
              function h(e) {}
              function p(e, a) {
                const o = function (s) {
                  let {
                    subscribe: u = !0,
                    forceRefetch: d,
                    subscriptionOptions: p,
                    [Bh]: m,
                    ...g
                  } = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                  return (y, v) => {
                    const b = t({
                      queryArgs: s,
                      endpointDefinition: a,
                      endpointName: e,
                    });
                    let w;
                    const S = {
                      ...g,
                      type: Nh,
                      subscribe: u,
                      forceRefetch: d,
                      subscriptionOptions: p,
                      endpointName: e,
                      originalArgs: s,
                      queryCacheKey: b,
                      [Bh]: m,
                    };
                    if (jh(a)) w = n(S);
                    else {
                      const {
                        direction: e,
                        initialPageParam: t,
                        refetchCachedPages: n,
                      } = g;
                      w = r({
                        ...S,
                        direction: e,
                        initialPageParam: t,
                        refetchCachedPages: n,
                      });
                    }
                    const k = i.endpoints[e].select(s),
                      E = y(w),
                      _ = k(v());
                    h();
                    const { requestId: C, abort: A } = E,
                      x = _.requestId !== C,
                      R = l(y)?.get(b),
                      I = () => k(v()),
                      T = Object.assign(
                        m
                          ? E.then(I)
                          : x && !R
                            ? Promise.resolve(_)
                            : Promise.all([R, E]).then(I),
                        {
                          arg: s,
                          requestId: C,
                          subscriptionOptions: p,
                          queryCacheKey: b,
                          abort: A,
                          async unwrap() {
                            const e = await T;
                            if (e.isError) throw e.error;
                            return e.data;
                          },
                          refetch: (e) =>
                            y(o(s, { subscribe: !1, forceRefetch: !0, ...e })),
                          unsubscribe() {
                            u && y(c({ queryCacheKey: b, requestId: C }));
                          },
                          updateSubscriptionOptions(t) {
                            ((T.subscriptionOptions = t),
                              y(
                                f({
                                  endpointName: e,
                                  requestId: C,
                                  queryCacheKey: b,
                                  options: t,
                                }),
                              ));
                          },
                        },
                      );
                    if (!R && !x && !m) {
                      const e = l(y);
                      (e.set(b, T),
                        T.then(() => {
                          e.delete(b);
                        }));
                    }
                    return T;
                  };
                };
                return o;
              }
            })({
              queryThunk: E,
              mutationThunk: C,
              infiniteQueryThunk: _,
              api: t,
              serializeQueryArgs: s,
              context: r,
              getInternalState: L,
            });
          cp(t.util, {
            getRunningMutationThunk: U,
            getRunningMutationsThunk: F,
            getRunningQueryThunk: B,
            getRunningQueriesThunk: z,
          });
          const { middleware: q, actions: V } = bp({
            reducerPath: o,
            context: r,
            queryThunk: E,
            mutationThunk: C,
            infiniteQueryThunk: _,
            api: t,
            assertTagType: g,
            selectors: y,
            getRunningQueryThunk: B,
            getInternalState: L,
          });
          return (
            cp(t.util, V),
            cp(t, { reducer: P, middleware: q }),
            {
              name: wp,
              injectEndpoint(e, n) {
                const r = t,
                  a = (r.endpoints[e] ??= {});
                (jh(n) &&
                  cp(
                    a,
                    { name: e, select: w(e, n), initiate: j(e, n) },
                    T(E, e),
                  ),
                  n.type === Oh &&
                    cp(a, { name: e, select: k(), initiate: M(e) }, T(C, e)),
                  Dh(n) &&
                    cp(
                      a,
                      { name: e, select: S(e, n), initiate: D(e, n) },
                      T(E, e),
                    ));
              },
            }
          );
        },
      };
    };
  Sp();
  function kp(e) {
    return e.replace(e[0], e[0].toUpperCase());
  }
  function Ep(e) {
    return "infinitequery" === e.type;
  }
  function _p(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return Object.assign(e, ...n);
  }
  var Cp = Symbol();
  function Ap(e) {
    const t = (0, a.useRef)(e),
      n = (0, a.useMemo)(() => ch(t.current, e), [e]);
    return (
      (0, a.useEffect)(() => {
        t.current !== n && (t.current = n);
      }, [n]),
      n
    );
  }
  function xp(e) {
    const t = (0, a.useRef)(e);
    return (
      (0, a.useEffect)(() => {
        jt(t.current, e) || (t.current = e);
      }, [e]),
      jt(t.current, e) ? t.current : e
    );
  }
  var Rp = (() =>
      !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ))(),
    Ip = (() =>
      "undefined" !== typeof navigator &&
      "ReactNative" === navigator.product)(),
    Tp = (() => (Rp || Ip ? a.useLayoutEffect : a.useEffect))(),
    Pp = (e) =>
      e.isUninitialized
        ? {
            ...e,
            isUninitialized: !1,
            isFetching: !0,
            isLoading: void 0 === e.data,
            status: rh.pending,
          }
        : e;
  function Np(e) {
    const t = {};
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      r[a - 1] = arguments[a];
    return (
      r.forEach((n) => {
        t[n] = e[n];
      }),
      t
    );
  }
  var Op = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
  function Lp(e) {
    let {
      api: t,
      moduleOptions: {
        batch: n,
        hooks: { useDispatch: r, useSelector: i, useStore: o },
        unstable__sideEffectsInRender: s,
        createSelector: l,
      },
      serializeQueryArgs: u,
      context: c,
    } = e;
    const d = s ? (e) => e() : a.useEffect,
      f = (e) => e.current?.unsubscribe?.(),
      h = c.endpointDefinitions;
    return {
      buildQueryHooks: function (e) {
        const i = function (t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const [r] = g(e, t, n);
            return (
              v(r),
              (0, a.useMemo)(
                () => ({
                  refetch: () =>
                    (function (e) {
                      if (!e.current) throw new Error(fa(38));
                      return e.current.refetch();
                    })(r),
                }),
                [r],
              )
            );
          },
          o = function () {
            let {
              refetchOnReconnect: i,
              refetchOnFocus: o,
              pollingInterval: s = 0,
              skipPollingIfUnfocused: l = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const { initiate: u } = t.endpoints[e],
              c = r(),
              [h, p] = (0, a.useState)(Cp),
              m = (0, a.useRef)(void 0),
              g = xp({
                refetchOnReconnect: i,
                refetchOnFocus: o,
                pollingInterval: s,
                skipPollingIfUnfocused: l,
              });
            d(() => {
              const e = m.current?.subscriptionOptions;
              g !== e && m.current?.updateSubscriptionOptions(g);
            }, [g]);
            const y = (0, a.useRef)(g);
            d(() => {
              y.current = g;
            }, [g]);
            const v = (0, a.useCallback)(
                function (e) {
                  let t,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  return (
                    n(() => {
                      (f(m),
                        (m.current = t =
                          c(
                            u(e, {
                              subscriptionOptions: y.current,
                              forceRefetch: !r,
                            }),
                          )),
                        p(e));
                    }),
                    t
                  );
                },
                [c, u],
              ),
              b = (0, a.useCallback)(() => {
                m.current?.queryCacheKey &&
                  c(
                    t.internalActions.removeQueryResult({
                      queryCacheKey: m.current?.queryCacheKey,
                    }),
                  );
              }, [c]);
            return (
              (0, a.useEffect)(
                () => () => {
                  f(m);
                },
                [],
              ),
              (0, a.useEffect)(() => {
                h === Cp || m.current || v(h, !0);
              }, [h, v]),
              (0, a.useMemo)(() => [v, h, { reset: b }], [v, h, b])
            );
          },
          s = y(e, p);
        return {
          useQueryState: s,
          useQuerySubscription: i,
          useLazyQuerySubscription: o,
          useLazyQuery(e) {
            const [t, n, { reset: r }] = o(e),
              i = s(n, { ...e, skip: n === Cp }),
              l = (0, a.useMemo)(() => ({ lastArg: n }), [n]);
            return (0, a.useMemo)(
              () => [t, { ...i, reset: r }, l],
              [t, i, r, l],
            );
          },
          useQuery(e, t) {
            const n = i(e, t),
              r = s(e, {
                selectFromResult: e === rp || t?.skip ? void 0 : Pp,
                ...t,
              }),
              o = Np(r, ...Op);
            return (
              (0, a.useDebugValue)(o),
              (0, a.useMemo)(() => ({ ...r, ...n }), [r, n])
            );
          },
        };
      },
      buildInfiniteQueryHooks: function (e) {
        const t = function (t) {
            let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const [i, o, s, l] = g(e, t, r),
              u = (0, a.useRef)(l);
            d(() => {
              u.current = l;
            }, [l]);
            const c = xp(r.refetchCachedPages),
              h = (0, a.useCallback)(
                function (e, t) {
                  let r;
                  return (
                    n(() => {
                      (f(i),
                        (i.current = r =
                          o(
                            s(e, {
                              subscriptionOptions: u.current,
                              direction: t,
                            }),
                          )));
                    }),
                    r
                  );
                },
                [i, o, s],
              );
            v(i);
            const p = Ap(r.skip ? rp : t),
              m = (0, a.useCallback)(
                (e) => {
                  if (!i.current) throw new Error(fa(38));
                  const t = { refetchCachedPages: e?.refetchCachedPages ?? c };
                  return i.current.refetch(t);
                },
                [i, c],
              );
            return (0, a.useMemo)(
              () => ({
                trigger: h,
                refetch: m,
                fetchNextPage: () => h(p, "forward"),
                fetchPreviousPage: () => h(p, "backward"),
              }),
              [m, h, p],
            );
          },
          r = y(e, m);
        return {
          useInfiniteQueryState: r,
          useInfiniteQuerySubscription: t,
          useInfiniteQuery(e, n) {
            const {
                refetch: i,
                fetchNextPage: o,
                fetchPreviousPage: s,
              } = t(e, n),
              l = r(e, {
                selectFromResult: e === rp || n?.skip ? void 0 : Pp,
                ...n,
              }),
              u = Np(l, ...Op, "hasNextPage", "hasPreviousPage");
            return (
              (0, a.useDebugValue)(u),
              (0, a.useMemo)(
                () => ({
                  ...l,
                  fetchNextPage: o,
                  fetchPreviousPage: s,
                  refetch: i,
                }),
                [l, o, s, i],
              )
            );
          },
        };
      },
      buildMutationHook: function (e) {
        return function () {
          let { selectFromResult: o, fixedCacheKey: s } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { select: u, initiate: c } = t.endpoints[e],
            d = r(),
            [f, h] = (0, a.useState)();
          (0, a.useEffect)(
            () => () => {
              f?.arg.fixedCacheKey || f?.reset();
            },
            [f],
          );
          const p = (0, a.useCallback)(
              function (e) {
                const t = d(c(e, { fixedCacheKey: s }));
                return (h(t), t);
              },
              [d, c, s],
            ),
            { requestId: m } = f || {},
            g = (0, a.useMemo)(
              () => u({ fixedCacheKey: s, requestId: f?.requestId }),
              [s, f, u],
            ),
            y = (0, a.useMemo)(() => (o ? l([g], o) : g), [o, g]),
            v = i(y, jt),
            b = null == s ? f?.arg.originalArgs : void 0,
            w = (0, a.useCallback)(() => {
              n(() => {
                (f && h(void 0),
                  s &&
                    d(
                      t.internalActions.removeMutationResult({
                        requestId: m,
                        fixedCacheKey: s,
                      }),
                    ));
              });
            }, [d, s, f, m]),
            S = Np(v, ...Op, "endpointName");
          (0, a.useDebugValue)(S);
          const k = (0, a.useMemo)(
            () => ({ ...v, originalArgs: b, reset: w }),
            [v, b, w],
          );
          return (0, a.useMemo)(() => [p, k], [p, k]);
        };
      },
      usePrefetch: function (e, n) {
        const i = r(),
          o = xp(n);
        return (0, a.useCallback)(
          (n, r) => i(t.util.prefetch(e, n, { ...o, ...r })),
          [e, i, o],
        );
      },
    };
    function p(e, t, n) {
      if (t?.endpointName && e.isUninitialized) {
        const { endpointName: e } = t,
          r = h[e];
        n !== rp &&
          u({
            queryArgs: t.originalArgs,
            endpointDefinition: r,
            endpointName: e,
          }) === u({ queryArgs: n, endpointDefinition: r, endpointName: e }) &&
          (t = void 0);
      }
      let r = e.isSuccess ? e.data : t?.data;
      void 0 === r && (r = e.data);
      const a = void 0 !== r,
        i = e.isLoading,
        o = (!t || t.isLoading || t.isUninitialized) && !a && i,
        s = e.isSuccess || (a && ((i && !t?.isError) || e.isUninitialized));
      return {
        ...e,
        data: r,
        currentData: e.data,
        isFetching: i,
        isLoading: o,
        isSuccess: s,
      };
    }
    function m(e, t, n) {
      if (t?.endpointName && e.isUninitialized) {
        const { endpointName: e } = t,
          r = h[e];
        n !== rp &&
          u({
            queryArgs: t.originalArgs,
            endpointDefinition: r,
            endpointName: e,
          }) === u({ queryArgs: n, endpointDefinition: r, endpointName: e }) &&
          (t = void 0);
      }
      let r = e.isSuccess ? e.data : t?.data;
      void 0 === r && (r = e.data);
      const a = void 0 !== r,
        i = e.isLoading,
        o = (!t || t.isLoading || t.isUninitialized) && !a && i,
        s = e.isSuccess || (i && a);
      return {
        ...e,
        data: r,
        currentData: e.data,
        isFetching: i,
        isLoading: o,
        isSuccess: s,
      };
    }
    function g(e, n) {
      let {
        refetchOnReconnect: i,
        refetchOnFocus: o,
        refetchOnMountOrArgChange: s,
        skip: l = !1,
        pollingInterval: u = 0,
        skipPollingIfUnfocused: c = !1,
        ...f
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const { initiate: p } = t.endpoints[e],
        m = r(),
        g = (0, a.useRef)(void 0);
      if (!g.current) {
        const e = m(t.internalActions.internal_getRTKQSubscriptions());
        (0, (g.current = e));
      }
      const y = Ap(l ? rp : n),
        v = xp({
          refetchOnReconnect: i,
          refetchOnFocus: o,
          pollingInterval: u,
          skipPollingIfUnfocused: c,
        }),
        b = xp(f.initialPageParam),
        w = xp(f.refetchCachedPages),
        S = (0, a.useRef)(void 0);
      let { queryCacheKey: k, requestId: E } = S.current || {},
        _ = !1;
      k && E && (_ = g.current.isRequestSubscribed(k, E));
      const C = !_ && void 0 !== S.current;
      return (
        d(() => {
          C && (S.current = void 0);
        }, [C]),
        d(() => {
          const t = S.current;
          if (y === rp) return (t?.unsubscribe(), void (S.current = void 0));
          const n = S.current?.subscriptionOptions;
          if (t && t.arg === y) v !== n && t.updateSubscriptionOptions(v);
          else {
            t?.unsubscribe();
            const n = m(
              p(y, {
                subscriptionOptions: v,
                forceRefetch: s,
                ...(Ep(h[e])
                  ? { initialPageParam: b, refetchCachedPages: w }
                  : {}),
              }),
            );
            S.current = n;
          }
        }, [m, p, s, y, v, C, b, w, e]),
        [S, m, p, v]
      );
    }
    function y(e, n) {
      return function (r) {
        let { skip: s = !1, selectFromResult: u } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { select: c } = t.endpoints[e],
          d = Ap(s ? rp : r),
          f = (0, a.useRef)(void 0),
          h = (0, a.useMemo)(
            () =>
              l([c(d), (e, t) => t, (e) => d], n, {
                memoizeOptions: { resultEqualityCheck: jt },
              }),
            [c, d],
          ),
          p = (0, a.useMemo)(
            () =>
              u
                ? l([h], u, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : h,
            [h, u],
          ),
          m = i((e) => p(e, f.current), jt),
          g = o(),
          y = h(g.getState(), f.current);
        return (
          Tp(() => {
            f.current = y;
          }, [y]),
          m
        );
      };
    }
    function v(e) {
      (0, a.useEffect)(
        () => () => {
          (f(e), (e.current = void 0));
        },
        [e],
      );
    }
  }
  var jp = Symbol();
  var Dp = up(
    Sp(),
    (function () {
      let {
        batch: e = Yt,
        hooks: t = { useDispatch: Qt, useSelector: $t, useStore: Ht },
        createSelector: n = eh,
        unstable__sideEffectsInRender: r = !1,
        ...a
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return {
        name: jp,
        init(a, i, o) {
          let { serializeQueryArgs: s } = i;
          const l = a,
            {
              buildQueryHooks: u,
              buildInfiniteQueryHooks: c,
              buildMutationHook: d,
              usePrefetch: f,
            } = Lp({
              api: a,
              moduleOptions: {
                batch: e,
                hooks: t,
                unstable__sideEffectsInRender: r,
                createSelector: n,
              },
              serializeQueryArgs: s,
              context: o,
            });
          return (
            _p(l, { usePrefetch: f }),
            _p(o, { batch: e }),
            {
              injectEndpoint(e, t) {
                if ("query" === t.type) {
                  const {
                    useQuery: t,
                    useLazyQuery: n,
                    useLazyQuerySubscription: r,
                    useQueryState: i,
                    useQuerySubscription: o,
                  } = u(e);
                  (_p(l.endpoints[e], {
                    useQuery: t,
                    useLazyQuery: n,
                    useLazyQuerySubscription: r,
                    useQueryState: i,
                    useQuerySubscription: o,
                  }),
                    (a[`use${kp(e)}Query`] = t),
                    (a[`useLazy${kp(e)}Query`] = n));
                }
                if (
                  (function (e) {
                    return "mutation" === e.type;
                  })(t)
                ) {
                  const t = d(e);
                  (_p(l.endpoints[e], { useMutation: t }),
                    (a[`use${kp(e)}Mutation`] = t));
                } else if (Ep(t)) {
                  const {
                    useInfiniteQuery: t,
                    useInfiniteQuerySubscription: n,
                    useInfiniteQueryState: r,
                  } = c(e);
                  (_p(l.endpoints[e], {
                    useInfiniteQuery: t,
                    useInfiniteQuerySubscription: n,
                    useInfiniteQueryState: r,
                  }),
                    (a[`use${kp(e)}InfiniteQuery`] = t));
                }
              },
            }
          );
        },
      };
    })(),
  );
  const Mp = (function () {
      let {
        baseUrl: e,
        prepareHeaders: t = (e) => e,
        fetchFn: n = bh,
        paramsSerializer: r,
        isJsonContentType: a = Sh,
        jsonContentType: i = "application/json",
        jsonReplacer: o,
        timeout: s,
        responseHandler: l,
        validateStatus: u,
        ...c
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        "undefined" === typeof fetch &&
          n === bh &&
          console.warn(
            "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
          ),
        async (f, h, p) => {
          const { getState: m, extra: g, endpoint: y, forced: v, type: b } = h;
          let w,
            {
              url: S,
              headers: k = new Headers(c.headers),
              params: E,
              responseHandler: _ = l ?? "json",
              validateStatus: C = u ?? wh,
              timeout: A = s,
              ...x
            } = "string" == typeof f ? { url: f } : f,
            R = { ...c, signal: A ? vh(h.signal, yh(A)) : h.signal, ...x };
          ((k = new Headers(kh(k))),
            (R.headers =
              (await t(k, {
                getState: m,
                arg: f,
                extra: g,
                endpoint: y,
                forced: v,
                type: b,
                extraOptions: p,
              })) || k));
          const I =
            "object" === typeof (T = R.body) &&
            (kr(T) || Array.isArray(T) || "function" === typeof T.toJSON);
          var T;
          if (
            (null == R.body ||
              I ||
              "string" === typeof R.body ||
              R.headers.delete("content-type"),
            !R.headers.has("content-type") &&
              I &&
              R.headers.set("content-type", i),
            I && a(R.headers) && (R.body = JSON.stringify(R.body, o)),
            R.headers.has("accept") ||
              ("json" === _
                ? R.headers.set("accept", "application/json")
                : "text" === _ &&
                  R.headers.set("accept", "text/plain, text/html, */*")),
            E)
          ) {
            const e = ~S.indexOf("?") ? "&" : "?";
            S += e + (r ? r(E) : new URLSearchParams(kh(E)));
          }
          S = ph(e, S);
          const P = new Request(S, R);
          let N;
          w = { request: new Request(S, R) };
          try {
            N = await n(P);
          } catch (im) {
            return {
              error: {
                status:
                  (im instanceof Error ||
                    ("undefined" !== typeof DOMException &&
                      im instanceof DOMException)) &&
                  "TimeoutError" === im.name
                    ? "TIMEOUT_ERROR"
                    : "FETCH_ERROR",
                error: String(im),
              },
              meta: w,
            };
          }
          const O = N.clone();
          let L;
          w.response = O;
          let j = "";
          try {
            let e;
            if (
              (await Promise.all([
                d(N, _).then(
                  (e) => (L = e),
                  (t) => (e = t),
                ),
                O.text().then(
                  (e) => (j = e),
                  () => {},
                ),
              ]),
              e)
            )
              throw e;
          } catch (im) {
            return {
              error: {
                status: "PARSING_ERROR",
                originalStatus: N.status,
                data: j,
                error: String(im),
              },
              meta: w,
            };
          }
          return C(N, L)
            ? { data: L, meta: w }
            : { error: { status: N.status, data: L }, meta: w };
        }
      );
      async function d(e, t) {
        if ("function" === typeof t) return t(e);
        if (
          ("content-type" === t && (t = a(e.headers) ? "json" : "text"),
          "json" === t)
        ) {
          const t = await e.text();
          return t.length ? JSON.parse(t) : null;
        }
        return e.text();
      }
    })({
      baseUrl: "https://share.d-dimitrov.eu/api",
      prepareHeaders: (e) => {
        const t = localStorage.getItem("token");
        return (t && e.set("Authorization", `Bearer ${t}`), e);
      },
    }),
    Up = async (e, t, n) => {
      var r;
      const a = await Mp(e, t, n);
      return (
        401 ===
          (null === a || void 0 === a || null === (r = a.error) || void 0 === r
            ? void 0
            : r.status) && (localStorage.clear(), (window.location.href = "/")),
        a
      );
    },
    Fp = Dp({
      reducerPath: "api",
      baseQuery: Up,
      endpoints: (e) => ({ getUsers: e.query({ query: () => "/users" }) }),
    }),
    { useGetUsersQuery: zp } = Fp,
    Bp = () => {
      var e;
      const t = Qt(),
        n = localStorage.getItem("token"),
        [r, i] = (0, a.useState)(null),
        [o, s] = (0, a.useState)(""),
        { data: l, isLoading: u, error: c } = zp();
      console.log("pesho", n);
      return u
        ? (0, Xt.jsx)("p", { children: "Loading users..." })
        : c
          ? (0, Xt.jsxs)("p", {
              children: [
                "Error: ",
                (null === c ||
                void 0 === c ||
                null === (e = c.data) ||
                void 0 === e
                  ? void 0
                  : e.message) || "Something went wrong",
              ],
            })
          : (0, Xt.jsxs)("div", {
              className: "p-4",
              children: [
                (0, Xt.jsx)("h2", {
                  className: "text-xl font-bold mb-2",
                  children: "Change User Role",
                }),
                (0, Xt.jsxs)("select", {
                  onChange: (e) => i(e.target.value),
                  className: "border p-1 mr-2",
                  children: [
                    (0, Xt.jsx)("option", {
                      value: "",
                      children: "Select user",
                    }),
                    l.map((e, t) =>
                      (0, Xt.jsx)(
                        "option",
                        { value: e.username, children: e.username },
                        t,
                      ),
                    ),
                  ],
                }),
                (0, Xt.jsxs)("select", {
                  onChange: (e) => s(e.target.value),
                  className: "border p-1 mr-2",
                  children: [
                    (0, Xt.jsx)("option", {
                      value: "",
                      children: "Select new role",
                    }),
                    (0, Xt.jsx)("option", { value: "user", children: "User" }),
                    (0, Xt.jsx)("option", {
                      value: "admin",
                      children: "Admin",
                    }),
                  ],
                }),
                (0, Xt.jsx)("button", {
                  onClick: () => {
                    r && o && t(Jf({ username: r, newRole: o, token: n }));
                  },
                  className: "bg-blue-500 text-white px-3 py-1 rounded",
                  children: "Change Role",
                }),
              ],
            });
    },
    qp = "https://share.d-dimitrov.eu",
    Vp = ra("newsletter/fetchSubscribers", async (e, t) => {
      let { rejectWithValue: n } = t;
      try {
        const e = await fetch(`${qp}/api/subscribers`);
        if (!e.ok) throw new Error("Failed to fetch subscribers");
        return (await e.json()).emails || [];
      } catch (r) {
        return n(r.message);
      }
    }),
    Hp = ra("newsletter/sendBroadcast", async (e, t) => {
      let { title: n, content: r } = e,
        { rejectWithValue: a } = t;
      try {
        const e = await fetch(`${qp}/api/broadcast`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: n, content: r }),
        });
        if (!e.ok) {
          const t = await e.text();
          throw new Error(t || "Broadcast failed");
        }
        return await e.json();
      } catch (i) {
        return a(i.message);
      }
    }),
    Jp = ra("newsletter/sendTestBroadcast", async (e, t) => {
      let { to: n, title: r, content: a } = e,
        { rejectWithValue: i } = t;
      try {
        const e = await fetch(`${qp}/api/broadcast-test`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: n, title: r, content: a }),
        });
        if (!e.ok) {
          const t = await e.text();
          throw new Error(t || "Test broadcast failed");
        }
        return await e.json();
      } catch (o) {
        return i(o.message);
      }
    }),
    Qp = ua({
      name: "newsletter",
      initialState: {
        subscribers: [],
        fetchStatus: "idle",
        sendStatus: "idle",
        testStatus: "idle",
        error: null,
      },
      reducers: {},
      extraReducers: (e) =>
        e
          .addCase(Vp.pending, (e) => {
            ((e.fetchStatus = "loading"), (e.error = null));
          })
          .addCase(Vp.fulfilled, (e, t) => {
            ((e.fetchStatus = "succeeded"), (e.subscribers = t.payload));
          })
          .addCase(Vp.rejected, (e, t) => {
            ((e.fetchStatus = "failed"), (e.error = t.payload));
          })
          .addCase(Hp.pending, (e) => {
            ((e.sendStatus = "sending"), (e.error = null));
          })
          .addCase(Hp.fulfilled, (e) => {
            e.sendStatus = "sent";
          })
          .addCase(Hp.rejected, (e, t) => {
            ((e.sendStatus = "error"), (e.error = t.payload));
          })
          .addCase(Jp.pending, (e) => {
            ((e.testStatus = "sending"), (e.error = null));
          })
          .addCase(Jp.fulfilled, (e) => {
            e.testStatus = "sent";
          })
          .addCase(Jp.rejected, (e, t) => {
            ((e.testStatus = "error"), (e.error = t.payload));
          }),
    }),
    Wp = (e) => e.newsletter,
    Kp = Qp.reducer,
    $p = () => {
      const e = Qt(),
        t = $t(Wp),
        {
          subscribers: n = [],
          fetchStatus: r = "idle",
          sendStatus: i = "idle",
          testStatus: o = "idle",
          error: s = null,
        } = t || {},
        [l, u] = (0, a.useState)(""),
        [c, d] = (0, a.useState)(""),
        [f, h] = (0, a.useState)("dimitard185@gmail.com");
      (0, a.useEffect)(() => {
        "idle" === r && e(Vp());
      }, [e, r]);
      return (0, Xt.jsx)(Xt.Fragment, {
        children: (0, Xt.jsxs)("div", {
          className: "admin-panel",
          children: [
            (0, Xt.jsx)("h1", {
              children:
                "\ud83d\udce3 \u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b \u0437\u0430 \u0431\u044e\u043b\u0435\u0442\u0438\u043d\u0430",
            }),
            (0, Xt.jsxs)("section", {
              children: [
                (0, Xt.jsxs)("h2", {
                  children: [
                    "\u0410\u0431\u043e\u043d\u0430\u0442\u0438 (",
                    n.length,
                    ")",
                  ],
                }),
                (0, Xt.jsx)("ul", {
                  children: n.map((e, t) =>
                    (0, Xt.jsx)("li", { children: e }, t),
                  ),
                }),
                "loading" === r &&
                  (0, Xt.jsx)("p", { children: "Loading subscribers..." }),
                "failed" === r &&
                  (0, Xt.jsxs)("p", {
                    className: "error",
                    children: ["Failed to load subscribers: ", s],
                  }),
              ],
            }),
            (0, Xt.jsxs)("section", {
              children: [
                (0, Xt.jsx)("h2", {
                  children:
                    "\u041d\u043e\u0432\u0430 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u044f",
                }),
                (0, Xt.jsx)("div", {
                  className: "newsLetter-admin-panel-text-input",
                  children: (0, Xt.jsx)("input", {
                    type: "text",
                    placeholder:
                      "\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435",
                    value: l,
                    onChange: (e) => u(e.target.value),
                  }),
                }),
                (0, Xt.jsx)("textarea", {
                  placeholder:
                    "\u0421\u044a\u0434\u044a\u0440\u0436\u0430\u043d\u0438\u0435",
                  className: "newsLetter-admin-panel-text-area",
                  value: c,
                  onChange: (e) => d(e.target.value),
                }),
                (0, Xt.jsx)("button", {
                  className: "newsLetter-admin-panel",
                  onClick: async () => {
                    await e(Hp({ title: l, content: c }));
                  },
                  disabled: "sending" === i,
                  children:
                    "sending" === i
                      ? "\u0418\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435..."
                      : "\u0418\u0437\u043f\u0440\u0430\u0442\u0438 \u0431\u044e\u043b\u0435\u0442\u0438\u043d\u0430",
                }),
                "sent" === i &&
                  (0, Xt.jsx)("p", {
                    className: "success",
                    children:
                      "\u2705 \u0418\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",
                  }),
                "error" === i &&
                  (0, Xt.jsxs)("p", {
                    className: "error",
                    children: [
                      "\u274c \u0413\u0440\u0435\u0448\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435: ",
                      s,
                    ],
                  }),
              ],
            }),
            (0, Xt.jsxs)("section", {
              children: [
                (0, Xt.jsx)("h2", {
                  children:
                    "\ud83d\udce4 \u0418\u0437\u043f\u0440\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u043e\u0432\u043e",
                }),
                (0, Xt.jsx)("div", {
                  className: "newsLetter-admin-panel-text-input",
                  children: (0, Xt.jsx)("input", {
                    type: "email",
                    placeholder:
                      "\u0422\u0435\u0441\u0442\u043e\u0432 \u0438\u043c\u0435\u0439\u043b",
                    value: f,
                    onChange: (e) => h(e.target.value),
                  }),
                }),
                (0, Xt.jsx)("button", {
                  className: "newsLetter-admin-panel",
                  onClick: async () => {
                    (console.log("pesho"),
                      await e(Jp({ to: f, title: l, content: c })));
                  },
                  disabled: "sending" === o,
                  children:
                    "sending" === o
                      ? "\u0418\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435..."
                      : "\u0418\u0437\u043f\u0440\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u043e\u0432\u043e",
                }),
                "sent" === o &&
                  (0, Xt.jsx)("p", {
                    className: "success",
                    children:
                      "\u2705 \u0418\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",
                  }),
                "error" === o &&
                  (0, Xt.jsxs)("p", {
                    className: "error",
                    children: [
                      "\u274c \u0413\u0440\u0435\u0448\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435: ",
                      s,
                    ],
                  }),
              ],
            }),
          ],
        }),
      });
    };
  const Yp = function () {
      return (0, Xt.jsx)("div", {
        children: (0, Xt.jsxs)(Ue, {
          children: [
            (0, Xt.jsx)(De, {
              path: "/",
              element: (0, Xt.jsx)(je, { to: "/login", replace: !0 }),
            }),
            (0, Xt.jsx)(De, {
              path: "/login",
              element: (0, Xt.jsx)(Mf, {}),
              name: "Login",
            }),
            (0, Xt.jsx)(De, {
              path: "/home",
              element: (0, Xt.jsx)(Uf, {}),
              name: "Home",
            }),
            (0, Xt.jsx)(De, {
              path: "/change-role",
              element: (0, Xt.jsx)(Bp, {}),
              name: "RoleManager",
            }),
            (0, Xt.jsx)(De, {
              path: "/newsletter-admin-panel",
              element: (0, Xt.jsx)($p, {}),
              name: "NewsLetterAdminPanel",
            }),
            (0, Xt.jsx)(De, {
              path: "/update-section/:articleId",
              element: (0, Xt.jsx)(Hf, {}),
            }),
          ],
        }),
      });
    },
    Xp = {
      GET_ALL_TODOS: "http://localhost:5000/todos",
      DELETE_ALL_TODOS: "http://localhost:5000/todos",
      POST_COMMENT: "http://localhost:5000/comment",
      LIKE_COMMENT: "http://localhost:5000/api/like",
      DISLIKE_COMMENT: "http://localhost:5000/api/dislike",
      GET_LIKES_DISLIKES: "http://localhost:5000/likesDislikes",
      GET_IMAGES: "http://localhost:5000/show-image",
    },
    Gp = ra("comments/submitComment", async (e, t) => {
      let { email: n, comment: r } = e,
        { rejectWithValue: a } = t;
      try {
        const e = await fetch(Xp.POST_COMMENT, {
          method: "POST",
          body: JSON.stringify({ email: n, comment: r }),
        });
        return (
          401 === e.status &&
            (localStorage.clear(), (window.location.href = "/")),
          e.data
        );
      } catch (i) {
        return a(i.response.data);
      }
    }),
    Zp = ua({
      name: "comments",
      initialState: { comments: [], status: "idle", error: null },
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Gp.pending, (e) => {
          e.status = "loading";
        })
          .addCase(Gp.fulfilled, (e, t) => {
            ((e.status = "succeeded"), e.comments.push(t.payload));
          })
          .addCase(Gp.rejected, (e, t) => {
            ((e.status = "failed"), (e.error = t.payload));
          });
      },
    }).reducer,
    em = ra("fetchLikesDislikes", async () =>
      fetch("https://share.d-dimitrov.eu/api/likes-dislikes")
        .then((e) => e.json())
        .then(
          (e) => (
            401 === e.status &&
              (localStorage.clear(), (window.location.href = "/")),
            e
          ),
        ),
    ),
    tm = ua({
      name: "likesDislikes",
      initialState: {
        likes: 0,
        dislikes: 0,
        data: [],
        error: !1,
        status: "idle",
      },
      reducers: {
        incrementLike: (e) => {
          e.likes += 1;
        },
        incrementDislike: (e) => {
          e.dislikes += 1;
        },
      },
      extraReducers: (e) => {
        (e.addCase(em.pending, (e) => {
          ((e.status = "loading"), (e.isLoading = !0));
        }),
          e.addCase(em.fulfilled, (e, t) => {
            let n = [];
            ((e.isLoading = !1), (e.status = "succeeded"));
            for (let r = 0; r < t.payload.length; r++)
              n.push({
                tour_id: t.payload[r].id,
                likes: t.payload[r].likes,
                dislikes: t.payload[r].dislikes,
              });
            ((e.data = n), console.log("pesho", n));
          }),
          e.addCase(em.rejected, (e, t) => {
            ((e.status = "failed"),
              (e.error = !0),
              (e.error = t.error.message));
          }));
      },
    }),
    { incrementLike: nm, incrementDislike: rm } = tm.actions,
    am = (function (e) {
      const t = function (e) {
          const {
            thunk: t = !0,
            immutableCheck: n = !0,
            serializableCheck: r = !0,
            actionCreatorCheck: a = !0,
          } = e ?? {};
          let i = new Or();
          return (
            t &&
              ("boolean" === typeof t
                ? i.push(Rr)
                : i.push(Ir(t.extraArgument))),
            i
          );
        },
        {
          reducer: n,
          middleware: r,
          devTools: a = !0,
          duplicateMiddlewareCheck: i = !0,
          preloadedState: o,
          enhancers: s,
        } = e || {};
      let l, u;
      if ("function" === typeof n) l = n;
      else {
        if (!kr(n)) throw new Error(fa(1));
        l = _r(n);
      }
      u = "function" === typeof r ? r(t) : t();
      let c = Cr;
      a && (c = Tr({ trace: !1, ...("object" === typeof a && a) }));
      const d = (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (e) => (n, r) => {
            const a = e(n, r);
            let i = () => {
              throw new Error(vr(15));
            };
            const o = {
                getState: a.getState,
                dispatch: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  return i(e, ...n);
                },
              },
              s = t.map((e) => e(o));
            return ((i = Cr(...s)(a.dispatch)), { ...a, dispatch: i });
          };
        })(...u),
        f = Fr(d);
      return Er(l, o, c(...("function" === typeof s ? s(f) : f())));
    })({
      reducer: {
        articlesSections: ya,
        comments: Zp,
        likes: tm.reducer,
        uploadArticle: Bo,
        articlesHeader: Fo,
        editSection: zf,
        deleteArticle: Wo,
        deleteSection: Vf,
        auth: ns,
        createAccount: fs,
        roleManager: Qf,
        newsletter: Kp,
        [Fp.reducerPath]: Fp.reducer,
      },
      middleware: (e) => e().concat(Fp.middleware),
    });
  o.createRoot(document.getElementById("root")).render(
    (0, Xt.jsx)(zt, {
      store: am,
      children: (0, Xt.jsx)(yt, { children: (0, Xt.jsx)(Yp, {}) }),
    }),
  );
})();
//# sourceMappingURL=main.62bcced3.js.map
