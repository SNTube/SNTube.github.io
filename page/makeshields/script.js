function updateShields(){const M=input1.value,t=input2.value,I=document.querySelector(".input3.active"),T="flat"===I.innerHTML?"":I.innerHTML,i=input4.value,g=input4.value,x=encodeURIComponent(g);i.innerText=x;const e=input5.value,D=input6.value,L=input7.value;let A="https://img.shields.io/badge/";!L&&D&&(A+=`${D}-`),t.includes("rgb")||t.includes("hsl")||t.includes("RGB")||t.includes("HSL")?(A+=`${M}-sp`,(t||T||i||e||D||L)&&(A+="?",T&&(A+=`style=${T}&`),x&&(A+=`logo=${x}&`),e&&(A+=`logoColor=${e}&`),L&&(D&&(A+=`label=${D}&`),A+=`labelColor=${L}&`),t&&(A+=`color=${t}&`),A=A.slice(0,-1))):(A+=`${M}${t?`-${t}`:""}`,(T||i||e||D||L)&&(A+="?",T&&(A+=`style=${T}&`),x&&(A+=`logo=${x}&`),e&&(A+=`logoColor=${e}&`),L&&(D&&(A+=`label=${D}&`),A+=`labelColor=${L}&`),A=A.slice(0,-1))),shieldsurl.innerHTML=A;let E=A.length;document.getElementById("urlcount").innerText="字符串长度:"+E+"/12260 (注意SVG图标要大约小于9,148字节)"}function copyTextToClipboard(M){const t=document.createElement("textarea");t.value=M,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function handleFileDrop(M){readFile(M.dataTransfer.files[0])}function readFile(M){const t=new FileReader;t.onload=function(M){const t=M.target.result;input4.value=t,input4.dispatchEvent(new Event("input")),hideMask()},t.readAsDataURL(M)}function showMask(){movemask0.style.display="flex",movemask1.style.display="flex",movemaskfull.style.display="flex"}function hideMask(){movemask0.style.display="none",movemask1.style.display="none",movemaskfull.style.display="none"}const input1=document.getElementById("input1"),input2=document.getElementById("input2"),input3Buttons=document.querySelectorAll(".input3"),defaultinput3Button=document.querySelector(".input3");defaultinput3Button.classList.add("active");const input4=document.getElementById("input4"),input5=document.getElementById("input5"),input6=document.getElementById("input6");input6.disabled=!0;const input7=document.getElementById("input7"),shieldsurl=document.getElementById("shieldsurl"),input8Buttons=document.querySelectorAll(".input8"),defaultinput8Button=document.querySelector(".input8");defaultinput8Button.classList.add("active"),document.addEventListener("DOMContentLoaded",(()=>{urlBtn.click()}));const ICPbtn=document.getElementById("ICPbtn"),ICPwbtn=document.getElementById("ICPwbtn"),GongAnbtn=document.getElementById("GongAnbtn");ICPbtn.addEventListener("click",(()=>{input4.value="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgxOSA3NzIiPjxwYXRoIGQ9Ik00MjMgMGgxbDYzIDEwIDEgMSAzIDcwdjFxLTQyLTE2LTk0LTE0aC0xbDI3LTY4Wk0yNTMgOTVxMCAxIDAgMGwtNC03MCAxLTEgNTctMTcgMzggNjFoLTFxLTQyIDctOTEgMjdabTM1NSA1NWgtMXEtMjgtMzQtNzQtNTR2LTFsNTQtNDcgNTEgMzR2MWwtMzAgNjdabS0zOTctMzRxMSAwIDAgMC00NCAzNC03MSA2NWwtMzQtNjF2LTFsNTEtNDNxMC0xIDAgMGw1NCA0MFptMjg3IDI5MCA0LTNoLTF2LTdxMi05IDAtMjB2LThsLTEtMnYtM2wtMS0zdi02cS0yLTEtMS0zbC0zLTFxNTMtMzMgNTktODQgMy0zMC0xMy01Mi0xNi0yMS00NS0zMS00Ny0xNS0xMTkgMC00NCA5LTc4IDM0LTMyIDI1LTUzIDYxLTE5IDM2LTI0IDc4LTYgNDMgNSA4NSAxNCA1MiA0OSA5MCAzNiAzOCA4NyA1NCAzNyAxMiA3MiAxNSA2OCA3IDEzMi0xOCA2My0yNSAxMTAtNzUgMC0xIDAgMC0yMyA0Ni01NiA4My0zNSAzOC03OCA2My02OSA0MS0xNTQgMzctOTMtNS0xNjEtNDRUMTIxIDUzM3EtMzUtNjgtMzgtMTUxLTEtNDAgMTItODEgMTItMzggMzQtNzMgNDAtNjIgMTAwLTk5IDYyLTM4IDEzNC00MyA3NC01IDEzNyAxNyA3MyAyNCAxMTAgNzkgMjQgMzcgMTkgODEtNSA0My0zNCA3Ny0zMiAzNy05NyA2NloiIGZpbGw9IiNmMTRlMDAiLz48cGF0aCBkPSJNMzg1IDQ5M3EtNDEtNS03MC0yNC0zNS0yNC0zOS02MS0xLTE5IDctMzkgNy0xOCAyMC0zNCAxLTIgMCAwLTcgMTktOSAzOS0xIDMzIDE4IDUzIDE4IDE5IDUxIDI1IDYxIDEwIDEzMy0xMyA5MC0yOSAxNjAtOTAgMzUtMzEgNTItNjUgMjMtNDctMy03OC0xNC0xNS0zNy0yNS0yMC05LTQ0LTEyLTItMSAwLTEgNjItOSAxMjIgOSA0NiAxMyA2MyA0MSAxMSAxOCA4IDQ1LTQgNDctNDYgOTItMzMgMzQtODQgNjMtNjggNDAtMTQwIDYwLTg4IDI2LTE2MiAxNVoiIGZpbGw9IiMwMDc5ZDEiLz48cGF0aCBkPSJNMTEyIDIxOHYxcS0yOCA0My0zNyA4NHYxbC01NC00NHYtMWwyMy01N2gxbDY3IDE2Wm0zODMgMTMyIDMgMXEtMSAyIDEgM3Y2bDEgM3YzbDEgMnY4cTIgMTEgMCAyMHY3aDFsLTQgM3EtNDkgMjQtOTggMjZ0LTc0LTIwcS0xOC0xNS0xNy00MCAwLTIyIDE0LTQzIDE5LTI5IDUzLTUxIDEtMSAwIDAtMzcgNDYtMzUgNzUgMSAyMiAyNCAzMCAxOCA2IDQxIDIgNDYtNyA4OS0zNVpNMCAzNjh2LTJsNjQtMTRoMXEtMiA0NSA3IDg4bC0xIDEtNjctMTFIM2wtMy02MlptMjggMTY5di0xbDUzLTQ3aDFxMTcgNDQgNDEgODRsLTEgMS02MyAyMGgtMWwtMzAtNTdabTkyIDEzM3YtMWwzMC02NHEyNSAzMSA3OCA2MXYxbC01NyA0M2gtMWwtNTAtNDBabTUwMi01NiAyLTEgNC00cTAtMSAwIDBsMjcgNjd2MWwtNTAgMzdoLTFsLTU0LTQ0di0xcTMzLTE1IDcyLTU1Wk0yNzMgNzU1di02OGgxcTQwIDE1IDk0IDIwdjFsLTI2IDYwaC0ybC02Ny0xM1ptMTcxIDE3LTMxLTY0IDEtMXE1MSAxIDk3LTIwaDFsLTMgNzAtMSAyLTY0IDEzWiIgZmlsbD0iI2YxNGUwMCIvPjwvc3ZnPg==",input4.dispatchEvent(new Event("input"))})),ICPwbtn.addEventListener("click",(()=>{input4.value="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgxOSA3NzIiPjxwYXRoIGQ9Ik00MjMgMGgxbDYzIDEwIDEgMSAzIDcwdjFxLTQyLTE2LTk0LTE0bC0xLTEgMjctNjdaTTI1MyA5NnYtMWwtNC03MCAxLTEgNTctMTdoMWwzNyA2MWgtMXEtNDMgOC05MSAyOFptMzU1IDU0aC0xcS0yOC0zMy03NC01NHYtMWw1NC00NyA1MSAzNHYxbC0zMCA2N1ptLTM5Ny0zNHExIDAgMCAwLTQ1IDM0LTcxIDY1di0xbC0zNC02MHYtMWw1MS00NCA1NCA0MVpNMTA2IDI3MHEzNS03OCAxMDMtMTI4IDY5LTUwIDE1NC01NiA4OS02IDE2MCAyNiA0NSAyMCA3NCA1MyAzMyAzOSAzMyA4MyAwIDU4LTQ0IDEwMS0zMyAzMy05NSA2MC01OSAyNy0xMTIgMjMtMjQtMi00MS0xMi0yMS0xMS0yNy0zMS00LTEzLTEtMjggMy0xNCAxMC0yNyAxOS0zMiA1Ni01NiAxLTEgMCAwLTM3IDQ3LTM1IDc1IDIgMjMgMjYgMzAgMTkgNiA0NCAxIDQ4LTkgOTUtNDEgMjMtMTYgMzYtNDEgMTUtMjYgMTItNTItNC00MS00My02MC0zMS0xNS03NS0xNC0zMCAxLTU4IDYtNDggMTAtODQgMzktMzQgMjgtNTMgNjktMTkgNDAtMjEgODYtMSA0NyAxNiA5MCAxNSA0MCA0NCA2OSAzMCAzMCA2OSA0NSAyMiA5IDUxIDE1IDc2IDE2IDE1MC03IDc0LTI0IDEyNy04MSAwLTEgMCAwLTIzIDQ2LTU3IDgzLTM2IDQwLTc4IDY0LTcwIDQwLTE1MyAzNi05Mi01LTE2MC00NC03My00MS0xMTItMTIwLTMyLTY1LTM0LTE0NS0yLTU1IDIzLTExMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzM0IDQ3OXEtMjQtMTAtMzktMjgtMTctMjAtMTktNDMtMS0xOSA2LTM5IDctMTggMjAtMzMgMS0yIDAgMC0xMiAzMy02IDYxIDcgMzIgMzggNDYgMzYgMTYgOTIgMTAgNTUtNSAxMTEtMjkgNTItMjIgOTktNTggMjUtMjAgNDUtNDMgMjEtMjQgMzEtNDggMTMtMzIgMi01NS0xMC0yMi0zOS0zNi0yMy0xMS01MS0xNS0yLTEgMC0xIDU1LTggMTA5IDUgMzQgOCA1NiAyNCAyOCAyMCAyOSA1MSAxIDM5LTI0IDc4LTIxIDMxLTU3IDU5LTY3IDUxLTE2MCA4NC02NCAyMi0xMzEgMjctNjUgNC0xMTItMTdaTTExMiAyMTh2MXEtMjggNDMtMzcgODR2MWwtNTQtNDR2LTFsMjMtNTdoMWw2NyAxNlpNMCAzNjh2LTJsNjQtMTRoMXEtMiA0NCA2IDg4djFMNCA0MzBIM2wtMy02MlptMjggMTY5di0xbDU0LTQ3cTE3IDQ0IDQxIDg0bC0xIDEtNjQgMjAtMzAtNTdabTEyMyA2OHEyMyAyOSA3NyA2MSAxIDAgMCAwbC01NyA0NGgtMWwtNTAtNDB2LTFsMzAtNjRoMVptMzk5IDY1di0xcTM3LTE3IDc4LTYxbDI3IDY4djFsLTUwIDM2aC0xbC01NC00M1ptLTI3NyA4NXYtNjhxNDcgMTYgOTUgMjB2MWwtMjYgNjBoLTFsLTY4LTEzWm0xNzEgMTctMzEtNjQgMS0xcTUxIDEgOTctMjBoMWwtMyA3MC0xIDItNjQgMTNaIiBmaWxsPSIjZmZmIi8+PC9zdmc+",input4.dispatchEvent(new Event("input"))})),GongAnbtn.addEventListener("click",(()=>{input4.value="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2OCAxODciPjxwYXRoIGQ9Ik0xMzIgMThxMCAzLTIgMy0yIDEtMy0xbC0xLTFxLTIgMS0zLTFoLTRsLTEtMXExIDAgMCAwbC02LTJxLTItMS0xLTJsLTEtMWgtNEw4OSA1cS0yIDAtMy0yLTIgMi03IDNsLTIgMS0zIDEtMyAxLTUgMi02IDJoLTFsLTEgMS02IDItMyAxLTcgMnEtMyAxLTUtMUw4NCAxaDJsMzggMTQgMyAyIDUgMVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJNMTMyIDE4cTMgMjAgMjEgMjRsMSAxIDEgMTggMSAxcTQtMSA2IDRsMSA4LTEgMnYxbC0yIDN2MWgxbDEtMmgxdjJsLTIgMS00IDV2MWgxbDUtNXEwLTEgMCAwdjFsLTUgNC0xIDFoLTF2LTFsLTItMWgtMXEtMSAyIDEgM2wzIDFoMWw1LTUgNSA3cTEgMTMtNiAyNC0xIDIgMSAyIDMgMSA0IDQgMSA2LTkgMTdsLTE2IDE0IDEgMXExMSAxIDE2IDZ2MXExIDUtNyAxMS02IDQtMTIgNS0xNyA2LTM1IDdsLTggMUg3OGwtMTktMXEtMzgtNC00Ny0xNnYtM2g1cTE0IDMgMTggMXYtMWgtM3EwIDEgMCAwbC0xLTEtMTctNWgtMWwxLTEgNCAxIDQgMSAxMCA0aDN2MmwxLTF2LTFoLTFsLTIwLTggMTEtM3YtMWwtNy02LTEwLTlxLTUtNS03LTExLTQtOCAzLTEwIDIgMCAxLTEtNS0xMC02LTIxdi0xcTEtNiA0LThoMXYtMWw2IDVoMWwxLTF2LTFsLTgtNnEtMi05IDItMTggMi01IDUtNCAyIDEgMi0ybDEtMTdoMXExOS00IDIxLTIzIDIgMiA1IDFsNy0yIDMtMSA2LTIgMS0xaDFsNi0yIDUtMiAzLTEgMy0xIDItMXE1LTEgNy0zIDEgMiAzIDJsMTcgN2g0bDEgMXEtMSAxIDEgMmw2IDJxMSAwIDAgMGwxIDFoNHExIDIgMyAxbDEgMXExIDIgMyAxIDIgMCAyLTNaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0ibTEwMSAxMiAzIDIgNyAyIDkgNCA4IDN2M2wxIDMgMSAycTQgNyAxMSAxMmgxbDMgMmgybDIgMXYxcTIgMjItMyA0MWwtNSAxNC0zIDZxLTEgNS02IDEybC0zIDQtMyA1LTUgNnEtMy0zLTYtMWwtMS0xdi0ybC0yLTFoLTFsLTUtMXY1bC0xIDFxLTMtMi04LTFsLTIgMS0xLTEgMS01cS0xLTItMi0xLTEtMy0yLTJoLTF2LTFoLTd2LTFoLTF2MWgtMnYxbC0xIDR2MWgtNWwtMiAxaC0zbC0yIDFoLTJsLTIgMS0xLTF2LTRsLTItMS0xLTFoLTV2M2wtMSAxcS0zLTItNS0xaC0xdjJsLTEgMVExNiA5NCAyMCA0NWgxbDMtMmgxbDMtMiAyLTEgMy0yIDEtMSAxLTF2LTFsLTEtMWgtMWwxLTFxNCAxIDUtM3YtMXEyLTEgMi0zdi0xbDEtMyAxLTFMODQgN1Y2bDItMXYxbDEgMSA2IDMgMS0xIDEgMSAyIDFoMWwzIDFaIiBmaWxsPSIjM2MzNzY1Ii8+PHBhdGggZD0iTTEwMSAxMnE1IDAgMyAybC0zLTJaIiBmaWxsPSIjYjMzMTJjIi8+PHBhdGggZD0ibTExOSA5Ni0yLTVoLTFsLTQgNHEtOCA2LTEyIDctNiAyLTE0LTJoLTFsLTMgMS04IDItMTItNXEtNy01LTgtOWgtMWwtMiA3cS04LTEwLTExLTIxLTItNi0xLTExIDAtOSAzLTE3bDItNiAyLTQgMi0yIDItMXE5LTExIDIzLTE1IDEyLTMgMjUgMSAxMiA0IDIxIDEzIDkgMTEgMTIgMjR2NmwxIDYtMiA0djJxLTMgMTAtMTEgMjFaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0iTTEyOCAyNnYtM2gzbDEgMXYxbC0xIDFoLTNaIiBmaWxsPSIjZmJlN2E2Ii8+PHBhdGggZD0iTTQxIDI1djFoLTJ2LTFoMloiIGZpbGw9IiNiMzMxMmMiLz48cGF0aCBkPSJtMTMwIDMxLTEtMiAzLTJoMWwxIDItMSAxLTMgMVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJNMTEzIDgxaC0xMWwtNC0xIDEtM3YtMWgtMXYtMmgtMWwtMS0xcTEtNS0yLTNINzVsLTEtMXEtMS0xLTEgMXYzbC0xIDFxLTEgMCAwIDBsMSAxLTEgMWgtMnYxaDJ2MmwtMyAySDU4bC0yIDEtMSAycTAgMSAwIDB2LTNxLTktMTMtMy0yOGwtMS0xdi0xaDFsMS0ydi0xcTQtOCAxMS0xM2wxLTEgMi0xIDItMXExNy04IDMzIDEgMTYgOCAxOCAyNnYzcTAgOS0zIDE1bC0yIDdoLTFsLTEtM1oiIGZpbGw9IiNiMzMxMmMiLz48cGF0aCBkPSJNMTM0IDM0di0zaDFsMSAzdjFsLTItMVptLTQ4IDRxMCA0LTIgMmwtOC0yIDEtMSA1IDEgMS0xIDItNHYtMSAxbDEgNVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJtMzQgMzctMSAxaC0ydi0xaDNaIiBmaWxsPSIjYjMzMTJjIi8+PHBhdGggZD0iTTg2IDM4aDh2MWwtNyAxdjFxMyAyIDMgN2wtNC02aC0xbC0xLTF2LTFxMiAyIDItMloiIGZpbGw9IiNmMmM0NGQiLz48cGF0aCBkPSJtMzAgNDAtMiAxaC0xdi0xaDNaIiBmaWxsPSIjYjMzMTJjIi8+PHBhdGggZD0ibTEwNSA0NS00IDVxLTIgMi0xIDBsMi00di0xaC0ycS0yLTEgMC0xaDJsMS00aDF2NGg0cTMgMCAwIDBsLTMgMVptLTM3LTEtMiAyLTMgM3YtMWwyLTMtMS0xaC0ydi0xaDNsMS0yaDFsMSAzWm0xNi0zIDEgMS01IDZxLTEgMS0xLTFsMS0xcTEtNSA0LTVaIiBmaWxsPSIjZmJlN2E2Ii8+PHBhdGggZD0iTTE0MiA0M2gtMWwxLTF2LTFsMSAxLTEgMVoiIGZpbGw9IiNiMzMxMmMiLz48cGF0aCBkPSJtNjYgNDYgMi0yIDItMSAxIDFoLTFsLTIgMXYxbDEgMmgtMWwtMi0yWiIgZmlsbD0iI2YyYzQ0ZCIvPjxwYXRoIGQ9Ik0xNDcgNDVoLTJsMi0xdjFabTIgMnYtMWg0bC00IDFaIiBmaWxsPSIjYjMzMTJjIi8+PHBhdGggZD0iTTEwNSA0N3EtMi0xIDAtMWwxIDJxMSAxIDAgMGwtMS0xWiIgZmlsbD0iI2YyYzQ0ZCIvPjxwYXRoIGQ9Im03OCA1Ny0xIDEtNSAycTAgMSAwIDBsMi0yaDFsMS0yIDItM2gxdjFsLTEgM1ptMTYgMWgtMWwtNSAxdi0xaDFsMi0xdi0zaDFxMC0xIDAgMGwxIDJoMWwyLTFoMWwtMyAzWiIgZmlsbD0iI2ZiZTdhNiIvPjxwYXRoIGQ9Im03NiA1Ni0xIDItMi0zcTEtMSAzIDFabTIgMSAyIDFoMXYxbC00LTEgMS0xWm0xNiAxIDMgMXYxbC00LTJoMVptLTEgMnYyaC0xdi0zaDF2MVptMSAxMCAxIDF2MUg3NmwtMSAxLTEgMS0xLTF2LTNxMC0yIDEtMWwxIDFoMTlaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0iTTk4IDc1SDczbC0xLTFxLTEgMCAwIDBsMS0xIDEgMSAxLTEgMS0xaDE5di0xbC0xLTFxMy0yIDIgM2wxIDFoMXYxWm02NS0xcTIgNiAwIDEybC01IDVoLTFsLTMtMXEtMi0xLTEtM2gxbDIgMXYxaDFsMS0xIDUtNHYtMXEwLTEgMCAwbC01IDVoLTF2LTFsNC01IDItMXYtMmgtMWwtMSAyaC0xdi0xbDItM3YtMWwxLTJaIiBmaWxsPSIjZmJlN2E2Ii8+PHBhdGggZD0iTTk4IDc1djFINzJsMS0xaDI1WiIgZmlsbD0iI2YyYzQ0ZCIvPjxwYXRoIGQ9Ik03MiA3NmgyN3YxSDcwdi0xaDJaIiBmaWxsPSIjZmJlN2E2Ii8+PHBhdGggZD0ibTk5IDc3LTEgMy0yNi0xdi0yaDI3WiIgZmlsbD0iI2YyYzQ0ZCIvPjxwYXRoIGQ9Im05OCA4MCA0IDFoMTFsLTExIDFoLTZsLTEgMWgtMnYtMUg3NHYtMWgtNWwzLTIgMjYgMVpNNSA4NXYtM2w4IDZ2MWwtMSAxaC0xbC02LTVabTc5IDMtMjUtMXEtMS0xIDEtMWwxLTEgMjEgMSAyIDJabTI3LTEtMjUgMXEwLTIgMi0ybDMgMXExLTIgMy0xaDE2bDEgMVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJtNTkgODcgMjUgMWgybDI1LTFoMXYxcS00IDQtMTQgOWwtNCAxcTAgMSAwIDBsLTEtM2gtMnYtMWwtMS0xLTEtMS0yIDEtMS0xLTEtMXYxaC00bC0yIDJoLTJsLTEgMSAxIDEtMSAyaC0xbC0xNi05di0yWiIgZmlsbD0iI2IzMzEyYyIvPjxwYXRoIGQ9Im0xMTkgOTYgMSAxMi0xIDFoLTJsLTIgM2gtMXEwIDItMiAyaC0xcTAgNC01IDN2LTRsLTEtNmgtMXEtNiAzLTEyIDAtNy0zLTEzLTEtNyA0LTEzIDEtMi0xLTEgMXY0bC0xIDRoLTFsLTEyLTctMS0ycTItNiAxLTExbDItN2gxcTEgNCA4IDlsMTIgNSA4LTIgMy0xaDFxOCA0IDE0IDIgNC0xIDEyLTdsNC00aDFsMiA1WiIgZmlsbD0iI2IzMzEyYyIvPjxwYXRoIGQ9Ik0xMSAxMDV2MXEtMSAxLTUtMmwtMS0xcS00LTMtMy00bDkgNlptMC0zaDFsLTEgMS0yLTF2LTFoMnYxWm0xNTYgMC05IDZoLTF2LTFsOC02aDJ2MVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJtMTU2IDExMiA0LTEgNC0zaDFsLTEgMi04IDRxLTMgMS0zLTFsLTEtMnYtMWwyLTF2LTFsMi0zIDEtMSAxLTJoMWwtMyA0djFsLTIgMy0xIDJoMWwyLTF2LTFsOS01djJsLTkgNHYxWiIgZmlsbD0iI2ZiZTdhNiIvPjxyZWN0IGZpbGw9IiNmYmU3YTYiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxIiB4PSItNiIgeT0iLTEiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgyOSAtMjAyIDY4KSIvPjxwYXRoIGQ9Ik0xMDYgMTEzaC00cS01LTMtMTAtM2gtMnYybC0xIDEtMi0xcTAtMSAwIDBsLTIgMWgtMXEtMS0yLTMtMWgtMXYtMWwtMS0xcS0yLTEtOCAxbC0zIDFoLTN2LTRxLTEtMiAxLTEgNiAzIDEzLTEgNi0yIDEzIDEgNiAzIDEyIDBoMWwxIDZaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0ibTExIDExNC01LTJ2LTFsNSAyaDF2LTFsLTctMy0xLTEgMS0xIDEgMSA4IDMgMSAxLTUgNC0xIDEtMS0ycS0xIDAgMCAwIDAtMSAwIDBoM3YtMVoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJtMTAyIDExMy0xIDEtMSAxLTIgMXYxcS0yIDAtMy0yaC0xcS0yIDMtOCAxbC0xLTFxLTE1IDItMTctM2wzLTFxNi0yIDgtMWwxIDF2MWgxcTItMSAzIDFoMWwyLTFxMC0xIDAgMGwyIDEgMS0xdi0yaDJxNSAwIDEwIDNaIiBmaWxsPSIjYjMzMTJjIi8+PHBhdGggZD0iTTE2MyAxMTJ2MmwtNSAyLTEtMWgtMSAxbDYtM1ptLTUgNSAzLTFoMWwtMSAxLTIgMWgtMXYtMVpNMTMgMTI4bC02LTUtMy0zSDNsMS0xaDFsMTAgOS0xIDEtMS0xWm0xMjkgOWgtMXYtMWw0LThxMSAwIDAgMGgtMWwtMyA0cTAgMSAwIDB2LTNsMTAtNiA0LTFoMWwtMSAxLTYgN3YxbDExLTExaDFxMSAwIDAgMGwtOCA5djFsMS0xIDktOGgydjFsLTE0IDEwdjFoMWwxMy0xMCAxIDFxMCAyLTIgM2wtMTEgNnYxbDExLTYgMSAxLTIgMi0xNCA2cS00IDIgMCAxbDExLTRoMWwtMiAyLTkgM2gtM2wtMy0xLTMgMi0yMCAxM2gtMWwtMS0xdi0xcTctMiAxMS02bDEtMWgxbDEwLTZ2LTFaTTEwIDEyMGwxMCAxMS0xMS0xMCAxLTFabTYgMTItNi0zLTktN2gxcTAtMSAwIDBsMTQgOXYxcTAgMSAwIDBaIiBmaWxsPSIjZmJlN2E2Ii8+PHBhdGggZD0ibTE0NSAxMzItMyA0IDMtNSA1LTYgMSAxLTUgNmgtMVoiIGZpbGw9IiNmMmM0NGQiLz48cGF0aCBkPSJtNiAxMzAtMi0yIDEtMSAxMSA2djFxMCAxIDAgMGwtMTAtNFoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJNOTMgMTI4cTEtMSAyIDFoLTFsLTEtMVoiIGZpbGw9IiNiMzMxMmMiLz48cGF0aCBkPSJNMTI2IDEyOXEtMSAzLTQgNWwtMyA0LTQgNC0yIDFxLTQgNS05IDh2LTFsMTEtOXYtMmwtMi0xIDMgMWgxbDQtNCA1LTZabS01NyAzcS00IDctMTEgOWgtMXYtMXE3LTEgMTAtN2wyLTFabS02MiAxaDFsMTYgNi0xNy01di0xWm02NSA0cTAtMiAyLTNoM3EyIDEgMCAxLTMgMC00IDJoLTFabS0yMSAwcTEtMiAzLTJ2MWwtMiAxcTAgMSAwIDBoLTFabS0yNiA1di0xbC0xMi0yLTItMmgxbDkgM2gzbDYgM2gydjFxLTggMC0xNS0yaC0xdi0xbDkgMXExIDAgMCAwWm02NS0zIDUtMnEzLTEgNCAxdjFoLTFxLTQtMi03IDBoLTFabTE4LTEgNC0xdjFoLTRxLTEgMCAwIDBabTM5IDMgMTAtM3YxcS0yIDItOSAybC03IDJoLTF2LTFsNS0xaDJabS03OSAwIDQtMiA0IDF2MXEtNC0yLTggMHYxLTFxLTEgMCAwIDBabTc1IDN2LTFsOS0xIDEgMS0yIDEtOCAxLTEtMWgxWm0tMTIzIDF2LTFoMmwxMyAySDIwdi0xWm0xMTggMSAxMS0xcTEgMCAwIDAgMCAyLTIgMmgtMTN2LTFoNFoiIGZpbGw9IiNmYmU3YTYiLz48cmVjdCBmaWxsPSIjZmJlN2E2IiB3aWR0aD0iMTUiIGhlaWdodD0iMSIgeD0iLTciIHk9Ii0xIiByeD0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTEgNzcwNCAtMTUwNikiLz48cGF0aCBkPSJNODQgMTU1aC0ybC05IDFoLTF2LTFoMXE0IDEgOC0xaDJxNy0yIDExLTcgMC0xIDAgMC0yIDUtMTAgN3YxWm0tMTUtNXEyIDAgMy0yIDAtMyAwIDB0LTMgM3YtMVptOS0yaDF2MWgtMXYtMVoiIGZpbGw9IiNmYmU3YTYiLz48cmVjdCBmaWxsPSIjZmJlN2E2IiB3aWR0aD0iMTUiIGhlaWdodD0iMSIgeD0iLTciIHk9Ii0xIiByeD0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM4IDE0OCkiLz48cGF0aCBkPSJNNDkgMTUwcTEtMiAzLTJsMSAxLTMgM2gtMXYtMlptLTktMWgxbC0xIDEtMTQgMXYtMmgxNFoiIGZpbGw9IiNmYmU3YTYiLz48Y2lyY2xlIGZpbGw9IiNmYmU3YTYiIGN4PSIwIiBjeT0iMCIgcj0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoMzggLTE1OCAyNDUpIi8+PHBhdGggZD0iTTY2IDE1MXYtMWgybC0yIDFaIiBmaWxsPSIjZmJlN2E2Ii8+PHJlY3QgZmlsbD0iI2ZiZTdhNiIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEiIHg9Ii03IiB5PSItMSIgcng9IjAiIHRyYW5zZm9ybT0icm90YXRlKDEgLTY1NjggNjAzNikiLz48cGF0aCBkPSJNNzMgMTUxdi0xaDJ2MWgtMlptMyAwdi0xaDJ2MWgtMlptLTQwIDEgMi0xaDV2MWwtMTQgMXYtMWg3Wm02MiAzcTItMyA1LTR2MWwtNSAzcS0yIDEgMCAwWm0yMSAydi0xbDItMWgydi0ybDMtMWgxM3YyaC0xbC0xMS0xaC0xdjFsMTEgMXYxaC0ybC05LTEgMSAxIDYgMXEyIDAgMCAxaC0ybC0xMSAxMHEtMSAwIDAgMCAwIDEgMCAwbDE3LTEyaDFsMSAxdjFsLTE3IDEwdjFoMWwzLTEgMSAxLTEgMS0xMiAxaC0zdjFsLTE2IDJoLTJsLTEtMXExLTIgMi0xaDFsMy0xaDdsMi0yIDgtOXYtMWw0LTF2LTFabS02NiAxMS0xMS0xMSA0IDEgMTAgMTFxMCAxIDAgMGwtOC0xMHYtMXEzLTEgNiAxbC0xIDEtMy0xdjFsMyAydjFsMSAxdjFsNSA1aDF2LTFoLTF2LTFxMiAwIDMgMmwxNSAydjFoLThsLTI2LTQtMS0yaC0xbC0xOC05di0xbDItMWgxbDExIDcgMyAyIDUgM2gxdi0xbC0xNi0xMC0xLTIgMi0xaDE3djFoLTFsLTQtMWgtMnYxbDggMXYxbC00LTFoLTRsLTItMWgtOGwxIDFoNmwxIDEgMTEgMTEgMyAxdi0xWiIgZmlsbD0iI2ZiZTdhNiIvPjxwYXRoIGQ9Ik0xMjcgMTU5djFsLTExIDEwdi0ybDktOCAxLTF2LTFsLTQtMXYtMWgxbDYgMXEyIDAgMCAxaC0xbC0xIDFaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0ibTE1IDE1NyAyMCA4aC0zbC0xMC00LTQtMS00LTEtMSAxaDFsMTcgNSAxIDFxMCAxIDAgMGgzdjFxLTQgMi0xOC0xaC01bC0xLTJoMWwxOCAzaDF2LTFsLTIyLTVxMi0zIDYtNFoiIGZpbGw9IiNmYmU3YTYiLz48cGF0aCBkPSJtMzcgMTU3IDEyIDEwdjFoLTFsLTEzLTEwdi0xaDJaIiBmaWxsPSIjZjJjNDRkIi8+PHBhdGggZD0iTTEyOCAxNjdoLTF2LTFsMTYtOSAyIDF2MWwtMTcgOFptLTM3LTgtMSAyaC0xbC00IDNoLTFsLTEtMSAxLTFoMWw3LTRoMWwtMSAxaC0xWm00NCA2djFoLTJ2LTFsMTUtNSAxLTFoNHYxbC0xNyA1aC0xWiIgZmlsbD0iI2ZiZTdhNiIvPjxyZWN0IGZpbGw9IiNmMmM0NGQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEzIiB4PSItMSIgeT0iLTciIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSg0MiAtMTU1IDIzNSkiLz48cGF0aCBkPSJNMTA5IDE3MHYtMWw5LTEwcTEgMS04IDExdjFsLTEtMVpNOSAxNjFsMjIgNXYxaC0xbC0xOC0zaC0xbDEgMnYzcS00LTQtMy04WiIgZmlsbD0iI2YyYzQ0ZCIvPjxwYXRoIGQ9Ik0xNTcgMTYydjFoLTFsLTIwIDQgMjAtNmgxdjFabS0yIDNoMXYxbC0xIDEtMTggMmgtMmwxLTEgMTktM1ptLTEyMCAwaDF2MWwtMSAxdi0yWm0xIDRxLTE5IDMtMjIgMHYtMXEwLTEgMCAwaDJxMTUgMiAxOSAwbDEgMVptMTA1IDJoLTZsLTEtMWgxbDE4LTFoMXEtMiAzLTExIDJoLTJabS0xMjEgMmgtMXYtMWwxOS0xdjFoLTJxLTEyIDMtMTYgMVptNyAzaC0xIDFsMTktNWgydjFsLTMgMXEtMTQgNS0xOCAzWm0xMTQgMHYxcS00IDEtMTQtM2gtMXEtOS0zIDAtMWwxNSAzWm02LTMgMSAxcS0yIDEtMTMtMWgtM2wtMS0xaDFsMTUgMVptLTQ3IDgtMSAxLTMtMi00LTF2LTFoNGwxLTEgMSAxcTIgMiA1IDIgMC0xIDAgMGw1IDFoMWw0IDF2MWwtOC0xLTUtMVptLTI0LTN2MWwtMTQgMy0yIDFoLTV2LTFoMWwxNi00aDRaIiBmaWxsPSIjZmJlN2E2Ii8+PC9zdmc+",input4.dispatchEvent(new Event("input"))})),input1.addEventListener("input",(()=>{input1.value?input6.disabled=!1:input6.disabled=!0,updateShields()})),input2.addEventListener("input",(()=>{updateShields()})),input3Buttons.forEach((M=>{M.addEventListener("click",(()=>{input3Buttons.forEach((M=>M.classList.remove("active"))),M.classList.add("active"),"social"===M.textContent?input7.disabled=!0:input7.disabled=!1,updateShields()}))})),input4.addEventListener("input",(()=>{input4.value.includes("data:image/svg+xml;")?input5.disabled=!0:input5.disabled=!1,updateShields()})),input5.addEventListener("input",(()=>{updateShields()})),input6.addEventListener("input",(()=>{updateShields()})),input7.addEventListener("input",(()=>{updateShields()})),input8Buttons.forEach((M=>{M.addEventListener("click",(()=>{input8Buttons.forEach((M=>M.classList.remove("active"))),M.classList.add("active")}))}));const copyButton_shields=document.getElementById("copyBtn_shields");copyButton_shields.addEventListener("click",(()=>{let M="";document.querySelectorAll(".outputshieldsurl span").forEach((t=>{"none"!==t.style.display&&(M+=t.textContent,"<br>"===t.innerHTML&&(M+="\n"))})),copyTextToClipboard(M)}));const urlBtn=document.querySelector(".input8:nth-child(1)"),mdBtn=document.querySelector(".input8:nth-child(2)"),rstBtn=document.querySelector(".input8:nth-child(3)"),ascdBtn=document.querySelector(".input8:nth-child(4)"),htmlBtn=document.querySelector(".input8:nth-child(5)"),mdEls=document.querySelectorAll(".opmdsurl"),rstEls=document.querySelectorAll(".oprstsurl"),ascdEls=document.querySelectorAll(".opascdsurl"),htmlEls=document.querySelectorAll(".ophtmlsurl");urlBtn.addEventListener("click",(()=>{mdEls.forEach((M=>M.style.display="none")),rstEls.forEach((M=>M.style.display="none")),ascdEls.forEach((M=>M.style.display="none")),htmlEls.forEach((M=>M.style.display="none"))})),mdBtn.addEventListener("click",(()=>{mdEls.forEach((M=>M.style.display="inline")),rstEls.forEach((M=>M.style.display="none")),ascdEls.forEach((M=>M.style.display="none")),htmlEls.forEach((M=>M.style.display="none"))})),rstBtn.addEventListener("click",(()=>{mdEls.forEach((M=>M.style.display="none")),rstEls.forEach((M=>M.style.display="inline")),ascdEls.forEach((M=>M.style.display="none")),htmlEls.forEach((M=>M.style.display="none"))})),ascdBtn.addEventListener("click",(()=>{mdEls.forEach((M=>M.style.display="none")),rstEls.forEach((M=>M.style.display="none")),ascdEls.forEach((M=>M.style.display="inline")),htmlEls.forEach((M=>M.style.display="none"))})),htmlBtn.addEventListener("click",(()=>{mdEls.forEach((M=>M.style.display="none")),rstEls.forEach((M=>M.style.display="none")),ascdEls.forEach((M=>M.style.display="none")),htmlEls.forEach((M=>M.style.display="inline"))}));let imgElement=document.querySelector(".gsimg"),imgElement1=document.querySelector(".gsimg1"),buttonElement=document.querySelector(".generateshields-btn");buttonElement.addEventListener("click",(function(){let M=document.getElementById("shieldsurl").textContent;imgElement.src=M,imgElement1.src=M,imgElement.style.display="block",imgElement.onload=function(){const M=document.querySelector(".gsimgL");M.addEventListener("mouseenter",(function(){t.style.display="block"})),M.addEventListener("mouseleave",(function(){t.style.display="none"}));const t=document.querySelector(".Lgsimg-tooltip");document.onmousemove=function(M){const I=document.querySelector(".gsimg").getBoundingClientRect(),T=I.left+0,i=I.top+-110;t.style.left=`${T}px`,t.style.top=`${i}px`}}})),window.addEventListener("keydown",(function(M){"/page/makeshields/"===window.location.pathname&&("F12"===M.key||M.ctrlKey&&M.shiftKey&&73===M.keyCode)&&(M.preventDefault(),window.location.href="/makeshields/")}));let makeshieldspageurl=parent.window.location.pathname;makeshieldspageurl.includes("/page/makeshields/")?(document.getElementById("pageback-button").style.display="block",document.getElementById("pageback-button").onclick=()=>{window.location.href="/makeshields/"}):(document.getElementById("pbbuttonid").style.display="none",document.getElementById("pageback-button").style.display="none");const input2pickr=Pickr.create({el:".input2color-picker",theme:"monolith",default:"#4DC81F",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!1,cmyk:!1,input:!0,clear:!1,cancel:!0,save:!0}},i18n:{"btn:save":"保存","btn:cancel":"回到上个保存颜色"}});input2pickr.on("save",((M,t)=>{const I=M.toRGBA().toString(0);input2.value=I,updateShields()}));const input7pickr=Pickr.create({el:".input7color-picker",theme:"monolith",default:"#4DC81F",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!1,cmyk:!1,input:!0,clear:!1,cancel:!0,save:!0}},i18n:{"btn:save":"保存","btn:cancel":"回到上个保存颜色"}});input7pickr.on("save",((M,t)=>{const I=M.toRGBA().toString(0);input7.value=I,updateShields()}));const input5pickr=Pickr.create({el:".input5color-picker",theme:"monolith",default:"#4DC81F",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!1,cmyk:!1,input:!0,clear:!1,cancel:!0,save:!0}},i18n:{"btn:save":"保存","btn:cancel":"回到上个保存颜色"}});input5pickr.on("save",((M,t)=>{const I=M.toRGBA().toString(0);input5.value=I,updateShields()}));var movemask0=document.getElementsByClassName("movemask")[0],movemask1=document.getElementsByClassName("movemask")[1],movemaskfull=document.getElementsByClassName("movemaskfull")[0];document.addEventListener("dragenter",(function(M){M.preventDefault(),showMask()})),movemaskfull.addEventListener("dragleave",(function(M){M.preventDefault(),hideMask()})),document.addEventListener("dragover",(function(M){M.preventDefault()})),document.addEventListener("drop",handleFileDrop),document.addEventListener("drop",(function(M){M.preventDefault(),handleFileDrop(M)}));