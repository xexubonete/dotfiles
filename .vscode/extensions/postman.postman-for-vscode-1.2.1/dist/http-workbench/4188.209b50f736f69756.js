(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[4188],{84188:(e,n,t)=>{"use strict";function r(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=void 0!==t(34406)&&{NX_DEPLOY_VERSION:"prod.2024-07-31.09-23",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/17429526610425169658",NX_TASK_TARGET_PROJECT:"http-workbench",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"17429526610425169658"}.REMOTES||{},a=function(e){var n=e.indexOf("@");if(n<=0||n===e.length-1)throw new Error('Invalid request "'.concat(e,'"'));return[e.substring(n+1),e.substring(0,n)]},c=function(e){var n,r=l(),o="string"==typeof e?r[e]:e;if(o.asyncContainer)n="function"==typeof o.asyncContainer.then?o.asyncContainer:o.asyncContainer();else{var i=o.global,u=o.uniqueKey?o.uniqueKey:i,a=new Error,c="undefined"!=typeof window?window:globalThis.__remote_scope__;if("undefined"==typeof window)c._config[u]=o.url;else if(c.remoteLoading||(c.remoteLoading={}),c.remoteLoading[u])return c.remoteLoading[u];n=new Promise((function(e,n){function r(){var n=c[i];return e(n)}if(void 0!==c[i])return r();t.l(o.url,(function(e){if(void 0!==c[i])return r();var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading script failed.\n("+t+": "+o+" or global var "+i+")",a.name="ScriptExternalLoadError",a.type=t,a.request=o,n(a)}),u)})).catch((function(e){return console.error("container is offline, returning fake remote"),console.error(e),{fake:!0,get:function(e){return console.warn("faking",e,"module on, its offline"),Promise.resolve((function(){return{__esModule:!0,default:function(){return null}}}))},init:function(){}}})),"undefined"!=typeof window&&(c.remoteLoading[u]=n)}return n},l=function(){return Object.entries(u).reduce((function(e,n){var t=i(n,2),r=t[0],o=t[1];if("object"==typeof o&&"function"==typeof o.then)e[r]={asyncContainer:o};else if("function"==typeof o)e[r]={asyncContainer:Promise.resolve(o())};else{if("string"!=typeof o)throw console.warn("remotes process",{NX_DEPLOY_VERSION:"prod.2024-07-31.09-23",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/17429526610425169658",NX_TASK_TARGET_PROJECT:"http-workbench",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"17429526610425169658"}.REMOTES),new Error('[mf] Invalid value received for runtime_remote "'.concat(r,'"'));if(o.startsWith("internal ")){var u=i(o.replace("internal ","").split("?"),2);u[0];var c=u[1];if(c){var l=new URLSearchParams(c).get("remote");if(l){var s=i(a(l),2),f=s[0],p=s[1];e[r]={global:p,url:f}}}}else{var h=i(a(o),2),d=h[0],y=h[1];e[r]={global:y,url:d}}}return e}),{})};function s(e,n,t,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void t(e)}a.done?n(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){s(i,r,o,u,a,"next",e)}function a(e){s(i,r,o,u,a,"throw",e)}u(void 0)}))}}function p(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var h,d=function(e){return e.then((function(e){return t.S.default?e:Promise.resolve(t.I("default")).then((function(){return e}))})).then((function(e){try{e.init(t.S.default)}catch(e){}return e}))},y=(h=f((function(e){var n;return p(this,(function(t){return n=c(e),[2,d(n)]}))})),function(e){return h.apply(this,arguments)}),b=function(){var e=f((function(e){var n,t;return p(this,(function(r){switch(r.label){case 0:if(!e)throw Error("Remote container options is empty");return n="undefined"!=typeof window?window:globalThis.__remote_scope__,"string"!=typeof e?[3,1]:(t=e,[3,3]);case 1:return t=e.uniqueKey,n[t]?[3,3]:[4,y({global:e.global,url:e.url})];case 2:if(!r.sent())throw Error("Remote container ".concat(e.url," is empty"));r.label=3;case 3:return[2,n[t]]}}))}));return function(n){return e.apply(this,arguments)}}();!function(){var e=f((function(e){var n,t,r,o,i,u,a;return p(this,(function(c){switch(c.label){case 0:return n=e.remoteContainer,t=e.modulePath,r=e.exportName,[4,b(n)];case 1:o=c.sent(),c.label=2;case 2:return c.trys.push([2,4,,5]),[4,null==o?void 0:o.get(t)];case 3:return(i=c.sent())?(u=i(),r?[2,u&&"object"==typeof u?u[r]:void 0]:[2,u]):[2,void 0];case 4:return a=c.sent(),console.error(a),[2,void 0];case 5:return[2]}}))}))}();function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n,t,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void t(e)}a.done?n(c):Promise.resolve(c).then(r,o)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){m(i,r,o,u,a,"next",e)}function a(e){m(i,r,o,u,a,"throw",e)}u(void 0)}))}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var E,O,S,P=function(){var e=w((function(e,n){var o;return T(this,(function(i){switch(i.label){case 0:return[4,(c=e,Promise.resolve().then((function(){return r(t(60731)(c))})))];case 1:if(!(o=i.sent()))throw new Error("Unable to load requested remote from ".concat(e," with scope ").concat(n));return window[n]=(u=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}({},o),a=null!=(a={__initializing:!1,__initialized:!1})?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(a)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(a)).forEach((function(e){Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(a,e))})),u),[2]}var u,a,c}))}));return function(n,t){return e.apply(this,arguments)}}(),A=function(){var e=w((function(){var e;return T(this,(function(n){switch(n.label){case 0:return(null==(e=t.S)?void 0:e.default)?[3,2]:[4,t.I("default")];case 1:n.sent(),n.label=2;case 2:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=w((function(e){var n,r;return T(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),n=t.S,e.__initialized||e.__initializing?[3,2]:(e.__initializing=!0,[4,e.init(n.default)]);case 1:o.sent(),e.__initialized=!0,delete e.__initializing,o.label=2;case 2:return[3,4];case 3:return r=o.sent(),console.error(r),[3,4];case 4:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=w((function(e){var n,r,o,i,u,a,c,l,s,f,p,h,d;return T(this,(function(y){switch(y.label){case 0:return n=e.url,r=e.scope,o=e.module,i=e.remoteEntryFileName,u=void 0===i?"remoteEntry.js":i,a=e.bustRemoteEntryCache,c=void 0===a||a,l=e.esm,s=void 0!==l&&l,f=r,window[f]?[3,6]:(p="","string"!=typeof n?[3,1]:(p=n,[3,3]));case 1:return[4,n()];case 2:p=y.sent(),y.label=3;case 3:return h="".concat(p,"/").concat(u),d=s?P(h,r):function(e,n,r){return new Promise((function(o,i){var u=r?"?t=".concat((new Date).getTime()):"";t.l("".concat(e).concat(u),(function(e){var n;if("load"===(null==e?void 0:e.type))return o();var t=null==e||null===(n=e.target)||void 0===n?void 0:n.src,r=new Error;r.message="Loading script failed.\n(missing: "+t+")",r.name="ScriptExternalLoadError",i(r)}),n)}))}(h,r,c),[4,Promise.all([d,A()])];case 4:if(y.sent(),!window[f])throw new Error("Remote loaded successfully but ".concat(r," could not be found! Verify that the name is correct in the Webpack configuration!"));return[4,Promise.all([k(window[f]),window[f].get("."===o||o.startsWith("./")?o:"./".concat(o))])];case 5:return[2,(0,_.apply(void 0,[y.sent(),2])[1])()];case 6:return[4,window[f].get("."===o||o.startsWith("./")?o:"./".concat(o))];case 7:return[2,y.sent()()];case 8:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();function j(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,n,t,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void t(e)}a.done?n(c):Promise.resolve(c).then(r,o)}E=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"getLogger",value:function(){return this.loggerInstance}},{key:"setLogger",value:function(e){return this.loggerInstance=e||console,e}}],null&&j(n.prototype,null),t&&j(n,t),e}(),O="loggerInstance",S=console,O in E?Object.defineProperty(E,O,{value:S,enumerable:!0,configurable:!0,writable:!0}):E[O]=S;!function(){var e,n=(e=function(e){return function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(n){return[2,c(e).then((function(e){return e})).then((function(n){return"undefined"==typeof window&&Object.hasOwnProperty.call(e,"globalThis")?{get:function(t){return n.get(t).then((function(n){var r=function(n){"function"==typeof o[n]?Object.defineProperty(i,n,{get:function(){return function(){var r;return globalThis.usedChunks&&globalThis.usedChunks.add("".concat(e.global,"->").concat(t)),(r=o)[n].apply(r,arguments)}},enumerable:!0}):Object.defineProperty(i,n,{get:function(){return globalThis.usedChunks&&globalThis.usedChunks.add("".concat(e.global,"->").concat(t)),o[n]},enumerable:!0})},o=n(),i={__esModule:o.__esModule};for(var u in o)r(u);return o.then?Promise.resolve((function(){return i})):function(){return i}}))},init:n.init}:n}))]}))},function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){L(i,r,o,u,a,"next",e)}function a(e){L(i,r,o,u,a,"throw",e)}u(void 0)}))})}();n.Zw=N},34406:e=>{var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var a,c=[],l=!1,s=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):s=-1,c.length&&p())}function p(){if(!l){var e=u(f);l=!0;for(var n=c.length;n;){for(a=c,c=[];++s<n;)a&&a[s].run();s=-1,n=c.length}a=null,l=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{return t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function d(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new h(e,n)),1!==c.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);
//# sourceMappingURL=4188.209b50f736f69756.js.map