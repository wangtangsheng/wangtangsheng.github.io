webpackJsonp([0],{"+TWC":function(t,e,r){function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){o(t,e,r[e])})}return t}var o=r("mAPx");t.exports=n},"/uOx":function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new h(n||[]);return a._invoke=s(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=E;return function(i,a){if(o===L)throw new Error("Generator is already running");if(o===P){if("throw"===i)throw a;return y()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=f(u,r);if(c){if(c===S)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===E)throw o=P,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=L;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?P:C,s.arg===S)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=P,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,f(t,e),"throw"===e.method))return S;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,S;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,S):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function d(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:y}}function y(){return{value:m,done:!0}}var m,v=Object.prototype,g=v.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",O=w.toStringTag||"@@toStringTag",R="object"==typeof t,j=e.regeneratorRuntime;if(j)return void(R&&(t.exports=j));j=e.regeneratorRuntime=R?t.exports:{},j.wrap=r;var E="suspendedStart",C="suspendedYield",L="executing",P="completed",S={},T={};T[b]=function(){return this};var G=Object.getPrototypeOf,A=G&&G(G(d([])));A&&A!==v&&g.call(A,b)&&(T=A);var k=a.prototype=o.prototype=Object.create(T);i.prototype=k.constructor=a,a.constructor=i,a[O]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,O in t||(t[O]="GeneratorFunction")),t.prototype=Object.create(k),t},j.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[x]=function(){return this},j.AsyncIterator=c,j.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return j.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(k),k[O]="Generator",k[b]=function(){return this},k.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;l(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),S}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},"21It":function(t,e,r){"use strict";var n=r("FtD3");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},"5VQ+":function(t,e,r){"use strict";var n=r("cGG2");t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},"7GwW":function(t,e,r){"use strict";var n=r("cGG2"),o=r("21It"),i=r("DQCr"),a=r("oJlt"),u=r("GHBc"),c=r("FtD3"),s="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r("thJu");t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;n.isFormData(p)&&delete l["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",y=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||u(t.url)||(h=new window.XDomainRequest,d="onload",y=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var m=t.auth.username||"",v=t.auth.password||"";l.Authorization="Basic "+s(m+":"+v)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[d]=function(){if(h&&(4===h.readyState||y)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?h.response:h.responseText,i={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:r,config:t,request:h};o(e,f,i),h=null}},h.onerror=function(){f(c("Network Error",t,null,h)),h=null},h.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r("p1b6"),w=(t.withCredentials||u(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(l[t.xsrfHeaderName]=w)}if("setRequestHeader"in h&&n.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),f(t),h=null)}),void 0===p&&(p=null),h.send(p)})}},"7xWd":function(t,e,r){t.exports=r("F8kA"),t.exports.routerRedux=r("MT/C")},DQCr:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r("cGG2");t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(n(e)+"="+n(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},F8kA:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function h(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r("ZefL"),y=r.n(d),m=r("GiK3"),v=r.n(m),g=r("KSGD"),w=r.n(g),b=r("aVpJ"),x=r("twkG"),O=x.a,R=function(t){function e(){var r,i,a;n(this,e);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return r=i=o(this,t.call.apply(t,[this].concat(c))),i.history=Object(b.createBrowserHistory)(i.props),a=r,o(i,a)}return i(e,t),e.prototype.componentWillMount=function(){y()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},e.prototype.render=function(){return v.a.createElement(O,{history:this.history,children:this.props.children})},e}(v.a.Component);R.propTypes={basename:w.a.string,forceRefresh:w.a.bool,getUserConfirmation:w.a.func,keyLength:w.a.number,children:w.a.node};var j=R,E=function(t){function e(){var r,n,o;a(this,e);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=n=u(this,t.call.apply(t,[this].concat(c))),n.history=Object(b.createHashHistory)(n.props),o=r,u(n,o)}return c(e,t),e.prototype.componentWillMount=function(){y()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},e.prototype.render=function(){return v.a.createElement(O,{history:this.history,children:this.props.children})},e}(v.a.Component);E.propTypes={basename:w.a.string,getUserConfirmation:w.a.func,hashType:w.a.oneOf(["hashbang","noslash","slash"]),children:w.a.node};var C=E,L=r("crWv"),P=r.n(L),S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},T=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},G=function(t){function e(){var r,n,o;f(this,e);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return r=n=p(this,t.call.apply(t,[this].concat(a))),n.handleClick=function(t){if(n.props.onClick&&n.props.onClick(t),!t.defaultPrevented&&0===t.button&&!n.props.target&&!T(t)){t.preventDefault();var e=n.context.router.history,r=n.props,o=r.replace,i=r.to;o?e.replace(i):e.push(i)}},o=r,p(n,o)}return l(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),r=t.innerRef,n=s(t,["replace","to","innerRef"]);P()(this.context.router,"You should not use <Link> outside a <Router>"),P()(void 0!==e,'You must specify the "to" property');var o=this.context.router.history,i="string"==typeof e?Object(b.createLocation)(e,null,null,o.location):e,a=o.createHref(i);return v.a.createElement("a",S({},n,{onClick:this.handleClick,href:a,ref:r}))},e}(v.a.Component);G.propTypes={onClick:w.a.func,target:w.a.string,replace:w.a.bool,to:w.a.oneOfType([w.a.string,w.a.object]).isRequired,innerRef:w.a.oneOfType([w.a.string,w.a.func])},G.defaultProps={replace:!1},G.contextTypes={router:w.a.shape({history:w.a.shape({push:w.a.func.isRequired,replace:w.a.func.isRequired,createHref:w.a.func.isRequired}).isRequired}).isRequired};var A=G,k=r("onEH"),_=k.a,N=r("s4hp"),B=N.a,D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t){var e=t.to,r=t.exact,n=t.strict,o=t.location,i=t.activeClassName,a=t.className,u=t.activeStyle,c=t.style,s=t.isActive,f=t["aria-current"],p=h(t,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),l="object"===(void 0===e?"undefined":q(e))?e.pathname:e,d=l&&l.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return v.a.createElement(B,{path:d,exact:r,strict:n,location:o,children:function(t){var r=t.location,n=t.match,o=!!(s?s(n,r):n);return v.a.createElement(A,D({to:e,className:o?[a,i].filter(function(t){return t}).join(" "):a,style:o?D({},c,u):c,"aria-current":o&&f||null},p))}})};F.propTypes={to:A.propTypes.to,exact:w.a.bool,strict:w.a.bool,location:w.a.object,activeClassName:w.a.string,className:w.a.string,activeStyle:w.a.object,style:w.a.object,isActive:w.a.func,"aria-current":w.a.oneOf(["page","step","location","date","time","true"])},F.defaultProps={activeClassName:"active","aria-current":"page"};var U=F,I=r("p5BY"),H=I.a,M=r("1S3F"),W=M.a,V=r("t1d2"),z=V.a,J=r("bXVx"),K=J.a,Y=r("wyzD"),X=Y.a,Q=r("Een0"),$=Q.a,Z=r("vC7t"),tt=Z.a;r.d(e,"BrowserRouter",function(){return j}),r.d(e,"HashRouter",function(){return C}),r.d(e,"Link",function(){return A}),r.d(e,"MemoryRouter",function(){return _}),r.d(e,"NavLink",function(){return U}),r.d(e,"Prompt",function(){return H}),r.d(e,"Redirect",function(){return W}),r.d(e,"Route",function(){return B}),r.d(e,"Router",function(){return O}),r.d(e,"StaticRouter",function(){return z}),r.d(e,"Switch",function(){return K}),r.d(e,"generatePath",function(){return X}),r.d(e,"matchPath",function(){return $}),r.d(e,"withRouter",function(){return tt})},FtD3:function(t,e,r){"use strict";var n=r("t8qj");t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},GHBc:function(t,e,r){"use strict";var n=r("cGG2");t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},"JP+z":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},KCLY:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r("cGG2"),i=r("5VQ+"),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r("7GwW"):void 0!==e&&(t=r("7GwW")),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(a)}),t.exports=u}).call(e,r("lNQ5"))},PvCV:function(t,e,r){"use strict";var n=r("mhuh"),o=r("ouCL");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(r("rAzg")),a=o(r("+TWC")),u=n(r("fAif")),c=r("7xWd"),s={namespace:"demo",state:{demo:1},reducers:{delete:function(){return{}},update:function(t,e){var r=e.payload;return(0,a.default)({},t,r)},update_modal:function(t,e){var r=e.payload,n=t.ModalRecord;return(0,a.default)({},t,{ModalRecord:(0,a.default)({},n,r)})}},subscriptions:{setup:function(t){t.dispatch;t.history.listen(function(t){"/demo"===t.pathname&&console.log("\u8fdb\u5165\u5230\u4e86\u8def\u7531\u9875\u9762")})}},effects:{getData:i.default.mark(function t(e,r){var n,o,c,s,f,p,l;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),console.log(r),n=r.put,o=r.select,c=r.call,t.next=5,o();case 5:return s=t.sent,console.log(s,"all"),t.next=9,n({type:"update",payload:{loading:!0}});case 9:return f=e.payload,console.log(f,111),t.next=13,c(u.getData,f);case 13:return p=t.sent,l=p.data,t.next=17,n({type:"updateInfo",payload:(0,a.default)({},l.Result[0])});case 17:console.log(p);case 18:case"end":return t.stop()}},t)}),updateInfo:i.default.mark(function t(e,r){var n,o,a,c,s,f;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,r,1),n=r.put,o=r.select,a=r.call,t.next=4,o(function(t){return t});case 4:return c=t.sent,console.log(c,"state"),t.next=8,n({type:"update",payload:{isUpdating:!0}});case 8:return s=e.payload,t.next=11,a(u.updateData,s);case 11:f=t.sent,console.log(f);case 13:case"end":return t.stop()}},t)}),Race:i.default.mark(function t(e,r){var n,o,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.race,o=r.call,console.log("\u7ade\u4e89"),t.next=4,n({info:o(u.updateData,{a:1}),data:o(u.getData,{name:1})});case 4:a=t.sent,a.info?console.log("info",a):console.log("data",a);case 6:case"end":return t.stop()}},t)}),name:function(t){console.log(11)},all:i.default.mark(function t(e,r){var n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,t.next=3,n({type:"update",payload:{loading:!0,age:0}});case 3:return t.next=5,n(c.routerRedux.push({path:"/",query:{page:2}}));case 5:case"end":return t.stop()}},t)})}};e.default=s},Re3r:function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},TNV1:function(t,e,r){"use strict";var n=r("cGG2");t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},XmWM:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=r("KCLY"),i=r("cGG2"),a=r("fuGk"),u=r("xLtR");n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[u,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},ZefL:function(t,e,r){"use strict";var n=function(){};t.exports=n},cGG2:function(t,e,r){"use strict";function n(t){return"[object Array]"===j.call(t)}function o(t){return"[object ArrayBuffer]"===j.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function c(t){return"number"==typeof t}function s(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===j.call(t)}function l(t){return"[object File]"===j.call(t)}function h(t){return"[object Blob]"===j.call(t)}function d(t){return"[object Function]"===j.call(t)}function y(t){return f(t)&&d(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=b(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)w(arguments[r],t);return e}function x(t,e,r){return w(e,function(e,n){t[n]=r&&"function"==typeof e?O(e,r):e}),t}var O=r("JP+z"),R=r("Re3r"),j=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isBuffer:R,isFormData:i,isArrayBufferView:a,isString:u,isNumber:c,isObject:f,isUndefined:s,isDate:p,isFile:l,isBlob:h,isFunction:d,isStream:y,isURLSearchParams:m,isStandardBrowserEnv:g,forEach:w,merge:b,extend:x,trim:v}},cWxy:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r("dVOP");n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},dIwP:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},fAif:function(t,e,r){"use strict";function n(t){return console.log(t),(0,a.default)({url:"/mock/data.json",params:t})}function o(t){return(0,a.default)({url:"/mock/form.json",data:t})}var i=r("ouCL");Object.defineProperty(e,"__esModule",{value:!0}),e.getData=n,e.updateData=o;var a=i(r("mtWM"))},fuGk:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r("cGG2");n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},mAPx:function(t,e){function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.exports=r},mhuh:function(t,e){function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}t.exports=r},mtWM:function(t,e,r){t.exports=r("tIFN")},o4YB:function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("/uOx"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},oJlt:function(t,e,r){"use strict";var n=r("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}}),a):a}},p1b6:function(t,e,r){"use strict";var n=r("cGG2");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,a){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},pBtG:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},rAzg:function(t,e,r){t.exports=r("o4YB")},t8qj:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},tIFN:function(t,e,r){"use strict";function n(t){var e=new a(t),r=i(a.prototype.request,e);return o.extend(r,a.prototype,e),o.extend(r,e),r}var o=r("cGG2"),i=r("JP+z"),a=r("XmWM"),u=r("KCLY"),c=n(u);c.Axios=a,c.create=function(t){return n(o.merge(u,t))},c.Cancel=r("dVOP"),c.CancelToken=r("cWxy"),c.isCancel=r("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=r("pxG4"),t.exports=c,t.exports.default=c},thJu:function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),a="",u=0,c=i;o.charAt(0|u)||(c="=",u%1);a+=c.charAt(63&e>>8-u%1*8)){if((r=o.charCodeAt(u+=.75))>255)throw new n;e=e<<8|r}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},xLtR:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r("cGG2"),i=r("TNV1"),a=r("pBtG"),u=r("KCLY"),c=r("dIwP"),s=r("qRfI");t.exports=function(t){return n(t),t.baseURL&&!c(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});