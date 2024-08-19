"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[9513],{89513:(e,r,t)=>{t.r(r),t.d(r,{default:()=>_});var a=t(40540),o=t(59530),n=t.n(o),s=t(22833),i=t.n(s),l=t(50297),c=t(70355),h=t(63622),d=t(58560),g=t(81397),u=t(84591),p=t(53195),m=t(35736),x=t(1590),v=t(44692),f=t(84452);var S=t(52322);const y=(0,a.lazy)((0,x.loadRemoteModule)("code-editor/CodeEditor")),b=(0,l.observer)((()=>{const e=(0,a.useRef)(null),{schemaString:r}=(0,v.cY)(),[t,o]=(0,v.fW)(),n=(0,a.useMemo)((()=>[{provider:function(e){const r=e;return async function(e,t){const a=e.getWordBeforePosition(t),o=e.getValue();return await f.agentManager.agent.getGQLAutoCompleteSuggestions(r,o,t,a)}}(r)}]),[r]),s=(()=>{const e=(0,a.useRef)(),[r,t]=(0,a.useState)([]),{schemaString:o}=(0,v.cY)(),[n]=(0,v.fW)();return(0,a.useEffect)((()=>n&&o?(e.current=setTimeout((()=>{f.agentManager.agent.validateGQLQuery(n,o).then((e=>t(e)))}),250),()=>{clearTimeout(e.current)}):t([])),[n,o]),r})();return(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(m.Z,{}),children:(0,S.jsx)(y,{ref:e,fontSize:12,language:"graphql",value:t,onChange:o,codeCompletionProviders:n,validationErrors:s,wordWrap:!0,autoFormat:!0})})}));var j=t(85332);const w=(0,a.lazy)((0,x.loadRemoteModule)("code-editor/CodeEditor")),P=(0,l.observer)((()=>{const[e,r]=(0,v.sY)(),t=(0,j.n)();return(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(m.Z,{}),children:(0,S.jsx)(w,{fontSize:12,language:"postman_json",value:e,onChange:r,wordWrap:!0,autoFormat:!0,codeCompletionProviders:[{provider:t}]})})}));let q,C,R,z,M,k,E,Y=e=>e;const Q=n().div(q||(q=Y`
  height: 100%;
  display: flex;
  flex-direction: row;

  &.layout-2-column {
    flex-direction: column;
  }
`)),W=n()(h.ZP)(C||(C=Y``)),B=n()(u.Z)(R||(R=Y`
  margin-left: var(--spacing-xs);
`)),Z=n()(d.Z)(z||(z=Y`
  height: calc(100% - var(--spacing-l));
  overflow: hidden;

  .text-editor {
    height: calc(100% - var(--spacing-s)) !important;
    width: calc(100% - var(--spacing-s)) !important;
    margin: var(--spacing-xs) var(--spacing-zero) var(--spacing-zero);
    border: var(--border-width-default) solid var(--border-color-default);
    border-radius: var(--border-radius-s);
  }

  .monaco-editor {
    .margin-view-overlays .line-numbers {
      color: var(--content-color-tertiary);
    }

    .scroll-decoration {
      left: var(--spacing-l) !important;
      right: var(--spacing-l) !important;
      width: auto !important;
    }

    .monaco-placeholder {
      font-size: var(--text-size-m);
      line-height: var(--line-height-m);
      color: var(--content-color-tertiary);
    }
  }
`)),L=n().div(M||(M=Y`
  flex: 1;
  height: 100%;
  margin: var(--spacing-zero) var(--spacing-xs);
`)),A=n().div(k||(k=Y`
  z-index: 7;
  cursor: ew-resize;
  width: 10px;
  margin: var(--spacing-xl) calc(-1 * var(--spacing-xs)) var(--spacing-xs);

  &.layout-2-column {
    cursor: ns-resize;
    height: 10px;
    margin: calc(-1 * var(--spacing-xs)) var(--spacing-xs);
    width: 100%;
  }
`)),G=n()(L)(E||(E=Y``)),N=(0,l.observer)((()=>{const e=(0,a.useRef)(null),r=(0,a.useRef)(null),{layout:t}=(0,p.W)(),o=(0,a.useMemo)((()=>i()({"layout-2-column":"horizontal"===t})),[t]);return(0,S.jsxs)(Q,{ref:e,className:o,children:[(0,S.jsxs)(L,{ref:r,children:[(0,S.jsx)(W,{type:"strong",children:"QUERY"}),(0,S.jsx)(Z,{children:(0,S.jsx)(b,{})})]}),(0,S.jsx)(c.DraggableCore,{offsetParent:e.current,onDrag:(a,o)=>{const n=e.current;if(!n||!r.current)return;let s,i;"vertical"===t?(s=Math.min(o.x,n.getBoundingClientRect().width),i=Math.max(n.getBoundingClientRect().width-o.x,0)):(s=Math.min(o.y,n.getBoundingClientRect().height),i=Math.max(n.getBoundingClientRect().height-o.y,0));let l=s/i;l<1?l=1:l>4&&(l=4),r.current.style.flex=l.toString()},children:(0,S.jsx)(A,{className:o})}),(0,S.jsxs)(G,{children:[(0,S.jsxs)(W,{type:"strong",children:["GRAPHQL VARIABLES",(0,S.jsx)(g.Z,{placement:"top",content:"Define variables in JSON format to use in the query",children:(0,S.jsx)(B,{})})]}),(0,S.jsx)(Z,{children:(0,S.jsx)(P,{})})]})]})}));N.displayName="GraphQLEditor";const _=N},44692:(e,r,t)=>{t.d(r,{EY:()=>l,Ot:()=>i,Y_:()=>d,bl:()=>s,cY:()=>c,fW:()=>o,rl:()=>h,sY:()=>n});var a=t(4779);const o=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.query,e.graphqlPayloadStore.setQuery]},n=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.variables,e.graphqlPayloadStore.setVariables]},s=()=>(0,a.x)().graphqlPayloadStore.schemaStore.introspectionHandlers.handleIntrospection,i=()=>(0,a.x)().graphqlPayloadStore.schemaStore.cancelSchemaFetching,l=()=>{const e=(0,a.x)();return[e.graphqlPayloadStore.schemaStore.schemaMeta,e.graphqlPayloadStore.schemaStore.setSchemaMeta]},c=()=>{const e=(0,a.x)(),r=h(),[t]=l();return"noSchema"===t||r?{schemaString:""}:{schemaString:e.graphqlPayloadStore.schemaStore.schemaString}},h=()=>(0,a.x)().graphqlPayloadStore.schemaStore.error,d=()=>(0,a.x)().graphqlPayloadStore.schemaStore.isRefreshing}}]);
//# sourceMappingURL=9513.ab3a7da0b6951d87.js.map