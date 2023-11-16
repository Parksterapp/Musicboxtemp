import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search bar component', () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText('Search...');
  expect(inputElement).toBeInTheDocument();
});

test('triggers search callback on button click', () => {
  const onSearch = jest.fn();
  render(<SearchBar onSearch={onSearch} />);
  const buttonElement = screen.getByText('Search');
  fireEvent.click(buttonElement);
  expect(onSearch).toHaveBeenCalled();
});
