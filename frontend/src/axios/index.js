import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API_BASE_URL || "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
