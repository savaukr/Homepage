if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,t,s)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(t.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=s(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-5adfecb2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"img/avatarDT.jpg",revision:"44146690f22d0d0091863fb8fa532738"},{url:"img/avatarDT.svg",revision:"a1162472fb044ce36adb3ec86d439056"},{url:"img/foto_avatarLittle.jpg",revision:"805d2efe9bf388862673f841c17015be"},{url:"img/foto_avatarLittle.svg",revision:"6d178232047e8f8989a6834b16ae72f6"},{url:"index.html",revision:"d4474ba2c3b7b58f508a07a102f8bf59"}],{})}));
//# sourceMappingURL=sw.js.map
