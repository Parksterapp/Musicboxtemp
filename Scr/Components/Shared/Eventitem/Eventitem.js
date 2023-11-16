import React from 'react';
import './EventItem.css';

function EventItem({ event }) {
  // Add your EventItem component logic here

  return (
    <div className="event-item">
      <h3>{event.name}</h3>
      {/* Render other event details */}
    </div>
  );
}

export default EventItem;
