import React from 'react';
import { render } from '@testing-library/react';
import { MusicPlayerProvider } from './MusicPlayerContext';

test('MusicPlayerProvider renders without crashing', () => {
  render(
    <MusicPlayerProvider>
      {/* Your test content goes here */}
    </MusicPlayerProvider>
  );
});
