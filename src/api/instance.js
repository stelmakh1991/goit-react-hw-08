import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

const TIMEOUT = 1000 * 30;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export default instance;