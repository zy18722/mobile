(function(win, doc) {

  // enter or exit full screen mode
  $("#fullscreen").click(function(){
      
      if (screenfull.isFullscreen) {
        screenfull.exit();
      }
      else{
        if (screenfull.enabled) {
        screenfull.request();
        } 
      }
      
  });

  var box = doc.getElementById("control");

  $("#setting").click(function(){

    box.style.visibility="visible";
    if (box.offsetLeft == 0) {  
      box.style['margin-left'] = -240 + "px";
    } else {
      box.style['margin-left'] = 0 + "px";
    }
  });

  var audioPlayer = doc.getElementById("audiofile2");

  $('#ex1').bootstrapSlider({
  tooltip: 'show'
  });

  // change the playback rate
  var rateChange = function() {
    audioPlayer.playbackRate = ex1.bootstrapSlider('getValue');
  };

  var ex1 = $("#ex1").bootstrapSlider().on('change',rateChange);




}(window, document));


    