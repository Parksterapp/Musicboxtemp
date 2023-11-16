import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('renders message component', () => {
  const { getByText } = render(<Message />);
  const messageElement = getByText(/This is a message component/i);
  expect(messageElement).toBeInTheDocument();
});
