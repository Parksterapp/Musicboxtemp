import React from 'react';
import { render, screen } from '@testing-library/react';
import NavLinks from './NavLinks';

test('NavLinks renders correctly', () => {
  render(<NavLinks />);
  const navLinksElement = screen.getByTestId('nav-links');
  expect(navLinksElement).toBeInTheDocument();
  // Add more tests as needed
});
