"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[4293],{84293:(e,t,n)=>{n.d(t,{Z:()=>En});var s=n(40540),i=n.n(s),r=n(32220),a=n(98283),o=n(494),l=n(69356),d=n.n(l),c=n(31660),p=n.n(c),u=n(58560),h=n(35736),g=n(74962),y=n(63622),v=n(59530),x=n.n(v),f=n(52322);let m,b,j=e=>e;const w=x()(u.Z)(m||(m=j`
  top: 50%;
  position: relative;
`)),_=x().div(b||(b=j`
  top: 50%;
  position: relative;
  text-align: center;
  vertical-align: middle;
`)),S=e=>{const{searchQuery:t}=e;return t?(0,f.jsx)(_,{className:"console-list__empty",children:`No results found for "${t}"`}):(0,f.jsxs)(w,{direction:"column",justifyContent:"center",alignItems:"center",children:[(0,f.jsx)(g.Z,{type:"h4",text:"No logs yet"}),(0,f.jsx)(y.ZP,{type:"para",children:"Send a request to view its details in the console."})]})};var k=n(22833),E=n.n(k),C=n(21466);var Z=n(7560);const T=["log","info","warn","error"],q=()=>({items:[],visibleEvents:[],eventCount:0,expandSet:new Set,isLoading:!0,searchQuery:"",showTimestamp:!1,errorCount:0,warningCount:0,filterLevels:T,hideNetwork:!1,isBlobViewerOpen:!1});function L(e,t){let n=0;for(const s of e)s.severity===t&&n++;return n}function O(e,t,n){return e.filter((e=>"clear"===e.severity||t.includes(e.severity)&&(!n||"network"!==e.type)))}function R(e,t){return"RESET_CONSOLE"===t.type?q():"SET_BLOB_VIEWER_OPEN"===t.type?(0,Z.Z)({},e,{isBlobViewerOpen:t.isOpen}):"RECEIVED_MESSAGES"===t.type?(0,Z.Z)({},e,{isLoading:!1,visibleEvents:O(t.messages,e.filterLevels,e.hideNetwork),items:t.messages,eventCount:t.messages.length,errorCount:L(t.messages,"error"),warningCount:L(t.messages,"warn")},0===t.messages.length&&{expandSet:new Set}):"EXPAND_ITEM"===t.type?(0,Z.Z)({},e,{expandSet:t.expandSet}):"SET_FILTER_LEVELS"===t.type?(0,Z.Z)({},e,{filterLevels:t.filterLevels,visibleEvents:O(e.items,t.filterLevels,e.hideNetwork)}):"TOGGLE_SHOW_TIMESTAMP"===t.type?(0,Z.Z)({},e,{showTimestamp:!e.showTimestamp}):"TOGGLE_HIDE_NETWORK"===t.type?(0,Z.Z)({},e,{hideNetwork:!e.hideNetwork,visibleEvents:O(e.items,e.filterLevels,!e.hideNetwork)}):e}var B=n(29875),I=n(95780);const $=(0,s.createContext)({dispatch:()=>{},state:q()}),N=({children:e})=>{const[t,n]=(0,s.useReducer)(R,q()),i=(0,s.useMemo)((()=>new B.InMemoryKVStorage("Console")),[]),r=(0,s.useCallback)((e=>{n({type:"RECEIVED_MESSAGES",messages:e||[]})}),[]);return(0,s.useEffect)((()=>function(e){return C.VSCodeCommunicationsService.subscribe("CLEAR_CONSOLE",(()=>{e()}))}((()=>{n({type:"RESET_CONSOLE"}),I.pmConsole.clear()}))),[]),(0,s.useEffect)((()=>{const e=i.subscribe(I.pmConsole.getTimelineId(),r);return()=>e()}),[r,i]),(0,f.jsx)($.Provider,{value:{state:t,dispatch:n},children:e})};var A=n(77986),z=n(84591),P=n(47503),V=n(16913);let F;const H=(0,s.lazy)((()=>n.e(4522).then(n.t.bind(n,64522,23)).then((e=>({default:e.Wf}))))),W=(0,s.lazy)((()=>n.e(4522).then(n.t.bind(n,64522,23)).then((e=>({default:e.CustomObjectInspector}))))),D=x().span(F||(F=(e=>e)`
  gap: var(--spacing-m);

  .wf__item {
    white-space: pre-wrap;

    .wf__sp {
      background: radial-gradient(
        circle,
        var(--content-color-primary),
        rgb(192 192 0 / 0%) 1px
      );
      opacity: 0.6;
    }

    .wf__tb {
      font-size: 6px;
    }

    .wf__nl {
      /* To establish some dimension */
      display: block;
      width: 8px;
      position: relative;
    }

    .wf__tk {
      word-break: break-all;
      line-height: 14px;
    }

    .wf__tb::before {
      content: '→';
      opacity: 0.6;
      font-size: var(--text-size-xs);
      position: absolute;
    }

    .wf__nl::before {
      content: '↵';
      opacity: 0.4;
      font-size: var(--text-size-xs);
      position: absolute;
      padding-left: 0.5px;
    }

    .wf__ch {
      opacity: 0.6;
      margin: 1px;
    }

    .wf__qt {
      &::after {
        content: '"';
        opacity: 0.6;
      }
    }
  }
