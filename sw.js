if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),f={module:{uri:r},exports:t,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-0722319f.js",revision:null},{url:"assets/workbox-window.prod.es5-08b2315b.js",revision:null},{url:"index.html",revision:"f2488fda269312bc165afa624f845133"},{url:"icon-192x192.png",revision:"8d3b60e66b92cc9153a3c026a2ff8ebc"},{url:"icon-512x512.png",revision:"f7d4d2b0534320b589d83eb31d5febea"},{url:"icon-512x512-mask.png",revision:"4cf0c17340acfdeec978e1b7a5ce4b0f"},{url:"manifest.webmanifest",revision:"8759b85a8b254c80869e992a31c19546"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
