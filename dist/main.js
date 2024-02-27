(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),p=new URL(t(555),t.b),d=new URL(t(583),t.b),l=a()(o()),u=s()(p),f=s()(d);l.push([n.id,`:root {\n  --pink: #ffcaea;\n  --dark-pink: #f3a2d2;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-x: hidden;\n}\nheader {\n  background-image: url(${u});\n  background-size: 14%;\n  background-color: #f57eb0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nnav {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  top: 170px;\n}\n\n.logo-container {\n  margin-bottom: 20px;\n}\n\nbutton {\n  font-family: "Gorditas", serif;\n  height: 70px;\n  width: 160px;\n  font-size: 38px;\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  color: #eb4b8e;\n  border: 6px solid #ffa8a8;\n  transition-property: translate;\n  transition-duration: 0.1s;\n  z-index: 4;\n}\n\nbutton:hover {\n  translate: 0px -2px;\n  color: #e8156d;\n}\n\n#content {\n  font-family: "Gorditas", serif;\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  background-image: url(${f});\n  background-size: cover;\n  background-position: 0px -520px;\n  justify-content: center;\n}\n\n.hero {\n  width: 100vw;\n  height: 200px;\n  background-color: hsla(324, 77%, 79%, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  color: #fff;\n}\n\n.hero > img:nth-child(2) {\n  /* border: 10px solid white; */\n  margin-left: 30px;\n  translate: 0px 50px;\n  z-index: 2;\n}\n\n.tilt-right {\n  transform: rotate(2deg);\n}\n\n.tilt-left {\n  transform: rotate(-3deg);\n}\n\n.rounded {\n  border-radius: 500px;\n}\n\n.promo-container {\n  background-color: #69ebfd;\n  height: 80px;\n  font-size: 20px;\n  margin-top: 60px;\n  display: flex;\n  align-items: center;\n  transform: rotate(-2deg);\n  width: 101vw;\n  translate: -10px 0px;\n}\n.promo-container > p {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-left: 50px;\n}\n\n.promo-container::after {\n  content: ".";\n  display: block;\n  flex: 1;\n  color: #69ebfd;\n}\n\n.about-container {\n  margin-top: 100px;\n  width: 100vw;\n  height: 350px;\n  background-color: hsla(324, 77%, 79%, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #191919;\n  font-family: "Gochi Hand", cursive;\n}\n.about-container > img {\n  z-index: 2;\n}\n\n.about-container > p {\n  width: 50vw;\n  margin: 0px 60px;\n  z-index: 2;\n  translate: 0px -20px;\n}\n\n.paragraph-bg {\n  width: 0px;\n  height: 200px;\n  position: absolute;\n  border-left: 100vw solid var(--pink);\n  border-top: 5px solid transparent;\n  border-bottom: 60px solid transparent;\n  border-right: none;\n  z-index: 1;\n}\n\n.menu-container {\n  background-color: var(--dark-pink);\n  height: 100%;\n  margin: 64px 0;\n  padding: 30px 0;\n}\n.item-container {\n  position: relative;\n  background-color: none;\n  display: flex;\n  padding: 0px 100px;\n  align-items: center;\n  justify-content: center;\n}\n.item-container h3 {\n  font-size: 32px;\n  font-weight: 400;\n  margin-bottom: -10px;\n}\n.item-container p {\n  font-family: "Gochi Hand", cursive;\n  font-size: 18px;\n}\n.item {\n  height: 240px;\n  z-index: 2;\n}\n.description {\n  margin: 0px 50px;\n  max-width: 450px;\n  z-index: 2;\n}\n\n.left-clip::before {\n  content: "";\n  display: block;\n  background-color: var(--pink);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  clip-path: polygon(0 15%, 100% 15%, 100% 85%, 0 95%);\n}\n\n.right-clip::before {\n  content: "";\n  display: block;\n  background-color: var(--pink);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  clip-path: polygon(0 16%, 100% 14%, 100% 90%, 0 89%);\n}\n`,""]);const h=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],d=i[p]||0,l="".concat(p," ").concat(d);i[p]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var d=t(i[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},555:(n,e,t)=>{n.exports=t.p+"89f0903982cbf6bb16b6.png"},583:(n,e,t)=>{n.exports=t.p+"76fd62aae3577296d760.webp"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),p=t(540),d=t.n(p),l=t(113),u=t.n(l),f=t(208),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("hero");const t=document.createElement("img");t.src="/src/images/promo.svg",t.height=150;const r=document.createElement("img");r.src="/src/images/shake_01.png",r.height=400,r.classList.add("rounded"),e.appendChild(t),e.appendChild(r);const o=document.createElement("div");o.classList.add("promo-container"),o.innerHTML="<p>Order 1, get 5 free! Only today! (and every other day!!!)</p>",n.appendChild(e),n.appendChild(o)};m();const g=document.querySelector(".js-home-button"),x=document.querySelector(".js-menu-button"),b=document.querySelector(".js-about-button");g.addEventListener("click",(()=>{v(),m()})),x.addEventListener("click",(()=>{v()})),b.addEventListener("click",(()=>{v()}));const v=function(){document.querySelector("#content").innerHTML=""}})()})();