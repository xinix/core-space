if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const c=e=>i(e,o),f={module:{uri:o},exports:a,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9867aae40e752a7eab49316987fe8bf5"},{url:"assets/main.38a7fb79.js",revision:null},{url:"assets/main.f434daf8.css",revision:null},{url:"assets/TokensPage.1052c194.css",revision:null},{url:"assets/TokensPage.2bbe24e3.js",revision:null},{url:"index.html",revision:"9867aae40e752a7eab49316987fe8bf5"},{url:"registerSW.js",revision:"3ac8fe5223dad1361b1a0ed876f53751"},{url:"favicon.ico",revision:"eefaf239196ae9f4d135a4ced2a7cfc9"},{url:"apple-touch-icon.png",revision:"31255ef9b9892e139c27ac058cdf16fb"},{url:"logo.svg",revision:"c20210e91cad9c12d1a863afea62cef2"},{url:"pwa-192x192.png",revision:"311d782c286bca2cf5b1d3d72b6ea628"},{url:"pwa-512x512.png",revision:"9a809f48a9ac0110240815f254633386"},{url:"manifest.webmanifest",revision:"be0ee4c50a079f71fece1fe6f984c874"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));