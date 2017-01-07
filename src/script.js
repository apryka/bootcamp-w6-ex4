(function(){

  let player = document.getElementById('video');
  let progress = document.getElementById('progress');
  let output = document.getElementById('progressTime');
  let playBtn = document.getElementById('play');

  let displayOutput = function(){
    output.value = formatNumber(player.currentTime/60) + ':' + formatNumber(player.currentTime%60) + '/' + formatNumber(player.duration/60) + ':' + formatNumber(player.duration%60);
  };

  let formatNumber = function(number) {
    let value = Math.floor(number);
    return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  };

   player.addEventListener('loadedmetadata', function(){
       progress.max = player.duration;
       progress.value = player.currentTime;
       displayOutput();
   });

   video.addEventListener('timeupdate', function(event){
       progress.value = event.target.currentTime;
       output.value = event.target.currentTime;
       displayOutput();
   });

   progress.addEventListener('change', function(){
     player.currentTime = progress.value;
     displayOutput();
   });

   playBtn.addEventListener('click', function(){
     if (player.paused) {
       player.play();
       playBtn.value = "Pause";
     } else {
       video.pause();
       playBtn.value = "Play";
     }
   }, false);



})();
