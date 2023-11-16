import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistBio from './ArtistBio';

test('ArtistBio renders correctly', () => {
  render(<ArtistBio />);
  const artistBioElement = screen.getByTestId('artist-bio');
  expect(artistBioElement).toBeInTheDocument();
  // Add more tests as needed
});
