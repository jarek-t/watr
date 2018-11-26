$( document ).ready(function() {
  var count = 0;
  var goal = 0;
  var base_time = 0;
  var timer;

  function check_goal( count, goal ){
    return count >= goal;
  }
  function closer(){
    count = count + 1;
  }
  function reset(){
    count = 0;
    goal = 0;
    base_time = 0;
  }

  function finish(){
    $("#param-wrapper").css('display', 'block');
    $("#watr-wrapper").css('display', 'none');

    if ( check_goal() ) {
      $("#success").css('display', 'block');
    }
    else {
      $("#failure").css('display', 'block');
    }
    reset();
  }

  $("#success").css('display', 'none');
  $("#failure").css('display', 'none');

  $("input").click( function(){
    $("#success").css('display', 'none');
    $("#failure").css('display', 'none');
  });

  $("#start-timing").click( function(){
    $("#param-wrapper").css('display', 'none');

    goal = $("#glasses").val();
    $("#glasses").val('');

    base_time = ($("#duration").val()) * 3600;
    $("#duration").val('');

    timer = setTimeout( finish(), base_time );
  });
});




var currentTime = new Date ();
