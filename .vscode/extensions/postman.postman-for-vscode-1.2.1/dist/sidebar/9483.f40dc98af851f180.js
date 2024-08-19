"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[9483],{29483:(e,t,o)=>{o.d(t,{Z:()=>$t});var r=o(24818),a=o.n(r),n=o(69356),i=o.n(n),s=o(40540),l=o(59530),c=o.n(l),d=o(98283),u=o(22833),p=o.n(u),v=o(7560),b=o(52322);const m=["children","onClick","size"];let h;const g=c().button(h||(h=(e=>e)`
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  outline: none;
  padding: ${0};
`),(({size:e})=>"default"===e?"0":"padding: var(--spacing-s, calc(24px / 2));"));function x(e){let{children:t,onClick:o,size:r="default"}=e,a=(0,d.Z)(e,m);return(0,b.jsx)(g,(0,v.Z)({onClick:o,size:r},a,{children:t}))}const w=(0,s.createContext)({activeSidebar:null,navCollapsed:!1,setActiveSidebar:()=>{}}),f=()=>{const e=(0,s.useContext)(w);if(!e)throw new Error("useSidebarContext should be used within a SidebarContext.Provider");return e},k=({value:e,children:t})=>(0,b.jsx)(w.Provider,{value:e,children:t}),y=["showVerticalSidebarOnSingleConfig"];let S,C,E,j=e=>e;const I=c().ul(S||(S=j`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: ${0};
  width: ${0};

  ${0}
`),(({collapsed:e})=>e?"0":"var(--spacing-xs, 4px) 0"),(({collapsed:e})=>e?"40px":"max-content"),(({collapsed:e})=>!e&&"\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs, 4px);\n    border-right: 1px solid var(--border-color-default, #ededed);\n    background: var(--background-color-secondary);\n\n    font-size: var(--text-size-xs, 10px);\n    line-height: var(--text-size-xl, 16px);\n    text-align: center;\n  ")),_=c().li(C||(C=j`
  position: relative;
  box-sizing: border-box;
  width: ${0};
  height: ${0};

  &:hover,
  &:focus {
    background: var(--highlight-background-color-tertiary, rgb(0 0 0 / 5%));
  }

  ${0}
`),(({collapsed:e})=>e?"40px":"80px"),(({collapsed:e})=>e?"40px":"52px"),(({collapsed:e})=>!e&&"\n    margin: 0 var(--spacing-xs, 4px);\n    border-radius: var(--border-radius-default, 4px);\n\n    &.active {\n      background: var(--highlight-background-color-tertiary, rgba(0, 0, 0, 0.05));\n      box-shadow: var(--base-color-brand);\n      color: var(--content-color-primary);\n\n      &:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 2px;\n        background: var(--base-color-brand, #f37a00);\n        border-radius: 0 var(--border-radius-s, 8px) var(--border-radius-s, 8px) 0;\n        top: var(--spacing-xs, 4px);\n        bottom: var(--spacing-xs, 4px);\n      }\n    }\n  ")),T=c().h3(E||(E=j`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  font-size: 1em;
  margin: 0;
  font-weight: normal;
  color: var(--content-color-primary);
