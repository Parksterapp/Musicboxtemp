// Library.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Library from './Library';

test('renders library component', () => {
  const { getByText } = render(<Library />);
  const linkElement = getByText(/Library/i);
  expect(linkElement).toBeInTheDocument();
});
  
