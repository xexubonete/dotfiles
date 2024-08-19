"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[2018],{59363:(e,t,r)=>{r.d(t,{D:()=>o,F:()=>n});const o={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15,UNAUTHENTICATED:16},n={[o.OK]:{tooltip:"is a standard response for successfully invoking a gRPC method.",summary:"Call completed",codeName:"OK"},[o.CANCELLED]:{tooltip:"is returned if the operation is cancelled by the caller.",summary:"Operation cancelled",description:"You have cancelled the execution of the method.",codeName:"CANCELLED"},[o.UNKNOWN]:{tooltip:"is returned if the operation couldn’t be completed because of an unknown error.\n               For example, this error may be returned when a Status value received from another\n               address space belongs to an error space that is not known in this address space.\n               Also errors raised by APIs that do not return enough error information may be converted to this error.",summary:"Unknown error",description:"Operation couldn’t be completed because of an unknown error.",codeName:"UNKNOWN"},[o.INVALID_ARGUMENT]:{tooltip:"is returned if the client has specified an invalid argument. This stands for arguments that are\n                problematic regardless of the state of the system (e.g. a malformed file name).",summary:"Invalid argument",description:"You have specified an invalid argument. Check the message and invoke the method again.",codeName:"INVALID_ARGUMENT",exampleDescription:"You have specified an invalid argument."},[o.DEADLINE_EXCEEDED]:{tooltip:"is returned if the deadline expires before the operation could be completed. For operations that change\n                the state of the system, this error may be returned even if the operation has completed successfully.\n                For example, a successful response from a server could have been delayed long.",summary:"Operation timed out",description:"Operation timed out before it could be completed.",codeName:"DEADLINE_EXCEEDED"},[o.NOT_FOUND]:{tooltip:"is returned if a requested entity (e.g., file or directory) was not found.",summary:"Could not find the entity",description:"Couldn’t find the resources you were looking for. Check the message and invoke the method again.",codeName:"NOT_FOUND",exampleDescription:"Couldn’t find the resources you were looking for."},[o.ALREADY_EXISTS]:{tooltip:"is returned if the entity you attempted to create (e.g., file or directory) already exists.",summary:"Entity already exists",description:"The entity you are trying to create already exists. Make sure you are using the correct configuration\n                    and message payload to invoke the method.",codeName:"ALREADY_EXISTS",exampleDescription:"The entity you are trying to create already exists."},[o.PERMISSION_DENIED]:{tooltip:"is returned if the caller does not have permission to execute the specified operation.\n                This error code does not imply the request is valid or the requested entity exists or satisfies other pre-conditions.",summary:"Access denied",description:"You do not have permission to execute the specified operation. Make sure you have the authentication\n                and certificates configured (if required) and try invoking the method again.",codeName:"PERMISSION_DENIED",exampleDescription:"You do not have permission to execute the specified operation."},[o.RESOURCE_EXHAUSTED]:{tooltip:"is returned if a per-user quota, or perhaps the entire file system is out of space.",summary:"Resource exhausted",description:"The operation you’re trying to perform has exceeded the allowed space.",codeName:"RESOURCE_EXHAUSTED"},[o.FAILED_PRECONDITION]:{tooltip:"is returned if the operation was rejected because of the system not being in the required state for the\n                operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is\n                applied to a non-directory, etc.",summary:"Failed precondition",description:"Make sure you’re using the correct configuration to invoke the method.",codeName:"FAILED_PRECONDITION",exampleDescription:"Configuration of the request doesn’t match the server requirements."},[o.ABORTED]:{tooltip:"is returned if the operation was aborted, typically due to a concurrency issue such as a sequencer check\n                failure or transaction abort.",summary:"Operation aborted",description:"The server has aborted the operation because of an error.",codeName:"ABORTED"},[o.OUT_OF_RANGE]:{tooltip:"is returned if the operation was attempted past the valid range. For example, seeking or reading past end-of-file.",summary:"Operation out of range",description:"The operation attempted is past the valid range.",codeName:"OUT_OF_RANGE"},[o.UNIMPLEMENTED]:{tooltip:"is returned if the operation is not implemented or is not supported/enabled in this service.",summary:"Operation unavailable",description:"The operation you’re trying perform is not supported by the server.",codeName:"UNIMPLEMENTED"},[o.INTERNAL]:{tooltip:"is returned if there’s an internal error. This means that some invariants expected by the underlying system have been broken.",summary:"Internal error",description:"Operation couldn’t be completed because of an internal error at the server.",codeName:"INTERNAL"},[o.UNAVAILABLE]:{tooltip:"is returned if the service is currently unavailable.",summary:"Service unavailable",description:"The service is currently unavailable. Make sure you are using the correct URL and have TLS enabled (if required).",codeName:"UNAVAILABLE",exampleDescription:"The service is currently unavailable."},[o.DATA_LOSS]:{tooltip:"is returned if there is an irrecoverable data loss or corruption.",summary:"Irrecoverable data loss",description:"There was an irrecoverable data loss while performing this operation.",codeName:"DATA_LOSS"},[o.UNAUTHENTICATED]:{tooltip:"is returned if the request does not have valid authentication credentials for the operation.",summary:"Could not authorize the operation",description:"Make sure you have the authentication and certificates configured (if required) and try invoking the method again.",codeName:"UNAUTHENTICATED",exampleDescription:"Authorization settings do not match the server requirements."}}},72018:(e,t,r)=>{r.d(t,{Z:()=>Nc});var o=r(7560),n=r(40540),s=r.n(n),a=r(59530),i=r.n(a),l=r(58560),c=r(49437),d=r(80047),p=r(96364),u=r(19578),h=r(63622),g=r(50297),m=r(75301);const x=()=>{const e=(0,m.Z)();return[e.url,e.setURL]};var v=r(39245),f=r(60398),y=r(60607),b=r(80605),j=r(22922),Z=r(44306),w=r(29706),S=r(20856);let k;const C=i()(S.ZP)(k||(k=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-primary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-primary);
  }
`)),E="http",R="ws-raw",P="grpc";var D=r(56880),I=r(52322);let T,N,O,L,A,M=e=>e;const q=i().div(T||(T=M`
  height: 24px;
  width: 24px;
  box-sizing: border-box;
`)),z=i()(b.Z)(N||(N=M`
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
`),(e=>e.theme[e.color])),$=i().div(O||(O=M`
  padding-left: var(--spacing-s);
  padding-top: var(--spacing-xs);
`)),F=i()(v.Link)(L||(L=M`
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
`)),_=i().div(A||(A=M`
  margin-left: var(--spacing-s);
