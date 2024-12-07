import React from "react";
import "./EventsHighlight.css";

const EventsHighlight = () => {
  const stats = [
    { value: "$50,000+", label: "in prizes" },
    { value: "1,500+", label: "hackers" },
    { value: "300+", label: "projects" },
    { value: "200+", label: "Shop" },
  ];

  return (
    <div className="events-container">
      <h2 className="events-title">
        What Our <span>Events</span> Bring?
      </h2>
      <div className="events-stats">
        {stats.map((stat, index) => (
          <div className="event-stat-item" key={index}>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHighlight;
