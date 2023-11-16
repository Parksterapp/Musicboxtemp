import React from 'react';
import { render, screen } from '@testing-library/react';
import SongDetails from './SongDetails';

test('SongDetails renders correctly', () => {
  render(<SongDetails />);
  const songDetailsElement = screen.getByTestId('song-details');
  expect(songDetailsElement).toBeInTheDocument();
  // Add more tests as needed
});
