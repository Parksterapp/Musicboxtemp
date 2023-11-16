import React from 'react';
import { render } from '@testing-library/react';
import PlaylistDetail from './PlaylistDetail';

test('renders Playlist Detail', () => {
  const { getByText } = render(<PlaylistDetail />);
  const element = getByText('Playlist Detail');
  expect(element).toBeInTheDocument();
});
