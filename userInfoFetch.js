const utils={};async function updateUserInfo(){try{const t=await utils.getIp(!0);let e={};if("string"==typeof t.location)try{e=JSON.parse(t.location)}catch(t){console.error("Error parsing location data:",t),e={}}else e=t.location||{};const{userCCode:o,userCountry:n,userRegion:r,userCity:c}={userCCode:document.querySelector(".userCCode"),userCountry:document.querySelector(".userCountry"),userRegion:document.querySelector(".userRegion"),userCity:document.querySelector(".userCity")};o.textContent=e.cca2||"No Information",n.textContent=t.country||"No Information",r.textContent=e.region||"No Information",c.textContent=e.city||"No Information"}catch(t){console.error("Error updating user info:",t),document.querySelector(".userCCode").textContent="No Information",document.querySelector(".userCountry").textContent="No Information",document.querySelector(".userRegion").textContent="No Information",document.querySelector(".userCity").textContent="No Information"}}!function(t,e){const o=async()=>{if(n.country||(n.country=await fetch(n.json.country).then((t=>t.json()))),!n.locations){const t=await fetch(n.json.locations).then((t=>t.json()));n.locations=Array.isArray(t)?t:[]}return{country:n.country,locations:n.locations}},n=async t=>{if(!0===t&&n.last)return n.last;try{const t=await fetch(n.trace).then((t=>t.text())),e=n.map,o=n.exclude,r=t.trim().split("\n").reduce(((t,e)=>{const[o,n]=e.split("=").map((t=>t.trim()));return o&&(t[o]="ts"===o?1e3*+n:n),t}),{});r.location=await n.getLocation(r.colo),r.country=await n.getCountry(r.loc);const c=Object.keys(r).reduce(((t,n)=>{const c=(n in e?e[n]:n)||null;return c&&!o.includes(c)&&Object.defineProperty(t,c,{value:r[n]}),t}),{});return n.last=c,c}catch(t){throw console.error("Error processing trace data:",t),t}};Object.assign(n,{trace:"https://www.cloudflare.com/cdn-cgi/trace",json:{locations:"https://raw.githubusercontent.com/Netrvin/cloudflare-colo-list/main/locations.json",country:"https://raw.githubusercontent.com/Netrvin/cloudflare-colo-list/main/country.json"},map:{ts:"timestamp",visit_scheme:"visitScheme",uag:"userAgent"},exclude:["h"]},{locations:null,country:null,last:null}),Object.defineProperties(n,{getList:{value:o},getCountry:{value:async t=>{if("string"==typeof t&&t.trim()){const{country:e}=await o();if("string"==typeof e[t])return e[t]}return null}},getLocation:{value:async t=>{if("string"==typeof t&&t.trim()){const{locations:e}=await o();for(const o of e)if(o.iata===t)return o}return null}}}),Object.defineProperty(t,"getIp",{value:n})}(utils),document.addEventListener("DOMContentLoaded",updateUserInfo);