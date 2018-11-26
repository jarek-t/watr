$( document ).ready(function() {
  var count = 0;
  var goal = 0;
  var base_time = 0;
  var time_tracker = 0;
  var timer;
  var time_left;

  //Increments hydration count
  function closer(){
    count = count + 1;
  }

  //Resets hydration trackers
  function reset(){
    count = 0;
    goal = 0;
    base_time = 0;
    time_tracker = 0;
  }

  //Returns a string representation of the time left in this round
  function remaining_time(){
    var duration = base_time - ( (new Date()).getTime() - time_tracker );
    var seconds = parseInt((duration / 1000) % 60);
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  //Checks for hydration success and cleans up from now-previous round
  function finish(){
    $("#param-wrapper").css('display', 'block');
    $("#watr-wrapper").css('display', 'none');

    if ( count >= goal ) {
      $("#success").css('display', 'block');
    }
    else {
      $("#failure").css('display', 'block');
    }
    reset();
  }

  //Hides achievment indicators on next round initiation
  $("input").click( function(){
    $("#success").css('display', 'none');
    $("#failure").css('display', 'none');
  });

  //Hides our parameter entry and starts the next round
  $("#start-timing").click( function(){
    $("#param-wrapper").css('display', 'none');

    goal = $("#glasses").val();
    $("#glasses").val('');

    base_time = ($("#duration").val()) * 3600 * 1000;
    $("#duration").val('');

    $("#count-print").text( count );
    $("#goal-print").text( goal );

    $("#watr-wrapper").css('display', 'block');

    time_tracker = (new Date()).getTime();

    timer = setTimeout( finish, base_time );
  });

  $("#reset").click( function(){
    clearTimeout( timer );
    finish();
  });

  $("#tracker").click( function(){

  });

  //Makes sure our achievment indicators are hidden at the beginning
  $("#success").css('display', 'none');
  $("#failure").css('display', 'none');

  //Updates the hydration timer
  setInterval(function() {
    $("#time").text( remaining_time() );
  }, 1000);

  $("#tracker-wrap").click( function(){
    closer();
    $("#count-print").text( count );
    $("#goal-print").text( goal );


  });

});
