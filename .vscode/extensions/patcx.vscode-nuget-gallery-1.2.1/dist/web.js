var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/object-hash/dist/object_hash.js
var require_object_hash = __commonJS({
  "node_modules/object-hash/dist/object_hash.js"(exports, module) {
    !function(e) {
      var t;
      "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : ("undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.objectHash = e());
    }(function() {
      return function r(o, i, u) {
        function s(n, e2) {
          if (!i[n]) {
            if (!o[n]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t)
                return t(n, true);
              if (a)
                return a(n, true);
              throw new Error("Cannot find module '" + n + "'");
            }
            e2 = i[n] = { exports: {} };
            o[n][0].call(e2.exports, function(e3) {
              var t2 = o[n][1][e3];
              return s(t2 || e3);
            }, e2, e2.exports, r, o, i, u);
          }
          return i[n].exports;
        }
        for (var a = "function" == typeof __require && __require, e = 0; e < u.length; e++)
          s(u[e]);
        return s;
      }({ 1: [function(w, b, m) {
        !function(e, n, s, c, d, h, p, g, y) {
          "use strict";
          var r = w("crypto");
          function t(e2, t2) {
            t2 = u(e2, t2);
            var n2;
            return void 0 === (n2 = "passthrough" !== t2.algorithm ? r.createHash(t2.algorithm) : new l()).write && (n2.write = n2.update, n2.end = n2.update), f(t2, n2).dispatch(e2), n2.update || n2.end(""), n2.digest ? n2.digest("buffer" === t2.encoding ? void 0 : t2.encoding) : (e2 = n2.read(), "buffer" !== t2.encoding ? e2.toString(t2.encoding) : e2);
          }
          (m = b.exports = t).sha1 = function(e2) {
            return t(e2);
          }, m.keys = function(e2) {
            return t(e2, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
          }, m.MD5 = function(e2) {
            return t(e2, { algorithm: "md5", encoding: "hex" });
          }, m.keysMD5 = function(e2) {
            return t(e2, { algorithm: "md5", encoding: "hex", excludeValues: true });
          };
          var o = r.getHashes ? r.getHashes().slice() : ["sha1", "md5"], i = (o.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function u(e2, t2) {
            var n2 = {};
            if (n2.algorithm = (t2 = t2 || {}).algorithm || "sha1", n2.encoding = t2.encoding || "hex", n2.excludeValues = !!t2.excludeValues, n2.algorithm = n2.algorithm.toLowerCase(), n2.encoding = n2.encoding.toLowerCase(), n2.ignoreUnknown = true === t2.ignoreUnknown, n2.respectType = false !== t2.respectType, n2.respectFunctionNames = false !== t2.respectFunctionNames, n2.respectFunctionProperties = false !== t2.respectFunctionProperties, n2.unorderedArrays = true === t2.unorderedArrays, n2.unorderedSets = false !== t2.unorderedSets, n2.unorderedObjects = false !== t2.unorderedObjects, n2.replacer = t2.replacer || void 0, n2.excludeKeys = t2.excludeKeys || void 0, void 0 === e2)
              throw new Error("Object argument required.");
            for (var r2 = 0; r2 < o.length; ++r2)
              o[r2].toLowerCase() === n2.algorithm.toLowerCase() && (n2.algorithm = o[r2]);
            if (-1 === o.indexOf(n2.algorithm))
              throw new Error('Algorithm "' + n2.algorithm + '"  not supported. supported values: ' + o.join(", "));
            if (-1 === i.indexOf(n2.encoding) && "passthrough" !== n2.algorithm)
              throw new Error('Encoding "' + n2.encoding + '"  not supported. supported values: ' + i.join(", "));
            return n2;
          }
          function a(e2) {
            if ("function" == typeof e2)
              return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e2));
          }
          function f(o2, t2, i2) {
            i2 = i2 || [];
            function u2(e2) {
              return t2.update ? t2.update(e2, "utf8") : t2.write(e2, "utf8");
            }
            return { dispatch: function(e2) {
              return this["_" + (null === (e2 = o2.replacer ? o2.replacer(e2) : e2) ? "null" : typeof e2)](e2);
            }, _object: function(t3) {
              var n2, e2 = Object.prototype.toString.call(t3), r2 = /\[object (.*)\]/i.exec(e2);
              r2 = (r2 = r2 ? r2[1] : "unknown:[" + e2 + "]").toLowerCase();
              if (0 <= (e2 = i2.indexOf(t3)))
                return this.dispatch("[CIRCULAR:" + e2 + "]");
              if (i2.push(t3), void 0 !== s && s.isBuffer && s.isBuffer(t3))
                return u2("buffer:"), u2(t3);
              if ("object" === r2 || "function" === r2 || "asyncfunction" === r2)
                return e2 = Object.keys(t3), o2.unorderedObjects && (e2 = e2.sort()), false === o2.respectType || a(t3) || e2.splice(0, 0, "prototype", "__proto__", "constructor"), o2.excludeKeys && (e2 = e2.filter(function(e3) {
                  return !o2.excludeKeys(e3);
                })), u2("object:" + e2.length + ":"), n2 = this, e2.forEach(function(e3) {
                  n2.dispatch(e3), u2(":"), o2.excludeValues || n2.dispatch(t3[e3]), u2(",");
                });
              if (!this["_" + r2]) {
                if (o2.ignoreUnknown)
                  return u2("[" + r2 + "]");
                throw new Error('Unknown object type "' + r2 + '"');
              }
              this["_" + r2](t3);
            }, _array: function(e2, t3) {
              t3 = void 0 !== t3 ? t3 : false !== o2.unorderedArrays;
              var n2 = this;
              if (u2("array:" + e2.length + ":"), !t3 || e2.length <= 1)
                return e2.forEach(function(e3) {
                  return n2.dispatch(e3);
                });
              var r2 = [], t3 = e2.map(function(e3) {
                var t4 = new l(), n3 = i2.slice();
                return f(o2, t4, n3).dispatch(e3), r2 = r2.concat(n3.slice(i2.length)), t4.read().toString();
              });
              return i2 = i2.concat(r2), t3.sort(), this._array(t3, false);
            }, _date: function(e2) {
              return u2("date:" + e2.toJSON());
            }, _symbol: function(e2) {
              return u2("symbol:" + e2.toString());
            }, _error: function(e2) {
              return u2("error:" + e2.toString());
            }, _boolean: function(e2) {
              return u2("bool:" + e2.toString());
            }, _string: function(e2) {
              u2("string:" + e2.length + ":"), u2(e2.toString());
            }, _function: function(e2) {
              u2("fn:"), a(e2) ? this.dispatch("[native]") : this.dispatch(e2.toString()), false !== o2.respectFunctionNames && this.dispatch("function-name:" + String(e2.name)), o2.respectFunctionProperties && this._object(e2);
            }, _number: function(e2) {
              return u2("number:" + e2.toString());
            }, _xml: function(e2) {
              return u2("xml:" + e2.toString());
            }, _null: function() {
              return u2("Null");
            }, _undefined: function() {
              return u2("Undefined");
            }, _regexp: function(e2) {
              return u2("regex:" + e2.toString());
            }, _uint8array: function(e2) {
              return u2("uint8array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _uint8clampedarray: function(e2) {
              return u2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _int8array: function(e2) {
              return u2("int8array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _uint16array: function(e2) {
              return u2("uint16array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _int16array: function(e2) {
              return u2("int16array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _uint32array: function(e2) {
              return u2("uint32array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _int32array: function(e2) {
              return u2("int32array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _float32array: function(e2) {
              return u2("float32array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _float64array: function(e2) {
              return u2("float64array:"), this.dispatch(Array.prototype.slice.call(e2));
            }, _arraybuffer: function(e2) {
              return u2("arraybuffer:"), this.dispatch(new Uint8Array(e2));
            }, _url: function(e2) {
              return u2("url:" + e2.toString());
            }, _map: function(e2) {
              u2("map:");
              e2 = Array.from(e2);
              return this._array(e2, false !== o2.unorderedSets);
            }, _set: function(e2) {
              u2("set:");
              e2 = Array.from(e2);
              return this._array(e2, false !== o2.unorderedSets);
            }, _file: function(e2) {
              return u2("file:"), this.dispatch([e2.name, e2.size, e2.type, e2.lastModfied]);
            }, _blob: function() {
              if (o2.ignoreUnknown)
                return u2("[blob]");
              throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
            }, _domwindow: function() {
              return u2("domwindow");
            }, _bigint: function(e2) {
              return u2("bigint:" + e2.toString());
            }, _process: function() {
              return u2("process");
            }, _timer: function() {
              return u2("timer");
            }, _pipe: function() {
              return u2("pipe");
            }, _tcp: function() {
              return u2("tcp");
            }, _udp: function() {
              return u2("udp");
            }, _tty: function() {
              return u2("tty");
            }, _statwatcher: function() {
              return u2("statwatcher");
            }, _securecontext: function() {
              return u2("securecontext");
            }, _connection: function() {
              return u2("connection");
            }, _zlib: function() {
              return u2("zlib");
            }, _context: function() {
              return u2("context");
            }, _nodescript: function() {
              return u2("nodescript");
            }, _httpparser: function() {
              return u2("httpparser");
            }, _dataview: function() {
              return u2("dataview");
            }, _signal: function() {
              return u2("signal");
            }, _fsevent: function() {
              return u2("fsevent");
            }, _tlswrap: function() {
              return u2("tlswrap");
            } };
          }
          function l() {
            return { buf: "", write: function(e2) {
              this.buf += e2;
            }, end: function(e2) {
              this.buf += e2;
            }, read: function() {
              return this.buf;
            } };
          }
          m.writeToStream = function(e2, t2, n2) {
            return void 0 === n2 && (n2 = t2, t2 = {}), f(t2 = u(e2, t2), n2).dispatch(e2);
          };
        }.call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e, t, f) {
        !function(e2, t2, n, r, o, i, u, s, a) {
          !function(e3) {
            "use strict";
            var a2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, t3 = "+".charCodeAt(0), n2 = "/".charCodeAt(0), r2 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), i2 = "A".charCodeAt(0), u2 = "-".charCodeAt(0), s2 = "_".charCodeAt(0);
            function f2(e4) {
              e4 = e4.charCodeAt(0);
              return e4 === t3 || e4 === u2 ? 62 : e4 === n2 || e4 === s2 ? 63 : e4 < r2 ? -1 : e4 < r2 + 10 ? e4 - r2 + 26 + 26 : e4 < i2 + 26 ? e4 - i2 : e4 < o2 + 26 ? e4 - o2 + 26 : void 0;
            }
            e3.toByteArray = function(e4) {
              var t4, n3;
              if (0 < e4.length % 4)
                throw new Error("Invalid string. Length must be a multiple of 4");
              var r3 = e4.length, r3 = "=" === e4.charAt(r3 - 2) ? 2 : "=" === e4.charAt(r3 - 1) ? 1 : 0, o3 = new a2(3 * e4.length / 4 - r3), i3 = 0 < r3 ? e4.length - 4 : e4.length, u3 = 0;
              function s3(e5) {
                o3[u3++] = e5;
              }
              for (t4 = 0; t4 < i3; t4 += 4, 0)
                s3((16711680 & (n3 = f2(e4.charAt(t4)) << 18 | f2(e4.charAt(t4 + 1)) << 12 | f2(e4.charAt(t4 + 2)) << 6 | f2(e4.charAt(t4 + 3)))) >> 16), s3((65280 & n3) >> 8), s3(255 & n3);
              return 2 == r3 ? s3(255 & (n3 = f2(e4.charAt(t4)) << 2 | f2(e4.charAt(t4 + 1)) >> 4)) : 1 == r3 && (s3((n3 = f2(e4.charAt(t4)) << 10 | f2(e4.charAt(t4 + 1)) << 4 | f2(e4.charAt(t4 + 2)) >> 2) >> 8 & 255), s3(255 & n3)), o3;
            }, e3.fromByteArray = function(e4) {
              var t4, n3, r3, o3, i3 = e4.length % 3, u3 = "";
              function s3(e5) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e5);
              }
              for (t4 = 0, r3 = e4.length - i3; t4 < r3; t4 += 3)
                n3 = (e4[t4] << 16) + (e4[t4 + 1] << 8) + e4[t4 + 2], u3 += s3((o3 = n3) >> 18 & 63) + s3(o3 >> 12 & 63) + s3(o3 >> 6 & 63) + s3(63 & o3);
              switch (i3) {
                case 1:
                  u3 = (u3 += s3((n3 = e4[e4.length - 1]) >> 2)) + s3(n3 << 4 & 63) + "==";
                  break;
                case 2:
                  u3 = (u3 = (u3 += s3((n3 = (e4[e4.length - 2] << 8) + e4[e4.length - 1]) >> 10)) + s3(n3 >> 4 & 63)) + s3(n3 << 2 & 63) + "=";
              }
              return u3;
            };
          }(void 0 === f ? this.base64js = {} : f);
        }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(O, e, H) {
        !function(e2, n, f, r, h, p, g, y, w) {
          var a = O("base64-js"), i = O("ieee754");
          function f(e3, t2, n2) {
            if (!(this instanceof f))
              return new f(e3, t2, n2);
            var r2, o2, i2, u2, s2 = typeof e3;
            if ("base64" === t2 && "string" == s2)
              for (e3 = (u2 = e3).trim ? u2.trim() : u2.replace(/^\s+|\s+$/g, ""); e3.length % 4 != 0; )
                e3 += "=";
            if ("number" == s2)
              r2 = j(e3);
            else if ("string" == s2)
              r2 = f.byteLength(e3, t2);
            else {
              if ("object" != s2)
                throw new Error("First argument needs to be a number, array or string.");
              r2 = j(e3.length);
            }
            if (f._useTypedArrays ? o2 = f._augment(new Uint8Array(r2)) : ((o2 = this).length = r2, o2._isBuffer = true), f._useTypedArrays && "number" == typeof e3.byteLength)
              o2._set(e3);
            else if (C(u2 = e3) || f.isBuffer(u2) || u2 && "object" == typeof u2 && "number" == typeof u2.length)
              for (i2 = 0; i2 < r2; i2++)
                f.isBuffer(e3) ? o2[i2] = e3.readUInt8(i2) : o2[i2] = e3[i2];
            else if ("string" == s2)
              o2.write(e3, 0, t2);
            else if ("number" == s2 && !f._useTypedArrays && !n2)
              for (i2 = 0; i2 < r2; i2++)
                o2[i2] = 0;
            return o2;
          }
          function b(e3, t2, n2, r2) {
            return f._charsWritten = c(function(e4) {
              for (var t3 = [], n3 = 0; n3 < e4.length; n3++)
                t3.push(255 & e4.charCodeAt(n3));
              return t3;
            }(t2), e3, n2, r2);
          }
          function m(e3, t2, n2, r2) {
            return f._charsWritten = c(function(e4) {
              for (var t3, n3, r3 = [], o2 = 0; o2 < e4.length; o2++)
                n3 = e4.charCodeAt(o2), t3 = n3 >> 8, n3 = n3 % 256, r3.push(n3), r3.push(t3);
              return r3;
            }(t2), e3, n2, r2);
          }
          function v(e3, t2, n2) {
            var r2 = "";
            n2 = Math.min(e3.length, n2);
            for (var o2 = t2; o2 < n2; o2++)
              r2 += String.fromCharCode(e3[o2]);
            return r2;
          }
          function o(e3, t2, n2, r2) {
            r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length"));
            var o2, r2 = e3.length;
            if (!(r2 <= t2))
              return n2 ? (o2 = e3[t2], t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8)) : (o2 = e3[t2] << 8, t2 + 1 < r2 && (o2 |= e3[t2 + 1])), o2;
          }
          function u(e3, t2, n2, r2) {
            r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length"));
            var o2, r2 = e3.length;
            if (!(r2 <= t2))
              return n2 ? (t2 + 2 < r2 && (o2 = e3[t2 + 2] << 16), t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8), o2 |= e3[t2], t2 + 3 < r2 && (o2 += e3[t2 + 3] << 24 >>> 0)) : (t2 + 1 < r2 && (o2 = e3[t2 + 1] << 16), t2 + 2 < r2 && (o2 |= e3[t2 + 2] << 8), t2 + 3 < r2 && (o2 |= e3[t2 + 3]), o2 += e3[t2] << 24 >>> 0), o2;
          }
          function _(e3, t2, n2, r2) {
            if (r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
              return r2 = o(e3, t2, n2, true), 32768 & r2 ? -1 * (65535 - r2 + 1) : r2;
          }
          function E(e3, t2, n2, r2) {
            if (r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
              return r2 = u(e3, t2, n2, true), 2147483648 & r2 ? -1 * (4294967295 - r2 + 1) : r2;
          }
          function I(e3, t2, n2, r2) {
            return r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 23, 4);
          }
          function A(e3, t2, n2, r2) {
            return r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 7 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 52, 8);
          }
          function s(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "trying to write beyond buffer length"), Y(t2, 65535));
            o2 = e3.length;
            if (!(o2 <= n2))
              for (var i2 = 0, u2 = Math.min(o2 - n2, 2); i2 < u2; i2++)
                e3[n2 + i2] = (t2 & 255 << 8 * (r2 ? i2 : 1 - i2)) >>> 8 * (r2 ? i2 : 1 - i2);
          }
          function l(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "trying to write beyond buffer length"), Y(t2, 4294967295));
            o2 = e3.length;
            if (!(o2 <= n2))
              for (var i2 = 0, u2 = Math.min(o2 - n2, 4); i2 < u2; i2++)
                e3[n2 + i2] = t2 >>> 8 * (r2 ? i2 : 3 - i2) & 255;
          }
          function B(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "Trying to write beyond buffer length"), F(t2, 32767, -32768)), e3.length <= n2 || s(e3, 0 <= t2 ? t2 : 65535 + t2 + 1, n2, r2, o2);
          }
          function L(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), F(t2, 2147483647, -2147483648)), e3.length <= n2 || l(e3, 0 <= t2 ? t2 : 4294967295 + t2 + 1, n2, r2, o2);
          }
          function U(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), D(t2, 34028234663852886e22, -34028234663852886e22)), e3.length <= n2 || i.write(e3, t2, n2, r2, 23, 4);
          }
          function x(e3, t2, n2, r2, o2) {
            o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 7 < e3.length, "Trying to write beyond buffer length"), D(t2, 17976931348623157e292, -17976931348623157e292)), e3.length <= n2 || i.write(e3, t2, n2, r2, 52, 8);
          }
          H.Buffer = f, H.SlowBuffer = f, H.INSPECT_MAX_BYTES = 50, f.poolSize = 8192, f._useTypedArrays = function() {
            try {
              var e3 = new ArrayBuffer(0), t2 = new Uint8Array(e3);
              return t2.foo = function() {
                return 42;
              }, 42 === t2.foo() && "function" == typeof t2.subarray;
            } catch (e4) {
              return false;
            }
          }(), f.isEncoding = function(e3) {
            switch (String(e3).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, f.isBuffer = function(e3) {
            return !(null == e3 || !e3._isBuffer);
          }, f.byteLength = function(e3, t2) {
            var n2;
            switch (e3 += "", t2 || "utf8") {
              case "hex":
                n2 = e3.length / 2;
                break;
              case "utf8":
              case "utf-8":
                n2 = T(e3).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                n2 = e3.length;
                break;
              case "base64":
                n2 = M(e3).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                n2 = 2 * e3.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return n2;
          }, f.concat = function(e3, t2) {
            if (d(C(e3), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e3.length)
              return new f(0);
            if (1 === e3.length)
              return e3[0];
            if ("number" != typeof t2)
              for (o2 = t2 = 0; o2 < e3.length; o2++)
                t2 += e3[o2].length;
            for (var n2 = new f(t2), r2 = 0, o2 = 0; o2 < e3.length; o2++) {
              var i2 = e3[o2];
              i2.copy(n2, r2), r2 += i2.length;
            }
            return n2;
          }, f.prototype.write = function(e3, t2, n2, r2) {
            isFinite(t2) ? isFinite(n2) || (r2 = n2, n2 = void 0) : (a2 = r2, r2 = t2, t2 = n2, n2 = a2), t2 = Number(t2) || 0;
            var o2, i2, u2, s2, a2 = this.length - t2;
            switch ((!n2 || a2 < (n2 = Number(n2))) && (n2 = a2), r2 = String(r2 || "utf8").toLowerCase()) {
              case "hex":
                o2 = function(e4, t3, n3, r3) {
                  n3 = Number(n3) || 0;
                  var o3 = e4.length - n3;
                  (!r3 || o3 < (r3 = Number(r3))) && (r3 = o3), d((o3 = t3.length) % 2 == 0, "Invalid hex string"), o3 / 2 < r3 && (r3 = o3 / 2);
                  for (var i3 = 0; i3 < r3; i3++) {
                    var u3 = parseInt(t3.substr(2 * i3, 2), 16);
                    d(!isNaN(u3), "Invalid hex string"), e4[n3 + i3] = u3;
                  }
                  return f._charsWritten = 2 * i3, i3;
                }(this, e3, t2, n2);
                break;
              case "utf8":
              case "utf-8":
                i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(T(e3), i2, u2, s2);
                break;
              case "ascii":
              case "binary":
                o2 = b(this, e3, t2, n2);
                break;
              case "base64":
                i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(M(e3), i2, u2, s2);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                o2 = m(this, e3, t2, n2);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return o2;
          }, f.prototype.toString = function(e3, t2, n2) {
            var r2, o2, i2, u2, s2 = this;
            if (e3 = String(e3 || "utf8").toLowerCase(), t2 = Number(t2) || 0, (n2 = void 0 !== n2 ? Number(n2) : s2.length) === t2)
              return "";
            switch (e3) {
              case "hex":
                r2 = function(e4, t3, n3) {
                  var r3 = e4.length;
                  (!t3 || t3 < 0) && (t3 = 0);
                  (!n3 || n3 < 0 || r3 < n3) && (n3 = r3);
                  for (var o3 = "", i3 = t3; i3 < n3; i3++)
                    o3 += k(e4[i3]);
                  return o3;
                }(s2, t2, n2);
                break;
              case "utf8":
              case "utf-8":
                r2 = function(e4, t3, n3) {
                  var r3 = "", o3 = "";
                  n3 = Math.min(e4.length, n3);
                  for (var i3 = t3; i3 < n3; i3++)
                    e4[i3] <= 127 ? (r3 += N(o3) + String.fromCharCode(e4[i3]), o3 = "") : o3 += "%" + e4[i3].toString(16);
                  return r3 + N(o3);
                }(s2, t2, n2);
                break;
              case "ascii":
              case "binary":
                r2 = v(s2, t2, n2);
                break;
              case "base64":
                o2 = s2, u2 = n2, r2 = 0 === (i2 = t2) && u2 === o2.length ? a.fromByteArray(o2) : a.fromByteArray(o2.slice(i2, u2));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                r2 = function(e4, t3, n3) {
                  for (var r3 = e4.slice(t3, n3), o3 = "", i3 = 0; i3 < r3.length; i3 += 2)
                    o3 += String.fromCharCode(r3[i3] + 256 * r3[i3 + 1]);
                  return o3;
                }(s2, t2, n2);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return r2;
          }, f.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, f.prototype.copy = function(e3, t2, n2, r2) {
            if (t2 = t2 || 0, (r2 = r2 || 0 === r2 ? r2 : this.length) !== (n2 = n2 || 0) && 0 !== e3.length && 0 !== this.length) {
              d(n2 <= r2, "sourceEnd < sourceStart"), d(0 <= t2 && t2 < e3.length, "targetStart out of bounds"), d(0 <= n2 && n2 < this.length, "sourceStart out of bounds"), d(0 <= r2 && r2 <= this.length, "sourceEnd out of bounds"), r2 > this.length && (r2 = this.length);
              var o2 = (r2 = e3.length - t2 < r2 - n2 ? e3.length - t2 + n2 : r2) - n2;
              if (o2 < 100 || !f._useTypedArrays)
                for (var i2 = 0; i2 < o2; i2++)
                  e3[i2 + t2] = this[i2 + n2];
              else
                e3._set(this.subarray(n2, n2 + o2), t2);
            }
          }, f.prototype.slice = function(e3, t2) {
            var n2 = this.length;
            if (e3 = S(e3, n2, 0), t2 = S(t2, n2, n2), f._useTypedArrays)
              return f._augment(this.subarray(e3, t2));
            for (var r2 = t2 - e3, o2 = new f(r2, void 0, true), i2 = 0; i2 < r2; i2++)
              o2[i2] = this[i2 + e3];
            return o2;
          }, f.prototype.get = function(e3) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e3);
          }, f.prototype.set = function(e3, t2) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e3, t2);
          }, f.prototype.readUInt8 = function(e3, t2) {
            if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
              return this[e3];
          }, f.prototype.readUInt16LE = function(e3, t2) {
            return o(this, e3, true, t2);
          }, f.prototype.readUInt16BE = function(e3, t2) {
            return o(this, e3, false, t2);
          }, f.prototype.readUInt32LE = function(e3, t2) {
            return u(this, e3, true, t2);
          }, f.prototype.readUInt32BE = function(e3, t2) {
            return u(this, e3, false, t2);
          }, f.prototype.readInt8 = function(e3, t2) {
            if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
              return 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
          }, f.prototype.readInt16LE = function(e3, t2) {
            return _(this, e3, true, t2);
          }, f.prototype.readInt16BE = function(e3, t2) {
            return _(this, e3, false, t2);
          }, f.prototype.readInt32LE = function(e3, t2) {
            return E(this, e3, true, t2);
          }, f.prototype.readInt32BE = function(e3, t2) {
            return E(this, e3, false, t2);
          }, f.prototype.readFloatLE = function(e3, t2) {
            return I(this, e3, true, t2);
          }, f.prototype.readFloatBE = function(e3, t2) {
            return I(this, e3, false, t2);
          }, f.prototype.readDoubleLE = function(e3, t2) {
            return A(this, e3, true, t2);
          }, f.prototype.readDoubleBE = function(e3, t2) {
            return A(this, e3, false, t2);
          }, f.prototype.writeUInt8 = function(e3, t2, n2) {
            n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "trying to write beyond buffer length"), Y(e3, 255)), t2 >= this.length || (this[t2] = e3);
          }, f.prototype.writeUInt16LE = function(e3, t2, n2) {
            s(this, e3, t2, true, n2);
          }, f.prototype.writeUInt16BE = function(e3, t2, n2) {
            s(this, e3, t2, false, n2);
          }, f.prototype.writeUInt32LE = function(e3, t2, n2) {
            l(this, e3, t2, true, n2);
          }, f.prototype.writeUInt32BE = function(e3, t2, n2) {
            l(this, e3, t2, false, n2);
          }, f.prototype.writeInt8 = function(e3, t2, n2) {
            n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "Trying to write beyond buffer length"), F(e3, 127, -128)), t2 >= this.length || (0 <= e3 ? this.writeUInt8(e3, t2, n2) : this.writeUInt8(255 + e3 + 1, t2, n2));
          }, f.prototype.writeInt16LE = function(e3, t2, n2) {
            B(this, e3, t2, true, n2);
          }, f.prototype.writeInt16BE = function(e3, t2, n2) {
            B(this, e3, t2, false, n2);
          }, f.prototype.writeInt32LE = function(e3, t2, n2) {
            L(this, e3, t2, true, n2);
          }, f.prototype.writeInt32BE = function(e3, t2, n2) {
            L(this, e3, t2, false, n2);
          }, f.prototype.writeFloatLE = function(e3, t2, n2) {
            U(this, e3, t2, true, n2);
          }, f.prototype.writeFloatBE = function(e3, t2, n2) {
            U(this, e3, t2, false, n2);
          }, f.prototype.writeDoubleLE = function(e3, t2, n2) {
            x(this, e3, t2, true, n2);
          }, f.prototype.writeDoubleBE = function(e3, t2, n2) {
            x(this, e3, t2, false, n2);
          }, f.prototype.fill = function(e3, t2, n2) {
            if (t2 = t2 || 0, n2 = n2 || this.length, d("number" == typeof (e3 = "string" == typeof (e3 = e3 || 0) ? e3.charCodeAt(0) : e3) && !isNaN(e3), "value is not a number"), d(t2 <= n2, "end < start"), n2 !== t2 && 0 !== this.length) {
              d(0 <= t2 && t2 < this.length, "start out of bounds"), d(0 <= n2 && n2 <= this.length, "end out of bounds");
              for (var r2 = t2; r2 < n2; r2++)
                this[r2] = e3;
            }
          }, f.prototype.inspect = function() {
            for (var e3 = [], t2 = this.length, n2 = 0; n2 < t2; n2++)
              if (e3[n2] = k(this[n2]), n2 === H.INSPECT_MAX_BYTES) {
                e3[n2 + 1] = "...";
                break;
              }
            return "<Buffer " + e3.join(" ") + ">";
          }, f.prototype.toArrayBuffer = function() {
            if ("undefined" == typeof Uint8Array)
              throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (f._useTypedArrays)
              return new f(this).buffer;
            for (var e3 = new Uint8Array(this.length), t2 = 0, n2 = e3.length; t2 < n2; t2 += 1)
              e3[t2] = this[t2];
            return e3.buffer;
          };
          var t = f.prototype;
          function S(e3, t2, n2) {
            return "number" != typeof e3 ? n2 : t2 <= (e3 = ~~e3) ? t2 : 0 <= e3 || 0 <= (e3 += t2) ? e3 : 0;
          }
          function j(e3) {
            return (e3 = ~~Math.ceil(+e3)) < 0 ? 0 : e3;
          }
          function C(e3) {
            return (Array.isArray || function(e4) {
              return "[object Array]" === Object.prototype.toString.call(e4);
            })(e3);
          }
          function k(e3) {
            return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
          }
          function T(e3) {
            for (var t2 = [], n2 = 0; n2 < e3.length; n2++) {
              var r2 = e3.charCodeAt(n2);
              if (r2 <= 127)
                t2.push(e3.charCodeAt(n2));
              else
                for (var o2 = n2, i2 = (55296 <= r2 && r2 <= 57343 && n2++, encodeURIComponent(e3.slice(o2, n2 + 1)).substr(1).split("%")), u2 = 0; u2 < i2.length; u2++)
                  t2.push(parseInt(i2[u2], 16));
            }
            return t2;
          }
          function M(e3) {
            return a.toByteArray(e3);
          }
          function c(e3, t2, n2, r2) {
            for (var o2 = 0; o2 < r2 && !(o2 + n2 >= t2.length || o2 >= e3.length); o2++)
              t2[o2 + n2] = e3[o2];
            return o2;
          }
          function N(e3) {
            try {
              return decodeURIComponent(e3);
            } catch (e4) {
              return String.fromCharCode(65533);
            }
          }
          function Y(e3, t2) {
            d("number" == typeof e3, "cannot write a non-number as a number"), d(0 <= e3, "specified a negative value for writing an unsigned value"), d(e3 <= t2, "value is larger than maximum value for type"), d(Math.floor(e3) === e3, "value has a fractional component");
          }
          function F(e3, t2, n2) {
            d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value"), d(Math.floor(e3) === e3, "value has a fractional component");
          }
          function D(e3, t2, n2) {
            d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value");
          }
          function d(e3, t2) {
            if (!e3)
              throw new Error(t2 || "Failed assertion");
          }
          f._augment = function(e3) {
            return e3._isBuffer = true, e3._get = e3.get, e3._set = e3.set, e3.get = t.get, e3.set = t.set, e3.write = t.write, e3.toString = t.toString, e3.toLocaleString = t.toString, e3.toJSON = t.toJSON, e3.copy = t.copy, e3.slice = t.slice, e3.readUInt8 = t.readUInt8, e3.readUInt16LE = t.readUInt16LE, e3.readUInt16BE = t.readUInt16BE, e3.readUInt32LE = t.readUInt32LE, e3.readUInt32BE = t.readUInt32BE, e3.readInt8 = t.readInt8, e3.readInt16LE = t.readInt16LE, e3.readInt16BE = t.readInt16BE, e3.readInt32LE = t.readInt32LE, e3.readInt32BE = t.readInt32BE, e3.readFloatLE = t.readFloatLE, e3.readFloatBE = t.readFloatBE, e3.readDoubleLE = t.readDoubleLE, e3.readDoubleBE = t.readDoubleBE, e3.writeUInt8 = t.writeUInt8, e3.writeUInt16LE = t.writeUInt16LE, e3.writeUInt16BE = t.writeUInt16BE, e3.writeUInt32LE = t.writeUInt32LE, e3.writeUInt32BE = t.writeUInt32BE, e3.writeInt8 = t.writeInt8, e3.writeInt16LE = t.writeInt16LE, e3.writeInt16BE = t.writeInt16BE, e3.writeInt32LE = t.writeInt32LE, e3.writeInt32BE = t.writeInt32BE, e3.writeFloatLE = t.writeFloatLE, e3.writeFloatBE = t.writeFloatBE, e3.writeDoubleLE = t.writeDoubleLE, e3.writeDoubleBE = t.writeDoubleBE, e3.fill = t.fill, e3.inspect = t.inspect, e3.toArrayBuffer = t.toArrayBuffer, e3;
          };
        }.call(this, O("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c, d, e) {
        !function(e2, t, a, n, r, o, i, u, s) {
          var a = c("buffer").Buffer, f = 4, l = new a(f);
          l.fill(0);
          d.exports = { hash: function(e3, t2, n2, r2) {
            for (var o2 = t2(function(e4, t3) {
              e4.length % f != 0 && (n3 = e4.length + (f - e4.length % f), e4 = a.concat([e4, l], n3));
              for (var n3, r3 = [], o3 = t3 ? e4.readInt32BE : e4.readInt32LE, i3 = 0; i3 < e4.length; i3 += f)
                r3.push(o3.call(e4, i3));
              return r3;
            }(e3 = a.isBuffer(e3) ? e3 : new a(e3), r2), 8 * e3.length), t2 = r2, i2 = new a(n2), u2 = t2 ? i2.writeInt32BE : i2.writeInt32LE, s2 = 0; s2 < o2.length; s2++)
              u2.call(i2, o2[s2], 4 * s2, true);
            return i2;
          } };
        }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(v, e, _) {
        !function(l, c, u, d, h, p, g, y, w) {
          var u = v("buffer").Buffer, e2 = v("./sha"), t = v("./sha256"), n = v("./rng"), b = { sha1: e2, sha256: t, md5: v("./md5") }, s = 64, a = new u(s);
          function r(e3, n2) {
            var r2 = b[e3 = e3 || "sha1"], o2 = [];
            return r2 || i("algorithm:", e3, "is not yet supported"), { update: function(e4) {
              return u.isBuffer(e4) || (e4 = new u(e4)), o2.push(e4), e4.length, this;
            }, digest: function(e4) {
              var t2 = u.concat(o2), t2 = n2 ? function(e5, t3, n3) {
                u.isBuffer(t3) || (t3 = new u(t3)), u.isBuffer(n3) || (n3 = new u(n3)), t3.length > s ? t3 = e5(t3) : t3.length < s && (t3 = u.concat([t3, a], s));
                for (var r3 = new u(s), o3 = new u(s), i2 = 0; i2 < s; i2++)
                  r3[i2] = 54 ^ t3[i2], o3[i2] = 92 ^ t3[i2];
                return n3 = e5(u.concat([r3, n3])), e5(u.concat([o3, n3]));
              }(r2, n2, t2) : r2(t2);
              return o2 = null, e4 ? t2.toString(e4) : t2;
            } };
          }
          function i() {
            var e3 = [].slice.call(arguments).join(" ");
            throw new Error([e3, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
          }
          a.fill(0), _.createHash = function(e3) {
            return r(e3);
          }, _.createHmac = r, _.randomBytes = function(e3, t2) {
            if (!t2 || !t2.call)
              return new u(n(e3));
            try {
              t2.call(this, void 0, new u(n(e3)));
            } catch (e4) {
              t2(e4);
            }
          };
          var o, f = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m = function(e3) {
            _[e3] = function() {
              i("sorry,", e3, "is not implemented yet");
            };
          };
          for (o in f)
            m(f[o], o);
        }.call(this, v("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w, b, e) {
        !function(e2, r, o, i, u, a, f, l, y) {
          var t = w("./helpers");
          function n(e3, t2) {
            e3[t2 >> 5] |= 128 << t2 % 32, e3[14 + (t2 + 64 >>> 9 << 4)] = t2;
            for (var n2 = 1732584193, r2 = -271733879, o2 = -1732584194, i2 = 271733878, u2 = 0; u2 < e3.length; u2 += 16) {
              var s2 = n2, a2 = r2, f2 = o2, l2 = i2, n2 = c(n2, r2, o2, i2, e3[u2 + 0], 7, -680876936), i2 = c(i2, n2, r2, o2, e3[u2 + 1], 12, -389564586), o2 = c(o2, i2, n2, r2, e3[u2 + 2], 17, 606105819), r2 = c(r2, o2, i2, n2, e3[u2 + 3], 22, -1044525330);
              n2 = c(n2, r2, o2, i2, e3[u2 + 4], 7, -176418897), i2 = c(i2, n2, r2, o2, e3[u2 + 5], 12, 1200080426), o2 = c(o2, i2, n2, r2, e3[u2 + 6], 17, -1473231341), r2 = c(r2, o2, i2, n2, e3[u2 + 7], 22, -45705983), n2 = c(n2, r2, o2, i2, e3[u2 + 8], 7, 1770035416), i2 = c(i2, n2, r2, o2, e3[u2 + 9], 12, -1958414417), o2 = c(o2, i2, n2, r2, e3[u2 + 10], 17, -42063), r2 = c(r2, o2, i2, n2, e3[u2 + 11], 22, -1990404162), n2 = c(n2, r2, o2, i2, e3[u2 + 12], 7, 1804603682), i2 = c(i2, n2, r2, o2, e3[u2 + 13], 12, -40341101), o2 = c(o2, i2, n2, r2, e3[u2 + 14], 17, -1502002290), n2 = d(n2, r2 = c(r2, o2, i2, n2, e3[u2 + 15], 22, 1236535329), o2, i2, e3[u2 + 1], 5, -165796510), i2 = d(i2, n2, r2, o2, e3[u2 + 6], 9, -1069501632), o2 = d(o2, i2, n2, r2, e3[u2 + 11], 14, 643717713), r2 = d(r2, o2, i2, n2, e3[u2 + 0], 20, -373897302), n2 = d(n2, r2, o2, i2, e3[u2 + 5], 5, -701558691), i2 = d(i2, n2, r2, o2, e3[u2 + 10], 9, 38016083), o2 = d(o2, i2, n2, r2, e3[u2 + 15], 14, -660478335), r2 = d(r2, o2, i2, n2, e3[u2 + 4], 20, -405537848), n2 = d(n2, r2, o2, i2, e3[u2 + 9], 5, 568446438), i2 = d(i2, n2, r2, o2, e3[u2 + 14], 9, -1019803690), o2 = d(o2, i2, n2, r2, e3[u2 + 3], 14, -187363961), r2 = d(r2, o2, i2, n2, e3[u2 + 8], 20, 1163531501), n2 = d(n2, r2, o2, i2, e3[u2 + 13], 5, -1444681467), i2 = d(i2, n2, r2, o2, e3[u2 + 2], 9, -51403784), o2 = d(o2, i2, n2, r2, e3[u2 + 7], 14, 1735328473), n2 = h(n2, r2 = d(r2, o2, i2, n2, e3[u2 + 12], 20, -1926607734), o2, i2, e3[u2 + 5], 4, -378558), i2 = h(i2, n2, r2, o2, e3[u2 + 8], 11, -2022574463), o2 = h(o2, i2, n2, r2, e3[u2 + 11], 16, 1839030562), r2 = h(r2, o2, i2, n2, e3[u2 + 14], 23, -35309556), n2 = h(n2, r2, o2, i2, e3[u2 + 1], 4, -1530992060), i2 = h(i2, n2, r2, o2, e3[u2 + 4], 11, 1272893353), o2 = h(o2, i2, n2, r2, e3[u2 + 7], 16, -155497632), r2 = h(r2, o2, i2, n2, e3[u2 + 10], 23, -1094730640), n2 = h(n2, r2, o2, i2, e3[u2 + 13], 4, 681279174), i2 = h(i2, n2, r2, o2, e3[u2 + 0], 11, -358537222), o2 = h(o2, i2, n2, r2, e3[u2 + 3], 16, -722521979), r2 = h(r2, o2, i2, n2, e3[u2 + 6], 23, 76029189), n2 = h(n2, r2, o2, i2, e3[u2 + 9], 4, -640364487), i2 = h(i2, n2, r2, o2, e3[u2 + 12], 11, -421815835), o2 = h(o2, i2, n2, r2, e3[u2 + 15], 16, 530742520), n2 = p(n2, r2 = h(r2, o2, i2, n2, e3[u2 + 2], 23, -995338651), o2, i2, e3[u2 + 0], 6, -198630844), i2 = p(i2, n2, r2, o2, e3[u2 + 7], 10, 1126891415), o2 = p(o2, i2, n2, r2, e3[u2 + 14], 15, -1416354905), r2 = p(r2, o2, i2, n2, e3[u2 + 5], 21, -57434055), n2 = p(n2, r2, o2, i2, e3[u2 + 12], 6, 1700485571), i2 = p(i2, n2, r2, o2, e3[u2 + 3], 10, -1894986606), o2 = p(o2, i2, n2, r2, e3[u2 + 10], 15, -1051523), r2 = p(r2, o2, i2, n2, e3[u2 + 1], 21, -2054922799), n2 = p(n2, r2, o2, i2, e3[u2 + 8], 6, 1873313359), i2 = p(i2, n2, r2, o2, e3[u2 + 15], 10, -30611744), o2 = p(o2, i2, n2, r2, e3[u2 + 6], 15, -1560198380), r2 = p(r2, o2, i2, n2, e3[u2 + 13], 21, 1309151649), n2 = p(n2, r2, o2, i2, e3[u2 + 4], 6, -145523070), i2 = p(i2, n2, r2, o2, e3[u2 + 11], 10, -1120210379), o2 = p(o2, i2, n2, r2, e3[u2 + 2], 15, 718787259), r2 = p(r2, o2, i2, n2, e3[u2 + 9], 21, -343485551), n2 = g(n2, s2), r2 = g(r2, a2), o2 = g(o2, f2), i2 = g(i2, l2);
            }
            return Array(n2, r2, o2, i2);
          }
          function s(e3, t2, n2, r2, o2, i2) {
            return g((t2 = g(g(t2, e3), g(r2, i2))) << o2 | t2 >>> 32 - o2, n2);
          }
          function c(e3, t2, n2, r2, o2, i2, u2) {
            return s(t2 & n2 | ~t2 & r2, e3, t2, o2, i2, u2);
          }
          function d(e3, t2, n2, r2, o2, i2, u2) {
            return s(t2 & r2 | n2 & ~r2, e3, t2, o2, i2, u2);
          }
          function h(e3, t2, n2, r2, o2, i2, u2) {
            return s(t2 ^ n2 ^ r2, e3, t2, o2, i2, u2);
          }
          function p(e3, t2, n2, r2, o2, i2, u2) {
            return s(n2 ^ (t2 | ~r2), e3, t2, o2, i2, u2);
          }
          function g(e3, t2) {
            var n2 = (65535 & e3) + (65535 & t2);
            return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }
          b.exports = function(e3) {
            return t.hash(e3, n, 16);
          };
        }.call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e, l, t) {
        !function(e2, t2, n, r, o, i, u, s, f) {
          var a;
          l.exports = a || function(e3) {
            for (var t3, n2 = new Array(e3), r2 = 0; r2 < e3; r2++)
              0 == (3 & r2) && (t3 = 4294967296 * Math.random()), n2[r2] = t3 >>> ((3 & r2) << 3) & 255;
            return n2;
          };
        }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(c, d, e) {
        !function(e2, t, n, r, o, s, a, f, l) {
          var i = c("./helpers");
          function u(l2, c2) {
            l2[c2 >> 5] |= 128 << 24 - c2 % 32, l2[15 + (c2 + 64 >> 9 << 4)] = c2;
            for (var e3, t2, n2, r2 = Array(80), o2 = 1732584193, i2 = -271733879, u2 = -1732584194, s2 = 271733878, d2 = -1009589776, h = 0; h < l2.length; h += 16) {
              for (var p = o2, g = i2, y = u2, w = s2, b = d2, a2 = 0; a2 < 80; a2++) {
                r2[a2] = a2 < 16 ? l2[h + a2] : v(r2[a2 - 3] ^ r2[a2 - 8] ^ r2[a2 - 14] ^ r2[a2 - 16], 1);
                var f2 = m(m(v(o2, 5), (f2 = i2, t2 = u2, n2 = s2, (e3 = a2) < 20 ? f2 & t2 | ~f2 & n2 : !(e3 < 40) && e3 < 60 ? f2 & t2 | f2 & n2 | t2 & n2 : f2 ^ t2 ^ n2)), m(m(d2, r2[a2]), (e3 = a2) < 20 ? 1518500249 : e3 < 40 ? 1859775393 : e3 < 60 ? -1894007588 : -899497514)), d2 = s2, s2 = u2, u2 = v(i2, 30), i2 = o2, o2 = f2;
              }
              o2 = m(o2, p), i2 = m(i2, g), u2 = m(u2, y), s2 = m(s2, w), d2 = m(d2, b);
            }
            return Array(o2, i2, u2, s2, d2);
          }
          function m(e3, t2) {
            var n2 = (65535 & e3) + (65535 & t2);
            return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }
          function v(e3, t2) {
            return e3 << t2 | e3 >>> 32 - t2;
          }
          d.exports = function(e3) {
            return i.hash(e3, u, 20, true);
          };
        }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c, d, e) {
        !function(e2, t, n, r, u, s, a, f, l) {
          function b(e3, t2) {
            var n2 = (65535 & e3) + (65535 & t2);
            return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }
          function o(e3, l2) {
            var c2, d2 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t2 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n2 = new Array(64);
            e3[l2 >> 5] |= 128 << 24 - l2 % 32, e3[15 + (l2 + 64 >> 9 << 4)] = l2;
            for (var r2, o2, h = 0; h < e3.length; h += 16) {
              for (var i2 = t2[0], u2 = t2[1], s2 = t2[2], p = t2[3], a2 = t2[4], g = t2[5], y = t2[6], w = t2[7], f2 = 0; f2 < 64; f2++)
                n2[f2] = f2 < 16 ? e3[f2 + h] : b(b(b((o2 = n2[f2 - 2], m(o2, 17) ^ m(o2, 19) ^ v(o2, 10)), n2[f2 - 7]), (o2 = n2[f2 - 15], m(o2, 7) ^ m(o2, 18) ^ v(o2, 3))), n2[f2 - 16]), c2 = b(b(b(b(w, m(o2 = a2, 6) ^ m(o2, 11) ^ m(o2, 25)), a2 & g ^ ~a2 & y), d2[f2]), n2[f2]), r2 = b(m(r2 = i2, 2) ^ m(r2, 13) ^ m(r2, 22), i2 & u2 ^ i2 & s2 ^ u2 & s2), w = y, y = g, g = a2, a2 = b(p, c2), p = s2, s2 = u2, u2 = i2, i2 = b(c2, r2);
              t2[0] = b(i2, t2[0]), t2[1] = b(u2, t2[1]), t2[2] = b(s2, t2[2]), t2[3] = b(p, t2[3]), t2[4] = b(a2, t2[4]), t2[5] = b(g, t2[5]), t2[6] = b(y, t2[6]), t2[7] = b(w, t2[7]);
            }
            return t2;
          }
          var i = c("./helpers"), m = function(e3, t2) {
            return e3 >>> t2 | e3 << 32 - t2;
          }, v = function(e3, t2) {
            return e3 >>> t2;
          };
          d.exports = function(e3) {
            return i.hash(e3, o, 32, true);
          };
        }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e, t, f) {
        !function(e2, t2, n, r, o, i, u, s, a) {
          f.read = function(e3, t3, n2, r2, o2) {
            var i2, u2, l = 8 * o2 - r2 - 1, c = (1 << l) - 1, d = c >> 1, s2 = -7, a2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, o2 = e3[t3 + a2];
            for (a2 += f2, i2 = o2 & (1 << -s2) - 1, o2 >>= -s2, s2 += l; 0 < s2; i2 = 256 * i2 + e3[t3 + a2], a2 += f2, s2 -= 8)
              ;
            for (u2 = i2 & (1 << -s2) - 1, i2 >>= -s2, s2 += r2; 0 < s2; u2 = 256 * u2 + e3[t3 + a2], a2 += f2, s2 -= 8)
              ;
            if (0 === i2)
              i2 = 1 - d;
            else {
              if (i2 === c)
                return u2 ? NaN : 1 / 0 * (o2 ? -1 : 1);
              u2 += Math.pow(2, r2), i2 -= d;
            }
            return (o2 ? -1 : 1) * u2 * Math.pow(2, i2 - r2);
          }, f.write = function(e3, t3, l, n2, r2, c) {
            var o2, i2, u2 = 8 * c - r2 - 1, s2 = (1 << u2) - 1, a2 = s2 >> 1, d = 23 === r2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = n2 ? 0 : c - 1, h = n2 ? 1 : -1, c = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0;
            for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (i2 = isNaN(t3) ? 1 : 0, o2 = s2) : (o2 = Math.floor(Math.log(t3) / Math.LN2), t3 * (n2 = Math.pow(2, -o2)) < 1 && (o2--, n2 *= 2), 2 <= (t3 += 1 <= o2 + a2 ? d / n2 : d * Math.pow(2, 1 - a2)) * n2 && (o2++, n2 /= 2), s2 <= o2 + a2 ? (i2 = 0, o2 = s2) : 1 <= o2 + a2 ? (i2 = (t3 * n2 - 1) * Math.pow(2, r2), o2 += a2) : (i2 = t3 * Math.pow(2, a2 - 1) * Math.pow(2, r2), o2 = 0)); 8 <= r2; e3[l + f2] = 255 & i2, f2 += h, i2 /= 256, r2 -= 8)
              ;
            for (o2 = o2 << r2 | i2, u2 += r2; 0 < u2; e3[l + f2] = 255 & o2, f2 += h, o2 /= 256, u2 -= 8)
              ;
            e3[l + f2 - h] |= 128 * c;
          };
        }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(e, h, t) {
        !function(e2, t2, n, r, o, f, l, c, d) {
          var i, u, s;
          function a() {
          }
          (e2 = h.exports = {}).nextTick = (u = "undefined" != typeof window && window.setImmediate, s = "undefined" != typeof window && window.postMessage && window.addEventListener, u ? function(e3) {
            return window.setImmediate(e3);
          } : s ? (i = [], window.addEventListener("message", function(e3) {
            var t3 = e3.source;
            t3 !== window && null !== t3 || "process-tick" !== e3.data || (e3.stopPropagation(), 0 < i.length && i.shift()());
          }, true), function(e3) {
            i.push(e3), window.postMessage("process-tick", "*");
          }) : function(e3) {
            setTimeout(e3, 0);
          }), e2.title = "browser", e2.browser = true, e2.env = {}, e2.argv = [], e2.on = a, e2.addListener = a, e2.once = a, e2.off = a, e2.removeListener = a, e2.removeAllListeners = a, e2.emit = a, e2.binding = function(e3) {
            throw new Error("process.binding is not supported");
          }, e2.cwd = function() {
            return "/";
          }, e2.chdir = function(e3) {
            throw new Error("process.chdir is not supported");
          };
        }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache2, key) {
        return cache2.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash3(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash3.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash3
          }
        };
        lodash3.prototype = baseLodash.prototype;
        lodash3.prototype.constructor = lodash3;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject2(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction2(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache2 = caches[othIndex];
                  if (!(cache2 ? cacheHas(cache2, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last2(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject2(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject2(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject2(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction2(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject2(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last2(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash3, "placeholder") ? lodash3 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash3.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject2(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash3[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction2 : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject2(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache2.size === MAX_MEMOIZE_SIZE) {
              cache2.clear();
            }
            return key;
          });
          var cache2 = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last2(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last2(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex2(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last2(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last2(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last2(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last2(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last2(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last2(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash3(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex2);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString2(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
            if (cache2.has(key)) {
              return cache2.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache2.set(key, result2) || cache2;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction2(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction2(value) {
          if (!isObject2(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject2(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString2(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString2(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject2(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject2(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create3(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction2(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object)) {
              accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange2(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat3(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit2) {
          if (limit2 && typeof limit2 != "number" && isIterateeCall(string, separator, limit2)) {
            separator = limit2 = undefined2;
          }
          limit2 = limit2 === undefined2 ? MAX_ARRAY_LENGTH : limit2 >>> 0;
          if (!limit2) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit2);
            }
          }
          return string.split(separator, limit2);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template9(string, options, guard) {
          var settings = lodash3.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range2 = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId2(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash3.after = after;
        lodash3.ary = ary;
        lodash3.assign = assign;
        lodash3.assignIn = assignIn;
        lodash3.assignInWith = assignInWith;
        lodash3.assignWith = assignWith;
        lodash3.at = at;
        lodash3.before = before;
        lodash3.bind = bind;
        lodash3.bindAll = bindAll;
        lodash3.bindKey = bindKey;
        lodash3.castArray = castArray;
        lodash3.chain = chain;
        lodash3.chunk = chunk;
        lodash3.compact = compact;
        lodash3.concat = concat;
        lodash3.cond = cond;
        lodash3.conforms = conforms;
        lodash3.constant = constant;
        lodash3.countBy = countBy;
        lodash3.create = create3;
        lodash3.curry = curry;
        lodash3.curryRight = curryRight;
        lodash3.debounce = debounce;
        lodash3.defaults = defaults;
        lodash3.defaultsDeep = defaultsDeep;
        lodash3.defer = defer;
        lodash3.delay = delay;
        lodash3.difference = difference;
        lodash3.differenceBy = differenceBy;
        lodash3.differenceWith = differenceWith;
        lodash3.drop = drop;
        lodash3.dropRight = dropRight;
        lodash3.dropRightWhile = dropRightWhile;
        lodash3.dropWhile = dropWhile;
        lodash3.fill = fill;
        lodash3.filter = filter;
        lodash3.flatMap = flatMap;
        lodash3.flatMapDeep = flatMapDeep;
        lodash3.flatMapDepth = flatMapDepth;
        lodash3.flatten = flatten;
        lodash3.flattenDeep = flattenDeep;
        lodash3.flattenDepth = flattenDepth;
        lodash3.flip = flip;
        lodash3.flow = flow;
        lodash3.flowRight = flowRight;
        lodash3.fromPairs = fromPairs;
        lodash3.functions = functions;
        lodash3.functionsIn = functionsIn;
        lodash3.groupBy = groupBy;
        lodash3.initial = initial;
        lodash3.intersection = intersection;
        lodash3.intersectionBy = intersectionBy;
        lodash3.intersectionWith = intersectionWith;
        lodash3.invert = invert;
        lodash3.invertBy = invertBy;
        lodash3.invokeMap = invokeMap;
        lodash3.iteratee = iteratee;
        lodash3.keyBy = keyBy;
        lodash3.keys = keys;
        lodash3.keysIn = keysIn;
        lodash3.map = map;
        lodash3.mapKeys = mapKeys;
        lodash3.mapValues = mapValues;
        lodash3.matches = matches;
        lodash3.matchesProperty = matchesProperty;
        lodash3.memoize = memoize;
        lodash3.merge = merge;
        lodash3.mergeWith = mergeWith;
        lodash3.method = method;
        lodash3.methodOf = methodOf;
        lodash3.mixin = mixin;
        lodash3.negate = negate;
        lodash3.nthArg = nthArg;
        lodash3.omit = omit;
        lodash3.omitBy = omitBy;
        lodash3.once = once;
        lodash3.orderBy = orderBy;
        lodash3.over = over;
        lodash3.overArgs = overArgs;
        lodash3.overEvery = overEvery;
        lodash3.overSome = overSome;
        lodash3.partial = partial;
        lodash3.partialRight = partialRight;
        lodash3.partition = partition;
        lodash3.pick = pick;
        lodash3.pickBy = pickBy;
        lodash3.property = property;
        lodash3.propertyOf = propertyOf;
        lodash3.pull = pull;
        lodash3.pullAll = pullAll;
        lodash3.pullAllBy = pullAllBy;
        lodash3.pullAllWith = pullAllWith;
        lodash3.pullAt = pullAt;
        lodash3.range = range2;
        lodash3.rangeRight = rangeRight;
        lodash3.rearg = rearg;
        lodash3.reject = reject;
        lodash3.remove = remove;
        lodash3.rest = rest;
        lodash3.reverse = reverse;
        lodash3.sampleSize = sampleSize;
        lodash3.set = set;
        lodash3.setWith = setWith;
        lodash3.shuffle = shuffle;
        lodash3.slice = slice;
        lodash3.sortBy = sortBy;
        lodash3.sortedUniq = sortedUniq;
        lodash3.sortedUniqBy = sortedUniqBy;
        lodash3.split = split;
        lodash3.spread = spread;
        lodash3.tail = tail;
        lodash3.take = take;
        lodash3.takeRight = takeRight;
        lodash3.takeRightWhile = takeRightWhile;
        lodash3.takeWhile = takeWhile;
        lodash3.tap = tap;
        lodash3.throttle = throttle;
        lodash3.thru = thru;
        lodash3.toArray = toArray;
        lodash3.toPairs = toPairs;
        lodash3.toPairsIn = toPairsIn;
        lodash3.toPath = toPath;
        lodash3.toPlainObject = toPlainObject;
        lodash3.transform = transform;
        lodash3.unary = unary;
        lodash3.union = union;
        lodash3.unionBy = unionBy;
        lodash3.unionWith = unionWith;
        lodash3.uniq = uniq;
        lodash3.uniqBy = uniqBy;
        lodash3.uniqWith = uniqWith;
        lodash3.unset = unset;
        lodash3.unzip = unzip;
        lodash3.unzipWith = unzipWith;
        lodash3.update = update;
        lodash3.updateWith = updateWith;
        lodash3.values = values;
        lodash3.valuesIn = valuesIn;
        lodash3.without = without;
        lodash3.words = words;
        lodash3.wrap = wrap;
        lodash3.xor = xor;
        lodash3.xorBy = xorBy;
        lodash3.xorWith = xorWith;
        lodash3.zip = zip;
        lodash3.zipObject = zipObject;
        lodash3.zipObjectDeep = zipObjectDeep;
        lodash3.zipWith = zipWith;
        lodash3.entries = toPairs;
        lodash3.entriesIn = toPairsIn;
        lodash3.extend = assignIn;
        lodash3.extendWith = assignInWith;
        mixin(lodash3, lodash3);
        lodash3.add = add;
        lodash3.attempt = attempt;
        lodash3.camelCase = camelCase;
        lodash3.capitalize = capitalize;
        lodash3.ceil = ceil;
        lodash3.clamp = clamp;
        lodash3.clone = clone;
        lodash3.cloneDeep = cloneDeep;
        lodash3.cloneDeepWith = cloneDeepWith;
        lodash3.cloneWith = cloneWith;
        lodash3.conformsTo = conformsTo;
        lodash3.deburr = deburr;
        lodash3.defaultTo = defaultTo;
        lodash3.divide = divide;
        lodash3.endsWith = endsWith;
        lodash3.eq = eq;
        lodash3.escape = escape;
        lodash3.escapeRegExp = escapeRegExp;
        lodash3.every = every;
        lodash3.find = find;
        lodash3.findIndex = findIndex;
        lodash3.findKey = findKey;
        lodash3.findLast = findLast;
        lodash3.findLastIndex = findLastIndex2;
        lodash3.findLastKey = findLastKey;
        lodash3.floor = floor;
        lodash3.forEach = forEach;
        lodash3.forEachRight = forEachRight;
        lodash3.forIn = forIn;
        lodash3.forInRight = forInRight;
        lodash3.forOwn = forOwn;
        lodash3.forOwnRight = forOwnRight;
        lodash3.get = get;
        lodash3.gt = gt;
        lodash3.gte = gte;
        lodash3.has = has;
        lodash3.hasIn = hasIn;
        lodash3.head = head;
        lodash3.identity = identity;
        lodash3.includes = includes;
        lodash3.indexOf = indexOf;
        lodash3.inRange = inRange2;
        lodash3.invoke = invoke;
        lodash3.isArguments = isArguments;
        lodash3.isArray = isArray;
        lodash3.isArrayBuffer = isArrayBuffer;
        lodash3.isArrayLike = isArrayLike;
        lodash3.isArrayLikeObject = isArrayLikeObject;
        lodash3.isBoolean = isBoolean;
        lodash3.isBuffer = isBuffer;
        lodash3.isDate = isDate;
        lodash3.isElement = isElement;
        lodash3.isEmpty = isEmpty;
        lodash3.isEqual = isEqual;
        lodash3.isEqualWith = isEqualWith;
        lodash3.isError = isError;
        lodash3.isFinite = isFinite2;
        lodash3.isFunction = isFunction2;
        lodash3.isInteger = isInteger;
        lodash3.isLength = isLength;
        lodash3.isMap = isMap;
        lodash3.isMatch = isMatch;
        lodash3.isMatchWith = isMatchWith;
        lodash3.isNaN = isNaN2;
        lodash3.isNative = isNative;
        lodash3.isNil = isNil;
        lodash3.isNull = isNull;
        lodash3.isNumber = isNumber;
        lodash3.isObject = isObject2;
        lodash3.isObjectLike = isObjectLike;
        lodash3.isPlainObject = isPlainObject;
        lodash3.isRegExp = isRegExp;
        lodash3.isSafeInteger = isSafeInteger;
        lodash3.isSet = isSet;
        lodash3.isString = isString2;
        lodash3.isSymbol = isSymbol;
        lodash3.isTypedArray = isTypedArray;
        lodash3.isUndefined = isUndefined;
        lodash3.isWeakMap = isWeakMap;
        lodash3.isWeakSet = isWeakSet;
        lodash3.join = join;
        lodash3.kebabCase = kebabCase;
        lodash3.last = last2;
        lodash3.lastIndexOf = lastIndexOf;
        lodash3.lowerCase = lowerCase;
        lodash3.lowerFirst = lowerFirst;
        lodash3.lt = lt;
        lodash3.lte = lte;
        lodash3.max = max;
        lodash3.maxBy = maxBy;
        lodash3.mean = mean;
        lodash3.meanBy = meanBy;
        lodash3.min = min;
        lodash3.minBy = minBy;
        lodash3.stubArray = stubArray;
        lodash3.stubFalse = stubFalse;
        lodash3.stubObject = stubObject;
        lodash3.stubString = stubString;
        lodash3.stubTrue = stubTrue;
        lodash3.multiply = multiply;
        lodash3.nth = nth;
        lodash3.noConflict = noConflict;
        lodash3.noop = noop;
        lodash3.now = now;
        lodash3.pad = pad;
        lodash3.padEnd = padEnd;
        lodash3.padStart = padStart;
        lodash3.parseInt = parseInt2;
        lodash3.random = random;
        lodash3.reduce = reduce;
        lodash3.reduceRight = reduceRight;
        lodash3.repeat = repeat3;
        lodash3.replace = replace;
        lodash3.result = result;
        lodash3.round = round;
        lodash3.runInContext = runInContext2;
        lodash3.sample = sample;
        lodash3.size = size;
        lodash3.snakeCase = snakeCase;
        lodash3.some = some;
        lodash3.sortedIndex = sortedIndex;
        lodash3.sortedIndexBy = sortedIndexBy;
        lodash3.sortedIndexOf = sortedIndexOf;
        lodash3.sortedLastIndex = sortedLastIndex;
        lodash3.sortedLastIndexBy = sortedLastIndexBy;
        lodash3.sortedLastIndexOf = sortedLastIndexOf;
        lodash3.startCase = startCase;
        lodash3.startsWith = startsWith;
        lodash3.subtract = subtract;
        lodash3.sum = sum;
        lodash3.sumBy = sumBy;
        lodash3.template = template9;
        lodash3.times = times;
        lodash3.toFinite = toFinite;
        lodash3.toInteger = toInteger;
        lodash3.toLength = toLength;
        lodash3.toLower = toLower;
        lodash3.toNumber = toNumber;
        lodash3.toSafeInteger = toSafeInteger;
        lodash3.toString = toString;
        lodash3.toUpper = toUpper;
        lodash3.trim = trim;
        lodash3.trimEnd = trimEnd;
        lodash3.trimStart = trimStart;
        lodash3.truncate = truncate;
        lodash3.unescape = unescape;
        lodash3.uniqueId = uniqueId2;
        lodash3.upperCase = upperCase;
        lodash3.upperFirst = upperFirst;
        lodash3.each = forEach;
        lodash3.eachRight = forEachRight;
        lodash3.first = head;
        mixin(lodash3, function() {
          var source = {};
          baseForOwn(lodash3, function(func, methodName) {
            if (!hasOwnProperty.call(lodash3.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash3.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash3[methodName].placeholder = lodash3;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash3[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash3.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash3, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash3.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash3[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash3.prototype.at = wrapperAt;
        lodash3.prototype.chain = wrapperChain;
        lodash3.prototype.commit = wrapperCommit;
        lodash3.prototype.next = wrapperNext;
        lodash3.prototype.plant = wrapperPlant;
        lodash3.prototype.reverse = wrapperReverse;
        lodash3.prototype.toJSON = lodash3.prototype.valueOf = lodash3.prototype.value = wrapperValue;
        lodash3.prototype.first = lodash3.prototype.head;
        if (symIterator) {
          lodash3.prototype[symIterator] = wrapperToIterator;
        }
        return lodash3;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// node_modules/@microsoft/fast-element/dist/esm/platform.js
var $global = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  try {
    return new Function("return this")();
  } catch (_a) {
    return {};
  }
}();
if ($global.trustedTypes === void 0) {
  $global.trustedTypes = { createPolicy: (n, r) => r };
}
var propConfig = {
  configurable: false,
  enumerable: false,
  writable: false
};
if ($global.FAST === void 0) {
  Reflect.defineProperty($global, "FAST", Object.assign({ value: /* @__PURE__ */ Object.create(null) }, propConfig));
}
var FAST = $global.FAST;
if (FAST.getById === void 0) {
  const storage = /* @__PURE__ */ Object.create(null);
  Reflect.defineProperty(FAST, "getById", Object.assign({ value(id, initialize) {
    let found = storage[id];
    if (found === void 0) {
      found = initialize ? storage[id] = initialize() : null;
    }
    return found;
  } }, propConfig));
}
var emptyArray = Object.freeze([]);
function createMetadataLocator() {
  const metadataLookup = /* @__PURE__ */ new WeakMap();
  return function(target) {
    let metadata = metadataLookup.get(target);
    if (metadata === void 0) {
      let currentTarget = Reflect.getPrototypeOf(target);
      while (metadata === void 0 && currentTarget !== null) {
        metadata = metadataLookup.get(currentTarget);
        currentTarget = Reflect.getPrototypeOf(currentTarget);
      }
      metadata = metadata === void 0 ? [] : metadata.slice(0);
      metadataLookup.set(target, metadata);
    }
    return metadata;
  };
}

// node_modules/@microsoft/fast-element/dist/esm/dom.js
var updateQueue = $global.FAST.getById(1, () => {
  const tasks = [];
  const pendingErrors = [];
  function throwFirstError() {
    if (pendingErrors.length) {
      throw pendingErrors.shift();
    }
  }
  function tryRunTask(task) {
    try {
      task.call();
    } catch (error) {
      pendingErrors.push(error);
      setTimeout(throwFirstError, 0);
    }
  }
  function process() {
    const capacity = 1024;
    let index = 0;
    while (index < tasks.length) {
      tryRunTask(tasks[index]);
      index++;
      if (index > capacity) {
        for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
          tasks[scan] = tasks[scan + index];
        }
        tasks.length -= index;
        index = 0;
      }
    }
    tasks.length = 0;
  }
  function enqueue(callable) {
    if (tasks.length < 1) {
      $global.requestAnimationFrame(process);
    }
    tasks.push(callable);
  }
  return Object.freeze({
    enqueue,
    process
  });
});
var fastHTMLPolicy = $global.trustedTypes.createPolicy("fast-html", {
  createHTML: (html2) => html2
});
var htmlPolicy = fastHTMLPolicy;
var marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
var _interpolationStart = `${marker}{`;
var _interpolationEnd = `}${marker}`;
var DOM = Object.freeze({
  /**
   * Indicates whether the DOM supports the adoptedStyleSheets feature.
   */
  supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
  /**
   * Sets the HTML trusted types policy used by the templating engine.
   * @param policy - The policy to set for HTML.
   * @remarks
   * This API can only be called once, for security reasons. It should be
   * called by the application developer at the start of their program.
   */
  setHTMLPolicy(policy) {
    if (htmlPolicy !== fastHTMLPolicy) {
      throw new Error("The HTML policy can only be set once.");
    }
    htmlPolicy = policy;
  },
  /**
   * Turns a string into trusted HTML using the configured trusted types policy.
   * @param html - The string to turn into trusted HTML.
   * @remarks
   * Used internally by the template engine when creating templates
   * and setting innerHTML.
   */
  createHTML(html2) {
    return htmlPolicy.createHTML(html2);
  },
  /**
   * Determines if the provided node is a template marker used by the runtime.
   * @param node - The node to test.
   */
  isMarker(node) {
    return node && node.nodeType === 8 && node.data.startsWith(marker);
  },
  /**
   * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
   * @param node - The marker node to extract the index from.
   */
  extractDirectiveIndexFromMarker(node) {
    return parseInt(node.data.replace(`${marker}:`, ""));
  },
  /**
   * Creates a placeholder string suitable for marking out a location *within*
   * an attribute value or HTML content.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by binding directives.
   */
  createInterpolationPlaceholder(index) {
    return `${_interpolationStart}${index}${_interpolationEnd}`;
  },
  /**
   * Creates a placeholder that manifests itself as an attribute on an
   * element.
   * @param attributeName - The name of the custom attribute.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
   */
  createCustomAttributePlaceholder(attributeName, index) {
    return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
  },
  /**
   * Creates a placeholder that manifests itself as a marker within the DOM structure.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by structural directives such as `repeat`.
   */
  createBlockPlaceholder(index) {
    return `<!--${marker}:${index}-->`;
  },
  /**
   * Schedules DOM update work in the next async batch.
   * @param callable - The callable function or object to queue.
   */
  queueUpdate: updateQueue.enqueue,
  /**
   * Immediately processes all work previously scheduled
   * through queueUpdate.
   * @remarks
   * This also forces nextUpdate promises
   * to resolve.
   */
  processUpdates: updateQueue.process,
  /**
   * Resolves with the next DOM update.
   */
  nextUpdate() {
    return new Promise(updateQueue.enqueue);
  },
  /**
   * Sets an attribute value on an element.
   * @param element - The element to set the attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is `null` or `undefined`, the attribute is removed, otherwise
   * it is set to the provided value using the standard `setAttribute` API.
   */
  setAttribute(element, attributeName, value) {
    if (value === null || value === void 0) {
      element.removeAttribute(attributeName);
    } else {
      element.setAttribute(attributeName, value);
    }
  },
  /**
   * Sets a boolean attribute value.
   * @param element - The element to set the boolean attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is true, the attribute is added; otherwise it is removed.
   */
  setBooleanAttribute(element, attributeName, value) {
    value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
  },
  /**
   * Removes all the child nodes of the provided parent node.
   * @param parent - The node to remove the children from.
   */
  removeChildNodes(parent) {
    for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
      parent.removeChild(child);
    }
  },
  /**
   * Creates a TreeWalker configured to walk a template fragment.
   * @param fragment - The fragment to walk.
   */
  createTemplateWalker(fragment) {
    return document.createTreeWalker(
      fragment,
      133,
      // element, text, comment
      null,
      false
    );
  }
});

// node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js
var SubscriberSet = class {
  /**
   * Creates an instance of SubscriberSet for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   * @param initialSubscriber - An initial subscriber to changes.
   */
  constructor(source, initialSubscriber) {
    this.sub1 = void 0;
    this.sub2 = void 0;
    this.spillover = void 0;
    this.source = source;
    this.sub1 = initialSubscriber;
  }
  /**
   * Checks whether the provided subscriber has been added to this set.
   * @param subscriber - The subscriber to test for inclusion in this set.
   */
  has(subscriber) {
    return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   */
  subscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.has(subscriber)) {
        return;
      }
      if (this.sub1 === void 0) {
        this.sub1 = subscriber;
        return;
      }
      if (this.sub2 === void 0) {
        this.sub2 = subscriber;
        return;
      }
      this.spillover = [this.sub1, this.sub2, subscriber];
      this.sub1 = void 0;
      this.sub2 = void 0;
    } else {
      const index = spillover.indexOf(subscriber);
      if (index === -1) {
        spillover.push(subscriber);
      }
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   */
  unsubscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.sub1 === subscriber) {
        this.sub1 = void 0;
      } else if (this.sub2 === subscriber) {
        this.sub2 = void 0;
      }
    } else {
      const index = spillover.indexOf(subscriber);
      if (index !== -1) {
        spillover.splice(index, 1);
      }
    }
  }
  /**
   * Notifies all subscribers.
   * @param args - Data passed along to subscribers during notification.
   */
  notify(args) {
    const spillover = this.spillover;
    const source = this.source;
    if (spillover === void 0) {
      const sub1 = this.sub1;
      const sub2 = this.sub2;
      if (sub1 !== void 0) {
        sub1.handleChange(source, args);
      }
      if (sub2 !== void 0) {
        sub2.handleChange(source, args);
      }
    } else {
      for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
      }
    }
  }
};
var PropertyChangeNotifier = class {
  /**
   * Creates an instance of PropertyChangeNotifier for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   */
  constructor(source) {
    this.subscribers = {};
    this.sourceSubscribers = null;
    this.source = source;
  }
  /**
   * Notifies all subscribers, based on the specified property.
   * @param propertyName - The property name, passed along to subscribers during notification.
   */
  notify(propertyName) {
    var _a;
    const subscribers = this.subscribers[propertyName];
    if (subscribers !== void 0) {
      subscribers.notify(propertyName);
    }
    (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
   */
  subscribe(subscriber, propertyToWatch) {
    var _a;
    if (propertyToWatch) {
      let subscribers = this.subscribers[propertyToWatch];
      if (subscribers === void 0) {
        this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
      }
      subscribers.subscribe(subscriber);
    } else {
      this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
      this.sourceSubscribers.subscribe(subscriber);
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
   */
  unsubscribe(subscriber, propertyToUnwatch) {
    var _a;
    if (propertyToUnwatch) {
      const subscribers = this.subscribers[propertyToUnwatch];
      if (subscribers !== void 0) {
        subscribers.unsubscribe(subscriber);
      }
    } else {
      (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
    }
  }
};

// node_modules/@microsoft/fast-element/dist/esm/observation/observable.js
var Observable = FAST.getById(2, () => {
  const volatileRegex = /(:|&&|\|\||if)/;
  const notifierLookup = /* @__PURE__ */ new WeakMap();
  const queueUpdate = DOM.queueUpdate;
  let watcher = void 0;
  let createArrayObserver = (array) => {
    throw new Error("Must call enableArrayObservation before observing arrays.");
  };
  function getNotifier(source) {
    let found = source.$fastController || notifierLookup.get(source);
    if (found === void 0) {
      if (Array.isArray(source)) {
        found = createArrayObserver(source);
      } else {
        notifierLookup.set(source, found = new PropertyChangeNotifier(source));
      }
    }
    return found;
  }
  const getAccessors = createMetadataLocator();
  class DefaultObservableAccessor {
    constructor(name) {
      this.name = name;
      this.field = `_${name}`;
      this.callback = `${name}Changed`;
    }
    getValue(source) {
      if (watcher !== void 0) {
        watcher.watch(source, this.name);
      }
      return source[this.field];
    }
    setValue(source, newValue) {
      const field = this.field;
      const oldValue = source[field];
      if (oldValue !== newValue) {
        source[field] = newValue;
        const callback = source[this.callback];
        if (typeof callback === "function") {
          callback.call(source, oldValue, newValue);
        }
        getNotifier(source).notify(this.name);
      }
    }
  }
  class BindingObserverImplementation extends SubscriberSet {
    constructor(binding, initialSubscriber, isVolatileBinding = false) {
      super(binding, initialSubscriber);
      this.binding = binding;
      this.isVolatileBinding = isVolatileBinding;
      this.needsRefresh = true;
      this.needsQueue = true;
      this.first = this;
      this.last = null;
      this.propertySource = void 0;
      this.propertyName = void 0;
      this.notifier = void 0;
      this.next = void 0;
    }
    observe(source, context) {
      if (this.needsRefresh && this.last !== null) {
        this.disconnect();
      }
      const previousWatcher = watcher;
      watcher = this.needsRefresh ? this : void 0;
      this.needsRefresh = this.isVolatileBinding;
      const result = this.binding(source, context);
      watcher = previousWatcher;
      return result;
    }
    disconnect() {
      if (this.last !== null) {
        let current = this.first;
        while (current !== void 0) {
          current.notifier.unsubscribe(this, current.propertyName);
          current = current.next;
        }
        this.last = null;
        this.needsRefresh = this.needsQueue = true;
      }
    }
    watch(propertySource, propertyName) {
      const prev = this.last;
      const notifier = getNotifier(propertySource);
      const current = prev === null ? this.first : {};
      current.propertySource = propertySource;
      current.propertyName = propertyName;
      current.notifier = notifier;
      notifier.subscribe(this, propertyName);
      if (prev !== null) {
        if (!this.needsRefresh) {
          let prevValue;
          watcher = void 0;
          prevValue = prev.propertySource[prev.propertyName];
          watcher = this;
          if (propertySource === prevValue) {
            this.needsRefresh = true;
          }
        }
        prev.next = current;
      }
      this.last = current;
    }
    handleChange() {
      if (this.needsQueue) {
        this.needsQueue = false;
        queueUpdate(this);
      }
    }
    call() {
      if (this.last !== null) {
        this.needsQueue = true;
        this.notify(this);
      }
    }
    records() {
      let next = this.first;
      return {
        next: () => {
          const current = next;
          if (current === void 0) {
            return { value: void 0, done: true };
          } else {
            next = next.next;
            return {
              value: current,
              done: false
            };
          }
        },
        [Symbol.iterator]: function() {
          return this;
        }
      };
    }
  }
  return Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
      createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier,
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
      if (watcher !== void 0) {
        watcher.watch(source, propertyName);
      }
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
      if (watcher !== void 0) {
        watcher.needsRefresh = true;
      }
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
      getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
      if (typeof nameOrAccessor === "string") {
        nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
      }
      getAccessors(target).push(nameOrAccessor);
      Reflect.defineProperty(target, nameOrAccessor.name, {
        enumerable: true,
        get: function() {
          return nameOrAccessor.getValue(this);
        },
        set: function(newValue) {
          nameOrAccessor.setValue(this, newValue);
        }
      });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors,
    /**
     * Creates a {@link BindingObserver} that can watch the
     * provided {@link Binding} for changes.
     * @param binding - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
      return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param binding - The binding to inspect.
     */
    isVolatileBinding(binding) {
      return volatileRegex.test(binding.toString());
    }
  });
});
function observable(target, nameOrAccessor) {
  Observable.defineProperty(target, nameOrAccessor);
}
function volatile(target, name, descriptor) {
  return Object.assign({}, descriptor, {
    get: function() {
      Observable.trackVolatile();
      return descriptor.get.apply(this);
    }
  });
}
var contextEvent = FAST.getById(3, () => {
  let current = null;
  return {
    get() {
      return current;
    },
    set(event) {
      current = event;
    }
  };
});
var ExecutionContext = class {
  constructor() {
    this.index = 0;
    this.length = 0;
    this.parent = null;
    this.parentContext = null;
  }
  /**
   * The current event within an event handler.
   */
  get event() {
    return contextEvent.get();
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an even index.
   */
  get isEven() {
    return this.index % 2 === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an odd index.
   */
  get isOdd() {
    return this.index % 2 !== 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the first item in the collection.
   */
  get isFirst() {
    return this.index === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is somewhere in the middle of the collection.
   */
  get isInMiddle() {
    return !this.isFirst && !this.isLast;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the last item in the collection.
   */
  get isLast() {
    return this.index === this.length - 1;
  }
  /**
   * Sets the event for the current execution context.
   * @param event - The event to set.
   * @internal
   */
  static setEvent(event) {
    contextEvent.set(event);
  }
};
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
var defaultExecutionContext = Object.seal(new ExecutionContext());

// node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js
var HTMLDirective = class {
  constructor() {
    this.targetIndex = 0;
  }
};
var TargetedHTMLDirective = class extends HTMLDirective {
  constructor() {
    super(...arguments);
    this.createPlaceholder = DOM.createInterpolationPlaceholder;
  }
};
var AttachedBehaviorHTMLDirective = class extends HTMLDirective {
  /**
   *
   * @param name - The name of the behavior; used as a custom attribute on the element.
   * @param behavior - The behavior to instantiate and attach to the element.
   * @param options - Options to pass to the behavior during creation.
   */
  constructor(name, behavior, options) {
    super();
    this.name = name;
    this.behavior = behavior;
    this.options = options;
  }
  /**
   * Creates a placeholder string based on the directive's index within the template.
   * @param index - The index of the directive within the template.
   * @remarks
   * Creates a custom attribute placeholder.
   */
  createPlaceholder(index) {
    return DOM.createCustomAttributePlaceholder(this.name, index);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   * @remarks
   * Creates an instance of the `behavior` type this directive was constructed with
   * and passes the target and options to that `behavior`'s constructor.
   */
  createBehavior(target) {
    return new this.behavior(target, this.options);
  }
};

// node_modules/@microsoft/fast-element/dist/esm/templating/binding.js
function normalBind(source, context) {
  this.source = source;
  this.context = context;
  if (this.bindingObserver === null) {
    this.bindingObserver = Observable.binding(this.binding, this, this.isBindingVolatile);
  }
  this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
  this.source = source;
  this.context = context;
  this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
}
function contentUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
  const view = this.target.$fastView;
  if (view !== void 0 && view.isComposed) {
    view.unbind();
    view.needsBindOnly = true;
  }
}
function triggerUnbind() {
  this.target.removeEventListener(this.targetName, this);
  this.source = null;
  this.context = null;
}
function updateAttributeTarget(value) {
  DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
  DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
  if (value === null || value === void 0) {
    value = "";
  }
  if (value.create) {
    this.target.textContent = "";
    let view = this.target.$fastView;
    if (view === void 0) {
      view = value.create();
    } else {
      if (this.target.$fastTemplate !== value) {
        if (view.isComposed) {
          view.remove();
          view.unbind();
        }
        view = value.create();
      }
    }
    if (!view.isComposed) {
      view.isComposed = true;
      view.bind(this.source, this.context);
      view.insertBefore(this.target);
      this.target.$fastView = view;
      this.target.$fastTemplate = value;
    } else if (view.needsBindOnly) {
      view.needsBindOnly = false;
      view.bind(this.source, this.context);
    }
  } else {
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
      view.isComposed = false;
      view.remove();
      if (view.needsBindOnly) {
        view.needsBindOnly = false;
      } else {
        view.unbind();
      }
    }
    this.target.textContent = value;
  }
}
function updatePropertyTarget(value) {
  this.target[this.targetName] = value;
}
function updateClassTarget(value) {
  const classVersions = this.classVersions || /* @__PURE__ */ Object.create(null);
  const target = this.target;
  let version = this.version || 0;
  if (value !== null && value !== void 0 && value.length) {
    const names = value.split(/\s+/);
    for (let i = 0, ii = names.length; i < ii; ++i) {
      const currentName = names[i];
      if (currentName === "") {
        continue;
      }
      classVersions[currentName] = version;
      target.classList.add(currentName);
    }
  }
  this.classVersions = classVersions;
  this.version = version + 1;
  if (version === 0) {
    return;
  }
  version -= 1;
  for (const name in classVersions) {
    if (classVersions[name] === version) {
      target.classList.remove(name);
    }
  }
}
var HTMLBindingDirective = class extends TargetedHTMLDirective {
  /**
   * Creates an instance of BindingDirective.
   * @param binding - A binding that returns the data used to update the DOM.
   */
  constructor(binding) {
    super();
    this.binding = binding;
    this.bind = normalBind;
    this.unbind = normalUnbind;
    this.updateTarget = updateAttributeTarget;
    this.isBindingVolatile = Observable.isVolatileBinding(this.binding);
  }
  /**
   * Gets/sets the name of the attribute or property that this
   * binding is targeting.
   */
  get targetName() {
    return this.originalTargetName;
  }
  set targetName(value) {
    this.originalTargetName = value;
    if (value === void 0) {
      return;
    }
    switch (value[0]) {
      case ":":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updatePropertyTarget;
        if (this.cleanedTargetName === "innerHTML") {
          const binding = this.binding;
          this.binding = (s, c) => DOM.createHTML(binding(s, c));
        }
        break;
      case "?":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updateBooleanAttributeTarget;
        break;
      case "@":
        this.cleanedTargetName = value.substr(1);
        this.bind = triggerBind;
        this.unbind = triggerUnbind;
        break;
      default:
        this.cleanedTargetName = value;
        if (value === "class") {
          this.updateTarget = updateClassTarget;
        }
        break;
    }
  }
  /**
   * Makes this binding target the content of an element rather than
   * a particular attribute or property.
   */
  targetAtContent() {
    this.updateTarget = updateContentTarget;
    this.unbind = contentUnbind;
  }
  /**
   * Creates the runtime BindingBehavior instance based on the configuration
   * information stored in the BindingDirective.
   * @param target - The target node that the binding behavior should attach to.
   */
  createBehavior(target) {
    return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
  }
};
var BindingBehavior = class {
  /**
   * Creates an instance of BindingBehavior.
   * @param target - The target of the data updates.
   * @param binding - The binding that returns the latest value for an update.
   * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
   * @param bind - The operation to perform during binding.
   * @param unbind - The operation to perform during unbinding.
   * @param updateTarget - The operation to perform when updating.
   * @param targetName - The name of the target attribute or property to update.
   */
  constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
    this.source = null;
    this.context = null;
    this.bindingObserver = null;
    this.target = target;
    this.binding = binding;
    this.isBindingVolatile = isBindingVolatile;
    this.bind = bind;
    this.unbind = unbind;
    this.updateTarget = updateTarget;
    this.targetName = targetName;
  }
  /** @internal */
  handleChange() {
    this.updateTarget(this.bindingObserver.observe(this.source, this.context));
  }
  /** @internal */
  handleEvent(event) {
    ExecutionContext.setEvent(event);
    const result = this.binding(this.source, this.context);
    ExecutionContext.setEvent(null);
    if (result !== true) {
      event.preventDefault();
    }
  }
};

// node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js
var sharedContext = null;
var CompilationContext = class _CompilationContext {
  addFactory(factory) {
    factory.targetIndex = this.targetIndex;
    this.behaviorFactories.push(factory);
  }
  captureContentBinding(directive) {
    directive.targetAtContent();
    this.addFactory(directive);
  }
  reset() {
    this.behaviorFactories = [];
    this.targetIndex = -1;
  }
  release() {
    sharedContext = this;
  }
  static borrow(directives) {
    const shareable = sharedContext || new _CompilationContext();
    shareable.directives = directives;
    shareable.reset();
    sharedContext = null;
    return shareable;
  }
};
function createAggregateBinding(parts) {
  if (parts.length === 1) {
    return parts[0];
  }
  let targetName;
  const partCount = parts.length;
  const finalParts = parts.map((x) => {
    if (typeof x === "string") {
      return () => x;
    }
    targetName = x.targetName || targetName;
    return x.binding;
  });
  const binding = (scope, context) => {
    let output = "";
    for (let i = 0; i < partCount; ++i) {
      output += finalParts[i](scope, context);
    }
    return output;
  };
  const directive = new HTMLBindingDirective(binding);
  directive.targetName = targetName;
  return directive;
}
var interpolationEndLength = _interpolationEnd.length;
function parseContent(context, value) {
  const valueParts = value.split(_interpolationStart);
  if (valueParts.length === 1) {
    return null;
  }
  const bindingParts = [];
  for (let i = 0, ii = valueParts.length; i < ii; ++i) {
    const current = valueParts[i];
    const index = current.indexOf(_interpolationEnd);
    let literal;
    if (index === -1) {
      literal = current;
    } else {
      const directiveIndex = parseInt(current.substring(0, index));
      bindingParts.push(context.directives[directiveIndex]);
      literal = current.substring(index + interpolationEndLength);
    }
    if (literal !== "") {
      bindingParts.push(literal);
    }
  }
  return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
  const attributes = node.attributes;
  for (let i = 0, ii = attributes.length; i < ii; ++i) {
    const attr2 = attributes[i];
    const attrValue = attr2.value;
    const parseResult = parseContent(context, attrValue);
    let result = null;
    if (parseResult === null) {
      if (includeBasicValues) {
        result = new HTMLBindingDirective(() => attrValue);
        result.targetName = attr2.name;
      }
    } else {
      result = createAggregateBinding(parseResult);
    }
    if (result !== null) {
      node.removeAttributeNode(attr2);
      i--;
      ii--;
      context.addFactory(result);
    }
  }
}
function compileContent(context, node, walker) {
  const parseResult = parseContent(context, node.textContent);
  if (parseResult !== null) {
    let lastNode = node;
    for (let i = 0, ii = parseResult.length; i < ii; ++i) {
      const currentPart = parseResult[i];
      const currentNode = i === 0 ? node : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
      if (typeof currentPart === "string") {
        currentNode.textContent = currentPart;
      } else {
        currentNode.textContent = " ";
        context.captureContentBinding(currentPart);
      }
      lastNode = currentNode;
      context.targetIndex++;
      if (currentNode !== node) {
        walker.nextNode();
      }
    }
    context.targetIndex--;
  }
}
function compileTemplate(template9, directives) {
  const fragment = template9.content;
  document.adoptNode(fragment);
  const context = CompilationContext.borrow(directives);
  compileAttributes(context, template9, true);
  const hostBehaviorFactories = context.behaviorFactories;
  context.reset();
  const walker = DOM.createTemplateWalker(fragment);
  let node;
  while (node = walker.nextNode()) {
    context.targetIndex++;
    switch (node.nodeType) {
      case 1:
        compileAttributes(context, node);
        break;
      case 3:
        compileContent(context, node, walker);
        break;
      case 8:
        if (DOM.isMarker(node)) {
          context.addFactory(directives[DOM.extractDirectiveIndexFromMarker(node)]);
        }
    }
  }
  let targetOffset = 0;
  if (
    // If the first node in a fragment is a marker, that means it's an unstable first node,
    // because something like a when, repeat, etc. could add nodes before the marker.
    // To mitigate this, we insert a stable first node. However, if we insert a node,
    // that will alter the result of the TreeWalker. So, we also need to offset the target index.
    DOM.isMarker(fragment.firstChild) || // Or if there is only one node and a directive, it means the template's content
    // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
    // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
    fragment.childNodes.length === 1 && directives.length
  ) {
    fragment.insertBefore(document.createComment(""), fragment.firstChild);
    targetOffset = -1;
  }
  const viewBehaviorFactories = context.behaviorFactories;
  context.release();
  return {
    fragment,
    viewBehaviorFactories,
    hostBehaviorFactories,
    targetOffset
  };
}

// node_modules/@microsoft/fast-element/dist/esm/templating/view.js
var range = document.createRange();
var HTMLView = class {
  /**
   * Constructs an instance of HTMLView.
   * @param fragment - The html fragment that contains the nodes for this view.
   * @param behaviors - The behaviors to be applied to this view.
   */
  constructor(fragment, behaviors) {
    this.fragment = fragment;
    this.behaviors = behaviors;
    this.source = null;
    this.context = null;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
  }
  /**
   * Appends the view's DOM nodes to the referenced node.
   * @param node - The parent node to append the view's DOM nodes to.
   */
  appendTo(node) {
    node.appendChild(this.fragment);
  }
  /**
   * Inserts the view's DOM nodes before the referenced node.
   * @param node - The node to insert the view's DOM before.
   */
  insertBefore(node) {
    if (this.fragment.hasChildNodes()) {
      node.parentNode.insertBefore(this.fragment, node);
    } else {
      const end = this.lastChild;
      if (node.previousSibling === end)
        return;
      const parentNode = node.parentNode;
      let current = this.firstChild;
      let next;
      while (current !== end) {
        next = current.nextSibling;
        parentNode.insertBefore(current, node);
        current = next;
      }
      parentNode.insertBefore(end, node);
    }
  }
  /**
   * Removes the view's DOM nodes.
   * The nodes are not disposed and the view can later be re-inserted.
   */
  remove() {
    const fragment = this.fragment;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      fragment.appendChild(current);
      current = next;
    }
    fragment.appendChild(end);
  }
  /**
   * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
   * Once a view has been disposed, it cannot be inserted or bound again.
   */
  dispose() {
    const parent = this.firstChild.parentNode;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      parent.removeChild(current);
      current = next;
    }
    parent.removeChild(end);
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii = behaviors.length; i < ii; ++i) {
      behaviors[i].unbind(oldSource);
    }
  }
  /**
   * Binds a view's behaviors to its binding source.
   * @param source - The binding source for the view's binding behaviors.
   * @param context - The execution context to run the behaviors within.
   */
  bind(source, context) {
    const behaviors = this.behaviors;
    if (this.source === source) {
      return;
    } else if (this.source !== null) {
      const oldSource = this.source;
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        const current = behaviors[i];
        current.unbind(oldSource);
        current.bind(source, context);
      }
    } else {
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].bind(source, context);
      }
    }
  }
  /**
   * Unbinds a view's behaviors from its binding source.
   */
  unbind() {
    if (this.source === null) {
      return;
    }
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii = behaviors.length; i < ii; ++i) {
      behaviors[i].unbind(oldSource);
    }
    this.source = null;
  }
  /**
   * Efficiently disposes of a contiguous range of synthetic view instances.
   * @param views - A contiguous range of views to be disposed.
   */
  static disposeContiguousBatch(views) {
    if (views.length === 0) {
      return;
    }
    range.setStartBefore(views[0].firstChild);
    range.setEndAfter(views[views.length - 1].lastChild);
    range.deleteContents();
    for (let i = 0, ii = views.length; i < ii; ++i) {
      const view = views[i];
      const behaviors = view.behaviors;
      const oldSource = view.source;
      for (let j = 0, jj = behaviors.length; j < jj; ++j) {
        behaviors[j].unbind(oldSource);
      }
    }
  }
};

// node_modules/@microsoft/fast-element/dist/esm/templating/template.js
var ViewTemplate = class {
  /**
   * Creates an instance of ViewTemplate.
   * @param html - The html representing what this template will instantiate, including placeholders for directives.
   * @param directives - The directives that will be connected to placeholders in the html.
   */
  constructor(html2, directives) {
    this.behaviorCount = 0;
    this.hasHostBehaviors = false;
    this.fragment = null;
    this.targetOffset = 0;
    this.viewBehaviorFactories = null;
    this.hostBehaviorFactories = null;
    this.html = html2;
    this.directives = directives;
  }
  /**
   * Creates an HTMLView instance based on this template definition.
   * @param hostBindingTarget - The element that host behaviors will be bound to.
   */
  create(hostBindingTarget) {
    if (this.fragment === null) {
      let template9;
      const html2 = this.html;
      if (typeof html2 === "string") {
        template9 = document.createElement("template");
        template9.innerHTML = DOM.createHTML(html2);
        const fec = template9.content.firstElementChild;
        if (fec !== null && fec.tagName === "TEMPLATE") {
          template9 = fec;
        }
      } else {
        template9 = html2;
      }
      const result = compileTemplate(template9, this.directives);
      this.fragment = result.fragment;
      this.viewBehaviorFactories = result.viewBehaviorFactories;
      this.hostBehaviorFactories = result.hostBehaviorFactories;
      this.targetOffset = result.targetOffset;
      this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
      this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
    }
    const fragment = this.fragment.cloneNode(true);
    const viewFactories = this.viewBehaviorFactories;
    const behaviors = new Array(this.behaviorCount);
    const walker = DOM.createTemplateWalker(fragment);
    let behaviorIndex = 0;
    let targetIndex = this.targetOffset;
    let node = walker.nextNode();
    for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
      const factory = viewFactories[behaviorIndex];
      const factoryIndex = factory.targetIndex;
      while (node !== null) {
        if (targetIndex === factoryIndex) {
          behaviors[behaviorIndex] = factory.createBehavior(node);
          break;
        } else {
          node = walker.nextNode();
          targetIndex++;
        }
      }
    }
    if (this.hasHostBehaviors) {
      const hostFactories = this.hostBehaviorFactories;
      for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
        behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
      }
    }
    return new HTMLView(fragment, behaviors);
  }
  /**
   * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
   * @param source - The data source to bind the template to.
   * @param host - The Element where the template will be rendered.
   * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
   * host that the template is being attached to.
   */
  render(source, host, hostBindingTarget) {
    if (typeof host === "string") {
      host = document.getElementById(host);
    }
    if (hostBindingTarget === void 0) {
      hostBindingTarget = host;
    }
    const view = this.create(hostBindingTarget);
    view.bind(source, defaultExecutionContext);
    view.appendTo(host);
    return view;
  }
};
var lastAttributeNameRegex = (
  /* eslint-disable-next-line no-control-regex */
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
function html(strings, ...values) {
  const directives = [];
  let html2 = "";
  for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
    const currentString = strings[i];
    let value = values[i];
    html2 += currentString;
    if (value instanceof ViewTemplate) {
      const template9 = value;
      value = () => template9;
    }
    if (typeof value === "function") {
      value = new HTMLBindingDirective(value);
    }
    if (value instanceof TargetedHTMLDirective) {
      const match = lastAttributeNameRegex.exec(currentString);
      if (match !== null) {
        value.targetName = match[2];
      }
    }
    if (value instanceof HTMLDirective) {
      html2 += value.createPlaceholder(directives.length);
      directives.push(value);
    } else {
      html2 += value;
    }
  }
  html2 += strings[strings.length - 1];
  return new ViewTemplate(html2, directives);
}

// node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js
var ElementStyles = class {
  constructor() {
    this.targets = /* @__PURE__ */ new WeakSet();
  }
  /** @internal */
  addStylesTo(target) {
    this.targets.add(target);
  }
  /** @internal */
  removeStylesFrom(target) {
    this.targets.delete(target);
  }
  /** @internal */
  isAttachedTo(target) {
    return this.targets.has(target);
  }
  /**
   * Associates behaviors with this set of styles.
   * @param behaviors - The behaviors to associate.
   */
  withBehaviors(...behaviors) {
    this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
    return this;
  }
};
ElementStyles.create = (() => {
  if (DOM.supportsAdoptedStyleSheets) {
    const styleSheetCache = /* @__PURE__ */ new Map();
    return (styles9) => (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      new AdoptedStyleSheetsStyles(styles9, styleSheetCache)
    );
  }
  return (styles9) => new StyleElementStyles(styles9);
})();
function reduceStyles(styles9) {
  return styles9.map((x) => x instanceof ElementStyles ? reduceStyles(x.styles) : [x]).reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles9) {
  return styles9.map((x) => x instanceof ElementStyles ? x.behaviors : null).reduce((prev, curr) => {
    if (curr === null) {
      return prev;
    }
    if (prev === null) {
      prev = [];
    }
    return prev.concat(curr);
  }, null);
}
var addAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...sheets];
};
var removeAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sheets.indexOf(x) === -1);
};
if (DOM.supportsAdoptedStyleSheets) {
  try {
    document.adoptedStyleSheets.push();
    document.adoptedStyleSheets.splice();
    addAdoptedStyleSheets = (target, sheets) => {
      target.adoptedStyleSheets.push(...sheets);
    };
    removeAdoptedStyleSheets = (target, sheets) => {
      for (const sheet of sheets) {
        const index = target.adoptedStyleSheets.indexOf(sheet);
        if (index !== -1) {
          target.adoptedStyleSheets.splice(index, 1);
        }
      }
    };
  } catch (e) {
  }
}
var AdoptedStyleSheetsStyles = class extends ElementStyles {
  constructor(styles9, styleSheetCache) {
    super();
    this.styles = styles9;
    this.styleSheetCache = styleSheetCache;
    this._styleSheets = void 0;
    this.behaviors = reduceBehaviors(styles9);
  }
  get styleSheets() {
    if (this._styleSheets === void 0) {
      const styles9 = this.styles;
      const styleSheetCache = this.styleSheetCache;
      this._styleSheets = reduceStyles(styles9).map((x) => {
        if (x instanceof CSSStyleSheet) {
          return x;
        }
        let sheet = styleSheetCache.get(x);
        if (sheet === void 0) {
          sheet = new CSSStyleSheet();
          sheet.replaceSync(x);
          styleSheetCache.set(x, sheet);
        }
        return sheet;
      });
    }
    return this._styleSheets;
  }
  addStylesTo(target) {
    addAdoptedStyleSheets(target, this.styleSheets);
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    removeAdoptedStyleSheets(target, this.styleSheets);
    super.removeStylesFrom(target);
  }
};
var styleClassId = 0;
function getNextStyleClass() {
  return `fast-style-class-${++styleClassId}`;
}
var StyleElementStyles = class extends ElementStyles {
  constructor(styles9) {
    super();
    this.styles = styles9;
    this.behaviors = null;
    this.behaviors = reduceBehaviors(styles9);
    this.styleSheets = reduceStyles(styles9);
    this.styleClass = getNextStyleClass();
  }
  addStylesTo(target) {
    const styleSheets = this.styleSheets;
    const styleClass = this.styleClass;
    target = this.normalizeTarget(target);
    for (let i = 0; i < styleSheets.length; i++) {
      const element = document.createElement("style");
      element.innerHTML = styleSheets[i];
      element.className = styleClass;
      target.append(element);
    }
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    target = this.normalizeTarget(target);
    const styles9 = target.querySelectorAll(`.${this.styleClass}`);
    for (let i = 0, ii = styles9.length; i < ii; ++i) {
      target.removeChild(styles9[i]);
    }
    super.removeStylesFrom(target);
  }
  isAttachedTo(target) {
    return super.isAttachedTo(this.normalizeTarget(target));
  }
  normalizeTarget(target) {
    return target === document ? document.body : target;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/components/attributes.js
var AttributeConfiguration = Object.freeze({
  /**
   * Locates all attribute configurations associated with a type.
   */
  locate: createMetadataLocator()
});
var booleanConverter = {
  toView(value) {
    return value ? "true" : "false";
  },
  fromView(value) {
    if (value === null || value === void 0 || value === "false" || value === false || value === 0) {
      return false;
    }
    return true;
  }
};
var nullableNumberConverter = {
  toView(value) {
    if (value === null || value === void 0) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number.toString();
  },
  fromView(value) {
    if (value === null || value === void 0) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number;
  }
};
var AttributeDefinition = class _AttributeDefinition {
  /**
   * Creates an instance of AttributeDefinition.
   * @param Owner - The class constructor that owns this attribute.
   * @param name - The name of the property associated with the attribute.
   * @param attribute - The name of the attribute in HTML.
   * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
   * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
   * to convert values to and from a DOM string.
   */
  constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
    this.guards = /* @__PURE__ */ new Set();
    this.Owner = Owner;
    this.name = name;
    this.attribute = attribute;
    this.mode = mode;
    this.converter = converter;
    this.fieldName = `_${name}`;
    this.callbackName = `${name}Changed`;
    this.hasCallback = this.callbackName in Owner.prototype;
    if (mode === "boolean" && converter === void 0) {
      this.converter = booleanConverter;
    }
  }
  /**
   * Sets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   * @param value - The value to set the attribute/property to.
   */
  setValue(source, newValue) {
    const oldValue = source[this.fieldName];
    const converter = this.converter;
    if (converter !== void 0) {
      newValue = converter.fromView(newValue);
    }
    if (oldValue !== newValue) {
      source[this.fieldName] = newValue;
      this.tryReflectToAttribute(source);
      if (this.hasCallback) {
        source[this.callbackName](oldValue, newValue);
      }
      source.$fastController.notify(this.name);
    }
  }
  /**
   * Gets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   */
  getValue(source) {
    Observable.track(source, this.name);
    return source[this.fieldName];
  }
  /** @internal */
  onAttributeChangedCallback(element, value) {
    if (this.guards.has(element)) {
      return;
    }
    this.guards.add(element);
    this.setValue(element, value);
    this.guards.delete(element);
  }
  tryReflectToAttribute(element) {
    const mode = this.mode;
    const guards = this.guards;
    if (guards.has(element) || mode === "fromView") {
      return;
    }
    DOM.queueUpdate(() => {
      guards.add(element);
      const latestValue = element[this.fieldName];
      switch (mode) {
        case "reflect":
          const converter = this.converter;
          DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
          break;
        case "boolean":
          DOM.setBooleanAttribute(element, this.attribute, latestValue);
          break;
      }
      guards.delete(element);
    });
  }
  /**
   * Collects all attribute definitions associated with the owner.
   * @param Owner - The class constructor to collect attribute for.
   * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
   * @internal
   */
  static collect(Owner, ...attributeLists) {
    const attributes = [];
    attributeLists.push(AttributeConfiguration.locate(Owner));
    for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
      const list = attributeLists[i];
      if (list === void 0) {
        continue;
      }
      for (let j = 0, jj = list.length; j < jj; ++j) {
        const config = list[j];
        if (typeof config === "string") {
          attributes.push(new _AttributeDefinition(Owner, config));
        } else {
          attributes.push(new _AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
        }
      }
    }
    return attributes;
  }
};
function attr(configOrTarget, prop) {
  let config;
  function decorator($target, $prop) {
    if (arguments.length > 1) {
      config.property = $prop;
    }
    AttributeConfiguration.locate($target.constructor).push(config);
  }
  if (arguments.length > 1) {
    config = {};
    decorator(configOrTarget, prop);
    return;
  }
  config = configOrTarget === void 0 ? {} : configOrTarget;
  return decorator;
}

// node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js
var defaultShadowOptions = { mode: "open" };
var defaultElementOptions = {};
var fastRegistry = FAST.getById(4, () => {
  const typeToDefinition = /* @__PURE__ */ new Map();
  return Object.freeze({
    register(definition) {
      if (typeToDefinition.has(definition.type)) {
        return false;
      }
      typeToDefinition.set(definition.type, definition);
      return true;
    },
    getByType(key) {
      return typeToDefinition.get(key);
    }
  });
});
var FASTElementDefinition = class {
  /**
   * Creates an instance of FASTElementDefinition.
   * @param type - The type this definition is being created for.
   * @param nameOrConfig - The name of the element to define or a config object
   * that describes the element to define.
   */
  constructor(type, nameOrConfig = type.definition) {
    if (typeof nameOrConfig === "string") {
      nameOrConfig = { name: nameOrConfig };
    }
    this.type = type;
    this.name = nameOrConfig.name;
    this.template = nameOrConfig.template;
    const attributes = AttributeDefinition.collect(type, nameOrConfig.attributes);
    const observedAttributes = new Array(attributes.length);
    const propertyLookup = {};
    const attributeLookup = {};
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
      const current = attributes[i];
      observedAttributes[i] = current.attribute;
      propertyLookup[current.name] = current;
      attributeLookup[current.attribute] = current;
    }
    this.attributes = attributes;
    this.observedAttributes = observedAttributes;
    this.propertyLookup = propertyLookup;
    this.attributeLookup = attributeLookup;
    this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
    this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
    this.styles = nameOrConfig.styles === void 0 ? void 0 : Array.isArray(nameOrConfig.styles) ? ElementStyles.create(nameOrConfig.styles) : nameOrConfig.styles instanceof ElementStyles ? nameOrConfig.styles : ElementStyles.create([nameOrConfig.styles]);
  }
  /**
   * Indicates if this element has been defined in at least one registry.
   */
  get isDefined() {
    return !!fastRegistry.getByType(this.type);
  }
  /**
   * Defines a custom element based on this definition.
   * @param registry - The element registry to define the element in.
   */
  define(registry = customElements) {
    const type = this.type;
    if (fastRegistry.register(this)) {
      const attributes = this.attributes;
      const proto = type.prototype;
      for (let i = 0, ii = attributes.length; i < ii; ++i) {
        Observable.defineProperty(proto, attributes[i]);
      }
      Reflect.defineProperty(type, "observedAttributes", {
        value: this.observedAttributes,
        enumerable: true
      });
    }
    if (!registry.get(this.name)) {
      registry.define(this.name, type, this.elementOptions);
    }
    return this;
  }
};
FASTElementDefinition.forType = fastRegistry.getByType;

// node_modules/@microsoft/fast-element/dist/esm/components/controller.js
var shadowRoots = /* @__PURE__ */ new WeakMap();
var defaultEventOptions = {
  bubbles: true,
  composed: true,
  cancelable: true
};
function getShadowRoot(element) {
  return element.shadowRoot || shadowRoots.get(element) || null;
}
var Controller = class _Controller extends PropertyChangeNotifier {
  /**
   * Creates a Controller to control the specified element.
   * @param element - The element to be controlled by this controller.
   * @param definition - The element definition metadata that instructs this
   * controller in how to handle rendering and other platform integrations.
   * @internal
   */
  constructor(element, definition) {
    super(element);
    this.boundObservables = null;
    this.behaviors = null;
    this.needsInitialization = true;
    this._template = null;
    this._styles = null;
    this._isConnected = false;
    this.$fastController = this;
    this.view = null;
    this.element = element;
    this.definition = definition;
    const shadowOptions = definition.shadowOptions;
    if (shadowOptions !== void 0) {
      const shadowRoot = element.attachShadow(shadowOptions);
      if (shadowOptions.mode === "closed") {
        shadowRoots.set(element, shadowRoot);
      }
    }
    const accessors = Observable.getAccessors(element);
    if (accessors.length > 0) {
      const boundObservables = this.boundObservables = /* @__PURE__ */ Object.create(null);
      for (let i = 0, ii = accessors.length; i < ii; ++i) {
        const propertyName = accessors[i].name;
        const value = element[propertyName];
        if (value !== void 0) {
          delete element[propertyName];
          boundObservables[propertyName] = value;
        }
      }
    }
  }
  /**
   * Indicates whether or not the custom element has been
   * connected to the document.
   */
  get isConnected() {
    Observable.track(this, "isConnected");
    return this._isConnected;
  }
  setIsConnected(value) {
    this._isConnected = value;
    Observable.notify(this, "isConnected");
  }
  /**
   * Gets/sets the template used to render the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get template() {
    return this._template;
  }
  set template(value) {
    if (this._template === value) {
      return;
    }
    this._template = value;
    if (!this.needsInitialization) {
      this.renderTemplate(value);
    }
  }
  /**
   * Gets/sets the primary styles used for the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get styles() {
    return this._styles;
  }
  set styles(value) {
    if (this._styles === value) {
      return;
    }
    if (this._styles !== null) {
      this.removeStyles(this._styles);
    }
    this._styles = value;
    if (!this.needsInitialization && value !== null) {
      this.addStyles(value);
    }
  }
  /**
   * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
   * @param styles - The styles to add.
   */
  addStyles(styles9) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles9 instanceof HTMLStyleElement) {
      target.append(styles9);
    } else if (!styles9.isAttachedTo(target)) {
      const sourceBehaviors = styles9.behaviors;
      styles9.addStylesTo(target);
      if (sourceBehaviors !== null) {
        this.addBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
   * @param styles - the styles to remove.
   */
  removeStyles(styles9) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles9 instanceof HTMLStyleElement) {
      target.removeChild(styles9);
    } else if (styles9.isAttachedTo(target)) {
      const sourceBehaviors = styles9.behaviors;
      styles9.removeStylesFrom(target);
      if (sourceBehaviors !== null) {
        this.removeBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Adds behaviors to this element.
   * @param behaviors - The behaviors to add.
   */
  addBehaviors(behaviors) {
    const targetBehaviors = this.behaviors || (this.behaviors = /* @__PURE__ */ new Map());
    const length = behaviors.length;
    const behaviorsToBind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
      } else {
        targetBehaviors.set(behavior, 1);
        behaviorsToBind.push(behavior);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToBind.length; ++i) {
        behaviorsToBind[i].bind(element, defaultExecutionContext);
      }
    }
  }
  /**
   * Removes behaviors from this element.
   * @param behaviors - The behaviors to remove.
   * @param force - Forces unbinding of behaviors.
   */
  removeBehaviors(behaviors, force = false) {
    const targetBehaviors = this.behaviors;
    if (targetBehaviors === null) {
      return;
    }
    const length = behaviors.length;
    const behaviorsToUnbind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        const count = targetBehaviors.get(behavior) - 1;
        count === 0 || force ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior) : targetBehaviors.set(behavior, count);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToUnbind.length; ++i) {
        behaviorsToUnbind[i].unbind(element);
      }
    }
  }
  /**
   * Runs connected lifecycle behavior on the associated element.
   */
  onConnectedCallback() {
    if (this._isConnected) {
      return;
    }
    const element = this.element;
    if (this.needsInitialization) {
      this.finishInitialization();
    } else if (this.view !== null) {
      this.view.bind(element, defaultExecutionContext);
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      for (const [behavior] of behaviors) {
        behavior.bind(element, defaultExecutionContext);
      }
    }
    this.setIsConnected(true);
  }
  /**
   * Runs disconnected lifecycle behavior on the associated element.
   */
  onDisconnectedCallback() {
    if (!this._isConnected) {
      return;
    }
    this.setIsConnected(false);
    const view = this.view;
    if (view !== null) {
      view.unbind();
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      const element = this.element;
      for (const [behavior] of behaviors) {
        behavior.unbind(element);
      }
    }
  }
  /**
   * Runs the attribute changed callback for the associated element.
   * @param name - The name of the attribute that changed.
   * @param oldValue - The previous value of the attribute.
   * @param newValue - The new value of the attribute.
   */
  onAttributeChangedCallback(name, oldValue, newValue) {
    const attrDef = this.definition.attributeLookup[name];
    if (attrDef !== void 0) {
      attrDef.onAttributeChangedCallback(this.element, newValue);
    }
  }
  /**
   * Emits a custom HTML event.
   * @param type - The type name of the event.
   * @param detail - The event detail object to send with the event.
   * @param options - The event options. By default bubbles and composed.
   * @remarks
   * Only emits events if connected.
   */
  emit(type, detail, options) {
    if (this._isConnected) {
      return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
    }
    return false;
  }
  finishInitialization() {
    const element = this.element;
    const boundObservables = this.boundObservables;
    if (boundObservables !== null) {
      const propertyNames = Object.keys(boundObservables);
      for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
        const propertyName = propertyNames[i];
        element[propertyName] = boundObservables[propertyName];
      }
      this.boundObservables = null;
    }
    const definition = this.definition;
    if (this._template === null) {
      if (this.element.resolveTemplate) {
        this._template = this.element.resolveTemplate();
      } else if (definition.template) {
        this._template = definition.template || null;
      }
    }
    if (this._template !== null) {
      this.renderTemplate(this._template);
    }
    if (this._styles === null) {
      if (this.element.resolveStyles) {
        this._styles = this.element.resolveStyles();
      } else if (definition.styles) {
        this._styles = definition.styles || null;
      }
    }
    if (this._styles !== null) {
      this.addStyles(this._styles);
    }
    this.needsInitialization = false;
  }
  renderTemplate(template9) {
    const element = this.element;
    const host = getShadowRoot(element) || element;
    if (this.view !== null) {
      this.view.dispose();
      this.view = null;
    } else if (!this.needsInitialization) {
      DOM.removeChildNodes(host);
    }
    if (template9) {
      this.view = template9.render(element, host, element);
    }
  }
  /**
   * Locates or creates a controller for the specified element.
   * @param element - The element to return the controller for.
   * @remarks
   * The specified element must have a {@link FASTElementDefinition}
   * registered either through the use of the {@link customElement}
   * decorator or a call to `FASTElement.define`.
   */
  static forCustomElement(element) {
    const controller = element.$fastController;
    if (controller !== void 0) {
      return controller;
    }
    const definition = FASTElementDefinition.forType(element.constructor);
    if (definition === void 0) {
      throw new Error("Missing FASTElement definition.");
    }
    return element.$fastController = new _Controller(element, definition);
  }
};

// node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js
function createFASTElement(BaseType) {
  return class extends BaseType {
    constructor() {
      super();
      Controller.forCustomElement(this);
    }
    $emit(type, detail, options) {
      return this.$fastController.emit(type, detail, options);
    }
    connectedCallback() {
      this.$fastController.onConnectedCallback();
    }
    disconnectedCallback() {
      this.$fastController.onDisconnectedCallback();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
    }
  };
}
var FASTElement = Object.assign(createFASTElement(HTMLElement), {
  /**
   * Creates a new FASTElement base class inherited from the
   * provided base type.
   * @param BaseType - The base element type to inherit from.
   */
  from(BaseType) {
    return createFASTElement(BaseType);
  },
  /**
   * Defines a platform custom element based on the provided type and definition.
   * @param type - The custom element type to define.
   * @param nameOrDef - The name of the element to define or a definition object
   * that describes the element to define.
   */
  define(type, nameOrDef) {
    return new FASTElementDefinition(type, nameOrDef).define().type;
  }
});
function customElement(nameOrDef) {
  return function(type) {
    new FASTElementDefinition(type, nameOrDef).define();
  };
}

// node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js
var CSSDirective = class {
  /**
   * Creates a CSS fragment to interpolate into the CSS document.
   * @returns - the string to interpolate into CSS
   */
  createCSS() {
    return "";
  }
  /**
   * Creates a behavior to bind to the host element.
   * @returns - the behavior to bind to the host element, or undefined.
   */
  createBehavior() {
    return void 0;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/styles/css.js
function collectStyles(strings, values) {
  const styles9 = [];
  let cssString = "";
  const behaviors = [];
  for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
    cssString += strings[i];
    let value = values[i];
    if (value instanceof CSSDirective) {
      const behavior = value.createBehavior();
      value = value.createCSS();
      if (behavior) {
        behaviors.push(behavior);
      }
    }
    if (value instanceof ElementStyles || value instanceof CSSStyleSheet) {
      if (cssString.trim() !== "") {
        styles9.push(cssString);
        cssString = "";
      }
      styles9.push(value);
    } else {
      cssString += value;
    }
  }
  cssString += strings[strings.length - 1];
  if (cssString.trim() !== "") {
    styles9.push(cssString);
  }
  return {
    styles: styles9,
    behaviors
  };
}
function css(strings, ...values) {
  const { styles: styles9, behaviors } = collectStyles(strings, values);
  const elementStyles = ElementStyles.create(styles9);
  if (behaviors.length) {
    elementStyles.withBehaviors(...behaviors);
  }
  return elementStyles;
}

// node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js
function newSplice(index, removed, addedCount) {
  return {
    index,
    removed,
    addedCount
  };
}
var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  const rowCount = oldEnd - oldStart + 1;
  const columnCount = currentEnd - currentStart + 1;
  const distances = new Array(rowCount);
  let north;
  let west;
  for (let i = 0; i < rowCount; ++i) {
    distances[i] = new Array(columnCount);
    distances[i][0] = i;
  }
  for (let j = 0; j < columnCount; ++j) {
    distances[0][j] = j;
  }
  for (let i = 1; i < rowCount; ++i) {
    for (let j = 1; j < columnCount; ++j) {
      if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
        distances[i][j] = distances[i - 1][j - 1];
      } else {
        north = distances[i - 1][j] + 1;
        west = distances[i][j - 1] + 1;
        distances[i][j] = north < west ? north : west;
      }
    }
  }
  return distances;
}
function spliceOperationsFromEditDistances(distances) {
  let i = distances.length - 1;
  let j = distances[0].length - 1;
  let current = distances[i][j];
  const edits = [];
  while (i > 0 || j > 0) {
    if (i === 0) {
      edits.push(EDIT_ADD);
      j--;
      continue;
    }
    if (j === 0) {
      edits.push(EDIT_DELETE);
      i--;
      continue;
    }
    const northWest = distances[i - 1][j - 1];
    const west = distances[i - 1][j];
    const north = distances[i][j - 1];
    let min;
    if (west < north) {
      min = west < northWest ? west : northWest;
    } else {
      min = north < northWest ? north : northWest;
    }
    if (min === northWest) {
      if (northWest === current) {
        edits.push(EDIT_LEAVE);
      } else {
        edits.push(EDIT_UPDATE);
        current = northWest;
      }
      i--;
      j--;
    } else if (min === west) {
      edits.push(EDIT_DELETE);
      i--;
      current = west;
    } else {
      edits.push(EDIT_ADD);
      j--;
      current = north;
    }
  }
  edits.reverse();
  return edits;
}
function sharedPrefix(current, old, searchLength) {
  for (let i = 0; i < searchLength; ++i) {
    if (current[i] !== old[i]) {
      return i;
    }
  }
  return searchLength;
}
function sharedSuffix(current, old, searchLength) {
  let index1 = current.length;
  let index2 = old.length;
  let count = 0;
  while (count < searchLength && current[--index1] === old[--index2]) {
    count++;
  }
  return count;
}
function intersect(start1, end1, start2, end2) {
  if (end1 < start2 || end2 < start1) {
    return -1;
  }
  if (end1 === start2 || end2 === start1) {
    return 0;
  }
  if (start1 < start2) {
    if (end1 < end2) {
      return end1 - start2;
    }
    return end2 - start2;
  }
  if (end2 < end1) {
    return end2 - start1;
  }
  return end1 - start1;
}
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  let prefixCount = 0;
  let suffixCount = 0;
  const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
  if (currentStart === 0 && oldStart === 0) {
    prefixCount = sharedPrefix(current, old, minLength);
  }
  if (currentEnd === current.length && oldEnd === old.length) {
    suffixCount = sharedSuffix(current, old, minLength - prefixCount);
  }
  currentStart += prefixCount;
  oldStart += prefixCount;
  currentEnd -= suffixCount;
  oldEnd -= suffixCount;
  if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
    return emptyArray;
  }
  if (currentStart === currentEnd) {
    const splice2 = newSplice(currentStart, [], 0);
    while (oldStart < oldEnd) {
      splice2.removed.push(old[oldStart++]);
    }
    return [splice2];
  } else if (oldStart === oldEnd) {
    return [newSplice(currentStart, [], currentEnd - currentStart)];
  }
  const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
  const splices = [];
  let splice = void 0;
  let index = currentStart;
  let oldIndex = oldStart;
  for (let i = 0; i < ops.length; ++i) {
    switch (ops[i]) {
      case EDIT_LEAVE:
        if (splice !== void 0) {
          splices.push(splice);
          splice = void 0;
        }
        index++;
        oldIndex++;
        break;
      case EDIT_UPDATE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
      case EDIT_ADD:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        break;
      case EDIT_DELETE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
    }
  }
  if (splice !== void 0) {
    splices.push(splice);
  }
  return splices;
}
var $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
  const splice = newSplice(index, removed, addedCount);
  let inserted = false;
  let insertionOffset = 0;
  for (let i = 0; i < splices.length; i++) {
    const current = splices[i];
    current.index += insertionOffset;
    if (inserted) {
      continue;
    }
    const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
    if (intersectCount >= 0) {
      splices.splice(i, 1);
      i--;
      insertionOffset -= current.addedCount - current.removed.length;
      splice.addedCount += current.addedCount - intersectCount;
      const deleteCount = splice.removed.length + current.removed.length - intersectCount;
      if (!splice.addedCount && !deleteCount) {
        inserted = true;
      } else {
        let currentRemoved = current.removed;
        if (splice.index < current.index) {
          const prepend = splice.removed.slice(0, current.index - splice.index);
          $push.apply(prepend, currentRemoved);
          currentRemoved = prepend;
        }
        if (splice.index + splice.removed.length > current.index + current.addedCount) {
          const append = splice.removed.slice(current.index + current.addedCount - splice.index);
          $push.apply(currentRemoved, append);
        }
        splice.removed = currentRemoved;
        if (current.index < splice.index) {
          splice.index = current.index;
        }
      }
    } else if (splice.index < current.index) {
      inserted = true;
      splices.splice(i, 0, splice);
      i++;
      const offset = splice.addedCount - splice.removed.length;
      current.index += offset;
      insertionOffset += offset;
    }
  }
  if (!inserted) {
    splices.push(splice);
  }
}
function createInitialSplices(changeRecords) {
  const splices = [];
  for (let i = 0, ii = changeRecords.length; i < ii; i++) {
    const record = changeRecords[i];
    mergeSplice(splices, record.index, record.removed, record.addedCount);
  }
  return splices;
}
function projectArraySplices(array, changeRecords) {
  let splices = [];
  const initialSplices = createInitialSplices(changeRecords);
  for (let i = 0, ii = initialSplices.length; i < ii; ++i) {
    const splice = initialSplices[i];
    if (splice.addedCount === 1 && splice.removed.length === 1) {
      if (splice.removed[0] !== array[splice.index]) {
        splices.push(splice);
      }
      continue;
    }
    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
  }
  return splices;
}

// node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js
var arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
  let index = changeRecord.index;
  const arrayLength = array.length;
  if (index > arrayLength) {
    index = arrayLength - changeRecord.addedCount;
  } else if (index < 0) {
    index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
  }
  if (index < 0) {
    index = 0;
  }
  changeRecord.index = index;
  return changeRecord;
}
var ArrayObserver = class extends SubscriberSet {
  constructor(source) {
    super(source);
    this.oldCollection = void 0;
    this.splices = void 0;
    this.needsQueue = true;
    this.call = this.flush;
    Reflect.defineProperty(source, "$fastController", {
      value: this,
      enumerable: false
    });
  }
  subscribe(subscriber) {
    this.flush();
    super.subscribe(subscriber);
  }
  addSplice(splice) {
    if (this.splices === void 0) {
      this.splices = [splice];
    } else {
      this.splices.push(splice);
    }
    if (this.needsQueue) {
      this.needsQueue = false;
      DOM.queueUpdate(this);
    }
  }
  reset(oldCollection) {
    this.oldCollection = oldCollection;
    if (this.needsQueue) {
      this.needsQueue = false;
      DOM.queueUpdate(this);
    }
  }
  flush() {
    const splices = this.splices;
    const oldCollection = this.oldCollection;
    if (splices === void 0 && oldCollection === void 0) {
      return;
    }
    this.needsQueue = true;
    this.splices = void 0;
    this.oldCollection = void 0;
    const finalSplices = oldCollection === void 0 ? projectArraySplices(this.source, splices) : calcSplices(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
    this.notify(finalSplices);
  }
};
function enableArrayObservation() {
  if (arrayObservationEnabled) {
    return;
  }
  arrayObservationEnabled = true;
  Observable.setArrayObserverFactory((collection) => {
    return new ArrayObserver(collection);
  });
  const proto = Array.prototype;
  if (proto.$fastPatch) {
    return;
  }
  Reflect.defineProperty(proto, "$fastPatch", {
    value: 1,
    enumerable: false
  });
  const pop = proto.pop;
  const push = proto.push;
  const reverse = proto.reverse;
  const shift = proto.shift;
  const sort = proto.sort;
  const splice = proto.splice;
  const unshift = proto.unshift;
  proto.pop = function() {
    const notEmpty = this.length > 0;
    const methodCallResult = pop.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(newSplice(this.length, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.push = function() {
    const methodCallResult = push.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(this.length - arguments.length, [], arguments.length), this));
    }
    return methodCallResult;
  };
  proto.reverse = function() {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = reverse.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.shift = function() {
    const notEmpty = this.length > 0;
    const methodCallResult = shift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(newSplice(0, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.sort = function() {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = sort.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.splice = function() {
    const methodCallResult = splice.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
    }
    return methodCallResult;
  };
  proto.unshift = function() {
    const methodCallResult = unshift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(newSplice(0, [], arguments.length), this));
    }
    return methodCallResult;
  };
}

// node_modules/@microsoft/fast-element/dist/esm/templating/ref.js
var RefBehavior = class {
  /**
   * Creates an instance of RefBehavior.
   * @param target - The element to reference.
   * @param propertyName - The name of the property to assign the reference to.
   */
  constructor(target, propertyName) {
    this.target = target;
    this.propertyName = propertyName;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    source[this.propertyName] = this.target;
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  unbind() {
  }
};
function ref(propertyName) {
  return new AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
}

// node_modules/@microsoft/fast-element/dist/esm/interfaces.js
var isFunction = (object) => typeof object === "function";

// node_modules/@microsoft/fast-element/dist/esm/templating/when.js
var noTemplate = () => null;
function normalizeBinding(value) {
  return value === void 0 ? noTemplate : isFunction(value) ? value : () => value;
}
function when(binding, templateOrTemplateBinding, elseTemplateOrTemplateBinding) {
  const dataBinding = isFunction(binding) ? binding : () => binding;
  const templateBinding = normalizeBinding(templateOrTemplateBinding);
  const elseBinding = normalizeBinding(elseTemplateOrTemplateBinding);
  return (source, context) => dataBinding(source, context) ? templateBinding(source, context) : elseBinding(source, context);
}

// node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js
var defaultRepeatOptions = Object.freeze({
  positioning: false,
  recycle: true
});
function bindWithoutPositioning(view, items, index, context) {
  view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
  const childContext = Object.create(context);
  childContext.index = index;
  childContext.length = items.length;
  view.bind(items[index], childContext);
}
var RepeatBehavior = class {
  /**
   * Creates an instance of RepeatBehavior.
   * @param location - The location in the DOM to render the repeat.
   * @param itemsBinding - The array to render.
   * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
   * @param templateBinding - The template to render for each item.
   * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
    this.location = location;
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    this.source = null;
    this.views = [];
    this.items = null;
    this.itemsObserver = null;
    this.originalContext = void 0;
    this.childContext = void 0;
    this.bindView = bindWithoutPositioning;
    this.itemsBindingObserver = Observable.binding(itemsBinding, this, isItemsBindingVolatile);
    this.templateBindingObserver = Observable.binding(templateBinding, this, isTemplateBindingVolatile);
    if (options.positioning) {
      this.bindView = bindWithPositioning;
    }
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source, context) {
    this.source = source;
    this.originalContext = context;
    this.childContext = Object.create(context);
    this.childContext.parent = source;
    this.childContext.parentContext = this.originalContext;
    this.items = this.itemsBindingObserver.observe(source, this.originalContext);
    this.template = this.templateBindingObserver.observe(source, this.originalContext);
    this.observeItems(true);
    this.refreshAllViews();
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.source = null;
    this.items = null;
    if (this.itemsObserver !== null) {
      this.itemsObserver.unsubscribe(this);
    }
    this.unbindAllViews();
    this.itemsBindingObserver.disconnect();
    this.templateBindingObserver.disconnect();
  }
  /** @internal */
  handleChange(source, args) {
    if (source === this.itemsBinding) {
      this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
      this.observeItems();
      this.refreshAllViews();
    } else if (source === this.templateBinding) {
      this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
      this.refreshAllViews(true);
    } else {
      this.updateViews(args);
    }
  }
  observeItems(force = false) {
    if (!this.items) {
      this.items = emptyArray;
      return;
    }
    const oldObserver = this.itemsObserver;
    const newObserver = this.itemsObserver = Observable.getNotifier(this.items);
    const hasNewObserver = oldObserver !== newObserver;
    if (hasNewObserver && oldObserver !== null) {
      oldObserver.unsubscribe(this);
    }
    if (hasNewObserver || force) {
      newObserver.subscribe(this);
    }
  }
  updateViews(splices) {
    const childContext = this.childContext;
    const views = this.views;
    const bindView = this.bindView;
    const items = this.items;
    const template9 = this.template;
    const recycle = this.options.recycle;
    const leftoverViews = [];
    let leftoverIndex = 0;
    let availableViews = 0;
    for (let i = 0, ii = splices.length; i < ii; ++i) {
      const splice = splices[i];
      const removed = splice.removed;
      let removeIndex = 0;
      let addIndex = splice.index;
      const end = addIndex + splice.addedCount;
      const removedViews = views.splice(splice.index, removed.length);
      const totalAvailableViews = availableViews = leftoverViews.length + removedViews.length;
      for (; addIndex < end; ++addIndex) {
        const neighbor = views[addIndex];
        const location = neighbor ? neighbor.firstChild : this.location;
        let view;
        if (recycle && availableViews > 0) {
          if (removeIndex <= totalAvailableViews && removedViews.length > 0) {
            view = removedViews[removeIndex];
            removeIndex++;
          } else {
            view = leftoverViews[leftoverIndex];
            leftoverIndex++;
          }
          availableViews--;
        } else {
          view = template9.create();
        }
        views.splice(addIndex, 0, view);
        bindView(view, items, addIndex, childContext);
        view.insertBefore(location);
      }
      if (removedViews[removeIndex]) {
        leftoverViews.push(...removedViews.slice(removeIndex));
      }
    }
    for (let i = leftoverIndex, ii = leftoverViews.length; i < ii; ++i) {
      leftoverViews[i].dispose();
    }
    if (this.options.positioning) {
      for (let i = 0, ii = views.length; i < ii; ++i) {
        const currentContext = views[i].context;
        currentContext.length = ii;
        currentContext.index = i;
      }
    }
  }
  refreshAllViews(templateChanged = false) {
    const items = this.items;
    const childContext = this.childContext;
    const template9 = this.template;
    const location = this.location;
    const bindView = this.bindView;
    let itemsLength = items.length;
    let views = this.views;
    let viewsLength = views.length;
    if (itemsLength === 0 || templateChanged || !this.options.recycle) {
      HTMLView.disposeContiguousBatch(views);
      viewsLength = 0;
    }
    if (viewsLength === 0) {
      this.views = views = new Array(itemsLength);
      for (let i = 0; i < itemsLength; ++i) {
        const view = template9.create();
        bindView(view, items, i, childContext);
        views[i] = view;
        view.insertBefore(location);
      }
    } else {
      let i = 0;
      for (; i < itemsLength; ++i) {
        if (i < viewsLength) {
          const view = views[i];
          bindView(view, items, i, childContext);
        } else {
          const view = template9.create();
          bindView(view, items, i, childContext);
          views.push(view);
          view.insertBefore(location);
        }
      }
      const removed = views.splice(i, viewsLength - i);
      for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
        removed[i].dispose();
      }
    }
  }
  unbindAllViews() {
    const views = this.views;
    for (let i = 0, ii = views.length; i < ii; ++i) {
      views[i].unbind();
    }
  }
};
var RepeatDirective = class extends HTMLDirective {
  /**
   * Creates an instance of RepeatDirective.
   * @param itemsBinding - The binding that provides the array to render.
   * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(itemsBinding, templateBinding, options) {
    super();
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    this.createPlaceholder = DOM.createBlockPlaceholder;
    enableArrayObservation();
    this.isItemsBindingVolatile = Observable.isVolatileBinding(itemsBinding);
    this.isTemplateBindingVolatile = Observable.isVolatileBinding(templateBinding);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   */
  createBehavior(target) {
    return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
  }
};
function repeat(itemsBinding, templateOrTemplateBinding, options = defaultRepeatOptions) {
  const templateBinding = typeof templateOrTemplateBinding === "function" ? templateOrTemplateBinding : () => templateOrTemplateBinding;
  return new RepeatDirective(itemsBinding, templateBinding, Object.assign(Object.assign({}, defaultRepeatOptions), options));
}

// node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js
var NodeObservationBehavior = class {
  /**
   * Creates an instance of NodeObservationBehavior.
   * @param target - The target to assign the nodes property on.
   * @param options - The options to use in configuring node observation.
   */
  constructor(target, options) {
    this.target = target;
    this.options = options;
    this.source = null;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    const name = this.options.property;
    this.shouldUpdate = Observable.getAccessors(source).some((x) => x.name === name);
    this.source = source;
    this.updateTarget(this.computeNodes());
    if (this.shouldUpdate) {
      this.observe();
    }
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.updateTarget(emptyArray);
    this.source = null;
    if (this.shouldUpdate) {
      this.disconnect();
    }
  }
  /** @internal */
  handleEvent() {
    this.updateTarget(this.computeNodes());
  }
  computeNodes() {
    let nodes = this.getNodes();
    if (this.options.filter !== void 0) {
      nodes = nodes.filter(this.options.filter);
    }
    return nodes;
  }
  updateTarget(value) {
    this.source[this.options.property] = value;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js
var SlottedBehavior = class extends NodeObservationBehavior {
  /**
   * Creates an instance of SlottedBehavior.
   * @param target - The slot element target to observe.
   * @param options - The options to use when observing the slot.
   */
  constructor(target, options) {
    super(target, options);
  }
  /**
   * Begins observation of the nodes.
   */
  observe() {
    this.target.addEventListener("slotchange", this);
  }
  /**
   * Disconnects observation of the nodes.
   */
  disconnect() {
    this.target.removeEventListener("slotchange", this);
  }
  /**
   * Retrieves the nodes that should be assigned to the target.
   */
  getNodes() {
    return this.target.assignedNodes(this.options);
  }
};
function slotted(propertyOrOptions) {
  if (typeof propertyOrOptions === "string") {
    propertyOrOptions = { property: propertyOrOptions };
  }
  return new AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}

// node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js
var StartEnd = class {
  handleStartContentChange() {
    this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
  }
  handleEndContentChange() {
    this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
  }
};
var endSlotTemplate = (context, definition) => html`
    <span
        part="end"
        ${ref("endContainer")}
        class=${(x) => definition.end ? "end" : void 0}
    >
        <slot name="end" ${ref("end")} @slotchange="${(x) => x.handleEndContentChange()}">
            ${definition.end || ""}
        </slot>
    </span>
`;
var startSlotTemplate = (context, definition) => html`
    <span
        part="start"
        ${ref("startContainer")}
        class="${(x) => definition.start ? "start" : void 0}"
    >
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x) => x.handleStartContentChange()}"
        >
            ${definition.start || ""}
        </slot>
    </span>
`;
var endTemplate = html`
    <span part="end" ${ref("endContainer")}>
        <slot
            name="end"
            ${ref("end")}
            @slotchange="${(x) => x.handleEndContentChange()}"
        ></slot>
    </span>
`;
var startTemplate = html`
    <span part="start" ${ref("startContainer")}>
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x) => x.handleStartContentChange()}"
        ></slot>
    </span>
`;

// node_modules/@microsoft/fast-foundation/node_modules/tslib/tslib.es6.js
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// node_modules/@microsoft/fast-foundation/dist/esm/di/di.js
var metadataByTarget = /* @__PURE__ */ new Map();
if (!("metadata" in Reflect)) {
  Reflect.metadata = function(key, value) {
    return function(target) {
      Reflect.defineMetadata(key, value, target);
    };
  };
  Reflect.defineMetadata = function(key, value, target) {
    let metadata = metadataByTarget.get(target);
    if (metadata === void 0) {
      metadataByTarget.set(target, metadata = /* @__PURE__ */ new Map());
    }
    metadata.set(key, value);
  };
  Reflect.getOwnMetadata = function(key, target) {
    const metadata = metadataByTarget.get(target);
    if (metadata !== void 0) {
      return metadata.get(key);
    }
    return void 0;
  };
}
var ResolverBuilder = class {
  /**
   *
   * @param container - The container to create resolvers for.
   * @param key - The key to register resolvers under.
   */
  constructor(container, key) {
    this.container = container;
    this.key = key;
  }
  /**
   * Creates a resolver for an existing object instance.
   * @param value - The instance to resolve.
   * @returns The resolver.
   */
  instance(value) {
    return this.registerResolver(0, value);
  }
  /**
   * Creates a resolver that enforces a singleton lifetime.
   * @param value - The type to create and cache the singleton for.
   * @returns The resolver.
   */
  singleton(value) {
    return this.registerResolver(1, value);
  }
  /**
   * Creates a resolver that creates a new instance for every dependency request.
   * @param value - The type to create instances of.
   * @returns - The resolver.
   */
  transient(value) {
    return this.registerResolver(2, value);
  }
  /**
   * Creates a resolver that invokes a callback function for every dependency resolution
   * request, allowing custom logic to return the dependency.
   * @param value - The callback to call during resolution.
   * @returns The resolver.
   */
  callback(value) {
    return this.registerResolver(3, value);
  }
  /**
   * Creates a resolver that invokes a callback function the first time that a dependency
   * resolution is requested. The returned value is then cached and provided for all
   * subsequent requests.
   * @param value - The callback to call during the first resolution.
   * @returns The resolver.
   */
  cachedCallback(value) {
    return this.registerResolver(3, cacheCallbackResult(value));
  }
  /**
   * Aliases the current key to a different key.
   * @param destinationKey - The key to point the alias to.
   * @returns The resolver.
   */
  aliasTo(destinationKey) {
    return this.registerResolver(5, destinationKey);
  }
  registerResolver(strategy, state) {
    const { container, key } = this;
    this.container = this.key = void 0;
    return container.registerResolver(key, new ResolverImpl(key, strategy, state));
  }
};
function cloneArrayWithPossibleProps(source) {
  const clone = source.slice();
  const keys = Object.keys(source);
  const len = keys.length;
  let key;
  for (let i = 0; i < len; ++i) {
    key = keys[i];
    if (!isArrayIndex(key)) {
      clone[key] = source[key];
    }
  }
  return clone;
}
var DefaultResolver = Object.freeze({
  /**
   * Disables auto-registration and throws for all un-registered dependencies.
   * @param key - The key to create the resolver for.
   */
  none(key) {
    throw Error(`${key.toString()} not registered, did you forget to add @singleton()?`);
  },
  /**
   * Provides default singleton resolution behavior during auto-registration.
   * @param key - The key to create the resolver for.
   * @returns The resolver.
   */
  singleton(key) {
    return new ResolverImpl(key, 1, key);
  },
  /**
   * Provides default transient resolution behavior during auto-registration.
   * @param key - The key to create the resolver for.
   * @returns The resolver.
   */
  transient(key) {
    return new ResolverImpl(key, 2, key);
  }
});
var ContainerConfiguration = Object.freeze({
  /**
   * The default configuration used when creating a DOM-disconnected container.
   * @remarks
   * The default creates a root container, with no parent container. It does not handle
   * owner requests and it uses singleton resolution behavior for auto-registration.
   */
  default: Object.freeze({
    parentLocator: () => null,
    responsibleForOwnerRequests: false,
    defaultResolver: DefaultResolver.singleton
  })
});
var dependencyLookup = /* @__PURE__ */ new Map();
function getParamTypes(key) {
  return (Type) => {
    return Reflect.getOwnMetadata(key, Type);
  };
}
var rootDOMContainer = null;
var DI = Object.freeze({
  /**
   * Creates a new dependency injection container.
   * @param config - The configuration for the container.
   * @returns A newly created dependency injection container.
   */
  createContainer(config) {
    return new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config));
  },
  /**
   * Finds the dependency injection container responsible for providing dependencies
   * to the specified node.
   * @param node - The node to find the responsible container for.
   * @returns The container responsible for providing dependencies to the node.
   * @remarks
   * This will be the same as the parent container if the specified node
   * does not itself host a container configured with responsibleForOwnerRequests.
   */
  findResponsibleContainer(node) {
    const owned = node.$$container$$;
    if (owned && owned.responsibleForOwnerRequests) {
      return owned;
    }
    return DI.findParentContainer(node);
  },
  /**
   * Find the dependency injection container up the DOM tree from this node.
   * @param node - The node to find the parent container for.
   * @returns The parent container of this node.
   * @remarks
   * This will be the same as the responsible container if the specified node
   * does not itself host a container configured with responsibleForOwnerRequests.
   */
  findParentContainer(node) {
    const event = new CustomEvent(DILocateParentEventType, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { container: void 0 }
    });
    node.dispatchEvent(event);
    return event.detail.container || DI.getOrCreateDOMContainer();
  },
  /**
   * Returns a dependency injection container if one is explicitly owned by the specified
   * node. If one is not owned, then a new container is created and assigned to the node.
   * @param node - The node to find or create the container for.
   * @param config - The configuration for the container if one needs to be created.
   * @returns The located or created container.
   * @remarks
   * This API does not search for a responsible or parent container. It looks only for a container
   * directly defined on the specified node and creates one at that location if one does not
   * already exist.
   */
  getOrCreateDOMContainer(node, config) {
    if (!node) {
      return rootDOMContainer || (rootDOMContainer = new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config, {
        parentLocator: () => null
      })));
    }
    return node.$$container$$ || new ContainerImpl(node, Object.assign({}, ContainerConfiguration.default, config, {
      parentLocator: DI.findParentContainer
    }));
  },
  /**
   * Gets the "design:paramtypes" metadata for the specified type.
   * @param Type - The type to get the metadata for.
   * @returns The metadata array or undefined if no metadata is found.
   */
  getDesignParamtypes: getParamTypes("design:paramtypes"),
  /**
   * Gets the "di:paramtypes" metadata for the specified type.
   * @param Type - The type to get the metadata for.
   * @returns The metadata array or undefined if no metadata is found.
   */
  getAnnotationParamtypes: getParamTypes("di:paramtypes"),
  /**
   *
   * @param Type - Gets the "di:paramtypes" metadata for the specified type. If none is found,
   * an empty metadata array is created and added.
   * @returns The metadata array.
   */
  getOrCreateAnnotationParamTypes(Type) {
    let annotationParamtypes = this.getAnnotationParamtypes(Type);
    if (annotationParamtypes === void 0) {
      Reflect.defineMetadata("di:paramtypes", annotationParamtypes = [], Type);
    }
    return annotationParamtypes;
  },
  /**
   * Gets the dependency keys representing what is needed to instantiate the specified type.
   * @param Type - The type to get the dependencies for.
   * @returns An array of dependency keys.
   */
  getDependencies(Type) {
    let dependencies = dependencyLookup.get(Type);
    if (dependencies === void 0) {
      const inject2 = Type.inject;
      if (inject2 === void 0) {
        const designParamtypes = DI.getDesignParamtypes(Type);
        const annotationParamtypes = DI.getAnnotationParamtypes(Type);
        if (designParamtypes === void 0) {
          if (annotationParamtypes === void 0) {
            const Proto = Object.getPrototypeOf(Type);
            if (typeof Proto === "function" && Proto !== Function.prototype) {
              dependencies = cloneArrayWithPossibleProps(DI.getDependencies(Proto));
            } else {
              dependencies = [];
            }
          } else {
            dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
          }
        } else if (annotationParamtypes === void 0) {
          dependencies = cloneArrayWithPossibleProps(designParamtypes);
        } else {
          dependencies = cloneArrayWithPossibleProps(designParamtypes);
          let len = annotationParamtypes.length;
          let auAnnotationParamtype;
          for (let i = 0; i < len; ++i) {
            auAnnotationParamtype = annotationParamtypes[i];
            if (auAnnotationParamtype !== void 0) {
              dependencies[i] = auAnnotationParamtype;
            }
          }
          const keys = Object.keys(annotationParamtypes);
          len = keys.length;
          let key;
          for (let i = 0; i < len; ++i) {
            key = keys[i];
            if (!isArrayIndex(key)) {
              dependencies[key] = annotationParamtypes[key];
            }
          }
        }
      } else {
        dependencies = cloneArrayWithPossibleProps(inject2);
      }
      dependencyLookup.set(Type, dependencies);
    }
    return dependencies;
  },
  /**
   * Defines a property on a web component class. The value of this property will
   * be resolved from the dependency injection container responsible for the element
   * instance, based on where it is connected in the DOM.
   * @param target - The target to define the property on.
   * @param propertyName - The name of the property to define.
   * @param key - The dependency injection key.
   * @param respectConnection - Indicates whether or not to update the property value if the
   * hosting component is disconnected and then re-connected at a different location in the DOM.
   * @remarks
   * The respectConnection option is only applicable to elements that descend from FASTElement.
   */
  defineProperty(target, propertyName, key, respectConnection = false) {
    const diPropertyKey = `$di_${propertyName}`;
    Reflect.defineProperty(target, propertyName, {
      get: function() {
        let value = this[diPropertyKey];
        if (value === void 0) {
          const container = this instanceof HTMLElement ? DI.findResponsibleContainer(this) : DI.getOrCreateDOMContainer();
          value = container.get(key);
          this[diPropertyKey] = value;
          if (respectConnection && this instanceof FASTElement) {
            const notifier = this.$fastController;
            const handleChange = () => {
              const newContainer = DI.findResponsibleContainer(this);
              const newValue = newContainer.get(key);
              const oldValue = this[diPropertyKey];
              if (newValue !== oldValue) {
                this[diPropertyKey] = value;
                notifier.notify(propertyName);
              }
            };
            notifier.subscribe({ handleChange }, "isConnected");
          }
        }
        return value;
      }
    });
  },
  /**
   * Creates a dependency injection key.
   * @param nameConfigOrCallback - A friendly name for the key or a lambda that configures a
   * default resolution for the dependency.
   * @param configuror - If a friendly name was provided for the first parameter, then an optional
   * lambda that configures a default resolution for the dependency can be provided second.
   * @returns The created key.
   * @remarks
   * The created key can be used as a property decorator or constructor parameter decorator,
   * in addition to its standard use in an inject array or through direct container APIs.
   */
  createInterface(nameConfigOrCallback, configuror) {
    const configure = typeof nameConfigOrCallback === "function" ? nameConfigOrCallback : configuror;
    const friendlyName = typeof nameConfigOrCallback === "string" ? nameConfigOrCallback : nameConfigOrCallback && "friendlyName" in nameConfigOrCallback ? nameConfigOrCallback.friendlyName || defaultFriendlyName : defaultFriendlyName;
    const respectConnection = typeof nameConfigOrCallback === "string" ? false : nameConfigOrCallback && "respectConnection" in nameConfigOrCallback ? nameConfigOrCallback.respectConnection || false : false;
    const Interface = function(target, property, index) {
      if (target == null || new.target !== void 0) {
        throw new Error(`No registration for interface: '${Interface.friendlyName}'`);
      }
      if (property) {
        DI.defineProperty(target, property, Interface, respectConnection);
      } else {
        const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
        annotationParamtypes[index] = Interface;
      }
    };
    Interface.$isInterface = true;
    Interface.friendlyName = friendlyName == null ? "(anonymous)" : friendlyName;
    if (configure != null) {
      Interface.register = function(container, key) {
        return configure(new ResolverBuilder(container, key !== null && key !== void 0 ? key : Interface));
      };
    }
    Interface.toString = function toString() {
      return `InterfaceSymbol<${Interface.friendlyName}>`;
    };
    return Interface;
  },
  /**
   * A decorator that specifies what to inject into its target.
   * @param dependencies - The dependencies to inject.
   * @returns The decorator to be applied to the target class.
   * @remarks
   * The decorator can be used to decorate a class, listing all of the classes dependencies.
   * Or it can be used to decorate a constructor paramter, indicating what to inject for that
   * parameter.
   * Or it can be used for a web component property, indicating what that property should resolve to.
   */
  inject(...dependencies) {
    return function(target, key, descriptor) {
      if (typeof descriptor === "number") {
        const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
        const dep = dependencies[0];
        if (dep !== void 0) {
          annotationParamtypes[descriptor] = dep;
        }
      } else if (key) {
        DI.defineProperty(target, key, dependencies[0]);
      } else {
        const annotationParamtypes = descriptor ? DI.getOrCreateAnnotationParamTypes(descriptor.value) : DI.getOrCreateAnnotationParamTypes(target);
        let dep;
        for (let i = 0; i < dependencies.length; ++i) {
          dep = dependencies[i];
          if (dep !== void 0) {
            annotationParamtypes[i] = dep;
          }
        }
      }
    };
  },
  /**
   * Registers the `target` class as a transient dependency; each time the dependency is resolved
   * a new instance will be created.
   *
   * @param target - The class / constructor function to register as transient.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   *
   * @example
   * On an existing class
   * ```ts
   * class Foo { }
   * DI.transient(Foo);
   * ```
   *
   * @example
   * Inline declaration
   *
   * ```ts
   * const Foo = DI.transient(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   *
   * @public
   */
  transient(target) {
    target.register = function register(container) {
      const registration = Registration.transient(target, target);
      return registration.register(container);
    };
    target.registerInRequestor = false;
    return target;
  },
  /**
   * Registers the `target` class as a singleton dependency; the class will only be created once. Each
   * consecutive time the dependency is resolved, the same instance will be returned.
   *
   * @param target - The class / constructor function to register as a singleton.
   * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
   * @example
   * On an existing class
   * ```ts
   * class Foo { }
   * DI.singleton(Foo);
   * ```
   *
   * @example
   * Inline declaration
   * ```ts
   * const Foo = DI.singleton(class { });
   * // Foo is now strongly typed with register
   * Foo.register(container);
   * ```
   *
   * @public
   */
  singleton(target, options = defaultSingletonOptions) {
    target.register = function register(container) {
      const registration = Registration.singleton(target, target);
      return registration.register(container);
    };
    target.registerInRequestor = options.scoped;
    return target;
  }
});
var Container = DI.createInterface("Container");
function createResolver(getter) {
  return function(key) {
    const resolver = function(target, property, descriptor) {
      DI.inject(resolver)(target, property, descriptor);
    };
    resolver.$isResolver = true;
    resolver.resolve = function(handler, requestor) {
      return getter(key, handler, requestor);
    };
    return resolver;
  };
}
var inject = DI.inject;
var defaultSingletonOptions = { scoped: false };
function createAllResolver(getter) {
  return function(key, searchAncestors) {
    searchAncestors = !!searchAncestors;
    const resolver = function(target, property, descriptor) {
      DI.inject(resolver)(target, property, descriptor);
    };
    resolver.$isResolver = true;
    resolver.resolve = function(handler, requestor) {
      return getter(key, handler, requestor, searchAncestors);
    };
    return resolver;
  };
}
var all = createAllResolver((key, handler, requestor, searchAncestors) => requestor.getAll(key, searchAncestors));
var lazy = createResolver((key, handler, requestor) => {
  return () => requestor.get(key);
});
var optional = createResolver((key, handler, requestor) => {
  if (requestor.has(key, true)) {
    return requestor.get(key);
  } else {
    return void 0;
  }
});
function ignore(target, property, descriptor) {
  DI.inject(ignore)(target, property, descriptor);
}
ignore.$isResolver = true;
ignore.resolve = () => void 0;
var newInstanceForScope = createResolver((key, handler, requestor) => {
  const instance = createNewInstance(key, handler);
  const resolver = new ResolverImpl(key, 0, instance);
  requestor.registerResolver(key, resolver);
  return instance;
});
var newInstanceOf = createResolver((key, handler, _requestor) => createNewInstance(key, handler));
function createNewInstance(key, handler) {
  return handler.getFactory(key).construct(handler);
}
var ResolverImpl = class {
  constructor(key, strategy, state) {
    this.key = key;
    this.strategy = strategy;
    this.state = state;
    this.resolving = false;
  }
  get $isResolver() {
    return true;
  }
  register(container) {
    return container.registerResolver(this.key, this);
  }
  resolve(handler, requestor) {
    switch (this.strategy) {
      case 0:
        return this.state;
      case 1: {
        if (this.resolving) {
          throw new Error(`Cyclic dependency found: ${this.state.name}`);
        }
        this.resolving = true;
        this.state = handler.getFactory(this.state).construct(requestor);
        this.strategy = 0;
        this.resolving = false;
        return this.state;
      }
      case 2: {
        const factory = handler.getFactory(this.state);
        if (factory === null) {
          throw new Error(`Resolver for ${String(this.key)} returned a null factory`);
        }
        return factory.construct(requestor);
      }
      case 3:
        return this.state(handler, requestor, this);
      case 4:
        return this.state[0].resolve(handler, requestor);
      case 5:
        return requestor.get(this.state);
      default:
        throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`);
    }
  }
  getFactory(container) {
    var _a, _b, _c;
    switch (this.strategy) {
      case 1:
      case 2:
        return container.getFactory(this.state);
      case 5:
        return (_c = (_b = (_a = container.getResolver(this.state)) === null || _a === void 0 ? void 0 : _a.getFactory) === null || _b === void 0 ? void 0 : _b.call(_a, container)) !== null && _c !== void 0 ? _c : null;
      default:
        return null;
    }
  }
};
function containerGetKey(d) {
  return this.get(d);
}
function transformInstance(inst, transform) {
  return transform(inst);
}
var FactoryImpl = class {
  constructor(Type, dependencies) {
    this.Type = Type;
    this.dependencies = dependencies;
    this.transformers = null;
  }
  construct(container, dynamicDependencies) {
    let instance;
    if (dynamicDependencies === void 0) {
      instance = new this.Type(...this.dependencies.map(containerGetKey, container));
    } else {
      instance = new this.Type(...this.dependencies.map(containerGetKey, container), ...dynamicDependencies);
    }
    if (this.transformers == null) {
      return instance;
    }
    return this.transformers.reduce(transformInstance, instance);
  }
  registerTransformer(transformer) {
    (this.transformers || (this.transformers = [])).push(transformer);
  }
};
var containerResolver = {
  $isResolver: true,
  resolve(handler, requestor) {
    return requestor;
  }
};
function isRegistry(obj) {
  return typeof obj.register === "function";
}
function isSelfRegistry(obj) {
  return isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
}
function isRegisterInRequester(obj) {
  return isSelfRegistry(obj) && obj.registerInRequestor;
}
function isClass(obj) {
  return obj.prototype !== void 0;
}
var InstrinsicTypeNames = /* @__PURE__ */ new Set([
  "Array",
  "ArrayBuffer",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Function",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Map",
  "Number",
  "Object",
  "Promise",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "Set",
  "SharedArrayBuffer",
  "String",
  "SyntaxError",
  "TypeError",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "URIError",
  "WeakMap",
  "WeakSet"
]);
var DILocateParentEventType = "__DI_LOCATE_PARENT__";
var factories = /* @__PURE__ */ new Map();
var ContainerImpl = class _ContainerImpl {
  constructor(owner, config) {
    this.owner = owner;
    this.config = config;
    this._parent = void 0;
    this.registerDepth = 0;
    this.context = null;
    if (owner !== null) {
      owner.$$container$$ = this;
    }
    this.resolvers = /* @__PURE__ */ new Map();
    this.resolvers.set(Container, containerResolver);
    if (owner instanceof Node) {
      owner.addEventListener(DILocateParentEventType, (e) => {
        if (e.composedPath()[0] !== this.owner) {
          e.detail.container = this;
          e.stopImmediatePropagation();
        }
      });
    }
  }
  get parent() {
    if (this._parent === void 0) {
      this._parent = this.config.parentLocator(this.owner);
    }
    return this._parent;
  }
  get depth() {
    return this.parent === null ? 0 : this.parent.depth + 1;
  }
  get responsibleForOwnerRequests() {
    return this.config.responsibleForOwnerRequests;
  }
  registerWithContext(context, ...params) {
    this.context = context;
    this.register(...params);
    this.context = null;
    return this;
  }
  register(...params) {
    if (++this.registerDepth === 100) {
      throw new Error("Unable to autoregister dependency");
    }
    let current;
    let keys;
    let value;
    let j;
    let jj;
    const context = this.context;
    for (let i = 0, ii = params.length; i < ii; ++i) {
      current = params[i];
      if (!isObject(current)) {
        continue;
      }
      if (isRegistry(current)) {
        current.register(this, context);
      } else if (isClass(current)) {
        Registration.singleton(current, current).register(this);
      } else {
        keys = Object.keys(current);
        j = 0;
        jj = keys.length;
        for (; j < jj; ++j) {
          value = current[keys[j]];
          if (!isObject(value)) {
            continue;
          }
          if (isRegistry(value)) {
            value.register(this, context);
          } else {
            this.register(value);
          }
        }
      }
    }
    --this.registerDepth;
    return this;
  }
  registerResolver(key, resolver) {
    validateKey(key);
    const resolvers = this.resolvers;
    const result = resolvers.get(key);
    if (result == null) {
      resolvers.set(key, resolver);
    } else if (result instanceof ResolverImpl && result.strategy === 4) {
      result.state.push(resolver);
    } else {
      resolvers.set(key, new ResolverImpl(key, 4, [result, resolver]));
    }
    return resolver;
  }
  registerTransformer(key, transformer) {
    const resolver = this.getResolver(key);
    if (resolver == null) {
      return false;
    }
    if (resolver.getFactory) {
      const factory = resolver.getFactory(this);
      if (factory == null) {
        return false;
      }
      factory.registerTransformer(transformer);
      return true;
    }
    return false;
  }
  getResolver(key, autoRegister = true) {
    validateKey(key);
    if (key.resolve !== void 0) {
      return key;
    }
    let current = this;
    let resolver;
    while (current != null) {
      resolver = current.resolvers.get(key);
      if (resolver == null) {
        if (current.parent == null) {
          const handler = isRegisterInRequester(key) ? this : current;
          return autoRegister ? this.jitRegister(key, handler) : null;
        }
        current = current.parent;
      } else {
        return resolver;
      }
    }
    return null;
  }
  has(key, searchAncestors = false) {
    return this.resolvers.has(key) ? true : searchAncestors && this.parent != null ? this.parent.has(key, true) : false;
  }
  get(key) {
    validateKey(key);
    if (key.$isResolver) {
      return key.resolve(this, this);
    }
    let current = this;
    let resolver;
    while (current != null) {
      resolver = current.resolvers.get(key);
      if (resolver == null) {
        if (current.parent == null) {
          const handler = isRegisterInRequester(key) ? this : current;
          resolver = this.jitRegister(key, handler);
          return resolver.resolve(current, this);
        }
        current = current.parent;
      } else {
        return resolver.resolve(current, this);
      }
    }
    throw new Error(`Unable to resolve key: ${String(key)}`);
  }
  getAll(key, searchAncestors = false) {
    validateKey(key);
    const requestor = this;
    let current = requestor;
    let resolver;
    if (searchAncestors) {
      let resolutions = emptyArray;
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver != null) {
          resolutions = resolutions.concat(
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            buildAllResponse(resolver, current, requestor)
          );
        }
        current = current.parent;
      }
      return resolutions;
    } else {
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver == null) {
          current = current.parent;
          if (current == null) {
            return emptyArray;
          }
        } else {
          return buildAllResponse(resolver, current, requestor);
        }
      }
    }
    return emptyArray;
  }
  getFactory(Type) {
    let factory = factories.get(Type);
    if (factory === void 0) {
      if (isNativeFunction(Type)) {
        throw new Error(`${Type.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);
      }
      factories.set(Type, factory = new FactoryImpl(Type, DI.getDependencies(Type)));
    }
    return factory;
  }
  registerFactory(key, factory) {
    factories.set(key, factory);
  }
  createChild(config) {
    return new _ContainerImpl(null, Object.assign({}, this.config, config, { parentLocator: () => this }));
  }
  jitRegister(keyAsValue, handler) {
    if (typeof keyAsValue !== "function") {
      throw new Error(`Attempted to jitRegister something that is not a constructor: '${keyAsValue}'. Did you forget to register this dependency?`);
    }
    if (InstrinsicTypeNames.has(keyAsValue.name)) {
      throw new Error(`Attempted to jitRegister an intrinsic type: ${keyAsValue.name}. Did you forget to add @inject(Key)`);
    }
    if (isRegistry(keyAsValue)) {
      const registrationResolver = keyAsValue.register(handler);
      if (!(registrationResolver instanceof Object) || registrationResolver.resolve == null) {
        const newResolver = handler.resolvers.get(keyAsValue);
        if (newResolver != void 0) {
          return newResolver;
        }
        throw new Error("A valid resolver was not returned from the static register method");
      }
      return registrationResolver;
    } else if (keyAsValue.$isInterface) {
      throw new Error(`Attempted to jitRegister an interface: ${keyAsValue.friendlyName}`);
    } else {
      const resolver = this.config.defaultResolver(keyAsValue, handler);
      handler.resolvers.set(keyAsValue, resolver);
      return resolver;
    }
  }
};
var cache = /* @__PURE__ */ new WeakMap();
function cacheCallbackResult(fun) {
  return function(handler, requestor, resolver) {
    if (cache.has(resolver)) {
      return cache.get(resolver);
    }
    const t = fun(handler, requestor, resolver);
    cache.set(resolver, t);
    return t;
  };
}
var Registration = Object.freeze({
  /**
   * Allows you to pass an instance.
   * Every time you request this {@link Key} you will get this instance back.
   *
   * @example
   * ```
   * Registration.instance(Foo, new Foo()));
   * ```
   *
   * @param key - The key to register the instance under.
   * @param value - The instance to return when the key is requested.
   */
  instance(key, value) {
    return new ResolverImpl(key, 0, value);
  },
  /**
   * Creates an instance from the class.
   * Every time you request this {@link Key} you will get the same one back.
   *
   * @example
   * ```
   * Registration.singleton(Foo, Foo);
   * ```
   *
   * @param key - The key to register the singleton under.
   * @param value - The class to instantiate as a singleton when first requested.
   */
  singleton(key, value) {
    return new ResolverImpl(key, 1, value);
  },
  /**
   * Creates an instance from a class.
   * Every time you request this {@link Key} you will get a new instance.
   *
   * @example
   * ```
   * Registration.instance(Foo, Foo);
   * ```
   *
   * @param key - The key to register the instance type under.
   * @param value - The class to instantiate each time the key is requested.
   */
  transient(key, value) {
    return new ResolverImpl(key, 2, value);
  },
  /**
   * Delegates to a callback function to provide the dependency.
   * Every time you request this {@link Key} the callback will be invoked to provide
   * the dependency.
   *
   * @example
   * ```
   * Registration.callback(Foo, () => new Foo());
   * Registration.callback(Bar, (c: Container) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - The key to register the callback for.
   * @param callback - The function that is expected to return the dependency.
   */
  callback(key, callback) {
    return new ResolverImpl(key, 3, callback);
  },
  /**
   * Delegates to a callback function to provide the dependency and then caches the
   * dependency for future requests.
   *
   * @example
   * ```
   * Registration.cachedCallback(Foo, () => new Foo());
   * Registration.cachedCallback(Bar, (c: Container) => new Bar(c.get(Foo)));
   * ```
   *
   * @param key - The key to register the callback for.
   * @param callback - The function that is expected to return the dependency.
   * @remarks
   * If you pass the same Registration to another container, the same cached value will be used.
   * Should all references to the resolver returned be removed, the cache will expire.
   */
  cachedCallback(key, callback) {
    return new ResolverImpl(key, 3, cacheCallbackResult(callback));
  },
  /**
   * Creates an alternate {@link Key} to retrieve an instance by.
   *
   * @example
   * ```
   * Register.singleton(Foo, Foo)
   * Register.aliasTo(Foo, MyFoos);
   *
   * container.getAll(MyFoos) // contains an instance of Foo
   * ```
   *
   * @param originalKey - The original key that has been registered.
   * @param aliasKey - The alias to the original key.
   */
  aliasTo(originalKey, aliasKey) {
    return new ResolverImpl(aliasKey, 5, originalKey);
  }
});
function validateKey(key) {
  if (key === null || key === void 0) {
    throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
  }
}
function buildAllResponse(resolver, handler, requestor) {
  if (resolver instanceof ResolverImpl && resolver.strategy === 4) {
    const state = resolver.state;
    let i = state.length;
    const results = new Array(i);
    while (i--) {
      results[i] = state[i].resolve(handler, requestor);
    }
    return results;
  }
  return [resolver.resolve(handler, requestor)];
}
var defaultFriendlyName = "(anonymous)";
function isObject(value) {
  return typeof value === "object" && value !== null || typeof value === "function";
}
var isNativeFunction = /* @__PURE__ */ function() {
  const lookup = /* @__PURE__ */ new WeakMap();
  let isNative = false;
  let sourceText = "";
  let i = 0;
  return function(fn) {
    isNative = lookup.get(fn);
    if (isNative === void 0) {
      sourceText = fn.toString();
      i = sourceText.length;
      isNative = // 29 is the length of 'function () { [native code] }' which is the smallest length of a native function string
      i >= 29 && // 100 seems to be a safe upper bound of the max length of a native function. In Chrome and FF it's 56, in Edge it's 61.
      i <= 100 && // This whole heuristic *could* be tricked by a comment. Do we need to care about that?
      sourceText.charCodeAt(i - 1) === 125 && // }
      // TODO: the spec is a little vague about the precise constraints, so we do need to test this across various browsers to make sure just one whitespace is a safe assumption.
      sourceText.charCodeAt(i - 2) <= 32 && // whitespace
      sourceText.charCodeAt(i - 3) === 93 && // ]
      sourceText.charCodeAt(i - 4) === 101 && // e
      sourceText.charCodeAt(i - 5) === 100 && // d
      sourceText.charCodeAt(i - 6) === 111 && // o
      sourceText.charCodeAt(i - 7) === 99 && // c
      sourceText.charCodeAt(i - 8) === 32 && //
      sourceText.charCodeAt(i - 9) === 101 && // e
      sourceText.charCodeAt(i - 10) === 118 && // v
      sourceText.charCodeAt(i - 11) === 105 && // i
      sourceText.charCodeAt(i - 12) === 116 && // t
      sourceText.charCodeAt(i - 13) === 97 && // a
      sourceText.charCodeAt(i - 14) === 110 && // n
      sourceText.charCodeAt(i - 15) === 88;
      lookup.set(fn, isNative);
    }
    return isNative;
  };
}();
var isNumericLookup = {};
function isArrayIndex(value) {
  switch (typeof value) {
    case "number":
      return value >= 0 && (value | 0) === value;
    case "string": {
      const result = isNumericLookup[value];
      if (result !== void 0) {
        return result;
      }
      const length = value.length;
      if (length === 0) {
        return isNumericLookup[value] = false;
      }
      let ch = 0;
      for (let i = 0; i < length; ++i) {
        ch = value.charCodeAt(i);
        if (i === 0 && ch === 48 && length > 1 || ch < 48 || ch > 57) {
          return isNumericLookup[value] = false;
        }
      }
      return isNumericLookup[value] = true;
    }
    default:
      return false;
  }
}

// node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js
function presentationKeyFromTag(tagName) {
  return `${tagName.toLowerCase()}:presentation`;
}
var presentationRegistry = /* @__PURE__ */ new Map();
var ComponentPresentation = Object.freeze({
  /**
   * Defines a component presentation for an element.
   * @param tagName - The element name to define the presentation for.
   * @param presentation - The presentation that will be applied to matching elements.
   * @param container - The dependency injection container to register the configuration in.
   * @public
   */
  define(tagName, presentation, container) {
    const key = presentationKeyFromTag(tagName);
    const existing = presentationRegistry.get(key);
    if (existing === void 0) {
      presentationRegistry.set(key, presentation);
    } else {
      presentationRegistry.set(key, false);
    }
    container.register(Registration.instance(key, presentation));
  },
  /**
   * Finds a component presentation for the specified element name,
   * searching the DOM hierarchy starting from the provided element.
   * @param tagName - The name of the element to locate the presentation for.
   * @param element - The element to begin the search from.
   * @returns The component presentation or null if none is found.
   * @public
   */
  forTag(tagName, element) {
    const key = presentationKeyFromTag(tagName);
    const existing = presentationRegistry.get(key);
    if (existing === false) {
      const container = DI.findResponsibleContainer(element);
      return container.get(key);
    }
    return existing || null;
  }
});
var DefaultComponentPresentation = class {
  /**
   * Creates an instance of DefaultComponentPresentation.
   * @param template - The template to apply to the element.
   * @param styles - The styles to apply to the element.
   * @public
   */
  constructor(template9, styles9) {
    this.template = template9 || null;
    this.styles = styles9 === void 0 ? null : Array.isArray(styles9) ? ElementStyles.create(styles9) : styles9 instanceof ElementStyles ? styles9 : ElementStyles.create([styles9]);
  }
  /**
   * Applies the presentation details to the specified element.
   * @param element - The element to apply the presentation details to.
   * @public
   */
  applyTo(element) {
    const controller = element.$fastController;
    if (controller.template === null) {
      controller.template = this.template;
    }
    if (controller.styles === null) {
      controller.styles = this.styles;
    }
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js
var FoundationElement = class _FoundationElement extends FASTElement {
  constructor() {
    super(...arguments);
    this._presentation = void 0;
  }
  /**
   * A property which resolves the ComponentPresentation instance
   * for the current component.
   * @public
   */
  get $presentation() {
    if (this._presentation === void 0) {
      this._presentation = ComponentPresentation.forTag(this.tagName, this);
    }
    return this._presentation;
  }
  templateChanged() {
    if (this.template !== void 0) {
      this.$fastController.template = this.template;
    }
  }
  stylesChanged() {
    if (this.styles !== void 0) {
      this.$fastController.styles = this.styles;
    }
  }
  /**
   * The connected callback for this FASTElement.
   * @remarks
   * This method is invoked by the platform whenever this FoundationElement
   * becomes connected to the document.
   * @public
   */
  connectedCallback() {
    if (this.$presentation !== null) {
      this.$presentation.applyTo(this);
    }
    super.connectedCallback();
  }
  /**
   * Defines an element registry function with a set of element definition defaults.
   * @param elementDefinition - The definition of the element to create the registry
   * function for.
   * @public
   */
  static compose(elementDefinition) {
    return (overrideDefinition = {}) => new FoundationElementRegistry(this === _FoundationElement ? class extends _FoundationElement {
    } : this, elementDefinition, overrideDefinition);
  }
};
__decorate([
  observable
], FoundationElement.prototype, "template", void 0);
__decorate([
  observable
], FoundationElement.prototype, "styles", void 0);
function resolveOption(option, context, definition) {
  if (typeof option === "function") {
    return option(context, definition);
  }
  return option;
}
var FoundationElementRegistry = class {
  constructor(type, elementDefinition, overrideDefinition) {
    this.type = type;
    this.elementDefinition = elementDefinition;
    this.overrideDefinition = overrideDefinition;
    this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
  }
  register(container, context) {
    const definition = this.definition;
    const overrideDefinition = this.overrideDefinition;
    const prefix = definition.prefix || context.elementPrefix;
    const name = `${prefix}-${definition.baseName}`;
    context.tryDefineElement({
      name,
      type: this.type,
      baseClass: this.elementDefinition.baseClass,
      callback: (x) => {
        const presentation = new DefaultComponentPresentation(resolveOption(definition.template, x, definition), resolveOption(definition.styles, x, definition));
        x.definePresentation(presentation);
        let shadowOptions = resolveOption(definition.shadowOptions, x, definition);
        if (x.shadowRootMode) {
          if (shadowOptions) {
            if (!overrideDefinition.shadowOptions) {
              shadowOptions.mode = x.shadowRootMode;
            }
          } else if (shadowOptions !== null) {
            shadowOptions = { mode: x.shadowRootMode };
          }
        }
        x.defineElement({
          elementOptions: resolveOption(definition.elementOptions, x, definition),
          shadowOptions,
          attributes: resolveOption(definition.attributes, x, definition)
        });
      }
    });
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js
function applyMixins(derivedCtor, ...baseCtors) {
  const derivedAttributes = AttributeConfiguration.locate(derivedCtor);
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== "constructor") {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      }
    });
    const baseAttributes = AttributeConfiguration.locate(baseCtor);
    baseAttributes.forEach((x) => derivedAttributes.push(x));
  });
}

// node_modules/@microsoft/fast-web-utilities/dist/array.js
function findLastIndex(array, predicate) {
  let k = array.length;
  while (k--) {
    if (predicate(array[k], k, array)) {
      return k;
    }
  }
  return -1;
}

// node_modules/exenv-es6/dist/can-use-dom.js
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/@microsoft/fast-web-utilities/dist/dom.js
function isHTMLElement(...args) {
  return args.every((arg) => arg instanceof HTMLElement);
}
function getNonce() {
  const node = document.querySelector('meta[property="csp-nonce"]');
  if (node) {
    return node.getAttribute("content");
  } else {
    return null;
  }
}
var _canUseFocusVisible;
function canUseFocusVisible() {
  if (typeof _canUseFocusVisible === "boolean") {
    return _canUseFocusVisible;
  }
  if (!canUseDOM()) {
    _canUseFocusVisible = false;
    return _canUseFocusVisible;
  }
  const styleElement = document.createElement("style");
  const styleNonce = getNonce();
  if (styleNonce !== null) {
    styleElement.setAttribute("nonce", styleNonce);
  }
  document.head.appendChild(styleElement);
  try {
    styleElement.sheet.insertRule("foo:focus-visible {color:inherit}", 0);
    _canUseFocusVisible = true;
  } catch (e) {
    _canUseFocusVisible = false;
  } finally {
    document.head.removeChild(styleElement);
  }
  return _canUseFocusVisible;
}

// node_modules/@microsoft/fast-web-utilities/dist/key-codes.js
var KeyCodes;
(function(KeyCodes2) {
  KeyCodes2[KeyCodes2["alt"] = 18] = "alt";
  KeyCodes2[KeyCodes2["arrowDown"] = 40] = "arrowDown";
  KeyCodes2[KeyCodes2["arrowLeft"] = 37] = "arrowLeft";
  KeyCodes2[KeyCodes2["arrowRight"] = 39] = "arrowRight";
  KeyCodes2[KeyCodes2["arrowUp"] = 38] = "arrowUp";
  KeyCodes2[KeyCodes2["back"] = 8] = "back";
  KeyCodes2[KeyCodes2["backSlash"] = 220] = "backSlash";
  KeyCodes2[KeyCodes2["break"] = 19] = "break";
  KeyCodes2[KeyCodes2["capsLock"] = 20] = "capsLock";
  KeyCodes2[KeyCodes2["closeBracket"] = 221] = "closeBracket";
  KeyCodes2[KeyCodes2["colon"] = 186] = "colon";
  KeyCodes2[KeyCodes2["colon2"] = 59] = "colon2";
  KeyCodes2[KeyCodes2["comma"] = 188] = "comma";
  KeyCodes2[KeyCodes2["ctrl"] = 17] = "ctrl";
  KeyCodes2[KeyCodes2["delete"] = 46] = "delete";
  KeyCodes2[KeyCodes2["end"] = 35] = "end";
  KeyCodes2[KeyCodes2["enter"] = 13] = "enter";
  KeyCodes2[KeyCodes2["equals"] = 187] = "equals";
  KeyCodes2[KeyCodes2["equals2"] = 61] = "equals2";
  KeyCodes2[KeyCodes2["equals3"] = 107] = "equals3";
  KeyCodes2[KeyCodes2["escape"] = 27] = "escape";
  KeyCodes2[KeyCodes2["forwardSlash"] = 191] = "forwardSlash";
  KeyCodes2[KeyCodes2["function1"] = 112] = "function1";
  KeyCodes2[KeyCodes2["function10"] = 121] = "function10";
  KeyCodes2[KeyCodes2["function11"] = 122] = "function11";
  KeyCodes2[KeyCodes2["function12"] = 123] = "function12";
  KeyCodes2[KeyCodes2["function2"] = 113] = "function2";
  KeyCodes2[KeyCodes2["function3"] = 114] = "function3";
  KeyCodes2[KeyCodes2["function4"] = 115] = "function4";
  KeyCodes2[KeyCodes2["function5"] = 116] = "function5";
  KeyCodes2[KeyCodes2["function6"] = 117] = "function6";
  KeyCodes2[KeyCodes2["function7"] = 118] = "function7";
  KeyCodes2[KeyCodes2["function8"] = 119] = "function8";
  KeyCodes2[KeyCodes2["function9"] = 120] = "function9";
  KeyCodes2[KeyCodes2["home"] = 36] = "home";
  KeyCodes2[KeyCodes2["insert"] = 45] = "insert";
  KeyCodes2[KeyCodes2["menu"] = 93] = "menu";
  KeyCodes2[KeyCodes2["minus"] = 189] = "minus";
  KeyCodes2[KeyCodes2["minus2"] = 109] = "minus2";
  KeyCodes2[KeyCodes2["numLock"] = 144] = "numLock";
  KeyCodes2[KeyCodes2["numPad0"] = 96] = "numPad0";
  KeyCodes2[KeyCodes2["numPad1"] = 97] = "numPad1";
  KeyCodes2[KeyCodes2["numPad2"] = 98] = "numPad2";
  KeyCodes2[KeyCodes2["numPad3"] = 99] = "numPad3";
  KeyCodes2[KeyCodes2["numPad4"] = 100] = "numPad4";
  KeyCodes2[KeyCodes2["numPad5"] = 101] = "numPad5";
  KeyCodes2[KeyCodes2["numPad6"] = 102] = "numPad6";
  KeyCodes2[KeyCodes2["numPad7"] = 103] = "numPad7";
  KeyCodes2[KeyCodes2["numPad8"] = 104] = "numPad8";
  KeyCodes2[KeyCodes2["numPad9"] = 105] = "numPad9";
  KeyCodes2[KeyCodes2["numPadDivide"] = 111] = "numPadDivide";
  KeyCodes2[KeyCodes2["numPadDot"] = 110] = "numPadDot";
  KeyCodes2[KeyCodes2["numPadMinus"] = 109] = "numPadMinus";
  KeyCodes2[KeyCodes2["numPadMultiply"] = 106] = "numPadMultiply";
  KeyCodes2[KeyCodes2["numPadPlus"] = 107] = "numPadPlus";
  KeyCodes2[KeyCodes2["openBracket"] = 219] = "openBracket";
  KeyCodes2[KeyCodes2["pageDown"] = 34] = "pageDown";
  KeyCodes2[KeyCodes2["pageUp"] = 33] = "pageUp";
  KeyCodes2[KeyCodes2["period"] = 190] = "period";
  KeyCodes2[KeyCodes2["print"] = 44] = "print";
  KeyCodes2[KeyCodes2["quote"] = 222] = "quote";
  KeyCodes2[KeyCodes2["scrollLock"] = 145] = "scrollLock";
  KeyCodes2[KeyCodes2["shift"] = 16] = "shift";
  KeyCodes2[KeyCodes2["space"] = 32] = "space";
  KeyCodes2[KeyCodes2["tab"] = 9] = "tab";
  KeyCodes2[KeyCodes2["tilde"] = 192] = "tilde";
  KeyCodes2[KeyCodes2["windowsLeft"] = 91] = "windowsLeft";
  KeyCodes2[KeyCodes2["windowsOpera"] = 219] = "windowsOpera";
  KeyCodes2[KeyCodes2["windowsRight"] = 92] = "windowsRight";
})(KeyCodes || (KeyCodes = {}));
var keyArrowDown = "ArrowDown";
var keyArrowLeft = "ArrowLeft";
var keyArrowRight = "ArrowRight";
var keyArrowUp = "ArrowUp";
var keyEnter = "Enter";
var keyEscape = "Escape";
var keyHome = "Home";
var keyEnd = "End";
var keySpace = " ";
var keyTab = "Tab";

// node_modules/@microsoft/fast-web-utilities/dist/numbers.js
function limit(min, max, value) {
  return Math.min(Math.max(value, min), max);
}
function inRange(value, min, max = 0) {
  [min, max] = [min, max].sort((a, b) => a - b);
  return min <= value && value < max;
}

// node_modules/@microsoft/fast-web-utilities/dist/strings.js
var uniqueIdCounter = 0;
function uniqueId(prefix = "") {
  return `${prefix}${uniqueIdCounter++}`;
}

// node_modules/@microsoft/fast-foundation/dist/esm/anchor/anchor.template.js
var anchorTemplate = (context, definition) => html`
    <a
        class="control"
        part="control"
        download="${(x) => x.download}"
        href="${(x) => x.href}"
        hreflang="${(x) => x.hreflang}"
        ping="${(x) => x.ping}"
        referrerpolicy="${(x) => x.referrerpolicy}"
        rel="${(x) => x.rel}"
        target="${(x) => x.target}"
        type="${(x) => x.type}"
        aria-atomic="${(x) => x.ariaAtomic}"
        aria-busy="${(x) => x.ariaBusy}"
        aria-controls="${(x) => x.ariaControls}"
        aria-current="${(x) => x.ariaCurrent}"
        aria-describedby="${(x) => x.ariaDescribedby}"
        aria-details="${(x) => x.ariaDetails}"
        aria-disabled="${(x) => x.ariaDisabled}"
        aria-errormessage="${(x) => x.ariaErrormessage}"
        aria-expanded="${(x) => x.ariaExpanded}"
        aria-flowto="${(x) => x.ariaFlowto}"
        aria-haspopup="${(x) => x.ariaHaspopup}"
        aria-hidden="${(x) => x.ariaHidden}"
        aria-invalid="${(x) => x.ariaInvalid}"
        aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
        aria-label="${(x) => x.ariaLabel}"
        aria-labelledby="${(x) => x.ariaLabelledby}"
        aria-live="${(x) => x.ariaLive}"
        aria-owns="${(x) => x.ariaOwns}"
        aria-relevant="${(x) => x.ariaRelevant}"
        aria-roledescription="${(x) => x.ariaRoledescription}"
        ${ref("control")}
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("defaultSlottedContent")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </a>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js
var ARIAGlobalStatesAndProperties = class {
};
__decorate([
  attr({ attribute: "aria-atomic" })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
__decorate([
  attr({ attribute: "aria-busy" })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
__decorate([
  attr({ attribute: "aria-controls" })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
__decorate([
  attr({ attribute: "aria-current" })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
__decorate([
  attr({ attribute: "aria-describedby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
__decorate([
  attr({ attribute: "aria-details" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
__decorate([
  attr({ attribute: "aria-disabled" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
__decorate([
  attr({ attribute: "aria-errormessage" })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
__decorate([
  attr({ attribute: "aria-flowto" })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
__decorate([
  attr({ attribute: "aria-haspopup" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
__decorate([
  attr({ attribute: "aria-hidden" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
__decorate([
  attr({ attribute: "aria-invalid" })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
__decorate([
  attr({ attribute: "aria-keyshortcuts" })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
__decorate([
  attr({ attribute: "aria-label" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
__decorate([
  attr({ attribute: "aria-labelledby" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
__decorate([
  attr({ attribute: "aria-live" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
__decorate([
  attr({ attribute: "aria-owns" })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
__decorate([
  attr({ attribute: "aria-relevant" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
__decorate([
  attr({ attribute: "aria-roledescription" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);

// node_modules/@microsoft/fast-foundation/dist/esm/anchor/anchor.js
var Anchor = class extends FoundationElement {
  constructor() {
    super(...arguments);
    this.handleUnsupportedDelegatesFocus = () => {
      var _a;
      if (window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
        this.focus = () => {
          var _a2;
          (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.focus();
        };
      }
    };
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.handleUnsupportedDelegatesFocus();
  }
};
__decorate([
  attr
], Anchor.prototype, "download", void 0);
__decorate([
  attr
], Anchor.prototype, "href", void 0);
__decorate([
  attr
], Anchor.prototype, "hreflang", void 0);
__decorate([
  attr
], Anchor.prototype, "ping", void 0);
__decorate([
  attr
], Anchor.prototype, "referrerpolicy", void 0);
__decorate([
  attr
], Anchor.prototype, "rel", void 0);
__decorate([
  attr
], Anchor.prototype, "target", void 0);
__decorate([
  attr
], Anchor.prototype, "type", void 0);
__decorate([
  observable
], Anchor.prototype, "defaultSlottedContent", void 0);
var DelegatesARIALink = class {
};
__decorate([
  attr({ attribute: "aria-expanded" })
], DelegatesARIALink.prototype, "ariaExpanded", void 0);
applyMixins(DelegatesARIALink, ARIAGlobalStatesAndProperties);
applyMixins(Anchor, StartEnd, DelegatesARIALink);

// node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js
var buttonTemplate = (context, definition) => html`
    <button
        class="control"
        part="control"
        ?autofocus="${(x) => x.autofocus}"
        ?disabled="${(x) => x.disabled}"
        form="${(x) => x.formId}"
        formaction="${(x) => x.formaction}"
        formenctype="${(x) => x.formenctype}"
        formmethod="${(x) => x.formmethod}"
        formnovalidate="${(x) => x.formnovalidate}"
        formtarget="${(x) => x.formtarget}"
        name="${(x) => x.name}"
        type="${(x) => x.type}"
        value="${(x) => x.value}"
        aria-atomic="${(x) => x.ariaAtomic}"
        aria-busy="${(x) => x.ariaBusy}"
        aria-controls="${(x) => x.ariaControls}"
        aria-current="${(x) => x.ariaCurrent}"
        aria-describedby="${(x) => x.ariaDescribedby}"
        aria-details="${(x) => x.ariaDetails}"
        aria-disabled="${(x) => x.ariaDisabled}"
        aria-errormessage="${(x) => x.ariaErrormessage}"
        aria-expanded="${(x) => x.ariaExpanded}"
        aria-flowto="${(x) => x.ariaFlowto}"
        aria-haspopup="${(x) => x.ariaHaspopup}"
        aria-hidden="${(x) => x.ariaHidden}"
        aria-invalid="${(x) => x.ariaInvalid}"
        aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
        aria-label="${(x) => x.ariaLabel}"
        aria-labelledby="${(x) => x.ariaLabelledby}"
        aria-live="${(x) => x.ariaLive}"
        aria-owns="${(x) => x.ariaOwns}"
        aria-pressed="${(x) => x.ariaPressed}"
        aria-relevant="${(x) => x.ariaRelevant}"
        aria-roledescription="${(x) => x.ariaRoledescription}"
        ${ref("control")}
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("defaultSlottedContent")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </button>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js
var proxySlotName = "form-associated-proxy";
var ElementInternalsKey = "ElementInternals";
var supportsElementInternals = ElementInternalsKey in window && "setFormValue" in window[ElementInternalsKey].prototype;
var InternalsMap = /* @__PURE__ */ new WeakMap();
function FormAssociated(BaseCtor) {
  const C = class extends BaseCtor {
    constructor(...args) {
      super(...args);
      this.dirtyValue = false;
      this.disabled = false;
      this.proxyEventsToBlock = ["change", "click"];
      this.proxyInitialized = false;
      this.required = false;
      this.initialValue = this.initialValue || "";
      if (!this.elementInternals) {
        this.formResetCallback = this.formResetCallback.bind(this);
      }
    }
    /**
     * Must evaluate to true to enable elementInternals.
     * Feature detects API support and resolve respectively
     *
     * @internal
     */
    static get formAssociated() {
      return supportsElementInternals;
    }
    /**
     * Returns the validity state of the element
     *
     * @alpha
     */
    get validity() {
      return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
    }
    /**
     * Retrieve a reference to the associated form.
     * Returns null if not associated to any form.
     *
     * @alpha
     */
    get form() {
      return this.elementInternals ? this.elementInternals.form : this.proxy.form;
    }
    /**
     * Retrieve the localized validation message,
     * or custom validation message if set.
     *
     * @alpha
     */
    get validationMessage() {
      return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
    }
    /**
     * Whether the element will be validated when the
     * form is submitted
     */
    get willValidate() {
      return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
    }
    /**
     * A reference to all associated label elements
     */
    get labels() {
      if (this.elementInternals) {
        return Object.freeze(Array.from(this.elementInternals.labels));
      } else if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
        const parentLabels = this.proxy.labels;
        const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
        const labels = parentLabels ? forLabels.concat(Array.from(parentLabels)) : forLabels;
        return Object.freeze(labels);
      } else {
        return emptyArray;
      }
    }
    /**
     * Invoked when the `value` property changes
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `valueChanged` method
     * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    valueChanged(previous, next) {
      this.dirtyValue = true;
      if (this.proxy instanceof HTMLElement) {
        this.proxy.value = this.value;
      }
      this.currentValue = this.value;
      this.setFormValue(this.value);
      this.validate();
    }
    currentValueChanged() {
      this.value = this.currentValue;
    }
    /**
     * Invoked when the `initialValue` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `initialValueChanged` method
     * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    initialValueChanged(previous, next) {
      if (!this.dirtyValue) {
        this.value = this.initialValue;
        this.dirtyValue = false;
      }
    }
    /**
     * Invoked when the `disabled` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `disabledChanged` method
     * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    disabledChanged(previous, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.disabled = this.disabled;
      }
      DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
    }
    /**
     * Invoked when the `name` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `nameChanged` method
     * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    nameChanged(previous, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.name = this.name;
      }
    }
    /**
     * Invoked when the `required` property changes
     *
     * @param previous - the previous value
     * @param next - the new value
     *
     * @remarks
     * If elements extending `FormAssociated` implement a `requiredChanged` method
     * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
     * proper functioning of `FormAssociated`
     */
    requiredChanged(prev, next) {
      if (this.proxy instanceof HTMLElement) {
        this.proxy.required = this.required;
      }
      DOM.queueUpdate(() => this.classList.toggle("required", this.required));
      this.validate();
    }
    /**
     * The element internals object. Will only exist
     * in browsers supporting the attachInternals API
     */
    get elementInternals() {
      if (!supportsElementInternals) {
        return null;
      }
      let internals = InternalsMap.get(this);
      if (!internals) {
        internals = this.attachInternals();
        InternalsMap.set(this, internals);
      }
      return internals;
    }
    /**
     * @internal
     */
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("keypress", this._keypressHandler);
      if (!this.value) {
        this.value = this.initialValue;
        this.dirtyValue = false;
      }
      if (!this.elementInternals) {
        this.attachProxy();
        if (this.form) {
          this.form.addEventListener("reset", this.formResetCallback);
        }
      }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.proxyEventsToBlock.forEach((name) => this.proxy.removeEventListener(name, this.stopPropagation));
      if (!this.elementInternals && this.form) {
        this.form.removeEventListener("reset", this.formResetCallback);
      }
    }
    /**
     * Return the current validity of the element.
     */
    checkValidity() {
      return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
    }
    /**
     * Return the current validity of the element.
     * If false, fires an invalid event at the element.
     */
    reportValidity() {
      return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
    }
    /**
     * Set the validity of the control. In cases when the elementInternals object is not
     * available (and the proxy element is used to report validity), this function will
     * do nothing unless a message is provided, at which point the setCustomValidity method
     * of the proxy element will be invoked with the provided message.
     * @param flags - Validity flags
     * @param message - Optional message to supply
     * @param anchor - Optional element used by UA to display an interactive validation UI
     */
    setValidity(flags, message, anchor) {
      if (this.elementInternals) {
        this.elementInternals.setValidity(flags, message, anchor);
      } else if (typeof message === "string") {
        this.proxy.setCustomValidity(message);
      }
    }
    /**
     * Invoked when a connected component's form or fieldset has its disabled
     * state changed.
     * @param disabled - the disabled value of the form / fieldset
     */
    formDisabledCallback(disabled) {
      this.disabled = disabled;
    }
    formResetCallback() {
      this.value = this.initialValue;
      this.dirtyValue = false;
    }
    /**
     * Attach the proxy element to the DOM
     */
    attachProxy() {
      var _a;
      if (!this.proxyInitialized) {
        this.proxyInitialized = true;
        this.proxy.style.display = "none";
        this.proxyEventsToBlock.forEach((name) => this.proxy.addEventListener(name, this.stopPropagation));
        this.proxy.disabled = this.disabled;
        this.proxy.required = this.required;
        if (typeof this.name === "string") {
          this.proxy.name = this.name;
        }
        if (typeof this.value === "string") {
          this.proxy.value = this.value;
        }
        this.proxy.setAttribute("slot", proxySlotName);
        this.proxySlot = document.createElement("slot");
        this.proxySlot.setAttribute("name", proxySlotName);
      }
      (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
      this.appendChild(this.proxy);
    }
    /**
     * Detach the proxy element from the DOM
     */
    detachProxy() {
      var _a;
      this.removeChild(this.proxy);
      (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
    }
    /** {@inheritDoc (FormAssociated:interface).validate} */
    validate(anchor) {
      if (this.proxy instanceof HTMLElement) {
        this.setValidity(this.proxy.validity, this.proxy.validationMessage, anchor);
      }
    }
    /**
     * Associates the provided value (and optional state) with the parent form.
     * @param value - The value to set
     * @param state - The state object provided to during session restores and when autofilling.
     */
    setFormValue(value, state) {
      if (this.elementInternals) {
        this.elementInternals.setFormValue(value, state || value);
      }
    }
    _keypressHandler(e) {
      switch (e.key) {
        case keyEnter:
          if (this.form instanceof HTMLFormElement) {
            const defaultButton = this.form.querySelector("[type=submit]");
            defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
          }
          break;
      }
    }
    /**
     * Used to stop propagation of proxy element events
     * @param e - Event object
     */
    stopPropagation(e) {
      e.stopPropagation();
    }
  };
  attr({ mode: "boolean" })(C.prototype, "disabled");
  attr({ mode: "fromView", attribute: "value" })(C.prototype, "initialValue");
  attr({ attribute: "current-value" })(C.prototype, "currentValue");
  attr(C.prototype, "name");
  attr({ mode: "boolean" })(C.prototype, "required");
  observable(C.prototype, "value");
  return C;
}
function CheckableFormAssociated(BaseCtor) {
  class C extends FormAssociated(BaseCtor) {
  }
  class D extends C {
    constructor(...args) {
      super(args);
      this.dirtyChecked = false;
      this.checkedAttribute = false;
      this.checked = false;
      this.dirtyChecked = false;
    }
    checkedAttributeChanged() {
      this.defaultChecked = this.checkedAttribute;
    }
    /**
     * @internal
     */
    defaultCheckedChanged() {
      if (!this.dirtyChecked) {
        this.checked = this.defaultChecked;
        this.dirtyChecked = false;
      }
    }
    checkedChanged(prev, next) {
      if (!this.dirtyChecked) {
        this.dirtyChecked = true;
      }
      this.currentChecked = this.checked;
      this.updateForm();
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.checked = this.checked;
      }
      if (prev !== void 0) {
        this.$emit("change");
      }
      this.validate();
    }
    currentCheckedChanged(prev, next) {
      this.checked = this.currentChecked;
    }
    updateForm() {
      const value = this.checked ? this.value : null;
      this.setFormValue(value, value);
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateForm();
    }
    formResetCallback() {
      super.formResetCallback();
      this.checked = !!this.checkedAttribute;
      this.dirtyChecked = false;
    }
  }
  attr({ attribute: "checked", mode: "boolean" })(D.prototype, "checkedAttribute");
  attr({ attribute: "current-checked", converter: booleanConverter })(D.prototype, "currentChecked");
  observable(D.prototype, "defaultChecked");
  observable(D.prototype, "checked");
  return D;
}

// node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js
var _Button = class extends FoundationElement {
};
var FormAssociatedButton = class extends FormAssociated(_Button) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/button/button.js
var Button = class extends FormAssociatedButton {
  constructor() {
    super(...arguments);
    this.handleClick = (e) => {
      var _a;
      if (this.disabled && ((_a = this.defaultSlottedContent) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
        e.stopPropagation();
      }
    };
    this.handleSubmission = () => {
      if (!this.form) {
        return;
      }
      const attached = this.proxy.isConnected;
      if (!attached) {
        this.attachProxy();
      }
      typeof this.form.requestSubmit === "function" ? this.form.requestSubmit(this.proxy) : this.proxy.click();
      if (!attached) {
        this.detachProxy();
      }
    };
    this.handleFormReset = () => {
      var _a;
      (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
    };
    this.handleUnsupportedDelegatesFocus = () => {
      var _a;
      if (window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
        this.focus = () => {
          this.control.focus();
        };
      }
    };
  }
  formactionChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formAction = this.formaction;
    }
  }
  formenctypeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formEnctype = this.formenctype;
    }
  }
  formmethodChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formMethod = this.formmethod;
    }
  }
  formnovalidateChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formNoValidate = this.formnovalidate;
    }
  }
  formtargetChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.formTarget = this.formtarget;
    }
  }
  typeChanged(previous, next) {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.type = this.type;
    }
    next === "submit" && this.addEventListener("click", this.handleSubmission);
    previous === "submit" && this.removeEventListener("click", this.handleSubmission);
    next === "reset" && this.addEventListener("click", this.handleFormReset);
    previous === "reset" && this.removeEventListener("click", this.handleFormReset);
  }
  /** {@inheritDoc (FormAssociated:interface).validate} */
  validate() {
    super.validate(this.control);
  }
  /**
   * @internal
   */
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this.proxy.setAttribute("type", this.type);
    this.handleUnsupportedDelegatesFocus();
    const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
    if (elements) {
      elements.forEach((span) => {
        span.addEventListener("click", this.handleClick);
      });
    }
  }
  /**
   * @internal
   */
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
    if (elements) {
      elements.forEach((span) => {
        span.removeEventListener("click", this.handleClick);
      });
    }
  }
};
__decorate([
  attr({ mode: "boolean" })
], Button.prototype, "autofocus", void 0);
__decorate([
  attr({ attribute: "form" })
], Button.prototype, "formId", void 0);
__decorate([
  attr
], Button.prototype, "formaction", void 0);
__decorate([
  attr
], Button.prototype, "formenctype", void 0);
__decorate([
  attr
], Button.prototype, "formmethod", void 0);
__decorate([
  attr({ mode: "boolean" })
], Button.prototype, "formnovalidate", void 0);
__decorate([
  attr
], Button.prototype, "formtarget", void 0);
__decorate([
  attr
], Button.prototype, "type", void 0);
__decorate([
  observable
], Button.prototype, "defaultSlottedContent", void 0);
var DelegatesARIAButton = class {
};
__decorate([
  attr({ attribute: "aria-expanded" })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
__decorate([
  attr({ attribute: "aria-pressed" })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
applyMixins(DelegatesARIAButton, ARIAGlobalStatesAndProperties);
applyMixins(Button, StartEnd, DelegatesARIAButton);

// node_modules/@microsoft/fast-foundation/dist/esm/checkbox/checkbox.template.js
var checkboxTemplate = (context, definition) => html`
    <template
        role="checkbox"
        aria-checked="${(x) => x.checked}"
        aria-required="${(x) => x.required}"
        aria-disabled="${(x) => x.disabled}"
        aria-readonly="${(x) => x.readOnly}"
        tabindex="${(x) => x.disabled ? null : 0}"
        @keypress="${(x, c) => x.keypressHandler(c.event)}"
        @click="${(x, c) => x.clickHandler(c.event)}"
        class="${(x) => x.readOnly ? "readonly" : ""} ${(x) => x.checked ? "checked" : ""} ${(x) => x.indeterminate ? "indeterminate" : ""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${definition.checkedIndicator || ""}
            </slot>
            <slot name="indeterminate-indicator">
                ${definition.indeterminateIndicator || ""}
            </slot>
        </div>
        <label
            part="label"
            class="${(x) => x.defaultSlottedNodes && x.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot ${slotted("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/checkbox/checkbox.form-associated.js
var _Checkbox = class extends FoundationElement {
};
var FormAssociatedCheckbox = class extends CheckableFormAssociated(_Checkbox) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/checkbox/checkbox.js
var Checkbox = class extends FormAssociatedCheckbox {
  constructor() {
    super();
    this.initialValue = "on";
    this.indeterminate = false;
    this.keypressHandler = (e) => {
      if (this.readOnly) {
        return;
      }
      switch (e.key) {
        case keySpace:
          if (this.indeterminate) {
            this.indeterminate = false;
          }
          this.checked = !this.checked;
          break;
      }
    };
    this.clickHandler = (e) => {
      if (!this.disabled && !this.readOnly) {
        if (this.indeterminate) {
          this.indeterminate = false;
        }
        this.checked = !this.checked;
      }
    };
    this.proxy.setAttribute("type", "checkbox");
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
    }
  }
};
__decorate([
  attr({ attribute: "readonly", mode: "boolean" })
], Checkbox.prototype, "readOnly", void 0);
__decorate([
  observable
], Checkbox.prototype, "defaultSlottedNodes", void 0);
__decorate([
  observable
], Checkbox.prototype, "indeterminate", void 0);

// node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js
function isListboxOption(el) {
  return isHTMLElement(el) && (el.getAttribute("role") === "option" || el instanceof HTMLOptionElement);
}
var ListboxOption = class extends FoundationElement {
  constructor(text, value, defaultSelected, selected) {
    super();
    this.defaultSelected = false;
    this.dirtySelected = false;
    this.selected = this.defaultSelected;
    this.dirtyValue = false;
    if (text) {
      this.textContent = text;
    }
    if (value) {
      this.initialValue = value;
    }
    if (defaultSelected) {
      this.defaultSelected = defaultSelected;
    }
    if (selected) {
      this.selected = selected;
    }
    this.proxy = new Option(`${this.textContent}`, this.initialValue, this.defaultSelected, this.selected);
    this.proxy.disabled = this.disabled;
  }
  /**
   * Updates the ariaChecked property when the checked property changes.
   *
   * @param prev - the previous checked value
   * @param next - the current checked value
   *
   * @public
   */
  checkedChanged(prev, next) {
    if (typeof next === "boolean") {
      this.ariaChecked = next ? "true" : "false";
      return;
    }
    this.ariaChecked = null;
  }
  /**
   * Updates the proxy's text content when the default slot changes.
   * @param prev - the previous content value
   * @param next - the current content value
   *
   * @internal
   */
  contentChanged(prev, next) {
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.textContent = this.textContent;
    }
    this.$emit("contentchange", null, { bubbles: true });
  }
  defaultSelectedChanged() {
    if (!this.dirtySelected) {
      this.selected = this.defaultSelected;
      if (this.proxy instanceof HTMLOptionElement) {
        this.proxy.selected = this.defaultSelected;
      }
    }
  }
  disabledChanged(prev, next) {
    this.ariaDisabled = this.disabled ? "true" : "false";
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.disabled = this.disabled;
    }
  }
  selectedAttributeChanged() {
    this.defaultSelected = this.selectedAttribute;
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.defaultSelected = this.defaultSelected;
    }
  }
  selectedChanged() {
    this.ariaSelected = this.selected ? "true" : "false";
    if (!this.dirtySelected) {
      this.dirtySelected = true;
    }
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.selected = this.selected;
    }
  }
  initialValueChanged(previous, next) {
    if (!this.dirtyValue) {
      this.value = this.initialValue;
      this.dirtyValue = false;
    }
  }
  get label() {
    var _a;
    return (_a = this.value) !== null && _a !== void 0 ? _a : this.text;
  }
  get text() {
    var _a, _b;
    return (_b = (_a = this.textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, " ").trim()) !== null && _b !== void 0 ? _b : "";
  }
  set value(next) {
    const newValue = `${next !== null && next !== void 0 ? next : ""}`;
    this._value = newValue;
    this.dirtyValue = true;
    if (this.proxy instanceof HTMLOptionElement) {
      this.proxy.value = newValue;
    }
    Observable.notify(this, "value");
  }
  get value() {
    var _a;
    Observable.track(this, "value");
    return (_a = this._value) !== null && _a !== void 0 ? _a : this.text;
  }
  get form() {
    return this.proxy ? this.proxy.form : null;
  }
};
__decorate([
  observable
], ListboxOption.prototype, "checked", void 0);
__decorate([
  observable
], ListboxOption.prototype, "content", void 0);
__decorate([
  observable
], ListboxOption.prototype, "defaultSelected", void 0);
__decorate([
  attr({ mode: "boolean" })
], ListboxOption.prototype, "disabled", void 0);
__decorate([
  attr({ attribute: "selected", mode: "boolean" })
], ListboxOption.prototype, "selectedAttribute", void 0);
__decorate([
  observable
], ListboxOption.prototype, "selected", void 0);
__decorate([
  attr({ attribute: "value", mode: "fromView" })
], ListboxOption.prototype, "initialValue", void 0);
var DelegatesARIAListboxOption = class {
};
__decorate([
  observable
], DelegatesARIAListboxOption.prototype, "ariaChecked", void 0);
__decorate([
  observable
], DelegatesARIAListboxOption.prototype, "ariaPosInSet", void 0);
__decorate([
  observable
], DelegatesARIAListboxOption.prototype, "ariaSelected", void 0);
__decorate([
  observable
], DelegatesARIAListboxOption.prototype, "ariaSetSize", void 0);
applyMixins(DelegatesARIAListboxOption, ARIAGlobalStatesAndProperties);
applyMixins(ListboxOption, StartEnd, DelegatesARIAListboxOption);

// node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js
var Listbox = class _Listbox extends FoundationElement {
  constructor() {
    super(...arguments);
    this._options = [];
    this.selectedIndex = -1;
    this.selectedOptions = [];
    this.shouldSkipFocus = false;
    this.typeaheadBuffer = "";
    this.typeaheadExpired = true;
    this.typeaheadTimeout = -1;
  }
  /**
   * The first selected option.
   *
   * @internal
   */
  get firstSelectedOption() {
    var _a;
    return (_a = this.selectedOptions[0]) !== null && _a !== void 0 ? _a : null;
  }
  /**
   * Returns true if there is one or more selectable option.
   *
   * @internal
   */
  get hasSelectableOptions() {
    return this.options.length > 0 && !this.options.every((o) => o.disabled);
  }
  /**
   * The number of options.
   *
   * @public
   */
  get length() {
    var _a, _b;
    return (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
  }
  /**
   * The list of options.
   *
   * @public
   */
  get options() {
    Observable.track(this, "options");
    return this._options;
  }
  set options(value) {
    this._options = value;
    Observable.notify(this, "options");
  }
  /**
   * Flag for the typeahead timeout expiration.
   *
   * @deprecated use `Listbox.typeaheadExpired`
   * @internal
   */
  get typeAheadExpired() {
    return this.typeaheadExpired;
  }
  set typeAheadExpired(value) {
    this.typeaheadExpired = value;
  }
  /**
   * Handle click events for listbox options.
   *
   * @internal
   */
  clickHandler(e) {
    const captured = e.target.closest(`option,[role=option]`);
    if (captured && !captured.disabled) {
      this.selectedIndex = this.options.indexOf(captured);
      return true;
    }
  }
  /**
   * Ensures that the provided option is focused and scrolled into view.
   *
   * @param optionToFocus - The option to focus
   * @internal
   */
  focusAndScrollOptionIntoView(optionToFocus = this.firstSelectedOption) {
    if (this.contains(document.activeElement) && optionToFocus !== null) {
      optionToFocus.focus();
      requestAnimationFrame(() => {
        optionToFocus.scrollIntoView({ block: "nearest" });
      });
    }
  }
  /**
   * Handles `focusin` actions for the component. When the component receives focus,
   * the list of selected options is refreshed and the first selected option is scrolled
   * into view.
   *
   * @internal
   */
  focusinHandler(e) {
    if (!this.shouldSkipFocus && e.target === e.currentTarget) {
      this.setSelectedOptions();
      this.focusAndScrollOptionIntoView();
    }
    this.shouldSkipFocus = false;
  }
  /**
   * Returns the options which match the current typeahead buffer.
   *
   * @internal
   */
  getTypeaheadMatches() {
    const pattern = this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`^${pattern}`, "gi");
    return this.options.filter((o) => o.text.trim().match(re));
  }
  /**
   * Determines the index of the next option which is selectable, if any.
   *
   * @param prev - the previous selected index
   * @param next - the next index to select
   *
   * @internal
   */
  getSelectableIndex(prev = this.selectedIndex, next) {
    const direction = prev > next ? -1 : prev < next ? 1 : 0;
    const potentialDirection = prev + direction;
    let nextSelectableOption = null;
    switch (direction) {
      case -1: {
        nextSelectableOption = this.options.reduceRight((nextSelectableOption2, thisOption, index) => !nextSelectableOption2 && !thisOption.disabled && index < potentialDirection ? thisOption : nextSelectableOption2, nextSelectableOption);
        break;
      }
      case 1: {
        nextSelectableOption = this.options.reduce((nextSelectableOption2, thisOption, index) => !nextSelectableOption2 && !thisOption.disabled && index > potentialDirection ? thisOption : nextSelectableOption2, nextSelectableOption);
        break;
      }
    }
    return this.options.indexOf(nextSelectableOption);
  }
  /**
   * Handles external changes to child options.
   *
   * @param source - the source object
   * @param propertyName - the property
   *
   * @internal
   */
  handleChange(source, propertyName) {
    switch (propertyName) {
      case "selected": {
        if (_Listbox.slottedOptionFilter(source)) {
          this.selectedIndex = this.options.indexOf(source);
        }
        this.setSelectedOptions();
        break;
      }
    }
  }
  /**
   * Moves focus to an option whose label matches characters typed by the user.
   * Consecutive keystrokes are batched into a buffer of search text used
   * to match against the set of options.  If `TYPE_AHEAD_TIMEOUT_MS` passes
   * between consecutive keystrokes, the search restarts.
   *
   * @param key - the key to be evaluated
   *
   * @internal
   */
  handleTypeAhead(key) {
    if (this.typeaheadTimeout) {
      window.clearTimeout(this.typeaheadTimeout);
    }
    this.typeaheadTimeout = window.setTimeout(() => this.typeaheadExpired = true, _Listbox.TYPE_AHEAD_TIMEOUT_MS);
    if (key.length > 1) {
      return;
    }
    this.typeaheadBuffer = `${this.typeaheadExpired ? "" : this.typeaheadBuffer}${key}`;
  }
  /**
   * Handles `keydown` actions for listbox navigation and typeahead.
   *
   * @internal
   */
  keydownHandler(e) {
    if (this.disabled) {
      return true;
    }
    this.shouldSkipFocus = false;
    const key = e.key;
    switch (key) {
      case keyHome: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectFirstOption();
        }
        break;
      }
      case keyArrowDown: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectNextOption();
        }
        break;
      }
      case keyArrowUp: {
        if (!e.shiftKey) {
          e.preventDefault();
          this.selectPreviousOption();
        }
        break;
      }
      case keyEnd: {
        e.preventDefault();
        this.selectLastOption();
        break;
      }
      case keyTab: {
        this.focusAndScrollOptionIntoView();
        return true;
      }
      case keyEnter:
      case keyEscape: {
        return true;
      }
      case keySpace: {
        if (this.typeaheadExpired) {
          return true;
        }
      }
      default: {
        if (key.length === 1) {
          this.handleTypeAhead(`${key}`);
        }
        return true;
      }
    }
  }
  /**
   * Prevents `focusin` events from firing before `click` events when the
   * element is unfocused.
   *
   * @internal
   */
  mousedownHandler(e) {
    this.shouldSkipFocus = !this.contains(document.activeElement);
    return true;
  }
  /**
   * Switches between single-selection and multi-selection mode.
   *
   * @param prev - the previous value of the `multiple` attribute
   * @param next - the next value of the `multiple` attribute
   *
   * @internal
   */
  multipleChanged(prev, next) {
    this.ariaMultiSelectable = next ? "true" : null;
  }
  /**
   * Updates the list of selected options when the `selectedIndex` changes.
   *
   * @param prev - the previous selected index value
   * @param next - the current selected index value
   *
   * @internal
   */
  selectedIndexChanged(prev, next) {
    var _a;
    if (!this.hasSelectableOptions) {
      this.selectedIndex = -1;
      return;
    }
    if (((_a = this.options[this.selectedIndex]) === null || _a === void 0 ? void 0 : _a.disabled) && typeof prev === "number") {
      const selectableIndex = this.getSelectableIndex(prev, next);
      const newNext = selectableIndex > -1 ? selectableIndex : prev;
      this.selectedIndex = newNext;
      if (next === newNext) {
        this.selectedIndexChanged(next, newNext);
      }
      return;
    }
    this.setSelectedOptions();
  }
  /**
   * Updates the selectedness of each option when the list of selected options changes.
   *
   * @param prev - the previous list of selected options
   * @param next - the current list of selected options
   *
   * @internal
   */
  selectedOptionsChanged(prev, next) {
    var _a;
    const filteredNext = next.filter(_Listbox.slottedOptionFilter);
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.unsubscribe(this, "selected");
      o.selected = filteredNext.includes(o);
      notifier.subscribe(this, "selected");
    });
  }
  /**
   * Moves focus to the first selectable option.
   *
   * @public
   */
  selectFirstOption() {
    var _a, _b;
    if (!this.disabled) {
      this.selectedIndex = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.findIndex((o) => !o.disabled)) !== null && _b !== void 0 ? _b : -1;
    }
  }
  /**
   * Moves focus to the last selectable option.
   *
   * @internal
   */
  selectLastOption() {
    if (!this.disabled) {
      this.selectedIndex = findLastIndex(this.options, (o) => !o.disabled);
    }
  }
  /**
   * Moves focus to the next selectable option.
   *
   * @internal
   */
  selectNextOption() {
    if (!this.disabled && this.selectedIndex < this.options.length - 1) {
      this.selectedIndex += 1;
    }
  }
  /**
   * Moves focus to the previous selectable option.
   *
   * @internal
   */
  selectPreviousOption() {
    if (!this.disabled && this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
  /**
   * Updates the selected index to match the first selected option.
   *
   * @internal
   */
  setDefaultSelectedOption() {
    var _a, _b;
    this.selectedIndex = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.findIndex((el) => el.defaultSelected)) !== null && _b !== void 0 ? _b : -1;
  }
  /**
   * Sets an option as selected and gives it focus.
   *
   * @public
   */
  setSelectedOptions() {
    var _a, _b, _c;
    if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) {
      this.selectedOptions = [this.options[this.selectedIndex]];
      this.ariaActiveDescendant = (_c = (_b = this.firstSelectedOption) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : "";
      this.focusAndScrollOptionIntoView();
    }
  }
  /**
   * Updates the list of options and resets the selected option when the slotted option content changes.
   *
   * @param prev - the previous list of slotted options
   * @param next - the current list of slotted options
   *
   * @internal
   */
  slottedOptionsChanged(prev, next) {
    this.options = next.reduce((options, item) => {
      if (isListboxOption(item)) {
        options.push(item);
      }
      return options;
    }, []);
    const setSize = `${this.options.length}`;
    this.options.forEach((option, index) => {
      if (!option.id) {
        option.id = uniqueId("option-");
      }
      option.ariaPosInSet = `${index + 1}`;
      option.ariaSetSize = setSize;
    });
    if (this.$fastController.isConnected) {
      this.setSelectedOptions();
      this.setDefaultSelectedOption();
    }
  }
  /**
   * Updates the filtered list of options when the typeahead buffer changes.
   *
   * @param prev - the previous typeahead buffer value
   * @param next - the current typeahead buffer value
   *
   * @internal
   */
  typeaheadBufferChanged(prev, next) {
    if (this.$fastController.isConnected) {
      const typeaheadMatches = this.getTypeaheadMatches();
      if (typeaheadMatches.length) {
        const selectedIndex = this.options.indexOf(typeaheadMatches[0]);
        if (selectedIndex > -1) {
          this.selectedIndex = selectedIndex;
        }
      }
      this.typeaheadExpired = false;
    }
  }
};
Listbox.slottedOptionFilter = (n) => isListboxOption(n) && !n.hidden;
Listbox.TYPE_AHEAD_TIMEOUT_MS = 1e3;
__decorate([
  attr({ mode: "boolean" })
], Listbox.prototype, "disabled", void 0);
__decorate([
  observable
], Listbox.prototype, "selectedIndex", void 0);
__decorate([
  observable
], Listbox.prototype, "selectedOptions", void 0);
__decorate([
  observable
], Listbox.prototype, "slottedOptions", void 0);
__decorate([
  observable
], Listbox.prototype, "typeaheadBuffer", void 0);
var DelegatesARIAListbox = class {
};
__decorate([
  observable
], DelegatesARIAListbox.prototype, "ariaActiveDescendant", void 0);
__decorate([
  observable
], DelegatesARIAListbox.prototype, "ariaDisabled", void 0);
__decorate([
  observable
], DelegatesARIAListbox.prototype, "ariaExpanded", void 0);
__decorate([
  observable
], DelegatesARIAListbox.prototype, "ariaMultiSelectable", void 0);
applyMixins(DelegatesARIAListbox, ARIAGlobalStatesAndProperties);
applyMixins(Listbox, DelegatesARIAListbox);

// node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js
var SelectPosition = {
  above: "above",
  below: "below"
};

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js
function composedParent(element) {
  const parentNode = element.parentElement;
  if (parentNode) {
    return parentNode;
  } else {
    const rootNode = element.getRootNode();
    if (rootNode.host instanceof HTMLElement) {
      return rootNode.host;
    }
  }
  return null;
}

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-contains.js
function composedContains(reference, test) {
  let current = test;
  while (current !== null) {
    if (current === reference) {
      return true;
    }
    current = composedParent(current);
  }
  return false;
}

// node_modules/@microsoft/fast-foundation/dist/esm/design-token/custom-property-manager.js
var defaultElement = document.createElement("div");
function isFastElement(element) {
  return element instanceof FASTElement;
}
var QueuedStyleSheetTarget = class {
  setProperty(name, value) {
    DOM.queueUpdate(() => this.target.setProperty(name, value));
  }
  removeProperty(name) {
    DOM.queueUpdate(() => this.target.removeProperty(name));
  }
};
var ConstructableStyleSheetTarget = class extends QueuedStyleSheetTarget {
  constructor(source) {
    super();
    const sheet = new CSSStyleSheet();
    this.target = sheet.cssRules[sheet.insertRule(":host{}")].style;
    source.$fastController.addStyles(ElementStyles.create([sheet]));
  }
};
var DocumentStyleSheetTarget = class extends QueuedStyleSheetTarget {
  constructor() {
    super();
    const sheet = new CSSStyleSheet();
    this.target = sheet.cssRules[sheet.insertRule(":root{}")].style;
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      sheet
    ];
  }
};
var HeadStyleElementStyleSheetTarget = class extends QueuedStyleSheetTarget {
  constructor() {
    super();
    this.style = document.createElement("style");
    document.head.appendChild(this.style);
    const { sheet } = this.style;
    if (sheet) {
      const index = sheet.insertRule(":root{}", sheet.cssRules.length);
      this.target = sheet.cssRules[index].style;
    }
  }
};
var StyleElementStyleSheetTarget = class {
  constructor(target) {
    this.store = /* @__PURE__ */ new Map();
    this.target = null;
    const controller = target.$fastController;
    this.style = document.createElement("style");
    controller.addStyles(this.style);
    Observable.getNotifier(controller).subscribe(this, "isConnected");
    this.handleChange(controller, "isConnected");
  }
  targetChanged() {
    if (this.target !== null) {
      for (const [key, value] of this.store.entries()) {
        this.target.setProperty(key, value);
      }
    }
  }
  setProperty(name, value) {
    this.store.set(name, value);
    DOM.queueUpdate(() => {
      if (this.target !== null) {
        this.target.setProperty(name, value);
      }
    });
  }
  removeProperty(name) {
    this.store.delete(name);
    DOM.queueUpdate(() => {
      if (this.target !== null) {
        this.target.removeProperty(name);
      }
    });
  }
  handleChange(source, key) {
    const { sheet } = this.style;
    if (sheet) {
      const index = sheet.insertRule(":host{}", sheet.cssRules.length);
      this.target = sheet.cssRules[index].style;
    } else {
      this.target = null;
    }
  }
};
__decorate([
  observable
], StyleElementStyleSheetTarget.prototype, "target", void 0);
var ElementStyleSheetTarget = class {
  constructor(source) {
    this.target = source.style;
  }
  setProperty(name, value) {
    DOM.queueUpdate(() => this.target.setProperty(name, value));
  }
  removeProperty(name) {
    DOM.queueUpdate(() => this.target.removeProperty(name));
  }
};
var RootStyleSheetTarget = class _RootStyleSheetTarget {
  setProperty(name, value) {
    _RootStyleSheetTarget.properties[name] = value;
    for (const target of _RootStyleSheetTarget.roots.values()) {
      PropertyTargetManager.getOrCreate(_RootStyleSheetTarget.normalizeRoot(target)).setProperty(name, value);
    }
  }
  removeProperty(name) {
    delete _RootStyleSheetTarget.properties[name];
    for (const target of _RootStyleSheetTarget.roots.values()) {
      PropertyTargetManager.getOrCreate(_RootStyleSheetTarget.normalizeRoot(target)).removeProperty(name);
    }
  }
  static registerRoot(root) {
    const { roots } = _RootStyleSheetTarget;
    if (!roots.has(root)) {
      roots.add(root);
      const target = PropertyTargetManager.getOrCreate(this.normalizeRoot(root));
      for (const key in _RootStyleSheetTarget.properties) {
        target.setProperty(key, _RootStyleSheetTarget.properties[key]);
      }
    }
  }
  static unregisterRoot(root) {
    const { roots } = _RootStyleSheetTarget;
    if (roots.has(root)) {
      roots.delete(root);
      const target = PropertyTargetManager.getOrCreate(_RootStyleSheetTarget.normalizeRoot(root));
      for (const key in _RootStyleSheetTarget.properties) {
        target.removeProperty(key);
      }
    }
  }
  /**
   * Returns the document when provided the default element,
   * otherwise is a no-op
   * @param root - the root to normalize
   */
  static normalizeRoot(root) {
    return root === defaultElement ? document : root;
  }
};
RootStyleSheetTarget.roots = /* @__PURE__ */ new Set();
RootStyleSheetTarget.properties = {};
var propertyTargetCache = /* @__PURE__ */ new WeakMap();
var propertyTargetCtor = DOM.supportsAdoptedStyleSheets ? ConstructableStyleSheetTarget : StyleElementStyleSheetTarget;
var PropertyTargetManager = Object.freeze({
  getOrCreate(source) {
    if (propertyTargetCache.has(source)) {
      return propertyTargetCache.get(source);
    }
    let target;
    if (source === defaultElement) {
      target = new RootStyleSheetTarget();
    } else if (source instanceof Document) {
      target = DOM.supportsAdoptedStyleSheets ? new DocumentStyleSheetTarget() : new HeadStyleElementStyleSheetTarget();
    } else if (isFastElement(source)) {
      target = new propertyTargetCtor(source);
    } else {
      target = new ElementStyleSheetTarget(source);
    }
    propertyTargetCache.set(source, target);
    return target;
  }
});

// node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js
var DesignTokenImpl = class _DesignTokenImpl extends CSSDirective {
  constructor(configuration2) {
    super();
    this.subscribers = /* @__PURE__ */ new WeakMap();
    this._appliedTo = /* @__PURE__ */ new Set();
    this.name = configuration2.name;
    if (configuration2.cssCustomPropertyName !== null) {
      this.cssCustomProperty = `--${configuration2.cssCustomPropertyName}`;
      this.cssVar = `var(${this.cssCustomProperty})`;
    }
    this.id = _DesignTokenImpl.uniqueId();
    _DesignTokenImpl.tokensById.set(this.id, this);
  }
  get appliedTo() {
    return [...this._appliedTo];
  }
  static from(nameOrConfig) {
    return new _DesignTokenImpl({
      name: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.name,
      cssCustomPropertyName: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.cssCustomPropertyName === void 0 ? nameOrConfig.name : nameOrConfig.cssCustomPropertyName
    });
  }
  static isCSSDesignToken(token) {
    return typeof token.cssCustomProperty === "string";
  }
  static isDerivedDesignTokenValue(value) {
    return typeof value === "function";
  }
  /**
   * Gets a token by ID. Returns undefined if the token was not found.
   * @param id - The ID of the token
   * @returns
   */
  static getTokenById(id) {
    return _DesignTokenImpl.tokensById.get(id);
  }
  getOrCreateSubscriberSet(target = this) {
    return this.subscribers.get(target) || this.subscribers.set(target, /* @__PURE__ */ new Set()) && this.subscribers.get(target);
  }
  createCSS() {
    return this.cssVar || "";
  }
  getValueFor(element) {
    const value = DesignTokenNode.getOrCreate(element).get(this);
    if (value !== void 0) {
      return value;
    }
    throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${element} or an ancestor of ${element}.`);
  }
  setValueFor(element, value) {
    this._appliedTo.add(element);
    if (value instanceof _DesignTokenImpl) {
      value = this.alias(value);
    }
    DesignTokenNode.getOrCreate(element).set(this, value);
    return this;
  }
  deleteValueFor(element) {
    this._appliedTo.delete(element);
    if (DesignTokenNode.existsFor(element)) {
      DesignTokenNode.getOrCreate(element).delete(this);
    }
    return this;
  }
  withDefault(value) {
    this.setValueFor(defaultElement, value);
    return this;
  }
  subscribe(subscriber, target) {
    const subscriberSet = this.getOrCreateSubscriberSet(target);
    if (target && !DesignTokenNode.existsFor(target)) {
      DesignTokenNode.getOrCreate(target);
    }
    if (!subscriberSet.has(subscriber)) {
      subscriberSet.add(subscriber);
    }
  }
  unsubscribe(subscriber, target) {
    const list = this.subscribers.get(target || this);
    if (list && list.has(subscriber)) {
      list.delete(subscriber);
    }
  }
  /**
   * Notifies subscribers that the value for an element has changed.
   * @param element - The element to emit a notification for
   */
  notify(element) {
    const record = Object.freeze({ token: this, target: element });
    if (this.subscribers.has(this)) {
      this.subscribers.get(this).forEach((sub) => sub.handleChange(record));
    }
    if (this.subscribers.has(element)) {
      this.subscribers.get(element).forEach((sub) => sub.handleChange(record));
    }
  }
  /**
   * Alias the token to the provided token.
   * @param token - the token to alias to
   */
  alias(token) {
    return (target) => token.getValueFor(target);
  }
};
DesignTokenImpl.uniqueId = /* @__PURE__ */ (() => {
  let id = 0;
  return () => {
    id++;
    return id.toString(16);
  };
})();
DesignTokenImpl.tokensById = /* @__PURE__ */ new Map();
var CustomPropertyReflector = class {
  startReflection(token, target) {
    token.subscribe(this, target);
    this.handleChange({ token, target });
  }
  stopReflection(token, target) {
    token.unsubscribe(this, target);
    this.remove(token, target);
  }
  handleChange(record) {
    const { token, target } = record;
    this.add(token, target);
  }
  add(token, target) {
    PropertyTargetManager.getOrCreate(target).setProperty(token.cssCustomProperty, this.resolveCSSValue(DesignTokenNode.getOrCreate(target).get(token)));
  }
  remove(token, target) {
    PropertyTargetManager.getOrCreate(target).removeProperty(token.cssCustomProperty);
  }
  resolveCSSValue(value) {
    return value && typeof value.createCSS === "function" ? value.createCSS() : value;
  }
};
var DesignTokenBindingObserver = class {
  constructor(source, token, node) {
    this.source = source;
    this.token = token;
    this.node = node;
    this.dependencies = /* @__PURE__ */ new Set();
    this.observer = Observable.binding(source, this, false);
    this.observer.handleChange = this.observer.call;
    this.handleChange();
  }
  disconnect() {
    this.observer.disconnect();
  }
  /**
   * @internal
   */
  handleChange() {
    this.node.store.set(this.token, this.observer.observe(this.node.target, defaultExecutionContext));
  }
};
var Store = class {
  constructor() {
    this.values = /* @__PURE__ */ new Map();
  }
  set(token, value) {
    if (this.values.get(token) !== value) {
      this.values.set(token, value);
      Observable.getNotifier(this).notify(token.id);
    }
  }
  get(token) {
    Observable.track(this, token.id);
    return this.values.get(token);
  }
  delete(token) {
    this.values.delete(token);
  }
  all() {
    return this.values.entries();
  }
};
var nodeCache = /* @__PURE__ */ new WeakMap();
var childToParent = /* @__PURE__ */ new WeakMap();
var DesignTokenNode = class _DesignTokenNode {
  constructor(target) {
    this.target = target;
    this.store = new Store();
    this.children = [];
    this.assignedValues = /* @__PURE__ */ new Map();
    this.reflecting = /* @__PURE__ */ new Set();
    this.bindingObservers = /* @__PURE__ */ new Map();
    this.tokenValueChangeHandler = {
      handleChange: (source, arg) => {
        const token = DesignTokenImpl.getTokenById(arg);
        if (token) {
          token.notify(this.target);
          this.updateCSSTokenReflection(source, token);
        }
      }
    };
    nodeCache.set(target, this);
    Observable.getNotifier(this.store).subscribe(this.tokenValueChangeHandler);
    if (target instanceof FASTElement) {
      target.$fastController.addBehaviors([this]);
    } else if (target.isConnected) {
      this.bind();
    }
  }
  /**
   * Returns a DesignTokenNode for an element.
   * Creates a new instance if one does not already exist for a node,
   * otherwise returns the cached instance
   *
   * @param target - The HTML element to retrieve a DesignTokenNode for
   */
  static getOrCreate(target) {
    return nodeCache.get(target) || new _DesignTokenNode(target);
  }
  /**
   * Determines if a DesignTokenNode has been created for a target
   * @param target - The element to test
   */
  static existsFor(target) {
    return nodeCache.has(target);
  }
  /**
   * Searches for and return the nearest parent DesignTokenNode.
   * Null is returned if no node is found or the node provided is for a default element.
   */
  static findParent(node) {
    if (!(defaultElement === node.target)) {
      let parent = composedParent(node.target);
      while (parent !== null) {
        if (nodeCache.has(parent)) {
          return nodeCache.get(parent);
        }
        parent = composedParent(parent);
      }
      return _DesignTokenNode.getOrCreate(defaultElement);
    }
    return null;
  }
  /**
   * Finds the closest node with a value explicitly assigned for a token, otherwise null.
   * @param token - The token to look for
   * @param start - The node to start looking for value assignment
   * @returns
   */
  static findClosestAssignedNode(token, start) {
    let current = start;
    do {
      if (current.has(token)) {
        return current;
      }
      current = current.parent ? current.parent : current.target !== defaultElement ? _DesignTokenNode.getOrCreate(defaultElement) : null;
    } while (current !== null);
    return null;
  }
  /**
   * The parent DesignTokenNode, or null.
   */
  get parent() {
    return childToParent.get(this) || null;
  }
  updateCSSTokenReflection(source, token) {
    if (DesignTokenImpl.isCSSDesignToken(token)) {
      const parent = this.parent;
      const reflecting = this.isReflecting(token);
      if (parent) {
        const parentValue = parent.get(token);
        const sourceValue = source.get(token);
        if (parentValue !== sourceValue && !reflecting) {
          this.reflectToCSS(token);
        } else if (parentValue === sourceValue && reflecting) {
          this.stopReflectToCSS(token);
        }
      } else if (!reflecting) {
        this.reflectToCSS(token);
      }
    }
  }
  /**
   * Checks if a token has been assigned an explicit value the node.
   * @param token - the token to check.
   */
  has(token) {
    return this.assignedValues.has(token);
  }
  /**
   * Gets the value of a token for a node
   * @param token - The token to retrieve the value for
   * @returns
   */
  get(token) {
    const value = this.store.get(token);
    if (value !== void 0) {
      return value;
    }
    const raw = this.getRaw(token);
    if (raw !== void 0) {
      this.hydrate(token, raw);
      return this.get(token);
    }
  }
  /**
   * Retrieves the raw assigned value of a token from the nearest assigned node.
   * @param token - The token to retrieve a raw value for
   * @returns
   */
  getRaw(token) {
    var _a;
    if (this.assignedValues.has(token)) {
      return this.assignedValues.get(token);
    }
    return (_a = _DesignTokenNode.findClosestAssignedNode(token, this)) === null || _a === void 0 ? void 0 : _a.getRaw(token);
  }
  /**
   * Sets a token to a value for a node
   * @param token - The token to set
   * @param value - The value to set the token to
   */
  set(token, value) {
    if (DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(token))) {
      this.tearDownBindingObserver(token);
    }
    this.assignedValues.set(token, value);
    if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
      this.setupBindingObserver(token, value);
    } else {
      this.store.set(token, value);
    }
  }
  /**
   * Deletes a token value for the node.
   * @param token - The token to delete the value for
   */
  delete(token) {
    this.assignedValues.delete(token);
    this.tearDownBindingObserver(token);
    const upstream = this.getRaw(token);
    if (upstream) {
      this.hydrate(token, upstream);
    } else {
      this.store.delete(token);
    }
  }
  /**
   * Invoked when the DesignTokenNode.target is attached to the document
   */
  bind() {
    const parent = _DesignTokenNode.findParent(this);
    if (parent) {
      parent.appendChild(this);
    }
    for (const key of this.assignedValues.keys()) {
      key.notify(this.target);
    }
  }
  /**
   * Invoked when the DesignTokenNode.target is detached from the document
   */
  unbind() {
    if (this.parent) {
      const parent = childToParent.get(this);
      parent.removeChild(this);
    }
  }
  /**
   * Appends a child to a parent DesignTokenNode.
   * @param child - The child to append to the node
   */
  appendChild(child) {
    if (child.parent) {
      childToParent.get(child).removeChild(child);
    }
    const reParent = this.children.filter((x) => child.contains(x));
    childToParent.set(child, this);
    this.children.push(child);
    reParent.forEach((x) => child.appendChild(x));
    Observable.getNotifier(this.store).subscribe(child);
    for (const [token, value] of this.store.all()) {
      child.hydrate(token, this.bindingObservers.has(token) ? this.getRaw(token) : value);
    }
  }
  /**
   * Removes a child from a node.
   * @param child - The child to remove.
   */
  removeChild(child) {
    const childIndex = this.children.indexOf(child);
    if (childIndex !== -1) {
      this.children.splice(childIndex, 1);
    }
    Observable.getNotifier(this.store).unsubscribe(child);
    return child.parent === this ? childToParent.delete(child) : false;
  }
  /**
   * Tests whether a provided node is contained by
   * the calling node.
   * @param test - The node to test
   */
  contains(test) {
    return composedContains(this.target, test.target);
  }
  /**
   * Instructs the node to reflect a design token for the provided token.
   * @param token - The design token to reflect
   */
  reflectToCSS(token) {
    if (!this.isReflecting(token)) {
      this.reflecting.add(token);
      _DesignTokenNode.cssCustomPropertyReflector.startReflection(token, this.target);
    }
  }
  /**
   * Stops reflecting a DesignToken to CSS
   * @param token - The design token to stop reflecting
   */
  stopReflectToCSS(token) {
    if (this.isReflecting(token)) {
      this.reflecting.delete(token);
      _DesignTokenNode.cssCustomPropertyReflector.stopReflection(token, this.target);
    }
  }
  /**
   * Determines if a token is being reflected to CSS for a node.
   * @param token - The token to check for reflection
   * @returns
   */
  isReflecting(token) {
    return this.reflecting.has(token);
  }
  /**
   * Handle changes to upstream tokens
   * @param source - The parent DesignTokenNode
   * @param property - The token ID that changed
   */
  handleChange(source, property) {
    const token = DesignTokenImpl.getTokenById(property);
    if (!token) {
      return;
    }
    this.hydrate(token, this.getRaw(token));
    this.updateCSSTokenReflection(this.store, token);
  }
  /**
   * Hydrates a token with a DesignTokenValue, making retrieval available.
   * @param token - The token to hydrate
   * @param value - The value to hydrate
   */
  hydrate(token, value) {
    if (!this.has(token)) {
      const observer = this.bindingObservers.get(token);
      if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
        if (observer) {
          if (observer.source !== value) {
            this.tearDownBindingObserver(token);
            this.setupBindingObserver(token, value);
          }
        } else {
          this.setupBindingObserver(token, value);
        }
      } else {
        if (observer) {
          this.tearDownBindingObserver(token);
        }
        this.store.set(token, value);
      }
    }
  }
  /**
   * Sets up a binding observer for a derived token value that notifies token
   * subscribers on change.
   *
   * @param token - The token to notify when the binding updates
   * @param source - The binding source
   */
  setupBindingObserver(token, source) {
    const binding = new DesignTokenBindingObserver(source, token, this);
    this.bindingObservers.set(token, binding);
    return binding;
  }
  /**
   * Tear down a binding observer for a token.
   */
  tearDownBindingObserver(token) {
    if (this.bindingObservers.has(token)) {
      this.bindingObservers.get(token).disconnect();
      this.bindingObservers.delete(token);
      return true;
    }
    return false;
  }
};
DesignTokenNode.cssCustomPropertyReflector = new CustomPropertyReflector();
__decorate([
  observable
], DesignTokenNode.prototype, "children", void 0);
function create(nameOrConfig) {
  return DesignTokenImpl.from(nameOrConfig);
}
var DesignToken = Object.freeze({
  create,
  /**
   * Informs DesignToken that an HTMLElement for which tokens have
   * been set has been connected to the document.
   *
   * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
   * in all scenarios, so invoking this method manually is necessary when:
   *
   * 1. Token values are set for an HTMLElement.
   * 2. The HTMLElement does not inherit from FASTElement.
   * 3. The HTMLElement is not connected to the document when token values are set.
   *
   * @param element - The element to notify
   * @returns - true if notification was successful, otherwise false.
   */
  notifyConnection(element) {
    if (!element.isConnected || !DesignTokenNode.existsFor(element)) {
      return false;
    }
    DesignTokenNode.getOrCreate(element).bind();
    return true;
  },
  /**
   * Informs DesignToken that an HTMLElement for which tokens have
   * been set has been disconnected to the document.
   *
   * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
   * in all scenarios, so invoking this method manually is necessary when:
   *
   * 1. Token values are set for an HTMLElement.
   * 2. The HTMLElement does not inherit from FASTElement.
   *
   * @param element - The element to notify
   * @returns - true if notification was successful, otherwise false.
   */
  notifyDisconnection(element) {
    if (element.isConnected || !DesignTokenNode.existsFor(element)) {
      return false;
    }
    DesignTokenNode.getOrCreate(element).unbind();
    return true;
  },
  /**
   * Registers and element or document as a DesignToken root.
   * {@link CSSDesignToken | CSSDesignTokens} with default values assigned via
   * {@link (DesignToken:interface).withDefault} will emit CSS custom properties to all
   * registered roots.
   * @param target - The root to register
   */
  registerRoot(target = defaultElement) {
    RootStyleSheetTarget.registerRoot(target);
  },
  /**
   * Unregister an element or document as a DesignToken root.
   * @param target - The root to deregister
   */
  unregisterRoot(target = defaultElement) {
    RootStyleSheetTarget.unregisterRoot(target);
  }
});

// node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js
var ElementDisambiguation = Object.freeze({
  /**
   * Skip defining the element but still call the provided callback passed
   * to DesignSystemRegistrationContext.tryDefineElement
   */
  definitionCallbackOnly: null,
  /**
   * Ignore the duplicate element entirely.
   */
  ignoreDuplicate: Symbol()
});
var elementTypesByTag = /* @__PURE__ */ new Map();
var elementTagsByType = /* @__PURE__ */ new Map();
var rootDesignSystem = null;
var designSystemKey = DI.createInterface((x) => x.cachedCallback((handler) => {
  if (rootDesignSystem === null) {
    rootDesignSystem = new DefaultDesignSystem(null, handler);
  }
  return rootDesignSystem;
}));
var DesignSystem = Object.freeze({
  /**
   * Returns the HTML element name that the type is defined as.
   * @param type - The type to lookup.
   * @public
   */
  tagFor(type) {
    return elementTagsByType.get(type);
  },
  /**
   * Searches the DOM hierarchy for the design system that is responsible
   * for the provided element.
   * @param element - The element to locate the design system for.
   * @returns The located design system.
   * @public
   */
  responsibleFor(element) {
    const owned = element.$$designSystem$$;
    if (owned) {
      return owned;
    }
    const container = DI.findResponsibleContainer(element);
    return container.get(designSystemKey);
  },
  /**
   * Gets the DesignSystem if one is explicitly defined on the provided element;
   * otherwise creates a design system defined directly on the element.
   * @param element - The element to get or create a design system for.
   * @returns The design system.
   * @public
   */
  getOrCreate(node) {
    if (!node) {
      if (rootDesignSystem === null) {
        rootDesignSystem = DI.getOrCreateDOMContainer().get(designSystemKey);
      }
      return rootDesignSystem;
    }
    const owned = node.$$designSystem$$;
    if (owned) {
      return owned;
    }
    const container = DI.getOrCreateDOMContainer(node);
    if (container.has(designSystemKey, false)) {
      return container.get(designSystemKey);
    } else {
      const system = new DefaultDesignSystem(node, container);
      container.register(Registration.instance(designSystemKey, system));
      return system;
    }
  }
});
function extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback) {
  if (typeof params === "string") {
    return {
      name: params,
      type: elementDefinitionType,
      callback: elementDefinitionCallback
    };
  } else {
    return params;
  }
}
var DefaultDesignSystem = class {
  constructor(owner, container) {
    this.owner = owner;
    this.container = container;
    this.designTokensInitialized = false;
    this.prefix = "fast";
    this.shadowRootMode = void 0;
    this.disambiguate = () => ElementDisambiguation.definitionCallbackOnly;
    if (owner !== null) {
      owner.$$designSystem$$ = this;
    }
  }
  withPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }
  withShadowRootMode(mode) {
    this.shadowRootMode = mode;
    return this;
  }
  withElementDisambiguation(callback) {
    this.disambiguate = callback;
    return this;
  }
  withDesignTokenRoot(root) {
    this.designTokenRoot = root;
    return this;
  }
  register(...registrations) {
    const container = this.container;
    const elementDefinitionEntries = [];
    const disambiguate = this.disambiguate;
    const shadowRootMode = this.shadowRootMode;
    const context = {
      elementPrefix: this.prefix,
      tryDefineElement(params, elementDefinitionType, elementDefinitionCallback) {
        const extractedParams = extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback);
        const { name, callback, baseClass } = extractedParams;
        let { type } = extractedParams;
        let elementName = name;
        let typeFoundByName = elementTypesByTag.get(elementName);
        let needsDefine = true;
        while (typeFoundByName) {
          const result = disambiguate(elementName, type, typeFoundByName);
          switch (result) {
            case ElementDisambiguation.ignoreDuplicate:
              return;
            case ElementDisambiguation.definitionCallbackOnly:
              needsDefine = false;
              typeFoundByName = void 0;
              break;
            default:
              elementName = result;
              typeFoundByName = elementTypesByTag.get(elementName);
              break;
          }
        }
        if (needsDefine) {
          if (elementTagsByType.has(type) || type === FoundationElement) {
            type = class extends type {
            };
          }
          elementTypesByTag.set(elementName, type);
          elementTagsByType.set(type, elementName);
          if (baseClass) {
            elementTagsByType.set(baseClass, elementName);
          }
        }
        elementDefinitionEntries.push(new ElementDefinitionEntry(container, elementName, type, shadowRootMode, callback, needsDefine));
      }
    };
    if (!this.designTokensInitialized) {
      this.designTokensInitialized = true;
      if (this.designTokenRoot !== null) {
        DesignToken.registerRoot(this.designTokenRoot);
      }
    }
    container.registerWithContext(context, ...registrations);
    for (const entry of elementDefinitionEntries) {
      entry.callback(entry);
      if (entry.willDefine && entry.definition !== null) {
        entry.definition.define();
      }
    }
    return this;
  }
};
var ElementDefinitionEntry = class {
  constructor(container, name, type, shadowRootMode, callback, willDefine) {
    this.container = container;
    this.name = name;
    this.type = type;
    this.shadowRootMode = shadowRootMode;
    this.callback = callback;
    this.willDefine = willDefine;
    this.definition = null;
  }
  definePresentation(presentation) {
    ComponentPresentation.define(this.name, presentation, this.container);
  }
  defineElement(definition) {
    this.definition = new FASTElementDefinition(this.type, Object.assign(Object.assign({}, definition), { name: this.name }));
  }
  tagFor(type) {
    return DesignSystem.tagFor(type);
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js
var listboxOptionTemplate = (context, definition) => html`
    <template
        aria-checked="${(x) => x.ariaChecked}"
        aria-disabled="${(x) => x.ariaDisabled}"
        aria-posinset="${(x) => x.ariaPosInSet}"
        aria-selected="${(x) => x.ariaSelected}"
        aria-setsize="${(x) => x.ariaSetSize}"
        class="${(x) => [x.checked && "checked", x.selected && "selected", x.disabled && "disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("content")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.element.js
var ListboxElement = class extends Listbox {
  constructor() {
    super(...arguments);
    this.activeIndex = -1;
    this.rangeStartIndex = -1;
  }
  /**
   * Returns the last checked option.
   *
   * @internal
   */
  get activeOption() {
    return this.options[this.activeIndex];
  }
  /**
   * Returns the list of checked options.
   *
   * @internal
   */
  get checkedOptions() {
    var _a;
    return (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter((o) => o.checked);
  }
  /**
   * Returns the index of the first selected option.
   *
   * @internal
   */
  get firstSelectedOptionIndex() {
    return this.options.indexOf(this.firstSelectedOption);
  }
  /**
   * Updates the `ariaActiveDescendant` property when the active index changes.
   *
   * @param prev - the previous active index
   * @param next - the next active index
   *
   * @internal
   */
  activeIndexChanged(prev, next) {
    var _a, _b;
    this.ariaActiveDescendant = (_b = (_a = this.options[next]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "";
    this.focusAndScrollOptionIntoView();
  }
  /**
   * Toggles the checked state for the currently active option.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @internal
   */
  checkActiveIndex() {
    if (!this.multiple) {
      return;
    }
    const activeItem = this.activeOption;
    if (activeItem) {
      activeItem.checked = true;
    }
  }
  /**
   * Sets the active index to the first option and marks it as checked.
   *
   * @remarks
   * Multi-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkFirstOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex + 1;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex = 0;
    this.checkActiveIndex();
  }
  /**
   * Decrements the active index and sets the matching option as checked.
   *
   * @remarks
   * Multi-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkLastOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex, this.options.length);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex = this.options.length - 1;
    this.checkActiveIndex();
  }
  /**
   * @override
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("focusout", this.focusoutHandler);
  }
  /**
   * @override
   * @internal
   */
  disconnectedCallback() {
    this.removeEventListener("focusout", this.focusoutHandler);
    super.disconnectedCallback();
  }
  /**
   * Increments the active index and marks the matching option as checked.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkNextOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.rangeStartIndex, this.activeIndex + 1);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex += this.activeIndex < this.options.length - 1 ? 1 : 0;
    this.checkActiveIndex();
  }
  /**
   * Decrements the active index and marks the matching option as checked.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - mark all options unchecked before changing the active index
   *
   * @internal
   */
  checkPreviousOption(preserveChecked = false) {
    if (preserveChecked) {
      if (this.rangeStartIndex === -1) {
        this.rangeStartIndex = this.activeIndex;
      }
      if (this.checkedOptions.length === 1) {
        this.rangeStartIndex += 1;
      }
      this.options.forEach((o, i) => {
        o.checked = inRange(i, this.activeIndex, this.rangeStartIndex);
      });
    } else {
      this.uncheckAllOptions();
    }
    this.activeIndex -= this.activeIndex > 0 ? 1 : 0;
    this.checkActiveIndex();
  }
  /**
   * Handles click events for listbox options.
   *
   * @param e - the event object
   *
   * @override
   * @internal
   */
  clickHandler(e) {
    var _a;
    if (!this.multiple) {
      return super.clickHandler(e);
    }
    const captured = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest(`[role=option]`);
    if (!captured || captured.disabled) {
      return;
    }
    this.uncheckAllOptions();
    this.activeIndex = this.options.indexOf(captured);
    this.checkActiveIndex();
    this.toggleSelectedForAllCheckedOptions();
    return true;
  }
  /**
   * @override
   * @internal
   */
  focusAndScrollOptionIntoView() {
    super.focusAndScrollOptionIntoView(this.activeOption);
  }
  /**
   * In multiple-selection mode:
   * If any options are selected, the first selected option is checked when
   * the listbox receives focus. If no options are selected, the first
   * selectable option is checked.
   *
   * @override
   * @internal
   */
  focusinHandler(e) {
    if (!this.multiple) {
      return super.focusinHandler(e);
    }
    if (!this.shouldSkipFocus && e.target === e.currentTarget) {
      this.uncheckAllOptions();
      if (this.activeIndex === -1) {
        this.activeIndex = this.firstSelectedOptionIndex !== -1 ? this.firstSelectedOptionIndex : 0;
      }
      this.checkActiveIndex();
      this.setSelectedOptions();
      this.focusAndScrollOptionIntoView();
    }
    this.shouldSkipFocus = false;
  }
  /**
   * Unchecks all options when the listbox loses focus.
   *
   * @internal
   */
  focusoutHandler(e) {
    if (this.multiple) {
      this.uncheckAllOptions();
    }
  }
  /**
   * Handles keydown actions for listbox navigation and typeahead
   *
   * @override
   * @internal
   */
  keydownHandler(e) {
    if (!this.multiple) {
      return super.keydownHandler(e);
    }
    if (this.disabled) {
      return true;
    }
    const { key, shiftKey } = e;
    this.shouldSkipFocus = false;
    switch (key) {
      case keyHome: {
        this.checkFirstOption(shiftKey);
        return;
      }
      case keyArrowDown: {
        this.checkNextOption(shiftKey);
        return;
      }
      case keyArrowUp: {
        this.checkPreviousOption(shiftKey);
        return;
      }
      case keyEnd: {
        this.checkLastOption(shiftKey);
        return;
      }
      case keyTab: {
        this.focusAndScrollOptionIntoView();
        return true;
      }
      case keyEscape: {
        this.uncheckAllOptions();
        this.checkActiveIndex();
        return true;
      }
      case keySpace: {
        e.preventDefault();
        if (this.typeAheadExpired) {
          this.toggleSelectedForAllCheckedOptions();
          return;
        }
      }
      default: {
        if (key.length === 1) {
          this.handleTypeAhead(`${key}`);
        }
        return true;
      }
    }
  }
  /**
   * Prevents `focusin` events from firing before `click` events when the
   * element is unfocused.
   *
   * @override
   * @internal
   */
  mousedownHandler(e) {
    if (e.offsetX >= 0 && e.offsetX <= this.scrollWidth) {
      return super.mousedownHandler(e);
    }
  }
  /**
   * Switches between single-selection and multi-selection mode.
   *
   * @internal
   */
  multipleChanged(prev, next) {
    var _a;
    this.ariaMultiSelectable = next ? "true" : null;
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o) => {
      o.checked = next ? false : void 0;
    });
    this.setSelectedOptions();
  }
  /**
   * Sets an option as selected and gives it focus.
   *
   * @override
   * @public
   */
  setSelectedOptions() {
    if (!this.multiple) {
      super.setSelectedOptions();
      return;
    }
    if (this.$fastController.isConnected && this.options) {
      this.selectedOptions = this.options.filter((o) => o.selected);
      this.focusAndScrollOptionIntoView();
    }
  }
  /**
   * Ensures the size is a positive integer when the property is updated.
   *
   * @param prev - the previous size value
   * @param next - the current size value
   *
   * @internal
   */
  sizeChanged(prev, next) {
    var _a;
    const size = Math.max(0, parseInt((_a = next === null || next === void 0 ? void 0 : next.toFixed()) !== null && _a !== void 0 ? _a : "", 10));
    if (size !== next) {
      DOM.queueUpdate(() => {
        this.size = size;
      });
    }
  }
  /**
   * Toggles the selected state of the provided options. If any provided items
   * are in an unselected state, all items are set to selected. If every
   * provided item is selected, they are all unselected.
   *
   * @internal
   */
  toggleSelectedForAllCheckedOptions() {
    const enabledCheckedOptions = this.checkedOptions.filter((o) => !o.disabled);
    const force = !enabledCheckedOptions.every((o) => o.selected);
    enabledCheckedOptions.forEach((o) => o.selected = force);
    this.selectedIndex = this.options.indexOf(enabledCheckedOptions[enabledCheckedOptions.length - 1]);
    this.setSelectedOptions();
  }
  /**
   * @override
   * @internal
   */
  typeaheadBufferChanged(prev, next) {
    if (!this.multiple) {
      super.typeaheadBufferChanged(prev, next);
      return;
    }
    if (this.$fastController.isConnected) {
      const typeaheadMatches = this.getTypeaheadMatches();
      const activeIndex = this.options.indexOf(typeaheadMatches[0]);
      if (activeIndex > -1) {
        this.activeIndex = activeIndex;
        this.uncheckAllOptions();
        this.checkActiveIndex();
      }
      this.typeAheadExpired = false;
    }
  }
  /**
   * Unchecks all options.
   *
   * @remarks
   * Multiple-selection mode only.
   *
   * @param preserveChecked - reset the rangeStartIndex
   *
   * @internal
   */
  uncheckAllOptions(preserveChecked = false) {
    this.options.forEach((o) => o.checked = this.multiple ? false : void 0);
    if (!preserveChecked) {
      this.rangeStartIndex = -1;
    }
  }
};
__decorate([
  observable
], ListboxElement.prototype, "activeIndex", void 0);
__decorate([
  attr({ mode: "boolean" })
], ListboxElement.prototype, "multiple", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], ListboxElement.prototype, "size", void 0);

// node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.form-associated.js
var _TextField = class extends FoundationElement {
};
var FormAssociatedTextField = class extends FormAssociated(_TextField) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("input");
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.options.js
var TextFieldType = {
  /**
   * An email TextField
   */
  email: "email",
  /**
   * A password TextField
   */
  password: "password",
  /**
   * A telephone TextField
   */
  tel: "tel",
  /**
   * A text TextField
   */
  text: "text",
  /**
   * A URL TextField
   */
  url: "url"
};

// node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.js
var TextField = class extends FormAssociatedTextField {
  constructor() {
    super(...arguments);
    this.type = TextFieldType.text;
  }
  readOnlyChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
      this.validate();
    }
  }
  autofocusChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.autofocus = this.autofocus;
      this.validate();
    }
  }
  placeholderChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.placeholder = this.placeholder;
    }
  }
  typeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.type = this.type;
      this.validate();
    }
  }
  listChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.setAttribute("list", this.list);
      this.validate();
    }
  }
  maxlengthChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.maxLength = this.maxlength;
      this.validate();
    }
  }
  minlengthChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.minLength = this.minlength;
      this.validate();
    }
  }
  patternChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.pattern = this.pattern;
      this.validate();
    }
  }
  sizeChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.size = this.size;
    }
  }
  spellcheckChanged() {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.spellcheck = this.spellcheck;
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.proxy.setAttribute("type", this.type);
    this.validate();
    if (this.autofocus) {
      DOM.queueUpdate(() => {
        this.focus();
      });
    }
  }
  /**
   * Selects all the text in the text field
   *
   * @public
   */
  select() {
    this.control.select();
    this.$emit("select");
  }
  /**
   * Handles the internal control's `input` event
   * @internal
   */
  handleTextInput() {
    this.value = this.control.value;
  }
  /**
   * Change event handler for inner control.
   * @remarks
   * "Change" events are not `composable` so they will not
   * permeate the shadow DOM boundary. This fn effectively proxies
   * the change event, emitting a `change` event whenever the internal
   * control emits a `change` event
   * @internal
   */
  handleChange() {
    this.$emit("change");
  }
  /** {@inheritDoc (FormAssociated:interface).validate} */
  validate() {
    super.validate(this.control);
  }
};
__decorate([
  attr({ attribute: "readonly", mode: "boolean" })
], TextField.prototype, "readOnly", void 0);
__decorate([
  attr({ mode: "boolean" })
], TextField.prototype, "autofocus", void 0);
__decorate([
  attr
], TextField.prototype, "placeholder", void 0);
__decorate([
  attr
], TextField.prototype, "type", void 0);
__decorate([
  attr
], TextField.prototype, "list", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], TextField.prototype, "maxlength", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], TextField.prototype, "minlength", void 0);
__decorate([
  attr
], TextField.prototype, "pattern", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], TextField.prototype, "size", void 0);
__decorate([
  attr({ mode: "boolean" })
], TextField.prototype, "spellcheck", void 0);
__decorate([
  observable
], TextField.prototype, "defaultSlottedNodes", void 0);
var DelegatesARIATextbox = class {
};
applyMixins(DelegatesARIATextbox, ARIAGlobalStatesAndProperties);
applyMixins(TextField, StartEnd, DelegatesARIATextbox);

// node_modules/@microsoft/fast-foundation/dist/esm/progress-ring/progress-ring.template.js
var progressSegments = 44;
var progressRingTemplate = (context, definition) => html`
    <template
        role="progressbar"
        aria-valuenow="${(x) => x.value}"
        aria-valuemin="${(x) => x.min}"
        aria-valuemax="${(x) => x.max}"
        class="${(x) => x.paused ? "paused" : ""}"
    >
        ${when((x) => typeof x.value === "number", html`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${(x) => progressSegments * x.percentComplete / 100}px ${progressSegments}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `, html`
                <slot name="indeterminate" slot="indeterminate">
                    ${definition.indeterminateIndicator || ""}
                </slot>
            `)}
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/progress/base-progress.js
var BaseProgress = class extends FoundationElement {
  constructor() {
    super(...arguments);
    this.percentComplete = 0;
  }
  valueChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  minChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  maxChanged() {
    if (this.$fastController.isConnected) {
      this.updatePercentComplete();
    }
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.updatePercentComplete();
  }
  updatePercentComplete() {
    const min = typeof this.min === "number" ? this.min : 0;
    const max = typeof this.max === "number" ? this.max : 100;
    const value = typeof this.value === "number" ? this.value : 0;
    const range2 = max - min;
    this.percentComplete = range2 === 0 ? 0 : Math.fround((value - min) / range2 * 100);
  }
};
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "value", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "min", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseProgress.prototype, "max", void 0);
__decorate([
  attr({ mode: "boolean" })
], BaseProgress.prototype, "paused", void 0);
__decorate([
  observable
], BaseProgress.prototype, "percentComplete", void 0);

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/whitespace-filter.js
function whitespaceFilter(value, index, array) {
  return value.nodeType !== Node.TEXT_NODE ? true : typeof value.nodeValue === "string" && !!value.nodeValue.trim().length;
}

// node_modules/@microsoft/fast-foundation/dist/esm/select/select.form-associated.js
var _Select = class extends ListboxElement {
};
var FormAssociatedSelect = class extends FormAssociated(_Select) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement("select");
  }
};

// node_modules/@microsoft/fast-foundation/dist/esm/select/select.js
var Select = class extends FormAssociatedSelect {
  constructor() {
    super(...arguments);
    this.open = false;
    this.forcedPosition = false;
    this.listboxId = uniqueId("listbox-");
    this.maxHeight = 0;
  }
  /**
   * Sets focus and synchronizes ARIA attributes when the open property changes.
   *
   * @param prev - the previous open value
   * @param next - the current open value
   *
   * @internal
   */
  openChanged(prev, next) {
    if (!this.collapsible) {
      return;
    }
    if (this.open) {
      this.ariaControls = this.listboxId;
      this.ariaExpanded = "true";
      this.setPositioning();
      this.focusAndScrollOptionIntoView();
      this.indexWhenOpened = this.selectedIndex;
      DOM.queueUpdate(() => this.focus());
      return;
    }
    this.ariaControls = "";
    this.ariaExpanded = "false";
  }
  /**
   * The component is collapsible when in single-selection mode with no size attribute.
   *
   * @internal
   */
  get collapsible() {
    return !(this.multiple || typeof this.size === "number");
  }
  /**
   * The value property.
   *
   * @public
   */
  get value() {
    Observable.track(this, "value");
    return this._value;
  }
  set value(next) {
    var _a, _b, _c, _d, _e, _f, _g;
    const prev = `${this._value}`;
    if ((_a = this._options) === null || _a === void 0 ? void 0 : _a.length) {
      const selectedIndex = this._options.findIndex((el) => el.value === next);
      const prevSelectedValue = (_c = (_b = this._options[this.selectedIndex]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
      const nextSelectedValue = (_e = (_d = this._options[selectedIndex]) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : null;
      if (selectedIndex === -1 || prevSelectedValue !== nextSelectedValue) {
        next = "";
        this.selectedIndex = selectedIndex;
      }
      next = (_g = (_f = this.firstSelectedOption) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : next;
    }
    if (prev !== next) {
      this._value = next;
      super.valueChanged(prev, next);
      Observable.notify(this, "value");
      this.updateDisplayValue();
    }
  }
  /**
   * Sets the value and display value to match the first selected option.
   *
   * @param shouldEmit - if true, the input and change events will be emitted
   *
   * @internal
   */
  updateValue(shouldEmit) {
    var _a, _b;
    if (this.$fastController.isConnected) {
      this.value = (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
    }
    if (shouldEmit) {
      this.$emit("input");
      this.$emit("change", this, {
        bubbles: true,
        composed: void 0
      });
    }
  }
  /**
   * Updates the proxy value when the selected index changes.
   *
   * @param prev - the previous selected index
   * @param next - the next selected index
   *
   * @internal
   */
  selectedIndexChanged(prev, next) {
    super.selectedIndexChanged(prev, next);
    this.updateValue();
  }
  positionChanged(prev, next) {
    this.positionAttribute = next;
    this.setPositioning();
  }
  /**
   * Calculate and apply listbox positioning based on available viewport space.
   *
   * @public
   */
  setPositioning() {
    const currentBox = this.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const availableBottom = viewportHeight - currentBox.bottom;
    this.position = this.forcedPosition ? this.positionAttribute : currentBox.top > availableBottom ? SelectPosition.above : SelectPosition.below;
    this.positionAttribute = this.forcedPosition ? this.positionAttribute : this.position;
    this.maxHeight = this.position === SelectPosition.above ? ~~currentBox.top : ~~availableBottom;
  }
  /**
   * The value displayed on the button.
   *
   * @public
   */
  get displayValue() {
    var _a, _b;
    Observable.track(this, "displayValue");
    return (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
  }
  /**
   * Synchronize the `aria-disabled` property when the `disabled` property changes.
   *
   * @param prev - The previous disabled value
   * @param next - The next disabled value
   *
   * @internal
   */
  disabledChanged(prev, next) {
    if (super.disabledChanged) {
      super.disabledChanged(prev, next);
    }
    this.ariaDisabled = this.disabled ? "true" : "false";
  }
  /**
   * Reset the element to its first selectable option when its parent form is reset.
   *
   * @internal
   */
  formResetCallback() {
    this.setProxyOptions();
    super.setDefaultSelectedOption();
    if (this.selectedIndex === -1) {
      this.selectedIndex = 0;
    }
  }
  /**
   * Handle opening and closing the listbox when the select is clicked.
   *
   * @param e - the mouse event
   * @internal
   */
  clickHandler(e) {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      const captured = e.target.closest(`option,[role=option]`);
      if (captured && captured.disabled) {
        return;
      }
    }
    super.clickHandler(e);
    this.open = this.collapsible && !this.open;
    if (!this.open && this.indexWhenOpened !== this.selectedIndex) {
      this.updateValue(true);
    }
    return true;
  }
  /**
   * Handles focus state when the element or its children lose focus.
   *
   * @param e - The focus event
   * @internal
   */
  focusoutHandler(e) {
    var _a;
    super.focusoutHandler(e);
    if (!this.open) {
      return true;
    }
    const focusTarget = e.relatedTarget;
    if (this.isSameNode(focusTarget)) {
      this.focus();
      return;
    }
    if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.includes(focusTarget))) {
      this.open = false;
      if (this.indexWhenOpened !== this.selectedIndex) {
        this.updateValue(true);
      }
    }
  }
  /**
   * Updates the value when an option's value changes.
   *
   * @param source - the source object
   * @param propertyName - the property to evaluate
   *
   * @internal
   * @override
   */
  handleChange(source, propertyName) {
    super.handleChange(source, propertyName);
    if (propertyName === "value") {
      this.updateValue();
    }
  }
  /**
   * Synchronize the form-associated proxy and updates the value property of the element.
   *
   * @param prev - the previous collection of slotted option elements
   * @param next - the next collection of slotted option elements
   *
   * @internal
   */
  slottedOptionsChanged(prev, next) {
    this.options.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.unsubscribe(this, "value");
    });
    super.slottedOptionsChanged(prev, next);
    this.options.forEach((o) => {
      const notifier = Observable.getNotifier(o);
      notifier.subscribe(this, "value");
    });
    this.setProxyOptions();
    this.updateValue();
  }
  /**
   * Prevents focus when size is set and a scrollbar is clicked.
   *
   * @param e - the mouse event object
   *
   * @override
   * @internal
   */
  mousedownHandler(e) {
    var _a;
    if (e.offsetX >= 0 && e.offsetX <= ((_a = this.listbox) === null || _a === void 0 ? void 0 : _a.scrollWidth)) {
      return super.mousedownHandler(e);
    }
    return this.collapsible;
  }
  /**
   * Sets the multiple property on the proxy element.
   *
   * @param prev - the previous multiple value
   * @param next - the current multiple value
   */
  multipleChanged(prev, next) {
    super.multipleChanged(prev, next);
    if (this.proxy) {
      this.proxy.multiple = next;
    }
  }
  /**
   * Updates the selectedness of each option when the list of selected options changes.
   *
   * @param prev - the previous list of selected options
   * @param next - the current list of selected options
   *
   * @override
   * @internal
   */
  selectedOptionsChanged(prev, next) {
    var _a;
    super.selectedOptionsChanged(prev, next);
    (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o, i) => {
      var _a2;
      const proxyOption = (_a2 = this.proxy) === null || _a2 === void 0 ? void 0 : _a2.options.item(i);
      if (proxyOption) {
        proxyOption.selected = o.selected;
      }
    });
  }
  /**
   * Sets the selected index to match the first option with the selected attribute, or
   * the first selectable option.
   *
   * @override
   * @internal
   */
  setDefaultSelectedOption() {
    var _a;
    const options = (_a = this.options) !== null && _a !== void 0 ? _a : Array.from(this.children).filter(Listbox.slottedOptionFilter);
    const selectedIndex = options === null || options === void 0 ? void 0 : options.findIndex((el) => el.hasAttribute("selected") || el.selected || el.value === this.value);
    if (selectedIndex !== -1) {
      this.selectedIndex = selectedIndex;
      return;
    }
    this.selectedIndex = 0;
  }
  /**
   * Resets and fills the proxy to match the component's options.
   *
   * @internal
   */
  setProxyOptions() {
    if (this.proxy instanceof HTMLSelectElement && this.options) {
      this.proxy.options.length = 0;
      this.options.forEach((option) => {
        const proxyOption = option.proxy || (option instanceof HTMLOptionElement ? option.cloneNode() : null);
        if (proxyOption) {
          this.proxy.options.add(proxyOption);
        }
      });
    }
  }
  /**
   * Handle keyboard interaction for the select.
   *
   * @param e - the keyboard event
   * @internal
   */
  keydownHandler(e) {
    super.keydownHandler(e);
    const key = e.key || e.key.charCodeAt(0);
    switch (key) {
      case keySpace: {
        e.preventDefault();
        if (this.collapsible && this.typeAheadExpired) {
          this.open = !this.open;
        }
        break;
      }
      case keyHome:
      case keyEnd: {
        e.preventDefault();
        break;
      }
      case keyEnter: {
        e.preventDefault();
        this.open = !this.open;
        break;
      }
      case keyEscape: {
        if (this.collapsible && this.open) {
          e.preventDefault();
          this.open = false;
        }
        break;
      }
      case keyTab: {
        if (this.collapsible && this.open) {
          e.preventDefault();
          this.open = false;
        }
        return true;
      }
    }
    if (!this.open && this.indexWhenOpened !== this.selectedIndex) {
      this.updateValue(true);
      this.indexWhenOpened = this.selectedIndex;
    }
    return !(key === keyArrowDown || key === keyArrowUp);
  }
  connectedCallback() {
    super.connectedCallback();
    this.forcedPosition = !!this.positionAttribute;
    this.addEventListener("contentchange", this.updateDisplayValue);
  }
  disconnectedCallback() {
    this.removeEventListener("contentchange", this.updateDisplayValue);
    super.disconnectedCallback();
  }
  /**
   * Updates the proxy's size property when the size attribute changes.
   *
   * @param prev - the previous size
   * @param next - the current size
   *
   * @override
   * @internal
   */
  sizeChanged(prev, next) {
    super.sizeChanged(prev, next);
    if (this.proxy) {
      this.proxy.size = next;
    }
  }
  /**
   *
   * @internal
   */
  updateDisplayValue() {
    if (this.collapsible) {
      Observable.notify(this, "displayValue");
    }
  }
};
__decorate([
  attr({ attribute: "open", mode: "boolean" })
], Select.prototype, "open", void 0);
__decorate([
  volatile
], Select.prototype, "collapsible", null);
__decorate([
  observable
], Select.prototype, "control", void 0);
__decorate([
  attr({ attribute: "position" })
], Select.prototype, "positionAttribute", void 0);
__decorate([
  observable
], Select.prototype, "position", void 0);
__decorate([
  observable
], Select.prototype, "maxHeight", void 0);
var DelegatesARIASelect = class {
};
__decorate([
  observable
], DelegatesARIASelect.prototype, "ariaControls", void 0);
applyMixins(DelegatesARIASelect, DelegatesARIAListbox);
applyMixins(Select, StartEnd, DelegatesARIASelect);

// node_modules/@microsoft/fast-foundation/dist/esm/select/select.template.js
var selectTemplate = (context, definition) => html`
    <template
        class="${(x) => [
  x.collapsible && "collapsible",
  x.collapsible && x.open && "open",
  x.disabled && "disabled",
  x.collapsible && x.position
].filter(Boolean).join(" ")}"
        aria-activedescendant="${(x) => x.ariaActiveDescendant}"
        aria-controls="${(x) => x.ariaControls}"
        aria-disabled="${(x) => x.ariaDisabled}"
        aria-expanded="${(x) => x.ariaExpanded}"
        aria-haspopup="${(x) => x.collapsible ? "listbox" : null}"
        aria-multiselectable="${(x) => x.ariaMultiSelectable}"
        ?open="${(x) => x.open}"
        role="combobox"
        tabindex="${(x) => !x.disabled ? "0" : null}"
        @click="${(x, c) => x.clickHandler(c.event)}"
        @focusin="${(x, c) => x.focusinHandler(c.event)}"
        @focusout="${(x, c) => x.focusoutHandler(c.event)}"
        @keydown="${(x, c) => x.keydownHandler(c.event)}"
        @mousedown="${(x, c) => x.mousedownHandler(c.event)}"
    >
        ${when((x) => x.collapsible, html`
                <div
                    class="control"
                    part="control"
                    ?disabled="${(x) => x.disabled}"
                    ${ref("control")}
                >
                    ${startSlotTemplate(context, definition)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${(x) => x.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${definition.indicator || ""}
                            </slot>
                        </div>
                    </slot>
                    ${endSlotTemplate(context, definition)}
                </div>
            `)}
        <div
            class="listbox"
            id="${(x) => x.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${(x) => x.disabled}"
            ?hidden="${(x) => x.collapsible ? !x.open : false}"
            ${ref("listbox")}
        >
            <slot
                ${slotted({
  filter: Listbox.slottedOptionFilter,
  flatten: true,
  property: "slottedOptions"
})}
            ></slot>
        </div>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.template.js
var tabPanelTemplate = (context, definition) => html`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.js
var TabPanel = class extends FoundationElement {
};

// node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.template.js
var tabTemplate = (context, definition) => html`
    <template slot="tab" role="tab" aria-disabled="${(x) => x.disabled}">
        <slot></slot>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.js
var Tab = class extends FoundationElement {
};
__decorate([
  attr({ mode: "boolean" })
], Tab.prototype, "disabled", void 0);

// node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.template.js
var tabsTemplate = (context, definition) => html`
    <template class="${(x) => x.orientation}">
        ${startSlotTemplate(context, definition)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${slotted("tabs")}></slot>

            ${when((x) => x.showActiveIndicator, html`
                    <div
                        ${ref("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${endSlotTemplate(context, definition)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${slotted("tabpanels")}></slot>
        </div>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.js
var TabsOrientation = {
  vertical: "vertical",
  horizontal: "horizontal"
};
var Tabs = class extends FoundationElement {
  constructor() {
    super(...arguments);
    this.orientation = TabsOrientation.horizontal;
    this.activeindicator = true;
    this.showActiveIndicator = true;
    this.prevActiveTabIndex = 0;
    this.activeTabIndex = 0;
    this.ticking = false;
    this.change = () => {
      this.$emit("change", this.activetab);
    };
    this.isDisabledElement = (el) => {
      return el.getAttribute("aria-disabled") === "true";
    };
    this.isHiddenElement = (el) => {
      return el.hasAttribute("hidden");
    };
    this.isFocusableElement = (el) => {
      return !this.isDisabledElement(el) && !this.isHiddenElement(el);
    };
    this.setTabs = () => {
      const gridHorizontalProperty = "gridColumn";
      const gridVerticalProperty = "gridRow";
      const gridProperty = this.isHorizontal() ? gridHorizontalProperty : gridVerticalProperty;
      this.activeTabIndex = this.getActiveIndex();
      this.showActiveIndicator = false;
      this.tabs.forEach((tab, index) => {
        if (tab.slot === "tab") {
          const isActiveTab = this.activeTabIndex === index && this.isFocusableElement(tab);
          if (this.activeindicator && this.isFocusableElement(tab)) {
            this.showActiveIndicator = true;
          }
          const tabId = this.tabIds[index];
          const tabpanelId = this.tabpanelIds[index];
          tab.setAttribute("id", tabId);
          tab.setAttribute("aria-selected", isActiveTab ? "true" : "false");
          tab.setAttribute("aria-controls", tabpanelId);
          tab.addEventListener("click", this.handleTabClick);
          tab.addEventListener("keydown", this.handleTabKeyDown);
          tab.setAttribute("tabindex", isActiveTab ? "0" : "-1");
          if (isActiveTab) {
            this.activetab = tab;
            this.activeid = tabId;
          }
        }
        tab.style[gridHorizontalProperty] = "";
        tab.style[gridVerticalProperty] = "";
        tab.style[gridProperty] = `${index + 1}`;
        !this.isHorizontal() ? tab.classList.add("vertical") : tab.classList.remove("vertical");
      });
    };
    this.setTabPanels = () => {
      this.tabpanels.forEach((tabpanel, index) => {
        const tabId = this.tabIds[index];
        const tabpanelId = this.tabpanelIds[index];
        tabpanel.setAttribute("id", tabpanelId);
        tabpanel.setAttribute("aria-labelledby", tabId);
        this.activeTabIndex !== index ? tabpanel.setAttribute("hidden", "") : tabpanel.removeAttribute("hidden");
      });
    };
    this.handleTabClick = (event) => {
      const selectedTab = event.currentTarget;
      if (selectedTab.nodeType === 1 && this.isFocusableElement(selectedTab)) {
        this.prevActiveTabIndex = this.activeTabIndex;
        this.activeTabIndex = this.tabs.indexOf(selectedTab);
        this.setComponent();
      }
    };
    this.handleTabKeyDown = (event) => {
      if (this.isHorizontal()) {
        switch (event.key) {
          case keyArrowLeft:
            event.preventDefault();
            this.adjustBackward(event);
            break;
          case keyArrowRight:
            event.preventDefault();
            this.adjustForward(event);
            break;
        }
      } else {
        switch (event.key) {
          case keyArrowUp:
            event.preventDefault();
            this.adjustBackward(event);
            break;
          case keyArrowDown:
            event.preventDefault();
            this.adjustForward(event);
            break;
        }
      }
      switch (event.key) {
        case keyHome:
          event.preventDefault();
          this.adjust(-this.activeTabIndex);
          break;
        case keyEnd:
          event.preventDefault();
          this.adjust(this.tabs.length - this.activeTabIndex - 1);
          break;
      }
    };
    this.adjustForward = (e) => {
      const group = this.tabs;
      let index = 0;
      index = this.activetab ? group.indexOf(this.activetab) + 1 : 1;
      if (index === group.length) {
        index = 0;
      }
      while (index < group.length && group.length > 1) {
        if (this.isFocusableElement(group[index])) {
          this.moveToTabByIndex(group, index);
          break;
        } else if (this.activetab && index === group.indexOf(this.activetab)) {
          break;
        } else if (index + 1 >= group.length) {
          index = 0;
        } else {
          index += 1;
        }
      }
    };
    this.adjustBackward = (e) => {
      const group = this.tabs;
      let index = 0;
      index = this.activetab ? group.indexOf(this.activetab) - 1 : 0;
      index = index < 0 ? group.length - 1 : index;
      while (index >= 0 && group.length > 1) {
        if (this.isFocusableElement(group[index])) {
          this.moveToTabByIndex(group, index);
          break;
        } else if (index - 1 < 0) {
          index = group.length - 1;
        } else {
          index -= 1;
        }
      }
    };
    this.moveToTabByIndex = (group, index) => {
      const tab = group[index];
      this.activetab = tab;
      this.prevActiveTabIndex = this.activeTabIndex;
      this.activeTabIndex = index;
      tab.focus();
      this.setComponent();
    };
  }
  /**
   * @internal
   */
  orientationChanged() {
    if (this.$fastController.isConnected) {
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  activeidChanged(oldValue, newValue) {
    if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
      this.prevActiveTabIndex = this.tabs.findIndex((item) => item.id === oldValue);
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  tabsChanged() {
    if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
      this.tabIds = this.getTabIds();
      this.tabpanelIds = this.getTabPanelIds();
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  /**
   * @internal
   */
  tabpanelsChanged() {
    if (this.$fastController.isConnected && this.tabpanels.length <= this.tabs.length) {
      this.tabIds = this.getTabIds();
      this.tabpanelIds = this.getTabPanelIds();
      this.setTabs();
      this.setTabPanels();
      this.handleActiveIndicatorPosition();
    }
  }
  getActiveIndex() {
    const id = this.activeid;
    if (id !== void 0) {
      return this.tabIds.indexOf(this.activeid) === -1 ? 0 : this.tabIds.indexOf(this.activeid);
    } else {
      return 0;
    }
  }
  getTabIds() {
    return this.tabs.map((tab) => {
      var _a;
      return (_a = tab.getAttribute("id")) !== null && _a !== void 0 ? _a : `tab-${uniqueId()}`;
    });
  }
  getTabPanelIds() {
    return this.tabpanels.map((tabPanel) => {
      var _a;
      return (_a = tabPanel.getAttribute("id")) !== null && _a !== void 0 ? _a : `panel-${uniqueId()}`;
    });
  }
  setComponent() {
    if (this.activeTabIndex !== this.prevActiveTabIndex) {
      this.activeid = this.tabIds[this.activeTabIndex];
      this.focusTab();
      this.change();
    }
  }
  isHorizontal() {
    return this.orientation === TabsOrientation.horizontal;
  }
  handleActiveIndicatorPosition() {
    if (this.showActiveIndicator && this.activeindicator && this.activeTabIndex !== this.prevActiveTabIndex) {
      if (this.ticking) {
        this.ticking = false;
      } else {
        this.ticking = true;
        this.animateActiveIndicator();
      }
    }
  }
  animateActiveIndicator() {
    this.ticking = true;
    const gridProperty = this.isHorizontal() ? "gridColumn" : "gridRow";
    const translateProperty = this.isHorizontal() ? "translateX" : "translateY";
    const offsetProperty = this.isHorizontal() ? "offsetLeft" : "offsetTop";
    const prev = this.activeIndicatorRef[offsetProperty];
    this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
    const next = this.activeIndicatorRef[offsetProperty];
    this.activeIndicatorRef.style[gridProperty] = `${this.prevActiveTabIndex + 1}`;
    const dif = next - prev;
    this.activeIndicatorRef.style.transform = `${translateProperty}(${dif}px)`;
    this.activeIndicatorRef.classList.add("activeIndicatorTransition");
    this.activeIndicatorRef.addEventListener("transitionend", () => {
      this.ticking = false;
      this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
      this.activeIndicatorRef.style.transform = `${translateProperty}(0px)`;
      this.activeIndicatorRef.classList.remove("activeIndicatorTransition");
    });
  }
  /**
   * The adjust method for FASTTabs
   * @public
   * @remarks
   * This method allows the active index to be adjusted by numerical increments
   */
  adjust(adjustment) {
    const focusableTabs = this.tabs.filter((t) => this.isFocusableElement(t));
    const currentActiveTabIndex = focusableTabs.indexOf(this.activetab);
    const nextTabIndex = limit(0, focusableTabs.length - 1, currentActiveTabIndex + adjustment);
    const nextIndex = this.tabs.indexOf(focusableTabs[nextTabIndex]);
    if (nextIndex > -1) {
      this.moveToTabByIndex(this.tabs, nextIndex);
    }
  }
  focusTab() {
    this.tabs[this.activeTabIndex].focus();
  }
  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.tabIds = this.getTabIds();
    this.tabpanelIds = this.getTabPanelIds();
    this.activeTabIndex = this.getActiveIndex();
  }
};
__decorate([
  attr
], Tabs.prototype, "orientation", void 0);
__decorate([
  attr
], Tabs.prototype, "activeid", void 0);
__decorate([
  observable
], Tabs.prototype, "tabs", void 0);
__decorate([
  observable
], Tabs.prototype, "tabpanels", void 0);
__decorate([
  attr({ mode: "boolean" })
], Tabs.prototype, "activeindicator", void 0);
__decorate([
  observable
], Tabs.prototype, "activeIndicatorRef", void 0);
__decorate([
  observable
], Tabs.prototype, "showActiveIndicator", void 0);
applyMixins(Tabs, StartEnd);

// node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.template.js
var textFieldTemplate = (context, definition) => html`
    <template
        class="
            ${(x) => x.readOnly ? "readonly" : ""}
        "
    >
        <label
            part="label"
            for="control"
            class="${(x) => x.defaultSlottedNodes && x.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot
                ${slotted({ property: "defaultSlottedNodes", filter: whitespaceFilter })}
            ></slot>
        </label>
        <div class="root" part="root">
            ${startSlotTemplate(context, definition)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${(x) => x.handleTextInput()}"
                @change="${(x) => x.handleChange()}"
                ?autofocus="${(x) => x.autofocus}"
                ?disabled="${(x) => x.disabled}"
                list="${(x) => x.list}"
                maxlength="${(x) => x.maxlength}"
                minlength="${(x) => x.minlength}"
                pattern="${(x) => x.pattern}"
                placeholder="${(x) => x.placeholder}"
                ?readonly="${(x) => x.readOnly}"
                ?required="${(x) => x.required}"
                size="${(x) => x.size}"
                ?spellcheck="${(x) => x.spellcheck}"
                :value="${(x) => x.value}"
                type="${(x) => x.type}"
                aria-atomic="${(x) => x.ariaAtomic}"
                aria-busy="${(x) => x.ariaBusy}"
                aria-controls="${(x) => x.ariaControls}"
                aria-current="${(x) => x.ariaCurrent}"
                aria-describedby="${(x) => x.ariaDescribedby}"
                aria-details="${(x) => x.ariaDetails}"
                aria-disabled="${(x) => x.ariaDisabled}"
                aria-errormessage="${(x) => x.ariaErrormessage}"
                aria-flowto="${(x) => x.ariaFlowto}"
                aria-haspopup="${(x) => x.ariaHaspopup}"
                aria-hidden="${(x) => x.ariaHidden}"
                aria-invalid="${(x) => x.ariaInvalid}"
                aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
                aria-label="${(x) => x.ariaLabel}"
                aria-labelledby="${(x) => x.ariaLabelledby}"
                aria-live="${(x) => x.ariaLive}"
                aria-owns="${(x) => x.ariaOwns}"
                aria-relevant="${(x) => x.ariaRelevant}"
                aria-roledescription="${(x) => x.ariaRoledescription}"
                ${ref("control")}
            />
            ${endSlotTemplate(context, definition)}
        </div>
    </template>
`;

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js
var disabledCursor = "not-allowed";

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js
var hidden = `:host([hidden]){display:none}`;
function display(displayValue) {
  return `${hidden}:host{display:${displayValue}}`;
}

// node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js
var focusVisible = canUseFocusVisible() ? "focus-visible" : "focus";

// src/web/messaging/web-bus.ts
var vscode = acquireVsCodeApi();
var WebBus = class {
  ReceiveCallback(handler, thisArg) {
    window.addEventListener("message", (event) => handler.call(thisArg, event.data));
  }
  Send(message) {
    vscode.postMessage(message);
  }
};

// node_modules/async-mutex/index.mjs
var E_TIMEOUT = new Error("timeout while waiting for mutex to become available");
var E_ALREADY_LOCKED = new Error("mutex already locked");
var E_CANCELED = new Error("request for lock canceled");
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Semaphore = class {
  constructor(_value, _cancelError = E_CANCELED) {
    this._value = _value;
    this._cancelError = _cancelError;
    this._queue = [];
    this._weightedWaiters = [];
  }
  acquire(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    return new Promise((resolve, reject) => {
      const task = { resolve, reject, weight, priority };
      const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
      if (i === -1 && weight <= this._value) {
        this._dispatchItem(task);
      } else {
        this._queue.splice(i + 1, 0, task);
      }
    });
  }
  runExclusive(callback_1) {
    return __awaiter$2(this, arguments, void 0, function* (callback, weight = 1, priority = 0) {
      const [value, release] = yield this.acquire(weight, priority);
      try {
        return yield callback(value);
      } finally {
        release();
      }
    });
  }
  waitForUnlock(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    if (this._couldLockImmediately(weight, priority)) {
      return Promise.resolve();
    } else {
      return new Promise((resolve) => {
        if (!this._weightedWaiters[weight - 1])
          this._weightedWaiters[weight - 1] = [];
        insertSorted(this._weightedWaiters[weight - 1], { resolve, priority });
      });
    }
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
    this._dispatchQueue();
  }
  release(weight = 1) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    this._value += weight;
    this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((entry) => entry.reject(this._cancelError));
    this._queue = [];
  }
  _dispatchQueue() {
    this._drainUnlockWaiters();
    while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
      this._dispatchItem(this._queue.shift());
      this._drainUnlockWaiters();
    }
  }
  _dispatchItem(item) {
    const previousValue = this._value;
    this._value -= item.weight;
    item.resolve([previousValue, this._newReleaser(item.weight)]);
  }
  _newReleaser(weight) {
    let called = false;
    return () => {
      if (called)
        return;
      called = true;
      this.release(weight);
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0) {
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        waiters.forEach((waiter) => waiter.resolve());
        this._weightedWaiters[weight - 1] = [];
      }
    } else {
      const queuedPriority = this._queue[0].priority;
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
        (i === -1 ? waiters : waiters.splice(0, i)).forEach((waiter) => waiter.resolve());
      }
    }
  }
  _couldLockImmediately(weight, priority) {
    return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
  }
};
function insertSorted(a, v) {
  const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
  a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (predicate(a[i])) {
      return i;
    }
  }
  return -1;
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Mutex = class {
  constructor(cancelError) {
    this._semaphore = new Semaphore(1, cancelError);
  }
  acquire() {
    return __awaiter$1(this, arguments, void 0, function* (priority = 0) {
      const [, releaser] = yield this._semaphore.acquire(1, priority);
      return releaser;
    });
  }
  runExclusive(callback, priority = 0) {
    return this._semaphore.runExclusive(() => callback(), 1, priority);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(priority = 0) {
    return this._semaphore.waitForUnlock(1, priority);
  }
  release() {
    if (this._semaphore.isLocked())
      this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
};

// src/common/nonce.ts
var last = 0;
var repeat2 = 0;
function nonce_default() {
  var length = 15;
  var now = Math.pow(10, 2) * +/* @__PURE__ */ new Date();
  if (now == last) {
    repeat2++;
  } else {
    repeat2 = 0;
    last = now;
  }
  var s = (now + repeat2).toString();
  return +s.substring(s.length - length);
}

// src/common/messaging/core/mediator.ts
var Mediator = class {
  constructor(bus) {
    this._locks = {};
    this._handlers = {};
    this._bus = bus;
    this._bus.ReceiveCallback(this.HandleMessage, this);
  }
  AddHandler(command, handler) {
    this._handlers[command] = handler;
    return this;
  }
  PublishAsync(command, request) {
    return __async(this, null, function* () {
      let correlationId = nonce_default();
      let message = {
        Headers: {
          Type: "REQUEST",
          Command: command,
          CorrelationId: correlationId
        },
        Body: request
      };
      let mutex = new Mutex();
      let release = yield mutex.acquire();
      this._locks[correlationId] = { release };
      this._bus.Send(message);
      yield mutex.waitForUnlock();
      let response = this._locks[correlationId].response;
      if (response == void 0)
        throw "Response not set";
      delete this._locks[correlationId];
      return response;
    });
  }
  HandleMessage(message) {
    if (message.Headers.Type == "REQUEST")
      return this.HandleRequest(message);
    else if (message.Headers.Type == "RESPONSE")
      return this.HandleResponse(message);
    else
      throw `Message type not recognized: ${message.Headers.Type}`;
  }
  HandleRequest(message) {
    return __async(this, null, function* () {
      let handler = this._handlers[message.Headers.Command];
      if (handler == null)
        throw `No handler registered for command: ${message.Headers.Command}`;
      let response = yield handler.HandleAsync(message.Body);
      let returnMessage = {
        Headers: {
          Type: "RESPONSE",
          Command: message.Headers.Command,
          CorrelationId: message.Headers.CorrelationId
        },
        Body: response
      };
      this._bus.Send(returnMessage);
    });
  }
  HandleResponse(message) {
    return __async(this, null, function* () {
      let lockInfo = this._locks[message.Headers.CorrelationId];
      if (lockInfo == null)
        throw `No lock info found for correlationId: ${message.Headers.CorrelationId}`;
      lockInfo.response = message.Body;
      lockInfo.release();
    });
  }
};

// src/common/messaging/core/commands.ts
var GET_PROJECTS = "GetProjects";
var GET_PACKAGES = "GetPackages";
var UPDATE_PROJECT = "UpdateProject";
var SHOW_SETTINGS = "ShowSettings";
var GET_CONFIGURATION = "GetConfiguration";
var UPDATE_CONFIGURATION = "UpdateConfiguration";
var GET_PACKAGE_DETAILS = "GetPackageDetails";
var GET_PACKAGE = "GetPackage";

// src/host/handlers/show-settings.ts
var ShowSettings = class {
  constructor(router2) {
    this.router = router2;
  }
  HandleAsync(request) {
    return __async(this, null, function* () {
      this.router.Navigate("SETTINGS");
      return {};
    });
  }
};

// src/web/router.ts
var Router = class {
  constructor() {
    this.route = "BROWSE";
  }
  get CurrentRoute() {
    Observable.track(this, "CurrentRoute");
    return this.route;
  }
  Navigate(route) {
    this.route = route;
    Observable.notify(this, "CurrentRoute");
  }
};

// src/web/configuration.ts
var ConfigurationService = class {
  constructor(mediator2) {
    this.configuration = null;
    this.mediator = mediator2;
  }
  get Configuration() {
    Observable.track(this, "Configuration");
    return this.configuration;
  }
  Reload() {
    return __async(this, null, function* () {
      let response = yield this.mediator.PublishAsync(GET_CONFIGURATION, {});
      this.configuration = response.Configuration;
      Observable.notify(this, "Configuration");
    });
  }
};

// src/web/registrations.ts
var IMediator = DI.createInterface();
var Router2 = DI.createInterface();
var Configuration = DI.createInterface();
var mediator = new Mediator(new WebBus());
var router = new Router();
var configuration = new ConfigurationService(mediator);
mediator.AddHandler(SHOW_SETTINGS, new ShowSettings(router));
function registrations_default() {
  return [
    Registration.instance(IMediator, mediator),
    Registration.instance(Router2, router),
    Registration.instance(Configuration, configuration)
  ];
}

// node_modules/@vscode/webview-ui-toolkit/dist/vscode-design-system.js
function provideVSCodeDesignSystem(element) {
  return DesignSystem.getOrCreate(element).withPrefix("vscode");
}

// node_modules/@vscode/webview-ui-toolkit/dist/utilities/theme/applyTheme.js
function initThemeChangeListener(tokenMappings2) {
  window.addEventListener("load", () => {
    const observer = new MutationObserver(() => {
      applyCurrentTheme(tokenMappings2);
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    applyCurrentTheme(tokenMappings2);
  });
}
function applyCurrentTheme(tokenMappings2) {
  const styles9 = getComputedStyle(document.body);
  const body = document.querySelector("body");
  if (body) {
    const themeKind = body.getAttribute("data-vscode-theme-kind");
    for (const [vscodeTokenName, toolkitToken] of tokenMappings2) {
      let value = styles9.getPropertyValue(vscodeTokenName).toString();
      if (themeKind === "vscode-high-contrast") {
        if (value.length === 0 && toolkitToken.name.includes("background")) {
          value = "transparent";
        }
        if (toolkitToken.name === "button-icon-hover-background") {
          value = "transparent";
        }
      } else if (themeKind === "vscode-high-contrast-light") {
        if (value.length === 0 && toolkitToken.name.includes("background")) {
          switch (toolkitToken.name) {
            case "button-primary-hover-background":
              value = "#0F4A85";
              break;
            case "button-secondary-hover-background":
              value = "transparent";
              break;
            case "button-icon-hover-background":
              value = "transparent";
              break;
          }
        }
      } else {
        if (toolkitToken.name === "contrast-active-border") {
          value = "transparent";
        }
      }
      toolkitToken.setValueFor(body, value);
    }
  }
}

// node_modules/@vscode/webview-ui-toolkit/dist/utilities/design-tokens/create.js
var tokenMappings = /* @__PURE__ */ new Map();
var isThemeListenerInitialized = false;
function create2(name, vscodeThemeVar) {
  const designToken = DesignToken.create(name);
  if (vscodeThemeVar) {
    if (vscodeThemeVar.includes("--fake-vscode-token")) {
      const uniqueId2 = "id" + Math.random().toString(16).slice(2);
      vscodeThemeVar = `${vscodeThemeVar}-${uniqueId2}`;
    }
    tokenMappings.set(vscodeThemeVar, designToken);
  }
  if (!isThemeListenerInitialized) {
    initThemeChangeListener(tokenMappings);
    isThemeListenerInitialized = true;
  }
  return designToken;
}

// node_modules/@vscode/webview-ui-toolkit/dist/design-tokens.js
var background = create2("background", "--vscode-editor-background").withDefault("#1e1e1e");
var borderWidth = create2("border-width").withDefault(1);
var contrastActiveBorder = create2("contrast-active-border", "--vscode-contrastActiveBorder").withDefault("#f38518");
var contrastBorder = create2("contrast-border", "--vscode-contrastBorder").withDefault("#6fc3df");
var cornerRadius = create2("corner-radius").withDefault(0);
var cornerRadiusRound = create2("corner-radius-round").withDefault(2);
var designUnit = create2("design-unit").withDefault(4);
var disabledOpacity = create2("disabled-opacity").withDefault(0.4);
var focusBorder = create2("focus-border", "--vscode-focusBorder").withDefault("#007fd4");
var fontFamily = create2("font-family", "--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");
var fontWeight = create2("font-weight", "--vscode-font-weight").withDefault("400");
var foreground = create2("foreground", "--vscode-foreground").withDefault("#cccccc");
var inputHeight = create2("input-height").withDefault("26");
var inputMinWidth = create2("input-min-width").withDefault("100px");
var typeRampBaseFontSize = create2("type-ramp-base-font-size", "--vscode-font-size").withDefault("13px");
var typeRampBaseLineHeight = create2("type-ramp-base-line-height").withDefault("normal");
var typeRampMinus1FontSize = create2("type-ramp-minus1-font-size").withDefault("11px");
var typeRampMinus1LineHeight = create2("type-ramp-minus1-line-height").withDefault("16px");
var typeRampMinus2FontSize = create2("type-ramp-minus2-font-size").withDefault("9px");
var typeRampMinus2LineHeight = create2("type-ramp-minus2-line-height").withDefault("16px");
var typeRampPlus1FontSize = create2("type-ramp-plus1-font-size").withDefault("16px");
var typeRampPlus1LineHeight = create2("type-ramp-plus1-line-height").withDefault("24px");
var scrollbarWidth = create2("scrollbarWidth").withDefault("10px");
var scrollbarHeight = create2("scrollbarHeight").withDefault("10px");
var scrollbarSliderBackground = create2("scrollbar-slider-background", "--vscode-scrollbarSlider-background").withDefault("#79797966");
var scrollbarSliderHoverBackground = create2("scrollbar-slider-hover-background", "--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3");
var scrollbarSliderActiveBackground = create2("scrollbar-slider-active-background", "--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66");
var badgeBackground = create2("badge-background", "--vscode-badge-background").withDefault("#4d4d4d");
var badgeForeground = create2("badge-foreground", "--vscode-badge-foreground").withDefault("#ffffff");
var buttonBorder = create2("button-border", "--vscode-button-border").withDefault("transparent");
var buttonIconBackground = create2("button-icon-background").withDefault("transparent");
var buttonIconCornerRadius = create2("button-icon-corner-radius").withDefault("5px");
var buttonIconFocusBorderOffset = create2("button-icon-outline-offset").withDefault(0);
var buttonIconHoverBackground = create2("button-icon-hover-background", "--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)");
var buttonIconPadding = create2("button-icon-padding").withDefault("3px");
var buttonPrimaryBackground = create2("button-primary-background", "--vscode-button-background").withDefault("#0e639c");
var buttonPrimaryForeground = create2("button-primary-foreground", "--vscode-button-foreground").withDefault("#ffffff");
var buttonPrimaryHoverBackground = create2("button-primary-hover-background", "--vscode-button-hoverBackground").withDefault("#1177bb");
var buttonSecondaryBackground = create2("button-secondary-background", "--vscode-button-secondaryBackground").withDefault("#3a3d41");
var buttonSecondaryForeground = create2("button-secondary-foreground", "--vscode-button-secondaryForeground").withDefault("#ffffff");
var buttonSecondaryHoverBackground = create2("button-secondary-hover-background", "--vscode-button-secondaryHoverBackground").withDefault("#45494e");
var buttonPaddingHorizontal = create2("button-padding-horizontal").withDefault("11px");
var buttonPaddingVertical = create2("button-padding-vertical").withDefault("4px");
var checkboxBackground = create2("checkbox-background", "--vscode-checkbox-background").withDefault("#3c3c3c");
var checkboxBorder = create2("checkbox-border", "--vscode-checkbox-border").withDefault("#3c3c3c");
var checkboxCornerRadius = create2("checkbox-corner-radius").withDefault(3);
var checkboxForeground = create2("checkbox-foreground", "--vscode-checkbox-foreground").withDefault("#f0f0f0");
var listActiveSelectionBackground = create2("list-active-selection-background", "--vscode-list-activeSelectionBackground").withDefault("#094771");
var listActiveSelectionForeground = create2("list-active-selection-foreground", "--vscode-list-activeSelectionForeground").withDefault("#ffffff");
var listHoverBackground = create2("list-hover-background", "--vscode-list-hoverBackground").withDefault("#2a2d2e");
var dividerBackground = create2("divider-background", "--vscode-settings-dropdownListBorder").withDefault("#454545");
var dropdownBackground = create2("dropdown-background", "--vscode-dropdown-background").withDefault("#3c3c3c");
var dropdownBorder = create2("dropdown-border", "--vscode-dropdown-border").withDefault("#3c3c3c");
var dropdownForeground = create2("dropdown-foreground", "--vscode-dropdown-foreground").withDefault("#f0f0f0");
var dropdownListMaxHeight = create2("dropdown-list-max-height").withDefault("200px");
var inputBackground = create2("input-background", "--vscode-input-background").withDefault("#3c3c3c");
var inputForeground = create2("input-foreground", "--vscode-input-foreground").withDefault("#cccccc");
var inputPlaceholderForeground = create2("input-placeholder-foreground", "--vscode-input-placeholderForeground").withDefault("#cccccc");
var linkActiveForeground = create2("link-active-foreground", "--vscode-textLink-activeForeground").withDefault("#3794ff");
var linkForeground = create2("link-foreground", "--vscode-textLink-foreground").withDefault("#3794ff");
var progressBackground = create2("progress-background", "--vscode-progressBar-background").withDefault("#0e70c0");
var panelTabActiveBorder = create2("panel-tab-active-border", "--vscode-panelTitle-activeBorder").withDefault("#e7e7e7");
var panelTabActiveForeground = create2("panel-tab-active-foreground", "--vscode-panelTitle-activeForeground").withDefault("#e7e7e7");
var panelTabForeground = create2("panel-tab-foreground", "--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");
var panelViewBackground = create2("panel-view-background", "--vscode-panel-background").withDefault("#1e1e1e");
var panelViewBorder = create2("panel-view-border", "--vscode-panel-border").withDefault("#80808059");
var tagCornerRadius = create2("tag-corner-radius").withDefault("2px");

// node_modules/tslib/tslib.es6.mjs
function __decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// node_modules/@vscode/webview-ui-toolkit/dist/button/button.styles.js
var BaseButtonStyles = css`
	${display("inline-flex")} :host {
		outline: none;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		color: ${buttonPrimaryForeground};
		background: ${buttonPrimaryBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${buttonPaddingVertical} ${buttonPaddingHorizontal};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${borderWidth} * 1px) solid ${buttonBorder};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host(:active) {
		background: ${buttonPrimaryBackground};
	}
	.control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
		background: ${buttonPrimaryBackground};
		cursor: ${disabledCursor};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`;
var PrimaryButtonStyles = css`
	:host([appearance='primary']) {
		background: ${buttonPrimaryBackground};
		color: ${buttonPrimaryForeground};
	}
	:host([appearance='primary']:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${buttonPrimaryBackground};
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${buttonPrimaryBackground};
	}
`;
var SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: ${buttonSecondaryBackground};
		color: ${buttonSecondaryForeground};
	}
	:host([appearance='secondary']:hover) {
		background: ${buttonSecondaryHoverBackground};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${buttonSecondaryBackground};
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${buttonSecondaryBackground};
	}
`;
var IconButtonStyles = css`
	:host([appearance='icon']) {
		background: ${buttonIconBackground};
		border-radius: ${buttonIconCornerRadius};
		color: ${foreground};
	}
	:host([appearance='icon']:hover) {
		background: ${buttonIconHoverBackground};
		outline: 1px dotted ${contrastActiveBorder};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${buttonIconPadding};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${buttonIconHoverBackground};
	}
	:host([appearance='icon']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: ${buttonIconFocusBorderOffset};
	}
	:host([appearance='icon'][disabled]) {
		background: ${buttonIconBackground};
	}
`;
var buttonStyles = (context, definition) => css`
	${BaseButtonStyles}
	${PrimaryButtonStyles}
	${SecondaryButtonStyles}
	${IconButtonStyles}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/button/index.js
var Button2 = class extends Button {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (!this.appearance) {
      const appearanceValue = this.getAttribute("appearance");
      this.appearance = appearanceValue;
    }
  }
  /**
   * Component lifecycle method that runs when an attribute of the
   * element is changed.
   *
   * @param attrName - The attribute that was changed
   * @param oldVal - The old value of the attribute
   * @param newVal - The new value of the attribute
   *
   * @internal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "appearance" && newVal === "icon") {
      const ariaLabelValue = this.getAttribute("aria-label");
      if (!ariaLabelValue) {
        this.ariaLabel = "Icon Button";
      }
    }
    if (attrName === "aria-label") {
      this.ariaLabel = newVal;
    }
    if (attrName === "disabled") {
      this.disabled = newVal !== null;
    }
  }
};
__decorate2([
  attr
], Button2.prototype, "appearance", void 0);
var vsCodeButton = Button2.compose({
  baseName: "button",
  template: buttonTemplate,
  styles: buttonStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});

// node_modules/@vscode/webview-ui-toolkit/dist/checkbox/checkbox.styles.js
var checkboxStyles = (context, defintiion) => css`
	${display("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${designUnit} * 1px) 0;
		user-select: none;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control {
		position: relative;
		width: calc(${designUnit} * 4px + 2px);
		height: calc(${designUnit} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${checkboxCornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
		background: ${checkboxBackground};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${fontFamily};
		color: ${foreground};
		padding-inline-start: calc(${designUnit} * 2px + 2px);
		margin-inline-end: calc(${designUnit} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${foreground};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${foreground};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${checkboxBackground};
		border-color: ${checkboxBorder};
	}
	:host(:enabled) .control:active {
		background: ${checkboxBackground};
		border-color: ${focusBorder};
	}
	:host(:${focusVisible}) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${disabledCursor};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${disabledOpacity};
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/checkbox/index.js
var Checkbox2 = class extends Checkbox {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Checkbox");
    }
  }
};
var vsCodeCheckbox = Checkbox2.compose({
  baseName: "checkbox",
  template: checkboxTemplate,
  styles: checkboxStyles,
  checkedIndicator: `
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,
  indeterminateIndicator: `
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`
});

// node_modules/@vscode/webview-ui-toolkit/dist/dropdown/dropdown.styles.js
var dropdownStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		background: ${dropdownBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		box-sizing: border-box;
		color: ${foreground};
		contain: contents;
		font-family: ${fontFamily};
		height: calc(${inputHeight} * 1px);
		position: relative;
		user-select: none;
		min-width: ${inputMinWidth};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		border-radius: calc(${cornerRadiusRound} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${dropdownBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		border-radius: calc(${cornerRadiusRound} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${dropdownListMaxHeight};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${focusVisible}) .control {
		border-color: ${focusBorder};
	}
	:host(:not([disabled]):hover) {
		background: ${dropdownBackground};
		border-color: ${dropdownBorder};
	}
	:host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		cursor: ${disabledCursor};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${dropdownBackground};
		color: ${foreground};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${focusBorder};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${focusBorder};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${inputHeight} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${inputHeight} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${designUnit} * 4px);
		min-width: calc(${designUnit} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/dropdown/index.js
var Dropdown = class extends Select {
};
var vsCodeDropdown = Dropdown.compose({
  baseName: "dropdown",
  template: selectTemplate,
  styles: dropdownStyles,
  indicator: `
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`
});

// node_modules/@vscode/webview-ui-toolkit/dist/link/link.styles.js
var linkStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${linkForeground};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${borderWidth} * 1px) solid transparent;
		border-radius: calc(${cornerRadius} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${linkActiveForeground};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${linkActiveForeground};
	}
	:host(:${focusVisible}) .control,
	:host(:focus) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/link/index.js
var Link = class extends Anchor {
};
var vsCodeLink = Link.compose({
  baseName: "link",
  template: anchorTemplate,
  styles: linkStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});

// node_modules/@vscode/webview-ui-toolkit/dist/option/option.styles.js
var optionStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${foreground};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${designUnit} / 2) * 1px)
			calc((${designUnit} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${focusVisible}) {
		border-color: ${focusBorder};
		background: ${listActiveSelectionBackground};
		color: ${foreground};
	}
	:host([aria-selected='true']) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host(:active) {
		background: ${listActiveSelectionBackground};
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid transparent;
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${listActiveSelectionBackground};
		color: ${foreground};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/option/index.js
var Option2 = class extends ListboxOption {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Option");
    }
  }
};
var vsCodeOption = Option2.compose({
  baseName: "option",
  template: listboxOptionTemplate,
  styles: optionStyles
});

// node_modules/@vscode/webview-ui-toolkit/dist/panels/panels.styles.js
var panelsStyles = (context, definition) => css`
	${display("grid")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		color: ${foreground};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${designUnit} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${designUnit} / 4) * 1px);
		justify-self: center;
		background: ${panelTabActiveForeground};
		margin: 0;
		border-radius: calc(${cornerRadius} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/panels/panel-tab.styles.js
var panelTabStyles = (context, definition) => css`
	${display("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		height: calc(${designUnit} * 7px);
		padding: calc(${designUnit} * 1px) 0;
		color: ${panelTabForeground};
		fill: currentcolor;
		border-radius: calc(${cornerRadius} * 1px);
		border: solid calc(${borderWidth} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(${borderWidth} * 1px) ${panelTabActiveBorder};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${designUnit} * 2px);
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/panels/panel-view.styles.js
var panelViewStyles = (context, definition) => css`
	${display("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${borderWidth} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: 10px calc((${designUnit} + 2) * 1px);
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/panels/index.js
var Panels = class extends Tabs {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.orientation) {
      this.orientation = TabsOrientation.horizontal;
    }
    const ariaLabelValue = this.getAttribute("aria-label");
    if (!ariaLabelValue) {
      this.setAttribute("aria-label", "Panels");
    }
  }
};
var vsCodePanels = Panels.compose({
  baseName: "panels",
  template: tabsTemplate,
  styles: panelsStyles
});
var PanelTab = class extends Tab {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.disabled) {
      this.disabled = false;
    }
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    }
  }
};
var vsCodePanelTab = PanelTab.compose({
  baseName: "panel-tab",
  template: tabTemplate,
  styles: panelTabStyles
});
var PanelView = class extends TabPanel {
};
var vsCodePanelView = PanelView.compose({
  baseName: "panel-view",
  template: tabPanelTemplate,
  styles: panelViewStyles
});

// node_modules/@vscode/webview-ui-toolkit/dist/progress-ring/progress-ring.styles.js
var progressRingStyles = (context, definition) => css`
	${display("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${designUnit} * 7px);
		width: calc(${designUnit} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${designUnit} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${progressBackground};
		stroke-width: calc(${designUnit} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/progress-ring/index.js
var ProgressRing = class extends BaseProgress {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.paused) {
      this.paused = false;
    }
    this.setAttribute("aria-label", "Loading");
    this.setAttribute("aria-live", "assertive");
    this.setAttribute("role", "alert");
  }
  /**
   * Component lifecycle method that runs when an attribute of the
   * element is changed.
   *
   * @param attrName - The attribute that was changed
   * @param oldVal - The old value of the attribute
   * @param newVal - The new value of the attribute
   *
   * @internal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "value") {
      this.removeAttribute("value");
    }
  }
};
var vsCodeProgressRing = ProgressRing.compose({
  baseName: "progress-ring",
  template: progressRingTemplate,
  styles: progressRingStyles,
  indeterminateIndicator: `
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`
});

// node_modules/@vscode/webview-ui-toolkit/dist/text-field/text-field.styles.js
var textFieldStyles = (context, definition) => css`
	${display("inline-block")} :host {
		font-family: ${fontFamily};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${inputForeground};
		background: ${inputBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		height: calc(${inputHeight} * 1px);
		min-width: ${inputMinWidth};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${designUnit} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${designUnit} * 2px + 1px);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control:hover,
	.control:${focusVisible},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${foreground};
		cursor: pointer;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-start: calc(${designUnit} * 2px);
	}
	.end {
		margin-inline-end: calc(${designUnit} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${inputBackground};
		border-color: ${dropdownBorder};
	}
	:host(:active:not([disabled])) .root {
		background: ${inputBackground};
		border-color: ${focusBorder};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${focusBorder};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		border-color: ${dropdownBorder};
	}
`;

// node_modules/@vscode/webview-ui-toolkit/dist/text-field/index.js
var TextField2 = class extends TextField {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute("aria-label", this.textContent);
    } else {
      this.setAttribute("aria-label", "Text field");
    }
  }
};
var vsCodeTextField = TextField2.compose({
  baseName: "text-field",
  template: textFieldTemplate,
  styles: textFieldStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});

// node_modules/split.js/dist/split.es.js
var global2 = typeof window !== "undefined" ? window : null;
var ssr = global2 === null;
var document2 = !ssr ? global2.document : void 0;
var addEventListener = "addEventListener";
var removeEventListener = "removeEventListener";
var getBoundingClientRect = "getBoundingClientRect";
var gutterStartDragging = "_a";
var aGutterSize = "_b";
var bGutterSize = "_c";
var HORIZONTAL = "horizontal";
var NOOP = function() {
  return false;
};
var calc = ssr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(prefix) {
  var el = document2.createElement("div");
  el.style.cssText = "width:" + prefix + "calc(9px)";
  return !!el.style.length;
}).shift() + "calc";
var isString = function(v) {
  return typeof v === "string" || v instanceof String;
};
var elementOrSelector = function(el) {
  if (isString(el)) {
    var ele = document2.querySelector(el);
    if (!ele) {
      throw new Error("Selector " + el + " did not match a DOM element");
    }
    return ele;
  }
  return el;
};
var getOption = function(options, propName, def) {
  var value = options[propName];
  if (value !== void 0) {
    return value;
  }
  return def;
};
var getGutterSize = function(gutterSize, isFirst, isLast, gutterAlign) {
  if (isFirst) {
    if (gutterAlign === "end") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  } else if (isLast) {
    if (gutterAlign === "start") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  }
  return gutterSize;
};
var defaultGutterFn = function(i, gutterDirection) {
  var gut = document2.createElement("div");
  gut.className = "gutter gutter-" + gutterDirection;
  return gut;
};
var defaultElementStyleFn = function(dim, size, gutSize) {
  var style = {};
  if (!isString(size)) {
    style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
  } else {
    style[dim] = size;
  }
  return style;
};
var defaultGutterStyleFn = function(dim, gutSize) {
  var obj;
  return obj = {}, obj[dim] = gutSize + "px", obj;
};
var Split = function(idsOption, options) {
  if (options === void 0)
    options = {};
  if (ssr) {
    return {};
  }
  var ids = idsOption;
  var dimension;
  var clientAxis;
  var position;
  var positionEnd;
  var clientSize;
  var elements;
  if (Array.from) {
    ids = Array.from(ids);
  }
  var firstElement = elementOrSelector(ids[0]);
  var parent = firstElement.parentNode;
  var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
  var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;
  var sizes = getOption(options, "sizes") || ids.map(function() {
    return 100 / ids.length;
  });
  var minSize = getOption(options, "minSize", 100);
  var minSizes = Array.isArray(minSize) ? minSize : ids.map(function() {
    return minSize;
  });
  var maxSize = getOption(options, "maxSize", Infinity);
  var maxSizes = Array.isArray(maxSize) ? maxSize : ids.map(function() {
    return maxSize;
  });
  var expandToMin = getOption(options, "expandToMin", false);
  var gutterSize = getOption(options, "gutterSize", 10);
  var gutterAlign = getOption(options, "gutterAlign", "center");
  var snapOffset = getOption(options, "snapOffset", 30);
  var snapOffsets = Array.isArray(snapOffset) ? snapOffset : ids.map(function() {
    return snapOffset;
  });
  var dragInterval = getOption(options, "dragInterval", 1);
  var direction = getOption(options, "direction", HORIZONTAL);
  var cursor = getOption(
    options,
    "cursor",
    direction === HORIZONTAL ? "col-resize" : "row-resize"
  );
  var gutter = getOption(options, "gutter", defaultGutterFn);
  var elementStyle = getOption(
    options,
    "elementStyle",
    defaultElementStyleFn
  );
  var gutterStyle = getOption(options, "gutterStyle", defaultGutterStyleFn);
  if (direction === HORIZONTAL) {
    dimension = "width";
    clientAxis = "clientX";
    position = "left";
    positionEnd = "right";
    clientSize = "clientWidth";
  } else if (direction === "vertical") {
    dimension = "height";
    clientAxis = "clientY";
    position = "top";
    positionEnd = "bottom";
    clientSize = "clientHeight";
  }
  function setElementSize(el, size, gutSize, i) {
    var style = elementStyle(dimension, size, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      el.style[prop] = style[prop];
    });
  }
  function setGutterSize(gutterElement, gutSize, i) {
    var style = gutterStyle(dimension, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      gutterElement.style[prop] = style[prop];
    });
  }
  function getSizes() {
    return elements.map(function(element) {
      return element.size;
    });
  }
  function getMousePosition(e) {
    if ("touches" in e) {
      return e.touches[0][clientAxis];
    }
    return e[clientAxis];
  }
  function adjust(offset) {
    var a = elements[this.a];
    var b = elements[this.b];
    var percentage = a.size + b.size;
    a.size = offset / this.size * percentage;
    b.size = percentage - offset / this.size * percentage;
    setElementSize(a.element, a.size, this[aGutterSize], a.i);
    setElementSize(b.element, b.size, this[bGutterSize], b.i);
  }
  function drag(e) {
    var offset;
    var a = elements[this.a];
    var b = elements[this.b];
    if (!this.dragging) {
      return;
    }
    offset = getMousePosition(e) - this.start + (this[aGutterSize] - this.dragOffset);
    if (dragInterval > 1) {
      offset = Math.round(offset / dragInterval) * dragInterval;
    }
    if (offset <= a.minSize + a.snapOffset + this[aGutterSize]) {
      offset = a.minSize + this[aGutterSize];
    } else if (offset >= this.size - (b.minSize + b.snapOffset + this[bGutterSize])) {
      offset = this.size - (b.minSize + this[bGutterSize]);
    }
    if (offset >= a.maxSize - a.snapOffset + this[aGutterSize]) {
      offset = a.maxSize + this[aGutterSize];
    } else if (offset <= this.size - (b.maxSize - b.snapOffset + this[bGutterSize])) {
      offset = this.size - (b.maxSize + this[bGutterSize]);
    }
    adjust.call(this, offset);
    getOption(options, "onDrag", NOOP)(getSizes());
  }
  function calculateSizes() {
    var a = elements[this.a].element;
    var b = elements[this.b].element;
    var aBounds = a[getBoundingClientRect]();
    var bBounds = b[getBoundingClientRect]();
    this.size = aBounds[dimension] + bBounds[dimension] + this[aGutterSize] + this[bGutterSize];
    this.start = aBounds[position];
    this.end = aBounds[positionEnd];
  }
  function innerSize(element) {
    if (!getComputedStyle) {
      return null;
    }
    var computedStyle = getComputedStyle(element);
    if (!computedStyle) {
      return null;
    }
    var size = element[clientSize];
    if (size === 0) {
      return null;
    }
    if (direction === HORIZONTAL) {
      size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    } else {
      size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    }
    return size;
  }
  function trimToMin(sizesToTrim) {
    var parentSize = innerSize(parent);
    if (parentSize === null) {
      return sizesToTrim;
    }
    if (minSizes.reduce(function(a, b) {
      return a + b;
    }, 0) > parentSize) {
      return sizesToTrim;
    }
    var excessPixels = 0;
    var toSpare = [];
    var pixelSizes = sizesToTrim.map(function(size, i) {
      var pixelSize = parentSize * size / 100;
      var elementGutterSize = getGutterSize(
        gutterSize,
        i === 0,
        i === sizesToTrim.length - 1,
        gutterAlign
      );
      var elementMinSize = minSizes[i] + elementGutterSize;
      if (pixelSize < elementMinSize) {
        excessPixels += elementMinSize - pixelSize;
        toSpare.push(0);
        return elementMinSize;
      }
      toSpare.push(pixelSize - elementMinSize);
      return pixelSize;
    });
    if (excessPixels === 0) {
      return sizesToTrim;
    }
    return pixelSizes.map(function(pixelSize, i) {
      var newPixelSize = pixelSize;
      if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
        var takenPixels = Math.min(
          excessPixels,
          toSpare[i] - excessPixels
        );
        excessPixels -= takenPixels;
        newPixelSize = pixelSize - takenPixels;
      }
      return newPixelSize / parentSize * 100;
    });
  }
  function stopDragging() {
    var self2 = this;
    var a = elements[self2.a].element;
    var b = elements[self2.b].element;
    if (self2.dragging) {
      getOption(options, "onDragEnd", NOOP)(getSizes());
    }
    self2.dragging = false;
    global2[removeEventListener]("mouseup", self2.stop);
    global2[removeEventListener]("touchend", self2.stop);
    global2[removeEventListener]("touchcancel", self2.stop);
    global2[removeEventListener]("mousemove", self2.move);
    global2[removeEventListener]("touchmove", self2.move);
    self2.stop = null;
    self2.move = null;
    a[removeEventListener]("selectstart", NOOP);
    a[removeEventListener]("dragstart", NOOP);
    b[removeEventListener]("selectstart", NOOP);
    b[removeEventListener]("dragstart", NOOP);
    a.style.userSelect = "";
    a.style.webkitUserSelect = "";
    a.style.MozUserSelect = "";
    a.style.pointerEvents = "";
    b.style.userSelect = "";
    b.style.webkitUserSelect = "";
    b.style.MozUserSelect = "";
    b.style.pointerEvents = "";
    self2.gutter.style.cursor = "";
    self2.parent.style.cursor = "";
    document2.body.style.cursor = "";
  }
  function startDragging(e) {
    if ("button" in e && e.button !== 0) {
      return;
    }
    var self2 = this;
    var a = elements[self2.a].element;
    var b = elements[self2.b].element;
    if (!self2.dragging) {
      getOption(options, "onDragStart", NOOP)(getSizes());
    }
    e.preventDefault();
    self2.dragging = true;
    self2.move = drag.bind(self2);
    self2.stop = stopDragging.bind(self2);
    global2[addEventListener]("mouseup", self2.stop);
    global2[addEventListener]("touchend", self2.stop);
    global2[addEventListener]("touchcancel", self2.stop);
    global2[addEventListener]("mousemove", self2.move);
    global2[addEventListener]("touchmove", self2.move);
    a[addEventListener]("selectstart", NOOP);
    a[addEventListener]("dragstart", NOOP);
    b[addEventListener]("selectstart", NOOP);
    b[addEventListener]("dragstart", NOOP);
    a.style.userSelect = "none";
    a.style.webkitUserSelect = "none";
    a.style.MozUserSelect = "none";
    a.style.pointerEvents = "none";
    b.style.userSelect = "none";
    b.style.webkitUserSelect = "none";
    b.style.MozUserSelect = "none";
    b.style.pointerEvents = "none";
    self2.gutter.style.cursor = cursor;
    self2.parent.style.cursor = cursor;
    document2.body.style.cursor = cursor;
    calculateSizes.call(self2);
    self2.dragOffset = getMousePosition(e) - self2.end;
  }
  sizes = trimToMin(sizes);
  var pairs = [];
  elements = ids.map(function(id, i) {
    var element = {
      element: elementOrSelector(id),
      size: sizes[i],
      minSize: minSizes[i],
      maxSize: maxSizes[i],
      snapOffset: snapOffsets[i],
      i
    };
    var pair;
    if (i > 0) {
      pair = {
        a: i - 1,
        b: i,
        dragging: false,
        direction,
        parent
      };
      pair[aGutterSize] = getGutterSize(
        gutterSize,
        i - 1 === 0,
        false,
        gutterAlign
      );
      pair[bGutterSize] = getGutterSize(
        gutterSize,
        false,
        i === ids.length - 1,
        gutterAlign
      );
      if (parentFlexDirection === "row-reverse" || parentFlexDirection === "column-reverse") {
        var temp = pair.a;
        pair.a = pair.b;
        pair.b = temp;
      }
    }
    if (i > 0) {
      var gutterElement = gutter(i, direction, element.element);
      setGutterSize(gutterElement, gutterSize, i);
      pair[gutterStartDragging] = startDragging.bind(pair);
      gutterElement[addEventListener](
        "mousedown",
        pair[gutterStartDragging]
      );
      gutterElement[addEventListener](
        "touchstart",
        pair[gutterStartDragging]
      );
      parent.insertBefore(gutterElement, element.element);
      pair.gutter = gutterElement;
    }
    setElementSize(
      element.element,
      element.size,
      getGutterSize(
        gutterSize,
        i === 0,
        i === ids.length - 1,
        gutterAlign
      ),
      i
    );
    if (i > 0) {
      pairs.push(pair);
    }
    return element;
  });
  function adjustToMin(element) {
    var isLast = element.i === pairs.length;
    var pair = isLast ? pairs[element.i - 1] : pairs[element.i];
    calculateSizes.call(pair);
    var size = isLast ? pair.size - element.minSize - pair[bGutterSize] : element.minSize + pair[aGutterSize];
    adjust.call(pair, size);
  }
  elements.forEach(function(element) {
    var computedSize = element.element[getBoundingClientRect]()[dimension];
    if (computedSize < element.minSize) {
      if (expandToMin) {
        adjustToMin(element);
      } else {
        element.minSize = computedSize;
      }
    }
  });
  function setSizes(newSizes) {
    var trimmed = trimToMin(newSizes);
    trimmed.forEach(function(newSize, i) {
      if (i > 0) {
        var pair = pairs[i - 1];
        var a = elements[pair.a];
        var b = elements[pair.b];
        a.size = trimmed[i - 1];
        b.size = newSize;
        setElementSize(a.element, a.size, pair[aGutterSize], a.i);
        setElementSize(b.element, b.size, pair[bGutterSize], b.i);
      }
    });
  }
  function destroy(preserveStyles, preserveGutter) {
    pairs.forEach(function(pair) {
      if (preserveGutter !== true) {
        pair.parent.removeChild(pair.gutter);
      } else {
        pair.gutter[removeEventListener](
          "mousedown",
          pair[gutterStartDragging]
        );
        pair.gutter[removeEventListener](
          "touchstart",
          pair[gutterStartDragging]
        );
      }
      if (preserveStyles !== true) {
        var style = elementStyle(
          dimension,
          pair.a.size,
          pair[aGutterSize]
        );
        Object.keys(style).forEach(function(prop) {
          elements[pair.a].element.style[prop] = "";
          elements[pair.b].element.style[prop] = "";
        });
      }
    });
  }
  return {
    setSizes,
    getSizes,
    collapse: function collapse(i) {
      adjustToMin(elements[i]);
    },
    destroy,
    parent,
    pairs
  };
};
var split_es_default = Split;

// src/web/components/packages-view.ts
var import_object_hash = __toESM(require_object_hash());

// src/web/styles/codicon.css.ts
var codicon_css_default = css`
  @font-face {
    font-family: "codicon";
    font-display: block;
    src: url("assets/codicon.ttf") format("truetype");
  }

  .codicon[class*="codicon-"] {
    font: normal normal normal 16px/1 codicon;
    display: inline-block;
    text-decoration: none;
    text-rendering: auto;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /*---------------------
 *  Modifiers
 *-------------------*/

  @keyframes codicon-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .codicon-sync.codicon-modifier-spin,
  .codicon-loading.codicon-modifier-spin,
  .codicon-gear.codicon-modifier-spin {
    /* Use steps to throttle FPS to reduce CPU usage */
    animation: codicon-spin 1.5s steps(30) infinite;
  }

  .codicon-modifier-disabled {
    opacity: 0.5;
  }

  .codicon-modifier-hidden {
    opacity: 0;
  }

  /* custom speed & easing for loading icon */
  .codicon-loading {
    animation-duration: 1s !important;
    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
  }

  .codicon-add:before {
    content: "\\ea60";
  }
  .codicon-plus:before {
    content: "\\ea60";
  }
  .codicon-gist-new:before {
    content: "\\ea60";
  }
  .codicon-repo-create:before {
    content: "\\ea60";
  }
  .codicon-lightbulb:before {
    content: "\\ea61";
  }
  .codicon-light-bulb:before {
    content: "\\ea61";
  }
  .codicon-repo:before {
    content: "\\ea62";
  }
  .codicon-repo-delete:before {
    content: "\\ea62";
  }
  .codicon-gist-fork:before {
    content: "\\ea63";
  }
  .codicon-repo-forked:before {
    content: "\\ea63";
  }
  .codicon-git-pull-request:before {
    content: "\\ea64";
  }
  .codicon-git-pull-request-abandoned:before {
    content: "\\ea64";
  }
  .codicon-record-keys:before {
    content: "\\ea65";
  }
  .codicon-keyboard:before {
    content: "\\ea65";
  }
  .codicon-tag:before {
    content: "\\ea66";
  }
  .codicon-git-pull-request-label:before {
    content: "\\ea66";
  }
  .codicon-tag-add:before {
    content: "\\ea66";
  }
  .codicon-tag-remove:before {
    content: "\\ea66";
  }
  .codicon-person:before {
    content: "\\ea67";
  }
  .codicon-person-follow:before {
    content: "\\ea67";
  }
  .codicon-person-outline:before {
    content: "\\ea67";
  }
  .codicon-person-filled:before {
    content: "\\ea67";
  }
  .codicon-git-branch:before {
    content: "\\ea68";
  }
  .codicon-git-branch-create:before {
    content: "\\ea68";
  }
  .codicon-git-branch-delete:before {
    content: "\\ea68";
  }
  .codicon-source-control:before {
    content: "\\ea68";
  }
  .codicon-mirror:before {
    content: "\\ea69";
  }
  .codicon-mirror-public:before {
    content: "\\ea69";
  }
  .codicon-star:before {
    content: "\\ea6a";
  }
  .codicon-star-add:before {
    content: "\\ea6a";
  }
  .codicon-star-delete:before {
    content: "\\ea6a";
  }
  .codicon-star-empty:before {
    content: "\\ea6a";
  }
  .codicon-comment:before {
    content: "\\ea6b";
  }
  .codicon-comment-add:before {
    content: "\\ea6b";
  }
  .codicon-alert:before {
    content: "\\ea6c";
  }
  .codicon-warning:before {
    content: "\\ea6c";
  }
  .codicon-search:before {
    content: "\\ea6d";
  }
  .codicon-search-save:before {
    content: "\\ea6d";
  }
  .codicon-log-out:before {
    content: "\\ea6e";
  }
  .codicon-sign-out:before {
    content: "\\ea6e";
  }
  .codicon-log-in:before {
    content: "\\ea6f";
  }
  .codicon-sign-in:before {
    content: "\\ea6f";
  }
  .codicon-eye:before {
    content: "\\ea70";
  }
  .codicon-eye-unwatch:before {
    content: "\\ea70";
  }
  .codicon-eye-watch:before {
    content: "\\ea70";
  }
  .codicon-circle-filled:before {
    content: "\\ea71";
  }
  .codicon-primitive-dot:before {
    content: "\\ea71";
  }
  .codicon-close-dirty:before {
    content: "\\ea71";
  }
  .codicon-debug-breakpoint:before {
    content: "\\ea71";
  }
  .codicon-debug-breakpoint-disabled:before {
    content: "\\ea71";
  }
  .codicon-debug-hint:before {
    content: "\\ea71";
  }
  .codicon-terminal-decoration-success:before {
    content: "\\ea71";
  }
  .codicon-primitive-square:before {
    content: "\\ea72";
  }
  .codicon-edit:before {
    content: "\\ea73";
  }
  .codicon-pencil:before {
    content: "\\ea73";
  }
  .codicon-info:before {
    content: "\\ea74";
  }
  .codicon-issue-opened:before {
    content: "\\ea74";
  }
  .codicon-gist-private:before {
    content: "\\ea75";
  }
  .codicon-git-fork-private:before {
    content: "\\ea75";
  }
  .codicon-lock:before {
    content: "\\ea75";
  }
  .codicon-mirror-private:before {
    content: "\\ea75";
  }
  .codicon-close:before {
    content: "\\ea76";
  }
  .codicon-remove-close:before {
    content: "\\ea76";
  }
  .codicon-x:before {
    content: "\\ea76";
  }
  .codicon-repo-sync:before {
    content: "\\ea77";
  }
  .codicon-sync:before {
    content: "\\ea77";
  }
  .codicon-clone:before {
    content: "\\ea78";
  }
  .codicon-desktop-download:before {
    content: "\\ea78";
  }
  .codicon-beaker:before {
    content: "\\ea79";
  }
  .codicon-microscope:before {
    content: "\\ea79";
  }
  .codicon-vm:before {
    content: "\\ea7a";
  }
  .codicon-device-desktop:before {
    content: "\\ea7a";
  }
  .codicon-file:before {
    content: "\\ea7b";
  }
  .codicon-file-text:before {
    content: "\\ea7b";
  }
  .codicon-more:before {
    content: "\\ea7c";
  }
  .codicon-ellipsis:before {
    content: "\\ea7c";
  }
  .codicon-kebab-horizontal:before {
    content: "\\ea7c";
  }
  .codicon-mail-reply:before {
    content: "\\ea7d";
  }
  .codicon-reply:before {
    content: "\\ea7d";
  }
  .codicon-organization:before {
    content: "\\ea7e";
  }
  .codicon-organization-filled:before {
    content: "\\ea7e";
  }
  .codicon-organization-outline:before {
    content: "\\ea7e";
  }
  .codicon-new-file:before {
    content: "\\ea7f";
  }
  .codicon-file-add:before {
    content: "\\ea7f";
  }
  .codicon-new-folder:before {
    content: "\\ea80";
  }
  .codicon-file-directory-create:before {
    content: "\\ea80";
  }
  .codicon-trash:before {
    content: "\\ea81";
  }
  .codicon-trashcan:before {
    content: "\\ea81";
  }
  .codicon-history:before {
    content: "\\ea82";
  }
  .codicon-clock:before {
    content: "\\ea82";
  }
  .codicon-folder:before {
    content: "\\ea83";
  }
  .codicon-file-directory:before {
    content: "\\ea83";
  }
  .codicon-symbol-folder:before {
    content: "\\ea83";
  }
  .codicon-logo-github:before {
    content: "\\ea84";
  }
  .codicon-mark-github:before {
    content: "\\ea84";
  }
  .codicon-github:before {
    content: "\\ea84";
  }
  .codicon-terminal:before {
    content: "\\ea85";
  }
  .codicon-console:before {
    content: "\\ea85";
  }
  .codicon-repl:before {
    content: "\\ea85";
  }
  .codicon-zap:before {
    content: "\\ea86";
  }
  .codicon-symbol-event:before {
    content: "\\ea86";
  }
  .codicon-error:before {
    content: "\\ea87";
  }
  .codicon-stop:before {
    content: "\\ea87";
  }
  .codicon-variable:before {
    content: "\\ea88";
  }
  .codicon-symbol-variable:before {
    content: "\\ea88";
  }
  .codicon-array:before {
    content: "\\ea8a";
  }
  .codicon-symbol-array:before {
    content: "\\ea8a";
  }
  .codicon-symbol-module:before {
    content: "\\ea8b";
  }
  .codicon-symbol-package:before {
    content: "\\ea8b";
  }
  .codicon-symbol-namespace:before {
    content: "\\ea8b";
  }
  .codicon-symbol-object:before {
    content: "\\ea8b";
  }
  .codicon-symbol-method:before {
    content: "\\ea8c";
  }
  .codicon-symbol-function:before {
    content: "\\ea8c";
  }
  .codicon-symbol-constructor:before {
    content: "\\ea8c";
  }
  .codicon-symbol-boolean:before {
    content: "\\ea8f";
  }
  .codicon-symbol-null:before {
    content: "\\ea8f";
  }
  .codicon-symbol-numeric:before {
    content: "\\ea90";
  }
  .codicon-symbol-number:before {
    content: "\\ea90";
  }
  .codicon-symbol-structure:before {
    content: "\\ea91";
  }
  .codicon-symbol-struct:before {
    content: "\\ea91";
  }
  .codicon-symbol-parameter:before {
    content: "\\ea92";
  }
  .codicon-symbol-type-parameter:before {
    content: "\\ea92";
  }
  .codicon-symbol-key:before {
    content: "\\ea93";
  }
  .codicon-symbol-text:before {
    content: "\\ea93";
  }
  .codicon-symbol-reference:before {
    content: "\\ea94";
  }
  .codicon-go-to-file:before {
    content: "\\ea94";
  }
  .codicon-symbol-enum:before {
    content: "\\ea95";
  }
  .codicon-symbol-value:before {
    content: "\\ea95";
  }
  .codicon-symbol-ruler:before {
    content: "\\ea96";
  }
  .codicon-symbol-unit:before {
    content: "\\ea96";
  }
  .codicon-activate-breakpoints:before {
    content: "\\ea97";
  }
  .codicon-archive:before {
    content: "\\ea98";
  }
  .codicon-arrow-both:before {
    content: "\\ea99";
  }
  .codicon-arrow-down:before {
    content: "\\ea9a";
  }
  .codicon-arrow-left:before {
    content: "\\ea9b";
  }
  .codicon-arrow-right:before {
    content: "\\ea9c";
  }
  .codicon-arrow-small-down:before {
    content: "\\ea9d";
  }
  .codicon-arrow-small-left:before {
    content: "\\ea9e";
  }
  .codicon-arrow-small-right:before {
    content: "\\ea9f";
  }
  .codicon-arrow-small-up:before {
    content: "\\eaa0";
  }
  .codicon-arrow-up:before {
    content: "\\eaa1";
  }
  .codicon-bell:before {
    content: "\\eaa2";
  }
  .codicon-bold:before {
    content: "\\eaa3";
  }
  .codicon-book:before {
    content: "\\eaa4";
  }
  .codicon-bookmark:before {
    content: "\\eaa5";
  }
  .codicon-debug-breakpoint-conditional-unverified:before {
    content: "\\eaa6";
  }
  .codicon-debug-breakpoint-conditional:before {
    content: "\\eaa7";
  }
  .codicon-debug-breakpoint-conditional-disabled:before {
    content: "\\eaa7";
  }
  .codicon-debug-breakpoint-data-unverified:before {
    content: "\\eaa8";
  }
  .codicon-debug-breakpoint-data:before {
    content: "\\eaa9";
  }
  .codicon-debug-breakpoint-data-disabled:before {
    content: "\\eaa9";
  }
  .codicon-debug-breakpoint-log-unverified:before {
    content: "\\eaaa";
  }
  .codicon-debug-breakpoint-log:before {
    content: "\\eaab";
  }
  .codicon-debug-breakpoint-log-disabled:before {
    content: "\\eaab";
  }
  .codicon-briefcase:before {
    content: "\\eaac";
  }
  .codicon-broadcast:before {
    content: "\\eaad";
  }
  .codicon-browser:before {
    content: "\\eaae";
  }
  .codicon-bug:before {
    content: "\\eaaf";
  }
  .codicon-calendar:before {
    content: "\\eab0";
  }
  .codicon-case-sensitive:before {
    content: "\\eab1";
  }
  .codicon-check:before {
    content: "\\eab2";
  }
  .codicon-checklist:before {
    content: "\\eab3";
  }
  .codicon-chevron-down:before {
    content: "\\eab4";
  }
  .codicon-chevron-left:before {
    content: "\\eab5";
  }
  .codicon-chevron-right:before {
    content: "\\eab6";
  }
  .codicon-chevron-up:before {
    content: "\\eab7";
  }
  .codicon-chrome-close:before {
    content: "\\eab8";
  }
  .codicon-chrome-maximize:before {
    content: "\\eab9";
  }
  .codicon-chrome-minimize:before {
    content: "\\eaba";
  }
  .codicon-chrome-restore:before {
    content: "\\eabb";
  }
  .codicon-circle-outline:before {
    content: "\\eabc";
  }
  .codicon-circle:before {
    content: "\\eabc";
  }
  .codicon-debug-breakpoint-unverified:before {
    content: "\\eabc";
  }
  .codicon-terminal-decoration-incomplete:before {
    content: "\\eabc";
  }
  .codicon-circle-slash:before {
    content: "\\eabd";
  }
  .codicon-circuit-board:before {
    content: "\\eabe";
  }
  .codicon-clear-all:before {
    content: "\\eabf";
  }
  .codicon-clippy:before {
    content: "\\eac0";
  }
  .codicon-close-all:before {
    content: "\\eac1";
  }
  .codicon-cloud-download:before {
    content: "\\eac2";
  }
  .codicon-cloud-upload:before {
    content: "\\eac3";
  }
  .codicon-code:before {
    content: "\\eac4";
  }
  .codicon-collapse-all:before {
    content: "\\eac5";
  }
  .codicon-color-mode:before {
    content: "\\eac6";
  }
  .codicon-comment-discussion:before {
    content: "\\eac7";
  }
  .codicon-credit-card:before {
    content: "\\eac9";
  }
  .codicon-dash:before {
    content: "\\eacc";
  }
  .codicon-dashboard:before {
    content: "\\eacd";
  }
  .codicon-database:before {
    content: "\\eace";
  }
  .codicon-debug-continue:before {
    content: "\\eacf";
  }
  .codicon-debug-disconnect:before {
    content: "\\ead0";
  }
  .codicon-debug-pause:before {
    content: "\\ead1";
  }
  .codicon-debug-restart:before {
    content: "\\ead2";
  }
  .codicon-debug-start:before {
    content: "\\ead3";
  }
  .codicon-debug-step-into:before {
    content: "\\ead4";
  }
  .codicon-debug-step-out:before {
    content: "\\ead5";
  }
  .codicon-debug-step-over:before {
    content: "\\ead6";
  }
  .codicon-debug-stop:before {
    content: "\\ead7";
  }
  .codicon-debug:before {
    content: "\\ead8";
  }
  .codicon-device-camera-video:before {
    content: "\\ead9";
  }
  .codicon-device-camera:before {
    content: "\\eada";
  }
  .codicon-device-mobile:before {
    content: "\\eadb";
  }
  .codicon-diff-added:before {
    content: "\\eadc";
  }
  .codicon-diff-ignored:before {
    content: "\\eadd";
  }
  .codicon-diff-modified:before {
    content: "\\eade";
  }
  .codicon-diff-removed:before {
    content: "\\eadf";
  }
  .codicon-diff-renamed:before {
    content: "\\eae0";
  }
  .codicon-diff:before {
    content: "\\eae1";
  }
  .codicon-discard:before {
    content: "\\eae2";
  }
  .codicon-editor-layout:before {
    content: "\\eae3";
  }
  .codicon-empty-window:before {
    content: "\\eae4";
  }
  .codicon-exclude:before {
    content: "\\eae5";
  }
  .codicon-extensions:before {
    content: "\\eae6";
  }
  .codicon-eye-closed:before {
    content: "\\eae7";
  }
  .codicon-file-binary:before {
    content: "\\eae8";
  }
  .codicon-file-code:before {
    content: "\\eae9";
  }
  .codicon-file-media:before {
    content: "\\eaea";
  }
  .codicon-file-pdf:before {
    content: "\\eaeb";
  }
  .codicon-file-submodule:before {
    content: "\\eaec";
  }
  .codicon-file-symlink-directory:before {
    content: "\\eaed";
  }
  .codicon-file-symlink-file:before {
    content: "\\eaee";
  }
  .codicon-file-zip:before {
    content: "\\eaef";
  }
  .codicon-files:before {
    content: "\\eaf0";
  }
  .codicon-filter:before {
    content: "\\eaf1";
  }
  .codicon-flame:before {
    content: "\\eaf2";
  }
  .codicon-fold-down:before {
    content: "\\eaf3";
  }
  .codicon-fold-up:before {
    content: "\\eaf4";
  }
  .codicon-fold:before {
    content: "\\eaf5";
  }
  .codicon-folder-active:before {
    content: "\\eaf6";
  }
  .codicon-folder-opened:before {
    content: "\\eaf7";
  }
  .codicon-gear:before {
    content: "\\eaf8";
  }
  .codicon-gift:before {
    content: "\\eaf9";
  }
  .codicon-gist-secret:before {
    content: "\\eafa";
  }
  .codicon-gist:before {
    content: "\\eafb";
  }
  .codicon-git-commit:before {
    content: "\\eafc";
  }
  .codicon-git-compare:before {
    content: "\\eafd";
  }
  .codicon-compare-changes:before {
    content: "\\eafd";
  }
  .codicon-git-merge:before {
    content: "\\eafe";
  }
  .codicon-github-action:before {
    content: "\\eaff";
  }
  .codicon-github-alt:before {
    content: "\\eb00";
  }
  .codicon-globe:before {
    content: "\\eb01";
  }
  .codicon-grabber:before {
    content: "\\eb02";
  }
  .codicon-graph:before {
    content: "\\eb03";
  }
  .codicon-gripper:before {
    content: "\\eb04";
  }
  .codicon-heart:before {
    content: "\\eb05";
  }
  .codicon-home:before {
    content: "\\eb06";
  }
  .codicon-horizontal-rule:before {
    content: "\\eb07";
  }
  .codicon-hubot:before {
    content: "\\eb08";
  }
  .codicon-inbox:before {
    content: "\\eb09";
  }
  .codicon-issue-reopened:before {
    content: "\\eb0b";
  }
  .codicon-issues:before {
    content: "\\eb0c";
  }
  .codicon-italic:before {
    content: "\\eb0d";
  }
  .codicon-jersey:before {
    content: "\\eb0e";
  }
  .codicon-json:before {
    content: "\\eb0f";
  }
  .codicon-kebab-vertical:before {
    content: "\\eb10";
  }
  .codicon-key:before {
    content: "\\eb11";
  }
  .codicon-law:before {
    content: "\\eb12";
  }
  .codicon-lightbulb-autofix:before {
    content: "\\eb13";
  }
  .codicon-link-external:before {
    content: "\\eb14";
  }
  .codicon-link:before {
    content: "\\eb15";
  }
  .codicon-list-ordered:before {
    content: "\\eb16";
  }
  .codicon-list-unordered:before {
    content: "\\eb17";
  }
  .codicon-live-share:before {
    content: "\\eb18";
  }
  .codicon-loading:before {
    content: "\\eb19";
  }
  .codicon-location:before {
    content: "\\eb1a";
  }
  .codicon-mail-read:before {
    content: "\\eb1b";
  }
  .codicon-mail:before {
    content: "\\eb1c";
  }
  .codicon-markdown:before {
    content: "\\eb1d";
  }
  .codicon-megaphone:before {
    content: "\\eb1e";
  }
  .codicon-mention:before {
    content: "\\eb1f";
  }
  .codicon-milestone:before {
    content: "\\eb20";
  }
  .codicon-git-pull-request-milestone:before {
    content: "\\eb20";
  }
  .codicon-mortar-board:before {
    content: "\\eb21";
  }
  .codicon-move:before {
    content: "\\eb22";
  }
  .codicon-multiple-windows:before {
    content: "\\eb23";
  }
  .codicon-mute:before {
    content: "\\eb24";
  }
  .codicon-no-newline:before {
    content: "\\eb25";
  }
  .codicon-note:before {
    content: "\\eb26";
  }
  .codicon-octoface:before {
    content: "\\eb27";
  }
  .codicon-open-preview:before {
    content: "\\eb28";
  }
  .codicon-package:before {
    content: "\\eb29";
  }
  .codicon-paintcan:before {
    content: "\\eb2a";
  }
  .codicon-pin:before {
    content: "\\eb2b";
  }
  .codicon-play:before {
    content: "\\eb2c";
  }
  .codicon-run:before {
    content: "\\eb2c";
  }
  .codicon-plug:before {
    content: "\\eb2d";
  }
  .codicon-preserve-case:before {
    content: "\\eb2e";
  }
  .codicon-preview:before {
    content: "\\eb2f";
  }
  .codicon-project:before {
    content: "\\eb30";
  }
  .codicon-pulse:before {
    content: "\\eb31";
  }
  .codicon-question:before {
    content: "\\eb32";
  }
  .codicon-quote:before {
    content: "\\eb33";
  }
  .codicon-radio-tower:before {
    content: "\\eb34";
  }
  .codicon-reactions:before {
    content: "\\eb35";
  }
  .codicon-references:before {
    content: "\\eb36";
  }
  .codicon-refresh:before {
    content: "\\eb37";
  }
  .codicon-regex:before {
    content: "\\eb38";
  }
  .codicon-remote-explorer:before {
    content: "\\eb39";
  }
  .codicon-remote:before {
    content: "\\eb3a";
  }
  .codicon-remove:before {
    content: "\\eb3b";
  }
  .codicon-replace-all:before {
    content: "\\eb3c";
  }
  .codicon-replace:before {
    content: "\\eb3d";
  }
  .codicon-repo-clone:before {
    content: "\\eb3e";
  }
  .codicon-repo-force-push:before {
    content: "\\eb3f";
  }
  .codicon-repo-pull:before {
    content: "\\eb40";
  }
  .codicon-repo-push:before {
    content: "\\eb41";
  }
  .codicon-report:before {
    content: "\\eb42";
  }
  .codicon-request-changes:before {
    content: "\\eb43";
  }
  .codicon-rocket:before {
    content: "\\eb44";
  }
  .codicon-root-folder-opened:before {
    content: "\\eb45";
  }
  .codicon-root-folder:before {
    content: "\\eb46";
  }
  .codicon-rss:before {
    content: "\\eb47";
  }
  .codicon-ruby:before {
    content: "\\eb48";
  }
  .codicon-save-all:before {
    content: "\\eb49";
  }
  .codicon-save-as:before {
    content: "\\eb4a";
  }
  .codicon-save:before {
    content: "\\eb4b";
  }
  .codicon-screen-full:before {
    content: "\\eb4c";
  }
  .codicon-screen-normal:before {
    content: "\\eb4d";
  }
  .codicon-search-stop:before {
    content: "\\eb4e";
  }
  .codicon-server:before {
    content: "\\eb50";
  }
  .codicon-settings-gear:before {
    content: "\\eb51";
  }
  .codicon-settings:before {
    content: "\\eb52";
  }
  .codicon-shield:before {
    content: "\\eb53";
  }
  .codicon-smiley:before {
    content: "\\eb54";
  }
  .codicon-sort-precedence:before {
    content: "\\eb55";
  }
  .codicon-split-horizontal:before {
    content: "\\eb56";
  }
  .codicon-split-vertical:before {
    content: "\\eb57";
  }
  .codicon-squirrel:before {
    content: "\\eb58";
  }
  .codicon-star-full:before {
    content: "\\eb59";
  }
  .codicon-star-half:before {
    content: "\\eb5a";
  }
  .codicon-symbol-class:before {
    content: "\\eb5b";
  }
  .codicon-symbol-color:before {
    content: "\\eb5c";
  }
  .codicon-symbol-constant:before {
    content: "\\eb5d";
  }
  .codicon-symbol-enum-member:before {
    content: "\\eb5e";
  }
  .codicon-symbol-field:before {
    content: "\\eb5f";
  }
  .codicon-symbol-file:before {
    content: "\\eb60";
  }
  .codicon-symbol-interface:before {
    content: "\\eb61";
  }
  .codicon-symbol-keyword:before {
    content: "\\eb62";
  }
  .codicon-symbol-misc:before {
    content: "\\eb63";
  }
  .codicon-symbol-operator:before {
    content: "\\eb64";
  }
  .codicon-symbol-property:before {
    content: "\\eb65";
  }
  .codicon-wrench:before {
    content: "\\eb65";
  }
  .codicon-wrench-subaction:before {
    content: "\\eb65";
  }
  .codicon-symbol-snippet:before {
    content: "\\eb66";
  }
  .codicon-tasklist:before {
    content: "\\eb67";
  }
  .codicon-telescope:before {
    content: "\\eb68";
  }
  .codicon-text-size:before {
    content: "\\eb69";
  }
  .codicon-three-bars:before {
    content: "\\eb6a";
  }
  .codicon-thumbsdown:before {
    content: "\\eb6b";
  }
  .codicon-thumbsup:before {
    content: "\\eb6c";
  }
  .codicon-tools:before {
    content: "\\eb6d";
  }
  .codicon-triangle-down:before {
    content: "\\eb6e";
  }
  .codicon-triangle-left:before {
    content: "\\eb6f";
  }
  .codicon-triangle-right:before {
    content: "\\eb70";
  }
  .codicon-triangle-up:before {
    content: "\\eb71";
  }
  .codicon-twitter:before {
    content: "\\eb72";
  }
  .codicon-unfold:before {
    content: "\\eb73";
  }
  .codicon-unlock:before {
    content: "\\eb74";
  }
  .codicon-unmute:before {
    content: "\\eb75";
  }
  .codicon-unverified:before {
    content: "\\eb76";
  }
  .codicon-verified:before {
    content: "\\eb77";
  }
  .codicon-versions:before {
    content: "\\eb78";
  }
  .codicon-vm-active:before {
    content: "\\eb79";
  }
  .codicon-vm-outline:before {
    content: "\\eb7a";
  }
  .codicon-vm-running:before {
    content: "\\eb7b";
  }
  .codicon-watch:before {
    content: "\\eb7c";
  }
  .codicon-whitespace:before {
    content: "\\eb7d";
  }
  .codicon-whole-word:before {
    content: "\\eb7e";
  }
  .codicon-window:before {
    content: "\\eb7f";
  }
  .codicon-word-wrap:before {
    content: "\\eb80";
  }
  .codicon-zoom-in:before {
    content: "\\eb81";
  }
  .codicon-zoom-out:before {
    content: "\\eb82";
  }
  .codicon-list-filter:before {
    content: "\\eb83";
  }
  .codicon-list-flat:before {
    content: "\\eb84";
  }
  .codicon-list-selection:before {
    content: "\\eb85";
  }
  .codicon-selection:before {
    content: "\\eb85";
  }
  .codicon-list-tree:before {
    content: "\\eb86";
  }
  .codicon-debug-breakpoint-function-unverified:before {
    content: "\\eb87";
  }
  .codicon-debug-breakpoint-function:before {
    content: "\\eb88";
  }
  .codicon-debug-breakpoint-function-disabled:before {
    content: "\\eb88";
  }
  .codicon-debug-stackframe-active:before {
    content: "\\eb89";
  }
  .codicon-circle-small-filled:before {
    content: "\\eb8a";
  }
  .codicon-debug-stackframe-dot:before {
    content: "\\eb8a";
  }
  .codicon-terminal-decoration-mark:before {
    content: "\\eb8a";
  }
  .codicon-debug-stackframe:before {
    content: "\\eb8b";
  }
  .codicon-debug-stackframe-focused:before {
    content: "\\eb8b";
  }
  .codicon-debug-breakpoint-unsupported:before {
    content: "\\eb8c";
  }
  .codicon-symbol-string:before {
    content: "\\eb8d";
  }
  .codicon-debug-reverse-continue:before {
    content: "\\eb8e";
  }
  .codicon-debug-step-back:before {
    content: "\\eb8f";
  }
  .codicon-debug-restart-frame:before {
    content: "\\eb90";
  }
  .codicon-debug-alt:before {
    content: "\\eb91";
  }
  .codicon-call-incoming:before {
    content: "\\eb92";
  }
  .codicon-call-outgoing:before {
    content: "\\eb93";
  }
  .codicon-menu:before {
    content: "\\eb94";
  }
  .codicon-expand-all:before {
    content: "\\eb95";
  }
  .codicon-feedback:before {
    content: "\\eb96";
  }
  .codicon-git-pull-request-reviewer:before {
    content: "\\eb96";
  }
  .codicon-group-by-ref-type:before {
    content: "\\eb97";
  }
  .codicon-ungroup-by-ref-type:before {
    content: "\\eb98";
  }
  .codicon-account:before {
    content: "\\eb99";
  }
  .codicon-git-pull-request-assignee:before {
    content: "\\eb99";
  }
  .codicon-bell-dot:before {
    content: "\\eb9a";
  }
  .codicon-debug-console:before {
    content: "\\eb9b";
  }
  .codicon-library:before {
    content: "\\eb9c";
  }
  .codicon-output:before {
    content: "\\eb9d";
  }
  .codicon-run-all:before {
    content: "\\eb9e";
  }
  .codicon-sync-ignored:before {
    content: "\\eb9f";
  }
  .codicon-pinned:before {
    content: "\\eba0";
  }
  .codicon-github-inverted:before {
    content: "\\eba1";
  }
  .codicon-server-process:before {
    content: "\\eba2";
  }
  .codicon-server-environment:before {
    content: "\\eba3";
  }
  .codicon-pass:before {
    content: "\\eba4";
  }
  .codicon-issue-closed:before {
    content: "\\eba4";
  }
  .codicon-stop-circle:before {
    content: "\\eba5";
  }
  .codicon-play-circle:before {
    content: "\\eba6";
  }
  .codicon-record:before {
    content: "\\eba7";
  }
  .codicon-debug-alt-small:before {
    content: "\\eba8";
  }
  .codicon-vm-connect:before {
    content: "\\eba9";
  }
  .codicon-cloud:before {
    content: "\\ebaa";
  }
  .codicon-merge:before {
    content: "\\ebab";
  }
  .codicon-export:before {
    content: "\\ebac";
  }
  .codicon-graph-left:before {
    content: "\\ebad";
  }
  .codicon-magnet:before {
    content: "\\ebae";
  }
  .codicon-notebook:before {
    content: "\\ebaf";
  }
  .codicon-redo:before {
    content: "\\ebb0";
  }
  .codicon-check-all:before {
    content: "\\ebb1";
  }
  .codicon-pinned-dirty:before {
    content: "\\ebb2";
  }
  .codicon-pass-filled:before {
    content: "\\ebb3";
  }
  .codicon-circle-large-filled:before {
    content: "\\ebb4";
  }
  .codicon-circle-large:before {
    content: "\\ebb5";
  }
  .codicon-circle-large-outline:before {
    content: "\\ebb5";
  }
  .codicon-combine:before {
    content: "\\ebb6";
  }
  .codicon-gather:before {
    content: "\\ebb6";
  }
  .codicon-table:before {
    content: "\\ebb7";
  }
  .codicon-variable-group:before {
    content: "\\ebb8";
  }
  .codicon-type-hierarchy:before {
    content: "\\ebb9";
  }
  .codicon-type-hierarchy-sub:before {
    content: "\\ebba";
  }
  .codicon-type-hierarchy-super:before {
    content: "\\ebbb";
  }
  .codicon-git-pull-request-create:before {
    content: "\\ebbc";
  }
  .codicon-run-above:before {
    content: "\\ebbd";
  }
  .codicon-run-below:before {
    content: "\\ebbe";
  }
  .codicon-notebook-template:before {
    content: "\\ebbf";
  }
  .codicon-debug-rerun:before {
    content: "\\ebc0";
  }
  .codicon-workspace-trusted:before {
    content: "\\ebc1";
  }
  .codicon-workspace-untrusted:before {
    content: "\\ebc2";
  }
  .codicon-workspace-unknown:before {
    content: "\\ebc3";
  }
  .codicon-terminal-cmd:before {
    content: "\\ebc4";
  }
  .codicon-terminal-debian:before {
    content: "\\ebc5";
  }
  .codicon-terminal-linux:before {
    content: "\\ebc6";
  }
  .codicon-terminal-powershell:before {
    content: "\\ebc7";
  }
  .codicon-terminal-tmux:before {
    content: "\\ebc8";
  }
  .codicon-terminal-ubuntu:before {
    content: "\\ebc9";
  }
  .codicon-terminal-bash:before {
    content: "\\ebca";
  }
  .codicon-arrow-swap:before {
    content: "\\ebcb";
  }
  .codicon-copy:before {
    content: "\\ebcc";
  }
  .codicon-person-add:before {
    content: "\\ebcd";
  }
  .codicon-filter-filled:before {
    content: "\\ebce";
  }
  .codicon-wand:before {
    content: "\\ebcf";
  }
  .codicon-debug-line-by-line:before {
    content: "\\ebd0";
  }
  .codicon-inspect:before {
    content: "\\ebd1";
  }
  .codicon-layers:before {
    content: "\\ebd2";
  }
  .codicon-layers-dot:before {
    content: "\\ebd3";
  }
  .codicon-layers-active:before {
    content: "\\ebd4";
  }
  .codicon-compass:before {
    content: "\\ebd5";
  }
  .codicon-compass-dot:before {
    content: "\\ebd6";
  }
  .codicon-compass-active:before {
    content: "\\ebd7";
  }
  .codicon-azure:before {
    content: "\\ebd8";
  }
  .codicon-issue-draft:before {
    content: "\\ebd9";
  }
  .codicon-git-pull-request-closed:before {
    content: "\\ebda";
  }
  .codicon-git-pull-request-draft:before {
    content: "\\ebdb";
  }
  .codicon-debug-all:before {
    content: "\\ebdc";
  }
  .codicon-debug-coverage:before {
    content: "\\ebdd";
  }
  .codicon-run-errors:before {
    content: "\\ebde";
  }
  .codicon-folder-library:before {
    content: "\\ebdf";
  }
  .codicon-debug-continue-small:before {
    content: "\\ebe0";
  }
  .codicon-beaker-stop:before {
    content: "\\ebe1";
  }
  .codicon-graph-line:before {
    content: "\\ebe2";
  }
  .codicon-graph-scatter:before {
    content: "\\ebe3";
  }
  .codicon-pie-chart:before {
    content: "\\ebe4";
  }
  .codicon-bracket:before {
    content: "\\eb0f";
  }
  .codicon-bracket-dot:before {
    content: "\\ebe5";
  }
  .codicon-bracket-error:before {
    content: "\\ebe6";
  }
  .codicon-lock-small:before {
    content: "\\ebe7";
  }
  .codicon-azure-devops:before {
    content: "\\ebe8";
  }
  .codicon-verified-filled:before {
    content: "\\ebe9";
  }
  .codicon-newline:before {
    content: "\\ebea";
  }
  .codicon-layout:before {
    content: "\\ebeb";
  }
  .codicon-layout-activitybar-left:before {
    content: "\\ebec";
  }
  .codicon-layout-activitybar-right:before {
    content: "\\ebed";
  }
  .codicon-layout-panel-left:before {
    content: "\\ebee";
  }
  .codicon-layout-panel-center:before {
    content: "\\ebef";
  }
  .codicon-layout-panel-justify:before {
    content: "\\ebf0";
  }
  .codicon-layout-panel-right:before {
    content: "\\ebf1";
  }
  .codicon-layout-panel:before {
    content: "\\ebf2";
  }
  .codicon-layout-sidebar-left:before {
    content: "\\ebf3";
  }
  .codicon-layout-sidebar-right:before {
    content: "\\ebf4";
  }
  .codicon-layout-statusbar:before {
    content: "\\ebf5";
  }
  .codicon-layout-menubar:before {
    content: "\\ebf6";
  }
  .codicon-layout-centered:before {
    content: "\\ebf7";
  }
  .codicon-target:before {
    content: "\\ebf8";
  }
  .codicon-indent:before {
    content: "\\ebf9";
  }
  .codicon-record-small:before {
    content: "\\ebfa";
  }
  .codicon-error-small:before {
    content: "\\ebfb";
  }
  .codicon-terminal-decoration-error:before {
    content: "\\ebfb";
  }
  .codicon-arrow-circle-down:before {
    content: "\\ebfc";
  }
  .codicon-arrow-circle-left:before {
    content: "\\ebfd";
  }
  .codicon-arrow-circle-right:before {
    content: "\\ebfe";
  }
  .codicon-arrow-circle-up:before {
    content: "\\ebff";
  }
  .codicon-layout-sidebar-right-off:before {
    content: "\\ec00";
  }
  .codicon-layout-panel-off:before {
    content: "\\ec01";
  }
  .codicon-layout-sidebar-left-off:before {
    content: "\\ec02";
  }
  .codicon-blank:before {
    content: "\\ec03";
  }
  .codicon-heart-filled:before {
    content: "\\ec04";
  }
  .codicon-map:before {
    content: "\\ec05";
  }
  .codicon-map-filled:before {
    content: "\\ec06";
  }
  .codicon-circle-small:before {
    content: "\\ec07";
  }
  .codicon-bell-slash:before {
    content: "\\ec08";
  }
  .codicon-bell-slash-dot:before {
    content: "\\ec09";
  }
  .codicon-comment-unresolved:before {
    content: "\\ec0a";
  }
  .codicon-git-pull-request-go-to-changes:before {
    content: "\\ec0b";
  }
  .codicon-git-pull-request-new-changes:before {
    content: "\\ec0c";
  }
  .codicon-search-fuzzy:before {
    content: "\\ec0d";
  }
  .codicon-comment-draft:before {
    content: "\\ec0e";
  }
  .codicon-send:before {
    content: "\\ec0f";
  }
  .codicon-sparkle:before {
    content: "\\ec10";
  }
  .codicon-insert:before {
    content: "\\ec11";
  }
  .codicon-mic:before {
    content: "\\ec12";
  }
  .codicon-thumbsdown-filled:before {
    content: "\\ec13";
  }
  .codicon-thumbsup-filled:before {
    content: "\\ec14";
  }
  .codicon-coffee:before {
    content: "\\ec15";
  }
  .codicon-snake:before {
    content: "\\ec16";
  }
  .codicon-game:before {
    content: "\\ec17";
  }
  .codicon-vr:before {
    content: "\\ec18";
  }
  .codicon-chip:before {
    content: "\\ec19";
  }
  .codicon-piano:before {
    content: "\\ec1a";
  }
  .codicon-music:before {
    content: "\\ec1b";
  }
  .codicon-mic-filled:before {
    content: "\\ec1c";
  }
  .codicon-git-fetch:before {
    content: "\\ec1d";
  }
  .codicon-copilot:before {
    content: "\\ec1e";
  }
`;

// src/web/styles/base.css.ts
var scrollableBase = css`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: background 2s ease;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--vscode-scrollbarSlider-background);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--vscode-scrollbarSlider-hoverBackground);
  }

  ::-webkit-scrollbar-thumb:active {
    border-color: var(--vscode-scrollbarSlider-activeBackground);
  }
`;

// src/web/types.ts
var PackageViewModel = class {
  constructor(model, status = "Detailed") {
    this.Selected = false;
    var _a, _b;
    this._authors = model.Authors;
    this.Id = model.Id;
    this.Name = model.Name;
    this.Description = model.Description;
    this.IconUrl = model.IconUrl;
    this.LicenseUrl = model.LicenseUrl;
    this.ProjectUrl = model.ProjectUrl;
    this.TotalDownloads = model.TotalDownloads;
    this.Verified = model.Verified;
    this.Version = model.Version;
    this.InstalledVersion = model.InstalledVersion;
    this.Versions = (_b = (_a = model.Versions) == null ? void 0 : _a.map((x) => x.Version).reverse()) != null ? _b : [];
    this._tags = model.Tags;
    this.Model = model;
    this.Status = status;
  }
  UpdatePackage(model) {
    var _a, _b;
    this._authors = model.Authors;
    this.Id = model.Id;
    this.Name = model.Name;
    this.Description = model.Description;
    this.IconUrl = model.IconUrl;
    this.LicenseUrl = model.LicenseUrl;
    this.ProjectUrl = model.ProjectUrl;
    this.TotalDownloads = model.TotalDownloads;
    this.Verified = model.Verified;
    if (model.Version != "")
      this.Version = model.Version;
    this.Versions = (_b = (_a = model.Versions) == null ? void 0 : _a.map((x) => x.Version).reverse()) != null ? _b : [];
    this._tags = model.Tags;
    this.Model = model;
  }
  get Authors() {
    if (Array.isArray(this._authors)) {
      return this._authors.length ? this._authors.join(", ") : "";
    } else if (typeof this._authors === "string") {
      return this._authors;
    } else {
      console.log("Invalid type for _authors:", this._authors);
    }
    return "";
  }
  get Tags() {
    if (Array.isArray(this._tags)) {
      return this._tags.length ? this._tags.join(", ") : "";
    } else if (typeof this._tags === "string") {
      return this._tags;
    } else {
      console.log("Invalid type for _tags:", this._tags);
    }
    return "";
  }
};
__decorateClass([
  observable
], PackageViewModel.prototype, "Description", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "IconUrl", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "LicenseUrl", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "ProjectUrl", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "TotalDownloads", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "Verified", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "InstalledVersion", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "Version", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "Versions", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "Status", 2);
__decorateClass([
  observable
], PackageViewModel.prototype, "Selected", 2);
var ProjectViewModel = class {
  constructor(model) {
    this.Name = model.Name;
    this.Path = model.Path;
    this.Packages = model.Packages.map((x) => new ProjectPackageViewModel(x));
  }
};
__decorateClass([
  observable
], ProjectViewModel.prototype, "Packages", 2);
var ProjectPackageViewModel = class {
  constructor(model) {
    this.Id = model.Id;
    this.Version = model.Version;
  }
};
var SourceViewModel = class {
  constructor(model = null) {
    this.Id = 0;
    this.Name = "";
    this.Url = "";
    this.DraftName = "";
    this.DraftUrl = "";
    this.EditMode = false;
    this.Editable = true;
    var _a, _b;
    this.Id = nonce_default();
    this.Name = (_a = model == null ? void 0 : model.Name) != null ? _a : "";
    this.Url = (_b = model == null ? void 0 : model.Url) != null ? _b : "";
  }
  Edit() {
    this.DraftName = this.Name;
    this.DraftUrl = this.Url;
    this.EditMode = true;
  }
  Cancel() {
    this.EditMode = false;
  }
  Save() {
    this.Name = this.DraftName;
    this.Url = this.DraftUrl;
    this.EditMode = false;
  }
  GetModel() {
    let model = {
      Name: this.Name,
      Url: this.Url
    };
    return model;
  }
};
__decorateClass([
  observable
], SourceViewModel.prototype, "Name", 2);
__decorateClass([
  observable
], SourceViewModel.prototype, "Url", 2);
__decorateClass([
  observable
], SourceViewModel.prototype, "DraftName", 2);
__decorateClass([
  observable
], SourceViewModel.prototype, "DraftUrl", 2);
__decorateClass([
  observable
], SourceViewModel.prototype, "EditMode", 2);

// src/web/components/packages-view.ts
var template = html`
  <div class="container">
    <div class="col" id="packages">
      <search-bar
        @reload-invoked=${(x) => x.ReloadInvoked()}
        @filter-changed=${(x, e) => x.UpdatePackagesFilters(e.event.detail)}
      ></search-bar>
      <vscode-panels class="tabs" aria-label="Default">
        <vscode-panel-tab class="tab" id="tab-1">BROWSE</vscode-panel-tab>
        <vscode-panel-tab class="tab" id="tab-2">INSTALLED</vscode-panel-tab>
        <vscode-panel-view class="views" id="view-1">
          <div
            class="packages-container"
            @scroll=${(x, e) => x.PackagesScrollEvent(e.event.target)}
          >
            ${when(
  (x) => !x.packagesLoadingError,
  html`
                ${repeat(
    (x) => x.packages,
    html`
                    <package-row
                      :package=${(x) => x}
                      @click=${(x, c) => c.parent.SelectPackage(x)}
                    >
                    </package-row>
                  `
  )}
                ${when(
    (x) => !x.noMorePackages,
    html`<vscode-progress-ring
                    class="loader"
                  ></vscode-progress-ring>`
  )}
              `,
  html`<div class="error">
                <span class="codicon codicon-error"></span> Failed to fetch
                packages. See 'Webview Developer Tools' for more details
              </div> `
)}
          </div>
        </vscode-panel-view>
        <vscode-panel-view class="views installed-packages" id="view-2">
          <div class="packages-container">
            ${repeat(
  (x) => x.projectsPackages,
  html`
                <package-row
                  :showInstalledVersion="${(x) => true}"
                  :package=${(x) => x}
                  @click=${(x, c) => c.parent.SelectPackage(x)}
                >
                </package-row>
              `
)}
          </div>
        </vscode-panel-view>
      </vscode-panels>
    </div>

    <div class="col" id="projects">
      ${when(
  (x) => x.selectedPackage != null,
  html`
          ${when(
    (x) => {
      var _a;
      return ((_a = x.selectedPackage) == null ? void 0 : _a.Status) == "Detailed";
    },
    html`
              <div class="package-info">
                <span class="package-title">
                  ${when(
      (x) => x.NugetOrgPackageUrl != null,
      html`<a
                      target="_blank"
                      :href=${(x) => x.NugetOrgPackageUrl}
                      ><span
                        class="package-link-icon codicon codicon-link-external"
                      ></span
                      >${(x) => {
        var _a;
        return (_a = x.selectedPackage) == null ? void 0 : _a.Name;
      }}</a
                    >`,
      html`${(x) => {
        var _a;
        return (_a = x.selectedPackage) == null ? void 0 : _a.Name;
      }}`
    )}
                </span>
                <div class="version-selector">
                  <vscode-dropdown
                    :value=${(x) => x.selectedVersion}
                    @change=${(x, c) => x.selectedVersion = c.event.target.value}
                  >
                    ${repeat(
      (x) => {
        var _a;
        return ((_a = x.selectedPackage) == null ? void 0 : _a.Versions) || [];
      },
      html` <vscode-option>${(x) => x}</vscode-option> `
    )}
                  </vscode-dropdown>
                  <vscode-button
                    appearance="icon"
                    @click=${(x) => x.LoadProjects()}
                  >
                    <span class="codicon codicon-refresh"></span>
                  </vscode-button>
                </div>
              </div>
              <div class="projects-panel-container">
                <package-details
                  :package=${(x) => x.selectedPackage}
                  :packageVersionUrl=${(x) => x.PackageVersionUrl}
                  :source=${(x) => x.filters.SourceUrl}
                ></package-details>
                <div class="separator"></div>
                ${when(
      (x) => x.projects.length > 0,
      html`
                    ${repeat(
        (x) => x.projects,
        html`
                        <project-row
                          @project-updated=${(x, c) => c.parent.LoadProjectsPackages()}
                          :project=${(x) => x}
                          :packageId=${(x, c) => {
          var _a;
          return (_a = c.parent.selectedPackage) == null ? void 0 : _a.Name;
        }}
                          :packageVersion=${(x, c) => c.parent.selectedVersion}
                        >
                        </project-row>
                      `
      )}
                  `,
      html`<div class="no-projects">
                    <span class="codicon codicon-info"></span> No projects found
                  </div>`
    )}
              </div>
            `,
    html`${when(
      (x) => {
        var _a;
        return ((_a = x.selectedPackage) == null ? void 0 : _a.Status) == "MissingDetails";
      },
      html`<vscode-progress-ring
                class="loader packages-details-loader "
              ></vscode-progress-ring>`,
      html`<div class="error">
                <span class="codicon codicon-error"></span> Failed to fetch the
                package from the selected registry.
              </div> `
    )}`
  )}
        `
)}
    </div>
  </div>
`;
var styles = css`
  .container {
    display: flex;
    height: 100%;

    .error {
      display: flex;
      gap: 4px;
      justify-content: center;
      flex: 1;
      margin-top: 32px;
      color: var(--vscode-errorForeground);
    }

    &:focus-visible {
      outline: unset;
    }

    .col {
      overflow: hidden;
    }

    .gutter {
      display: flex;
      margin: 0 6px;
      justify-content: center;
      transition: background-color 0.1s ease-out;

      &:hover {
        cursor: col-resize;
        background-color: var(--vscode-sash-hoverBorder);
      }
    }

    .gutter-nested {
      width: 1px;
      background-color: var(--vscode-panelSection-border);
    }

    #packages {
      display: flex;
      flex-direction: column;
      .loader {
        align-self: center;
        flex: 1;
      }

      .tabs {
        .tab {
          height: unset;
          font-size: 11px;
        }

        .installed-packages {
          flex-direction: column;
        }

        .views {
          flex: 1;
          padding: 0;
          overflow: hidden;
        }
        &::part(tablist) {
          font-size: 11px;
          padding: 0px;
        }
        &::part(tabpanel) {
          overflow: hidden;
          display: flex;
          margin-top: 6px;
        }
      }

      .packages-container {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        flex: 1;

        .package {
          margin-bottom: 3px;
        }

        .loader {
          margin: 10px 0px;
        }
      }
    }

    #projects {
      display: flex;
      flex-direction: column;

      .packages-details-loader {
        align-self: center;
        margin-top: 20px;
      }

      .package-info {
        padding: 3px;
        margin-left: 2px;
        margin-right: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .package-title {
          font-size: 14px;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          text-wrap: nowrap;

          a {
            text-decoration: none;
            color: var(--vscode-editor-foreground);
          }

          .package-link-icon {
            vertical-align: middle;
            font-size: 12px;
            margin-right: 3px;
          }
        }

        .version-selector {
          text-wrap: nowrap;
          min-width: 128px;
        }
      }
      .projects-panel-container {
        overflow-y: auto;
        overflow-x: hidden;
        .no-projects {
          display: flex;
          gap: 4px;
          margin-left: 6px;
        }

        .separator {
          margin: 10px 0px;
          height: 1px;
          background-color: var(--vscode-panelSection-border);
        }
      }
    }
  }
`;
var PACKAGE_FETCH_TAKE = 50;
var PACKAGE_CONTAINER_SCROLL_MARGIN = 196;
var NUGET_ORG_PREFIX = "https://api.nuget.org";
var PackagesView = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.splitter = null;
    this.packagesPage = 0;
    this.packagesLoadingInProgress = false;
    this.currentLoadPackageHash = "";
    this.projects = [];
    this.selectedVersion = "";
    this.selectedPackage = null;
    this.packages = [];
    this.projectsPackages = [];
    this.filters = {
      Prerelease: true,
      Query: "",
      SourceUrl: ""
    };
    this.noMorePackages = false;
    this.packagesLoadingError = false;
  }
  connectedCallback() {
    var _a, _b, _c, _d;
    super.connectedCallback();
    let packages = (_a = this.shadowRoot) == null ? void 0 : _a.getElementById("packages");
    let projects = (_b = this.shadowRoot) == null ? void 0 : _b.getElementById("projects");
    this.splitter = split_es_default([packages, projects], {
      sizes: [60, 40],
      gutterSize: 4,
      gutter: (index, direction) => {
        const gutter = document.createElement("div");
        const gutterNested = document.createElement("div");
        gutter.className = `gutter gutter-${direction}`;
        gutterNested.className = "gutter-nested";
        gutter.appendChild(gutterNested);
        return gutter;
      }
    });
    this.filters.SourceUrl = (_d = (_c = this.configuration.Configuration) == null ? void 0 : _c.Sources[0].Url) != null ? _d : "";
    this.LoadPackages();
    this.LoadProjects();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.splitter) == null ? void 0 : _a.destroy();
  }
  get NugetOrgPackageUrl() {
    var _a;
    if (this.filters.SourceUrl.startsWith(NUGET_ORG_PREFIX))
      return `https://www.nuget.org/packages/${(_a = this.selectedPackage) == null ? void 0 : _a.Name}/${this.selectedVersion}`;
    else
      return null;
  }
  get PackageVersionUrl() {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = this.selectedPackage) == null ? void 0 : _a.Status) != "Detailed" || ((_b = this.selectedPackage) == null ? void 0 : _b.Model.Versions) == void 0 || ((_c = this.selectedPackage) == null ? void 0 : _c.Model.Versions.length) < 1 || !((_d = this.selectedPackage) == null ? void 0 : _d.Model.Version))
      return "";
    return (_f = (_e = this.selectedPackage) == null ? void 0 : _e.Model.Versions.filter(
      (x) => x.Version == this.selectedVersion
    )[0].Id) != null ? _f : "";
  }
  LoadProjectsPackages() {
    var _a;
    var packages = (_a = this.projects) == null ? void 0 : _a.flatMap((p) => p.Packages).filter(
      (x) => {
        var _a2;
        return x.Id.toLowerCase().includes((_a2 = this.filters.Query) == null ? void 0 : _a2.toLowerCase());
      }
    );
    const grouped = packages.reduce((acc, item) => {
      const { Id, Version } = item;
      if (!acc[Id]) {
        acc[Id] = [];
      }
      if (acc[Id].indexOf(Version) < 0) {
        acc[Id].push(Version);
      }
      return acc;
    }, {});
    this.projectsPackages = Object.entries(grouped).map(
      ([Id, Versions]) => new PackageViewModel(
        {
          Id,
          Name: Id,
          IconUrl: "",
          Versions: Versions == null ? void 0 : Versions.map((x) => ({
            Id: "",
            Version: x
          })),
          InstalledVersion: (Versions == null ? void 0 : Versions.length) == 1 ? Versions[0] : "",
          Version: "",
          Description: "",
          LicenseUrl: "",
          ProjectUrl: "",
          Verified: false,
          TotalDownloads: 0,
          Tags: [],
          Registration: "",
          Authors: []
        },
        "MissingDetails"
      )
    );
    for (let i = 0; i < this.projectsPackages.length; i++) {
      this.UpdatePackage(this.projectsPackages[i]);
    }
  }
  UpdatePackage(projectPackage) {
    return __async(this, null, function* () {
      let result = yield this.mediator.PublishAsync(GET_PACKAGE, {
        Id: projectPackage.Id,
        Url: this.filters.SourceUrl
      });
      if (result.IsFailure || !result.Package) {
        projectPackage.Status = "Error";
      } else {
        if (projectPackage.Version != "")
          result.Package.Version = "";
        projectPackage.UpdatePackage(result.Package);
        projectPackage.Status = "Detailed";
      }
    });
  }
  UpdatePackagesFilters(filters) {
    this.filters = filters;
    this.LoadPackages();
    this.LoadProjectsPackages();
  }
  SelectPackage(selectedPackage) {
    return __async(this, null, function* () {
      this.packages.filter((x) => x.Selected).forEach((x) => x.Selected = false);
      this.projectsPackages.filter((x) => x.Selected).forEach((x) => x.Selected = false);
      selectedPackage.Selected = true;
      this.selectedPackage = selectedPackage;
      if (this.selectedPackage.Status == "MissingDetails") {
        let packageToUpdate = this.selectedPackage;
        let result = yield this.mediator.PublishAsync(GET_PACKAGE, {
          Id: packageToUpdate.Id,
          Url: this.filters.SourceUrl
        });
        if (result.IsFailure || !result.Package) {
          packageToUpdate.Status = "Error";
        } else {
          if (packageToUpdate.Version != "")
            result.Package.Version = "";
          packageToUpdate.UpdatePackage(result.Package);
          packageToUpdate.Status = "Detailed";
        }
      }
      this.selectedVersion = this.selectedPackage.Version;
    });
  }
  PackagesScrollEvent(target) {
    if (this.packagesLoadingInProgress || this.noMorePackages)
      return;
    if (target.scrollTop + target.getBoundingClientRect().height > target.scrollHeight - PACKAGE_CONTAINER_SCROLL_MARGIN)
      this.LoadPackages(true);
  }
  ReloadInvoked() {
    this.LoadPackages();
    this.LoadProjectsPackages();
  }
  LoadPackages(append = false) {
    return __async(this, null, function* () {
      let _getLoadPackageRequest = () => {
        return {
          Url: this.filters.SourceUrl,
          Filter: this.filters.Query,
          Prerelease: this.filters.Prerelease,
          Skip: this.packagesPage * PACKAGE_FETCH_TAKE,
          Take: PACKAGE_FETCH_TAKE
        };
      };
      this.packagesLoadingError = false;
      this.packagesLoadingInProgress = true;
      if (append == false) {
        this.packagesPage = 0;
        this.selectedPackage = null;
        this.packages = [];
      }
      this.noMorePackages = false;
      let requestObject = _getLoadPackageRequest();
      this.currentLoadPackageHash = (0, import_object_hash.default)(requestObject);
      let result = yield this.mediator.PublishAsync(GET_PACKAGES, requestObject);
      if (this.currentLoadPackageHash != (0, import_object_hash.default)(_getLoadPackageRequest()))
        return;
      if (result.IsFailure) {
        this.packagesLoadingError = true;
      } else {
        let packagesViewModels = result.Packages.map(
          (x) => new PackageViewModel(x)
        );
        if (packagesViewModels.length < requestObject.Take)
          this.noMorePackages = true;
        this.packages.push(...packagesViewModels);
        this.packagesPage++;
        this.packagesLoadingInProgress = false;
      }
    });
  }
  LoadProjects() {
    return __async(this, null, function* () {
      this.projects = [];
      let result = yield this.mediator.PublishAsync(GET_PROJECTS, {});
      this.projects = result.Projects.map((x) => new ProjectViewModel(x));
      this.LoadProjectsPackages();
    });
  }
};
__decorateClass([
  IMediator
], PackagesView.prototype, "mediator", 2);
__decorateClass([
  Configuration
], PackagesView.prototype, "configuration", 2);
__decorateClass([
  observable
], PackagesView.prototype, "projects", 2);
__decorateClass([
  observable
], PackagesView.prototype, "selectedVersion", 2);
__decorateClass([
  observable
], PackagesView.prototype, "selectedPackage", 2);
__decorateClass([
  observable
], PackagesView.prototype, "packages", 2);
__decorateClass([
  observable
], PackagesView.prototype, "projectsPackages", 2);
__decorateClass([
  observable
], PackagesView.prototype, "filters", 2);
__decorateClass([
  observable
], PackagesView.prototype, "noMorePackages", 2);
__decorateClass([
  observable
], PackagesView.prototype, "packagesLoadingError", 2);
__decorateClass([
  volatile
], PackagesView.prototype, "NugetOrgPackageUrl", 1);
__decorateClass([
  volatile
], PackagesView.prototype, "PackageVersionUrl", 1);
PackagesView = __decorateClass([
  customElement({
    name: "packages-view",
    template,
    styles: [codicon_css_default, scrollableBase, styles]
  })
], PackagesView);

// src/web/components/package-row.ts
var template2 = html`
<div class="package-row ${(x) => x.package.Selected ? "package-row-selected" : ""}">
    <div class="package-title">
    <img class="icon" src=${(x) => x.IconUrl} @error="${(x) => x.iconUrl = "https://nuget.org/Content/gallery/img/default-package-icon.svg"}"></img> 
    <div class="title">
    <span class="name">${(x) => x.package.Name}</span>
    ${when(
  (x) => x.package.Authors,
  html`<span class="authors"
        >@${(x) => x.package.Authors}</span
      >`
)}
    </div>
    </div>
    <div class="package-version"> ${when(
  (x) => x.showInstalledVersion,
  html`
        ${(x) => x.package.InstalledVersion}
        ${when(
    (x) => x.package.Status == "MissingDetails",
    html`<vscode-progress-ring
            class="loader"
          ></vscode-progress-ring>`,
    html`${when(
      (x) => x.package.Status == "Detailed" && x.package.Version != x.package.InstalledVersion,
      html`<span
              class="codicon codicon-arrow-circle-up"
            ></span>`
    )}`
  )}
      `,
  html`${(x) => x.package.Version}`
)}
    </div>
</div>
`;
var styles2 = css`
  .package-row {
    margin: 2px;
    padding: 3px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-between;
    cursor: default;

    &.package-row-selected {
      background-color: var(--vscode-list-inactiveSelectionBackground);
    }

    &:hover {
      background-color: var(--vscode-list-hoverBackground);
    }

    .package-title {
      display: flex;
      gap: 4px;
      align-items: center;
      flex: 1;
      overflow: hidden;
      .title {
        overflow: hidden;
        white-space: nowrap;

        text-overflow: ellipsis;
      }
      .icon {
        width: 18px;
        height: 18px;
      }
      .name {
        font-weight: bold;
      }

      .authors {
      }
    }

    .package-version {
      font-weight: bold;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 3px;
      .loader {
        height: 12px;
      }
    }
  }
`;
var PackageRow = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.iconUrl = null;
  }
  get IconUrl() {
    var _a;
    if (!this.package.IconUrl)
      this.iconUrl = "https://nuget.org/Content/gallery/img/default-package-icon.svg";
    return (_a = this.iconUrl) != null ? _a : this.package.IconUrl;
  }
};
__decorateClass([
  attr
], PackageRow.prototype, "showInstalledVersion", 2);
__decorateClass([
  attr
], PackageRow.prototype, "package", 2);
__decorateClass([
  observable
], PackageRow.prototype, "iconUrl", 2);
__decorateClass([
  volatile
], PackageRow.prototype, "IconUrl", 1);
PackageRow = __decorateClass([
  customElement({
    name: "package-row",
    template: template2,
    styles: [codicon_css_default, styles2]
  })
], PackageRow);

// src/web/utilities/ObservableDictionary.ts
var ObservableDictionary = class {
  constructor() {
    this.internal = {};
  }
  Add(id, obj) {
    this.internal[id] = obj;
    Observable.notify(this, id);
  }
  Remove(id) {
    delete this.internal[id];
    Observable.notify(this, id);
  }
  Get(id) {
    Observable.track(this, id);
    return id in this.internal ? this.internal[id] : void 0;
  }
};

// src/web/components/project-row.ts
var template3 = html`
  <div class="project-row">
    <div class="project-title">
      <span class="name">${(x) => x.project.Name}</span>
    </div>
    <div class="project-actions">
      ${when(
  (x) => x.loaders.Get(x.packageId) === true,
  html`<vscode-progress-ring class="loader"></vscode-progress-ring>`,
  html`
          <span class="version">${(x) => {
    var _a;
    return (_a = x.ProjectPackage) == null ? void 0 : _a.Version;
  }}</span>
          ${when(
    (x) => x.ProjectPackage !== void 0,
    html`
              ${when(
      (x) => {
        var _a, _b;
        return ((_a = x.ProjectPackage) == null ? void 0 : _a.Version) != x.packageVersion && ((_b = x.ProjectPackage) == null ? void 0 : _b.Version) != void 0;
      },
      html`
                  <vscode-button appearance="icon">
                    <span
                      class="codicon codicon-arrow-circle-up"
                      @click=${(x) => x.Update("INSTALL")}
                    ></span>
                  </vscode-button>
                `
    )}
              <vscode-button appearance="icon">
                <span
                  class="codicon codicon-diff-removed"
                  @click=${(x) => x.Update("UNINSTALL")}
                ></span>
              </vscode-button>
            `,
    html`
              <vscode-button appearance="icon">
                <span
                  class="codicon codicon-diff-added"
                  @click=${(x) => x.Update("INSTALL")}
                ></span>
              </vscode-button>
            `
  )}
        `
)}
    </div>
  </div>
`;
var styles3 = css`
  .project-row {
    margin: 2px;
    padding: 3px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-between;
    cursor: default;

    &:hover {
      background-color: var(--vscode-list-hoverBackground);
    }

    .project-title {
      overflow: hidden;
      text-overflow: ellipsis;
      .name {
        font-weight: bold;
      }
    }
    .project-actions {
      display: flex;
      gap: 3px;
      align-items: center;

      .loader {
        padding: 3px;
        height: 16px;
        width: 16px;
      }

      .version {
      }
    }
  }
`;
var ProjectRow = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.loaders = new ObservableDictionary();
  }
  get ProjectPackage() {
    let projectPackage = this.project.Packages.find((x) => x.Id == this.packageId);
    return projectPackage;
  }
  Update(type) {
    return __async(this, null, function* () {
      let request = {
        Type: type,
        ProjectPath: this.project.Path,
        PackageId: this.packageId,
        Version: this.packageVersion
      };
      this.loaders.Add(request.PackageId, true);
      let result = yield this.mediator.PublishAsync(
        UPDATE_PROJECT,
        request
      );
      this.project.Packages = result.Project.Packages.map((x) => new ProjectPackageViewModel(x));
      this.loaders.Remove(request.PackageId);
      this.$emit("project-updated");
    });
  }
};
__decorateClass([
  IMediator
], ProjectRow.prototype, "mediator", 2);
__decorateClass([
  attr
], ProjectRow.prototype, "project", 2);
__decorateClass([
  attr
], ProjectRow.prototype, "packageId", 2);
__decorateClass([
  attr
], ProjectRow.prototype, "packageVersion", 2);
__decorateClass([
  observable
], ProjectRow.prototype, "loaders", 2);
__decorateClass([
  volatile
], ProjectRow.prototype, "ProjectPackage", 1);
ProjectRow = __decorateClass([
  customElement({
    name: "project-row",
    template: template3,
    styles: [codicon_css_default, styles3]
  })
], ProjectRow);

// src/web/components/settings-view.ts
var import_lodash = __toESM(require_lodash());
var template4 = html`
  <div class="container">
    <div class="header">
      <vscode-button appearance="icon" @click=${(x) => x.router.Navigate("BROWSE")}>
        <div class="return-btn"><span class="codicon codicon-arrow-left"></span>BACK</div>
      </vscode-button>
    </div>

    <div class="sections-container">
      <div class="section">
        <div class="title">Credential Provider Folder</div>
        <div class="subtitle">Folder containing CredentialProvider.Microsoft</div>
        <vscode-text-field
          class="text-field"
          :value=${(x) => x.credentialProviderFolder}
          @input=${(x, c) => {
  x.credentialProviderFolder = c.event.target.value, x.delayedCredentialProviderUpdate();
}}
        ></vscode-text-field>
      </div>

      <div class="section sources-section">
        <div class="title">Sources</div>
        <div class="subtitle">NuGet sources</div>
        <div class="sources-editor">
          ${repeat(
  (x) => x.sources,
  html`
              ${when(
    (x) => x.EditMode,
    html`
                  <div class="row edit-row">
                    <vscode-text-field
                      placeholder="Name"
                      :value=${(x) => x.DraftName}
                      @input=${(x, c) => x.DraftName = c.event.target.value}
                    ></vscode-text-field>
                    <vscode-text-field
                      placeholder="Url"
                      :value=${(x) => x.DraftUrl}
                      @input=${(x, c) => x.DraftUrl = c.event.target.value}
                    ></vscode-text-field>
                    <div>
                      <vscode-button
                        @click=${(x, c) => c.parent.SaveRow(x)}
                      >
                        Ok
                      </vscode-button>
                      <vscode-button
                        appearance="secondary"
                        @click=${(x, c) => c.parent.CancelRow(x)}
                      >
                        Cancel
                      </vscode-button>
                    </div>
                  </div>
                `,
    html`
                  <div class="row data-row">
                    <span class="label">${(x) => x.Name}</span>
                    <span class="label">${(x) => x.Url}</span>
                    <div class="actions">
                      <vscode-button
                        appearance="icon"
                        @click=${(x, c) => c.parent.EditRow(x)}
                      >
                        <span class="codicon codicon-edit"></span>
                      </vscode-button>
                      <vscode-button
                        appearance="icon"
                        @click=${(x, c) => c.parent.RemoveRow(x)}
                      >
                        <span class="codicon codicon-close"></span>
                      </vscode-button>
                    </div>
                  </div>
                `
  )}
            `
)}
        </div>
        ${when(
  (x) => x.newSource == null,
  html`<vscode-button class="add-source" @click=${(x) => x.AddSourceRow()}>
            Add source
          </vscode-button>`
)}
      </div>
    </div>
  </div>
`;
var styles4 = css`
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .header {
      margin-bottom: 8px;
      .return-btn {
        display: flex;
        gap: 4px;
        align-items: center;
        span {
          font: 17px / 1 codicon;
        }
      }
    }
    .sections-container {
      width: 100%;
      max-width: 700px;
      align-self: center;
      overflow-y: auto;

      .section {
        margin-right: 20px;
        margin-bottom: 12px;

        .text-field {
          width: 100%;
        }
        .title {
          font-weight: bold;
          font-size: 13px;
          margin-bottom: 6px;
        }
        .subtitle {
          margin-bottom: 8px;
        }
      }

      .sources-section {
        .sources-editor {
          .row {
            margin: 4px 0px;
            display: grid;
            grid-template-columns: 30% 70%;
            grid-column-gap: 10px;
            &.data-row {
              .actions {
                display: none;
              }
              .label {
                padding: 4px 2px;
                text-wrap: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; gall
              }
              &:hover {
                grid-template-columns: 30% auto 50px;
                background-color: var(--vscode-list-hoverBackground);
                &:not(:first-child) {
                  .actions {
                    display: flex;
                    gap: 2px;
                  }
                }
              }
            }
            &.edit-row {
              grid-template-columns: 30% auto 108px;
            }
          }
        }
        .add-source {
          margin: 6px 0px;
        }
      }
    }
  }
`;
var SettingsView = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.delayedCredentialProviderUpdate = import_lodash.default.debounce(() => this.UpdateConfiguration(), 500);
    this.credentialProviderFolder = "";
    this.newSource = null;
    this.sources = [];
  }
  connectedCallback() {
    var _a, _b;
    super.connectedCallback();
    let config = this.configuration.Configuration;
    this.credentialProviderFolder = (_a = config == null ? void 0 : config.CredentialProviderFolder) != null ? _a : "";
    this.sources = (_b = config == null ? void 0 : config.Sources.map((x) => new SourceViewModel(x))) != null ? _b : [];
  }
  UpdateConfiguration() {
    return __async(this, null, function* () {
      yield this.mediator.PublishAsync(
        UPDATE_CONFIGURATION,
        {
          Configuration: {
            CredentialProviderFolder: this.credentialProviderFolder,
            Sources: this.sources.map((x) => x.GetModel())
          }
        }
      );
      yield this.configuration.Reload();
    });
  }
  AddSourceRow() {
    this.sources.filter((x) => x.EditMode == true).forEach((x) => x.Cancel());
    this.newSource = new SourceViewModel();
    this.newSource.Edit();
    this.sources.push(this.newSource);
  }
  EditRow(source) {
    this.sources.filter((x) => x.EditMode == true).forEach((x) => x.Cancel());
    source.Edit();
  }
  RemoveRow(source) {
    this.sources.splice(this.sources.indexOf(source), 1);
    this.UpdateConfiguration();
  }
  SaveRow(source) {
    var _a;
    if (((_a = this.newSource) == null ? void 0 : _a.Id) == source.Id)
      this.newSource = null;
    source.Save();
    if (source.Name == "" && source.Url == "")
      this.RemoveRow(source);
    this.UpdateConfiguration();
  }
  CancelRow(source) {
    var _a;
    if (((_a = this.newSource) == null ? void 0 : _a.Id) == source.Id)
      this.newSource = null;
    if (source.Name == "" && source.Url == "")
      this.RemoveRow(source);
    else
      source.Cancel();
  }
};
__decorateClass([
  Router2
], SettingsView.prototype, "router", 2);
__decorateClass([
  Configuration
], SettingsView.prototype, "configuration", 2);
__decorateClass([
  IMediator
], SettingsView.prototype, "mediator", 2);
__decorateClass([
  observable
], SettingsView.prototype, "credentialProviderFolder", 2);
__decorateClass([
  observable
], SettingsView.prototype, "newSource", 2);
__decorateClass([
  observable
], SettingsView.prototype, "sources", 2);
SettingsView = __decorateClass([
  customElement({
    name: "settings-view",
    template: template4,
    styles: [codicon_css_default, scrollableBase, styles4]
  })
], SettingsView);

// src/web/components/package-details.ts
var template5 = html`
  <expandable-container title="Info" summary=${(x) => {
  var _a;
  return (_a = x.package) == null ? void 0 : _a.Description;
}}>
    <div class="package-details">
      <span class="title">Author(s):</span>
      <span>${(x) => {
  var _a;
  return (_a = x.package) == null ? void 0 : _a.Authors;
}}</span>

      ${when(
  (x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.LicenseUrl;
  },
  html`
          <span class="title">License:</span>
          <vscode-link href=${(x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.LicenseUrl;
  }}>View License</vscode-link>
        `
)}
      ${when(
  (x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.ProjectUrl;
  },
  html`
          <span class="title">Project Url:</span>
          <vscode-link href=${(x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.ProjectUrl;
  }}>View Project</vscode-link>
        `
)}
      ${when(
  (x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.Tags;
  },
  html`
          <span class="title">Tags:</span>
          <span>${(x) => {
    var _a;
    return (_a = x.package) == null ? void 0 : _a.Tags;
  }}</span>
        `
)}
    </div>
  </expandable-container>

  <expandable-container title="Dependencies">
    ${when(
  (x) => x.packageDetailsLoading,
  html`<vscode-progress-ring class="loader"></vscode-progress-ring>`,
  html` <div class="dependencies">
        ${when(
    (x) => {
      var _a, _b;
      return Object.keys(((_b = (_a = x.packageDetails) == null ? void 0 : _a.dependencies) == null ? void 0 : _b.frameworks) || {}).length > 0;
    },
    html`
            <ul>
              ${repeat(
      (x) => {
        var _a, _b;
        return Object.keys(((_b = (_a = x.packageDetails) == null ? void 0 : _a.dependencies) == null ? void 0 : _b.frameworks) || {});
      },
      html`
                  <li>
                    ${(x) => x}
                    <ul>
                      ${repeat(
        (x, y) => {
          var _a, _b;
          return ((_b = (_a = y.parent.packageDetails) == null ? void 0 : _a.dependencies) == null ? void 0 : _b.frameworks[x]) || [];
        },
        html`<li>
                          ${(x) => x.package} ${(x) => x.versionRange}
                        </li>`
      )}
                    </ul>
                  </li>
                `
    )}
            </ul>
          `,
    html`<div class="no-dependencies">
            <span class="codicon codicon-info"></span>
            <span> No dependencies</span>
          </div>`
  )}
      </div>`
)}
  </expandable-container>
`;
var styles5 = css`
  .title {
  }

  .loader {
    margin: 0px auto;
    width: 20px;
    height: 20px;
  }

  .package-details {
    margin-left: 4px;
    display: grid;
    gap: 4px 20px;
    grid-template-columns: fit-content(100%) auto;
  }

  .dependencies {
    ul {
      margin: 4px 0px;
    }
  }

  .no-dependencies {
    margin-left: 20px;
    margin-top: 8px;
    span {
      vertical-align: middle;
    }
  }
`;
var PackageDetailsComponent = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.package = null;
    this.packageVersionUrl = "";
    this.source = "";
    this.packageDetailsLoading = false;
  }
  sourceChanged(oldValue, newValue) {
    return __async(this, null, function* () {
      this.ReloadDependencies();
    });
  }
  packageVersionUrlChanged(oldValue, newValue) {
    return __async(this, null, function* () {
      this.ReloadDependencies();
    });
  }
  ReloadDependencies() {
    return __async(this, null, function* () {
      this.packageDetails = void 0;
      if (!this.source)
        return;
      if (!this.packageVersionUrl)
        return;
      this.packageDetailsLoading = true;
      let request = {
        PackageVersionUrl: this.packageVersionUrl,
        SourceUrl: this.source
      };
      let result = yield this.mediator.PublishAsync(GET_PACKAGE_DETAILS, request);
      if (request.PackageVersionUrl != this.packageVersionUrl)
        return;
      this.packageDetails = result.Package;
      this.packageDetailsLoading = false;
    });
  }
};
__decorateClass([
  IMediator
], PackageDetailsComponent.prototype, "mediator", 2);
__decorateClass([
  attr
], PackageDetailsComponent.prototype, "package", 2);
__decorateClass([
  attr
], PackageDetailsComponent.prototype, "packageVersionUrl", 2);
__decorateClass([
  attr
], PackageDetailsComponent.prototype, "source", 2);
__decorateClass([
  observable
], PackageDetailsComponent.prototype, "packageDetailsLoading", 2);
__decorateClass([
  observable
], PackageDetailsComponent.prototype, "packageDetails", 2);
PackageDetailsComponent = __decorateClass([
  customElement({
    name: "package-details",
    template: template5,
    styles: [styles5, codicon_css_default]
  })
], PackageDetailsComponent);

// src/web/components/expandable-container.ts
var template6 = html`
  <div
    class="expandable ${(x) => !x.isExpanded ? "collapsed" : ""}"
    @click=${(x) => x.isExpanded = !x.isExpanded}
  >
    <div class="title">
      <span
        class="codicon ${(x) => x.isExpanded ? "codicon-chevron-down" : "codicon-chevron-right"}"
      ></span>
      <span>${(x) => x.title}</span>
    </div>
    <span class="summary">${(x) => x.summary}</span>
  </div>
  <div class="content">${when((x) => x.isExpanded, html`<slot></slot>`)}</div>
`;
var styles6 = css`
  .expandable {
    display: grid;
    grid-template-columns: fit-content(100%) auto;
    gap: 4px 20px;
    padding: 3px;
    margin: 1px;
    cursor: pointer;

    &.collapsed {
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title {
      font-weight: bold;
    }
    span {
      vertical-align: middle;
    }

    .summary {
      margin-top: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .content {
    margin: 3px;
    margin-left: 20px;
  }
`;
var ExpandableContainer = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.title = "";
    this.summary = "";
    this.isExpanded = false;
  }
};
__decorateClass([
  attr
], ExpandableContainer.prototype, "title", 2);
__decorateClass([
  attr
], ExpandableContainer.prototype, "summary", 2);
__decorateClass([
  observable
], ExpandableContainer.prototype, "isExpanded", 2);
ExpandableContainer = __decorateClass([
  customElement({
    name: "expandable-container",
    template: template6,
    styles: [styles6, codicon_css_default]
  })
], ExpandableContainer);

// src/web/components/search-bar.ts
var import_lodash2 = __toESM(require_lodash());
var template7 = html`
  <div class="search-bar">
    <div class="search-bar-left">
      <vscode-text-field
        class="search-text-field"
        @input=${(x, c) => x.FilterInputEvent(c.event.target)}
      >
        <span slot="start" class="codicon codicon-search"></span>
      </vscode-text-field>
      <vscode-button appearance="icon" @click=${(x) => x.ReloadClicked()}>
        <span class="codicon codicon-refresh"></span>
      </vscode-button>
    </div>
    <div class="search-bar-right">
      <vscode-dropdown
        :value=${(x) => x.selectedSourceUrl}
        @change=${(x, c) => x.SelectSource(c.event.target.value)}
      >
        ${repeat(
  (x) => x.configuration.Configuration.Sources,
  html` <vscode-option :value="${(x) => x.Url}">${(x) => x.Name}</vscode-option> `
)}
      </vscode-dropdown>
      <vscode-checkbox
        :checked="${(x) => x.prerelase}"
        @change=${(x, c) => x.PrerelaseChangedEvent(c.event.target)}
        >Prerelease</vscode-checkbox
      >
    </div>
  </div>
`;
var styles7 = css`
  .search-bar {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 10px;

    .search-bar-left {
      flex: 1;
      display: flex;
      gap: 4px;
      .search-text-field {
        flex: 1;
        max-width: 340px;
        min-width: 140px;
      }
    }
    .search-bar-right {
      display: flex;
      gap: 10px;
    }
  }
`;
var SearchBar = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.delayedPackagesLoader = import_lodash2.default.debounce(() => this.EmitFilterChangedEvent(), 500);
    this.prerelase = true;
    this.filterQuery = "";
    this.selectedSourceUrl = "";
  }
  connectedCallback() {
    var _a, _b;
    super.connectedCallback();
    this.selectedSourceUrl = (_b = (_a = this.configuration.Configuration) == null ? void 0 : _a.Sources[0].Url) != null ? _b : "";
    this.EmitFilterChangedEvent();
  }
  PrerelaseChangedEvent(target) {
    this.prerelase = target.checked;
    this.EmitFilterChangedEvent();
  }
  FilterInputEvent(target) {
    this.filterQuery = target.value;
    this.delayedPackagesLoader();
  }
  SelectSource(url) {
    this.selectedSourceUrl = url;
    this.EmitFilterChangedEvent();
  }
  ReloadClicked() {
    this.$emit("reload-invoked");
  }
  EmitFilterChangedEvent() {
    let filterEvent = {
      Query: this.filterQuery,
      Prerelease: this.prerelase,
      SourceUrl: this.selectedSourceUrl
    };
    this.$emit("filter-changed", filterEvent);
  }
};
__decorateClass([
  Configuration
], SearchBar.prototype, "configuration", 2);
__decorateClass([
  observable
], SearchBar.prototype, "prerelase", 2);
__decorateClass([
  observable
], SearchBar.prototype, "filterQuery", 2);
__decorateClass([
  observable
], SearchBar.prototype, "selectedSourceUrl", 2);
SearchBar = __decorateClass([
  customElement({
    name: "search-bar",
    template: template7,
    styles: [codicon_css_default, styles7]
  })
], SearchBar);

// src/web/main.ts
provideVSCodeDesignSystem().register(
  registrations_default(),
  vsCodeButton(),
  vsCodeCheckbox(),
  vsCodeTextField(),
  vsCodePanels(),
  vsCodePanelView(),
  vsCodePanelTab(),
  vsCodeDropdown(),
  vsCodeOption(),
  vsCodeProgressRing(),
  vsCodeLink(),
  PackagesView,
  PackageRow,
  ProjectRow,
  SettingsView,
  PackageDetailsComponent,
  ExpandableContainer,
  SearchBar
);
var template8 = html`
  ${when(
  (x) => x.configuration.Configuration != null,
  html`
      ${when(
    (x) => x.router.CurrentRoute == "BROWSE",
    html`<packages-view></packages-view>`,
    html`<settings-view></settings-view>`
  )}
    `
)}
`;
var styles8 = css``;
var VSCodeNuGetGallery = class extends FASTElement {
  connectedCallback() {
    super.connectedCallback();
    this.configuration.Reload();
  }
};
__decorateClass([
  Router2
], VSCodeNuGetGallery.prototype, "router", 2);
__decorateClass([
  Configuration
], VSCodeNuGetGallery.prototype, "configuration", 2);
VSCodeNuGetGallery = __decorateClass([
  customElement({
    name: "vscode-nuget-gallery",
    template: template8,
    styles: styles8
  })
], VSCodeNuGetGallery);
export {
  VSCodeNuGetGallery
};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=web.js.map
