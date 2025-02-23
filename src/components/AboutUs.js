import React, { useState, useEffect } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [currentHackathonImage, setCurrentHackathonImage] = useState(0);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);

  const hackathonImages = [
    '../images/img1.jpg',
    '../images/img2.jpg',
    '../images/img3.jpg',
    '../images/img4.jpg'
  ];

  const facilityImages = [
    '../images/img5.jpg',
    '../images/img6.jpg',
    '../images/img7.jpg',
    '../images/img8.jpg'
  ];

  useEffect(() => {
    const hackathonInterval = setInterval(() => {
      setCurrentHackathonImage((prev) => (prev + 1) % hackathonImages.length);
    }, 3000);

    const facilityInterval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 3000);

    return () => {
      clearInterval(hackathonInterval);
      clearInterval(facilityInterval);
    };
  }, []);

  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        <h2 className="section-title">About Hackathon</h2>
        
        {/* Hackathon Glimpses */}
        <div className="about-row">
          <div className="about-content">
            <h3>Previous Hackathons</h3>
            <p>
              IILM's hackathons have been a hub of innovation where brilliant minds collaborate 
              to solve real-world challenges. Our events bring together diverse talents, 
              fostering creativity and technical excellence through 24 hours of intense coding 
              and problem-solving.
            </p>
          </div>
          <div className="image-slideshow">
            {hackathonImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Hackathon Glimpse ${index + 1}`}
                className={`slideshow-image ${index === currentHackathonImage ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Facility Showcase */}
        <div className="about-row">
          <div className="image-slideshow">
            {facilityImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Facility Showcase ${index + 1}`}
                className={`slideshow-image ${index === currentFacilityImage ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="about-content">
            <h3>World-Class Facilities</h3>
            <p>
              Experience hackathon at our state-of-the-art campus equipped with high-speed internet, 
              modern workstations, and 24/7 support. We provide comfortable accommodation and 
              refreshments, ensuring you focus solely on innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 