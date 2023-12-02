(()=>{const e="AnZhiYuThemeCache",t="https://id.v3/",n=()=>caches.match(t).then((e=>e?.json())),s=n=>caches.open(e).then((e=>e.put(t,new Response(JSON.stringify(n)))));self.addEventListener("install",(()=>{self.skipWaiting()})),self.addEventListener("activate",(e=>e.waitUntil(clients.claim())));let r={simple:{clean:!0,search:!1,match:e=>"satera.cn"===e.host&&["/404.html","/css/index.css"].includes(e.pathname)},cdn:{clean:!0,match:e=>["cdn.cbd.int","lf26-cdn-tos.bytecdntp.com","lf6-cdn-tos.bytecdntp.com","lf3-cdn-tos.bytecdntp.com","lf9-cdn-tos.bytecdntp.com","cdn.staticfile.org","npm.elemecdn.com"].includes(e.host)&&e.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/)}},c=e=>{if(e.startsWith("https://npm.elemecdn.com"))return{timeout:3e3,list:[e,`https://cdn.cbd.int/${new URL(e).pathname}`]}};const a=(e,t,n=null)=>{if(!n&&!(n=c(e.url)))return h(e,t);const s=n.list,r=new Array(s.length),a=n=>h(new Request(s[n],e),t,{signal:(r[n]=new AbortController).signal}).then((e=>o(e)?{r:e,i:n}:Promise.reject()));return new Promise(((t,c)=>{let o=!0;const i=()=>{o=!1,Promise.any([l,...Array.from({length:s.length-1},((e,t)=>t+1)).map((e=>a(e)))]).then((e=>{for(let t=0;t!==s.length;++t)t!==e.i&&r[t].abort();t(e.r)})).catch((()=>c(`请求 ${e.url} 失败`)))},h=setTimeout(i,n.timeout),l=a(0).then((e=>{o&&(clearTimeout(h),t(e.r))})).catch((()=>(o&&(clearTimeout(h),i()),Promise.reject())))}))},o=e=>e.ok||[301,302,307,308].includes(e.status),i=new Map;self.addEventListener("fetch",(t=>{let n=t.request,s=new URL(n.url);if("GET"!==n.method||!n.url.startsWith("http"))return;if(skipRequest?.(n))return;let r=s.hostname+s.pathname+s.search,u=i.get(r);if(u)return t.respondWith(new Promise(((e,t)=>{i.get(r).push({s:e,e:t})})));i.set(r,u=[]);const f=e=>t.respondWith(e.then((e=>{for(let t of u)t.s(e.clone())})).catch((e=>{for(let t of u)t.e(e)})).then((()=>(i.delete(r),e)))),m=l(s);if(m){let t=`https://${s.host}${s.pathname}`;t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),m.search&&(t+=s.search),f(caches.match(t).then((s=>s??a(n,!0).then((n=>{if(o(n)){const s=n.clone();caches.open(e).then((e=>e.put(t,s)))}return n})))))}else{const e=c(n.url);f(e?a(n,!1,e):h(n,!1).catch((e=>new Response(e,{status:499}))))}})),self.addEventListener("message",(e=>{"update"===e.data&&u().then((t=>{t.type="update",e.source.postMessage(t)}))}));const h=(e,t,n)=>fetch(e,Object.assign({cache:n?"no-store":"default",mode:"cors",credentials:"same-origin"},n||{})),l=e=>{if("localhost"!==e.hostname)for(let t in r){const n=r[t];if(n.match(e))return n}},u=async()=>{const r=await a(new Request("/update.json"),!1);if(!o(r))throw`加载 update.json 时遇到异常，状态码：${r.status}`;const c=await r.json(),i=await(e=>n().then((t=>{const{info:n,global:r}=e,c={global:r,local:n[0].version,escape:t?.escape??0};if(!t)return c.escape=0,s(c),{new:c,old:t};let a=new f,o=((e,t,n)=>{for(let s of t){const{version:t,change:r}=s;if(t===n)return!1;if(r)for(let t of r)e.push(new m(t))}return!0})(a,n,t.local);return s(c),o&&(r!==t.global?a.force=!0:a.refresh=!0),{list:a,new:c,old:t}})))(c);if(i.list){const n=await(n=>caches.open(e).then((e=>e.keys().then((s=>Promise.all(s.map((async s=>{const r=s.url;return r!==t&&n.match(r)?(e.delete(s),r):null}))))).then((e=>e.filter((e=>e)))))))(i.list);i.list=n?.length?n:null}return i};function f(){const e=[];this.push=t=>{e.push(t)},this.match=t=>{if(this.force)return!0;if(t=new URL(t),this.refresh)return l(t).clean;for(let n of e)if(n.match(t))return!0;return!1}}function m(e){const t=t=>{const n=e.value;if(Array.isArray(n)){for(let e of n)if(t(e))return!0;return!1}return t(n)};this.match=(()=>{switch(e.flag){case"html":return e=>e.pathname.match(/(\/|\.html)$/);case"end":return e=>t((t=>e.href.endsWith(t)));case"begin":return e=>t((t=>e.pathname.startsWith(t)));case"str":return e=>t((t=>e.href.includes(t)));case"reg":return e=>t((t=>e.href.match(new RegExp(t,"i"))));default:throw`未知表达式：${JSON.stringify(e)}`}})()}})();