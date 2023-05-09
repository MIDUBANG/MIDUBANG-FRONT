import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "http://3.38.77.244:8090/api/"; // spring
client.defaults.withCredentials = true;

const token = localStorage.getItem("token"); // access token
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"],
);

export default client;

// 5000포트도 추가 필요함.