`));function M(e){if(""===e)return[(0,f.jsx)("span",{className:"c-li__empty",title:"Empty String"},0)];const t="string"==typeof e,n=String(e).split("\n"),s=t&&n.length>e.length,r=t&&1===n.length,a=[];a[0]=(0,f.jsx)("span",{className:"c-li__msg-str",children:(0,f.jsx)(H,{quoteStart:t,quoteEnd:r,sentence:n[0]},"wf-0")},"spch-0");for(let e=1;e<n.length;e++)a[e]=(0,f.jsxs)(i().Fragment,{children:[(0,f.jsx)("span",{className:"c-li__r-fill"},`spfl-${e}`),(0,f.jsx)("span",{className:"c-li__msg-str",children:(0,f.jsx)(H,{sentence:n[e],quoteEnd:t&&e===n.length-1},`wf-${e}`)},`spch-${e}`)]},e);return s&&(a[n.length-1]=(0,f.jsxs)(i().Fragment,{children:[t&&(0,f.jsx)(H,{quoteEnd:!0}),(0,f.jsx)("span",{className:"c-li__r-fill"},"spfl__last")]})),a}const U=e=>function(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)}(e.message)?(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("span",{}),children:(0,f.jsx)(W,{data:e.message,isExpanded:!1,withPreview:!0})}):(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("span",{}),children:(0,f.jsx)(D,{children:M(e.message)})});var G=n(91613),J=n.n(G),K=n(26486),Q=n(70627),X=n(20684),Y=n(49886),ee=n(38796),te=n(56415),ne=n(3341);function se(e){return e instanceof Set?`Set {${[...e.values()].join(", ")}}`:e instanceof Map?`Map [ ${[...e.entries()].map((e=>`${se(e[0])} => ${se(e[1])}`)).join(", ")} ]`:"symbol"==typeof e||"bigint"==typeof e?e.toString():Array.isArray(e)?"[...]":null==e?String(e):"object"==typeof e?`{ ${Object.getOwnPropertyNames(e).map((t=>`${t}: ${se(e[t])}`)).join(", ")} }`:String(e)}function ie(e){return null==e||(Array.isArray(e)?0===e.length:0===Object.keys(e).length)}function re(e){switch(e.type){case"log":return Array.isArray(e.details)?e.details.map((e=>se(e))).join(", "):se(e.details);case"exception":return`${e.details.name||Error}: ${e.details.message||""}`;case"network":{const t=e.details,n={};if(ie(t.error)||(n.Error=t.error),ie(t.warning)||(n.Warning=t.warning),ie(t.session)||(n.Network=t.session),t.request&&!ie(t.request.certificate)&&(n["Client Certificate"]=t.request.certificate),t.request&&!ie(t.request.headers)&&(n["Request Headers"]=t.request.headers),t.request.body){const e=t.request.body;if("___ignored___"in e)n["Request Body"]="The console only shows request bodies smaller than 10 KB inline. To view the complete body, inspect it by clicking Open.";else if("___unsupported___"in e)n["Request Body"]="";else switch(e.mode){case"raw":n["Request Body"]=JSON.stringify(e.raw);break;case"formdata":n["Request Body"]=JSON.stringify(e.formdata);break;case"urlencoded":n["Request Body"]=JSON.stringify(e.urlencoded);break;case"graphql":n["Request Body"]=JSON.stringify(e.graphql);break;case"file":n["Request Body"]=JSON.stringify(e.file);break;default:n["Request Body"]=JSON.stringify(e)}}if(t.response&&!ie(t.response.headers)&&(n["Response Headers"]=t.response.headers),t.response&&!ie(t.response.body)){const e=t.response.body||{};n["Response Body"]="string"==typeof e?e:"___ignored___"in e?"The console only shows response bodies smaller than 10 KB inline. To view the complete body, inspect it by clicking Open.":e}return`${function(e){return`${e.details.request.method} ${e.details.request.href||e.details.request.url}`}(e)}: ${JSON.stringify(n,null,2)}`}case"raw":return Array.isArray(e.details)?e.details.map((e=>se(e))).join(", "):se(e)}}var ae=n(71453);let oe,le,de=e=>e;const ce=(0,s.lazy)((()=>n.e(4522).then(n.t.bind(n,64522,23)).then((e=>({default:e.Wf}))))),pe=x().div(oe||(oe=de`
  word-break: break-all;
  line-height: var(--line-height-m);
  background: var(--background-color-tertiary);
  padding: var(--spacing-s);
  color: var(--content-color-primary);
  border-radius: var(--border-radius-default);

  /* Whitespace formatter styles */
  .wf__item {
    white-space: pre-wrap;

    .wf__sp {
      background: radial-gradient(
        circle,
        var(--content-color-primary),
        rgb(192 192 0 / 0%) 1px
      );
      opacity: 0.6;
    }

    .wf__tb {
      font-size: 6px;
    }

    .wf__nl {
      /* To establish some dimension */
      display: block;
      width: 8px;
      position: relative;
    }

    .wf__tk {
      word-break: break-all;
      line-height: 14px;
    }

    .wf__tb::before {
      content: '→';
      opacity: 0.6;
      font-size: var(--text-size-xs);
      position: absolute;
    }

    .wf__nl::before {
      content: '↵';
      opacity: 0.4;
      font-size: var(--text-size-xs);
      position: absolute;
      padding-left: 0.5px;
    }

    .wf__ch {
      opacity: 0.6;
      margin: 1px;
    }

    .wf__qt {
      &::after {
        content: '"';
        opacity: 0.6;
      }
    }
  }
`)),ue=x()(K.Z)(le||(le=de`
  font-family: inherit;
`)),he=e=>{return(0,f.jsx)("div",{children:(t=e.data,null==t?String(t):t.___unsupported___?(0,f.jsx)("span",{children:"The console does not support viewing bodies with media files."}):t.___ignored___?(0,f.jsxs)(y.ZP,{type:"para",children:["Body is more than 10 KB and can only be viewed in editor. ",(0,f.jsx)(ue,{type:"monochrome-plain",onClick:e.viewLargeBody,text:"View in editor"})]}):""===t?(0,f.jsx)("span",{}):(0,f.jsx)(pe,{children:(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(ce,{sentence:t})})}))});var t};let ge,ye,ve,xe,fe,me,be,je=e=>e;const we=(0,s.lazy)((()=>n.e(4522).then(n.t.bind(n,64522,23)).then((e=>({default:e.CustomObjectInspector}))))),_e=(0,s.lazy)((()=>n.e(4522).then(n.t.bind(n,64522,23)).then((e=>({default:e.Wf})))));function Se(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)}const ke=x()(z.Z)(ge||(ge=je`
  margin-left: var(--spacing-xs);
`)),Ee=x()(K.Z)(ye||(ye=je`
  margin-left: var(--spacing-xs);
  height: var(--size-xs);
  width: var(--size-xs);
`)),Ce=x().div(ve||(ve=je`
  line-height: var(--line-height-m);
  color: var(--content-color-primary);
`)),Ze=x().span(xe||(xe=je`
  color: var(--content-color-info);
  overflow-wrap: break-word;
