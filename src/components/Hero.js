import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const announcements = [
    "🎉 Registration Extended till February 24, 2025!",
    "📅 Hackathon Dates: February 28 - March 1, 2025",
    "💡 Theme Reveal: Tech for Good - Empowering Communities",
    "🏆 Prize Pool Worth ₹1,00,000+"
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-02-28T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const announcementInterval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(announcementInterval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h1>Hackathon 2K25</h1>
        <p className="date">February 28, 2025 — March 1, 2025</p>
        <div className="announcement-carousel">
          <div className="announcement-text" key={currentAnnouncement}>
            {announcements[currentAnnouncement]}
          </div>
        </div>
        <p className="custom-text">Code - Compete - Conquer</p>
        <p className="description">
          Tech for Good: Empowering communities for a Better Tomorrow
        </p>
        <div className="countdown-container">
          <h2 className="countdown-title">Live in</h2>
          <div className="countdown-wrapper">
            <div className="countdown-box">
              <div className="countdown-value">{countdown.days}</div>
              <div className="countdown-label">days</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{countdown.hours}</div>
              <div className="countdown-label">hours</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{countdown.minutes}</div>
              <div className="countdown-label">mins</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{countdown.seconds}</div>
              <div className="countdown-label">secs</div>
            </div>
          </div>
        </div>
        <a 
          href="https://docs.google.com/forms/u/3/d/1u-BKbWGZjpMlvq_fzaJo2tMfiMfY8mbNsfkrUd6cH-U/preview?edit_requested=true" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleNavLinkClick}
        >
          <button className="register-btn">REGISTER NOW</button>
        </a>
        <button className="hero-register-btn">REGISTER NOW</button>
      </div>
    </div>
  );
};

export default Hero;
