import React from 'react';
import { render } from '@testing-library/react';
import EventBookings from './EventBookings';

test('renders Event Bookings', () => {
  const { getByText } = render(<EventBookings />);
  const element = getByText('Event Bookings');
  expect(element).toBeInTheDocument();
});
