import axiosClient from "./axiosClient";

// Get Portfolio
export const getPortfolio = () =>
  axiosClient.get("/portfolio");

// Add Stock
export const addPortfolio = (data) =>
  axiosClient.post("/portfolio/add", data);

// Update Stock
export const updatePortfolio = (id, data) =>
  axiosClient.put(`/portfolio/${id}`, data);

// Delete Stock
export const deletePortfolio = (id) =>
  axiosClient.delete(`/portfolio/${id}`);

// Search Stocks
export const searchStocks = (query) =>
  axiosClient.get(`/portfolio/search?query=${query}`);