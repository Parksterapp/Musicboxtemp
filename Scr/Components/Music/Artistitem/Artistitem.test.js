import React from 'react';
import { render } from '@testing-library/react';
import ArtistItem from './ArtistItem';

test('renders artist item', () => {
  const artist = {
    name: 'Sample Artist',
    genre: 'Pop',
    image: 'sample-image.jpg',
  };

  const { getByText, getByAltText } = render(<ArtistItem artist={artist} />);

  const nameElement = getByText(/Sample Artist/i);
  const genreElement = getByText(/Pop/i);
  const imgElement = getByAltText(/Sample Artist/i);

  expect(nameElement).toBeInTheDocument();
  expect(genreElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
