"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[9431],{49431:(e,t,r)=>{r.r(t),r.d(t,{Base64:()=>N,VERSION:()=>n,atob:()=>k,atobPolyfill:()=>D,btoa:()=>g,btoaPolyfill:()=>p,btou:()=>v,decode:()=>Z,encode:()=>F,encodeURI:()=>S,encodeURL:()=>S,extendBuiltins:()=>j,extendString:()=>V,extendUint8Array:()=>_,fromBase64:()=>Z,fromUint8Array:()=>x,isValid:()=>L,toBase64:()=>F,toUint8Array:()=>I,utob:()=>m,version:()=>o});const o="3.7.5",n=o,a="function"==typeof atob,i="function"==typeof btoa,c="function"==typeof Buffer,f="function"==typeof TextDecoder?new TextDecoder:void 0,u="function"==typeof TextEncoder?new TextEncoder:void 0,s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),l=(e=>{let t={};return e.forEach(((e,r)=>t[e]=r)),t})(s),d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,h=String.fromCharCode.bind(String),A="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),b=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),y=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),p=e=>{let t,r,o,n,a="";const i=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=r<<16|o<<8|n,a+=s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}return i?a.slice(0,i-3)+"===".substring(i):a},g=i?e=>btoa(e):c?e=>Buffer.from(e,"binary").toString("base64"):p,B=c?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,o=e.length;r<o;r+=4096)t.push(h.apply(null,e.subarray(r,r+4096)));return g(t.join(""))},x=(e,t=!1)=>t?b(B(e)):B(e),C=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?h(192|t>>>6)+h(128|63&t):h(224|t>>>12&15)+h(128|t>>>6&63)+h(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return h(240|t>>>18&7)+h(128|t>>>12&63)+h(128|t>>>6&63)+h(128|63&t)},U=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,m=e=>e.replace(U,C),w=c?e=>Buffer.from(e,"utf8").toString("base64"):u?e=>B(u.encode(e)):e=>g(m(e)),F=(e,t=!1)=>t?b(w(e)):w(e),S=e=>F(e,!0),R=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,E=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return h(55296+(t>>>10))+h(56320+(1023&t));case 3:return h((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return h((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},v=e=>e.replace(R,E),D=e=>{if(e=e.replace(/\s+/g,""),!d.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,o,n="";for(let a=0;a<e.length;)t=l[e.charAt(a++)]<<18|l[e.charAt(a++)]<<12|(r=l[e.charAt(a++)])<<6|(o=l[e.charAt(a++)]),n+=64===r?h(t>>16&255):64===o?h(t>>16&255,t>>8&255):h(t>>16&255,t>>8&255,255&t);return n},k=a?e=>atob(y(e)):c?e=>Buffer.from(e,"base64").toString("binary"):D,z=c?e=>A(Buffer.from(e,"base64")):e=>A(k(e).split("").map((e=>e.charCodeAt(0)))),I=e=>z(T(e)),P=c?e=>Buffer.from(e,"base64").toString("utf8"):f?e=>f.decode(z(e)):e=>v(k(e)),T=e=>y(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),Z=e=>P(T(e)),L=e=>{if("string"!=typeof e)return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},O=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),V=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,O(t));e("fromBase64",(function(){return Z(this)})),e("toBase64",(function(e){return F(this,e)})),e("toBase64URI",(function(){return F(this,!0)})),e("toBase64URL",(function(){return F(this,!0)})),e("toUint8Array",(function(){return I(this)}))},_=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,O(t));e("toBase64",(function(e){return x(this,e)})),e("toBase64URI",(function(){return x(this,!0)})),e("toBase64URL",(function(){return x(this,!0)}))},j=()=>{V(),_()},N={version:o,VERSION:n,atob:k,atobPolyfill:D,btoa:g,btoaPolyfill:p,fromBase64:Z,toBase64:F,encode:F,encodeURI:S,encodeURL:S,utob:m,btou:v,decode:Z,isValid:L,fromUint8Array:x,toUint8Array:I,extendString:V,extendUint8Array:_,extendBuiltins:j}}}]);
//# sourceMappingURL=9431.6f993d63c7b6b6ad.js.map