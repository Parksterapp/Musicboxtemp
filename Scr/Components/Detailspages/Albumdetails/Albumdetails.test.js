import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumDetails from './AlbumDetails';

test('AlbumDetails renders correctly', () => {
  render(<AlbumDetails />);
  const albumDetailsElement = screen.getByTestId('album-details');
  expect(albumDetailsElement).toBeInTheDocument();
  // Add more tests as needed
});

