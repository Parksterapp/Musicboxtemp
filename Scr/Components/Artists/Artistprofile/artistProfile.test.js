import React from 'react';
import { render } from '@testing-library/react';
import ArtistProfile from './ArtistProfile';

test('renders Artist Profile', () => {
  const { getByText } = render(<ArtistProfile />);
  const element = getByText('Artist Profile');
  expect(element).toBeInTheDocument();
});
