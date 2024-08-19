"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[7067],{67067:(e,n,t)=>{t.r(n),t.d(n,{FileUploader:()=>Ne,KeyValueEditor:()=>wt});var l=t(7560),i=t(40540),o=t.n(i),r=t(59530),a=t.n(r),s=t(78476),d=t(50297),c=t(98283),u=t(74269),h=t(69356),p=t.n(h),b=t(22833),g=t.n(b),v=t(80519),f=t(52322);let m,x,y=e=>e;const C=a().div(m||(m=y`
  position: relative;
  display: flex;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  width: 40px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4px;
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
`),(e=>e.disabled?"var(--background-color-secondary);":"inherit")),w=a()(v.Z)(x||(x=y`
  > span > div {
    height: 16px;
    width: 16px;
    background-color: ${0};
  }

  &.disabled {
    opacity: 0.4;
  }
`),(e=>e.isChecked?"dark"===e.theme.name?"#ffffff":"#262626":"inherit"));function k(e){return(0,f.jsx)(C,{disabled:e.disabled,children:e.shouldShowCheckbox&&(0,f.jsx)(w,{className:g()({disabled:e.isCheckboxDisabled}),isChecked:e.isRowEnabled,onChange:e.onToggleEnabledState,isDisabled:e.isCheckboxDisabled})})}const j=["content"];let V;const E=a().div(V||(V=(e=>e)`
  display: flex;
  flex: ${0};
  overflow-y: visible;
  min-width: 0;

  /* Commenting this out as it is clipping the rendering of aether dropdown in the variable-type column. */

  /* overflow-x: clip; */
  margin: var(--spacing-zero);
  position: relative;
  height: 32px;
  box-sizing: border-box;
  border-right: ${0};
  background-color: ${0};

  .key-value-cell {
    color: ${0};
  }
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(({isLastColumn:e})=>e?"unset":"var(--border-width-default) var(--border-style-solid)\n    var(--border-color-default)"),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit"),(e=>e.isNonEditable?"var(--content-color-secondary)":"inherit"));function S(e){let{content:n}=e,t=(0,c.Z)(e,j);return(0,f.jsx)(E,(0,l.Z)({},t,{children:n}))}const T=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"";function D(e,n){if(typeof e!=typeof n)return!1;const t=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===n:Array.isArray(e)&&Array.isArray(n)?e.length===n.length&&e.every(((e,t)=>D(e,n[t]))):"object"===t&&(null===e&&null===n||null!==e&&null!==n&&!Array.isArray(e)&&!Array.isArray(n)&&Object.keys(e).length===Object.keys(n).length&&Object.keys(e).every((t=>D(e[t],n[t]))))}var R=t(207),Z=o().createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{d:"M4 1V0H8V1H11V2H1V1H4Z",fill:"#6B6B6B"}),o().createElement("path",{d:"M3 10.5V3H2V10.5C2 11.3284 2.67157 12 3.5 12H8.5C9.32843 12 10 11.3284 10 10.5V3H9V10.5C9 10.7761 8.77614 11 8.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z",fill:"#6B6B6B"}),o().createElement("path",{d:"M4.25 10V3H5.25V10H4.25Z",fill:"#6B6B6B"}),o().createElement("path",{d:"M6.75 3V10H7.75V3H6.75Z",fill:"#6B6B6B"})),M=o().forwardRef((function(e,n){return o().createElement(R.Z,(0,l.Z)({},e,{svg:Z,ref:n}))}));M.getName=function(){return"icon-action-delete-stroke-small"};const A=M;let W;const O=a().div(W||(W=(e=>e)`
  align-items: center;
  height: 24px;
  display: inline-flex;
  padding: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--highlight-background-color-primary);
    cursor: pointer;
  }
`));function P({onClick:e}){return(0,f.jsx)(O,{className:"delete-button",onClick:e,role:"button","aria-label":"delete-row",children:(0,f.jsx)(A,{})})}function F(e,n,t){let l,i,o,r,a,s,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(n=+n||0,t&&function(e){const n=typeof e;return null!=e&&("object"===n||"function"===n)}(t)){if(c=!(null==t||!t.leading),u="maxWait"in t,u){const e=(null==t?void 0:t.maxWait)||0;o=Math.max(+e,n)}h="trailing"in t?!(null==t||!t.trailing):h}function p(n){const t=l,o=i;return l=i=void 0,d=n,r=e.apply(o,t),r}function b(e,n){return setTimeout(e,n)}function g(e){const t=e-s;return void 0===s||t>=n||t<0||u&&e-d>=o}function v(){const e=Date.now();if(g(e))return f(e);a=b(v,function(e){const t=e-d,l=n-(e-s);return u?Math.min(l,o-t):l}(e))}function f(e){return a=void 0,h&&l?p(e):(l=i=void 0,r)}function m(...e){const t=Date.now(),o=g(t);if(l=e,i=this,s=t,o){if(void 0===a)return function(e){return d=e,a=b(v,n),c?p(e):r}(s);if(u)return a=b(v,n),p(s)}return void 0===a&&(a=b(v,n)),r}return m.cancel=function(){void 0!==a&&clearTimeout(a),d=0,l=s=i=a=void 0},m.flush=function(){return void 0===a?r:f(Date.now())},m.pending=function(){return void 0!==a},m}const z=["indicators","isDuplicated"];let B,N,$=e=>e;const H=a().textarea(B||(B=$`
  width: 100%;
  color: var(--content-color-primary);
  font-size: inherit;
  font-family: inherit;
  outline: transparent;
  resize: none;
  font-weight: inherit;
  background: var(--background-color-primary);
  margin: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-zero) var(--spacing-xs)
    var(--spacing-xs);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  z-index: 1;

  ${0}
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-l)")),L=a().div(N||(N=$`
  display: flex;
  align-items: flex-start;
  max-height: var(--size-m);
  height: 100%;
  width: 100%;
