"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[488],{488:(e,t,a)=>{function r(e){return window&&window.open(e,"_self","noopener,noreferrer")}a.r(t),a.d(t,{Link:()=>A,OPEN_EXTENSION_URL:()=>D,PostmanTabsManager:()=>ut,checkContextAndNavigate:()=>r,createPlatformRouter:()=>mt,openExternalLink:()=>O,useAdditionalRouteContext:()=>R,useBeforeTabbedWindowUnload:()=>f,useCurrentPostmanTabContext:()=>h,useIsActivePostmanTab:()=>m,useLoaderData:()=>M,useLocation:()=>y,useMountOutletOnNav:()=>w,useNavigate:()=>L,usePostmanTabsContext:()=>p,useSearchParams:()=>I,useSetTabState:()=>j,useSetTabTitle:()=>k,useTabTitleAndStateUpdates:()=>x,useTabTitleMeta:()=>Z,withRouter:()=>c});var i=a(7560),n=a(540),s=a.n(n),o=a(607),l=a(2322);function c(e){return t=>{const a=(0,o.useLocation)(),r=(0,o.useNavigate)(),n=(0,o.useParams)();return(0,l.jsx)(e,(0,i.Z)({location:a,navigate:r,params:n},t))}}var d=a(8283),u=a(1466);a(7321);const b=s().createContext(null),p=()=>(0,n.useContext)(b),v=s().createContext(null),h=()=>(0,n.useContext)(v),m=()=>{const e=p(),t=h(),{tabId:a}=t||{};return(null==e?void 0:e.activeTab)===a},x=()=>{const{pathname:e,search:t}=(0,o.useLocation)(),a=m(),{tabId:r,title:i,tabType:s,setTabState:l,isConflicted:c,isDirty:d}=h();(0,n.useEffect)((()=>{a&&i&&(l({title:i,tabType:s,isDirty:d,isConflicted:c}),globalThis.document.title=i)}),[a,r,i,s,d,c,l]),(0,n.useEffect)((()=>{l({currentlyActiveURL:e+t})}),[])},f=()=>{const{tabs:e,tabsMeta:t}=p();(0,n.useEffect)((()=>{}),[])};var g=a(398);const T=(e,...t)=>{const a=e(...t),r=p(),i=!!h(),s=m(),o=(0,n.useRef)(a);return(0,n.useEffect)((()=>{s&&(o.current=a)}),[s,a]),r&&i&&!s?o.current:a},y=()=>T(o.useLocation),C=(e,t)=>{const a=t[e.id];return!(null!=a&&a.isDirty||null!=a&&a.isConflicted||null!=a&&a.isPinned)},w=()=>{const{tabs:e,tabsMeta:t,setTabs:a,setTabsMeta:r,setActiveTab:s}=p(),l=y(),{state:c,pathname:d,search:u}=l,b=(0,o.useOutlet)(),v=(0,n.useMemo)((()=>b),[d+u]),h=(0,n.useCallback)(((t,r)=>{const i=e.map((e=>e.id===r?t:e));return s(t.id),a(i)}),[s,a,e]),m=(0,n.useCallback)(((n,o,l)=>{const c=(0,i.Z)({replacePreviewTab:!0,pinNewTab:!1},l),d=(0,g.v4)(),u={pathname:n,element:o,id:d},b=e.find((e=>C(e,t)));return b&&null!=c&&c.replacePreviewTab?h(u,b.id):(s(d),null!=c&&c.pinNewTab&&r((e=>(0,i.Z)({},e,{[d]:(0,i.Z)({},e[d],{isPinned:!0})}))),a((e=>[...e,{pathname:n,element:o,id:d}])))}),[e,h,s,a,t,r]);(0,n.useEffect)((()=>{if(!v)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(c),{tabId:a,newTab:r,sameTab:i}=t;if(r)return m(d,v,{replacePreviewTab:!1,pinNewTab:!0});if(i&&a&&-1!==e.findIndex((e=>e.id===a)))return h({id:(0,g.v4)(),pathname:d,element:v},a);if(a){var n;const t=null==(n=e.find((e=>e.id===a)))?void 0:n.id;if(t)return s(t)}const o=e.find((e=>e.pathname===d));return o?s(null==o?void 0:o.id):m(d,v)}),[v])},j=e=>{const{setTabsMeta:t,activeTab:a}=p();return(0,n.useCallback)((r=>{a===e.id&&t((t=>{const a=(0,i.Z)({},t[e.id]),n={};return"title"in r&&(n.title=r.title||""),"isDirty"in r&&(n.isDirty=r.isDirty||!1),"isConflicted"in r&&(n.isConflicted=r.isConflicted||!1),"tabType"in r&&(n.tabType=r.tabType||"http"),"currentlyActiveURL"in r&&(n.currentlyActiveURL=r.currentlyActiveURL||""),(0,i.Z)({},t,{[e.id]:(0,i.Z)({},a,n)})}))}),[t,e.id,a])},k=e=>{const t=j(e);return(0,n.useCallback)((e=>t({title:e})),[t])},Z=()=>{const{setTabState:e}=h()||{};return{setTabTitle:u.onTabTitleChange}},N=["children","to"],E=["children","to"],S=e=>{let{children:t,to:a}=e,r=(0,d.Z)(e,N);const{tabId:n}=h()||{};return(0,l.jsx)(o.Link,(0,i.Z)({to:a},r,{state:(0,i.Z)({},r.state,{navigationParams:{sameTab:r.sameTab||!1,newTab:r.newTab||!1,tabId:r.sameTab||r.newTab?n:null}}),children:t}))},A=e=>{let{children:t,to:a}=e,r=(0,d.Z)(e,E);if(r.customNavEvent)return(0,l.jsx)(u.VSCodeLink,(0,i.Z)({to:a},r,{children:t}));const n=(0,i.Z)({},{target:"_self",rel:"noreferrer noopener"},r),s=a.toString();return new RegExp("https?:\\/\\/").test(s)?(0,l.jsx)("a",(0,i.Z)({href:s},n,{onClick:async e=>{r.onClick&&r.onClick(e),e.defaultPrevented},children:t})):(0,l.jsx)(S,(0,i.Z)({to:a},n,{children:t}))},L=()=>{const{tabId:e}=h()||{},t=(0,o.useNavigate)();return(a,r,n)=>{const s=(0,i.Z)({},r),o={sameTab:(null==n?void 0:n.sameTab)||!1,newTab:(null==n?void 0:n.newTab)||!1,tabId:null!=n&&n.sameTab||null!=n&&n.newTab?e:null};if(s.state=null!=r&&r.state&&"string"==typeof r.state?JSON.stringify((0,i.Z)({},JSON.parse(r.state),{navigationParams:o})):(0,i.Z)({},null==r?void 0:r.state,{navigationParams:o}),null==n||!n.customNavEvent||((0,u.vscodeNavigate)(a,r,n),n["customNavEvent-updateURL"]))return t(a,s)}},D="VIEW_COLLECTION_FOLDER_REQUEST";async function O(e){await(0,u.vsCodeOpenExternalLink)(e)}const R=()=>{const e=(0,o.useLocation)();return(0,n.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let a;return"string"==typeof e&&(a=JSON.parse(e)),(null==(t=a)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return(0,i.Z)({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},I=()=>{const e=(0,o.useLocation)(),[t,a]=T(o.useSearchParams),r=p(),{setTabState:i,tabId:s}=h()||{};return[t,(0,n.useCallback)((t=>{if(a(t,{state:r&&s?{navigationParams:{tabId:s}}:void 0}),s&&r&&i){const a=t.toString(),r=`${e.pathname}${a?"?"+a:""}`;i({currentlyActiveURL:r})}}),[a,r,e.pathname,i,s])]},M=()=>T(o.useLoaderData);var P=a(6246),$=a(9530),U=a.n($),_=a(605),W=a(5869),F=a(4691),z=a(9824),V=a(7282),J=a(347);const X=({isOpen:e,forTabId:t,position:a,createNewRequest:r,closeMenu:i})=>{const{closeAllNonSelectedTabs:n,closeTab:s,closeAllTabs:o}=p();return(0,l.jsx)(F.Z,{isOpen:e,contextMenu:{posX:null==a?void 0:a.x,posY:null==a?void 0:a.y},closeMenu:i,children:(0,l.jsxs)(z.Z,{children:[(0,l.jsx)(V.Z,{onClick:r,children:"New Request"}),(0,l.jsx)(J.Z,{}),(0,l.jsx)(V.Z,{onClick:()=>s(t),children:"Close Tab"}),(0,l.jsx)(V.Z,{onClick:()=>s(t,!0),children:"Force Close Tab"}),(0,l.jsx)(V.Z,{onClick:()=>n(),children:"Close Other Tabs"}),(0,l.jsx)(V.Z,{onClick:()=>o(),children:"Close All Tabs"}),(0,l.jsx)(V.Z,{onClick:()=>o(!0),children:"Force Close All Tabs"})]})})},q=e=>(0,l.jsx)(X,(0,i.Z)({},e));var B=a(8263),Y=a(6914),G=a(8560),H=a(9225),Q=a(5311),K=a(5547),ee=a(2922),te=a(4306),ae=a(9706),re=a(907),ie=a(455);const ne={collection:(0,l.jsx)(Q.Z,{}),folder:(0,l.jsx)(K.Z,{}),http:(0,l.jsx)(ee.Z,{}),"ws-raw":(0,l.jsx)(te.Z,{}),grpc:(0,l.jsx)(ae.Z,{}),"http-response":(0,l.jsx)(re.Z,{}),environment:(0,l.jsx)(ie.Z,{}),default:(0,l.jsx)(Q.Z,{})},se=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:a,closeAllTabs:r,activeTab:i,recentlyClosed:n,openFromRecentlyClosed:s}=p(),o=0===e.length;return(0,l.jsxs)(F.Z,{children:[(0,l.jsx)(B.Z,{children:(0,l.jsx)(_.Z,{icon:(0,l.jsx)(H.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,l.jsxs)(z.Z,{children:[(0,l.jsx)(Y.Z,{label:"Recently Closed Tabs",children:0===n.length?(0,l.jsx)(V.Z,{isDisabled:!0,children:"None"}):n.map(((e,t)=>(0,l.jsx)(V.Z,{onClick:()=>s(t),children:(0,l.jsxs)(G.Z,{alignItems:"center",gap:"spacing-s",children:[ne[e.tabType]||ne.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,l.jsx)(J.Z,{}),(0,l.jsx)(V.Z,{onClick:()=>a(i),isDisabled:o,children:"Close Selected Tab"}),(0,l.jsx)(V.Z,{type:"destructive",onClick:()=>a(i,!0),isDisabled:o,children:"Force Close Selected Tab"}),(0,l.jsx)(V.Z,{onClick:()=>t(),isDisabled:o,children:"Close All but Selected Tab"}),(0,l.jsx)(V.Z,{onClick:()=>r(),isDisabled:o,children:"Close All Tabs"}),(0,l.jsx)(V.Z,{type:"destructive",onClick:()=>r(!0),isDisabled:o,children:"Force Close All Tabs"})]})]})};var oe=a(3071),le=a(3341);let ce,de,ue,be,pe=e=>e;const ve=U().div(ce||(ce=pe`
  --border-start-percent: 30%;
  --border-end-percent: 70%;

  display: flex;
  flex: 1 1 auto;
  overflow-y: hidden;
