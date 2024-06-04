function fetchAndDisplayArtists(){fetch("https://script.google.com/macros/s/AKfycbzGxvYyUDntyEG787jKu1EEfjffEgS6-qRKqAzmR5CWL1M7IcaaWBGjZBZ5FOO2FSE-/exec").then(e=>e.json()).then(e=>{let t=document.querySelector(".artist-verified-section");if(t.innerHTML="",e.reverse(),e.forEach((e,l)=>{let s=document.createElement("a");s.href=e.artistURL,s.classList.add("artist-link");let i=document.createElement("div");i.classList.add("artist-verified-section-inner");let r=document.createElement("div");r.classList.add("artist-verified-inner");let a=document.createElement("div");a.classList.add("artist-verified-inner-left");let o=document.createElement("span");o.classList.add("artist-verified-image");let n=document.createElement("img");n.src=e.artistImage,n.alt=e.artistName,n.title=e.artistName,o.appendChild(n);let d=document.createElement("span");d.classList.add("artist-verified-name"),d.textContent=e.artistName,a.appendChild(o),a.appendChild(d);let c=document.createElement("div");c.classList.add("artist-verified-inner-right");let y=document.createElement("span");switch(y.classList.add("artist-verified-status"),y.textContent=e.status,y.style.display="flex",e.status){case"Verified":y.classList.add("verified");break;case"In Review":y.classList.add("inreview");break;case"Not Verified":y.classList.add("notverified")}c.appendChild(y),r.appendChild(a),r.appendChild(c),i.appendChild(r),s.appendChild(i),l>=20&&(s.style.display="none"),t.appendChild(s)}),e.length>20){let l=document.createElement("div");l.classList.add("artist-full-show"),l.textContent="Show All Artist",l.style.cursor="pointer",l.style.textAlign="center",l.style.marginTop="20px",l.style.backgroundColor="#800080",l.style.color="#ffffff",l.style.padding="10px",l.style.borderRadius="5px",l.addEventListener("click",()=>{let e=t.querySelectorAll('.artist-link[style="display: none;"]');e.forEach(e=>e.style.display="block"),l.style.display="none"}),t.appendChild(l)}window.artistData=e,initializeSearchFilter(),fillRandomImages(e)}).catch(e=>console.error("Error fetching data:",e))}function fillRandomImages(e){let t=document.querySelectorAll(".right-image-hero"),l=getRandomArtists(e,4);t.forEach((e,t)=>{e.style.backgroundImage=`url(${l[t].artistImage})`})}function getRandomArtists(e,t){let l=e.sort(()=>.5-Math.random());return l.slice(0,t)}function filterArtists(e){let t=document.querySelectorAll(".artist-link"),l=0;t.forEach(t=>{let s=t.querySelector(".artist-verified-name").textContent.toLowerCase();s.includes(e)?(t.style.display="block",l++):t.style.display="none"});let s=document.querySelector(".no-artist-message");if(s&&s.remove(),e&&0===l){let i=document.createElement("div");i.textContent=`No Matching Artist Found for "${e}"`,i.classList.add("no-artist-message"),document.querySelector(".artist-verified-section").appendChild(i)}let r=document.querySelector(".artist-full-show");r&&(r.style.display=e?"none":"block"),hideShowMoreButton(),e||resetArtistDisplay()}function resetArtistDisplay(){let e=document.querySelectorAll(".artist-link");e.forEach((e,t)=>{t<20?e.style.display="block":e.style.display="none"});let t=document.querySelector(".artist-full-show");t&&(t.style.display="block")}function initializeSearchFilter(){let e=document.querySelector(".artist-search-filter input");e.addEventListener("input",function(){let e=this.value.trim().toLowerCase();filterArtists(e)})}function filterArtistsByAlphabet(e){let t=document.querySelectorAll(".artist-link"),l=!1;t.forEach(t=>{let s=t.querySelector(".artist-verified-name").textContent,i=s.charAt(0).toUpperCase();i===e?(t.style.display="block",l=!0):t.style.display="none"});let s=document.querySelector(".no-artist-message");s&&s.remove(),l||displayNoArtistMessage(e),toggleShowAllButton(!1)}function showAllArtists(){let e=document.querySelectorAll(".artist-link"),t=0;e.forEach((e,l)=>{l<20?(e.style.display="block",t++):e.style.display="none"});let l=document.querySelector(".no-artist-message");l&&l.remove(),t<e.length&&showMoreButton(20),toggleShowAllButton(!1)}function showMoreArtists(e,t){let l=document.querySelectorAll(".artist-link"),s=Math.min(e+t,l.length);for(let i=e;i<s;i++)l[i].style.display="block";if(s===l.length){let r=document.querySelector(".show-more-button");r&&(r.style.display="none")}}function showMoreButton(e){if(!document.querySelector(".show-more-button")){let t=document.createElement("div");t.textContent="Show All Artist",t.classList.add("show-more-button"),t.addEventListener("click",()=>{showMoreArtists(e,20)}),t.style.cursor="pointer",t.style.textAlign="center",t.style.marginTop="20px",t.style.backgroundColor="#800080",t.style.color="#ffffff",t.style.padding="10px",t.style.borderRadius="5px",document.querySelector(".artist-verified-section").appendChild(t)}}function toggleShowAllButton(e){let t=document.querySelector(".artist-full-show");t&&(t.style.display=e?"block":"none")}function displayNoArtistMessage(e){let t=document.createElement("div");t.textContent=`No Artist For The Selected Word (${e})`,t.classList.add("no-artist-message"),document.querySelector(".artist-verified-section").appendChild(t)}function showShowMoreButton(){let e=document.querySelector(".show-more-button");e&&(e.style.display="block")}function hideShowMoreButton(){let e=document.querySelector(".show-more-button");e&&(e.style.display="none")}document.addEventListener("click",function(e){if(e.target.classList.contains("artist-alphabet")){let t=e.target.textContent.toUpperCase();filterArtistsByAlphabet(t),hideShowMoreButton()}}),document.querySelector(".artist-show-alphabet").addEventListener("click",function(e){showAllArtists(),showShowMoreButton()}),fetchAndDisplayArtists();

