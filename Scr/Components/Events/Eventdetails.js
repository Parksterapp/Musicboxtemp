import React from 'react';
import EventTitle from './EventTitle';
import EventDate from './EventDate';
import EventLocation from './EventLocation';
import EventDescription from './EventDescription';

const EventDetails = () => {
  // Fetch event details from API or database
  const event = {
    id: 1,
    name: 'Event 1',
    date: '2023-11-03',
    location: 'Location 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <h1>Event Details</h1>
      <EventTitle title={event.name} />
      <EventDate date={event.date} />
      <EventLocation location={event.location} />
      <EventDescription description={event.description} />
    </div>
  );
};

export default EventDetails;
