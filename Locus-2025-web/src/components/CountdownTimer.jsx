import React, { useState, useEffect } from "react";
import "./CountdownTimer.css"; // Import the CSS file
import OWNED2 from '../assets/OWNED2 1.svg'
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-13T00:00:00"); // Replace with the actual date and time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div>
      <span key={interval} className="timer-component">
        {timeLeft[interval]} 
      </span>
      <span className="timer-label">{interval.toUpperCase()}</span></div>
    );
  });

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">TIME TO GO....</h2>
      <div className="timer-display">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="event-details">
        <img
          src={OWNED2} 
          alt="Locus 2025 Logo"
          className="event-logo"
        />
        <div className="event-title"><div className="Locus">Locus</div> <div className="text-2025">2025</div></div>
        <h3 className="event-subtitle">21st National Technological Festival</h3>
      </div>
    </div>
  );
};

export default CountdownTimer;
