!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){r(4),e.exports=r(1)},function(e,t,r){var n=r(2),i=r(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},s=(n(i,o),i.locals?i.locals:{});e.exports=s},function(e,t,r){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),s=[];function a(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=a(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:m(f,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function h(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,v=0;function m(e,t){var r,n,i;if(t.singleton){var o=v++;r=p||(p=l(t)),n=f.bind(null,r,o,!1),i=f.bind(null,r,o,!0)}else r=l(t),n=h.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=a(r[n]);s[i].references--}for(var o=c(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}r=o}}}},function(e,t,r){},function(e,t,r){"use strict";function n(e){var t=e.slider,r=e.currentSlide,n=void 0===r?0:r,i=e.dots,o=void 0!==i&&i,s=e.dotsContainer,a=void 0!==s&&s;this.sl=document.querySelector(t),this.dots=o,this.dotsContainer=a,this.currentSlide=n,this.init()}r.r(t),n.prototype={init:function(){this.wrapper=this.sl.querySelector(".slider-wrap"),this.wChildren=Array.from(this.wrapper.children),this.prev=this.sl.querySelector(".prev"),this.next=this.sl.querySelector(".next"),this.dots&&(this.dotsCreate(),this.dotsWrap=this.sl.querySelector(".dots-wrap"),this.dChildren=Array.from(this.dotsWrap.children)),this.nav()},nav:function(){this.showSlide()},showSlide:function(){var e=this;this.startSlide(),this.prev.onclick=function(){return e.startSlide(-1)},this.next.onclick=function(){return e.startSlide(1)},this.dots&&this.dotSlide()},dotSlide:function(){var e=this;this.dotsWrap.addEventListener("click",(function(t){if(t.target.closest(".dot"))for(var r=0;r<e.dChildren.length;r++)e.dChildren[r]===t.target&&(e.currentSlide=r,e.startSlide())}))},dotsCreate:function(){var e=document.createElement("div");e.className="dots-wrap";this.sl.querySelector(".dots-wrap");for(var t=0;t<this.wChildren.length;t++){var r=document.createElement("span");r.className="dot",this.dotsContainer?this.sl.querySelector(".dots-wrap").append(r):e.append(r)}!this.dotsContainer&&this.wrapper.append(e)},startSlide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.wChildren.length-1;this.currentSlide+=e,this.wChildren.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active"),e.classList.add("hide")})),this.dots&&this.dChildren.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),this.currentSlide<0&&(this.currentSlide=t),this.currentSlide>t&&(this.currentSlide=0),this.dots&&this.dChildren[this.currentSlide].classList.add("active"),this.wChildren[this.currentSlide].classList.add("active")}};var i=n;!function(){new i({slider:".slider",dots:!0,dotsContainer:!0}),new i({slider:".game-el-slider",currentSlide:3,dots:!0});document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))}()}]);