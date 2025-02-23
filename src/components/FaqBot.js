import React, { useState } from 'react';
import '../styles/FaqBot.css';
import { FaRobot, FaTimes, FaChevronRight, FaPhone, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const FaqBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m here to help you with any questions about Hackathon 2K25. Click the button below to view frequently asked questions.',
    }
  ]);

  const contactInfo = [
    {
      name: "Priyansh Singh",
      phone: "+91-9935072646",
      email: "priyansh.singh.csibm26@iilm.edu"
    },
    {
      name: "Dhruv Singhal",
      phone: "+91-9310838814",
      email: "dhruv.singhal.csibm26@iilm.edu"
    },
    {
      name: "Aman Maurya",
      phone: "+91-9918027563",
      email: "aman.maurya.cs26@iilm.edu"
    }
  ];

  const faqData = {
    "What is Hackathon 2K25?": "Hackathon 2K25 is a 24-hour coding competition organized by the School of Computer Science and Engineering, IILM University, Greater Noida. It aims to bring together innovators, developers, and problem-solvers to create technology-driven solutions aligned with the 16 Sustainable Development Goals (SDGs).",
    
    "When and where will it take place?": "The hackathon will be held on February 28 to March 1, 2025, at IILM University, Greater Noida.",
    
    "Who can participate?": "The hackathon is open to students, developers, and tech enthusiasts from colleges and universities across India.",
    
    "What is the team size and registration fee?": "Each team must have 3 to 5 members. The registration fee is ₹599 per team.",
    
    "What's the registration deadline?": "The last date for registration is February 24, 2025. Teams must submit the required idea submission template and NOC form.",
    
    "Can team members be from different institutions?": "Yes, team members can be from different institutions.",
    
    "What are the themes and rules?": "Teams can work on solutions addressing one or more of the 16 Sustainable Development Goals (SDGs). You can use open-source libraries, but your solution should be developed during the hackathon.",
    
    "Will there be mentorship and support?": "Yes, mentors will be available to guide teams throughout the event. Food and basic accommodation arrangements will be provided.",
    
    "What are the prizes?": "The total prize pool is up to ₹1 Lakh, along with certificates and recognition. All participants will receive a certificate of participation.",
    
    "What should I bring?": "Participants should bring their laptops, chargers, extension cords, and any other required equipment."
  };

  const handleQuestionClick = (question) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', content: question },
      { type: 'bot', content: faqData[question] }
    ]);
    setShowQuestions(false);
  };

  const handleContactClick = (type) => {
    const actionType = type === 'phone' ? 'call' : 'email';
    const icon = type === 'phone' ? <FaPhone className="icon" /> : <FaEnvelope className="icon" />;
    
    setMessages(prev => [
      ...prev,
      {
        type: 'user',
        content: type === 'phone' ? 'I want to contact a coordinator' : 'I want to email a coordinator'
      },
      {
        type: 'bot',
        content: `Here are our coordinators you can ${actionType}:`,
        actions: contactInfo.map(contact => ({
          type: type,
          name: contact.name,
          value: type === 'phone' ? contact.phone : contact.email,
          icon: icon
        }))
      }
    ]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowQuestions(false);
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <div className={`faq-bot ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      <div className="chat-container">
        <div className="chat-header">
          <FaRobot className="bot-icon" />
          <h3>Hackathon Assistant</h3>
          <button className="close-button" onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.type === 'bot' && <FaRobot className="message-icon" />}
              <div className="message-content">
                {msg.content}
                {msg.actions && (
                  <div className="message-actions">
                    {msg.actions.map((action, actionIndex) => (
                      <a
                        key={actionIndex}
                        href={action.type === 'phone' ? `tel:${action.value}` : `mailto:${action.value}`}
                        className="message-action-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = action.type === 'phone' ? 
                            `tel:${action.value}` : 
                            `mailto:${action.value}`;
                        }}
                      >
                        {action.icon}
                        <span className="action-name">{action.name}</span>
                        <span className="action-value">{action.value}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="toggle-questions" onClick={toggleQuestions}>
          <span>View Questions</span>
          <FaChevronUp className={`icon ${showQuestions ? 'rotated' : ''}`} />
        </button>

        <div className={`faq-options ${showQuestions ? 'expanded' : ''}`}>
          {Object.keys(faqData).map((question, index) => (
            <button 
              key={index} 
              className="faq-option"
              onClick={() => handleQuestionClick(question)}
            >
              <span>{question}</span>
              <FaChevronRight className="arrow-icon" />
            </button>
          ))}
        </div>

        <div className="contact-buttons">
          <button className="contact-button" onClick={() => handleContactClick('phone')}>
            <FaPhone className="icon" />
            <span>Contact</span>
          </button>
          <button className="contact-button" onClick={() => handleContactClick('email')}>
            <FaEnvelope className="icon" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqBot;
