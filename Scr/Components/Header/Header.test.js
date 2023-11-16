import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header component', () => {
  render(<Header />);
  const headerElement = screen.getByText('MusicBox');
  expect(headerElement).toBeInTheDocument();
});
  