`)),Te=x().div(fe||(fe=je`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: var(--content-color-secondary);
  padding-bottom: 6px;
`)),qe=x().div(me||(me=je`
  cursor: pointer;
  display: flex;
  align-items: center;
`)),Le=x().div(be||(be=je`
  width: 100%;
  margin-left: var(--spacing-xl);
  padding: var(--spacing-xs) var(--spacing-zero);
`)),Oe=e=>{const[t,n]=i().useState(e.expand);return(0,f.jsxs)(Te,{children:[(0,f.jsxs)(qe,{onClick:e=>{e.stopPropagation(),n(!t)},"aria-label":`network-item-section-expand-button-${e.name}`,children:[t?(0,f.jsx)(te.Z,{}):(0,f.jsx)(ne.Z,{}),e.name]}),e.info&&(0,f.jsx)(ke,{title:e.info}),e.isBody&&function(){var t;const n=!(null!=(t=e.data)&&t.___unsupported___);return e.canViewInEditor&&n&&(0,f.jsx)(Ee,{type:"tertiary",icon:(0,f.jsx)(ae.Z,{}),onClick:t=>{t.stopPropagation(),e.viewLargeBody&&e.viewLargeBody(e.bodyType||"")},tooltip:"View in editor","data-testid":"view-body-in-editor",size:"small"})}(),t&&(0,f.jsx)(Le,{"aria-label":`network-item-section-expanded-${e.name}`,children:e.isBody?function(){var t,n;const i=!(null!=(t=e.data)&&t.___ignored___||null!=(n=e.data)&&n.___unsupported___);return i&&Se(e.data)?(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(we,{data:e.data,isExpanded:!1})}):(0,f.jsx)(he,{name:e.name,data:e.data,viewLargeBody:()=>{e.viewLargeBody&&e.viewLargeBody(e.bodyType||"")},bodyType:e.bodyType,isExpanded:!i,canViewInEditor:e.canViewInEditor})}():Array.isArray(e.data)?e.data.map(((e,t)=>{return(0,f.jsxs)(Ce,{children:[(0,f.jsx)("span",{children:(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(_e,{sentence:e.key})})}),(0,f.jsx)("span",{children:": "}),(0,f.jsx)(Ze,{children:(n=e.value,"string"==typeof n?(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(_e,{quoteStart:!0,sentence:n,quoteEnd:!0})}):(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(_e,{sentence:n})}))})]},t);var n})):Se(e.data)?(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(we,{data:e.data,isExpanded:e.expand})}):(0,f.jsx)("span",{children:(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:" "}),children:(0,f.jsx)(_e,{sentence:e.data})})})})]})},Re="xhr",Be={ipc:"app",ws:"desktop",[Re]:"browser",cloud:"cloud"},Ie={BROWSER:{key:"browser",label:"Browser"},DESKTOP:{key:"desktop",label:"Desktop"},CLOUD:{key:"cloud",label:"Cloud"}};function $e(e){return e.reduce(((e,t)=>{if(t.disabled)return e;const n=e[t.key];return n?Array.isArray(n)?n.push(t.value):e[t.key]=[n,t.value]:e[t.key]=t.value,e}),{})}function Ne(e,t){if(0!==e.request.headers.length)return!t&&e.error?"This request did not get sent completely and might not have all the required system headers.":e&&e.agentUsed===Re?"Some headers may be missing. Send this request with the Postman Desktop Agent to view accurate request headers.":void 0}const Ae=e=>{var t,n,s;const i=e.event.details.request.certificate,r=e.event.details.request.proxy,a=e.event.details.request.headers,o=null==(t=e.event.details.response)?void 0:t.headers,l=(d=e.event.details.request).body?"formdata"===d.body.mode?$e(d.body.formdata):"urlencoded"===d.body.mode?$e(d.body.urlencoded):"file"===d.body.mode?d.body.file:"graphql"===d.body.mode?d.body.graphql:"___ignored___"in d.body?d.body:d.body.raw:null;var d;const c=null==(n=e.event.details.request.body)?void 0:n.mode,p=function(e){var t,n;if(e&&e.body)return"string"==typeof e.body?e.body:null!=(t=e.body)&&t.___unsupported___?{___unsupported___:!0}:null!=(n=e.body)&&n.___ignored___?{___ignored___:!0}:e.body}(e.event.details.response),u=e.event.details.session,h=(null==(s=e.event.details.history)?void 0:s.execution.sessions)||{},g=Object.keys(h),y=!ie(h[g[g.length-1]]),v=e.event.details.agentUsed,x="browser"===window.SDK_PLATFORM&&v in Be&&`${Ie[Be[v].toUpperCase()].label} Agent`,m=x?Object.assign({agent:x},u):u;function b(t){e.viewLargeBody&&e.viewLargeBody(e.event.id,t)}function j({name:e,data:t,isExpanded:n=!1,info:s=null,bodyType:i,canViewInEditor:r,isBody:a}){return(0,f.jsx)(Oe,{expand:n,name:e,data:t,info:s,bodyType:i,canViewInEditor:r,isBody:a,viewLargeBody:b})}return(0,f.jsxs)("div",{children:[!ie(i)&&j({name:"Client Certificate",data:i}),!ie(r)&&j({name:"Proxy",data:r,isExpanded:!0}),!ie(m)&&j({name:"Network",data:m,info:!y&&e.event.details.error&&"This request did not get sent completely and might not have all the required network information."}),!ie(a)&&j({name:"Request Headers",data:a,isExpanded:!0,info:Ne(e.event.details,y)}),!ie(l)&&j({name:"Request Body",data:l,bodyType:"request",canViewInEditor:"raw"===c,isBody:!0}),!ie(o)&&j({name:"Response Headers",data:o,isExpanded:!0,info:v===Re&&"Some headers may be missing. Send this request with the Postman Desktop Agent to view accurate response headers."}),!ie(p)&&j({name:"Response Body",data:p,bodyType:"response",canViewInEditor:!0,isBody:!0})]})},ze=/[/\\]/g;const Pe=e=>{var t,n,s;function i(t){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(y.ZP,{type:"para",children:["The console only shows ",t," bodies smaller than 10 KB inline. To view the complete body, inspect it by clicking ",(0,f.jsx)(K.Z,{type:"monochrome-plain",onClick:()=>{e.viewLargeBody&&e.viewLargeBody(e.eventId,t)},text:"View in editor"})]}),(0,f.jsx)("div",{children:"   "})]})}const r=function(){const{data:t}=e,n=function(e){const t=(e.headers||[]).filter((e=>!ie(e)&&!e.disabled)).map((e=>`${e.key||e.name}: ${e.value}`)),n=new URL(e.href||e.url),s=e.httpVersion||"1.1",i=encodeURI(n.search);return[`${e.method} ${n.pathname}${i} HTTP/${s}`,...t]}(t.request),s=function(e){var t;let n;switch((null==(t=e.body)?void 0:t.mode)||""){case"formdata":{var s;const t=e.headers.find((e=>"content-type"===String(e.key).toLowerCase()));let i=t&&t.value.split(";").map((e=>e.trim())).find((e=>e.startsWith("boundary=")));i=i&&i.slice(9),i||(i="--------------------------postman"),i=`--${i}`;const r=((null==(s=e.body)?void 0:s.formdata)||[]).filter((e=>!e.disabled)).map((e=>{let t,n=`Content-Disposition: form-data; name="${e.key}"`;var s;return"string"==typeof e.src&&(t=null!=(s=e.src.split(ze).pop())?s:""),t||"file"!==e.type||(t=""),"string"==typeof t&&(n+=`; filename="${t}"`),t&&/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)&&(n+=`; filename*="UTF-8''${encodeURIComponent(t).replace(/['()*]/g,(e=>`%${(e.codePointAt(0)||"").toString(16)}`)).replace(/%(?:7C|60|5E)/g,decodeURIComponent)}"`),n+="\r\n",e.contentType&&(n+=`Content-Type: ${e.contentType}\r\n`),n+="\r\n","file"===e.type&&t?n+=`<${t}>`:"string"==typeof e.value&&(n+=e.value),n+="\r\n",n})).join(`${i}\r\n`);n=r?`${i}\r\n${r}${i}--`:"";break}case"urlencoded":var i;n=((null==(i=e.body)?void 0:i.urlencoded)||[]).filter((e=>!e.disabled)).map((e=>new URLSearchParams({[e.key]:e.value}).toString())).join("&");break;case"raw":var r;n=null==(r=e.body)?void 0:r.raw;break;case"graphql":{var a;const t=[],s=null==(a=e.body)?void 0:a.graphql;Object.hasOwnProperty.call(s,"query")&&"string"==typeof s.query&&t.push(`"query":${JSON.stringify(s.query)}`),Object.hasOwnProperty.call(s,"operationName")&&"string"==typeof s.operationName&&t.push(`"operationName":${JSON.stringify(s.operationName)}`),Object.hasOwnProperty.call(s,"variables")&&"string"==typeof s.variables&&""!==s.variables&&t.push(`"variables":${s.variables}`),n=`{${t.join(",")}}`;break}}return n}(t.request),i=function(e){const{response:t,redirect:n}=e;if(!t)return[];const s=(t.headers||[]).map((e=>`${(null==e?void 0:e.key)||(null==e?void 0:e.name)}: ${null==e?void 0:e.value}`));return[`HTTP/${t.httpVersion||"1.1"} ${n?t.statusCode:t.code}${t.status?` ${t.status}`:""}`,...s]}(t);var r;return{requestHeaders:n,requestBody:s,responseHeaders:i,responseBody:(r=t.response)?r.body:""}}(),a=null==(t=e.data)||null==(t=t.response)||null==(t=t.body)?void 0:t.___unsupported___,o=null==(n=e.data)||null==(n=n.request)||null==(n=n.body)?void 0:n.___ignored___,l=null==(s=e.data)||null==(s=s.response)||null==(s=s.body)?void 0:s.___ignored___;return(0,f.jsx)("div",{"aria-label":"console-network-item-raw",children:(0,f.jsxs)("div",{children:[!ie(r.requestHeaders)&&(0,f.jsxs)("div",{children:[r.requestHeaders.map(((e,t)=>e&&(0,f.jsx)("div",{children:e},`request-line-${t}`))),(0,f.jsx)("div",{children:"   "})]}),o?i("request"):!ie(r.requestBody)&&(0,f.jsxs)("div",{children:[r.requestBody.split("\n").map(((e,t)=>e&&(0,f.jsx)("div",{children:e},`request-body-line-${t}`))),(0,f.jsx)("div",{children:"   "})]}),!ie(r.responseHeaders)&&(0,f.jsxs)("div",{children:[r.responseHeaders.map(((e,t)=>e&&(0,f.jsx)("div",{children:e},`response-line-${t}`))),(0,f.jsx)("div",{children:"   "})]}),a&&(0,f.jsx)("span",{children:"The console does not support viewing response bodies with media files."})||(l?i("response"):!ie(r.responseBody)&&(0,f.jsx)("div",{children:r.responseBody.split("\n").map(((e,t)=>e&&(0,f.jsx)("div",{children:e},`response-body-line-${t}`)))}))]})})};let Ve,Fe,He,We,De,Me,Ue,Ge,Je,Ke,Qe,Xe=e=>e;const Ye=x()(Q.Z)(Ve||(Ve=Xe`
  width: 12px;
