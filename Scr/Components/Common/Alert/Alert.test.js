import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

test('renders an alert with success style', () => {
  const { getByText } = render(<Alert message="Success message" type="success" />);
  const alertElement = getByText(/Success message/i);
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveClass('success');
});

test('renders an alert with error style', () => {
  const { getByText } = render(<Alert message="Error message" type="error" />);
  const alertElement = getByText(/Error message/i);
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveClass('error');
});

test('renders an alert with info style', () => {
  const { getByText } = render(<Alert message="Info message" type="info" />);
  const alertElement = getByText(/Info message/i);
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveClass('info');
});
  
