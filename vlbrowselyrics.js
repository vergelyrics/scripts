function disableLinkClick(){const n=document.getElementById("bLinkD");n&&n.addEventListener("click",function(n){n.preventDefault()})}disableLinkClick();

function browseSongLyrics(){const e=document.getElementById("browse-open"),t=document.getElementById("browse-tab"),s=document.querySelector(".bPst"),n=document.querySelector(".ajaxSongs.items"),l=document.querySelector(".ajaxBrowseH"),i=document.querySelectorAll(".switchL.txtB");let a=0;function o(e){l&&l.setAttribute("data-text",null===e||"User"===e?"New Songs":`New ${e} Songs`)}function c(){n.innerHTML="<div class='loader-wrap'><div class='loaderS'></div><span class='txtB' data-text='Loading...'></span></div>"}function r(e){return e.replace(/.*?:\/\//g,"//").replace(/\/[w,s][0-9][0-9].*\//g,"/w300-h300-c-rw/").replace(/=s72-[w,c].*/g,"=w300-h300-c-rw")}function d(){fetch("/feeds/posts/default?alt=json&max-results=50&orderby=published").then(e=>e.json()).then(e=>{const t=e.feed.entry||[];if(t.length>0){const e=function(e){let t,s,n=e.length;for(;n;)s=Math.floor(Math.random()*n--),t=e[n],e[n]=e[s],e[s]=t;return e}(t).slice(0,20);n.innerHTML="",e.forEach(e=>{const t=e.link.find(e=>"alternate"===e.rel).href,s=e.content.$t.match(/<span class="snipHome">(.*?)<\/span>/),l=s?s[1]:"Song";let i=e.media$thumbnail?e.media$thumbnail.url:"",a=e.title.$t;a=a.replace(/"([^"]*)"/g,"“$1”");const o=(i=r(i))?`<img alt="${a}" class="img" src="${i}" loading="lazy"/>`:`<img alt="${a}" class="img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMo4pyZv7iZwOoHK3gTWIh0xhMaLJ-isF7Hm8wCAbO_oTrj3eBepKvepRqfonGAUoO4gSfOfYfw4MvVhyQBtP_U7OCuGApB3EWSCknk_bL3A6UmkSm3bTejRod2jNZCpYZ_eK1sBelrNlcsxByUM17kyqRFUa1dGtNndjhhqjsh0jZ28kKA9AtS_fTBoA/s300/defaultSong.jpg" loading="lazy"/>`,c=document.createElement("article");c.className="ipst",c.innerHTML=`<div class="ipstI"><a title="${a}" href="${t}">${o}</a><div class="ipstBk"><span class="btn is-small is-primary"><svg fill="currentColor" viewBox="0 0 512 512"><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"></path></svg></span></div></div><div class="ipstBD"><h3 class="ipstT"><a href="${t}" title="${a}">${a}</a></h3><div class="snippet">${l}</div></div>`,n.appendChild(c)})}else n.innerHTML="No Songs Available"}).catch(e=>{console.error("Error fetching songs:",e),n.innerHTML="Error fetching songs."})}function g(e){fetch(e).then(e=>e.json()).then(e=>{const t=e.feed.entry||[];n.innerHTML="",t.length>0?t.forEach(e=>{const t=e.link.find(e=>"alternate"===e.rel).href,s=e.content.$t.match(/<span class="snipHome">(.*?)<\/span>/),l=s?s[1]:"Song";let i=e.media$thumbnail?e.media$thumbnail.url:"",a=e.title.$t;a=a.replace(/"([^"]*)"/g,"“$1”");const o=(i=r(i))?`<img alt="${a}" class="img" src="${i}" loading="lazy"/>`:`<img alt="${a}" class="img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMo4pyZv7iZwOoHK3gTWIh0xhMaLJ-isF7Hm8wCAbO_oTrj3eBepKvepRqfonGAUoO4gSfOfYfw4MvVhyQBtP_U7OCuGApB3EWSCknk_bL3A6UmkSm3bTejRod2jNZCpYZ_eK1sBelrNlcsxByUM17kyqRFUa1dGtNndjhhqjsh0jZ28kKA9AtS_fTBoA/s300/defaultSong.jpg" loading="lazy"/>`,c=document.createElement("article");c.className="ipst",c.innerHTML=`<div class="ipstI"><a title="${a}" href="${t}">${o}</a><div class="ipstBk"><span class="btn is-small is-primary"><svg fill="currentColor" viewBox="0 0 512 512"><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"></path></svg></span></div></div><div class="ipstBD"><h3 class="ipstT"><a href="${t}" title="${a}">${a}</a></h3><div class="snippet">${l}</div></div>`,n.appendChild(c)}):n.innerHTML="No Songs Added Yet"}).catch(e=>{console.error("Error fetching songs:",e),n.innerHTML="Error fetching songs."})}function h(){if(++a%2==1){window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelectorAll(".pvl");e.length>0?e.forEach(e=>e.classList.add("hidden")):s&&s.classList.add("hidden"),t&&t.classList.remove("hidden");const n=document.querySelector(".switchL.txtB.active");if(n&&"User"!==n.getAttribute("switch-song-label")){const e=n.getAttribute("switch-song-label");o(e),c(),g(`/feeds/posts/default/-/${e}?alt=json&max-results=20&orderby=published`)}else o(null),c(),d();t.addEventListener("click",function(e){const t=e.target;if(t.classList.contains("switchL"))if(i.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.classList.contains("active")&&"User"===t.getAttribute("switch-song-label"))o(null),c(),d();else{const e=t.getAttribute("switch-song-label");o(e),c(),g(`/feeds/posts/default/-/${e}?alt=json&max-results=20&orderby=published`)}})}else{const e=document.querySelectorAll(".pvl");e.length>0?e.forEach(e=>e.classList.remove("hidden")):s&&s.classList.remove("hidden"),t&&t.classList.add("hidden"),n&&(n.innerHTML="")}}e.addEventListener("click",function(){h(),e.classList.toggle("is-active")})}browseSongLyrics();

function setupArrowScroll(){const e=document.querySelector(".lArrow"),o=document.querySelector(".rArrow"),t=document.querySelector(".iBrowseLayout");function l(){const l=t.scrollLeft,r=t.scrollWidth,c=t.clientWidth,n=0===l;e.style.display=n?"none":"flex";const s=l+c>=r-1;o.style.display=r>c&&!s?"flex":"none"}e.addEventListener("click",function(){t.scrollBy({left:-200,behavior:"smooth"}),l()}),o.addEventListener("click",function(){t.scrollBy({left:200,behavior:"smooth"}),l()}),l(),o.style.display="flex",t.addEventListener("scroll",l)}setupArrowScroll();