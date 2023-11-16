// api.test.js
import api from './api';

test('API client is initialized with the correct base URL', () => {
  expect(api.defaults.baseURL).toBe('https://api.example.com');
  // Replace 'https://api.example.com' with your actual base URL
  // Add more test cases for your API functions
});