`));function N(e){let{showVerticalSidebarOnSingleConfig:t=!0}=e,o=(0,d.Z)(e,y);const{navCollapsed:r}=f(),a=o.collapsed||r;return 1!==o.items.length||t?(0,b.jsx)(I,{role:"tablist",collapsed:o.collapsed,children:o.items.map((e=>(0,b.jsx)(_,{role:"tab",collapsed:a,className:p()({active:e.id===o.activeItemId}),"aria-label":e.title,"aria-selected":e.id===o.activeItemId,"aria-expanded":!o.collapsed,children:(0,b.jsxs)(x,{onClick:()=>o.onClick&&o.onClick(e.id),size:a?"sm":"default",children:[e.icon,!a&&(0,b.jsx)(T,{children:e.title})]})},e.id)))}):null}function A(e){const{activeSidebar:t,collapsed:o,setActiveSidebar:r}=f();return(0,b.jsx)(N,{collapsed:o,items:e.menus,showVerticalSidebarOnSingleConfig:e.showVerticalSidebarOnSingleConfig,activeItemId:t,onClick:r})}var R=o(58560),Z=o(80429),O=o(35736),W=o(39245),P=o(60398),L=o(60607),z=o(88691),V=o(22922),$=o(44306),D=o(29706);const M="http",B="ws-raw",U="grpc",q=M;var H=o(20856);let F;const Y=c()(H.ZP)(F||(F=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-secondary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-secondary);
  }
`));var Q=o(56880),K=o(10099);let X,G,J,ee=e=>e;const te={[M]:"/request/create",[B]:"/ws-raw-request/create",[U]:"/grpc-request/create"},oe=c()(L.Link)(X||(X=ee`
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
`)),re=c().div(G||(G=ee`
  margin-left: var(--spacing-s);
`)),ae={[M]:{label:"HTTP",Icon:V.Z,iconColor:"content-color-success"},[B]:{label:"WebSocket",Icon:$.Z,iconColor:"content-color-brand"},[U]:{label:"gRPC",Icon:D.Z,iconColor:"content-color-info"}},ne=c()(z.Z)(J||(J=ee`
  --secondary-btn-width: var(--spacing-xxl);
  --splitter-width: 1px;

  height: var(--controls-size-default);
  width: 100%;
  background-color: var(--button-primary-background-color);
  color: var(--button-primary-content-color);
  cursor: pointer;

  > button {
    background-color: inherit;
    padding: 0 var(--spacing-s);

    > span {
      color: var(--button-primary-content-color);
    }

    :hover {
      background-color: var(--button-primary-hover-background-color);
    }

    &:active,
    &.is-active {
      background-color: var(--button-primary-active-background-color);
    }
  }

  .aether-split-button__primary-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: calc(100% - var(--secondary-btn-width) - var(--splitter-width));

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .aether-split-button__secondary-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: var(--secondary-btn-width);
  }

  .aether-split-button__splitter {
    border-left-color: var(--vscode-button-separator);
    width: var(--splitter-width);
  }

  &:hover {
    .aether-split-button__splitter {
      border-left-color: var(--vscode-button-separator);
    }
  }
`)),ie=()=>{const e=(0,K.useActiveWorkspaceId)(),t=localStorage.getItem(`activeProtocol:${window.USER_ID}`),[o,r]=(0,s.useState)(!1),[a,n]=(0,s.useState)(t||q),i=(0,W.useNavigate)(),l=t=>{i(`/workspace/${e}${te[t]}?requestId=${(0,P.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),Q.AnalyticsService.addEventV2({category:t,action:"open-tab",label:"new-request",value:1})},c=ae[a].iconColor,d=(0,s.useRef)();return(0,b.jsx)(ne,{type:"primary",text:`New ${ae[a].label} Request`,onClick:()=>l(a),secondaryButton:(0,b.jsx)(Z.Z,{type:"primary",color:c,onClick:()=>r((e=>!e)),ref:d}),children:(0,b.jsx)(Y,{isOpen:o,onClickOutside:()=>r(!1),triggerRef:d,children:Object.keys(ae).map((e=>{const{label:t,Icon:o}=ae[e];return(0,b.jsxs)(oe,{to:"",onClick:()=>{var t;t=e,r(!1),n(t),l(t),localStorage.setItem(`activeProtocol:${window.USER_ID}`,t)},children:[(0,b.jsx)(o,{color:ae[e].iconColor}),(0,b.jsx)(re,{children:t})]},e)}))})})};var se=o(81397);let le,ce,de,ue,pe=e=>e;const ve=c().div(le||(le=pe`
  width: 100%;
  display: flex;
`)),be=c().div(ce||(ce=pe`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);
  border: 0 var(--border-style-solid) transparent;
  overflow: hidden;
  background-color: var(--highlight-background-color-primary);
`)),me=c().button(de||(de=pe`
  display: flex;
  flex: 1;
  flex-flow: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: var(--spacing-zero);
  border-bottom: none;
  cursor: pointer;
  height: var(--controls-size-default);

  &.active {
    border-radius: var(--border-radius-default);
    background: var(--background-color-primary);
    border: none;
    box-shadow: var(--border-color-default) 0 0 0 1px inset;
  }
`)),he=c().div(ue||(ue=pe`
  padding: var(--spacing-s);
`)),ge=({elements:e})=>{const{activeSidebar:t,setActiveSidebar:o}=f();return(0,b.jsx)(ve,{children:(0,b.jsx)(be,{children:null==e?void 0:e.map((e=>{const r=e.id===t;return(0,b.jsx)(se.Z,{content:e.title,placement:"bottom",children:(0,b.jsx)(me,{onClick:()=>o(e.id),"aria-label":e.title+" Tab",className:r?"active":"",children:(0,b.jsx)(he,{children:e.icon})})})}))})})};var xe=o(9460),we=o(35482),fe=o(21180);const ke=({children:e})=>(0,b.jsx)(fe.CustomErrorBoundary,{appId:"sidebar",errorElementId:"workspace-switcher",fallback:(0,b.jsxs)(R.Z,{gap:"spacing-s",height:"var(--size-m)",alignItems:"center",children:[(0,b.jsx)(we.Z,{color:"content-color-error"}),(0,b.jsx)(xe.ZP,{color:"content-color-error",type:"para",children:"Failed to load workspaces"})]}),children:e});var ye=o(80809);const Se="workspace-label-paint-time",Ce="workspace-label-paint-mark";var Ee=o(89155);const je=()=>{const e=(0,W.useNavigate)(),t=(0,K.useActiveWorkspaceId)();return(0,b.jsx)(Z.Z,{onClick:()=>{t&&e(`/workspace/${t}/invite`)},type:"tertiary",icon:(0,b.jsx)(Ee.Z,{}),tooltip:(0,b.jsx)(se.Z,{content:"Invite to workspace",openDelay:600})})};var Ie=o(1590);let _e,Te,Ne,Ae,Re,Ze,Oe=e=>e;const{PerformanceMarkPaint:We}=ye.perfComponents,Pe=()=>{performance.measure(Se,{},Ce),(0,ye.sendMeasureEvent)({name:Se})},Le=(0,s.lazy)((0,Ie.loadRemoteModule)("workspace-switcher/WorkspaceSwitcher")),ze=(0,s.lazy)((0,Ie.loadRemoteModule)("workspace-switcher/ActiveWorkspace")),Ve=c()(ze)(_e||(_e=Oe`
  flex: 1;
  padding: 0 !important;
  margin-left: 4px;

  :hover {
    color: var(--base-color-info);
    background: transparent !important;

    path {
      fill: var(--base-color-info);
    }
  }
`)),$e=c().header(Te||(Te=Oe`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--background-color-secondary);

  &.bottom-border {
    /* TODO: Validate if we need default color */
    border-bottom: var(--border-width-default, 1px)
      var(--border-style-solid, solid)
      var(--border-color-default, --var(--grey-20));
  }
`)),De=c()(R.Z)(Ne||(Ne=Oe`
  /* To make sure workspace switcher takes up remaining space */
  & > :first-child {
    flex-grow: 1;
  }
`)),Me=c().div(Ae||(Ae=Oe`
  padding: var(--spacing-s);
  align-self: stretch;
`)),Be=c()(R.Z)(Re||(Re=Oe`
  width: 100%;
  margin: var(--spacing-s) 0;
  gap: var(--spacing-s);
  padding: 0 var(--spacing-xs);

  @media (width >= 220px) {
    padding: 0 var(--spacing-s);
  }
`)),Ue=c()(Z.Z)(Ze||(Ze=Oe`
  font-weight: var(--text-weight-medium);
`));function qe({showActions:e=!0,showNewRequestButton:t,showSidebarHeaderTabs:o,showWorkspaceSwitcherConfig:r=!0,elements:a=[],showInviteButton:n=!1,isSidebarBlocked:i}){const l=(0,W.useNavigate)(),c=(0,K.useActiveWorkspaceId)(),d=(0,s.useCallback)((()=>{}),[]),[u,p]=(0,s.useState)(!1),v=(0,s.useCallback)((()=>{if(!c)return;const e=(0,P.v4)();l(`/workspace/${c}/request/create?requestId=${e}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",newTab:!0})}),[c,l]);return(0,b.jsxs)($e,{className:o?"":"bottom-border",children:[r&&(0,b.jsxs)(Be,{direction:"column",children:[(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(O.Z,{}),children:(0,b.jsx)(ke,{children:(0,b.jsx)(We,{markName:Ce,callback:Pe,children:(0,b.jsxs)(De,{gap:"spacing-xs",direction:"row",justifyContent:"space-between",children:[(0,b.jsx)(Le,{isOpen:u,setIsOpen:p}),n&&(0,b.jsx)(je,{})]})})})}),t&&(0,b.jsx)(ie,{})]}),e&&(0,b.jsx)(Me,{children:(0,b.jsxs)(R.Z,{gap:"spacing-xs",alignItems:"center",children:[!r&&(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(O.Z,{}),children:(0,b.jsx)(ke,{children:(0,b.jsx)(Ve,{})})}),(0,b.jsx)(Ue,{type:"secondary",size:"small",text:"New",onClick:v,disabled:!1,tooltip:!1}),(0,b.jsx)(Ue,{type:"secondary",size:"small",text:"Import",onClick:d,disabled:!1,tooltip:"You don't have permission to take this action."})]})}),o&&(null==a?void 0:a.length)>0&&!i&&(0,b.jsx)(ge,{elements:a})]})}var He=o(56259),Fe=o(20678),Ye=o(20455),Qe=o(31777),Ke=o(59754),Xe=o(21592),Ge=o(30623);const Je=(0,s.lazy)((0,Ie.loadRemoteModule)("history-sidebar/HistorySidebar")),et=()=>(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(O.Z,{}),children:(0,b.jsx)(Je,{})});var tt=o(49437),ot=o(80047),rt=o(53186);const at=(0,s.lazy)((0,Ie.loadRemoteModule)("collection-sidebar/CollectionSidebar")),nt=()=>{const e=(0,K.useActiveWorkspaceId)();return rt.ENABLE_COLLECTIONS?(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(O.Z,{}),children:(0,b.jsx)(at,{activeWorkspaceId:e})}):(0,b.jsx)(tt.Z,{title:"Collections coming soon",description:"Work with collections in your workspace, right in VS Code!",children:(0,b.jsx)(ot.Z,{name:"illustration-no-collection"})})};var it=o(98276);const st=(0,s.lazy)((0,Ie.loadRemoteModule)("environment-sidebar/EnvironmentSidebar")),lt=()=>(0,it.useEnvironmentFeatureFlag)()?(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(O.Z,{}),children:(0,b.jsx)(st,{})}):(0,b.jsx)(tt.Z,{title:"Environments coming soon",description:"Work with environments in your workspace, right in VS Code!",children:(0,b.jsx)(ot.Z,{name:"illustration-no-environment"})}),ct=(He.Z,Fe.Z,Ye.Z,Qe.Z,Ke.Z,Xe.Z,Ge.Z,{position:"horizontal",activeElement:"collection",collapsed:!1,navCollapsed:!0,showVerticalSidebarOnSingleConfig:!1,showActions:!1,showInviteButton:!0,showWorkspaceSwitcher:!0,showNewRequestButton:!0,showSidebarHeaderTabs:!0,fullWidthWorkspaceSwitcher:!0,checkTrialStatus:!0,elements:[{id:"collection",title:"Collections",position:1,icon:(0,b.jsx)(He.Z,{color:"content-color-primary"}),element:(0,b.jsx)(nt,{})},{id:"environment",title:"Environments",position:2,icon:(0,b.jsx)(Ye.Z,{color:"content-color-primary"}),element:(0,b.jsx)(lt,{})},{id:"history",title:"History",position:3,icon:(0,b.jsx)(Ge.Z,{color:"content-color-primary"}),element:(0,b.jsx)(et,{})}]});Ge.Z,He.Z,Ye.Z;var dt=o(19578),ut=o(21466);var pt=o(96538),vt=o(26246),bt=o(96364);var mt=o(97201);var ht=o(16669),gt=o(13101),xt=o(26663),wt=o.n(xt);let ft,kt,yt,St=e=>e;const Ct=c().div(ft||(ft=St`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-xl);
  height: 70%;
`)),Et=c().div(kt||(kt=St`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-s);
`)),jt=c().div(yt||(yt=St`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  align-items: center;
  justify-content: center;
