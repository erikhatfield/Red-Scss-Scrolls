!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},r={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],i=(o.test(t)?e+"/"+t:t).split("/"),s=0,l=i.length;s<l;s++)n=i[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},l=function(e){return e.split("/").slice(0,-1).join("/")},a=function(t){return function(n){var r=s(l(t),n);return e.require(r,t)}},u=function(e,t){var r=h&&h.createHot(e),i={id:e,exports:{},hot:r};return n[e]=i,t(i.exports,a(e),i),i.exports},c=function(e){return r[e]?c(r[e]):e},f=function(e,t){return c(s(l(e),t))},d=function(e,r){null==r&&(r="/");var o=c(e);if(i.call(n,o))return n[o].exports;if(i.call(t,o))return u(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,t){r[t]=e};var p=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,m=function(e){if(p.test(e)){var t=e.replace(p,"");i.call(r,t)&&r[t].replace(p,"")!==t+"/index"||(r[t]=e)}if(v.test(e)){var n=e.replace(v,"");i.call(r,n)||(r[n]=e)}};d.register=d.define=function(e,r){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else t[e]=r,delete n[e],m(e)},d.list=function(){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e};var h=e._hmr&&new e._hmr(f,d,t,n);d._cache=n,d.hmr=h&&h.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("js/initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t=e;return void 0===d[t]?void 0:f.scrollY>=d[t].offsetTop&&f.scrollY<=d[t].offsetTop+d[t].clientHeight?(d[t].setAttribute("class","active"),window.location.hash=t,void 0!==d[t+1]&&d[t+1].setAttribute("class","active-next"),i(t+2)):(d[t].setAttribute("class",""),void 0!==d[t+1]&&d[t+1].setAttribute("class",""),i(t+1))}function o(){var e=document.createElement("div");e.setAttribute("id","scrollVisualizer"),document.body.append(e);for(var t=0;t<d.length;t++)c("#scrollVisualizer").append("<div></div>");c("#scrollVisualizer").append('<b id="scrollLocation"></b>'),s()}function s(){for(var e=Array.prototype.slice.call(document.querySelectorAll("#scrollVisualizer>div")),t=0;t<e.length;t++)e[t].setAttribute("style","height: "+d[t].clientHeight/c("#mainScrolls").height()*100+"%");c("#scrollLocation").css("height",f.innerHeight/c("#mainScrolls").height()*100+"%")}function l(e,t,n){var r;return function(){var i=this,o=arguments,s=function(){r=null,n||e.apply(i,o)},l=n&&!r;clearTimeout(r),r=setTimeout(s,t),l&&e.apply(i,o)}}var a=t("./verbose"),u=r(a);document.addEventListener("DOMContentLoaded",function(){console.log("initialized"),(0,u["default"])(!1)});var c=t("jquery"),f=window,d=Array.prototype.slice.call(document.querySelectorAll("#mainScrolls>section"));c(document).ready(function(e){function t(){var e=f.pageYOffset/c("#mainScrolls").height()*100+"%";c("#scrollLocation").css("top",e),i(0);var t=window.location.hash.substr(1),n=parseInt(t)+1,r=1*(f.scrollY-d[t].offsetTop),o=d[n].offsetTop-f.scrollY;d[t].querySelector("article").setAttribute("style","top: -"+r/4+"px"),d[n].querySelector("article").setAttribute("style","top: -"+o/8+"px"),d[n].querySelector("div>div").setAttribute("style","top: -"+.2*r+"px"),d[n].querySelector("div>div").nextElementSibling.setAttribute("style","top: -"+.4*r+"px"),d[n].querySelector("div>div").nextElementSibling.nextElementSibling.setAttribute("style","top: -"+.8*r+"px"),d[n].querySelector("div>div").nextElementSibling.nextElementSibling.nextElementSibling.setAttribute("style","top: -"+1.6*r+"px")}function n(e){}function r(e){f=window}console.log("jQuery doc ready!"),o();var s=l(function(e){n(e)},250),a=l(function(e){r(e)},250);document.addEventListener("scroll",s),document.addEventListener("scroll",t),window.addEventListener("resize",a)})}),require.register("js/verbose.js",function(e,t,n){"use strict";function r(e){function n(){var e=document.createElement("div");e.setAttribute("id","verboseReader"),document.body.appendChild(e);var t=document.createElement("section");t.setAttribute("id","winData"),e.append(t),s("#winData").click(function(e){s(this).toggleClass("read")}),i();var n=document.createElement("section");n.setAttribute("id","mainScrollsData"),e.append(n),s("#mainScrollsData").click(function(e){s(this).toggleClass("read")}),r()}function r(){var e=(window,Array.prototype.slice.call(document.querySelectorAll("#mainScrolls>section"))),t=s("<h2></h2>").text("#mainScrolls");s("#mainScrollsData").html(t);var n=s("#mainScrollsData").append("<ul></ul>").find("ul"),r=s("#mainScrolls").height();n.append("<li><big>"+r+"</big></li>"),n.append("<li><big>"+e.length+"</big></li>");for(var i=0;i<e.length;i++)n.append("<li><span><b>sections["+i+"]: </b></span> <span><b>offsetTop: </b>"+e[i].offsetTop+"</span></li>")}function i(){var e=window,t=s("<h2></h2>").text("Window Object");s("#winData").html(t);var n=s("#winData").append("<ul></ul>").find("ul");n.append("<li><span><b>innerWidth: </b>"+e.innerWidth+"</span> <span><b>innerHeight: </b>"+e.innerHeight+"</span></li>"),n.append("<li><span><b>outerWidth: </b>"+e.outerWidth+"</span> <span><b>outerHeight: </b>"+e.outerHeight+"</span></li>"),n.append("<li><span><b>pageXOffset: </b>"+e.pageXOffset+"</span> <span><b>pageYOffset: </b>"+e.pageYOffset+"</span></li>"),n.append("<li><span><b>scrollX: </b>"+e.scrollX+"</span> <span><b>scrollY: </b>"+e.scrollY+"</span></li>")}function o(e,t,n){var r;return function(){var i=this,o=arguments,s=function(){r=null,n||e.apply(i,o)},l=n&&!r;clearTimeout(r),r=setTimeout(s,t),l&&e.apply(i,o)}}var s=t("jquery"),l=e;s(document).ready(function(e){if(console.log("jQuery doc ready!"),l){n();var t;s(window).on("resize",function(e){clearTimeout(t),t=setTimeout(function(){i(),r()},250)});var a=o(function(){i(),r()},250);document.addEventListener("scroll",a)}})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){window.jQuery=t("jquery"),window.$=t("jquery")})}(),require("___globals___");var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function r(e,t){return("undefined"==typeof e?"undefined":_typeof(e))===t}function i(){var e,t,n,i,o,s,l;for(var a in A)if(A.hasOwnProperty(a)){if(e=[],t=A[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],l=s.split("."),1===l.length?S[l[0]]=i:(!S[l[0]]||S[l[0]]instanceof Boolean||(S[l[0]]=new Boolean(S[l[0]])),S[l[0]][l[1]]=i),x.push((i?"":"no-")+l.join("-"))}}function o(e){var t=_.className,n=S._config.classPrefix||"";if(C&&(t=t.baseVal),S._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}S._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?_.className.baseVal=t:_.className=t)}function s(e,t){if("object"==("undefined"==typeof e?"undefined":_typeof(e)))for(var n in e)j(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=S[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return S;t="function"==typeof t?t():t,1==r.length?S[r[0]]=t:(!S[r[0]]||S[r[0]]instanceof Boolean||(S[r[0]]=new Boolean(S[r[0]])),S[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),S._trigger(e,t)}return S}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=l(C?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var o,s,u,c,f="modernizr",d=l("div"),p=a();if(parseInt(r,10))for(;r--;)u=l("div"),u.id=i?i[r]:f+(r+1),d.appendChild(u);return o=l("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=c,_.offsetHeight):d.parentNode.removeChild(d),!!s}function c(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function p(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+f(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function v(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,i,o){function s(){u&&(delete B.style,delete B.modElem)}if(o=!r(o,"undefined")&&o,!r(i,"undefined")){var a=p(e,i);if(!r(a,"undefined"))return a}for(var u,f,d,m,h,y=["modernizr","tspan","samp"];!B.style&&y.length;)u=!0,B.modElem=l(y.shift()),B.style=B.modElem.style;for(d=e.length,f=0;d>f;f++)if(m=e[f],h=B.style[m],c(m,"-")&&(m=v(m)),B.style[m]!==n){if(o||r(i,"undefined"))return s(),"pfx"!=t||m;try{B.style[m]=i}catch(b){}if(B.style[m]!=h)return s(),"pfx"!=t||m}return s(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function y(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?h(i,n||t):i);return!1}function b(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(l,t,i,o):(l=(e+" "+E.join(s+" ")+s).split(" "),y(l,t,n))}function g(e,t,r){return b(e,n,n,t,r)}var A=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},S=function(){};S.prototype=w,S=new S;var x=[],_=t.documentElement,C="svg"===_.nodeName.toLowerCase(),T="Moz O ms Webkit",E=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=E;var q=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=q;var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),S.hasOwnProperty(e)&&setTimeout(function(){S._trigger(e,S[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},S._q.push(function(){w.addTest=s});var z=function(){function e(e,t){var i;return!!e&&(t&&"string"!=typeof t||(t=l(t||"div")),e="on"+e,i=e in t,!i&&r&&(t.setAttribute||(t=l("div")),t.setAttribute(e,""),i="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),i)}var r=!("onblur"in t.documentElement);return e}();w.hasEvent=z;var O=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=O;var L=function(e,t){var n=!1,r=l("div"),i=r.style;if(e in i){var o=E.length;for(i[e]=t,n=i[e];o--&&!n;)i[e]="-"+E[o]+"-"+t,n=i[e]}return""===n&&(n=!1),n};w.prefixedCSSValue=L;var P=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=P;var k={elem:l("modernizr")};S._q.push(function(){delete k.elem});var B={style:k.elem.style};S._q.unshift(function(){delete B.style}),w.testAllProps=b,w.testAllProps=g,w.testProp=function(e,t,r){return m([e],n,t,r)},w.testStyles=u,S.addTest("customelements","customElements"in e),S.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)}),S.addTest("pointerevents",function(){var e=!1,t=E.length;for(e=S.hasEvent("pointerdown");t--&&!e;)z(E[t]+"pointerdown")&&(e=!0);return e}),S.addTest("postmessage","postMessage"in e),S.addTest("webgl",function(){var t=l("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var W=!1;try{W="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(H){}S.addTest("websockets",W),S.addTest("cssanimations",g("animationName","a",!0)),function(){S.addTest("csscolumns",function(){var e=!1,t=g("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=g("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||g(n[r])),S.addTest("csscolumns."+e,t)}(),S.addTest("flexbox",g("flexBasis","1px",!0)),S.addTest("picture","HTMLPictureElement"in e),S.addAsyncTest(function(){var e,t,n,r=l("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){s("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):s("sizes",i)}),S.addTest("srcset","srcset"in l("img")),S.addTest("webworkers","Worker"in e),i(),o(x),delete w.addTest,delete w.addAsyncTest;for(var D=0;D<S._q.length;D++)S._q[D]();e.Modernizr=S}(window,document),require("js/initialize");