"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[7375,7560,2389,7397,6198],{7560:(e,r,t)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},s.apply(this,arguments)}t.d(r,{Z:()=>s})},98283:(e,r,t)=>{function s(e,r){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(r,{Z:()=>s})},16198:(e,r,t)=>{t.r(r),t.d(r,{HTTPHistorySubscription:()=>I,HTTP_HISTORY_QUERY_KEY_PREFIX:()=>a,MULTI_PROTO_HISTORY_QUERY_KEY_PREFIX:()=>o,MultiProtocolHistorySubscription:()=>C,PAGE_SIZE:()=>n,SUPPORTED_MULTI_PROTO_TYPES:()=>l,createGRPCHistoryItem:()=>j,createHttpHistoryItem:()=>V,createWsRawHistory:()=>B,deleteAllHistory:()=>F,deleteAllHttpHistoryItems:()=>U,deleteAllMultiprotocolHistory:()=>$,deleteHistory:()=>W,deleteHttpHistoryItem:()=>Y,deleteMultiprotocolHistory:()=>L,httpHistoryQuery:()=>b,httpHistorySubscription:()=>T,httpSubscriptionHandler:()=>H,multiHistorySubscription:()=>R,multiProtocolSubscriptionHandler:()=>G,multiprotocolHistoryQuery:()=>h,rawBodyLanguages:()=>D,requestBodyTypes:()=>M,useHistoryItems:()=>m,useHistorySubscription:()=>Z,useHistoryUrls:()=>g,useMultiProtocolHistory:()=>y});var s=t(7560);const a="http-history",o="multi-proto-history",n=50,l=new Set(["grpc-request","ws-raw-request"]);var i=t(97201),u=t(45860),c=t(26663),p=t.n(c);const d=(e,r)=>{const t=e.split("-");return!t||!r||t.length>=6?e:`${r}-${e}`},b=(e,r)=>({enabled:!!e,queryKey:[a,e],queryFn:async({pageParam:t=0})=>(async({workspaceId:e="",meta:r=!0,count:t=100,sinceCursor:a,maxCursor:o})=>e?(e=>{var r;const t={items:[],meta:{nextCursor:null}};return null!=e&&Array.isArray(e.data)?(t.items=e.data.map((e=>(0,s.Z)({},e.data,e.meta,{createdAt:new Date(e.data.createdAt),type:"request",depth:1,id:d(e.data.id,e.data.owner)}))),t.meta.nextCursor=null!=(r=e.meta.next_max_cursor)?r:null,t):t})(await u.postmanGateway.get({url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/history`,query:(0,s.Z)({meta:r,workspace:e,count:t,format:"object"},a?{since_cursor:a}:null,o?{max_cursor:o}:null)})):{items:[],meta:{nextCursor:null}})({workspaceId:e,count:r,maxCursor:t}),getNextPageParam:e=>{var r;return!(null==e||null==(r=e.meta)||!r.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),h=e=>({queryKey:[o,e],queryFn:async({pageParam:r=""})=>(async({workspaceId:e="",cursor:r})=>e?(e=>{var r;const t={items:[],meta:{nextCursor:null}};return null!=e&&Array.isArray(e.data)?(t.items=e.data.filter((e=>l.has(e.itemType))).map((e=>(0,s.Z)({},e,{createdAt:new Date(e.beganAt),type:e.itemType,depth:1}))),t.meta.nextCursor=null!=(r=e.nextPage)?r:null,t):t})(await u.postmanGateway.get({url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/history/",method:"get",query:(0,s.Z)({query:"all-activity-in-workspace",workspace:e},r?{cursor:r}:null),service:"scribe"})):{items:[],meta:{nextCursor:null}})({workspaceId:e,cursor:r}),getNextPageParam:e=>{var r;return!(null==e||null==(r=e.meta)||!r.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),y=({workspaceId:e})=>(0,i.useInfiniteDataFetch)(h(e)),m=({workspaceId:e,pageSize:r=n,useErrorBoundary:t=!0})=>{const{data:a,isError:o,hasNextPage:l,fetchNextPage:u,refetch:c,isFetching:p}=y({workspaceId:e}),{data:d,isError:h,hasNextPage:m,fetchNextPage:w,refetch:v,isFetching:g}=(({workspaceId:e,pageSize:r=n})=>(0,i.useInfiniteDataFetch)(b(e,r)))({workspaceId:e,pageSize:r}),k=null!=d&&d.pages?d.pages.flatMap((e=>e.items)):null,I=null!=a&&a.pages?a.pages.flatMap((e=>e.items)):null,T=null==k&&null==I,f=m||l,P=h||o,_=g||p;if(T&&h&&o&&t)throw new Error("Failed to get history items");const A={isRefetching:_,hasPageError:P,hasNextPage:f,fetchNextPage:()=>{l&&u(),m&&w()},refetch:()=>{h&&v(),o&&c()}};return T?(0,s.Z)({},A,{data:null}):(0,s.Z)({},A,{data:[...null!=k?k:[],...null!=I?I:[]]})};var w=t(98283);const v=["data"],g=({workspaceId:e,filterFn:r})=>{var t;const a=m({workspaceId:e,pageSize:n,useErrorBoundary:!1}),{data:o}=a,l=(0,w.Z)(a,v);let i=o;return r&&(i=null==o?void 0:o.filter(r)),(0,s.Z)({data:null==(t=i)?void 0:t.map((e=>({id:null==e?void 0:e.id,label:null==e?void 0:e.url,value:null==e?void 0:e.url})))},l)};var k=t(40540);class I{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:t}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:s,abortController:o}=(e=>{const r=new AbortController;return{asyncObserver:u.postmanWebsocketGateway.subscribe({signal:r.signal,subscribeRequest:{method:"post",service:"history",path:`/history/subscribe?workspace=${e}`},subscriptionEvents:["broadcast"],responseFilter:e=>{var r;return null==e||null==(r=e.body)?void 0:r.subscription},broadcastFilter:e=>null==e?void 0:e.sub,unsubscribeRequest:{method:"post",service:"history",path:`/history/unsubscribe?workspace=${e}`}}),abortController:r}})(r);e.abortController=o,e.asyncObserver=s,e.observer=await s,e.abortController=null,(0,i.invalidateCache)([a,r]),e.observer.subscribe({next:e=>{t(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(s){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}}const T=new I,f=e=>{(0,i.updateCache)({key:[a,e],updater:e=>{if(e)return(0,s.Z)({},e,{pages:[{items:[],meta:{nextCursor:null}}],pageParams:[null]})}})},P=(e,r,t)=>{e.length>0&&(0,i.updateCache)({key:[a,r],updater:r=>{var a;if(r)return{pages:null!=(a=r.pages.map((r=>(0,s.Z)({},r,{items:r.items.filter((r=>!e.includes(null!=t&&t.checkModelId?(e=>{const r=e.split("-");return!r||r.length<6?{modelId:e}:{owner:r.shift(),modelId:r.join("-")}})(r.id).modelId:r.id)))}))))?a:[],pageParams:null==r?void 0:r.pageParams}}})},_=["pages"],A=(e,r)=>{const t=e.split("-");return!t||!r||t.length>=6?e:`${r}-${e}`},E=(e,r)=>({id:A(e.id,e.value.owner),method:e.value.method,url:e.value.url,owner:`${e.value.owner}`,createdAt:new Date(e.value.createdAt),team:null,model:"history",type:"request",depth:1,workspace:r,lastRevision:null,cursor:null}),H=(e,{workspaceId:r})=>{const t=[],o=[];for(const s of e.data)switch(s.op){case"create":t.push(E(s,r));break;case"delete":o.push(s.id);break;case"deleteAll":f(r)}t.length>0&&((e,r)=>{e.length>0&&(0,i.updateCache)({key:[a,r],updater:r=>{if(!r)return{pages:[{items:[...e],meta:{nextCursor:null}}],pageParams:[null]};const{pages:[t,...a]}=r,o=(0,w.Z)(r,_),n=[...e,...t.items];return(0,s.Z)({pages:[(0,s.Z)({},t,{items:n}),...a]},o)}})})(t,r),o.length>0&&P(o,r,{checkModelId:!0})};class C{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:t}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:s,abortController:a}=(e=>{const r=new AbortController;return{asyncObserver:u.postmanWebsocketGateway.subscribe({signal:r.signal,subscribeRequest:{method:"post",service:"scribe",path:"/subscriptions/",body:{workspace:e}},subscriptionEvents:["multiprotocolHistory"],responseFilter:e=>{var r;return null==e||null==(r=e.body)||null==(r=r.data)?void 0:r.subscription},broadcastFilter:e=>null==e?void 0:e.sub,unsubscribeRequest:{method:"delete",service:"scribe",path:"/subscriptions/",body:{workspace:e}}}),abortController:r}})(r);e.abortController=a,e.asyncObserver=s,e.observer=await s,e.abortController=null,(0,i.invalidateCache)([o,r]),e.observer.subscribe({next:e=>{t(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(s){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}}const R=new C,x=(e,r)=>{e.length>0&&(0,i.updateCache)({key:[o,r],updater:r=>{var t;if(r)return{pages:null!=(t=r.pages.map((r=>(0,s.Z)({},r,{items:r.items.filter((r=>!e.includes(r.id)))}))))?t:[],pageParams:null==r?void 0:r.pageParams}}})},S=e=>{(0,i.updateCache)({key:[o,e],updater:e=>{if(e)return(0,s.Z)({},e,{pages:[{items:[],meta:{nextCursor:null}}],pageParams:[null]})}})},O=["pages"],q=(e,r)=>({id:e.id,method:e.value.method,url:e.value.url,createdAt:new Date(e.value.beganAt),type:e.value.itemType,depth:1,workspace:r}),G=(e,{workspaceId:r})=>{const t=[],a=[];for(const s of e.data)if("HISTORY_CREATE"!==s.op||l.has(s.value.itemType))switch(s.op){case"HISTORY_CREATE":t.push(q(s,r));break;case"HISTORY_DELETE":a.push(s.id);break;case"HISTORY_DELETE_ALL":S(r)}t.length>0&&((e,r)=>{e.length>0&&(0,i.updateCache)({key:[o,r],updater:r=>{if(!r)return{pages:[{items:[...e],meta:{nextCursor:null}}],pageParams:[null]};const{pages:[t,...a]}=r,o=(0,w.Z)(r,O),n=[...e,...t.items];return(0,s.Z)({pages:[(0,s.Z)({},t,{items:n}),...a]},o)}})})(t,r),a.length>0&&x(a,r)},Z=({workspaceId:e})=>{(0,k.useEffect)((()=>{if(e)return T.subscribe({workspaceId:e,subscriptionHandler:H}),R.subscribe({workspaceId:e,subscriptionHandler:G}),()=>{T.unsubscribe(),R.unsubscribe()}}),[e])},Y=async(e,r)=>{const t=await u.postmanGateway.delete({url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/history`,data:{ids:r}});return P(r,e),t},L=async(e,r)=>{const t=await u.postmanGateway.delete({body:JSON.stringify({body:{workspaceId:e,only:r},method:"delete",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});return x(r,e),t},W=async(e,r)=>{const t=[],s=[];for(const e of r){if(!e.id)return;"request"===e.type&&t.push(e.id),["ws-raw-request","grpc-request"].includes(e.type)&&s.push(e.id)}const a=t.length>0?Y(e,t):Promise.resolve(),o=s.length>0?L(e,s):Promise.resolve();await Promise.all([a,o]).catch((()=>{}))},$=async e=>{const r=await u.postmanGateway.delete({body:JSON.stringify({body:{workspaceId:e},method:"delete",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});return S(e),r},U=async e=>{const r=await u.postmanGateway.delete({url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/history`,query:{workspace:e},data:{}});return f(e),r},F=async e=>{const r=U(e),t=$(e);await Promise.all([r,t]).catch((()=>{}))};var N=t(60398);const M=[["none","none"],["params","form-data"],["urlencoded","x-www-form-urlencoded"],["raw","raw"],["binary","binary"],["graphql","graphql"]],D=[{value:"text",label:"Text"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"html",label:"HTML"},{value:"xml",label:"XML"}],V=async e=>await u.postmanGateway.post({url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/history/import`,query:{workspace:e.workspace,owner:e.owner},data:(0,s.Z)({},e,{id:(0,N.v4)()})}),j=async e=>await u.postmanGateway.post({body:JSON.stringify({body:e,method:"post",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`}),B=async e=>await u.postmanGateway.post({body:JSON.stringify({body:e,method:"post",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${p().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`})}}]);
//# sourceMappingURL=7375.610f424bb4afb10c.js.map