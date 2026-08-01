import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/portfolio",
});

export const addPortfolio = (data) => API.post("/add", data);

export const getPortfolio = () => API.get("/");

export const deletePortfolio = (id) => API.delete(`/${id}`);

export const updatePortfolio = (id, data) =>
  API.put(`/${id}`, data);