`)),I=F(((e,n,t)=>{var l,i;const o=null!=(l=(null==e?void 0:e.scrollHeight)/(null==e||null==(i=e.parentNode)?void 0:i.clientHeight))?l:0;o!==n&&t(Math.ceil(o))}),100);function K(e){let{indicators:n,isDuplicated:t}=e,l=(0,c.Z)(e,z);const o=(0,i.useRef)(null),[r,a]=(0,i.useState)(1);return(0,i.useEffect)((()=>(setTimeout((()=>{if(o.current){const e=o.current.value.length;o.current.selectionStart=e,o.current.selectionEnd=e,o.current.scrollTop=o.current.scrollHeight}})),I(o.current,r,a),()=>{I.cancel()})),[r]),(0,f.jsxs)(L,{children:[(0,f.jsx)(H,{isDuplicated:t,role:"cell","aria-label":`${l.type} input`,ref:o,value:l.value,rows:r,onChange:e=>{l.onChange(e.target.value),I(o.current,r,a)},autoFocus:l.shouldFocusOnMount,placeholder:l.placeholder||"",readOnly:l.readOnly,onBlur:l.onBlur,onKeyDown:e=>{l.preventEnter&&13===e.keyCode&&e.preventDefault()}}),n]})}let _,U,X=e=>e;function Y(e){return"string"==typeof e?e:e?e&&e.toString?String(e):Object.prototype.toString.call(e):""}function q(e,n={}){return e?("string"!=typeof e&&(e=Y(e)),e.split("\n").map(((e,t)=>(0,f.jsx)("span",{children:J(e,n)},t)))):e}function G(e,n={}){return e?("string"!=typeof e&&(e=Y(e)),J(e.split("\n")[0],n)):e}function J(e,n={}){const t=n.maxLength||100;return e?("string"!=typeof e&&(e=Y(e)),e.length<=t?e:e.slice(0,t+1)):""}const Q=a().div(_||(_=X`
  width: 100%;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  padding: var(--spacing-zero) var(--spacing-xs) var(--spacing-zero) 9px;
  align-items: center;
  cursor: text;
  font-size: var(--text-size-m);
  user-select: none;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  color: var(--content-color-primary);
  ${0}
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-xl)")),ee=a().div(U||(U=X`
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    color: var(--content-color-tertiary);
  }
`));function ne(e){const n=(0,i.useRef)(null),{value:t,placeholder:l,onBlur:o,preventEnter:r,onFocus:a,type:s,currentWidth:d,actions:c,indicators:u,isDuplicated:h}=e,p=!r,b=(0,i.useCallback)((()=>{null==a||a()}),[a]),g=!t&&l,v=g?`${s} empty cell`:`${s} cell`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Q,{onBlur:o,onClick:b,ref:n,tabIndex:"0",onFocus:b,isDuplicated:h,children:(0,f.jsx)(ee,{role:"cell","aria-label":v,"data-placeholder":g?l:null,children:p?G(t,{maxLength:Math.ceil(2*d)}):q(t,{maxLength:Math.ceil(2*d)})})}),u,c]})}Q.displayName="KeyValueCellContainer";const te=[{value:"text",label:"Text"},{value:"file",label:"File"}],le="secret",ie="default";let oe;const re=a().div(oe||(oe=(e=>e)`
  padding-inline-start: var(--spacing-xs);
  display: flex;
  flex: 1;

  input {
    border: var(--border-width-default) var(--border-style-solid) transparent;
    color: var(--content-color-primary);
    width: 100%;
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);
    font-family: var(--text-family-default);
    height: var(--controls-size-default);
    box-sizing: border-box;
    background-color: transparent;
    padding: var(--spacing-zero);
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    padding-left: var(--spacing-xs);

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }

    ${0};
  }
`),(({isFocused:e})=>e&&"\n        border: var(--border-width-default) var(--border-style-solid) var(--border-color-default);\n        background: var(--background-color-primary);\n        height: var(--size-s);\n        padding-left: var(--spacing-xs);\n        margin-top: var(--spacing-xs);\n        margin-right: var(--spacing-s);\n    "));function ae(e){const{value:n,isEditable:t,onBlur:l,onChange:i,onFocus:o,type:r}=e,a=`${r} masked cell`;return(0,f.jsx)(re,{isFocused:Boolean(t),onBlur:l,onClick:o,onFocus:o,children:(0,f.jsx)("input",{role:"cell","aria-label":a,value:n||"",spellCheck:!1,type:"password",onChange:e=>{i(e.currentTarget.value)}},"text")})}var se=t(16913),de=t(81397),ce=t(88131);const ue=["hidden","value","isEditable","currentWidth","readOnly","shouldFocusOnMount","onBlur","onChange","onFocus","actions","editorType","maskState","enableVariableSuggestions","placeholder","isDuplicated"];let he;const pe=a()(se.Z)(he||(he=(e=>e)`
  position: absolute;
  align-self: center;
  right: var(--spacing-s);
  z-index: 10;
`));function be(e){const{hidden:n,value:t,isEditable:i,currentWidth:o,readOnly:r,shouldFocusOnMount:a,onBlur:s,onChange:d,onFocus:u,actions:h,editorType:p,maskState:b,enableVariableSuggestions:g,placeholder:v,isDuplicated:m}=e,x=(0,c.Z)(e,ue),y={readOnly:r,shouldFocusOnMount:a,onBlur:s,onChange:d},C=e=>{null==d||d(x.type,e)},w=(0,ce.usePostmanInputFeatureFlag)();if(n)return null;if(g&&w){let n=!t&&v?`${x.type} empty cell`:`${x.type} cell`;return i&&(n=`${x.type} input`),(0,f.jsx)(ce.KVEditorInput,{value:t||"",onChange:C,suggestions:[],placeholder:"key"===x.type?"Key":"Value",ariaLabel:n,onFocus:u,onBlur:s,shouldFocusOnMount:a,actions:h,indicators:e.indicators,isEditable:!y.readOnly})}return p===le&&b.isMasked?(0,f.jsx)(ae,(0,l.Z)({onChange:C,onFocus:u,onBlur:s,isEditable:i,value:t,placeholder:v},x)):(0,f.jsxs)(f.Fragment,{children:[i?(0,f.jsx)(K,(0,l.Z)({},y,{onChange:C,onFocus:u,value:t,placeholder:v,isDuplicated:m},x)):(0,f.jsx)(ne,(0,l.Z)({},x,{value:t,onFocus:u,actions:h,onChange:C,placeholder:v,currentWidth:o,isDuplicated:m})),m&&(0,f.jsx)(de.Z,{content:"This variable has been overwritten by a duplicate key.",placement:"bottom",children:(0,f.jsx)(pe,{color:"content-color-warning",className:"duplicate-warning-icon"})})]})}var ge=t(74962),ve=t(63622),fe=t(84591);let me;const xe=a().div(me||(me=(e=>e)`
  position: absolute;
  right: var(--spacing-m);
  display: flex;
  height: 100%;
  align-items: center;
  cursor: default;
  z-index: 1;
  background: transparent !important;
`)),ye=({infoTitle:e,info:n})=>(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(ge.Z,{type:"h3",styleAs:"h4",text:e}),n&&(0,f.jsx)(ve.ZP,{type:"small",color:"content-color-primary",children:n})]}),Ce=e=>{const{info:n,infoTitle:t,placement:i}=e;return n||t?(0,f.jsx)(xe,{children:(0,f.jsx)(de.Z,{content:(0,f.jsx)(ye,(0,l.Z)({},e)),placement:i,children:(0,f.jsx)(fe.Z,{})})}):null};let we;const ke=a()(u.Z)(we||(we=(e=>e)`
  margin: var(--spacing-xs);
  min-width: 80px;