const tabs=document.querySelectorAll(".scrollable-tabs-container a"),rightArrow=document.querySelector(".scrollable-tabs-container .right-arrow svg"),leftArrow=document.querySelector(".scrollable-tabs-container .left-arrow svg"),tabsList=document.querySelector(".scrollable-tabs-container .artist-filter"),leftArrowContainer=document.querySelector(".scrollable-tabs-container .left-arrow"),rightArrowContainer=document.querySelector(".scrollable-tabs-container .right-arrow"),removeAllActiveClasses=()=>{tabs.forEach(t=>{t.classList.remove("active")})};tabs.forEach(t=>{t.addEventListener("click",()=>{removeAllActiveClasses(),t.classList.add("active")})});const manageIcons=()=>{20<=tabsList.scrollLeft?leftArrowContainer.classList.add("active"):leftArrowContainer.classList.remove("active");var t=tabsList.scrollWidth-tabsList.clientWidth-20;tabsList.scrollLeft>=t?rightArrowContainer.classList.remove("active"):rightArrowContainer.classList.add("active")};rightArrow.addEventListener("click",()=>{tabsList.scrollLeft+=200,manageIcons()}),leftArrow.addEventListener("click",()=>{tabsList.scrollLeft-=200,manageIcons()}),tabsList.addEventListener("scroll",manageIcons);let dragging=!1;const drag=t=>{dragging&&(tabsList.classList.add("dragging"),tabsList.scrollLeft-=t.movementX)};tabsList.addEventListener("mousedown",()=>{dragging=!0}),tabsList.addEventListener("mousemove",drag),document.addEventListener("mouseup",()=>{dragging=!1,tabsList.classList.remove("dragging")});
