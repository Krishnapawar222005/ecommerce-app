import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-app-bkjb.onrender.com/api",
});

export default API;