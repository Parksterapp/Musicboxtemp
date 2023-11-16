import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistEvents from './ArtistEvents';

test('ArtistEvents renders correctly', () => {
  render(<ArtistEvents />);
  const artistEventsElement = screen.getByTestId('artist-events');
  expect(artistEventsElement).toBeInTheDocument();
  // Add more tests as needed
});
