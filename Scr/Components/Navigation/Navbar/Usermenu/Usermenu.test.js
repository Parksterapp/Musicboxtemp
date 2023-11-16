import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMenu from './UserMenu';

test('UserMenu renders correctly', () => {
  render(<UserMenu />);
  const userMenuElement = screen.getByTestId('user-menu');
  expect(userMenuElement).toBeInTheDocument();
  // Add more tests as needed
});
