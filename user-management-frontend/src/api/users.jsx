import axios from "axios";

const API = axios.create({ baseURL: "https://fourty4-assignment-nxtwave-backend.onrender.com/api" });

export const getUsers = (params) => API.get("/users", { params });
export const getUser = (id) => API.get(`/users/${id}`);
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
