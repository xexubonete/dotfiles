"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[9239],{31597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>t,perfConst:()=>a,sendMeasureEvent:()=>v,sessionId:()=>p});var a={};n.r(a),n.d(a,{GENERIC_CATEGORY:()=>o,PERFORMANCE_GLOBAL_NAMESPACE:()=>c});var t={};n.r(t),n.d(t,{PerfContext:()=>l,PerformanceMarkPaint:()=>f});const c="__POSTMAN_PERFORMANCE__",o="app-perf";var i=n(40540),s=n(52322);function f({children:e,markName:r,condition:n=!0,callback:a=function(){}}){const[t,c]=(0,i.useState)(!1),o=(0,i.useRef)(0),f=()=>{var e;if(n&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{a()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}c(!0)}};return(0,i.useLayoutEffect)((()=>(o.current=requestAnimationFrame(f),()=>cancelAnimationFrame(o.current))),[n]),(0,s.jsx)(s.Fragment,{children:e})}f.displayName="PerformanceMarkPaint";const m={markName:void 0,callback:void 0},l=(0,i.createContext)(m);l.displayName="PerfContext";var u=n(7560),d=n(56880);const p=(0,n(60398).v4)(),k=[];function y(e){const r=(0,u.Z)({},e,{traceId:p});d.AnalyticsService.addEventV2(r)}function v({name:e,category:r=o,label:n,entityType:a,once:t=!0}){if(!t||!k.includes(e)){k.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))y({category:r,action:t.name,value:Math.round(t.duration),label:n||"",entityType:a})}}}}]);
//# sourceMappingURL=9239.d24a0d132d5735be.js.map