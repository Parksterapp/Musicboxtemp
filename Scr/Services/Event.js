// event.js
import api from './api';

// Define event-related API requests and functions here

export const getEventDetails = (eventId) => {
  return api.get(`/events/${eventId}`);
};
