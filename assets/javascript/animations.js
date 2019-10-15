function slide() {
  $("#").slideToggle("slow", function () {
    // Animation complete.
  });
};

function pulseOnHover() {
  $("#").hoverpulse({
    size: 40,  // number of pixels to pulse element (in each direction)
    speed: 400 // speed of the animation 
  });
}

function pulsePassively() {
  $("#").toggle("pulsate");
}

function expandDiv() {
  $("#").toggle(
    function () {
      $("#").animate({ height: 700 + 'px' });
      $(this).html('See Less');
    },
    function () {
      $('#').animate({ height: 500 + 'px' });
      $(this).html('See More >>');
    }
  );
}