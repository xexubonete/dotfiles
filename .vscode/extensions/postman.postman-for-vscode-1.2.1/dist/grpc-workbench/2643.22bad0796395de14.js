"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[2643],{6443:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(40540),o=r(59530),a=r.n(o),i=r(20856),s=r(58560),l=r(68206),c=r(95362),u=r(70262),d=r(98366),p=r(52322);let h,g,f,v,b,x,m,y,w,k=e=>e;const j=a()(s.Z)(h||(h=k`
  align-items: center;
  padding: var(--spacing-zero) var(--spacing-zero) var(--spacing-s)
    var(--spacing-zero);
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-size-s);
`)),C=a().span(g||(g=k`
  border-radius: var(--border-radius-default);
  text-align: center;
  color: var(--content-color-constant);
  font-weight: var(--text-weight-medium);
  line-height: var(--line-height-s);
  font-size: var(--line-height-xs);
  margin-right: 5px !important;
  padding: 0 5px;
  text-transform: capitalize;
  flex: 0 0 5%;
  background-color: ${0};
`),(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),S=a().div(f||(f=k`
  text-overflow: ellipsis;
  max-height: 75px;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: normal;
`)),I=a().span(v||(v=k`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 var(--spacing-xs);
  flex: 1;
  min-width: 150px;
  font-weight: var(--text-weight-medium);
`)),F=a().span(b||(b=k`
  margin-left: var(--spacing-xs);
  display: inline-flex;
`)),E=a()(s.Z)(x||(x=k`
  padding: 2px 0;
  font-size: var(--text-size-s);
  min-width: 120px;
`)),z=a().div(m||(m=k`
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  max-height: 75px;
  max-width: 150px;
  width: 150px;
  display: inline-flex;
  align-items: center;
`)),Z=a().div(y||(y=k`
  font-size: var(--text-size-s);
  text-align: right;
  color: var(--content-color-secondary);
  display: flex;
  flex: 0 0 60px;
  width: 60px;
  user-select: none;
`)),R=a()(l.Z)(w||(w=k`
  justify-content: center;
  border: none;
  height: var(--text-size-s);
  padding-left: 0;

  button {
    display: none !important;
  }

  input {
    height: var(--text-size-s);
  }

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
  }
`)),T=(e,t,r)=>(0,p.jsxs)(E,{children:[(0,p.jsx)(Z,{className:"variable-meta-item-label",children:"current"===t?"CURRENT":"INITIAL"}),(0,p.jsx)(z,{children:r?(0,p.jsx)(R,{value:(0,d.Fn)("current"===t?e.sessionValue:e.value),type:"password",enableCopy:!0}):(0,p.jsx)(s.Z,{justifyContent:"space-between",width:"100%;",children:(0,p.jsx)(S,{children:(0,d.Fn)("current"===t?e.sessionValue:e.value)})})})]}),L=({variableMeta:e})=>{const t="secret"===e.type,[r,o]=(0,n.useState)(t);return(0,p.jsxs)("div",{tabIndex:-1,children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(C,{scope:e.scope,children:e.scope&&e.scope.charAt(0)}),(0,p.jsx)(I,{children:(0,d.Fn)(e.key)}),t&&(0,p.jsx)(F,{onClick:()=>o(!r),children:r?(0,p.jsx)(c.Z,{}):(0,p.jsx)(u.Z,{})})]}),(0,p.jsxs)(s.Z,{direction:"column",children:["dynamic"===e.type?(a=e,(0,p.jsxs)(E,{children:[(0,p.jsx)(Z,{className:"variable-meta-item-label",children:"VALUE"}),(0,p.jsx)(z,{children:(0,p.jsx)(s.Z,{justifyContent:"space-between",width:"100%;",children:(0,p.jsx)(S,{children:(0,d.Fn)(a.description)})})})]})):(0,p.jsxs)(p.Fragment,{children:[T(e,"initial",r),T(e,"current",r)]}),(0,p.jsxs)(E,{children:[(0,p.jsx)(Z,{children:"SCOPE"}),(0,p.jsx)(z,{children:(0,d.KN)("globals"===e.scope.toLowerCase()?(0,d.C5)(e.scope):e.scope)})]})]})]});var a};var N=r(74962),A=r(63622),P=r(35482);const O=()=>(0,p.jsxs)("div",{children:[(0,p.jsxs)(s.Z,{direction:"row",gap:"spacing-s",children:[(0,p.jsx)(P.Z,{color:"base-color-error"}),(0,p.jsx)(N.Z,{type:"h4",color:"content-color-primary",text:"Unresolved Variable",hasBottomSpacing:!0})]}),(0,p.jsx)(A.ZP,{type:"para",hasBottomSpacing:!0,children:(0,p.jsx)(A.ZP,{type:"body-medium",children:"Make sure the variable is defined and enabled in the active environment, collection or globals."})})]});let q;const $=a()(i.ZP)(q||(q=(e=>e)`
  > div.tippy-content {
    background-color: var(--background-color-primary);
  }
