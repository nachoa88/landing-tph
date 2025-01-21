import api from "./api";

export const authService = {
  async login(credentials) {
    const response = await api.post("/login", credentials);
    console.log("Login response:", response);
    return response.token;
  },
  // Register
};
