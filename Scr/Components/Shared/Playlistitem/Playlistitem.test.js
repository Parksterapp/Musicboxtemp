import React from 'react';
import { render } from '@testing-library/react';
import PlaylistItem from './PlaylistItem';

const mockPlaylist = {
  name: 'My Awesome Playlist',
  // Add other mock data
};

test('renders playlist name', () => {
  const { getByText } = render(<PlaylistItem playlist={mockPlaylist} />);
  const element = getByText('My Awesome Playlist');
  expect(element).toBeInTheDocument();
});
