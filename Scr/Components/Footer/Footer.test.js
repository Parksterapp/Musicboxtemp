import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/MusicBox/);
  expect(footerElement).toBeInTheDocument();
});
    
