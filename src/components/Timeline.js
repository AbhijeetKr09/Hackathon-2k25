import React from 'react';
import '../styles/Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    // Day 1
    {
      id: 1,
      time: "10:00 AM - 10:05 AM",
      title: "Inauguration Ceremony",
      description: "Day 1 (28/02/25)",
      position: "left"
    },
    {
      id: 2,
      time: "10:05 AM - 10:15 AM",
      title: "Lamp Lighting",
      description: "Opening Ceremony",
      position: "right"
    },
    {
      id: 3,
      time: "10:15 AM - 10:25 AM",
      title: "Welcome Speech",
      description: "Opening Address",
      position: "left"
    },
    {
      id: 4,
      time: "10:25 AM - 10:35 AM",
      title: "Introduction to Hackathon 2K25 Theme",
      description: "Theme Presentation",
      position: "right"
    },
    {
      id: 5,
      time: "10:35 AM - 10:45 AM",
      title: "Address by Hon'ble Vice-Chancellor Ma'am",
      description: "Special Address",
      position: "left"
    },
    {
      id: 6,
      time: "10:45 AM - 10:55 AM",
      title: "Address by the Hon'ble Dean Sir (SCSE)",
      description: "Dean's Address",
      position: "right"
    },
    {
      id: 7,
      time: "10:55 AM - 11:30 AM",
      title: "Address by Industry Experts",
      description: "Industry Insights",
      position: "left"
    },
    {
      id: 8,
      time: "12:00 Noon Onwards",
      title: "Session Opens for Hackathon 2K25",
      description: "Start of Hackathon",
      position: "right"
    },
    {
      id: 9,
      time: "1:30 PM - 2:30 PM",
      title: "Lunch Break",
      description: "Refreshment Time",
      position: "left"
    },
    {
      id: 10,
      time: "3:30 PM - 4:30 PM",
      title: "Evaluation Phase 1",
      description: "First Round of Evaluation",
      position: "right"
    },
    {
      id: 11,
      time: "4:00 PM - 4:30 PM",
      title: "High Tea",
      description: "Evening Refreshments",
      position: "left"
    },
    {
      id: 12,
      time: "7:30 PM - 8:30 PM",
      title: "Evaluation Phase 2",
      description: "Second Round of Evaluation",
      position: "right"
    },
    {
      id: 13,
      time: "8:30 PM - 9:30 PM",
      title: "Dinner",
      description: "Evening Meal",
      position: "left"
    },
    {
      id: 14,
      time: "12:00 AM - 1:00 AM",
      title: "Midnight Tea",
      description: "Late Night Refreshments",
      position: "right"
    },
    // Day 2
    {
      id: 15,
      time: "7:00 AM - 8:00 AM",
      title: "Students Freshen-Up Time",
      description: "Day 2 (01/03/25)",
      position: "left"
    },
    {
      id: 16,
      time: "8:00 AM - 9:00 AM",
      title: "Breakfast",
      description: "Morning Meal",
      position: "right"
    },
    {
      id: 17,
      time: "11:00 AM - 12:30 PM",
      title: "Final Evaluation",
      description: "Final Round of Judging",
      position: "left"
    },
    {
      id: 18,
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break",
      description: "Final Day Lunch",
      position: "right"
    },
    {
      id: 19,
      time: "1:30 PM",
      title: "Assemble in Auditorium",
      description: "Closing Ceremony Begins",
      position: "left"
    },
    {
      id: 20,
      time: "1:35 PM - 2:10 PM",
      title: "Address by Evaluator",
      description: "Evaluator's Feedback",
      position: "right"
    },
    {
      id: 21,
      time: "2:15 PM - 2:35 PM",
      title: "Result Announcement & Certificate Distribution",
      description: "By Hon'ble VC Ma'am",
      position: "left"
    }
  ];

  return (
    <div className="timeline-section" id="timeline-section">
      <div className="timeline-header">
        <h2>Event Timeline</h2>
      </div>
      <div className="timeline-content-wrapper">
        <div className="timeline-container">
          <div className="s-timeline">
            {timelineEvents.map((event) => (
              <div 
                key={event.id} 
                className="timeline-card"
              >
                <div className="timeline-content">
                  <div className="time-block">
                    <span className="time">{event.time}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
