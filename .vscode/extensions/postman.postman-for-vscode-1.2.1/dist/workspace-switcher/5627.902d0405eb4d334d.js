"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[5627],{5627:(e,r,t)=>{t.d(r,{Z:()=>Ne});var s=t(7560),n=t(540),a=t(99),o=t(7201),i=t(6663),c=t.n(i),l=t(5860);const d=()=>{const{data:e,isError:r,error:t,refetch:s,isRefetching:a}=(0,o.useDataFetch)({queryKey:["recent-workspaces"],queryFn:({signal:e})=>(async({signal:e})=>await l.postmanGateway.post({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",method:"GET",signal:e,query:{recentActivity:!0,limit:10},service:"workspaces"}))({signal:e}),useErrorBoundary:!1});return{data:(0,n.useMemo)((()=>(null==e?void 0:e.data)||[]),[e]),error:r?t:null,refetching:a,refetch:s}},u={sort:"name,ASC"},p=e=>{const{data:r,isError:t,error:a,refetch:i,isRefetching:d,fetchNextPage:p,hasNextPage:h,isFetchingNextPage:g}=(0,o.useInfiniteDataFetch)({queryKey:["more-workspaces"],queryFn:async({pageParam:e,signal:r})=>(async(e,r)=>await l.postmanHttpGateway.get({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",service:"workspaces",signal:r,query:(0,s.Z)({},u,e?{cursor:e}:null)}))(e,r),getNextPageParam:e=>{var r;return!(null==e||null==(r=e.meta)||!r.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),f=(0,n.useMemo)((()=>{let e=[];for(const t of(null==r?void 0:r.pages)||[])e=[...e,...t.data];return e}),[null==r?void 0:r.pages]);return{workspaces:(0,n.useMemo)((()=>{if(!f)return null;const r=f||[];return null!=e&&e.length?r.filter((r=>!(null!=e&&e.find((e=>e.id===r.id))))):r}),[f,e]),fetchingNextPage:g,loadMore:p,hasMore:h||!1,error:t?a:null,refetch:i,refetching:d}},h={sort:"name,ASC"},g=async(e,r)=>{try{return{response:await l.postmanHttpGateway.get({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/workspaces",service:"workspaces",query:(0,s.Z)({},h,r?{cursor:r}:null,e?{name:e}:null)}),error:null}}catch(e){return{response:null,error:e}}},f=(0,t(398).v4)(),m=async({workspaceId:e,signal:r})=>{try{await l.postmanGateway.post({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,signal:r,data:{body:{device:{id:f,type:"app",state:{focus:!0}},models:{workspace:e},primaryModel:"workspace"}},method:"post",path:"/v2/report",service:"presence"})}catch(e){}};var v=t(9530),x=t.n(v);let k;const w=x().div(k||(k=(e=>e)`
  position: relative;
`));var y=t(9460),j=t(8560),S=t(5736),E=t(6415),T=t(5710),W=t(2322);let C,M,I,A,O,P,b=e=>e;const N=x().div(C||(C=b`
  padding: 0 var(--spacing-s);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  border-radius: var(--border-radius-default);
  width: inherit;
`)),_=x().div(M||(M=b`
  color: var(--content-color-primary);
  font-weight: var(--text-weight-medium);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    color: var(--base-color-info);

    @include icon-color(var(--base-color-info));
  }
`)),Z=(0,v.css)(I||(I=b`
  position: absolute;
  right: var(--spacing-xs);
  top: 50%;
  transform: translateY(-50%);
`)),R=x()(E.Z)(A||(A=b`
  ${0}
`),Z),L=x()(T.Z)(O||(O=b`
  ${0}
`),Z),G=x().div(P||(P=b`
  display: flex;
  align-items: center;
  height: var(--size-m);
`)),z=({activeWorkspace:e,isOpen:r,setIsOpen:t})=>(0,W.jsx)(_,{onClick:()=>t(!r),children:void 0===e?(0,W.jsx)(j.Z,{height:"var(--size-m)",alignItems:"center",justifyContent:"center",children:(0,W.jsx)(S.Z,{})}):function(){const t=(null==e?void 0:e.name)||"Select Workspace";return(0,W.jsx)(N,{role:"menu",children:(0,W.jsxs)(G,{children:[(0,W.jsx)(y.ZP,{isTruncated:!0,children:t}),r?(0,W.jsx)(L,{color:"content-color-primary"}):(0,W.jsx)(R,{color:"content-color-primary"})]})})}()});var F=t(856),D=t(2419),H=t(605),U=t(5869),q=t(9245);let K,$,V,Y,B=e=>e;const J=x()(j.Z)(K||(K=B`
  align-items: center;
  padding: var(--spacing-s);
  gap: var(--spacing-s);

  @media (width >= 320px) {
    padding: var(--spacing-l) var(--spacing-l) var(--spacing-s);
    gap: var(--spacing-l);
  }
`)),X=x()(j.Z)($||($=B`
  flex: 0;
  justify-content: flex-end;
`)),Q=x()(q.Link)(V||(V=B`
  width: 100%;
  display: block;
`)),ee=x().div(Y||(Y=B`
  flex: 1;
`)),re=({searchText:e,setSearchText:r})=>{const t=(e=>{const r=!!globalThis.matchMedia,[t,s]=(0,n.useState)(!!r&&globalThis.matchMedia(e).matches);return(0,n.useEffect)((()=>{if(r){const r=globalThis.matchMedia(e),t=e=>{s(e.matches)};return s(r.matches),r.addEventListener("change",t),()=>{r.removeEventListener("change",t)}}}),[r,e]),t})("(min-width: 320px)");return(0,W.jsxs)(J,{children:[(0,W.jsx)(ee,{children:(0,W.jsx)(D.Z,{value:e,onChange:e=>{r(e.target.value)},placeholder:"Search Workspaces",onClear:()=>r("")})}),(0,W.jsx)(X,{children:(0,W.jsx)(Q,{to:c().ARTEMIS_URL+"/workspace/create",children:t?(0,W.jsx)(H.Z,{fullWidth:!0,minWidth:"130px",type:"secondary",text:"Create Workspace"}):(0,W.jsx)(H.Z,{type:"secondary",icon:(0,W.jsx)(U.Z,{}),tooltip:"Create Workspace"})})})]})};let te;const se=x().div(te||(te=(e=>e)`
  max-height: 100%;
  overflow-y: auto;
`));var ne=t(6707),ae=t.n(ne),oe=t(494),ie=t(1180),ce=t(4962),le=t(1075);let de,ue,pe,he,ge,fe=e=>e;const me=x().div(de||(de=fe`
  width: 100%;
  line-height: var(--line-height-m);
  padding-left: var(--spacing-s);
  height: var(--size-m);
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (width >= 320px) {
    padding-left: var(--spacing-l);
  }
`)),ve=x().div(ue||(ue=fe`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size-m);
`)),xe=x().div(pe||(pe=fe`
  height: var(--size-m);
  padding: var(--spacing-xs) var(--spacing-zero) var(--spacing-s);
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`)),ke=x()(H.Z)(he||(he=fe`
  margin-left: var(--spacing-xs);
`)),we=x().div(ge||(ge=fe`
  line-height: var(--line-height-m);
  color: var(--content-color-secondary);
  margin-left: var(--spacing-l);
  height: var(--size-m);
  display: flex;

  @media (width >= 320px) {
    margin-left: calc(10 * var(--spacing-xs));
  }
`)),ye=({index:e,style:r,data:{items:t,fetchingNextPage:s,onWorkspaceClick:n,errorLoading:o,loadMore:i}})=>{const c=(0,a.useActiveWorkspaceId)(),l=t[e];if(!l)return o?(0,W.jsxs)(xe,{style:r,children:["Couldn't load the workspaces. Try reloading."," ",(0,W.jsx)(ke,{type:"monochrome-plain",onClick:i,text:"Reload"})]}):(0,W.jsx)(ve,{style:r,children:s&&(0,W.jsx)(S.Z,{size:"small","aria-label":"loading more workspaces",description:""})});if("id"in l){const s=t[e];return(0,W.jsx)(le.ZP,{workspace:s,style:r,onClick:n,isActive:c===s.id})}return"NO_WORKSPACES_FOUND_MESSAGE"===l.type?(0,W.jsx)(we,{style:r,children:"No workspaces found"}):(0,W.jsx)(me,{style:r,children:(0,W.jsx)(ce.Z,{type:"h6",text:l.heading})})};let je,Se,Ee=e=>e;const Te=x().div(je||(je=Ee`
  height: fit-content;
`)),We=x()(j.Z)(Se||(Se=Ee`
  justify-content: center;
  padding: var(--spacing-l);
`)),Ce=({isOpen:e,numberOfWorkspaces:r,items:t,onWorkspaceClick:s,loading:a,fetchingNextPage:o,loadMore:i,hasMore:c,errorLoading:l,isSearchMode:d})=>{const u=(0,n.useRef)(null);return(0,n.useEffect)((()=>{e&&u.current&&u.current.scrollTo(0)}),[e]),(0,W.jsxs)(Te,{role:"list",children:[a&&0===r&&(0,W.jsx)(We,{children:(0,W.jsx)(S.Z,{size:"large","aria-label":"loading workspaces",description:"Loading Workspaces"})}),r||a?null:(0,W.jsx)(ie.GenericErrorMessage,{title:"No workspaces found",illustration:"illustration-search",description:d?"Check your splling or try a different search term.":""}),r>0&&(0,W.jsx)(ae(),{isItemLoaded:e=>!c||e<t.length-1,itemCount:t.length,loadMoreItems:()=>i(),children:({onItemsRendered:e,ref:r})=>(0,W.jsx)(oe.FixedSizeList,{onItemsRendered:e,height:t.length>0?480:0,itemCount:t.length+1,width:"100%",style:{overflowX:"hidden"},itemSize:32,ref:e=>{u.current=e,r(e)},itemData:{errorLoading:l,loadMore:i,fetchingNextPage:o,items:t,onWorkspaceClick:s},children:ye})})]})},Me=(0,n.memo)(Ce),Ie=()=>(0,W.jsx)(ie.GenericErrorMessage,{title:"Failed to load workspaces",description:"Check your network connection or try again in some time"});let Ae;const Oe=x()(F.ZP)(Ae||(Ae=(e=>e)`
  min-height: fit-content;
  min-width: min(360px, 85vw);
  max-width: 85vw;
  max-height: min(545px, 75vh);

  .tippy-content {
    background-color: var(--background-color-secondary);
  }
`)),Pe=({searchText:e,setSearchText:r,workspacesSectionProps:t})=>{const{errorLoading:n,numberOfWorkspaces:a}=t;return n&&!a?(0,W.jsx)(Ie,{}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(re,{searchText:e,setSearchText:r}),(0,W.jsx)(se,{children:(0,W.jsx)(Me,(0,s.Z)({},t))})]})},be=e=>{const{isOpen:r,setIsOpen:t,trigger:a}=e,o=(0,n.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("div",{ref:o,children:a}),(0,W.jsx)(Oe,{isOpen:r,padding:"spacing-zero",placement:"bottom-end",onClickOutside:()=>t(!1),triggerRef:o,children:(0,W.jsx)(Pe,(0,s.Z)({},e))})]})},Ne=({Trigger:e,isOpen:r,setIsOpen:t,className:o})=>{const i=(0,a.useActiveWorkspaceId)(),[c,l]=(0,n.useState)(""),{data:u=[],refetch:h,refetching:f}=d(),{workspaces:v=[],hasMore:x,loadMore:k,error:y,fetchingNextPage:j,refetch:S}=p(u),{loading:E,workspaces:T=[],hasMore:C,loadMore:M,fetchingNextPage:I,error:A}=(({searchText:e})=>{const r=(0,n.useRef)(null),[t,a]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)(null),p=(0,n.useMemo)((()=>!(null==t||!t.meta.nextCursor)),[null==t?void 0:t.meta.nextCursor]);(0,n.useEffect)((()=>(e?(u(null),i(!0),r.current&&clearTimeout(r.current),r.current=setTimeout((()=>{a(null),g(e).then((({response:e,error:r})=>{a(e),i(!1),u(r)}))}),400)):(u(null),i(!1),a(null)),()=>{r.current&&clearTimeout(r.current)})),[e]);const h=(0,n.useCallback)((async()=>{if(!p)return!1;u(null),l(!0);const{response:r,error:n}=await g(e,null==t?void 0:t.meta.nextCursor);return r&&t&&a((0,s.Z)({},t,{meta:(0,s.Z)({},t.meta,r.meta),data:[...t.data,...r.data]})),l(!1),u(n),!(null==r||!r.meta.nextCursor)}),[p,e,t]),f=(0,n.useMemo)((()=>(null==t?void 0:t.data)||[]),[t]);return{loading:o,fetchingNextPage:c,loadMore:h,hasMore:p,workspaces:f,error:d}})({searchText:c}),{workspaceInfo:O,fetchWorkspaceInfo:P}=(()=>{const[e,r]=(0,n.useState)(null),[t,s]=(0,n.useState)(null),{data:o,isLoading:i,isError:c,refetch:l}=(0,a.useWorkspace)(e);(0,n.useEffect)((()=>{o&&s(o)}),[o]);const d=(0,n.useCallback)((e=>{r(e)}),[]);return{workspaceInfo:t,isLoading:i,isError:c,refetch:l,fetchWorkspaceInfo:d}})(),b=null===u,[N,_]=(0,n.useState)(window.INITIAL_WORKSPACE?JSON.parse(window.INITIAL_WORKSPACE||"null"):void 0),Z=(0,a.useNavigateToWorkspace)(),R=(0,n.useCallback)((e=>{l(""),t(!1),Z((null==e?void 0:e.id)||null),_(e)}),[t,Z]);(({activeWorkspace:e,setActiveWorkspace:r})=>{const{data:t,error:s}=d(),{workspaces:o,error:i}=p(),c=!t&&!s,l=!t&&!i,u=(0,a.useActiveWorkspaceId)();(0,n.useEffect)((()=>{if(null!=e&&e.id)return;if(!u)return r(null);const s=null==t?void 0:t.find((e=>e.id===u));if(s)return r(s);const n=null==o?void 0:o.find((e=>e.id===u));return n?r(n):c||l?void 0:r(null)}),[u,null==e?void 0:e.id,r,t,c,o,l])})({activeWorkspace:N,setActiveWorkspace:_}),(0,n.useEffect)((()=>{null!=N&&N.id&&i!==(null==N?void 0:N.id)&&P(i)}),[i]),(0,n.useEffect)((()=>{O&&(_(O),m({workspaceId:i}))}),[O]),(0,n.useEffect)((()=>{i&&m({workspaceId:i})}),[i]),((e,r,t)=>{const s=(0,n.useRef)(!1);(0,n.useEffect)((()=>{s.current&&r(),e&&(s.current=!0)}),t)})(r,(()=>{r&&(f&&b||h(),y&&S())}),[r]);const L=(0,n.useMemo)((()=>[{type:"SECTION_HEADING",heading:"Recently Visited"},...null!=u&&u.length?u:[{type:"NO_WORKSPACES_FOUND_MESSAGE"}],{type:"SECTION_HEADING",heading:"More Workspaces"},...null!=v&&v.length?v:[{type:"NO_WORKSPACES_FOUND_MESSAGE"}]]),[u,v]),G=(0,n.useMemo)((()=>((null==u?void 0:u.length)||0)+((null==v?void 0:v.length)||0)),[null==u?void 0:u.length,null==v?void 0:v.length]),F=(0,n.useMemo)((()=>{const e={isOpen:r,onWorkspaceClick:R};return c?(0,s.Z)({},e,{numberOfWorkspaces:(null==T?void 0:T.length)||0,isSearchMode:!0,items:T||[],loading:E,fetchingNextPage:I,loadMore:M,hasMore:C,errorLoading:A}):(0,s.Z)({},e,{numberOfWorkspaces:G,items:L,loading:null===u||null===v,fetchingNextPage:j,hasMore:x,loadMore:k,errorLoading:y})}),[r,c,R,M,G,L,v,u,T,C,x,k,j,I,y,A,E]),D=e?(0,W.jsx)(e,{activeWorkspace:N,isOpen:r,setIsOpen:t}):(0,W.jsx)(z,{isOpen:r,setIsOpen:t,activeWorkspace:N});return(0,W.jsx)(w,{className:o,children:(0,W.jsx)(be,{isOpen:r,setIsOpen:t,trigger:D,searchText:c,setSearchText:l,workspacesSectionProps:F})})}}}]);
//# sourceMappingURL=5627.902d0405eb4d334d.js.map