`)),he=U().ul(de||(de=pe`
  margin: 0;
  padding: 0;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  flex-wrap: nowrap;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--tab-item-min-width), 1fr)
  );
  overflow: scroll hidden;
  padding-bottom: 48px;
  margin-bottom: -48px;
`)),me=U().div(ue||(ue=pe`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-left: ${0};
  border-bottom: 1px solid var(--border-color-default);
  border-image-slice: 0 0 0 1;
  border-image-source: linear-gradient(
    to bottom,
    var(--background-color-primary) var(--border-start-percent),
    var(--border-color-default) var(--border-start-percent),
    var(--border-color-default) var(--border-end-percent),
    var(--background-color-primary) var(--border-end-percent),
    var(--background-color-primary) calc(100% - 1px),
    var(--border-color-default) calc(100% - 1px)
  );
`),(e=>e.$tabsCount?"1px solid":"0")),xe=U().div(be||(be=pe`
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-right: 1px solid var(--border-color-default);
  border-bottom: 1px solid var(--border-color-default);
`)),fe=({minWidth:e,maxWidth:t,tabsCount:a,renderTabs:r,rightActions:i})=>{const s=(0,n.useRef)(null),o=(0,n.useRef)(null),[c,d]=(0,n.useState)(!1),[u,b]=(0,n.useState)(!1),[p,v]=(0,n.useState)(!1),[h,m]=(0,n.useState)(`${t}px`);return(0,n.useEffect)((()=>{let e;if(s.current&&o.current){const r=s.current.scrollWidth-s.current.clientWidth>0,i=Math.round(o.current.clientWidth/t);m(i<a?"100%":`${t}px`),d(r),r&&(e=setTimeout((()=>{var e;null==(e=s.current)||e.scrollTo(s.current.scrollWidth,0)}),1))}return()=>{e&&clearTimeout(e)}}),[a,t]),(0,n.useEffect)((()=>{let e=null;const t=s.current,a=()=>{const e=0===(null==t?void 0:t.scrollLeft),a=!!t&&t.scrollLeft===t.scrollWidth-t.clientWidth;b(e),v(a)},r=()=>{e&&clearTimeout(e),e=setTimeout(a,100)};return"onscrollend"in window?null==t||t.addEventListener("scrollend",a):null==t||t.addEventListener("scroll",r),()=>{"onscrollend"in window?null==t||t.removeEventListener("scrollend",a):null==t||t.removeEventListener("scroll",r),e&&clearTimeout(e)}}),[c]),(0,l.jsxs)(ve,{ref:o,children:[c&&(0,l.jsx)(xe,{children:(0,l.jsx)(_.Z,{type:"tertiary",icon:(0,l.jsx)(oe.Z,{}),onClick:()=>{var t;null==(t=s.current)||t.scrollBy({left:2*-e,behavior:"smooth"})},isDisabled:u})}),(0,l.jsx)(he,{ref:s,children:r(h,c)}),(0,l.jsxs)(me,{$tabsCount:a,children:[c&&(0,l.jsx)(_.Z,{type:"tertiary",icon:(0,l.jsx)(le.Z,{}),onClick:()=>{var t;null==(t=s.current)||t.scrollBy({left:2*e,behavior:"smooth"})},isDisabled:p}),i]})]})};var ge=a(3180);let Te,ye,Ce,we,je,ke,Ze,Ne,Ee,Se,Ae,Le=e=>e;const De=U().li(Te||(Te=Le`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: var(--tab-item-min-width);
  max-width: ${0}px;
  min-height: var(--wp-tabs-header-height);
  align-items: stretch;

  ${0}

  & + & {
    border-left: var(--border-width-default, 1px)
      var(--border-style-solid, solid);
    border-image-slice: 0 0 0 1;
    border-image-source: linear-gradient(
      to bottom,
      var(--background-color-primary) var(--border-start-percent),
      var(--border-color-default) var(--border-start-percent),
      var(--border-color-default) var(--border-end-percent),
      var(--background-color-primary) var(--border-end-percent),
      var(--background-color-primary) calc(100% - 1px),
      var(--border-color-default) calc(100% - 1px)
    );
  }

  &:last-child .tab-title-container {
    border-right: 0;
  }