`));function je(e){const{hidden:n,options:t,defaultOption:l,onChange:o}=e,[r,a]=(0,i.useState)(l),[s,d]=(0,i.useState)(!1);return!s&&n?null:(0,f.jsx)(ke,{viaPortal:!0,className:"single-type-select","aria-label":"KV Type Select",triggerWidth:"auto",triggerSize:"small",triggerType:"tertiary",menuMinWidth:100,menuMaxWidth:165,isSearchable:!1,isClearable:!1,options:t,value:r,onOpen:()=>d(!0),onClose:()=>d(!1),onChange:e=>{a(e),null==o||o(e)}})}var Ve=t(58560),Ee=t(25637),Se=t(5701),Te=t(35736);const De=["value","onReset","id","label","name","multiple","isDisabled","loading","error","accept","autoFocus","onChange"];let Re,Ze,Me,Ae,We=e=>e;const Oe="Couldn't upload file",Pe=a().input.attrs({type:"file"})(Re||(Re=We`
  opacity: 0;
  height: 0;
  width: 0;
  z-index: -1;

  &:focus + label {
    box-shadow: var(--shadow-focus);
    outline: none;
  }
`)),Fe=a().label(Ze||(Ze=We`
  display: flex;
  gap: var(--spacing-s);
  user-select: none;
  color: ${0};
  font-size: var(--text-size-m);
  width: max-content;

  /* Height has been modified to match Chip component height */
  height: var(--size-s);
  line-height: 1.8;
  vertical-align: middle;
  padding: var(--spacing-zero) var(--spacing-m);
  border: var(--button-outline-border);
  border-color: var(--button-outline-border-color);
  box-sizing: border-box;
  border-radius: var(--border-radius-default);

  &:hover {
    cursor: ${0};
    ${0};
  }
`),(e=>e.isDisabled?"var(--content-color-tertiary)":"var(--content-color-primary)"),(e=>e.isDisabled?"not-allowed":"pointer"),(e=>!e.isDisabled&&"border-color: var(--button-outline-hover-border-color)")),ze=a()(Ve.Z)(Me||(Me=We`
  max-width: 100%;
`)),Be=a().div(Ae||(Ae=We`
  width: 100%;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`));function Ne(e){return(0,f.jsx)(Ee.VW,{children:(0,f.jsx)($e,(0,l.Z)({},e))})}function $e(e){const{value:n,onReset:t,id:o,label:r,name:a,multiple:s,isDisabled:d,loading:u,error:h,accept:p,autoFocus:b,onChange:g}=e,v=(0,c.Z)(e,De),{addToast:m}=(0,Ee.ZP)();let x;if((0,i.useEffect)((()=>{h&&m({status:"error",title:Oe,description:h})}),[h,m]),null!=n&&n.length){const e=n.length,l=n[0],i=n.join(", "),o=e>1?`${e} files selected`:`${l}`;x=(0,f.jsx)(de.Z,{content:i,children:(0,f.jsx)(Be,{children:(0,f.jsx)(Se.Af,{label:o,onClick:t})})})}else x=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Pe,(0,l.Z)({},v,{id:o,onChange:e=>{const n=e.target,t=n&&n.files;!d&&t&&(null==g||g(t))},multiple:s,disabled:d,accept:p,name:a,autoFocus:b,onClick:e=>{e.currentTarget.value=""}})),(0,f.jsxs)(Fe,{htmlFor:o,isDisabled:d,children:[u&&(0,f.jsx)(Te.Z,{size:"small"}),(0,f.jsx)("span",{children:r})]})]});return(0,f.jsx)(ze,{direction:"column",alignItems:"center",children:x})}const He=()=>{const e=(0,i.useRef)(!0);return(0,i.useEffect)((()=>()=>{e.current=!1}),[]),e};let Le;const Ie="Select Files",Ke=a()(Ve.Z)(Le||(Le=(e=>e)`
  padding: var(--spacing-xs);
`));function _e(e){const{id:n,type:t,value:l,hidden:o,error:r,onFilesSelect:a,onChange:s}=e,[d,c]=(0,i.useState)(!1),u=He(),h=(0,i.useMemo)((()=>Array.isArray(l)?l:l?[l]:[]),[l]);return o?null:(0,f.jsx)(Ke,{height:"100%",width:"100%",children:(0,f.jsx)(Ne,{label:Ie,id:"key-value-file-uploader",multiple:!0,error:r,value:h,loading:d,onChange:e=>{a&&(c(!0),a(n,e).finally((()=>{u.current&&c(!1)})))},onReset:()=>null==s?void 0:s(t,"")})})}const Ue=e=>e.disableEdit,Xe=(e,n)=>n||e.system&&!e.allowedToToggle,Ye=(e,n)=>!e.disableEdit&&!(null!=n&&n.disableToggle)||e.system;var qe=t(95362),Ge=t(70262);let Je;const Qe=a().div(Je||(Je=(e=>e)`
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);
  opacity: ${0};

  &:hover {
    cursor: pointer;
  }
`),(({alwaysPresent:e})=>e?"1":"0"));function en({onClick:e,maskState:n,isVisible:t}){const l=!1===n.isMasked;return(0,f.jsx)(Qe,{role:"button",className:"toggle-mask","aria-label":"toggle-mask-row",onClick:e,alwaysPresent:l||t,children:n.isMasked?(0,f.jsx)(qe.Z,{}):(0,f.jsx)(Ge.Z,{})})}var nn=t(64691),tn=t(48263),ln=t(80605),on=t(59824),rn=t(17282),an=t(29225);const sn=e=>{const{onPersist:n,onReset:t,disableVariablePersistAction:l,disablePersistActionTooltip:i,disableResetActionTooltip:o,disableVariableResetAction:r}=e,a=(e=!1,n)=>{if(e){let e;switch(n){case"persist":e=i;break;case"reset":e=o}return e||"You do not have permissions to perform this action."}return null};return(0,f.jsxs)(nn.Z,{children:[(0,f.jsx)(tn.Z,{children:(0,f.jsx)(ln.Z,{icon:(0,f.jsx)(an.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions",size:"small","data-testid":"more-options-button"})}),(0,f.jsxs)(on.Z,{placement:"bottom-end",children:[(0,f.jsx)(rn.Z,{onClick:n,isDisabled:l,tooltip:a(l,"persist"),children:"Persist"}),(0,f.jsx)(rn.Z,{onClick:t,isDisabled:r,tooltip:a(r,"reset"),children:"Reset"})]})]})};let dn;const cn=a().div(dn||(dn=(e=>e)`
  display: flex;
  flex-direction: row;
  opacity: ${0};
  margin-right: var(--spacing-xs);
