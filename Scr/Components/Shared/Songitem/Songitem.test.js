import React from 'react';
import { render } from '@testing-library/react';
import SongItem from './SongItem';

const mockSong = {
  title: 'Awesome Song',
  // Add other mock data
};

test('renders song title', () => {
  const { getByText } = render(<SongItem song={mockSong} />);
  const element = getByText('Awesome Song');
  expect(element).toBeInTheDocument();
});
