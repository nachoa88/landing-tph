import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || sessionStorage.getItem("token") || null,
  }),
  actions: {
    setToken(newToken, rememberMe = true) {
      this.token = newToken;
      if (newToken) {
        if (rememberMe) {
          localStorage.setItem("token", newToken);
          console.log("Token set in localStorage:", newToken);
        } else {
          sessionStorage.setItem("token", newToken);
          console.log("Token set in sessionStorage:", newToken);
        }
      } else {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
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
