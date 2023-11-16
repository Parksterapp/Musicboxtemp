import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayQueue from './PlayQueue';

const sampleSongs = [
  { title: 'Song 1' },
  { title: 'Song 2' },
  { title: 'Song 3' },
];

test('PlayQueue component renders songs and handles remove', () => {
  const onRemoveSong = jest.fn();
  const { container, getByText } = render(
    <PlayQueue songs={sampleSongs} onRemoveSong={onRemoveSong} />
  );

  const songTitles = container.querySelectorAll('.song-title');
  const removeButtons = container.querySelectorAll('.remove-song');

  expect(songTitles.length).toBe(sampleSongs.length);
  expect(removeButtons.length).toBe(sampleSongs.length);

  fireEvent.click(removeButtons[1]);

  expect(onRemoveSong).toHaveBeenCalledTimes(1);
  expect(onRemoveSong).toHaveBeenCalledWith(1);
});
