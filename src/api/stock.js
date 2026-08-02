import axiosClient from "./axiosClient";

// Get Live Stock
export const getStock = (symbol) =>
  axiosClient.get(`/stock/${encodeURIComponent(symbol)}`);

// Search Stocks
export const searchStocks = (query) =>
  axiosClient.get(`/portfolio/search?query=${query}`);