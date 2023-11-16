import React from 'react';
import { render } from '@testing-library/react';
import EventList from './EventList';

test('renders Event List', () => {
  const { getByText } = render(<EventList />);
  const element = getByText('Event List');
  expect(element).toBeInTheDocument();
});
