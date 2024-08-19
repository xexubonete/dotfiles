"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[6854],{26854:(e,n,t)=>{t.r(n),t.d(n,{FileUploader:()=>Le,KeyValueEditor:()=>jt});var l=t(7560),i=t(40540),o=t.n(i),r=t(59530),a=t.n(r),s=t(78476),d=t(50297),c=t(98283),u=t(81410),h=t(69356),p=t.n(h),b=t(22833),g=t.n(b),v=t(65848),f=t(52322);let m,x,y=e=>e;const C=a().div(m||(m=y`
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
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(({isLastColumn:e})=>e?"unset":"var(--border-width-default) var(--border-style-solid)\n    var(--border-color-default)"),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit"),(e=>e.isNonEditable?"var(--content-color-secondary)":"inherit"));function S(e){let{content:n}=e,t=(0,c.Z)(e,j);return(0,f.jsx)(E,(0,l.Z)({},t,{children:n}))}const T=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"";function D(e,n){if(typeof e!=typeof n)return!1;const t=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===n:Array.isArray(e)&&Array.isArray(n)?e.length===n.length&&e.every(((e,t)=>D(e,n[t]))):"object"===t&&(null===e&&null===n||null!==e&&null!==n&&!Array.isArray(e)&&!Array.isArray(n)&&Object.keys(e).length===Object.keys(n).length&&Object.keys(e).every((t=>D(e[t],n[t]))))}var R=t(59713);let Z;const M=a().div(Z||(Z=(e=>e)`
  align-items: center;
  height: 24px;
  display: inline-flex;
  padding: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--highlight-background-color-primary);
    cursor: pointer;
  }
`));function A({onClick:e}){return(0,f.jsx)(M,{className:"delete-button",onClick:e,role:"button","aria-label":"delete-row",children:(0,f.jsx)(R.Z,{})})}function W(e,n,t){let l,i,o,r,a,s,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(n=+n||0,t&&function(e){const n=typeof e;return null!=e&&("object"===n||"function"===n)}(t)){if(c=!(null==t||!t.leading),u="maxWait"in t,u){const e=(null==t?void 0:t.maxWait)||0;o=Math.max(+e,n)}h="trailing"in t?!(null==t||!t.trailing):h}function p(n){const t=l,o=i;return l=i=void 0,d=n,r=e.apply(o,t),r}function b(e,n){return setTimeout(e,n)}function g(e){const t=e-s;return void 0===s||t>=n||t<0||u&&e-d>=o}function v(){const e=Date.now();if(g(e))return f(e);a=b(v,function(e){const t=e-d,l=n-(e-s);return u?Math.min(l,o-t):l}(e))}function f(e){return a=void 0,h&&l?p(e):(l=i=void 0,r)}function m(...e){const t=Date.now(),o=g(t);if(l=e,i=this,s=t,o){if(void 0===a)return function(e){return d=e,a=b(v,n),c?p(e):r}(s);if(u)return a=b(v,n),p(s)}return void 0===a&&(a=b(v,n)),r}return m.cancel=function(){void 0!==a&&clearTimeout(a),d=0,l=s=i=a=void 0},m.flush=function(){return void 0===a?r:f(Date.now())},m.pending=function(){return void 0!==a},m}const O=["indicators","isDuplicated"];let P,F,z=e=>e;const B=a().textarea(P||(P=z`
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
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-l)")),N=a().div(F||(F=z`
  display: flex;
  align-items: flex-start;
  max-height: var(--size-m);
  height: 100%;
  width: 100%;
`)),$=W(((e,n,t)=>{var l,i;const o=null!=(l=(null==e?void 0:e.scrollHeight)/(null==e||null==(i=e.parentNode)?void 0:i.clientHeight))?l:0;o!==n&&t(Math.ceil(o))}),100);function L(e){let{indicators:n,isDuplicated:t}=e,l=(0,c.Z)(e,O);const o=(0,i.useRef)(null),[r,a]=(0,i.useState)(1);return(0,i.useEffect)((()=>(setTimeout((()=>{if(o.current){const e=o.current.value.length;o.current.selectionStart=e,o.current.selectionEnd=e,o.current.scrollTop=o.current.scrollHeight}})),$(o.current,r,a),()=>{$.cancel()})),[r]),(0,f.jsxs)(N,{children:[(0,f.jsx)(B,{isDuplicated:t,role:"cell","aria-label":`${l.type} input`,ref:o,value:l.value,rows:r,onChange:e=>{l.onChange(e.target.value),$(o.current,r,a)},autoFocus:l.shouldFocusOnMount,placeholder:l.placeholder||"",readOnly:l.readOnly,onBlur:l.onBlur,onKeyDown:e=>{l.preventEnter&&13===e.keyCode&&e.preventDefault()}}),n]})}let H,I,K=e=>e;function _(e){return"string"==typeof e?e:e?e&&e.toString?String(e):Object.prototype.toString.call(e):""}function U(e,n={}){return e?("string"!=typeof e&&(e=_(e)),e.split("\n").map(((e,t)=>(0,f.jsx)("span",{children:Y(e,n)},t)))):e}function X(e,n={}){return e?("string"!=typeof e&&(e=_(e)),Y(e.split("\n")[0],n)):e}function Y(e,n={}){const t=n.maxLength||100;return e?("string"!=typeof e&&(e=_(e)),e.length<=t?e:e.slice(0,t+1)):""}const q=a().div(H||(H=K`
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
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-xl)")),G=a().div(I||(I=K`
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    color: var(--content-color-tertiary);
  }