`),172,(e=>e.$isActive&&(0,$.css)(ye||(ye=Le`
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        height: 1px;
        background-color: var(--base-color-brand);
        transition: opacity 0.2s ease-in-out;
      }
    `)))),Oe=U()(o.Link)(Ce||(Ce=Le`
  position: relative;
  display: flex;
  width: ${0};
  flex: 1;
`),(e=>e.width)),Re=U().div(we||(we=Le`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc(1px + var(--spacing-s)) var(--spacing-m);
  box-sizing: border-box;
  font-style: ${0};

  &:hover .tab-close-action {
    display: block;
  }

  ${0}
`),(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,$.css)(je||(je=Le`
      .tab-close-icon {
        display: none;
      }

      &:hover {
        .tab-close-icon {
          display: flex;
        }

        .dirty-indicator {
          display: none;
        }
      }
    `)))),Ie=U().div(ke||(ke=Le`
  display: flex;
`)),Me=U().div(Ze||(Ze=Le`
  font-family: var(--text-family-default);
  line-height: var(--line-height-s);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  padding: 0 var(--spacing-xs);
  flex: 1;
  align-self: center;
  white-space: nowrap;
  overflow-x: hidden;
`)),Pe=U().div(Ne||(Ne=Le`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`)),$e=U().div(Ee||(Ee=Le`
  position: relative;
  z-index: 1;
  width: calc(1.02 * var(--spacing-s));
  height: var(--spacing-s);
  border-radius: 50%;
  background-color: var(--base-color-brand);
