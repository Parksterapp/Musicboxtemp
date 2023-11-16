import React from 'react';
import { render } from '@testing-library/react';
import Settings from './Settings';

test('renders App Settings', () => {
  const { getByText } = render(<Settings />);
  const element = getByText('App Settings');
  expect(element).toBeInTheDocument();
});
