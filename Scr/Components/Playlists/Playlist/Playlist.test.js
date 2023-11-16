import React from 'react';
import { render } from '@testing-library/react';
import PlaylistList from './PlaylistList';

test('renders Playlist List', () => {
  const { getByText } = render(<PlaylistList />);
  const element = getByText('Playlist List');
  expect(element).toBeInTheDocument();
});
