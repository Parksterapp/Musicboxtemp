import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarLinks from './SidebarLinks';

test('SidebarLinks renders correctly', () => {
  render(<SidebarLinks />);
  const sidebarLinksElement = screen.getByTestId('sidebar-links');
  expect(sidebarLinksElement).toBeInTheDocument();
  // Add more tests as needed
});
