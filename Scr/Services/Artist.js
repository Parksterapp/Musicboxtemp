// artist.js
import api from './api';

// Define artist-related API requests and functions here

export const getArtistDetails = (artistId) => {
  return api.get(`/artists/${artistId}`);
};
