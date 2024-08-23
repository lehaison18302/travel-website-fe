import Api from "./baseApi";
import SignUp from "src/routes/SignUp";
import { useState } from "react";


export const login = (username, password) => {
  return Api.post("/login", { username, password })
    .then((response) => {
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    })
    .catch((error) => {
      // Xử lý lỗi ở đây
      throw error;
    });
};
