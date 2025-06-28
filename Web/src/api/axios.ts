import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "http://URL",
    headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance;