const sbloglinkone=document.querySelector(".onesite");sbloglinkone.onclick=()=>{window.location.href="/"};const sbloglinktwo=document.querySelector(".twosite");sbloglinktwo.onclick=()=>{window.location.href="https://zutomayo.net/"};const sbloglinkthree=document.querySelector(".threesite");sbloglinkthree.onclick=()=>{window.location.href="/about"};const lighttextbodys=document.querySelectorAll(".lighttextbody"),glitchTexts=document.querySelectorAll(".glitch-text");glitchTexts.forEach((e=>{const t=e.innerText,o="丨亅丿乛一乚丶勹冫刂匚阝丷卩冂冖凵亻厶亠讠廴匸艹屮彳巛辶廾彐彑宀犭彡饣扌氵纟忄幺弋尢夂灬旡耂牜攴攵礻殳爻爫卝尣爿禸肀癶钅疒罒疋衤",n="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",l=e=>(e=>/[\u4e00-\u9fff]/.test(e))(e)?o[Math.floor(64*Math.random())]:n[Math.floor(33*Math.random())];let s="/".repeat(t.length);e.innerText=s;let c="";for(let e=0;e<t.length;e++)c+=l(t[e]);setTimeout((()=>{s=c,e.innerText=s,setTimeout((()=>{let o=0;const n=[20,50],c=()=>{const i=t[o],a=s.substring(o+1);let r="";for(let e=0;e<a.length;e++)r+=l(a[e]);s=s.substring(0,o)+i+r,e.innerText=s,o++,o<t.length&&setTimeout(c,Math.random()*(n[1]-n[0])+n[0])};c()}),100)}),100)}));const shaketels=document.querySelectorAll(".shake-text");function closeAnimation(e){e.forEach(((e,t)=>{e.style.transition="left 0.5s",e.style.left="calc(5rem - 20px)"})),setTimeout((()=>{e.forEach((e=>{e.style.left=""}))}),200)}shaketels.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.classList.add("shake-active")}))}));const bcardcloseEls=document.querySelectorAll(".bcardclose");bcardcloseEls.forEach((e=>{const t=e.parentElement;e.addEventListener("click",(()=>{t.style.display="none";let e=-1;lighttextbodys.forEach(((o,n)=>{o===t&&(e=n)}));const o=[...lighttextbodys].filter(((t,o)=>o>e));o.forEach((function(e,t){closeAnimation(o)}))}))}));const bcardminEls=document.querySelectorAll(".bcardmin");bcardminEls.forEach((e=>{const t=e.parentElement;e.addEventListener("click",(()=>{t.classList.remove("expanded"),expanding=!1}))}));let expanding=!1;lighttextbodys.forEach((e=>{e.addEventListener("mouseenter",(()=>{let t=setTimeout((()=>{!function(){if(!expanding){e.classList.toggle("expanded"),expanding=!0;document.querySelector("#topgradient").style.display="none",e.classList.toggle("shake-active")}}()}),2500);e.addEventListener("mouseleave",(()=>{clearTimeout(t)}))}))})),lighttextbodys.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.classList.add("shake-active")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("shake-active")}))}));