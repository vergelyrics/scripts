function disableSelection(){document.querySelectorAll(".lyricsContainer, .lyricsContain").forEach((e=>{e.style.userSelect="none",e.style.webkitUserSelect="none",e.style.msUserSelect="none",e.style.mozUserSelect="none",e.addEventListener("copy",(function(e){return e.preventDefault(),toastNotif("Copying disabled!"),!1})),e.addEventListener("contextmenu",(function(e){return e.preventDefault(),toastNotif("Content protected!"),!1})),e.addEventListener("dragstart",(function(e){return e.preventDefault(),!1}))})),document.addEventListener("copy",(function(e){const t=window.getSelection(),n=t.anchorNode?.parentElement;n&&(n.closest(".lyricsContainer")||n.closest(".lyricsContain"))&&(e.preventDefault(),navigator.clipboard.writeText(""))}))}disableSelection();

(function (document, window) {var a, c = document.createElement("script"), f = window.frameElement;c.id = "CleverCoreLoader91125";c.src = "https://scripts.cleverwebserver.com/836bce4e664c2c7e0ebd5d47ba590ecc.js";c.async = !0;c.type = "text/javascript";c.setAttribute("data-target", window.name || (f && f.getAttribute("id")));c.setAttribute("data-callback", "put-your-callback-function-here");c.setAttribute("data-callback-url-click", "put-your-click-macro-here");c.setAttribute("data-callback-url-view", "put-your-view-macro-here");try {a = parent.document.getElementsByTagName("script")[0] || document.getElementsByTagName("script")[0];} catch (e) {a = !1;} a || (a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);a.parentNode.insertBefore(c, a);})(document, window);
