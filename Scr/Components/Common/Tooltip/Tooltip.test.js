import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

test('renders tooltip with text', () => {
  const { getByText } = render(<Tooltip text="Hover for more info" />);
  const tooltipElement = getByText(/Hover for more info/i);
  expect(tooltipElement).toBeInTheDocument();
});
