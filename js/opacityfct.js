var opacityfct = function(){

  var fadespeed = 100;
  var opacityEnter = "0.5";

//Project GO
  $("#topic-ProjectGO").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);

    $("#topic-BioFlow").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-3DRendering").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Spielentwicklung").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-DLRG").animate({
          opacity: opacityEnter
      },
      fadespeed);
  });


  //Bioflow
  $("#topic-BioFlow").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);

    $("#topic-ProjectGO").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-3DRendering").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Spielentwicklung").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-DLRG").animate({
          opacity: opacityEnter
      },
      fadespeed);
  });




  //3D-Rendering
  $("#topic-3DRendering").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);
  
    $("#topic-ProjectGO").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-BioFlow").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Spielentwicklung").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-DLRG").animate({
          opacity: opacityEnter
      },
      fadespeed);
  });




  //Spielentwicklung
  $("#topic-Spielentwicklung").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);
  
    $("#topic-ProjectGO").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-BioFlow").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-3DRendering").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-DLRG").animate({
          opacity: opacityEnter
      },
      fadespeed);
  });



  //DLRG
  $("#topic-DLRG").mouseenter(function(){
  
    $(this).animate({
          opacity: "1"
      },
      fadespeed);
  
    $("#topic-ProjectGO").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-BioFlow").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-3DRendering").animate({
          opacity: opacityEnter
      },
      fadespeed);
    $("#topic-Spielentwicklung").animate({
          opacity: opacityEnter
      },
      fadespeed);
  });



//Mouseleave

$(".topics").mouseleave(function(){
    
    $("#topic-ProjectGO").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-BioFlow").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-3DRendering").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-Spielentwicklung").animate({
          opacity: "1"
      },
      fadespeed);
    $("#topic-DLRG").animate({
          opacity: "1"
      },
      fadespeed);
  });

};



  $(document).ready(opacityfct);
