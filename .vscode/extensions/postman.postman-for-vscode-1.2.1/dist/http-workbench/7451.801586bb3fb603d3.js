"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[7451],{43641:(e,t,r)=>{r.d(t,{G0:()=>o,Pn:()=>i,jx:()=>n});var a=r(21466),s=r(47069);async function o(){return localStorage.getItem(`${window.USER_ID}:workbench-layout`)||s.N}async function n(e){localStorage.setItem(`${window.USER_ID}:workbench-layout`,e),a.VSCodeCommunicationsService.postMessageToExtension({type:"SET_WORKBENCH_LAYOUT",payload:e})}function i(e){return a.VSCodeCommunicationsService.subscribe("SET_WORKBENCH_LAYOUT",(t=>{localStorage.setItem(`${window.USER_ID}:workbench-layout`,t),e(t)}))}},25883:(e,t,r)=>{r.d(t,{Z:()=>l}),r(40540);var a=r(59530),s=r.n(a),o=r(52322);let n;const i=s().div(n||(n=(e=>e)`
  display: inline-flex;
  width: calc(0.5 * var(--spacing-m));
  height: calc(0.5 * var(--spacing-m));
  margin-left: var(--spacing-xs);
  border-radius: calc(0.5 * var(--spacing-m));
  background-color: var(--base-color-success);

  &.error {
    background-color: var(--base-color-error);
  }
`)),l=({isError:e=!1})=>(0,o.jsx)(i,{"aria-label":e?"tab with errors":"tab with active values",className:e?"error":"","data-testid":"tab-indicator-dot"})},68637:(e,t,r)=>{r.d(t,{y:()=>i});var a=r(59530),s=r.n(a),o=r(15761);let n;const i=s()(o.Z)(n||(n=(e=>e)`
  box-sizing: border-box;
  width: auto;
  padding: ${0};
`),(e=>e.theme["spacing-zero"]))},96529:(e,t,r)=>{r.d(t,{B7:()=>a,Ei:()=>o,NF:()=>d,RM:()=>n,ll:()=>s,m3:()=>i,ob:()=>l});const a={JSON:"JSON",XML:"XML",HTML:"HTML",TEXT:"Text"},s={PRETTY:0,RAW:1,PREVIEW:2},o=(a.TEXT,"Enter the URL and click Send to get a response"),n="video",i="audio",l="image",d="embed"},5111:(e,t,r)=>{r.r(t),r.d(t,{ResponseTestResultsHeader:()=>K,ResponseTestResultsPanel:()=>V});var a=r(40540),s=r.n(a),o=r(59530),n=r.n(o),i=r(59596),l=r(68637),d=r(58560),c=r(27366),u=r(71132),h=r(87459);const p=e=>e.passed||e.skipped,m=e=>!e.skipped&&e.passed,g=e=>e.skipped,v={0:e=>e.passed||e.skipped||!!e.error,1:m,2:g,3:e=>!e.skipped&&!!e.error};var b=r(52322);let f,y,x=e=>e;const k=n()(h.Z)(f||(f=x`
  box-sizing: content-box;
  padding: var(--spacing-xs);
  min-width: 40px;
  text-align: center;
  border-radius: var(--border-radius-default);
`)),S=n().span(y||(y=x`
  color: var(--content-color-secondary);
`)),w=e=>m(e)?{status:"success",text:"pass",label:"Passed assertion item"}:g(e)?{status:"neutral",text:"skipped",label:"Skipped assertion item"}:{status:"critical",text:"fail",label:"Failed assertion item"},j=e=>null!=e?e:"";function T({item:e}){var t,r;const a=w(e);return(0,b.jsx)("li",{"aria-label":a.label,children:(0,b.jsxs)(d.Z,{gap:"spacing-s",alignItems:"center",children:[(0,b.jsx)(k,{status:a.status,text:a.text}),(0,b.jsx)(S,{children:p(e)?e.name:`${e.name} | ${j(null==(t=e.error)?void 0:t.name)}: ${j(null==(r=e.error)?void 0:r.message)}`})]})})}function C({activeTab:e,assertions:t}){const r=t.filter((t=>v[e](t)));return r.length>0?(0,b.jsx)(b.Fragment,{children:r.map((e=>(0,b.jsx)(T,{item:e},e.index)))}):(0,b.jsx)(d.Z,{height:"100%",alignItems:"center",justifyContent:"center",children:"No tests available for the selected filter"})}var E=r(50297),I=r(39245),q=r(49437),P=r(63622),R=r(80047);function Z(){return(0,b.jsx)(q.Z,{title:"There are no tests for this request",description:(0,b.jsxs)(P.ZP,{type:"para",children:["Write a test script to automate debugging. Learn more about"," ",(0,b.jsx)(I.Link,{to:"https://go.pstmn.io/docs-test-scripts",target:"_blank",children:(0,b.jsx)(P.ZP,{type:"link-default",isExternal:!0,children:"writing tests"})})]}),children:(0,b.jsx)(R.Z,{name:"illustration-write-tests"})})}let D;const A=n().div(D||(D=(e=>e)`
  padding: var(--spacing-s);
  margin: var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: var(--border-radius-default);
  text-align: center;
  color: var(--content-color-error);
`)),L=(0,E.observer)((()=>{const e=(0,i.aD)();return(0,b.jsxs)(A,{children:["There was an error in evaluating the test script: ",(0,b.jsxs)(P.ZP,{type:"strong",children:[null==e?void 0:e.name,": ",null==e?void 0:e.message]})]})}));let z,_,B,O=e=>e;const F=[{label:"All"},{label:"Passed"},{label:"Skipped"},{label:"Failed"}],M=n()(d.Z)(z||(z=O`
  padding: var(--spacing-s);
`)),$=n().div(_||(_=O`
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
`)),N=n().ul(B||(B=O`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  gap: var(--spacing-s);
`)),V=(0,E.observer)((function(){const e=(0,i.$x)(),t=(0,i.aD)(),[r,a]=s().useState(0);return t?(0,b.jsx)(L,{}):0===e.length?(0,b.jsx)(Z,{}):(0,b.jsxs)(M,{direction:"column",gap:"spacing-m",height:"100%",children:[(0,b.jsx)(l.y,{activeTabIndex:r,onChange:a,type:"secondary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,b.jsx)(c.Z,{children:F.map((e=>(0,b.jsx)(u.Z,{label:e.label},e.label)))})}),(0,b.jsx)($,{children:(0,b.jsx)(N,{children:(0,b.jsx)(C,{activeTab:r,assertions:e})})})]})}));var H=r(25883);let U;const W=n().span(U||(U=(e=>e)`
  margin-left: var(--spacing-xs);
  color: ${0};
`),(e=>e.success?"var(--content-color-success)":"var(--content-color-error)")),K=(0,E.observer)((function(){const e=(0,i.aD)(),t=(0,i.$x)();if(e)return(0,b.jsxs)(d.Z,{alignItems:"center",children:[(0,b.jsx)(P.ZP,{children:"Test Results"}),(0,b.jsx)(H.Z,{isError:!0})]});if(0===t.length)return(0,b.jsx)("span",{children:"Test Results"});const r=t.filter((e=>p(e)));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{children:"Test Results"}),(0,b.jsxs)(W,{success:r.length===t.length,children:["(",r.length,"/",t.length,")"]})]})}))},7336:(e,t,r)=>{r.d(t,{Is:()=>a,WJ:()=>s,_A:()=>i,gg:()=>o,tU:()=>n});const a={GET:{label:"GET",value:"GET",color:"content-color-success"},POST:{label:"POST",value:"POST",color:"content-color-warning"},PUT:{label:"PUT",value:"PUT",color:"content-color-info"},PATCH:{label:"PATCH",value:"PATCH",color:"content-color-patch-method"},DELETE:{label:"DELETE",value:"DELETE",color:"content-color-error"},HEAD:{label:"HEAD",value:"HEAD",color:"content-color-success"},OPTIONS:{label:"OPTIONS",value:"OPTIONS",color:"content-color-options-method"}},s={COPY:{label:"COPY",value:"COPY",color:"content-color-primary"},LINK:{label:"LINK",value:"LINK",color:"content-color-primary"},UNLINK:{label:"UNLINK",value:"UNLINK",color:"content-color-primary"},PURGE:{label:"PURGE",value:"PURGE",color:"content-color-primary"},LOCK:{label:"LOCK",value:"LOCK",color:"content-color-primary"},UNLOCK:{label:"UNLOCK",value:"UNLOCK",color:"content-color-primary"},PROPFIND:{label:"PROPFIND",value:"PROPFIND",color:"content-color-primary"},VIEW:{label:"VIEW",value:"VIEW",color:"content-color-primary"}},o="GET",n={EMPTY_URL:{title:"Request URL is empty",status:"error"}},i="http-request-method-dropdown"},47069:(e,t,r)=>{r.d(t,{N:()=>a});const a="vertical"},85332:(e,t,r)=>{r.d(t,{n:()=>n});var a=r(40540),s=r(98276),o=r(50429);const n=()=>{const{data:e}=(0,s.useActiveAndDynamicVariables)();return(0,a.useCallback)((e=>(t,r)=>{let a=t.getCurrentWord();const s=t.getCurrentLine();if(a||(a=t.getWordBeforePosition(r)),"{{"!==s.slice(0,Math.max(0,a.startColumn-1)).slice(-2))return[];const n=(null!=e?e:[]).filter((e=>(0,o.B)(e.key).toLowerCase().includes(a.word.toLowerCase()))),i={startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return(0,o.a)(n,i)})(e),[e])}},27451:(e,t,r)=>{r.d(t,{Z:()=>Hc});var a=r(40540),s=r.n(a),o=r(50297),n=r(25637),i=r(35736),l=r(19578),d=r(59530),c=r.n(d),u=r(58560),h=r(63622),p=r(80605),m=r(82196),g=r(64495),v=r(42632),b=r(49886),f=r(4779);const y=()=>(0,f.x)().name;var x=r(60398),k=r(60607),S=r(22922),w=r(44306),j=r(29706),T=r(39245),C=r(20856);let E;const I=c()(C.ZP)(E||(E=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-primary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-primary);
  }
`)),q="http",P="ws-raw",R="grpc";var Z=r(56880),D=r(52322);let A,L,z,_,B,O=e=>e;const F=c().div(A||(A=O`
  height: 24px;
  width: 24px;
  box-sizing: border-box;
`)),M=c()(p.Z)(L||(L=O`
  height: 24px;
  width: 24px;
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  cursor: pointer;

  &:hover {
    background-color: var(--highlight-background-color-tertiary);
  }

  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.theme[e.color])),$=c().div(z||(z=O`
  padding-left: var(--spacing-s);
  padding-top: var(--spacing-xs);
`)),N=c()(T.Link)(_||(_=O`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: var(--line-height-xl);
  padding: var(--spacing-zero) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--background-color-tertiary);
  }

  color: var(--content-color-primary);
`)),V=c().div(B||(B=O`
  margin-left: var(--spacing-s);
`)),H={[q]:{label:"HTTP",Icon:S.Z,iconColor:"content-color-success"},[P]:{label:"WebSocket",Icon:w.Z,iconColor:"content-color-brand"},[R]:{label:"gRPC",Icon:j.Z,iconColor:"content-color-info"}},U={[q]:"/request/create",[P]:"/ws-raw-request/create",[R]:"/grpc-request/create"},W=()=>{const e=(0,k.useParams)(),[t]=(0,T.useSearchParams)(),r=(0,k.useMatch)("/workspace/:workspaceId/:protocol/create"),[a,o]=s().useState(!1),n=t.get("requestId")||(0,x.v4)();if(!r)return(0,D.jsx)($,{children:(0,D.jsx)(S.Z,{color:"content-color-success","data-testid":"aether-icon-HTTP"})});const i=(0,D.jsx)(M,{type:"secondary",icon:(0,D.jsx)(S.Z,{"data-testid":"aether-icon-HTTP"}),color:"content-color-success",onClick:()=>o((e=>!e)),"data-testid":"protocol-switcher"});return(0,D.jsx)(F,{children:(0,D.jsx)(I,{trigger:i,isOpen:a,onClickOutside:()=>o(!1),children:Object.keys(H).map((t=>{const{label:r,Icon:a}=H[t];return(0,D.jsxs)(N,{to:`/workspace/${e.workspaceId}${U[t]}?requestId=${n}`,sameTab:!0,onClick:()=>{Z.AnalyticsService.addEventV2({category:"request",action:"switch-protocol",label:t}),o(!1)},children:[(0,D.jsx)(a,{color:H[t].iconColor}),(0,D.jsx)(V,{children:r})]},t)}))})})};var K=r(98276),Q=r(88691),Y=r(42427),G=r(24502),X=r(26246),J=r(7560),ee=r(74962),te=r(81397),re=r(68206),ae=r(37110),se=r(49627),oe=r(53186),ne=r(56259),ie=r(35482),le=r(71233),de=r(78476);class ce{constructor(){this.filterText="",this.openNodeIds=de.observable.map({}),this.visibleNodeIds=de.observable.map({}),this.isVisibilityFilterActive=void 0,this.selectedNodeId=void 0,this.selectionData=void 0,this.treeData=void 0,this.toggleItemExpansion=e=>{this.openNodeIds.has(e)?this.openNodeIds.delete(e):this.openNodeIds.set(e,!0)},this.setFilterText=e=>{this.filterText=e,this.updateNodesOnFilterChange()},this.updateNodesOnFilterChange=()=>{(0,de.runInAction)((()=>{if(this.filterText||(this.isVisibilityFilterActive=!1,this.visibleNodeIds.clear(),this.openNodeIds.clear()),this.treeData&&this.filterText){const e=function(e,t,r=[]){const a=[];for(const s of e)a.push(...ue(s,t,r));return a}(this.treeData,this.filterText.toLowerCase());this.isVisibilityFilterActive=!0,this.visibleNodeIds.clear(),this.openNodeIds.clear();for(const t of e){this.visibleNodeIds.set(t.id,!0);for(const e of t.parentIds)this.visibleNodeIds.set(e,!0),this.openNodeIds.set(e,!0);for(const e of t.childIds)this.visibleNodeIds.set(e,!0)}}}))},this.setSelected=(e,t)=>{this.selectedNodeId=e,this.selectionData=t},(0,de.makeObservable)(this,{filterText:de.observable,isVisibilityFilterActive:de.observable,selectedNodeId:de.observable,toggleItemExpansion:de.action,setSelected:de.action}),this.updateNodesOnFilterChange=function(e,t){let r;return function(...t){clearTimeout(r),r=setTimeout((()=>{e(...t)}),250)}}(this.updateNodesOnFilterChange)}setTreeData(e){this.treeData=e}}function ue(e,t,r=[]){const a=[];if(e.name.toLowerCase().includes(t)){const t={id:e.id,parentIds:[...r],childIds:e.children.map((e=>e.id))};a.push(t)}for(const s of e.children){const o=[...r,e.id];a.push(...ue(s,t,o))}return a}const he=(0,a.createContext)(new ce),pe=e=>{const t=(0,a.useRef)(new ce);return(0,a.useEffect)((()=>(0,de.reaction)((()=>t.current.selectedNodeId),(()=>{e.onSelect(t.current.selectedNodeId,t.current.selectionData)}))),[]),(0,D.jsx)(he.Provider,{value:t.current,children:e.children})},me=()=>(0,a.useContext)(he),ge=he;let ve;const be=c().ul(ve||(ve=(e=>e)`
  all: unset;
  overflow: auto;
`)),fe=(0,o.observer)((function(e){const t=me();return(0,a.useEffect)((()=>{t.setTreeData(e.data)}),[e.data]),(0,D.jsxs)(u.Z,{gap:e.enableSearch&&"spacing-xs",direction:"column",children:[e.enableSearch&&(0,D.jsx)(re.Z,{type:"text",placeholder:e.searchPlaceholder,value:t.filterText,onChange:e=>t.setFilterText(e.target.value),prefix:(0,D.jsx)(le.Z,{})}),(0,D.jsx)(be,{role:"tree","aria-label":e.label,style:{height:e.treeHeight},id:e.id,children:e.children})]})}));var ye=r(28176),xe=r(35547),ke=r(3341);function Se(e){const t=(0,a.useContext)(ge),r=(0,a.useRef)((()=>t.toggleItemExpansion(e)));return[t.openNodeIds.has(e),r.current]}let we,je,Te,Ce,Ee,Ie,qe,Pe,Re,Ze=e=>e;const De=c().div(we||(we=Ze`
  opacity: 0;
  position: relative;
  z-index: -1;
  margin-left: var(--spacing-s);
`)),Ae=c().li(je||(je=Ze`
  all: unset;
`)),Le=c().div(Te||(Te=Ze`
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  height: ${0};
  cursor: pointer;
  display: flex;
  align-items: center;

  ${0}

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-secondary);

    ${0} {
      visibility: visible;
      opacity: 1;
      z-index: 0;
    }
  }
`),(({size:e})=>"large"===e?"40px":"28px"),(({isDisabled:e})=>e&&"\n    opacity: 0.4;\n    pointer-events: none;\n  "),(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-secondary);"),De),ze=c().div(Ce||(Ce=Ze`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),_e=c().div(Ee||(Ee=Ze`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),Be=e=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ze,{size:e.size}),(0,D.jsx)(_e,{size:e.size})]}),Oe=c().div(Ie||(Ie=Ze`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-s);
  margin-right: var(--spacing-xs);
`)),Fe=c().button(qe||(qe=Ze`
  all: unset;
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  height: var(--size-xs);
  width: var(--size-xs);
  border-radius: var(--border-radius-default);

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-tertiary);
  }

  & > i {
    transform: rotate(${0});
  }
`),(({expandable:e})=>!e&&"\n    opacity: 0;\n    zIndex: -1;\n  "),(({expanded:e})=>e?"90deg":0)),Me=c().ul(Pe||(Pe=Ze`
  all: unset;
`)),$e=c().div(Re||(Re=Ze`
  flex: auto;
  margin-left: var(--spacing-xs);
`)),Ne=(0,o.observer)((function(e){const[t,r]=Se(e.id),[s,o]=function(e){const t=(0,a.useContext)(ge),r=(0,a.useRef)((r=>t.setSelected(e,r)));return[t.selectedNodeId===e,r.current]}(e.id),n=function(e){const t=(0,a.useContext)(ge);return!t.isVisibilityFilterActive||t.visibleNodeIds.has(e)}(e.id),i=(0,a.useRef)(null),l=e.metaIcons||[],d=(0,a.useCallback)((a=>{a.preventDefault(),a.stopPropagation(),e.disabled||(!t&&r(),o(e.data))}),[t,o,r,e.data,e.disabled]);return n?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(Ae,{role:"treeitem","aria-expanded":t,"aria-selected":s,"aria-disabled":e.disabled,"aria-label":e.label,ref:i,onClick:d,children:[(0,D.jsxs)(Le,{size:e.size,isSelected:s,isDisabled:e.disabled,children:[Array.from({length:e.depth}).fill("").map((()=>(0,D.jsx)(Be,{size:e.size}))),(0,D.jsx)(Fe,{expanded:t,expandable:e.expandable,disabled:!e.expandable||e.disabled,"aria-label":t?`collapse ${e.label}`:`expand ${e.label}`,onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:(0,D.jsx)(ke.Z,{})}),(0,D.jsx)(Oe,{children:e.icon}),(0,D.jsx)(h.ZP,{type:"body-medium",isTruncated:!0,color:"content-color-primary",children:e.label}),(0,D.jsx)($e,{children:l}),e.renderOnHoverActionTriggers&&(0,D.jsx)(De,{children:e.renderOnHoverActionTriggers()})]}),t&&(0,D.jsx)(Me,{role:"group",children:e.children})]}),e.tooltipText&&(0,D.jsx)(te.Z,{content:e.tooltipText,placement:"bottom",triggerRef:i})]}):null}));function Ve(e,t,r){const a=t[0],s=t.slice(1);if(!a)return;const o=r.find((e=>e.id===a));return o?s.length>0?Ve(e,s,o.folders):o.folders.find((t=>t.id===e)):void 0}function He(e){const t=(0,a.useCallback)((t=>{const r=t.data.find((t=>t.id===e.collectionId));if(r)return e.parentFolderIds?Ve(e.folderId,e.parentFolderIds,r.folders):r.folders.find((t=>t.id===e.folderId))}),[e.collectionId,e.parentFolderIds,e.folderId]),{data:r}=(0,oe.useCollectionListRawQuery)({workspaceId:e.workspaceId,select:t});return r}let Ue,We,Ke,Qe,Ye,Ge,Xe=e=>e;const Je=c().div(Ue||(Ue=Xe`
  opacity: 0;
  position: relative;
  z-index: -1;
  margin-left: var(--spacing-s);
`)),et=c().li(We||(We=Xe`
  all: unset;
`)),tt=c().div(Ke||(Ke=Xe`
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  height: ${0};
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background-color: var(--highlight-background-color-secondary);

    ${0} {
      visibility: visible;
      opacity: 1;
      z-index: 0;
    }
  }
