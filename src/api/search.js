import axios from "axios";

const API = "http://localhost:5000/api";

export const searchStocks = (query) => {
  return axios.get(`${API}/portfolio/search?query=${query}`);
};