function noInternetCheck(){window.addEventListener("offline",()=>{const t=document.querySelector("#noInternet");t&&(t.innerHTML="<div class='popBo'><div class='noIntSvg'><svg class='line' viewBox='0 0 24 24'><path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55'></path><path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39'></path><path d='M10.71 5.05A16 16 0 0 1 22.58 9'></path><path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88'></path><path d='M8.53 16.11a6 6 0 0 1 6.95 0'></path><line class='svgC' x1='12' x2='12.01' y1='20' y2='20'></line><line class='svgC' x1='1' x2='23' y1='1' y2='23'></line></svg></div><div class='noIntHead txtB nWs' data-text='Oops!'></div><div class='noIntDesp txtB nWs' data-text='It seems there is something wrong with your internet connection. Please connect to the internet and start browsing again.'></div><div class='noIntButton'><a class='btn' href='/' title='Reload'><svg class='line' viewBox='0 0 24 24'><polyline points='23 4 23 10 17 10'></polyline><path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'></path></svg></a></div></div>",t.classList.remove("hidden"),document.body.classList.add("no_scroll"),toastNotif("No Internet!"))}),window.addEventListener("online",()=>{const t=document.querySelector("#noInternet");t&&(t.classList.add("hidden"),document.body.classList.remove("no_scroll"),toastNotif("Back Online!"))})}noInternetCheck();

function vlTidioSupport() {var scriptElement = document.createElement("script");scriptElement.src = "//code.tidio.co/tgcikwry6qidxzy3uj6ahq6dhm1pjdm3.js";scriptElement.async = true;scriptElement.id = "liveSupport";document.body.appendChild(scriptElement);}vlTidioSupport();
