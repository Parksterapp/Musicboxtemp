import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrevButton from './PrevButton';

test('renders PrevButton', () => {
  const { getByRole } = render(<PrevButton />);
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
});

test('handles onClick', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<PrevButton onClick={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
