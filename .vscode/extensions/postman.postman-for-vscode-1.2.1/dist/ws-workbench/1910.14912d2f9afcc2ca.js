"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[1910],{38912:(n,e,a)=>{a.r(e),a.d(e,{CHANGE_LANGUAGE:()=>b,bootstrapI18n:()=>d,changeLanguage:()=>L,createInstance:()=>C,i18n:()=>s(),registerChangeLanguageListener:()=>A});var t=a(73398),s=a.n(t),o=a(11669),c=a.n(o),u=a(45352),i=a(36523),l=a.n(i);const r={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(n,e)=>(n=>`%%basePath%%/${n}/locale/{{lng}}/{{ns}}.json`)(e[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},d=()=>{s().use(l()).use(c()).use(u.initReactI18next).init(r)};var g=a(7560),h=(a(40540),a(48980)),E=a.n(h);const b="CHANGE_LANGUAGE";function L(n){const e=new CustomEvent("CHANGE_LANGUAGE",{detail:n});document.body.dispatchEvent(e)}function A(n){function e(e){n(e.detail)}return s().on("languageChanged",n),document.body.addEventListener(b,e),()=>{s().off("languageChanged",n),document.body.removeEventListener(b,e)}}var f=a(52322);function C(n){const e=s().createInstance();return e.use(l()),e.use(E()(((e,a,t)=>{n(`${e}/${a}`).then((({default:n})=>{t(null,n)})).catch((n=>{t(n,null)}))}))),e.init((0,g.Z)({},r,{ns:["core"]})),A((n=>{e.changeLanguage(n)})),{i18n:e,useTranslation:(n,a)=>(0,u.useTranslation)(n,(0,g.Z)({},a,{i18n:e})),Translation:n=>(0,f.jsx)(u.Translation,(0,g.Z)({},n,{i18n:e}))}}}}]);
//# sourceMappingURL=1910.14912d2f9afcc2ca.js.map