`)),et=x().div(Fe||(Fe=Xe`
  padding-bottom: var(--spacing-s);
`)),tt=x().div(He||(He=Xe`
  flex: 1;
  width: 100%;
  min-width: 0;
`)),nt=x().div(We||(We=Xe`
  display: flex;
  align-items: center;
  cursor: pointer;
`)),st=x().div(De||(De=Xe`
  margin-left: auto;
  color: var(--content-color-success);
`)),it=x().div(Me||(Me=Xe`
  height: 12px;
  border: 0.5px solid var(--border-color-default);
  margin-right: 6px;
  margin-left: 6px;
`)),rt=x().div(Ue||(Ue=Xe`
  color: var(--content-color-success);
`)),at=x().div(Ge||(Ge=Xe`
  display: flex;
  padding-left: var(--spacing-l);
  padding-top: var(--spacing-s);
`)),ot=x()(K.Z)(Je||(Je=Xe`
  width: 100px;
  justify-content: flex-end;
  align-self: flex-start;
  margin-left: auto;
`)),lt=x().div(Ke||(Ke=Xe`
  flex: 1;
  width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
`)),dt=x().div(Qe||(Qe=Xe`
  display: flex;

  i {
    padding-left: 6px;
  }
`));function ct({details:e}){return e.error?(0,f.jsx)(et,{children:`Error: ${e.error.message}`}):e.warning?(0,f.jsx)(et,{children:`Warning: ${e.warning}`}):void 0}const pt=e=>{var t,n,s,r,a;const[o,l]=i().useState(!0),d=(null==(t=e.event.details.response)?void 0:t.responseTime)||0,c=(null==(n=e.event.details.response)?void 0:n.statusCode)||0;return(0,f.jsxs)(tt,{children:[(0,f.jsxs)(nt,{onClick:()=>e.onExpand(e.event.id),"aria-label":"network-item-expand-button",children:[e.isExpanded?(0,f.jsx)(te.Z,{}):(0,f.jsx)(ne.Z,{}),(0,f.jsx)("div",{children:`${e.event.details.request.method} ${v=e.event,v.details.request.href||v.details.request.url||""}`}),Boolean(c)&&(0,f.jsx)(st,{children:c}),Boolean(d)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(it,{}),(0,f.jsx)(rt,{children:(y=d,y<1998?`${Math.ceil(y)} ms`:J()(y||0,{secondsDecimalDigits:2,keepDecimalsOnWholeSeconds:!0,padUnits:!0}))})]}),(0,f.jsx)(dt,{children:(p=e.event,(0,f.jsxs)(f.Fragment,{children:["network"===p.type&&"request"===p.details.indirect&&(0,f.jsx)(X.Z,{title:"This request was triggered by a function in your script"}),"network"===p.type&&"auth"===p.details.indirect&&(0,f.jsx)(Y.Z,{title:"This request was triggered by an authorization helper"}),(null==(u=p.source)?void 0:u.cloud)&&(0,f.jsx)(ee.Z,{title:"This log was generated in the cloud"}),"network"===p.type&&(null==(h=p.details)?void 0:h.redirect)&&(0,f.jsx)(Ye,{title:"This request was triggered on redirect"}),"network"===p.type&&"Introspection"===(null==(g=p.details)?void 0:g.indirect)&&(0,f.jsx)(z.Z,{title:"This request was triggered on GraphQL Introspection"})]}))})]}),e.isExpanded&&(0,f.jsxs)(at,{"aria-label":"network-item-expanded",children:[(0,f.jsxs)(lt,{children:[ct(e.event),o?(0,f.jsx)(Ae,{event:e.event,viewLargeBody:e.viewLargeBody}):(0,f.jsx)(Pe,{eventId:e.event.id,data:e.event.details,viewLargeBody:e.viewLargeBody})]}),!(null!=(s=e.event.details)&&s.browserRequest||null==(r=e.event.details)||null==(r=r.request)||!r.headers||null!=(a=e.event.details)&&a.error)&&(0,f.jsx)(ot,{type:"plain",onClick:function(){l(!o)},text:o?"Show raw log":"Show pretty log","aria-label":"network-item-show-raw-log-button"})]})]});var p,u,h,g,y,v};let ut,ht,gt,yt,vt=e=>e;const xt=x().div(ut||(ut=vt`
  padding-left: var(--spacing-l);
  display: flex;
  gap: var(--spacing-m);

  .custom-obj-inspector__item {
    line-height: var(--line-height-s);
  }
