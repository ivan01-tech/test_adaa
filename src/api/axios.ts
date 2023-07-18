import axios from "axios";
import { apiUrl } from "../constants";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
