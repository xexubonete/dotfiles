"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[9205],{29205:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Se});var n=r(7560),o=r(68367),a=r(39778),i=r(71534),s=r(34613),l=r(40505),c=r.n(l),d=r(59530),u=r.n(d),p=r(40540),v=r(21180),x=r(1765),g=r(76971);const f=(0,g.createCommand)();function h({onKeyPress:e}){const[t]=(0,x.useLexicalComposerContext)();return(0,p.useEffect)((()=>t.registerCommand(g.KEY_DOWN_COMMAND,(e=>(t.dispatchCommand(f,e),!1)),g.COMMAND_PRIORITY_LOW))),(0,p.useEffect)((()=>t.registerCommand(f,(t=>e(t)),g.COMMAND_PRIORITY_LOW)),[t,e]),null}function b(){const[e]=(0,x.useLexicalComposerContext)();return(0,p.useEffect)((()=>e.registerNodeTransform(g.LineBreakNode,(e=>{e.remove()}))),[e]),null}function m({onPaste:e}){const[t]=(0,x.useLexicalComposerContext)();return(0,p.useEffect)((()=>t.registerCommand(g.PASTE_COMMAND,(t=>(e(t),!1)),g.COMMAND_PRIORITY_LOW)),[t,e]),null}function y({onChange:e,value:t}){const[r]=(0,x.useLexicalComposerContext)();return(0,p.useEffect)((()=>r.registerTextContentListener((t=>{e(t)}))),[r,e]),(0,p.useEffect)((()=>{r.update((()=>{const e=(0,g.$getRoot)(),n=e.getTextContent();if(n===t||!n&&!t)return;const o=r.getRootElement()===document.activeElement;(0,g.$setSelection)(null);const a=e.getFirstChild(),i=(0,g.$createParagraphNode)(),s=(0,g.$createTextNode)(t);i.append(s),null==a||a.replace(i),o&&i.selectEnd()}))}),[r,t]),null}var C=r(21730),E=r.n(C),w=r(6443),k=r(19578),M=r(52322);const j=({domNode:e,value:t})=>{if(!e||!e.outerHTML)return null;e.className=t?"resolved-variable":"unresolved-variable";const r=(0,M.jsx)("span",{dangerouslySetInnerHTML:{__html:e.outerHTML}});return(0,M.jsx)(w.Z,{trigger:r,value:t})};class _ extends g.TextNode{constructor(e,t,r){super(t,r),this.__variable=void 0,this.__variable=e}canInsertTextAfter(){return!1}createDOM(e){const t=super.createDOM(e),r=this.__variable,n=document.createElement("div"),o=(0,M.jsx)(k.ThemeContextProvider,{children:(0,M.jsx)(j,{value:r,domNode:t})});return E().render(o,n),n.firstChild}updateDOM(){return!0}}class O extends _{static getType(){return"unresolved-variable-node"}static clone(e){return new O(null,e.__text,e.__key)}}function T(e){return new O(null,e)}var I=r(98366);class N extends _{static getType(){return"resolved-variable-node"}static clone(e){return new N(e.__variable,e.__text,e.__key)}get variable(){return this.__variable}}function R(e,t){const r=(0,I.E0)(e,t);return new N(r,e)}function A(e,t){const r=(0,g.$createTextNode)(t);return e.replace(r),e.remove(),r}function D(e,t,r,n,o){const[a]=(0,x.useLexicalComposerContext)();(0,p.useEffect)((()=>{if(n.current)return a.registerNodeTransform(e,t);a.setEditable(!1);const o=a.registerNodeTransform(e,t);return requestAnimationFrame((()=>{a.setEditable(r)})),o}),[...o])}const L=(e,t,r)=>{D(g.TextNode,(t=>{t.getTextContent()&&function(e,t=[]){const r=e.getTextContent(),n=(0,I.rn)(r);let o=e;for(const e of n){var a;if(!o)return;const n=e.lastIndex-(r.length-(null==(a=o.__text)?void 0:a.length)||0);let s;if(n===e.name.length){const e=o.splitText(n);s=e[0],o=e[1]}else{var i;s=o.splitText(n-e.name.length)[1];const t=null==(i=s)?void 0:i.splitText(e.name.length);s=null==t?void 0:t[0],o=null==t?void 0:t[1]}if(!s)return;const l=(0,I.Q0)(e.name,t)?R(e.name,t):T(e.name);s.replace(l),s.remove()}}(t,e)}),r.isEditable,r.isEditorInFocus,[e])};function P(e,t){if(typeof e!=typeof t)return!1;const r=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===t:Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(((e,r)=>P(e,t[r]))):"object"===r&&(null===e&&null===t||null!==e&&null!==t&&!Array.isArray(e)&&!Array.isArray(t)&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((r=>P(e[r],t[r]))))}const F=(e,t,r)=>{D(N,(t=>{const r=t.getTextContent();if((0,I.CS)(r,e))!function(e,t){const r=T(t);e.replace(r),e.remove()}(t,r);else if((0,I.yG)(r)){if(!P((0,I.E0)(r,e),t.variable)){const n=R(r,e);t.replace(n)}}else A(t,r)}),r.isEditable,r.isEditorInFocus,[e])},H=(e,t,r)=>{D(O,(t=>{const r=t.getTextContent();(0,I.Q0)(r,e)?function(e,t,r){const n=R(t,r);e.replace(n),e.remove()}(t,r,e):(0,I.yG)(r)||A(t,r)}),r.isEditable,r.isEditorInFocus,[e])};var z=r(76802);function S({variables:e,isEditable:t,autofocus:r=!1}){const[n]=(0,x.useLexicalComposerContext)(),[o]=function(e,t){const r=(0,p.useRef)(t);return(0,p.useEffect)((()=>(0,z.mergeRegister)(e.registerCommand(g.FOCUS_COMMAND,(()=>(r.current=!0,!1)),g.COMMAND_PRIORITY_HIGH),e.registerCommand(g.BLUR_COMMAND,(()=>(r.current=!1,!1)),g.COMMAND_PRIORITY_HIGH))),[e]),[r]}(n,null!=r&&r);return L(e,n,{isEditable:t,isEditorInFocus:o}),F(e,n,{isEditable:t,isEditorInFocus:o}),H(e,n,{isEditable:t,isEditorInFocus:o}),null}var Y=r(10892),$=r(20856),K=r(95362),G=r(70262),B=r(98276);let U,V,W,Z,Q,q=e=>e;const J=(0,p.forwardRef)((({name:e,scope:t,type:r,onClick:n,onMouseEnter:o,isSelected:a,toggleMaskValue:i,isMasked:s},l)=>(0,M.jsxs)(re,{onMouseEnter:o,isSelected:a,ref:l,role:"option","aria-label":e,"aria-selected":a,onMouseDown:e=>{null==n||n(),e.preventDefault()},children:[(0,M.jsx)(ne,{scope:t,"aria-label":`scope: ${t}`,role:"presentation",children:t[0].toUpperCase()}),(0,M.jsxs)(X,{children:[(0,M.jsx)(te,{"aria-label":`key: ${e}`,role:"presentation",children:e}),r===B.SECRET&&(0,M.jsx)(ee,{onMouseDown:e=>{i(),e.stopPropagation()},onMouseLeave:()=>{i(!0)},children:s?(0,M.jsx)(K.Z,{}):(0,M.jsx)(G.Z,{})})]})]}))),X=u().div(U||(U=q`
  /* To ensure variable name takes entire space and places the secret icon at the end */
  flex: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