`)),D=({trigger:e,value:t})=>e?(0,p.jsx)($,{placement:"bottom-start",padding:"spacing-l",trigger:e,pointer:!0,triggerEvent:"mouseenter",children:t?(0,p.jsx)(L,{variableMeta:t}):(0,p.jsx)(O,{})}):null},22643:(e,t,r)=>{r.r(t),r.d(t,{AuthInput:()=>ct,AuthInputMock:()=>ut,AutoSuggestionInput:()=>ze,KVEditorInput:()=>nt,KVEditorInputMock:()=>et,PostmanInput:()=>xe,URLInput:()=>Ye,URLInputMock:()=>_e,capitalizeFirstCharacter:()=>X.KN,castNonStringTypesToString:()=>X.Fn,extractVariablesFromString:()=>X.rn,getPathVariablesValues:()=>Ge,getResolvedVariables:()=>X.w1,getURLFromQueryParams:()=>Be,getUpdatedQueryParamsFromURL:()=>Qe,getVariable:()=>X.E0,isUnResolvedVariable:()=>X.CS,isVariableResolved:()=>X.Q0,isVariableText:()=>X.yG,singularize:()=>X.C5,usePostmanInputFeatureFlag:()=>me});var n=r(40540),o=r(59530),a=r.n(o),i=r(7560),s=r(98283),l=r(33392),c=r.n(l),u=r(52322);const d=["children","className","isOpen","gap","trigger","triggerRef","appendTo","pointer","xOffset","onClickOutside","maxWidth","placement","triggerEvent"];let p;const h=a()(c())(p||(p=(e=>e)`
  & .tippy-content {
    min-width: 120px;
    z-index: 1000;
    border-radius: var(--border-radius-default);
    font-family: var(--text-family-default);
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);
    font-weight: var(--text-weight-regular);

    /**
     * NOTE: Popover specific styles are not present as CSS variables, thus
     *   using Aether theme prop.
     */
    background-color: ${0};
    box-shadow: ${0};
  }

  & .tippy-svg-arrow > svg {
    filter: ${0};
  }

  & .tippy-svg-arrow > svg > path {
    fill: ${0};
  }
