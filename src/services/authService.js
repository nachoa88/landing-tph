import api from "./api";

export const authService = {
  async login(credentials) {
    try {
      const response = await api.post("/login", credentials);
      console.log("Login response:", response);

      // Additional validation just in case, reqres.in should return the token
      if (!response.token) {
        throw new Error("No authentication token received");
      }

      return response.token;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },
  async register(userData) {
    try {
      const response = await api.post("/register", userData);
      console.log("Register response:", response);

      // Additional validation, reqres should return the token and id
      if (!response.token || !response.id) {
        throw new Error("Registration failed: incomplete response");
      }

      return {
        token: response.token,
        id: response.id,
      };
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  },
};
