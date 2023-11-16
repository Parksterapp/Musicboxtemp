// useTheme.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useTheme from './useTheme';

test('should toggle theme', () => {
  const { result } = renderHook(() => useTheme());

  expect(result.current.theme).toBe('light');

  act(() => {
    result.current.toggleTheme();
  });

  expect(result.current.theme).toBe('dark');
});
    
