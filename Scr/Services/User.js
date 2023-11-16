// user.js
import api from './api';

// Define user-related API requests and functions here

export const getUserData = (userId) => {
  return api.get(`/users/${userId}`);
};

export const updateUserProfile = (userId, userData) => {
  return api.put(`/users/${userId}`, userData);
};
                 
