import api from "./api";

export const authService = {
  async login(credentials) {
    const response = await api.post("/login", credentials);
    console.log("Login response:", response);
    return response.token;
  },
  async register(userData) {
    const response = await api.post("/register", userData);
    console.log("Register response:", response);
    // reqres.in should return the user id and token in the response
    return {
      token: response.token,
      id: response.id
    };
  },
};
