import "./style.css";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // update countdown every second
    const countdownTimer = setInterval(() => {
      const hackathonStart = new Date("May 21, 2022 9:00:00").getTime();
      const now = new Date().getTime();

      // find the time between now and the count down date
      const timeLeft = hackathonStart - now;

      // calculations for days, hours, minutes, seconds
      var updatedDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var updatedHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var updatedMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var updatedSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // if countdown is finished, just display 0s
      if (timeLeft < 0) {
        updatedDays = 0;
        updatedHours = 0;
        updatedMinutes = 0;
        updatedSeconds = 0;
      }

      setDays(updatedDays);
      setHours(updatedHours);
      setMinutes(updatedMinutes);
      setSeconds(updatedSeconds);
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <section id="countdown-wrapper">
      <h1 id="countdown">Time Until Hacking Starts</h1>
      <div id="timer">
        <div className="timer-element">
          <p id="days-num" className="num">
            {days}
          </p>
          <p className="text">days</p>
        </div>
        <div className="timer-element">
          <p id="hours-num" className="num">
            {hours}
          </p>
          <p className="text">hours</p>
        </div>
        <div className="timer-element">
          <p id="minutes-num" className="num">
            {minutes}
          </p>
          <p className="text">minutes</p>
        </div>
        <div className="timer-element">
          <p id="seconds-num" className="num">
            {seconds}
          </p>
          <p className="text">seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
