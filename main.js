(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(555),t.b),l=new URL(t(583),t.b),p=a()(r()),u=s()(d),h=s()(l);p.push([n.id,`:root {\n  --pink: #ffcaea;\n  --dark-pink: #f3a2d2;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-x: hidden;\n}\nheader {\n  background-image: url(${u});\n  background-size: 14%;\n  background-color: #f57eb0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nnav {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  top: 170px;\n}\n\n.logo-container {\n  margin-bottom: 20px;\n}\n\nbutton {\n  font-family: "Gorditas", serif;\n  height: 70px;\n  width: 160px;\n  font-size: 38px;\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  color: #eb4b8e;\n  border: 6px solid #ffa8a8;\n  transition-property: translate;\n  transition-duration: 0.1s;\n  z-index: 4;\n}\n\nbutton:hover {\n  translate: 0px -2px;\n  color: #e8156d;\n}\n\n#content {\n  font-family: "Gorditas", serif;\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  background-image: url(${h});\n  background-size: cover;\n  background-position: 0px -520px;\n  background-repeat: no-repeat;\n  justify-content: center;\n}\n\n.hero {\n  width: 100vw;\n  height: 200px;\n  background-color: hsla(324, 77%, 79%, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  color: #fff;\n}\n\n.hero > img:nth-child(2) {\n  /* border: 10px solid white; */\n  margin-left: 30px;\n  translate: 0px 50px;\n  z-index: 2;\n}\n\n.tilt-right {\n  transform: rotate(2deg);\n}\n\n.tilt-left {\n  transform: rotate(-3deg);\n}\n\n.rounded {\n  border-radius: 500px;\n}\n\n.promo-container {\n  background-color: #69ebfd;\n  height: 80px;\n  font-size: 20px;\n  margin-top: 60px;\n  display: flex;\n  align-items: center;\n  transform: rotate(-2deg);\n  width: 101vw;\n  translate: -10px 0px;\n}\n.promo-container > p {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-left: 50px;\n}\n\n.promo-container::after {\n  content: ".";\n  display: block;\n  flex: 1;\n  color: #69ebfd;\n}\n\n.about-container {\n  margin-top: 100px;\n  width: 100vw;\n  height: 350px;\n  background-color: hsla(324, 77%, 79%, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #191919;\n  font-family: "Gochi Hand", cursive;\n}\n.about-container > img {\n  z-index: 2;\n}\n\n.about-container > p {\n  width: 50vw;\n  margin: 0px 60px;\n  z-index: 2;\n  translate: 0px -20px;\n}\n\n.paragraph-bg {\n  width: 0px;\n  height: 200px;\n  position: absolute;\n  border-left: 100vw solid var(--pink);\n  border-top: 5px solid transparent;\n  border-bottom: 60px solid transparent;\n  border-right: none;\n  z-index: 1;\n}\n\n.menu-container {\n  background-color: var(--dark-pink);\n  height: 100%;\n  margin-top: 64px;\n  padding: 30px 0;\n}\n.item-container {\n  position: relative;\n  background-color: none;\n  display: flex;\n  padding: 0px 100px;\n  align-items: center;\n  justify-content: center;\n}\n.item-container h3 {\n  font-size: 32px;\n  font-weight: 400;\n  margin-bottom: -10px;\n}\n.item-container p {\n  font-family: "Gochi Hand", cursive;\n  font-size: 18px;\n}\n.item {\n  height: 240px;\n  z-index: 2;\n}\n.description {\n  margin: 0px 50px;\n  max-width: 450px;\n  z-index: 2;\n}\n\n.left-clip::before {\n  content: "";\n  display: block;\n  background-color: var(--pink);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  clip-path: polygon(0 15%, 100% 15%, 100% 85%, 0 95%);\n}\n\n.right-clip::before {\n  content: "";\n  display: block;\n  background-color: var(--pink);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  clip-path: polygon(0 16%, 100% 14%, 100% 90%, 0 89%);\n}\n`,""]);const f=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},555:(n,e,t)=>{n.exports=t.p+"89f0903982cbf6bb16b6.png"},583:(n,e,t)=>{n.exports=t.p+"76fd62aae3577296d760.webp"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),h=t(208),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;const m=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("hero");const t=document.createElement("img");t.src="/src/images/promo.svg",t.height=150;const o=document.createElement("img");o.src="/src/images/shake_01.png",o.height=400,o.classList.add("rounded"),e.appendChild(t),e.appendChild(o);const r=document.createElement("div");r.classList.add("promo-container"),r.innerHTML="<p>Order 1, get 5 free! Only today! (and every other day!!!)</p>",n.appendChild(e),n.appendChild(r)},g=[{title:"Crazy Tripple Choco Moco Loco Delux",description:"Silky smooth icy milk with chocolate swirls \n        and crickety crackers. Topped with our new moco loco sauce and velvety whipper cream.",imageName:"shake_01.png"},{title:"Strawberry dream cream extreme",description:"Chocolate chip mint ice cream with our signature\n    dream cream and chocolate swooshiloos.\n    Topped with sugary sprinkles and fairy dust",imageName:"shake_02.png"},{title:"Big Bertha",description:"Big B’s favorite shake. Legend has it that she\n    had one of these each morning before even getting out of bed.\n    1 gallon of icy chocolaty love with soft delicious fluffy cream\n    and sprinkely spronkles.",imageName:"shake_03.png"},{title:"The classic",description:"Sometimes you want fluffy pluffy rainbow luxurious flavour bombs, but sometimes\n    you just want to sit back, relax, and sip on a classic smooth vanilla milk shake. Nothing wrong with that.\n    We've got you covered.",imageName:"shake_04.png"},{title:"Showstopper",description:"Don't let its modest appearence fool you. This beast is packed with 12,000kcal of yummy goodness\n    that will keep you full for the rest of the week. It's truly the trojan horse of milk shakes.",imageName:"shake_05.png"}];m();const b=document.querySelector(".js-home-button"),x=document.querySelector(".js-menu-button"),v=document.querySelector(".js-about-button");b.addEventListener("click",(()=>{y(),m()})),x.addEventListener("click",(()=>{y(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("menu-container"),n.appendChild(e),g.forEach(((n,t)=>{const o=document.createElement("div");o.classList.add("item-container");const r=document.createElement("img");r.src=`/src/images/${n.imageName}`,r.classList.add("item","rounded");const i=document.createElement("div");i.classList.add("description");const a=document.createElement("h3");a.textContent=n.title,i.appendChild(a);const c=document.createElement("p");c.textContent=n.description,i.appendChild(c),o.appendChild(i),t%2?(o.classList.add("right-clip"),o.appendChild(r)):(o.classList.add("left-clip"),o.prepend(r)),e.appendChild(o)}))}()})),v.addEventListener("click",(()=>{y(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("about-container");const t=document.createElement("img");t.src="/src/images/bertha.png",t.height=400,t.classList.add("rounded");const o=document.createElement("div");o.classList.add("paragraph-bg"),e.innerHTML="<p>\n  Welcome to Big Bertha's Milkshake Emporium, where the shakes are\n  legendary and the laughs are endless! Since 1926, we've been dishing\n  out flavors wilder than a rodeo clown's outfit. <br /><br />\n  From classic vanilla to shakes that'll make your taste buds do the\n  cha-cha, join the flavor fiesta today and let's shake things up\n  together!\n</p>",e.prepend(t),e.appendChild(o),n.appendChild(e)}()}));const y=function(){document.querySelector("#content").innerHTML=""}})()})();