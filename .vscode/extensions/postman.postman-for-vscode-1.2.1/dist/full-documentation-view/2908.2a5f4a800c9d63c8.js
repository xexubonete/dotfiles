"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[2908],{742908:(o,e,n)=>{n.r(e),n.d(e,{LazyModalsContainer:()=>C,PostmanModalFactory:()=>w});var a=n(607560),d=n(540540),t=n(935348);const l="modalmanager.toggleModal";var r=n(458560),i=n(159530),s=n.n(i);const c=s().div.withConfig({displayName:"skeleton-bar__SkeletonBar",componentId:"sc-10t11n6-0"})(["height:",";width:",";background-color:",";border-radius:",";"],(o=>o.height),(o=>o.width),(o=>o.theme[o.backgroundColorToken]),(o=>o.borderRadius));var h=n(552322);const u=o=>(0,h.jsx)(r.Z,{gap:"spacing-xs",justifyContent:"space-between",grow:1,shrink:1,padding:{paddingBottom:"spacing-l",paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingTop:"spacing-xl"},children:o.children}),p={container:{width:{small:440,medium:648,large:856}},headerFooter:{backgroundColorToken:"background-color-tertiary",height:"10px",borderRadius:"10px"},content:{backgroundColorToken:"background-color-secondary",height:"8px",borderRadius:"8px"}},g=(0,i.keyframes)(["0%{opacity:0.25;}50%{opacity:1;}100%{opacity:0.25;}"]),k=s().div.withConfig({displayName:"fallback-container__FallbackContainer",componentId:"sc-1ger207-0"})(["width:",";animation:"," 1s linear infinite;"],(o=>p.container.width[o.size]),g),m=o=>(0,h.jsxs)(k,{id:"lazy-modal-default-fallback",size:o.size,children:[(0,h.jsx)(u,{children:(0,h.jsx)(c,{height:p.headerFooter.height,width:.45*p.container.width[o.size]+"px",borderRadius:p.headerFooter.borderRadius,backgroundColorToken:p.headerFooter.backgroundColorToken})}),(0,h.jsx)(t.hz,{children:[.7,.85,.65,.55,.8].map((e=>(0,h.jsx)(c,{height:p.content.height,borderRadius:p.content.borderRadius,width:p.container.width[o.size]*e+"px",backgroundColorToken:p.content.backgroundColorToken},e)))}),(0,h.jsx)(t.mz,{children:(0,h.jsxs)(r.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:[(0,h.jsx)(c,{height:p.headerFooter.height,borderRadius:p.headerFooter.borderRadius,width:"48px",backgroundColorToken:p.headerFooter.backgroundColorToken}),(0,h.jsx)(c,{height:p.headerFooter.height,borderRadius:p.headerFooter.borderRadius,width:"48px",backgroundColorToken:p.headerFooter.backgroundColorToken})]})})]}),b={isOpen:!1,modalComponent:t.u_,allowClose:!0,lazyModalContent:()=>(0,h.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,h.jsx)(m,{size:"medium"})},C=()=>{const[o,e]=(0,d.useState)(b);(0,d.useEffect)((()=>{const n=n=>{const{fallback:d,customModalComponent:l,lazyModalContent:r,childProps:i,modalProps:s,allowClose:c}=n.detail;e(null!==r?{modalProps:s,childProps:i,isOpen:!0,modalComponent:l||t.u_,lazyModalContent:r,fallback:d||(0,h.jsx)(m,{size:(null==s?void 0:s.size)||"medium"}),allowClose:null==c||c}:(0,a.Z)({},o,{isOpen:!1}))};return document.addEventListener(l,n),()=>{document.removeEventListener(l,n)}}),[o]);const n=(0,d.useCallback)((()=>{var n,d;o.allowClose&&(null==o||null==(n=o.childProps)||null==(d=n.onClose)||d.call(n),e((0,a.Z)({},o,{isOpen:!1})))}),[o]);return(0,h.jsx)(o.modalComponent,(0,a.Z)({},o.modalProps,{isOpen:o.isOpen,onClose:n,children:(0,h.jsx)(d.Suspense,{fallback:o.fallback,children:(0,h.jsx)(o.lazyModalContent,(0,a.Z)({},o.childProps,{onClose:n}))})}))};let x;const w=Object.freeze({getOpenModal:()=>x,openModal(o){const e=new CustomEvent(l,{detail:o});x=o,document.dispatchEvent(e)},closeModal(){const o=new CustomEvent(l,{detail:{lazyModalContent:null}});x=void 0,document.dispatchEvent(o)}})}}]);
//# sourceMappingURL=2908.2a5f4a800c9d63c8.js.map