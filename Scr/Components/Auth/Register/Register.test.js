import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './Register';

test('Register component renders correctly', () => {
  render(<Register />);
  const registerElement = screen.getByTestId('register');
  expect(registerElement).toBeInTheDocument();
  // Add more tests as needed
});