`));function J(e){const n=(0,i.useRef)(null),{value:t,placeholder:l,onBlur:o,preventEnter:r,onFocus:a,type:s,currentWidth:d,actions:c,indicators:u,isDuplicated:h}=e,p=!r,b=(0,i.useCallback)((()=>{null==a||a()}),[a]),g=!t&&l,v=g?`${s} empty cell`:`${s} cell`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(q,{onBlur:o,onClick:b,ref:n,tabIndex:"0",onFocus:b,isDuplicated:h,children:(0,f.jsx)(G,{role:"cell","aria-label":v,"data-placeholder":g?l:null,children:p?X(t,{maxLength:Math.ceil(2*d)}):U(t,{maxLength:Math.ceil(2*d)})})}),u,c]})}q.displayName="KeyValueCellContainer";const Q=[{value:"text",label:"Text"},{value:"file",label:"File"}],ee="secret",ne="default";let te;const le=a().div(te||(te=(e=>e)`
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
`),(({isFocused:e})=>e&&"\n        border: var(--border-width-default) var(--border-style-solid) var(--border-color-default);\n        background: var(--background-color-primary);\n        height: var(--size-s);\n        padding-left: var(--spacing-xs);\n        margin-top: var(--spacing-xs);\n        margin-right: var(--spacing-s);\n    "));function ie(e){const{value:n,isEditable:t,onBlur:l,onChange:i,onFocus:o,type:r}=e,a=`${r} masked cell`;return(0,f.jsx)(le,{isFocused:Boolean(t),onBlur:l,onClick:o,onFocus:o,children:(0,f.jsx)("input",{role:"cell","aria-label":a,value:n||"",spellCheck:!1,type:"password",onChange:e=>{i(e.currentTarget.value)}},"text")})}var oe=t(16913),re=t(81397),ae=t(88131);const se=["hidden","value","isEditable","currentWidth","readOnly","shouldFocusOnMount","onBlur","onChange","onFocus","actions","editorType","maskState","enableVariableSuggestions","placeholder","isDuplicated"];let de;const ce=a()(oe.Z)(de||(de=(e=>e)`
  position: absolute;
  align-self: center;
  right: var(--spacing-s);
  z-index: 10;
`));function ue(e){const{hidden:n,value:t,isEditable:i,currentWidth:o,readOnly:r,shouldFocusOnMount:a,onBlur:s,onChange:d,onFocus:u,actions:h,editorType:p,maskState:b,enableVariableSuggestions:g,placeholder:v,isDuplicated:m}=e,x=(0,c.Z)(e,se),y={readOnly:r,shouldFocusOnMount:a,onBlur:s,onChange:d},C=e=>{null==d||d(x.type,e)},w=(0,ae.usePostmanInputFeatureFlag)();if(n)return null;if(g&&w){let n=!t&&v?`${x.type} empty cell`:`${x.type} cell`;return i&&(n=`${x.type} input`),(0,f.jsx)(ae.KVEditorInput,{value:t||"",onChange:C,suggestions:[],placeholder:"key"===x.type?"Key":"Value",ariaLabel:n,onFocus:u,onBlur:s,shouldFocusOnMount:a,actions:h,indicators:e.indicators,isEditable:!y.readOnly})}return p===ee&&b.isMasked?(0,f.jsx)(ie,(0,l.Z)({onChange:C,onFocus:u,onBlur:s,isEditable:i,value:t,placeholder:v},x)):(0,f.jsxs)(f.Fragment,{children:[i?(0,f.jsx)(L,(0,l.Z)({},y,{onChange:C,onFocus:u,value:t,placeholder:v,isDuplicated:m},x)):(0,f.jsx)(J,(0,l.Z)({},x,{value:t,onFocus:u,actions:h,onChange:C,placeholder:v,currentWidth:o,isDuplicated:m})),m&&(0,f.jsx)(re.Z,{content:"This variable has been overwritten by a duplicate key.",placement:"bottom",children:(0,f.jsx)(ce,{color:"content-color-warning",className:"duplicate-warning-icon"})})]})}var he=t(74962),pe=t(63622),be=t(84591);let ge;const ve=a().div(ge||(ge=(e=>e)`
  position: absolute;
  right: var(--spacing-m);
  display: flex;
  height: 100%;
  align-items: center;
  cursor: default;
  z-index: 1;
  background: transparent !important;
`)),fe=({infoTitle:e,info:n})=>(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(he.Z,{type:"h3",styleAs:"h4",text:e}),n&&(0,f.jsx)(pe.ZP,{type:"small",color:"content-color-primary",children:n})]}),me=e=>{const{info:n,infoTitle:t,placement:i}=e;return n||t?(0,f.jsx)(ve,{children:(0,f.jsx)(re.Z,{content:(0,f.jsx)(fe,(0,l.Z)({},e)),placement:i,children:(0,f.jsx)(be.Z,{})})}):null};let xe;const ye=a()(u.Z)(xe||(xe=(e=>e)`
  margin: var(--spacing-xs);
  min-width: 80px;
`));function Ce(e){const{hidden:n,options:t,defaultOption:l,onChange:o}=e,[r,a]=(0,i.useState)(l),[s,d]=(0,i.useState)(!1);return!s&&n?null:(0,f.jsx)(ye,{viaPortal:!0,className:"single-type-select","aria-label":"KV Type Select",triggerWidth:"auto",triggerSize:"small",triggerType:"tertiary",menuMinWidth:100,menuMaxWidth:165,isSearchable:!1,isClearable:!1,options:t,value:r,onOpen:()=>d(!0),onClose:()=>d(!1),onChange:e=>{a(e),null==o||o(e)}})}var we=t(58560),ke=t(96364),je=t(23180),Ve=a().button.withConfig({displayName:"CustomChipInputComponents__StyledCloseIconContainer",componentId:"sc-1y84ug7-0"})(["border:",";display:flex;justify-content:center;align-items:center;cursor:pointer;height:",";width:",";border-top-right-radius:",";border-bottom-right-radius:",";background-color:transparent;svg path{fill:",";}&:hover{svg path{fill:",";}}&:is(:focus,:active){svg path{fill:",";}outline:none;}&:disabled{cursor:not-allowed;svg path{fill:",";}}"],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["size-s"]}),(function(e){return e.theme["size-s"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["content-color-secondary"]}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.theme["content-color-tertiary"]})),Ee=o().forwardRef((function(e,n){var t=e.onClick,l=e.isDisabled,i=e.onKeyDown;return o().createElement(Ve,{onKeyDown:i,ref:n,disabled:l,onClick:t},o().createElement(je.Z,null))}));Ee.name="CloseIcon";var Se=a().div.withConfig({displayName:"CustomChipInputComponents__StyledChip",componentId:"sc-1y84ug7-1"})(["box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:",";padding:",";color:",";background-color:",";border-radius:",";&:hover{background-color:",";}&:is(:active,:focus-within){background-color:",";}"],(function(e){return e.theme["size-s"]}),(function(e){return"2px ".concat(e.theme["spacing-zero"]," 2px ").concat(e.theme["spacing-s"])}),(function(e){return e.theme["content-color-primary"]}),(function(e){return e.isDisabled?e.theme["highlight-background-color-tertiary"]:e.theme["background-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return!e.isDisabled&&e.theme["highlight-background-color-primary"]}),(function(e){return e.theme["highlight-background-color-tertiary"]}));function Te(e){var n=(0,i.useRef)(),t=e.label,l=e.onClick,r=e.isDisabled;return o().createElement(Se,{onClick:function(){n.current.focus()},isDisabled:r},o().createElement(De,{isDisabled:r},t),o().createElement(Ee,{onKeyDown:function(e){"Backspace"===e.key&&l()},ref:n,isDisabled:r,onClick:function(e){l(),e.stopPropagation()}}))}function De(e){var n=e.children,t=e.isDisabled;return o().createElement(pe.ZP,{type:"body-medium",color:t&&"content-color-secondary"},n)}var Re=t(35736);const Ze=["value","onReset","id","label","name","multiple","isDisabled","loading","error","accept","autoFocus","onChange"];let Me,Ae,We,Oe,Pe=e=>e;const Fe="Couldn't upload file",ze=a().input.attrs({type:"file"})(Me||(Me=Pe`
  opacity: 0;
  height: 0;
  width: 0;
  z-index: -1;

  &:focus + label {
    box-shadow: var(--shadow-focus);
    outline: none;
  }
