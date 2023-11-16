import React from 'react';
import EventCard from './EventCard';

const EventListing = () => {
  // Fetch event data from API or database
  const events = [
    { id: 1, name: 'Event 1', date: '2023-11-03', location: 'Location 1' },
    { id: 2, name: 'Event 2', date: '2023-11-05', location: 'Location 2' },
    { id: 3, name: 'Event 3', date: '2023-11-07', location: 'Location 3' },
  ];

  return (
    <div>
      <h1>Event Listing</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
