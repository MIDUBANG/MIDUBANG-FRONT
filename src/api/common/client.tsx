import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "http://34.64.177.249:8080/api/";
client.defaults.withCredentials = true;

let token = false;
const test = localStorage.getItem("token");
if (typeof test === "string") {
  token = JSON.parse(test);
}

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

export default client;