`));function ft(e){return"error"===e?(0,f.jsx)(P.Z,{className:"c-li__icon",title:"Error",color:"base-color-error"}):"warn"===e?(0,f.jsx)(V.Z,{className:"c-li__icon",title:"Warning",color:"base-color-warning"}):"info"===e?(0,f.jsx)(z.Z,{className:"c-li__icon",title:"Info",color:"base-color-info"}):(0,f.jsx)("span",{title:"Log",className:"c-li__icon empty",children:" "})}const mt=x().li(ht||(ht=vt`
  display: flex;
  flex: 1;
  align-items: flex-start;
  overflow: hidden;
  min-height: ${0}px;
  border-bottom: thin solid var(--border-color-default);
  font-family: var(--text-family-code);
  color: var(--content-color-primary);
  cursor: default;

  &.is-cloud {
    background-color: var(--background-color-tertiary);
  }

  &.is-indirect {
    opacity: 0.6;
  }

  &.is-error {
    color: var(--content-color-error);
    background-color: var(--background-color-error);
  }

  &.is-warning {
    background-color: var(--background-color-warning);
  }

  &.is-clear {
    font-style: italic;
    opacity: 0.6;
  }

  .c-li__icon {
    &.empty {
      padding-left: 6px;
      height: 12px;
    }
  }

  .c-li__timestamp {
    color: var(--content-color-tertiary);
    padding-right: var(--spacing-xs);
    padding-left: var(--spacing-xs);
  }
`),24),bt=x().div(gt||(gt=vt`
  display: flex;
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-m);
  width: 100%;
  min-width: 0;
`)),jt=x().div(yt||(yt=vt`
  display: flex;
  align-items: center;
  height: fit-content;
  min-height: var(--size-xs);
