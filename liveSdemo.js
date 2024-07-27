document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("header-search"),t=document.getElementById("forSearch"),s=document.querySelector(".iLiveSearch"),a=document.querySelector(".iLiveRecent"),i=document.querySelector(".iLiveArtist"),n=document.querySelector(".iLiveSongs");let c,o=[];t.addEventListener("focus",(async function(){e.classList.add("showLive"),s.classList.remove("hidden"),s.classList.add("active"),a.classList.remove("hidden"),a.classList.add("active"),i.classList.add("hidden"),i.classList.remove("active"),n.classList.add("hidden"),n.classList.remove("active");try{const e=await fetch("/feeds/posts/default?alt=json"),t=(await e.json()).feed.entry;a.innerHTML="",t.slice(0,5).forEach((e=>{const t=e.content.$t,s=e.link.find((e=>"alternate"===e.rel)).href,i=document.createElement("div");i.innerHTML=t;const n=i.querySelector(".music-info-fetch"),c=`<a href="${s}"><div class="iLiveItem recent"><span class="iLiveSvg"><svg class="lineN" viewBox="0 0 512 512"><path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"></path></svg></span><span class="iLiveTxt recent"><bdi class="iLiveTitle recent">${n.getAttribute("data-song-name")}</bdi><bdi class="iLiveLanguage recent">${n.getAttribute("data-language")}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${n.getAttribute("data-year")}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${n.getAttribute("data-movie")||"Album Song"}</bdi></span></div></a>`;a.insertAdjacentHTML("beforeend",c)}))}catch(e){console.error("Error fetching recent posts:",e)}})),t.addEventListener("input",(async function(){const e=t.value.toLowerCase().trim();if(0!==e.length)i.classList.remove("hidden"),i.classList.add("active"),n.classList.remove("hidden"),n.classList.add("active"),a.classList.add("hidden"),a.classList.remove("active"),i.innerHTML="<div class='loader-wrap'><div class='loaderS'></div><span class='txtB' data-text='Loading...'></span></div>",n.innerHTML="<div class='loader-wrap'><div class='loaderS'></div><span class='txtB' data-text='Loading...'></span></div>",clearTimeout(c),c=setTimeout((async function(){0===o.length&&await async function(){try{const e=await fetch("/feeds/posts/default?max-results=99999999&alt=json"),t=await e.json();o=t.feed.entry}catch(e){console.error("Error fetching data:",e)}}();const t=new Set,s=[],c=[],r=e.toLowerCase();o.forEach((a=>{const i=a.content.$t,n=a.link.find((e=>"alternate"===e.rel)).href,o=document.createElement("div");o.innerHTML=i;const d=o.querySelector(".music-info-fetch"),l=d.getAttribute("data-artist"),v=d.getAttribute("data-composer"),L=d.getAttribute("data-lyricist"),g=d.getAttribute("data-song-name"),u=d.getAttribute("data-language"),h=d.getAttribute("data-year"),m=d.getAttribute("data-cast"),f=d.getAttribute("data-movie")||"Album Song";function p(e,t){if(!e)return!1;return e.toLowerCase().split(",").map((e=>e.trim())).some((e=>e.startsWith(t)))}[l,v,L].filter(Boolean).join(", ").split(",").map((e=>e.trim())).forEach((a=>{a.toLowerCase().startsWith(e)&&!t.has(a.toLowerCase())&&(t.add(a.toLowerCase()),s.push({artistTitle:a,artistUrl:`/search/label/${encodeURIComponent(a)}`}))})),(g&&g.toLowerCase().startsWith(r)||f&&f.toLowerCase().startsWith(r)||p(l,r)||p(v,r)||p(L,r)||p(m,r))&&c.push({postUrl:n,songTitle:g,songYear:h,songMovie:f,songLanguage:u})})),i.innerHTML="",n.innerHTML="",s.slice(0,3).forEach((e=>{const t=`<a href="${e.artistUrl}"><div class="iLiveItem artist"><span class="iLiveSvg"><svg class="lineN" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"></path></svg></span><span class="iLiveTitle artist">${e.artistTitle}</span></div></a>`;i.insertAdjacentHTML("beforeend",t)})),c.slice(0,5).forEach((e=>{const t=`<a href="${e.postUrl}"><div class="iLiveItem songs"><span class="iLiveSvg"><svg class="lineN" viewBox="0 0 512 512"><path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"></path></svg></span><span class="iLiveTxt songs"><bdi class="iLiveTitle songs">${e.songTitle}</bdi><bdi class="iLiveLanguage songs">${e.songLanguage}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${e.songYear}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${e.songMovie}</bdi></span></div></a>`;n.insertAdjacentHTML("beforeend",t)})),0===s.length&&0===c.length?(document.querySelector(".iLiveSIn .iLiveNoItems").classList.remove("hidden"),a.classList.remove("hidden"),a.classList.add("active"),i.classList.add("hidden"),i.classList.remove("active"),n.classList.add("hidden"),n.classList.remove("active")):(document.querySelector(".iLiveSIn .iLiveNoItems").classList.add("hidden"),0===s.length&&(i.classList.add("hidden"),i.classList.remove("active")),0===c.length&&(n.classList.add("hidden"),n.classList.remove("active")),a.classList.add("hidden"),a.classList.remove("active"))}),300);else{i.classList.add("hidden"),i.classList.remove("active"),n.classList.add("hidden"),n.classList.remove("active"),a.classList.remove("hidden"),a.classList.add("active");const e="/feeds/posts/default?alt=json";try{const t=await fetch(e),s=(await t.json()).feed.entry;a.innerHTML="",s.slice(0,5).forEach((e=>{const t=e.content.$t,s=e.link.find((e=>"alternate"===e.rel)).href,i=document.createElement("div");i.innerHTML=t;const n=i.querySelector(".music-info-fetch"),c=`<a href="${s}"><div class="iLiveItem recent"><span class="iLiveSvg"><svg class="lineN" viewBox="0 0 512 512"><path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"></path></svg></span><span class="iLiveTxt recent"><bdi class="iLiveTitle recent">${n.getAttribute("data-song-name")}</bdi><bdi class="iLiveLanguage recent">${n.getAttribute("data-language")}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${n.getAttribute("data-year")}<svg fill="none" viewBox="0 0 15 15"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>${n.getAttribute("data-movie")||"Album Song"}</bdi></span></div></a>`;a.insertAdjacentHTML("beforeend",c)}))}catch(e){console.error("Error fetching recent posts:",e)}document.querySelector(".iLiveSIn .iLiveNoItems")&&document.querySelector(".iLiveSIn .iLiveNoItems").classList.add("hidden")}})),t.addEventListener("blur",(function(){setTimeout((()=>{e.classList.remove("showLive"),s.classList.add("hidden"),s.classList.remove("active")}),100)})),document.addEventListener("mousedown",(function(e){s.contains(e.target)&&e.preventDefault()})),document.addEventListener("click",(function(a){s.contains(a.target)||a.target===t||(e.classList.remove("showLive"),s.classList.add("hidden"),s.classList.remove("active"))}))}));
