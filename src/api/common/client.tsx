import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`; // spring
client.defaults.withCredentials = true;

const token = localStorage.getItem("token"); // access token

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

export default client;
