// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your actual API URL
  timeout: 5000, // Set your desired timeout
});

// Define your API requests and functions here

export default instance;
