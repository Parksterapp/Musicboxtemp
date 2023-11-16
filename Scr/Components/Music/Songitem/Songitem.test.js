import React from 'react';
import { render } from '@testing-library/react';
import SongItem from './SongItem';

test('renders song item', () => {
  const song = {
    title: 'Sample Song',
    artist: 'Sample Artist',
  };

  const { getByText } = render(<SongItem song={song} />);

  const titleElement = getByText(/Sample Song/i);
  const artistElement = getByText(/Sample Artist/i);

  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
});
