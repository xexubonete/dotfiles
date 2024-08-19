"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[5801],{4415:(e,r,t)=>{t.r(r);var s=t(540),a=t(1730),i=t(607),o=t(5736),n=t(5627),c=t(2322);const l=()=>{const[e,r]=(0,s.useState)(!1);return(0,c.jsx)(n.Z,{isOpen:e,setIsOpen:r})};var p=t(1180),d=t(9245);const h=[{path:"/",element:(0,c.jsx)(l,{}),errorElement:(0,c.jsx)(p.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"index-route"})},{path:"/workspace/:workspaceId/*",element:(0,c.jsx)(l,{}),errorElement:(0,c.jsx)(p.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"workspace-page-route"})}],{router:w}=(0,d.createPlatformRouter)(h);function u(){return(0,c.jsx)(i.RouterProvider,{router:w,fallbackElement:(0,c.jsx)(o.Z,{})})}var v=t(8422);const x=document.querySelector("#workspace-switcher_root");a.render((0,c.jsx)(v.PostmanBootstrap,{appId:"workspace-switcher",errorElementId:"global-error-boundary",children:(0,c.jsx)(u,{})}),x)},1075:(e,r,t)=>{t.d(r,{ZP:()=>Z}),t(540);var s=t(9460),a=t(8560),i=t(9245),o=t(1437),n=t(9342),c=t(634),l=t(346),p=t(6285),d=t(2385),h=t(9530),w=t.n(h),u=t(2322);let v,x,g,m=e=>e;const k=w()(s.ZP)(v||(v=m`
  width: 70%;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (width >= 320px) {
    margin-left: var(--spacing-s);
  }

  &.header-item {
    font-weight: var(--text-weight-medium);
  }
`)),j=w()(i.Link)(x||(x=m`
  display: flex;
  width: 100%;
  padding: var(--spacing-zero) var(--spacing-s);
  height: var(--size-m);
  align-items: center;
  cursor: pointer;
  gap: var(--spacing-s);
  color: var(--content-color-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }

  @media (width >= 320px) {
    padding: var(--spacing-zero) var(--spacing-l);
  }

  &.header-item {
    color: var(--content-color-primary);
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);

    svg path {
      fill: rgb(33 33 33);
    }
  }
`)),f=w()(a.Z)(g||(g=m`
  height: var(--size-xs);
  width: var(--size-xs);
  justify-content: center;

  @media (width >= 320px) {
    margin-right: var(--spacing-s);
  }
`)),b=({visibilityStatus:e})=>{switch(e){case"team":return(0,u.jsx)(o.Z,{});case"public":return(0,u.jsx)(n.Z,{});case"partner":return(0,u.jsx)(c.Z,{});case"private":return(0,u.jsx)(l.Z,{});default:return(0,u.jsx)(p.Z,{})}},y=({isActive:e})=>(0,u.jsx)(f,{children:e?(0,u.jsx)(d.Z,{"data-testid":"checked-workspace-icon"}):""}),Z=({workspace:e,onClick:r,isActive:t,style:s})=>(0,u.jsxs)(j,{to:`/workspace/${e.id}`,onClick:t=>{r&&(t.preventDefault(),r(e))},style:s,className:t?"active":"","data-testid":t?"active-workspace":"",children:[(0,u.jsx)(y,{isActive:t}),(0,u.jsx)(b,{visibilityStatus:e.visibilityStatus}),(0,u.jsx)(k,{children:e.name||e.label})]})}}]);
//# sourceMappingURL=5801.655b15fecc84e83e.js.map