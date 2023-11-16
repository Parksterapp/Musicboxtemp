import React from 'react';
import TicketTypes from './TicketTypes';
import TicketAvailability from './TicketAvailability';
import PurchaseButton from './PurchaseButton';

const Ticketing = () => {
  // Fetch ticket information from API or database
  const tickets = [
    { id: 1, type: 'General Admission', price: 20 },
    { id: 2, type: 'VIP', price: 50 },
  ];

  return (
    <div>
      <h1>Ticketing</h1>
      <TicketTypes tickets={tickets} />
      <TicketAvailability available={true} />
      <PurchaseButton />
    </div>
  );
};

export default Ticketing;
