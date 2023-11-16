import React from 'react';
import { render } from '@testing-library/react';
import EventDetail from './EventDetail';

test('renders Event Detail', () => {
  const { getByText } = render(<EventDetail />);
  const element = getByText('Event Detail');
  expect(element).toBeInTheDocument();
});
