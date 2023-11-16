import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextButton from './NextButton';

test('renders NextButton', () => {
  const { getByRole } = render(<NextButton />);
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
});

test('handles onClick', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<NextButton onClick={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
    
