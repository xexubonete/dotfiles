"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[29,7560,7397],{7560:(e,t,s)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},n.apply(this,arguments)}s.d(t,{Z:()=>n})},98283:(e,t,s)=>{function n(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}s.d(t,{Z:()=>n})},10029:(e,t,s)=>{s.r(t),s.d(t,{HTTPRequest:()=>q,PostmanGateway:()=>O,PostmanHTTPGateway:()=>O,httpRequest:()=>S,postmanGateway:()=>T,postmanHttpGateway:()=>T,postmanWebsocketGateway:()=>re});var n=s(7560),o=s(98283),r=s(13101),i=s(21466);s(21180);const a={url:"/_api/ws/proxy",method:"post",beforeRequest:[({request:e,options:t})=>{const s=(0,r.getAuthRequestOptions)();if(/localhost:(\d{2,6})|postman(-alpha|-beta|-preview|-stage)?.co(m)?/.test(e.url)){if(s.headers)for(const[t,n]of Object.entries(s.headers))e.headers.set(t,n);return s.credentials?(t.credentials=s.credentials,new Request(e.clone(),{credentials:s.credentials})):e}}],beforeError:[async e=>{var t;if(403===(null==(t=e.response)?void 0:t.status))try{"authenticationError"===(await e.response.json()).error.name&&i.VSCodeCommunicationsService.postMessageToExtension({type:"AUTH_TOKEN_REVOKED",payload:{}})}catch(e){}}],credentials:"include",timeout:1e4,headers:{"release-channel":"vscode"}},c={0:"Not Connected",100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"},u=(e,t)=>{if(null==e)return t;if(null==t)return e;if("function"==typeof AbortController){const s=new AbortController;return e.addEventListener("abort",(()=>{null==s||s.abort(e.reason)})),t.addEventListener("abort",(()=>{null==s||s.abort(t.reason)})),s.signal}return null},h=(e={},t={})=>{const s=new Headers(e);return new Headers(t).forEach(((e,n)=>{t instanceof Headers&&"undefined"===e||void 0===e?s.delete(n):s.set(n,e)})),s},l=(e,...t)=>{if(e.constructor===Object&&(e=(0,n.Z)({},e)),e.constructor===Array&&(e=[...e]),0===t.length)return e;for(const[n,o]of Object.entries(null!=(s=t.shift())?s:[])){var s;o&&(e[n]||Object.assign(e,{[n]:{}}),o.constructor===Object||o.constructor===Array&&o.find((e=>e.constructor===Object))?e[n]=l(e[n],o):o.constructor===Array?Object.assign(e,{[n]:o.find((e=>e.constructor===Array))?[...e[n],...o]:[...new Set([...e[n],...o])]}):Object.assign(e,{[n]:o}))}return e},d=(e,t)=>{if(void 0!==e||void 0!==t)return void 0===e?(0,n.Z)({},t):void 0===t?(0,n.Z)({},e):l(e,t)},p=e=>{return void 0===e?new URLSearchParams:e instanceof URLSearchParams?e:"object"==typeof e?new URLSearchParams((t=e,Object.fromEntries(Object.entries(t).filter((([e,t])=>void 0!==t))))):new URLSearchParams(e);var t},b=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],f=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],w=(e=[],t=[])=>[...new Set([...e,...t])],m=(e,t)=>{var s,r;const{headers:i,query:a,beforeError:c,afterResponse:l,beforeRequest:m,data:g,method:y,signal:v}=e,R=(0,o.Z)(e,b),{headers:q,query:S,beforeError:E,afterResponse:O,beforeRequest:T,data:P,method:x,signal:A}=t,C=(0,o.Z)(t,f);return(0,n.Z)({url:null!=(s=t.url)?s:e.url},R,C,{headers:h(i,q),beforeError:w(c,E),beforeRequest:w(m,T),afterResponse:w(l,O),query:(j=a,k=S,p(void 0===j?k:void 0===k?j:(0,n.Z)({},Object.fromEntries(p(j)),Object.fromEntries(p(k))))),data:d(g,P),method:null==(r=null!=x?x:y)?void 0:r.toUpperCase(),signal:u(v,A)});var j,k};class g extends Error{constructor({message:e="Request Error",request:t,response:s,options:n}){super(e),this.options=void 0,this.request=void 0,this.response=void 0,this.metadata=void 0,this.name="RequestError",this.request=t,this.response=s,this.options=n}}class y extends g{constructor({request:e,response:t,options:s}){super({message:t.statusText||c[t.status]||"HTTP Response Error",request:e,response:t,options:s}),this.statusCode=void 0,this.name="HTTPResponseError",this.statusCode=t.status}}class v{constructor(e,t={}){this.opts=void 0,this.defaultOpts={},this.abortController=void 0,this.abortController=new AbortController,this.defaultOpts=t,this.opts=m((0,n.Z)({},this.defaultOpts,{signal:this.abortController.signal}),e)}validateOptions(e){const{url:t,method:s,data:n,timeout:o}=e;if(!s)throw new Error("Method is required");if(!t)throw new Error("URL is required");if("string"!=typeof t&&!(t instanceof URL||t instanceof globalThis.Request))throw new TypeError("url must be a string/URL/Request. Found: ");if(o&&o>Number.MAX_SAFE_INTEGER)throw new RangeError(`timeout value must be less than ${Number.MAX_SAFE_INTEGER}`);if(n&&("get"===s||"delete"===s))throw new Error(`Cannot send data with ${s} request`)}async onBeforeRequest(e,t){for(const n of null!=(s=t.beforeRequest)?s:[]){var s;const o=await n({request:e,options:t});if(o instanceof globalThis.Response||o instanceof globalThis.Request)return o}}async onAfterResponse(e,t,s){for(const o of null!=(n=t.afterResponse)?n:[]){var n;const r=await o({request:e,options:t,response:s});if(r instanceof globalThis.Response)return r}}async onBeforeError(e,t){for(const n of null!=(s=t.beforeError)?s:[]){var s;const t=await n(e);if(t instanceof Error)return t}}post(e){return this.request(Object.assign({method:"post"},e))}put(e){return this.request(Object.assign({method:"put"},e))}get(e){return this.request(Object.assign({method:"get"},e))}patch(e){return this.request(Object.assign({method:"patch"},e))}delete(e){return this.request(Object.assign({method:"delete"},e))}}const R=["url","method","query","data","headers"];class q extends v{constructor(e,t={}){super(e,t),this.abortController=new AbortController,this.defaultOpts={}}async fetchViaExtension(e){const t={};let s;for(const[s,n]of e.headers)t[s]=n;try{"function"==typeof e.json&&(s=await e.json())}catch(e){}const o=await i.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"HTTP_REQUEST",payload:{requestOptions:{method:e.method,url:e.url,body:JSON.stringify(s),headers:(0,n.Z)({},t,{connection:"keep-alive"})}}});return new Response(o.body,{status:o.status,statusText:o.statusText,headers:o.headers})}async fetch(e,t){globalThis.fetch.bind(globalThis);const s=await this.onBeforeRequest(e,t);return s instanceof globalThis.Request&&(e=s),s instanceof globalThis.Response?s:this.fetchViaExtension(e.clone())}async send(e,t){let s=await this.fetch(e,t);const n=await this.onAfterResponse(e,t,s);if(n instanceof globalThis.Response&&(s=n),!s.ok){let n=new y({request:e,response:s,options:t});const o=await this.onBeforeError(n,t);throw o instanceof Error&&(n=o),n}return s}async request(e){var t,s,r;const i=m(this.opts,e);this.validateOptions(i);const a=i,{url:c,method:u,query:h,data:l,headers:d}=a,p=(0,o.Z)(a,R);let b;"object"==typeof l&&(b=JSON.stringify(l));const f=c instanceof Request?new URL(c.url):new URL(c,globalThis.location.origin);if(h){const e="string"==typeof h?h.replace(/^\?/,""):new URLSearchParams(h).toString();f.search=e}const w=d instanceof Headers?d:new Headers(null!=(t=d)?t:{});w.set("content-type",null!=(s=w.get("content-type"))?s:"application/json");const g=new globalThis.Request(f,(0,n.Z)({method:u,headers:w,body:b},p)),y=await this.send(g,i);return p.plainText||null!=(r=y.headers.get("content-type"))&&r.includes("text")?await y.text():await y.json()}extend(e){return new q(e,this.opts)}}const S=new q({}),E=["method","query","path","service","data"];class O extends q{constructor(e={},t=a){super(e,t)}sendProxyRequest(e){const{method:t,query:s={},path:r,service:i,data:a}=e,c=(0,o.Z)(e,E);if(!r)throw new Error("Path is required");const u=p(s),h=null!=u&&u.toString()?r+"?"+u.toString():r,l=(0,n.Z)({path:h,service:i,method:t},a);return super.request((0,n.Z)({},c,{data:l,method:"post"}))}request(e){const t=m(this.opts,e);this.validateOptions(t);const{url:s}=t;return/\/ws\/proxy/.test(s.toString())?this.sendProxyRequest(t):super.request(t)}extend(e){return new O(e,this.opts)}}const T=new O({});var P=s(6777),x=s(48410);function A(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var C=0;function j(e){return"__private_"+C+++"_"+e}var k=s(62154),L=s(44928),N=s.n(L),U=s(26663),Z=s.n(U);const F=6e5,I="offline",M="connected",D="reconnected",_="regular",H="watchdog",G={transports:["websocket"],forceNew:!0,multiplex:!1,reconnection:!0,reconnectionDelay:1e4,reconnectionAttempts:Number.POSITIVE_INFINITY,timeout:5e3,path:"/socket.io",reconnectionDelayMax:6e4,randomizationFactor:0},V={[_]:(0,n.Z)({},G,{transports:["websocket"],reconnectionAttempts:8,reconnectionDelay:1e4,randomizationFactor:.3}),[H]:(0,n.Z)({},G,{transports:["websocket"],reconnection:!0,reconnectionDelay:F,reconnectionDelayMax:F,reconnectionAttempts:Number.POSITIVE_INFINITY,randomizationFactor:.3})},B={baseUrl:Z().WEBSOCKET_GATEWAY_URL,url:"/ws/proxy",method:"post",headers:{"release-channel":"vscode"}};var W=j("connectionMode"),z=j("connectionStatus"),K=j("socketId"),Y=j("connectionEvents"),$=j("socket"),J=j("connectionTelemetry"),X=j("defaultOpts"),Q=j("watchdogSetupTimeout"),ee=j("attachListeners");class te{set connectionStatus(e){A(this,z)[z]=e,A(this,Y)[Y].emit("status",e),this.debugLog("updated connection status",e)}get connectionStatus(){return A(this,z)[z]}constructor(e){Object.defineProperty(this,W,{writable:!0,value:_}),Object.defineProperty(this,z,{writable:!0,value:I}),Object.defineProperty(this,K,{writable:!0,value:void 0}),Object.defineProperty(this,Y,{writable:!0,value:new k.EventEmitter}),Object.defineProperty(this,$,{writable:!0,value:null}),Object.defineProperty(this,J,{writable:!0,value:{connectionAttempt:0,lastDisconnectReason:"",lastDisconnectTime:0,socketOffineTime:0}}),Object.defineProperty(this,X,{writable:!0,value:void 0}),Object.defineProperty(this,Q,{writable:!0,value:void 0}),this.debugLog=(...e)=>{var t;(0,n.Z)({socketId:null==(t=A(this,$)[$])?void 0:t.id,connectionMode:A(this,W)[W],connectionStatus:this.connectionStatus},A(this,J)[J])},this.onAppOnline=()=>{var e;this.connectionStatus!==M&&this.connectionStatus!==D&&(null==(e=A(this,$)[$])||e.disconnect(),this.reconfigureSocket())},Object.defineProperty(this,ee,{writable:!0,value:()=>{if(!A(this,$)[$])return;const e={connect:()=>{var e;A(this,$)[$]&&(A(this,K)[K]?A(this,K)[K]!==(null==(e=A(this,$)[$])?void 0:e.id)&&(A(this,K)[K]=A(this,$)[$].id,this.connectionStatus!==D&&(this.connectionStatus=D)):(A(this,K)[K]=A(this,$)[$].id,this.connectionStatus=M),A(this,J)[J].socketOffineTime=A(this,J)[J].connectionAttempt<2?0:Date.now()-A(this,J)[J].lastDisconnectTime,A(this,W)[W]===H&&this.clearWatchdog())},reconnect:()=>{var e,t,s;this.connectionStatus!==D&&(A(this,K)[K]!==(null==(e=A(this,$)[$])?void 0:e.id)||null!=(t=A(this,$)[$])&&t.id)&&(this.connectionStatus=D,A(this,K)[K]=null==(s=A(this,$)[$])?void 0:s.id)},reconnecting:()=>{this.connectionStatus="reconnecting"},reconnect_failed:()=>{this.connectionStatus=I,A(this,W)[W]!==H&&this.setupWatchdog()},disconnect:e=>{A(this,J)[J].lastDisconnectReason=e,A(this,J)[J].lastDisconnectTime=Date.now(),this.connectionStatus=I},reconnect_attempt:e=>{A(this,J)[J].connectionAttempt=e}};for(const[t,s]of Object.entries(e))A(this,$)[$].on(t,s);globalThis.addEventListener("online",this.onAppOnline)}}),this.reconfigureSocket=(e=_)=>{if(!A(this,$)[$])return;A(this,W)[W]=e,this.debugLog("reconfiguring socket to mode ",e);const{reconnection:t,reconnectionAttempts:s,reconnectionDelay:o,reconnectionDelayMax:r,timeout:i}=(0,n.Z)({},A(this,X)[X],V[e]);i&&A(this,$)[$].io.timeout(i),t&&A(this,$)[$].io.reconnection(t),s&&A(this,$)[$].io.reconnectionAttempts(s),o&&A(this,$)[$].io.reconnectionDelay(o),r&&A(this,$)[$].io.reconnectionDelayMax(r),A(this,$)[$].connect()},this.destroyConnection=()=>{var e,t;A(this,$)[$]&&(this.debugLog("destroying conenction "),null==(e=A(this,$)[$])||e.removeAllListeners(),null==(t=A(this,$)[$])||t.disconnect(),A(this,$)[$]=null),this.connectionStatus=I,globalThis.removeEventListener("online",this.onAppOnline)},this.createConnection=({connectionMode:e=A(this,W)[W],forceConnect:t=!1}={})=>{t&&this.destroyConnection(),A(this,W)[W]!==e&&(A(this,W)[W]=e),this.connectionStatus===M&&A(this,$)[$]||(A(this,J)[J].connectionAttempt++,A(this,$)[$]=N()(`${A(this,X)[X].baseUrl}`,(0,n.Z)({},V[e],A(this,X)[X])),A(this,ee)[ee]())},this.clearWatchdog=()=>{clearInterval(A(this,Q)[Q]),A(this,Q)[Q]=void 0,this.reconfigureSocket()},this.setupWatchdog=()=>{A(this,Q)[Q]=setTimeout((()=>{this.connectionStatus===I&&this.reconfigureSocket(H)}),F)},this.waitForConnection=()=>new Promise(((e,t)=>{if(this.connectionStatus===M||this.connectionStatus===D)return e();this.subscribeToConnectionStatus((t=>{if(t===M||t===D)return e()}))})),A(this,W)[W]=e.connectionMode||_,A(this,X)[X]=e,this.createConnection()}subscribeToConnectionStatus(e){A(this,Y)[Y].on("status",e)}attachListener(e,t){var s;null==(s=A(this,$)[$])||s.on(e,t)}onReconnect(e){A(this,Y)[Y].on("status",(t=>{t===D&&e()}))}async emit(e){return await this.waitForConnection(),new Promise(((t,s)=>{var n;null==(n=A(this,$)[$])||n.emit(e.method,e,(e=>t(e)))}))}}class se extends Error{constructor(){super(),this.message="Cancelled Request"}}class ne extends Error{constructor(){super(),this.message="Socket Disconnected"}}class oe extends v{constructor(e,t={}){super(e,t),this.websocket=null,this.options={},this.options=(0,n.Z)({},e,t)}createSocket(){return this.websocket?this.websocket:new te({baseUrl:this.options.baseUrl})}async request(e){return this.websocket||(this.websocket=this.createSocket()),this.websocket.emit(e)}async createSubscription(e){this.websocket||(this.websocket=this.createSocket());const{subscribeRequest:t,unsubscribeRequest:s,subscriptionEvents:n,responseFilter:o,broadcastFilter:r,signal:i}=e,a=new P.Subject,c=new Promise((e=>{const t=()=>{const t=new se;a.error(t),e(t)};null==i||i.addEventListener("abort",t),null!=i&&i.aborted&&t()})),u=await Promise.race([this.websocket.emit(t),c]),h=u instanceof se;for(const e of n)this.websocket.attachListener(e,(e=>{a.next(e)}));let l=a.asObservable();if(this.websocket.onReconnect((()=>{a.error(new ne)})),!h&&o&&r){const e=o(u);l=l.pipe((0,x.filter)((t=>(r&&r(t))===e)))}return{subscribe:l.subscribe.bind(l),unsubscribe:()=>{var e;a.complete(),null==(e=this.websocket)||e.emit(s)}}}extend(e){return new oe(e,this.opts)}}const re=new class extends oe{constructor(e,t=B){super(e,t)}constructRequestContext(e){if(e.url&&!/\/ws\/proxy/.test(e.url.toString())){let t=e.url;if(e.query&&!e.url.toString().includes("?")){const s=p(e.query).toString();t=t.toString()+"?"+s}const s=(0,r.getAuthRequestOptions)();return(0,n.Z)({},e,{url:t,headers:(0,n.Z)({},this.defaultOpts.headers,s.headers,e.headers)})}const{service:t,method:s,path:o,query:i,data:a,headers:c,body:u}=e;if(!o)throw new Error("Path is required");if(!t)throw new Error("Service is required");const h=p(i),l=null!=h&&h.toString()?o+"?"+h.toString():o,d=(0,r.getAuthRequestOptions)();return(0,n.Z)({},this.defaultOpts,{headers:(0,n.Z)({},this.defaultOpts.headers,d.headers,c),data:{service:t,method:s,path:l,data:a,body:u}})}request(e){const t=this.constructRequestContext(e);return super.request(t)}subscribe(e){const t={subscribeRequest:this.constructRequestContext(e.subscribeRequest),unsubscribeRequest:this.constructRequestContext(e.unsubscribeRequest),subscriptionEvents:e.subscriptionEvents,responseFilter:e.responseFilter,broadcastFilter:e.broadcastFilter,signal:e.signal};return super.createSubscription(t)}}({})}}]);
//# sourceMappingURL=29.bd19c5f71c501582.js.map