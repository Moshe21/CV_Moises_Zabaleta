!function(){"use strict";function e(t,n=globalThis,s=["*"]){n.addEventListener("message",(function a(o){if(!o||!o.data)return;if(!function(e,r){for(const t of e){if(r===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(r))return!0}return!1}(s,o.origin))return void console.warn(`Invalid origin '${o.origin}' for comlink proxy`);const{id:g,type:l,path:c}=Object.assign({path:[]},o.data),u=(o.data.argumentList||[]).map(m);let A;try{const r=c.slice(0,-1).reduce(((e,r)=>e[r]),t),n=c.reduce(((e,r)=>e[r]),t);switch(l){case"GET":A=n;break;case"SET":r[c.slice(-1)[0]]=m(o.data.value),A=!0;break;case"APPLY":A=n.apply(r,u);break;case"CONSTRUCT":A=function(e){return Object.assign(e,{[k]:!0})}(new n(...u));break;case"ENDPOINT":{const{port1:r,port2:n}=new MessageChannel;e(t,n),A=function(e,r){return j.set(e,r),e}(r,[r])}break;case"RELEASE":A=void 0;break;default:return}}catch(e){A={value:e,[C]:0}}Promise.resolve(A).catch((e=>({value:e,[C]:0}))).then((e=>{const[s,o]=i(e);n.postMessage(Object.assign(Object.assign({},s),{id:g}),o),"RELEASE"===l&&(n.removeEventListener("message",a),r(n),P in t&&"function"==typeof t[P]&&t[P]())})).catch((e=>{const[r,t]=i({value:new TypeError("Unserializable return value"),[C]:0});n.postMessage(Object.assign(Object.assign({},r),{id:g}),t)}))})),n.start&&n.start()}function r(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function t(e,r){return a(e,[],r)}function n(e){if(e)throw new Error("Proxy has been released and is not useable")}function s(e){return g(e,{type:"RELEASE"}).then((()=>{r(e)}))}function a(e,r=[],t=function(){}){let l=!1;const c=new Proxy(t,{get(t,o){if(n(l),o===T)return()=>{!function(e){N&&N.unregister(e)}(c),s(e),l=!0};if("then"===o){if(0===r.length)return{then:()=>c};const t=g(e,{type:"GET",path:r.map((e=>e.toString()))}).then(m);return t.then.bind(t)}return a(e,[...r,o])},set(t,s,a){n(l);const[o,c]=i(a);return g(e,{type:"SET",path:[...r,s].map((e=>e.toString())),value:o},c).then(m)},apply(t,s,i){n(l);const c=r[r.length-1];if(c===S)return g(e,{type:"ENDPOINT"}).then(m);if("bind"===c)return a(e,r.slice(0,-1));const[u,A]=o(i);return g(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:u},A).then(m)},construct(t,s){n(l);const[a,i]=o(s);return g(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},i).then(m)}});return function(e,r){const t=(L.get(r)||0)+1;L.set(r,t),N&&N.register(e,r,e)}(c,e),c}function o(e){const r=e.map(i);return[r.map((e=>e[0])),(t=r.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}function i(e){for(const[r,t]of O)if(t.canHandle(e)){const[n,s]=t.serialize(e);return[{type:"HANDLER",name:r,value:n},s]}return[{type:"RAW",value:e},j.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return O.get(e.name).deserialize(e.value);case"RAW":return e.value}}function g(e,r,t){return new Promise((n=>{const s=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function r(t){t.data&&t.data.id&&t.data.id===s&&(e.removeEventListener("message",r),n(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:s},r),t)}))}function l(e,r={}){const{maxDepth:t=Number.POSITIVE_INFINITY,useToJSON:n=!0}=r;return"object"==typeof e&&null!==e?B({from:e,seen:[],forceEnumerable:!0,maxDepth:t,depth:0,useToJSON:n,serialize:!0}):"function"==typeof e?`[Function: ${e.name||"anonymous"}]`:e}function c(e){return Boolean(e)&&"object"==typeof e&&"name"in e&&"message"in e&&"stack"in e}function u(e){return e.name.startsWith(z)}var A,d,f=Object.create,h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,b=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,y=(e,r,t)=>(t=null!=e?f(b(e)):{},((e,r,t,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let t of x(r))w.call(e,t)||undefined===t||h(e,t,{get:()=>r[t],enumerable:!(n=p(r,t))||n.enumerable});return e})(!r&&e&&e.__esModule?t:h(t,"default",{value:e,enumerable:!0}),e)),v=(A={"../../node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,r){!function(t,n){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],n);else if(void 0!==e)n(r);else{var s={exports:{}};n(s),t.browser=s.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:e,(function(e){if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",t=e=>{const t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(t).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r=void 0){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const s=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},a=e=>1==e?"argument":"arguments",o=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const m=(e,r={},t={})=>{let n=Object.create(null),g={has:(r,t)=>t in e||t in n,get(g,l,c){if(l in n)return n[l];if(!(l in e))return;let u=e[l];if("function"==typeof u)if("function"==typeof r[l])u=o(e,e[l],r[l]);else if(i(t,l)){let r=((e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((a,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,s({resolve:a,reject:o},r))}catch(s){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,s),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(t[e](...n),a()):t[e](...n,s({resolve:a,reject:o},r))}))})(l,t[l]);u=o(e,e[l],r)}else u=u.bind(e);else if("object"==typeof u&&null!==u&&(i(r,l)||i(t,l)))u=m(u,r[l],t[l]);else{if(!i(t,"*"))return Object.defineProperty(n,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(r){e[l]=r}}),u;u=m(u,r[l],t["*"])}return n[l]=u,u},set:(r,t,s,a)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},l=Object.create(e);return new Proxy(l,g)},g=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}),l=new n((e=>"function"!=typeof e?e:function(r){const t=m(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)})),c=new n((e=>"function"!=typeof e?e:function(r,t,n){let s,a,o=!1,i=new Promise((e=>{s=function(r){o=!0,e(r)}}));try{a=e(r,t,s)}catch(e){a=Promise.reject(e)}const m=!0!==a&&(g=a)&&"object"==typeof g&&"function"==typeof g.then;var g;if(!0!==a&&!m&&!o)return!1;return(m?a:i).then((e=>{n(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),u=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},A=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=u.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},d={devtools:{network:{onRequestFinished:g(l)}},runtime:{onMessage:g(c),onMessageExternal:g(c),sendMessage:A.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:A.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},f={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":f},services:{"*":f},websites:{"*":f}},m(e,d,t)};e.exports=t(chrome)}else e.exports=globalThis.browser}))}},function(){return d||(0,A[x(A)[0]])((d={exports:{}}).exports,d),d.exports}),E=y(v()),k=Symbol("Comlink.proxy"),S=Symbol("Comlink.endpoint"),T=Symbol("Comlink.releaseProxy"),P=Symbol("Comlink.finalizer"),C=Symbol("Comlink.thrown"),M=e=>"object"==typeof e&&null!==e||"function"==typeof e,O=new Map([["proxy",{canHandle:e=>M(e)&&e[k],serialize(r){const{port1:t,port2:n}=new MessageChannel;return e(r,t),[n,[n]]},deserialize:e=>(e.start(),t(e))}],["throw",{canHandle:e=>M(e)&&C in e,serialize({value:e}){let r;return r=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[r,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]),L=new WeakMap,N="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const r=(L.get(e)||0)-1;L.set(e,r),0===r&&s(e)})),j=new WeakMap;y(v());var I=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map((e=>[e.name,e])),R=new Map(I),_=class e extends Error{name="NonError";constructor(r){super(e._prepareSuperMessage(r))}static _prepareSuperMessage(e){try{return JSON.stringify(e)}catch{return String(e)}}},F=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0},{property:"cause",enumerable:!1}],D=new WeakSet,$=e=>R.get(e)??Error,B=({from:e,seen:r,to:t,forceEnumerable:n,maxDepth:s,depth:a,useToJSON:o,serialize:i})=>{if(t||(t=Array.isArray(e)?[]:!i&&c(e)?new($(e.name)):{}),r.push(e),a>=s)return t;if(o&&"function"==typeof e.toJSON&&!D.has(e))return(e=>{D.add(e);const r=e.toJSON();return D.delete(e),r})(e);const m=e=>B({from:e,seen:[...r],forceEnumerable:n,maxDepth:s,depth:a,useToJSON:o,serialize:i});for(const[n,s]of Object.entries(e))if(s&&s instanceof Uint8Array&&"Buffer"===s.constructor.name)t[n]="[object Buffer]";else if(null===s||"object"!=typeof s||"function"!=typeof s.pipe){if("function"!=typeof s)if(s&&"object"==typeof s)r.includes(e[n])?t[n]="[Circular]":(a++,t[n]=m(e[n]));else try{t[n]=s}catch{}}else t[n]="[object Stream]";for(const{property:r,enumerable:s}of F)void 0!==e[r]&&null!==e[r]&&Object.defineProperty(t,r,{value:c(e[r])?m(e[r]):e[r],enumerable:!!n||s,configurable:!0,writable:!0});return t},U={canHandle:O.get("throw").canHandle,serialize:({value:e})=>{let r;return r=e instanceof Error?{isError:!0,value:l(e)}:{isError:!1,value:e},[r,[]]},deserialize:e=>{if(e.isError)throw function(e,r={}){const{maxDepth:t=Number.POSITIVE_INFINITY}=r;if(e instanceof Error)return e;if(function(e){return Boolean(e)&&"object"==typeof e&&"message"in e&&!Array.isArray(e)}(e)){const r=$(e.name);return B({from:e,seen:[],to:new r,maxDepth:t,depth:0,serialize:!1})}return new _(e)}(e.value);throw e.value}};O.set("throw",U);var z="COM__",W=y(v(),1),q=(e,r,t=[])=>new Proxy((()=>{}),{get:(n,s)=>q(e,r,[...t,s.toString()]),apply:(n,s,a)=>e({path:t,args:a,target:r,brexRpc:!0})}),V=e=>({error:e,isOk:!1,isErr:!0}),H="s_eat_that_apple",J="data-sleek-tpm-id",Y=function(e,r){let t;return q((e=>t?W.default.tabs.sendMessage(t,e):W.default.runtime.sendMessage(e)),e)}("WEB-EXT-COUPON-SDK");if(window.top!==window.self)throw new Error("Not in main frame.");var K,G=new class{trustedPageMember=void 0;isPageLoadTriggered=!1;checkVisibilityState=!1;connectedSubframes=[];connectedMainframe;elementsCheckInterval=void 0;url=window.location.hostname+window.location.pathname+window.location.hash;constructor(){this.setupTabVisibilityChangeListener(),this.injectTpm(),E.default.runtime.onConnect.addListener((r=>{var t,n;u(r)&&(t="FRAME_CONTROLLER",n=()=>this,r=>{u(r)&&r.name.substring(z.length)===t&&e(n(),function(e,r){const t=new WeakMap;return{postMessage:r=>{e.postMessage(r)},addEventListener:(n,s)=>{const a=async(e,t)=>{if(!u(t))return;if(t.name.substr(z.length)!==r)return;const n=new MessageEvent("message",{data:e});void 0!==s.handleEvent?s.handleEvent(n):s(n)};"message"===n&&(e.onMessage.addListener(a),t.set(s,a))},removeEventListener:(r,n)=>{if("message"!==r)return;const s=t.get(n);s&&(e.onMessage.removeListener(s),t.delete(n))}}}(r,t))})(r)})),document.prerendering?self.performance?.getEntriesByType?.("navigation")[0]?.activationStart>0?this.handlePageLoadAndActive():document.addEventListener("prerenderingchange",(()=>{this.handlePageLoadAndActive()})):"complete"===document.readyState?this.handlePageLoadAndActive():window.addEventListener("load",this.handlePageLoadAndActive,{once:!0}),window.addEventListener("message",this.handleMessage),setInterval(this.checkSubframeConnections,5e3),setInterval((()=>{const e=window.location.hostname+window.location.pathname+window.location.hash;e!==this.url&&(this.url=e,window.clearInterval(this.elementsCheckInterval),this.handleUrlChange({title:document.title,url:window.location.href}))}),500)}handlePageLoad(e){return Y.tabService.handlePageLoad(e.url)}handleUrlChange(e){return Y.tabService.handleUrlChange(e.url)}captureCleanDom=async()=>{await this.waitForMainframe();const e=(await Promise.all(this.connectedSubframes.map((async e=>{const r=await((e,r=75)=>new Promise((t=>{const n=setTimeout((()=>{t(void 0)}),r);e.then((e=>{clearTimeout(n),t(e)}))})))(e.remoteFrame.captureCleanDom());return[e.id,r]})))).filter((([,e])=>void 0!==e));return this.connectedMainframe?.remoteFrame.captureCleanDom(e)};isShopifyStore=()=>document.querySelectorAll("meta[name*='shopify']").length>0||document.querySelectorAll("script[src*='shopify.com']").length>0;isShopifyCouponPage=()=>!(!this.isShopifyStore()||!window.location.pathname.includes("/checkouts/"))&&(!!(new XPathEvaluator).evaluate('//*[contains(text(), "Discount code or gift card")]',document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue||[document.querySelector('input[id="checkout_reduction_code"], input[name="checkout[reduction_code]"], input[placeholder*="code"i]'),document.querySelector('button[id="checkout_submit"], button[name="checkout[submit]"], button[aria-label*="apply"i]')].some((e=>null!==e)));clickNodeId=async e=>this.performTaskOnAllFrames((r=>r.clickNodeId(e)));waitForNetworkIdle=async()=>this.trustedPageMember?.waitForRequestsComplete();inputNodeId=async(e,r)=>this.performTaskOnAllFrames((async t=>await t.inputNodeId(e,r)));waitForDomSettle=(e=500,r=1e4,t={childList:!0,subtree:!0,attributes:!0})=>new Promise((n=>{let s=setTimeout((()=>{a.disconnect(),clearTimeout(o),n()}),e);const a=new MutationObserver((()=>{clearTimeout(s),s=setTimeout((()=>{a.disconnect(),clearTimeout(o),n()}),e)}));a.observe(document,t);const o=setTimeout((()=>{a.disconnect(),n()}),r)}));areAllSelectorsPresent=e=>0===e.length||e.map((e=>document.querySelector(e))).every((e=>{const r=e?.getBoundingClientRect(),t=r&&r.width>0&&r.height>0;return null!==e&&!e.hasAttribute("disabled")&&t}));waitForElementsAndEmitReady=async e=>{this.elementsCheckInterval&&window.clearInterval(this.elementsCheckInterval),this.elementsCheckInterval=window.setInterval((()=>{this.areAllSelectorsPresent(e)&&(window.clearInterval(this.elementsCheckInterval),Y.tabService.handleCouponPageReady())}),2500)};injectTpm=async()=>{if(document.documentElement.querySelector(`script#${J}`))return;if(!(await E.default.storage.local.get(H))[H])return;const e=document.createElement("script");e.id=J,e.src=E.default.runtime.getURL("/tpm.js"),document.documentElement.appendChild(e)};reloadShopifyCheckout=async()=>{const{origin:e,pathname:r}=new URL(window.location.href),t=await fetch(`${e}${r}`),n=await t.text();document.open(),document.write(n),document.close()};async waitForMainframe(e=200,r=50){return new Promise((t=>{if(this.connectedMainframe)return void t();const n=Date.now()+e,s=setInterval((()=>this.connectedMainframe||Date.now()>=n?(clearInterval(s),void t()):void 0),r)}))}async performTaskOnAllFrames(e){if(!this.connectedMainframe)return V(new Error("No mainframe connected."));const r=await e(this.connectedMainframe.remoteFrame);if(r.isOk)return r;const t=await Promise.allSettled(this.connectedSubframes.map((r=>e(r.remoteFrame))));for(const e of t)if("fulfilled"===e.status&&e.value.isOk)return e.value;return V(new Error("No frame performed task."))}handleMessage=r=>{if("SYN_FRAME"===r.data.message){if(!r.source)return;const[n]=r.ports;e(this,n);const{port1:s,port2:a}=new MessageChannel,{id:o,isFrameController:i,url:m}=r.data;r.source.postMessage({message:"ACK_FRAME",targetId:o},{targetOrigin:"*",transfer:[s]});const g={remoteFrame:t(a),id:o,origin:r.origin,url:m};if(i?this.connectedMainframe=g:this.connectedSubframes.push(g),!i){const e=Array.from(document.querySelectorAll("iframe")).find((e=>e.contentWindow===r.source));e?e?.setAttribute("data-sleek-frame-id",o):this.connectedSubframes.forEach((async e=>{r.source&&await e.remoteFrame.attachSubframeId(m,o)}))}}else if("SLEEK_SYN_TPM_CONTROLLER_MESSAGE"===r.data.message){if(!r.source)return;const[n]=r.ports;e(this,n);const{port1:s,port2:a}=new MessageChannel;r.source.postMessage({message:"SLEEK_ACK_TPM_CONTROLLER_MESSAGE"},{targetOrigin:"*",transfer:[s]}),this.trustedPageMember=t(a)}};checkSubframeConnections=async()=>{const e=(await Promise.all(this.connectedSubframes.map((async e=>{const r=await(async e=>new Promise((r=>{const t=setTimeout((()=>r(!1)),500);e.checkConnection().then((e=>{clearTimeout(t),r(e)}))})))(e.remoteFrame);return{...e,isConnected:r}})))).filter((({isConnected:e})=>!1===e)),r=new Set(e.map((({id:e})=>e)));this.connectedSubframes=this.connectedSubframes.filter((({id:e})=>!r.has(e)))};handlePageLoadAndActive=()=>{"hidden"===document.visibilityState&&this.checkVisibilityState||this.triggerPageLoad()};triggerPageLoad=()=>{setTimeout((()=>{this.handlePageLoad({title:document.title,url:window.location.href})}),50),this.isPageLoadTriggered=!0};setupTabVisibilityChangeListener(){document.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&this.checkVisibilityState||this.isPageLoadTriggered||this.handlePageLoadAndActive()}))}};K={frameController:G},W.default.runtime.onMessage.addListener(((e,r,t)=>{let{path:n,args:s,target:a,brexRpc:o}=e;if(!o||!0!==o||a&&"WEB-EXT-COUPON-SDK"!==a)return;let i=function(e,r){let t=e;for(let e of r)if(t=t[e],void 0===t)return;return t}(K,n);if("function"!=typeof i)throw new Error(`No such method for RPC call ${n.join(".")}`);let m={sender:r},g=i(...i.length>s.length?[m,...s]:s);return g instanceof Promise?g.then(t):t(g),!0}))}();