`)),It=()=>{var e,t;const{data:o}=(0,ht.useTeamsByUserId)({overrideQueryParams:{billing:!0}}),r=(0,gt.getUserId)(),a=null==o||null==(e=o.organizations[0])?void 0:e.team_size,n=null==o||null==(t=o.organizations[0])?void 0:t.team_users.find((e=>e.id===r)),i="admin"===(null==n?void 0:n.role),s=null==n?void 0:n.roles.includes("billing"),l=((e=1)=>{const t=`${wt().ARTEMIS_URL}/purchase`,o=new URLSearchParams;let r="app_web";return r="vscode",o.append("quantity",`${e}`),o.append("utm_source","postman"),o.append("utm_medium","vscode"),o.append("utm_term","upgrade"),o.append("utm_content","trial-plan-admin"),`${t}?${o.toString()}`})(a);return(0,b.jsxs)(Ct,{"data-testid":"trial-ended-blocking-state-container",children:[(0,b.jsx)(ot.Z,{name:"illustration-no-history"}),(0,b.jsxs)(jt,{children:[(0,b.jsx)(xe.ZP,{typographyStyle:{fontSize:"text-size-xl",fontWeight:"text-weight-bold",lineHeight:"line-height-m"},children:"Your trial has ended"}),(0,b.jsx)(xe.ZP,{type:"para",children:"Upgrade your plan to keep the collaboration going. If you wish to return to 'Free' plan with 3 member limit, simply adjust your member count. Until then, everyone can work in their personal workspace."})]}),(0,b.jsxs)(Et,{children:[s&&(0,b.jsx)(W.Link,{to:l,children:(0,b.jsx)(Z.Z,{type:"primary",text:"Upgrade Plan","data-testid":"upgrade-plan-button"})}),i&&(0,b.jsx)(W.Link,{to:`${wt().ARTEMIS_URL}/settings/team/members`,children:(0,b.jsx)(Z.Z,{type:"outline",text:"Manage Team","data-testid":"manage-team-button"})})]})]})};var _t=o(41264),Tt=o(88749);let Nt,At,Rt,Zt=e=>e;const Ot=(0,s.lazy)((()=>o.e(7122).then(o.bind(o,97122)))),Wt=(0,s.lazy)((()=>o.e(3890).then(o.bind(o,83890)))),Pt=c().nav(Nt||(Nt=Zt`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`)),Lt=c().div(At||(At=Zt`
  flex: 1 1 100%;
  display: flex;
  height: 100%;
