import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar renders correctly', () => {
  render(<SearchBar />);
  const searchBarElement = screen.getByTestId('search-bar');
  expect(searchBarElement).toBeInTheDocument();
  // Add more tests as needed
});
