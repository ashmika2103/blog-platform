import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-platform-oexy.onrender.com/api",
});

export default API;