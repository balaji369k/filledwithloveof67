// Set the target date (year, month - 1, day, hours, minutes, seconds)
var targetDate = new Date(2023, 2, 30, 8, 0, 0).getTime();

// Update the countdown every second
var countdown = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the target date
  var timeRemaining = targetDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the HTML
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is over, stop the interval and display "Countdown finished!"
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown finished!";
  }
}, 1000);
