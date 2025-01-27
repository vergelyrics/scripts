function disableCopyVL() {const isDesktop = !/Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if (!isDesktop) return;function disableSelection() {document.querySelectorAll(".lyricsContainer, .lyricsContain").forEach((el) => {el.style.cssText = "-webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; user-select: none;";});}function handleContextMenu(event) {const target = event.target.closest(".lyricsContainer, .lyricsContain");if (target) {debugger;const originalHTML = target.innerHTML;localStorage.setItem("temp_lyrics_data", originalHTML);target.innerHTML = `<div class="notifBlock"><svg viewBox="0 0 24 24"><path d="M15.728 14.443a.91.91 0 0 1-1.286 1.286 3.433 3.433 0 0 0-2.443-1.012c-.923 0-1.79.359-2.443 1.012a.909.909 0 1 1-1.286-1.286 5.237 5.237 0 0 1 3.728-1.544 5.234 5.234 0 0 1 3.73 1.544zm-6.75-3.526c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.222 1.222 0 0 0-.857-.355c-.319 0-.631.13-.857.355-.225.226-.355.539-.355.857s.13.632.355.857c.225.225.538.355.857.355s.632-.129.857-.355zm6.901-2.069c-.319 0-.631.13-.857.355-.226.226-.355.538-.355.857s.129.632.355.857c.226.225.538.355.857.355s.632-.13.857-.355c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.224 1.224 0 0 0-.857-.355zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path></svg><div class="blockT">Unfortunately, suspicious activity has been detected. The lyrics are protected from copying through inspect elements. To restore the lyrics, click anywhere within the window. If they do not restore, please refresh the page...</div></div>`;const observer = new MutationObserver((mutationsList, observer) => {mutationsList.forEach((mutation) => {if (mutation.type === 'childList' && mutation.target === target && mutation.oldValue === originalHTML) {observer.disconnect();}});});observer.observe(target, {childList: true,subtree: true,characterData: true,attributes: true,attributeOldValue: true,});const onCloseContextMenu = () => {target.innerHTML = originalHTML;window.removeEventListener("click", onCloseContextMenu);};window.addEventListener("click", onCloseContextMenu);}}setInterval(disableSelection, 100);document.addEventListener("contextmenu", handleContextMenu);}disableCopyVL();

function handleCopyProtection(){document.querySelectorAll(".lyricsContainer, .lyricsContain").forEach(e=>{e.addEventListener("copy",e=>{if(localStorage.getItem("copyAllowed"))return;e.preventDefault();const t=document.getElementById("fixedNotif");if(t){t.innerHTML="",t.insertAdjacentHTML("beforeend",'<div class="fxPu noteCopy" id="antiNote"><div class="fxPuW"><div class="fxPuC"><div class="fxPuS"><svg class="line" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line class="svgC" x1="12" x2="12" y1="8" y2="12"></line><line class="svgC" x1="12" x2="12.01" y1="16" y2="16"></line></svg></div><div class="fxPuH">Alert user!</div><div class="fxPuD">Our lyrics are for reading only, not copying. They are copyrighted by the label companies*. Creators may use them with proper credit.<br>Unauthorized reposting will lead to legal action or DMCA strikes without prior notice.<br><span class="fcMT"><b>After closing this notice, you can copy the lyrics, but some lines are protected and cannot be copied.</b></span></div><div class="fxPuCB"><button id="clsNot" class="btn" aria-label="Ok Button" title="Close Notice">Ok, Got it!</button></div></div></div></div>'),document.body.classList.add("no_scroll");const e=document.getElementById("clsNot");e&&e.addEventListener("click",()=>{const e=document.getElementById("antiNote");e&&e.remove(),document.body.classList.remove("no_scroll"),localStorage.setItem("copyAllowed","yes")})}})}),window.addEventListener("beforeunload",()=>{localStorage.removeItem("copyAllowed")})}handleCopyProtection();
