function processAboutSongVL(e,t,n,a){const l=e.querySelector("p").textContent,r=l.match(/from (.*?) film/i),s=r?r[1].trim():null;if(!s)return;const o=a.find(e=>l.includes(e))||"";fetch(`/feeds/posts/default?q=${o?`${s}+${o}`:s}&max-results=21&alt=json`).then(e=>e.json()).then(e=>{const n=e.feed.entry||[];if(0===n.length)return;const a=document.querySelector(".lyricsS"),l=a?a.id.match(/SongID-(\d+)/):null,r=l?l[1]:null,c=n.filter(e=>{const t=e.id.$t.match(/post-(\d+)/),n=t?t[1]:null;return r!==n});if(0===c.length)return;for(let e=c.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[c[e],c[t]]=[c[t],c[e]]}const i=document.createElement("div");i.className="wDH",i.innerHTML=`<span class="wT b" data-text="More from ${s} (${o})"></span>`,t.classList.remove("hidden"),t.innerHTML="",t.insertAdjacentElement("beforebegin",i);const d=document.createElement("ul");d.className="res-list",c.forEach(e=>{const t=e.title.$t.replace(/"([^"]*)"/g,"&#8220;$1&#8221;"),n=(e.media$thumbnail?e.media$thumbnail.url:"fallback_image_url").replace(/.*?:\/\//g,"//").replace(/\/[w,s][0-9][0-9].*\//g,"/w300-h300-c-rw/").replace(/=s72-[w,c].*/g,"=w300-h300-c-rw"),a=e.link.find(e=>"alternate"===e.rel).href,l=document.createElement("li");l.className="rel",l.innerHTML=`<div class="rel-thumbnail"><img src="${n}" width="100%" height="100%" loading="lazy" alt="${t}"></div><div class="rel-body"><span class="rel-snip">Song</span><h3 class="rel-title">${t}</h3></div><div class="rel-play"><svg viewBox="0 0 512 512"><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"></path></svg></div><a href="${a}" aria-label="${t}">Read now</a>`,d.appendChild(l)});const m=d.querySelectorAll("li");if(m.length>6){m.forEach((e,t)=>{t>=6&&e.classList.add("hidden")});const e=document.createElement("button");e.id="load-relM",e.classList.add("btn"),e.textContent="Load more",e.addEventListener("click",()=>{m.forEach(e=>{e.classList.remove("hidden")}),e.remove()}),t.appendChild(d),d.insertAdjacentElement("afterend",e)}else t.appendChild(d)}).catch(console.error)}const aboutSongVL=document.querySelector(".aboutSongVL"),moreMovieP=document.querySelector(".moreMovieP"),languageArray=["Telugu","Hindi","Tamil","Punjabi","Odia","Malayalam","Kannada","Assamese","Bengali","English"];processAboutSongVL(aboutSongVL,moreMovieP,null,languageArray);
