const loggedIn=localStorage.getItem("loggedIn");if("true"===loggedIn){let e=document.querySelector(".lyrics-submit-form");if(e){e.innerHTML='<form id="songForm" method="POST"><div class="lyrics-form-content"><div class="lyrics-form-inner"><label for="email">Email</label></div><input type="email" id="email" placeholder="Enter Your Email" name="email" required=""></div><div class="lyrics-form-content"><div class="lyrics-form-inner"><label for="songTitle">Song Title</label></div><input type="text" id="songTitle" placeholder="Enter Song Title" name="songTitle" required=""></div><div class="lyrics-form-content"><div class="lyrics-form-inner"><label for="youtubeUrl">YouTube URL</label></div><input type="url" id="youtubeUrl" placeholder="Enter Valid YouTube URL" name="youtubeUrl" required=""></div><div class="lyrics-form-content"><div class="lyrics-form-inner"><label for="lyrics">Lyrics</label></div><textarea id="lyrics" placeholder="Enter Lyrics Here" name="lyrics" required=""></textarea></div><div class="lyrics-form-content"><input type="button" value="Send" onclick="sendForm()"></div></form>';let r=document.getElementById("songForm"),t="https://script.google.com/macros/s/AKfycbwLA6zxQwxD3rm5q0uEyPuBQ20_M_kj4BpsUK0C1Aya5GMuCGNZXebkjRE7ymRtCCv4mQ/exec";function i(){toastNotif("Sending...");let e=new FormData(r),i=e.get("youtubeUrl");if(!i.startsWith("https://www.youtube.com/")&&!i.startsWith("https://music.youtube.com/")){toastNotif("URL is Invalid");return}let l=e.get("email"),o=document.getElementById("emailUser").innerText;if(l!==o){toastNotif("Access Denied");return}let n=t+"?email="+encodeURIComponent(l);fetch(n).then(e=>e.text()).then(i=>{if("true"===i){toastNotif("Submission Denied: Email Marked As Spam");return}fetch(t,{method:"POST",body:e}).then(e=>e.text()).then(e=>{toastNotif(e),r.reset()}).catch(e=>{console.error("Error:",e),toastNotif("Failed To Submit Lyrics")})}).catch(e=>{console.error("Error:",e),toastNotif("Failed to check spam status")})}r.action=t}}
