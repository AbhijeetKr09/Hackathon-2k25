import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    hours: 0,
    participants: 0,
    goals: 0,
    prizes: 0
  });

  const targetCounts = {
    hours: 36,
    participants: 100,
    goals: 17,
    prizes: 5
  };

  const animateStats = useCallback(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        hours: Math.min(Math.floor(targetCounts.hours * progress), targetCounts.hours),
        participants: Math.min(Math.floor(targetCounts.participants * progress), targetCounts.participants),
        goals: Math.min(Math.floor(targetCounts.goals * progress), targetCounts.goals),
        prizes: Math.min(Math.floor(targetCounts.prizes * progress), targetCounts.prizes)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetCounts.hours, targetCounts.participants, targetCounts.goals, targetCounts.prizes]);

  useEffect(() => {
    animateStats();
  }, [animateStats]);

  return (
    <div className="stats-wrapper">
      <div className="stats-flex-container">
        <div className="stats-section">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <h2 className="stat-number">{counts.hours}+</h2>
              <p>Hours of Coding</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">💻</div>
              <h2 className="stat-number">{counts.participants}+</h2>
              <p>Participants</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <h2 className="stat-number">{counts.goals}+</h2>
              <p>SDG Goals</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎁</div>
              <h2 className="stat-number">{counts.prizes}+</h2>
              <p>Prizes</p>
            </div>
          </div>
        </div>
        <div className="stats-why">
          <h2>Why Participate?</h2>
          <div className="about-text">
            <p>
              Join us for an exciting 36-hour hackathon where innovation meets impact.
              Work on real-world problems, network with industry experts, and showcase
              your skills. Whether you're a beginner or an experienced developer,
              this is your chance to make a difference!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;