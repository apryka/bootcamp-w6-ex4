"use strict";!function(){var e=document.getElementById("video"),t=document.getElementById("progress"),n=document.getElementById("progressTime"),u=document.getElementById("play"),r=function(){n.value=a(e.currentTime/60)+":"+a(e.currentTime%60)+"/"+a(e.duration/60)+":"+a(e.duration%60)},a=function(e){var t=Math.floor(e);return t.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})};e.addEventListener("loadedmetadata",function(){t.max=e.duration,t.value=e.currentTime,r()}),video.addEventListener("timeupdate",function(e){t.value=e.target.currentTime,n.value=e.target.currentTime,r()}),t.addEventListener("change",function(){e.currentTime=t.value,r()}),u.addEventListener("click",function(){e.paused?(e.play(),u.value="Pause"):(video.pause(),u.value="Play")},!1)}();