`),(e=>e.theme["popover-background-color"]),(e=>e.theme["popover-box-shadow"]),(e=>e.theme["popover-pointer-filter"]),(e=>e.theme["popover-background-color"]));function g(e){var t;let{children:r,className:o,isOpen:a,gap:l=4,trigger:c,triggerRef:p,appendTo:g,pointer:f,xOffset:v=0,onClickOutside:b,maxWidth:x=320,placement:m="bottom-end",triggerEvent:y="click"}=e,w=(0,s.Z)(e,d);const k=(0,n.useRef)(null),j=f?l+11:l;function C(e){var t;27===e.keyCode&&("boolean"==typeof a&&k.current?null==b||b(k.current,e):null==(t=k.current)||t.hide())}function S(){document.addEventListener("keydown",C)}function I(){document.removeEventListener("keydown",C)}var F;return null!==a?(0,u.jsx)(h,(0,i.Z)({},w,{interactive:!0,visible:a,onCreate:e=>k.current=e,content:r,placement:m,maxWidth:x,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(F=null!=g?g:document.querySelector("#aether-popover-portal"))?F:void 0,reference:p,onShow:S,onHide:I,offset:[v,j],onClickOutside:b,children:c})):(0,u.jsx)(h,(0,i.Z)({},w,{interactive:!0,onCreate:e=>k.current=e,content:r,placement:m,trigger:y,maxWidth:x,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(t=null!=g?g:document.querySelector("#aether-popover-portal"))?t:void 0,reference:p,onShow:S,onHide:I,offset:[v,j],onClickOutside:b,children:c}))}h.displayName="styled(Tippy)";var f=r(494),v=r(74962),b=r(69356),x=r.n(b),m=r(22833),y=r.n(m);let w,k,j=e=>e;const C=32,S=a().li(w||(w=j`
  &.action {
    cursor: pointer;
  }

  &:hover,
  &.selected {
    background-color: var(--highlight-background-color-secondary);
  }
