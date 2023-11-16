import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VolumeControl from './VolumeControl';

test('VolumeControl component responds to mute and volume change', () => {
  const volume = 0.7;
  const onVolumeChange = jest.fn();

  const { container, getByText } = render(<VolumeControl volume={volume} onVolumeChange={onVolumeChange} />);

  const volumeSlider = container.querySelector('.volume-slider');
  const volumeToggle = getByText('Mute');

  fireEvent.change(volumeSlider, { target: { value: 0.5 } });
  fireEvent.click(volumeToggle);

  expect(onVolumeChange).toHaveBeenCalledTimes(2);
  expect(onVolumeChange).toHaveBeenCalledWith(0.5);
  expect(onVolumeChange).toHaveBeenCalledWith(0);
  expect(volumeToggle.textContent).toBe('Unmute');
});
  
