var topicfkt = function(){

	var fadespeed = 100;
  var opacityEnter = "0.5";

//ABOUT ME
	$("#topic-aboutme").mouseenter(function(){
	
		$(this).animate({
          opacity: "1"
      },
      fadespeed);

    $("#topic-Lebenslauf").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Projekte").animate({
          opacity: opacityEnter
      },
      fadespeed);

	});

  //Lebenslauf
  $("#topic-Lebenslauf").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);

    $("#topic-aboutme").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Projekte").animate({
          opacity: opacityEnter
      },
      fadespeed);

  });




//Projekte
  $("#topic-Projekte").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);

    $("#topic-Lebenslauf").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-aboutme").animate({
          opacity: opacityEnter
      },
      fadespeed);

  });


  //Leave

  $(".topics").mouseleave(function(){
    
    $("#topic-Lebenslauf").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-Projekte").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-aboutme").animate({
          opacity: "1"
      },
      fadespeed);

  });

};



	$(document).ready(topicfkt);
