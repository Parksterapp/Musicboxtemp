import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from './UserContext';

test('UserProvider renders without crashing', () => {
  render(
    <UserProvider>
      {/* Your test content goes here */}
    </UserProvider>
  );
});
