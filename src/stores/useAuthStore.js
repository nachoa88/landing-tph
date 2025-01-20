import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken;
      if (newToken) {
        localStorage.setItem("token", newToken);
        console.log("Token set:", newToken);
      } else {
        localStorage.removeItem("token");
        console.log("Token removed");
      }
    },
    logout() {
      this.setToken(null);
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
});
