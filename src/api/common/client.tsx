import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "http://34.64.177.249:8080/api/";
client.defaults.withCredentials = true;

const token = localStorage.getItem("token");
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
