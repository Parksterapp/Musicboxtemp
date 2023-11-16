import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('Sidebar renders correctly', () => {
  render(<Sidebar />);
  const sidebarElement = screen.getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();
  // Add more tests as needed
});
