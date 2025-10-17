import api, { setAuthToken } from "./api";

const TOKEN_KEY = "lj_token";

export default {
  async login(email, password) {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);
    const res = await api.post("/auth/token", form);
    const token = res.data.access_token;
    localStorage.setItem(TOKEN_KEY, token);
    setAuthToken(token);
    return token;
  },
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    delete api.defaults.headers.common["Authorization"];
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  init() {
    const t = this.getToken();
    if (t) setAuthToken(t);
  }
};