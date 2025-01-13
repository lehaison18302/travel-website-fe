import axios from "axios";
const BASE_URL = "http://localhost:3000";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});