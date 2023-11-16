import React from 'react';
import { render } from '@testing-library/react';
import EventItem from './EventItem';

const mockEvent = {
  name: 'Exciting Event',
  // Add other mock data
};

test('renders event name', () => {
  const { getByText } = render(<EventItem event={mockEvent} />);
  const element = getByText('Exciting Event');
  expect(element).toBeInTheDocument();
});