`),(({size:e})=>"large"===e?"40px":"28px"),Je),rt=c().div(Qe||(Qe=Xe`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),at=c().div(Ye||(Ye=Xe`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),st=e=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(rt,{size:e.size}),(0,D.jsx)(at,{size:e.size})]}),ot=c().div(Ge||(Ge=Xe`
  margin-left: var(--spacing-s);
`)),nt=(0,o.observer)((function(e){const[t,r]=Se(e.id);return(0,D.jsx)(et,{role:"treeitem","aria-expanded":t,"aria-selected":"false",expanded:t,children:(0,D.jsxs)(tt,{size:e.size,onClick:r,children:[Array.from({length:e.depth}).fill("").map((()=>(0,D.jsx)(st,{size:e.size}))),(0,D.jsx)(ot,{children:e.children})]})})})),it=(0,o.observer)((function(e){return(0,D.jsx)(nt,{depth:e.depth,id:"empty-folder",size:"large",expandable:!1,children:(0,D.jsx)(h.ZP,{type:"body-small",color:"content-color-secondary",children:"This folder is empty."})})}));function lt(e,t,r){const a=t[0],s=t.slice(1);if(!a)return;const o=r.find((e=>e.id===a));return o?s.length>0?lt(e,s,o.folders):o.requests.find((t=>t.id===e)):void 0}function dt(e){const t=(0,a.useCallback)((t=>{const r=t.data.find((t=>t.id===e.collectionId));if(r)return e.parentFolderIds?lt(e.requestId,e.parentFolderIds,r.folders):r.requests.find((t=>t.id===e.requestId))}),[e.collectionId,e.parentFolderIds,e.requestId]),{data:r}=(0,oe.useCollectionListRawQuery)({workspaceId:e.workspaceId,select:t});return r}let ct;const ut={PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"},ht=e=>e?ut[e]||e.slice(0,5):null,pt=c().div(ct||(ct=(e=>e)`
  font-family: var(--text-family-code);

  /* These values are custom as this is an icon. */
  font-weight: 450;
  font-size: 8px;
  line-height: 15px;
  color: ${0};
`),(({method:e})=>{switch(e){case"GET":return"var(--base-color-success, #0CBB52)";case"PUT":return"var(--base-color-info, #097BED)";case"POST":return"var(--base-color-warning, #FFB400)";case"DELETE":return"var(--base-color-error, #EB2013)";default:return"var(--content-color-primary, #212121)"}}));function mt(e){const t=e.method.toUpperCase();return(0,D.jsx)(pt,{method:t,children:(0,D.jsx)("div",{children:ht(t)})})}const gt=(0,o.observer)((function(e){const t=dt({collectionId:e.collectionId,requestId:e.requestId,parentFolderIds:e.parentFolderIds,workspaceId:e.workspaceId});return t?(0,D.jsx)(Ne,{id:t.id,depth:e.depth,icon:(0,D.jsx)(mt,{method:t.method}),label:t.name,size:"small",expandable:!1,disabled:!0},t.id):null}));var vt=r(52385);const bt=new Set(["Alt","Meta","Control","Shift"]),ft=({ctrlKey:e,shiftKey:t,altKey:r,keys:s,callback:o})=>{const n=(0,a.useRef)([]),i=(0,a.useRef)(!1),l=(0,a.useRef)(!1),d=(0,a.useRef)(!1),c=(0,a.useRef)(null),u=(0,a.useRef)(o);u.current=o,(0,a.useEffect)((()=>{const a=a=>{if((a.ctrlKey||a.metaKey)&&(i.current=!0),a.shiftKey&&(l.current=!0),a.altKey&&(d.current=!0),!bt.has(a.key)&&Array.isArray(s)){const e=s.findIndex((e=>e.toLowerCase()===a.key.toLowerCase()));-1!==e&&(n.current[e]=a.key)}const o=!e||i.current,h=!t||l.current,p=!r||d.current;if(c.current=setTimeout((()=>{i.current=!1,l.current=!1,d.current=!1,n.current=[]}),250),o&&h&&p){if(Array.isArray(s)&&((e,t)=>{let r=0;for(const s of e){var a;if(s.toLowerCase()!==(null==(a=t[r])?void 0:a.toLowerCase()))return!1;r++}return!0})(s,n.current))return u.current();if(s===a.key)return u.current()}};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a),c.current&&clearTimeout(c.current)}}),[e,t,r,s])};let yt,xt,kt,St,wt,jt,Tt,Ct=e=>e;const Et=c()(re.Z)(yt||(yt=Ct`
  margin-top: 2px;
  height: 28px;
  width: auto;
  margin-right: var(--spacing-xs); ;
`)),It=c().div(xt||(xt=Ct`
  display: flex;
  align-items: center;
`)),qt=c().li(kt||(kt=Ct`
  display: flex;

  .draft-list-item {
    align-items: center;
    display: flex;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    width: fill-available;
  }
`)),Pt=c().div(St||(St=Ct`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  margin-right: var(--spacing-xs);
`)),Rt=c().div(wt||(wt=Ct`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  margin-right: var(--spacing-xs);
`)),Zt=c().div(jt||(jt=Ct`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),Dt=c().div(Tt||(Tt=Ct`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),At=e=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Zt,{size:e.size}),(0,D.jsx)(Dt,{size:e.size})]}),Lt=e=>(ft({keys:"Enter",callback:e.handleSubmit}),e.isCreatingItem?(0,D.jsxs)(It,{children:[(0,D.jsx)(Ne,{id:"dummy",depth:e.depth,icon:e.icon,label:e.name,expandable:!0,size:"large",disabled:!0},"dummy"),(0,D.jsx)(i.Z,{})]}):(0,D.jsx)(qt,{children:(0,D.jsxs)("div",{className:"draft-list-item",children:[Array.from({length:e.depth}).fill("").map((()=>(0,D.jsx)(At,{size:"large"}))),(0,D.jsx)(Pt,{children:(0,D.jsx)(ke.Z,{})}),(0,D.jsx)(Rt,{children:e.icon}),(0,D.jsx)(Et,{autoFocus:!0,onBlur:()=>setTimeout((()=>{e.handleClose()}),200),className:"placeholder-input-field",placeholder:e.placeholder,value:e.name,onChange:t=>e.onChange(t.target.value)}),(0,D.jsx)(p.Z,{onClick:e.handleSubmit,type:"tertiary",isDisabled:!e.name,icon:(0,D.jsx)(vt.Z,{})}),(0,D.jsx)(p.Z,{onClick:()=>{e.handleClose()},type:"tertiary",icon:(0,D.jsx)(se.Z,{})})]})})),zt=(0,o.observer)((function e(t){const r=me(),s=He({collectionId:t.collectionId,folderId:t.folderId,parentFolderIds:t.parentFolderIds,workspaceId:t.workspaceId}),o=(0,a.useMemo)((()=>t.parentFolderIds?[...t.parentFolderIds,t.folderId]:[t.folderId]),[t.parentFolderIds,t.folderId]),i=(0,a.useRef)({collectionId:t.collectionId,folderId:t.folderId}),[l,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[h,m]=(0,a.useState)(""),g=(0,oe.useCreateNewFolder)(),{addToast:v}=(0,n.ZP)(),b=(0,a.useCallback)((()=>{if(!h)return;const e=(0,x.v4)();d(!0),g.mutate({workspaceId:t.workspaceId,collectionId:t.collectionId,parentFolderIds:o||[],requestBody:{id:e,name:h,folder:t.folderId,collection:t.collectionId}},{onSettled:a=>{if(d(!1),u(!1),m(""),!a)return;const s=(0,oe.composeUID)(e,a.data.owner);r.setSelected(s,{folderId:s,collectionId:t.collectionId})},onSuccess:()=>{Z.AnalyticsService.addEventV2({category:"http-folder",action:"create",label:"request-popover",value:1})},onError:()=>{v({status:"error",description:"Could not create folder."})}})}),[h]),f=(0,a.useCallback)((()=>{u(!1)}),[]);return s?(0,D.jsxs)(Ne,{id:s.id,depth:t.depth,icon:(0,D.jsx)(xe.Z,{}),label:s.name,size:"large",expandable:!0,data:i.current,renderOnHoverActionTriggers:()=>(0,D.jsx)(p.Z,{onClick:()=>{u(!0)},type:"tertiary",icon:(0,D.jsx)(ye.Z,{}),tooltip:"Create a folder"}),children:[s.folders_order.map((r=>(0,D.jsx)(e,{folderId:r,collectionId:t.collectionId,workspaceId:t.workspaceId,depth:t.depth+1,parentFolderIds:o},r))),(c||l)&&(0,D.jsx)(Lt,{name:h,placeholder:"Name your folder",depth:t.depth+1,icon:(0,D.jsx)(xe.Z,{}),isCreatingItem:l,handleSubmit:b,isEditMode:c,onChange:m,handleClose:f}),s.order.map((e=>(0,D.jsx)(gt,{requestId:e,collectionId:t.collectionId,workspaceId:t.workspaceId,depth:t.depth+1,parentFolderIds:o},e))),0===s.folders_order.length&&0===s.order.length&&!c&&!l&&(0,D.jsx)(it,{depth:t.depth+1})]},s.id):null})),_t=(0,o.observer)((function(e){return(0,D.jsx)(nt,{depth:e.depth,id:"empty-collection",size:"small",expandable:!1,children:(0,D.jsx)(h.ZP,{type:"body-small",color:"content-color-secondary",children:"This collection is empty."})})}));var Bt=r(37691);let Ot,Ft,Mt=e=>e;const $t=c().div(Ot||(Ot=Mt`
  display: flex;
  align-items: center;
  overflow: hidden;
`)),Nt=c().p(Ft||(Ft=Mt`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  margin-left: var(--spacing-xs);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  text-overflow: ellipsis;
  color: var(--content-color-tertiary);
`)),Vt=({label:e})=>(0,D.jsxs)($t,{children:[(0,D.jsx)(Bt.Z,{color:"content-color-tertiary",size:"small"}),(0,D.jsx)(Nt,{children:e})]}),Ht=(0,o.observer)((function(e){var t;const r=me(),s=function(e,t){const r=(0,a.useCallback)((e=>e.data.find((e=>e.id===t))),[t]),{data:s}=(0,oe.useCollectionListRawQuery)({workspaceId:e,select:r});return s}(e.workspaceId,e.collectionId),o=(0,a.useRef)({collectionId:e.collectionId}),[i,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!1),u=(0,oe.useCreateNewFolder)(),[h,m]=(0,a.useState)(""),{addToast:g}=(0,n.ZP)(),v=(0,a.useCallback)((()=>{if(!h)return;const t=(0,x.v4)();l(!0),u.mutate({workspaceId:e.workspaceId,collectionId:e.collectionId,parentFolderIds:[],requestBody:{id:t,name:h,collection:e.collectionId}},{onSettled:a=>{if(l(!1),c(!1),m(""),!a)return;const s=(0,oe.composeUID)(t,a.data.owner);r.setSelected(s,{folderId:s,collectionId:e.collectionId})},onSuccess:()=>{Z.AnalyticsService.addEventV2({category:"http-folder",action:"create",label:"request-popover",value:1})},onError:()=>{g({status:"error",description:"Could not create folder."})}})}),[h]),b=(0,a.useCallback)((()=>{c(!1)}),[]);if(!s)return null;const f=[];var y;return null!=(t=s.attributes.fork)&&t.forkLabel&&f.push((0,D.jsx)(Vt,{label:null==(y=s.attributes.fork)?void 0:y.forkLabel})),(0,D.jsxs)(Ne,{id:s.id,depth:0,icon:(0,D.jsx)(ne.Z,{}),label:s.name,size:"large",expandable:!0,data:o.current,disabled:!s.attributes.permissions.userCanUpdate,tooltipText:s.attributes.permissions.userCanUpdate?void 0:"You don’t have permission to save to this collection.",metaIcons:f,renderOnHoverActionTriggers:()=>(0,D.jsx)(p.Z,{onClick:()=>{c(!0)},type:"tertiary",icon:(0,D.jsx)(ye.Z,{}),tooltip:"Create a folder"}),children:[s.folders_order.map((t=>(0,D.jsx)(zt,{folderId:t,collectionId:s.id,workspaceId:e.workspaceId,depth:1},t))),(d||i)&&(0,D.jsx)(Lt,{name:h,placeholder:"Name your folder",depth:1,icon:(0,D.jsx)(xe.Z,{}),isCreatingItem:i,handleSubmit:v,isEditMode:d,onChange:m,handleClose:b}),s.order.map((t=>(0,D.jsx)(gt,{requestId:t,collectionId:e.collectionId,workspaceId:e.workspaceId,depth:1},t))),0===s.folders_order.length&&0===s.order.length&&!d&&!i&&(0,D.jsx)(_t,{depth:1})]},s.id)}));function Ut(e){return e.map((e=>({id:e.id,name:e.name,type:"folder",children:Ut(e.folders)})))}let Wt;const Kt=c()(u.Z)(Wt||(Wt=(e=>e)`
  text-align: center;
`)),Qt=(0,o.observer)((function(e){const{data:t,isLoading:r,error:s,refetch:o,isFetching:l}=function(e){const t=(0,a.useCallback)((e=>{const t=e.data.map((e=>({type:"collection",id:e.id,name:e.name,children:e.attributes.permissions.userCanUpdate?Ut(e.folders):[]})));return t.sort(((e,t)=>e.name.toLowerCase().localeCompare(t.name.toLowerCase()))),t}),[]);return(0,oe.useCollectionListRawQuery)({workspaceId:e,select:t})}(e.workspaceId),d=me(),[c,m]=(0,a.useState)(!1),[g,v]=(0,a.useState)(""),b=(0,oe.useCreateNewCollection)(),{addToast:f}=(0,n.ZP)(),y=(0,a.useCallback)((()=>{g&&(m(!0),b.mutate({workspaceId:e.workspaceId,requestBody:{id:(0,x.v4)(),name:g}},{onSettled:t=>{if(m(!1),e.setShowDraftItem(!1),v(""),!t)return;const r=(0,oe.composeUID)(t.data.id,t.data.owner);d.setSelected(r,{collectionId:r})},onSuccess:()=>{Z.AnalyticsService.addEventV2({category:"http-collection",action:"create",label:"request-popover",value:1})},onError:()=>{f({status:"error",description:"Could not create collection."})}}))}),[g]),k=(0,a.useCallback)((()=>{e.setShowDraftItem(!1)}),[]),S=(0,D.jsxs)(Kt,{direction:"column",height:"300px",alignItems:"center",justifyContent:"center",alignSelf:"center",gap:"spacing-s",children:[(0,D.jsx)(ne.Z,{color:"content-color-secondary"}),(0,D.jsx)(h.ZP,{type:"strong",children:"You don’t have any collections. "}),(0,D.jsxs)(h.ZP,{type:"para",children:["Collections let you group related requests, making",(0,D.jsx)("br",{}),"them easier to access and run. "]})]});return r||!t&&l?(0,D.jsx)(u.Z,{height:"300px",alignItems:"center",justifyContent:"center",children:(0,D.jsx)(i.Z,{size:"small",description:"Loading collections"})}):!t&&s?(0,D.jsxs)(u.Z,{height:"300px",alignItems:"center",justifyContent:"center",gap:"spacing-s",children:[(0,D.jsx)(ie.Z,{color:"content-color-secondary"}),(0,D.jsxs)(h.ZP,{type:"para",children:["Failed to load collections. ",(0,D.jsx)(p.Z,{onClick:o,type:"monochrome-plain",text:"Retry"})]})]}):!t||0!==t.length||e.showDraftItem||c?(0,D.jsxs)(fe,{enableSearch:t&&t.length>0,label:"collections",treeHeight:264,id:e.id,data:t||[],searchPlaceholder:"Search for collection or folder",children:[(t||[]).map((t=>(0,D.jsx)(Ht,{workspaceId:e.workspaceId,collectionId:t.id}))),(e.showDraftItem||c)&&(0,D.jsx)(Lt,{name:g,placeholder:"Name your collection",depth:0,icon:(0,D.jsx)(ne.Z,{}),isCreatingItem:c,handleSubmit:y,isEditMode:e.showDraftItem,onChange:v,handleClose:k})]}):S}));let Yt;const Gt=c()(p.Z)(Yt||(Yt=(e=>e)`
  height: var(--controls-size-default);
  background-color: var(--base-color-info);
  color: var(--content-color-constant);
  margin-left: var(--spacing-m);

  &:hover,
  &.is-hovered {
    background-color: var(--highlight-background-color-info);
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.5;
    background-color: var(--base-color-info);
    color: var(--content-color-constant);
  }

  &:active,
  &.is-active {
    background-color: var(--highlight-background-color-info);
  }
`)),Xt=(0,o.observer)((function(e){const{requestData:t,onSaved:r,onClose:s,workspaceId:o}=e,i=y(),[l,d]=(0,a.useState)(i),[c,h]=(0,a.useState)(),[m,g]=(0,a.useState)(!1),{addToast:v}=(0,n.ZP)(),[b,f]=(0,a.useState)(!1),k=(0,oe.useWorkspacePermissions)(o),S=(0,a.useCallback)(((e,t)=>{e&&!t||h(null),h(t)}),[]),w=(0,oe.useCreateRequest)(),j=(0,a.useCallback)((()=>{if(!c)return;const e=(0,J.Z)({},t,{id:(0,x.v4)(),name:l,collection:c.collectionId,folder:c.folderId});g(!0),w.mutate({request:e,workspaceId:o,invalidateListCache:!0},{onSuccess:e=>{r(e.data.id,c.collectionId),Z.AnalyticsService.addEventV2({category:"http-request",action:"create",label:"request-popover",value:1})},onError:()=>{v({status:"error",description:"Could not save request."})},onSettled:()=>{g(!1)}})}),[c,w,v,t,r,l]);return(0,D.jsxs)(u.Z,{padding:"spacing-s",width:"408px",gap:"spacing-l",direction:"column",children:[(0,D.jsxs)(u.Z,{alignItems:"center",children:[(0,D.jsx)(ee.Z,{type:"h3",text:"Save Request",color:"content-color-primary"}),(0,D.jsx)("span",{style:{flex:"auto"}}),(0,D.jsx)(p.Z,{onClick:s,type:"tertiary",icon:(0,D.jsx)(se.Z,{}),tooltip:(0,D.jsx)(te.Z,{content:"Close",placement:"bottom"})})]}),(0,D.jsx)(re.Z,{type:"text",label:(0,D.jsx)(ae.Z,{text:"Request Name",htmlFor:"save-request-name-input"}),value:l,validationStatus:!l&&"error",validationMessage:"Please enter a valid request name",onChange:e=>{d(e.target.value)},id:"save-request-name-input"}),(0,D.jsxs)(u.Z,{direction:"column",gap:"spacing-s",children:[(0,D.jsxs)(u.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,D.jsx)(ae.Z,{text:"Select Collection",htmlFor:"save-request-collection-tree"}),(0,D.jsx)(p.Z,{type:"plain",size:"medium",text:"Create Collection",onClick:()=>{f(!0)},isDisabled:!k.userCanCreate})]}),(0,D.jsx)(pe,{onSelect:S,children:(0,D.jsx)(Qt,{workspaceId:o,id:"save-request-collection-tree",showDraftItem:b,setShowDraftItem:f})})]}),(0,D.jsx)(u.Z,{justifyContent:"flex-end",alignItems:"center",children:(0,D.jsx)(Gt,{type:"primary",size:"medium",text:"Save",isLoading:m,isDisabled:!l||!c,onClick:j})})]})}));var Jt=r(10099),er=r(18712),tr=r(48491);const rr=()=>{const e=(0,f.x)();return{isDirty:e.isDirty,isConflicted:e.isConflicted,isSaving:e.isSaving}};var ar=r(98283),sr=r(97201);const or=["mutate"],nr=(0,oe.updateRequestMutation)(),ir=()=>{const e=(0,f.x)(),t=(0,sr.useMutation)(nr),{mutate:r}=t,a=(0,ar.Z)(t,or);return(0,J.Z)({mutate:t=>{const a=e.getUpdateRequestPayload(),s={requestStore:e.trackedState,urlStore:e.urlStore.trackedState,headerData:e.headerData.trackedState,preRequestStore:e.preRequestStore.trackedState,testScriptStore:e.testScriptStore.trackedState,formDataStore:e.formDataStore.trackedState,urlEncodedDataStore:e.urlEncodedDataStore.trackedState,binaryEditor:e.binaryEditor.trackedState,graphqlPayloadStore:e.graphqlPayloadStore.trackedState},o=e.isConflicted;return t&&(a.name=t),e.resetAllTrackedState(),e.setIsSaving(!0),r({requestId:e.metadata.id,patch:a},{onError:()=>{e.revertTrackedStateChange(s,o),(0,n.Am)({title:"Unable to save changes",description:"Could not save changes. Please try again.",status:"error"})},onSettled:()=>{e.setIsSaving(!1)}})}},a)},lr=()=>{var e,t;const r=(0,f.x)();return 0===Object.keys(r.permissions).length?{canEdit:!0,canDelete:!0}:{canEdit:null==(e=r.permissions[oe.CollectionPermissionNames.UPDATE_COLLECTION])?void 0:e.allowed,canDelete:null==(t=r.permissions[oe.CollectionPermissionNames.DELETE_COLLECTION])?void 0:t.allowed}};var dr=r(59596);let cr;const ur=c()(C.ZP)(cr||(cr=(e=>e)`
  .tippy-content {
    background: var(--background-color-primary);
  }
`)),hr=(0,o.observer)((function(){const[e,t]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!1),o=(0,Jt.useActiveWorkspaceId)(),n=(0,er.q)(),i=(0,T.useNavigate)(),l=(0,tr.i)(),{isDirty:d,isSaving:c,isConflicted:u}=rr(),{mutate:h}=ir(),m=(0,a.useMemo)((()=>n()),[e,n]),{canEdit:g}=lr(),v=d&&g,b=y(),f=X.Modals.getModals(),{data:x}=(0,K.useActiveEnvironment)(),k=(0,dr.gr)(),S=(0,oe.useWorkspacePermissions)(o),w=(0,oe.useCollectionListRawQuery)({workspaceId:o}),j=async()=>{if(!l)return t(!0);if(!v)return;if(!u)return h();const e=await f.showWarningDialog({uid:"request-workbench-tab-conflict-confirmation",subject:"DO YOU WANT TO SAVE?",message:`This tab ${b} has been modified from another tab. Saving these changes will overwrite this request.`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Save and overwrite",isPrimary:!0}]});return e&&"Save and overwrite"===e.title?h():void 0};ft({ctrlKey:!0,keys:"s",callback:j});const C=(0,a.useRef)(null);return(0,a.useEffect)((()=>{w.data&&(e=>{const t=[];if(e)for(const a of e){var r;(null==a||null==(r=a.attributes)||null==(r=r.permissions)?void 0:r.userCanUpdate)&&t.push(a)}return t})(w.data.data).length>0&&s(!0)}),[w]),(0,D.jsx)(ur,{isOpen:e,maxWidth:440,onClickOutside:()=>{t(!1)},trigger:(0,D.jsx)("div",{children:(0,D.jsx)(Q.Z,{type:"tertiary",text:c?"Saving...":"Save",onClick:()=>{l&&j(),!l&&t(!0)},icon:(0,D.jsx)(G.Z,{}),isDisabled:!!l&&(!v||c),secondaryButton:(0,D.jsx)(p.Z,{ref:C,onClick:()=>t(!1),"data-testid":"save-as-menu-button"}),children:(0,D.jsx)(ur,{triggerRef:C,padding:"spacing-s",children:(0,D.jsx)(Y.Z,{onClick:()=>{t(!0)},isDisabled:!S.userCanCreate&&!r,children:"Save As.."})})})}),children:e&&(0,D.jsx)(Xt,{onClose:()=>t(!1),workspaceId:o,requestData:m,onSaved:(e,r)=>{t(!1);const a=k();(0,K.setActiveEnvironment)({model:"collection",modelId:r},x).finally((()=>i(`/workspace/${o}/request/${e}`,{state:{response:a}})))}})})}));var pr=r(14257);const mr=function(){const[e,t]=(0,T.useSearchParams)();return(0,D.jsx)(p.Z,{icon:(0,D.jsx)(pr.Z,{}),text:e.get("ctx")?"":"View Documentation",type:"tertiary",tooltip:"View Documentation",onClick:()=>{e.set("ctx","documentation"),t(e)}})};var gr=r(38394),vr=r(95617),br=r(26663),fr=r.n(br);const yr=({pathname:e})=>{const[t,r]=(0,a.useState)(!1),s=(0,a.useRef)(),o=(0,a.useCallback)((()=>{const t=fr().ARTEMIS_URL;navigator.clipboard.writeText(t+e).then((()=>{r(!0),null!=s&&s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{r(!1)}),1500)}))}),[e,s]);return(0,D.jsx)(p.Z,{type:"tertiary",className:"copy-link-btn",size:"small",icon:t?(0,D.jsx)(gr.Z,{size:"small",color:"base-color-success"}):(0,D.jsx)(vr.Z,{size:"small"}),onClick:o,tooltip:t?"Copied":"Copy link to request"})},xr=()=>{let e="new-request";const{historyId:t,requestId:r}=(0,k.useParams)();return t&&(e="history-request"),r&&(e="saved-request"),e};var kr=r(80809);const Sr="http-workbench",wr="request-send-button-paint-time",jr="environment-selector-value-paint-time",Tr="request-send-button-paint-mark",Cr="environment-selector-value-paint-mark";let Er,Ir,qr,Pr,Rr=e=>e;const{PerfContext:Zr}=kr.perfComponents,Dr=c().div(Er||(Er=Rr`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: ${0};
  border-bottom: ${0};
`),(e=>`${e.theme["spacing-s"]} ${e.theme["spacing-s"]}`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]}`)),Ar=c().div(Ir||(Ir=Rr`
  /* Temporary for style override, aether for some reason does not pass down classname to its breadcrumbs component */
  color: var(--content-color-primary);
  font-weight: var(--text-weight-medium);
  width: 100%;

  nav {
    .copy-link-btn {
      display: none;
    }

    :hover {
      .copy-link-btn {
        display: inline-flex;
      }
    }
  }
`)),Lr=c()(u.Z)(qr||(qr=Rr`
  width: 100%;
  overflow: hidden;
`)),zr=(0,o.observer)((()=>{const e=(0,Jt.useActiveWorkspaceId)(),t=(0,f.x)().exampleMeta,r=(0,T.useNavigate)();return t?(0,D.jsx)(h.ZP,{type:"body-medium",color:"",children:(0,D.jsxs)(u.Z,{gap:"spacing-xs",alignItems:"center",padding:{paddingLeft:"spacing-xs"},children:[(0,D.jsx)("span",{children:"From"}),(0,D.jsx)(v.Z,{}),(0,D.jsx)(p.Z,{onClick:()=>{r(`/workspace/${e}/example/${t.id}`,{},{customNavEvent:T.OPEN_EXTENSION_URL})},type:"muted-plain",text:t.name})]})}):null})),_r=(0,o.observer)((()=>{const e=(0,f.x)().breadcrumbs,{pathname:t}=(0,T.useLocation)(),r=y(),{canEdit:s}=lr(),{isDirty:o,isConflicted:n}=rr(),i=(0,T.useNavigate)(),{mutate:l}=ir(),d=(0,tr.i)(),c=(0,Jt.useActiveWorkspaceId)(),{setTabTitle:h}=(0,T.useTabTitleMeta)();(0,a.useEffect)((()=>{h(r,"http",{isDirty:o,isConflicted:n})}),[r,o,n]);const p=(0,a.useRef)(null),{rename:v}=(0,T.useAdditionalRouteContext)();(0,a.useEffect)((()=>{var e;v&&(null==(e=p.current)||e.triggerRenameMode())}),[v]);const x=e=>{r!==e&&l(e)};return(0,D.jsxs)(Lr,{direction:"row",shrink:"1",grow:"0",alignItems:"center",gap:"spacing-s",children:[(0,D.jsx)(W,{}),(0,D.jsx)(Ar,{children:e&&(0,D.jsx)(m.aG,{metaInfo:{custom:(0,D.jsxs)(u.Z,{alignItems:"center",gap:"spacing-s",children:[(0,D.jsx)(zr,{}),!s&&d&&(0,D.jsx)(b.Z,{title:"You do not have permissions to edit this request"})]})},appendActions:d&&(0,D.jsx)(yr,{pathname:t}),onItemClick:e=>{i(`/workspace/${c}/${e.entityType}/${e.id}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})},ref:p,children:e.map((e=>(0,D.jsx)(g.Z,{enableRename:"request"===e.entityType&&d&&s,renameInputConfig:{onSubmit:x,value:r},itemData:e,children:e.name},e.name)))})})]})})),Br=c()(u.Z)(Pr||(Pr=Rr`
  margin-left: var(--spacing-s);
`)),Or=(0,o.observer)((()=>{const e=xr(),t=(0,tr.i)();return(0,D.jsx)(Zr.Provider,{value:{markName:Cr,callback:()=>{return t=e,performance.measure(jr,{},Cr),void(0,kr.sendMeasureEvent)({name:jr,label:t,entityType:Sr});var t}},children:(0,D.jsxs)(Br,{className:"request-meta-header-right-section",direction:"row",alignItems:"center",gap:"spacing-s",children:[(0,D.jsx)(hr,{}),t&&(0,D.jsx)(mr,{}),(0,D.jsx)(K.ActiveEnvironmentSelector,{})]})})})),Fr=()=>(0,D.jsxs)(Dr,{children:[(0,D.jsx)(_r,{}),(0,D.jsx)(Or,{})]});var Mr=r(7336),$r=r(26259);const Nr=()=>{const e=(0,f.x)(),{data:t}=(0,K.useActiveEnvironment)();return()=>e.sendRequest({activeEnvironment:t})},Vr=()=>(0,f.x)().sending;var Hr=r(88131),Ur=r(83096),Wr=r(84452);let Kr,Qr,Yr,Gr=e=>e;const Xr=c()(Hr.AutoSuggestionInput)(Kr||(Kr=Gr`
  border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
  background: var(--background-color-primary);
  border-left: none;

  &:focus-within {
    box-shadow: ${0};
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-left: none;
    z-index: 1;
  }
`),(e=>e.isHardFocused?"0 0 0 2px var(--base-color-info)":"none")),Jr=c().div(Qr||(Qr=Gr`
  display: flex;
  flex-direction: column;
  width: 100%;
`)),ea=c().div(Yr||(Yr=Gr`
  z-index: 9999;

  /* Using negative margin to overlap the gradient with the input component */
  margin-top: -2px;

  @keyframes animateBottomBorder {
    from {
      width: 50%;
    }

    to {
      width: 0%;
    }
  }

  .request-editor__main__url-gradient {
    width: 100%;
  }

  .request-editor__main__url-gradient-left {
    height: 2px;
    background: linear-gradient(
      270deg,
      rgb(255 108 55),
      rgb(255 108 55 / 50%),
      transparent 50%
    );
    animation: animateBottomBorder 0.5s ease-in;
    float: left;
    width: 50%;
  }

  .request-editor__main__url-gradient-right {
    height: 2px;
    background: linear-gradient(
      90deg,
      rgb(255 108 55),
      rgb(255 108 55 / 50%),
      transparent 50%
    );
    animation: animateBottomBorder 0.5s ease-in;
    float: right;
    width: 50%;
  }
`)),ta=(0,o.observer)((()=>{const{url:e,setUrl:t}=(0,$r.I)(),{workspaceId:r}=(0,k.useParams)(),s=Nr(),{data:o=[]}=(0,Ur.useHistoryUrls)({workspaceId:r,pageSize:10,filterFn:e=>"request"===e.type}),{transformCurl:n,hydrateStore:i,isValidCurl:l}=(()=>{const e=(0,f.x)();return{transformCurl:async e=>await(0,Wr.transformCurlToRequest)(e),isValidCurl:async e=>{var t;const r=await(0,Wr.checkImportFormat)(e);return!r.err&&!(null==r||!r.ok||"curl"!==(null==(t=r.val)?void 0:t.format))},hydrateStore:e.hydrateStore.bind(e)}})(),[d,c]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),p=async e=>{var t;const r=null==(t=e.clipboardData)?void 0:t.getData("text");await l(r)&&(h(!0),setTimeout((async()=>{const e=await n(r);e&&0!==Object.keys(e).length?(i(e),h(!1)):h(!1)}),500))},m=(0,Hr.usePostmanInputFeatureFlag)(),{rename:g}=(0,T.useAdditionalRouteContext)();return m?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Hr.URLInput,{value:e,onChange:t,suggestions:o,placeholder:"Enter URL or paste text",onEnter:s,onPaste:p,autofocus:!e&&!g}),u&&!d&&(0,D.jsx)(ea,{"data-testid":"animation-gradient-container",children:(0,D.jsxs)("div",{className:"request-editor__main__url-gradient",children:[(0,D.jsx)("div",{className:"request-editor__main__url-gradient-left"}),(0,D.jsx)("div",{className:"request-editor__main__url-gradient-right"})]})})]}):(0,D.jsxs)(Jr,{children:[(0,D.jsx)(Xr,{value:e,onChange:t,suggestions:o,placeholder:"Enter URL or paste text",onPaste:p,setIsHardFocused:c,isHardFocused:d}),u&&!d&&(0,D.jsx)(ea,{"data-testid":"animation-gradient-container",children:(0,D.jsxs)("div",{className:"request-editor__main__url-gradient",children:[(0,D.jsx)("div",{className:"request-editor__main__url-gradient-left"}),(0,D.jsx)("div",{className:"request-editor__main__url-gradient-right"})]})})]})}));ta.displayName="observer(RequestURLInput)";const ra=ta;var aa=r(74269);let sa;const oa=c()(aa.Z)(sa||(sa=(e=>e)`
  .aether-dropdown__control {
    height: 40px;
    z-index: 1;
    border-radius: ${0};
    background-color: var(--background-color-primary);
    border: ${0};
    border-right: none;

    &:hover {
      border-color: ${0};
    }

    &--is-focused {
      background-color: ${0};
      border: ${0};
      box-shadow: var(--request-url-highlight-border-color) 0 0 0 2px;
      border-right: none;

      &:hover {
        border-color: ${0};
        border-right: none;
      }
    }

    &::after {
      content: '';
      background-color: var(--border-color-default);
      position: absolute;
      top: 25%;
      bottom: 25%;
      right: 0;
      width: var(--border-width-default);
    }

    &:focus-within {
      &::after {
        content: '';
        background-color: var(--request-url-highlight-border-color);
        position: absolute;
        top: 0%;
        bottom: 0%;
        right: 0;
        width: var(--border-width-default);
      }
    }

    .aether-dropdown__value-container {
      .aether-dropdown__single-value {
        font-weight: var(--text-weight-medium);
        color: ${0};
      }
    }

    /* This removes the clear icon from the dropdown, which is displayed by default when we set isClearable to true */
    .aether-dropdown__indicators {
      .aether-dropdown__clear-indicator {
        display: none;
      }
    }
  }
`),(e=>`${e.theme["border-radius-default"]} 0 0 ${e.theme["border-radius-default"]}`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]}`),(e=>e.theme["border-color-default"]),(e=>e.theme["background-color-primary"]),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["request-url-highlight-border-color"]}`),(e=>e.theme["request-url-highlight-border-color"]),(e=>{var t;return e.value&&e.theme[null==(t=Mr.Is[e.value.label])?void 0:t.color]})),na=e=>(0,D.jsx)(h.ZP,{color:null==e?void 0:e.color,typographyStyle:{fontWeight:"text-weight-medium"},isTruncated:!0,children:null==e?void 0:e.label}),ia=(0,o.observer)((()=>{const[e,t]=(()=>{const e=(0,f.x)();return[e.method,e.setMethod]})(),[r,s]=(0,a.useState)({label:e,value:e}),o=Object.values((0,J.Z)({},Mr.Is,Mr.WJ)),n=(0,a.useRef)(null),i=e=>{e.target.value&&s(null)};return(0,a.useEffect)((()=>{(e=>{s({label:e,value:e})})(e)}),[e]),(0,a.useEffect)((()=>{const e=n.current,t=null==e?void 0:e.querySelector(`#${Mr._A}`);return null==t||t.addEventListener("keyup",i),()=>{null==t||t.removeEventListener("keyup",i)}}),[]),(0,D.jsx)("div",{ref:n,"data-testid":"method-dropdown-container",children:(0,D.jsx)(oa,{id:Mr._A,onChange:e=>{e?t(e.value):s(null)},options:o,triggerWidth:115,menuMinWidth:115,placeholder:"METHOD",menuPlacement:"bottom-start",allowCreateNewOption:!0,isClearable:!0,value:r,customOptionComponent:na,onClose:()=>{r||s({label:e,value:e})}})})}));let la,da,ca,ua=e=>e;const{PerformanceMarkPaint:ha}=kr.perfComponents,pa=c().form(la||(la=ua`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: ${0};
`),(e=>e.theme["spacing-s"])),ma=c().div(da||(da=ua`
  display: flex;
  flex-direction: row;
  height: 40px;
  flex: 1;
  box-sizing: border-box;
  padding-right: ${0};
`),(e=>e.theme["spacing-s"])),ga=c()(p.Z)(ca||(ca=ua`
  height: 40px;
  width: 100px;
  background-color: ${0};
  font-size: ${0};
  font-weight: ${0};
  color: ${0};

  &:hover,
  &.is-hovered {
    background-color: ${0};
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.5;
    background-color: ${0};
    color: ${0};
  }

  &:active,
  &.is-active {
    background-color: ${0};
  }
`),(e=>e.theme["base-color-info"]),(e=>e.theme["text-size-l"]),(e=>e.theme["text-weight-medium"]),(e=>e.theme["content-color-constant"]),(e=>e.theme["highlight-background-color-info"]),(e=>e.theme["base-color-info"]),(e=>e.theme["content-color-constant"]),(e=>e.theme["highlight-background-color-info"])),va=(0,o.observer)((()=>{const e=Vr(),{url:t}=(0,$r.I)(),{addToast:r}=(0,n.ZP)(),a=e?"Sending...":"Send",s=Nr(),o=e=>{if(!t)return null==e||e.preventDefault(),r(Mr.tU.EMPTY_URL),!1;s()};return ft({ctrlKey:!0,keys:"Enter",callback:o}),(0,D.jsx)(ga,{type:"primary",text:(0,D.jsx)("span",{id:"send-request-button-title","aria-label":"Send Request",children:a}),isDisabled:e,onClick:o})})),ba=()=>{const e=xr(),t=Nr(),r=(()=>{const e=(0,f.x)(),{data:t}=(0,K.useActiveEnvironment)();return()=>{e.isExampleRequestSent||e.sendRequest({activeEnvironment:t}),e.setExampleRequestSent()}})(),s=!!(0,f.x)().exampleMeta,{autoRunRequest:o}={autoRunRequest:(0,f.x)().autoRunRequest},n=(0,a.useCallback)((e=>{e.preventDefault(),t()}),[t]);return(0,a.useEffect)((()=>{s&&r()}),[]),(0,a.useEffect)((()=>{o&&t()}),[]),(0,D.jsxs)(pa,{onSubmit:n,children:[(0,D.jsxs)(ma,{children:[(0,D.jsx)(ia,{}),(0,D.jsx)(ra,{})]}),(0,D.jsx)(ha,{markName:Tr,callback:()=>{return t=e,performance.measure(wr,{},Tr),void(0,kr.sendMeasureEvent)({name:wr,label:t,entityType:Sr});var t},children:(0,D.jsx)(va,{})})]})};var fa=r(15761),ya=r(27366),xa=r(71132),ka=r(27162),Sa=r(5246),wa=r(19956);const ja=()=>{const e=(0,f.x)().urlStore;return{queryParams:e.queryParams,updateQueryParams:e.updateQueryParams}},Ta=()=>({queryParamsToShow:(0,f.x)().urlStore.allQueryParams}),Ca=()=>{const e=(0,f.x)().urlStore;return{pathVariables:e.pathVariables,updatePathVariables:e.updatePathVariables}};let Ea,Ia,qa=e=>e;const Pa=c().div(Ea||(Ea=qa`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
  height: ${0};
  font-size: ${0};
  color: ${0};
  font-weight: ${0};
  margin: var(--spacing-xs) var(--spacing-zero);
`),(e=>e.theme["size-m"]),(e=>e.theme["text-size-m"]),(e=>e.theme["content-color-secondary"]),(e=>e.theme["text-weight-medium"])),Ra=c()(u.Z)(Ia||(Ia=qa`
  flex: 1;
  overflow: auto;
`)),Za=(0,o.observer)((()=>{const{updateQueryParams:e}=ja(),{queryParamsToShow:t}=Ta(),{pathVariables:r,updatePathVariables:a}=Ca(),s=r&&r.length>0;return(0,D.jsxs)(Ra,{direction:"column",children:[(0,D.jsx)(Pa,{children:"Query Params"}),(0,D.jsx)(wa.KeyValueEditor,{tableName:"Query Params",allowedColumns:["key","value"],showColumns:["key","value"],values:t,onChange:e,disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0}),s&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Pa,{children:"Path Variables"}),(0,D.jsx)(wa.KeyValueEditor,{tableName:"Path Variables",allowedColumns:["key","value"],showColumns:["key","value"],values:r,onChange:a,disableSorting:!1,nonEditableKeys:!0,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableDelete:!0,disableCreate:!0,disableToggle:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0})]})]})}));var Da=r(31987),Aa=r(38163);function La(){const e=(0,f.x)(),t=(0,a.useRef)((t=>e.setRawEditorState({language:t})));return[e.rawEditorState.language,t.current]}function za(e){const t=(0,f.x)(),r=(0,a.useRef)(t.rawEditorState.beautify),s=t.rawEditorState.beautify,o=(0,a.useRef)((()=>t.setRawEditorState({beautify:[]})));return(0,a.useEffect)((()=>{r.current!==s&&e&&(r.current=s,e())}),[s,e]),o.current}let _a,Ba,Oa=e=>e;const Fa=c().div(_a||(_a=Oa`
  flex: 1;
  display: flex;
  justify-content: space-between;
`)),Ma=c()(aa.Z)(Ba||(Ba=Oa`
  .aether-dropdown__control {
    &--is-focused {
      box-shadow: none;
      border-color: transparent;
    }

    &:hover,
    &:focus {
      border-color: transparent;
    }

    .aether-dropdown__single-value {
      color: var(--content-color-link);
    }

    .aether-dropdown__indicators {
      svg path {
        fill: var(--content-color-link);
      }
    }
  }
`));function $a({showBeautifyBtn:e,defaultValue:t,options:r,onChange:s}){const[o,n]=(0,a.useState)(t),i=za();return(0,a.useEffect)((()=>{n(t)}),[t]),(0,D.jsxs)(Fa,{"data-testid":"raw-body-action-container",children:[(0,D.jsx)(Ma,{value:o,onChange:e=>{n(e),null==s||s(e.value)},options:r,isClearable:!1,isSearchable:!1,triggerType:"tertiary",triggerWidth:"auto",viaPortal:!0}),(0,D.jsx)("div",{children:e?(0,D.jsx)(p.Z,{onClick:i,text:"Beautify"}):null})]})}const Na=[{value:"text",label:"Text"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"html",label:"HTML"},{value:"xml",label:"XML"}],Va=[...Na],Ha=e=>e!==Na[0].value,Ua=(0,o.observer)((function(){const[e,t]=La();return(0,D.jsx)($a,{defaultValue:(r=e,null!=(a=Na.find((e=>e.value===r)))?a:Na[0]),showBeautifyBtn:Ha(e),options:Va,onChange:t});var r,a}));var Wa=r(1590),Ka=r(85332);let Qa;const Ya=(0,a.lazy)((0,Wa.loadRemoteModule)("code-editor/CodeEditor")),Ga=c()(u.Z)(Qa||(Qa=(e=>e)`
  height: 100%;

  .text-editor {
    border: var(--border-width-default) solid var(--border-color-default);
    border-radius: var(--border-radius-s);
    height: calc(100% - var(--spacing-s)) !important;
  }
`)),Xa=(0,o.observer)((function(){const[e]=La(),[t,r]=function(){const e=(0,f.x)(),t=(0,a.useRef)((t=>e.setRawEditorState({content:t})));return[e.rawEditorState.content,t.current]}(),s=(0,a.useRef)(null);za((()=>{var e;null==(e=s.current)||e.beautifyContent()}));const o=(0,Ka.n)();return(0,D.jsx)(Ga,{height:"100%",children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(Ya,{ref:e=>{e?(s.current=e,s.current.focus()):s.current=null},showNonPrintableCharacters:!0,fontSize:12,language:"json"===e?"postman_json":e,codeCompletionProviders:[{provider:o}],wordWrap:!0,value:t,onChange:r,autoFormat:!0})})})}));function Ja(){const[e,t]=(e=>{const{historyId:t}=(0,k.useParams)(),r=(0,f.x)(),s=(0,a.useRef)(((e,a)=>{(0,de.runInAction)((()=>{r.setRequestBodyState({activeBodyType:a}),"activeBodyType"===e&&"graphql"===a&&!t&&"GET"===r.method&&(r.method="POST",(0,n.Am)({title:"Request method changed",status:"info",description:"Request method has been changed to POST for the selected body type - GraphQL"}))}))}));return[e(r.requestBodyState),s.current]})((e=>e.activeBodyType)),r=(0,a.useRef)((e=>{t("activeBodyType",e)}));return[e,r.current]}const es=[["none","none"],["params","form-data"],["urlencoded","x-www-form-urlencoded"],["raw","raw"],["binary","binary"],["graphql","GraphQL"]];let ts,rs,as=e=>e;const ss=(0,a.lazy)((()=>r.e(7589).then(r.bind(r,37589)))),os=c().nav(ts||(ts=as`
  padding: var(--spacing-s) 0;

  /* TODO: Integrate vertical menu for smaller screens or two-pane layout */
  max-width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`)),ns=c().div(rs||(rs=as`
  min-height: var(--spacing-xxl);
`)),is=e=>{const{bodyType:t}=e;switch(t){case"raw":return(0,D.jsx)(Ua,{});case"graphql":return(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(D.Fragment,{children:" "}),children:(0,D.jsx)(ss,{})});default:return(0,D.jsx)(ns,{})}},ls=(0,o.observer)((function({bodyType:e}){const[,t]=Ja();return(0,D.jsx)(os,{children:(0,D.jsxs)(u.Z,{gap:"spacing-s",children:[(0,D.jsx)(Da.Z,{name:"workbench-request-body-group",value:e,onChange:t,children:es.map((([e,t])=>(0,D.jsx)(Aa.Z,{value:e,id:e,label:t})))}),(0,D.jsx)(is,{bodyType:e})]})})}));let ds;const cs=c()(u.Z)(ds||(ds=(e=>e)`
  padding: var(--spacing-s) 0;
`)),us=(0,o.observer)((function(){const[e,t,r]=function(){const e=(0,f.x)();return[e.binaryEditor.files,e.binaryEditor.processFiles,e.binaryEditor.resetFiles]}(),[s]=[(0,f.x)().binaryEditor.error],[o,n]=(0,a.useState)(!1),i=null==e?void 0:e.map((e=>e.path));return(0,D.jsx)(cs,{height:"100%",width:"100%",children:(0,D.jsx)(wa.FileUploader,{label:"Select File",id:"request-body-binary",multiple:!1,value:i,loading:o,error:s,onChange:e=>{n(!0),t(e).finally((()=>n(!1)))},onReset:r})})})),hs=(0,o.observer)((function(){const[e,t]=function(){const e=(0,f.x)();return[e.formDataStore.items,e.formDataStore.setFormDataState]}(),[r]=[(0,f.x)().formDataStore.processFiles];return(0,D.jsx)(wa.KeyValueEditor,{enableFiles:!0,onFilesSelect:r,tableName:"Request Body Form Data",allowedColumns:["key","value"],showColumns:["key","value"],values:e,onChange:t,disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,enableVariableSuggestions:!0})}));function ps(){return(0,D.jsx)(u.Z,{height:"100%",justifyContent:"center",alignItems:"center",children:(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-tertiary",children:"This request does not have a body"})})}const ms=(0,o.observer)((()=>{const[e,t]=(()=>{const e=(0,f.x)();return[e.urlEncodedDataStore.items,e.urlEncodedDataStore.setFormDataState]})();return(0,D.jsx)(wa.KeyValueEditor,{tableName:"Request Body URL Encoded",allowedColumns:["key","value"],showColumns:["key","value"],values:e,onChange:e=>t(e),disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,enableVariableSuggestions:!0})}));var gs=r(49437),vs=r(80047);let bs;const fs=c()(u.Z)(bs||(bs=(e=>e)`
  overflow: hidden;
`));function ys({description:e}){return(0,D.jsx)(fs,{direction:"column",height:"100%",justifyContent:"center",alignItems:"center",children:(0,D.jsx)(gs.Z,{title:"Coming Soon",description:e,children:(0,D.jsx)(vs.Z,{name:"illustration-no-custom-domain"})})})}const xs=(0,a.lazy)((()=>Promise.all([r.e(355),r.e(9513)]).then(r.bind(r,89513))));function ks(e){if(!e.bodyType)return null;switch(e.bodyType){case"raw":return(0,D.jsx)(Xa,{});case"urlencoded":return(0,D.jsx)(ms,{});case"params":return(0,D.jsx)(hs,{});case"none":return(0,D.jsx)(ps,{});case"binary":return(0,D.jsx)(us,{});case"graphql":return(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(xs,{})});default:{var t;const[,r]=null!=(t=es.find((([t])=>t===e.bodyType)))?t:es[0];return(0,D.jsx)(ys,{description:`Support for ${r} in request body is coming soon.`})}}}let Ss;const ws=c().div(Ss||(Ss=(e=>e)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`)),js=(0,o.observer)((function(){const[e]=Ja();return(0,D.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,D.jsx)(ls,{bodyType:e}),(0,D.jsx)(ws,{role:"tabpanel","aria-labelledby":e,children:(0,D.jsx)(ks,{bodyType:e})})]})}));var Ts=r(33105),Cs=r(36166);const Es=()=>{const e=(0,f.x)();return[e.headerData.headers,e.headerData.setHeaders]};let Is,qs,Ps=e=>e;const Rs=c()(p.Z)(Is||(Is=Ps`
  margin: var(--spacing-s) 0;
`)),Zs=c().div(qs||(qs=Ps`
  flex: 1;
  overflow: auto;
`)),Ds=(0,o.observer)((function(){const[e,t]=Es(),[r]=[(0,f.x)().headerData.systemHeaders],[s,o]=(()=>{const e=(0,f.x)();return[e.headerData.systemHeadersHidden,e.headerData.setSystemHeadersHidden]})(),n=(0,a.useMemo)((()=>s?e.filter((e=>!r.includes(e))):e),[e,r,s]),i=s?{text:`${r.length} hidden`,icon:(0,D.jsx)(Ts.Z,{}),tooltip:"These headers will be automatically added and sent with the request. Click to view and modify these headers."}:{text:"Hide auto-generated headers",icon:(0,D.jsx)(Cs.Z,{}),tooltip:"Click to hide these headers. They will still be automatically added and sent with the request."};return(0,D.jsxs)(Zs,{children:[(0,D.jsxs)(u.Z,{role:"heading",alignItems:"center",gap:"spacing-s",children:[(0,D.jsx)(h.ZP,{typographyStyle:{fontWeight:"text-weight-medium"},children:"Headers"}),(0,D.jsx)(Rs,(0,J.Z)({},i,{size:"small",onClick:()=>o(!s)}))]}),(0,D.jsx)(wa.KeyValueEditor,{tableName:"Request Headers",allowedColumns:["key","value"],showColumns:["key","value"],values:n,onChange:e=>{s&&(e=[...r,...e]),t(e)},disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0})]})}));var As=r(18767);const Ls=()=>{const e=(0,f.x)();return[e.requestAuthState,e.setRequestAuthState]};var zs=r(71453);let _s,Bs,Os=e=>e;const Fs=c()(u.Z)(_s||(_s=Os`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),Ms=c()(T.Link)(Bs||(Bs=Os`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  color: var(--content-color-secondary);
`)),$s=()=>(0,D.jsxs)(Ms,{type:"link-default",to:"https://go.pstmn.io/docs-auth",target:"_blank",rel:"noopener noreferer",children:["authorization",(0,D.jsx)(zs.Z,{})]}),Ns=()=>(0,D.jsx)(Fs,{children:(0,D.jsxs)("div",{children:["This request does not use any authorization. Learn more about ",(0,D.jsx)($s,{})]})}),Vs=()=>(0,f.x)().inheritAuthParent;let Hs,Us,Ws=e=>e;const Ks=c()(u.Z)(Hs||(Hs=Ws`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),Qs=c()(T.Link)(Us||(Us=Ws`
  text-decoration: underline;
`)),Ys=(0,o.observer)((()=>{const e=Vs();if(null==e||!e.id)return(0,D.jsx)(Ks,{children:(0,D.jsx)("div",{children:"This request is not inheriting any authorization helper at the moment. Save it in a collection to use the parent's authorization helper."})});const t=((e,t)=>{switch(null==e?void 0:e.type){case"folder":return`/workspace/${t}/folder/${e.id}`;case"collection":return`/workspace/${t}/collection/${e.id}`;default:return""}})(e,(0,Jt.useActiveWorkspaceId)()),r=(e=>{const t=As.supportedAuthOptions.find((t=>{var r;return t.value===(null==e||null==(r=e.auth)?void 0:r.type)}));return null==t?void 0:t.label})(e);return(0,D.jsx)(Ks,{children:(0,D.jsxs)("div",{children:["This request is using ",r," from ",null==e?void 0:e.type," ",(0,D.jsx)(Qs,{to:t,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",children:null==e?void 0:e.name})]})})}));var Gs=r(50767);const Xs=(0,o.observer)((function(){const[e,t]=Ls(),[r,s]=(()=>{const e=(0,f.x)(),t=(0,Gs.o)(),{value:r,setValue:s}=(0,As.useAuthSessionSafe)({model:"request",modelId:t.id});return(0,a.useEffect)((()=>{r&&t.id&&e.setRequestAuthSessionState(r)}),[r,e]),[e.requestAuthSessionState,(r,a)=>{const o=(0,J.Z)({},e.requestAuthSessionState);var n;o.oauth2||(o.oauth2=[]),o.oauth2=o.oauth2.filter((e=>"token_id"!==e.key)),o.oauth2.push({key:r,value:a}),n=o,t.id?s(n):e.setRequestAuthSessionState(n)}]})();return(0,D.jsx)(As.AuthPanel,{authState:e,authSessionState:r,authDescriptions:{[As.AUTH_OPTIONS.inherit]:(0,D.jsx)(Ys,{}),[As.AUTH_OPTIONS.noauth]:(0,D.jsx)(Ns,{})},setAuthState:t,setAuthSessionState:s})})),Js=()=>{const e=(0,f.x)();return[e.protocolProfileBehavior,e.updateProtocolProfileBehavior]},eo=[{id:"strictSSL",title:"Enable SSL certificate verification",description:"Verify SSL certificates when sending a request. Verification failures will result in the request being aborted.",inputFieldType:"toggle",defaultValue:!1},{id:"followRedirects",title:"Automatically follow redirects",description:"Follow HTTP 3xx responses as redirects.",inputFieldType:"toggle",defaultValue:!0},{id:"followOriginalHttpMethod",title:"Follow original HTTP Method",description:"Redirect with the original HTTP method instead of the default behavior of redirecting with GET.",inputFieldType:"toggle",defaultValue:!1},{id:"followAuthorizationHeader",title:"Follow Authorization header",description:"Retain authorization header when a redirect happens to a different hostname.",inputFieldType:"toggle",defaultValue:!1},{id:"removeRefererHeaderOnRedirect",title:"Remove referer header on redirect",description:"Remove the referer header when a redirect happens.",inputFieldType:"toggle",defaultValue:!1},{id:"insecureHTTPParser",title:"Enable strict HTTP parser",description:"Restrict responses with invalid HTTP headers.",inputFieldType:"invertedToggle",defaultValue:!0},{id:"disableUrlEncoding",title:"Encode URL automatically",description:"Encode the URL's path, query parameters, and authentication fields.",inputFieldType:"invertedToggle",defaultValue:!1},{id:"disableCookies",title:"Disable cookie jar",description:"Prevent cookies used in this request from being stored in the cookie jar. Existing cookies in the cookie jar will not be added as headers for this request.",inputFieldType:"toggle",defaultValue:!1},{id:"tlsPreferServerCiphers",title:"Use server cipher suite during handshake",description:"Use the server's cipher suite order instead of the client's during handshake.",inputFieldType:"toggle",defaultValue:!1},{id:"maxRedirects",title:"Maximum number of redirects",description:"Set a cap on the maximum number of redirects to follow.",inputFieldType:"input",defaultValue:"10"},{id:"tlsDisabledProtocols",title:"Protocols disabled during handshake",description:"Specify the SSL and TLS protocol versions to be disabled during handshake. All other protocols will be enabled.",inputFieldType:"multiSelectDropdown",menuOptions:[{value:"TLSv1",label:"TLS v1"},{value:"TLSv1_1",label:"TLS v1.1"},{value:"TLSv1_2",label:"TLS v1.2"},{value:"TLSv1_3",label:"TLS v1.3"}],defaultValue:[]},{id:"tlsCipherSelection",title:"Cipher suite selection",description:"Order of cipher suites that the SSL server profile uses to establish a secure connection.",inputFieldType:"multipleInput",defaultValue:[]}];var to=r(1078),ro=r(88343),ao=r(3115);let so,oo,no,io,lo=e=>e;const co=c().div(so||(so=lo`
  display: flex;
  flex-direction: row;
  min-height: 58px;
  padding: var(--spacing-s) var(--spacing-l);
  box-sizing: border-box;
  width: 100%;

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }
`)),uo=c().div(oo||(oo=lo`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`)),ho=c().div(no||(no=lo`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  min-width: 30%;
  margin-left: var(--spacing-l);
  gap: var(--spacing-s);
`)),po=c()(p.Z)(io||(io=lo`
  display: flex;
  justify-content: flex-start;
  width: fit-content;
`)),mo=function(e){const[t,r]=(0,a.useState)(""),s=t=>{e.onUpdate(t)};return(0,D.jsxs)(co,{children:[(0,D.jsxs)(uo,{children:[(0,D.jsx)(ae.Z,{text:e.item.title}),(0,D.jsx)(ae.Z,{text:e.item.description,type:"secondary"})]}),(0,D.jsxs)(ho,{children:[(a=>{const o=a.inputFieldType,n=e.value;return"toggle"===o?(0,D.jsx)(to.Z,{isChecked:n,onChange:e=>{s(e)}}):"invertedToggle"===o?(0,D.jsx)(to.Z,{isChecked:!n,onChange:e=>{s(!e)}}):"input"===o?(0,D.jsx)(re.Z,{width:"80px",value:n,onChange:e=>{Number.isInteger(Number(e.target.value))&&s(e.target.value)}}):"multiSelectDropdown"===o?(0,D.jsx)(ro.Z,{onChange:e=>{s(e.map((e=>e.value)))},options:a.menuOptions,value:(i=n,l=a.menuOptions,l?i.map((e=>l.find((t=>t.value===e)))):[])}):"multipleInput"===o?(0,D.jsx)(ao.Z,{id:"chip-input-basic",initialList:n,value:t,onChange:e=>{r(null==e?void 0:e.target.value)},onChangeList:e=>{s(e)}},JSON.stringify(n)):null;var i,l})(e.item),e.isResetEnabled&&(0,D.jsx)(po,{type:"plain",onClick:()=>{e.onReset()},tooltip:"Restore this setting to it's default value used in the parent collection/folder or app.",text:"Restore Default"})]})]})};let go;const vo=c().div(go||(go=(e=>e)`
  overflow: auto;
  margin: 8px 0;
`)),bo=(0,o.observer)((function(){const[e,t]=Js(),r=t=>void 0!==e[t];return(0,D.jsx)(vo,{children:eo.map((a=>{return(0,D.jsx)(mo,{item:a,onUpdate:r=>((r,a)=>{const s=(0,J.Z)({},e,{[r]:a});t(s)})(a.id,r),onReset:()=>(r=>{const a=(0,J.Z)({},e);delete a[r],t(a)})(a.id),value:(s=a.id,o=a.defaultValue,void 0===e[s]?o:e[s]),isResetEnabled:r(a.id)});var s,o}))})}));var fo=r(25883);const yo=(0,o.observer)((()=>{const{queryParamsToShow:e}=Ta(),{pathVariables:t}=Ca();return(0,D.jsxs)(D.Fragment,{children:["Params",(e.length>0||t.length>0)&&(0,D.jsx)(fo.Z,{})]})})),xo=(0,o.observer)((()=>{const[e]=Ls(),t=!["noauth","inherit"].includes(e.activeAuthType);return(0,D.jsxs)(D.Fragment,{children:["Authorization",t&&(0,D.jsx)(fo.Z,{})]})})),ko=(0,o.observer)((()=>{const[e]=Js();return(0,D.jsxs)(D.Fragment,{children:["Settings",Object.keys(e).length>1&&(0,D.jsx)(fo.Z,{})]})})),So=(0,o.observer)((()=>{const{requestBodyState:e,urlEncodedDataStore:t,formDataStore:r,rawEditorState:s}=(0,f.x)(),o=(0,a.useMemo)((()=>"urlencoded"===e.activeBodyType?t.items.length>0:"params"===e.activeBodyType?r.items.length>0:"raw"===e.activeBodyType?s.content.length>0:"graphql"===e.activeBodyType),[e.activeBodyType,t.items,r.items,s.content.length]);return(0,D.jsxs)(D.Fragment,{children:["Body",o&&(0,D.jsx)(fo.Z,{})]})}));var wo=r(50429);const jo=()=>{const{data:e}=(0,K.useActiveAndDynamicVariables)();return(0,a.useCallback)(((t,r)=>{const a=new RegExp(/pm.(environment|globals|collectionVariables|variables).(((get|set|unset|has)\(('|").*))$/),s=t.getWordBeforePosition(r);let o=t.getLineContent(r.lineNumber);o&&(o=o.slice(0,Math.max(0,r.column-1)));let n=[];const i=a.exec(o);if(!i||i.length<6)return[];const l=i[1],d=e;let c=[];if(!d)return[];const u={globals:"globals",environment:"environment",collectionVariables:"collection"};if("variables"===l)c=d.filter((e=>(0,wo.B)(e.key).toLowerCase().includes(s.word.toLowerCase())));else if(u[l]){const e=u[l];c=d.filter((t=>t.scope===e&&"dynamic"!==t.type&&(0,wo.B)(t.key).toLowerCase().includes(s.word.toLowerCase())))}const h={startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:s.startColumn,endColumn:s.endColumn};return n=(0,wo.a)(c,h),n}),[e])},To=(0,a.lazy)((0,Wa.loadRemoteModule)("code-editor/CodeEditor")),Co=s().forwardRef(((e,t)=>(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(To,(0,J.Z)({},e,{ref:t}))})));var Eo=r(49709),Io=r.n(Eo),qo=r(3071);let Po,Ro,Zo=e=>e;const Do=c()(u.Z)(Po||(Po=Zo`
  flex: 1;
`)),Ao=c().div(Ro||(Ro=Zo`
  flex: 1;
  overflow: hidden;
  height: 100%;
  margin-top: var(--spacing-l);
  margin-right: calc(-1 * var(--spacing-xxl));
`));function Lo(e){const[t,r]=(0,a.useState)(!0);return(0,D.jsxs)(u.Z,{height:"100%",children:[t&&(0,D.jsxs)(Do,{direction:"column",children:[(0,D.jsx)("div",{children:e.header}),(0,D.jsx)(Ao,{children:e.children})]}),(0,D.jsx)("div",{children:(0,D.jsx)(p.Z,{onClick:()=>r((e=>!e)),type:"tertiary",icon:t?(0,D.jsx)(ke.Z,{}):(0,D.jsx)(qo.Z,{})})})]})}let zo,_o,Bo,Oo=e=>e;const Fo=c().h5(zo||(zo=Oo`
  flex: 0;
  margin: 0;
  margin-bottom: 4px;
  font-weight: 600;
  word-break: normal;
  font-size: 12px;
  line-height: 1.4;

  /* This color value was already hardcoded */
  color: var(--grey-50);
`)),Mo=c().ul(_o||(_o=Oo`
  position: relative;
  z-index: 1;
  overflow: auto;
  height: calc(100% - var(--spacing-l));
  flex: 1;
  margin: 0;
  padding: 0;
  padding-right: var(--spacing-l);
  color: var(--content-color-link);
  box-sizing: border-box;
  font-family: var(--text-family-default);
`)),$o=c().li(Bo||(Bo=Oo`
  list-style: none;
  user-select: none;
  cursor: pointer;
  padding: var(--spacing-s) var(--spacing-zero);
`)),No=Io().getExamples("prerequest");function Vo({onSelect:e}){return(0,D.jsx)(Lo,{header:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h.ZP,{type:"small",children:"Pre-request scripts are written in JavaScript, and are run before the request is sent. Learn more about "}),(0,D.jsx)(T.Link,{to:"https://go.pstmn.io/docs-prerequest-scripts",target:"_blank",children:(0,D.jsx)(h.ZP,{type:"link-default",isExternal:!0,children:"pre-request scripts"})})]}),children:(0,D.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,D.jsx)(Fo,{children:"Snippets"}),(0,D.jsx)(Mo,{children:No.map(((t,r)=>(0,D.jsx)($o,{"data-id":r,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},r)))})]})})}let Ho,Uo,Wo,Ko=e=>e;const Qo=c()(u.Z)(Ho||(Ho=Ko`
  height: calc(100% - var(--spacing-s));
`)),Yo=c().div(Uo||(Uo=Ko`
  flex: 1 1 70%;
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  border-radius: var(--border-radius-default);

  /* since the monaco editor inside the panel has a resize observer present,
   * the parent body needs a fixed width otherwise the resize observer gets
   * triggered for pixel increase when the snippet panel is opened.
   */
  width: calc(100% - ${0}px - var(--text-size-m));
`),250),Go=c().div(Wo||(Wo=Ko`
  flex: 0 0 auto;
  max-width: ${0}px;
  padding-left: var(--spacing-m);
  font-size: var(--text-size-s);
`),250);function Xo(e){return(0,D.jsx)(u.Z,{direction:"column",height:"100%",children:(0,D.jsxs)(Qo,{children:[(0,D.jsx)(Yo,{children:e.leftPanel}),(0,D.jsx)(Go,{children:e.rightPanel})]})})}function Jo(){const e=(0,f.x)();return[e.preRequestStore.content,e.preRequestStore.setContent]}function en(){const e=(0,f.x)();return[e.testScriptStore.content,e.testScriptStore.setContent]}const tn=["jsLib","node","postman-collection","chai","pre-script"],rn=(0,o.observer)((function(){const e=(0,a.useRef)(null),[t,r]=Jo(),s=(0,a.useCallback)((t=>{var r;null==(r=e.current)||r.insertTextBlock(t)}),[]),o=jo();return(0,D.jsx)(Xo,{leftPanel:(0,D.jsx)(Co,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:r,typeDefinitionTypes:tn}),rightPanel:(0,D.jsx)(Vo,{onSelect:s})})})),an=Io().getExamples("test");function sn({onSelect:e}){return(0,D.jsx)(Lo,{header:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h.ZP,{type:"small",children:"Test scripts are written in JavaScript, and are run after the response is received. Learn more about "}),(0,D.jsx)(T.Link,{to:"https://go.pstmn.io/docs-test-scripts",target:"_blank",children:(0,D.jsx)(h.ZP,{type:"link-default",isExternal:!0,children:"tests scripts"})})]}),children:(0,D.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,D.jsx)(Fo,{children:"Snippets"}),(0,D.jsx)(Mo,{children:an.map(((t,r)=>(0,D.jsx)($o,{"data-id":r,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},r)))})]})})}const on=["jsLib","node","postman-collection","chai","tests-script"],nn=(0,o.observer)((function(){const e=(0,a.useRef)(null),[t,r]=en(),s=(0,a.useCallback)((t=>{var r;null==(r=e.current)||r.insertTextBlock(t)}),[]),o=jo();return(0,D.jsx)(Xo,{leftPanel:(0,D.jsx)(Co,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:r,typeDefinitionTypes:on}),rightPanel:(0,D.jsx)(sn,{onSelect:s})})}));let ln;const dn=c().div(ln||(ln=(e=>e)`
  display: inline-flex;
  background-color: var(--base-color-error);
  width: 5px;
  height: 5px;
  margin-left: var(--spacing-xs);
  transform: rotate(45deg);
`)),cn=()=>(0,D.jsx)(dn,{"aria-label":"tab with errors","data-testid":"tab-error-indicator"}),un=(0,o.observer)((({type:e="prerequest",title:t})=>{const[r]=Jo(),[a]=en(),s=(0,dr.KB)(),o=(0,dr.aD)(),n="test"===e?!!a:!!r,i="test"===e?!!o:!!s;return(0,D.jsxs)(D.Fragment,{children:[t,n&&!i&&(0,D.jsx)(fo.Z,{}),i&&n&&(0,D.jsx)(cn,{})]})}));let hn;const pn=c().span(hn||(hn=(e=>e)`
  padding: var(--spacing-zero) var(--spacing-xs);
  color: var(--content-color-success);
`)),mn=(0,o.observer)((()=>{const[e]=Es(),t=e.length>0?(0,D.jsxs)(pn,{children:["(",e.length,")"]}):null;return(0,D.jsxs)("div",{children:["Headers",t]})}));mn.displayName="observer(RequestHeadersTabHeader)";const gn=mn;var vn=r(12837);const bn=()=>{const e=(0,f.x)();return[e.activeRequestEditorTabIndex,e.setActiveRequestEditorTabIndex]};let fn,yn,xn,kn,Sn,wn=e=>e;const jn=c()(l.PaneContent)(fn||(fn=wn`
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`)),Tn=c()(fa.Z)(yn||(yn=wn`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]}`)),Cn=c()(fa.Z)(xn||(xn=wn`
  box-sizing: border-box;
  padding: ${0};

  /**
   * Following selectors help provide TabPanels height of the parent.
   */
  &,
  > div,
  > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]}`)),En=e=>(0,D.jsx)(l.PaneHeader,(0,J.Z)({},e,{defaultLayout:"horizontal",horizontalComponent:null,verticalComponent:(0,D.jsx)(l.PaneLabel,{layout:"vertical",label:(0,D.jsx)(ee.Z,{type:"h5",text:"Request Editor",color:"content-color-primary"}),arrowDirection:"right"})})),In=c()(u.Z)(kn||(kn=wn`
  padding-inline-end: var(--spacing-l);
`)),qn=e=>{const{isCollapsedX:t}=e;return t?null:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Rn,{}),(0,D.jsx)(jn,{children:(0,D.jsx)(Zn,{})})]})},Pn=c()(p.Z)(Sn||(Sn=wn`
  float: right;
  margin-left: auto;
  margin-right: var(--spacing-s) !important;
`)),Rn=(0,o.observer)((()=>{const[e,t]=(0,T.useSearchParams)(),[r,a]=bn();return(0,D.jsxs)(In,{children:[(0,D.jsx)(Tn,{activeTabIndex:r,onChange:a,type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,D.jsxs)(ya.Z,{children:[(0,D.jsx)(xa.Z,{label:(0,D.jsx)(yo,{})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(xo,{})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(gn,{})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(So,{})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(un,{title:"Pre-request Script"})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(un,{type:"test",title:"Tests"})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(ko,{})})]})}),(0,D.jsx)(Pn,{type:"plain",text:"Code",onClick:()=>{e.set("ctx","code"),t(e)}}),(0,D.jsx)(p.Z,{type:"plain",text:"Cookies",onClick:e=>{e.stopPropagation(),Z.AnalyticsService.addEventV2({category:"request-cookies-ux",action:"request-cookies-click",label:"request-cookies",entityType:"request"}),(0,vn.getCookieManager)().openCookiesEditor()}})]})})),Zn=(0,o.observer)((()=>{const[e]=bn();return(0,D.jsx)(Cn,{activeTabIndex:e,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,D.jsxs)(ka.Z,{children:[(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(Za,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(Xs,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(Ds,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(js,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(rn,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(nn,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(bo,{})})]})})}));var Dn=r(5714),An=r(31113),Ln=r(53195);const zn=(0,a.createContext)({activeResponseInfoTab:0,setActiveResponseInfoTab:()=>null}),_n=()=>{const e=(0,a.useContext)(zn);if(!e)throw new Error("useResponseViewerContext should be used within a ResponseViewerContext.Provider");return e},Bn=({children:e})=>{const[t,r]=(0,a.useState)(0),s=(0,a.useMemo)((()=>({activeResponseInfoTab:t,setActiveResponseInfoTab:r})),[t,r]);return(0,D.jsx)(zn.Provider,{value:s,children:e})};var On=r(5111);let Fn,Mn,$n=e=>e;const Nn=(0,a.lazy)((()=>r.e(3331).then(r.bind(r,63331)))),Vn=c()(fa.Z)(Fn||(Fn=$n`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>e.theme["spacing-zero"])),Hn=c()(h.ZP)(Mn||(Mn=$n`
  margin-left: var(--spacing-xs);
`)),Un=({numberOfItems:e})=>e?(0,D.jsxs)(Hn,{color:"content-color-success",children:["(",e,")"]}):null,Wn=(0,o.observer)((()=>{const e=(0,dr.Oj)(),t=(0,dr.Fp)(),{activeResponseInfoTab:r,setActiveResponseInfoTab:a}=_n();return(0,dr.A5)()?(0,D.jsx)(Vn,{activeTabIndex:r,onChange:e=>{a(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,role:"tablist","data-testid":"response-viewer-tablist",children:(0,D.jsxs)(ya.Z,{children:[(0,D.jsx)(xa.Z,{label:"Body"}),(0,D.jsx)(xa.Z,{label:(0,D.jsxs)(D.Fragment,{children:["Cookies",(0,D.jsx)(Un,{numberOfItems:(null==t?void 0:t.length)||0})]})}),(0,D.jsx)(xa.Z,{label:(0,D.jsxs)(D.Fragment,{children:["Headers",(0,D.jsx)(Un,{numberOfItems:(null==e?void 0:e.length)||0})]})}),(0,D.jsx)(xa.Z,{label:(0,D.jsx)(On.ResponseTestResultsHeader,{})})]})}):null}));function Kn({loading:e,error:t}){return e||t?(0,D.jsx)(ee.Z,{type:"h5",text:"Response",color:"content-color-primary"}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Wn,{}),(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(D.Fragment,{children:" "}),children:(0,D.jsx)(Nn,{})})]})}let Qn;const Yn=c()(u.Z)(Qn||(Qn=(e=>e)``)),Gn=(0,o.observer)((()=>{const{layout:e,setLayout:t}=(0,Ln.W)();return"vertical"===e?(0,D.jsx)(p.Z,{type:"plain",onClick:()=>t("horizontal"),"data-testid":"toggle-layout-button",icon:(0,D.jsx)(Dn.Z,{}),tooltip:"Two pane view"}):(0,D.jsx)(p.Z,{type:"plain",onClick:()=>t("vertical"),"data-testid":"toggle-layout-button",icon:(0,D.jsx)(An.Z,{}),tooltip:"Single pane view"})})),Xn=(0,o.observer)((e=>{const{layoutAxis:t,getCollapseArrowDirection:r}=(0,Ln.W)(),a=(0,dr.A5)(),s=(0,dr.as)(),o=(0,dr.KB)();return(0,D.jsx)(l.PaneHeader,(0,J.Z)({},e,{"data-testid":"response-pane-header",defaultLayout:"horizontal",layoutAxis:t,horizontalComponent:(0,D.jsx)(l.PaneLabel,{layout:"horizontal",label:(0,D.jsx)(Yn,{alignItems:"center",children:(0,D.jsx)(Kn,{loading:!a,error:s||o})}),actions:(0,D.jsx)(Gn,{}),arrowDirection:r}),verticalComponent:(0,D.jsx)(l.PaneLabel,{layout:"vertical",actions:(0,D.jsx)(Gn,{}),label:(0,D.jsx)(ee.Z,{type:"h5",text:"Response",color:"content-color-primary"}),arrowDirection:r})}))}));var Jn=r(2623);const ei=({children:e})=>{const{requestId:t}=(0,k.useParams)(),[r]=(0,T.useSearchParams)();let a;t?a=t:r.has("request")&&(a=r.get("request"));const s=(0,Jt.useActiveWorkspaceId)(),o=a?(0,oe.requestFindOneSelectCollectionQuery)({requestId:a}):void 0,n=new K.VariablesContextStore({collectionFetchOptions:o},{workspaceId:s});return(0,D.jsx)(K.VariablesContextProvider,{store:n,children:e})};var ti=r(96529),ri=r(83125),ai=r(68637);let si;const oi=c().button(si||(si=(e=>e)`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  font-size: 12px;
  line-height: 1;
  height: 32px;
  background-color: transparent;
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }
`)),ni=s().forwardRef((function(e,t){return(0,D.jsx)(oi,(0,J.Z)({},e,{ref:t}))}));var ii=r(45261),li=r(32054);const di={editor:null,setEditor:()=>{}},ci=s().createContext(di);function ui(e){const[t,r]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({editor:t,setEditor:r})),[t]);return(0,D.jsx)(ci.Provider,{value:s,children:e.children})}const hi=()=>{const{editor:e,setEditor:t}=(0,a.useContext)(ci);if(!t)throw new Error("EditorContextProvider must be used to access useEditorContext");return[e,t]};function pi(e){const{enabled:t}=e,[r]=hi(),{addToast:a}=(0,n.ZP)();return t?(0,D.jsxs)(u.Z,{gap:"spacing-s",children:[(0,D.jsx)(te.Z,{content:"Copy to clipboard",placement:"top",children:(0,D.jsx)(ni,{"aria-label":"Copy to Clipboard",onClick:()=>(null==r||r.copyToClipboard(),void a({title:"Copied to clipboard",status:"success",description:null})),children:(0,D.jsx)(ii.Z,{})})}),(0,D.jsx)(te.Z,{content:"Find in response",placement:"top",children:(0,D.jsx)(ni,{"aria-label":"Find in Response",onClick:()=>null==r?void 0:r.openFindWidget(),children:(0,D.jsx)(li.Z,{})})})]}):null}var mi=r(64691),gi=r(48263),vi=r(59824),bi=r(17282);function fi({language:e,onLangaugeSelect:t,onLanguageReset:r}){return(0,D.jsxs)(mi.Z,{"data-testid":"response-language-selector-menu",children:[(0,D.jsx)(gi.Z,{text:(0,D.jsx)("span",{"aria-label":"Switch language",children:e})}),(0,D.jsxs)(vi.Z,{children:[Object.keys(ti.B7).map((e=>{const r=ti.B7[e];return(0,D.jsx)(bi.Z,{"data-testid":`response-language-${r}`,onClick:()=>t(r),children:r},r)})),(0,D.jsx)(bi.Z,{"data-testid":"response-language-auto",onClick:r,children:"Auto"},"Auto")]})]})}const yi=["wordWrap","setWordWrap","activeTab","onTabChange"];let xi,ki,Si=e=>e;const wi=c()(p.Z)(xi||(xi=Si`
  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.wordWrap&&e.theme["content-color-brand"])),ji=c()(u.Z)(ki||(ki=Si`
  padding: ${0};
`),(e=>e.theme["spacing-s"]));function Ti(e){const{wordWrap:t,setWordWrap:r,activeTab:s,onTabChange:o}=e,n=(0,ar.Z)(e,yi),[i,l]=(0,a.useState)(null!=s?s:ti.ll.PRETTY),d=i===ti.ll.PRETTY;i!==s&&s&&l(s);const c=[ti.ll.PRETTY,ti.ll.RAW].includes(i);return(0,D.jsxs)(ji,{direction:"row",gap:"spacing-s",children:[(0,D.jsx)(ai.y,{activeTabIndex:i,onChange:e=>{null==o||o(e),l(e)},type:"secondary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,D.jsxs)(ya.Z,{children:[(0,D.jsx)(xa.Z,{label:"Pretty"}),(0,D.jsx)(xa.Z,{label:"Raw"}),(0,D.jsx)(xa.Z,{label:"Preview"})]})}),(0,D.jsxs)(u.Z,{justifyContent:"space-between",grow:"1",children:[(0,D.jsx)(u.Z,{gap:"spacing-s",children:d&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(fi,(0,J.Z)({},n)),(0,D.jsx)(wi,{type:"secondary",icon:(0,D.jsx)(ri.Z,{}),wordWrap:t,onClick:()=>r(!t)})]})}),(0,D.jsx)(pi,{enabled:c})]})]})}var Ci=r(64019),Ei=r(21180);let Ii,qi,Pi=e=>e;const Ri=(0,a.lazy)((0,Wa.loadRemoteModule)("code-editor/CodeEditor")),Zi=(0,a.lazy)((()=>r.e(8360).then(r.bind(r,58360)).then((e=>({default:e.ResponsePreviewPanel}))))),Di=c()(l.PaneContent)(Ii||(Ii=Pi`
  height: 100%;
`)),Ai=c().div(qi||(qi=Pi`
  height: 100%;
  padding: ${0};
`),(e=>`${e.theme["spacing-s"]}`)),Li=(e,t,r)=>{const a=[...e];return a[t]=r,a},zi=(0,o.observer)((()=>{const[e,t]=s().useState(!0),[,r]=hi(),o=(0,dr.j2)(),[n,l,d]=(0,dr.Sb)(),c=Ri,[u,h]=(0,a.useState)(ti.ll.PRETTY),[p,m]=(0,a.useState)([n,ti.B7.TEXT]);(0,a.useEffect)((()=>{m((e=>Li(e,ti.ll.PRETTY,n)))}),[n]);const g=(0,a.useCallback)((e=>m((t=>{if(u===ti.ll.PRETTY)l(e);else if(u===ti.ll.RAW)return Li(t,u,e);return t}))),[u,l]),v=p[u];let b;return b=u===ti.ll.PREVIEW?(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(Zi,{})}):(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(c,{language:null==v?void 0:v.toLowerCase(),wordWrap:e,readOnly:!0,enableLinks:!0,value:o,ref:r,autoFormat:!0})}),(0,D.jsxs)(Di,{children:[(0,D.jsx)(Ti,{wordWrap:e,setWordWrap:t,activeTab:u,onTabChange:h,language:v,onLangaugeSelect:g,onLanguageReset:()=>g(d)}),(0,D.jsx)(Ai,{children:b})]})})),_i=(0,o.observer)((function(){const[e]=(0,dr.Ik)(),t=(0,Ci.n)(null==e?void 0:e.mimeType);return(0,D.jsx)(Ei.CustomErrorBoundary,{appId:"http-workbench",errorElementId:"code-editor-provider",children:(0,D.jsx)(ui,{children:t?(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(Zi,{})}):(0,D.jsx)(zi,{})})})}));let Bi;const Oi=c()(u.Z)(Bi||(Bi=(e=>e)`
  overflow: hidden;
`)),Fi=()=>(0,D.jsx)(Oi,{height:"calc(100% - var(--spacing-xxl))",alignItems:"center",children:(0,D.jsx)(gs.Z,{description:ti.Ei,children:(0,D.jsx)(vs.Z,{name:"illustration-hit-send"})})}),Mi=r.p+"failed-request.dfb3897ba46b8e21cd9a7434584860fe.svg";let $i,Ni,Vi,Hi,Ui,Wi=e=>e;const Ki=c()(u.Z)($i||($i=Wi`
  font-size: var(--text-size-m, 12px);
  gap: var(--spacing-l);
`)),Qi=c().div(Ni||(Ni=Wi`
  padding: var(--spacing-xs) var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: 20px;
  margin: var(--spacing-m) var(--spacing-xxxl) var(--spacing-m)
    var(--spacing-xxxl);
  font-size: var(--text-size-m, 12px);
`)),Yi=c()(h.ZP)(Vi||(Vi=Wi``)),Gi=c().img(Hi||(Hi=Wi`
  width: 120px;
  height: 120px;
`)),Xi=c()(T.Link)(Ui||(Ui=Wi`
  font-weight: 600;

  &,
  &:visited,
  &:active,
  &:hover,
  &:focus {
    color: var(--content-color-link);
  }
`)),Ji=()=>{const e=(0,dr.as)();return e?(0,D.jsxs)(Ki,{alignItems:"center",justifyContent:"center",direction:"column",height:"100%",children:[(0,D.jsx)(Gi,{src:Mi,alt:"Could not send request"}),(0,D.jsx)(Yi,{children:"Could not send request"}),(0,D.jsx)(Qi,{children:(0,D.jsxs)(D.Fragment,{children:["Error: ",null==e?void 0:e.message]})}),(0,D.jsx)(Xi,{to:"https://go.pstmn.io/troubleshooting-request",children:"Learn more about troubleshooting API requests"})]}):null};let el,tl,rl=e=>e;const al=c().div(el||(el=rl`
  font-size: var(--text-size-m, 12px);
  padding: var(--spacing-s);
`)),sl=c().div(tl||(tl=rl`
  padding: var(--spacing-s);
  margin: var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: var(--border-radius-default);
  text-align: center;
`)),ol=(0,o.observer)((()=>{const e=(0,dr.KB)();return(0,D.jsx)(al,{children:(0,D.jsxs)(sl,{children:[(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-error",children:"There was an error in evaluating the Pre-request Script:"})," ",(0,D.jsxs)(h.ZP,{color:"content-color-error",typographyStyle:{fontSize:"text-size-m",fontWeight:"text-weight-medium",lineHeight:"line-height-m"},children:[null==e?void 0:e.name,": ",null==e?void 0:e.message]})]})})}));let nl;const il=c()(fa.Z)(nl||(nl=(e=>e)`
  padding: 0;
  overflow-y: auto;

  /**
   * Following selectors help provide TabPanels height of the parent.
   * Ref: apps/http-workbench/src/components/request-editor/index.tsx
   */
  & {
    height: calc(100% - var(--spacing-xxl));
  }

  & > div,
  & > div > div {
    height: 100%;
  }
`)),ll=(0,a.lazy)((()=>Promise.all([r.e(3468),r.e(3478)]).then(r.bind(r,63478)))),dl=(0,a.lazy)((()=>r.e(1507).then(r.bind(r,41507)))),cl=(0,a.lazy)((()=>Promise.resolve().then(r.bind(r,5111)).then((e=>({default:e.ResponseTestResultsPanel}))))),ul=(0,o.observer)((({isCollapsedX:e,isCollapsedY:t})=>{const{activeResponseInfoTab:r}=_n(),s=(0,dr.A5)(),o=(0,dr.as)(),n=(0,dr.KB)();return e||t?null:n?(0,D.jsx)(ol,{}):o?(0,D.jsx)(Ji,{}):s?(0,D.jsx)(il,{activeTabIndex:r,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,padding:0,"data-testid":"response-viewer-tabs",children:(0,D.jsxs)(ka.Z,{children:[(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(_i,{})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{size:"large"}),children:(0,D.jsx)(ll,{})})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{size:"large"}),children:(0,D.jsx)(dl,{})})}),(0,D.jsx)(Sa.Z,{children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{size:"large"}),children:(0,D.jsx)(cl,{})})})]})}):(0,D.jsx)(Fi,{})}));let hl,pl,ml,gl,vl,bl,fl=e=>e;const yl=c()(u.Z)(hl||(hl=fl`
  gap: var(--spacing-xl);
  position: absolute;
  inset: 0;
  z-index: 100;
`)),xl=c().div(pl||(pl=fl`
  position: absolute;
  height: 2px;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 101;
`)),kl=(0,d.keyframes)(ml||(ml=fl`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
`)),Sl=c().div(gl||(gl=fl`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    78.82deg,
    var(--background-color-primary),
    var(--base-color-brand) 49.98%,
    var(--background-color-primary)
  );
  animation: ${0} 1s ease-in-out infinite;
`),kl),wl=c().div(vl||(vl=fl`
  position: absolute;
  inset: 0;
  z-index: 100;
  background: var(--background-color-primary);
  opacity: 0.8;
`)),jl=c()(p.Z)(bl||(bl=fl`
  width: calc(3 * var(--spacing-xl));
`)),Tl=(0,o.observer)((e=>{const t=Vr(),r=(0,dr.fX)(),{isCollapsedX:a,isCollapsedY:s}=e;return t?a||s?(0,D.jsx)(wl,{}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(wl,{}),(0,D.jsx)(xl,{children:(0,D.jsx)(Sl,{})}),(0,D.jsxs)(yl,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",direction:"column",children:[(0,D.jsx)(h.ZP,{type:"strong",children:"Sending request..."}),(0,D.jsx)(jl,{type:"secondary",text:"Cancel",onClick:r})]})]}):null}));let Cl;const El=c()(u.Z)(Cl||(Cl=(e=>e)`
  height: var(--wp-workbench-height);
  width: 100vw;
  min-width: 650px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
  overflow: hidden;
`)),Il=(0,o.observer)((({children:e})=>{var t;const{isLoading:r,error:a}=(()=>{const e=(0,f.x)();return{isLoading:e.isLoading,error:e.error}})(),s=(0,f.x)(),{requestId:o}=(0,k.useParams)();if((0,oe.useCollectionSubscription)({collectionId:s.collection.id||"",workspaceId:(0,Jt.useActiveWorkspaceId)(),subscribingEntity:{id:null!=(t=s.metadata.id)?t:o,type:"request"}}),!r&&a)throw a;return(0,D.jsx)(El,{direction:"column",children:r?(0,D.jsx)(i.Z,{size:"large",description:"Loading Request"}):e})}));var ql=r(20684);const Pl=()=>{var e;const t=(0,f.x)(),r=(0,J.Z)({id:null==(e=t.metadata)?void 0:e.id,url:t.urlStore.url,headerData:t.headerData.headers,method:t.method,pathVariableData:t.urlStore.pathVariables,queryParams:t.urlStore.allQueryParams,auth:t.requestAuthState,data:"",parentCollectionId:t.metadata.collectionId},t.previewRequestBody);return"raw"===t.requestBodyState.activeBodyType?r.data=t.rawEditorState.content:"graphql"===t.requestBodyState.activeBodyType&&(r.data=t.graphqlPayloadStore.payload),r},Rl=(0,a.lazy)((0,Wa.loadRemoteModule)("codegen/Codegen")),Zl=e=>(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(Rl,(0,J.Z)({},e))});var Dl=r(83701);function Al(e){const t=(0,a.useRef)();return t.current=e,(0,a.useCallback)(((...e)=>{const r=t.current;if(!r)throw new Error("Event handler wrapped in `useEventHandler` called during render, it may only be called in effects or at any other time.");return r(...e)}),[])}var Ll=r(43753);const zl=(0,a.lazy)((0,Wa.loadRemoteModule)("mimir-editor/MimirEditor")),_l=s().forwardRef(((e,t)=>(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsx)(zl,(0,J.Z)({},e,{ref:t}))})));let Bl,Ol,Fl,Ml,$l,Nl,Vl,Hl=e=>e;const Ul="Postman editor",Wl=c()(Dl.Z)(Bl||(Bl=Hl`
  /* stylelint-disable no-descending-specificity */
  position: relative;
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  width: 100%;
  cursor: text;
  box-sizing: border-box;
  margin-top: 34px;
  border-radius: var(--border-radius-default);
  border: var(--border-width-default) var(--border-style-solid) transparent;

  /* If the component is not read-only and in edit mode, add focus border */
  ${0}

  &:hover {
    background-color: var(--background-color-secondary);
    background-color: ${0};
  }

  & .description-preview {
    padding: 0;

    &__placeholder {
      padding: var(--spacing-m);
    }

    &__markdown {
      padding: var(--spacing-m);
    }
  }

  & .mimir {
    min-height: ${0}px !important;

    & .editor__container {
      margin-top: 6px;
      height: fit-content;

      & div[data-slate-editor='true'] {
        min-height: ${0}px !important;
        padding: var(--spacing-m);
        max-height: fit-content;
        width: auto;
        box-sizing: border-box;
      }
    }

    & .toolbar__anchor {
      height: auto;
      background: var(--background-color-primary);
      display: ${0};
      align-items: center;
      z-index: 100;
      position: sticky;
      top: 0;
      margin-top: -36px;

      /* needed to align the toolbar with the editor */
      background-color: transparent;
      border-radius: var(--border-radius-default);

      & .slate-HeadingToolbar {
        width: 100%;
        min-height: unset;
        border-radius: var(--border-radius-default) var(--border-radius-default);
        border: var(--border-width-default) solid var(--border-color-strong);
        box-shadow: ${0};
        height: 28px;

        .toolbar__wrapper {
          padding-right: 0;
        }

        .toolbar__info {
          display: none;
        }

        .toolbar__list {
          height: fit-content;
        }

        .toolbar__dropdown {
          top: 30px;
        }

        .toolbar__dropdown__heading {
          cursor: pointer;
        }

        & .toolbar__toggle {
          display: flex;
          padding-right: var(--spacing-s);

          & > button {
            height: 22px;
            padding: 0 4px;
            margin-top: 3px;
          }

          & .aether-dropdown__control {
            background: transparent;
            height: 28px;
            border: none;

            &--is-focused {
              border: none;
              box-shadow: none;

              &:hover {
                border: none;
                box-shadow: none;
              }
            }
          }
        }
      }
    }

    ${0}
  }

  ${0}

  ${0}
`),(e=>e.editable&&e.editMode&&(0,d.css)(Ol||(Ol=Hl`
      border-color: var(--base-color-info);
    `))),(e=>e.editable&&!e.editMode?"var(--background-color-secondary)":"transparent"),(e=>e.minimumEditorHeight),(e=>e.minimumEditorHeight),(e=>e.isInViewPort?"flex":"none"),(e=>"0px 2px 4px "+(e.theme["content-color-primary"]===Ll.dark["content-color-primary"]?"rgba(0, 0, 0, 0.2)":"rgba(0, 0, 0, 0.05)")),(e=>!e.editMode&&(0,d.css)(Fl||(Fl=Hl`
        a {
          cursor: pointer;
        }

        .slate-codeblock-wrapper {
          cursor: pointer;

          & pre {
            cursor: text;
          }
        }

        .image-balloon-container,
        .image-handle.handle-right,
        .image-handle.handle-left,
        .link-balloon-container.edit,
        .media-balloon-container,
        .link-balloon-container {
          display: none;
        }

        .image-element.selected .image-item {
          opacity: 1;
          box-shadow: unset;
        }
      `))),(e=>!e.editMode&&(0,d.css)(Ml||(Ml=Hl`
      /* added to hide grammarly icon in preview mode */
      [contenteditable] ~ grammarly-extension,
      input ~ grammarly-extension,
      textarea ~ grammarly-extension {
        display: none;
      }
    `))),(e=>e.editMode?(0,d.css)($l||($l=Hl`
          figure {
            .image-caption::placeholder {
              visibility: visible;
            }
          }
        `)):(0,d.css)(Nl||(Nl=Hl`
          figure {
            .image-caption::placeholder {
              visibility: hidden;
            }
          }
        `)))),Kl=c().div(Vl||(Vl=Hl`
  position: absolute;
  inset: 0;
  background-color: var(--background-color-primary);
  opacity: 0.75;
  z-index: 1;
  transition: opacity 100ms ease-in-out;
`)),Ql=({onSave:e,editable:t,isOffline:r,entityType:s,placeholder:o,entityDescription:n,modelDetails:i,isEntityLoading:l,resolvedEntityDescription:d,minimumEditorHeight:c=75,disableMarkdownEditor:u=!1,updateParentAboutContainerDimension:h,isBigFontSize:p=!1})=>{var m,g;const v=(0,a.useRef)(),b=(0,a.useRef)(!1),[f,y]=(0,a.useState)(!1),[x,k]=(0,a.useState)(n),[S,w]=(0,a.useState)(Ul),j=Ul,[C,E]=(0,a.useState)(null!=d?d:n);(0,a.useEffect)((()=>{k(n),E(d)}),[n,d]);const I=Al((()=>{t&&(w(j),y(!0))})),[q]=((e,t,r)=>{const s=(0,a.useRef)(null),o=(0,a.useRef)(0),n=(0,a.useRef)(),i=(0,a.useRef)(!1),l=(0,a.useRef)(!1),[d,c]=(0,a.useState)(!1),u=Al((t=>{const r=t.target,a=null!==r.closest(".slate-codeblock-wrapper")&&null==r.closest("pre"),n=void 0!==r.ownerSVGElement,l=null!==r.closest(".markdown-editor")||null!==r.closest(".toolbar__toggle")||null!==r.closest(".team-usage-error"),d=null!==r.closest(".media-element"),c=r.closest("[data-entity-id='click-to-expand-button']");if(a||n||l||c)return;d&&(t.preventDefault(),t.stopPropagation());const u=null!==r.closest("a");if(u){var h;t.preventDefault();const e=r.closest("a"),a=null==e?void 0:e.href,o=null==(h=s.current)?void 0:h.querySelector(":focus");null==o||o.blur(),a&&(0,T.openExternalLink)(a)}i.current||o.current>1||u||e()})),h=Al((t=>{if(2!==t.button){if(""===r)return e();o.current=t.detail,l.current=!0,n.current&&(clearTimeout(n.current),n.current=void 0),n.current=setTimeout((()=>{1===o.current&&u(t),o.current=0}),300)}})),p=Al((e=>{2!==e.button&&(l.current=!1)})),m=Al((()=>{i.current=!!l.current})),g=Al((t=>{const r=t.target,a=null!==(null==r?void 0:r.closest(".markdown-editor"))||null!==(null==r?void 0:r.closest(".toolbar__toggle"));(t.ctrlKey||t.metaKey)&&"c"===t.key||a||!s.current||t.target!==s.current&&!s.current.contains(t.target)||1!==t.key.length&&"Backspace"!==t.key&&"Delete"!==t.key&&"Enter"!==t.key&&"Tab"!==t.key||e()}));return(0,a.useEffect)((()=>{if(t)return;const e=s.current;return null==e||e.addEventListener("mouseup",p),null==e||e.addEventListener("mousedown",h),null==e||e.addEventListener("mousemove",m),null==e||e.addEventListener("keydown",g),()=>{null==e||e.removeEventListener("mouseup",p),null==e||e.removeEventListener("mousedown",h),null==e||e.removeEventListener("mousemove",m),null==e||e.removeEventListener("keydown",g)}}),[t]),(0,a.useEffect)((()=>{const e=new IntersectionObserver((([e])=>c(e.isIntersecting)),{threshold:0});return s.current&&e.observe(s.current),()=>{s.current&&e.unobserve(s.current)}}),[]),[s,d]})(I,f,x),P=Al((e=>{q.current&&(q.current.style.minHeight=`${e}px`,h&&h(e))})),R=Al((e=>{b.current=!!e})),A=(0,a.useCallback)((async()=>{if(!b.current&&!r&&e&&v.current){var t,a;const r=null!=n?n:"",s=null!=(t=null==(a=v.current)?void 0:a.slateToMD())?t:"",o=r!==s;try{o&&(await e(s),Z.AnalyticsService.addEventV2({category:"documentation",action:"save",label:"context_bar",value:1,entityType:"request"})),y(!1)}catch(e){I()}}}),[r,n,null==v?void 0:v.current,null==b?void 0:b.current]);return(0,D.jsx)(Ei.CustomErrorBoundary,{appId:"request-workbench",errorElementId:"request-description-editor",fallback:(0,D.jsx)(Ei.GenericErrorMessage,{title:"Couldn't load documentation",description:"Just a faulty wire. Try reloading.",illustration:"illustration-internal-server-error"}),children:(0,D.jsxs)(Wl,{ref:q,isInViewPort:!0,type:"column",span:8,mobile:12,overflow:"unset",editMode:f,minimumEditorHeight:c,editable:t,width:null==(m=q.current)?void 0:m.offsetWidth,positionFromTop:null==(g=q.current)?void 0:g.offsetTop,className:"entity-description-container",editor:S,children:[l&&(0,D.jsx)(Kl,{}),(0,D.jsx)(_l,{ref:v,source:"context-view",autoFocus:!1,readOnly:!t,showToolbar:f,isOffline:r,initialValue:f?x:C,modelDetails:i,onChange:A,context:"wysiwyg",enableAutoSaveOnBlur:t,inputFormat:"markdown",onEditorHeightChange:P,updateMediaUploadStatus:R,showEditorToggle:!u&&f,isEnvironmentResolutionEnabled:!0,isBigFontSize:p,placeholder:t?null!=o?o:`Add ${s?s+" ":""}description`:`This ${s||"item"} doesn't have a description.`})]})})},Yl=(0,a.memo)(Ql);let Gl;const Xl=c()(T.Link)(Gl||(Gl=(e=>e)`
  color: var(--content-color-link) !important;
  text-decoration: none;

  &:hover {
    color: var(--content-color-link) !important;
    text-decoration: underline;
  }
`));function Jl({href:e,children:t}){const r=e&&e.startsWith("#");return(0,D.jsx)(Xl,{to:e,target:r?"_self":"_blank",children:t})}const ed={basic:{basicKeys:["username","password"]},apikey:{basicKeys:["key","value"],metaKeys:["in"]},bearer:{basicKeys:["token"]},digest:{basicKeys:["username","password"],advancedKeys:["realm","nonce","algorithm","qop","nonceCount","clientNonce","opaque"]},oauth1:{basicKeys:["consumerKey","consumerSecret","token","tokenSecret"],advancedKeys:["signatureMethod","timestamp","nonce","version","realm","disableHeaderEncoding"],metaKeys:["addParamsToHeader","addEmptyParamsToSign"]},oauth2:{basicKeys:["accessToken"],metaKeys:["addTokenTo"]},hawk:{basicKeys:["authId","authKey","algorithm"],advancedKeys:["user","nonce","extraData","app","delegation","timestamp","includePayloadHash"]},awsv4:{basicKeys:["accessKey","secretKey"],advancedKeys:["region","service","sessionToken"]},ntlm:{basicKeys:["username","password"],advancedKeys:["domain","workstation"]},edgegrid:{basicKeys:["accessToken","clientToken","clientSecret"],advancedKeys:["nonce","timestamp","baseURL","headersToSign"]}};var td=r(60883);const rd={ELEMENT:"element",TEXT:"text"};class ad{constructor(){this._elements=[],this._currentParent=null}get elements(){return this._elements}createElementNode(e,t){return{nodeType:rd.ELEMENT,children:[],tag:e,attributes:t,parent:null}}createTextNode(e){return{nodeType:rd.TEXT,children:[],tag:"",attributes:{},text:e}}onopentag(e,t){const r=this.createElementNode(e,t);this._currentParent?(r.parent=this._currentParent,this._currentParent.children.push(r)):this.elements.push(r),this._currentParent=r}ontext(e){if("\n"===e)return;const t=this.createTextNode(e);this._currentParent?this._currentParent.children.push(t):this.elements.push(t)}onclosetag(){this._currentParent=this._currentParent?this._currentParent.parent:null}}let sd;const od=c()(T.Link)(sd||(sd=(e=>e)`
  color: var(--content-color-link) !important;
  text-decoration: none;

  &:hover {
    color: var(--content-color-link) !important;
    text-decoration: underline;
  }
`));var nd=r(35348);let id;const ld=c().div(id||(id=(e=>e)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${0};

  &.zoom {
    cursor: zoom-in;
  }

  img {
    flex: 1;
    padding-bottom: var(--spacing-zero);
    max-width: 100%;
  }

  .image-caption {
    margin-top: var(--spacing-xs);
    color: var(--content-color-secondary);
    text-align: center;
  }
`),(e=>e.isImageClickEnabled?"zoom-in":"initial")),dd=["theme","modalName","viewMoreAction","isPrintable"];let cd,ud,hd,pd=e=>e;const md=c().div(cd||(cd=pd`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-radius: var(--border-radius-default);
  z-index: 10;
  background: linear-gradient(
    to top,
    var(--highlight-background-color-secondary),
    rgb(255 255 255 / 0%)
  );
`)),gd=c().div(ud||(ud=pd`
  max-width: 100%;
  border-radius: var(--border-radius-default);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  position: relative;
  max-height: ${0};
  background-color: transparent;
  overflow: hidden hidden;
`),(e=>e.maxHeight||"200px")),vd=c().button(hd||(hd=pd`
  position: absolute;
  bottom: var(--spacing-s);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-radius: calc(8 * var(--border-radius-default));
  color: var(--content-color-primary);
  padding: var(--spacing-xs) var(--spacing-m);
  font-size: var(--text-size-m);
  appearance: button;
  cursor: pointer;
  line-height: inherit;
  white-space: nowrap;

  &:focus {
    outline: none;
  }
`));function bd(e,t){return function(r){let{theme:s,modalName:o,viewMoreAction:n,isPrintable:i=!1}=r,l=(0,ar.Z)(r,dd);const[d,c]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[p,m]=(0,a.useState)(!1),g=(0,a.useRef)(null),v=(0,a.useRef)(null),b=(0,a.useRef)(),f=()=>{var e,t,r;if(null==g||!g.current||null==v||!v.current)return null;const{height:a,width:s}=null==(e=v.current)?void 0:e.getBoundingClientRect(),{height:o,width:n}=null==(t=g.current)?void 0:t.getBoundingClientRect(),l=null==(r=v.current)?void 0:r.innerText,d=a>o||s>n||l&&(null==l?void 0:l.split("\n").length)>11||l&&l.length>5e3;return i||c(d),null};return(0,a.useLayoutEffect)((()=>{f()}),[g,v]),(0,a.useEffect)((()=>(b.current=new ResizeObserver(f),()=>(null==b?void 0:b.current)&&b.current.disconnect())),[]),(0,a.useEffect)((()=>{var e,t;null!=b&&b.current&&(null==(e=b.current)||e.observe(g.current),null==(t=b.current)||t.observe(v.current))}),[!0,b,g,v]),(0,D.jsxs)(D.Fragment,{children:[p&&(0,D.jsxs)(nd.u_,{isOpen:p,size:(null==t?void 0:t.modalSize)||"large",className:"highlighted-code--snippet-modal",onClose:()=>{m(!1),"function"==typeof n&&n(!1)},children:[(0,D.jsx)(nd.xB,{heading:o||(null==t?void 0:t.modalHeading)}),(0,D.jsx)(nd.hz,{children:(0,D.jsx)(e,(0,J.Z)({theme:s,codeCompHandlers:{isCodeWrapped:u,setIsCodeWrapped:h}},l))})]}),(0,D.jsxs)(gd,{ref:g,isExpandable:d,maxHeight:null==t?void 0:t.maxHeight,children:[d?(0,D.jsx)(md,{theme:s,children:(0,D.jsx)(vd,{theme:s,"data-entity-id":"click-to-expand-button",className:"highlighted-code__expand-button",onClick:()=>{m(!0),"function"==typeof n&&n()},children:"View More"})}):null,(0,D.jsx)(e,(0,J.Z)({ref:v,theme:s,codeCompHandlers:{isCodeWrapped:u,setIsCodeWrapped:h}},l))]})]})}}let fd;const yd=c().table(fd||(fd=(e=>e)`
  width: 100%;
  border-radius: var(--border-radius-default);
  border-spacing: 0;
  border-collapse: collapse;
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  font-size: var(--text-size-m);

  ${0} & {
    border-width: 0;
  }

  th {
    min-width: 77px;
    max-width: 77px;
    padding: var(--spacing-xs) var(--spacing-l);
    word-break: break-word;
    vertical-align: top;
    white-space: pre-line;
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-top: none;
    text-align: left;
    font-weight: normal;
    background-color: var(--background-color-secondary);

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }

  td {
    min-width: 77px;
    max-width: 77px;
    padding: var(--spacing-xs) var(--spacing-l);
    word-break: break-word;
    vertical-align: top;
    white-space: pre-line;
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }

  tr {
    height: var(--size-m);
    min-height: var(--size-m);

    &:last-child {
      th,
      td {
        border-bottom: none;
      }
    }

    & > span {
      display: none;
    }
  }
`),gd),xd=({children:e},t)=>(0,D.jsx)(yd,{ref:t,"data-testid":"markdown-table",children:e}),kd=bd(s().forwardRef(xd),{maxHeight:"480px",modalHeading:"Table"});var Sd=r(13917),wd=r.n(Sd),jd=r(49710),Td=r.n(jd);var Cd=r(22833),Ed=r.n(Cd),Id=r(90971);r(70662);let qd,Pd,Rd=e=>e;const Zd=(0,d.css)(qd||(qd=Rd`
  /* stylelint-disable no-descending-specificity, color-no-hex */

  /* PM Response headers */
  span.token.kvpair {
    color: #dfd561 !important;

    & > span.key {
      color: #fff !important;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #6b6b6b !important;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: hidden;
  }

  pre[class*='language-'].clipped {
    overflow: hidden;
  }

  code[class*='language-'].wrapped {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7d8b99;
  }

  .token.punctuation {
    color: #5f6364;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #c92c2c;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.function,
  .token.builtin,
  .token.inserted {
    color: #2f9c0a;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: #a67f59;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.class-name {
    color: #1990b8;
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .language-css .token.string,
  .style .token.string {
    color: #a67f59;
    background: rgb(255 255 255 / 50%);
  }

  .token.important {
    font-weight: normal;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }

  @media screen and (width <= 767px) {
    pre[class*='language-']::before,
    pre[class*='language-']::after {
      bottom: 14px;
      box-shadow: none;
    }
  }

  /* Plugin styles */
  .token.tab:not(:empty)::before,
  .token.cr::before,
  .token.lf::before {
    color: #e0d7d1;
  }

  /* Plugin styles: Line Numbers */
  pre[class*='language-'].line-numbers {
    padding-left: 0;
  }

  pre[class*='language-'].line-numbers code {
    padding-left: 3.8em;
  }

  pre[class*='language-'].line-numbers .line-numbers-rows {
    left: 0;
  }

  /* Plugin styles: Line Highlight */
  pre[class*='language-'][data-line] {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
  }

  pre[data-line] code {
    position: relative;
    padding-left: 4em;
  }

  pre .line-highlight {
    margin-top: 0;
  }
`)),Dd=(0,d.css)(Pd||(Pd=Rd`
  /* PM Response headers */
  span.token.kvpair {
    color: #dfd561 !important;

    & > span.key {
      color: #fff !important;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #a6a6a6 !important;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    /* padding: 1em; */
    overflow: hidden;
  }

  pre[class*='language-'].clipped {
    overflow: hidden;
  }

  code[class*='language-'].wrapped {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    /* padding: 0.1em; */

    /* border-radius: 0.3em; */
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }

  .token.boolean,
  .token.number {
    color: #ae81ff;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a6e22e;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #e6db74;
  }

  .token.keyword {
    color: #66d9ef;
  }

  .token.regex,
  .token.important {
    color: #fd971f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`));let Ad,Ld,zd,_d,Bd,Od,Fd,Md,$d=e=>e;const Nd=c().div(Ad||(Ad=$d`
  pre {
    margin-top: 0;
  }

  ${0}
`),(e=>e.isExample?"\n    pre {\n      padding: 5px 12px !important;\n      border-radius: 0px !important;\n      border: 0px !important;\n      font-size: 12px !important;\n      line-height: 18px !important;\n    }":"\n    pre {\n      padding: 5px 12px !important;\n      font-size: 12px !important;\n      line-height: 18px !important;\n    }")),Vd=c().pre(Ld||(Ld=$d`
  margin-bottom: 0;
  border-width: 0;
  height: 100%;
  border-radius: 0;
  background-color: inherit;
  padding: inherit !important;
  line-height: ${0} !important;
  font-size: ${0} !important;

  code {
    white-space: pre;
    border: 0 !important;
    tab-size: 4;
    color: ${0} !important;
  }
`),(e=>(e.darkMode,"18px")),(e=>(e.darkMode,"12px")),(e=>e.darkMode?"#f8f8f8":"grey")),Hd=c().div(zd||(zd=$d`
  height: 100%;
  ${0}

  pre {
    height: 100%;
    margin: 0 !important;

    code {
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      font-family: ${0};
    }
  }
`),(e=>e.darkMode?Dd:Zd),(e=>e.theme["text-family-code"])),Ud=c().div(_d||(_d=$d`
  border: ${0}
    ${0}
    ${0};
  border-radius: ${0};
  background-color: ${0};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  ${0} & {
    border-width: 0;
  }
`),(e=>e.theme["border-width-default"]),(e=>e.theme["border-style-solid"]),(e=>e.theme["border-color-strong"]),(e=>e.theme["border-radius-default"]),(e=>e.theme["background-color-primary"]),gd),Wd=c().div(Bd||(Bd=$d`
  display: flex;
  gap: ${0};
  padding: ${0};
`),(e=>e.theme["spacing-s"]),(e=>e.theme["spacing-s"])),Kd=c().div(Od||(Od=$d`
  background-color: ${0};
  color: ${0};
  padding: ${0}
    ${0};
  border-radius: ${0};
  font-size: ${0};
  line-height: ${0};
  font-weight: ${0};
`),(e=>e.theme["background-color-tertiary"]),(e=>e.theme["content-color-secondary"]),(e=>e.theme["spacing-s"]),(e=>e.theme["spacing-m"]),(e=>e.theme["border-radius-default"]),(e=>e.theme["text-size-m"]),(e=>e.theme["line-height-m"]),(e=>e.isBigFontSize?e.theme["text-weight-medium"]:e.theme["text-weight-bold"])),Qd=c().div(Fd||(Fd=$d`
  margin-left: auto;
  display: flex;
  gap: ${0};

  @media print {
    display: none;
  }
`),(e=>e.theme["spacing-s"])),Yd=c().div(Md||(Md=$d`
  position: relative;
  flex: 1;
  overflow-y: auto;
`));function Gd({content:e,language:t,innerRef:r,notHighlighted:s=!1,isWrapped:o=!1}){const n=(t||"javascript").toLowerCase(),i=Id.languages[n]||Id.languages.javascript,l=(0,a.useMemo)((()=>s?e:(0,Id.highlight)(e,i,t)),[e,t,i,s]);return(0,D.jsx)(Nd,{"data-entity-type":"code-block","data-testid":"code-block",children:s?(0,D.jsx)(Vd,{className:"simple-code",darkMode:!0,children:(0,D.jsx)("code",{children:l})}):(0,D.jsx)(Hd,{className:"highlight-code",darkMode:!1,children:(0,D.jsx)("pre",{className:`language-${n}`,children:(0,D.jsx)("code",{ref:r,className:Ed()(`language-${n}`,"highlighted-code__code",{wrapped:o}),dangerouslySetInnerHTML:{__html:l}})})})})}Id.languages.pmresponseheaders={kvpair:{pattern:/(^|\n)[^\n]*\n/,inside:{key:/^([^\n:]+: )/}}};const Xd=["content","language","overrideClass","codeCompHandlers","isBigFontSize"];function Jd(e,t){let{content:r,language:s,overrideClass:o,codeCompHandlers:n,isBigFontSize:i}=e,l=(0,ar.Z)(e,Xd);const[d,c]=(0,a.useState)(!1),{isCodeWrapped:u,setIsCodeWrapped:h}=n||{},m=(0,a.useRef)(),g=(0,a.useCallback)((()=>{navigator.clipboard.writeText(r).then((()=>{c(!0),null!=m&&m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{c(!1)}),1500)}))}),[r,m]);return(0,D.jsxs)(Ud,{className:Ed()(o,"highlighted-code--documentation"),children:[(0,D.jsxs)(Wd,{children:[s&&(0,D.jsx)(Kd,{className:"highlighted-code__language-label",isBigFontSize:i,children:s}),(0,D.jsxs)(Qd,{children:[(0,D.jsx)(p.Z,{type:"tertiary",tooltip:"Wrap Lines",isActive:u,icon:(0,D.jsx)(ri.Z,{}),onClick:()=>{h&&h(!u)},className:"highlighted-code__config-button"}),(0,D.jsx)(p.Z,{tooltip:"Copy",type:"tertiary",onClick:g,icon:d?(0,D.jsx)(gr.Z,{color:"color-accent-success"}):(0,D.jsx)(ii.Z,{}),className:"highlighted-code__config-button"})]})]}),(0,D.jsx)(Yd,{children:(0,D.jsx)(Gd,(0,J.Z)({language:s,isWrapped:u,content:r,innerRef:t},l))})]})}const ec=bd((0,a.forwardRef)(Jd),{maxHeight:"250px"});let tc,rc,ac=e=>e;c().code(tc||(tc=ac`
  padding: 1px var(--spacing-xs);
  font-family: var(--text-family-code);
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-radius: var(--border-radius-default);
`));const sc=c().pre(rc||(rc=ac`
  font-family: var(--text-family-code);

  code {
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
`));function oc(e){const t=e.split("_");let r=t[0];for(let e=1;e<t.length;e++)r+=t[e].charAt(0).toUpperCase()+t[e].slice(1);return r}function nc({markdown:e,renderer:t,disableGfm:r,markedOptions:a,isImageClickEnabled:o=!1}){const n=s().useMemo((()=>function(e,t,r){if("string"!=typeof e)return"";const a=(0,J.Z)({gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerIds:!1,mangle:!1},t);return wd().setOptions(a),function(e="",t){const r=null!=t&&t.inline?{allowedTags:["a","b","i","strong","em","strike","br","s","del"],allowedAttributes:{a:["href","name","target"],img:["src","srcset","alt","title","width","height","loading"],video:["src","srcset","alt","title","width","height","loading"],"*":["class"]}}:{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre","img","abbr","address","section","article","aside","dd","dl","dt","tfoot","s","del","comment","u","video"],allowedAttributes:{a:["href"],img:["src","width","height","class","alt"],video:["src","width","height","class","alt"],div:["class"],pre:["class"],h1:["id"],"*":["class"]}};return e=e.replace(/<!--/g,"<comment>").replace(/--(!)?>/g,"</comment>").replace(/<p><video/gi,"<video").replace(/<\/video><\/p>/gi,"</video>"),Td()(e,r)}(wd()(e,a),r||{})}(function(e){try{return e?e.trim():""}catch(e){return""}}(e),(0,J.Z)({gfm:!r},a))),[e,r,a]),i=s().useMemo((()=>function(e){const t=new ad;return new td.Parser(t).parseComplete(e),t.elements}(n)),[n]),l=(e,r)=>{if(!e)return null;const a=(null==t?void 0:t[e.tag])||e.tag;if(e.nodeType===rd.TEXT){const a=(null==t?void 0:t[rd.TEXT])||"span";return s().createElement(a,{key:r},e.text)}return e.nodeType===rd.ELEMENT?s().createElement(a,(0,J.Z)({},e.attributes?function(e){let t={};for(const r of Object.keys(e)){let a;a="class"===r?"className":"for"===r?"htmlFor":oc(r),t=(0,J.Z)({},t,{[a]:e[r]})}return t}(e.attributes):{},{key:r,isImageClickEnabled:o}),e.children.length>0?e.children.map(((e,t)=>l(e,t))):null):null};return(0,D.jsx)("div",{className:"markdown-viewer","data-testid":"markdown-viewer",children:null==i?void 0:i.map(((e,t)=>l(e,t)))})}nc.defaultProps={markdown:"",renderer:{a:function({href:e,children:t}){const r=e&&e.startsWith("#");return(0,D.jsx)(od,{to:e,target:r?"_self":"_blank",children:t})},img:function({src:e,alt:t,width:r,height:s,isImageClickEnabled:o=!1}){const[n,i]=(0,a.useState)(!1),l=(0,a.useMemo)((()=>decodeURIComponent(t||"")),[t]),d=()=>(0,D.jsx)("img",{src:e,alt:t,width:r,height:s,onClick:o?()=>i(!0):void 0});return(0,D.jsxs)(D.Fragment,{children:[n&&(0,D.jsxs)(nd.u_,{isOpen:n,size:"large",onClose:()=>{i(!1)},children:[(0,D.jsx)(nd.xB,{heading:l||""}),(0,D.jsx)(nd.hz,{children:(0,D.jsx)(u.Z,{direction:"column",alignItems:"center",children:(0,D.jsx)(d,{})})})]}),(0,D.jsxs)(ld,{isImageClickEnabled:o,"data-testid":"markdown-image",children:[(0,D.jsx)(d,{}),t&&(0,D.jsx)("p",{className:"image-caption",children:l})]})]})},table:kd,pre:function({children:e,viewMoreAction:t}){var r,o,n;const i=a.Children.toArray(e).find((e=>s().isValidElement(e)&&"code"===(null==e?void 0:e.type))),l=e&&e[0]&&s().isValidElement(e[0])&&e[0].props&&e[0].props.className&&(null==(r=e[0].props.className)?void 0:r.split("-")),d=l&&l[1]||"Plain Text";if(void 0===i)return(0,D.jsx)(sc,{children:e});const c=i?a.Children.toArray(null==i||null==(o=i.props)?void 0:o.children).filter((e=>s().isValidElement(e)&&"span"===e.type)):void 0,u=c?null==(n=c.map((e=>{var t;return null==e||null==(t=e.props)?void 0:t.children})))||null==(n=n.join(""))?void 0:n.trim():null;return(0,D.jsx)(ec,{content:u||"",language:d,modalName:"Code",viewMoreAction:t})}},disableGfm:!1,markedOptions:{}};let ic,lc,dc,cc,uc=e=>e;const hc=c()(h.ZP)(ic||(ic=uc`
  word-break: break-word;
  height: unset;
`)),pc=c()("div")(lc||(lc=uc`
  margin: 0;
  color: ${0};
  word-break: break-word;

  *:not(a > span) {
    font-size: ${0} !important;
    color: ${0};
  }
`),(e=>e.theme["content-color-secondary"]),(e=>e.isBigFontSize?e.theme["text-size-m"]:e.theme["text-size-l"]),(e=>e.theme["content-color-secondary"])),mc=c().div(dc||(dc=uc`
  ${0}
`),(e=>e.isBigFontSize?`\n\n    font-weight: ${e.theme["text-weight-regular"]};\n    color: ${e.theme["content-color-tertiary"]};\n    font-size: ${e.theme["text-size-l"]};\n    line-height: ${e.theme["line-height-l"]};\n    display: flex;\n    gap: ${e.theme["spacing-s"]};\n    margin-bottom: ${e.isBody?e.theme["spacing-zero"]:e.theme["spacing-s"]};\n    ${e.isBody?"":`border-bottom: ${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]};`}\n\n    span:first-child{\n      color: ${e.theme["content-color-primary"]};\n      font-weight: ${e.theme["text-weight-medium"]};\n    }`:`\n    font-size: ${e.theme["text-size-l"]};\n    color: ${e.theme["content-color-secondary"]};\n    align-items: baseline;\n    display: flex;\n    gap: ${e.theme["spacing-s"]};\n    margin-top: ${e.theme["spacing-l"]};\n    margin-bottom: ${e.theme["spacing-s"]};\n    border-bottom: ${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]};\n\n    span:first-child {\n      font-size: 20px;\n      line-height: ${e.theme["line-height-xxl"]};\n      color: ${e.theme["content-color-primary"]};\n      font-weight: ${e.theme["text-weight-bold"]};\n    }`)),gc=c()(u.Z)(cc||(cc=uc`
  min-height: ${0};
  padding: ${0} 0;
`),(e=>e.theme["size-m"]),(e=>e.theme["spacing-s"]));function vc({items:e=[],className:t,renderer:r,isBigFontSize:a}){const s=a?"text-weight-medium":"text-weight-bold",o=a?"text-size-m":"text-size-l";return(0,D.jsx)(u.Z,{direction:"column",className:t,children:e.map(((e,t)=>{var n,i;return(0,D.jsxs)(gc,{gap:"spacing-l",className:"core-request-item-row",children:[(0,D.jsx)("div",{style:{flex:1},children:(0,D.jsx)(hc,{className:"item-key",color:"content-color-primary",typographyStyle:{fontWeight:s,fontSize:o},children:e.key})}),(0,D.jsx)("div",{style:{flex:2,overflow:"hidden"},children:(0,D.jsxs)(u.Z,{direction:"column",gap:"spacing-s",className:"item-value",children:[e.value&&(a?(0,D.jsx)(h.ZP,{type:"para",color:"content-color-primary",children:e.value}):(0,D.jsx)(h.ZP,{color:"content-color-primary",typographyStyle:{fontSize:o},children:e.value})),e.description&&(0,D.jsx)(pc,{className:"item-description",isBigFontSize:a,children:(0,D.jsx)(nc,{renderer:r,markdown:null!=(n=null==(i=e.description)?void 0:i.content)?n:"string"==typeof e.description?e.description:""})})]})})]},e.key||t)}))})}var bc=r(21466);function fc(e){return null==e?[]:Array.isArray(e)?e:"string"==typeof e?[...e]:"object"==typeof e?Object.values(e):[e]}function yc(e,t,r=!0){const{key:a,value:s}=e,o=(i=a)?i.split(" ").reduce(((e,t)=>e+t[0].toUpperCase()+t.slice(1)+" "),""):"",{value:n}=t;var i;return!function(e){return"string"==typeof e&&e.startsWith("{{")&&e.endsWith("}}")}(n)&&r?{key:o,value:`<${a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}>`}:{key:o,value:s}}const xc=e=>{const t=As.supportedAuthOptions.find((t=>{var r;return t.value===(null==e||null==(r=e.auth)?void 0:r.type)}));return null==t?void 0:t.label},kc=({isBigFontSize:e,entityData:t})=>{const{auth:r,type:o}=t,n=Vs(),i=(0,Jt.useActiveWorkspaceId)();let d,c,u=!1;const h=(0,J.Z)({},r);"inherit"===(null==h?void 0:h.type)&&(d=((e,t)=>{switch(null==e?void 0:e.type){case"folder":return`/workspace/${t}/folder/${e.id}`;case"collection":return`/workspace/${t}/collection/${e.id}`;default:return""}})(n,i),u=!0);const{data:p}=(0,K.useActiveVariables)(),m=(0,l.usePostmanTheme)(),[g,v]=s().useState(h);let b;var f;(0,a.useMemo)((()=>{const e=(0,x.v4)();bc.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:{auth:JSON.parse(JSON.stringify(h))},variables:p,id:e}}),bc.VSCodeCommunicationsService.subscribe("RESOLVED_VARIABLES",(t=>{if(!t)return;const{id:r,resolvedObject:a}=t;r===e&&a&&v(a.auth)}))}),[r,p]),u?(b=xc(n),c=null==n||null==(f=n.auth)?void 0:f.type):(b=xc(t),c=null==g?void 0:g.type);let y=[];if(!u&&g){const e=function(e,t,r){const a=ed[r];if(!a)return{basic:[],advanced:[]};const{basicKeys:s=[],advancedKeys:o=[]}=a,n=[],i=[];for(const a of s){const s=fc(e).find((e=>e.key===a)),o=fc(t).find((e=>e.key===a));if(s&&o){const e=yc(s,o,!("apikey"===r&&"key"===s.key));n.push(e)}}for(const r of o){const a=fc(e).find((e=>e.key===r)),s=fc(t).find((e=>e.key===r));a&&i.push(yc(a,s))}return{basic:n,advanced:i}}(g[g.type],r[g.type],g.type);y=e.basic.map((({key:e,value:t,description:r})=>({key:e,value:null==t?void 0:t.toString(),description:r})))}return c&&"noauth"!==c?(0,D.jsxs)("div",{className:e?"entity-authorization-small":"entity-authorization",children:[(0,D.jsxs)(mc,{theme:m,isBigFontSize:!0,children:[(0,D.jsx)("span",{className:"entity-authorization-core__label",children:"Authorization "}),(0,D.jsxs)("span",{className:"entity-authorization-core__title",children:[b," "]})]}),u?(0,D.jsxs)("div",{className:e?"entity-authorization-small__content":"entity-authorization__content",children:["This ",o," is using an authorization helper from"," ",null==n?void 0:n.type," ",i&&(0,D.jsx)(T.Link,{to:d,className:e?"entity-authorization-small__link":"entity-authorization__link",customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",children:null==n?void 0:n.name})]}):null,g?(0,D.jsx)(vc,{items:y,renderer:{a:Jl},isBigFontSize:!0}):null]}):null},Sc="raw",wc={LABEL:"graphql",QUERY:"QUERY",VARIABLES:"VARIABLES",LANGUAGE_TYPE:{QUERY:"graphql",VARIABLES:"json"}},jc="urlencoded",Tc={LABEL:"form-data",DATA_MODE:"params"},Cc={LABEL:"binary",BODY_LABEL:"file"};var Ec=r(12484),Ic=r(91500),qc=r.n(Ic);let Pc,Rc,Zc=e=>e;const Dc=c().div(Pc||(Pc=Zc`
  margin-top: 20px;
`)),Ac=c().div(Rc||(Rc=Zc`
  & > :nth-child(3n) {
    margin-top: 8px;
  }
`));function Lc(e){return e.toLowerCase()}function zc(e,t,r){let a=[];"string"==typeof t?a=t.split("."):Array.isArray(t)&&(a=t);let s=e;for(const e of a){if(!(s&&Object.prototype.hasOwnProperty.call(s,e)&&s[e]))return r;s=s[e]}return s}function _c(e){const t=(0,l.usePostmanTheme)(),{data:r}=(0,K.useActiveVariables)();if(!e.request)return null;const o=e.request,n=o.dataMode,i=o.headerData,d=zc(o,["dataOptions",n,"language"],function(e){if(!e)return"text";const t=e.findIndex((e=>"content-type"===Lc(e.key)));if(!e[t]||!e[t].value)return"text";const r=Lc(e[t].value);return function(e,t){const a=Object.keys(e);for(const t of a)if(e[t].test(r))return t}(Ec.eV)||"text"}(i));let c,p=null;const m=zc(o,"data",""),g=zc(o,"graphqlModeData",m),[v,b]=s().useState(zc(o,"rawModeData",g));(0,a.useMemo)((()=>{const e=(0,x.v4)();let t=qc()(zc(o,"rawModeData",zc(o,"graphqlModeData",zc(o,"data",""))));t=t?JSON.parse(JSON.stringify(t)):{},bc.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:{headers:t},variables:r,id:e}}),bc.VSCodeCommunicationsService.subscribe("RESOLVED_VARIABLES",(t=>{if(!t)return;const{id:r,resolvedObject:a}=t;r===e&&a&&b(a)}))}),[o,r]);const f=e.isBigFontSize;switch(n){case Sc:{var y;const e=null!=(y=v.headers)?y:zc(o,"rawModeData",zc(o,"data",""));p=""===e?null:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(mc,{isBody:!0,isBigFontSize:f,theme:t,children:[(0,D.jsx)("span",{children:"Body"}),(0,D.jsxs)("span",{children:[Sc," ",d?`(${d})`:""]})]}),"string"==typeof e&&(0,D.jsx)(ec,{content:e,language:d,modalName:`${Sc} ${d?`(${d})`:""}`,isBigFontSize:f,theme:t})]});break}case wc.LABEL:{const e=v.headers?v.headers.query:zc(o,"graphqlModeData.query",zc(o,"data.query","")),r=v.headers?v.headers.variables:zc(o,"graphqlModeData.variables",zc(o,"data.variables",""));p=(0,D.jsx)(Dc,{"data-entity-type":"request-body",children:(0,D.jsxs)(Ac,{children:[e||r?(0,D.jsxs)(mc,{isBody:!0,isBigFontSize:f,theme:t,children:[(0,D.jsx)("span",{children:"Body"}),(0,D.jsx)("span",{children:wc.LABEL})]}):null,e&&(0,D.jsxs)(u.Z,{direction:"column",gap:"spacing-s",children:[(0,D.jsx)(h.ZP,{color:"content-color-tertiary",children:"Query"}),(0,D.jsx)(ec,{content:e,modalName:wc.QUERY,language:wc.LANGUAGE_TYPE.QUERY,theme:t,isBigFontSize:f})]}),r&&(0,D.jsxs)(u.Z,{direction:"column",gap:"spacing-s",children:[(0,D.jsx)(h.ZP,{color:"content-color-tertiary",children:"GraphQL Variables"}),(0,D.jsx)(ec,{content:r,modalName:wc.VARIABLES,language:wc.LANGUAGE_TYPE.VARIABLES,theme:t,isBigFontSize:f})]})]})});break}case jc:c=v.headers&&Array.isArray(v.headers)&&v.headers.length>0?v.headers:zc(o,"data",[]),0===c.length?p=null:(c=c.map((({key:e,value:t,description:r})=>({key:e,value:null==t?void 0:t.toString(),description:r}))),p=(0,D.jsxs)("div",{className:"core-request-items-table",children:[(0,D.jsxs)(mc,{isBody:!0,isBigFontSize:f,theme:t,children:[(0,D.jsx)("span",{className:"core-title",children:"Body"}),(0,D.jsx)("span",{children:jc})]}),c.length>0&&(0,D.jsx)(vc,{items:c,renderer:{a:Jl},isBigFontSize:f})]}));break;case Tc.DATA_MODE:c=v.headers&&Array.isArray(v.headers)&&v.headers.length>0?v.headers:zc(o,"data",[]),0===c.length?p=null:(c=c.map((({key:e,value:t,description:r})=>({key:e,value:null==t?void 0:t.toString(),description:r}))),p=(0,D.jsxs)("div",{className:"core-request-items-table",children:[(0,D.jsxs)(mc,{isBody:!0,isBigFontSize:f,theme:t,children:[(0,D.jsx)("span",{className:"core-title",children:"Body"}),(0,D.jsx)("span",{children:Tc.LABEL})]}),c.length>0&&(0,D.jsx)(vc,{items:c,renderer:{a:Jl},isBigFontSize:f})]}));break;case Cc.LABEL:p=(0,D.jsxs)(mc,{isBody:!0,isBigFontSize:f,theme:t,children:[(0,D.jsx)("span",{children:"Body"}),(0,D.jsx)("span",{children:Cc.BODY_LABEL})]});break;default:return null}return p}const Bc=e=>e.map((({key:e,value:t,description:r})=>({key:e,value:t,description:r}))),Oc=(0,o.observer)((({entityData:e,isBigFontSize:t})=>{const{data:r}=(0,K.useActiveVariables)(),o=(0,l.usePostmanTheme)(),[n,i]=s().useState({headers:qc()(e.headerData),pathVariableData:qc()(e.pathVariableData),queryParams:qc()(e.queryParams)});return(0,a.useMemo)((()=>{const t=(0,x.v4)(),a={headers:qc()(e.headerData),pathVariableData:qc()(e.pathVariableData),queryParams:qc()(e.queryParams)};bc.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:{headers:a.headers,pathVariableData:a.pathVariableData,queryParams:a.queryParams},variables:r,id:t}}),bc.VSCodeCommunicationsService.subscribe("RESOLVED_VARIABLES",(e=>{if(!e)return;const{id:r,resolvedObject:a}=e;r===t&&a&&i(a)}))}),[e,r]),n.headers=Array.isArray(n.headers)?n.headers.filter((e=>e.enabled)):[],(0,D.jsxs)(s().Fragment,{children:[n.headers&&Array.isArray(n.headers)&&n.headers.length>0?(0,D.jsxs)("div",{className:"core-request-items-table",children:[(0,D.jsx)(mc,{theme:o,isBigFontSize:t,children:(0,D.jsx)("span",{className:"core-title",children:"Request Headers"})}),(0,D.jsx)(vc,{items:Bc(n.headers),renderer:{a:Jl},isBigFontSize:t})]}):null,n.queryParams&&Array.isArray(n.queryParams)&&n.queryParams.length>0?(0,D.jsxs)("div",{className:"core-request-items-table",children:[(0,D.jsx)(mc,{isBigFontSize:t,theme:o,children:(0,D.jsx)("span",{className:"core-title",children:"Query Params"})}),(0,D.jsx)(vc,{items:Bc(n.queryParams),renderer:{a:Jl},isBigFontSize:t})]}):null,n.pathVariableData&&Array.isArray(n.pathVariableData)&&n.pathVariableData.length>0?(0,D.jsxs)("div",{className:"core-request-items-table",children:[(0,D.jsx)(mc,{isBigFontSize:t,theme:o,children:(0,D.jsx)("span",{className:"core-title",children:"Path Variables"})}),(0,D.jsx)(vc,{items:Bc(n.pathVariableData),renderer:{a:Jl},isBigFontSize:t})]}):null,(0,D.jsx)(_c,{request:e,isBigFontSize:t})]})})),Fc=({requestData:e})=>{const{canEdit:t}=lr(),{mutate:r}=ir(),[s,o]=(()=>{const e=(0,f.x)();return[e.metadata.description,e.setDescription]})(),n=(0,Gs.o)(),[i]=Ls(),[l=[]]=Es(),{pathVariables:d}=Ca(),{queryParams:c}=ja(),u=(0,er.q)()(),h={auth:i,id:null==n?void 0:n.id,type:"request",headerData:l,pathVariableData:d,queryParams:c,rawModeData:null==u?void 0:u.rawModeData,graphqlModeData:null==u?void 0:u.graphqlModeData,data:null==u?void 0:u.data,dataMode:null==u?void 0:u.dataMode,dataOptions:null==u?void 0:u.dataOptions},{data:p}=(0,K.useActiveVariables)(),[m,g]=(0,a.useState)(s);return(0,a.useMemo)((()=>{const e=(0,x.v4)();bc.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:{description:s},variables:p,id:e}}),bc.VSCodeCommunicationsService.subscribe("RESOLVED_VARIABLES",(t=>{if(!t)return;const{id:r,resolvedObject:a}=t;r===e&&a&&g(a.description)}))}),[s,p]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Yl,{entityType:"request",editable:t,minimumEditorHeight:120,entityDescription:s,resolvedEntityDescription:m,modelDetails:{model:"collection",modelId:null==e?void 0:e.parentCollectionId},isOffline:!1,onSave:e=>{o(e),r()},placeholder:"Add request description.",isEntityLoading:!1,isBigFontSize:!0}),(0,D.jsx)(kc,{entityData:h,entityType:"request",isBigFontSize:!0}),(0,D.jsx)(Oc,{entityData:h,isBigFontSize:!0})]})},Mc={mode:"hidden",defaultElementId:"documentation",elements:[{id:"documentation",title:"Documentation",icon:(0,D.jsx)(pr.Z,{color:"content-color-primary"}),View:(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Fc,{requestData:e})}))},{id:"code",title:"Code snippet",icon:(0,D.jsx)(ql.Z,{color:"content-color-primary"}),View:(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Zl,{requestData:e,type:"request"})}))}]},$c=(pr.Z,(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Fc,{requestData:e})})),ql.Z,(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Zl,{requestData:e,type:"request"})})),pr.Z,(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Fc,{requestData:e})})),ql.Z,(0,o.observer)((()=>{const e=Pl();return(0,D.jsx)(Zl,{requestData:e,type:"request"})})),(0,a.lazy)((0,Wa.loadRemoteModule)("context-bar/ContextBar"))),Nc=(0,o.observer)((e=>{const t=Mc;return(0,D.jsx)($c,{configuration:t,children:e.children})})),Vc=(0,o.observer)((()=>{const{layout:e}=(0,Ln.W)();return(0,D.jsxs)(l.PaneGroup,{defaultLayout:e,scrollToResize:!0,"data-testid":"response-pane-group",children:[(0,D.jsxs)(l.Pane,{height:{default:200,collapsed:33,uncollapsed:400,min:100,resizableByDefault:!0},width:{default:400,collapsed:33,uncollapsed:400,min:300,resizableByDefault:!0},resizableByDefault:!0,children:[(0,D.jsx)(En,{}),(0,D.jsx)(qn,{})]}),(0,D.jsxs)(l.Pane,{height:{default:200,collapsed:33,uncollapsed:200,min:100,resizableByDefault:!0},width:{default:400,collapsed:33,uncollapsed:400,min:400,resizableByDefault:!0},resizableByDefault:!0,children:[(0,D.jsx)(Tl,{}),(0,D.jsx)(Xn,{}),(0,D.jsx)(ul,{})]})]})})),Hc=(0,o.observer)((()=>{const{requestId:e,historyId:t}=(0,k.useParams)();return(0,a.useEffect)((()=>{t&&Z.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"history",value:1}),e&&oe.ENABLE_COLLECTIONS&&Z.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"sidebar",value:1})}),[]),e&&!oe.ENABLE_COLLECTIONS?(0,D.jsx)(ys,{description:"Request coming soon"}):(0,D.jsx)(Jn.p,{children:(0,D.jsx)(ei,{children:(0,D.jsx)(n.VW,{children:(0,D.jsx)(Bn,{children:(0,D.jsx)(Il,{direction:"column",children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:(0,D.jsxs)(Nc,{children:[(0,D.jsx)(Fr,{}),(0,D.jsx)(ba,{}),(0,D.jsx)(Vc,{})]})})})})})})})}))},12484:(e,t,r)=>{r.d(t,{Ip:()=>a,eV:()=>s});const a="text",s={json:/^application\/(\S+\+)?json/,javascript:/^(text|application)\/(\S+\+)?javascript/,xml:/^(text|application)\/(\S+\+)?xml/,html:/^text\/html/,[a]:/^text/}},59596:(e,t,r)=>{r.d(t,{$x:()=>v,A5:()=>m,Fp:()=>c,HX:()=>o,I2:()=>d,Ik:()=>n,KB:()=>h,Oj:()=>i,Sb:()=>l,Yf:()=>g,aD:()=>p,as:()=>u,fX:()=>b,gr:()=>f,j2:()=>s});var a=r(4779);const s=()=>{var e;return null!=(e=(0,a.x)().editorResponseStore.body)?e:void 0},o=()=>{const e=(0,a.x)();return[e.editorResponseStore.body,e.editorResponseStore.bodyStream]},n=()=>[(0,a.x)().editorResponseStore.contentInfo],i=()=>(0,a.x)().editorResponseStore.headers,l=()=>{const e=(0,a.x)();return[e.editorResponseStore.language,e.editorResponseStore.setLanguage,e.editorResponseStore.languageAuto]},d=()=>(0,a.x)().editorResponseStore.meta,c=()=>(0,a.x)().editorResponseStore.cookies,u=()=>(0,a.x)().editorResponseStore.error,h=()=>(0,a.x)().editorResponseStore.prerequestScriptError,p=()=>(0,a.x)().editorResponseStore.testScriptError,m=()=>(0,a.x)().editorResponseStore.initialized,g=()=>(0,a.x)().clearResponse,v=()=>(0,a.x)().editorResponseStore.assertions,b=()=>(0,a.x)().cancelRequest,f=()=>(0,a.x)().getLastResponseDetails},48491:(e,t,r)=>{r.d(t,{i:()=>s});var a=r(60607);const s=()=>{var e;const t=(0,a.useMatch)("workspace/:workspaceId/request/:requestId");return!!t&&"create"!==(null==t||null==(e=t.params)?void 0:e.requestId)}},18712:(e,t,r)=>{r.d(t,{q:()=>s});var a=r(4779);const s=()=>(0,a.x)().getCreateRequestPayload},4779:(e,t,r)=>{r.d(t,{x:()=>n});var a=r(40540),s=r.n(a),o=r(2623);const n=()=>{const e=s().useContext(o.K);if(!e)throw new Error("useRequestEditorStore should be used within a RequestEditorContext.Provider");return e}},50767:(e,t,r)=>{r.d(t,{o:()=>s});var a=r(4779);const s=()=>(0,a.x)().metadata},26259:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(4779);const s=()=>{const e=(0,a.x)().urlStore;return{url:e.url,setUrl:e.setUrl.bind(e)}}},53195:(e,t,r)=>{r.d(t,{W:()=>s});var a=r(4779);const s=()=>{const e=(0,a.x)();return{layout:e.workbenchLayout,setLayout:e.setWorkbenchLayout,layoutAxis:"vertical"===e.workbenchLayout?"y":"x",getCollapseArrowDirection:t=>"vertical"===e.workbenchLayout?t?"up":"down":t?"left":"right"}}},2623:(e,t,r)=>{r.d(t,{K:()=>ke,p:()=>Se});var a=r(40540),s=r.n(a),o=r(43641),n=r(60607),i=r(39245),l=r(7336),d=r(98283),c=r(89539),u=r(38879),h=r(7560),p=r(78476),m=r(84452),g=r(83096);async function v(e){return(0,m.processFiles)(e)}class b{setTrackedState(e,t){t&&e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))}constructor(e){this.trackedState={},this.items=void 0,this.setFormDataState=e=>{this.items=e,this.setTrackedState("data",this.items)},this.setItem=(0,p.action)(((e,t)=>{const r=this.items.findIndex(((t,r)=>e===t.id||e===r));-1!==r&&(this.items[r]=(0,h.Z)({},this.items[r],t))})),this.processFiles=(e,t)=>(this.setItem(e,{fileUploadError:""}),v(t).then((t=>t&&this.setItem(e,{value:t.map((e=>e.path))}))).catch((t=>{const r="Connection Error"===t.message?"Check your toolbar to make sure the Postman Desktop Agent is running.":"Make sure that Postman can read files inside the working directory.";this.setItem(e,{fileUploadError:r})}))),(0,p.makeObservable)(this,{items:!0,setFormDataState:p.action,trackedState:!0,setTrackedState:p.action}),this.items=e}}class f{setTrackedState(e,t){t&&e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))}constructor(){this.trackedState={},this.files=null,this.error=void 0,this.setFiles=e=>{this.files=e},this.processFiles=e=>(this.error="",v(e).then((e=>{this.setFiles(e),this.setTrackedState("data",e&&e[0].path)})).catch((e=>{const t="Connection Error"===e.message?"Check your toolbar to make sure the Postman Desktop Agent is running.":"Make sure that Postman can read files inside the working directory.";this.error=t}))),this.resetFiles=()=>{this.files=null},(0,p.makeObservable)(this,{files:!0,processFiles:p.action,setFiles:p.action,resetFiles:p.action,trackedState:!0,setTrackedState:p.action})}}const y={infoTitle:"This query param was automatically added",info:"This query param is added because of the authorization method used for this request.\n\nUse the authorization tab to remove authorization or to change the value of this param.",enabled:!0,disableEdit:!0,previewSettingsLink:"Go to authorization",system:!0};var x=r(88131);class k{constructor(e,t=(0,x.getUpdatedQueryParamsFromURL)(e,[]),r=[]){this.queryParameters=void 0,this.pathVars=void 0,this.url=void 0,this.previewQueryParams=void 0,this.trackedState={},this.updateQueryParams=e=>{(0,p.runInAction)((()=>{this.queryParameters=e.filter((e=>!e.system)),this.updateUrlFromQueryParams()})),this.setTrackedState("queryParams",this.queryParameters)},this.updatePathVariables=e=>{(0,p.runInAction)((()=>{this.pathVars=p.observable.map(e.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)),this.setTrackedState("pathVariableData",e)}))},this.updateQueryParamsFromUrl=()=>{const e=(0,x.getUpdatedQueryParamsFromURL)(this.url,this.queryParams);(0,p.runInAction)((()=>{this.queryParameters=e,this.setTrackedState("queryParams",this.queryParams)}))},this.updatePathVariablesFromUrl=()=>{const e=(0,x.getPathVariablesValues)(this.url,this.pathVariables);(0,p.runInAction)((()=>{const t=e.reduce(((e,t)=>{const r=t.key;return e.set(r,(0,h.Z)({},t,{value:t.value||"",type:"text"})),e}),new Map);t&&(this.pathVars=p.observable.map(t))})),this.setTrackedState("pathVariableData",this.pathVariables)},(0,p.makeObservable)(this,{pathVars:!0,queryParameters:!0,pathVariables:p.computed,url:p.observable,setUrl:p.action,queryParams:p.computed,updateQueryParams:p.action,updatePathVariables:p.action,previewQueryParams:p.observable,updatePreviewQueryParams:p.action,allQueryParams:p.computed,trackedState:!0,setTrackedState:p.action}),this.url=e,this.queryParameters=p.observable.array(t),this.pathVars=p.observable.map(r.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)),this.previewQueryParams=[]}hydrateStore(e,t,r){this.url=e,t&&(this.queryParameters=p.observable.array(t)),r&&(this.pathVars=p.observable.map(r.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)))}get queryParams(){return[...this.queryParameters.filter((e=>!e.system))]}get allQueryParams(){return[...this.previewQueryParams,...this.queryParameters]}get pathVariables(){return[...this.pathVars.entries()].map((([,e])=>(0,h.Z)({},e)))}setTrackedState(e,t){e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))}updateUrlFromQueryParams(){(0,p.runInAction)((()=>{const e=(0,x.getURLFromQueryParams)(this.queryParameters);null!=this.url||(this.url="");const t=e?`$1?${e}`:"$1";this.url=this.url.replace(/([^?]*)?(.*)/,t),this.setTrackedState("url",this.url)}))}setUrl(e){(0,p.runInAction)((()=>{this.url=e,this.updateQueryParamsFromUrl(),this.updatePathVariablesFromUrl(),this.setTrackedState("url",this.url)}))}updatePreviewQueryParams({auth:e}){var t,r;if("apikey"!==(null==e?void 0:e.type))return void(this.previewQueryParams=[]);const a=e.apikey,s="query"==(a.some((e=>"in"===e.key))?"query":"header")?[(0,h.Z)({},y,{key:null==(t=a.find((e=>"key"===e.key)))?void 0:t.value,value:null==(r=a.find((e=>"value"===e.key)))?void 0:r.value})]:[];this.previewQueryParams=s.filter((e=>e.key||e.value))}destroy(){}}var S=r(98276),w=r(25637),j=r(96529);const T={[j.B7.JSON]:/^application\/(\S+\+)?json/,[j.B7.XML]:/^(text|application)\/(\S+\+)?xml/,[j.B7.HTML]:/^text\/html/},C=j.B7.TEXT,E="prerequest";var I=r(53186),q=r(95780),P=(0,u.Z)("languageAuto");class R{get languageAuto(){return(0,c.Z)(this,P)[P]}constructor({workspaceId:e,requestId:t}){this.workspaceId=void 0,this.requestId=void 0,this.initialized=!1,this.body=null,this.bodyStream=null,this.headers=[],this.cookies=[],this.error=null,this.errorsByPhase=[],this.language=j.B7.TEXT,this.contentInfo=null,Object.defineProperty(this,P,{writable:!0,value:j.B7.TEXT}),this.meta={code:0,status:"",requestSize:{body:0,header:0,total:0},size:{body:0,header:0,total:0},timingPhases:{},networkDetails:{}},this.assertions=p.observable.array(),this.responseStart=e=>{var t;this.initialized=!0,this.errorsByPhase=[];const{error:r}=e;if(r)return void(this.error=r);const{response:{code:a,status:s,headers:o,size:n},history:i,cookies:l,request:d}=e;this.headers=null!=(t=null==o?void 0:o.map((e=>(0,h.Z)({},e,{type:"text"}))))?t:[],(0,c.Z)(this,P)[P]=function(e){if(!e)return C;const t=e.findIndex((e=>"content-type"===e.key.toLowerCase()));if(!e[t]||!e[t].value)return C;const r=e[t].value.toLowerCase(),a=Object.entries(T).find((([e,t])=>t.test(r)));return a?a[0]:C}(this.headers)||this.language,this.language=(0,c.Z)(this,P)[P],this.cookies=l,this.error=r,this.assertions.length=0,this.meta={code:a,status:s,size:n,requestSize:null==d?void 0:d.size,timingPhases:(0,m.getTimingPhasesForLastHistoryExecution)(i),networkDetails:(0,m.getLastHistoryExecutionNetworkDetails)(i)}},this.console=e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},this.setLanguage=e=>{this.language=e},this.response=e=>{this.initialized=!0;const{history:t,response:r,error:a,request:s}=e;if(a)this.error=a;else if(this.meta=(0,h.Z)({},this.meta,{size:null==r?void 0:r.size,requestSize:null==s?void 0:s.size,responseTime:null==r?void 0:r.responseTime,timingPhases:(0,m.getTimingPhasesForLastHistoryExecution)(t)}),null!=r&&r.stream){var o,n,i;const e=null==r?void 0:r.stream,t=null!=(o=null==r||null==(n=r.contentInfo)?void 0:n.charset)?o:"utf8";this.contentInfo=null!=(i=null==r?void 0:r.contentInfo)?i:null,this.bodyStream=e,this.body=new TextDecoder(t).decode(e)}},this.assertion=e=>{var t;null!=(t=e.cursor)&&t.scriptId&&Array.isArray(e.assertions)&&e.assertions[0]&&this.assertions.push(e.assertions[0])},this.exception=e=>{(0,w.Am)({status:"error",description:"Something went wrong while running your scripts"})},this.script=({error:e,event:t,mutations:r})=>{if(e)return this.initialized||(this.errorsByPhase=[]),void(this.errorsByPhase=[...this.errorsByPhase,{phase:t?t.listen:"test",error:e}]);null!=r&&r.environment&&S.environmentVariablesHandler.add(r.environment,{workspaceId:this.workspaceId}),null!=r&&r.globals&&S.globalVariablesHandler.add(r.globals,{workspaceId:this.workspaceId}),null!=r&&r.collectionVariables&&I.collectionVariablesHandler.add(r.collectionVariables,{workspaceId:this.workspaceId,requestId:this.requestId})},this.workspaceId=e,this.requestId=t,(0,p.makeObservable)(this,{initialized:p.observable,body:p.observable,bodyStream:!0,contentInfo:!0,headers:p.observable,language:p.observable,cookies:p.observable,error:p.observable,errorsByPhase:p.observable,meta:p.observable,responseStart:p.action,response:p.action,assertion:p.action,setLanguage:p.action,script:p.action,exception:p.action,prerequestScriptError:p.computed,testScriptError:p.computed})}get prerequestScriptError(){return Z(this.errorsByPhase,E)}get testScriptError(){return Z(this.errorsByPhase,"test")}}function Z(e,t){const r=e.find((e=>e.phase===t));return r?r.error:null}var D=r(60398);class A{parsePayload(e){var t;const r=null==(t=e.events)?void 0:t.filter((e=>e.listen===this.type))[0];return r?r.script.exec.join("\n"):""}constructor(e,t){this.type="prerequest",this.content="",this.trackedState={},this.setContent=e=>{this.content=e,this.setTrackedState("events",[{listen:this.type,script:{id:(0,D.v4)(),exec:this.content.split("\n"),type:"text/javascript"}}])},this.hydrateStore(e,t),(0,p.makeObservable)(this,{content:!0,setContent:p.action,trackedState:!0,setTrackedState:p.action})}hydrateStore(e,t){this.type=e,this.content=this.parsePayload(t)}setTrackedState(e,t){t&&e&&(this.trackedState[e]=t)}getPayload(){return this.content?[{listen:this.type,script:{id:(0,D.v4)(),exec:this.content.split("\n"),type:"text/javascript"}}]:[]}}function L(e,t,r){let a,s,o,n,i,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(t=+t||0,r&&function(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)}(r)){if(c=!(null==r||!r.leading),u="maxWait"in r,u){const e=(null==r?void 0:r.maxWait)||0;o=Math.max(+e,t)}h="trailing"in r?!(null==r||!r.trailing):h}function p(t){const r=a,o=s;return a=s=void 0,d=t,n=e.apply(o,r),n}function m(e,t){return setTimeout(e,t)}function g(e){const r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function v(){const e=Date.now();if(g(e))return b(e);i=m(v,function(e){const r=e-d,a=t-(e-l);return u?Math.min(a,o-r):a}(e))}function b(e){return i=void 0,h&&a?p(e):(a=s=void 0,n)}function f(...e){const r=Date.now(),o=g(r);if(a=e,s=this,l=r,o){if(void 0===i)return function(e){return d=e,i=m(v,t),c?p(e):n}(l);if(u)return i=m(v,t),p(l)}return void 0===i&&(i=m(v,t)),n}return f.cancel=function(){void 0!==i&&clearTimeout(i),d=0,a=l=s=i=void 0},f.flush=function(){return void 0===i?n:b(Date.now())},f.pending=function(){return void 0!==i},f}const z="authorization",_="cookie",B="cache-control",O="postman-token",F="content-type",M="content-length",$="host",N="user-agent",V="accept",H="accept-encoding",U="connection",W=Object.freeze({[z]:{name:z,sortOrder:0,infoTitle:"This header was automatically added",info:"This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to authorization"},[_]:{name:_,sortOrder:1,infoTitle:"This header was automatically added",info:"The Cookie header is added to send the cookies that are associated with this endpoint.\n\nUse the cookie manager to remove the header or to change the value.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to cookies"},[B]:{name:B,sortOrder:2,infoTitle:"We recommend using this header",info:'Postman added "Cache-Control: no-cache" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.',allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to settings"},[O]:{name:O,sortOrder:3,infoTitle:"We recommend using this header",info:"The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to settings"},[F]:{name:F,sortOrder:4,infoTitle:"This header was automatically added",info:"The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",allowedToToggle:!0,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to body"},[M]:{name:M,sortOrder:5,infoTitle:"This header was automatically added",info:"The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",allowedToToggle:!0,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to body"},[$]:{name:$,sortOrder:6,infoTitle:"We recommend using this header",info:"The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[N]:{name:N,sortOrder:7,infoTitle:"We recommend using this header",info:"The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[V]:{name:V,sortOrder:8,infoTitle:"We recommend using this header",info:'The "Accept: */*" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.',allowedToToggle:!0,enabled:!0,disableEdit:!0},[H]:{name:H,sortOrder:9,infoTitle:"We recommend using this header",info:"The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[U]:{name:U,sortOrder:10,infoTitle:"We recommend using this header",info:"Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",allowedToToggle:!0,enabled:!0,disableEdit:!0}}),K={name:"",sortOrder:0,infoTitle:"",info:"",allowedToToggle:!0,disableEdit:!0};var Q=(0,u.Z)("userHeaders"),Y=(0,u.Z)("systemHeaders"),G=(0,u.Z)("handler");class X{setTrackedState(e,t){e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))}get systemHeaders(){return(0,c.Z)(this,Y)[Y]}get userHeaders(){return(0,c.Z)(this,Q)[Q]}get headers(){return[...(0,c.Z)(this,Y)[Y],...(0,c.Z)(this,Q)[Q]]}get disabledSystemHeaders(){const e={};for(const t of(0,c.Z)(this,Y)[Y])t.enabled||(e[t.key.toLowerCase()]=!0);return e}getPopulatedPreviewHeaders(e){const t=[];for(const[s,o]of e.entries()){var r,a;const e=(0,c.Z)(this,Y)[Y].find((e=>e.key.toLowerCase()===o.key.toLowerCase())),n=null!=(r=W[o.key.toLowerCase()])?r:(0,h.Z)({},K,{name:o.key.toLowerCase(),sortOrder:s}),i=(0,h.Z)({},n,e,o,{type:null!=(a=null==e?void 0:e.type)?a:"text"});t.push(i)}return t.sort(((e,t)=>e.sortOrder-t.sortOrder))}constructor(e,t={}){var r;Object.defineProperty(this,Q,{writable:!0,value:p.observable.array()}),Object.defineProperty(this,Y,{writable:!0,value:p.observable.array()}),Object.defineProperty(this,G,{writable:!0,value:void 0}),this.trackedState={},this.systemHeadersHidden=!0,this.hydrateHeaders=(0,p.action)((e=>{var t;const r=[],a=[];for(const t of e)t.system?a.push(t):(r.push(t),(0,c.Z)(this,Q)[Q].push(t));this.setSystemHeaders(a),this.setUserHeaders(r),null==(t=(0,c.Z)(this,G)[G])||t.onHeadersUpdate(this.headers)})),this.setHeaders=(0,p.action)((e=>{this.hydrateHeaders(e),this.setTrackedState("headerData",this.headers),this.setTrackedState("headers",this.stringifyHeaders(this.headers))})),this.setSystemHeaders=(0,p.action)((e=>{(0,c.Z)(this,Y)[Y].replace(e)})),this.setUserHeaders=(0,p.action)((e=>{(0,c.Z)(this,Q)[Q].replace(e)})),this.stringifyHeaders=e=>e.filter((e=>!!e.key)).map((e=>`${e.key}: ${e.value}`)).join("\n"),this.setSystemHeadersHidden=(e=!1)=>{this.systemHeadersHidden=e},this.onPreviewHeadersReceived=e=>{if(null==e||!e.length)return;const t=this.getPopulatedPreviewHeaders(e.filter((e=>e.system)));this.setSystemHeaders(t)},(0,p.makeObservable)(this,{systemHeadersHidden:!0,headers:p.computed,systemHeaders:p.computed,disabledSystemHeaders:p.computed,setSystemHeadersHidden:p.action,destroy:p.action,trackedState:!0,setTrackedState:p.action}),this.hydrateHeaders(e),(0,c.Z)(this,G)[G]=null!=(r=t.handler)?r:null}destroy(){(0,c.Z)(this,Q)[Q].clear(),(0,c.Z)(this,Y)[Y].clear()}}var J=r(56880),ee=r(12484),te=r(34885);class re{constructor(e){var t=this;this.schemaMeta="introspect",this.isRefreshing=!1,this.editorStore=void 0,this.schemaString=void 0,this.schema=void 0,this.error=void 0,this.cancelSchemaFetching=void 0,this.setSchemaMeta=e=>{this.schemaMeta=e},this.setSchemaString=e=>{this.schemaString=e},this.setIsSchemaRefreshing=e=>{this.isRefreshing=e},this.setError=e=>{this.error=e},this.introspectionHandlers={finishIntrospection:async function({error:e,schemaString:r}){if(t.setIsSchemaRefreshing(!1),e)return t.setError(e);t.setSchemaString(r),t.setError(null)},parseResponse:async function(e){const{error:r,schemaString:a}=await m.agentManager.agent.parseGQLIntrospectionResponse(e);return t.introspectionHandlers.finishIntrospection({error:r,schemaString:a})},handleIntrospection:()=>{var e;if(this.cancelSchemaFetching&&(this.cancelSchemaFetching(),this.cancelSchemaFetching=null),!this.editorStore)return;if(!this.editorStore.urlStore.url)return this.introspectionHandlers.finishIntrospection({error:new Error("No URL provided")});const r=null==(e=this.editorStore)?void 0:e.getAgentPayload();return r.graphqlModeData={query:(0,te.K)(),variables:""},this.setIsSchemaRefreshing(!0),this.cancelSchemaFetching=(0,m.sendRequestViaAgent)(r,{variables:{},runOptionsOverrides:{timeout:{global:null,request:15e3,script:null}},start:({error:e})=>{this.introspectionHandlers.finishIntrospection({error:e})},console:e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},exception:({error:e})=>{this.introspectionHandlers.finishIntrospection({error:e}),e instanceof Error?q.pmConsole.logException({error:e}):q.pmConsole.logException({error:{message:`Introspection failed: ${String(e)}`,name:"Error"}})},response:async function({request:e,error:r,response:a}){return q.pmConsole.logRequest({indirect:"Introspection",request:e,response:a,error:r}),r?t.introspectionHandlers.finishIntrospection({error:r}):(a.stream instanceof ArrayBuffer&&(a.stream=new Uint8Array(a.stream)),await t.introspectionHandlers.parseResponse(new TextDecoder(a.contentInfo.charset).decode(a.stream)))},responseStart:()=>null,assertion:()=>null,script:()=>null})}},this.editorStore=e,(0,p.makeObservable)(this,{schemaMeta:!0,isRefreshing:!0,error:!0,schemaString:!0,schema:!0,setSchemaMeta:p.action,setError:p.action,setIsSchemaRefreshing:p.action})}}class ae{setTrackedState(e,t){e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))}get payload(){return{query:this.query,variables:this.variables}}constructor(e){this.trackedState={},this.query="",this.variables="",this.schemaStore=void 0,this.setQuery=e=>{this.query=e,this.setTrackedState("graphqlModeData",e)},this.setVariables=e=>{this.variables=e,this.setTrackedState("graphqlModeData",e)},this.hydrateStore=e=>{this.query=e.query,this.variables=e.variables};const{historyPayload:t,requestEditorStore:r}=e;this.schemaStore=new re(r),(0,p.makeObservable)(this,{query:!0,variables:!0,setQuery:p.action,setVariables:p.action,trackedState:!0,setTrackedState:p.action}),t&&this.hydrateStore(t)}}const se="Untitled Request";var oe=r(97201),ne=r(18767);const ie=e=>e&&"object"==typeof e?e.auth?{name:e.name,id:e.id,auth:e.auth,type:"folder"}:ie(e.folder):null,le="-",de=(e,t)=>{const r=e.split(le);return!r||!t||r.length>=6?e:`${t}${le}${e}`};var ce=r(91500),ue=r.n(ce);var he=r(21466);class pe{constructor(){var e=this;this.refreshTokenMessageId="",this.refreshCallbackDispose=null,this.cancelRefreshCallbackDispose=null,this.postOauth2FinishMessageToExtension=e=>{he.VSCodeCommunicationsService.postMessageToExtension({type:"FINISH_OAUTH2_AUTO_REFRESH",payload:e})},this.handleAutoRefreshToken=async function(t){var r,a,s;const o=null==(r=t.find((e=>"token_id"===e.key)))?void 0:r.value,n=null==(a=t.find((e=>"message_id"===e.key)))?void 0:a.value,i=null==(s=t.find((e=>"refresh_callback_id"===e.key)))?void 0:s.value;if(n!==e.refreshTokenMessageId)return;if(!o)return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});const l=await(0,ne.getOAuth2AccessToken)(o);if(l&&!(0,ne.isTokenAutoRefreshable)(l))return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});await ne.OAuth2TokenFetcher.refreshTokenByTokenId(o,((t,r)=>{if(t)return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});const a=null==l?void 0:l.data.token_key,s=a&&"id_token"===a?null==r?void 0:r.id_token:null==r?void 0:r.access_token;e.postOauth2FinishMessageToExtension({access_token:s,refresh_callback_id:i}),e.updateTokenStore(o,r)}))},this.handleAutoRefreshCancel=async function(t){var r;(null==(r=t.find((e=>"message_id"===e.key)))?void 0:r.value)===e.refreshTokenMessageId&&ne.OAuth2TokenFetcher.finishRefreshFlow(new Error("Cancel the refresh flow"))},this.updateTokenStore=async function(e,t){if(!t)return;const r=await(0,ne.getOAuth2AccessToken)(e);r&&(r.data=(0,h.Z)({},r.data,t.access_token&&{access_token:t.access_token},t.id_token&&{id_token:t.id_token},t.refresh_token&&{refresh_token:t.refresh_token},t.expires_in&&{expires_in:t.expires_in},t.token_type&&{token_type:t.token_type}),r.timestamp=Date.now(),(0,ne.updateOAuth2Token)(r.id,r))},this.refreshCallbackDispose=he.VSCodeCommunicationsService.subscribe("START_OAUTH2_AUTO_REFRESH",(e=>{this.handleAutoRefreshToken(e.data)})),this.cancelRefreshCallbackDispose=he.VSCodeCommunicationsService.subscribe("CANCEL_OAUTH2_AUTO_REFRESH",(e=>{this.handleAutoRefreshCancel(e.data)})),this.refreshTokenMessageId=(0,D.v4)()}destroy(){var e,t;null==(e=this.cancelRefreshCallbackDispose)||e.call(this),null==(t=this.refreshCallbackDispose)||t.call(this)}getRefreshTokenMessageId(){return this.refreshTokenMessageId}}const me=["activeAuthType"],ge=e=>{var t;if("inherit"===e.requestAuthState.activeAuthType)return null;const r=e.requestAuthState.activeAuthType||"noauth";return"noauth"===r?{type:r}:{type:r,[r]:[...(null==(t=e.requestAuthState)?void 0:t[r])||[]]}};var ve=(0,u.Z)("reactionDisposers"),be=(0,u.Z)("updateWithPreviewRequestState");class fe{get previewRequestBody(){switch(this.requestBodyState.activeBodyType){case"none":return null;case"raw":return{dataMode:this.requestBodyState.activeBodyType,data:this.rawEditorState.content?"truncated for performance reasons":this.rawEditorState.content,dataOptions:{raw:{language:this.rawEditorState.language}}};case"binary":var e;return{dataMode:this.requestBodyState.activeBodyType,data:null==(e=this.binaryEditor.files)?void 0:e[0].path};case"params":return{dataMode:this.requestBodyState.activeBodyType,data:(0,p.toJS)(this.formDataStore.items)};case"urlencoded":return{dataMode:this.requestBodyState.activeBodyType,data:(0,p.toJS)(this.urlEncodedDataStore.items)};case"graphql":return{dataMode:this.requestBodyState.activeBodyType,graphqlModeData:(0,p.toJS)(this.graphqlPayloadStore.payload),dataOptions:{graphql:{}}}}}get isDirty(){return[...Object.keys(this.trackedState),...Object.keys(this.headerData.trackedState),...Object.keys(this.urlStore.trackedState),...Object.keys(this.preRequestStore.trackedState),...Object.keys(this.testScriptStore.trackedState),...Object.keys(this.formDataStore.trackedState),...Object.keys(this.urlEncodedDataStore.trackedState),...Object.keys(this.binaryEditor.trackedState),...Object.keys(this.graphqlPayloadStore.trackedState)].length>0}getContentTypeLanguage(){var e;const t=this.headerData.headers||[],r=t.findIndex((e=>{var t;return"content-type"===(null==(t=e.key)||null==t.toLowerCase?void 0:t.toLowerCase())&&!1!==e.enabled}));if(!t[r]||!t[r].value)return;const a=null==(e=t[r].value)||null==e.toLowerCase?void 0:e.toLowerCase();for(const e in ee.eV)if(ee.eV[e].test(a))return e;return ee.Ip}hydrateStore(e,t){var r,a,s,o;switch(t&&(this.workbenchLayout=t),e.id&&(this.metadata.id=e.id),e.description&&(this.metadata.description=e.description),e.protocolProfileBehavior&&(this.protocolProfileBehavior=e.protocolProfileBehavior),e.workspace&&(this.metadata.workspaceId=e.workspace),e.team&&(this.metadata.teamId=e.team),e.owner&&(this.metadata.ownerId=e.owner),e.collection&&(this.metadata.collectionId=e.collection.id),e.headerData&&this.headerData.hydrateHeaders(e.headerData),e.method&&(this.method=e.method),e.preRequestScript&&(this.preRequestScript=e.preRequestScript),e.name&&(this.metadata.name=e.name),e.tests&&(this.tests=e.tests),this.requestBodyState.activeBodyType=null!=(r=e.dataMode)?r:"none",this.removeResponseListeners=null,this.urlStore.hydrateStore(e.url,null!=(a=e.queryParams)?a:[],null!=(s=e.pathVariableData)?s:[]),this.preRequestStore.hydrateStore("prerequest",e),this.testScriptStore.hydrateStore("test",e),this.hasInheritedAuth=null===e.auth,this.requestAuthState=!(o=e.auth)||"object"==typeof o&&0===Object.keys(o).length?(0,h.Z)({activeAuthType:"inherit",type:"inherit"},ne.initialAuthState):(0,h.Z)({},ne.initialAuthState,o,{activeAuthType:o.type||"noauth"}),e.collection&&(this.collection=e.collection),e.folder&&(this.folder=e.folder),e.graphqlModeData&&this.graphqlPayloadStore.hydrateStore(e.graphqlModeData),this.requestBodyState.activeBodyType){case"raw":{var n,i;const t={language:(null==(n=e.dataOptions)||null==(n=n.raw)?void 0:n.language)||this.getContentTypeLanguage(),content:null!=(i=e.rawModeData)?i:""};this.rawEditorState=(0,h.Z)({},this.rawEditorState,t);break}case"binary":e.rawModeData&&(this.binaryEditor.files=[{type:"",name:e.rawModeData,actual:null,path:e.rawModeData}]);break;case"params":var l;this.formDataStore.items=null!=(l=e.data)?l:[];break;case"urlencoded":var d;this.urlEncodedDataStore.items=null!=(d=e.data)?d:[]}this.updateInheritAuthParent(e),this.autoTriggerPreviewRequest()}constructor(e,t,r){var a,s=this;if(this.isLoading=!1,this.isSaving=!1,this.isConflicted=!1,this.error=null,this.unsubscribeFromRequestCache=void 0,this.workbenchLayout=void 0,this.protocolProfileBehavior={disableBodyPruning:!0},this.urlStore=new k("",[],[]),this.method=l.gg,this.preRequestScript="",this.tests="",this.headerData=new X([],{handler:this}),this.sending=!1,this.metadata={name:"",id:"",workspaceId:"",teamId:"",ownerId:"",collectionId:"",folderId:"",description:""},this.preRequestStore=new A("prerequest",{}),this.testScriptStore=new A("test",{}),this.editorResponseStore=void 0,this.refreshTokenManager=void 0,this.removeResponseListeners=null,this.formDataStore=new b([]),this.graphqlPayloadStore=new ae({requestEditorStore:this}),this.urlEncodedDataStore=new b([]),this.binaryEditor=new f,this.requestBodyState={activeBodyType:"none"},this.rawEditorState={language:"text",content:"",beautify:[]},this.requestAuthState=(0,h.Z)({activeAuthType:"noauth",type:"noauth"},ne.initialAuthState),this.requestAuthSessionState=ne.defaultAuthSession,this.collection={},this.folder={},this.hasInheritedAuth=!1,this.unsubscribeFromPermissionsCache=void 0,this.permissions={},this.inheritAuthParent=null,this.trackedState={},Object.defineProperty(this,ve,{writable:!0,value:new Map}),this.exampleMeta=void 0,this.isExampleRequestSent=void 0,this.cachedRequestItem=void 0,this.autoRunRequest=void 0,this.lastResponse=void 0,this.lastAssertion=void 0,this.lastException=void 0,this.lastResponseStartData=void 0,this.isSavedRequest=void 0,this.activeRequestEditorTabIndex=0,this.setActiveRequestEditorTabIndex=e=>{this.activeRequestEditorTabIndex=e},this.setTrackedState=(e,t)=>{e&&(this.trackedState=(0,h.Z)({},this.trackedState,{[e]:t}))},this.startListeningToRequestCache=()=>{var e;this.isLoading=!0;const t=new oe.CacheObserver(oe.cacheClient,(0,I.requestFindOneQuery)({requestId:this.metadata.id})),r=t.getCurrentResult();this.onRequestCacheUpdate(r),this.cachedRequestItem=null==(e=r.data)?void 0:e.data,this.unsubscribeFromRequestCache=t.subscribe(this.onRequestCacheUpdate)},this.onRequestCacheUpdate=e=>{var t;this.isLoading=!e.data&&!e.error,this.error=e.error;const r=null==(t=e.data)?void 0:t.data;r&&(this.isDirty&&!this.isSaving&&this.cachedRequestItem&&function(e,t,r){for(const r of["name","description","protocolProfileBehavior","method","url","queryParams","pathVariables","pathVariableData","auth","headers","headerData","data","dataMode","dataOptions","rawModeData","events","graphqlModeData"])if(e[r]!==t[r])return!0;return!1}(r,this.cachedRequestItem)&&(0,p.runInAction)((()=>{this.isConflicted=!0})),this.isDirty||(this.metadata.collectionId!==r.collection.id&&this.startListeningToCollectionsCache(r.collection.id),(0,p.runInAction)((()=>{this.hydrateStore(r)})),this.setMetadata((0,h.Z)({},this.metadata)),this.cachedRequestItem=r),this.updateInheritAuthParent(r))},this.updateInheritAuthParent=e=>{const t=(e=>{var t,r,a,s,o,n;let i=ie(e.folder);return i||(i=null!=(t=e.collection)&&t.auth?{id:null==(r=e.collection)?void 0:r.id,name:null==(a=e.collection)?void 0:a.name,auth:null==(s=e.collection)?void 0:s.auth,type:"collection"}:{id:null==(o=e.collection)?void 0:o.id,name:null==(n=e.collection)?void 0:n.name,auth:(0,h.Z)({type:"noauth"},ne.initialAuthState),type:"collection"},i)})(e);this.setInheritAuthParent(t)},this.setInheritAuthParent=e=>{this.inheritAuthParent=e},this.startListeningToCollectionsCache=e=>{if(e){var t;const r=new oe.CacheObserver(oe.cacheClient,(0,I.collectionPermissionsQuery)({collectionId:e})),a=r.getCurrentResult();this.onCollectionPermissionsUpdate(a),null==(t=this.unsubscribeFromPermissionsCache)||t.call(this),this.unsubscribeFromPermissionsCache=r.subscribe((e=>{this.onCollectionPermissionsUpdate(e)}))}},this.onCollectionPermissionsUpdate=e=>{const t=e.data;t&&(0,p.runInAction)((()=>{this.permissions=t}))},this.setSending=e=>{this.sending=e},this.onHeadersUpdate=()=>{(0,c.Z)(this,be)[be](this.method,this.urlStore.url,this.previewRequestBody)},this.autoTriggerPreviewRequest=()=>{const e=(0,p.autorun)((()=>{(0,c.Z)(this,be)[be](this.method,this.urlStore.url,this.previewRequestBody)}));(0,c.Z)(this,ve)[ve].set("preview-request",e)},Object.defineProperty(this,be,{writable:!0,value:L((async function(e,t,r){s.urlStore.updatePreviewQueryParams({auth:ge(s)});const a=s.getAgentOptions(),o=await(async(e,t)=>await(0,m.previewRequest)(e,t))((0,h.Z)({auth:ge(s),header:[],method:(0,p.toJS)(e),url:(0,p.toJS)(null!=t?t:"")},r),a);s.headerData.onPreviewHeadersReceived(null==o?void 0:o.header)}),100)}),this.setExampleRequestSent=()=>{this.isExampleRequestSent=!0},this.getRequestBodyFormat=e=>{switch(e){case"raw":return{dataMode:e,dataOptions:{raw:{language:this.rawEditorState.language}},rawModeData:this.rawEditorState.content};case"params":return{dataMode:e,data:this.formDataStore.items};case"urlencoded":return{dataMode:e,data:this.urlEncodedDataStore.items};case"binary":return this.binaryEditor.files&&this.binaryEditor.files.length>0?{dataMode:e,rawModeData:this.binaryEditor.files[0].path}:{dataMode:e,rawModeData:""};case"graphql":return{dataMode:e,graphqlModeData:{query:this.graphqlPayloadStore.query,variables:this.graphqlPayloadStore.variables}};default:return{dataMode:e}}},this.sendRequest=async function({activeEnvironment:e}){J.AnalyticsService.addEventV2({category:"http",action:"send-request",label:"http-workbench",value:1}),(0,p.runInAction)((()=>{s.sending=!0}));const t=await(async({activeEnvironment:e,workspaceId:t,collectionItem:r})=>{const[a,s,o]=await Promise.all([(0,S.getActiveGlobalsSession)(t),(0,S.getActiveEnvironmentSession)(null==e?void 0:e.id),(0,I.getActiveCollectionSession)(r)].map((e=>e&&e.catch((()=>{})))));return{globals:a,environment:s,collection:o}})({activeEnvironment:e,workspaceId:s.metadata.workspaceId,collectionItem:s.collection}).catch((()=>{}));let r=s.getAgentPayload();try{r=await(async(e,t,r,a)=>{var s;const o={collection:{},folder:{},request:{}};if("oauth2"===(null==(s=e.auth)?void 0:s.type)){var n;const t=null==r||null==(n=r.oauth2)||null==(n=n.find((e=>"token_id"===e.key)))?void 0:n.value;if(!t||t===ne.SHARED_OAUTH2_TOKEN_ID)return e;const s=await(0,ne.getTokenValuesForTokenId)(t).catch((()=>{}));if(!s)return e;const o=[{key:"token_id",value:t,enabled:!0}];return null!=a&&a.refreshTokenMessageId&&o.push({key:"message_id",value:null==a?void 0:a.refreshTokenMessageId,enabled:!0}),e.auth.oauth2=[...e.auth.oauth2,...s.oauth2,{key:"id",value:o}],e}try{var i;const r=null==t?void 0:t.type,s=(null==t?void 0:t.id)&&de(null==t?void 0:t.id,a.owner);if("oauth2"===(null==t||null==(i=t.auth)?void 0:i.type)&&r&&s){const n=await(0,ne.getTokenValuesForAuthSession)({model:r,modelId:s}).catch((()=>{})),i=await(0,ne.getTokenIdForAuthSession)({model:r,modelId:s}).catch((()=>{})),l=[{key:"token_id",value:i,enabled:!0}];null!=a&&a.refreshTokenMessageId&&l.push({key:"message_id",value:null==a?void 0:a.refreshTokenMessageId,enabled:!0}),i&&i!==ne.SHARED_OAUTH2_TOKEN_ID&&(null==n?void 0:n.oauth2)&&n.oauth2.push({key:"id",value:l}),n&&(o[r]={[s]:n});const d=((e,t,r,a)=>{var s;if(a&&(0!==Object.keys(e.collection).length||0!==Object.keys(e.folder).length)){var o;if("collection"===(null==a?void 0:a.type)&&"oauth2"===(null==t||null==(s=t.auth)?void 0:s.type)&&Object.keys(e.collection).length>0)return{collection:(0,h.Z)({},t,{auth:(0,h.Z)({},t.auth,{oauth2:[...t.auth.oauth2||[],...(null==(o=e.collection)||null==(o=o[t.id])?void 0:o.oauth2)||[]]})}),folder:r};if("folder"===(null==a?void 0:a.type)&&r&&t&&Object.keys(e.folder).length>0){const s=a.id,o=(e=>{const t="string"==typeof e&&e.split(le);return!t||t.length<6?{id:e}:{owner:t.shift(),id:t.join(le)}})(t.id).owner,n=de(s,o||""),i=ue()(r);return(t=>{for(;"object"==typeof t;){var r;if(t.id===s&&"oauth2"===(null==(r=t.auth)?void 0:r.type)){var a;t.auth=(0,h.Z)({},t.auth,{type:"oauth2",oauth2:[...t.auth.oauth2||[],...(null==(a=e.folder)||null==(a=a[n])?void 0:a.oauth2)||[]]});break}t=t.folder}})(i),{collection:t,folder:i}}}})(o,e.collection,e.folder,t);(null==d?void 0:d.collection)&&(e.collection=d.collection),(null==d?void 0:d.folder)&&(e.folder=d.folder)}}catch(t){return e}return e})(r,s.inheritAuthParent,s.requestAuthSessionState,{owner:s.metadata.ownerId||"",refreshTokenMessageId:s.refreshTokenManager.getRefreshTokenMessageId()})}catch(e){}var a,o;s.lastAssertion=null,s.lastException=null,s.lastAssertion=null,s.lastResponseStartData=null,s.removeResponseListeners=(a=r,o=(0,h.Z)({variables:{globals:null==t?void 0:t.globals,environment:null==t?void 0:t.environment,collectionVariables:null==t?void 0:t.collection}},s.getAgentOptions(),{response:e=>{q.pmConsole.logRequest({request:e.request,response:e.response,error:e.error,cursor:e.cursor,history:e.history}),(0,p.runInAction)((()=>{s.sending=!1,s.isSavedRequest||(s.lastResponse=e),s.editorResponseStore.response(e)}))},console:e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},responseStart:e=>{s.removeResponseListeners=null,s.isSavedRequest||(s.lastResponseStartData=e),s.editorResponseStore.responseStart(e)},assertion:e=>{s.isSavedRequest||(s.lastAssertion=e),s.editorResponseStore.assertion(e)},exception:e=>{s.isSavedRequest||(s.lastException=e),s.editorResponseStore.exception(e),q.pmConsole.logException({error:{name:e.error.name||"Error",message:e.error.message||"Unknown error"}})},script:e=>{var r,a;const o=e.event;null!=e&&null!=(r=e.mutations)&&r.collectionVariables&&null!=t&&null!=(a=t.collection)&&a.id&&(e.mutations.collectionVariables.id=t.collection.id),e.error&&(null==o?void 0:o.listen)===E&&s.cancelRequest(),s.editorResponseStore.script(e)}}),(0,g.createHttpHistoryItem)(a).catch((()=>{})),(0,m.sendRequestViaAgent)(a,o))},this.setWorkbenchLayout=e=>{e!==this.workbenchLayout&&(o.jx(e),this.workbenchLayout=e)},this.setMethod=e=>{this.method=e,this.setTrackedState("method",e)},this.updateProtocolProfileBehavior=e=>{this.protocolProfileBehavior=e,(0,c.Z)(this,be)[be](this.method,this.urlStore.url,this.previewRequestBody),this.setTrackedState("protocolProfileBehavior",e)},this.setDescription=e=>{this.metadata.description=e,this.setTrackedState("description",e)},this.setPreRequestScript=e=>{this.preRequestScript=e},this.setRequestAuthState=e=>{this.requestAuthState=e,(0,c.Z)(this,be)[be](this.method,this.urlStore.url,this.previewRequestBody),"inherit"===this.requestAuthState.activeAuthType?this.setTrackedState("auth",null):this.setTrackedState("auth",this.requestAuthState.activeAuthType)},this.setRequestAuthSessionState=e=>{this.requestAuthSessionState=e},this.setTests=e=>{this.tests=e},this.setMetadata=e=>{this.metadata=e},this.setRequestBodyState=e=>{var t;this.requestBodyState.activeBodyType=null!=(t=null==e?void 0:e.activeBodyType)?t:"none",this.setTrackedState("dataMode",null==e?void 0:e.activeBodyType)},this.setRawEditorState=e=>{this.rawEditorState=(0,h.Z)({},this.rawEditorState,e),this.setTrackedState("data",e.content),this.setTrackedState("dataOptions",e.language)},this.cancelRequest=()=>{(0,p.runInAction)((()=>{this.sending&&this.removeResponseListeners&&(this.sending=!1,this.removeResponseListeners(),this.removeResponseListeners=null)}))},this.clearResponse=()=>{this.cancelRequest(),this.sending=!1,this.editorResponseStore=new R({workspaceId:this.metadata.workspaceId,requestId:this.metadata.id}),this.lastAssertion=null,this.lastException=null,this.lastResponse=null,this.lastResponseStartData=null},this.generateRequestBody=e=>{switch(e){case"raw":return{dataMode:e,dataOptions:{raw:{language:this.rawEditorState.language}},rawModeData:this.rawEditorState.content};case"params":return{dataMode:e,data:this.formDataStore.items};case"urlencoded":return{dataMode:e,data:this.urlEncodedDataStore.items};case"binary":return this.binaryEditor.files&&this.binaryEditor.files.length>0?{dataMode:e,rawModeData:this.binaryEditor.files[0].path}:{dataMode:e,rawModeData:""};case"graphql":return{dataMode:e,graphqlModeData:{query:this.graphqlPayloadStore.query,variables:this.graphqlPayloadStore.variables}};default:return{dataMode:e}}},this.getCreateRequestPayload=()=>{const e=this.generateRequestBody(this.requestBodyState.activeBodyType),t=this.requestAuthState,r=(0,d.Z)(t,me),a=(0,h.Z)({},r);return(0,h.Z)({method:this.method,protocolProfileBehavior:this.protocolProfileBehavior,url:this.urlStore.url,auth:(0,h.Z)({},a),pathVariableData:this.urlStore.pathVariables.map((e=>(0,h.Z)({},e,{description:e.description||""}))),queryParams:this.urlStore.queryParams.map(((e,t)=>(0,h.Z)({},e,{sortOrder:t}))),events:[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()],headerData:this.headerData.userHeaders,responses:[],responses_order:[]},e)},this.setIsSaving=e=>{this.isSaving=e},this.resetAllTrackedState=()=>{(0,p.runInAction)((()=>{this.trackedState={},this.urlStore.trackedState={},this.headerData.trackedState={},this.preRequestStore.trackedState={},this.testScriptStore.trackedState={},this.formDataStore.trackedState={},this.urlEncodedDataStore.trackedState={},this.binaryEditor.trackedState={},this.graphqlPayloadStore.trackedState={},this.isConflicted=!1}))},this.revertTrackedStateChange=(e,t)=>{(0,p.runInAction)((()=>{this.trackedState=e.requestStore,this.urlStore.trackedState=e.urlStore,this.headerData.trackedState=e.headerData,this.preRequestStore.trackedState=e.preRequestStore,this.testScriptStore.trackedState=e.testScriptStore,this.formDataStore.trackedState=e.formDataStore,this.urlEncodedDataStore.trackedState=e.urlEncodedDataStore,this.binaryEditor.trackedState=e.binaryEditor,this.graphqlPayloadStore.trackedState=e.graphqlPayloadStore,this.isConflicted=t}))},this.getUpdateRequestPayload=()=>{const e=this.getRequestBodyFormat(this.requestBodyState.activeBodyType),t=ge(this);return(0,h.Z)({id:this.metadata.id,name:this.trackedState.name,method:this.trackedState.method||this.method,description:this.trackedState.description,protocolProfileBehavior:this.trackedState.protocolProfileBehavior||this.protocolProfileBehavior,url:this.urlStore.trackedState.url,auth:t,pathVariableData:this.urlStore.trackedState.pathVariableData,queryParams:this.urlStore.trackedState.queryParams,events:[...this.preRequestStore.trackedState.events||this.preRequestStore.getPayload(),...this.testScriptStore.trackedState.events||this.testScriptStore.getPayload()],headers:this.headerData.trackedState.headers,headerData:this.headerData.trackedState.headerData},e)},this.getLastResponseDetails=()=>({assertion:this.lastAssertion,exception:this.lastException,responseData:this.lastResponse,responseStartData:this.lastResponseStartData}),(0,p.makeObservable)(this,{isLoading:!0,isSaving:!0,isConflicted:!0,error:!0,workbenchLayout:!0,setWorkbenchLayout:p.action,breadcrumbs:p.computed,headerData:!0,sending:!0,setSending:p.action,metadata:!0,setMetadata:p.action,method:!0,setMethod:p.action,protocolProfileBehavior:!0,updateProtocolProfileBehavior:p.action,preRequestScript:!0,setPreRequestScript:p.action,rawEditorState:!0,setRawEditorState:p.action,requestAuthState:!0,requestAuthSessionState:!0,setRequestAuthState:p.action,setRequestAuthSessionState:p.action,requestBodyState:!0,graphqlPayloadStore:!0,setRequestBodyState:p.action,tests:!0,setTests:p.action,urlEncodedDataStore:!0,editorResponseStore:!0,urlStore:!0,previewRequestBody:p.computed,clearResponse:p.action,isDirty:p.computed,trackedState:!0,setTrackedState:p.action,onRequestCacheUpdate:p.action,setIsSaving:p.action,permissions:!0,inheritAuthParent:!0,setInheritAuthParent:p.action,isExampleRequestSent:!0,setExampleRequestSent:p.action,activeRequestEditorTabIndex:!0,setActiveRequestEditorTabIndex:p.action,autoRunRequest:!0}),this.isSavedRequest=r,this.workbenchLayout=t,this.editorResponseStore=new R({workspaceId:null!=(a=e.workspace)?a:"",requestId:e.id}),this.refreshTokenManager=new pe,this.metadata.id=e.id,this.exampleMeta=e.exampleMeta,this.autoRunRequest=e.autoRunRequest,e.workspace&&(this.metadata.workspaceId=e.workspace),this.metadata.id&&(0,ne.getAuthSession)({model:"request",modelId:this.metadata.id}).then((e=>{e&&this.setRequestAuthSessionState(e)})).catch((()=>{})),r)return this.startListeningToRequestCache(),void(e.responseDetails&&(e.responseDetails.responseStartData&&this.editorResponseStore.responseStart(e.responseDetails.responseStartData),e.responseDetails.assertion&&this.editorResponseStore.assertion(e.responseDetails.assertion),e.responseDetails.exception&&this.editorResponseStore.exception(e.responseDetails.exception),e.responseDetails.responseData&&this.editorResponseStore.response(e.responseDetails.responseData)));this.hydrateStore(e,t)}get breadcrumbs(){var e,t,r;return((e,t,r,a,s,o)=>{let n,i=[],l={};return n=t||r||se,l={id:e,name:n,entityType:"request",workspaceId:a},i=(0,I.getBreadcrumbItems)(a,s,o),i.push(l),i})(null==(e=this.metadata)?void 0:e.id,null==(t=this.metadata)?void 0:t.name,this.urlStore.url,null==(r=this.metadata)?void 0:r.workspaceId,this.collection,this.folder)}get name(){return this.metadata.name?this.metadata.name:this.urlStore.url?this.urlStore.url:se}getAgentPayload(){var e,t;const r=this.requestBodyState.activeBodyType,a=this.headerData.headers.filter((e=>!!e.key&&!e.system)),s=this.getRequestBodyFormat(r),o=ge(this),n=a,i=a.map((e=>`${e.key}: ${e.value}`)).join("\n");return(0,h.Z)({id:this.metadata.id,name:this.metadata.name,workspace:this.metadata.workspaceId,team:this.metadata.teamId,owner:this.metadata.ownerId,method:this.method,url:this.urlStore.url,preRequestScript:null!=(e=this.preRequestStore.content)?e:this.preRequestScript,tests:null!=(t=this.testScriptStore.content)?t:this.tests,queryParams:this.urlStore.queryParameters,pathVariableData:this.urlStore.pathVariables,headerData:n,headers:i,auth:o,events:[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()]},s,{collection:this.collection,folder:this.folder})}getAgentOptions(){return{implicitCacheControl:!0,implicitTraceHeader:!0,protocolProfileBehavior:(0,h.Z)({},(0,p.toJS)(this.protocolProfileBehavior),{disabledSystemHeaders:this.headerData.disabledSystemHeaders})}}destroy(){var e,t,r,a;for(const[,e]of(0,c.Z)(this,ve)[ve])e();this.headerData.destroy(),this.urlStore.destroy(),null==(e=this.unsubscribeFromRequestCache)||e.call(this),null==(t=this.unsubscribeFromPermissionsCache)||t.call(this),null==(r=(a=this.refreshTokenManager).destroy)||r.call(a),this.lastAssertion=null,this.lastException=null,this.lastResponse=null}}var ye=r(47069),xe=r(52322);const ke=s().createContext({}),Se=({children:e})=>{if(!(0,n.useInRouterContext)())throw new Error("RequestEditorProvider must be used within a Router");const t=(()=>{const e=(0,i.useLoaderData)();return e&&e.workbenchLayout&&["vertical","horizontal"].includes(e.workbenchLayout)?e.workbenchLayout:ye.N})(),r=(()=>{const e=(0,i.useLoaderData)(),{workspaceId:t}=(0,n.useParams)(),r=(0,i.useLocation)(),a=function(e){if(e)return"string"==typeof e?JSON.parse(e):e}(r.state);var s;if(null!=e&&e.requestData&&"object"==typeof e.requestData&&Object.keys(e.requestData).length>0)return null!=(s=e.requestData)&&s.data?(e.requestData.data.workspace=t,a&&(e.requestData.data.responseDetails=a.response),e.requestData.data):e.requestData;const o=new URLSearchParams(r.search);return{id:o.get("id")||"",method:o.get("method")||l.gg,workspace:t,responseDetails:null==a?void 0:a.response}})(),{requestId:s,workspaceId:d,historyId:c}=(0,n.useParams)();s&&(r.id=s,r.workspace=d);const u=(0,a.useMemo)((()=>new fe(r,t,!!s)),[s,c]);return(0,a.useEffect)((()=>{const e=o.Pn((e=>{u.setWorkbenchLayout(e)}));return()=>{u.destroy(),e()}}),[]),(0,xe.jsx)(ke.Provider,{value:u,children:e})}},50429:(e,t,r)=>{r.d(t,{B:()=>s,a:()=>o});const a=e=>e.charAt(0).toUpperCase()+e.slice(1),s=e=>"string"==typeof e?e:"object"==typeof e?JSON.stringify(e):String(e),o=(e,t)=>e.map((e=>{let r={environment:"a",collection:"b",global:"c"}[e.scope]||"y";return"dynamic"===e.type?(r="z",{label:e.key,detail:`Details: ${s(e.description)}`,documentation:`Scope: ${a(e.scope)}\n\n`,insertText:e.key,range:t,sortText:`${r}-${e.key}`}):{label:e.key,detail:`Current: ${e.sessionValue}`,documentation:`Initial: ${s(e.value)} \nScope: ${a(e.scope)}\n\n`,insertText:e.key,range:t,sortText:`${r}-${e.key}`}}))},64019:(e,t,r)=>{r.d(t,{n:()=>o});var a=r(96529);const s=new Set([a.RM,a.m3,a.ob,a.NF]),o=e=>!!e&&s.has(e)}}]);
//# sourceMappingURL=7451.801586bb3fb603d3.js.map