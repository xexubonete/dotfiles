"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[9892,7560,7397],{7560:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},98283:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},29892:(e,t,r)=>{r.r(t);var n=r(40540),i=r.n(n),a=r(21730),o=r(7560),s=r(98283),c=r(59530),l=r.n(c),d=r(21180),p=r(35736),m=r(58560),u=r(52322);const f=["forwardRef"],h=l()(p.Z).withConfig({displayName:"mimir-editor-wrapper__StyledSpinner",componentId:"sc-144mp7s-0"})(["position:absolute;top:50%;left:50%;"]),y=(e,t=5,r=1e3)=>new Promise(((n,i)=>{e().then(n).catch((a=>{setTimeout((()=>{1!==t?y(e,t-1,r).then(n,i):i(a)}),r)}))})),g=(0,n.lazy)((()=>y((()=>Promise.all([r.e(5162),r.e(5348),r.e(2188),r.e(8090),r.e(5563),r.e(6663),r.e(2833),r.e(5860),r.e(1519),r.e(398),r.e(3860),r.e(955),r.e(9473)]).then(r.bind(r,39473))),3,2e3))),w=l()(m.Z).withConfig({displayName:"mimir-editor-wrapper__MimirEditorContainer",componentId:"sc-144mp7s-1"})(["height:calc(100% - 1px);width:calc(100% - 1px);"]),b=e=>{let{forwardRef:t}=e,r=(0,s.Z)(e,f);return(0,u.jsx)(w,{children:(0,u.jsx)(d.CustomErrorBoundary,{appId:"mimir-editor",errorElementId:"mimir-editor-wrapper",fallback:(0,u.jsx)(d.GenericErrorMessage,{title:"Couldn't load documentation",description:"Just a faulty wire. Try reloading.",illustration:"illustration-internal-server-error"}),children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(h,{className:"mimir-loading-indicator"}),children:(0,u.jsx)(g,(0,o.Z)({ref:t},r))})})})},v=i().forwardRef(((e,t)=>(0,u.jsx)(b,(0,o.Z)({},e,{forwardRef:t}))));var x=r(28422);const N=document.querySelector("#mimir-editor_root");a.render((0,u.jsx)(x.PostmanBootstrap,{appId:"mimir-editor",errorElementId:"global-error-boundary",children:(0,u.jsx)(v,{})}),N)},35736:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(40540),i=r.n(n),a=r(1314),o=r.n(a),s=r(59530),c=r.n(s),l=r(9460),d=r(58560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),m=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),u=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function f(e){var t=e.description,r=e.className,n=e.type,a=e["data-testid"],o="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:r,type:n},i().createElement(m,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),t&&i().createElement(u,{color:o},t))}f.defaultProps={description:"",className:"","data-testid":"aether-spinner"},f.propTypes={description:o().string,className:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string};var h=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),y=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),g=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),w=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),g);function b(e){var t=e.className,r=e.description,n=e.type,a=e["data-testid"],o="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(h,{className:t,type:n},i().createElement(w,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),i().createElement(y,{color:o},r))}function v(e){var t=e.size,r=e.className,n=e.description,a=e.type,o=e["data-testid"];return"small"===t?i().createElement(f,{type:a,className:r,description:n,"data-testid":o}):"large"===t?i().createElement(b,{type:a,description:n||"Loading",className:r,"data-aether-id":"aether-spinner","data-testid":o}):null}b.defaultProps={className:"",description:"","data-testid":"aether-spinner"},b.propTypes={className:o().string,description:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string},v.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},v.propTypes={size:o().oneOf(["small","large"]),className:o().string,type:o().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":o().string}}}]);
//# sourceMappingURL=9892.0a3245438621dfb7.js.map