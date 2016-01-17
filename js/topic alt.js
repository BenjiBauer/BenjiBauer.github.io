var topic = function(){

	var fadespeed = 100;
  var heightEnter = "250px";
  var heightLeave = "50px";
  var marginTopEnter = "0px";
  var marginTopLeave = "200px";
  var marginTopInhaltEnter = "110px";
  var marginTopInhaltLeave = "-12px";

//ABOUT ME
	$("#topic-aboutme").mouseenter(function(){
	
		$('#topicboxtext-aboutme').animate({
      		height: heightEnter,
      		marginTop: marginTopEnter
    	},
    	fadespeed);
    	$('#topicboxtextinhalt-aboutme').animate({
      		marginTop: marginTopInhaltEnter
    	},
    	fadespeed);

	});

	$(".topicbox").mouseleave(function(){
		
		$('#topicboxtext-aboutme').animate({
      		height: heightLeave,
      		marginTop: marginTopLeave
      		
    	},
    	fadespeed);
    	$('#topicboxtextinhalt-aboutme').animate({
      		marginTop: marginTopInhaltLeave
    	},
    	fadespeed);

	});

  //Lebenslauf
  $("#topic-Lebenslauf").mouseenter(function(){
  
    $('#topicboxtext-Lebenslauf').animate({
          height: heightEnter,
          marginTop: marginTopEnter
      },
      fadespeed);
      $('#topicboxtextinhalt-Lebenslauf').animate({
          marginTop: marginTopInhaltEnter
      },
      fadespeed);

  });

  $(".topicbox").mouseleave(function(){
    
    $('#topicboxtext-Lebenslauf').animate({
          height: heightLeave,
          marginTop: marginTopLeave
          
      },
      fadespeed);
      $('#topicboxtextinhalt-Lebenslauf').animate({
          marginTop: marginTopInhaltLeave
      },
      fadespeed);

  });

    //Projekte
  $("#topic-Projekte").mouseenter(function(){
  
    $('#topicboxtext-Projekte').animate({
          height: heightEnter,
          marginTop: marginTopEnter
      },
      fadespeed);
      $('#topicboxtextinhalt-Projekte').animate({
          marginTop: marginTopInhaltEnter
      },
      fadespeed);

  });

  $(".topicbox").mouseleave(function(){
    
    $('#topicboxtext-Projekte').animate({
          height: heightLeave,
          marginTop: marginTopLeave
          
      },
      fadespeed);
      $('#topicboxtextinhalt-Projekte').animate({
          marginTop: marginTopInhaltLeave
      },
      fadespeed);

  });

};



	$(document).ready(topic);
