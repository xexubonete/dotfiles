/*! For license information please see 8912.ced9eab8c176a905.js.LICENSE.txt */
"use strict";(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[8912,1910],{38912:(e,n,t)=>{t.r(n),t.d(n,{CHANGE_LANGUAGE:()=>_,bootstrapI18n:()=>d,changeLanguage:()=>b,createInstance:()=>v,i18n:()=>r(),registerChangeLanguageListener:()=>p});var a=t(73398),r=t.n(a),o=t(11669),s=t.n(o),i=t(45352),c=t(36523),l=t.n(c);const u={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(e,n)=>(e=>`%%basePath%%/${e}/locale/{{lng}}/{{ns}}.json`)(n[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},d=()=>{r().use(l()).use(s()).use(i.initReactI18next).init(u)};t(40540);var f=t(48980),g=t.n(f);const _="CHANGE_LANGUAGE";function b(e){const n=new CustomEvent("CHANGE_LANGUAGE",{detail:e});document.body.dispatchEvent(n)}function p(e){function n(n){e(n.detail)}return r().on("languageChanged",e),document.body.addEventListener(_,n),()=>{r().off("languageChanged",e),document.body.removeEventListener(_,n)}}var E=t(52322);function v(e){const n=r().createInstance();return n.use(l()),n.use(g()(((n,t,a)=>{e(`${n}/${t}`).then((({default:e})=>{a(null,e)})).catch((e=>{a(e,null)}))}))),n.init(Object.assign({},u,{ns:["core"]})),p((e=>{n.changeLanguage(e)})),{i18n:n,useTranslation:(e,t)=>(0,i.useTranslation)(e,Object.assign({},t,{i18n:n})),Translation:e=>(0,E.jsx)(i.Translation,Object.assign({},e,{i18n:n}))}}},11837:(e,n,t)=>{var a=t(40540),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),n.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,o={},l=null,u=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,a)&&!c.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:s.current}}n.jsx=l,n.jsxs=l},52322:(e,n,t)=>{e.exports=t(11837)}}]);
//# sourceMappingURL=8912.ced9eab8c176a905.js.map