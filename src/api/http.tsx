import axios from "axios";

export const http = axios.create({
  baseURL: "http://34.64.177.249:8080/api",
});

http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token") || "") ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

// export const Http = () => {
//   return <p>dd</p>;
// };
