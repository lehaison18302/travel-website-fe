import Api from "./baseApi";
import SignUp from "src/Layout/SignUp";
import { useState } from "react";


// export const login = (username, password) => {
//   return Api.post("/login", { username, password })
//     .then((response) => {
//       const accessToken = response.data.accessToken;
//       localStorage.setItem("accessToken", JSON.stringify(accessToken));
//       console.log(accessToken);
//       return response.data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
