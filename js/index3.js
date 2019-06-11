(function(win, doc) {

  // enter or exit the full screen mode
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

  $("#audio").hide();
  $("#audio-pause").hide();
  
  var audioPlayer = doc.getElementById("audiofile");
  
  $("#audio-play").click(function(){
    audioPlayer.play();
    $("#audio-play").hide();
    $("#audio-pause").show();
  });

  $("#audio-pause").click(function(){
    audioPlayer.pause();
    $("#audio-pause").hide();
    $("#audio-play").show();
  });


  // set the audio file to be muted
  audioPlayer.muted = true;

  $('#ex1').bootstrapSlider({
  tooltip: 'show'
  });

  // change the playback rate
  var rateChange = function() {
    audioPlayer.playbackRate = ex1.bootstrapSlider('getValue');
  };

  var ex1 = $("#ex1").bootstrapSlider().on('change',rateChange);


  $('#ex2').bootstrapSlider({
  tooltip: 'show'
  });

  // change the font size
  var fontChange = function() {
    var fontvalue = ex2.bootstrapSlider('getValue');
    $("#text").css("fontSize", fontvalue);
  };

  var ex2 = $("#ex2").bootstrapSlider().on('change',fontChange);

  var subtitles = doc.getElementById("text");

  // the map
  var syncData = [                  
  {
   "begin": "0.000", 
   "children": [], 
   "end": "8.440", 
   "id": "f000001", 
   "language": "eng", 
   "lines": [
    "Living in an urban area with green spaces has a long-lasting positive impact on people's mental well-being, a study has suggested."
   ]
  }, 
  {
   "begin": "8.440", 
   "children": [], 
   "end": "17.800", 
   "id": "f000002", 
   "language": "eng", 
   "lines": [
    "UK researchers found moving to a green space had a sustained positive effect, unlike pay rises or promotions, which only provided a short-term boost."
   ]
  }, 
  {
   "begin": "17.800", 
   "children": [], 
   "end": "28.440", 
   "id": "f000003", 
   "language": "eng", 
   "lines": [
    "Co-author Mathew White, from the University of Exeter, UK, explained that the study showed people living in greener urban areas were displaying fewer signs of depression or anxiety."
   ]
  }, 
  {
   "begin": "28.440", 
   "children": [], 
   "end": "39.160", 
   "id": "f000004", 
   "language": "eng", 
   "lines": [
    "\"There could be a number of reasons,\" he said, \"for example, people do many things to make themselves happier: they strive for promotion or pay rises, or they get married."
   ]
  }, 
  {
   "begin": "39.160", 
   "children": [], 
   "end": "46.480", 
   "id": "f000005", 
   "language": "eng", 
   "lines": [
    "But the trouble with those things is that within six months to a year, people are back to their original baseline levels of well-being."
   ]
  }, 
  {
   "begin": "46.480", 
   "children": [], 
   "end": "62.440", 
   "id": "f000006", 
   "language": "eng", 
   "lines": [
    "So, these things are not sustainable; they don't make us happy in the long term. We found that for some lottery winners who had won more than \uffe1500,000 the positive effect was definitely there, but after six months to a year, they were back to the baseline.\""
   ]
  }, 
  {
   "begin": "62.440", 
   "children": [], 
   "end": "62.440", 
   "id": "f000007", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "62.440", 
   "children": [], 
   "end": "74.240", 
   "id": "f000008", 
   "language": "eng", 
   "lines": [
    "Dr. White said his team wanted to see whether living in greener urban areas had a lasting positive effect on people's sense of well-being or whether the effect also disappeared after a period of time."
   ]
  }, 
  {
   "begin": "74.240", 
   "children": [], 
   "end": "80.840", 
   "id": "f000009", 
   "language": "eng", 
   "lines": [
    "To do this, the team used data from the British Household Panel Survey compiled by the University of Essex."
   ]
  }, 
  {
   "begin": "80.840", 
   "children": [], 
   "end": "80.840", 
   "id": "f000010", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "80.840", 
   "children": [], 
   "end": "91.400", 
   "id": "f000011", 
   "language": "eng", 
   "lines": [
    "Explaining what the data revealed, he said: \"What you see is that even after three years, mental health is still better, which is unlike many other things that we think will make us happy.\""
   ]
  }, 
  {
   "begin": "91.400", 
   "children": [], 
   "end": "99.480", 
   "id": "f000012", 
   "language": "eng", 
   "lines": [
    "He observed that people living in green spaces were less stressed, and less stressed people made more sensible decisions and communicated better."
   ]
  }, 
  {
   "begin": "99.480", 
   "children": [], 
   "end": "99.520", 
   "id": "f000013", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "99.520", 
   "children": [], 
   "end": "112.640", 
   "id": "f000014", 
   "language": "eng", 
   "lines": [
    "With a growing body of evidence establishing a link between urban green spaces and a positive impact on human well-being, Dr. White said, \"There's growing interest among public policy officials, but the trouble is who funds it."
   ]
  }, 
  {
   "begin": "112.640", 
   "children": [], 
   "end": "120.160", 
   "id": "f000015", 
   "language": "eng", 
   "lines": [
    "What we really need at a policy level is to decide where the money will come from to help support good quality local green spaces.\""
   ]
  }  
  ];
            
  // display the text sentense by sentense
  audioPlayer.addEventListener("timeupdate", function(e){
    syncData.forEach(function(element, index, array){
    var el;
    if( audioPlayer.currentTime >= element.begin && audioPlayer.currentTime <= element.end ) {
      while(subtitles.hasChildNodes())
      subtitles.removeChild(subtitles.firstChild)

      el = document.createElement('span');
      el.setAttribute("id", "c_" + index);
      el.innerText = syncData[index].lines + "\n";
      subtitles.appendChild(el);
      }
      if (audioPlayer.ended == true) {
          $("#audio-pause").hide();
          $("#audio-play").show();
          return;
      };
    }
    
    );
  });

}(window, document));


    