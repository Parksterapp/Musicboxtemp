import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Progress from './Progress';

test('Progress component displays and responds to clicks', () => {
  const currentTime = 30;
  const duration = 120;
  const onSeek = jest.fn();

  const { container } = render(<Progress currentTime={currentTime} duration={duration} onSeek={onSeek} />);

  const progressBar = container.querySelector('.progress-bar');
  fireEvent.click(progressBar, {
    nativeEvent: { offsetX: 60 }, // Simulate clicking at 50% progress
  });

  expect(onSeek).toHaveBeenCalledWith(60);
  expect(progressBar.querySelector('.progress-filled').style.width).toBe('50%');
});
