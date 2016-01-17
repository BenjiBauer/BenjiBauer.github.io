var languegefkt = function(){

  var fadespeed = 200;


  $(".language").mouseenter(function(){
  

    $(".language p").css({ 
      'color': '#ffffff',
      'letter-spacing': '5px'
    });
  });



$(".language").mouseleave(function(){
  

    $(".language p").css({ 
      'color': '#CEC4B8',
      'letter-spacing': '3px'
    });

  });
};

  $(document).ready(languegefkt);