`)),I=a().div(k||(k=j`
  height: ${0}px;
  width: 100%;
  box-sizing: border-box;
  padding: var(--spacing-zero) var(--spacing-m);
  color: var(--content-color-secondary);
  font-size: var(--text-size-m);
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`),C),F=({value:e})=>e?(0,u.jsx)(I,{children:e}):null,E=e=>{const{style:t,isSelected:r,item:n,onSelect:o}=e;return(0,u.jsx)(S,{tabIndex:-1,role:"option","aria-label":n.value,className:y()("action",{selected:r}),style:t,onClick:()=>n.value&&(null==o?void 0:o(n.value)),children:(0,u.jsx)(F,{value:n.value})})},z=["items"],Z=["style","data"],R=["items"],T=["style","data"],L=["items","selectedIndex"];function N(e,t){const{style:r,data:{items:n}}=e,o=(0,s.Z)(e.data,z),a=(0,s.Z)(e,Z),{style:i,data:{items:l}}=t,c=(0,s.Z)(t.data,R),u=(0,s.Z)(t,T);return x()(r,i)&&x()(n,l)&&x()(o,c)&&x()(a,u)}const A=(0,n.memo)((({data:e,index:t,style:r})=>{const{items:n,selectedIndex:o}=e,a=(0,s.Z)(e,L),l=n[t];return(0,u.jsx)(E,(0,i.Z)({item:l,isSelected:o===t,style:r},a))}),N);A.displayName="memo(ItemRenderer)";const P=A,O=["children","ref"];let q;const $=a().ul(q||(q=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;

  li:last-child {
    &,
    div {
      border-bottom-left-radius: var(--border-radius-default);
      border-bottom-right-radius: var(--border-radius-default);
    }
  }
`));function D(e){let{children:t,ref:r}=e,n=(0,s.Z)(e,O);const o=r;return(0,u.jsx)($,(0,i.Z)({id:"autosuggest-datalist",role:"listbox","aria-label":"Autosuggest Listbox",tabIndex:-1,ref:o},n,{children:t}))}function U(e){const t=(0,n.useRef)(e);return t.current=e,t.current}let V;const M=e=>{const t=e*C;return t>200?200:t},H=a()(v.Z)(V||(V=(e=>e)`
  padding: var(--spacing-m) var(--spacing-m) var(--spacing-s) var(--spacing-m);
`));function W({suggestions:e,selectedIndex:t,onSelect:r}){const o=(0,n.useRef)(null),a=U(r),i=0===e.length;(0,n.useEffect)((()=>{"number"==typeof t&&o.current&&o.current.scrollToItem(t,"smart")}),[t]);const s={items:e,selectedIndex:t,onSelect:a};return(0,u.jsxs)(u.Fragment,{children:[!i&&(0,u.jsx)(H,{type:"h5",text:"Recently used URLs",color:"content-color-secondary"}),(0,u.jsx)(f.FixedSizeList,{ref:o,height:M(e.length),itemData:s,itemKey:(e,t)=>{const{items:r}=t;return r[e].id},itemCount:e.length,itemSize:C,innerElementType:D,width:"100%",children:P})]})}const K={modifiers:[{name:"sameWidth",enabled:!0,fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},phase:"beforeWrite",requires:["computeStyles"],effect:({state:e})=>{e.elements.popper.style.width=`${e.elements.reference.clientWidth}px`}}]},B=function(e,t,r){let n,o,a,i,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){const r=n,a=o;return n=o=void 0,c=t,i=e.apply(a,r),i}function g(e,t){return setTimeout(e,t)}function f(e){const r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=a}function v(){const e=Date.now();if(f(e))return b(e);s=g(v,function(e){const r=e-c,n=t-(e-l);return d?Math.min(n,a-r):n}(e))}function b(e){return s=void 0,p&&n?h(e):(n=o=void 0,i)}function x(...e){const r=Date.now(),a=f(r);if(n=e,o=this,l=r,a){if(void 0===s)return function(e){return c=e,s=g(v,t),u?h(e):i}(l);if(d)return s=g(v,t),h(l)}return void 0===s&&(s=g(v,t)),i}return t=+t||0,x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},x.flush=function(){return void 0===s?i:b(Date.now())},x.pending=function(){return void 0!==s},x}(((e,t)=>{t(e)}),100),Q=e=>[...new Map(e.map((e=>[e.value,e]))).values()];function G({searchTerm:e,suggestions:t,customFilter:r}){const[o]=function(e){const[t,r]=(0,n.useState)(e);return e!==t&&B(e,r),(0,n.useEffect)((()=>()=>{B.cancel()}),[]),[t]}(e),[a,i]=(0,n.useState)(t),s=(0,n.useRef)(Q(t)),l=U(r);a!==t&&(i(t),s.current=Q(t));const c=(0,n.useMemo)((()=>0===a.length?[]:o?l?s.current.filter((e=>null==l?void 0:l(e))):s.current.filter((e=>{var t;return(null==(t=e.value)?void 0:t.toLowerCase().includes(o.toLowerCase()))&&e.value!==o})):s.current.filter((e=>!!e.value))),[o,a,l]);return{filteredList:c,hasNoItems:0===c.length}}const _=(e,t)=>t>e-1||t<0;function J({index:e,arraySize:t}){return(0,n.useMemo)((()=>"number"!=typeof e?e:_(t,e)?Math.max(0,Math.min(e,t-1)):e),[e,t])}var X=r(98366),Y=r(98276),ee=r(6443);let te,re,ne,oe=e=>e;const ae=a().div(te||(te=oe`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  color: ${0};
  background-color: ${0};
  height: 100%;
  align-items: center;
  font-size: var(--font-size-default);
  position: absolute;
  top: var(--spacing-zero);
  left: var(--spacing-zero);
  width: 100%;
  line-height: 1.5;
`),(e=>e.value?"var(--content-color-primary)":"var(--content-color-tertiary)"),(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),ie=a().div(re||(re=oe`
  white-space: nowrap !important;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 var(--spacing-s);
`));function se(e,t){if(!e)return"";if(null==t||!t.length)return e;const r=(0,X.w1)(e,t);if(null==r||!r.length)return e;const n=[];let o=0,a=0;for(const i of r){if(a++,i.startIndex>o){const t=e.slice(o,i.startIndex);n.push(t)}const r=e.slice(i.startIndex,i.endIndex),s=i.isResolved?"resolved-variable":"un-resolved-variable",l=(0,X.E0)(r,t);n.push((0,u.jsx)(ee.Z,{trigger:(0,u.jsx)(ce,{isResolved:!!i.isResolved,"data-testid":s,spellCheck:!1,children:r},a),value:l})),o=i.endIndex}if(o<e.length){const t=e.slice(o);n.push(t)}return n}function le({placeholderText:e,value:t,onFocus:r,onClick:n,ariaLabel:o,dataTestId:a,isEditable:i=!0}){const{data:s}=(0,Y.useActiveAndDynamicVariables)();return(0,u.jsx)(ae,{onFocus:r,onClick:n,value:t,className:"input-skeleton",tabIndex:0,role:"textbox","aria-label":o,"data-testid":a||"input-skeleton",isEditable:i,children:(0,u.jsx)(ie,{className:"input-wrapper",children:se(t,s)||e})})}const ce=a().span(ne||(ne=oe`
  color: ${0};
  background-color: ${0};
  padding: 2px;
`),(({isResolved:e})=>e?"var(--base-color-brand)":"var(--content-color-error)"),(({isResolved:e})=>e?"transparent":"var(--background-color-error)"));let ue,de,pe=e=>e;const he=(0,n.lazy)((()=>Promise.all([r.e(7669),r.e(1180),r.e(9578),r.e(9205)]).then(r.bind(r,29205)))),ge=null,fe=a().div(ue||(ue=pe`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
`)),ve=a()(g)(de||(de=pe`
  > div.tippy-content {
    padding: 0;
    background-color: var(--background-color-primary);
  }
`));function be({onChange:e,suggestions:t=[],customFilter:r,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l=(()=>{}),className:c="postman-input-wrapper",ariaLabel:d,dataTestId:p,isEditable:h,onHardFocus:g}){const f={suggestions:t,searchTerm:a,customFilter:r},v=(0,n.useRef)(null),[b,x]=(0,n.useState)(!1),[m,y]=(0,n.useState)(ge),{filteredList:w}=G(f),k=(0,n.useRef)((()=>{b||(y(ge),x(!0))})),j=(0,n.useRef)((()=>{x(!1),y(ge)})),C=J({index:m,arraySize:w.length}),S=(0,n.useCallback)((t=>{null==e||e(t),j.current()}),[e,j]),I=(0,n.useCallback)((()=>{if(b&&"number"==typeof C&&w[C]){const e=w[C].value;e&&S(e)}else j.current(),null==o||o()}),[C,b,w,S,o]),F=(0,n.useCallback)((e=>{const t="number"==typeof C;return!(!b||!["ArrowDown","ArrowUp"].includes(e.key))&&(y((t?C:-1)+("ArrowDown"===e.key?1:-1)),!1)}),[C,b,w,S,o]),E=(0,n.useCallback)((t=>{null==e||e(t)}),[e]);return(0,u.jsx)(fe,{ref:v,className:c,children:(0,u.jsx)(ve,{role:"presentation",appendTo:"parent",trigger:(0,u.jsx)(fe,{children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(le,{placeholderText:i,value:a,onFocus:()=>{},ariaLabel:d,isEditable:h,dataTestId:p}),children:(0,u.jsx)(he,{value:a,onChange:e=>{e!==a&&E(e)},onKeyDown:F,onEnter:I,allowEnter:s,placeholder:i,onPaste:l,isEditable:h,autofocus:!0,ariaLabel:d,dataTestId:p,onHardFocus:e=>{g&&(e?k.current():j.current(),null==g||g(e))}})})}),isOpen:b,maxWidth:"none",popperOptions:K,children:(0,u.jsx)(W,{suggestions:w,selectedIndex:C,onSelect:S})})})}function xe({onChange:e,suggestions:t=[],customFilter:r,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l,autofocus:c=!1,className:d="postman-input-wrapper",ariaLabel:p="input",dataTestId:h="input",isEditable:g=!0,onHardFocus:f}){const[v,b]=(0,n.useState)(c);return v?(0,u.jsx)(be,{onChange:e,suggestions:t,customFilter:r,onEnter:o,value:a,placeholder:i,allowEnter:s,onPaste:l,autofocus:c,ariaLabel:p,dataTestId:h,className:d,isEditable:g,onHardFocus:f}):(0,u.jsx)(fe,{className:d,children:(0,u.jsx)(le,{onFocus:()=>{null==f||f(!0),b(!0)},placeholderText:i,value:a,ariaLabel:p,dataTestId:h,isEditable:g})})}function me(){return!0}const ye=["onChange","suggestions","customFilter","onPaste","setIsHardFocused"];let we,ke,je,Ce=e=>e;const Se=null,Ie=a().div(we||(we=Ce`
  display: flex;
  flex: 1;
  width: 100%;
`)),Fe=a()(g)(ke||(ke=Ce`
  > div.tippy-content {
    padding: 0;
    background-color: var(--background-color-primary);
  }
`)),Ee=a().input(je||(je=Ce`
  width: 100%;
  box-sizing: border-box;
  padding: var(--spacing-s);
  color: var(--content-color-primary);
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  &:focus,
  &.is-focused {
    background-color: var(--background-color-primary);
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
  }
`));function ze(e){let{onChange:t,suggestions:r,customFilter:o,onPaste:a,setIsHardFocused:l}=e,c=(0,s.Z)(e,ye);const d={suggestions:r,searchTerm:c.value,customFilter:o},p=(0,n.useRef)(null),h=(0,n.useRef)(null),[g,f]=(0,n.useState)(!1),[v,b]=(0,n.useState)(Se),{filteredList:x}=G(d),m=(0,n.useRef)((()=>{b(Se),f(!0)})),y=(0,n.useRef)((()=>{f(!1),b(Se)})),w=J({index:v,arraySize:x.length}),k=e=>{null==t||t(e),y.current()};return(0,u.jsx)(Ie,{ref:p,children:(0,u.jsx)(Fe,{role:"presentation",appendTo:"parent",trigger:(0,u.jsx)(Ee,(0,i.Z)({"aria-label":"URL Input"},c,{ref:h,type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list","aria-expanded":g,onChange:e=>{m.current(),null==t||t(e.target.value)},onKeyDown:e=>{const t="number"==typeof w;if(g&&["ArrowDown","ArrowUp"].includes(e.key))return e.preventDefault(),void b((t?w:-1)+("ArrowDown"===e.key?1:-1));if(g&&t&&x[w]&&"Enter"===e.key){e.preventDefault();const t=x[w].value;t&&k(t)}else"Enter"!==e.key||y.current()},onPaste:a,onClick:()=>null==l?void 0:l(!0),onBlur:()=>{null==l||l(!1)},autoFocus:!0})),isOpen:g,maxWidth:"none",onClickOutside:y.current,popperOptions:K,children:(0,u.jsx)(W,{suggestions:x,selectedIndex:w,onSelect:k})})})}var Ze=r(69705);const Re="&",Te="=",Le="#",Ne=/#/g,Ae=/=/g,Pe=/&/g,Oe=/{{[^{}]*[&#=][^{}]*}}/g;function qe(e,t){if(!e||"string"!=typeof e)return e;let r,n,o,a="",i=0;for(;null!==(n=Oe.exec(e));)r=n[0],o=n.index,a+=$e(e.slice(i,o),t)+r,i=o+r.length;return i<e.length&&(a+=$e(e.slice(i),t)),a}function $e(e,t){return e?(null!==e.includes(Re)&&(e=e.replace(Pe,"%26")),null!==e.includes(Le)&&(e=e.replace(Ne,"%23")),t&&null!==e.includes(Te)&&(e=e.replace(Ae,"%3D")),e):e}const De={unparseSingle(e){if(!e)return"";const t=e.key,r=e.value;let n="";return"string"==typeof t&&(n=qe(t,!0)),"string"==typeof r&&(n+=Te+qe(r)),n},parseSingle:function(e){if(""===e)return{key:null,value:null};const t="string"==typeof e?e.indexOf(Te):-1,r={};return t<0?(r.key=e,r.value=null):(r.key=e.slice(0,t),r.value=e.slice(t+1)),r}},Ue=".",Ve=":";class Me{constructor(e){this.url=void 0,this.url=e}toString(){let e="";if(this.url.query){const t=this.getQueryString();"string"==typeof t&&(e+=t)}return e}getQueryString(){return We.unparse(this.url.query)}}function He(e){const t=Ze.parse(e),r={},n=new Map;t.auth&&(r.auth={user:t.auth[0],password:t.auth[1]}),t.query&&(r.query=t.query.map((e=>De.parseSingle(e))));const o=(t.path||[]).reduce(((e,t)=>{const r=function(e){if(String(e).startsWith(Ve)){const t=e.indexOf(Ue);return e.slice(1,-1===t?void 0:t)||null}return null}(t);return r&&!n.get(r)&&(n.set(r,!0),e.push({key:r})),e}),[]);return r.variable=o.length>0?o:void 0,(0,i.Z)({},t,r)}const We={unparse(e){if(!e)return"";let t=!0;return e.reduce((function(e,r){return!1===r.enabled?e:(t?t=!1:e+=Re,e+De.unparseSingle(r))}),"")}};function Ke(e){return!(!1===(null==e?void 0:e.enabled))}function Be(e){const t=e.filter((e=>e.enabled));return new Me({query:t}).toString()}function Qe(e,t){return r=t,function(e,t){const r=[...e||[]],n=[...t||[]],o=n.filter((e=>!1===e.enabled)),a=[];if(0===e.length&&0===o.length)return e.map((e=>Object.assign({},e,{description:"",enabled:Ke(e)})));if(e.length>=n.length){for(const t of e){const e=n.findIndex((e=>(e.key||"")===(t.key||"")&&!e.alreadyProcessed));var i;-1==e?a.push(Object.assign({},t,{description:"",enabled:Ke(t)})):(n[e].alreadyProcessed=!0,a.push(Object.assign({},t,{description:(null==n||null==(i=n.withDescIndex)?void 0:i.description)||"",enabled:Ke(t)})))}return[...a,...n.filter((e=>!1===e.enabled&&!e.alreadyProcessed))]}for(const e of n){const t=r.findIndex((t=>(t.key||"")===(e.key||"")&&(t.value||"")===(e.value||"")&&!t.alreadyProcessed));var s,l,c,u;-1!=t?(r[t].alreadyProcessed=!0,a.push(Object.assign({},{key:null==(s=r[t])?void 0:s.key,value:null==(l=r[t])?void 0:l.value,enabled:null==(c=r[t])?void 0:c.enabled,equals:null==(u=r[t])?void 0:u.equals},{description:(null==e?void 0:e.description)||"",enabled:Ke(r[t])}))):!1===e.enabled&&a.push(e)}return[...a,...r.filter((e=>!e.alreadyProcessed))]}(function(e){return e?(He(e).query||[]).map((e=>(e.equals=!!e.value,e))):[]}(e),r);var r}function Ge(e,t){const r=function(e){return e?(He(e).variable||[]).map((e=>e.key)):[]}(e);return r.map((e=>{const r=function(e,t){return t.find((t=>t.key===e))}(e,t);return r?(0,i.Z)({},r,{key:e}):{key:e,value:null}}))}function _e({onChange:e,value:t}){return(0,u.jsx)("input",{"aria-label":"URL Input",type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list",onChange:t=>{null==e||e(t.target.value)},autoFocus:!0,value:t})}let Je;const Xe=a()(xe)(Je||(Je=(e=>e)`
  width: 100%;
  height: 100%;

  .content-editable {
    min-height: 38px;
    ${0}
    border: var(--border-width-default) var(--border-style-solid);
    border-color: ${0};
    border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
    border-left: none;

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }

  .input-skeleton {
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
    border-left: none;
  }
`),(({isHardFocused:e})=>e?"box-shadow: 0 0 0 3px\n              var(--request-url-highlight-border-color);":""),(({isHardFocused:e})=>e?"transparent;":"var(--border-color-default);"));function Ye(e){const[t,r]=(0,n.useState)(!1);return(0,u.jsx)(Xe,(0,i.Z)({},e,{ariaLabel:"request-url",className:"request-url",onHardFocus:r,isHardFocused:t}))}function et({onChange:e,onFocus:t,value:r,ariaLabel:n,onBlur:o,actions:a,indicators:i}){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("textarea",{"aria-label":n,role:"cell",onChange:t=>{null==e||e(t.target.value)},value:r,onFocus:()=>null==t?void 0:t(),onBlur:()=>null==o?void 0:o()}),i,a]})}let tt;const rt=a()(xe)(tt||(tt=(e=>e)`
  width: 100%;
  height: 100%;

  .content-editable {
    min-height: 32px;

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }
`));function nt(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(rt,(0,i.Z)({},e,{className:"kv-editor"})),e.indicators,e.actions]})}let ot,at,it=e=>e;const st=a()(xe)(ot||(ot=it`
  width: 100%;
  height: 100%;

  .content-editable {
    /* min height of content editable is (total height - 2 * border width) as contenteditable
     * element is positioned absolutely
     */
    min-height: 28px;
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: var(--border-radius-default);

    :not(:focus) .editor-paragraph {
      padding: 0 var(--spacing-s);
    }
  }

  .input-skeleton {
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-radius: var(--border-radius-default);
  }

  .placeholder {
    border-left: var(--border-width-default) var(--border-style-solid)
      transparent;
  }
`)),lt=a().div(at||(at=it`
  height: 30px;
`));function ct(e){return(0,u.jsx)(lt,{children:(0,u.jsx)(st,(0,i.Z)({},e,{className:"auth-editor"}))})}function ut({onChange:e,value:t,placeholder:r,ariaLabel:n}){return(0,u.jsx)("input",{type:"text",onChange:t=>{null==e||e(t.target.value)},placeholder:r,value:t,"aria-label":n})}},98366:(e,t,r)=>{function n(e,t){return null!==i(e,t)}function o(e){const t=l(e);return 1===t.length&&t[0].name===e}function a(e,t){return!(!o(e)||t&&n(e,t))}function i(e,t){const r=l(e);if(1!==r.length||r[0].name!==e)return null;const n=r[0].name.slice(2,-2);let o=null;for(let e=t.length-1;e>=0;e--){const r=t[e];if(r.key===n&&!r.overriddenBy){o=r;break}}return o}function s(e,t){if(!e)return[];const r=l(e),o=[];for(const e of r){const r=e.name,a=n(r,t);o.push({startIndex:e.lastIndex-r.length,endIndex:e.lastIndex,isResolved:a})}return o}function l(e){let t=[],r=0,n=!1,o=!1,a=!1;const i=[],s=[];for(let l=1;l<e.length;l++)n?(t.push(e.charAt(l)),"{"!==e.charAt(l)&&o&&(o=!1),"}"!==e.charAt(l)&&a&&(a=!1),"}"===e.charAt(l)?a?(0===s.pop()&&(n=!1,i.push({name:t.join(""),lastIndex:l+1}),t=[],r=0),a=!1):a=!0:"{"===e.charAt(l)&&(o?(s.push(r++),o=!1):o=!0)):"{"===e.charAt(l)&&"{"===e.charAt(l-1)&&(t.push(e.charAt(l),e.charAt(l-1)),n=!0,s.push(r++));return i}function c(e){return"string"==typeof e?e:e?"function"==typeof e.toString?String(e):Object.prototype.toString.call(e):""}function u(e){return e?(e=e.toLowerCase().trim()).charAt(0).toUpperCase()+e.slice(1):e}function d(e){return e?(e.endsWith("s")&&e.length>1&&(e=e.slice(0,-1)),e):e}r.d(t,{C5:()=>d,CS:()=>a,E0:()=>i,Fn:()=>c,KN:()=>u,Q0:()=>n,rn:()=>l,w1:()=>s,yG:()=>o})}}]);
//# sourceMappingURL=2643.22bad0796395de14.js.map