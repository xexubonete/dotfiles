var context_bar;(()=>{"use strict";var e,t,a,r,n,o,l,d,s,i,f,c,p,u,h,b,m,v,g,y,P,w,x={6326:(e,t,a)=>{var r={"./ContextBar":()=>Promise.all([a.e(969),a.e(540),a.e(1730),a.e(1314),a.e(6494),a.e(9578),a.e(452),a.e(5650)]).then((()=>()=>a(5650)))},n=(e,t)=>(a.R=t,t=a.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),o=(e,t)=>{if(a.S){var r="default",n=a.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[r]=e,a.I(r,t)}};a.d(t,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-07-31.09-23"}}()}},_={};function k(e){var t=_[e];if(void 0!==t)return t.exports;var a=_[e]={id:e,loaded:!1,exports:{}};return x[e].call(a.exports,a,a.exports,k),a.loaded=!0,a.exports}k.m=x,k.c=_,k.amdO={},k.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return k.d(t,{a:t}),t},k.d=(e,t)=>{for(var a in t)k.o(t,a)&&!k.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((t,a)=>(k.f[a](e,t),t)),[])),k.u=e=>e+"."+{29:"9f18f37551797311",71:"69fc818082a7fdce",157:"1cf16212b833fc5f",381:"6dc5a0bd5c7498f4",398:"71f7c5845e3059ce",452:"fb1b585e068b9f18",477:"8aa8ebf18f0c3731",488:"96cb3fa932bf0156",540:"d6e66a63f1f6f179",607:"9eb6699b2b9006c4",686:"02bd55773cba4aef",721:"889dfe14ff9a4b0b",966:"bc737478f4cf99eb",969:"2173d5d761a0d429",1141:"682b90047daa86a0",1148:"7011dd2b0440bb47",1180:"75e5f752e33a315c",1312:"f90e44a1624fd04d",1314:"0b194cb3362dc2a2",1327:"44d511442828b87c",1466:"43c584da530acb24",1730:"1b0b58fcf77ca5e8",1854:"66d23f4e12f049e5",1910:"2fff034ac99bf3f2",2063:"8d00b2ef669e502e",2220:"b8cd6272d83426d4",2223:"2362545fce118ce0",2389:"441cde53f0574f9b",2668:"961e8ff542ebb970",2712:"07c52a433fabaa71",2784:"15c28329a95618ca",2833:"aaa52ff1107872d8",2908:"4b785c5b77cae610",2955:"1db99fd2439a8720",3101:"1358df934792e8dc",3193:"7b777dd8e360bdfe",3980:"c6ac55487fb7c18b",4007:"35ee861c690ee0c0",4163:"935ed3bebe80c042",4193:"d8ae7459a0a08788",4376:"78c86611f09e1e63",4433:"4a68597e46c21bef",4546:"3aa6da1249dcbd57",4803:"38a3bae8642c1d0f",4987:"91c3fd485890840d",5110:"2d6987642296353a",5348:"0eca5850c4de9e8c",5505:"8fc54f96bd5239a1",5650:"964bed3235ecb91b",5860:"2b2b5c401ec1e1be",5912:"b26c25640bee8636",6010:"b118896bc2d3e38b",6277:"b27fc9a63b7343c3",6353:"1a4c26b1ba8380c4",6462:"e1d23db20f9136e9",6486:"18024946ec2086f0",6494:"bb2b0986f7f75552",6591:"1028fec8c78dd3bf",6663:"d469c9d1f47621a6",6686:"71ef1ebfdd4d8db2",6940:"b93187607afda12d",7107:"965e7a174c322437",7201:"e173d154337dfbec",7204:"9cd45c59e3334b8c",7291:"92ee71ccca2e6ab1",7316:"ebf98d0d3c396abe",7560:"dfd39cfa5e648cba",7768:"62fcd63840488dca",7908:"d411e527482c0956",8007:"ed20bf5b88b1fdb1",8013:"4b74a00b186fd0c6",8081:"57500206caa3ec3d",8137:"081cd324e86f94dc",8183:"cf8ab9aa8e17bb1e",8210:"45a0ecdbeae91c49",8225:"4a75806f9bed34b0",8316:"152df8e859c9fb09",8394:"9b75491c7881525f",8537:"cbdedf5d14bc18dc",8609:"df915ea369ef22dd",8653:"7bbdaae33528a003",8670:"49ff01de9a266c45",8708:"1132f4c934e90d47",8864:"804a8bce86f99f12",8876:"758133421dbf003e",8912:"2cd13410e9d9b731",9203:"7aad95fd18ac43a1",9211:"a2e3bfe474db3cc3",9304:"66f46d7c4239de99",9444:"d3a4e424406edd39",9460:"c39ce844a59019a3",9467:"5899f3939898d9d4",9543:"86520ffe5b8b23eb",9578:"82ff8ac9aab12f6f",9842:"5d92599bff690b07",9951:"26c6961ccfa3ee70"}[e]+".js",k.miniCssF=e=>e+"."+{1312:"fb3b47a2ddbf682b",2220:"fb3b47a2ddbf682b",8225:"285dac8b1f5d36c6"}[e]+".css",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),k.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="context-bar:",k.l=(a,r,n,o)=>{if(e[a])e[a].push(r);else{var l,d;if(void 0!==n)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var f=s[i];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==t+n){l=f;break}}l||(d=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,k.nc&&l.setAttribute("nonce",k.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[r];var c=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},t={};k.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];k.o(k.S,a)||(k.S[a]={});var o=k.S[a],l="context-bar",d=(e,t,a,r)=>{var n=o[e]=o[e]||{},d=n[t];if(!d||!d.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(d&&d.loaded&&d.__postman_local_chunk__)return;n[t]={get:a,from:l,eager:!!r,__postman_local_chunk__:!0}}else(!d||!d.loaded&&(!r!=!d.eager?r:l>d.from))&&(n[t]={get:a,from:l,eager:!!r})},s=[];return"default"===a&&(d("@amplitude/analytics-browser","2.5.2",(()=>k.e(9467).then((()=>()=>k(9467))))),d("@postman/aether-design-tokens","1.4.0",(()=>k.e(6462).then((()=>()=>k(6462))))),d("@postman/app-amplitude","2.2.0",(()=>Promise.all([k.e(3101),k.e(71),k.e(7560)]).then((()=>()=>k(71))))),d("@postman/app-analytics-service","3.1.0",(()=>Promise.all([k.e(8876),k.e(8183)]).then((()=>()=>k(721))))),d("@postman/app-app-config","0.1.2",(()=>k.e(1854).then((()=>()=>k(6613))))),d("@postman/app-auth","1.2.1",(()=>k.e(2668).then((()=>()=>k(2668))))),d("@postman/app-billing-service","1.6.0",(()=>Promise.all([k.e(6663),k.e(7201),k.e(5860),k.e(4193)]).then((()=>()=>k(4193))))),d("@postman/app-bootstrap","1.8.0",(()=>Promise.all([k.e(9460),k.e(969),k.e(6486),k.e(8708),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(6663),k.e(3101),k.e(7201),k.e(7291),k.e(1180),k.e(9578),k.e(9203),k.e(8225)]).then((()=>()=>k(5662))))),d("@postman/app-data-fetching","1.3.0",(()=>Promise.all([k.e(540),k.e(1466),k.e(8013)]).then((()=>()=>k(8013))))),d("@postman/app-desktop-communication-sdk","1.1.1",(()=>Promise.all([k.e(540),k.e(9211)]).then((()=>()=>k(966))))),d("@postman/app-dialogs","1.2.0",(()=>Promise.all([k.e(9460),k.e(969),k.e(6486),k.e(5348),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(8081)]).then((()=>()=>k(3911))))),d("@postman/app-error-handling","1.2.0",(()=>Promise.all([k.e(9460),k.e(969),k.e(157),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(607),k.e(381),k.e(6010),k.e(1148)]).then((()=>()=>k(730))))),d("@postman/app-feature-flags","1.6.0",(()=>Promise.all([k.e(540),k.e(6663),k.e(3101),k.e(8394),k.e(8137)]).then((()=>()=>k(8137))))),d("@postman/app-i18n","1.3.0",(()=>Promise.all([k.e(540),k.e(5912),k.e(8912)]).then((()=>()=>k(8912))))),d("@postman/app-lazy-modals","1.3.3",(()=>Promise.all([k.e(9460),k.e(969),k.e(6486),k.e(5348),k.e(540),k.e(1730),k.e(1314),k.e(6494),k.e(7316)]).then((()=>()=>k(2908))))),d("@postman/app-navigation","1.4.0",(()=>Promise.all([k.e(9460),k.e(969),k.e(6486),k.e(4007),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(607),k.e(2833),k.e(398),k.e(7291),k.e(488),k.e(2389)]).then((()=>()=>k(488))))),d("@postman/app-network","2.0.0",(()=>Promise.all([k.e(1466),k.e(6663),k.e(3101),k.e(1180),k.e(29)]).then((()=>()=>k(29))))),d("@postman/app-sentry","1.2.0",(()=>Promise.all([k.e(540),k.e(607),k.e(6663),k.e(381),k.e(9951)]).then((()=>()=>k(9951))))),d("@postman/app-ui","1.3.0",(()=>Promise.all([k.e(9460),k.e(969),k.e(6486),k.e(157),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(2833),k.e(477),k.e(2220)]).then((()=>()=>k(9057))))),d("@postman/app-user-service","1.10.1",(()=>Promise.all([k.e(540),k.e(1466),k.e(6663),k.e(3101),k.e(7201),k.e(5860),k.e(7107)]).then((()=>()=>k(7107))))),d("@postman/app-vscode-utils","1.3.1",(()=>Promise.all([k.e(540),k.e(607),k.e(398),k.e(9444)]).then((()=>()=>k(9444))))),d("@sentry/react","7.91.0",(()=>Promise.all([k.e(3193),k.e(540)]).then((()=>()=>k(3193))))),d("@tanstack/react-query-devtools","4.36.1",(()=>k.e(2223).then((()=>()=>k(2223))))),d("@tanstack/react-query","4.36.1",(()=>Promise.all([k.e(8609),k.e(540)]).then((()=>()=>k(8609))))),d("clsx","1.2.1",(()=>k.e(6277).then((()=>()=>k(6277))))),d("eventemitter3","5.0.1",(()=>k.e(686).then((()=>()=>k(686))))),d("i18next-http-backend","2.4.2",(()=>k.e(5110).then((()=>()=>k(5110))))),d("i18next-icu","2.3.0",(()=>k.e(4546).then((()=>()=>k(4546))))),d("i18next-resources-to-backend","1.2.0",(()=>k.e(4163).then((()=>()=>k(4163))))),d("i18next","23.7.15",(()=>k.e(9842).then((()=>()=>k(9842))))),d("launchdarkly-react-client-sdk","3.0.10",(()=>Promise.all([k.e(4376),k.e(540)]).then((()=>()=>k(4376))))),d("mobx-react","7.6.0",(()=>Promise.all([k.e(8007),k.e(540),k.e(1730)]).then((()=>()=>k(8007))))),d("prop-types","15.8.1",(()=>k.e(3980).then((()=>()=>k(3980))))),d("react-dom","16.14.0",(()=>Promise.all([k.e(8316),k.e(540)]).then((()=>()=>k(8316))))),d("react-draggable","4.4.6",(()=>Promise.all([k.e(1327),k.e(540),k.e(1730),k.e(1314),k.e(2833)]).then((()=>()=>k(1327))))),d("react-error-boundary","4.0.12",(()=>Promise.all([k.e(540),k.e(2955)]).then((()=>()=>k(2955))))),d("react-i18next","14.0.0",(()=>Promise.all([k.e(540),k.e(4987)]).then((()=>()=>k(1141))))),d("react-router-dom","6.11.2",(()=>Promise.all([k.e(6591),k.e(540)]).then((()=>()=>k(6591))))),d("react","16.14.0",(()=>k.e(2784).then((()=>()=>k(2784))))),d("rxjs/operators","7.8.1",(()=>Promise.all([k.e(6686),k.e(4803)]).then((()=>()=>k(4803))))),d("rxjs","7.8.1",(()=>Promise.all([k.e(6686),k.e(8210)]).then((()=>()=>k(8210))))),d("socket.io-client","2.5.0",(()=>Promise.all([k.e(7768),k.e(8864)]).then((()=>()=>k(7768))))),d("styled-components","5.3.6",(()=>Promise.all([k.e(5505),k.e(540)]).then((()=>()=>k(5505))))),d("ua-parser-js","1.0.37",(()=>k.e(6353).then((()=>()=>k(6353))))),d("uuid","8.3.2",(()=>k.e(9304).then((()=>()=>k(9304))))),d("web-vitals","3.5.1",(()=>k.e(9543).then((()=>()=>k(9543)))))),e[a]=s.length?Promise.all(s).then((()=>e[a]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var t=k.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},r=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},n=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,a+="u"==(typeof(d=e[o]))[0]?"-":(r>0?".":"")+(r=2,d);return a}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+s()+")":1===d?"("+s()+" || "+s()+")":2===d?l.pop()+" "+l.pop():n(d))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var l=0,d=1,s=!0;;d++,l++){var i,f,c=d<e.length?(typeof e[d])[0]:"";if(l>=t.length||"o"==(f=(typeof(i=t[l]))[0]))return!s||("u"==c?d>r&&!n:""==c!=n);if("u"==f){if(!s||"u"!=c)return!1}else if(s)if(c==f)if(d<=r){if(i!=e[d])return!1}else{if(n?i>e[d]:i<e[d])return!1;i!=e[d]&&(s=!1)}else if("s"!=c&&"n"!=c){if(n||d<=r)return!1;s=!1,d--}else{if(d<=r||f<c!=n)return!1;s=!1}else"s"!=c&&"n"!=c&&(s=!1,d--)}}var p=[],u=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?u()|u():2==h?u()&u():h?o(h,t):!u())}return!!u()},l=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},d=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+n(r)+")",s=(e,t,a,r)=>{var n=l(e,a);return o(r,n)||c(d(e,a,n,r)),p(e[a][n])},i=(e,t,a,r)=>{var n=l(e,a);if(!o(r,n))throw new Error(d(e,a,n,r));return p(e[a][n])},f=(e,t,a)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!o(a,t)||e&&!r(e,t)?e:t),0))&&n[t]},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),h=(u=e=>function(t,a,r,n){var o=k.I(t);return o&&o.then?o.then(e.bind(e,t,k.S[t],a,r,n)):e(t,k.S[t],a,r,n)})(((e,t,a,r,n)=>t&&k.o(t,a)?s(t,0,a,r):n())),b=u(((e,t,a,r,n)=>{var o=t&&k.o(t,a)&&f(t,a,r);return o?p(o):n()})),m=u(((e,t,a,r,n)=>t&&k.o(t,a)?i(t,0,a,r):n())),v={},g={3101:()=>b("default","@postman/app-auth",[4,1,2,1],(()=>k.e(2668).then((()=>()=>k(2668))))),9485:()=>b("default","@amplitude/analytics-browser",[1,2,5,2],(()=>k.e(9467).then((()=>()=>k(9467))))),8876:()=>b("default","web-vitals",[1,3,0,4],(()=>k.e(9543).then((()=>()=>k(9543))))),6663:()=>b("default","@postman/app-app-config",[4,0,1,2],(()=>k.e(1854).then((()=>()=>k(6613))))),7201:()=>b("default","@postman/app-data-fetching",[4,1,3,0],(()=>Promise.all([k.e(540),k.e(1466),k.e(8013)]).then((()=>()=>k(8013))))),5860:()=>b("default","@postman/app-network",[4,2,0,0],(()=>Promise.all([k.e(1466),k.e(3101),k.e(1180),k.e(29)]).then((()=>()=>k(29))))),540:()=>m("default","react",[4,16,14,0],(()=>k.e(2784).then((()=>()=>k(2784))))),1466:()=>b("default","@postman/app-vscode-utils",[4,1,3,1],(()=>Promise.all([k.e(540),k.e(607),k.e(398),k.e(2712)]).then((()=>()=>k(9444))))),1730:()=>m("default","react-dom",[4,16,14,0],(()=>k.e(8316).then((()=>()=>k(8316))))),1314:()=>b("default","prop-types",[1,15,8,1],(()=>k.e(3980).then((()=>()=>k(3980))))),3753:()=>b("default","@postman/aether-design-tokens",[1,1,2,0],(()=>k.e(7908).then((()=>()=>k(6462))))),9530:()=>b("default","styled-components",[4,5,3,6],(()=>k.e(5505).then((()=>()=>k(5505))))),7291:()=>b("default","@postman/app-sentry",[4,1,2,0],(()=>Promise.all([k.e(607),k.e(6663),k.e(381),k.e(8670)]).then((()=>()=>k(9951))))),1180:()=>b("default","@postman/app-error-handling",[4,1,2,0],(()=>Promise.all([k.e(9460),k.e(969),k.e(157),k.e(540),k.e(1466),k.e(1730),k.e(1314),k.e(6494),k.e(607),k.e(381),k.e(6010),k.e(8653)]).then((()=>()=>k(730))))),9578:()=>h("default","@postman/app-ui",[4,1,3,0],(()=>Promise.all([k.e(9460),k.e(6486),k.e(157),k.e(1466),k.e(2833),k.e(477),k.e(1312)]).then((()=>()=>k(9057))))),9381:()=>b("default","@postman/app-amplitude",[4,2,2,0],(()=>k.e(71).then((()=>()=>k(71))))),6880:()=>b("default","@postman/app-analytics-service",[4,3,1,0],(()=>Promise.all([k.e(8876),k.e(721)]).then((()=>()=>k(721))))),4568:()=>b("default","@postman/app-feature-flags",[4,1,6,0],(()=>Promise.all([k.e(8394),k.e(7204)]).then((()=>()=>k(8137))))),4118:()=>b("default","@postman/app-i18n",[4,1,3,0],(()=>Promise.all([k.e(5912),k.e(1910)]).then((()=>()=>k(8912))))),3920:()=>b("default","@postman/app-lazy-modals",[4,1,3,3],(()=>Promise.all([k.e(5348),k.e(2908)]).then((()=>()=>k(2908))))),2640:()=>b("default","ua-parser-js",[1,1,0,33],(()=>k.e(6353).then((()=>()=>k(6353))))),1596:()=>b("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>k.e(2223).then((()=>()=>k(2223))))),4527:()=>m("default","@tanstack/react-query",[1,4,29,1],(()=>k.e(8609).then((()=>()=>k(8609))))),607:()=>m("default","react-router-dom",[4,6,11,2],(()=>k.e(6591).then((()=>()=>k(6591))))),381:()=>b("default","@sentry/react",[1,7,49,0],(()=>k.e(3193).then((()=>()=>k(3193))))),6010:()=>b("default","react-error-boundary",[1,4,0,4],(()=>k.e(8537).then((()=>()=>k(2955))))),8749:()=>b("default","@postman/app-billing-service",[4,1,6,0],(()=>Promise.all([k.e(7201),k.e(5860),k.e(4433)]).then((()=>()=>k(4193))))),6669:()=>b("default","@postman/app-user-service",[4,1,10,1],(()=>Promise.all([k.e(1466),k.e(7201),k.e(5860),k.e(6940)]).then((()=>()=>k(7107))))),8439:()=>b("default","launchdarkly-react-client-sdk",[1,3,0,10],(()=>k.e(4376).then((()=>()=>k(4376))))),1669:()=>b("default","i18next-http-backend",[1,2,4,2],(()=>k.e(5110).then((()=>()=>k(5110))))),6523:()=>b("default","i18next-icu",[1,2,3,0],(()=>k.e(4546).then((()=>()=>k(4546))))),8980:()=>b("default","i18next-resources-to-backend",[1,1,2,0],(()=>k.e(4163).then((()=>()=>k(4163))))),3398:()=>b("default","i18next",[1,23,7,15],(()=>k.e(9842).then((()=>()=>k(9842))))),5352:()=>b("default","react-i18next",[1,14,0,0],(()=>k.e(1141).then((()=>()=>k(1141))))),2833:()=>b("default","clsx",[1,1,2,1],(()=>k.e(6277).then((()=>()=>k(6277))))),398:()=>b("default","uuid",[1,8,3,2],(()=>k.e(9304).then((()=>()=>k(9304))))),6246:()=>b("default","@postman/app-dialogs",[4,1,2,0],(()=>Promise.all([k.e(5348),k.e(2063)]).then((()=>()=>k(3911))))),7321:()=>b("default","@postman/app-desktop-communication-sdk",[4,1,1,1],(()=>k.e(966).then((()=>()=>k(966))))),2154:()=>b("default","eventemitter3",[1,5,0,0],(()=>k.e(686).then((()=>()=>k(686))))),4928:()=>b("default","socket.io-client",[1,2,1,1],(()=>Promise.all([k.e(7768),k.e(8864)]).then((()=>()=>k(7768))))),6777:()=>b("default","rxjs",[1,7,8,1],(()=>Promise.all([k.e(6686),k.e(8210)]).then((()=>()=>k(8210))))),8410:()=>b("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([k.e(6686),k.e(4803)]).then((()=>()=>k(4803))))),355:()=>b("default","react-draggable",[1,4,4,5],(()=>k.e(1327).then((()=>()=>k(1327))))),7106:()=>b("default","mobx-react",[1,7,6,0],(()=>k.e(8007).then((()=>()=>k(8007))))),9245:()=>b("default","@postman/app-navigation",[4,1,4,0],(()=>Promise.all([k.e(9460),k.e(6486),k.e(4007),k.e(1466),k.e(607),k.e(2833),k.e(398),k.e(7291),k.e(488)]).then((()=>()=>k(488)))))},y={29:[2154,4928,6777,8410],71:[9485],381:[381],398:[398],452:[9245],477:[355,7106],488:[6246,7321],540:[540],607:[607],1180:[1180],1314:[1314],1466:[1466],1730:[1730],2833:[2833],3101:[3101],5860:[5860],5912:[1669,6523,8980,3398,5352],6010:[6010],6494:[3753,9530],6663:[6663],7201:[7201],7291:[7291],8013:[1596,4527],8394:[8749,6669,8439],8876:[8876],9203:[9381,6880,4568,4118,3920,2640],9578:[9578]},k.f.consumes=(e,t)=>{k.o(y,e)&&y[e].forEach((e=>{if(k.o(v,e))return t.push(v[e]);var a=t=>{v[e]=0,k.m[e]=a=>{delete k.c[e],a.exports=t()}},r=t=>{delete v[e],k.m[e]=a=>{throw delete k.c[e],t}};try{var n=g[e]();n.then?t.push(v[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))},P=e=>new Promise(((t,a)=>{var r=k.miniCssF(e),n=k.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(l=a[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var l;if((n=(l=o[r]).getAttribute("data-href"))===e||n===t)return l}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=d,n.parentNode.removeChild(n),r(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),w={7578:0},k.f.miniCss=(e,t)=>{w[e]?t.push(w[e]):0!==w[e]&&{1312:1,2220:1,8225:1}[e]&&t.push(w[e]=P(e).then((()=>{w[e]=0}),(t=>{throw delete w[e],t})))},(()=>{var e={7578:0};k.f.j=(t,a)=>{var r=k.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(1(31[24]|180|466|730)|3(101|81|98)|5(40|860|912)|6(010|07|494|663)|72[09]1|2833|8394|8876|9203|9578)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=k.p+k.u(t),l=new Error;k.l(o,(a=>{if(k.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,l,d]=a,s=0;if(o.some((t=>0!==e[t]))){for(r in l)k.o(l,r)&&(k.m[r]=l[r]);d&&d(k)}for(t&&t(a);s<o.length;s++)n=o[s],k.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),k.nc=void 0;var E=k(6326);context_bar=E})();
//# sourceMappingURL=remoteEntry.js.map