`)),ee=u().div(V||(V=q`
  display: flex;
  margin-left: auto;
  margin-right: var(--spacing-xs);
  align-items: center;
`)),te=u().div(W||(W=q`
  color: var(--content-color-primary);
  margin-left: var(--spacing-s);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
  font-weight: var(--text-weight-medium);
`)),re=u().div(Z||(Z=q`
  display: flex;
  padding: 5px;
  border-bottom: 1px solid var(--border-color-default);
  justify-content: flex-start;
  background-color: ${0};

  /* To ensure the variables with empty key are also getting proper height */
  min-height: var(--text-size-l);
  cursor: pointer;
  align-items: center;
`),(e=>e.isSelected?"var(--highlight-background-color-secondary)":"transparent")),ne=u().div(Q||(Q=q`
  display: inline-flex;
  height: 17px;
  width: 17px;
  justify-content: center;
  border-radius: 1px;

  /* We don't want the scope to shrink */
  flex: none;
  text-align: center;
  line-height: 17px;
  color: var(--content-color-constant);
  font-weight: var(--text-weight-m);
  font-size: var(--text-size-m);
  background-color: ${0};
`),(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),oe=J;let ae,ie,se,le=e=>e;function ce({label:e,value:t,isMasked:r,isOverridden:n}){if(!1===t)return null;const o="string"==typeof t&&r?"*".repeat(t.length):t;return(0,M.jsxs)(de,{children:[(0,M.jsx)(ue,{children:e}),(0,M.jsx)(pe,{isOverridden:n,children:"string"==typeof t?o:t})]})}const de=u().div(ae||(ae=le`
  display: flex;
  margin: var(--spacing-xs);
