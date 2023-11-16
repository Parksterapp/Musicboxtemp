// song.js
import api from './api';

// Define song-related API requests and functions here

export const getSongDetails = (songId) => {
  return api.get(`/songs/${songId}`);
};