`),(({isVisible:e})=>e?"1":"0")),un=({isHidden:e=!1,children:n,isVisible:t})=>e||!n?null:(0,f.jsx)(cn,{isVisible:t,children:n});var hn=t(26246);const pn=["warning"],bn=["prevValue","prevCurrentWidth"],gn=["nextValue","nextCurrentWidth"];let vn,fn,mn,xn,yn=e=>e;const Cn=a().div(vn||(vn=yn`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 0;
  height: 32px;
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
  color: ${0};
`),(e=>e.isRowFocused?"var(--background-color-secondary) !important":e.isRowSelected||e.disabled?"var(--background-color-secondary)":"inherit"),(e=>e.disabled?"var(--content-color-tertiary)":"inherit")),wn=a().div(fn||(fn=yn`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: row;
  color: ${0};
`),(e=>e.isBlocked?"var(--content-color-tertiary)":"inherit")),kn=a().div(mn||(mn=yn`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),jn=a()(u.Z)(xn||(xn=yn`
  /* Overriding the styles of Aether dropdown control element. */
  .aether-dropdown__control,
  .aether-dropdown__control--is-focused:hover {
    border: none;
    width: 100%;
    box-shadow: none;
    background-color: unset !important;
  }
`)),Vn=new Map;Vn.set("default",{value:ie,label:"default"}),Vn.set("secret",{value:le,label:"secret"});const En=[Vn.get("default"),Vn.get("secret")];function Sn(e){const{index:n,value:t,onChange:o,onRemove:r,currentWidth:a,showColumns:s,allowedColumns:d,enableFiles:u,onFilesSelect:h,maskState:p,toggleMaskValue:b,isLastRow:g,onPersist:v,onReset:m,onBlur:x,enableVariableSuggestions:y,optionsDropdownValues:C,isDuplicated:w}=e,j=(0,i.useRef)(o);j.current=o;let{key:V,value:E,sessionValue:D="",options:R,type:Z,enabled:M=!0,description:A="",fileUploadError:W}=t;const O=Z===le?le:ie,F=s.includes("variableType")?O:Z||"text",[z,B]=(0,i.useState)(null),[N,$]=(0,i.useState)(null),H=null!==z,L=(0,i.useMemo)((()=>{var e;return null!=(e=te.find((e=>e.value===t.type)))?e:te[0]}),[t.type]),I=(0,i.useCallback)(((e,n)=>{"sessionValue"===e&&void 0!==n&&t.isSessionValueDeleted&&(null==j.current||j.current((0,l.Z)({},t,{[e]:n,isSessionValueDeleted:!1}))),null==j.current||j.current((0,l.Z)({},t,{[e]:n}))}),[t]),K=(0,i.useCallback)((e=>{(0,c.Z)(t,pn),I("enabled",e)}),[t,I]),_=(0,i.useCallback)((()=>{r&&r()}),[r]),U=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]);function X(e){return Number(a[null==s?void 0:s.indexOf(e)])}return(0,f.jsxs)(Cn,{role:"row","aria-rowindex":n,disabled:Ue(t),isRowSelected:e.isRowSelected,isRowFocused:null!==z,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:[(0,f.jsx)(k,{disabled:e.disableSorting&&e.nonEditableToggles,shouldShowCheckbox:Ye(t,e),isRowEnabled:M,onToggleEnabledState:K,isCheckboxDisabled:Xe(t,e.nonEditableToggles)}),(0,f.jsxs)(wn,{isBlocked:t.disableEdit,children:[(0,f.jsx)(S,{columnWidth:X("key"),isNonEditable:U("key"),isLastColumn:s&&"key"===s[s.length-1],content:(0,f.jsx)(be,{type:"key",value:V,currentWidth:X("key"),onFocus:()=>B("key"),onChange:I,isEditable:"key"===z,placeholder:e.keyPlaceholder,preventEnter:e.disableMultilineKey||!1,readOnly:t.disableEdit||e.nonEditableKeys,shouldFocusOnMount:!0,onBlur:()=>B(null),isDuplicated:w,actions:(0,f.jsx)(je,{hidden:!N||!u,options:te,defaultOption:L,onChange:e=>I("type",e.value)}),indicators:(0,f.jsx)(Ce,{infoTitle:t.infoTitle,info:t.info,placement:"right"}),enableVariableSuggestions:y})}),s.includes("variableType")&&(0,f.jsx)(S,{columnWidth:X("variableType"),isNonEditable:U("variableType"),isLastColumn:s&&"variableType"===s[s.length-1],content:(!g||e.nonEditableVariableTypes)&&(0,f.jsx)(jn,{isRowFocused:H,tabIndex:-1,isDisabled:e.nonEditableVariableTypes,onChange:async t=>{const{disableAllVariablesSync:l=!1,disableSecretVariablesSync:i}=e;if(Z===t.value)return;if(l||!i&&t.value===le||i&&t.value===le&&!E)return I("type",t.value),void(b&&b(n));const o=hn.Modals.getModals(),r=await o.showWarningDialog({uid:"kv-editor-variable-type-change-confirmation",subject:`Change ${V}'s type to ${t.value}?`,message:"This will reveal the hidden values in plain text everywhere in the app for all team members",options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Change type",isPrimary:!0}]});return r&&"Change type"===r.title?(I("type",t.value),void(b&&b(n))):void 0},options:En,value:Vn.get(F),isClearable:!1,isSearchable:!1,menuWidth:100})}),s.includes("value")&&(0,f.jsx)(S,{columnWidth:X("value"),isNonEditable:U("value"),isLastColumn:s&&"value"===s[s.length-1],content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(be,{hidden:"file"===Z,type:"value",value:E,currentWidth:X("value"),onFocus:()=>B("value"),onChange:I,isEditable:"value"===z,placeholder:e.valuePlaceholder,preventEnter:e.disableMultilineValue||!1,readOnly:t.disableEdit||e.nonEditableValues,shouldFocusOnMount:!0,onBlur:()=>("value",B(null),void(x&&x("value",t))),editorType:Z,maskState:p,enableVariableSuggestions:y}),(0,f.jsx)(_e,{hidden:"file"!==Z,id:n,type:"value",value:E,error:W,onChange:I,onFilesSelect:h})]})}),s.includes("description")&&(0,f.jsx)(S,{columnWidth:X("description"),isNonEditable:U("description"),isLastColumn:s&&"description"===s[s.length-1],content:(0,f.jsx)(be,{type:"description",value:A,onChange:I,placeholder:e.descriptionPlaceholder,isEditable:"description"===z,currentWidth:X("description"),onFocus:()=>B("description"),readOnly:t.disableEdit||e.nonEditableDescriptions,shouldFocusOnMount:!0,onBlur:()=>B(null)})}),s.includes("sessionValue")&&(0,f.jsx)(S,{columnWidth:X("sessionValue"),isNonEditable:U("sessionValue"),isLastColumn:s&&"sessionValue"===s[s.length-1],content:(0,f.jsx)(be,{type:"sessionValue",value:D,onChange:I,isEditable:"sessionValue"===z,placeholder:t.isSessionValueDeleted?"[Deleted]":e.sessionValuePlaceholder,preventEnter:e.disableMultilineValue||!1,currentWidth:X("sessionValue"),onFocus:()=>B("sessionValue"),readOnly:t.disableEdit||e.nonEditableSessionValue,shouldFocusOnMount:!0,onBlur:()=>B(null),editorType:Z,maskState:p,enableVariableSuggestions:y})}),s.includes("options")&&(0,f.jsx)(S,{columnWidth:X("options"),isNonEditable:U("options"),isLastColumn:s&&"options"===s[s.length-1],content:(0,f.jsx)(jn,{isRowFocused:H,tabIndex:-1,onChange:e=>I("options",e),options:C,value:R,isClearable:!1,isSearchable:!1,menuWidth:100})}),(0,f.jsx)(kn,{children:((null==s?void 0:s.includes("value"))||(null==s?void 0:s.includes("description"))||(null==s?void 0:s.includes("sessionValue")))&&!e.isRowSelected&&!e.value.disableEdit&&(0,f.jsxs)(f.Fragment,{children:[F===le&&(0,f.jsx)(en,{isVisible:N,maskState:p,onClick:()=>b(n)}),(0,f.jsxs)(un,{isHidden:H,isVisible:N,children:[!e.disableDelete&&(0,f.jsx)(P,{onClick:_}),!e.disableVariableRowDropdown&&d.includes("sessionValue")&&(0,f.jsx)(sn,{onPersist:v,onReset:m,disableVariablePersistAction:e.disableVariablePersistAction||e.disableSecretVariablesSync&&F===le,disablePersistActionTooltip:e.disablePersistActionTooltip,disableVariableResetAction:e.disableVariableResetAction||e.disableSecretVariablesSync&&F===le,disableResetActionTooltip:e.disableResetActionTooltip})]})]})})]})]})}const Tn=(0,i.memo)(Sn,((e,n)=>{const{prevValue:t,prevCurrentWidth:l}=e,i=(0,c.Z)(e,bn),{nextValue:o,nextCurrentWidth:r}=n,a=(0,c.Z)(n,gn);return!!p()(t,o)&&(!!p()(i,a)&&!!D(l,r))}));var Dn=t(49437),Rn=t(80047);const Zn=["values","disableSorting","onChange","onRemove","disableDelete","disableCreate","disableToggle","keyPlaceholder","valuePlaceholder","descriptionPlaceholder","disableVariableRowDropdown","currentWidth","maskStatesMap","toggleMaskValue","onPersist","onReset","onBlur","filteredIndices","searchValue","enableScroll","duplicateWarningsMap"];let Mn;const An=a().div(Mn||(Mn=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${0};

  .key-value-form-editor-sortable__selectable {
    display: flex;
    flex-direction: column;
  }
`),(({enableScroll:e})=>e&&"overflow: overlay;"));function Wn(e){let{values:n,disableSorting:t,onChange:o,onRemove:r,disableDelete:a,disableCreate:s,disableToggle:d,keyPlaceholder:u,valuePlaceholder:h,descriptionPlaceholder:p,disableVariableRowDropdown:b,currentWidth:g,maskStatesMap:v,toggleMaskValue:m,onPersist:x,onReset:y,onBlur:C,filteredIndices:w,searchValue:k,enableScroll:j,duplicateWarningsMap:V}=e,E=(0,c.Z)(e,Zn);const S=(0,i.useCallback)(((e,n)=>{o&&o(e,n)}),[o]),T=(0,i.useCallback)((e=>{r&&r(e)}),[r]),D=k&&w?w.map((e=>n[e])):n;return(0,f.jsx)(An,{enableScroll:j,children:k&&0===D.length?(0,f.jsx)("div",{className:"key-value-form-editor-sortable",children:(0,f.jsx)(Dn.Z,{title:"No results found",children:(0,f.jsx)(Rn.Z,{name:"illustration-search"})})}):D&&D.map(((e,i)=>{var o,r,c;const w=e.id===(null==n?void 0:n.length)-1;return(0,f.jsx)(Tn,(0,l.Z)({index:null!=(o=e.id)?o:i,selectableKey:e.id,value:e,onChange:n=>S(e.id,n),onRemove:()=>T(e.id),onPersist:()=>{return n=e.id,void(x&&x(n));var n},onReset:()=>{return n=e.id,void(y&&y(n));var n},onBlur:(n,t)=>((e,n,t)=>{C&&C(e,n,t)})(e.id,n,t),disableSorting:t||w,disableToggle:d||w&&!s,disableDelete:a||w,disableVariableRowDropdown:b||w&&!s,keyPlaceholder:w&&u,valuePlaceholder:w&&h,descriptionPlaceholder:w&&p,isLastRow:w,currentWidth:g,maskState:!(!s&&w)&&(v&&v[e.id]||{isMasked:e.type===le}),isDuplicated:V&&V[e.id].isOverridden,toggleMaskValue:m},E),null!=(r=null==(c=e.id)?void 0:c.toString())?r:i)}))})}var On=t(70355);function Pn(e,n=100){return e/n*100}function Fn(e,n=2){return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}let zn;const Bn=500,Nn=a().div(zn||(zn=(e=>e)`
  height: 32px;
  width: 16px;
  margin-left: -8px;
  background-color: transparent;
  position: absolute;
  left: ${0}%;
  cursor: col-resize;
  z-index: 1;
`),(e=>e.left)),$n=e=>{const{showColumns:n,currentWidth:t,prevColumn:l,nextColumn:o,parentWidth:r=Bn,handleResize:a}=e,s=(0,i.useCallback)((e=>{const l=null==n?void 0:n.indexOf(e);if(-1===l)return 0;let i=0;for(let e=0;e<=l;e++)i+=t[e];return Fn(i)}),[n,t]),d=(0,i.useMemo)((()=>{const e=s(n[(null==n?void 0:n.indexOf(l))-1])+Pn(100,r),t=s(o)-Pn(100,r);return{min:Fn(e),max:Fn(t)}}),[l,o,n,r,s]),c=(0,i.useCallback)((e=>Number.isNaN(d.min)||Number.isNaN(d.max)?e:Fn(Math.min(Math.max(e,d.min),d.max))),[d]),u=(0,i.useCallback)(((e,i)=>{const s=c(Pn(i.x,r));if(s==d.min||s==d.max)return;const u=[...t],h=t[n.indexOf(l)]+i.deltaX/r*100,p=t[n.indexOf(o)]-i.deltaX/r*100;u[null==n?void 0:n.indexOf(l)]=Fn(h,2),u[null==n?void 0:n.indexOf(o)]=Fn(p,2),null==a||a(u)}),[r,t,n,d]);return(0,f.jsx)(On.DraggableCore,{onDrag:u,children:(0,f.jsx)(Nn,{left:c(s(l))})})};let Hn,Ln,In,Kn,_n,Un,Xn,Yn,qn=e=>e;const Gn=a().div(Hn||(Hn=qn`
  font-size: var(--text-size-m);
  font-family: var(--font-family-default);
`)),Jn=a().div(Ln||(Ln=qn`
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--spacing-xs);
`)),Qn=a().div(In||(In=qn`
  display: flex;
  flex-direction: row;
  height: 32px;
  position: relative;
  flex: 1 1 auto;
  margin-bottom: var(--spacing-zero);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  &:hover,
  &.is-hovered {
    background-color: transparent;
  }

  &__is-highlighted {
    background-color: var(--background-color-info);
    animation: fadeOut 1.2s linear 1;

    .key-value-form-row__modification-options {
      background-color: var(--background-color-info);
      animation: fadeOut 1.2s linear 1;
    }
  }
`)),et=a().div(Kn||(Kn=qn`
  position: relative;
  display: flex;
  border-top-width: 0;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  width: 44px;
  justify-content: flex-end;
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
`),(e=>e.nonEditableToggles?"var(--background-color-secondary);":"inherit")),nt=a().div(_n||(_n=qn`
  height: 30px;
  width: 0;
  position: absolute;
  background-color: var(--border-color-default);
`)),tt=a().div(Un||(Un=qn`
  flex: 1;
  flex-direction: row;
  position: relative;
  min-width: 0;
  display: flex;
`)),lt=a().div(Xn||(Xn=qn`
  padding: var(--spacing-s);
  color: var(--content-color-secondary);
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  font-weight: var(--text-weight-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
  user-select: none;
`)),it=a().div(Yn||(Yn=qn`
  align-items: center;
  flex: ${0};
  overflow: hidden;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  margin: var(--spacing-zero);
  background-color: ${0};
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit")),ot=new Map;ot.set("persistAll",{disabled:"You do not have permissions to perform this action.",default:"Persisting all values will replace all initial values with the current values of the variables."}),ot.set("resetAll",{default:"Resetting all values will replace all current values with the initial values of the variables."});const rt=(e,n,t)=>{let l;var i,o;return n&&(l=t||(null==(i=ot.get(e))?void 0:i.disabled)),l||(l=null==(o=ot.get(e))?void 0:o.default),l},at=({allowedColumns:e,persistAll:n,disableVariablePersistAction:t,disablePersistActionTooltip:l,resetAll:i,disableVariableResetAction:o,disableResetActionTooltip:r})=>e.includes("sessionValue")?(0,f.jsx)(Jn,{children:(0,f.jsxs)(nn.Z,{closeOnSelect:!1,children:[(0,f.jsx)(tn.Z,{"data-testid":"key-value-editor-more-actions-button",children:(0,f.jsx)(ln.Z,{size:"small",icon:(0,f.jsx)(an.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions","data-testid":"more-options-button-column-header"})}),(0,f.jsxs)(on.Z,{children:[(0,f.jsx)(rn.Z,{onClick:n,isDisabled:t,tooltip:rt("persistAll",t,l),children:"Persist all"}),(0,f.jsx)(rn.Z,{onClick:i,isDisabled:o,tooltip:rt("resetAll",o,r),children:"Reset all"})]})]})}):null;function st(e){const{showColumns:n,currentWidth:t,handleWidthChange:l,keyHeading:o,valueHeading:r,descriptionHeading:a,sessionHeading:s,typeHeading:d,optionsHeading:c,allowedColumns:u,persistAll:h,resetAll:p,disableVariablePersistAction:b,disablePersistActionTooltip:g,disableVariableResetAction:v,disableResetActionTooltip:m}=e,x=(0,i.useRef)(null),[y,C]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=new ResizeObserver((e=>{C(e[0].contentRect.width)})),n=x.current;return e.observe(n),()=>{e.unobserve(n)}}),[]);const w=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]),k=(0,i.useCallback)((e=>Number(t[null==n?void 0:n.indexOf(e)])),[n,t]);return(0,f.jsx)(Gn,{role:"rowgroup",children:(0,f.jsxs)(Qn,{role:"row",children:[(0,f.jsx)(et,{children:(0,f.jsx)(nt,{})}),(0,f.jsxs)(tt,{ref:x,children:[(0,f.jsx)(it,{type:"key",role:"columnheader",columnWidth:k("key"),isNonEditable:w("key"),isLastColumn:n&&"key"===n[n.length-1],children:(0,f.jsx)(lt,{children:o||"Key"})}),(null==n?void 0:n.includes("variableType"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($n,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"key",nextColumn:"variableType",parentWidth:y}),(0,f.jsx)(it,{type:"variableType",role:"columnheader",columnWidth:k("variableType"),isNonEditable:w("variableType"),isLastColumn:n&&"variableType"===n[n.length-1],children:(0,f.jsx)(lt,{children:d||"Type"})})]}),(null==n?void 0:n.includes("value"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($n,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:n.includes("variableType")?"variableType":"key",nextColumn:"value",parentWidth:y}),(0,f.jsx)(it,{type:"value",role:"columnheader",columnWidth:k("value"),isNonEditable:w("value"),isLastColumn:n&&"value"===n[n.length-1],children:(0,f.jsx)(lt,{children:r||"Value"})})]}),(null==n?void 0:n.includes("description"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($n,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"description",parentWidth:y}),(0,f.jsx)(it,{type:"description",role:"columnheader",columnWidth:k("description"),isNonEditable:w("description"),isLastColumn:n&&"description"===n[n.length-1],children:(0,f.jsx)(lt,{children:a||"Description"})})]}),(null==n?void 0:n.includes("sessionValue"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($n,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"sessionValue",parentWidth:y}),(0,f.jsx)(it,{type:"sessionValue",role:"columnheader",columnWidth:k("sessionValue"),isNonEditable:w("sessionValue"),isLastColumn:n&&"sessionValue"===n[n.length-1],children:(0,f.jsx)(lt,{children:s||"Current value"})})]}),u.includes("sessionValue")&&(0,f.jsx)(at,{allowedColumns:u,persistAll:h,resetAll:p,disablePersistActionTooltip:g,disableResetActionTooltip:m,disableVariablePersistAction:b,disableVariableResetAction:v}),(null==n?void 0:n.includes("options"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($n,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"options",parentWidth:y}),(0,f.jsx)(it,{type:"options",role:"columnheader",columnWidth:k("options"),isNonEditable:w("options"),isLastColumn:n&&"options"===n[n.length-1],children:(0,f.jsx)(lt,{children:c||"Options"})})]})]})]})})}const dt=["defaultValue","entityType","values","onChange","showColumns","nonEditableKeys","nonEditableValues","nonEditableDescriptions","nonEditableToggles","nonEditableOptions","keyHeading","valueHeading","sessionHeading","optionsHeading","optionsTooltip","nonEditableVariableTypes","hideBulkOptions","maskStatesMap","toggleMaskValue","initialColumnWidths","disableVariablePersistAction","disableVariableResetAction","disableSecretVariablesSync","disablePersistActionTooltip","disableResetActionTooltip","onDeleteRow","disallowDuplicates"];let ct;const ut=a().div(ct||(ct=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-top: thin solid var(--border-color-default);
  min-height: 0;
`));function ht(e){let{defaultValue:n="",entityType:t,values:o,onChange:r,showColumns:a,nonEditableKeys:s,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,keyHeading:b,valueHeading:g,sessionHeading:v,optionsHeading:m,optionsTooltip:x,nonEditableVariableTypes:y,hideBulkOptions:C,maskStatesMap:w,toggleMaskValue:k,initialColumnWidths:j,disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,onDeleteRow:R,disallowDuplicates:Z}=e,M=(0,c.Z)(e,dt);const A={showColumns:a,allowedColumns:M.allowedColumns,nonEditableKeys:s,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,hideBulkOptions:C},W=(0,i.useRef)(r);W.current=r;const[O,P]=(0,i.useState)(function(e,n){let t;return n?t=n:(t=new Array(e.length).fill(Math.floor(100/e.length)),t[t.length-1]=t.at(-1)+(100-t.reduce(((e,n)=>e+n)))),t}(a,j)),F=(0,i.useCallback)(((e,l={})=>{let i="text";"environment"!==t&&"globals"!==t||(i="default"),"collection"===t&&(i="string");const o={key:l.key||n,value:l.value||n,description:l.description||n,type:l.type||i,id:e};return M.allowedColumns.includes("sessionValue")&&(o.sessionValue=l.sessionValue||null),M.disableToggle||(o.enabled=!0),o}),[n,M.disableToggle,t,M.allowedColumns]),z=(0,i.useCallback)((()=>{if(o.length>0){var e=null==o?void 0:o.reduce((function(e,n){return e.id>=n.id?e:n}),{});return n=e,[Object,Array].includes((n||{}).constructor)&&0===Object.entries(n||{}).length?0:e.id+1}var n;return 0}),[o]),B=(0,i.useCallback)(((e,n)=>{const t=[...o],i=t.length===e?[...t,F(z(),n)]:t.map((t=>t.id===e?(0,l.Z)({},t,n):(0,l.Z)({},t)));null==W.current||W.current(i)}),[o,F,z]),N=(0,i.useCallback)((e=>{const n=[...o],t=null==n?void 0:n.filter(((n={})=>n.id!==e));R&&R(e),null==W.current||W.current(t)}),[o,R]),$=(0,f.jsx)(st,(0,l.Z)({},A,{keyHeading:b||"Key",valueHeading:g||"Value",sessionHeading:v||"Current value",optionsHeading:m||"Options",optionsTooltip:x,nonEditableVariableTypes:y,handleWidthChange:P,currentWidth:O,persistAll:()=>{if(V)return;let e=!1;const n=o.reduce(((n,t)=>{const i=t.enabled?t.sessionValue:t.value;return t.isSessionValueDeleted?(e=!0,n):(!e&&(e=!(S&&t.type===le)),S&&t.type===le?n.push(t):n.push((0,l.Z)({},t,{value:i})),n)}),[]);e&&(null==W.current||W.current(n))},resetAll:()=>{if(E)return;let e=!1;const n=o.map((n=>{const t=n.enabled?n.value:n.sessionValue;return S&&n.type===le?n:(e=!0,(0,l.Z)({},n,{sessionValue:t,isSessionValueDeleted:!1}))}));e&&(null==W.current||W.current(n))},disableVariablePersistAction:V,disableVariableResetAction:E,disablePersistActionTooltip:T,disableResetActionTooltip:D})),H=(0,i.useMemo)((()=>M.disableCreate?o:[...o,F(z())]),[o,M.disableCreate,F,z]),L=(0,i.useMemo)((()=>Z?H.map(((e,n)=>{if(e.enabled&&""!==e.key)for(let t=n+1;t<H.length;t++){const n=H[t];if(e.key===n.key&&n.enabled&&""!==n.key)return(0,l.Z)({},e,{isOverridden:!0})}return(0,l.Z)({},e,{isOverridden:!1})})):null),[H,Z]);return(0,f.jsxs)(ut,{children:[o.length>0||!M.disableCreate?$:null,(0,f.jsx)(Wn,(0,l.Z)({},A,M,{nonEditableVariableTypes:y,values:H,onChange:B,onRemove:N,currentWidth:O,maskStatesMap:w,toggleMaskValue:k,onPersist:e=>{if(V)return;let n=!1;const t=o.reduce(((t,i)=>{if(i.id===e){if(i.isSessionValueDeleted)return n=!0,t;S&&i.type===le?t.push(i):(n=!0,t.push((0,l.Z)({},i,{value:i.sessionValue})))}else t.push(i);return t}),[]);n&&(null==W.current||W.current(t))},onReset:e=>{if(E)return;let n=!1;const t=o.map((t=>t.id!==e||S&&t.type===le?t:(n=!0,(0,l.Z)({},t,{sessionValue:t.value,isSessionValueDeleted:!1}))));n&&(null==W.current||W.current(t))},onBlur:(e,n,t)=>{const i=o.findIndex((n=>n.id===e)),r=-1!==i&&o[i].sessionValue;let a;"value"===n&&-1!==i&&null===r&&t.value&&(a=[...o],a[i]=(0,l.Z)({},t,{sessionValue:t.value}),null==W.current||W.current(a))},disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,duplicateWarningsMap:L}))]})}var pt=t(68206);const bt=F(((e,...n)=>e(...n)),100),gt=({onSearchValueChange:e})=>{const[n,t]=(0,i.useState)("");return(0,f.jsx)("div",{className:"search-variable",children:(0,f.jsx)(pt.Z,{placeholder:"Filter variables",value:n,type:"search",onChange:n=>{t(n.target.value),bt(e,n.target.value)},onClear:()=>{t(""),e("")},prefix:!0,name:"filter-values"})})};function vt(e,n){try{const t=(0,ce.castNonStringTypesToString)(e),l=(0,ce.castNonStringTypesToString)(n),i=t.toLowerCase(),o=l.toLowerCase();return i.indexOf(o)}catch(t){return console.error("PatterSearch~caseInsensitiveIndexof: Failed with error",t,e,n),-1}}let ft;const mt=a().div(ft||(ft=(e=>e)`
  padding-bottom: var(--spacing-s);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${0};

  &.is-filterable {
    display: flex;
    flex-direction: column;
  }

  .search-variable {
    width: 240px;
    padding-top: var(--spacing-xs);
    padding-bottom: var(--spacing-s);
  }
`),(({enableScroll:e})=>e&&"height: 100%;")),xt=(e,n)=>!n||!(!e.key||-1===vt(e.key,n))||"secret"!==e.type&&(!(!e.value||-1===vt(e.value,n))||!(!e.sessionValue||-1===vt(e.sessionValue,n))||void 0),yt=(e,n)=>{if(!n)return null;const t=[];for(const[l,i]of e.entries())xt(i,n)&&t.push(l);return t},Ct=(0,d.observer)((function(e){const{values:n,onChange:t,tableName:o,disallowDuplicates:r,allowedColumns:a,showColumns:d,onColumnToggle:c,keyPlaceholder:u,valuePlaceholder:h,maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,enableFiltering:v=!1,enableScroll:m,isDirty:x=!1}=e,[y,C]=(0,i.useState)([]),[w,k]=(0,i.useState)(""),[j,V]=(0,i.useState)(null),E=(0,i.useRef)(x),S=(0,i.useCallback)((e=>{if(0===y.length)return!0;e.preventDefault();const l=null==n?void 0:n.filter(((e,n)=>!(null!=y&&y.includes(n))));y.sort(),0!==y[0]&&(y.length,n.length),C([]),t(l)}),[n,t,y]),T=(0,i.useCallback)((()=>{y.length>0&&C([])}),[y]),D=(0,i.useMemo)((()=>{let e=0;return(0,s.computed)((()=>null==n?void 0:n.map((n=>(0,l.Z)({},n,{id:e++})))))}),[n]).get();return(0,i.useEffect)((()=>{const e=yt(D,w);V(e)}),[w]),(0,i.useEffect)((()=>{if(E.current&&!x){const e=yt(D,w);V(e)}E.current=x}),[x]),(0,f.jsxs)(mt,{role:"table","aria-label":o,enableScroll:m,children:[v&&(0,f.jsx)(gt,{onSearchValueChange:k}),(0,f.jsx)(ht,(0,l.Z)({},e,{disallowDuplicates:r,onChange:t,values:D,selectedRows:y,deleteSelectedRows:S,onBeforeInput:T,allowedColumns:a,showColumns:d,onColumnToggle:c,keyPlaceholder:void 0===u?"Key":u,valuePlaceholder:void 0===h?"Value":h,descriptionPlaceholder:"Description",maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,filteredIndices:j,searchValue:w,onDeleteRow:e=>{if(!w)return;const n=((e,n)=>{const t=[],l=new Set(n);let i=0;for(const n of e)l.has(n)?i++:t.push(n-i);return t})(j,[e]);V(n)}})),(0,f.jsx)(hn.Modals.Ui.ModalDialog,{uid:"kv-editor-variable-type-change-confirmation"})]})})),wt=e=>(0,f.jsx)(Ct,(0,l.Z)({},e))},29225:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(7560),i=t(40540),o=t.n(i),r=t(207),a=o().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z",fill:"#6B6B6B"})),s=o().forwardRef((function(e,n){return o().createElement(r.Z,(0,l.Z)({},e,{svg:a,ref:n}))}));s.getName=function(){return"icon-action-options-stroke"};const d=s},5701:(e,n,t)=>{t.d(n,{Af:()=>h,Sf:()=>d,qc:()=>u});var l=t(40540),i=t.n(l),o=t(59530),r=t.n(o),a=t(23180),s=t(63622),d=r().button.withConfig({displayName:"CustomChipInputComponents__StyledCloseIconContainer",componentId:"sc-1y84ug7-0"})(["border:",";display:flex;justify-content:center;align-items:center;cursor:pointer;height:",";width:",";border-top-right-radius:",";border-bottom-right-radius:",";background-color:transparent;svg path{fill:",";}&:hover{svg path{fill:",";}}&:is(:focus,:active){svg path{fill:",";}outline:none;}&:disabled{cursor:not-allowed;svg path{fill:",";}}"],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["size-s"]}),(function(e){return e.theme["size-s"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["content-color-secondary"]}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.theme["content-color-tertiary"]})),c=i().forwardRef((function(e,n){var t=e.onClick,l=e.isDisabled,o=e.onKeyDown;return i().createElement(d,{onKeyDown:o,ref:n,disabled:l,onClick:t},i().createElement(a.Z,null))}));c.name="CloseIcon";var u=r().div.withConfig({displayName:"CustomChipInputComponents__StyledChip",componentId:"sc-1y84ug7-1"})(["box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:",";padding:",";color:",";background-color:",";border-radius:",";&:hover{background-color:",";}&:is(:active,:focus-within){background-color:",";}"],(function(e){return e.theme["size-s"]}),(function(e){return"2px ".concat(e.theme["spacing-zero"]," 2px ").concat(e.theme["spacing-s"])}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.isDisabled?e.theme["highlight-background-color-tertiary"]:e.theme["background-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return!e.isDisabled&&e.theme["highlight-background-color-primary"]}),(function(e){return e.theme["highlight-background-color-tertiary"]}));function h(e){var n=(0,l.useRef)(),t=e.label,o=e.onClick,r=e.isDisabled;return i().createElement(u,{onClick:function(){n.current.focus()},isDisabled:r},i().createElement(p,{isDisabled:r},t),i().createElement(c,{onKeyDown:function(e){"Backspace"===e.key&&o()},ref:n,isDisabled:r,onClick:function(e){o(),e.stopPropagation()}}))}function p(e){var n=e.children,t=e.isDisabled;return i().createElement(s.ZP,{type:"body-medium",color:t&&"content-color-secondary"},n)}}}]);
//# sourceMappingURL=7067.f76e13f99142547a.js.map