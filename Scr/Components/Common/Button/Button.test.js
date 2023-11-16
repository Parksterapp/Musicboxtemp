import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders a button with the given label', () => {
  const { getByText } = render(<Button label="Click Me" />);
  const buttonElement = getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('invokes the provided onClick function when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Click Me" onClick={onClickMock} />);
  const buttonElement = getByText(/Click Me/i);

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
  