`)),Be=a().label(Ae||(Ae=Pe`
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
`),(e=>e.isDisabled?"var(--content-color-tertiary)":"var(--content-color-primary)"),(e=>e.isDisabled?"not-allowed":"pointer"),(e=>!e.isDisabled&&"border-color: var(--button-outline-hover-border-color)")),Ne=a()(we.Z)(We||(We=Pe`
  max-width: 100%;
`)),$e=a().div(Oe||(Oe=Pe`
  width: 100%;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`));function Le(e){return(0,f.jsx)(ke.VW,{children:(0,f.jsx)(He,(0,l.Z)({},e))})}function He(e){const{value:n,onReset:t,id:o,label:r,name:a,multiple:s,isDisabled:d,loading:u,error:h,accept:p,autoFocus:b,onChange:g}=e,v=(0,c.Z)(e,Ze),{addToast:m}=(0,ke.ZP)();let x;if((0,i.useEffect)((()=>{h&&m({status:"error",title:Fe,description:h})}),[h,m]),null!=n&&n.length){const e=n.length,l=n[0],i=n.join(", "),o=e>1?`${e} files selected`:`${l}`;x=(0,f.jsx)(re.Z,{content:i,children:(0,f.jsx)($e,{children:(0,f.jsx)(Te,{label:o,onClick:t})})})}else x=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ze,(0,l.Z)({},v,{id:o,onChange:e=>{const n=e.target,t=n&&n.files;!d&&t&&(null==g||g(t))},multiple:s,disabled:d,accept:p,name:a,autoFocus:b,onClick:e=>{e.currentTarget.value=""}})),(0,f.jsxs)(Be,{htmlFor:o,isDisabled:d,children:[u&&(0,f.jsx)(Re.Z,{size:"small"}),(0,f.jsx)("span",{children:r})]})]});return(0,f.jsx)(Ne,{direction:"column",alignItems:"center",children:x})}const Ie=()=>{const e=(0,i.useRef)(!0);return(0,i.useEffect)((()=>()=>{e.current=!1}),[]),e};let Ke;const _e="Select Files",Ue=a()(we.Z)(Ke||(Ke=(e=>e)`
  padding: var(--spacing-xs);
`));function Xe(e){const{id:n,type:t,value:l,hidden:o,error:r,onFilesSelect:a,onChange:s}=e,[d,c]=(0,i.useState)(!1),u=Ie(),h=(0,i.useMemo)((()=>Array.isArray(l)?l:l?[l]:[]),[l]);return o?null:(0,f.jsx)(Ue,{height:"100%",width:"100%",children:(0,f.jsx)(Le,{label:_e,id:"key-value-file-uploader",multiple:!0,error:r,value:h,loading:d,onChange:e=>{a&&(c(!0),a(n,e).finally((()=>{u.current&&c(!1)})))},onReset:()=>null==s?void 0:s(t,"")})})}const Ye=e=>e.disableEdit,qe=(e,n)=>n||e.system&&!e.allowedToToggle,Ge=(e,n)=>!e.disableEdit&&!(null!=n&&n.disableToggle)||e.system;var Je=t(95362),Qe=t(70262);let en;const nn=a().div(en||(en=(e=>e)`
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);
  opacity: ${0};

  &:hover {
    cursor: pointer;
  }
`),(({alwaysPresent:e})=>e?"1":"0"));function tn({onClick:e,maskState:n,isVisible:t}){const l=!1===n.isMasked;return(0,f.jsx)(nn,{role:"button",className:"toggle-mask","aria-label":"toggle-mask-row",onClick:e,alwaysPresent:l||t,children:n.isMasked?(0,f.jsx)(Je.Z,{}):(0,f.jsx)(Qe.Z,{})})}var ln=t(64691),on=t(48263),rn=t(80605),an=t(59824),sn=t(17282),dn=t(29225);const cn=e=>{const{onPersist:n,onReset:t,disableVariablePersistAction:l,disablePersistActionTooltip:i,disableResetActionTooltip:o,disableVariableResetAction:r}=e,a=(e=!1,n)=>{if(e){let e;switch(n){case"persist":e=i;break;case"reset":e=o}return e||"You do not have permissions to perform this action."}return null};return(0,f.jsxs)(ln.Z,{children:[(0,f.jsx)(on.Z,{children:(0,f.jsx)(rn.Z,{icon:(0,f.jsx)(dn.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions",size:"small","data-testid":"more-options-button"})}),(0,f.jsxs)(an.Z,{placement:"bottom-end",children:[(0,f.jsx)(sn.Z,{onClick:n,isDisabled:l,tooltip:a(l,"persist"),children:"Persist"}),(0,f.jsx)(sn.Z,{onClick:t,isDisabled:r,tooltip:a(r,"reset"),children:"Reset"})]})]})};let un;const hn=a().div(un||(un=(e=>e)`
  display: flex;
  flex-direction: row;
  opacity: ${0};
  margin-right: var(--spacing-xs);