`)),Ue=U().div(Se||(Se=Le`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding-left: var(--spacing-l);
  z-index: 1;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) calc(24px + var(--spacing-xs)),
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),_e=U().div(Ae||(Ae=Le`
  --border: 2px;

  width: 24px;
  height: calc(100% - calc(var(--border) * 2));
  position: absolute;
  top: var(--border);
  right: calc(24px - var(--spacing-m));
  z-index: 0;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) 33.33%,
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),We=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",Fe=e=>{const{activeTab:t,setActiveTab:a,closeTab:r,setTabsMeta:s,tabsMeta:o}=p(),c=t===e.tab.id,d=o[e.tab.id],u=(null==d?void 0:d.currentlyActiveURL)||e.tab.pathname,b=C(e.tab,o),v=(0,n.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),r(e.tab.id),null)),[r,e.tab.id]),h=(0,n.useCallback)((()=>{s((t=>(0,i.Z)({},t,{[e.tab.id]:(0,i.Z)({},d,{isPinned:!0})})))}),[e.tab.id,d,s]);return(0,l.jsx)(De,{$isActive:c,children:(0,l.jsx)(Oe,{width:e.width,to:u,onClick:t=>{!c&&a(e.tab.id),c&&t.preventDefault(),c&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,l.jsxs)(Re,{className:"tab-title-container",$isActive:c,$isDirty:null==d?void 0:d.isDirty,$isPreviewTab:b,onDoubleClick:h,"data-testid":"tab-header",children:[(0,l.jsx)(Ie,{children:ne[null==d?void 0:d.tabType]||ne.default}),(0,l.jsxs)(Me,{title:(null==d?void 0:d.title)||"Loading...",children:[We(d),(null==d?void 0:d.title)||"Loading..."]}),(0,l.jsxs)(Pe,{onClick:v,"data-testid":"tab-close-icon",children:[(null==d?void 0:d.isDirty)&&(0,l.jsx)($e,{className:"dirty-indicator"}),(0,l.jsx)(Ue,{className:"tab-close-action",children:(0,l.jsx)(_.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,l.jsx)(ge.Z,{})})})]}),(0,l.jsx)(_e,{})]})},e.tab.id)})};let ze,Ve,Je=e=>e;const Xe=U().div(ze||(ze=Je`
  --tab-item-min-width: ${0}px;

  width: 100%;
  overflow-x: auto;
  display: flex;
  min-height: var(--wp-tabs-header-height);
  border-bottom: 1px solid var(--border-color-default);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`),90),qe=U().div(Ve||(Ve=Je`
  flex: 0;
  border-bottom: 1px solid var(--border-color-default);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 var(--spacing-xs);
  gap: var(--spacing-xs);
`)),Be=()=>{const{tabs:e}=p(),[t,a]=(0,n.useState)({open:!1}),{workspaceId:r}=(0,o.useParams)(),i=L(),s=(0,n.useCallback)((()=>{if(!r)return;const e=(0,g.v4)();i(`/workspace/${r}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[r,i]),c=(0,n.useCallback)(((e,t)=>{t.preventDefault(),a({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,n.useCallback)((()=>a({open:!1})),[]),u=(0,n.useCallback)((t=>e.map((e=>(0,l.jsx)(Fe,{width:t,tab:e,onContextMenu:t=>c(e.id,t)},e.id)))),[e,c]);return(0,l.jsxs)(Xe,{children:[(0,l.jsx)(fe,{minWidth:90,maxWidth:172,tabsCount:e.length,renderTabs:u,rightActions:(0,l.jsx)(_.Z,{type:"tertiary",icon:(0,l.jsx)(W.Z,{}),onClick:s})}),(0,l.jsx)(q,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:s}),(0,l.jsx)(qe,{children:(0,l.jsx)(se,{})})]})};var Ye=a(2833),Ge=a.n(Ye);let He;const Qe=U().div(He||(He=(e=>e)`
  display: ${0};
  height: var(--wp-workbench-height);
`),(({$isHidden:e})=>e?"none":"block")),Ke=e=>{const t=!m();return x(),(0,l.jsx)(Qe,{className:Ge()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},et=({tab:e})=>{const{tabsMeta:t}=p(),a=j(e),r=k(e),i=(0,n.useMemo)((()=>{var i,n,s,o;return{tabId:e.id,pathname:e.pathname,isDirty:null==(i=t[e.id])?void 0:i.isDirty,isConflicted:null==(n=t[e.id])?void 0:n.isConflicted,title:(null==(s=t[e.id])?void 0:s.title)||"",tabType:(null==(o=t[e.id])?void 0:o.tabType)||"http",setTabTitle:r,setTabState:a}}),[e.id,e.pathname,t,r,a]);return(0,l.jsx)(v.Provider,{value:i,children:(0,l.jsx)(Ke,{children:e.element},e.pathname)})},tt=({fallback:e})=>{const{tabs:t}=p();return(0,n.useMemo)((()=>(0,l.jsxs)(l.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,l.jsx)(et,{tab:e},e.pathname)))]})),[t,e])},at=({children:e})=>(w(),f(),(0,l.jsxs)(l.Fragment,{children:[e," "]})),rt="tab-close-confirmation-modal",it=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,nt=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],st="tab-force-close-confirmation-modal",ot=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,lt=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],ct=(e,t)=>{var a;return null==(a=t[e])?void 0:a.isDirty},dt=async(e,t)=>{const a=await e.showWarningDialog({uid:rt,subject:"DO YOU WANT TO SAVE?",message:it(t),options:nt});return!a||"Cancel"!==a.title},ut=({fallback:e})=>{const t=L(),a=(0,o.useMatches)(),r=P.Modals.getModals(),[i,s]=(0,n.useState)(null),[c,d]=(0,n.useState)([]),[u,p]=(0,n.useState)({}),[v,h]=(0,n.useState)([]),m=(0,n.useCallback)((e=>{var a;s(e.id),t((null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname)}),[t,u]),x=(0,n.useCallback)((e=>{e&&h((t=>{var a,r,i;return[...t,{id:e.id,pathname:(null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname,title:null==(r=u[e.id])?void 0:r.title,tabType:null==(i=u[e.id])?void 0:i.tabType}]}))}),[u]),f=(0,n.useCallback)((e=>h((t=>[...t].splice(e,1)))),[]),g=(0,n.useCallback)((e=>{const a=v[e];t(a.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),f(e)}),[f,t,v]),T=(0,n.useCallback)((async(e,n=!1)=>{var s;const o=c.findIndex((t=>t.id===e));if(-1===o)return;const l=c[o],b=ct(l.id,u);if(!n&&b&&!await dt(r,null==(s=u[e])?void 0:s.title))return;if(l.id===i){const e=((e,t)=>{const a=t-1;return e[t+1]||e[a]})(c,o);if(e)m(e);else{const e=a.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const p=c.filter((t=>t.id!==e));d(p),x(l)}),[t,m,c,a,u,r,i,x]),y=(0,n.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>ct(e.id,u))).length;if(e&&!await(async(e,t)=>{const a=await e.showWarningDialog({uid:st,subject:"Confirm force close",message:ot(t),options:lt});return!a||"Cancel"!==a.title})(r,e))return;for(const e of c)x(e);d([]);const i=a.at(-2);return(null==i?void 0:i.pathname)&&t(i.pathname)}const i=[];for(const e of c){var n;ct(e.id,u)&&!await dt(r,null==(n=u[e.id])?void 0:n.title)||(x(e),i.push(e.id))}d((e=>e.filter((e=>!i.includes(e.id)))))}),[c,r,a,t,u,x]),C=(0,n.useCallback)((async(e=i)=>{const t=[];for(const i of c){var a;i.id!==e&&(ct(i.id,u)&&!await dt(r,null==(a=u[i.id])?void 0:a.title)||t.push(i.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[i,c,r,u]),w=(0,n.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:u,setTabsMeta:p,recentlyClosed:v,closeTab:T,closeAllTabs:y,activeTab:i,setActiveTab:s,closeAllNonSelectedTabs:C,openFromRecentlyClosed:g})),[c,u,v,T,i,s,y,C,g]);return(0,l.jsx)(b.Provider,{value:w,children:(0,l.jsxs)(at,{children:[(0,l.jsx)(P.Modals.Ui.ModalDialog,{uid:rt}),(0,l.jsx)(P.Modals.Ui.ModalDialog,{uid:st}),(0,l.jsx)(Be,{}),(0,l.jsx)(tt,{fallback:e})]})})};var bt,pt=a(7291);const vt=null==(bt=window)||null==(bt=bt.location)?void 0:bt.pathname,ht=(localStorage.getItem("lastVisitedRoute"),()=>{let e="/";try{var t;e=JSON.parse(null==(t=window)?void 0:t.NAVIGATION_CONTEXT).to}catch(e){console.error("Failed to parse NAVIGATION_CONTEXT")}return e}),mt=(e,t)=>{const a=[{opts:{initialEntries:[ht()],initialIndex:0},router:(0,pt.sentryRouter)(o.createMemoryRouter)},(0,pt.sentryRouter)(window.HOST_APP_NAME?o.createBrowserRouter:o.createMemoryRouter),(0,pt.sentryRouter)(o.createMemoryRouter)][0];return{platformRouterConfig:a,router:a.router(e,(0,i.Z)({},a.opts,t))}}}}]);
//# sourceMappingURL=488.f6be5f204a594203.js.map