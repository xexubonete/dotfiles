var workspace_switcher;(()=>{"use strict";var e,a,t,r,n,o,l,d,s,i,c,f,p,u,h,m,b,v,g,y,w,P,k={7061:(e,a,t)=>{var r={"./WorkspaceSwitcher":()=>Promise.all([t.e(541),t.e(605),t.e(3093),t.e(540),t.e(1730),t.e(1314),t.e(6494),t.e(6663),t.e(7201),t.e(5860),t.e(398),t.e(1180),t.e(9245),t.e(99),t.e(5627),t.e(6317)]).then((()=>()=>t(5650))),"./ActiveWorkspace":()=>Promise.all([t.e(541),t.e(540),t.e(1730),t.e(1314),t.e(6494),t.e(9245),t.e(99),t.e(5115)]).then((()=>()=>t(5115)))},n=(e,a)=>(t.R=a,a=t.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,a),o=(e,a)=>{if(t.S){var r="default",n=t.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=e,t.I(r,a)}};t.d(a,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-07-31.09-23"}}()}},_={};function x(e){var a=_[e];if(void 0!==a)return a.exports;var t=_[e]={id:e,loaded:!1,exports:{}};return k[e].call(t.exports,t,t.exports,x),t.loaded=!0,t.exports}x.m=k,x.c=_,x.amdO={},x.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return x.d(a,{a}),a},x.d=(e,a)=>{for(var t in a)x.o(a,t)&&!x.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((a,t)=>(x.f[t](e,a),a)),[])),x.u=e=>e+"."+{29:"95858d5e162f73e4",71:"c0fedf1298775de7",99:"800c52694f4cf436",157:"70c13eda38b1f052",381:"2a75e90a9e9157e8",398:"f9ff3da660193074",488:"f6be5f204a594203",540:"0234455e03f11527",541:"19959bae57c63f6b",605:"0e8d41dba21dfbdf",607:"d402ed5cd316e8ac",686:"77c9cadd4cd8d13a",721:"c0962c0a5b2cdc3f",966:"6640a51f6f9c795c",1141:"02b4acd55049171c",1148:"5b143beab8615018",1180:"72c0e46a8f71968a",1312:"9c50e1b7ff55389d",1314:"ad067083a73dd32d",1327:"f7f72a2c9630abc0",1403:"643a68db23133942",1466:"a868cb679403d585",1586:"3f44ebd77dbf1d34",1609:"b60ed8703d43e21d",1628:"24dfd2f8d1641859",1730:"3f6470e51fe984f9",1842:"54b228fb1e271dd7",1854:"6f4dde802979ca33",1910:"c066e51fb86f6b43",2063:"8d19e909a81fa990",2220:"3292d15dd29b4638",2223:"778668a5e1ae06a1",2389:"37af163b1e5e4481",2668:"49c18ddc3a427791",2712:"436ff9f37ae89689",2784:"22243e099fca3ee7",2833:"c2cd38af48679833",2908:"2a2578cbacb22b24",2955:"0ed2103ef2f5d06b",3093:"abb7735ae99dff72",3101:"cfe108769819a632",3193:"8b87fc49d3fa5ba8",3955:"d66b6544144c47ea",3980:"916371807d77dbbe",4007:"937592891d2c8179",4163:"fa28007a09193640",4193:"8703fa2e020e5c7f",4376:"e25feba4911c508b",4433:"dd7dd058f334890b",4506:"06865d484bc10598",4546:"9588867532aac3b7",4776:"c67ad4a9324a5649",4803:"a2bc941b4ce6c4c6",4987:"708f7d4411ac1feb",5110:"ca301bc070aae442",5115:"4965a998d85195b1",5348:"f800ccc45068b261",5505:"4dea52a775222c08",5627:"902d0405eb4d334d",5860:"7b8d9fe438da0cb9",5912:"70064d53897b8b31",6010:"3ab2e2678eb722f0",6166:"b9ebbfce8cad666c",6277:"e09163ffe1575c67",6317:"5e74f2eba76b8be1",6353:"f353e0aa5c3a901c",6462:"999c1739d9d801f4",6494:"76a70d55eedfadb5",6591:"ba7a76a97fa0b6fc",6663:"0e554731aa14c846",6686:"86f0088252c3506e",6940:"c6f77800cd3569ec",7107:"7ecd8d1d77755e94",7128:"529ad5b65c5e3db9",7201:"acb284eb73d1af15",7204:"54b8ae92e81caebd",7291:"0e96e081acf94e4f",7397:"4361dc5224661e37",7560:"daa693f1a462ad15",7768:"08e1a79c2c1adac5",7908:"7ffe11472b4f498e",8007:"8f4b9014425f56de",8013:"3845f18a6244e9f3",8137:"1a7ae5e28411d62a",8183:"432647c7d656aa9a",8210:"aaad8234d3522bd4",8316:"36b0b5ed60ed5c4b",8394:"d89ff0e6e557f0f6",8537:"480e4e7b82c4c828",8609:"cd9a6ad07c2d1b8a",8653:"364ac77cf297dba4",8670:"8bb4d28dc71064c1",8864:"3ced25029e8c76d7",8876:"23908b0286d70296",8912:"e109f0af6f944205",9211:"8a304b62099c089a",9245:"9c0a355b721bf200",9304:"d16a81e6d3c91f16",9444:"0c364609aaf93f8a",9467:"9186241f6658f076",9543:"7e2a8f7cef9455a4",9605:"89b969cf509f3318",9842:"fac286dc4e5301bf",9951:"7e2efaffaa9a14a3"}[e]+".js",x.miniCssF=e=>e+"."+{1312:"fb3b47a2ddbf682b",2220:"fb3b47a2ddbf682b",3955:"8c421e29239c31eb"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),x.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),e={},a="workspace-switcher:",x.l=(t,r,n,o)=>{if(e[t])e[t].push(r);else{var l,d;if(void 0!==n)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var c=s[i];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==a+n){l=c;break}}l||(d=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,x.nc&&l.setAttribute("nonce",x.nc),l.setAttribute("data-webpack",a+n),l.src=t),e[t]=[r];var f=(a,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),a)return a(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),d&&document.head.appendChild(l)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},a={};x.I=(t,r)=>{r||(r=[]);var n=a[t];if(n||(n=a[t]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[t])return e[t];x.o(x.S,t)||(x.S[t]={});var o=x.S[t],l="workspace-switcher",d=(e,a,t,r)=>{var n=o[e]=o[e]||{},d=n[a];if(!d||!d.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(d&&d.loaded&&d.__postman_local_chunk__)return;n[a]={get:t,from:l,eager:!!r,__postman_local_chunk__:!0}}else(!d||!d.loaded&&(!r!=!d.eager?r:l>d.from))&&(n[a]={get:t,from:l,eager:!!r})},s=[];return"default"===t&&(d("@amplitude/analytics-browser","2.5.2",(()=>x.e(9467).then((()=>()=>x(9467))))),d("@postman/aether-design-tokens","1.4.0",(()=>x.e(6462).then((()=>()=>x(6462))))),d("@postman/app-amplitude","2.2.0",(()=>Promise.all([x.e(3101),x.e(71),x.e(7560)]).then((()=>()=>x(71))))),d("@postman/app-analytics-service","3.1.0",(()=>Promise.all([x.e(8876),x.e(8183)]).then((()=>()=>x(721))))),d("@postman/app-app-config","0.1.2",(()=>x.e(1854).then((()=>()=>x(6613))))),d("@postman/app-auth","1.2.1",(()=>x.e(2668).then((()=>()=>x(2668))))),d("@postman/app-billing-service","1.6.0",(()=>Promise.all([x.e(6663),x.e(7201),x.e(5860),x.e(4193)]).then((()=>()=>x(4193))))),d("@postman/app-bootstrap","1.8.0",(()=>Promise.all([x.e(541),x.e(605),x.e(1842),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(6663),x.e(7201),x.e(3101),x.e(1180),x.e(7291),x.e(4506),x.e(3955)]).then((()=>()=>x(5662))))),d("@postman/app-data-fetching","1.3.0",(()=>Promise.all([x.e(540),x.e(1466),x.e(8013)]).then((()=>()=>x(8013))))),d("@postman/app-desktop-communication-sdk","1.1.1",(()=>Promise.all([x.e(540),x.e(9211)]).then((()=>()=>x(966))))),d("@postman/app-dialogs","1.2.0",(()=>Promise.all([x.e(541),x.e(605),x.e(5348),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(2063)]).then((()=>()=>x(3911))))),d("@postman/app-error-handling","1.2.0",(()=>Promise.all([x.e(541),x.e(157),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(607),x.e(381),x.e(6010),x.e(8653)]).then((()=>()=>x(730))))),d("@postman/app-feature-flags","1.6.0",(()=>Promise.all([x.e(540),x.e(6663),x.e(3101),x.e(8394),x.e(8137)]).then((()=>()=>x(8137))))),d("@postman/app-i18n","1.3.0",(()=>Promise.all([x.e(540),x.e(5912),x.e(8912)]).then((()=>()=>x(8912))))),d("@postman/app-lazy-modals","1.3.3",(()=>Promise.all([x.e(541),x.e(605),x.e(5348),x.e(540),x.e(1730),x.e(1314),x.e(6494),x.e(9605)]).then((()=>()=>x(2908))))),d("@postman/app-navigation","1.4.0",(()=>Promise.all([x.e(541),x.e(605),x.e(4007),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(607),x.e(398),x.e(2833),x.e(7291),x.e(488),x.e(2389)]).then((()=>()=>x(488))))),d("@postman/app-network","2.0.0",(()=>Promise.all([x.e(1466),x.e(6663),x.e(3101),x.e(1180),x.e(29)]).then((()=>()=>x(29))))),d("@postman/app-sentry","1.2.0",(()=>Promise.all([x.e(540),x.e(607),x.e(6663),x.e(381),x.e(9951)]).then((()=>()=>x(9951))))),d("@postman/app-ui","1.3.0",(()=>Promise.all([x.e(541),x.e(605),x.e(157),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(2833),x.e(6166),x.e(2220)]).then((()=>()=>x(6166))))),d("@postman/app-user-service","1.10.1",(()=>Promise.all([x.e(540),x.e(1466),x.e(6663),x.e(7201),x.e(5860),x.e(3101),x.e(7107)]).then((()=>()=>x(7107))))),d("@postman/app-vscode-utils","1.3.1",(()=>Promise.all([x.e(540),x.e(607),x.e(398),x.e(9444)]).then((()=>()=>x(9444))))),d("@postman/app-workspace-service","1.8.0",(()=>Promise.all([x.e(540),x.e(1466),x.e(607),x.e(6663),x.e(7201),x.e(5860),x.e(9245),x.e(4776)]).then((()=>()=>x(4776))))),d("@sentry/react","7.91.0",(()=>Promise.all([x.e(3193),x.e(540)]).then((()=>()=>x(3193))))),d("@tanstack/react-query-devtools","4.36.1",(()=>x.e(2223).then((()=>()=>x(2223))))),d("@tanstack/react-query","4.36.1",(()=>Promise.all([x.e(8609),x.e(540)]).then((()=>()=>x(8609))))),d("clsx","1.2.1",(()=>x.e(6277).then((()=>()=>x(6277))))),d("eventemitter3","5.0.1",(()=>x.e(686).then((()=>()=>x(686))))),d("i18next-http-backend","2.4.2",(()=>x.e(5110).then((()=>()=>x(5110))))),d("i18next-icu","2.3.0",(()=>x.e(4546).then((()=>()=>x(4546))))),d("i18next-resources-to-backend","1.2.0",(()=>x.e(4163).then((()=>()=>x(4163))))),d("i18next","23.7.15",(()=>x.e(9842).then((()=>()=>x(9842))))),d("launchdarkly-react-client-sdk","3.0.10",(()=>Promise.all([x.e(4376),x.e(540)]).then((()=>()=>x(4376))))),d("mobx-react","7.6.0",(()=>Promise.all([x.e(8007),x.e(540),x.e(1730)]).then((()=>()=>x(8007))))),d("prop-types","15.8.1",(()=>x.e(3980).then((()=>()=>x(3980))))),d("react-dom","16.14.0",(()=>Promise.all([x.e(8316),x.e(540)]).then((()=>()=>x(8316))))),d("react-draggable","4.4.6",(()=>Promise.all([x.e(1327),x.e(540),x.e(1730),x.e(1314),x.e(2833)]).then((()=>()=>x(1327))))),d("react-error-boundary","4.0.12",(()=>Promise.all([x.e(540),x.e(2955)]).then((()=>()=>x(2955))))),d("react-i18next","14.0.0",(()=>Promise.all([x.e(540),x.e(4987)]).then((()=>()=>x(1141))))),d("react-router-dom","6.11.2",(()=>Promise.all([x.e(6591),x.e(540)]).then((()=>()=>x(6591))))),d("react-window-infinite-loader","1.0.8",(()=>Promise.all([x.e(540),x.e(1628)]).then((()=>()=>x(1628))))),d("react-window","1.8.10",(()=>Promise.all([x.e(1586),x.e(540),x.e(7397)]).then((()=>()=>x(1586))))),d("react","16.14.0",(()=>x.e(2784).then((()=>()=>x(2784))))),d("rxjs/operators","7.8.1",(()=>Promise.all([x.e(6686),x.e(4803)]).then((()=>()=>x(4803))))),d("rxjs","7.8.1",(()=>Promise.all([x.e(6686),x.e(8210)]).then((()=>()=>x(8210))))),d("socket.io-client","2.5.0",(()=>Promise.all([x.e(7768),x.e(8864)]).then((()=>()=>x(7768))))),d("styled-components","5.3.6",(()=>Promise.all([x.e(5505),x.e(540)]).then((()=>()=>x(5505))))),d("ua-parser-js","1.0.37",(()=>x.e(6353).then((()=>()=>x(6353))))),d("uuid","8.3.2",(()=>x.e(9304).then((()=>()=>x(9304))))),d("web-vitals","3.5.1",(()=>x.e(9543).then((()=>()=>x(9543)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var a=x.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var t=a.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),t=e=>{var a=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?a(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,a(t[2]))),t[3]&&(r.push([]),r.push.apply(r,a(t[3]))),r},r=(e,a)=>{e=t(e),a=t(a);for(var r=0;;){if(r>=e.length)return r<a.length&&"u"!=(typeof a[r])[0];var n=e[r],o=(typeof n)[0];if(r>=a.length)return"u"==o;var l=a[r],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},n=e=>{var a=e[0],t="";if(1===e.length)return"*";if(a+.5){t+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,t+="u"==(typeof(d=e[o]))[0]?"-":(r>0?".":"")+(r=2,d);return t}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+s()+")":1===d?"("+s()+" || "+s()+")":2===d?l.pop()+" "+l.pop():n(d))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,a)=>{if(0 in e){a=t(a);var r=e[0],n=r<0;n&&(r=-r-1);for(var l=0,d=1,s=!0;;d++,l++){var i,c,f=d<e.length?(typeof e[d])[0]:"";if(l>=a.length||"o"==(c=(typeof(i=a[l]))[0]))return!s||("u"==f?d>r&&!n:""==f!=n);if("u"==c){if(!s||"u"!=f)return!1}else if(s)if(f==c)if(d<=r){if(i!=e[d])return!1}else{if(n?i>e[d]:i<e[d])return!1;i!=e[d]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||d<=r)return!1;s=!1,d--}else{if(d<=r||c<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,d--)}}var p=[],u=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?u()|u():2==h?u()&u():h?o(h,a):!u())}return!!u()},l=(e,a)=>{var t=e[a];return Object.keys(t).reduce(((e,a)=>!e||!t[e].loaded&&r(e,a)?a:e),0)},d=(e,a,t,r)=>"Unsatisfied version "+t+" from "+(t&&e[a][t].from)+" of shared singleton module "+a+" (required "+n(r)+")",s=(e,a,t,r)=>{var n=l(e,t);return o(r,n)||f(d(e,t,n,r)),p(e[t][n])},i=(e,a,t,r)=>{var n=l(e,t);if(!o(r,n))throw new Error(d(e,t,n,r));return p(e[t][n])},c=(e,a,t)=>{var n=e[a];return(a=Object.keys(n).reduce(((e,a)=>!o(t,a)||e&&!r(e,a)?e:a),0))&&n[a]},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),h=(u=e=>function(a,t,r,n){var o=x.I(a);return o&&o.then?o.then(e.bind(e,a,x.S[a],t,r,n)):e(a,x.S[a],t,r,n)})(((e,a,t,r,n)=>a&&x.o(a,t)?s(a,0,t,r):n())),m=u(((e,a,t,r,n)=>{var o=a&&x.o(a,t)&&c(a,t,r);return o?p(o):n()})),b=u(((e,a,t,r,n)=>a&&x.o(a,t)?i(a,0,t,r):n())),v={},g={3101:()=>m("default","@postman/app-auth",[4,1,2,1],(()=>x.e(2668).then((()=>()=>x(2668))))),9485:()=>m("default","@amplitude/analytics-browser",[1,2,5,2],(()=>x.e(9467).then((()=>()=>x(9467))))),8876:()=>m("default","web-vitals",[1,3,0,4],(()=>x.e(9543).then((()=>()=>x(9543))))),6663:()=>m("default","@postman/app-app-config",[4,0,1,2],(()=>x.e(1854).then((()=>()=>x(6613))))),7201:()=>m("default","@postman/app-data-fetching",[4,1,3,0],(()=>Promise.all([x.e(540),x.e(1466),x.e(8013)]).then((()=>()=>x(8013))))),5860:()=>m("default","@postman/app-network",[4,2,0,0],(()=>Promise.all([x.e(1466),x.e(3101),x.e(1180),x.e(29)]).then((()=>()=>x(29))))),540:()=>b("default","react",[4,16,14,0],(()=>x.e(2784).then((()=>()=>x(2784))))),1466:()=>m("default","@postman/app-vscode-utils",[4,1,3,1],(()=>Promise.all([x.e(540),x.e(607),x.e(398),x.e(2712)]).then((()=>()=>x(9444))))),1730:()=>b("default","react-dom",[4,16,14,0],(()=>x.e(8316).then((()=>()=>x(8316))))),1314:()=>m("default","prop-types",[1,15,8,1],(()=>x.e(3980).then((()=>()=>x(3980))))),3753:()=>m("default","@postman/aether-design-tokens",[1,1,2,0],(()=>x.e(7908).then((()=>()=>x(6462))))),9530:()=>m("default","styled-components",[4,5,3,6],(()=>x.e(5505).then((()=>()=>x(5505))))),1180:()=>m("default","@postman/app-error-handling",[4,1,2,0],(()=>Promise.all([x.e(541),x.e(157),x.e(540),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(607),x.e(381),x.e(6010),x.e(1148)]).then((()=>()=>x(730))))),7291:()=>m("default","@postman/app-sentry",[4,1,2,0],(()=>Promise.all([x.e(607),x.e(6663),x.e(381),x.e(8670)]).then((()=>()=>x(9951))))),9381:()=>m("default","@postman/app-amplitude",[4,2,2,0],(()=>x.e(71).then((()=>()=>x(71))))),6880:()=>m("default","@postman/app-analytics-service",[4,3,1,0],(()=>Promise.all([x.e(8876),x.e(721)]).then((()=>()=>x(721))))),4568:()=>m("default","@postman/app-feature-flags",[4,1,6,0],(()=>Promise.all([x.e(8394),x.e(7204)]).then((()=>()=>x(8137))))),4118:()=>m("default","@postman/app-i18n",[4,1,3,0],(()=>Promise.all([x.e(5912),x.e(1910)]).then((()=>()=>x(8912))))),3920:()=>m("default","@postman/app-lazy-modals",[4,1,3,3],(()=>Promise.all([x.e(5348),x.e(2908)]).then((()=>()=>x(2908))))),9578:()=>h("default","@postman/app-ui",[4,1,3,0],(()=>Promise.all([x.e(157),x.e(2833),x.e(6166),x.e(1312)]).then((()=>()=>x(6166))))),2640:()=>m("default","ua-parser-js",[1,1,0,33],(()=>x.e(6353).then((()=>()=>x(6353))))),1596:()=>m("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>x.e(2223).then((()=>()=>x(2223))))),4527:()=>b("default","@tanstack/react-query",[1,4,29,1],(()=>x.e(8609).then((()=>()=>x(8609))))),607:()=>b("default","react-router-dom",[4,6,11,2],(()=>x.e(6591).then((()=>()=>x(6591))))),381:()=>m("default","@sentry/react",[1,7,49,0],(()=>x.e(3193).then((()=>()=>x(3193))))),6010:()=>m("default","react-error-boundary",[1,4,0,4],(()=>x.e(8537).then((()=>()=>x(2955))))),8749:()=>m("default","@postman/app-billing-service",[4,1,6,0],(()=>Promise.all([x.e(7201),x.e(5860),x.e(4433)]).then((()=>()=>x(4193))))),6669:()=>m("default","@postman/app-user-service",[4,1,10,1],(()=>Promise.all([x.e(1466),x.e(7201),x.e(5860),x.e(6940)]).then((()=>()=>x(7107))))),8439:()=>m("default","launchdarkly-react-client-sdk",[1,3,0,10],(()=>x.e(4376).then((()=>()=>x(4376))))),1669:()=>m("default","i18next-http-backend",[1,2,4,2],(()=>x.e(5110).then((()=>()=>x(5110))))),6523:()=>m("default","i18next-icu",[1,2,3,0],(()=>x.e(4546).then((()=>()=>x(4546))))),8980:()=>m("default","i18next-resources-to-backend",[1,1,2,0],(()=>x.e(4163).then((()=>()=>x(4163))))),3398:()=>m("default","i18next",[1,23,7,15],(()=>x.e(9842).then((()=>()=>x(9842))))),5352:()=>m("default","react-i18next",[1,14,0,0],(()=>x.e(1141).then((()=>()=>x(1141))))),398:()=>m("default","uuid",[1,8,3,2],(()=>x.e(9304).then((()=>()=>x(9304))))),2833:()=>m("default","clsx",[1,1,2,1],(()=>x.e(6277).then((()=>()=>x(6277))))),6246:()=>m("default","@postman/app-dialogs",[4,1,2,0],(()=>Promise.all([x.e(5348),x.e(1609)]).then((()=>()=>x(3911))))),7321:()=>m("default","@postman/app-desktop-communication-sdk",[4,1,1,1],(()=>x.e(966).then((()=>()=>x(966))))),2154:()=>m("default","eventemitter3",[1,5,0,0],(()=>x.e(686).then((()=>()=>x(686))))),4928:()=>m("default","socket.io-client",[1,2,1,1],(()=>Promise.all([x.e(7768),x.e(8864)]).then((()=>()=>x(7768))))),6777:()=>m("default","rxjs",[1,7,8,1],(()=>Promise.all([x.e(6686),x.e(8210)]).then((()=>()=>x(8210))))),8410:()=>m("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([x.e(6686),x.e(4803)]).then((()=>()=>x(4803))))),355:()=>m("default","react-draggable",[1,4,4,5],(()=>x.e(1327).then((()=>()=>x(1327))))),7106:()=>m("default","mobx-react",[1,7,6,0],(()=>x.e(8007).then((()=>()=>x(8007))))),9245:()=>m("default","@postman/app-navigation",[4,1,4,0],(()=>Promise.all([x.e(541),x.e(605),x.e(4007),x.e(1466),x.e(1730),x.e(1314),x.e(6494),x.e(607),x.e(398),x.e(2833),x.e(7291),x.e(488)]).then((()=>()=>x(488))))),99:()=>m("default","@postman/app-workspace-service",[4,1,8,0],(()=>Promise.all([x.e(1466),x.e(607),x.e(6663),x.e(7201),x.e(5860),x.e(1403)]).then((()=>()=>x(4776))))),494:()=>m("default","react-window",[1,1,8,8],(()=>x.e(1586).then((()=>()=>x(1586))))),6707:()=>m("default","react-window-infinite-loader",[1,1,0,8],(()=>x.e(7128).then((()=>()=>x(1628)))))},y={29:[2154,4928,6777,8410],71:[9485],99:[99],381:[381],398:[398],488:[6246,7321],540:[540],607:[607],1180:[1180],1314:[1314],1466:[1466],1730:[1730],2833:[2833],3101:[3101],4506:[9381,6880,4568,4118,3920,9578,2640],5627:[494,6707],5860:[5860],5912:[1669,6523,8980,3398,5352],6010:[6010],6166:[355,7106],6494:[3753,9530],6663:[6663],7201:[7201],7291:[7291],8013:[1596,4527],8394:[8749,6669,8439],8876:[8876],9245:[9245]},x.f.consumes=(e,a)=>{x.o(y,e)&&y[e].forEach((e=>{if(x.o(v,e))return a.push(v[e]);var t=a=>{v[e]=0,x.m[e]=t=>{delete x.c[e],t.exports=a()}},r=a=>{delete v[e],x.m[e]=t=>{throw delete x.c[e],a}};try{var n=g[e]();n.then?a.push(v[e]=n.then(t).catch(r)):t(n)}catch(e){r(e)}}))},w=e=>new Promise(((a,t)=>{var r=x.miniCssF(e),n=x.p+r;if(((e,a)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var n=(l=t[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===a))return l}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var l;if((n=(l=o[r]).getAttribute("data-href"))===e||n===a)return l}})(r,n))return a();((e,a,t,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var l=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=d,n.parentNode.removeChild(n),r(s)}},n.href=a,document.head.appendChild(n)})(e,n,a,t)})),P={2030:0},x.f.miniCss=(e,a)=>{P[e]?a.push(P[e]):0!==P[e]&&{1312:1,2220:1,3955:1}[e]&&a.push(P[e]=w(e).then((()=>{P[e]=0}),(a=>{throw delete P[e],a})))},(()=>{var e={2030:0};x.f.j=(a,t)=>{var r=x.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1(31[24]|180|466|730)|3(101|81|98)|5(40|860|912)|6(010|07|494|663)|72[09]1|2833|4506|8394|8876|9245|99)$/.test(a))e[a]=0;else{var n=new Promise(((t,n)=>r=e[a]=[t,n]));t.push(r[2]=n);var o=x.p+x.u(a),l=new Error;x.l(o,(t=>{if(x.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+a+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+a,a)}};var a=(a,t)=>{var r,n,[o,l,d]=t,s=0;if(o.some((a=>0!==e[a]))){for(r in l)x.o(l,r)&&(x.m[r]=l[r]);d&&d(x)}for(a&&a(t);s<o.length;s++)n=o[s],x.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),x.nc=void 0;var S=x(7061);workspace_switcher=S})();
//# sourceMappingURL=remoteEntry.js.map