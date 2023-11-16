import React from 'react';
import { render } from '@testing-library/react';
import AlbumItem from './AlbumItem';

test('renders album item', () => {
  const album = {
    title: 'Sample Album',
    artist: 'Sample Artist',
    cover: 'sample-cover.jpg',
  };

  const { getByText, getByAltText } = render(<AlbumItem album={album} />);

  const titleElement = getByText(/Sample Album/i);
  const artistElement = getByText(/Sample Artist/i);
  const imgElement = getByAltText(/Sample Album/i);

  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
