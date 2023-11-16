import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistMusic from './ArtistMusic';

test('ArtistMusic renders correctly', () => {
  render(<ArtistMusic />);
  const artistMusicElement = screen.getByTestId('artist-music');
  expect(artistMusicElement).toBeInTheDocument();
  // Add more tests as needed
});
