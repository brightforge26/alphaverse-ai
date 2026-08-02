import axios from "axios";

const API = "http://localhost:5000/api/portfolio";

export const getPortfolio = () => axios.get(API);

export const addPortfolio = (data) =>
  axios.post(`${API}/add`, data);

export const updatePortfolio = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deletePortfolio = (id) =>
  axios.delete(`${API}/${id}`);

// ✅ ADD THIS
export const searchStocks = (query) =>
  axios.get(`${API}/search?query=${query}`);