`)),U={[E]:{label:"HTTP",Icon:j.Z,iconColor:"content-color-success"},[R]:{label:"WebSocket",Icon:Z.Z,iconColor:"content-color-brand"},[P]:{label:"gRPC",Icon:w.Z,iconColor:"content-color-info"}},W={[E]:"/request/create",[R]:"/ws-raw-request/create",[P]:"/grpc-request/create"},V=()=>{const e=(0,y.useParams)(),[t]=(0,v.useSearchParams)(),r=(0,y.useMatch)("/workspace/:workspaceId/:protocol/create"),[o,n]=s().useState(!1),a=t.get("requestId")||(0,f.v4)();if(!r)return(0,I.jsx)($,{children:(0,I.jsx)(w.Z,{color:"content-color-info","data-testid":"aether-icon-gRPC"})});const i=(0,I.jsx)(z,{type:"secondary",icon:(0,I.jsx)(w.Z,{"data-testid":"aether-icon-gRPC"}),color:"content-color-info",onClick:()=>n((e=>!e)),"data-testid":"protocol-switcher"});return(0,I.jsx)(q,{children:(0,I.jsx)(C,{trigger:i,isOpen:o,onClickOutside:()=>n(!1),children:Object.keys(U).map((t=>{const{label:r,Icon:o}=U[t];return(0,I.jsxs)(F,{to:`/workspace/${e.workspaceId}${W[t]}?requestId=${a}`,sameTab:!0,onClick:()=>{D.AnalyticsService.addEventV2({category:"request",action:"switch-protocol",label:t}),n(!1)},children:[(0,I.jsx)(o,{color:U[t].iconColor}),(0,I.jsx)(_,{children:r})]},t)}))})})};let H;const B=i().div(H||(H=(e=>e)`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: var(--spacing-s) var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),G=(0,g.observer)((()=>{const[e]=x(),t=(0,n.useMemo)((()=>e||"Untitled gRPC Request"),[e]),{setTabTitle:r}=(0,v.useTabTitleMeta)();return(0,n.useEffect)((()=>{r(t,"grpc")}),[t]),(0,I.jsxs)(l.Z,{direction:"row",alignItems:"center",gap:"spacing-s",children:[(0,I.jsx)(V,{}),(0,I.jsx)(h.ZP,{color:"content-color-primary",type:"strong",children:t})]})})),J=()=>(0,I.jsx)(B,{children:(0,I.jsx)(G,{})});var K=r(80346),X=r(99419),Y=r(74962);const Q=()=>{const e=(0,m.Z)();return[e.payload.settings.secureConnection,e.setSecured]},ee=({popoverTriggerRef:e,isPopoverOpen:t,showPopover:r,hidePopover:o})=>{const[n]=Q();return(0,I.jsx)(S.ZP,{maxWidth:300,padding:"spacing-zero",isOpen:t,placement:"bottom-start",triggerRef:e,children:(0,I.jsx)("div",{onMouseEnter:r,onMouseLeave:o,children:(0,I.jsx)(l.Z,{direction:"column",gap:"spacing-l",alignItems:"flex-start",padding:"spacing-l",children:(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-s",children:[(0,I.jsx)(Y.Z,{type:"h3",text:n?"Disable TLS":"Enable TLS"}),(0,I.jsxs)(h.ZP,{type:"para",color:"content-color-secondary",children:[(0,I.jsx)(h.ZP,{type:"strong",children:`Currently using ${n?"a secured":"an unsecured"} connection.`}),(0,I.jsx)("br",{}),(0,I.jsx)(h.ZP,{type:"body-medium",children:n?" Disable TLS to invoke the method over an unsecured connection.":" Enable TLS to invoke the method over a secured connection."})]})]})})})})},te=()=>{var e,t;const r=(0,m.Z)();return{error:r.proto.error,source:r.proto.source,services:null==(e=r.proto.data)?void 0:e.services,isFetching:r.proto.isFetching,fetchingSource:r.proto.fetchingSource,proto:null==(t=r.proto)?void 0:t.data}},re=()=>(0,m.Z)().response.initialized,oe=()=>(0,m.Z)().response.status,ne=()=>(0,m.Z)().request.invoking,se=()=>(0,m.Z)().cancelRequest,ae=()=>(0,m.Z)().events||[],ie=()=>(0,m.Z)().response.metadata,le=()=>{var e;return(null==(e=(0,m.Z)().response.status)?void 0:e.metadata)||[]};let ce,de,pe,ue=e=>e;const he=i()(l.Z)(ce||(ce=ue`
  flex: 1 1 0px;
  height: 40px;
  padding: var(--spacing-xs);
  border-top-left-radius: var(--spacing-xs);
  border-bottom-left-radius: var(--spacing-xs);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: none;

  &:focus-within {
    box-shadow: 0 0 0 2px var(--base-color-info);
    border-right: none;
    border: var(--border-width-default) var(--border-style-solid)
      var(--base-color-info);
    z-index: 1;
  }
`)),ge=i()(b.Z)(de||(de=ue`
  background: var(--background-color-primary);

  svg path {
    fill: var(--content-color-secondary);
  }

  &:hover {
    svg path {
      fill: var(--content-color-primary);
    }
  }
`)),me=i().input(pe||(pe=ue`
  background: var(--background-color-primary);
  color: var(--content-color-primary);
  font-size: var(--text-size-m);
  border-radius: 0;
  border: none;
  outline: none;
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  width: 100%;

  &::placeholder {
    color: var(--content-color-tertiary);
  }

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`)),xe=(0,g.observer)((()=>{const[e,t]=Q(),r=ne(),o=(0,n.useRef)(),[s,a]=x();(()=>{const[e]=x(),[t]=Q(),{services:r,isFetching:o,source:s}=te(),a=!!r&&"cache"!==s,i=(0,m.Z)();(0,n.useEffect)((()=>{if(a||o||!e)return()=>null;const t=setTimeout((()=>{i.loadProto("reflection")}),500);return()=>{t&&clearTimeout(t)}}),[e,i]),(0,n.useEffect)((()=>{!a&&e&&i.loadProto("reflection")}),[t,i])})();const i=r,l=(0,n.useRef)(),[c,d]=(0,n.useState)(!1),p=()=>{clearTimeout(l.current),i||(l.current=setTimeout((()=>d(!0)),500))},u=()=>{clearTimeout(l.current),l.current=setTimeout((()=>d(!1)),100)};return(0,I.jsxs)(he,{children:[(0,I.jsxs)("div",{"aria-label":e?"Secure Connection":"Unsecure Connection",children:[(0,I.jsx)(ge,{icon:e?(0,I.jsx)(K.Z,{}):(0,I.jsx)(X.Z,{}),onClick:()=>t(!e),type:"button",ref:o,onMouseEnter:p,onMouseLeave:u,isDisabled:i}),(0,I.jsx)(ee,{popoverTriggerRef:o,showPopover:p,hidePopover:u,isPopoverOpen:c})]}),(0,I.jsx)(me,{value:s,onChange:e=>{a(e.target.value)},placeholder:"Enter Server URL",disabled:i})]})}));var ve=r(81397),fe=r(31776),ye=r(10789),be=r(1314),je=r.n(be),Ze=r(37110),we=r(54073);const Se=r.n(we)()((async function(e,t,{offset:r,search:o,shouldReset:n},s,a){try{const a=await e({offset:r,search:""===o?void 0:o,shouldReset:n});t.current=!a,s&&s()}catch(e){a&&a(e)}}),1e3);var ke=r(92490),Ce=r(35736),Ee=r(56415),Re=r(9922);let Pe,De,Ie,Te,Ne=e=>e;function Oe(e){return(0,I.jsx)(ke.c.DropdownIndicator,(0,o.Z)({},e,{children:(0,I.jsx)(Ee.Z,{})}))}const Le=i()(b.Z)(Pe||(Pe=Ne`
  background-color: ${0};
`),(e=>e.theme["background-color-primary"]));function Ae(e){const{isFocused:t}=e;return(0,I.jsx)(I.Fragment,{children:t?(0,I.jsx)(ke.c.ClearIndicator,(0,o.Z)({},e,{children:(0,I.jsx)(Le,{type:"tertiary",size:"small",tooltip:"Clear",icon:(0,I.jsx)(Re.Z,{})})})):null})}const Me=i().div(De||(De=Ne`
  font-size: ${0};
  line-height: ${0};
  text-align: left;
  padding: ${0};
  color: ${0};
`),(e=>e.theme["text-size-m"]),(e=>e.theme["line-height-m"]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-m"]};`),(e=>e.theme["content-color-secondary"]));function qe(e){const{selectProps:{emptyStateMessage:t}}=e;return(0,I.jsx)(ke.c.NoOptionsMessage,(0,o.Z)({},e,{children:(0,I.jsx)(Me,{children:t})}))}function ze({width:e="auto"}){return(0,I.jsx)(l.Z,{padding:{paddingTop:"spacing-xxl",paddingBottom:"spacing-xxl"},justifyContent:"center",alignItems:"center",width:e,children:(0,I.jsx)(Ce.Z,{})})}const $e=i().div(Ie||(Ie=Ne`
  color: ${0};
`),(e=>e.theme["content-color-secondary"]));function Fe(e){const{children:t}=e;return(0,I.jsx)(ke.c.GroupHeading,(0,o.Z)({},e,{children:(0,I.jsx)($e,{children:t})}))}const _e=i().div(Te||(Te=Ne`
  background-color: ${0};
  box-shadow: ${0};
  padding-left: ${0};
  padding-right: ${0};
  border-radius: ${0};
`),(e=>e.theme["background-color-primary"]),(e=>e.theme["popover-box-shadow"]),(e=>e.theme["spacing-xs"]),(e=>e.theme["spacing-xs"]),(e=>e.theme["border-radius-default"]));function Ue(e){const{children:t}=e;return(0,I.jsx)(ke.c.Menu,(0,o.Z)({},e,{children:(0,I.jsx)(_e,{children:t})}))}var We=r(98283),Ve=r(52385);const He=s().createContext({offsetLoading:!1,searching:!1,offsetLoadingFailed:!1,searchingFailed:!1,isCreatingOption:!1,optionLength:0,retry:()=>null}),Be=He.Provider,Ge=["isSelected","isDisabled","isFocused","children"];let Je,Ke,Xe,Ye,Qe,et,tt,rt=e=>e;const ot=i().div(Je||(Je=rt`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${0};
  line-height: ${0};
  padding: ${0};
  border-radius: ${0};
  color: ${0};

  & > .aether-dropdown__selected-option {
    margin-right: ${0};

    svg path {
      fill: ${0};
    }
  }

  ${0}

  ${0}
`),(e=>e.theme["text-size-m"]),(e=>e.theme["line-height-m"]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-s"]};`),(e=>e.theme["border-radius-default"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["spacing-s"]),(e=>e.theme["content-color-secondary"]),(e=>e.isFocused&&!e.isDisabled&&`background-color: ${e.theme["highlight-background-color-primary"]};`),(e=>e.isDisabled&&`\n      cursor: not-allowed;\n      color: ${e.theme["content-color-tertiary"]};\n    `)),nt=i().div(Ke||(Ke=rt`
  display: flex;
  flex-shrink: 0;
  margin-right: ${0};
  width: ${0};
  height: ${0};
`),(e=>e.theme["spacing-s"]),(e=>e.theme["size-xs"]),(e=>e.theme["size-xs"])),st=i().div(Xe||(Xe=rt`
  padding: 4px 8px;
`));function at(e){const{isSelected:t,isDisabled:r,isFocused:s,children:a}=e,i=(0,We.Z)(e,Ge),[l,c]=(0,n.useState)(!0);return(0,I.jsx)(ke.c.Option,(0,o.Z)({},i,{children:(0,I.jsxs)(ot,{onMouseEnter:()=>c(!1),onMouseLeave:()=>c(!0),isDisabled:r,isFocused:s&&!l,children:[t?(0,I.jsx)(Ve.Z,{className:"aether-dropdown__selected-option"}):(0,I.jsx)(nt,{}),a]})}))}const it=i()(ke.c.MenuList)(Ye||(Ye=rt`
  & .aether-dropdown__group:not(:last-child) {
    margin-bottom: 12px;
  }

  & .aether-dropdown__group:first-child {
    padding-top: 4px;
  }
`));function lt(e){const{children:t,selectProps:{components:{Footer:r,Header:n}}}=e,{offsetLoading:a,searching:i,offsetLoadingFailed:c,searchingFailed:d,isCreatingOption:p,optionLength:u,retry:g}=s().useContext(He);return(0,I.jsxs)(l.Z,{direction:"column",children:[n&&(0,I.jsx)(n,{}),(0,I.jsx)(it,(0,o.Z)({},e,{children:(0,I.jsxs)("div",{children:[!(c&&0===u)&&!i&&!d&&!p&&t,(i||a||p)&&(0,I.jsx)(ze,{}),(c||d)&&(0,I.jsx)(st,{children:(0,I.jsxs)(l.Z,{justifyContent:"center",alignItems:"center",children:[(0,I.jsx)(h.ZP,{type:"para",children:"Failed to load options. "}),(0,I.jsx)(b.Z,{onClick:g,type:"monochrome-plain",text:"Retry"})]})})]})})),r&&(0,I.jsx)(ct,{children:(0,I.jsx)(r,{})})]})}const ct=i().div(Qe||(Qe=rt`
  flex-shrink: 0;
`));function dt(){return null}const pt=i().span(et||(et=rt`
  color: ${0};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`),(e=>e.theme["content-color-tertiary"])),ut=i()(ke.c.Input)(tt||(tt=rt`
  && {
    margin: 0;
    flex-grow: 0;
    flex-shrink: 0;
    display: inline-block;
    height: 32px;
    padding: 6px 0;
    ${0}
  }
`),(e=>e.value?`width: ${8*e.value.length}px !important`:"width: 2px !important"));function ht(e){const{selectProps:t,value:r,hasValue:n}=e,{placeholder:s,controlShouldRenderValue:a}=t;return n&&a?(0,I.jsx)(ut,(0,o.Z)({},e)):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ut,(0,o.Z)({},e)),!r&&(0,I.jsx)(pt,{children:s})]})}function gt(e){const{selectProps:t,hasValue:r,children:n}=e,{placeholder:s,isSearchable:a}=t;return r||a?(0,I.jsx)(ke.c.ValueContainer,(0,o.Z)({},e)):(0,I.jsxs)(ke.c.ValueContainer,(0,o.Z)({},e,{children:[(0,I.jsx)(pt,{children:s}),n]}))}function mt(e){const{data:t}=e;return(0,I.jsx)(ke.c.SingleValue,(0,o.Z)({},e,{children:t.label}))}let xt;const vt=(0,a.css)(xt||(xt=(e=>e)`
  & .aether-dropdown__control {
    border-color: var(--border-color-default) !important;
    background-color: ${0};
    ${0}

    & .aether-dropdown__value-container {
      color: ${0};
    }

    & .aether-dropdown__single-value {
      color: ${0};
    }

    & .aether-dropdown__dropdown-indicator {
      svg path {
        fill: ${0};
      }

      padding: ${0};
    }

    &--is-focused {
      outline: none;
      font-size: var(--text-size-m);
      border: ${0};
      box-shadow: ${0};

      &:hover {
        border: ${0};
      }
    }

    &--is-disabled {
      user-select: none;
      cursor: not-allowed;
      background: ${0};
      border: ${0};
      color: ${0};

      & .aether-dropdown__dropdown-indicator svg path {
        fill: ${0};
      }

      & .aether-dropdown__single-value {
        color: ${0};
      }

      &:hover {
        border-color: ${0};
      }
    }

    ${0}
  }

  & .aether-dropdown__input {
    caret-color: ${0};
    color: ${0} !important;
    opacity: 1 !important;
    height: 20px;

    &::placeholder {
      color: ${0};
    }
  }

  & .aether-dropdown__indicators {
    height: 100%;
  }
`),(e=>e.theme["background-color-primary"]),(e=>{const{triggerType:t,theme:r}=e;return"tertiary"===t?`\n          border: ${r["border-width-default"]} ${r["border-style-solid"]} transparent;\n\n          &:hover {\n            border: ${r["border-width-default"]} ${r["border-style-solid"]} transparent;\n          }\n\n          & .aether-dropdown__value-container {\n            padding-left: ${r["spacing-s"]};\n          }\n        `:`\n        border: ${r["border-width-default"]} ${r["border-style-solid"]} ${r["input-border-color-default"]};\n      `}),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-secondary"]),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]} ${e.theme["spacing-zero"]} ${e.theme["spacing-zero"]};`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["input-border-color-focus"]};`),(e=>`0 0 0 2px ${e.theme["input-shadow-focus"]};`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["input-border-color-focus"]};`),(e=>e.theme["input-background-color-disabled"]),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-strong"]};`),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["border-color-strong"]),(e=>{const{validationState:t,theme:r}=e;return t.status?`\n          border-color: ${r[`input-border-color-${t.status}`]};\n\n          &:hover {\n            border-color: ${r[`input-border-color-${t.status}`]};\n          }\n\n          &--is-focused,\n          &--is-focused:hover {\n            border-color: ${r["input-border-color-focus"]};;\n          }\n        `:""}),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-tertiary"]));let ft;const yt=i().div(ft||(ft=(e=>e)`
  ${0};
  flex-direction: column;
`),(e=>"auto"===e.triggerWidth?"display: inline-flex;":"display: flex;")),bt=s().forwardRef(((e,t)=>{const{children:r,triggerWidth:o}=e;return(0,I.jsx)(yt,{ref:t,triggerWidth:o,"data-aether-id":"aether-dropdown",children:r})}));bt.displayName="DropdownContainer";const jt=bt;let Zt;bt.propTypes={children:je().node.isRequired};const wt=i().div(Zt||(Zt=(e=>e)`
  margin-bottom: ${0};
`),(e=>e.theme["spacing-xs"]));function St(e,t){return"string"==typeof e?(0,I.jsx)(Ze.Z,{type:"primary",text:e,htmlFor:t}):e&&s().isValidElement(e)&&e.type===Ze.Z?s().cloneElement(e,{type:"primary",htmlFor:t}):null}function kt(e){const{label:t,helperText:r,id:o}=e;return(0,I.jsx)(I.Fragment,{children:t||r?(0,I.jsxs)(wt,{children:[St(t,o),r&&(0,I.jsx)(h.ZP,{type:"_input-meta-text",children:r})]}):null})}kt.defaultProps={label:"",helperText:"",id:""},kt.propTypes={label:e=>{const{label:t}=e;return t&&t.type!==Ze.Z&&"string"!=typeof t?new Error("DropdownLabel: label prop only accepts string or the Aether's Label component as valid value."):null},helperText:je().string,id:je().string};var Ct=r(47503),Et=r(37051),Rt=r(16913);let Pt,Dt,It=e=>e;function Tt(e){switch(e){case"error":return(0,I.jsx)(Ct.Z,{color:"content-color-error"});case"success":return(0,I.jsx)(Et.Z,{color:"content-color-success"});case"warning":return(0,I.jsx)(Rt.Z,{color:"content-color-warning"});default:return null}}const Nt=i().span(Pt||(Pt=It`
  display: inline-block;
  margin-right: ${0};
`),(e=>e.theme["spacing-xs"])),Ot=i().p(Dt||(Dt=It`
  display: flex;
  align-items: center;
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  margin: ${0};
`),(e=>e.theme["text-size-s"]),(e=>e.theme["line-height-s"]),(e=>e.theme[`content-color-${e.status}`]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-zero"]}; ${e.theme["spacing-zero"]} ${e.theme["spacing-zero"]};`));function Lt(e){const{validationState:t}=e;return(0,I.jsx)(I.Fragment,{children:t.status&&t.message&&(0,I.jsxs)(Ot,{status:t.status,children:[(0,I.jsx)(Nt,{children:Tt}),t.message]})})}Lt.defaultProps={validationState:{status:"",message:""}},Lt.propTypes={validationState:je().shape({status:je().oneOf(["","success","error","warning"]),message:je().string})};let At,Mt,qt=e=>e;const zt=i()(fe.ZP)(At||(At=qt`
  ${0}
`),vt),$t=i()(ye.Z)(Mt||(Mt=qt`
  ${0}
`),vt),Ft=(0,n.forwardRef)(((e,t)=>{const{allowCreateNewOption:r,asyncLoader:s,className:a,customOptionComponent:i,emptyStateMessage:l,helperText:c,id:d,isClearable:p,isDisabled:u,isLoading:h,isOptionDisabled:g,isOpen:m,isSearchable:x,label:v,menuMaxHeight:f,menuMaxWidth:y,menuMinWidth:b,menuPlacement:j,menuWidth:Z,onChange:w,onClose:S,onCreateNewOption:k,onOpen:C,onInputChange:E,filterOption:R,options:P,placeholder:D,triggerType:T,triggerWidth:N,triggerMaxWidth:O,validationState:L,value:A,viaPortal:M,controlShouldRenderValue:q,"aria-label":z,"aria-labelledby":$,"data-testid":F,"data-click":_,Footer:U,Header:W}=e,V=(0,n.useRef)(null),H=(0,n.useRef)(!1),B=(0,n.useRef)(P.length),[G,J]=(0,n.useState)(""),[K,X]=(0,n.useState)(""),[Y,Q]=(0,n.useState)(""),[ee,te]=(0,n.useState)({offsetLoading:!1,offsetLoadingFailed:!1,searching:!1,searchingFailed:!1,isCreatingOption:!1}),[re,oe]=(0,n.useState)(""),[ne,se]=(0,n.useState)();function ae(e,{action:t,option:r}){w(e,{action:t,option:r})}const ie=({offset:e,search:t,shouldReset:r},o,n)=>Se(s,H,{offset:e,search:t,shouldReset:r},o,n),le=()=>{!s||H.current||ee.offsetLoading||ee.offsetLoadingFailed||ee.searching||ee.searchingFailed||(te((e=>(0,o.Z)({},e,{offsetLoading:!0}))),ie({offset:B.current,search:re},(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1,offsetLoadingFailed:!0})))})),Se.flush())},ce=(e,t)=>{if(ee.isCreatingOption)return void oe("");const r=re;oe(e),E&&E(e),s&&(H.current=!1,"input-change"===t.action?(te((e=>(0,o.Z)({},e,{searching:!0,searchingFailed:!1,offsetLoadingFailed:!1}))),ie({offset:0,shouldReset:!0,search:e},(()=>{te((e=>(0,o.Z)({},e,{searching:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{searching:!1,searchingFailed:!0})))}))):"menu-close"===t.action&&r!==e&&(te((e=>(0,o.Z)({},e,{searching:!0,searchingFailed:!1,offsetLoadingFailed:!1}))),Se.cancel(),ie({offset:0,shouldReset:!0,search:e},(()=>{te((e=>(0,o.Z)({},e,{searching:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{searching:!1,searchingFailed:!0})))})),Se.flush()))};(0,n.useEffect)((()=>{"parent"===N&&V.current&&(V.current.offsetWidth?Q(V.current.offsetWidth):Q("auto"))}),[Y]),(0,n.useEffect)((()=>{J("number"==typeof N?N:"auto"===N?"fit-content":"full"===N?"100%":Y)}),[Y]),(0,n.useEffect)((()=>{X("number"==typeof Z?Z:"auto"===N||"full"===N?"100%":Y)}),[N,Y]),(0,n.useEffect)((()=>{s&&(te((e=>(0,o.Z)({},e,{offsetLoading:!0,offsetLoadingFailed:!1}))),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1,offsetLoadingFailed:!0})))})),Se.flush())}),[]),(0,n.useEffect)((()=>{B.current=P.length}),[P]);const de=!(ee&&(ee.offsetLoading||ee.offsetLoadingFailed));return(0,I.jsx)(Be,{value:(0,o.Z)({},ee,{retry:()=>{const{searchingFailed:e,offsetLoadingFailed:t}=ee;s&&(te((r=>(0,o.Z)({},r,{searching:!!e||r.searching,offsetLoading:!!t||r.offsetLoading,offsetLoadingFailed:!1,searchingFailed:!1}))),ie({offset:e?0:B.current,shouldReset:e,search:re},(()=>{te((r=>(0,o.Z)({},r,{offsetLoading:!t&&r.offsetLoading,searching:!e&&r.searching})))}),(()=>{te((r=>(0,o.Z)({},r,{offsetLoading:!t&&r.offsetLoading,searching:!e&&r.searching,offsetLoadingFailed:!!t||r.offsetLoadingFailed,searchingFailed:!!e||r.searchingFailed})))})),Se.flush())},optionLength:B.current}),children:(0,I.jsxs)(jt,{ref:V,triggerWidth:N,children:[(0,I.jsx)(kt,{id:d,label:v,helperText:c}),r?(0,I.jsx)($t,(0,o.Z)({inputId:d,inputValue:re,onInputChange:ce,onMenuScrollToBottom:le,menuIsOpen:m},M&&{menuPortalTarget:document.querySelector("#aether-dropdown-portal")},{onChange:A?ae:se,onCreateOption:k&&(async e=>{if(s&&k){te((e=>(0,o.Z)({},e,{isCreatingOption:!0})));try{const t=await k(e);A?w(t):se(t),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))})),Se.flush()}catch(e){console.error("Could not create new option"),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))})),Se.flush()}}}),onMenuClose:S,onMenuOpen:C,value:A||ne,options:P,placeholder:s&&ee.isCreatingOption?"Creating option":D,isClearable:p,isSearchable:x,isDisabled:u,"aria-label":z,"aria-labelledby":$},g&&{isOptionDisabled:g},{emptyStateMessage:de&&l,formatOptionLabel:i,validationState:L,classNamePrefix:"aether-dropdown",className:a,"data-testid":F,"data-click":_,maxMenuHeight:f,menuPlacement:j,filterOption:s?()=>!0:void 0,isValidNewOption:s?()=>0===B.current&&""!==re:void 0,triggerType:T,controlShouldRenderValue:q,styles:{clearIndicator:e=>(0,o.Z)({},e,{padding:0}),container:e=>(0,o.Z)({},e,{pointerEvents:"auto"}),control:e=>(0,o.Z)({},e,{width:G,maxWidth:O,boxSizing:"border-box",display:"flex",alignItems:"center",minHeight:0,height:"32px",transition:"border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"}),input:e=>(0,o.Z)({},e,{display:"flex"}),group:e=>(0,o.Z)({},e,{padding:0,margin:0}),groupHeading:e=>(0,o.Z)({},e,{userSelect:"none",fontSize:"11px",fontWeight:600,lineHeight:"16px",marginBottom:"4px",padding:"0px 12px",textTransform:"none"}),menu:e=>(0,o.Z)({},e,{width:K,minWidth:b,maxWidth:y,paddingLeft:"4px",paddingRight:"4px",border:"none",zIndex:1e3}),menuList:e=>(0,o.Z)({},e,{paddingTop:"8px",paddingBottom:"8px"}),menuPortal:e=>(0,o.Z)({},e,{zIndex:1e3}),noOptionsMessage:e=>(0,o.Z)({},e,{padding:0}),option:e=>(0,o.Z)({},e,{padding:0,":active":{backgroundColor:"transparent"}}),placeholder:e=>(0,o.Z)({},e,{position:"static",transform:"none",fontSize:"12px",lineHeight:"20px",left:"12px",right:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}),singleValue:e=>(0,o.Z)({},e,{maxWidth:"100%",position:"static",transform:"none",left:"12px",right:"24px"}),valueContainer:e=>(0,o.Z)({},e,{display:"flex",position:"static",height:"100%",flexWrap:"nowrap",padding:"0px 12px",paddingRight:"4px",fontSize:"12px"})},components:{ClearIndicator:Ae,DropdownIndicator:Oe,IndicatorSeparator:null,Input:ht,Menu:Ue,MenuList:h?ze:lt,NoOptionsMessage:qe,Option:at,Placeholder:dt,GroupHeading:Fe,SingleValue:mt,ValueContainer:gt,Footer:U,Header:W}})):(0,I.jsx)(zt,(0,o.Z)({ref:t,inputId:d,inputValue:re,onInputChange:ce,onMenuScrollToBottom:le,menuIsOpen:m},M&&{menuPortalTarget:document.querySelector("#aether-dropdown-portal"),closeMenuOnScroll:e=>e.target.contains(V.current)},{onChange:ae,onMenuClose:S,onMenuOpen:C,value:A,options:P,placeholder:D,isClearable:p,isSearchable:x,isDisabled:u,"aria-label":z,"aria-labelledby":$},g&&{isOptionDisabled:g},{emptyStateMessage:de&&l,formatOptionLabel:i,validationState:L,classNamePrefix:"aether-dropdown",className:a,maxMenuHeight:f,"data-testid":F,"data-click":_,menuPlacement:j,filterOption:s?()=>!0:R,triggerType:T,controlShouldRenderValue:q,styles:{clearIndicator:e=>(0,o.Z)({},e,{padding:0}),container:e=>(0,o.Z)({},e,{pointerEvents:"auto"}),control:e=>(0,o.Z)({},e,{width:G,maxWidth:O,boxSizing:"border-box",display:"flex",alignItems:"center",minHeight:0,height:"32px",transition:"border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"}),input:e=>(0,o.Z)({},e,{display:"flex"}),group:e=>(0,o.Z)({},e,{padding:0,margin:0}),groupHeading:e=>(0,o.Z)({},e,{userSelect:"none",fontSize:"11px",fontWeight:600,lineHeight:"16px",marginBottom:"4px",padding:"0px 12px",textTransform:"none"}),menu:e=>(0,o.Z)({},e,{width:K,minWidth:b,maxWidth:y,paddingLeft:"0px",paddingRight:"0px",border:"none",zIndex:1e3}),menuList:e=>(0,o.Z)({},e,{paddingTop:"8px",paddingBottom:"8px"}),menuPortal:e=>(0,o.Z)({},e,{zIndex:1e3}),noOptionsMessage:e=>(0,o.Z)({},e,{padding:0}),option:e=>(0,o.Z)({},e,{padding:0,":active":{backgroundColor:"transparent"}}),placeholder:e=>(0,o.Z)({},e,{position:"static",transform:"none",fontSize:"12px",lineHeight:"20px",left:"12px",right:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}),singleValue:e=>(0,o.Z)({},e,{maxWidth:"100%",position:"static",transform:"none",left:"12px",right:"24px"}),valueContainer:e=>(0,o.Z)({},e,{display:"flex",position:"static",height:"100%",flexWrap:"nowrap",padding:"0px 12px",paddingRight:"4px",fontSize:"12px"})},components:{ClearIndicator:Ae,DropdownIndicator:Oe,IndicatorSeparator:null,Input:ht,Menu:Ue,MenuList:h?ze:lt,NoOptionsMessage:qe,Option:at,Placeholder:dt,GroupHeading:Fe,SingleValue:mt,ValueContainer:gt,Footer:U,Header:W}})),(0,I.jsx)(Lt,{validationState:L})]})})}));Ft.defaultProps={isOpen:void 0,onClose:null,onCreateNewOption:void 0,onOpen:null,value:null,placeholder:"Select option",emptyStateMessage:"No options found",label:"",helperText:"",id:"","aria-label":void 0,"aria-labelledby":void 0,triggerWidth:"parent",triggerMaxWidth:null,triggerType:"outline",menuMaxHeight:"auto",menuMaxWidth:"auto",menuMinWidth:200,menuPlacement:"auto",menuWidth:"parent",className:"",isClearable:!0,isSearchable:!0,isDisabled:!1,isOptionDisabled:()=>null,allowCreateNewOption:!1,customOptionComponent:null,validationState:{status:"",message:""},"data-testid":"aether-dropdown","data-click":"",isLoading:!1,viaPortal:!1,asyncLoader:void 0,onInputChange:null,filterOption:void 0,Header:null,controlShouldRenderValue:!0},Ft.propTypes={asyncLoader:je().func,onChange:je().func.isRequired,options:je().arrayOf(je().shape({label:je().string,value:je().oneOfType([je().string,je().number])})).isRequired,value:je().object,isOpen:je().bool,onClose:je().func,onCreateNewOption:e=>{const{allowCreateNewOption:t,onCreateNewOption:r}=e;return!t&&r?new Error("Dropdown: onCreateNewOption is only allowed to be used when the prop allowCreateNewOption is passed as true."):r&&"function"!=typeof r?new Error("Dropdown: Expected the type of the onCreateNewOption to be a function."):null},onOpen:je().func,placeholder:je().string,emptyStateMessage:je().oneOfType([je().element,je().string]),label:e=>{const{label:t}=e;return t&&t.type!==Ze.Z&&"string"!=typeof t?new Error("Dropdown: label prop only accepts string or the Aether's Label component as valid value."):null},helperText:je().string,id:je().string,"aria-label":je().string,"aria-labelledby":je().string,triggerWidth:je().oneOfType([je().number,je().string]),triggerMaxWidth:je().oneOfType([je().number,je().string]),triggerType:je().oneOf(["outline","tertiary"]),menuMaxHeight:je().oneOfType([je().number,je().string]),menuMaxWidth:je().oneOfType([je().number,je().string]),menuMinWidth:je().oneOfType([je().number,je().string]),menuPlacement:je().oneOf(["bottom","top","auto"]),menuWidth:je().oneOfType([je().number,je().string]),className:je().string,isClearable:je().bool,isSearchable:je().bool,isDisabled:je().bool,isOptionDisabled:je().func,allowCreateNewOption:je().bool,customOptionComponent:je().func,validationState:je().shape({status:je().oneOf(["","success","error","warning"]),message:je().string}),"data-testid":je().string,"data-click":je().string,isLoading:je().bool,viaPortal:je().bool,onInputChange:je().func,filterOption:je().func,Header:je().elementType,controlShouldRenderValue:je().bool};const _t=Ft;var Ut=r(17815),Wt=r(21015),Vt=r(72800),Ht=r(15780);function Bt(e,t="There are errors in your composed message"){const r=s().useMemo((()=>e?e=>""===e||JSON.parse(e):()=>!0),[e]);return e=>{try{return r(e)}catch(e){}throw Object.assign(new Error(t),{isValidationError:!0})}}var Gt=r(47985),Jt=r(84419);const Kt=()=>{const e=(0,m.Z)();return[e.isRequestStreamed,e.setIsRequestStreamed]},Xt=()=>{const e=(0,m.Z)();return[e.isResponseStreamed,e.setIsResponseStreamed]};var Yt=r(81607);const Qt=()=>{const e=(0,m.Z)();return[e.activeRequestEditorTab,e.setRequestEditorTab]},er=()=>(0,m.Z)().cancelProtoLoading,tr=/[/\\]/g;function rr(e){var t,r;return null!=e&&null!=(t=e.files)&&null!=(t=t[0])&&t.filename?null!=(r=e.files[0].filename.split(tr).pop())?r:"":"unknown file"}let or,nr,sr,ar,ir,lr,cr=e=>e;const dr=i().div(or||(or=cr`
  margin-top: var(--spacing-s);
`)),pr=i()(b.Z)(nr||(nr=cr`
  white-space: nowrap;
`)),ur=i().div(sr||(sr=cr`
  padding-inline: var(--spacing-m);
  padding-block: var(--spacing-xs);
`)),hr=i().div(ar||(ar=cr`
  height: var(--border-width-default);
  width: 100%;
  background-color: var(--border-color-default);
`)),gr=i().div(ir||(ir=cr`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;
  min-width: var(--spacing-zero);
  height: var(--size-s);
`)),mr=i().div(lr||(lr=cr`
  width: 50%;
`)),xr=(0,g.observer)((({closeDropdown:e})=>{const[,t]=Qt(),{loadProto:r}=(0,m.Z)(),{isFetching:o,source:n,fetchingSource:s,proto:a}=te(),i=o&&"reflection"===s,c=er();let d=(0,I.jsx)(mr,{});return i?d=(0,I.jsx)(l.Z,{height:"var(--size-s)",alignItems:"center",children:(0,I.jsxs)(l.Z,{gap:"spacing-m",alignItems:"center",children:[(0,I.jsx)(Ce.Z,{}),(0,I.jsx)("div",{children:"Loading server reflection."}),(0,I.jsx)(b.Z,{type:"monochrome-plain",text:"Cancel",onClick:()=>{c("reflection")}})]})}):"reflection"===n&&a?d=(0,I.jsxs)(l.Z,{height:"var(--size-s)",alignItems:"center",children:["Using server reflection. ",(0,I.jsx)(b.Z,{icon:(0,I.jsx)(Yt.Z,{}),size:"small",type:"muted-plain","data-testid":"reload-server-reflection",onClick:()=>r("reflection")})]}):"url"!==n&&"file"!==n||!a?"cache"===n&&(d=(0,I.jsx)(gr,{children:"Using cache"})):d=(0,I.jsxs)(gr,{children:["Temporarily using ",(0,I.jsx)(h.ZP,{color:"content-color-secondary",isTruncated:!0,children:rr(a)})]}),(0,I.jsxs)(dr,{children:[(0,I.jsx)(hr,{}),(0,I.jsx)(ur,{children:(0,I.jsxs)(l.Z,{gap:"spacing-xs",alignItems:"center",justifyContent:"space-between",children:[d,(0,I.jsx)(pr,{type:"plain",onClick:()=>{t(3),e()},text:"Change Service Definition",justifySelf:"flex-end"})]})})]})}));var vr=r(94250);let fr,yr,br=e=>e;const jr=s().memo((({isDismissible:e,message:t,primaryAction:r,primaryActionText:o,secondaryAction:n,inline:s,secondaryActionText:a,errorInfo:i,clearError:c,onViewDetails:d})=>s?(0,I.jsxs)(wr,{onDismiss:e&&c,status:"error",type:"global",hideIcon:!0,primaryAction:o&&(0,I.jsx)(b.Z,{type:"outline",text:o,onClick:r}),children:[(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-primary",children:t})," ",d&&(0,I.jsx)(b.Z,{onClick:d,type:"monochrome-plain",text:"View error details"}),d&&a&&" · ",a&&(0,I.jsx)(b.Z,{type:"monochrome-plain",text:a,onClick:n})]}):(0,I.jsx)(vr.Z,{status:"error",onDismiss:e&&c,primaryAction:o&&(0,I.jsx)(b.Z,{type:"outline",text:o,onClick:r}),secondaryAction:a&&(0,I.jsx)(b.Z,{type:"monochrome-plain",text:a,onClick:n}),children:(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-xs",children:[(0,I.jsx)(h.ZP,{typographyStyle:{fontSize:"text-size-m"},children:t}),i&&(0,I.jsxs)(Zr,{typographyStyle:{fontFamily:"text-family-code",fontSize:"text-size-m"},children:[(0,I.jsx)(h.ZP,{typographyStyle:{fontWeight:"text-weight-medium"},children:"Details: "}),i]})]})}))),Zr=i()(h.ZP)(fr||(fr=br`
  word-break: break-word;
`)),wr=i()(vr.Z)(yr||(yr=br`
  width: 100%;
  margin: var(--spacing-s) var(--spacing-zero);
  border-radius: var(--spacing-xs);

  div {
    align-items: center;
  }
`)),Sr=jr,kr=(0,g.observer)((({inline:e,onViewDetails:t})=>{const r=(0,m.Z)(),o=(0,m.Z)().resetProtoError,{source:n,services:s,error:a,isFetching:i}=te(),l=!!s&&"cache"!==n;var c;return a&&!i&&"reflection"===n?(0,I.jsx)(Sr,{inline:e,onViewDetails:t,isDismissible:l,clearError:o,message:"Could not load server reflection.",errorInfo:null!=(c=null==a?void 0:a.message)?c:"An unknown error occurred",primaryAction:()=>{r.loadProto("reflection")},primaryActionText:"Try Again"}):null})),Cr=()=>{const{cache:e}=(0,m.Z)(),{error:t,source:r}=te(),o=t&&"reflection"===r,n="cache"===r,s=null==e?void 0:e.service;return o?(0,I.jsx)(l.Z,{padding:"spacing-m spacing-s spacing-xs",children:(0,I.jsx)(kr,{inline:!0})}):n&&s?(0,I.jsx)(l.Z,{padding:"spacing-m spacing-s spacing-xs",children:(0,I.jsx)(Sr,{inline:!0,message:"Selected method doesn’t exist in the service definition."})}):null};var Er=r(14257),Rr=r(24809);const Pr=()=>{const{apiEditor:e,setSelectedAPIEditorMode:t}=(0,m.Z)();return[e.selected,t]};let Dr,Ir,Tr,Nr,Or=e=>e;const Lr=i()(l.Z)(Dr||(Dr=Or`
  position: relative;
  flex-direction: column;
  background: var(--background-color-primary);
  color: var(--content-color-secondary);
`)),Ar=i().div(Ir||(Ir=Or`
  -webkit-box-align: stretch;
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: column;
  padding: var(--spacing-m) var(--spacing-l) var(--spacing-s);
  border-top: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  &.enabled:hover {
    background: var(--background-color-tertiary);
    cursor: pointer;
  }
`)),Mr=i()(Y.Z)(Tr||(Tr=Or`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
`)),qr=i()(h.ZP)(Nr||(Nr=Or`
  padding: var(--spacing-s) var(--spacing-l);
  padding-top: var(--spacing-zero);
`)),zr=(0,g.observer)((({closeDropdown:e})=>{const[t]=x(),{loadProto:r}=(0,m.Z)(),[,o]=Pr(),[,n]=Qt(),{isFetching:s,fetchingSource:a,services:i}=te(),l=s&&"reflection"===a,c=!l&&t,d=er();return i&&0===i.length?(0,I.jsx)(I.Fragment,{children:"No methods found"}):(0,I.jsxs)(Lr,{children:[(0,I.jsx)(qr,{type:"body-medium",color:"content-color-secondary",children:"Add a service definition to load the services and methods."}),(0,I.jsxs)(Ar,{onClick:()=>{e(),o("file"),n(3)},className:"enabled",children:[(0,I.jsx)(Mr,{color:"content-color-primary",type:"h5",text:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Er.Z,{}),"Import a .proto file"]})}),(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"Select a .proto file from your local system"})]}),(0,I.jsxs)(Ar,{onClick:c?()=>r("reflection"):void 0,className:c?"enabled":"",children:[(0,I.jsx)(Mr,{color:"content-color-primary",type:"h5",text:(0,I.jsxs)(I.Fragment,{children:[l?(0,I.jsx)(Ce.Z,{}):(0,I.jsx)(Rr.Z,{}),"Use Server Reflection"]})}),l?(0,I.jsxs)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:["Loading server reflection.",(0,I.jsx)(b.Z,{type:"monochrome-plain",text:"Cancel",onClick:()=>{d("reflection")}})]}):t?(0,I.jsx)(h.ZP,{color:"content-color-secondary",children:"Load methods using server reflection."}):(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"Enter server URL to load methods using server reflection."})]})]})}));let $r,Fr,_r,Ur=e=>e;const Wr=i().div($r||($r=Ur`
  flex: 2 1 0px;
`)),Vr=i()(_t)(Fr||(Fr=Ur`
  width: 100%;

  .aether-dropdown__control {
    flex: 0.7;
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: var(--border-width-default) var(--border-style-solid) transparent;
    border-left: 0;
    height: 40px;
    cursor: text;
    padding-left: 3px;

    &::before {
      content: '';
      background-color: var(--border-color-default);
      position: absolute;
      top: 25%;
      bottom: 25%;
      left: 0;
      width: var(--border-width-default);
    }

    &,
    &:hover,
    &:focus {
      border: var(--border-width-default) var(--border-style-solid)
        var(--border-color-strong);
      border-left: 0;
    }

    &:focus-within {
      padding-left: 2px;
      border-left: 1px solid var(--base-color-info);

      &::before {
        display: none;
      }
    }

    /* for consistent highlight colour */
    &--is-focused {
      border: 1px solid var(--base-color-info);
      box-shadow: var(--base-color-info) 0 0 0 2px;
    }

    &--is-disabled {
      background: var(--background-color-primary);
    }
  }
`)),Hr=(0,g.observer)((()=>{const e=ne(),t=(0,n.useRef)(null),{services:r,source:s}=te(),[a,i]=(()=>{const e=(0,m.Z)();return[e.payload.methodPath,e.setSelectedMethod]})(),[,l]=Kt(),[,c]=Xt(),d="cache"===s,p=(0,n.useMemo)((()=>{var e;return(null==(e=r)?void 0:e.map((e=>({label:e.name,options:e.methods.map((t=>({label:(0,I.jsx)(Br,{method:t}),value:`${e.name}.${t.name}`,service:e,method:t})))}))))||[]}),[r]),[u,h]=(0,n.useState)(!1),g=()=>{var e;h(!1),null==(e=t.current)||e.blur()},x=p.flatMap((e=>e.options)).find((e=>e.value===a));return(0,I.jsx)(Wr,{children:(0,I.jsx)(Vr,{options:p,ref:t,value:x&&(0,o.Z)({},x,{label:(0,I.jsx)(Jr,{serviceName:x.service.name,method:x.method,showErrorIcon:d})}),isDisabled:e,onChange:e=>{i(e.value),l(e.method.requestStream),c(e.method.responseStream)},Header:Cr,isClearable:!1,menuWidth:"parent",triggerType:"tertiary",triggerMaxWidth:"100%",menuMaxHeight:350,isOpen:u,onOpen:()=>h(!0),onClose:()=>h(!1),placeholder:u?"Search for a method":"Select a method",Footer:!!r&&!!p&&(()=>(0,I.jsx)(xr,{closeDropdown:g})),emptyStateMessage:(0,I.jsx)(zr,{closeDropdown:g})})})}));function Br({method:e}){return(0,I.jsxs)(l.Z,{isRow:!0,gap:"spacing-s",alignItems:"center",children:[(0,I.jsx)(Gr,{method:e}),(0,I.jsx)("span",{children:e.name})]})}function Gr({method:e}){return e.requestStream&&e.responseStream?(0,I.jsx)(Ut.Z,{color:"red-40",title:"Bidirectional streaming"}):e.requestStream?(0,I.jsx)(Wt.Z,{color:"green-30",title:"Client streaming"}):e.responseStream?(0,I.jsx)(Vt.Z,{color:"yellow-30",title:"Server streaming"}):(0,I.jsx)(Ht.Z,{color:"blue-40",title:"Unary"})}function Jr({method:e,serviceName:t,showErrorIcon:r}){const o=t.split(".").slice(-1)[0];return(0,I.jsxs)(l.Z,{isRow:!0,gap:"spacing-s",alignItems:"center",children:[(0,I.jsx)(Gr,{method:e}),(0,I.jsxs)("span",{children:[(0,I.jsxs)(h.ZP,{color:"content-color-secondary",children:[o," / "]}),(0,I.jsx)(h.ZP,{children:e.name})]}),r&&(0,I.jsx)(ve.Z,{content:"Couldn’t load this method from the service definition.",placement:"bottom",closeDelay:300,children:(0,I.jsx)(Kr,{color:"content-color-error"})})]})}const Kr=i()(Ct.Z)(_r||(_r=Ur`
  cursor: default;

  /* Added to prevent error icon flicker when consumed in GRPCProtCombobox */
  margin-left: var(--spacing-zero) !important;
`)),Xr=(0,g.observer)((()=>(0,I.jsx)(Hr,{})));var Yr=r(80809);const Qr="request-send-button-paint-time",eo="grpc-message-code-editor-paint-time",to="request-send-button-paint-mark",ro="grpc-message-code-editor-paint-mark";let oo,no,so=e=>e;const{PerformanceMarkPaint:ao}=Yr.perfComponents,io=i()(b.Z)(oo||(oo=so`
  height: 40px;
  flex-basis: 100px;
  margin-left: var(--spacing-s);
  background-color: var(--base-color-info);
  font-size: var(--text-size-l);
  font-weight: var(--text-weight-medium);
  color: var(--content-color-constant);

  &:hover,
  &.is-hovered {
    background-color: var(--highlight-background-color-info);
  }

  &:disabled,
  &.is-cancel-button {
    opacity: 0.5;
    background-color: var(--base-color-info);
    color: var(--content-color-constant);
  }

  &:active,
  &.is-active {
    background-color: var(--highlight-background-color-info);
  }
`)),lo=i()(b.Z)(no||(no=so`
  height: fit-content;
  height: 40px;
  flex-basis: 100px;
  margin-left: var(--spacing-s);
  font-size: var(--text-size-l);
  font-weight: var(--text-weight-medium);
`)),co=()=>{const e=ne(),t=se(),r=(()=>{const{historyId:e}=(0,y.useParams)();return e?"history-request":"new-request"})();return(0,I.jsx)(ao,{markName:to,callback:()=>{return e=r,performance.measure(Qr,{},to),void(0,Yr.sendMeasureEvent)({name:Qr,label:e,entityType:"grpc-workbench"});var e},children:e?(0,I.jsx)(lo,{type:"secondary",text:"Cancel",onClick:()=>{t()}}):(0,I.jsx)(io,{type:"primary",text:"Invoke"})})},po=()=>{const e=(0,m.Z)();return[e.request.error,e.setRequestError]},uo=(0,g.observer)((()=>{const e=ne(),t=se(),r=(()=>{const[,e]=po(),{sendRequest:t}=(0,m.Z)(),r=(0,Gt.Z)(),[o]=(0,Jt.Z)(),[n]=Kt(),s=Bt(r);return()=>{if(n)t();else try{s(o),e(null),t()}catch(t){e(t)}}})();return(0,n.useEffect)((()=>{const t=t=>{e||(t.metaKey||t.ctrlKey)&&"Enter"===t.key&&r()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}),[e,r]),(0,I.jsx)("form",{onSubmit:e?e=>{e.preventDefault(),t()}:e=>{e.preventDefault(),r()},children:(0,I.jsxs)(l.Z,{padding:"spacing-s",children:[(0,I.jsx)(xe,{}),(0,I.jsx)(Xr,{}),(0,I.jsx)(co,{})]})})})),ho=()=>(0,I.jsx)(u.PaneHeader,{defaultLayout:"horizontal",horizontalComponent:null,verticalComponent:(0,I.jsx)(u.PaneLabel,{layout:"vertical",label:"Request Editor",arrowDirection:"right"})});var go=r(15761),mo=r(27366),xo=r(71132),vo=r(27162),fo=r(5246);let yo;const bo=i()(l.Z)(yo||(yo=(e=>e)`
  overflow: hidden;
`));function jo({featureName:e}){return(0,I.jsx)(bo,{direction:"column",height:"100%",justifyContent:"center",alignItems:"center",children:(0,I.jsx)(c.Z,{title:"Coming Soon",description:`Support for ${e} is coming soon`,children:(0,I.jsx)(d.Z,{name:"illustration-no-custom-domain"})})})}var Zo=r(78476),wo=r(43294),So=r(1590);let ko,Co,Eo,Ro,Po=e=>e;const{PerfContext:Do}=Yr.perfComponents,Io=()=>{performance.measure(eo,{},ro),(0,Yr.sendMeasureEvent)({name:eo})},To=(0,n.lazy)((()=>r.e(7605).then(r.bind(r,37605)))),No=(0,n.lazy)((0,So.loadRemoteModule)("code-editor/CodeEditor")),Oo=i().div(ko||(ko=Po`
  height: 100%;
  overflow: hidden;

  .text-editor {
    padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);
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
`)),Lo=i()(b.Z)(Co||(Co=Po`
  &:not(:disabled) {
    background-color: var(--base-color-info);
    color: var(--content-color-constant);

    &:hover,
    &.is-hovered {
      background-color: var(--button-primary-hover-background-color);
    }

    &:active,
    &.is-active {
      background-color: var(--button-primary-active-background-color);
    }
  }
`)),Ao=i().div(Eo||(Eo=Po`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 var(--spacing-s);
  padding: var(--spacing-s) 0;
  margin: 0 var(--spacing-xl) 0 var(--spacing-s);
  border-top: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  min-height: calc(2 * var(--spacing-l));
`)),Mo=i().div(Ro||(Ro=Po`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
`)),qo=(0,g.observer)((function(){const e=(0,Gt.Z)(),[t,r]=(0,Jt.Z)(),[o]=Kt(),s=(0,n.useRef)(null),a=(0,m.Z)().endStreaming,i=(()=>{const e=(0,m.Z)(),t=(0,Gt.Z)(),[r]=(0,Jt.Z)(),o=Bt(t),{addToast:n}=(0,p.ZP)();return()=>{try{o(r),e.sendStreamingMessage()}catch(e){n({status:"error",description:e.message})}}})(),c=ne(),d=(0,n.useMemo)((()=>c&&o),[c,o]),u=(0,n.useMemo)((()=>({validate:!0,schemas:[{uri:(0,f.v4)(),schema:(0,Zo.toJS)(e)||{}}]})),[e]);return(0,I.jsxs)(l.Z,{direction:"column",height:"100%",children:[(0,I.jsx)(Oo,{children:(0,I.jsx)(n.Suspense,{fallback:(0,I.jsx)(Ce.Z,{}),children:(0,I.jsx)(Do.Provider,{value:{markName:ro,callback:Io},children:(0,I.jsx)(No,{ref:s,fontSize:12,language:"json",wordWrap:!0,placeholder:"Compose message",value:t,onChange:r,autoFormat:!0,settings:u})})})}),(0,I.jsxs)(Ao,{children:[(0,I.jsxs)(Mo,{children:[(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(wo.Z,{}),tooltip:"Beautify",onClick:()=>{var e;return null==(e=s.current)?void 0:e.beautifyContent()}}),e&&(0,I.jsx)(n.Suspense,{fallback:(0,I.jsx)(I.Fragment,{children:" "}),children:(0,I.jsx)(To,{})})]}),o&&(0,I.jsxs)(Mo,{children:[(0,I.jsx)(b.Z,{text:"End Streaming",onClick:a,isDisabled:!d,tooltip:d?"":"Invoke the method to send messages"}),(0,I.jsx)(Lo,{type:d?"primary":"secondary",onClick:i,isDisabled:!d,text:"Send"})]})]})]})}));var zo=r(68206),$o=r(81410);let Fo,_o,Uo,Wo=e=>e;const Vo=i()(zo.Z)(Fo||(Fo=Wo`
  &:not(:focus) {
    border-color: var(--border-color-default);
    background-color: var(--background-color-secondary);
  }
`)),Ho=i()($o.Z)(_o||(_o=Wo`
  .aether-dropdown__control:not(:focus) {
    border-color: var(--border-color-default);
    background-color: var(--background-color-secondary);
  }

  .aether-dropdown__control .aether-dropdown__single-value {
    color: var(--content-color-secondary);
    font-weight: 600;
    font-size: var(--text-size-s);
  }
`)),Bo=i()(h.ZP)(Uo||(Uo=Wo`
  color: var(--content-color-primary);
`)),Go=()=>{const e=(0,m.Z)();return[e.extensions.auth,e.setRequestAuthState]},Jo=[{label:"No Auth",value:"noauth"},{label:"API Key",value:"apikey"},{label:"Basic Auth",value:"basic"},{label:"Bearer Token",value:"bearer"}];let Ko,Xo,Yo,Qo=e=>e;const en=i().div(Ko||(Ko=Qo`
  flex: 0.35;
  padding: var(--spacing-m);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  height: 100%;
`)),tn=i()(l.Z)(Xo||(Xo=Qo`
  align-items: center;
  padding: var(--spacing-s) var(--spacing-zero);
  flex-wrap: wrap;
`)),rn=i().div(Yo||(Yo=Qo`
  flex: 1;
`)),on=(0,g.observer)((()=>{const e=ne(),[t,r]=Go();return(0,I.jsx)(en,{children:(0,I.jsxs)(tn,{children:[(0,I.jsx)(rn,{children:(0,I.jsx)(Ze.Z,{text:"Type",htmlFor:"auth-type-selector-dropdown"})}),(0,I.jsx)(rn,{children:(0,I.jsx)(Ho,{onChange:({value:e})=>{r((0,o.Z)({},t,{type:e}))},options:Jo,value:Jo.find((e=>e.value===t.type)),id:"auth-type-selector-dropdown",isSearchable:!1,isClearable:!1,isDisabled:e,viaPortal:!0})})]})})}));let nn;const sn=i()(l.Z)(nn||(nn=(e=>e)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`)),an=()=>(0,I.jsx)(sn,{children:"This request is not inheriting any authorization helper at the moment."});var ln=r(71453);let cn;const dn=i()(v.Link)(cn||(cn=(e=>e)`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  color: var(--content-color-secondary);
`)),pn=()=>(0,I.jsxs)(dn,{type:"link-default",to:"https://go.pstmn.io/docs-auth",target:"_blank",rel:"noopener noreferer",children:["authorization",(0,I.jsx)(ln.Z,{})]});let un;const hn=i()(l.Z)(un||(un=(e=>e)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),gn=()=>(0,I.jsx)(hn,{children:(0,I.jsxs)("div",{children:["This request does not use any authorization. Learn more about ",(0,I.jsx)(pn,{})]})}),mn=e=>{const[t,r]=Go();return(0,n.useCallback)((n=>{var s;const a=n.target.value,i=n.target.name;if(!a&&t[e])return r((0,o.Z)({},t,{[e]:null==(s=t[e])?void 0:s.filter((e=>e.key!==i))}));const l=[...t[e]||[]],c=l.findIndex((e=>e.key===i));if(-1===c)return r((0,o.Z)({},t,{[e]:[...t[e]||[],{key:i,value:a}]}));l[c].value=a,r((0,o.Z)({},t,{[e]:l}))}),[t,r,e])};let xn,vn,fn=e=>e;const yn=i()(l.Z)(xn||(xn=fn`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),bn=i().div(vn||(vn=fn`
  flex: 1;
`)),jn=(0,g.observer)((()=>{const e=ne(),[t]=Go(),r=mn("bearer"),o=(0,n.useMemo)((()=>{var e;return(null==(e=t.bearer)||null==(e=e.find((e=>"token"===e.key)))?void 0:e.value)||""}),[t]);return(0,I.jsxs)(yn,{children:[(0,I.jsx)(bn,{children:(0,I.jsx)(Bo,{children:"Token"})}),(0,I.jsx)(bn,{children:(0,I.jsx)(Vo,{onChange:r,value:o,name:"token",placeholder:"Token",isDisabled:e})})]})}));let Zn,wn,Sn=e=>e;const kn=i()(l.Z)(Zn||(Zn=Sn`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),Cn=i().div(wn||(wn=Sn`
  flex: 1;
`)),En=[{key:"username",label:"Username",type:"text"},{key:"password",label:"Password",type:"password"}],Rn=(0,g.observer)((()=>{const e=ne(),[t]=Go(),r=mn("basic"),o=e=>{var r;return(null==(r=(t.basic||[]).find((t=>t.key===e)))?void 0:r.value)||""};return(0,I.jsx)(I.Fragment,{children:En.map((({key:t,label:n,type:s})=>(0,I.jsxs)(kn,{children:[(0,I.jsx)(Cn,{children:(0,I.jsx)(Bo,{children:n})}),(0,I.jsx)(Cn,{children:(0,I.jsx)(Vo,{onChange:r,name:t,value:o(t),placeholder:n,type:s,isDisabled:e})})]},t)))})}));let Pn,Dn,In=e=>e;const Tn=i()(l.Z)(Pn||(Pn=In`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),Nn=i().div(Dn||(Dn=In`
  flex: 1;
`)),On=[{key:"key",label:"Key"},{key:"value",label:"Value"}],Ln=(0,g.observer)((()=>{const e=ne(),[t]=Go(),r=mn("apikey"),o=e=>{var r;return(null==(r=(t.apikey||[]).find((t=>t.key===e)))?void 0:r.value)||""};return(0,I.jsx)(I.Fragment,{children:On.map((({key:t,label:n})=>(0,I.jsxs)(Tn,{children:[(0,I.jsx)(Nn,{children:(0,I.jsx)(Bo,{children:n})}),(0,I.jsx)(Nn,{children:(0,I.jsx)(Vo,{onChange:r,name:t,value:o(t),placeholder:n,isDisabled:e})})]},t)))})}));let An;const Mn=i().div(An||(An=(e=>e)`
  flex: 0.65;
  padding: var(--spacing-m);
`)),qn=(0,g.observer)((()=>{const[e]=Go();switch(e.type){case"noauth":return(0,I.jsx)(gn,{});case"bearer":return(0,I.jsx)(jn,{});case"basic":return(0,I.jsx)(Rn,{});case"apikey":return(0,I.jsx)(Ln,{});default:return(0,I.jsx)(an,{})}})),zn=()=>(0,I.jsx)(Mn,{children:(0,I.jsx)(qn,{})});let $n;const Fn=i().div($n||($n=(e=>e)`
  display: flex;
  min-height: 0;
  font-size: var(--text-size-m);
  color: var(--content-color-secondary);
  height: calc(100% - 2 * var(--spacing-l));
`)),_n=()=>(0,I.jsxs)(Fn,{className:"auth-editor",role:"tabpanel",children:[(0,I.jsx)(on,{}),(0,I.jsx)(zn,{})]});var Un=r(84452),Wn=r(22833),Vn=r.n(Wn),Hn=r(1078);let Bn,Gn,Jn,Kn,Xn,Yn=e=>e;const Qn=i()(l.Z)(Bn||(Bn=Yn`
  min-height: 48px;
  padding: var(--spacing-s) var(--spacing-l);
  box-sizing: border-box;
  width: 100%;

  &:hover {
    background: var(--background-color-tertiary);
  }
`)),es=i()(l.Z)(Gn||(Gn=Yn`
  width: 70%;
`)),ts=i()(l.Z)(Jn||(Jn=Yn`
  width: 30%;
  margin-left: var(--spacing-l);
`)),rs=i()(zo.Z)(Kn||(Kn=Yn`
  max-width: 80px;

  input {
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`)),os=i()(b.Z)(Xn||(Xn=Yn`
  font-weight: 500;
  width: fit-content;
  margin-top: var(--spacing-xs);
`)),ns=e=>{const t=ne(),[r,o]=(0,n.useState)(void 0===e.value?e.defaultValue:e.value),s=t=>{let n;n="boolean"===e.inputType?!r:"number"===e.inputType?t.target.value?Number(t.target.value):"":t.target.value,o(n),null==e.onChange||e.onChange(n)};return(0,I.jsxs)(Qn,{className:Vn()({enabled:!t}),children:[(0,I.jsxs)(es,{direction:"column",justifyContent:"flex-start",children:[(0,I.jsx)(h.ZP,{type:"strong",children:e.label}),(0,I.jsx)(h.ZP,{children:e.description})]}),(0,I.jsxs)(ts,{direction:"column",justifyContent:"flex-start",children:["boolean"===e.inputType?(0,I.jsx)(Hn.Z,{isChecked:!!r,onChange:s,isDisabled:t}):(0,I.jsx)(rs,{value:r,onChange:s,type:"number"===e.inputType?"number":"text",step:1,isDisabled:t}),void 0!==e.value&&(0,I.jsx)(os,{type:"plain",text:"Restore default",size:"small",onClick:()=>{o(e.defaultValue),null==e.onChange||e.onChange()},isDisabled:t})]})]})},ss=()=>{const e=(0,m.Z)();return[e.payload.settings,e.setRequestSettings]};let as;const is=i().div(as||(as=(e=>e)`
  &.disabled {
    opacity: 0.6;
  }
`)),ls=(0,g.observer)((()=>{const e=ne(),[t,r]=ss();return(0,I.jsx)(is,{role:"tabpanel",className:e?"disabled":"",children:Un.defaultGRPCSettings.map((e=>{return e.hideFromSettings?null:(0,I.jsx)(ns,{label:e.title||"",description:e.description||"",value:t[e.id],defaultValue:e.defaultValue,inputType:e.inputType,onChange:(n=e.id,e=>{r((0,o.Z)({},t,{[n]:e}))})},e.id);var n}))})}));var cs=r(19956);const ds=()=>{const e=(0,m.Z)();return[e.payload.metadata,e.setRequestMetadata]};let ps;const us=i().div(ps||(ps=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);

  div {
    background-color: transparent;
  }
`)),hs=(0,g.observer)((function(){const e=ne(),[t,r]=ds();return(0,I.jsx)(us,{role:"tabpanel",children:(0,I.jsx)(cs.KeyValueEditor,{tableName:"Request Metadata",allowedColumns:["key","value"],showColumns:["key","value"],values:t,onChange:e=>{r(e)},disableSorting:e,nonEditableKeys:e,nonEditableValues:e,nonEditableToggles:e,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0})})}));var gs=r(96557);const ms=(0,g.observer)((()=>{const[,e]=Pr();return(0,I.jsxs)(l.Z,{width:"100%",direction:"column",margin:"spacing-s spacing-zero",gap:"spacing-s",children:[(0,I.jsx)(h.ZP,{type:"body-medium",children:"Have a .proto file in your local system or hosted on a URL?"}),(0,I.jsx)(l.Z,{children:(0,I.jsx)(b.Z,{type:"outline",onClick:()=>e("file"),text:"Import .proto file"})})]})}));var xs=r(29814);const vs=["isLoading","heading","children"];let fs,ys,bs=e=>e;const js=i().div(fs||(fs=bs`
  margin-left: calc(var(--size-xs) + var(--spacing-s));
`)),Zs=i()(l.Z)(ys||(ys=bs`
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),ws=e=>{let{isLoading:t,heading:r,children:n}=e,s=(0,We.Z)(e,vs);return(0,I.jsxs)(Zs,(0,o.Z)({direction:"column",padding:"spacing-m",backgroundColor:"background-color-tertiary",borderRadius:"border-radius-default",gap:"spacing-s"},s,{children:[(0,I.jsxs)(l.Z,{gap:"spacing-s",alignItems:"center",children:[t?(0,I.jsx)(Ce.Z,{}):(0,I.jsx)(xs.Z,{size:"large",color:"content-color-primary"}),"string"==typeof r?(0,I.jsx)(Y.Z,{color:"content-color-primary",type:"h5",text:r}):r]}),n&&(0,I.jsx)(js,{children:n})]}))},Ss=(0,g.observer)((()=>{const{isFetching:e,source:t,fetchingSource:r,services:o}=te(),[n]=x(),s=e&&"reflection"===r,a=!n,{loadProto:i}=(0,m.Z)(),c=er();return"reflection"===t&&o?(0,I.jsx)(ks,{}):(0,I.jsxs)(l.Z,{alignItems:"center",gap:"spacing-s",width:"100%",children:[s?(0,I.jsx)(Ce.Z,{}):(0,I.jsx)(Rr.Z,{}),(0,I.jsx)("div",{children:s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.ZP,{color:"content-color-secondary",children:"Loading server reflection. "}),(0,I.jsx)(b.Z,{type:"muted-plain",text:"Cancel",onClick:()=>{c("reflection")}})]}):(0,I.jsx)(b.Z,{type:"muted-plain",onClick:()=>{n&&i("reflection")},isDisabled:a,tooltip:a&&(0,I.jsx)(ve.Z,{content:"Enter server URL to load methods using server reflection.",placement:"top"}),text:"Use Server Reflection"})})]})})),ks=()=>{const{isFetching:e,fetchingSource:t}=te(),r=e&&"reflection"===t,{loadProto:o}=(0,m.Z)(),n=er();return(0,I.jsx)(ws,{padding:"spacing-s",background:"background-color-secondary",alignItems:"flex-start",justifyContent:"center",gap:"spacing-m",isLoading:r,heading:(0,I.jsxs)(l.Z,{gap:"spacing-s",children:[(0,I.jsx)(h.ZP,{color:"content-color-primary",children:r?"Loading server reflection":"Using Server Reflection"}),r?(0,I.jsx)(b.Z,{type:"monochrome-plain",onClick:()=>{n("reflection")},text:"Cancel"}):(0,I.jsx)(b.Z,{icon:(0,I.jsx)(Yt.Z,{}),size:"small",type:"muted-plain",onClick:()=>o("reflection"),"data-testid":"reload-server-reflection"})]})})};var Cs=r(35482);const Es=()=>{const{apiEditor:e,setAPIEditorFiles:t}=(0,m.Z)();return[e.files,t]},Rs=["children"];let Ps;const Ds=i()(b.Z)(Ps||(Ps=(e=>e)`
  min-width: fit-content;
`)),Is=(0,n.forwardRef)(((e,t)=>{const[r,s]=(0,n.useState)(!1),[,a]=Es(),{openProtoFileSelectorDialog:i}=(0,m.Z)(),{children:l}=e,c=(0,We.Z)(e,Rs);return(0,I.jsx)(Ds,(0,o.Z)({type:"secondary",ref:t},c,{onClick:async()=>{s(!0);const e=await i();s(!1),a(e?[{path:e}]:null)},isLoading:r,text:l}))}));var Ts=r(59713);function Ns(){const[e,t]=Es();return(0,I.jsx)("div",{children:Array.isArray(e)&&e.map((({path:r},o)=>(0,I.jsxs)(l.Z,{as:"li",alignItems:"center",justifyContent:"space-between",children:[(0,I.jsx)(h.ZP,{isTruncated:!0,children:r}),(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(Ts.Z,{}),onClick:()=>(r=>{const o=((e,t)=>null==e?void 0:e.filter(((e,r)=>r!==t)))(e,r);t(null!=o&&o.length?o:null)})(o),"aria-label":"Remove","data-testid":"remove-file-button"})]},r)))})}var Os=r(85974);const Ls=()=>{const{apiEditor:e,setAPIEditorImportPaths:t}=(0,m.Z)();return[e.importPaths,t]},As=(0,g.observer)((()=>{const[e,t]=Ls(),{openProtoImportPathSelectorDialog:r}=(0,m.Z)(),[o,s]=(0,n.useState)(!1);return(0,I.jsx)(b.Z,{onClick:async()=>{s(!0);const o=await r();s(!1),null!=o&&o.length&&t([...e||[],...o.map((e=>({path:e,selected:!0})))])},type:"monochrome-plain",isLoading:o,size:"small",icon:(0,I.jsx)(Os.Z,{}),text:"Add an import path"})}));var Ms=r(65848),qs=r(43088);let zs,$s,Fs=e=>e;const _s=i()(Ms.Z)(zs||(zs=Fs`
  span {
    width: 100%;

    label {
      word-break: break-word;
    }
  }
`)),Us=i()(b.Z)($s||($s=Fs`
  align-self: flex-start;
`)),Ws=(0,g.observer)((()=>{const[e,t]=Ls();return null!=e&&e.length?(0,I.jsx)(l.Z,{direction:"column",gap:"spacing-s",children:null==e?void 0:e.map((({path:r,selected:o})=>(0,I.jsxs)(l.Z,{alignItems:"center",justifyContent:"space-between",gap:"spacing-s",children:[(0,I.jsx)(_s,{label:r,isChecked:o,onChange:()=>(r=>{if(!e)return;const o=null==e?void 0:e.findIndex((({path:e})=>e===r));-1!==o&&(e[o].selected=!(null!=e&&e[o].selected),t(e))})(r),"data-testid":"import-path-checkbox"},r),(0,I.jsx)(Us,{type:"tertiary",size:"small",icon:(0,I.jsx)(qs.Z,{}),onClick:()=>{return o=r,void t(null==e?void 0:e.filter((({path:e})=>e!==o)));var o},"aria-label":"Remove","data-testid":"remove-import-path-button"})]},r)))}):null}));let Vs;const Hs=i()(h.ZP)(Vs||(Vs=(e=>e)`
  word-break: break-word;
`)),Bs=(0,g.observer)((()=>{var e;const t=(0,m.Z)(),[r]=Es(),[o,s]=(()=>{const{apiEditor:e,setAPIEditorProtoURL:t}=(0,m.Z)();return[e.url,t]})(),[a,i]=(0,n.useState)(!1),{error:c,source:d}=te(),p="UNRESOLVED_IMPORT"===(null==c?void 0:c.code),u=c&&("file"===d||"url"===d),g=(0,n.useMemo)((()=>!(null==o||!o.data||null==o||!o.error)||!(null!=r&&r.length||null!=o&&o.data)),[o,r]);return(0,I.jsxs)(l.Z,{width:"100%",direction:"column",margin:"spacing-s spacing-zero",gap:"spacing-s",children:[u&&!p&&(0,I.jsx)(vr.Z,{status:"error",title:"Couldn't import .proto file",children:(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,I.jsx)(h.ZP,{children:"There was an error while importing the Protobuf definition."}),(0,I.jsx)(Hs,{type:"body-small",children:null!=(e=c.message)?e:"An unknown error occurred"})]})}),(0,I.jsxs)("div",{children:[(0,I.jsx)(Y.Z,{type:"h5",text:"Import a .proto file",hasBottomSpacing:!0}),(0,I.jsx)(h.ZP,{color:"content-color-secondary",children:"Import a .proto file from your local system or load it from the URL where it’s hosted."})]}),(0,I.jsx)(l.Z,{children:null!=r&&r.length?(0,I.jsx)(Ns,{}):(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-s",children:[(0,I.jsxs)(l.Z,{width:"100%",gap:"spacing-m",alignItems:"start",height:"size-m",children:[(0,I.jsx)(Is,{children:"Choose a File"}),(0,I.jsx)(l.Z,{alignSelf:"center",children:(0,I.jsx)(h.ZP,{color:"content-color-tertiary",children:"OR"})}),(0,I.jsx)(zo.Z,{maxWidth:"250px",value:(null==o?void 0:o.data)||"",onChange:e=>{s({data:e.target.value,error:!1}),i(!1)},onBlur:()=>{null!=o&&o.data&&!(e=>{try{new URL(e)}catch(e){return!1}return!0})(null==o?void 0:o.data)&&s({data:o.data,error:!0})},name:"url",placeholder:"Enter a URL",validationStatus:a||null!=o&&o.error?"error":null,validationMessage:(null==o?void 0:o.error)&&"Invalid URL"})]}),a&&(0,I.jsxs)(l.Z,{gap:"spacing-s",alignItems:"center",children:[(0,I.jsx)(Cs.Z,{color:"content-color-error"}),(0,I.jsx)(h.ZP,{color:"content-color-error",children:"File or url is required"})]})]})}),(0,I.jsxs)("div",{children:[(0,I.jsx)(Y.Z,{type:"h6",text:"Import paths",hasBottomSpacing:!0}),(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,I.jsx)(h.ZP,{color:"content-color-secondary",children:'Specify import paths to look for .proto files while resolving "import" directives.'}),p&&(0,I.jsx)(vr.Z,{status:"error",title:'Unresolved "import" directives',children:(0,I.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,I.jsx)(h.ZP,{children:"We could not find some of the files imported by the .proto file. Specify import paths to those unresolved files using the options below."}),(0,I.jsx)(Hs,{type:"body-small",children:null==c?void 0:c.message})]})}),(0,I.jsx)("div",{children:(0,I.jsx)(As,{})}),(0,I.jsx)(Ws,{})]})]}),(0,I.jsx)(l.Z,{gap:"spacing-m",children:(0,I.jsx)(b.Z,{variant:"primary",type:"primary",text:"Import Proto",onClick:()=>{if(g)return i(!0);i(!1),null!=o&&o.data?t.loadProto("url"):null!=r&&r.length&&t.loadProto("file")}})})]})}));let Gs,Js,Ks,Xs=e=>e;const Ys=i()(l.Z)(Gs||(Gs=Xs`
  padding: var(--spacing-l) var(--spacing-s);
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  color: var(--content-color-secondary);
  width: 40em;
  justify-self: center;
`)),Qs=i().div(Js||(Js=Xs`
  width: 90%;
  height: 1.5px;
  background: var(--background-color-secondary);
  margin: var(--spacing-zero) var(--spacing-m);
`)),ea=i()(b.Z)(Ks||(Ks=Xs`
  white-space: pre;
  justify-content: flex-start;
`)),ta=(0,g.observer)((()=>{const[e,t]=Pr(),{source:r,error:o,proto:n}=te(),s="file"===e,a=!(e||s||o||"file"!==r&&"url"!==r),i=!e&&("file"!==r&&"url"!==r||o);return(0,I.jsx)(l.Z,{width:"100%",justifyContent:"center",children:(0,I.jsxs)(Ys,{direction:"column",gap:"spacing-l",justifyContent:"center",children:[(0,I.jsx)(kr,{}),(0,I.jsx)(h.ZP,{children:"A service definition makes the client aware of the services and methods."}),e&&(0,I.jsx)(ea,{type:"muted-plain",onClick:()=>t(null),icon:(0,I.jsx)(gs.Z,{}),justifyContent:"flex-start",gap:"spacing-s",text:"reflection"===r?"Keep using server reflection":"Go Back"}),s&&(0,I.jsx)(Bs,{}),a&&(0,I.jsx)(ws,{heading:`Temporarily using ${rr(n)}`,children:(0,I.jsxs)(l.Z,{direction:"column",gap:"spacign-s",children:[(0,I.jsx)(h.ZP,{children:"This .proto file is being temporarily used for invoking methods."}),(0,I.jsx)("div",{children:(0,I.jsx)(b.Z,{type:"plain",text:"Import a .proto file",onClick:()=>t("file")})})]})}),i&&(0,I.jsx)(ms,{}),!e&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(l.Z,{width:"100%",alignItems:"center",children:[(0,I.jsx)(h.ZP,{children:"OR"}),(0,I.jsx)(Qs,{})]}),(0,I.jsx)(Ss,{})]})]})})}));let ra;const oa=i().div(ra||(ra=(e=>e)`
  display: inline-flex;
  width: calc(0.5 * var(--spacing-m));
  height: calc(0.5 * var(--spacing-m));
  margin-left: var(--spacing-xs);
  border-radius: calc(0.5 * var(--spacing-m));
  background-color: var(--base-color-success);
`)),na=()=>(0,I.jsx)(oa,{"aria-label":"tab with active values","data-testid":"tab-indicator-dot"}),sa=(0,g.observer)((()=>{const[e]=Go();return(0,I.jsxs)(I.Fragment,{children:["Authorization",e.type&&"noauth"!==e.type&&(0,I.jsx)(na,{})]})})),aa=(0,g.observer)((()=>{const[e]=ds();return(0,I.jsxs)(I.Fragment,{children:["Metadata",(null==e?void 0:e.length)>0&&(0,I.jsxs)(I.Fragment,{children:[" ",(0,I.jsxs)(h.ZP,{color:"content-color-success",children:["(",e.length,")"]})]})]})})),ia=(0,g.observer)((()=>{const[e]=ss(),t=(0,n.useMemo)((()=>{const t=Object.keys(e).filter((e=>"secureConnection"!==e));for(const r of t)if(void 0!==e[r])return!0;return!1}),[e]);return(0,I.jsxs)(I.Fragment,{children:["Settings",t&&(0,I.jsx)(na,{})]})}));let la,ca,da,pa=e=>e;const ua=i()(u.PaneContent)(la||(la=pa`
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`)),ha=i()(go.Z)(ca||(ca=pa`
  box-sizing: border-box;
  padding: var(--spacing-zero) var(--spacing-s);
  width: 100%;
`)),ga=i()(go.Z)(da||(da=pa`
  box-sizing: border-box;
  padding: 0;

  /**
   * Following selectors help provide TabPanels height of the parent.
   */
  &,
  > div,
  > div > div {
    height: 100%;
  }
`)),ma=(0,g.observer)((()=>{const[e,t]=Qt();return(0,I.jsx)(ha,{activeTabIndex:e,onChange:function(e){t(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,I.jsxs)(mo.Z,{children:[(0,I.jsx)(xo.Z,{label:"Message"}),(0,I.jsx)(xo.Z,{label:(0,I.jsx)(sa,{})}),(0,I.jsx)(xo.Z,{label:(0,I.jsx)(aa,{})}),(0,I.jsx)(xo.Z,{label:"Service Definition"}),(0,I.jsx)(xo.Z,{label:"Scripts"}),(0,I.jsx)(xo.Z,{label:(0,I.jsx)(ia,{})})]})})})),xa=(0,g.observer)((()=>{const[e]=Qt();return(0,I.jsx)(ga,{activeTabIndex:e,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,I.jsxs)(vo.Z,{children:[(0,I.jsx)(fo.Z,{children:(0,I.jsx)(qo,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(_n,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(hs,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(ta,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(jo,{featureName:"scripts"})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(ls,{})})]})})})),va=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ma,{}),(0,I.jsx)(ua,{children:(0,I.jsx)(xa,{})})]});var fa=r(63721);const ya=(0,n.createContext)({activeResponseTab:0,setActiveResponseTab:()=>null}),ba=()=>{const e=(0,n.useContext)(ya);if(!e)throw new Error("useResponseViewerContext should be used within a ResponseViewerContext.Provider");return e},ja=({children:e})=>{const[t,r]=(0,n.useState)(0),o=(0,n.useMemo)((()=>({activeResponseTab:t,setActiveResponseTab:r})),[t,r]);return(0,I.jsx)(ya.Provider,{value:o,children:e})};var Za=r(87459),wa=r(59363),Sa=r(91613),ka=r.n(Sa);let Ca;const Ea=i().div(Ca||(Ca=(e=>e)`
  /* No pointer cursor as gRPC does not have any action on hovering over time value */
  cursor: auto;

  span.time-text {
    cursor: auto;
  }
`)),Ra=(0,g.observer)((()=>{const e=oe(),t=(0,m.Z)().response.responseTime,r=ne(),[o]=Kt(),[s]=Xt(),a=(0,n.useMemo)((()=>0!==(null==e?void 0:e.code)),[e]);return r&&(o||s)?(0,I.jsx)(Za.Z,{status:"info",text:"Streaming"}):(0,I.jsxs)(l.Z,{alignItems:"center",gap:"spacing-m",children:[!!e&&!!e.codeName&&(0,I.jsx)(ve.Z,{content:(0,I.jsxs)(I.Fragment,{children:["Status Code ",(0,I.jsxs)(h.ZP,{type:"strong",children:[e.code," ",wa.F[e.code].codeName]})," ",wa.F[e.code].tooltip]}),placement:"bottom-start",children:(0,I.jsx)("div",{children:(0,I.jsxs)(h.ZP,{color:"content-color-secondary",children:["Status code: ",(0,I.jsxs)(h.ZP,{color:a?"content-color-error":"content-color-success",children:[e.code," ",wa.F[e.code].codeName]})]})})}),!!t&&!s&&!o&&(0,I.jsx)(Ea,{children:(0,I.jsxs)(h.ZP,{color:"content-color-secondary",className:"time-text",children:["Time: ",(0,I.jsx)(h.ZP,{color:"content-color-success",className:"time-text",children:(i=t,i<1998?`${Math.ceil(i)} ms`:ka()(i||0,{secondsDecimalDigits:2,keepDecimalsOnWholeSeconds:!0,padUnits:!0}))})]})})]});var i}));let Pa;const Da=i()(go.Z)(Pa||(Pa=(e=>e)`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>e.theme["spacing-zero"])),Ia=(0,g.observer)((()=>{const e=ae(),{activeResponseTab:t,setActiveResponseTab:r}=ba(),o=ie(),s=le(),[a]=Kt(),[i]=Xt(),l=(0,n.useMemo)((()=>i||a),[e.length]);return(0,I.jsx)(Da,{activeTabIndex:t,onChange:e=>{r(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,role:"tablist","data-testid":"response-viewer-tablist",children:(0,I.jsxs)(mo.Z,{children:[(0,I.jsx)(xo.Z,{label:l?"Responses":"Response"}),(0,I.jsx)(xo.Z,{label:(0,I.jsxs)(I.Fragment,{children:["Metadata ",o.length>0&&(0,I.jsxs)(h.ZP,{color:"content-color-success",children:["(",o.length,")"]})]})}),(0,I.jsx)(xo.Z,{label:(0,I.jsxs)(I.Fragment,{children:["Trailers ",s.length>0&&(0,I.jsxs)(h.ZP,{color:"content-color-success",children:["(",s.length,")"]})]})}),(0,I.jsx)(xo.Z,{label:"Test results"})]})})})),Ta=(0,g.observer)((()=>re()?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ia,{}),(0,I.jsx)(Ra,{})]}):(0,I.jsx)(Y.Z,{type:"h5",text:"Response",color:"content-color-primary"})));let Na;const Oa=i()(l.Z)(Na||(Na=(e=>e)``)),La=(0,g.observer)((e=>(0,I.jsx)(u.PaneHeader,(0,o.Z)({},e,{defaultLayout:"horizontal",horizontalComponent:(0,I.jsx)(u.PaneLabel,{layout:"horizontal",label:(0,I.jsx)(Oa,{alignItems:"center",children:(0,I.jsx)(Ta,{})}),arrowDirection:e=>e?"up":"down"}),verticalComponent:(0,I.jsx)(u.PaneLabel,{layout:"vertical",label:"Request Editor",arrowDirection:e=>e?"left":"right"})}))));let Aa;const Ma=i().div(Aa||(Aa=(e=>e)``)),qa=()=>(0,I.jsx)(Ma,{children:(0,I.jsx)(c.Z,{description:"Invoke methods to get a response",children:(0,I.jsx)(d.Z,{name:"illustration-no-call-yet"})})});var za=r(63884),$a=r(83125),Fa=r(10907),_a=r(32054);let Ua,Wa,Va,Ha,Ba,Ga,Ja,Ka,Xa=e=>e;const Ya=(0,n.lazy)((0,So.loadRemoteModule)("code-editor/CodeEditor")),Qa=i().div(Ua||(Ua=Xa``)),ei=i().div(Wa||(Wa=Xa`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`)),ti=i().div(Va||(Va=Xa`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-m);
  padding: var(--spacing-xs) var(--spacing-m) var(--spacing-xs)
    var(--spacing-xl);

  ${0} & {
    border-bottom: var(--border-width-default) var(--border-style-solid)
      var(--border-color-strong);
  }

  ${0} & {
    margin: var(--spacing-xs) 0;
  }
`),Qa,ei),ri=i().div(Ha||(Ha=Xa`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
`)),oi=i().div(Ba||(Ba=Xa`
  &:first-child {
    margin-left: calc(-1 * var(--spacing-s));
  }

  ${0}
`),(e=>e.isGlowing&&(0,a.css)(Ga||(Ga=Xa`
      & svg path {
        fill: var(--content-color-brand) !important;
      }
    `)))),ni=i()(b.Z)(Ja||(Ja=Xa`
  ${0} &:last-child {
    margin-right: calc(-1 * var(--spacing-s));
  }
`),Qa),si=i().div(Ka||(Ka=Xa`
  ${0} & {
    flex: 1;
    overflow-y: auto;
  }

  ${0} & {
    height: 220px;

    & .monaco-editor,
    & .monaco-editor .monaco-editor-background,
    & .monaco-editor .margin-view-overlays,
    & .monaco-editor .margin {
      background-color: transparent;
    }
  }

  & .monaco-editor .margin-view-overlays .line-numbers {
    color: var(--content-color-tertiary);
  }
`),ei,Qa);function ai({data:e,languages:t,allowHexdump:r=!1,fullSize:o=!1,readOnly:a=!1,onChange:i=(()=>null),settings:l={},generateMock:c=null}){const d=e instanceof Uint8Array,p=t?Object.keys(t).length:0,u=Boolean(d&&r),h=!u||p>0,[g]=s().useState(p?Object.keys(t)[0]:"text"),[m,x]=s().useState(!a),[v,f]=s().useState(u),y=s().useRef(),j=s().useMemo((()=>v?(0,za.hexy)(e,{caps:"upper",format:"twos"}):d?Buffer.from(e).toString("utf8"):String(e)),[e,v]),Z=o?ei:Qa;return(0,I.jsxs)(Z,{children:[h&&(0,I.jsxs)(ti,{children:[(0,I.jsxs)(ri,{children:[(0,I.jsx)(oi,{isGlowing:!v&&m,children:(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)($a.Z,{}),tooltip:"Wrap lines",onClick:()=>x(!m),isDisabled:v})}),!a&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(wo.Z,{}),onClick:()=>{var e;return null==(e=y.current)?void 0:e.beautifyContent()},tooltip:"Beautify"}),(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(Fa.Z,{}),onClick:c,tooltip:c?"Generate example message":"Select a method to generate example message",isDisabled:!c})]})]}),(0,I.jsxs)(ri,{children:[r&&(0,I.jsx)(b.Z,{type:"tertiary",text:v?"Show Message":"Show Hexdump",onClick:()=>f(!v)}),(0,I.jsx)(ni,{type:"tertiary",icon:(0,I.jsx)(_a.Z,{}),tooltip:"Search",onClick:()=>y.current&&y.current.toggleFindWidget()})]})]}),(0,I.jsx)(si,{children:(0,I.jsx)(n.Suspense,{fallback:(0,I.jsx)(Ce.Z,{}),children:(0,I.jsx)(Ya,{value:j,language:v?"hexdump":g,wordWrap:!v&&m,readOnly:a,autoFormat:a,fontSize:12,ref:y,onChange:i,settings:l})})})]})}var ii=r(3341);let li,ci,di,pi,ui=e=>e;const hi=(0,n.lazy)((()=>r.e(4522).then(r.t.bind(r,64522,23)).then((e=>({default:e.CustomObjectInspector}))))),gi=i().div(li||(li=ui`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xs);
  margin-left: ${0};
  text-align: left;

  .custom-obj-inspector {
    ${0};
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`),(e=>!e.isUnary&&"-20px"),(e=>e.isUnary?(0,a.css)(ci||(ci=ui`
            margin-left: 20px;
            box-sizing: border-box;
            width: calc(100% - 20px);
            padding: var(--spacing-s);
            background-color: var(--background-color-secondary);
            border-radius: var(--spacing-xs);
            min-width: fill-available;
            max-width: fit-content;
          `)):(0,a.css)(di||(di=ui`
            padding: var(--spacing-zero)
              calc(var(--spacing-l) + var(--spacing-xs));
          `)))),mi=i().div(pi||(pi=ui`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
`));function xi({data:e,isUnary:t}){const[r,o]=s().useState(!1),a=t?"content-color-primary":"content-color-secondary";return(0,I.jsxs)(gi,{isUnary:t,children:[(0,I.jsxs)(mi,{onClick:()=>o((e=>!e)),children:[r?(0,I.jsx)(Ee.Z,{color:a}):(0,I.jsx)(ii.Z,{color:a}),(0,I.jsx)(Y.Z,{type:"h6",color:a,text:"Error details"})]}),r&&(0,I.jsx)(n.Suspense,{fallback:(0,I.jsx)(I.Fragment,{children:" "}),children:(0,I.jsx)(hi,{data:e})})]})}let vi,fi,yi,bi=e=>e;const ji=i()(l.Z)(vi||(vi=bi`
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }

  .monaco-editor .margin-view-overlays .line-numbers {
    text-align: center;
  }
`)),Zi=i().div(fi||(fi=bi`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  max-width: 552px;
`)),wi=i().div(yi||(yi=bi`
  padding: var(--spacing-s);
  border-radius: var(--spacing-xs);
  background: var(--background-color-error);
  font-size: var(--text-size-m);
  color: var(--content-color-primary);
  word-wrap: break-word;
  box-sizing: border-box;
`)),Si={[wa.D.CANCELLED]:(0,I.jsx)(d.Z,{name:"illustration-run-aborted"}),[wa.D.UNKNOWN]:(0,I.jsx)(d.Z,{name:"illustration-internal-server-error"}),[wa.D.INVALID_ARGUMENT]:(0,I.jsx)(d.Z,{name:"illustration-test-fail"}),[wa.D.DEADLINE_EXCEEDED]:(0,I.jsx)(d.Z,{name:"illustration-unauthorized-error"}),[wa.D.NOT_FOUND]:(0,I.jsx)(d.Z,{name:"illustration-page-not-found"}),[wa.D.ALREADY_EXISTS]:(0,I.jsx)(d.Z,{name:"illustration-unable-to-load"}),[wa.D.PERMISSION_DENIED]:(0,I.jsx)(d.Z,{name:"illustration-no-permission"}),[wa.D.RESOURCE_EXHAUSTED]:(0,I.jsx)(d.Z,{name:"illustration-unable-to-pull-request"}),[wa.D.FAILED_PRECONDITION]:(0,I.jsx)(d.Z,{name:"illustration-test-fail"}),[wa.D.ABORTED]:(0,I.jsx)(d.Z,{name:"illustration-critical-danger"}),[wa.D.OUT_OF_RANGE]:(0,I.jsx)(d.Z,{name:"illustration-test-fail"}),[wa.D.UNIMPLEMENTED]:(0,I.jsx)(d.Z,{name:"illustration-unable-to-load"}),[wa.D.INTERNAL]:(0,I.jsx)(d.Z,{name:"illustration-internal-server-error"}),[wa.D.UNAVAILABLE]:(0,I.jsx)(d.Z,{name:"illustration-internal-server-error"}),[wa.D.DATA_LOSS]:(0,I.jsx)(d.Z,{name:"illustration-unauthorized-error"}),[wa.D.UNAUTHENTICATED]:(0,I.jsx)(d.Z,{name:"illustration-no-permission"})},ki=e=>{try{return JSON.stringify(e||"")}catch(e){return""}},Ci=()=>{const e=(0,m.Z)().response.messages,t=oe(),{code:r,summary:o,description:n,message:s,details:a}=t||{};return 0===r&&e.length>0&&void 0!==e[0].data?(0,I.jsx)(ji,{children:(0,I.jsx)(ai,{data:ki(e[0].data),languages:{postman_json:"JSON"},fullSize:!0,readOnly:!0})}):t?(0,I.jsx)(c.Z,{title:o,description:(0,I.jsxs)(Zi,{children:[(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:n}),s&&(0,I.jsx)(wi,{children:s}),!!a&&(0,I.jsx)(xi,{data:a,isUnary:!0})]}),children:Si[r]}):null};var Ei=r(25710),Ri=r(45261),Pi=r(94690),Di=r(38725),Ii=r(38394),Ti=r(24867),Ni=r(95362);let Oi,Li,Ai=e=>e;const Mi=i().div(Oi||(Oi=Ai`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--size-xs);
  min-width: var(--size-xs);

  ${0}
`),(e=>e.background&&(0,a.css)(Li||(Li=Ai`
      background-color: var(--${0});
    `),e.background)));function qi({type:e}){switch(e){case"incoming":return(0,I.jsx)(Mi,{background:"background-color-info",children:(0,I.jsx)(Pi.Z,{color:"content-color-info"})});case"outgoing":return(0,I.jsx)(Mi,{background:"background-color-warning",children:(0,I.jsx)(Di.Z,{color:"content-color-warning"})});case"success":return(0,I.jsx)(Mi,{children:(0,I.jsx)(Ii.Z,{color:"content-color-success"})});case"error":return(0,I.jsx)(Mi,{children:(0,I.jsx)(Cs.Z,{color:"content-color-error"})});case"info":return(0,I.jsx)(Mi,{children:(0,I.jsx)(Ti.Z,{color:"content-color-primary"})});case"CLEARED_EVENTS":return(0,I.jsx)(Mi,{children:(0,I.jsx)(Ni.Z,{color:"content-color-primary"})});default:throw new TypeError(`Unrecognized EventIcon type: ${e}`)}}let zi,$i,Fi=e=>e;const _i=i()(h.ZP)(zi||(zi=Fi`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${0}
`),(e=>e.isRawData&&(0,a.css)($i||($i=Fi`
      ${0}
      font-family: var(--text-family-code);
    `),!e.noWrap&&"white-space: pre;")));function Ui({event:e,noWrap:t}){let{summary:r,data:o}=e,n=!1;return r||(o instanceof Uint8Array?r=(0,I.jsx)("i",{children:"Binary"}):"string"==typeof o?(r=o,n=!0):void 0!==o&&(r=JSON.stringify(o),n=!0)),(0,I.jsx)(_i,{type:"body-medium",isRawData:n,noWrap:t,color:r?"content-color-primary":"content-color-secondary",children:r||"(empty)"})}var Wi=r(52963),Vi=r.n(Wi);let Hi,Bi,Gi,Ji,Ki,Xi,Yi=e=>e;const Qi=i().div(Hi||(Hi=Yi`
  margin: 0 var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);

  ${0}
`),(e=>e.isExpanded&&(0,a.css)(Bi||(Bi=Yi`
      background: var(--background-color-secondary);

      & ${0} {
        border-bottom: var(--border-width-default) var(--border-style-solid)
          var(--border-color-strong);
      }
    `),el))),el=i().div(Gi||(Gi=Yi`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-s);
  gap: 0 var(--spacing-xl);

  &:hover {
    background: var(--background-color-secondary);
    cursor: ${0};
  }
`),(e=>e.onClick?"pointer":"default")),tl=i().div(Ji||(Ji=Yi`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
  overflow-x: hidden;
  flex: ${0};
`),(e=>e.isFlexible?"1 1 auto":"0 0 auto")),rl=i()(tl)(Ki||(Ki=Yi`
  ${0}:not(:hover) & {
    display: none !important;
  }
`),el),ol=i()(l.Z)(Xi||(Xi=Yi`
  visibility: ${0};
`),(e=>e.isHidden?"hidden":"visible"));function nl({event:e,preview:t,inspector:r,noWrap:o=!1}){const[n,a]=s().useState(!1),i=s().useMemo((()=>r?r(e):null),[e,r]),l=s().useMemo((()=>t?t(e):null),[e,t]),c=i?()=>a(!n):null,d=n?Ei.Z:Ee.Z;return(0,I.jsxs)(Qi,{isExpanded:n,children:[(0,I.jsxs)(el,{onClick:c,"data-testid":"timeline-event",children:[(0,I.jsx)(tl,{children:(0,I.jsx)(qi,{type:e.type||"info"})}),(0,I.jsx)(tl,{isFlexible:!0,children:(0,I.jsx)(Ui,{event:e,noWrap:o})}),(0,I.jsxs)(tl,{children:[("incoming"===e.type||"outgoing"===e.type)&&(0,I.jsx)(rl,{children:(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(Ri.Z,{}),"data-testid":"copy-message-button",tooltip:(0,I.jsx)(ve.Z,{content:"Copy message",placement:"bottom"}),onClick:t=>{t.stopPropagation(),al(e.data)}})}),l,(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary","data-testid":"event-time",children:null!=e.timestamp&&new Date(e.timestamp).toTimeString().split(" ")[0]}),(0,I.jsx)(ol,{isHidden:!c,children:(0,I.jsx)(d,{color:"content-color-primary",size:"large"})})]})]}),n&&i]})}const sl=e=>{if(!e)return;const t=document.createElement("textarea");t.style="height:0;width:0;overflow:hidden;",document.body.append(t),t.value=e,t.focus(),t.select(),document.execCommand("copy",!1,null),document.execCommand("delete",null,!1),t.remove()},al=e=>{"string"==typeof e?sl(e):e instanceof Uint8Array?sl(Vi().from(e).toString("utf8")):sl(void 0===e?"":JSON.stringify(e))};let il,ll,cl=e=>e;const dl=i().div(il||(il=cl`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-m);
  gap: 0 var(--spacing-xl);
  margin: 0 var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
`)),pl=i().div(ll||(ll=cl`
  display: flex;
  align-items: center;
  flex: ${0};
`),(e=>e.isFlexible?"1 1 auto":"0 0 auto"));function ul({count:e,onRestore:t}){return(0,I.jsxs)(dl,{children:[(0,I.jsx)(pl,{children:(0,I.jsx)(qi,{type:"CLEARED_EVENTS"})}),(0,I.jsx)(pl,{isFlexible:!0,children:(0,I.jsxs)(h.ZP,{type:"body-medium",children:[e," messages hidden"]})}),(0,I.jsx)(pl,{children:(0,I.jsx)(b.Z,{text:"Restore",size:"small",onClick:t})})]})}let hl;const gl=i()(b.Z)(hl||(hl=(e=>e)`
  position: absolute;
  top: var(--spacing-s);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  padding: var(--spacing-xs) var(--spacing-m);
  border-radius: 20px;
  background-color: var(--content-color-link) !important;
  color: var(--content-color-constant) !important;
  box-shadow: var(--shadow-default);
  z-index: 10;

  & svg path {
    fill: var(--content-color-constant) !important;
  }
`));function ml({text:e,onClick:t}){return(0,I.jsx)(gl,{type:"primary",size:"small",text:e,icon:(0,I.jsx)(Di.Z,{}),onClick:t})}var xl=r(38171),vl=r.n(xl),fl=r(64691),yl=r(48263),bl=r(59824),jl=r(20347),Zl=r(17282);let wl,Sl,kl,Cl,El=e=>e;const Rl=i().div(wl||(wl=El`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
  padding: var(--spacing-xs) var(--spacing-s);

  ${0}
`),(e=>e.hasShadow&&(0,a.css)(Sl||(Sl=El`
      box-shadow: 0 4px 4px -2px rgb(0 0 0 / 12%);
      z-index: 1;
    `)))),Pl=i().div(kl||(kl=El`
  width: ${0};
  padding: var(--spacing-xs) var(--spacing-zero);
`),(e=>e.compressWidth?"180px":"240px")),Dl=i()(l.Z)(Cl||(Cl=El`
  align-items: center;
  gap: var(--spacing-s);
`)),Il=[{value:"outgoing",label:(0,I.jsxs)(Dl,{children:[(0,I.jsx)("div",{children:(0,I.jsx)(qi,{type:"outgoing"})})," ","Sent Messages"]})},{value:"incoming",label:(0,I.jsxs)(Dl,{children:[(0,I.jsx)("div",{children:(0,I.jsx)(qi,{type:"incoming"})}),"Received Messages"]})},{value:"ALL",label:"All Messages",addDivider:!0}];function Tl({onFilter:e,onClear:t,isClearable:r,hasShadow:o}){const[n,a]=s().useState(""),[i,l]=s().useState(Il[2]),{current:c}=s().useRef(new WeakMap);return s().useEffect((()=>{e({isMatch:e=>("ALL"===i.value||e.type===i.value)&&(!n||function(e,t){let r=t.get(e);return r||(r=[],t.set(e,r),e.summary&&r.push(function(e){const t=[];return s().Children.forEach(e,(function e(r){"string"==typeof r?t.push(r):s().isValidElement(r)&&s().Children.forEach(r.props.children,e)})),t.join("")}(e.summary)),void 0!==e.data&&("string"==typeof e.data?r.push(e.data):e instanceof Uint8Array?r.push(Buffer.from(e.data).toString("utf8")):r.push(JSON.stringify(e.data)))),r}(e,c).some((e=>vl().isMatch(e,n))))})}),[n,i.value]),(0,I.jsxs)(Rl,{hasShadow:o,children:[(0,I.jsx)(Pl,{children:(0,I.jsx)(zo.Z,{type:"search",placeholder:"Search",value:n,onChange:e=>a(e.target.value),onClear:()=>a("")})}),(0,I.jsxs)(fl.Z,{children:[(0,I.jsx)(yl.Z,{"data-testid":"filter-menu",text:i.label,type:"tertiary"}),(0,I.jsx)(bl.Z,{children:Il.map((e=>(0,I.jsxs)(I.Fragment,{children:[e.addDivider&&(0,I.jsx)(jl.Z,{}),(0,I.jsx)(Zl.Z,{onClick:()=>l(e),children:e.label})]})))})]}),(0,I.jsx)(b.Z,{type:"tertiary",icon:(0,I.jsx)(qs.Z,{}),text:"Clear Messages",onClick:t,isDisabled:!r})]})}let Nl,Ol,Ll,Al=e=>e;const Ml=i().div(Nl||(Nl=Al`
  display: flex;
  flex-direction: column;
  height: 100%;
`)),ql=i().div(Ol||(Ol=Al`
  position: relative;
  flex: 1;
  overflow-y: hidden;
`)),zl=i().div(Ll||(Ll=Al`
  height: 100%;
  overflow-y: auto;
`));function $l({events:e=[],inspector:t,preview:r=null}){const o=s().useRef(),[n,a]=s().useState(!1),[i,l]=s().useState(!1),[c,d]=s().useState({isMatch:()=>!0}),[p,u]=s().useState(new WeakSet),h=s().useMemo((()=>e.filter((e=>p.has(e))).length),[e,p]);s().useEffect((()=>{l(n&&e.length>0)}),[e.slice(-1)[0]]),s().useEffect((()=>{n||l(!1)}),[n]);const g=s().useMemo((()=>new WeakMap),[p,c]),m=s().useMemo((()=>e.filter((e=>{let t=g.get(e);return void 0===t&&(t=!p.has(e)&&c.isMatch(e),g.set(e,t)),t})).reverse()),[e.length,g]),{current:x}=s().useRef(new WeakMap);return(0,I.jsxs)(Ml,{children:[(0,I.jsx)(Tl,{onFilter:d,onClear:()=>u(new WeakSet(e)),isClearable:h<e.length,hasShadow:n}),(0,I.jsxs)(ql,{children:[i&&(0,I.jsx)(ml,{text:"New messages",onClick:()=>{o.current&&(o.current.scrollTop=0)}}),(0,I.jsxs)(zl,{ref:o,onScroll:e=>a(e.target.scrollTop>0),children:[m.map((e=>{let o=x.get(e);return o||x.set(e,o=(0,f.v4)()),(0,I.jsx)(nl,{event:e,preview:r,inspector:t},o)})),h>0&&(0,I.jsx)(ul,{count:h,onRestore:()=>u(new WeakSet)})]})]})]})}function Fl(e){const t={};for(const{key:r,value:o}of e)Object.prototype.hasOwnProperty.call(t,r)?Array.isArray(t[r])?t[r].push(o):t[r]=[t[r],o]:t[r]=o;return t}let _l;const Ul=(0,n.lazy)((()=>r.e(4522).then(r.t.bind(r,64522,23)).then((e=>({default:e.CustomObjectInspector}))))),Wl=i().div(_l||(_l=(e=>e)`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-l) var(--spacing-xl);
  gap: var(--spacing-s) 0;
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
`));function Vl({data:e,label:t,children:r=""}){return(0,I.jsxs)(Wl,{children:[r,e&&(0,I.jsxs)("div",{children:[t&&(0,I.jsx)(Y.Z,{type:"h6",color:"content-color-secondary",text:t}),(0,I.jsx)(n.Suspense,{fallback:(0,I.jsx)(I.Fragment,{children:" "}),children:(0,I.jsx)(Ul,{data:e})}),0===Object.keys(e).length&&(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"(empty)"})]})]})}let Hl,Bl,Gl,Jl=e=>e;const Kl=i()(l.Z)(Hl||(Hl=Jl`
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  ${0}
`),(e=>e.editable&&"margin-left: var(--spacing-l)")),Xl=i()(h.ZP)(Bl||(Bl=Jl`
  white-space: normal;
`)),Yl=i()(l.Z)(Gl||(Gl=Jl`
  color: var(--content-color-primary);
`)),Ql=({label:e,padding:t})=>(0,I.jsx)(Yl,{alignItems:"baseline",padding:t,children:(0,I.jsx)(h.ZP,{type:"body-medium",children:e})}),ec=({linkText:e,onLinkClick:t,padding:r})=>(0,I.jsxs)(Yl,{alignItems:"baseline",padding:r,children:[(0,I.jsx)(h.ZP,{type:"body-medium",children:"Received"})," ",(0,I.jsx)("span",{onClick:t,children:(0,I.jsx)(h.ZP,{type:"link-default",children:e})}),"."]}),tc=()=>{const e=ae(),[t]=Xt(),[r]=Kt();return(0,n.useMemo)((()=>t||r),[e.length])},rc=e=>!(null!=e&&e.find((e=>"source"in e&&"status"===e.source))),oc=(0,g.observer)((function(){const e=ae(),t=ne(),r=(0,m.Z)().response.truncated,o=tc(),s=(0,n.useRef)(o),a=(0,n.useRef)(e);t&&!o&&rc(e)||(s.current=o,a.current=e);const i=(0,n.useCallback)((e=>function({event:e,editable:t=!1,responseJSONSchema:r={},requestJSONSchema:o={}}){const n=ba().setActiveResponseTab;return"responseStarted"===e.source?t?null:0===(null==e?void 0:e.data.length)?(0,I.jsx)(Ql,{label:"No metadata received.",padding:"spacing-s spacing-xl spacing-xl"}):(0,I.jsx)(ec,{onLinkClick:()=>n(1),linkText:"metadata",padding:"spacing-s spacing-xl spacing-xl"}):"status"===e.source?(0,I.jsxs)(Kl,{direction:"column",gap:"spacing-s",padding:"spacing-s spacing-xl spacing-xl",editable:t,children:[!!e.details.description&&(0,I.jsx)(Xl,{type:"body-medium",color:"content-color-secondary",children:e.details.description}),e.details.message&&(0,I.jsx)(h.ZP,{type:"body-medium",color:"content-color-error",children:e.details.message}),!!e.details.details&&(0,I.jsx)(xi,{data:e.details.details,isUnary:!1}),0===(null==e?void 0:e.data.length)?(0,I.jsx)(Ql,{label:"No trailer received.",padding:"spacing-zero"}):(0,I.jsx)(ec,{onLinkClick:()=>n(2),linkText:"trailers",padding:"spacing-zero"})]}):"requestStarted"===e.source?0===e.data.length?(0,I.jsx)(Ql,{label:"No metadata sent.",padding:"spacing-s spacing-xl spacing-xl"}):(0,I.jsx)(Vl,{data:Fl(e.data),label:"Metadata"}):"requestData"===e.source?(0,I.jsx)(ai,{data:t?e.data:JSON.stringify(e.data),languages:{postman_json:"JSON"},readOnly:!t,settings:{validate:!0,schemas:[{schema:o||{}}]}}):"responseData"===e.source?(0,I.jsx)(ai,{data:t?e.data:JSON.stringify(e.data),languages:{postman_json:"JSON"},readOnly:!t,settings:{validate:!0,schemas:[{schema:r||{}}]}}):null}({event:e,editable:!1})),[]);return r?(0,I.jsx)("div",{children:(0,I.jsx)(c.Z,{title:"Response size is too large to display",description:"We could not save the response in the history because it was too large. Invoke the request again to get a response.",children:(0,I.jsx)(d.Z,{name:"illustration-unable-to-pull-request"})})}):s.current?(0,I.jsx)($l,{events:a.current,inspector:i}):(0,I.jsx)(Ci,{})}));let nc;const sc=i().div(nc||(nc=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);

  div {
    background-color: transparent;
  }
`)),ac=(0,g.observer)((function(){const e=ie();return null!=e&&e.length?(0,I.jsx)(sc,{children:(0,I.jsx)(cs.KeyValueEditor,{tableName:"Response Metadata",allowedColumns:["key","value"],showColumns:["key","value"],values:e,disableSorting:!0,disableBulkEdit:!0,disableToggle:!0,disableDelete:!0,disableCreate:!0,nonEditableKeys:!0,nonEditableToggles:!0,nonEditableValues:!0})}):(0,I.jsx)(l.Z,{alignItems:"center",height:"100%",justifyContent:"center",children:(0,I.jsx)(c.Z,{description:"No metadata to show",children:(0,I.jsx)(d.Z,{name:"illustration-page-not-found"})})})}));let ic;const lc=i().div(ic||(ic=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);

  div {
    background-color: transparent;
  }
`)),cc=(0,g.observer)((function(){const e=le();return null!=e&&e.length?(0,I.jsx)(lc,{children:(0,I.jsx)(cs.KeyValueEditor,{tableName:"Response Trailers",allowedColumns:["key","value"],showColumns:["key","value"],values:e,disableSorting:!0,disableBulkEdit:!0,disableToggle:!0,disableDelete:!0,disableCreate:!0,nonEditableKeys:!0,nonEditableToggles:!0,nonEditableValues:!0})}):(0,I.jsx)(l.Z,{alignItems:"center",height:"100%",justifyContent:"center",children:(0,I.jsx)(c.Z,{description:"No trailers to show",children:(0,I.jsx)(d.Z,{name:"illustration-page-not-found"})})})}));let dc,pc,uc=e=>e;const hc=i()(go.Z)(dc||(dc=uc`
  padding: 0;
  overflow-y: auto;

  /**
   * Following selectors help provide TabPanels height of the parent.
   * Ref: apps/request-workbench/src/components/request-editor/index.tsx
   */
  & {
    height: calc(100% - var(--spacing-xxl));
  }

  & > div,
  & > div > div {
    height: 100%;
  }
`)),gc=i().div(pc||(pc=uc`
  margin-top: var(--spacing-xl);
  padding: var(--spacing-s);
  border-radius: 100px;
  background: var(--background-color-error);
  font-size: var(--text-size-m);
  color: var(--content-color-primary);
`)),mc=(0,g.observer)((()=>{const e=re(),{activeResponseTab:t}=ba(),[r]=po();return r?(0,I.jsx)(c.Z,{title:(0,I.jsx)(h.ZP,{color:"content-color-primary",type:"body-large",children:"Could not invoke method"}),description:(0,I.jsxs)(gc,{children:["Error: ",r.message]}),children:(0,I.jsx)(d.Z,{name:"illustration-call-failed"})}):e?(0,I.jsx)(hc,{activeTabIndex:t,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,padding:0,"data-testid":"response-viewer-tabs",children:(0,I.jsxs)(vo.Z,{children:[(0,I.jsx)(fo.Z,{children:(0,I.jsx)(oc,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(ac,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(cc,{})}),(0,I.jsx)(fo.Z,{children:(0,I.jsx)(jo,{featureName:"response test results"})})]})}):(0,I.jsx)(qa,{})}));let xc,vc,fc,yc,bc,jc=e=>e;const Zc=i()(l.Z)(xc||(xc=jc`
  gap: var(--spacing-xl);
  position: absolute;
  inset: 0;
  z-index: 100;
`)),wc=i().div(vc||(vc=jc`
  position: absolute;
  height: 2px;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 101;
`)),Sc=(0,a.keyframes)(fc||(fc=jc`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
`)),kc=i().div(yc||(yc=jc`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    78.82deg,
    var(--background-color-primary),
    var(--base-color-brand) 49.98%,
    var(--background-color-primary)
  );
  animation: ${0} 1s ease-in-out infinite;
`),Sc),Cc=i().div(bc||(bc=jc`
  position: absolute;
  inset: 0;
  z-index: 100;
  background: var(--background-color-primary);
  opacity: 0.8;
`)),Ec=(0,g.observer)((()=>{const e=ne(),t=ae(),r=tc();return e&&!r&&rc(t)?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Cc,{}),(0,I.jsx)(wc,{children:(0,I.jsx)(kc,{})}),(0,I.jsx)(Zc,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",direction:"column",children:(0,I.jsx)(h.ZP,{type:"strong",children:"Invoking method..."})})]}):null}));let Rc;const Pc=i()(l.Z)(Rc||(Rc=(e=>e)`
  min-height: var(--wp-workbench-height);
  height: 100%;
  width: 100%;
  min-width: 600px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
`)),Dc={default:200,collapsed:33,uncollapsed:400,min:100,resizableByDefault:!0},Ic=(0,o.Z)({},Dc,{uncollapsed:200}),Tc={default:400,collapsed:33,uncollapsed:400,min:300,resizableByDefault:!0},Nc=()=>{const{historyId:e}=(0,y.useParams)();return(0,n.useEffect)((()=>{e&&D.AnalyticsService.addEventV2({category:"grpc",action:"open-tab",label:"history",value:1})}),[]),(0,I.jsx)(p.VW,{children:(0,I.jsx)(fa.n,{children:(0,I.jsx)(ja,{children:(0,I.jsxs)(Pc,{direction:"column",children:[(0,I.jsx)(J,{}),(0,I.jsx)(uo,{}),(0,I.jsxs)(u.PaneGroup,{defaultLayout:"vertical",scrollToResize:!0,children:[(0,I.jsxs)(u.Pane,{height:Dc,width:Tc,resizableByDefault:!0,children:[(0,I.jsx)(ho,{}),(0,I.jsx)(va,{})]}),(0,I.jsxs)(u.Pane,{height:Ic,width:Tc,resizableByDefault:!0,children:[(0,I.jsx)(Ec,{}),(0,I.jsx)(La,{}),(0,I.jsx)(mc,{})]})]})]})})})})}},75301:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(40540),n=r(63721);const s=()=>{const e=(0,o.useContext)(n.K);if(!e)throw new Error("useRequestEditorStore should only be used inside RequestEditorContext");return e}},47985:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(75301);const n=()=>(0,o.Z)().request.jsonSchema},84419:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(75301);const n=()=>{const e=(0,o.Z)();return[e.payload.message.content,e.setMessage]}},63721:(e,t,r)=>{r.d(t,{K:()=>w,n:()=>S});var o=r(40540),n=r.n(o),s=r(60607),a=r(39245),i=r(7560),l=r(78476),c=r(84452);var d=r(5858),p=r(60398);const u=function(e="info",t={}){let r=(0,i.Z)({},((0,d.Z)(t),t));return Object.freeze((0,i.Z)({type:e,id:(0,p.v4)(),timestamp:(new Date).toISOString()},r))};var h=r(59363);function g(e=""){return e.toUpperCase().replace(/_/g,"").trim()}const m={requestStarted:"sent-request-header",responseStarted:"received-response-header",requestData:"sent-request-data",responseData:"received-response-data",status:"status"};function x(e){switch(e){case 0:return"success";case 1:case 3:case 5:case 6:case 7:case 8:case 11:case 12:case 16:return"client-error";case 2:case 9:case 10:case 13:case 15:return"server-error";case 4:case 14:return"network-error";default:return null}}const v=e=>{const t={workspaceId:e.requestMetaData.workspaceId,url:e.url,collectionId:null,apiId:null,apiVersionId:null,apiReleaseId:null,method:e.payload.methodPath};return(0,i.Z)({},t,{item:{children:null,createdAt:null,extensions:e.extensions,schema:{source:"auto"},id:null,title:"Untitled gRPC Request",type:"grpc-request",payload:{url:e.url,methodPath:e.payload.methodPath,methodDescriptor:e.payload.methodDescriptor||null,message:{content:e.payload.message.content||""},metadata:e.payload.metadata||[],settings:e.payload.settings}}})};var f=r(83096);const y={auth:{type:"noauth"},documentation:{content:""},events:[{listen:"beforeInvoke",script:{exec:"",type:""}},{listen:"afterResponse",script:{exec:"",type:""}}],schema:{source:""}};var b=r(56880);class j{constructor(e,t){var r,o=this;if(this.activeRequestEditorTab=0,this.events=[],this.url="",this.requestMetaData={workspaceId:null},this.extensions=y,this.cache=null,this.payload={message:{content:""},metadata:[],settings:{},methodDescriptor:"",methodPath:""},this.isRequestStreamed=!1,this.isResponseStreamed=!1,this.apiEditor={selected:null},this.proto={},this.request={startedAt:null,invoking:!1,isCancellable:!1,messages:[],error:null},this.response={responseTime:null,initialized:!1,messages:[],metadata:[],status:null,truncated:!1},this.eventChannel=null,this.setRequestEditorTab=e=>{this.activeRequestEditorTab=e},this.setURL=e=>{this.url=e},this.setJSONSchemaAndDescriptorFromMethod=()=>{var e;const t=this.payload.methodPath,r=null==(e=this.proto.data)?void 0:e.services;if(t&&r)for(const e of r){const r=e.methods.find((r=>`${e.name}.${r.name}`===t));var o;if(r)return this.request.jsonSchema=null==r?void 0:r.jsonSchema,void(this.payload.methodDescriptor=(0,c.generateGRPCBinaryMethodDescriptor)((0,c.safeGenerateGRPCMethodDescriptor)(null==(o=this.proto.data)?void 0:o.descriptor,r.astNode)))}this.request.jsonSchema=null,this.payload.methodPath=""},this.setSelectedMethod=e=>{this.payload.methodPath=e,this.setJSONSchemaAndDescriptorFromMethod()},this.setSecured=e=>{this.payload.settings.secureConnection=e},this.setRequestMetadata=e=>{this.payload.metadata=e},this.setMessage=e=>{this.payload.message.content=e},this.setIsRequestStreamed=e=>{this.isRequestStreamed=e},this.setIsResponseStreamed=e=>{this.isResponseStreamed=e},this.sendRequest=async function(){o.payload.methodPath&&o.url&&(b.AnalyticsService.addEventV2({category:"grpc",action:"send-request",label:"grpc-workbench",value:1}),o.events=[],o.request.invoking=!0,o.request.isCancellable=!0,o.request.error=null,o.eventChannel=await(0,c.sendGRPCRequestViaAgent)((e=>{var t,r,o,n,s;const a=(0,l.toJS)(e),i=null==(t=a.payload.methodPath)?void 0:t.split(".").slice(0,-1).join("."),d=null==(r=a.payload.methodPath)?void 0:r.split(".").pop();let p=(null==(o=a.extensions)?void 0:o.auth)||{type:"noauth"};"noauth"===p.type&&(p=null);const u=a.isRequestStreamed?{}:JSON.parse(a.payload.message.content||"{}");return{location:{url:a.url,descriptor:(null==(n=a.proto.data)?void 0:n.descriptor)||{},service:i,method:d},message:u,workingDir:"/Users/Postman/files",metadata:(null==(s=a.payload.metadata)?void 0:s.filter((e=>e.enabled)))||[],auth:p,certs:{ca:null,client:null,key:null,pfx:null,passphrase:null},options:(0,c.generateSettingsObject)(a.payload.settings),proxyOptions:{useSystemProxy:!1,ignoreProxyEnvironmentVariables:!1,proxyConfigList:[{match:"http+https://*:*/*",port:8080,disabled:!0}]}}})(o),{variables:{},requestStarted:({metadata:e,host:t})=>{(0,l.runInAction)((()=>{o.isRequestStreamed&&(o.activeRequestEditorTab=0),o.response.truncated=!1,o.response.metadata=[],o.events.push(u("info",{data:e,summary:`Sent request to ${t}`,source:"requestStarted"})),(o.isRequestStreamed||o.isResponseStreamed)&&(o.response.initialized=!0),o.request.startedAt=(new Date).toISOString()}))},responseStarted:({metadata:e,host:t})=>{(0,l.runInAction)((()=>{o.response.messages=[],o.isRequestStreamed||o.isResponseStreamed||(o.request.isCancellable=!1),o.events.push(u("info",{data:e,summary:`Received response from ${t}`,source:"responseStarted"})),o.response.initialized=!0,o.response.metadata=e}))},requestData:({data:e})=>{(0,l.runInAction)((()=>{const t=u("outgoing",{data:e,source:"requestData"});o.events.push(t),o.request.messages=[...o.request.messages,{data:e,timestamp:t.timestamp}]}))},responseData:({data:e})=>{(0,l.runInAction)((()=>{const t=u("incoming",{data:e,source:"responseData"});o.events.push(t),o.response.messages=[...o.response.messages,{data:e,timestamp:t.timestamp}]}))},status:e=>{const{code:t,codeName:r,message:n,metadata:s}=e,{tooltip:a,summary:c,description:d}=h.F[t]||{};(0,l.runInAction)((()=>{o.events.push(u(t?"error":"success",{data:s,summary:c||"Unrecognized status code",details:{code:t,codeName:r,tooltip:a||"",description:d||"",message:g(n)===g(r)?"":n||""},source:"status"}));const l={result:x(t),summary:d||r},p=function(e,{requestStream:t,responseStream:r}){return e.map((e=>{let o,n=m[e.source];switch(n||(n="invalid event"),e.source){case"requestStarted":o={metadata:e.data,isRequestStreamed:!!t,isResponseStreamed:!!r};break;case"responseStarted":o={metadata:e.data};break;case"requestData":case"responseData":o={data:e.data};break;case"status":o={statusCode:e.details.code,statusMessage:e.details.message||e.details.codeName,metadata:e.data};break;default:o=null}return{type:n,timestamp:e.timestamp,payload:o}}))}(o.events,{requestStream:o.isRequestStreamed,responseStream:o.isResponseStreamed}),h=[v(o),...p,l];(0,f.createGRPCHistoryItem)(h).catch((()=>{})),o.request.startedAt&&(o.response.responseTime=Date.now()-new Date(o.request.startedAt).getTime()),o.request.invoking=!1,o.request.isCancellable=!1,o.response.status=(0,i.Z)({},e,{tooltip:a,summary:c,description:d}),o.eventChannel=null}))}}))},this.loadProto=async function(e){try{var t,r;o.cancelProtoLoading(e);const d=new AbortController;let p,u,h;switch((0,l.runInAction)((()=>{o.proto=(0,i.Z)({},o.proto,{cancelController:d,error:null,isFetching:!0,fetchingSource:e})})),e){case"reflection":h={authentication:(0,l.toJS)(o.extensions.auth),metadata:(0,l.toJS)(o.payload.metadata),settings:(0,l.toJS)(o.payload.settings)},u=await(0,c.loadProtoFromReflection)(o.url,!1,h),"updatedSettings"in u&&u.updatedSettings&&(p=u.updatedSettings);break;case"file":var n,s;u=await(0,c.loadProtoFromFile)(null==(n=o.apiEditor.files)||null==(n=n[0])?void 0:n.path,{importPaths:(null==(s=o.apiEditor.importPaths)||null==(s=s.filter((e=>e.selected)))?void 0:s.map((e=>e.path)))||[]});break;case"url":var a;u=await(0,c.loadProtoFromURL)(null==(a=o.apiEditor.url)?void 0:a.data)}if(!u||null!=(t=o.proto.cancelController)&&t.signal.aborted||(null==(r=o.proto.cancelController)?void 0:r.signal)!==d.signal)return;(0,l.runInAction)((()=>{var t,r,n;o.proto=(0,i.Z)({},o.proto,{error:(null==(t=u)?void 0:t.error)||null,data:(null==(r=u)?void 0:r.proto)||null,isFetching:!1,fetchingSource:null,source:e}),o.payload.settings=(0,i.Z)({},o.payload.settings,p),null!=(n=u)&&n.error||(o.apiEditor=(0,i.Z)({},o.apiEditor,{files:null,url:null,selected:null})),o.setJSONSchemaAndDescriptorFromMethod()}))}catch(e){(0,l.runInAction)((()=>{o.proto={error:e}}))}},this.resetProtoError=()=>{this.proto.error=null},this.setRequestAuthState=e=>{this.extensions.auth=e},this.setRequestSettings=e=>{this.payload.settings=e},this.sendStreamingMessage=()=>{this.eventChannel&&this.payload.message.content&&this.eventChannel.emit("write",JSON.parse(this.payload.message.content))},this.endStreaming=()=>{this.eventChannel&&this.request.invoking&&(this.isRequestStreamed||this.isResponseStreamed)&&this.eventChannel.emit("end")},this.cancelRequest=()=>{this.eventChannel&&this.request.isCancellable&&this.request.invoking&&this.eventChannel.emit("cancel")},this.cancelProtoLoading=e=>{var t;null!=(t=this.proto)&&t.cancelController&&this.proto.cancelController.abort(),this.proto.isFetching=!1,this.proto.fetchingSource=null},this.setSelectedAPIEditorMode=e=>{this.apiEditor.selected=e},this.setAPIEditorProtoURL=e=>{this.apiEditor.url=e},this.setAPIEditorImportPaths=e=>{this.apiEditor.importPaths=e},this.setAPIEditorFiles=e=>{this.apiEditor.files=e},this.openProtoFileSelectorDialog=()=>c.agentManager.agent.grpc("openProtoSelectorDialog"),this.openProtoImportPathSelectorDialog=()=>c.agentManager.agent.grpc("openFolderSelectorDialog"),this.setRequestError=e=>{this.request.error=e},(0,l.makeObservable)(this,{activeRequestEditorTab:!0,events:!0,url:!0,apiEditor:!0,payload:!0,extensions:!0,proto:!0,isRequestStreamed:!0,isResponseStreamed:!0,request:!0,response:!0,setRequestEditorTab:l.action,setURL:l.action,setSecured:l.action,setRequestMetadata:l.action,setSelectedMethod:l.action,resetProtoError:l.action,setMessage:l.action,setIsRequestStreamed:l.action,setIsResponseStreamed:l.action,setRequestAuthState:l.action,setRequestSettings:l.action,sendRequest:l.action,cancelRequest:l.action,endStreaming:l.action,cancelProtoLoading:l.action,setSelectedAPIEditorMode:l.action,setAPIEditorFiles:l.action,setAPIEditorProtoURL:l.action,setAPIEditorImportPaths:l.action,setRequestError:l.action}),null!=t&&t.workspaceId&&(this.requestMetaData={workspaceId:t.workspaceId}),!e||0===e.length)return;const n=!(!(s=e)||0===s.length)&&s.slice(1,-1).some((e=>void 0===e.payload));var s;if(n)return this.response.truncated=n,void(this.response.initialized=!0);const a=e[0];if(a){this.requestMetaData={workspaceId:a.workspaceId},this.url=a.url,this.events=(p=e,j=this.url,p.flatMap((e=>{switch(e.type){case"sent-request-header":return[{type:"info",source:"requestStarted",timestamp:e.timestamp,data:e.payload.metadata,summary:`Sent request to ${j.replace(/^([\d+.a-z-]+):\/\//i,"")||"unknown"}`}];case"received-response-header":return[{type:"info",source:"responseStarted",timestamp:e.timestamp,data:e.payload.metadata,summary:`Received response from ${j.replace(/^([\d+.a-z-]+):\/\//i,"")||"unknown"}`}];case"sent-request-data":return[{type:"outgoing",source:"requestData",timestamp:e.timestamp,data:e.payload.data}];case"received-response-data":return[{type:"incoming",source:"responseData",timestamp:e.timestamp,data:e.payload.data}];case"status":{const t=e.payload.statusCode,r=e.payload.statusMessage,{codeName:o,tooltip:n,summary:s,description:a}=h.F[t]||{};return[{type:t?"error":"success",source:"status",timestamp:e.timestamp,data:e.payload.metadata,summary:s||"Unrecognized status code",details:{code:t,codeName:o,tooltip:n||"",description:a||"",message:g(r)===g(o)?"":r||""}}]}default:return[]}}))||[]),this.extensions=a.item.extensions,this.payload=a.item.payload;const t=(0,c.getGRPCCachedMethodDetails)(a);var d;null!=t&&t.descriptor&&null!=t&&t.service&&(this.cache=t,this.request.jsonSchema=null==(d=t.service.methods[0])?void 0:d.jsonSchema,this.proto={data:{services:[t.service],descriptor:t.descriptor,source:"cache"},source:"cache",isFetching:!1,error:null})}var p,j;const Z=e.find((e=>"type"in e&&"sent-request-header"===e.type)),w=e.find((e=>"type"in e&&"received-response-header"===e.type)),S=e.find((e=>"type"in e&&"status"===e.type));this.isRequestStreamed=Z.payload.isRequestStreamed,this.isResponseStreamed=Z.payload.isResponseStreamed;const k=e.filter((e=>"type"in e&&"received-response-data"===e.type));this.response.messages=k.map((e=>({data:e.payload.data,timestamp:e.timestamp})));const C=e.filter((e=>"type"in e&&"sent-request-data"===e.type));if(this.request.messages=C.map((e=>({data:e.payload.data,timestamp:e.timestamp}))),w&&null!=(r=w.payload)&&r.metadata&&(this.response.metadata=w.payload.metadata),S){this.response.initialized=!0;const{tooltip:e,summary:t,description:r}=h.F[S.payload.statusCode]||{};this.response.status={code:S.payload.statusCode,codeName:S.payload.statusMessage,metadata:S.payload.metadata,tooltip:e,summary:t,description:r,message:S.payload.statusMessage},Z&&(this.response.responseTime=new Date(S.timestamp).getTime()-new Date(Z.timestamp).getTime())}}}var Z=r(52322);const w=n().createContext({}),S=({children:e})=>{const{workspaceId:t,historyId:r}=(0,s.useParams)();if(!(0,s.useInRouterContext)())throw new Error("RequestEditorProvider must be used within a Router");const n=(()=>{const e=(0,a.useLoaderData)();return null!=e&&e.requestData?e.requestData:null})(),i=(0,o.useMemo)((()=>new j(n,{workspaceId:t})),[r]);return(0,Z.jsx)(w.Provider,{value:i,children:e})}}}]);
//# sourceMappingURL=2018.a5192957491a6024.js.map