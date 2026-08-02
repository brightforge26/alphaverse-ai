import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// ===============================
// Register
// ===============================

export const registerUser = (data) =>
  API.post("/register", data);

// ===============================
// Login
// ===============================

export const loginUser = async (data) => {
  const response = await API.post("/login", data);

  // Save email locally as a fallback
  // even if backend doesn't return user.email
  if (data.email) {
    localStorage.setItem("email", data.email);
  }

  // Save username if backend returns it
  if (response.data?.user?.username) {
    localStorage.setItem(
      "username",
      response.data.user.username
    );
  }

  // Save token if backend returns it
  if (response.data?.token) {
    localStorage.setItem(
      "token",
      response.data.token
    );
  }

  return response;
};