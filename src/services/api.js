import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 5000, // Set the timeout to 5 seconds.
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Test request and response interceptors!
// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data, // Return data directly for successful responses
  (error) => {
    if (!error.response) {
      console.error("Network error or timeout"); // Network error or timeout
      return Promise.reject(new Error("Network error - please check your connection"));
    }

    switch (error.response.status) {
      case 401:
        console.error("Unauthorized access");
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token"); // Remove token if it exists
        }
        window.location.href = "/login"; // Optional: redirect to login
        break;

      case 404:
        console.error("Resource not found");
        return Promise.reject(new Error("The requested resource does not exist or is not available."));

      case 500:
        console.error("Server error");
        return Promise.reject(new Error("A server error occurred. Please try again later."));

      default:
        console.error("API error:", error.response.data);
        return Promise.reject(new Error("An error occurred while processing your request."));
    }
  }
);

export default api;
