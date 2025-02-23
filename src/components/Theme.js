import React, { useState } from 'react';
import '../styles/Theme.css';
import { FaArrowRight, FaArrowLeft, FaChevronDown } from 'react-icons/fa';

const Theme = () => {
  const sdgGoals = [
    { 
      id: 1, 
      name: "No Poverty",
      description: "How can you design and develop a mobile application to facilitate access to financial services for the unbanked population in rural areas, thereby reducing poverty and promoting financial inclusion?"
    },
    { 
      id: 2, 
      name: "Zero Hunger",
      description: "How can you develop an IoT-based system to monitor and optimize crop yields, reduce food waste, and improve supply chain management, ensuring that everyone has access to nutritious food and reducing hunger?"
    },
    { 
      id: 3, 
      name: "Good Health and Well-being",
      description: "Design a telemedicine platform that leverages AI and machine learning to provide remote healthcare services, improve health outcomes, and reduce the burden on healthcare systems, especially in rural and underserved areas."
    },
    { 
      id: 4, 
      name: "Quality Education",
      description: "How can you create an adaptive learning platform that uses data analytics and AI to personalize education, improve student outcomes, and increase access to quality education for underprivileged students?"
    },
    { 
      id: 5, 
      name: "Gender Equality",
      description: "Develop a mobile application that provides a safe and secure platform for women to report instances of harassment, access support services, and connect with a community of peers, promoting gender equality and empowerment."
    },
    { 
      id: 6, 
      name: "Clean Water and Sanitation",
      description: "Design a low-cost water purification system that uses IoT sensors and machine learning to monitor water quality, detect contamination, and provide real-time alerts, ensuring access to clean water and sanitation for all."
    },
    { 
      id: 7, 
      name: "Affordable and Clean Energy",
      description: "How can you develop a smart grid system that optimizes energy distribution, reduces energy waste, and promotes the use of renewable energy sources, making energy more affordable and sustainable for all?"
    },
    { 
      id: 8, 
      name: "Decent Work and Economic Growth",
      description: "Create a platform that connects skilled workers with job opportunities, provides training and upskilling programs, and promotes entrepreneurship, fostering decent work and economic growth in the digital age."
    },
    { 
      id: 9, 
      name: "Industry, Innovation and Infrastructure",
      description: "Design a smart city infrastructure that integrates IoT sensors, data analytics, and AI to optimize traffic management, waste management, and public services, making cities more livable and sustainable."
    },
    { 
      id: 10, 
      name: "Reduced Inequalities",
      description: "Develop a platform that provides access to financial services, education, and job opportunities for marginalized communities, promoting social inclusion and reducing inequalities."
    },
    { 
      id: 11, 
      name: "Sustainable Cities and Communities",
      description: "How can you design a sustainable urban planning system that uses data analytics and AI to optimize resource allocation, reduce waste, and promote green infrastructure, making cities more sustainable and livable?"
    },
    { 
      id: 12, 
      name: "Responsible Consumption and Production",
      description: "Create a platform that promotes sustainable consumption patterns, reduces e-waste, and encourages responsible production practices, using data analytics and AI to track and optimize resource usage."
    },
    { 
      id: 13, 
      name: "Climate Action",
      description: "Develop a climate modeling platform that uses machine learning and data analytics to predict climate patterns, identify areas of high risk, and provide early warnings, enabling climate action and resilience."
    },
    { 
      id: 14, 
      name: "Life Below Water",
      description: "Design a marine conservation platform that uses IoT sensors, data analytics, and AI to monitor ocean health, track marine life, and prevent pollution, promoting the conservation of marine ecosystems."
    },
    { 
      id: 15, 
      name: "Life on Land",
      description: "How can you develop a forest conservation platform that uses satellite imaging, data analytics, and AI to monitor deforestation, track wildlife populations, and prevent habitat destruction, promoting the conservation of terrestrial ecosystems?"
    },
    { 
      id: 16, 
      name: "Peace, Justice and Strong Institutions",
      description: "Create a platform that provides access to justice, promotes transparency, and supports the development of strong institutions, using data analytics and AI to track and optimize justice delivery systems."
    },
    { 
      id: 17, 
      name: "Partnerships for the Goals",
      description: "Develop a partnership platform that connects stakeholders, promotes collaboration, and facilitates the sharing of resources and expertise, supporting the achievement of the Sustainable Development Goals."
    }
  ];

  const [selectedGoal, setSelectedGoal] = useState(sdgGoals[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setIsDropdownOpen(false);
  };

  return (
    <section className="theme-section" id="theme">
      <h2>Hackathon 2K25 Theme</h2>
      
      <div className="theme-container">
        <div className="goal-selector">
          <div 
            className={`dropdown-header ${isDropdownOpen ? 'active' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="selected-preview">
              <img 
                src={`/goals/${selectedGoal.id}.png`} 
                alt={`SDG ${selectedGoal.id}`} 
                className="preview-image"
              />
              <span>Goal {selectedGoal.id}: {selectedGoal.name}</span>
            </div>
            <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
          </div>

          {isDropdownOpen && (
            <div className="dropdown-content">
              {sdgGoals.map((goal) => (
                <div 
                  key={goal.id} 
                  className={`dropdown-item ${selectedGoal.id === goal.id ? 'active' : ''}`}
                  onClick={() => handleGoalSelect(goal)}
                >
                  <img 
                    src={`/goals/${goal.id}.png`} 
                    alt={`SDG ${goal.id}`} 
                    className="dropdown-image"
                  />
                  <span>Goal {goal.id}: {goal.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="selected-goal-container">
          <div className="selected-goal-content">
            <div className="goal-image-container">
              <img 
                src={`/goals/${selectedGoal.id}.png`} 
                alt={`SDG ${selectedGoal.id}`} 
                className="selected-goal-image"
              />
            </div>
            <div className="goal-details">
              <h3>Goal {selectedGoal.id}: {selectedGoal.name}</h3>
              <p>{selectedGoal.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
