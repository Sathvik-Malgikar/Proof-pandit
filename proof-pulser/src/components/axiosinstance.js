import axios from 'axios';

const axiosInstance = axios.create({
  // Specify the base URL for your API requests
  baseURL: 'http://localhost:6000', // Replace with your API's base URL
  timeout: 5000, // Optional, set a timeout for requests (in milliseconds)
  // You can also add other configurations here, such as headers
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

export default axiosInstance;