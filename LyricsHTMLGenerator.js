function replaceSpecialCharacters(e){return e.replace(/'/g,"’").replace(/\.\.\./g,"…").replace(/-/g,"–")}function generateLyrics(){const e=document.getElementById("songText").value.trim().split("\n");let t="";for(let n=0;n<e.length;n++){let c=e[n].trim();""!==c?(c=replaceSpecialCharacters(c),n===e.length-1?t+=`<span>${c}</span>`:t+=`<span>${c}<br/></span>\n`):t+="<span><br/></span>\n"}document.getElementById("outputLyrics").textContent=t}function copyToClipboard(){const e=document.getElementById("outputLyrics");if(""===e.textContent.trim())return void toastNotif("Add Lyrics First");const t=document.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t);try{document.execCommand("copy"),toastNotif("Lyrics HTML Copied!")}catch(e){toastNotif("Failed to copy HTML. Please try again.")}window.getSelection().removeAllRanges()}