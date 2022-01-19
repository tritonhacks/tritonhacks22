import "./style.css";

const hackathonStart = new Date("May 21, 2022 9:00:00").getTime();

// update countdown every second
var x = setInterval(function() {

  var now = new Date().getTime();

  // find the time between now and the count down date
  var timeLeft = hackathonStart - now;

  // calculations for days, hours, minutes, seconds
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   // if count down is finished, just display 0s
  if (timeLeft < 0) {
    clearInterval(x);
    days = 0;
    hours= 0;
    minutes = 0;
    seconds = 0;
  }

  // display time left 
  document.getElementById("days-num").innerHTML = days;
  document.getElementById("hours-num").innerHTML = hours;
  document.getElementById("minutes-num").innerHTML = minutes;
  document.getElementById("seconds-num").innerHTML = seconds;

}, 1000);


const Countdown = () => {
  return <div id="countdown-wrapper">
      <h1 id="countdown">Time Until Hacking Starts</h1>
      <div id="timer-wrapper">
        <div id="timer">
          <div class="timer-element">
            <p id="days-num" class="num"></p>
            <p class="text">DAYS</p>
          </div>
          <div class="timer-element">
            <p id="hours-num" class="num"></p>
            <p class="text">HOURS</p>
          </div>
          <div class="timer-element">
            <p id="minutes-num" class="num"></p>
            <p class="text">MINUTES</p>
          </div>
          <div class="timer-element">
            <p id="seconds-num" class="num"></p>
            <p class="text">SECONDS</p>
          </div>
        </div>
      </div>
      
      </div>;
};

export default Countdown;
