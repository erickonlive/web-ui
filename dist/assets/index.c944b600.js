import{o as c,c as d,a as t,b as h,d as z,e as ne,v as ae,r as g,I as R,w as C,f as V,F as y,g as S,h as k,t as m,i as re,j as p,k as u,l as le,m as ce,n as ie,p as q,q as P,u as K,s as de,x as ue,y as _e,z as he,A as pe,B as me,C as ge,D as ve}from"./vendor.aaf30075.js";const fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}};fe();var W="/assets/spotdl.fecdfd79.svg",v=(o,n)=>{const i=o.__vccOpts||o;for(const[e,s]of n)i[e]=s;return i};const be={components:{},setup(){return{}}},we={class:"p-10 footer bg-neutral text-neutral-content"},ye=t("div",null,[t("img",{src:W,width:"50",height:"50",viewBox:"0 0 24 24"}),t("p",null,[h("spotdl"),t("br"),h("Open Source Music Downloader")])],-1),$e=z('<div><span class="footer-title">Social</span><div class="grid grid-flow-col gap-4"><a href="https://github.com/spotDL/spotdl-v4" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://discord.gg/xCa23pwJWY" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a></div></div>',1),ke=[ye,$e];function xe(o,n,i,e,s,a){return c(),d("footer",we,ke)}var Se=v(be,[["render",xe]]);const $={PROTOCOL:"http",WS_PROTOCOL:"ws",BACKEND:"localhost",PORT:"8800",BASEURL:""};console.log("using env:",{});console.log("using config: ",$);const E=ne.create({baseURL:`${$.PROTOCOL}://${$.BACKEND}:${$.PORT}${$.BASEURL}`}),T=ae();console.log("session ID: ",T);const G=new WebSocket(`${$.WS_PROTOCOL}://${$.BACKEND}:${$.PORT}${$.BASEURL}/api/ws?client_id=${T}`);function De(o){return E.get("/api/songs/search",{params:{query:o}})}function Oe(o){return E.get("/api/song/url",{params:{url:o}})}function Le(o){return E.post("/api/download/url",null,{params:{url:o,client_id:T}})}function Re(o){return E.defaults.baseURL+"/api/download/file?file="+o+"&client_id="+T}function Ee(){return E.get("/api/settings")}function Ue(o){return E.post("/api/settings/update",o)}function Be(o){return G.onmessage=o}function Ce(o){return G.onerror=o}var D={search:De,open:Oe,download:Le,downloadFileURL:Re,getSettings:Ee,setSettings:Ue,ws_onmessage:Be,ws_onerror:Ce};const A=g({}),Te={audio_provider:["youtube","youtube-music"],lyrics_provider:["genius","musixmatch","azlyrics"],format:["mp3","flac","ogg","opus","m4a"],output:"{artists} - {title}.{output-ext}"};D.getSettings().then(o=>{o.status===200?(console.log("Received settings:",o.data),A.value=o.data):console.log("Error loading settings")});function Ae(){const o=g();function n(){console.log("Saving settings:",A.value),D.setSettings(A.value).then(i=>{console.log("Received settings response:",i),i.status===200?(console.log("Saved!"),o.value=!0,setTimeout(()=>{o.value=null},2e3)):(console.log("Error saving settings"),o.value=!1,setTimeout(()=>{o.value=null},2e3))})}return{saveSettings:n,settings:A,settingsOptions:Te,isSaved:o}}const Me={components:{Icon:R},setup(){return{sm:Ae()}}},Ne=t("input",{type:"checkbox",id:"my-modal",class:"modal-toggle"},null,-1),Ie={class:"modal"},Ve={class:"modal-box relative"},qe=t("label",{for:"my-modal",class:"btn btn-sm btn-circle absolute right-2 top-2"},"\u2715",-1),Pe=t("h3",{class:"font-bold text-lg"},"Download Settings",-1),We={class:"flex flex-col justify-center my-4"},je={class:"form-control w-full"},Fe=t("label",{class:"label"},[t("span",{class:"label-text"},"Audio Provider")],-1),He=["selected"],Qe={class:"form-control w-full"},ze=t("label",{class:"label"},[t("span",{class:"label-text"},"Lyrics Provider")],-1),Ke=["selected"],Ge={class:"form-control w-full"},Ze=t("label",{class:"label"},[t("span",{class:"label-text"},"Output Format")],-1),Je=["selected"],Xe={key:0,class:"alert alert-success shadow-lg"},Ye=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"Changes saved")],-1),et=[Ye],tt={key:1,class:"alert alert-error shadow-lg"},ot=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"Error! Unable to save settings")],-1),st=[ot],nt={class:"modal-action"};function at(o,n,i,e,s,a){return c(),d(y,null,[Ne,t("div",Ie,[t("div",Ve,[qe,Pe,t("div",We,[t("div",je,[Fe,C(t("select",{class:"select w-full","onUpdate:modelValue":n[0]||(n[0]=r=>e.sm.settings.value.audio_provider=r)},[(c(!0),d(y,null,S(e.sm.settingsOptions.audio_provider,(r,l)=>(c(),d("option",{key:l,selected:r===e.sm.settings.value.audio_provider},m(r),9,He))),128))],512),[[V,e.sm.settings.value.audio_provider]])]),t("div",Qe,[ze,C(t("select",{class:"select w-full","onUpdate:modelValue":n[1]||(n[1]=r=>e.sm.settings.value.lyrics_provider=r)},[(c(!0),d(y,null,S(e.sm.settingsOptions.lyrics_provider,(r,l)=>(c(),d("option",{key:l,selected:r===e.sm.settings.value.lyrics_provider},m(r),9,Ke))),128))],512),[[V,e.sm.settings.value.lyrics_provider]])]),t("div",Ge,[Ze,C(t("select",{class:"select w-full","onUpdate:modelValue":n[2]||(n[2]=r=>e.sm.settings.value.format=r)},[(c(!0),d(y,null,S(e.sm.settingsOptions.format,(r,l)=>(c(),d("option",{key:l,selected:r===e.sm.settings.value.format},m(r),9,Je))),128))],512),[[V,e.sm.settings.value.format]])])]),e.sm.isSaved.value===!0?(c(),d("div",Xe,et)):k("",!0),e.sm.isSaved.value===!1?(c(),d("div",tt,st)):k("",!0),t("div",nt,[t("label",{class:"btn",onClick:n[3]||(n[3]=r=>e.sm.saveSettings())},"Save")])])])],64)}var rt=v(Me,[["render",at]]);const b=g(""),Z=g("light"),J=g("dark");function X(o=!0,n="",i,e){function s(w){Z.value=w,f()}function a(w){J.value=w,f()}function r(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function l(w){b.value=w,f()}function _(){b==="dark"?b.value="light":b==="light"&&(b.value="dark"),f()}function f(){document.documentElement.setAttribute("data-theme",b.value==="dark"?J.value:Z.value)}return b.value!=="light"&&b.value!=="dark"&&(o&&l(r()),(n==="light"||n==="dark")&&(b.value=n)),i&&s(i),e&&a(e),f(),{currentTheme:b,setLightAlias:s,setDarkAlias:a,getSystemTheme:r,setTheme:l,switchTheme:_}}const lt={name:"App",components:{Footer:Se,Settings:rt},setup(){const o=X();return re(()=>{o.setLightAlias("emerald"),o.setDarkAlias("forest")}),{themeMgr:o}}},ct={class:"bg-base-300 absolute w-full top-0"};function it(o,n,i,e,s,a){const r=p("router-view"),l=p("Footer"),_=p("Settings");return c(),d("div",ct,[u(r),u(l),u(_)])}var dt=v(lt,[["render",it]]);const Y=g(""),j=g(),U=g(!1),M=g(!1),N=g("");function F(){function o(s){return n(s)||i(s)}function n(s){return s!==""}function i(s){return!!s.includes("://open.spotify.com/track/")}function e(s){console.log("Searching for:",s),j.value=[],U.value=!0,Y.value=s,M.value=!1,N.value="",D.search(s).then(a=>{console.log("Received Data:",a.data),a.status===200?(j.value=a.data,U.value=!1):(console.log("Error:",a),U.value=!1,M.value=!0,N.value=a.toString())}).catch(a=>{console.log("Other Error:",a.message),U.value=!1,M.value=!0,N.value=a.message})}return{searchTerm:Y,isSearching:U,results:j,error:M,errorValue:N,searchFor:e,isValid:o,isValidSearch:n,isValidURL:i}}const O={QUEUED:"In Queue",DOWNLOADING:"Downloading...",DOWNLOADED:"Done",ERROR:"Error"},L=g([]);class ut{constructor(n){this.song=n,this.web_status=O.QUEUED,this.progress=0,this.message=null,this.web_download_url=null}setDownloading(){this.web_status=O.DOWNLOADING}setDownloaded(){this.web_status=O.DOWNLOADED}setError(){this.web_status=O.ERROR}setWebURL(n){this.web_download_url=n}isQueued(){return this.song.song_id!==void 0}isDownloading(){return this.web_status===O.DOWNLOADING}isDownloaded(){return this.web_status===O.DOWNLOADED}isErrored(){return this.web_status===O.ERROR}wsUpdate(n){this.progress=n.progress,this.message=n.message}}function I(){function o(s){return L.value.findIndex(a=>a.song.song_id===s.song_id)}function n(s){let a=new ut(s);L.value.push(a)}function i(s){console.log("removing",s,s.song_id),L.value=L.value.filter(a=>a.song.song_id!==s.song_id),console.log(L.value)}function e(s){return L.value[o(s)]}return{appendSong:n,removeSong:i,getBySong:e,downloadQueue:L}}const x=I();D.ws_onmessage(o=>{let n=JSON.parse(o.data);x.getBySong(n.song).wsUpdate(n)});function B(){function o(s){D.open(s).then(a=>{if(console.log("Received Response:",a),a.status===200){let r=a.data;console.log("Opened Song:",r),i(r)}else console.log("Error:",a)}).catch(a=>{console.log("Other Error:",a.message)})}function n(s){console.log("Downloading",s),x.getBySong(s).setDownloading(),D.download(s.url).then(a=>{if(console.log("Received Response:",a),a.status===200){let r=a.data;console.log("Download Complete:",r),x.getBySong(s).setWebURL(D.downloadFileURL(r)),x.getBySong(s).setDownloaded()}else console.log("Error:",a),x.getBySong(s).setError()}).catch(a=>{console.log("Other Error:",a.message),x.getBySong(s).setError()})}function i(s,a=!0){x.appendSong(s),a&&n(s)}function e(s){console.log("removing"),x.removeSong(s)}return{fromURL:o,download:n,queue:i,remove:e}}const _t={components:{Icon:R},setup(){const o=F(),n=B(),i=["All Eyes On Me - Bo Burnham","https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f","Lil Wayne","Drive - Miley Cyrus","Sofia - TMG","Lightning Crashes - Live"],e=g(i[0]),s=setInterval(()=>{i.push(i.shift()),e.value=i[0]},6e3);le(()=>{clearInterval(s)});function a(l){if(o.isValidURL(l))n.fromURL(l),r({name:"Download"});else if(o.isValidSearch(l)){let _={name:"Search",params:{query:l}};o.isValidSearch(l)&&r(_)}}function r(l){H.push(l)}return{lookUp:a,searchTerm:o.searchTerm,isValidURL:o.isValidURL,placeHolder:e}}},ht={class:"flex flex-row items-center space-x-4 w-full"},pt=["placeholder"],mt=h(" \u200B ");function gt(o,n,i,e,s,a){const r=p("Icon");return c(),d("div",ht,[C(t("input",{type:"text",placeholder:e.placeHolder,class:"input input-bordered w-full text-base-content","onUpdate:modelValue":n[0]||(n[0]=l=>e.searchTerm=l),onKeyup:n[1]||(n[1]=ie(l=>e.lookUp(e.searchTerm),["enter"]))},null,40,pt),[[ce,e.searchTerm]]),t("button",{class:"btn btn-square btn-primary",onClick:n[2]||(n[2]=l=>e.lookUp(e.searchTerm))},[mt,e.isValidURL(e.searchTerm)?(c(),q(r,{key:0,icon:"clarity:download-line",class:"h-6 w-6"})):(c(),q(r,{key:1,icon:"clarity:search-line",class:"h-6 w-6"}))])])}var ee=v(_t,[["render",gt]]);const vt={components:{Icon:R,SearchInput:ee},setup(){return{themeMgr:X()}}},ft={class:"hero min-h-screen"},bt={key:0,class:"flex justify-end absolute top-0 right-0"},wt={class:"swap swap-rotate"},yt=["checked"],$t=h(" \u200B "),kt=h(" \u200B "),xt={for:"my-modal",class:"btn btn-square modal-button m-2"},St=h(" \u200B "),Dt={class:"block text-center justify-center hero-content"},Ot=z('<div class="bg-cover bg-no-repeat bg-center" data-v-0d4ba696><img src="'+W+'" class="mb-5 w-32 center" data-v-0d4ba696></div><div class="max-w-lg" data-v-0d4ba696><h1 class="mb-5 text-5xl font-bold text-base-content" data-v-0d4ba696>spotdl</h1><p class="mb-5 text-base-content" data-v-0d4ba696> Download any song and never have to worry about metadata. </p></div>',2);function Lt(o,n,i,e,s,a){const r=p("Icon"),l=p("SearchInput");return c(),d("div",ft,[(c(),d("div",bt,[t("label",wt,[t("input",{type:"checkbox",onChange:n[0]||(n[0]=_=>e.themeMgr.setTheme(_.target.checked?"light":"dark")),checked:e.themeMgr.currentTheme.value==="dark"?!1:"checked"},null,40,yt),$t,u(r,{icon:"clarity:sun-line",class:"swap-on fill-current h-8 w-8 m-4"}),kt,u(r,{icon:"clarity:moon-line",class:"swap-off fill-current h-8 w-8 m-4"})]),t("label",xt,[St,u(r,{icon:"clarity:settings-line",class:"h-6 w-6"})])])),t("div",Dt,[Ot,u(l)])])}var Rt=v(vt,[["render",Lt],["__scopeId","data-v-0d4ba696"]]);const Et={components:{Hero:Rt},setup(){return P(()=>{window.scroll(0,0)}),{}}};function Ut(o,n,i,e,s,a){const r=p("Hero");return c(),q(r)}var Bt=v(Et,[["render",Ut]]);const Ct={components:{Icon:R,SearchInput:ee},setup(){const o=I(),n=B(),i=K();function e(s){H.push(s)}return{goto:e,route:i,pt:o,dm:n}}},te=o=>(ue("data-v-7dbe3b7d"),o=o(),_e(),o),Tt={class:"navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-box",style:{width:"auto !important"}},At=te(()=>t("div",{class:"bg-cover bg-no-repeat bg-center"},[t("img",{src:W,class:"py-2 pr-2 w-10 center"})],-1)),Mt=te(()=>t("button",{class:"text-lg font-bold"},"spotdl",-1)),Nt=[At,Mt],It={class:"hidden sm:flex px-2 mx-2 navbar-center w-96 space-x-4"},Vt={class:"navbar-end"},qt={for:"my-modal",class:"btn btn-square modal-button mx-2"},Pt=h(" \u200B "),Wt={class:"indicator"},jt={key:0,class:"indicator-item indicator-top indicator-end badge badge-secondary",style:{top:"-5px",right:"-5px"}},Ft=h(" \u200B "),Ht={class:"sm:hidden px-2 mx-2"};function Qt(o,n,i,e,s,a){const r=p("SearchInput"),l=p("Icon");return c(),d(y,null,[t("div",Tt,[t("button",{class:"px-2 mx-2 navbar-start",onClick:n[0]||(n[0]=_=>e.goto({name:"Home"}))},Nt),t("div",It,[u(r,{class:"w-full"})]),t("div",Vt,[t("label",qt,[Pt,u(l,{icon:"clarity:settings-line",class:"h-6 w-6"})]),t("div",Wt,[e.pt.downloadQueue.value.length>0?(c(),d("div",jt,m(e.pt.downloadQueue.value.length),1)):k("",!0),t("a",{class:de(["btn btn-square",e.route.name==="Download"?"btn-primary":"btn-ghost"]),onClick:n[1]||(n[1]=_=>e.goto({name:"Download"}))},[Ft,u(l,{icon:"clarity:download-cloud-line",class:"h-6 w-6"})],2)])])]),t("div",Ht,[u(r,{class:"w-full"})])],64)}var oe=v(Ct,[["render",Qt],["__scopeId","data-v-7dbe3b7d"]]);const zt={components:{Icon:R},props:["data","error"],emits:["download"],setup(o,n){const i=F(),e=I(),s=B();return{data:o.data,error:o.error,errorValue:i.errorValue,loading:i.isSearching,download:a=>n.emit("download",a),dm:s,pt:e}}},Kt={class:"min-h-screen m-2"},Gt={key:0,class:"hero min-h-screen"},Zt={key:0,class:"btn btn-sm btn-ghost loading"},Jt={key:1,class:"alert alert-error"},Xt={class:"flex-1"},Yt=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 mx-2 stroke-current"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})],-1),eo={class:"aspect-square md:max-h-fit"},to=["src"],oo={class:"card-body"},so={class:"card-title"},no={key:0,class:"badge mx-0.5 badge-error"},ao={key:0},ro=t("br",null,null,-1),lo=t("p",null,[t("br")],-1),co={class:"card-actions absolute bottom-0 right-0 m-2"},io=["href"],uo=h(" \u200B "),_o={key:0,class:"btn btn-primary btn-square"},ho=h(" \u200B "),po=["onClick"],mo=h(" \u200B ");function go(o,n,i,e,s,a){const r=p("Icon");return c(),d("div",Kt,[e.loading||e.error?(c(),d("div",Gt,[e.loading?(c(),d("button",Zt," LOADING ")):k("",!0),e.error?(c(),d("div",Jt,[t("div",Xt,[Yt,t("label",null,"Error: "+m(e.errorValue),1)])])):k("",!0)])):(c(!0),d(y,{key:1},S(e.data,(l,_)=>{var f;return c(),d("div",{key:_,class:"card md:card-side card-bordered my-2 shadow-lg card-compact bg-base-100"},[t("figure",eo,[t("img",{src:l.cover_url,class:"object-contain aspect-square md:max-h-44"},null,8,to)]),t("div",oo,[t("h2",so,[h(m(l.name)+" - "+m(l.artist)+" ",1),l.explicit?(c(),d("div",no," Explicit ")):k("",!0)]),t("h3",null,[(c(!0),d(y,null,S(l.artists,(w,Q)=>(c(),d("a",{key:Q},[Q!==0?(c(),d("a",ao," \u2022 ")):k("",!0),h(" "+m(w),1)]))),128))]),t("h3",null,m(l.album_name),1),ro,lo,t("div",co,[t("a",{class:"btn btn-ghost btn-square",href:l.url,target:"_blank"},[uo,u(r,{icon:"clarity:link-line",class:"h-6 w-6"})],8,io),((f=e.pt.getBySong(l))==null?void 0:f.isQueued())?(c(),d("button",_o,[ho,u(r,{icon:"clarity:check-line",class:"h-6 w-6"})])):(c(),d("button",{key:1,class:"btn btn-primary btn-square",onClick:w=>e.download(l)},[mo,u(r,{icon:"clarity:download-line",class:"h-6 w-6"})],8,po))])])])}),128))])}var vo=v(zt,[["render",go]]);const fo={components:{Navbar:oe,SearchList:vo},setup(){P(()=>{window.scroll(0,0)});const o=K(),n=F(),i=B();return he(()=>o.params.query,()=>{o.params.query&&n.searchFor(o.params.query)},{deep:!0}),n.searchFor(o.params.query),{sm:n,dm:i}}};function bo(o,n,i,e,s,a){const r=p("Navbar"),l=p("SearchList");return c(),d("div",null,[u(r),u(l,{data:e.sm.results,error:e.sm.error,onDownload:n[0]||(n[0]=_=>e.dm.queue(_))},null,8,["data","error"])])}var wo=v(fo,[["render",bo]]);const yo={components:{Icon:R},props:{data:Object},setup(o,n){const i=I(),e=B();function s(a){const r=document.createElement("a");r.href=a,r.download=a.split("/").pop(),document.body.appendChild(r),r.click(),document.body.removeChild(r)}return{dm:e,pt:i,download:s}}},$o={class:"min-h-screen m-2"},ko={key:0},xo=t("div",{class:"alert shadow-lg"},[t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-info flex-shrink-0 w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"No downloads are queued. Search for a song to begin.")])],-1),So=[xo],Do={key:1},Oo={class:"carousel carousel-end bg-base-200 rounded-box shadow-lg"},Lo=["src"],Ro={class:"card card-bordered my-2 shadow-lg card-compact bg-base-100"},Eo={class:"card-title"},Uo={class:"stat-figure text-primary flex space-x-2 items-center"},Bo={key:0,class:"badge badge-error gap-2"},Co={class:"badge"},To=["onClick"],Ao=h(" \u200B "),Mo=["onClick"],No=h(" \u200B "),Io={key:2,class:"btn btn-square btn-ghost loading"};function Vo(o,n,i,e,s,a){const r=p("Icon");return c(),d("div",$o,[e.pt.downloadQueue.value.length===0?(c(),d("div",ko,So)):(c(),d("div",Do,[t("div",Oo,[(c(!0),d(y,null,S(e.pt.downloadQueue.value,(l,_)=>(c(),d("div",{key:_,class:"carousel-item h-48"},[t("img",{src:l.song.cover_url},null,8,Lo)]))),128))]),t("div",Ro,[(c(!0),d(y,null,S(e.pt.downloadQueue.value,(l,_)=>(c(),d("div",{key:_,class:"card-body grid grid-rows-1"},[t("h2",Eo,m(l.song.name)+" - "+m(l.song.artist),1),t("p",null,m(l.song.album_name),1),t("div",Uo,[l.isErrored()?(c(),d("div",Bo," error ")):k("",!0),t("span",Co,m(l.message||l.web_status),1),t("button",{class:"btn btn-error btn-outline btn-square",onClick:f=>e.dm.remove(l.song)},[Ao,u(r,{icon:"clarity:trash-line",class:"h-6 w-6"})],8,To),l.isDownloaded()?(c(),d("a",{key:1,class:"btn btn-square btn-ghost",href:"javascript:;",onClick:f=>e.download(l.web_download_url),download:""},[No,u(r,{icon:"clarity:download-line",class:"h-6 w-6"})],8,Mo)):l.progress===0?(c(),d("button",Io," \u200B ")):(c(),d("div",{key:3,class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:pe(`--value: ${l.progress*100}; --size: 2.5rem`)},m(Math.round(l.progress*100))+"% ",5))])]))),128))])]))])}var qo=v(yo,[["render",Vo]]);const Po={components:{Navbar:oe,DownloadList:qo},setup(){return P(()=>{window.scroll(0,0)}),{}}};function Wo(o,n,i,e,s,a){const r=p("Navbar"),l=p("DownloadList");return c(),d("div",null,[u(r),u(l)])}var jo=v(Po,[["render",Wo]]);const Fo=[{path:"/",name:"Home",component:Bt},{path:"/search/:query",name:"Search",component:wo},{path:"/download",name:"Download",component:jo}],H=me({history:ge(),routes:Fo});const se=ve(dt);se.use(H);se.mount("#app");