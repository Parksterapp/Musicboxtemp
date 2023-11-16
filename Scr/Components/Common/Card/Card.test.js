import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders card with title and content', () => {
  const { getByText } = render(<Card title="Test Title" content="Test Content" />);
  const titleElement = getByText(/Test Title/i);
  const contentElement = getByText(/Test Content/i);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
