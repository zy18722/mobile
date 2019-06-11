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

  var audioPlayer = doc.getElementById("audiofile");

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

  // map
  var syncData = [                  
  {
   "begin": "0.000", 
   "children": [], 
   "end": "6.600", 
   "id": "f000001", 
   "language": "eng", 
   "lines": [
    "For thousands of years, people have known that the best way to understand a concept is to explain it to someone else."
   ]
  }, 
  {
   "begin": "6.600", 
   "children": [], 
   "end": "11.040", 
   "id": "f000002", 
   "language": "eng", 
   "lines": [
    "\"While we teach, we learn,\" said Roman philosopher Seneca."
   ]
  }, 
  {
   "begin": "11.040", 
   "children": [], 
   "end": "14.480", 
   "id": "f000003", 
   "language": "eng", 
   "lines": [
    "Now scientists are bringing this ancient wisdom up-to-date."
   ]
  }, 
  {
   "begin": "14.480", 
   "children": [], 
   "end": "22.120", 
   "id": "f000004", 
   "language": "eng", 
   "lines": [
    "They're documenting why teaching is such a fruitful way to learn, and designing innovative ways for young people to engage in instruction."
   ]
  }, 
  {
   "begin": "22.120", 
   "children": [], 
   "end": "22.120", 
   "id": "f000005", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "22.120", 
   "children": [], 
   "end": "31.520", 
   "id": "f000006", 
   "language": "eng", 
   "lines": [
    "Researchers have found that students who sign up to tutor others work harder to understand the material, recall it more accurately and apply it more effectively."
   ]
  }, 
  {
   "begin": "31.520", 
   "children": [], 
   "end": "36.760", 
   "id": "f000007", 
   "language": "eng", 
   "lines": [
    "Student teachers score higher on tests than pupils who're learning only for their own sake."
   ]
  }, 
  {
   "begin": "36.760", 
   "children": [], 
   "end": "40.680", 
   "id": "f000008", 
   "language": "eng", 
   "lines": [
    "But how can children, still learning themselves, teach others?"
   ]
  }, 
  {
   "begin": "40.680", 
   "children": [], 
   "end": "43.800", 
   "id": "f000009", 
   "language": "eng", 
   "lines": [
    "One answer: They can tutor younger kids."
   ]
  }, 
  {
   "begin": "43.800", 
   "children": [], 
   "end": "49.320", 
   "id": "f000010", 
   "language": "eng", 
   "lines": [
    "Some studies have found that first-born children are more intelligent than their later-born siblings."
   ]
  }, 
  {
   "begin": "49.320", 
   "children": [], 
   "end": "54.520", 
   "id": "f000011", 
   "language": "eng", 
   "lines": [
    "This suggests their higher IQs result from the time they spend teaching their siblings."
   ]
  }, 
  {
   "begin": "54.520", 
   "children": [], 
   "end": "59.680", 
   "id": "f000012", 
   "language": "eng", 
   "lines": [
    "Now educators are experimenting with ways to apply this model to academic subjects."
   ]
  }, 
  {
   "begin": "59.680", 
   "children": [], 
   "end": "67.640", 
   "id": "f000013", 
   "language": "eng", 
   "lines": [
    "They engage college undergraduates to teach computer science to high school students, who in turn instruct middle school students on the topic."
   ]
  }, 
  {
   "begin": "67.640", 
   "children": [], 
   "end": "67.640", 
   "id": "f000014", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "67.640", 
   "children": [], 
   "end": "78.200", 
   "id": "f000015", 
   "language": "eng", 
   "lines": [
    "But the most cutting-edge tool under development is the \"teachable agent\" \u2014 a computerized character who learns, tries, makes mistakes and asks questions just like a real-world pupil."
   ]
  }, 
  {
   "begin": "78.200", 
   "children": [], 
   "end": "87.040", 
   "id": "f000016", 
   "language": "eng", 
   "lines": [
    "Computer scientists have created an animated figure called Betty's Brain, who has been \"taught\" about environmental science by hundreds of middle school students."
   ]
  }, 
  {
   "begin": "87.040", 
   "children": [], 
   "end": "91.200", 
   "id": "f000017", 
   "language": "eng", 
   "lines": [
    "Student teachers are motivated to help Betty master certain materials."
   ]
  }, 
  {
   "begin": "91.200", 
   "children": [], 
   "end": "96.360", 
   "id": "f000018", 
   "language": "eng", 
   "lines": [
    "While preparing to teach, they organize their knowledge and improve their own understanding."
   ]
  }, 
  {
   "begin": "96.360", 
   "children": [], 
   "end": "100.960", 
   "id": "f000019", 
   "language": "eng", 
   "lines": [
    "And as they explain the information to it, they identify problems in their own thinking."
   ]
  }, 
  {
   "begin": "100.960", 
   "children": [], 
   "end": "101.400", 
   "id": "f000020", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "101.400", 
   "children": [], 
   "end": "105.560", 
   "id": "f000021", 
   "language": "eng", 
   "lines": [
    "Feedback from the teachable agents further enhances the tutors' learning."
   ]
  }, 
  {
   "begin": "105.560", 
   "children": [], 
   "end": "116.040", 
   "id": "f000022", 
   "language": "eng", 
   "lines": [
    "The agents' questions compel student tutors to think and explain the materials in different ways, and watching the agent solve problems allows them to see their knowledge put into action."
   ]
  }, 
  {
   "begin": "116.040", 
   "children": [], 
   "end": "116.080", 
   "id": "f000023", 
   "language": "eng", 
   "lines": [
    ""
   ]
  }, 
  {
   "begin": "116.080", 
   "children": [], 
   "end": "121.200", 
   "id": "f000024", 
   "language": "eng", 
   "lines": [
    "Above all, it's the emotions one experiences in teaching that facilitate learning."
   ]
  }, 
  {
   "begin": "121.200", 
   "children": [], 
   "end": "131.400", 
   "id": "f000025", 
   "language": "eng", 
   "lines": [
    "Student tutors feel upset when their teachable agents fail, but happy when these virtual pupils succeed as they derive pride and satisfaction from someone else's accomplishment."
   ]
  } 
  ];
           
  // display the text sentense by sentence
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
    });
  });

}(window, document));


    