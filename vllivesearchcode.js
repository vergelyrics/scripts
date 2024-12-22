/*!
* https://www.vergelyrics.com/
* Copyright © VergeLyrics
*
* Live Search V2.5
* 
* Not To Be Used By Any Third Party
*-----------------------------------------------*/
function handleRecentPosts(){const e=document.getElementById("rcntList"),t=document.getElementById("search_form");function i(){const t=e.getBoundingClientRect(),i=t.width.toFixed(2),n=(window.innerHeight-t.top-50).toFixed(2);return{color:(d="color",window.getComputedStyle(document.body).getPropertyValue(d)),width:i+"px",maxHeight:n+"px",overflow:"auto"};var d}function n(){e.innerHTML='<div class="iLiveSIn recent" style="background-color: rgba(0,0,0,0);"><div><div class="iLiveSIn-title">Recently added</div><div class="iLiveSIn-results"><div class=\'loader-wrap\'><div class=\'loaderS\'></div><span>Loading...</span></div></div></div></div>',fetch("/feeds/posts/default?alt=json&max-results=10&orderby=published").then(e=>e.json()).then(t=>{const n=t.feed.entry;if(n&&n.length>0){const t=i(),d=`background-color: rgba(0,0,0,0); color: ${t.color}; width: ${t.width}; max-height: ${t.maxHeight}; overflow: ${t.overflow};`;let s="";n.forEach(e=>{const t=e.title.$t,i=e.link.find(e=>"alternate"===e.rel).href,n=e.media$thumbnail?e.media$thumbnail.url:"";s+=`<div class="iLiveItem recent"><div class="iLiveSIn-image recent"><img alt="Poster Image" loading="lazy" src="${n}" style="display:block;width:45px;height:45px;"/></div><div class="iLiveSIn-title iLiveTitle"><a title="${t}" href="${i}"><span>${t}</span></a></div></div>`});const o=`<div class="iLiveSIn recent" style="${d}"><div><div class="iLiveSIn-title">Recently added</div><div class="iLiveSIn-results">${s}</div></div></div>`;e.innerHTML=o}else e.innerHTML="<p>No recent posts available.</p>"}).catch(t=>{console.error("Error fetching recent posts:",t),e.innerHTML="<p>Sorry, something went wrong. Please try again later.</p>"})}function d(t){const i=t.target;document.body.classList.add("no_scroll"),i.value.trim()?(e.innerHTML="",e.classList.add("hidden")):(e.classList.remove("hidden"),n())}t.addEventListener("focus",d),t.addEventListener("input",d),document.addEventListener("click",function(i){e.contains(i.target)||t.contains(i.target)||(e.classList.add("hidden"),document.body.classList.remove("no_scroll"))}),n()}handleRecentPosts();
window.q2o=function(e,t){function r(e){return decodeURIComponent(e)}function n(e){return void 0!==e}function i(e){return"string"==typeof e}function o(e){if(i(e)){if("true"===e)return!0;if("false"===e)return!1;if("null"===e)return null;if("'"===e.slice(0,1)&&"'"===e.slice(-1))return e.slice(1,-1);if(/^-?(\d*\.)?\d+$/.test(e))return+e;if(function(e){return!(!i(e)||""===e.trim())&&('""'===e||"[]"===e||"{}"===e||'"'===e[0]&&'"'===e.slice(-1)||"["===e[0]&&"]"===e.slice(-1)||"{"===e[0]&&"}"===e.slice(-1))}(e))try{return JSON.parse(e)}catch(e){}}return e}var a={},s=e.replace(/^.*?\?/,"");return""===s||s.split(/&(?:amp;)?/).forEach((function(e){var i=e.split("="),s=r(i[0]),c=!n(i[1])||r(i[1]);c=!n(t)||t?o(c):c,"]"===s.slice(-1)?function(e,t,r){for(var n,i=t.split("["),o=0,a=i.length;a-1>o;++o)e=e[n=i[o].replace(/\]$/,"")]||(e[n]={});e[i[o].replace(/\]$/,"")]=r}(a,s,c):a[s]=c})),a},function(e,t){function r(e){return encodeURIComponent(e)}function n(e){return void 0!==e}function i(e){return"number"==typeof e||/^-?(\d*\.)?\d+$/.test(e)}function o(e){return null!==e&&"object"==typeof e}function a(e,t){for(var r in t=t||{},e)n(t[r])?o(e[r])&&o(t[r])&&(t[r]=a(e[r],t[r])):t[r]=e[r];return t}function s(e,t,r){e.addEventListener(t,r,!1)}function c(e,r,i){if(e=t.createElement(e),n(r)&&""!==r&&(e.innerHTML=r),o(i))for(var a in i)!1!==i[a]&&e.setAttribute(a,i[a]);return e}function l(e,t){t=t.split(/\s+/);for(var r;r=t.shift();)e.classList.add(r)}function u(e,t){t=t.split(/\s+/);for(var r;r=t.shift();)e.classList.remove(r)}function d(e,t,r){t&&e.insertBefore(t,r)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t){var n,i=[];for(n in e)i.push(r(n)+"="+r(e[n]));return"?"+i.join(t||"&")}function h(e,t){return e=(e+"").split(/[?&#]/)[0].replace(/\/+$/,""),n(t)&&(e=e.replace(/\.[\w-]+$/,t?"."+t:"")),e}function v(e){return i(e)?("file:"===N.protocol?"https:":"")+"//www.blogger.com/feeds/"+e+"/posts/summary":h(e)+"/feeds/posts/summary"}function m(e,t,r){var n=/\.css$/i.test(h(e)),i=c(n?"link":"script","",a(n?{href:e,rel:"stylesheet"}:{src:e},r));return i.readyState?i.onreadystatechange=function(){("loaded"===i.readyState||"complete"===i.readyState)&&(i.onreadystatechange=null,t&&t(i))}:t&&s(i,"load",t),d(j,i,j.firstChild),i}function y(e,t,r){(r=r||[]).unshift(t),"function"==typeof U&&U.apply(e,r)}function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function x(e){if(!E)return e;var t=E.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\\\$&");return t=t.replace(/\s+/g,"\\s+"),t=RegExp(t,"i"),e.replace(t,"<mark>$&</mark>")}function k(t){return e.getComputedStyle(G).getPropertyValue(t)}function w(t){if(!B.container&&K.parentNode){var r=R.getBoundingClientRect(),n=r.top,i=r.left,o=r.width,a=r.height;l(K,D+"-float"),K.style.cssText="background-color:"+k("background-color")+";color:"+k("color")+";width:"+o+"px;max-height:"+(e.innerHeight-n-a)+"px;overflow:auto;",y(K,t&&t.type||"fit",[r])}}function L(e,t){var r=M[e][t],n=K.children[0],i=1===I?"empty":"end";d(n,W),r[0]?(Z.style.display=I>1?"":"none",ee.style.display=F>r[0]?"none":"",X.innerHTML=r[1],d(n,X)):(n.innerHTML='<p class="'+D+"-results-"+i+'">'+V[i].replace("%s%",g(E))+"</p>",ee.style.display="none"),d(n,Y),d(G,K),w(),f(Q)}function b(e){e&&e.preventDefault()}function q(){var e,t=this.q;t=t&&t.value,W.innerHTML=V.title.replace("%s%",g(t)),K.children[0].innerHTML="",t?(t=t.toLowerCase(),(e=!(!M[t]||!M[t][I]))?L(t,I):function(e,t){E=e,d(K.children[0],te),d(G,K),w(),f(Q);var r=K.parentNode;l(r,D+"-loading"),m(v(z)+p(a(B.query,{callback:"_"+H,"max-results":F,q:e,"start-index":t})),(function(){u(r,D+"-loading"),n(M[e])||(M[e]={});var i=X.innerHTML;M[e][t]=[X.children.length,i],L(e,t)}))}(t,I),y(R,"search",[t,I,e,K])):(d(G,Q),f(K))}function $(t){var r=this;t.key&&"Enter"===t.key||t.keyCode&&13===t.keyCode||e.setTimeout((function(){ae?(oe&&e.clearTimeout(oe),oe=e.setTimeout((function(){q.call(R)}),i(ae)?+ae:500)):""===r.value&&(d(G,Q),f(K))}),1)}var S=e.q2o,T=t.currentScript,N=e.location,C=e.localStorage,E="",I=1,M={},H=Date.now(),_={i:H,direction:"ltr",url:N.protocol+"//"+N.host,name:"iLiveSIn",css:0,id:"7214744216558602507",ad:!0,live:!0,source:'form[action$="/search"]',container:0,excerpt:0,image:!0,target:0,chunk:12,text:{title:"Search results for query <em>%s%</em>",loading:"<div class='loader-wrap'><div class='loaderS'></div><span>Loading...</span></div>",previous:"Previous",next:"Next",empty:"No results for query <em>%s%</em>.",end:"No more results for query <em>%s%</em>."},query:{alt:"json",orderby:"updated"}},j=t.head,B=a(_,S(T.src)),R=t.querySelector(B.source);if(R){var P=B.i,z=B.id||h(B.url),D=B.name,O=B.ad,U=B.e;U=U&&e[U],!0===O&&(O=3);var A=S(N.search);n(A[P])&&(delete A[P].url,B=a(B,A[P]));var J,V=B.text,F=B.chunk,G=t.getElementById("srchList") || B.container&&t.querySelector(B.container)||t.body,K=c("div","<div></div>",{class:D+" "+B.direction,id:D+":"+P}),Q=c("div"),W=c("div","",{class:D+"-title"}),X=c("div","",{class:D+"-results",id:D+"-results:"+P,start:I}),Y=c("nav","",{class:D+"-pager",id:D+"-pager:"+P}),Z=c("a",V.previous,{class:D+"-previous",href:"",rel:"prev"}),ee=c("a",V.next,{class:D+"-next",href:"",rel:"next"}),te=c("p",V.loading,{class:D+"-loading"});s(e,"scroll",w),s(e,"resize",w),e["_"+H]=function(e){var n,o,h,g=(e=e.feed||{}).entry||[],k=g.length,w=B.target,L=B.image,b=B.excerpt,q="has-title has-url";for(L&&(q+=" has-image"),b&&(q+=" has-excerpt"),l(K,q),J=function(e){if(e){var t=(e.link.find((function(e){return"alternate"===e.rel}))||{}).href;if(str="",t){if(L){var r,n,o,a="media$thumbnail"in e;!0===L&&(L=45),i(L)?(r=n=L+"px",L="s"+L+"-c"):(o=/^s(\d+)(\-[cp])?$/.exec(L))?(r=o[1]+"px",n=o[2]?o[1]+"px":"auto"):(o=/^w(\d+)\-h(\d+)(\-[cp])?$/.exec(L))&&(r=o[1]+"px",n=o[2]+"px"),str+='<div class="'+D+"-image "+(a?"loaded":"no-image")+'">',str+=a?'<img alt="Poster Image" src="'+e.media$thumbnail.url.replace(/\/s\d+(\-c)?\//g,"/"+L+"/")+'" loading="lazy" style="display:block;width:'+r+";height:"+n+';">':'<span class="img" style="display:block;width:'+r+";height:"+n+';">',str+="</div>"}if(str+='<div class="'+D+'-title iLiveTitle"><a href="'+t+'"'+(w?' target="'+w+'"':"")+"><span>"+x(e.title.$t)+"</span></a></div>",b){var s=e.summary.$t.replace(/<.*?>/g,"").replace(/[<>]/g,"").trim(),l=s.length;!0===b&&(b=200),str+='<p class="'+D+"-excerpt"+(l?"":" no-excerpt")+'">'+x(s.slice(0,b))+(l>b?"&hellip;":"")+"</p>"}return c("div",str,{class:"iLiveItem"})}}},X.innerHTML="",n=0;k>n;++n)d(X,J(g[n]));if(f(te),Z.style.display=I>1?"":"none",ee.style.display=F>k?"none":"",d(Y,Z),d(Y,t.createTextNode(" ")),d(Y,ee),d(h=K.children[0],W),d(h,X),d(h,Y),L){var $=X.getElementsByTagName("img"),S=function(){l(this.parentNode,"error"),y(this,"error.asset",[this.src])},T=function(){u(this.parentNode,"loading"),y(this,"load.asset",[this.src])};for(n=0,o=$.length;o>n;++n)s($[n],"error",S),s($[n],"load",T)}(function(){if(!1!==O){var e=+(C.getItem(D)||-1);if(e>O)return C.setItem(D,0),!0;C.setItem(D,++e)}return!1})()&&m(v("7214744216558602507")+p(a(B.query,{callback:"_"+H+"_","max-results":21,orderby:"updated"}))+"&q="+r(E)),y(K,"load",[e,E,I])},e["_"+H+"_"]=function(e){var t=(e=e.feed||{}).entry||[];t=t[Math.floor(Math.random()*t.length)],(t=J(t))&&(l(t,"ad"),d(X,t,X.firstChild)),y(t,"load.ad",[e])},T.id||(T.id=D+"-js"),l(T,D+"-js");var re=B.container,ne=B.css;if(ne&&!t.getElementById(D+"-css")&&m(function(e){return"string"==typeof e}(ne)?ne:h(T.src,"css"),(function(){y(this,"load.asset",[this.href])}),{class:D+"-css",id:D+"-css"}),re&&(re=t.querySelector(re))){for(var ie;ie=re.firstChild;)d(Q,ie);d(re,Q)}var oe,ae=B.live;s(R,"submit",(function(t){X.start=I=1,oe&&e.clearTimeout(oe),q.call(this),b(t)})),["cut","input","keydown","paste"].forEach((function(e){s(R.q,e,$)})),s(Z,"click",(function(e){X.start=I-=F,q.call(R),b(e)})),s(ee,"click",(function(e){X.start=I+=F,q.call(R),b(e)})),y(R,"ready",[B,K])}}(window,document),function(e,t){const r=t.querySelector(".shI");function n(e){r.addEventListener("input",(function(){!function(e,t){e.trim(),t&&t.remove()}(r.value,e)})),t.addEventListener("click",(function(t){e.contains(t.target)||r.contains(t.target)||e.remove()})),e.addEventListener("click",(function(e){e.stopPropagation()}))}const i=new MutationObserver((e=>{for(const r of e)if("childList"===r.type){const e=t.querySelector(".iLiveSIn-float");e&&(n(e),i.disconnect())}}));i.observe(t.body,{childList:!0,subtree:!0})}(window,document);