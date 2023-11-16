import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayButton from './PlayButton';

test('renders PlayButton', () => {
  const { getByRole } = render(<PlayButton />);
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
});

test('handles onClick', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<PlayButton onClick={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
