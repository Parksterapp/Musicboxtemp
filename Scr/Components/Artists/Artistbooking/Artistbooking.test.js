import React from 'react';
import { render } from '@testing-library/react';
import ArtistBooking from './ArtistBooking';

test('renders Artist Booking', () => {
  const { getByText } = render(<ArtistBooking />);
  const element = getByText('Artist Booking');
  expect(element).toBeInTheDocument();
});
