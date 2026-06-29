import axios from "axios";

const API = axios.create({
  baseURL: "https://my-blog-8xl3.onrender.com/api",
});

export default API;