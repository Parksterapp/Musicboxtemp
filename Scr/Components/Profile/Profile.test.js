import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

test('renders profile component', () => {
  const user = {
    name: 'John Doe',
    avatar: 'profile.jpg',
    bio: 'A passionate artist.',
  };
  const { getByText } = render(<Profile user={user} />);

  expect(getByText(user.name)).toBeInTheDocument();
  expect(getByText(user.bio)).toBeInTheDocument();
});
