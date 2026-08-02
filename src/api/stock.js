import axios from "axios";

const API = "http://localhost:5000/api/stock";

export const getStock = (symbol) =>
  axios.get(`${API}/${encodeURIComponent(symbol)}`);

export const searchStocks = (query) =>
  axios.get(
    `http://localhost:5000/api/portfolio/search?query=${query}`
  );