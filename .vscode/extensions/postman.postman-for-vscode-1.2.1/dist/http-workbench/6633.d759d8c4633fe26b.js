"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[6633],{11041:(e,t,n)=>{n.r(t),n.d(t,{CookieActionsContext:()=>l,CookieActionsProvider:()=>p,cookiesEq:()=>v,getCookieIdentifier:()=>O,getCookieManager:()=>s,makeCookie:()=>C,parseCookieString:()=>E,stringifyCookie:()=>y,useCookieActions:()=>S});var o=n(40540),a=n.n(o),r=n(21466);class d{async fetchCookies(){return await r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_COOKIES",payload:{}})}async openCookiesEditor(){r.VSCodeCommunicationsService.postMessageToExtension({type:"COOKIES:OPEN_EDITOR",payload:{}})}addCookie(e){const t={type:"ADD_COOKIE",cookie:e};return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}deleteCookie(e){const t={type:"DELETE_COOKIE",cookie:e};return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}updateCookie(e,t){const n={type:"UPDATE_COOKIE",originalCookie:e,updatedCookie:t};return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:n})}deleteDomain(e){const t={type:"DELETE_DOMAIN",domain:e};return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"SAVE_COOKIES",payload:t})}}let i=null;function s(){return null!==i||(i=new d),i}var u=n(52322);const c=s(),l=a().createContext(c),p=({children:e})=>(0,u.jsx)(l.Provider,{value:c,children:e});var f=n(93355),m=n(7560);const h=/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[\da-f]{1,4}:){7}(?:[\da-f]{1,4}|:)|(?:[\da-f]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[\da-f]{1,4}|:)|(?:[\da-f]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,2}|:)|(?:[\da-f]{1,4}:){4}(?:(?::[\da-f]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,3}|:)|(?:[\da-f]{1,4}:){3}(?:(?::[\da-f]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,4}|:)|(?:[\da-f]{1,4}:){2}(?:(?::[\da-f]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,5}|:)|[\da-f]{1,4}:(?:(?::[\da-f]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,6}|:)|(?::(?:(?::[\da-f]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[\da-f]{1,4}){1,7}|:)))$)/,g=(e,t="\\s")=>null==e?void 0:e.replace(new RegExp(`^([${t}]*)(.*?)([${t}]*)$`),"$2"),C=(e,t)=>({domain:t,name:e,value:"value",path:"/",expires:(0,f.Z)(new Date,{years:1}).getTime()}),y=e=>function(e){let t=e.name+"="+e.value+"; Path="+e.path+";";if(!e.hostOnly&&e.domain){let n=e.domain;"["===n[0]&&"]"===n[n.length-1]&&(n=n.slice(1,-1)),t+=" Domain="+e.domain+";"}return e.secure&&(t+=" Secure;"),e.httpOnly&&(t+=" HttpOnly;"),e.expires&&-1!==e.expires&&(t+=" Expires="+new Date(e.expires).toUTCString()+";"),t}(e),E=(e,t)=>function(e,t){const n=t.trim().split(";").filter(Boolean),o=n.length,a={domain:"",name:"",path:"",value:"",hostOnly:!0};if(0===n.length)return(0,m.Z)({},a,{domain:e});let r=0;const d=n[r].trim().split(/=([\s\S]*)/);if(d.length>0)try{const t=g(d[0],"\n "),n=g(d[1]||"","\n ");a.url=e,a.name=t,a.value=n}catch(e){console.log("Error setting cookie: "+e)}for(a.secure=!1,a.httpOnly=!1,n.some((function(e){return e&&0===e.trim().indexOf("Max-Age")}))&&n.filter((function(e){return e&&0!==e.trim().indexOf("Expires")})),a.domain=e,r++;r<o;r++)try{const[e,t]=n[r].trim().split("="),o=null==(i=g(e,"\n "))?void 0:i.toLocaleLowerCase(),d=g(t,"\n ");if("secure"===o){a.secure=!0,a.url&&!a.url.startsWith("https://")&&(a.url.startsWith("http://")?a.url.replace("http://","https://"):a.url="https://"+a.url);continue}if("httponly"===o){a.httpOnly=!0;continue}if("path"===o&&d){a.path=d;continue}if("expires"===o&&d){const e=new Date(d);e&&(a.expires=e.getTime());continue}if("max-age"===o&&d){const e=new Date;a.expires=e.getTime()+1e3*Number.parseInt(d);continue}if("domain"===o&&d){let e=d;"["===e[0]&&"]"===e[e.length-1]&&(e=e.slice(1,-1)),e.includes(".")&&!h.test(e)&&(a.hostOnly=!1)}a[o]=d}catch(e){throw new Error("Could not save property for cookie: "+n[r])}var i;return a}(e,t),v=(e,t)=>e.domain===t.domain&&e.path===t.path&&e.name===t.name,O=({domain:e,path:t,name:n})=>`${e}:${t}:${n}`;function S(){return(0,o.useContext)(l)}},19785:(e,t,n)=>{function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>o})},42765:(e,t,n)=>{function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>o})},93355:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(90929),a=n(63761),r=n(28187),d=n(66700),i=n(19785),s=n(42765);function u(e,t){if((0,i.Z)(2,arguments),!t||"object"!==(0,o.Z)(t))return new Date(NaN);var n=t.years?(0,s.Z)(t.years):0,u=t.months?(0,s.Z)(t.months):0,c=t.weeks?(0,s.Z)(t.weeks):0,l=t.days?(0,s.Z)(t.days):0,p=t.hours?(0,s.Z)(t.hours):0,f=t.minutes?(0,s.Z)(t.minutes):0,m=t.seconds?(0,s.Z)(t.seconds):0,h=(0,d.Z)(e),g=u||n?(0,r.Z)(h,u+12*n):h,C=l||c?(0,a.Z)(g,l+7*c):g,y=1e3*(m+60*(f+60*p));return new Date(C.getTime()+y)}},63761:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(42765),a=n(66700),r=n(19785);function d(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),d=(0,o.Z)(t);return isNaN(d)?new Date(NaN):d?(n.setDate(n.getDate()+d),n):n}},28187:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(42765),a=n(66700),r=n(19785);function d(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),d=(0,o.Z)(t);if(isNaN(d))return new Date(NaN);if(!d)return n;var i=n.getDate(),s=new Date(n.getTime());return s.setMonth(n.getMonth()+d+1,0),i>=s.getDate()?s:(n.setFullYear(s.getFullYear(),s.getMonth(),i),n)}},66700:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(90929),a=n(19785);function r(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,o.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);
//# sourceMappingURL=6633.d759d8c4633fe26b.js.map