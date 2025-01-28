// Set the date we're counting down to
var countDownDate = new Date("February 3, 2024 14:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (minutes < 10) {
    var formattedMinutes = "0" + minutes;
  } else {
    var formattedMinutes = minutes;
  }

  if (seconds < 10) {
    var formattedSeconds = "0" + seconds;
  } else {
    var formattedSeconds = seconds;
  }

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML =
    hours + ":" + formattedMinutes + ":" + formattedSeconds + " ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "A bientôt !";
  }
}, 1000);
