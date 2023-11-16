// album.js
import api from './api';

// Define album-related API requests and functions here

export const getAlbumDetails = (albumId) => {
  return api.get(`/albums/${albumId}`);
};
