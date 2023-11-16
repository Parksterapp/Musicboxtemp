import React from 'react';
import { render } from '@testing-library/react';
import PlaylistItem from './PlaylistItem';

test('renders playlist item', () => {
  const playlist = {
    title: 'Sample Playlist',
    owner: 'Sample User',
  };

  const { getByText } = render(<PlaylistItem playlist={playlist} />);

  const titleElement = getByText(/Sample Playlist/i);
  const ownerElement = getByText(/Sample User/i);

  expect(titleElement).toBeInTheDocument();
  expect(ownerElement).toBeInTheDocument();
});