`)),ue=u().div(ie||(ie=le`
  flex: 0.3;
  margin-right: var(--spacing-xs);
  color: var(--content-color-secondary);
`)),pe=u().div(se||(se=le`
  flex: 0.7;
  margin: 0 var(--spacing-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ${0};
`),(({isOverridden:e})=>e&&"text-decoration: line-through;"));let ve,xe,ge,fe=e=>e;const he=({variable:e})=>{const{scope:t,overriddenBy:r}=e;if(!r)return null;const n={globals:"global",collection:"collection",environment:"environment"},o=n[t],a=n[r.scope];return r.scope===t?(0,M.jsxs)(Ce,{children:["The value is overridden because duplicates of this variable are active in the ",a,". You can enable or disable variables on the ",a," page."]}):(0,M.jsxs)(Ce,{children:["This variable exists in both ",a," and ",o," ","scopes. ",(0,M.jsx)("span",{style:{textTransform:"capitalize"},children:a})," variables overwrite ",o," variables."]})},be=({item:e,isMasked:t})=>{if(!e)return(0,M.jsx)(me,{});const r={globals:"Global",collection:"Collection",environment:"Environment"}[e.variable.scope],n=Boolean(e.variable.overriddenBy);return(0,M.jsxs)(me,{children:["dynamic"===e.variable.type?(0,M.jsx)(ce,{label:"VALUE",value:(0,I.Fn)(e.variable.description)}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ce,{label:"INITIAL",value:(0,I.Fn)(e.variable.value),isMasked:e.variable.type===B.SECRET&&t,isOverridden:n}),(0,M.jsx)(ce,{label:"CURRENT",value:(0,I.Fn)(e.variable.sessionValue),isMasked:e.variable.type===B.SECRET&&t,isOverridden:n})]}),n&&(0,M.jsx)(ce,{label:"",value:(0,M.jsx)(ye,{children:"OVERRIDDEN"})}),(0,M.jsx)(ce,{label:"SCOPE",value:r}),n&&(0,M.jsx)(he,{variable:e.variable})]})},me=u().div(ve||(ve=fe`
  flex: 0.6;
  height: 100%;
  padding: 0 var(--spacing-xs);
  overflow: hidden auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: var(--text-size-xs);
  color: var(--content-color-primary);
  text-align: left;
`)),ye=u().div(xe||(xe=fe`
  background: var(--base-color-warning);
  border-radius: 2px;
  padding: 1px 2px;
  color: var(--content-color-constant);
  width: fit-content;
  font-size: var(--text-size-xs);
  line-height: 12px;
`)),Ce=u().div(ge||(ge=fe`
  font-size: var(--text-size-xs);
  padding: var(--spacing-xs);
  border-top: 1px solid var(--border-color-default);
  color: var(--content-color-secondary);
  margin-top: var(--spacing-s);
  line-height: var(--line-height-s);
`));class Ee extends Y.MenuOption{constructor(e,t){super(e),this.variable=void 0,this.variable=(0,n.Z)({},t,{sessionValue:(0,I.Fn)(t.sessionValue),value:(0,I.Fn)(t.value),key:(0,I.Fn)(t.key)})}}let we,ke,Me=e=>e;function je(e){const t=e.lastIndexOf("{{");return-1==t?null:{leadOffset:t,matchingString:e.slice(t+2,e.length),replaceableString:e.slice(t,e.length)}}function _e({variables:e,onEnter:t}){const[r]=(0,x.useLexicalComposerContext)(),[n,o]=(0,p.useState)(null);(0,p.useEffect)((()=>r.registerCommand(g.KEY_ENTER_COMMAND,(()=>null===n&&(t(),!1)),g.COMMAND_PRIORITY_HIGH)),[n,r,t]),(0,p.useEffect)((()=>r.registerCommand(f,(e=>!(null===n||!["ArrowDown","ArrowUp","Tab","Enter"].includes(e.key))),g.COMMAND_PRIORITY_HIGH)),[r,n]);const a=e.map((e=>new Ee(e.id,e))),[i,s]=(0,p.useState)(a);return(0,p.useEffect)((()=>{const t=e.filter((e=>{const t=(0,I.Fn)(e.key).toLowerCase();return!n||t.includes(n.toLowerCase())})).map(((e,t)=>new Ee(String(t),e)));s(t)}),[n,e]),(0,M.jsx)(Y.LexicalTypeaheadMenuPlugin,{onSelectOption:(e,t,n)=>{r.update((()=>{const r=(0,g.$createTextNode)(`{{${(0,I.Fn)(e.variable.key)}}}`);null==t||t.replace(r),r.select(),n(),o(null)}))},onQueryChange:o,menuRenderFn:(e,t)=>{const[r,n]=(0,p.useState)(!0),[o,a]=(0,p.useState)(!0);if(!e.current)return null;const i=t.options;if(0===i.length)return null;const s="number"==typeof t.selectedIndex?i[t.selectedIndex]:void 0;return(0,M.jsx)($.ZP,{isOpen:r,onClickOutside:()=>n(!1),placement:"bottom-start",triggerRef:e.current,padding:"var(--spacing-s)",maxWidth:"initial",children:(0,M.jsxs)(Oe,{id:"variable-suggestions","aria-label":"variable suggestions",role:"listbox",children:[(0,M.jsx)(Te,{children:i.map(((e,r)=>(0,M.jsx)(oe,{ref:e.ref,onClick:()=>{t.selectOptionAndCleanUp(e)},onMouseEnter:()=>{t.setHighlightedIndex(r)},isSelected:t.selectedIndex===r,scope:e.variable.scope,name:e.variable.key,type:e.variable.type,toggleMaskValue:e=>a("boolean"==typeof e?e:!o),isMasked:t.selectedIndex!==r||o},e.key)))}),(0,M.jsx)(be,{item:s,isMasked:o})]})})},options:i,triggerFn:je})}const Oe=u().div(we||(we=Me`
  border-radius: var(--border-radius-default);
  height: 196px;
  width: 386px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  background-color: var(--background-color-primary);
  display: flex;
  flex-direction: row;
`)),Te=u().div(ke||(ke=Me`
  flex: 0.4;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  border-right: var(--border-width-default) solid var(--border-color-default);
  font-family: var(--font-family-default);
`)),Ie=(e,t)=>{(0,p.useEffect)((()=>{if(t)return(0,z.mergeRegister)(e.registerCommand(g.BLUR_COMMAND,(()=>(t(!1),!1)),g.COMMAND_PRIORITY_HIGH),e.registerCommand(g.CLICK_COMMAND,(()=>(t(!0),!1)),g.COMMAND_PRIORITY_HIGH),e.registerCommand(g.KEY_DOWN_COMMAND,(e=>1===e.key.length?(t(!0),!1):!(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||("Escape"===e.key?(t(!1),1):"Backspace"!==e.key||(t(!0),1)))),g.COMMAND_PRIORITY_HIGH))}),[e,t])};function Ne({onHardFocus:e}){const[t]=(0,x.useLexicalComposerContext)();return Ie(t,e),null}function Re({autofocus:e=!1}){const[t]=(0,x.useLexicalComposerContext)();return(0,p.useEffect)((()=>{e&&t.focus()}),[t]),null}let Ae,De,Le,Pe=e=>e;const Fe={namespace:"editor",theme:{paragraph:"editor-paragraph",root:"editor-root"},onError(e){throw e},nodes:[N,O]};function He(){return(0,M.jsx)(c(),{onError:e=>{(0,v.logError)(e,{stack:void 0,appId:"variable-suggestions",crash:!0,errorElementId:"postman-input"})},children:(0,M.jsx)("div",{children:"Snap! something went wrong"})})}function ze(e){var t;const r=(0,n.Z)({},Fe,{editable:e.isEditable}),i=null==(t=(0,B.useActiveAndDynamicVariables)())?void 0:t.data;return(0,M.jsxs)(o.LexicalComposer,{initialConfig:r,children:[(0,M.jsxs)(Ge,{children:[(0,M.jsx)(a.PlainTextPlugin,{contentEditable:(0,M.jsx)($e,{className:"content-editable",ariaLabel:e.ariaLabel,"data-testid":e.dataTestId,isEditable:e.isEditable}),placeholder:(0,M.jsx)(Ye,{text:e.placeholder}),ErrorBoundary:He}),(0,M.jsx)(s.HistoryPlugin,{}),(0,M.jsx)(y,{onChange:t=>e.onChange(t),value:e.value}),e.allowEnter?null:(0,M.jsx)(b,{}),e.onHardFocus&&(0,M.jsx)(Ne,{onHardFocus:e.onHardFocus}),(0,M.jsx)(h,{onKeyPress:e.onKeyDown}),(0,M.jsx)(m,{onPaste:e.onPaste}),(0,M.jsx)(Re,{autofocus:e.autofocus})]}),(0,M.jsx)(S,{variables:i||[],isEditable:e.isEditable,autofocus:e.autofocus}),(0,M.jsx)(_e,{variables:i||[],onEnter:e.onEnter})]})}const Se=(0,p.memo)(ze);function Ye({text:e}){return(0,M.jsx)(Ke,{className:"placeholder",children:e})}const $e=u()(i.ContentEditable)(Ae||(Ae=Pe`
  position: absolute;
  top: var(--spacing-zero);
  left: var(--spacing-zero);
  width: 100%;

  /* We are overwriting background color to make sure when input grows and shows on top
   * of other elements, it should have a background color to ensure visibility
   */
  background-color: ${0};
  color: var(--content-color-primary);
  outline: none;
  margin-top: auto;
  font-size: var(--font-size-default);
  display: flex;
  align-items: center;
  overflow: auto;
  line-height: 1.5;

  .editor-paragraph {
    width: 100%;
    margin: var(--spacing-zero);
  }

  :focus {
    z-index: 10;
  }

  :focus .editor-paragraph {
    /* To make sure the input starts with some distance to border */
    padding: 0 var(--spacing-s);
  }

  /* we clip the text and show ellipsis in case the text is too long */
  :not(:focus) .editor-paragraph {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap !important;
  }

  .variable {
    color: var(--base-color-brand);
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  .unresolved-variable {
    color: var(--content-color-error);
    background: var(--background-color-error);

    /* No aether token is present for 2px */
    padding: 2px;
  }

  .resolved-variable {
    color: var(--base-color-brand);
    text-decoration: none;

    /* No aether token is present for 2px */
    padding: 2px;
  }
`),(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),Ke=u().div(De||(De=Pe`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-s);
  top: 0;
  left: 0;
  z-index: 20;
  user-select: none;
  pointer-events: none;
  height: 100%;
  color: var(--content-color-tertiary);
  line-height: 1.5;
`)),Ge=u().div(Le||(Le=Pe`
  background-color: var(--background-color-primary);
  position: relative;
  font-size: var(--font-size-default);
  width: 100%;
`))}}]);
//# sourceMappingURL=9205.3a10d721055d3465.js.map