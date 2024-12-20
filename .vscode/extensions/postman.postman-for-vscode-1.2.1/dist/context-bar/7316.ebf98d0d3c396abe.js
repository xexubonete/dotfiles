"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[7316,7560,2389,2908],{7560:(e,t,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:()=>o})},2908:(e,t,n)=>{n.r(t),n.d(t,{LazyModalsContainer:()=>b,PostmanModalFactory:()=>x});var o=n(7560),r=n(540),a=n(5348);const i="modalmanager.toggleModal";var s=n(8560),c=n(9530),l=n.n(c);const d=l().div.withConfig({displayName:"skeleton-bar__SkeletonBar",componentId:"sc-10t11n6-0"})(["height:",";width:",";background-color:",";border-radius:",";"],(e=>e.height),(e=>e.width),(e=>e.theme[e.backgroundColorToken]),(e=>e.borderRadius));var p=n(2322);const h=e=>(0,p.jsx)(s.Z,{gap:"spacing-xs",justifyContent:"space-between",grow:1,shrink:1,padding:{paddingBottom:"spacing-l",paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingTop:"spacing-xl"},children:e.children}),u={container:{width:{small:440,medium:648,large:856}},headerFooter:{backgroundColorToken:"background-color-tertiary",height:"10px",borderRadius:"10px"},content:{backgroundColorToken:"background-color-secondary",height:"8px",borderRadius:"8px"}},m=(0,c.keyframes)(["0%{opacity:0.25;}50%{opacity:1;}100%{opacity:0.25;}"]),g=l().div.withConfig({displayName:"fallback-container__FallbackContainer",componentId:"sc-1ger207-0"})(["width:",";animation:"," 1s linear infinite;"],(e=>u.container.width[e.size]),m),f=e=>(0,p.jsxs)(g,{id:"lazy-modal-default-fallback",size:e.size,children:[(0,p.jsx)(h,{children:(0,p.jsx)(d,{height:u.headerFooter.height,width:.45*u.container.width[e.size]+"px",borderRadius:u.headerFooter.borderRadius,backgroundColorToken:u.headerFooter.backgroundColorToken})}),(0,p.jsx)(a.hz,{children:[.7,.85,.65,.55,.8].map((t=>(0,p.jsx)(d,{height:u.content.height,borderRadius:u.content.borderRadius,width:u.container.width[e.size]*t+"px",backgroundColorToken:u.content.backgroundColorToken},t)))}),(0,p.jsx)(a.mz,{children:(0,p.jsxs)(s.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:[(0,p.jsx)(d,{height:u.headerFooter.height,borderRadius:u.headerFooter.borderRadius,width:"48px",backgroundColorToken:u.headerFooter.backgroundColorToken}),(0,p.jsx)(d,{height:u.headerFooter.height,borderRadius:u.headerFooter.borderRadius,width:"48px",backgroundColorToken:u.headerFooter.backgroundColorToken})]})})]}),y={isOpen:!1,modalComponent:a.u_,allowClose:!0,lazyModalContent:()=>(0,p.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,p.jsx)(f,{size:"medium"})},b=()=>{const[e,t]=(0,r.useState)(y);(0,r.useEffect)((()=>{const n=n=>{const{fallback:r,customModalComponent:i,lazyModalContent:s,childProps:c,modalProps:l,allowClose:d}=n.detail;t(null!==s?{modalProps:l,childProps:c,isOpen:!0,modalComponent:i||a.u_,lazyModalContent:s,fallback:r||(0,p.jsx)(f,{size:(null==l?void 0:l.size)||"medium"}),allowClose:null==d||d}:(0,o.Z)({},e,{isOpen:!1}))};return document.addEventListener(i,n),()=>{document.removeEventListener(i,n)}}),[e]);const n=(0,r.useCallback)((()=>{var n,r;e.allowClose&&(null==e||null==(n=e.childProps)||null==(r=n.onClose)||r.call(n),t((0,o.Z)({},e,{isOpen:!1})))}),[e]);return(0,p.jsx)(e.modalComponent,(0,o.Z)({},e.modalProps,{isOpen:e.isOpen,onClose:n,children:(0,p.jsx)(r.Suspense,{fallback:e.fallback,children:(0,p.jsx)(e.lazyModalContent,(0,o.Z)({},e.childProps,{onClose:n}))})}))};let w;const x=Object.freeze({getOpenModal:()=>w,openModal(e){const t=new CustomEvent(i,{detail:e});w=e,document.dispatchEvent(t)},closeModal(){const e=new CustomEvent(i,{detail:{lazyModalContent:null}});w=void 0,document.dispatchEvent(e)}})},9627:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7560),r=n(540),a=n.n(r),i=n(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,o.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-action-close-stroke"};const l=c},4962:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(2247),r=n(4047),a=n(540),i=n.n(a),s=n(1314),c=n.n(s),l=n(9530),d=n.n(l),p=n(3753),h=n(265);function u(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var m=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?u(e.styleAs,e.theme):u(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var t,n,o}));function g(e){var t=e.text,n=e.type,o=e.styleAs,s=e.color,c=e._wordBreak,l=e.className,d=e.hasBottomSpacing,p=e.isTruncated,u=e.maxLines,g=e.tooltip,f=e["data-testid"],y=e["data-click"],b=(0,a.useState)(!1),w=(0,r.Z)(b,2),x=w[0],k=w[1],v=i().createElement(m,{as:n,styleAs:o,color:s,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":y,hasBottomSpacing:d,isTruncated:p,maxLines:u,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?k(!0):k(!1)},wordBreak:c},t);return x&&(0,h.LX)(e)?(0,h.Ur)(v,g||t):v}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,o.Z)(Object.keys(p.globals.colors)),(0,o.Z)(Object.keys(p.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,o=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}},5736:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(540),r=n.n(o),a=n(1314),i=n.n(a),s=n(9530),c=n.n(s),l=n(9460),d=n(8560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),h=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),u=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function m(e){var t=e.description,n=e.className,o=e.type,a=e["data-testid"],i="bright"===o?"content-color-constant":"content-color-secondary";return r().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:o},r().createElement(h,{"data-testid":a},r().createElement("div",{className:"rect-one"}),r().createElement("div",{className:"rect-two"}),r().createElement("div",{className:"rect-three"})),t&&r().createElement(u,{color:i},t))}m.defaultProps={description:"",className:"","data-testid":"aether-spinner"},m.propTypes={description:i().string,className:i().string,type:i().oneOf(["default","bright"]).isRequired,"data-testid":i().string};var g=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),f=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),y=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),b=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),y);function w(e){var t=e.className,n=e.description,o=e.type,a=e["data-testid"],i="bright"===o?"content-color-constant":"content-color-secondary";return r().createElement(g,{className:t,type:o},r().createElement(b,{"data-testid":a},r().createElement("div",{className:"rect-one"}),r().createElement("div",{className:"rect-two"}),r().createElement("div",{className:"rect-three"})),r().createElement(f,{color:i},n))}function x(e){var t=e.size,n=e.className,o=e.description,a=e.type,i=e["data-testid"];return"small"===t?r().createElement(m,{type:a,className:n,description:o,"data-testid":i}):"large"===t?r().createElement(w,{type:a,description:o||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":i}):null}w.defaultProps={className:"",description:"","data-testid":"aether-spinner"},w.propTypes={className:i().string,description:i().string,type:i().oneOf(["default","bright"]).isRequired,"data-testid":i().string},x.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},x.propTypes={size:i().oneOf(["small","large"]),className:i().string,type:i().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":i().string}}}]);
//# sourceMappingURL=7316.ebf98d0d3c396abe.js.map