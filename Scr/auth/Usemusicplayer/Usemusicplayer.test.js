// useMusicPlayer.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useMusicPlayer from './useMusicPlayer';

test('should play and pause', () => {
  const { result } = renderHook(() => useMusicPlayer());

  act(() => {
    result.current.play();
  });

  expect(result.current.isPlaying).toBe(true);

  act(() => {
    result.current.pause();
  });

  expect(result.current.isPlaying).toBe(false);
});