`)),wt=e=>{var t;const n=e.event.severity,s=!("network"!==e.event.type||!e.event.details.redirect&&!e.event.details.indirect),r=E()("c-flex",{"is-error":"error"===n,"is-warning":"warn"===n,"is-log":"log"===n,"is-info":"info"===n,"is-indirect":s,"is-cloud":Boolean(null==(t=e.event.source)?void 0:t.cloud),"is-clear":"clear"===n});return i().useEffect((()=>{var t;return e.observeSizeChange(null==(t=e.itemRef)?void 0:t.current),()=>{var t;e.unobserveSizeChange(null==(t=e.itemRef)?void 0:t.current)}}),[]),(0,f.jsx)(mt,{"data-index":e.index,role:"treeitem",className:r,style:e.style,children:(0,f.jsxs)(bt,{ref:e.itemRef,"data-index":e.index,children:[(0,f.jsxs)(jt,{children:[ft(n),e.showTimestamp&&(0,f.jsx)("span",{className:"c-li__timestamp","aria-label":"console-list-timestamp",children:(0,A.format)(e.event.timestamp,"HH:mm:ss.SSS")})]}),(a=e.event,o=e.isExpanded,l=e.toggleExpanded,d=e.viewLargeBody,"log"===a.type&&"clear"===a.severity?(0,f.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",grow:1,children:[(0,f.jsx)(xt,{children:"Console was cleared"}),(0,f.jsx)(z.Z,{className:"c-li__icon",title:"Console was cleared from pre-request or test script"})]}):"log"===a.type||"raw"===a.type?(0,f.jsx)(xt,{children:a.details.map(((e,t)=>(0,f.jsx)(U,{message:e},t)))}):"exception"===a.type?(0,f.jsx)(U,{message:re(a)}):"network"===a.type?(0,f.jsx)(pt,{event:a,isExpanded:o,viewLargeBody:d,onExpand:l}):void 0)]})});var a,o,l,d},_t=(0,s.memo)(wt,((e,t)=>e.showTimestamp===t.showTimestamp&&e.isExpanded===t.isExpanded&&e.style===t.style));let St;const kt=x().ul(St||(St=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .indent {
    flex: 0 0 var(--spacing-s);
    box-sizing: border-box;
    height: inherit;
    border-right: thin solid transparent;
  }

  &:hover,
  &:focus {
    .indent {
      border-right: thin solid var(--border-color-default);
    }
  }
`)),Et=(0,s.forwardRef)(((e,t)=>(0,f.jsx)(kt,(0,Z.Z)({role:"tree",tabIndex:0,ref:t},e,{children:e.children}))));Et.displayName="forwardRef(ReactWindowList)";const Ct=Et;var Zt=n(64691),Tt=n(48263),qt=n(59824),Lt=n(17282),Ot=n(31425),Rt=n(49584),Bt=n(29225);function It(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;const n=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===t:Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&(e.sort(),t.sort(),e.every(((e,n)=>It(e,t[n])))):"object"===n&&(null===e&&null===t||null!==e&&null!==t&&!Array.isArray(e)&&!Array.isArray(t)&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((n=>It(e[n],t[n]))))}var $t=n(56880);let Nt;const At=x()(P.Z)(Nt||(Nt=(e=>e)`
  align-self: flex-end;
`)),zt=e=>{const{addToast:t}=(0,r.ZP)();function n(t){const n=new Set(e.consoleState.filterLevels);n.has(t)?n.delete(t):n.add(t);const s=[...n].sort().join(",");return $t.AnalyticsService.addEventV2({category:"console",action:"console-filter",value:1,label:s}),[...n]}return(0,f.jsxs)(u.Z,{gap:"spacing-s",padding:{paddingTop:"spacing-zero",paddingLeft:"spacing-s",paddingBottom:"spacing-s",paddingRight:"spacing-s"},justifyContent:"flex-end",children:[(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[e.consoleState.errorCount>0&&(0,f.jsxs)(u.Z,{gap:"spacing-xs",alignItems:"center",children:[(0,f.jsx)(At,{color:"base-color-error"}),(0,f.jsxs)("div",{"aria-label":"console-header-error-count",children:[e.consoleState.errorCount," Error",e.consoleState.errorCount>1?"s":""]})]}),e.consoleState.warningCount>0&&(0,f.jsxs)(u.Z,{gap:"spacing-xs",alignItems:"center",children:[(0,f.jsx)(V.Z,{color:"base-color-warning"}),(0,f.jsxs)("div",{"aria-label":"console-header-warning-count",children:[e.consoleState.warningCount," Warning",e.consoleState.warningCount>1?"s":""]})]})]}),(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)("div",{children:(0,f.jsxs)(Zt.Z,{closeOnSelect:!1,children:[(0,f.jsx)(Tt.Z,{text:It(e.consoleState.filterLevels,T)?"All Logs":"Custom",size:"small",type:"tertiary","aria-label":"console-header-filter-logs-button"}),(0,f.jsxs)(qt.Z,{children:[(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"SET_FILTER_LEVELS",filterLevels:n("log")})},"data-testid":"console-header-filter-by-logs-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.filterLevels.includes("log")}),(0,f.jsx)(y.ZP,{children:"Log"})]})}),(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"SET_FILTER_LEVELS",filterLevels:n("info")})},"data-testid":"console-header-filter-by-info-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.filterLevels.includes("info")}),(0,f.jsx)(y.ZP,{children:"Info"})]})}),(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"SET_FILTER_LEVELS",filterLevels:n("warn")})},"data-testid":"console-header-filter-by-warning-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.filterLevels.includes("warn")}),(0,f.jsx)(y.ZP,{children:"Warning"})]})}),(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"SET_FILTER_LEVELS",filterLevels:n("error")})},"data-testid":"console-header-filter-by-error-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.filterLevels.includes("error")}),(0,f.jsx)(y.ZP,{children:"Error"})]})})]})]})}),(0,f.jsx)("div",{children:(0,f.jsx)(K.Z,{type:"secondary",text:"Clear",size:"small",isDisabled:0===e.consoleState.visibleEvents.length,onClick:()=>{const t=e.consoleState.items.length;I.pmConsole.clear(),e.onClear(),$t.AnalyticsService.addEventV2({category:"console",action:"console-clear",value:t,label:""})},"aria-label":"console-header-clear-button"})}),(0,f.jsx)("div",{children:(0,f.jsx)(K.Z,{type:"tertiary",tooltip:"Copy all logs to clipboard",icon:(0,f.jsx)(Rt.Z,{}),size:"small",isDisabled:0===e.consoleState.visibleEvents.length,onClick:()=>{!function(){const n=e.consoleState.visibleEvents.map((t=>e.consoleState.showTimestamp?`${(0,A.format)(t.timestamp,"HH:mm:ss.SSS")} ${re(t)}`:re(t))).join("\n");navigator.clipboard.writeText(n),t({title:"Copied to clipboard",status:"success",description:null})}()},"aria-label":"console-header-copy-button"})}),(0,f.jsx)("div",{children:(0,f.jsxs)(Zt.Z,{closeOnSelect:!1,children:[(0,f.jsx)(Tt.Z,{children:(0,f.jsx)(K.Z,{size:"small",icon:(0,f.jsx)(Bt.Z,{}),type:"tertiary","aria-label":"console-header-more-actions-button"})}),(0,f.jsxs)(qt.Z,{children:[(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"TOGGLE_SHOW_TIMESTAMP"})},"data-testid":"console-header-show-timestamp-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.showTimestamp}),(0,f.jsx)(y.ZP,{children:"Show timestamp"})]})}),(0,f.jsx)(Lt.Z,{onClick:()=>{e.dispatch({type:"TOGGLE_HIDE_NETWORK"})},"data-testid":"console-header-hide-network-button",children:(0,f.jsxs)(u.Z,{gap:"spacing-s",alignItems:"center",children:[(0,f.jsx)(Ot.Z,{isChecked:e.consoleState.hideNetwork}),(0,f.jsx)(y.ZP,{children:"Hide network"})]})})]})]})})]})]})};var Pt=n(20299),Vt=n(67417),Ft=n(71132),Ht=n(3071),Wt=n(83125),Dt=n(45261),Mt=n(32054),Ut=n(1590);let Gt,Jt,Kt,Qt,Xt,Yt,en,tn,nn,sn=e=>e;const rn={request:"Request",response:"Response"},an=(0,s.lazy)((0,Ut.loadRemoteModule)("code-editor/CodeEditor")),on=x().div(Gt||(Gt=sn`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  inset: 0;
  background: var(--background-color-primary);
  z-index: 10;
  padding-top: var(--spacing-xs);
`)),ln=x().div(Jt||(Jt=sn`
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  padding-left: var(--spacing-s);
`)),dn=x().div(Kt||(Kt=sn`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 0;
  flex-direction: column;
  flex: 1;
`)),cn=x()(Pt.Z)(Qt||(Qt=sn`
  max-width: 140px;
  padding: var(--spacing-m);
  width: fit-content;
  padding-right: 0;
`)),pn=x().div(Xt||(Xt=sn`
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  gap: var(--spacing-s);
`)),un=x().div(Yt||(Yt=sn`
  height: 100%;
  width: 100%;
  min-height: 0;
  padding-bottom: var(--spacing-s);
`)),hn=x()(K.Z)(en||(en=sn`
  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.wordWrap&&e.theme["content-color-brand"])),gn=x()(K.Z)(tn||(tn=sn`
  margin-left: auto;
`)),yn=x()(K.Z)(nn||(nn=sn`
  margin-right: var(--spacing-s);
`)),vn=e=>{const t=an,[n,a]=i().useState(e.data.type.toUpperCase()||"JSON"),[o,l]=i().useState(!0),[d,c]=i().useState(0),p=(0,s.useRef)(null),{addToast:u}=(0,r.ZP)();return(0,f.jsxs)(on,{children:[(0,f.jsxs)(ln,{children:[(0,f.jsx)(K.Z,{icon:(0,f.jsx)(Ht.Z,{}),tooltip:"Back to Console logs",onClick:e.onClose,type:"tertiary",size:"small"}),(0,f.jsx)(g.Z,{type:"h5",text:`${rn[e.data.entityType]} Body`}),e.data.isTruncated&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{children:"(truncated)"}),(0,f.jsx)(z.Z,{title:"The console truncates bodies larger than 5 MB"})]})]}),(0,f.jsxs)(dn,{children:[(0,f.jsxs)(pn,{children:[(0,f.jsx)(cn,{activeTabIndex:d,onChange:c,type:"secondary",children:(0,f.jsxs)(Vt.Z,{children:[(0,f.jsx)(Ft.Z,{label:"Pretty"}),(0,f.jsx)(Ft.Z,{label:"Raw"})]})}),(0,f.jsxs)(Zt.Z,{closeOnSelect:!1,children:[(0,f.jsx)(Tt.Z,{text:n,type:"secondary"}),(0,f.jsxs)(qt.Z,{children:[(0,f.jsx)(Lt.Z,{onClick:()=>{a("JSON")},children:(0,f.jsx)(y.ZP,{children:"JSON"})}),(0,f.jsx)(Lt.Z,{onClick:()=>{a("XML")},children:(0,f.jsx)(y.ZP,{children:"XML"})}),(0,f.jsx)(Lt.Z,{onClick:()=>{a("HTML")},children:(0,f.jsx)(y.ZP,{children:"HTML"})}),(0,f.jsx)(Lt.Z,{onClick:()=>{a("Text")},children:(0,f.jsx)(y.ZP,{children:"Text"})}),(0,f.jsx)(Lt.Z,{onClick:()=>{a("Auto")},children:(0,f.jsx)(y.ZP,{children:"Auto"})})]})]}),(0,f.jsx)(hn,{type:"secondary",icon:(0,f.jsx)(Wt.Z,{}),onClick:()=>{l(!o)},wordWrap:o}),(0,f.jsx)(gn,{type:"tertiary",icon:(0,f.jsx)(Dt.Z,{}),onClick:()=>{var e;null==(e=p.current)||e.copyToClipboard(),u({title:"Copied to clipboard",status:"success",description:null})}}),(0,f.jsx)(yn,{type:"tertiary",icon:(0,f.jsx)(Mt.Z,{}),onClick:()=>{var e;null==(e=p.current)||e.openFindWidget()}})]}),(0,f.jsx)(un,{children:(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(h.Z,{}),children:(0,f.jsx)(t,{language:1===d?"text":null==n?void 0:n.toLowerCase(),wordWrap:o,readOnly:!0,enableLinks:!0,value:e.data.body,ref:e=>{e?(p.current=e,p.current.focus()):p.current=null},autoFormat:!0})})})]})]})},xn=["items"],fn=["style","data"],mn=["items"],bn=["style","data"];function jn(e,t){const{style:n,data:{items:s}}=e,i=(0,a.Z)(e.data,xn),r=(0,a.Z)(e,fn),{style:o,data:{items:l}}=t,c=(0,a.Z)(t.data,mn),p=(0,a.Z)(t,bn);return d()(n,o)&&d()(s,l)&&d()(i,c)&&d()(r,p)}const wn=(0,s.memo)((e=>{const t=e.data.items[e.index];return e.data.listItemRefs[e.index]=i().useRef(null),(0,f.jsx)(_t,{index:e.index,event:t,showTimestamp:e.data.showTimestamp,style:e.style,isExpanded:e.data.expandSet.has(t.id),toggleExpanded:t=>{const n=new Set(e.data.expandSet);n.has(t)?n.delete(t):(n.add(t),$t.AnalyticsService.addEventV2({category:"console",action:"console-item-expand",value:1,label:"network"})),e.data.dispatch({type:"EXPAND_ITEM",expandSet:n})},observeSizeChange:t=>{e.data.resizeObserverRef.current&&e.data.resizeObserverRef.current.observe(t)},unobserveSizeChange:t=>{e.data.resizeObserverRef.current&&e.data.resizeObserverRef.current.unobserve(t)},itemRef:e.data.listItemRefs[e.index],viewLargeBody:async(t,n)=>{const s=await I.pmConsole.blobData.get({id:t+"-"+n});e.data.setIsBlobViewerOpen(!0),e.data.setBlobData({data:s,id:t,type:n}),$t.AnalyticsService.addEventV2({category:"console",action:"view-body-in-editor",value:1,label:n})}},t.id)}),jn),_n=()=>{const{state:e,dispatch:t}=(()=>{const e=(0,s.useContext)($);if(!e)throw new Error("useConsoleStore should be used within a ConsoleStoreContext.Provider");return e})(),n=e=>{t({type:"SET_BLOB_VIEWER_OPEN",isOpen:e})},[r,a]=i().useState(null),l=i().useRef(null),d=i().useRef(null),c={},g=i().useRef(!1);i().useEffect((()=>{$t.AnalyticsService.addEventV2({action:"init",category:"console",label:"",value:1})}),[]),i().useEffect((()=>{(async()=>await I.pmConsole.getAllLogs()||[])().then((e=>{t({type:"RECEIVED_MESSAGES",messages:e})}));const e=new ResizeObserver((e=>{for(const t of e){if(0===t.target.offsetHeight)return;const e=t.target.dataset.index;e&&y(Number.parseInt(e,10))}}));return d.current=e,()=>{e.disconnect()}}),[]),i().useEffect((()=>{g.current&&l.current&&l.current.scrollToItem(e.visibleEvents.length)}),[e.visibleEvents,g]);const y=e=>{var t;null==(t=l.current)||t.resetAfterIndex(e)},v=i().useCallback((({visibleStopIndex:t})=>{t>=e.eventCount-2&&(g.current=!0)}),[e.eventCount]),x=i().useCallback((({scrollDirection:e})=>{"backward"===e&&(g.current=!1)}),[]),m=e=>{var t;const n=null==(t=c[e])?void 0:t.current;return n&&n.offsetHeight||24};return(0,f.jsx)("div",{className:E()("console-list",{"is-disabled":e.isLoading}),tabIndex:-1,children:e.isLoading?(0,f.jsx)(u.Z,{alignItems:"center",justifyContent:"center",height:"100%",children:(0,f.jsx)(h.Z,{})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(zt,{consoleState:e,dispatch:t,onClear:()=>{n(!1),a(null)}}),0===e.visibleEvents.length?(0,f.jsx)(S,{searchQuery:e.searchQuery}):(0,f.jsx)(p(),{children:({height:s,width:i})=>(0,f.jsx)(o.VariableSizeList,{width:i,height:s,itemCount:e.visibleEvents.length,ref:l,itemSize:m,innerElementType:Ct,onItemsRendered:v,onScroll:x,itemData:{items:e.visibleEvents,showTimestamp:e.showTimestamp,expandSet:e.expandSet,resizeObserverRef:d,listItemRefs:c,dispatch:t,setIsBlobViewerOpen:n,setBlobData:a},overscanCount:10,children:wn})}),e.isBlobViewerOpen&&(null==r?void 0:r.id)&&(0,f.jsx)(vn,{data:{body:(t=>{var n,s,i,a;const o=e.visibleEvents.find((e=>e.id===t));return o?null!=r&&r.data?null==r?void 0:r.data:("response"===(null==r?void 0:r.type)?"string"==typeof(null==(n=o.details.response)?void 0:n.body)&&(null==(s=o.details.response)?void 0:s.body):"raw"===(null==(i=o.details.request)||null==(i=i.body)?void 0:i.mode)&&"raw"in o.details.request.body&&(null==(a=o.details.request)||null==(a=a.body)?void 0:a.raw))||"":""})(null==r?void 0:r.id),type:(t=>{var n,s,i;const a=e.visibleEvents.find((e=>e.id===t));return a&&("response"===(null==r?void 0:r.type)?null==(n=a.details.response)||null==(n=n.contentInfo)?void 0:n.mimeFormat:"raw"===(null==(s=a.details.request)||null==(s=s.body)?void 0:s.mode)&&(null==(i=a.details.request)||null==(i=i.body)?void 0:i.options.raw.language))||"text"})(null==r?void 0:r.id),entityType:(null==r?void 0:r.type)||"",isTruncated:(t=>{const n=e.visibleEvents.find((e=>e.id===t));return!!n&&("response"===(null==r?void 0:r.type)?"object"==typeof(null==(s=n.details.response)?void 0:s.body)&&(null==(i=n.details.response)||null==(i=i.body)?void 0:i.___truncated___):"raw"===(null==(a=n.details.request)||null==(a=a.body)?void 0:a.mode)&&"___truncated___"in n.details.request.body&&(null==(o=n.details.request)||null==(o=o.body)?void 0:o.___truncated___));var s,i,a,o})(null==r?void 0:r.id)},onClose:()=>{n(!1),a(null)}})]})})};var Sn=n(16669),kn=n(39245);const En=()=>{const e=(0,kn.useNavigate)();return(0,Sn.useAccountDataUpdateSubscription)(),(0,s.useEffect)((()=>C.VSCodeCommunicationsService.subscribe("WORKSPACE_SWITCH",(t=>{e(`/workspace/${t.workspaceId||""}`)}))),[]),(0,f.jsx)(N,{children:(0,f.jsx)(r.VW,{children:(0,f.jsx)(_n,{})})})}}}]);
//# sourceMappingURL=4293.984b9381061e3e33.js.map