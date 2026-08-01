import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/news",
});

export const getNews = () => API.get("/");