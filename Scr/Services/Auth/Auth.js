// auth.js
import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://your-auth-api-url.com', // Replace with your authentication API URL
  timeout: 5000, // Set your desired timeout
});

// Define your authentication related API requests and functions here

export default authInstance;
