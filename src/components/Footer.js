import React from 'react';
import { FaEnvelope, FaDiscord, FaLinkedin, FaInstagram, FaChrome } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <ul className="social-links">
          <li>
            <a href="mailto:hackathon.scse.gn@iilm.edu">
              <FaEnvelope className="contact-icon-footer"/>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/8V23pyHjGe">
              <FaDiscord className="contact-icon-footer"/>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/school-of-cse-iilm-university-21a807294">
              <FaLinkedin className="contact-icon-footer"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hackathon_iilm?igsh=NGEybDBtZXF2MWwz&utm_source=qr">
              <FaInstagram className="contact-icon-footer"/>
            </a>
          </li>
          <li>
            <a href="https://iilm.ac.in/">
              <FaChrome className="contact-icon-footer"/>
            </a>
          </li>
        </ul>
        <div className="vertical-line"></div>
        <div className="copyright">
          <img src="/iilm-logo.png" alt="IILM Logo" />
          <span>© 2002 CET IILM University, Greater Noida</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 