`)),zt=c().div(Rt||(Rt=Zt`
  contain: strict;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: var(--background-color-secondary);
  box-shadow: inset -1px 0 0 var(--background-color-secondary);
  box-sizing: border-box;
  z-index: 20;
`)),Vt=a()((e=>e),i()),$t=()=>{const e=(0,K.useActiveWorkspaceId)(),t=ct,[o,r]=(0,s.useState)(t.activeElement),[a,n]=(0,s.useState)(t.collapsed),{isLoading:i,loadingMessage:l}=(()=>{const[e,t]=(0,s.useState)(!1),[o,r]=(0,s.useState)("");return(0,s.useEffect)((()=>{{const e=ut.VSCodeCommunicationsService.subscribe("BROADCAST_SIDEBAR",(e=>{var o;"SIDEBAR:LOADING"===e.messageType?(t(!0),r((null==(o=e.data)?void 0:o.loadingMessage)||"")):"SIDEBAR:RESET_LOADING"===e.messageType&&(t(!1),r(""))}));return()=>{e&&e()}}}),[]),{isLoading:e,loadingMessage:o}})(),c=t.checkTrialStatus,{trialExpired:d,workspaceVisibility:u,exceededTeamLimit:p}=(()=>{var e;const t=(0,gt.getTeamId)(),{data:o,refetch:r}=(0,Tt.useTrialBootstrap)(),{data:a,refetch:n}=(0,ht.useTeamsByUserId)({overrideQueryParams:{billing:!0}}),{data:i}=(0,K.useActiveWorkspaceInfo)();(0,_t.useNotificationSubscription)((0,P.v4)(),(e=>{var t;"trialStatusChanged"===(null==(t=e.data.variables)||null==(t=t.$primary)?void 0:t.action)&&(r(),n())})),(0,ht.useTeamSubscription)(t,(0,P.v4)(),(e=>{switch(e.meta.action){case"add_member":case"fetch_team_data":r(),n()}}));const s=(null==o?void 0:o.hasTakenTrial)&&!1===(null==o?void 0:o.isActive)&&!1===(null==o?void 0:o.meta.plan_info.paid_plan),l=null==i?void 0:i.visibilityStatus,c=(null==a||null==(e=a.organizations)||null==(e=e[0])?void 0:e.team_users.length)>=4;var d;return o&&a&&(s?ut.VSCodeCommunicationsService.postMessageToExtension({type:"TRIAL_STATUS_CHANGED",payload:{status:"EXPIRED",teamSize:null==a||null==(d=a.organizations)?void 0:d[0].team_size,exceededTeamLimit:c,showNotification:!c,workspaceVisibility:l,notificationContent:{title:"Your trial has ended",message:"Your team is back on the 'Free' plan. Upgrade your plan to continue collaborating on APIs with all your team members."}}}):ut.VSCodeCommunicationsService.postMessageToExtension({type:"TRIAL_STATUS_CHANGED",payload:{status:"RENEWED",showNotification:!1}})),{trialExpired:s,exceededTeamLimit:c,workspaceVisibility:l}})(),v=c&&d&&p&&!("personal"===u),m=t.showNewRequestButton&&!v;(0,s.useEffect)((()=>{{const e=ut.VSCodeCommunicationsService.subscribe("SET_ACTIVE_ELEMENT",(e=>{r(e.activeElement||"collection")}));return()=>{e&&e()}}}),[]);const h=(0,s.useCallback)((e=>{r(e),n(!e),e&&Q.AnalyticsService.addEventV2({category:"sidebar",action:"navigate",label:e,value:1})}),[]);(()=>{const e=(0,W.useNavigate)();(0,s.useEffect)((()=>{const t=ut.VSCodeCommunicationsService.subscribe("ACTIVE_TAB_CHANGED",(t=>t.route&&e(t.route,{},{customNavEvent:"","customNavEvent-updateURL":!0})));return()=>t&&t()}),[e])})(),(0,dt.usePreventContextMenu)(),(0,pt.f)(),(()=>{const e=(0,K.useActiveWorkspaceId)(),{data:t}=(0,rt.useCollectionList)({workspaceId:e}),{data:o}=(0,it.useEnvironmentItems)({workspaceId:e}),r=(()=>{const e=(0,K.useActiveWorkspaceId)(),t=(0,rt.useCreateNewCollection)(),o=(0,rt.useWorkspacePermissions)(e),r=(0,W.useNavigate)(),{addToast:a}=(0,bt.ZP)();return async(n,i)=>{if(!o.userCanCreate)return void a({status:"error",description:"You do not have permission to import a collection."});let s=!1;const l=i?i.map((e=>(e.name===n.name&&(s=!0),e.name))):[];if(s){const e=vt.Modals.getModals(),t=await e.showWarningDialog({uid:"collection-import-duplicate-warning",subject:"",message:`A collection ${n.name} already exists. What would you like to do?`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Import as Copy",isPrimary:!0}]});if(!t||"Import as Copy"!==t.title)return;n.name=(0,it.getDuplicateEntityName)(l,n.name)}t.mutate({workspaceId:e,requestBody:n},{onSuccess:({data:t})=>{Q.AnalyticsService.addEventV2({category:"http-collection",action:"create",label:"import",value:1}),r(`/workspace/${e}/collection/${t.owner}-${t.id}`,{},{customNavEvent:W.OPEN_EXTENSION_URL})},onError:()=>{a({status:"error",description:"Could not import collection. Please try again."})}})}})(),{importEnvironment:a,isPermissionsLoading:n}=(()=>{const e=(0,K.useActiveWorkspaceId)(),t=(0,it.useCreateNewEnvironment)(),{data:o,isLoading:r}=(0,mt.useDataFetch)((0,it.getEnvironmentSidebarPermissionsQuery)(e)),a=(0,W.useNavigate)(),{addToast:n}=(0,bt.ZP)();return{importEnvironment:async(r,i)=>{if(null==o||!o.userCanCreateEnvironment)return void n({status:"error",description:"You do not have permission to import an environment."});let s=!1;const l=i?i.map((e=>(e.name===r.name&&(s=!0),e.name))):[];if(s){const e=vt.Modals.getModals(),t=await e.showWarningDialog({uid:"env-import-duplicate-warning",subject:"",message:`An environment ${r.name} already exists. What would you like to do?`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Import as Copy",isPrimary:!0}]});if(!t||"Import as Copy"!==t.title)return;r.name=(0,it.getDuplicateEntityName)(l,r.name)}t.mutate({workspaceId:e,requestBody:r},{onSuccess:({data:t})=>{Q.AnalyticsService.addEventV2({category:"environment",action:"create",label:"import"}),a(`/workspace/${e}/environment/${t.owner}-${t.id}`,{},{customNavEvent:W.OPEN_EXTENSION_URL})},onError:()=>{n({status:"error",description:"Could not import environment. Please try again."})}})},isPermissionsLoading:r}})();(0,s.useEffect)((()=>{if(t){const e=ut.VSCodeCommunicationsService.subscribe("IMPORT_COLLECTION",(e=>{e&&r(e,t)}));return()=>{e&&e()}}return()=>null}),[t]),(0,s.useEffect)((()=>{if(o&&!n){const e=ut.VSCodeCommunicationsService.subscribe("IMPORT_ENV",(e=>{e&&a(e,o)}));return()=>{e&&e()}}return()=>null}),[o,n])})(),(()=>{const e=(0,K.useNavigateToWorkspace)();(0,s.useEffect)((()=>{let t;return t=ut.VSCodeCommunicationsService.subscribe("UPDATE_WORKSPACE",(t=>{t.workspaceId&&e(t.workspaceId)})),()=>t&&t()}),[e])})();const g=t.elements.find((e=>e.id===o));let x=null;return e?g&&(x=g.element||(0,b.jsx)(Wt,{title:g.title})):x=(0,b.jsx)(Ot,{}),(0,s.useEffect)((()=>{Q.AnalyticsService.addEventV2({category:"sidebar",action:"open",label:"initial-load",value:1})}),[]),i?(0,b.jsx)(R.Z,{direction:"column",gap:"spacing-l",alignItems:"center",height:"100%",children:(0,b.jsx)(O.Z,{size:"large",description:l})}):(0,b.jsx)(k,{value:Vt({collapsed:a,activeSidebar:o,navCollapsed:t.navCollapsed,setActiveSidebar:h}),children:(0,b.jsxs)(Pt,{children:[!a&&(0,b.jsx)(qe,{showActions:t.showActions,showNewRequestButton:m,showSidebarHeaderTabs:t.showSidebarHeaderTabs,showInviteButton:t.showInviteButton,elements:t.elements,showWorkspaceSwitcherConfig:t.showWorkspaceSwitcher,fullWidthWorkspaceSwitcher:t.fullWidthWorkspaceSwitcher,isSidebarBlocked:v}),v?(0,b.jsx)(It,{}):(0,b.jsxs)(Lt,{role:"presentation",children:[!t.navCollapsed&&(0,b.jsx)(A,{menus:t.elements,showVerticalSidebarOnSingleConfig:t.showVerticalSidebarOnSingleConfig}),!a&&(0,b.jsx)(zt,{children:(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(b.Fragment,{children:" "}),children:x})})]})]})})}},96538:(e,t,o)=>{o.d(t,{f:()=>d});var r=o(40540),a=o(10099);const n=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:t=e.workspaceId,subscriptionHandler:o}){if(""===t)return;if(e.workspaceId!==t&&e.changeWorkspace(t),e.observer||e.asyncObserver)return;const{asyncObserver:r,abortController:n}=(0,a.subscribeToWorkspaceEvents)(t);e.abortController=n,e.asyncObserver=r,e.observer=await r,e.abortController=null,e.observer.subscribe({next:e=>{o(e,{workspaceId:t})},complete:()=>{e.unsubscribe()},error:async function(r){e.cleanup(),await e.subscribe({subscriptionHandler:o,workspaceId:t})}})},this.unsubscribe=()=>{var e,t;null==(e=this.abortController)||e.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var i=o(98276),s=o(97201),l=o(19832);const c=e=>{const t=null==e?void 0:e.meta.model;if("workspace"===t&&"update_roles"===e.meta.action&&((0,s.invalidateCache)(["workspace","collection-permissions",e.data.id]),(0,s.invalidateCache)([i.WORKSPACE_QUERY_KEY_PREFIX,i.ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX,e.data.id]),(0,s.invalidateCache)([a.WORKSPACE_ROLES_QUERY_KEY,e.data.id])),"collectionrun"===t)switch(e.meta.action){case"create":(0,s.invalidateCache)([l.COLLECTION_RUNS_LIST_PREFIX,e.ids.workspace]);break;case"destroy":(0,l.removeCollectionRunFromListCache)(e.data.id,e.ids.workspace)}},d=()=>{const e=(0,a.useActiveWorkspaceId)();(0,r.useEffect)((()=>{if(e)return n.subscribe({workspaceId:e,subscriptionHandler:c}),()=>{n.unsubscribe()}}),[e])}}}]);
//# sourceMappingURL=9483.f40dc98af851f180.js.map