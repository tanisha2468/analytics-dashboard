import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5001/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const fetchSales = (params) => API.get("/sales", { params });

export const loginUser = (data) => API.post("/auth/login", data);

export const signupUser = (data) => API.post("/auth/signup", data);
