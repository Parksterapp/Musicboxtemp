import axios from 'axios';
import apiClientConfig from './apiClient.config';
import apiRoutes from './apiClient.routes';

const apiClient = axios.create({
  baseURL: apiClientConfig.baseURL,
  timeout: apiClientConfig.timeout,
});

export default apiClient;
