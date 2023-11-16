import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PauseButton from './PauseButton';

test('renders PauseButton', () => {
  const { getByRole } = render(<PauseButton />);
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
});

test('handles onClick', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<PauseButton onClick={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
                           
