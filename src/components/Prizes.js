import React from 'react';
import '../styles/Prizes.css';

const Prizes = () => {
  const prizes = [
    { id: 1, type: "First Prize", amount: "₹ xx,xxx", medal: "🥇" },
    { id: 2, type: "Second Prize", amount: "₹ xx,xxx", medal: "🥈" },
    { id: 3, type: "Third Prize", amount: "₹ xx,xxx", medal: "🥉" },
    { id: 4, type: "First Year Hack", amount: "Exciting Perks", icon: "✨" },
    { id: 5, type: "Participants", amount: "Goodie$", icon: "✨" }
  ];

  return (
    <div className="how-it-works" id="how-it-works">
      <h2>Prizes</h2>
      <div className="prizes-qr-container">
        <div className="prizes-section">
          <div className="top-prizes">
            {prizes.slice(0, 3).map((prize) => (
              <div key={prize.id} className="prize-card">
                <div className="medal-icon">{prize.medal}</div>
                <h3 className="prize-type">{prize.type}</h3>
                <p className="prize-amount">{prize.amount}</p>
              </div>
            ))}
          </div>
          <div className="special-prizes">
            {prizes.slice(3).map((prize) => (
              <div key={prize.id} className="prize-card">
                <div className="special-icon">{prize.icon}</div>
                <h3 className="prize-type">{prize.type}</h3>
                <p className="prize-amount">{prize.amount}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="qr-section">
          <h3 className="qr-heading">Scan to Register</h3>
          <div className="qr-placeholder">
            <img src="/images/registration-link.jpg" alt="Registration Link QR Code" />
          </div>
          <p>Scan the QR code to register for the hackathon</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes; 