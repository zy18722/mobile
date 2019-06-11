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

  // show the value on the slider
  $('#ex2').bootstrapSlider({
  tooltip: 'show'
  });

  // change the font size
  var fontChange = function() {
    var fontvalue = ex2.bootstrapSlider('getValue');
    $("#text").css("fontSize", fontvalue);
  };

  var ex2 = $("#ex2").bootstrapSlider().on('change',fontChange);

}(window, document));


    