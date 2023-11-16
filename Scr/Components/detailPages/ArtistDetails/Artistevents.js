import React from 'react';
import './ArtistEvents.css';

const ArtistEvents = ({ events }) => {
  return (
    <div className="artist-events">
      <h2 className="events-title">Upcoming Events</h2>
      <ul className="events-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistEvents;
          
