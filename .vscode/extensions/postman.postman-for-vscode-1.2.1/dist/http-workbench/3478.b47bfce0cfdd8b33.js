"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[3478],{63478:(e,a,r)=>{r.r(a),r.d(a,{default:()=>z});var t=r(40540),i=r(59530),o=r.n(i),s=r(50297),n=r(49437),l=r(80047),c=r(23468),d=r(7560),h=r(52322);let p,u,v,w=e=>e;const f=(e,a)=>"Expires"===a?e?new Date(e).toUTCString():"Session":"string"==typeof e?e:"boolean"==typeof e?String(e):"",x=o().div(p||(p=w`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 90%;
`)),b=o().div(u||(u=w`
  height: var(--size-xs);
  width: 100%;
`)),g=o().textarea(v||(v=w`
  z-index: 1;
  position: relative;
  width: 95%;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  outline: transparent;
  resize: none;
  font-weight: inherit;
  left: calc(-1 * var(--spacing-xs));
  top: calc(-1 * var(--spacing-xs));
  background: var(--background-color-primary);
  padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs)
    var(--spacing-s);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  overflow: hidden;
`)),m=({value:e,column:{Header:a}})=>{const r=(0,t.useRef)(null),[i,o]=(0,t.useState)(!1),[s,n]=(0,t.useState)(0);return(0,t.useEffect)((()=>{if(i&&r.current&&r.current.parentElement){const e=1+Math.ceil(r.current.scrollHeight/32);n(e)}}),[i]),i?(0,h.jsx)(b,{children:(0,h.jsx)(g,{ref:r,value:f(e,a),onChange:()=>null,rows:s,onBlur:()=>o(!1),autoFocus:!0})}):(0,h.jsx)(x,{onClick:()=>o(!0),children:f(e,a)})},k=100/7*100+"%",H=[{Header:"Name",accessor:"name"},{Header:"Value",accessor:"value"},{Header:"Domain",accessor:"domain"},{Header:"Path",accessor:"path"},{Header:"Expires",accessor:"expires"},{Header:"HttpOnly",accessor:"httpOnly"},{Header:"Secure",accessor:"secure"}].map((e=>(0,d.Z)({},e,{Cell:m,width:k})));var y=r(59596);let j;const C=()=>(0,h.jsx)(n.Z,{title:"No cookies received from the server",description:"All your cookies and their associated domains will appear here.",children:(0,h.jsx)(l.Z,{name:"illustration-no-cookies"})}),S=o().div(j||(j=(e=>e)`
  [data-aether-id='aether-table'] {
    /* Let the clicked textarea expand without immediate size limitation. */
    padding-bottom: calc(5 * var(--spacing-l));
  }

  /* Hide scrollbar in table as wel as allow the textarea to flow over. */
  [data-aether-id='aether-table'],
  [data-aether-id='aether-table'] > div {
    overflow: visible;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`)),z=(0,s.observer)((()=>{const e=(0,y.Fp)();return 0===e.length?(0,h.jsx)(C,{}):(0,h.jsx)(S,{children:(0,h.jsx)(c.Z,{data:e||[],columns:H})})}))}}]);
//# sourceMappingURL=3478.b47bfce0cfdd8b33.js.map