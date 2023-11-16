// api.js
import axios from 'axios';

const baseURL = 'https://api.example.com'; // Replace with your API base URL

const api = axios.create({
  baseURL,
});

// Define your API endpoints and functions here

export default api;
