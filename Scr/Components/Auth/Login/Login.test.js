import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('Login component renders correctly', () => {
  render(<Login />);
  const loginElement = screen.getByTestId('login');
  expect(loginElement).toBeInTheDocument();
  // Add more tests as needed
});
