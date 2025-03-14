import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // ✅ Always send cookies
});

export default instance;