`),(({isVisible:e})=>e?"1":"0")),pn=({isHidden:e=!1,children:n,isVisible:t})=>e||!n?null:(0,f.jsx)(hn,{isVisible:t,children:n});var bn=t(26246);const gn=["warning"],vn=["prevValue","prevCurrentWidth"],fn=["nextValue","nextCurrentWidth"];let mn,xn,yn,Cn,wn=e=>e;const kn=a().div(mn||(mn=wn`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 0;
  height: 32px;
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
  color: ${0};
`),(e=>e.isRowFocused?"var(--background-color-secondary) !important":e.isRowSelected||e.disabled?"var(--background-color-secondary)":"inherit"),(e=>e.disabled?"var(--content-color-tertiary)":"inherit")),jn=a().div(xn||(xn=wn`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: row;
  color: ${0};
`),(e=>e.isBlocked?"var(--content-color-tertiary)":"inherit")),Vn=a().div(yn||(yn=wn`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),En=a()(u.Z)(Cn||(Cn=wn`
  /* Overriding the styles of Aether dropdown control element. */
  .aether-dropdown__control,
  .aether-dropdown__control--is-focused:hover {
    border: none;
    width: 100%;
    box-shadow: none;
    background-color: unset !important;
  }
`)),Sn=new Map;Sn.set("default",{value:ne,label:"default"}),Sn.set("secret",{value:ee,label:"secret"});const Tn=[Sn.get("default"),Sn.get("secret")];function Dn(e){const{index:n,value:t,onChange:o,onRemove:r,currentWidth:a,showColumns:s,allowedColumns:d,enableFiles:u,onFilesSelect:h,maskState:p,toggleMaskValue:b,isLastRow:g,onPersist:v,onReset:m,onBlur:x,enableVariableSuggestions:y,optionsDropdownValues:C,isDuplicated:w}=e,j=(0,i.useRef)(o);j.current=o;let{key:V,value:E,sessionValue:D="",options:R,type:Z,enabled:M=!0,description:W="",fileUploadError:O}=t;const P=Z===ee?ee:ne,F=s.includes("variableType")?P:Z||"text",[z,B]=(0,i.useState)(null),[N,$]=(0,i.useState)(null),L=null!==z,H=(0,i.useMemo)((()=>{var e;return null!=(e=Q.find((e=>e.value===t.type)))?e:Q[0]}),[t.type]),I=(0,i.useCallback)(((e,n)=>{"sessionValue"===e&&void 0!==n&&t.isSessionValueDeleted&&(null==j.current||j.current((0,l.Z)({},t,{[e]:n,isSessionValueDeleted:!1}))),null==j.current||j.current((0,l.Z)({},t,{[e]:n}))}),[t]),K=(0,i.useCallback)((e=>{(0,c.Z)(t,gn),I("enabled",e)}),[t,I]),_=(0,i.useCallback)((()=>{r&&r()}),[r]),U=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]);function X(e){return Number(a[null==s?void 0:s.indexOf(e)])}return(0,f.jsxs)(kn,{role:"row","aria-rowindex":n,disabled:Ye(t),isRowSelected:e.isRowSelected,isRowFocused:null!==z,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:[(0,f.jsx)(k,{disabled:e.disableSorting&&e.nonEditableToggles,shouldShowCheckbox:Ge(t,e),isRowEnabled:M,onToggleEnabledState:K,isCheckboxDisabled:qe(t,e.nonEditableToggles)}),(0,f.jsxs)(jn,{isBlocked:t.disableEdit,children:[(0,f.jsx)(S,{columnWidth:X("key"),isNonEditable:U("key"),isLastColumn:s&&"key"===s[s.length-1],content:(0,f.jsx)(ue,{type:"key",value:V,currentWidth:X("key"),onFocus:()=>B("key"),onChange:I,isEditable:"key"===z,placeholder:e.keyPlaceholder,preventEnter:e.disableMultilineKey||!1,readOnly:t.disableEdit||e.nonEditableKeys,shouldFocusOnMount:!0,onBlur:()=>B(null),isDuplicated:w,actions:(0,f.jsx)(Ce,{hidden:!N||!u,options:Q,defaultOption:H,onChange:e=>I("type",e.value)}),indicators:(0,f.jsx)(me,{infoTitle:t.infoTitle,info:t.info,placement:"right"}),enableVariableSuggestions:y})}),s.includes("variableType")&&(0,f.jsx)(S,{columnWidth:X("variableType"),isNonEditable:U("variableType"),isLastColumn:s&&"variableType"===s[s.length-1],content:(!g||e.nonEditableVariableTypes)&&(0,f.jsx)(En,{isRowFocused:L,tabIndex:-1,isDisabled:e.nonEditableVariableTypes,onChange:async t=>{const{disableAllVariablesSync:l=!1,disableSecretVariablesSync:i}=e;if(Z===t.value)return;if(l||!i&&t.value===ee||i&&t.value===ee&&!E)return I("type",t.value),void(b&&b(n));const o=bn.Modals.getModals(),r=await o.showWarningDialog({uid:"kv-editor-variable-type-change-confirmation",subject:`Change ${V}'s type to ${t.value}?`,message:"This will reveal the hidden values in plain text everywhere in the app for all team members",options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Change type",isPrimary:!0}]});return r&&"Change type"===r.title?(I("type",t.value),void(b&&b(n))):void 0},options:Tn,value:Sn.get(F),isClearable:!1,isSearchable:!1,menuWidth:100})}),s.includes("value")&&(0,f.jsx)(S,{columnWidth:X("value"),isNonEditable:U("value"),isLastColumn:s&&"value"===s[s.length-1],content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ue,{hidden:"file"===Z,type:"value",value:E,currentWidth:X("value"),onFocus:()=>B("value"),onChange:I,isEditable:"value"===z,placeholder:e.valuePlaceholder,preventEnter:e.disableMultilineValue||!1,readOnly:t.disableEdit||e.nonEditableValues,shouldFocusOnMount:!0,onBlur:()=>("value",B(null),void(x&&x("value",t))),editorType:Z,maskState:p,enableVariableSuggestions:y}),(0,f.jsx)(Xe,{hidden:"file"!==Z,id:n,type:"value",value:E,error:O,onChange:I,onFilesSelect:h})]})}),s.includes("description")&&(0,f.jsx)(S,{columnWidth:X("description"),isNonEditable:U("description"),isLastColumn:s&&"description"===s[s.length-1],content:(0,f.jsx)(ue,{type:"description",value:W,onChange:I,placeholder:e.descriptionPlaceholder,isEditable:"description"===z,currentWidth:X("description"),onFocus:()=>B("description"),readOnly:t.disableEdit||e.nonEditableDescriptions,shouldFocusOnMount:!0,onBlur:()=>B(null)})}),s.includes("sessionValue")&&(0,f.jsx)(S,{columnWidth:X("sessionValue"),isNonEditable:U("sessionValue"),isLastColumn:s&&"sessionValue"===s[s.length-1],content:(0,f.jsx)(ue,{type:"sessionValue",value:D,onChange:I,isEditable:"sessionValue"===z,placeholder:t.isSessionValueDeleted?"[Deleted]":e.sessionValuePlaceholder,preventEnter:e.disableMultilineValue||!1,currentWidth:X("sessionValue"),onFocus:()=>B("sessionValue"),readOnly:t.disableEdit||e.nonEditableSessionValue,shouldFocusOnMount:!0,onBlur:()=>B(null),editorType:Z,maskState:p,enableVariableSuggestions:y})}),s.includes("options")&&(0,f.jsx)(S,{columnWidth:X("options"),isNonEditable:U("options"),isLastColumn:s&&"options"===s[s.length-1],content:(0,f.jsx)(En,{isRowFocused:L,tabIndex:-1,onChange:e=>I("options",e),options:C,value:R,isClearable:!1,isSearchable:!1,menuWidth:100})}),(0,f.jsx)(Vn,{children:((null==s?void 0:s.includes("value"))||(null==s?void 0:s.includes("description"))||(null==s?void 0:s.includes("sessionValue")))&&!e.isRowSelected&&!e.value.disableEdit&&(0,f.jsxs)(f.Fragment,{children:[F===ee&&(0,f.jsx)(tn,{isVisible:N,maskState:p,onClick:()=>b(n)}),(0,f.jsxs)(pn,{isHidden:L,isVisible:N,children:[!e.disableDelete&&(0,f.jsx)(A,{onClick:_}),!e.disableVariableRowDropdown&&d.includes("sessionValue")&&(0,f.jsx)(cn,{onPersist:v,onReset:m,disableVariablePersistAction:e.disableVariablePersistAction||e.disableSecretVariablesSync&&F===ee,disablePersistActionTooltip:e.disablePersistActionTooltip,disableVariableResetAction:e.disableVariableResetAction||e.disableSecretVariablesSync&&F===ee,disableResetActionTooltip:e.disableResetActionTooltip})]})]})})]})]})}const Rn=(0,i.memo)(Dn,((e,n)=>{const{prevValue:t,prevCurrentWidth:l}=e,i=(0,c.Z)(e,vn),{nextValue:o,nextCurrentWidth:r}=n,a=(0,c.Z)(n,fn);return!!p()(t,o)&&(!!p()(i,a)&&!!D(l,r))}));var Zn=t(49437),Mn=t(80047);const An=["values","disableSorting","onChange","onRemove","disableDelete","disableCreate","disableToggle","keyPlaceholder","valuePlaceholder","descriptionPlaceholder","disableVariableRowDropdown","currentWidth","maskStatesMap","toggleMaskValue","onPersist","onReset","onBlur","filteredIndices","searchValue","enableScroll","duplicateWarningsMap"];let Wn;const On=a().div(Wn||(Wn=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${0};

  .key-value-form-editor-sortable__selectable {
    display: flex;
    flex-direction: column;
  }
`),(({enableScroll:e})=>e&&"overflow: overlay;"));function Pn(e){let{values:n,disableSorting:t,onChange:o,onRemove:r,disableDelete:a,disableCreate:s,disableToggle:d,keyPlaceholder:u,valuePlaceholder:h,descriptionPlaceholder:p,disableVariableRowDropdown:b,currentWidth:g,maskStatesMap:v,toggleMaskValue:m,onPersist:x,onReset:y,onBlur:C,filteredIndices:w,searchValue:k,enableScroll:j,duplicateWarningsMap:V}=e,E=(0,c.Z)(e,An);const S=(0,i.useCallback)(((e,n)=>{o&&o(e,n)}),[o]),T=(0,i.useCallback)((e=>{r&&r(e)}),[r]),D=k&&w?w.map((e=>n[e])):n;return(0,f.jsx)(On,{enableScroll:j,children:k&&0===D.length?(0,f.jsx)("div",{className:"key-value-form-editor-sortable",children:(0,f.jsx)(Zn.Z,{title:"No results found",children:(0,f.jsx)(Mn.Z,{name:"illustration-search"})})}):D&&D.map(((e,i)=>{var o,r,c;const w=e.id===(null==n?void 0:n.length)-1;return(0,f.jsx)(Rn,(0,l.Z)({index:null!=(o=e.id)?o:i,selectableKey:e.id,value:e,onChange:n=>S(e.id,n),onRemove:()=>T(e.id),onPersist:()=>{return n=e.id,void(x&&x(n));var n},onReset:()=>{return n=e.id,void(y&&y(n));var n},onBlur:(n,t)=>((e,n,t)=>{C&&C(e,n,t)})(e.id,n,t),disableSorting:t||w,disableToggle:d||w&&!s,disableDelete:a||w,disableVariableRowDropdown:b||w&&!s,keyPlaceholder:w&&u,valuePlaceholder:w&&h,descriptionPlaceholder:w&&p,isLastRow:w,currentWidth:g,maskState:!(!s&&w)&&(v&&v[e.id]||{isMasked:e.type===ee}),isDuplicated:V&&V[e.id].isOverridden,toggleMaskValue:m},E),null!=(r=null==(c=e.id)?void 0:c.toString())?r:i)}))})}var Fn=t(70355);function zn(e,n=100){return e/n*100}function Bn(e,n=2){return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}let Nn;const $n=500,Ln=a().div(Nn||(Nn=(e=>e)`
  height: 32px;
  width: 16px;
  margin-left: -8px;
  background-color: transparent;
  position: absolute;
  left: ${0}%;
  cursor: col-resize;
  z-index: 1;
`),(e=>e.left)),Hn=e=>{const{showColumns:n,currentWidth:t,prevColumn:l,nextColumn:o,parentWidth:r=$n,handleResize:a}=e,s=(0,i.useCallback)((e=>{const l=null==n?void 0:n.indexOf(e);if(-1===l)return 0;let i=0;for(let e=0;e<=l;e++)i+=t[e];return Bn(i)}),[n,t]),d=(0,i.useMemo)((()=>{const e=s(n[(null==n?void 0:n.indexOf(l))-1])+zn(100,r),t=s(o)-zn(100,r);return{min:Bn(e),max:Bn(t)}}),[l,o,n,r,s]),c=(0,i.useCallback)((e=>Number.isNaN(d.min)||Number.isNaN(d.max)?e:Bn(Math.min(Math.max(e,d.min),d.max))),[d]),u=(0,i.useCallback)(((e,i)=>{const s=c(zn(i.x,r));if(s==d.min||s==d.max)return;const u=[...t],h=t[n.indexOf(l)]+i.deltaX/r*100,p=t[n.indexOf(o)]-i.deltaX/r*100;u[null==n?void 0:n.indexOf(l)]=Bn(h,2),u[null==n?void 0:n.indexOf(o)]=Bn(p,2),null==a||a(u)}),[r,t,n,d]);return(0,f.jsx)(Fn.DraggableCore,{onDrag:u,children:(0,f.jsx)(Ln,{left:c(s(l))})})};let In,Kn,_n,Un,Xn,Yn,qn,Gn,Jn=e=>e;const Qn=a().div(In||(In=Jn`
  font-size: var(--text-size-m);
  font-family: var(--font-family-default);
`)),et=a().div(Kn||(Kn=Jn`
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--spacing-xs);
`)),nt=a().div(_n||(_n=Jn`
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
`)),tt=a().div(Un||(Un=Jn`
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
`),(e=>e.nonEditableToggles?"var(--background-color-secondary);":"inherit")),lt=a().div(Xn||(Xn=Jn`
  height: 30px;
  width: 0;
  position: absolute;
  background-color: var(--border-color-default);
`)),it=a().div(Yn||(Yn=Jn`
  flex: 1;
  flex-direction: row;
  position: relative;
  min-width: 0;
  display: flex;
`)),ot=a().div(qn||(qn=Jn`
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
`)),rt=a().div(Gn||(Gn=Jn`
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
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit")),at=new Map;at.set("persistAll",{disabled:"You do not have permissions to perform this action.",default:"Persisting all values will replace all initial values with the current values of the variables."}),at.set("resetAll",{default:"Resetting all values will replace all current values with the initial values of the variables."});const st=(e,n,t)=>{let l;var i,o;return n&&(l=t||(null==(i=at.get(e))?void 0:i.disabled)),l||(l=null==(o=at.get(e))?void 0:o.default),l},dt=({allowedColumns:e,persistAll:n,disableVariablePersistAction:t,disablePersistActionTooltip:l,resetAll:i,disableVariableResetAction:o,disableResetActionTooltip:r})=>e.includes("sessionValue")?(0,f.jsx)(et,{children:(0,f.jsxs)(ln.Z,{closeOnSelect:!1,children:[(0,f.jsx)(on.Z,{"data-testid":"key-value-editor-more-actions-button",children:(0,f.jsx)(rn.Z,{size:"small",icon:(0,f.jsx)(dn.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions","data-testid":"more-options-button-column-header"})}),(0,f.jsxs)(an.Z,{children:[(0,f.jsx)(sn.Z,{onClick:n,isDisabled:t,tooltip:st("persistAll",t,l),children:"Persist all"}),(0,f.jsx)(sn.Z,{onClick:i,isDisabled:o,tooltip:st("resetAll",o,r),children:"Reset all"})]})]})}):null;function ct(e){const{showColumns:n,currentWidth:t,handleWidthChange:l,keyHeading:o,valueHeading:r,descriptionHeading:a,sessionHeading:s,typeHeading:d,optionsHeading:c,allowedColumns:u,persistAll:h,resetAll:p,disableVariablePersistAction:b,disablePersistActionTooltip:g,disableVariableResetAction:v,disableResetActionTooltip:m}=e,x=(0,i.useRef)(null),[y,C]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=new ResizeObserver((e=>{C(e[0].contentRect.width)})),n=x.current;return e.observe(n),()=>{e.unobserve(n)}}),[]);const w=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]),k=(0,i.useCallback)((e=>Number(t[null==n?void 0:n.indexOf(e)])),[n,t]);return(0,f.jsx)(Qn,{role:"rowgroup",children:(0,f.jsxs)(nt,{role:"row",children:[(0,f.jsx)(tt,{children:(0,f.jsx)(lt,{})}),(0,f.jsxs)(it,{ref:x,children:[(0,f.jsx)(rt,{type:"key",role:"columnheader",columnWidth:k("key"),isNonEditable:w("key"),isLastColumn:n&&"key"===n[n.length-1],children:(0,f.jsx)(ot,{children:o||"Key"})}),(null==n?void 0:n.includes("variableType"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Hn,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"key",nextColumn:"variableType",parentWidth:y}),(0,f.jsx)(rt,{type:"variableType",role:"columnheader",columnWidth:k("variableType"),isNonEditable:w("variableType"),isLastColumn:n&&"variableType"===n[n.length-1],children:(0,f.jsx)(ot,{children:d||"Type"})})]}),(null==n?void 0:n.includes("value"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Hn,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:n.includes("variableType")?"variableType":"key",nextColumn:"value",parentWidth:y}),(0,f.jsx)(rt,{type:"value",role:"columnheader",columnWidth:k("value"),isNonEditable:w("value"),isLastColumn:n&&"value"===n[n.length-1],children:(0,f.jsx)(ot,{children:r||"Value"})})]}),(null==n?void 0:n.includes("description"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Hn,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"description",parentWidth:y}),(0,f.jsx)(rt,{type:"description",role:"columnheader",columnWidth:k("description"),isNonEditable:w("description"),isLastColumn:n&&"description"===n[n.length-1],children:(0,f.jsx)(ot,{children:a||"Description"})})]}),(null==n?void 0:n.includes("sessionValue"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Hn,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"sessionValue",parentWidth:y}),(0,f.jsx)(rt,{type:"sessionValue",role:"columnheader",columnWidth:k("sessionValue"),isNonEditable:w("sessionValue"),isLastColumn:n&&"sessionValue"===n[n.length-1],children:(0,f.jsx)(ot,{children:s||"Current value"})})]}),u.includes("sessionValue")&&(0,f.jsx)(dt,{allowedColumns:u,persistAll:h,resetAll:p,disablePersistActionTooltip:g,disableResetActionTooltip:m,disableVariablePersistAction:b,disableVariableResetAction:v}),(null==n?void 0:n.includes("options"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Hn,{handleResize:l,showColumns:n,currentWidth:t,prevColumn:"value",nextColumn:"options",parentWidth:y}),(0,f.jsx)(rt,{type:"options",role:"columnheader",columnWidth:k("options"),isNonEditable:w("options"),isLastColumn:n&&"options"===n[n.length-1],children:(0,f.jsx)(ot,{children:c||"Options"})})]})]})]})})}const ut=["defaultValue","entityType","values","onChange","showColumns","nonEditableKeys","nonEditableValues","nonEditableDescriptions","nonEditableToggles","nonEditableOptions","keyHeading","valueHeading","sessionHeading","optionsHeading","optionsTooltip","nonEditableVariableTypes","hideBulkOptions","maskStatesMap","toggleMaskValue","initialColumnWidths","disableVariablePersistAction","disableVariableResetAction","disableSecretVariablesSync","disablePersistActionTooltip","disableResetActionTooltip","onDeleteRow","disallowDuplicates"];let ht;const pt=a().div(ht||(ht=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-top: thin solid var(--border-color-default);
  min-height: 0;
`));function bt(e){let{defaultValue:n="",entityType:t,values:o,onChange:r,showColumns:a,nonEditableKeys:s,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,keyHeading:b,valueHeading:g,sessionHeading:v,optionsHeading:m,optionsTooltip:x,nonEditableVariableTypes:y,hideBulkOptions:C,maskStatesMap:w,toggleMaskValue:k,initialColumnWidths:j,disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,onDeleteRow:R,disallowDuplicates:Z}=e,M=(0,c.Z)(e,ut);const A={showColumns:a,allowedColumns:M.allowedColumns,nonEditableKeys:s,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,hideBulkOptions:C},W=(0,i.useRef)(r);W.current=r;const[O,P]=(0,i.useState)(function(e,n){let t;return n?t=n:(t=new Array(e.length).fill(Math.floor(100/e.length)),t[t.length-1]=t.at(-1)+(100-t.reduce(((e,n)=>e+n)))),t}(a,j)),F=(0,i.useCallback)(((e,l={})=>{let i="text";"environment"!==t&&"globals"!==t||(i="default"),"collection"===t&&(i="string");const o={key:l.key||n,value:l.value||n,description:l.description||n,type:l.type||i,id:e};return M.allowedColumns.includes("sessionValue")&&(o.sessionValue=l.sessionValue||null),M.disableToggle||(o.enabled=!0),o}),[n,M.disableToggle,t,M.allowedColumns]),z=(0,i.useCallback)((()=>{if(o.length>0){var e=null==o?void 0:o.reduce((function(e,n){return e.id>=n.id?e:n}),{});return n=e,[Object,Array].includes((n||{}).constructor)&&0===Object.entries(n||{}).length?0:e.id+1}var n;return 0}),[o]),B=(0,i.useCallback)(((e,n)=>{const t=[...o],i=t.length===e?[...t,F(z(),n)]:t.map((t=>t.id===e?(0,l.Z)({},t,n):(0,l.Z)({},t)));null==W.current||W.current(i)}),[o,F,z]),N=(0,i.useCallback)((e=>{const n=[...o],t=null==n?void 0:n.filter(((n={})=>n.id!==e));R&&R(e),null==W.current||W.current(t)}),[o,R]),$=(0,f.jsx)(ct,(0,l.Z)({},A,{keyHeading:b||"Key",valueHeading:g||"Value",sessionHeading:v||"Current value",optionsHeading:m||"Options",optionsTooltip:x,nonEditableVariableTypes:y,handleWidthChange:P,currentWidth:O,persistAll:()=>{if(V)return;let e=!1;const n=o.reduce(((n,t)=>{const i=t.enabled?t.sessionValue:t.value;return t.isSessionValueDeleted?(e=!0,n):(!e&&(e=!(S&&t.type===ee)),S&&t.type===ee?n.push(t):n.push((0,l.Z)({},t,{value:i})),n)}),[]);e&&(null==W.current||W.current(n))},resetAll:()=>{if(E)return;let e=!1;const n=o.map((n=>{const t=n.enabled?n.value:n.sessionValue;return S&&n.type===ee?n:(e=!0,(0,l.Z)({},n,{sessionValue:t,isSessionValueDeleted:!1}))}));e&&(null==W.current||W.current(n))},disableVariablePersistAction:V,disableVariableResetAction:E,disablePersistActionTooltip:T,disableResetActionTooltip:D})),L=(0,i.useMemo)((()=>M.disableCreate?o:[...o,F(z())]),[o,M.disableCreate,F,z]),H=(0,i.useMemo)((()=>Z?L.map(((e,n)=>{if(e.enabled&&""!==e.key)for(let t=n+1;t<L.length;t++){const n=L[t];if(e.key===n.key&&n.enabled&&""!==n.key)return(0,l.Z)({},e,{isOverridden:!0})}return(0,l.Z)({},e,{isOverridden:!1})})):null),[L,Z]);return(0,f.jsxs)(pt,{children:[o.length>0||!M.disableCreate?$:null,(0,f.jsx)(Pn,(0,l.Z)({},A,M,{nonEditableVariableTypes:y,values:L,onChange:B,onRemove:N,currentWidth:O,maskStatesMap:w,toggleMaskValue:k,onPersist:e=>{if(V)return;let n=!1;const t=o.reduce(((t,i)=>{if(i.id===e){if(i.isSessionValueDeleted)return n=!0,t;S&&i.type===ee?t.push(i):(n=!0,t.push((0,l.Z)({},i,{value:i.sessionValue})))}else t.push(i);return t}),[]);n&&(null==W.current||W.current(t))},onReset:e=>{if(E)return;let n=!1;const t=o.map((t=>t.id!==e||S&&t.type===ee?t:(n=!0,(0,l.Z)({},t,{sessionValue:t.value,isSessionValueDeleted:!1}))));n&&(null==W.current||W.current(t))},onBlur:(e,n,t)=>{const i=o.findIndex((n=>n.id===e)),r=-1!==i&&o[i].sessionValue;let a;"value"===n&&-1!==i&&null===r&&t.value&&(a=[...o],a[i]=(0,l.Z)({},t,{sessionValue:t.value}),null==W.current||W.current(a))},disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,duplicateWarningsMap:H}))]})}var gt=t(68206);const vt=W(((e,...n)=>e(...n)),100),ft=({onSearchValueChange:e})=>{const[n,t]=(0,i.useState)("");return(0,f.jsx)("div",{className:"search-variable",children:(0,f.jsx)(gt.Z,{placeholder:"Filter variables",value:n,type:"search",onChange:n=>{t(n.target.value),vt(e,n.target.value)},onClear:()=>{t(""),e("")},prefix:!0,name:"filter-values"})})};function mt(e,n){try{const t=(0,ae.castNonStringTypesToString)(e),l=(0,ae.castNonStringTypesToString)(n),i=t.toLowerCase(),o=l.toLowerCase();return i.indexOf(o)}catch(t){return console.error("PatterSearch~caseInsensitiveIndexof: Failed with error",t,e,n),-1}}let xt;const yt=a().div(xt||(xt=(e=>e)`
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
`),(({enableScroll:e})=>e&&"height: 100%;")),Ct=(e,n)=>!n||!(!e.key||-1===mt(e.key,n))||"secret"!==e.type&&(!(!e.value||-1===mt(e.value,n))||!(!e.sessionValue||-1===mt(e.sessionValue,n))||void 0),wt=(e,n)=>{if(!n)return null;const t=[];for(const[l,i]of e.entries())Ct(i,n)&&t.push(l);return t},kt=(0,d.observer)((function(e){const{values:n,onChange:t,tableName:o,disallowDuplicates:r,allowedColumns:a,showColumns:d,onColumnToggle:c,keyPlaceholder:u,valuePlaceholder:h,maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,enableFiltering:v=!1,enableScroll:m,isDirty:x=!1}=e,[y,C]=(0,i.useState)([]),[w,k]=(0,i.useState)(""),[j,V]=(0,i.useState)(null),E=(0,i.useRef)(x),S=(0,i.useCallback)((e=>{if(0===y.length)return!0;e.preventDefault();const l=null==n?void 0:n.filter(((e,n)=>!(null!=y&&y.includes(n))));y.sort(),0!==y[0]&&(y.length,n.length),C([]),t(l)}),[n,t,y]),T=(0,i.useCallback)((()=>{y.length>0&&C([])}),[y]),D=(0,i.useMemo)((()=>{let e=0;return(0,s.computed)((()=>null==n?void 0:n.map((n=>(0,l.Z)({},n,{id:e++})))))}),[n]).get();return(0,i.useEffect)((()=>{const e=wt(D,w);V(e)}),[w]),(0,i.useEffect)((()=>{if(E.current&&!x){const e=wt(D,w);V(e)}E.current=x}),[x]),(0,f.jsxs)(yt,{role:"table","aria-label":o,enableScroll:m,children:[v&&(0,f.jsx)(ft,{onSearchValueChange:k}),(0,f.jsx)(bt,(0,l.Z)({},e,{disallowDuplicates:r,onChange:t,values:D,selectedRows:y,deleteSelectedRows:S,onBeforeInput:T,allowedColumns:a,showColumns:d,onColumnToggle:c,keyPlaceholder:void 0===u?"Key":u,valuePlaceholder:void 0===h?"Value":h,descriptionPlaceholder:"Description",maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,filteredIndices:j,searchValue:w,onDeleteRow:e=>{if(!w)return;const n=((e,n)=>{const t=[],l=new Set(n);let i=0;for(const n of e)l.has(n)?i++:t.push(n-i);return t})(j,[e]);V(n)}})),(0,f.jsx)(bn.Modals.Ui.ModalDialog,{uid:"kv-editor-variable-type-change-confirmation"})]})})),jt=e=>(0,f.jsx)(kt,(0,l.Z)({},e))},23180:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(7560),i=t(40540),o=t.n(i),r=t(207),a=o().createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("g",{clipPath:"url(#clip0)"},o().createElement("path",{d:"M6.56065 5.85356L9.70711 2.70711L9 2L5.85355 5.14645L2.70711 2.00002L2 2.70712L5.14644 5.85356L2 9L2.70711 9.70711L5.85355 6.56067L9 9.70712L9.70711 9.00002L6.56065 5.85356Z",fill:"#6B6B6B"})),o().createElement("defs",null,o().createElement("clipPath",{id:"clip0"},o().createElement("rect",{width:"12",height:"12",fill:"white"})))),s=o().forwardRef((function(e,n){return o().createElement(r.Z,(0,l.Z)({},e,{svg:a,ref:n}))}));s.getName=function(){return"icon-action-close-stroke-small"};const d=s},29225:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(7560),i=t(40540),o=t.n(i),r=t(207),a=o().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z",fill:"#6B6B6B"})),s=o().forwardRef((function(e,n){return o().createElement(r.Z,(0,l.Z)({},e,{svg:a,ref:n}))}));s.getName=function(){return"icon-action-options-stroke"};const d=s}}]);
//# sourceMappingURL=6854.964defeec041ce38.js.map