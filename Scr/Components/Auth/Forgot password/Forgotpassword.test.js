import React from 'react';
import { render, screen } from '@testing-library/react';
import ForgotPassword from './ForgotPassword';

test('ForgotPassword component renders correctly', () => {
  render(<ForgotPassword />);
  const forgotPasswordElement = screen.getByTestId('forgot-password');
  expect(forgotPasswordElement).toBeInTheDocument();
  // Add more tests as needed
});
