import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfirmModal from './ConfirmModal';

test('renders confirm modal with buttons', () => {
  render(<ConfirmModal />);
  const confirmText = screen.getByText(/Are you sure you want to continue?/i);
  const yesButton = screen.getByText(/Yes/i);
  const noButton = screen.getByText(/No/i);
  expect(confirmText).toBeInTheDocument();
  expect(yesButton).toBeInTheDocument();
  expect(noButton).toBeInTheDocument();
});
