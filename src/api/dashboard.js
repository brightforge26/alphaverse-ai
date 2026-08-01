import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/dashboard",
});

export const getDashboardStats = () =>
  API.get("/stats");

export const getPortfolioChart = () =>
  API.get("/chart");