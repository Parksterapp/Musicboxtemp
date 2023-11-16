import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistHeader from './ArtistHeader';

test('ArtistHeader renders correctly', () => {
  render(<ArtistHeader />);
  const artistHeaderElement = screen.getByTestId('artist-header');
  expect(artistHeaderElement).toBeInTheDocument();
  // Add more tests as needed
});
